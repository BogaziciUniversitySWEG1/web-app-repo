(function() {
    var g = "",
        aa = "\x00",
        ba = "\n",
        k = " ",
        ca = ' name="',
        da = ' progid:DXImageTransform.Microsoft.Matrix(sizingMethod="auto expand", M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)',
        ea = ' progid:DXImageTransform.Microsoft.Matrix(sizingMethod="auto expand", M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678) alpha(opacity=50)',
        fa = ' type="',
        ga = " x ",
        ha = '"',
        ia = '"trebuchet ms",verdana,arial,sans-serif',
        ja = "#",
        ka = "#$1$1$2$2$3$3",
        la = "#000",
        ma = "#fff",
        na = "#gpluscomments",
        oa = "#uds-search-results",
        pa = "$1_m.$2",
        qa = "%",
        ra = "%$1",
        sa = "%2525",
        ta = "%s",
        ua = "&",
        va = "&#0;",
        wa = "&#39;",
        xa = "&#9660;&nbsp;",
        ya = "&#9668;&nbsp;",
        za = "&action=",
        Aa = "&amp;",
        Ba = "&apa=1",
        Ca = "&body=",
        Da = "&func=",
        Ea = "&gt;",
        Fa = "&it=",
        Ga = "&lt;",
        Ha = "&n=",
        Ia = "&nbsp;",
        Ja = "&npn=1",
        Ka = "&npnv=",
        La = "&p=s",
        Ma = "&quot;",
        Na = "&rt=",
        Pa = "&s=",
        Qa = "&sectionId=",
        Ra = "&srt=",
        Sa = "&t=",
        Ta = "&tbsrt=",
        Ua = "&times;",
        Va = "&tran=",
        Wa = "&u=",
        Xa = "&widgetId=",
        Ya = "&widgetType=",
        Za = "'",
        $a = "(",
        ab = "(\\d*)(\\D*)",
        bb = "(^",
        cb = ")",
        db = ")([a-z])",
        eb = "*",
        fb = ",",
        gb = ", ",
        hb = "-10000px",
        ib = "-140px",
        jb = "-225px",
        kb = "-h",
        lb = ".",
        mb = ".01",
        nb = ".5",
        ob = ".cmt_count_iframe_holder",
        pb = ".js",
        qb = ".wikipedia.org",
        rb = ".wikipedia.org/wiki/",
        sb = "/",
        tb = "//",
        ub = "//ajax.googleapis.com/ajax/services/feed/load",
        vb = "//csi.gstatic.com/csi",
        wb = "//www.blogger.com/img/widgets/icon_contactform_cross.gif",
        xb = "/rearrange?blogID=",
        yb = "/s$1/",
        zb = "/w/api.php",
        Ab = "/w/index.php",
        Bb = "0",
        Cb = "1",
        Db = "1.0",
        Eb = "10",
        Fb = "100%",
        Gb = "10px",
        Hb = "110px",
        Ib = "1em",
        Jb = "1px solid #aaa",
        Kb = "1px solid transparent",
        Lb = "20",
        Mb = "232px",
        Nb = "24px",
        Ob = "28px",
        Pb = "432px",
        Qb = "50% 0",
        Rb = "600px",
        Sb = "75px",
        Tb = ":",
        Ub = ": ",
        Vb = ";",
        Wb = "<",
        Xb = "</a>",
        Yb = "</a></div>",
        Zb = "<a href=",
        $b = '<a target="_blank" href=',
        ac = '<div id="wikipedia-search-result-link"><a target="_blank" href=',
        bc = "=",
        cc = ">",
        dc = "?",
        ec = "?t=",
        fc = "?v=3",
        gc = "?widgetId=",
        hc = "@",
        ic = "A",
        jc = "AdSense",
        kc = "An execution sequence may not be initiated with a blocking Deferred.",
        lc = "An object listener must have handleEvent method.",
        mc = "ArchiveList",
        nc = "ArchiveMenu",
        oc = "Assertion failed",
        pc =
        "BLOGGER",
        qc = "Blocking Deferreds can not be re-used",
        rc = "Blog",
        sc = "BlogArchive",
        tc = "BlogList",
        uc = "BloggerButton",
        vc = "CSS1Compat",
        wc = "Cannot throw an error that is not scheduled.",
        xc = "ContactForm",
        yc = "Content-Type",
        zc = "CustomSearch",
        Ac = "DIV",
        Bc = "Email",
        Cc = "Error loading backlinks: ",
        Dc = "Error loading feed.",
        Ec = "Error while loading script ",
        Fc = "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?",
        Gc = "Expected function but got %s: %s.",
        Hc = "Expected string but got %s: %s.",
        Ic = "Facebook",
        Jc = "Feed",
        Kc = "Followers",
        Lc = "FontName",
        Mc = "GET",
        Nc = "Gadget",
        Oc = "Google+",
        Pc = "HEAD",
        Qc = "HORIZONTAL-MEDIUM",
        Rc = "HORIZONTAL-SMALL",
        Sc = "HTML",
        Tc = "IFRAME",
        Uc = "IMG",
        Vc = "Image",
        Wc = "Jsloader error (code #",
        Xc = "LI",
        Yc = "LINK",
        Zc = "Label",
        $c = "LinkList",
        ad = "Listener can not be null.",
        bd = "Loading...",
        cd = "MSIE",
        dd = "MSXML2.XMLHTTP",
        ed = "MSXML2.XMLHTTP.3.0",
        fd = "MSXML2.XMLHTTP.6.0",
        gd = "Microsoft.XMLHTTP",
        hd = "Moz",
        id = "NaN",
        jd = "Navbar",
        kd = "NewsBar",
        ld = "Node cannot be null or undefined.",
        md = "O",
        nd = "POST",
        od = "PageList",
        pd = "Poll",
        qd = "PopularPosts",
        rd = "Presto",
        sd = "Preview",
        td = "Profile",
        ud = "Promise cannot resolve to itself",
        vd = "RecentPosts",
        wd = "SCRIPT",
        xd = "SPAN",
        yd = "SW_READER_LIST_",
        zd = "SW_READER_LIST_CLOSED_",
        Ad = "Search",
        Bd = "Share this post",
        Cd = "Slideshow",
        Dd = "Special:Search",
        Ed = "Stats",
        Fd = "Subscribe",
        Gd = "Text",
        Hd = "TextList",
        Id = "Timeout reached for loading script ",
        Jd = "Trident",
        Kd = "Twitter",
        Ld = "UL",
        Md = "UTF-8",
        Nd = "VERTICAL",
        Od = "VideoBar",
        Pd = "Webkit",
        Qd = "X",
        Rd = "[object Array]",
        Sd = "[object Function]",
        Td =
        "[object Window]",
        Ud = "\\$1",
        Vd = "\\s",
        Wd = "\\x08",
        Xd = "]",
        Yd = "]+",
        Zd = "_",
        $d = "_OnWidgetConfigured",
        ae = "_OnWidgetDeleted",
        be = "__gjsload__",
        ce = "_blank",
        de = "_callbacks_.",
        ee = "_id_",
        fe = "_self",
        ge = "a",
        he = "abort",
        ie = "absolute",
        je = "action",
        ke = "action=",
        le = "addnew",
        me = "alpha(opacity=1)",
        ne = "animate",
        oe = "application/x-www-form-urlencoded;charset=utf-8",
        pe = "archivedate",
        qe = "aria-",
        re = "array",
        se = "av-delay-tempId-",
        te = "backlink-control",
        ue = "backlink-toggle-zippy",
        ve = "backlinks",
        we = "backlinks-container",
        xe = "backlinks-create-link",
        ye = "bar",
        ze = "beforeunload",
        Ae = "blind-plate",
        Be = "block",
        Ce = "blog.canonicalUrl",
        De = "blog.locale",
        Ee = "blog.pageTitle",
        Fe = "blog.sf",
        Ge = "blog.tf",
        He = "blog.url",
        Ie = "blogID=",
        Je = "blogger",
        Ke = "blogger-clickTrap singleton-element",
        Le = "bloggerForm",
        Me = "blogger_active_experiements",
        Ne = "blogger_csi_e",
        Oe = "blogger_templates_experiment_id",
        Pe = "blogs",
        Qe = "blogspot",
        Re = "body",
        Se = "call",
        Te = "callImmediate",
        Ue = "callback",
        Ve = "center",
        We = "checkbox",
        Xe = "chooseWidget",
        Ye = "class",
        Ze = "click",
        $e = "cmt_count_iframe_holder",
        af = "cmt_iframe_holder",
        bf = "collapsed",
        cf = "collapsed-backlink",
        df = "collapsible",
        ef = "color",
        ff = "columns-cell",
        gf = "comment-editor",
        hf = "comment-editor-toggle-link",
        jf = "comment-form",
        kf = "complete",
        lf = "config",
        mf = "configure",
        nf = "contact-form-button contact-form-button-submit",
        of = "contact-form-button contact-form-button-submit disabled",
        pf = "contact-form-cross",
        qf = "contact-form-email",
        rf = "contact-form-email-message",
        l = "contact-form-error-message",
        sf = "contact-form-error-message-with-border",
        tf = "contact-form-name",
        uf = "contact-form-submit",
        n = "contact-form-success-message",
        vf = "contact-form-success-message-with-border",
        wf = "content",
        xf = "content-type",
        yf = "cse_blog.xml",
        zf = "cse_links.xml",
        Af = "cse_web.xml",
        Bf = "data-",
        Cf = "data-count",
        Df = "data-height",
        Ef = "data-lateloadsrc",
        Ff = "data-post-url",
        Gf = "data-url",
        Hf = "data-viewurl",
        If = "default",
        Jf = "delayLoad",
        Kf = "delete",
        Lf = "digit stage-0",
        Mf = "disabled",
        Nf = "display",
        Of = "display:none;",
        Pf = "displayModeFull",
        Qf = "displayModeLayout",
        Rf = "displayModeNone",
        Sf = "displayModeSnippet",
        p =
        "div",
        Tf = "dropdown-toggle",
        Uf = "edit-link",
        Vf = "editlink",
        Wf = "email=",
        Xf = "en",
        Yf = "error",
        Zf = "error-details",
        $f = "errorbox-bad errormsg",
        ag = "errorbox-good",
        bg = "errormessage_",
        cg = "event",
        dg = "expanded",
        eg = "expanded-backlink",
        fg = "expression(this.parentNode.clientHeight)",
        gg = "fakeId",
        hg = "feedItemListDisplay",
        ig = "feeds",
        jg = "file",
        kg = "file:",
        lg = "follower-link",
        mg = "follower-thumbnail",
        ng = "followers-grid",
        og = "followers-next-link",
        pg = "fontFamily",
        qg = "fontSize",
        rg = "for",
        sg = "form",
        tg = "format",
        ug = "fulltext",
        r = "function",
        vg = "g",
        wg = "getFacepile",
        xg = "getTitles",
        yg = "goog.dom.setTextContent expects a non-null value for node",
        zg = "google_blogger_adsense_experiment_id",
        Ag = "gsc-clear-button",
        Bg = "height: ",
        Cg = "height=600, width=640, toolbar=no, menubar=no, scrollbars=yes, resizable=yes, location=no, directories=no, status=no",
        Dg = "hex",
        Eg = "hidden",
        Fg = "href",
        Gg = "http",
        Hg = "http:",
        Ig = "http://",
        Jg = "http://api.flickr.com",
        Kg = "http://csi.gstatic.com/csi",
        Lg = "http://search.yahoo.com/mrss/",
        Mg = "https",
        Ng = "https:",
        Og = "https://",
        Pg =
        "https://csi.gstatic.com/csi",
        Qg = "https://m.facebook.com/sharer.php?u=",
        Rg = "https://mobile.twitter.com/home?status=",
        Sg = "https://plus.google.com/share?source=blogger:mobile:share&url=",
        Tg = "id",
        Ug = "iframe",
        Vg = "img",
        Wg = "infinite loop",
        Xg = "inline",
        Yg = "innerText",
        Zg = "item-author",
        $g = "item-date",
        ah = "item-title",
        bh = "javascript:void(0)",
        ch = "javascript:void(0);",
        dh = "json",
        eh = "layout-title",
        fh = "left",
        gh = "li",
        hh = "lightbox",
        ih = "load",
        jh = "loaded",
        kh = "m",
        lh = "mailto:?subject=",
        mh = "main",
        nh = "max-height: ",
        oh = "max-height: 0;",
        ph = "max-height: none;",
        qh = "menu",
        rh = "message",
        sh = "message=",
        th = "mobile-share-button",
        uh = "mobile-share-panel-button mobile-share-panel-button-",
        vh = "mobile-share-panel-button-close",
        wh = "mobile-share-panel-inner",
        xh = "mobile-share-panel-outer",
        yh = "mobile-share-panel-title",
        zh = "ms",
        Ah = "n",
        Bh = "name=",
        Ch = "named",
        Dh = "native code",
        Eh = "next-page-link",
        Fh = "no type",
        Gh = "no widget for ",
        t = "none",
        Hh = "null",
        Ih = "number",
        Jh = "o",
        Kh = "object",
        Lh = "ol",
        Mh = "on",
        Nh = "onbeforeunload",
        Oh = "onload",
        Ph = "onreadystatechange",
        Qh =
        "open",
        Rh = "opensearch",
        Sh = "opt_onFulfilled should be a function.",
        Th = "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?",
        Uh = "parentNode",
        Vh = "poll-widget",
        Wh = "position:absolute;;width:230px;height:200px;",
        Xh = "position:absolute;width:100%;left:0;top:0;height:100%;z-index:100;",
        Yh = "post",
        Zh = "post-body",
        $h = "post-count",
        ai = "post-count-link",
        bi = "posts",
        ci = "prerender",
        di = "profile",
        ei = "prt",
        fi = "px",
        gi = "px;",
        hi = "px; left: ",
        ii = "px; top: ",
        ji = "px; width: ",
        ki = "ready",
        li = "readystatechange",
        mi = "resize",
        ni = "responseType=js",
        oi = "rgb",
        pi = "ripple",
        qi = "rotate(-45deg)",
        ri = "rtl",
        si = "scroll",
        ti = "scrollbars=no,width=475,height=300,top=175,left=75,status=yes,resizable=yes",
        ui = "search",
        vi = "section",
        wi = "sectionId",
        xi = "select",
        yi = "show-all",
        zi = "show-n",
        Ai = "singleton-element",
        Bi = "slideshow",
        Ci = "span",
        Di = "sparkline",
        Ei = "splash",
        Fi = "splash-wrapper",
        Gi = "splice",
        Hi = "src",
        Ii = "stage-",
        Ji = "start",
        Ki = "status-message",
        Li = "status-message-inner",
        Mi = "string",
        Ni = "strong",
        Oi = "style",
        Pi = "stylesheet",
        Qi = "submit",
        Ri = "success",
        Si = "text-top",
        Ti = "text/css",
        Ui = "text/javascript",
        Vi = "textContent",
        Wi = "thumbnail",
        Xi = "tick",
        Yi = "timeout",
        Zi = "title",
        $i = "toggle",
        aj = "toggle-open",
        bj = "top",
        cj = "totalCount",
        dj = "uds-search-results",
        ej = "uds-searchClearResults",
        fj = "uds-searchControl",
        gj = "uds-searchResults",
        hj = "ul",
        ij = "url",
        jj = "var ",
        kj = "videoBar-container",
        lj = "visibility:hidden;position:absolute;line-height:0;padding:0;margin:0;border:0;height:1em;",
        mj = "visible",
        nj = "webkitvisibilitychange",
        oj = "white",
        pj = "widget Subscribe",
        qj = "widget-content",
        rj = "widget-wrap1",
        sj = "widget-wrap2",
        tj = "widget-wrap3",
        uj = "widgetId=",
        vj = "widgetJsEnd",
        wj = "widgetType",
        xj = "widgetType=",
        yj = "width=570,height=600,left=75,top=20,resizable=yes,scrollbars=yes",
        zj = "wikipedia-search-form",
        Aj = "wikipedia-search-input",
        Bj = "wikipedia-search-more",
        Cj = "wikipedia-search-results",
        Dj = "wikipedia-search-results-header",
        Ej = "window",
        Fj = "withCredentials",
        Gj = "zippy",
        Hj = "|[",
        Ij = "\u00a0-\u00a0";

    function Jj(a) {
        return function() {
            return this[a]
        }
    }
    var u;
    window.jstiming && window.jstiming.load.tick("widgetJsStart");

    function Kj() {
        window.jstiming.load.tick(Lh)
    }

    function Lj(a, b) {
        a.addEventListener ? a.addEventListener(ih, b, !1) : a.attachEvent(Oh, b)
    }

    function Mj(a, b) {
        return a.className && -1 != a.className.indexOf(b) ? a : a.parentNode ? Mj(a.parentNode, b) : null
    }

    function Nj() {
        window.jstiming.load.tick(ei);
        window.tickAboveFold && window.tickAboveFold(this)
    }
    window.BLOG_attachCsiOnload = function(a, b) {
        if (window.jstiming) {
            window.jstiming.load.tick(vj);
            window.jstiming.load.tick(ei);
            window.jstiming.load.name = a + Qe;
            for (var c = document.getElementsByTagName(Vg), d = 0; d < c.length; d++) c[d].complete ? null != Mj(c[d], Yh) && Nj.apply(c[d]) : null != Mj(c[d], Yh) && Lj(c[d], Nj);
            Lj(window, Kj);
            c = function() {
                for (var a = {}, c = window.blogger_blog_id, d = [zg, Ne, Oe, Me], m = [], q = d.length, w = 0; w < q; w++) {
                    var D = d[w];
                    D in window && m.push(window[D])
                }
                c && (a.blogId = c);
                0 < m.length && (a.e = m.join(fb));
                c = (document.location.protocol ==
                    Ng ? Ng : Hg) + vb;
                c = b || c;
                window.jstiming.report(window.jstiming.load, a, c)
            };
            window.addEventListener ? window.addEventListener(ze, c, !1) : window.attachEvent(Nh, c)
        }
    };
    var Oj = Oj || {},
        v = this;

    function x(a) {
        return void 0 !== a
    }

    function Pj() {}

    function Qj(a) {
        a.Y = function() {
            return a.Pa ? a.Pa : a.Pa = new a
        }
    }

    function Rj(a) {
        var b = typeof a;
        if (b == Kh)
            if (a) {
                if (a instanceof Array) return re;
                if (a instanceof Object) return b;
                var c = Object.prototype.toString.call(a);
                if (c == Td) return Kh;
                if (c == Rd || typeof a.length == Ih && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable(Gi)) return re;
                if (c == Sd || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable(Se)) return r
            } else return Hh;
        else if (b == r && "undefined" == typeof a.call) return Kh;
        return b
    }

    function y(a) {
        return Rj(a) == re
    }

    function Sj(a) {
        var b = Rj(a);
        return b == re || b == Kh && typeof a.length == Ih
    }

    function z(a) {
        return typeof a == Mi
    }

    function Tj(a) {
        return Rj(a) == r
    }

    function Uj(a) {
        var b = typeof a;
        return b == Kh && null != a || b == r
    }
    var Vj = "closure_uid_" + (1E9 * Math.random() >>> 0),
        Wj = 0;

    function Xj(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function Yj(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function A(a, b, c) {
        A = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf(Dh) ? Xj : Yj;
        return A.apply(null, arguments)
    }

    function Zj(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var b = c.slice();
            b.push.apply(b, arguments);
            return a.apply(this, b)
        }
    }
    var ak = Date.now || function() {
        return +new Date
    };

    function B(a, b) {
        var c = a.split(lb),
            d = v;
        c[0] in d || !d.execScript || d.execScript(jj + c[0]);
        for (var e; c.length && (e = c.shift());) !c.length && x(b) ? d[e] = b : d[e] ? d = d[e] : d = d[e] = {}
    }

    function C(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.u = b.prototype;
        a.prototype = new c;
        a.ac = function(a, c, f) {
            for (var h = Array(arguments.length - 2), m = 2; m < arguments.length; m++) h[m - 2] = arguments[m];
            return b.prototype[c].apply(a, h)
        }
    };

    function E(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, E);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    }
    C(E, Error);
    E.prototype.name = "CustomError";
    var bk;

    function ck(a, b) {
        for (var c = a.split(ta), d = g, e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;) d += c.shift() + e.shift();
        return d + c.join(ta)
    }
    var dk = String.prototype.trim ? function(a) {
        return a.trim()
    } : function(a) {
        return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, g)
    };

    function ek(a) {
        if (!fk.test(a)) return a; - 1 != a.indexOf(ua) && (a = a.replace(gk, Aa)); - 1 != a.indexOf(Wb) && (a = a.replace(hk, Ga)); - 1 != a.indexOf(cc) && (a = a.replace(ik, Ea)); - 1 != a.indexOf(ha) && (a = a.replace(jk, Ma)); - 1 != a.indexOf(Za) && (a = a.replace(kk, wa)); - 1 != a.indexOf(aa) && (a = a.replace(lk, va));
        return a
    }
    var gk = /&/g,
        hk = /</g,
        ik = />/g,
        jk = /"/g,
        kk = /'/g,
        lk = /\x00/g,
        fk = /[\x00&<>"']/;

    function mk(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    }

    function nk(a) {
        return String(a).replace(/\-([a-z])/g, function(a, c) {
            return c.toUpperCase()
        })
    }

    function ok(a) {
        var b = z(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, Ud).replace(/\x08/g, Wd) : Vd;
        return a.replace(new RegExp(bb + (b ? Hj + b + Yd : g) + db, vg), function(a, b, e) {
            return b + e.toUpperCase()
        })
    };

    function pk(a, b) {
        b.unshift(a);
        E.call(this, ck.apply(null, b));
        b.shift()
    }
    C(pk, E);
    pk.prototype.name = "AssertionError";

    function qk(a, b, c, d) {
        var e = oc;
        if (c) var e = e + (Ub + c),
            f = d;
        else a && (e += Ub + a, f = b);
        throw new pk(g + e, f || []);
    }

    function F(a, b, c) {
        a || qk(g, null, b, Array.prototype.slice.call(arguments, 2))
    }

    function rk(a, b, c) {
        z(a) || qk(Hc, [Rj(a), a], b, Array.prototype.slice.call(arguments, 2))
    }

    function sk(a, b, c) {
        Tj(a) || qk(Gc, [Rj(a), a], b, Array.prototype.slice.call(arguments, 2))
    };
    var tk = Array.prototype.indexOf ? function(a, b, c) {
            F(null != a.length);
            return Array.prototype.indexOf.call(a, b, c)
        } : function(a, b, c) {
            c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
            if (z(a)) return z(b) && 1 == b.length ? a.indexOf(b, c) : -1;
            for (; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        uk = Array.prototype.forEach ? function(a, b, c) {
            F(null != a.length);
            Array.prototype.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = z(a) ? a.split(g) : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        },
        vk = Array.prototype.filter ? function(a,
            b, c) {
            F(null != a.length);
            return Array.prototype.filter.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = [], f = 0, h = z(a) ? a.split(g) : a, m = 0; m < d; m++)
                if (m in h) {
                    var q = h[m];
                    b.call(c, q, m, a) && (e[f++] = q)
                }
            return e
        },
        wk = Array.prototype.some ? function(a, b, c) {
            F(null != a.length);
            return Array.prototype.some.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = z(a) ? a.split(g) : a, f = 0; f < d; f++)
                if (f in e && b.call(c, e[f], f, a)) return !0;
            return !1
        };

    function xk(a) {
        var b;
        a: {
            b = yk;
            for (var c = a.length, d = z(a) ? a.split(g) : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : z(a) ? a.charAt(b) : a[b]
    }

    function G(a, b) {
        return 0 <= tk(a, b)
    }

    function zk(a) {
        if (!y(a))
            for (var b = a.length - 1; 0 <= b; b--) delete a[b];
        a.length = 0
    }

    function Ak(a, b) {
        var c = tk(a, b),
            d;
        if (d = 0 <= c) F(null != a.length), Array.prototype.splice.call(a, c, 1);
        return d
    }

    function Bk(a) {
        return Array.prototype.concat.apply(Array.prototype, arguments)
    }

    function Ck(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function Dk(a, b, c, d) {
        F(null != a.length);
        Array.prototype.splice.apply(a, Ek(arguments, 1))
    }

    function Ek(a, b, c) {
        F(null != a.length);
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    }

    function Fk(a) {
        if (!arguments.length) return [];
        for (var b = [], c = arguments[0].length, d = 1; d < arguments.length; d++) arguments[d].length < c && (c = arguments[d].length);
        for (d = 0; d < c; d++) {
            for (var e = [], f = 0; f < arguments.length; f++) e.push(arguments[f][d]);
            b.push(e)
        }
        return b
    };

    function Gk(a) {
        a = a.className;
        return z(a) && a.match(/\S+/g) || []
    }

    function Hk(a, b) {
        var c = Gk(a),
            d = Ek(arguments, 1);
        Ik(c, d);
        a.className = c.join(k)
    }

    function Jk(a, b) {
        var c = Gk(a),
            d = Ek(arguments, 1),
            c = Kk(c, d);
        a.className = c.join(k)
    }

    function Ik(a, b) {
        for (var c = 0; c < b.length; c++) G(a, b[c]) || a.push(b[c])
    }

    function Kk(a, b) {
        return vk(a, function(a) {
            return !G(b, a)
        })
    }

    function Lk(a, b, c) {
        for (var d = Gk(a), e = !1, f = 0; f < d.length; f++) d[f] == b && (Dk(d, f--, 1), e = !0);
        e && (d.push(c), a.className = d.join(k))
    }

    function H(a, b) {
        return G(Gk(a), b)
    };

    function Mk() {
        return function(a) {
            return 500 <= Nk(a) ? (a.responseText.length ? document.body.innerHTML = a.responseText : window.alert(LayoutsMessages.SERVER_ERROR), !1) : !0
        }
    };

    function Ok(a, b) {
        var c = J,
            d = a.ownerDocument,
            e = Pk(d, a, p, rj),
            e = Pk(d, e, p, sj),
            e = Pk(d, e, p, tj),
            f = Pk(d, e, p, qj),
            h = Pk(d, f, p, eh),
            e = b._GetHelper(),
            m = e._GetData();
        h.appendChild(d.createTextNode(m[eh]));
        var f = Pk(d, f, ge, Vf),
            q = e._GenerateWidgetMetadata();
        f.setAttribute(Fg, q.quickEditUrl);
        f.target = Xe;
        f.onclick = function() {
            return c._PopupConfig(d.getElementById(q.instanceId))
        };
        f.appendChild(d.createTextNode(m[Uf]))
    }

    function Pk(a, b, c, d) {
        a = a.createElement(c);
        a.className = d;
        b.appendChild(a);
        return a
    };

    function Qk(a, b, c) {
        for (var d in a) b.call(c, a[d], d, a)
    }

    function Rk(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    }

    function Sk(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = d;
        return b
    }

    function Tk(a) {
        return null !== a && Fj in a
    }
    var Uk = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function Vk(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < Uk.length; f++) c = Uk[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };

    function Wk(a, b) {
        this.x = x(a) ? a : 0;
        this.y = x(b) ? b : 0
    }
    Wk.prototype.clone = function() {
        return new Wk(this.x, this.y)
    };
    Wk.prototype.toString = function() {
        return $a + this.x + gb + this.y + cb
    };
    Wk.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    Wk.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };

    function Xk(a, b) {
        this.width = a;
        this.height = b
    }
    u = Xk.prototype;
    u.clone = function() {
        return new Xk(this.width, this.height)
    };
    u.toString = function() {
        return $a + this.width + ga + this.height + cb
    };
    u.ub = function() {
        return this.width * this.height
    };
    u.O = function() {
        return !this.ub()
    };
    u.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    u.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var Yk;
    a: {
        var Zk = v.navigator;
        if (Zk) {
            var $k = Zk.userAgent;
            if ($k) {
                Yk = $k;
                break a
            }
        }
        Yk = g
    }

    function K(a) {
        return -1 != Yk.indexOf(a)
    };
    var al = K("Opera") || K("OPR"),
        L = K(Jd) || K(cd),
        bl = K("Edge"),
        cl = K("Gecko") && !(-1 != Yk.toLowerCase().indexOf("webkit") && !K("Edge")) && !(K(Jd) || K(cd)) && !K("Edge"),
        dl = -1 != Yk.toLowerCase().indexOf("webkit") && !K("Edge");

    function el() {
        var a = Yk;
        if (cl) return /rv\:([^\);]+)(\)|;)/.exec(a);
        if (bl) return /Edge\/([\d\.]+)/.exec(a);
        if (L) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (dl) return /WebKit\/(\S+)/.exec(a)
    }

    function fl() {
        var a = v.document;
        return a ? a.documentMode : void 0
    }
    var gl = function() {
            if (al && v.opera) {
                var a;
                var b = v.opera.version;
                try {
                    a = b()
                } catch (c) {
                    a = b
                }
                return a
            }
            a = g;
            (b = el()) && (a = b ? b[1] : g);
            return L && (b = fl(), b > parseFloat(a)) ? String(b) : a
        }(),
        hl = {};

    function M(a) {
        var b;
        if (!(b = hl[a])) {
            b = 0;
            for (var c = dk(String(gl)).split(lb), d = dk(String(a)).split(lb), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                var h = c[f] || g,
                    m = d[f] || g,
                    q = RegExp(ab, vg),
                    w = RegExp(ab, vg);
                do {
                    var D = q.exec(h) || [g, g, g],
                        I = w.exec(m) || [g, g, g];
                    if (0 == D[0].length && 0 == I[0].length) break;
                    b = mk(0 == D[1].length ? 0 : parseInt(D[1], 10), 0 == I[1].length ? 0 : parseInt(I[1], 10)) || mk(0 == D[2].length, 0 == I[2].length) || mk(D[2], I[2])
                } while (0 == b)
            }
            b = hl[a] = 0 <= b
        }
        return b
    }
    var il = v.document,
        jl = il && L ? fl() || (il.compatMode == vc ? parseInt(gl, 10) : 5) : void 0;
    var kl = !L || 9 <= jl;
    !cl && !L || L && 9 <= jl || cl && M("1.9.1");
    var ll = L && !M("9");

    function N(a) {
        return z(a) ? document.getElementById(a) : a
    }

    function ml(a) {
        var b = a || document;
        return b.querySelectorAll && b.querySelector ? b.querySelectorAll(ob) : O(eb, $e, a)
    }

    function P(a, b) {
        var c = b || document,
            d = null;
        c.getElementsByClassName ? d = c.getElementsByClassName(a)[0] : c.querySelectorAll && c.querySelector ? d = c.querySelector(lb + a) : d = O(eb, a, b)[0];
        return d || null
    }

    function O(a, b, c) {
        var d = document;
        c = c || d;
        a = a && a != eb ? a.toUpperCase() : g;
        if (c.querySelectorAll && c.querySelector && (a || b)) return c.querySelectorAll(a + (b ? lb + b : g));
        if (b && c.getElementsByClassName) {
            c = c.getElementsByClassName(b);
            if (a) {
                for (var d = {}, e = 0, f = 0, h; h = c[f]; f++) a == h.nodeName && (d[e++] = h);
                d.length = e;
                return d
            }
            return c
        }
        c = c.getElementsByTagName(a || eb);
        if (b) {
            d = {};
            for (f = e = 0; h = c[f]; f++) a = h.className, typeof a.split == r && G(a.split(/\s+/), b) && (d[e++] = h);
            d.length = e;
            return d
        }
        return c
    }

    function nl(a, b) {
        Qk(b, function(b, d) {
            d == Oi ? a.style.cssText = b : d == Ye ? a.className = b : d == rg ? a.htmlFor = b : ol.hasOwnProperty(d) ? a.setAttribute(ol[d], b) : 0 == d.lastIndexOf(qe, 0) || 0 == d.lastIndexOf(Bf, 0) ? a.setAttribute(d, b) : a[d] = b
        })
    }
    var ol = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };

    function Q(a, b, c) {
        return pl(document, arguments)
    }

    function pl(a, b) {
        var c = b[0],
            d = b[1];
        if (!kl && d && (d.name || d.type)) {
            c = [Wb, c];
            d.name && c.push(ca, ek(d.name), ha);
            if (d.type) {
                c.push(fa, ek(d.type), ha);
                var e = {};
                Vk(e, d);
                delete e.type;
                d = e
            }
            c.push(cc);
            c = c.join(g)
        }
        c = a.createElement(c);
        d && (z(d) ? c.className = d : y(d) ? c.className = d.join(k) : nl(c, d));
        2 < b.length && ql(a, c, b);
        return c
    }

    function ql(a, b, c) {
        function d(c) {
            c && b.appendChild(z(c) ? a.createTextNode(c) : c)
        }
        for (var e = 2; e < c.length; e++) {
            var f = c[e];
            !Sj(f) || Uj(f) && 0 < f.nodeType ? d(f) : uk(rl(f) ? Ck(f) : f, d)
        }
    }

    function sl(a) {
        for (var b; b = a.firstChild;) a.removeChild(b)
    }

    function tl(a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    }

    function ul(a, b) {
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || Boolean(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    }

    function vl(a) {
        F(a, ld);
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }

    function wl(a, b) {
        F(null != a, yg);
        if (Vi in a) a.textContent = b;
        else if (3 == a.nodeType) a.data = b;
        else if (a.firstChild && 3 == a.firstChild.nodeType) {
            for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
            a.firstChild.data = b
        } else {
            sl(a);
            var c = vl(a);
            a.appendChild(c.createTextNode(String(b)))
        }
    }
    var xl = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1
        },
        yl = {
            IMG: k,
            BR: ba
        };

    function zl(a, b, c) {
        if (!(a.nodeName in xl))
            if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, g)) : b.push(a.nodeValue);
            else if (a.nodeName in yl) b.push(yl[a.nodeName]);
        else
            for (a = a.firstChild; a;) zl(a, b, c), a = a.nextSibling
    }

    function rl(a) {
        if (a && typeof a.length == Ih) {
            if (Uj(a)) return typeof a.item == r || typeof a.item == Mi;
            if (Tj(a)) return typeof a.item == r
        }
        return !1
    }

    function Al(a, b, c) {
        if (!b && !c) return null;
        var d = b ? b.toUpperCase() : null;
        return Bl(a, function(a) {
            return (!d || a.nodeName == d) && (!c || z(a.className) && G(a.className.split(/\s+/), c))
        })
    }

    function Bl(a, b) {
        for (var c = 0; a;) {
            F(a.name != Uh);
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return null
    }

    function Cl(a) {
        this.b = a || v.document || document
    }
    Cl.prototype.ba = function(a) {
        return z(a) ? this.b.getElementById(a) : a
    };
    Cl.prototype.a = function(a, b, c) {
        return pl(this.b, arguments)
    };
    Cl.prototype.appendChild = function(a, b) {
        a.appendChild(b)
    };
    Cl.prototype.contains = ul;

    function Dl(a) {
        Dl[k](a);
        return a
    }
    Dl[k] = Pj;
    var El = !L || 9 <= jl,
        Fl = L && !M("9");
    !dl || M("528");
    cl && M("1.9b") || L && M("8") || al && M("9.5") || dl && M("528");
    cl && !M("8") || L && M("9");

    function Gl() {
        this.i = this.i;
        this.J = this.J
    }
    Gl.prototype.i = !1;
    Gl.prototype.U = function() {
        this.i || (this.i = !0, this.A())
    };
    Gl.prototype.A = function() {
        if (this.J)
            for (; this.J.length;) this.J.shift()()
    };

    function Hl(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.a = !1;
        this.Ra = !0
    }
    Hl.prototype.stopPropagation = function() {
        this.a = !0
    };
    Hl.prototype.preventDefault = function() {
        this.Ra = !1
    };

    function Il(a, b) {
        Hl.call(this, a ? a.type : g);
        this.currentTarget = this.target = null;
        this.clientY = this.clientX = 0;
        this.i = this.h = this.c = this.g = !1;
        this.b = null;
        if (a) {
            this.type = a.type;
            var c = a.changedTouches ? a.changedTouches[0] : null;
            this.target = a.target || a.srcElement;
            this.currentTarget = b;
            var d = a.relatedTarget;
            if (d && cl) try {
                Dl(d.nodeName)
            } catch (e) {}
            null === c ? (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY) : (this.clientX = void 0 !== c.clientX ? c.clientX : c.pageX, this.clientY =
                void 0 !== c.clientY ? c.clientY : c.pageY);
            this.g = a.ctrlKey;
            this.c = a.altKey;
            this.h = a.shiftKey;
            this.i = a.metaKey;
            this.b = a;
            a.defaultPrevented && this.preventDefault()
        }
    }
    C(Il, Hl);
    Il.prototype.stopPropagation = function() {
        Il.u.stopPropagation.call(this);
        this.b.stopPropagation ? this.b.stopPropagation() : this.b.cancelBubble = !0
    };
    Il.prototype.preventDefault = function() {
        Il.u.preventDefault.call(this);
        var a = this.b;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, Fl) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {}
    };
    var Jl = "closure_listenable_" + (1E6 * Math.random() | 0);

    function Kl(a) {
        return !(!a || !a[Jl])
    }
    var Ll = 0;

    function Ml(a, b, c, d, e) {
        this.listener = a;
        this.a = null;
        this.src = b;
        this.type = c;
        this.na = !!d;
        this.qa = e;
        this.key = ++Ll;
        this.Z = this.ma = !1
    }

    function Nl(a) {
        a.Z = !0;
        a.listener = null;
        a.a = null;
        a.src = null;
        a.qa = null
    };

    function Ol(a) {
        this.src = a;
        this.a = {};
        this.b = 0
    }

    function Pl(a, b, c, d, e, f) {
        var h = b.toString();
        b = a.a[h];
        b || (b = a.a[h] = [], a.b++);
        var m = Ql(b, c, e, f); - 1 < m ? (a = b[m], d || (a.ma = !1)) : (a = new Ml(c, a.src, h, !!e, f), a.ma = d, b.push(a));
        return a
    }

    function Rl(a, b) {
        var c = b.type;
        if (!(c in a.a)) return !1;
        var d = Ak(a.a[c], b);
        d && (Nl(b), 0 == a.a[c].length && (delete a.a[c], a.b--));
        return d
    }

    function Sl(a) {
        var b = 0,
            c;
        for (c in a.a) {
            for (var d = a.a[c], e = 0; e < d.length; e++) ++b, Nl(d[e]);
            delete a.a[c];
            a.b--
        }
    }

    function Tl(a, b, c, d, e) {
        a = a.a[b.toString()];
        b = -1;
        a && (b = Ql(a, c, d, e));
        return -1 < b ? a[b] : null
    }

    function Ql(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.Z && f.listener == b && f.na == !!c && f.qa == d) return e
        }
        return -1
    };
    var Ul = "closure_lm_" + (1E6 * Math.random() | 0),
        Vl = {},
        Wl = 0;

    function R(a, b, c, d, e) {
        if (y(b)) {
            for (var f = 0; f < b.length; f++) R(a, b[f], c, d, e);
            return null
        }
        c = Xl(c);
        return Kl(a) ? a.S(b, c, d, e) : Yl(a, b, c, !1, d, e)
    }

    function Yl(a, b, c, d, e, f) {
        if (!b) throw Error("Invalid event type");
        var h = !!e,
            m = Zl(a);
        m || (a[Ul] = m = new Ol(a));
        c = Pl(m, b, c, d, e, f);
        if (c.a) return c;
        d = $l();
        c.a = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener) a.addEventListener(b.toString(), d, h);
        else if (a.attachEvent) a.attachEvent(am(b.toString()), d);
        else throw Error("addEventListener and attachEvent are unavailable.");
        Wl++;
        return c
    }

    function $l() {
        var a = bm,
            b = El ? function(c) {
                return a.call(b.src, b.listener, c)
            } : function(c) {
                c = a.call(b.src, b.listener, c);
                if (!c) return c
            };
        return b
    }

    function cm(a, b, c, d, e) {
        if (y(b))
            for (var f = 0; f < b.length; f++) cm(a, b[f], c, d, e);
        else c = Xl(c), Kl(a) ? Pl(a.G, String(b), c, !0, d, e) : Yl(a, b, c, !0, d, e)
    }

    function dm(a, b, c, d, e) {
        if (y(b))
            for (var f = 0; f < b.length; f++) dm(a, b[f], c, d, e);
        else c = Xl(c), Kl(a) ? a.da(b, c, d, e) : a && (a = Zl(a)) && (b = Tl(a, b, c, !!d, e)) && em(b)
    }

    function em(a) {
        if (typeof a == Ih || !a || a.Z) return !1;
        var b = a.src;
        if (Kl(b)) return Rl(b.G, a);
        var c = a.type,
            d = a.a;
        b.removeEventListener ? b.removeEventListener(c, d, a.na) : b.detachEvent && b.detachEvent(am(c), d);
        Wl--;
        (c = Zl(b)) ? (Rl(c, a), 0 == c.b && (c.src = null, b[Ul] = null)) : Nl(a);
        return !0
    }

    function fm(a) {
        if (a)
            if (Kl(a)) a.G && Sl(a.G);
            else if (a = Zl(a)) {
            var b = 0,
                c;
            for (c in a.a)
                for (var d = a.a[c].concat(), e = 0; e < d.length; ++e) em(d[e]) && ++b
        }
    }

    function am(a) {
        return a in Vl ? Vl[a] : Vl[a] = Mh + a
    }

    function gm(a, b, c, d) {
        var e = !0;
        if (a = Zl(a))
            if (b = a.a[b.toString()])
                for (b = b.concat(), a = 0; a < b.length; a++) {
                    var f = b[a];
                    f && f.na == c && !f.Z && (f = hm(f, d), e = e && !1 !== f)
                }
            return e
    }

    function hm(a, b) {
        var c = a.listener,
            d = a.qa || a.src;
        a.ma && em(a);
        return c.call(d, b)
    }

    function bm(a, b) {
        if (a.Z) return !0;
        if (!El) {
            var c;
            if (!(c = b)) a: {
                c = [Ej, cg];
                for (var d = v, e; e = c.shift();)
                    if (null != d[e]) d = d[e];
                    else {
                        c = null;
                        break a
                    }
                c = d
            }
            e = c;
            c = new Il(e, this);
            d = !0;
            if (!(0 > e.keyCode || void 0 != e.returnValue)) {
                a: {
                    var f = !1;
                    if (0 == e.keyCode) try {
                        e.keyCode = -1;
                        break a
                    } catch (q) {
                        f = !0
                    }
                    if (f || void 0 == e.returnValue) e.returnValue = !0
                }
                e = [];
                for (f = c.currentTarget; f; f = f.parentNode) e.push(f);
                for (var f = a.type, h = e.length - 1; !c.a && 0 <= h; h--) {
                    c.currentTarget = e[h];
                    var m = gm(e[h], f, !0, c),
                        d = d && m
                }
                for (h = 0; !c.a && h < e.length; h++) c.currentTarget =
                    e[h],
                m = gm(e[h], f, !1, c),
                d = d && m
            }
            return d
        }
        return hm(a, new Il(b, this))
    }

    function Zl(a) {
        a = a[Ul];
        return a instanceof Ol ? a : null
    }
    var im = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

    function Xl(a) {
        F(a, ad);
        if (Tj(a)) return a;
        F(a.handleEvent, lc);
        a[im] || (a[im] = function(b) {
            return a.handleEvent(b)
        });
        return a[im]
    };

    function S() {
        Gl.call(this);
        this.G = new Ol(this);
        this.fa = this;
        this.K = null
    }
    C(S, Gl);
    S.prototype[Jl] = !0;
    u = S.prototype;
    u.Ba = function(a) {
        this.K = a
    };
    u.addEventListener = function(a, b, c, d) {
        R(this, a, b, c, d)
    };
    u.removeEventListener = function(a, b, c, d) {
        dm(this, a, b, c, d)
    };
    u.dispatchEvent = function(a) {
        jm(this);
        var b, c = this.K;
        if (c) {
            b = [];
            for (var d = 1; c; c = c.K) b.push(c), F(1E3 > ++d, Wg)
        }
        c = this.fa;
        d = a.type || a;
        if (z(a)) a = new Hl(a, c);
        else if (a instanceof Hl) a.target = a.target || c;
        else {
            var e = a;
            a = new Hl(d, c);
            Vk(a, e)
        }
        var e = !0,
            f;
        if (b)
            for (var h = b.length - 1; !a.a && 0 <= h; h--) f = a.currentTarget = b[h], e = km(f, d, !0, a) && e;
        a.a || (f = a.currentTarget = c, e = km(f, d, !0, a) && e, a.a || (e = km(f, d, !1, a) && e));
        if (b)
            for (h = 0; !a.a && h < b.length; h++) f = a.currentTarget = b[h], e = km(f, d, !1, a) && e;
        return e
    };
    u.A = function() {
        S.u.A.call(this);
        this.G && Sl(this.G);
        this.K = null
    };
    u.S = function(a, b, c, d) {
        jm(this);
        return Pl(this.G, String(a), b, !1, c, d)
    };
    u.da = function(a, b, c, d) {
        var e;
        e = this.G;
        a = String(a).toString();
        if (a in e.a) {
            var f = e.a[a];
            b = Ql(f, b, c, d); - 1 < b ? (Nl(f[b]), F(null != f.length), Array.prototype.splice.call(f, b, 1), 0 == f.length && (delete e.a[a], e.b--), e = !0) : e = !1
        } else e = !1;
        return e
    };

    function km(a, b, c, d) {
        b = a.G.a[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var h = b[f];
            if (h && !h.Z && h.na == c) {
                var m = h.listener,
                    q = h.qa || h.src;
                h.ma && Rl(a.G, h);
                e = !1 !== m.call(q, d) && e
            }
        }
        return e && 0 != d.Ra
    }

    function jm(a) {
        F(a.G, Fc)
    };

    function lm(a, b) {
        this.c = a;
        this.g = b;
        this.b = 0;
        this.a = null
    }

    function mm(a) {
        var b;
        0 < a.b ? (a.b--, b = a.a, a.a = b.next, b.next = null) : b = a.c();
        return b
    }

    function nm(a, b) {
        a.g(b);
        100 > a.b && (a.b++, b.next = a.a, a.a = b)
    };

    function om(a) {
        return function() {
            return a
        }
    };

    function pm(a) {
        v.setTimeout(function() {
            throw a;
        }, 0)
    }
    var qm;

    function rm() {
        var a = v.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !K(rd) && (a = function() {
            var a = document.createElement(Tc);
            a.style.display = t;
            a.src = g;
            document.documentElement.appendChild(a);
            var b = a.contentWindow,
                a = b.document;
            a.open();
            a.write(g);
            a.close();
            var c = Te + Math.random(),
                d = b.location.protocol == kg ? eb : b.location.protocol + tb + b.location.host,
                a = A(function(a) {
                    if ((d == eb || a.origin == d) && a.data == c) this.port1.onmessage()
                }, this);
            b.addEventListener(rh,
                a, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    b.postMessage(c, d)
                }
            }
        });
        if ("undefined" !== typeof a && !K(Jd) && !K(cd)) {
            var b = new a,
                c = {},
                d = c;
            b.port1.onmessage = function() {
                if (x(c.next)) {
                    c = c.next;
                    var a = c.Ja;
                    c.Ja = null;
                    a()
                }
            };
            return function(a) {
                d.next = {
                    Ja: a
                };
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return "undefined" !== typeof document && Ph in document.createElement(wd) ? function(a) {
            var b = document.createElement(wd);
            b.onreadystatechange = function() {
                b.onreadystatechange = null;
                b.parentNode.removeChild(b);
                b = null;
                a();
                a =
                    null
            };
            document.documentElement.appendChild(b)
        } : function(a) {
            v.setTimeout(a, 0)
        }
    };
    var tm = new lm(function() {
        return new sm
    }, function(a) {
        a.reset()
    });

    function um() {
        var a = vm,
            b = null;
        a.a && (b = a.a, a.a = a.a.next, a.a || (a.b = null), b.next = null);
        return b
    }

    function sm() {
        this.next = this.b = this.a = null
    }
    sm.prototype.reset = function() {
        this.next = this.b = this.a = null
    };

    function wm(a, b) {
        xm || ym();
        zm || (xm(), zm = !0);
        var c = vm,
            d = mm(tm);
        d.a = a;
        d.b = b;
        d.next = null;
        c.b ? c.b.next = d : (F(!c.a), c.a = d);
        c.b = d
    }
    var xm;

    function ym() {
        if (v.Promise && v.Promise.resolve) {
            var a = v.Promise.resolve(void 0);
            xm = function() {
                a.then(Am)
            }
        } else xm = function() {
            var a = Am;
            !Tj(v.setImmediate) || v.Window && v.Window.prototype && v.Window.prototype.setImmediate == v.setImmediate ? (qm || (qm = rm()), qm(a)) : v.setImmediate(a)
        }
    }
    var zm = !1,
        vm = new function() {
            this.b = this.a = null
        };

    function Am() {
        for (var a = null; a = um();) {
            try {
                a.a.call(a.b)
            } catch (b) {
                pm(b)
            }
            nm(tm, a)
        }
        zm = !1
    };

    function Bm(a) {
        a.prototype.then = a.prototype.then;
        a.prototype.$goog_Thenable = !0
    }

    function Cm(a) {
        if (!a) return !1;
        try {
            return !!a.$goog_Thenable
        } catch (b) {
            return !1
        }
    };

    function Dm(a, b) {
        this.a = 0;
        this.j = void 0;
        this.g = this.b = this.c = null;
        this.i = this.h = !1;
        if (a != Pj) try {
            var c = this;
            a.call(b, function(a) {
                Em(c, 2, a)
            }, function(a) {
                if (!(a instanceof Fm)) try {
                    if (a instanceof Error) throw a;
                    throw Error("Promise rejected.");
                } catch (b) {}
                Em(c, 3, a)
            })
        } catch (d) {
            Em(this, 3, d)
        }
    }

    function Gm() {
        this.next = this.g = this.c = this.b = this.a = null;
        this.i = !1
    }
    Gm.prototype.reset = function() {
        this.g = this.c = this.b = this.a = null;
        this.i = !1
    };
    var Hm = new lm(function() {
        return new Gm
    }, function(a) {
        a.reset()
    });

    function Im(a, b, c) {
        var d = mm(Hm);
        d.b = a;
        d.c = b;
        d.g = c;
        return d
    }
    Dm.prototype.then = function(a, b, c) {
        null != a && sk(a, Sh);
        null != b && sk(b, Th);
        return Jm(this, Tj(a) ? a : null, Tj(b) ? b : null, c)
    };
    Bm(Dm);
    Dm.prototype.cancel = function(a) {
        0 == this.a && wm(function() {
            var b = new Fm(a);
            Km(this, b)
        }, this)
    };

    function Km(a, b) {
        if (0 == a.a)
            if (a.c) {
                var c = a.c;
                if (c.b) {
                    for (var d = 0, e = null, f = null, h = c.b; h && (h.i || (d++, h.a == a && (e = h), !(e && 1 < d))); h = h.next) e || (f = h);
                    e && (0 == c.a && 1 == d ? Km(c, b) : (f ? (d = f, F(c.b), F(null != d), d.next == c.g && (c.g = d), d.next = d.next.next) : Lm(c), Mm(c, e, 3, b)))
                }
                a.c = null
            } else Em(a, 3, b)
    }

    function Nm(a, b) {
        a.b || 2 != a.a && 3 != a.a || Om(a);
        F(null != b.b);
        a.g ? a.g.next = b : a.b = b;
        a.g = b
    }

    function Jm(a, b, c, d) {
        var e = Im(null, null, null);
        e.a = new Dm(function(a, h) {
            e.b = b ? function(c) {
                try {
                    var e = b.call(d, c);
                    a(e)
                } catch (w) {
                    h(w)
                }
            } : a;
            e.c = c ? function(b) {
                try {
                    var e = c.call(d, b);
                    !x(e) && b instanceof Fm ? h(b) : a(e)
                } catch (w) {
                    h(w)
                }
            } : h
        });
        e.a.c = a;
        Nm(a, e);
        return e.a
    }
    Dm.prototype.s = function(a) {
        F(1 == this.a);
        this.a = 0;
        Em(this, 2, a)
    };
    Dm.prototype.w = function(a) {
        F(1 == this.a);
        this.a = 0;
        Em(this, 3, a)
    };

    function Em(a, b, c) {
        if (0 == a.a) {
            a == c && (b = 3, c = new TypeError(ud));
            a.a = 1;
            var d;
            a: {
                var e = c,
                    f = a.s,
                    h = a.w;
                if (e instanceof Dm) null != f && sk(f, Sh), null != h && sk(h, Th), Nm(e, Im(f || Pj, h || null, a)), d = !0;
                else if (Cm(e)) e.then(f, h, a), d = !0;
                else {
                    if (Uj(e)) try {
                        var m = e.then;
                        if (Tj(m)) {
                            Pm(e, m, f, h, a);
                            d = !0;
                            break a
                        }
                    } catch (q) {
                        h.call(a, q);
                        d = !0;
                        break a
                    }
                    d = !1
                }
            }
            d || (a.j = c, a.a = b, a.c = null, Om(a), 3 != b || c instanceof Fm || Qm(a, c))
        }
    }

    function Pm(a, b, c, d, e) {
        function f(a) {
            m || (m = !0, d.call(e, a))
        }

        function h(a) {
            m || (m = !0, c.call(e, a))
        }
        var m = !1;
        try {
            b.call(a, h, f)
        } catch (q) {
            f(q)
        }
    }

    function Om(a) {
        a.h || (a.h = !0, wm(a.l, a))
    }

    function Lm(a) {
        var b = null;
        a.b && (b = a.b, a.b = b.next, b.next = null);
        a.b || (a.g = null);
        null != b && F(null != b.b);
        return b
    }
    Dm.prototype.l = function() {
        for (var a = null; a = Lm(this);) Mm(this, a, this.a, this.j);
        this.h = !1
    };

    function Mm(a, b, c, d) {
        if (3 == c && b.c && !b.i)
            for (; a && a.i; a = a.c) a.i = !1;
        if (b.a) b.a.c = null, Rm(b, c, d);
        else try {
            b.i ? b.b.call(b.g) : Rm(b, c, d)
        } catch (e) {
            Sm.call(null, e)
        }
        nm(Hm, b)
    }

    function Rm(a, b, c) {
        2 == b ? a.b.call(a.g, c) : a.c && a.c.call(a.g, c)
    }

    function Qm(a, b) {
        a.i = !0;
        wm(function() {
            a.i && Sm.call(null, b)
        })
    }
    var Sm = pm;

    function Fm(a) {
        E.call(this, a)
    }
    C(Fm, E);
    Fm.prototype.name = "cancel";

    function Tm(a, b) {
        S.call(this);
        this.g = a || 1;
        this.b = b || v;
        this.h = A(this.l, this);
        this.j = ak()
    }
    C(Tm, S);
    Tm.prototype.c = !1;
    Tm.prototype.a = null;
    Tm.prototype.l = function() {
        if (this.c) {
            var a = ak() - this.j;
            0 < a && a < .8 * this.g ? this.a = this.b.setTimeout(this.h, this.g - a) : (this.a && (this.b.clearTimeout(this.a), this.a = null), this.dispatchEvent(Xi), this.c && (this.a = this.b.setTimeout(this.h, this.g), this.j = ak()))
        }
    };

    function Um(a) {
        a.c = !1;
        a.a && (a.b.clearTimeout(a.a), a.a = null)
    }
    Tm.prototype.A = function() {
        Tm.u.A.call(this);
        Um(this);
        delete this.b
    };

    function Vm(a, b, c) {
        if (Tj(a)) c && (a = A(a, c));
        else if (a && typeof a.handleEvent == r) a = A(a.handleEvent, a);
        else throw Error("Invalid listener argument");
        return 2147483647 < b ? -1 : v.setTimeout(a, b || 0)
    };

    function Wm() {
        this.h = {};
        this.b = {};
        this.g = {};
        this.a = null;
        this.c = []
    }
    Qj(Wm);

    function Xm(a) {
        var b = Wm.Y(),
            c = b.h,
            d = b.b;
        d.lightbox ? a(d.lightbox[1]) : c.lightbox ? c.lightbox.push([1, a]) : (c.lightbox = [
            [1, a]
        ], z(b.a) ? Ym(b, hh) : b.c.push(hh))
    }

    function Zm() {
        return function() {
            var a = arguments;
            Xm(function(b) {
                b.apply(null, a)
            })
        }
    }
    Wm.prototype.i = function(a, b) {
        return a + Zd + b + pb
    };

    function $m(a) {
        eval(a)
    }

    function an(a, b, c) {
        B(be, $m);
        a.a = b.replace(/\.js$/, g);
        c && (a.i = c);
        uk(a.c, function(a) {
            Ym(this, a)
        }, a);
        zk(a.c)
    }

    function Ym(a, b) {
        Vm(function() {
            if (!this.b[b]) {
                rk(this.a);
                var a = this.i(this.a, b),
                    d;
                a: {
                    d = this.g;
                    for (var e in d)
                        if (d[e] == a) {
                            d = !0;
                            break a
                        }
                    d = !1
                }
                this.g[b] = a;
                d || (a = Q(wd, {
                    type: Ui,
                    src: a
                }), document.body.appendChild(a))
            }
        }, 0, a)
    };

    function bn(a) {
        Gl.call(this);
        this.b = a;
        this.a = {}
    }
    C(bn, Gl);
    var cn = [];
    bn.prototype.S = function(a, b, c, d) {
        y(b) || (b && (cn[0] = b.toString()), b = cn);
        for (var e = 0; e < b.length; e++) {
            var f = R(a, b[e], c || this.handleEvent, d || !1, this.b || this);
            if (!f) break;
            this.a[f.key] = f
        }
        return this
    };
    bn.prototype.da = function(a, b, c, d, e) {
        if (y(b))
            for (var f = 0; f < b.length; f++) this.da(a, b[f], c, d, e);
        else c = c || this.handleEvent, e = e || this.b || this, c = Xl(c), d = !!d, b = Kl(a) ? Tl(a.G, String(b), c, d, e) : a ? (a = Zl(a)) ? Tl(a, b, c, d, e) : null : null, b && (em(b), delete this.a[b.key]);
        return this
    };

    function dn(a) {
        Qk(a.a, function(a, c) {
            this.a.hasOwnProperty(c) && em(a)
        }, a);
        a.a = {}
    }
    bn.prototype.A = function() {
        bn.u.A.call(this);
        dn(this)
    };
    bn.prototype.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    };
    var en = "StopIteration" in v ? v.StopIteration : {
        message: "StopIteration",
        stack: g
    };

    function fn() {}
    fn.prototype.next = function() {
        throw en;
    };
    fn.prototype.ta = function() {
        return this
    };

    function gn(a, b) {
        this.b = {};
        this.a = [];
        this.g = this.c = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) T(this, arguments[d], arguments[d + 1])
        } else if (a) {
            a instanceof gn ? (c = a.I(), d = a.F()) : (c = Sk(a), d = Rk(a));
            for (var e = 0; e < c.length; e++) T(this, c[e], d[e])
        }
    }
    u = gn.prototype;
    u.B = Jj("c");
    u.F = function() {
        hn(this);
        for (var a = [], b = 0; b < this.a.length; b++) a.push(this.b[this.a[b]]);
        return a
    };
    u.I = function() {
        hn(this);
        return this.a.concat()
    };
    u.O = function() {
        return 0 == this.c
    };
    u.clear = function() {
        this.b = {};
        this.g = this.c = this.a.length = 0
    };

    function jn(a, b) {
        return kn(a.b, b) ? (delete a.b[b], a.c--, a.g++, a.a.length > 2 * a.c && hn(a), !0) : !1
    }

    function hn(a) {
        if (a.c != a.a.length) {
            for (var b = 0, c = 0; b < a.a.length;) {
                var d = a.a[b];
                kn(a.b, d) && (a.a[c++] = d);
                b++
            }
            a.a.length = c
        }
        if (a.c != a.a.length) {
            for (var e = {}, c = b = 0; b < a.a.length;) d = a.a[b], kn(e, d) || (a.a[c++] = d, e[d] = 1), b++;
            a.a.length = c
        }
    }

    function U(a, b) {
        return kn(a.b, b) ? a.b[b] : void 0
    }

    function T(a, b, c) {
        kn(a.b, b) || (a.c++, a.a.push(b), a.g++);
        a.b[b] = c
    }
    u.forEach = function(a, b) {
        for (var c = this.I(), d = 0; d < c.length; d++) {
            var e = c[d];
            a.call(b, U(this, e), e, this)
        }
    };
    u.clone = function() {
        return new gn(this)
    };
    u.ta = function(a) {
        hn(this);
        var b = 0,
            c = this.g,
            d = this,
            e = new fn;
        e.next = function() {
            if (c != d.g) throw Error("The map has changed since the iterator was created");
            if (b >= d.a.length) throw en;
            var e = d.a[b++];
            return a ? e : d.b[e]
        };
        return e
    };

    function kn(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };

    function ln(a) {
        a = String(a);
        if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, hc).replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, Xd).replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, g))) try {
            return eval($a + a + cb)
        } catch (b) {}
        throw Error("Invalid JSON string: " + a);
    };

    function mn(a) {
        if (a.F && typeof a.F == r) return a.F();
        if (z(a)) return a.split(g);
        if (Sj(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
            return b
        }
        return Rk(a)
    }

    function nn(a, b) {
        if (a.forEach && typeof a.forEach == r) a.forEach(b, void 0);
        else if (Sj(a) || z(a)) uk(a, b, void 0);
        else {
            var c;
            if (a.I && typeof a.I == r) c = a.I();
            else if (a.F && typeof a.F == r) c = void 0;
            else if (Sj(a) || z(a)) {
                c = [];
                for (var d = a.length, e = 0; e < d; e++) c.push(e)
            } else c = Sk(a);
            for (var d = mn(a), e = d.length, f = 0; f < e; f++) b.call(void 0, d[f], c && c[f], a)
        }
    };

    function on(a) {
        this.a = new gn;
        if (a) {
            a = mn(a);
            for (var b = a.length, c = 0; c < b; c++) {
                var d = a[c];
                T(this.a, pn(d), d)
            }
        }
    }

    function pn(a) {
        var b = typeof a;
        return b == Kh && a || b == r ? Jh + (a[Vj] || (a[Vj] = ++Wj)) : b.substr(0, 1) + a
    }
    u = on.prototype;
    u.B = function() {
        return this.a.B()
    };
    u.clear = function() {
        this.a.clear()
    };
    u.O = function() {
        return this.a.O()
    };
    u.contains = function(a) {
        a = pn(a);
        return kn(this.a.b, a)
    };
    u.F = function() {
        return this.a.F()
    };
    u.clone = function() {
        return new on(this)
    };
    u.ta = function() {
        return this.a.ta(!1)
    };
    var qn = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;

    function rn(a, b) {
        if (a)
            for (var c = a.split(ua), d = 0; d < c.length; d++) {
                var e = c[d].indexOf(bc),
                    f = null,
                    h = null;
                0 <= e ? (f = c[d].substring(0, e), h = c[d].substring(e + 1)) : f = c[d];
                b(f, h ? decodeURIComponent(h.replace(/\+/g, k)) : g)
            }
    };

    function sn() {}
    sn.prototype.a = null;

    function tn(a) {
        var b;
        (b = a.a) || (b = {}, un(a) && (b[0] = !0, b[1] = !0), b = a.a = b);
        return b
    };
    var vn;

    function wn() {}
    C(wn, sn);

    function xn(a) {
        return (a = un(a)) ? new ActiveXObject(a) : new XMLHttpRequest
    }

    function un(a) {
        if (!a.b && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var b = [fd, ed, dd, gd], c = 0; c < b.length; c++) {
                var d = b[c];
                try {
                    return new ActiveXObject(d), a.b = d
                } catch (e) {}
            }
            throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
        }
        return a.b
    }
    vn = new wn;

    function yn(a) {
        S.call(this);
        this.aa = new gn;
        this.H = a || null;
        this.b = !1;
        this.D = this.a = null;
        this.V = g;
        this.h = 0;
        this.g = this.M = this.s = this.L = !1;
        this.l = 0;
        this.w = null;
        this.j = g;
        this.W = this.ia = !1
    }
    C(yn, S);
    var zn = /^https?$/i,
        An = [nd, "PUT"],
        Bn = [];

    function Cn(a, b, c, d) {
        var e = new yn;
        Bn.push(e);
        b && e.S(kf, b);
        Pl(e.G, ki, e.Cb, !0, void 0, void 0);
        Dn(e, a, c, d, void 0)
    }
    u = yn.prototype;
    u.Cb = function() {
        this.U();
        Ak(Bn, this)
    };
    u.Na = Jj("j");

    function Dn(a, b, c, d, e) {
        if (a.a) throw Error("[goog.net.XhrIo] Object is active with another request=" + a.V + "; newUri=" + b);
        c = c ? c.toUpperCase() : Mc;
        a.V = b;
        a.h = 0;
        a.L = !1;
        a.b = !0;
        a.a = a.H ? xn(a.H) : xn(vn);
        a.D = a.H ? tn(a.H) : tn(vn);
        a.a.onreadystatechange = A(a.Qa, a);
        try {
            a.M = !0, a.a.open(c, String(b), !0), a.M = !1
        } catch (h) {
            En(a);
            return
        }
        b = d || g;
        var f = a.aa.clone();
        e && nn(e, function(a, b) {
            T(f, b, a)
        });
        e = xk(f.I());
        d = v.FormData && b instanceof v.FormData;
        !G(An, c) || e || d || T(f, yc, oe);
        f.forEach(function(a, b) {
                this.a.setRequestHeader(b, a)
            },
            a);
        a.j && (a.a.responseType = a.j);
        Tk(a.a) && (a.a.withCredentials = a.ia);
        try {
            Fn(a), 0 < a.l && (a.W = Gn(a.a), a.W ? (a.a.timeout = a.l, a.a.ontimeout = A(a.T, a)) : a.w = Vm(a.T, a.l, a)), a.s = !0, a.a.send(b), a.s = !1
        } catch (h) {
            En(a)
        }
    }

    function Gn(a) {
        return L && M(9) && typeof a.timeout == Ih && x(a.ontimeout)
    }

    function yk(a) {
        return xf == a.toLowerCase()
    }
    u.T = function() {
        "undefined" != typeof Oj && this.a && (this.h = 8, this.dispatchEvent(Yi), this.abort(8))
    };

    function En(a) {
        a.b = !1;
        a.a && (a.g = !0, a.a.abort(), a.g = !1);
        a.h = 5;
        Hn(a);
        In(a)
    }

    function Hn(a) {
        a.L || (a.L = !0, a.dispatchEvent(kf), a.dispatchEvent(Yf))
    }
    u.abort = function(a) {
        this.a && this.b && (this.b = !1, this.g = !0, this.a.abort(), this.g = !1, this.h = a || 7, this.dispatchEvent(kf), this.dispatchEvent(he), In(this))
    };
    u.A = function() {
        this.a && (this.b && (this.b = !1, this.g = !0, this.a.abort(), this.g = !1), In(this, !0));
        yn.u.A.call(this)
    };
    u.Qa = function() {
        this.i || (this.M || this.s || this.g ? Jn(this) : this.Wb())
    };
    u.Wb = function() {
        Jn(this)
    };

    function Jn(a) {
        if (a.b && "undefined" != typeof Oj && (!a.D[1] || 4 != (a.a ? a.a.readyState : 0) || 2 != Kn(a)))
            if (a.s && 4 == (a.a ? a.a.readyState : 0)) Vm(a.Qa, 0, a);
            else if (a.dispatchEvent(li), 4 == (a.a ? a.a.readyState : 0)) {
            a.b = !1;
            try {
                Ln(a) ? (a.dispatchEvent(kf), a.dispatchEvent(Ri)) : (a.h = 6, Hn(a))
            } finally {
                In(a)
            }
        }
    }

    function In(a, b) {
        if (a.a) {
            Fn(a);
            var c = a.a,
                d = a.D[0] ? Pj : null;
            a.a = null;
            a.D = null;
            b || a.dispatchEvent(ki);
            try {
                c.onreadystatechange = d
            } catch (e) {}
        }
    }

    function Fn(a) {
        a.a && a.W && (a.a.ontimeout = null);
        typeof a.w == Ih && (v.clearTimeout(a.w), a.w = null)
    }

    function Ln(a) {
        var b = Kn(a),
            c;
        a: switch (b) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
                c = !0;
                break a;
            default:
                c = !1
        }
        if (!c) {
            if (b = 0 === b) a = String(a.V).match(qn)[1] || null, !a && v.self && v.self.location && (a = v.self.location.protocol, a = a.substr(0, a.length - 1)), b = !zn.test(a ? a.toLowerCase() : g);
            c = b
        }
        return c
    }

    function Kn(a) {
        try {
            return 2 < (a.a ? a.a.readyState : 0) ? a.a.status : -1
        } catch (b) {
            return -1
        }
    }

    function Mn(a) {
        try {
            return a.a ? a.a.responseText : g
        } catch (b) {
            return g
        }
    };

    function Nn() {
        this.b = [];
        this.a = []
    }

    function On(a) {
        0 == a.b.length && (a.b = a.a, a.b.reverse(), a.a = []);
        return a.b.pop()
    }
    u = Nn.prototype;
    u.B = function() {
        return this.b.length + this.a.length
    };
    u.O = function() {
        return 0 == this.b.length && 0 == this.a.length
    };
    u.clear = function() {
        this.b = [];
        this.a = []
    };
    u.contains = function(a) {
        return G(this.b, a) || G(this.a, a)
    };
    u.F = function() {
        for (var a = [], b = this.b.length - 1; 0 <= b; --b) a.push(this.b[b]);
        for (var c = this.a.length, b = 0; b < c; ++b) a.push(this.a[b]);
        return a
    };

    function Pn(a, b) {
        Gl.call(this);
        this.j = a || 0;
        this.c = b || 10;
        if (this.j > this.c) throw Error("[goog.structs.Pool] Min can not be greater than max");
        this.a = new Nn;
        this.b = new on;
        this.h = null;
        this.ja()
    }
    C(Pn, Gl);
    u = Pn.prototype;
    u.pa = function() {
        var a = ak();
        if (!(null != this.h && 0 > a - this.h)) {
            for (var b; 0 < this.a.B() && (b = On(this.a), !this.Aa(b));) this.ja();
            !b && this.B() < this.c && (b = this.wa());
            b && (this.h = a, T(this.b.a, pn(b), b));
            return b
        }
    };

    function Qn(a, b) {
        jn(a.b.a, pn(b)) && a.ua(b)
    }
    u.ua = function(a) {
        jn(this.b.a, pn(a));
        this.Aa(a) && this.B() < this.c ? this.a.a.push(a) : Rn(a)
    };
    u.ja = function() {
        for (var a = this.a; this.B() < this.j;) {
            var b = this.wa();
            a.a.push(b)
        }
        for (; this.B() > this.c && 0 < this.a.B();) Rn(On(a))
    };
    u.wa = function() {
        return {}
    };

    function Rn(a) {
        if (typeof a.U == r) a.U();
        else
            for (var b in a) a[b] = null
    }
    u.Aa = function(a) {
        return typeof a.Bb == r ? a.Bb() : !0
    };
    u.contains = function(a) {
        return this.a.contains(a) || this.b.contains(a)
    };
    u.B = function() {
        return this.a.B() + this.b.B()
    };
    u.O = function() {
        return this.a.O() && this.b.O()
    };
    u.A = function() {
        Pn.u.A.call(this);
        if (0 < this.b.B()) throw Error("[goog.structs.Pool] Objects not released");
        delete this.b;
        for (var a = this.a; !a.O();) Rn(On(a));
        delete this.a
    };

    function Sn(a, b) {
        this.a = a;
        this.b = b
    }
    Sn.prototype.clone = function() {
        return new Sn(this.a, this.b)
    };

    function Tn(a) {
        this.a = [];
        if (a) a: {
            var b, c;
            if (a instanceof Tn) {
                if (b = a.I(), c = a.F(), 0 >= a.B()) {
                    a = this.a;
                    for (var d = 0; d < b.length; d++) a.push(new Sn(b[d], c[d]));
                    break a
                }
            } else b = Sk(a), c = Rk(a);
            for (d = 0; d < b.length; d++) Un(this, b[d], c[d])
        }
    }

    function Un(a, b, c) {
        var d = a.a;
        d.push(new Sn(b, c));
        b = d.length - 1;
        a = a.a;
        for (c = a[b]; 0 < b;)
            if (d = b - 1 >> 1, a[d].a > c.a) a[b] = a[d], b = d;
            else break;
        a[b] = c
    }
    u = Tn.prototype;
    u.F = function() {
        for (var a = this.a, b = [], c = a.length, d = 0; d < c; d++) b.push(a[d].b);
        return b
    };
    u.I = function() {
        for (var a = this.a, b = [], c = a.length, d = 0; d < c; d++) b.push(a[d].a);
        return b
    };
    u.clone = function() {
        return new Tn(this)
    };
    u.B = function() {
        return this.a.length
    };
    u.O = function() {
        return 0 == this.a.length
    };
    u.clear = function() {
        zk(this.a)
    };

    function Vn() {
        Tn.call(this)
    }
    C(Vn, Tn);

    function Wn(a, b) {
        this.g = new Vn;
        Pn.call(this, a, b)
    }
    C(Wn, Pn);
    u = Wn.prototype;
    u.pa = function(a, b) {
        if (!a) return Wn.u.pa.call(this);
        Un(this.g, x(b) ? b : 100, a);
        this.ya()
    };
    u.ya = function() {
        for (var a = this.g; 0 < a.B();) {
            var b = this.pa();
            if (b) {
                var c;
                var d = a,
                    e = d.a,
                    f = e.length;
                c = e[0];
                if (0 >= f) c = void 0;
                else {
                    if (1 == f) zk(e);
                    else {
                        e[0] = e.pop();
                        for (var e = 0, d = d.a, f = d.length, h = d[e]; e < f >> 1;) {
                            var m = 2 * e + 1,
                                q = 2 * e + 2,
                                m = q < f && d[q].a < d[m].a ? q : m;
                            if (d[m].a > h.a) break;
                            d[e] = d[m];
                            e = m
                        }
                        d[e] = h
                    }
                    c = c.b
                }
                c.apply(this, [b])
            } else break
        }
    };
    u.ua = function(a) {
        Wn.u.ua.call(this, a);
        this.ya()
    };
    u.ja = function() {
        Wn.u.ja.call(this);
        this.ya()
    };
    u.A = function() {
        Wn.u.A.call(this);
        v.clearTimeout(void 0);
        this.g.clear();
        this.g = null
    };

    function Xn(a, b, c) {
        this.l = a;
        Wn.call(this, b, c)
    }
    C(Xn, Wn);
    Xn.prototype.wa = function() {
        var a = new yn,
            b = this.l;
        b && b.forEach(function(b, d) {
            T(a.aa, d, b)
        });
        return a
    };
    Xn.prototype.Aa = function(a) {
        return !a.i && !a.a
    };

    function Yn(a, b, c, d, e) {
        S.call(this);
        this.g = x(a) ? a : 1;
        this.h = x(e) ? Math.max(0, e) : 0;
        this.b = new Xn(b, c, d);
        this.a = new gn;
        this.c = new bn(this)
    }
    C(Yn, S);
    var Zn = [ki, kf, Ri, Yf, he, Yi];

    function $n(a, b, c, d, e, f) {
        if (U(a.a, b)) throw Error("[goog.net.XhrManager] ID in use");
        c = new ao(c, A(a.l, a, b), d, e, null, f, x(void 0) ? void 0 : a.g, void 0);
        T(a.a, b, c);
        b = A(a.j, a, b);
        a.b.pa(b, null)
    }
    Yn.prototype.abort = function(a, b) {
        var c = U(this.a, a);
        if (c) {
            var d = c.sa;
            c.Ga = !0;
            b && (d && (this.c.da(d, Zn, c.Da), cm(d, ki, function() {
                Qn(this.b, d)
            }, !1, this)), jn(this.a, a));
            d && d.abort()
        }
    };
    Yn.prototype.j = function(a, b) {
        var c = U(this.a, a);
        c && !c.sa ? (this.c.S(b, Zn, c.Da), b.l = Math.max(0, this.h), b.j = c.Na(), c.sa = b, this.dispatchEvent(new bo(ki, this, a, b)), co(this, a, b), c.Ga && b.abort()) : Qn(this.b, b)
    };
    Yn.prototype.l = function(a, b) {
        var c = b.target;
        switch (b.type) {
            case ki:
                co(this, a, c);
                break;
            case kf:
                a: {
                    var d = U(this.a, a);
                    if (7 == c.h || Ln(c) || d.ka > d.xa)
                        if (this.dispatchEvent(new bo(kf, this, a, c)), d && (d.La = !0, d.Ka)) {
                            c = d.Ka.call(c, b);
                            break a
                        }
                    c = null
                }
                return c;
            case Ri:
                this.dispatchEvent(new bo(Ri, this, a, c));
                break;
            case Yi:
            case Yf:
                d = U(this.a, a);
                d.ka > d.xa && this.dispatchEvent(new bo(Yf, this, a, c));
                break;
            case he:
                this.dispatchEvent(new bo(he, this, a, c))
        }
        return null
    };

    function co(a, b, c) {
        var d = U(a.a, b);
        !d || d.La || d.ka > d.xa ? (d && (a.c.da(c, Zn, d.Da), jn(a.a, b)), Qn(a.b, c)) : (d.ka++, Dn(c, d.Lb, d.Tb, d.Eb, d.Kb))
    }
    Yn.prototype.A = function() {
        Yn.u.A.call(this);
        this.b.U();
        this.b = null;
        this.c.U();
        this.c = null;
        this.a.clear();
        this.a = null
    };

    function bo(a, b, c, d) {
        Hl.call(this, a, b);
        this.id = c;
        this.sa = d
    }
    C(bo, Hl);

    function ao(a, b, c, d, e, f, h, m) {
        this.Lb = a;
        this.Tb = c || Mc;
        this.Eb = d;
        this.Kb = e || null;
        this.xa = x(h) ? h : 1;
        this.ka = 0;
        this.Ga = this.La = !1;
        this.Da = b;
        this.Ka = f;
        this.a = m || g;
        this.sa = null
    }
    ao.prototype.Na = Jj(ge);

    function eo(a, b, c, d, e, f) {
        this.b = a;
        this.i = b;
        this.a = d || null;
        this.data = e || null;
        if (f) {
            if (this.c = f, f != Sf && f != Pf && f != Qf && f != Rf) throw "bad display mode: " + f;
        } else this.c = Rf;
        this.g = !1
    }
    eo.prototype.h = Jj("b");

    function fo(a) {
        this.g = !0;
        this.o = a;
        this.b = null
    }

    function V(a, b) {
        return document.getElementById(a.o.b + Zd + b)
    }

    function W(a, b) {
        var c = V(a, b);
        if (!c) throw "did not find element for id " + b;
        return c
    }
    fo.prototype.m = function() {
        return this.o.data
    };
    fo.prototype.c = function() {
        var a = {};
        a.type = this.b.ga();
        a.instanceId = this.o.b;
        a.sectionId = this.o.i;
        a.actionUrl = J.J;
        a.quickEditUrl = J.Ea + Ya + this.b.ga() + Xa + this.o.b + Qa + this.o.i + za + J.M;
        return a
    };

    function go(a, b, c, d, e) {
        c = c || {};
        window.__wavt && (c.xssi_token = window.__wavt);
        J.Rb(b, c, a.o.b, a.b.ga(), d, e)
    }

    function Nk(a) {
        var b = -1;
        try {
            b = a.status
        } catch (c) {}
        return b
    }

    function J() {}
    J.nb = function(a, b, c) {
        J.b = {};
        J.Ea = a;
        J.J = b;
        J.dc = c;
        J.g = {};
        J.j = new Yn;
        J.Fa = 0;
        J.D = 0;
        R(J.j, ki, function() {
            J.D++
        });
        R(J.j, kf, function() {
            J.D--
        })
    };
    J.Pb = function() {
        var a = J.ab();
        document.body.appendChild(a)
    };
    J.Nb = function(a) {
        J.Pb();
        if (window.parent == window) {
            var b = sd;
            a && (b = a);
            a = J.$a(b);
            document.body.appendChild(a[0]);
            document.body.appendChild(a[1])
        }
    };
    J.pb = Xe;
    J.Ya = Xe;
    J.M = "editWidget";
    J.eb = function() {
        return J.J
    };
    J.Jb = function(a, b) {
        J.K = a;
        J.Sb = b
    };
    J.gb = function() {
        return J.K
    };
    J.Mb = function(a) {
        J.Vb = a
    };
    J.W = function() {
        return J.Vb
    };
    J.Ib = function(a) {
        J.g = a
    };
    J.cb = function() {
        var a = {},
            b;
        for (b in J.g) {
            var c = J.g[b];
            a[c.name] = c.data
        }
        c = {};
        for (b in J.b) c[b] = J.b[b].f.m();
        a.widgets = c;
        return a
    };
    J.aa = function(a, b) {
        var c = new fo(b),
            d = new window[a](c);
        c.b = d;
        J.b[b.b] = d;
        J.L(d);
        return d
    };
    J.vb = function(a, b) {
        var c = J.aa(a, b);
        c.f.o.g = !0;
        return c
    };
    J.L = function(a) {
        var b = a.f;
        b.o.c != Rf && (b.o.c == Pf && a.C(), a.f.g = !1)
    };
    J.c = function(a) {
        return J.b ? J.b[a] : null
    };
    J.w = function(a, b, c, d, e) {
        var f = g;
        d && (f = Xa + d);
        a = J.Ea + za + a + Qa + b + Ya + c + f;
        if (window.name == e) return window.location.replace(a), window.focus(), window;
        e = window.open(a, e, yj);
        e.focus();
        return e
    };
    J.Ua = function(a) {
        var b = a.getAttribute(Tg),
            c = J.c(b);
        if (c) {
            var d = c.f.a;
            if (null != d && !d.closed) return d.focus(), !1
        }
        d = lf + b;
        a = J.w(J.M, a.parentNode.getAttribute(Tg), a.getAttribute(wj), b, d);
        c && (c.f.a = a);
        return !1
    };
    J.tb = function(a) {
        J.w(J.Ya, a.parentNode.getAttribute(Tg), a.getAttribute(wj), a.getAttribute(Tg), J.pb);
        return !1
    };
    J.bb = function(a, b, c) {
        J.a(c, c.LayoutsMessages.DELETING);
        J.ha(Kf, {}, a, b)
    };
    J.Ab = function(a, b) {
        var c = window;
        a.sectionid = document.getElementById(wi).value;
        J.a(c, c.LayoutsMessages.SAVING);
        J.ha(le, a, g, b)
    };
    J.Fb = function(a, b, c) {
        F(null != c, Fh);
        var d = J.c(b);
        F(null != d, Gh + b);
        d.f.o.g ? J.Ab(a, c) : (b = d.f, c = window, J.a(c, c.LayoutsMessages.SAVING), go(b, mf, a))
    };
    J.Rb = function(a, b, c, d, e, f) {
        J.fa(J.J, a, b, c, d, e, f)
    };
    J.ha = function(a, b, c, d) {
        J.K && (b.security_token = J.Sb, J.fa(J.K, a, b, c, d, void 0))
    };
    J.fa = function(a, b, c, d, e, f, h) {
        function m() {
            w(this.a) && window.eval(Mn(this))
        }
        b = [ke + encodeURIComponent(b), uj + encodeURIComponent(d), xj + encodeURIComponent(e), ni];
        for (var q in c)
            if (typeof c[q] == Kh)
                for (d = c[q], e = 0; e < d.length; ++e) b.push(encodeURIComponent(q) + bc + encodeURIComponent(d[e]));
            else b.push(encodeURIComponent(q) + bc + encodeURIComponent(c[q]));
        var w = f || Mk();
        h == Mc ? (a = 0 <= a.indexOf(dc) ? a + ua : a + dc, $n(J.j, g + J.Fa++, a + b.join(ua), Mc, void 0, m)) : $n(J.j, g + J.Fa++, a, nd, b.join(ua), m)
    };
    J.Hb = function(a, b) {
        if (a) {
            var c = J.c(a);
            c && (c.f.a = b)
        }
    };
    J.i = function(a, b) {
        0 == J.D ? a.setTimeout(function() {
            a.close()
        }, b) : a.setTimeout(function() {
            J.i(a, b)
        }, 200)
    };
    J.ob = function(a, b) {
        a && (J.i(a, 100), J.Qb(a, b))
    };
    J.Qb = function(a, b) {
        if (a) {
            var c = a.document.getElementById(Li);
            c && (c = c.innerHTML);
            c && a && a.opener.parent && a.opener.parent.editor && a.opener.parent.editor.SetSaveMessage(c, b)
        }
    };
    J.P = function(a, b, c) {
        var d = J.b[a];
        null != c.errors ? ((a = d ? d.f.a : null) || (a = window), J.a(a, c.errors), d && d.X ? d.X(b, c, a) : J.X(c, a)) : (F(null != d, Gh + a), d.P(b, c))
    };
    J.X = function(a, b) {
        var c = a[Zf],
            d;
        for (d in c) ho(d, c[d], b.document)
    };

    function io(a, b) {
        J.a(a.a, b[Ki]);
        J.V(a.o.b, $d, function(a) {
            window.opener._WidgetManager._OnWidgetConfigured(a, b)
        })
    }
    J.qb = function(a, b) {
        window.parent && window.parent.editor && b ? J.rb(a, b) : window.location.replace(window.location.href)
    };
    J.rb = function(a, b) {
        var c = J.c(a);
        c.f.o.data = b.data;
        var d = document.getElementById(a);
        sl(d);
        Ok(d, c);
        c.f.a = null
    };
    J.ib = function(a, b, c) {
        var d = c[Ki];
        if (null != c.errors) J.a(window, c.errors), J.X(c, window);
        else if (b == le) {
            var e;
            J.l(window) && (window.opener && window.opener.parent && (e = window.opener.parent), e && e.editor && e.editor.HandleAddNewWidget(c));
            J.a(window, d);
            null == window.opener ? window.location = xb + c.blogID : e && e._WidgetManager ? e._WidgetManager._KillPopupDelay(window) : J.i(window, 100)
        } else c = J.b[a], F(null != c), b == Kf && (J.a(c.f.a, d), J.V(a, ae))
    };
    J.sb = function(a) {
        var b = J.c(a);
        b && (b.f.o.c == Qf ? top.editor.HandleDeleteWidget(b.f.o.a) : (b = b.f.o.a, b.parentNode.removeChild(b)), delete J.b[a])
    };
    J.V = function(a, b, c) {
        if (J.l(window)) {
            var d = window.opener;
            c || (c = d._WidgetManager[b]);
            c(a);
            d._WidgetManager ? d._WidgetManager._KillPopupDelay(window, a) : J.i(window, 100)
        } else a = J.W() + gc + a, a += Da + encodeURIComponent(b), window.location.replace(a)
    };
    J.l = function(a) {
        var b = !1;
        try {
            if (a.opener) {
                var c = Qd + a.opener.document.domain;
                c && c != Qd && (b = !0)
            }
        } catch (d) {}
        return b
    };
    J.ia = "status-msg-yellow-on-white";
    J.a = function(a, b) {
        a || (a = self);
        var c = a.document.getElementById(Li);
        c && (c.innerHTML = b);
        (c = a.document.getElementById(Ki)) && Hk(c, J.ia)
    };
    J.cc = function(a) {
        a || (a = self);
        (a = a.document.getElementById(Ki)) && Jk(a, J.ia)
    };
    J.bc = function(a) {
        a && 0 < a.length && a.substring(0, 4) != Gg && (a = Ig + a);
        return a
    };
    J.h = function(a, b) {
        if (H(a, b)) return a;
        if (a)
            for (var c = a.childNodes.length, d = 0; d < c; d++) {
                var e = J.h(a.childNodes.item(d), b);
                if (e) return e
            }
        return null
    };
    J.ab = function() {
        var a = window.document.createElement(p);
        a.className = Ke;
        a.style.position = ie;
        a.style.top = Bb;
        a.style.left = Bb;
        a.style.width = Fb;
        a.style.height = Fb;
        L && !M(7) && (a.style.height = fg);
        a.style.zIndex = Eb;
        a.style.cursor = If;
        a.onclick = J.s;
        a.onmousedown = J.s;
        a.onmouseup = J.s;
        a.style.background = oj;
        a.style.filter = me;
        a.style.opacity = mb;
        a.innerHTML = Ia;
        return a
    };
    J.$a = function(a) {
        var b = window.document,
            c = J.H(b, a);
        a = J.H(b, a);
        c.style.backgroundColor = la;
        c.style.border = Jb;
        L && (c.style.filter = ea);
        c.style.opacity = nb;
        a.style.border = Kb;
        c.style.zIndex = 1200;
        a.style.zIndex = 1200;
        return [c, a]
    };
    J.H = function(a, b) {
        var c = a.createElement(p);
        c.style.position = ie;
        c.style.top = Sb;
        c.style.left = jb;
        c.style.width = Rb;
        c.style.height = Ob;
        c.style.margin = Bb;
        c.style.padding = Gb;
        c.style.fontSize = Nb;
        c.style.textAlign = Ve;
        c.style.color = ma;
        c.style.fontFamily = ia;
        L && (c.style.top = ib, c.style.left = ib, c.style.filter = da);
        c.style.MozTransform = qi;
        c.style.MozTransformOrigin = Qb;
        c.style.WebkitTransform = qi;
        c.style.WebkitTransformOrigin = Qb;
        c.innerHTML = b;
        c.className = Ai;
        return c
    };
    J.s = function(a) {
        a || (a = window.event);
        a && (a.cancelBubble = !0, a.stopPropagation && a.stopPropagation());
        return !1
    };

    function jo(a) {
        if (a)
            if (a.type == We) {
                if (a.checked) return a.value
            } else {
                if (null == a.type) {
                    for (var b = [], c = 0; c < a.length; c++) a[c].checked && (b[b.length] = a[c].value);
                    switch (b.length) {
                        case 0:
                            return;
                        case 1:
                            return b[0];
                        default:
                            return b
                    }
                }
                return a.value
            }
    }

    function ko(a, b) {
        b || (b = document);
        return b.getElementById(bg + a)
    }

    function ho(a, b, c) {
        if (a = ko(a, c)) a.innerHTML = b, a.className = $f
    }

    function lo() {
        this.a = [];
        for (var a = 0; a < J.g.length; ++a) this.a[this.a.length] = J.g[a]
    }

    function mo(a, b) {
        null == b && (b = g);
        for (var c = a.a.length - 1; 0 <= c; --c)
            if (a.a[c].name == b) return a.a[c].data;
        return null
    }
    lo.prototype.m = function(a) {
        var b = mo(this, a);
        if (null !== b) return b;
        var c = a.split(lb);
        if (1 == c.length) return b = mo(this, g), b[a];
        b = mo(this, c[0]);
        a = 0;
        for (b ? a = 1 : b = mo(this, g); a < c.length; a++) {
            if (null == b) return null;
            b = b[c[a]]
        }
        return b
    };

    function X(a, b) {
        this.$b = a;
        this.f = b
    }
    u = X.prototype;
    u.ga = Jj("$b");
    u.Wa = Jj("f");
    u.P = function(a, b) {
        a == mf && io(this.f, b)
    };
    u.X = function(a, b, c) {
        J.X(b, c)
    };
    u.C = function() {};
    B("_WidgetManager", J);
    J._Init = J.nb;
    J._SetPageActionUrl = J.Jb;
    J._GetPageActionUrl = J.gb;
    J._SetWidgetRefreshUrl = J.Mb;
    J._GetWidgetRefreshUrl = J.W;
    J._GetCallbackUrl = J.eb;
    J._DeleteWidgetFromPage = J.bb;
    J._DisplayWidget = J.L;
    J._GetWidget = J.c;
    J._HandleControllerResult = J.P;
    J._HandlePageActionResult = J.ib;
    J._IsOpenerReachable = J.l;
    J._SetConfigWin = J.Hb;
    J._SetDataContext = J.Ib;
    J._SetupPreview = J.Nb;
    J._RegisterWidget = J.aa;
    J._RegisterNewWidget = J.vb;
    J._PopupPaneFromParams = J.w;
    J._PopupConfig = J.Ua;
    J._PopupToolbox = J.tb;
    J._KillPopupDelay = J.ob;
    J._OnWidgetConfigured = J.qb;
    J._OnWidgetDeleted = J.sb;
    B("_WidgetInfo", eo);
    eo.prototype._getInstanceId = eo.prototype.h;
    X.prototype._GetHelper = X.prototype.Wa;
    fo.prototype._GetData = fo.prototype.m;
    fo.prototype._GenerateWidgetMetadata = fo.prototype.c;
    J._GetAllData = J.cb;
    B("widget_module_provide", function(a, b, c) {
        var d = Wm.Y(),
            e = d.b,
            f = d.h;
        e[a] || (e[a] = {});
        if (c) e[a][b] = c;
        else if (f[a]) {
            for (b = 0; b < f[a].length; ++b)(0, f[a][b][1])(e[a][f[a][b][0]]);
            delete f[a];
            delete d.g[a]
        }
    });

    function no(a) {
        X.call(this, jc, a);
        this.f = a
    }
    C(no, X);
    B("_AdSenseView", no);

    function oo(a) {
        X.call(this, sc, a);
        this.a = a.o
    }
    C(oo, X);
    var po = "&#9658;&nbsp;";
    u = oo.prototype;
    u.P = function(a, b) {
        if (a == mf) io(this.f, b);
        else if (a == xg) {
            var c;
            a: {
                c = b.path;
                var d = this.a.a.getElementsByTagName(ic),
                    e;
                for (e in d) {
                    var f = d[e];
                    if (f.href == c) {
                        c = Al(f, gh, pe);
                        break a
                    }
                }
                c = void 0
            }
            d = P(bi, c);
            (e = Al(c, p, df)) && nl(e, {
                style: g,
                "data-height": g
            });
            d.innerHTML = g;
            for (e = 0; e < b.posts.length; e++) {
                var f = b.posts[e],
                    h = document.createElement(gh);
                h.innerHTML = Zb + f.url + cc + f.title + Xb;
                d.appendChild(h)
            }
            qo(this, c);
            ro(this, c)
        } else oo.u.P.call(this, a, b)
    };
    u.C = function() {
        if (V(this.f, mc)) {
            var a = O(ge, $i, this.a.a);
            1 > a.length && (a = O(gh, $i, this.a.a));
            var b;
            0 < a.length && a[0].currentStyle && (b = a[0].parentNode.currentStyle.color);
            for (var c = 0; c < a.length; c++) {
                var d = a[c];
                0 < O(p, df, d).length ? (d.onclick = this.hb.bind(this), qo(this, d)) : d.onclick = this.jb.bind(this);
                b && (d.style.color = b)
            }
            if (d = V(this.f, nc)) {
                for (c = 1; c < d.options.length; c++)
                    if (a = d.options[c].value, a == window.location.href || null != window.location.href.match(a)) {
                        d.selectedIndex = c;
                        break
                    }
                d.onchange = this.Xa.bind(this)
            } else
                for (a =
                    O(p, Tf, this.a.a), c = 0; c < a.length; c++) d = a[c], d.addEventListener(Ze, this.mb.bind(this), !1), d.addEventListener(Ze, this.fb.bind(this), !1);
            this.f.m().languageDirection == ri && (po = ya)
        }
    };
    u.Xa = function() {
        var a = V(this.f, nc);
        a && a.value != g && (window.location.href = a.value)
    };
    u.jb = function(a) {
        a = a || window.event;
        var b = a.currentTarget || a.srcElement;
        b && !H(b, $i) && (b = b.parentNode);
        a = J.h(b, Gj);
        b = b.parentNode;
        if (H(b, dg)) return Lk(b, dg, bf), a.innerHTML = po, Jk(a, aj), !1;
        Lk(b, bf, dg);
        a.innerHTML = xa;
        Hk(a, aj);
        so(this, b);
        return !1
    };
    u.mb = function(a) {
        a = a || window.event;
        a = a.currentTarget || a.srcElement;
        (a = H(a, Tf) ? a : Al(a, p, Tf)) && (a = P(qh, a)) && (H(a, Qh) ? Jk(a, Qh) : Hk(a, Qh))
    };
    u.fb = function(a) {
        a = a || window.event;
        var b = a.currentTarget || a.srcElement;
        if (b = H(b, pi) ? b : Al(b, p, pi)) {
            var c = P(Ei, b);
            if (!c) {
                c = document.createElement(Ci);
                Hk(c, Ei);
                var d = document.createElement(p);
                Hk(d, Fi);
                d.appendChild(c);
                b.insertBefore(d, b.firstChild)
            }
            Jk(c, ne);
            var d = b.offsetWidth,
                e = getComputedStyle(b),
                d = d + (parseInt(e.marginLeft) + parseInt(e.marginRight)),
                d = Math.max(d, to(b));
            nl(c, {
                style: Bg + d + ji + d + hi + (a.pageX - b.offsetLeft - d / 2) + ii + (a.pageY - b.offsetTop - d / 2) + gi
            });
            Hk(c, ne)
        }
    };
    u.hb = function(a) {
        a = a || window.event;
        if (!a.currentTarget || a.currentTarget == a.srcElement || a.srcElement.tagName != ic) {
            var b = a.currentTarget || a.srcElement;
            b && !H(b, $i) && (b = b.parentNode);
            a.stopPropagation();
            a = H(b, pe) ? b : b.parentNode;
            H(a, dg) ? (uo(this, a), Lk(a, dg, bf)) : (so(this, a), ro(this, a), Lk(a, bf, dg))
        }
    };

    function so(a, b) {
        var c;
        c = b.getElementsByTagName(Ld);
        0 < c.length && !H(c[0], bi) ? c = !1 : (c = J.h(b, $h), c = parseInt(c.innerHTML.match(/\d+/), 10), c = b.getElementsByTagName(Xc).length < c);
        if (c) {
            var d = P(df, b);
            c = P(bi, b);
            c || (c = document.createElement(Ld), d ? d.appendChild(c) : b.appendChild(c), Hk(c, bi));
            d && nl(d, {
                style: g,
                "data-height": g
            });
            (d = Al(b, p, df)) && nl(d, {
                style: g,
                "data-height": g
            });
            d = document.createElement(Xc);
            d.appendChild(document.createTextNode(a.f.m().loadingMessage || bd));
            c.appendChild(d);
            go(a.f, xg, {
                    path: J.h(b, ai).href
                },
                null, Mc)
        }
    }

    function ro(a, b) {
        var c = P(df, b);
        c.getAttribute(Df) || qo(a, b);
        var d = c.getAttribute(Df) || to(c),
            e = d ? d + fi : t;
        window.setTimeout(function() {
            nl(c, {
                style: nh + e + Vb
            })
        }, 10)
    }

    function uo(a, b) {
        var c = P(df, b);
        c.getAttribute(Df) || qo(a, b);
        window.setTimeout(function() {
            nl(c, {
                style: oh
            })
        }, 10)
    }

    function qo(a, b) {
        var c = P(df, b);
        nl(c, {
            style: ph
        });
        for (var d = 0, e = O(p, df, c), f = 0; f < e.length; f++) {
            var h = e[f],
                m = Al(h, gh, $i);
            if (H(m, bf)) {
                var q = h.getAttribute(Df);
                q || (qo(a, m), q = h.getAttribute(Df));
                d += parseInt(q)
            }
        }
        d += to(c);
        c.setAttribute(Df, d);
        c.setAttribute(Oi, nh + d + gi);
        H(b, bf) && c.setAttribute(Oi, oh)
    }

    function to(a) {
        var b = a.offsetHeight;
        a = getComputedStyle(a);
        return b += parseInt(a.marginTop) + parseInt(a.marginBottom)
    }
    B("_BlogArchiveView", oo);

    function vo(a) {
        X.call(this, vo.a, a)
    }
    C(vo, X);
    vo.a = "Attribution";
    B("_AttributionView", vo);

    function wo(a, b, c) {
        if (z(b))(b = xo(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = xo(c, d);
                f && (c.style[f] = e)
            }
    }
    var yo = {};

    function xo(a, b) {
        var c = yo[b];
        if (!c) {
            var d = nk(b),
                c = d;
            void 0 === a.style[d] && (d = (dl ? Pd : cl ? hd : L ? zh : al ? md : null) + ok(d), void 0 !== a.style[d] && (c = d));
            yo[b] = c
        }
        return c
    }

    function zo(a, b) {
        var c = vl(a);
        return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null)) ? c[b] || c.getPropertyValue(b) || g : g
    }

    function Ao(a, b) {
        return zo(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }

    function Bo(a) {
        var b;
        try {
            b = a.getBoundingClientRect()
        } catch (c) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
        L && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
        return b
    }

    function Co(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = dl && !b && !c;
        return x(b) && !d || !a.getBoundingClientRect ? new Xk(b, c) : (a = Bo(a), new Xk(a.right - a.left, a.bottom - a.top))
    }

    function Do(a, b) {
        if (/^\d+px?$/.test(b)) return parseInt(b, 10);
        var c = a.style.left,
            d = a.runtimeStyle.left;
        a.runtimeStyle.left = a.currentStyle.left;
        a.style.left = b;
        var e = a.style.pixelLeft;
        a.style.left = c;
        a.runtimeStyle.left = d;
        return e
    }

    function Eo(a) {
        var b = vl(a),
            c = g;
        if (b.body.createTextRange && ul(b, a)) {
            b = b.body.createTextRange();
            b.moveToElementText(a);
            try {
                c = b.queryCommandValue(Lc)
            } catch (d) {
                c = g
            }
        }
        c || (c = Ao(a, pg));
        a = c.split(fb);
        1 < a.length && (c = a[0]);
        a: for (a = 0; 2 > a; a++)
            if (b = "\"'".charAt(a), c.charAt(0) == b && c.charAt(c.length - 1) == b) {
                c = c.substring(1, c.length - 1);
                break a
            }
        return c
    }
    var Fo = /[^\d]+$/,
        Go = {
            cm: 1,
            "in": 1,
            mm: 1,
            pc: 1,
            pt: 1
        },
        Ho = {
            em: 1,
            ex: 1
        };

    function Io(a) {
        var b = Ao(a, qg),
            c;
        c = (c = b.match(Fo)) && c[0] || null;
        if (b && fi == c) return parseInt(b, 10);
        if (L) {
            if (c in Go) return Do(a, b);
            if (a.parentNode && 1 == a.parentNode.nodeType && c in Ho) return a = a.parentNode, c = Ao(a, qg), Do(a, b == c ? Ib : b)
        }
        c = Q(xd, {
            style: lj
        });
        a.appendChild(c);
        b = c.offsetHeight;
        tl(c);
        return b
    };

    function Jo() {}
    Qj(Jo);
    Jo.prototype.a = 0;

    function Ko(a) {
        S.call(this);
        a || (a = bk || (bk = new Cl));
        this.L = a;
        this.N = null;
        this.R = !1;
        this.a = null;
        this.b = void 0;
        this.l = this.s = this.c = null
    }
    C(Ko, S);
    u = Ko.prototype;
    u.Ob = Jo.Y();
    u.ba = Jj(ge);

    function Lo(a) {
        a.b || (a.b = new bn(a));
        return a.b
    }
    u.Ba = function(a) {
        if (this.c && this.c != a) throw Error("Method not supported");
        Ko.u.Ba.call(this, a)
    };
    u.Oa = function() {
        this.a = this.L.b.createElement(Ac)
    };
    u.render = function(a) {
        if (this.R) throw Error("Component already rendered");
        this.a || this.Oa();
        a ? a.insertBefore(this.a, null) : this.L.b.body.appendChild(this.a);
        this.c && !this.c.R || this.oa()
    };
    u.oa = function() {
        this.R = !0;
        Mo(this, function(a) {
            !a.R && a.ba() && a.oa()
        })
    };

    function No(a) {
        Mo(a, function(a) {
            a.R && No(a)
        });
        a.b && dn(a.b);
        a.R = !1
    }
    u.A = function() {
        this.R && No(this);
        this.b && (this.b.U(), delete this.b);
        Mo(this, function(a) {
            a.U()
        });
        this.a && tl(this.a);
        this.c = this.a = this.l = this.s = null;
        Ko.u.A.call(this)
    };

    function Mo(a, b) {
        a.s && uk(a.s, b, void 0)
    }
    u.removeChild = function(a, b) {
        if (a) {
            var c = z(a) ? a : a.N || (a.N = Tb + (a.Ob.a++).toString(36)),
                d;
            this.l && c ? (d = this.l, d = (null !== d && c in d ? d[c] : void 0) || null) : d = null;
            a = d;
            if (c && a) {
                d = this.l;
                c in d && delete d[c];
                Ak(this.s, a);
                b && (No(a), a.a && tl(a.a));
                c = a;
                if (null == c) throw Error("Unable to set parent component");
                c.c = null;
                Ko.u.Ba.call(c, null)
            }
        }
        if (!a) throw Error("Child is not in parent component");
        return a
    };

    function Oo(a, b, c, d) {
        Ko.call(this, d);
        this.j = c || window;
        this.M = a;
        this.D = b;
        this.H = {};
        this.w = this.g = null;
        this.h = {};
        this.h.GOOGLEPLUS = {
            ca: Oc,
            la: this.yb
        };
        this.h.EMAIL = {
            ca: Bc,
            la: this.wb
        };
        this.h.FACEBOOK = {
            ca: Ic,
            la: this.xb
        };
        this.h.TWITTER = {
            ca: Kd,
            la: this.zb
        }
    }
    C(Oo, Ko);
    u = Oo.prototype;
    u.Oa = function() {
        var a = this.L,
            b = a.a(Ac, {
                style: Xh,
                "class": xh
            });
        this.g = a.a(Ac, {
            style: Wh,
            "class": wh
        });
        b.appendChild(this.g);
        var c = a.a(Ac, {
            "class": yh
        });
        c.innerText = Bd;
        c.textContent = Bd;
        this.g.appendChild(c);
        this.w = a.a(ic, {
            href: bh,
            "class": vh
        });
        this.w.innerHTML = Ua;
        c.appendChild(this.w);
        for (var d in this.h) {
            var c = a.a(ic, {
                    target: ce,
                    display: Be,
                    "class": uh + d.toLowerCase()
                }),
                e = a.a(xd),
                f = this.h[d];
            e.innerText = f.ca;
            e.textContent = f.ca;
            c.href = f.la.call(this);
            c.appendChild(e);
            this.g.appendChild(c);
            this.H[d] = c
        }
        this.a =
            b
    };
    u.oa = function() {
        Oo.u.oa.call(this);
        for (var a in this.H) {
            var b = this.H[a];
            b && Lo(this).S(b, Ze, this.va)
        }
        Lo(this).S(this.w, Ze, this.va);
        a = this.ba();
        Lo(this).S(a, Ze, this.va);
        this.Ha();
        Lo(this).S(this.j, si, this.Ha)
    };
    u.Ha = function() {
        var a = this.j.innerHeight,
            b = this.j.innerWidth,
            c = this.j.pageYOffset,
            d = this.j.pageXOffset,
            e = 0;
        200 < a && (e = (a - 200) / 2);
        wo(this.g, bj, e + c + fi);
        a = 0;
        230 < b && (a = (b - 230) / 2);
        wo(this.g, fh, a + d + fi)
    };
    u.zb = function() {
        return Rg + encodeURIComponent(this.M + Ub + this.D)
    };
    u.xb = function() {
        return Qg + encodeURIComponent(this.D) + Sa + encodeURIComponent(this.M)
    };
    u.wb = function() {
        return lh + encodeURIComponent(this.M) + Ca + encodeURIComponent(this.D)
    };
    u.yb = function() {
        return Sg + encodeURIComponent(this.D)
    };
    u.va = function() {
        var a = this.ba();
        a && (a.style.display = t)
    };

    function Po() {
        this.c = null;
        this.a = {};
        this.b = !1
    }
    Qj(Po);
    Po.prototype.i = function(a, b, c) {
        c.g || c.c || c.h || c.i || (a = this.a[a]) && 0 < a.length && (Qo(this), Zm()(a, b), c.preventDefault())
    };
    Po.prototype.h = function() {
        Qo(this);
        Xm(Pj)
    };

    function Qo(a) {
        a.b || (document.body.appendChild(Q(Yc, {
            type: Ti,
            rel: Pi,
            href: a.g
        })), a.b = !0)
    }
    var Ro = [/(https?:\/\/lighthouse-dev\.corp\.google\.com\/image)\/([^/]+)\/([^/]+\/[^/]+\/[^/]+)\/((s\d+)(-?[hR]?)\/)?([^/]+)/, /(https?:\/\/lh[3-6]+\.google\.[.a-z]+)\/([^/]+)\/([^/]+\/[^/]+\/[^/]+)\/((s\d+)(-?[hR]?)\/)?([^/]+)/, /(https:\/\/lh[3-6]+\.google\.com)\/([^/]+)\/([^/]+\/[^/]+\/[^/]+)\/((s\d+)(-?[hR]?)\/)?([^/]+)/, /(https?:\/\/lh[3-6]+\.ggpht\.com)\/([^/]+)\/([^/]+\/[^/]+\/[^/]+)\/((s\d+)(-?[hR]?)\/)?([^/]+)/, /(https?:\/\/lh[3-6]+\.googleusercontent\.com)\/([^/]+)\/([^/]+\/[^/]+\/[^/]+)\/((s\d+)(-?[hR]?)\/)?([^/]+)/,
        /(https?:\/\/[1-4]+\.bp\.blogspot\.[.a-z]+)\/([^/]+)\/([^/]+\/[^/]+\/[^/]+)\/((s\d+)(-?[hR]?)\/)?([^/]+)/, /(https?:\/\/bp[0-3]+\.blogger\.[.a-z]+)\/([^/]+)\/([^/]+\/[^/]+\/[^/]+)\/((s\d+)(-?[hR]?)\/)?([^/]+)/
    ];

    function So(a) {
        for (var b = 0; b < Ro.length; b++) {
            var c = a.match(Ro[b]);
            if (c) return c
        }
        return null
    };

    function To() {
        this.b = {};
        this.a = 0;
        this.i = [];
        this.c = [];
        var a = this;
        this.h = function() {
            Uo(a)
        }
    }

    function Vo(a) {
        for (var b = a.b, c = O(Vg, Jf, void 0), d = 0; d < c.length; d++)
            if (c[d].style.display == t && (c[d].style.display = g), 5 > d) {
                var e = c[d];
                e.longDesc != g && (e.src = e.longDesc)
            } else e = c[d].id, e == g && (e = se + d), b[e] = {
                Ma: c[d],
                key: e
            }, a.a++;
        0 != a.a && (a.l = R(window, si, a.h), a.j = R(window, mi, a.h), Wo(a))
    }

    function Uo(a) {
        a.g && window.clearTimeout(a.g);
        a.g = window.setTimeout(function() {
            a.g = null;
            Wo(a)
        }, 100)
    }

    function Wo(a) {
        if (!(0 > a.a))
            if (0 == a.a) em(a.l), em(a.j), a.a = -1;
            else {
                var b = !1,
                    c;
                for (c in a.b) {
                    var d;
                    a: {
                        d = a;
                        var e = a.b[c],
                            f = window.document,
                            f = f.compatMode == vc ? f.documentElement : f.body,
                            f = (new Xk(f.clientWidth, f.clientHeight)).height,
                            h;
                        h = e.Ma;
                        F(h);
                        1 == h.nodeType ? (h = Bo(h), h = new Wk(h.left, h.top)) : (h = h.changedTouches ? h.changedTouches[0] : h, h = new Wk(h.clientX, h.clientY));
                        h = h.y;
                        if (0 <= h && h <= f) d.i.push(e);
                        else if (0 < h && h < Math.round(2.25 * f)) d.c.push(e);
                        else if (0 > h && h > Math.round(-1.25 * f)) d.c.push(e);
                        else {
                            d = !1;
                            break a
                        }
                        d = !0
                    }
                    d && (b = !0)
                }
                if (b) {
                    b = a.i.concat(a.c);
                    for (c = 0; c < b.length; c++) d = b[c].Ma, d.longDesc != g && (d.src = d.longDesc), a.a--, delete a.b[b[c].key];
                    a.i = [];
                    a.c = []
                }
            }
    };
    var Xo = {
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        aquamarine: "#7fffd4",
        azure: "#f0ffff",
        beige: "#f5f5dc",
        bisque: "#ffe4c4",
        black: "#000000",
        blanchedalmond: "#ffebcd",
        blue: "#0000ff",
        blueviolet: "#8a2be2",
        brown: "#a52a2a",
        burlywood: "#deb887",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkgrey: "#a9a9a9",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkseagreen: "#8fbc8f",
        darkslateblue: "#483d8b",
        darkslategray: "#2f4f4f",
        darkslategrey: "#2f4f4f",
        darkturquoise: "#00ced1",
        darkviolet: "#9400d3",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1e90ff",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        forestgreen: "#228b22",
        fuchsia: "#ff00ff",
        gainsboro: "#dcdcdc",
        ghostwhite: "#f8f8ff",
        gold: "#ffd700",
        goldenrod: "#daa520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#adff2f",
        grey: "#808080",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
        ivory: "#fffff0",
        khaki: "#f0e68c",
        lavender: "#e6e6fa",
        lavenderblush: "#fff0f5",
        lawngreen: "#7cfc00",
        lemonchiffon: "#fffacd",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lightcyan: "#e0ffff",
        lightgoldenrodyellow: "#fafad2",
        lightgray: "#d3d3d3",
        lightgreen: "#90ee90",
        lightgrey: "#d3d3d3",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        lightskyblue: "#87cefa",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#b0c4de",
        lightyellow: "#ffffe0",
        lime: "#00ff00",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        magenta: "#ff00ff",
        maroon: "#800000",
        mediumaquamarine: "#66cdaa",
        mediumblue: "#0000cd",
        mediumorchid: "#ba55d3",
        mediumpurple: "#9370db",
        mediumseagreen: "#3cb371",
        mediumslateblue: "#7b68ee",
        mediumspringgreen: "#00fa9a",
        mediumturquoise: "#48d1cc",
        mediumvioletred: "#c71585",
        midnightblue: "#191970",
        mintcream: "#f5fffa",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        navy: "#000080",
        oldlace: "#fdf5e6",
        olive: "#808000",
        olivedrab: "#6b8e23",
        orange: "#ffa500",
        orangered: "#ff4500",
        orchid: "#da70d6",
        palegoldenrod: "#eee8aa",
        palegreen: "#98fb98",
        paleturquoise: "#afeeee",
        palevioletred: "#db7093",
        papayawhip: "#ffefd5",
        peachpuff: "#ffdab9",
        peru: "#cd853f",
        pink: "#ffc0cb",
        plum: "#dda0dd",
        powderblue: "#b0e0e6",
        purple: "#800080",
        red: "#ff0000",
        rosybrown: "#bc8f8f",
        royalblue: "#4169e1",
        saddlebrown: "#8b4513",
        salmon: "#fa8072",
        sandybrown: "#f4a460",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        skyblue: "#87ceeb",
        slateblue: "#6a5acd",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#fffafa",
        springgreen: "#00ff7f",
        steelblue: "#4682b4",
        tan: "#d2b48c",
        teal: "#008080",
        thistle: "#d8bfd8",
        tomato: "#ff6347",
        turquoise: "#40e0d0",
        violet: "#ee82ee",
        wheat: "#f5deb3",
        white: "#ffffff",
        whitesmoke: "#f5f5f5",
        yellow: "#ffff00",
        yellowgreen: "#9acd32"
    };

    function Yo(a) {
        var b = {};
        a = String(a);
        var c = a.charAt(0) == ja ? a : ja + a;
        if (Zo.test(c)) {
            a = c;
            if (!Zo.test(a)) throw Error(Za + a + "' is not a valid hex color");
            4 == a.length && (a = a.replace($o, ka));
            b.za = a.toLowerCase();
            b.type = Dg;
            return b
        }
        a: {
            var d = a.match(ap);
            if (d) {
                var c = Number(d[1]),
                    e = Number(d[2]),
                    d = Number(d[3]);
                if (0 <= c && 255 >= c && 0 <= e && 255 >= e && 0 <= d && 255 >= d) {
                    c = [c, e, d];
                    break a
                }
            }
            c = []
        }
        if (c.length) {
            e = c[0];
            a = c[1];
            c = c[2];
            e = Number(e);
            a = Number(a);
            c = Number(c);
            if (isNaN(e) || 0 > e || 255 < e || isNaN(a) || 0 > a || 255 < a || isNaN(c) || 0 > c || 255 <
                c) throw Error('"(' + e + fb + a + fb + c + '") is not a valid RGB color');
            e = bp(e.toString(16));
            a = bp(a.toString(16));
            c = bp(c.toString(16));
            b.za = ja + e + a + c;
            b.type = oi;
            return b
        }
        if (Xo && (c = Xo[a.toLowerCase()])) return b.za = c, b.type = Ch, b;
        throw Error(a + " is not a valid color string");
    }
    var $o = /#(.)(.)(.)/,
        Zo = /^#(?:[0-9a-f]{3}){1,2}$/i,
        ap = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;

    function bp(a) {
        return 1 == a.length ? Bb + a : a
    };

    function cp(a) {
        X.call(this, tc, a)
    }
    C(cp, X);
    u = cp.prototype;
    u.Ca = null;
    u.ra = null;
    u.C = function() {
        var a = this.f.m();
        this.Ca = a.totalItems;
        this.ra = a.numItemsToShow;
        0 != this.ra && this.Ca > this.ra && (W(this.f, yi).onclick = this.Ta.bind(this), W(this.f, zi).onclick = this.Ta.bind(this));
        R(window, ih, this.Za)
    };
    u.Ta = function() {
        var a = V(this.f, Pe);
        if (null != a) {
            for (var a = a.getElementsByTagName(gh), b = this.ra; b < this.Ca; b++) {
                var c = a[b];
                c.style.display = c.style.display == t ? Be : t
            }
            a = W(this.f, yi);
            a.style.display = a.style.display == t ? Xg : t;
            a = W(this.f, zi);
            a.style.display = a.style.display == t ? Xg : t
        }
    };
    u.Za = function() {
        for (var a = 0, b = document.images.length; a < b; a++) {
            var c = document.images[a],
                d = null;
            if (d = c.getAttribute(Ef)) R(c, Yf, function() {
                this.style.visibility = Eg
            }), c.src = d
        }
    };
    B("_BlogListView", cp);
    var dp = /^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;

    function ep(a) {
        X.call(this, xc, a);
        this.a = a.o;
        this.c = this.a.data
    }
    C(ep, X);
    B("_ContactFormView", ep);
    ep.prototype.C = function() {
        var a = N(V(this.f, uf));
        if (a) {
            var b = this;
            a.onclick = function() {
                fp(b) && gp(b)
            }
        }
    };

    function fp(a) {
        N(V(a.f, l)).className = l;
        N(V(a.f, l)).innerHTML = g;
        N(V(a.f, n)).className = n;
        N(V(a.f, n)).innerHTML = g;
        var b = document.createElement(Vg);
        b.src = wb;
        b.className = pf;
        b.onclick = function() {
            N(V(a.f, l)).className = l;
            N(V(a.f, l)).innerHTML = g
        };
        var c = dk(N(V(a.f, qf)).value);
        if (!dp.test(c)) return N(V(a.f, l)).className = sf, N(V(a.f, l)).innerHTML = a.c.contactFormInvalidEmailMsg, N(V(a.f, l)).appendChild(b), !1;
        c = N(V(a.f, rf)).value;
        return null == c || dk(c) == g ? (N(V(a.f, l)).className = sf, N(V(a.f, l)).innerHTML = a.c.contactFormEmptyMessageMsg,
            N(V(a.f, l)).appendChild(b), !1) : !0
    }

    function gp(a) {
        N(V(a.f, uf)).className = of;
        N(V(a.f, uf)).disabled = !0;
        N(V(a.f, n)).className = vf;
        N(V(a.f, n)).innerHTML = a.c.contactFormMessageSendingMsg;
        var b = encodeURIComponent(dk(N(V(a.f, tf)).value)),
            c = encodeURIComponent(dk(N(V(a.f, qf)).value)),
            d = encodeURIComponent(dk(N(V(a.f, rf)).value)),
            b = [Bh + b, Wf + c, sh + d, Ie + encodeURIComponent(a.c.blogId)],
            c = a.c.submitUrl;
        if (window.XDomainRequest && L && !M(Eb)) {
            var e = new XDomainRequest;
            e.onload = function() {
                var b = eval($a + e.responseText + cb),
                    b = eval(b.details.emailSentStatus);
                hp(a, b)
            };
            e.open(Yh, c, !0);
            e.send(b.join(ua))
        } else Cn(c, a.ha.bind(a), nd, b.join(ua))
    }
    ep.prototype.ha = function(a) {
        a = a.target;
        var b = eval($a + Mn(a) + cb),
            b = eval(b.details.emailSentStatus);
        hp(this, Ln(a) && b)
    };

    function hp(a, b) {
        N(V(a.f, n)).className = vf;
        b ? (N(V(a.f, tf)).value = g, N(V(a.f, qf)).value = g, N(V(a.f, rf)).value = g, N(V(a.f, n)).innerHTML = a.c.contactFormMessageSentMsg) : N(V(a.f, n)).innerHTML = a.c.contactFormMessageNotSentMsg;
        setTimeout(function() {
            N(V(a.f, n)).className = n;
            N(V(a.f, n)).innerHTML = g;
            N(V(a.f, uf)).className = nf;
            N(V(a.f, uf)).removeAttribute(Mf)
        }, 3E3)
    };

    function ip(a) {
        X.call(this, zc, a)
    }
    C(ip, X);
    ip.prototype.C = function() {
        var a = new lo;
        google.load(ui, Cb, {
            callback: A(this.a, this),
            language: a.m(De)
        });
        a = document.getElementById(fj);
        if (!a) {
            a = document.createElement(Ac);
            a.id = fj;
            var b = document.createElement(ic);
            b.name = dj;
            a.appendChild(b);
            b = document.createElement(Ac);
            b.id = gj;
            a.appendChild(b);
            b = document.createElement(Ac);
            b.id = ej;
            b.className = Ag;
            b.innerHTML = Ia;
            a.appendChild(b);
            (b = document.getElementById(mh)) || (b = document.getElementsByTagName(Re)[0]);
            b.insertBefore(a, b.firstChild)
        }
    };
    ip.prototype.a = function() {
        var a = new GSearchControl,
            b = this.f.m();
        if (null != V(this.f, sg)) {
            var c = {
                _enableApiary_: !0
            };
            if (b.includeBlog) {
                var d;
                b.cse_ua ? d = (new google.search.CustomSearchControl({
                    crefUrl: b.blogUrl + yf
                }, c)).getWebSearcher() : (d = new GblogSearch, d.setSiteRestriction(b.blogUrl));
                d.setUserDefinedLabel(b.thisBlogMsg);
                a.addSearcher(d)
            }
            b.includePostLinks && (b.cse_ua ? d = (new google.search.CustomSearchControl({
                crefUrl: b.blogUrl + zf
            }, c)).getWebSearcher() : (d = new GwebSearch, d.setSiteRestriction({
                crefUrl: b.blogUrl +
                    zf
            })), d.setUserDefinedLabel(b.linkedFromHereMsg), a.addSearcher(d));
            d = b.linkLists;
            for (var e = 0; e < d.length; e++) {
                var f;
                b.cse_ua ? f = (new google.search.CustomSearchControl({
                    crefUrl: b.blogUrl + zf
                }, c)).getWebSearcher() : f = new GwebSearch;
                f.setSiteRestriction({
                    crefUrl: b.blogUrl + zf
                }, d[e].id.toLowerCase());
                f.setUserDefinedLabel(d[e].title);
                a.addSearcher(f)
            }
            b.includeWeb && (f = new GwebSearch, b.cse_ua ? f = (new google.search.CustomSearchControl({
                    crefUrl: b.blogUrl + Af
                }, c)).getWebSearcher() : f = new GwebSearch, f.setUserDefinedLabel(b.theWebMsg),
                a.addSearcher(f));
            b = new GSearchForm(!1, W(this.f, sg));
            c = new GdrawOptions;
            c.setDrawMode(GSearchControl.DRAW_MODE_TABBED);
            c.setInput(b.input);
            a.setNoResultsString(GSearchControl.NO_RESULTS_DEFAULT_STRING);
            a.draw(document.getElementById(gj), c);
            b.input.onkeyup = b.input.onpaste = null;
            b.setOnSubmitCallback(null, A(jp, null, b, a));
            document.getElementById(ej).onclick = A(kp, null, a);
            lp(!1)
        }
    };

    function jp(a, b) {
        var c = a.input.value;
        if (!c) return kp(b), !1;
        b.execute(c);
        lp(!0);
        var c = window.location.href,
            d = c.indexOf(ja);
        0 <= d && (c = c.substring(0, d));
        window.location.href = c + oa;
        return !0
    }

    function kp(a) {
        a.clearAllResults();
        lp(!1)
    }

    function lp(a) {
        document.getElementById(ej).style.display = a ? Be : t
    }
    B("_CustomSearchView", ip);

    function mp(a) {
        X.call(this, mp.a, a)
    }
    C(mp, X);
    mp.a = "Example";
    B("_ExampleView", mp);

    function np(a) {
        X.call(this, np.a, a)
    }
    C(np, X);
    np.a = "FeaturedPost";
    B("_FeaturedPostView", np);

    function Y(a, b) {
        this.g = this.j = this.c = g;
        this.h = null;
        this.i = this.l = g;
        this.b = !1;
        var c;
        a instanceof Y ? (this.b = x(b) ? b : a.b, op(this, a.c), this.j = a.j, this.g = a.g, pp(this, a.h), qp(this, a.l), rp(this, a.a.clone()), this.i = a.i) : a && (c = String(a).match(qn)) ? (this.b = !!b, op(this, c[1] || g, !0), this.j = sp(c[2] || g), this.g = sp(c[3] || g, !0), pp(this, c[4]), qp(this, c[5] || g, !0), rp(this, c[6] || g, !0), this.i = sp(c[7] || g)) : (this.b = !!b, this.a = new tp(null, 0, this.b))
    }
    Y.prototype.toString = function() {
        var a = [],
            b = this.c;
        b && a.push(up(b, vp, !0), Tb);
        var c = this.g;
        if (c || b == jg) a.push(tb), (b = this.j) && a.push(up(b, vp, !0), hc), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, ra)), c = this.h, null != c && a.push(Tb, String(c));
        if (c = this.l) this.g && c.charAt(0) != sb && a.push(sb), a.push(up(c, c.charAt(0) == sb ? wp : xp, !0));
        (c = this.a.toString()) && a.push(dc, c);
        (c = this.i) && a.push(ja, up(c, yp));
        return a.join(g)
    };
    Y.prototype.clone = function() {
        return new Y(this)
    };

    function op(a, b, c) {
        a.c = c ? sp(b, !0) : b;
        a.c && (a.c = a.c.replace(/:$/, g))
    }

    function pp(a, b) {
        if (b) {
            b = Number(b);
            if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
            a.h = b
        } else a.h = null
    }

    function qp(a, b, c) {
        a.l = c ? sp(b, !0) : b;
        return a
    }

    function rp(a, b, c) {
        b instanceof tp ? (a.a = b, zp(a.a, a.b)) : (c || (b = up(b, Ap)), a.a = new tp(b, 0, a.b))
    }

    function Bp(a, b, c) {
        var d = a.a;
        Cp(d);
        d.c = null;
        b = Dp(d, b);
        Ep(d, b) && (d.b -= U(d.a, b).length);
        T(d.a, b, [c]);
        d.b++;
        return a
    }

    function sp(a, b) {
        return a ? b ? decodeURI(a.replace(/%25/g, sa)) : decodeURIComponent(a) : g
    }

    function up(a, b, c) {
        return z(a) ? (a = encodeURI(a).replace(b, Fp), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, ra)), a) : null
    }

    function Fp(a) {
        a = a.charCodeAt(0);
        return qa + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    }
    var vp = /[#\/\?@]/g,
        xp = /[\#\?:]/g,
        wp = /[\#\?]/g,
        Ap = /[\#\?@]/g,
        yp = /#/g;

    function tp(a, b, c) {
        this.b = this.a = null;
        this.c = a || null;
        this.g = !!c
    }

    function Cp(a) {
        a.a || (a.a = new gn, a.b = 0, a.c && rn(a.c, function(b, c) {
            var d = decodeURIComponent(b.replace(/\+/g, k));
            Cp(a);
            a.c = null;
            var d = Dp(a, d),
                e = U(a.a, d);
            e || T(a.a, d, e = []);
            e.push(c);
            a.b++
        }))
    }
    u = tp.prototype;
    u.B = function() {
        Cp(this);
        return this.b
    };

    function Gp(a, b) {
        Cp(a);
        b = Dp(a, b);
        kn(a.a.b, b) && (a.c = null, a.b -= U(a.a, b).length, jn(a.a, b))
    }
    u.clear = function() {
        this.a = this.c = null;
        this.b = 0
    };
    u.O = function() {
        Cp(this);
        return 0 == this.b
    };

    function Ep(a, b) {
        Cp(a);
        b = Dp(a, b);
        return kn(a.a.b, b)
    }
    u.I = function() {
        Cp(this);
        for (var a = this.a.F(), b = this.a.I(), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
        return c
    };
    u.F = function(a) {
        Cp(this);
        var b = [];
        if (z(a)) Ep(this, a) && (b = Bk(b, U(this.a, Dp(this, a))));
        else {
            a = this.a.F();
            for (var c = 0; c < a.length; c++) b = Bk(b, a[c])
        }
        return b
    };

    function Hp(a, b, c) {
        Gp(a, b);
        0 < c.length && (a.c = null, T(a.a, Dp(a, b), Ck(c)), a.b += c.length)
    }
    u.toString = function() {
        if (this.c) return this.c;
        if (!this.a) return g;
        for (var a = [], b = this.a.I(), c = 0; c < b.length; c++)
            for (var d = b[c], e = encodeURIComponent(String(d)), d = this.F(d), f = 0; f < d.length; f++) {
                var h = e;
                d[f] !== g && (h += bc + encodeURIComponent(String(d[f])));
                a.push(h)
            }
        return this.c = a.join(ua)
    };
    u.clone = function() {
        var a = new tp;
        a.c = this.c;
        this.a && (a.a = this.a.clone(), a.b = this.b);
        return a
    };

    function Dp(a, b) {
        var c = String(b);
        a.g && (c = c.toLowerCase());
        return c
    }

    function zp(a, b) {
        b && !a.g && (Cp(a), a.c = null, a.a.forEach(function(a, b) {
            var e = b.toLowerCase();
            b != e && (Gp(this, b), Hp(this, e, a))
        }, a));
        a.g = b
    };

    function Ip(a) {
        X.call(this, rc, a);
        this.a = a.o;
        if (this.a.data) {
            a = new lo;
            this.g = this.a.data.showBacklinks;
            this.c = a.m(Ce);
            this.j = a.m(He);
            this.i = a.m(Fe);
            this.h = a.m(Ge);
            if (this.a.data.lightboxEnabled) {
                var b = this.a.data.lightboxModuleUrl,
                    c = this.a.data.lightboxCssUrl,
                    d = Po.Y(),
                    e = om(b);
                an(Wm.Y(), b, e);
                d.g = c;
                b = O(Ac, Zh, this.a.a);
                for (c = 0; c < b.length; c++) {
                    for (var e = gg + Jp++, d = Po.Y(), f = O(Uc, void 0, b[c]), h = f.length, m = [], q = 0; q < h; q++) {
                        var w = f[q].src,
                            D = null,
                            I = Al(f[q], ic);
                        if (I) {
                            I = I.href;
                            if (I != w) {
                                var Oa = w,
                                    D = So(I),
                                    Oa = So(Oa);
                                if (D && Oa && D[D.length - 1] == Oa[Oa.length - 1]) D = w, w = I, w = (I = So(w)) && G(I, kb) ? w.replace(/\/s(\d+)-h\//, yb) : w;
                                else continue
                            }
                            m.push({
                                imageUrl: w,
                                thumbnailUrl: D
                            });
                            R(f[q], Ze, A(d.i, d, e, m.length - 1))
                        }
                    }
                    0 < m.length && (d.a[e] = m, d.c || (d.c = R(window, ih, d.h, !1, d)))
                }
            }
            this.a.data.mobile && (this.b = new Oo(a.m(Ee), this.c))
        }
    }
    C(Ip, X);
    u = Ip.prototype;
    u.P = function(a, b) {
        if (a == ve) {
            this.g = !1;
            var c = V(this.f, we);
            c && (c.innerHTML = b);
            for (var c = O(Ci, ue, this.a.a), d = 0; d < c.length; d++) c[d].onclick = this.kb.bind(this);
            c = V(this.f, xe);
            null != c && (c.onclick = this.Va.bind(this, c.href))
        } else Ip.u.P.call(this, a, b)
    };
    u.kb = function(a) {
        a = a || window.event;
        for (a = (a.srcElement || a.target).parentNode; a && !H(a, te);) a = a.parentNode;
        a && (H(a, eg) ? (Jk(a, eg), Hk(a, cf)) : (Hk(a, eg), Jk(a, cf)))
    };
    u.C = function() {
        var a = document.getElementById(this.a.b);
        this.g && go(this.f, ve, {
            postID: this.a.data.postId
        }, function(a) {
            500 <= Nk(a) ? (window.console && console.log && (a = a.responseText.match(/bX-\w*/)[0], console.log(Cc + a)), a = !1) : a = !0;
            return a
        }, Mc);
        if (this.a.data.mobile) {
            var b = N(gf);
            Kp() ? b && (b.style.display = Be) : b && (b.style.display = t);
            b = V(this.f, hf);
            null != b && (b.onclick = this.lb);
            (b = N(th)) && this.b && (b.onclick = A(this.Ub, this))
        }
        this.l = new To;
        Vo(this.l);
        var c = P(af, a);
        if (c && this.i == Ah && window.gapi && gapi.comments &&
            gapi.comments.render) {
            var d = this.a.data.iframeCommentsId;
            c.id = d;
            var e = this.a.data.legacyCommentModerationUrl,
                f = this.a.data.viewType,
                h = Lp(this.j),
                m = this.c;
            window.setTimeout(function() {
                var a;
                if (Ao(c, Nf) != t) a = Co(c);
                else {
                    a = c.style;
                    var b = a.display,
                        q = a.visibility,
                        Oa = a.position;
                    a.visibility = Eg;
                    a.position = ie;
                    a.display = Xg;
                    var Sq = Co(c);
                    a.display = b;
                    a.position = Oa;
                    a.visibility = q;
                    a = Sq
                }
                gapi.comments.render(d, {
                    href: h,
                    query: m,
                    first_party_property: pc,
                    legacy_comment_moderation_url: e,
                    view_type: f,
                    width: a.width
                })
            }, 10)
        }
        var q =
            ml(a);
        q && this.i == Ah && window.gapi && gapi.commentcount && gapi.commentcount.render && (f = this.a.data.viewType, window.setTimeout(function() {
            for (var a = 0; a < q.length; a++) {
                var b = q[a],
                    c = ee + a + Math.random() * Math.pow(10, 17);
                b.id = c;
                var d = b.getAttribute(Gf),
                    e = b.getAttribute(Ff),
                    h = b.getAttribute(Cf),
                    m = Eo(b),
                    Tq = Io(b),
                    Vq = Mp(b);
                b.style.position = ie;
                b.style.left = hb;
                gapi.commentcount.render(c, {
                    linkify: !0,
                    href: e,
                    query: d,
                    onclick: Zj(function(a) {
                        window.location.href = a + na
                    }, e),
                    onready: Zj(function(a) {
                        a.style.verticalAlign = Si;
                        a.style.position =
                            g;
                        a.style.left = g
                    }, b),
                    preexisting_count: h,
                    view_type: f,
                    "font-family": m,
                    "font-size": Tq + fi,
                    color: Vq
                })
            }
        }, 10));
        this.h && (a = document.getElementsByTagName(Re)[0]) && a.appendChild(Q(Ug, {
            src: this.h,
            style: Of
        }))
    };

    function Lp(a) {
        a = a instanceof Y ? a.clone() : new Y(a, void 0);
        Gp(a.a, kh);
        return a.toString()
    }

    function Mp(a) {
        a = zo(a, ef) || (a.currentStyle ? a.currentStyle.color : null) || a.style && a.style.color;
        return Yo(a).za
    }
    u.Ub = function() {
        if (this.b.R) {
            var a = this.b.ba();
            a && (a.style.display = g)
        } else this.b.render()
    };

    function Kp() {
        var a = window.location.href.split(ja);
        return a[a.length - 1] && a[a.length - 1] == jf
    }
    u.lb = function() {
        var a = N(gf);
        a && (a.style.display = a.style.display == t ? Be : t);
        return !1
    };
    u.Va = function(a) {
        var b = g;
        document.selection ? b = document.selection.createRange().text : window.getSelection ? b = window.getSelection() : document.getSelection && (b = document.getSelection());
        window.open(a + ec + encodeURIComponent(b) + Wa + encodeURIComponent(window.location.href) + Ha + encodeURIComponent(document.title), Le, ti);
        return !1
    };
    var Jp = 0;
    B("_BlogView", Ip);
    /*
     Portions of this code are from MochiKit, received by
     The Closure Authors under the MIT license. All other code is Copyright
     2005-2009 The Closure Authors. All Rights Reserved.
    */
    function Np(a, b) {
        this.i = [];
        this.D = a;
        this.K = b || null;
        this.g = this.a = !1;
        this.c = void 0;
        this.s = this.w = this.j = !1;
        this.h = 0;
        this.b = null;
        this.l = 0
    }
    Np.prototype.cancel = function(a) {
        if (this.a) this.c instanceof Np && this.c.cancel();
        else {
            if (this.b) {
                var b = this.b;
                delete this.b;
                a ? b.cancel(a) : (b.l--, 0 >= b.l && b.cancel())
            }
            this.D ? this.D.call(this.K, this) : this.s = !0;
            this.a || Op(this, new Pp)
        }
    };
    Np.prototype.J = function(a, b) {
        this.j = !1;
        Qp(this, a, b)
    };

    function Qp(a, b, c) {
        a.a = !0;
        a.c = c;
        a.g = !b;
        Rp(a)
    }

    function Sp(a) {
        if (a.a) {
            if (!a.s) throw new Tp;
            a.s = !1
        }
    }
    Np.prototype.H = function(a) {
        Sp(this);
        Up(a);
        Qp(this, !0, a)
    };

    function Op(a, b) {
        Sp(a);
        Up(b);
        Qp(a, !1, b)
    }

    function Up(a) {
        F(!(a instanceof Np), kc)
    }

    function Vp(a, b, c, d) {
        F(!a.w, qc);
        a.i.push([b, c, d]);
        a.a && Rp(a)
    }
    Np.prototype.then = function(a, b, c) {
        var d, e, f = new Dm(function(a, b) {
            d = a;
            e = b
        });
        Vp(this, d, function(a) {
            a instanceof Pp ? f.cancel() : e(a)
        });
        return f.then(a, b, c)
    };
    Bm(Np);

    function Wp(a) {
        return wk(a.i, function(a) {
            return Tj(a[1])
        })
    }

    function Rp(a) {
        if (a.h && a.a && Wp(a)) {
            var b = a.h,
                c = Xp[b];
            c && (v.clearTimeout(c.N), delete Xp[b]);
            a.h = 0
        }
        a.b && (a.b.l--, delete a.b);
        for (var b = a.c, d = c = !1; a.i.length && !a.j;) {
            var e = a.i.shift(),
                f = e[0],
                h = e[1],
                e = e[2];
            if (f = a.g ? h : f) try {
                var m = f.call(e || a.K, b);
                x(m) && (a.g = a.g && (m == b || m instanceof Error), a.c = b = m);
                if (Cm(b) || typeof v.Promise === r && b instanceof v.Promise) d = !0, a.j = !0
            } catch (q) {
                b = q, a.g = !0, Wp(a) || (c = !0)
            }
        }
        a.c = b;
        d && (m = A(a.J, a, !0), d = A(a.J, a, !1), b instanceof Np ? (Vp(b, m, d), b.w = !0) : b.then(m, d));
        c && (b = new Yp(b), Xp[b.N] =
            b, a.h = b.N)
    }

    function Tp() {
        E.call(this)
    }
    C(Tp, E);
    Tp.prototype.message = "Deferred has already fired";
    Tp.prototype.name = "AlreadyCalledError";

    function Pp() {
        E.call(this)
    }
    C(Pp, E);
    Pp.prototype.message = "Deferred was canceled";
    Pp.prototype.name = "CanceledError";

    function Yp(a) {
        this.N = v.setTimeout(A(this.b, this), 0);
        this.a = a
    }
    Yp.prototype.b = function() {
        F(Xp[this.N], wc);
        delete Xp[this.N];
        throw this.a;
    };
    var Xp = {};

    function Zp(a, b) {
        var c = b || {},
            d = c.document || document,
            e = document.createElement(wd),
            f = {
                Sa: e,
                T: void 0
            },
            h = new Np($p, f),
            m = null,
            q = null != c.timeout ? c.timeout : 5E3;
        0 < q && (m = window.setTimeout(function() {
            aq(e, !0);
            Op(h, new bq(1, Id + a))
        }, q), f.T = m);
        e.onload = e.onreadystatechange = function() {
            e.readyState && e.readyState != jh && e.readyState != kf || (aq(e, c.Db || !1, m), h.H(null))
        };
        e.onerror = function() {
            aq(e, !0, m);
            Op(h, new bq(0, Ec + a))
        };
        f = c.attributes || {};
        Vk(f, {
            type: Ui,
            charset: Md,
            src: a
        });
        nl(e, f);
        cq(d).appendChild(e);
        return h
    }

    function cq(a) {
        var b = a.getElementsByTagName(Pc);
        return b && 0 != b.length ? b[0] : a.documentElement
    }

    function $p() {
        if (this && this.Sa) {
            var a = this.Sa;
            a && a.tagName == wd && aq(a, !0, this.T)
        }
    }

    function aq(a, b, c) {
        null != c && v.clearTimeout(c);
        a.onload = Pj;
        a.onerror = Pj;
        a.onreadystatechange = Pj;
        b && window.setTimeout(function() {
            tl(a)
        }, 0)
    }

    function bq(a, b) {
        var c = Wc + a + cb;
        b && (c += Ub + b);
        E.call(this, c)
    }
    C(bq, E);

    function dq(a, b) {
        this.b = new Y(a);
        this.a = b ? b : Ue;
        this.T = 5E3
    }
    var eq = 0;

    function fq(a, b, c, d) {
        b = b || null;
        var e = Zd + (eq++).toString(36) + ak().toString(36);
        v._callbacks_ || (v._callbacks_ = {});
        var f = a.b.clone();
        if (b)
            for (var h in b)
                if (!b.hasOwnProperty || b.hasOwnProperty(h)) {
                    var m = f,
                        q = h,
                        w = b[h];
                    y(w) || (w = [String(w)]);
                    Hp(m.a, q, w)
                }
        c && (v._callbacks_[e] = gq(e, c), c = a.a, h = de + e, y(h) || (h = [String(h)]), Hp(f.a, c, h));
        a = Zp(f.toString(), {
            timeout: a.T,
            Db: !0
        });
        Vp(a, null, hq(e, b, d), void 0)
    }
    dq.prototype.cancel = function(a) {
        a && (a.Gb && a.Gb.cancel(), a.N && iq(a.N, !1))
    };

    function hq(a, b, c) {
        return function() {
            iq(a, !1);
            c && c(b)
        }
    }

    function gq(a, b) {
        return function(c) {
            iq(a, !0);
            b.apply(void 0, arguments)
        }
    }

    function iq(a, b) {
        v._callbacks_[a] && (b ? delete v._callbacks_[a] : v._callbacks_[a] = Pj)
    };

    function jq(a) {
        X.call(this, Jc, a)
    }
    C(jq, X);
    jq.prototype.C = function() {
        if (this.a = V(this.f, hg)) {
            var a = this.f.m(),
                a = new kq(a.feedUrl, this.a, {
                    numItemsShow: a.numItemsShow,
                    showItemAuthor: a.showItemAuthor,
                    showItemDate: a.showItemDate,
                    linkTarget: a.openLinksInNewWindow ? ce : fe
                }),
                b = new dq(ub);
            b.T = -1;
            fq(b, {
                q: a.h,
                num: a.a.numItemsShow,
                output: dh,
                v: Db
            }, A(a.c, a))
        }
    };
    var lq = {
        moduleTitle: null,
        feedUrl: function(a) {
            a = a.replace(/^\s+/, g).replace(/\s+$/, g);
            if (0 == a.length) return LayoutsMessages.FIELD_CANNOT_BE_BLANK
        },
        numItemsShow: function(a, b) {
            return function(c) {
                c = parseInt(c, 10);
                if (isNaN(c)) return LayoutsMessages.MUST_SPECIFY_A_NUMBER;
                if (c < a) return LayoutsMessages.NUMBER_TOO_SMALL + k + a;
                if (c > b) return LayoutsMessages.NUMBER_TOO_LARGE + k + b
            }
        }(1, 5),
        showItemDate: null,
        showItemAuthor: null,
        securityToken: null,
        openLinksInNewWindow: null
    };

    function kq(a, b, c) {
        this.h = a;
        this.b = b;
        this.a = c
    }
    kq.prototype.c = function(a) {
        sl(this.b);
        if (200 == a.responseStatus) {
            var b = document.createElement(hj);
            this.b.appendChild(b);
            for (var c = 0; c < a.responseData.feed.entries.length; c++) {
                var d = a.responseData.feed.entries[c],
                    e = document.createElement(gh);
                b.appendChild(e);
                var f;
                (f = this.a.previewMode) || (f = (new Y(d.link)).c, f = !(f == g || f == Gg || f == Mg));
                f = f ? Q(ge, {
                    href: ch
                }, d.title) : Q(ge, {
                    href: d.link
                }, d.title);
                f.target = this.a.linkTarget;
                e.appendChild(Q(Ci, {
                    "class": ah
                }, f));
                this.a.showItemDate && (f = Q(Ci, {
                        "class": $g
                    }, Ij + (new Date(d.publishedDate)).toLocaleDateString()),
                    e.appendChild(f));
                this.a.showItemAuthor && (d = Q(Ci, {
                    "class": Zg
                }, Ij + d.author), e.appendChild(d))
            }
            this.g && this.g(a.responseData.feed)
        } else this.b.appendChild(Q(Ci, null, Dc)), this.i && this.i()
    };
    B("_FeedView", jq);
    jq._setConfigurationOptions = function() {
        var a;
        lq.security_token = null;
        a || (a = lf);
        var b = document.forms[a].widgetId.value,
            c = document.forms[a].widgetType.value;
        a = document.forms[a];
        var d = !0,
            e = {},
            f;
        for (f in lq) {
            var h = jo(a[f]);
            if (x(h)) {
                var m = lq[f],
                    q = ko(f);
                q && (q.innerHTML = g, q.className = ag);
                m && (m = m(h)) && (ho(f, m), d = !1);
                e[f] = h
            }
        }
        d && J.Fb(e, b, c)
    };

    function mq(a) {
        X.call(this, mq.a, a)
    }
    C(mq, X);
    mq.a = "FollowByEmail";
    B("_FollowByEmailView", mq);

    function nq(a) {
        X.call(this, Kc, a);
        this.a = a.o
    }
    C(nq, X);

    function oq(a) {
        window.open(a, ce, Cg)
    }
    nq.prototype.P = function(a, b) {
        a == wg ? (pq(this, b), qq(this), rq(this, b)) : nq.u.P.call(this, a, b)
    };
    nq.prototype.C = function() {
        var a;
        a: {
            a = this.a.data;
            for (var b in a) {
                a = !1;
                break a
            }
            a = !0
        }
        a || (qq(this), rq(this, this.a.data))
    };

    function pq(a, b) {
        for (var c = P(ng, a.a.a), c = Fk(b.followers, O(ge, lg, c)), d = 0; d < c.length; d++) {
            var e = c[d][0],
                f = c[d][1];
            f.setAttribute(Hf, e.viewUrl);
            f.onclick = function() {
                return !1
            };
            f = P(mg, f);
            f.setAttribute(Hi, e.thumbnailUrl);
            f.setAttribute(Zi, e.displayName)
        }
    }

    function qq(a) {
        var b = P(ng, a.a.a);
        if (b)
            for (var b = O(ge, lg, b), c = 0; c < b.length; c++) {
                var d = b[c];
                d.getAttribute(Hf) && (d.onclick = A(oq, a, d.getAttribute(Hf)))
            }
    }

    function rq(a, b) {
        var c = P(og, a.a.a);
        c && (b.nextTimestamp ? (c.style.display = Xg, c = P(Eh, c), c.href = ja, c.onclick = function() {
            return !1
        }, fm(c), R(c, Ze, A(nq.prototype.b, a, b.nextTimestamp))) : c.style.display = t)
    }
    nq.prototype.b = function(a) {
        go(this.f, wg, {
            fcMT: a
        }, null, Mc)
    };
    B("_FollowersView", nq);

    function sq(a) {
        X.call(this, Nc, a)
    }
    C(sq, X);
    B("_GadgetView", sq);

    function tq(a) {
        X.call(this, tq.a, a)
    }
    C(tq, X);
    tq.a = "Header";
    B("_HeaderView", tq);

    function uq(a, b) {
        X.call(this, b, a)
    }
    C(uq, X);

    function vq(a) {
        X.call(this, Gd, a)
    }
    C(vq, uq);

    function wq(a) {
        X.call(this, Sc, a)
    }
    C(wq, uq);
    B("_TextView", vq);
    B("_HTMLView", wq);

    function xq(a) {
        X.call(this, Vc, a);
        this.a = a.o
    }
    C(xq, X);
    xq.prototype.C = function() {
        if (1 == this.a.data.resize) {
            var a = V(this.f, Vg),
                b = this.a.a;
            if (a && b) {
                if (document.defaultView) b = parseInt(document.defaultView.getComputedStyle(b, null).width, 10);
                else if (b.currentStyle) a.style.display = t, b = b.offsetWidth, a.style.display = g;
                else return;
                a.width > b && (a.height = Math.round(b / a.width * a.height), a.width = b);
                a.style.visibility = mj
            }
        }
    };
    B("_ImageView", xq);

    function yq(a) {
        X.call(this, Zc, a)
    }
    C(yq, X);
    B("_LabelView", yq);

    function zq(a) {
        X.call(this, Hd, a)
    }
    C(zq, X);
    B("_TextListView", zq);

    function Aq(a) {
        X.call(this, $c, a)
    }
    C(Aq, X);
    B("_LinkListView", Aq);

    function Bq(a) {
        X.call(this, uc, a)
    }
    C(Bq, X);
    B("_BloggerButtonView", Bq);

    function Cq(a) {
        X.call(this, jd, a)
    }
    C(Cq, X);
    B("_NavbarView", Cq);

    function Dq(a) {
        X.call(this, kd, a)
    }
    C(Dq, X);
    Dq.prototype.C = function() {
        google.load(ui, Cb, {
            callback: this.a.bind(this)
        });
        window._uds_nbw_donotrepair = !0
    };
    Dq.prototype.a = function() {
        if (V(this.f, ye)) {
            var a = W(this.f, ye),
                b, c = this.f.m().format;
            c == Nd ? b = !1 : c == Rc ? b = !0 : c == Qc && (b = !0);
            c = {
                largeResultSet: !1,
                horizontal: b,
                linkTarget: 1 == this.f.m().linkNewWindow ? GSearch.LINK_TARGET_BLANK : GSearch.LINK_TARGET_SELF,
                title: k,
                autoExecuteList: {
                    executeList: this.f.m().expression.split(/,/)
                }
            };
            b && (c.autoExecuteList.cycleTime = GSnewsBar.CYCLE_TIME_MEDIUM, c.autoExecuteList.cycleMode = GSnewsBar.CYCLE_MODE_RANDOM);
            b = new GSnewsBar(a, c);
            window[a.id] = b
        }
    };
    B("_NewsBarView", Dq);

    function Eq(a) {
        X.call(this, od, a)
    }
    C(Eq, X);
    Eq.prototype.ga = function() {
        return od
    };
    Eq.prototype.C = function() {
        if (0 != this.f.m().mobile) {
            var a = V(this.f, xi);
            a && (a.onchange = function(a) {
                a = a || window.event;
                a = a.target || a.srcElement;
                if (a = a.options[a.selectedIndex].value) window.location = a
            })
        }
    };
    var _PageListView = Eq;
    B("_PageListView", Eq);

    function Fq(a) {
        X.call(this, Fq.a, a)
    }
    C(Fq, X);
    Fq.a = "PlusBadge";
    B("_PlusBadgeView", Fq);

    function Gq(a) {
        X.call(this, Gq.a, a)
    }
    C(Gq, X);
    Gq.a = "PlusFollowers";
    B("_PlusFollowersView", Gq);

    function Hq(a) {
        X.call(this, Hq.a, a)
    }
    C(Hq, X);
    Hq.a = "PlusOne";
    B("_PlusOneView", Hq);

    function Iq(a) {
        X.call(this, pd, a)
    }
    C(Iq, X);
    window.setInterval(function() {
        for (var a = document.getElementsByTagName(Ug), b, c = 0; b = a[c]; c++)
            if (0 == b.name.indexOf(Vh)) try {
                if (window.frames[b.name] && window.frames[b.name].frames[0]) {
                    var d = Number(window.frames[b.name].frames[0].location.hash.replace(ja, g));
                    d && (b.style.height = d + 10 + fi)
                }
            } catch (e) {}
    }, 500);
    B("_PollView", Iq);

    function Jq(a) {
        X.call(this, qd, a)
    }
    C(Jq, X);
    B("_PopularPostsView", Jq);

    function Kq(a) {
        X.call(this, td, a);
        this.a = a.o
    }
    C(Kq, X);
    Kq.prototype.C = function() {
        this.a && this.a.a && (this.a.a.style.display = 0 == this.f.m().isDisplayable ? t : g)
    };
    B("_ProfileView", Kq);

    function Lq(a) {
        X.call(this, vd, a)
    }
    C(Lq, X);
    B("_RecentPostsView", Lq);

    function Mq(a) {
        X.call(this, Mq.a, a)
    }
    C(Mq, X);
    Mq.a = "Sharing";
    B("_SharingView", Mq);

    function Nq(a) {
        X.call(this, Cd, a)
    }
    C(Nq, X);
    Nq.prototype.C = function() {
        window.location.protocol == Hg && google.load(ig, Cb, {
            callback: this.a.bind(this)
        })
    };
    Nq.prototype.a = function() {
        if (V(this.f, Bi)) {
            var a = W(this.f, Bi),
                b = this.f.m().computedFeed,
                c = {
                    linkTarget: this.f.m().linkNewWindow ? google.feeds.LINK_TARGET_BLANK : google.feeds.LINK_TARGET_SELF,
                    scaleImages: !0,
                    fullControlPanel: !0,
                    fullControlPanelSmallIcons: !0,
                    pauseOnHover: !1,
                    displayTime: this.f.m().speed
                };
            0 == b.indexOf(Jg) && (c.thumbnailUrlResolver = Oq);
            this.f.m().randomizeFeed && (c.feedLoadCallback = Pq);
            new GFslideShow(b, a, c)
        }
    };

    function Oq(a) {
        var b = google.feeds.getElementsByTagNameNS(a.xmlNode, Lg, Wi);
        a = null;
        b.length && (b = b[0], a = b.getAttribute(ij), a || (a = b.firstChild.nodeValue), a = a.replace(/^(.*)_[st]\.([a-zA-Z]+)$/, pa));
        return a
    }

    function Pq(a) {
        a = a.feed.entries;
        for (var b = a.length - 1; 0 < b; --b) {
            var c = Math.floor(Math.random() * (b + 1)),
                d = a[b];
            a[b] = a[c];
            a[c] = d
        }
    }
    B("_SlideshowView", Nq);

    function Qq(a) {
        X.call(this, Ed, a)
    }
    C(Qq, X);
    Qq.prototype.C = function() {
        null != V(this.f, cj) && Cn(this.f.m().statsUrl, A(this.g, this))
    };
    Qq.prototype.g = function(a) {
        a = a.target;
        if (Ln(a)) {
            a = a.a ? ln(a.a.responseText) : void 0;
            var b = this.f.m(),
                c = V(this.f, cj);
            if (null != c) {
                if (b.showGraphicalCounter) {
                    this.c = a.total;
                    for (var d = g + a.total, e = 0; e < d.length; e++) c.appendChild(Q(Ci, {
                        "class": Lf
                    }, Q(Ni, null, document.createTextNode(String(d.charAt(e)))), Q(Ci, {
                        "class": Ae
                    })));
                    b.showAnimatedCounter && (this.b = new Tm(a.nextTickMs), R(this.b, Xi, A(this.i, this, c)), c = this.b, c.c = !0, c.a || (c.a = c.b.setTimeout(c.h, c.g), c.j = ak()))
                } else {
                    d = a.total;
                    if (isNaN(d) || 0 > d) d = id;
                    else {
                        for (var d =
                                d.toString(), e = [], f = 0, h = d.length; f < h; f++) 0 < f && 0 == f % 3 && e.push(fb), e.push(d.charAt(h - 1 - f));
                        d = e.reverse().join(g)
                    }
                    wl(c, d)
                }
                b.showSparkline && (W(this.f, Di).src = a.sparklineUrl);
                W(this.f, wf).style.display = g
            }
        }
    };
    Qq.prototype.i = function(a) {
        if (Rq(this.c + 1) > Rq(this.c)) fm(this.b), Um(this.b);
        else {
            this.c++;
            for (var b = g + this.c, c = 0; c < b.length; c++) {
                var d = a.childNodes[c],
                    e = b.charAt(c),
                    f = d.firstChild,
                    h = void 0;
                ll && Yg in f ? h = f.innerText.replace(/(\r\n|\r|\n)/g, ba) : (h = [], zl(f, h, !0), h = h.join(g));
                h = h.replace(/ \xAD /g, k).replace(/\xAD/g, g);
                h = h.replace(/\u200B/g, g);
                ll || (h = h.replace(/ +/g, k));
                h != k && (h = h.replace(/^\s*/, g));
                h != e && (wl(d.firstChild, e), Vm(A(this.a, this, d, 1), 50), Vm(A(this.a, this, d, 2), 100), Vm(A(this.a, this, d, 3), 150),
                    Vm(A(this.a, this, d, 0), 200))
            }
        }
    };

    function Rq(a) {
        return 0 == a ? 1 : Math.floor(Math.log(a) / Math.LN10) + 1
    }
    Qq.prototype.a = function(a, b) {
        var c = Ii + (0 != b ? b - 1 : 3),
            d = Ii + b,
            e = Gk(a);
        z(c) ? Ak(e, c) : y(c) && (e = Kk(e, c));
        z(d) && !G(e, d) ? e.push(d) : y(d) && Ik(e, d);
        a.className = e.join(k)
    };
    B("_StatsView", Qq);

    function Uq(a) {
        X.call(this, Fd, a)
    }
    C(Uq, X);
    var Wq = null,
        Xq = null;

    function Yq(a, b) {
        a.style.zIndex = 1 == b ? Lb : g
    }

    function Zq(a, b) {
        return a ? a.className && -1 != a.className.search(b) ? a : Zq(a.parentNode, b) : null
    }

    function $q(a, b) {
        Yq(a.parentNode, b);
        if (L) {
            var c = Zq(a, vi);
            c && (c.parentNode.className && -1 != c.parentNode.className.search(ff) && Yq(c.parentNode.parentNode.parentNode.parentNode, b), Yq(c, b));
            (c = Zq(a, pj)) && Yq(c.parentNode.parentNode, b)
        }
    }
    B("_SubscribeView", Uq);
    B("_SW_toggleReaderList", function(a, b) {
        var c = document.getElementById(yd + b),
            d = document.getElementById(zd + b);
        a || (a = window.event);
        a.cancelBubble = !0;
        a.stopPropagation && a.stopPropagation();
        var e = document.onclick;
        null != Wq && Wq != c && ($q(Wq, !1), Wq.style.display = t, Xq.style.visibility = mj);
        c.style.display == t ? ($q(c, !0), c.style.display = g, Wq = c, Xq = d, d.style.visibility = Eg, document.onclick = function() {
            c.style.display = t;
            $q(c, !1);
            d.style.visibility = mj;
            e && (document.onclick = e)
        }) : (c.style.display = t, $q(c, !1), d.style.visibility =
            mj, e && (document.onclick = e));
        return !1
    });
    B("_SW_hideReaderList", function(a) {
        var b = document.getElementById(yd + a);
        a = document.getElementById(zd + a);
        b.style.display = t;
        $q(b, !1);
        a.style.visibility = mj
    });

    function ar(a) {
        X.call(this, ar.a, a)
    }
    C(ar, X);
    ar.a = "Translate";
    B("_TranslateView", ar);

    function br(a) {
        X.call(this, Od, a)
    }
    C(br, X);
    br.prototype.C = function() {
        if (window.location.protocol == Hg) {
            var a = this.f;
            google.load(ui, Cb, {
                callback: A(this.a, this)
            });
            V(this.f, ye) && (a = W(a, ye), Hk(a, kj))
        }
    };
    br.prototype.a = function() {
        if (V(this.f, ye)) {
            var a = W(this.f, ye),
                b = this.f.m().format,
                c, d, e = this.f.m().expression;
            b == Nd ? (c = !1, d = GSvideoBar.THUMBNAILS_MEDIUM, a.style.width = Hb) : b == Rc ? (c = !0, d = GSvideoBar.THUMBNAILS_SMALL, a.style.width = Mb) : b == Qc && (c = !0, d = GSvideoBar.THUMBNAILS_MEDIUM, a.style.width = Pb);
            new GSvideoBar(a, GSvideoBar.PLAYER_ROOT_FLOATING, {
                largeResultSet: !1,
                horizontal: c,
                autoExecuteList: {
                    cycleTime: GSvideoBar.CYCLE_TIME_LONG,
                    cycleMode: GSvideoBar.CYCLE_MODE_RANDOM,
                    executeList: e.split(/,/)
                },
                thumbnailSize: d
            })
        }
    };
    B("_VideoBarView", br);

    function Z(a) {
        X.call(this, Z.a, a)
    }
    C(Z, X);
    Z.a = "Wikipedia";
    B("_WikipediaView", Z);
    Z.g = 5;
    Z.b = g;
    Z.c = Xf;
    u = Z.prototype;
    u.ea = !1;
    u.$ = !1;
    u.C = function() {
        var a = V(this.f, zj);
        if (a) {
            Z.b = this.f.o.data.language || Xf;
            var b = this;
            R(a, Qi, function(a) {
                Z.prototype.$ || (Z.prototype.$ = !0, cr(b));
                a.preventDefault()
            })
        }
    };

    function cr(a) {
        N(V(a.f, Cj)).innerHTML = g;
        N(V(a.f, Bj)).innerHTML = g;
        var b = dk(N(V(a.f, Aj)).value);
        b ? (b = Bp(Bp(Bp(qp(new Y(Og + (a.ea && Z.c || Z.b) + qb), zb), je, Rh), ui, b), tg, dh), b = new dq(new Y(b)), fq(b, {
            callback: dc
        }, A(a.Yb, a), A(a.Xb, a))) : (N(V(a.f, Dj)).style.display = t, N(V(a.f, Cj)).innerHTML = a.f.o.data.enterTextMsg, Z.prototype.$ = !1)
    }
    u.Yb = function(a) {
        var b = V(this.f, Dj),
            c = V(this.f, Cj),
            d = dk(N(V(this.f, Aj)).value),
            e = [];
        a = a[1];
        var f = a.length;
        if (0 == f) b = N(b), b.style.display = Be, N(c).innerHTML = this.f.o.data.noResultsFoundMsg, Z.prototype.$ = !1;
        else {
            for (var h = 0; h < f; h++) e.push(ac + (Og + (this.ea && Z.c || Z.b) + rb + a[h].replace(/ /g, Zd)) + cc + a[h] + Yb);
            if (f > Z.g) {
                for (h = 0; h < Z.g; h++) N(c).innerHTML += e[h];
                N(V(this.f, Bj)).style.display = Be;
                c = $b + Bp(Bp(Bp(Bp(qp(new Y(Og + (this.ea && Z.c || Z.b) + qb), Ab), Zi, Dd), di, If), ui, d), ug, Ad) + cc + this.f.o.data.moreMsg + Xb;
                N(V(this.f,
                    Bj)).innerHTML = c
            } else
                for (h = 0; h < f; h++) N(c).innerHTML += e[h];
            b = N(b);
            b.style.display = Be;
            this.ea = Z.prototype.$ = !1
        }
    };
    u.Xb = function() {
        Z.b != Xf ? (this.ea = !0, cr(this)) : (N(V(this.f, Dj)).style.display = t, N(V(this.f, Cj)).innerHTML = this.f.o.data.fetchingErrorMsg, Z.prototype.$ = !1)
    };
    if (window.jstiming) {
        window.jstiming.Ia = {};
        window.jstiming.Zb = 1;
        var dr = function(a, b, c) {
                var d = a.t[b],
                    e = a.t.start;
                if (d && (e || c)) return d = a.t[b][0], void 0 != c ? e = c : e = e[0], Math.round(d - e)
            },
            er = function(a, b, c) {
                var d = g;
                window.jstiming.srt && (d += Ra + window.jstiming.srt, delete window.jstiming.srt);
                window.jstiming.pt && (d += Ta + window.jstiming.pt, delete window.jstiming.pt);
                try {
                    window.external && window.external.tran ? d += Va + window.external.tran : window.gtbExternal && window.gtbExternal.tran ? d += Va + window.gtbExternal.tran() :
                        window.chrome && window.chrome.csi && (d += Va + window.chrome.csi().tran)
                } catch (I) {}
                var e = window.chrome;
                if (e && (e = e.loadTimes)) {
                    e().wasFetchedViaSpdy && (d += La);
                    if (e().wasNpnNegotiated) {
                        var d = d + Ja,
                            f = e().npnNegotiatedProtocol;
                        f && (d += Ka + (encodeURIComponent || escape)(f))
                    }
                    e().wasAlternateProtocolAvailable && (d += Ba)
                }
                var h = a.t,
                    m = h.start,
                    e = [],
                    f = [],
                    q;
                for (q in h)
                    if (q != Ji && 0 != q.indexOf(Zd)) {
                        var w = h[q][1];
                        w ? h[w] && f.push(q + lb + dr(a, q, h[w][0])) : m && e.push(q + lb + dr(a, q))
                    }
                delete h.start;
                if (b)
                    for (var D in b) d += ua + D + bc + b[D];
                (b =
                    c) || (b = Ng == document.location.protocol ? Pg : Kg);
                return [b, fc, Pa + (window.jstiming.sn || Je) + za, a.name, f.length ? Fa + f.join(fb) : g, d, Na, e.join(fb)].join(g)
            },
            fr = function(a, b, c) {
                a = er(a, b, c);
                if (!a) return g;
                b = new Image;
                var d = window.jstiming.Zb++;
                window.jstiming.Ia[d] = b;
                b.onload = b.onerror = function() {
                    window.jstiming && delete window.jstiming.Ia[d]
                };
                b.src = a;
                b = null;
                return a
            };
        window.jstiming.report = function(a, b, c) {
            if (document.webkitVisibilityState == ci) {
                var d = !1,
                    e = function() {
                        if (!d) {
                            b ? b.prerender = Cb : b = {
                                prerender: Cb
                            };
                            var f;
                            document.webkitVisibilityState == ci ? f = !1 : (fr(a, b, c), f = !0);
                            f && (d = !0, document.removeEventListener(nj, e, !1))
                        }
                    };
                document.addEventListener(nj, e, !1);
                return g
            }
            return fr(a, b, c)
        }
    };
})()