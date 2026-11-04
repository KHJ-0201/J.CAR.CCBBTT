# -*- coding: utf-8 -*-
"""HWP5 BodyText 섹션 해제 후 문항 번호/유형 집계"""
import re
import struct
import zlib
import sys
from pathlib import Path
from collections import Counter

try:
    import olefile
except ImportError:
    import subprocess
    subprocess.check_call([sys.executable, '-m', 'pip', 'install', 'olefile', '-q'])
    import olefile

base = Path(r"c:\Users\UserK\Desktop\과정형평가 산업기사책 문제모음\기출문제 모음")
out_dir = Path(r"c:\Users\UserK\Desktop\codevCBT (커서)집26.11.03 산기문제 최신화\_hwp_extract")
out_dir.mkdir(exist_ok=True)

files = [
    "1회차.hwp", "2회차-1.hwp", "2회차-2.hwp", "3회차.hwp", "4회차.hwp", "5회차.hwp",
    "6회차.hwp", "7회차.hwp", "8회차.hwp", "9회차.hwp", "10회차.hwp", "11회차.hwp",
]


def decompress_body_section(data: bytes) -> bytes:
    """HWP 5.x BodyText/Section* : 연속 zlib 청크 (앞 4바이트 = 압축크기 LE일 수 있음)"""
    out = bytearray()
    # Method A: length-prefixed chunks
    i = 0
    ok_any = False
    while i + 4 <= len(data):
        (clen,) = struct.unpack_from('<I', data, i)
        if clen == 0 or i + 4 + clen > len(data):
            break
        chunk = data[i + 4:i + 4 + clen]
        try:
            out.extend(zlib.decompress(chunk, -15))  # raw deflate sometimes
            ok_any = True
            i += 4 + clen
            continue
        except Exception:
            pass
        try:
            out.extend(zlib.decompress(chunk))
            ok_any = True
            i += 4 + clen
            continue
        except Exception:
            break
    if ok_any and out:
        return bytes(out)

    # Method B: scan zlib headers repeatedly
    out = bytearray()
    i = 0
    while i + 2 < len(data):
        if data[i] == 0x78 and data[i + 1] in (0x01, 0x5E, 0x9C, 0xDA):
            dobj = zlib.decompressobj()
            try:
                chunk = dobj.decompress(data[i:])
                if chunk:
                    out.extend(chunk)
                    consumed = len(data[i:]) - len(dobj.unused_data)
                    i += max(1, consumed)
                    continue
            except Exception:
                pass
        i += 1
    if out:
        return bytes(out)

    # Method C: whole stream after 0/4/8
    for skip in (0, 4, 8, 16):
        try:
            return zlib.decompress(data[skip:])
        except Exception:
            continue
    return data


def utf16_strings(raw: bytes, min_len=2):
    texts = []
    chars = []
    j = 0
    while j + 1 < len(raw):
        code = raw[j] | (raw[j + 1] << 8)
        if (0x20 <= code <= 0xD7FF) or (0xE000 <= code <= 0xFFFD):
            chars.append(chr(code))
        else:
            if len(chars) >= min_len:
                texts.append(''.join(chars))
            chars = []
        j += 2
    if len(chars) >= min_len:
        texts.append(''.join(chars))
    return texts


def extract_hwp_text(path: Path) -> str:
    ole = olefile.OleFileIO(str(path))
    parts = []
    # FileHeader / DocInfo for debug sizes
    sections = sorted(
        [e for e in ole.listdir() if len(e) == 2 and e[0] == 'BodyText' and e[1].startswith('Section')],
        key=lambda e: e[1]
    )
    for entry in sections:
        data = ole.openstream(entry).read()
        raw = decompress_body_section(data)
        parts.extend(utf16_strings(raw, min_len=1))
        # also try latin1 garbage filter later
    # PrvText fallback
    if ole.exists('PrvText'):
        try:
            parts.append(ole.openstream('PrvText').read().decode('utf-16-le', errors='ignore'))
        except Exception:
            pass
    ole.close()
    # join with spaces but keep tag boundaries
    return '\n'.join(parts)


def analyze(text: str):
    clean = re.sub(r'[\x00-\x08\x0b\x0c\x0e-\x1f]', '', text)
    # normalize spaces lightly for number detection
    flat = re.sub(r'[ \t]+', ' ', clean)

    # type labels as in files: [객관식] [o,x] [주관식] [줄긋기]
    tag_pat = re.compile(
        r'\[(?:객관식|주관식|줄긋기|연결|o\s*,\s*x|o/?x|ox|O\s*,\s*X|OX)\]',
        re.I
    )
    tags = tag_pat.findall(flat)
    tag_norm = []
    for t in tags:
        s = t.strip('[]').lower().replace(' ', '')
        if '객관' in s:
            tag_norm.append('객관식')
        elif '주관' in s:
            tag_norm.append('주관식')
        elif '줄긋' in s or '연결' in s:
            tag_norm.append('줄긋기')
        elif 'o' in s and 'x' in s:
            tag_norm.append('OX')
        else:
            tag_norm.append(t)

    # question numbers after tags: [객관식] 01  or [o,x] 12
    qnums = []
    for m in re.finditer(
        r'\[(?:객관식|주관식|줄긋기|연결|o\s*,\s*x|o/?x|ox)\]\s*0*(\d{1,3})\b',
        flat,
        flags=re.I,
    ):
        qnums.append(int(m.group(1)))

    # also "정답:" count as proxy for items with answers
    answer_cnt = len(re.findall(r'정답\s*:', flat))

    return {
        'chars': len(flat),
        'tags': tag_norm,
        'tag_counts': Counter(tag_norm),
        'qnums': qnums,
        'qnum_unique': sorted(set(qnums)),
        'q_count_by_nums': len(set(qnums)),
        'answer_cnt': answer_cnt,
        'preview': re.sub(r'\s+', ' ', flat)[:500],
        'tail': re.sub(r'\s+', ' ', flat)[-500:],
    }


rows = []
for f in files:
    p = base / f
    text = extract_hwp_text(p)
    (out_dir / f'{f}.full.txt').write_text(text, encoding='utf-8')
    info = analyze(text)
    rows.append((f, info))
    print('====', f)
    print('chars', info['chars'], 'answers', info['answer_cnt'], 'qnums', info['q_count_by_nums'],
          'range', (min(info['qnums']) if info['qnums'] else None, max(info['qnums']) if info['qnums'] else None))
    print('types', dict(info['tag_counts']))
    print('qnums sample', info['qnums'][:15], '...', info['qnums'][-10:])
    print('preview', info['preview'][:250])
    print('tail', info['tail'][:250])
    print()

print('\n=== 회차별 요약 ===')
total = 0
for f, info in rows:
    # Prefer unique question numbers; if empty use answer_cnt / tag count
    n = info['q_count_by_nums'] or info['answer_cnt'] or len(info['tags'])
    total += n
    print(f"{f}\t문항추정={n}\t정답표기={info['answer_cnt']}\t유형태그={dict(info['tag_counts'])}\t번호범위={info['qnum_unique'][:3]}..{info['qnum_unique'][-3:] if info['qnum_unique'] else []}")
print('합계(파일 합)', total)
