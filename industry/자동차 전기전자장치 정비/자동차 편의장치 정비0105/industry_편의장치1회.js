// -----------------------------
// 문제 배열
export const industry010501 = [
    {        
        question: "냉매 순환 시스템에서 냉매의 고온·고압 기체를 저온·고압 액체로 변화시키는 역할을 하는 주요 구성품은 무엇입s니까?",
        options: ["팽창 밸브(Expansion Valve)", "응축기(Condenser)", "증발기(Evaporator)", "압축기(Compressor)"],
        answer: 1,
        explain: "응축기는 압축기에서 압축된 고온·고압의 냉매 기체를 외부 공기나 물과 열교환시켜 열을 방출하고 액체로 응축(액화)시키는 역할을 합니다."
    },
    {
        question: "자동차 에어컨 시스템에서 액체 냉매의 압력을 낮추고 미세한 입자로 분사하여 증발기 내로 공급하는 부품은 무엇입니까?",
        options: ["수액기(Receiver Drier)", "응축기(Condenser)", "팽창 밸브(Expansion Valve)", "압축기(Compressor)"],
        answer: 2,
        explain: "팽창 밸브는 고압의 액체 냉매를 단열 팽창시켜 저압의 냉매로 만든 후, 증발기에 필요한 양만큼 분사하여 냉각 작용이 일어나게 합니다."
    },
    {
        question: "와이퍼 시스템에서 와이퍼 블레이드가 멈추었을 때 항상 일정한 위치(주차 위치)로 복귀하도록 제어하는 부품은 무엇입니까?",
        options: ["와이퍼 모터", "와이퍼 스위치", "링크 기구", "와이퍼 주차 스위치(Park Switch)"],
        answer: 3,
        explain: "와이퍼 주차 스위치(Park Switch)는 와이퍼 모터 내부에 장착되어 와이퍼가 작동을 멈췄을 때 블레이드를 항상 지정된 주차 위치(Park Position)로 정확히 복귀시키는 역할을 합니다."
    },
    {
        question: "파워 윈도우(Power Window) 시스템에서 유리가 완전히 닫힐 때 발생할 수 있는 끼임 사고를 방지하기 위해 작동하는 기능은 무엇입니까?",
        options: ["속도 감지 기능", "토크 감지 기능", "자동 잠금 기능", "원터치 열림 기능"],
        answer: 1,
        explain: "파워 윈도우의 토크 감지 기능(또는 끼임 방지 기능, Anti-Pinch)은 모터의 부하(토크)가 갑자기 증가하면 물체가 끼였다고 판단하여 윈도우의 작동을 즉시 멈추거나 역방향으로 구동하여 끼임 사고를 방지합니다."
    },
    {
        question: "에어컨 시스템에서 냉매가 증발기에서 열을 흡수하여 기체로 변하면서 실내의 열을 빼앗아 냉각하는 과정을 무엇이라고 합니까?",
        options: ["응축", "압축", "팽창", "증발"],
        answer: 3,
        explain: "증발은 액체 냉매가 기체로 상태 변화하며 주변의 열을 흡수하는 과정으로, 이 과정에서 실내 공기가 냉각됩니다."
    },
    {
        question: "첨단 운전자 보조 시스템(ADAS) 중, 차선 이탈 경고(LDW) 시스템의 주요 센서로 사용되는 것은 무엇입니까?",
        options: ["전방 레이더 센서", "초음파 센서", "전방 카메라(Front Camera)", "측면 사각지대 레이더"],
        answer: 2,
        explain: "차선 이탈 경고(LDW) 및 차선 유지 보조(LKA) 시스템은 주로 룸미러 뒤쪽에 장착된 전방 카메라를 사용하여 도로의 차선 마킹을 인식하고 차량의 위치를 판단합니다."
    },
    {
        question: "냉매 순환 시스템에서 액체 냉매 내에 포함된 수분을 흡수하여 시스템의 부식을 방지하고, 이물질을 걸러주는 역할을 하는 부품은 무엇입니까?",
        options: ["팽창 밸브(Expansion Valve)", "응축기(Condenser)", "수액기(Receiver Drier)", "압축기(Compressor)"],
        answer: 2,
        explain: "수액기(리시버 드라이어)는 냉매 속 수분을 흡수하는 건조제와 이물질을 거르는 필터를 포함하여 시스템을 건조하고 청정하게 유지합니다."
    },
    {
        question: "자동차 에어백(SRS) 시스템에서 차량의 충돌 여부 및 충돌 강도를 감지하여 에어백 전개 신호를 발생시키는 주요 구성품은 무엇입니까?",
        options: ["시트 벨트 프리텐셔너", "충돌 센서(Crash Sensor)", "클럭 스프링(Clock Spring)", "에어백 모듈(Airbag Module)"],
        answer: 1,
        explain: "충돌 센서(Crash Sensor)는 충돌로 인한 차량 속도의 급격한 변화를 감지하고, 이 정보를 에어백 제어 모듈(ACU 또는 SRSCM)로 전송합니다."
    },
    {
        question: "핸들 조작 시 에어백 배선이 꼬이는 것을 방지하고 핸들 내부의 전기적 연결(에어백, 혼 등)을 유지해주는 부품은 무엇입니까?",
        options: ["에어백 모듈", "안전 퓨즈", "클럭 스프링(Clock Spring)", "충돌 센서"],
        answer: 2,
        explain: "클럭 스프링은 스티어링 휠이 회전할 때 에어백 배선이 꼬이지 않도록 감겼다 풀리는 원리로 전기적 연결을 유지해주는 부품입니다."
    },
    {
        question: "파워 스티어링 시스템 중, 전동식 파워 스티어링(EPS)의 특징으로 옳지 않은 것은 무엇입니까?",
        options: ["엔진 동력 소모가 적어 연비가 향상된다.", "유압 장치가 없어 정비가 비교적 간단하다.", "차속 및 조향각에 따라 보조력을 전자적으로 제어한다.", "펌프, 호스, 오일 탱크 등 유압 구성품이 필수적이다."],
        answer: 3,
        explain: "전동식 파워 스티어링(EPS)은 유압 대신 모터의 힘으로 조향을 보조하므로 유압 구성품(펌프, 호스, 오일 탱크 등)이 필요 없습니다."
    },
    {
        question: "자동 온도 조절 에어컨(FATC) 시스템에서 실내 온도를 감지하여 제어기(ECU)에 정보를 제공하는 센서는 무엇입니까?",
        options: ["외기 온도 센서(Ambient Sensor)", "수온 센서(Water Temp. Sensor)", "실내 온도 센서(In-Car Sensor)", "일사량 센서(Solar Sensor)"],
        answer: 2,
        explain: "실내 온도 센서는 차량 내부 승객이 위치한 공간의 현재 온도를 측정하여 자동 온도 조절 시스템이 목표 온도에 맞춰 냉난방을 제어하는 데 필요한 핵심 정보를 제공합니다."
    },
    {
        question: "냉동 사이클에서 냉매가스에 고온·고압의 일을 가하여 밀도를 높이는 역할을 하는 부품은 무엇입니까?",
        options: ["응축기", "증발기", "수액기", "압축기"],
        answer: 3,
        explain: "압축기는 증발기에서 기화된 저온·저압의 냉매가스를 흡입하여 고온·고압으로 압축하여 응축기로 보내는 역할을 합니다."
    },
    {
        question: "자동차에서 중앙 집중식 도어 잠금 시스템을 제어할 때 주로 사용되며, 전자석의 흡인력을 이용하여 도어를 잠그거나 해제하는 액추에이터는 무엇입니까?",
        options: ["솔레노이드 액추에이터", "유압식 액추에이터", "진공식 액추에이터", "전동 모터 액추에이터"],
        answer: 0,
        explain: "솔레노이드 액추에이터는 코일에 전류를 흘려 전자석의 힘으로 플런저를 움직여 도어 잠금 메커니즘을 작동시키는 방식입니다."
    },
    {
        question: "후방 주차 보조 시스템(PAS 또는 R-PDC)에서 초음파 센서가 사용하는 원리와 가장 관련 깊은 것은 무엇입니까?",
        options: ["도플러 효과를 이용한 주파수 변화 감지", "레이저 빔의 반사 시간 측정", "전파의 송수신 시간(Time of Flight) 측정", "음파의 송수신 시간 및 반사 강도 측정"],
        answer: 3,
        explain: "초음파 센서는 고주파 음파를 발사하고, 이 음파가 장애물에 반사되어 돌아오는 데 걸린 시간(Time of Flight)을 측정하여 차량과 장애물 사이의 거리를 계산합니다."
    },
    {
        question: "자동차 에어컨 장치 정비 시, 냉매를 회수하고 재충전하는 과정에서 냉매 회수율을 높이기 위해 가장 먼저 수행해야 하는 작업은 무엇입니까?",
        options: ["시스템에 냉매를 주입한다.", "진공펌프로 시스템을 진공시킨다.", "냉매 호스를 응축기에 연결한다.", "압축기를 강제로 작동시킨다."],
        answer: 1,
        explain: "냉매 회수 후 시스템에 남아있는 공기와 수분을 제거하고 냉매 충전량을 정확하게 맞추기 위해 진공 작업을 수행합니다. 진공 작업은 냉매 회수율과는 직접 관련이 없지만, 시스템의 효율과 성능을 위해 필수적입니다."
    },
    {
        question: "열선 유리(리어 윈도우 디포거) 시스템의 작동 원리로 옳은 것은 무엇입니까?",
        options: ["유리 내부에 삽입된 냉매를 순환시켜 김 서림을 제거한다.", "유리 표면에 고압의 공기를 분사하여 습기를 제거한다.", "유리 표면에 도포된 발수 코팅을 이용하여 습기를 제거한다.", "유리에 인쇄된 발열선에 전류를 흘려 열을 발생시켜 김 서림을 제거한다."],
        answer: 3,
        explain: "리어 윈도우에 인쇄되거나 삽입된 가는 발열선에 배터리의 전기를 흘려 열을 발생시키고, 이 열로 유리의 온도를 높여 김 서림이나 성에를 제거합니다."
    },
    {
        question: "주로 전방에 설치되어 차량과 앞차 간의 거리와 상대 속도를 측정하여 어댑티브 크루즈 컨트롤(ACC) 작동의 핵심 정보를 제공하는 센서는 무엇입니까?",
        options: ["초음파 센서", "전방 카메라", "레이더 센서(Radar Sensor)", "자이로 센서"],
        answer: 2,
        explain: "레이더 센서(Radar Sensor)는 전파를 발사하고 반사되는 시간을 측정하여 거리와 속도를 정확하게 감지하며, ACC, 전방 충돌 경고(FCW) 등의 핵심 센서로 사용됩니다."
    },
    {
        question: "자동차의 도난 경보 시스템에서 침입 여부를 판단하기 위해 도어, 후드, 트렁크 등의 열림 상태를 감지하는 데 사용되는 센서는 무엇입니까?",
        options: ["충격 센서", "경사 센서", "리미트 스위치(Limit Switch) 또는 도어 스위치", "초음파 실내 감지 센서"],
        answer: 2,
        explain: "도어 스위치(리미트 스위치)는 도어, 후드, 트렁크가 닫힐 때 접점이 떨어지고 열릴 때 접점이 붙는 방식으로 열림 상태를 제어 모듈에 알려줍니다."
    },
    {
        question: "카 오디오 시스템에서 FM 방송의 특징으로 옳은 것은 무엇입니까?",
        options: ["먼 거리까지 전파가 도달하며 송신 출력이 낮다.", "주로 야간에 전리층 반사를 이용해 수신한다.", "음질이 깨끗하고 잡음에 강한 특성이 있다.", "진폭을 변조하여 신호를 전송하는 방식이다."],
        answer: 2,
        explain: "FM(주파수 변조) 방송은 AM에 비해 음질이 깨끗하고 잡음에 강하지만, 전파의 도달 거리는 짧고 송신 출력이 높아야 합니다."
    },
    {
        question: "자동차 에어컨 시스템에서 냉매 배관의 파손 여부를 확인하기 위해 사용하는 검사 방법으로 가장 적절한 것은 무엇입니까?",
        options: ["오일 레벨 게이지 확인", "냉매량 측정", "질소 가스 가압 및 누설 검사", "압축기 작동 상태 점검"],
        answer: 2,
        explain: "질소 가스는 불연성이고 비응축성 가스로, 냉매를 대신하여 시스템에 가압한 후 비눗물이나 누설 검지기로 누설 부위를 확인하는 것이 가장 정확하고 일반적인 방법입니다."
    },
    {
        question: "전동식 파워 윈도우 시스템에서 모터가 과열되거나 과부하가 걸리는 것을 방지하기 위해 사용되는 안전장치는 무엇입니까?",
        options: ["퓨즈", "다이오드", "차단기(Circuit Breaker) 또는 서멀 프로텍터", "릴레이"],
        answer: 2,
        explain: "윈도우 모터 내부에는 과부하로 인한 모터의 손상이나 화재를 방지하기 위해 일정한 전류 이상 흐르면 회로를 차단하는 서멀 프로텍터(Thermal Protector) 또는 차단기가 설치됩니다."
    },
    {
        question: "오토 라이트 컨트롤(Auto Light Control) 시스템에서 주변의 밝기를 감지하여 헤드램프의 자동 점등/소등을 결정하는 센서는 무엇입니까?",
        options: ["조도 센서(Light Sensor)", "차속 센서", "습도 센서", "일사량 센서"],
        answer: 0,
        explain: "조도 센서(또는 광 센서)는 차량 외부 및 전방의 밝기를 측정하여 정해진 기준치 이하로 떨어지면 자동으로 헤드램프를 점등하고, 기준치 이상이 되면 소등하도록 제어합니다."
    },
    {
        question: "파워 윈도우 시스템에서 윈도우를 '닫힘' 방향으로 작동시킬 때 모터가 과도하게 부하를 받는 경우의 정비 조치로 가장 적절한 것은 무엇입니까?",
        options: ["모터를 더 강력한 것으로 교체한다.", "윈도우 레귤레이터를 교체하거나 윤활 처리한다.", "윈도우 스위치를 교체한다.", "배터리의 전압을 높인다."],
        answer: 1,
        explain: "윈도우가 뻑뻑하거나 모터에 부하가 걸리는 주된 원인은 윈도우 레귤레이터나 가이드 레일의 마찰이 심해졌기 때문입니다. 윤활 처리하거나 레귤레이터를 교체하여 마찰 저항을 줄여야 합니다."
    },
    {
        question: "차량용 내비게이션 시스템에서 차량의 현재 위치를 파악하기 위해 사용하는 위성 항법 기술은 무엇입니까?",
        options: ["VICS", "GPS(Global Positioning System)", "TPEG", "RDS"],
        answer: 1,
        explain: "GPS는 위성으로부터 신호를 수신하여 차량의 정확한 위도, 경도, 고도 및 시간 정보를 계산하여 현재 위치를 파악하는 핵심 기술입니다."
    },
    {
        question: "자동차 에어컨 시스템에서 냉방 부하가 가장 클 때 압축기의 작동 상태로 옳은 것은 무엇입니까?",
        options: ["압축기 구동 벨트 장력이 느슨해진다.", "압축기가 가장 낮은 회전 속도로 작동한다.", "압축기 클러치가 연속적으로 연결(ON)되어 작동한다.", "압축기 클러치가 반복적으로 단속(ON/OFF)된다."],
        answer: 2,
        explain: "냉방 부하가 크다는 것은 실내가 충분히 냉각되지 않았음을 의미하며, 이 경우 ECU는 냉각 성능을 최대화하기 위해 압축기 클러치를 계속 연결(ON) 상태로 유지합니다."
    },
    {
        question: "스마트키 시스템(Smart Key System)에서 차량과 스마트키 간의 통신에 사용되는 주파수 대역은 무엇입니까?",
        options: ["장파(LF) 및 초단파(VHF)", "단파(HF) 및 초단파(VHF)", "초단파(VHF) 및 극초단파(UHF)", "장파(LF) 및 극초단파(UHF)"],
        answer: 3,
        explain: "스마트키는 근거리 인식(도어 잠금/해제)을 위해 장파(LF, Low Frequency)를 사용하고, 원거리 통신(차량 시동, 트렁크 열림 등)을 위해 극초단파(UHF, Ultra High Frequency)를 사용합니다."
    },
    {
        question: "자동차 혼(Horn) 시스템에서 운전자가 스위치를 누르면 혼을 울리게 하는 전기 장치로, 대용량 전류를 제어하는 역할을 하는 부품은 무엇입니까?",
        options: ["퓨즈", "혼 버튼", "릴레이(Relay)", "컨덴서"],
        answer: 2,
        explain: "릴레이는 운전자가 누르는 혼 스위치의 작은 제어 전류를 이용하여, 혼 작동에 필요한 크고 안정적인 주 전원 전류를 개폐하여 혼을 작동시키는 역할을 합니다."
    },
    {
        question: "자동차의 각종 램프 밝기를 제어하는 시스템 중, 운전자의 시력 보호를 위해 계기판, 오디오 등 실내 조명의 밝기를 조절하는 장치는 무엇입니까?",
        options: ["헤드램프 레벨링 장치", "디머 스위치(Dimmer Switch)", "일루미네이션 릴레이", "오토 라이트 스위치"],
        answer: 1,
        explain: "디머 스위치(조광기)는 계기판, 각종 스위치 등 실내 조명의 밝기를 수동으로 조절하여 운전자가 야간에 눈부심 없이 운전할 수 있도록 도와줍니다."
    },
    {
        question: "차량용 TV 수신 시스템의 특징으로 옳지 않은 것은 무엇입니까?",
        options: ["차량의 고속 이동 중에도 안정적인 수신이 가능해야 한다.", "외부 노이즈의 영향을 많이 받지 않도록 설계된다.", "주로 지상파 DMB나 위성 DMB 방식이 사용된다.", "차량의 주행 속도가 빠를수록 수신 감도가 향상된다."],
        answer: 3,
        explain: "차량의 주행 속도가 빨라지면 도플러 효과 등으로 인해 수신되는 신호에 변형이 생겨 오히려 수신 감도가 저하되거나 영상이 끊어질 수 있습니다."
    },
    {
        question: "타이어 공기압 모니터링 시스템(TPMS)에서 타이어 내부에 장착되어 공기압 정보를 측정하고 무선으로 송신하는 부품은 무엇입니까?",
        options: ["휠 스피드 센서", "압력 송신기(Transmitter)", "ECU", "압력 센서 및 배터리 일체형 모듈"],
        answer: 3,
        explain: "TPMS는 타이어 내부에 압력 센서와 배터리, 무선 송신기가 통합된 모듈이 장착되어 압력 정보를 측정하고 차체로 전송합니다."
    },
    {
        question: "주차 브레이크를 해제하지 않은 상태에서 운전석 도어가 열리면 경고음을 울리는 장치 등 운전자에게 위험 상황을 알려주는 각종 경고 장치를 통칭하는 용어는 무엇입니까?",
        options: ["SRS 시스템", "TPMS", "BWS(Buzzer Warning System)", "ACC"],
        answer: 2,
        explain: "BWS(Buzzer Warning System)는 안전벨트 미착용, 키 잔류, 도어 열림 등 운전자에게 주의를 요하는 상황을 부저(Buzzer)나 경고음으로 알리는 시스템을 총칭합니다."
    },
    {
        question: "냉매 누설 점검 시, 할로겐 토치법이나 형광 염료법이 아닌 가장 정밀하고 환경친화적인 방법은 무엇입니까?",
        options: ["비눗물 거품 검사법", "질소 가스 가압 검사법", "전자식 누설 감지기(Electronic Leak Detector) 사용", "압력 게이지를 이용한 압력 감소 확인"],
        answer: 2,
        explain: "전자식 누설 감지기는 냉매 가스에만 반응하며 미세한 누설도 정밀하게 감지할 수 있어 가장 정밀하고 환경친화적인 냉매 누설 점검 방법입니다."
    },
    {
        question: "전동식 시트 시스템에서 좌석의 위치를 기억하고 운전자가 설정한 위치로 자동 복귀시키는 기능을 담당하는 시스템은 무엇입니까?",
        options: ["액티브 헤드레스트", "시트 히터 시스템", "이지 억세스 시스템", "IMS(Integrated Memory System)"],
        answer: 3,
        explain: "IMS(통합 메모리 시스템)는 시트 위치뿐만 아니라 아웃사이드 미러, 스티어링 휠 등의 위치를 운전자별로 기억하고 호출하여 자동 설정하는 기능입니다."
    },
    {
        question: "자동차 와이퍼 모터의 회전 운동을 와이퍼 블레이드의 왕복 운동으로 변환시켜 주는 기구는 무엇입니까?",
        options: ["클러치", "링크 기구(Linkage)", "기어 박스", "웜 기어"],
        answer: 1,
        explain: "와이퍼 모터의 회전력을 기어 박스에서 감속하고, 이 회전 운동을 링크 기구(Linkage)를 통해 블레이드의 일정한 각도의 왕복 운동으로 변환시킵니다."
    },
    {
        question: "파워 도어 잠금 장치(Power Door Lock) 정비 시, 도어 래치 어셈블리 내부에 위치하며 도어의 잠금/해제 상태를 제어 모듈로 알려주는 센서/스위치는 무엇입니까?",
        options: ["충격 센서", "도어 래치 스위치", "토크 센서", "광센서"],
        answer: 1,
        explain: "도어 래치 스위치는 도어 래치(걸쇠) 어셈블리 내부에 위치하며, 도어의 잠금(Lock) 또는 해제(Unlock) 상태를 감지하여 제어 모듈에 신호를 보냅니다."
    },
    {
        question: "자동 온도 조절 시스템(FATC)에서 태양열의 강도를 감지하여 냉방 부하를 예측하고 제어에 활용하는 센서는 무엇입니까?",
        options: ["외기 온도 센서", "증발기 온도 센서", "일사량 센서(Solar Sensor)", "실내 온도 센서"],
        answer: 2,
        explain: "일사량 센서는 태양의 직사광선이 실내에 미치는 영향을 측정하여 냉방의 강도를 조절하는 데 사용되며, 주로 대시보드 상단에 위치합니다."
    },
    {
        question: "운전석 에어백을 점검할 때 에어백 전개 사고를 방지하기 위해 가장 먼저 수행해야 할 안전 조치는 무엇입니까?",
        options: ["에어백 모듈을 분해하여 점검한다.", "진단기를 연결하여 고장 코드를 삭제한다.", "시동을 끈 후 배터리 마이너스 단자를 분리하고 일정 시간(약 30초 이상) 대기한다.", "클럭 스프링의 초기 위치를 확인한다."],
        answer: 2,
        explain: "에어백 시스템의 정비 시에는 시스템에 남아있는 잔류 전류를 완전히 방전시키기 위해 반드시 배터리 마이너스 단자를 분리하고 시스템이 방전되는 충분한 시간을 기다려야 합니다."
    },
    {
        question: "액티브 사운드 디자인(ASD) 시스템의 주된 목적으로 옳은 것은 무엇입니까?",
        options: ["차량 외부 소음을 능동적으로 제거한다.", "실내 승객의 목소리를 증폭하여 전달한다.", "엔진 소리를 인위적으로 합성하여 스피커를 통해 출력한다.", "운전자가 듣는 오디오 볼륨을 차량 속도에 맞춰 자동으로 조절한다."],
        answer: 2,
        explain: "ASD는 차량의 주행 상태(속도, RPM)에 맞춰 스포티하거나 고급스러운 엔진 사운드를 합성하여 실내 스피커를 통해 출력하여 운전자의 감성 만족도를 높이는 시스템입니다."
    },
    {
        question: "통합 메모리 시스템(IMS)에서 운전자의 시트 위치를 정확히 제어하기 위해 모터의 회전량을 감지하는 센서는 무엇입니까?",
        options: ["접촉식 센서", "포텐셔미터(Potentiometer) 또는 위치 센서", "홀 센서", "토크 센서"],
        answer: 1,
        explain: "전동 시트 모터 구동축 또는 레귤레이터에는 포텐셔미터(가변 저항)나 엔코더 형태의 위치 센서가 장착되어 모터의 회전량(즉, 시트의 현재 위치)을 감지합니다."
    },
    {
        question: "자동차 퓨즈 박스에서 퓨즈를 교환할 때 정비사가 반드시 지켜야 할 사항으로 가장 적절한 것은 무엇입니까?",
        options: ["단선된 퓨즈보다 정격 용량이 더 큰 퓨즈로 교환한다.", "퓨즈를 교환하기 전에 반드시 배터리 마이너스(-) 단자를 분리한다.", "퓨즈 용량이 맞는다면 철사나 은박지로 대체하여 사용한다.", "퓨즈 용량이 다르더라도 임시로 다른 전기 장치의 퓨즈를 사용한다."],
        answer: 1,
        explain: "전기 장치의 손상을 막기 위해 퓨즈를 교환하기 전에는 반드시 배터리 단자를 분리해야 합니다. 퓨즈는 정격 용량과 동일한 것으로만 교체해야 합니다."
    }
];

// 문제/보기 랜덤 섞기
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }
  
  // ✅ 문제 순서 랜덤 + 60문제 제한
  let questions = shuffleArray([...industry010501]).slice(0, 60);
  
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
    status.innerHTML = `<span id="scoreDisplay">자동차편의장치정비 1회차 총점: ${score}/${questions.length}</span>`;
  
    // 제출 버튼 제거
    document.getElementById("submitBtn").style.display = "none";
  
    // 결과창 표시
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<h2>자동차편의장치정비 1회차 총점: ${score}/${questions.length}</h2>`;
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