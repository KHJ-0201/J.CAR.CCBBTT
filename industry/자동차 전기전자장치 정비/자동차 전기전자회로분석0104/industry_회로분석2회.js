// -----------------------------
// 문제 배열
export const industry010402 = [
    {   
    question: "자동차가 고속 주행 시, 앞차와의 거리를 측정하고 운전자가 설정한 속도를 유지하거나 앞차와의 안전거리를 자동으로 확보하는 데 사용되는 센서는 무엇입니까?",
    options: ["자이로 센서", "가속도 센서", "레이더 센서(Radar Sensor)", "광 센서(Light Sensor)"],
    answer: 2,
    explain: "레이더 센서(Radar Sensor)는 전파를 발사하고 되돌아오는 시간을 측정하여 앞차와의 정확한 거리와 상대 속도를 측정하며, 이는 주로 어댑티브 크루즈 컨트롤(ACC)에 사용됩니다."
  },
  {
    question: "DC 모터의 회전 방향을 바꾸기 위해 사용하는 방법이 아닌 것은 무엇입니까?",
    options: ["전원 극성을 반대로 연결한다.", "계자 코일의 극성을 반대로 한다.", "정류자(Commutator)의 분할 수를 변경한다.", "전기자(Armature) 코일의 극성을 반대로 한다."],
    answer: 2,
    explain: "DC 모터의 회전 방향은 인가 전원의 극성이나, 계자 또는 전기자의 극성을 반대로 연결함으로써 변경됩니다. 정류자의 분할 수는 모터의 성능 및 설계와 관련이 있습니다."
  },
  {
    question: "자동차에서 배터리를 충전하고 시동을 돕는 역할을 하는 고전류 스위칭 장치는 무엇이며, 주로 퓨즈와 배터리 사이에 설치됩니까?",
    options: ["브레이크 스위치", "이그니션 스위치", "메인 릴레이(Main Relay)", "솔레노이드 밸브"],
    answer: 2,
    explain: "메인 릴레이(Main Relay) 또는 메인 퓨즈는 차량의 주 전원 공급을 제어하고 보호하는 핵심 스위칭 장치로, 시동 및 충전 시스템에 큰 영향을 미칩니다."
  },
  {
    question: "회로 분석 시, 키르히호프의 전류 법칙(KCL)은 무엇에 관한 법칙입니까?",
    options: ["회로 내의 전력 소모", "폐회로 내의 전압 강하", "접속점(노드)으로 들어오고 나가는 전류의 합", "저항의 직렬 연결"],
    answer: 2,
    explain: "키르히호프의 전류 법칙(KCL: Kirchhoff's Current Law)은 회로의 한 접속점(Node)으로 들어오거나 나가는 모든 전류의 대수적 합은 0이라는 법칙입니다."
  },
  {
    question: "차량의 방향 지시등 회로에서, 전구의 단선(끊어짐) 여부를 감지하여 깜빡임 속도를 빠르게 변화시켜 운전자에게 경고하는 기능을 수행하는 것은 무엇입니까?",
    options: ["CAN 통신 모듈", "퓨즈 박스", "깜빡이 릴레이(Flasher Unit)", "정류자"],
    answer: 2,
    explain: "깜빡이 릴레이(Flasher Unit)는 방향 지시등의 부하 상태(전구의 저항)를 감지하여, 전구가 하나 단선되어 부하가 작아지면 깜빡임 속도를 두 배로 증가시켜 운전자에게 경고합니다."
  },
  {
    question: "자동차의 서스펜션 시스템에서 차량의 상하 움직임을 감지하여 전자 제어 서스펜션(ECS) 시스템에 입력 신호를 제공하는 센서는 무엇입니까?",
    options: ["압력 센서", "휠 스피드 센서", "차고 센서(Height Sensor)", "토크 센서"],
    answer: 2,
    explain: "차고 센서(Height Sensor)는 차량의 높이(차고)를 측정하여 노면 상태나 하중에 따른 차체 변화를 감지하고, ECS 시스템이 댐퍼의 감쇠력을 조절하도록 정보를 제공합니다."
  },
  {
    question: "트랜지스터를 전자 제어 스위치로 사용할 때, 베이스(B) 단자에 신호를 인가하여 컬렉터(C)와 이미터(E) 사이에 전류가 흐르게 하는 동작 방식은 무엇입습니까?",
    options: ["차단(Cut-off) 영역", "선형(Linear) 영역", "포화(Saturation) 영역", "제너 영역"],
    answer: 2,
    explain: "트랜지스터가 스위치 ON 상태로 작동하여 최대 전류를 흘릴 수 있는 영역을 포화 영역(Saturation Region)이라고 합니다."
  },
  {
    question: "ABS나 ESC 시스템에서 브레이크 유압을 조절하기 위해 사용되는 밸브로, ECU의 제어 신호에 따라 유압 라인을 열고 닫는 역할을 하는 액추에이터는 무엇입습니까?",
    options: ["체크 밸브", "릴리프 밸브", "솔레노이드 밸브(Solenoid Valve)", "매뉴얼 밸브"],
    answer: 2,
    explain: "솔레노이드 밸브(Solenoid Valve)는 전기 신호로 코일에 자기장을 발생시켜 밸브를 개폐하며, 유압 제어 모듈 내에서 유압의 흐름을 정밀하게 조절합니다."
  },
  {
    question: "자동차 통신선로 진단 시, 종단 저항(Termination Resistor)을 측정하는 주된 목적은 무엇입니까?",
    options: ["통신선의 절연 상태 확인", "통신 속도 측정", "통신 프로토콜 확인", "신호 반사 방지 및 통신선로의 정상 여부 확인"],
    answer: 3,
    explain: "CAN 통신 등에서는 신호의 반사를 막고 신호 무결성을 보장하기 위해 통신선의 양 끝에 종단 저항을 연결합니다. 이 저항의 값(일반적으로 60옴 또는 120옴)을 측정하여 통신선의 단선이나 단락 여부를 진단할 수 있습니다."
  },
  {
    question: "배터리 충전 시 전해액 온도가 상승하는 것을 방지하고, 과충전을 막기 위해 발전기 전압을 일정하게 유지시켜주는 장치는 무엇입니까?",
    options: ["다이오드 브리지", "정류자", "전압 조정기(Voltage Regulator)", "축전기(Capacitor)"],
    answer: 2,
    explain: "전압 조정기(Voltage Regulator)는 발전기가 생산하는 전압이 항상 13.5V ~ 14.5V 사이의 일정 범위 내에 있도록 계자 코일의 전류를 제어하여 과충전을 방지합니다."
  },
  {
    question: "병렬 회로의 특징으로 옳지 않은 것은 무엇입니까?",
    options: ["전체 전류는 각 가지에 흐르는 전류의 합과 같다.", "부하 중 하나가 단선되어도 다른 부하에는 계속 전류가 흐른다.", "각 부하에 걸리는 전압은 모두 동일하다.", "전체 합성 저항은 항상 개별 저항값 중 가장 큰 값보다 크다."],
    answer: 3,
    explain: "병렬 회로의 전체 합성 저항은 항상 개별 저항값 중 가장 작은 값보다 더 작아집니다."
  },
  {
    question: "전자 제어 시스템에서 액추에이터가 제 기능을 수행하지 못할 때, ECU가 시스템을 보호하기 위해 기본값으로 전환하여 운전을 가능하게 하는 기능을 무엇이라고 합니까?",
    options: ["캘리브레이션(Calibration)", "학습 기능(Learning Function)", "페일 세이프(Fail-Safe) 또는 림프 홈(Limp Home) 기능", "디버깅(Debugging)"],
    answer: 2,
    explain: "페일 세이프(Fail-Safe) 또는 림프 홈(Limp Home) 기능은 주요 센서나 액추에이터에 문제가 생겼을 때, 미리 설정된 안전한 기본값으로 전환하여 차량 운행을 최소한으로 유지할 수 있게 합니다."
  },
  {
    question: "크랭크샤프트 위치 센서(CKPS)의 출력 신호 중, 엔진의 실린더 상사점(TDC)을 정확하게 파악하기 위해 사용되는 것은 무엇입니까?",
    options: ["정지 상태 신호", "균일한 펄스 신호", "레퍼런스 마크(Reference Mark) 또는 결치(Missing Tooth) 신호", "연속적인 사인파"],
    answer: 2,
    explain: "CKPS 휠에는 보통 한 두 개의 이빨이 빠져 있는 결치(Missing Tooth) 부분이 있으며, ECU는 이 결치 신호를 기준으로 정확한 피스톤의 상사점(TDC)을 파악하고 점화 및 분사를 제어합니다."
  },
  {
    question: "전기 에너지를 화학 에너지 형태로 저장하고, 필요할 때 전기를 공급하는 자동차의 에너지 저장 장치는 무엇입니까?",
    options: ["콘덴서(Capacitor)", "인버터(Inverter)", "발전기(Alternator)", "배터리(Battery)"],
    answer: 3,
    explain: "배터리는 납과 황산의 화학 반응을 통해 전기 에너지를 저장하며, 시동, 조명, 정지 상태의 전장 부하에 전력을 공급합니다."
  },
  {
    question: "차량의 조향각을 감지하여 전자식 자세 제어 시스템(ESC)에 중요한 입력 정보를 제공하는 센서는 무엇입니까?",
    options: ["요 레이트 센서(Yaw Rate Sensor)", "휠 스피드 센서", "스티어링 휠 각 센서(Steering Angle Sensor)", "매니폴드 압력 센서"],
    answer: 2,
    explain: "스티어링 휠 각 센서(Steering Angle Sensor)는 운전자가 조향하는 각도를 측정하여, ECU가 운전자의 의도와 실제 차량의 움직임(요 레이트)을 비교할 수 있도록 합니다."
  },
  {
    question: "자동차에서 '암전류(Dark Current)'를 측정하는 주된 목적은 무엇입니까?",
    options: ["발전기의 최대 출력 확인", "시동 시 배터리 전압 강하량 확인", "시동이 꺼진 상태에서 배터리가 소모되는 전류량 확인", "점화 코일의 2차 전압 측정"],
    answer: 2,
    explain: "암전류(Dark Current)는 시동이 꺼지고 모든 장치가 비작동 상태일 때, ECU, 시계, 메모리 등 필수 장치로 인해 배터리가 소모하는 미세 전류입니다. 이 값이 높으면 방전 불량의 원인이 됩니다."
  },
  {
    question: "CAN 통신선로 진단 시, CAN-High 선과 CAN-Low 선 사이의 전압차(Differential Voltage)를 이용하는 이유로 가장 적절한 것은 무엇입니까?",
    options: ["배터리 전압의 정확한 측정", "통신선의 접지 불량 감지", "신호의 노이즈 영향 최소화", "데이터의 복구 기능 활성화"],
    answer: 2,
    explain: "CAN 통신은 두 선의 전압 차이를 이용하는 차동 신호(Differential Signaling) 방식을 사용하여, 외부 전기적 노이즈(EMI/RFI)가 두 선에 동시에 영향을 주더라도 신호의 무결성을 높여 노이즈의 영향을 최소화합니다."
  },
  {
    question: "자동차의 각종 램프와 계기판 조명에 주로 사용되며, 필라멘트가 열에 의해 발광하는 원리를 이용하는 가장 기본적인 조명 부품은 무엇입니까?",
    options: ["LED", "제논(Xenon) 램프", "할로겐 램프", "형광등"],
    answer: 2,
    explain: "할로겐 램프는 백열전구에 할로겐 가스를 첨가하여 필라멘트의 수명과 효율을 개선한 것으로, 헤드램프 및 각종 신호등에 널리 사용되어 왔습니다."
  },
  {
    question: "전기 회로에서 용량성 리액턴스(Capacitive Reactance)를 가지며, 교류(AC)는 통과시키고 직류(DC)는 차단하는 특성을 이용하여 회로에서 노이즈 제거 및 전압 안정화에 사용되는 부품은 무엇입습니까?",
    options: ["저항(Resistor)", "인덕터(Inductor)", "콘덴서(Capacitor)", "퓨즈(Fuse)"],
    answer: 2,
    explain: "콘덴서(Capacitor) 또는 축전기는 전하를 저장하는 능력을 가지며, 직류를 차단하고 교류를 통과시키는 특성을 이용하여 전원부의 노이즈 필터링 및 안정화에 사용됩니다."
  },
  {
    question: "엔진 ECU에서 인젝터(Injector)를 제어하여 연료를 분사하는 시간 또는 주기를 나타내는 용어는 무엇입니까?",
    options: ["점화 시기(Ignition Timing)", "듀티 사이클(Duty Cycle)", "분사 시점(Injection Timing)", "분사 펄스 폭(Injection Pulse Width)"],
    answer: 3,
    explain: "분사 펄스 폭(Injection Pulse Width)은 ECU가 인젝터에 전기를 공급하여 밸브를 열어주는 시간(ms)을 의미하며, 이 시간이 길수록 더 많은 연료가 분사됩니다."
  },
  {
    question: "자동차 진단기(스캐너)를 사용하여 고장 코드(DTC)를 읽을 때, 현재는 발생하지 않지만 과거에 한 번이라도 발생했던 고장 코드를 나타내는 상태는 무엇입니까?",
    options: ["현재(Present) 고장", "임시(Temporary) 고장", "히스토리(History) 고장", "영구(Permanent) 고장"],
    answer: 2,
    explain: "히스토리(History) 고장 코드는 과거에 고장이 발생했으나 현재는 고장 조건이 만족되지 않아 정상 작동 중인 상태를 의미합니다."
  },
  {
    question: "자동차 전기 회로에서 와이어의 단면적을 결정하는 가장 중요한 요소는 무엇입니까?",
    options: ["와이어의 길이", "와이어의 재질", "와이어가 전달해야 하는 최대 전류(허용 전류)", "와이어의 색상"],
    answer: 2,
    explain: "와이어의 단면적은 와이어에 흐르는 최대 허용 전류와 전압 강하를 고려하여 결정되어야 합니다. 전류가 클수록 더 굵은(단면적이 큰) 와이어가 필요합니다."
  },
  {
    question: "엔진의 크랭크샤프트가 회전할 때, 센서에서 발생하는 신호의 주파수를 측정하여 엔진 회전 속도(RPM)를 알아내는 방식은 무엇입니까?",
    options: ["저항 변화 방식", "유도 방식 또는 홀 효과 방식", "압전 효과 방식", "용량 변화 방식"],
    answer: 1,
    explain: "크랭크샤프트 포지션 센서(CKPS)는 주로 자기 유도 방식이나 홀 효과 방식을 사용하여 회전체(톤 휠)의 이빨이 지나갈 때마다 펄스 신호를 발생시키고, 이 펄스의 주파수가 엔진 RPM에 비례합니다."
  },
  {
    question: "하이 브리드 차량(HEV) 또는 전기차(EV)에서 고전압 배터리의 직류 전력(DC)을 모터 구동을 위한 교류 전력(AC)으로 변환하는 핵심 전력 변환 장치는 무엇입니까?",
    options: ["컨버터(Converter)", "변압기(Transformer)", "인버터(In버터)", "정류기(Rectifier)"],
    answer: 2,
    explain: "인버터(Inverter)는 DC(직류) 전력을 AC(교류) 전력으로 변환하여 모터에 공급함으로써 모터의 속도와 토크를 제어하는 역할을 합니다."
  },
  {
    question: "차량의 주차 보조 시스템(PAS)에서 물체와의 거리를 측정하기 위해 소리를 이용하는 센서는 무엇입니까?",
    options: ["레이더 센서", "초음파 센서(Ultrasonic Sensor)", "라이다 센서(LiDAR Sensor)", "가속도 센서"],
    answer: 1,
    explain: "초음파 센서(Ultrasonic Sensor)는 사람의 귀에 들리지 않는 초음파를 발사하고, 물체에 부딪혀 돌아오는 시간차를 측정하여 거리를 계산합니다. 이는 근거리 주차 보조 시스템에 주로 사용됩니다."
  },
  {
    question: "브레이크등 회로에서 운전자가 브레이크 페달을 밟았을 때 회로를 닫아 브레이크 램프에 전원을 공급하는 스위치는 무엇입니까?",
    options: ["이그니션 스위치", "파킹 브레이크 스위치", "브레이크 페달 스위치", "중립 안전 스위치"],
    answer: 2,
    explain: "브레이크 페달 스위치는 브레이크 페달이 눌렸을 때 접점이 닫히면서 브레이크 램프 회로를 완성하여 램프를 점등시킵니다."
  },
  {
    question: "자동차가 운행 중 롤(Roll), 피치(Pitch), 요(Yaw)와 같은 차량의 움직임을 감지하여 자세 제어 시스템(ESC)에 입력 정보를 제공하는 센서는 무엇입니까?",
    options: ["온도 센서", "압력 센서", "가속도 및 자이로 센서", "산소 센서"],
    answer: 2,
    explain: "가속도 센서는 차량의 선형 가속도를, 자이로 센서(Gyro Sensor)는 차량의 회전 각속도(요 레이트 등)를 측정하여 차량의 자세 및 운동 상태를 판단하는 데 필수적입니다."
  },
  {
    question: "CAN 통신에서 데이터가 전송될 때, 두 노드가 동시에 데이터를 전송하려고 할 경우 우선순위가 높은 메시지만 통신에 성공하는 방식을 무엇이라고 합니까?",
    options: ["동기화(Synchronization)", "매체 접근 제어(MAC)", "비트 분별(Bit Arbitration)", "시간 분할 다중 접속(TDMA)"],
    answer: 2,
    explain: "CAN 통신은 비트 분별(Bit Arbitration) 방식을 사용하여, 여러 노드가 동시에 통신을 시도할 때 메시지 ID 값이 낮은(우선순위가 높은) 메시지만 통신 버스를 점유하고 전송에 성공합니다."
  },
  {
    question: "자동차 에어컨 시스템에서 냉매 압력을 감지하여 시스템 보호 및 컴프레서 작동을 제어하는 센서는 무엇입니까?",
    options: ["실내 온도 센서", "에바포레이터 온도 센서", "압력 트랜스듀서(Pressure Transducer) 또는 압력 스위치", "태양광 센서"],
    answer: 2,
    explain: "냉매 압력 트랜스듀서 또는 압력 스위치는 에어컨 시스템의 저압/고압 상태를 감지하여 냉매 부족이나 과압 상태에서 시스템을 보호하고, 컴프레서의 작동을 제어합니다."
  },
  {
    question: "다이오드 중, 역방향 전압이 특정 값(제너 전압)에 도달하면 항복 영역에서 일정한 전압을 유지하는 특성을 이용하여 회로의 전압 안정화에 주로 사용되는 것은 무엇입니까?",
    options: ["정류 다이오드", "제너 다이오드(Zener Diode)", "터널 다이오드", "쇼트키 다이오드"],
    answer: 1,
    explain: "제너 다이오드(Zener Diode)는 역방향 바이어스 상태에서 일정한 전압을 유지하는 정전압 특성을 가지고 있어, ECU 내부나 센서 회로의 기준 전압(Reference Voltage) 생성에 사용됩니다."
  },
  {
    question: "전기차(EV)나 하이브리드차(HEV)에서 사용되는 리튬 이온 배터리의 상태를 실시간으로 감시하고 안전하게 제어하는 장치는 무엇입니까?",
    options: ["발전기 제어기(AGM)", "통합 제어 모듈(ICU)", "배터리 관리 시스템(BMS)", "모터 제어기(MCU)"],
    answer: 2,
    explain: "BMS(Battery Management System)는 배터리 셀의 전압, 온도, 전류 등을 감시하고, 과충전/과방전/과열로부터 배터리를 보호하며 최적의 효율을 유지하도록 관리하는 핵심 시스템입니다."
  },
  {
    question: "퓨즈 박스 내에서 퓨즈 또는 릴레이의 이상 여부를 육안으로 점검할 때, 가장 먼저 확인해야 할 사항은 무엇입니까?",
    options: ["퓨즈의 제조사", "퓨즈의 용량(정격 전류) 일치 여부", "퓨즈 박스 주변의 온도", "퓨즈의 색상"],
    answer: 1,
    explain: "퓨즈를 점검할 때는 정격 전류(용량)가 회로도에 명시된 값과 일치하는지 확인해야 합니다. 규격과 다른 퓨즈를 사용하면 보호 기능이 상실되거나 불필요한 단선이 발생할 수 있습니다."
  },
  {
    question: "전자 제어 시스템에서 센서나 스위치 등의 아날로그 신호를 ECU에 입력할 때, 외부 노이즈의 유입을 최소화하기 위해 사용하는 배선 방법은 무엇입니까?",
    options: ["길게 늘어뜨린 배선", "단일선 배선", "쉴드(Shield) 또는 차폐 처리된 배선", "접지 루프(Ground Loop) 배선"],
    answer: 2,
    explain: "쉴드(Shield) 배선은 신호선을 외부 노이즈로부터 보호하기 위해 금속성 피복(차폐)으로 감싸고, 이를 접지 처리하여 노이즈의 유입을 막습니다."
  },
  {
    question: "엔진의 진동을 감지하여 노킹(Knocking) 발생 여부를 ECU에 알리는 센서는 무엇입니까?",
    options: ["가속도 센서", "캠샤프트 포지션 센서", "노크 센서(Knock Sensor)", "유량 센서"],
    answer: 2,
    explain: "노크 센서(Knock Sensor)는 엔진 블록에 장착되어 폭발 행정 시 발생하는 비정상적인 진동(노킹)을 감지하고, ECU는 이 신호를 받아 점화 시기를 지각시켜 노킹을 억제합니다."
  },
  {
    question: "차량의 주행 데이터를 ECU에 저장하고, 사고 발생 시 데이터를 분석할 수 있도록 하는 장치는 무엇입니까?",
    options: ["TCM(변속기 제어 모듈)", "BCM(바디 제어 모듈)", "EDR(Event Data Recorder)", "GPS 모듈"],
    answer: 2,
    explain: "EDR(Event Data Recorder)은 블랙박스와 유사한 기능을 하며, 충돌 직전 및 직후의 속도, 브레이크 작동, 에어백 전개 상태 등 차량의 주행 및 사고 관련 데이터를 기록하는 장치입니다."
  },
  {
    question: "자동차 전기 회로 진단 시, 전류가 흘러야 할 경로에 도통이 없음을 확인하는 테스트를 무엇이라고 합니까?",
    options: ["절연 테스트", "단락 테스트", "도통 테스트(Continuity Test)", "전압 강하 테스트"],
    answer: 2,
    explain: "도통 테스트(Continuity Test)는 멀티미터를 저항 모드(또는 부저 모드)로 설정하여, 회로의 특정 지점 간에 단선(Open Circuit)이 있는지 확인하는 테스트입니다."
  },
  {
    question: "가장 기본적인 형태의 차량 시동 제어 방식인 키 실린더식 시동 스위치에서 'ACC(Accessory)' 위치의 역할은 무엇입니까?",
    options: ["모든 전원 차단", "엔진 시동", "계기판 및 주요 ECU에 전원 공급", "오디오, 시가잭 등 보조 장치에만 전원 공급"],
    answer: 3,
    explain: "ACC(Accessory) 위치는 엔진 시동 없이 라디오, 시가잭, 윈도우 등 보조 장치에만 최소한의 전력을 공급하는 상태입니다."
  },
  {
    question: "전류를 측정할 때 사용하는 장치인 멀티미터는 회로에 어떻게 연결해야 하며, 어떤 조건에서 측정해야 합니까?",
    options: ["병렬로 연결, 전원 차단 상태", "직렬로 연결, 전원 인가 상태", "병렬로 연결, 전원 인가 상태", "직렬로 연결, 전원 차단 상태"],
    answer: 1,
    explain: "전류를 측정하기 위해서는 회로의 경로를 끊고 멀티미터를 직렬로 연결해야 하며, 측정을 위해서는 회로에 전원(전류)이 흘러야 합니다."
  },
  {
    question: "자동차의 헤드램프 회로에서, 운전석의 배선 부하를 줄이고 배터리에서 램프로 가는 전력 손실을 최소화하기 위해 램프 자체 회로에 설치하는 것은 무엇입니까?",
    options: ["퓨즈", "컨트롤 유닛(ECU)", "저항", "릴레이"],
    answer: 3,
    explain: "릴레이(Relay)는 운전석의 스위치에 흐르는 전류를 최소화하고, 배터리에서 램프까지 직접 대전류를 스위칭하여 배선 부하와 전력 손실을 줄이는 데 사용됩니다."
  },
  {
    question: "자동차의 와이어 하니스(Wiring Harness)를 구성하는 전선들에서 주로 빨간색(Red)이 의미하는 것은 무엇입니까?",
    options: ["접지(Ground) 선", "제어 신호선", "상시 전원(+B) 선", "점화(Ignition) 스위치 선"],
    answer: 2,
    explain: "자동차 전기 배선에서 빨간색(Red)은 일반적으로 상시 전원(+B), 즉 배터리에서 직접 연결되어 항상 전기가 흐르는 회로를 나타냅니다."
  }
    
];

// 문제/보기 랜덤 섞기
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }
  
  // ✅ 문제 순서 랜덤 + 60문제 제한
  let questions = shuffleArray([...industry010402]).slice(0, 60);
  
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
    status.innerHTML = `<span id="scoreDisplay">자동차전기전자회로분석 2회차 총점: ${score}/${questions.length}</span>`;
  
    // 제출 버튼 제거
    document.getElementById("submitBtn").style.display = "none";
  
    // 결과창 표시
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<h2>자동차전기전자회로분석 2회차 총점: ${score}/${questions.length}</h2>`;
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