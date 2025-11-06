// -----------------------------
// 문제 배열 (문제 데이터 포함)
export const industry032702 = [
    {
    question: "디스크 브레이크 캘리퍼 피스톤 씰(Piston Seal)의 역할이 아닌 것은?",
    options: ["유압을 밀봉하여 브레이크 액 누설을 방지한다.", "피스톤을 실린더 내부에 고정시킨다.", "유압 해제 시 피스톤을 미세하게 당겨 패드와 디스크 간극을 조정한다.", "외부 이물질이 실린더 내부로 침투하는 것을 막는다."],
    answer: 1,
    explain: "피스톤 씰은 피스톤의 유압 밀봉 및 복귀 기능을 담당하지만, 피스톤을 물리적으로 고정시키는 역할은 하지 않는다."
  },
  {
    question: "브레이크 액이 과도하게 소모되는 주된 원인으로 가장 적합한 것은?",
    options: ["브레이크 디스크 로터의 과열", "브레이크 라이닝의 급격한 마모", "브레이크 라인, 캘리퍼, 휠 실린더 등에서의 누유", "배력 장치의 작동 불량"],
    answer: 2,
    explain: "액면이 급격히 낮아지는 것은 시스템 어딘가에서 브레이크 액이 외부로 새고 있음을 의미한다."
  },
  {
    question: "HHC(Hill Hold Control) 또는 HAC(Hill Start Assist Control) 기능이 작동하는 조건으로 옳은 것은?",
    options: ["평지에서 정차할 때", "주차 브레이크를 채울 때", "오르막길에서 브레이크 페달을 밟았다가 떼고 가속 페달을 밟기 직전", "내리막길에서 일정 속도 이상 주행할 때"],
    answer: 2,
    explain: "경사로에서 출발 시 브레이크를 떼어도 일정 시간 동안 제동력을 유지하여 차량이 뒤로 밀리는 것을 방지한다."
  },
  {
    question: "브레이크 디스크 로터의 두께 편차(Thickness Variation)가 클 때 제동 시 발생되는 현상은?",
    options: ["베이퍼 록", "페이드", "페달의 맥동 (Pulsation)", "브레이크 액의 누유"],
    answer: 2,
    explain: "로터 두께가 일정하지 않으면 제동 시 패드와 로터의 접촉력이 변동하여 페달로 진동(맥동)이 전달된다."
  },
  {
    question: "브레이크 마스터 실린더 2차 피스톤이 끝까지 밀리지 않는 주된 원인은?",
    options: ["1차 피스톤 씰의 손상", "휠 실린더의 누유", "브레이크 호스 막힘 (압력 통로 차단)", "리저버 탱크의 브레이크 액 부족"],
    answer: 2,
    explain: "마스터 실린더 피스톤은 유압을 생성해야 하는데, 브레이크 라인이 막히면 유압이 해제되지 못해 피스톤이 끝까지 움직이지 못한다."
  },
  {
    question: "ABS 작동 중, 휠이 잠기지 않도록 하는 솔레노이드 밸브의 압력 제어 순서로 옳은 것은?",
    options: ["유지(Hold) → 증가(Increase) → 감소(Decrease)", "감소(Decrease) → 유지(Hold) → 증가(Increase)", "증가(Increase) → 감소(Decrease) → 유지(Hold)", "유지(Hold) → 감소(Decrease) → 증가(Increase)"],
    answer: 1,
    explain: "휠이 잠기면 압력 감소, 잠기지 않으나 슬립률이 높으면 압력 유지, 슬립률이 낮아지면 압력 증가 순서로 반복 제어된다."
  },
  {
    question: "브레이크 튜빙(Pipe)이 손상되어 유압이 새는 것을 방지하기 위해 사용되는 연결 방식은?",
    options: ["볼트와 너트를 이용한 직접 연결", "나사산 및 일반적인 와셔 사용", "플레어 너트와 플레어 이음 (Flare fitting)", "용접 접합"],
    answer: 2,
    explain: "플레어 이음은 파이프 끝을 넓게 가공하여 너트와 함께 조여 고압에 견디며 밀봉성이 높은 연결 방식이다."
  },
  {
    question: "탠덤 마스터 실린더에서 전륜과 후륜의 제동 회로가 독립적으로 구성되는 주된 이유는?",
    options: ["제동력 배분율을 높이기 위해", "각 회로의 압력 차이를 없애기 위해", "안전 확보를 위해 (한 회로 고장 시 다른 회로 제동력 유지)", "브레이크 액의 열화를 방지하기 위해"],
    answer: 2,
    explain: "이중 회로(탠덤) 구조는 제동 안전성을 높여 한쪽 회로가 파손되어도 최소한의 제동 능력을 유지하기 위함이다."
  },
  {
    question: "EBD 시스템이 최적의 제동력 배분을 위해 참조하는 주요 정보가 아닌 것은?",
    options: ["휠 스피드 센서의 신호", "브레이크 페달 스위치의 작동 유무", "조향각 센서의 신호", "스로틀 포지션 센서의 신호"],
    answer: 3,
    explain: "EBD는 제동력 분배 시스템이므로 가속 관련 정보인 스로틀 포지션 센서 신호는 직접 참조하지 않는다."
  },
  {
    question: "진공 배력 장치가 작동 불량일 때 나타나는 현상은?",
    options: ["브레이크 페달이 너무 부드럽다.", "브레이크 페달을 밟아도 반응이 늦다.", "브레이크 페달의 답력이 비정상적으로 무겁다.", "제동 시 차량이 한쪽으로 쏠린다."],
    answer: 2,
    explain: "배력 장치(부스터)는 운전자의 제동력을 보조하는 장치이므로, 고장 시 페달 답력이 무거워진다."
  },
  {
    question: "드럼 브레이크에서 리딩 슈(Leading Shoe)의 장점은?",
    options: ["라이닝 마모가 적다.", "열에 의한 변형이 적다.", "자기 작동 작용(Self-Actuation)이 커서 제동력이 강하다.", "슈 복귀력이 강하다."],
    answer: 2,
    explain: "리딩 슈는 드럼의 회전 방향과 슈가 벌어지려는 힘이 합쳐져 자기 작동 작용이 크고 제동력이 강하다."
  },
  {
    question: "ABS 장착 차량의 휠 스피드 센서 중, 톤 휠과의 에어 갭이 불량이거나 이물질이 끼었을 때 발생할 수 있는 현상은?",
    options: ["브레이크 액 온도가 상승한다.", "제동 시 브레이크 페달이 딱딱해진다.", "속도 신호가 불안정하거나 발생하지 않아 ABS가 오작동 또는 기능 정지된다.", "주차 브레이크의 잠김 상태가 불량해진다."],
    answer: 2,
    explain: "휠 스피드 센서는 ABS의 핵심 입력 요소이므로, 신호 불량은 ABS 오작동이나 경고등 점등으로 이어진다."
  },
  {
    question: "브레이크 액의 비등점(Boiling Point)이 중요한 이유로 옳은 것은?",
    options: ["낮은 온도에서 응고되는 것을 방지하기 위해", "액체의 밀도를 일정하게 유지하기 위해", "고온에서 베이퍼 록 현상이 발생하는 것을 방지하기 위해", "오일의 색상을 유지하기 위해"],
    answer: 2,
    explain: "비등점이 낮으면 제동 시 발생하는 열로 액이 끓어 기포가 생기고 베이퍼 록이 발생해 제동력이 상실된다."
  },
  {
    question: "프로포셔닝 밸브(P-Valve)의 설치 목적과 가장 관계가 깊은 것은?",
    options: ["전륜 제동력의 증대", "후륜의 과도한 제동력 방지 (휠 잠김 방지)", "브레이크 드래그 방지", "브레이크 액의 순환"],
    answer: 1,
    explain: "P-밸브는 급제동 시 후륜이 먼저 잠기는 것을 방지하여 차량의 안정성을 유지하는 데 핵심적인 역할을 한다."
  },
  {
    question: "주철로 제작된 브레이크 디스크 로터의 장점은?",
    options: ["무게가 매우 가볍다.", "열전도율이 매우 낮다.", "열 용량이 크고 마찰계수가 비교적 안정적이다.", "부식에 완전히 강하다."],
    answer: 2,
    explain: "주철은 열 용량이 크고 가격이 저렴하며 안정적인 마찰 특성을 제공하여 디스크 로터 재질로 가장 많이 사용된다."
  },
  {
    question: "ABS 작동 시 제어주기(Cycle)가 길어지면 발생하는 현상은?",
    options: ["브레이크 페달 답력이 가벼워진다.", "제동거리가 짧아진다.", "차량의 조향성이 향상된다.", "휠 슬립이 크게 발생하여 제동성능과 조향성이 저하된다."],
    answer: 3,
    explain: "제어 주기가 길다는 것은 압력 제어가 느리다는 의미이므로, 휠이 잠기는 시간이 길어져 ABS의 핵심 목적인 슬립률 제어에 실패한다."
  },
  {
    question: "브레이크 액 교환 시, 공기 빼기(Bleeding) 작업 순서로 가장 일반적인 것은?",
    options: ["마스터 실린더 → 휠 실린더 순", "가장 가까운 휠 실린더부터 순차적으로", "가장 먼 휠 실린더부터 순차적으로", "전륜 휠 실린더 → 후륜 휠 실린더 순"],
    answer: 2,
    explain: "가장 먼 곳부터 공기를 빼야 라인 전체의 공기가 효과적으로 밀려나오므로, 일반적으로 마스터 실린더에서 가장 먼 휠 실린더부터 시작한다."
  },
  {
    question: "디스크 브레이크의 패드 마모 시 교체해야 하는 부품이 아닌 것은?",
    options: ["브레이크 패드", "디스크 로터", "캘리퍼 피스톤 씰", "캘리퍼 어셈블리"],
    answer: 3,
    explain: "패드가 마모되었다고 해서 캘리퍼 어셈블리 전체를 교체하는 경우는 드물다. 일반적으로 패드와 필요 시 로터, 씰만 교체한다."
  },
  {
    question: "브레이크 드래그(Brake Drag) 현상의 직접적인 원인으로 가장 적합한 것은?",
    options: ["브레이크 액의 과도한 흡습", "마스터 실린더 잔압 밸브의 고착", "휠 실린더/캘리퍼 피스톤의 고착으로 인한 복귀 불량", "브레이크 배력 장치의 진공 누설"],
    answer: 2,
    explain: "피스톤이 원활하게 복귀하지 못하면 패드/라이닝이 계속 로터/드럼에 접촉하여 드래그 현상이 발생하고 열이 발생한다."
  },
  {
    question: "브레이크 성능 점검 시 제동 테스트베드에서 측정하는 항목이 아닌 것은?",
    options: ["제동력 편차", "최대 제동력", "브레이크 액의 비중", "좌/우 제동력 불균형"],
    answer: 2,
    explain: "제동 테스트베드는 바퀴의 제동력(힘)을 측정하는 장치이며, 브레이크 액의 비중(또는 비등점)은 화학적 점검 항목이다."
  },
  {
    question: "ABS 시스템이 장착된 차량의 마스터 실린더에서 잔압 밸브(Residual Pressure Valve)를 생략하는 이유는?",
    options: ["전륜과 후륜의 제동 회로가 독립되어 있기 때문에", "드럼 브레이크 대신 디스크 브레이크를 사용하기 때문에", "ABS 모듈레이터가 정밀한 압력 제어를 대신하기 때문에", "브레이크 액의 열화를 방지하기 위해"],
    answer: 2,
    explain: "ABS 시스템은 압력 모듈레이터를 통해 유압을 정밀하게 제어하므로, 별도의 잔압 밸브가 필요하지 않거나 오히려 제어에 방해가 될 수 있다."
  },
  {
    question: "ESC/VDC 시스템이 작동하는 상황에서 운전자가 느낄 수 있는 일반적인 현상은?",
    options: ["브레이크 페달이 갑자기 가벼워진다.", "계기판에 ESC 경고등이 점멸하며, 때때로 소음이 발생한다.", "핸들이 한쪽으로 쏠리면서 조향이 어렵다.", "엔진 회전수(RPM)가 비정상적으로 상승한다."],
    answer: 1,
    explain: "ESC가 개별 바퀴에 제동력을 가할 때 경고등이 깜빡이며, 유압 모터 작동 소음이 들릴 수 있다. 또한 ABS와 유사하게 페달에 맥동이 느껴질 수 있다."
  },
  {
    question: "디스크 브레이크의 로터에 구멍(Hole)이나 홈(Slot)이 가공되어 있는 주된 목적은?",
    options: ["로터의 무게를 줄이기 위해", "로터의 강성을 높이기 위해", "가스, 분진, 물 등을 배출하고 열을 효과적으로 방출하기 위해", "패드의 마모를 줄이기 위해"],
    answer: 2,
    explain: "천공 및 슬롯은 고온에서 발생하는 가스나 수분을 배출하고 냉각 효과를 높여 제동 안정성을 확보한다."
  },
  {
    question: "브레이크 액이 자동차 도장면에 묻었을 때 즉시 닦아내야 하는 이유로 옳은 것은?",
    options: ["오일 막을 형성하여 도장면을 보호하기 위해", "화학적 반응으로 도장면을 손상시키기 때문에", "도장면에 영구적인 얼룩을 남기기 때문에", "점도가 높아 먼지가 쉽게 달라붙기 때문에"],
    answer: 1,
    explain: "글리콜계 브레이크 액은 부식성이 있어 자동차 도장면을 손상시키므로 즉시 물로 씻어내야 한다."
  },
  {
    question: "브레이크 패드 교환 후, 초기 제동력이 약해지는 현상(길들이기 필요)의 주된 이유는?",
    options: ["패드와 로터의 표면이 완전히 접촉되지 않았기 때문에", "브레이크 액 내부에 공기가 유입되었기 때문에", "마스터 실린더 피스톤의 리턴 스프링 장력이 약하기 때문에", "휠 베어링 유격이 증가했기 때문에"],
    answer: 0,
    explain: "새 패드와 로터 표면은 완전히 일치하지 않아 초기 접촉 면적이 좁다. 일정 기간 사용(길들이기) 후 접촉면이 넓어지면서 제동력이 회복된다."
  },
  {
    question: "파킹 브레이크 작동 시, 앞바퀴에만 제동력을 가하는 방식으로 구성하는 경우는?",
    options: ["일반 승용차의 표준 방식이다.", "주로 대형 트럭에서 사용된다.", "앞바퀴와 뒷바퀴 모두에 동시에 작용하는 것이 일반적이므로 해당 사항이 없다.", "특정 스포츠카 모델에서 제동력 편차를 줄이기 위해 사용된다."],
    answer: 2,
    explain: "주차 제동은 일반적으로 뒷바퀴에 제동력을 가하며, 앞바퀴에만 작용하는 방식은 없다. 앞바퀴에 제동을 가하는 경우는 차량 구동계열에 작용하는 방식이다."
  },
  {
    question: "탠덤 마스터 실린더에서 1차 피스톤과 2차 피스톤 사이에서 발생하는 압력 전달 매체는?",
    options: ["진공", "공기", "브레이크 액 (유압)", "엔진 오일"],
    answer: 2,
    explain: "브레이크 시스템 전체는 유압을 이용해 작동하며, 1차 피스톤이 밀어낸 브레이크 액이 2차 피스톤을 밀어낸다."
  },
  {
    question: "브레이크 제동 시 차량이 한쪽으로 쏠리는(Pulling) 주된 원인이 아닌 것은?",
    options: ["좌/우 휠 실린더 또는 캘리퍼 피스톤의 작동력 차이", "좌/우 타이어의 공기압 차이", "브레이크 액의 과도한 흡습", "좌/우 브레이크 호스의 막힘 정도 차이"],
    answer: 2,
    explain: "브레이크 액의 흡습은 비등점을 낮춰 베이퍼 록의 원인이 되지만, 좌/우 제동력 차이에 의한 쏠림 현상과는 직접적인 관계가 없다."
  },
  {
    question: "브레이크 배력 장치의 작동 부압(진공)이 약할 때 나타나는 현상은?",
    options: ["제동력이 너무 강하게 작용한다.", "브레이크 페달이 너무 깊게 밟힌다.", "페달의 답력이 무거워진다.", "브레이크 드래그 현상이 심해진다."],
    answer: 2,
    explain: "부압이 약하면 배력 보조력이 줄어들어 운전자가 페달을 더 세게 밟아야 하므로 답력이 무거워진다."
  },
  {
    question: "브레이크 디스크 로터의 연마 작업(Machining)을 하는 주된 목적은?",
    options: ["로터의 무게를 줄이기 위해", "로터의 재질을 경화시키기 위해", "로터 표면의 불균일한 마모, 스코어링, 흔들림 등을 제거하고 평탄도를 확보하기 위해", "로터의 내구성을 높이기 위해"],
    answer: 2,
    explain: "연마는 디스크 표면의 변형이나 손상을 제거하여 제동 시 발생하는 소음과 맥동을 없애고 제동력을 회복하기 위함이다."
  },
  {
    question: "ABS 휠 스피드 센서 회로 점검 시, 정상적인 능동형(Active) 센서의 출력 전압은?",
    options: ["0V 또는 $12\text{V}$의 직류 전압", "차량 속도에 비례하는 교류 전압", "차량 속도에 관계없이 일정한 전압", "ECU 공급 전압을 이용하는 디지털 신호"],
    answer: 3,
    explain: "능동형 센서는 ECU로부터 전원을 공급받아 디지털(구형파) 신호를 출력하며, 신호 주파수가 차량 속도에 비례한다."
  },
  {
    question: "브레이크 시스템에서 잔압을 유지하기 위한 체크 밸브(Check Valve)를 두는 브레이크 시스템의 종류는?",
    options: ["디스크 브레이크", "드럼 브레이크", "ABS 시스템", "EBD 시스템"],
    answer: 1,
    explain: "드럼 브레이크는 슈 복귀 후에도 휠 실린더의 컵 씰 밀봉을 위해 약 $0.7\text{ kgf/cm}^2$의 잔압이 필요하다."
  },
  {
    question: "브레이크 마스터 실린더 피스톤에 설치된 오리피스(Orifice)의 주요 기능은?",
    options: ["유압이 빠르게 해제되는 것을 방지한다.", "잔압을 유지시켜 휠 실린더의 피스톤 고착을 막는다.", "피스톤 복귀 시 브레이크 액을 신속히 보충한다.", "제동 시 발생하는 열을 액체로 전달한다."],
    answer: 2,
    explain: "피스톤 복귀 시 흡입 포트(보충 포트)를 통해 리저버 탱크의 액이 실린더로 빠르게 보충되도록 한다."
  },
  {
    question: "ESC/VDC 시스템이 차량의 오버스티어(Oversteer)를 보정하기 위해 제어하는 바퀴는?",
    options: ["차량의 안쪽 앞바퀴", "차량의 바깥쪽 뒷바퀴", "차량의 안쪽 뒷바퀴", "차량의 바깥쪽 앞바퀴"],
    answer: 3,
    explain: "오버스티어 시 차량의 바깥쪽 앞바퀴에 제동력을 가하여 차량이 더 회전하려는 요 모멘트(Yaw Moment)를 상쇄시킨다."
  },
  {
    question: "브레이크 라이닝의 마모 한계 확인 시, 측정해야 하는 것은?",
    options: ["라이닝의 폭", "라이닝의 길이", "라이닝의 최대 두께", "라이닝이 부착된 슈의 전체 두께"],
    answer: 2,
    explain: "라이닝의 두께가 제조사에서 제시한 규정치 이하로 마모되면 교체해야 한다. (일반적으로 1.5mm ~ 2.0mm 이하)"
  },
  {
    question: "ABS 유압 모듈레이터의 댐퍼(Damper) 또는 어큐뮬레이터(Accumulator)의 역할은?",
    options: ["브레이크 액을 가열하여 점도를 낮춘다.", "유압 감소 시 브레이크 액을 일시적으로 저장하여 압력 변동에 의한 소음 및 진동을 줄인다.", "브레이크 액의 순환을 돕는다.", "휠 스피드 센서의 신호를 안정화시킨다."],
    answer: 1,
    explain: "유압 감소 시 빼낸 브레이크 액을 저장하는 동시에, 급격한 압력 변동을 흡수하여 소음과 진동(맥동)을 줄이는 역할도 한다."
  },
  {
    question: "브레이크 액의 DOT 등급 숫자가 높을수록 의미하는 것은?",
    options: ["브레이크 액의 점도가 높다.", "비등점(끓는점)이 높고 품질이 우수하다.", "흡습성이 높다.", "브레이크 라인에 가하는 압력이 높다."],
    answer: 1,
    explain: "DOT 3 < DOT 4 < DOT 5.1 순으로 비등점이 높으며, 고온에서의 제동 안정성이 우수하다."
  },
  {
    question: "유압식 브레이크 시스템에서 유압을 생성하는 가장 근본적인 장치는?",
    options: ["휠 실린더", "브레이크 페달", "마스터 실린더", "배력 장치"],
    answer: 2,
    explain: "운전자가 페달을 밟으면 마스터 실린더의 피스톤이 브레이크 액을 압축하여 유압을 생성한다."
  },
  {
    question: "ABS(Anti-lock Brake System) 제어 중, EBD(Electronic Brakeforce Distribution) 기능이 개입하는 주된 목적은 무엇입니까?",
    options: ["휠 슬립 발생 시 제동 압력을 펄스(Pulse) 방식으로 제어하여 조향성을 확보", "긴급 제동 상황에서 브레이크 페달의 답력을 자동으로 증대시켜 제동력 향상", "차량 하중 분배 및 도로 조건에 따라 후륜의 제동 압력을 독립적으로 최적으로 분배 및 제어", "엔진의 토크를 제어하여 바퀴가 헛도는 것을 방지"],
    answer: 2,
    explain: "EBD는 전자식 제동력 분배 장치로, 차량의 적재 상태나 감속 시의 하중 이동을 감지하여 전륜과 후륜의 제동 압력을 가장 효율적으로 분배함으로써 제동 시 균형을 유지하고 제동 거리를 단축시킵니다."
},
{
    question: "디스크 브레이크 시스템에서 브레이크액이 끓어 기포가 발생하여 제동력이 급격히 상실되는 현상을 무엇이라고 하며, 이 현상을 방지하기 위해 브레이크액에 요구되는 가장 중요한 특성은 무엇입니까?",
    options: ["베이퍼 록(Vapor Lock), 높은 인화점", "페이드 현상(Fade), 높은 비열", "베이퍼 록(Vapor Lock), 높은 끓는점", "페이드 현상(Fade), 낮은 응고점"],
    answer: 2,
    explain: "베이퍼 록(Vapor Lock)은 브레이크액이 고온에서 끓어 증기 기포가 발생하고 이로 인해 제동력이 상실되는 현상입니다. 이를 방지하기 위해 브레이크액은 끓는점(건식 및 습식)이 높아야 합니다."
}
];

// 문제/보기 랜덤 섞기
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}
 
// ✅ 문제 순서 랜덤 + 60문제 제한
let questions = shuffleArray([...industry032702]).slice(0, 60);
 
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
      
      // 상태 표시 span과 제목 분리
      div.innerHTML = `
          <span id="q-status-${i}" class="q-status"></span>
          <strong class="q-title">${i + 1}. ${q.question}</strong>
      `;

      // 1. imagePath 속성이 있는지 확인
        if (q.imagePath) {
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
        
        const radioInput = label.querySelector("input");
        
        radioInput.addEventListener("change", () => {
          answers[i] = j;
          updateRemaining();

          const allLabels = optsDiv.querySelectorAll('label');
          allLabels.forEach(l => l.classList.remove('selected'));

          label.classList.add('selected');

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
// 제출 및 채점 (아이콘/색상 설정)
function submitQuiz() {
    // 1. 안 푼 문제 인덱스 확인
    const firstUnansweredIndex = answers.findIndex((a) => a < 0);
    const unansweredCount = answers.filter((a) => a < 0).length;

    // 2. 안 푼 문제가 있을 경우 확인
    if (unansweredCount > 0) {
        const confirmSubmit = confirm(
            `아직 ${unansweredCount}개의 문제를 풀지 않았습니다.\n계속 제출하시겠습니까? (취소 시 문제풀이 계속 및 첫 안 푼 문제로 이동)`
        );
        
        if (!confirmSubmit) {
            if (firstUnansweredIndex !== -1) {
                const questionDiv = document.getElementsByClassName("question")[firstUnansweredIndex];
                questionDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            return;
        }
    }
    
    clearInterval(timerInterval);
    document.getElementById("timer").textContent = "";
 
    let score = 0;
    questions.forEach((q, i) => {
      const questionDiv = document.getElementsByClassName("question")[i];
      const explainDiv = questionDiv.querySelector(".explain");
      const labels = questionDiv.querySelectorAll('label'); 
      const statusSpan = document.getElementById(`q-status-${i}`); 

      // 이전 상태 클래스 초기화
      // 이제 status-correct 클래스는 사용하지 않으므로 status-wrong만 남김
      statusSpan.classList.remove('status-correct', 'status-wrong', 'status-unanswered');

      // 💡 문제 상태에 따라 아이콘/색상/클래스 결정
      if (answers[i] == q.answer) {
          // 정답: ⭕ 
          score++;
          labels[q.answer].style.backgroundColor = "#b6fcb6";
          statusSpan.innerHTML = '⭕';
      } else if (answers[i] >= 0) {
          // 오답: ❌ 
          labels[q.answer].style.backgroundColor = "#b6fcb6"; // 정답은 초록색
          labels[answers[i]].style.backgroundColor = "#fcb6b6"; // 내가 고른 오답은 빨간색
          statusSpan.innerHTML = '❌';
          statusSpan.style.color = '#dc3545'; 
          statusSpan.classList.add('status-wrong'); // 클래스 추가 (CSS에서 빨간색 강제 적용)
      } else {
          // 미응답: 아무 표시도 하지 않음 (정답 옵션 하이라이트만 유지)
          labels[q.answer].style.backgroundColor = "#b6fcb6"; // 정답은 초록색
          statusSpan.innerHTML = ''; // 아이콘 내용 비우기
          statusSpan.style.color = ''; // 스타일 제거
      }

      // 채점 완료 후 기타 스타일 제거 및 해설 표시
      labels.forEach(l => l.classList.remove('selected'));

      explainDiv.innerHTML = `
          <p style="color: #1f3b73; font-weight: 700;">정답: ${q.options[q.answer]}</p>
          <p>${q.explain}</p>
      `;

      questionDiv.querySelectorAll('input[type="radio"]').forEach((r) => (r.disabled = true));
    });
 
    // 상단 배너에 점수 표시
    const status = document.getElementById("status");
    status.classList.add("center");
    status.innerHTML = `<span id="scoreDisplay">자동변속기 정비 1회차 총점: ${score}/${questions.length}</span>`;
 
    // 제출 버튼 제거
    document.getElementById("submitBtn").style.display = "none";
 
    // 결과창 표시
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<h2>자동변속기 정비 1회차 총점: ${score}/${questions.length}</h2>`;
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