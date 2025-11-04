// -----------------------------
// 문제 배열
export const industry010401 = [
   {    
    question: "차량 통신 시스템 중, 두 가닥의 꼬인 선(Twisted Pair)을 사용하여 고속의 데이터 전송 및 높은 신뢰성을 가지며, 주로 엔진 및 변속기 제어와 같은 중요 시스템에 사용되는 네트워크는 무엇입니까?",
    options: ["LIN", "MOST", "CAN", "FlexRay"],
    answer: 2,
    explain: "CAN(Controller Area Network)은 꼬인 두 가닥의 선을 사용하며, 통신 속도가 빠르고 신뢰성이 높아 차량의 핵심 제어 시스템(엔진, 변속기 등)에 주로 적용됩니다."
  },
  {
    question: "자동차 전기 회로에서 과전류 발생 시 회로를 보호하기 위해 사용되며, 재사용이 불가능하고 교체가 필요한 가장 기본적인 보호 장치는 무엇입니까?",
    options: ["차단기(Circuit Breaker)", "퓨즈(Fuse)", "릴레이(Relay)", "서미스터(Thermistor)"],
    answer: 1,
    explain: "퓨즈(Fuse)는 설정된 전류 이상의 과전류가 흐르면 내부의 금속선이 끊어져 회로를 개방함으로써 다른 전기 부품의 손상을 방지하는 일회성 보호 장치입니다."
  },
  {
    question: "ECU가 비교적 낮은 전류의 제어 신호로 대용량 부하나 높은 전류가 필요한 부품(예: 헤드램프, 혼)을 안정적으로 스위칭하기 위해 사용하는 전자기계식 스위칭 장치는 무엇입습니까?",
    options: ["컨트롤 유닛(ECU)", "레귤레이터(Regulator)", "트랜지스터(Transistor)", "릴레이(Relay)"],
    answer: 3,
    explain: "릴레이(Relay)는 코일에 흐르는 낮은 전류로 전자석을 작동시켜 접점을 개폐함으로써, 고전류가 필요한 부하 회로를 제어하는 데 사용됩니다."
  },
  {
    question: "P-N 접합으로 구성되어 있으며, 전기를 한 방향으로만 흐르게 하는 특성을 이용하여 교류를 직류로 변환하는 정류 작용에 주로 사용되는 반도체 소자는 무엇입니까?",
    options: ["트랜지스터(Transistor)", "제너 다이오드(Zener Diode)", "다이오드(Diode)", "콘덴서(Capacitor)"],
    answer: 2,
    explain: "다이오드(Diode)는 한 방향으로만 전류를 흐르게 하는 정류 특성을 가지고 있어, 발전기 출력의 교류(AC)를 직류(DC)로 변환하는 데 필수적으로 사용됩니다."
  },
  {
    question: "자동차의 각종 센서로부터 입력된 신호를 받아 미리 프로그램된 논리에 따라 분석하고, 최종적으로 액추에이터를 구동하는 출력 신호를 생성하여 차량의 기능을 제어하는 핵심 장치는 무엇입니까?",
    options: ["게이지 클러스터", "ECU(전자 제어 장치)", "배터리", "점화 코일"],
    answer: 1,
    explain: "ECU(Electronic Control Unit), 즉 전자 제어 장치는 센서 신호를 처리하고 계산하여 엔진, 변속기, 제동 등 차량의 거의 모든 기능을 제어하는 중앙 두뇌 역할을 합니다."
  },
  {
    question: "자동차의 발전기(알터네이터)가 수행하는 주요 기능은 무엇입니까?",
    options: ["차량 속도 감지 및 보고", "엔진 시동을 위한 전력 공급", "연료 분사량 정밀 제어", "운행 중 배터리 충전 및 전장 부하에 전력 공급"],
    answer: 3,
    explain: "발전기(알터네이터)는 엔진의 회전력을 이용하여 전기를 생산하며, 이 전기로 운행 중에 소모되는 전장 부하에 전력을 공급하고 동시에 배터리를 충전하는 역할을 합니다."
  },
  {
    question: "직렬 회로에 대한 설명으로 옳은 것은 무엇입니까?",
    options: ["전체 저항은 각 저항의 역수를 합한 값의 역수와 같다.", "전류의 흐름이 여러 경로로 나누어진다.", "각 저항에 걸리는 전압은 모두 동일하다.", "회로 내 모든 지점의 전류는 일정하다."],
    answer: 3,
    explain: "직렬 회로에서는 전류가 흐르는 경로가 하나뿐이므로, 회로 내 모든 지점에서의 전류의 크기는 일정합니다. 전압은 각 저항값에 비례하여 분배됩니다."
  },
  {
    question: "CAN 통신에 비해 전송 속도는 느리지만, 적은 수의 선으로 통신하며 주로 창문, 시트, 도어 잠금 장치와 같은 보조 시스템에 사용되는 통신 방식은 무엇입니까?",
    options: ["LIN(Local Interconnect Network)", "FlexRay", "Ethernet", "Optical Fiber"],
    answer: 0,
    explain: "LIN(Local Interconnect Network)은 CAN보다 저렴하고 간단하며 속도가 느린 단선(또는 두 선) 통신 방식으로, 보조적인 바디 전자 장치 제어에 주로 사용됩니다."
  },
  {
    question: "압력 센서 중, 압력 변화에 따라 저항값이 변하는 압저항 효과(Piezoresistive Effect)를 이용하여 엔진 흡기 매니폴드 압력이나 브레이크 압력을 측정하는 데 주로 사용되는 센서는 무엇입니까?",
    options: ["열전쌍(Thermocouple)", "포토 다이오드(Photo Diode)", "스트레인 게이지(Strain Gauge)형 압력 센서", "초음파 센서(Ultrasonic Sensor)"],
    answer: 2,
    explain: "스트레인 게이지(Strain Gauge)는 압력이 가해지면 저항이 변하는 특성을 이용하여 압력을 측정하며, 이는 매니폴드 압력 센서(MAPS)와 같은 자동차 압력 측정에 널리 사용됩니다."
  },
  {
    question: "자동차 시동 시 배터리의 전압이 순간적으로 낮아지는 것을 방지하고, 회로에 과도한 서지 전압이 유입되는 것을 막기 위해 회로에 병렬로 연결되어 전압 변동을 흡수하는 부품은 무엇입니까?",
    options: ["서지 흡수 다이오드(Surge Absorber Diode)", "볼라스타 저항(Ballast Resistor)", "코일(Coil)", "가변 저항(Variable Resistor)"],
    answer: 0,
    explain: "서지 흡수 다이오드(Surge Absorber Diode)는 회로에 병렬로 연결되어 순간적인 고전압(서지 전압)을 흡수하여 민감한 전자 부품을 보호하는 역할을 합니다."
  },
  {
    question: "자동차의 각종 센서 중, NTC(Negative Temperature Coefficient) 서미스터를 사용하여 측정하는 것이 일반적인 것은 무엇입니까?",
    options: ["산소 농도", "흡기 매니폴드 압력", "냉각수 온도", "휠 속도"],
    answer: 2,
    explain: "NTC 서미스터는 온도가 증가하면 저항값이 감소하는 특성을 가지며, 이를 이용하여 엔진 냉각수 온도, 흡기 온도 등을 측정하는 데 널리 사용됩니다."
  },
  {
    question: "엔진 ECU에서 출력 신호를 받아 흡입 공기량을 조절하여 엔진 출력을 제어하는 장치는 무엇입니까?",
    options: ["산소 센서", "스로틀 보디(Throttle Body)", "인젝터(Injector)", "점화 코일"],
    answer: 1,
    explain: "스로틀 보디는 운전자의 가속 페달 조작이나 ECU 신호에 따라 밸브를 열거나 닫아 엔진으로 유입되는 공기량을 조절함으로써 엔진 출력을 제어합니다."
  },
  {
    question: "배터리의 방전 상태를 나타내는 가장 일반적인 기준으로, 화학 반응을 통해 측정하는 것은 무엇입니까?",
    options: ["터미널 간의 저항", "전해액의 비중", "배터리 케이스의 온도", "내부 전극의 길이"],
    answer: 1,
    explain: "납축전지에서 충전 상태는 전해액(묽은 황산)의 밀도(비중)를 측정하여 판단하며, 비중이 낮을수록 방전된 상태입니다."
  },
  {
    question: "자동차 회로에서 '접지(Ground)'의 역할로 가장 적절한 것은 무엇입니까?",
    options: ["회로의 전압을 증가시킨다.", "전류 흐름을 차단한다.", "전류의 귀환 경로를 제공하고 전위의 기준점(0V)을 설정한다.", "저항값을 일정하게 유지한다."],
    answer: 2,
    explain: "접지(Ground)는 전기의 흐름이 끝나는 귀환 경로를 제공하고, 차량 전체 전기 시스템의 전압 기준점(보통 0V)을 설정하는 역할을 합니다."
  },
  {
    question: "자동차 통신 프로토콜 중, 고속 통신이 필요한 CAN 통신의 단점을 보완하기 위해 개발되었으며, 더욱 높은 전송 속도와 시간 동기화 기능을 제공하는 것은 무엇입니까?",
    options: ["J1850", "FlexRay", "K-Line", "MOST"],
    answer: 1,
    explain: "FlexRay는 CAN에 비해 훨씬 빠른 통신 속도와 엄격한 시간 동기화(Deterministic) 기능을 제공하여, 자율 주행 및 능동형 안전 시스템(ADAS)과 같은 고성능 어플리케이션에 사용됩니다."
  },
  {
    question: "홀 효과(Hall Effect)를 이용하여 회전하는 부품의 속도나 위치를 감지하는 센서의 특징으로 옳지 않은 것은 무엇입니까?",
    options: ["비접촉식으로 작동한다.", "저속에서도 정확한 신호 출력이 가능하다.", "외부 자기장의 영향을 받지 않는다.", "캠축 위치 센서나 휠 속도 센서로 사용된다."],
    answer: 2,
    explain: "홀 효과 센서는 기본적으로 자기장의 변화를 이용하여 작동하므로, 외부 자기장의 영향을 받을 수 있습니다. 저속 및 정지 상태에서도 정확한 위치 정보를 제공하는 것이 장점입니다."
  },
  {
    question: "병렬 회로에서 각 저항에 걸리는 전압의 관계는 어떻게 됩니까?",
    options: ["각 저항값에 비례하여 다르다.", "전류에 비례하여 다르다.", "모두 동일하다.", "전체 전압의 절반이다."],
    answer: 2,
    explain: "병렬 회로에서는 모든 부하(저항)가 전원의 양단에 공통으로 연결되므로, 각 저항에 걸리는 전압은 전원 전압과 동일합니다."
  },
  {
    question: "OBD-II(On-Board Diagnostics II) 시스템의 주요 역할이 아닌 것은 무엇입니까?",
    options: ["차량의 고장 코드(DTC) 저장 및 표시", "배출가스 관련 시스템 모니터링", "운전자의 운전 습관 분석 및 보고", "정비사가 진단 장비를 연결하여 데이터 확인 가능"],
    answer: 2,
    explain: "OBD-II 시스템은 주로 배출가스 관련 부품의 기능 상태를 실시간으로 감시하고, 고장이 발생했을 때 운전자에게 알리고 진단 코드를 저장하는 역할을 합니다. 운전 습관 분석은 주 역할이 아닙니다."
  },
  {
    question: "파워 윈도우 스위치 회로에서 운전자가 스위치를 작동하지 않아도 ECU가 모터를 구동하여 창문을 끝까지 올리거나 내리는 기능을 가능하게 하는 것은 주로 어떤 회로를 이용한 것입니까?",
    options: ["단순 ON/OFF 회로", "저항 분할 회로", "자동 릴레이 회로", "래치(Latch) 회로 또는 메모리 제어 회로"],
    answer: 3,
    explain: "자동 원터치(Auto Up/Down) 기능은 스위치 신호를 ECU가 짧게 감지했을 때, ECU 내부의 제어 로직(래치 또는 메모리)이 모터 구동 신호를 계속 유지하도록 하여 구현됩니다."
  },
  {
    question: "자동차의 에어백(SRS) 시스템에서 충돌 발생 여부를 감지하고, 에어백 및 프리텐셔너를 작동시키는 신호를 생성하는 핵심 제어 장치는 무엇입니까?",
    options: ["BCM(바디 제어 모듈)", "ECM(엔진 제어 모듈)", "TCM(변속기 제어 모듈)", "SRSCM(에어백 제어 모듈)"],
    answer: 3,
    explain: "SRS(Supplemental Restraint System)CM, 즉 에어백 제어 모듈은 충돌 센서의 신호를 분석하여 위험을 판단하고, 에어백 및 안전벨트 프리텐셔너를 작동시키는 폭발 신호를 보냅니다."
  },
  {
    question: "자동차 회로의 전압 강하(Voltage Drop) 테스트를 수행하는 주된 목적은 무엇입니까?",
    options: ["배터리 충전 상태를 확인하기 위해", "퓨즈의 단선을 확인하기 위해", "회로 내 과도한 저항(불량한 접촉, 부식 등)의 존재를 확인하기 위해", "릴레이의 작동 여부를 확인하기 위해"],
    answer: 2,
    explain: "전압 강하 테스트는 회로에 부하가 걸린 상태에서 도선이나 접촉부의 불필요한 저항(손실)으로 인해 전압이 얼마나 떨어지는지 측정하여, 회로 불량을 진단하는 데 사용됩니다."
  },
  {
    question: "LED(Light Emitting Diode)를 자동차 조명에 사용할 때 얻을 수 있는 장점이 아닌 것은 무엇입니까?",
    options: ["수명이 길다.", "응답 속도가 빠르다.", "전력 소모가 많다.", "다양한 디자인으로 구현이 용이하다."],
    answer: 2,
    explain: "LED는 일반 백열전구에 비해 전력 소모가 매우 적고, 발열도 낮으며, 수명이 길고 응답 속도가 빠르다는 장점이 있습니다."
  },
  {
    question: "자동차에 사용되는 센서 중, 바퀴의 회전 속도 차이를 감지하여 ABS/ESC 시스템의 제동력 분배에 핵심적인 정보를 제공하는 센서는 무엇입니까?",
    options: ["흡기 온도 센서(IAT)", "크랭크샤프트 포지션 센서(CKPS)", "휠 스피드 센서(WSS)", "스로틀 포지션 센서(TPS)"],
    answer: 2,
    explain: "휠 스피드 센서(Wheel Speed Sensor)는 각 바퀴의 회전 속도를 측정하여 잠김(ABS)이나 미끄러짐(ESC) 상황을 판단하고 제어하는 데 사용됩니다."
  },
  {
    question: "K-Line 통신 방식의 특징으로 가장 적절한 것은 무엇입니까?",
    options: ["대부분의 최신 차량에서 고속 통신을 위해 사용된다.", "단일 선(Single Wire)을 이용하는 비동기 직렬 통신 방식이다.", "차량의 멀티미디어 데이터 전송에 특화되어 있다.", "데이터 전송 속도가 1Mbps 이상이다."],
    answer: 1,
    explain: "K-Line(ISO 9141)은 주로 과거 차량의 진단용으로 사용되었으며, 단일 선을 이용하는 저속의 비동기 직렬 통신 방식입니다."
  },
  {
    question: "자동차가 정지 상태에서 시동을 걸 때 스타터 모터에 가장 큰 전류가 흐르는 현상을 제어하기 위해 사용되는 부품은 무엇입니까?",
    options: ["스파크 플러그", "퓨즈 박스", "스타터 릴레이/솔레노이드", "에어컨 컴프레서"],
    answer: 2,
    explain: "스타터 모터는 매우 큰 시동 전류(수백 암페어)를 필요로 하므로, 운전자가 키를 돌려 발생하는 낮은 제어 전류로 이 대전류를 스위칭할 수 있도록 스타터 릴레이(솔레노이드)가 사용됩니다."
  },
  {
    question: "회로도에서 일반적으로 굵은 실선으로 표시되며, 배터리 플러스(+) 단자에서 시작하여 전력 소비 장치(부하)로 전류를 공급하는 도선을 무엇이라고 합니까?",
    options: ["접지선(Ground Line)", "제어선(Control Line)", "B+선(Power Line)", "시그널선(Signal Line)"],
    answer: 2,
    explain: "B+선(Power Line) 또는 전원선은 배터리 또는 발전기에서 부하로 전력을 공급하는 주 경로이며, 일반적으로 굵은 선으로 표시됩니다."
  },
  {
    question: "트랜지스터를 이용한 ECU의 출력 회로에서, 트랜지스터가 포화 영역에서 작동할 때의 상태로 옳은 것은 무엇입니까?",
    options: ["트랜지스터가 Off 상태이다.", "트랜지스터가 최대 저항 상태이다.", "트랜지스터가 스위치 Off 직전 상태이다.", "트랜지스터가 스위치 On 상태로 동작한다."],
    answer: 3,
    explain: "트랜지스터가 포화 영역(Saturation Region)에서 작동한다는 것은 스위치가 완전히 닫혀(ON) 최소 저항을 가지고 전류를 최대로 흘려보내는 상태를 의미합니다."
  },
  {
    question: "자동차의 오디오, 내비게이션, 인포테인먼트 시스템의 대용량 멀티미디어 데이터를 고속으로 전송하기 위해 광섬유(Optical Fiber)를 사용하는 통신 방식은 무엇입니까?",
    options: ["CAN", "LIN", "MOST", "K-Line"],
    answer: 2,
    explain: "MOST(Media Oriented System Transport)는 높은 대역폭을 필요로 하는 오디오, 비디오 등 멀티미디어 전송을 위해 광섬유 케이블을 사용하는 통신 방식입니다."
  },
  {
    question: "엔진의 크랭크샤프트 위치를 감지하여 엔진 속도(RPM)와 피스톤 위치 정보를 ECU에 제공하는 센서는 무엇입니까?",
    options: ["산소 센서(Oxygen Sensor)", "크랭크샤프트 포지션 센서(CKPS)", "맵 센서(MAPS)", "흡기 온도 센서(IATS)"],
    answer: 1,
    explain: "CKPS(Crankshaft Position Sensor)는 엔진의 크랭크샤프트 회전을 감지하여 RPM과 실린더의 피스톤 위치를 ECU에 전달하는 핵심 센서입니다."
  },
  {
    question: "일반적인 자동차 회로에서 배터리 역극성 연결 시 회로 보호를 위해 가장 흔하게 사용되는 다이오드는 무엇입니까?",
    options: ["제너 다이오드(Zener Diode)", "정류 다이오드(Rectifier Diode)", "쇼트키 다이오드(Schottky Diode)", "LED(Light Emitting Diode)"],
    answer: 1,
    explain: "정류 다이오드는 전류를 한 방향으로만 흐르게 하는 특성이 있어, 배터리를 반대로 연결했을 때(역극성) 전기가 역류하여 전자 장치가 손상되는 것을 방지하기 위해 직렬로 사용됩니다."
  },
  {
    question: "전압 측정 시 멀티미터(Multi-meter)를 회로에 연결하는 올바른 방법은 무엇입니까?",
    options: ["회로에 직렬로 연결하고 전원을 차단한다.", "회로에 병렬로 연결하고 전원을 인가한다.", "회로에 직렬로 연결하고 전원을 인가한다.", "회로에 병렬로 연결하고 전원을 차단한다."],
    answer: 1,
    explain: "전압은 항상 부하에 병렬로 연결하여 측정해야 하며, 측정을 위해서는 회로에 전원(전압)이 공급되어야 합니다."
  },
  {
    question: "점화 코일에서 1차 코일의 낮은 전압을 수만 볼트의 높은 전압으로 유도하여 스파크 플러그에 공급하는 원리는 무엇입니까?",
    options: ["줄의 법칙(Joule's Law)", "옴의 법칙(Ohm's Law)", "패러데이의 전자기 유도 법칙", "렌츠의 법칙"],
    answer: 2,
    explain: "점화 코일은 변압기 원리를 이용하며, 1차 코일의 전류를 급격히 차단할 때 발생하는 자기장 변화가 2차 코일에 고전압을 유도하는 것은 패러데이의 전자기 유도 법칙에 따릅니다."
  },
  {
    question: "ABS(Anti-lock Brake System)에서 브레이크를 밟았을 때 바퀴 잠김을 방지하기 위해 제동 유압을 조절하는 핵심 액추에이터는 무엇입니까?",
    options: ["진공 부스터", "브레이크 페달 센서", "유압 제어 모듈(HCU/Modulator)", "마스터 실린더"],
    answer: 2,
    explain: "ABS 시스템은 유압 제어 모듈(Hydraulic Control Unit) 내의 솔레노이드 밸브를 이용하여 운전자의 브레이크 페달 조작과 관계없이 바퀴별로 유압을 독립적으로 조절하여 바퀴 잠김을 방지합니다."
  },
  {
    question: "엔진의 공연비(A/F)를 측정하여 ECU가 연료 분사량을 조절하도록 피드백 신호를 제공하는 센서는 무엇입니까?",
    options: ["산소 센서(Oxygen Sensor)", "매스 에어 플로우 센서(MAFS)", "노크 센서(Knock Sensor)", "오일 압력 센서"],
    answer: 0,
    explain: "산소 센서(Lambda Sensor)는 배기가스 내의 산소 농도를 측정하여 공연비를 파악하고, ECU에 연료 분사량 조절을 위한 피드백 신호(closed-loop control)를 제공합니다."
  },
  {
    question: "자동차가 주행 중 전압이 불안정하거나 시동이 꺼지는 현상이 발생했을 때 가장 먼저 점검해야 할 부품은 무엇입니까?",
    options: ["와이퍼 모터", "파워 윈도우 스위치", "발전기(알터네이터)", "에어컨 팬"],
    answer: 2,
    explain: "발전기(알터네이터)는 운행 중 모든 전장 부하에 전력을 공급하고 배터리를 충전하는 역할을 하므로, 전압 불안정 및 시동 꺼짐의 가장 큰 원인 중 하나가 됩니다."
  },
  {
    question: "배터리의 전해액이 새거나 외부로 유출되어 차량의 금속 부품을 부식시키는 현상을 무엇이라고 합니까?",
    options: ["단락(Short Circuit)", "배터리 충전", "산화 현상", "배터리 누액 및 부식(Corrosion)"],
    answer: 3,
    explain: "배터리 내부의 황산액이 누출되어 터미널이나 주변 금속 부품과 반응하면 심한 부식(백색 또는 청록색 가루)이 발생하여 접촉 불량 및 전압 강하를 유발합니다."
  },
  {
    question: "멀티미터로 저항을 측정할 때 반드시 지켜야 할 사항은 무엇입니까?",
    options: ["회로에 전압이 인가된 상태여야 한다.", "측정하고자 하는 부품에만 전류가 흐르도록 한다.", "측정 대상 회로에서 전원을 완전히 분리하거나 차단해야 한다.", "측정 대상이 움직이는 부품이어야 한다."],
    answer: 2,
    explain: "저항 측정 시에는 측정 대상 부품이 회로에서 분리되었거나, 적어도 전원이 완전히 차단된 상태여야 정확한 값을 얻을 수 있고 멀티미터의 손상을 방지할 수 있습니다."
  },
  {
    question: "ECU 내부에서 센서 신호를 디지털 값으로 변환하는 과정을 담당하는 부품은 무엇입니까?",
    options: ["ROM(Read Only Memory)", "MPU(Micro Processor Unit)", "RAM(Random Access Memory)", "A/D 컨버터(Analog to Digital Converter)"],
    answer: 3,
    explain: "자동차 센서의 아날로그 신호를 ECU의 디지털 프로세서가 처리할 수 있도록 디지털 신호로 변환하는 역할을 A/D 컨버터가 수행합니다."
  },
  {
    question: "와이퍼 모터의 저속/고속 운전을 위해 모터 내부에서 코일 권선 방식이 다르게 설계되어 두 가지 속도를 구현하는 방식은 무엇입니까?",
    options: ["직렬/병렬 회로 전환 방식", "가변 저항 제어 방식", "2단 권선 방식(Hi/Lo Speed Winding)", "PWM(Pulse Width Modulation) 제어 방식"],
    answer: 2,
    explain: "일반적인 와이퍼 모터는 모터 내부에 저속용 권선과 고속용 권선을 분리하여 설계함으로써, 입력 전원 연결을 달리하여 2단 속도를 구현합니다."
  },
  {
    question: "접촉식으로 작동하며, 연료 탱크 내의 연료 레벨에 따라 저항값이 변화하여 연료 잔량을 측정하는 센서는 무엇입니까?",
    options: ["압력 센서", "온도 센서", "플로트(Float) 타입 레벨 센서", "초음파 센서"],
    answer: 2,
    explain: "연료 레벨 센서는 물에 뜨는 플로트(Float)에 연결된 가변 저항(Potentiometer)을 이용하여 연료 수위에 따라 저항값이 변하고, 이를 ECU가 전기 신호로 읽어 연료 잔량을 계산합니다."
  }
];

// 문제/보기 랜덤 섞기
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }
  
  // ✅ 문제 순서 랜덤 + 60문제 제한
  let questions = shuffleArray([...industry010401]).slice(0, 60);
  
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
    status.innerHTML = `<span id="scoreDisplay">자동차전기전자회로분석 1회차 총점: ${score}/${questions.length}</span>`;
  
    // 제출 버튼 제거
    document.getElementById("submitBtn").style.display = "none";
  
    // 결과창 표시
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<h2>자동차전기전자회로분석 1회차 총점: ${score}/${questions.length}</h2>`;
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