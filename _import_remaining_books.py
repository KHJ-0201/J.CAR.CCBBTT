# -*- coding: utf-8 -*-
"""나머지 책 HWP 6과목 → 산업기사 책 출제문제 추가"""
import re
import json
from collections import Counter
from pathlib import Path
import _convert_book_hwp as cv

SETS = [
    ("디젤 전자제어장치 정비 예상문제.hwp", "디젤전자제어장치정비", "book_diesel_ecu", "디젤 전자제어장치 정비"),
    ("배출가스제어장치 정비 예상문제.hwp", "배출가스제어장치정비", "book_emission", "배출가스제어장치 정비"),
    ("제동장치 정비 예상문제.hwp", "제동장치정비", "book_brake", "제동장치 정비"),
    ("조향장치 정비 예상문제.hwp", "조향장치정비", "book_steering", "조향장치 정비"),
    ("편의장치 정비 예상문제.hwp", "편의장치정비", "book_convenience", "편의장치 정비"),
    ("현가장치 정비 예상문제.hwp", "현가장치정비", "book_suspension", "현가장치 정비"),
]

# (질문 고유 키워드, 보기 4개 — 정답 0번)
SHORT_OPTS = {
    "book_convenience": [
        ("일사량을 검출하는 센서의 명칭", ["조도 센서 (광센서/일사량 센서)", "레인 센서", "차속 센서", "APS"]),
        ("전자제어 동력 조향장치에서 배터리 전압", ["페일 세이프 (Fail-Safe)", "림프 홈 (Limp Home)", "버스 오프", "셀프 진단만"]),
        ("도체의 고유 저항", ["R = ρ × (l / A)", "R = ρ × (A / l)", "R = V × I", "R = I / V"]),
        ("포토 다이오드에 대하여", ["빛 세기에 따라 광전류가 변하는 다이오드", "순방향만 빛을 내는 LED", "정전압 유지용 제너", "온도에 따라 저항이 변하는 NTC"]),
        ("조도 센서에 대하여", ["CdS 등으로 밝기를 감지하는 센서", "빗물량을 감지하는 센서", "차속을 감지하는 센서", "조향각을 감지하는 센서"]),
        ("2개의 TR을 결선하여 증폭율을 극대화", ["달링톤 트랜지스터", "제너 다이오드", "사이리스터", "포토 커플러"]),
        ("OFF - ACC - ( ① ) - OFF - ( ② )", ["① IGN ON  ② 시동 ON(START)", "① START  ② ACC", "① LOCK  ② IGN", "① ACC  ② LOCK"]),
        ("발광다이오드로부터 발산되는 빛이", ["Ⓐ 수광 다이오드  Ⓑ 수광(포토) 다이오드", "Ⓐ 발광 다이오드  Ⓑ BCM", "Ⓐ 조도 센서  Ⓑ 릴레이", "Ⓐ 차속 센서  Ⓑ EPS"]),
        ("배터리 전압 등 모든 것을 관리하는 것은?", ["EPS 컨트롤 모듈 (MDPS ECU)", "BCM", "ECM", "TCU"]),
        ("기억시킨 좌석의 위치 설정은?", ["IMS (통합 메모리 시스템)", "BCM", "레인 센서", "오토라이트"]),
        ("NTC란?", ["온도 상승 시 저항이 감소하는 부특성 서미스터", "온도 상승 시 저항이 증가하는 PTC", "빛을 내는 LED", "정류용 다이오드"]),
        ("뒷 유리 열선 작동 순서", ["발전기 L단자→BCM→열선 스위치→릴레이→열선", "ACC만으로 즉시 상시 통전", "ECM이 직접 인젝터로 구동", "ABS 모듈이 펌프를 구동"]),
        ("절연저항 측정 도구", ["메가옴 테스터 (메거)", "토크 렌치", "압력 게이지", "타이밍 라이트"]),
        ("전류 3대 작용", ["발열작용, 화학작용, 자기작용", "압력작용, 관성작용, 탄성작용", "흡입, 압축, 폭발", "가속, 감속, 선회"]),
        ("다이오드의 특징은?", ["역류 방지·정류 (한쪽 방향 통전)", "양방향 동일 통전", "온도만 감지", "자기장만 발생"]),
        ("버튼시동 시스템", ["버튼+스마트키 상호인증으로 시동", "기계키만으로 시동", "클러치만으로 시동", "타이어 압력으로 시동"]),
        ("강수량을 감지하여 와이퍼 모터 속도를 조절하는 센서는?", ["레인 센서 (Rain Sensor)", "조도 센서", "차속 센서", "APS"]),
        ("레인 센서 내부 부품은?", ["발광 다이오드(LED)와 수광(포토) 다이오드", "NTC와 PTC만", "홀 센서와 릴럭터", "MAP와 MAF"]),
        ("자동으로 전조등이 점등된다. ( )안에", ["조도 (빛의 밝기/광량)", "차속", "엔진 오일량", "타이어 공기압"]),
        ("빗물의 양을 감지하는 부품의 명칭을 쓰시오", ["레인 센서 (Rain Sensor)", "조도 센서", "일사량 센서", "외기온 센서"]),
        ("( I )에 흐르는 전류(A)를 구하시오", ["1.1 A", "1.2 A", "2.0 A", "0.9 A"]),
        ("도체의 저항값을 구하시오", ["9 Ω", "3 Ω", "15 Ω", "5 Ω"]),
        ("흐르는 전류값(A)을 구하시오", ["0.5 A", "1.0 A", "2.0 A", "0.25 A"]),
    ],
    "book_suspension": [
        ("고속 주행 중에 차륜이 좌우로 흔들리는 현상", ["고속 시미 (Shimmy)", "바운싱", "피칭", "킥백"]),
        ("Z축 방향으로 상하 진동", ["바운싱 (Bouncing)", "피칭", "롤링", "시미"]),
        ("앞쪽이 내려앉는 상태와 치솟는 상태 모두", ["피칭 (Pitching)", "바운싱", "요잉", "킥백"]),
        ("타이어가 요철에 튕기면서 조향 휠이 충격으로 뒤틀리는", ["킥백 (Kick-back)", "시미", "바운싱", "피칭"]),
    ],
}


def to_choice_short(set_id: str, q: dict) -> dict:
    opts_list = SHORT_OPTS.get(set_id, [])
    for key, opts in opts_list:
        if key in q["question"]:
            return {
                "type": "short",
                "question": q["question"],
                "options": opts,
                "answer": 0,
                "explain": q["explain"],
            }
    # 계산문제 등 answers만 있는 경우 — 정답을 첫 보기로
    ans0 = (q.get("answers") or ["?"])[0]
    ans0 = re.split(r"\s*또는\s*", ans0)[0].strip()
    distractors = ["해당 없음", "측정 불가", "0"]
    options = [ans0] + [d for d in distractors if d != ans0][:3]
    while len(options) < 4:
        options.append(f"보기{len(options)}")
    print("FALLBACK short opts:", set_id, q["question"][:60], "=>", ans0)
    return {
        "type": "short",
        "question": q["question"],
        "options": options[:4],
        "answer": 0,
        "explain": q["explain"],
    }


def convert_set(fname, tag, set_id, round_name):
    path = cv.HWP_DIR / fname
    qs, fails = cv.convert(path, tag)
    print(set_id, "raw", len(qs), Counter(q["type"] for q in qs), "fails", len(fails))
    for f in fails:
        print(" FAIL", f["type"], f["preview"][:100])
    out = []
    for q in qs:
        # 질문문이 같아도 보기/해설이 다르면 원문 문항 그대로 유지
        if q["type"] == "short":
            out.append(to_choice_short(set_id, q))
        else:
            out.append(q)
    print(set_id, "final", len(out), Counter(q["type"] for q in out))
    return out


def upsert_sets(sets_js_blocks: list[str]):
    book_path = (
        cv.ROOT
        / "start"
        / "문제모음"
        / "01자동차정비산업기사"
        / "01정비산업기사_책출제문제.js"
    )
    text = book_path.read_text(encoding="utf-8")
    for _, _, sid, _ in SETS:
        text = re.sub(
            rf',\n    \{{\n        id: "{sid}".*?\n    \}}',
            "",
            text,
            flags=re.S,
        )
    body = text.rstrip()
    if body.endswith("];"):
        body = body[:-2].rstrip()
    if not body.endswith("}"):
        raise SystemExit("unexpected book ending")
    new_text = body + ",\n" + ",\n".join(sets_js_blocks) + "\n];\n"
    book_path.write_text(new_text, encoding="utf-8")
    print("wrote", book_path)


def main():
    blocks = []
    summary = {}
    for fname, tag, sid, rname in SETS:
        qs = convert_set(fname, tag, sid, rname)
        summary[sid] = Counter(q["type"] for q in qs)
        blocks.append(cv.emit_set(sid, rname, qs))
    upsert_sets(blocks)
    print("SUMMARY", {k: dict(v) for k, v in summary.items()})


if __name__ == "__main__":
    main()
