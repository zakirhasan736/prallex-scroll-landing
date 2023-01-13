var $ = jQuery,
    wind = jQuery(window),
    body = jQuery("body"),
    elfInt = {

        parallaxIt: function (e, n, t, o) {
            if (!(n.length <= 0)) {
                var i = n[0].getBoundingClientRect(),
                    a = e.pageX - i.left,
                    s = e.pageY - i.top,
                    r = window.pageYOffset || document.documentElement.scrollTop;
                o = this.getUndefinedVal(o, .3), t = this.getUndefinedVal(t, -1), TweenMax.to(n, o, {
                    x: (a - i.width / 1) / i.width * t,
                    y: (s - i.height / 2 - r) / i.width * t,
                    ease: Power0.easeOut
                })
            }
        },
        scaleIt: function (e, n, t) {
            if (void 0 === n) return !1;
            var o = 0;
            o = body.hasClass("elf-int-scroll") ? e.scrollTop : e.scrollTop();
            var i, a, s;
            s = this.getUndefinedVal(t.plus, 0), i = this.getUndefinedVal(t.position, !1);
            var r = n.offset();
            a = void 0 === r || body.hasClass("elf-int-scroll") ? 0 : r.top, i && (a -= o);
            return o / (n.height() + a + s)
        },
        scrollerIt: function (e, n, t) {
            if (void 0 === n) return !1;
            var o, i, a, s = e.scrollTop();
            a = this.getUndefinedVal(t.duration, 0), i = this.getUndefinedVal(t.plus, 0);
            var r = n.offset();
            o = void 0 !== r ? r.top : 0, o += a;
            var d = n.height() + o + i;
            if (o <= s && void 0 !== t.action) {
                var l = o - s,
                    c = l / d,
                    f = s / (n.height() + o + i);
                t.action({
                    scroll: l,
                    position: c,
                    targetEnd: d,
                    ScrollTop: s,
                    num: f
                })
            }
            return f
        },
        setPositionMoveSection: function (e, n, t) {
            if (void 0 !== e) {
                var o = e.offset(),
                    i = void 0 === o ? 0 : o.top;
                n = elfInt.getUndefinedVal(n, 2), t = elfInt.getUndefinedVal(t, 0);
                var a = (e.innerHeight() + i + t) / 2;
                e.css({
                    marginBottom: a / n * -1
                })
            }
        },
        scrollTop: function (e, n, t, o) {
            n = elfInt.getUndefinedVal(n, 500), t = elfInt.getUndefinedVal(t, 0);
            var i = 0;
            "number" == typeof e ? i = e : (e instanceof jQuery == !1 && (e = jQuery(e)), void 0 !== (i = e.offset()) && (i = i.top)), jQuery("html, body").animate({
                scrollTop: i + t
            }, n, o)
        },
        getUndefinedVal: function (e, n) {
            return void 0 === e ? n : e
        },

        endAnimate: function (e, n) {
            void 0 !== n && null !== n && e.one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function (e) {
                n(e)
            })
        },

        numberText: function (e) {
            return e < 10 && e > 0 ? "0" + e : e
        },
        convertTextLine: function (e, n) {
            var t = e.html().trim(),
                o = "";
            e.html("");
            for (var i = 0; i < t.length; i++) 0 === i && (o += '<div class="elf-word-box">'), " " !== t.charAt(i) ? o += '<span class="elf-chars-box">' + t.charAt(i) + "</span>" : o += "</div>" + t.charAt(i) + '<div class="elf-word-box">';
            o += "</div>", n.append(o)
        },
        randomObjectArray: function (e, n) {
            let t = this.getUndefinedVal(n, 100);
            return e.sort(function () {
                return Math.round(Math.random()) * t
            })
        },
        convertTextWord: function (e, n, t) {
            var o = e.html().trim().split(" "),
                i = "";
            e.html("");
            for (var a = 0; a < o.length; a++)
                if (o[a].length > 0) {
                    if (i += '<span class="elf-box">', t) {
                        i += '<span class="elf-word-box">';
                        for (var s = 0; s < o[a].length; s++) i += '<span class="elf-chars-box">' + o[a].charAt(s) + "</span>";
                        i += "</span>"
                    } else i += '<span class="elf-word-box">' + o[a] + "</span>";
                    i += "</span>"
                } n.append(i)
        },
        getRndInteger: function (e, n) {
            return Math.floor(Math.random() * (n - e)) + e
        },
        pageLoad: function (e, n, t, o) {
            var i = window.performance.timing,
                a = -1 * (i.loadEventEnd - i.navigationStart) / 1e3 % 50 * 10,
                s = e,
                r = n > e ? 1 : -1,
                d = Math.abs(Math.floor((a + t) / 100)),
                l = setInterval(function () {
                    o(s += r), s >= n && clearInterval(l)
                }, d);
            return l
        },

        removeAttr: function (e, n) {
            if (void 0 !== e && void 0 !== n) {
                var t = e.attr(n);
                return void 0 !== t && e.removeAttr(n), t
            }
        },

        parallaxMoveElemnt: function (e, n, t, o, i) {
            var a = e,
                s = e;
            if (void 0 !== e.target && (a = e.target, s = void 0 !== e.element ? e.element : e.target), !(s.length <= 0)) {
                t = void 0 === t ? .5 : parseFloat(t), n = void 0 === n ? 20 : parseFloat(n), i = void 0 !== i && i;
                var r = $('<div class="icon-circle"></div>');
                a.append(r), a.off("mouseleave"), a.off("mouseenter"), a.off("mousemove"), a.on("mouseleave", function (e) {
                    var n = {
                        x: 0,
                        y: 0,
                        ease: Back.easeOut.config(4)
                    };
                    i && (n.scale = 1);
                    var t = [s, r];
                    void 0 !== o && t.push(o), TweenMax.to(t, 1, n)
                }).on("mouseenter", function (e) {
                    var n = {
                        transformOrigin: "0 0"
                    };
                    i && (n.scale = "1.01"), TweenMax.to([s, r], .3, n)
                }).on("mousemove", function (e) {
                    elfInt.parallaxIt(e, s, n), elfInt.parallaxIt(e, r, 2 * n), void 0 !== o && elfInt.parallaxIt(e, o, -20, .5)
                })
            }
        },
        parallaxMoveElemntCir: function (e, n, t, o, i) {
            var a = e,
                s = this;
            t = void 0 === t ? .5 : parseFloat(t), n = void 0 === n ? 20 : parseFloat(n), i = void 0 !== i && i;
            var r = a.html(),
                d = $('<div class="icon-circle"></div>'),
                l = $('<div class="elf-int-parallax">' + r + "</div>");
            a.html(""), a.append(d), a.append(l), a.on("mouseleave", function (e) {
                TweenMax.to(a, t, {
                    scale: 1
                }), TweenMax.to(l, .3, {
                    scale: 1,
                    x: 0,
                    y: 0
                }), TweenMax.to(d, t, {
                    scale: 1,
                    x: 0,
                    y: 0
                })
            }).on("mouseenter", function (e) {
                TweenMax.to(a, t, {
                    transformOrigin: "0 0",
                    scale: 1
                }), TweenMax.to(d, t, {
                    scale: 1.2
                })
            }).on("mousemove", function (e) {
                s.parallaxIt(e, l, n), elfInt.parallaxIt(e, d, n)
            })
        },
        elementHover: function (e, n, t) {
            e instanceof jQuery == !1 && (e = jQuery(e)), n instanceof jQuery == !1 && (n = jQuery(n)), n.on("mouseenter", function () {
                e.addClass(t)
            }).on("mouseleave", function () {
                e.removeClass(t)
            })
        },
        changeSizeText: function (e, n) {
            e instanceof jQuery == !1 && (e = jQuery(e)), e.each(function () {
                var e = jQuery(this);
                for (var t in n) e.text().length >= parseInt(t) && (console.log(n[t]), e.css(n[t]))
            })
        },
        convertToJQuery: function (e) {
            return e instanceof jQuery == !1 ? jQuery(e) : e
        },
        animateText: function (e, n, t, o) {
            function i() {
                n.each(function () {
                    let e = $(this);
                    if (e.hasClass(a)) return;
                    let n = e.offset().top;
                    void 0 !== n && s > n - (wind.height() - 100) && (e.hasClass(a) || e.addClass(a))
                })
            }(n = this.convertToJQuery(n)).each(function () {
                let e = $(this);
                elfInt.convertTextWord(e, e), void 0 !== t && e.attr(t, "animate"), void 0 !== o && e.removeClass(o), e.addClass("elf-has-anim-text")
            });
            const a = "elf-anim";
            var s = 0,
                r = null;
            e.getListener(function (e) {
                s = void 0 === e.offset ? wind.scrollTop() : 0, r && clearTimeout(r), r = setTimeout(i, 10)
            })
        },

        getBoundingClientRect: function (e) {
            const n = e.getBoundingClientRect();
            return {
                top: n.top,
                right: n.right,
                bottom: n.bottom,
                left: n.left,
                width: n.width,
                height: n.height,
                x: n.x,
                y: n.y
            }
        },

    };