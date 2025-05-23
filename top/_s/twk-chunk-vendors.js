/*! For license information please see twk-chunk-vendors.js.LICENSE */
(window.tawkJsonp = window.tawkJsonp || []).push([["chunk-vendors"], {
    "00ee": function(t, e, n) {
        "use strict";
        var r = {};
        r[n("b622")("toStringTag")] = "z",
        t.exports = "[object z]" === String(r)
    },
    "01b4": function(t, e, n) {
        "use strict";
        var r = function() {
            this.head = null,
            this.tail = null
        };
        r.prototype = {
            add: function(t) {
                var e = {
                    item: t,
                    next: null
                }
                  , n = this.tail;
                n ? n.next = e : this.head = e,
                this.tail = e
            },
            get: function() {
                var t = this.head;
                if (t)
                    return null === (this.head = t.next) && (this.tail = null),
                    t.item
            }
        },
        t.exports = r
    },
    "0366": function(t, e, n) {
        "use strict";
        var r = n("4625")
          , i = n("59ed")
          , o = n("40d5")
          , a = r(r.bind);
        t.exports = function(t, e) {
            return i(t),
            void 0 === e ? t : o ? a(t, e) : function() {
                return t.apply(e, arguments)
            }
        }
    },
    "04f8": function(t, e, n) {
        "use strict";
        var r = n("2d00")
          , i = n("d039")
          , o = n("da84").String;
        t.exports = !!Object.getOwnPropertySymbols && !i((function() {
            var t = Symbol("symbol detection");
            return !o(t) || !(Object(t)instanceof Symbol) || !Symbol.sham && r && r < 41
        }
        ))
    },
    "06cf": function(t, e, n) {
        "use strict";
        var r = n("83ab")
          , i = n("c65b")
          , o = n("d1e7")
          , a = n("5c6c")
          , s = n("fc6a")
          , l = n("a04b")
          , c = n("1a2d")
          , u = n("0cfb")
          , h = Object.getOwnPropertyDescriptor;
        e.f = r ? h : function(t, e) {
            if (t = s(t),
            e = l(e),
            u)
                try {
                    return h(t, e)
                } catch (t) {}
            if (c(t, e))
                return a(!i(o.f, t, e), t[e])
        }
    },
    "07ac": function(t, e, n) {
        "use strict";
        var r = n("23e7")
          , i = n("6f53").values;
        r({
            target: "Object",
            stat: !0
        }, {
            values: function(t) {
                return i(t)
            }
        })
    },
    "07fa": function(t, e, n) {
        "use strict";
        var r = n("50c4");
        t.exports = function(t) {
            return r(t.length)
        }
    },
    "0b42": function(t, e, n) {
        "use strict";
        var r = n("e8b5")
          , i = n("68ee")
          , o = n("861d")
          , a = n("b622")("species")
          , s = Array;
        t.exports = function(t) {
            var e;
            return r(t) && (e = t.constructor,
            i(e) && (e === s || r(e.prototype)) ? e = void 0 : o(e) && (null === (e = e[a]) && (e = void 0))),
            void 0 === e ? s : e
        }
    },
    "0cfb": function(t, e, n) {
        "use strict";
        var r = n("83ab")
          , i = n("d039")
          , o = n("cc12");
        t.exports = !r && !i((function() {
            return 7 !== Object.defineProperty(o("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        }
        ))
    },
    "0d51": function(t, e, n) {
        "use strict";
        var r = String;
        t.exports = function(t) {
            try {
                return r(t)
            } catch (t) {
                return "Object"
            }
        }
    },
    "13d2": function(t, e, n) {
        "use strict";
        var r = n("e330")
          , i = n("d039")
          , o = n("1626")
          , a = n("1a2d")
          , s = n("83ab")
          , l = n("5e77").CONFIGURABLE
          , c = n("8925")
          , u = n("69f3")
          , h = u.enforce
          , p = u.get
          , f = String
          , d = Object.defineProperty
          , g = r("".slice)
          , m = r("".replace)
          , _ = r([].join)
          , y = s && !i((function() {
            return 8 !== d((function() {}
            ), "length", {
                value: 8
            }).length
        }
        ))
          , v = String(String).split("String")
          , b = t.exports = function(t, e, n) {
            "Symbol(" === g(f(e), 0, 7) && (e = "[" + m(f(e), /^Symbol\(([^)]*)\).*$/, "$1") + "]"),
            n && n.getter && (e = "get " + e),
            n && n.setter && (e = "set " + e),
            (!a(t, "name") || l && t.name !== e) && (s ? d(t, "name", {
                value: e,
                configurable: !0
            }) : t.name = e),
            y && n && a(n, "arity") && t.length !== n.arity && d(t, "length", {
                value: n.arity
            });
            try {
                n && a(n, "constructor") && n.constructor ? s && d(t, "prototype", {
                    writable: !1
                }) : t.prototype && (t.prototype = void 0)
            } catch (t) {}
            var r = h(t);
            return a(r, "source") || (r.source = _(v, "string" == typeof e ? e : "")),
            t
        }
        ;
        Function.prototype.toString = b((function() {
            return o(this) && p(this).source || c(this)
        }
        ), "toString")
    },
    "14e5": function(t, e, n) {
        "use strict";
        var r = n("23e7")
          , i = n("c65b")
          , o = n("59ed")
          , a = n("f069")
          , s = n("e667")
          , l = n("2266");
        r({
            target: "Promise",
            stat: !0,
            forced: n("5eed")
        }, {
            all: function(t) {
                var e = this
                  , n = a.f(e)
                  , r = n.resolve
                  , c = n.reject
                  , u = s((function() {
                    var n = o(e.resolve)
                      , a = []
                      , s = 0
                      , u = 1;
                    l(t, (function(t) {
                        var o = s++
                          , l = !1;
                        u++,
                        i(n, e, t).then((function(t) {
                            l || (l = !0,
                            a[o] = t,
                            --u || r(a))
                        }
                        ), c)
                    }
                    )),
                    --u || r(a)
                }
                ));
                return u.error && c(u.value),
                n.promise
            }
        })
    },
    "157a": function(t, e, n) {
        "use strict";
        var r = n("da84")
          , i = n("83ab")
          , o = Object.getOwnPropertyDescriptor;
        t.exports = function(t) {
            if (!i)
                return r[t];
            var e = o(r, t);
            return e && e.value
        }
    },
    1626: function(t, e, n) {
        "use strict";
        var r = "object" == typeof document && document.all;
        t.exports = void 0 === r && void 0 !== r ? function(t) {
            return "function" == typeof t || t === r
        }
        : function(t) {
            return "function" == typeof t
        }
    },
    1787: function(t, e, n) {
        "use strict";
        var r = n("861d");
        t.exports = function(t) {
            return r(t) || null === t
        }
    },
    "19aa": function(t, e, n) {
        "use strict";
        var r = n("3a9b")
          , i = TypeError;
        t.exports = function(t, e) {
            if (r(e, t))
                return t;
            throw new i("Incorrect invocation")
        }
    },
    "1a2d": function(t, e, n) {
        "use strict";
        var r = n("e330")
          , i = n("7b0b")
          , o = r({}.hasOwnProperty);
        t.exports = Object.hasOwn || function(t, e) {
            return o(i(t), e)
        }
    },
    "1be4": function(t, e, n) {
        "use strict";
        var r = n("d066");
        t.exports = r("document", "documentElement")
    },
    "1c7e": function(t, e, n) {
        "use strict";
        var r = n("b622")("iterator")
          , i = !1;
        try {
            var o = 0
              , a = {
                next: function() {
                    return {
                        done: !!o++
                    }
                },
                return: function() {
                    i = !0
                }
            };
            a[r] = function() {
                return this
            }
            ,
            Array.from(a, (function() {
                throw 2
            }
            ))
        } catch (t) {}
        t.exports = function(t, e) {
            try {
                if (!e && !i)
                    return !1
            } catch (t) {
                return !1
            }
            var n = !1;
            try {
                var o = {};
                o[r] = function() {
                    return {
                        next: function() {
                            return {
                                done: n = !0
                            }
                        }
                    }
                }
                ,
                t(o)
            } catch (t) {}
            return n
        }
    },
    "1cdc": function(t, e, n) {
        "use strict";
        var r = n("342f");
        t.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(r)
    },
    "1d80": function(t, e, n) {
        "use strict";
        var r = n("7234")
          , i = TypeError;
        t.exports = function(t) {
            if (r(t))
                throw new i("Can't call method on " + t);
            return t
        }
    },
    2266: function(t, e, n) {
        "use strict";
        var r = n("0366")
          , i = n("c65b")
          , o = n("825a")
          , a = n("0d51")
          , s = n("e95a")
          , l = n("07fa")
          , c = n("3a9b")
          , u = n("9a1f")
          , h = n("35a1")
          , p = n("2a62")
          , f = TypeError
          , d = function(t, e) {
            this.stopped = t,
            this.result = e
        }
          , g = d.prototype;
        t.exports = function(t, e, n) {
            var m, _, y, v, b, w, k, x = n && n.that, S = !(!n || !n.AS_ENTRIES), T = !(!n || !n.IS_RECORD), C = !(!n || !n.IS_ITERATOR), O = !(!n || !n.INTERRUPTED), E = r(e, x), L = function(t) {
                return m && p(m, "normal", t),
                new d(!0,t)
            }, j = function(t) {
                return S ? (o(t),
                O ? E(t[0], t[1], L) : E(t[0], t[1])) : O ? E(t, L) : E(t)
            };
            if (T)
                m = t.iterator;
            else if (C)
                m = t;
            else {
                if (!(_ = h(t)))
                    throw new f(a(t) + " is not iterable");
                if (s(_)) {
                    for (y = 0,
                    v = l(t); v > y; y++)
                        if ((b = j(t[y])) && c(g, b))
                            return b;
                    return new d(!1)
                }
                m = u(t, _)
            }
            for (w = T ? t.next : m.next; !(k = i(w, m)).done; ) {
                try {
                    b = j(k.value)
                } catch (t) {
                    p(m, "throw", t)
                }
                if ("object" == typeof b && b && c(g, b))
                    return b
            }
            return new d(!1)
        }
    },
    "23cb": function(t, e, n) {
        "use strict";
        var r = n("5926")
          , i = Math.max
          , o = Math.min;
        t.exports = function(t, e) {
            var n = r(t);
            return n < 0 ? i(n + e, 0) : o(n, e)
        }
    },
    "23e7": function(t, e, n) {
        "use strict";
        var r = n("da84")
          , i = n("06cf").f
          , o = n("9112")
          , a = n("cb2d")
          , s = n("6374")
          , l = n("e893")
          , c = n("94ca");
        t.exports = function(t, e) {
            var n, u, h, p, f, d = t.target, g = t.global, m = t.stat;
            if (n = g ? r : m ? r[d] || s(d, {}) : r[d] && r[d].prototype)
                for (u in e) {
                    if (p = e[u],
                    t.dontCallGetSet ? h = (f = i(n, u)) && f.value : h = n[u],
                    !c(g ? u : d + (m ? "." : "#") + u, t.forced) && void 0 !== h) {
                        if (typeof p == typeof h)
                            continue;
                        l(p, h)
                    }
                    (t.sham || h && h.sham) && o(p, "sham", !0),
                    a(n, u, p, t)
                }
        }
    },
    "241c": function(t, e, n) {
        "use strict";
        var r = n("ca84")
          , i = n("7839").concat("length", "prototype");
        e.f = Object.getOwnPropertyNames || function(t) {
            return r(t, i)
        }
    },
    "24fb": function(t, e, n) {
        "use strict";
        function r(t, e) {
            var n = t[1] || ""
              , r = t[3];
            if (!r)
                return n;
            if (e && "function" == typeof btoa) {
                var i = function(t) {
                    var e = btoa(unescape(encodeURIComponent(JSON.stringify(t))))
                      , n = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e);
                    return "/*# ".concat(n, " */")
                }(r)
                  , o = r.sources.map((function(t) {
                    return "/*# sourceURL=".concat(r.sourceRoot || "").concat(t, " */")
                }
                ));
                return [n].concat(o).concat([i]).join("\n")
            }
            return [n].join("\n")
        }
        t.exports = function(t) {
            var e = [];
            return e.toString = function() {
                return this.map((function(e) {
                    var n = r(e, t);
                    return e[2] ? "@media ".concat(e[2], " {").concat(n, "}") : n
                }
                )).join("")
            }
            ,
            e.i = function(t, n, r) {
                "string" == typeof t && (t = [[null, t, ""]]);
                var i = {};
                if (r)
                    for (var o = 0; o < this.length; o++) {
                        var a = this[o][0];
                        null != a && (i[a] = !0)
                    }
                for (var s = 0; s < t.length; s++) {
                    var l = [].concat(t[s]);
                    r && i[l[0]] || (n && (l[2] ? l[2] = "".concat(n, " and ").concat(l[2]) : l[2] = n),
                    e.push(l))
                }
            }
            ,
            e
        }
    },
    2626: function(t, e, n) {
        "use strict";
        var r = n("d066")
          , i = n("edd0")
          , o = n("b622")
          , a = n("83ab")
          , s = o("species");
        t.exports = function(t) {
            var e = r(t);
            a && e && !e[s] && i(e, s, {
                configurable: !0,
                get: function() {
                    return this
                }
            })
        }
    },
    2877: function(t, e, n) {
        "use strict";
        function r(t, e, n, r, i, o, a, s) {
            var l, c = "function" == typeof t ? t.options : t;
            if (e && (c.render = e,
            c.staticRenderFns = n,
            c._compiled = !0),
            r && (c.functional = !0),
            o && (c._scopeId = "data-v-" + o),
            a ? (l = function(t) {
                (t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__),
                i && i.call(this, t),
                t && t._registeredComponents && t._registeredComponents.add(a)
            }
            ,
            c._ssrRegister = l) : i && (l = s ? function() {
                i.call(this, (c.functional ? this.parent : this).$root.$options.shadowRoot)
            }
            : i),
            l)
                if (c.functional) {
                    c._injectStyles = l;
                    var u = c.render;
                    c.render = function(t, e) {
                        return l.call(e),
                        u(t, e)
                    }
                } else {
                    var h = c.beforeCreate;
                    c.beforeCreate = h ? [].concat(h, l) : [l]
                }
            return {
                exports: t,
                options: c
            }
        }
        n.d(e, "a", (function() {
            return r
        }
        ))
    },
    "2a62": function(t, e, n) {
        "use strict";
        var r = n("c65b")
          , i = n("825a")
          , o = n("dc4a");
        t.exports = function(t, e, n) {
            var a, s;
            i(t);
            try {
                if (!(a = o(t, "return"))) {
                    if ("throw" === e)
                        throw n;
                    return n
                }
                a = r(a, t)
            } catch (t) {
                s = !0,
                a = t
            }
            if ("throw" === e)
                throw n;
            if (s)
                throw a;
            return i(a),
            n
        }
    },
    "2ba4": function(t, e, n) {
        "use strict";
        var r = n("40d5")
          , i = Function.prototype
          , o = i.apply
          , a = i.call;
        t.exports = "object" == typeof Reflect && Reflect.apply || (r ? a.bind(o) : function() {
            return a.apply(o, arguments)
        }
        )
    },
    "2cf4": function(t, e, n) {
        "use strict";
        var r, i, o, a, s = n("da84"), l = n("2ba4"), c = n("0366"), u = n("1626"), h = n("1a2d"), p = n("d039"), f = n("1be4"), d = n("f36a"), g = n("cc12"), m = n("d6d6"), _ = n("1cdc"), y = n("605d"), v = s.setImmediate, b = s.clearImmediate, w = s.process, k = s.Dispatch, x = s.Function, S = s.MessageChannel, T = s.String, C = 0, O = {}, E = "onreadystatechange";
        p((function() {
            r = s.location
        }
        ));
        var L = function(t) {
            if (h(O, t)) {
                var e = O[t];
                delete O[t],
                e()
            }
        }
          , j = function(t) {
            return function() {
                L(t)
            }
        }
          , R = function(t) {
            L(t.data)
        }
          , A = function(t) {
            s.postMessage(T(t), r.protocol + "//" + r.host)
        };
        v && b || (v = function(t) {
            m(arguments.length, 1);
            var e = u(t) ? t : x(t)
              , n = d(arguments, 1);
            return O[++C] = function() {
                l(e, void 0, n)
            }
            ,
            i(C),
            C
        }
        ,
        b = function(t) {
            delete O[t]
        }
        ,
        y ? i = function(t) {
            w.nextTick(j(t))
        }
        : k && k.now ? i = function(t) {
            k.now(j(t))
        }
        : S && !_ ? (a = (o = new S).port2,
        o.port1.onmessage = R,
        i = c(a.postMessage, a)) : s.addEventListener && u(s.postMessage) && !s.importScripts && r && "file:" !== r.protocol && !p(A) ? (i = A,
        s.addEventListener("message", R, !1)) : i = E in g("script") ? function(t) {
            f.appendChild(g("script"))[E] = function() {
                f.removeChild(this),
                L(t)
            }
        }
        : function(t) {
            setTimeout(j(t), 0)
        }
        ),
        t.exports = {
            set: v,
            clear: b
        }
    },
    "2d00": function(t, e, n) {
        "use strict";
        var r, i, o = n("da84"), a = n("342f"), s = o.process, l = o.Deno, c = s && s.versions || l && l.version, u = c && c.v8;
        u && (i = (r = u.split("."))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])),
        !i && a && ((!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) && ((r = a.match(/Chrome\/(\d+)/)) && (i = +r[1]))),
        t.exports = i
    },
    "342f": function(t, e, n) {
        "use strict";
        t.exports = "undefined" != typeof navigator && String(navigator.userAgent) || ""
    },
    3529: function(t, e, n) {
        "use strict";
        var r = n("23e7")
          , i = n("c65b")
          , o = n("59ed")
          , a = n("f069")
          , s = n("e667")
          , l = n("2266");
        r({
            target: "Promise",
            stat: !0,
            forced: n("5eed")
        }, {
            race: function(t) {
                var e = this
                  , n = a.f(e)
                  , r = n.reject
                  , c = s((function() {
                    var a = o(e.resolve);
                    l(t, (function(t) {
                        i(a, e, t).then(n.resolve, r)
                    }
                    ))
                }
                ));
                return c.error && r(c.value),
                n.promise
            }
        })
    },
    "35a1": function(t, e, n) {
        "use strict";
        var r = n("f5df")
          , i = n("dc4a")
          , o = n("7234")
          , a = n("3f8c")
          , s = n("b622")("iterator");
        t.exports = function(t) {
            if (!o(t))
                return i(t, s) || i(t, "@@iterator") || a[r(t)]
        }
    },
    "37e8": function(t, e, n) {
        "use strict";
        var r = n("83ab")
          , i = n("aed9")
          , o = n("9bf2")
          , a = n("825a")
          , s = n("fc6a")
          , l = n("df75");
        e.f = r && !i ? Object.defineProperties : function(t, e) {
            a(t);
            for (var n, r = s(e), i = l(e), c = i.length, u = 0; c > u; )
                o.f(t, n = i[u++], r[n]);
            return t
        }
    },
    "3a9b": function(t, e, n) {
        "use strict";
        var r = n("e330");
        t.exports = r({}.isPrototypeOf)
    },
    "3bbe": function(t, e, n) {
        "use strict";
        var r = n("1787")
          , i = String
          , o = TypeError;
        t.exports = function(t) {
            if (r(t))
                return t;
            throw new o("Can't set " + i(t) + " as a prototype")
        }
    },
    "3f8c": function(t, e, n) {
        "use strict";
        t.exports = {}
    },
    "40d5": function(t, e, n) {
        "use strict";
        var r = n("d039");
        t.exports = !r((function() {
            var t = function() {}
            .bind();
            return "function" != typeof t || t.hasOwnProperty("prototype")
        }
        ))
    },
    "44ad": function(t, e, n) {
        "use strict";
        var r = n("e330")
          , i = n("d039")
          , o = n("c6b6")
          , a = Object
          , s = r("".split);
        t.exports = i((function() {
            return !a("z").propertyIsEnumerable(0)
        }
        )) ? function(t) {
            return "String" === o(t) ? s(t, "") : a(t)
        }
        : a
    },
    "44d2": function(t, e, n) {
        "use strict";
        var r = n("b622")
          , i = n("7c73")
          , o = n("9bf2").f
          , a = r("unscopables")
          , s = Array.prototype;
        void 0 === s[a] && o(s, a, {
            configurable: !0,
            value: i(null)
        }),
        t.exports = function(t) {
            s[a][t] = !0
        }
    },
    "44de": function(t, e, n) {
        "use strict";
        t.exports = function(t, e) {
            try {
                1 === arguments.length ? console.error(t) : console.error(t, e)
            } catch (t) {}
        }
    },
    4625: function(t, e, n) {
        "use strict";
        var r = n("c6b6")
          , i = n("e330");
        t.exports = function(t) {
            if ("Function" === r(t))
                return i(t)
        }
    },
    4738: function(t, e, n) {
        "use strict";
        var r = n("da84")
          , i = n("d256")
          , o = n("1626")
          , a = n("94ca")
          , s = n("8925")
          , l = n("b622")
          , c = n("6069")
          , u = n("6c59")
          , h = n("c430")
          , p = n("2d00")
          , f = i && i.prototype
          , d = l("species")
          , g = !1
          , m = o(r.PromiseRejectionEvent)
          , _ = a("Promise", (function() {
            var t = s(i)
              , e = t !== String(i);
            if (!e && 66 === p)
                return !0;
            if (h && (!f.catch || !f.finally))
                return !0;
            if (!p || p < 51 || !/native code/.test(t)) {
                var n = new i((function(t) {
                    t(1)
                }
                ))
                  , r = function(t) {
                    t((function() {}
                    ), (function() {}
                    ))
                };
                if ((n.constructor = {})[d] = r,
                !(g = n.then((function() {}
                ))instanceof r))
                    return !0
            }
            return !e && (c || u) && !m
        }
        ));
        t.exports = {
            CONSTRUCTOR: _,
            REJECTION_EVENT: m,
            SUBCLASSING: g
        }
    },
    4754: function(t, e, n) {
        "use strict";
        t.exports = function(t, e) {
            return {
                value: t,
                done: e
            }
        }
    },
    4840: function(t, e, n) {
        "use strict";
        var r = n("825a")
          , i = n("5087")
          , o = n("7234")
          , a = n("b622")("species");
        t.exports = function(t, e) {
            var n, s = r(t).constructor;
            return void 0 === s || o(n = r(s)[a]) ? e : i(n)
        }
    },
    "485a": function(t, e, n) {
        "use strict";
        var r = n("c65b")
          , i = n("1626")
          , o = n("861d")
          , a = TypeError;
        t.exports = function(t, e) {
            var n, s;
            if ("string" === e && i(n = t.toString) && !o(s = r(n, t)))
                return s;
            if (i(n = t.valueOf) && !o(s = r(n, t)))
                return s;
            if ("string" !== e && i(n = t.toString) && !o(s = r(n, t)))
                return s;
            throw new a("Can't convert object to primitive value")
        }
    },
    "499e": function(t, e, n) {
        "use strict";
        function r(t, e) {
            for (var n = [], r = {}, i = 0; i < e.length; i++) {
                var o = e[i]
                  , a = o[0]
                  , s = {
                    id: t + ":" + i,
                    css: o[1],
                    media: o[2],
                    sourceMap: o[3]
                };
                r[a] ? r[a].parts.push(s) : n.push(r[a] = {
                    id: a,
                    parts: [s]
                })
            }
            return n
        }
        n.r(e),
        n.d(e, "default", (function() {
            return d
        }
        ));
        var i = "undefined" != typeof document;
        if ("undefined" != typeof DEBUG && DEBUG && !i)
            throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
        var o = {}
          , a = i && (document.head || document.getElementsByTagName("head")[0])
          , s = null
          , l = 0
          , c = !1
          , u = function() {}
          , h = null
          , p = "data-vue-ssr-id"
          , f = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
        function d(t, e, n, i) {
            c = n,
            h = i || {};
            var a = r(t, e);
            return g(a),
            function(e) {
                for (var n = [], i = 0; i < a.length; i++) {
                    var s = a[i]
                      , l = o[s.id];
                    l.refs--,
                    n.push(l)
                }
                for (e ? g(a = r(t, e)) : a = [],
                i = 0; i < n.length; i++)
                    if (0 === (l = n[i]).refs) {
                        for (var c = 0; c < l.parts.length; c++)
                            l.parts[c]();
                        delete o[l.id]
                    }
            }
        }
        function g(t) {
            for (var e = 0; e < t.length; e++) {
                var n = t[e]
                  , r = o[n.id];
                if (r) {
                    r.refs++;
                    for (var i = 0; i < r.parts.length; i++)
                        r.parts[i](n.parts[i]);
                    for (; i < n.parts.length; i++)
                        r.parts.push(_(n.parts[i]));
                    r.parts.length > n.parts.length && (r.parts.length = n.parts.length)
                } else {
                    var a = [];
                    for (i = 0; i < n.parts.length; i++)
                        a.push(_(n.parts[i]));
                    o[n.id] = {
                        id: n.id,
                        refs: 1,
                        parts: a
                    }
                }
            }
        }
        function m() {
            var t = document.createElement("style");
            return t.type = "text/css",
            a.appendChild(t),
            t
        }
        function _(t) {
            var e, n, r = document.querySelector("style[" + p + '~="' + t.id + '"]');
            if (r) {
                if (c)
                    return u;
                r.parentNode.removeChild(r)
            }
            if (f) {
                var i = l++;
                r = s || (s = m()),
                e = v.bind(null, r, i, !1),
                n = v.bind(null, r, i, !0)
            } else
                r = m(),
                e = b.bind(null, r),
                n = function() {
                    r.parentNode.removeChild(r)
                }
                ;
            return e(t),
            function(r) {
                if (r) {
                    if (r.css === t.css && r.media === t.media && r.sourceMap === t.sourceMap)
                        return;
                    e(t = r)
                } else
                    n()
            }
        }
        var y = function() {
            var t = [];
            return function(e, n) {
                return t[e] = n,
                t.filter(Boolean).join("\n")
            }
        }();
        function v(t, e, n, r) {
            var i = n ? "" : r.css;
            if (t.styleSheet)
                t.styleSheet.cssText = y(e, i);
            else {
                var o = document.createTextNode(i)
                  , a = t.childNodes;
                a[e] && t.removeChild(a[e]),
                a.length ? t.insertBefore(o, a[e]) : t.appendChild(o)
            }
        }
        function b(t, e) {
            var n = e.css
              , r = e.media
              , i = e.sourceMap;
            if (r && t.setAttribute("media", r),
            h.ssrId && t.setAttribute(p, e.id),
            i && (n += "\n/*# sourceURL=" + i.sources[0] + " */",
            n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */"),
            t.styleSheet)
                t.styleSheet.cssText = n;
            else {
                for (; t.firstChild; )
                    t.removeChild(t.firstChild);
                t.appendChild(document.createTextNode(n))
            }
        }
    },
    "4d64": function(t, e, n) {
        "use strict";
        var r = n("fc6a")
          , i = n("23cb")
          , o = n("07fa")
          , a = function(t) {
            return function(e, n, a) {
                var s = r(e)
                  , l = o(s);
                if (0 === l)
                    return !t && -1;
                var c, u = i(a, l);
                if (t && n != n) {
                    for (; l > u; )
                        if ((c = s[u++]) != c)
                            return !0
                } else
                    for (; l > u; u++)
                        if ((t || u in s) && s[u] === n)
                            return t || u || 0;
                return !t && -1
            }
        };
        t.exports = {
            includes: a(!0),
            indexOf: a(!1)
        }
    },
    "4fad": function(t, e, n) {
        "use strict";
        var r = n("23e7")
          , i = n("6f53").entries;
        r({
            target: "Object",
            stat: !0
        }, {
            entries: function(t) {
                return i(t)
            }
        })
    },
    5087: function(t, e, n) {
        "use strict";
        var r = n("68ee")
          , i = n("0d51")
          , o = TypeError;
        t.exports = function(t) {
            if (r(t))
                return t;
            throw new o(i(t) + " is not a constructor")
        }
    },
    "50c4": function(t, e, n) {
        "use strict";
        var r = n("5926")
          , i = Math.min;
        t.exports = function(t) {
            var e = r(t);
            return e > 0 ? i(e, 9007199254740991) : 0
        }
    },
    5692: function(t, e, n) {
        "use strict";
        var r = n("c6cd");
        t.exports = function(t, e) {
            return r[t] || (r[t] = e || {})
        }
    },
    "56ef": function(t, e, n) {
        "use strict";
        var r = n("d066")
          , i = n("e330")
          , o = n("241c")
          , a = n("7418")
          , s = n("825a")
          , l = i([].concat);
        t.exports = r("Reflect", "ownKeys") || function(t) {
            var e = o.f(s(t))
              , n = a.f;
            return n ? l(e, n(t)) : e
        }
    },
    5808: function(t, e, n) {
        "use strict";
        (function(t) {
            var r, i, o, a = n("d304"), s = n("5e49"), l = n.n(s);
            function c(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }
                    ))),
                    n.push.apply(n, r)
                }
                return n
            }
            function u(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? c(Object(n), !0).forEach((function(e) {
                        h(t, e, n[e])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }
                    ))
                }
                return t
            }
            function h(t, e, n) {
                return (e = function(t) {
                    var e = function(t, e) {
                        if ("object" != p(t) || !t)
                            return t;
                        var n = t[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var r = n.call(t, e || "default");
                            if ("object" != p(r))
                                return r;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(t, "string");
                    return "symbol" == p(e) ? e : e + ""
                }(e))in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n,
                t
            }
            function p(t) {
                return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                )(t)
            }
            "function" == typeof fetch && (r = void 0 !== t && t.fetch ? t.fetch : "undefined" != typeof window && window.fetch ? window.fetch : fetch),
            Object(a.a)() && (void 0 !== t && t.XMLHttpRequest ? i = t.XMLHttpRequest : "undefined" != typeof window && window.XMLHttpRequest && (i = window.XMLHttpRequest)),
            "function" == typeof ActiveXObject && (void 0 !== t && t.ActiveXObject ? o = t.ActiveXObject : "undefined" != typeof window && window.ActiveXObject && (o = window.ActiveXObject)),
            r || !s || i || o || (r = l.a || s),
            "function" != typeof r && (r = void 0);
            var f = function(t, e) {
                if (e && "object" === p(e)) {
                    var n = "";
                    for (var r in e)
                        n += "&" + encodeURIComponent(r) + "=" + encodeURIComponent(e[r]);
                    if (!n)
                        return t;
                    t = t + (-1 !== t.indexOf("?") ? "&" : "?") + n.slice(1)
                }
                return t
            }
              , d = function(t, e, n, i) {
                var o = function(t) {
                    if (!t.ok)
                        return n(t.statusText || "Error", {
                            status: t.status
                        });
                    t.text().then((function(e) {
                        n(null, {
                            status: t.status,
                            data: e
                        })
                    }
                    )).catch(n)
                };
                if (i) {
                    var a = i(t, e);
                    if (a instanceof Promise)
                        return void a.then(o).catch(n)
                }
                "function" == typeof fetch ? fetch(t, e).then(o).catch(n) : r(t, e).then(o).catch(n)
            }
              , g = !1
              , m = function(e, n, r, i) {
                e.queryStringParams && (n = f(n, e.queryStringParams));
                var o = u({}, "function" == typeof e.customHeaders ? e.customHeaders() : e.customHeaders);
                "undefined" == typeof window && void 0 !== t && void 0 !== t.process && t.process.versions && t.process.versions.node && (o["User-Agent"] = "i18next-http-backend (node/".concat(t.process.version, "; ").concat(t.process.platform, " ").concat(t.process.arch, ")")),
                r && (o["Content-Type"] = "application/json");
                var a = "function" == typeof e.requestOptions ? e.requestOptions(r) : e.requestOptions
                  , s = u({
                    method: r ? "POST" : "GET",
                    body: r ? e.stringify(r) : void 0,
                    headers: o
                }, g ? {} : a)
                  , l = "function" == typeof e.alternateFetch && e.alternateFetch.length >= 1 ? e.alternateFetch : void 0;
                try {
                    d(n, s, i, l)
                } catch (t) {
                    if (!a || 0 === Object.keys(a).length || !t.message || t.message.indexOf("not implemented") < 0)
                        return i(t);
                    try {
                        Object.keys(a).forEach((function(t) {
                            delete s[t]
                        }
                        )),
                        d(n, s, i, l),
                        g = !0
                    } catch (t) {
                        i(t)
                    }
                }
            }
              , _ = function(t, e, n, r) {
                n && "object" === p(n) && (n = f("", n).slice(1)),
                t.queryStringParams && (e = f(e, t.queryStringParams));
                try {
                    var a;
                    (a = i ? new i : new o("MSXML2.XMLHTTP.3.0")).open(n ? "POST" : "GET", e, 1),
                    t.crossDomain || a.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                    a.withCredentials = !!t.withCredentials,
                    n && a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                    a.overrideMimeType && a.overrideMimeType("application/json");
                    var s = t.customHeaders;
                    if (s = "function" == typeof s ? s() : s)
                        for (var l in s)
                            a.setRequestHeader(l, s[l]);
                    a.onreadystatechange = function() {
                        a.readyState > 3 && r(a.status >= 400 ? a.statusText : null, {
                            status: a.status,
                            data: a.responseText
                        })
                    }
                    ,
                    a.send(n)
                } catch (t) {
                    console && console.log(t)
                }
            };
            e.a = function(t, e, n, i) {
                return "function" == typeof n && (i = n,
                n = void 0),
                i = i || function() {}
                ,
                r && 0 !== e.indexOf("file:") ? m(t, e, n, i) : Object(a.a)() || "function" == typeof ActiveXObject ? _(t, e, n, i) : void i(new Error("No fetch and no xhr implementation found!"))
            }
        }
        ).call(this, n("c8ba"))
    },
    5926: function(t, e, n) {
        "use strict";
        var r = n("b42e");
        t.exports = function(t) {
            var e = +t;
            return e != e || 0 === e ? 0 : r(e)
        }
    },
    "59ed": function(t, e, n) {
        "use strict";
        var r = n("1626")
          , i = n("0d51")
          , o = TypeError;
        t.exports = function(t) {
            if (r(t))
                return t;
            throw new o(i(t) + " is not a function")
        }
    },
    "5c6c": function(t, e, n) {
        "use strict";
        t.exports = function(t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e
            }
        }
    },
    "5d61": function(t, e, n) {
        (function(n) {
            var r = "undefined" != typeof globalThis && globalThis || "undefined" != typeof self && self || void 0 !== n && n
              , i = function() {
                function t() {
                    this.fetch = !1,
                    this.DOMException = r.DOMException
                }
                return t.prototype = r,
                new t
            }();
            (function(t) {
                !function(e) {
                    var n = void 0 !== t && t || "undefined" != typeof self && self || void 0 !== n && n
                      , r = "URLSearchParams"in n
                      , i = "Symbol"in n && "iterator"in Symbol
                      , o = "FileReader"in n && "Blob"in n && function() {
                        try {
                            return new Blob,
                            !0
                        } catch (t) {
                            return !1
                        }
                    }()
                      , a = "FormData"in n
                      , s = "ArrayBuffer"in n;
                    if (s)
                        var l = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"]
                          , c = ArrayBuffer.isView || function(t) {
                            return t && l.indexOf(Object.prototype.toString.call(t)) > -1
                        }
                        ;
                    function u(t) {
                        if ("string" != typeof t && (t = String(t)),
                        /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(t) || "" === t)
                            throw new TypeError('Invalid character in header field name: "' + t + '"');
                        return t.toLowerCase()
                    }
                    function h(t) {
                        return "string" != typeof t && (t = String(t)),
                        t
                    }
                    function p(t) {
                        var e = {
                            next: function() {
                                var e = t.shift();
                                return {
                                    done: void 0 === e,
                                    value: e
                                }
                            }
                        };
                        return i && (e[Symbol.iterator] = function() {
                            return e
                        }
                        ),
                        e
                    }
                    function f(t) {
                        this.map = {},
                        t instanceof f ? t.forEach((function(t, e) {
                            this.append(e, t)
                        }
                        ), this) : Array.isArray(t) ? t.forEach((function(t) {
                            this.append(t[0], t[1])
                        }
                        ), this) : t && Object.getOwnPropertyNames(t).forEach((function(e) {
                            this.append(e, t[e])
                        }
                        ), this)
                    }
                    function d(t) {
                        if (t.bodyUsed)
                            return Promise.reject(new TypeError("Already read"));
                        t.bodyUsed = !0
                    }
                    function g(t) {
                        return new Promise((function(e, n) {
                            t.onload = function() {
                                e(t.result)
                            }
                            ,
                            t.onerror = function() {
                                n(t.error)
                            }
                        }
                        ))
                    }
                    function m(t) {
                        var e = new FileReader
                          , n = g(e);
                        return e.readAsArrayBuffer(t),
                        n
                    }
                    function _(t) {
                        if (t.slice)
                            return t.slice(0);
                        var e = new Uint8Array(t.byteLength);
                        return e.set(new Uint8Array(t)),
                        e.buffer
                    }
                    function y() {
                        return this.bodyUsed = !1,
                        this._initBody = function(t) {
                            this.bodyUsed = this.bodyUsed,
                            this._bodyInit = t,
                            t ? "string" == typeof t ? this._bodyText = t : o && Blob.prototype.isPrototypeOf(t) ? this._bodyBlob = t : a && FormData.prototype.isPrototypeOf(t) ? this._bodyFormData = t : r && URLSearchParams.prototype.isPrototypeOf(t) ? this._bodyText = t.toString() : s && o && function(t) {
                                return t && DataView.prototype.isPrototypeOf(t)
                            }(t) ? (this._bodyArrayBuffer = _(t.buffer),
                            this._bodyInit = new Blob([this._bodyArrayBuffer])) : s && (ArrayBuffer.prototype.isPrototypeOf(t) || c(t)) ? this._bodyArrayBuffer = _(t) : this._bodyText = t = Object.prototype.toString.call(t) : this._bodyText = "",
                            this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : r && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                        }
                        ,
                        o && (this.blob = function() {
                            var t = d(this);
                            if (t)
                                return t;
                            if (this._bodyBlob)
                                return Promise.resolve(this._bodyBlob);
                            if (this._bodyArrayBuffer)
                                return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                            if (this._bodyFormData)
                                throw new Error("could not read FormData body as blob");
                            return Promise.resolve(new Blob([this._bodyText]))
                        }
                        ,
                        this.arrayBuffer = function() {
                            return this._bodyArrayBuffer ? d(this) || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer)) : this.blob().then(m)
                        }
                        ),
                        this.text = function() {
                            var t = d(this);
                            if (t)
                                return t;
                            if (this._bodyBlob)
                                return function(t) {
                                    var e = new FileReader
                                      , n = g(e);
                                    return e.readAsText(t),
                                    n
                                }(this._bodyBlob);
                            if (this._bodyArrayBuffer)
                                return Promise.resolve(function(t) {
                                    for (var e = new Uint8Array(t), n = new Array(e.length), r = 0; r < e.length; r++)
                                        n[r] = String.fromCharCode(e[r]);
                                    return n.join("")
                                }(this._bodyArrayBuffer));
                            if (this._bodyFormData)
                                throw new Error("could not read FormData body as text");
                            return Promise.resolve(this._bodyText)
                        }
                        ,
                        a && (this.formData = function() {
                            return this.text().then(w)
                        }
                        ),
                        this.json = function() {
                            return this.text().then(JSON.parse)
                        }
                        ,
                        this
                    }
                    f.prototype.append = function(t, e) {
                        t = u(t),
                        e = h(e);
                        var n = this.map[t];
                        this.map[t] = n ? n + ", " + e : e
                    }
                    ,
                    f.prototype.delete = function(t) {
                        delete this.map[u(t)]
                    }
                    ,
                    f.prototype.get = function(t) {
                        return t = u(t),
                        this.has(t) ? this.map[t] : null
                    }
                    ,
                    f.prototype.has = function(t) {
                        return this.map.hasOwnProperty(u(t))
                    }
                    ,
                    f.prototype.set = function(t, e) {
                        this.map[u(t)] = h(e)
                    }
                    ,
                    f.prototype.forEach = function(t, e) {
                        for (var n in this.map)
                            this.map.hasOwnProperty(n) && t.call(e, this.map[n], n, this)
                    }
                    ,
                    f.prototype.keys = function() {
                        var t = [];
                        return this.forEach((function(e, n) {
                            t.push(n)
                        }
                        )),
                        p(t)
                    }
                    ,
                    f.prototype.values = function() {
                        var t = [];
                        return this.forEach((function(e) {
                            t.push(e)
                        }
                        )),
                        p(t)
                    }
                    ,
                    f.prototype.entries = function() {
                        var t = [];
                        return this.forEach((function(e, n) {
                            t.push([n, e])
                        }
                        )),
                        p(t)
                    }
                    ,
                    i && (f.prototype[Symbol.iterator] = f.prototype.entries);
                    var v = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
                    function b(t, e) {
                        if (!(this instanceof b))
                            throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
                        var n = (e = e || {}).body;
                        if (t instanceof b) {
                            if (t.bodyUsed)
                                throw new TypeError("Already read");
                            this.url = t.url,
                            this.credentials = t.credentials,
                            e.headers || (this.headers = new f(t.headers)),
                            this.method = t.method,
                            this.mode = t.mode,
                            this.signal = t.signal,
                            n || null == t._bodyInit || (n = t._bodyInit,
                            t.bodyUsed = !0)
                        } else
                            this.url = String(t);
                        if (this.credentials = e.credentials || this.credentials || "same-origin",
                        !e.headers && this.headers || (this.headers = new f(e.headers)),
                        this.method = function(t) {
                            var e = t.toUpperCase();
                            return v.indexOf(e) > -1 ? e : t
                        }(e.method || this.method || "GET"),
                        this.mode = e.mode || this.mode || null,
                        this.signal = e.signal || this.signal,
                        this.referrer = null,
                        ("GET" === this.method || "HEAD" === this.method) && n)
                            throw new TypeError("Body not allowed for GET or HEAD requests");
                        if (this._initBody(n),
                        !("GET" !== this.method && "HEAD" !== this.method || "no-store" !== e.cache && "no-cache" !== e.cache)) {
                            var r = /([?&])_=[^&]*/;
                            if (r.test(this.url))
                                this.url = this.url.replace(r, "$1_=" + (new Date).getTime());
                            else {
                                this.url += (/\?/.test(this.url) ? "&" : "?") + "_=" + (new Date).getTime()
                            }
                        }
                    }
                    function w(t) {
                        var e = new FormData;
                        return t.trim().split("&").forEach((function(t) {
                            if (t) {
                                var n = t.split("=")
                                  , r = n.shift().replace(/\+/g, " ")
                                  , i = n.join("=").replace(/\+/g, " ");
                                e.append(decodeURIComponent(r), decodeURIComponent(i))
                            }
                        }
                        )),
                        e
                    }
                    function k(t) {
                        var e = new f;
                        return t.replace(/\r?\n[\t ]+/g, " ").split("\r").map((function(t) {
                            return 0 === t.indexOf("\n") ? t.substr(1, t.length) : t
                        }
                        )).forEach((function(t) {
                            var n = t.split(":")
                              , r = n.shift().trim();
                            if (r) {
                                var i = n.join(":").trim();
                                e.append(r, i)
                            }
                        }
                        )),
                        e
                    }
                    function x(t, e) {
                        if (!(this instanceof x))
                            throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
                        e || (e = {}),
                        this.type = "default",
                        this.status = void 0 === e.status ? 200 : e.status,
                        this.ok = this.status >= 200 && this.status < 300,
                        this.statusText = void 0 === e.statusText ? "" : "" + e.statusText,
                        this.headers = new f(e.headers),
                        this.url = e.url || "",
                        this._initBody(t)
                    }
                    b.prototype.clone = function() {
                        return new b(this,{
                            body: this._bodyInit
                        })
                    }
                    ,
                    y.call(b.prototype),
                    y.call(x.prototype),
                    x.prototype.clone = function() {
                        return new x(this._bodyInit,{
                            status: this.status,
                            statusText: this.statusText,
                            headers: new f(this.headers),
                            url: this.url
                        })
                    }
                    ,
                    x.error = function() {
                        var t = new x(null,{
                            status: 0,
                            statusText: ""
                        });
                        return t.type = "error",
                        t
                    }
                    ;
                    var S = [301, 302, 303, 307, 308];
                    x.redirect = function(t, e) {
                        if (-1 === S.indexOf(e))
                            throw new RangeError("Invalid status code");
                        return new x(null,{
                            status: e,
                            headers: {
                                location: t
                            }
                        })
                    }
                    ,
                    e.DOMException = n.DOMException;
                    try {
                        new e.DOMException
                    } catch (t) {
                        e.DOMException = function(t, e) {
                            this.message = t,
                            this.name = e;
                            var n = Error(t);
                            this.stack = n.stack
                        }
                        ,
                        e.DOMException.prototype = Object.create(Error.prototype),
                        e.DOMException.prototype.constructor = e.DOMException
                    }
                    function T(t, r) {
                        return new Promise((function(i, a) {
                            var l = new b(t,r);
                            if (l.signal && l.signal.aborted)
                                return a(new e.DOMException("Aborted","AbortError"));
                            var c = new XMLHttpRequest;
                            function u() {
                                c.abort()
                            }
                            c.onload = function() {
                                var t = {
                                    status: c.status,
                                    statusText: c.statusText,
                                    headers: k(c.getAllResponseHeaders() || "")
                                };
                                t.url = "responseURL"in c ? c.responseURL : t.headers.get("X-Request-URL");
                                var e = "response"in c ? c.response : c.responseText;
                                setTimeout((function() {
                                    i(new x(e,t))
                                }
                                ), 0)
                            }
                            ,
                            c.onerror = function() {
                                setTimeout((function() {
                                    a(new TypeError("Network request failed"))
                                }
                                ), 0)
                            }
                            ,
                            c.ontimeout = function() {
                                setTimeout((function() {
                                    a(new TypeError("Network request failed"))
                                }
                                ), 0)
                            }
                            ,
                            c.onabort = function() {
                                setTimeout((function() {
                                    a(new e.DOMException("Aborted","AbortError"))
                                }
                                ), 0)
                            }
                            ,
                            c.open(l.method, function(t) {
                                try {
                                    return "" === t && n.location.href ? n.location.href : t
                                } catch (e) {
                                    return t
                                }
                            }(l.url), !0),
                            "include" === l.credentials ? c.withCredentials = !0 : "omit" === l.credentials && (c.withCredentials = !1),
                            "responseType"in c && (o ? c.responseType = "blob" : s && l.headers.get("Content-Type") && -1 !== l.headers.get("Content-Type").indexOf("application/octet-stream") && (c.responseType = "arraybuffer")),
                            !r || "object" != typeof r.headers || r.headers instanceof f ? l.headers.forEach((function(t, e) {
                                c.setRequestHeader(e, t)
                            }
                            )) : Object.getOwnPropertyNames(r.headers).forEach((function(t) {
                                c.setRequestHeader(t, h(r.headers[t]))
                            }
                            )),
                            l.signal && (l.signal.addEventListener("abort", u),
                            c.onreadystatechange = function() {
                                4 === c.readyState && l.signal.removeEventListener("abort", u)
                            }
                            ),
                            c.send(void 0 === l._bodyInit ? null : l._bodyInit)
                        }
                        ))
                    }
                    T.polyfill = !0,
                    n.fetch || (n.fetch = T,
                    n.Headers = f,
                    n.Request = b,
                    n.Response = x),
                    e.Headers = f,
                    e.Request = b,
                    e.Response = x,
                    e.fetch = T
                }({})
            }
            )(i),
            i.fetch.ponyfill = !0,
            delete i.fetch.polyfill;
            var o = r.fetch ? r : i;
            (e = o.fetch).default = o.fetch,
            e.fetch = o.fetch,
            e.Headers = o.Headers,
            e.Request = o.Request,
            e.Response = o.Response,
            t.exports = e
        }
        ).call(this, n("c8ba"))
    },
    "5e49": function(t, e, n) {
        (function(r) {
            var i;
            if ("function" == typeof fetch && (i = void 0 !== r && r.fetch ? r.fetch : "undefined" != typeof window && window.fetch ? window.fetch : fetch),
            "undefined" == typeof window) {
                var o = i || n("5d61");
                o.default && (o = o.default),
                e.default = o,
                t.exports = e.default
            }
        }
        ).call(this, n("c8ba"))
    },
    "5e77": function(t, e, n) {
        "use strict";
        var r = n("83ab")
          , i = n("1a2d")
          , o = Function.prototype
          , a = r && Object.getOwnPropertyDescriptor
          , s = i(o, "name")
          , l = s && "something" === function() {}
        .name
          , c = s && (!r || r && a(o, "name").configurable);
        t.exports = {
            EXISTS: s,
            PROPER: l,
            CONFIGURABLE: c
        }
    },
    "5e7e": function(t, e, n) {
        "use strict";
        var r, i, o, a = n("23e7"), s = n("c430"), l = n("605d"), c = n("da84"), u = n("c65b"), h = n("cb2d"), p = n("d2bb"), f = n("d44e"), d = n("2626"), g = n("59ed"), m = n("1626"), _ = n("861d"), y = n("19aa"), v = n("4840"), b = n("2cf4").set, w = n("b575"), k = n("44de"), x = n("e667"), S = n("01b4"), T = n("69f3"), C = n("d256"), O = n("4738"), E = n("f069"), L = "Promise", j = O.CONSTRUCTOR, R = O.REJECTION_EVENT, A = O.SUBCLASSING, P = T.getterFor(L), I = T.set, $ = C && C.prototype, D = C, B = $, N = c.TypeError, M = c.document, q = c.process, H = E.f, U = H, F = !!(M && M.createEvent && c.dispatchEvent), z = "unhandledrejection", X = function(t) {
            var e;
            return !(!_(t) || !m(e = t.then)) && e
        }, W = function(t, e) {
            var n, r, i, o = e.value, a = 1 === e.state, s = a ? t.ok : t.fail, l = t.resolve, c = t.reject, h = t.domain;
            try {
                s ? (a || (2 === e.rejection && G(e),
                e.rejection = 1),
                !0 === s ? n = o : (h && h.enter(),
                n = s(o),
                h && (h.exit(),
                i = !0)),
                n === t.promise ? c(new N("Promise-chain cycle")) : (r = X(n)) ? u(r, n, l, c) : l(n)) : c(o)
            } catch (t) {
                h && !i && h.exit(),
                c(t)
            }
        }, V = function(t, e) {
            t.notified || (t.notified = !0,
            w((function() {
                for (var n, r = t.reactions; n = r.get(); )
                    W(n, t);
                t.notified = !1,
                e && !t.rejection && K(t)
            }
            )))
        }, Y = function(t, e, n) {
            var r, i;
            F ? ((r = M.createEvent("Event")).promise = e,
            r.reason = n,
            r.initEvent(t, !1, !0),
            c.dispatchEvent(r)) : r = {
                promise: e,
                reason: n
            },
            !R && (i = c["on" + t]) ? i(r) : t === z && k("Unhandled promise rejection", n)
        }, K = function(t) {
            u(b, c, (function() {
                var e, n = t.facade, r = t.value;
                if (J(t) && (e = x((function() {
                    l ? q.emit("unhandledRejection", r, n) : Y(z, n, r)
                }
                )),
                t.rejection = l || J(t) ? 2 : 1,
                e.error))
                    throw e.value
            }
            ))
        }, J = function(t) {
            return 1 !== t.rejection && !t.parent
        }, G = function(t) {
            u(b, c, (function() {
                var e = t.facade;
                l ? q.emit("rejectionHandled", e) : Y("rejectionhandled", e, t.value)
            }
            ))
        }, Q = function(t, e, n) {
            return function(r) {
                t(e, r, n)
            }
        }, Z = function(t, e, n) {
            t.done || (t.done = !0,
            n && (t = n),
            t.value = e,
            t.state = 2,
            V(t, !0))
        }, tt = function(t, e, n) {
            if (!t.done) {
                t.done = !0,
                n && (t = n);
                try {
                    if (t.facade === e)
                        throw new N("Promise can't be resolved itself");
                    var r = X(e);
                    r ? w((function() {
                        var n = {
                            done: !1
                        };
                        try {
                            u(r, e, Q(tt, n, t), Q(Z, n, t))
                        } catch (e) {
                            Z(n, e, t)
                        }
                    }
                    )) : (t.value = e,
                    t.state = 1,
                    V(t, !1))
                } catch (e) {
                    Z({
                        done: !1
                    }, e, t)
                }
            }
        };
        if (j && (B = (D = function(t) {
            y(this, B),
            g(t),
            u(r, this);
            var e = P(this);
            try {
                t(Q(tt, e), Q(Z, e))
            } catch (t) {
                Z(e, t)
            }
        }
        ).prototype,
        (r = function(t) {
            I(this, {
                type: L,
                done: !1,
                notified: !1,
                parent: !1,
                reactions: new S,
                rejection: !1,
                state: 0,
                value: void 0
            })
        }
        ).prototype = h(B, "then", (function(t, e) {
            var n = P(this)
              , r = H(v(this, D));
            return n.parent = !0,
            r.ok = !m(t) || t,
            r.fail = m(e) && e,
            r.domain = l ? q.domain : void 0,
            0 === n.state ? n.reactions.add(r) : w((function() {
                W(r, n)
            }
            )),
            r.promise
        }
        )),
        i = function() {
            var t = new r
              , e = P(t);
            this.promise = t,
            this.resolve = Q(tt, e),
            this.reject = Q(Z, e)
        }
        ,
        E.f = H = function(t) {
            return t === D || void 0 === t ? new i(t) : U(t)
        }
        ,
        !s && m(C) && $ !== Object.prototype)) {
            o = $.then,
            A || h($, "then", (function(t, e) {
                var n = this;
                return new D((function(t, e) {
                    u(o, n, t, e)
                }
                )).then(t, e)
            }
            ), {
                unsafe: !0
            });
            try {
                delete $.constructor
            } catch (t) {}
            p && p($, B)
        }
        a({
            global: !0,
            constructor: !0,
            wrap: !0,
            forced: j
        }, {
            Promise: D
        }),
        f(D, L, !1, !0),
        d(L)
    },
    "5eed": function(t, e, n) {
        "use strict";
        var r = n("d256")
          , i = n("1c7e")
          , o = n("4738").CONSTRUCTOR;
        t.exports = o || !i((function(t) {
            r.all(t).then(void 0, (function() {}
            ))
        }
        ))
    },
    "5f34": function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return U
        }
        ));
        const r = {
            type: "logger",
            log(t) {
                this.output("log", t)
            },
            warn(t) {
                this.output("warn", t)
            },
            error(t) {
                this.output("error", t)
            },
            output(t, e) {
                console && console[t] && console[t].apply(console, e)
            }
        };
        class i {
            constructor(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                this.init(t, e)
            }
            init(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                this.prefix = e.prefix || "i18next:",
                this.logger = t || r,
                this.options = e,
                this.debug = e.debug
            }
            log() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                    e[n] = arguments[n];
                return this.forward(e, "log", "", !0)
            }
            warn() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                    e[n] = arguments[n];
                return this.forward(e, "warn", "", !0)
            }
            error() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                    e[n] = arguments[n];
                return this.forward(e, "error", "")
            }
            deprecate() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                    e[n] = arguments[n];
                return this.forward(e, "warn", "WARNING DEPRECATED: ", !0)
            }
            forward(t, e, n, r) {
                return r && !this.debug ? null : ("string" == typeof t[0] && (t[0] = `${n}${this.prefix} ${t[0]}`),
                this.logger[e](t))
            }
            create(t) {
                return new i(this.logger,{
                    prefix: `${this.prefix}:${t}:`,
                    ...this.options
                })
            }
            clone(t) {
                return (t = t || this.options).prefix = t.prefix || this.prefix,
                new i(this.logger,t)
            }
        }
        var o = new i;
        class a {
            constructor() {
                this.observers = {}
            }
            on(t, e) {
                return t.split(" ").forEach(t => {
                    this.observers[t] || (this.observers[t] = new Map);
                    const n = this.observers[t].get(e) || 0;
                    this.observers[t].set(e, n + 1)
                }
                ),
                this
            }
            off(t, e) {
                this.observers[t] && (e ? this.observers[t].delete(e) : delete this.observers[t])
            }
            emit(t) {
                for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
                    n[r - 1] = arguments[r];
                if (this.observers[t]) {
                    Array.from(this.observers[t].entries()).forEach(t => {
                        let[e,r] = t;
                        for (let t = 0; t < r; t++)
                            e(...n)
                    }
                    )
                }
                if (this.observers["*"]) {
                    Array.from(this.observers["*"].entries()).forEach(e => {
                        let[r,i] = e;
                        for (let e = 0; e < i; e++)
                            r.apply(r, [t, ...n])
                    }
                    )
                }
            }
        }
        function s() {
            let t, e;
            const n = new Promise( (n, r) => {
                t = n,
                e = r
            }
            );
            return n.resolve = t,
            n.reject = e,
            n
        }
        function l(t) {
            return null == t ? "" : "" + t
        }
        const c = /###/g;
        function u(t, e, n) {
            function r(t) {
                return t && t.indexOf("###") > -1 ? t.replace(c, ".") : t
            }
            function i() {
                return !t || "string" == typeof t
            }
            const o = "string" != typeof e ? e : e.split(".");
            let a = 0;
            for (; a < o.length - 1; ) {
                if (i())
                    return {};
                const e = r(o[a]);
                !t[e] && n && (t[e] = new n),
                t = Object.prototype.hasOwnProperty.call(t, e) ? t[e] : {},
                ++a
            }
            return i() ? {} : {
                obj: t,
                k: r(o[a])
            }
        }
        function h(t, e, n) {
            const {obj: r, k: i} = u(t, e, Object);
            if (void 0 !== r || 1 === e.length)
                return void (r[i] = n);
            let o = e[e.length - 1]
              , a = e.slice(0, e.length - 1)
              , s = u(t, a, Object);
            for (; void 0 === s.obj && a.length; )
                o = `${a[a.length - 1]}.${o}`,
                a = a.slice(0, a.length - 1),
                s = u(t, a, Object),
                s && s.obj && void 0 !== s.obj[`${s.k}.${o}`] && (s.obj = void 0);
            s.obj[`${s.k}.${o}`] = n
        }
        function p(t, e) {
            const {obj: n, k: r} = u(t, e);
            if (n)
                return n[r]
        }
        function f(t, e, n) {
            const r = p(t, n);
            return void 0 !== r ? r : p(e, n)
        }
        function d(t) {
            return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
        }
        var g = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;"
        };
        function m(t) {
            return "string" == typeof t ? t.replace(/[&<>"'\/]/g, t => g[t]) : t
        }
        const _ = [" ", ",", "?", "!", ";"]
          , y = new class {
            constructor(t) {
                this.capacity = t,
                this.regExpMap = new Map,
                this.regExpQueue = []
            }
            getRegExp(t) {
                const e = this.regExpMap.get(t);
                if (void 0 !== e)
                    return e;
                const n = new RegExp(t);
                return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()),
                this.regExpMap.set(t, n),
                this.regExpQueue.push(t),
                n
            }
        }
        (20);
        function v(t, e) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ".";
            if (!t)
                return;
            if (t[e])
                return t[e];
            const r = e.split(n);
            let i = t;
            for (let t = 0; t < r.length; ) {
                if (!i || "object" != typeof i)
                    return;
                let e, o = "";
                for (let a = t; a < r.length; ++a)
                    if (a !== t && (o += n),
                    o += r[a],
                    e = i[o],
                    void 0 !== e) {
                        if (["string", "number", "boolean"].indexOf(typeof e) > -1 && a < r.length - 1)
                            continue;
                        t += a - t + 1;
                        break
                    }
                i = e
            }
            return i
        }
        function b(t) {
            return t && t.indexOf("_") > 0 ? t.replace("_", "-") : t
        }
        class w extends a {
            constructor(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    ns: ["translation"],
                    defaultNS: "translation"
                };
                super(),
                this.data = t || {},
                this.options = e,
                void 0 === this.options.keySeparator && (this.options.keySeparator = "."),
                void 0 === this.options.ignoreJSONStructure && (this.options.ignoreJSONStructure = !0)
            }
            addNamespaces(t) {
                this.options.ns.indexOf(t) < 0 && this.options.ns.push(t)
            }
            removeNamespaces(t) {
                const e = this.options.ns.indexOf(t);
                e > -1 && this.options.ns.splice(e, 1)
            }
            getResource(t, e, n) {
                let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                const i = void 0 !== r.keySeparator ? r.keySeparator : this.options.keySeparator
                  , o = void 0 !== r.ignoreJSONStructure ? r.ignoreJSONStructure : this.options.ignoreJSONStructure;
                let a;
                t.indexOf(".") > -1 ? a = t.split(".") : (a = [t, e],
                n && (Array.isArray(n) ? a.push(...n) : "string" == typeof n && i ? a.push(...n.split(i)) : a.push(n)));
                const s = p(this.data, a);
                return !s && !e && !n && t.indexOf(".") > -1 && (t = a[0],
                e = a[1],
                n = a.slice(2).join(".")),
                s || !o || "string" != typeof n ? s : v(this.data && this.data[t] && this.data[t][e], n, i)
            }
            addResource(t, e, n, r) {
                let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                    silent: !1
                };
                const o = void 0 !== i.keySeparator ? i.keySeparator : this.options.keySeparator;
                let a = [t, e];
                n && (a = a.concat(o ? n.split(o) : n)),
                t.indexOf(".") > -1 && (a = t.split("."),
                r = e,
                e = a[1]),
                this.addNamespaces(e),
                h(this.data, a, r),
                i.silent || this.emit("added", t, e, n, r)
            }
            addResources(t, e, n) {
                let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                    silent: !1
                };
                for (const r in n)
                    ("string" == typeof n[r] || Array.isArray(n[r])) && this.addResource(t, e, r, n[r], {
                        silent: !0
                    });
                r.silent || this.emit("added", t, e, n)
            }
            addResourceBundle(t, e, n, r, i) {
                let o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {
                    silent: !1,
                    skipCopy: !1
                }
                  , a = [t, e];
                t.indexOf(".") > -1 && (a = t.split("."),
                r = n,
                n = e,
                e = a[1]),
                this.addNamespaces(e);
                let s = p(this.data, a) || {};
                o.skipCopy || (n = JSON.parse(JSON.stringify(n))),
                r ? function t(e, n, r) {
                    for (const i in n)
                        "__proto__" !== i && "constructor" !== i && (i in e ? "string" == typeof e[i] || e[i]instanceof String || "string" == typeof n[i] || n[i]instanceof String ? r && (e[i] = n[i]) : t(e[i], n[i], r) : e[i] = n[i]);
                    return e
                }(s, n, i) : s = {
                    ...s,
                    ...n
                },
                h(this.data, a, s),
                o.silent || this.emit("added", t, e, n)
            }
            removeResourceBundle(t, e) {
                this.hasResourceBundle(t, e) && delete this.data[t][e],
                this.removeNamespaces(e),
                this.emit("removed", t, e)
            }
            hasResourceBundle(t, e) {
                return void 0 !== this.getResource(t, e)
            }
            getResourceBundle(t, e) {
                return e || (e = this.options.defaultNS),
                "v1" === this.options.compatibilityAPI ? {
                    ...this.getResource(t, e)
                } : this.getResource(t, e)
            }
            getDataByLanguage(t) {
                return this.data[t]
            }
            hasLanguageSomeTranslations(t) {
                const e = this.getDataByLanguage(t);
                return !!(e && Object.keys(e) || []).find(t => e[t] && Object.keys(e[t]).length > 0)
            }
            toJSON() {
                return this.data
            }
        }
        var k = {
            processors: {},
            addPostProcessor(t) {
                this.processors[t.name] = t
            },
            handle(t, e, n, r, i) {
                return t.forEach(t => {
                    this.processors[t] && (e = this.processors[t].process(e, n, r, i))
                }
                ),
                e
            }
        };
        const x = {};
        class S extends a {
            constructor(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                super(),
                function(t, e, n) {
                    t.forEach(t => {
                        e[t] && (n[t] = e[t])
                    }
                    )
                }(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], t, this),
                this.options = e,
                void 0 === this.options.keySeparator && (this.options.keySeparator = "."),
                this.logger = o.create("translator")
            }
            changeLanguage(t) {
                t && (this.language = t)
            }
            exists(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    interpolation: {}
                };
                if (null == t)
                    return !1;
                const n = this.resolve(t, e);
                return n && void 0 !== n.res
            }
            extractFromKey(t, e) {
                let n = void 0 !== e.nsSeparator ? e.nsSeparator : this.options.nsSeparator;
                void 0 === n && (n = ":");
                const r = void 0 !== e.keySeparator ? e.keySeparator : this.options.keySeparator;
                let i = e.ns || this.options.defaultNS || [];
                const o = n && t.indexOf(n) > -1
                  , a = !(this.options.userDefinedKeySeparator || e.keySeparator || this.options.userDefinedNsSeparator || e.nsSeparator || function(t, e, n) {
                    e = e || "",
                    n = n || "";
                    const r = _.filter(t => e.indexOf(t) < 0 && n.indexOf(t) < 0);
                    if (0 === r.length)
                        return !0;
                    const i = y.getRegExp(`(${r.map(t => "?" === t ? "\\?" : t).join("|")})`);
                    let o = !i.test(t);
                    if (!o) {
                        const e = t.indexOf(n);
                        e > 0 && !i.test(t.substring(0, e)) && (o = !0)
                    }
                    return o
                }(t, n, r));
                if (o && !a) {
                    const e = t.match(this.interpolator.nestingRegexp);
                    if (e && e.length > 0)
                        return {
                            key: t,
                            namespaces: i
                        };
                    const o = t.split(n);
                    (n !== r || n === r && this.options.ns.indexOf(o[0]) > -1) && (i = o.shift()),
                    t = o.join(r)
                }
                return "string" == typeof i && (i = [i]),
                {
                    key: t,
                    namespaces: i
                }
            }
            translate(t, e, n) {
                if ("object" != typeof e && this.options.overloadTranslationOptionHandler && (e = this.options.overloadTranslationOptionHandler(arguments)),
                "object" == typeof e && (e = {
                    ...e
                }),
                e || (e = {}),
                null == t)
                    return "";
                Array.isArray(t) || (t = [String(t)]);
                const r = void 0 !== e.returnDetails ? e.returnDetails : this.options.returnDetails
                  , i = void 0 !== e.keySeparator ? e.keySeparator : this.options.keySeparator
                  , {key: o, namespaces: a} = this.extractFromKey(t[t.length - 1], e)
                  , s = a[a.length - 1]
                  , l = e.lng || this.language
                  , c = e.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
                if (l && "cimode" === l.toLowerCase()) {
                    if (c) {
                        const t = e.nsSeparator || this.options.nsSeparator;
                        return r ? {
                            res: `${s}${t}${o}`,
                            usedKey: o,
                            exactUsedKey: o,
                            usedLng: l,
                            usedNS: s,
                            usedParams: this.getUsedParamsDetails(e)
                        } : `${s}${t}${o}`
                    }
                    return r ? {
                        res: o,
                        usedKey: o,
                        exactUsedKey: o,
                        usedLng: l,
                        usedNS: s,
                        usedParams: this.getUsedParamsDetails(e)
                    } : o
                }
                const u = this.resolve(t, e);
                let h = u && u.res;
                const p = u && u.usedKey || o
                  , f = u && u.exactUsedKey || o
                  , d = Object.prototype.toString.apply(h)
                  , g = void 0 !== e.joinArrays ? e.joinArrays : this.options.joinArrays
                  , m = !this.i18nFormat || this.i18nFormat.handleAsObject;
                if (m && h && ("string" != typeof h && "boolean" != typeof h && "number" != typeof h) && ["[object Number]", "[object Function]", "[object RegExp]"].indexOf(d) < 0 && ("string" != typeof g || !Array.isArray(h))) {
                    if (!e.returnObjects && !this.options.returnObjects) {
                        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
                        const t = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(p, h, {
                            ...e,
                            ns: a
                        }) : `key '${o} (${this.language})' returned an object instead of string.`;
                        return r ? (u.res = t,
                        u.usedParams = this.getUsedParamsDetails(e),
                        u) : t
                    }
                    if (i) {
                        const t = Array.isArray(h)
                          , n = t ? [] : {}
                          , r = t ? f : p;
                        for (const t in h)
                            if (Object.prototype.hasOwnProperty.call(h, t)) {
                                const o = `${r}${i}${t}`;
                                n[t] = this.translate(o, {
                                    ...e,
                                    joinArrays: !1,
                                    ns: a
                                }),
                                n[t] === o && (n[t] = h[t])
                            }
                        h = n
                    }
                } else if (m && "string" == typeof g && Array.isArray(h))
                    h = h.join(g),
                    h && (h = this.extendTranslation(h, t, e, n));
                else {
                    let r = !1
                      , a = !1;
                    const c = void 0 !== e.count && "string" != typeof e.count
                      , p = S.hasDefaultValue(e)
                      , f = c ? this.pluralResolver.getSuffix(l, e.count, e) : ""
                      , d = e.ordinal && c ? this.pluralResolver.getSuffix(l, e.count, {
                        ordinal: !1
                    }) : ""
                      , g = c && !e.ordinal && 0 === e.count && this.pluralResolver.shouldUseIntlApi()
                      , m = g && e[`defaultValue${this.options.pluralSeparator}zero`] || e["defaultValue" + f] || e["defaultValue" + d] || e.defaultValue;
                    !this.isValidLookup(h) && p && (r = !0,
                    h = m),
                    this.isValidLookup(h) || (a = !0,
                    h = o);
                    const _ = (e.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && a ? void 0 : h
                      , y = p && m !== h && this.options.updateMissing;
                    if (a || r || y) {
                        if (this.logger.log(y ? "updateKey" : "missingKey", l, s, o, y ? m : h),
                        i) {
                            const t = this.resolve(o, {
                                ...e,
                                keySeparator: !1
                            });
                            t && t.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
                        }
                        let t = [];
                        const n = this.languageUtils.getFallbackCodes(this.options.fallbackLng, e.lng || this.language);
                        if ("fallback" === this.options.saveMissingTo && n && n[0])
                            for (let e = 0; e < n.length; e++)
                                t.push(n[e]);
                        else
                            "all" === this.options.saveMissingTo ? t = this.languageUtils.toResolveHierarchy(e.lng || this.language) : t.push(e.lng || this.language);
                        const r = (t, n, r) => {
                            const i = p && r !== h ? r : _;
                            this.options.missingKeyHandler ? this.options.missingKeyHandler(t, s, n, i, y, e) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(t, s, n, i, y, e),
                            this.emit("missingKey", t, s, n, h)
                        }
                        ;
                        this.options.saveMissing && (this.options.saveMissingPlurals && c ? t.forEach(t => {
                            const n = this.pluralResolver.getSuffixes(t, e);
                            g && e[`defaultValue${this.options.pluralSeparator}zero`] && n.indexOf(this.options.pluralSeparator + "zero") < 0 && n.push(this.options.pluralSeparator + "zero"),
                            n.forEach(n => {
                                r([t], o + n, e["defaultValue" + n] || m)
                            }
                            )
                        }
                        ) : r(t, o, m))
                    }
                    h = this.extendTranslation(h, t, e, u, n),
                    a && h === o && this.options.appendNamespaceToMissingKey && (h = `${s}:${o}`),
                    (a || r) && this.options.parseMissingKeyHandler && (h = "v1" !== this.options.compatibilityAPI ? this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${s}:${o}` : o, r ? h : void 0) : this.options.parseMissingKeyHandler(h))
                }
                return r ? (u.res = h,
                u.usedParams = this.getUsedParamsDetails(e),
                u) : h
            }
            extendTranslation(t, e, n, r, i) {
                var o = this;
                if (this.i18nFormat && this.i18nFormat.parse)
                    t = this.i18nFormat.parse(t, {
                        ...this.options.interpolation.defaultVariables,
                        ...n
                    }, n.lng || this.language || r.usedLng, r.usedNS, r.usedKey, {
                        resolved: r
                    });
                else if (!n.skipInterpolation) {
                    n.interpolation && this.interpolator.init({
                        ...n,
                        interpolation: {
                            ...this.options.interpolation,
                            ...n.interpolation
                        }
                    });
                    const a = "string" == typeof t && (n && n.interpolation && void 0 !== n.interpolation.skipOnVariables ? n.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
                    let s;
                    if (a) {
                        const e = t.match(this.interpolator.nestingRegexp);
                        s = e && e.length
                    }
                    let l = n.replace && "string" != typeof n.replace ? n.replace : n;
                    if (this.options.interpolation.defaultVariables && (l = {
                        ...this.options.interpolation.defaultVariables,
                        ...l
                    }),
                    t = this.interpolator.interpolate(t, l, n.lng || this.language, n),
                    a) {
                        const e = t.match(this.interpolator.nestingRegexp);
                        s < (e && e.length) && (n.nest = !1)
                    }
                    !n.lng && "v1" !== this.options.compatibilityAPI && r && r.res && (n.lng = r.usedLng),
                    !1 !== n.nest && (t = this.interpolator.nest(t, (function() {
                        for (var t = arguments.length, r = new Array(t), a = 0; a < t; a++)
                            r[a] = arguments[a];
                        return i && i[0] === r[0] && !n.context ? (o.logger.warn(`It seems you are nesting recursively key: ${r[0]} in key: ${e[0]}`),
                        null) : o.translate(...r, e)
                    }
                    ), n)),
                    n.interpolation && this.interpolator.reset()
                }
                const a = n.postProcess || this.options.postProcess
                  , s = "string" == typeof a ? [a] : a;
                return null != t && s && s.length && !1 !== n.applyPostProcessor && (t = k.handle(s, t, e, this.options && this.options.postProcessPassResolved ? {
                    i18nResolved: {
                        ...r,
                        usedParams: this.getUsedParamsDetails(n)
                    },
                    ...n
                } : n, this)),
                t
            }
            resolve(t) {
                let e, n, r, i, o, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return "string" == typeof t && (t = [t]),
                t.forEach(t => {
                    if (this.isValidLookup(e))
                        return;
                    const s = this.extractFromKey(t, a)
                      , l = s.key;
                    n = l;
                    let c = s.namespaces;
                    this.options.fallbackNS && (c = c.concat(this.options.fallbackNS));
                    const u = void 0 !== a.count && "string" != typeof a.count
                      , h = u && !a.ordinal && 0 === a.count && this.pluralResolver.shouldUseIntlApi()
                      , p = void 0 !== a.context && ("string" == typeof a.context || "number" == typeof a.context) && "" !== a.context
                      , f = a.lngs ? a.lngs : this.languageUtils.toResolveHierarchy(a.lng || this.language, a.fallbackLng);
                    c.forEach(t => {
                        this.isValidLookup(e) || (o = t,
                        !x[`${f[0]}-${t}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(o) && (x[`${f[0]}-${t}`] = !0,
                        this.logger.warn(`key "${n}" for languages "${f.join(", ")}" won't get resolved as namespace "${o}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),
                        f.forEach(n => {
                            if (this.isValidLookup(e))
                                return;
                            i = n;
                            const o = [l];
                            if (this.i18nFormat && this.i18nFormat.addLookupKeys)
                                this.i18nFormat.addLookupKeys(o, l, n, t, a);
                            else {
                                let t;
                                u && (t = this.pluralResolver.getSuffix(n, a.count, a));
                                const e = this.options.pluralSeparator + "zero"
                                  , r = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                                if (u && (o.push(l + t),
                                a.ordinal && 0 === t.indexOf(r) && o.push(l + t.replace(r, this.options.pluralSeparator)),
                                h && o.push(l + e)),
                                p) {
                                    const n = `${l}${this.options.contextSeparator}${a.context}`;
                                    o.push(n),
                                    u && (o.push(n + t),
                                    a.ordinal && 0 === t.indexOf(r) && o.push(n + t.replace(r, this.options.pluralSeparator)),
                                    h && o.push(n + e))
                                }
                            }
                            let s;
                            for (; s = o.pop(); )
                                this.isValidLookup(e) || (r = s,
                                e = this.getResource(n, t, s, a))
                        }
                        ))
                    }
                    )
                }
                ),
                {
                    res: e,
                    usedKey: n,
                    exactUsedKey: r,
                    usedLng: i,
                    usedNS: o
                }
            }
            isValidLookup(t) {
                return !(void 0 === t || !this.options.returnNull && null === t || !this.options.returnEmptyString && "" === t)
            }
            getResource(t, e, n) {
                let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(t, e, n, r) : this.resourceStore.getResource(t, e, n, r)
            }
            getUsedParamsDetails() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                const e = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"]
                  , n = t.replace && "string" != typeof t.replace;
                let r = n ? t.replace : t;
                if (n && void 0 !== t.count && (r.count = t.count),
                this.options.interpolation.defaultVariables && (r = {
                    ...this.options.interpolation.defaultVariables,
                    ...r
                }),
                !n) {
                    r = {
                        ...r
                    };
                    for (const t of e)
                        delete r[t]
                }
                return r
            }
            static hasDefaultValue(t) {
                const e = "defaultValue";
                for (const n in t)
                    if (Object.prototype.hasOwnProperty.call(t, n) && e === n.substring(0, e.length) && void 0 !== t[n])
                        return !0;
                return !1
            }
        }
        function T(t) {
            return t.charAt(0).toUpperCase() + t.slice(1)
        }
        class C {
            constructor(t) {
                this.options = t,
                this.supportedLngs = this.options.supportedLngs || !1,
                this.logger = o.create("languageUtils")
            }
            getScriptPartFromCode(t) {
                if (!(t = b(t)) || t.indexOf("-") < 0)
                    return null;
                const e = t.split("-");
                return 2 === e.length ? null : (e.pop(),
                "x" === e[e.length - 1].toLowerCase() ? null : this.formatLanguageCode(e.join("-")))
            }
            getLanguagePartFromCode(t) {
                if (!(t = b(t)) || t.indexOf("-") < 0)
                    return t;
                const e = t.split("-");
                return this.formatLanguageCode(e[0])
            }
            formatLanguageCode(t) {
                if ("string" == typeof t && t.indexOf("-") > -1) {
                    const e = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
                    let n = t.split("-");
                    return this.options.lowerCaseLng ? n = n.map(t => t.toLowerCase()) : 2 === n.length ? (n[0] = n[0].toLowerCase(),
                    n[1] = n[1].toUpperCase(),
                    e.indexOf(n[1].toLowerCase()) > -1 && (n[1] = T(n[1].toLowerCase()))) : 3 === n.length && (n[0] = n[0].toLowerCase(),
                    2 === n[1].length && (n[1] = n[1].toUpperCase()),
                    "sgn" !== n[0] && 2 === n[2].length && (n[2] = n[2].toUpperCase()),
                    e.indexOf(n[1].toLowerCase()) > -1 && (n[1] = T(n[1].toLowerCase())),
                    e.indexOf(n[2].toLowerCase()) > -1 && (n[2] = T(n[2].toLowerCase()))),
                    n.join("-")
                }
                return this.options.cleanCode || this.options.lowerCaseLng ? t.toLowerCase() : t
            }
            isSupportedCode(t) {
                return ("languageOnly" === this.options.load || this.options.nonExplicitSupportedLngs) && (t = this.getLanguagePartFromCode(t)),
                !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(t) > -1
            }
            getBestMatchFromCodes(t) {
                if (!t)
                    return null;
                let e;
                return t.forEach(t => {
                    if (e)
                        return;
                    const n = this.formatLanguageCode(t);
                    this.options.supportedLngs && !this.isSupportedCode(n) || (e = n)
                }
                ),
                !e && this.options.supportedLngs && t.forEach(t => {
                    if (e)
                        return;
                    const n = this.getLanguagePartFromCode(t);
                    if (this.isSupportedCode(n))
                        return e = n;
                    e = this.options.supportedLngs.find(t => t === n ? t : t.indexOf("-") < 0 && n.indexOf("-") < 0 ? void 0 : t.indexOf("-") > 0 && n.indexOf("-") < 0 && t.substring(0, t.indexOf("-")) === n || 0 === t.indexOf(n) && n.length > 1 ? t : void 0)
                }
                ),
                e || (e = this.getFallbackCodes(this.options.fallbackLng)[0]),
                e
            }
            getFallbackCodes(t, e) {
                if (!t)
                    return [];
                if ("function" == typeof t && (t = t(e)),
                "string" == typeof t && (t = [t]),
                Array.isArray(t))
                    return t;
                if (!e)
                    return t.default || [];
                let n = t[e];
                return n || (n = t[this.getScriptPartFromCode(e)]),
                n || (n = t[this.formatLanguageCode(e)]),
                n || (n = t[this.getLanguagePartFromCode(e)]),
                n || (n = t.default),
                n || []
            }
            toResolveHierarchy(t, e) {
                const n = this.getFallbackCodes(e || this.options.fallbackLng || [], t)
                  , r = []
                  , i = t => {
                    t && (this.isSupportedCode(t) ? r.push(t) : this.logger.warn("rejecting language code not found in supportedLngs: " + t))
                }
                ;
                return "string" == typeof t && (t.indexOf("-") > -1 || t.indexOf("_") > -1) ? ("languageOnly" !== this.options.load && i(this.formatLanguageCode(t)),
                "languageOnly" !== this.options.load && "currentOnly" !== this.options.load && i(this.getScriptPartFromCode(t)),
                "currentOnly" !== this.options.load && i(this.getLanguagePartFromCode(t))) : "string" == typeof t && i(this.formatLanguageCode(t)),
                n.forEach(t => {
                    r.indexOf(t) < 0 && i(this.formatLanguageCode(t))
                }
                ),
                r
            }
        }
        let O = [{
            lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
            nr: [1, 2],
            fc: 1
        }, {
            lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
            nr: [1, 2],
            fc: 2
        }, {
            lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
            nr: [1],
            fc: 3
        }, {
            lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
            nr: [1, 2, 5],
            fc: 4
        }, {
            lngs: ["ar"],
            nr: [0, 1, 2, 3, 11, 100],
            fc: 5
        }, {
            lngs: ["cs", "sk"],
            nr: [1, 2, 5],
            fc: 6
        }, {
            lngs: ["csb", "pl"],
            nr: [1, 2, 5],
            fc: 7
        }, {
            lngs: ["cy"],
            nr: [1, 2, 3, 8],
            fc: 8
        }, {
            lngs: ["fr"],
            nr: [1, 2],
            fc: 9
        }, {
            lngs: ["ga"],
            nr: [1, 2, 3, 7, 11],
            fc: 10
        }, {
            lngs: ["gd"],
            nr: [1, 2, 3, 20],
            fc: 11
        }, {
            lngs: ["is"],
            nr: [1, 2],
            fc: 12
        }, {
            lngs: ["jv"],
            nr: [0, 1],
            fc: 13
        }, {
            lngs: ["kw"],
            nr: [1, 2, 3, 4],
            fc: 14
        }, {
            lngs: ["lt"],
            nr: [1, 2, 10],
            fc: 15
        }, {
            lngs: ["lv"],
            nr: [1, 2, 0],
            fc: 16
        }, {
            lngs: ["mk"],
            nr: [1, 2],
            fc: 17
        }, {
            lngs: ["mnk"],
            nr: [0, 1, 2],
            fc: 18
        }, {
            lngs: ["mt"],
            nr: [1, 2, 11, 20],
            fc: 19
        }, {
            lngs: ["or"],
            nr: [2, 1],
            fc: 2
        }, {
            lngs: ["ro"],
            nr: [1, 2, 20],
            fc: 20
        }, {
            lngs: ["sl"],
            nr: [5, 1, 2, 3],
            fc: 21
        }, {
            lngs: ["he", "iw"],
            nr: [1, 2, 20, 21],
            fc: 22
        }]
          , E = {
            1: function(t) {
                return Number(t > 1)
            },
            2: function(t) {
                return Number(1 != t)
            },
            3: function(t) {
                return 0
            },
            4: function(t) {
                return Number(t % 10 == 1 && t % 100 != 11 ? 0 : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2)
            },
            5: function(t) {
                return Number(0 == t ? 0 : 1 == t ? 1 : 2 == t ? 2 : t % 100 >= 3 && t % 100 <= 10 ? 3 : t % 100 >= 11 ? 4 : 5)
            },
            6: function(t) {
                return Number(1 == t ? 0 : t >= 2 && t <= 4 ? 1 : 2)
            },
            7: function(t) {
                return Number(1 == t ? 0 : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2)
            },
            8: function(t) {
                return Number(1 == t ? 0 : 2 == t ? 1 : 8 != t && 11 != t ? 2 : 3)
            },
            9: function(t) {
                return Number(t >= 2)
            },
            10: function(t) {
                return Number(1 == t ? 0 : 2 == t ? 1 : t < 7 ? 2 : t < 11 ? 3 : 4)
            },
            11: function(t) {
                return Number(1 == t || 11 == t ? 0 : 2 == t || 12 == t ? 1 : t > 2 && t < 20 ? 2 : 3)
            },
            12: function(t) {
                return Number(t % 10 != 1 || t % 100 == 11)
            },
            13: function(t) {
                return Number(0 !== t)
            },
            14: function(t) {
                return Number(1 == t ? 0 : 2 == t ? 1 : 3 == t ? 2 : 3)
            },
            15: function(t) {
                return Number(t % 10 == 1 && t % 100 != 11 ? 0 : t % 10 >= 2 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2)
            },
            16: function(t) {
                return Number(t % 10 == 1 && t % 100 != 11 ? 0 : 0 !== t ? 1 : 2)
            },
            17: function(t) {
                return Number(1 == t || t % 10 == 1 && t % 100 != 11 ? 0 : 1)
            },
            18: function(t) {
                return Number(0 == t ? 0 : 1 == t ? 1 : 2)
            },
            19: function(t) {
                return Number(1 == t ? 0 : 0 == t || t % 100 > 1 && t % 100 < 11 ? 1 : t % 100 > 10 && t % 100 < 20 ? 2 : 3)
            },
            20: function(t) {
                return Number(1 == t ? 0 : 0 == t || t % 100 > 0 && t % 100 < 20 ? 1 : 2)
            },
            21: function(t) {
                return Number(t % 100 == 1 ? 1 : t % 100 == 2 ? 2 : t % 100 == 3 || t % 100 == 4 ? 3 : 0)
            },
            22: function(t) {
                return Number(1 == t ? 0 : 2 == t ? 1 : (t < 0 || t > 10) && t % 10 == 0 ? 2 : 3)
            }
        };
        const L = ["v1", "v2", "v3"]
          , j = ["v4"]
          , R = {
            zero: 0,
            one: 1,
            two: 2,
            few: 3,
            many: 4,
            other: 5
        };
        class A {
            constructor(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                this.languageUtils = t,
                this.options = e,
                this.logger = o.create("pluralResolver"),
                this.options.compatibilityJSON && !j.includes(this.options.compatibilityJSON) || "undefined" != typeof Intl && Intl.PluralRules || (this.options.compatibilityJSON = "v3",
                this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),
                this.rules = function() {
                    const t = {};
                    return O.forEach(e => {
                        e.lngs.forEach(n => {
                            t[n] = {
                                numbers: e.nr,
                                plurals: E[e.fc]
                            }
                        }
                        )
                    }
                    ),
                    t
                }()
            }
            addRule(t, e) {
                this.rules[t] = e
            }
            getRule(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (this.shouldUseIntlApi())
                    try {
                        return new Intl.PluralRules(b("dev" === t ? "en" : t),{
                            type: e.ordinal ? "ordinal" : "cardinal"
                        })
                    } catch (t) {
                        return
                    }
                return this.rules[t] || this.rules[this.languageUtils.getLanguagePartFromCode(t)]
            }
            needsPlural(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const n = this.getRule(t, e);
                return this.shouldUseIntlApi() ? n && n.resolvedOptions().pluralCategories.length > 1 : n && n.numbers.length > 1
            }
            getPluralFormsOfKey(t, e) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return this.getSuffixes(t, n).map(t => `${e}${t}`)
            }
            getSuffixes(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const n = this.getRule(t, e);
                return n ? this.shouldUseIntlApi() ? n.resolvedOptions().pluralCategories.sort( (t, e) => R[t] - R[e]).map(t => `${this.options.prepend}${e.ordinal ? "ordinal" + this.options.prepend : ""}${t}`) : n.numbers.map(n => this.getSuffix(t, n, e)) : []
            }
            getSuffix(t, e) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                const r = this.getRule(t, n);
                return r ? this.shouldUseIntlApi() ? `${this.options.prepend}${n.ordinal ? "ordinal" + this.options.prepend : ""}${r.select(e)}` : this.getSuffixRetroCompatible(r, e) : (this.logger.warn("no plural rule found for: " + t),
                "")
            }
            getSuffixRetroCompatible(t, e) {
                const n = t.noAbs ? t.plurals(e) : t.plurals(Math.abs(e));
                let r = t.numbers[n];
                this.options.simplifyPluralSuffix && 2 === t.numbers.length && 1 === t.numbers[0] && (2 === r ? r = "plural" : 1 === r && (r = ""));
                const i = () => this.options.prepend && r.toString() ? this.options.prepend + r.toString() : r.toString();
                return "v1" === this.options.compatibilityJSON ? 1 === r ? "" : "number" == typeof r ? "_plural_" + r.toString() : i() : "v2" === this.options.compatibilityJSON || this.options.simplifyPluralSuffix && 2 === t.numbers.length && 1 === t.numbers[0] ? i() : this.options.prepend && n.toString() ? this.options.prepend + n.toString() : n.toString()
            }
            shouldUseIntlApi() {
                return !L.includes(this.options.compatibilityJSON)
            }
        }
        function P(t, e, n) {
            let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "."
              , i = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]
              , o = f(t, e, n);
            return !o && i && "string" == typeof n && (o = v(t, n, r),
            void 0 === o && (o = v(e, n, r))),
            o
        }
        class I {
            constructor() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.logger = o.create("interpolator"),
                this.options = t,
                this.format = t.interpolation && t.interpolation.format || (t => t),
                this.init(t)
            }
            init() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                t.interpolation || (t.interpolation = {
                    escapeValue: !0
                });
                const {escape: e, escapeValue: n, useRawValueToEscape: r, prefix: i, prefixEscaped: o, suffix: a, suffixEscaped: s, formatSeparator: l, unescapeSuffix: c, unescapePrefix: u, nestingPrefix: h, nestingPrefixEscaped: p, nestingSuffix: f, nestingSuffixEscaped: g, nestingOptionsSeparator: _, maxReplaces: y, alwaysFormat: v} = t.interpolation;
                this.escape = void 0 !== e ? e : m,
                this.escapeValue = void 0 === n || n,
                this.useRawValueToEscape = void 0 !== r && r,
                this.prefix = i ? d(i) : o || "{{",
                this.suffix = a ? d(a) : s || "}}",
                this.formatSeparator = l || ",",
                this.unescapePrefix = c ? "" : u || "-",
                this.unescapeSuffix = this.unescapePrefix ? "" : c || "",
                this.nestingPrefix = h ? d(h) : p || d("$t("),
                this.nestingSuffix = f ? d(f) : g || d(")"),
                this.nestingOptionsSeparator = _ || ",",
                this.maxReplaces = y || 1e3,
                this.alwaysFormat = void 0 !== v && v,
                this.resetRegExp()
            }
            reset() {
                this.options && this.init(this.options)
            }
            resetRegExp() {
                const t = (t, e) => t && t.source === e ? (t.lastIndex = 0,
                t) : new RegExp(e,"g");
                this.regexp = t(this.regexp, `${this.prefix}(.+?)${this.suffix}`),
                this.regexpUnescape = t(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),
                this.nestingRegexp = t(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`)
            }
            interpolate(t, e, n, r) {
                let i, o, a;
                const s = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
                function c(t) {
                    return t.replace(/\$/g, "$$$$")
                }
                const u = t => {
                    if (t.indexOf(this.formatSeparator) < 0) {
                        const i = P(e, s, t, this.options.keySeparator, this.options.ignoreJSONStructure);
                        return this.alwaysFormat ? this.format(i, void 0, n, {
                            ...r,
                            ...e,
                            interpolationkey: t
                        }) : i
                    }
                    const i = t.split(this.formatSeparator)
                      , o = i.shift().trim()
                      , a = i.join(this.formatSeparator).trim();
                    return this.format(P(e, s, o, this.options.keySeparator, this.options.ignoreJSONStructure), a, n, {
                        ...r,
                        ...e,
                        interpolationkey: o
                    })
                }
                ;
                this.resetRegExp();
                const h = r && r.missingInterpolationHandler || this.options.missingInterpolationHandler
                  , p = r && r.interpolation && void 0 !== r.interpolation.skipOnVariables ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
                return [{
                    regex: this.regexpUnescape,
                    safeValue: t => c(t)
                }, {
                    regex: this.regexp,
                    safeValue: t => this.escapeValue ? c(this.escape(t)) : c(t)
                }].forEach(e => {
                    for (a = 0; i = e.regex.exec(t); ) {
                        const n = i[1].trim();
                        if (o = u(n),
                        void 0 === o)
                            if ("function" == typeof h) {
                                const e = h(t, i, r);
                                o = "string" == typeof e ? e : ""
                            } else if (r && Object.prototype.hasOwnProperty.call(r, n))
                                o = "";
                            else {
                                if (p) {
                                    o = i[0];
                                    continue
                                }
                                this.logger.warn(`missed to pass in variable ${n} for interpolating ${t}`),
                                o = ""
                            }
                        else
                            "string" == typeof o || this.useRawValueToEscape || (o = l(o));
                        const s = e.safeValue(o);
                        if (t = t.replace(i[0], s),
                        p ? (e.regex.lastIndex += o.length,
                        e.regex.lastIndex -= i[0].length) : e.regex.lastIndex = 0,
                        a++,
                        a >= this.maxReplaces)
                            break
                    }
                }
                ),
                t
            }
            nest(t, e) {
                let n, r, i, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                function a(t, e) {
                    const n = this.nestingOptionsSeparator;
                    if (t.indexOf(n) < 0)
                        return t;
                    const r = t.split(new RegExp(n + "[ ]*{"));
                    let o = "{" + r[1];
                    t = r[0],
                    o = this.interpolate(o, i);
                    const a = o.match(/'/g)
                      , s = o.match(/"/g);
                    (a && a.length % 2 == 0 && !s || s.length % 2 != 0) && (o = o.replace(/'/g, '"'));
                    try {
                        i = JSON.parse(o),
                        e && (i = {
                            ...e,
                            ...i
                        })
                    } catch (e) {
                        return this.logger.warn("failed parsing options string in nesting for key " + t, e),
                        `${t}${n}${o}`
                    }
                    return i.defaultValue && i.defaultValue.indexOf(this.prefix) > -1 && delete i.defaultValue,
                    t
                }
                for (; n = this.nestingRegexp.exec(t); ) {
                    let s = [];
                    i = {
                        ...o
                    },
                    i = i.replace && "string" != typeof i.replace ? i.replace : i,
                    i.applyPostProcessor = !1,
                    delete i.defaultValue;
                    let c = !1;
                    if (-1 !== n[0].indexOf(this.formatSeparator) && !/{.*}/.test(n[1])) {
                        const t = n[1].split(this.formatSeparator).map(t => t.trim());
                        n[1] = t.shift(),
                        s = t,
                        c = !0
                    }
                    if (r = e(a.call(this, n[1].trim(), i), i),
                    r && n[0] === t && "string" != typeof r)
                        return r;
                    "string" != typeof r && (r = l(r)),
                    r || (this.logger.warn(`missed to resolve ${n[1]} for nesting ${t}`),
                    r = ""),
                    c && (r = s.reduce( (t, e) => this.format(t, e, o.lng, {
                        ...o,
                        interpolationkey: n[1].trim()
                    }), r.trim())),
                    t = t.replace(n[0], r),
                    this.regexp.lastIndex = 0
                }
                return t
            }
        }
        function $(t) {
            const e = {};
            return function(n, r, i) {
                const o = r + JSON.stringify(i);
                let a = e[o];
                return a || (a = t(b(r), i),
                e[o] = a),
                a(n)
            }
        }
        class D {
            constructor() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.logger = o.create("formatter"),
                this.options = t,
                this.formats = {
                    number: $( (t, e) => {
                        const n = new Intl.NumberFormat(t,{
                            ...e
                        });
                        return t => n.format(t)
                    }
                    ),
                    currency: $( (t, e) => {
                        const n = new Intl.NumberFormat(t,{
                            ...e,
                            style: "currency"
                        });
                        return t => n.format(t)
                    }
                    ),
                    datetime: $( (t, e) => {
                        const n = new Intl.DateTimeFormat(t,{
                            ...e
                        });
                        return t => n.format(t)
                    }
                    ),
                    relativetime: $( (t, e) => {
                        const n = new Intl.RelativeTimeFormat(t,{
                            ...e
                        });
                        return t => n.format(t, e.range || "day")
                    }
                    ),
                    list: $( (t, e) => {
                        const n = new Intl.ListFormat(t,{
                            ...e
                        });
                        return t => n.format(t)
                    }
                    )
                },
                this.init(t)
            }
            init(t) {
                const e = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    interpolation: {}
                }).interpolation;
                this.formatSeparator = e.formatSeparator ? e.formatSeparator : e.formatSeparator || ","
            }
            add(t, e) {
                this.formats[t.toLowerCase().trim()] = e
            }
            addCached(t, e) {
                this.formats[t.toLowerCase().trim()] = $(e)
            }
            format(t, e, n) {
                let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                return e.split(this.formatSeparator).reduce( (t, e) => {
                    const {formatName: i, formatOptions: o} = function(t) {
                        let e = t.toLowerCase().trim();
                        const n = {};
                        if (t.indexOf("(") > -1) {
                            const r = t.split("(");
                            e = r[0].toLowerCase().trim();
                            const i = r[1].substring(0, r[1].length - 1);
                            if ("currency" === e && i.indexOf(":") < 0)
                                n.currency || (n.currency = i.trim());
                            else if ("relativetime" === e && i.indexOf(":") < 0)
                                n.range || (n.range = i.trim());
                            else {
                                i.split(";").forEach(t => {
                                    if (t) {
                                        const [e,...r] = t.split(":")
                                          , i = r.join(":").trim().replace(/^'+|'+$/g, "")
                                          , o = e.trim();
                                        n[o] || (n[o] = i),
                                        "false" === i && (n[o] = !1),
                                        "true" === i && (n[o] = !0),
                                        isNaN(i) || (n[o] = parseInt(i, 10))
                                    }
                                }
                                )
                            }
                        }
                        return {
                            formatName: e,
                            formatOptions: n
                        }
                    }(e);
                    if (this.formats[i]) {
                        let e = t;
                        try {
                            const a = r && r.formatParams && r.formatParams[r.interpolationkey] || {}
                              , s = a.locale || a.lng || r.locale || r.lng || n;
                            e = this.formats[i](t, s, {
                                ...o,
                                ...r,
                                ...a
                            })
                        } catch (t) {
                            this.logger.warn(t)
                        }
                        return e
                    }
                    return this.logger.warn("there was no format function for " + i),
                    t
                }
                , t)
            }
        }
        class B extends a {
            constructor(t, e, n) {
                let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                super(),
                this.backend = t,
                this.store = e,
                this.services = n,
                this.languageUtils = n.languageUtils,
                this.options = r,
                this.logger = o.create("backendConnector"),
                this.waitingReads = [],
                this.maxParallelReads = r.maxParallelReads || 10,
                this.readingCalls = 0,
                this.maxRetries = r.maxRetries >= 0 ? r.maxRetries : 5,
                this.retryTimeout = r.retryTimeout >= 1 ? r.retryTimeout : 350,
                this.state = {},
                this.queue = [],
                this.backend && this.backend.init && this.backend.init(n, r.backend, r)
            }
            queueLoad(t, e, n, r) {
                const i = {}
                  , o = {}
                  , a = {}
                  , s = {};
                return t.forEach(t => {
                    let r = !0;
                    e.forEach(e => {
                        const a = `${t}|${e}`;
                        !n.reload && this.store.hasResourceBundle(t, e) ? this.state[a] = 2 : this.state[a] < 0 || (1 === this.state[a] ? void 0 === o[a] && (o[a] = !0) : (this.state[a] = 1,
                        r = !1,
                        void 0 === o[a] && (o[a] = !0),
                        void 0 === i[a] && (i[a] = !0),
                        void 0 === s[e] && (s[e] = !0)))
                    }
                    ),
                    r || (a[t] = !0)
                }
                ),
                (Object.keys(i).length || Object.keys(o).length) && this.queue.push({
                    pending: o,
                    pendingCount: Object.keys(o).length,
                    loaded: {},
                    errors: [],
                    callback: r
                }),
                {
                    toLoad: Object.keys(i),
                    pending: Object.keys(o),
                    toLoadLanguages: Object.keys(a),
                    toLoadNamespaces: Object.keys(s)
                }
            }
            loaded(t, e, n) {
                const r = t.split("|")
                  , i = r[0]
                  , o = r[1];
                e && this.emit("failedLoading", i, o, e),
                n && this.store.addResourceBundle(i, o, n, void 0, void 0, {
                    skipCopy: !0
                }),
                this.state[t] = e ? -1 : 2;
                const a = {};
                this.queue.forEach(n => {
                    (function(t, e, n, r) {
                        const {obj: i, k: o} = u(t, e, Object);
                        i[o] = i[o] || [],
                        r && (i[o] = i[o].concat(n)),
                        r || i[o].push(n)
                    }
                    )(n.loaded, [i], o),
                    function(t, e) {
                        void 0 !== t.pending[e] && (delete t.pending[e],
                        t.pendingCount--)
                    }(n, t),
                    e && n.errors.push(e),
                    0 !== n.pendingCount || n.done || (Object.keys(n.loaded).forEach(t => {
                        a[t] || (a[t] = {});
                        const e = n.loaded[t];
                        e.length && e.forEach(e => {
                            void 0 === a[t][e] && (a[t][e] = !0)
                        }
                        )
                    }
                    ),
                    n.done = !0,
                    n.errors.length ? n.callback(n.errors) : n.callback())
                }
                ),
                this.emit("loaded", a),
                this.queue = this.queue.filter(t => !t.done)
            }
            read(t, e, n) {
                let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0
                  , i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.retryTimeout
                  , o = arguments.length > 5 ? arguments[5] : void 0;
                if (!t.length)
                    return o(null, {});
                if (this.readingCalls >= this.maxParallelReads)
                    return void this.waitingReads.push({
                        lng: t,
                        ns: e,
                        fcName: n,
                        tried: r,
                        wait: i,
                        callback: o
                    });
                this.readingCalls++;
                const a = (a, s) => {
                    if (this.readingCalls--,
                    this.waitingReads.length > 0) {
                        const t = this.waitingReads.shift();
                        this.read(t.lng, t.ns, t.fcName, t.tried, t.wait, t.callback)
                    }
                    a && s && r < this.maxRetries ? setTimeout( () => {
                        this.read.call(this, t, e, n, r + 1, 2 * i, o)
                    }
                    , i) : o(a, s)
                }
                  , s = this.backend[n].bind(this.backend);
                if (2 !== s.length)
                    return s(t, e, a);
                try {
                    const n = s(t, e);
                    n && "function" == typeof n.then ? n.then(t => a(null, t)).catch(a) : a(null, n)
                } catch (t) {
                    a(t)
                }
            }
            prepareLoading(t, e) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                  , r = arguments.length > 3 ? arguments[3] : void 0;
                if (!this.backend)
                    return this.logger.warn("No backend was added via i18next.use. Will not load resources."),
                    r && r();
                "string" == typeof t && (t = this.languageUtils.toResolveHierarchy(t)),
                "string" == typeof e && (e = [e]);
                const i = this.queueLoad(t, e, n, r);
                if (!i.toLoad.length)
                    return i.pending.length || r(),
                    null;
                i.toLoad.forEach(t => {
                    this.loadOne(t)
                }
                )
            }
            load(t, e, n) {
                this.prepareLoading(t, e, {}, n)
            }
            reload(t, e, n) {
                this.prepareLoading(t, e, {
                    reload: !0
                }, n)
            }
            loadOne(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                const n = t.split("|")
                  , r = n[0]
                  , i = n[1];
                this.read(r, i, "read", void 0, void 0, (n, o) => {
                    n && this.logger.warn(`${e}loading namespace ${i} for language ${r} failed`, n),
                    !n && o && this.logger.log(`${e}loaded namespace ${i} for language ${r}`, o),
                    this.loaded(t, n, o)
                }
                )
            }
            saveMissing(t, e, n, r, i) {
                let o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {}
                  , a = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}
                ;
                if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(e))
                    this.logger.warn(`did not save key "${n}" as the namespace "${e}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
                else if (null != n && "" !== n) {
                    if (this.backend && this.backend.create) {
                        const s = {
                            ...o,
                            isUpdate: i
                        }
                          , l = this.backend.create.bind(this.backend);
                        if (l.length < 6)
                            try {
                                let i;
                                i = 5 === l.length ? l(t, e, n, r, s) : l(t, e, n, r),
                                i && "function" == typeof i.then ? i.then(t => a(null, t)).catch(a) : a(null, i)
                            } catch (t) {
                                a(t)
                            }
                        else
                            l(t, e, n, r, a, s)
                    }
                    t && t[0] && this.store.addResource(t[0], e, n, r)
                }
            }
        }
        function N() {
            return {
                debug: !1,
                initImmediate: !0,
                ns: ["translation"],
                defaultNS: ["translation"],
                fallbackLng: ["dev"],
                fallbackNS: !1,
                supportedLngs: !1,
                nonExplicitSupportedLngs: !1,
                load: "all",
                preload: !1,
                simplifyPluralSuffix: !0,
                keySeparator: ".",
                nsSeparator: ":",
                pluralSeparator: "_",
                contextSeparator: "_",
                partialBundledLanguages: !1,
                saveMissing: !1,
                updateMissing: !1,
                saveMissingTo: "fallback",
                saveMissingPlurals: !0,
                missingKeyHandler: !1,
                missingInterpolationHandler: !1,
                postProcess: !1,
                postProcessPassResolved: !1,
                returnNull: !1,
                returnEmptyString: !0,
                returnObjects: !1,
                joinArrays: !1,
                returnedObjectHandler: !1,
                parseMissingKeyHandler: !1,
                appendNamespaceToMissingKey: !1,
                appendNamespaceToCIMode: !1,
                overloadTranslationOptionHandler: function(t) {
                    let e = {};
                    if ("object" == typeof t[1] && (e = t[1]),
                    "string" == typeof t[1] && (e.defaultValue = t[1]),
                    "string" == typeof t[2] && (e.tDescription = t[2]),
                    "object" == typeof t[2] || "object" == typeof t[3]) {
                        const n = t[3] || t[2];
                        Object.keys(n).forEach(t => {
                            e[t] = n[t]
                        }
                        )
                    }
                    return e
                },
                interpolation: {
                    escapeValue: !0,
                    format: t => t,
                    prefix: "{{",
                    suffix: "}}",
                    formatSeparator: ",",
                    unescapePrefix: "-",
                    nestingPrefix: "$t(",
                    nestingSuffix: ")",
                    nestingOptionsSeparator: ",",
                    maxReplaces: 1e3,
                    skipOnVariables: !0
                }
            }
        }
        function M(t) {
            return "string" == typeof t.ns && (t.ns = [t.ns]),
            "string" == typeof t.fallbackLng && (t.fallbackLng = [t.fallbackLng]),
            "string" == typeof t.fallbackNS && (t.fallbackNS = [t.fallbackNS]),
            t.supportedLngs && t.supportedLngs.indexOf("cimode") < 0 && (t.supportedLngs = t.supportedLngs.concat(["cimode"])),
            t
        }
        function q() {}
        class H extends a {
            constructor() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , e = arguments.length > 1 ? arguments[1] : void 0;
                if (super(),
                this.options = M(t),
                this.services = {},
                this.logger = o,
                this.modules = {
                    external: []
                },
                function(t) {
                    Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach(e => {
                        "function" == typeof t[e] && (t[e] = t[e].bind(t))
                    }
                    )
                }(this),
                e && !this.isInitialized && !t.isClone) {
                    if (!this.options.initImmediate)
                        return this.init(t, e),
                        this;
                    setTimeout( () => {
                        this.init(t, e)
                    }
                    , 0)
                }
            }
            init() {
                var t = this;
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , n = arguments.length > 1 ? arguments[1] : void 0;
                this.isInitializing = !0,
                "function" == typeof e && (n = e,
                e = {}),
                !e.defaultNS && !1 !== e.defaultNS && e.ns && ("string" == typeof e.ns ? e.defaultNS = e.ns : e.ns.indexOf("translation") < 0 && (e.defaultNS = e.ns[0]));
                const r = N();
                function i(t) {
                    return t ? "function" == typeof t ? new t : t : null
                }
                if (this.options = {
                    ...r,
                    ...this.options,
                    ...M(e)
                },
                "v1" !== this.options.compatibilityAPI && (this.options.interpolation = {
                    ...r.interpolation,
                    ...this.options.interpolation
                }),
                void 0 !== e.keySeparator && (this.options.userDefinedKeySeparator = e.keySeparator),
                void 0 !== e.nsSeparator && (this.options.userDefinedNsSeparator = e.nsSeparator),
                !this.options.isClone) {
                    let e;
                    this.modules.logger ? o.init(i(this.modules.logger), this.options) : o.init(null, this.options),
                    this.modules.formatter ? e = this.modules.formatter : "undefined" != typeof Intl && (e = D);
                    const n = new C(this.options);
                    this.store = new w(this.options.resources,this.options);
                    const a = this.services;
                    a.logger = o,
                    a.resourceStore = this.store,
                    a.languageUtils = n,
                    a.pluralResolver = new A(n,{
                        prepend: this.options.pluralSeparator,
                        compatibilityJSON: this.options.compatibilityJSON,
                        simplifyPluralSuffix: this.options.simplifyPluralSuffix
                    }),
                    !e || this.options.interpolation.format && this.options.interpolation.format !== r.interpolation.format || (a.formatter = i(e),
                    a.formatter.init(a, this.options),
                    this.options.interpolation.format = a.formatter.format.bind(a.formatter)),
                    a.interpolator = new I(this.options),
                    a.utils = {
                        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
                    },
                    a.backendConnector = new B(i(this.modules.backend),a.resourceStore,a,this.options),
                    a.backendConnector.on("*", (function(e) {
                        for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
                            r[i - 1] = arguments[i];
                        t.emit(e, ...r)
                    }
                    )),
                    this.modules.languageDetector && (a.languageDetector = i(this.modules.languageDetector),
                    a.languageDetector.init && a.languageDetector.init(a, this.options.detection, this.options)),
                    this.modules.i18nFormat && (a.i18nFormat = i(this.modules.i18nFormat),
                    a.i18nFormat.init && a.i18nFormat.init(this)),
                    this.translator = new S(this.services,this.options),
                    this.translator.on("*", (function(e) {
                        for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
                            r[i - 1] = arguments[i];
                        t.emit(e, ...r)
                    }
                    )),
                    this.modules.external.forEach(t => {
                        t.init && t.init(this)
                    }
                    )
                }
                if (this.format = this.options.interpolation.format,
                n || (n = q),
                this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
                    const t = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                    t.length > 0 && "dev" !== t[0] && (this.options.lng = t[0])
                }
                this.services.languageDetector || this.options.lng || this.logger.warn("init: no languageDetector is used and no lng is defined");
                ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach(e => {
                    this[e] = function() {
                        return t.store[e](...arguments)
                    }
                }
                );
                ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach(e => {
                    this[e] = function() {
                        return t.store[e](...arguments),
                        t
                    }
                }
                );
                const a = s()
                  , l = () => {
                    const t = (t, e) => {
                        this.isInitializing = !1,
                        this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"),
                        this.isInitialized = !0,
                        this.options.isClone || this.logger.log("initialized", this.options),
                        this.emit("initialized", this.options),
                        a.resolve(e),
                        n(t, e)
                    }
                    ;
                    if (this.languages && "v1" !== this.options.compatibilityAPI && !this.isInitialized)
                        return t(null, this.t.bind(this));
                    this.changeLanguage(this.options.lng, t)
                }
                ;
                return this.options.resources || !this.options.initImmediate ? l() : setTimeout(l, 0),
                a
            }
            loadResources(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : q;
                const n = "string" == typeof t ? t : this.language;
                if ("function" == typeof t && (e = t),
                !this.options.resources || this.options.partialBundledLanguages) {
                    if (n && "cimode" === n.toLowerCase() && (!this.options.preload || 0 === this.options.preload.length))
                        return e();
                    const t = []
                      , r = e => {
                        if (!e)
                            return;
                        if ("cimode" === e)
                            return;
                        this.services.languageUtils.toResolveHierarchy(e).forEach(e => {
                            "cimode" !== e && t.indexOf(e) < 0 && t.push(e)
                        }
                        )
                    }
                    ;
                    if (n)
                        r(n);
                    else {
                        this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(t => r(t))
                    }
                    this.options.preload && this.options.preload.forEach(t => r(t)),
                    this.services.backendConnector.load(t, this.options.ns, t => {
                        t || this.resolvedLanguage || !this.language || this.setResolvedLanguage(this.language),
                        e(t)
                    }
                    )
                } else
                    e(null)
            }
            reloadResources(t, e, n) {
                const r = s();
                return t || (t = this.languages),
                e || (e = this.options.ns),
                n || (n = q),
                this.services.backendConnector.reload(t, e, t => {
                    r.resolve(),
                    n(t)
                }
                ),
                r
            }
            use(t) {
                if (!t)
                    throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
                if (!t.type)
                    throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
                return "backend" === t.type && (this.modules.backend = t),
                ("logger" === t.type || t.log && t.warn && t.error) && (this.modules.logger = t),
                "languageDetector" === t.type && (this.modules.languageDetector = t),
                "i18nFormat" === t.type && (this.modules.i18nFormat = t),
                "postProcessor" === t.type && k.addPostProcessor(t),
                "formatter" === t.type && (this.modules.formatter = t),
                "3rdParty" === t.type && this.modules.external.push(t),
                this
            }
            setResolvedLanguage(t) {
                if (t && this.languages && !(["cimode", "dev"].indexOf(t) > -1))
                    for (let t = 0; t < this.languages.length; t++) {
                        const e = this.languages[t];
                        if (!(["cimode", "dev"].indexOf(e) > -1) && this.store.hasLanguageSomeTranslations(e)) {
                            this.resolvedLanguage = e;
                            break
                        }
                    }
            }
            changeLanguage(t, e) {
                var n = this;
                this.isLanguageChangingTo = t;
                const r = s();
                this.emit("languageChanging", t);
                const i = t => {
                    this.language = t,
                    this.languages = this.services.languageUtils.toResolveHierarchy(t),
                    this.resolvedLanguage = void 0,
                    this.setResolvedLanguage(t)
                }
                  , o = (t, o) => {
                    o ? (i(o),
                    this.translator.changeLanguage(o),
                    this.isLanguageChangingTo = void 0,
                    this.emit("languageChanged", o),
                    this.logger.log("languageChanged", o)) : this.isLanguageChangingTo = void 0,
                    r.resolve((function() {
                        return n.t(...arguments)
                    }
                    )),
                    e && e(t, (function() {
                        return n.t(...arguments)
                    }
                    ))
                }
                  , a = e => {
                    t || e || !this.services.languageDetector || (e = []);
                    const n = "string" == typeof e ? e : this.services.languageUtils.getBestMatchFromCodes(e);
                    n && (this.language || i(n),
                    this.translator.language || this.translator.changeLanguage(n),
                    this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(n)),
                    this.loadResources(n, t => {
                        o(t, n)
                    }
                    )
                }
                ;
                return t || !this.services.languageDetector || this.services.languageDetector.async ? !t && this.services.languageDetector && this.services.languageDetector.async ? 0 === this.services.languageDetector.detect.length ? this.services.languageDetector.detect().then(a) : this.services.languageDetector.detect(a) : a(t) : a(this.services.languageDetector.detect()),
                r
            }
            getFixedT(t, e, n) {
                var r = this;
                const i = function(t, e) {
                    let o;
                    if ("object" != typeof e) {
                        for (var a = arguments.length, s = new Array(a > 2 ? a - 2 : 0), l = 2; l < a; l++)
                            s[l - 2] = arguments[l];
                        o = r.options.overloadTranslationOptionHandler([t, e].concat(s))
                    } else
                        o = {
                            ...e
                        };
                    o.lng = o.lng || i.lng,
                    o.lngs = o.lngs || i.lngs,
                    o.ns = o.ns || i.ns,
                    o.keyPrefix = o.keyPrefix || n || i.keyPrefix;
                    const c = r.options.keySeparator || ".";
                    let u;
                    return u = o.keyPrefix && Array.isArray(t) ? t.map(t => `${o.keyPrefix}${c}${t}`) : o.keyPrefix ? `${o.keyPrefix}${c}${t}` : t,
                    r.t(u, o)
                };
                return "string" == typeof t ? i.lng = t : i.lngs = t,
                i.ns = e,
                i.keyPrefix = n,
                i
            }
            t() {
                return this.translator && this.translator.translate(...arguments)
            }
            exists() {
                return this.translator && this.translator.exists(...arguments)
            }
            setDefaultNamespace(t) {
                this.options.defaultNS = t
            }
            hasLoadedNamespace(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (!this.isInitialized)
                    return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages),
                    !1;
                if (!this.languages || !this.languages.length)
                    return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages),
                    !1;
                const n = e.lng || this.resolvedLanguage || this.languages[0]
                  , r = !!this.options && this.options.fallbackLng
                  , i = this.languages[this.languages.length - 1];
                if ("cimode" === n.toLowerCase())
                    return !0;
                const o = (t, e) => {
                    const n = this.services.backendConnector.state[`${t}|${e}`];
                    return -1 === n || 2 === n
                }
                ;
                if (e.precheck) {
                    const t = e.precheck(this, o);
                    if (void 0 !== t)
                        return t
                }
                return !(!this.hasResourceBundle(n, t) && this.services.backendConnector.backend && (!this.options.resources || this.options.partialBundledLanguages) && (!o(n, t) || r && !o(i, t)))
            }
            loadNamespaces(t, e) {
                const n = s();
                return this.options.ns ? ("string" == typeof t && (t = [t]),
                t.forEach(t => {
                    this.options.ns.indexOf(t) < 0 && this.options.ns.push(t)
                }
                ),
                this.loadResources(t => {
                    n.resolve(),
                    e && e(t)
                }
                ),
                n) : (e && e(),
                Promise.resolve())
            }
            loadLanguages(t, e) {
                const n = s();
                "string" == typeof t && (t = [t]);
                const r = this.options.preload || []
                  , i = t.filter(t => r.indexOf(t) < 0 && this.services.languageUtils.isSupportedCode(t));
                return i.length ? (this.options.preload = r.concat(i),
                this.loadResources(t => {
                    n.resolve(),
                    e && e(t)
                }
                ),
                n) : (e && e(),
                Promise.resolve())
            }
            dir(t) {
                if (t || (t = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)),
                !t)
                    return "rtl";
                const e = this.services && this.services.languageUtils || new C(N());
                return ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"].indexOf(e.getLanguagePartFromCode(t)) > -1 || t.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr"
            }
            static createInstance() {
                return new H(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},arguments.length > 1 ? arguments[1] : void 0)
            }
            cloneInstance() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : q;
                const n = t.forkResourceStore;
                n && delete t.forkResourceStore;
                const r = {
                    ...this.options,
                    ...t,
                    isClone: !0
                }
                  , i = new H(r);
                void 0 === t.debug && void 0 === t.prefix || (i.logger = i.logger.clone(t));
                return ["store", "services", "language"].forEach(t => {
                    i[t] = this[t]
                }
                ),
                i.services = {
                    ...this.services
                },
                i.services.utils = {
                    hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
                },
                n && (i.store = new w(this.store.data,r),
                i.services.resourceStore = i.store),
                i.translator = new S(i.services,r),
                i.translator.on("*", (function(t) {
                    for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
                        n[r - 1] = arguments[r];
                    i.emit(t, ...n)
                }
                )),
                i.init(r, e),
                i.translator.options = r,
                i.translator.backendConnector.services.utils = {
                    hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
                },
                i
            }
            toJSON() {
                return {
                    options: this.options,
                    store: this.store,
                    language: this.language,
                    languages: this.languages,
                    resolvedLanguage: this.resolvedLanguage
                }
            }
        }
        const U = H.createInstance();
        U.createInstance = H.createInstance,
        U.createInstance,
        U.dir,
        U.init,
        U.loadResources,
        U.reloadResources,
        U.use,
        U.changeLanguage,
        U.getFixedT,
        U.t,
        U.exists,
        U.setDefaultNamespace,
        U.hasLoadedNamespace,
        U.loadNamespaces,
        U.loadLanguages
    },
    "605d": function(t, e, n) {
        "use strict";
        var r = n("da84")
          , i = n("c6b6");
        t.exports = "process" === i(r.process)
    },
    6069: function(t, e, n) {
        "use strict";
        var r = n("6c59")
          , i = n("605d");
        t.exports = !r && !i && "object" == typeof window && "object" == typeof document
    },
    "60da": function(t, e, n) {
        "use strict";
        var r = n("83ab")
          , i = n("e330")
          , o = n("c65b")
          , a = n("d039")
          , s = n("df75")
          , l = n("7418")
          , c = n("d1e7")
          , u = n("7b0b")
          , h = n("44ad")
          , p = Object.assign
          , f = Object.defineProperty
          , d = i([].concat);
        t.exports = !p || a((function() {
            if (r && 1 !== p({
                b: 1
            }, p(f({}, "a", {
                enumerable: !0,
                get: function() {
                    f(this, "b", {
                        value: 3,
                        enumerable: !1
                    })
                }
            }), {
                b: 2
            })).b)
                return !0;
            var t = {}
              , e = {}
              , n = Symbol("assign detection")
              , i = "abcdefghijklmnopqrst";
            return t[n] = 7,
            i.split("").forEach((function(t) {
                e[t] = t
            }
            )),
            7 !== p({}, t)[n] || s(p({}, e)).join("") !== i
        }
        )) ? function(t, e) {
            for (var n = u(t), i = arguments.length, a = 1, p = l.f, f = c.f; i > a; )
                for (var g, m = h(arguments[a++]), _ = p ? d(s(m), p(m)) : s(m), y = _.length, v = 0; y > v; )
                    g = _[v++],
                    r && !o(f, m, g) || (n[g] = m[g]);
            return n
        }
        : p
    },
    6374: function(t, e, n) {
        "use strict";
        var r = n("da84")
          , i = Object.defineProperty;
        t.exports = function(t, e) {
            try {
                i(r, t, {
                    value: e,
                    configurable: !0,
                    writable: !0
                })
            } catch (n) {
                r[t] = e
            }
            return e
        }
    },
    "65f0": function(t, e, n) {
        "use strict";
        var r = n("0b42");
        t.exports = function(t, e) {
            return new (r(t))(0 === e ? 0 : e)
        }
    },
    "68ee": function(t, e, n) {
        "use strict";
        var r = n("e330")
          , i = n("d039")
          , o = n("1626")
          , a = n("f5df")
          , s = n("d066")
          , l = n("8925")
          , c = function() {}
          , u = s("Reflect", "construct")
          , h = /^\s*(?:class|function)\b/
          , p = r(h.exec)
          , f = !h.test(c)
          , d = function(t) {
            if (!o(t))
                return !1;
            try {
                return u(c, [], t),
                !0
            } catch (t) {
                return !1
            }
        }
          , g = function(t) {
            if (!o(t))
                return !1;
            switch (a(t)) {
            case "AsyncFunction":
            case "GeneratorFunction":
            case "AsyncGeneratorFunction":
                return !1
            }
            try {
                return f || !!p(h, l(t))
            } catch (t) {
                return !0
            }
        };
        g.sham = !0,
        t.exports = !u || i((function() {
            var t;
            return d(d.call) || !d(Object) || !d((function() {
                t = !0
            }
            )) || t
        }
        )) ? g : d
    },
    "69f3": function(t, e, n) {
        "use strict";
        var r, i, o, a = n("cdce"), s = n("da84"), l = n("861d"), c = n("9112"), u = n("1a2d"), h = n("c6cd"), p = n("f772"), f = n("d012"), d = "Object already initialized", g = s.TypeError, m = s.WeakMap;
        if (a || h.state) {
            var _ = h.state || (h.state = new m);
            _.get = _.get,
            _.has = _.has,
            _.set = _.set,
            r = function(t, e) {
                if (_.has(t))
                    throw new g(d);
                return e.facade = t,
                _.set(t, e),
                e
            }
            ,
            i = function(t) {
                return _.get(t) || {}
            }
            ,
            o = function(t) {
                return _.has(t)
            }
        } else {
            var y = p("state");
            f[y] = !0,
            r = function(t, e) {
                if (u(t, y))
                    throw new g(d);
                return e.facade = t,
                c(t, y, e),
                e
            }
            ,
            i = function(t) {
                return u(t, y) ? t[y] : {}
            }
            ,
            o = function(t) {
                return u(t, y)
            }
        }
        t.exports = {
            set: r,
            get: i,
            has: o,
            enforce: function(t) {
                return o(t) ? i(t) : r(t, {})
            },
            getterFor: function(t) {
                return function(e) {
                    var n;
                    if (!l(e) || (n = i(e)).type !== t)
                        throw new g("Incompatible receiver, " + t + " required");
                    return n
                }
            }
        }
    },
    "6c59": function(t, e, n) {
        "use strict";
        t.exports = "object" == typeof Deno && Deno && "object" == typeof Deno.version
    },
    "6f53": function(t, e, n) {
        "use strict";
        var r = n("83ab")
          , i = n("d039")
          , o = n("e330")
          , a = n("e163")
          , s = n("df75")
          , l = n("fc6a")
          , c = o(n("d1e7").f)
          , u = o([].push)
          , h = r && i((function() {
            var t = Object.create(null);
            return t[2] = 2,
            !c(t, 2)
        }
        ))
          , p = function(t) {
            return function(e) {
                for (var n, i = l(e), o = s(i), p = h && null === a(i), f = o.length, d = 0, g = []; f > d; )
                    n = o[d++],
                    r && !(p ? n in i : c(i, n)) || u(g, t ? [n, i[n]] : i[n]);
                return g
            }
        };
        t.exports = {
            entries: p(!0),
            values: p(!1)
        }
    },
    "6fc0": function(t, e, n) {
        var r, i;
        r = function() {
            "use strict";
            var t = function() {
                return (t = Object.assign || function(t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var i in e = arguments[n])
                            Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                    return t
                }
                ).apply(this, arguments)
            };
            function e(t, e, n, r) {
                return new (n || (n = Promise))((function(i, o) {
                    function a(t) {
                        try {
                            l(r.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function s(t) {
                        try {
                            l(r.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function l(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value,
                        e instanceof n ? e : new n((function(t) {
                            t(e)
                        }
                        ))).then(a, s)
                    }
                    l((r = r.apply(t, e || [])).next())
                }
                ))
            }
            function n(t, e) {
                var n, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0])
                            throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                },
                "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }
                ),
                o;
                function s(o) {
                    return function(s) {
                        return function(o) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; a; )
                                try {
                                    if (n = 1,
                                    r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r),
                                    0) : r.next) && !(i = i.call(r, o[1])).done)
                                        return i;
                                    switch (r = 0,
                                    i && (o = [2 & o[0], i.value]),
                                    o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return a.label++,
                                        {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++,
                                        r = o[1],
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop(),
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!((i = (i = a.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1],
                                            i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2],
                                            a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop(),
                                        a.trys.pop();
                                        continue
                                    }
                                    o = e.call(t, a)
                                } catch (t) {
                                    o = [6, t],
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                            if (5 & o[0])
                                throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, s])
                    }
                }
            }
            function r(t, e) {
                var n = "function" == typeof Symbol && t[Symbol.iterator];
                if (!n)
                    return t;
                var r, i, o = n.call(t), a = [];
                try {
                    for (; (void 0 === e || e-- > 0) && !(r = o.next()).done; )
                        a.push(r.value)
                } catch (t) {
                    i = {
                        error: t
                    }
                } finally {
                    try {
                        r && !r.done && (n = o.return) && n.call(o)
                    } finally {
                        if (i)
                            throw i.error
                    }
                }
                return a
            }
            function i(t, e) {
                for (var n = 0, r = e.length, i = t.length; n < r; n++,
                i++)
                    t[i] = e[n];
                return t
            }
            var o = function() {
                function t(t) {
                    var e = this
                      , n = t.key
                      , r = t.heartBeatIntervalTime
                      , i = void 0 === r ? 1e3 : r
                      , o = t.heartBeatDetectIntervalTime
                      , a = void 0 === o ? 2e3 : o;
                    this._heartBeatIntervalId = null,
                    this._heartBeatDetectIntervalId = null,
                    this._key = n,
                    this._heartBeatIntervalTime = i,
                    this._heartBeatDetectIntervalTime = a,
                    window.addEventListener("unload", (function() {
                        e.destroy()
                    }
                    ))
                }
                return t.prototype.start = function() {
                    var t = this;
                    this._heartBeatIntervalId = setInterval((function() {
                        t._setLocalTime()
                    }
                    ), this._heartBeatIntervalTime)
                }
                ,
                t.prototype.destroy = function() {
                    this._heartBeatIntervalId && clearInterval(this._heartBeatIntervalId),
                    this._heartBeatDetectIntervalId && clearInterval(this._heartBeatDetectIntervalId)
                }
                ,
                t.prototype._setLocalTime = function() {
                    window.localStorage.setItem(this._key, Date.now().toString())
                }
                ,
                t.prototype.detect = function(t) {
                    this._heartBeatDetectIntervalId = setInterval((function() {
                        t()
                    }
                    ), this._heartBeatDetectIntervalTime)
                }
                ,
                t
            }();
            function a(t, e) {
                window.localStorage.setItem(t, e),
                function(t, e) {
                    var n = new Event(t);
                    n.value = e,
                    n.key = t,
                    document.dispatchEvent(n)
                }(t, e)
            }
            function s(t) {
                return window.localStorage.getItem(t)
            }
            function l(t, r) {
                var i = function() {
                    return e(this, void 0, void 0, (function() {
                        return n(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, r()];
                            case 1:
                                return e.sent() && document.removeEventListener(t, i),
                                [2]
                            }
                        }
                        ))
                    }
                    ))
                };
                document.addEventListener(t, i, !1);
                var o = function(i) {
                    return e(this, void 0, void 0, (function() {
                        return n(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return i.storageArea !== localStorage || i.key !== t ? [3, 2] : [4, r()];
                            case 1:
                                e.sent() && window.removeEventListener("storage", o),
                                e.label = 2;
                            case 2:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                };
                window.addEventListener("storage", o, !1)
            }
            var c, u = {
                EXCLUSIVE: "exclusive",
                SHARED: "shared"
            };
            function h() {
                return (new Date).getTime() + "-" + String(Math.random()).substring(2)
            }
            !function(t) {
                t.REQUEST_QUEUE_MAP = "$navigator.locks-requestQueueMap",
                t.HELD_LOCK_SET = "$navigator.locks-heldLockSet",
                t.CLIENT_IDS = "$navigator.locks-clientIds"
            }(c || (c = {}));
            var p = function() {
                function p() {
                    this._defaultOptions = {
                        mode: u.EXCLUSIVE,
                        ifAvailable: !1,
                        steal: !1
                    },
                    this._clientId = "$navigator.locks-clientId-" + h(),
                    this._init()
                }
                return p.prototype._init = function() {
                    var t = this;
                    this._storeThisClientId();
                    var e = new o({
                        key: this._clientId
                    });
                    e.start(),
                    e.detect((function() {
                        return t._cleanUnliveClientLocks()
                    }
                    )),
                    this._onUnload()
                }
                ,
                p.prototype._getClientIds = function() {
                    var t = s(c.CLIENT_IDS);
                    return t && JSON.parse(t) || []
                }
                ,
                p.prototype._storeClientIds = function(t) {
                    a(c.CLIENT_IDS, JSON.stringify(t))
                }
                ,
                p.prototype._storeThisClientId = function() {
                    var t = i(i([], r(this._getClientIds())), [this._clientId]);
                    this._storeClientIds(t)
                }
                ,
                p.prototype.request = function() {
                    for (var t = [], r = 0; r < arguments.length; r++)
                        t[r] = arguments[r];
                    return e(this, void 0, void 0, (function() {
                        var r;
                        return n(this, (function(i) {
                            return r = this,
                            [2, new Promise((function(i, o) {
                                return e(this, void 0, void 0, (function() {
                                    var e, a, s, l, c, p, f, d, g;
                                    return n(this, (function(n) {
                                        if (!(e = r._handleRequestArgs(t, o)))
                                            return [2];
                                        if (a = e.cb,
                                        s = e._options,
                                        l = t[0],
                                        c = {
                                            name: l,
                                            mode: s.mode,
                                            clientId: r._clientId,
                                            uuid: l + "-" + h(),
                                            resolve: i,
                                            reject: o
                                        },
                                        p = r._resolveWithCB(a, i, o),
                                        f = r._heldLockSet(),
                                        d = f.find((function(t) {
                                            return t.name === c.name
                                        }
                                        )),
                                        g = r._requestLockQueueMap()[c.name] || [],
                                        !0 === s.steal) {
                                            if (!r._handleExceptionWhenStealIsTrue(s, o))
                                                return [2];
                                            f = f.filter((function(t) {
                                                return t.name !== c.name
                                            }
                                            )),
                                            d = f.find((function(t) {
                                                return t.name === c.name
                                            }
                                            ))
                                        } else {
                                            if (!0 === s.ifAvailable)
                                                return d && (d.mode !== u.SHARED || c.mode !== u.SHARED) || g.length ? [2, p(null)] : [2, r._handleNewHeldLock(c, p)];
                                            if (void 0 !== s.signal && !r._handleSignalExisted(s, o, c))
                                                return [2]
                                        }
                                        return r._handleHeldLockAndRequest(d, c, p, g, f),
                                        [2]
                                    }
                                    ))
                                }
                                ))
                            }
                            ))]
                        }
                        ))
                    }
                    ))
                }
                ,
                p.prototype.query = function() {
                    return e(this, void 0, void 0, (function() {
                        return n(this, (function(t) {
                            return [2, this._query()]
                        }
                        ))
                    }
                    ))
                }
                ,
                p.prototype._pushToLockRequestQueueMap = function(t) {
                    var e = this._requestLockQueueMap()
                      , n = e[t.name] || [];
                    return e[t.name] = i(i([], r(n)), [t]),
                    this._storeRequestLockQueueMap(e),
                    t
                }
                ,
                p.prototype._pushToHeldLockSet = function(t, e) {
                    void 0 === e && (e = this._heldLockSet());
                    var n = i(i([], r(e)), [t]);
                    return this._storeHeldLockSet(n),
                    t
                }
                ,
                p.prototype._requestLockQueueMap = function() {
                    var t = s(c.REQUEST_QUEUE_MAP);
                    return t && JSON.parse(t) || {}
                }
                ,
                p.prototype._heldLockSet = function() {
                    var t = s(c.HELD_LOCK_SET);
                    return t && JSON.parse(t) || []
                }
                ,
                p.prototype._updateHeldAndRequestLocks = function(t) {
                    var e = this._heldLockSet()
                      , n = e.findIndex((function(e) {
                        return e.uuid === t.uuid
                    }
                    ));
                    if (-1 !== n) {
                        e.splice(n, 1);
                        var o = this._requestLockQueueMap()
                          , a = o[t.name] || []
                          , s = r(a)
                          , l = s[0]
                          , c = s.slice(1);
                        if (l) {
                            if (l.mode === u.EXCLUSIVE || 0 === c.length)
                                e.push(l),
                                o[t.name] = c;
                            else if (l.mode === u.SHARED) {
                                var h = a.findIndex((function(t) {
                                    return t.mode !== u.SHARED
                                }
                                ));
                                -1 === h && (h = a.length),
                                e = i(i([], r(e)), r(a.splice(0, h)))
                            }
                            return this._storeHeldLockSetAndRequestLockQueueMap(e, o),
                            l
                        }
                        this._storeHeldLockSet(e)
                    } else
                        console.log("this held lock which uuid is " + t.uuid + " had been steal")
                }
                ,
                p.prototype._handleSignalExisted = function(t, e, n) {
                    return t.signal instanceof AbortSignal ? t.signal.aborted ? (e(new DOMException("Failed to execute 'request' on 'LockManager': The request was aborted.")),
                    !1) : (this._signalOnabort(t.signal, n),
                    !0) : (e(new TypeError("Failed to execute 'request' on 'LockManager': member signal is not of type AbortSignal.")),
                    !1)
                }
                ,
                p.prototype._handleExceptionWhenStealIsTrue = function(t, e) {
                    return t.mode !== u.EXCLUSIVE ? (e(new DOMException("Failed to execute 'request' on 'LockManager': The 'steal' option may only be used with 'exclusive' locks.")),
                    !1) : !0 !== t.ifAvailable || (e(new DOMException("Failed to execute 'request' on 'LockManager': The 'steal' and 'ifAvailable' options cannot be used together.")),
                    !1)
                }
                ,
                p.prototype._handleRequestArgs = function(e, n) {
                    var r, i, o = e.length;
                    if (o < 2)
                        return n(new TypeError("Failed to execute 'request' on 'LockManager': 2 arguments required, but only " + e.length + " present.")),
                        null;
                    if (2 === o) {
                        if ("function" != typeof e[1])
                            return n(new TypeError("Failed to execute 'request' on 'LockManager': parameter 2 is not of type 'Function'.")),
                            null;
                        r = e[1],
                        i = this._defaultOptions
                    } else {
                        if ("function" != typeof e[2])
                            return n(new TypeError("Failed to execute 'request' on 'LockManager': parameter 3 is not of type 'Function'.")),
                            null;
                        r = e[2],
                        i = t(t({}, this._defaultOptions), e[1])
                    }
                    return Object.values(u).indexOf(i.mode) < 0 ? (n(new TypeError("Failed to execute 'request' on 'LockManager': The provided value '" + i.mode + "' is not a valid enum value of type LockMode.")),
                    null) : "-" === e[0][0] ? (n(new DOMException("Failed to execute 'request' on 'LockManager': Names cannot start with '-'.")),
                    null) : {
                        cb: r,
                        _options: i
                    }
                }
                ,
                p.prototype._handleHeldLockAndRequest = function(t, e, n, r, i) {
                    t ? t.mode === u.EXCLUSIVE ? this._handleNewLockRequest(e, n) : t.mode === u.SHARED && (e.mode === u.SHARED && 0 === r.length ? this._handleNewHeldLock(e, n, i) : this._handleNewLockRequest(e, n)) : this._handleNewHeldLock(e, n, i)
                }
                ,
                p.prototype._signalOnabort = function(t, e) {
                    var n = this
                      , r = e.name
                      , i = e.uuid;
                    t.onabort = function() {
                        var t = n._requestLockQueueMap()
                          , e = t[r].findIndex((function(t) {
                            return t.uuid === i
                        }
                        ));
                        -1 !== e && (t[r].splice(e, 1),
                        n._storeRequestLockQueueMap(t))
                    }
                }
                ,
                p.prototype._resolveWithCB = function(t, r, i) {
                    var o = this;
                    return function(a) {
                        return new Promise((function(s) {
                            new Promise((function(t) {
                                return t("")
                            }
                            )).then((function() {
                                return e(o, void 0, void 0, (function() {
                                    var e, o;
                                    return n(this, (function(n) {
                                        switch (n.label) {
                                        case 0:
                                            return n.trys.push([0, 2, , 3]),
                                            [4, t(a)];
                                        case 1:
                                            return e = n.sent(),
                                            s(e),
                                            r(e),
                                            [3, 3];
                                        case 2:
                                            return o = n.sent(),
                                            s(o),
                                            i(o),
                                            [3, 3];
                                        case 3:
                                            return [2]
                                        }
                                    }
                                    ))
                                }
                                ))
                            }
                            ))
                        }
                        ))
                    }
                }
                ,
                p.prototype._handleNewHeldLock = function(t, r, i) {
                    return e(this, void 0, void 0, (function() {
                        var e, o, a, s = this;
                        return n(this, (function(n) {
                            return this._pushToHeldLockSet(t, i),
                            e = !1,
                            o = !1,
                            a = function() {
                                return !(e || o || s._isInHeldLockSet(t.uuid) || (s._handleHeldLockBeSteal(t),
                                o = !0,
                                0))
                            }
                            ,
                            l(c.HELD_LOCK_SET, a),
                            r({
                                name: t.name,
                                mode: t.mode
                            }).then((function() {
                                e = !0,
                                s._updateHeldAndRequestLocks(t)
                            }
                            )),
                            [2]
                        }
                        ))
                    }
                    ))
                }
                ,
                p.prototype._handleHeldLockBeSteal = function(t) {
                    t.reject(new DOMException("Lock broken by another request with the 'steal' option."))
                }
                ,
                p.prototype._storeHeldLockSet = function(t) {
                    a(c.HELD_LOCK_SET, JSON.stringify(t))
                }
                ,
                p.prototype._storeRequestLockQueueMap = function(t) {
                    a(c.REQUEST_QUEUE_MAP, JSON.stringify(t))
                }
                ,
                p.prototype._isInHeldLockSet = function(t) {
                    return this._heldLockSet().some((function(e) {
                        return e.uuid === t
                    }
                    ))
                }
                ,
                p.prototype._handleNewLockRequest = function(t, r) {
                    var i = this;
                    this._pushToLockRequestQueueMap(t);
                    var o = !1;
                    l(c.HELD_LOCK_SET, (function() {
                        return e(i, void 0, void 0, (function() {
                            return n(this, (function(e) {
                                switch (e.label) {
                                case 0:
                                    return o || !this._isInHeldLockSet(t.uuid) ? [3, 5] : (o = !0,
                                    [4, r({
                                        name: t.name,
                                        mode: t.mode
                                    })]);
                                case 1:
                                    return e.sent(),
                                    this._isInHeldLockSet(t.uuid) || this._handleHeldLockBeSteal(t),
                                    t.mode !== u.EXCLUSIVE ? [3, 2] : (this._updateHeldAndRequestLocks(t),
                                    [3, 4]);
                                case 2:
                                    return t.mode !== u.SHARED ? [3, 4] : [4, this._handleSharedLockFromListener(t)];
                                case 3:
                                    e.sent(),
                                    e.label = 4;
                                case 4:
                                    return [2, !0];
                                case 5:
                                    return [2, !1]
                                }
                            }
                            ))
                        }
                        ))
                    }
                    ))
                }
                ,
                p.prototype._handleSharedLockFromListener = function(t) {
                    return e(this, void 0, void 0, (function() {
                        var e;
                        return n(this, (function(n) {
                            switch (n.label) {
                            case 0:
                                return [4, (r = Math.floor(1e3 * Math.random()),
                                new Promise((function(t) {
                                    return setTimeout(t, r)
                                }
                                )))];
                            case 1:
                                return n.sent(),
                                (e = this._heldLockSet().filter((function(e) {
                                    return e.name === t.name && e.uuid !== t.uuid && e.mode === u.SHARED
                                }
                                ))).length ? this._storeHeldLockSet(e) : this._updateHeldAndRequestLocks(t),
                                [2]
                            }
                            var r
                        }
                        ))
                    }
                    ))
                }
                ,
                p.prototype._storeHeldLockSetAndRequestLockQueueMap = function(t, e) {
                    this._storeHeldLockSet(t),
                    this._storeRequestLockQueueMap(e)
                }
                ,
                p.prototype._query = function() {
                    var t = {
                        held: this._heldLockSet(),
                        pending: []
                    }
                      , e = this._requestLockQueueMap();
                    for (var n in e) {
                        var r = e[n];
                        t.pending = t.pending.concat(r)
                    }
                    return t
                }
                ,
                p.prototype._onUnload = function() {
                    var t = this;
                    window.addEventListener("unload", (function(e) {
                        t._cleanClientLocksByClientId(t._clientId)
                    }
                    ))
                }
                ,
                p.prototype._cleanClientLocksByClientId = function(t) {
                    var e = this._requestLockQueueMap();
                    this._cleanRequestLockQueueByClientId(e, t);
                    var n = this._cleanHeldLockSetByClientId(e, t);
                    this._storeHeldLockSetAndRequestLockQueueMap(n, e)
                }
                ,
                p.prototype._cleanHeldLockSetByClientId = function(t, e) {
                    var n = this._heldLockSet()
                      , o = [];
                    return n.forEach((function(n) {
                        if (n.clientId !== e)
                            o.push(n);
                        else {
                            var a = t[n.name] || []
                              , s = r(a)
                              , l = s[0]
                              , c = s.slice(1);
                            if (l)
                                if (l.mode === u.EXCLUSIVE || 0 === c.length)
                                    o.push(l),
                                    t[n.name] = c;
                                else if (l.mode === u.SHARED) {
                                    var h = a.findIndex((function(t) {
                                        return t.mode !== u.SHARED
                                    }
                                    ));
                                    -1 === h && (h = a.length),
                                    o = i(i([], r(o)), r(a.splice(0, h)))
                                }
                        }
                    }
                    )),
                    o
                }
                ,
                p.prototype._cleanRequestLockQueueByClientId = function(t, e) {
                    for (var n in t) {
                        var r = t[n];
                        t[n] = r.filter((function(t) {
                            return t.clientId !== e
                        }
                        ))
                    }
                }
                ,
                p.prototype._cleanUnliveClientLocks = function() {
                    var t = this
                      , e = i([], r(new Set(this._getClientIds())));
                    if (e.length) {
                        var n = [];
                        e.forEach((function(e) {
                            var r, i = s(e);
                            !i || Date.now() - Number(i) > 3100 ? (r = e,
                            window.localStorage.removeItem(r),
                            t._cleanClientLocksByClientId(e)) : n.push(e)
                        }
                        )),
                        JSON.stringify(e) !== JSON.stringify(n) && this._storeClientIds(n)
                    } else
                        this._storeClientIds([])
                }
                ,
                p
            }();
            !function() {
                if ("undefined" != typeof window) {
                    var t = window.navigator;
                    if (t && !t.locks) {
                        var e = new p;
                        Object.defineProperty(t, "locks", {
                            value: e
                        })
                    }
                }
            }()
        }
        ,
        void 0 === (i = "function" == typeof r ? r.call(e, n, e, t) : r) || (t.exports = i)
    },
    7149: function(t, e, n) {
        "use strict";
        var r = n("23e7")
          , i = n("d066")
          , o = n("c430")
          , a = n("d256")
          , s = n("4738").CONSTRUCTOR
          , l = n("cdf9")
          , c = i("Promise")
          , u = o && !s;
        r({
            target: "Promise",
            stat: !0,
            forced: o || s
        }, {
            resolve: function(t) {
                return l(u && this === c ? a : this, t)
            }
        })
    },
    7234: function(t, e, n) {
        "use strict";
        t.exports = function(t) {
            return null == t
        }
    },
    7282: function(t, e, n) {
        "use strict";
        var r = n("e330")
          , i = n("59ed");
        t.exports = function(t, e, n) {
            try {
                return r(i(Object.getOwnPropertyDescriptor(t, e)[n]))
            } catch (t) {}
        }
    },
    7418: function(t, e, n) {
        "use strict";
        e.f = Object.getOwnPropertySymbols
    },
    7839: function(t, e, n) {
        "use strict";
        t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
    },
    "7b0b": function(t, e, n) {
        "use strict";
        var r = n("1d80")
          , i = Object;
        t.exports = function(t) {
            return i(r(t))
        }
    },
    "7c73": function(t, e, n) {
        "use strict";
        var r, i = n("825a"), o = n("37e8"), a = n("7839"), s = n("d012"), l = n("1be4"), c = n("cc12"), u = n("f772"), h = "prototype", p = "script", f = u("IE_PROTO"), d = function() {}, g = function(t) {
            return "<script>" + t + "</" + p + ">"
        }, m = function(t) {
            t.write(g("")),
            t.close();
            var e = t.parentWindow.Object;
            return t = null,
            e
        }, _ = function() {
            try {
                r = new ActiveXObject("htmlfile")
            } catch (t) {}
            _ = "undefined" != typeof document ? document.domain && r ? m(r) : function() {
                var t, e = c("iframe");
                return e.style.display = "none",
                l.appendChild(e),
                e.src = String("javascript:"),
                (t = e.contentWindow.document).open(),
                t.write(g("document.F=Object")),
                t.close(),
                t.F
            }() : m(r);
            for (var t = a.length; t--; )
                delete _[h][a[t]];
            return _()
        };
        s[f] = !0,
        t.exports = Object.create || function(t, e) {
            var n;
            return null !== t ? (d[h] = i(t),
            n = new d,
            d[h] = null,
            n[f] = t) : n = _(),
            void 0 === e ? n : o.f(n, e)
        }
    },
    "7db0": function(t, e, n) {
        "use strict";
        var r = n("23e7")
          , i = n("b727").find
          , o = n("44d2")
          , a = "find"
          , s = !0;
        a in [] && Array(1)[a]((function() {
            s = !1
        }
        )),
        r({
            target: "Array",
            proto: !0,
            forced: s
        }, {
            find: function(t) {
                return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        }),
        o(a)
    },
    "825a": function(t, e, n) {
        "use strict";
        var r = n("861d")
          , i = String
          , o = TypeError;
        t.exports = function(t) {
            if (r(t))
                return t;
            throw new o(i(t) + " is not an object")
        }
    },
    "83ab": function(t, e, n) {
        "use strict";
        var r = n("d039");
        t.exports = !r((function() {
            return 7 !== Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1]
        }
        ))
    },
    "861d": function(t, e, n) {
        "use strict";
        var r = n("1626");
        t.exports = function(t) {
            return "object" == typeof t ? null !== t : r(t)
        }
    },
    8925: function(t, e, n) {
        "use strict";
        var r = n("e330")
          , i = n("1626")
          , o = n("c6cd")
          , a = r(Function.toString);
        i(o.inspectSource) || (o.inspectSource = function(t) {
            return a(t)
        }
        ),
        t.exports = o.inspectSource
    },
    "90e3": function(t, e, n) {
        "use strict";
        var r = n("e330")
          , i = 0
          , o = Math.random()
          , a = r(1..toString);
        t.exports = function(t) {
            return "Symbol(" + (void 0 === t ? "" : t) + ")_" + a(++i + o, 36)
        }
    },
    9112: function(t, e, n) {
        "use strict";
        var r = n("83ab")
          , i = n("9bf2")
          , o = n("5c6c");
        t.exports = r ? function(t, e, n) {
            return i.f(t, e, o(1, n))
        }
        : function(t, e, n) {
            return t[e] = n,
            t
        }
    },
    "94ca": function(t, e, n) {
        "use strict";
        var r = n("d039")
          , i = n("1626")
          , o = /#|\.prototype\./
          , a = function(t, e) {
            var n = l[s(t)];
            return n === u || n !== c && (i(e) ? r(e) : !!e)
        }
          , s = a.normalize = function(t) {
            return String(t).replace(o, ".").toLowerCase()
        }
          , l = a.data = {}
          , c = a.NATIVE = "N"
          , u = a.POLYFILL = "P";
        t.exports = a
    },
    "9a1f": function(t, e, n) {
        "use strict";
        var r = n("c65b")
          , i = n("59ed")
          , o = n("825a")
          , a = n("0d51")
          , s = n("35a1")
          , l = TypeError;
        t.exports = function(t, e) {
            var n = arguments.length < 2 ? s(t) : e;
            if (i(n))
                return o(r(n, t));
            throw new l(a(t) + " is not iterable")
        }
    },
    "9ab4": function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return m
        }
        ));
        var r = function() {
            return (r = Object.assign || function(t) {
                for (var e, n = 1, r = arguments.length; n < r; n++)
                    for (var i in e = arguments[n])
                        Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }
            ).apply(this, arguments)
        }
          , i = new RegExp("```([\\s\\S]*?)```","g")
          , o = new RegExp("(`)(.*?)\\1","g")
          , a = new RegExp("\\[([^\\]]*)\\]\\(([^\\s]+)(?:\\s+&quot;(.*?)&quot;)?\\)","g")
          , s = new RegExp("_\\[([^\\[\\]]*)\\]\\(([^)\\s]+)(?:\\s+&quot;(.*?)&quot;)?\\)","g")
          , l = new RegExp("\\*{1,2}(\\S.*?\\S)\\*{1,2}","g")
          , c = new RegExp("\\b_{1,2}(\\S[^\\n]*?\\S)_{1,2}\\b","g")
          , u = new RegExp("~{1,2}(\\S.*?\\S)~{1,2}","g")
          , h = new RegExp("^(&gt;{1,2})(.*)","gm")
          , p = new RegExp("^-\\s.*(?:\\n\\s*-\\s.*)*","gm")
          , f = new RegExp("((\\n\\s*((\\d+\\.){1,5})\\s.*)+)","g")
          , d = new RegExp("\\n(<pre>)((\\n|.)*)(<\\/pre>)","g")
          , g = new RegExp("https?:\\/\\/(?:[a-zA-Z0-9\\-]+\\.)+[a-zA-Z]{2,}(?:\\/[^\\s]*)?","g")
          , m = function() {
            function t(t) {
                void 0 === t && (t = {}),
                this.options = t
            }
            return t.prototype.parseMarkdown = function(t) {
                return t = (t = this.standardizeLineEndings(t)).replace(/\$/g, "DOLLAR=SIGN=PLACEHOLDER"),
                t = (t = this.fixCodeBlocks(this.replaceMarkdown("\n" + t + "\n")).trim()).replace(/DOLLAR=SIGN=PLACEHOLDER/g, "$")
            }
            ,
            t.prototype.standardizeLineEndings = function(t) {
                return t = (t = t.replace(/\r\n/g, "\n")).replace(/\r/g, "\n")
            }
            ,
            t.prototype.replaceCodeBlocks = function(t) {
                var e = this;
                return t.replace(i, (function(t, n) {
                    return "\n<pre>" + e.encodeHTMLEntites(n) + "</pre>"
                }
                ))
            }
            ,
            t.prototype.replaceInlineCodes = function(t) {
                return t.replace(o, (function(t, e, n) {
                    return "<code>" + n + "</code>"
                }
                ))
            }
            ,
            t.prototype.replaceLinks = function(t) {
                var e = this;
                return t.replace(a, (function(t, n, i, o) {
                    o && ' alt="'.concat(o, '"');
                    var a = n || i
                      , s = {
                        target: "_blank",
                        href: i
                    };
                    return o && (s.alt = o),
                    "object" == typeof e.options && e.options.a && e.options.a.length > 0 && e.options.a.forEach((function(e) {
                        void 0 === e.rule && e.attributes && (s = r(r({}, s), e.attributes)),
                        e.rule && e.rule.test(t) && (s = r(r({}, s), e.attributes))
                    }
                    )),
                    "<a " + e.convertAttributesToString(s) + ">" + a + "</a>"
                }
                ))
            }
            ,
            t.prototype.replaceLinksWithTargetParent = function(t) {
                return t.replace(s, (function(t, e, n, r) {
                    return '<a target="_parent" href="' + n + '"' + (r ? ' alt="'.concat(r, '"') : "") + ">" + (e || n) + "</a>"
                }
                ))
            }
            ,
            t.prototype.replaceBold = function(t) {
                return t.replace(l, (function(t, e) {
                    var n, r, i = "", o = "", a = (null === (n = t.match(/^\*+/)) || void 0 === n ? void 0 : n[0].length) || 0, s = (null === (r = t.match(/\*+$/)) || void 0 === r ? void 0 : r[0].length) || 0;
                    return a !== s && (a >= 2 || s >= 2) && (a > 2 && s > 2 ? (i = "*".repeat(a - 2),
                    o = "*".repeat(s - 2)) : (i = "*".repeat(a - 1),
                    o = "*".repeat(s - 1))),
                    i + "<strong>" + e + "</strong>" + o
                }
                ))
            }
            ,
            t.prototype.replaceItalic = function(t) {
                return t.replace(c, (function(t, e) {
                    var n, r;
                    if (t.match(g))
                        return t;
                    var i = ""
                      , o = ""
                      , a = (null === (n = t.match(/^_+/)) || void 0 === n ? void 0 : n[0].length) || 0
                      , s = (null === (r = t.match(/_+$/)) || void 0 === r ? void 0 : r[0].length) || 0;
                    return a !== s && (a >= 2 || s >= 2) && (a > 2 && s > 2 ? (i = "_".repeat(a - 2),
                    o = "_".repeat(s - 2)) : (i = "_".repeat(a - 1),
                    o = "_".repeat(s - 1))),
                    i + "<i>" + e + "</i>" + o
                }
                ))
            }
            ,
            t.prototype.replaceceStrikethrough = function(t) {
                return t.replace(u, (function(t, e) {
                    var n, r, i = "", o = "", a = (null === (n = t.match(/^~+/)) || void 0 === n ? void 0 : n[0].length) || 0, s = (null === (r = t.match(/~+$/)) || void 0 === r ? void 0 : r[0].length) || 0;
                    return a !== s && (a >= 2 || s >= 2) && (a > 2 && s > 2 ? (i = "~".repeat(a - 2),
                    o = "~".repeat(s - 2)) : (i = "~".repeat(a - 1),
                    o = "~".repeat(s - 1))),
                    i + "<del>" + e + "</del>" + o
                }
                ))
            }
            ,
            t.prototype.replaceBlockquotes = function(t) {
                return t.replace(h, (function(t, e, n) {
                    var r = e.length;
                    r > 2 && (r = 2),
                    n = n.replace(/^&gt;/, "");
                    var i = Array.from({
                        length: r
                    }, (function() {
                        return "<blockquote>"
                    }
                    ));
                    return i.push(n),
                    i.push("</blockquote>".repeat(r)),
                    "\n" + i.join("")
                }
                ))
            }
            ,
            t.prototype.replaceUnorderedLists = function(t) {
                return t.replace(p, (function(t) {
                    var e = []
                      , n = 0;
                    for (t.trim().split("\n").forEach((function(t) {
                        var r = t.match(/^(\s*)(-|\+)(?!-|\+)(.*)/);
                        if (r) {
                            for (var i = r[1].length, o = r[3].trim(); n > i; )
                                e.push("</ul>"),
                                n--;
                            n < i ? (e.push("<ul><li>".concat(o, "</li>")),
                            n++) : e.push("<li>".concat(o, "</li>"))
                        }
                    }
                    )); n > 0; )
                        e.push("</ul>"),
                        n--;
                    return "<ul>".concat(e.join(""), "</ul>")
                }
                ))
            }
            ,
            t.prototype.replaceOrderedLists = function(t) {
                var e = this;
                return t.replace(f, (function(t) {
                    var n = []
                      , r = 0
                      , i = []
                      , o = t.split("\n").indexOf(t.trim().split("\n")[0]);
                    for (t.trim().split("\n").forEach((function(t) {
                        var o = t.match(/(\d+\.)\s(.*)/);
                        if (o) {
                            for (var a = e.countLevels(t) - 1; r > a; )
                                n.push("</ol>"),
                                i.pop(),
                                r--;
                            r < a ? (n.push("<ol><li>".concat(o[2], "</li>")),
                            i.push(a),
                            r++) : n.push("<li>".concat(o[2], "</li>"))
                        }
                    }
                    )); r > 0; )
                        n.push("</ol>"),
                        r--;
                    return o > 0 ? "".concat("\n".repeat(o), "<ol>").concat(n.join(""), "</ol>") : "<ol>".concat(n.join(""), "</ol>")
                }
                ))
            }
            ,
            t.prototype.countLevels = function(t) {
                var e = t.match(/^(\d+(\.\d+)*)\./);
                return e ? e[1].split(".").length : 0
            }
            ,
            t.prototype.fixCodeBlocks = function(t) {
                return t.replace(d, (function(t, e, n, r, i) {
                    var o = "";
                    return n.split("\n").forEach((function(t) {
                        o += t + "\n"
                    }
                    )),
                    e + o + i
                }
                ))
            }
            ,
            t.prototype.encodeHTMLEntites = function(t) {
                return t.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\//g, "&#47;")
            }
            ,
            t.prototype.replaceMarkdown = function(t) {
                var e = this
                  , n = t
                  , r = []
                  , i = [];
                return n = (n = n.replace(/```([\s\S]*?)```/g, (function(t) {
                    return i.push(t),
                    "CODEBLOCK=PLACEHOLDER=".concat((i.length - 1).toString())
                }
                ))).replace(/`([^`]+)`/g, (function(t) {
                    return r.push(t),
                    "INLINECODE=PLACEHOLDER=".concat((r.length - 1).toString())
                }
                )),
                n = this.replaceBold(n),
                n = this.replaceItalic(n),
                n = this.replaceLinksWithTargetParent(n),
                n = this.replaceLinks(n),
                n = this.replaceceStrikethrough(n),
                n = this.replaceBlockquotes(n),
                n = this.replaceUnorderedLists(n),
                n = (n = (n = this.replaceOrderedLists(n)).replace(/INLINECODE=PLACEHOLDER=(\d+)/g, (function(t, n) {
                    return e.replaceInlineCodes(r[Number(n)])
                }
                ))).replace(/CODEBLOCK=PLACEHOLDER=(\d+)/g, (function(t, n) {
                    return e.replaceCodeBlocks(i[Number(n)])
                }
                ))
            }
            ,
            t.prototype.convertAttributesToString = function(t) {
                return Object.entries(t).map((function(t) {
                    var e = t[0]
                      , n = t[1];
                    return "".concat(e, '="').concat(String(n), '"')
                }
                )).join(" ")
            }
            ,
            t.prototype.makeHtml = function(t) {
                return this.parseMarkdown(t)
            }
            ,
            t
        }()
    },
    "9bf2": function(t, e, n) {
        "use strict";
        var r = n("83ab")
          , i = n("0cfb")
          , o = n("aed9")
          , a = n("825a")
          , s = n("a04b")
          , l = TypeError
          , c = Object.defineProperty
          , u = Object.getOwnPropertyDescriptor
          , h = "enumerable"
          , p = "configurable"
          , f = "writable";
        e.f = r ? o ? function(t, e, n) {
            if (a(t),
            e = s(e),
            a(n),
            "function" == typeof t && "prototype" === e && "value"in n && f in n && !n[f]) {
                var r = u(t, e);
                r && r[f] && (t[e] = n.value,
                n = {
                    configurable: p in n ? n[p] : r[p],
                    enumerable: h in n ? n[h] : r[h],
                    writable: !1
                })
            }
            return c(t, e, n)
        }
        : c : function(t, e, n) {
            if (a(t),
            e = s(e),
            a(n),
            i)
                try {
                    return c(t, e, n)
                } catch (t) {}
            if ("get"in n || "set"in n)
                throw new l("Accessors not supported");
            return "value"in n && (t[e] = n.value),
            t
        }
    },
    a04b: function(t, e, n) {
        "use strict";
        var r = n("c04e")
          , i = n("d9b5");
        t.exports = function(t) {
            var e = r(t, "string");
            return i(e) ? e : e + ""
        }
    },
    a4b4: function(t, e, n) {
        "use strict";
        var r = n("342f");
        t.exports = /web0s(?!.*chrome)/i.test(r)
    },
    ae93: function(t, e, n) {
        "use strict";
        var r, i, o, a = n("d039"), s = n("1626"), l = n("861d"), c = n("7c73"), u = n("e163"), h = n("cb2d"), p = n("b622"), f = n("c430"), d = p("iterator"), g = !1;
        [].keys && ("next"in (o = [].keys()) ? (i = u(u(o))) !== Object.prototype && (r = i) : g = !0),
        !l(r) || a((function() {
            var t = {};
            return r[d].call(t) !== t
        }
        )) ? r = {} : f && (r = c(r)),
        s(r[d]) || h(r, d, (function() {
            return this
        }
        )),
        t.exports = {
            IteratorPrototype: r,
            BUGGY_SAFARI_ITERATORS: g
        }
    },
    aed9: function(t, e, n) {
        "use strict";
        var r = n("83ab")
          , i = n("d039");
        t.exports = r && i((function() {
            return 42 !== Object.defineProperty((function() {}
            ), "prototype", {
                value: 42,
                writable: !1
            }).prototype
        }
        ))
    },
    b42e: function(t, e, n) {
        "use strict";
        var r = Math.ceil
          , i = Math.floor;
        t.exports = Math.trunc || function(t) {
            var e = +t;
            return (e > 0 ? i : r)(e)
        }
    },
    b575: function(t, e, n) {
        "use strict";
        var r, i, o, a, s, l = n("da84"), c = n("157a"), u = n("0366"), h = n("2cf4").set, p = n("01b4"), f = n("1cdc"), d = n("d4c3"), g = n("a4b4"), m = n("605d"), _ = l.MutationObserver || l.WebKitMutationObserver, y = l.document, v = l.process, b = l.Promise, w = c("queueMicrotask");
        if (!w) {
            var k = new p
              , x = function() {
                var t, e;
                for (m && (t = v.domain) && t.exit(); e = k.get(); )
                    try {
                        e()
                    } catch (t) {
                        throw k.head && r(),
                        t
                    }
                t && t.enter()
            };
            f || m || g || !_ || !y ? !d && b && b.resolve ? ((a = b.resolve(void 0)).constructor = b,
            s = u(a.then, a),
            r = function() {
                s(x)
            }
            ) : m ? r = function() {
                v.nextTick(x)
            }
            : (h = u(h, l),
            r = function() {
                h(x)
            }
            ) : (i = !0,
            o = y.createTextNode(""),
            new _(x).observe(o, {
                characterData: !0
            }),
            r = function() {
                o.data = i = !i
            }
            ),
            w = function(t) {
                k.head || r(),
                k.add(t)
            }
        }
        t.exports = w
    },
    b622: function(t, e, n) {
        "use strict";
        var r = n("da84")
          , i = n("5692")
          , o = n("1a2d")
          , a = n("90e3")
          , s = n("04f8")
          , l = n("fdbf")
          , c = r.Symbol
          , u = i("wks")
          , h = l ? c.for || c : c && c.withoutSetter || a;
        t.exports = function(t) {
            return o(u, t) || (u[t] = s && o(c, t) ? c[t] : h("Symbol." + t)),
            u[t]
        }
    },
    b727: function(t, e, n) {
        "use strict";
        var r = n("0366")
          , i = n("e330")
          , o = n("44ad")
          , a = n("7b0b")
          , s = n("07fa")
          , l = n("65f0")
          , c = i([].push)
          , u = function(t) {
            var e = 1 === t
              , n = 2 === t
              , i = 3 === t
              , u = 4 === t
              , h = 6 === t
              , p = 7 === t
              , f = 5 === t || h;
            return function(d, g, m, _) {
                for (var y, v, b = a(d), w = o(b), k = s(w), x = r(g, m), S = 0, T = _ || l, C = e ? T(d, k) : n || p ? T(d, 0) : void 0; k > S; S++)
                    if ((f || S in w) && (v = x(y = w[S], S, b),
                    t))
                        if (e)
                            C[S] = v;
                        else if (v)
                            switch (t) {
                            case 3:
                                return !0;
                            case 5:
                                return y;
                            case 6:
                                return S;
                            case 2:
                                c(C, y)
                            }
                        else
                            switch (t) {
                            case 4:
                                return !1;
                            case 7:
                                c(C, y)
                            }
                return h ? -1 : i || u ? u : C
            }
        };
        t.exports = {
            forEach: u(0),
            map: u(1),
            filter: u(2),
            some: u(3),
            every: u(4),
            find: u(5),
            findIndex: u(6),
            filterReject: u(7)
        }
    },
    c04e: function(t, e, n) {
        "use strict";
        var r = n("c65b")
          , i = n("861d")
          , o = n("d9b5")
          , a = n("dc4a")
          , s = n("485a")
          , l = n("b622")
          , c = TypeError
          , u = l("toPrimitive");
        t.exports = function(t, e) {
            if (!i(t) || o(t))
                return t;
            var n, l = a(t, u);
            if (l) {
                if (void 0 === e && (e = "default"),
                n = r(l, t, e),
                !i(n) || o(n))
                    return n;
                throw new c("Can't convert object to primitive value")
            }
            return void 0 === e && (e = "number"),
            s(t, e)
        }
    },
    c430: function(t, e, n) {
        "use strict";
        t.exports = !1
    },
    c65b: function(t, e, n) {
        "use strict";
        var r = n("40d5")
          , i = Function.prototype.call;
        t.exports = r ? i.bind(i) : function() {
            return i.apply(i, arguments)
        }
    },
    c6b6: function(t, e, n) {
        "use strict";
        var r = n("e330")
          , i = r({}.toString)
          , o = r("".slice);
        t.exports = function(t) {
            return o(i(t), 8, -1)
        }
    },
    c6cd: function(t, e, n) {
        "use strict";
        var r = n("c430")
          , i = n("da84")
          , o = n("6374")
          , a = "__core-js_shared__"
          , s = t.exports = i[a] || o(a, {});
        (s.versions || (s.versions = [])).push({
            version: "3.37.1",
            mode: r ? "pure" : "global",
            copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
            license: "https://github.com/zloirock/core-js/blob/v3.37.1/LICENSE",
            source: "https://github.com/zloirock/core-js"
        })
    },
    c6d2: function(t, e, n) {
        "use strict";
        var r = n("23e7")
          , i = n("c65b")
          , o = n("c430")
          , a = n("5e77")
          , s = n("1626")
          , l = n("dcc3")
          , c = n("e163")
          , u = n("d2bb")
          , h = n("d44e")
          , p = n("9112")
          , f = n("cb2d")
          , d = n("b622")
          , g = n("3f8c")
          , m = n("ae93")
          , _ = a.PROPER
          , y = a.CONFIGURABLE
          , v = m.IteratorPrototype
          , b = m.BUGGY_SAFARI_ITERATORS
          , w = d("iterator")
          , k = "keys"
          , x = "values"
          , S = "entries"
          , T = function() {
            return this
        };
        t.exports = function(t, e, n, a, d, m, C) {
            l(n, e, a);
            var O, E, L, j = function(t) {
                if (t === d && $)
                    return $;
                if (!b && t && t in P)
                    return P[t];
                switch (t) {
                case k:
                case x:
                case S:
                    return function() {
                        return new n(this,t)
                    }
                }
                return function() {
                    return new n(this)
                }
            }, R = e + " Iterator", A = !1, P = t.prototype, I = P[w] || P["@@iterator"] || d && P[d], $ = !b && I || j(d), D = "Array" === e && P.entries || I;
            if (D && ((O = c(D.call(new t))) !== Object.prototype && O.next && (o || c(O) === v || (u ? u(O, v) : s(O[w]) || f(O, w, T)),
            h(O, R, !0, !0),
            o && (g[R] = T))),
            _ && d === x && I && I.name !== x && (!o && y ? p(P, "name", x) : (A = !0,
            $ = function() {
                return i(I, this)
            }
            )),
            d)
                if (E = {
                    values: j(x),
                    keys: m ? $ : j(k),
                    entries: j(S)
                },
                C)
                    for (L in E)
                        (b || A || !(L in P)) && f(P, L, E[L]);
                else
                    r({
                        target: e,
                        proto: !0,
                        forced: b || A
                    }, E);
            return o && !C || P[w] === $ || f(P, w, $, {
                name: d
            }),
            g[e] = $,
            E
        }
    },
    c740: function(t, e, n) {
        "use strict";
        var r = n("23e7")
          , i = n("b727").findIndex
          , o = n("44d2")
          , a = "findIndex"
          , s = !0;
        a in [] && Array(1)[a]((function() {
            s = !1
        }
        )),
        r({
            target: "Array",
            proto: !0,
            forced: s
        }, {
            findIndex: function(t) {
                return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        }),
        o(a)
    },
    c8ba: function(t, e) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || new Function("return this")()
        } catch (t) {
            "object" == typeof window && (n = window)
        }
        t.exports = n
    },
    ca84: function(t, e, n) {
        "use strict";
        var r = n("e330")
          , i = n("1a2d")
          , o = n("fc6a")
          , a = n("4d64").indexOf
          , s = n("d012")
          , l = r([].push);
        t.exports = function(t, e) {
            var n, r = o(t), c = 0, u = [];
            for (n in r)
                !i(s, n) && i(r, n) && l(u, n);
            for (; e.length > c; )
                i(r, n = e[c++]) && (~a(u, n) || l(u, n));
            return u
        }
    },
    cb2d: function(t, e, n) {
        "use strict";
        var r = n("1626")
          , i = n("9bf2")
          , o = n("13d2")
          , a = n("6374");
        t.exports = function(t, e, n, s) {
            s || (s = {});
            var l = s.enumerable
              , c = void 0 !== s.name ? s.name : e;
            if (r(n) && o(n, c, s),
            s.global)
                l ? t[e] = n : a(e, n);
            else {
                try {
                    s.unsafe ? t[e] && (l = !0) : delete t[e]
                } catch (t) {}
                l ? t[e] = n : i.f(t, e, {
                    value: n,
                    enumerable: !1,
                    configurable: !s.nonConfigurable,
                    writable: !s.nonWritable
                })
            }
            return t
        }
    },
    cc12: function(t, e, n) {
        "use strict";
        var r = n("da84")
          , i = n("861d")
          , o = r.document
          , a = i(o) && i(o.createElement);
        t.exports = function(t) {
            return a ? o.createElement(t) : {}
        }
    },
    cc70: function(t, e, n) {
        (function(t) {
            !function(e) {
                var n;
                "undefined" != typeof window ? n = window : void 0 !== t ? n = t : "undefined" != typeof self && (n = self),
                n.$__TawkEngine = e()
            }((function() {
                return function t(e, n, r) {
                    function i(a, s) {
                        if (!n[a]) {
                            if (!e[a]) {
                                if (o)
                                    return o(a, !0);
                                throw new Error("Cannot find module '" + a + "'")
                            }
                            var l = n[a] = {
                                exports: {}
                            };
                            e[a][0].call(l.exports, (function(t) {
                                return i(e[a][1][t] || t)
                            }
                            ), l, l.exports, t, e, n, r)
                        }
                        return n[a].exports
                    }
                    for (var o = !1, a = 0; a < r.length; a++)
                        i(r[a]);
                    return i
                }({
                    debug: [function(t, e, n) {
                        e.exports = t("n9i2g6")
                    }
                    , {}],
                    n9i2g6: [function(t, e, n) {
                        e.exports = function() {
                            return function() {}
                        }
                    }
                    , {}],
                    3: [function(t, e, n) {
                        function r() {}
                        e.exports = function(t, e, n) {
                            var i = !1;
                            return n = n || r,
                            o.count = t,
                            0 === t ? e() : o;
                            function o(t, r) {
                                if (o.count <= 0)
                                    throw new Error("after called too many times");
                                --o.count,
                                t ? (i = !0,
                                e(t),
                                e = n) : 0 !== o.count || i || e(null, r)
                            }
                        }
                    }
                    , {}],
                    4: [function(t, e, n) {
                        e.exports = function(t, e, n) {
                            var r = t.byteLength;
                            if (e = e || 0,
                            n = n || r,
                            t.slice)
                                return t.slice(e, n);
                            if (e < 0 && (e += r),
                            n < 0 && (n += r),
                            n > r && (n = r),
                            e >= r || e >= n || 0 === r)
                                return new ArrayBuffer(0);
                            for (var i = new Uint8Array(t), o = new Uint8Array(n - e), a = e, s = 0; a < n; a++,
                            s++)
                                o[s] = i[a];
                            return o.buffer
                        }
                    }
                    , {}],
                    5: [function(t, e, n) {
                        !function(t) {
                            "use strict";
                            n.encode = function(e) {
                                var n, r = new Uint8Array(e), i = r.length, o = "";
                                for (n = 0; n < i; n += 3)
                                    o += t[r[n] >> 2],
                                    o += t[(3 & r[n]) << 4 | r[n + 1] >> 4],
                                    o += t[(15 & r[n + 1]) << 2 | r[n + 2] >> 6],
                                    o += t[63 & r[n + 2]];
                                return i % 3 == 2 ? o = o.substring(0, o.length - 1) + "=" : i % 3 == 1 && (o = o.substring(0, o.length - 2) + "=="),
                                o
                            }
                            ,
                            n.decode = function(e) {
                                var n, r, i, o, a, s = .75 * e.length, l = e.length, c = 0;
                                "=" === e[e.length - 1] && (s--,
                                "=" === e[e.length - 2] && s--);
                                var u = new ArrayBuffer(s)
                                  , h = new Uint8Array(u);
                                for (n = 0; n < l; n += 4)
                                    r = t.indexOf(e[n]),
                                    i = t.indexOf(e[n + 1]),
                                    o = t.indexOf(e[n + 2]),
                                    a = t.indexOf(e[n + 3]),
                                    h[c++] = r << 2 | i >> 4,
                                    h[c++] = (15 & i) << 4 | o >> 2,
                                    h[c++] = (3 & o) << 6 | 63 & a;
                                return u
                            }
                        }("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/")
                    }
                    , {}],
                    6: [function(t, e, n) {
                        (function(t) {
                            var n = t.BlobBuilder || t.WebKitBlobBuilder || t.MSBlobBuilder || t.MozBlobBuilder
                              , r = function() {
                                try {
                                    return 2 === new Blob(["hi"]).size
                                } catch (t) {
                                    return !1
                                }
                            }()
                              , i = r && function() {
                                try {
                                    return 2 === new Blob([new Uint8Array([1, 2])]).size
                                } catch (t) {
                                    return !1
                                }
                            }()
                              , o = n && n.prototype.append && n.prototype.getBlob;
                            function a(t) {
                                for (var e = 0; e < t.length; e++) {
                                    var n = t[e];
                                    if (n.buffer instanceof ArrayBuffer) {
                                        var r = n.buffer;
                                        if (n.byteLength !== r.byteLength) {
                                            var i = new Uint8Array(n.byteLength);
                                            i.set(new Uint8Array(r,n.byteOffset,n.byteLength)),
                                            r = i.buffer
                                        }
                                        t[e] = r
                                    }
                                }
                            }
                            function s(t, e) {
                                e = e || {};
                                var r = new n;
                                a(t);
                                for (var i = 0; i < t.length; i++)
                                    r.append(t[i]);
                                return e.type ? r.getBlob(e.type) : r.getBlob()
                            }
                            function l(t, e) {
                                return a(t),
                                new Blob(t,e || {})
                            }
                            e.exports = r ? i ? t.Blob : l : o ? s : void 0
                        }
                        ).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }
                    , {}],
                    7: [function(t, e, n) {}
                    , {}],
                    8: [function(t, e, n) {
                        function r(t) {
                            if (t)
                                return function(t) {
                                    for (var e in r.prototype)
                                        t[e] = r.prototype[e];
                                    return t
                                }(t)
                        }
                        e.exports = r,
                        r.prototype.on = r.prototype.addEventListener = function(t, e) {
                            return this._callbacks = this._callbacks || {},
                            (this._callbacks[t] = this._callbacks[t] || []).push(e),
                            this
                        }
                        ,
                        r.prototype.once = function(t, e) {
                            var n = this;
                            function r() {
                                n.off(t, r),
                                e.apply(this, arguments)
                            }
                            return this._callbacks = this._callbacks || {},
                            r.fn = e,
                            this.on(t, r),
                            this
                        }
                        ,
                        r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function(t, e) {
                            if (this._callbacks = this._callbacks || {},
                            0 == arguments.length)
                                return this._callbacks = {},
                                this;
                            var n, r = this._callbacks[t];
                            if (!r)
                                return this;
                            if (1 == arguments.length)
                                return delete this._callbacks[t],
                                this;
                            for (var i = 0; i < r.length; i++)
                                if ((n = r[i]) === e || n.fn === e) {
                                    r.splice(i, 1);
                                    break
                                }
                            return this
                        }
                        ,
                        r.prototype.emit = function(t) {
                            this._callbacks = this._callbacks || {};
                            var e = [].slice.call(arguments, 1)
                              , n = this._callbacks[t];
                            if (n)
                                for (var r = 0, i = (n = n.slice(0)).length; r < i; ++r)
                                    n[r].apply(this, e);
                            return this
                        }
                        ,
                        r.prototype.listeners = function(t) {
                            return this._callbacks = this._callbacks || {},
                            this._callbacks[t] || []
                        }
                        ,
                        r.prototype.hasListeners = function(t) {
                            return !!this.listeners(t).length
                        }
                    }
                    , {}],
                    9: [function(t, e, n) {
                        e.exports = function(t, e) {
                            var n = function() {};
                            n.prototype = e.prototype,
                            t.prototype = new n,
                            t.prototype.constructor = t
                        }
                    }
                    , {}],
                    10: [function(t, e, n) {
                        e.exports = t("./lib/")
                    }
                    , {
                        "./lib/": 11
                    }],
                    11: [function(t, e, n) {
                        e.exports = t("./socket"),
                        e.exports.parser = t("engine.io-parser")
                    }
                    , {
                        "./socket": 12,
                        "engine.io-parser": 20
                    }],
                    12: [function(t, e, n) {
                        (function(n) {
                            var r = t("./transports")
                              , i = t("component-emitter")
                              , o = t("debug")("engine.io-client:socket")
                              , a = t("indexof")
                              , s = t("engine.io-parser")
                              , l = t("parseuri")
                              , c = t("parsejson")
                              , u = t("parseqs");
                            function h(t, e) {
                                if (!(this instanceof h))
                                    return new h(t,e);
                                e = e || {},
                                t && "object" == typeof t && (e = t,
                                t = null),
                                t ? (t = l(t),
                                e.hostname = t.host,
                                e.secure = "https" == t.protocol || "wss" == t.protocol,
                                e.port = t.port,
                                t.query && (e.query = t.query)) : e.host && (e.hostname = l(e.host).host),
                                this.secure = null != e.secure ? e.secure : n.location && "https:" == location.protocol,
                                e.hostname && !e.port && (e.port = this.secure ? "443" : "80"),
                                this.agent = e.agent || !1,
                                this.hostname = e.hostname || (n.location ? location.hostname : "localhost"),
                                this.port = e.port || (n.location && location.port ? location.port : this.secure ? 443 : 80),
                                this.query = e.query || {},
                                "string" == typeof this.query && (this.query = u.decode(this.query)),
                                this.upgrade = !1 !== e.upgrade,
                                this.path = (e.path || "/engine.io").replace(/\/$/, "") + "/",
                                this.forceJSONP = !!e.forceJSONP,
                                this.jsonp = !1 !== e.jsonp,
                                this.forceBase64 = !!e.forceBase64,
                                this.enablesXDR = !!e.enablesXDR,
                                this.timestampParam = e.timestampParam || "t",
                                this.timestampRequests = e.timestampRequests,
                                this.transports = e.transports || ["polling", "websocket"],
                                this.readyState = "",
                                this.writeBuffer = [],
                                this.policyPort = e.policyPort || 843,
                                this.rememberUpgrade = e.rememberUpgrade || !1,
                                this.binaryType = null,
                                this.onlyBinaryUpgrades = e.onlyBinaryUpgrades,
                                this.perMessageDeflate = !1 !== e.perMessageDeflate && (e.perMessageDeflate || {}),
                                !0 === this.perMessageDeflate && (this.perMessageDeflate = {}),
                                this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024),
                                this.pfx = e.pfx || null,
                                this.key = e.key || null,
                                this.passphrase = e.passphrase || null,
                                this.cert = e.cert || null,
                                this.ca = e.ca || null,
                                this.ciphers = e.ciphers || null,
                                this.rejectUnauthorized = void 0 === e.rejectUnauthorized || e.rejectUnauthorized;
                                var r = "object" == typeof n && n;
                                r.global === r && e.extraHeaders && Object.keys(e.extraHeaders).length > 0 && (this.extraHeaders = e.extraHeaders),
                                this.open()
                            }
                            e.exports = h,
                            h.priorWebsocketSuccess = !1,
                            i(h.prototype),
                            h.protocol = s.protocol,
                            h.Socket = h,
                            h.Transport = t("./transport"),
                            h.transports = t("./transports"),
                            h.parser = t("engine.io-parser"),
                            h.prototype.createTransport = function(t) {
                                o('creating transport "%s"', t);
                                var e = function(t) {
                                    var e = {};
                                    for (var n in t)
                                        t.hasOwnProperty(n) && (e[n] = t[n]);
                                    return e
                                }(this.query);
                                return e.EIO = s.protocol,
                                e.transport = t,
                                this.id && (e.sid = this.id),
                                new r[t]({
                                    agent: this.agent,
                                    hostname: this.hostname,
                                    port: this.port,
                                    secure: this.secure,
                                    path: this.path,
                                    query: e,
                                    forceJSONP: this.forceJSONP,
                                    jsonp: this.jsonp,
                                    forceBase64: this.forceBase64,
                                    enablesXDR: this.enablesXDR,
                                    timestampRequests: this.timestampRequests,
                                    timestampParam: this.timestampParam,
                                    policyPort: this.policyPort,
                                    socket: this,
                                    pfx: this.pfx,
                                    key: this.key,
                                    passphrase: this.passphrase,
                                    cert: this.cert,
                                    ca: this.ca,
                                    ciphers: this.ciphers,
                                    rejectUnauthorized: this.rejectUnauthorized,
                                    perMessageDeflate: this.perMessageDeflate,
                                    extraHeaders: this.extraHeaders
                                })
                            }
                            ,
                            h.prototype.open = function() {
                                var t;
                                if (this.rememberUpgrade && h.priorWebsocketSuccess && -1 != this.transports.indexOf("websocket"))
                                    t = "websocket";
                                else {
                                    if (0 === this.transports.length) {
                                        var e = this;
                                        return void setTimeout((function() {
                                            e.emit("error", "No transports available")
                                        }
                                        ), 0)
                                    }
                                    t = this.transports[0]
                                }
                                this.readyState = "opening";
                                try {
                                    t = this.createTransport(t)
                                } catch (t) {
                                    return this.transports.shift(),
                                    void this.open()
                                }
                                t.open(),
                                this.setTransport(t)
                            }
                            ,
                            h.prototype.setTransport = function(t) {
                                o("setting transport %s", t.name);
                                var e = this;
                                this.transport && (o("clearing existing transport %s", this.transport.name),
                                this.transport.removeAllListeners()),
                                this.transport = t,
                                t.on("drain", (function() {
                                    e.onDrain()
                                }
                                )).on("packet", (function(t) {
                                    e.onPacket(t)
                                }
                                )).on("error", (function(t) {
                                    e.onError(t)
                                }
                                )).on("close", (function() {
                                    e.onClose("transport close")
                                }
                                ))
                            }
                            ,
                            h.prototype.probe = function(t) {
                                o('probing transport "%s"', t);
                                var e = this.createTransport(t, {
                                    probe: 1
                                })
                                  , n = !1
                                  , r = this;
                                function i() {
                                    if (r.onlyBinaryUpgrades) {
                                        var i = !this.supportsBinary && r.transport.supportsBinary;
                                        n = n || i
                                    }
                                    n || (o('probe transport "%s" opened', t),
                                    e.send([{
                                        type: "ping",
                                        data: "probe"
                                    }]),
                                    e.once("packet", (function(i) {
                                        if (!n)
                                            if ("pong" == i.type && "probe" == i.data) {
                                                if (o('probe transport "%s" pong', t),
                                                r.upgrading = !0,
                                                r.emit("upgrading", e),
                                                !e)
                                                    return;
                                                h.priorWebsocketSuccess = "websocket" == e.name,
                                                o('pausing current transport "%s"', r.transport.name),
                                                r.transport.pause((function() {
                                                    n || "closed" != r.readyState && (o("changing transport and sending upgrade packet"),
                                                    p(),
                                                    r.setTransport(e),
                                                    e.send([{
                                                        type: "upgrade"
                                                    }]),
                                                    r.emit("upgrade", e),
                                                    e = null,
                                                    r.upgrading = !1,
                                                    r.flush())
                                                }
                                                ))
                                            } else {
                                                o('probe transport "%s" failed', t);
                                                var a = new Error("probe error");
                                                a.transport = e.name,
                                                r.emit("upgradeError", a)
                                            }
                                    }
                                    )))
                                }
                                function a() {
                                    n || (n = !0,
                                    p(),
                                    e.close(),
                                    e = null)
                                }
                                function s(n) {
                                    var i = new Error("probe error: " + n);
                                    i.transport = e.name,
                                    a(),
                                    o('probe transport "%s" failed because of error: %s', t, n),
                                    r.emit("upgradeError", i)
                                }
                                function l() {
                                    s("transport closed")
                                }
                                function c() {
                                    s("socket closed")
                                }
                                function u(t) {
                                    e && t.name != e.name && (o('"%s" works - aborting "%s"', t.name, e.name),
                                    a())
                                }
                                function p() {
                                    e.removeListener("open", i),
                                    e.removeListener("error", s),
                                    e.removeListener("close", l),
                                    r.removeListener("close", c),
                                    r.removeListener("upgrading", u)
                                }
                                h.priorWebsocketSuccess = !1,
                                e.once("open", i),
                                e.once("error", s),
                                e.once("close", l),
                                this.once("close", c),
                                this.once("upgrading", u),
                                e.open()
                            }
                            ,
                            h.prototype.onOpen = function() {
                                if (o("socket open"),
                                this.readyState = "open",
                                h.priorWebsocketSuccess = "websocket" == this.transport.name,
                                this.emit("open"),
                                this.flush(),
                                "open" == this.readyState && this.upgrade && this.transport.pause) {
                                    o("starting upgrade probes");
                                    for (var t = 0, e = this.upgrades.length; t < e; t++)
                                        this.probe(this.upgrades[t])
                                }
                            }
                            ,
                            h.prototype.onPacket = function(t) {
                                if ("opening" == this.readyState || "open" == this.readyState)
                                    switch (o('socket receive: type "%s", data "%s"', t.type, t.data),
                                    this.emit("packet", t),
                                    this.emit("heartbeat"),
                                    t.type) {
                                    case "open":
                                        this.onHandshake(c(t.data));
                                        break;
                                    case "pong":
                                        this.setPing(),
                                        this.emit("pong");
                                        break;
                                    case "error":
                                        var e = new Error("server error");
                                        e.code = t.data,
                                        this.onError(e);
                                        break;
                                    case "message":
                                        this.emit("data", t.data),
                                        this.emit("message", t.data)
                                    }
                                else
                                    o('packet received with socket readyState "%s"', this.readyState)
                            }
                            ,
                            h.prototype.onHandshake = function(t) {
                                this.emit("handshake", t),
                                this.id = t.sid,
                                this.transport.query.sid = t.sid,
                                this.upgrades = this.filterUpgrades(t.upgrades),
                                this.pingInterval = t.pingInterval,
                                this.pingTimeout = t.pingTimeout,
                                this.onOpen(),
                                "closed" != this.readyState && (this.setPing(),
                                this.removeListener("heartbeat", this.onHeartbeat),
                                this.on("heartbeat", this.onHeartbeat))
                            }
                            ,
                            h.prototype.onHeartbeat = function(t) {
                                clearTimeout(this.pingTimeoutTimer);
                                var e = this;
                                e.pingTimeoutTimer = setTimeout((function() {
                                    "closed" != e.readyState && e.onClose("ping timeout")
                                }
                                ), t || e.pingInterval + e.pingTimeout)
                            }
                            ,
                            h.prototype.setPing = function() {
                                var t = this;
                                clearTimeout(t.pingIntervalTimer),
                                t.pingIntervalTimer = setTimeout((function() {
                                    o("writing ping packet - expecting pong within %sms", t.pingTimeout),
                                    t.ping(),
                                    t.onHeartbeat(t.pingTimeout)
                                }
                                ), t.pingInterval)
                            }
                            ,
                            h.prototype.ping = function() {
                                var t = this;
                                this.sendPacket("ping", (function() {
                                    t.emit("ping")
                                }
                                ))
                            }
                            ,
                            h.prototype.onDrain = function() {
                                this.writeBuffer.splice(0, this.prevBufferLen),
                                this.prevBufferLen = 0,
                                0 === this.writeBuffer.length ? this.emit("drain") : this.flush()
                            }
                            ,
                            h.prototype.flush = function() {
                                "closed" != this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (o("flushing %d packets in socket", this.writeBuffer.length),
                                this.transport.send(this.writeBuffer),
                                this.prevBufferLen = this.writeBuffer.length,
                                this.emit("flush"))
                            }
                            ,
                            h.prototype.write = h.prototype.send = function(t, e, n) {
                                return this.sendPacket("message", t, e, n),
                                this
                            }
                            ,
                            h.prototype.sendPacket = function(t, e, n, r) {
                                if ("function" == typeof e && (r = e,
                                e = void 0),
                                "function" == typeof n && (r = n,
                                n = null),
                                "closing" != this.readyState && "closed" != this.readyState) {
                                    (n = n || {}).compress = !1 !== n.compress;
                                    var i = {
                                        type: t,
                                        data: e,
                                        options: n
                                    };
                                    this.emit("packetCreate", i),
                                    this.writeBuffer.push(i),
                                    r && this.once("flush", r),
                                    this.flush()
                                }
                            }
                            ,
                            h.prototype.close = function() {
                                if ("opening" == this.readyState || "open" == this.readyState) {
                                    this.readyState = "closing";
                                    var t = this;
                                    this.writeBuffer.length ? this.once("drain", (function() {
                                        this.upgrading ? r() : e()
                                    }
                                    )) : this.upgrading ? r() : e()
                                }
                                function e() {
                                    t.onClose("forced close"),
                                    o("socket closing - telling transport to close"),
                                    t.transport.close()
                                }
                                function n() {
                                    t.removeListener("upgrade", n),
                                    t.removeListener("upgradeError", n),
                                    e()
                                }
                                function r() {
                                    t.once("upgrade", n),
                                    t.once("upgradeError", n)
                                }
                                return this
                            }
                            ,
                            h.prototype.onError = function(t) {
                                o("socket error %j", t),
                                h.priorWebsocketSuccess = !1,
                                this.emit("error", t),
                                this.onClose("transport error", t)
                            }
                            ,
                            h.prototype.onClose = function(t, e) {
                                "opening" != this.readyState && "open" != this.readyState && "closing" != this.readyState || (o('socket close with reason: "%s"', t),
                                clearTimeout(this.pingIntervalTimer),
                                clearTimeout(this.pingTimeoutTimer),
                                this.transport.removeAllListeners("close"),
                                this.transport.close(),
                                this.transport.removeAllListeners(),
                                this.readyState = "closed",
                                this.id = null,
                                this.emit("close", t, e),
                                this.writeBuffer = [],
                                this.prevBufferLen = 0)
                            }
                            ,
                            h.prototype.filterUpgrades = function(t) {
                                for (var e = [], n = 0, r = t.length; n < r; n++)
                                    ~a(this.transports, t[n]) && e.push(t[n]);
                                return e
                            }
                        }
                        ).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }
                    , {
                        "./transport": 13,
                        "./transports": 14,
                        "component-emitter": 8,
                        debug: "n9i2g6",
                        "engine.io-parser": 20,
                        indexof: 24,
                        parsejson: 26,
                        parseqs: 27,
                        parseuri: 28
                    }],
                    13: [function(t, e, n) {
                        var r = t("engine.io-parser")
                          , i = t("component-emitter");
                        function o(t) {
                            this.path = t.path,
                            this.hostname = t.hostname,
                            this.port = t.port,
                            this.secure = t.secure,
                            this.query = t.query,
                            this.timestampParam = t.timestampParam,
                            this.timestampRequests = t.timestampRequests,
                            this.readyState = "",
                            this.agent = t.agent || !1,
                            this.socket = t.socket,
                            this.enablesXDR = t.enablesXDR,
                            this.pfx = t.pfx,
                            this.key = t.key,
                            this.passphrase = t.passphrase,
                            this.cert = t.cert,
                            this.ca = t.ca,
                            this.ciphers = t.ciphers,
                            this.rejectUnauthorized = t.rejectUnauthorized,
                            this.extraHeaders = t.extraHeaders
                        }
                        e.exports = o,
                        i(o.prototype),
                        o.prototype.onError = function(t, e) {
                            var n = new Error(t);
                            return n.type = "TransportError",
                            n.description = e,
                            this.emit("error", n),
                            this
                        }
                        ,
                        o.prototype.open = function() {
                            return "closed" != this.readyState && "" != this.readyState || (this.readyState = "opening",
                            this.doOpen()),
                            this
                        }
                        ,
                        o.prototype.close = function() {
                            return "opening" != this.readyState && "open" != this.readyState || (this.doClose(),
                            this.onClose()),
                            this
                        }
                        ,
                        o.prototype.send = function(t) {
                            if ("open" != this.readyState)
                                throw new Error("Transport not open");
                            this.write(t)
                        }
                        ,
                        o.prototype.onOpen = function() {
                            this.readyState = "open",
                            this.writable = !0,
                            this.emit("open")
                        }
                        ,
                        o.prototype.onData = function(t) {
                            var e = r.decodePacket(t, this.socket.binaryType);
                            this.onPacket(e)
                        }
                        ,
                        o.prototype.onPacket = function(t) {
                            this.emit("packet", t)
                        }
                        ,
                        o.prototype.onClose = function() {
                            this.readyState = "closed",
                            this.emit("close")
                        }
                    }
                    , {
                        "component-emitter": 8,
                        "engine.io-parser": 20
                    }],
                    14: [function(t, e, n) {
                        (function(e) {
                            var r = t("xmlhttprequest-ssl")
                              , i = t("./polling-xhr")
                              , o = t("./polling-jsonp")
                              , a = t("./websocket");
                            n.polling = function(t) {
                                var n = !1
                                  , a = !1
                                  , s = !1 !== t.jsonp;
                                if (e.location) {
                                    var l = "https:" == location.protocol
                                      , c = location.port;
                                    c || (c = l ? 443 : 80),
                                    n = t.hostname != location.hostname || c != t.port,
                                    a = t.secure != l
                                }
                                if (t.xdomain = n,
                                t.xscheme = a,
                                "open"in new r(t) && !t.forceJSONP)
                                    return new i(t);
                                if (!s)
                                    throw new Error("JSONP disabled");
                                return new o(t)
                            }
                            ,
                            n.websocket = a
                        }
                        ).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }
                    , {
                        "./polling-jsonp": 15,
                        "./polling-xhr": 16,
                        "./websocket": 18,
                        "xmlhttprequest-ssl": 19
                    }],
                    15: [function(t, e, n) {
                        (function(n) {
                            var r = t("./polling")
                              , i = t("component-inherit");
                            e.exports = c;
                            var o, a = /\n/g, s = /\\n/g;
                            function l() {}
                            function c(t) {
                                r.call(this, t),
                                this.query = this.query || {},
                                o || (n.___eio || (n.___eio = []),
                                o = n.___eio),
                                this.index = o.length;
                                var e = this;
                                o.push((function(t) {
                                    e.onData(t)
                                }
                                )),
                                this.query.j = this.index,
                                n.document && n.addEventListener && n.addEventListener("beforeunload", (function() {
                                    e.script && (e.script.onerror = l)
                                }
                                ), !1)
                            }
                            i(c, r),
                            c.prototype.supportsBinary = !1,
                            c.prototype.doClose = function() {
                                this.script && (this.script.parentNode.removeChild(this.script),
                                this.script = null),
                                this.form && (this.form.parentNode.removeChild(this.form),
                                this.form = null,
                                this.iframe = null),
                                r.prototype.doClose.call(this)
                            }
                            ,
                            c.prototype.doPoll = function() {
                                var t = this
                                  , e = document.createElement("script");
                                this.script && (this.script.parentNode.removeChild(this.script),
                                this.script = null),
                                e.async = !0,
                                e.src = this.uri(),
                                e.onerror = function(e) {
                                    t.onError("jsonp poll error", e)
                                }
                                ;
                                var n = document.getElementsByTagName("script")[0];
                                n ? n.parentNode.insertBefore(e, n) : (document.head || document.body).appendChild(e),
                                this.script = e,
                                "undefined" != typeof navigator && /gecko/i.test(navigator.userAgent) && setTimeout((function() {
                                    var t = document.createElement("iframe");
                                    document.body.appendChild(t),
                                    document.body.removeChild(t)
                                }
                                ), 100)
                            }
                            ,
                            c.prototype.doWrite = function(t, e) {
                                var n = this;
                                if (!this.form) {
                                    var r, i = document.createElement("form"), o = document.createElement("textarea"), l = this.iframeId = "eio_iframe_" + this.index;
                                    i.className = "socketio",
                                    i.style.position = "absolute",
                                    i.style.top = "-1000px",
                                    i.style.left = "-1000px",
                                    i.target = l,
                                    i.method = "POST",
                                    i.setAttribute("accept-charset", "utf-8"),
                                    o.name = "d",
                                    i.appendChild(o),
                                    document.body.appendChild(i),
                                    this.form = i,
                                    this.area = o
                                }
                                function c() {
                                    u(),
                                    e()
                                }
                                function u() {
                                    if (n.iframe)
                                        try {
                                            n.form.removeChild(n.iframe)
                                        } catch (t) {
                                            n.onError("jsonp polling iframe removal error", t)
                                        }
                                    try {
                                        var t = '<iframe src="javascript:0" name="' + n.iframeId + '">';
                                        r = document.createElement(t)
                                    } catch (t) {
                                        (r = document.createElement("iframe")).name = n.iframeId,
                                        r.src = "javascript:0"
                                    }
                                    r.id = n.iframeId,
                                    n.form.appendChild(r),
                                    n.iframe = r
                                }
                                this.form.action = this.uri(),
                                u(),
                                t = t.replace(s, "\\\n"),
                                this.area.value = t.replace(a, "\\n");
                                try {
                                    this.form.submit()
                                } catch (t) {}
                                this.iframe.attachEvent ? this.iframe.onreadystatechange = function() {
                                    "complete" == n.iframe.readyState && c()
                                }
                                : this.iframe.onload = c
                            }
                        }
                        ).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }
                    , {
                        "./polling": 17,
                        "component-inherit": 9
                    }],
                    16: [function(t, e, n) {
                        (function(n) {
                            var r = t("xmlhttprequest-ssl")
                              , i = t("./polling")
                              , o = t("component-emitter")
                              , a = t("component-inherit")
                              , s = t("debug")("engine.io-client:polling-xhr");
                            function l() {}
                            function c(t) {
                                if (i.call(this, t),
                                n.location) {
                                    var e = "https:" == location.protocol
                                      , r = location.port;
                                    r || (r = e ? 443 : 80),
                                    this.xd = t.hostname != n.location.hostname || r != t.port,
                                    this.xs = t.secure != e
                                } else
                                    this.extraHeaders = t.extraHeaders
                            }
                            function u(t) {
                                this.method = t.method || "GET",
                                this.uri = t.uri,
                                this.xd = !!t.xd,
                                this.xs = !!t.xs,
                                this.async = !1 !== t.async,
                                this.data = null != t.data ? t.data : null,
                                this.agent = t.agent,
                                this.isBinary = t.isBinary,
                                this.supportsBinary = t.supportsBinary,
                                this.enablesXDR = t.enablesXDR,
                                this.pfx = t.pfx,
                                this.key = t.key,
                                this.passphrase = t.passphrase,
                                this.cert = t.cert,
                                this.ca = t.ca,
                                this.ciphers = t.ciphers,
                                this.rejectUnauthorized = t.rejectUnauthorized,
                                this.extraHeaders = t.extraHeaders,
                                this.create()
                            }
                            function h() {
                                for (var t in u.requests)
                                    u.requests.hasOwnProperty(t) && u.requests[t].abort()
                            }
                            e.exports = c,
                            e.exports.Request = u,
                            a(c, i),
                            c.prototype.supportsBinary = !0,
                            c.prototype.request = function(t) {
                                return (t = t || {}).uri = this.uri(),
                                t.xd = this.xd,
                                t.xs = this.xs,
                                t.agent = this.agent || !1,
                                t.supportsBinary = this.supportsBinary,
                                t.enablesXDR = this.enablesXDR,
                                t.pfx = this.pfx,
                                t.key = this.key,
                                t.passphrase = this.passphrase,
                                t.cert = this.cert,
                                t.ca = this.ca,
                                t.ciphers = this.ciphers,
                                t.rejectUnauthorized = this.rejectUnauthorized,
                                t.extraHeaders = this.extraHeaders,
                                new u(t)
                            }
                            ,
                            c.prototype.doWrite = function(t, e) {
                                var n = "string" != typeof t && void 0 !== t
                                  , r = this.request({
                                    method: "POST",
                                    data: t,
                                    isBinary: n
                                })
                                  , i = this;
                                r.on("success", e),
                                r.on("error", (function(t) {
                                    i.onError("xhr post error", t)
                                }
                                )),
                                this.sendXhr = r
                            }
                            ,
                            c.prototype.doPoll = function() {
                                s("xhr poll");
                                var t = this.request()
                                  , e = this;
                                t.on("data", (function(t) {
                                    e.onData(t)
                                }
                                )),
                                t.on("error", (function(t) {
                                    e.onError("xhr poll error", t)
                                }
                                )),
                                this.pollXhr = t
                            }
                            ,
                            o(u.prototype),
                            u.prototype.create = function() {
                                var t = {
                                    agent: this.agent,
                                    xdomain: this.xd,
                                    xscheme: this.xs,
                                    enablesXDR: this.enablesXDR
                                };
                                t.pfx = this.pfx,
                                t.key = this.key,
                                t.passphrase = this.passphrase,
                                t.cert = this.cert,
                                t.ca = this.ca,
                                t.ciphers = this.ciphers,
                                t.rejectUnauthorized = this.rejectUnauthorized;
                                var e = this.xhr = new r(t)
                                  , i = this;
                                try {
                                    s("xhr open %s: %s", this.method, this.uri),
                                    e.open(this.method, this.uri, this.async);
                                    try {
                                        if (this.extraHeaders)
                                            for (var o in e.setDisableHeaderCheck(!0),
                                            this.extraHeaders)
                                                this.extraHeaders.hasOwnProperty(o) && e.setRequestHeader(o, this.extraHeaders[o])
                                    } catch (t) {}
                                    if (this.supportsBinary && (e.responseType = "arraybuffer"),
                                    "POST" == this.method)
                                        try {
                                            this.isBinary ? e.setRequestHeader("Content-type", "application/octet-stream") : e.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                                        } catch (t) {}
                                    "withCredentials"in e && (e.withCredentials = !0),
                                    this.hasXDR() ? (e.onload = function() {
                                        i.onLoad()
                                    }
                                    ,
                                    e.onerror = function() {
                                        i.onError(e.responseText)
                                    }
                                    ) : e.onreadystatechange = function() {
                                        4 == e.readyState && (200 == e.status || 1223 == e.status ? i.onLoad() : setTimeout((function() {
                                            i.onError(e.status)
                                        }
                                        ), 0))
                                    }
                                    ,
                                    s("xhr data %s", this.data),
                                    e.send(this.data)
                                } catch (t) {
                                    return void setTimeout((function() {
                                        i.onError(t)
                                    }
                                    ), 0)
                                }
                                n.document && (this.index = u.requestsCount++,
                                u.requests[this.index] = this)
                            }
                            ,
                            u.prototype.onSuccess = function() {
                                this.emit("success"),
                                this.cleanup()
                            }
                            ,
                            u.prototype.onData = function(t) {
                                this.emit("data", t),
                                this.onSuccess()
                            }
                            ,
                            u.prototype.onError = function(t) {
                                this.emit("error", t),
                                this.cleanup(!0)
                            }
                            ,
                            u.prototype.cleanup = function(t) {
                                if (void 0 !== this.xhr && null !== this.xhr) {
                                    if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = l : this.xhr.onreadystatechange = l,
                                    t)
                                        try {
                                            this.xhr.abort()
                                        } catch (t) {}
                                    n.document && delete u.requests[this.index],
                                    this.xhr = null
                                }
                            }
                            ,
                            u.prototype.onLoad = function() {
                                var t;
                                try {
                                    var e;
                                    try {
                                        e = this.xhr.getResponseHeader("Content-Type").split(";")[0]
                                    } catch (t) {}
                                    if ("application/octet-stream" === e)
                                        t = this.xhr.response;
                                    else if (this.supportsBinary)
                                        try {
                                            t = String.fromCharCode.apply(null, new Uint8Array(this.xhr.response))
                                        } catch (e) {
                                            for (var n = new Uint8Array(this.xhr.response), r = [], i = 0, o = n.length; i < o; i++)
                                                r.push(n[i]);
                                            t = String.fromCharCode.apply(null, r)
                                        }
                                    else
                                        t = this.xhr.responseText
                                } catch (t) {
                                    this.onError(t)
                                }
                                null != t && this.onData(t)
                            }
                            ,
                            u.prototype.hasXDR = function() {
                                return void 0 !== n.XDomainRequest && !this.xs && this.enablesXDR
                            }
                            ,
                            u.prototype.abort = function() {
                                this.cleanup()
                            }
                            ,
                            n.document && (u.requestsCount = 0,
                            u.requests = {},
                            n.attachEvent ? n.attachEvent("onunload", h) : n.addEventListener && n.addEventListener("beforeunload", h, !1))
                        }
                        ).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }
                    , {
                        "./polling": 17,
                        "component-emitter": 8,
                        "component-inherit": 9,
                        debug: "n9i2g6",
                        "xmlhttprequest-ssl": 19
                    }],
                    17: [function(t, e, n) {
                        var r = t("../transport")
                          , i = t("parseqs")
                          , o = t("engine.io-parser")
                          , a = t("component-inherit")
                          , s = t("yeast")
                          , l = t("debug")("engine.io-client:polling");
                        e.exports = u;
                        var c = null != new (t("xmlhttprequest-ssl"))({
                            xdomain: !1
                        }).responseType;
                        function u(t) {
                            var e = t && t.forceBase64;
                            c && !e || (this.supportsBinary = !1),
                            r.call(this, t)
                        }
                        a(u, r),
                        u.prototype.name = "polling",
                        u.prototype.doOpen = function() {
                            this.poll()
                        }
                        ,
                        u.prototype.pause = function(t) {
                            var e = this;
                            function n() {
                                l("paused"),
                                e.readyState = "paused",
                                t()
                            }
                            if (this.readyState = "pausing",
                            this.polling || !this.writable) {
                                var r = 0;
                                this.polling && (l("we are currently polling - waiting to pause"),
                                r++,
                                this.once("pollComplete", (function() {
                                    l("pre-pause polling complete"),
                                    --r || n()
                                }
                                ))),
                                this.writable || (l("we are currently writing - waiting to pause"),
                                r++,
                                this.once("drain", (function() {
                                    l("pre-pause writing complete"),
                                    --r || n()
                                }
                                )))
                            } else
                                n()
                        }
                        ,
                        u.prototype.poll = function() {
                            l("polling"),
                            this.polling = !0,
                            this.doPoll(),
                            this.emit("poll")
                        }
                        ,
                        u.prototype.onData = function(t) {
                            var e = this;
                            l("polling got data %s", t),
                            o.decodePayload(t, this.socket.binaryType, (function(t, n, r) {
                                if ("opening" == e.readyState && e.onOpen(),
                                "close" == t.type)
                                    return e.onClose(),
                                    !1;
                                e.onPacket(t)
                            }
                            )),
                            "closed" != this.readyState && (this.polling = !1,
                            this.emit("pollComplete"),
                            "open" == this.readyState ? this.poll() : l('ignoring poll - transport state "%s"', this.readyState))
                        }
                        ,
                        u.prototype.doClose = function() {
                            var t = this;
                            function e() {
                                l("writing close packet"),
                                t.write([{
                                    type: "close"
                                }])
                            }
                            "open" == this.readyState ? (l("transport open - closing"),
                            e()) : (l("transport not open - deferring close"),
                            this.once("open", e))
                        }
                        ,
                        u.prototype.write = function(t) {
                            var e = this;
                            this.writable = !1;
                            var n = function() {
                                e.writable = !0,
                                e.emit("drain")
                            };
                            e = this,
                            o.encodePayload(t, this.supportsBinary, (function(t) {
                                e.doWrite(t, n)
                            }
                            ))
                        }
                        ,
                        u.prototype.uri = function() {
                            var t = this.query || {}
                              , e = this.secure ? "https" : "http"
                              , n = "";
                            return !1 !== this.timestampRequests && (t[this.timestampParam] = s()),
                            this.supportsBinary || t.sid || (t.b64 = 1),
                            t = i.encode(t),
                            this.port && ("https" == e && 443 != this.port || "http" == e && 80 != this.port) && (n = ":" + this.port),
                            t.length && (t = "?" + t),
                            e + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + n + this.path + t
                        }
                    }
                    , {
                        "../transport": 13,
                        "component-inherit": 9,
                        debug: "n9i2g6",
                        "engine.io-parser": 20,
                        parseqs: 27,
                        "xmlhttprequest-ssl": 19,
                        yeast: 30
                    }],
                    18: [function(t, e, n) {
                        (function(n) {
                            var r = t("../transport")
                              , i = t("engine.io-parser")
                              , o = t("parseqs")
                              , a = t("component-inherit")
                              , s = t("yeast")
                              , l = t("debug")("engine.io-client:websocket")
                              , c = n.WebSocket || n.MozWebSocket
                              , u = c;
                            if (!u && "undefined" == typeof window)
                                try {
                                    u = t("ws")
                                } catch (t) {}
                            function h(t) {
                                t && t.forceBase64 && (this.supportsBinary = !1),
                                this.perMessageDeflate = t.perMessageDeflate,
                                r.call(this, t)
                            }
                            e.exports = h,
                            a(h, r),
                            h.prototype.name = "websocket",
                            h.prototype.supportsBinary = !0,
                            h.prototype.doOpen = function() {
                                if (this.check()) {
                                    var t = this.uri()
                                      , e = {
                                        agent: this.agent,
                                        perMessageDeflate: this.perMessageDeflate
                                    };
                                    e.pfx = this.pfx,
                                    e.key = this.key,
                                    e.passphrase = this.passphrase,
                                    e.cert = this.cert,
                                    e.ca = this.ca,
                                    e.ciphers = this.ciphers,
                                    e.rejectUnauthorized = this.rejectUnauthorized,
                                    this.extraHeaders && (e.headers = this.extraHeaders),
                                    this.ws = c ? new u(t) : new u(t,void 0,e),
                                    void 0 === this.ws.binaryType && (this.supportsBinary = !1),
                                    this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0,
                                    this.ws.binaryType = "buffer") : this.ws.binaryType = "arraybuffer",
                                    this.addEventListeners()
                                }
                            }
                            ,
                            h.prototype.addEventListeners = function() {
                                var t = this;
                                this.ws.onopen = function() {
                                    t.onOpen()
                                }
                                ,
                                this.ws.onclose = function() {
                                    t.onClose()
                                }
                                ,
                                this.ws.onmessage = function(e) {
                                    t.onData(e.data)
                                }
                                ,
                                this.ws.onerror = function(e) {
                                    t.onError("websocket error", e)
                                }
                            }
                            ,
                            "undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent) && (h.prototype.onData = function(t) {
                                var e = this;
                                setTimeout((function() {
                                    r.prototype.onData.call(e, t)
                                }
                                ), 0)
                            }
                            ),
                            h.prototype.write = function(t) {
                                var e = this;
                                this.writable = !1;
                                for (var r = t.length, o = 0, a = r; o < a; o++)
                                    !function(t) {
                                        i.encodePacket(t, e.supportsBinary, (function(i) {
                                            if (!c) {
                                                var o = {};
                                                t.options && (o.compress = t.options.compress),
                                                e.perMessageDeflate && ("string" == typeof i ? n.Buffer.byteLength(i) : i.length) < e.perMessageDeflate.threshold && (o.compress = !1)
                                            }
                                            try {
                                                c ? e.ws.send(i) : e.ws.send(i, o)
                                            } catch (t) {
                                                l("websocket closed before onclose event")
                                            }
                                            --r || (e.emit("flush"),
                                            setTimeout((function() {
                                                e.writable = !0,
                                                e.emit("drain")
                                            }
                                            ), 0))
                                        }
                                        ))
                                    }(t[o])
                            }
                            ,
                            h.prototype.onClose = function() {
                                r.prototype.onClose.call(this)
                            }
                            ,
                            h.prototype.doClose = function() {
                                void 0 !== this.ws && this.ws.close()
                            }
                            ,
                            h.prototype.uri = function() {
                                var t = this.query || {}
                                  , e = this.secure ? "wss" : "ws"
                                  , n = "";
                                return this.port && ("wss" == e && 443 != this.port || "ws" == e && 80 != this.port) && (n = ":" + this.port),
                                this.timestampRequests && (t[this.timestampParam] = s()),
                                this.supportsBinary || (t.b64 = 1),
                                (t = o.encode(t)).length && (t = "?" + t),
                                e + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + n + this.path + t
                            }
                            ,
                            h.prototype.check = function() {
                                return !(!u || "__initialize"in u && this.name === h.prototype.name)
                            }
                        }
                        ).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }
                    , {
                        "../transport": 13,
                        "component-inherit": 9,
                        debug: "n9i2g6",
                        "engine.io-parser": 20,
                        parseqs: 27,
                        ws: 7,
                        yeast: 30
                    }],
                    19: [function(t, e, n) {
                        var r = t("has-cors");
                        e.exports = function(t) {
                            var e = t.xdomain
                              , n = t.xscheme
                              , i = t.enablesXDR;
                            try {
                                if ("undefined" != typeof XMLHttpRequest && (!e || r))
                                    return new XMLHttpRequest
                            } catch (t) {}
                            try {
                                if ("undefined" != typeof XDomainRequest && !n && i)
                                    return new XDomainRequest
                            } catch (t) {}
                            if (!e)
                                try {
                                    return new ActiveXObject("Microsoft.XMLHTTP")
                                } catch (t) {}
                        }
                    }
                    , {
                        "has-cors": 23
                    }],
                    20: [function(t, e, n) {
                        (function(e) {
                            var r = t("./keys")
                              , i = t("has-binary")
                              , o = t("arraybuffer.slice")
                              , a = t("base64-arraybuffer")
                              , s = t("after")
                              , l = t("utf8")
                              , c = navigator.userAgent.match(/Android/i)
                              , u = /PhantomJS/i.test(navigator.userAgent)
                              , h = c || u;
                            n.protocol = 3;
                            var p = n.packets = {
                                open: 0,
                                close: 1,
                                ping: 2,
                                pong: 3,
                                message: 4,
                                upgrade: 5,
                                noop: 6
                            }
                              , f = r(p)
                              , d = {
                                type: "error",
                                data: "parser error"
                            }
                              , g = t("blob");
                            function m(t, e) {
                                return e("b" + n.packets[t.type] + t.data.data)
                            }
                            function _(t, e, r) {
                                if (!e)
                                    return n.encodeBase64Packet(t, r);
                                var i = t.data
                                  , o = new Uint8Array(i)
                                  , a = new Uint8Array(1 + i.byteLength);
                                a[0] = p[t.type];
                                for (var s = 0; s < o.length; s++)
                                    a[s + 1] = o[s];
                                return r(a.buffer)
                            }
                            function y(t, e, r) {
                                if (!e)
                                    return n.encodeBase64Packet(t, r);
                                if (h)
                                    return function(t, e, r) {
                                        if (!e)
                                            return n.encodeBase64Packet(t, r);
                                        var i = new FileReader;
                                        return i.onload = function() {
                                            t.data = i.result,
                                            n.encodePacket(t, e, !0, r)
                                        }
                                        ,
                                        i.readAsArrayBuffer(t.data)
                                    }(t, e, r);
                                var i = new Uint8Array(1);
                                return i[0] = p[t.type],
                                r(new g([i.buffer, t.data]))
                            }
                            function v(t, e, n) {
                                for (var r = new Array(t.length), i = s(t.length, n), o = function(t, n, i) {
                                    e(n, (function(e, n) {
                                        r[t] = n,
                                        i(e, r)
                                    }
                                    ))
                                }, a = 0; a < t.length; a++)
                                    o(a, t[a], i)
                            }
                            n.encodePacket = function(t, n, r, i) {
                                "function" == typeof n && (i = n,
                                n = !1),
                                "function" == typeof r && (i = r,
                                r = null);
                                var o = void 0 === t.data ? void 0 : t.data.buffer || t.data;
                                if (e.ArrayBuffer && o instanceof ArrayBuffer)
                                    return _(t, n, i);
                                if (g && o instanceof e.Blob)
                                    return y(t, n, i);
                                if (o && o.base64)
                                    return m(t, i);
                                var a = p[t.type];
                                return void 0 !== t.data && (a += r ? l.encode(String(t.data)) : String(t.data)),
                                i("" + a)
                            }
                            ,
                            n.encodeBase64Packet = function(t, r) {
                                var i, o = "b" + n.packets[t.type];
                                if (g && t.data instanceof e.Blob) {
                                    var a = new FileReader;
                                    return a.onload = function() {
                                        var t = a.result.split(",")[1];
                                        r(o + t)
                                    }
                                    ,
                                    a.readAsDataURL(t.data)
                                }
                                try {
                                    i = String.fromCharCode.apply(null, new Uint8Array(t.data))
                                } catch (e) {
                                    for (var s = new Uint8Array(t.data), l = new Array(s.length), c = 0; c < s.length; c++)
                                        l[c] = s[c];
                                    i = String.fromCharCode.apply(null, l)
                                }
                                return o += e.btoa(i),
                                r(o)
                            }
                            ,
                            n.decodePacket = function(t, e, r) {
                                if ("string" == typeof t || void 0 === t) {
                                    if ("b" == t.charAt(0))
                                        return n.decodeBase64Packet(t.substr(1), e);
                                    if (r)
                                        try {
                                            t = l.decode(t)
                                        } catch (t) {
                                            return d
                                        }
                                    var i = t.charAt(0);
                                    return Number(i) == i && f[i] ? t.length > 1 ? {
                                        type: f[i],
                                        data: t.substring(1)
                                    } : {
                                        type: f[i]
                                    } : d
                                }
                                var a = (i = new Uint8Array(t)[0],
                                o(t, 1));
                                return g && "blob" === e && (a = new g([a])),
                                {
                                    type: f[i],
                                    data: a
                                }
                            }
                            ,
                            n.decodeBase64Packet = function(t, n) {
                                var r = f[t.charAt(0)];
                                if (!e.ArrayBuffer)
                                    return {
                                        type: r,
                                        data: {
                                            base64: !0,
                                            data: t.substr(1)
                                        }
                                    };
                                var i = a.decode(t.substr(1));
                                return "blob" === n && g && (i = new g([i])),
                                {
                                    type: r,
                                    data: i
                                }
                            }
                            ,
                            n.encodePayload = function(t, e, r) {
                                "function" == typeof e && (r = e,
                                e = null);
                                var o = i(t);
                                return e && o ? g && !h ? n.encodePayloadAsBlob(t, r) : n.encodePayloadAsArrayBuffer(t, r) : t.length ? void v(t, (function(t, r) {
                                    n.encodePacket(t, !!o && e, !0, (function(t) {
                                        r(null, function(t) {
                                            return t.length + ":" + t
                                        }(t))
                                    }
                                    ))
                                }
                                ), (function(t, e) {
                                    return r(e.join(""))
                                }
                                )) : r("0:")
                            }
                            ,
                            n.decodePayload = function(t, e, r) {
                                if ("string" != typeof t)
                                    return n.decodePayloadAsBinary(t, e, r);
                                var i;
                                if ("function" == typeof e && (r = e,
                                e = null),
                                "" == t)
                                    return r(d, 0, 1);
                                for (var o, a, s = "", l = 0, c = t.length; l < c; l++) {
                                    var u = t.charAt(l);
                                    if (":" != u)
                                        s += u;
                                    else {
                                        if ("" == s || s != (o = Number(s)))
                                            return r(d, 0, 1);
                                        if (s != (a = t.substr(l + 1, o)).length)
                                            return r(d, 0, 1);
                                        if (a.length) {
                                            if (i = n.decodePacket(a, e, !0),
                                            d.type == i.type && d.data == i.data)
                                                return r(d, 0, 1);
                                            if (!1 === r(i, l + o, c))
                                                return
                                        }
                                        l += o,
                                        s = ""
                                    }
                                }
                                return "" != s ? r(d, 0, 1) : void 0
                            }
                            ,
                            n.encodePayloadAsArrayBuffer = function(t, e) {
                                if (!t.length)
                                    return e(new ArrayBuffer(0));
                                v(t, (function(t, e) {
                                    n.encodePacket(t, !0, !0, (function(t) {
                                        return e(null, t)
                                    }
                                    ))
                                }
                                ), (function(t, n) {
                                    var r = n.reduce((function(t, e) {
                                        var n;
                                        return t + (n = "string" == typeof e ? e.length : e.byteLength).toString().length + n + 2
                                    }
                                    ), 0)
                                      , i = new Uint8Array(r)
                                      , o = 0;
                                    return n.forEach((function(t) {
                                        var e = "string" == typeof t
                                          , n = t;
                                        if (e) {
                                            for (var r = new Uint8Array(t.length), a = 0; a < t.length; a++)
                                                r[a] = t.charCodeAt(a);
                                            n = r.buffer
                                        }
                                        i[o++] = e ? 0 : 1;
                                        var s = n.byteLength.toString();
                                        for (a = 0; a < s.length; a++)
                                            i[o++] = parseInt(s[a]);
                                        for (i[o++] = 255,
                                        r = new Uint8Array(n),
                                        a = 0; a < r.length; a++)
                                            i[o++] = r[a]
                                    }
                                    )),
                                    e(i.buffer)
                                }
                                ))
                            }
                            ,
                            n.encodePayloadAsBlob = function(t, e) {
                                v(t, (function(t, e) {
                                    n.encodePacket(t, !0, !0, (function(t) {
                                        var n = new Uint8Array(1);
                                        if (n[0] = 1,
                                        "string" == typeof t) {
                                            for (var r = new Uint8Array(t.length), i = 0; i < t.length; i++)
                                                r[i] = t.charCodeAt(i);
                                            t = r.buffer,
                                            n[0] = 0
                                        }
                                        var o = (t instanceof ArrayBuffer ? t.byteLength : t.size).toString()
                                          , a = new Uint8Array(o.length + 1);
                                        for (i = 0; i < o.length; i++)
                                            a[i] = parseInt(o[i]);
                                        if (a[o.length] = 255,
                                        g) {
                                            var s = new g([n.buffer, a.buffer, t]);
                                            e(null, s)
                                        }
                                    }
                                    ))
                                }
                                ), (function(t, n) {
                                    return e(new g(n))
                                }
                                ))
                            }
                            ,
                            n.decodePayloadAsBinary = function(t, e, r) {
                                "function" == typeof e && (r = e,
                                e = null);
                                for (var i = t, a = [], s = !1; i.byteLength > 0; ) {
                                    for (var l = new Uint8Array(i), c = 0 === l[0], u = "", h = 1; 255 != l[h]; h++) {
                                        if (u.length > 310) {
                                            s = !0;
                                            break
                                        }
                                        u += l[h]
                                    }
                                    if (s)
                                        return r(d, 0, 1);
                                    i = o(i, 2 + u.length),
                                    u = parseInt(u);
                                    var p = o(i, 0, u);
                                    if (c)
                                        try {
                                            p = String.fromCharCode.apply(null, new Uint8Array(p))
                                        } catch (t) {
                                            var f = new Uint8Array(p);
                                            for (p = "",
                                            h = 0; h < f.length; h++)
                                                p += String.fromCharCode(f[h])
                                        }
                                    a.push(p),
                                    i = o(i, u)
                                }
                                var g = a.length;
                                a.forEach((function(t, i) {
                                    r(n.decodePacket(t, e, !0), i, g)
                                }
                                ))
                            }
                        }
                        ).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }
                    , {
                        "./keys": 21,
                        after: 3,
                        "arraybuffer.slice": 4,
                        "base64-arraybuffer": 5,
                        blob: 6,
                        "has-binary": 22,
                        utf8: 29
                    }],
                    21: [function(t, e, n) {
                        e.exports = Object.keys || function(t) {
                            var e = []
                              , n = Object.prototype.hasOwnProperty;
                            for (var r in t)
                                n.call(t, r) && e.push(r);
                            return e
                        }
                    }
                    , {}],
                    22: [function(t, e, n) {
                        (function(n) {
                            var r = t("isarray");
                            e.exports = function(t) {
                                return function t(e) {
                                    if (!e)
                                        return !1;
                                    if (n.Buffer && n.Buffer.isBuffer(e) || n.ArrayBuffer && e instanceof ArrayBuffer || n.Blob && e instanceof Blob || n.File && e instanceof File)
                                        return !0;
                                    if (r(e)) {
                                        for (var i = 0; i < e.length; i++)
                                            if (t(e[i]))
                                                return !0
                                    } else if (e && "object" == typeof e)
                                        for (var o in e.toJSON && (e = e.toJSON()),
                                        e)
                                            if (Object.prototype.hasOwnProperty.call(e, o) && t(e[o]))
                                                return !0;
                                    return !1
                                }(t)
                            }
                        }
                        ).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }
                    , {
                        isarray: 25
                    }],
                    23: [function(t, e, n) {
                        try {
                            e.exports = "undefined" != typeof XMLHttpRequest && "withCredentials"in new XMLHttpRequest
                        } catch (t) {
                            e.exports = !1
                        }
                    }
                    , {}],
                    24: [function(t, e, n) {
                        var r = [].indexOf;
                        e.exports = function(t, e) {
                            if (r)
                                return t.indexOf(e);
                            for (var n = 0; n < t.length; ++n)
                                if (t[n] === e)
                                    return n;
                            return -1
                        }
                    }
                    , {}],
                    25: [function(t, e, n) {
                        e.exports = Array.isArray || function(t) {
                            return "[object Array]" == Object.prototype.toString.call(t)
                        }
                    }
                    , {}],
                    26: [function(t, e, n) {
                        (function(t) {
                            var n = /^[\],:{}\s]*$/
                              , r = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g
                              , i = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g
                              , o = /(?:^|:|,)(?:\s*\[)+/g
                              , a = /^\s+/
                              , s = /\s+$/;
                            e.exports = function(e) {
                                return "string" == typeof e && e ? (e = e.replace(a, "").replace(s, ""),
                                t.JSON && JSON.parse ? JSON.parse(e) : n.test(e.replace(r, "@").replace(i, "]").replace(o, "")) ? new Function("return " + e)() : void 0) : null
                            }
                        }
                        ).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }
                    , {}],
                    27: [function(t, e, n) {
                        n.encode = function(t) {
                            var e = "";
                            for (var n in t)
                                t.hasOwnProperty(n) && (e.length && (e += "&"),
                                e += encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
                            return e
                        }
                        ,
                        n.decode = function(t) {
                            for (var e = {}, n = t.split("&"), r = 0, i = n.length; r < i; r++) {
                                var o = n[r].split("=");
                                e[decodeURIComponent(o[0])] = decodeURIComponent(o[1])
                            }
                            return e
                        }
                    }
                    , {}],
                    28: [function(t, e, n) {
                        var r = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
                          , i = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
                        e.exports = function(t) {
                            var e = t
                              , n = t.indexOf("[")
                              , o = t.indexOf("]");
                            -1 != n && -1 != o && (t = t.substring(0, n) + t.substring(n, o).replace(/:/g, ";") + t.substring(o, t.length));
                            for (var a = r.exec(t || ""), s = {}, l = 14; l--; )
                                s[i[l]] = a[l] || "";
                            return -1 != n && -1 != o && (s.source = e,
                            s.host = s.host.substring(1, s.host.length - 1).replace(/;/g, ":"),
                            s.authority = s.authority.replace("[", "").replace("]", "").replace(/;/g, ":"),
                            s.ipv6uri = !0),
                            s
                        }
                    }
                    , {}],
                    29: [function(t, e, n) {
                        (function(t) {
                            !function(r) {
                                var i = "object" == typeof n && n
                                  , o = "object" == typeof e && e && e.exports == i && e
                                  , a = "object" == typeof t && t;
                                a.global !== a && a.window !== a || (r = a);
                                var s, l, c, u = String.fromCharCode;
                                function h(t) {
                                    for (var e, n, r = [], i = 0, o = t.length; i < o; )
                                        (e = t.charCodeAt(i++)) >= 55296 && e <= 56319 && i < o ? 56320 == (64512 & (n = t.charCodeAt(i++))) ? r.push(((1023 & e) << 10) + (1023 & n) + 65536) : (r.push(e),
                                        i--) : r.push(e);
                                    return r
                                }
                                function p(t) {
                                    if (t >= 55296 && t <= 57343)
                                        throw Error("Lone surrogate U+" + t.toString(16).toUpperCase() + " is not a scalar value")
                                }
                                function f(t, e) {
                                    return u(t >> e & 63 | 128)
                                }
                                function d(t) {
                                    if (0 == (4294967168 & t))
                                        return u(t);
                                    var e = "";
                                    return 0 == (4294965248 & t) ? e = u(t >> 6 & 31 | 192) : 0 == (4294901760 & t) ? (p(t),
                                    e = u(t >> 12 & 15 | 224),
                                    e += f(t, 6)) : 0 == (4292870144 & t) && (e = u(t >> 18 & 7 | 240),
                                    e += f(t, 12),
                                    e += f(t, 6)),
                                    e += u(63 & t | 128)
                                }
                                function g() {
                                    if (c >= l)
                                        throw Error("Invalid byte index");
                                    var t = 255 & s[c];
                                    if (c++,
                                    128 == (192 & t))
                                        return 63 & t;
                                    throw Error("Invalid continuation byte")
                                }
                                function m() {
                                    var t, e;
                                    if (c > l)
                                        throw Error("Invalid byte index");
                                    if (c == l)
                                        return !1;
                                    if (t = 255 & s[c],
                                    c++,
                                    0 == (128 & t))
                                        return t;
                                    if (192 == (224 & t)) {
                                        var n = g();
                                        if ((e = (31 & t) << 6 | n) >= 128)
                                            return e;
                                        throw Error("Invalid continuation byte")
                                    }
                                    if (224 == (240 & t)) {
                                        if ((e = (15 & t) << 12 | (n = g()) << 6 | g()) >= 2048)
                                            return p(e),
                                            e;
                                        throw Error("Invalid continuation byte")
                                    }
                                    if (240 == (248 & t) && (e = (15 & t) << 18 | (n = g()) << 12 | g() << 6 | g()) >= 65536 && e <= 1114111)
                                        return e;
                                    throw Error("Invalid UTF-8 detected")
                                }
                                var _ = {
                                    version: "2.0.0",
                                    encode: function(t) {
                                        for (var e = h(t), n = e.length, r = -1, i = ""; ++r < n; )
                                            i += d(e[r]);
                                        return i
                                    },
                                    decode: function(t) {
                                        s = h(t),
                                        l = s.length,
                                        c = 0;
                                        for (var e, n = []; !1 !== (e = m()); )
                                            n.push(e);
                                        return function(t) {
                                            for (var e, n = t.length, r = -1, i = ""; ++r < n; )
                                                (e = t[r]) > 65535 && (i += u((e -= 65536) >>> 10 & 1023 | 55296),
                                                e = 56320 | 1023 & e),
                                                i += u(e);
                                            return i
                                        }(n)
                                    }
                                };
                                if (i && !i.nodeType)
                                    if (o)
                                        o.exports = _;
                                    else {
                                        var y = {}.hasOwnProperty;
                                        for (var v in _)
                                            y.call(_, v) && (i[v] = _[v])
                                    }
                                else
                                    r.utf8 = _
                            }(this)
                        }
                        ).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }
                    , {}],
                    30: [function(t, e, n) {
                        "use strict";
                        var r, i = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), o = {}, a = 0, s = 0;
                        function l(t) {
                            var e = "";
                            do {
                                e = i[t % 64] + e,
                                t = Math.floor(t / 64)
                            } while (t > 0);
                            return e
                        }
                        function c() {
                            var t = l(+new Date);
                            return t !== r ? (a = 0,
                            r = t) : t + "." + l(a++)
                        }
                        for (; s < 64; s++)
                            o[i[s]] = s;
                        c.encode = l,
                        c.decode = function(t) {
                            var e = 0;
                            for (s = 0; s < t.length; s++)
                                e = 64 * e + o[t.charAt(s)];
                            return e
                        }
                        ,
                        e.exports = c
                    }
                    , {}]
                }, {}, [10])(10)
            }
            )),
            function(t) {
                "function" != typeof Array.isArray && (Array.isArray = function(t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                }
                ),
                Array.prototype.indexOf || (Array.prototype.indexOf = function(t) {
                    for (var e = 0, n = this.length; e < n; e++)
                        if (this[e] === t)
                            return e;
                    return -1
                }
                );
                var e = t.EventEmitter = function() {}
                  , n = Array.isArray;
                e.prototype.emit = function(t) {
                    var e;
                    if ("error" === t && (!this._events || !this._events.error || n(this._events.error) && !this._events.error.length))
                        throw arguments[1]instanceof Error ? arguments[1] : new Error("Uncaught, unspecified 'error' event.");
                    if (!this._events)
                        return !1;
                    var r = this._events[t];
                    if (!r)
                        return !1;
                    if ("function" == typeof r) {
                        switch (arguments.length) {
                        case 1:
                            r.call(this);
                            break;
                        case 2:
                            r.call(this, arguments[1]);
                            break;
                        case 3:
                            r.call(this, arguments[1], arguments[2]);
                            break;
                        default:
                            e = Array.prototype.slice.call(arguments, 1),
                            r.apply(this, e)
                        }
                        return !0
                    }
                    if (n(r)) {
                        e = Array.prototype.slice.call(arguments, 1);
                        for (var i = r.slice(), o = 0, a = i.length; o < a; o++)
                            i[o].apply(this, e);
                        return !0
                    }
                    return !1
                }
                ,
                e.prototype.addListener = function(t, e) {
                    if ("function" != typeof e)
                        throw new Error("addListener only takes instances of Function");
                    return this._events || (this._events = {}),
                    this._events[t] ? n(this._events[t]) ? this._events[t].push(e) : this._events[t] = [this._events[t], e] : this._events[t] = e,
                    this
                }
                ,
                e.prototype.on = e.prototype.addListener,
                e.prototype.once = function(t, e) {
                    var n = this;
                    n.on(t, (function r() {
                        n.removeListener(t, r),
                        e.apply(this, arguments)
                    }
                    ))
                }
                ,
                e.prototype.removeListener = function(t, e) {
                    if ("function" != typeof e)
                        throw new Error("removeListener only takes instances of Function");
                    if (!this._events || !this._events[t])
                        return this;
                    var r = this._events[t];
                    if (n(r)) {
                        var i = r.indexOf(e);
                        if (i < 0)
                            return this;
                        r.splice(i, 1),
                        0 === r.length && delete this._events[t]
                    } else
                        this._events[t] === e && delete this._events[t];
                    return this
                }
                ,
                e.prototype.removeAllListeners = function(t) {
                    return t ? t && this._events && this._events[t] && (this._events[t] = null) : this._events = {},
                    this
                }
                ,
                e.prototype.listeners = function(t) {
                    return this._events || (this._events = {}),
                    this._events[t] || (this._events[t] = []),
                    n(this._events[t]) || (this._events[t] = [this._events[t]]),
                    this._events[t]
                }
            }(window),
            function(t) {
                var e, n = "opening", r = "open", i = "closing", o = "closed";
                function a(e, r) {
                    if (!r.engineIo)
                        throw new Error("You must specify engineIo");
                    if (r.timestampRequests = !0,
                    r.timestampParam = "__t",
                    this.__callbackIndex = 0,
                    this.__callbacks = {},
                    this.state = n,
                    this.socket = new r.engineIo(e,r),
                    this.debug = !1,
                    document.getElementById("tawk__dmz")) {
                        var i = this;
                        t.getSocketTransport = function() {
                            if (i.socket.transport)
                                return i.socket.transport.name
                        }
                    }
                    document.location && "#!tawk-debug" === document.location.hash && (this.debug = !0),
                    EventEmitter.call(this),
                    this.attachListeners()
                }
                for (e in EventEmitter.prototype)
                    "function" == typeof EventEmitter.prototype[e] && Object.prototype.hasOwnProperty.call(EventEmitter.prototype, e) && (a.prototype[e] = EventEmitter.prototype[e]);
                a.prototype.attachListeners = function() {
                    var t = this;
                    this.socket.on("open", (function() {
                        t.state = r,
                        t.emit("connect")
                    }
                    )),
                    this.socket.on("close", (function(e, n) {
                        t.emit("disconnect", e, n),
                        t.doClose()
                    }
                    )),
                    this.socket.on("error", (function(e) {
                        t.emit("error", e)
                    }
                    )),
                    this.socket.on("message", (function(e) {
                        t.onMessage(e)
                    }
                    ))
                }
                ,
                a.prototype.close = a.prototype.disconnect = function() {
                    var t = this;
                    this.state === n && setTimeout((function() {
                        t.close()
                    }
                    ), 1e3),
                    this.state === r && (this.state = i,
                    this.clearCallbacks(),
                    this.socket.close())
                }
                ,
                a.prototype.doClose = function() {
                    this.clearCallbacks(),
                    this.state = o,
                    this.socket.removeAllListeners(),
                    this.removeAllListeners(),
                    this.socket = null
                }
                ,
                a.prototype.clearCallbacks = function() {
                    this.__callbacks = {}
                }
                ,
                a.prototype.onMessage = function(t) {
                    var e = this.decode(t);
                    e && ("__callback__" === e.c ? this.executeCallback(e) : this.emit.apply(this, [e.c].concat(e.p)))
                }
                ,
                a.prototype.executeCallback = function(t) {
                    var e = this.__callbacks[t.cb];
                    delete this.__callbacks[t.cb],
                    e.apply(null, t.p)
                }
                ,
                a.prototype.decode = function(t) {
                    var e, n;
                    this.debug && console && console.log && (data = new Date,
                    console.log("received " + data.toUTCString() + " : " + t));
                    try {
                        e = JSON.parse(t)
                    } catch (t) {
                        return void this.emit("error", t)
                    }
                    if (e.c)
                        if ("error" !== e.c && "connect" !== e.c && "disconnect" !== e.c)
                            if (e.p && "[object Array]" !== Object.prototype.toString.call(e.p))
                                this.emit("error", new Error("data is expected to be an array"));
                            else {
                                if ("__callback__" !== e.c)
                                    return e;
                                if (n = parseInt(e.cb, 10),
                                isNaN(n))
                                    this.emit("error", new Error("received callback command but there was no valid callback id(`" + n + "`"));
                                else {
                                    if (this.__callbacks[n])
                                        return e.cb = n,
                                        e;
                                    this.emit("error", new Error("received callback command but callback isnt present (`" + e.cb + "`)"))
                                }
                            }
                        else
                            this.emit("error", new Error("server returned reserved command : `" + e.cmd + "`"));
                    else
                        this.emit("error", new Error("no command was sent by the server"))
                }
                ,
                a.prototype.send = function() {
                    var t = this.encode(arguments);
                    this.debug && console && console.log && (data = new Date,
                    console.log("send " + data.toUTCString() + " : " + t)),
                    this.state === r ? t && this.socket.send(t) : this.emit("error", new Error("Socket isnt open its state is `" + this.state + "` tried to send `" + t + "`"))
                }
                ,
                a.prototype.encode = function(t) {
                    var e = {};
                    if ((t = Array.prototype.slice.call(t))[0]) {
                        var n;
                        e.c = t[0],
                        "function" == typeof t[t.length - 1] && (e.cb = this.enqueuCallback(t.pop())),
                        e.p = t.slice(1);
                        try {
                            n = JSON.stringify(e)
                        } catch (t) {
                            return void this.emit("error", t)
                        }
                        return n
                    }
                    this.emit("error", new Error("now command specified"))
                }
                ,
                a.prototype.enqueuCallback = function(t) {
                    return this.__callbacks[this.__callbackIndex] = t,
                    this.__callbackIndex++
                }
                ,
                t.$__TawkSocket = a
            }(window)
        }
        ).call(this, n("c8ba"))
    },
    cc98: function(t, e, n) {
        "use strict";
        var r = n("23e7")
          , i = n("c430")
          , o = n("4738").CONSTRUCTOR
          , a = n("d256")
          , s = n("d066")
          , l = n("1626")
          , c = n("cb2d")
          , u = a && a.prototype;
        if (r({
            target: "Promise",
            proto: !0,
            forced: o,
            real: !0
        }, {
            catch: function(t) {
                return this.then(void 0, t)
            }
        }),
        !i && l(a)) {
            var h = s("Promise").prototype.catch;
            u.catch !== h && c(u, "catch", h, {
                unsafe: !0
            })
        }
    },
    cca6: function(t, e, n) {
        "use strict";
        var r = n("23e7")
          , i = n("60da");
        r({
            target: "Object",
            stat: !0,
            arity: 2,
            forced: Object.assign !== i
        }, {
            assign: i
        })
    },
    cdce: function(t, e, n) {
        "use strict";
        var r = n("da84")
          , i = n("1626")
          , o = r.WeakMap;
        t.exports = i(o) && /native code/.test(String(o))
    },
    cdf9: function(t, e, n) {
        "use strict";
        var r = n("825a")
          , i = n("861d")
          , o = n("f069");
        t.exports = function(t, e) {
            if (r(t),
            i(e) && e.constructor === t)
                return e;
            var n = o.f(t);
            return (0,
            n.resolve)(e),
            n.promise
        }
    },
    d012: function(t, e, n) {
        "use strict";
        t.exports = {}
    },
    d039: function(t, e, n) {
        "use strict";
        t.exports = function(t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        }
    },
    d066: function(t, e, n) {
        "use strict";
        var r = n("da84")
          , i = n("1626")
          , o = function(t) {
            return i(t) ? t : void 0
        };
        t.exports = function(t, e) {
            return arguments.length < 2 ? o(r[t]) : r[t] && r[t][e]
        }
    },
    d1e7: function(t, e, n) {
        "use strict";
        var r = {}.propertyIsEnumerable
          , i = Object.getOwnPropertyDescriptor
          , o = i && !r.call({
            1: 2
        }, 1);
        e.f = o ? function(t) {
            var e = i(this, t);
            return !!e && e.enumerable
        }
        : r
    },
    d256: function(t, e, n) {
        "use strict";
        var r = n("da84");
        t.exports = r.Promise
    },
    d2bb: function(t, e, n) {
        "use strict";
        var r = n("7282")
          , i = n("861d")
          , o = n("1d80")
          , a = n("3bbe");
        t.exports = Object.setPrototypeOf || ("__proto__"in {} ? function() {
            var t, e = !1, n = {};
            try {
                (t = r(Object.prototype, "__proto__", "set"))(n, []),
                e = n instanceof Array
            } catch (t) {}
            return function(n, r) {
                return o(n),
                a(r),
                i(n) ? (e ? t(n, r) : n.__proto__ = r,
                n) : n
            }
        }() : void 0)
    },
    d304: function(t, e, n) {
        "use strict";
        function r(t) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        n.d(e, "a", (function() {
            return i
        }
        )),
        n.d(e, "b", (function() {
            return o
        }
        ));
        function i() {
            return "function" == typeof XMLHttpRequest || "object" === ("undefined" == typeof XMLHttpRequest ? "undefined" : r(XMLHttpRequest))
        }
        function o(t) {
            return function(t) {
                return !!t && "function" == typeof t.then
            }(t) ? t : Promise.resolve(t)
        }
    },
    d44e: function(t, e, n) {
        "use strict";
        var r = n("9bf2").f
          , i = n("1a2d")
          , o = n("b622")("toStringTag");
        t.exports = function(t, e, n) {
            t && !n && (t = t.prototype),
            t && !i(t, o) && r(t, o, {
                configurable: !0,
                value: e
            })
        }
    },
    d4c3: function(t, e, n) {
        "use strict";
        var r = n("342f");
        t.exports = /ipad|iphone|ipod/i.test(r) && "undefined" != typeof Pebble
    },
    d6d6: function(t, e, n) {
        "use strict";
        var r = TypeError;
        t.exports = function(t, e) {
            if (t < e)
                throw new r("Not enough arguments");
            return t
        }
    },
    d9b5: function(t, e, n) {
        "use strict";
        var r = n("d066")
          , i = n("1626")
          , o = n("3a9b")
          , a = n("fdbf")
          , s = Object;
        t.exports = a ? function(t) {
            return "symbol" == typeof t
        }
        : function(t) {
            var e = r("Symbol");
            return i(e) && o(e.prototype, s(t))
        }
    },
    da84: function(t, e, n) {
        "use strict";
        (function(e) {
            var n = function(t) {
                return t && t.Math === Math && t
            };
            t.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof e && e) || n("object" == typeof this && this) || function() {
                return this
            }() || Function("return this")()
        }
        ).call(this, n("c8ba"))
    },
    dbb9: function(t, e, n) {
        "use strict";
        var r = n("d304")
          , i = n("5808");
        function o(t) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function a(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function s(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? a(Object(n), !0).forEach((function(e) {
                    u(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        function l(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function c(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(t, h(r.key), r)
            }
        }
        function u(t, e, n) {
            return (e = h(e))in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n,
            t
        }
        function h(t) {
            var e = function(t, e) {
                if ("object" != o(t) || !t)
                    return t;
                var n = t[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(t, e || "default");
                    if ("object" != o(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === e ? String : Number)(t)
            }(t, "string");
            return "symbol" == o(e) ? e : e + ""
        }
        var p = function() {
            return {
                loadPath: "/locales/{{lng}}/{{ns}}.json",
                addPath: "/locales/add/{{lng}}/{{ns}}",
                parse: function(t) {
                    return JSON.parse(t)
                },
                stringify: JSON.stringify,
                parsePayload: function(t, e, n) {
                    return u({}, e, n || "")
                },
                parseLoadPayload: function(t, e) {},
                request: i.a,
                reloadInterval: "undefined" == typeof window && 36e5,
                customHeaders: {},
                queryStringParams: {},
                crossDomain: !1,
                withCredentials: !1,
                overrideMimeType: !1,
                requestOptions: {
                    mode: "cors",
                    credentials: "same-origin",
                    cache: "default"
                }
            }
        }
          , f = function(t, e, n) {
            return e && c(t.prototype, e),
            n && c(t, n),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            t
        }((function t(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            l(this, t),
            this.services = e,
            this.options = n,
            this.allOptions = r,
            this.type = "backend",
            this.init(e, n, r)
        }
        ), [{
            key: "init",
            value: function(t) {
                var e = this
                  , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if (this.services = t,
                this.options = s(s(s({}, p()), this.options || {}), n),
                this.allOptions = r,
                this.services && this.options.reloadInterval) {
                    var i = setInterval((function() {
                        return e.reload()
                    }
                    ), this.options.reloadInterval);
                    "object" === o(i) && "function" == typeof i.unref && i.unref()
                }
            }
        }, {
            key: "readMulti",
            value: function(t, e, n) {
                this._readAny(t, t, e, e, n)
            }
        }, {
            key: "read",
            value: function(t, e, n) {
                this._readAny([t], t, [e], e, n)
            }
        }, {
            key: "_readAny",
            value: function(t, e, n, i, o) {
                var a = this
                  , s = this.options.loadPath;
                "function" == typeof this.options.loadPath && (s = this.options.loadPath(t, n)),
                (s = Object(r.b)(s)).then((function(r) {
                    if (!r)
                        return o(null, {});
                    var s = a.services.interpolator.interpolate(r, {
                        lng: t.join("+"),
                        ns: n.join("+")
                    });
                    a.loadUrl(s, o, e, i)
                }
                ))
            }
        }, {
            key: "loadUrl",
            value: function(t, e, n, r) {
                var i = this
                  , o = "string" == typeof n ? [n] : n
                  , a = "string" == typeof r ? [r] : r
                  , s = this.options.parseLoadPayload(o, a);
                this.options.request(this.options, t, s, (function(o, a) {
                    if (a && (a.status >= 500 && a.status < 600 || !a.status))
                        return e("failed loading " + t + "; status code: " + a.status, !0);
                    if (a && a.status >= 400 && a.status < 500)
                        return e("failed loading " + t + "; status code: " + a.status, !1);
                    if (!a && o && o.message && o.message.indexOf("Failed to fetch") > -1)
                        return e("failed loading " + t + ": " + o.message, !0);
                    if (o)
                        return e(o, !1);
                    var s, l;
                    try {
                        s = "string" == typeof a.data ? i.options.parse(a.data, n, r) : a.data
                    } catch (e) {
                        l = "failed parsing " + t + " to json"
                    }
                    if (l)
                        return e(l, !1);
                    e(null, s)
                }
                ))
            }
        }, {
            key: "create",
            value: function(t, e, n, r, i) {
                var o = this;
                if (this.options.addPath) {
                    "string" == typeof t && (t = [t]);
                    var a = this.options.parsePayload(e, n, r)
                      , s = 0
                      , l = []
                      , c = [];
                    t.forEach((function(n) {
                        var r = o.options.addPath;
                        "function" == typeof o.options.addPath && (r = o.options.addPath(n, e));
                        var u = o.services.interpolator.interpolate(r, {
                            lng: n,
                            ns: e
                        });
                        o.options.request(o.options, u, a, (function(e, n) {
                            s += 1,
                            l.push(e),
                            c.push(n),
                            s === t.length && "function" == typeof i && i(l, c)
                        }
                        ))
                    }
                    ))
                }
            }
        }, {
            key: "reload",
            value: function() {
                var t = this
                  , e = this.services
                  , n = e.backendConnector
                  , r = e.languageUtils
                  , i = e.logger
                  , o = n.language;
                if (!o || "cimode" !== o.toLowerCase()) {
                    var a = []
                      , s = function(t) {
                        r.toResolveHierarchy(t).forEach((function(t) {
                            a.indexOf(t) < 0 && a.push(t)
                        }
                        ))
                    };
                    s(o),
                    this.allOptions.preload && this.allOptions.preload.forEach((function(t) {
                        return s(t)
                    }
                    )),
                    a.forEach((function(e) {
                        t.allOptions.ns.forEach((function(t) {
                            n.read(e, t, "read", null, null, (function(r, o) {
                                r && i.warn("loading namespace ".concat(t, " for language ").concat(e, " failed"), r),
                                !r && o && i.log("loaded namespace ".concat(t, " for language ").concat(e), o),
                                n.loaded("".concat(e, "|").concat(t), r, o)
                            }
                            ))
                        }
                        ))
                    }
                    ))
                }
            }
        }]);
        f.type = "backend",
        e.a = f
    },
    dc4a: function(t, e, n) {
        "use strict";
        var r = n("59ed")
          , i = n("7234");
        t.exports = function(t, e) {
            var n = t[e];
            return i(n) ? void 0 : r(n)
        }
    },
    dcc3: function(t, e, n) {
        "use strict";
        var r = n("ae93").IteratorPrototype
          , i = n("7c73")
          , o = n("5c6c")
          , a = n("d44e")
          , s = n("3f8c")
          , l = function() {
            return this
        };
        t.exports = function(t, e, n, c) {
            var u = e + " Iterator";
            return t.prototype = i(r, {
                next: o(+!c, n)
            }),
            a(t, u, !1, !0),
            s[u] = l,
            t
        }
    },
    df75: function(t, e, n) {
        "use strict";
        var r = n("ca84")
          , i = n("7839");
        t.exports = Object.keys || function(t) {
            return r(t, i)
        }
    },
    e163: function(t, e, n) {
        "use strict";
        var r = n("1a2d")
          , i = n("1626")
          , o = n("7b0b")
          , a = n("f772")
          , s = n("e177")
          , l = a("IE_PROTO")
          , c = Object
          , u = c.prototype;
        t.exports = s ? c.getPrototypeOf : function(t) {
            var e = o(t);
            if (r(e, l))
                return e[l];
            var n = e.constructor;
            return i(n) && e instanceof n ? n.prototype : e instanceof c ? u : null
        }
    },
    e177: function(t, e, n) {
        "use strict";
        var r = n("d039");
        t.exports = !r((function() {
            function t() {}
            return t.prototype.constructor = null,
            Object.getPrototypeOf(new t) !== t.prototype
        }
        ))
    },
    e1bd: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return r
        }
        ));
        var r = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 21;
            return crypto.getRandomValues(new Uint8Array(t)).reduce((function(t, e) {
                return t += (e &= 63) < 36 ? e.toString(36) : e < 62 ? (e - 26).toString(36).toUpperCase() : e > 62 ? "-" : "_"
            }
            ), "")
        }
    },
    e260: function(t, e, n) {
        "use strict";
        var r = n("fc6a")
          , i = n("44d2")
          , o = n("3f8c")
          , a = n("69f3")
          , s = n("9bf2").f
          , l = n("c6d2")
          , c = n("4754")
          , u = n("c430")
          , h = n("83ab")
          , p = "Array Iterator"
          , f = a.set
          , d = a.getterFor(p);
        t.exports = l(Array, "Array", (function(t, e) {
            f(this, {
                type: p,
                target: r(t),
                index: 0,
                kind: e
            })
        }
        ), (function() {
            var t = d(this)
              , e = t.target
              , n = t.index++;
            if (!e || n >= e.length)
                return t.target = void 0,
                c(void 0, !0);
            switch (t.kind) {
            case "keys":
                return c(n, !1);
            case "values":
                return c(e[n], !1)
            }
            return c([n, e[n]], !1)
        }
        ), "values");
        var g = o.Arguments = o.Array;
        if (i("keys"),
        i("values"),
        i("entries"),
        !u && h && "values" !== g.name)
            try {
                s(g, "name", {
                    value: "values"
                })
            } catch (t) {}
    },
    e330: function(t, e, n) {
        "use strict";
        var r = n("40d5")
          , i = Function.prototype
          , o = i.call
          , a = r && i.bind.bind(o, o);
        t.exports = r ? a : function(t) {
            return function() {
                return o.apply(t, arguments)
            }
        }
    },
    e667: function(t, e, n) {
        "use strict";
        t.exports = function(t) {
            try {
                return {
                    error: !1,
                    value: t()
                }
            } catch (t) {
                return {
                    error: !0,
                    value: t
                }
            }
        }
    },
    e6cf: function(t, e, n) {
        "use strict";
        n("5e7e"),
        n("14e5"),
        n("cc98"),
        n("3529"),
        n("f22b"),
        n("7149")
    },
    e893: function(t, e, n) {
        "use strict";
        var r = n("1a2d")
          , i = n("56ef")
          , o = n("06cf")
          , a = n("9bf2");
        t.exports = function(t, e, n) {
            for (var s = i(e), l = a.f, c = o.f, u = 0; u < s.length; u++) {
                var h = s[u];
                r(t, h) || n && r(n, h) || l(t, h, c(e, h))
            }
        }
    },
    e8b5: function(t, e, n) {
        "use strict";
        var r = n("c6b6");
        t.exports = Array.isArray || function(t) {
            return "Array" === r(t)
        }
    },
    e95a: function(t, e, n) {
        "use strict";
        var r = n("b622")
          , i = n("3f8c")
          , o = r("iterator")
          , a = Array.prototype;
        t.exports = function(t) {
            return void 0 !== t && (i.Array === t || a[o] === t)
        }
    },
    edd0: function(t, e, n) {
        "use strict";
        var r = n("13d2")
          , i = n("9bf2");
        t.exports = function(t, e, n) {
            return n.get && r(n.get, e, {
                getter: !0
            }),
            n.set && r(n.set, e, {
                setter: !0
            }),
            i.f(t, e, n)
        }
    },
    f069: function(t, e, n) {
        "use strict";
        var r = n("59ed")
          , i = TypeError
          , o = function(t) {
            var e, n;
            this.promise = new t((function(t, r) {
                if (void 0 !== e || void 0 !== n)
                    throw new i("Bad Promise constructor");
                e = t,
                n = r
            }
            )),
            this.resolve = r(e),
            this.reject = r(n)
        };
        t.exports.f = function(t) {
            return new o(t)
        }
    },
    f0b0: function(t, e, n) {
        "undefined" != typeof self && self,
        t.exports = function(t) {
            var e = {};
            function n(r) {
                if (e[r])
                    return e[r].exports;
                var i = e[r] = {
                    i: r,
                    l: !1,
                    exports: {}
                };
                return t[r].call(i.exports, i, i.exports, n),
                i.l = !0,
                i.exports
            }
            return n.m = t,
            n.c = e,
            n.d = function(t, e, r) {
                n.o(t, e) || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: r
                })
            }
            ,
            n.r = function(t) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module"
                }),
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            }
            ,
            n.t = function(t, e) {
                if (1 & e && (t = n(t)),
                8 & e)
                    return t;
                if (4 & e && "object" == typeof t && t && t.__esModule)
                    return t;
                var r = Object.create(null);
                if (n.r(r),
                Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: t
                }),
                2 & e && "string" != typeof t)
                    for (var i in t)
                        n.d(r, i, function(e) {
                            return t[e]
                        }
                        .bind(null, i));
                return r
            }
            ,
            n.n = function(t) {
                var e = t && t.__esModule ? function() {
                    return t.default
                }
                : function() {
                    return t
                }
                ;
                return n.d(e, "a", e),
                e
            }
            ,
            n.o = function(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }
            ,
            n.p = "",
            n(n.s = "fb15")
        }({
            "05ee": function(t, e, n) {
                "use strict";
                n("2599")
            },
            "0f56": function(t, e, n) {},
            1861: function(t, e, n) {},
            "1bf4": function(t, e, n) {
                "use strict";
                n("dbbb")
            },
            2599: function(t, e, n) {},
            "297e": function(t, e, n) {
                "use strict";
                n("fa8c")
            },
            "299c": function(t, e, n) {},
            "29b6": function(t, e, n) {
                "use strict";
                n("b6f0")
            },
            3739: function(t, e, n) {},
            "3be8": function(t, e, n) {
                "use strict";
                n("3739")
            },
            5569: function(t, e, n) {},
            "59f2": function(t, e, n) {},
            "6d0e": function(t, e, n) {
                "use strict";
                n("7fba")
            },
            "6dc2": function(t, e, n) {},
            7058: function(t, e, n) {
                "use strict";
                n("8d02")
            },
            "71cc": function(t, e, n) {
                "use strict";
                n("cb6d")
            },
            "758d": function(t, e, n) {},
            "75a4": function(t, e, n) {
                "use strict";
                n("59f2")
            },
            "7fba": function(t, e, n) {},
            "84af": function(t, e, n) {},
            8875: function(t, e, n) {
                var r, i, o;
                "undefined" != typeof self && self,
                i = [],
                void 0 === (o = "function" == typeof (r = function() {
                    return function t() {
                        var e = Object.getOwnPropertyDescriptor(document, "currentScript");
                        if (!e && "currentScript"in document && document.currentScript)
                            return document.currentScript;
                        if (e && e.get !== t && document.currentScript)
                            return document.currentScript;
                        try {
                            throw new Error
                        } catch (t) {
                            var n, r, i, o = /.*at [^(]*\((.*):(.+):(.+)\)$/gi.exec(t.stack) || /@([^@]*):(\d+):(\d+)\s*$/gi.exec(t.stack), a = o && o[1] || !1, s = o && o[2] || !1, l = document.location.href.replace(document.location.hash, ""), c = document.getElementsByTagName("script");
                            a === l && (n = document.documentElement.outerHTML,
                            r = new RegExp("(?:[^\\n]+?\\n){0," + (s - 2) + "}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),
                            i = n.replace(r, "$1").trim());
                            for (var u = 0; u < c.length; u++) {
                                if ("interactive" === c[u].readyState)
                                    return c[u];
                                if (c[u].src === a)
                                    return c[u];
                                if (a === l && c[u].innerHTML && c[u].innerHTML.trim() === i)
                                    return c[u]
                            }
                            return null
                        }
                    }
                }
                ) ? r.apply(e, i) : r) || (t.exports = o)
            },
            "8d02": function(t, e, n) {},
            a45b: function(t, e, n) {
                "use strict";
                n("ed25")
            },
            b6f0: function(t, e, n) {},
            b75b: function(t, e, n) {},
            b989: function(t, e, n) {
                "use strict";
                n("5569")
            },
            bb38: function(t, e, n) {
                "use strict";
                n("b75b")
            },
            bca0: function(t, e, n) {
                "use strict";
                n("0f56")
            },
            bd98: function(t, e, n) {
                "use strict";
                n("1861")
            },
            c364: function(t, e, n) {},
            c61e: function(t, e, n) {
                "use strict";
                n("eb6d")
            },
            cb6d: function(t, e, n) {},
            cb76: function(t, e, n) {
                "use strict";
                n("758d")
            },
            d020: function(t, e, n) {
                "use strict";
                n("f846")
            },
            d2f7: function(t, e, n) {
                "use strict";
                n("c364")
            },
            dbbb: function(t, e, n) {},
            e697: function(t, e, n) {
                "use strict";
                n("299c")
            },
            eb6d: function(t, e, n) {},
            ed22: function(t, e, n) {
                "use strict";
                n("84af")
            },
            ed25: function(t, e, n) {},
            f62d: function(t, e, n) {
                "use strict";
                n("6dc2")
            },
            f846: function(t, e, n) {},
            fa8c: function(t, e, n) {},
            fb15: function(t, e, n) {
                "use strict";
                if (n.r(e),
                n.d(e, "TawkAlert", (function() {
                    return u
                }
                )),
                n.d(e, "TawkAvatar", (function() {
                    return p
                }
                )),
                n.d(e, "TawkBadge", (function() {
                    return d
                }
                )),
                n.d(e, "TawkBranding", (function() {
                    return M
                }
                )),
                n.d(e, "TawkButton", (function() {
                    return H
                }
                )),
                n.d(e, "TawkCard", (function() {
                    return F
                }
                )),
                n.d(e, "TawkChatBubble", (function() {
                    return Y
                }
                )),
                n.d(e, "TawkChatInput", (function() {
                    return Dt
                }
                )),
                n.d(e, "TawkCheckbox", (function() {
                    return Nt
                }
                )),
                n.d(e, "TawkDropdown", (function() {
                    return qt
                }
                )),
                n.d(e, "TawkEmoji", (function() {
                    return J
                }
                )),
                n.d(e, "TawkEmojiPicker", (function() {
                    return Pt
                }
                )),
                n.d(e, "TawkIcon", (function() {
                    return l
                }
                )),
                n.d(e, "TawkImage", (function() {
                    return X
                }
                )),
                n.d(e, "TawkInput", (function() {
                    return et
                }
                )),
                n.d(e, "TawkList", (function() {
                    return Ut
                }
                )),
                n.d(e, "TawkListItem", (function() {
                    return Ft
                }
                )),
                n.d(e, "TawkLoader", (function() {
                    return Xt
                }
                )),
                n.d(e, "TawkOverlay", (function() {
                    return Vt
                }
                )),
                n.d(e, "TawkRadio", (function() {
                    return Kt
                }
                )),
                n.d(e, "TawkRating", (function() {
                    return Gt
                }
                )),
                n.d(e, "TawkSearch", (function() {
                    return ee
                }
                )),
                n.d(e, "TawkTextarea", (function() {
                    return re
                }
                )),
                n.d(e, "TawkTimeago", (function() {
                    return ae
                }
                )),
                n.d(e, "TawkVideo", (function() {
                    return W
                }
                )),
                n.d(e, "Helper", (function() {
                    return N
                }
                )),
                n.d(e, "TawkTooltip", (function() {
                    return It
                }
                )),
                n.d(e, "TawkScroll", (function() {
                    return Rt
                }
                )),
                "undefined" != typeof window) {
                    var r = window.document.currentScript
                      , i = n("8875");
                    r = i(),
                    "currentScript"in document || Object.defineProperty(document, "currentScript", {
                        get: i
                    });
                    var o = r && r.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);
                    o && (n.p = o[1])
                }
                var a = {
                    name: "tawk-icon",
                    props: {
                        size: {
                            type: String,
                            default: ""
                        },
                        type: {
                            type: String,
                            default: "",
                            required: !0
                        }
                    }
                };
                function s(t, e, n, r, i, o, a, s) {
                    var l, c = "function" == typeof t ? t.options : t;
                    if (e && (c.render = e,
                    c.staticRenderFns = n,
                    c._compiled = !0),
                    r && (c.functional = !0),
                    o && (c._scopeId = "data-v-" + o),
                    a ? (l = function(t) {
                        (t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__),
                        i && i.call(this, t),
                        t && t._registeredComponents && t._registeredComponents.add(a)
                    }
                    ,
                    c._ssrRegister = l) : i && (l = s ? function() {
                        i.call(this, (c.functional ? this.parent : this).$root.$options.shadowRoot)
                    }
                    : i),
                    l)
                        if (c.functional) {
                            c._injectStyles = l;
                            var u = c.render;
                            c.render = function(t, e) {
                                return l.call(e),
                                u(t, e)
                            }
                        } else {
                            var h = c.beforeCreate;
                            c.beforeCreate = h ? [].concat(h, l) : [l]
                        }
                    return {
                        exports: t,
                        options: c
                    }
                }
                n("05ee");
                var l = s(a, (function(t, e) {
                    return t("i", e._g(e._b({
                        class: ["tawk-icon", "tawk-icon-".concat(e.props.type), e.props.size && "tawk-icon-".concat(e.props.size), e.data.staticClass, e.data.class],
                        style: [e.data.style, e.data.staticStyle]
                    }, "i", e.data.attrs, !1), e.listeners))
                }
                ), [], !0, null, null, null).exports
                  , c = {
                    name: "tawk-alert",
                    components: {
                        TawkIcon: l
                    },
                    props: {
                        icon: {
                            type: String,
                            default: null,
                            required: !1
                        },
                        description: {
                            type: String,
                            default: null,
                            required: !0
                        },
                        status: {
                            type: String,
                            default: null
                        },
                        title: {
                            type: String,
                            default: null,
                            required: !0
                        },
                        isDismissable: {
                            type: Boolean,
                            default: !1
                        },
                        isAutoDismissable: {
                            type: Boolean,
                            default: !1
                        },
                        dismissCountdown: {
                            type: Number,
                            default: 3e3
                        },
                        isMobile: {
                            type: Boolean,
                            default: !1
                        },
                        size: {
                            type: String,
                            default: ""
                        }
                    },
                    data: function() {
                        return {
                            dismiss: !1,
                            dimissTimeout: null
                        }
                    },
                    computed: {
                        dismissableClass: function() {
                            return ["tawk-close tawk-flex", this.isMobile && "tawk-isMobile"]
                        }
                    },
                    mounted: function() {
                        var t = this;
                        !0 === this.isAutoDismissable && (this.dimissTimeout = setTimeout((function() {
                            t.dismiss = !0
                        }
                        ), this.dismissCountdown))
                    },
                    methods: {
                        onClick: function() {
                            this.dismiss = !0
                        }
                    },
                    beforeDestroy: function() {
                        clearTimeout(this.dimissTimeout)
                    }
                }
                  , u = (n("3be8"),
                s(c, (function() {
                    var t = this
                      , e = t._self._c;
                    return e("transition", {
                        attrs: {
                            name: "alert-fade"
                        }
                    }, [0 == t.dismiss ? e("div", {
                        class: ["tawk-alert", t.size ? "tawk-alert-" + t.size : "", t.status ? "tawk-alert-".concat(t.status) : ""],
                        attrs: {
                            role: "alert"
                        }
                    }, [e("div", {
                        staticClass: "tawk-flex tawk-flex-middle"
                    }, [t.icon ? e("div", {
                        staticClass: "tawk-alert-icon"
                    }, [e("tawk-icon", {
                        attrs: {
                            type: t.icon,
                            size: "medium"
                        }
                    })], 1) : t._e(), e("div", {
                        staticClass: "tawk-margin-small-left"
                    }, [e("p", {
                        staticClass: "tawk-alert-title"
                    }, [t._v(" " + t._s(t.title) + " ")]), e("p", {
                        staticClass: "tawk-text-regular-2 tawk-text-grey-2 tawk-alert-description"
                    }, [t._v(" " + t._s(t.description) + " ")])])]), t.isDismissable || t.isAutoDismissable ? e("button", {
                        class: t.dismissableClass,
                        attrs: {
                            "aria-label": [t.$i18n ? t.$i18n("notifications", "dismiss_alert") : "Dismiss Alert"]
                        },
                        on: {
                            click: t.onClick
                        }
                    }, [e("span")]) : t._e()]) : t._e()])
                }
                ), [], !1, null, null, null)).exports
                  , h = {
                    name: "tawk-avatar",
                    props: {
                        count: {
                            type: Number,
                            default: 0
                        },
                        size: {
                            type: String,
                            default: null
                        },
                        src: {
                            type: String,
                            default: "/images/default-profile.svg"
                        }
                    }
                }
                  , p = (n("cb76"),
                s(h, (function(t, e) {
                    return t("div", e._g({
                        class: ["tawk-avatar", e.props.size ? "tawk-avatar-".concat(e.props.size) : "", e.data.staticClass, e.data.class, e.props.count ? "tawk-avatar-count" : ""],
                        style: [e.data.style, e.data.staticStyle]
                    }, e.listeners), [e.props.count ? t("span", {
                        staticClass: "tawk-text-bold"
                    }, [e._v(" +" + e._s(e.props.count > 9 ? 9 : e.props.count) + " ")]) : t("div", {
                        staticClass: "tawk-avatar-image"
                    }, [t("img", e._b({
                        attrs: {
                            src: e.props.src
                        }
                    }, "img", e.data.attrs, !1))])])
                }
                ), [], !0, null, null, null)).exports
                  , f = {
                    name: "tawk-badge",
                    props: {
                        count: {
                            type: Number,
                            default: 0
                        }
                    },
                    handleCounter: function(t) {
                        var e = 0;
                        return t > 0 && (e = t > 9 ? "9+" : t),
                        e
                    }
                }
                  , d = (n("bd98"),
                s(f, (function(t, e) {
                    return t("span", e._g(e._b({
                        ref: e.data.ref,
                        class: ["tawk-badge tawk-flex tawk-flex-center tawk-flex-middle", e.data.class, e.data.staticClass],
                        style: [e.data.style, e.data.staticStyle]
                    }, "span", e.data.attrs, !1), e.listeners), [e._v(e._s(e.$options.handleCounter(e.props.count)))])
                }
                ), [], !0, null, null, null)).exports;
                function g(t) {
                    return (g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    }
                    : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    }
                    )(t)
                }
                function m(t) {
                    if (!("string" == typeof t || t instanceof String)) {
                        var e = g(t);
                        throw null === t ? e = "null" : "object" === e && (e = t.constructor.name),
                        new TypeError("Expected a string but received a ".concat(e))
                    }
                }
                function _() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , e = arguments.length > 1 ? arguments[1] : void 0;
                    for (var n in e)
                        void 0 === t[n] && (t[n] = e[n]);
                    return t
                }
                var y = {
                    ignore_whitespace: !1
                };
                function v(t, e) {
                    return m(t),
                    0 === ((e = _(e, y)).ignore_whitespace ? t.trim().length : t.length)
                }
                function b(t) {
                    return (b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    }
                    : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    }
                    )(t)
                }
                function w(t, e) {
                    var n, r;
                    m(t),
                    "object" === b(e) ? (n = e.min || 0,
                    r = e.max) : (n = arguments[1],
                    r = arguments[2]);
                    var i = encodeURI(t).split(/%..|./).length - 1;
                    return i >= n && (void 0 === r || i <= r)
                }
                var k = {
                    require_tld: !0,
                    allow_underscores: !1,
                    allow_trailing_dot: !1,
                    allow_numeric_tld: !1,
                    allow_wildcard: !1,
                    ignore_max_length: !1
                }
                  , x = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])"
                  , S = "(".concat(x, "[.]){3}").concat(x)
                  , T = new RegExp("^".concat(S, "$"))
                  , C = "(?:[0-9a-fA-F]{1,4})"
                  , O = new RegExp("^(" + "(?:".concat(C, ":){7}(?:").concat(C, "|:)|") + "(?:".concat(C, ":){6}(?:").concat(S, "|:").concat(C, "|:)|") + "(?:".concat(C, ":){5}(?::").concat(S, "|(:").concat(C, "){1,2}|:)|") + "(?:".concat(C, ":){4}(?:(:").concat(C, "){0,1}:").concat(S, "|(:").concat(C, "){1,3}|:)|") + "(?:".concat(C, ":){3}(?:(:").concat(C, "){0,2}:").concat(S, "|(:").concat(C, "){1,4}|:)|") + "(?:".concat(C, ":){2}(?:(:").concat(C, "){0,3}:").concat(S, "|(:").concat(C, "){1,5}|:)|") + "(?:".concat(C, ":){1}(?:(:").concat(C, "){0,4}:").concat(S, "|(:").concat(C, "){1,6}|:)|") + "(?::((?::".concat(C, "){0,5}:").concat(S, "|(?::").concat(C, "){1,7}|:))") + ")(%[0-9a-zA-Z-.:]{1,})?$");
                function E(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    return m(t),
                    (e = String(e)) ? "4" === e ? T.test(t) : "6" === e && O.test(t) : E(t, 4) || E(t, 6)
                }
                var L = {
                    allow_display_name: !1,
                    allow_underscores: !1,
                    require_display_name: !1,
                    allow_utf8_local_part: !0,
                    require_tld: !0,
                    blacklisted_chars: "",
                    ignore_max_length: !1,
                    host_blacklist: [],
                    host_whitelist: []
                }
                  , j = /^([^\x00-\x1F\x7F-\x9F\cX]+)</i
                  , R = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i
                  , A = /^[a-z\d]+$/
                  , P = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i
                  , I = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A1-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i
                  , $ = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
                function D(t, e) {
                    if (m(t),
                    (e = _(e, L)).require_display_name || e.allow_display_name) {
                        var n = t.match(j);
                        if (n) {
                            var r = n[1];
                            if (t = t.replace(r, "").replace(/(^<|>$)/g, ""),
                            r.endsWith(" ") && (r = r.slice(0, -1)),
                            !function(t) {
                                var e = t.replace(/^"(.+)"$/, "$1");
                                if (!e.trim())
                                    return !1;
                                if (/[\.";<>]/.test(e)) {
                                    if (e === t)
                                        return !1;
                                    if (e.split('"').length !== e.split('\\"').length)
                                        return !1
                                }
                                return !0
                            }(r))
                                return !1
                        } else if (e.require_display_name)
                            return !1
                    }
                    if (!e.ignore_max_length && t.length > 254)
                        return !1;
                    var i = t.split("@")
                      , o = i.pop()
                      , a = o.toLowerCase();
                    if (e.host_blacklist.includes(a))
                        return !1;
                    if (e.host_whitelist.length > 0 && !e.host_whitelist.includes(a))
                        return !1;
                    var s = i.join("@");
                    if (e.domain_specific_validation && ("gmail.com" === a || "googlemail.com" === a)) {
                        var l = (s = s.toLowerCase()).split("+")[0];
                        if (!w(l.replace(/\./g, ""), {
                            min: 6,
                            max: 30
                        }))
                            return !1;
                        for (var c = l.split("."), u = 0; u < c.length; u++)
                            if (!A.test(c[u]))
                                return !1
                    }
                    if (!(!1 !== e.ignore_max_length || w(s, {
                        max: 64
                    }) && w(o, {
                        max: 254
                    })))
                        return !1;
                    if (!function(t, e) {
                        m(t),
                        (e = _(e, k)).allow_trailing_dot && "." === t[t.length - 1] && (t = t.substring(0, t.length - 1)),
                        !0 === e.allow_wildcard && 0 === t.indexOf("*.") && (t = t.substring(2));
                        var n = t.split(".")
                          , r = n[n.length - 1];
                        if (e.require_tld) {
                            if (n.length < 2)
                                return !1;
                            if (!e.allow_numeric_tld && !/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(r))
                                return !1;
                            if (/\s/.test(r))
                                return !1
                        }
                        return !(!e.allow_numeric_tld && /^\d+$/.test(r)) && n.every((function(t) {
                            return !(t.length > 63 && !e.ignore_max_length || !/^[a-z_\u00a1-\uffff0-9-]+$/i.test(t) || /[\uff01-\uff5e]/.test(t) || /^-|-$/.test(t) || !e.allow_underscores && /_/.test(t))
                        }
                        ))
                    }(o, {
                        require_tld: e.require_tld,
                        ignore_max_length: e.ignore_max_length,
                        allow_underscores: e.allow_underscores
                    })) {
                        if (!e.allow_ip_domain)
                            return !1;
                        if (!E(o)) {
                            if (!o.startsWith("[") || !o.endsWith("]"))
                                return !1;
                            var h = o.slice(1, -1);
                            if (0 === h.length || !E(h))
                                return !1
                        }
                    }
                    if ('"' === s[0])
                        return s = s.slice(1, s.length - 1),
                        e.allow_utf8_local_part ? $.test(s) : P.test(s);
                    for (var p = e.allow_utf8_local_part ? I : R, f = s.split("."), d = 0; d < f.length; d++)
                        if (!p.test(f[d]))
                            return !1;
                    return !e.blacklisted_chars || -1 === s.search(new RegExp("[".concat(e.blacklisted_chars, "]+"),"g"))
                }
                function B(t) {
                    return (B = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    }
                    : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    }
                    )(t)
                }
                var N = {
                    isValid: function(t) {
                        var e = t.value
                          , n = void 0 === e ? "" : e
                          , r = t.type
                          , i = void 0 === r ? "" : r;
                        if ("email" === i)
                            return D(n, {
                                allow_display_name: !1,
                                require_display_name: !1,
                                allow_utf8_local_part: !0,
                                require_tld: !0
                            }) && n.length <= 150 ? {
                                isValid: !0,
                                message: ""
                            } : {
                                isValid: !1,
                                message: "Invalid email address"
                            };
                        if ("name" === i)
                            return function(t, e) {
                                var n, r;
                                m(t),
                                "object" === B(e) ? (n = e.min || 0,
                                r = e.max) : (n = arguments[1] || 0,
                                r = arguments[2]);
                                var i = t.match(/(\uFE0F|\uFE0E)/g) || []
                                  , o = t.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g) || []
                                  , a = t.length - i.length - o.length;
                                return a >= n && (void 0 === r || a <= r)
                            }(n, {
                                min: 0,
                                max: 40
                            }) ? {
                                isValid: !0,
                                message: ""
                            } : {
                                isValid: !1,
                                message: "Must not be exceed in 40 characters"
                            };
                        if ("phone" === i)
                            return n.length <= 7 ? {
                                isValid: !1,
                                message: "Invalid phone number length"
                            } : n.match(/^[+]?([0-9]+-)*[0-9 ()]+$/im) ? {
                                isValid: !0,
                                message: ""
                            } : {
                                isValid: !1,
                                message: "Invalid phone number"
                            };
                        throw new Error("Invalid type")
                    },
                    isEmpty: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                        return v(t)
                    },
                    generateUUID: function() {
                        var t = "abcdefghijklmnopqrstuvwxyz"
                          , e = t[Math.floor(Math.random() * t.length)]
                          , n = (new Date).getTime();
                        return "".concat(e).concat(Math.random().toString(32).substring(2)).concat(n)
                    },
                    generateRandomInt: function() {
                        return Math.floor(3 * Math.random() + 1)
                    },
                    convertPixelToRem: function(t) {
                        return 1 / 16 * t
                    }
                }
                  , M = s({
                    name: "tawk-branding",
                    props: {
                        whitelabel: {
                            type: Object,
                            default: function() {
                                return {}
                            },
                            required: !0
                        },
                        imageUrl: {
                            type: String,
                            default: "/images/Tawky_16x16.svg"
                        },
                        tawkToUrl: {
                            type: String,
                            default: "https://www.tawk.to"
                        }
                    },
                    computed: {
                        iconStyle: function() {
                            return {
                                maxWidth: "16px",
                                margin: "0 4px 0 2px",
                                display: "inline-block",
                                verticalAlign: "middle",
                                width: "16px",
                                float: "left"
                            }
                        },
                        anchorStyle: function() {
                            return {
                                display: "flex",
                                alignItems: "center",
                                color: this.whitelabel.textColor ? this.whitelabel.textColor : "#4f4f4f",
                                fontSize: "0.75em",
                                fontWeight: "400",
                                textDecoration: "none",
                                padding: "0.5em",
                                borderRadius: "1.25rem"
                            }
                        }
                    },
                    methods: {
                        getUUID: function() {
                            return N.generateUUID()
                        },
                        getRandomInt: function() {
                            return N.generateRandomInt()
                        },
                        onClick: function() {
                            window.open(this.tawkToUrl, "_blank")
                        },
                        handleMouseOver: function() {
                            this.$refs.brand && (this.$refs.brand.style.backgroundColor = "#f7f7f9")
                        },
                        handleMouseLeave: function() {
                            this.$refs.brand && (this.$refs.brand.style.backgroundColor = "transparent")
                        }
                    }
                }, (function() {
                    var t = this
                      , e = t._self._c;
                    return Object.keys(t.whitelabel).length ? e("div", {
                        staticClass: "tawk-flex tawk-flex-center"
                    }, [t.whitelabel.label ? e(t.whitelabel.url ? "a" : "span", t._b({
                        ref: "brand",
                        tag: "component",
                        style: t.anchorStyle,
                        attrs: {
                            href: !!t.whitelabel.url && this.whitelabel.url,
                            target: !!t.whitelabel.url && "_blank"
                        },
                        domProps: {
                            innerHTML: t._s(t.whitelabel.label)
                        },
                        on: {
                            mouseover: t.handleMouseOver
                        }
                    }, "component", t.$attrs, !1)) : t._e()], 1) : e("div", {
                        staticClass: "tawk-flex tawk-flex-center",
                        attrs: {
                            id: t.getUUID()
                        }
                    }, [t._l(t.getRandomInt(), (function(n) {
                        return e("a", {
                            key: "1".concat(n),
                            attrs: {
                                id: t.getUUID(),
                                tabindex: "-1"
                            }
                        })
                    }
                    )), e("a", t._b({
                        ref: "brand",
                        style: t.anchorStyle,
                        attrs: {
                            id: t.getUUID(),
                            href: t.tawkToUrl
                        },
                        on: {
                            click: function(e) {
                                return e.preventDefault(),
                                t.onClick.apply(null, arguments)
                            },
                            mouseover: t.handleMouseOver,
                            mouseleave: t.handleMouseLeave
                        }
                    }, "a", t.$attrs, !1), [e("img", {
                        style: t.iconStyle,
                        attrs: {
                            src: t.imageUrl
                        }
                    }), t._v(" Add free "), e("b", {
                        staticStyle: {
                            margin: "0 .2rem"
                        }
                    }, [t._v("live chat")]), t._v(" to your site ")]), t._l(t.getRandomInt(), (function(n) {
                        return e("a", {
                            key: "2".concat(n),
                            attrs: {
                                id: t.getUUID(),
                                tabindex: "-1"
                            }
                        })
                    }
                    ))], 2)
                }
                ), [], !1, null, null, null).exports
                  , q = {
                    name: "tawk-button",
                    props: {
                        href: {
                            type: String,
                            default: null
                        },
                        isCircle: {
                            type: Boolean,
                            default: !1
                        },
                        isDashed: {
                            type: Boolean,
                            default: !1
                        },
                        isDisabled: {
                            type: Boolean,
                            default: !1
                        },
                        isOutline: {
                            type: Boolean,
                            default: !1
                        },
                        isRounded: {
                            type: Boolean,
                            default: !1
                        },
                        isText: {
                            type: Boolean,
                            default: !1
                        },
                        size: {
                            type: String,
                            default: null
                        },
                        status: {
                            type: String,
                            default: null
                        },
                        inverse: {
                            type: Boolean,
                            default: !1
                        },
                        label: {
                            type: String,
                            default: null
                        }
                    },
                    computed: {
                        tagName: function() {
                            return this.href ? "a" : "button"
                        },
                        classes: function() {
                            return ["tawk-button", !this.status || this.isText || this.isOutline || this.isDashed ? "" : "tawk-button-".concat(this.status), this.isText ? "tawk-button-text" : "", this.isOutline && !this.isText ? "tawk-button-outline tawk-button-outline-".concat(this.status) : "", this.isCircle && !this.isText ? "tawk-button-circle" : "", this.isRounded && !this.isCircle ? "tawk-button-rounded" : "", this.isDashed ? "tawk-button-dashed" : "", this.size ? "tawk-button-".concat(this.size) : "", this.inverse && "tawk-button-color-inverse"]
                        }
                    }
                }
                  , H = (n("d2f7"),
                s(q, (function() {
                    var t = this;
                    return (0,
                    t._self._c)(t.tagName, {
                        tag: "component",
                        class: t.classes,
                        attrs: {
                            disabled: t.isDisabled,
                            type: !this.href && "button",
                            href: !!this.href && this.href,
                            "aria-label": t.label,
                            role: !!this.href && "button",
                            title: t.label
                        },
                        on: {
                            click: function(e) {
                                return t.$emit("click")
                            },
                            focusout: function(e) {
                                return t.$emit("focusout")
                            }
                        }
                    }, [t._t("default")], 2)
                }
                ), [], !1, null, null, null)).exports
                  , U = {
                    name: "tawk-card",
                    props: {
                        color: {
                            type: String,
                            default: null
                        },
                        size: {
                            type: String,
                            default: null
                        }
                    }
                }
                  , F = (n("e697"),
                s(U, (function(t, e) {
                    return t("div", e._g(e._b({
                        ref: e.data.ref,
                        class: ["tawk-card", e.props.color ? "tawk-card-".concat(e.props.color) : "", e.props.size ? "tawk-card-".concat(e.props.size) : "", e.data.class, e.data.staticClass],
                        style: [e.data.style, e.data.staticStyle]
                    }, "div", e.data.attrs, !1), e.listeners), [e._t("default")], 2)
                }
                ), [], !0, null, null, null)).exports
                  , z = {
                    name: "tawk-image",
                    props: {
                        src: {
                            type: String,
                            required: !0
                        },
                        alt: {
                            type: String
                        },
                        position: {
                            type: String,
                            validator: function(t) {
                                return -1 !== ["left", "right", "center"].indexOf(t)
                            }
                        }
                    },
                    data: function() {
                        return {
                            loaded: !1
                        }
                    },
                    directives: {
                        "image-load": {
                            inserted: function(t, e, n) {
                                t.onload = function() {
                                    n.context.loaded = !0,
                                    n.context.$emit("imageLoaded")
                                }
                                ,
                                t.onerror = function() {
                                    n.context.loaded = !0,
                                    n.context.$emit("imageLoaded")
                                }
                            }
                        }
                    }
                }
                  , X = (n("d020"),
                s(z, (function() {
                    var t = this
                      , e = t._self._c;
                    return e("div", {
                        class: [t.position && "tawk-image-".concat(t.position)]
                    }, [t.loaded ? t._e() : e("div", {
                        staticClass: "tawk-image-loader"
                    }), e("img", t._b({
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.loaded,
                            expression: "loaded"
                        }, {
                            name: "image-load",
                            rawName: "v-image-load"
                        }],
                        staticClass: "tawk-image",
                        attrs: {
                            src: t.src,
                            alt: t.alt
                        }
                    }, "img", t.$attrs, !1))])
                }
                ), [], !1, null, null, null)).exports
                  , W = s({
                    name: "tawk-video",
                    props: {
                        content: Object,
                        isMobile: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    computed: {
                        videoLink: function() {
                            var t = this.content.url
                              , e = []
                              , n = this.content.options;
                            if (void 0 !== this.content.source) {
                                if ("selfhosted" === this.content.source)
                                    return n.startTime && n.endTime && (t += "#t=".concat(n.startTime, ",").concat(n.endTime)),
                                    !n.startTime && n.endTime && (t += "#t=0,".concat(n.endTime)),
                                    n.startTime && !n.endTime && (t += "#t=".concat(n.startTime)),
                                    t;
                                if (n && (e.push(n.loop ? "loop=1" : "loop=0"),
                                "vimeo" === this.content.source ? e.push("controls=1") : e.push(n.controls ? "controls=1" : "controls=0"),
                                this.isMobile && !n.mobile ? e.push("autoplay=0") : e.push(n.autoplay ? "autoplay=1" : "autoplay=0")),
                                "youtube" == this.content.source) {
                                    var r = this.matchYoutubeUrl(t);
                                    r && (t = n.privacy ? "https://www.youtube-nocookie.com/embed/".concat(r) : "https://www.youtube.com/embed/".concat(r)),
                                    n && (n.branding && e.push("modestbranding=1"),
                                    n.startTime && e.push("start=".concat(n.startTime)),
                                    n.endTime && e.push("end=".concat(n.endTime)),
                                    e.push(n.mute ? "mute=1" : "mute=0"))
                                } else if ("dailymotion" == this.content.source) {
                                    var i = this.matchDailyMotion(t);
                                    t = "https://www.dailymotion.com/embed/video/".concat(i),
                                    n && (n.startTime && e.push("start=".concat(n.startTime)),
                                    n.controlsColor && e.push("ui-highlight=".concat(n.controlsColor)),
                                    e.push(n.logo ? "ui-logo=1" : "ui-logo=0"),
                                    e.push(n.info ? "ui-start-screen-info=1" : "ui-start-screen-info=0"),
                                    e.push(n.mute ? "mute=1" : "mute=0"))
                                } else if ("vimeo" == this.content.source) {
                                    var o = new URL(t).searchParams
                                      , a = this.matchVimeo(t);
                                    t = "https://player.vimeo.com/video/".concat(a),
                                    o.get("h") && e.push("h=".concat(o.get("h"))),
                                    o.get("app_id") && e.push("app_id=".concat(o.get("app_id"))),
                                    n && (e.push(n.mute ? "muted=1" : "muted=0"),
                                    n.controlsColor && e.push("color=".concat(n.controlsColor)),
                                    e.push(n.introTitle ? "title=1" : "title=0"),
                                    e.push(n.introPortrait ? "portrait=1" : "portrait=0"),
                                    e.push(n.introByline ? "byline=1" : "byline=0"),
                                    n.startTime && e.push("#t=".concat(n.startTime, "s")))
                                } else if ("loom" === this.content.source) {
                                    var s = this.matchLoomUrl(t);
                                    t = "https://www.loom.com/embed/".concat(s),
                                    n.startTime && e.push("t=" + n.startTime)
                                }
                            }
                            return "".concat(t, "?").concat(e.join("&"))
                        }
                    },
                    methods: {
                        matchYoutubeUrl: function(t) {
                            var e = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
                            return !!t.match(e) && t.match(e)[1]
                        },
                        matchDailyMotion: function(t) {
                            var e = /^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?$/;
                            return !!t.match(e) && t.match(e)[1]
                        },
                        matchVimeo: function(t) {
                            var e = t.match(/^https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)(?:[?]?.*)$/);
                            return !!(e && e.length >= 4) && e[3]
                        },
                        matchLoomUrl: function(t) {
                            var e = t.match(/(?:https?:\/\/)?(?:stage\.loom\.com|loom\.com|www\.loom.com|loomlocal\.com:4444)\/(share|embed)\/([a-f0-9]+)/);
                            return !(!e || !e.length) && e[e.length - 1]
                        }
                    }
                }, (function() {
                    var t = this
                      , e = t._self._c;
                    return e("div", ["selfhosted" === t.content.source ? e("video", t._b({
                        staticClass: "tawk-video-el",
                        attrs: {
                            src: t.videoLink,
                            "data-src": t.videoLink,
                            controls: t.content.options.controls,
                            loop: t.content.options.loop,
                            autoplay: t.content.options.autoplay && !t.isMobile || t.content.options.autoplay && t.isMobile && t.content.options.mobile
                        },
                        domProps: {
                            muted: t.content.options.mute
                        }
                    }, "video", t.$attrs, !1)) : e("div", {
                        staticClass: "tawk-video-iframe-container"
                    }, [e("iframe", t._b({
                        staticClass: "tawk-video-iframe tawk-video-el",
                        attrs: {
                            src: t.videoLink,
                            "data-src": t.videoLink,
                            frameborder: "0",
                            allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
                            allowfullscreen: ""
                        }
                    }, "iframe", t.$attrs, !1))])])
                }
                ), [], !1, null, null, null).exports
                  , V = {
                    name: "tawk-chat-bubble",
                    components: {
                        TawkImage: X,
                        TawkVideo: W,
                        TawkIcon: l
                    },
                    props: {
                        isActive: {
                            type: Boolean,
                            default: !1
                        },
                        attachments: {
                            type: Object,
                            default: function() {
                                return {
                                    videos: [],
                                    images: [],
                                    audios: [],
                                    files: []
                                }
                            }
                        }
                    },
                    computed: {
                        getChatBubbleClasses: function() {
                            return this.isActive ? "tawk-active" : ""
                        }
                    },
                    methods: {
                        handleOpenNewTab: function(t) {
                            window.open(t, "_blank")
                        },
                        beautifyFilename: function(t, e) {
                            var n = t.lastIndexOf(".")
                              , r = t.substring(0, n)
                              , i = ".".concat(t.substring(n + 1));
                            return r.length > 7 && (i = r.substring(r.length - 3) + i,
                            r = r.substring(0, r.length - 3)),
                            '<span class="tawk-flex-1 tawk-text-truncate">'.concat(r, '</span><span class="tawk-flex-none">').concat(i, '</span><span class="tawk-flex-none">&nbsp;(').concat(e, ")</span>")
                        },
                        handleImageLoaded: function() {
                            this.$emit("imageLoaded")
                        }
                    }
                }
                  , Y = (n("7058"),
                s(V, (function() {
                    var t = this
                      , e = t._self._c;
                    return e("div", {
                        staticClass: "tawk-chat-bubble",
                        class: t.getChatBubbleClasses
                    }, [this.$slots.default ? e("p", [t._t("default")], 2) : t._e(), this.attachments.videos && this.attachments.videos.length ? e("ul", {
                        staticClass: "tawk-chat-bubble-videos"
                    }, t._l(this.attachments.videos, (function(t, n) {
                        return e("li", {
                            key: "video-".concat(n),
                            staticClass: "tawk-margin-xsmall-top"
                        }, [e("tawk-video", {
                            attrs: {
                                content: {
                                    source: t.source,
                                    url: t.url,
                                    options: t.options
                                }
                            }
                        })], 1)
                    }
                    )), 0) : t._e(), this.attachments.images && this.attachments.images.length ? e("ul", {
                        staticClass: "tawk-chat-bubble-images",
                        class: "tawk-grid-".concat(this.attachments.images.length)
                    }, t._l(this.attachments.images, (function(n, r) {
                        return e("li", {
                            key: "image-".concat(r),
                            on: {
                                click: function(e) {
                                    return t.handleOpenNewTab(n.source)
                                }
                            }
                        }, [e("tawk-image", {
                            attrs: {
                                src: n.source,
                                alt: n.name
                            },
                            on: {
                                imageLoaded: t.handleImageLoaded
                            }
                        })], 1)
                    }
                    )), 0) : t._e(), this.attachments.audios && this.attachments.audios.length ? e("ul", {
                        staticClass: "tawk-chat-bubble-audios"
                    }, t._l(this.attachments.audios, (function(n, r) {
                        return e("li", {
                            key: "audio-".concat(r),
                            staticClass: "tawk-margin-xsmall-top",
                            staticStyle: {
                                overflow: "hidden"
                            }
                        }, [e("audio", {
                            attrs: {
                                controls: "",
                                src: n.source
                            }
                        }, [e("source", {
                            attrs: {
                                src: n.source,
                                type: n.type
                            }
                        })]), e("div", {
                            staticClass: "tawk-flex tawk-flex-middle tawk-margin-xsmall-top"
                        }, [e("tawk-icon", {
                            attrs: {
                                type: "attach-file",
                                size: "small"
                            }
                        }), e("a", {
                            staticClass: "tawk-flex tawk-flex-middle",
                            staticStyle: {
                                overflow: "hidden"
                            },
                            attrs: {
                                href: n.source,
                                target: "_blank"
                            },
                            domProps: {
                                innerHTML: t._s(t.beautifyFilename(n.name, n.size))
                            }
                        })], 1)])
                    }
                    )), 0) : t._e(), this.attachments.files && this.attachments.files.length ? e("ul", {
                        staticClass: "tawk-chat-bubble-files"
                    }, [this.attachments.files && this.attachments.files.length ? t._l(this.attachments.files, (function(n, r) {
                        return e("li", {
                            key: "file-name-".concat(r),
                            staticClass: "tawk-flex tawk-flex-top",
                            staticStyle: {
                                overflow: "hidden"
                            }
                        }, [e("tawk-icon", {
                            attrs: {
                                type: "attach-file",
                                size: "small"
                            }
                        }), e("a", {
                            staticClass: "tawk-flex tawk-flex-middle",
                            staticStyle: {
                                overflow: "hidden"
                            },
                            attrs: {
                                href: n.source,
                                target: "_blank"
                            },
                            domProps: {
                                innerHTML: t._s(t.beautifyFilename(n.name, n.size))
                            }
                        })], 1)
                    }
                    )) : t._e()], 2) : t._e()])
                }
                ), [], !1, null, null, null)).exports
                  , K = {
                    data: function() {
                        return {
                            loaded: !1,
                            emojione: null
                        }
                    },
                    mounted: function() {
                        this.includeScript()
                    },
                    methods: {
                        includeScript: function() {
                            if (void 0 === window.emojione && this.enabled) {
                                var t = document.createElement("script");
                                t.src = "https://cdn.jsdelivr.net/emojione/2.2.7/lib/js/emojione.min.js",
                                t.type = "text/javascript",
                                t.async = !0,
                                t.defer = !0,
                                document.getElementsByTagName("head").item(0).appendChild(t)
                            }
                        }
                    }
                }
                  , J = s({
                    name: "tawk-emoji",
                    mixins: [K],
                    props: {
                        emoji: String,
                        enabled: {
                            type: Boolean,
                            default: !0
                        }
                    },
                    data: function() {
                        return {
                            image: null,
                            checkTimeout: null,
                            counter: 0,
                            show: !1,
                            isEmojiOnly: !1
                        }
                    },
                    mounted: function() {
                        this.enabled ? this.checkScriptLoaded() : this.image = this.emoji,
                        this.$refs.image && (this.show = !0)
                    },
                    methods: {
                        checkScriptLoaded: function() {
                            var t = this;
                            if (clearTimeout(this.checkScriptLoaded),
                            void 0 === window.emojione)
                                return this.counter++,
                                20 === this.counter ? (clearTimeout(this.checkTimeout),
                                this.counter = 0,
                                void (this.image = this.emoji)) : void (this.checkTimeout = setTimeout((function() {
                                    t.checkScriptLoaded()
                                }
                                ), 20));
                            clearTimeout(this.checkTimeout),
                            this.emojione || (this.emojione = window.emojione),
                            this.counter = 0,
                            0 === this.emojione.unifyUnicode(this.emoji).replace(this.emojione.regUnicode, "").trim().length && (this.isEmojiOnly = !0);
                            var e = this.emoji;
                            e = e.replace(/©/gm, "&copy;").replace(/®/gm, "&reg;").replace(/™/gm, "&trade;"),
                            e = this.emojione.toImage(e),
                            this.image = e
                        }
                    }
                }, (function() {
                    var t = this;
                    return (0,
                    t._self._c)("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.show,
                            expression: "show"
                        }],
                        ref: "image",
                        class: t.isEmojiOnly ? "emojionly" : "",
                        domProps: {
                            innerHTML: t._s(t.image)
                        }
                    })
                }
                ), [], !1, null, null, null).exports
                  , G = s({
                    name: "tawk-emoji-group",
                    props: {
                        categories: Array,
                        activeCategory: [Object, String]
                    },
                    methods: {
                        classes: function(t) {
                            return ["tawk-emoji-group-tab", this.activeCategory.category_name == t && "tawk-emoji-group-tab-active", "tawk-flex-auto", "tawk-text-center", "tawk-outline"]
                        }
                    }
                }, (function() {
                    var t = this
                      , e = t._self._c;
                    return e("div", {
                        staticClass: "tawk-emoji-group tawk-flex tawk-flex-wrap"
                    }, t._l(t.categories, (function(n, r) {
                        return e("span", {
                            key: r,
                            class: t.classes(n.category_name),
                            attrs: {
                                title: n.category_name,
                                tabindex: "0"
                            },
                            on: {
                                click: function(e) {
                                    return t.$emit("click", n)
                                },
                                keyup: function(e) {
                                    return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.$emit("click", n)
                                }
                            }
                        }, [e("img", {
                            attrs: {
                                src: "https://cdn.jsdelivr.net/emojione/assets/png/".concat(n.emoji, ".png?v=2.2.7")
                            }
                        })])
                    }
                    )), 0)
                }
                ), [], !1, null, null, null).exports
                  , Q = s({
                    name: "tawk-emoji-preview",
                    props: {
                        preview: Object
                    }
                }, (function() {
                    var t = this
                      , e = t._self._c;
                    return e("div", {
                        staticClass: "tawk-emoji-preview tawk-flex tawk-flex-middle"
                    }, [e("span", {
                        staticClass: "tawk-emoji-preview-image tawk-flex-auto tawk-flex tawk-flex-middle",
                        domProps: {
                            innerHTML: t._s(t.preview.img)
                        }
                    }), e("div", {
                        staticClass: "tawk-flex-auto"
                    }, [e("h4", {
                        staticClass: "tawk-emoji-preview-name"
                    }, [t._v(" " + t._s(t.preview.shortname) + " ")])])])
                }
                ), [], !1, null, null, null).exports
                  , Z = {
                    data: function() {
                        return {
                            inputCustomStyle: {
                                height: "",
                                paddingTop: ""
                            },
                            labelCustomSize: !1
                        }
                    },
                    methods: {
                        customStyle: function(t, e) {
                            e > 16 && (this.inputCustomStyle.height = N.convertPixelToRem(e / 1.3 + t) + "rem !important",
                            this.inputCustomStyle.paddingTop = N.convertPixelToRem(e / 1.3) + "rem !important",
                            this.labelCustomSize = !0)
                        }
                    }
                }
                  , tt = {
                    name: "tawk-input",
                    mixins: [Z],
                    props: {
                        errorMessage: {
                            type: Object,
                            default: function() {
                                return {}
                            }
                        },
                        isRequired: {
                            type: Boolean,
                            default: !1
                        },
                        isSuccess: {
                            type: Boolean,
                            default: !1
                        },
                        label: {
                            type: String,
                            default: null
                        },
                        size: {
                            type: String,
                            default: null
                        },
                        value: {
                            type: String,
                            default: ""
                        },
                        validation: {
                            type: String,
                            default: ""
                        },
                        invalidType: {
                            type: String,
                            default: ""
                        }
                    },
                    data: function() {
                        return {
                            isActive: !1,
                            inputId: ""
                        }
                    },
                    created: function() {
                        this.handleId()
                    },
                    mounted: function() {
                        this.customStyle(this.$refs.input.clientHeight, this.$refs.label.clientHeight)
                    },
                    computed: {
                        inputClasses: function() {
                            return ["tawk-input", this.invalidType && "tawk-form-danger", this.isSuccess && "tawk-form-success", this.size && "tawk-input-".concat(this.size)]
                        },
                        labelClasses: function() {
                            return ["tawk-form-label", this.invalidType && "tawk-text-red-1", this.isSuccess && "tawk-text-green-1", this.isActive || this.$props.value ? "tawk-active" : "", this.labelCustomSize ? "tawk-form-label-custom-style" : ""]
                        },
                        errorLabel: function() {
                            return this.errorMessage[this.invalidType]
                        }
                    },
                    methods: {
                        setActive: function() {
                            this.isActive = !0,
                            this.$emit("focus")
                        },
                        unsetActive: function() {
                            this.isActive && !this.$refs.input.value.length > 0 && (this.isActive = !1),
                            this.isRequired ? !this.handleIsEmpty() && this.validation.length && this.handleValidation() : this.validation.length && this.$refs.input.value.length && this.handleValidation(),
                            this.$emit("blur")
                        },
                        handleInput: function(t) {
                            this.$emit("input", t.target.value)
                        },
                        handleId: function() {
                            void 0 === this.$attrs.id || "" === this.$attrs.id ? this.inputId = N.generateUUID() : this.inputId = this.$attrs.id
                        },
                        handleIsEmpty: function() {
                            return N.isEmpty(this.$refs.input.value) ? (this.$emit("update:error", !0),
                            this.$emit("update:invalidType", "required"),
                            !0) : (this.$emit("update:error", !1),
                            this.$emit("update:invalidType", ""),
                            !1)
                        },
                        handleValidation: function() {
                            "email" !== this.validation && "phone" !== this.validation || (this.$refs.input.value = this.$refs.input.value.trim()),
                            N.isValid({
                                value: this.$refs.input.value,
                                type: this.validation
                            }).isValid ? (this.$emit("update:error", !1),
                            this.$emit("update:invalidType", "")) : (this.$emit("update:error", !0),
                            this.$emit("update:invalidType", this.validation))
                        },
                        validate: function() {
                            this.unsetActive()
                        }
                    }
                }
                  , et = (n("f62d"),
                s(tt, (function() {
                    var t = this
                      , e = t._self._c;
                    return e("div", {
                        staticClass: "tawk-form-wrapper"
                    }, [e("input", t._b({
                        ref: "input",
                        class: t.inputClasses,
                        style: t.inputCustomStyle,
                        attrs: {
                            role: "input",
                            id: t.inputId,
                            required: t.isRequired,
                            "aria-required": t.isRequired,
                            "aria-placeholder": t.label,
                            "aria-label": (null === t.label || 0 === t.label.length) && "Input field",
                            "aria-labellby": !(null === t.label || !t.label.length) && t.inputId,
                            "aria-invalid": !(!t.invalidType || !t.invalidType.length) || null
                        },
                        domProps: {
                            value: t.value
                        },
                        on: {
                            focus: t.setActive,
                            blur: t.unsetActive,
                            input: t.handleInput
                        }
                    }, "input", t.$attrs, !1)), null !== t.label && t.label.length ? e("label", {
                        ref: "label",
                        class: t.labelClasses,
                        attrs: {
                            for: t.inputId
                        }
                    }, [t.isRequired ? e("span", [t._v("*")]) : t._e(), t._v(" " + t._s(t.label) + " ")]) : t._e(), t.invalidType ? e("small", {
                        staticClass: "tawk-text-red-1 tawk-text-regular-1"
                    }, [t._v(" " + t._s(t.errorLabel) + " ")]) : t._e()])
                }
                ), [], !1, null, null, null)).exports;
                function nt(t) {
                    return getComputedStyle(t)
                }
                function rt(t, e) {
                    for (var n in e) {
                        var r = e[n];
                        "number" == typeof r && (r += "px"),
                        t.style[n] = r
                    }
                    return t
                }
                function it(t) {
                    var e = document.createElement("div");
                    return e.className = t,
                    e
                }
                var ot = "undefined" != typeof Element && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector);
                function at(t, e) {
                    if (!ot)
                        throw new Error("No element matching method supported");
                    return ot.call(t, e)
                }
                function st(t) {
                    t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t)
                }
                function lt(t, e) {
                    return Array.prototype.filter.call(t.children, (function(t) {
                        return at(t, e)
                    }
                    ))
                }
                var ct = "ps"
                  , ut = "ps__rtl"
                  , ht = {
                    thumb: function(t) {
                        return "ps__thumb-" + t
                    },
                    rail: function(t) {
                        return "ps__rail-" + t
                    },
                    consuming: "ps__child--consume"
                }
                  , pt = {
                    focus: "ps--focus",
                    clicking: "ps--clicking",
                    active: function(t) {
                        return "ps--active-" + t
                    },
                    scrolling: function(t) {
                        return "ps--scrolling-" + t
                    }
                }
                  , ft = {
                    x: null,
                    y: null
                };
                function dt(t, e) {
                    var n = t.element.classList
                      , r = pt.scrolling(e);
                    n.contains(r) ? clearTimeout(ft[e]) : n.add(r)
                }
                function gt(t, e) {
                    ft[e] = setTimeout((function() {
                        return t.isAlive && t.element.classList.remove(pt.scrolling(e))
                    }
                    ), t.settings.scrollingThreshold)
                }
                var mt = function(t) {
                    this.element = t,
                    this.handlers = {}
                }
                  , _t = {
                    isEmpty: {
                        configurable: !0
                    }
                };
                mt.prototype.bind = function(t, e) {
                    void 0 === this.handlers[t] && (this.handlers[t] = []),
                    this.handlers[t].push(e),
                    this.element.addEventListener(t, e, !1)
                }
                ,
                mt.prototype.unbind = function(t, e) {
                    var n = this;
                    this.handlers[t] = this.handlers[t].filter((function(r) {
                        return !(!e || r === e) || (n.element.removeEventListener(t, r, !1),
                        !1)
                    }
                    ))
                }
                ,
                mt.prototype.unbindAll = function() {
                    for (var t in this.handlers)
                        this.unbind(t)
                }
                ,
                _t.isEmpty.get = function() {
                    var t = this;
                    return Object.keys(this.handlers).every((function(e) {
                        return 0 === t.handlers[e].length
                    }
                    ))
                }
                ,
                Object.defineProperties(mt.prototype, _t);
                var yt = function() {
                    this.eventElements = []
                };
                function vt(t) {
                    if ("function" == typeof window.CustomEvent)
                        return new CustomEvent(t);
                    var e = document.createEvent("CustomEvent");
                    return e.initCustomEvent(t, !1, !1, void 0),
                    e
                }
                function bt(t, e, n, r, i) {
                    var o;
                    if (void 0 === r && (r = !0),
                    void 0 === i && (i = !1),
                    "top" === e)
                        o = ["contentHeight", "containerHeight", "scrollTop", "y", "up", "down"];
                    else {
                        if ("left" !== e)
                            throw new Error("A proper axis should be provided");
                        o = ["contentWidth", "containerWidth", "scrollLeft", "x", "left", "right"]
                    }
                    !function(t, e, n, r, i) {
                        var o = n[0]
                          , a = n[1]
                          , s = n[2]
                          , l = n[3]
                          , c = n[4]
                          , u = n[5];
                        void 0 === r && (r = !0),
                        void 0 === i && (i = !1);
                        var h = t.element;
                        t.reach[l] = null,
                        h[s] < 1 && (t.reach[l] = "start"),
                        h[s] > t[o] - t[a] - 1 && (t.reach[l] = "end"),
                        e && (h.dispatchEvent(vt("ps-scroll-" + l)),
                        e < 0 ? h.dispatchEvent(vt("ps-scroll-" + c)) : e > 0 && h.dispatchEvent(vt("ps-scroll-" + u)),
                        r && function(t, e) {
                            dt(t, e),
                            gt(t, e)
                        }(t, l)),
                        t.reach[l] && (e || i) && h.dispatchEvent(vt("ps-" + l + "-reach-" + t.reach[l]))
                    }(t, n, o, r, i)
                }
                function wt(t) {
                    return parseInt(t, 10) || 0
                }
                yt.prototype.eventElement = function(t) {
                    var e = this.eventElements.filter((function(e) {
                        return e.element === t
                    }
                    ))[0];
                    return e || (e = new mt(t),
                    this.eventElements.push(e)),
                    e
                }
                ,
                yt.prototype.bind = function(t, e, n) {
                    this.eventElement(t).bind(e, n)
                }
                ,
                yt.prototype.unbind = function(t, e, n) {
                    var r = this.eventElement(t);
                    r.unbind(e, n),
                    r.isEmpty && this.eventElements.splice(this.eventElements.indexOf(r), 1)
                }
                ,
                yt.prototype.unbindAll = function() {
                    this.eventElements.forEach((function(t) {
                        return t.unbindAll()
                    }
                    )),
                    this.eventElements = []
                }
                ,
                yt.prototype.once = function(t, e, n) {
                    var r = this.eventElement(t)
                      , i = function(t) {
                        r.unbind(e, i),
                        n(t)
                    };
                    r.bind(e, i)
                }
                ;
                var kt = {
                    isWebKit: "undefined" != typeof document && "WebkitAppearance"in document.documentElement.style,
                    supportsTouch: "undefined" != typeof window && ("ontouchstart"in window || "maxTouchPoints"in window.navigator && window.navigator.maxTouchPoints > 0 || window.DocumentTouch && document instanceof window.DocumentTouch),
                    supportsIePointer: "undefined" != typeof navigator && navigator.msMaxTouchPoints,
                    isChrome: "undefined" != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent)
                };
                function xt(t) {
                    var e = t.element
                      , n = Math.floor(e.scrollTop)
                      , r = e.getBoundingClientRect();
                    t.containerWidth = Math.round(r.width),
                    t.containerHeight = Math.round(r.height),
                    t.contentWidth = e.scrollWidth,
                    t.contentHeight = e.scrollHeight,
                    e.contains(t.scrollbarXRail) || (lt(e, ht.rail("x")).forEach((function(t) {
                        return st(t)
                    }
                    )),
                    e.appendChild(t.scrollbarXRail)),
                    e.contains(t.scrollbarYRail) || (lt(e, ht.rail("y")).forEach((function(t) {
                        return st(t)
                    }
                    )),
                    e.appendChild(t.scrollbarYRail)),
                    !t.settings.suppressScrollX && t.containerWidth + t.settings.scrollXMarginOffset < t.contentWidth ? (t.scrollbarXActive = !0,
                    t.railXWidth = t.containerWidth - t.railXMarginWidth,
                    t.railXRatio = t.containerWidth / t.railXWidth,
                    t.scrollbarXWidth = St(t, wt(t.railXWidth * t.containerWidth / t.contentWidth)),
                    t.scrollbarXLeft = wt((t.negativeScrollAdjustment + e.scrollLeft) * (t.railXWidth - t.scrollbarXWidth) / (t.contentWidth - t.containerWidth))) : t.scrollbarXActive = !1,
                    !t.settings.suppressScrollY && t.containerHeight + t.settings.scrollYMarginOffset < t.contentHeight ? (t.scrollbarYActive = !0,
                    t.railYHeight = t.containerHeight - t.railYMarginHeight,
                    t.railYRatio = t.containerHeight / t.railYHeight,
                    t.scrollbarYHeight = St(t, wt(t.railYHeight * t.containerHeight / t.contentHeight)),
                    t.scrollbarYTop = wt(n * (t.railYHeight - t.scrollbarYHeight) / (t.contentHeight - t.containerHeight))) : t.scrollbarYActive = !1,
                    t.scrollbarXLeft >= t.railXWidth - t.scrollbarXWidth && (t.scrollbarXLeft = t.railXWidth - t.scrollbarXWidth),
                    t.scrollbarYTop >= t.railYHeight - t.scrollbarYHeight && (t.scrollbarYTop = t.railYHeight - t.scrollbarYHeight),
                    function(t, e) {
                        var n = {
                            width: e.railXWidth
                        }
                          , r = Math.floor(t.scrollTop);
                        e.isRtl ? n.left = e.negativeScrollAdjustment + t.scrollLeft + e.containerWidth - e.contentWidth : n.left = t.scrollLeft,
                        e.isScrollbarXUsingBottom ? n.bottom = e.scrollbarXBottom - r : n.top = e.scrollbarXTop + r,
                        rt(e.scrollbarXRail, n);
                        var i = {
                            top: r,
                            height: e.railYHeight
                        };
                        e.isScrollbarYUsingRight ? e.isRtl ? i.right = e.contentWidth - (e.negativeScrollAdjustment + t.scrollLeft) - e.scrollbarYRight - e.scrollbarYOuterWidth - 9 : i.right = e.scrollbarYRight - t.scrollLeft : e.isRtl ? i.left = e.negativeScrollAdjustment + t.scrollLeft + 2 * e.containerWidth - e.contentWidth - e.scrollbarYLeft - e.scrollbarYOuterWidth : i.left = e.scrollbarYLeft + t.scrollLeft,
                        rt(e.scrollbarYRail, i),
                        rt(e.scrollbarX, {
                            left: e.scrollbarXLeft,
                            width: e.scrollbarXWidth - e.railBorderXWidth
                        }),
                        rt(e.scrollbarY, {
                            top: e.scrollbarYTop,
                            height: e.scrollbarYHeight - e.railBorderYWidth
                        })
                    }(e, t),
                    t.scrollbarXActive ? e.classList.add(pt.active("x")) : (e.classList.remove(pt.active("x")),
                    t.scrollbarXWidth = 0,
                    t.scrollbarXLeft = 0,
                    e.scrollLeft = !0 === t.isRtl ? t.contentWidth : 0),
                    t.scrollbarYActive ? e.classList.add(pt.active("y")) : (e.classList.remove(pt.active("y")),
                    t.scrollbarYHeight = 0,
                    t.scrollbarYTop = 0,
                    e.scrollTop = 0)
                }
                function St(t, e) {
                    return t.settings.minScrollbarLength && (e = Math.max(e, t.settings.minScrollbarLength)),
                    t.settings.maxScrollbarLength && (e = Math.min(e, t.settings.maxScrollbarLength)),
                    e
                }
                function Tt(t, e) {
                    var n = e[0]
                      , r = e[1]
                      , i = e[2]
                      , o = e[3]
                      , a = e[4]
                      , s = e[5]
                      , l = e[6]
                      , c = e[7]
                      , u = e[8]
                      , h = t.element
                      , p = null
                      , f = null
                      , d = null;
                    function g(e) {
                        e.touches && e.touches[0] && (e[i] = e.touches[0].pageY),
                        h[l] = p + d * (e[i] - f),
                        dt(t, c),
                        xt(t),
                        e.stopPropagation(),
                        e.type.startsWith("touch") && e.changedTouches.length > 1 && e.preventDefault()
                    }
                    function m() {
                        gt(t, c),
                        t[u].classList.remove(pt.clicking),
                        t.event.unbind(t.ownerDocument, "mousemove", g)
                    }
                    function _(e, a) {
                        p = h[l],
                        a && e.touches && (e[i] = e.touches[0].pageY),
                        f = e[i],
                        d = (t[r] - t[n]) / (t[o] - t[s]),
                        a ? t.event.bind(t.ownerDocument, "touchmove", g) : (t.event.bind(t.ownerDocument, "mousemove", g),
                        t.event.once(t.ownerDocument, "mouseup", m),
                        e.preventDefault()),
                        t[u].classList.add(pt.clicking),
                        e.stopPropagation()
                    }
                    t.event.bind(t[a], "mousedown", (function(t) {
                        _(t)
                    }
                    )),
                    t.event.bind(t[a], "touchstart", (function(t) {
                        _(t, !0)
                    }
                    ))
                }
                var Ct = {
                    "click-rail": function(t) {
                        t.element,
                        t.event.bind(t.scrollbarY, "mousedown", (function(t) {
                            return t.stopPropagation()
                        }
                        )),
                        t.event.bind(t.scrollbarYRail, "mousedown", (function(e) {
                            var n = e.pageY - window.pageYOffset - t.scrollbarYRail.getBoundingClientRect().top > t.scrollbarYTop ? 1 : -1;
                            t.element.scrollTop += n * t.containerHeight,
                            xt(t),
                            e.stopPropagation()
                        }
                        )),
                        t.event.bind(t.scrollbarX, "mousedown", (function(t) {
                            return t.stopPropagation()
                        }
                        )),
                        t.event.bind(t.scrollbarXRail, "mousedown", (function(e) {
                            var n = e.pageX - window.pageXOffset - t.scrollbarXRail.getBoundingClientRect().left > t.scrollbarXLeft ? 1 : -1;
                            t.element.scrollLeft += n * t.containerWidth,
                            xt(t),
                            e.stopPropagation()
                        }
                        ))
                    },
                    "drag-thumb": function(t) {
                        Tt(t, ["containerWidth", "contentWidth", "pageX", "railXWidth", "scrollbarX", "scrollbarXWidth", "scrollLeft", "x", "scrollbarXRail"]),
                        Tt(t, ["containerHeight", "contentHeight", "pageY", "railYHeight", "scrollbarY", "scrollbarYHeight", "scrollTop", "y", "scrollbarYRail"])
                    },
                    keyboard: function(t) {
                        var e = t.element;
                        t.event.bind(t.ownerDocument, "keydown", (function(n) {
                            if (!(n.isDefaultPrevented && n.isDefaultPrevented() || n.defaultPrevented) && (at(e, ":hover") || at(t.scrollbarX, ":focus") || at(t.scrollbarY, ":focus"))) {
                                var r = document.activeElement ? document.activeElement : t.ownerDocument.activeElement;
                                if (r) {
                                    if ("IFRAME" === r.tagName)
                                        r = r.contentDocument.activeElement;
                                    else
                                        for (; r.shadowRoot; )
                                            r = r.shadowRoot.activeElement;
                                    if (function(t) {
                                        return at(t, "input,[contenteditable]") || at(t, "select,[contenteditable]") || at(t, "textarea,[contenteditable]") || at(t, "button,[contenteditable]")
                                    }(r))
                                        return
                                }
                                var i = 0
                                  , o = 0;
                                switch (n.which) {
                                case 37:
                                    i = n.metaKey ? -t.contentWidth : n.altKey ? -t.containerWidth : -30;
                                    break;
                                case 38:
                                    o = n.metaKey ? t.contentHeight : n.altKey ? t.containerHeight : 30;
                                    break;
                                case 39:
                                    i = n.metaKey ? t.contentWidth : n.altKey ? t.containerWidth : 30;
                                    break;
                                case 40:
                                    o = n.metaKey ? -t.contentHeight : n.altKey ? -t.containerHeight : -30;
                                    break;
                                case 32:
                                    o = n.shiftKey ? t.containerHeight : -t.containerHeight;
                                    break;
                                case 33:
                                    o = t.containerHeight;
                                    break;
                                case 34:
                                    o = -t.containerHeight;
                                    break;
                                case 36:
                                    o = t.contentHeight;
                                    break;
                                case 35:
                                    o = -t.contentHeight;
                                    break;
                                default:
                                    return
                                }
                                t.settings.suppressScrollX && 0 !== i || t.settings.suppressScrollY && 0 !== o || (e.scrollTop -= o,
                                e.scrollLeft += i,
                                xt(t),
                                function(n, r) {
                                    var i = Math.floor(e.scrollTop);
                                    if (0 === n) {
                                        if (!t.scrollbarYActive)
                                            return !1;
                                        if (0 === i && r > 0 || i >= t.contentHeight - t.containerHeight && r < 0)
                                            return !t.settings.wheelPropagation
                                    }
                                    var o = e.scrollLeft;
                                    if (0 === r) {
                                        if (!t.scrollbarXActive)
                                            return !1;
                                        if (0 === o && n < 0 || o >= t.contentWidth - t.containerWidth && n > 0)
                                            return !t.settings.wheelPropagation
                                    }
                                    return !0
                                }(i, o) && n.preventDefault())
                            }
                        }
                        ))
                    },
                    wheel: function(t) {
                        var e = t.element;
                        function n(n) {
                            var r = function(t) {
                                var e = t.deltaX
                                  , n = -1 * t.deltaY;
                                return void 0 !== e && void 0 !== n || (e = -1 * t.wheelDeltaX / 6,
                                n = t.wheelDeltaY / 6),
                                t.deltaMode && 1 === t.deltaMode && (e *= 10,
                                n *= 10),
                                e != e && n != n && (e = 0,
                                n = t.wheelDelta),
                                t.shiftKey ? [-n, -e] : [e, n]
                            }(n)
                              , i = r[0]
                              , o = r[1];
                            if (!function(t, n, r) {
                                if (!kt.isWebKit && e.querySelector("select:focus"))
                                    return !0;
                                if (!e.contains(t))
                                    return !1;
                                for (var i = t; i && i !== e; ) {
                                    if (i.classList.contains(ht.consuming))
                                        return !0;
                                    var o = nt(i);
                                    if (r && o.overflowY.match(/(scroll|auto)/)) {
                                        var a = i.scrollHeight - i.clientHeight;
                                        if (a > 0 && (i.scrollTop > 0 && r < 0 || i.scrollTop < a && r > 0))
                                            return !0
                                    }
                                    if (n && o.overflowX.match(/(scroll|auto)/)) {
                                        var s = i.scrollWidth - i.clientWidth;
                                        if (s > 0 && (i.scrollLeft > 0 && n < 0 || i.scrollLeft < s && n > 0))
                                            return !0
                                    }
                                    i = i.parentNode
                                }
                                return !1
                            }(n.target, i, o)) {
                                var a = !1;
                                t.settings.useBothWheelAxes ? t.scrollbarYActive && !t.scrollbarXActive ? (o ? e.scrollTop -= o * t.settings.wheelSpeed : e.scrollTop += i * t.settings.wheelSpeed,
                                a = !0) : t.scrollbarXActive && !t.scrollbarYActive && (i ? e.scrollLeft += i * t.settings.wheelSpeed : e.scrollLeft -= o * t.settings.wheelSpeed,
                                a = !0) : (e.scrollTop -= o * t.settings.wheelSpeed,
                                e.scrollLeft += i * t.settings.wheelSpeed),
                                xt(t),
                                (a = a || function(n, r) {
                                    var i = Math.floor(e.scrollTop)
                                      , o = 0 === e.scrollTop
                                      , a = i + e.offsetHeight === e.scrollHeight
                                      , s = 0 === e.scrollLeft
                                      , l = e.scrollLeft + e.offsetWidth === e.scrollWidth;
                                    return !(Math.abs(r) > Math.abs(n) ? o || a : s || l) || !t.settings.wheelPropagation
                                }(i, o)) && !n.ctrlKey && (n.stopPropagation(),
                                n.preventDefault())
                            }
                        }
                        void 0 !== window.onwheel ? t.event.bind(e, "wheel", n) : void 0 !== window.onmousewheel && t.event.bind(e, "mousewheel", n)
                    },
                    touch: function(t) {
                        if (kt.supportsTouch || kt.supportsIePointer) {
                            var e = t.element
                              , n = {}
                              , r = 0
                              , i = {}
                              , o = null;
                            kt.supportsTouch ? (t.event.bind(e, "touchstart", u),
                            t.event.bind(e, "touchmove", p),
                            t.event.bind(e, "touchend", f)) : kt.supportsIePointer && (window.PointerEvent ? (t.event.bind(e, "pointerdown", u),
                            t.event.bind(e, "pointermove", p),
                            t.event.bind(e, "pointerup", f)) : window.MSPointerEvent && (t.event.bind(e, "MSPointerDown", u),
                            t.event.bind(e, "MSPointerMove", p),
                            t.event.bind(e, "MSPointerUp", f)))
                        }
                        function a(n, r) {
                            var i = Math.floor(e.scrollTop)
                              , o = e.scrollLeft
                              , a = Math.abs(n)
                              , s = Math.abs(r);
                            if (s > a) {
                                if (r < 0 && i === t.contentHeight - t.containerHeight || r > 0 && 0 === i)
                                    return 0 === window.scrollY && r > 0 && kt.isChrome
                            } else if (a > s && (n < 0 && o === t.contentWidth - t.containerWidth || n > 0 && 0 === o))
                                return !0;
                            return !0
                        }
                        function s(n, r) {
                            e.scrollTop -= r,
                            e.scrollLeft -= n,
                            xt(t)
                        }
                        function l(t) {
                            return t.targetTouches ? t.targetTouches[0] : t
                        }
                        function c(t) {
                            return !(t.pointerType && "pen" === t.pointerType && 0 === t.buttons || (!t.targetTouches || 1 !== t.targetTouches.length) && (!t.pointerType || "mouse" === t.pointerType || t.pointerType === t.MSPOINTER_TYPE_MOUSE))
                        }
                        function u(t) {
                            if (c(t)) {
                                var e = l(t);
                                n.pageX = e.pageX,
                                n.pageY = e.pageY,
                                r = (new Date).getTime(),
                                null !== o && clearInterval(o)
                            }
                        }
                        function h(t, n, r) {
                            if (!e.contains(t))
                                return !1;
                            for (var i = t; i && i !== e; ) {
                                if (i.classList.contains(ht.consuming))
                                    return !0;
                                var o = nt(i);
                                if (r && o.overflowY.match(/(scroll|auto)/)) {
                                    var a = i.scrollHeight - i.clientHeight;
                                    if (a > 0 && (i.scrollTop > 0 && r < 0 || i.scrollTop < a && r > 0))
                                        return !0
                                }
                                if (n && o.overflowX.match(/(scroll|auto)/)) {
                                    var s = i.scrollWidth - i.clientWidth;
                                    if (s > 0 && (i.scrollLeft > 0 && n < 0 || i.scrollLeft < s && n > 0))
                                        return !0
                                }
                                i = i.parentNode
                            }
                            return !1
                        }
                        function p(t) {
                            if (c(t)) {
                                var e = l(t)
                                  , o = {
                                    pageX: e.pageX,
                                    pageY: e.pageY
                                }
                                  , u = o.pageX - n.pageX
                                  , p = o.pageY - n.pageY;
                                if (h(t.target, u, p))
                                    return;
                                s(u, p),
                                n = o;
                                var f = (new Date).getTime()
                                  , d = f - r;
                                d > 0 && (i.x = u / d,
                                i.y = p / d,
                                r = f),
                                a(u, p) && t.preventDefault()
                            }
                        }
                        function f() {
                            t.settings.swipeEasing && (clearInterval(o),
                            o = setInterval((function() {
                                t.isInitialized ? clearInterval(o) : i.x || i.y ? Math.abs(i.x) < .01 && Math.abs(i.y) < .01 ? clearInterval(o) : t.element ? (s(30 * i.x, 30 * i.y),
                                i.x *= .8,
                                i.y *= .8) : clearInterval(o) : clearInterval(o)
                            }
                            ), 10))
                        }
                    }
                }
                  , Ot = function(t, e) {
                    var n = this;
                    if (void 0 === e && (e = {}),
                    "string" == typeof t && (t = document.querySelector(t)),
                    !t || !t.nodeName)
                        throw new Error("no element is specified to initialize PerfectScrollbar");
                    for (var r in this.element = t,
                    t.classList.add(ct),
                    this.settings = {
                        handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
                        maxScrollbarLength: null,
                        minScrollbarLength: null,
                        scrollingThreshold: 1e3,
                        scrollXMarginOffset: 0,
                        scrollYMarginOffset: 0,
                        suppressScrollX: !1,
                        suppressScrollY: !1,
                        swipeEasing: !0,
                        useBothWheelAxes: !1,
                        wheelPropagation: !0,
                        wheelSpeed: 1
                    },
                    e)
                        this.settings[r] = e[r];
                    this.containerWidth = null,
                    this.containerHeight = null,
                    this.contentWidth = null,
                    this.contentHeight = null;
                    var i = function() {
                        return t.classList.add(pt.focus)
                    }
                      , o = function() {
                        return t.classList.remove(pt.focus)
                    };
                    this.isRtl = "rtl" === nt(t).direction,
                    !0 === this.isRtl && t.classList.add(ut),
                    this.isNegativeScroll = function() {
                        var e, n = t.scrollLeft;
                        return t.scrollLeft = -1,
                        e = t.scrollLeft < 0,
                        t.scrollLeft = n,
                        e
                    }(),
                    this.negativeScrollAdjustment = this.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0,
                    this.event = new yt,
                    this.ownerDocument = t.ownerDocument || document,
                    this.scrollbarXRail = it(ht.rail("x")),
                    t.appendChild(this.scrollbarXRail),
                    this.scrollbarX = it(ht.thumb("x")),
                    this.scrollbarXRail.appendChild(this.scrollbarX),
                    this.scrollbarX.setAttribute("tabindex", 0),
                    this.event.bind(this.scrollbarX, "focus", i),
                    this.event.bind(this.scrollbarX, "blur", o),
                    this.scrollbarXActive = null,
                    this.scrollbarXWidth = null,
                    this.scrollbarXLeft = null;
                    var a = nt(this.scrollbarXRail);
                    this.scrollbarXBottom = parseInt(a.bottom, 10),
                    isNaN(this.scrollbarXBottom) ? (this.isScrollbarXUsingBottom = !1,
                    this.scrollbarXTop = wt(a.top)) : this.isScrollbarXUsingBottom = !0,
                    this.railBorderXWidth = wt(a.borderLeftWidth) + wt(a.borderRightWidth),
                    rt(this.scrollbarXRail, {
                        display: "block"
                    }),
                    this.railXMarginWidth = wt(a.marginLeft) + wt(a.marginRight),
                    rt(this.scrollbarXRail, {
                        display: ""
                    }),
                    this.railXWidth = null,
                    this.railXRatio = null,
                    this.scrollbarYRail = it(ht.rail("y")),
                    t.appendChild(this.scrollbarYRail),
                    this.scrollbarY = it(ht.thumb("y")),
                    this.scrollbarYRail.appendChild(this.scrollbarY),
                    this.scrollbarY.setAttribute("tabindex", 0),
                    this.event.bind(this.scrollbarY, "focus", i),
                    this.event.bind(this.scrollbarY, "blur", o),
                    this.scrollbarYActive = null,
                    this.scrollbarYHeight = null,
                    this.scrollbarYTop = null;
                    var s = nt(this.scrollbarYRail);
                    this.scrollbarYRight = parseInt(s.right, 10),
                    isNaN(this.scrollbarYRight) ? (this.isScrollbarYUsingRight = !1,
                    this.scrollbarYLeft = wt(s.left)) : this.isScrollbarYUsingRight = !0,
                    this.scrollbarYOuterWidth = this.isRtl ? function(t) {
                        var e = nt(t);
                        return wt(e.width) + wt(e.paddingLeft) + wt(e.paddingRight) + wt(e.borderLeftWidth) + wt(e.borderRightWidth)
                    }(this.scrollbarY) : null,
                    this.railBorderYWidth = wt(s.borderTopWidth) + wt(s.borderBottomWidth),
                    rt(this.scrollbarYRail, {
                        display: "block"
                    }),
                    this.railYMarginHeight = wt(s.marginTop) + wt(s.marginBottom),
                    rt(this.scrollbarYRail, {
                        display: ""
                    }),
                    this.railYHeight = null,
                    this.railYRatio = null,
                    this.reach = {
                        x: t.scrollLeft <= 0 ? "start" : t.scrollLeft >= this.contentWidth - this.containerWidth ? "end" : null,
                        y: t.scrollTop <= 0 ? "start" : t.scrollTop >= this.contentHeight - this.containerHeight ? "end" : null
                    },
                    this.isAlive = !0,
                    this.settings.handlers.forEach((function(t) {
                        return Ct[t](n)
                    }
                    )),
                    this.lastScrollTop = Math.floor(t.scrollTop),
                    this.lastScrollLeft = t.scrollLeft,
                    this.event.bind(this.element, "scroll", (function(t) {
                        return n.onScroll(t)
                    }
                    )),
                    xt(this)
                };
                Ot.prototype.update = function() {
                    this.isAlive && (this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0,
                    rt(this.scrollbarXRail, {
                        display: "block"
                    }),
                    rt(this.scrollbarYRail, {
                        display: "block"
                    }),
                    this.railXMarginWidth = wt(nt(this.scrollbarXRail).marginLeft) + wt(nt(this.scrollbarXRail).marginRight),
                    this.railYMarginHeight = wt(nt(this.scrollbarYRail).marginTop) + wt(nt(this.scrollbarYRail).marginBottom),
                    rt(this.scrollbarXRail, {
                        display: "none"
                    }),
                    rt(this.scrollbarYRail, {
                        display: "none"
                    }),
                    xt(this),
                    bt(this, "top", 0, !1, !0),
                    bt(this, "left", 0, !1, !0),
                    rt(this.scrollbarXRail, {
                        display: ""
                    }),
                    rt(this.scrollbarYRail, {
                        display: ""
                    }))
                }
                ,
                Ot.prototype.onScroll = function(t) {
                    this.isAlive && (xt(this),
                    bt(this, "top", this.element.scrollTop - this.lastScrollTop),
                    bt(this, "left", this.element.scrollLeft - this.lastScrollLeft),
                    this.lastScrollTop = Math.floor(this.element.scrollTop),
                    this.lastScrollLeft = this.element.scrollLeft)
                }
                ,
                Ot.prototype.destroy = function() {
                    this.isAlive && (this.event.unbindAll(),
                    st(this.scrollbarX),
                    st(this.scrollbarY),
                    st(this.scrollbarXRail),
                    st(this.scrollbarYRail),
                    this.removePsClasses(),
                    this.element = null,
                    this.scrollbarX = null,
                    this.scrollbarY = null,
                    this.scrollbarXRail = null,
                    this.scrollbarYRail = null,
                    this.isAlive = !1)
                }
                ,
                Ot.prototype.removePsClasses = function() {
                    this.element.className = this.element.className.split(" ").filter((function(t) {
                        return !t.match(/^ps([-_].+|)$/)
                    }
                    )).join(" ")
                }
                ;
                var Et, Lt, jt = Ot, Rt = {
                    inserted: function(t, e, n) {
                        if (!t.$scrollbar) {
                            if (n.context && n.context.$store) {
                                if (n.context.$store.getters["browserData/mobileBrowserName"])
                                    return;
                                if ("mac" === (n.context.$store.getters["browserData/os"] ? n.context.$store.getters["browserData/os"].identity : ""))
                                    return
                            }
                            var r = e.value || {};
                            t.$scrollbar = new jt(t,r),
                            t.style.marginRight = "".concat(-1 * (t.offsetWidth - t.clientWidth), "px"),
                            t.ownerDocument.addEventListener("keydown", (function(e) {
                                var n = 0;
                                if (t.$scrollbar)
                                    switch (e.which) {
                                    case 38:
                                        n = e.metaKey ? t.$scrollbar.contentHeight : e.altKey ? t.$scrollbar.containerHeight : 30;
                                        break;
                                    case 40:
                                        n = e.metaKey ? -t.$scrollbar.contentHeight : e.altKey ? -t.$scrollbar.containerHeight : -30;
                                        break;
                                    case 32:
                                        n = e.shiftKey ? t.$scrollbar.containerHeight : -t.$scrollbar.containerHeight;
                                        break;
                                    case 33:
                                        n = t.$scrollbar.containerHeight;
                                        break;
                                    case 34:
                                        n = -t.$scrollbar.containerHeight;
                                        break;
                                    case 36:
                                        n = t.$scrollbar.contentHeight;
                                        break;
                                    case 35:
                                        n = -t.$scrollbar.contentHeight;
                                        break;
                                    default:
                                        return
                                    }
                                t.scrollTop -= n
                            }
                            ))
                        }
                    },
                    unbind: function(t) {
                        t.$scrollbar && (t.$scrollbar.destroy(),
                        delete t.$scrollbar)
                    }
                }, At = {
                    name: "tawk-emoji-picker",
                    mixins: [K],
                    components: {
                        TawkEmoji: J,
                        TawkEmojiGroup: G,
                        TawkEmojiPreview: Q,
                        TawkInput: et
                    },
                    data: function() {
                        return {
                            categories: {
                                people: {
                                    name: "Smileys & People",
                                    emoji: "1f603",
                                    header: ":smiley:",
                                    content: [":grinning:", ":grin:", ":joy:", ":rofl:", ":smiley:", ":smile:", ":sweat_smile:", ":laughing:", ":wink:", ":blush:", ":yum:", ":sunglasses:", ":heart_eyes:", ":kissing_heart:", ":kissing:", ":kissing_smiling_eyes:", ":kissing_closed_eyes:", ":relaxed:", ":slight_smile:", ":hugging:", ":thinking:", ":neutral_face:", ":expressionless:", ":no_mouth:", ":rolling_eyes:", ":smirk:", ":persevere:", ":disappointed_relieved:", ":open_mouth:", ":zipper_mouth:", ":hushed:", ":sleepy:", ":tired_face:", ":sleeping:", ":relieved:", ":nerd:", ":stuck_out_tongue:", ":stuck_out_tongue_winking_eye:", ":stuck_out_tongue_closed_eyes:", ":drooling_face:", ":unamused:", ":sweat:", ":pensive:", ":confused:", ":upside_down:", ":money_mouth:", ":astonished:", ":frowning2:", ":slight_frown:", ":confounded:", ":disappointed:", ":worried:", ":triumph:", ":cry:", ":sob:", ":frowning:", ":anguished:", ":fearful:", ":weary:", ":grimacing:", ":cold_sweat:", ":scream:", ":flushed:", ":dizzy_face:", ":rage:", ":angry:", ":innocent:", ":cowboy:", ":clown:", ":lying_face:", ":mask:", ":thermometer_face:", ":head_bandage:", ":nauseated_face:", ":sneezing_face:", ":smiling_imp:", ":imp:", ":japanese_ogre:", ":japanese_goblin:", ":skull:", ":ghost:", ":alien:", ":robot:", ":poop:", ":smiley_cat:", ":smile_cat:", ":joy_cat:", ":heart_eyes_cat:", ":smirk_cat:", ":kissing_cat:", ":scream_cat:", ":crying_cat_face:", ":pouting_cat:", ":boy:", ":boy_tone1:", ":boy_tone2:", ":boy_tone3:", ":boy_tone4:", ":boy_tone5:", ":girl:", ":girl_tone1:", ":girl_tone2:", ":girl_tone3:", ":girl_tone4:", ":girl_tone5:", ":man:", ":man_tone1:", ":man_tone2:", ":man_tone3:", ":man_tone4:", ":man_tone5:", ":woman:", ":woman_tone1:", ":woman_tone2:", ":woman_tone3:", ":woman_tone4:", ":woman_tone5:", ":older_man:", ":older_man_tone1:", ":older_man_tone2:", ":older_man_tone3:", ":older_man_tone4:", ":older_man_tone5:", ":older_woman:", ":older_woman_tone1:", ":older_woman_tone2:", ":older_woman_tone3:", ":older_woman_tone4:", ":older_woman_tone5:", ":baby:", ":baby_tone1:", ":baby_tone2:", ":baby_tone3:", ":baby_tone4:", ":baby_tone5:", ":angel:", ":angel_tone1:", ":angel_tone2:", ":angel_tone3:", ":angel_tone4:", ":angel_tone5:", ":cop:", ":cop_tone1:", ":cop_tone2:", ":cop_tone3:", ":cop_tone4:", ":cop_tone5:", ":spy:", ":spy_tone1:", ":spy_tone2:", ":spy_tone3:", ":spy_tone4:", ":spy_tone5:", ":guardsman:", ":guardsman_tone1:", ":guardsman_tone2:", ":guardsman_tone3:", ":guardsman_tone4:", ":guardsman_tone5:", ":construction_worker:", ":construction_worker_tone1:", ":construction_worker_tone2:", ":construction_worker_tone3:", ":construction_worker_tone4:", ":construction_worker_tone5:", ":man_with_turban:", ":man_with_turban_tone1:", ":man_with_turban_tone2:", ":man_with_turban_tone3:", ":man_with_turban_tone4:", ":man_with_turban_tone5:", ":person_with_blond_hair:", ":person_with_blond_hair_tone1:", ":person_with_blond_hair_tone2:", ":person_with_blond_hair_tone3:", ":person_with_blond_hair_tone4:", ":person_with_blond_hair_tone5:", ":santa:", ":santa_tone1:", ":santa_tone2:", ":santa_tone3:", ":santa_tone4:", ":santa_tone5:", ":mrs_claus:", ":mrs_claus_tone1:", ":mrs_claus_tone2:", ":mrs_claus_tone3:", ":mrs_claus_tone4:", ":mrs_claus_tone5:", ":princess:", ":princess_tone1:", ":princess_tone2:", ":princess_tone3:", ":princess_tone4:", ":princess_tone5:", ":prince:", ":prince_tone1:", ":prince_tone2:", ":prince_tone3:", ":prince_tone4:", ":prince_tone5:", ":bride_with_veil:", ":bride_with_veil_tone1:", ":bride_with_veil_tone2:", ":bride_with_veil_tone3:", ":bride_with_veil_tone4:", ":bride_with_veil_tone5:", ":man_in_tuxedo:", ":man_in_tuxedo_tone1:", ":man_in_tuxedo_tone2:", ":man_in_tuxedo_tone3:", ":man_in_tuxedo_tone4:", ":man_in_tuxedo_tone5:", ":pregnant_woman:", ":pregnant_woman_tone1:", ":pregnant_woman_tone2:", ":pregnant_woman_tone3:", ":pregnant_woman_tone4:", ":pregnant_woman_tone5:", ":man_with_gua_pi_mao:", ":man_with_gua_pi_mao_tone1:", ":man_with_gua_pi_mao_tone2:", ":man_with_gua_pi_mao_tone3:", ":man_with_gua_pi_mao_tone4:", ":man_with_gua_pi_mao_tone5:", ":person_frowning:", ":person_frowning_tone1:", ":person_frowning_tone2:", ":person_frowning_tone3:", ":person_frowning_tone4:", ":person_frowning_tone5:", ":person_with_pouting_face:", ":person_with_pouting_face_tone1:", ":person_with_pouting_face_tone2:", ":person_with_pouting_face_tone3:", ":person_with_pouting_face_tone4:", ":person_with_pouting_face_tone5:", ":no_good:", ":no_good_tone1:", ":no_good_tone2:", ":no_good_tone3:", ":no_good_tone4:", ":no_good_tone5:", ":ok_woman:", ":ok_woman_tone1:", ":ok_woman_tone2:", ":ok_woman_tone3:", ":ok_woman_tone4:", ":ok_woman_tone5:", ":information_desk_person:", ":information_desk_person_tone1:", ":information_desk_person_tone2:", ":information_desk_person_tone3:", ":information_desk_person_tone4:", ":information_desk_person_tone5:", ":raising_hand:", ":raising_hand_tone1:", ":raising_hand_tone2:", ":raising_hand_tone3:", ":raising_hand_tone4:", ":raising_hand_tone5:", ":bow:", ":bow_tone1:", ":bow_tone2:", ":bow_tone3:", ":bow_tone4:", ":bow_tone5:", ":face_palm:", ":face_palm_tone1:", ":face_palm_tone2:", ":face_palm_tone3:", ":face_palm_tone4:", ":face_palm_tone5:", ":shrug:", ":shrug_tone1:", ":shrug_tone2:", ":shrug_tone3:", ":shrug_tone4:", ":shrug_tone5:", ":massage:", ":massage_tone1:", ":massage_tone2:", ":massage_tone3:", ":massage_tone4:", ":massage_tone5:", ":haircut:", ":haircut_tone1:", ":haircut_tone2:", ":haircut_tone3:", ":haircut_tone4:", ":haircut_tone5:", ":walking:", ":walking_tone1:", ":walking_tone2:", ":walking_tone3:", ":walking_tone4:", ":walking_tone5:", ":runner:", ":runner_tone1:", ":runner_tone2:", ":runner_tone3:", ":runner_tone4:", ":runner_tone5:", ":dancer:", ":dancer_tone1:", ":dancer_tone2:", ":dancer_tone3:", ":dancer_tone4:", ":dancer_tone5:", ":man_dancing:", ":man_dancing_tone1:", ":man_dancing_tone2:", ":man_dancing_tone3:", ":man_dancing_tone4:", ":man_dancing_tone5:", ":dancers:", ":speaking_head:", ":bust_in_silhouette:", ":busts_in_silhouette:", ":couple:", ":two_men_holding_hands:", ":two_women_holding_hands:", ":couplekiss:", ":kiss_mm:", ":kiss_ww:", ":couple_with_heart:", ":couple_mm:", ":couple_ww:", ":family:", ":family_mwg:", ":family_mwgb:", ":family_mwbb:", ":family_mwgg:", ":family_mmb:", ":family_mmg:", ":family_mmgb:", ":family_mmbb:", ":family_mmgg:", ":family_wwb:", ":family_wwg:", ":family_wwgb:", ":family_wwbb:", ":family_wwgg:", ":muscle:", ":muscle_tone1:", ":muscle_tone2:", ":muscle_tone3:", ":muscle_tone4:", ":muscle_tone5:", ":selfie:", ":selfie_tone1:", ":selfie_tone2:", ":selfie_tone3:", ":selfie_tone4:", ":selfie_tone5:", ":point_left:", ":point_left_tone1:", ":point_left_tone2:", ":point_left_tone3:", ":point_left_tone4:", ":point_left_tone5:", ":point_right:", ":point_right_tone1:", ":point_right_tone2:", ":point_right_tone3:", ":point_right_tone4:", ":point_right_tone5:", ":point_up:", ":point_up_tone1:", ":point_up_tone2:", ":point_up_tone3:", ":point_up_tone4:", ":point_up_tone5:", ":point_up_2:", ":point_up_2_tone1:", ":point_up_2_tone2:", ":point_up_2_tone3:", ":point_up_2_tone4:", ":point_up_2_tone5:", ":middle_finger:", ":middle_finger_tone1:", ":middle_finger_tone2:", ":middle_finger_tone3:", ":middle_finger_tone4:", ":middle_finger_tone5:", ":point_down:", ":point_down_tone1:", ":point_down_tone2:", ":point_down_tone3:", ":point_down_tone4:", ":point_down_tone5:", ":v:", ":v_tone1:", ":v_tone2:", ":v_tone3:", ":v_tone4:", ":v_tone5:", ":fingers_crossed:", ":fingers_crossed_tone1:", ":fingers_crossed_tone2:", ":fingers_crossed_tone3:", ":fingers_crossed_tone4:", ":fingers_crossed_tone5:", ":vulcan:", ":vulcan_tone1:", ":vulcan_tone2:", ":vulcan_tone3:", ":vulcan_tone4:", ":vulcan_tone5:", ":metal:", ":metal_tone1:", ":metal_tone2:", ":metal_tone3:", ":metal_tone4:", ":metal_tone5:", ":call_me:", ":call_me_tone1:", ":call_me_tone2:", ":call_me_tone3:", ":call_me_tone4:", ":call_me_tone5:", ":hand_splayed:", ":hand_splayed_tone1:", ":hand_splayed_tone2:", ":hand_splayed_tone3:", ":hand_splayed_tone4:", ":hand_splayed_tone5:", ":raised_hand:", ":raised_hand_tone1:", ":raised_hand_tone2:", ":raised_hand_tone3:", ":raised_hand_tone4:", ":raised_hand_tone5:", ":ok_hand:", ":ok_hand_tone1:", ":ok_hand_tone2:", ":ok_hand_tone3:", ":ok_hand_tone4:", ":ok_hand_tone5:", ":thumbsup:", ":thumbsup_tone1:", ":thumbsup_tone2:", ":thumbsup_tone3:", ":thumbsup_tone4:", ":thumbsup_tone5:", ":thumbsdown:", ":thumbsdown_tone1:", ":thumbsdown_tone2:", ":thumbsdown_tone3:", ":thumbsdown_tone4:", ":thumbsdown_tone5:", ":fist:", ":fist_tone1:", ":fist_tone2:", ":fist_tone3:", ":fist_tone4:", ":fist_tone5:", ":punch:", ":punch_tone1:", ":punch_tone2:", ":punch_tone3:", ":punch_tone4:", ":punch_tone5:", ":left_facing_fist:", ":left_facing_fist_tone1:", ":left_facing_fist_tone2:", ":left_facing_fist_tone3:", ":left_facing_fist_tone4:", ":left_facing_fist_tone5:", ":right_facing_fist:", ":right_facing_fist_tone1:", ":right_facing_fist_tone2:", ":right_facing_fist_tone3:", ":right_facing_fist_tone4:", ":right_facing_fist_tone5:", ":raised_back_of_hand:", ":raised_back_of_hand_tone1:", ":raised_back_of_hand_tone2:", ":raised_back_of_hand_tone3:", ":raised_back_of_hand_tone4:", ":raised_back_of_hand_tone5:", ":wave:", ":wave_tone1:", ":wave_tone2:", ":wave_tone3:", ":wave_tone4:", ":wave_tone5:", ":clap:", ":clap_tone1:", ":clap_tone2:", ":clap_tone3:", ":clap_tone4:", ":clap_tone5:", ":writing_hand:", ":writing_hand_tone1:", ":writing_hand_tone2:", ":writing_hand_tone3:", ":writing_hand_tone4:", ":writing_hand_tone5:", ":open_hands:", ":open_hands_tone1:", ":open_hands_tone2:", ":open_hands_tone3:", ":open_hands_tone4:", ":open_hands_tone5:", ":raised_hands:", ":raised_hands_tone1:", ":raised_hands_tone2:", ":raised_hands_tone3:", ":raised_hands_tone4:", ":raised_hands_tone5:", ":pray:", ":pray_tone1:", ":pray_tone2:", ":pray_tone3:", ":pray_tone4:", ":pray_tone5:", ":handshake:", ":handshake_tone1:", ":handshake_tone2:", ":handshake_tone3:", ":handshake_tone4:", ":handshake_tone5:", ":nail_care:", ":nail_care_tone1:", ":nail_care_tone2:", ":nail_care_tone3:", ":nail_care_tone4:", ":nail_care_tone5:", ":ear:", ":ear_tone1:", ":ear_tone2:", ":ear_tone3:", ":ear_tone4:", ":ear_tone5:", ":nose:", ":nose_tone1:", ":nose_tone2:", ":nose_tone3:", ":nose_tone4:", ":nose_tone5:", ":footprints:", ":eyes:", ":eye:", ":tongue:", ":lips:", ":kiss:", ":zzz:", ":eyeglasses:", ":dark_sunglasses:", ":necktie:", ":shirt:", ":jeans:", ":dress:", ":kimono:", ":bikini:", ":womans_clothes:", ":purse:", ":handbag:", ":pouch:", ":school_satchel:", ":mans_shoe:", ":athletic_shoe:", ":high_heel:", ":sandal:", ":boot:", ":crown:", ":womans_hat:", ":tophat:", ":mortar_board:", ":helmet_with_cross:", ":lipstick:", ":ring:", ":closed_umbrella:", ":briefcase:"],
                                    show: !1
                                },
                                nature: {
                                    name: "Animals & Nature",
                                    emoji: "1f340",
                                    header: ":four_leaf_clover:",
                                    content: [":see_no_evil:", ":hear_no_evil:", ":speak_no_evil:", ":sweat_drops:", ":dash:", ":monkey_face:", ":monkey:", ":gorilla:", ":dog:", ":dog2:", ":poodle:", ":wolf:", ":fox:", ":cat:", ":cat2:", ":lion_face:", ":tiger:", ":tiger2:", ":leopard:", ":horse:", ":racehorse:", ":deer:", ":unicorn:", ":cow:", ":ox:", ":water_buffalo:", ":cow2:", ":pig:", ":pig2:", ":boar:", ":pig_nose:", ":ram:", ":sheep:", ":goat:", ":dromedary_camel:", ":camel:", ":elephant:", ":rhino:", ":mouse:", ":mouse2:", ":rat:", ":hamster:", ":rabbit:", ":rabbit2:", ":chipmunk:", ":bat:", ":bear:", ":koala:", ":panda_face:", ":feet:", ":turkey:", ":chicken:", ":rooster:", ":hatching_chick:", ":baby_chick:", ":hatched_chick:", ":bird:", ":penguin:", ":dove:", ":eagle:", ":duck:", ":owl:", ":frog:", ":crocodile:", ":turtle:", ":lizard:", ":snake:", ":dragon_face:", ":dragon:", ":whale:", ":whale2:", ":dolphin:", ":fish:", ":tropical_fish:", ":blowfish:", ":shark:", ":octopus:", ":shell:", ":crab:", ":shrimp:", ":squid:", ":butterfly:", ":snail:", ":bug:", ":ant:", ":bee:", ":beetle:", ":spider:", ":spider_web:", ":scorpion:", ":bouquet:", ":cherry_blossom:", ":rosette:", ":rose:", ":wilted_rose:", ":hibiscus:", ":sunflower:", ":blossom:", ":tulip:", ":seedling:", ":evergreen_tree:", ":deciduous_tree:", ":palm_tree:", ":cactus:", ":ear_of_rice:", ":herb:", ":shamrock:", ":four_leaf_clover:", ":maple_leaf:", ":fallen_leaf:", ":leaves:", ":mushroom:", ":chestnut:", ":earth_africa:", ":earth_americas:", ":earth_asia:", ":new_moon:", ":waxing_crescent_moon:", ":first_quarter_moon:", ":waxing_gibbous_moon:", ":full_moon:", ":waning_gibbous_moon:", ":last_quarter_moon:", ":waning_crescent_moon:", ":crescent_moon:", ":new_moon_with_face:", ":first_quarter_moon_with_face:", ":last_quarter_moon_with_face:", ":sunny:", ":full_moon_with_face:", ":sun_with_face:", ":star:", ":star2:", ":cloud:", ":partly_sunny:", ":thunder_cloud_rain:", ":white_sun_small_cloud:", ":white_sun_cloud:", ":white_sun_rain_cloud:", ":cloud_rain:", ":cloud_snow:", ":cloud_lightning:", ":cloud_tornado:", ":fog:", ":wind_blowing_face:", ":umbrella2:", ":umbrella:", ":zap:", ":snowflake:", ":snowman2:", ":snowman:", ":comet:", ":fire:", ":droplet:", ":ocean:", ":jack_o_lantern:", ":christmas_tree:", ":sparkles:", ":tanabata_tree:", ":bamboo:"],
                                    show: !1
                                },
                                foods: {
                                    name: "Food & Drink",
                                    emoji: "1f354",
                                    header: ":hamburger:",
                                    content: [":grapes:", ":melon:", ":watermelon:", ":tangerine:", ":lemon:", ":banana:", ":pineapple:", ":apple:", ":green_apple:", ":pear:", ":peach:", ":cherries:", ":strawberry:", ":kiwi:", ":tomato:", ":avocado:", ":eggplant:", ":potato:", ":carrot:", ":corn:", ":hot_pepper:", ":cucumber:", ":peanuts:", ":bread:", ":croissant:", ":french_bread:", ":pancakes:", ":cheese:", ":meat_on_bone:", ":poultry_leg:", ":bacon:", ":hamburger:", ":fries:", ":pizza:", ":hotdog:", ":taco:", ":burrito:", ":stuffed_flatbread:", ":egg:", ":cooking:", ":shallow_pan_of_food:", ":stew:", ":salad:", ":popcorn:", ":bento:", ":rice_cracker:", ":rice_ball:", ":rice:", ":curry:", ":ramen:", ":spaghetti:", ":sweet_potato:", ":oden:", ":sushi:", ":fried_shrimp:", ":fish_cake:", ":dango:", ":icecream:", ":shaved_ice:", ":ice_cream:", ":doughnut:", ":cookie:", ":birthday:", ":cake:", ":chocolate_bar:", ":candy:", ":lollipop:", ":custard:", ":honey_pot:", ":baby_bottle:", ":milk:", ":coffee:", ":tea:", ":sake:", ":champagne:", ":wine_glass:", ":cocktail:", ":tropical_drink:", ":beer:", ":beers:", ":champagne_glass:", ":tumbler_glass:", ":fork_knife_plate:", ":fork_and_knife:", ":spoon:"],
                                    show: !1
                                },
                                activity: {
                                    name: "Activities",
                                    emoji: "1f3c8",
                                    header: ":football:",
                                    content: [":space_invader:", ":levitate:", ":fencer:", ":horse_racing:", ":horse_racing_tone1:", ":horse_racing_tone2:", ":horse_racing_tone3:", ":horse_racing_tone4:", ":horse_racing_tone5:", ":skier:", ":snowboarder:", ":golfer:", ":surfer:", ":surfer_tone1:", ":surfer_tone2:", ":surfer_tone3:", ":surfer_tone4:", ":surfer_tone5:", ":rowboat:", ":rowboat_tone1:", ":rowboat_tone2:", ":rowboat_tone3:", ":rowboat_tone4:", ":rowboat_tone5:", ":swimmer:", ":swimmer_tone1:", ":swimmer_tone2:", ":swimmer_tone3:", ":swimmer_tone4:", ":swimmer_tone5:", ":basketball_player:", ":basketball_player_tone1:", ":basketball_player_tone2:", ":basketball_player_tone3:", ":basketball_player_tone4:", ":basketball_player_tone5:", ":lifter:", ":lifter_tone1:", ":lifter_tone2:", ":lifter_tone3:", ":lifter_tone4:", ":lifter_tone5:", ":bicyclist:", ":bicyclist_tone1:", ":bicyclist_tone2:", ":bicyclist_tone3:", ":bicyclist_tone4:", ":bicyclist_tone5:", ":mountain_bicyclist:", ":mountain_bicyclist_tone1:", ":mountain_bicyclist_tone2:", ":mountain_bicyclist_tone3:", ":mountain_bicyclist_tone4:", ":mountain_bicyclist_tone5:", ":cartwheel:", ":cartwheel_tone1:", ":cartwheel_tone2:", ":cartwheel_tone3:", ":cartwheel_tone4:", ":cartwheel_tone5:", ":wrestlers:", ":wrestlers_tone1:", ":wrestlers_tone2:", ":wrestlers_tone3:", ":wrestlers_tone4:", ":wrestlers_tone5:", ":water_polo:", ":water_polo_tone1:", ":water_polo_tone2:", ":water_polo_tone3:", ":water_polo_tone4:", ":water_polo_tone5:", ":handball:", ":handball_tone1:", ":handball_tone2:", ":handball_tone3:", ":handball_tone4:", ":handball_tone5:", ":juggling:", ":juggling_tone1:", ":juggling_tone2:", ":juggling_tone3:", ":juggling_tone4:", ":juggling_tone5:", ":circus_tent:", ":performing_arts:", ":art:", ":slot_machine:", ":bath:", ":bath_tone1:", ":bath_tone2:", ":bath_tone3:", ":bath_tone4:", ":bath_tone5:", ":reminder_ribbon:", ":tickets:", ":ticket:", ":military_medal:", ":trophy:", ":medal:", ":first_place:", ":second_place:", ":third_place:", ":soccer:", ":baseball:", ":basketball:", ":volleyball:", ":football:", ":rugby_football:", ":tennis:", ":8ball:", ":bowling:", ":cricket:", ":field_hockey:", ":hockey:", ":ping_pong:", ":badminton:", ":boxing_glove:", ":martial_arts_uniform:", ":goal:", ":dart:", ":golf:", ":ice_skate:", ":fishing_pole_and_fish:", ":running_shirt_with_sash:", ":ski:", ":video_game:", ":game_die:", ":musical_score:", ":microphone:", ":headphones:", ":saxophone:", ":guitar:", ":musical_keyboard:", ":trumpet:", ":violin:", ":drum:", ":clapper:", ":bow_and_arrow:"],
                                    show: !1
                                },
                                travel: {
                                    name: "Travel & Places",
                                    emoji: "1f697",
                                    header: ":red_car:",
                                    content: [":race_car:", ":motorcycle:", ":japan:", ":mountain_snow:", ":mountain:", ":volcano:", ":mount_fuji:", ":camping:", ":beach:", ":desert:", ":island:", ":park:", ":stadium:", ":classical_building:", ":construction_site:", ":homes:", ":cityscape:", ":house_abandoned:", ":house:", ":house_with_garden:", ":office:", ":post_office:", ":european_post_office:", ":hospital:", ":bank:", ":hotel:", ":love_hotel:", ":convenience_store:", ":school:", ":department_store:", ":factory:", ":japanese_castle:", ":european_castle:", ":wedding:", ":tokyo_tower:", ":statue_of_liberty:", ":church:", ":mosque:", ":synagogue:", ":shinto_shrine:", ":kaaba:", ":fountain:", ":tent:", ":foggy:", ":night_with_stars:", ":sunrise_over_mountains:", ":sunrise:", ":city_dusk:", ":city_sunset:", ":bridge_at_night:", ":milky_way:", ":carousel_horse:", ":ferris_wheel:", ":roller_coaster:", ":steam_locomotive:", ":railway_car:", ":bullettrain_side:", ":bullettrain_front:", ":train2:", ":metro:", ":light_rail:", ":station:", ":tram:", ":monorail:", ":mountain_railway:", ":train:", ":bus:", ":oncoming_bus:", ":trolleybus:", ":minibus:", ":ambulance:", ":fire_engine:", ":police_car:", ":oncoming_police_car:", ":taxi:", ":oncoming_taxi:", ":red_car:", ":oncoming_automobile:", ":blue_car:", ":truck:", ":articulated_lorry:", ":tractor:", ":bike:", ":scooter:", ":motor_scooter:", ":busstop:", ":motorway:", ":railway_track:", ":fuelpump:", ":rotating_light:", ":traffic_light:", ":vertical_traffic_light:", ":construction:", ":anchor:", ":sailboat:", ":canoe:", ":speedboat:", ":cruise_ship:", ":ferry:", ":motorboat:", ":ship:", ":airplane:", ":airplane_small:", ":airplane_departure:", ":airplane_arriving:", ":seat:", ":helicopter:", ":suspension_railway:", ":mountain_cableway:", ":aerial_tramway:", ":rocket:", ":satellite_orbital:", ":stars:", ":rainbow:", ":fireworks:", ":sparkler:", ":rice_scene:", ":checkered_flag:"],
                                    show: !1
                                },
                                objects: {
                                    name: "Objects",
                                    emoji: "1f4a1",
                                    header: ":bulb:",
                                    content: [":skull_crossbones:", ":love_letter:", ":bomb:", ":hole:", ":shopping_bags:", ":prayer_beads:", ":gem:", ":knife:", ":amphora:", ":map:", ":barber:", ":frame_photo:", ":bellhop:", ":door:", ":sleeping_accommodation:", ":bed:", ":couch:", ":toilet:", ":shower:", ":bathtub:", ":hourglass:", ":hourglass_flowing_sand:", ":watch:", ":alarm_clock:", ":stopwatch:", ":timer:", ":clock:", ":thermometer:", ":beach_umbrella:", ":balloon:", ":tada:", ":confetti_ball:", ":dolls:", ":flags:", ":wind_chime:", ":ribbon:", ":gift:", ":joystick:", ":postal_horn:", ":microphone2:", ":level_slider:", ":control_knobs:", ":radio:", ":iphone:", ":calling:", ":telephone:", ":telephone_receiver:", ":pager:", ":fax:", ":battery:", ":electric_plug:", ":computer:", ":desktop:", ":printer:", ":keyboard:", ":mouse_three_button:", ":trackball:", ":minidisc:", ":floppy_disk:", ":cd:", ":dvd:", ":movie_camera:", ":film_frames:", ":projector:", ":tv:", ":camera:", ":camera_with_flash:", ":video_camera:", ":vhs:", ":mag:", ":mag_right:", ":microscope:", ":telescope:", ":satellite:", ":candle:", ":bulb:", ":flashlight:", ":izakaya_lantern:", ":notebook_with_decorative_cover:", ":closed_book:", ":book:", ":green_book:", ":blue_book:", ":orange_book:", ":books:", ":notebook:", ":ledger:", ":page_with_curl:", ":scroll:", ":page_facing_up:", ":newspaper:", ":newspaper2:", ":bookmark_tabs:", ":bookmark:", ":label:", ":moneybag:", ":yen:", ":dollar:", ":euro:", ":pound:", ":money_with_wings:", ":credit_card:", ":envelope:", ":e-mail:", ":incoming_envelope:", ":envelope_with_arrow:", ":outbox_tray:", ":inbox_tray:", ":package:", ":mailbox:", ":mailbox_closed:", ":mailbox_with_mail:", ":mailbox_with_no_mail:", ":postbox:", ":ballot_box:", ":pencil2:", ":black_nib:", ":pen_fountain:", ":pen_ballpoint:", ":paintbrush:", ":crayon:", ":pencil:", ":file_folder:", ":open_file_folder:", ":dividers:", ":date:", ":calendar:", ":notepad_spiral:", ":calendar_spiral:", ":card_index:", ":chart_with_upwards_trend:", ":chart_with_downwards_trend:", ":bar_chart:", ":clipboard:", ":pushpin:", ":round_pushpin:", ":paperclip:", ":paperclips:", ":straight_ruler:", ":triangular_ruler:", ":scissors:", ":card_box:", ":file_cabinet:", ":wastebasket:", ":lock:", ":unlock:", ":lock_with_ink_pen:", ":closed_lock_with_key:", ":key:", ":key2:", ":hammer:", ":pick:", ":hammer_pick:", ":tools:", ":dagger:", ":crossed_swords:", ":gun:", ":shield:", ":wrench:", ":nut_and_bolt:", ":gear:", ":compression:", ":alembic:", ":scales:", ":link:", ":chains:", ":syringe:", ":pill:", ":smoking:", ":coffin:", ":urn:", ":moyai:", ":oil:", ":crystal_ball:", ":shopping_cart:", ":triangular_flag_on_post:", ":crossed_flags:", ":flag_black:", ":flag_white:", ":rainbow_flag:"],
                                    show: !1
                                },
                                symbols: {
                                    name: "Symbols",
                                    emoji: "0023-20e3",
                                    header: ":hash:",
                                    content: [":100:", ":1234:", ":eye_in_speech_bubble:", ":cupid:", ":heart:", ":heartbeat:", ":broken_heart:", ":two_hearts:", ":sparkling_heart:", ":heartpulse:", ":blue_heart:", ":green_heart:", ":yellow_heart:", ":purple_heart:", ":black_heart:", ":gift_heart:", ":revolving_hearts:", ":heart_decoration:", ":heart_exclamation:", ":anger:", ":boom:", ":dizzy:", ":speech_balloon:", ":speech_left:", ":anger_right:", ":thought_balloon:", ":white_flower:", ":globe_with_meridians:", ":hotsprings:", ":octagonal_sign:", ":clock12:", ":clock1230:", ":clock1:", ":clock130:", ":clock2:", ":clock230:", ":clock3:", ":clock330:", ":clock4:", ":clock430:", ":clock5:", ":clock530:", ":clock6:", ":clock630:", ":clock7:", ":clock730:", ":clock8:", ":clock830:", ":clock9:", ":clock930:", ":clock10:", ":clock1030:", ":clock11:", ":clock1130:", ":cyclone:", ":spades:", ":hearts:", ":diamonds:", ":clubs:", ":black_joker:", ":mahjong:", ":flower_playing_cards:", ":mute:", ":speaker:", ":sound:", ":loud_sound:", ":loudspeaker:", ":mega:", ":bell:", ":no_bell:", ":musical_note:", ":notes:", ":chart:", ":currency_exchange:", ":heavy_dollar_sign:", ":atm:", ":put_litter_in_its_place:", ":potable_water:", ":wheelchair:", ":mens:", ":womens:", ":restroom:", ":baby_symbol:", ":wc:", ":passport_control:", ":customs:", ":baggage_claim:", ":left_luggage:", ":warning:", ":children_crossing:", ":no_entry:", ":no_entry_sign:", ":no_bicycles:", ":no_smoking:", ":do_not_litter:", ":non-potable_water:", ":no_pedestrians:", ":no_mobile_phones:", ":underage:", ":radioactive:", ":biohazard:", ":arrow_up:", ":arrow_upper_right:", ":arrow_right:", ":arrow_lower_right:", ":arrow_down:", ":arrow_lower_left:", ":arrow_left:", ":arrow_upper_left:", ":arrow_up_down:", ":left_right_arrow:", ":leftwards_arrow_with_hook:", ":arrow_right_hook:", ":arrow_heading_up:", ":arrow_heading_down:", ":arrows_clockwise:", ":arrows_counterclockwise:", ":back:", ":end:", ":on:", ":soon:", ":top:", ":place_of_worship:", ":atom:", ":om_symbol:", ":star_of_david:", ":wheel_of_dharma:", ":yin_yang:", ":cross:", ":orthodox_cross:", ":star_and_crescent:", ":peace:", ":menorah:", ":six_pointed_star:", ":aries:", ":taurus:", ":gemini:", ":cancer:", ":leo:", ":virgo:", ":libra:", ":scorpius:", ":sagittarius:", ":capricorn:", ":aquarius:", ":pisces:", ":ophiuchus:", ":twisted_rightwards_arrows:", ":repeat:", ":repeat_one:", ":arrow_forward:", ":fast_forward:", ":track_next:", ":play_pause:", ":arrow_backward:", ":rewind:", ":track_previous:", ":arrow_up_small:", ":arrow_double_up:", ":arrow_down_small:", ":arrow_double_down:", ":pause_button:", ":stop_button:", ":record_button:", ":eject:", ":cinema:", ":low_brightness:", ":high_brightness:", ":signal_strength:", ":vibration_mode:", ":mobile_phone_off:", ":recycle:", ":name_badge:", ":fleur-de-lis:", ":beginner:", ":trident:", ":o:", ":white_check_mark:", ":ballot_box_with_check:", ":heavy_check_mark:", ":heavy_multiplication_x:", ":x:", ":negative_squared_cross_mark:", ":heavy_plus_sign:", ":heavy_minus_sign:", ":heavy_division_sign:", ":curly_loop:", ":loop:", ":part_alternation_mark:", ":eight_spoked_asterisk:", ":eight_pointed_black_star:", ":sparkle:", ":bangbang:", ":interrobang:", ":question:", ":grey_question:", ":grey_exclamation:", ":exclamation:", ":wavy_dash:", ":copyright:", ":registered:", ":tm:", ":hash:", ":asterisk:", ":zero:", ":one:", ":two:", ":three:", ":four:", ":five:", ":six:", ":seven:", ":eight:", ":nine:", ":keycap_ten:", ":capital_abcd:", ":abcd:", ":symbols:", ":abc:", ":a:", ":ab:", ":b:", ":cl:", ":cool:", ":free:", ":information_source:", ":id:", ":m:", ":new:", ":ng:", ":o2:", ":ok:", ":parking:", ":sos:", ":up:", ":vs:", ":koko:", ":sa:", ":u6708:", ":u6709:", ":u6307:", ":ideograph_advantage:", ":u5272:", ":u7121:", ":u7981:", ":accept:", ":u7533:", ":u5408:", ":u7a7a:", ":congratulations:", ":secret:", ":u55b6:", ":u6e80:", ":black_small_square:", ":white_small_square:", ":white_medium_square:", ":black_medium_square:", ":white_medium_small_square:", ":black_medium_small_square:", ":black_large_square:", ":white_large_square:", ":large_orange_diamond:", ":large_blue_diamond:", ":small_orange_diamond:", ":small_blue_diamond:", ":small_red_triangle:", ":small_red_triangle_down:", ":diamond_shape_with_a_dot_inside:", ":radio_button:", ":black_square_button:", ":white_square_button:", ":white_circle:", ":black_circle:", ":red_circle:", ":blue_circle:", ":regional_indicator_z:", ":regional_indicator_y:", ":regional_indicator_x:", ":regional_indicator_w:", ":regional_indicator_v:", ":regional_indicator_u:", ":regional_indicator_t:", ":regional_indicator_s:", ":regional_indicator_r:", ":regional_indicator_q:", ":regional_indicator_p:", ":regional_indicator_o:", ":regional_indicator_n:", ":regional_indicator_m:", ":regional_indicator_l:", ":regional_indicator_k:", ":regional_indicator_j:", ":regional_indicator_i:", ":regional_indicator_h:", ":regional_indicator_g:", ":regional_indicator_f:", ":regional_indicator_e:", ":regional_indicator_d:", ":regional_indicator_c:", ":regional_indicator_b:", ":regional_indicator_a:"],
                                    show: !1
                                },
                                flags: {
                                    name: "Flags",
                                    emoji: "1f3f4",
                                    header: ":flag_black:",
                                    content: [":flag_ac:", ":flag_ad:", ":flag_ae:", ":flag_af:", ":flag_ag:", ":flag_ai:", ":flag_al:", ":flag_am:", ":flag_ao:", ":flag_aq:", ":flag_ar:", ":flag_as:", ":flag_at:", ":flag_au:", ":flag_aw:", ":flag_ax:", ":flag_az:", ":flag_ba:", ":flag_bb:", ":flag_bd:", ":flag_be:", ":flag_bf:", ":flag_bg:", ":flag_bh:", ":flag_bi:", ":flag_bj:", ":flag_bl:", ":flag_bm:", ":flag_bn:", ":flag_bo:", ":flag_bq:", ":flag_br:", ":flag_bs:", ":flag_bt:", ":flag_bv:", ":flag_bw:", ":flag_by:", ":flag_bz:", ":flag_ca:", ":flag_cc:", ":flag_cd:", ":flag_cf:", ":flag_cg:", ":flag_ch:", ":flag_ci:", ":flag_ck:", ":flag_cl:", ":flag_cm:", ":flag_cn:", ":flag_co:", ":flag_cp:", ":flag_cr:", ":flag_cu:", ":flag_cv:", ":flag_cw:", ":flag_cx:", ":flag_cy:", ":flag_cz:", ":flag_de:", ":flag_dg:", ":flag_dj:", ":flag_dk:", ":flag_dm:", ":flag_do:", ":flag_dz:", ":flag_ea:", ":flag_ec:", ":flag_ee:", ":flag_eg:", ":flag_eh:", ":flag_er:", ":flag_es:", ":flag_et:", ":flag_eu:", ":flag_fi:", ":flag_fj:", ":flag_fk:", ":flag_fm:", ":flag_fo:", ":flag_fr:", ":flag_ga:", ":flag_gb:", ":flag_gd:", ":flag_ge:", ":flag_gf:", ":flag_gg:", ":flag_gh:", ":flag_gi:", ":flag_gl:", ":flag_gm:", ":flag_gn:", ":flag_gp:", ":flag_gq:", ":flag_gr:", ":flag_gs:", ":flag_gt:", ":flag_gu:", ":flag_gw:", ":flag_gy:", ":flag_hk:", ":flag_hm:", ":flag_hn:", ":flag_hr:", ":flag_ht:", ":flag_hu:", ":flag_ic:", ":flag_id:", ":flag_ie:", ":flag_il:", ":flag_im:", ":flag_in:", ":flag_io:", ":flag_iq:", ":flag_ir:", ":flag_is:", ":flag_it:", ":flag_je:", ":flag_jm:", ":flag_jo:", ":flag_jp:", ":flag_ke:", ":flag_kg:", ":flag_kh:", ":flag_ki:", ":flag_km:", ":flag_kn:", ":flag_kp:", ":flag_kr:", ":flag_kw:", ":flag_ky:", ":flag_kz:", ":flag_la:", ":flag_lb:", ":flag_lc:", ":flag_li:", ":flag_lk:", ":flag_lr:", ":flag_ls:", ":flag_lt:", ":flag_lu:", ":flag_lv:", ":flag_ly:", ":flag_ma:", ":flag_mc:", ":flag_md:", ":flag_me:", ":flag_mf:", ":flag_mg:", ":flag_mh:", ":flag_mk:", ":flag_ml:", ":flag_mm:", ":flag_mn:", ":flag_mo:", ":flag_mp:", ":flag_mq:", ":flag_mr:", ":flag_ms:", ":flag_mt:", ":flag_mu:", ":flag_mv:", ":flag_mw:", ":flag_mx:", ":flag_my:", ":flag_mz:", ":flag_na:", ":flag_nc:", ":flag_ne:", ":flag_nf:", ":flag_ng:", ":flag_ni:", ":flag_nl:", ":flag_no:", ":flag_np:", ":flag_nr:", ":flag_nu:", ":flag_nz:", ":flag_om:", ":flag_pa:", ":flag_pe:", ":flag_pf:", ":flag_pg:", ":flag_ph:", ":flag_pk:", ":flag_pl:", ":flag_pm:", ":flag_pn:", ":flag_pr:", ":flag_ps:", ":flag_pt:", ":flag_pw:", ":flag_py:", ":flag_qa:", ":flag_re:", ":flag_ro:", ":flag_rs:", ":flag_ru:", ":flag_rw:", ":flag_sa:", ":flag_sb:", ":flag_sc:", ":flag_sd:", ":flag_se:", ":flag_sg:", ":flag_sh:", ":flag_si:", ":flag_sj:", ":flag_sk:", ":flag_sl:", ":flag_sm:", ":flag_sn:", ":flag_so:", ":flag_sr:", ":flag_ss:", ":flag_st:", ":flag_sv:", ":flag_sx:", ":flag_sy:", ":flag_sz:", ":flag_ta:", ":flag_tc:", ":flag_td:", ":flag_tf:", ":flag_tg:", ":flag_th:", ":flag_tj:", ":flag_tk:", ":flag_tl:", ":flag_tm:", ":flag_tn:", ":flag_to:", ":flag_tr:", ":flag_tt:", ":flag_tv:", ":flag_tw:", ":flag_tz:", ":flag_ua:", ":flag_ug:", ":flag_um:", ":flag_us:", ":flag_uy:", ":flag_uz:", ":flag_va:", ":flag_vc:", ":flag_ve:", ":flag_vg:", ":flag_vi:", ":flag_vn:", ":flag_vu:", ":flag_wf:", ":flag_ws:", ":flag_xk:", ":flag_ye:", ":flag_yt:", ":flag_za:", ":flag_zm:", ":flag_zw:"],
                                    show: !1
                                }
                            },
                            search: null,
                            isSearch: !1,
                            searchInput: "",
                            activeCategory: "",
                            checkTimeout: null,
                            shortnames: null,
                            counter: 0,
                            emojiList: [],
                            filteredCategories: [],
                            preview: {},
                            placeholder: "Search Emoji"
                        }
                    },
                    props: {
                        isShow: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    mounted: function() {
                        var t = this;
                        this.$nextTick((function() {
                            t.includeScript()
                        }
                        ))
                    },
                    watch: {
                        isShow: function() {
                            this.isShow && !this.loaded && this.checkScriptLoaded(),
                            this.isShow && this.loaded && this.$refs.emojipicker.focus()
                        }
                    },
                    methods: {
                        includeScript: function() {
                            if (void 0 === window.emojione) {
                                var t = document.createElement("script");
                                t.src = "https://cdn.jsdelivr.net/emojione/2.2.7/lib/js/emojione.min.js",
                                t.type = "text/javascript",
                                t.async = !0,
                                t.defer = !0,
                                document.getElementsByTagName("head").item(0).appendChild(t)
                            }
                        },
                        checkScriptLoaded: function() {
                            var t = this;
                            if (clearTimeout(this.checkScriptLoaded),
                            void 0 === window.emojione)
                                return this.counter++,
                                20 === this.counter ? (clearTimeout(this.checkTimeout),
                                void (this.counter = 0)) : void (this.checkTimeout = setTimeout((function() {
                                    t.checkScriptLoaded()
                                }
                                ), 20));
                            clearTimeout(this.checkTimeout),
                            setTimeout((function() {
                                t.counter = 0,
                                t.emojione = window.emojione,
                                t.emojione.ascii = !0,
                                t.shortnames = t.emojione.shortnames.replace(/\\\+/g, "+").split("|"),
                                Object.keys(t.categories).forEach((function(e) {
                                    var n = t.categories[e]
                                      , r = {};
                                    r.category_name = e,
                                    r.emoji = n.emoji,
                                    r.name = n.name,
                                    r.header = t.emojione.shortnameToImage(n.header),
                                    r.emojis = [],
                                    r.show = !1,
                                    n.content.forEach((function(t) {
                                        r.emojis.push({
                                            title: t
                                        })
                                    }
                                    )),
                                    t.filteredCategories.push(r)
                                }
                                )),
                                t.filteredCategories[0].show = !0,
                                t.activeCategory = t.filteredCategories[0],
                                t.loaded = !0,
                                t.$nextTick((function() {
                                    t.$refs.emojipicker.focus()
                                }
                                ))
                            }
                            ))
                        },
                        onKeyup: function() {
                            var t = this.searchInput.toLowerCase()
                              , e = [];
                            if ("" !== t) {
                                this.isSearch = !0,
                                t = t.trim().toLowerCase(),
                                this.activeCategory = {
                                    category_name: "search",
                                    name: "Search Results"
                                };
                                for (var n = 0; n < this.shortnames.length; n++) {
                                    var r = this.shortnames[n];
                                    -1 !== r.indexOf(t) && e.push({
                                        title: r
                                    })
                                }
                                this.search = e
                            } else
                                this.search = null,
                                this.isSearch = !1,
                                this.activeCategory = this.filteredCategories[0];
                            this.$refs.scroll && this.$refs.scroll.$scrollbar && this.$refs.scroll.$scrollbar.update()
                        },
                        onGroupClick: function(t) {
                            var e = this.filteredCategories.indexOf(t)
                              , n = this.$refs.categories[e];
                            if (n) {
                                var r = n.offsetTop + 15;
                                t.first && (r = 0),
                                this.$refs.scroll.scrollTop = r
                            }
                            this.search = null,
                            this.isSearch = !1,
                            this.searchInput = "",
                            this.filteredCategories[e].show = !0,
                            this.activeCategory = this.filteredCategories[e]
                        },
                        onClick: function(t) {
                            var e = this.emojione.shortnameToUnicode(t.target.title);
                            this.$emit("select", e)
                        },
                        onMouseenter: function(t) {
                            var e = this.emojione.shortnameToImage(t.target.title)
                              , n = t.target.title.replace(/:+/g, "");
                            this.preview = {
                                title: n,
                                shortname: t.target.title,
                                img: e
                            }
                        },
                        onMouseleave: function() {
                            this.placeholder = "Search Emoji",
                            this.preview = {}
                        },
                        onScroll: function() {
                            this.waitingForPaint || (this.waitingForPaint = !0,
                            window.requestAnimationFrame(this.onScrollPaint.bind(this)))
                        },
                        onScrollPaint: function() {
                            this.waitingForPaint = !1;
                            for (var t = this.$refs.scroll.scrollTop, e = this.filteredCategories[0], n = 0, r = this.filteredCategories.length; n < r; n++) {
                                var i = this.filteredCategories[n]
                                  , o = this.$refs.categories[n];
                                if (o && o.offsetTop > t)
                                    break;
                                this.filteredCategories[n].show = !0,
                                e = i
                            }
                            this.activeCategory = e
                        }
                    },
                    directives: {
                        TawkScroll: Rt
                    }
                }, Pt = (n("6d0e"),
                s(At, (function() {
                    var t = this
                      , e = t._self._c;
                    return e("div", {
                        ref: "emojipicker",
                        staticClass: "tawk-emoji-picker tawk-outline",
                        attrs: {
                            tabindex: "0"
                        }
                    }, [t.loaded ? [e("tawk-emoji-group", {
                        ref: "emojigroup",
                        attrs: {
                            categories: t.filteredCategories,
                            activeCategory: t.activeCategory
                        },
                        on: {
                            click: t.onGroupClick
                        }
                    }), e("div", {
                        staticClass: "tawk-emoji-search-container"
                    }, [e("tawk-input", {
                        ref: "search",
                        attrs: {
                            tabindex: "0",
                            label: t.placeholder,
                            placeholder: t.placeholder
                        },
                        nativeOn: {
                            keyup: function(e) {
                                return t.onKeyup.apply(null, arguments)
                            }
                        },
                        model: {
                            value: t.searchInput,
                            callback: function(e) {
                                t.searchInput = e
                            },
                            expression: "searchInput"
                        }
                    })], 1), e("h4", {
                        staticClass: "tawk-emoji-sticky-header"
                    }, [t._v(" " + t._s(t.activeCategory.name) + " ")]), e("div", {
                        directives: [{
                            name: "tawk-scroll",
                            rawName: "v-tawk-scroll",
                            value: {
                                minScrollbarLength: 40
                            },
                            expression: "{minScrollbarLength: 40}"
                        }],
                        ref: "scroll",
                        staticClass: "tawk-emoji-scroll",
                        on: {
                            scroll: t.onScroll
                        }
                    }, [t.isSearch ? [t._l(t.search, (function(n) {
                        return e("button", {
                            key: n.title,
                            ref: "emoji",
                            refInFor: !0,
                            staticClass: "tawk-emoji tawk-outline",
                            attrs: {
                                title: n.title,
                                id: n.title,
                                tabindex: "0"
                            },
                            on: {
                                click: t.onClick,
                                mouseenter: t.onMouseenter,
                                mouseleave: t.onMouseleave
                            }
                        }, [e("tawk-emoji", {
                            attrs: {
                                emoji: n.title
                            }
                        })], 1)
                    }
                    )), t.search && !t.search.length > 0 ? e("span", [t._v(" We couldn't find that emoji ")]) : t._e()] : t._e(), t._l(t.filteredCategories, (function(n, r) {
                        return e("div", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: !t.isSearch,
                                expression: "!isSearch"
                            }],
                            key: r,
                            ref: "categories",
                            refInFor: !0
                        }, [0 != r ? e("h4", {
                            staticClass: "tawk-emoji-header"
                        }, [t._v(" " + t._s(n.name) + " ")]) : t._e(), t._l(n.emojis, (function(r) {
                            return e("button", {
                                key: r.title,
                                ref: "emoji",
                                refInFor: !0,
                                staticClass: "tawk-emoji tawk-outline",
                                attrs: {
                                    title: r.title,
                                    id: r.title,
                                    tabindex: "0"
                                },
                                on: {
                                    click: t.onClick,
                                    mouseenter: t.onMouseenter,
                                    mouseleave: t.onMouseleave,
                                    focus: t.onMouseenter,
                                    blur: t.onMouseleave
                                }
                            }, [n.show ? e("tawk-emoji", {
                                attrs: {
                                    emoji: r.title
                                }
                            }) : t._e()], 1)
                        }
                        ))], 2)
                    }
                    ))], 2), e("tawk-emoji-preview", {
                        attrs: {
                            preview: t.preview
                        }
                    })] : [e("div", {
                        staticClass: "tawk-emoji-loading"
                    })]], 2)
                }
                ), [], !1, null, null, null)).exports, It = {
                    bind: function(t, e, n) {
                        var r = ""
                          , i = t.getAttribute("data-text")
                          , o = document.createElement("span")
                          , a = document.createElement("span")
                          , s = e.value ? e.value : "";
                        s && s.position && (r = s.position),
                        a.className = "tawk-tooltip-arrow",
                        o.innerHTML += i,
                        o.className = "tawk-tooltip-hover ".concat(r),
                        o.appendChild(a),
                        t.appendChild(o),
                        t.className += " tawk-tooltip",
                        n.mouseoverHandler = function() {
                            var e, i = t.ownerDocument ? t.ownerDocument.body : null, l = t.getBoundingClientRect(), c = l.top, u = l.left + l.width / 2 - o.offsetWidth / 2;
                            e = i ? i.clientWidth : n.context.$el.clientWidth;
                            var h = o.offsetWidth + 1;
                            u + h > e && (u = e - h),
                            o.style.cssText += "left:".concat(u, "px; right: unset;");
                            var p = l.left - u + l.width / 2;
                            a.style.cssText += "left:".concat(p - 8, "px;"),
                            "bottom" === r ? c -= l.height + 24 : c += l.height + 4,
                            o.style.cssText += "top : ".concat(c, "px;"),
                            s && s.isDynamic || t.removeEventListener("mouseover", n.mouseoverHandler, !1)
                        }
                        ,
                        t.addEventListener("mouseover", n.mouseoverHandler, !1)
                    },
                    unbind: function(t, e, n) {
                        n.mouseoverHandler && t.removeEventListener("mouseover", n.mouseoverHandler, !1)
                    }
                }, $t = {
                    name: "tawk-chat-input",
                    components: {
                        TawkIcon: l,
                        TawkEmojiPicker: Pt
                    },
                    props: {
                        placeholder: {
                            type: String,
                            default: ""
                        },
                        features: {
                            type: Object,
                            default: function() {
                                return {
                                    emoji: !0,
                                    rating: !0,
                                    uploads: !0
                                }
                            }
                        }
                    },
                    data: function() {
                        return {
                            config: {
                                default_height: 16,
                                max_height: 150
                            },
                            hasValue: !1,
                            showEmoji: !1,
                            showUpload: !1,
                            showRatings: !1,
                            files: [],
                            ratings: "",
                            chatFocused: !1
                        }
                    },
                    computed: {
                        actionButtonClass: function() {
                            return ["tawk-chatinput-action-buttons", this.hasValue && "active"]
                        }
                    },
                    methods: {
                        onKeydown: function(t) {
                            if (13 == t.keyCode && !t.shiftKey)
                                return t.preventDefault(),
                                this.onSend();
                            this.$emit("messageTyping", t)
                        },
                        onFocus: function() {
                            this.chatFocused = !0,
                            this.$emit("focus")
                        },
                        onBlur: function() {
                            this.chatFocused = !1,
                            this.$emit("blur")
                        },
                        onSelect: function(t) {
                            var e = this.$refs.chatinput.value;
                            this.$refs.chatinput.value = e + t,
                            this.$refs.chatinput.focus(),
                            this.hasValue = !0,
                            this.showEmoji = !1
                        },
                        onFileClick: function() {
                            this.showRatings = !1,
                            this.showEmoji = !1
                        },
                        onFileUpload: function() {
                            var t = this.$refs.fileupload.files;
                            if (this.showEmoji = !1,
                            t.length > 0 && this.files.length < 4) {
                                for (var e = 0; e < t.length; e++) {
                                    var n = t[e]
                                      , r = null
                                      , i = null;
                                    if (n.type.match(/(jpg|jpeg|png|gif)$/i) ? (r = URL.createObjectURL(n),
                                    i = "image") : -1 !== ["video/mp4", "video/ogg", "video/webm"].indexOf(n.type) ? (r = !0,
                                    i = "video") : -1 !== ["audio/mp3", "audio/ogg", "audio/mpeg", "audio/wav"].indexOf(n.type) && (r = !0,
                                    i = "audio"),
                                    this.files.push({
                                        preview: r,
                                        iconType: i,
                                        file: n
                                    }),
                                    4 === this.files.length)
                                        break
                                }
                                this.hasValue = !0,
                                this.$refs.fileupload.value = ""
                            }
                            this.$emit("filesAdded")
                        },
                        handleRating: function(t, e) {
                            t.stopPropagation(),
                            t.preventDefault(),
                            this.$emit("ratingClicked", e),
                            this.showRatings = !1
                        },
                        onSend: function() {
                            (this.$refs.chatinput.value.length > 0 || this.files.length > 0) && (this.$emit("sendMessage", {
                                message: this.$refs.chatinput.value,
                                attachments: this.files
                            }),
                            this.$refs.chatinput.value = "",
                            this.files = [],
                            this.$refs.chatinput.click()),
                            this.hasValue = !1,
                            this.showEmoji = !1,
                            this.showUpload = !1
                        },
                        onClose: function() {
                            this.showEmoji = !1
                        },
                        openFilSelector: function() {
                            this.showUpload = !0,
                            this.showEmoji = !0,
                            this.$refs.fileupload.click()
                        },
                        removeFile: function(t) {
                            this.files.length && this.files.length > t && this.files.splice(t, 1),
                            0 === this.files.length && "" === this.$refs.chatinput.value && (this.hasValue = !1,
                            this.$emit("filesRemoved"))
                        },
                        onEmojiOpen: function() {
                            this.showEmoji = !this.showEmoji,
                            this.showUpload = !1,
                            this.$emit("emojiPreview", this.showEmoji),
                            this.$refs.emojipicker.focus()
                        },
                        handleEscapeKey: function(t) {
                            "Escape" === t.key && this.showEmoji && (this.showEmoji = !1)
                        }
                    },
                    directives: {
                        TawkTooltip: It,
                        autogrow: {
                            bind: function(t, e, n) {
                                var r, i;
                                r = window.attachEvent ? function(t, e, n) {
                                    t.attachEvent("on" + e, n)
                                }
                                : function(t, e, n) {
                                    t.addEventListener(e, n, !1)
                                }
                                ;
                                var o = function() {
                                    var e = n.context.config.default_height;
                                    t.parentNode && (e = parseFloat(getComputedStyle(t.parentNode).fontSize));
                                    var r, i = 0, o = t.clientHeight, a = t.value.split(/\r\n|\r|\n/).length || 1, s = a * e;
                                    n.context.hasValue ? (1 === a && t.scrollHeight >= t.clientHeight && (s = t.scrollHeight),
                                    r = s < n.context.config.max_height ? s < e ? e : s : n.context.config.max_height) : r = e,
                                    n.context.showEmoji && (i = 310),
                                    t.style.height = "".concat(r, "px"),
                                    n.context.$emit("textareaResized", r - o + i)
                                }
                                  , a = function() {
                                    clearTimeout(i),
                                    t.value.trim().length > 0 ? n.context.hasValue = !0 : n.context.hasValue = !1,
                                    i = window.setTimeout(o, 100)
                                };
                                r(t, "cut", a),
                                r(t, "paste", a),
                                r(t, "keyup", a),
                                r(t, "click", a),
                                o()
                            }
                        },
                        "click-outside": {
                            bind: function(t, e, n) {
                                Et = function(r) {
                                    var i = e.value
                                      , o = i.handler
                                      , a = i.exclude
                                      , s = !1;
                                    a.forEach((function(t) {
                                        if (!s) {
                                            var e = n.context.$refs[t];
                                            e && (s = e.contains(r.target))
                                        }
                                    }
                                    )),
                                    t.contains(r.target) || s || n.context[o]()
                                }
                                ,
                                document.addEventListener("click", Et),
                                document.addEventListener("touchstart", Et)
                            },
                            unbind: function() {
                                document.removeEventListener("click", Et),
                                document.removeEventListener("touchstart", Et)
                            }
                        }
                    }
                }, Dt = (n("75a4"),
                s($t, (function() {
                    var t = this
                      , e = t._self._c;
                    return e("div", t._b({
                        staticClass: "tawk-chatinput"
                    }, "div", t.$attrs, !1), [t.features.emoji ? e("div", {
                        directives: [{
                            name: "click-outside",
                            rawName: "v-click-outside",
                            value: {
                                exclude: ["button"],
                                handler: "onClose"
                            },
                            expression: "{\n\t\t\texclude : ['button'],\n\t\t\thandler : 'onClose'\n\t\t}"
                        }],
                        ref: "emojipicker",
                        staticClass: "tawk-chatinput-emojis",
                        on: {
                            keyup: function(e) {
                                return !e.type.indexOf("key") && t._k(e.keyCode, "esc", 27, e.key, ["Esc", "Escape"]) ? null : t.handleEscapeKey.apply(null, arguments)
                            }
                        }
                    }, [e("tawk-emoji-picker", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.showEmoji,
                            expression: "showEmoji"
                        }],
                        attrs: {
                            isShow: t.showEmoji
                        },
                        on: {
                            select: t.onSelect
                        }
                    })], 1) : t._e(), e("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.files.length,
                            expression: "files.length"
                        }],
                        staticClass: "tawk-chatinput-fileupload"
                    }, [e("ul", {
                        staticClass: "tawk-chatinput-fileupload-list tawk-flex tawk-flex-wrap"
                    }, [t._l(t.files, (function(n, r) {
                        return e("li", {
                            key: r,
                            staticClass: "tawk-chatinput-fileupload-preview tawk-flex tawk-flex-middle tawk-flex-center"
                        }, [n.preview && "image" === n.iconType ? e("img", {
                            attrs: {
                                src: n.preview
                            }
                        }) : n.preview && "video" === n.iconType ? e("tawk-icon", {
                            attrs: {
                                type: "video-file",
                                size: "large"
                            }
                        }) : n.preview && "audio" === n.iconType ? e("tawk-icon", {
                            attrs: {
                                type: "audio-file",
                                size: "large"
                            }
                        }) : e("tawk-icon", {
                            attrs: {
                                type: "file",
                                size: "large"
                            }
                        }), e("div", {
                            staticClass: "tawk-chatinput-file-remove tawk-flex tawk-flex-middle tawk-flex-center",
                            on: {
                                click: function(e) {
                                    return t.removeFile(r)
                                }
                            }
                        }, [e("tawk-icon", {
                            attrs: {
                                type: "close",
                                size: "xsmall"
                            }
                        })], 1)], 1)
                    }
                    )), t.files.length > 0 && t.files.length <= 3 ? e("li", {
                        staticClass: "tawk-chatinput-fileupload-input tawk-flex tawk-flex-middle tawk-flex-center",
                        on: {
                            click: t.openFilSelector
                        }
                    }, [e("tawk-icon", {
                        attrs: {
                            type: "add",
                            size: "large"
                        }
                    })], 1) : t._e()], 2), e("input", {
                        ref: "fileupload",
                        attrs: {
                            type: "file",
                            multiple: ""
                        },
                        on: {
                            change: t.onFileUpload,
                            click: t.onFileClick
                        }
                    })]), e("div", {
                        staticClass: "tawk-chatinput-wrap tawk-flex tawk-flex-wrap"
                    }, [e("textarea", {
                        directives: [{
                            name: "autogrow",
                            rawName: "v-autogrow"
                        }],
                        ref: "chatinput",
                        staticClass: "tawk-chatinput-editor",
                        attrs: {
                            placeholder: t.placeholder,
                            tabindex: "0"
                        },
                        on: {
                            keydown: t.onKeydown,
                            focus: t.onFocus,
                            blur: t.onBlur
                        }
                    }), e("div", {
                        ref: "actionbuttons",
                        class: t.actionButtonClass,
                        attrs: {
                            role: "group",
                            "aria-label": "Group of buttons"
                        }
                    }, [t.features.rating ? e("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !t.hasValue,
                            expression: "!hasValue"
                        }, {
                            name: "tawk-tooltip",
                            rawName: "v-tawk-tooltip",
                            value: {
                                position: "bottom"
                            },
                            expression: "{position : 'bottom'}"
                        }],
                        ref: "rating",
                        staticClass: "tawk-chatinput-button tawk-tooltip tawk-outline",
                        class: [t.showRatings ? "active" : "", t.chatFocused ? "tawk-chatinput-focused" : ""],
                        attrs: {
                            role: "button",
                            tabindex: "0",
                            type: "button",
                            title: [t.$i18n ? t.$i18n("rollover", "rate_chat") : "Rate this chat"],
                            "aria-label": [t.$i18n ? t.$i18n("rollover", "rate_chat") : "Rate this chat"],
                            "data-text": [t.$i18n ? t.$i18n("rollover", "rate_chat") : "Rate this chat"]
                        },
                        on: {
                            mouseenter: function(e) {
                                t.showRatings = !0
                            },
                            mouseleave: function(e) {
                                t.showRatings = !1
                            },
                            click: function(e) {
                                t.showRatings = !0
                            },
                            keyup: function(e) {
                                if (!e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter"))
                                    return null;
                                t.showRatings = !0
                            },
                            focusin: function(e) {
                                t.showRatings = !0
                            },
                            focusout: function(e) {
                                t.showRatings = !1
                            }
                        }
                    }, [e("div", {
                        staticClass: "tawk-chatinput-ratings tawk-flex tawk-flex-middle"
                    }, [e("button", {
                        staticClass: "tawk-chatinput-rate tawk-chatinput-ratings-thumbs-down tawk-margin-xsmall-right tawk-margin-auto-left tawk-outline",
                        attrs: {
                            title: [t.$i18n ? t.$i18n("rollover", "negative_rating") : "Rate this conversation with -1"],
                            role: "button",
                            tabindex: t.showRatings ? 0 : -1
                        },
                        on: {
                            click: function(e) {
                                return t.handleRating(e, -1)
                            },
                            focusin: function(e) {
                                t.showRatings = !0
                            }
                        }
                    }, [e("tawk-icon", {
                        attrs: {
                            type: "thumbs-down"
                        }
                    })], 1), e("button", {
                        staticClass: "tawk-chatinput-rate tawk-chatinput-ratings-thumbs-up tawk-margin-xsmall-right tawk-outline",
                        attrs: {
                            title: [t.$i18n ? t.$i18n("rollover", "positive_rating") : "Rate this conversation with +1"],
                            role: "button",
                            tabindex: t.showRatings ? 0 : -1
                        },
                        on: {
                            click: function(e) {
                                return t.handleRating(e, 1)
                            },
                            focusin: function(e) {
                                t.showRatings = !0
                            }
                        }
                    }, [e("tawk-icon", {
                        attrs: {
                            type: "thumbs-up"
                        }
                    })], 1)]), e("tawk-icon", {
                        staticClass: "tawk-chatinput-rating",
                        attrs: {
                            type: "thumbs-up"
                        },
                        on: {
                            click: function(e) {
                                t.showRatings = !0
                            }
                        }
                    })], 1) : t._e(), t.features.uploads ? e("button", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !t.hasValue || 0 !== t.files.length,
                            expression: "!hasValue || files.length !== 0"
                        }, {
                            name: "tawk-tooltip",
                            rawName: "v-tawk-tooltip",
                            value: {
                                position: "bottom"
                            },
                            expression: "{position : 'bottom'}"
                        }],
                        ref: "attachFile",
                        staticClass: "tawk-chatinput-button tawk-tooltip tawk-outline",
                        class: [t.chatFocused ? "tawk-chatinput-focused" : ""],
                        attrs: {
                            role: "button",
                            tabindex: "0",
                            type: "button",
                            title: [t.$i18n ? t.$i18n("rollover", "upload_file") : "Upload File"],
                            "aria-title": [t.$i18n ? t.$i18n("rollover", "upload_file") : "Upload File"],
                            "aria-hidden": "true",
                            "aria-haspopup": "menu",
                            "aria-expanded": "false",
                            "data-text": [t.$i18n ? t.$i18n("rollover", "upload_file") : "Upload File"]
                        },
                        on: {
                            click: t.openFilSelector
                        }
                    }, [e("tawk-icon", {
                        attrs: {
                            type: "attach-file"
                        }
                    })], 1) : t._e(), t.features.emoji ? e("button", {
                        directives: [{
                            name: "tawk-tooltip",
                            rawName: "v-tawk-tooltip",
                            value: {
                                position: "bottom",
                                isDynamic: !0
                            },
                            expression: "{position : 'bottom', isDynamic : true}"
                        }],
                        ref: "button",
                        staticClass: "tawk-chatinput-button tawk-tooltip tawk-outline",
                        class: [t.chatFocused ? "tawk-chatinput-focused" : ""],
                        attrs: {
                            role: "button",
                            tabindex: "0",
                            type: "button",
                            title: [t.$i18n ? t.$i18n("chat", "insert_emoji") : "Insert emoji"],
                            "aria-label": [t.$i18n ? t.$i18n("chat", "insert_emoji") : "Insert emoji"],
                            "aria-hidden": "true",
                            "aria-haspopup": "true",
                            "data-text": [t.$i18n ? t.$i18n("chat", "insert_emoji") : "Insert emoji"]
                        },
                        on: {
                            click: t.onEmojiOpen
                        }
                    }, [e("tawk-icon", {
                        attrs: {
                            type: "emoji"
                        }
                    })], 1) : t._e()]), t.hasValue ? e("div", {
                        staticClass: "tawk-chatinput-send-container"
                    }, [e("button", {
                        directives: [{
                            name: "tawk-tooltip",
                            rawName: "v-tawk-tooltip",
                            value: {
                                position: "bottom"
                            },
                            expression: "{position : 'bottom'}"
                        }],
                        staticClass: "tawk-chatinput-send",
                        attrs: {
                            role: "button",
                            tabindex: "0",
                            type: "button",
                            title: [t.$i18n ? t.$i18n("form", "send_button") : "Send"],
                            "aria-label": [t.$i18n ? t.$i18n("form", "send_button") : "Send"],
                            "data-text": [t.$i18n ? t.$i18n("form", "send_button") : "Send"]
                        },
                        on: {
                            click: t.onSend
                        }
                    }, [e("tawk-icon", {
                        attrs: {
                            type: "mobile-send"
                        }
                    })], 1)]) : t._e()])])
                }
                ), [], !1, null, null, null)).exports, Bt = {
                    name: "tawk-checkbox",
                    props: {
                        id: String,
                        label: String,
                        value: Array,
                        options: Array,
                        errorMessage: {
                            type: Object,
                            default: function() {
                                return {}
                            }
                        },
                        isRequired: {
                            type: Boolean,
                            default: !1
                        },
                        isSuccess: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    data: function() {
                        return {
                            invalidType: ""
                        }
                    },
                    computed: {
                        labelClasses: function() {
                            return ["tawk-form-label tawk-form-field-label", this.invalidType && "tawk-text-red-1"]
                        },
                        errorLabel: function() {
                            return this.errorMessage[this.invalidType]
                        }
                    },
                    methods: {
                        handleChange: function(t) {
                            void 0 !== this.value && (this.value.includes(t.target.value) ? this.value.splice(this.value.indexOf(t.target.value), 1) : 1 == t.target.checked && this.value.push(t.target.value),
                            this.$emit("input", this.value),
                            this.handleValidation(this.value))
                        },
                        handleValidation: function() {
                            this.isRequired && (this.value.length ? (this.$emit("update:error", !1),
                            this.invalidType = "") : (this.$emit("update:error", !0),
                            this.invalidType = "required"))
                        },
                        validate: function() {
                            this.handleValidation(this.selected)
                        }
                    }
                }, Nt = (n("297e"),
                s(Bt, (function() {
                    var t = this
                      , e = t._self._c;
                    return e("div", {
                        staticClass: "tawk-form-wrapper",
                        attrs: {
                            role: "group",
                            "aria-labelledby": t.id
                        }
                    }, [e("label", {
                        class: t.labelClasses,
                        attrs: {
                            id: t.id
                        }
                    }, [t.isRequired ? e("span", [t._v("*")]) : t._e(), t._v(" " + t._s(t.label) + " ")]), t._l(t.options, (function(n) {
                        return e("label", {
                            key: n.id,
                            staticClass: "tawk-checkbox-container"
                        }, [e("input", t._b({
                            ref: "checkbox",
                            refInFor: !0,
                            staticClass: "tawk-checkbox",
                            attrs: {
                                type: "checkbox",
                                disabled: n.disabled,
                                required: t.isRequired
                            },
                            domProps: {
                                value: n.value,
                                checked: "" != t.value.includes(n.value)
                            },
                            on: {
                                input: t.handleChange
                            }
                        }, "input", t.$attrs, !1)), e("span", {
                            staticClass: "tawk-form-label"
                        }, [t._v(t._s(n.label))]), e("span", {
                            staticClass: "tawk-checkmark"
                        })])
                    }
                    )), t.invalidType ? e("small", {
                        staticClass: "tawk-text-red-1 tawk-text-regular-1 tawk-margin-small-left"
                    }, [t._v(" " + t._s(t.errorLabel) + " ")]) : t._e()], 2)
                }
                ), [], !1, null, null, null)).exports, Mt = {
                    name: "tawk-dropdown",
                    props: {
                        isOpen: {
                            type: Boolean,
                            default: !1,
                            required: !0
                        },
                        position: {
                            type: String,
                            default: null
                        }
                    },
                    created: function() {
                        window.addEventListener("click", this.close),
                        window.addEventListener("keyup", this.handleEscapeKey)
                    },
                    beforeDestroy: function() {
                        window.removeEventListener("click", this.close),
                        window.removeEventListener("keyup", this.handleEscapeKey)
                    },
                    computed: {
                        menuClasses: function() {
                            return ["tawk-dropdown-menu", this.isOpen && "tawk-open", this.position && "tawk-dropdown-menu-".concat(this.position)]
                        }
                    },
                    methods: {
                        close: function(t) {
                            this.$el.contains(t.target) || this.$emit("update:isOpen", !1)
                        },
                        handleEscapeKey: function(t) {
                            "Escape" === t.key && this.isOpen && this.$emit("update:isOpen", !1)
                        }
                    }
                }, qt = (n("71cc"),
                s(Mt, (function() {
                    var t = this
                      , e = t._self._c;
                    return e("div", {
                        staticClass: "tawk-dropdown",
                        on: {
                            keyup: t.handleEscapeKey
                        }
                    }, [t._t("default"), e("transition", {
                        attrs: {
                            name: "slide-fade"
                        }
                    }, [t.isOpen ? e("div", {
                        class: t.menuClasses
                    }, [t._t("menu")], 2) : t._e()])], 2)
                }
                ), [], !1, null, null, null)).exports, Ht = {
                    name: "tawk-lists",
                    props: {
                        tag: {
                            type: String,
                            default: "div"
                        }
                    }
                }, Ut = (n("c61e"),
                s(Ht, (function(t, e) {
                    return t("".concat(e.props.tag), e._g(e._b({
                        ref: e.data.ref,
                        tag: "component",
                        class: ["tawk-lists", e.data.class, e.data.staticClass],
                        style: [e.data.style, e.data.staticStyle]
                    }, "component", e.data.attrs, !1), e.listeners), [e._t("default")], 2)
                }
                ), [], !0, null, null, null)).exports, Ft = s({
                    name: "tawk-item",
                    props: {
                        isHeader: {
                            type: Boolean,
                            default: !1
                        },
                        isNested: {
                            type: Boolean,
                            default: !1
                        },
                        tag: {
                            type: String,
                            default: "div"
                        },
                        size: {
                            type: String,
                            default: null
                        }
                    }
                }, (function(t, e) {
                    return t("".concat(e.props.tag), e._g(e._b({
                        ref: e.data.ref,
                        tag: "component",
                        class: [e.data.class, e.data.staticClass, e.props.size ? "tawk-list-item-".concat(e.props.size) : "", e.props.isHeader ? "tawk-list-header" : "tawk-list-item", e.props.isNested ? "tawk-list-nested" : ""]
                    }, "component", e.data.attrs, !1), e.listeners), [e._t("default")], 2)
                }
                ), [], !0, null, null, null).exports, zt = {
                    name: "tawk-loader",
                    props: {
                        isShimmering: {
                            type: Boolean,
                            default: !0
                        },
                        size: {
                            type: String,
                            default: null
                        },
                        type: {
                            type: String,
                            default: "bar"
                        }
                    }
                }, Xt = (n("1bf4"),
                s(zt, (function(t, e) {
                    return t("div", e._g(e._b({
                        class: ["tawk-loader", e.props.type && "tawk-loader-".concat(e.props.type), e.props.size && "tawk-loader-".concat(e.props.type, "-").concat(e.props.size), e.props.isShimmering && "tawk-loader-animation", e.data.staticClass, e.data.class]
                    }, "div", e.data.attrs, !1), e.listeners))
                }
                ), [], !0, null, null, null)).exports, Wt = {
                    name: "tawk-overlay",
                    directives: {
                        TawkTooltip: It
                    },
                    props: {
                        isOpen: {
                            type: Boolean,
                            default: !1,
                            required: !0
                        },
                        title: {
                            type: String,
                            default: ""
                        },
                        backTooltipText: {
                            type: String,
                            default: "Back"
                        },
                        headerClass: {
                            type: String,
                            default: ""
                        }
                    },
                    watch: {
                        isOpen: function(t) {
                            !0 === t && (console.log(this.$refs.header),
                            this.$refs.leftheader.focus())
                        }
                    },
                    components: {
                        TawkButton: H,
                        TawkIcon: l
                    },
                    methods: {
                        handleBack: function() {
                            this.$emit("goBack")
                        }
                    }
                }, Vt = (n("b989"),
                s(Wt, (function() {
                    var t = this
                      , e = t._self._c;
                    return e("div", {
                        class: ["tawk-overlay", t.isOpen ? "tawk-open" : ""]
                    }, [e("div", {
                        staticClass: "tawk-overlay-header",
                        class: t.headerClass
                    }, [e("div", {
                        ref: "leftheader",
                        staticClass: "tawk-overlay-header-left",
                        attrs: {
                            tabindex: t.isOpen ? 0 : -1
                        }
                    }, [e("tawk-button", {
                        directives: [{
                            name: "tawk-tooltip",
                            rawName: "v-tawk-tooltip"
                        }],
                        ref: "backbutton",
                        attrs: {
                            "data-text": t.backTooltipText,
                            "aria-label": t.backTooltipText,
                            tabindex: t.isOpen ? 0 : -1
                        },
                        on: {
                            click: t.handleBack
                        }
                    }, [e("tawk-icon", {
                        attrs: {
                            type: "left-arrow",
                            size: "small"
                        }
                    })], 1), e("p", {
                        staticClass: "tawk-overlay-title"
                    }, [t._v(" " + t._s(t.title) + " ")])], 1), e("div", {
                        staticClass: "tawk-overlay-header-right"
                    }, [t._t("options")], 2)]), e("div", {
                        staticClass: "tawk-overlay-body"
                    }, [t._t("default")], 2)])
                }
                ), [], !1, null, null, null)).exports, Yt = {
                    name: "tawk-radio",
                    props: {
                        id: String,
                        label: String,
                        checked: String,
                        options: {
                            type: Array,
                            default: function() {
                                return []
                            }
                        },
                        isRequired: {
                            type: Boolean,
                            default: !1
                        },
                        errorMessage: {
                            type: Object,
                            default: function() {
                                return {}
                            }
                        }
                    },
                    data: function() {
                        return {
                            invalidType: "",
                            selected: null
                        }
                    },
                    computed: {
                        labelClasses: function() {
                            return ["tawk-form-label tawk-form-field-label", this.invalidType && "tawk-text-red-1"]
                        },
                        errorLabel: function() {
                            return this.errorMessage[this.invalidType]
                        }
                    },
                    methods: {
                        handleChange: function(t) {
                            var e = t.target.value;
                            this.$emit("input", t.target.value),
                            this.handleValidation(e)
                        },
                        handleValidation: function(t) {
                            this.isRequired && (t ? (this.$emit("update:error", !1),
                            this.invalidType = "") : (this.$emit("update:error", !0),
                            this.invalidType = "required"))
                        },
                        validate: function() {
                            this.handleValidation(this.selected)
                        }
                    }
                }, Kt = (n("bca0"),
                s(Yt, (function() {
                    var t = this
                      , e = t._self._c;
                    return e("div", {
                        staticClass: "tawk-form-wrapper",
                        attrs: {
                            role: "group",
                            "aria-labelledby": t.id
                        }
                    }, [e("label", {
                        class: t.labelClasses,
                        attrs: {
                            id: t.id
                        }
                    }, [t.isRequired ? e("span", [t._v("*")]) : t._e(), t._v(" " + t._s(t.label) + " ")]), t._l(t.options, (function(n) {
                        return e("label", {
                            key: n.id,
                            staticClass: "tawk-radio-container"
                        }, [e("input", t._b({
                            ref: "radiobutton",
                            refInFor: !0,
                            staticClass: "tawk-radio",
                            attrs: {
                                type: "radio",
                                name: n.name,
                                disabled: 1 == n.disabled,
                                required: t.isRequired
                            },
                            domProps: {
                                value: n.value,
                                checked: n.value == t.checked
                            },
                            on: {
                                input: t.handleChange
                            }
                        }, "input", t.$attrs, !1)), e("span", {
                            staticClass: "tawk-form-label"
                        }, [t._v(t._s(n.label))]), e("span", {
                            staticClass: "tawk-checkmark"
                        })])
                    }
                    )), t.invalidType ? e("small", {
                        staticClass: "tawk-text-red-1 tawk-text-regular-1 tawk-margin-small-left"
                    }, [t._v(" " + t._s(t.errorLabel) + " ")]) : t._e()], 2)
                }
                ), [], !1, null, null, null)).exports, Jt = {
                    name: "tawk-rating",
                    components: {
                        TawkButton: H,
                        TawkImage: X
                    },
                    props: {
                        isText: {
                            type: Boolean,
                            default: !1
                        },
                        type: {
                            type: String,
                            default: "thumb"
                        },
                        isLikeDisabled: {
                            type: Boolean,
                            default: !1
                        },
                        isDislikeDisabled: {
                            type: Boolean,
                            default: !1
                        },
                        assetPath: {
                            type: String,
                            default: ""
                        },
                        upVoteText: {
                            type: String,
                            default: "Yes"
                        },
                        downVoteText: {
                            type: String,
                            default: "No"
                        }
                    },
                    methods: {
                        handleLike: function() {
                            this.$emit("like")
                        },
                        handleDislike: function() {
                            this.$emit("dislike")
                        }
                    }
                }, Gt = (n("a45b"),
                s(Jt, (function() {
                    var t = this
                      , e = t._self._c;
                    return e("div", {
                        staticClass: "tawk-rating",
                        attrs: {
                            "aria-label": "article rating"
                        }
                    }, [e("tawk-button", {
                        staticClass: "tawk-rating-button",
                        attrs: {
                            disabled: t.isLikeDisabled,
                            role: "option",
                            "aria-posinset": "1",
                            "aria-setsize": "2",
                            label: t.$i18n ? t.$i18n("kb", "positive_rating") : "Positive"
                        },
                        on: {
                            click: t.handleLike
                        }
                    }, [t.isText ? e("span", [t._v(" " + t._s(t.upVoteText) + " ")]) : e("tawk-image", {
                        attrs: {
                            name: "like ".concat(t.isText ? "text" : "icon"),
                            src: "".concat(t.assetPath, "/images/rating/").concat(t.type, "-upvote-1.svg")
                        }
                    })], 1), e("tawk-button", {
                        staticClass: "tawk-rating-button",
                        attrs: {
                            disabled: t.isDislikeDisabled,
                            role: "option",
                            "aria-posinset": "2",
                            "aria-setsize": "2",
                            label: t.$i18n ? t.$i18n("kb", "negative_rating") : "Negative"
                        },
                        on: {
                            click: t.handleDislike
                        }
                    }, [t.isText ? e("span", [t._v(" " + t._s(t.downVoteText) + " ")]) : e("tawk-image", {
                        attrs: {
                            name: "dislike ".concat(t.isText ? "text" : "icon"),
                            src: "".concat(t.assetPath, "/images/rating/").concat(t.type, "-downvote-1.svg")
                        }
                    })], 1)], 1)
                }
                ), [], !1, null, null, null)).exports, Qt = s({
                    name: "tawk-search-dropdown",
                    props: {
                        isOpen: {
                            type: Boolean,
                            default: !1
                        }
                    }
                }, (function(t, e) {
                    return t("div", {
                        class: ["tawk-search-dropdown", e.props.isOpen && "tawk-open", e.data.class, e.data.staticClass]
                    }, [e._t("default")], 2)
                }
                ), [], !0, null, null, null).exports, Zt = s({
                    name: "tawk-search-list",
                    components: {
                        TawkIcon: l,
                        TawkLoader: Xt
                    },
                    props: {
                        highlightItem: {
                            type: Number,
                            default: -1,
                            required: !0
                        },
                        highlightShowAll: {
                            type: Boolean,
                            default: !1
                        },
                        isLoading: {
                            type: Boolean,
                            default: !1,
                            required: !0
                        },
                        options: {
                            type: Array,
                            default: function() {
                                return []
                            },
                            required: !0
                        },
                        optionsLimit: {
                            type: Number,
                            default: 10,
                            required: !0
                        },
                        reducedOptions: {
                            type: Array,
                            default: function() {
                                return []
                            },
                            required: !0
                        },
                        totalResults: {
                            type: Number,
                            default: 0
                        },
                        textAlign: {
                            type: Boolean,
                            default: !0
                        }
                    },
                    methods: {
                        handleClick: function(t) {
                            this.$emit("handleSelectItem", t)
                        },
                        handleShowAll: function() {
                            this.$emit("handleShowAll")
                        }
                    }
                }, (function() {
                    var t = this
                      , e = t._self._c;
                    return e("div", [t.options.length ? e("ul", {
                        staticClass: "tawk-search-list"
                    }, [t.options.length < t.totalResults && !t.isLoading ? e("li", {
                        class: ["tawk-search-list-title", "tawk-search-list-title-button", "tawk-outline", t.highlightShowAll && "tawk-active"],
                        attrs: {
                            tabindex: "0"
                        },
                        on: {
                            click: t.handleShowAll
                        }
                    }, [e("div", {
                        staticClass: "tawk-search-list-title-icon"
                    }, [e("tawk-icon", {
                        attrs: {
                            type: "show-all"
                        }
                    })], 1), e("div", {
                        staticClass: "tawk-search-list-title-label",
                        attrs: {
                            role: "status"
                        }
                    }, [t.$i18n ? e("p", [t._v(" " + t._s(t.$i18n("kb", "show_all_results", {
                        num: t.totalResults
                    })) + " ")]) : e("p", [t._v(" Show all results (" + t._s(t.totalResults) + ") ")])])]) : t._e(), t._l(t.reducedOptions, (function(n, r) {
                        return e("li", {
                            key: n.id,
                            class: ["tawk-flex", "tawk-flex-middle", "tawk-outline", t.highlightItem === r ? "tawk-active" : "", t.textAlign && "tawk-text-right tawk-flex-row-reverse"],
                            on: {
                                click: function(e) {
                                    return t.handleClick(n)
                                }
                            }
                        }, [e("div", {
                            class: t.textAlign ? "tawk-margin-small-left" : "tawk-margin-small-right"
                        }, [e("svg", {
                            staticClass: "tawk-search-list-icon",
                            attrs: {
                                height: "24px",
                                width: "24px",
                                version: "1.1",
                                id: "Layer_1",
                                xmlns: "http://www.w3.org/2000/svg",
                                "xmlns:xlink": "http://www.w3.org/1999/xlink",
                                viewBox: "0 0 20 25",
                                "xml:space": "preserve"
                            }
                        }, [e("path", {
                            attrs: {
                                d: "M19.76575,7.69043c-0.04767-0.11377-0.11658-0.21631-0.20221-0.30273\n\t\t\t\t\t\tc-0.00098-0.00098-0.00128-0.00244-0.00226-0.00342l-6.66699-6.66797c-0.00336-0.00342-0.00818-0.00439-0.01154-0.00781\n\t\t\t\t\t\tc-0.0849-0.08228-0.1839-0.15039-0.2948-0.19678c-0.11481-0.04785-0.23877-0.07373-0.36554-0.07373H3.33276\n\t\t\t\t\t\tc-1.74902,0-3.17236,1.42383-3.17236,3.17285v17.7793c0,1.74902,1.42334,3.17188,3.17236,3.17188h13.33398\n\t\t\t\t\t\tc1.74951,0,3.17285-1.42285,3.17285-3.17188V8.05615C19.8396,7.9292,19.81372,7.80542,19.76575,7.69043z M13.17261,3.68237\n\t\t\t\t\t\tl3.4231,3.42358h-3.4231V3.68237z M16.66675,22.66162H3.33276c-0.70166,0-1.27197-0.57031-1.27197-1.27148V3.61084\n\t\t\t\t\t\tc0-0.70215,0.57031-1.27246,1.27197-1.27246h7.93945v5.71777c0,0.52441,0.42529,0.9502,0.9502,0.9502h5.7168v12.38379\n\t\t\t\t\t\tC17.93921,22.09131,17.36841,22.66162,16.66675,22.66162z M15.39478,13.61182c0,0.52441-0.42529,0.9502-0.9502,0.9502H5.55493\n\t\t\t\t\t\tc-0.5249,0-0.9502-0.42578-0.9502-0.9502s0.42529-0.9502,0.9502-0.9502h8.88965\n\t\t\t\t\t\tC14.96948,12.66162,15.39478,13.0874,15.39478,13.61182z M15.39478,18.05615c0,0.52441-0.42529,0.9502-0.9502,0.9502H5.55493\n\t\t\t\t\t\tc-0.5249,0-0.9502-0.42578-0.9502-0.9502s0.42529-0.9502,0.9502-0.9502h8.88965\n\t\t\t\t\t\tC14.96948,17.10596,15.39478,17.53174,15.39478,18.05615z M4.60474,9.1665c0-0.52441,0.42529-0.9502,0.9502-0.9502h2.22266\n\t\t\t\t\t\tc0.5249,0,0.9502,0.42578,0.9502,0.9502s-0.42529,0.9502-0.9502,0.9502H5.55493C5.03003,10.1167,4.60474,9.69092,4.60474,9.1665z",
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd"
                            }
                        })])]), e("div", [e("p", {
                            staticClass: "tawk-text-regular-2",
                            domProps: {
                                innerHTML: t._s(n.title)
                            }
                        }), n.subtitle.length ? e("p", {
                            staticClass: "tawk-text-regular-2",
                            domProps: {
                                innerHTML: t._s(n.subtitle)
                            }
                        }) : t._e()])])
                    }
                    ))], 2) : t._e(), t.isLoading ? e("div", {
                        staticClass: "tawk-search-loader tawk-flex tawk-flex-middle"
                    }, [e("tawk-loader", {
                        staticClass: "tawk-margin-small-right",
                        attrs: {
                            type: "icon"
                        }
                    }), e("tawk-loader")], 1) : t._e()])
                }
                ), [], !1, null, null, null).exports, te = {
                    name: "tawk-search",
                    components: {
                        TawkIcon: l,
                        TawkSearchDropdown: Qt,
                        TawkSearchList: Zt,
                        TawkButton: H
                    },
                    props: {
                        hasIcon: {
                            type: Boolean,
                            default: !0
                        },
                        iconFlip: {
                            type: Boolean,
                            default: !1
                        },
                        isLoading: {
                            type: Boolean,
                            default: !1,
                            required: !0
                        },
                        isOpen: {
                            type: Boolean,
                            default: !1,
                            required: !0
                        },
                        options: {
                            type: Array,
                            default: function() {
                                return []
                            },
                            required: !0
                        },
                        optionsLimit: {
                            type: Number,
                            default: 10
                        },
                        searchDelay: {
                            type: Number,
                            default: 1e3
                        },
                        value: {
                            type: String,
                            default: ""
                        },
                        placeholderText: {
                            type: String,
                            default: "Search Here"
                        },
                        totalResults: {
                            type: Number,
                            default: 0
                        },
                        btnClass: {
                            type: String,
                            default: ""
                        },
                        tabindex: {
                            type: Number,
                            default: 0
                        }
                    },
                    data: function() {
                        return {
                            event: null,
                            hasValue: !1,
                            highlightItem: -1,
                            highlightShowAll: !1
                        }
                    },
                    created: function() {
                        window.addEventListener("click", this.handleCloseDropdown)
                    },
                    beforeDestroy: function() {
                        window.removeEventListener("click", this.handleCloseDropdown)
                    },
                    watch: {
                        options: function() {
                            this.highlightItem = -1
                        }
                    },
                    computed: {
                        iconClasses: function() {
                            return ["tawk-search-icon", this.iconFlip && "tawk-search-icon-flip"]
                        },
                        reducedOptions: function() {
                            return this.options.slice(0, this.optionsLimit)
                        }
                    },
                    methods: {
                        closeDropdown: function() {
                            this.$emit("update:isOpen", !1),
                            this.highlightItem = -1,
                            this.highlightShowAll = !1
                        },
                        handleClearInput: function() {
                            this.$refs.input.value.length && (this.handleClearValue(),
                            this.closeDropdown(),
                            this.$emit("clearInput"))
                        },
                        handleClearValue: function() {
                            this.$refs.input.value = "",
                            this.hasValue = !1
                        },
                        handleCloseDropdown: function(t) {
                            this.$el.contains(t.target) || this.closeDropdown()
                        },
                        handleEnterSelectItem: function() {
                            if (this.highlightShowAll || -1 === this.highlightItem)
                                this.handleShowAll(),
                                this.handleFocusOut();
                            else {
                                var t = {};
                                this.options.length && (t = this.reducedOptions[this.highlightItem]),
                                this.handleSelectItem(t)
                            }
                        },
                        handleFocus: function() {
                            this.$emit("update:isOpen", !0),
                            this.$refs.input.focus()
                        },
                        handleFocusOut: function() {
                            this.closeDropdown(),
                            this.$refs.input.blur()
                        },
                        handleHighlightItem: function(t) {
                            var e;
                            this.options.length && (e = this.reducedOptions.length - 1),
                            t > e ? this.options.length && this.options.length > this.optionsLimit ? (this.highlightShowAll = !0,
                            this.highlightItem = -1) : (this.highlightShowAll = !1,
                            this.highlightItem = 0) : t < 0 ? this.options.length && !this.highlightShowAll && this.options.length > this.optionsLimit ? (this.highlightShowAll = !0,
                            this.highlightItem = -1) : (this.highlightShowAll = !1,
                            this.highlightItem = e) : t <= e && (0 == t && -1 == this.highlightItem && !this.highlightShowAll && this.options.length > this.optionsLimit ? (this.highlightShowAll = !0,
                            this.highlightItem = -1) : (this.highlightShowAll = !1,
                            this.highlightItem = t))
                        },
                        handleInput: function(t) {
                            this.$emit("input", t.target.value),
                            this.handleTyping(t)
                        },
                        handleSelectItem: function(t) {
                            clearTimeout(this.event),
                            this.$emit("selectOption", t),
                            this.handleClearValue()
                        },
                        handleShowAll: function() {
                            clearTimeout(this.event),
                            this.$emit("showAll"),
                            this.handleClearValue(),
                            this.closeDropdown()
                        },
                        handleTyping: function(t) {
                            var e = this;
                            if ("input" !== t.type && t.key) {
                                var n = t.key
                                  , r = /^[a-zA-Z0-9]$/.test(n)
                                  , i = ["Backspace", "Delete"].includes(n);
                                if (!r && !i)
                                    return
                            }
                            clearTimeout(this.event),
                            this.$refs && this.$refs.input && (this.$refs.input.value.length > 1 ? this.hasValue = !0 : this.hasValue = !1,
                            this.event = setTimeout((function() {
                                e.$emit("submitSearch")
                            }
                            ), this.searchDelay))
                        },
                        focusInput: function() {
                            this.$refs.input.focus(),
                            this.hasValue && this.$emit("showAll")
                        }
                    },
                    directives: {
                        "click-outside": {
                            bind: function(t, e, n) {
                                Lt = function(e) {
                                    t.contains(e.target) || n.context.closeDropdown()
                                }
                                ,
                                document.addEventListener("click", Lt),
                                document.addEventListener("touchstart", Lt)
                            },
                            unbind: function() {
                                document.removeEventListener("click", Lt),
                                document.removeEventListener("touchstart", Lt)
                            }
                        }
                    }
                }, ee = (n("bb38"),
                s(te, (function() {
                    var t = this
                      , e = t._self._c;
                    return e("div", t._b({
                        staticClass: "tawk-search-wrapper tawk-box-shadow-xsmall"
                    }, "div", t.$attrs, !1), [e("input", {
                        directives: [{
                            name: "click-outside",
                            rawName: "v-click-outside"
                        }],
                        ref: "input",
                        staticClass: "tawk-input tawk-search",
                        class: [t.iconFlip ? "tawk-search-left-padding" : "tawk-search-right-padding"],
                        attrs: {
                            type: "text",
                            placeholder: t.placeholderText,
                            title: t.placeholderText,
                            tabindex: t.tabindex
                        },
                        on: {
                            focus: t.handleFocus,
                            input: t.handleInput,
                            keyup: t.handleTyping,
                            keydown: [function(e) {
                                return !e.type.indexOf("key") && t._k(e.keyCode, "delete", [8, 46], e.key, ["Backspace", "Delete", "Del"]) ? null : t.handleTyping.apply(null, arguments)
                            }
                            , function(e) {
                                return !e.type.indexOf("key") && t._k(e.keyCode, "up", 38, e.key, ["Up", "ArrowUp"]) ? null : (e.stopPropagation(),
                                t.handleHighlightItem(t.highlightItem - 1))
                            }
                            , function(e) {
                                return !e.type.indexOf("key") && t._k(e.keyCode, "down", 40, e.key, ["Down", "ArrowDown"]) ? null : (e.stopPropagation(),
                                t.handleHighlightItem(t.highlightItem + 1))
                            }
                            , function(e) {
                                return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.handleEnterSelectItem.apply(null, arguments)
                            }
                            , function(e) {
                                return !e.type.indexOf("key") && t._k(e.keyCode, "esc", 27, e.key, ["Esc", "Escape"]) ? null : t.handleFocusOut.apply(null, arguments)
                            }
                            ]
                        }
                    }), t.hasValue ? e("tawk-button", {
                        staticClass: "tawk-search-button-close",
                        class: [t.iconFlip ? "tawk-search-left-button" : "tawk-search-right-button"],
                        attrs: {
                            isRounded: !0,
                            label: t.$i18n ? t.$i18n("kb", "clear_search") : "Clear Search",
                            tabindex: t.tabindex
                        },
                        on: {
                            click: t.handleClearInput
                        }
                    }, [e("tawk-icon", {
                        attrs: {
                            type: "close"
                        }
                    })], 1) : t._e(), e("tawk-button", {
                        staticClass: "tawk-search-button tawk-button-hover",
                        class: [t.iconFlip ? "tawk-search-left-button" : "tawk-search-right-button", t.btnClass],
                        attrs: {
                            isText: !0,
                            label: t.$i18n ? t.$i18n("kb", "submit_search") : "Submit Search",
                            tabindex: t.tabindex
                        },
                        on: {
                            click: t.focusInput
                        }
                    }, [t.hasIcon ? e("tawk-icon", {
                        class: t.iconClasses,
                        attrs: {
                            type: "search"
                        }
                    }) : t._e()], 1), e("transition", {
                        attrs: {
                            name: "slide-fade"
                        }
                    }, [t.isOpen ? e("tawk-search-dropdown", {
                        attrs: {
                            isOpen: t.isOpen
                        }
                    }, [e("tawk-search-list", {
                        attrs: {
                            isLoading: t.isLoading,
                            options: t.options,
                            optionsLimit: t.optionsLimit,
                            reducedOptions: t.reducedOptions,
                            highlightItem: t.highlightItem,
                            highlightShowAll: t.highlightShowAll,
                            totalResults: t.totalResults,
                            textAlign: t.iconFlip
                        },
                        on: {
                            handleSelectItem: t.handleSelectItem,
                            handleShowAll: t.handleShowAll
                        }
                    })], 1) : t._e()], 1)], 1)
                }
                ), [], !1, null, null, null)).exports, ne = {
                    name: "tawk-textarea",
                    mixins: [Z],
                    props: {
                        errorMessage: {
                            type: Object,
                            default: function() {
                                return {}
                            }
                        },
                        isRequired: {
                            type: Boolean,
                            default: !1
                        },
                        isSuccess: {
                            type: Boolean,
                            default: !1
                        },
                        label: {
                            type: String,
                            default: ""
                        },
                        value: {
                            type: String,
                            default: ""
                        },
                        validation: {
                            type: String,
                            default: ""
                        },
                        invalidType: {
                            type: String,
                            default: ""
                        },
                        width: Number
                    },
                    data: function() {
                        return {
                            isActive: !1,
                            textareaId: ""
                        }
                    },
                    created: function() {
                        this.handleId()
                    },
                    mounted: function() {
                        this.customStyle(this.$refs.textarea.clientHeight, this.$refs.label.clientHeight)
                    },
                    computed: {
                        handleWidth: function() {
                            return {
                                "max-width": !this.width || "".concat(this.width, "px !important")
                            }
                        },
                        textareaClass: function() {
                            return ["tawk-textarea tawk-padding-small tawk-border-radius", this.invalidType && "tawk-form-danger", this.isSuccess && "tawk-form-success"]
                        },
                        labelClass: function() {
                            return ["tawk-form-label", this.invalidType && "tawk-text-red-1", this.isSuccess && "tawk-text-green-1", this.isActive || this.$props.value ? "tawk-active" : "", this.labelCustomSize ? "tawk-form-label-custom-style" : ""]
                        },
                        errorLabel: function() {
                            return this.errorMessage[this.invalidType]
                        }
                    },
                    methods: {
                        setActive: function() {
                            this.isActive = !0,
                            this.$emit("focus")
                        },
                        unsetActive: function() {
                            this.isActive && !this.$refs.textarea.value.length > 0 && (this.isActive = !1),
                            this.isRequired ? !this.handleIsEmpty() && this.validation.length && this.handleValidation() : this.validation.length && this.handleValidation(),
                            this.$emit("blur")
                        },
                        handleInput: function(t) {
                            this.$emit("input", t.target.value)
                        },
                        handleId: function() {
                            void 0 === this.$attrs.id || "" === this.$attrs.id ? this.textareaId = N.generateUUID() : this.textareaId = this.$attrs.id
                        },
                        handleIsEmpty: function() {
                            return N.isEmpty(this.$refs.textarea.value) ? (this.$emit("update:error", !0),
                            this.$emit("update:invalidType", "required"),
                            !0) : (this.$emit("update:error", !1),
                            this.$emit("update:invalidType", ""),
                            !1)
                        },
                        handleValidation: function() {
                            N.isValid({
                                value: this.$refs.textarea.value,
                                type: this.validation
                            }).isValid ? (this.$emit("update:error", !1),
                            this.$emit("update:invalidType", "")) : (this.$emit("update:error", !0),
                            this.$emit("update:invalidType", this.validation))
                        },
                        validate: function() {
                            this.unsetActive()
                        }
                    }
                }, re = (n("29b6"),
                s(ne, (function() {
                    var t = this
                      , e = t._self._c;
                    return e("div", {
                        staticClass: "tawk-form-wrapper",
                        style: t.handleWidth
                    }, [e("textarea", t._b({
                        ref: "textarea",
                        class: t.textareaClass,
                        style: t.inputCustomStyle,
                        attrs: {
                            role: "textarea",
                            id: t.textareaId,
                            required: t.isRequired,
                            "aria-required": t.isRequired,
                            "aria-placeholder": t.label,
                            "aria-label": (null === t.label || 0 === t.label.length) && "Input field",
                            "aria-labellby": !(null === t.label || !t.label.length) && t.textareaId,
                            maxlength: "500"
                        },
                        domProps: {
                            value: t.value
                        },
                        on: {
                            focus: t.setActive,
                            blur: t.unsetActive,
                            input: t.handleInput
                        }
                    }, "textarea", t.$attrs, !1)), e("label", {
                        ref: "label",
                        class: t.labelClass,
                        attrs: {
                            for: t.textareaId
                        }
                    }, [t.isRequired ? e("span", [t._v("*")]) : t._e(), t._v(" " + t._s(t.label))]), t.invalidType ? e("small", {
                        staticClass: "tawk-text-red-1 tawk-text-regular-1"
                    }, [t._v(" " + t._s(t.errorLabel) + " ")]) : t._e()])
                }
                ), [], !1, null, null, null)).exports, ie = 36e5, oe = {
                    name: "tawk-timeago",
                    props: {
                        datetime: {
                            type: [String, Date, Number],
                            required: !0
                        },
                        isLive: {
                            type: Boolean
                        },
                        isDuration: {
                            type: Boolean
                        },
                        timeOnly: {
                            type: Boolean
                        },
                        format: {
                            type: Object,
                            default: function() {
                                return {
                                    just: "Just Now",
                                    past: "#time ago",
                                    today: "Today, #time",
                                    second: {
                                        one: "#num second",
                                        other: "#num seconds"
                                    },
                                    minute: {
                                        one: "#num minute",
                                        other: "#num minutes"
                                    },
                                    hour: {
                                        one: "#num hour",
                                        other: "#num hours"
                                    },
                                    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                                    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                                }
                            }
                        },
                        pluralize: {
                            type: Function,
                            default: function(t) {
                                return 1 === t ? "one" : "other"
                            }
                        }
                    },
                    data: function() {
                        return {
                            refreshMilliSeconds: 6e4,
                            updateInterval: null
                        }
                    },
                    mounted: function() {
                        var t = this;
                        this.display(),
                        this.isLive && (this.updateInterval = setInterval((function() {
                            t.display()
                        }
                        ), this.refreshMilliSeconds))
                    },
                    beforeDestroy: function() {
                        this.updateInterval && clearInterval(this.updateInterval)
                    },
                    methods: {
                        display: function() {
                            var t;
                            t = this.isDuration ? this.getDuration() : this.timeOnly ? this.getTimeOnly() : this.getDateTime(),
                            this.$el.textContent = t
                        },
                        difference: function(t) {
                            return t instanceof Date && (t = t.getTime()),
                            Math.floor((new Date).getTime() - t)
                        },
                        getDuration: function() {
                            var t, e = this.toDate(this.datetime), n = this.difference(e), r = this.format.past;
                            if (n < 6e4)
                                return this.format.just;
                            if (n < ie) {
                                var i = Math.round(n / 6e4)
                                  , o = this.pluralize(i);
                                t = this.format.minute[o].replace("#num", i)
                            } else {
                                var a = Math.round(n / ie)
                                  , s = this.pluralize(a);
                                t = this.format.hour[s].replace("#num", a)
                            }
                            return r.replace("#time", t)
                        },
                        getTimeOnly: function() {
                            var t = this.toDate(this.datetime)
                              , e = t.getHours()
                              , n = t.getMinutes();
                            return e < 10 && (e = "0" + e),
                            n < 10 && (n = "0" + n),
                            e + ":" + n
                        },
                        getDateTime: function() {
                            var t = this.toDate(this.datetime)
                              , e = new Date
                              , n = this.getTimeOnly();
                            if (t.setHours(0, 0, 0, 0) == e.setHours(0, 0, 0, 0))
                                return this.format.today.replace("#time", n);
                            var r = Math.floor((e - t) / 864e5)
                              , i = this.format.days[t.getDay()];
                            if (r < 7)
                                return "".concat(i, ", ").concat(n);
                            var o = t.getDate()
                              , a = this.format.months[t.getMonth()]
                              , s = t.getFullYear();
                            return s === e.getFullYear() ? "".concat(a, " ").concat(o, ", ").concat(n) : "".concat(a, " ").concat(o, " ").concat(s, ", ").concat(n)
                        },
                        toDate: function(t) {
                            return new Date(t)
                        }
                    }
                }, ae = (n("ed22"),
                s(oe, (function() {
                    var t = this;
                    return (0,
                    t._self._c)("time", t._b({
                        staticClass: "tawk-timeago"
                    }, "time", t.$attrs, !1))
                }
                ), [], !1, null, null, null)).exports, se = {
                    TawkAlert: u,
                    TawkAvatar: p,
                    TawkBadge: d,
                    TawkBranding: M,
                    TawkButton: H,
                    TawkCard: F,
                    TawkChatBubble: Y,
                    TawkChatInput: Dt,
                    TawkCheckbox: Nt,
                    TawkDropdown: qt,
                    TawkEmoji: J,
                    TawkEmojiPicker: Pt,
                    TawkIcon: l,
                    TawkImage: X,
                    TawkInput: et,
                    TawkList: Ut,
                    TawkListItem: Ft,
                    TawkLoader: Xt,
                    TawkOverlay: Vt,
                    TawkRadio: Kt,
                    TawkRating: Gt,
                    TawkSearch: ee,
                    TawkTextarea: re,
                    TawkTimeago: ae,
                    TawkVideo: W,
                    install: function(t) {
                        Object.keys(se).forEach((function(e) {
                            var n = se[e];
                            t.component(n.name, n)
                        }
                        ))
                    }
                }, le = se;
                e.default = le
            }
        })
    },
    f22b: function(t, e, n) {
        "use strict";
        var r = n("23e7")
          , i = n("f069");
        r({
            target: "Promise",
            stat: !0,
            forced: n("4738").CONSTRUCTOR
        }, {
            reject: function(t) {
                var e = i.f(this);
                return (0,
                e.reject)(t),
                e.promise
            }
        })
    },
    f36a: function(t, e, n) {
        "use strict";
        var r = n("e330");
        t.exports = r([].slice)
    },
    f5df: function(t, e, n) {
        "use strict";
        var r = n("00ee")
          , i = n("1626")
          , o = n("c6b6")
          , a = n("b622")("toStringTag")
          , s = Object
          , l = "Arguments" === o(function() {
            return arguments
        }());
        t.exports = r ? o : function(t) {
            var e, n, r;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = function(t, e) {
                try {
                    return t[e]
                } catch (t) {}
            }(e = s(t), a)) ? n : l ? o(e) : "Object" === (r = o(e)) && i(e.callee) ? "Arguments" : r
        }
    },
    f772: function(t, e, n) {
        "use strict";
        var r = n("5692")
          , i = n("90e3")
          , o = r("keys");
        t.exports = function(t) {
            return o[t] || (o[t] = i(t))
        }
    },
    fc6a: function(t, e, n) {
        "use strict";
        var r = n("44ad")
          , i = n("1d80");
        t.exports = function(t) {
            return r(i(t))
        }
    },
    fdbf: function(t, e, n) {
        "use strict";
        var r = n("04f8");
        t.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator
    }
}]);
//# sourceMappingURL=twk-chunk-vendors.js.map
