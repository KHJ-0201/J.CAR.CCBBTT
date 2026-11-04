# -*- coding: utf-8 -*-
import re
import sys
import zlib
from pathlib import Path

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


def extract_hwp_text(path: Path) -> str:
    ole = olefile.OleFileIO(str(path))
    texts = []
    for entry in ole.listdir():
        name = '/'.join(entry)
        if not (name.startswith('BodyText/') or name == 'PrvText'):
            continue
        data = ole.openstream(entry).read()
        if name == 'PrvText':
            try:
                texts.append(data.decode('utf-16-le', errors='ignore'))
            except Exception:
                pass
            continue

        out = bytearray()
        # scan zlib streams
        i = 0
        while i + 1 < len(data):
            if data[i] == 0x78 and data[i + 1] in (0x01, 0x9C, 0xDA, 0x5E):
                try:
                    dobj = zlib.decompressobj()
                    chunk = dobj.decompress(data[i:])
                    out.extend(chunk)
                    i += max(1, len(data[i:]) - len(dobj.unused_data))
                    continue
                except Exception:
                    pass
            i += 1
        if not out:
            for skip in (0, 4, 8):
                try:
                    out.extend(zlib.decompress(data[skip:]))
                    break
                except Exception:
                    continue

        raw = bytes(out)
        chars = []
        j = 0
        while j + 1 < len(raw):
            code = raw[j] | (raw[j + 1] << 8)
            if code == 0:
                if len(chars) > 1:
                    texts.append(''.join(chars))
                chars = []
            elif (0x20 <= code <= 0xD7FF) or (0xE000 <= code <= 0xFFFD):
                chars.append(chr(code))
            else:
                if len(chars) > 2:
                    texts.append(''.join(chars))
                chars = []
            j += 2
        if len(chars) > 2:
            texts.append(''.join(chars))
    ole.close()
    return '\n'.join(texts)


def analyze(text: str):
    clean = re.sub(r'[\x00-\x08\x0b\x0c\x0e-\x1f]', '', text)
    # common markers in these 교재 files
    type_tags = re.findall(r'\[(객관식|O/?X|OX|줄긋기|연결|주관식|단답|참/?거짓)\]', clean, flags=re.I)
    # numbered questions like "1." "01." "문제 1"
    num_dot = re.findall(r'(?:^|\n)\s*(\d{1,3})\s*[\.．、]', clean)
    munje = re.findall(r'문제\s*(\d{1,3})', clean)
    bun = re.findall(r'(?:^|\n)\s*(\d{1,3})\s*번', clean)
    return {
        'chars': len(clean),
        'type_tags': type_tags,
        'type_tag_count': len(type_tags),
        'num_dot': len(num_dot),
        'munje': len(munje),
        'bun': len(bun),
        'preview': re.sub(r'\s+', ' ', clean)[:800],
    }


summary = []
for f in files:
    p = base / f
    text = extract_hwp_text(p)
    (out_dir / (f + '.txt')).write_text(text, encoding='utf-8')
    info = analyze(text)
    summary.append((f, info))
    print('====', f)
    print('chars', info['chars'], 'type_tags', info['type_tag_count'], info['type_tags'][:20])
    print('num_dot', info['num_dot'], 'munje', info['munje'], 'bun', info['bun'])
    print('preview:', info['preview'][:400])
    print()

print('SUMMARY')
for f, info in summary:
    print(f'{f}\ttags={info["type_tag_count"]}\tnum_dot={info["num_dot"]}\tmunje={info["munje"]}\tbun={info["bun"]}')
