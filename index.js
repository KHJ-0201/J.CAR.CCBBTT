// [보안 검문]
function checkSecurity() {
    const isKakao = navigator.userAgent.toLowerCase().match(/kakaotalk/i);
    
    // 카톡이면 보안 검사를 아예 수행하지 않음 (lock.html로 튕기는 것 방지)
    if (isKakao) return;

    const isVerified = sessionStorage.getItem('auth_status') === 'verified';
    const hasName = localStorage.getItem('studentName');

    if (!isVerified || !hasName) {
        window.location.replace('start/lock.html');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // 1초 뒤에 검사 시작 (탈출 화면이 먼저 나오게 보장)
    setTimeout(() => {
        checkSecurity();
    }, 1000);

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