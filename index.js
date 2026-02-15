// [보안 검문]
(function checkSecurity() {
    // 1. 카톡인지 먼저 확인합니다.
    const isKakao = navigator.userAgent.toLowerCase().match(/kakaotalk/i);
    
    // 2. 카톡일 때는 보안 검사(lock.html 이동)를 중단합니다. 
    // 그래야 탈출 버튼 화면이 정상적으로 보입니다.
    if (isKakao) return;

    const isVerified = sessionStorage.getItem('auth_status') === 'verified';
    const hasName = localStorage.getItem('studentName');

    if (!isVerified || !hasName) {
        window.location.replace('start/lock.html');
    }
})();

document.addEventListener('DOMContentLoaded', () => {
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
});

window.onpageshow = function(event) {
    if (event.persisted || (window.performance && window.performance.navigation.type === 2)) {
        window.location.reload();
    }
};