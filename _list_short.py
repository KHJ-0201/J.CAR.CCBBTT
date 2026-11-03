# -*- coding: utf-8 -*-
import re
from pathlib import Path

p = Path(r"start/문제모음/01자동차정비산업기사/01정비산업기사_책출제문제.js")
t = p.read_text(encoding="utf-8")
shorts = re.findall(r"\{[^{}]*\"type\": \"short\"[^{}]*\}", t)
print("short", len(shorts))
for s in shorts:
    qm = re.search(r'"question": "((?:\\.|[^"\\])*)"', s)
    qs = qm.group(1) if qm else "?"
    print("-", qs[:90].replace("\\n", " | "))
