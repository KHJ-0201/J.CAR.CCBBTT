# -*- coding: utf-8 -*-
"""책출제문제 short → 4지선다(mc) 변환 + 그룹 순서용 확인"""
import json
import re
from pathlib import Path

path = Path(r"start/문제모음/01자동차정비산업기사/01정비산업기사_책출제문제.js")
text = path.read_text(encoding="utf-8")

# 정답 표시 문구 → [정답, 오답1, 오답2, 오답3]
DISTRACTORS = {
    "증발기 온도 센서 (핀서모 센서)": [
        "증발기 온도 센서 (핀서모 센서)",
        "외기 온도 센서 (Ambient Sensor)",
        "일사량 센서 (포토 센서)",
        "인카 센서 (실내 온도 센서)",
    ],
    "AQS (Air Quality System / 유해가스 차단 장치)": [
        "AQS (유해가스 차단 장치)",
        "APT 센서 (냉매 압력 센서)",
        "IBS 센서 (배터리 센서)",
        "레인 센서 (우적 감지 센서)",
    ],
    "R-1234yf (HFO-1234yf)": [
        "R-1234yf (HFO-1234yf)",
        "R-134a (HFC-134a)",
        "R-12 (CFC-12)",
        "R-404A",
    ],
    "TXV식 (열동 팽창밸브식)": [
        "TXV식 (열동 팽창밸브식)",
        "오리피스 튜브식 (CCOT)",
        "가변 용량 사판식",
        "히트펌프식",
    ],
    "APT 센서 (Automotive Pressure Transducer)": [
        "APT 센서 (냉매 압력 트랜스듀서)",
        "트리플 압력 스위치",
        "핀서모 센서",
        "MAP 센서",
    ],
    "HVAC": [
        "HVAC",
        "OBD-Ⅱ",
        "ECU",
        "BCM",
    ],
    "AQS (AQS 센서)": [
        "AQS 센서 (유해가스 감지)",
        "일사량 센서 (포토 센서)",
        "습도 센서",
        "외기온 센서",
    ],
    "부특성 서미스터 (NTC 서미스터)": [
        "부특성 서미스터 (NTC)",
        "정특성 서미스터 (PTC)",
        "포토 다이오드",
        "홀 센서",
    ],
    "오일 주입 (냉매오일 보충)": [
        "오일 주입 (냉매오일 보충)",
        "누설 탐지",
        "압력 스위치 교환",
        "응축기 세정",
    ],
    "모드 액추에이터 (Mode Actuator / 풍향 조절 액추에이터)": [
        "모드 액추에이터 (풍향 조절)",
        "템프 액추에이터 (에어믹스)",
        "인테이크 액추에이터 (내외기)",
        "블로워 모터 레지스터",
    ],
    "일사량 센서 (포토 센서)": [
        "일사량 센서 (포토 센서)",
        "인카 센서 (실내 온도)",
        "외기온 센서",
        "핀서모 센서",
    ],
    "응축기 (콘덴서, Condenser)": [
        "응축기 (콘덴서)",
        "증발기 (에바포레이터)",
        "팽창밸브",
        "리시버 드라이어",
    ],
}


def pick_options(answers):
    raw = answers[0] if answers else ""
    for key, opts in DISTRACTORS.items():
        if key == raw or key in raw or raw.startswith(key.split()[0]):
            # exact-ish
            if key == raw or raw.startswith(key[:8]):
                return opts, 0
    # fallback by keyword
    joined = " / ".join(answers)
    for key, opts in DISTRACTORS.items():
        token = key.split()[0].replace("(", "")
        if token and token in joined:
            return opts, 0
    # last resort: correct + generic
    correct = answers[0] if answers else "정답"
    opts = [correct, "해당 없음", "측정 불가", "정상 범위"]
    return opts, 0


# Extract each short object with a balanced-brace naive parse from "type": "short"
pattern = re.compile(r'\{ "type": "short",.*?\n\}', re.S)
# objects are single-line in file actually
pattern = re.compile(r'\{ "type": "short",[^\n]*\}')

matches = list(pattern.finditer(text))
print("found short", len(matches))
if len(matches) != 13:
    # try multiline
    pattern = re.compile(r'\{\s*"type":\s*"short"[\s\S]*?\},?(?=\s*(?:\{|\]))')
    matches = list(pattern.finditer(text))
    print("retry found", len(matches))

new_text = text
# replace from end to start to keep indices
for m in reversed(matches):
    raw = m.group(0).rstrip(",")
    # parse as JSON
    try:
        obj = json.loads(raw)
    except Exception as e:
        print("parse fail", e, raw[:80])
        continue
    answers = obj.get("answers") or []
    opts, ans_idx = pick_options(answers)
    # ensure correct is in options
    # normalize: put intended correct at ans_idx already
    mc = {
        "type": "mc",
        "question": obj["question"],
        "options": opts,
        "answer": ans_idx,
        "explain": obj.get("explain", ""),
    }
    repl = json.dumps(mc, ensure_ascii=False)
    # keep trailing comma if original had structure - check
    original = m.group(0)
    suffix = "," if original.rstrip().endswith("}") and text[m.end() : m.end() + 1] != "," else ""
    # original lines don't include trailing comma in match; file has newline after
    new_text = new_text[: m.start()] + repl + new_text[m.end() :]
    print("converted:", opts[0][:40])

path.write_text(new_text, encoding="utf-8")
# verify
left = new_text.count('"type": "short"')
print("remaining short", left)
print("mc in hvac section approx", new_text.count('"type": "mc"'))
