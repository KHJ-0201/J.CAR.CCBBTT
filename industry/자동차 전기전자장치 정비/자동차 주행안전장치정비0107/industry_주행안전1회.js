// -----------------------------
// 문제 배열
export const industry010701 = [
    {    
    question: "브레이크 페달을 밟았을 때 발생하는 현상 중, 페달을 떼어도 브레이크등이 계속 켜져 있는 현상의 가장 흔한 원인은 무엇입니까?",
    options: ["휠 속도 센서 고장", "브레이크액 누유", "브레이크 디스크의 과열", "브레이크 페달 스위치의 고착 또는 조정 불량"],
    answer: 3,
    explain: "브레이크등은 브레이크 페달 스위치의 접점에 의해 ON/OFF 되므로, 스위치가 고착되어 'ON' 상태를 유지하거나 조정 불량으로 항상 닫혀 있으면 등이 계속 켜져 있습니다."
  },
  {
    question: "ABS 작동 시 브레이크 페달에 발생하는 현상으로 가장 올바른 것은 무엇입니까?",
    options: ["페달이 단단해지며 움직이지 않는다.", "페달의 유격이 갑자기 커진다.", "페달에서 짧고 강한 진동이 느껴진다.", "페달이 끝까지 쑥 들어간다."],
    answer: 2,
    explain: "ABS가 작동하면 유압 조절을 위해 솔레노이드 밸브가 빠르게 열리고 닫히면서 운전자에게 짧고 강한 진동 즉 맥동 현상이 브레이크 페달로 전달됩니다."
  },
  {
    question: "전자식 자세 제어 장치 (ESC 또는 ESP)의 주요 기능이 아닌 것은 무엇입니까?",
    options: ["급격한 코너링 시 차체 자세 안정화", "미끄러운 노면에서 구동력 제어", "제동 시 바퀴 잠김 방지", "엔진 출력의 직접적인 향상"],
    answer: 3,
    explain: "ESC는 차량의 미끄러짐을 방지하고 자세를 제어하는 장치로, 엔진 출력 향상은 직접적인 주요 기능이 아닙니다. 제동 시 바퀴 잠김 방지는 ABS의 주요 기능입니다."
  },
  {
    question: "브레이크 마스터 실린더 점검 시 가장 중요하게 확인해야 할 사항은 무엇입니까?",
    options: ["캘리퍼 피스톤의 마모 상태", "브레이크액의 양과 오염도", "브레이크 라이닝의 두께", "휠 실린더의 작동 압력"],
    answer: 1,
    explain: "마스터 실린더는 브레이크액 저장 탱크를 가지고 있어 브레이크액의 양과 오염도를 주기적으로 점검해야 합니다. 브레이크액 부족은 제동 불량의 직접적인 원인이 될 수 있습니다."
  },
  {
    question: "브레이크 경고등이 점등되는 일반적인 원인이 아닌 것은 무엇입니까?",
    options: ["주차 브레이크 작동", "브레이크액 부족", "브레이크 패드의 과도한 마모", "파워 스티어링 펌프 고장"],
    answer: 3,
    explain: "브레이크 경고등은 주로 주차 브레이크 작동, 브레이크액 부족, 제동 계통의 유압 저하 시 점등되며, 파워 스티어링 펌프 고장과는 직접적인 관련이 없습니다."
  },
  {
    question: "자동차가 급제동할 때 뒷바퀴가 앞바퀴보다 먼저 잠기는 것을 방지하는 장치는 무엇입니까?",
    options: ["ABS", "TCS", "로드 센싱 프로포셔닝 밸브 LSPV", "EBD"],
    answer: 2,
    explain: "로드 센싱 프로포셔닝 밸브는 차량의 적재 상태에 따라 뒷바퀴의 제동력을 조절하여 뒷바퀴 잠김을 방지합니다. ABS나 EBD는 모든 바퀴의 잠김을 방지합니다."
  },
  {
    question: "브레이크 성능 저하의 한 원인인 베이퍼 록 현상 Vapor Lock이 발생하는 주요 원인은 무엇입니까?",
    options: ["브레이크 디스크의 변형", "브레이크액 내 수분 함량 증가", "브레이크 페달의 과도한 유격", "브레이크 호스의 손상"],
    answer: 1,
    explain: "베이퍼 록은 브레이크액 내의 수분 함량이 증가하여 제동 시 발생하는 열에 의해 브레이크액이 기화되어 기포가 형성되는 현상입니다. 이는 브레이크 압력 전달을 방해하여 제동 불량을 초래합니다."
  },
  {
    question: "브레이크가 완전히 해제되지 않고 끌리는 드래그 Drag 현상의 원인이 아닌 것은 무엇입니까?",
    options: ["주차 브레이크 케이블의 고착", "브레이크 페달 자유 간극 과대", "브레이크 부스터의 고장", "리턴 스프링의 장력 약화"],
    answer: 1,
    explain: "브레이크 페달의 자유 간극이 과대하면 브레이크가 작동하기 위한 페달의 이동량이 많아져 제동이 늦어지거나 불완전해질 수 있으나, 브레이크가 끌리는 현상과는 직접적인 관련이 적습니다. 끌림 현상은 주로 복원력 부족이나 유압 잔류 압력 때문입니다."
  },
  {
    question: "구동력 제어 시스템 Traction Control System, TCS의 주요 작동 목표는 무엇입니까?",
    options: ["제동 시 조향 안정성 확보", "운전자의 피로도 감소", "급가속 시 구동 바퀴의 미끄러짐 방지", "차량 속도에 따른 자동 변속 제어"],
    answer: 2,
    explain: "TCS는 엔진 토크나 브레이크를 제어하여 구동 바퀴의 과도한 미끄러짐 슬립을 방지함으로써 차량의 안정적인 출발 및 가속을 돕습니다."
  },
  {
    question: "ABS 장치에서 휠 속도 센서가 주로 측정하는 것은 무엇입니까?",
    options: ["브레이크액의 압력", "휠의 회전 속도", "브레이크 페달의 밟는 힘", "차량의 조향 각도"],
    answer: 1,
    explain: "휠 속도 센서는 각 바퀴의 회전 속도를 측정하여 제동 시 바퀴의 잠김 여부를 판단하고 ABS ECU로 정보를 전달합니다."
  },
  {
    question: "브레이크 디스크 로터의 점검 항목이 아닌 것은 무엇입니까?",
    options: ["두께 편차", "런아웃 비틀림", "균열 및 손상 여부", "라이닝 잔량"],
    answer: 3,
    explain: "라이닝 잔량은 브레이크 슈 또는 브레이크 패드의 점검 항목입니다. 디스크 로터는 두께 편차, 런아웃, 균열 등을 점검합니다."
  },
  {
    question: "유압식 브레이크 시스템에서 유압을 생성하고 전달하는 핵심 부품은 무엇입니까?",
    options: ["브레이크 캘리퍼", "마스터 실린더", "휠 실린더", "프로포셔닝 밸브"],
    answer: 1,
    explain: "마스터 실린더는 운전자의 페달 조작력을 유압으로 변환하여 각 휠 실린더 또는 캘리퍼로 전달하는 역할을 합니다."
  },
  {
    question: "차량의 제동 시 한쪽으로 쏠리는 스퀼 현상의 일반적인 원인이 아닌 것은 무엇입니까?",
    options: ["한쪽 캘리퍼 피스톤의 고착", "좌우 브레이크 패드의 마찰계수 차이", "타이어 공기압의 불균형", "브레이크액의 오염"],
    answer: 3,
    explain: "브레이크액의 오염은 베이퍼 록이나 부식의 원인이 될 수 있지만, 제동 시 좌우 쏠림 현상과는 직접적인 관련이 적습니다. 쏠림은 좌우 제동력의 불균형 때문에 발생합니다."
  },
  {
    question: "EPB Electronic Parking Brake, 전자식 주차 브레이크 시스템의 장점이 아닌 것은 무엇입니까?",
    options: ["운전 편의성 증대", "실내 공간 확보에 유리", "전자 제어 시스템과의 연동 용이", "기계식 브레이크보다 빠른 제동 응답 속도"],
    answer: 3,
    explain: "EPB는 기계식에 비해 운전 편의성과 실내 공간 활용에 장점이 있으나, 제동 응답 속도는 기계식과 비교하여 크게 빠르다고 보기는 어렵습니다. EPB는 주로 편의 기능 및 안정성 향상에 중점을 둡니다."
  },
  {
    question: "힐 어시스트 컨트롤 Hill Assist Control, HAC 장치의 주된 기능은 무엇입니까?",
    options: ["고속 주행 시 조향 안정성 증대", "내리막길에서 일정 속도 유지", "언덕길 출발 시 뒤로 밀림 방지", "급제동 시 제동 거리 단축"],
    answer: 2,
    explain: "HAC는 운전자가 언덕길에서 브레이크 페달을 떼고 가속 페달을 밟기 전까지 일정 시간 동안 브레이크 압력을 유지하여 차량이 뒤로 밀리는 것을 방지해줍니다."
  },
  {
    question: "브레이크 부스터 Booster의 역할로 가장 올바른 것은 무엇입니까?",
    options: ["브레이크액의 잔류 압력 유지", "브레이크 작동 유압의 급격한 상승 방지", "운전자의 페달 밟는 힘을 증대", "제동 시 열 방출 촉진"],
    answer: 2,
    explain: "브레이크 부스터는 엔진의 흡기 매니폴드 진공 또는 전동 펌프의 압력을 이용하여 운전자가 브레이크 페달을 밟는 힘을 증폭시켜 제동력을 높이는 역할을 합니다."
  },
  {
    question: "타이어 공기압 감지 시스템 Tire Pressure Monitoring System, TPMS의 주요 경고 기준은 무엇입니까?",
    options: ["타이어의 제조일자 경과", "타이어의 트레드 깊이 감소", "설정된 기준치 이하의 타이어 공기압", "타이어의 종류 불일치"],
    answer: 2,
    explain: "TPMS는 타이어의 공기압이 설정된 기준치 이하로 떨어지거나 급격히 변화할 경우 운전자에게 경고하는 시스템입니다."
  },
  {
    question: "EBD Electronic Brake-force Distribution, 전자식 제동력 분배 시스템의 역할은 무엇입니까?",
    options: ["급제동 시 브레이크 페달 진동 발생", "차량의 주행 속도 자동 조절", "각 바퀴에 적절한 제동력 분배", "운전자가 설정한 속도 유지"],
    answer: 2,
    explain: "EBD는 차량의 하중 변화나 노면 상태에 따라 각 바퀴에 적절한 제동력을 독립적으로 분배하여 제동 효율과 안정성을 높이는 장치입니다."
  },
  {
    question: "브레이크 페달을 밟았을 때 '끼익'하는 소음이 발생하는 가장 일반적인 원인은 무엇입니까?",
    options: ["마스터 실린더 내부 누설", "브레이크 라인의 막힘", "브레이크 패드의 마모 한계 도달", "휠 속도 센서의 간극 불량"],
    answer: 2,
    explain: "브레이크 패드가 마모 한계에 도달하면 패드에 내장된 마모 경고판이 디스크에 닿아 '끼익'하는 소음을 발생시켜 운전자에게 교체를 알립니다."
  },
  {
    question: "차선 이탈 경고 시스템 Lane Departure Warning, LDW의 주요 감지 센서는 무엇입니까?",
    options: ["초음파 센서", "전방 카메라", "레이더 센서", "자이로 센서"],
    answer: 1,
    explain: "LDW는 주로 차량 앞유리 상단에 위치한 전방 카메라를 이용하여 차선을 인식하고 운전자가 의도치 않게 차선을 벗어날 경우 경고를 제공합니다."
  },
  {
    question: "차량의 직진 주행 안정성에 가장 큰 영향을 미치는 요소는 무엇입니까?",
    options: ["타이어의 트레드 패턴", "휠 얼라인먼트", "배터리 충전 상태", "에어컨 작동 상태"],
    answer: 1,
    explain: "휠 얼라인먼트는 차량의 바퀴 정렬 상태를 의미하며, 직진 주행 안정성, 타이어 마모, 조향 성능 등에 결정적인 영향을 미칩니다."
  },
  {
    question: "ABS 하이드로릭 유닛 Hydraulic Unit의 주요 구성 요소가 아닌 것은 무엇입니까?",
    options: ["펌프 모터", "솔레노이드 밸브", "휠 속도 센서", "어큐뮬레이터"],
    answer: 2,
    explain: "휠 속도 센서는 바퀴에 장착되어 속도를 측정하고, 하이드로릭 유닛은 펌프 모터, 솔레노이드 밸브, 어큐뮬레이터 등으로 구성되어 유압을 조절합니다."
  },
  {
    question: "브레이크 시스템에서 에어 빼기 블리딩 작업이 필요한 가장 큰 이유는 무엇입니까?",
    options: ["브레이크액의 점도 유지", "마스터 실린더의 작동 압력 조절", "브레이크 라인 내부의 공기 제거", "브레이크 패드의 빠른 복원"],
    answer: 2,
    explain: "브레이크 라인 내부에 공기가 유입되면 페달을 밟아도 유압이 공기의 압축으로 인해 제대로 전달되지 않아 제동력이 저하되므로, 공기를 제거하는 블리딩 작업이 필수적입니다."
  },
  {
    question: "브레이크 디스크 로터가 과열되었을 때 발생하는 일반적인 현상은 무엇입니까?",
    options: ["디스크의 변형 및 균열 발생 가능성 증가", "브레이크액의 점도 급격한 증가", "휠 속도 센서의 오작동", "브레이크 페달의 과도한 유격 증가"],
    answer: 0,
    explain: "브레이크 디스크가 과열되면 재질의 물리적 변화로 인해 변형이나 균열이 발생할 가능성이 높아집니다. 이는 심각한 제동 불량을 초래할 수 있습니다."
  },
  {
    question: "브레이크액 DOT3와 DOT4의 주요 차이점은 무엇입니까?",
    options: ["오일의 색상 차이", "주요 성분의 차이", "끓는점의 차이", "점도 지수의 차이"],
    answer: 2,
    explain: "DOT3와 DOT4는 주로 건조 끓는점과 습윤 끓는점의 차이가 있으며, DOT4가 더 높은 끓는점을 가지고 있어 고온에서 베이퍼 록 발생 위험이 적습니다."
  },
  {
    question: "긴 내리막길에서 풋 브레이크만 계속 사용하여 제동력을 잃는 현상을 무엇이라고 합니까?",
    options: ["베이퍼 록", "페이드 현상 Fade", "하이드로 플래닝", "스티어링 댐핑"],
    answer: 1,
    explain: "페이드 현상은 반복적인 제동으로 인해 브레이크 드럼이나 디스크, 패드가 과열되어 마찰 계수가 급격히 낮아져 제동력이 약해지는 현상입니다."
  },
  {
    question: "차선 유지 보조 시스템 Lane Keeping Assist System, LKAS의 주된 기능은 무엇입니까?",
    options: ["앞차와의 간격 자동 유지", "운전자의 조향 없이 차선 중앙 주행 보조", "사각지대 차량 감지 및 경고", "교차로 진입 시 속도 자동 조절"],
    answer: 1,
    explain: "LKAS는 차선을 인식하여 차량이 차선을 벗어나지 않도록 운전자의 조향을 보조하거나 직접 조향하여 차선 중앙을 유지하도록 돕는 시스템입니다."
  },
  {
    question: "ABS ECU의 주요 역할은 무엇입니까?",
    options: ["엔진의 연료 분사량 제어", "에어컨 시스템의 작동 제어", "휠 속도 센서 신호를 기반으로 유압 제어", "차량의 변속 시점 자동 결정"],
    answer: 2,
    explain: "ABS ECU는 휠 속도 센서로부터 신호를 받아 각 바퀴의 잠김을 판단하고, 하이드로릭 유닛의 밸브와 펌프를 제어하여 최적의 제동력을 유지하도록 합니다."
  },
  {
    question: "브레이크 패드 교환 시, 캘리퍼 피스톤을 밀어 넣는 데 사용하는 전용 공구의 이름은 무엇입니까?",
    options: ["토크 렌치", "브레이크 피스톤 리와인드 툴", "캘리퍼 슬라이드 핀", "블리딩 렌치"],
    answer: 1,
    explain: "브레이크 피스톤 리와인드 툴은 디스크 브레이크의 패드 교환 시 캘리퍼 피스톤을 제자리에 밀어 넣거나 돌려 넣는 데 사용되는 전용 공구입니다."
  },
  {
    question: "자동차의 서스펜션 시스템에서 스프링이 하는 주된 역할은 무엇입니까?",
    options: ["차체의 진동을 빠르게 감쇠", "차량의 높이를 일정하게 유지", "노면의 충격을 흡수 및 저장", "바퀴의 수직 운동을 제한"],
    answer: 2,
    explain: "스프링은 노면으로부터 오는 충격을 흡수하여 에너지를 저장한 후, 서서히 방출하여 충격을 완화하는 역할을 합니다. 진동 감쇠는 쇽업쇼바의 역할입니다."
  },
  {
    question: "쇽업쇼바 Shock Absorber의 역할로 가장 올바른 것은 무엇입니까?",
    options: ["차량 무게를 지지", "노면 충격을 흡수", "스프링의 진동을 빠르게 감쇠", "바퀴의 회전 속도 감지"],
    answer: 2,
    explain: "쇽업쇼바는 스프링이 흡수한 충격 에너지를 열 에너지로 변환하여 스프링의 불필요한 진동을 빠르게 억제 감쇠시켜 승차감과 주행 안정성을 향상시킵니다."
  },
  {
    question: "차량의 조향 장치에서 토우 Toe 값에 대한 설명으로 옳은 것은 무엇입니까?",
    options: ["바퀴의 기울어진 정도", "차량을 앞에서 볼 때 바퀴의 벌어진 정도", "차량을 위에서 볼 때 바퀴의 앞뒤 간격 차이", "조향 축의 기울기"],
    answer: 2,
    explain: "토우는 차량을 위에서 내려다봤을 때, 좌우 바퀴 앞쪽 끝과 뒤쪽 끝의 간격 차이를 의미합니다. 토우 인 Toe-in 또는 토우 아웃 Toe-out으로 표현됩니다."
  },
  {
    question: "차량 정비 시 휠 너트를 체결하는 올바른 방법은 무엇입니까?",
    options: ["시계 방향으로 순서대로 체결", "대각선 방향으로 번갈아 가며 규정 토크로 체결", "반시계 방향으로 순서대로 체결", "앞뒤 바퀴를 동시에 체결"],
    answer: 1,
    explain: "휠 너트는 대각선 방향으로 번갈아 가며 규정 토크로 체결해야 휠이 허브에 균일하게 밀착되어 휠의 변형이나 풀림을 방지할 수 있습니다."
  },
  {
    question: "타이어 마모 한계선을 점검하는 가장 중요한 이유는 무엇입니까?",
    options: ["차량의 외관 유지", "타이어 교체 주기의 정확한 파악", "젖은 노면에서의 제동력 확보", "휠의 손상 방지"],
    answer: 2,
    explain: "타이어 트레드가 마모 한계선 이하로 닳게 되면 특히 젖은 노면에서 배수 능력이 저하되어 수막 현상 하이드로 플래닝이 발생하기 쉬워 제동력과 조향 안정성이 크게 떨어집니다."
  },
  {
    question: "AEB Autonomous Emergency Braking, 자동 긴급 제동 시스템의 주요 작동 조건은 무엇입니까?",
    options: ["운전자가 브레이크 페달을 밟지 않았을 때", "차량이 코너를 급격하게 돌 때", "타이어 공기압이 낮을 때", "엔진 온도가 너무 높을 때"],
    answer: 0,
    explain: "AEB는 전방 충돌 위험 상황에서 운전자가 제동 조치를 취하지 않거나 불충분할 경우, 시스템이 스스로 브레이크를 작동시켜 충돌을 회피하거나 피해를 경감하는 시스템입니다."
  },
  {
    question: "R-MDPS Rack-Type Motor Driven Power Steering 시스템에서 모터가 장착되는 위치는 어디입니까?",
    options: ["스티어링 휠 내부", "스티어링 컬럼 상단", "랙 기어 박스 주변", "조향 오일 펌프 근처"],
    answer: 2,
    explain: "R-MDPS는 모터가 랙 기어 박스 주변에 장착되어 랙을 직접 구동하는 방식으로, 조향 응답성이 좋고 효율이 높습니다."
  },
  {
    question: "전자식 자세 제어 장치 ESC의 센서 중, 차량의 회전 운동을 감지하는 센서는 무엇입니까?",
    options: ["휠 속도 센서", "조향각 센서", "요 레이트 센서 Yaw Rate Sensor", "브레이크 압력 센서"],
    answer: 2,
    explain: "요 레이트 센서는 차량이 수직 축을 중심으로 회전하는 정도, 즉 선회 속도를 측정하여 차량의 미끄러짐 정도를 판단하는 ESC의 핵심 센서입니다."
  },
  {
    question: "ADAS Advanced Driver Assistance Systems의 한 종류인 SCC Smart Cruise Control의 주요 기능은 무엇입니까?",
    options: ["차량 속도에 따른 기어 자동 변경", "운전자의 피로도 감지 및 경고", "앞차와의 간격 및 설정 속도를 자동 유지", "후방 장애물 감지 및 경고"],
    answer: 2,
    explain: "SCC는 운전자가 설정한 속도를 유지하는 일반 크루즈 컨트롤 기능에 더해, 레이더 등을 이용해 앞차와의 간격을 자동으로 측정하고 조절하며 주행하는 시스템입니다."
  },
  {
    question: "브레이크 유압이 한쪽으로만 형성되는 현상의 가장 흔한 원인은 무엇입니까?",
    options: ["브레이크액 저장 탱크의 오염", "마스터 실린더 내부 씰의 손상", "브레이크 디스크의 과도한 마모", "브레이크 패드의 재질 불일치"],
    answer: 1,
    explain: "마스터 실린더 내부의 씰 손상은 유압 회로 간의 압력 차이를 유발하여 한쪽 회로에만 압력이 형성되거나, 아예 압력이 형성되지 않는 제동 불량의 직접적인 원인이 될 수 있습니다."
  },
  {
    question: "브레이크 라이닝과 브레이크 패드의 주요 차이점은 무엇입니까?",
    options: ["사용되는 차량의 종류", "마찰력의 크기", "주로 사용되는 브레이크 형태", "내열성의 차이"],
    answer: 2,
    explain: "브레이크 라이닝은 드럼 브레이크에 사용되며, 브레이크 패드는 디스크 브레이크에 사용되는 마찰재입니다."
  }
];

// 문제/보기 랜덤 섞기
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }
  
  // ✅ 문제 순서 랜덤 + 60문제 제한
  let questions = shuffleArray([...industry010701]).slice(0, 60);
  
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
    status.innerHTML = `<span id="scoreDisplay">자동차주행안전장치정비 1회차 총점: ${score}/${questions.length}</span>`;
  
    // 제출 버튼 제거
    document.getElementById("submitBtn").style.display = "none";
  
    // 결과창 표시
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<h2>자동차주행안전장치정비 1회차 총점: ${score}/${questions.length}</h2>`;
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