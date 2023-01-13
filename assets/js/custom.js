

function data_overlay() {
    $("[data-overlay-color]").each(function (e) {
        var t = $(this),
            n = dsnGrid.removeAttr(t, "data-overlay-color");
        t.addClass("dsn-overlay-" + e), $("body").append("<style>.dsn-overlay-" + e + "[data-overlay]:before{background: " + n + ";}</style>")
    })
}

function background() {
    $(".cover-bg, section , [data-image-src]").each(function () {
        var e = $(this).attr("data-image-src");
        void 0 !== e && !1 !== e && $(this).css("background-image", "url(" + e + ")")
    })
}

! function (e) {
    "use strict";

    function t(n) {
        data_overlay(),
            function () {
                if (e('[data-dsn-temp="light"]').length > 0) {
                    o.addClass("v-light");
                    let t = e('[data-dsn-header="project"]');
                    t.length <= 0 ? o.addClass("menu-light") : t.hasClass("header-hero-2") && o.addClass("menu-light")
                } else o.removeClass("v-light")
            }(), background(),
            function (n) {
                const r = "dsn-effect-animate",
                    l = '[data-dsn-ajax="img"]';
                var d = !0;
                return {
                    main_root: e("main.main-root"),
                    ajax_click: e("a.effect-ajax "),
                    isEffectAjax: function () {
                        return !o.hasClass("dsn-ajax")
                    },
                    ajaxLoad: function () {
                        var t = this;
                        n && this.ajax_click.off("click"), this.ajax_click.on("click", function (n) {
                            if (!t.isEffectAjax()) {
                                n.preventDefault();
                                var i = e(this),
                                    o = i.attr("href"),
                                    s = i.data("dsn-ajax");
                                o.indexOf("#") >= 0 || void 0 === o || d && (d = !1, a().locked(), t.ajaxLoaderElemnt(!0), "slider" === s ? t.ajaxSlider(i, o) : "list" === s ? t.ajaxList(i, o) : "next-project" === s ? t.ajaxNextProject(i, o) : "blog" === s ? t.ajaxBlog(i, o) : "next" === s ? t.ajaxNext(i, o) : "work" === s ? t.ajaxWork(i, o) : t.ajaxNormal(o))
                            }
                        })
                    },

                    ajaxList: function (t, n) {
                        let a = this,
                            i = e(".nav-work-img-box img.dsn-active").first(),
                            s = n;
                        void 0 !== s && TweenMax.to(".nav-work-box .list-main", .8, {
                            autoAlpha: 0,
                            onComplete: function () {
                                a.createElement(i, s), setTimeout(function () {
                                    o.removeClass("dsn-show-work")
                                }, 1e3)
                            }
                        })
                    },
                    ajaxWork: function (e, t) {
                        let n = e.find("img");
                        n.removeClass("hidden");
                        let a = this;
                        TweenMax.to(n, .8, {
                            scale: 1,
                            height: "100%",
                            top: 0,
                            y: "0%",
                            onComplete: function () {
                                a.createElement(n, t)
                            }
                        })
                    },
                    createElement: function (n, i, s, d, c) {
                        let u = this,
                            f = e('<div class="active-ajax-e"></div>');
                        f.css({
                            position: "fixed",
                            width: "100%",
                            height: "100%",
                            top: 0,
                            left: 0,
                            zIndex: 999,
                            visibility: "hidden",
                            opacity: 0
                        }), f.css("background-color", o.css("background-color"));
                        var h = u.addElement(f, n, s);
                        o.append(f);
                        let g = 0,
                            m = .5;
                        TweenMax.to(f, 1, {
                            autoAlpha: 1,
                            ease: Power4.easeInOut,
                            onComplete: function () {
                                o.removeClass(r), u.loader(i, function (n, i, s) {
                                    var d = e(l);
                                    if (d.length <= 0) return TweenMax.to([f, h], 1, {
                                        width: 0,
                                        autoAlpha: 0,
                                        delay: 1,
                                        ease: Expo.easeIn,
                                        onStart: function () {
                                            a().unlocked(), t()
                                        },
                                        onComplete: function () {
                                            o.addClass(r), setTimeout(function () {
                                                f.remove()
                                            }, 500)
                                        }
                                    }), !1;
                                    var c = (d = d.first()).offset();
                                    void 0 === c && (c = {
                                        top: 0,
                                        left: 0
                                    }), g = .8, m = 1, TweenMax.to(h, 1, {
                                        top: c.top,
                                        left: c.left,
                                        width: d.width(),
                                        height: d.height(),
                                        objectFit: "cover",
                                        borderRadius: 0,
                                        onComplete: function () {
                                            TweenMax.to(f, m, {
                                                height: 0,
                                                onComplete: function () {
                                                    a().unlocked(), u.showAnimate()
                                                }
                                            }), TweenMax.to(h, m, {
                                                autoAlpha: 0,
                                                delay: g,
                                                onComplete: function () {
                                                    f.remove()
                                                }
                                            })
                                        }
                                    })
                                })
                            }
                        })
                    },
                    addElement: function (e, t, n) {
                        if (void 0 === t || t.length <= 0) return;
                        (void 0 === n || n.length <= 0) && (n = t);
                        let a = t.clone(),
                            i = n[0].getBoundingClientRect();
                        return void 0 === i && (i = {
                            left: 0,
                            top: 0
                        }), a.css({
                            position: "absolute",
                            display: "block",
                            transform: "",
                            transition: "",
                            objectFit: "cover"
                        }), a.css(dsnGrid.getBoundingClientRect(n[0])), e.append(a), a
                    },
                    ajaxNormal: function (t) {
                        var n = this,
                            s = e('<div class="class-ajax-loader"></div>');
                        s.css({
                            position: "fixed",
                            left: 0,
                            top: 0,
                            width: "100%",
                            height: "100%",
                            backgroundColor: "#1b1b1b",
                            zIndex: 900199,
                            "-webkit-transform": "translateY(100%)",
                            "-ms-transform": "translateY(100%)",
                            transform: "translateY(100%)"
                        }), o.append(s);
                        var r = e(document).height() - i.height() - 150;
                        i.scrollTop() < r && TweenMax.fromTo(this.main_root, 1, {
                            y: 0
                        }, {
                            y: -150,
                            ease: Expo.easeIn
                        }), TweenMax.to(s, 1, {
                            y: 0,
                            ease: Expo.easeIn,
                            onComplete: function () {
                                n.loader(t, function () {
                                    dsnGrid.scrollTop(0, 1), a().unlocked()
                                })
                            }
                        })
                    },
                    hideAnimate: function () {
                        TweenMax.set(e(s.animateTextAjax), {
                            autoAlpha: 0,
                            y: -50
                        })
                    },
                    showAnimate: function () {
                        TweenMax.staggerTo(e(s.animateTextAjax), 1, {
                            autoAlpha: 1,
                            y: 0
                        }, .2)
                    },
                    loader: function (t, n) {
                        var a = this;
                        o.removeClass("dsn-effect-animate"), this.main_root.load(t + " main.main-root > *", function (i, o, s) {
                            var r = e(this);
                            a.hideAnimate(), "error" !== o ? (a.ajaxTitle(t), history.pushState(null, null, t), setTimeout(function () {
                                a.animateAjaxEnd(), void 0 !== n && n(r, i, s), d = !0
                            }, 500)) : window.location = t
                        })
                    },
                    animateAjaxEnd: function () {
                        var n = this;
                        n.main_root.css("transform", "");
                        let a = e(".class-ajax-loader");
                        TweenMax.fromTo(a, 1, {
                            y: "0%"
                        }, {
                            y: "-100%",
                            ease: Expo.easeIn,
                            onComplete: function () {
                                a.remove(), n.ajaxLoaderElemnt(), n.showAnimate()
                            },
                            delay: 1
                        }), t(!0)
                    },
                    ajaxNext: function (t, n) {
                        var a = e('.dsn-imgs[data-dsn-next="blog"]'),
                            i = this;
                        a.length <= 0 ? i.ajaxNormal(n) : (TweenMax.set(a, {
                            autoAlpha: 1,
                            zIndex: 99999999
                        }), TweenMax.to(a, 1, {
                            top: 0,
                            ease: Expo.easeInOut,
                            onComplete: function () {
                                e('[data-dsn-header="blog"]').css("width", "100%"), i.createElement(a, n)
                            }
                        }))
                    },
                    ajaxTitle: function (t) {
                        e("title").load(t + " title", "", function (t) {
                            document.title = e(this).text()
                        });
                        var n = e("#wpadminbar");
                        n.length > 0 && n.load(t + " #wpadminbar", "", function (t) {
                            n.html(e(this).html())
                        })
                    },
                    ajaxLoaderElemnt: function (e) {
                        e ? o.addClass("dsn-ajax-effect") : o.removeClass("dsn-ajax-effect")
                    }
                }
            }(n).ajaxLoad(),
            function (t) {
                function n() {
                    dsnGrid.elementHover(i, "a.link-pop , a > img", "cursor-view"), dsnGrid.elementHover(i, ".close-wind", "cursor-close"), dsnGrid.elementHover(i, "a:not(> img) , .dsn-button-sidebar,  button", "cursor-link")
                }
                const i = ".cursor";
                if (a().isMobiles()) return;
                if (void 0 !== t && !0 === t) return void n();
                if (e("body").hasClass("dsn-large-mobile")) return;
                dsnGrid.mouseMove(i), n()
            }(n),  


            function () {
                const t = e(".dsn-slider"),
                    n = 1.2;
                return {
                    initSlider: function () {
                        const n = t.find(".slide-item"),
                            a = t.find(".dsn-slider-content");
                        n.each(function (t) {
                            e(this).attr("data-dsn-id", t);
                            let n = e(this).find(".slide-content");
                            n.attr("data-dsn-id", t), 0 === t && n.addClass("dsn-active dsn-active-cat"), a.append(n);
                            let i = n.find(".title-text-header-inner a");
                            dsnGrid.convertTextLine(i, i)
                        })
                    },
      

                    showText: function () {
                        return {
                            title: {
                                autoAlpha: 1,
                                x: "0%",
                                scale: 1,
                                rotation: 0,
                                ease: Elastic.easeInOut,
                                yoyo: !0
                            },
                            subtitle: {
                                autoAlpha: 1,
                                y: "0%",
                                ease: Elastic.easeOut
                            }
                        }
                    },
                    hideText: function (e) {
                        let t = "-90%";
                        return e && (t = "90%"), {
                            title: {
                                autoAlpha: 0,
                                x: t,
                                rotation: 8,
                                scale: 1.2,
                                ease: Elastic.easeOut,
                                yoyo: !0
                            },
                            subtitle: {
                                autoAlpha: 0,
                                y: t,
                                ease: Elastic.easeOut
                            }
                        }
                    },
                    touchStart: function (e) {
                        e.on("touchStart", function () {
                            let e = this;
                            for (let t = 0; t < e.slides.length; t++) e.slides[t].style.transition = ""
                        })
                    },
                    setTransition: function (e) {
                        e.on("setTransition", function (e) {
                            let t = this;
                            for (let n = 0; n < t.slides.length; n++) t.slides[n].style.transition = e + "ms", t.slides[n].querySelector(".image-bg").style.transition = e + "ms"
                        })
                    },

                    run: function () {
                        if (t.length <= 0) return;
                        this.initSlider();
                        var n = this.swiperObject();
                        if (this.progress(n), this.touchStart(n), this.setTransition(n), this.slideChange(n), e(".nav-slider").length <= 0) return;
                        let a = new Swiper(".nav-slider", {
                            speed: 1500,
                            slidesPerView: 3,
                            centeredSlides: !0,
                            touchRatio: .2,
                            slideToClickedSlide: !0,
                            direction: "vertical",
                            resistanceRatio: .65
                        });
                        n.controller.control = a, a.controller.control = n
                    }
                }
            }().run()
    }

    function n() {
        i.off("scroll");
        let t = e(".dsn-nav-bar");
        t.removeClass("header-stickytop");
        let n = 0;
        var a = e(".wrapper").offset(),
            o = e(".header-single-post .container").offset(),
            s = e(".post-full-content").offset(),
            l = 0;
        void 0 !== o ? a = o : a.top <= 70 && (a = s), r.getListener(function (e) {
            n = "scroll" === e.type ? i.scrollTop() : e.offset.y;
            let o = 70;
            void 0 !== a && (o = a.top - 100), n > o ? l < n ? t.addClass("nav-bg").addClass("hide-nave") : t.removeClass("hide-nave") : t.removeClass("nav-bg").removeClass("hide-nave"), l = n
        })
    }

    function a() {
        const t = window.Scrollbar;
        var a = document.querySelector("#dsn-scrollbar");
        return {
            isMobile: function () {
                return !!(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) || navigator.userAgent.match(/Edge/i) || navigator.userAgent.match(/MSIE 10/i) || navigator.userAgent.match(/MSIE 9/i))
            },
            isMobiles: function () {
                return !!(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) || navigator.userAgent.match(/Edge/i) || navigator.userAgent.match(/MSIE 10/i) || navigator.userAgent.match(/MSIE 9/i) || i.width() <= 991)
            },
            isScroller: function (e) {
                e && (a = document.querySelector("#dsn-scrollbar"));
                let t = !o.hasClass("dsn-effect-scroll") || this.isMobile() || null === a;
                return t && e && o.addClass("dsn-mobile"), !t
            },
            locked: function () {
                if (o.addClass("locked-scroll"), this.isScroller()) {
                    let e = this.getScrollbar();
                    void 0 !== e && e.destroy()
                }
            },
            unlocked: function () {
                o.removeClass("locked-scroll"), this.start(), n(), l.allInt(), dsnGrid.progressCircle(r)
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
                if (dsnGrid.scrollTop(0, 1), e(".scroll-to").on("click", function (t) {
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
                }), this.workScroll()
            },
            sliderScroll: function () {
                t.init(document.querySelector(".slider .main-slider .slider-nav-list"), {
                    damping: .05
                })
            },
            menuScroll: function () {
                t.init(document.querySelector(".nav__content"), {
                    damping: .05
                })
            },
            commentScroll: function () {
                const e = document.querySelector(".comment-modal .comment-modal-container");
                null !== e && t.init(e, {
                    damping: .05
                })
            },
            sidebarScroll: function () {
                const e = document.querySelector(".dsn-sidebar .sidebar-single");
                null !== e && t.init(e, {
                    damping: .05
                })
            },
            workScroll: function () {
                const e = document.querySelector(".dsn-all-work .dsn-work-scrollbar");
                null !== e && t.init(e, {
                    damping: .05
                })
            }
        }
    }
    const i = e(window),
        o = e("body"),
        s = {
            animateTextAjax: '.headefr-fexid .project-title .title-text-header .cat ,[data-dsn-animate="ajax"] , footer, .next-project , .root-project'
        };

    var r = a(),
        l = function () {
            var t = new ScrollMagic.Controller;
            const n = '[data-dsn-header="project"]',
                a = '[data-dsn-footer="project"]';
            return {
                clearControl: function () {
                    t = new ScrollMagic.Controller
                },
                isElemntId: function (e) {
                    return null !== document.getElementById(e)
                },
                headerProject: function () {
                    if (e(n).length <= 0) return !1;
                    let a = e("#dsn-hero-parallax-img"),
                        i = e("#dsn-hero-parallax-title"),
                        s = e("#dsn-hero-parallax-fill-title"),
                        r = e("#descover-holder"),
                        l = 1.2;
                    a.hasClass("parallax-move-element") && dsnGrid.parallaxMoveElemnt({
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
                    if (i.length > 0 && (i.hasClass("project-title") && (l = 1), d.to(i, .8, {
                            force3D: !0,
                            top: "30%",
                            autoAlpha: 0,
                            scale: l
                        }, 0)), s.length > 0 && d.to(s, 1, {
                            force3D: !0,
                            height: 80
                        }, 0).to("#dsn-hero-parallax-fill-title h1", 1, {
                            force3D: !0,
                            top: 0
                        }, 0).to(i.find(".slider-header.slider-header-top"), 1, {
                            force3D: !0,
                            height: 0
                        }, 0), r.length > 0 && d.to(r, .8, {
                            force3D: !0,
                            bottom: "-10%",
                            autoAlpha: 0
                        }, 0), d._totalDuration <= 0) return !1;
                    var c = new ScrollMagic.Scene({
                        triggerElement: n,
                        triggerHook: 0,
                        duration: "100%"
                    }).setTween(d).addTo(t);
                    let u = a.find("video");
                    return (u.length > 0 || o.hasClass("v-light")) && (c.on("enter", function () {
                        u.length > 0 && u.get(0).play(), o.hasClass("v-light") && !e(n).hasClass("header-hero-2") && o.removeClass("menu-light")
                    }), c.on("leave", function () {
                        u.length > 0 && u.get(0).pause(), o.hasClass("v-light") && !e(n).hasClass("header-hero-2") && o.addClass("menu-light")
                    })), c
                },

                parallaxImg: function () {
                    e('[data-dsn-grid="move-up"]').each(function () {
                        let n = e(this);
                        n.attr("data-dsn-grid", "moveUp");
                        let a = n.find("img:not(.hidden) , video"),
                            i = dsnGrid.getUndefinedVal(n.data("dsn-triggerhook"), 1),
                            o = dsnGrid.getUndefinedVal(n.data("dsn-duration"), 1 !== i ? "100%" : "200%");
                        if (a.length > 0) {
                            var s;
                            if (a.hasClass("has-top-bottom")) {
                                let e = dsnGrid.getUndefinedVal(a.data("dsn-move"), "15%");
                                s = TweenMax.to(a, .8, {
                                    force3D: !0,
                                    y: e,
                                    ease: Power0.easeNone
                                })
                            } else {
                                let e = dsnGrid.getUndefinedVal(a.data("dsn-y"), "10%"),
                                    t = dsnGrid.getUndefinedVal(a.data("dsn-scale"), 1.1);
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
                    e('[data-dsn-grid="move-section"]').each(function () {
                        let n = e(this);
                        n.removeAttr("data-dsn-grid"), n.addClass("dsn-move-section");
                        let a = dsnGrid.getUndefinedVal(n.data("dsn-move"), -100),
                            o = dsnGrid.getUndefinedVal(n.data("dsn-triggerhook"), 1),
                            s = dsnGrid.getUndefinedVal(n.data("dsn-opacity"), n.css("opacity")),
                            l = dsnGrid.getUndefinedVal(n.data("dsn-duration"), "150%");
                        if ("tablet" === n.data("dsn-responsive") && i.width() < 992) return;
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
                    const t = e('[data-dsn="parallax"]');
                    0 === t.length || i.width() < 992 || t.each(function () {
                        var t = e(this),
                            n = (dsnGrid.removeAttr(t, "data-dsn"), dsnGrid.removeAttr(t, "data-dsn-speed")),
                            a = dsnGrid.removeAttr(t, "data-dsn-move"),
                            i = !1;
                        t.hasClass("image-zoom") && (i = !0), dsnGrid.parallaxMoveElemnt(t, a, n, void 0, i)
                    })
                },


                allInt: function () {
                    this.clearControl();
                    let e = this.headerProject();
                    r.getListener(function (t) {
                        !1 !== e && e.refresh()
                    }),  this.parallaxImgHover(), this.parallaxImg(), this.moveSection()
                }
            }
        }();
    r.start(), l.allInt(), t(), i.on("popstate", function (n) {
        e("main.main-root").load(document.location + " main.main-root > *", function () {
            t(!0), a().unlocked()
        })
    }),  n()
}(jQuery);