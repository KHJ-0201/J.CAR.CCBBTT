# -*- coding: utf-8 -*-
import re
from pathlib import Path

p = Path(r"start/문제모음/01자동차정비산업기사/01정비산업기사_책출제문제.js")
t = p.read_text(encoding="utf-8")
keys = ("쓰시오", "무엇인가", "원어", "절차를", "명칭은", "센서는?", "장치는?")
n = 0


def repl(m):
    global n
    s = m.group(0)
    qm = re.search(r'"question": "(.*?)"', s)
    qs = qm.group(1) if qm else ""
    if any(k in qs for k in keys):
        n += 1
        return s.replace('"type": "mc"', '"type": "short"', 1)
    return s


newt = re.sub(r"\{[^{}\n]*\"type\": \"mc\"[^{}\n]*\}", repl, t)
p.write_text(newt, encoding="utf-8")
print("retagged", n)
print("short count", newt.count('"type": "short"'))
