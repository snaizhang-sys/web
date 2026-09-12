// 確保 HTML 載入後才執行
document.addEventListener("DOMContentLoaded", function() {

    // 取得手機版選單區塊
    const menu = document.getElementById('myMenu');
    // 取得所有的連結
    const links = document.querySelectorAll('.nav-link');
    
    // 建立 Bootstrap 的摺疊實例
    const bsCollapse = new bootstrap.Collapse(menu, { toggle: false });

    // 為每個連結加上「點擊事件」
    links.forEach(function(link) {
        link.addEventListener('click', function() {
            // 如果目前是在「手機展開狀態」就把它縮回去
            if (window.innerWidth < 992) {
                bsCollapse.hide();
            }
        });
    });

});