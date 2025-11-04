// -----------------------------
// 문제 배열
export const industry010903 = [
    {    
    question: "하이브리드 자동차에서 엔진의 동력을 발전기와 구동 모터로 분배하는 핵심 기구는 무엇입니까?",
    options: ["토크 컨버터", "CVT 변속기", "유성 기어 세트 (Power Split Device)", "클러치 디스크"],
    answer: 2,
    explain: "직병렬 하이브리드 시스템에서 유성 기어 세트는 엔진의 동력을 구동축과 발전기 사이에 분배하고 모터의 동력과 통합하는 동력 분할 장치 역할을 합니다."
  },
  {
    question: "하이브리드 차량의 고전압 배터리 팩 내부에서 온도 편차가 커질 때 발생하는 주된 문제는 무엇입니까?",
    options: ["차량의 외관 손상", "셀 간의 성능 불균형 심화 및 수명 단축", "타이어 공기압의 급격한 상승", "엔진 오일의 점도 감소"],
    answer: 1,
    explain: "배터리 셀 간의 온도 편차가 크면, 셀마다 충전 및 방전 효율이 달라져 성능 불균형이 심화되고 전체 배터리 팩의 수명이 단축됩니다."
  },
  {
    question: "하이브리드 차량에서 고전압 배터리의 전력 차단 시, 12V 시스템이 즉시 작동을 멈추지 않도록 전력을 공급하는 부품은 무엇입니까?",
    options: ["구동 모터", "LDC (Low DC-DC Converter)", "12V 보조 배터리", "인버터"],
    answer: 2,
    explain: "12V 보조 배터리는 고전압 시스템이 차단되거나 LDC가 작동을 멈췄을 때, 차량의 일반적인 저전압 장치(라이트, ECU, 오디오)에 전원을 공급하여 시스템을 유지합니다."
  },
  {
    question: "하이브리드 자동차의 서비스 플러그를 분리하여 고전압 회로를 차단했을 때, 정상적으로 작동을 멈추지 않는 것은 무엇입니까?",
    options: ["구동 모터", "고전압 배터리", "12V 보조 배터리", "고전압 AC 컴프레서"],
    answer: 2,
    explain: "서비스 플러그는 고전압 회로만 차단합니다. 12V 보조 배터리는 별도로 분리하지 않는 한 계속해서 저전압 시스템에 전원을 공급합니다."
  },
  {
    question: "하이브리드 차량의 PCU에 물이 유입되어 단락되었을 때 발생할 수 있는 가장 심각한 상황은 무엇입니까?",
    options: ["차량의 주행 안정성 증가", "고전압 시스템의 절연 파괴, 화재 또는 감전 위험 증가", "엔진의 압축비 감소", "타이어의 마모 속도 감소"],
    answer: 1,
    explain: "PCU는 고전압이 흐르는 핵심 부품이므로, 물 유입으로 인한 단락은 절연 파괴, 시스템 고장, 감전 및 화재의 직접적인 원인이 됩니다."
  },
  {
    question: "하이브리드 차량의 EHB 시스템에서 브레이크 페달의 감각을 운전자에게 전달하는 부품은 무엇입니까?",
    options: ["캘리퍼 피스톤", "페달 시뮬레이터", "휠 속도 센서", "마스터 실린더"],
    answer: 1,
    explain: "EHB 시스템은 유압적으로 단절된 페달 시뮬레이터를 사용하여, 회생 제동 중에도 운전자에게 일반적인 마찰 브레이크와 유사한 제동 페달 감각을 제공합니다."
  },
  {
    question: "하이브리드 차량의 BMS가 고전압 배터리의 SOC State of Charge를 판단할 때 주로 사용하는 방법은 무엇입니까?",
    options: ["브레이크 패드의 잔량 측정", "전압 및 전류 적산 방식 (쿨롱 카운팅)", "엔진의 연료 분사 시간 측정", "배터리 케이스의 물리적 크기 측정"],
    answer: 1,
    explain: "SOC는 배터리의 남은 충전량을 나타내며, 주로 전압과 함께 입출력 전류를 누적하여 계산하는 쿨롱 카운팅 방식을 통해 추정됩니다."
  },
  {
    question: "하이브리드 차량 정비 시, 고전압 케이블을 절단해야 할 경우 사용해야 하는 공구는 무엇입니까?",
    options: ["일반 펜치", "절연 기능이 없는 니퍼", "절연 규격에 맞는 고전압 절연 커터", "전기 테이프"],
    answer: 2,
    explain: "고전압 케이블은 작업 시 감전 위험이 매우 높으므로, 반드시 고전압 절연 규격 (예: VDE 1000V)에 맞는 절연 커터 등의 공구를 사용해야 합니다."
  },
  {
    question: "하이브리드 차량의 LDC가 고장 났을 때, 차량에 나타나는 일반적인 현상은 무엇입니까?",
    options: ["고전압 배터리 과충전", "12V 보조 배터리 충전 불량 및 방전", "엔진 출력의 급격한 증가", "타이어 공기압 센서 고장"],
    answer: 1,
    explain: "LDC는 고전압을 12V로 낮춰 보조 배터리를 충전하는데, LDC 고장 시 12V 시스템에 전력 공급이 안 되어 보조 배터리가 방전되고 차량 시동 불량이 발생합니다."
  },
  {
    question: "하이브리드 차량에서 고전압 배터리에 공랭식 냉각 방식을 사용할 때의 주요 특징은 무엇입니까?",
    options: ["냉각 효율이 매우 높음", "구조가 간단하고 비용이 저렴함", "정밀한 온도 제어가 가능함", "냉각수 교환이 필요함"],
    answer: 1,
    explain: "공랭식은 별도의 복잡한 액체 순환 시스템 없이 구조가 간단하며 비용이 저렴하다는 장점이 있지만, 수랭식에 비해 정밀한 온도 제어는 어렵습니다."
  },
  {
    question: "하이브리드 차량의 발전기 (Generator)의 주된 역할이 아닌 것은 무엇입니까?",
    options: ["엔진 시동", "고전압 배터리 충전", "구동 모터에 직접 전력 공급", "바퀴 구동"],
    answer: 3,
    explain: "발전기는 엔진 동력을 전기 에너지로 변환하여 충전 또는 모터 구동에 사용하지만, 바퀴 구동 (구동력 제공)은 구동 모터 (Motor)의 역할입니다."
  },
  {
    question: "하이브리드 차량에서 EHB 시스템이 작동할 때, 마찰 브레이크의 개입을 최소화하는 주된 목적은 무엇입니까?",
    options: ["운전자의 제동 습관 교정", "브레이크액의 수명 연장", "회생 제동량을 최대화하여 연비 및 전비 향상", "브레이크등의 작동 횟수 감소"],
    answer: 2,
    explain: "EHB는 회생 제동량을 최대화하여 운동 에너지를 회수하고, 마찰 브레이크 사용을 최소화하여 연료 효율을 극대화하는 것이 주된 목표입니다."
  },
  {
    question: "하이브리드 차량의 BMS가 배터리 셀의 과방전을 감지했을 때 취하는 안전 조치는 무엇입니까?",
    options: ["고전압 회로의 연결", "고전압 회로를 차단하고 주행을 제한", "엔진 출력을 최대화", "셀 간의 전압 밸런싱을 중단"],
    answer: 1,
    explain: "리튬이온 배터리는 과방전 시 성능이 급격히 저하되고 손상될 수 있으므로, BMS는 고전압 회로를 차단하여 배터리 보호 및 주행 제한 조치를 취합니다."
  },
  {
    question: "하이브리드 차량의 인버터 고장 시, 고전압 배터리 전압이 400V인데도 모터가 작동하지 않는 주된 이유는 무엇입니까?",
    options: ["모터는 12V로만 작동하여", "인버터가 DC 전력을 AC 전력으로 변환하지 못해서", "브레이크액 온도가 낮아서", "타이어 공기압이 낮아서"],
    answer: 1,
    explain: "구동 모터는 AC 전력으로 구동되는데, 인버터가 고장나면 배터리의 DC 전력을 AC로 변환할 수 없어 모터에 전력 공급이 되지 않습니다."
  },
  {
    question: "하이브리드 차량에서 AVAS의 소음 발생을 자동으로 중단시키는 조건은 무엇입니까?",
    options: ["엔진이 시동되었을 때", "차량이 일정 속도 이상으로 가속했을 때", "브레이크 페달을 밟았을 때", "운전자가 안전벨트를 풀었을 때"],
    answer: 1,
    explain: "AVAS는 저속 주행 시 보행자 경고를 위해 작동하며, 차량이 일정 속도 이상 (예: 20~30km/h)으로 가속하여 자체적인 풍절음 및 노면 소음이 충분해지면 자동으로 작동이 중단됩니다."
  },
  {
    question: "하이브리드 차량의 DC-Link 커패시터의 주된 역할은 무엇입니까?",
    options: ["브레이크 유압 생성", "모터 제어에 필요한 직류 전압의 안정화", "엔진의 연료 분사 제어", "12V 보조 배터리 충전"],
    answer: 1,
    explain: "커패시터는 인버터 내부에서 DC 전압을 안정화시켜 모터 제어 시 전압 변동을 흡수하고 일시적으로 전력을 저장하는 역할을 합니다."
  },
  {
    question: "하이브리드 차량 정비 시 정전기 방지 조치를 취해야 하는 주된 부품은 무엇입니까?",
    options: ["브레이크 디스크", "PCU 및 BMS 등 전자 제어 장치", "타이어 휠", "냉각수 호스"],
    answer: 1,
    explain: "PCU나 BMS 같은 민감한 전자 제어 장치는 정전기 방전 (ESD)으로 인해 내부 회로가 손상될 수 있으므로, 정전기 방지 조치를 취해야 합니다."
  },
  {
    question: "하이브리드 시스템에서 배터리 셀의 내부 저항이 증가할 때 배터리 성능에 미치는 영향은 무엇입니까?",
    options: ["최대 출력 증가", "충전 속도 증가", "충방전 효율 감소 및 발열 증가", "배터리 수명 증가"],
    answer: 2,
    explain: "내부 저항이 증가하면 배터리 사용 시 열 발생이 늘어나고 전압 강하가 심해져 충방전 효율이 떨어지고 최대 출력이 저하됩니다."
  },
  {
    question: "하이브리드 차량의 EHB 시스템이 고장났을 때, 비상 제동을 위해 작동하는 것은 무엇입니까?",
    options: ["발전기", "기존의 유압 마스터 실린더 회로", "구동 모터", "LDC"],
    answer: 1,
    explain: "EHB 시스템 고장 시, 안전을 위해 기계적으로 연결된 기존의 유압 브레이크 마스터 실린더 회로가 작동하여 최소한의 비상 제동력을 제공합니다."
  },
  {
    question: "하이브리드 차량의 고전압 케이블을 점검할 때, 외부 피복에 심한 손상이 있다면 가장 먼저 취해야 할 조치는 무엇입니까?",
    options: ["브레이크액 교환", "운행을 중단하고 고전압 차단 조치 후 교체", "엔진의 냉각수 보충", "타이어 공기압 조정"],
    answer: 1,
    explain: "고전압 케이블의 피복 손상은 감전 및 누설 전류의 직접적인 위험을 의미하므로, 즉시 운행을 중단하고 안전하게 고전압을 차단한 후 케이블을 교체해야 합니다."
  },
  {
    question: "하이브리드 차량의 LDC가 고장 났을 때, 12V 보조 배터리 전압이 정상 범위인데도 차량 시동이 걸리지 않는 이유는 무엇입니까?",
    options: ["연료 분사량 부족", "고전압 시스템의 메인 접촉기가 작동하지 않아서", "변속기 오일 압력 부족", "에어컨 냉매 부족"],
    answer: 1,
    explain: "HEV 차량의 '시동'은 고전압 배터리의 전력으로 구동 모터가 엔진을 돌리는 과정입니다. LDC 고장으로 12V ECU 전원이 불안정하거나 고전압 시스템에 오류가 있어 메인 접촉기가 연결되지 않으면 시동이 걸리지 않습니다."
  },
  {
    question: "하이브리드 시스템에서 엔진이 시동된 상태에서 발전기가 작동하는 주된 이유는 무엇입니까?",
    options: ["바퀴를 구동하기 위해", "12V 보조 배터리를 충전하기 위해", "고전압 배터리를 충전하거나 구동 모터에 전력을 공급하기 위해", "엔진의 냉각을 보조하기 위해"],
    answer: 2,
    explain: "발전기는 엔진의 동력을 전기로 변환하여 고전압 배터리를 충전하거나, 구동 모터가 필요로 하는 전력을 즉시 공급하는 데 사용됩니다."
  },
  {
    question: "하이브리드 차량의 배터리 팩을 장기간 방치했을 때 발생할 수 있는 현상은 무엇입니까?",
    options: ["배터리 셀의 과방전으로 인한 영구 손상", "셀 간의 전압 밸런싱 개선", "브레이크 패드의 빠른 마모", "엔진의 윤활 성능 향상"],
    answer: 0,
    explain: "장기간 방치 시 배터리는 자연 방전되어 과방전 상태에 도달할 수 있으며, 리튬이온 배터리의 과방전은 영구적인 셀 손상을 유발합니다."
  },
  {
    question: "하이브리드 차량의 열 관리 시스템 점검 시, 냉각수 호스에 심한 변형이나 경화가 있을 때 의심해야 하는 문제는 무엇입니까?",
    options: ["브레이크액 오염", "냉각 시스템 내부의 과도한 압력 상승", "타이어 트레드의 마모", "스티어링 휠의 유격 증가"],
    answer: 1,
    explain: "냉각수 호스의 변형이나 경화는 냉각 시스템 내부의 압력이 비정상적으로 높다는 것을 의미하며, 이는 펌프 고장이나 막힘, 누설의 징후일 수 있습니다."
  },
  {
    question: "하이브리드 차량의 고전압 회로에 사용되는 퓨즈의 주된 역할은 무엇입니까?",
    options: ["전압을 승압하는 역할", "과전류 발생 시 회로를 차단하여 시스템 보호", "전류의 방향을 제어", "배터리 충전 속도 조절"],
    answer: 1,
    explain: "퓨즈는 회로에 과도한 전류가 흐를 때 스스로 끊어져 고전압 시스템의 다른 부품을 보호하고 화재를 예방하는 안전 장치입니다."
  },
  {
    question: "하이브리드 차량에서 엔진 정지 상태에서 전기 모터만으로 구동할 때의 주된 이점은 무엇입니까?",
    options: ["차량 가격 인상", "가속 성능의 급격한 저하", "배기가스 및 소음의 현저한 감소", "브레이크 패드 마모 증가"],
    answer: 2,
    explain: "EV 모드로 주행할 경우 엔진이 작동하지 않으므로 배기가스 배출이 0이며, 소음이 일반 내연기관 차량에 비해 현저히 낮아집니다."
  },
  {
    question: "하이브리드 차량에서 BMS가 배터리의 과열을 감지했을 때, PCU에 지시하는 가장 중요한 내용은 무엇입니까?",
    options: ["엔진 시동을 걸지 말 것", "고전압 배터리의 충방전 출력 제한", "12V 보조 배터리 충전을 중단", "에어컨 컴프레서 작동 중단"],
    answer: 1,
    explain: "과열된 배터리에 높은 전류를 인가하면 열 폭주 위험이 있으므로, BMS는 PCU를 통해 충전 및 방전 출력을 제한하여 배터리를 보호합니다."
  },
  {
    question: "하이브리드 차량의 PHEV에 설치된 차량 충전 인렛 Charging Inlet을 점검 시, 가장 주의해야 할 안전 위험은 무엇입니까?",
    options: ["타이어 펑크", "고전압 감전 및 아크 발생 위험", "냉각수 누설", "연료 냄새"],
    answer: 1,
    explain: "충전 인렛은 외부 전원과 연결되는 부위로, 고전압이 직접 연결될 수 있으므로, 감전 및 아크(단락) 발생 위험에 대한 주의가 필요합니다."
  },
  {
    question: "하이브리드 차량에서 구동 모터의 토크를 정확하게 제어하기 위해 PCU가 사용하는 센서 정보는 무엇입니까?",
    options: ["타이어 공기압 센서", "레졸버 (모터 회전각/속도 센서)", "산소 센서", "브레이크 패드 마모 센서"],
    answer: 1,
    explain: "PCU는 레졸버를 통해 모터의 정확한 회전 위치 및 속도를 알아야 전류 위상을 정밀하게 제어하여 원하는 토크를 발생시킬 수 있습니다."
  },
  {
    question: "하이브리드 차량의 전기식 오일 펌프 고장 시, 차량에 나타나는 일반적인 증상은 무엇입니까?",
    options: ["브레이크 제동력 증가", "엔진 재시동 시 변속 충격 발생 및 주행 제한", "12V 보조 배터리 과충전", "휠 밸런스 불량"],
    answer: 1,
    explain: "전기식 오일 펌프는 엔진 정지 시 변속기 내부 유압을 유지합니다. 펌프 고장 시 유압 유지가 안 되어 재시동 및 주행 중 변속 충격이 발생하거나 주행이 제한될 수 있습니다."
  },
  {
    question: "하이브리드 차량의 유성 기어 세트를 진단할 때, 모터와 엔진의 회전수가 비정상적으로 동기화되는 현상은 무엇을 의미할 수 있습니까?",
    options: ["정상적인 작동", "유성 기어 내부 부품의 물리적 손상", "고전압 배터리의 충전 상태 과대", "타이어의 수명 연장"],
    answer: 1,
    explain: "유성 기어는 엔진과 모터/발전기의 회전수를 독립적으로 제어하여 동력을 분배합니다. 비정상적인 동기화는 내부 기어의 파손이나 슬립 등 물리적인 손상을 의미합니다."
  },
  {
    question: "하이브리드 차량의 블렌디드 브레이킹에서 회생 제동력이 마찰 제동력보다 우선적으로 사용되는 주된 이유는 무엇입니까?",
    options: ["브레이크액의 수명 연장", "환경 보호를 위한 에너지 회수 극대화", "브레이크 패드 교환 주기의 단축", "운전자의 페달 감각 개선"],
    answer: 1,
    explain: "블렌디드 브레이킹의 핵심은 운동 에너지를 전기로 회수하여 연료 효율을 높이는 데 있습니다. 따라서 회생 제동이 마찰 제동보다 우선적으로 적용됩니다."
  },
  {
    question: "하이브리드 차량에서 배터리 셀 모듈의 교체 정비 시, 절연 저항 측정을 해야 하는 주요 시점은 언제입니까?",
    options: ["브레이크 패드 교체 후", "냉각수 보충 후", "모듈 장착 후 고전압 커넥터 연결 전", "타이어 휠 밸런스 조정 후"],
    answer: 2,
    explain: "새 모듈 장착 후 커넥터를 연결하기 전에 절연 저항 측정을 하여 누설 전류 위험이 없는지 확인해야 안전합니다."
  },
  {
    question: "하이브리드 차량의 고전압 시스템에서 주황색 케이블 외에, 12V 저전압 배선에 주로 사용되는 색상은 무엇입니까?",
    options: ["빨간색, 검은색", "흰색, 보라색", "청록색, 노란색", "주황색, 파란색"],
    answer: 0,
    explain: "고전압은 주황색을 사용하며, 12V 저전압 배선은 일반 차량과 마찬가지로 빨간색(플러스)과 검은색(마이너스)을 주로 사용하여 구별합니다."
  },
  {
    question: "하이브리드 차량에서 IGBT의 고장 여부를 진단할 때, 진단 장비로 주로 확인해야 하는 전기적 특성은 무엇입니까?",
    options: ["압축 압력", "개별 IGBT의 온도 및 구동 신호 파형", "냉각수 압력", "브레이크액 끓는점"],
    answer: 1,
    explain: "IGBT는 PCU 내부의 전력 반도체이므로, 진단 장비를 통해 작동 온도와 게이트 신호의 파형 등을 확인하여 정상 작동 여부를 판단합니다."
  },
  {
    question: "하이브리드 차량의 고전압 AC 컴프레서의 정비 시, 가장 중요한 안전 조치는 무엇입니까?",
    options: ["에어컨 필터 교체", "냉매 회수 및 고전압 차단 후 작업", "타이어 공기압 조정", "와이퍼 블레이드 교체"],
    answer: 1,
    explain: "고전압 AC 컴프레서는 고전압으로 구동되므로, 작업 전 고전압을 반드시 차단해야 하며, 냉매 라인을 분리하기 전에는 냉매를 회수해야 합니다."
  },
  {
    question: "하이브리드 차량에서 고전압 배터리의 충전 상태 SOC를 표준화된 범위 (예: 40% ~ 60%) 내로 유지하는 주된 이유는 무엇입니까?",
    options: ["배터리 셀의 온도 상승 방지", "언제든지 충전 또는 방전을 가능하게 하여 동력 효율을 극대화", "운전자의 습관을 교정하기 위해", "12V 보조 배터리의 충전 상태 유지"],
    answer: 1,
    explain: "배터리를 중간 범위에서 관리해야 회생 제동 시 충전할 여유 공간을 확보하고, 급가속 시 모터에 방전할 충분한 용량을 유지하여 시스템 효율을 최대화할 수 있습니다."
  },
  {
    question: "하이브리드 차량에서 고전압 시스템의 접지 저항을 측정하는 주된 목적은 무엇입니까?",
    options: ["엔진의 연소 효율 측정", "감전 위험으로부터 차량 및 탑승자를 보호", "변속기의 유압 압력 측정", "브레이크 디스크의 마모도 측정"],
    answer: 1,
    explain: "고전압 시스템의 접지 저항 측정은 누설 전류가 차체로 흐를 때 안전하게 접지되어 감전 사고를 예방하는지 확인하기 위함입니다."
  },
  {
    question: "하이브리드 차량의 ISG 작동 중, 운전자가 안전을 위해 취해서는 안 될 행동은 무엇입니까?",
    options: ["브레이크 페달을 밟고 있기", "기어를 P단으로 바꾸기", "운전석 문을 열고 차량에서 이탈하기", "비상등 켜기"],
    answer: 2,
    explain: "ISG 상태에서도 차량은 언제든 재시동 될 수 있으므로, 운전석 문을 열고 차량에서 이탈하는 것은 안전사고를 유발할 수 있어 매우 위험합니다."
  },
  {
    question: "하이브리드 차량의 BMS가 고장 났을 때, 가장 먼저 발생하는 현상은 무엇입니까?",
    options: ["차량 외관 손상", "고전압 시스템의 작동 중단 및 경고등 점등", "타이어 공기압 급격한 감소", "에어컨 컴프레서 고장"],
    answer: 1,
    explain: "BMS는 고전압 시스템 전체를 관리하고 제어하는 두뇌이므로, BMS 고장 시 고전압 시스템 전체가 작동을 중단하고 차량이 안전 보호 모드로 진입합니다."
  }
];

// 문제/보기 랜덤 섞기
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }
  
  // ✅ 문제 순서 랜덤 + 60문제 제한
  let questions = shuffleArray([...industry010903]).slice(0, 60);
  
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
    status.innerHTML = `<span id="scoreDisplay">하이브리드자동차 특화시스템정비 3회차 총점: ${score}/${questions.length}</span>`;
  
    // 제출 버튼 제거
    document.getElementById("submitBtn").style.display = "none";
  
    // 결과창 표시
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<h2>하이브리드자동차 특화시스템정비 3회차 총점: ${score}/${questions.length}</h2>`;
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