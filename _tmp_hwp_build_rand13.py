# -*- coding: utf-8 -*-
"""HWP 추출본 → 산업기사 책 랜덤문제 13회차(회차당 40) JS 생성."""
from __future__ import annotations

import json
import re
from collections import Counter, defaultdict
from pathlib import Path

ROOT = Path(r"c:\Users\UserK\Desktop\codevCBT (커서)집26.11.03 산기문제 최신화")
OUT_DIR = ROOT / "_hwp_extract"
JS_OUT = ROOT / "start" / "문제모음" / "01자동차정비산업기사" / "01정비산업기사_책랜덤문제.js"

FILES = [
    "1회차.hwp",
    "2회차-1.hwp",
    "2회차-2.hwp",
    "3회차.hwp",
    "4회차.hwp",
    "5회차.hwp",
    "6회차.hwp",
    "7회차.hwp",
    "8회차.hwp",
    "9회차.hwp",
    "10회차.hwp",
    "11회차.hwp",
]

CIRCLE_LEFT = "①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮"
CIRCLE_RIGHT = "㉠㉡㉢㉣㉤㉥㉦㉧㉨㉩㉪㉫㉬㉭㉮"
LEFT_MAP = {c: i for i, c in enumerate(CIRCLE_LEFT)}
RIGHT_MAP = {c: i for i, c in enumerate(CIRCLE_RIGHT)}

TAG_SPLIT = re.compile(
    r"(?=\[(?:객관식|주관식|줄긋기|연결|o\s*,\s*x|o/?x|ox)\])",
    re.I,
)
TAG_HEAD = re.compile(
    r"^\[(객관식|주관식|줄긋기|연결|o\s*,\s*x|o/?x|ox)\]\s*0*(\d{1,3})\s*",
    re.I | re.S,
)
ANS_RE = re.compile(r"^정답\s*:\s*(.+)$", re.M)
EX_RE = re.compile(r"^해설\s*:\s*(.*)$", re.M | re.S)


def norm_type(tag: str) -> str:
    s = tag.lower().replace(" ", "")
    if "객관" in s:
        return "mc"
    if "주관" in s:
        return "short"
    if "줄긋" in s or "연결" in s:
        return "match"
    if "o" in s and "x" in s:
        return "ox"
    return "mc"


def clean_text(s: str) -> str:
    s = s.replace("\r\n", "\n").replace("\r", "\n")
    s = re.sub(r"[ \t]+\n", "\n", s)
    s = re.sub(r"\n{3,}", "\n\n", s)
    return s.strip()


def parse_choice_lines(body: str):
    """Extract ①~④ options from body; return (stem, options)."""
    opts = []
    positions = []
    for m in re.finditer(r"^([①②③④⑤⑥⑦⑧⑨⑩])\s*(.+)$", body, re.M):
        positions.append((m.start(), m.group(1), m.group(2).strip()))
    if len(positions) < 2:
        return body.strip(), []
    stem = body[: positions[0][0]].strip()
    for i, (pos, circ, text) in enumerate(positions):
        # stop option text at next circle or end
        end = positions[i + 1][0] if i + 1 < len(positions) else len(body)
        chunk = body[pos:end]
        # remove leading circle
        chunk = re.sub(r"^" + re.escape(circ) + r"\s*", "", chunk).strip()
        # for match items may include • •
        opts.append(chunk)
    return stem, opts


RIGHT_LETTER = {c: i for i, c in enumerate("ABCDEFGHIJ")}
RIGHT_MARK_RE = r"(?:[㉠㉡㉢㉣㉤㉥㉦㉧㉨㉩]|[A-J](?=[\.\s)]))"


def right_index(mark: str) -> int | None:
    mark = mark.strip()
    if mark in RIGHT_MAP:
        return RIGHT_MAP[mark]
    if mark in RIGHT_LETTER:
        return RIGHT_LETTER[mark]
    return None


def parse_match_block(body: str):
    left, right = [], []
    for line in body.split("\n"):
        line = line.strip()
        if not line:
            continue
        # ① left • • ㉠ right  /  ① left • • A. right
        m = re.match(
            r"^([①②③④⑤⑥⑦⑧⑨⑩])\s*(.+?)\s*[•·ㆍ\.]+\s*"
            r"(?:([㉠㉡㉢㉣㉤㉥㉦㉧㉨㉩])\s*(.+)|([A-J])\s*[\.\)]\s*(.+))$",
            line,
        )
        if m:
            left.append(m.group(2).strip(" •·ㆍ."))
            if m.group(3):
                right.append(m.group(4).strip())
            else:
                right.append(m.group(6).strip())
            continue
        # fallback: only left or only right on a line
        m2 = re.match(r"^([①②③④⑤⑥⑦⑧⑨⑩])\s*(.+)$", line)
        if m2 and not re.search(r"[㉠㉡㉢㉣]|[A-J]\s*[\.\)]", line):
            left.append(m2.group(2).strip(" •·ㆍ."))
            continue
        m3 = re.match(r"^([㉠㉡㉢㉣㉤㉥㉦㉧㉨㉩])\s*(.+)$", line)
        if m3:
            right.append(m3.group(2).strip())
            continue
        m4 = re.match(r"^([A-J])\s*[\.\)]\s*(.+)$", line)
        if m4:
            right.append(m4.group(2).strip())
    return left, right


def parse_match_answer(ans: str, n_left: int, n_right: int):
    pairs = []
    for m in re.finditer(
        r"([①②③④⑤⑥⑦⑧⑨⑩])\s*(?:=>|->|→|:|=)\s*([㉠㉡㉢㉣㉤㉥㉦㉧㉨㉩A-J])",
        ans,
    ):
        li = LEFT_MAP.get(m.group(1))
        ri = right_index(m.group(2))
        if li is None or ri is None:
            continue
        if li < n_left and ri < n_right:
            pairs.append([li, ri])
    # dedupe by left
    seen = {}
    for l, r in pairs:
        seen[l] = r
    return [[l, seen[l]] for l in sorted(seen)]


def circle_to_idx(ans: str) -> int | None:
    m = re.search(r"[①②③④⑤⑥⑦⑧⑨⑩]", ans)
    if not m:
        # numeric 1~4
        m2 = re.search(r"\b([1-4])\b", ans)
        if m2:
            return int(m2.group(1)) - 1
        return None
    return LEFT_MAP.get(m.group(0))


def parse_ox_answer(ans: str) -> bool | None:
    a = ans.strip()
    if re.search(r"[②2].*\bX\b|\bX\b.*[②2]|^\s*X\s*$|②\s*X", a, re.I):
        return False
    if re.search(r"[①1].*\bO\b|\bO\b.*[①1]|^\s*O\s*$|①\s*O", a, re.I):
        return True
    if re.search(r"\bX\b|틀림|거짓", a, re.I) and not re.search(r"\bO\b", a, re.I):
        return False
    if re.search(r"\bO\b|옳|참", a, re.I):
        return True
    idx = circle_to_idx(a)
    if idx == 0:
        return True
    if idx == 1:
        return False
    return None


def split_answer_explain(block: str):
    am = ANS_RE.search(block)
    if not am:
        return block.strip(), "", ""
    before = block[: am.start()].strip()
    ans_from_line = (am.group(1) or "").strip()
    rest = block[am.end() :].lstrip("\n")
    em2 = re.search(r"(?m)^해설\s*:\s*", rest)
    if em2:
        extra = rest[: em2.start()].strip()
        ans_part = (ans_from_line + ("\n" + extra if extra else "")).strip()
        explain = rest[em2.end() :].strip()
        return before, ans_part, explain
    return before, ans_from_line, rest.strip()


def parse_block(raw: str, source: str):
    raw = clean_text(raw)
    hm = TAG_HEAD.match(raw)
    if not hm:
        return None
    qtype = norm_type(hm.group(1))
    num = int(hm.group(2))
    body_all = raw[hm.end() :]
    stem_body, ans, explain = split_answer_explain(body_all)
    if not ans:
        return None

    item = {
        "type": qtype,
        "question": "",
        "explain": explain.strip(),
        "_src": source,
        "_num": num,
    }

    if qtype == "ox":
        # strip O/X option lines from stem
        stem = re.sub(r"(?m)^[①②]\s*[OoXx]\s*$", "", stem_body).strip()
        # also remove leading instruction if duplicated awkwardly — keep full stem
        stem = re.sub(r"\n{2,}", "\n", stem).strip()
        truth = parse_ox_answer(ans)
        if truth is None:
            return None
        item["question"] = stem
        item["answer"] = truth
        return item

    if qtype == "match":
        # stem is first paragraph(s) before ① lines
        left, right = parse_match_block(stem_body)
        # question stem: lines before first ①
        mfirst = re.search(r"^①", stem_body, re.M)
        stem = stem_body[: mfirst.start()].strip() if mfirst else stem_body.strip()
        if not left or not right:
            return None
        pairs = parse_match_answer(ans, len(left), len(right))
        if len(pairs) < min(len(left), len(right)):
            # try recover: if equal length identity unlikely — fail soft
            if not pairs:
                return None
        item["question"] = stem
        item["left"] = left
        item["right"] = right
        item["answer"] = pairs
        return item

    if qtype == "mc":
        stem, options = parse_choice_lines(stem_body)
        if len(options) < 2:
            return None
        # options may still include trailing junk; trim to 4 if more
        if len(options) > 4:
            options = options[:4]
        idx = circle_to_idx(ans)
        if idx is None or idx < 0 or idx >= len(options):
            return None
        item["question"] = stem
        item["options"] = options
        item["answer"] = idx
        return item

    if qtype == "short":
        stem = stem_body.strip()
        # strip accidental option lines if any
        stem = re.sub(r"(?m)^[①②③④]\s+.+$", "", stem).strip()
        ans_clean = ans.strip()
        # accept alternate answers separated by / or ,
        answers = [a.strip() for a in re.split(r"[/／]", ans_clean) if a.strip()]
        if not answers:
            return None
        item["question"] = stem
        item["answer"] = answers[0]
        if len(answers) > 1:
            item["answers"] = answers
        return item

    return None


def load_all():
    items = []
    for f in FILES:
        path = OUT_DIR / f"{f}.hwp5.txt"
        text = path.read_text(encoding="utf-8", errors="ignore")
        chunks = TAG_SPLIT.split(text)
        for ch in chunks:
            ch = ch.strip()
            if not ch.startswith("["):
                continue
            q = parse_block(ch, f)
            if q:
                items.append(q)
    return items


def distribute(items, n_rounds=13, per=40):
    by = defaultdict(list)
    for q in items:
        by[q["type"]].append(q)

    # 동일 출처·번호만 중복 제거 (문항 stem 앞부분이 비슷한 OX/주관식 보호)
    for t in by:
        seen = set()
        uniq = []
        for q in by[t]:
            key = (q.get("_src"), q.get("_num"), q["type"], q["question"])
            if key in seen:
                continue
            seen.add(key)
            uniq.append(q)
        by[t] = uniq

    need = n_rounds * per  # 520
    ox_all = by["ox"]
    match_all = by["match"]
    short_all = by["short"]
    mc_all = by["mc"]

    # target per round: match 2, ox ~3-4, short ~8-9, mc rest
    # totals: match 26 exact, ox 45, short 109, mc use 340 (drop 20)
    use_ox = ox_all[:]  # all 45
    use_match = match_all[:]  # all ~26
    use_short = short_all[:]  # all ~109
    use_mc = mc_all[: need - len(use_ox) - len(use_match) - len(use_short)]

    print("Available:", {k: len(v) for k, v in by.items()})
    print(
        "Using:",
        {
            "ox": len(use_ox),
            "match": len(use_match),
            "short": len(use_short),
            "mc": len(use_mc),
            "total": len(use_ox) + len(use_match) + len(use_short) + len(use_mc),
        },
    )

    rounds = [[] for _ in range(n_rounds)]

    def deal(pool, counts):
        """counts[i] = how many for round i"""
        idx = 0
        for i, c in enumerate(counts):
            for _ in range(c):
                if idx >= len(pool):
                    return
                rounds[i].append(pool[idx])
                idx += 1
        return idx

    # match: 2 each = 26
    n_match = len(use_match)
    match_counts = [n_match // n_rounds] * n_rounds
    for i in range(n_match % n_rounds):
        match_counts[i] += 1

    # ox: 45 → 6 rounds get 4, 7 get 3
    ox_counts = [3] * n_rounds
    for i in range(len(use_ox) - 3 * n_rounds):
        ox_counts[i] += 1

    # short: 109 → 5 rounds get 9, 8 get 8
    short_counts = [8] * n_rounds
    for i in range(len(use_short) - 8 * n_rounds):
        short_counts[i] += 1

    deal(use_match, match_counts)
    deal(use_ox, ox_counts)
    deal(use_short, short_counts)

    # fill mc to 40
    mc_idx = 0
    for i in range(n_rounds):
        need_mc = per - len(rounds[i])
        for _ in range(need_mc):
            if mc_idx >= len(use_mc):
                break
            rounds[i].append(use_mc[mc_idx])
            mc_idx += 1

    # interleave types within round for nicer UX (ox, match, short, mc mixed)
    def interleave(qs):
        buckets = defaultdict(list)
        for q in qs:
            buckets[q["type"]].append(q)
        order = []
        # pattern cycle: mc, mc, ox/short/match sprinkled
        types_cycle = ["mc", "ox", "mc", "short", "mc", "match", "mc", "short"]
        while any(buckets.values()):
            progressed = False
            for t in types_cycle:
                if buckets[t]:
                    order.append(buckets[t].pop(0))
                    progressed = True
            if not progressed:
                break
        for t in buckets:
            order.extend(buckets[t])
        return order

    rounds = [interleave(r) for r in rounds]
    return rounds, {
        "dropped_mc": len(mc_all) - mc_idx,
        "used_mc": mc_idx,
    }


def to_public(q: dict) -> dict:
    out = {"type": q["type"], "question": q["question"], "explain": q.get("explain") or ""}
    if q["type"] == "ox":
        out["answer"] = bool(q["answer"])
    elif q["type"] == "match":
        out["left"] = q["left"]
        out["right"] = q["right"]
        out["answer"] = q["answer"]
    elif q["type"] == "mc":
        out["options"] = q["options"]
        out["answer"] = int(q["answer"])
    elif q["type"] == "short":
        if "answers" in q:
            out["answers"] = q["answers"]
            out["answer"] = q["answers"][0]
        else:
            out["answer"] = q["answer"]
    return out


def js_escape_dump(obj) -> str:
    # compact but valid JSON → JS object literal
    return json.dumps(obj, ensure_ascii=False, indent=None)


def build_js(rounds):
    parts = [
        "// 산업기사 책 랜덤문제 — HWP 회차 통합 재배분 (13회차 × 40문항)",
        "// 유형 균등: 줄긋기·OX·주관식 회차별 분산 / 객관식 여분 제외",
        "",
        "export const bookRandomQuizSets = [",
    ]
    for i, qs in enumerate(rounds, 1):
        rid = f"book_rand_{i}"
        name = f"산업기사 책 랜덤 {i}회차"
        public = [to_public(q) for q in qs]
        # pretty each question on one line
        lines = [js_escape_dump(q) for q in public]
        body = ",\n".join("            " + ln for ln in lines)
        parts.append(
            f"""    {{
        id: "{rid}",
        roundName: "{name}",
        roundGroup: "산업기사 책 랜덤문제",
        repairData: [
{body}
        ]
    }},"""
        )
    parts.append("];")
    parts.append("")
    return "\n".join(parts)


def main():
    items = load_all()
    print(f"Parsed total: {len(items)}")
    print("By type:", dict(Counter(q["type"] for q in items)))

    # report parse failures roughly by recounting tags
    tag_total = 0
    for f in FILES:
        text = (OUT_DIR / f"{f}.hwp5.txt").read_text(encoding="utf-8", errors="ignore")
        tag_total += len(
            re.findall(
                r"\[(?:객관식|주관식|줄긋기|연결|o\s*,\s*x|o/?x|ox)\]\s*0*\d{1,3}\b",
                text,
                re.I,
            )
        )
    print(f"Tagged in source: {tag_total}, parsed OK: {len(items)}, failed: {tag_total - len(items)}")

    rounds, meta = distribute(items)
    for i, r in enumerate(rounds, 1):
        c = Counter(q["type"] for q in r)
        print(f"R{i:02d} n={len(r)} {dict(c)}")
    print("meta", meta)

    bad = [i for i, r in enumerate(rounds, 1) if len(r) != 40]
    if bad:
        raise SystemExit(f"Round size error: {bad}")

    JS_OUT.write_text(build_js(rounds), encoding="utf-8")
    print("Wrote", JS_OUT, "bytes", JS_OUT.stat().st_size)


if __name__ == "__main__":
    main()
