// -----------------------------
// 문제 배열
export const industry010901 = [
    {    
    question: "하이브리드 자동차의 고전압 배터리 팩을 탈거 또는 점검하기 전에 정비사가 가장 먼저 취해야 할 안전 조치는 무엇입니까?",
    options: ["12V 보조 배터리 분리", "고전압 차단용 서비스 플러그 분리", "구동 모터 커넥터 분리", "브레이크액 레벨 확인"],
    answer: 1,
    explain: "하이브리드 차량의 고전압 시스템 작업을 시작하기 전에 감전 사고를 방지하기 위해 반드시 서비스 플러그 (Service Plug)를 분리하여 고전압 회로를 차단해야 합니다."
  },
  {
    question: "하이브리드 차량의 회생 제동 Regenerative Braking 시스템의 주된 목적은 무엇입니까?",
    options: ["엔진 출력의 급격한 증가", "고속 주행 시 조향 안정성 확보", "제동 시 버려지는 운동 에너지를 전기 에너지로 회수", "에어컨 시스템의 효율 향상"],
    answer: 2,
    explain: "회생 제동은 감속하거나 내리막길 주행 시 바퀴의 회전력을 이용하여 구동 모터를 발전기로 작동시켜 전기 에너지를 생성하고 고전압 배터리에 저장합니다."
  },
  {
    question: "하이브리드 차량의 PCU Power Control Unit가 수행하는 주요 기능이 아닌 것은 무엇입니까?",
    options: ["고전압 배터리 전압 승압 및 강압", "구동 모터의 전력 변환 (DC를 AC로)", "고전압 배터리의 셀 전압 밸런싱", "차량 전체 고전압 시스템 관리"],
    answer: 2,
    explain: "PCU는 인버터, 컨버터 등으로 구성되어 모터 구동 및 회생 제동에 필요한 전력 변환 및 전압 제어를 수행합니다. 셀 전압 밸런싱은 BMS (배터리 관리 시스템)의 주요 기능입니다."
  },
  {
    question: "하이브리드 차량의 고전압 케이블 피복 색상으로 통용되는 것은 무엇입니까?",
    options: ["노란색", "검은색", "파란색", "주황색"],
    answer: 3,
    explain: "국제적인 안전 규격에 따라 하이브리드 및 전기차의 고전압 배선은 감전 위험을 경고하는 주황색으로 표시됩니다."
  },
  {
    question: "HEV에서 IGBT Insulated Gate Bipolar Transistor가 사용되는 핵심 부품은 무엇입니까?",
    options: ["브레이크 부스터", "BMS", "파워 컨트롤 유닛 PCU", "에어컨 컴프레서"],
    answer: 2,
    explain: "IGBT는 PCU 내부의 인버터에 사용되는 핵심 전력 반도체로, 고전압 DC를 AC로 변환하거나 AC를 DC로 변환하여 모터의 구동과 회생 제동을 제어합니다."
  },
  {
    question: "하이브리드 자동차 정비 시, 절연 장갑을 착용해야 하는 이유로 가장 옳은 것은 무엇입니까?",
    options: ["오염 물질로부터 피부 보호", "고온 부품으로부터 화상 방지", "고전압 감전 사고 예방", "정밀 부품의 손상 방지"],
    answer: 2,
    explain: "하이브리드 및 전기차의 고전압 시스템 작업 시 감전 위험이 매우 높기 때문에, 규격에 맞는 절연 장갑 착용은 필수적인 안전 조치입니다."
  },
  {
    question: "하이브리드 자동차의 블렌디드 브레이킹 Blended Braking 시스템에 대한 설명으로 옳은 것은 무엇입니까?",
    options: ["항상 마찰 브레이크만 사용하는 방식", "엔진 브레이크만 사용하는 방식", "회생 제동과 마찰 브레이크를 협조 제어하는 방식", "주차 브레이크와 풋 브레이크를 동시에 사용하는 방식"],
    answer: 2,
    explain: "블렌디드 브레이킹은 운전자가 요구하는 제동력에 따라 회생 제동을 우선 적용하고, 부족한 제동력만 마찰 브레이크 (유압식 브레이크)로 채우는 협조 제어 방식입니다."
  },
  {
    question: "고전압 배터리 BMS Battery Management System의 주요 기능이 아닌 것은 무엇입니까?",
    options: ["배터리 셀의 온도 모니터링", "배터리 충전 상태 SOC 모니터링", "모터의 AC 전압을 DC로 변환", "배터리 셀 간의 전압 평형화"],
    answer: 2,
    explain: "BMS는 배터리의 상태(전압, 온도, 전류)를 관리하고 보호합니다. 모터의 AC 전압을 DC로 변환하는 것은 PCU (인버터)의 기능입니다."
  },
  {
    question: "하이브리드 차량에서 저속 주행 시 엔진이 아닌 모터만으로 주행하는 모드를 무엇이라고 합니까?",
    options: ["Eco Mode", "Sport Mode", "EV Mode", "Charge Mode"],
    answer: 2,
    explain: "EV Mode (Electric Vehicle Mode)는 배터리에 충분한 전력이 있을 때 엔진 시동 없이 전기 모터의 힘으로만 주행하는 모드를 의미합니다."
  },
  {
    question: "하이브리드 차량에 장착된 LDC Low DC-DC Converter의 주된 역할은 무엇입니까?",
    options: ["고전압을 승압하여 모터에 공급", "회생 제동 시 AC를 DC로 변환", "고전압을 저전압 (12V)으로 낮춰 보조 배터리 충전", "엔진의 시동을 담당"],
    answer: 2,
    explain: "LDC는 고전압 배터리의 전원을 받아 차량의 일반적인 12V 시스템 (보조 배터리 충전, 전조등, 오디오 등)에 필요한 저전압으로 낮춰 공급하는 장치입니다."
  },
  {
    question: "하이브리드 차량의 고전압 배터리 팩이 주로 장착되는 위치는 어디입니까?",
    options: ["엔진룸 내부", "운전석 대시보드 하단", "차량의 트렁크 하단 또는 뒷좌석 하부", "차량 루프 상단"],
    answer: 2,
    explain: "무게 중심을 낮추고 충돌 시 안전성을 확보하며 공간 효율을 높이기 위해 주로 뒷좌석 아래나 트렁크 하부 등 차량 중앙부에 장착됩니다."
  },
  {
    question: "하이브리드 차량에서 엔진이 시동되지 않는 원인이 아닌 것은 무엇입니까?",
    options: ["고전압 배터리 충전 상태 SOC가 너무 낮을 때", "12V 보조 배터리 방전", "구동 모터의 고장", "브레이크액의 누유"],
    answer: 3,
    explain: "브레이크액 누유는 제동 성능 저하의 원인이지만, 엔진의 시동과는 직접적인 관련이 없습니다. 엔진 시동은 주로 고전압 시스템이나 12V 배터리 상태의 영향을 받습니다."
  },
  {
    question: "하이브리드 차량의 열 관리 시스템 Thermal Management System이 고전압 배터리에 필요한 주된 이유는 무엇입니까?",
    options: ["배터리의 외관 유지", "배터리 내부 냉각 및 가열로 성능 및 수명 최적화", "배터리 케이스의 부식 방지", "배터리의 물리적 진동 흡수"],
    answer: 1,
    explain: "리튬이온 배터리는 특정 온도 범위(최적 작동 온도)에서 최고의 효율과 긴 수명을 가지므로, 온도 관리 시스템을 통해 냉각 및 가열하여 온도를 제어합니다."
  },
  {
    question: "하이브리드 차량에서 구동 모터가 고장났을 때 차량에 발생하는 일반적인 현상은 무엇입니까?",
    options: ["공회전 시 소음 증가", "오직 엔진의 힘만으로 주행", "브레이크등 지속 점등", "에어컨 작동 불능"],
    answer: 1,
    explain: "구동 모터가 고장나면 EV 주행 및 동력 보조가 불가능해져, 시스템은 안전을 위해 엔진의 힘만으로 비상 주행(Limp Home Mode)을 유도합니다."
  },
  {
    question: "하이브리드 차량에서 사용되는 유성 기어 세트 Planetary Gear Set의 역할은 무엇입니까?",
    options: ["엔진의 냉각수 온도 조절", "고전압 배터리의 충전 상태 표시", "엔진 동력과 모터 동력의 효율적인 분배 및 통합", "운전자의 조향 각도 감지"],
    answer: 2,
    explain: "유성 기어 세트는 동력 분할 장치 (Power Split Device)의 핵심 부품으로, 엔진의 동력을 바퀴 구동, 모터 구동, 발전기 작동으로 분할하고 통합하는 역할을 합니다."
  },
  {
    question: "하이브리드 차량의 회생 제동 시스템 고장 시 발생할 수 있는 현상은 무엇입니까?",
    options: ["연료 소모량 감소", "일반 브레이크 마찰 브레이크 패드의 빠른 마모", "엔진의 과열", "12V 보조 배터리의 과충전"],
    answer: 1,
    explain: "회생 제동이 고장나면 감속 시 에너지를 회수하지 못하고, 모든 제동을 마찰 브레이크에 의존하게 되어 브레이크 패드의 마모가 빨라지고 연비가 떨어집니다."
  },
  {
    question: "하이브리드 차량 진단 시 절연 저항 측정이 필요한 주요 부품은 무엇입니까?",
    options: ["와이퍼 모터", "고전압 배선 및 모터/인버터", "도어 잠금 장치", "헤드라이트 전구"],
    answer: 1,
    explain: "고전압 부품의 절연 파손은 감전 및 화재 위험을 유발하므로, 고전압 배선, 모터, 인버터 등은 주기적으로 절연 저항 측정을 통해 누설 전류 여부를 확인해야 합니다."
  },
  {
    question: "하이브리드 자동차 정비 매뉴얼에서 정비 자격에 대한 규정이 강조되는 가장 큰 이유는 무엇입니까?",
    options: ["차량 가격이 비싸기 때문", "고전압으로 인한 안전 위험 때문", "부품 수급의 어려움 때문", "정비 시간이 길어서"],
    answer: 1,
    explain: "하이브리드 및 전기차는 수백 볼트의 고전압 시스템을 사용하므로, 감전 등 치명적인 안전 사고를 예방하기 위해 특정 교육을 이수한 정비사만 작업할 수 있도록 규정하고 있습니다."
  },
  {
    question: "하이브리드 차량의 고전압 배터리 셀 밸런싱의 목적은 무엇입니까?",
    options: ["배터리 팩의 무게 균형 맞추기", "각 셀의 충전 상태와 전압을 균일하게 유지", "배터리 셀의 물리적 크기 조정", "배터리 외부 케이스의 온도 제어"],
    answer: 1,
    explain: "배터리 팩 내의 수많은 셀들이 서로 다른 충전 및 방전 특성을 가질 수 있는데, BMS가 셀 밸런싱을 통해 모든 셀의 상태를 균일하게 유지하여 배터리의 성능과 수명을 최대화합니다."
  },
  {
    question: "직렬 하이브리드 시스템 Series Hybrid System의 주된 특징은 무엇입니까?",
    options: ["엔진과 모터가 동시에 바퀴를 구동", "엔진은 발전만 하고 모터가 바퀴를 구동", "모터가 엔진의 시동만 담당", "구동 모터가 여러 개 장착됨"],
    answer: 1,
    explain: "직렬 하이브리드는 엔진이 발전기를 돌려 전기를 생산하고, 그 전기로 구동 모터가 바퀴를 굴리는 방식입니다. 엔진은 바퀴와 직접 연결되지 않습니다."
  },
  {
    question: "하이브리드 차량의 고전압 에어컨 컴프레서의 특징으로 옳은 것은 무엇입니까?",
    options: ["엔진 벨트의 동력으로 구동", "냉매 대신 물을 사용", "전기 모터로 구동되어 엔진 정지 시에도 작동 가능", "12V 보조 배터리로만 구동"],
    answer: 2,
    explain: "하이브리드 차량은 엔진 정지 시에도 쾌적한 실내 온도를 유지해야 하므로, 전기 모터로 구동되는 고전압 에어컨 컴프레서를 사용합니다."
  },
  {
    question: "하이브리드 차량에서 IGBT의 손상 시 발생할 수 있는 현상은 무엇입니까?",
    options: ["브레이크 제동력 증가", "엔진 출력 자동 증가", "구동 모터 작동 불능 또는 출력 저하", "내비게이션 시스템 고장"],
    answer: 2,
    explain: "IGBT는 PCU 내부 인버터의 핵심 부품이므로, 손상 시 모터 구동 및 회생 제동에 필요한 전력 변환이 불가능해져 차량 주행 불능 또는 출력 저하가 발생합니다."
  },
  {
    question: "하이브리드 차량의 PCU 냉각 시스템에 사용되는 냉각수의 색상은 일반 엔진 냉각수와 구분이 됩니다. 그 주된 이유는 무엇입니까?",
    options: ["냉각 효율을 높이기 위해", "고전압 시스템의 절연 파괴 방지", "냉각수 종류가 다르다는 것을 명확히 구분하기 위해", "열 전달률을 낮추기 위해"],
    answer: 2,
    explain: "PCU는 일반 엔진보다 낮은 온도에서 작동하며, 고전압 시스템 냉각수는 다른 성분과 특성을 가질 수 있으므로, 일반 냉각수와 혼동을 막고 정비 오류를 방지하기 위해 별도의 색상을 사용합니다."
  },
  {
    question: "하이브리드 차량에서 고전압 배터리 팩 내부에 설치되어 있는 센서는 무엇입니까?",
    options: ["산소 센서", "질소 산화물 센서", "셀 전압 및 온도 센서", "크랭크 각 센서"],
    answer: 2,
    explain: "BMS는 고전압 배터리 팩 내부의 수많은 셀들의 개별적인 전압, 온도, 전류 정보를 실시간으로 측정하고 모니터링하기 위한 센서들을 사용합니다."
  },
  {
    question: "하이브리드 차량이 저속에서 엔진 시동 없이 주행할 때, 주변 보행자의 안전을 위해 의도적으로 소음을 발생시키는 장치는 무엇입니까?",
    options: ["액티브 노이즈 캔슬링", "AVAS Acoustic Vehicle Alerting System", "전자식 경적", "LDC"],
    answer: 1,
    explain: "AVAS는 저속 (보통 20~30km/h 이하)에서 모터로만 주행하여 소음이 거의 없을 때, 보행자에게 차량 접근을 알리기 위해 인위적인 경고음을 내는 시스템입니다."
  },
  {
    question: "하이브리드 자동차의 플러그인 하이브리드 PHEV의 가장 큰 특징은 무엇입니까?",
    options: ["오직 엔진의 힘으로만 주행", "고전압 배터리를 외부 전원으로 직접 충전 가능", "모터가 엔진의 시동만 담당", "주행 중 회생 제동을 사용하지 않음"],
    answer: 1,
    explain: "PHEV는 일반 하이브리드와 달리 외부 충전 포트를 통해 고전압 배터리를 충전할 수 있으며, 더 큰 배터리 용량으로 더 긴 거리를 EV 모드로 주행할 수 있습니다."
  },
  {
    question: "하이브리드 차량 정비 시, 작업 전 반드시 DC-Link 전압을 측정하여 0V임을 확인해야 하는 주된 이유는 무엇입니까?",
    options: ["배터리 충전 상태 확인", "모터의 효율 확인", "인버터 내 커패시터에 남아있는 잔류 고전압 방전 여부 확인", "냉각수 누설 확인"],
    answer: 2,
    explain: "서비스 플러그를 분리한 후에도 인버터 내부의 커패시터에는 치명적인 잔류 고전압이 남아있을 수 있습니다. 안전을 위해 충분한 방전 시간 후 0V임을 직접 확인해야 합니다."
  },
  {
    question: "하이브리드 차량에서 회생 제동이 제한되는 상황이 아닌 것은 무엇입니까?",
    options: ["고전압 배터리의 SOC가 100%에 가까울 때", "노면이 심하게 미끄러울 때", "브레이크액이 부족할 때", "차량이 고속으로 등판할 때"],
    answer: 3,
    explain: "고속 등판 시에는 구동 모터의 동력이 필요하므로 회생 제동이 작동할 수 없습니다. 배터리 만충, 저온, 미끄러운 노면 등에서는 회생 제동 효율이 저하되거나 안전을 위해 제한됩니다."
  },
  {
    question: "하이브리드 시스템에서 MHEV Mild Hybrid Electric Vehicle이 사용하는 보조 배터리 전압으로 가장 흔한 것은 무엇입니까?",
    options: ["12V", "48V", "100V", "400V"],
    answer: 1,
    explain: "MHEV는 일반 차량의 12V 시스템에 더해 48V 마일드 하이브리드 시스템을 주로 사용하여 엔진 시동과 보조 동력 지원에 사용됩니다."
  },
  {
    question: "하이브리드 차량의 동력 분할 장치 고장 시 가장 흔하게 발생하는 현상은 무엇입니까?",
    options: ["파워 트레인 경고등 점등 및 주행 불능", "차량 내부 조명 고장", "타이어 공기압 센서 오작동", "후방 카메라 작동 불량"],
    answer: 0,
    explain: "동력 분할 장치 (유성 기어 세트)는 엔진과 모터의 동력을 제어하는 핵심 부품이므로, 고장 시 동력 전달에 문제가 생겨 차량 주행 불능을 유발하고 경고등이 점등됩니다."
  },
  {
    question: "하이브리드 차량의 BMS가 셀 전압 밸런싱을 위해 주로 사용하는 방법은 무엇입니까?",
    options: ["일부 셀을 물리적으로 교체", "저항을 이용해 전압이 높은 셀의 에너지를 소모", "모든 셀에 동일한 전류를 강제 공급", "충전기를 이용하여 셀마다 개별적으로 충전"],
    answer: 1,
    explain: "BMS는 패시브 밸런싱 (Passive Balancing) 방식을 주로 사용하며, 전압이 높은 셀에 저항을 연결하여 에너지를 열로 소모시킴으로써 모든 셀의 전압을 낮은 셀에 맞춥니다."
  },
  {
    question: "하이브리드 차량에서 엔진이 작동하는 주요 상황이 아닌 것은 무엇입니까?",
    options: ["급가속 시 모터와 함께 동력 지원", "고전압 배터리 충전 상태 SOC가 너무 낮을 때", "차량이 정지해 있을 때 (충분히 예열된 후)", "차량의 주행 속도가 높을 때"],
    answer: 2,
    explain: "하이브리드 차량은 연료 효율을 위해 정지 상태에서는 가급적 엔진을 정지시키는 ISG (Idle Stop & Go) 기능을 수행합니다. 엔진은 주로 구동이나 충전을 위해 작동됩니다."
  },
  {
    question: "하이브리드 차량의 고전압 배터리 냉각 팬 작동 불량 시 예상되는 문제는 무엇입니까?",
    options: ["엔진 오일 누유", "배터리 과열로 인한 출력 저하 및 수명 단축", "타이어 공기압 감소", "브레이크 패드의 빠른 마모"],
    answer: 1,
    explain: "고전압 배터리는 온도에 민감하므로, 냉각 팬이 작동하지 않으면 과열되어 배터리 성능(출력)이 급격히 저하되고 심할 경우 배터리 수명이 크게 줄어듭니다."
  },
  {
    question: "하이브리드 차량에서 HVAC 시스템이 고전압으로 작동하는 주된 이유는 무엇입니까?",
    options: ["연비를 개선하기 위해", "실내 공기 정화 성능을 높이기 위해", "엔진이 정지된 상태에서도 공조기 작동을 유지하기 위해", "냉매의 종류를 바꾸기 위해"],
    answer: 2,
    explain: "하이브리드 차량은 엔진 정지 (ISG) 상태에서도 에어컨이나 히터를 작동시켜야 하므로, 전기 모터로 구동되는 고전압 시스템을 사용합니다."
  },
  {
    question: "하이브리드 시스템에서 엔진이 구동력을 바퀴에 직접 전달하지 않는 하이브리드 방식은 무엇입니까?",
    options: ["병렬형 Parallel", "직렬형 Series", "직병렬 혼합형 Series-Parallel", "마일드 Mild"],
    answer: 1,
    explain: "직렬형 하이브리드에서는 엔진이 오직 발전기를 돌려 전기 에너지를 만들고, 구동 모터가 바퀴를 굴립니다. 엔진과 바퀴는 기계적으로 직접 연결되지 않습니다."
  },
  {
    question: "고전압 배터리 시스템의 안전 진단 시, 절연 파괴가 발생했을 경우 나타나는 현상은 무엇입니까?",
    options: ["배터리 냉각수 온도 저하", "차체와 고전압 회로 간의 누설 전류 발생", "배터리 충전 속도 증가", "12V 배터리 과충전"],
    answer: 1,
    explain: "절연 파괴는 고전압 회로와 비충전부 (차체) 사이에 누설 전류가 흐르는 현상으로, 감전 사고 및 차량 화재의 위험을 높입니다."
  },
  {
    question: "하이브리드 차량의 ISG Idle Stop & Go 시스템 작동 시, 차량이 정지된 상태에서 엔진이 다시 시동되는 주요 조건이 아닌 것은 무엇입니까?",
    options: ["운전자가 브레이크 페달에서 발을 떼거나 가속 페달을 밟을 때", "배터리 충전 상태 SOC가 설정치 이하로 떨어졌을 때", "운전자가 안전벨트를 풀었을 때", "실내 설정 온도를 유지하기 위해 공조 시스템의 작동이 필요할 때"],
    answer: 2,
    explain: "운전자가 안전벨트를 풀었을 때는 주로 주행 안전과 관련된 시스템이 작동하거나 시동이 꺼지는 조건일 수 있으나, ISG가 재시동되는 직접적인 조건과는 거리가 있습니다. 재시동은 주로 주행 요구, 배터리 충전, 공조 부하 등에 따라 결정됩니다."
  },
  {
    question: "하이브리드 차량에서 일반 차량 대비 더 높은 수준의 정비가 요구되는 항목은 무엇입니까?",
    options: ["브레이크 패드 교환", "엔진 오일 교환", "고전압 시스템의 절연 및 냉각 관리", "타이어 공기압 점검"],
    answer: 2,
    explain: "브레이크 패드, 엔진 오일, 타이어 공기압 점검은 일반 차량과 유사하지만, 고전압 시스템과 관련된 절연, 냉각, BMS 진단은 하이브리드 차량만의 특화된 중요 정비 항목입니다."
  },
  {
    question: "고전압 배터리 팩 내부의 접촉기 Contactor의 주된 역할은 무엇입니까?",
    options: ["배터리 셀 간의 전압 측정", "배터리 셀의 냉각", "고전압 배터리와 외부 회로를 연결 및 차단", "배터리의 물리적 진동 흡수"],
    answer: 2,
    explain: "접촉기는 BMS의 제어에 따라 고전압 배터리의 전원을 메인 구동 회로에 연결하거나, 비상 시 또는 시동 차단 시 고전압 회로를 물리적으로 안전하게 차단하는 역할을 합니다."
  },
  {
    question: "하이브리드 차량의 회생 제동으로 인해 나타나는 일반적인 현상은 무엇입니까?",
    options: ["브레이크 패드 마모 속도 증가", "제동 시 브레이크 페달이 평소보다 단단하게 느껴짐", "연료 소모량 증가", "변속 충격 증가"],
    answer: 1,
    explain: "회생 제동이 작동하면 모터의 발전 저항으로 인해 운전자는 브레이크 페달이 단단해지는 감각을 느낄 수 있습니다. 또한 마찰 브레이크 사용이 줄어들어 패드 마모 속도는 감소합니다."
  }
];

// 문제/보기 랜덤 섞기
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }
  
  // ✅ 문제 순서 랜덤 + 60문제 제한
  let questions = shuffleArray([...industry010901]).slice(0, 60);
  
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
    status.innerHTML = `<span id="scoreDisplay">하이브리드자동차 특화시스템정비 1회차 총점: ${score}/${questions.length}</span>`;
  
    // 제출 버튼 제거
    document.getElementById("submitBtn").style.display = "none";
  
    // 결과창 표시
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<h2>하이브리드자동차 특화시스템정비 1회차 총점: ${score}/${questions.length}</h2>`;
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