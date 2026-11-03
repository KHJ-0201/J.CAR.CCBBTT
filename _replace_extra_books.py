# -*- coding: utf-8 -*-
"""네트워크/제동/조향/현가 → (추가) HWP로 통째 교체. write_text만 사용(re.sub \\n 버그 회피)."""
import re
from collections import Counter
from pathlib import Path
import _convert_book_hwp as cv

REPLACE = [
    (
        "네트워크 통신장치 정비 예상문제(추가).hwp",
        "자동차네트워크통신장치정비",
        "book_network",
        "네트워크 통신장치 정비",
    ),
    (
        "제동장치 정비 예상문제(추가).hwp",
        "제동장치정비",
        "book_brake",
        "제동장치 정비",
    ),
    (
        "조향장치 정비 예상문제(추가).hwp",
        "조향장치정비",
        "book_steering",
        "조향장치 정비",
    ),
    (
        "현가장치 정비 예상문제(추가).hwp",
        "현가장치정비",
        "book_suspension",
        "현가장치 정비",
    ),
]

KEEP_IDS = [
    "book_gasoline_ecu",
    "book_hvac",
    "book_diesel_ecu",
    "book_emission",
    "book_convenience",
]

SHORT_OPTS = {
    "book_network": [
        ("다른 ECU로부터 정보를 받아서 실행만", ["단방향 통신 (Simplex/슬레이브)", "양방향 통신", "멀티 마스터 통신", "브로드캐스트"]),
        ("비트 흐름(Bit Stream)을 전송", ["CAN 통신, LIN 통신", "MOST, 이더넷", "Bluetooth, Wi-Fi", "PWM, 아날로그"]),
        ("분기된 시스템을 위한 저비용 통신 시스템", ["② 싱글 ③ 20 ④ 예측", "② 더블 ③ 500 ④ 불규칙", "② 트위스트 ③ 1M ④ 무작위", "② 광섬유 ③ 100 ④ 비동기만"]),
        ("CAN-High: 2.5V → 3.5V", ["C-CAN 통신 (고속 CAN)", "B-CAN 통신 (저속 CAN)", "LIN 통신", "MOST 통신"]),
        ("Computer Networking", ["통신 프로토콜", "게이트웨이", "종단 저항", "버스 오프"]),
        ("IMS 시스템에서 운전석 파워윈도우", ["Ⓐ LIN 통신  Ⓑ CAN 통신(B-CAN)", "Ⓐ CAN  Ⓑ LIN", "Ⓐ MOST  Ⓑ FlexRay", "Ⓐ K-Line  Ⓑ 이더넷"]),
        ("서로 다른 통신 프로토콜을 통역", ["게이트웨이 모듈", "종단 저항", "트랜시버", "OBD-Ⅱ 커넥터"]),
        ("통신속도는 최대 ( ㉠ )bit/s", ["㉠ 1M  ㉡ 멀티마스터  ㉢ 저속 CAN", "㉠ 20k  ㉡ 싱글마스터  ㉢ MOST", "㉠ 100M  ㉡ 슬레이브  ㉢ FlexRay", "㉠ 500  ㉡ 브로드캐스트  ㉢ K-Line"]),
        ("비동기 통신의 종류 2가지", ["K-LINE 통신, LIN 통신", "고속 CAN, FlexRay", "MOST, 이더넷", "PWM, 아날로그"]),
        ("종단저항의 합성저항의 크기는 얼마인가", ["60 Ω", "120 Ω", "240 Ω", "0 Ω"]),
        ("각각 120Ω의 종단저항이 사용되었다", ["60 Ω", "120 Ω", "240 Ω", "30 Ω"]),
        ("순차적으로 나오는 방식은?", ["시리얼 통신 (직렬 통신)", "패러럴 통신", "아날로그 통신", "광 무선 통신"]),
        ("정보를 주는 ECU와 정보를 받는 ECU가 통신하는 방식", ["양방향 통신 (마스터-슬레이브)", "단방향 통신", "방송형 단방향", "무통신 독립 제어"]),
        ("LIN통신이란?", ["저비용 단선 시리얼 통신", "고속 차동 파워트레인 주 통신", "광섬유 멀티미디어 통신", "무선 키리스 통신"]),
        ("시리얼 통신이란?", ["한 통신선으로 순차 출력되는 방식", "여러 선 동시 병렬 전송", "전파 반사만으로 전송", "전원선만으로 ECU 식별"]),
        ("자동차 네트워크 통신의 종류는?", ["K-Line, CAN, LIN, KWP2000 등", "USB, HDMI, VGA만", "RS-232만", "전력선 반송만"]),
        ("반사파 없이 일정한 전류가 흐르게 하는 것은?", ["종단 저항", "게이트웨이", "퓨즈 박스", "릴레이"]),
        ("동일한 비트가 5개 연속되면 반대 극성", ["비트 스터핑 (Bit Stuffing)", "CRC 검사", "ACK 슬롯", "인터프레임 스페이스"]),
        ("6개 연속의 우성", ["에러 프레임 (Error Frame)", "오버로드 프레임", "리모트 프레임", "데이터 프레임"]),
        ("에러 카운터(TEC/REC)가 255를 초과", ["버스 오프 (Bus-Off)", "에러 액티브", "에러 패시브", "웨이크업"]),
        ("배출가스 관련 자기진단 신호 통신용으로 사용되던 단일 유선", ["K-Line (ISO 9141-2 / 14230)", "고속 CAN", "LIN", "MOST"]),
        ("CAN-High와 차체 접지(GND) 사이의 평균 전압", ["약 2.6V ~ 2.8V", "0V", "5V", "12V"]),
    ],
    "book_brake": [
        ("밀폐된 용기 내의 정지 유체에 가해진 압력", ["파스칼의 원리", "베르누이 정리", "옴의 법칙", "보일의 법칙"]),
        ("ABS 제어의 기준 지표", ["미끄럼률 (슬립률)", "조향각", "엔진 RPM", "냉각수온"]),
        ("양단에 압력차를 발생시키는 핵심 가동막", ["다이어프램", "마스터 실린더", "휠 스피드 센서", "프로포셔닝 밸브"]),
        ("피스톤을 원래 위치로 미세하게 끌어당겨 복귀", ["피스톤 씰 (롤백 씰)", "더스트 부트", "캘리퍼 가이드 핀", "브레이크 호스"]),
        ("언더스티어 방지 제어와, 차체 뒤쪽이 바깥으로", ["ESC (ESP/VDC)", "ABS만", "EBD만", "TCS만"]),
        ("단면적이 2㎠인 마스터 실린더", ["유압 25 kgf/㎠, 제동 출력 250 kgf", "유압 50, 출력 100", "유압 10, 출력 50", "유압 100, 출력 500"]),
    ],
    "book_steering": [
        ("스티어링 휠의 상하 각도를 조절", ["틸트 스티어링", "텔레스코픽 스티어링", "가변 기어비", "MDPS 모터"]),
        ("전후 축 방향 길이를 조절", ["텔레스코픽 스티어링", "틸트 스티어링", "파워 실린더", "피트먼 암"]),
        ("운전자의 조향력을 측정하는 핵심 센서", ["토크 센서", "차속 센서", "APS", "CKPS"]),
        ("조향 기어비가 18:1인 차량", ["20도", "18도", "360도", "10도"]),
        ("축거(Wheelbase)가 2.5m이고", ["5 m", "2.5 m", "7.5 m", "10 m"]),
    ],
    "book_suspension": [
        ("고속 주행 중에 차륜이 좌우로 흔들리는 현상", ["고속 시미 (Shimmy)", "바운싱", "피칭", "킥백"]),
        ("Z축 방향으로 상하 진동", ["바운싱 (Bouncing)", "피칭", "롤링", "시미"]),
        ("앞쪽이 내려앉는 상태와 치솟는 상태 모두", ["피칭 (Pitching)", "바운싱", "요잉", "킥백"]),
        ("타이어가 요철에 튕기면서 조향 휠이 충격으로 뒤틀리는", ["킥백 (Kick-back)", "시미", "바운싱", "피칭"]),
        ("토인(Toe-in) 값을 조정할 때", ["타이로드 (타이로드 엔드)", "스테빌라이저", "로워 암", "스트럿"]),
        ("원활한 조향 회전을 돕고 충격을 흡수하는 베어링", ["스트럿 베어링", "휠 베어링", "허브 베어링", "킹핀"]),
        ("차체 뒤쪽이 주저앉고 앞쪽이 들리는", ["스쿼트 (Squat)", "노즈 다이브", "롤링", "시미"]),
        ("차량 앞부분이 급격히 내려앉는", ["노즈 다이브 (Dive)", "스쿼트", "바운싱", "킥백"]),
        ("작동유가 외부로 스며 나와 먼지와 엉겨", ["오일 누유 (오일 리크)", "에어 혼입", "가스 누설만", "부싱 마모만"]),
    ],
}


def to_short(set_id, q):
    for key, opts in SHORT_OPTS[set_id]:
        if key in q["question"]:
            return {
                "type": "short",
                "question": q["question"],
                "options": opts,
                "answer": 0,
                "explain": q["explain"],
            }
    raise KeyError(f"{set_id}: {q['question'][:90]}")


def convert_one(fname, tag, sid):
    qs, fails = cv.convert(cv.HWP_DIR / fname, tag)
    print(sid, "raw", len(qs), Counter(q["type"] for q in qs), "fails", len(fails))
    for f in fails:
        print(" FAIL", f)
    out = []
    for q in qs:
        if q["type"] == "short":
            out.append(to_short(sid, q))
        else:
            out.append(q)
    return out


def extract_set_block(text, sid):
    m = re.search(rf'(    \{{\n        id: "{sid}".*?\n    \}})', text, re.S)
    if not m:
        raise SystemExit(f"keep set missing: {sid}")
    return m.group(1)


def main():
    book_path = (
        cv.ROOT
        / "start"
        / "문제모음"
        / "01자동차정비산업기사"
        / "01정비산업기사_책출제문제.js"
    )
    old = book_path.read_text(encoding="utf-8")
    keep = {sid: extract_set_block(old, sid) for sid in KEEP_IDS}

    replaced = {}
    for fname, tag, sid, rname in REPLACE:
        qs = convert_one(fname, tag, sid)
        replaced[sid] = cv.emit_set(sid, rname, qs)
        print(sid, "final", len(qs))

    # 표시 순서: 가솔린, 냉난방, 네트워크, 디젤, 배출, 제동, 조향, 편의, 현가
    order = [
        ("book_gasoline_ecu", keep["book_gasoline_ecu"]),
        ("book_hvac", keep["book_hvac"]),
        ("book_network", replaced["book_network"]),
        ("book_diesel_ecu", keep["book_diesel_ecu"]),
        ("book_emission", keep["book_emission"]),
        ("book_brake", replaced["book_brake"]),
        ("book_steering", replaced["book_steering"]),
        ("book_convenience", keep["book_convenience"]),
        ("book_suspension", replaced["book_suspension"]),
    ]
    js = (
        "// 산업기사 책 출제문제 — HWP 변환본 (유형: mc / ox / match / short)\n"
        "// 네트워크·제동·조향·현가: (추가) HWP로 교체\n\n"
        "export const bookQuizSets = [\n"
        + ",\n".join(block for _, block in order)
        + "\n];\n"
    )
    # 안전: 문자열 안 실제 개행 금지 휴리스틱
    for i, line in enumerate(js.splitlines(), 1):
        if line.startswith("[") and '"type"' not in line and not line.strip().startswith("//"):
            raise SystemExit(f"raw newline leak at line {i}: {line[:80]}")
    book_path.write_text(js, encoding="utf-8")
    print("wrote", book_path)


if __name__ == "__main__":
    main()
