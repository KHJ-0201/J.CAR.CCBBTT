// -----------------------------
// 문제 배열
export const industry010802 = [
    {    
    question: "CAN 통신에서 ECU가 반복적인 오류를 감지하여 통신 버스에서 완전히 격리되는 상태를 무엇이라고 합니까?",
    options: ["Error Passive (오류 수동)", "Bus Off (버스 차단)", "Error Active (오류 능동)", "Sleep Mode (절전 모드)"],
    answer: 1,
    explain: "Bus Off 상태는 ECU가 일정 횟수 이상의 치명적인 오류(Error Count)를 누적했을 때 발생하며, 해당 ECU는 통신 안정성을 위해 네트워크에서 일시적으로 격리됩니다."
  },
  {
    question: "CAN 통신 프레임의 CRC Cyclic Redundancy Check 필드의 주된 역할은 무엇입습니까?",
    options: ["메시지 전송 우선순위 결정", "통신선의 절연 저항 확인", "전송 데이터의 오류 검출 및 무결성 확인", "ECU의 전원 공급"],
    answer: 2,
    explain: "CRC는 전송되는 데이터에 기반하여 계산된 체크 값을 포함하며, 수신 측에서 동일한 계산을 통해 통신 중 데이터 비트 오류가 발생했는지 확인하는 데 사용됩니다."
  },
  {
    question: "CAN 통신에서 Active Error Frame이 발생했을 때, 통신선에서 관찰되는 신호는 주로 무엇입습니까?",
    options: ["7비트의 Recessive 신호", "8비트의 Dominant 신호", "16비트의 Recessive 신호", "6비트의 Dominant 신호"],
    answer: 3,
    explain: "Active Error Frame은 6개의 Dominant 비트로 구성되어 모든 노드에 오류를 알립니다. (Error Delimiter 8비트 Recessive 포함 시 총 14비트)"
  },
  {
    question: "CAN 통신을 물리적으로 구현하는 데 있어, 통신 신호를 증폭하고 CAN 컨트롤러와 버스 라인 사이의 전기적 인터페이스 역할을 하는 부품은 무엇입니까?",
    options: ["유성 기어 세트", "CAN 트랜시버 (Transceiver)", "LDC 컨버터", "종단 저항"],
    answer: 1,
    explain: "CAN 트랜시버는 CAN 컨트롤러의 디지털 신호를 CAN 버스의 물리적 신호 (차동 전압)로 변환하고, 반대로 버스 신호를 디지털 신호로 변환하는 역할을 합니다."
  },
  {
    question: "LIN 통신 프레임에서 동기화 필드 (Sync Field)의 주된 목적은 무엇입니까?",
    options: ["데이터 전송 우선순위 결정", "슬레이브 ECU의 클럭 (Clock) 동기화", "마스터 ECU의 전원 공급", "통신선의 단락 방지"],
    answer: 1,
    explain: "마스터 ECU는 헤더의 Sync Field를 통해 슬레이브 ECU가 마스터의 전송 속도에 맞춰 자체 클럭을 조정(동기화)하도록 돕습니다."
  },
  {
    question: "FlexRay 통신의 통신 주기 (Communication Cycle)가 정적 세그먼트와 동적 세그먼트로 나뉘는 주된 이유는 무엇입니까?",
    options: ["배터리 방전 방지", "통신선의 길이 조절", "핵심 제어의 결정론적 통신과 유연한 데이터 전송의 동시 구현", "게이트웨이의 데이터 변환 속도 증가"],
    answer: 2,
    explain: "정적 세그먼트는 핵심 제어에 필요한 결정론적 통신을 보장하고, 동적 세그먼트는 진단 등 유연한 데이터 전송을 위해 사용되어 두 가지 통신 방식을 한 주기에 통합합니다."
  },
  {
    question: "CAN FD (Flexible Data-rate) 통신이 기존 CAN 대비 갖는 가장 큰 두 가지 이점은 무엇입니까?",
    options: ["저렴한 케이블, 간단한 구조", "단일 통신선 사용, 높은 전압", "더 긴 데이터 길이 (최대 64 Byte), 더 높은 전송 속도", "광통신 사용, Ring Topology"],
    answer: 2,
    explain: "CAN FD는 데이터 필드 길이를 64바이트로 확장하고, 데이터 필드 전송 시 비트 전송률을 높여 전송 효율과 속도를 크게 향상시켰습니다."
  },
  {
    question: "자동차 이더넷에서 필수적으로 사용되는 네트워크 토폴로지이며, 중앙 집중식 데이터 관리가 가능한 방식은 무엇입니까?",
    options: ["링 (Ring) 토폴로지", "버스 (Bus) 토폴로지", "데이지 체인 (Daisy Chain) 토폴로지", "스타 (Star) 토폴로지"],
    answer: 3,
    explain: "자동차 이더넷은 스위치 (Switch)를 중심으로 각 ECU가 연결되는 스타 토폴로지를 사용하며, 이는 통신 충돌 방지 및 중앙 집중식 관리에 유리합니다."
  },
  {
    question: "CAN 통신 진단 시, 오실로스코프 파형에서 CAN-High 전압이 정상적으로 상승하지만, CAN-Low 전압이 접지 레벨 (0V)에 머무는 현상이 발생했을 때 의심해야 할 결함은 무엇입습니까?",
    options: ["CAN-High 선의 단락", "CAN-High와 CAN-Low 간의 단락", "CAN-Low 선의 접지 단락", "종단 저항 값의 증가"],
    answer: 2,
    explain: "CAN-Low 선이 접지와 단락되면 해당 선의 전압이 0V로 고정되어 파형의 대칭성이 깨지고 통신이 불가능해집니다."
  },
  {
    question: "자동차 진단 프로토콜 중 하나인 K-Line의 주된 특징은 무엇입니까?",
    options: ["광통신 기반, Ring Topology", "단일 선 (Single Wire), 비동기 직렬 통신", "차동 신호 방식, TDMA 기반", "고속 이더넷 기반, Star Topology"],
    answer: 1,
    explain: "K-Line (ISO 9141, KWP2000)은 CAN 등장 이전에 사용되던 통신 방식으로, 단일 와이어를 사용하는 비동기 직렬 통신 방식을 채택합니다."
  },
  {
    question: "FlexRay 통신에서 Cold Start 노드가 수행하는 주된 역할은 무엇입니까?",
    options: ["고전압 배터리 충전", "통신 사이클 시작 및 네트워크 시간 동기화", "엔진 시동 보조", "멀티미디어 데이터 압축"],
    answer: 1,
    explain: "FlexRay 네트워크는 초기 시동 시 모든 노드의 통신 시간을 동기화해야 하는데, Cold Start 노드가 이 최초의 동기화 및 사이클 시작을 주도합니다."
  },
  {
    question: "CAN 통신 진단 시, 오실로스코프에서 Dominant (우선) 신호가 나타낼 때의 전압 레벨은 무엇을 의미합니까?",
    options: ["데이터 비트가 1임을 의미", "데이터 비트가 0임을 의미", "통신선에 단선이 발생했음을 의미", "종단 저항이 없음을 의미"],
    answer: 1,
    explain: "CAN 통신에서 Dominant는 논리적 0을 의미하며, 이는 CAN-High와 CAN-Low의 전압 차가 발생하여 전송이 진행 중임을 나타냅니다."
  },
  {
    question: "LIN 통신이 CAN 통신 대비 가지는 통신 지연 (Latency)의 가장 큰 특징은 무엇입니까?",
    options: ["지연 시간이 CAN보다 짧다", "지연 시간이 CAN과 동일하다", "지연 시간이 CAN보다 길고 예측 가능하다", "지연 시간이 매우 불안정하다"],
    answer: 2,
    explain: "LIN은 마스터가 요청해야 슬레이브가 응답하는 엄격한 스케줄링 방식이므로, CAN의 경쟁 방식보다 지연 시간은 길지만 정해진 시간표에 따라 통신이 이루어져 예측 가능합니다."
  },
  {
    question: "자동차 이더넷에서 100BASE-T1에서 'T1'이 의미하는 것은 무엇입니까?",
    options: ["데이터 전송 속도 100Mbps", "단일 트위스트 페어 (Single Twisted Pair) 케이블 사용", "최대 전송 거리 1km", "Ring Topology 사용"],
    answer: 1,
    explain: "100BASE-T1 및 1000BASE-T1에서 'T1'은 단일 비차폐 트위스트 페어 (UTP) 케이블을 사용하여 자동차 환경에 맞게 최적화된 이더넷 표준임을 나타냅니다."
  },
  {
    question: "CAN 통신에서 ACK Slot (응답 슬롯)의 주된 역할은 무엇입니까?",
    options: ["다음 메시지의 우선순위 설정", "통신선의 절연 상태 확인", "수신된 메시지의 수신 성공 여부를 전송 ECU에 알림", "데이터 비트 오류 검출"],
    answer: 2,
    explain: "ACK Slot은 수신 측 ECU가 오류 없이 메시지를 수신했을 경우, 해당 비트 필드를 Recessive에서 Dominant로 변경하여 전송 성공을 알리는 데 사용됩니다."
  },
  {
    question: "MOST 네트워크가 링 (Ring) 토폴로지를 사용하는 주된 이유는 무엇입니까?",
    options: ["CAN과의 호환성 확보", "배선 비용 절감", "멀티미디어 데이터의 연속적인 스트리밍 보장", "높은 통신 속도"],
    answer: 2,
    explain: "MOST는 오디오/비디오와 같은 스트림 데이터를 안정적으로 전송하기 위해 모든 노드가 순환적으로 연결된 링 토폴로지를 채택했습니다."
  },
  {
    question: "자동차 네트워크 진단 시, 진단 장비가 DTC P0600 (직렬 통신 링크 고장)을 표시했을 때, 가장 먼저 확인해야 할 것은 무엇입니까?",
    options: ["엔진 오일 잔량", "브레이크 패드 마모도", "ECU 전원 및 접지 상태, 그리고 통신선 (CAN/LIN) 연결 상태", "타이어 공기압"],
    answer: 2,
    explain: "DTC P0600은 통신선 자체의 물리적 단절이나, 통신선에 연결된 ECU에 전원 또는 접지 공급이 안 되어 통신이 완전히 끊겼을 때 주로 발생합니다."
  },
  {
    question: "FlexRay 통신에서 가드 타임 (Guard Time)의 주된 목적은 무엇입니까?",
    options: ["통신선에 종단 저항 제공", "각 통신 슬롯/주기 사이의 버퍼 시간을 제공하여 통신 충돌 방지", "데이터 프레임의 크기 결정", "슬레이브 ECU의 클럭 동기화"],
    answer: 1,
    explain: "가드 타임은 FlexRay의 엄격한 시간 분할 방식에서, 통신 슬롯이 끝난 후 다음 슬롯이 시작되기 전까지 통신 버스를 쉬게 하여 다음 전송과의 간섭을 방지합니다."
  },
  {
    question: "LIN 통신 시스템에서 슬레이브 ECU의 통신 기능을 담당하는 가장 기본적인 하드웨어 구성 요소는 무엇입니까?",
    options: ["CAN 트랜시버", "LIN 트랜시버", "고전압 배터리", "휠 속도 센서"],
    answer: 1,
    explain: "LIN 통신은 CAN과 별개의 프로토콜이므로, 통신을 수행하기 위해 LIN 규격에 맞는 트랜시버가 각 ECU에 내장되어야 합니다."
  },
  {
    question: "CAN 통신에서 확장 식별자 (Extended ID)가 사용될 때, 식별자 (ID)의 비트 길이는 몇 비트입니까?",
    options: ["11 비트", "16 비트", "29 비트", "64 비트"],
    answer: 2,
    explain: "표준 CAN (Standard CAN)은 11비트 ID를 사용하고, 확장 CAN (Extended CAN)은 추가 18비트를 포함하여 총 29비트의 식별자를 사용하여 더 많은 메시지를 구분할 수 있습니다."
  },
  {
    question: "자동차 이더넷 네트워크에서 스위치 (Switch)가 허브 (Hub) 대비 갖는 가장 큰 장점은 무엇입니까?",
    options: ["더 저렴한 가격", "더 간단한 구조", "데이터 충돌 없이 원하는 포트로만 데이터를 전송하여 통신 효율 증대", "전원 공급 불필요"],
    answer: 2,
    explain: "스위치는 목적지 주소를 인식하고 해당 포트로만 데이터를 전송하는 반면, 허브는 모든 포트에 데이터를 전송하여 충돌 및 불필요한 트래픽을 유발합니다."
  },
  {
    question: "CAN 통신 진단 시, 통신선에 노이즈가 심하거나 반사파가 발생하는 현상을 오실로스코프로 확인했을 때, 가장 먼저 확인해야 할 것은 무엇입니까?",
    options: ["엔진의 압축 압력", "냉각수 펌프의 작동 상태", "CAN 종단 저항의 값 및 연결 상태", "브레이크액의 수분 함량"],
    answer: 2,
    explain: "노이즈와 반사파는 주로 종단 저항이 불량이거나 없어서 신호가 제대로 흡수되지 못할 때 발생합니다. 따라서 종단 저항을 가장 먼저 점검해야 합니다."
  },
  {
    question: "하이브리드/전기차의 배터리 관리 시스템 (BMS) 등 핵심 ECU 간의 통신에 FlexRay가 적용되는 주된 이유는 무엇입니까?",
    options: ["저렴한 배선 비용", "간단한 통신 구조", "결정론적이고 높은 대역폭으로 실시간 안전 제어에 필수적", "단일 마스터 제어"],
    answer: 2,
    explain: "배터리 및 파워트레인 제어는 높은 실시간성과 신뢰성이 요구되므로, 충돌이 없고 전송 지연이 예측 가능한 FlexRay가 유리합니다."
  },
  {
    question: "LIN 통신에서 마스터 ECU가 슬레이브 ECU에 특정 데이터 전송을 요청하는 행위는 무엇입니까?",
    options: ["Response (응답)", "CRC 필드 전송", "Header (헤더) 전송", "Wake-up (깨우기) 신호 전송"],
    answer: 2,
    explain: "마스터는 Header를 전송하며, 이 Header에는 어떤 슬레이브가 응답해야 하는지 지정하는 식별자 (ID)가 포함되어 있습니다."
  },
  {
    question: "자동차 네트워크 통신에서 시간 민감형 네트워킹 (TSN, Time-Sensitive Networking) 기술이 이더넷에 적용되는 주된 목적은 무엇입니까?",
    options: ["데이터 암호화 강화", "실시간 및 결정론적인 통신을 지원하여 ADAS/자율 주행에 활용", "배터리 전압 안정화", "단순 멀티미디어 전송"],
    answer: 1,
    explain: "기존 이더넷은 비결정론적이므로, TSN은 시간 동기화 및 트래픽 스케줄링 기능을 추가하여 ADAS/자율 주행에 필수적인 실시간 데이터 전송을 가능하게 합니다."
  },
  {
    question: "CAN 통신의 물리적 레이어에서 Recessive (열성) 신호가 나타낼 때의 전압 레벨은 무엇을 의미합니까?",
    options: ["데이터 비트가 0임을 의미", "통신선이 단락되었음을 의미", "데이터 비트가 1임을 의미", "종단 저항 불량"],
    answer: 2,
    explain: "CAN 통신에서 Recessive는 논리적 1을 의미하며, 이는 CAN-High와 CAN-Low의 전압 차가 거의 없어 전송이 잠시 멈춤 상태에 있음을 나타냅니다."
  },
  {
    question: "MOST 네트워크에서 오디오/비디오 스트리밍 데이터 전송에 주로 사용되는 데이터 유형은 무엇입니까?",
    options: ["제어 데이터", "진단 데이터", "스트림 데이터 (Stream Data)", "패킷 데이터 (Packet Data)"],
    answer: 2,
    explain: "MOST는 스트림 데이터를 사용하여 오디오/비디오와 같은 시간에 민감하고 연속적인 데이터를 일정한 흐름으로 전송하는 데 최적화되어 있습니다."
  },
  {
    question: "FlexRay 통신에서 이중 채널 (Dual Channel)을 사용하는 주된 이점 중, 데이터 전송률 향상과 함께 얻을 수 있는 것은 무엇입니까?",
    options: ["배선 단순화", "단일 채널 고장 시에도 통신 유지되는 고가용성 및 이중화", "통신선 길이 증가", "전력 소모 감소"],
    answer: 1,
    explain: "이중 채널은 하나의 채널에 오류가 발생하더라도 다른 채널로 통신을 유지할 수 있는 이중화를 제공하여 안전성과 신뢰성을 극대화합니다."
  },
  {
    question: "LIN 통신에서 슬레이브 ECU가 마스터 ECU의 요청 없이 자발적으로 버스에 전송하는 유일한 신호는 무엇입니까?",
    options: ["데이터 응답 (Response)", "헤더 필드", "Error Frame", "Wake-up (깨우기) 신호"],
    answer: 3,
    explain: "LIN은 엄격한 마스터-슬레이브 구조이지만, 슬레이브는 절전 모드에서 외부 이벤트 (예: 도어 핸들 감지)에 의해 Wake-up 신호를 버스에 전송하여 통신 재개를 요청할 수 있습니다."
  },
  {
    question: "자동차 네트워크의 사이버 보안을 위해, 비정상적인 통신 트래픽 패턴이나 메시지 변조를 감지하여 네트워크 침입을 막는 시스템은 무엇입니까?",
    options: ["ADAS", "EHB", "LDC", "IDS (Intrusion Detection System)"],
    answer: 3,
    explain: "IDS는 CAN, 이더넷 등 네트워크 통신을 모니터링하여 비정상적인 메시지나 권한 없는 접근을 감지하고 시스템에 보고하여 보안 위협에 대응합니다."
  },
  {
    question: "CAN 통신 진단 시, 종단 저항 값이 0Ω에 매우 가깝게 측정되었을 때, 가장 유력한 결함은 무엇입니까?",
    options: ["종단 저항 하나 단선", "CAN-High 선의 접지 단락", "CAN-High와 CAN-Low 선의 단락 (합선)", "ECU 전원 공급 불량"],
    answer: 2,
    explain: "CAN-High와 CAN-Low 선이 합선되면 두 선 사이의 저항이 거의 없어지므로 0Ω에 가깝게 측정됩니다. (정상 값은 60Ω)"
  },
  {
    question: "LIN 통신에서 헤더 필드 (Header Field)와 응답 필드 (Response Field) 사이의 주된 차이점은 무엇입니까?",
    options: ["전송 속도의 차이", "헤더는 마스터가, 응답은 슬레이브가 전송", "데이터 길이에 대한 차이", "통신선의 색상 차이"],
    answer: 1,
    explain: "LIN 통신은 마스터가 헤더를 전송하여 통신을 요청하고, 해당 헤더를 인식한 슬레이브가 응답을 전송하는 방식으로 이루어집니다."
  },
  {
    question: "FlexRay 통신에서 시간 동기화가 틀어졌을 때 발생하는 가장 심각한 문제는 무엇입니까?",
    options: ["연료 분사량 증가", "TDMA 슬롯 시간 미준수로 인한 통신 충돌 및 시스템 고장", "12V 보조 배터리 방전", "타이어 공기압 감소"],
    answer: 1,
    explain: "FlexRay는 시간 분할 방식이므로, 시간 동기화가 틀어지면 각 노드가 다른 시간에 데이터를 전송하여 충돌이 발생하고 시스템 신뢰성이 무너집니다."
  },
  {
    question: "CAN 통신에서 오류 수동 (Error Passive) 상태의 ECU가 통신에 미치는 영향은 무엇입니까?",
    options: ["통신 버스를 완전히 차단", "메시지를 재전송하지 않음", "오류 프레임을 Recessive 신호로 전송하여 다른 노드에 영향을 최소화", "통신 속도를 늦춤"],
    answer: 2,
    explain: "Error Passive 상태의 ECU는 여전히 통신은 가능하지만, 오류 프레임을 Recessive로 전송하여 다른 노드의 통신에 미치는 영향을 줄이고 오류 복구를 위해 노력합니다."
  },
  {
    question: "자동차 이더넷에서 PoE (Power over Ethernet) 기술을 사용할 때, 데이터와 전력을 동시에 전송하는 물리적 수단은 무엇입니까?",
    options: ["광섬유", "별도의 전력선", "단일 트위스트 페어 케이블", "동축 케이블"],
    answer: 2,
    explain: "PoE는 데이터 통신에 사용되는 단일 트위스트 페어 케이블을 통해 데이터 신호와 함께 전력까지 공급하여 배선을 단순화합니다."
  },
  {
    question: "자동차 네트워크 통신 장비 정비 시, 와이어 하네스의 피복이 심하게 마모되거나 손상된 부분을 정비해야 하는 주된 이유는 무엇입니까?",
    options: ["ECU의 전력 소모 증가", "통신선의 단락 또는 접지 단락을 방지하여 통신 오류 예방", "엔진 소음 증가", "실내 습도 증가"],
    answer: 1,
    explain: "통신선의 피복 손상은 통신선이 차체나 다른 선과 접촉하여 단락을 일으킬 수 있으며, 이는 치명적인 통신 오류의 원인이 됩니다."
  },
  {
    question: "CAN 통신 진단 시, CAN-High와 CAN-Low 전압이 모두 접지 (0V)에 가까운 상태로 관찰되었다면 의심해야 할 결함은 무엇입니까?",
    options: ["종단 저항 불량", "ECU의 통신 모듈 단선", "통신선 전체의 접지 단락 (두 선 모두 접지와 단락)", "12V 전원 과다 공급"],
    answer: 2,
    explain: "두 통신선 모두 접지(0V)와 단락되면, CAN-High와 CAN-Low의 전압 차이가 발생하지 않아 통신이 불가능하며, 두 선의 전압 레벨이 0V로 고정됩니다."
  },
  {
    question: "MOST 네트워크에서 토큰 패싱 (Token Passing) 방식이 사용되는 주된 목적은 무엇입니까?",
    options: ["통신 속도 감소", "데이터 전송 거리 증가", "통신 버스 접근 권한을 순차적으로 부여하여 충돌 방지", "CAN과의 호환성 유지"],
    answer: 2,
    explain: "MOST의 제어 데이터는 토큰 패싱 방식으로 전송되어, 토큰을 가진 노드만이 통신을 할 수 있어 통신 충돌을 방지하고 순차적인 접근을 보장합니다."
  },
  {
    question: "자동차 네트워크 진단 시, J2534 Pass-Thru 장비가 사용되는 주된 목적은 무엇입니까?",
    options: ["오실로스코프 파형 측정", "외부 진단 소프트웨어와 차량 ECU 간의 통신 중계", "고전압 배터리 충전", "타이어 공기압 센서 활성화"],
    answer: 1,
    explain: "J2534는 표준화된 인터페이스를 통해 PC 기반의 외부 진단 프로그램이나 ECU 프로그래밍 소프트웨어와 차량 네트워크 사이의 통신 게이트웨이 역할을 수행합니다."
  },
  {
    question: "자율 주행 시스템에서 CAN 통신이 FlexRay나 이더넷으로 점차 대체되는 주된 기술적 이유는 무엇입니까?",
    options: ["CAN의 배선 단순성", "CAN의 저렴한 비용", "CAN의 낮은 대역폭과 비결정론적 특성", "CAN의 높은 전압 레벨"],
    answer: 2,
    explain: "자율 주행은 초고속/대용량의 데이터와 엄격한 실시간성 (결정론적)을 요구하므로, 기존 CAN은 대역폭과 실시간성 측면에서 한계를 가집니다."
  }
    
];

// 문제/보기 랜덤 섞기
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }
  
  // ✅ 문제 순서 랜덤 + 60문제 제한
  let questions = shuffleArray([...industry010802]).slice(0, 60);
  
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
    status.innerHTML = `<span id="scoreDisplay">자동차네트워크통신장비정비 2회차 총점: ${score}/${questions.length}</span>`;
  
    // 제출 버튼 제거
    document.getElementById("submitBtn").style.display = "none";
  
    // 결과창 표시
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<h2>자동차네트워크통신장비정비 2회차 총점: ${score}/${questions.length}</h2>`;
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