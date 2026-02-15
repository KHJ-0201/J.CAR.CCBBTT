// [보안 검문 함수]
function checkSecurity() {
    const isKakao = navigator.userAgent.toLowerCase().match(/kakaotalk/i);
    
    // 카톡이면 보안 검사(lock.html 이동)를 하지 않고 여기서 즉시 종료합니다.
    if (isKakao) return; 

    const isVerified = sessionStorage.getItem('auth_status') === 'verified';
    const hasName = localStorage.getItem('studentName');

    if (!isVerified || !hasName) {
        window.location.replace('start/lock.html');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // [사장님 지침] 1초(1000ms)의 여유 시간을 주어 카톡 탈출이 먼저 완료되게 합니다.
    setTimeout(() => {
        checkSecurity();

        const pcBanner = document.getElementById('pcBanner');
        const mobileBanner = document.getElementById('mobileBanner');

        if (pcBanner) {
            pcBanner.addEventListener('click', () => {
                localStorage.setItem('userDevice', 'pc'); 
                window.location.href = 'start/01자격증선택.html';
            });
        }

        if (mobileBanner) {
            mobileBanner.addEventListener('click', () => {
                localStorage.setItem('userDevice', 'mobile'); 
                window.location.href = 'start/01자격증선택.html';
            });
        }
    }, 1000); 
});

// [핵심] 밖으로 나갔을 때를 대비한 처리
window.onpageshow = function(event) {
    if (event.persisted || (window.performance && window.performance.navigation.type === 2)) {
        window.location.reload();
    }
};