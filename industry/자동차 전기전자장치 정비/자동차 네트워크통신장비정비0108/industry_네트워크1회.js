// -----------------------------
// 문제 배열
export const industry010801 = [
    {    
    question: "자동차 네트워크 통신에서 가장 널리 사용되는 통신 방식이며, 고속 및 저속 통신이 모두 가능한 표준은 무엇입니까?",
    options: ["LIN", "CAN (Controller Area Network)", "FlexRay", "MOST"],
    answer: 1,
    explain: "CAN 통신은 높은 신뢰성과 유연성으로 인해 파워트레인, 차체 제어 등 자동차의 핵심 네트워크로 가장 널리 사용됩니다."
  },
  {
    question: "CAN 통신에서 여러 ECU가 동시에 데이터를 전송하려고 할 때, 데이터의 중요도에 따라 전송 우선순위를 결정하는 방식은 무엇입니까?",
    options: ["토큰 패싱", "마스터-슬레이브 방식", "비트 단위 중재 (Arbitration)", "CSMA/CA"],
    answer: 2,
    explain: "CAN 통신은 메시지 식별자 (ID)의 낮은 값에 높은 우선순위를 부여하며, 비트 단위로 중재하여 충돌 없이 데이터 전송을 관리합니다."
  },
  {
    question: "CAN 통신 회로의 종단 저항 (Termination Resistor)이 필요한 주된 이유는 무엇입니까?",
    options: ["통신 속도 감소", "데이터 패킷 크기 조절", "신호의 반사파를 흡수하여 통신 품질 확보", "ECU의 전력 공급"],
    answer: 2,
    explain: "종단 저항은 통신 케이블 끝에서 발생하는 신호의 반사파를 흡수하여 데이터의 오류를 방지하고 통신 신뢰도를 높이는 데 필수적입니다. 일반적으로 120Ω 저항 2개가 사용됩니다."
  },
  {
    question: "LIN Local Interconnect Network 통신이 주로 사용되는 시스템은 무엇입니까?",
    options: ["엔진 제어 및 변속기 제어", "에어백 및 ABS 등 안전 시스템", "도어, 창문, 시트 등 저속/단순 제어 시스템", "ADAS 및 인포테인먼트 시스템"],
    answer: 2,
    explain: "LIN은 CAN보다 저렴하고 간단하며, 주로 도어 모듈, 와이퍼, 라이팅 등 저속의 단순한 서브 시스템 제어에 사용됩니다."
  },
  {
    question: "FlexRay 통신 시스템의 가장 큰 특징 중 하나로, 시간 트리거 방식을 사용하여 높은 신뢰성을 확보하는 방식은 무엇입니까?",
    options: ["확률적 접근 방식", "시간 분할 다중 접속 (TDMA)", "CSMA/CD", "경쟁 기반 방식"],
    answer: 1,
    explain: "FlexRay는 TDMA (Time Division Multiple Access) 방식을 사용하여 각 ECU에 정해진 시간 슬롯을 할당함으로써, 통신 충돌이 없고 높은 실시간성 및 결정론적 (Deterministic) 통신이 가능합니다."
  },
  {
    question: "자동차 이더넷 (Automotive Ethernet) 통신이 기존 CAN 대비 갖는 가장 큰 장점은 무엇입니까?",
    options: ["저렴한 케이블 비용", "낮은 데이터 전송 속도", "ADAS 및 인포테인먼트를 위한 초고속 통신 속도", "단일 마스터-슬레이브 구조"],
    answer: 2,
    explain: "이더넷은 GB 단위의 데이터를 처리할 수 있어, 카메라, 레이더 등 ADAS 센서의 대용량 데이터 및 인포테인먼트 시스템의 고속 데이터 전송에 필수적입니다."
  },
  {
    question: "자동차 네트워크 진단 시, 오실로스코프를 사용하여 CAN-High 선과 CAN-Low 선의 전압 파형을 측정하는 주된 목적은 무엇입니까?",
    options: ["ECU 내부 온도 측정", "통신선의 신호 레벨, 반사파, 노이즈 확인", "케이블 길이 측정", "접지 저항 측정"],
    answer: 1,
    explain: "오실로스코프를 통해 통신 파형의 펄스 폭, 전압 레벨, 상승 및 하강 시간, 노이즈 등을 확인하여 물리적인 통신 상태를 정확하게 진단할 수 있습니다."
  },
  {
    question: "CAN 통신에서 Active Error Frame이 발생했을 때, 해당 메시지를 전송한 ECU가 취하는 조치는 무엇입니까?",
    options: ["즉시 통신 종료", "데이터 전송률 증가", "메시지를 재전송하여 오류 복구 시도", "CAN 통신 모듈 초기화"],
    answer: 2,
    explain: "Active Error Frame은 통신 오류를 모든 노드에 알리는 역할을 하며, 오류를 발견한 ECU는 해당 메시지를 오류로 간주하고 재전송을 시도하여 오류 복구를 수행합니다."
  },
  {
    question: "LIN 통신의 기본적인 구조 및 통신 제어 방식을 가장 잘 설명하는 것은 무엇입니까?",
    options: ["분산 제어, 경쟁 기반", "멀티 마스터, 토큰 기반", "단일 마스터, 다수 슬레이브 방식", "멀티 마스터, TDMA 기반"],
    answer: 2,
    explain: "LIN은 하나의 마스터 ECU가 통신을 주도하고, 다수의 슬레이브 ECU는 마스터의 요청에 따라 응답하는 단순한 마스터-슬레이브 구조를 가집니다."
  },
  {
    question: "FlexRay가 CAN 대비 갖는 결정적인 안전상의 장점으로, 하나의 채널이 고장나도 통신이 가능한 구조는 무엇입니까?",
    options: ["단일 종단 저항 사용", "저전력 모드 지원", "이중 채널 (Dual Channel) 구조", "토큰 패싱 방식"],
    answer: 2,
    explain: "FlexRay는 Channel A와 Channel B의 이중 채널 구조를 가질 수 있어, 하나의 채널에 문제가 생겨도 다른 채널로 통신을 유지하는 이중화 (Redundancy)를 지원하여 안전성이 높습니다."
  },
  {
    question: "자동차 네트워크 진단 시, CAN-High와 CAN-Low의 단선이 발생했을 때 나타나는 현상은 무엇입니까?",
    options: ["통신 속도 증가", "통신 모듈 과열", "통신선 단선 부위 이후의 통신 불능", "종단 저항 값의 감소"],
    answer: 2,
    explain: "CAN 버스에서 한쪽 라인이 단선되면 신호가 왜곡되거나 종단 저항의 역할이 상실되어 해당 단선 지점 이후의 통신이 중단되거나 오류가 발생합니다."
  },
  {
    question: "CAN 통신 프로토콜에서 데이터 필드가 가질 수 있는 최대 데이터 바이트 수는 얼마입니까?",
    options: ["2 바이트", "8 바이트", "16 바이트", "64 바이트"],
    answer: 1,
    explain: "CAN 통신 메시지의 데이터 필드는 최대 8바이트 (Byte)의 데이터를 전송할 수 있도록 설계되었습니다. (CAN FD는 최대 64바이트)"
  },
  {
    question: "자동차 통신 시스템 중, 주로 멀티미디어 데이터 (오디오/비디오) 전송에 특화된 광통신 기반의 네트워크는 무엇입니까?",
    options: ["CAN", "LIN", "MOST (Media Oriented Systems Transport)", "FlexRay"],
    answer: 2,
    explain: "MOST는 오디오/비디오 스트리밍과 같은 대용량 멀티미디어 데이터를 처리하기 위해 개발된 통신 프로토콜이며, 주로 광섬유를 사용합니다."
  },
  {
    question: "LIN 통신 시스템에서 슬레이브 ECU가 통신 오류를 일으켰을 때, 통신 오류를 복구하고 재시작을 유도하는 주체는 무엇입니까?",
    options: ["다른 슬레이브 ECU", "마스터 ECU", "게이트웨이", "종단 저항"],
    answer: 1,
    explain: "LIN은 마스터-슬레이브 구조이므로, 모든 통신 및 오류 복구의 주도권은 마스터 ECU에게 있으며, 슬레이브는 마스터의 지시에 따라 응답하거나 리셋됩니다."
  },
  {
    question: "FlexRay 통신에서 정적 세그먼트 (Static Segment)가 사용되는 주된 목적은 무엇입니까?",
    options: ["멀티미디어 데이터 전송", "가변적인 진단 데이터 전송", "실시간성 및 결정론적인 핵심 제어 데이터 전송", "비용 절감"],
    answer: 2,
    explain: "정적 세그먼트는 TDMA 방식으로 정해진 시간 슬롯에 따라 통신하여, ABS, VDC와 같은 실시간 제어가 필수적인 핵심 데이터 전송에 사용됩니다."
  },
  {
    question: "자동차 이더넷에서 UTP (Unshielded Twisted Pair) 케이블 대신 STP (Shielded Twisted Pair) 케이블을 사용했을 때 얻을 수 있는 주된 장점은 무엇입니까?",
    options: ["가격 경쟁력 확보", "케이블 무게 감소", "외부 노이즈 차단 및 EMI/EMC 성능 향상", "데이터 전송 거리 단축"],
    answer: 2,
    explain: "쉴드(차폐) 처리는 외부 전자기 간섭(EMI)과 노이즈 유입을 막고, 통신선에서 발생하는 전자기파 방출(EMC)을 줄여 통신 품질을 높입니다."
  },
  {
    question: "CAN 통신의 물리적 계층에서 CAN-High와 CAN-Low 두 선을 사용하는 주된 방식은 무엇입니까?",
    options: ["단일 종단 방식 (Single-ended)", "차동 신호 방식 (Differential Signaling)", "광학 통신 방식", "직렬 통신 방식"],
    answer: 1,
    explain: "CAN은 두 선의 전압 차이를 이용하여 데이터를 전송하는 차동 신호 방식을 채택하여, 노이즈에 강하고 신뢰성이 높습니다."
  },
  {
    question: "진단 장비 (스캐너)가 CAN 통신 네트워크의 오류를 감지하고 DTC를 생성하는 주된 원인은 무엇입니까?",
    options: ["냉각수 온도 상승", "엔진 오일량 부족", "정상적인 통신 메시지가 수신되지 않거나 오류 메시지가 과도하게 발생할 때", "실내 조명 밝기 변경"],
    answer: 2,
    explain: "ECU는 다른 ECU로부터 특정 주기 내에 필요한 데이터(메시지)를 수신해야 하는데, 통신선 단절이나 ECU 고장으로 인해 메시지 수신에 실패하거나, 에러 프레임이 반복되면 통신 오류로 간주하고 DTC를 발생시킵니다."
  },
  {
    question: "LIN 통신에서 마스터 ECU가 통신을 시작하기 위해 전송하는 필드는 무엇입니까?",
    options: ["CRC 필드", "데이터 필드", "헤더 필드 (Header Field)", "응답 필드"],
    answer: 2,
    explain: "LIN 통신은 마스터가 Header (동기 바이트, 식별자 포함)를 전송하면, 해당 ID를 가진 슬레이브가 Response (데이터, 체크섬 포함)를 응답하는 방식으로 이루어집니다."
  },
  {
    question: "FlexRay 통신에서 동적 세그먼트 (Dynamic Segment)가 사용되는 주된 목적은 무엇입니까?",
    options: ["실시간 제어", "에어백 시스템 제어", "가변적인 데이터 (진단, 설정, 이벤트) 전송", "엔진 시동 제어"],
    answer: 2,
    explain: "동적 세그먼트는 미니 슬롯팅 (Mini-Slotting) 기반으로 통신하여 가변적인 크기와 비결정론적 특성을 가지는 진단 데이터, 이벤트 데이터 등 유연한 데이터 전송에 사용됩니다."
  },
  {
    question: "CAN 통신에서 종단 저항 불량 또는 단선으로 인해 통신 파형에서 가장 흔하게 나타나는 특징은 무엇입니까?",
    options: ["파형의 전압 레벨 감소", "데이터 전송 속도 증가", "파형의 반사파 및 왜곡 심화", "파형의 주파수 증가"],
    answer: 2,
    explain: "종단 저항이 없으면 신호가 케이블 끝에서 반사되어 원래 신호와 합쳐지면서 신호 왜곡이 심해지고 데이터 오류가 급격히 증가합니다."
  },
  {
    question: "자동차 이더넷에서 PoE (Power over Ethernet) 기술이 적용될 경우 얻을 수 있는 가장 큰 이점은 무엇입니까?",
    options: ["통신 속도 증가", "데이터와 전력을 하나의 케이블로 공급", "통신선의 절연 저항 증가", "통신 충돌 감소"],
    answer: 1,
    explain: "PoE는 데이터 통신 케이블을 통해 전력을 함께 공급하므로, 별도의 전력선 배선이 필요 없어 배선 단순화 및 무게 감소 효과를 얻을 수 있습니다."
  },
  {
    question: "FlexRay 통신 시스템에서 정확한 시간 동기화 (Clock Synchronization)가 중요한 주된 이유는 무엇입니까?",
    options: ["통신선의 절연 저항 유지", "데이터 전송 효율 증가", "TDMA 방식 기반의 시간 분할 통신 신뢰성 확보", "전력 소모 감소"],
    answer: 2,
    explain: "FlexRay는 시간 분할 (TDMA) 방식이므로, 모든 노드가 정확하게 동기화된 시간을 공유해야 정해진 시간에 데이터를 전송하여 충돌 없이 통신이 가능합니다."
  },
  {
    question: "CAN 통신에서 High-Speed (고속) CAN이 주로 사용되는 시스템은 무엇입니까?",
    options: ["에어컨, 시트 등 편의 장치", "도어 잠금 장치", "엔진, 변속기, ABS 등 파워트레인 및 안전 시스템", "실내 조명"],
    answer: 2,
    explain: "고속 CAN (최대 1Mbps)은 실시간 제어가 필요한 핵심 구동/안전 시스템에 주로 사용되며, 통신선 두 쌍 (CAN-High, CAN-Low)을 모두 사용합니다."
  },
  {
    question: "자동차 네트워크 진단 시, 게이트웨이 ECU의 주된 역할은 무엇입니까?",
    options: ["통신선에 종단 저항 제공", "데이터의 전송 우선순위 결정", "서로 다른 통신 프로토콜 간 데이터 중계 및 변환", "12V 전원 공급"],
    answer: 2,
    explain: "게이트웨이 (Gateway)는 CAN, LIN, 이더넷 등 서로 다른 네트워크 사이에 위치하여, 데이터 메시지를 변환하고 필요한 네트워크로 중계하여 통신을 가능하게 합니다."
  },
  {
    question: "LIN 통신의 슬레이브 ECU가 마스터의 요청 없이 임의로 데이터를 전송할 수 없는 주된 이유는 무엇입니까?",
    options: ["낮은 통신 속도", "마스터의 헤더 요청이 없으면 응답하지 않는 마스터-슬레이브 구조", "토큰 패싱 방식", "광통신 사용"],
    answer: 1,
    explain: "LIN은 마스터가 요청하는 Header ID에 해당하는 슬레이브만 Response를 전송할 수 있는 엄격한 마스터-슬레이브 제어 방식을 따릅니다."
  },
  {
    question: "FlexRay 통신의 특징 중, 버스 가십 (Bus Guardian)이 수행하는 주된 기능은 무엇입니까?",
    options: ["메시지 압축", "통신 전압 레벨 조정", "ECU가 정해진 시간 슬롯 외에 통신하는 것을 방지", "통신 프로토콜 변환"],
    answer: 2,
    explain: "버스 가십은 FlexRay 통신의 시간 무결성을 보장하기 위해, ECU가 할당된 시간 외에 통신 버스를 사용하는 것을 엄격하게 감시하고 차단하는 역할을 합니다."
  },
  {
    question: "CAN 통신에서 Low-Speed (저속) CAN이 고속 CAN 대비 갖는 특징은 무엇입니까?",
    options: ["통신 충돌이 없음", "더 많은 데이터 바이트 전송", "한쪽 통신선이 고장나도 통신 지속 가능 (Single Wire Mode)", "주로 ADAS에 사용"],
    answer: 2,
    explain: "저속 CAN (최대 125kbps)은 주로 편의장치에 사용되며, 두 통신선 중 하나가 고장나도 나머지 한 선을 이용한 Single Wire 모드로 전환되어 통신을 계속할 수 있습니다."
  },
  {
    question: "자동차 네트워크에서 OTA (Over-The-Air) 업데이트 기능을 지원하기 위해 가장 필수적으로 요구되는 통신 네트워크는 무엇입니까?",
    options: ["LIN", "CAN", "MOST", "고속 이더넷 (Ethernet)"],
    answer: 3,
    explain: "OTA 업데이트는 대용량의 소프트웨어 파일을 차량으로 전송해야 하므로, 초고속 통신 속도를 제공하는 이더넷 네트워크가 필수적으로 요구됩니다."
  },
  {
    question: "CAN 통신 진단 시, 종단 저항 값이 정상 값 (60Ω)보다 훨씬 높은 120Ω으로 측정되었다면 가장 가능성이 높은 물리적 결함은 무엇입니까?",
    options: ["ECU 단락", "CAN-High와 CAN-Low 간의 단선", "종단 저항 하나가 단선", "CAN 통신 모듈 고장"],
    answer: 2,
    explain: "정상적인 CAN 버스는 120Ω 저항 2개가 병렬로 연결되어 60Ω의 합성 저항을 가집니다. 하나가 단선되면 나머지 하나(120Ω)만 측정되어 120Ω으로 측정될 가능성이 높습니다."
  },
  {
    question: "LIN 통신 프레임의 체크섬 (Checksum) 필드가 수행하는 주된 역할은 무엇입니까?",
    options: ["슬레이브 ECU 식별", "데이터 전송 우선순위 결정", "수신된 데이터의 오류 검출", "통신 속도 설정"],
    answer: 2,
    explain: "체크섬은 전송된 데이터 필드를 기반으로 계산된 값을 포함하여, 수신 측에서 동일한 계산을 통해 데이터 변조 또는 오류 발생 여부를 확인하는 데 사용됩니다."
  },
  {
    question: "FlexRay 통신에서 시간 트리거 방식 (Time-Triggered)을 사용하는 주된 이점은 무엇입니까?",
    options: ["저렴한 비용", "간단한 배선", "충돌이 없고, 통신 지연 시간이 정확하게 예측 가능", "유연한 데이터 전송"],
    answer: 2,
    explain: "시간 트리거 방식은 통신 충돌이 원천적으로 배제되며, 데이터 전송 시간이 미리 정해져 있으므로 ABS, 조향 등 안전 관련 시스템에 필수적인 결정론적 통신을 보장합니다."
  },
  {
    question: "CAN 통신 진단 시, 오실로스코프 파형에서 CAN-High와 CAN-Low 선이 서로 다른 진폭을 가지며 신호가 심하게 왜곡되는 주된 원인은 무엇입니까?",
    options: ["정상적인 통신", "엔진 출력 부족", "통신선의 단락 또는 접지 단락", "냉각수 온도 과열"],
    answer: 2,
    explain: "CAN 통신은 차동 신호 방식이므로, 두 선은 대칭적인 (Mirror Image) 파형을 가져야 합니다. 한쪽 선의 단락, 접지 단락 또는 전원 단락은 파형의 비대칭 및 왜곡을 유발합니다."
  },
  {
    question: "자동차 네트워크에서 게이트웨이가 필요한 주된 기술적 이유는 무엇입니까?",
    options: ["통신 속도 향상", "프로토콜/속도가 다른 네트워크 간 연결 및 데이터 전달", "ECU 개수 최소화", "배터리 전압 안정화"],
    answer: 1,
    explain: "게이트웨이는 CAN, LIN, FlexRay, 이더넷 등 서로 다른 특성을 가진 네트워크들이 데이터를 주고받을 수 있도록 프로토콜을 변환하고 중계하는 필수적인 역할을 합니다."
  },
  {
    question: "LIN 통신에서 절전 모드 (Sleep Mode)로 진입했을 때, 통신을 다시 깨우는 (Wake-up) 주체는 무엇입니까?",
    options: ["다른 슬레이브 ECU", "차량의 모든 ECU", "마스터 ECU 또는 슬레이브 자체의 Wake-up 신호", "종단 저항"],
    answer: 2,
    explain: "LIN 시스템은 절전 모드 진입 후, 마스터 ECU가 통신 버스에 Wake-up 신호를 전송하거나, 슬레이브 ECU가 도어 열림 등 외부 이벤트를 감지하여 Wake-up 신호를 전송함으로써 통신을 재개합니다."
  },
  {
    question: "FlexRay 통신에서 이중 채널 (Dual Channel)을 구성했을 때, 두 채널의 데이터 전송 속도 합이 CAN 통신보다 훨씬 빠른 주된 이유는 무엇입니까?",
    options: ["낮은 종단 저항 사용", "저전압 사용", "더 높은 비트 전송률 (예: 10Mbps) 및 이중화", "단순한 프로토콜 구조"],
    answer: 2,
    explain: "FlexRay는 단일 채널에서도 CAN보다 훨씬 빠른 10Mbps의 속도를 지원하며, 두 개의 채널이 병렬로 작동할 경우 통신 대역폭이 두 배가 되어 매우 빠른 속도를 가집니다."
  },
  {
    question: "CAN 통신 진단 시, 종단 저항 값이 정상 값 (60Ω)보다 훨씬 낮은 0Ω 근처로 측정되었다면 가장 가능성이 높은 물리적 결함은 무엇입니까?",
    options: ["종단 저항 하나 단선", "CAN-High와 CAN-Low 간의 단락 (합선)", "ECU 전원 공급 불량", "통신선 길이 초과"],
    answer: 1,
    explain: "CAN-High 선과 CAN-Low 선이 단락(합선)되면 두 선 사이의 저항이 매우 낮게 측정되어 0Ω에 가까운 값이 나옵니다."
  },
  {
    question: "자동차 네트워크 통신에서 MOST가 광섬유 (Optical Fiber) 케이블을 사용하는 주된 이유는 무엇입니까?",
    options: ["케이블 무게 감소", "외부 노이즈의 영향 최소화 및 초고속 대용량 데이터 전송", "낮은 설치 비용", "쉬운 진단"],
    answer: 1,
    explain: "광섬유는 구리선에 비해 매우 높은 대역폭을 제공하고 전자기 노이즈의 영향을 전혀 받지 않아, 대용량 멀티미디어 데이터 전송에 최적화되어 있습니다."
  },
  {
    question: "하이브리드/전기차의 파워트레인 제어에 FlexRay가 적용되는 주된 이유는 무엇입니까?",
    options: ["저렴한 비용", "간단한 배선", "고전압 시스템의 실시간, 고신뢰성 제어", "낮은 통신 속도"],
    answer: 2,
    explain: "하이브리드/전기차의 파워트레인 (모터, 인버터, BMS) 제어는 매우 엄격한 실시간성과 신뢰성을 요구하는데, FlexRay의 결정론적 통신 특성이 이에 가장 적합합니다."
  },
  {
    question: "LIN 통신에서 슬레이브의 응답 (Response)이 전송되는 것을 결정하는 주체는 무엇입니까?",
    options: ["통신 속도", "마스터가 전송한 헤더의 식별자 (ID)", "종단 저항 값", "슬레이브 자체의 타이머"],
    answer: 1,
    explain: "LIN 통신은 마스터가 Header (식별자 ID 포함)를 전송하면, 해당 ID에 해당하는 슬레이브만 Response (데이터)를 전송하는 방식으로 통신을 제어합니다."
  }
];

// 문제/보기 랜덤 섞기
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }
  
  // ✅ 문제 순서 랜덤 + 60문제 제한
  let questions = shuffleArray([...industry010801]).slice(0, 60);
  
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
    status.innerHTML = `<span id="scoreDisplay">자동차네트워크통신장비정비 1회차 총점: ${score}/${questions.length}</span>`;
  
    // 제출 버튼 제거
    document.getElementById("submitBtn").style.display = "none";
  
    // 결과창 표시
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<h2>자동차네트워크통신장비정비 1회차 총점: ${score}/${questions.length}</h2>`;
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