// [보안 검문]
(function checkSecurity() {
    // 1. 현재 접속한 브라우저가 카카오톡인지 먼저 확인합니다.
    const isKakao = navigator.userAgent.toLowerCase().match(/kakaotalk/i);
    
    // 2. 카카오톡일 때는 아래 보안 검사를 건너뜁니다. (index.html의 탈출 스크립트가 실행될 시간을 벌어줌)
    if (isKakao) return;

    const isVerified = sessionStorage.getItem('auth_status') === 'verified';
    const hasName = localStorage.getItem('studentName'); // 이름표가 있는지 확인

    // 출입증이 없거나 이름표를 안 적었으면 다시 입구(lock.html)로 보냅니다.
    if (!isVerified || !hasName) {
        window.location.replace('start/lock.html');
    }
})();

document.addEventListener('DOMContentLoaded', () => {
    const pcBanner = document.getElementById('pcBanner');
    const mobileBanner = document.getElementById('mobileBanner');

    // 내부 이동 시에는 아무 제약 없이 이동합니다.
    pcBanner.addEventListener('click', () => {
        localStorage.setItem('userDevice', 'pc'); 
        window.location.href = 'start/01자격증선택.html';
    });

    mobileBanner.addEventListener('click', () => {
        localStorage.setItem('userDevice', 'mobile'); 
        window.location.href = 'start/01자격증선택.html';
    });
});

// [핵심] 밖(구글)으로 완전히 나갔을 때를 대비한 처리
window.onpageshow = function(event) {
    // 만약 '앞으로 가기'로 들어오거나 캐시로 들어오면 보안을 위해 새로고침
    if (event.persisted || (window.performance && window.performance.navigation.type === 2)) {
        window.location.reload();
    }
};