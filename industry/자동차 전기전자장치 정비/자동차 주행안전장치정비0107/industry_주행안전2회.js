// -----------------------------
// 문제 배열
export const industry010702 = [
    {    
    question: "드럼 브레이크 시스템에서 제동 시 슈를 드럼에 밀착시키는 역할을 하는 것은 무엇입습니까?",
    options: ["브레이크 캘리퍼", "휠 실린더", "프로포셔닝 밸브", "리턴 스프링"],
    answer: 1,
    explain: "휠 실린더는 마스터 실린더에서 온 유압을 이용하여 피스톤을 밀어 브레이크 슈를 드럼에 밀착시켜 제동력을 발생시킵니다."
  },
  {
    question: "타이어의 사이드 월에 표기된 '91V' 중, '91'이 나타내는 정보는 무엇입니까?",
    options: ["최대 속도 지수", "최대 하중 지수", "타이어의 폭", "림의 직경"],
    answer: 1,
    explain: "타이어 표기에서 숫자는 하중 지수 Load Index를 나타내며, 91은 해당 타이어가 지탱할 수 있는 최대 하중을 의미합니다. V는 속도 지수입니다."
  },
  {
    question: "브레이크액이 유압 시스템에 미치는 가장 부정적인 영향은 무엇입니까?",
    options: ["브레이크 디스크의 마모 촉진", "고무 실링 및 금속 부품의 부식", "타이어의 급격한 마모", "엔진 출력의 저하"],
    answer: 1,
    explain: "브레이크액의 수분 함량이 증가하면 끓는점이 낮아져 베이퍼 록을 유발하며, 시스템 내부의 금속 부품이나 고무 씰을 부식시키는 주요 원인이 됩니다."
  },
  {
    question: "스티어링 휠을 놓았을 때 차량이 한쪽으로 쏠리는 현상과 가장 관련 깊은 정비 항목은 무엇입니까?",
    options: ["엔진 오일 교환 주기", "휠 밸런스", "휠 얼라인먼트", "브레이크 패드 잔량"],
    answer: 2,
    explain: "휠 얼라인먼트가 틀어지면 직진 주행 시 차량이 한쪽으로 쏠리는 편마모 현상과 조향 불안정 현상이 발생합니다."
  },
  {
    question: "ABS 작동 시 제동 거리가 늘어나는 경우가 발생하는 노면 상태는 무엇입니까?",
    options: ["마른 아스팔트 노면", "젖은 아스팔트 노면", "모래나 자갈이 많은 노면", "깨끗한 콘크리트 노면"],
    answer: 2,
    explain: "모래나 자갈이 많은 노면에서는 바퀴를 완전히 잠가 모래를 쌓아 올리는 방식이 제동 거리를 단축시킬 수 있습니다. ABS는 잠김을 방지하므로 오히려 제동 거리가 늘어날 수 있습니다."
  },
  {
    question: "E-LSD Electronic Limited Slip Differential, 전자 제어 차동 제한 장치의 주요 기능은 무엇입니까?",
    options: ["핸들 조작 없이 자동 주차", "미끄러운 노면에서 좌우 바퀴의 구동력 배분", "주행 중 차량 속도에 따른 차체 높이 조절", "연료 효율을 높이기 위한 엔진 출력 제어"],
    answer: 1,
    explain: "E-LSD는 미끄러운 노면에서 한쪽 바퀴가 헛돌 때, 브레이크를 사용하여 미끄러지는 바퀴의 구동력을 다른 쪽 바퀴로 전달하여 구동력을 확보합니다."
  },
  {
    question: "브레이크 페달을 밟았을 때 페달이 푸석푸석하거나 스펀지를 밟는 듯한 느낌이 드는 가장 흔한 원인은 무엇입니까?",
    options: ["마스터 실린더 피스톤 고착", "브레이크액 누유", "브레이크 라인 내 공기 유입", "브레이크 디스크 과열"],
    answer: 2,
    explain: "브레이크 라인 내에 공기가 유입되면, 유압이 공기의 압축으로 인해 제대로 전달되지 않아 페달을 밟을 때 스펀지를 밟는 듯한 느낌이 발생합니다."
  },
  {
    question: "차량이 코너를 돌 때 원심력으로 인해 바깥쪽으로 밀려나는 현상을 무엇이라고 합니까?",
    options: ["오버 스티어", "언더 스티어", "요잉 Yawing", "롤링 Rolling"],
    answer: 1,
    explain: "언더 스티어는 차량이 운전자의 조향 각도보다 덜 회전하여 바깥쪽으로 밀려나가는 현상이며, 주로 앞바퀴의 접지력이 부족할 때 발생합니다."
  },
  {
    question: "타이어 교체 시 휠 밸런스 점검을 하는 주된 이유는 무엇입니까?",
    options: ["타이어 트레드의 수명 연장", "브레이크 제동력 향상", "고속 주행 시 핸들의 떨림 방지", "휠 얼라인먼트 조정"],
    answer: 2,
    explain: "휠 밸런스는 휠과 타이어의 무게 중심을 균형 있게 맞춰주는 작업으로, 불균형할 경우 고속 주행 시 핸들 떨림과 차체 진동이 발생합니다."
  },
  {
    question: "ESC 시스템 작동 시, ECU가 휠 속도 센서 외에 주로 참고하는 센서 정보는 무엇입니까?",
    options: ["연료 잔량 센서", "조향각 센서와 요 레이트 센서", "배기 온도 센서", "크랭크 각 센서"],
    answer: 1,
    explain: "ESC는 운전자의 의도(조향각 센서)와 차량의 실제 움직임(요 레이트 센서)을 비교하여 차량의 미끄러짐을 판단하고 제어합니다."
  },
  {
    question: "브레이크 드럼과 슈 사이의 간극을 자동으로 조정해주는 장치는 무엇입니까?",
    options: ["마스터 실린더", "로드 센싱 밸브", "자동 간극 조절기 어저스터", "브레이크 부스터"],
    answer: 2,
    explain: "자동 간극 조절기는 드럼 브레이크 시스템에서 브레이크 슈의 마모에 따라 드럼과의 간극을 항상 적정하게 유지하여 제동 성능을 확보합니다."
  },
  {
    question: "전방 충돌 방지 보조 시스템 Forward Collision-avoidance Assist, FCA의 주요 센서는 무엇입니까?",
    options: ["초음파 센서", "전방 카메라 및 레이더 센서", "자이로 센서", "가속도 센서"],
    answer: 1,
    explain: "FCA는 전방 카메라와 레이더 센서를 조합하여 전방의 차량, 보행자, 자전거 등을 감지하고 충돌 위험을 경고하거나 자동으로 제동을 합니다."
  },
  {
    question: "브레이크 디스크의 마모 상태를 점검하는 가장 정확한 방법은 무엇입니까?",
    options: ["육안으로 디스크의 색깔 확인", "마이크로미터로 두께 측정", "디스크를 손으로 만져보기", "디스크의 표면 거칠기 측정"],
    answer: 1,
    explain: "브레이크 디스크는 최소 허용 두께가 정해져 있으므로, 마이크로미터를 사용하여 실제 두께를 측정하는 것이 가장 정확한 점검 방법입니다."
  },
  {
    question: "서스펜션 시스템에서 볼 조인트 Ball Joint가 하는 역할은 무엇입니까?",
    options: ["충격 흡수 및 진동 감쇠", "차량의 높이 조절", "바퀴의 상하 운동과 조향 운동 허용", "휠의 회전 속도 감지"],
    answer: 2,
    explain: "볼 조인트는 서스펜션 암과 너클을 연결하여 바퀴가 상하로 움직이면서 동시에 조향(좌우 회전)이 가능하도록 해주는 역할을 합니다."
  },
  {
    question: "타이어의 펑크 시 자동으로 공기압을 채워주어 주행을 지속하게 해주는 기술은 무엇입니까?",
    options: ["런플랫 타이어", "셀프 실링 타이어", "타이어 공기압 보충 킷", "액티브 에어 서스펜션"],
    answer: 1,
    explain: "셀프 실링 타이어는 내부 코팅된 실런트가 작은 펑크가 났을 때 구멍을 스스로 메워 공기 누출을 막아주는 기술입니다."
  },
  {
    question: "디스크 브레이크의 캘리퍼 피스톤 고착 현상이 발생했을 때 나타나는 현상으로 가장 거리가 먼 것은 무엇입니까?",
    options: ["브레이크 끌림 드래그 발생", "제동 시 심한 쏠림", "브레이크 패드의 편마모", "브레이크 페달의 유격 과대"],
    answer: 3,
    explain: "피스톤이 고착되면 브레이크가 해제되지 않거나 한쪽만 작동하여 끌림, 쏠림, 편마모가 발생합니다. 페달 유격 과대는 주로 마스터 실린더나 페달 조정 불량과 관련이 있습니다."
  },
  {
    question: "ABS 센서의 고장 코드 확인 시 가장 먼저 점검해야 할 부위는 무엇입니까?",
    options: ["브레이크액의 양", "ABS ECU의 전원 공급 및 접지", "브레이크 페달의 유격", "타이어의 공기압"],
    answer: 1,
    explain: "전자 제어 장치 고장 진단 시, 센서 신호 점검 전에 ECU 자체의 전원 및 접지 상태가 정상인지를 먼저 확인해야 합니다."
  },
  {
    question: "브레이크액이 급격히 감소하는 경우 의심해야 할 주요 원인은 무엇입니까?",
    options: ["브레이크 디스크의 마모", "라인, 호스, 캘리퍼 등에서의 누유", "브레이크 부스터 내부 고장", "타이어 트레드의 마모"],
    answer: 1,
    explain: "브레이크액은 밀폐된 시스템이므로, 양이 급격히 감소하는 것은 외부로 액이 새어나가고 있는 누유 현상의 직접적인 증거입니다."
  },
  {
    question: "전기차 EV의 회생 제동 시스템 Regen Braking의 주요 목적은 무엇입니까?",
    options: ["차량의 외관 디자인 향상", "배터리 충전을 통한 주행 가능 거리 증가", "타이어의 수명 연장", "차량 내부 습도 조절"],
    answer: 1,
    explain: "회생 제동은 감속 시 발생하는 운동 에너지를 전기 에너지로 변환하여 배터리를 충전함으로써 주행 가능 거리를 늘리는 것이 주된 목적입니다."
  },
  {
    question: "차량의 무게 중심이 낮을 때 주행 안정성에 미치는 영향은 무엇입니까?",
    options: ["언더 스티어 현상 심화", "오버 스티어 현상 심화", "롤링 현상 감소 및 코너링 안정성 증가", "서스펜션 스프링 장력 증가"],
    answer: 2,
    explain: "무게 중심이 낮아지면 코너링 시 차체의 기울어짐 롤링이 줄어들어 코너링 한계가 높아지고 주행 안정성이 증가합니다."
  },
  {
    question: "타이어의 편마모 중, '숄더 마모 Shoulder Wear'가 발생하는 가장 흔한 원인은 무엇입니까?",
    options: ["낮은 타이어 공기압", "높은 타이어 공기압", "토우 값의 과대", "캠버 값의 불량"],
    answer: 0,
    explain: "공기압이 낮으면 타이어 중앙부가 아닌 양쪽 숄더 부분에 하중이 집중되어 양쪽 숄더만 마모되는 현상이 발생합니다."
  },
  {
    question: "브레이크 페달을 밟을 때 심한 소음과 함께 페달이 깊숙이 들어가는 현상과 관련된 부품은 무엇입니까?",
    options: ["브레이크 슈 또는 패드의 과도한 마모", "휠 밸런스 불량", "스티어링 펌프 고장", "ABS 모듈 고장"],
    answer: 0,
    explain: "브레이크 패드나 슈가 과도하게 마모되면 금속 부분이 디스크나 드럼에 직접 닿아 심한 소음이 발생하며, 제동력 확보를 위해 페달이 깊숙이 들어가게 됩니다."
  },
  {
    question: "타이어에 표기된 'TREADWEAR 200'에서 200이 의미하는 것은 무엇입니까?",
    options: ["타이어의 최대 하중", "타이어의 마모 속도 지수", "타이어의 열 발생 지수", "타이어의 최대 허용 속도"],
    answer: 1,
    explain: "TREADWEAR는 타이어의 마모 속도를 나타내는 지수이며, 숫자가 높을수록 수명이 길고, 낮을수록 마모가 빠릅니다 (즉, 접지력이 좋음)."
  },
  {
    question: "ESC가 작동하여 제동력을 조절할 때, 유압을 일시적으로 저장하는 부품은 무엇입니까?",
    options: ["마스터 실린더", "브레이크액 리저버", "어큐뮬레이터 축압기", "휠 실린더"],
    answer: 2,
    explain: "어큐뮬레이터는 ABS/ESC 시스템에서 솔레노이드 밸브가 유압을 차단하거나 해제할 때, 유압의 급격한 변동을 완화하고 일시적으로 유압을 저장하는 역할을 합니다."
  },
  {
    question: "유압식 파워 스티어링 시스템의 구성 요소가 아닌 것은 무엇입니까?",
    options: ["파워 스티어링 펌프", "오일 탱크", "스티어링 컬럼 모터", "스티어링 기어 박스"],
    answer: 2,
    explain: "스티어링 컬럼 모터는 MDPS Motor Driven Power Steering 등 전자식 파워 스티어링 시스템의 구성 요소입니다. 유압식은 펌프를 사용하여 유압을 발생시킵니다."
  },
  {
    question: "SCC Smart Cruise Control 작동 시, 앞차와의 안전 거리를 측정하는 센서는 주로 무엇입니까?",
    options: ["초음파 센서", "레이더 센서", "자외선 센서", "GPS 센서"],
    answer: 1,
    explain: "SCC는 전방 레이더 센서를 이용하여 앞차와의 거리를 정확하게 측정하고, 설정된 안전 거리를 자동으로 유지합니다."
  },
  {
    question: "브레이크 드럼 내부의 심한 스크래치나 손상이 제동에 미치는 영향은 무엇입니까?",
    options: ["브레이크액의 끓는점 상승", "제동 시 소음 및 떨림 발생", "ABS 센서의 오작동", "페달 유격의 자동 조정"],
    answer: 1,
    explain: "드럼 내부의 손상은 브레이크 슈와의 마찰 면적을 불균일하게 만들어 제동 시 소음, 떨림 저더 현상 및 제동력 불균형을 유발합니다."
  },
  {
    question: "LDWS Lane Departure Warning System의 작동 방식에 대한 설명으로 옳은 것은 무엇입니까?",
    options: ["차선 정보를 GPS로만 판단", "전방 카메라로 차선 인식 후 경고", "차량 하부의 자기 센서로 차선 감지", "레이더를 이용해 옆 차량과의 거리 측정"],
    answer: 1,
    explain: "LDWS는 전방 카메라로 도로의 차선 마커를 인식하고, 차량이 의도치 않게 차선을 이탈할 때 시각 및 청각 경고를 제공합니다."
  },
  {
    question: "서스펜션의 캠버 Camber 값에 대한 설명으로 옳은 것은 무엇입니까?",
    options: ["차량을 앞에서 볼 때 바퀴의 기울어진 정도", "차량을 위에서 볼 때 바퀴의 벌어진 정도", "차량의 앞뒤 바퀴 간 거리", "조향 시 바퀴가 회전하는 각도"],
    answer: 0,
    explain: "캠버는 차량을 앞에서 봤을 때 타이어가 수직선으로부터 기울어진 각도를 의미하며, 타이어 마모와 조향 안정성에 영향을 미칩니다."
  },
  {
    question: "브레이크액 교환 시 주의해야 할 사항으로 가장 중요한 것은 무엇입니까?",
    options: ["반드시 엔진을 켜고 작업", "브레이크액이 차량 도장면에 묻지 않도록 주의", "DOT3와 DOT4 브레이크액 혼합 사용", "브레이크액 온도 50도 유지"],
    answer: 1,
    explain: "브레이크액은 부식성이 강하므로 차량의 도장면이나 플라스틱, 고무 부품에 묻으면 손상을 줄 수 있어 작업 시 특히 주의해야 합니다."
  },
  {
    question: "AEB 시스템이 보행자를 감지할 때 주로 사용하는 기술은 무엇입니까?",
    options: ["GPS 위성 신호", "전방 카메라의 영상 분석", "타이어 공기압 센서", "운전자의 심박수 센서"],
    answer: 1,
    explain: "AEB는 레이더와 함께 고화질 전방 카메라를 사용하여 보행자의 형태와 움직임을 정밀하게 분석하여 충돌 위험을 판단합니다."
  },
  {
    question: "브레이크 마스터 실린더의 2중 회로 시스템을 사용하는 주된 이유는 무엇입니까?",
    options: ["브레이크액의 교체 용이성", "제동 시 소음 감소", "한쪽 회로 고장 시 제동력 유지", "브레이크 유압의 자동 조절"],
    answer: 2,
    explain: "2중 회로 시스템은 안전을 위해 한쪽 회로에 누유나 고장이 발생해도 나머지 회로가 작동하여 최소한의 제동력을 유지하도록 설계된 구조입니다."
  },
  {
    question: "스티어링 휠의 유격이 크다는 것은 어떤 문제의 징후일 수 있습니까?",
    options: ["휠 밸런스 불량", "서스펜션 스프링 손상", "조향 기어 박스 내부 마모", "타이어 공기압 과다"],
    answer: 2,
    explain: "스티어링 휠을 돌려도 바퀴가 즉시 반응하지 않고 헛도는 유격이 크다는 것은 주로 스티어링 기어 박스, 조인트 또는 연결 부품의 마모나 느슨함으로 인한 현상입니다."
  },
  {
    question: "TPMS 시스템에서 타이어 압력을 직접 측정하는 센서의 위치는 어디입니까?",
    options: ["타이어 트레드 내부", "휠 림 내부의 에어 밸브 쪽", "차량 ECU 내부", "마스터 실린더 근처"],
    answer: 1,
    explain: "직접 측정 방식 TPMS 센서는 공기 주입 밸브에 통합되어 휠 림 내부에 장착되며, 타이어 내부의 실제 압력과 온도를 측정합니다."
  },
  {
    question: "브레이크 제동 시 '스퀼' 소음이 발생하는 이유로 가장 거리가 먼 것은 무엇입니까?",
    options: ["패드나 디스크의 오염", "캘리퍼 슬라이드 핀의 고착", "패드 마모 한계 도달", "휠 속도 센서의 간극 불량"],
    answer: 3,
    explain: "스퀼 소음은 주로 패드와 디스크 간의 마찰 진동, 패드 마모, 또는 캘리퍼 부품의 작동 불량 등 제동 마찰 계통의 문제로 발생합니다. ABS 센서 고장은 경고등이나 ABS 작동 불량의 원인입니다."
  },
  {
    question: "오버 스티어 Over Steer 현상을 방지하기 위한 ESC의 주요 제어 방식은 무엇입니까?",
    options: ["엔진 출력 증가", "앞바퀴의 제동력 증가", "뒷바퀴의 제동력 감소", "바깥쪽 앞바퀴에 제동력을 가함"],
    answer: 3,
    explain: "오버 스티어는 차량 후미가 바깥으로 미끄러지는 현상입니다. 이를 방지하기 위해 ESC는 주로 선회 방향 바깥쪽 앞바퀴에 제동을 가하여 차량을 안쪽으로 돌려 안정화시킵니다."
  },
  {
    question: "타이어의 림 직경이 16인치인 타이어를 17인치 림에 장착할 수 없는 가장 큰 이유는 무엇입니까?",
    options: ["브레이크 시스템의 간섭", "타이어의 하중 지수 부족", "림과 타이어의 규격 불일치", "휠 밸런스의 불균형"],
    answer: 2,
    explain: "타이어와 림은 규격(직경)이 정확하게 일치해야 장착이 가능합니다. 규격이 다르면 장착이 불가능하며, 안전 상의 심각한 문제를 초래할 수 있습니다."
  },
  {
    question: "브레이크액이 누유되는 곳이 보이지 않는데도 브레이크액 레벨이 감소하는 경우 의심해야 할 부품은 무엇입니까?",
    options: ["브레이크 부스터 내부", "휠 밸런스 추", "스티어링 기어 박스", "에어 필터 하우징"],
    answer: 0,
    explain: "마스터 실린더 후방 씰이 손상되면 브레이크액이 마스터 실린더와 연결된 브레이크 부스터 내부로 유입되어 연소되거나 기화되므로 외부로 누유 흔적이 보이지 않으면서도 레벨이 감소할 수 있습니다."
  },
  {
    question: "ADAS 시스템에서 주로 사용되는 센서 중, 좁은 공간 주차 보조에 활용되는 것은 무엇입니까?",
    options: ["레이더 센서", "초음파 센서", "자이로 센서", "요 레이트 센서"],
    answer: 1,
    explain: "초음파 센서는 근거리에 있는 장애물 감지에 매우 효과적이어서, 주차 거리 경고나 주차 보조 시스템에 주로 사용됩니다."
  },
  {
    question: "자동차의 주행 안정성에 있어 횡풍에 가장 취약한 차량의 형태는 무엇입니까?",
    options: ["무게 중심이 낮고 폭이 넓은 차량", "무게 중심이 높고 측면 면적이 넓은 차량", "무게 중심이 낮고 길이가 짧은 차량", "무게 중심이 중앙에 집중된 차량"],
    answer: 1,
    explain: "무게 중심이 높고 측면에서 바람을 받는 면적이 넓은 차량, 예를 들어 SUV나 박스형 차량은 횡풍에 취약하여 주행 안정성이 저하될 수 있습니다."
  }
    
];

// 문제/보기 랜덤 섞기
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }
  
  // ✅ 문제 순서 랜덤 + 60문제 제한
  let questions = shuffleArray([...industry010702]).slice(0, 60);
  
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
    status.innerHTML = `<span id="scoreDisplay">자동차주행안전장치정비 2회차 총점: ${score}/${questions.length}</span>`;
  
    // 제출 버튼 제거
    document.getElementById("submitBtn").style.display = "none";
  
    // 결과창 표시
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<h2>자동차주행안전장치정비 2회차 총점: ${score}/${questions.length}</h2>`;
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