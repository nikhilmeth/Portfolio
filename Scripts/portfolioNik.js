﻿jQuery(document).ready(function ($) {


    function n() {
        s($(".cd-headline.letters").find("b")), e($(".cd-headline"))
    }

    function s(n) {
        (window.location.href.indexOf("rle") || 0 != window.location.port.length) && n.each(function () {
            var n = $(this),
                s = n.text().split(""),
                e = n.hasClass("is-visible");
            for (i in s) n.parents(".rotate-2").length > 0 && (s[i] = "<em>" + s[i] + "</em>"), s[i] = e ? '<i class="in">' + s[i] + "</i>" : "<i>" + s[i] + "</i>";
            var t = s.join("");
            n.html(t).css("opacity", 1)
        })
    }

    function e(i) {
        var n = f;
        i.each(function () {
            var i = $(this);
            if (i.hasClass("loading-bar")) n = h, setTimeout(function () {
                i.find(".cd-words-wrapper").addClass("is-loading")
            }, u);
            else if (i.hasClass("clip")) {
                var s = i.find(".cd-words-wrapper"),
                    e = s.width() + 10;
                s.css("width", e)
            } else if (!i.hasClass("type")) {
                var a = i.find(".cd-words-wrapper b"),
                    o = 0;
                a.each(function () {
                    var i = $(this).width();
                    i > o && (o = i)
                }), i.find(".cd-words-wrapper").css("width", o)
            }
            setTimeout(function () {
                t(i.find(".is-visible").eq(0))
            }, n)
        })
    }

    function t(i) {
        var n = l(i);
        if (i.parents(".cd-headline").hasClass("type")) {
            var s = i.parent(".cd-words-wrapper");
            s.addClass("selected").removeClass("waiting"), setTimeout(function () {
                s.removeClass("selected"), i.removeClass("is-visible").addClass("is-hidden").children("i").removeClass("in").addClass("out")
            }, m), setTimeout(function () {
                a(n, w)
            }, v)
        } else if (i.parents(".cd-headline").hasClass("letters")) {
            var e = i.children("i").length >= n.children("i").length;
            o(i.find("i").eq(0), i, e, p), d(n.find("i").eq(0), n, e, p)
        } else i.parents(".cd-headline").hasClass("clip") ? i.parents(".cd-words-wrapper").animate({
            width: "2px"
        }, C, function () {
            c(i, n), a(n)
        }) : i.parents(".cd-headline").hasClass("loading-bar") ? (i.parents(".cd-words-wrapper").removeClass("is-loading"), c(i, n), setTimeout(function () {
            t(n)
        }, h), setTimeout(function () {
            i.parents(".cd-words-wrapper").addClass("is-loading")
        }, u)) : (c(i, n), setTimeout(function () {
            t(n)
        }, f))
    }

    function a(i, n) {
        i.parents(".cd-headline").hasClass("type") ? (d(i.find("i").eq(0), i, !1, n), i.addClass("is-visible").removeClass("is-hidden")) : i.parents(".cd-headline").hasClass("clip") && i.parents(".cd-words-wrapper").animate({
            width: i.width() + 10
        }, C, function () {
            setTimeout(function () {
                t(i)
            }, b)
        })
    }

    function o(i, n, s, e) {
        if (i.removeClass("in").addClass("out"), i.is(":last-child") ? s && setTimeout(function () {
            t(l(n))
        }, f) : setTimeout(function () {
            o(i.next(), n, s, e)
        }, e), i.is(":last-child") && $("html").hasClass("no-csstransitions")) {
            var a = l(n);
            c(n, a)
        }
    }

    function d(i, n, s, e) {
        i.addClass("in").removeClass("out"), i.is(":last-child") ? (n.parents(".cd-headline").hasClass("type") && setTimeout(function () {
            n.parents(".cd-words-wrapper").addClass("waiting")
        }, 200), s || setTimeout(function () {
            t(n)
        }, f)) : setTimeout(function () {
            d(i.next(), n, s, e)
        }, e)
    }

    function l(i) {
        return i.is(":last-child") ? i.parent().children().eq(0) : i.next()
    }

    function r(i) {
        return i.is(":first-child") ? i.parent().children().last() : i.prev()
    }

    function c(i, n) {
        i.removeClass("is-visible").addClass("is-hidden"), n.removeClass("is-hidden").addClass("is-visible")
    }
    var f = 2e3,
        h = 3e3,
        u = h - 3e3,
        p = 25,
        w = 75,
        m = 200,
        v = m + 100,
        C = 400,
        b = 1e3;
    n()
}), jQuery(document).ready(function ($) {
    function i(i) {
        var s = i.width() / 2,
            e = i.offset().left + s,
            t = i.offset().top + s - $(window).scrollTop(),
            a = n(t, e, s, $(window).height(), $(window).width());
        return i.css("position", "fixed").velocity({
            top: t - s,
            left: e - s,
            translateX: 0
        }, 0), a
    }

    function n(i, n, s, e, t) {
        var a = n > e / 2 ? n : e - n,
            o = i > t / 2 ? i : t - i;
        return Math.ceil(Math.sqrt(Math.pow(a, 2) + Math.pow(o, 2)) / s)
    }

    function s(i, n, s) {
        i.velocity({
            scale: n
        }, 400, function () {
            $("body").toggleClass("overflow-hidden", s), s ? i.parents(".cd-section").addClass("modal-is-visible").end().off("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend") : i.removeClass("is-visible").removeAttr("style").siblings('[data-type="modal-trigger"]').removeClass("to-circle")
        })
    }

    function e() {
        var i = $(".cd-section.modal-is-visible").find(".cd-modal-bg"),
            s = i.width() / 2,
            e = i.siblings(".btn").offset().top + s - $(window).scrollTop(),
            t = i.siblings(".btn").offset().left + s,
            a = n(e, t, s, $(window).height(), $(window).width());
        i.velocity({
            top: e - s,
            left: t - s,
            scale: a
        }, 0)
    }

    function t() {
        var i = $(".cd-section.modal-is-visible");
        i.removeClass("modal-is-visible").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function () {
            s(i.find(".cd-modal-bg"), 1, !1)
        }), i.parents(".no-csstransitions").length > 0 && s(i.find(".cd-modal-bg"), 1, !1)
    }
    $('[data-type="modal-trigger"]').on("click", function () {
        var n = $(this),
            e = i(n.next(".cd-modal-bg"));
        n.addClass("to-circle"), n.next(".cd-modal-bg").addClass("is-visible").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function () {
            s(n.next(".cd-modal-bg"), e, !0)
        }), n.parents(".no-csstransitions").length > 0 && s(n.next(".cd-modal-bg"), e, !0)
    }), $(".cd-section .cd-modal-close").on("click", function () {
        t()
    }), $(document).keyup(function (i) {
        "27" == i.which && t()
    }), $(window).on("resize", function () {
        $(".cd-section.modal-is-visible").length > 0 && window.requestAnimationFrame(e)
    })
}), $(function () {
    $(".page-scroll a").bind("click", function (i) {
        var n = $(this);
        $("html, body").stop().animate({
            scrollTop: $(n.attr("href")).offset().top
        }, 1500, "easeInOutExpo"), i.preventDefault()
    })
    });

window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
    document.getElementById("navIcon").style.display = "none";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("navIcon").style.display = "block";
}
