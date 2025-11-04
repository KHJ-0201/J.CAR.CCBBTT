document.addEventListener('DOMContentLoaded', (event) => {
    // 1. 설정
    const CORRECT_PASSWORD = '0936'; 
    const LOGIN_KEY = 'cbt_is_logged_in';

    // 2. HTML 요소 가져오기
    const modal = document.getElementById('passwordModal');
    const passwordInput = document.getElementById('passwordInput');
    const submitButton = document.getElementById('submitButton');
    const errorMessage = document.getElementById('errorMessage');
    const body = document.body;
    const pageContent = document.getElementById('pageContent'); 

    // 3. 콘텐츠 표시 로직 (비밀번호가 맞았을 때 실행)
    function showContent() {
        modal.style.display = 'none';
        pageContent.classList.remove('blur'); // 블러 효과 제거
        errorMessage.style.display = 'none';
        body.style.visibility = 'visible';
    }

    // 4. 초기 실행: 로그인 상태 확인 및 블러 적용
    if (sessionStorage.getItem(LOGIN_KEY) === 'true') {
        // 로그인 기록이 있다면: 바로 콘텐츠를 표시
        showContent();
        return;
    } else {
        // 로그인 기록이 없다면: 모달을 띄우고 본문에 블러 적용
        modal.style.display = 'block'; 
        body.style.visibility = 'visible'; // body 보이게 설정
        pageContent.classList.add('blur'); // 블러
    }
    
    // 5. 비밀번호 확인 함수
    function checkPassword() {
        const enteredPassword = passwordInput.value;
        
        if (enteredPassword === CORRECT_PASSWORD) {
            // 비밀번호가 맞을 경우
            sessionStorage.setItem(LOGIN_KEY, 'true'); 
            showContent();
        } else {
            // 비밀번호가 틀렸을 경우
            errorMessage.style.display = 'block'; 
            passwordInput.value = '';             
            passwordInput.focus();                
        }
    }

    // 6. 이벤트 리스너 연결
    submitButton.addEventListener('click', checkPassword);
    passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkPassword();
        }
    });

    // 7. 뒤로가기/앞으로가기 시 깜빡임 방지 로직
    window.addEventListener('pageshow', function (event) {
        if (event.persisted) { // BFcache에서 복원된 경우
            if (sessionStorage.getItem(LOGIN_KEY) === 'true') {
                showContent();
            } else {
                modal.style.display = 'block';
                pageContent.classList.add('blur'); 
                body.style.visibility = 'visible';
            }
        }
    });
});