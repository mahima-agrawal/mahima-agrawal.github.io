jQuery(window).scroll(function(){
    var fromTopPx = 100; // distance to trigger
    var scrolledFromtop = jQuery(window).scrollTop();
    if(scrolledFromtop > fromTopPx){
        jQuery('body').addClass('scrolled');
    }else{
        jQuery('body').removeClass('scrolled');
    }
});