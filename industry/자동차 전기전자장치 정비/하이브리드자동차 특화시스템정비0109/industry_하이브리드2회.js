// -----------------------------
// 문제 배열
export const industry010902 = [
    {    
    question: "고전압 시스템의 정비 안전을 위해 서비스 플러그를 분리한 후, 반드시 5분 이상 대기해야 하는 주된 이유는 무엇입니까?",
    options: ["냉각수 온도를 충분히 낮추기 위해", "구동 모터의 회전을 완전히 멈추기 위해", "인버터 내 커패시터의 잔류 고전압을 방전시키기 위해", "12V 보조 배터리의 전원을 완전히 소모시키기 위해"],
    answer: 2,
    explain: "서비스 플러그를 분리하더라도 인버터 내부의 커패시터에는 잔류 고전압이 남아있습니다. 충분한 시간을 대기하여 이 잔류 전압이 방전되는 것을 확인해야 안전합니다."
  },
  {
    question: "하이브리드 차량에서 구동 모터로 가장 흔하게 사용되는 모터 타입은 무엇입니까?",
    options: ["직류 직권 모터", "영구 자석 동기 모터 (PMSM)", "유도 전동기", "스테핑 모터"],
    answer: 1,
    explain: "하이브리드 차량은 효율과 출력 밀도가 높은 영구 자석 동기 모터 (PMSM)를 주 구동 모터로 가장 많이 채택하고 있습니다."
  },
  {
    question: "하이브리드 시스템에서 절연 저항 측정 시 최소 허용 기준치 (일반적으로)는 얼마입니까?",
    options: ["1.0 Ω 이상", "10 kΩ 이상", "0.5 MΩ 이상", "100 MΩ 이상"],
    answer: 2,
    explain: "차체와 고전압 회로 사이의 절연 상태를 점검할 때, 일반적으로 0.5 MΩ (메가옴) 이상이 정상적인 절연 상태의 최소 허용 기준입니다."
  },
  {
    question: "BMS가 고전압 배터리의 SOH State of Health를 판단할 때 주로 참고하는 요소는 무엇입니까?",
    options: ["타이어 트레드 깊이", "주행 중 브레이크 페달 밟는 횟수", "배터리의 충/방전 누적 횟수 및 내부 저항 변화", "엔진 오일 교환 주기"],
    answer: 2,
    explain: "SOH는 배터리의 수명 및 성능 상태를 나타내며, 초기 용량 대비 현재 최대 충전 용량, 내부 저항의 증가 등을 종합적으로 분석하여 판단합니다."
  },
  {
    question: "하이브리드 차량에서 구동 모터의 회전 속도와 위치를 PCU에 피드백하는 센서는 무엇입니까?",
    options: ["산소 센서", "레졸버 (Resolver)", "맵 센서", "요 레이트 센서"],
    answer: 1,
    explain: "레졸버는 모터의 회전축에 장착되어 모터의 정확한 회전 각도와 속도 정보를 측정하여 인버터 제어에 사용됩니다."
  },
  {
    question: "하이브리드 차량의 고전압 배터리가 과충전되면 발생할 수 있는 가장 심각한 위험은 무엇입니까?",
    options: ["12V 보조 배터리 방전", "타이어 공기압 감소", "배터리 수명 단축 및 화재/폭발 위험", "냉각 시스템의 효율 증가"],
    answer: 2,
    explain: "리튬이온 배터리는 과충전될 경우 셀 내부 구조가 파괴되고 열 폭주가 발생하여 화재나 폭발로 이어질 수 있습니다."
  },
  {
    question: "병렬형 하이브리드 Parallel Hybrid System에서 모터의 주된 역할이 아닌 것은 무엇입니까?",
    options: ["엔진 시동", "엔진 구동 보조", "회생 제동", "유압 브레이크 시스템 작동"],
    answer: 3,
    explain: "모터는 동력 보조, 발전, 시동, 회생 제동을 담당합니다. 유압 브레이크 시스템은 별도의 EHB (Electro-Hydraulic Brake)나 기존 유압 시스템에 의해 작동됩니다."
  },
  {
    question: "하이브리드 차량의 고전압 배터리 팩 내부에서 누설 전류가 발생하는 원인이 될 수 있는 것은 무엇입니까?",
    options: ["엔진 오일 과다 주입", "고전압 배선의 피복 손상 또는 습기 유입", "타이어 편마모", "와이퍼 모터 고장"],
    answer: 1,
    explain: "고전압 배선의 절연 피복이 손상되거나 팩 내부에 습기가 유입되면, 고전압이 차체(접지)로 누설되어 절연 저항 저하 및 감전 위험이 발생합니다."
  },
  {
    question: "HEV의 EHB Electro-Hydraulic Brake 시스템이 회생 제동과 마찰 제동을 협조 제어하기 위해 주로 사용하는 센서는 무엇입니까?",
    options: ["브레이크 페달 스트로크/압력 센서", "연료 잔량 센서", "실내 습도 센서", "엔진 오일 압력 센서"],
    answer: 0,
    explain: "EHB는 운전자가 브레이크 페달을 밟는 깊이 (스트로크) 또는 압력을 센서로 측정하여, 운전자의 제동 의도를 파악하고 회생 제동량과 마찰 제동량을 배분합니다."
  },
  {
    question: "하이브리드 차량의 PCU를 냉각하는 냉각수가 일반 엔진 냉각수와 별도로 관리되어야 하는 주된 이유는 무엇입니까?",
    options: ["냉각수 가격을 절감하기 위해", "PCU 작동 온도가 일반 엔진보다 낮게 유지되어야 하기 때문에", "두 시스템의 냉각수 압력이 다르기 때문에", "냉각수 보충 주기가 다르기 때문에"],
    answer: 1,
    explain: "PCU와 구동 모터는 고열 발생 시 성능 저하 및 고장의 위험이 있어, 일반 엔진보다 낮은 최적 작동 온도를 유지하도록 별도의 저온 냉각 시스템으로 관리됩니다."
  },
  {
    question: "하이브리드 차량 진단 시, DTC Diagnostic Trouble Code가 '고전압 배터리 전압 편차 과대'를 나타낸다면 가장 먼저 의심해야 할 것은 무엇입니까?",
    options: ["구동 모터의 단선", "BMS의 셀 밸런싱 불량 또는 셀 고장", "타이어의 공기압 불균형", "브레이크 패드의 마모 한계 도달"],
    answer: 1,
    explain: "전압 편차 과대는 배터리 팩 내부의 셀 간 전압 차이가 크다는 의미로, BMS의 밸런싱 기능 불량이나 특정 셀의 수명 저하/고장을 나타냅니다."
  },
  {
    question: "하이브리드 차량의 PHEV가 일반 HEV보다 EV 주행 가능 거리가 긴 주된 이유는 무엇입니까?",
    options: ["엔진 출력이 더 높아서", "경량 소재를 더 많이 사용하여", "고전압 배터리 용량이 더 크고 외부 충전이 가능하여", "휠 크기가 더 작아서"],
    answer: 2,
    explain: "PHEV는 더 큰 용량의 고전압 배터리를 장착하며 외부 충전이 가능하여, HEV보다 순수 EV 모드로 주행할 수 있는 거리가 훨씬 깁니다."
  },
  {
    question: "하이브리드 시스템에서 컨버터 Converter의 주된 역할은 무엇입니까?",
    options: ["고전압 AC를 저전압 DC로 변환", "고전압 DC를 AC로 변환", "고전압 DC를 더 높은/낮은 DC로 변환 (승압/강압)", "엔진의 연료 분사량 제어"],
    answer: 2,
    explain: "컨버터는 DC-DC 변환을 담당하며, 주로 고전압 배터리의 전압을 구동 모터에 필요한 전압으로 승압하거나 회생 제동된 전압을 강압하여 배터리 충전에 사용합니다."
  },
  {
    question: "하이브리드 차량의 ISG 기능이 작동 중 엔진이 다시 시동되어야 하는 안전 관련 조건은 무엇입니까?",
    options: ["운전자가 에어컨을 끄는 경우", "차량 내부 온도가 설정치보다 낮아진 경우", "브레이크 유압 압력이 설정치 이하로 떨어진 경우", "차량 내부 조명이 꺼진 경우"],
    answer: 2,
    explain: "ISG 상태에서 브레이크 유압이 낮아지면 안전한 제동력을 확보하기 위해 엔진을 재시동하여 유압 펌프 또는 진공 부스터를 작동시켜야 합니다."
  },
  {
    question: "하이브리드 차량의 구동 모터가 발전기로 작동하는 상황은 언제입니까?",
    options: ["급가속 시", "엔진의 시동 시", "회생 제동 또는 배터리 충전 시", "냉각수 펌프 작동 시"],
    answer: 2,
    explain: "구동 모터는 제동 시 회생 제동을 통해 바퀴의 운동 에너지를 전기 에너지로 바꾸거나, 엔진의 동력을 받아 발전기로 작동하여 배터리를 충전할 때 발전 모드로 작동합니다."
  },
  {
    question: "BMS가 배터리의 고온 상태를 감지했을 때 취하는 주요 제어 조치는 무엇입니까?",
    options: ["엔진 출력을 최대로 높임", "모터의 구동 토크를 증가시킴", "충전 및 방전 출력을 제한하고 냉각 시스템을 최대 작동시킴", "12V 보조 배터리의 충전을 중단함"],
    answer: 2,
    explain: "배터리 고온은 셀 손상 및 화재 위험을 증가시키므로, BMS는 배터리 보호를 위해 출력을 제한하고 냉각 시스템을 적극적으로 작동시킵니다."
  },
  {
    question: "하이브리드 차량의 전기식 오일 펌프를 사용하는 주된 목적은 무엇입니까?",
    options: ["엔진 오일의 점도 조절", "엔진 정지 시에도 변속기 등에 윤활 및 유압을 공급", "연료 효율의 급격한 감소", "브레이크액의 순환"],
    answer: 1,
    explain: "HEV는 엔진이 자주 정지하므로, 전기식 오일 펌프를 사용하여 엔진 정지 상태에서도 변속기 내부의 윤활 및 유압을 유지하여 부드러운 재시동 및 주행을 가능하게 합니다."
  },
  {
    question: "하이브리드 차량의 고전압 누설 진단 시, 절연 저항계를 사용하는 주된 이유는 무엇입니까?",
    options: ["시스템 내부의 미세 소음 측정", "고전압 배선의 물리적 손상 여부 확인", "고전압 회로와 차체 간의 저항을 측정하여 절연 상태 확인", "모터의 최대 출력 측정"],
    answer: 2,
    explain: "절연 저항계는 고전압을 인가하여 고전압 회로와 비충전부 (차체) 사이에 누설 전류가 발생하는지 (즉, 저항이 낮은지) 측정하여 절연 파괴 여부를 진단합니다."
  },
  {
    question: "하이브리드 시스템에서 배터리 셀의 활물질이 영구적으로 손상되는 주된 원인은 무엇입니까?",
    options: ["차량 내부 청소 불량", "적절한 온도 범위 밖에서의 장기간 사용 및 극심한 과충전/과방전", "타이어의 림 직경 불일치", "실내 조명 색상 변경"],
    answer: 1,
    explain: "리튬이온 배터리는 고온, 저온 환경 또는 과도한 충전/방전 시 셀 내부의 화학적 변화가 가속되어 활물질의 영구적인 손상이 발생하며 이는 수명 단축으로 이어집니다."
  },
  {
    question: "하이브리드 차량 정비 시, 고전압 시스템이 정상적으로 차단된 후에도 반드시 지켜야 하는 추가적인 안전 수칙은 무엇입니까?",
    options: ["차량 내부의 모든 전원을 켜기", "DC-Link 전압 0V 확인 및 주의 경고판 설치", "엔진 오일을 즉시 교환", "브레이크 페달을 반복적으로 밟기"],
    answer: 1,
    explain: "고전압 차단 확인 후에도 다른 정비사가 실수로 시스템을 재연결하는 것을 방지하고, 작업 중임을 알리기 위해 고전압 주의 경고판을 설치해야 합니다."
  },
  {
    question: "하이브리드 차량의 고전압 냉각수 펌프가 고장 났을 때 발생하는 일반적인 문제는 무엇입니까?",
    options: ["엔진의 냉각수 온도 상승", "PCU와 구동 모터의 과열 및 출력 제한", "12V 보조 배터리의 방전", "배기 가스 온도 상승"],
    answer: 1,
    explain: "PCU와 모터는 고전압 냉각수를 사용하여 열을 방출합니다. 펌프 고장 시 냉각이 제대로 이루어지지 않아 시스템 과열 및 보호 모드(출력 제한)가 작동됩니다."
  },
  {
    question: "하이브리드 차량에서 P0/P1 하이브리드 시스템의 주된 특징은 무엇입니까?",
    options: ["엔진과 변속기 사이에 구동 모터가 장착됨", "구동 모터가 엔진의 시동 및 발전만 보조", "오직 모터의 힘으로만 주행", "고전압 배터리가 트렁크에만 위치함"],
    answer: 1,
    explain: "P0/P1 방식은 모터가 엔진 벨트에 연결되거나 엔진 축에 직접 연결되어 시동 및 발전을 보조하는 마일드 하이브리드 형태에 주로 사용됩니다."
  },
  {
    question: "하이브리드 차량에서 PTC Positive Temperature Coefficient 히터를 사용하는 주된 이유는 무엇입니까?",
    options: ["주행 중 브레이크 패드를 예열", "엔진의 초기 시동 온도 보조", "엔진 정지 시에도 고전압 전기로 실내를 신속하게 난방", "고전압 배터리의 냉각을 담당"],
    answer: 2,
    explain: "PTC 히터는 고전압 전력을 이용하여 엔진 정지 상태에서도 작동하여 겨울철 실내 난방을 책임지는 핵심 부품입니다."
  },
  {
    question: "하이브리드 차량의 고전압 배터리 팩에서 열 관리 시스템이 수랭식 (액체 냉각)을 사용하는 주된 이점은 무엇입니까?",
    options: ["구조가 간단하여 제작 비용이 저렴함", "배터리 팩의 무게를 가볍게 함", "공랭식보다 더 정밀하고 균일한 온도 제어가 가능함", "냉각수 교환이 필요 없음"],
    answer: 2,
    explain: "수랭식은 공랭식보다 열 용량이 크고 열 전달 효율이 높아 배터리 셀 간의 온도 편차를 줄이고 정밀한 온도 제어를 통해 성능 및 수명 유지에 유리합니다."
  },
  {
    question: "하이브리드 차량에서 엔진이 시동될 때 발생하는 현상으로 가장 거리가 먼 것은 무엇입니까?",
    options: ["클러스터에 'Ready' 표시가 점등됨", "모터/발전기(HSG)가 엔진을 구동", "차체에 약간의 진동 및 소음 발생", "12V 보조 배터리가 방전됨"],
    answer: 3,
    explain: "엔진 시동 시에는 구동 모터나 HSG가 전력을 소모하여 엔진을 구동합니다. 이로 인해 12V 보조 배터리가 방전되는 것이 아니라, 고전압 시스템에서 12V 시스템으로 충전이 이루어집니다."
  },
  {
    question: "하이브리드 차량의 고전압 회로에 문제가 발생했을 때, 계기판에 점등되는 주요 경고등은 무엇입니까?",
    options: ["타이어 공기압 경고등", "엔진 오일 경고등", "하이브리드 시스템 마스터 경고등 (예: 주황색 삼각형)", "안전벨트 미착용 경고등"],
    answer: 2,
    explain: "고전압 시스템이나 동력 계통에 심각한 문제가 발생하면, 하이브리드 마스터 경고등이 점등되어 운전자에게 즉각적인 점검을 요구합니다."
  },
  {
    question: "하이브리드 차량의 PHEV에 사용되는 충전 규격 중 AC 완속 충전에 주로 사용되는 커넥터 규격은 무엇입니까?",
    options: ["CHAdeMO", "CCS Combo", "SAE J1772", "Tesla Supercharger"],
    answer: 2,
    explain: "북미 및 한국 등에서 AC 완속 충전에는 주로 SAE J1772 (5핀) 규격의 커넥터가 사용됩니다."
  },
  {
    question: "하이브리드 차량에서 구동 모터의 내부 절연체가 손상될 경우 발생할 수 있는 가장 큰 위험은 무엇입니까?",
    options: ["차량의 주행 속도 증가", "고전압 배선과 모터 케이스 간의 접지 단락 및 화재 위험", "타이어의 공기압 과다", "엔진의 연료 효율 증가"],
    answer: 1,
    explain: "모터 코일의 절연체 손상은 고전압이 외부 케이스 (차체)로 누설되는 접지 단락을 유발하여 감전 및 화재로 이어질 수 있습니다."
  },
  {
    question: "하이브리드 차량의 ISG 시스템에서 시동을 보조하는 스타터/제너레이터 (HSG)가 사용하는 전압은 주로 무엇입니까?",
    options: ["12V", "24V", "48V 또는 고전압", "5V"],
    answer: 2,
    explain: "ISG 기능은 엔진의 빠르고 부드러운 재시동을 위해 일반 12V 스타터 모터보다 강력한 48V 또는 고전압을 사용하는 HSG나 구동 모터를 활용합니다."
  },
  {
    question: "하이브리드 차량의 블렌디드 브레이킹 시스템에서 마찰 브레이크가 작동해야 하는 조건이 아닌 것은 무엇입니까?",
    options: ["운전자가 강한 제동을 요구할 때", "고전압 배터리가 완충되어 회생 제동량이 제한될 때", "차량이 미끄러운 노면에서 ABS가 작동할 때", "차량이 엔진 시동 없이 평지를 관성 주행할 때"],
    answer: 3,
    explain: "엔진 시동 없이 평지를 관성 주행(코스팅)할 때는 제동이 요구되지 않습니다. 마찰 브레이크는 회생 제동만으로 부족하거나 안전을 위해 유압 제동이 필수일 때 작동합니다."
  },
  {
    question: "하이브리드 차량의 BMS가 배터리 셀의 온도를 측정하는 주된 위치는 어디입니까?",
    options: ["차량 외부 루프", "엔진 오일 팬", "배터리 모듈 내부의 셀 주변", "머플러 근처"],
    answer: 2,
    explain: "배터리 성능과 안전은 셀 온도에 크게 의존하므로, BMS는 배터리 모듈 내부의 셀들 사이에 온도 센서를 배치하여 정확한 온도를 모니터링합니다."
  },
  {
    question: "하이브리드 시스템에서 절연 저항 측정 시 고전압 케이블을 접지시키지 않고 띄워 놓는 (Floating) 주된 이유는 무엇입니까?",
    options: ["측정 정확도를 높이기 위해", "절연 저항계의 오작동 방지", "배선이 차체에 닿아 절연 파괴된 상태에서도 측정 가능", "운전자가 차량을 이동시키지 못하도록"],
    answer: 2,
    explain: "절연 저항 측정은 고전압 회로와 차체 간의 저항을 측정하는 것이므로, 고전압 케이블이 차체(접지)에 닿아있으면 이미 단락된 것으로 간주되어 정확한 측정이 불가능합니다."
  },
  {
    question: "하이브리드 차량에서 고전압 배터리 팩의 케이스를 분리하기 전 가장 중요한 작업은 무엇입니까?",
    options: ["타이어를 모두 제거", "내부 공기압을 측정", "서비스 플러그 분리 및 DC-Link 전압 0V 확인", "에어 필터 교체"],
    answer: 2,
    explain: "고전압 배터리 팩 내부에는 여전히 고전압 회로가 연결되어 있을 수 있으므로, 서비스 플러그 분리와 잔류 전압 0V 확인은 감전 사고 방지를 위한 필수 안전 조치입니다."
  },
  {
    question: "하이브리드 차량의 PCU에 문제가 발생했을 때, 구동 모터 제어가 불가능해지는 주된 원인은 무엇입니까?",
    options: ["연료 분사량 부족", "PCU의 인버터/컨버터가 전력 변환을 하지 못해서", "엔진 오일 압력 상승", "냉각수 펌프의 역회전"],
    answer: 1,
    explain: "PCU는 배터리의 DC 전력을 모터 구동에 필요한 AC 전력으로 변환하는 핵심 장치이므로, 고장 시 모터에 전력을 공급할 수 없어 제어가 불가능해집니다."
  },
  {
    question: "하이브리드 차량이 EV 모드로 주행하지 않고 엔진이 강제 시동되는 조건이 아닌 것은 무엇입니까?",
    options: ["운전자가 급가속 페달을 밟았을 때", "고전압 배터리의 SOC가 매우 낮을 때", "차량이 정지해 있을 때", "차량의 주행 속도가 높을 때"],
    answer: 2,
    explain: "하이브리드 차량은 연료 효율을 위해 정지 상태에서는 엔진을 끄는 것이 일반적입니다. (ISG). 급가속, 저SOC, 고속 주행 시에는 엔진이 시동됩니다."
  },
  {
    question: "하이브리드 시스템에서 HEV가 고전압으로 구동하는 주요 부품이 아닌 것은 무엇입니까?",
    options: ["구동 모터", "AC 컴프레서", "PTC 히터", "12V 보조 배터리"],
    answer: 3,
    explain: "구동 모터, AC 컴프레서, PTC 히터는 수백 볼트의 고전압으로 구동됩니다. 12V 보조 배터리는 저전압 시스템입니다."
  },
  {
    question: "고전압 배터리 모듈 교체 작업 시, 신규 모듈 장착 후 BMS에 반드시 해야 하는 작업은 무엇입니까?",
    options: ["엔진 오일 교환", "셀 전압 학습 (밸런싱 리셋)", "휠 얼라인먼트 조정", "브레이크액 교환"],
    answer: 1,
    explain: "새 모듈을 장착하면 기존 모듈과 전압 및 내부 저항 특성이 다르므로, BMS에 새 셀의 전압 및 상태를 학습시켜 정상적인 밸런싱이 이루어지도록 해야 합니다."
  },
  {
    question: "직병렬 혼합형 하이브리드 시스템의 유성 기어 세트에서 발전기의 역할은 무엇입니까?",
    options: ["오직 바퀴를 구동", "엔진 동력의 일부를 전기 에너지로 변환", "브레이크 유압을 발생", "12V 보조 배터리를 충전"],
    answer: 1,
    explain: "유성 기어 세트는 엔진 동력을 구동과 발전으로 분배하며, 발전기는 이 동력의 일부를 받아 전기 에너지로 변환하여 배터리를 충전하거나 구동 모터에 직접 공급합니다."
  },
  {
    question: "하이브리드 차량의 전자식 진공 펌프가 사용되는 주된 이유는 무엇입니까?",
    options: ["엔진 정지 시에도 브레이크 부스터의 진공 유지", "타이어의 공기 주입", "실내 습도 조절", "연료 탱크의 압력 조절"],
    answer: 0,
    explain: "일반 차량은 엔진에서 진공을 얻지만, 하이브리드는 엔진 정지 상태가 많으므로 전자식 진공 펌프를 사용하여 브레이크 부스터 작동에 필요한 진공을 안정적으로 생성합니다."
  },
  {
    question: "하이브리드 차량 정비 시, 진단 장비를 사용하여 IGBT 온도를 모니터링하는 주된 이유는 무엇입니까?",
    options: ["실내 공조 시스템의 효율 확인", "IGBT의 과열로 인한 인버터 고장 및 출력 제한 여부 확인", "타이어 공기압의 급격한 변화 감지", "엔진의 압축비 측정"],
    answer: 1,
    explain: "IGBT는 인버터의 핵심 부품으로, 과도하게 온도가 상승하면 효율이 떨어지고 부품이 손상될 수 있으므로, 인버터의 성능 및 안전 상태를 확인하기 위해 모니터링합니다."
  }
    
];

// 문제/보기 랜덤 섞기
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }
  
  // ✅ 문제 순서 랜덤 + 60문제 제한
  let questions = shuffleArray([...industry010902]).slice(0, 60);
  
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
    status.innerHTML = `<span id="scoreDisplay">하이브리드자동차 특화시스템정비 2회차 총점: ${score}/${questions.length}</span>`;
  
    // 제출 버튼 제거
    document.getElementById("submitBtn").style.display = "none";
  
    // 결과창 표시
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<h2>하이브리드자동차 특화시스템정비 2회차 총점: ${score}/${questions.length}</h2>`;
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