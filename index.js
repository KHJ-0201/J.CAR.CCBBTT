// [보안 검문]
(function checkSecurity() {
    // 출입증이 없으면 대문(index.html)으로 쫓아냄
    if (sessionStorage.getItem('auth_status') !== 'verified') {
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