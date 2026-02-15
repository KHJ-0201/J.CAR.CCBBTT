// [보안 검문]
(function checkSecurity() {
    // [수정] 카톡 브라우저라면 보안 검사(lock.html 이동)를 수행하지 않습니다.
    // 이미 index.html에서 기종선택 페이지로 보냈을 것이므로, 여기서 또 검사하면 꼬입니다.
    const isKakao = navigator.userAgent.toLowerCase().match(/kakaotalk/i);
    if (isKakao) return;

    const isVerified = sessionStorage.getItem('auth_status') === 'verified';
    const hasName = localStorage.getItem('studentName'); // 이름표 확인

    // 출입증이 없거나 이름표가 없으면 입구(lock.html)로 보냅니다.
    if (!isVerified || !hasName) {
        window.location.replace('start/lock.html');
    }
})();

document.addEventListener('DOMContentLoaded', () => {
    const pcBanner = document.getElementById('pcBanner');
    const mobileBanner = document.getElementById('mobileBanner');

    // 기기 선택 배너 클릭 로직 (원본 유지)
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

// [핵심] 밖으로 나갔을 때를 대비한 처리 (원본 유지)
window.onpageshow = function(event) {
    if (event.persisted || (window.performance && window.performance.navigation.type === 2)) {
        window.location.reload();
    }
};