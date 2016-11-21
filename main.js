window.onload = function() {
    function resizeViewport() {
        var windowHeight = window.innerHeight, windowWidth = window.innerWidth;
        document.body.style.height = windowHeight + "px", window.resizeTo(windowHeight, windowWidth);
    }
    function detectOrientation() {
        window.innerHeight > window.innerWidth ? ($(".portrait-content").removeClass("is-hidden"),
        $(".landscape-content").addClass("is-hidden"), window.innerWidth >= 768 ? ($("body").addClass("tabdesk-portrait"),
        $("body").removeClass("tabdesk-landscape"), console.log("TD PORTRAIT")) : ($("body").addClass("mobile-portrait"),
        $("body").removeClass("mobile-landscape"), console.log("MOBILE PORTRAIT"))) : ($(".portrait-content").addClass("is-hidden"),
        $(".landscape-content").removeClass("is-hidden"), window.innerWidth >= 1024 ? ($("body").addClass("tabdesk-landscape"),
        $("body").removeClass("tabdesk-portrait"), console.log("TD LANDSCAPE")) : ($("body").addClass("mobile-landscape"),
        $("body").removeClass("mobile-portrait"), console.log("MOBILE LANDSCAPE"))), resizeViewport();
    }
    detectOrientation(), document.addEventListener("gesturestart", function(e) {
        e.preventDefault();
    }), window.addEventListener("orientationchange", function() {
        detectOrientation();
    }, !1), window.addEventListener("resize", function() {
        detectOrientation();
    }, !1);
    var TL = new TimelineMax();
    return TL.set(".content", {
        className: "-=is-loading"
    }).from($(".SNES"), 1.3, {
        scale: .85,
        autoAlpha: 0,
        ease: Cubic.ease
    }, "-=0.2").to($(".SNES"), .8, {
        autoAlpha: .25,
        ease: Cubic.easeIn
    }, "-=1.3").from($(".GBA"), 1.3, {
        scale: .85,
        autoAlpha: 0,
        ease: Cubic.ease
    }, "-=0.2").to($(".GBA"), .8, {
        autoAlpha: .25,
        ease: Cubic.easeIn
    }, "-=1.3").from($(".GBC"), 1.3, {
        scale: .85,
        autoAlpha: 0,
        ease: Cubic.ease
    }, "-=0.2").to($(".GBC"), .8, {
        autoAlpha: .25,
        ease: Cubic.easeIn
    }, "-=1.3").from($(".N64"), 1.3, {
        scale: .85,
        autoAlpha: 0,
        ease: Cubic.ease
    }, "-=0.2").to($(".N64"), .8, {
        autoAlpha: .25,
        ease: Cubic.easeIn
    }, "-=1.3").set(".logo", {
        className: "-=is-loading"
    }).set(".logo_image", {
        className: "+=is-masked"
    }).to($(".logo"), .5, {
        autoAlpha: 0,
        ease: Cubic.ease
    }, "+=1.5").set(".logo_image", {
        className: "+=is-hidden"
    }).from($(".logotype_image"), 1.3, {
        scale: .85,
        autoAlpha: 0,
        ease: Cubic.ease
    }, "-=0.2").to($(".logotype_image"), .8, {
        autoAlpha: 1,
        ease: Cubic.easeIn
    }, "-=1.3").from($(".date_image"), 1.3, {
        scale: .85,
        autoAlpha: 0,
        ease: Cubic.ease
    }, "-=0.2").to($(".date_image"), .8, {
        autoAlpha: 1,
        ease: Cubic.easeIn
    }, "-=1.3").set(".footer", {
        className: "-=is-loading"
    }).from($(".footer"), 1.3, {
        scale: .85,
        autoAlpha: 0,
        ease: Cubic.ease
    }, "-=0.2").to($(".footer"), .8, {
        autoAlpha: 1,
        ease: Cubic.easeIn
    }, "-=1.3"), TL;
};
