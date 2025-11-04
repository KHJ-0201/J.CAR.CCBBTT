// -----------------------------
// 문제 배열
export const industry010503 = [
    {       
        question: "자동차 에어컨 시스템에서 냉매 오일을 보충해야 하는 주된 상황은 무엇입니까?",
        options: ["냉매 순환이 너무 빠를 때", "시스템 내부의 수분을 제거할 때", "압축기 또는 주요 부품을 교환했을 때", "응축기 표면 온도가 높을 때"],
        answer: 2,
        explain: "냉매 오일은 냉매와 함께 순환하며 압축기를 윤활합니다. 압축기나 주요 배관, 증발기 등을 교체할 때는 시스템에서 오일이 유출되므로 반드시 규정량만큼 보충해야 합니다."
    },
    {
        question: "자동차 실내 공기 순환 시, 외기(Fresh Air) 유입 상태로 설정하는 것이 가장 필요한 상황은 무엇입니까?",
        options: ["실내를 급속 냉각할 때", "터널을 통과할 때", "김 서림(Fogging)을 제거할 때", "교통 체증이 심한 도심 주행 시"],
        answer: 2,
        explain: "차량 내부의 김 서림은 높은 습도 때문이며, 외기 유입은 외부의 건조한 공기를 유입시켜 실내 습도를 낮추고 이산화탄소 농도를 줄여 김 서림을 효과적으로 제거합니다."
    },
    {
        question: "전동식 파워 윈도우 시스템에서 모터의 극성을 바꿔주어 유리의 상승 및 하강 방향을 전환시키는 부품은 무엇입니까?",
        options: ["윈도우 퓨즈", "윈도우 레귤레이터", "윈도우 스위치 및 내부 회로", "윈도우 모듈 ECU"],
        answer: 2,
        explain: "윈도우 모터는 DC 모터이므로, 스위치 조작에 따라 모터에 공급되는 전원의 극성(+/-)을 바꾸어 주어야 회전 방향이 바뀌어 유리가 올라가거나 내려가게 됩니다."
    },
    {
        question: "자동차의 주행 중 시동을 끈 후에도 라디오, 오디오 등의 전원이 일정 시간 유지되거나 도어를 열 때까지 작동하도록 제어하는 기능은 무엇입니까?",
        options: ["페일 세이프 기능", "배터리 세이버 기능", "릴레이 유지 기능(Accessory Delay)", "자동 볼륨 제어 기능"],
        answer: 2,
        explain: "액세서리 지연(Accessory Delay) 또는 릴레이 유지 기능은 운전 편의를 위해 시동을 끈 후에도 일정 조건(예: 도어 열림)이 충족될 때까지 오디오나 윈도우 등의 전원을 유지해 주는 기능입니다."
    },
    {
        question: "차량 도어 잠금 장치에서 어린이의 안전을 위해 실내에서는 도어를 열 수 없도록 하는 잠금 기능은 무엇입니까?",
        options: ["스피드 센싱 록", "안티 핀치 기능", "차일드 록(Child Safety Lock)", "이지 액세스 기능"],
        answer: 2,
        explain: "차일드 록(Child Safety Lock)은 뒷좌석 도어에 설치되어 실내의 손잡이로는 문을 열 수 없게 하고, 외부 손잡이로만 열 수 있게 하여 주행 중 어린이의 안전을 확보합니다."
    },
    {
        question: "와이퍼가 작동하지 않을 때, 가장 먼저 와이퍼 모터에 전원이 공급되는지 확인하기 위해 점검해야 하는 부품은 무엇입니까?",
        options: ["와이퍼 블레이드", "와셔 펌프", "와이퍼 퓨즈 및 릴레이", "와이퍼 링크"],
        answer: 2,
        explain: "전기 장치 고장 시, 전원 공급의 시작점인 퓨즈와 대용량 전류를 제어하는 릴레이가 손상되었는지 여부를 가장 먼저 점검해야 합니다."
    },
    {
        question: "첨단 운전자 보조 시스템(ADAS) 중, 전방 차량과의 충돌 위험이 감지되었을 때 운전자에게 경고를 보내고, 필요한 경우 자동으로 제동을 거는 기능은 무엇입니까?",
        options: ["차선 이탈 경고(LDW)", "후측방 충돌 경고(BCW)", "전방 충돌 방지 보조(FCA/AEB)", "주차 거리 경고(PDW)"],
        answer: 2,
        explain: "전방 충돌 방지 보조(FCA) 또는 긴급 제동 보조(AEB)는 충돌 위험 시 경고 후 운전자가 반응하지 않으면 시스템이 스스로 브레이크를 작동시키는 기능입니다."
    },
    {
        question: "카 오디오 시스템에서 스피커에서 발생하는 소리의 저음과 고음 영역을 조절하여 음색을 변화시키는 제어 기능은 무엇입니까?",
        options: ["밸런스(Balance)", "페이더(Fader)", "톤 컨트롤(Tone Control - Bass/Treble)", "이퀄라이저(Equalizer)"],
        answer: 2,
        explain: "톤 컨트롤은 저음(Bass)과 고음(Treble) 영역의 크기를 조절하여 전체적인 음색을 사용자의 취향에 맞게 변화시키는 기능입니다."
    },
    {
        question: "자동차 에어컨 시스템에서 냉매 충전량이 규정보다 부족할 때 발생할 수 있는 현상으로 옳은 것은 무엇입니까?",
        options: ["압축기 작동 시 과부하 발생", "저압/고압이 모두 높게 측정됨", "냉각 성능 저하 및 압축기 과열 우려", "응축기에서 냉매가 완전히 액화되지 않음"],
        answer: 2,
        explain: "냉매가 부족하면 압축기 내부 순환 오일량도 줄어들어 윤활 불량으로 압축기가 과열될 수 있으며, 냉매 부족으로 증발량이 적어 냉각 성능이 저하됩니다."
    },
    {
        question: "파워 스티어링 시스템 중, 유압식 파워 스티어링(HPS)의 단점으로 옳은 것은 무엇입니까?",
        options: ["유지 보수가 복잡하고 부품 수가 많다.", "고속 주행 시 조향 보조력이 너무 약하다.", "운전자의 조향 의도를 정확히 파악하지 못한다.", "엔진 동력을 지속적으로 소모하여 연비에 불리하다."],
        answer: 3,
        explain: "HPS는 엔진 구동 벨트에 연결된 펌프가 시동이 켜져 있는 동안 계속 작동하여 유압을 발생시키므로, 지속적인 엔진 동력을 소모하여 연비에 불리합니다."
    },
    {
        question: "차량용 인포테인먼트 시스템에서 블루투스(Bluetooth) 기술의 주된 용도는 무엇입니까?",
        options: ["고속 데이터 다운로드", "위성 내비게이션 정보 수신", "스마트폰과의 핸즈프리 통화 및 오디오 스트리밍", "차량 간 통신(V2V)"],
        answer: 2,
        explain: "블루투스는 근거리 무선 통신 기술로, 차량에서는 주로 스마트폰을 연결하여 운전 중 안전한 핸즈프리 통화나 무선으로 음악을 재생(오디오 스트리밍)하는 데 사용됩니다."
    },
    {
        question: "자동차의 각종 퓨즈 박스 내에서 퓨즈 홀더 단자에 대한 정비 및 점검 사항으로 가장 적절한 것은 무엇입니까?",
        options: ["단자에 녹이 슬면 퓨즈 용량을 키운다.", "퓨즈를 제거하고 철사로 대체한다.", "단자에 이물질이나 산화물(녹)이 있는지 확인하고 제거한다.", "퓨즈 박스 전체를 물로 세척한다."],
        answer: 2,
        explain: "퓨즈 홀더 단자에 이물질이나 녹이 끼면 접촉 불량이 발생하여 퓨즈가 끊어지지 않아도 회로가 제대로 작동하지 않거나 열이 발생할 수 있으므로 청결하게 유지해야 합니다."
    },
    {
        question: "헤드램프를 끈 상태에서도 브레이크를 밟으면 미등이 점등되는 현상이 발생했을 때 의심해야 할 주요 고장 원인은 무엇입니까?",
        options: ["브레이크 스위치 불량", "헤드램프 스위치 불량", "접지 불량 또는 다른 회로와의 혼선", "배터리 방전"],
        answer: 2,
        explain: "전기 장치에서 접지 불량은 가장 흔한 고장 원인 중 하나로, 한 회로의 전류가 다른 회로(이 경우 미등 회로)로 역류하거나 혼선되어 비정상적인 작동을 유발할 수 있습니다."
    },
    {
        question: "자동차 에어컨의 팽창 밸브(TXV)가 고착되어 '완전히 열린' 상태로 고정되었을 때 발생할 수 있는 현상은 무엇입니까?",
        options: ["응축기 압력이 비정상적으로 높아짐", "증발기 과냉각 및 액체 냉매 역류 우려", "압축기 작동 빈도 증가", "고압이 비정상적으로 낮아짐"],
        answer: 1,
        explain: "팽창 밸브가 완전히 열리면 냉매가 증발기로 과도하게 유입되어 증발기에서 액체가 전부 기화되지 못하고 압축기로 액체 상태로 역류(액압축)될 위험이 있으며, 증발기 과냉각이 발생합니다."
    },
    {
        question: "ADAS 시스템에서 운전자가 밟는 가속 페달의 조작 의도를 ECU에 전달하는 센서는 무엇입니까?",
        options: ["스티어링 휠 각 센서", "브레이크 페달 센서", "액셀러레이터 포지션 센서(APS)", "요 레이트 센서"],
        answer: 2,
        explain: "액셀러레이터 포지션 센서(APS)는 운전자가 가속 페달을 밟는 깊이를 감지하여 엔진/변속기 ECU뿐만 아니라 ACC 등 주행 제어 시스템에도 중요한 정보를 제공합니다."
    },
    {
        question: "파워 윈도우 모터 고장 진단 시, 모터 단자에 직접 전원을 연결하여 모터의 작동 상태를 확인하는 주된 이유는 무엇입니까?",
        options: ["ECU의 고장 여부를 확인하기 위해", "스위치 접점의 저항을 측정하기 위해", "모터 자체의 기계적·전기적 불량 여부를 독립적으로 확인하기 위해", "배선 하네스의 단선 여부를 파악하기 위해"],
        answer: 2,
        explain: "모터에 직접 전원을 인가하는 것은 스위치나 ECU 등 제어부의 영향을 배제하고 모터 자체가 정상적으로 회전하는지, 기계적으로 고착되지 않았는지 등을 확인하는 가장 기본적인 방법입니다."
    },
    {
        question: "자동차의 도난 경보 시스템에서 차체의 기울기 변화를 감지하여 차량의 강제 견인이나 휠 도난 시 경보를 울리는 센서는 무엇입니까?",
        options: ["초음파 센서", "충격 센서", "경사 센서(Tilt Sensor)", "도어 스위치"],
        answer: 2,
        explain: "경사 센서(Tilt Sensor)는 차량이 비정상적으로 기울어지는 상황(예: 견인되거나, 휠 도난으로 한쪽이 들릴 때)을 감지하여 도난 경보를 작동시킵니다."
    },
    {
        question: "자동차 오디오 시스템에서 좌우 스피커의 출력 균형을 조절하여 운전석이나 조수석 등 특정 위치에 소리가 집중되도록 하는 기능은 무엇입니까?",
        options: ["페이더(Fader)", "톤 컨트롤", "밸런스(Balance)", "라우드니스"],
        answer: 2,
        explain: "밸런스(Balance)는 좌우(Left/Right) 스피커의 소리 크기를 조절하여 청취 위치에 맞게 소리의 균형을 맞추는 기능입니다."
    },
    {
        question: "에어백(SRS) 시스템에서 에어백을 전개시키는 데 사용되는 화약이 포함된 부품은 무엇입니까?",
        options: ["클럭 스프링", "안전 퓨즈", "인플레이터(Inflator)", "충돌 센서"],
        answer: 2,
        explain: "인플레이터(Inflator)는 에어백 모듈 내부에 장착되어 있으며, 충돌 신호가 오면 내장된 점화 장치가 화약을 폭발시켜 질소 가스 등을 순식간에 발생시켜 에어백 쿠션을 팽창시킵니다."
    },
    {
        question: "자동차의 주간 주행등(DRL, Daytime Running Light) 시스템의 주된 목적으로 옳은 것은 무엇입니까?",
        options: ["야간 운전 시 시야 확보", "주간에 다른 운전자에게 차량의 존재를 알려 사고를 예방", "차량의 미적 요소 강화", "전력 소모 절감"],
        answer: 1,
        explain: "DRL은 주간에 차량의 전방에 점등되어 다른 운전자나 보행자가 차량을 쉽게 인식하게 함으로써 교통사고를 예방하는 것이 주된 목적입니다."
    },
    {
        question: "냉방 사이클에서 압축기의 구동 방식에 따라 벨트를 사용하는 방식과 전기를 사용하는 방식으로 나눌 때, 전기를 사용하는 방식의 장점은 무엇입니까?",
        options: ["구조가 간단하다.", "엔진 동력 손실이 크다.", "엔진 시동 없이 냉방 작동이 가능하다.", "냉매 충전량이 적다."],
        answer: 2,
        explain: "전동식 압축기(E-Compressor)는 엔진 동력이 아닌 배터리 전기로 구동되므로, 하이브리드/전기차에서 엔진 시동 없이도 냉방 시스템을 작동시킬 수 있습니다."
    },
    {
        question: "파워 윈도우 정비 시, 유리가 올라가거나 내려갈 때 '덜컹'거리는 소리가 발생하는 경우 가장 먼저 점검해야 할 부품은 무엇입니까?",
        options: ["윈도우 모터", "윈도우 스위치", "윈도우 레귤레이터 및 고정 볼트", "배선 하네스"],
        answer: 2,
        explain: "윈도우 레귤레이터는 유리를 받쳐 올리고 내리는 기계 장치로, 소음이나 유리의 흔들림이 발생하면 레귤레이터의 마모, 변형 또는 레일 고정 볼트의 풀림 등을 의심해야 합니다."
    },
    {
        question: "후방 카메라 시스템에서 카메라 렌즈에 묻은 오염 물질을 제거하기 위해 와셔액을 분사하여 청소하는 장치는 무엇입니까?",
        options: ["히터", "와이퍼", "카메라 커버", "카메라 와셔(Washer) 노즐"],
        answer: 3,
        explain: "일부 고급 차량이나 SUV에는 후방 시야 확보를 위해 후방 카메라 렌즈를 청소할 수 있는 전용 카메라 와셔 노즐이 장착되어 있습니다."
    },
    {
        question: "첨단 운전자 보조 시스템(ADAS)에 사용되는 센서 중, 날씨나 조명 조건에 가장 큰 영향을 받아 성능이 저하될 수 있는 센서는 무엇입니까?",
        options: ["레이더 센서", "초음파 센서", "카메라 센서", "자이로 센서"],
        answer: 2,
        explain: "카메라 센서는 빛에 의존하여 물체를 인식하므로, 폭설, 폭우, 짙은 안개, 역광 등 날씨나 조명 조건이 극도로 나쁠 경우 물체 인식률이 크게 떨어집니다."
    },
    {
        question: "냉동 사이클에서 팽창 밸브(TXV)에 연결되어 증발기 출구의 과열도를 감지하고 밸브 개도를 조절하는 부품은 무엇입니까?",
        options: ["압력 센서", "수액기", "감온통(Sensing Bulb)", "고압 스위치"],
        answer: 2,
        explain: "감온통은 팽창 밸브의 핵심 구성 요소로, 증발기 출구의 온도 변화를 감지하여 밸브의 다이어프램에 힘을 전달함으로써 냉매 공급량을 조절합니다."
    },
    {
        question: "자동차가 비상등(Hazard Lamp)을 켰을 때, 방향 지시등과 함께 가장 빠르게 깜빡이는 부분은 어디입니까?",
        options: ["헤드램프", "브레이크 램프", "리어 포그 램프", "방향 지시등"],
        answer: 3,
        explain: "비상등은 좌우 방향 지시등이 동시에 깜빡이는 기능입니다. 따라서 방향 지시등(Direction Indicator Lamp)이 가장 빠르게 깜빡이는 부분입니다."
    },
    {
        question: "전자 제어식 도어 잠금 시스템에서 도어의 잠금 상태를 감지하여 도어 잠금 신호를 ECU에 전송하는 데 사용되는 센서는 무엇입니까?",
        options: ["솔레노이드", "액추에이터", "마이크로 스위치(Micro Switch)", "온도 센서"],
        answer: 2,
        explain: "도어 래치 어셈블리 내에는 잠금(Lock), 해제(Unlock), 닫힘(Closed) 등 도어의 기계적 상태를 감지하여 ECU에 전기 신호로 전달하는 마이크로 스위치가 내장되어 있습니다."
    },
    {
        question: "냉매가스 회수 시, 냉매 회수 장비가 액체 상태의 냉매를 먼저 회수하는 주된 이유는 무엇입니까?",
        options: ["압축기 손상을 방지하기 위해", "장비의 고압 측 압력을 낮추기 위해", "기체 상태보다 회수 속도를 높이기 위해", "시스템 내부의 수분을 제거하기 위해"],
        answer: 2,
        explain: "냉매를 액체 상태로 회수하면 부피당 질량이 커서 기체 상태보다 훨씬 빠르고 효율적으로 많은 양의 냉매를 회수할 수 있습니다."
    },
    {
        question: "파워 윈도우 시스템에서 원터치 '올림' 기능을 사용하던 중 끼임 방지 기능이 작동했을 때, 유리의 움직임은 어떻게 됩니까?",
        options: ["유리가 그 위치에서 멈춘다.", "유리가 완전히 닫힐 때까지 작동한다.", "유리가 즉시 멈추고 다시 일정량 하강한다.", "유리가 매우 느리게 올라간다."],
        answer: 2,
        explain: "끼임 방지 기능(Anti-Pinch)이 작동하면 안전을 위해 윈도우 모터의 작동을 즉시 중단하고 유리를 자동으로 다시 일정량 하강시켜 끼인 물체를 풀어줍니다."
    },
    {
        question: "TPMS 시스템 중, 간접식 TPMS가 공기압 저하를 감지하는 원리는 무엇입니까?",
        options: ["타이어 내부의 압력 센서로 직접 측정한다.", "공기압이 낮아진 타이어의 회전 반경 변화를 휠 스피드 센서로 감지한다.", "타이어의 온도를 측정한다.", "타이어 내부 진동을 측정한다."],
        answer: 1,
        explain: "간접식 TPMS는 공기압이 낮아진 타이어의 회전 반경이 줄어들어 다른 바퀴보다 더 빠르게 회전하는 현상을 ABS/ESP의 휠 스피드 센서를 이용하여 감지합니다."
    },
    {
        question: "자동 온도 조절 에어컨(FATC) 시스템에서 히터 코어로 흐르는 냉각수의 양을 조절하여 난방 성능을 제어하는 부품은 무엇입니까?",
        options: ["블로워 모터", "서모스탯", "히터 컨트롤 밸브(Water Valve)", "에어 믹스 댐퍼"],
        answer: 2,
        explain: "히터 컨트롤 밸브는 히터 코어로 유입되는 엔진 냉각수의 양을 전자적으로 조절하여 난방의 강도를 제어합니다. (현대/기아차 등 일부 차량은 댐퍼로만 조절함)"
    },
    {
        question: "자동차의 후진등(Reverse Lamp)의 작동 조건으로 옳은 것은 무엇입니까?",
        options: ["주행등 스위치가 켜지고 브레이크 페달을 밟았을 때", "시동이 켜지고 도어가 닫혔을 때", "시동이 켜진 상태에서 변속 레버가 'R'(후진) 위치에 있을 때", "주차 브레이크가 해제되었을 때"],
        answer: 2,
        explain: "후진등은 후진 기어 위치를 감지하는 후진등 스위치(또는 트랜스미션 레인지 센서)에 의해 제어되며, 후진 시 차량의 후진 의도를 알리고 후방 시야를 밝히는 역할을 합니다."
    },
    {
        question: "ADAS 시스템에서 차선 유지 보조(LKAS) 기능이 작동하기 위해 반드시 감지해야 하는 정보는 무엇입니까?",
        options: ["전방 차량의 속도", "측후방 차량의 유무", "차량의 조향각 및 차선 중앙 위치", "운전자의 페달 조작 여부"],
        answer: 2,
        explain: "LKAS는 전방 카메라를 통해 차선을 인식하고, 스티어링 휠 각 센서로 차량의 조향 상태를 파악하여 운전자가 차선을 벗어나지 않도록 조향을 보조합니다."
    },
    {
        question: "자동차 무선 도어 잠금 장치(RKE)에서 리모컨 작동 시 통신 거리가 갑자기 짧아진 경우, 가장 먼저 의심해야 할 고장 원인은 무엇입니까?",
        options: ["차량의 수신 안테나 단선", "도어 액추에이터 고착", "리모컨 배터리 수명 저하", "차량 ECU의 소프트웨어 오류"],
        answer: 2,
        explain: "RKE의 통신 거리가 줄어드는 가장 흔하고 일반적인 원인은 송신부인 리모컨 내부 배터리의 전압이 약해져 송신 전파의 출력이 약해졌기 때문입니다."
    },
    {
        question: "와이퍼 시스템에서 와이퍼 모터의 저속(LO) 단자와 고속(HI) 단자 사이를 전환시켜 속도를 제어하는 부품은 무엇입니까?",
        options: ["와이퍼 모터 내부의 영구 자석", "와이퍼 스위치", "와이퍼 퓨즈", "와이퍼 릴레이"],
        answer: 3,
        explain: "와이퍼 모터는 여러 개의 권선을 가지고 있으며, 와이퍼 릴레이 또는 제어 모듈이 스위치 신호에 따라 모터의 서로 다른 권선(저속용/고속용)에 전류를 연결하여 속도를 조절합니다."
    },
    {
        question: "자동차에서 실내등, 오디오, ECU 등에 전원을 공급하는 배터리의 장점으로 옳은 것은 무엇입니까?",
        options: ["화학 반응을 통해 전기를 소모하는 장치이다.", "무한정 전기를 공급할 수 있다.", "엔진 시동 시 필요한 대용량 전류를 순간적으로 공급한다.", "전압이 매우 높아 감전의 위험이 크다."],
        answer: 2,
        explain: "자동차 배터리의 주된 역할 중 하나는 시동 모터 구동에 필요한 순간적인 대용량 전류를 공급하는 것입니다."
    },
    {
        question: "파워 스티어링 시스템 중, MDPS(Motor Driven Power Steering)에서 운전자가 스티어링 휠에 가하는 힘을 감지하는 센서는 무엇입니까?",
        options: ["조향각 센서", "요 레이트 센서", "토크 센서(Torque Sensor)", "휠 스피드 센서"],
        answer: 2,
        explain: "토크 센서는 스티어링 샤프트의 비틀림(운전자의 조향 의도)을 감지하여, ECU가 이 정보에 따라 EPS 모터의 보조력을 얼마나 가할지 결정하는 핵심 센서입니다."
    },
    {
        question: "자동차 에어컨 시스템에서 팽창 밸브의 고장 진단 시, 팽창 밸브 입구와 출구의 압력 차이를 측정하는 주된 이유는 무엇입니까?",
        options: ["냉매의 온도를 확인하기 위해", "압축기의 흡입 능력을 확인하기 위해", "냉매의 감압 및 분사 기능의 정상 작동 여부를 확인하기 위해", "응축기의 효율을 측정하기 위해"],
        answer: 2,
        explain: "팽창 밸브는 고압의 액체 냉매를 저압으로 감압하여 분사하는 역할을 합니다. 밸브 입/출구 압력 차이가 규정값에서 크게 벗어나면 밸브가 제대로 열리거나 닫히지 않는다고 판단할 수 있습니다."
    },
    {
        question: "자동차가 내비게이션의 음성 안내를 할 때, 오디오 시스템의 음악 볼륨이 자동으로 낮아지는 기능은 무엇입니까?",
        options: ["뮤트(Mute) 기능", "자동 볼륨 제어 기능", "믹싱(Mixing) 기능", "음성 우선 기능(Voice Priority)"],
        answer: 3,
        explain: "음성 우선 기능은 내비게이션, 핸즈프리 통화, 주차 경고 등 중요한 음성 정보가 발생할 때, 기존에 재생되던 음악이나 방송의 볼륨을 자동으로 줄여서(덕킹, Ducking) 음성 정보가 잘 들리도록 하는 기능입니다."
    },
    {
        question: "자동차의 브레이크 램프가 항상 점등된 상태로 꺼지지 않을 때, 가장 먼저 점검해야 할 부품은 무엇입니까?",
        options: ["브레이크 램프 퓨즈", "브레이크 램프 릴레이", "브레이크 페달 스위치", "테일 램프 배선"],
        answer: 2,
        explain: "브레이크 램프의 상시 점등은 브레이크 페달을 밟지 않았는데도 스위치 접점이 붙어 있는 상태, 즉 브레이크 페달 스위치의 고착 또는 불량일 가능성이 가장 높습니다."
    },
    {
        question: "ADAS 시스템에서 차량 주변의 360도 상황을 한눈에 볼 수 있도록 여러 개의 카메라 영상을 합성하여 보여주는 시스템은 무엇입니까?",
        options: ["후방 주차 보조", "전방 충돌 경고", "어라운드 뷰 모니터(AVM)", "지능형 헤드램프"],
        answer: 2,
        explain: "어라운드 뷰 모니터(AVM)는 차량 주변에 장착된 여러 대의 광각 카메라 영상 정보를 ECU가 실시간으로 이어 붙여 마치 차량 위에서 내려다보는 듯한 360도 영상을 제공하는 시스템입니다."
    }
];

// 문제/보기 랜덤 섞기
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }
  
  // ✅ 문제 순서 랜덤 + 60문제 제한
  let questions = shuffleArray([...industry010503]).slice(0, 60);
  
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
    status.innerHTML = `<span id="scoreDisplay">자동차편의장치정비 3회차 총점: ${score}/${questions.length}</span>`;
  
    // 제출 버튼 제거
    document.getElementById("submitBtn").style.display = "none";
  
    // 결과창 표시
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<h2>자동차편의장치정비 3회차 총점: ${score}/${questions.length}</h2>`;
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