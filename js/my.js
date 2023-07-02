// 浏览器动态标题
var OriginTitle = document.title;//标题
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        // $('[rel="icon"]').attr('href', "/funny.ico");
        document.title = "╭(°A°`)╮ 页面崩溃啦 ~";
        clearTimeout(titleTime);
    }
    else {
        // $('[rel="icon"]').attr('href', "/favicon.ico");
        document.title = "(ฅ>ω<*ฅ) 噫又好啦 ~";
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});
