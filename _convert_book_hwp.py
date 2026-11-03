# -*- coding: utf-8 -*-
import olefile, zlib, re, struct, json
from collections import Counter
from pathlib import Path

CIRC = {"①": 0, "②": 1, "③": 2, "④": 3, "⑤": 4}
CIRC_RIGHT = {"㉠": 0, "㉡": 1, "㉢": 2, "㉣": 3, "㉤": 4, "㉥": 5}
LETTER_RIGHT = {"A": 0, "B": 1, "C": 2, "D": 3, "E": 4, "F": 5}

ROOT = Path(r"c:\Users\UserK\Desktop\codevCBT (커서)집26.10.26 계측수정 전송 완료v1")
HWP_DIR = Path(r"c:\Users\UserK\Desktop\과정형평가 산업기사책 문제모음\양진이")


def extract_hwp(path: Path) -> str:
    ole = olefile.OleFileIO(str(path))
    out = []
    for s in ole.listdir():
        if not (s and s[0] == "BodyText"):
            continue
        data = ole.openstream(s).read()
        try:
            raw = zlib.decompress(data, -15)
        except Exception:
            try:
                raw = zlib.decompress(data)
            except Exception:
                raw = data
        i = 0
        texts = []
        while i + 4 <= len(raw):
            header = struct.unpack_from("<I", raw, i)[0]
            tag = header & 0x3FF
            size = (header >> 20) & 0xFFF
            i += 4
            if size == 0xFFF:
                if i + 4 > len(raw):
                    break
                size = struct.unpack_from("<I", raw, i)[0]
                i += 4
            payload = raw[i : i + size]
            i += size
            if tag == 67:
                t = payload.decode("utf-16-le", errors="ignore")
                t2 = "".join(ch if ord(ch) >= 0x20 or ch in "\n\t" else " " for ch in t)
                t2 = re.sub(r"\s+", " ", t2).strip()
                if t2:
                    texts.append(t2)
        out.append("\n".join(texts))
    return "\n".join(out)


def split_typed(text: str):
    parts = re.split(r"\[(객관식|OX문제|줄긋기|주관식|계산문제)\]\s*", text)
    items = []
    for i in range(1, len(parts), 2):
        items.append((parts[i], parts[i + 1]))
    return items


def parse_mc(body: str):
    m = re.match(
        r"\d+\s*(.+?)\n①\s*(.+?)\n②\s*(.+?)\n③\s*(.+?)\n④\s*(.+?)\n정답:\s*([①②③④])\n해설:\s*(.+)",
        body.strip(),
        re.S,
    )
    if not m:
        return None
    return {
        "type": "mc",
        "question": m.group(1).strip(),
        "options": [m.group(i).strip() for i in range(2, 6)],
        "answer": CIRC[m.group(6)],
        "explain": m.group(7).strip(),
    }


def parse_ox(body: str):
    m = re.search(
        r"①\s*O\s*\n②\s*X\s*\n정답:\s*([①②])\n해설:\s*(.+)",
        body,
        re.S,
    )
    if not m:
        return None
    pre = body[: m.start()]
    bracket = re.search(r"\[(.+?)\]\s*$", pre.strip(), re.S)
    if bracket:
        q = bracket.group(1).strip()
    else:
        lines = [ln.strip() for ln in pre.splitlines() if ln.strip()]
        while lines and (
            re.match(r"^\d+\s*$", lines[0])
            or "옳으면" in lines[0]
            or "O표" in lines[0]
            or "X표" in lines[0]
        ):
            lines.pop(0)
        q = lines[0] if lines else ""
        q = re.sub(r"^\d+\s*", "", q).strip()
    return {
        "type": "ox",
        "question": q,
        "answer": m.group(1) == "①",
        "explain": m.group(2).strip(),
    }


def parse_match(body: str):
    m = re.match(
        r"\d+\s*(.+?)\n((?:[①②③④⑤]\s*.+\n)+)정답:\s*(.+?)\n해설:\s*(.+)",
        body.strip(),
        re.S,
    )
    if not m:
        return None
    q = m.group(1).strip()
    lines = [ln for ln in m.group(2).strip().split("\n") if ln.strip()]
    left = []
    right_slots = {}
    right_map = None
    for line in lines:
        lm = re.match(
            r"([①②③④⑤])\s*(.+?)\s*[•·．.\u2022]+\s*[•·．.\u2022]*\s*"
            r"(?:([㉠㉡㉢㉣㉤㉥])|([A-F])\.)\s*(.+)",
            line.strip(),
        )
        if not lm:
            return None
        left.append(lm.group(2).strip())
        if lm.group(3):
            right_map = CIRC_RIGHT
            right_slots[CIRC_RIGHT[lm.group(3)]] = lm.group(5).strip()
        else:
            right_map = LETTER_RIGHT
            right_slots[LETTER_RIGHT[lm.group(4)]] = lm.group(5).strip()
    right = [right_slots[i] for i in sorted(right_slots)]
    pairs = []
    for am in re.finditer(
        r"([①②③④⑤])\s*⇒\s*(?:([㉠㉡㉢㉣㉤㉥])|([A-F]))", m.group(3)
    ):
        ridx = CIRC_RIGHT[am.group(2)] if am.group(2) else LETTER_RIGHT[am.group(3)]
        pairs.append([CIRC[am.group(1)], ridx])
    return {
        "type": "match",
        "question": q,
        "left": left,
        "right": right,
        "answer": pairs,
        "explain": m.group(4).strip(),
    }


def split_short_answers(ans: str):
    raw = ans.strip()
    answers = []
    seen = set()

    def add(x: str):
        x = x.strip()
        if not x or x in seen:
            return
        seen.add(x)
        answers.append(x)

    add(raw)
    for part in re.split(r"\s*/\s*", raw):
        add(part)
        for pm in re.finditer(r"\(([^)]+)\)", part):
            inner = pm.group(1)
            add(inner)
            for sub in re.split(r"\s*/\s*", inner):
                add(sub)
        base = re.sub(r"\([^)]*\)", "", part).strip()
        add(base)
    return answers


def parse_short(body: str):
    m = re.match(r"\d+\s*(.+?)\n정답:\s*(.+?)\n해설:\s*(.+)", body.strip(), re.S)
    if not m:
        return None
    ans = m.group(2).strip()
    return {
        "type": "short",
        "question": m.group(1).strip(),
        "answers": split_short_answers(ans),
        "explain": m.group(3).strip(),
    }


def convert(path: Path, topic_tag: str):
    text = extract_hwp(path)
    # 가솔린 파일은 유형 태그 없이 [객관식]만 — split_typed 로 처리
    items = split_typed(text)
    # 만약 유형 태그가 전혀 없고 객관식만이면 전부 mc 로 간주
    if not items and "[객관식]" not in text:
        # fallback: treat as consecutive mc blocks by 정답
        pass
    out, fails = [], []
    for typ, body in items:
        if typ == "객관식":
            q = parse_mc(body)
        elif typ == "OX문제":
            q = parse_ox(body)
        elif typ == "줄긋기":
            q = parse_match(body)
        elif typ == "계산문제":
            q = parse_short(body)  # 보기형은 import 단계에서 options 부여
        else:
            q = parse_short(body)
        if not q:
            fails.append({"type": typ, "preview": body[:160].replace("\n", " | ")})
            continue
        q["question"] = f"[{topic_tag}] {q['question']}"
        # HWP 섹션 제목이 해설 끝에 붙는 경우 제거
        if "explain" in q:
            q["explain"] = re.sub(
                r"\n?\[[^\]]*(예상문제|정비)[^\]]*\]\s*$",
                "",
                q["explain"],
            ).strip()
        out.append(q)
    return out, fails


def js_string(s: str) -> str:
    return json.dumps(s, ensure_ascii=False)


def emit_question(q: dict) -> str:
    t = q["type"]
    if t == "mc":
        return (
            '{ "type": "mc", "question": %s, "options": %s, "answer": %s, "explain": %s }'
            % (
                js_string(q["question"]),
                json.dumps(q["options"], ensure_ascii=False),
                q["answer"],
                js_string(q["explain"]),
            )
        )
    if t == "ox":
        return (
            '{ "type": "ox", "question": %s, "answer": %s, "explain": %s }'
            % (js_string(q["question"]), "true" if q["answer"] else "false", js_string(q["explain"]))
        )
    if t == "match":
        return (
            '{ "type": "match", "question": %s, "left": %s, "right": %s, "answer": %s, "explain": %s }'
            % (
                js_string(q["question"]),
                json.dumps(q["left"], ensure_ascii=False),
                json.dumps(q["right"], ensure_ascii=False),
                json.dumps(q["answer"], ensure_ascii=False),
                js_string(q["explain"]),
            )
        )
    # 보기형 주관식
    if q.get("options"):
        return (
            '{ "type": "short", "question": %s, "options": %s, "answer": %s, "explain": %s }'
            % (
                js_string(q["question"]),
                json.dumps(q["options"], ensure_ascii=False),
                q.get("answer", 0),
                js_string(q["explain"]),
            )
        )
    return (
        '{ "type": "short", "question": %s, "answers": %s, "explain": %s }'
        % (
            js_string(q["question"]),
            json.dumps(q.get("answers", []), ensure_ascii=False),
            js_string(q["explain"]),
        )
    )


def emit_set(set_id: str, round_name: str, questions: list) -> str:
    lines = [emit_question(q) for q in questions]
    body = ",\n".join(lines)
    return f"""    {{
        id: "{set_id}",
        roundName: "{round_name}",
        roundGroup: "산업기사 책 출제문제",
        // #region {round_name} repairData
        repairData: [
{body}
        ]
        // #endregion
    }}"""


def main():
    gas, gf = convert(
        HWP_DIR / "가솔린 전자제어장치 정비 예상문제.hwp",
        "가솔린전자제어장치정비",
    )
    ac, af = convert(
        HWP_DIR / "냉난방장치 정비 예상문제.hwp",
        "자동차냉난방장치정비",
    )
    print("gas", len(gas), "fails", len(gf), Counter(q["type"] for q in gas))
    print("ac", len(ac), "fails", len(af), Counter(q["type"] for q in ac))
    for f in gf + af:
        print("FAIL", f)

    preview = {"gas": gas, "ac": ac, "fails": {"gas": gf, "ac": af}}
    (ROOT / "_book_q_preview.json").write_text(
        json.dumps(preview, ensure_ascii=False, indent=2), encoding="utf-8"
    )

    js = f"""// 산업기사 책 출제문제 — HWP 변환본 (유형: mc / ox / match / short)
// 자동 생성: _convert_book_hwp.py

export const bookQuizSets = [
{emit_set("book_gasoline_ecu", "가솔린전자제어장치 정비", gas)},
{emit_set("book_hvac", "냉난방장치 정비", ac)}
];
"""
    out_path = ROOT / "start" / "문제모음" / "01자동차정비산업기사" / "01정비산업기사_책출제문제.js"
    out_path.write_text(js, encoding="utf-8")
    print("wrote", out_path)


if __name__ == "__main__":
    main()
