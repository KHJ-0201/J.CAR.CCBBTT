// -----------------------------
// 문제 배열
export const industry010803 = [
    {    
    question: "CAN 통신에서 비트 타이밍 (Bit Timing)을 설정하는 주된 목적은 무엇입니까?",
    options: ["통신선의 색상 지정", "통신 버스의 물리적 길이 조절", "각 ECU의 클럭 오차를 보상하고 데이터 동기화를 유지", "종단 저항 값 설정"],
    answer: 2,
    explain: "비트 타이밍은 통신 속도를 결정하고, 각 ECU의 샘플링 지점을 조정하여 클럭 오차를 보상함으로써 데이터 전송의 안정성과 정확도를 확보합니다."
  },
  {
    question: "LIN 통신 프레임의 식별자 (ID) 필드가 가질 수 있는 주된 값의 범위는 무엇입니까?",
    options: ["0부터 1023", "0부터 7", "0부터 63", "0부터 255"],
    answer: 2,
    explain: "LIN 통신은 6비트의 식별자를 사용하여 0부터 63까지의 메시지를 구분합니다. (ID 60~61은 진단용, 62~63은 예약됨)"
  },
  {
    question: "FlexRay 통신에서 콜드 스타트 (Cold Start) 과정의 가장 첫 단계에서 이루어져야 하는 필수적인 작업은 무엇입니까?",
    options: ["고전압 배터리 충전", "버스 가십 (Bus Guardian) 활성화", "진단 DTC 소거", "엔진 시동"],
    answer: 1,
    explain: "FlexRay의 콜드 스타트는 네트워크의 시간 동기화를 시작하는 과정이며, 이전에 버스 가십을 활성화하여 ECU가 정해진 시간 외에 통신하는 것을 막아야 통신 안정성을 확보할 수 있습니다."
  },
  {
    question: "자동차 네트워크 진단 시, DTC B1000과 같이 B-Code가 나타내는 시스템의 고장 위치는 주로 어디입니까?",
    options: ["엔진/변속기 (파워트레인)", "섀시 (제동/조향)", "바디/편의 장치", "네트워크 통신"],
    answer: 2,
    explain: "자동차 DTC 코드는 일반적으로 P(파워트레인), C(섀시), B(바디), U(네트워크 통신)로 분류됩니다."
  },
  {
    question: "CAN 통신에서 비트 스터핑 (Bit Stuffing)이 필요한 주된 이유는 무엇입니까?",
    options: ["데이터 전송 속도 향상", "통신선의 절연 저항 조절", "연속적인 동일 비트 발생 시, 비트 동기화를 상실하는 것을 방지", "메시지 우선순위 결정"],
    answer: 2,
    explain: "CAN은 5개의 동일 비트가 연속될 경우 강제로 반대 비트(Stuff Bit)를 삽입하여 동기화 비트 (Edge)를 생성, 클럭 동기화가 깨지는 것을 방지합니다."
  },
  {
    question: "자동차 이더넷에서 차량용 커넥터 (예: HMTD)가 일반적인 RJ-45 커넥터 대신 사용되는 주된 이유는 무엇입니까?",
    options: ["더 높은 전압 사용", "광섬유 지원", "진동, 온도 변화, 방수/방진 등 자동차 환경 요구 사항 충족", "더 낮은 통신 속도"],
    answer: 2,
    explain: "자동차 환경은 진동, 온도, 습도, EMI 등 가혹한 조건이 많으므로, 산업 표준을 만족하는 견고한 차량용 전용 커넥터가 사용됩니다."
  },
  {
    question: "LIN 통신에서 메시지 스케줄 테이블을 관리하고 실행하는 주체는 무엇입니까?",
    options: ["모든 슬레이브 ECU", "마스터 ECU", "게이트웨이", "CAN 트랜시버"],
    answer: 1,
    explain: "LIN 통신의 모든 통신 순서와 주기는 마스터 ECU에 저장된 스케줄 테이블에 의해 엄격하게 제어됩니다."
  },
  {
    question: "FlexRay 통신에서 Dynamic Segment 내의 데이터 전송이 비결정론적인 주된 이유는 무엇입니까?",
    options: ["통신 속도가 낮아서", "토큰 패싱 방식을 사용해서", "미니 슬롯팅 경쟁 기반으로 통신 권한을 얻기 때문", "이중 채널을 사용해서"],
    answer: 2,
    explain: "Dynamic Segment는 미니 슬롯팅에서 통신 권한을 얻기 위한 경쟁 방식이므로, 데이터 전송 시간이 확정되지 않아 비결정론적 특징을 가집니다."
  },
  {
    question: "CAN 통신 진단 시, CAN-High와 CAN-Low의 전압이 모두 Vcc (예: 5V)에 가까운 상태로 관찰되었다면 의심해야 할 결함은 무엇입니까?",
    options: ["종단 저항 단선", "통신선 전체의 전원 단락 (Vcc 단락)", "CAN-Low 선의 접지 단락", "ECU의 통신 모듈 단선"],
    answer: 1,
    explain: "두 통신선 모두 전원(Vcc)에 단락되면 두 선의 전압 레벨이 Vcc로 고정되어 Recessive 상태와 Dominant 상태의 구분이 불가능해집니다."
  },
  {
    question: "자동차 네트워크 진단에서 U-Code (예: U0100)가 나타내는 고장 위치는 주로 어디입니까?",
    options: ["엔진/변속기", "바디/편의 장치", "섀시 (제동/조향)", "네트워크 통신"],
    answer: 3,
    explain: "U-Code는 네트워크 통신 관련 고장, 즉 다른 ECU와의 통신 불능(Lost Communication)이나 데이터 오류를 나타냅니다."
  },
  {
    question: "CAN 통신에서 Standard ID (표준 식별자)가 사용될 때, 식별자 (ID)의 비트 길이는 몇 비트입니까?",
    options: ["7 비트", "11 비트", "29 비트", "64 비트"],
    answer: 1,
    explain: "Standard CAN은 11비트의 식별자 필드를 사용하여 메시지의 우선순위와 내용을 구분합니다."
  },
  {
    question: "자동차 네트워크의 펌웨어 (Firmware)를 업데이트할 때, 진단 장비와 ECU 간의 통신에 주로 사용되는 표준 프로토콜은 무엇입니까?",
    options: ["LIN", "FlexRay", "UDS (Unified Diagnostic Services)", "MOST"],
    answer: 2,
    explain: "UDS (ISO 14229)는 ECU 진단, DTC 읽기/삭제, 펌웨어 플래싱 (Programming) 등 모든 진단 서비스에 사용되는 범용 프로토콜입니다."
  },
  {
    question: "LIN 통신 프레임에서 슬립 모드 (Sleep Mode) 진입을 위해 마스터가 전송하는 특별한 프레임은 무엇입니까?",
    options: ["Wake-up 신호", "진단 요청 프레임", "Error Frame", "유휴 프레임"],
    answer: 1,
    explain: "마스터는 슬레이브들이 특정 시간 동안 통신이 없거나, 진단 요청 프레임 (ID 60)을 이용하여 슬립 모드 진입을 지시할 수 있습니다."
  },
  {
    question: "FlexRay 통신에서 시간 트리거 방식을 구현하기 위해 각 ECU가 가져야 하는 필수적인 요소는 무엇입니까?",
    options: ["대용량 메모리", "고성능 그래픽 카드", "매우 정밀한 로컬 클럭 (Clock)", "광통신 트랜시버"],
    answer: 2,
    explain: "FlexRay는 정확한 시간 동기화 기반이므로, 모든 노드가 오차 없이 시간을 측정할 수 있도록 매우 정밀한 클럭을 요구합니다."
  },
  {
    question: "CAN 통신에서 비트 중재 (Arbitration) 과정에 사용되는 비트는 무엇입니까?",
    options: ["CRC 필드", "식별자 (ID) 필드", "데이터 필드", "ACK 슬롯"],
    answer: 1,
    explain: "여러 ECU가 동시에 전송을 시도할 때, 식별자 (ID) 필드의 비트 값을 비교하여 Dominant (0) 비트를 전송한 쪽이 우선권을 가져 통신 충돌 없이 중재를 진행합니다."
  },
  {
    question: "자동차 이더넷이 링 (Ring) 토폴로지 대신 스타 (Star) 토폴로지를 사용하는 주된 이유는 무엇입니까?",
    options: ["케이블 길이 단축", "중앙 집중식 관리 및 단일 노드 고장 시 네트워크 전체 다운 방지", "저렴한 통신 비용", "LIN과의 호환성 확보"],
    answer: 1,
    explain: "스타 토폴로지는 중앙 스위치를 통해 관리되며, 하나의 케이블이나 노드 고장 시에도 네트워크 전체가 다운되는 것을 방지합니다."
  },
  {
    question: "CAN 통신 회로 진단 시, 종단 저항을 측정해야 하는 두 지점은 어디입니까?",
    options: ["CAN-High와 접지", "CAN-Low와 접지", "CAN-High와 CAN-Low", "ECU 전원과 접지"],
    answer: 2,
    explain: "종단 저항은 CAN-High와 CAN-Low 두 통신선 사이에 연결되어 신호 반사를 방지하므로, 이 두 선 사이의 저항을 측정해야 합니다."
  },
  {
    question: "자동차 네트워크 진단 시, DTC P-Code가 나타내는 고장 위치는 주로 어디입니까?",
    options: ["섀시 (제동/조향)", "바디/편의 장치", "엔진/변속기 (파워트레인)", "네트워크 통신"],
    answer: 2,
    explain: "P-Code는 파워트레인 관련 고장, 즉 엔진, 변속기, 연료 시스템 등 구동계통의 오류를 나타냅니다."
  },
  {
    question: "LIN 통신에서 마스터 ECU가 슬레이브 ECU에 전송하는 헤더 (Header)에 포함되지 않는 필드는 무엇입니까?",
    options: ["Break Field", "Sync Field", "Protected ID (식별자)", "데이터 필드"],
    answer: 3,
    explain: "헤더는 마스터가 전송하는 요청 부분이며, 데이터 필드와 체크섬은 슬레이브가 응답하는 응답 (Response) 부분에 포함됩니다."
  },
  {
    question: "FlexRay 통신에서 Static Segment에 할당된 데이터 슬롯의 가장 큰 특징은 무엇입니까?",
    options: ["슬롯 크기가 가변적이다", "슬롯 크기와 전송 시간이 고정되어 예측 가능", "경쟁 기반으로 통신한다", "데이터 지연 시간이 매우 길다"],
    answer: 1,
    explain: "Static Segment는 결정론적 통신을 위해 미리 정해진 고정된 크기의 슬롯을 할당하며, 전송 시간이 정확하게 예측 가능합니다."
  },
  {
    question: "CAN 통신의 물리적 레이어에서, 차동 신호 방식 (Differential Signaling)을 사용하는 주된 이점은 무엇입니까?",
    options: ["통신선 길이 단축", "외부 노이즈의 영향을 상쇄하여 통신 신뢰성 증대", "저렴한 통신 비용", "단일선 통신 지원"],
    answer: 1,
    explain: "차동 신호는 두 선에 동일하게 유입되는 노이즈를 전압 차 계산 과정에서 제거하여 노이즈에 대한 내성이 매우 높습니다."
  },
  {
    question: "자동차 이더넷에서 PHY (Physical Layer) 칩이 수행하는 주된 역할은 무엇입니까?",
    options: ["운전자에게 정보 표시", "통신선의 절연 저항 측정", "데이터 링크 레이어와 물리적 통신 매체 사이의 전기적/물리적 변환", "엔진 출력 제어"],
    answer: 2,
    explain: "PHY 칩은 이더넷 컨트롤러의 디지털 신호를 케이블로 전송 가능한 물리적 신호로 변환하고, 반대로 수신 신호를 디지털로 변환하는 역할을 합니다."
  },
  {
    question: "CAN 통신에서 Bus Off 상태에 진입한 ECU가 통신을 재개하기 위해 수행하는 과정은 무엇입니까?",
    options: ["LDC 초기화", "일정 횟수 이상의 Recessive 비트 (128회)를 기다린 후 재연결 시도", "엔진 재시동", "종단 저항 제거"],
    answer: 1,
    explain: "Bus Off 상태에서 ECU는 즉시 복귀할 수 없으며, 통신 버스에 잡음이 없는 상태를 확인한 후 (128회 11비트) 재연결 (Bus On)을 시도하여 통신을 재개합니다."
  },
  {
    question: "자동차 네트워크 진단 시, DTC C-Code가 나타내는 시스템의 고장 위치는 주로 어디입니까?",
    options: ["엔진/변속기", "섀시 (제동, 조향, 서스펜션)", "바디/편의 장치", "네트워크 통신"],
    answer: 1,
    explain: "C-Code는 섀시 관련 고장, 즉 ABS, VDC, EPS 등 제동, 조향, 서스펜션 시스템의 오류를 나타냅니다."
  },
  {
    question: "LIN 통신에서 Protected ID (식별자)에 포함된 패리티 비트의 주된 역할은 무엇입니까?",
    options: ["데이터 전송 속도 향상", "슬레이브 ECU의 클럭 동기화", "식별자 값의 오류 검출", "통신선에 전원 공급"],
    answer: 2,
    explain: "Protected ID는 식별자 6비트와 패리티 2비트로 구성되어, 마스터가 전송한 식별자 값의 오류가 발생했는지 확인하여 통신 신뢰도를 높입니다."
  },
  {
    question: "FlexRay 통신에서 Global Time (전역 시간)이 필요한 주된 이유는 무엇입니까?",
    options: ["통신 비용 절감", "배선 단순화", "모든 ECU가 통신 주기 및 시간을 정확하게 공유하여 동기화", "데이터 압축"],
    answer: 2,
    explain: "FlexRay는 시간 분할 기반이므로, 모든 노드가 정확히 동일한 시간을 기준으로 통신해야 하며, Global Time이 이를 위한 기준 시간을 제공합니다."
  },
  {
    question: "MOST 네트워크에서 제어 채널 (Control Channel)의 주된 역할은 무엇입니까?",
    options: ["대용량 비디오 데이터 전송", "오디오 스트리밍", "네트워크 관리, 설정, 진단 명령 전송", "차량의 구동 정보 전송"],
    answer: 2,
    explain: "MOST는 스트림 데이터 외에 네트워크의 제어 및 관리를 위한 저속의 제어 메시지를 전송하는 별도의 Control Channel을 운영합니다."
  },
  {
    question: "CAN 통신 진단 시, CAN-High와 CAN-Low의 전압 파형이 오실로스코프에서 평행하게 이동하는 현상이 관찰되었다면 의심해야 할 결함은 무엇입니까?",
    options: ["종단 저항 불량", "ECU의 통신 모듈 단선", "공통 모드 노이즈 (Common Mode Noise) 유입", "통신선 단락"],
    answer: 2,
    explain: "차동 신호 방식인 CAN에서 두 선의 전압이 함께 변동하는 것은 외부에서 유입된 공통 모드 노이즈의 특징입니다. (이 경우 전압 차는 유지되어 통신은 가능할 수 있음)"
  },
  {
    question: "자동차 이더넷에서 MAC (Media Access Control) 주소의 주된 역할은 무엇입니까?",
    options: ["데이터 전송 속도 결정", "네트워크 장치 (ECU)의 고유 식별", "통신 프로토콜 설정", "전원 공급 관리"],
    answer: 1,
    explain: "MAC 주소는 이더넷 네트워크 내에서 각 장치 (ECU)를 구분하고 데이터를 정확한 목적지로 전송하기 위한 하드웨어 고유 주소입니다."
  },
  {
    question: "LIN 통신에서 응답 (Response) 필드에 포함되지 않는 요소는 무엇입니까?",
    options: ["데이터 필드", "체크섬 필드", "Protected ID (식별자)", "데이터 바이트"],
    answer: 2,
    explain: "응답은 슬레이브가 전송하는 데이터와 체크섬으로 구성됩니다. Protected ID는 마스터가 전송하는 헤더에 포함됩니다."
  },
  {
    question: "CAN 통신에서 Error Passive 상태의 ECU가 통신에 복귀하기 위해 오류 카운트를 감소시키는 조건은 무엇입니까?",
    options: ["차량 시동 끄기", "오류가 없는 상태로 일정 횟수 이상의 메시지를 전송 또는 수신", "종단 저항 교체", "12V 보조 배터리 분리"],
    answer: 1,
    explain: "Error Passive 상태는 오류 카운트가 낮아져야만 Active 상태로 복귀할 수 있으며, 이는 정상적인 통신을 지속적으로 수행할 때 발생합니다."
  },
  {
    question: "자동차 네트워크의 사이버 보안을 강화하기 위해 통신 메시지를 암호화하고 인증하는 기술은 무엇입니까?",
    options: ["OTA", "AVAS", "SecOC (Secure On-board Communication)", "LDC"],
    answer: 2,
    explain: "SecOC는 ECU 간의 통신 메시지에 MAC (Message Authentication Code)을 추가하여 데이터의 무결성과 인증을 보장하는 보안 기술입니다."
  },
  {
    question: "FlexRay 통신에서 시간 분할 다중 접속 (TDMA) 방식이 적용되는 통신 세그먼트는 무엇입니까?",
    options: ["Dynamic Segment", "Static Segment", "Control Segment", "Stream Segment"],
    answer: 1,
    explain: "TDMA는 Static Segment에 적용되어, 각 ECU에 고정된 시간 슬롯을 할당함으로써 충돌 없는 결정론적 통신을 가능하게 합니다."
  },
  {
    question: "CAN 통신 회로 진단 시, 종단 저항을 측정했을 때 120Ω으로 측정되었다면 가장 유력한 결함은 무엇입니까?",
    options: ["CAN-High/Low 합선", "ECU의 전원 단선", "종단 저항 하나가 단선되어 나머지 하나만 측정", "통신선 단선"],
    answer: 2,
    explain: "정상적인 CAN 버스의 합성 종단 저항은 60Ω입니다. 120Ω으로 측정되는 경우는 주로 양 끝에 있는 120Ω 저항 중 하나가 단선되어 나머지 하나만 남아있을 때 발생합니다."
  },
  {
    question: "하이브리드/전기차의 충전 시스템 진단 시, PLC (Power Line Communication)를 사용하는 주된 목적은 무엇입니까?",
    options: ["차량 내부 네트워크 통신", "충전소와 차량 간의 통신 (예: ISO 15118)", "엔진 시동 제어", "실내 조명 제어"],
    answer: 1,
    explain: "PLC는 전력선을 통해 데이터 통신을 수행하며, 주로 충전 시스템에서 충전기와 차량 간의 제어 및 정보 교환 (통신 규약, 전력량 협상 등)에 사용됩니다."
  },
  {
    question: "LIN 통신 프레임의 Break Field가 수행하는 주된 역할은 무엇입니까?",
    options: ["데이터 전송 완료 알림", "통신 시작을 알리고 슬레이브 클럭을 리셋", "응답 데이터의 오류 검출", "절전 모드 진입"],
    answer: 1,
    explain: "Break Field는 마스터가 통신 프레임의 시작을 알리기 위해 전송하며, 슬레이브 ECU의 통신 클럭을 초기화 (리셋)하는 역할을 합니다."
  },
  {
    question: "자동차 네트워크 진단 시, J2534 Pass-Thru 장비를 사용하는 주된 목적이 아닌 것은 무엇입니까?",
    options: ["DTC 읽기/삭제", "오실로스코프를 이용한 파형 측정", "ECU 펌웨어 업데이트", "센서 데이터 스트리밍"],
    answer: 1,
    explain: "J2534는 주로 진단 및 프로그래밍을 위한 프로토콜 변환 및 중계 장치이며, 오실로스코프처럼 아날로그 파형을 직접 측정하는 용도로는 사용되지 않습니다."
  },
  {
    question: "MOST 네트워크에서 Stream Data가 전송되는 방식의 주된 특징은 무엇입니까?",
    options: ["패킷 기반의 비동기 통신", "시간 동기화된 연속적인 데이터 전송", "경쟁 기반의 데이터 전송", "단일 마스터-슬레이브 통신"],
    answer: 1,
    explain: "MOST의 Stream Data (오디오/비디오)는 시간 동기화된 상태로 연속적인 데이터 전송이 이루어져 끊김 없는 멀티미디어 환경을 제공합니다."
  },
  {
    question: "CAN 통신에서 Low-Speed CAN이 Single Wire Mode로 전환되어 통신을 유지할 수 있는 주된 이유는 무엇입니까?",
    options: ["종단 저항이 없어서", "CAN-Low 선을 사용하여 신호를 접지 기준으로 측정 가능", "통신 속도가 빨라서", "데이터 바이트가 길어서"],
    answer: 1,
    explain: "저속 CAN은 내고장성이 있어 한쪽 선이 단절될 경우, 나머지 선을 이용하여 접지 기준으로 신호를 측정하여 통신을 계속할 수 있습니다."
  }
];

// 문제/보기 랜덤 섞기
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }
  
  // ✅ 문제 순서 랜덤 + 60문제 제한
  let questions = shuffleArray([...industry010803]).slice(0, 60);
  
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
    status.innerHTML = `<span id="scoreDisplay">자동차네트워크통신장비정비 3회차 총점: ${score}/${questions.length}</span>`;
  
    // 제출 버튼 제거
    document.getElementById("submitBtn").style.display = "none";
  
    // 결과창 표시
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<h2>자동차네트워크통신장비정비 3회차 총점: ${score}/${questions.length}</h2>`;
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