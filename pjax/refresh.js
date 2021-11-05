new Pjax({
  elements: "a",
  selectors: [
    "title",
    "#the-header",
    "#nexmoe-content",
  ]
});


document.addEventListener('pjax:send', function (){
    NProgress.start();
});

document.addEventListener('pjax:complete', function (){
    OriginTitle = document.title;
    NProgress.done();
});