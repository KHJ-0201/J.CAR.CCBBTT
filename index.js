// [보안 검문] - 즉시 실행(IIFE)을 제거하고 일반 함수로 변경
function checkSecurity() {
    const isKakao = navigator.userAgent.toLowerCase().match(/kakaotalk/i);
    if (isKakao) return; // 카톡이면 아예 검사 안 함

    const isVerified = sessionStorage.getItem('auth_status') === 'verified';
    const hasName = localStorage.getItem('studentName');

    if (!isVerified || !hasName) {
        window.location.replace('start/lock.html');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // [수정] 화면이 다 불려온 뒤에 보안 검사를 실행합니다.
    // 이 사이의 짧은 시간에 index.html의 탈출 스크립트가 카톡을 탈출시킵니다.
    checkSecurity();

    const pcBanner = document.getElementById('pcBanner');
    const mobileBanner = document.getElementById('mobileBanner');

    pcBanner.addEventListener('click', () => {
        localStorage.setItem('userDevice', 'pc'); 
        window.location.href = 'start/01자격증선택.html';
    });

    mobileBanner.addEventListener('click', () => {
        localStorage.setItem('userDevice', 'mobile'); 
        window.location.href = 'start/01자격증선택.html';
    });
});

window.onpageshow = function(event) {
    if (event.persisted || (window.performance && window.performance.navigation.type === 2)) {
        window.location.reload();
    }
};