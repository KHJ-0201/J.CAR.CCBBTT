# -*- coding: utf-8 -*-
import re
from pathlib import Path
from collections import Counter, defaultdict

out_dir = Path(r"c:\Users\UserK\Desktop\codevCBT (커서)집26.11.03 산기문제 최신화\_hwp_extract")
files = [
    "1회차.hwp", "2회차-1.hwp", "2회차-2.hwp", "3회차.hwp", "4회차.hwp", "5회차.hwp",
    "6회차.hwp", "7회차.hwp", "8회차.hwp", "9회차.hwp", "10회차.hwp", "11회차.hwp",
]

tag_re = re.compile(
    r'\[(?:객관식|주관식|줄긋기|연결|o\s*,\s*x|o/?x|ox)\]\s*0*(\d{1,3})\b',
    re.I,
)
tag_only_re = re.compile(
    r'\[(객관식|주관식|줄긋기|연결|o\s*,\s*x|o/?x|ox)\]',
    re.I,
)


def norm_type(tag: str) -> str:
    s = tag.lower().replace(' ', '')
    if '객관' in s:
        return '객관식'
    if '주관' in s:
        return '주관식'
    if '줄긋' in s or '연결' in s:
        return '줄긋기'
    if 'o' in s and 'x' in s:
        return 'OX'
    return tag


rows = []
for f in files:
    text = (out_dir / f'{f}.hwp5.txt').read_text(encoding='utf-8', errors='ignore')
    items = []
    for m in tag_re.finditer(text):
        typ = norm_type(m.group(0).split(']')[0] + ']')
        # better: capture group from tag_only
        tm = tag_only_re.search(m.group(0))
        typ = norm_type(tm.group(1) if tm else m.group(0))
        num = int(m.group(1))
        items.append((num, typ))

    nums = [n for n, _ in items]
    types = Counter(t for _, t in items)
    answers = len(re.findall(r'정답\s*:', text))

    # detect gaps
    uniq = sorted(set(nums))
    missing = []
    if uniq:
        missing = [i for i in range(uniq[0], uniq[-1] + 1) if i not in set(nums)]

    rows.append({
        'file': f,
        'count': len(items),
        'uniq': len(uniq),
        'min': uniq[0] if uniq else None,
        'max': uniq[-1] if uniq else None,
        'types': dict(types),
        'answers': answers,
        'missing': missing[:20],
        'dup': [n for n, c in Counter(nums).items() if c > 1],
    })

    print('====', f)
    print(f"  문항={len(items)} (고유번호={len(uniq)}) 범위={uniq[0] if uniq else '-'}~{uniq[-1] if uniq else '-'} 정답표기={answers}")
    print(f"  유형={dict(types)}")
    if missing:
        print(f"  빠진번호(일부)={missing}")
    if rows[-1]['dup']:
        print(f"  중복번호={rows[-1]['dup']}")
    print()

# group by logical round
print('=== 회차별(논리) 합산 ===')
# 2회차 = 2회차-1 + 2회차-2
logical = defaultdict(lambda: {'count': 0, 'types': Counter(), 'files': []})
for r in rows:
    name = r['file']
    if name.startswith('2회차'):
        key = '2회차'
    else:
        key = name.replace('.hwp', '')
    logical[key]['count'] += r['count']
    logical[key]['types'].update(r['types'])
    logical[key]['files'].append(f"{name}({r['count']})")

order = ['1회차', '2회차', '3회차', '4회차', '5회차', '6회차', '7회차', '8회차', '9회차', '10회차', '11회차']
grand = 0
for k in order:
    info = logical[k]
    grand += info['count']
    print(f"{k}\t{info['count']}문항\t{dict(info['types'])}\t← {', '.join(info['files'])}")
print(f"\n전체 합계: {grand}문항")
print(f"회차 수: {len(order)}")
print(f"회차당 균등화 시 참고: 평균 {grand/len(order):.1f}문항")
