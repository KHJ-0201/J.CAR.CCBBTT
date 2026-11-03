# -*- coding: utf-8 -*-
"""네트워크 통신장치 정비 HWP → 산업기사 책 출제문제 세트 추가"""
import re
import json
from pathlib import Path
from collections import Counter
import _convert_book_hwp as cv


def parse_ox(body: str):
    """괄호 [진술] 유무와 무관하게 OX 파싱."""
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


cv.parse_ox = parse_ox

# 주관식 → 보기형 (정답 0번, 시험 시 셔플)
SHORT_OPTS = [
    (
        "다른 ECU로부터 정보를 받아서 실행만",
        [
            "단방향 통신 (슬레이브 통신)",
            "양방향 통신 (마스터-슬레이브)",
            "멀티 마스터 통신",
            "브로드캐스트 통신",
        ],
    ),
    (
        "비트 흐름(Bit Stream)을 전송",
        [
            "CAN 통신, LIN 통신",
            "MOST 통신, 차량용 이더넷",
            "Bluetooth, Wi-Fi",
            "PWM 제어, 아날로그 센서선",
        ],
    ),
    (
        "분기된 시스템을 위한 저비용 통신 시스템",
        [
            "② 싱글(Single) ③ 20 ④ 예측(결정론적)",
            "② 더블(Double) ③ 500 ④ 불규칙",
            "② 트위스트 ③ 1M ④ 무작위",
            "② 광섬유 ③ 100 ④ 비동기만",
        ],
    ),
    (
        "CAN-High: 2.5V → 3.5V",
        [
            "C-CAN 통신 (고속 CAN / ISO 11898)",
            "B-CAN 통신 (저속 CAN / ISO 11519)",
            "LIN 통신 (Single Wire)",
            "MOST 통신 (광섬유)",
        ],
    ),
    (
        "Computer Networking",
        [
            "통신 프로토콜 (Communication Protocol)",
            "게이트웨이 (Gateway)",
            "종단 저항 (Terminating Resistor)",
            "버스 오프 (Bus-Off)",
        ],
    ),
    (
        "IMS 시스템에서 운전석 파워윈도우",
        [
            "Ⓐ LIN 통신  Ⓑ CAN 통신 (B-CAN)",
            "Ⓐ CAN 통신  Ⓑ LIN 통신",
            "Ⓐ MOST 통신  Ⓑ FlexRay",
            "Ⓐ K-Line  Ⓑ 이더넷",
        ],
    ),
    (
        "서로 다른 통신 프로토콜을 통역",
        [
            "게이트웨이 모듈 (Gateway Module)",
            "종단 저항 (Terminating Resistor)",
            "트랜시버 (Transceiver)",
            "진단 커넥터 (OBD-Ⅱ)",
        ],
    ),
    (
        "통신속도는 최대 ( ㉠ )bit/s",
        [
            "㉠ 1M(1Mbps)  ㉡ 멀티마스터  ㉢ 저속 CAN",
            "㉠ 20k  ㉡ 싱글마스터  ㉢ MOST",
            "㉠ 100M  ㉡ 슬레이브만  ㉢ FlexRay",
            "㉠ 500  ㉡ 브로드캐스트  ㉢ K-Line",
        ],
    ),
    (
        "비동기 통신의 종류 2가지",
        [
            "K-LINE 통신, LIN 통신",
            "고속 CAN, FlexRay",
            "MOST, 차량용 이더넷",
            "PWM, 아날로그 전압",
        ],
    ),
    (
        "종단저항의 합성저항의 크기는 얼마인가",
        ["60 Ω", "120 Ω", "240 Ω", "0 Ω"],
    ),
    (
        "각각 120Ω의 종단저항이 사용되었다",
        ["60 Ω", "120 Ω", "240 Ω", "30 Ω"],
    ),
    (
        "순차적으로 나오는 방식은?",
        [
            "시리얼 통신 (직렬 통신)",
            "패러럴 통신 (병렬 통신)",
            "아날로그 통신",
            "광 무선 통신",
        ],
    ),
    (
        "정보를 주는 ECU와 정보를 받는 ECU가 통신하는 방식",
        [
            "양방향 통신 (마스터-슬레이브 통신)",
            "단방향 통신 (Simplex)",
            "방송형 단방향 통신",
            "무통신 독립 제어",
        ],
    ),
    (
        "LIN통신이란?",
        [
            "시스템 분산화를 위한 저비용 단선 시리얼 통신",
            "고속 차동 전압 기반 파워트레인 주 통신",
            "광섬유 대용량 멀티미디어 통신",
            "무선 근거리 키리스 엔트리 통신",
        ],
    ),
    (
        "시리얼 통신이란?",
        [
            "데이터가 한 통신선으로 순차 출력되는 방식",
            "여러 선을 동시에 쓰는 병렬 전송 방식",
            "전파 반사만으로 데이터를 보내는 방식",
            "전원선만으로 ECU를 식별하는 방식",
        ],
    ),
    (
        "자동차 네트워크 통신의 종류는?",
        [
            "K-Line, CAN, LIN, KWP2000 (등)",
            "USB, HDMI, VGA만 해당",
            "RS-232 전용만 사용",
            "전력선 반송 통신만 사용",
        ],
    ),
    (
        "반사파 없이 일정한 전류가 흐르게 하는 것은?",
        [
            "종단 저항 (Terminating Resistor)",
            "게이트웨이 모듈",
            "퓨즈 박스",
            "릴레이",
        ],
    ),
]


def to_choice_short(q: dict) -> dict:
    for key, opts in SHORT_OPTS:
        if key in q["question"]:
            return {
                "type": "short",
                "question": q["question"],
                "options": opts,
                "answer": 0,
                "explain": q["explain"],
            }
    raise KeyError("no short options for: " + q["question"][:80])


def main():
    path = cv.HWP_DIR / "네트워크 통신장치 정비 예상문제.hwp"
    qs, fails = cv.convert(path, "자동차네트워크통신장치정비")
    print("raw", len(qs), Counter(q["type"] for q in qs), "fails", len(fails))
    for f in fails:
        print("FAIL", f)

    out = []
    for q in qs:
        if q["type"] == "short":
            out.append(to_choice_short(q))
        else:
            out.append(q)

    print("final", len(out), Counter(q["type"] for q in out))
    assert all(
        q["type"] != "short" or ("options" in q and q["answer"] == 0) for q in out
    )

    set_js = cv.emit_set("book_network", "네트워크 통신장치 정비", out)
    book_path = (
        cv.ROOT
        / "start"
        / "문제모음"
        / "01자동차정비산업기사"
        / "01정비산업기사_책출제문제.js"
    )
    text = book_path.read_text(encoding="utf-8")
    text = re.sub(
        r",\n    \{\n        id: \"book_network\".*?\n    \}",
        "",
        text,
        flags=re.S,
    )
    body = text.rstrip()
    if body.endswith("];"):
        body = body[:-2].rstrip()
    if not body.endswith("}"):
        raise SystemExit("unexpected book file ending")
    new_text = body + ",\n" + set_js + "\n];\n"
    book_path.write_text(new_text, encoding="utf-8")
    print("wrote", book_path)

    (cv.ROOT / "_net_q_final.json").write_text(
        json.dumps(out, ensure_ascii=False, indent=2), encoding="utf-8"
    )


if __name__ == "__main__":
    main()
