// -----------------------------
// 문제 배열
export const industry010403 = [
    {    
    question: "차량 통신 중, 하나의 마스터(Master) 노드가 여러 개의 슬레이브(Slave) 노드를 제어하며, 주로 저속의 바디(Body) 제어 시스템에 사용되는 네트워크는 무엇입니까?",
    options: ["CAN", "LIN", "FlexRay", "MOST"],
    answer: 1,
    explain: "LIN(Local Interconnect Network)은 마스터-슬레이브 구조로 되어 있으며, 단순하고 저렴한 저속 통신 방식으로 도어, 시트, 공조 장치 등 바디 제어에 사용됩니다."
  },
  {
    question: "자동차 전기 회로에서 전압을 측정할 때, 멀티미터의 빨간색 리드(Red Lead)는 어디에 연결해야 합니까?",
    options: ["접지(Ground)", "전류가 흐르지 않는 곳", "전원의 (-)단자", "전원의 (+)단자 또는 전압을 측정할 지점"],
    answer: 3,
    explain: "전압 측정 시 멀티미터의 빨간색 리드는 전위가 높은 쪽이나 측정하고자 하는 지점에 연결하고, 검은색 리드는 기준점인 접지(0V)에 연결합니다."
  },
  {
    question: "엔진 ECU가 목표하는 공연비(A/F)를 유지하기 위해 산소 센서의 피드백 신호를 받아 연료 분사량을 실시간으로 조절하는 제어 방식을 무엇이라고 합니까?",
    options: ["피드 포워드(Feed-Forward) 제어", "개루프(Open Loop) 제어", "폐루프(Closed Loop) 제어", "시퀀스(Sequence) 제어"],
    answer: 2,
    explain: "폐루프(Closed Loop) 제어는 센서(산소 센서)를 통해 출력(배기가스)을 측정하고, 이 결과를 다시 입력(연료 분사량)에 반영하여 목표 값을 지속적으로 유지하는 방식입니다."
  },
  {
    question: "발전기(알터네이터)에서 발생하는 교류(AC) 전력을 차량의 직류(DC) 전장 시스템에 맞게 직류로 변환해주는 부품은 무엇입니까?",
    options: ["레귤레이터", "슬립 링(Slip Ring)", "다이오드 브리지(Rectifier)", "계자 코일"],
    answer: 2,
    explain: "다이오드 브리지(Rectifier)는 6~8개의 다이오드로 구성되어 있으며, 발전기에서 생성된 3상 교류(AC)를 차량용 직류(DC) 전력으로 변환하는 정류 작용을 합니다."
  },
  {
    question: "자동차가 주행 중 갑자기 방향을 틀거나 급제동 시 차량의 미끄러짐을 감지하여 엔진 출력과 브레이크를 독립적으로 제어해 차량의 자세를 안정시키는 시스템은 무엇입니까?",
    options: ["ABS(Anti-lock Brake System)", "TCS(Traction Control System)", "ESC(Electronic Stability Control)", "ACC(Adaptive Cruise Control)"],
    answer: 2,
    explain: "ESC(Electronic Stability Control)는 ABS와 TCS 기능을 통합하여 차량의 횡 방향 안정성을 확보하는 시스템으로, 요 레이트 센서, 조향각 센서 등의 정보를 종합하여 제어합니다."
  },
  {
    question: "자동차 회로에서 굵은 선이 전원 공급선이라면, 센서와 ECU 간에 미세한 전압 변화를 통해 정보를 주고받는 선은 무엇이라고 부릅니까?",
    options: ["부하선", "접지선", "제어선", "신호선(Signal Line)"],
    answer: 3,
    explain: "신호선(Signal Line)은 센서의 측정값을 ECU로 전달하거나, ECU가 액추에이터에 동작 명령을 내릴 때 사용하는 데이터 전송용 와이어입니다."
  },
  {
    question: "솔레노이드 밸브 또는 릴레이 코일과 같이 유도성 부하(Inductive Load)를 ECU의 트랜지스터로 제어할 때, 코일 OFF 시 발생하는 역기전력으로부터 트랜지스터를 보호하기 위해 사용되는 부품은 무엇입니까?",
    options: ["콘덴서", "퓨즈", "다이오드(프리휠링 다이오드)", "저항"],
    answer: 2,
    explain: "릴레이 코일 등의 유도성 부하가 차단될 때 발생하는 고전압의 역기전력(Back EMF)을 흡수하여 트랜지스터를 보호하기 위해, 코일과 병렬로 다이오드(프리휠링 다이오드)가 연결됩니다."
  },
  {
    question: "자동차의 계기판 클러스터에서 속도계, 연료 게이지, 수온 게이지 등의 정보를 ECU로부터 받아 표시하는 방식은 주로 무엇을 통하여 이루어집니까?",
    options: ["아날로그 배선 연결", "개별 센서 신호선 연결", "CAN 통신", "진단 포트(OBD) 연결"],
    answer: 2,
    explain: "최신 차량의 계기판은 대부분의 정보를 ECU로부터 CAN 통신을 통해 디지털 데이터 형태로 수신하여 처리하고 표시합니다. 이는 배선 수를 줄이고 시스템의 유연성을 높입니다."
  },
  {
    question: "차량의 매스 에어 플로우 센서(MAFS) 중, 백금 열선(Hot Wire)에 전류를 흘려 보내 온도를 유지하고, 이 때 흐르는 전류량을 측정하여 흡입 공기량을 계산하는 방식은 무엇입니까?",
    options: ["가변 저항 방식", "초음파 방식", "열선(Hot Wire) 방식", "베르누이 원리 방식"],
    answer: 2,
    explain: "열선(Hot Wire) 방식의 MAFS는 열선 주변을 통과하는 공기량에 비례하여 열을 빼앗기고, 이를 보상하기 위해 더 많은 전류를 흘려 보내는데, 이 전류량이 공기량의 지표가 됩니다."
  },
  {
    question: "퓨즈가 단선되었을 때, 회로의 점검 순서로 가장 올바른 것은 무엇입니까?",
    options: ["퓨즈 교체 -> 전원 인가 -> 부하 점검", "부하와 배선 점검 -> 단락/과부하 원인 제거 -> 퓨즈 교체", "퓨즈 박스 청소 -> 퓨즈 교체 -> 운전", "릴레이 작동 확인 -> 퓨즈 교체 -> 운전"],
    answer: 1,
    explain: "퓨즈는 반드시 단선된 원인(단락 또는 과부하)을 먼저 찾아 제거한 후, 정격 용량의 새 퓨즈로 교체해야 합니다. 원인을 제거하지 않으면 교체된 퓨즈도 다시 단선됩니다."
  },
  {
    question: "자동차 회로에서 저항체의 온도가 상승하면 전기 저항값이 증가하는 특성을 가진 서미스터는 무엇입니까?",
    options: ["NTC(Negative Temperature Coefficient)", "PTC(Positive Temperature Coefficient)", "VDR(Voltage Dependent Resistor)", "LDR(Light Dependent Resistor)"],
    answer: 1,
    explain: "PTC(Positive Temperature Coefficient) 서미스터는 온도가 올라가면 저항값이 증가하는 특성을 가지며, 과열 방지 및 히터의 전류 제어 등에 사용됩니다."
  },
  {
    question: "엔진의 크랭크샤프트가 아닌 흡기 또는 배기 캠샤프트의 정확한 회전 위치를 ECU에 전달하여 가변 밸브 타이밍(VVT) 제어에 사용되는 센서는 무엇입니까?",
    options: ["크랭크샤프트 포지션 센서(CKPS)", "캠샤프트 포지션 센서(CMPS)", "노크 센서", "스로틀 포지션 센서"],
    answer: 1,
    explain: "CMPS(Camshaft Position Sensor)는 캠축의 회전 위치를 감지하여 밸브 개폐 시점을 파악하고, ECU가 정확한 점화 및 분사 시기를 결정하고 VVT를 제어할 수 있게 합니다."
  },
  {
    question: "직렬 회로에서 부하(저항)가 많아질수록 회로 전체에 흐르는 전류는 어떻게 변화합니까?",
    options: ["증가한다.", "일정하다.", "감소한다.", "전압에 따라 불규칙하게 변한다."],
    answer: 2,
    explain: "직렬 회로에서는 저항이 추가될수록 전체 합성 저항이 증가합니다. 옴의 법칙($I = V/R$)에 따라 전압이 일정할 때 저항이 증가하면 전류는 감소합니다."
  },
  {
    question: "차량의 스마트키 시스템에서, 키와 차량 간에 무선으로 암호화된 코드를 주고받아 시동을 허용하는 도난 방지 시스템은 무엇입니까?",
    options: ["ABS", "SRS", "이모빌라이저(Immobilizer)", "TCS"],
    answer: 2,
    explain: "이모빌라이저(Immobilizer)는 차량 도난 방지를 위해 설계된 시스템으로, 차량 ECU와 키 내부의 트랜스폰더 간의 암호 코드가 일치해야만 시동을 허용합니다."
  },
  {
    question: "자동차의 와이어 하니스 수리 시, 절대로 일반 납땜으로 대체해서는 안 되며, 반드시 전용 공구를 이용해 압착식으로 연결해야 하는 회로 부위는 어디입니까?",
    options: ["미등 회로", "오디오 스피커선", "CAN 통신선", "와이퍼 모터 전원선"],
    answer: 2,
    explain: "CAN 통신선은 고속으로 미세한 디지털 신호를 전송하므로, 납땜 시 발생하는 저항 변화나 임피던스 불일치는 통신 불량을 유발할 수 있습니다. 따라서 전용 커넥터나 압착식 스플라이스를 사용해야 합니다."
  },
  {
    question: "멀티미터로 저항을 측정했을 때, 0Ω(옴)에 가까운 값이 나왔다면 이는 회로의 어떤 상태를 의미합니까?",
    options: ["단선(Open Circuit) 상태", "정상적인 부하 상태", "단락(Short Circuit) 상태", "매우 높은 저항 상태"],
    answer: 2,
    explain: "저항 측정 시 0Ω에 가깝다는 것은 저항이 거의 없이 전류가 흐를 수 있는 단락(Short Circuit) 상태를 의미합니다."
  },
  {
    question: "자동차의 배터리가 갑자기 방전되어 시동이 걸리지 않을 때, 점프 스타트(Jump Start) 작업을 수행하는 가장 근본적인 목적은 무엇입니까?",
    options: ["배터리를 완전히 충전하기 위해", "퓨즈의 단선 여부를 확인하기 위해", "방전된 배터리 대신 임시적으로 시동에 필요한 대전류를 공급하기 위해", "발전기의 작동 여부를 점검하기 위해"],
    answer: 2,
    explain: "점프 스타트의 주 목적은 방전된 배터리가 아닌, 정상적인 배터리의 대용량 전류를 이용하여 스타터 모터가 시동을 걸 수 있도록 하는 것입니다."
  },
  {
    question: "전기차(EV)에서 회생 제동(Regenerative Braking) 시스템의 주요 역할은 무엇입니까?",
    options: ["브레이크 패드 마모를 가속화한다.", "내연기관을 시동한다.", "감속 시 모터를 발전기로 사용하여 운동 에너지를 전기 에너지로 변환하여 배터리를 충전한다.", "차량의 주행 속도를 일정하게 유지한다."],
    answer: 2,
    explain: "회생 제동은 차량이 감속할 때 모터를 발전기로 작동시켜 바퀴의 운동 에너지를 전기로 바꾸어 고전압 배터리를 충전함으로써 에너지 효율을 높입니다."
  },
  {
    question: "파워 윈도우 모터의 속도를 조절하거나, LED 조명의 밝기를 조절하기 위해 ECU에서 일정한 주기로 전원을 ON/OFF 하여 평균 전력을 제어하는 방식은 무엇입니까?",
    options: ["선형 제어(Linear Control)", "저항 분배 제어", "PWM(Pulse Width Modulation) 제어", "클로즈 루프 제어"],
    answer: 2,
    explain: "PWM(Pulse Width Modulation), 즉 펄스 폭 변조 방식은 ON 시간(Duty Cycle)을 조절하여 부하에 인가되는 평균 전력을 변화시킴으로써 모터 속도나 램프 밝기 등을 정밀하게 제어합니다."
  },
  {
    question: "자동차의 릴레이 회로에서 코일에 전원이 인가되었을 때 접점을 닫아 부하에 전력을 공급하는 가장 일반적인 형태의 릴레이는 무엇입니까?",
    options: [" normally open(A 접점)", " normally closed(B 접점)", " change-over(C 접점)", " 솔리드 스테이트 릴레이"],
    answer: 0,
    explain: "normally open(A 접점) 릴레이는 평소에는 접점이 열려 있다가(Open), 코일에 전원이 인가되면 접점이 닫혀(Close) 부하에 전력을 공급하는 가장 흔하게 사용되는 방식입니다."
  },
  {
    question: "엔진의 흡입 공기 온도(IAT)를 측정하여 ECU가 연료 분사량 보정 및 점화 시기를 제어할 수 있도록 정보를 제공하는 센서는 주로 어떤 종류의 서미스터를 사용합니까?",
    options: ["PTC", "NTC", "LDR", "VDR"],
    answer: 1,
    explain: "NTC(Negative Temperature Coefficient) 서미스터는 온도가 낮을 때 저항값이 높고, 온도가 높을 때 저항값이 낮아지는 특성을 이용하여 온도 측정 센서로 광범위하게 사용됩니다."
  },
  {
    question: "자동차에서 사용되는 리튬 이온 배터리의 주요 장점으로 옳지 않은 것은 무엇입니까?",
    options: ["에너지 밀도가 높다.", "수명이 길다.", "메모리 효과가 발생한다.", "경량화에 유리하다."],
    answer: 2,
    explain: "리튬 이온 배터리는 니켈-카드뮴 배터리에서 발생하던 메모리 효과가 거의 없다는 것이 큰 장점 중 하나입니다."
  },
  {
    question: "차량 진단 시, OBD-II 커넥터의 핀 16은 일반적으로 어떤 기능을 담당합니까?",
    options: ["CAN Low 통신 선", "차체 접지", "상시 전원(+12V)", "K-Line 통신 선"],
    answer: 2,
    explain: "OBD-II(J1962) 커넥터에서 핀 16은 진단 장비에 전원을 공급하기 위한 상시 전원(+12V, Battery Positive)을 나타냅니다."
  },
  {
    question: "자동차의 전기 회로 도면에서 S-D 기호는 주로 무엇을 나타냅니까?",
    options: ["솔레노이드(Solenoid)", "다이오드(Diode)", "스파크 플러그(Spark Plug)", "서지 흡수 다이오드(Surge Absorber Diode)"],
    answer: 3,
    explain: "S-D 또는 S.D.는 Surge Absorber Diode를 나타내며, 유도성 부하 차단 시 발생하는 서지 전압으로부터 반도체 소자를 보호하는 역할을 합니다."
  },
  {
    question: "자동차 회로에서 인덕터(Inductor, 코일)가 수행하는 주요 역할은 무엇입니까?",
    options: ["전류의 흐름을 일정하게 유지한다.", "전압을 일정하게 유지한다.", "교류를 직류로 변환한다.", "직류를 차단하고 교류를 통과시킨다."],
    answer: 0,
    explain: "인덕터는 자기장 형태로 에너지를 저장하며, 전류의 변화를 방해하는 특성을 가지고 있어, 회로에서 전류의 급격한 변화를 막고 필터링에 사용됩니다."
  },
  {
    question: "차량의 스마트키(Smart Key) 시스템에서, 운전자가 차량에 접근했을 때 도어 잠금 해제를 위해 사용되는 통신 방식은 무엇입니까?",
    options: ["단거리 고주파(RF) 통신", "장거리 위성 통신", "초광대역(UWB) 통신", "적외선(IR) 통신"],
    answer: 2,
    explain: "최신 스마트키 시스템은 UWB(Ultra-Wideband) 통신을 사용하여 키와 차량 간의 정확한 거리와 위치를 파악하여 도어 잠금 해제 및 시동 권한을 제어합니다. "
  },
  {
    question: "자동차 전기 회로에서 단락(Short Circuit)이 발생했을 때 나타나는 현상으로 가장 적절한 것은 무엇입니까?",
    options: ["회로의 전체 저항이 무한대로 증가한다.", "회로에 흐르는 전류가 급격히 감소한다.", "회로의 전체 저항이 거의 0에 가까워지고 전류가 과도하게 증가한다.", "부하(램프, 모터)가 느리게 작동한다."],
    answer: 2,
    explain: "단락(Short Circuit)은 부하를 거치지 않고 전원(+)과 접지(-)가 직접 연결되는 상태로, 저항이 극도로 낮아져 과도한 전류(Overcurrent)가 흐르고 퓨즈가 단선됩니다."
  },
  {
    question: "엔진의 실린더마다 독립적인 점화 코일을 사용하여 점화 효율을 극대화하는 시스템은 무엇입니까?",
    options: ["분배기식 점화(Distributor Ignition)", "배전기식 점화", "직접 분사식(Direct Injection)", "개별 점화 코일(Coil On Plug, COP) 방식"],
    answer: 3,
    explain: "COP(Coil On Plug) 방식은 각 실린더의 스파크 플러그 위에 개별적인 점화 코일을 장착하여 배선 손실을 줄이고 점화 에너지 및 제어 정밀도를 높인 시스템입니다."
  },
  {
    question: "자동차 전장품의 전자파 적합성(EMC/EMI) 시험을 하는 주된 목적은 무엇입니까?",
    options: ["물리적 충격에 대한 내구성 확인", "부품의 수명 테스트", "전장품이 발생시키는 전자파가 다른 부품에 영향을 주거나 외부 전자파에 영향을 받지 않도록 하는 것", "방수 능력 테스트"],
    answer: 2,
    explain: "EMC(Electromagnetic Compatibility) 시험은 차량 내 전장품들이 서로 간에, 그리고 외부 환경으로부터 전자파 간섭(EMI) 없이 안정적으로 작동하는지 확인하는 것입니다."
  },
  {
    question: "발전기가 충전 상태일 때, 배터리에서 발전기로 전류가 역류하는 것을 방지하는 역할을 하는 다이오드는 무엇입니까?",
    options: ["여자 다이오드", "정류 다이오드", "역류 방지 다이오드", "제너 다이오드"],
    answer: 2,
    explain: "발전기 출력부에 설치된 정류 다이오드는 기본적으로 역류 방지 기능을 수행하며, 특히 배터리에서 발전기로 역전류가 흐르는 것을 효과적으로 막아 발전기를 보호합니다."
  },
  {
    question: "트랜지스터를 이용한 스위칭 회로에서, 컬렉터(Collector)에 연결된 부하(Load)가 접지(-)가 아닌 전원(+)에 연결되는 방식은 무엇입니까?",
    options: ["푸시-풀(Push-Pull) 방식", "하이 사이드(High-Side) 스위칭", "로우 사이드(Low-Side) 스위칭", "개방 컬렉터(Open Collector) 방식"],
    answer: 2,
    explain: "로우 사이드(Low-Side) 스위칭은 부하가 전원(+)에 직접 연결되고, 트랜지스터가 부하의 접지(-) 경로를 스위칭하여 전류를 제어하는 방식입니다. ECU 출력부에서 가장 흔하게 사용됩니다."
  },
  {
    question: "자동차의 주행 가능 거리를 정확하게 계산하기 위해, ECU가 연료 레벨 센서 신호 외에 반드시 참고해야 하는 추가적인 정보는 무엇입니까?",
    options: ["차량의 색상", "운전자의 몸무게", "엔진의 실제 연료 소모량(연비 데이터)", "오디오 볼륨"],
    answer: 2,
    explain: "주행 가능 거리는 남은 연료량과 최근의 평균 연비(실제 연료 소모량)를 곱하여 계산해야 정확합니다."
  },
  {
    question: "전기차(EV)에서 고전압 배터리와 저전압(12V) 시스템 간에 전력을 변환하여 저전압 시스템에 전원을 공급하는 장치는 무엇입니까?",
    options: ["AC 충전기", "모터 제어기(MCU)", "DC-DC 컨버터(Converter)", "인버터"],
    answer: 2,
    explain: "DC-DC 컨버터는 고전압 배터리의 직류 전압(예: 400V)을 차량의 표준 직류 전압(12V)으로 낮춰서 일반적인 전장품과 12V 배터리를 충전하는 역할을 합니다. "
  },
  {
    question: "자동차 정비 시, 단락(Short Circuit) 테스트의 주된 목적은 무엇입니까?",
    options: ["배터리의 충전율 확인", "특정 회로의 과도한 전류 흐름 경로 확인", "센서의 출력 전압 측정", "릴레이 코일의 저항 측정"],
    answer: 1,
    explain: "단락 테스트는 전원선과 접지선 또는 두 신호선 간에 의도치 않은 접촉이 발생하여 과도한 전류가 흐르는 경로를 찾는 데 목적이 있습니다."
  },
  {
    question: "자동차의 안전 시스템 중, 충돌 시 에어백 전개 여부를 결정하기 위해 가장 중요한 센서는 무엇입니까?",
    options: ["차고 센서", "측면 충돌 센서 및 가속도 센서", "온도 센서", "매니폴드 압력 센서"],
    answer: 1,
    explain: "에어백 시스템은 충돌 센서(가속도 센서)가 감지한 차량의 급격한 감속도와 충돌 방향 정보를 분석하여 에어백 전개 여부 및 시점을 결정합니다."
  },
  {
    question: "차량의 스마트 도어 잠금 장치에서, 도어 잠금/해제 명령을 수행하기 위해 사용되는 액추에이터는 무엇입니까?",
    options: ["솔레노이드 또는 DC 모터", "릴레이", "압력 센서", "서미스터"],
    answer: 0,
    explain: "도어 잠금 장치는 ECU의 전기 신호를 받아 내부의 솔레노이드나 소형 DC 모터를 구동하여 기계적인 잠금 장치를 작동시킵니다."
  },
  {
    question: "LED(Light Emitting Diode)를 사용하는 자동차 후미등이 일반 전구와 비교했을 때 가지는 기술적 이점 중, 안전성 측면에서 가장 중요한 것은 무엇입니까?",
    options: ["더 밝은 빛을 낸다.", "전력 소모가 적다.", "열 발생이 적다.", "응답 속도가 빨라 후방 운전자가 제동을 더 빨리 인지한다."],
    answer: 3,
    explain: "LED는 응답 속도가 매우 빨라 브레이크를 밟는 순간 거의 지연 없이 불이 들어오므로, 후방 운전자가 제동 상황을 더 빨리 인지하여 추돌 사고 위험을 줄일 수 있습니다."
  },
  {
    question: "자동차의 계기판에서 속도계가 정확하지 않거나 오작동할 때, 가장 먼저 점검해야 할 입력 센서는 무엇입니까?",
    options: ["산소 센서", "흡기 온도 센서", "차속 센서(VSS) 또는 휠 스피드 센서", "냉각수 온도 센서"],
    answer: 2,
    explain: "차속 센서(Vehicle Speed Sensor, VSS)나 휠 스피드 센서는 차량의 실제 속도를 측정하여 ECU 및 계기판에 전달하는 핵심 센서이므로, 속도계 오작동 시 가장 먼저 점검해야 합니다."
  },
  {
    question: "자동차의 전기 회로 도면에서 R 기호는 주로 무엇을 나타내며, 그 단위는 무엇입니까?",
    options: ["릴레이(Relay), 단위: 암페어(A)", "저항(Resistor), 단위: 옴(Ω)", "정류기(Rectifier), 단위: 볼트(V)", "레귤레이터(Regulator), 단위: 와트(W)"],
    answer: 1,
    explain: "회로 도면에서 R은 저항(Resistor)을 나타내며, 단위는 옴($\Omega$)입니다."
  },
  {
    question: "자동차의 ECU가 플래시 메모리에 저장된 소프트웨어 프로그램을 업데이트하거나 설정을 변경하는 작업을 무엇이라고 합니까?",
    options: ["진단", "페일 세이프", "프로그래밍 또는 코딩", "데이터 로깅"],
    answer: 2,
    explain: "ECU의 소프트웨어를 덮어쓰거나, 차량의 옵션 설정(예: 시동 방지, 조명 설정)을 변경하는 작업을 프로그래밍(Programming) 또는 코딩(Coding)이라고 합니다."
  }
];

// 문제/보기 랜덤 섞기
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }
  
  // ✅ 문제 순서 랜덤 + 60문제 제한
  let questions = shuffleArray([...industry010403]).slice(0, 60);
  
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
    status.innerHTML = `<span id="scoreDisplay">자동차전기전자회로분석 3회차 총점: ${score}/${questions.length}</span>`;
  
    // 제출 버튼 제거
    document.getElementById("submitBtn").style.display = "none";
  
    // 결과창 표시
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<h2>자동차전기전자회로분석 3회차 총점: ${score}/${questions.length}</h2>`;
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