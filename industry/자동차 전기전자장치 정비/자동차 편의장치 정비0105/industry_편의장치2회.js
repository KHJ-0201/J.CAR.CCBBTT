// -----------------------------
// 문제 배열
export const industry010502 = [
    {       
        question: "자동차가 고속으로 주행할 때 와이퍼 블레이드가 들뜨는 것을 방지하기 위해 와이퍼 암에 장착되는 부품은 무엇입습니까?",
        options: ["와이퍼 모터", "스포일러 또는 에어댐", "와이퍼 링크", "와셔 노즐"],
        answer: 1,
        explain: "와이퍼 암에 부착된 스포일러 또는 에어댐은 주행풍을 이용하여 블레이드를 유리 표면에 눌러주어 고속 주행 시 들뜸 현상을 방지합니다."
    },
    {
        question: "전자 제어식 에어컨 시스템에서 냉방 성능을 일시적으로 최대화하기 위해 운전자가 설정하는 기능은 무엇입니까?",
        options: ["오토(Auto) 모드", "히트(Heat) 모드", "이코노미(Economy) 모드", "맥스 쿨(Max Cool) 모드"],
        answer: 3,
        explain: "맥스 쿨(Max Cool) 모드는 실내 공기 순환(내기 순환), 최저 온도 설정, 최대 풍량 설정을 한 번에 작동시켜 냉방 성능을 최대로 끌어올리는 기능입니다."
    },
    {
        question: "자동차에서 리모컨 또는 스마트키의 배터리가 방전되었을 때 비상시 도어를 잠그거나 해제하는 데 사용하는 방식은 무엇입니까?",
        options: ["전자석 유도 방식", "무선 통신 방식", "기계식 키(Mechanical Key) 방식", "생체 인식 방식"],
        answer: 2,
        explain: "대부분의 스마트키나 리모컨에는 배터리 방전 시를 대비하여 내부에 비상용 기계식 키가 내장되어 있어 수동으로 도어 잠금/해제가 가능합니다."
    },
    {
        question: "열선 시트 시스템에서 온도 조절을 위해 주로 사용되는 센서로, 발열체 근처에 설치되어 온도를 감지하고 제어 모듈에 피드백을 주는 것은 무엇입니까?",
        options: ["PTC 히터", "서미스터(Thermistor)", "열선 와이어", "압력 센서"],
        answer: 1,
        explain: "서미스터(Thermistor)는 온도에 따라 저항값이 변하는 반도체 센서로, 열선 시트의 온도를 정확하게 측정하여 과열을 방지하고 설정 온도에 맞춥니다."
    },
    {
        question: "후방 카메라 시스템에서 후진 기어 작동 시 카메라 영상이 내비게이션 화면에 출력될 때 자동으로 화면 밝기를 조절하는 기능과 관련 있는 것은 무엇입니까?",
        options: ["화이트 밸런스 기능", "야간 조도 보정 기능", "화각 조정 기능", "GPS 연동 기능"],
        answer: 1,
        explain: "야간 조도 보정 기능은 주변 밝기에 따라 카메라의 노출과 감도를 조절하여 어두운 환경에서도 후방 영상을 명확하게 볼 수 있도록 해줍니다."
    },
    {
        question: "카 오디오 시스템에서 차량 속도에 비례하여 오디오의 볼륨을 자동으로 조절해 주는 기능은 무엇입니까?",
        options: ["이퀄라이저(Equalizer)", "라우드니스(Loudness) 기능", "자동 볼륨 제어(Speed-Sensitive Volume Control)", "페이더(Fader) 기능"],
        answer: 2,
        explain: "자동 볼륨 제어 기능은 주행 속도가 증가하여 노면 소음이나 풍절음이 커지면 오디오 볼륨을 자동으로 높여 운전자가 일정한 청취 환경을 유지할 수 있도록 합니다."
    },
    {
        question: "자동차 에어컨의 제습 난방(A/C Heating) 작동 시, 냉동 사이클과 히터 사이클이 동시에 작동하는 주된 이유는 무엇입니까?",
        options: ["냉방 성능을 높이기 위해서", "엔진 부하를 줄이기 위해서", "냉각수 온도를 조절하기 위해서", "공기의 습도를 낮추기 위해서"],
        answer: 3,
        explain: "제습 난방은 에어컨으로 공기를 냉각하여 습기를 제거(제습)한 후, 다시 히터를 통해 공기를 재가열하여 실내 온도와 습도를 동시에 쾌적하게 조절하기 위함입니다."
    },
    {
        question: "파워 도어 잠금 장치(PDL)의 회로 정비 시, 도어 액추에이터 구동용 릴레이에 대한 점검 사항으로 가장 중요하지 않은 것은 무엇입니까?",
        options: ["코일 저항 측정", "접점 상태 및 개폐 확인", "퓨즈의 정격 용량 확인", "도어 액추에이터 내부 부품의 윤활 상태 확인"],
        answer: 3,
        explain: "액추에이터 내부 부품의 윤활 상태 확인은 기계적인 마찰 저항을 확인하는 것이지, 릴레이 자체의 전기적 고장 여부를 확인하는 점검 사항은 아닙니다."
    },
    {
        question: "자동 레벨링 장치가 적용된 헤드램프의 역할로 옳은 것은 무엇입니까?",
        options: ["차량 속도에 따라 광량을 자동으로 조절한다.", "커브 주행 시 조향 방향으로 광축을 회전시킨다.", "차량의 적재량 또는 경사 변화에 따라 광축 높이를 자동으로 조절한다.", "주변 밝기에 따라 상향등과 하향등을 자동으로 전환한다."],
        answer: 2,
        explain: "헤드램프 자동 레벨링 장치는 차량의 앞뒤 기울기(적재량 또는 가속/감속) 변화를 감지하여 광축의 높이를 자동으로 조절함으로써 운전자의 시야를 확보하고 대향차 운전자의 눈부심을 방지합니다."
    },
    {
        question: "와이퍼 시스템에서 '미스트(Mist)' 기능을 작동했을 때의 특징은 무엇입니까?",
        options: ["와이퍼가 저속으로 연속 작동한다.", "와이퍼가 일시적으로 1회만 작동한다.", "와이퍼가 간헐적으로 작동한다.", "와이퍼가 고속으로 연속 작동한다."],
        answer: 1,
        explain: "미스트 기능은 안개비나 가벼운 비가 올 때처럼 짧은 시간 동안만 와이퍼를 작동시키고자 할 때 스위치를 잠깐 조작하면 1회만 작동하도록 설계된 기능입니다."
    },
    {
        question: "스마트키 시스템에서 사용되는 LF(Low Frequency) 통신 방식의 특징으로 옳은 것은 무엇입니까?",
        options: ["통신 거리가 길어 원격 시동에 주로 사용된다.", "장애물 투과율이 높아 지하 주차장에서 유리하다.", "통신 거리가 짧고 차량 주변의 특정 구역을 인식하는 데 사용된다.", "데이터 전송 속도가 매우 빠르다."],
        answer: 2,
        explain: "LF(장파)는 통신 거리가 매우 짧아(약 1~2m) 주로 도어 잠금/해제, 이모빌라이저 인증 등 차량 주변의 근거리 인증에 사용됩니다."
    },
    {
        question: "냉매 충전 시, 시스템 내부의 공기와 수분을 완전히 제거하여 냉동 사이클 효율을 높이는 가장 중요한 작업은 무엇입니까?",
        options: ["냉매 순환", "오일 주입", "진공 작업(Evacuation)", "가스 압력 테스트"],
        answer: 2,
        explain: "진공 작업은 냉동 시스템 내부의 잔류 공기 및 수분을 제거하여 냉매의 증발 온도와 압력을 일정하게 유지하고, 냉매 순환 효율을 극대화하는 필수 작업입니다."
    },
    {
        question: "전자 제어 파워 스티어링(EPS) 시스템에서 차량의 속도를 감지하여 저속에서는 조향력을 가볍게, 고속에서는 조향력을 무겁게 제어하는 센서는 무엇입니까?",
        options: ["토크 센서", "조향각 센서", "차속 센서(VSS)", "요 레이트 센서"],
        answer: 2,
        explain: "차속 센서(VSS)는 차량의 주행 속도를 ECU에 알려주어, 속도 변화에 따라 EPS 모터의 보조력을 가변적으로 제어하게 합니다."
    },
    {
        question: "운전자가 차량을 잠근 후에도 일정 시간 동안 헤드램프나 미등이 점등 상태를 유지하다가 자동으로 소등되는 기능은 무엇입니까?",
        options: ["오토 레벨링 기능", "웰컴 기능", "에스코트 기능(Follow-Me-Home)", "코너링 램프 기능"],
        answer: 2,
        explain: "에스코트 기능(Follow-Me-Home)은 운전자가 안전하게 차량에서 떨어진 후 소등되도록 일정 시간 동안 조명을 켜 두어 귀갓길을 밝혀주는 기능입니다."
    },
    {
        question: "자동차 에어컨 시스템에서 냉매 파이프의 색깔이 얼음처럼 하얗게 변색되거나 서리가 맺히는 현상의 주된 원인은 무엇입니까?",
        options: ["응축기 냉각 불량", "냉매 과충전", "증발기 또는 저압측 배관의 과도한 냉각", "압축기 내부 손상"],
        answer: 2,
        explain: "저압측 배관에 서리가 맺히는 것은 냉매가 과도하게 증발하거나 팽창 밸브 고장 등으로 인해 저압측 압력이 너무 낮아져 냉매의 증발 온도가 극단적으로 낮아졌기 때문입니다."
    },
    {
        question: "자동차 무선 도어 잠금 장치(RKE)의 송신부(리모컨)에서 수신부(차량)로 신호를 보낼 때, 보안을 위해 매번 다른 신호를 전송하는 기술은 무엇입니까?",
        options: ["고정 코드(Fixed Code)", "롤링 코드(Rolling Code) 또는 호핑 코드", "암호화(Encryption) 코드", "주파수 호핑(Frequency Hopping)"],
        answer: 1,
        explain: "롤링 코드(Rolling Code)는 리모컨을 누를 때마다 사전에 설정된 알고리즘에 따라 코드를 변경하여 전송함으로써, 신호 복제(스캐닝)를 통한 도난을 방지합니다."
    },
    {
        question: "운전자에게 주요 주행 정보(속도, 내비게이션 등)를 전면 유리창에 투사하여 시선 이동 없이 정보를 볼 수 있게 하는 시스템은 무엇입니까?",
        options: ["ADAS", "HUD(Head-Up Display)", "LCM(Lamp Control Module)", "IMS"],
        answer: 1,
        explain: "HUD(Head-Up Display)는 운전자의 시선이 전방 도로에서 벗어나지 않도록 차량 속도, 내비게이션 정보, 경고 메시지 등을 투영해 주는 편의 장치입니다."
    },
    {
        question: "파워 윈도우 시스템에서 윈도우 스위치를 'AUTO UP' 위치로 잠시 눌렀을 때, 유리가 끝까지 자동으로 올라가도록 명령을 내리는 부품은 무엇입니까?",
        options: ["윈도우 모터", "배선 하니스", "ECU 또는 도어 모듈", "메인 퓨즈"],
        answer: 2,
        explain: "파워 윈도우의 원터치(Auto) 기능은 도어 모듈(또는 윈도우 ECU)이 스위치 신호를 받아 모터에 지속적인 전원을 공급하여 끝까지 작동하도록 제어합니다."
    },
    {
        question: "사각지대 경고 시스템(BCW/BSD)에서 차량의 측후방 사각지대에 접근하는 차량을 감지하는 데 주로 사용되는 센서는 무엇입니까?",
        options: ["전방 카메라", "자이로 센서", "측후방 레이더 센서(Corner Radar)", "초음파 센서"],
        answer: 2,
        explain: "측후방 레이더 센서는 차량의 뒷범퍼 안쪽에 설치되어 레이더를 발사하고 반사 신호를 분석하여 사각지대 및 후방 접근 차량의 존재 여부와 거리를 감지합니다."
    },
    {
        question: "자동차 에어컨 시스템 정비 시, 냉매를 보충할 때 액상으로 충전해야 하는 주된 이유는 무엇입니까?",
        options: ["냉매의 증발을 방지하기 위해", "압축기의 손상을 막기 위해", "정확한 냉매 오일량을 시스템에 주입하기 위해", "혼합 냉매(R-134a 등)의 성분 비율을 유지하기 위해"],
        answer: 3,
        explain: "R-134a와 같은 혼합 냉매는 기체 상태로 주입할 경우 각 성분의 증발 속도가 달라져 성분 비율이 틀어질 수 있습니다. 따라서 액상으로 충전하여 균일한 성분비를 유지해야 합니다."
    },
    {
        question: "전자 제어식 에어컨에서 실내외 온도차에 의해 증발기에 성애가 생기는 것을 방지하고 냉방 성능을 유지하기 위한 제어는 무엇입니까?",
        options: ["맥스 쿨 제어", "히터 제어", "증발기 온도 제어(Evaporator Temperature Control)", "외기 도입 제어"],
        answer: 2,
        explain: "증발기 온도 제어는 증발기 온도가 설정 온도(보통 0~2°C) 이하로 떨어지는 것을 방지하기 위해 압축기 클러치를 ON/OFF 시키거나 가변 용량을 조절하는 핵심 제어입니다."
    },
    {
        question: "자동차의 방향 지시등(깜빡이)이 정상 속도보다 빠르게 깜빡이는 현상이 발생했을 때 의심할 수 있는 주요 원인은 무엇입니까?",
        options: ["배터리 전압 과도", "방향 지시등 릴레이 불량", "해당 회로의 램프 단선(전구 끊어짐)", "방향 지시등 스위치 고착"],
        answer: 2,
        explain: "방향 지시등 회로는 램프 한쪽이 단선되어 부하(저항)가 감소하면, 플래셔 유닛이 이를 경고 신호로 인식하고 정상보다 빠르게 깜빡이게 설계되어 있습니다."
    },
    {
        question: "와이퍼 시스템에서 와셔액 분사 시 와이퍼가 자동으로 2~3회 작동하도록 제어하는 부품은 무엇입니까?",
        options: ["와이퍼 모터", "와셔 펌프", "와셔액 레벨 센서", "와이퍼/와셔 제어 릴레이 또는 ECU"],
        answer: 3,
        explain: "와셔 스위치 작동 신호를 받아 와셔 펌프와 와이퍼 모터를 순차적으로 작동시키고, 와이퍼를 일정 횟수만 움직이게 제어하는 것은 와이퍼/와셔 제어 모듈(ECU)의 역할입니다."
    },
    {
        question: "차량용 오디오 시스템에서 잡음이나 간섭 없이 디지털 음질로 방송을 수신할 수 있게 하는 방송 시스템은 무엇입니까?",
        options: ["AM 방송", "FM 방송", "DAB(Digital Audio Broadcasting)", "SW 방송"],
        answer: 2,
        explain: "DAB(디지털 오디오 방송)은 아날로그 방송인 AM/FM과 달리 디지털 방식으로 신호를 전송하여 CD 수준의 깨끗한 음질과 다양한 부가 정보를 제공합니다."
    },
    {
        question: "차량의 주행 안정성 확보를 위해 커브길 주행 시 조향각에 따라 헤드램프의 광축을 좌우로 움직여 시야를 확보하는 조명 시스템은 무엇입니까?",
        options: ["DRL(주간 주행등)", "정적 코너링 램프", "AFS(Adaptive Front Lighting System)", "오토 레벨링 시스템"],
        answer: 2,
        explain: "AFS(지능형 전조등 시스템)는 스티어링 휠의 조향각, 차속 등을 분석하여 헤드램프의 광축(빔 패턴)을 능동적으로 조절하여 운전 시야를 넓혀줍니다."
    },
    {
        question: "냉매 회수 후 시스템에 냉매를 재충전하기 전, 시스템 내부의 수분을 제거하고 압력을 진공 상태로 만드는 작업을 무엇이라고 합니까?",
        options: ["가압 테스트", "퍼지(Purging) 작업", "냉매 플러싱", "진공 작업(Evacuation)"],
        answer: 3,
        explain: "냉매 시스템에서 수분은 부식을 유발하고 냉동 성능을 저해하므로, 진공 작업을 통해 시스템을 완전히 감압하여 수분을 증발시키고 외부로 배출해야 합니다."
    },
    {
        question: "전자식 사이드 미러 시스템에서 거울을 자동으로 접거나 펴는 기능을 수행하는 핵심 구동 부품은 무엇입니까?",
        options: ["열선", "미러 유리 조절 모터", "폴딩 모터(Folding Motor)", "광각 거울"],
        answer: 2,
        explain: "사이드 미러를 접고 펴는 기능은 폴딩 모터(Folding Motor)가 담당하며, 이 모터는 주로 도어 록/언록 신호나 별도의 폴딩 스위치에 의해 제어됩니다."
    },
    {
        question: "TPMS(타이어 공기압 모니터링 시스템)에서 타이어 공기압이 낮을 경우 경고등을 점등시키는 핵심 원리는 무엇입니까?",
        options: ["차량의 기울기 변화 감지", "타이어 온도 변화 감지", "타이어 내부 압력 송신기(센서)의 직접 측정", "휠 스피드 센서의 회전 반경 차이 감지"],
        answer: 2,
        explain: "TPMS는 타이어 내부에 설치된 센서(압력 송신기)가 타이어 내부 압력을 직접 측정하여 무선으로 ECU에 전송하는 방식을 사용합니다. (간접식 TPMS는 휠 스피드 센서를 사용하나, 정밀도는 직접식이 높습니다.)"
    },
    {
        question: "자동차 실내 조명(룸 램프) 시스템에서 도어가 열려 있을 때만 램프를 켜지도록 제어하는 부품은 무엇입니까?",
        options: ["조도 센서", "도어 래치 스위치 또는 도어 스위치", "디머 스위치", "광 센서"],
        answer: 1,
        explain: "도어 스위치는 도어가 열리면 접점이 붙어 전류를 통하게 하고, 도어가 닫히면 접점이 떨어져 전류를 차단하여 실내등 점등을 제어합니다."
    },
    {
        question: "자동차 에어컨의 공조기 모드 변환(예: 얼굴, 발, 성에 제거)을 제어하는 방식 중, 진공 압력을 이용하여 댐퍼를 구동하는 시스템은 무엇입니까?",
        options: ["케이블 구동 방식", "전자식 모터 구동 방식(Actuator Motor)", "유압식 구동 방식", "진공식 구동 방식(Vacuum Type)"],
        answer: 3,
        explain: "진공식 구동 방식은 엔진 흡기 매니폴드의 진공을 이용하여 다이어프램이 장착된 액추에이터를 움직여 공조기 내부의 댐퍼(바람의 방향을 바꾸는 문)를 제어합니다."
    },
    {
        question: "ADAS 기능 중, 앞차와의 거리를 유지하며 자동으로 가속 및 감속을 수행하는 크루즈 컨트롤 시스템은 무엇입니까?",
        options: ["SCM(Smart Cruise Control) 또는 ACC(Adaptive Cruise Control)", "LKAS(Lane Keeping Assist System)", "AEB(Autonomous Emergency Braking)", "FCW(Forward Collision Warning)"],
        answer: 0,
        explain: "스마트 크루즈 컨트롤(SCC) 또는 ACC는 레이더 센서와 카메라를 이용하여 앞차와의 간격을 설정하고 자동으로 속도를 조절하여 주행하는 시스템입니다."
    },
    {
        question: "파워 윈도우 시스템에서 원터치로 유리를 '내릴 때'는 자동으로 끝까지 작동하지만, '올릴 때'는 원터치 기능이 없는 차량이 많은 이유로 가장 적절한 것은 무엇입니까?",
        options: ["모터 내구성을 높이기 위해서", "원가 절감을 위해서", "회로가 복잡해지기 때문에", "끼임 방지 안전 기능이 필요하기 때문에"],
        answer: 3,
        explain: "유리를 올릴 때(닫을 때)는 사람이나 물체가 끼일 위험이 있어, 안전을 위해 끼임 방지 기능을 적용하지 않은 경우 원터치 '올림' 기능을 제공하지 않거나 별도의 제어 회로가 필요합니다."
    },
    {
        question: "차량용 내비게이션 시스템에서 실시간 교통 정보를 수신하여 경로를 재탐색하는 데 사용되는 기술은 무엇입니까?",
        options: ["VICS", "GPS", "TPEG(Transport Protocol Expert Group)", "RDS"],
        answer: 2,
        explain: "TPEG는 DMB 방송망을 이용하여 실시간 교통 정보(사고, 정체, 공사 등)를 수신하여 내비게이션 경로 안내에 활용하는 서비스입니다."
    },
    {
        question: "자동차 에어백 시스템에서 탑승자의 안전벨트를 순간적으로 되감아 몸을 시트에 고정시키는 장치는 무엇입니까?",
        options: ["인플레이터", "시트 벨트 앵커", "프리텐셔너(Pretensioner)", "에어백 쿠션"],
        answer: 2,
        explain: "프리텐셔너(Pretensioner)는 충돌 감지 시 폭발력을 이용해 안전벨트 버클을 빠르게 당기거나 벨트 자체를 되감아 탑승자를 시트에 밀착시켜 부상을 줄여줍니다."
    },
    {
        question: "전자 제어식 도어 잠금 장치에서 도어 내부의 전선이 손상되는 것을 방지하고 배선의 움직임을 자유롭게 하기 위해 사용되는 부품은 무엇입니까?",
        options: ["와이어 하네스", "도어 릴레이", "도어 모듈", "와이어 그로밋(Grommet) 또는 프로텍터"],
        answer: 3,
        explain: "와이어 그로밋은 도어와 차체 사이를 연결하는 부분에 장착되어 전선 다발이 문이 열리고 닫힐 때 마모되거나 손상되는 것을 보호합니다."
    },
    {
        question: "자동차용 헤드램프의 광원으로 사용되는 HID(High Intensity Discharge) 램프의 특징으로 옳지 않은 것은 무엇입니까?",
        options: ["밝기가 할로겐 램프보다 훨씬 밝다.", "수명이 길고 전력 소모가 적다.", "점등 시 순간적으로 높은 전압을 필요로 한다.", "필라멘트를 사용하여 빛을 발산한다."],
        answer: 3,
        explain: "HID 램프는 필라멘트 대신 램프 내부의 제논 가스에 순간적으로 수만 볼트의 고전압을 인가하여 방전(아크 방전)을 일으켜 빛을 발생시킵니다."
    },
    {
        question: "파워 윈도우 시스템 정비 시, 유리창이 '열림' 방향으로는 정상 작동하나 '닫힘' 방향으로만 작동하지 않을 때 가장 먼저 점검해야 할 부품은 무엇입니까?",
        options: ["배터리 전압", "윈도우 모터 자체의 고장", "윈도우 스위치 '닫힘' 접점", "윈도우 레귤레이터의 마모"],
        answer: 2,
        explain: "열림과 닫힘이 모터 하나로 이루어지는 경우, 한쪽 방향만 안 될 때는 모터의 고장보다는 해당 방향의 스위치 접점 불량이나 릴레이 불량일 가능성이 가장 높습니다."
    },
    {
        question: "후방 주차 보조 시스템에서 센서가 경보를 울리기 시작하는 지점을 나타내는 용어는 무엇입니까?",
        options: ["최소 감지 거리", "경고 시작 거리(Detection Range)", "최대 감지 거리", "장애물 인식 범위"],
        answer: 1,
        explain: "경고 시작 거리(Detection Range)는 초음파 센서가 장애물을 인식하고 제어 모듈이 운전자에게 최초로 경보음(단속음)을 울리기 시작하는 거리를 의미합니다."
    },
    {
        question: "자동차 에어컨 시스템에서 냉매가스에 윤활유 성분이 함께 순환하는 주된 목적은 무엇입니까?",
        options: ["냉매의 증발 온도를 낮추기 위해", "압축기의 마찰 및 마모를 방지하고 기밀을 유지하기 위해", "응축기의 열교환 효율을 높이기 위해", "시스템 내부의 수분을 흡수하기 위해"],
        answer: 1,
        explain: "냉동 시스템에서 냉매 오일은 냉매와 함께 순환하면서 압축기 내부의 고속 회전 부품을 윤활하여 마찰로 인한 손상을 방지하고, 피스톤과 실린더 사이의 기밀성을 유지합니다."
    },
    {
        question: "첨단 안전 장치 중, 정차된 상태에서 운전자가 도어를 열려고 할 때, 후방에서 접근하는 차량이 있을 경우 경고음을 발생시켜 충돌을 방지하는 기능은 무엇입니까?",
        options: ["차선 이탈 방지 보조", "하차 보조 경고(Safe Exit Assist)", "후측방 충돌 경고", "전방 충돌 방지 보조"],
        answer: 1,
        explain: "하차 보조 경고(SEA)는 측후방 레이더 센서를 이용하여 차량이 정차했을 때 도어 개방 영역으로 접근하는 차량을 감지하여 탑승자에게 경고함으로써 안전한 하차를 돕는 기능입니다."
    }
    
];

// 문제/보기 랜덤 섞기
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }
  
  // ✅ 문제 순서 랜덤 + 60문제 제한
  let questions = shuffleArray([...industry010502]).slice(0, 60);
  
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
    status.innerHTML = `<span id="scoreDisplay">자동차편의장치정비 2회차 총점: ${score}/${questions.length}</span>`;
  
    // 제출 버튼 제거
    document.getElementById("submitBtn").style.display = "none";
  
    // 결과창 표시
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<h2>자동차편의장치정비 2회차 총점: ${score}/${questions.length}</h2>`;
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