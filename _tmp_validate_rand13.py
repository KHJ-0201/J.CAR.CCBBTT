# -*- coding: utf-8 -*-
import json
import re
from collections import Counter
from pathlib import Path

p = Path(r"c:\Users\UserK\Desktop\codevCBT (커서)집26.11.03 산기문제 최신화\start\문제모음\01자동차정비산업기사\01정비산업기사_책랜덤문제.js")
text = p.read_text(encoding="utf-8")

# strip export wrapper → evaluate arrays
m = re.search(r"export const bookRandomQuizSets = (\[[\s\S]*\]);\s*$", text)
assert m, "export not found"
# convert to JSON-ish: already JSON objects inside; only need property keys quoted for id/roundName
raw = m.group(1)
# replace unquoted JS keys
raw_json = re.sub(r"(\n\s*)(id|roundName|roundGroup|repairData):", r'\1"\2":', raw)
# trailing commas before ] or }
raw_json = re.sub(r",(\s*[\]\}])", r"\1", raw_json)
sets = json.loads(raw_json)
print("sets", len(sets))
bad = 0
for s in sets:
    qs = s["repairData"]
    c = Counter(q["type"] for q in qs)
    print(s["id"], len(qs), dict(c))
    if len(qs) != 40:
        bad += 1
        print("  SIZE ERR")
    for q in qs:
        t = q["type"]
        if t == "mc":
            if not q.get("options") or q.get("answer") not in range(len(q["options"])):
                bad += 1
                print("  mc bad", q.get("question", "")[:50])
        elif t == "ox":
            if not isinstance(q.get("answer"), bool):
                bad += 1
                print("  ox bad")
        elif t == "match":
            left, right, ans = q.get("left"), q.get("right"), q.get("answer")
            if not left or not right or not ans:
                bad += 1
                print("  match empty", q.get("question", "")[:50])
            else:
                for a, b in ans:
                    if a >= len(left) or b >= len(right):
                        bad += 1
                        print("  match idx", q.get("question", "")[:50], a, b)
        elif t == "short":
            if not (q.get("answer") or q.get("answers")):
                bad += 1
                print("  short empty")
        else:
            bad += 1
            print("  unknown type", t)
print("bad", bad)
print("sample q1 commas ok?", '{"type": "mc"' in text and '},\n            {"type"' in text)
