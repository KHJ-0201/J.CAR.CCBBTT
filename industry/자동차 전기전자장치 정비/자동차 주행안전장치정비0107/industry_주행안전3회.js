// -----------------------------
// 문제 배열
export const industry010703 = [
    {    
    question: "VDC Vehicle Dynamic Control 작동 시, 차량의 자세 제어를 위해 ECU가 가장 먼저 제어하는 시스템은 무엇입습니까?",
    options: ["에어컨 시스템", "엔진 출력 및 브레이크 시스템", "변속기 시스템", "오디오 시스템"],
    answer: 1,
    explain: "VDC(ESC)는 차량의 미끄러짐을 감지하면 엔진 출력을 감소시키고 필요한 바퀴에만 브레이크 제동력을 가하여 차량의 자세를 안정화합니다."
  },
  {
    question: "브레이크 캘리퍼 오버홀 시 피스톤 씰을 교환하는 가장 큰 이유는 무엇입니까?",
    options: ["피스톤의 무게 감소", "브레이크액의 오염 방지", "브레이크액의 외부 누설 방지 및 피스톤의 원활한 복원", "브레이크 패드의 빠른 마모 방지"],
    answer: 2,
    explain: "피스톤 씰은 브레이크액의 누설을 막고, 제동 해제 시 피스톤을 약간 복원시켜 패드와 디스크의 간극을 유지하는 핵심적인 역할을 합니다."
  },
  {
    question: "유압식 브레이크 시스템에서 잔압을 유지하는 밸브는 주로 어디에 위치합니까?",
    options: ["휠 실린더 내부", "캘리퍼 내부", "마스터 실린더 출구", "브레이크 부스터 입구"],
    answer: 2,
    explain: "잔압 밸브는 마스터 실린더 출구 쪽에 위치하여, 브레이크 시스템 내부에 미세한 잔류 압력을 유지하여 베이퍼 록 방지와 제동 응답성 향상에 기여합니다."
  },
  {
    question: "차량의 주행 중 조향 휠을 좌우로 흔들 때 차체가 좌우로 흔들리는 '요잉 Yawing' 현상을 억제하는 부품은 무엇입니까?",
    options: ["코일 스프링", "스테빌라이저 바", "브레이크 디스크", "마스터 실린더"],
    answer: 1,
    explain: "스테빌라이저 바(또는 안티롤 바)는 차량이 코너를 돌거나 주행 중 횡방향 움직임이 있을 때 좌우 서스펜션을 연결하여 차체의 롤링과 요잉을 억제합니다."
  },
  {
    question: "타이어에 펑크가 발생해도 일정 거리를 주행할 수 있도록 설계된 타이어는 무엇입니까?",
    options: ["전천후 타이어", "셀프 실링 타이어", "런플랫 타이어 Run-Flat Tire", "방사형 타이어"],
    answer: 2,
    explain: "런플랫 타이어는 사이드 월을 강화하여 공기압이 없어도 타이어가 주저앉지 않고 일정 속도와 거리를 주행할 수 있도록 제작된 타이어입니다."
  },
  {
    question: "ESC가 작동할 때 차량에 발생하는 변화로 가장 옳은 것은 무엇입니까?",
    options: ["배기 가스 온도가 급격히 상승", "엔진 출력 감소 및 특정 휠에 제동력 개입", "실내 온도 조절 장치 작동 중단", "연료 펌프의 작동 중지"],
    answer: 1,
    explain: "ESC는 차량의 미끄러짐을 방지하기 위해 엔진 제어 유닛과 브레이크 시스템을 통합적으로 제어하여 출력을 줄이고 필요한 제동을 합니다."
  },
  {
    question: "브레이크 디스크 로터가 과도하게 뜨거워져 표면이 파랗게 변색되는 원인은 무엇입니까?",
    options: ["공기 중 수분 접촉", "패드와의 과도한 마찰로 인한 고온", "저속 주행의 반복", "브레이크액의 오염"],
    answer: 1,
    explain: "브레이크 디스크의 청색 변색은 패드와의 과도하고 지속적인 마찰로 인해 디스크가 열 변형 온도를 초과하여 고온에 노출되었음을 의미합니다."
  },
  {
    question: "TPMS 경고등 점등 시 운전자가 즉시 취해야 할 조치로 가장 올바른 것은 무엇입니까?",
    options: ["차량 정지 후 타이어 교체", "주행 속도를 높여 타이어 압력을 올림", "안전한 장소에서 타이어 공기압 점검 및 보충", "브레이크액 레벨 확인"],
    answer: 2,
    explain: "TPMS 경고등은 타이어 압력이 낮음을 알리는 것이므로, 안전한 곳에서 타이어 압력을 점검하고 적정 압력으로 보충해야 합니다."
  },
  {
    question: "디스크 브레이크 시스템에서 캘리퍼가 디스크를 양쪽에서 잡아 제동하는 방식을 무엇이라고 합니까?",
    options: ["드럼 브레이크", "플로팅 캘리퍼", "고정식 캘리퍼", "리딩 트레일링 슈 타입"],
    answer: 2,
    explain: "고정식 캘리퍼 Fixed Caliper는 디스크의 양쪽에 피스톤이 있어 디스크를 양쪽에서 동시에 잡아 제동력을 발생시킵니다."
  },
  {
    question: "차량의 주행 안정성 향상을 위해 휠 얼라인먼트 조정 시 가장 중요하게 고려해야 할 것은 무엇입니까?",
    options: ["연료의 옥탄가", "차량 제조사의 규정 값", "타이어의 제조일자", "엔진의 압축비"],
    answer: 1,
    explain: "휠 얼라인먼트는 차량 제조사가 정한 규정 값(캠버, 캐스터, 토우)에 맞춰 정확하게 조정해야 최적의 주행 안정성과 타이어 수명을 확보할 수 있습니다."
  },
  {
    question: "EBD 시스템이 제동 시 뒷바퀴에 더 많은 제동력을 분배하는 주된 상황은 무엇입니까?",
    options: ["내리막길 주행 시", "급가속 시", "차량에 많은 짐을 실었을 때", "젖은 노면 주행 시"],
    answer: 2,
    explain: "EBD는 차량의 하중이 뒷바퀴에 더 많이 실릴 때(짐을 실었을 때 등), 뒷바퀴에 가해지는 하중에 비례하여 제동력을 증가시켜 제동 효율을 높입니다."
  },
  {
    question: "스티어링 시스템에서 캐스터 Caster 값이 하는 주된 역할은 무엇입니까?",
    options: ["타이어의 직진성 및 복원력 부여", "주행 중 타이어의 수직 하중 지지", "차체의 상하 운동 제어", "제동 시 바퀴의 잠김 방지"],
    answer: 0,
    explain: "캐스터는 조향 축의 기울기로, 주로 차량의 직진 주행 안정성과 조향 후 스티어링 휠이 자동으로 정렬되려는 복원력에 큰 영향을 미칩니다."
  },
  {
    question: "브레이크 패드 교환 후 일정 기간 동안 제동 성능이 제대로 나오지 않는 현상을 무엇이라고 합니까?",
    options: ["베이퍼 록", "페이드 현상", "길들이기 베딩 과정", "하이드로 플래닝"],
    answer: 2,
    explain: "새 브레이크 패드는 디스크와 마찰면이 완전히 일치하지 않아 성능이 낮습니다. 일정 기간 적절한 제동을 통해 마찰면을 맞추는 길들이기(베딩) 과정이 필요합니다."
  },
  {
    question: "ABS 하이드로릭 유닛의 솔레노이드 밸브가 하는 역할은 무엇입니까?",
    options: ["브레이크액의 잔류 압력 조절", "휠 속도 센서 신호 수신", "각 휠로 가는 브레이크 유압을 차단, 유지, 해제", "브레이크 페달의 밟는 힘 증폭"],
    answer: 2,
    explain: "솔레노이드 밸브는 ECU의 제어 신호에 따라 개폐되어 각 바퀴로 전달되는 브레이크 유압을 '압력 증가', '압력 유지', '압력 감소'의 세 단계로 정밀하게 조절합니다."
  },
  {
    question: "주차 브레이크 케이블의 장력 점검이 필요한 가장 주된 이유는 무엇입니까?",
    options: ["차량 외관의 미려함 유지", "주차 브레이크의 확실한 작동", "엔진의 소음 감소", "타이어의 공기압 측정"],
    answer: 1,
    explain: "주차 브레이크 케이블의 장력이 적정해야 주차 브레이크 레버 작동 시 후륜 브레이크가 확실하게 체결되어 안전하게 차량을 고정할 수 있습니다."
  },
  {
    question: "차량의 조향 장치에서 토우 Toe 값을 토우 인 Toe-in으로 조정할 때 나타나는 변화는 무엇입니까?",
    options: ["바퀴가 바깥쪽으로 벌어짐", "바퀴가 안쪽으로 모임", "바퀴가 수직선상에 정렬", "조향 시 복원력이 감소"],
    answer: 1,
    explain: "토우 인은 차량을 위에서 봤을 때 앞바퀴의 앞부분이 뒷부분보다 안쪽으로 모이도록 조정하는 것으로, 직진 안정성을 향상시키는 데 기여합니다."
  },
  {
    question: "타이어에 표기된 M+S 표시가 의미하는 것은 무엇입니까?",
    options: ["최대 속도", "적재 하중", "머드와 스노우 (진흙 및 눈길용)", "마모 한계선"],
    answer: 2,
    explain: "M+S는 Mud and Snow의 약자로, 해당 타이어가 진흙길이나 눈길 같은 비포장 및 미끄러운 노면에서도 어느 정도 성능을 발휘하도록 설계되었음을 나타냅니다."
  },
  {
    question: "브레이크액 DOT5.1의 주요 특징은 무엇입니까?",
    options: ["실리콘 기반으로 수분을 흡수하지 않음", "DOT4보다 낮은 끓는점", "DOT4와 동일한 글리콜 기반이며 끓는점이 높음", "군용 차량에만 사용됨"],
    answer: 2,
    explain: "DOT5.1은 DOT3 및 DOT4와 동일하게 글리콜 에테르 기반이며, DOT4보다 더 높은 끓는점을 가져 고성능 제동 시스템에 적합합니다. (DOT5는 실리콘 기반으로 혼용 불가)"
  },
  {
    question: "전방 카메라를 사용하는 ADAS 시스템이 악천후 (폭우, 안개 등)에서 성능이 저하되는 주된 이유는 무엇입니까?",
    options: ["레이더 신호의 반사", "카메라 렌즈의 시야 확보 어려움", "휠 속도 센서의 오작동", "브레이크액의 누유"],
    answer: 1,
    explain: "전방 카메라는 빛을 이용해 영상을 분석하므로, 폭우, 눈, 안개 등으로 인해 렌즈의 시야가 가려지거나 빛의 산란이 심해지면 사물 인식이 어려워 성능이 저하됩니다."
  },
  {
    question: "유압식 브레이크 시스템에서 발생 가능한 문제 중, 브레이크 페달이 갑자기 깊숙이 들어가 제동이 잘 안 되는 현상을 무엇이라고 합니까?",
    options: ["하이드로 플래닝", "베이퍼 록", "스티어링 댐핑", "페이드 현상"],
    answer: 1,
    explain: "베이퍼 록 현상은 브레이크액이 끓어 기포가 생겨 유압 전달이 되지 않는 것으로, 페달을 밟아도 기포만 압축되어 페달이 깊숙이 들어가게 됩니다."
  },
  {
    question: "차량의 서스펜션 시스템에서 부싱 Bushing의 역할은 무엇입니까?",
    options: ["차량의 주행 속도 감지", "엔진의 진동 흡수", "서스펜션 부품 간의 진동 및 소음 흡수", "브레이크액의 누유 방지"],
    answer: 2,
    explain: "부싱은 주로 고무나 우레탄 재질로 만들어져 서스펜션 암이나 기타 부품의 연결 부위에 사용되며, 금속 간의 충돌 방지 및 진동, 소음을 흡수하는 역할을 합니다."
  },
  {
    question: "타이어의 펑크 수리 후 휠 밸런스를 다시 점검해야 하는 주된 이유는 무엇입니까?",
    options: ["타이어의 제조일자 확인", "수리 부위의 무게 변화", "브레이크 디스크의 런아웃 교정", "휠 얼라인먼트 재조정"],
    answer: 1,
    explain: "펑크 수리 시 추가되는 패치나 실런트 등으로 인해 타이어-휠 조합의 무게 중심이 변동될 수 있으므로, 밸런스를 재점검해야 떨림을 방지할 수 있습니다."
  },
  {
    question: "ESC 시스템이 오버 스티어 상태를 감지하는 주요 판단 기준은 무엇입니까?",
    options: ["운전자의 조향각보다 요 레이트가 낮을 때", "운전자의 조향각보다 요 레이트가 높을 때", "휠 속도 센서의 신호가 모두 동일할 때", "브레이크 압력이 낮을 때"],
    answer: 1,
    explain: "오버 스티어는 차량 후미가 과도하게 미끄러지는 현상으로, 운전자가 핸들을 꺾은 정도(조향각)에 비해 차량의 실제 회전 속도(요 레이트)가 너무 높을 때 발생한다고 판단합니다."
  },
  {
    question: "드럼 브레이크에서 슈와 드럼이 마찰하여 발생한 열을 발산하기 위한 주된 구조적 특징은 무엇입니까?",
    options: ["자동 간극 조절기", "드럼 외부의 냉각 핀", "드럼의 넓은 표면적", "휠 실린더의 내부 구조"],
    answer: 2,
    explain: "드럼 브레이크는 디스크 브레이크에 비해 열 방출에 불리하지만, 드럼 자체의 넓은 금속 표면적을 통해 열을 공기 중으로 발산합니다."
  },
  {
    question: "전기차 EV의 통합 전동 부스터 Integrated Electric Brake Booster, I-EB의 가장 큰 장점은 무엇입니까?",
    options: ["유압식 부스터보다 저렴한 가격", "브레이크액을 사용하지 않음", "회생 제동과 유압 제동의 통합 제어 용이", "엔진 진공이 필요 없음"],
    answer: 2,
    explain: "I-EB는 브레이크 페달 조작 시 운전자의 의도를 감지하여 회생 제동과 유압 제동을 상황에 맞게 자동으로 통합 제어하여 제동 효율과 회생 에너지 회수율을 극대화합니다."
  },
  {
    question: "브레이크 경고등이 점등된 상태에서 브레이크 페달을 밟았을 때 평소보다 더 깊숙이 들어가는 원인이 아닌 것은 무엇입니까?",
    options: ["마스터 실린더 내부 누설", "휠 실린더 또는 캘리퍼 피스톤 씰 손상", "브레이크액 부족", "휠 밸런스 불량"],
    answer: 3,
    explain: "휠 밸런스 불량은 고속 주행 시 핸들 떨림의 원인이며, 브레이크 페달이 깊숙이 들어가는 현상(제동력 저하)과는 직접적인 관련이 없습니다."
  },
  {
    question: "타이어의 회전 방향이 정해져 있는 타이어의 특징은 무엇입니까?",
    options: ["트레드 패턴이 비대칭", "트레드 패턴이 V자형", "숄더 부위가 강화됨", "공기압이 높음"],
    answer: 1,
    explain: "회전 방향이 정해진 타이어는 트레드 패턴이 V자형이나 화살표 모양이며, 이는 주로 젖은 노면에서의 배수성과 구동력, 정숙성을 극대화하기 위함입니다."
  },
  {
    question: "LKAS Lane Keeping Assist System 작동을 위해 필요한 전제 조건은 무엇입니까?",
    options: ["차량 속도가 일정 기준 이상일 것", "와이퍼가 항상 작동할 것", "차량 내부의 습도가 높을 것", "연료 탱크가 가득 차 있을 것"],
    answer: 0,
    explain: "LKAS와 같은 대부분의 조향 보조 시스템은 운전자의 안전을 위해 일정 속도(예: 60km/h 이상) 이상에서만 작동하도록 설정되어 있습니다."
  },
  {
    question: "서스펜션 시스템에서 토션 바 Torsion Bar 스프링의 작동 원리는 무엇입니까?",
    options: ["압축 시 길이 변화", "장력 변화에 따른 댐핑", "막대의 비틀림 탄성을 이용", "액체의 압력 변화"],
    answer: 2,
    explain: "토션 바는 금속 막대의 비틀림(토션) 탄성을 이용하여 충격을 흡수하고 차체를 지지하는 스프링의 일종입니다."
  },
  {
    question: "주차 브레이크를 과도하게 당기거나 자주 사용하여 발생하는 일반적인 문제는 무엇입니까?",
    options: ["주차 브레이크 케이블의 늘어짐 또는 파손", "브레이크액의 급격한 감소", "휠 속도 센서의 간극 불량", "스티어링 휠의 유격 증가"],
    answer: 0,
    explain: "주차 브레이크를 과도하게 사용하면 케이블에 무리가 가해져 늘어나거나 내부 부품이 조기에 마모되어 기능이 저하될 수 있습니다."
  },
  {
    question: "브레이크 캘리퍼 피스톤 리턴 불량의 원인이 아닌 것은 무엇입니까?",
    options: ["피스톤 씰의 노후화", "캘리퍼 슬라이드 핀의 고착", "브레이크액의 온도 과열", "피스톤 표면의 녹 발생"],
    answer: 2,
    explain: "브레이크액의 온도 과열은 베이퍼 록이나 페이드 현상의 원인이 될 수 있지만, 캘리퍼 피스톤이 제자리로 돌아가는 기계적 복원 불량과는 직접적인 관련이 적습니다."
  },
  {
    question: "경사로 밀림 방지 장치 HAC가 작동을 멈추는 주요 조건은 무엇입니까?",
    options: ["차량이 평지에 도달했을 때", "브레이크액 온도가 상승했을 때", "운전자가 가속 페달을 밟아 출발할 때", "엔진이 공회전 상태일 때"],
    answer: 2,
    explain: "HAC는 운전자가 가속 페달을 밟아 차량이 출발을 시작하면 제동 압력 유지를 해제하고 일반적인 주행으로 전환됩니다."
  },
  {
    question: "차량의 서스펜션 시스템에서 더블 위시본 Double Wishbone 타입의 가장 큰 장점은 무엇입니까?",
    options: ["구조가 간단하고 저렴함", "차량의 높이를 쉽게 조절 가능", "휠의 캠버 변화를 최소화하여 접지력 유지에 유리", "휠 밸런스 조정 용이"],
    answer: 2,
    explain: "더블 위시본은 상하 2개의 암을 사용하여 휠의 움직임을 정밀하게 제어할 수 있어, 주행 중 캠버 변화를 최소화하고 타이어의 접지력을 잘 유지시켜 고성능 차량에 주로 사용됩니다."
  },
  {
    question: "운전자가 ABS가 작동할 때 취해야 할 올바른 행동은 무엇입니까?",
    options: ["브레이크 페달을 떼고 다시 밟는다.", "브레이크 페달에 힘을 빼고 클러치 페달을 밟는다.", "브레이크 페달을 끝까지 밟은 상태를 유지하고 조향한다.", "페달의 진동을 무시하고 힘을 더 준다."],
    answer: 2,
    explain: "ABS가 작동할 때는 운전자가 브레이크 페달을 끝까지 밟고 있는 상태(Full Braking)를 유지하면서 장애물을 피할 수 있도록 조향하는 것이 가장 중요합니다."
  },
  {
    question: "타이어에 표기된 TRACTION 등급이 의미하는 것은 무엇입니까?",
    options: ["최대 하중", "최대 속도", "직진 주행 시 제동 성능", "타이어의 수명"],
    answer: 2,
    explain: "TRACTION은 타이어가 젖은 노면에서 직진 제동 시 얼마나 잘 정지하는지를 나타내는 제동 성능 등급입니다. (AA, A, B, C 순)"
  },
  {
    question: "ESC가 차량의 언더 스티어 Under Steer 상태를 감지했을 때의 주요 제어 방식은 무엇입니까?",
    options: ["엔진 출력 증가", "안쪽 뒷바퀴에 제동력을 가함", "모든 바퀴에 균일하게 제동력을 가함", "바깥쪽 뒷바퀴에 제동력을 가함"],
    answer: 1,
    explain: "언더 스티어는 차량 앞부분이 코너 바깥으로 밀리는 현상입니다. ESC는 안쪽 뒷바퀴에 제동을 가하여 차량 후미를 안쪽으로 밀어 넣어 회전력을 증가시켜 안정화합니다."
  },
  {
    question: "차량의 후방 주차 보조 시스템에서 주로 사용되는 센서가 아닌 것은 무엇입니까?",
    options: ["후방 카메라", "초음파 센서", "요 레이트 센서", "레이더 센서"],
    answer: 2,
    explain: "요 레이트 센서는 차량의 회전 속도를 측정하는 센서로, 주차 보조가 아닌 자세 제어(ESC) 시스템에 주로 사용됩니다."
  },
  {
    question: "R-MDPS 시스템에서 스티어링 휠을 돌릴 때 '딸깍'하는 소음이 발생하는 흔한 원인은 무엇입니까?",
    options: ["토우 값의 과다 조정", "웜 기어와 기어 박스 내부의 플렉시블 커플링 마모 또는 손상", "브레이크 패드의 마모", "타이어 공기압 부족"],
    answer: 1,
    explain: "R-MDPS 시스템에서 발생하는 '딸깍' 또는 '툭툭' 소음은 모터와 기어 박스를 연결하는 커플링(일명 쿠플러)의 마모나 손상에서 비롯되는 경우가 흔합니다."
  }
];

// 문제/보기 랜덤 섞기
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }
  
  // ✅ 문제 순서 랜덤 + 60문제 제한
  let questions = shuffleArray([...industry010703]).slice(0, 60);
  
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
    status.innerHTML = `<span id="scoreDisplay">자동차주행안전장치정비 3회차 총점: ${score}/${questions.length}</span>`;
  
    // 제출 버튼 제거
    document.getElementById("submitBtn").style.display = "none";
  
    // 결과창 표시
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<h2>자동차주행안전장치정비 3회차 총점: ${score}/${questions.length}</h2>`;
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