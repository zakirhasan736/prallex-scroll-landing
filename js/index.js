! function (e) {
    "use strict";


    function a() {
        const t = window.Scrollbar;
        var a = document.querySelector("#elf-scrollbar");
        return {
            isMobile: function () {
                return !!(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) || navigator.userAgent.match(/Edge/i) || navigator.userAgent.match(/MSIE 10/i) || navigator.userAgent.match(/MSIE 9/i))
            },
            isMobiles: function () {
                return !!(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) || navigator.userAgent.match(/Edge/i) || navigator.userAgent.match(/MSIE 10/i) || navigator.userAgent.match(/MSIE 9/i) || i.width() <= 991)
            },
            isScroller: function (e) {
                e && (a = document.querySelector("#elf-scrollbar"));
                let t = !o.hasClass("elf-int-scroll");
                return t && e && o.addClass("elf-mobile"), !t
            },
            locked: function () {
                if (o.addClass("locked-scroll"), this.isScroller()) {
                    let e = this.getScrollbar();
                    void 0 !== e && e.destroy()
                }
            },
            unlocked: function () {
                o.removeClass("locked-scroll"), this.start(), n(), l.allInt(), elfInt.progressCircle(r)
            },
            getScrollbar: function (e) {
                return void 0 === e ? t.get(a) : t.get(document.querySelector(e))
            },
            getListener: function (e) {
                if (void 0 !== e) {
                    var t = this;
                    t.isScroller(!0) ? t.getScrollbar().addListener(e) : i.on("scroll", e)
                }
            },
            start: function () {
                if (elfInt.scrollTop(0, 1), e(".scroll-to").on("click", function (t) {
                        t.preventDefault();
                        let n = i;
                        r.isScroller(!0) && (n = r.getScrollbar()), TweenLite.to(n, 1.5, {
                            scrollTo: e(".wrapper").offset().top,
                            ease: Expo.easeInOut
                        })
                    }), !this.isScroller(!0)) return;
                let n = .05;
                this.isMobiles() && (n = .02), t.init(a, {
                    damping: n
                })
               
            },
           
        }
    }
    const i = e(window),
        o = e("body");

    var r = a(),
        l = function () {
            var t = new ScrollMagic.Controller;
            const n = '[data-elf-header="project"]',
                a = '[data-elf-footer="project"]';
            return {
                clearControl: function () {
                    t = new ScrollMagic.Controller
                },
                isElemntId: function (e) {
                    return null !== document.getElementById(e)
                },
                headerProject: function () {
                    if (e(n).length <= 0) return !1;
                    let a = e("#elf-hero-parallax-img"),
                        i = e("#elf-hero-parallax-title"),
                        s = e("#elf-hero-parallax-fill-title"),
                        r = e("#descover-holder"),
                        l = 1.2;
                    a.hasClass("parallax-move-element") && elfInt.parallaxMoveElemnt({
                        target: e(n),
                        element: a.find(".cover-bg")
                    }, 5, 1);
                    var d = new TimelineMax;
                    if (a.length > 0) {
                        let e = a.hasClass("has-top-bottom") ? 1 : 1.08;
                        d.to(a, 1, {
                            force3D: !0,
                            y: "30%",
                            scale: e
                        }, 0)
                    }
                },
                nextProject: function () {
                    let n = e("#elf-next-parallax-img"),
                        i = e("#elf-next-parallax-title"),
                        s = !(n.length <= 0) && new ScrollMagic.Scene({
                            triggerElement: a,
                            triggerHook: 1,
                            duration: "100%"
                        }).setTween(TweenMax.to(n, 1, {
                            force3D: !0,
                            y: "30%",
                            scale: 1
                        }, 0)).addTo(t),
                        l = !(i.length <= 0) && new ScrollMagic.Scene({
                            triggerElement: a,
                            triggerHook: .5,
                            duration: "55%"
                        }).setTween(TweenMax.to(i, 1, {
                            force3D: !0,
                            top: "0%",
                            opacity: 1,
                            ease: Power0.easeNone
                        }, 0)).addTo(t);
                    r.getListener(function (e) {
                        !1 !== s && s.refresh(), !1 !== l && l.refresh()
                    })
                },
                parallaxImg: function () {
                    e('[data-elf-int="move-up"]').each(function () {
                        let n = e(this);
                        n.attr("data-elf-int", "moveUp");
                        let a = n.find("img:not(.hidden) , video"),
                            i = elfInt.getUndefinedVal(n.data("elf-triggerhook"), 1),
                            o = elfInt.getUndefinedVal(n.data("elf-duration"), 1 !== i ? "100%" : "200%");
                        if (a.length > 0) {
                            var s;
                            if (a.hasClass("has-top-bottom")) {
                                let e = elfInt.getUndefinedVal(a.data("elf-move"), "15%");
                                s = TweenMax.to(a, .8, {
                                    force3D: !0,
                                    y: e,
                                    ease: Power0.easeNone
                                })
                            } else {
                                let e = elfInt.getUndefinedVal(a.data("elf-y"), "10%"),
                                    t = elfInt.getUndefinedVal(a.data("elf-scale"), 1.1);
                                1 !== i ? (a.css("top", 0), s = TweenMax.to(a, 2, {
                                    force3D: !0,
                                    scale: t,
                                    y: e
                                })) : s = TweenMax.to(a, 1, {
                                    force3D: !0,
                                    scale: t,
                                    y: e,
                                    ease: Power0.easeNone
                                })
                            }
                            var l = new ScrollMagic.Scene({
                                triggerElement: this,
                                triggerHook: i,
                                duration: o
                            }).setTween(s).addTo(t);
                            r.getListener(function () {
                                l.refresh()
                            })
                        }
                    })
                },
                moveSection: function () {
                    e('[data-elf-int="move-section"]').each(function () {
                        let n = e(this);
                        n.removeAttr("data-elf-int"), n.addClass("elf-move-section");
                        let a = elfInt.getUndefinedVal(n.data("elf-move"), -100),
                            o = elfInt.getUndefinedVal(n.data("elf-triggerhook"), 1),
                            s = elfInt.getUndefinedVal(n.data("elf-opacity"), n.css("opacity")),
                            l = elfInt.getUndefinedVal(n.data("elf-duration"), "150%");
                        let d = TweenMax.to(n, 2, {
                            y: a,
                            autoAlpha: s,
                            ease: Power0.easeNone
                        });
                        var c = new ScrollMagic.Scene({
                            triggerElement: this,
                            triggerHook: o,
                            duration: l
                        }).setTween(d).addTo(t);
                        r.getListener(function () {
                            c.refresh()
                        })
                    })
                },
                parallaxImgHover: function () {
                    const t = e('[data-elf="parallax"]');
                    0 === t.length || t.each(function () {
                        var t = e(this),
                            n = (elfInt.removeAttr(t, "data-elf"), elfInt.removeAttr(t, "data-elf-speed")),
                            a = elfInt.removeAttr(t, "data-elf-move"),
                            i = !1;
                        t.hasClass("zoom-up") && (i = !0), elfInt.parallaxMoveElemnt(t, a, n, void 0, i)
                    })
                },

                animateText: function () {
                    e('[data-elf-anim="anim-text"] , [data-elf-anim="fade-up"]').each(function () {
                        let n = e(this),
                            a = 1;
                        "anim-text" === n.data("elf-anim") ? (elfInt.convertTextWord(n, n), n.attr("data-elf-anim", "animate")) : a = .8;
                        var i = new ScrollMagic.Scene({
                            triggerElement: this,
                            reverse: !1,
                            triggerHook: a
                        }).setClassToggle(this, "elf-active").addTo(t);
                        r.getListener(function () {
                            i.refresh()
                        })
                    })
                },
    
                allInt: function () {
                    this.clearControl();
                    let e = this.headerProject();
                    r.getListener(function (t) {
                        !1 !== e && e.refresh()
                    }), this.nextProject(), this.parallaxImgHover(), this.parallaxImg(), this.moveSection(), this.animateText()
                }
            }
        }();
    r.start(), l.allInt(),  i.on("popstate", function (n) {
        e("main.main-scroll--box").load(document.location + " main.main-scroll--box > *", function () {
            t(!0), a().unlocked()
        })
    })

}(jQuery);

  
  