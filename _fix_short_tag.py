# -*- coding: utf-8 -*-
"""주관식(보기형) 13문항만 short 유지, 오탐은 mc로 복구"""
import re
from pathlib import Path

p = Path(r"start/문제모음/01자동차정비산업기사/01정비산업기사_책출제문제.js")
t = p.read_text(encoding="utf-8")

# 원래 HWP 주관식 → 보기 변환본 식별 키워드 (질문 고유 조각)
KEEP = [
    "증발기 온도를 감지하여 0.5~1",
    "인체에 유해한 가스가 실내로 유입시 내기모드",
    "탄화불화올레핀(HFO: Hydrofluoroolefin)",
    "압축기 → 응축기 → 리시버드라이어 → 팽창밸브",
    "기존의 트리플 압력스위치를 대체하는 센서로서, 연속적으로",
    "일명 공기조화장치 혹은",
    "오염 감지 시 약 5V, 오염 미감지 시 약 0V",
    "온도와 저항 간에 상호 반비례",
    "냉매 회수 → 진공 작업 → ( ) 작업 → 충전 작업",
    "R-134a보다 월등히 적은 대체 물질로 새로이 개발된 최신 냉매",
    "얼굴 방향, 앞 유리 방향, 바닥 방향, MIX 순으로",
    "포토센서라고 불리며 메인 크래시패드 중앙에 위치한 센서는?",
    "고온·고압의 기체 냉매를 냉각시켜 액체로 변화시키는 장치는?",
]

n_keep = 0
n_revert = 0


def repl(m):
    global n_keep, n_revert
    s = m.group(0)
    qm = re.search(r'"question": "((?:\\.|[^"\\])*)"', s)
    qs = qm.group(1) if qm else ""
    # unescape for matching
    plain = qs.replace("\\n", "\n")
    if any(k in plain for k in KEEP):
        n_keep += 1
        return s  # already short
    n_revert += 1
    return s.replace('"type": "short"', '"type": "mc"', 1)


newt = re.sub(r"\{[^{}]*\"type\": \"short\"[^{}]*\}", repl, t)
p.write_text(newt, encoding="utf-8")
print("keep", n_keep, "revert", n_revert)
print("short left", newt.count('"type": "short"'))
