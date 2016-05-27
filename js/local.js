var delay = 3000;
var timeoutId;
var animationIsFinished = false;
$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['firstPage', 'secondPage', '3rdPage'],
        menu: '#menu',
        loopTop: true,
        loopBottom: true,
        //Scrolling
        css3: false,
        scrollingSpeed: 700,
        easing: 'easeInQuad',
        onLeave: function(index, nextIndex, direction){
           var curTime = new Date().getTime();
           $('#section1').addClass('animate');
           clearTimeout(timeoutId);
           timeoutId = setTimeout(function(){
               animationIsFinished = true;
               $.fn.fullpage.moveTo(nextIndex);
           }, delay);

           return animationIsFinished;
},
    });
});
