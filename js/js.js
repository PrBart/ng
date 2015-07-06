$(document).ready(function(){
                $(".b-central-section-slider").each(function () { 
                    var obj = $(this);
                    $(obj).append("<div class='b-slider-nav'></div>");
                    $(obj).find("li").each(function () {
                    $(obj).find(".b-slider-nav").append("<span rel='"+$(this).index()+"'>"+(+$(this).index()+1)+"</span>"); 
                    $(this).addClass("b-slide__"+$(this).index());
                        });
                $(obj).find("span").addClass("b-slider-nav__buttons");
                $(obj).find("span").first().addClass("b-slider-nav__buttons_active");
                    });
                });
function sliderJS (rel, sl) { 
        var ul = $(sl).find(".b-slider-body");
                    var bl = $(sl).find(".b-slide__"+rel);
                    var step = $(bl).width();
                    $(ul).animate({marginLeft: "-"+step*rel}, 500); 
                }
                $(document).on("click", ".b-slider-nav__buttons", function() { 
                    var sl = $(this).closest(".b-central-section-slider"); 
                    $(sl).find("span").removeClass("b-slider-nav__buttons_active"); 
                    $(this).addClass("b-slider-nav__buttons_active");
                    var rel = $(this).attr("rel");
                    sliderJS(rel, sl);
                    return false;
});

var lazyJustSlide;
var justSlide = function(){
    var rel= $(".b-slider-nav__buttons_active").attr("rel");
    var sl= $(".b-central-section-slider");
    sliderJS(rel, sl);
}
lazyJustSlide =_.debounce(justSlide, 1000);
$(window).resize(lazyJustSlide);



function autoslide() {
    var rel= +$(".b-slider-nav__buttons_active").attr("rel")+1;
    var sl= $(".b-central-section-slider");
    if(rel==3){
        rel=0
        $(sl).find("span").removeClass("b-slider-nav__buttons_active");
        $(sl).find("span").first().addClass("b-slider-nav__buttons_active");
        sliderJS(rel, sl);
    }else{
    $(sl).find(".b-slider-nav__buttons_active").removeClass("b-slider-nav__buttons_active").next().addClass("b-slider-nav__buttons_active");
    sliderJS(rel, sl);
    }
}

var SliderInterval = setInterval(autoslide, 5000);

$(document).on("click", ".b-caption-button__stop", function() {
    clearInterval(SliderInterval);
    $(".b-caption-button__stop").css("display", "none");
    $(".b-caption-button__play").css("display", "block");
    return false;
});
$(document).on("click", ".b-caption-button__play", function() {
    autoslide()
    SliderInterval = setInterval(autoslide, 5000);
    $(".b-caption-button__play").css("display", "none");
    $(".b-caption-button__stop").css("display", "block");
    return false;
});
function heightCalc (){
    var height=$(".b-content__central-section").height();
    $(".b-content__submenu").css("height", height);
}
$(document).ready(function(){
    heightCalc ();
})
$(window).resize(heightCalc);
