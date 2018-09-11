$(document).ready(function () { 
    $(".btn-all").click(function(){
        $(".item-design").show(300);
        $(".item-code").show(300);
        $(".item-apps").show(300);
        $(".item-photography").show(300);
    });
    
    $(".btn-design").click(function(){
        $(".item-design").show(300);
        $(".item-code").hide(300);
        $(".item-apps").hide(300);
        $(".item-photography").hide(300);
    });
    
    $(".btn-code").click(function(){
        $(".item-design").hide(300);
        $(".item-code").show(300);
        $(".item-apps").hide(300);
        $(".item-photography").hide(300);
    });
    
    $(".btn-photograph").click(function(){
        $(".item-design").hide(300);
        $(".item-code").hide(300);
        $(".item-apps").hide(300);
        $(".item-photography").show(300);
    });
    
    $(".btn-apps").click(function(){
        $(".item-design").hide(300);
        $(".item-code").hide(300);
        $(".item-apps").show(300);
        $(".item-photography").hide(300);
    });
    
    $("body").niceScroll({
        cursorcolor:"#ffda00",
        cursorwidth:"10px",
        cursorborder:"#ffda00",
    });
    new WOW().init();
    
    
});







