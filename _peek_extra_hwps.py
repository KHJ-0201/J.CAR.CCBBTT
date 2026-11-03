# -*- coding: utf-8 -*-
import re
from collections import Counter
from pathlib import Path
import _convert_book_hwp as cv

FILES = [
    ("네트워크 통신장치 정비 예상문제(추가).hwp", "자동차네트워크통신장치정비", "book_network"),
    ("제동장치 정비 예상문제(추가).hwp", "제동장치정비", "book_brake"),
    ("조향장치 정비 예상문제(추가).hwp", "조향장치정비", "book_steering"),
    ("현가장치 정비 예상문제(추가).hwp", "현가장치정비", "book_suspension"),
]

out = Path("_extra_peek")
out.mkdir(exist_ok=True)

for fname, tag, sid in FILES:
    p = cv.HWP_DIR / fname
    if not p.exists():
        print("MISSING", p)
        continue
    text = cv.extract_hwp(p)
    (out / f"{sid}_raw.txt").write_text(text, encoding="utf-8")
    sect = Counter(re.findall(r"\[(객관식|OX문제|줄긋기|주관식|계산문제)\]", text))
    qs, fails = cv.convert(p, tag)
    print("====", sid, fname)
    print("tags", dict(sect), "ok", len(qs), Counter(q["type"] for q in qs), "fails", len(fails))
    for f in fails[:8]:
        print(" FAIL", f["type"], f["preview"][:120])
    for q in qs:
        if q["type"] == "short":
            ans = (q.get("answers") or [""])[0][:70]
            print(" SHORT:", q["question"][:85].replace("\n", " | "), "=>", ans)
