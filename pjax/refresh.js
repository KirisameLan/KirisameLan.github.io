new Pjax({
  selectors: [
    "title",
    "#the-header",
    "#nexmoe-content",
  ]
});

document.addEventListener('pjax:send', function (){
    NProgress.start();
    $.getScript("//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js");
});

document.addEventListener('pjax:complete', function (){
    OriginTitle = document.title;
    NProgress.done();
});