// -----------------------------
// 문제 배열
let allQuestions = [
    {
        question: "다음 파형 분석에 대한 설명으로 틀린 것은? (수정 필요/문제에 사진 들어가야함)", //수정필요 (문제에 파형 사진 들어가야함)
        options: ["4", "1", "3","2"],
        answer: 0,
        explain: "(정답)은 배터리 전원을 OFF시켰을 때 서지전압(피크전압)이다."
    },
    {
        question: "라디에이터 코어 막힘율을 구하는 공식은? (수정 필요/문제에 사진 들어가야함)", //수정필요 (문제에 사진 들어가야함)
        options: ["4", "1", "3","2"],
        answer: 2,
        explain: "<a href='https://blog.naver.com/PostView.naver?blogId=ddsp0201&Redirect=View&logNo=223471252658&categoryNo=11&isAfterWrite=true&isMrblogPost=false&isHappyBeanLeverage=true&contentLength=3096' target='_blank'>문제 해설</a>"
    },
    {
        question: "브레이크 계통에 공기가 혼입되었을 때 공기빼기 작업방법으로 틀린 것은?",
        options: ["블리더 플러그에 비닐 호스를 끼우고 그 한 끝을 브레이크 오일통에 넣는다.", "공기 배출작업 중 에어브리더 플러그를 잠그기 전에 페달을 놓는다.", "페달을 몇 번 밟고 브리더 플러그를 1/2~3/4 풀었다가 실린더 내압이 저하되기 전에 조인다.","마스터 실린더에 오일을 가득 넣은 후 반드시 공기배출을 해야 한다."],
        answer: 1,
        explain: "페달을 밟은 상태에서 블리더 플러그를 잠근다."
    },
    {
        question: "자동차 계기판의 온도계는 어느 부분의 온도를 표시하는가?",
        options: ["배기 매니폴드 부근의 냉각수 온도", "라디에이터의 냉각수 온도", "실린더 헤드 부위의 냉각수 온도","실린더 라이너 하단부의 냉각수 온도"],
        answer: 2,
        explain: "냉각수 온도는 실린더 헤드 쪽 재킷부의 수온센서에 의해 측정된다."
    },
    {
        question: "버튼 시동 시스템에서 단품 교환 후 키 등록이 필요없는 것은?",
        options: ["스마트 키 ECU", "전원분배 모듈", "스마트 키","실내 안테나"],
        answer: 3,
        explain: "스마트 키 ECU는 스마트 키(FOB키)의 인증정보를 받아 시동을 허용한다. 스마트 키의 배터리가 방전 될 경우 스마트 키를 FOB키 홀더에 꽂으면 전원분배모듈(PDM)에서 스마트 키의 인증정보를 받아 시동을 허용한다."
    },
    {
        question: "다음 중 수온센서는 어떤 소자를 이용한 것인가?",
        options: ["홀소자", "콘덴서", "트랜지스터","서미스터"],
        answer: 3,
        explain: "수온센서는 부특성 서미스터 소자를 이용한다."
    },
    {
        question: "저위발열량이 10500kcal/kg의 경유를 사용하고 제동 열효율이 30%인 디젤기관의 연료소비율(g/PS-h)은 약 얼마인가?",
        options: ["210", "200", "600","620"],
        answer: 1,
        explain: "<a href='https://blog.naver.com/PostView.naver?blogId=ddsp0201&Redirect=View&logNo=223471263595&categoryNo=11&isAfterWrite=true&isMrblogPost=false&isHappyBeanLeverage=true&contentLength=3099' target='_blank'>문제 해설</a>"
    },
    {
        question: "충전회로 내에서 과충전을 방지하기 위해 사용하는 다이오드는?",
        options: ["제너 다이오드", "발광 다이오드", "포토 다이오드","트랜지스터"],
        answer: 0,
        explain: "제너 다이오드는 역방향으로 일정값 이상의 전압이 가해 졌을 때 전류가 흐르는 특성을 이용하여 넓은 전류범위 에서 안정된 전압특성을 있어 정전압을 만들거나 과충전 방지 목적으로 사용된다."
    },
    {
        question: "가솔린 엔진의 흡기 다기관과 스로틀 밸브 사이의 위치한 서지탱크의 역할에 대한 설명으로 틀린 것은?",
        options: ["배기가스 흐름 제어", "실린더 상호 간의 흡입공기 간섭 방지", "연소실에 균일한 공기 공급","흡입공기 충진효율 증대"],
        answer: 0,
        explain: "서지탱크는 흡입계통에 해당하므로 배기가스 흐름과는 무관하다."
    },
    {
        question: "조향핸들이 1회전 하였을 때 피트먼암이 40° 움직였다. 조향기어비는?",
        options: ["9:1", "4.5:1", "45:1","0.9:1"],
        answer: 0,
        explain: "<a href='https://blog.naver.com/PostView.naver?blogId=ddsp0201&Redirect=View&logNo=223471231767&categoryNo=11&isAfterWrite=true&isMrblogPost=false&isHappyBeanLeverage=true&contentLength=3099' target='_blank'>문제 해설</a>"
    },
    {
        question: "엔진의 출력을 일정하게 하였을 때 가속성능을 향상시키기 위한 것이 아닌 것은?",
        options: ["주행저항을 작게 한다.", "자동차의 총중량을 크게 한다.", "종감속비를 크게 한다.","여유구동력을 크게 한다."],
        answer: 1,
        explain: "가속성능(토크)의 향상 조건\n•여유 구동력을 크게 한다.\n•바퀴의 유효반경을 작게 한다.\n•종감속비를 크게 한다.\n•주행저항을 작게 한다.\n•자동차의 중량을 가볍게 한다."
    },
    {
        question: "자동차 및 자동차부품의 성능과 기준에 관한 규칙상 안개등의 등광색으로 옳은 것은?",
        options: ["적색 또는 백색", "황색 또는 적색", "백색 또는 황색","백색 또는 청색"],
        answer: 2,
        explain: "안개등의 등광색은 백색 또는 황색이다."
    },
    {
        question: "휠 밸런스 점검 시 안전수칙으로 틀린 것은?",
        options: ["점검 후 테스터 스위치를 끄고 자연 정지시킨다.", "타이어의 회전방향에서 점검한다.", "적정 회전속도로 점검한다.","회전하는 휠에 손을 대지 않는다."],
        answer: 1,
        explain: "-"
    },
    {
        question: "주행 중 브레이크를 밟았을 때 차가 떨리는 원인으로 옳은 것은?",
        options: ["브레이크 페달 리턴 스프링이 약함", "브레이크 디스크의 변형", "브레이크 계통에 공기가 유입","패드 면에 그리스나 오일이 묻어 있음"],
        answer: 1,
        explain: "보기에서 차가 떨리는 원인은 브레이크 디스크의 변형이다.\n- 미끄러져 제동이 잘 안된다.\n- 브레이크 과열의 원인\n- 제동이 지연(페달 유격이 커짐)"
    },
    {
        question: "점화플러그에 불꽃이 튀지 않는 이유로 가장 적합하지 않는 것은?",
        options: ["ECU 불량", "파워 TR 불량", "점화 코일 불량","TPS 불량"],
        answer: 3,
        explain: "파워TR, 점화코일, ECU는 점화장치에 해당하며 이 부품의 불량시 점화가 되지 않으며, TPS(throttle position sensor)는 분사량 및 점화시기를 보정해주는 역할을 하며, 불꽃의 튀김과는 직접적인 관련이 없다.\n※ 점화시기 결정 센서 : CAS(크랭크각센서)\n※ TPS 불량 증상: 노킹발생, 가속불량, 간헐적 출력 부족 등"
    },
    {
        question: "유류화재에 물을 직접 뿌려 소화하지 않는 이유는?",
        options: ["물이 열분해 하기 때문이다.", "가연성 가스를 발생하기 때문이다.", "물과 화학적 반응을 일으키기 때문이다.","연소면이 확대되기 때문이다."],
        answer: 3,
        explain: "물을 뿌리면 유증기가 발생하여 연소면이 확대된다."
    },
    {
        question: "4A로 연속 방전하여 방전종지전압에 이를 때까지 20시간 소요되었다면 이 축전지의 용량(Ah)은?",
        options: ["80", "5", "60","0.2"],
        answer: 0,
        explain: "축전지의 용량[Ah]\n= 일정 방전전류(A) X 방전 종지 전압까지의 연속방전시간(H)\n= 4 × 20 = 80"
    },
    {
        question: "탱크, 피스톤 및 피스톤 컵, 리턴 스프링 등으로 구성되며, 클러치 페달을 밟았을 때 푸시로드에 의하여 피스톤과 피스톤 컵이 밀려서 유압이 발생하는 장치는?",
        options: ["마스터 실린더(master cylinder)", "릴리스 실린더(release cylinder)", "에어 부스터(air booster)","릴리스 포크(release fork)"],
        answer: 0,
        explain: "마스터 실린더 : 탱크, 피스톤 및 피스톤 컵, 리턴 스프링, 푸시로드 등으로 구성되며, 클러치 페달을 밟으면 푸시로드에 의하여 피스톤과 피스톤 컵이 밀려서 유압이 발생한다. 이 유압은 릴리스 실린더로 전달된다. 릴리스 실린더 : 피스톤 및 피스톤 컵, 푸시로드 등으로 구성되어 있다. 마스터 실린더에서 발생한 유압이 릴리스 실린더에 전달되면 피스톤 컵과 피스톤이 움직여서 푸시로드를 밀며, 릴리스 포크를 작동시켜 클러치를 차단한다."
    },
    {
        question: "점화장치에서 폐자로 점화코일에 흐르는 1차 전류를 차단했을 때 생기는 2차 전압은 약 얼마인가?",
        options: ["10000~15000 V", "40000~50000 V", "25000~30000 V","300~400V"],
        answer: 2,
        explain: "• 1차 전압 : 300~400V\n• 2차 전압 : 25,000~30,000 V"
    },
    {
        question: "점화플러그 불꽃시험 시 주의사항으로 옳은 것은?",
        options: ["크랭크 각 센서 탈거 후 점검", "배터리 (-)단자 탈거 후 점검", "점화스위치 ACC 상태 유지","고전압에 의한 감전 주의"],
        answer: 3,
        explain: "점화플러그의 불꽃시험 시 점화스위치가 ON되어야 배터리 전원이 ECU, 점화코일에 공급되고, 점화에 필요한 크랭크각센서의 신호가 필요하다.\n2차 코일에 2.5~3만 볼트의 전압이 발생되므로 감전에 주의해야 한다."
    },
    {
        question: "4기통 디젤엔진의 예열회로를 점검한 결과, 예열플러그 1개당 저항이 15옴 이었다. 회로를 직렬연결이며, 12V일 때 회로에 흐르는 전류는?",
        options: ["2 A", "20 A", "0.2 A","5 A"],
        answer: 2,
        explain: "<a href='https://blog.naver.com/PostView.naver?blogId=ddsp0201&Redirect=View&logNo=223471217253&categoryNo=11&isAfterWrite=true&isMrblogPost=false&isHappyBeanLeverage=true&contentLength=3095' target='_blank'>문제 해설</a>"
    },
    {
        question: "시동 전 연료장치의 육안 점검 방법으로 거리가 먼 것은?",
        options: ["연료 주입구 주변 부식 여부", "연료 수준 게이지 작동 여부", "연료 주입구 캡 잠김 여부","연료 라인 누유 상태, 체결 여부"],
        answer: 1,
        explain: "연료 수준 게이지는 연료탱크 내부에 위치하므로 육안 점검이 어렵다."
    },
    {
        question: "클러치 페달 교환 후 점검 및 작업 사항으로 옳은 것은?",
        options: ["클러치 오일 교환", "마스터 실린더 누유 점검", "클러치 페달 높이 및 유격 조정","릴리스 실린더 누유 점검"],
        answer: 2,
        explain: "클러치 페달 교환 후 클러치 페달 높이 및 유격을 조정해야 한다."
    },
    {
        question: "냉각장치에서 냉각팬을 교환하는 방법으로 틀린 것은?",
        options: ["화상에 주의하며 냉각수를 배출시킨다.", "시동을 끄고 냉각팬의 작동이 멈출 때까지 기다린다.", "냉각팬이 작동하지 않도록 배터리 (-) 터미널을 탈거한다.","냉각팬의 고정볼트를 풀고 냉각팬을 탈거한다."],
        answer: 0,
        explain: "구조상 냉각팬은 라디에이터 뒤에 위치하여 라디에이터를 냉각하므로 냉각팬 교환 시 냉각수를 배출할 필요가 없다."
    },
    {
        question: "엔진오일의 유압이 규정값보다 높아지는 원인이 아닌 것은?",
        options: ["윤활라인의 일부 또는 전부가 막힘", "오일량 부족", "엔진 과냉","유압조절밸브 스프링의 장력이 과다"],
        answer: 1,
        explain: "유압 상승원인\n•엔진 과냉으로 인한 오일 점도가 높아짐\n•윤활라인 내의 일부가 막힘\n•오일 필터의 막힘\n•유압조절밸브 스프링의 장력이 과다\n\n유압하강 원인\n•크랭크축베어링 마모로 인한 오일간극 커짐\n•오일펌프 마멸, 윤활라인 내 누설\n•오일량 부족\n•유압조절밸브 스프링의 장력 약함\n•낮은 점도, 오일에 휘발유 희석 등"
    },
    {
        question: "기관의 회전수가 5500rpm이고 기관출력이 70PS이며 총감속비가 5.5일 때 뒤 액슬축의 회전수는?",
        options: ["1000 rpm", "800rpm", "1200rpm","1400rpm"],
        answer: 0,
        explain: "<a href='https://blog.naver.com/PostView.naver?blogId=ddsp0201&Redirect=View&logNo=223471264647&categoryNo=11&isAfterWrite=true&isMrblogPost=false&isHappyBeanLeverage=true&contentLength=3099' target='_blank'>문제 해설</a>"
    },
    {
        question: "열안전성이 우수하고 내산화성, 내수성이 좋으며, 사용온도 범위가 넓고 사용범위가 광범위하게 사용되는 그리스는?",
        options: ["실리콘 그리스", "칼슘 비누 그리스", "리튬 비누 그리스","광유 그리스"],
        answer: 2,
        explain: "내열성, 내수성, 기계적 안전성이 우수하여 광범위한 용도로 사용된다. 외관은 버터 모양이며, 사용온도범위는 -30°C ~ 130°C이다."
    },
    {
        question: "랙-피니언형 동력조향장치 교환 시 작업요소가 아닌 것은?",
        options: ["신품 장착 후 유압라인 공기빼기 작업을 한다.", "타이로드 록-너트를 분리한다.", "교환 작업 완료 후 앞바퀴 얼라이먼트를 조정한다.","동력조향장치의 오일을 배출한다."],
        answer: 1,
        explain: "타이로드 록 너트는 토인을 조정하는 역할을 한다. 만약 타이로드엔드를 분리하면 타이로드의 록너트를 분리할 필요는 없다.\n동력조향장치의 구성품을 교환할 때는 필수적으로 오일을 배출해야 하며, 신품 장착 후 오일을 충분히 공급하고 공기빼기 작업을 해야 한다."
    },
    {
        question: "윈드실드 와이퍼 작동 시 와이퍼 블레이드의 떨림 현상과 닦임 불량 현상의 원인은?",
        options: ["와이퍼 모터의 단선", "전면유리에 왁스 또는 기름이 묻음", "와이퍼 모터 파킹스위치 접촉 불량","와이어 스위치의 불량"],
        answer: 1,
        explain: "전면유리에 왁스 또는 기름이 묻을 때 와이퍼 블레이드의 떨림 현상과 닦임 불량 현상이 일어난다."
    },
    {
        question: "조정 렌치의 사용 방법으로 틀린 것은?",
        options: ["고정 조에 힘이 가해지도록 사용해야 한다.", "볼트, 너트의 크기에 따라 조(jaw)의 크기를 조절하여 사용한다.", "조정너트를 돌려 조(jaw)가 볼트에 꼭 끼이게 한다.","큰 볼트를 풀 때는 렌치 끝에 파이프를 끼워 강하게 돌린다."],
        answer: 3,
        explain: "파이프 이탈로 인한 안전사고 방지를 위해 파이프를 끼 워 사용하지 않는다."
    },
    {
        question: "작업장의 화재분류로 옳은 것은?",
        options: ["B급 화재 - 유류화재", "C급 화재 - 금속화재", "A급 화재 - 전기화재","D급 화재 - 일반화재"],
        answer: 0,
        explain: "• A급 화재 - 일반화재(목재, 종이, 천 등)\n• B급 화재 - 기름 화재 (인화성 액체 등)\n• C급 화재 - 전기화재\n• D급 화재 - 금속 화재 (마그네슘, 나트륨, 칼륨 등)"
    },
    {
        question: "산소센서 고장으로 인해 발생되는 현상으로 옳은 것은?",
        options: ["변속 불능", "연비 향상", "가속력 향상","유해 배출가스 증가"],
        answer: 3,
        explain: "산소센서는 공연비를 보정하므로 고장 시 유해 배출가스가 증가한다."
    },
    {
        question: "동력조향장치 정비 시 안전 및 유의사항으로 틀린 것은?",
        options: ["각종 볼트 및 너트는 규정토크로 조인다.", "자동차 하부에서 작업할 때는 시야확보를 위해 보안경을 벗는다.", "자동차 하부에서 작업할 때는 시야확보를 위해 보안경을 벗는다.","제작사의 정비 지침서를 참고하여 점검·정비한다."],
        answer: 1,
        explain: "-"
    },
    {
        question: "안전벨트 프리텐셔너의 설명으로 틀린 것은?",
        options: ["에어백 전개 후 탑승객의 구속력이 일정 시간 후 풀어주는 리미터 역할을 한다.", "자동차 충돌 시 2차 상해를 예방하는 역할을 한다.", "차량 충돌 시 신체의 구속력을 높여 안전성을 향상시킨다.","자동차 후면 추돌 시 에어백을 빠르게 전개시킨 후 구속력을 증가시킨다."],
        answer: 3,
        explain: "벨트 프리텐셔너(pre-tensioner)\n충돌 시 반작용으로 운전자가 앞으로 쏠려 머리 손상이 최소화하기 위해 느슨한 벨트를 당겨주는 동시에 탑승자의 상체를 고정시켜(구속력 증가) 2차 상해를 예방하는 역할을 한다.\n또한, 에어백 전개 후에는 감았던 벨트를 다시 풀어 충격 을 완화시키는 리미터(load limiter) 역할을 한다."
    },
    {
        question: "수동변속기의 고장 유무를 점검하는 방법으로 거리가 먼 것은?",
        options: ["오일이 새는 곳이 없는지 점검한다.", "조작기구의 헐거움이 있는지 점검한다.", "소음 발생과 기어의 물림이 빠지는지 점검한다.","헬리컬 기어보다 측압을 많이 받는 스퍼기어는 측압와셔 마모를 점검한다."],
        answer: 3,
        explain: "<a href='https://blog.naver.com/PostView.naver?blogId=ddsp0201&Redirect=View&logNo=223471226345&categoryNo=11&isAfterWrite=true&isMrblogPost=false&isHappyBeanLeverage=true&contentLength=3099' target='_blank'>문제 해설</a>"
    },
    {
        question: "유압식 동력조향장치(power steering system)의 구성품이 아닌 것은?",
        options: ["조향 모터", "구동 벨트", "구동 풀리","오일 펌프"],
        answer: 0,
        explain: "조향 모터는 전동식 동력조향장치의 구성품이다."
    },
    {
        question: "기동전동기의 동력전달 방식이 아닌 것은?",
        options: ["피니언 섭동식", "벤딕스식", "싱크로메시식","전기자 섭동식"],
        answer: 2,
        explain: "기동전동기의 동력전달 방식\n•벤딕스식\n•전기자섭동식\n•피니언 섭동식(오버러닝 클러치식)\n※ 싱크로메시는 변속기어 방식에 해당한다."
    },
    {
        question: "자동차의 교류발전기를 교환하고 시험하는 내용으로 틀린 것은?",
        options: ["시동 후 발전기의 출력전압은 배터리 전압보다 높게 나와야 한다.", "시동 후 발전기의 출력 전류를 측정할 때는 모든 전기 부하를 ON해야 한다.", "발전기의 팬벨트 장력을 규정값으로 조정한다.","시동 후 발전기의 출력 전압은 배터리 전압으로 출력 전류는 50A 미만으로 출력되어야 한다."],
        answer: 3,
        explain: "시동 후 발전기의 출력전압은 약 13.8~14.9V로 배터리 전압보다 높아야 하며, 충전 전류 평균값은 정격용량의 80% 이상이어야 한다."
    },
    {
        question: "실린더의 안지름이 80mm이고, 행정이 84mm인 4 실린더 엔진의 총 배기량은?",
        options: ["약 1688 cc", "약 1200 cc", "약 1370 cc","약 1800 cc"],
        answer: 0,
        explain: "<a href='https://blog.naver.com/PostView.naver?blogId=ddsp0201&Redirect=View&logNo=223471236827&categoryNo=11&isAfterWrite=true&isMrblogPost=false&isHappyBeanLeverage=true&contentLength=3099' target='_blank'>문제 해설</a>"
    },
    {
        question: "버튼엔진 시동시스템에 회로 점검 시 점검사항으로 틀린 것은?",
        options: ["디포거 스위치", "시동정지버튼과 FOB 홀더", "시동릴레이","시동 퓨즈"],
        answer: 0,
        explain: "디포거 스위치는 후면유리의 열선을 제어하는 것으로 시동시스템과는 무관하다."
    },
    {
        question: "공랭식 냉각장치의 특징에 관한 설명으로 틀린 것은?",
        options: ["구조가 간단하고, 마력 당 중량이 가볍다.", "기후 및 운전상태 등에 따라 기관의 온도 변화가 적다.", "냉각수 동결 및 누수에 대한 우려가 없다.","정상 온도에 도달하는 시간이 짧다."],
        answer: 1,
        explain: "공랭식은 기후, 운전상태에 따라 기관의 온도 변화가 크고, 냉각이 균일하지 못한 단점이 있다."
    },
    {
        question: "변속기를 탈·부착하는 작업에서 변속기 잭 사용 시 주의사항으로 옳은 것은?",
        options: ["보다 원활한 작업을 위해 안전장치를 개조하여 기능을 개선시킨다.", "사용 또는 점검 중 이상 발견 시 고장이 발생할 때까지 사용한 후 수리한다.", "장비에서 떠나있는 시간이 길어지거나 사용하지 않을 때는 변속기를 상승 상태로 유지시킨다.","잭의 상승/하강은 부드럽게 하고 급강하 또는 급상승을 피한다."],
        answer: 3,
        explain: "-"
    },
    {
        question: "배기 파이프를 막아 기관 내부의 압력을 높이는 방법으로 제동 효과를 증대시키는 감속 제동장치는?",
        options: ["엔진 브레이크", "배기 브레이크", "2계통 브레이크","와전류 브레이크"],
        answer: 1,
        explain: "배기 브레이크는 배기 파이프를 막아 배기가스가 실린더 내에 갇혀 저항을 발생시켜 엔진회전수를 저하시키는 일종의 보조 브레이크 역할을 한다."
    },
    {
        question: "폐자로 타입의 점화코일 1차 저항에 대한 점검 및 판정 내용으로 틀린 것은?",
        options: ["규정값보다 낮은 경우 내부회로가 단락이다.", "테스터기를 저항 측정 위치로 설정한다.", "멀티 테스터기를 이용하여 점검한다.","무한대로 표시된 경우 관련 배선은 정상이다."],
        answer: 3,
        explain: "-"
    },
    {
        question: "고휘도 방전램프를 정비할 때 안전사항으로 틀린 것은?",
        options: ["일반 전조등 전구로 교환이 가능하다.", "전구 홀더와 전구를 정확히 고정한다.", "전구가 장착되지 않은 상태에서 스위치를 작동하지 않는다.","전원 스위치를 OFF하고 작업한다."],
        answer: 0,
        explain: "저항 측정 시 무한대(OL)로 표시되면 단선(끊어짐)을 의미한다.\n※ 1차 코일의 저항은 0.8~1.0옴 일 때, 2차 코일은 12~12.5키로옴 일 때 정상이다. (실기에도 나오므로 방법 및 측정값을 숙지할 것)"
    },
    {
        question: "타이어 규격이 “230/60 R 18”일 때 단면의 높이(mm)는 얼마인가?",
        options: ["38mm", "128mm", "148mm","138mm"],
        answer: 3,
        explain: "<a href='https://blog.naver.com/PostView.naver?blogId=ddsp0201&Redirect=View&logNo=223471246743&categoryNo=11&isAfterWrite=true&isMrblogPost=false&isHappyBeanLeverage=true&contentLength=3096' target='_blank'>문제 해설</a>"
    },
    {
        question: "자동차 등화장치에서 12V 축전지에 30W의 전구를 사용하였다면 저항값은?",
        options: ["5.4옴", "6.3옴", "7.3옴","4.8옴"],
        answer: 3,
        explain: "<a href='https://blog.naver.com/PostView.naver?blogId=ddsp0201&Redirect=View&logNo=223471259413&categoryNo=11&isAfterWrite=true&isMrblogPost=false&isHappyBeanLeverage=true&contentLength=3096' target='_blank'>문제 해설</a>"
    },
    {
        question: "윤활유의 역할이 아닌 것은?",
        options: ["팽창 작용", "밀봉 작용", "냉각 작용","방청 작용"],
        answer: 0,
        explain: "윤활유의 역할\n감마(마찰과 마멸 감소)작용, 냉각작용, 세척작용, 밀봉작용(기밀작용), 방청작용, 충격완화 및 소음 방지 작용, 응력분산작용"
    },
    {
        question: "스프링 상수가 4kgf/mm인 코일 스프링을 6cm 압축하는데 필요한 힘은?",
        options: ["0.067 kgf", "24 kgf", "15 kgf","240 kgf"],
        answer: 3,
        explain: "<a href='https://blog.naver.com/PostView.naver?blogId=ddsp0201&Redirect=View&logNo=223471237936&categoryNo=11&isAfterWrite=true&isMrblogPost=false&isHappyBeanLeverage=true&contentLength=3099' target='_blank'>문제 해설</a>"
    },
    {
        question: "축전지의 취급 시 틀린 것은?",
        options: ["전해액을 만들어 사용시는 고무 또는 납그릇을 사용하되 황산에 증류수를 조금씩 첨가하면서 혼합한다.", "축전지의 단자부 및 케이스면은 그리스를 칠해 부식을 방지하고, 소다수로 세척한다.", "전해액량은 극판 위 10~13mm 정도 되도록 보충한다.","연속 대전류로 방전하는 것은 금지해야 한다."],
        answer: 0,
        explain: "[자동차검사기능사 기출]\n전해액의 황산과 고무·납 등은 화학작용을 하므로 화학작용을 일으키지 않는 질그릇 등을 사용하며, 물(증류수)에 황산을 조금씩 부으며 혼합한다.\n황산은 물과 반응하면 발열 및 폭발성이 있으므로 물이 황산과의 발열을 흡수할 수 있도록 물에 황산을 붓는다."
    },
    {
        question: "조향핸들이 가벼워지는 원인으로 틀린 것은?",
        options: ["정(+)의 캐스터 과다", "정(+)의 캠버 과다", "조향핸들의 유격 과다", "타이어 공기압 과다"],
        answer: 0,
        explain: "-정의 캐스터는 바퀴를 앞으로 잡아당기는 효과가 있어 전진방향으로 안정되며 조향핸들에 가하는 힘을 제거하면 바퀴가 직진위치로 복귀하려는 복원력이 발생 하며, 시미현상을 감소시킨다. 하지만 조향핸들이 무거워지고 노면의 충격에 의한 핸들떨림이 커진다. 캐스터 각이 작을수록 핸들조작이 가볍다.\n- 정의 캠버일수록 가볍다.\n- 조향핸들의 유격이란 바퀴가 정지 상태를 유지한 채 핸들을 좌우로 움직일 때 핸들이 회전하는 거리를 말한다. 즉, 조향핸들 유격이 커질수록 그만큼 가볍게 돌아가는 범위(헛도는 범위)가 많다는 의미이다.\n- 공기압이 높으면 가벼워지고, 낮으면 무겁다."
    },
    {
        question: "삼원 촉매 컨버터 장착차량에서 2차 공기를 공급하는 목적은?",
        options: ["공연비를 돕는다.", "배기가스의 순환을 돕는다.", "배기매니폴드 내에 HC와 CO의 산화를 돕는다.", "NOx가 생성되지 않도록 한다."],
        answer: 2,
        explain: "배기가스 내에는 산소가 부족하므로 촉매장치에 공기를 공급하여 산소와의 반응(산화작용)을 통해 유해가스가 CO2, H2O로 변환시킨다."
    },
    {
        question: "가솔린 엔진의 흡기다기관 누설 점검 시 사용하는 계측기는?",
        options: ["다이얼 게이지", "진공 게이지", "텔레스코핑 게이지", "압축압력 게이지"],
        answer: 1,
        explain: "스로틀 바디와 흡기 다기관 연결 부분, 흡기 다기관과 실린더 헤드 사이 연결 부분의 진공 누설을 점검하기 위해서 진공 게이지를 서지탱크의 진공 구멍에 연결한다.\n※ 압축압력 게이지 : 실린더 부위의 누설(실린더와 피스톤 사이의 누설, 밸브의 누설, 실린더 헤드의 누설 등)을 점검"
    },
    {
        question: "ETACS 간헐와이퍼 제어의 입·출력 요소 중 입력요소에 해당하는 것은?",
        options: ["와이어 릴레이 및 인트 타이머(INTT)", "인트(INT) 및 인트 타이머(INTT) 스위치", "인트(INT) 스위치 및 시동 스위치", "인트(INT) 스위치 및 라이트 스위치"],
        answer: 1,
        explain: "간헐와이퍼를 작동하려면 시동 스위치가 ON상태에서, 다기능 스위치 모드가 인트 스위치 ON 상태이어야 한다."
    },
    {
        question: "기관 윤활회로의 유압이 규정값보다 상승하는 원인으로 옳지 않은 것은?",
        options: ["유압조절밸브의 스프링 장력이 규정값보다 크다.", "오일펌프가 마멸되어 오일간극이 커졌다.", "기관의 온도가 낮아져 점도가 높아졌다.", "오일펌프 출력단 이후에 막힘이 있다."],
        answer: 1,
        explain: "엔진 오일 유압이 낮아지는 원인\n•유압조절밸브의 스프링 장력이 약함(쇠손)\n•엔진 베어링의 오일 간극이 너무 클 때\n•점도가 낮아질 때\n•오일펌프 이전 라인 막힘"
    },
    {
        question: "배기장치의 차압센서에 대한 설명으로 틀린 것은?",
        options: ["배기 다기관에 부착한다.", "CPF 재생시기 판단을 위한 PM 포집량을 예측한다.", "필터 전후방 압력차를 검출한다.", "압력차를 검출하여 ECU로 전송한다."],
        answer: 0,
        explain: "차압센서는 디젤 산화 촉매장치(CPF)의 전후방에 장착하여 압력차를 검출하여 PM 포집량을 예측하여 재생시기를 판단한다."
    },
    {
        question: "전조등 회로의 구성부품이 아닌 것은?",
        options: ["전조등 릴레이", "스테이터", "딤머 스위치", "라이트 스위치"],
        answer: 1,
        explain: "스테이터는 교류발전기의 구성부품이다.\n※딤머(dimmer) 스위치는 전조등의 빔을 '하이(hi)빔 <> 로(low)빔'으로 전환하는 스위치이다."
    },
    {
        question: "가솔린 연료의 구비조건이 아닌 것은?",
        options: ["옥탄가가 높을 것", "체적 및 무게가 크고, 발열량이 작을 것", "연소속도가 빠를 것", "온도에 관계없이 유동성이 좋을 것"],
        answer: 1,
        explain: "체적 및 무게가 작고, 발열량이 클 것"
    },
    {
        question: "등화장치의 일반적인 검사기준 및 방법에 대한 설명으로 틀린 것은?",
        options: ["타이어 공기압이 규정 압력인지 점검한다.", "차량의 현가장치의 정상 여부를 점검한다.", "전조등 작동상태의 정상 여부를 점검한다.", "적차 상태에서 운전자 1인 탑승 후 점검한다."],
        answer: 3,
        explain: "등화장치 검사 시 공차 상태에서 운전자 1인 탑승 후 점검한다."
    },
    {
        question: "LPG기관에서 액체상태의 연료를 기체상태의 연료로 전환시키는 장치는?",
        options: ["믹서", "베이퍼라이저", "솔레노이드 유닛", "봄베"],
        answer: 1,
        explain: "베이퍼라이저는 액상 LPG압력을 낮추어 기체상태로 변환시켜(액상 LPG를 기체 LPG로 기화) LPG 압력을 일정하게 조절하는 작용을 한다."
    }
];

// 문제/보기 랜덤 섞기
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }
  
  // ✅ 문제 순서 랜덤 + 60문제 제한
  let questions = shuffleArray([...allQuestions]).slice(0, 60);
  
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
    status.innerHTML = `<span id="scoreDisplay">총점: ${score}/${questions.length}</span>`;
  
    // 제출 버튼 제거
    document.getElementById("submitBtn").style.display = "none";
  
    // 결과창 표시
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<h2>총점: ${score}/${questions.length}</h2>`;
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