// -----------------------------
// 문제 배열
export const industry010301 = [
    {
        question: "냉매 순환 시스템에서 액체 냉매 내에 포함된 수분을 흡수하여 시스템의 부식을 방지하고, 이물질을 걸러주는 역할을 하는 부품은 무엇입니까?",
        options: ["팽창 밸브(Expansion Valve)", "응축기(Condenser)", "수액기(Receiver Drier)", "압축기(Compressor)"],
        answer: 2,
        explain: "수액기(리시버 드라이어)는 냉매 속 수분을 흡수하는 건조제와 이물질을 거르는 필터를 포함하여 시스템을 건조하고 청정하게 유지합니다."
    },
    {
        question: "A/C 시스템 정비 중 냉매 충전 전에 반드시 진공 작업을 실시해야 하는 가장 중요한 목적은 무엇입니까?",
        options: ["시스템 내부 냉매의 누설 부위를 정확하게 찾기 위함", "시스템 내부의 압력을 높여 응축 효율을 증대시키기 위함", "시스템 내부의 냉동 오일을 규정량만큼 보충하기 위함", "시스템 내부의 수분 및 비응축성 가스(공기)를 제거하기 위함"],
        answer: 3,
        explain: "진공 작업은 시스템 내부의 공기와 수분을 제거하여 냉매 순환 방해와 부식 방지, 냉매 시스템의 성능 저하를 막기 위한 필수 절차입니다."
    },
    {
        question: "신냉매인 R-1234yf를 사용하는 차량을 정비할 때 R-134a 시스템보다 더욱 엄격하게 주의해야 할 안전 사항은 무엇입니까?",
        options: ["냉매의 독성 때문에 항상 방독 마스크를 착용해야 한다.", "냉매의 온도가 매우 낮으므로 동상에 특히 주의해야 한다.", "냉매가 인화성(약한 가연성)이 있어 화기 및 스파크를 피해야 한다.", "냉매가 고압이므로 진공 작업을 평소보다 더 오래 해야 한다."],
        answer: 2,
        explain: "R-1234yf는 약한 가연성을 가지고 있어, 정비 시 스파크나 고열이 발생할 수 있는 장소에서의 작업은 엄격하게 금지됩니다."
    },
    {
        question: "A/C 시스템의 압축기 작동을 제어하는 압력 스위치 중, 냉매 누설 등으로 인해 저압이 지나치게 낮아졌을 때 압축기 작동을 정지시켜 압축기를 보호하는 스위치는 무엇입니까?",
        options: ["고압 압력 스위치(High Pressure Switch)", "저압 압력 스위치(Low Pressure Switch)", "에어 믹스 스위치(Air Mix Switch)", "안전 컷 스위치(Safety Cut Switch)"],
        answer: 1,
        explain: "저압 압력 스위치는 냉매 부족 등으로 흡입 압력이 규정값 이하로 내려가면 압축기 손상 방지를 위해 작동을 중단시킵니다."
    },
    {
        question: "에어컨 작동 시 저압 측 압력이 규정 압력보다 매우 낮고(거의 진공 상태), 고압 측 압력도 규정 압력보다 낮은 경우에 의심할 수 있는 가장 적절한 고장 원인은 무엇입니까?",
        options: ["냉매량이 과도하게 많은 경우", "팽창 밸브(TXV)가 완전히 막힌 경우", "압축기 토출 밸브가 파손된 경우", "응축기 냉각 팬이 고장 난 경우"],
        answer: 1,
        explain: "팽창 밸브가 막히면 냉매 순환이 거의 일어나지 않아 압축기 흡입 측(저압)이 진공에 가깝게 되며, 고압 측도 낮게 측정됩니다."
    },
    {
        question: "팽창 밸브(TXV, Thermal Expansion Valve) 대신 오리피스 튜브(Orifice Tube)를 사용하는 시스템에서 액체 냉매를 기화시키는 장소와 그 역할을 가장 바르게 설명한 것은 무엇입니까?",
        options: ["응축기 내부에서 냉매의 압력을 낮춰 기화시킨다.", "수액기 내부에서 냉매의 압력을 낮춰 기화시킨다.", "증발기 입구에서 냉매의 압력을 낮춰 증발기 내부에서 기화시킨다.", "압축기 내부에서 냉매의 압력을 높여 기화시킨다."],
        answer: 2,
        explain: "오리피스 튜브는 냉매의 압력을 급격히 낮추는 역할을 하며, 이로 인해 증발기 내부로 들어간 저압 냉매가 흡열 작용(기화)을 합니다."
    },
    {
        question: "난방 장치 작동 시 실내에 달콤한 냄새가 나거나, 앞 유리창에 기름때가 끼고, 냉각수 레벨이 지속적으로 감소하는 경우, 가장 먼저 의심해야 할 부품의 고장은 무엇입니까?",
        options: ["블로워 모터의 고장", "에어 믹스 댐퍼의 작동 불량", "히터 코어(Heater Core)의 누설", "엔진 냉각수 온도 센서의 불량"],
        answer: 2,
        explain: "히터 코어 누설 시 냉각수가 증발하여 실내로 유입되며, 부동액 때문에 달콤한 냄새가 나거나 유리창에 유막이 형성될 수 있습니다."
    },
    {
        question: "에어컨이나 히터를 작동했을 때, 팬 속도를 '강(High)'으로 설정했음에도 불구하고 공기 토출구에서 나오는 바람의 세기가 약하다면, 가장 먼저 점검해야 할 부품은 무엇입니까?",
        options: ["블로워 모터 저항(Blower Motor Resistor)", "블로워 모터(Blower Motor)", "증발기(Evaporator)의 막힘 (에어 필터 포함)", "A/C 릴레이"],
        answer: 2,
        explain: "바람의 세기가 약한 것은 공기 통로에 문제가 있음을 의미하며, 증발기나 히터 코어 앞에 위치한 캐빈 에어 필터가 막혔을 때 주로 발생합니다."
    },
    {
        question: "전자동 공조 시스템(FATC) 차량에서 운전석 대시보드 위쪽에 설치되어 햇빛의 강도를 감지하여 A/C 시스템 제어에 활용하는 센서는 무엇이며, 이 센서가 고장 났을 때 발생할 수 있는 가장 흔한 현상은 무엇입니까?",
        options: ["외기 온도 센서 / 계기판에 외부 온도가 표시되지 않는다.", "증발기 온도 센서 / 에어컨 작동 시 서리가 낀다.", "일사량 센서(Solar Sensor) / 햇빛 강도와 관계없이 토출 온도가 일정하게 유지된다.", "압력 센서 / 냉매가 부족할 때 압축기가 작동하지 않는다."],
        answer: 2,
        explain: "일사량 센서는 햇빛이 강할수록 냉방 부하를 높여 토출 온도를 낮추는 보정 제어에 사용됩니다. 고장 시 이 보정 기능이 상실됩니다."
    },
    {
        question: "냉매 충전 시 규정량을 정확히 충전하기 위해 가장 권장되는 냉매의 충전 상태와 그 이유는 무엇입니까?",
        options: ["기체 상태로 고압 측에 충전, 오일 순환에 도움이 되기 때문", "액체 상태로 저압 측에 충전, 압축기 손상 방지를 위해", "액체 상태로 고압 측에 충전, 정확한 양을 빠르게 충전할 수 있기 때문", "기체 상태로 저압 측에 충전, 압축기 손상 방지를 위해"],
        answer: 2,
        explain: "냉매 회수/충전기를 이용해 액체 상태로 고압 측에 충전해야 액체의 밀도를 이용해 가장 정확하고 신속하게 규정량을 충전할 수 있습니다."
    },
    {
        question: "A/C 시스템의 응축기(Condenser)나 수액기(Receiver Drier)를 교환하는 정비 작업을 마친 후, 반드시 신규 냉동 오일을 보충해야 하는 이유는 무엇입니까?",
        options: ["교환된 부품들이 신유를 더 많이 흡수하여 냉매 순환을 원활하게 하기 위함", "교환 과정에서 손실된 냉동 오일을 보충하여 압축기의 윤활을 보장하기 위함", "냉매와 오일의 혼합을 촉진하여 냉방 성능을 극대화하기 위함", "교환된 부품 내부의 수분을 오일이 흡수하여 건조시키기 위함"],
        answer: 1,
        explain: "수액기나 콘덴서 등 부품 교환 시 기존 오일이 함께 제거되므로, 압축기 윤활을 위해 손실량을 계산하여 반드시 보충해야 합니다."
    },
    {
        question: "하이브리드 또는 전기자동차의 에어컨 시스템 정비 시, 일반 내연기관 차량과 비교하여 가장 주의해야 할 안전 사항은 무엇입니까?",
        options: ["엔진룸의 공간이 좁아 정비에 더 많은 시간이 소요된다.", "R-134a 대신 R-1234yf 냉매를 사용하므로 누설에 주의해야 한다.", "고전압 부품이 많아 정비 전 반드시 고전압 배터리를 차단해야 한다.", "PTC 히터의 발열량이 높아 화재에 주의해야 한다."],
        answer: 2,
        explain: "EV/HEV 차량은 고전압 시스템을 사용하므로, A/C 압축기(전동 컴프레서) 등 관련 부품 정비 전에는 반드시 고전압 차단 조치가 필수입니다."
    },
    {
        question: "A/C 시스템의 저압 라인(굵은 파이프)을 만졌을 때, 정상적인 작동 상태에서 느껴져야 하는 냉매의 온도 및 상태 변화로 가장 적절한 것은 무엇입니까?",
        options: ["매우 뜨거우며, 고온고압의 기체 상태이다.", "매우 차가우며, 저온저압의 기체 상태이다.", "약간 따뜻하며, 저온저압의 액체 상태이다.", "미지근하며, 고온고압의 액체 상태이다."],
        answer: 1,
        explain: "저압 라인은 증발기에서 기화되어 압축기로 흡입되는 냉매가 흐르며, 증발열(흡열)로 인해 온도가 매우 낮고 저압의 기체 상태입니다."
    },
    {
        question: "전자동 공조 시스템(FATC) 차량에서 운전자가 '발(Floor)' 모드를 선택했으나 공기가 계속 앞 유리창(Defrost) 쪽으로만 토출되는 고장이 발생했습니다. 이 경우 가장 유력한 원인 부품은 무엇입니까?",
        options: ["온도 조절용 에어 믹스 댐퍼 액추에이터", "실내 온도 센서", "공기 토출 모드 선택용 댐퍼 액추에이터", "A/C 압축기 클러치"],
        answer: 2,
        explain: "토출 모드(방향)를 제어하는 부품은 모드 댐퍼와 이를 구동하는 액추에이터입니다. 액추에이터나 댐퍼 링크에 문제가 생기면 원하는 방향으로 토출되지 않습니다."
    },
    {
        question: "A/C 시스템 작동 시 '끼익' 또는 '쉬익' 하는 비정상적인 소음이 발생했습니다. 소음 발생 지점을 확인한 결과 압축기(컴프레서) 구동 시에만 발생하고 정지 시 사라진다면, 가장 먼저 점검해야 할 사항은 무엇입니까?",
        options: ["응축기 내부의 압력 과도 상승 여부", "압축기 구동 벨트의 장력 또는 마모 상태", "증발기 내부 냉매 순환 막힘 여부", "냉동 오일의 점도 및 양"],
        answer: 1,
        explain: "컴프레서 구동 시 발생하는 금속성 '끼익' 소음은 대부분 구동 벨트의 장력이 부족하거나 벨트가 마모되어 미끄러질 때 발생합니다."
    },
    {
        question: "1990년대 초반에 생산된 R-12 냉매를 사용하던 차량에 R-134a 냉매를 그대로 충전하는 것이 허용되지 않는 가장 주된 이유와 그에 따른 문제점은 무엇입니까?",
        options: ["냉방 성능이 R-134a가 더 우수하여 시스템의 압력이 지나치게 상승한다.", "R-134a용 오일(PAG)이 R-12용 오일(광유)과 혼합되지 않아 압축기 윤활 불량이 발생한다.", "R-134a의 입자 크기가 작아 냉매 누설이 더 심하게 발생한다.", "R-134a는 독성이 강하여 R-12 시스템에 사용 시 인체에 유해하다."],
        answer: 1,
        explain: "R-134a용 오일(PAG)과 R-12용 오일(광유)은 상성이 맞지 않아, 냉매만 교체할 경우 오일이 순환하지 않아 압축기 윤활 불량으로 고장나게 됩니다."
    },
    {
        question: "난방 장치 작동 시 실내로 유입되는 공기의 온도를 운전자가 설정한 값으로 제어하기 위해 히터 코어를 통과하는 공기와 우회하는 공기의 비율을 조절하는 부품은 무엇입니까?",
        options: ["에어 인테이크 댐퍼(Air Intake Damper)", "에어 믹스 댐퍼(Air Mix Damper)", "모드 댐퍼(Mode Damper)", "블로워 모터(Blower Motor)"],
        answer: 1,
        explain: "에어 믹스 댐퍼는 히터 코어를 통과한 뜨거운 공기와 우회한 찬 공기를 섞는 비율을 조절하여 최종 토출 공기 온도를 결정합니다."
    },
    {
        question: "엔진 냉각수의 순환을 조절하여 히터 코어 쪽으로 유입되는 냉각수의 양을 제어하는 부품은 무엇이며, 이 부품의 고장 시 주로 발생하는 현상은 무엇입니까?",
        options: ["서모스탯 / 냉각수 온도가 너무 낮아져 난방이 안 된다.", "히터 밸브(Water Valve) / 난방을 꺼도 계속 뜨거운 바람이 나온다.", "워터 펌프 / 냉각수 순환이 멈춰 엔진 과열이 발생한다.", "라디에이터 캡 / 냉각수 압력이 과도하게 낮아진다."],
        answer: 1,
        explain: "히터 밸브는 난방 불필요 시 냉각수 유입을 차단합니다. 고장나 닫히지 않으면 냉방 시에도 뜨거운 바람이 유입되는 현상이 발생합니다."
    },
    {
        question: "A/C 압축기용 냉동 오일을 보충하거나 교환할 때, R-134a 시스템에 사용되는 합성 오일의 종류는 무엇이며, 이 오일을 취급할 때 가장 주의해야 할 사항은 무엇입니까?",
        options: ["광유(Mineral Oil) / 낮은 온도에서 점도가 급격히 상승함", "POE 오일(Polyol Ester Oil) / 독성이 강하여 피부 접촉 금지", "PAG 오일(Polyalkylene Glycol Oil) / 대기 중 수분을 쉽게 흡수하여 변질됨", "PAO 오일(Polyalphaolefin Oil) / 금속 부품을 부식시킬 위험이 높음"],
        answer: 2,
        explain: "R-134a용 PAG 오일은 흡습성이 매우 강하여 공기 중에 노출되면 수분을 흡수하고 산성화되어 압축기를 손상시키므로 주의해야 합니다."
    },
    {
        question: "냉매 사이클에서 저압의 액체 냉매가 기화(증발)하면서 차량 실내의 열을 빼앗아 냉각 작용을 하는 부품은 무엇입니까?",
        options: ["증발기(Evaporator)", "응축기(Condenser)", "수액기(Receiver Drier)", "팽창 밸브(Expansion Valve)"],
        answer: 0,
        explain: "증발기 내부에서 냉매가 액체에서 기체로 상변화하며 주변의 열을 흡수(증발열)하여 실내 공기를 냉각시키는 역할을 합니다."
    },
    {
        question: "A/C 시스템이 작동 시에는 냉방이 잘 되지만, 10분 정도 후에 냉방이 약해지거나 중단되고 압축기가 작동을 멈추었다가 다시 작동하는 현상이 반복되는 경우, 가장 먼저 의심해야 할 고장 원인은 무엇입니까?",
        options: ["냉매량이 과도하게 많은 경우", "고압 스위치 작동 불량", "증발기 표면에 서리가 과도하게 형성되는 경우", "압축기 클러치 슬립"],
        answer: 2,
        explain: "증발기에 서리가 끼면 냉매 흡입이 막히고 증발기 온도 센서가 과냉을 감지하여 압축기를 중단시킵니다. 서리가 녹으면 다시 작동하는 현상을 반복합니다."
    },
    {
        question: "A/C 압축기가 심하게 고착(Seizure)되어 교환할 때, 시스템에 심각한 오염이 발생했다고 판단되면 수액기/오리피스 튜브 외에 반드시 교환하거나 수행해야 하는 작업은 무엇입니까?",
        options: ["응축기(Condenser)의 재사용 및 오일만 교환", "시스템 내부의 냉매 라인 및 구성품을 플러싱(Flushing) 작업으로 세척", "팽창 밸브의 미세 조정만 실시", "고압 압력 스위치만 교환"],
        answer: 1,
        explain: "압축기 고착 시 발생하는 쇳가루가 시스템 전체로 순환하여 재고장의 원인이 되므로, 수액기 교환과 함께 냉매 라인을 플러싱하여 이물질을 완전히 제거해야 합니다."
    },
    {
        question: "A/C 시스템의 성능 시험 중, 엔진 회전수를 2,000 rpm으로 유지하고 A/C를 작동시킨 상태에서 실내의 토출구 온도(벤트 온도)가 10℃ 이상으로 측정되었습니다. 가장 유력한 고장 원인과 점검해야 할 부품은 무엇입습니까?",
        options: ["냉매 과다 충전 / 압축기 토출 압력", "냉매 부족 / 매니폴드 게이지의 저압 및 고압 압력", "블로워 모터 불량 / 블로워 모터 저항", "냉각수 누설 / 히터 호스"],
        answer: 1,
        explain: "토출 온도가 높다는 것은 냉방 성능이 부족하다는 의미이며, 가장 흔한 원인인 냉매 부족 여부를 매니폴드 게이지로 확인해야 합니다."
    },
    {
        question: "난방 장치에서 냉각수 히터 코어 순환 시 발생하는 열 손실을 최소화하고, 공기 흐름을 조절하여 난방 효율을 높이는 데 사용하는 부품은 무엇입니까?",
        options: ["블로워 모터", "히터 코어", "히터 덕트 및 케이스", "에어 믹스 댐퍼"],
        answer: 2,
        explain: "덕트와 케이스는 외부의 찬 공기 유입을 차단하고, 발생한 열이 새지 않고 정확하게 토출구로 유도되도록 공기 흐름을 제어하는 역할을 합니다."
    },
    {
        question: "A/C 시스템을 작동할 때, 냉방 부하가 가장 크게 걸려 엔진의 출력 손실이 가장 크게 발생하는 경우는 언제입니까?",
        options: ["냉매 부족으로 압축기가 간헐적으로 작동할 때", "증발기 온도가 설정값 이하로 내려가 압축기가 정지했을 때", "외기 온도가 높고 습도가 높은 조건에서 압축기가 연속 작동할 때", "냉매 순환 시스템에 이물질이 막혀 압축기가 작동하지 않을 때"],
        answer: 2,
        explain: "외기 온도와 습도가 높으면 냉방 부하가 최대가 되어 압축기가 가장 오랜 시간 연속으로 작동합니다. 압축기는 엔진 동력으로 구동되므로 이때 출력 손실이 가장 큽니다."
    },
    {
        question: "A/C 시스템의 전기 회로 진단 중, 압축기 클러치 쪽으로 공급되는 전압을 측정했더니 12V가 정상적으로 인가되고 있으나, 압축기 클러치가 작동하지 않는다면 가장 먼저 점검해야 할 부품의 고장은 무엇입니까?",
        options: ["압축기 클러치 코일 단선 또는 단락", "에어컨 릴레이 접점 불량", "증발기 온도 센서 불량", "A/C 스위치 불량"],
        answer: 0,
        explain: "전압은 인가되지만 부하(클러치 코일)가 작동하지 않는다는 것은 코일 자체에 단선/단락 문제가 있음을 의미합니다."
    },
    {
        question: "A/C 시스템의 정비 작업 중, 냉매 호스를 탈거하고 다시 조립할 때 반드시 신규 O링을 사용하고 냉동 오일을 도포해야 하는 가장 중요한 이유는 무엇입니까?",
        options: ["신규 냉매 오일의 점도 유지", "호스 뒤틀림 방지 및 마찰열 감소", "냉매 누설 방지를 위한 완전한 밀봉성 확보", "압축기 클러치의 작동 부하 감소"],
        answer: 2,
        explain: "O링은 냉매 누설을 막는 핵심 부품이며, 오일 도포는 밀봉 성능과 조립성을 높여 누설 위험을 최소화합니다."
    },
    {
        question: "R-134a 냉매를 사용하는 시스템에서 외기 온도 20℃에서 엔진 2,000 rpm으로 A/C를 작동했을 때, 매니폴드 게이지에 나타나는 일반적인 정상 압력 범위로 가장 적절한 것은 무엇입니까?",
        options: ["저압: 1.5 ~ 2.0 kgf/cm^2, 고압: 4.0 ~ 6.0 kgf/cm^2", "저압: 2.5 ~ 3.5 kgf/cm^2, 고압: 10.0 ~ 15.0 kgf/cm^2", "저압: 3.5 ~ 4.5 kgf/cm^2, 고압: 18.0 ~ 25.0 kgf/cm^2", "저압: 0.5 ~ 1.0 kgf/cm^2, 고압: 2.0 ~ 4.0 kgf/cm^2"],
        answer: 1,
        explain: "외기 온도 20℃ 정도의 일반적인 조건에서 R-134a의 정상 작동 압력 범위는 저압 2.5 ~ 3.5 kgf/cm^2, 고압 10 ~ 15 kgf/cm^2 근처입니다."
    },
    {
        question: "A/C 시스템 작동 시, 시동 직후(Cold Start)에는 ECU가 압축기 구동을 지연시키거나 Idle Up을 제한하는 제어를 실시하는 경우가 있습니다. 이 제어의 주된 목적은 무엇입니까?",
        options: ["냉매 회수를 원활하게 하기 위함", "엔진의 안정적인 아이들링 속도 확보 및 시동 부하 최소화", "응축기 냉각 팬의 워밍업 시간 확보", "냉매 순환 시스템 내부의 압력 상승 방지"],
        answer: 1,
        explain: "시동 직후 엔진이 불안정할 때 A/C 압축기가 작동하면 엔진에 과도한 부하가 걸려 시동이 꺼지거나 아이들링이 불안정해지는 것을 방지하기 위함입니다."
    },
    {
        question: "A/C 시스템 정비 중, A/C 작동 후 고압 라인(가는 파이프)을 만졌을 때, 정비사가 반드시 착용해야 할 PPE (개인 보호 장비)와 가장 주의해야 할 안전 위험은 무엇입니까?",
        options: ["절연 장갑 / 고전압 감전 위험", "내열 장갑 / 고온의 냉매로 인한 화상 위험", "일반 면장갑 / 냉매 압력 폭발 위험", "방진 마스크 / 미세 먼지 흡입 위험"],
        answer: 1,
        explain: "압축기 토출 후의 고압 라인은 응축열로 인해 매우 뜨거워지므로, 냉매 압력 자체보다 파이프 표면의 고온으로 인한 화상에 특히 주의해야 합니다."
    },
    {
        question: "R-134a 냉매를 사용하는 시스템에서 외기 온도 35℃에서 A/C를 작동했을 때, 고압 압력이 30 kgf/cm^2 이상으로 지나치게 높다면, 가장 유력한 원인은 무엇입니까?",
        options: ["냉매량이 지나치게 부족한 경우", "팽창 밸브가 막혀 냉매 순환이 원활하지 않은 경우", "응축기의 냉각 팬 불량 또는 막힘", "압축기 클러치가 슬립(Slip)하는 경우"],
        answer: 2,
        explain: "고압이 비정상적으로 높다는 것은 고온고압 냉매가 액화되지 못하고 있음을 의미하며, 응축기의 냉각 불량(팬 고장 또는 공기 흐름 방해)이 가장 흔한 원인입니다."
    },
    {
        question: "A/C 시스템의 냉매 누설 여부를 확인하기 위해 냉매 대신 질소 가스(Nitrogen Gas)를 시스템에 주입하여 압력 시험을 실시하는 경우, 가장 주의해야 할 안전 사항은 무엇입니까?",
        options: ["시스템이 R-134a용인지 R-1234yf용인지 구분해야 한다.", "질소 가스가 인화성이 있어 화기를 가까이해서는 안 된다.", "시스템의 규정 최고 압력(30 ~ 35 kgf/cm^2)을 초과하여 압력을 가하면 안 된다.", "질소 가스를 주입하기 전에 진공 작업을 생략해도 된다."],
        answer: 2,
        explain: "질소 압력 테스트는 시스템의 규정 압력 이상을 가할 경우 부품 파손이나 심각한 폭발 위험이 있으므로 반드시 규정치를 준수해야 합니다."
    },
    {
        question: "A/C 시스템 구성 요소 중, 차량 실내(대시보드 내부)에 위치하여 냉방 작동 시 수분을 응결시켜 제거하고 실내 공기를 냉각시키는 역할을 하는 핵심 부품은 무엇입니까?",
        options: ["응축기(Condenser)", "압축기(Compressor)", "수액기(Receiver Drier)", "증발기(Evaporator)"],
        answer: 3,
        explain: "증발기는 냉매가 기화하며 실내 공기를 냉각시키고, 공기 중 수분을 응결시켜 물(응축수)로 배출하는 제습 작용을 수행합니다."
    },
    {
        question: "전자동 공조 시스템(FATC)에서 실내 온도를 제어하기 위해 운전자가 설정한 목표 온도에 맞춰 블로워 모터의 속도와 에어 믹스 댐퍼의 개방량을 결정하는 주체는 무엇입니까?",
        options: ["압축기(Compressor)", "증발기 온도 센서", "공조 ECU(Auto A/C Control Unit)", "엔진 ECU"],
        answer: 2,
        explain: "공조 ECU는 실내외 온도, 일사량, 설정 온도 등의 정보를 바탕으로 블로워 속도, 댐퍼 위치 등 공조 시스템의 모든 작동을 최종적으로 제어하는 두뇌 역할을 합니다."
    },
    {
        question: "난방 장치에서 실내 공기의 온도가 충분히 올라가지 않는 현상이 발생했을 때, 가장 먼저 점검해야 할 엔진 측 구성 요소는 무엇입니까?",
        options: ["냉각수 온도 센서", "냉각수 서모스탯", "히터 코어", "블로워 모터"],
        answer: 1,
        explain: "난방 불량은 히터 코어로 충분한 열(냉각수)이 공급되지 않기 때문이며, 서모스탯이 고착되어 냉각수가 과도하게 순환하면 냉각수 온도가 충분히 오르지 않아 난방 성능이 저하됩니다."
    },
    {
        question: "A/C 시스템의 '가변 용량 압축기(Variable Displacement Compressor)'의 특징으로 가장 적절한 것은 무엇입니까?",
        options: ["엔진 회전수와 관계없이 항상 일정량의 냉매만 토출한다.", "클러치 구동 방식이 아닌 마그네틱 플루이드 방식을 사용한다.", "냉방 부하에 따라 냉매 토출량을 가변하여 압축기 ON/OFF 횟수를 최소화한다.", "항상 최대의 냉매를 토출하여 냉방 효율을 극대화한다."],
        answer: 2,
        explain: "가변 용량 압축기는 시스템 압력에 따라 피스톤 행정을 조절하여 냉매 토출량을 가변하므로, 압축기 클러치 작동 횟수를 줄여 부하 변동을 최소화합니다."
    },
    {
        question: "냉매 회수 및 충전 장비에 부착된 진공 펌프를 사용할 때, 정기적으로 점검하고 교환해야 하는 소모품은 무엇이며, 그 이유는 무엇입니까?",
        options: ["A/C 호스 / 고압 냉매 누설 방지", "진공 펌프 오일 / 펌프의 밀봉 및 냉각 성능 확보", "매니폴드 게이지 / 정확한 압력 측정", "전원 케이블 / 감전 사고 예방"],
        answer: 1,
        explain: "진공 펌프 오일은 진공 상태를 만드는 데 필요한 밀봉 역할과 펌프의 윤활 및 냉각 역할을 하며, 수분 흡수 등으로 변질되므로 정기적인 교환이 필수입니다."
    },
    {
        question: "A/C 시스템의 냉방 성능 평가 시, 차량 내부로 들어오는 외기 온도와 관계없이 냉방 성능이 가장 우수하다고 판단할 수 있는 Air Vent Temp (토출구 온도)의 기준으로 가장 적절한 것은 무엇입니까?",
        options: ["실내 온도보다 5℃ 낮은 경우", "10℃ ~ 15℃ 범위 내", "5℃ ~ 8℃ 범위 내", "20℃ 이상"],
        answer: 2,
        explain: "A/C 시스템의 성능이 정상일 경우, $\text{A/C}$ 작동 조건에서 공기 토출구 온도는 5℃ ~ 8℃ 내외로 측정되어야 가장 우수하다고 판단할 수 있습니다."
    },
    {
        question: "블로워 모터가 정상적으로 작동하고 A/C 시스템이 냉방 상태일 때, 운전석 쪽 토출구 온도는 차가운데 조수석 쪽 토출구 온도는 상대적으로 미지근한 현상이 발생했습니다. 이 고장의 유력한 원인은 무엇입니까?",
        options: ["냉매량 부족", "증발기 코어 전체의 막힘", "듀얼 존 공조 시스템의 에어 믹스 댐퍼 액추에이터 불량", "응축기 냉각 팬 고장"],
        answer: 2,
        explain: "운전석과 조수석의 온도 차이는 듀얼 존 공조 시스템에서 개별 온도 제어를 담당하는 에어 믹스 댐퍼의 작동 불량으로 인해 발생합니다."
    },
    {
        question: "전자동 공조 시스템(FATC)에서 'AUTO' 모드 작동 시, 운전자가 설정한 온도를 유지하기 위해 시스템이 자동으로 제어하는 3대 요소에 포함되지 않는 것은 무엇입니까?",
        options: ["토출구 모드(방향)", "블로워 모터 속도", "에어 믹스 댐퍼 위치(온도)", "압축기 냉동 오일량"],
        answer: 3,
        explain: "AUTO 모드는 쾌적성을 위해 온도, 풍량, 토출 방향, 내/외기 모드 등을 자동으로 제어하며, 냉동 오일량은 정비 시에만 수동으로 확인하는 요소입니다."
    }
];

// 문제/보기 랜덤 섞기
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }
  
  // ✅ 문제 순서 랜덤 + 60문제 제한
  let questions = shuffleArray([...industry010301]).slice(0, 60);
  
  // ✅ 보기 순서도 랜덤화
  questions.forEach((q) => {
    let combined = q.options.map((opt, idx) => ({ opt, idx }));
    combined = shuffleArray(combined);
    q.answer = combined.findIndex((c) => c.idx === q.answer);
    q.options = combined.map((c) => c.opt);
  });
  
  // -----------------------------
  // 답안 저장
  let answers = Array(questions.length).fill(-1);
  
  // -----------------------------
  // 남은 문제 표시
  function updateRemaining() {
    const remainingDiv = document.getElementById("remaining");
    let answered = answers.filter((a) => a >= 0).length;
    remainingDiv.textContent = `남은 문제: ${questions.length - answered}/${questions.length}`;
  }
  
  // -----------------------------
  // 문제 렌더링
  function renderQuiz() {
    const quizDiv = document.getElementById("quiz");
    quizDiv.innerHTML = "";
  
    questions.forEach((q, i) => {
      const div = document.createElement("div");
      div.className = "question";
      div.innerHTML = `<strong>${i + 1}. ${q.question}</strong>`;

      // 1. imagePath 속성이 있는지 확인
        if (q.imagePath) {
            // 2. 이미지 태그를 만들어서 문제 텍스트 아래에 추가
            div.innerHTML += `<img 
                src="${q.imagePath}" 
                alt="문제 그림" 
                style="width: 500px; height: auto; margin: 15px 0;"
            >`;
        }
  
      const optsDiv = document.createElement("div");
      optsDiv.className = "options";
      q.options.forEach((opt, j) => {
        const label = document.createElement("label");
        label.innerHTML = `<input type="radio" name="q${i}" value="${j}"> ${opt}`;
        label.querySelector("input").addEventListener("change", () => {
          answers[i] = j;
          updateRemaining();
        });
        optsDiv.appendChild(label);
      });
      div.appendChild(optsDiv);
  
      const explainDiv = document.createElement("div");
      explainDiv.className = "explain";
      div.appendChild(explainDiv);
  
      quizDiv.appendChild(div);
    });
  
    updateRemaining();
  }
  
  // -----------------------------
  // 제출 및 채점
  function submitQuiz() {
    // 1. 안 푼 문제 인덱스 확인
    const firstUnansweredIndex = answers.findIndex((a) => a < 0);
    const unansweredCount = answers.filter((a) => a < 0).length;

    // 2. 안 푼 문제가 있고, 사용자가 제출을 취소하는 경우
    if (unansweredCount > 0) {
        const confirmSubmit = confirm(
            `아직 ${unansweredCount}개의 문제를 풀지 않았습니다.\n계속 제출하시겠습니까? (취소 시 문제풀이 계속 및 첫 안 푼 문제로 이동)`
        );
        
        if (!confirmSubmit) {
            // 제출 취소 시: 첫 안 푼 문제로 스크롤
            if (firstUnansweredIndex !== -1) {
                const questionDiv = document.getElementsByClassName("question")[firstUnansweredIndex];
                questionDiv.scrollIntoView({ behavior: 'smooth', block: 'center' }); // 부드럽게 스크롤
            }
            return; // 채점 로직 실행 중지
        }
    }
    
    clearInterval(timerInterval);
    document.getElementById("timer").textContent = "";
  
    let score = 0;
    questions.forEach((q, i) => {
      const questionDiv = document.getElementsByClassName("question")[i];
      const explainDiv = questionDiv.querySelector(".explain");
      const radios = questionDiv.querySelectorAll('input[type="radio"]');
  
      if (answers[i] == q.answer) {
        score++;
        radios[q.answer].parentElement.style.backgroundColor = "#b6fcb6";
      } else if (answers[i] >= 0) {
        radios[answers[i]].parentElement.style.backgroundColor = "#fcb6b6";
      }
  
      explainDiv.innerHTML = `<p>정답: ${q.options[q.answer]}</p><p>${q.explain}</p>`;
      radios.forEach((r) => (r.disabled = true));
    });
  
    // 상단 배너에 점수 표시
    const status = document.getElementById("status");
    status.classList.add("center");
    status.innerHTML = `<span id="scoreDisplay">자동차냉·난방장치정비 1회차 총점: ${score}/${questions.length}</span>`;
  
    // 제출 버튼 제거
    document.getElementById("submitBtn").style.display = "none";
  
    // 결과창 표시
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<h2>자동차냉·난방장치정비 1회차 총점: ${score}/${questions.length}</h2>`;
  }
  
  // -----------------------------
  // 타이머
  let totalSeconds = 60 * 60;
  function updateTimer() {
    let h = Math.floor(totalSeconds / 3600);
    let m = Math.floor((totalSeconds % 3600) / 60);
    let s = totalSeconds % 60;
    document.getElementById(
      "timer"
    ).textContent = `남은 시간: ${h.toString().padStart(2, "0")}:${m
      .toString()
      .padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
    if (totalSeconds <= 0) {
      submitQuiz();
    } else {
      totalSeconds--;
    }
  }
  let timerInterval = setInterval(updateTimer, 1000);
  
  // -----------------------------
  // 초기화
  document.getElementById("submitBtn").addEventListener("click", submitQuiz);
  renderQuiz();