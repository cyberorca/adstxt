// Copyright 2011 Google Inc. All Rights Reserved.
(function() {
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var l, aa = function(a) { var b = 0; return function() { return b < a.length ? { done: !1, value: a[b++] } : { done: !0 } } },
        ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) { if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value; return a },
        ca = function(a) {
            a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
            for (var b = 0; b < a.length; ++b) { var c = a[b]; if (c && c.Math == Math) return c }
            throw Error("Cannot find global object");
        },
        da = ca(this),
        ea = function(a, b) { if (b) a: { var c = da;a = a.split("."); for (var d = 0; d < a.length - 1; d++) { var e = a[d]; if (!(e in c)) break a;
                    c = c[e] }
                a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && ba(c, a, { configurable: !0, writable: !0, value: b }) } };
    ea("Symbol", function(a) { if (a) return a; var b = function(f, g) { this.j = f;
            ba(this, "description", { configurable: !0, writable: !0, value: g }) };
        b.prototype.toString = function() { return this.j }; var c = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            d = 0,
            e = function(f) { if (this instanceof e) throw new TypeError("Symbol is not a constructor"); return new b(c + (f || "") + "_" + d++, f) }; return e });
    ea("Symbol.iterator", function(a) { if (a) return a;
        a = Symbol("Symbol.iterator"); for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) { var d = da[b[c]]; "function" === typeof d && "function" != typeof d.prototype[a] && ba(d.prototype, a, { configurable: !0, writable: !0, value: function() { return fa(aa(this)) } }) } return a });
    var fa = function(a) { a = { next: a };
            a[Symbol.iterator] = function() { return this }; return a },
        ha = function(a) { return a.raw = a },
        p = function(a) { var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator]; return b ? b.call(a) : { next: aa(a) } },
        t = function(a) { if (!(a instanceof Array)) { a = p(a); for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
                a = c } return a },
        ia = function(a, b) { return Object.prototype.hasOwnProperty.call(a, b) },
        ka = "function" == typeof Object.assign ? Object.assign : function(a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d =
                    arguments[c];
                if (d)
                    for (var e in d) ia(d, e) && (a[e] = d[e])
            }
            return a
        };
    ea("Object.assign", function(a) { return a || ka });
    var la = "function" == typeof Object.create ? Object.create : function(a) { var b = function() {};
            b.prototype = a; return new b },
        ma;
    if ("function" == typeof Object.setPrototypeOf) ma = Object.setPrototypeOf;
    else { var pa;
        a: { var qa = { a: !0 },
                ra = {}; try { ra.__proto__ = qa;
                pa = ra.a; break a } catch (a) {}
            pa = !1 }
        ma = pa ? function(a, b) { a.__proto__ = b; if (a.__proto__ !== b) throw new TypeError(a + " is not extensible"); return a } : null }
    var sa = ma,
        u = function(a, b) { a.prototype = la(b.prototype);
            a.prototype.constructor = a; if (sa) sa(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) { var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d) } else a[c] = b[c];
            a.ib = b.prototype },
        ta = function() { this.B = !1;
            this.o = null;
            this.l = void 0;
            this.j = 1;
            this.D = 0;
            this.A = null },
        ua = function(a) { if (a.B) throw new TypeError("Generator is already running");
            a.B = !0 };
    ta.prototype.C = function(a) { this.l = a };
    var va = function(a, b) { a.A = { bj: b, Bj: !0 };
        a.j = a.D };
    ta.prototype.return = function(a) { this.A = { return: a };
        this.j = this.D };
    var wa = function(a, b, c) { a.j = c; return { value: b } },
        xa = function(a) { this.j = new ta;
            this.l = a },
        Aa = function(a, b) { ua(a.j); var c = a.j.o; if (c) return ya(a, "return" in c ? c["return"] : function(d) { return { value: d, done: !0 } }, b, a.j.return);
            a.j.return(b); return za(a) },
        ya = function(a, b, c, d) { try { var e = b.call(a.j.o, c); if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object"); if (!e.done) return a.j.B = !1, e; var f = e.value } catch (g) { return a.j.o = null, va(a.j, g), za(a) }
            a.j.o = null;
            d.call(a.j, f); return za(a) },
        za = function(a) { for (; a.j.j;) try { var b = a.l(a.j); if (b) return a.j.B = !1, { value: b.value, done: !1 } } catch (c) { a.j.l = void 0, va(a.j, c) }
            a.j.B = !1; if (a.j.A) { b = a.j.A;
                a.j.A = null; if (b.Bj) throw b.bj; return { value: b.return, done: !0 } } return { value: void 0, done: !0 } },
        Ba = function(a) {
            this.next = function(b) { ua(a.j);
                a.j.o ? b = ya(a, a.j.o.next, b, a.j.C) : (a.j.C(b), b = za(a)); return b };
            this.throw = function(b) { ua(a.j);
                a.j.o ? b = ya(a, a.j.o["throw"], b, a.j.C) : (va(a.j, b), b = za(a)); return b };
            this.return = function(b) { return Aa(a, b) };
            this[Symbol.iterator] =
                function() { return this }
        },
        Ca = function(a) {
            function b(d) { return a.next(d) }

            function c(d) { return a.throw(d) } return new Promise(function(d, e) {
                function f(g) { g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e) }
                f(a.next()) }) },
        Da = function(a) { return Ca(new Ba(new xa(a))) },
        Ea = function() { for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c]; return b };
    ea("Promise", function(a) {
        function b() { this.j = null }

        function c(g) { return g instanceof e ? g : new e(function(h) { h(g) }) }
        if (a) return a;
        b.prototype.l = function(g) { if (null == this.j) { this.j = []; var h = this;
                this.o(function() { h.B() }) }
            this.j.push(g) };
        var d = da.setTimeout;
        b.prototype.o = function(g) { d(g, 0) };
        b.prototype.B = function() { for (; this.j && this.j.length;) { var g = this.j;
                this.j = []; for (var h = 0; h < g.length; ++h) { var k = g[h];
                    g[h] = null; try { k() } catch (m) { this.A(m) } } }
            this.j = null };
        b.prototype.A = function(g) {
            this.o(function() {
                throw g;
            })
        };
        var e = function(g) { this.j = 0;
            this.o = void 0;
            this.l = [];
            this.D = !1; var h = this.B(); try { g(h.resolve, h.reject) } catch (k) { h.reject(k) } };
        e.prototype.B = function() {
            function g(m) { return function(n) { k || (k = !0, m.call(h, n)) } } var h = this,
                k = !1; return { resolve: g(this.G), reject: g(this.A) } };
        e.prototype.G = function(g) {
            if (g === this) this.A(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof e) this.J(g);
            else {
                a: switch (typeof g) {
                    case "object":
                        var h = null != g; break a;
                    case "function":
                        h = !0; break a;
                    default:
                        h = !1 }
                h ?
                this.U(g) : this.C(g)
            }
        };
        e.prototype.U = function(g) { var h = void 0; try { h = g.then } catch (k) { this.A(k); return } "function" == typeof h ? this.L(h, g) : this.C(g) };
        e.prototype.A = function(g) { this.H(2, g) };
        e.prototype.C = function(g) { this.H(1, g) };
        e.prototype.H = function(g, h) { if (0 != this.j) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.j);
            this.j = g;
            this.o = h;
            2 === this.j && this.I();
            this.F() };
        e.prototype.I = function() {
            var g = this;
            d(function() { if (g.O()) { var h = da.console; "undefined" !== typeof h && h.error(g.o) } },
                1)
        };
        e.prototype.O = function() { if (this.D) return !1; var g = da.CustomEvent,
                h = da.Event,
                k = da.dispatchEvent; if ("undefined" === typeof k) return !0; "function" === typeof g ? g = new g("unhandledrejection", { cancelable: !0 }) : "function" === typeof h ? g = new h("unhandledrejection", { cancelable: !0 }) : (g = da.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
            g.promise = this;
            g.reason = this.o; return k(g) };
        e.prototype.F = function() {
            if (null != this.l) {
                for (var g = 0; g < this.l.length; ++g) f.l(this.l[g]);
                this.l =
                    null
            }
        };
        var f = new b;
        e.prototype.J = function(g) { var h = this.B();
            g.Vd(h.resolve, h.reject) };
        e.prototype.L = function(g, h) { var k = this.B(); try { g.call(h, k.resolve, k.reject) } catch (m) { k.reject(m) } };
        e.prototype.then = function(g, h) {
            function k(q, y) { return "function" == typeof q ? function(x) { try { m(q(x)) } catch (A) { n(A) } } : y } var m, n, r = new e(function(q, y) { m = q;
                n = y });
            this.Vd(k(g, m), k(h, n)); return r };
        e.prototype.catch = function(g) { return this.then(void 0, g) };
        e.prototype.Vd = function(g, h) {
            function k() {
                switch (m.j) {
                    case 1:
                        g(m.o);
                        break;
                    case 2:
                        h(m.o);
                        break;
                    default:
                        throw Error("Unexpected state: " + m.j);
                }
            }
            var m = this;
            null == this.l ? f.l(k) : this.l.push(k);
            this.D = !0
        };
        e.resolve = c;
        e.reject = function(g) { return new e(function(h, k) { k(g) }) };
        e.race = function(g) { return new e(function(h, k) { for (var m = p(g), n = m.next(); !n.done; n = m.next()) c(n.value).Vd(h, k) }) };
        e.all = function(g) {
            var h = p(g),
                k = h.next();
            return k.done ? c([]) : new e(function(m, n) {
                function r(x) { return function(A) { q[x] = A;
                        y--;
                        0 == y && m(q) } }
                var q = [],
                    y = 0;
                do q.push(void 0), y++, c(k.value).Vd(r(q.length -
                    1), n), k = h.next(); while (!k.done)
            })
        };
        return e
    });
    ea("Array.prototype.find", function(a) { return a ? a : function(b, c) { a: { var d = this;d instanceof String && (d = String(d)); for (var e = d.length, f = 0; f < e; f++) { var g = d[f]; if (b.call(c, g, f, d)) { b = g; break a } }
                b = void 0 } return b } });
    ea("WeakMap", function(a) {
        function b() {}

        function c(k) { var m = typeof k; return "object" === m && null !== k || "function" === m }

        function d(k) { if (!ia(k, f)) { var m = new b;
                ba(k, f, { value: m }) } }

        function e(k) { var m = Object[k];
            m && (Object[k] = function(n) { if (n instanceof b) return n;
                Object.isExtensible(n) && d(n); return m(n) }) }
        if (function() { if (!a || !Object.seal) return !1; try { var k = Object.seal({}),
                        m = Object.seal({}),
                        n = new a([
                            [k, 2],
                            [m, 3]
                        ]); if (2 != n.get(k) || 3 != n.get(m)) return !1;
                    n.delete(k);
                    n.set(m, 4); return !n.has(k) && 4 == n.get(m) } catch (r) { return !1 } }()) return a;
        var f = "$jscomp_hidden_" + Math.random();
        e("freeze");
        e("preventExtensions");
        e("seal");
        var g = 0,
            h = function(k) { this.j = (g += Math.random() + 1).toString(); if (k) { k = p(k); for (var m; !(m = k.next()).done;) m = m.value, this.set(m[0], m[1]) } };
        h.prototype.set = function(k, m) { if (!c(k)) throw Error("Invalid WeakMap key");
            d(k); if (!ia(k, f)) throw Error("WeakMap key fail: " + k);
            k[f][this.j] = m; return this };
        h.prototype.get = function(k) { return c(k) && ia(k, f) ? k[f][this.j] : void 0 };
        h.prototype.has = function(k) {
            return c(k) && ia(k, f) && ia(k[f],
                this.j)
        };
        h.prototype.delete = function(k) { return c(k) && ia(k, f) && ia(k[f], this.j) ? delete k[f][this.j] : !1 };
        return h
    });
    ea("Map", function(a) {
        if (function() { if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1; try { var h = Object.seal({ x: 4 }),
                        k = new a(p([
                            [h, "s"]
                        ])); if ("s" != k.get(h) || 1 != k.size || k.get({ x: 4 }) || k.set({ x: 4 }, "t") != k || 2 != k.size) return !1; var m = k.entries(),
                        n = m.next(); if (n.done || n.value[0] != h || "s" != n.value[1]) return !1;
                    n = m.next(); return n.done || 4 != n.value[0].x || "t" != n.value[1] || !m.next().done ? !1 : !0 } catch (r) { return !1 } }()) return a;
        var b = new WeakMap,
            c = function(h) {
                this.l = {};
                this.j =
                    f();
                this.size = 0;
                if (h) { h = p(h); for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1]) }
            };
        c.prototype.set = function(h, k) { h = 0 === h ? 0 : h; var m = d(this, h);
            m.list || (m.list = this.l[m.id] = []);
            m.entry ? m.entry.value = k : (m.entry = { next: this.j, Kb: this.j.Kb, head: this.j, key: h, value: k }, m.list.push(m.entry), this.j.Kb.next = m.entry, this.j.Kb = m.entry, this.size++); return this };
        c.prototype.delete = function(h) {
            h = d(this, h);
            return h.entry && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.l[h.id], h.entry.Kb.next = h.entry.next,
                h.entry.next.Kb = h.entry.Kb, h.entry.head = null, this.size--, !0) : !1
        };
        c.prototype.clear = function() { this.l = {};
            this.j = this.j.Kb = f();
            this.size = 0 };
        c.prototype.has = function(h) { return !!d(this, h).entry };
        c.prototype.get = function(h) { return (h = d(this, h).entry) && h.value };
        c.prototype.entries = function() { return e(this, function(h) { return [h.key, h.value] }) };
        c.prototype.keys = function() { return e(this, function(h) { return h.key }) };
        c.prototype.values = function() { return e(this, function(h) { return h.value }) };
        c.prototype.forEach =
            function(h, k) { for (var m = this.entries(), n; !(n = m.next()).done;) n = n.value, h.call(k, n[1], n[0], this) };
        c.prototype[Symbol.iterator] = c.prototype.entries;
        var d = function(h, k) { var m = k && typeof k; "object" == m || "function" == m ? b.has(k) ? m = b.get(k) : (m = "" + ++g, b.set(k, m)) : m = "p_" + k; var n = h.l[m]; if (n && ia(h.l, m))
                    for (h = 0; h < n.length; h++) { var r = n[h]; if (k !== k && r.key !== r.key || k === r.key) return { id: m, list: n, index: h, entry: r } }
                return { id: m, list: n, index: -1, entry: void 0 } },
            e = function(h, k) {
                var m = h.j;
                return fa(function() {
                    if (m) {
                        for (; m.head !=
                            h.j;) m = m.Kb;
                        for (; m.next != m.head;) return m = m.next, { done: !1, value: k(m) };
                        m = null
                    }
                    return { done: !0, value: void 0 }
                })
            },
            f = function() { var h = {}; return h.Kb = h.next = h.head = h },
            g = 0;
        return c
    });
    ea("Number.isFinite", function(a) { return a ? a : function(b) { return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b } });
    ea("Number.isInteger", function(a) { return a ? a : function(b) { return Number.isFinite(b) ? b === Math.floor(b) : !1 } });
    ea("Math.trunc", function(a) { return a ? a : function(b) { b = Number(b); if (isNaN(b) || Infinity === b || -Infinity === b || 0 === b) return b; var c = Math.floor(Math.abs(b)); return 0 > b ? -c : c } });
    var Fa = function(a, b) { a instanceof String && (a += ""); var c = 0,
            d = !1,
            e = { next: function() { if (!d && c < a.length) { var f = c++; return { value: b(f, a[f]), done: !1 } }
                    d = !0; return { done: !0, value: void 0 } } };
        e[Symbol.iterator] = function() { return e }; return e };
    ea("Array.prototype.entries", function(a) { return a ? a : function() { return Fa(this, function(b, c) { return [b, c] }) } });
    ea("Array.prototype.keys", function(a) { return a ? a : function() { return Fa(this, function(b) { return b }) } });
    ea("Number.isNaN", function(a) { return a ? a : function(b) { return "number" === typeof b && isNaN(b) } });
    ea("Set", function(a) {
        if (function() { if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1; try { var c = Object.seal({ x: 4 }),
                        d = new a(p([c])); if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({ x: 4 }) != d || 2 != d.size) return !1; var e = d.entries(),
                        f = e.next(); if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next(); return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done } catch (g) { return !1 } }()) return a;
        var b = function(c) {
            this.j = new Map;
            if (c) {
                c =
                    p(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.j.size
        };
        b.prototype.add = function(c) { c = 0 === c ? 0 : c;
            this.j.set(c, c);
            this.size = this.j.size; return this };
        b.prototype.delete = function(c) { c = this.j.delete(c);
            this.size = this.j.size; return c };
        b.prototype.clear = function() { this.j.clear();
            this.size = 0 };
        b.prototype.has = function(c) { return this.j.has(c) };
        b.prototype.entries = function() { return this.j.entries() };
        b.prototype.values = function() { return this.j.values() };
        b.prototype.keys = b.prototype.values;
        b.prototype[Symbol.iterator] = b.prototype.values;
        b.prototype.forEach = function(c, d) { var e = this;
            this.j.forEach(function(f) { return c.call(d, f, f, e) }) };
        return b
    });
    ea("Array.from", function(a) { return a ? a : function(b, c, d) { c = null != c ? c : function(h) { return h }; var e = [],
                f = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator]; if ("function" == typeof f) { b = f.call(b); for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++)) } else
                for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g)); return e } });
    ea("Object.entries", function(a) { return a ? a : function(b) { var c = [],
                d; for (d in b) ia(b, d) && c.push([d, b[d]]); return c } });
    var Ia = function(a, b, c) { if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined"); if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression"); return a + "" };
    ea("String.prototype.endsWith", function(a) { return a ? a : function(b, c) { var d = Ia(this, b, "endsWith");
            b += "";
            void 0 === c && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length)); for (var e = b.length; 0 < e && 0 < c;)
                if (d[--c] != b[--e]) return !1;
            return 0 >= e } });
    ea("String.prototype.startsWith", function(a) { return a ? a : function(b, c) { var d = Ia(this, b, "startsWith");
            b += ""; var e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length)); for (var g = 0; g < f && c < e;)
                if (d[c++] != b[g++]) return !1;
            return g >= f } });
    ea("String.prototype.repeat", function(a) { return a ? a : function(b) { var c = Ia(this, null, "repeat"); if (0 > b || 1342177279 < b) throw new RangeError("Invalid count value");
            b |= 0; for (var d = ""; b;)
                if (b & 1 && (d += c), b >>>= 1) c += c;
            return d } });
    ea("globalThis", function(a) { return a || da });
    ea("Array.prototype.values", function(a) { return a ? a : function() { return Fa(this, function(b, c) { return c }) } });
    ea("Object.is", function(a) { return a ? a : function(b, c) { return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c } });
    ea("Array.prototype.includes", function(a) { return a ? a : function(b, c) { var d = this;
            d instanceof String && (d = String(d)); var e = d.length;
            c = c || 0; for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) { var f = d[c]; if (f === b || Object.is(f, b)) return !0 } return !1 } });
    ea("String.prototype.includes", function(a) { return a ? a : function(b, c) { return -1 !== Ia(this, b, "includes").indexOf(b, c || 0) } });
    ea("Array.prototype.flat", function(a) { return a ? a : function(b) { b = void 0 === b ? 1 : b; for (var c = [], d = 0; d < this.length; d++) { var e = this[d];
                Array.isArray(e) && 0 < b ? (e = Array.prototype.flat.call(e, b - 1), c.push.apply(c, e)) : c.push(e) } return c } });
    ea("String.prototype.padStart", function(a) { return a ? a : function(b, c) { var d = Ia(this, null, "padStart");
            b -= d.length;
            c = void 0 !== c ? String(c) : " "; return (0 < b && c ? c.repeat(Math.ceil(b / c.length)).substring(0, b) : "") + d } });
    ea("Object.values", function(a) { return a ? a : function(b) { var c = [],
                d; for (d in b) ia(b, d) && c.push(b[d]); return c } });
    ea("Number.parseInt", function(a) { return a || parseInt });
    var Ja = Ja || {},
        v = this || self,
        Ka = function(a, b, c) { a = a.split(".");
            c = c || v;
            a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]); for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b },
        La = function(a) { a = a.split("."); for (var b = v, c = 0; c < a.length; c++)
                if (b = b[a[c]], null == b) return null;
            return b },
        Ma = function(a) { var b = typeof a; return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null" },
        Na = function(a) {
            var b = Ma(a);
            return "array" == b || "object" == b &&
                "number" == typeof a.length
        },
        Oa = function(a) { var b = typeof a; return "object" == b && null != a || "function" == b },
        Pa = "closure_uid_" + (1E9 * Math.random() >>> 0),
        Qa = 0,
        Ra = function(a, b, c) { return a.call.apply(a.bind, arguments) },
        Ua = function(a, b, c) { if (!a) throw Error(); if (2 < arguments.length) { var d = Array.prototype.slice.call(arguments, 2); return function() { var e = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(e, d); return a.apply(b, e) } } return function() { return a.apply(b, arguments) } },
        Va = function(a, b, c) {
            Function.prototype.bind &&
                -1 != Function.prototype.bind.toString().indexOf("native code") ? Va = Ra : Va = Ua;
            return Va.apply(null, arguments)
        },
        Wa = function(a, b) { var c = Array.prototype.slice.call(arguments, 1); return function() { var d = c.slice();
                d.push.apply(d, arguments); return a.apply(this, d) } },
        Xa = function() { return Date.now() },
        Ya = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.ib = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.Im = function(d, e, f) {
                for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
                return b.prototype[e].apply(d, g)
            }
        },
        Za = function(a) { return a };

    function $a(a, b) { if (Error.captureStackTrace) Error.captureStackTrace(this, $a);
        else { var c = Error().stack;
            c && (this.stack = c) }
        a && (this.message = String(a));
        void 0 !== b && (this.cause = b) }
    Ya($a, Error);
    $a.prototype.name = "CustomError";
    var ab;

    function bb(a, b) { a = a.split("%s"); for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        $a.call(this, c + a[d]) }
    Ya(bb, $a);
    bb.prototype.name = "AssertionError";
    var cb, db = "undefined" !== typeof TextEncoder;

    function eb(a) {
        var b = !1;
        b = void 0 === b ? !1 : b;
        if (db) { if (b && /(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(a)) throw Error("Found an unpaired surrogate");
            a = (cb || (cb = new TextEncoder)).encode(a) } else {
            for (var c = 0, d = new Uint8Array(3 * a.length), e = 0; e < a.length; e++) {
                var f = a.charCodeAt(e);
                if (128 > f) d[c++] = f;
                else {
                    if (2048 > f) d[c++] = f >> 6 | 192;
                    else {
                        if (55296 <= f && 57343 >= f) {
                            if (56319 >= f && e < a.length) {
                                var g = a.charCodeAt(++e);
                                if (56320 <= g && 57343 >= g) {
                                    f = 1024 * (f - 55296) + g - 56320 + 65536;
                                    d[c++] = f >> 18 |
                                        240;
                                    d[c++] = f >> 12 & 63 | 128;
                                    d[c++] = f >> 6 & 63 | 128;
                                    d[c++] = f & 63 | 128;
                                    continue
                                } else e--
                            }
                            if (b) throw Error("Found an unpaired surrogate");
                            f = 65533
                        }
                        d[c++] = f >> 12 | 224;
                        d[c++] = f >> 6 & 63 | 128
                    }
                    d[c++] = f & 63 | 128
                }
            }
            a = c === d.length ? d : d.subarray(0, c)
        }
        return a
    };
    var fb = function(a, b) { return 0 == a.lastIndexOf(b, 0) },
        gb = function(a, b) { var c = a.length - b.length; return 0 <= c && a.indexOf(b, c) == c },
        ib = function(a, b) { var c = String(b).toLowerCase();
            a = String(a.slice(0, b.length)).toLowerCase(); return 0 == (c < a ? -1 : c == a ? 0 : 1) },
        w = function(a) { return /^[\s\xa0]*$/.test(a) },
        jb = String.prototype.trim ? function(a) { return a.trim() } : function(a) { return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1] },
        tb = function(a) {
            if (!kb.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(lb, "&amp;")); - 1 != a.indexOf("<") &&
                (a = a.replace(nb, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(ob, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(pb, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(qb, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(rb, "&#0;"));
            return a
        },
        lb = /&/g,
        nb = /</g,
        ob = />/g,
        pb = /"/g,
        qb = /'/g,
        rb = /\x00/g,
        kb = /[\x00&<>"']/,
        ub = function(a, b) { return -1 != a.toLowerCase().indexOf(b.toLowerCase()) },
        wb = function(a, b) {
            var c = 0;
            a = jb(String(a)).split(".");
            b = jb(String(b)).split(".");
            for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
                var f = a[e] ||
                    "",
                    g = b[e] || "";
                do { f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""]; if (0 == f[0].length && 0 == g[0].length) break;
                    c = vb(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || vb(0 == f[2].length, 0 == g[2].length) || vb(f[2], g[2]);
                    f = f[3];
                    g = g[3] } while (0 == c)
            }
            return c
        },
        vb = function(a, b) { return a < b ? -1 : a > b ? 1 : 0 };

    function xb() { var a = v.navigator; return a && (a = a.userAgent) ? a : "" }

    function z(a) { return -1 != xb().indexOf(a) }

    function yb(a) { for (var b = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g"), c = [], d; d = b.exec(a);) c.push([d[1], d[2], d[3] || void 0]); return c };

    function zb() { return z("Opera") }

    function Ab() { return z("Trident") || z("MSIE") }

    function Bb() { return z("Edge") }

    function Cb() { return z("Firefox") || z("FxiOS") }

    function Db() { return z("Safari") && !(Eb() || z("Coast") || zb() || Bb() || z("Edg/") || z("OPR") || Cb() || z("Silk") || z("Android")) }

    function Eb() { return (z("Chrome") || z("CriOS")) && !Bb() || z("Silk") }

    function Fb() { return z("Android") && !(Eb() || Cb() || zb() || z("Silk")) }

    function Gb(a) { var b = {};
        a.forEach(function(c) { b[c[0]] = c[1] }); return function(c) { return b[c.find(function(d) { return d in b })] || "" } }

    function Hb() { var a = xb(); if (Ab()) return Ib(a);
        a = yb(a); var b = Gb(a); return zb() ? b(["Version", "Opera"]) : Bb() ? b(["Edge"]) : z("Edg/") ? b(["Edg"]) : z("Silk") ? b(["Silk"]) : Eb() ? b(["Chrome", "CriOS", "HeadlessChrome"]) : (a = a[2]) && a[1] || "" }

    function Ib(a) { var b = /rv: *([\d\.]*)/.exec(a); if (b && b[1]) return b[1];
        b = ""; var c = /MSIE +([\d\.]+)/.exec(a); if (c && c[1])
            if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1])
                if (a && a[1]) switch (a[1]) {
                    case "4.0":
                        b = "8.0"; break;
                    case "5.0":
                        b = "9.0"; break;
                    case "6.0":
                        b = "10.0"; break;
                    case "7.0":
                        b = "11.0" } else b = "7.0";
                else b = c[1];
        return b }

    function Jb(a) { var b = xb(); if ("Internet Explorer" === a) return Ab() ? Ib(b) : "";
        b = yb(b); var c = Gb(b); switch (a) {
            case "Opera":
                if (zb()) return c(["Version", "Opera"]); if (z("OPR")) return c(["OPR"]); break;
            case "Microsoft Edge":
                if (Bb()) return c(["Edge"]); if (z("Edg/")) return c(["Edg"]); break;
            case "Chromium":
                if (Eb()) return c(["Chrome", "CriOS", "HeadlessChrome"]) } return "Firefox" === a && Cb() || "Safari" === a && Db() || "Android Browser" === a && Fb() || "Silk" === a && z("Silk") ? (a = b[2]) && a[1] || "" : "" }

    function Kb(a) { a = Jb(a); if ("" === a) return NaN;
        a = a.split("."); return 0 === a.length ? NaN : Number(a[0]) };

    function Lb() { return z("iPhone") && !z("iPod") && !z("iPad") };
    var Nb = function(a, b) { if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0); for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1 },
        Ob = function(a, b) { for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a) };

    function Pb(a, b) { for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; --d) d in c && b.call(void 0, c[d], d, a) }
    var Qb = function(a, b) { for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
                if (g in f) { var h = f[g];
                    b.call(void 0, h, g, a) && (d[e++] = h) }
            return d },
        Rb = function(a, b) { for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a)); return d },
        Sb = function(a, b, c) { var d = c;
            Ob(a, function(e, f) { d = b.call(void 0, d, e, f, a) }); return d },
        Tb = function(a, b) {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e],
                        e, a)) return !0;
            return !1
        };

    function Ub(a, b) { b = Vb(a, b); return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b] }

    function Vb(a, b) { for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return e;
        return -1 }

    function Wb(a, b) { for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; d--)
            if (d in c && b.call(void 0, c[d], d, a)) return d;
        return -1 }

    function Xb(a, b) { return 0 <= Nb(a, b) }

    function Yb(a, b) { b = Nb(a, b); var c;
        (c = 0 <= b) && Zb(a, b); return c }

    function Zb(a, b) { return 1 == Array.prototype.splice.call(a, b, 1).length }

    function $b(a, b) { var c = 0;
        Pb(a, function(d, e) { b.call(void 0, d, e, a) && Zb(a, e) && c++ }) }

    function ac(a) { return Array.prototype.concat.apply([], arguments) }

    function bc(a) { var b = a.length; if (0 < b) { for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d]; return c } return [] }

    function cc(a) { for (var b = 0, c = 0, d = {}; c < a.length;) { var e = a[c++],
                f = Oa(e) ? "o" + (Object.prototype.hasOwnProperty.call(e, Pa) && e[Pa] || (e[Pa] = ++Qa)) : (typeof e).charAt(0) + e;
            Object.prototype.hasOwnProperty.call(d, f) || (d[f] = !0, a[b++] = e) }
        a.length = b }

    function dc(a, b) { a.sort(b || ec) }

    function ec(a, b) { return a > b ? 1 : a < b ? -1 : 0 }

    function fc(a) { for (var b = [], c = 0; c < a; c++) b[c] = ""; return b };
    var gc = function(a) { gc[" "](a); return a };
    gc[" "] = function() {};
    var hc = function(a, b) { try { return gc(a[b]), !0 } catch (c) {} return !1 },
        jc = function(a, b) { var c = ic; return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a) };
    var kc = zb(),
        lc = Ab(),
        mc = z("Edge"),
        pc = z("Gecko") && !(ub(xb(), "WebKit") && !z("Edge")) && !(z("Trident") || z("MSIE")) && !z("Edge"),
        qc = ub(xb(), "WebKit") && !z("Edge"),
        rc = qc && z("Mobile"),
        sc, tc = v.navigator || null;
    sc = tc && tc.platform || "";
    var uc = z("Macintosh"),
        vc = z("Windows"),
        wc = z("Android"),
        xc = Lb(),
        yc = z("iPad"),
        zc = z("iPod"),
        Ac = Lb() || z("iPad") || z("iPod"),
        Bc = function() { var a = v.document; return a ? a.documentMode : void 0 },
        Cc;
    a: { var Dc = "",
            Ec = function() { var a = xb(); if (pc) return /rv:([^\);]+)(\)|;)/.exec(a); if (mc) return /Edge\/([\d\.]+)/.exec(a); if (lc) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a); if (qc) return /WebKit\/(\S+)/.exec(a); if (kc) return /(?:Version)[ \/]?(\S+)/.exec(a) }();Ec && (Dc = Ec ? Ec[1] : ""); if (lc) { var Fc = Bc(); if (null != Fc && Fc > parseFloat(Dc)) { Cc = String(Fc); break a } }
        Cc = Dc }
    var Gc = Cc,
        ic = {},
        Hc = function(a) { return jc(a, function() { return 0 <= wb(Gc, a) }) },
        Ic;
    if (v.document && lc) { var Jc = Bc();
        Ic = Jc ? Jc : parseInt(Gc, 10) || void 0 } else Ic = void 0;
    var Kc = Ic;
    var Lc = Cb();
    Fb();
    Eb();
    var Mc = Db() && !(Lb() || z("iPad") || z("iPod"));
    var Nc = {},
        Oc = null,
        Qc = function(a, b) { void 0 === b && (b = 0);
            Pc();
            b = Nc[b]; for (var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0; e < a.length - 2; e += 3) { var g = a[e],
                    h = a[e + 1],
                    k = a[e + 2],
                    m = b[g >> 2];
                g = b[(g & 3) << 4 | h >> 4];
                h = b[(h & 15) << 2 | k >> 6];
                k = b[k & 63];
                c[f++] = "" + m + g + h + k }
            m = 0;
            k = d; switch (a.length - e) {
                case 2:
                    m = a[e + 1], k = b[(m & 15) << 2] || d;
                case 1:
                    a = a[e], c[f] = "" + b[a >> 2] + b[(a & 3) << 4 | m >> 4] + k + d } return c.join("") },
        Rc = function(a) {
            for (var b = [], c = 0, d = 0; d < a.length; d++) { var e = a.charCodeAt(d);
                255 < e && (b[c++] = e & 255, e >>= 8);
                b[c++] = e }
            return Qc(b,
                3)
        },
        Tc = function(a) { var b = [];
            Sc(a, function(c) { b.push(c) }); return b },
        Uc = function(a) { var b = a.length,
                c = 3 * b / 4;
            c % 3 ? c = Math.floor(c) : -1 != "=.".indexOf(a[b - 1]) && (c = -1 != "=.".indexOf(a[b - 2]) ? c - 2 : c - 1); var d = new Uint8Array(c),
                e = 0;
            Sc(a, function(f) { d[e++] = f }); return e !== c ? d.subarray(0, e) : d },
        Sc = function(a, b) {
            function c(k) { for (; d < a.length;) { var m = a.charAt(d++),
                        n = Oc[m]; if (null != n) return n; if (!w(m)) throw Error("Unknown base64 encoding at char: " + m); } return k }
            Pc();
            for (var d = 0;;) {
                var e = c(-1),
                    f = c(0),
                    g = c(64),
                    h = c(64);
                if (64 ===
                    h && -1 === e) break;
                b(e << 2 | f >> 4);
                64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
            }
        },
        Pc = function() { if (!Oc) { Oc = {}; for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) { var d = a.concat(b[c].split(""));
                    Nc[c] = d; for (var e = 0; e < d.length; e++) { var f = d[e];
                        void 0 === Oc[f] && (Oc[f] = e) } } } };
    var Vc = "undefined" !== typeof Uint8Array;

    function Wc(a) { return Vc && null != a && a instanceof Uint8Array }
    var Xc, Yc = {};
    var Zc;

    function $c() { if (Yc !== Yc) throw Error("illegal external caller"); }
    var ad = function(a) { $c();
        this.X = a; if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values"); };
    ad.prototype.isEmpty = function() { return null == this.X };
    var bd = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol(void 0) : void 0;

    function cd(a, b) { Object.isFrozen(a) || (bd ? a[bd] |= b : void 0 !== a.sb ? a.sb |= b : Object.defineProperties(a, { sb: { value: b, configurable: !0, writable: !0, enumerable: !1 } })) }

    function dd(a, b) { Object.isExtensible(a) && (bd ? a[bd] && (a[bd] &= ~b) : void 0 !== a.sb && (a.sb &= ~b)) }

    function ed(a) { var b;
        bd ? b = a[bd] : b = a.sb; return null == b ? 0 : b }

    function fd(a, b) { bd ? a[bd] = b : void 0 !== a.sb ? a.sb = b : Object.defineProperties(a, { sb: { value: b, configurable: !0, writable: !0, enumerable: !1 } }) }

    function gd(a) { cd(a, 1); return a }

    function hd(a) { return a ? !!(ed(a) & 2) : !1 }

    function id(a) { cd(a, 16); return a }

    function jd(a) { if (!Array.isArray(a)) throw Error("cannot mark non-array as shared mutably");
        dd(a, 16) }

    function kd(a, b) { b ? cd(a, 8) : dd(a, 8) }

    function ld(a, b) { fd(b, (ed(a) | 0) & -51) };

    function md(a) { return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object }
    var nd, od = Object.freeze(gd([])),
        pd = function(a) { if (hd(a.Z)) throw Error("Cannot mutate an immutable Message"); },
        qd = "undefined" != typeof Symbol && "undefined" != typeof Symbol.hasInstance;

    function rd(a) { return { value: a, configurable: !1, writable: !1, enumerable: !1 } };

    function sd(a, b, c, d) { c = void 0 === c ? !1 : c;
        d = void 0 === d ? !1 : d; if (Array.isArray(a)) return new b(d ? id(a) : a); if (c) return new b };

    function td(a) { switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a && !Array.isArray(a)) { if (Wc(a)) return Qc(a); if (a instanceof ad) { var b = a.X;
                        b = null == b || "string" === typeof b ? b : Vc && b instanceof Uint8Array ? Qc(b) : null; return null == b ? "" : a.X = b } } } return a };

    function ud(a, b, c) { if (null != a) { if (Array.isArray(a)) a = vd(a, b, c);
            else if (md(a)) { var d = {},
                    e; for (e in a) d[e] = ud(a[e], b, c);
                a = d } else a = b(a); return a } }

    function vd(a, b, c) { var d = Array.prototype.slice.call(a);
        c(a, d); for (a = 0; a < d.length; a++) d[a] = ud(d[a], b, c); return d }

    function wd(a) { if (a && "object" == typeof a && a.toJSON) return a.toJSON();
        a = td(a); return Array.isArray(a) ? vd(a, wd, xd) : a }

    function yd(a) { if ("object" === typeof a) { if (Wc(a)) return new Uint8Array(a); if (Array.isArray(a.Z) && a.constructor !== Object) return a.clone() } return a }

    function xd() {};
    var zd = function(a) { return a.j || (a.j = a.Z[a.o + a.l] = {}) },
        Ad = function(a, b, c) { return -1 === b ? null : b >= a.o ? a.j ? a.j[b] : void 0 : (void 0 === c ? 0 : c) && a.j && (c = a.j[b], null != c) ? c : a.Z[b + a.l] },
        B = function(a, b, c, d, e) { d = void 0 === d ? !1 : d;
            (void 0 === e ? 0 : e) || pd(a);
            a.B && (a.B = void 0); if (b >= a.o || d) return zd(a)[b] = c, a;
            void 0 !== a.j && a.o >= a.Z.length ? (d = a.Z.length - 1, e = b + a.l, e >= d ? (a.Z[d] = void 0, a.Z[e] = c, a.Z.push(a.j)) : a.Z[e] = c) : a.Z[b + a.l] = c;
            void 0 !== a.j && b in a.j && delete a.j[b]; return a };

    function Bd(a, b, c, d) { var e = Ad(a, b, d);
        Array.isArray(e) ? e && ed(e) & 1 || gd(e) : e = od; if (hd(a.Z)) c & 1 || (cd(e, 2), Object.freeze(e));
        else if (e === od || hd(e)) e = gd(Array.prototype.slice.call(e)), B(a, b, e, d); return e }
    var Cd = function(a, b, c) { return Bd(a, b, 0, void 0 === c ? !1 : c) },
        Dd = function(a, b) { a = Ad(a, b); return null == a ? a : +a },
        Ed = function(a, b) { a = Ad(a, b); return null == a ? a : !!a },
        Fd = function(a, b, c) { a = Ad(a, b); return null == a ? c : a },
        Gd = function(a, b, c) { a = Ed(a, b); return null == a ? void 0 === c ? !1 : c : a },
        Hd = function(a, b, c) { null == c ? c = od : gd(c); return B(a, b, c) };

    function Id(a, b, c, d) { pd(a);
        c !== d ? B(a, b, c) : B(a, b, void 0, !1); return a }
    var Jd = function(a, b) { for (var c = 0, d = 0; d < b.length; d++) { var e = b[d];
                null != Ad(a, e) && (0 !== c && B(a, c, void 0, !1, !0), c = e) } return c },
        Kd = function(a, b, c, d) { d = void 0 === d ? !1 : d; var e = d;
            a.ha || (a.ha = {}); var f = a.ha[c]; if (f) b = f;
            else if (b = sd(Ad(a, c, e), b)) a.ha[c] = b, cd(b.Z, ed(a.Z) & -33); if (null == b) return b;
            hd(b.Z) && !hd(a.Z) && (b = b.Fd(), B(a, c, b.Z, d), a.ha[c] = b); return b },
        Ld = function(a, b, c, d, e) {
            e = void 0 === e ? !0 : e;
            a.ha || (a.ha = {});
            var f = a.ha[c];
            d = Bd(a, c, 2, d);
            var g = !!(ed(a.Z) & 16),
                h = hd(d);
            h = hd(a.Z) || h;
            if (!f) {
                f = [];
                for (var k = h, m = 0; m <
                    d.length; m++) { var n = d[m];
                    k = k || hd(n);
                    n = sd(n, b, !1, g);
                    void 0 !== n && (f.push(n), h && cd(n.Z, 2)) }
                a.ha[c] = f;
                kd(d, !k)
            }
            b = h || e;
            e = hd(f);
            b && !e && (Object.isFrozen(f) && (a.ha[c] = f = f.slice()), cd(f, 2), Object.freeze(f));
            !b && e && (a.ha[c] = f = f.slice());
            return f
        },
        Md = function(a, b, c, d) { d = void 0 === d ? !1 : d; var e = hd(a.Z);
            b = Ld(a, b, c, d, e);
            a = Cd(a, c, d); if (!(c = e) && (c = a)) { if (!a) throw Error("cannot check mutability state of non-array");
                c = !(ed(a) & 8) } if (c) { for (c = 0; c < b.length; c++)(d = b[c]) && hd(d.Z) && !e && (b[c] = b[c].Fd(), a[c] = b[c].Z);
                kd(a, !0) } return b },
        Nd = function(a, b, c) { pd(a);
            a.ha || (a.ha = {}); var d = null == c ? c = void 0 : c.Z;
            a.ha[b] = c; return B(a, b, d) },
        Od = function(a, b, c) { pd(a); if (null != c) { var d = gd([]); for (var e = !1, f = 0; f < c.length; f++) d[f] = c[f].Z, e = e || hd(d[f]);
                a.ha || (a.ha = {});
                a.ha[b] = c;
                kd(d, !e) } else a.ha && (a.ha[b] = void 0), d = od; return B(a, b, d) },
        Pd = function(a, b) { return Fd(a, b, 0) },
        Qd = function(a, b) { return Fd(a, b, "") },
        Rd = function(a, b, c) { b = Jd(a, c) === b ? b : -1; return Fd(a, b, 0) };
    var Td = function(a, b, c) {
        a || (a = Sd);
        Sd = null;
        var d = this.constructor.j || 0,
            e = 0 < d,
            f = this.constructor.messageId;
        a ? ed(a) & 16 && cd(a, 32) : (a = f ? [f] : [], cd(a, 48));
        e && 0 < a.length && md(a[a.length - 1]) && "g" in a[a.length - 1] && (d = 0);
        this.l = (f ? 0 : -1) - d;
        this.ha = void 0;
        this.Z = a;
        a: {
            f = this.Z.length;d = f - 1;
            if (f && (f = this.Z[d], md(f))) {
                this.j = f;
                b = Object.keys(f);
                if (f = 0 < b.length) b: { f = isNaN;a = b.length; for (var g = "string" === typeof b ? b.split("") : b, h = 0; h < a; h++)
                        if (h in g && !f.call(void 0, g[h], h, b)) { f = !1; break b }
                    f = !0 }
                f ? this.o = Number.MAX_VALUE :
                    this.o = d - this.l;
                break a
            }
            void 0 !== b && -1 < b ? (this.o = Math.max(b, d + 1 - this.l), this.j = void 0) : this.o = Number.MAX_VALUE
        }
        if (!e && this.j && "g" in this.j) throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
        if (c)
            for (e = 0; e < c.length; e++) d = c[e], d < this.o ? (d += this.l, (b = this.Z[d]) ? Array.isArray(b) && gd(b) : this.Z[d] = od) : (b = zd(this), (f = b[d]) ? Array.isArray(f) && gd(f) : b[d] = od)
    };
    Td.prototype.toJSON = function() { var a = this.Z; return nd ? a : vd(a, wd, xd) };
    var Vd = function(a) { nd = !0; try { return JSON.stringify(a.toJSON(), Ud) } finally { nd = !1 } },
        Xd = function(a) { var b = Wd; if (null == a || "" == a) return new b;
            a = JSON.parse(a); if (!Array.isArray(a)) throw Error("Expected to deserialize an Array but got " + Ma(a) + ": " + a);
            Sd = a;
            id(a);
            b = new b(a);
            Sd = null; return b };
    Td.prototype.clone = function() { var a = vd(this.Z, yd, ld);
        id(a);
        Sd = a;
        a = new this.constructor(a);
        Sd = null;
        Yd(a, this); return a };
    Td.prototype.isMutable = function() { return !hd(this.Z) };
    Td.prototype.toString = function() { return this.Z.toString() };

    function Ud(a, b) { return td(b) }

    function Yd(a, b) { b.A && (a.A = b.A.slice()); var c = b.ha; if (c) { b = b.j; for (var d in c) { var e = c[d]; if (e) { var f = !(!b || !b[d]),
                        g = +d; if (Array.isArray(e)) { if (e.length)
                            for (f = Md(a, e[0].constructor, g, f), g = 0; g < Math.min(f.length, e.length); g++) Yd(f[g], e[g]) } else(f = Kd(a, e.constructor, g, f)) && Yd(f, e) } } } }
    var Sd;
    var Zd = 0,
        $d = 0;

    function ae(a) { var b = 0 > a;
        a = Math.abs(a); var c = a >>> 0;
        a = Math.floor((a - c) / 4294967296);
        b && (c = p(be(c, a)), b = c.next().value, a = c.next().value, c = b);
        Zd = c >>> 0;
        $d = a >>> 0 }
    var ce = "function" === typeof BigInt;

    function be(a, b) { b = ~b;
        a ? a = ~a + 1 : b += 1; return [a, b] };
    var de = function(a, b) { this.l = a >>> 0;
            this.j = b >>> 0 },
        fe = function(a) {
            if (!a) return ee || (ee = new de(0, 0));
            if (!/^-?\d+$/.test(a)) return null;
            if (16 > a.length) ae(Number(a));
            else if (ce) a = BigInt(a), Zd = Number(a & BigInt(4294967295)) >>> 0, $d = Number(a >> BigInt(32) & BigInt(4294967295));
            else {
                var b = +("-" === a[0]);
                $d = Zd = 0;
                for (var c = a.length, d = 0 + b, e = (c - b) % 6 + b; e <= c; d = e, e += 6) d = Number(a.slice(d, e)), $d *= 1E6, Zd = 1E6 * Zd + d, 4294967296 <= Zd && ($d += Zd / 4294967296 | 0, Zd %= 4294967296);
                b && (b = p(be(Zd, $d)), a = b.next().value, b = b.next().value, Zd = a,
                    $d = b)
            }
            return new de(Zd, $d)
        },
        ee;
    var ge = function() { this.j = [] };
    ge.prototype.length = function() { return this.j.length };
    ge.prototype.end = function() { var a = this.j;
        this.j = []; return a };
    var he = function(a, b, c) { for (; 0 < c || 127 < b;) a.j.push(b & 127 | 128), b = (b >>> 7 | c << 25) >>> 0, c >>>= 7;
            a.j.push(b) },
        ie = function(a, b) { for (; 127 < b;) a.j.push(b & 127 | 128), b >>>= 7;
            a.j.push(b) },
        je = function(a, b) { if (0 <= b) ie(a, b);
            else { for (var c = 0; 9 > c; c++) a.j.push(b & 127 | 128), b >>= 7;
                a.j.push(1) } },
        ke = function(a, b) { a.j.push(b >>> 0 & 255);
            a.j.push(b >>> 8 & 255);
            a.j.push(b >>> 16 & 255);
            a.j.push(b >>> 24 & 255) };
    var le = function() { this.o = [];
            this.l = 0;
            this.j = new ge },
        me = function(a, b) { 0 !== b.length && (a.o.push(b), a.l += b.length) },
        oe = function(a, b) { ne(a, b, 2);
            b = a.j.end();
            me(a, b);
            b.push(a.l); return b },
        pe = function(a, b) { var c = b.pop(); for (c = a.l + a.j.length() - c; 127 < c;) b.push(c & 127 | 128), c >>>= 7, a.l++;
            b.push(c);
            a.l++ },
        qe = function(a, b) { if (b = b.A) { me(a, a.j.end()); for (var c = 0; c < b.length; c++) { var d = a; var e = b[c];
                    $c(); var f = e.X;
                    f = null == f || Wc(f) ? f : "string" === typeof f ? Uc(f) : null;
                    e = null == f ? f : e.X = f;
                    me(d, e || Xc || (Xc = new Uint8Array(0))) } } },
        ne = function(a, b, c) { ie(a.j, 8 * b + c) },
        se = function(a, b, c) { ne(a, b, 2);
            ie(a.j, c.length);
            me(a, a.j.end());
            me(a, c) };

    function te(a, b, c, d, e, f) {
        (a = a.ha && a.ha[c]) ? Array.isArray(a) ? (e = f.wf ? gd(a.slice()) : a, Od(b, c, e)) : Nd(b, c, a): (Vc && d instanceof Uint8Array ? e = d.length ? new ad(new Uint8Array(d)) : Zc || (Zc = new ad(null)) : (Array.isArray(d) && (e ? cd(d, 2) : d && ed(d) & 1 && f.wf ? (e = Array.prototype.slice.call(d), fd(e, (ed(d) | 0) & -51), d = e) : jd(d)), e = d), B(b, c, e)) };
    var ue = function() { Td.apply(this, arguments) };
    u(ue, Td);
    ue.prototype.Fd = function() { return this };
    if (qd) { var ve = {};
        Object.defineProperties(ue, (ve[Symbol.hasInstance] = rd(function() { throw Error(void 0); }), ve)) };

    function we(a, b, c) { if (c) { var d = {},
                e; for (e in c) { var f = c[e],
                    g = f.uk;
                g || (d.Rc = f.Pm || f.Vm.Ve, f.Oi ? (d.Ye = xe(f.Oi), g = function(h) { return function(k, m, n) { return h.Rc(k, m, n, h.Ye) } }(d)) : f.Gj ? (d.Xe = ye(f.dj.Yg, f.Gj), g = function(h) { return function(k, m, n) { return h.Rc(k, m, n, h.Xe) } }(d)) : g = d.Rc, f.uk = g);
                g(b, a, f.dj);
                d = { Rc: d.Rc, Ye: d.Ye, Xe: d.Xe } } }
        qe(b, a) }

    function ze(a, b) { var c = a[b]; "function" == typeof c && 0 === c.length && (c = c(), a[b] = c); return Array.isArray(c) && (Ae in c || Be in c || 0 < c.length && "function" == typeof c[0]) ? c : void 0 }
    var Ce = Symbol();

    function xe(a) { var b = a[Ce]; if (!b) { var c = De(a);
            b = function(d, e) { return Ee(d, e, c) };
            a[Ce] = b } return b }

    function ye(a, b) { var c = a[Ce];
        c || (c = function(d, e) { return we(d, e, b) }, a[Ce] = c); return c }
    var Be = Symbol();

    function Fe(a, b) { a.push(b) }

    function Ge(a, b, c) { a.push(b, c.Ve) }

    function He(a, b, c, d) { var e = xe(d),
            f = De(d).Yg,
            g = c.Ve;
        a.push(b, function(h, k, m) { return g(h, k, m, f, e) }) }

    function Ie(a, b, c, d, e, f) { var g = ye(d, f),
            h = c.Ve;
        a.push(b, function(k, m, n) { return h(k, m, n, d, g) }) }

    function De(a) {
        var b = a[Be];
        if (b) return b;
        b = a[Be] = [];
        var c = Fe,
            d = Ge,
            e = He,
            f = Ie;
        b.Yg = a[0];
        var g = 1;
        if (a.length > g && "number" !== typeof a[g]) { var h = a[g++];
            c(b, h) }
        for (; g < a.length;) {
            c = a[g++];
            for (var k = g + 1; k < a.length && "number" !== typeof a[k];) k++;
            h = a[g++];
            k -= g;
            switch (k) {
                case 0:
                    d(b, c, h);
                    break;
                case 1:
                    (k = ze(a, g)) ? (g++, e(b, c, h, k)) : d(b, c, h, a[g++]);
                    break;
                case 2:
                    k = b;
                    var m = g++;
                    m = ze(a, m);
                    e(k, c, h, m, a[g++]);
                    break;
                case 3:
                    f(b, c, h, a[g++], a[g++], a[g++]);
                    break;
                case 4:
                    f(b, c, h, a[g++], a[g++], a[g++], a[g++]);
                    break;
                default:
                    throw Error("unexpected number of binary field arguments: " +
                        k);
            }
        }
        Ae in a && Be in a && (a.length = 0);
        return b
    }
    var Ae = Symbol();

    function Ee(a, b, c) { for (var d = c.length, e = 1 == d % 2, f = e ? 1 : 0; f < d; f += 2)(0, c[f + 1])(b, a, c[f]);
        we(a, b, e ? c[0] : void 0) }
    var Je = function(a, b) { var c = new le;
        Ee(a, c, De(b));
        me(c, c.j.end());
        a = new Uint8Array(c.l);
        b = c.o; for (var d = b.length, e = 0, f = 0; f < d; f++) { var g = b[f];
            a.set(g, e);
            e += g.length }
        c.o = [a]; return a };

    function Ke(a, b) { return { Um: a, Ve: b } }
    var Le = Ke(function(a, b, c) { if (1 !== a.j()) return !1;
            a = a.B();
            Id(b, c, a, 0); return !0 }, function(a, b, c) {
            b = Dd(b, c);
            if (null != b) {
                ne(a, c, 1);
                a = a.j;
                var d = +b;
                if (0 === d) $d = 0 < 1 / d ? 0 : 2147483648, Zd = 0;
                else if (isNaN(d)) $d = 2147483647, Zd = 4294967295;
                else if (d = (c = 0 > d ? -2147483648 : 0) ? -d : d, 1.7976931348623157E308 < d) $d = (c | 2146435072) >>> 0, Zd = 0;
                else if (2.2250738585072014E-308 > d) b = d / Math.pow(2, -1074), $d = (c | b / 4294967296) >>> 0, Zd = b >>> 0;
                else {
                    var e = d;
                    b = 0;
                    if (2 <= e)
                        for (; 2 <= e && 1023 > b;) b++, e /= 2;
                    else
                        for (; 1 > e && -1022 < b;) e *= 2, b--;
                    d *= Math.pow(2, -b);
                    $d = (c | b + 1023 << 20 | 1048576 * d & 1048575) >>> 0;
                    Zd = 4503599627370496 * d >>> 0
                }
                ke(a, Zd);
                ke(a, $d)
            }
        }),
        Me = Ke(function(a, b, c) { if (5 !== a.j()) return !1;
            B(b, c, a.D()); return !0 }, function(a, b, c) {
            b = Dd(b, c);
            if (null != b) {
                ne(a, c, 5);
                a = a.j;
                var d = +b;
                0 === d ? 0 < 1 / d ? Zd = $d = 0 : ($d = 0, Zd = 2147483648) : isNaN(d) ? ($d = 0, Zd = 2147483647) : (d = (c = 0 > d ? -2147483648 : 0) ? -d : d, 3.4028234663852886E38 < d ? ($d = 0, Zd = (c | 2139095040) >>> 0) : 1.1754943508222875E-38 > d ? (d = Math.round(d / Math.pow(2, -149)), $d = 0, Zd = (c | d) >>> 0) : (b = Math.floor(Math.log(d) / Math.LN2), d *= Math.pow(2, -b),
                    d = Math.round(8388608 * d), 16777216 <= d && ++b, $d = 0, Zd = (c | b + 127 << 23 | d & 8388607) >>> 0));
                ke(a, Zd)
            }
        }),
        Ne = Ke(function(a, b, c) { if (0 !== a.j()) return !1;
            a = a.F();
            Id(b, c, a, 0); return !0 }, function(a, b, c) { b = Ad(b, c);
            null != b && ("string" === typeof b && fe(b), null != b && (ne(a, c, 0), "number" === typeof b ? (a = a.j, ae(b), he(a, Zd, $d)) : (c = fe(b), he(a.j, c.l, c.j)))) }),
        Oe = Ke(function(a, b, c) { if (0 !== a.j()) return !1;
            a = a.H();
            Id(b, c, a, 0); return !0 }, function(a, b, c) { b = Ad(b, c);
            null != b && null != b && (ne(a, c, 0), je(a.j, b)) }),
        Pe = Ke(function(a, b, c) {
            if (0 !== a.j()) return !1;
            B(b, c, a.A());
            return !0
        }, function(a, b, c) { b = Ed(b, c);
            null != b && (ne(a, c, 0), a.j.j.push(b ? 1 : 0)) }),
        Qe = Ke(function(a, b, c) { if (2 !== a.j()) return !1;
            B(b, c, a.o()); return !0 }, function(a, b, c) { b = Ad(b, c);
            null != b && se(a, c, eb(b)) }),
        Re = Ke(function(a, b, c) { if (2 !== a.j()) return !1;
            a = a.o();
            pd(b);
            Bd(b, c, 2, !1).push(a); return !0 }, function(a, b, c) { b = Cd(b, c); if (null != b)
                for (var d = 0; d < b.length; d++) { var e = b[d];
                    null != e && se(a, c, eb(e)) } }),
        Se = Ke(function(a, b, c, d, e) {
            if (2 !== a.j()) return !1;
            var f = a.l;
            pd(b);
            b.ha || (b.ha = {});
            var g = b.ha[c];
            g ? (d = g.Fd(),
                d !== g && (B(b, c, d.Z), b.ha[c] = d), b = d) : (g = Ad(b, c), d = sd(g, d, !0).Fd(), g !== d.Z && B(b, c, d.Z), b = b.ha[c] = d);
            f.call(a, b, e);
            return !0
        }, function(a, b, c, d, e) { b = Kd(b, d, c);
            null != b && (c = oe(a, c), e(b, a), pe(a, c)) }),
        Te = Ke(function(a, b, c, d, e) { if (2 !== a.j()) return !1; var f = a.l;
            pd(b); var g = Ld(b, d, c, void 0, !1);
            d = new d;
            b = Bd(b, c, 2);
            g.push(d);
            b.push(d.Z);
            hd(d.Z) && kd(b, !1);
            f.call(a, d, e); return !0 }, function(a, b, c, d, e) { b = Md(b, d, c); if (null != b)
                for (d = 0; d < b.length; d++) { var f = oe(a, c);
                    e(b[d], a);
                    pe(a, f) } }),
        Ue = Ke(function(a, b, c) {
            if (0 !== a.j()) return !1;
            B(b, c, a.O());
            return !0
        }, function(a, b, c) { b = Ad(b, c);
            null != b && null != b && (ne(a, c, 0), ie(a.j, b)) }),
        Ve = Ke(function(a, b, c) { if (0 !== a.j()) return !1;
            B(b, c, a.C()); return !0 }, function(a, b, c) { b = Ad(b, c);
            null != b && (b = parseInt(b, 10), ne(a, c, 0), je(a.j, b)) });
    var C = function() { ue.apply(this, arguments) };
    u(C, ue);
    C.prototype.Fd = function() { if (hd(this.Z)) { var a = { wf: !0 }; var b = hd(this.Z); if (b && !a.wf) throw Error("copyRepeatedFields must be true for frozen messages");
            b || jd(this.Z); var c = new this.constructor;
            this.A && (c.A = this.A.slice()); for (var d = this.Z, e = 0; e < d.length; e++) { var f = d[e]; if (e === d.length - 1 && md(f))
                    for (var g in f) { var h = +g;
                        Number.isNaN(h) ? zd(c)[g] = f[g] : te(this, c, h, f[g], b, a) } else te(this, c, e - this.l, f, b, a) }
            c.B = this;
            a = c } else a = this; return a };
    if (qd) { var We = {};
        Object.defineProperties(C, (We[Symbol.hasInstance] = rd(Object[Symbol.hasInstance]), We)) };
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    function Xe(a, b, c) { for (var d in a) b.call(c, a[d], d, a) }

    function Ye(a, b) { var c = {},
            d; for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]); return c }

    function Ze(a) { var b = af,
            c; for (c in b)
            if (a.call(void 0, b[c], c, b)) return !0;
        return !1 }

    function bf(a) { var b = cf,
            c; for (c in b)
            if (!a.call(void 0, b[c], c, b)) return !1;
        return !0 }

    function df(a) { var b = [],
            c = 0,
            d; for (d in a) b[c++] = a[d]; return b }

    function ef(a) { var b = [],
            c = 0,
            d; for (d in a) b[c++] = d; return b }

    function ff(a, b) { var c = Na(b),
            d = c ? b : arguments; for (c = c ? 0 : 1; c < d.length; c++) { if (null == a) return;
            a = a[d[c]] } return a }

    function gf(a, b) { return null !== a && b in a }

    function hf(a, b) { for (var c in a)
            if (a[c] == b) return !0;
        return !1 }

    function jf(a) { var b = kf,
            c; for (c in b)
            if (a.call(void 0, b[c], c, b)) return c }

    function lf(a) { for (var b in a) return !1; return !0 }

    function mf(a) { for (var b in a) delete a[b] }

    function nf(a, b, c) { return null !== a && b in a ? a[b] : c }

    function of(a) { var b = {},
            c; for (c in a) b[c] = a[c]; return b }
    var pf = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function qf(a, b) { for (var c, d, e = 1; e < arguments.length; e++) { d = arguments[e]; for (c in d) a[c] = d[c]; for (var f = 0; f < pf.length; f++) c = pf[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]) } };
    var rf = { area: !0, base: !0, br: !0, col: !0, command: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 };
    var sf, tf = function() { if (void 0 === sf) { var a = null,
                b = v.trustedTypes; if (b && b.createPolicy) { try { a = b.createPolicy("goog#html", { createHTML: Za, createScript: Za, createScriptURL: Za }) } catch (c) { v.console && v.console.error(c.message) }
                sf = a } else sf = a } return sf };
    var wf = function(a, b) { this.j = a === uf && b || "";
        this.l = vf };
    wf.prototype.rb = !0;
    wf.prototype.Ta = function() { return this.j };
    var xf = function(a) { return a instanceof wf && a.constructor === wf && a.l === vf ? a.j : "type_error:Const" },
        yf = function(a) { return new wf(uf, a) },
        vf = {},
        uf = {};
    var Af = function(a, b) { this.j = b === zf ? a : "" };
    Af.prototype.toString = function() { return this.j + "" };
    Af.prototype.rb = !0;
    Af.prototype.Ta = function() { return this.j.toString() };
    var Bf = function(a) { return a instanceof Af && a.constructor === Af ? a.j : "type_error:TrustedResourceUrl" },
        Ff = function(a, b) { var c = xf(a); if (!Cf.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
            a = c.replace(Df, function(d, e) { if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
                d = b[e]; return d instanceof wf ? xf(d) : encodeURIComponent(String(d)) }); return Ef(a) },
        Df = /%{(\w+)}/g,
        Cf = RegExp("^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)",
            "i"),
        zf = {},
        Ef = function(a) { var b = tf();
            a = b ? b.createScriptURL(a) : a; return new Af(a, zf) };
    var Hf = function(a, b) { this.j = b === Gf ? a : "" };
    Hf.prototype.toString = function() { return this.j.toString() };
    Hf.prototype.rb = !0;
    Hf.prototype.Ta = function() { return this.j.toString() };
    var If = function(a) { return a instanceof Hf && a.constructor === Hf ? a.j : "type_error:SafeUrl" },
        Jf = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
        Kf = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
        Mf = function(a) { if (a instanceof Hf) return a;
            a = "object" == typeof a && a.rb ? a.Ta() : String(a);
            Kf.test(a) ? a = Lf(a) : (a = String(a).replace(/(%0A|%0D)/g, ""), a = a.match(Jf) ? Lf(a) : null); return a },
        Gf = {},
        Lf = function(a) { return new Hf(a, Gf) },
        Nf = Lf("about:invalid#zClosurez");
    var Of = {},
        Pf = function(a, b) { this.j = b === Of ? a : "";
            this.rb = !0 };
    Pf.prototype.Ta = function() { return this.j };
    Pf.prototype.toString = function() { return this.j.toString() };
    var Qf = function(a) { return a instanceof Pf && a.constructor === Pf ? a.j : "type_error:SafeStyle" },
        Rf = new Pf("", Of);

    function Sf(a) { if (a instanceof Hf) return 'url("' + If(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")'; if (a instanceof wf) a = xf(a);
        else { a = String(a); var b = a.replace(Wf, "$1").replace(Wf, "$1").replace(Xf, "url"); if (Yf.test(b)) { if (b = !Zf.test(a)) { for (var c = b = !0, d = 0; d < a.length; d++) { var e = a.charAt(d); "'" == e && c ? b = !b : '"' == e && b && (c = !c) }
                    b = b && c && $f(a) }
                a = b ? ag(a) : "zClosurez" } else a = "zClosurez" } if (/[{;}]/.test(a)) throw new bb("Value does not allow [{;}], got: %s.", [a]); return a }

    function $f(a) { for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) { var e = a.charAt(d); if ("]" == e) { if (b) return !1;
                b = !0 } else if ("[" == e) { if (!b) return !1;
                b = !1 } else if (!b && !c.test(e)) return !1 } return b }
    var Yf = RegExp("^[-,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$"),
        Xf = RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))", "g"),
        Wf = RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)", "g"),
        Zf = /\/\*/;

    function ag(a) { return a.replace(Xf, function(b, c, d, e) { var f = "";
            d = d.replace(/^(['"])(.*)\1$/, function(g, h, k) { f = h; return k });
            b = (Mf(d) || Nf).Ta(); return c + f + b + f + e }) };
    var bg = {},
        cg = function(a, b) { this.j = b === bg ? a : "";
            this.rb = !0 };
    cg.prototype.toString = function() { return this.j.toString() };
    cg.prototype.Ta = function() { return this.j };
    var dg = function(a) { return a instanceof cg && a.constructor === cg ? a.j : "type_error:SafeStyleSheet" };
    var eg = {},
        fg = function(a, b) { this.j = b === eg ? a : "";
            this.rb = !0 };
    fg.prototype.Ta = function() { return this.j.toString() };
    fg.prototype.toString = function() { return this.j.toString() };
    var gg = function(a) { return a instanceof fg && a.constructor === fg ? a.j : "type_error:SafeHtml" },
        ig = function(a) { return a instanceof fg ? a : hg(tb("object" == typeof a && a.rb ? a.Ta() : String(a))) },
        kg = function(a) { var b = ig(jg),
                c = [],
                d = function(e) { Array.isArray(e) ? e.forEach(d) : (e = ig(e), c.push(gg(e).toString())) };
            a.forEach(d); return hg(c.join(gg(b).toString())) },
        lg = function(a) { return kg(Array.prototype.slice.call(arguments)) },
        hg = function(a) { var b = tf();
            a = b ? b.createHTML(a) : a; return new fg(a, eg) },
        mg = /^[a-zA-Z0-9-]+$/,
        ng = { action: !0, cite: !0, data: !0, formaction: !0, href: !0, manifest: !0, poster: !0, src: !0 },
        og = { APPLET: !0, BASE: !0, EMBED: !0, IFRAME: !0, LINK: !0, MATH: !0, META: !0, OBJECT: !0, SCRIPT: !0, STYLE: !0, SVG: !0, TEMPLATE: !0 },
        jg = new fg(v.trustedTypes && v.trustedTypes.emptyHTML || "", eg);
    var pg;
    try { new URL("s://g"), pg = !0 } catch (a) { pg = !1 }
    var qg = pg;

    function rg(a) { if (!qg) { a: { var b = document.createElement("a"); try { b.href = a } catch (c) { a = void 0; break a }
                a = -1 !== [":", ""].indexOf(b.protocol) ? "https:" : b.protocol } return a } try { b = new URL(a) } catch (c) { return "https:" } return b.protocol }
    var sg = ["data:", "http:", "https:", "mailto:", "ftp:"];

    function tg(a) { var b;
        a instanceof Hf ? b = If(a) : b = "javascript:" === rg(a) ? "about:invalid" : a; return b };
    var ug = {};

    function vg(a, b) { if (void 0 !== a.tagName) { if ("script" === a.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeScript."); if ("style" === a.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeStyleSheet."); }
        a.innerHTML = gg(b) };
    var wg = { jl: 0, Mk: 1, Nk: 2, 0: "HTML_FORMATTED_CONTENT", 1: "EMBEDDED_INTERNAL_CONTENT", 2: "EMBEDDED_TRUSTED_EXTERNAL_CONTENT" };

    function xg(a, b) { for (; 0 < a.sandbox.length;) a.sandbox.remove(a.sandbox.item(0)); for (var c = 0; c < b.length; c++) a.sandbox.supports && !a.sandbox.supports(b[c]) || a.sandbox.add(b[c]) }
    var yg = function(a, b) { var c = Error.call(this, a + " cannot be used with intent " + wg[b]);
        this.message = c.message; "stack" in c && (this.stack = c.stack);
        this.type = a;
        this.intent = b;
        this.name = "TypeCannotBeUsedWithIntentError" };
    u(yg, Error);

    function zg(a) { var b, c, d = null == (c = (b = (a.ownerDocument && a.ownerDocument.defaultView || window).document).querySelector) ? void 0 : c.call(b, "script[nonce]");
        (b = d ? d.nonce || d.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b) };
    var Ag = lc || qc;
    var Bg = function() {},
        Cg = function(a) { var b = !1,
                c; return function() { b || (c = a(), b = !0); return c } },
        Dg = function(a) { var b = 0,
                c = !1,
                d = [],
                e = function() { b = 0;
                    c && (c = !1, f()) },
                f = function() { b = v.setTimeout(e, 1E3); var g = d;
                    d = [];
                    a.apply(void 0, g) }; return function(g) { d = arguments;
                b ? c = !0 : f() } };
    var Eg = Cg(function() { var a = document.createElement("div"),
                b = document.createElement("div");
            b.appendChild(document.createElement("div"));
            a.appendChild(b);
            b = a.firstChild.firstChild;
            a.innerHTML = gg(jg); return !b.parentElement }),
        Fg = function(a, b) { if (Eg())
                for (; a.lastChild;) a.removeChild(a.lastChild);
            a.innerHTML = gg(b) };
    var Gg = function(a, b) { this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0 };
    l = Gg.prototype;
    l.clone = function() { return new Gg(this.x, this.y) };
    l.Zb = function(a) { return a instanceof Gg && (this == a ? !0 : this && a ? this.x == a.x && this.y == a.y : !1) };
    l.ceil = function() { this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y); return this };
    l.floor = function() { this.x = Math.floor(this.x);
        this.y = Math.floor(this.y); return this };
    l.round = function() { this.x = Math.round(this.x);
        this.y = Math.round(this.y); return this };
    l.scale = function(a, b) { this.x *= a;
        this.y *= "number" === typeof b ? b : a; return this };
    var Hg = function(a, b) { this.width = a;
        this.height = b };
    l = Hg.prototype;
    l.clone = function() { return new Hg(this.width, this.height) };
    l.aspectRatio = function() { return this.width / this.height };
    l.isEmpty = function() { return !(this.width * this.height) };
    l.ceil = function() { this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height); return this };
    l.floor = function() { this.width = Math.floor(this.width);
        this.height = Math.floor(this.height); return this };
    l.round = function() { this.width = Math.round(this.width);
        this.height = Math.round(this.height); return this };
    l.scale = function(a, b) { this.width *= a;
        this.height *= "number" === typeof b ? b : a; return this };
    var Ig = function(a) { return encodeURIComponent(String(a)) },
        Jg = function(a) { return decodeURIComponent(a.replace(/\+/g, " ")) },
        Kg = function(a) { return a = tb(a) },
        Ng = function(a) { return -1 != a.indexOf("&") ? "document" in v ? Lg(a) : Mg(a) : a },
        Lg = function(a) {
            var b = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"' };
            var c = v.document.createElement("div");
            return a.replace(Og, function(d, e) {
                var f = b[d];
                if (f) return f;
                "#" == e.charAt(0) && (e = Number("0" + e.slice(1)), isNaN(e) || (f = String.fromCharCode(e)));
                f || (f = hg(d + " "), Fg(c, f), f = c.firstChild.nodeValue.slice(0, -1));
                return b[d] = f
            })
        },
        Mg = function(a) { return a.replace(/&([^;]+);/g, function(b, c) { switch (c) {
                    case "amp":
                        return "&";
                    case "lt":
                        return "<";
                    case "gt":
                        return ">";
                    case "quot":
                        return '"';
                    default:
                        return "#" != c.charAt(0) || (c = Number("0" + c.slice(1)), isNaN(c)) ? b : String.fromCharCode(c) } }) },
        Og = /&([^;\s<&]+);?/g,
        Pg = function(a, b) { a.length > b && (a = a.substring(0, b - 3) + "..."); return a },
        Qg = String.prototype.repeat ? function(a, b) { return a.repeat(b) } : function(a, b) { return Array(b + 1).join(a) },
        D = function(a) { return null == a ? "" : String(a) },
        Rg = function() { return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Xa()).toString(36) },
        Sg = 2147483648 * Math.random() | 0,
        Tg = function(a) { var b = Number(a); return 0 == b && w(a) ? NaN : b },
        Ug = function(a) { return String(a).replace(/\-([a-z])/g, function(b, c) { return c.toUpperCase() }) },
        Vg = function() { return "googleAvInapp".replace(/([A-Z])/g, "-$1").toLowerCase() },
        Wg = function(a) { return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) { return c + d.toUpperCase() }) },
        Xg = function(a) { isFinite(a) && (a = String(a)); return "string" === typeof a ? /^\s*-?0x/i.test(a) ? parseInt(a, 16) : parseInt(a, 10) : NaN };
    var $g = function(a) { return a ? new Yg(Zg(a)) : ab || (ab = new Yg) },
        ah = function(a) { var b = document; return "string" === typeof a ? b.getElementById(a) : a },
        ch = function(a, b) { var c = b || document; return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : bh(document, "*", a, b) },
        dh = function(a, b) { var c = b || document; if (c.getElementsByClassName) a = c.getElementsByClassName(a)[0];
            else { c = document; var d = b || c;
                a = d.querySelectorAll && d.querySelector && a ? d.querySelector(a ? "." + a : "") : bh(c, "*", a, b)[0] || null } return a || null },
        bh = function(a,
            b, c, d) { a = d || a;
            b = b && "*" != b ? String(b).toUpperCase() : ""; if (a.querySelectorAll && a.querySelector && (b || c)) return a.querySelectorAll(b + (c ? "." + c : "")); if (c && a.getElementsByClassName) { a = a.getElementsByClassName(c); if (b) { d = {}; for (var e = 0, f = 0, g; g = a[f]; f++) b == g.nodeName && (d[e++] = g);
                    d.length = e; return d } return a }
            a = a.getElementsByTagName(b || "*"); if (c) { d = {}; for (f = e = 0; g = a[f]; f++) b = g.className, "function" == typeof b.split && Xb(b.split(/\s+/), c) && (d[e++] = g);
                d.length = e; return d } return a },
        fh = function(a, b) {
            Xe(b, function(c,
                d) { c && "object" == typeof c && c.rb && (c = c.Ta()); "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : eh.hasOwnProperty(d) ? a.setAttribute(eh[d], c) : fb(d, "aria-") || fb(d, "data-") ? a.setAttribute(d, c) : a[d] = c })
        },
        eh = { cellpadding: "cellPadding", cellspacing: "cellSpacing", colspan: "colSpan", frameborder: "frameBorder", height: "height", maxlength: "maxLength", nonce: "nonce", role: "role", rowspan: "rowSpan", type: "type", usemap: "useMap", valign: "vAlign", width: "width" },
        gh = function(a) {
            a = a.document;
            a = "CSS1Compat" ==
                a.compatMode ? a.documentElement : a.body;
            return new Hg(a.clientWidth, a.clientHeight)
        },
        hh = function(a) { var b = a.scrollingElement ? a.scrollingElement : qc || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
            a = a.parentWindow || a.defaultView; return lc && Hc("10") && a.pageYOffset != b.scrollTop ? new Gg(b.scrollLeft, b.scrollTop) : new Gg(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop) },
        ih = function(a) { return a ? a.parentWindow || a.defaultView : window },
        kh = function(a, b, c) { return jh(document, arguments) },
        jh = function(a, b) { var c = b[1],
                d = lh(a, String(b[0]));
            c && ("string" === typeof c ? d.className = c : Array.isArray(c) ? d.className = c.join(" ") : fh(d, c));
            2 < b.length && mh(a, d, b, 2); return d },
        mh = function(a, b, c, d) {
            function e(h) { h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h) }
            for (; d < c.length; d++) {
                var f = c[d];
                if (!Na(f) || Oa(f) && 0 < f.nodeType) e(f);
                else {
                    a: {
                        if (f && "number" == typeof f.length) {
                            if (Oa(f)) { var g = "function" == typeof f.item || "string" == typeof f.item; break a }
                            if ("function" === typeof f) {
                                g = "function" == typeof f.item;
                                break a
                            }
                        }
                        g = !1
                    }
                    Ob(g ? bc(f) : f, e)
                }
            }
        },
        lh = function(a, b) { b = String(b); "application/xhtml+xml" === a.contentType && (b = b.toLowerCase()); return a.createElement(b) },
        nh = function(a, b) { mh(Zg(a), a, arguments, 1) },
        oh = function(a) { for (var b; b = a.firstChild;) a.removeChild(b) },
        ph = function(a) { return a && a.parentNode ? a.parentNode.removeChild(a) : null },
        xh = function(a) { return void 0 != a.children ? a.children : Array.prototype.filter.call(a.childNodes, function(b) { return 1 == b.nodeType }) },
        yh = function(a, b) {
            if (!a || !b) return !1;
            if (a.contains &&
                1 == b.nodeType) return a == b || a.contains(b);
            if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
            for (; b && a != b;) b = b.parentNode;
            return b == a
        },
        Zg = function(a) { return 9 == a.nodeType ? a : a.ownerDocument || a.document },
        zh = function(a, b) { if ("textContent" in a) a.textContent = b;
            else if (3 == a.nodeType) a.data = String(b);
            else if (a.firstChild && 3 == a.firstChild.nodeType) { for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
                a.firstChild.data = String(b) } else oh(a), a.appendChild(Zg(a).createTextNode(String(b))) },
        Ah = { SCRIPT: 1, STYLE: 1, HEAD: 1, IFRAME: 1, OBJECT: 1 },
        Bh = { IMG: " ", BR: "\n" },
        Dh = function(a) { var b = [];
            Ch(a, b, !0);
            a = b.join("");
            a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
            a = a.replace(/\u200B/g, "");
            a = a.replace(/ +/g, " "); " " != a && (a = a.replace(/^\s*/, "")); return a },
        Ch = function(a, b, c) { if (!(a.nodeName in Ah))
                if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
                else if (a.nodeName in Bh) b.push(Bh[a.nodeName]);
            else
                for (a = a.firstChild; a;) Ch(a, b, c), a = a.nextSibling },
        Eh = function(a,
            b) { a && (a = a.parentNode); for (var c = 0; a;) { if (b(a)) return a;
                a = a.parentNode;
                c++ } return null },
        Yg = function(a) { this.j = a || v.document || document };
    l = Yg.prototype;
    l.getElementsByTagName = function(a, b) { return (b || this.j).getElementsByTagName(String(a)) };
    l.Ui = function(a, b, c) { return jh(this.j, arguments) };
    l.appendChild = function(a, b) { a.appendChild(b) };
    l.append = nh;
    l.canHaveChildren = function(a) { if (1 != a.nodeType) return !1; switch (a.tagName) {
            case "APPLET":
            case "AREA":
            case "BASE":
            case "BR":
            case "COL":
            case "COMMAND":
            case "EMBED":
            case "FRAME":
            case "HR":
            case "IMG":
            case "INPUT":
            case "IFRAME":
            case "ISINDEX":
            case "KEYGEN":
            case "LINK":
            case "NOFRAMES":
            case "NOSCRIPT":
            case "META":
            case "OBJECT":
            case "PARAM":
            case "SCRIPT":
            case "SOURCE":
            case "STYLE":
            case "TRACK":
            case "WBR":
                return !1 } return !0 };
    v.console && "function" === typeof v.console.log && Va(v.console.log, v.console);
    var Fh = function(a) { for (var b = [], c = a = ih(a.ownerDocument); c != a.top; c = c.parent)
            if (c.frameElement) b.push(c.frameElement);
            else break;
        return b };

    function Gh(a) { a && "function" == typeof a.W && a.W() };
    var E = function() { this.U = this.U;
        this.O = this.O };
    E.prototype.U = !1;
    E.prototype.za = function() { return this.U };
    E.prototype.W = function() { this.U || (this.U = !0, this.N()) };
    var G = function(a, b) { Hh(a, Wa(Gh, b)) },
        Hh = function(a, b) { a.U ? b() : (a.O || (a.O = []), a.O.push(b)) };
    E.prototype.N = function() { if (this.O)
            for (; this.O.length;) this.O.shift()() };
    var Ih = function(a, b) { this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.j = !1 };
    Ih.prototype.stopPropagation = function() { this.j = !0 };
    Ih.prototype.preventDefault = function() { this.defaultPrevented = !0 };
    var Jh = function() { if (!v.addEventListener || !Object.defineProperty) return !1; var a = !1,
            b = Object.defineProperty({}, "passive", { get: function() { a = !0 } }); try { v.addEventListener("test", function() {}, b), v.removeEventListener("test", function() {}, b) } catch (c) {} return a }();
    var Kh = function(a, b) { Ih.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.o = this.l = 0;
        this.key = "";
        this.keyCode = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.pointerId = 0;
        this.pointerType = "";
        this.Pa = null;
        a && this.init(a, b) };
    Ya(Kh, Ih);
    var Lh = { 2: "touch", 3: "pen", 4: "mouse" };
    Kh.prototype.init = function(a, b) {
        var c = this.type = a.type,
            d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        (b = a.relatedTarget) ? pc && (hc(b, "nodeName") || (b = null)): "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
        this.relatedTarget = b;
        d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.l = qc || void 0 !== a.offsetX ?
            a.offsetX : a.layerX, this.o = qc || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.key = a.key || "";
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Lh[a.pointerType] || "";
        this.state =
            a.state;
        this.Pa = a;
        a.defaultPrevented && Kh.ib.preventDefault.call(this)
    };
    Kh.prototype.stopPropagation = function() { Kh.ib.stopPropagation.call(this);
        this.Pa.stopPropagation ? this.Pa.stopPropagation() : this.Pa.cancelBubble = !0 };
    Kh.prototype.preventDefault = function() { Kh.ib.preventDefault.call(this); var a = this.Pa;
        a.preventDefault ? a.preventDefault() : a.returnValue = !1 };
    var Mh = "closure_listenable_" + (1E6 * Math.random() | 0),
        Nh = function(a) { return !(!a || !a[Mh]) };
    var Oh = 0;
    var Ph = function(a, b, c, d, e) { this.listener = a;
            this.proxy = null;
            this.src = b;
            this.type = c;
            this.capture = !!d;
            this.ke = e;
            this.key = ++Oh;
            this.zd = this.Ud = !1 },
        Qh = function(a) { a.zd = !0;
            a.listener = null;
            a.proxy = null;
            a.src = null;
            a.ke = null };
    var Rh = function(a) { this.src = a;
        this.listeners = {};
        this.j = 0 };
    Rh.prototype.add = function(a, b, c, d, e) { var f = a.toString();
        a = this.listeners[f];
        a || (a = this.listeners[f] = [], this.j++); var g = Sh(a, b, d, e); - 1 < g ? (b = a[g], c || (b.Ud = !1)) : (b = new Ph(b, this.src, f, !!d, e), b.Ud = c, a.push(b)); return b };
    Rh.prototype.remove = function(a, b, c, d) { a = a.toString(); if (!(a in this.listeners)) return !1; var e = this.listeners[a];
        b = Sh(e, b, c, d); return -1 < b ? (Qh(e[b]), Zb(e, b), 0 == e.length && (delete this.listeners[a], this.j--), !0) : !1 };
    var Th = function(a, b) { var c = b.type;
            c in a.listeners && Yb(a.listeners[c], b) && (Qh(b), 0 == a.listeners[c].length && (delete a.listeners[c], a.j--)) },
        Uh = function(a, b, c, d, e) { a = a.listeners[b.toString()];
            b = -1;
            a && (b = Sh(a, c, d, e)); return -1 < b ? a[b] : null },
        Sh = function(a, b, c, d) { for (var e = 0; e < a.length; ++e) { var f = a[e]; if (!f.zd && f.listener == b && f.capture == !!c && f.ke == d) return e } return -1 };
    var Vh = "closure_lm_" + (1E6 * Math.random() | 0),
        Wh = {},
        Xh = 0,
        Zh = function(a, b, c, d, e) { if (d && d.once) return Yh(a, b, c, d, e); if (Array.isArray(b)) { for (var f = 0; f < b.length; f++) Zh(a, b[f], c, d, e); return null }
            c = $h(c); return Nh(a) ? ai(a, b, c, Oa(d) ? !!d.capture : !!d, e) : bi(a, b, c, !1, d, e) },
        bi = function(a, b, c, d, e, f) {
            if (!b) throw Error("Invalid event type");
            var g = Oa(e) ? !!e.capture : !!e,
                h = ci(a);
            h || (a[Vh] = h = new Rh(a));
            c = h.add(b, c, d, g, f);
            if (c.proxy) return c;
            d = di();
            c.proxy = d;
            d.src = a;
            d.listener = c;
            if (a.addEventListener) Jh || (e = g), void 0 ===
                e && (e = !1), a.addEventListener(b.toString(), d, e);
            else if (a.attachEvent) a.attachEvent(ei(b.toString()), d);
            else if (a.addListener && a.removeListener) a.addListener(d);
            else throw Error("addEventListener and attachEvent are unavailable.");
            Xh++;
            return c
        },
        di = function() { var a = fi,
                b = function(c) { return a.call(b.src, b.listener, c) }; return b },
        Yh = function(a, b, c, d, e) {
            if (Array.isArray(b)) { for (var f = 0; f < b.length; f++) Yh(a, b[f], c, d, e); return null }
            c = $h(c);
            return Nh(a) ? a.H.add(String(b), c, !0, Oa(d) ? !!d.capture : !!d, e) : bi(a,
                b, c, !0, d, e)
        },
        gi = function(a, b, c, d, e) { if (Array.isArray(b))
                for (var f = 0; f < b.length; f++) gi(a, b[f], c, d, e);
            else d = Oa(d) ? !!d.capture : !!d, c = $h(c), Nh(a) ? a.H.remove(String(b), c, d, e) : a && (a = ci(a)) && (b = Uh(a, b, c, d, e)) && hi(b) },
        hi = function(a) {
            if ("number" !== typeof a && a && !a.zd) {
                var b = a.src;
                if (Nh(b)) Th(b.H, a);
                else {
                    var c = a.type,
                        d = a.proxy;
                    b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(ei(c), d) : b.addListener && b.removeListener && b.removeListener(d);
                    Xh--;
                    (c = ci(b)) ? (Th(c, a), 0 == c.j && (c.src =
                        null, b[Vh] = null)) : Qh(a)
                }
            }
        },
        ei = function(a) { return a in Wh ? Wh[a] : Wh[a] = "on" + a },
        fi = function(a, b) { if (a.zd) a = !0;
            else { b = new Kh(b, this); var c = a.listener,
                    d = a.ke || a.src;
                a.Ud && hi(a);
                a = c.call(d, b) } return a },
        ci = function(a) { a = a[Vh]; return a instanceof Rh ? a : null },
        ii = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
        $h = function(a) { if ("function" === typeof a) return a;
            a[ii] || (a[ii] = function(b) { return a.handleEvent(b) }); return a[ii] };
    var H = function() { E.call(this);
        this.H = new Rh(this);
        this.xd = this;
        this.Y = null };
    Ya(H, E);
    H.prototype[Mh] = !0;
    H.prototype.addEventListener = function(a, b, c, d) { Zh(this, a, b, c, d) };
    H.prototype.removeEventListener = function(a, b, c, d) { gi(this, a, b, c, d) };
    var I = function(a, b) { var c, d = a.Y; if (d)
            for (c = []; d; d = d.Y) c.push(d);
        a = a.xd;
        d = b.type || b; if ("string" === typeof b) b = new Ih(b, a);
        else if (b instanceof Ih) b.target = b.target || a;
        else { var e = b;
            b = new Ih(d, a);
            qf(b, e) }
        e = !0; if (c)
            for (var f = c.length - 1; !b.j && 0 <= f; f--) { var g = b.currentTarget = c[f];
                e = ji(g, d, !0, b) && e }
        b.j || (g = b.currentTarget = a, e = ji(g, d, !0, b) && e, b.j || (e = ji(g, d, !1, b) && e)); if (c)
            for (f = 0; !b.j && f < c.length; f++) g = b.currentTarget = c[f], e = ji(g, d, !1, b) && e; return e };
    H.prototype.N = function() { H.ib.N.call(this); if (this.H) { var a = this.H,
                b = 0,
                c; for (c in a.listeners) { for (var d = a.listeners[c], e = 0; e < d.length; e++) ++b, Qh(d[e]);
                delete a.listeners[c];
                a.j-- } }
        this.Y = null };
    var ai = function(a, b, c, d, e) { return a.H.add(String(b), c, !1, d, e) },
        ji = function(a, b, c, d) { b = a.H.listeners[String(b)]; if (!b) return !0;
            b = b.concat(); for (var e = !0, f = 0; f < b.length; ++f) { var g = b[f]; if (g && !g.zd && g.capture == c) { var h = g.listener,
                        k = g.ke || g.src;
                    g.Ud && Th(a.H, g);
                    e = !1 !== h.call(k, d) && e } } return e && !d.defaultPrevented };
    var ki = function(a, b) { this.o = a;
        this.A = b;
        this.l = 0;
        this.j = null };
    ki.prototype.get = function() { if (0 < this.l) { this.l--; var a = this.j;
            this.j = a.next;
            a.next = null } else a = this.o(); return a };
    var li = function(a, b) { a.A(b);
        100 > a.l && (a.l++, b.next = a.j, a.j = b) };
    var mi, ni = function() {
        var a = v.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !z("Presto") && (a = function() {
            var e = lh(document, "IFRAME");
            e.style.display = "none";
            document.documentElement.appendChild(e);
            var f = e.contentWindow;
            e = f.document;
            e.open();
            e.close();
            var g = "callImmediate" + Math.random(),
                h = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
            e = Va(function(k) { if (("*" == h || k.origin == h) && k.data == g) this.port1.onmessage() },
                this);
            f.addEventListener("message", e, !1);
            this.port1 = {};
            this.port2 = { postMessage: function() { f.postMessage(g, h) } }
        });
        if ("undefined" !== typeof a && !Ab()) { var b = new a,
                c = {},
                d = c;
            b.port1.onmessage = function() { if (void 0 !== c.next) { c = c.next; var e = c.Ug;
                    c.Ug = null;
                    e() } }; return function(e) { d.next = { Ug: e };
                d = d.next;
                b.port2.postMessage(0) } }
        return function(e) { v.setTimeout(e, 0) }
    };

    function oi(a) { v.setTimeout(function() { throw a; }, 0) };
    var pi = function() { this.l = this.j = null };
    pi.prototype.add = function(a, b) { var c = qi.get();
        c.set(a, b);
        this.l ? this.l.next = c : this.j = c;
        this.l = c };
    pi.prototype.remove = function() { var a = null;
        this.j && (a = this.j, this.j = this.j.next, this.j || (this.l = null), a.next = null); return a };
    var qi = new ki(function() { return new ri }, function(a) { return a.reset() }),
        ri = function() { this.next = this.scope = this.j = null };
    ri.prototype.set = function(a, b) { this.j = a;
        this.scope = b;
        this.next = null };
    ri.prototype.reset = function() { this.next = this.scope = this.j = null };
    var si, ti = !1,
        ui = new pi,
        wi = function(a, b) { si || vi();
            ti || (si(), ti = !0);
            ui.add(a, b) },
        vi = function() { if (v.Promise && v.Promise.resolve) { var a = v.Promise.resolve(void 0);
                si = function() { a.then(xi) } } else si = function() { var b = xi; "function" !== typeof v.setImmediate || v.Window && v.Window.prototype && !Bb() && v.Window.prototype.setImmediate == v.setImmediate ? (mi || (mi = ni()), mi(b)) : v.setImmediate(b) } },
        xi = function() { for (var a; a = ui.remove();) { try { a.j.call(a.scope) } catch (b) { oi(b) }
                li(qi, a) }
            ti = !1 };
    var zi = function(a) { this.j = 0;
            this.D = void 0;
            this.A = this.l = this.o = null;
            this.B = this.C = !1; if (a != Bg) try { var b = this;
                a.call(void 0, function(c) { yi(b, 2, c) }, function(c) { yi(b, 3, c) }) } catch (c) { yi(this, 3, c) } },
        Ai = function() { this.next = this.context = this.onRejected = this.l = this.j = null;
            this.o = !1 };
    Ai.prototype.reset = function() { this.context = this.onRejected = this.l = this.j = null;
        this.o = !1 };
    var Bi = new ki(function() { return new Ai }, function(a) { a.reset() }),
        Ci = function(a, b, c) { var d = Bi.get();
            d.l = a;
            d.onRejected = b;
            d.context = c; return d };
    zi.prototype.then = function(a, b, c) { return Di(this, "function" === typeof a ? a : null, "function" === typeof b ? b : null, c) };
    zi.prototype.$goog_Thenable = !0;
    zi.prototype.H = function(a, b) { return Di(this, null, a, b) };
    zi.prototype.catch = zi.prototype.H;
    zi.prototype.cancel = function(a) { if (0 == this.j) { var b = new Ei(a);
            wi(function() { Fi(this, b) }, this) } };
    var Fi = function(a, b) { if (0 == a.j)
                if (a.o) { var c = a.o; if (c.l) { for (var d = 0, e = null, f = null, g = c.l; g && (g.o || (d++, g.j == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
                        e && (0 == c.j && 1 == d ? Fi(c, b) : (f ? (d = f, d.next == c.A && (c.A = d), d.next = d.next.next) : Gi(c), Hi(c, e, 3, b))) }
                    a.o = null } else yi(a, 3, b) },
        Ji = function(a, b) { a.l || 2 != a.j && 3 != a.j || Ii(a);
            a.A ? a.A.next = b : a.l = b;
            a.A = b },
        Di = function(a, b, c, d) {
            var e = Ci(null, null, null);
            e.j = new zi(function(f, g) {
                e.l = b ? function(h) { try { var k = b.call(d, h);
                        f(k) } catch (m) { g(m) } } : f;
                e.onRejected = c ? function(h) {
                    try {
                        var k =
                            c.call(d, h);
                        void 0 === k && h instanceof Ei ? g(h) : f(k)
                    } catch (m) { g(m) }
                } : g
            });
            e.j.o = a;
            Ji(a, e);
            return e.j
        };
    zi.prototype.O = function(a) { this.j = 0;
        yi(this, 2, a) };
    zi.prototype.U = function(a) { this.j = 0;
        yi(this, 3, a) };
    var yi = function(a, b, c) { if (0 == a.j) { a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
                a.j = 1;
                a: { var d = c,
                        e = a.O,
                        f = a.U; if (d instanceof zi) { Ji(d, Ci(e || Bg, f || null, a)); var g = !0 } else { if (d) try { var h = !!d.$goog_Thenable } catch (m) { h = !1 } else h = !1; if (h) d.then(e, f, a), g = !0;
                        else { if (Oa(d)) try { var k = d.then; if ("function" === typeof k) { Ki(d, k, e, f, a);
                                    g = !0; break a } } catch (m) { f.call(a, m);
                                g = !0; break a }
                            g = !1 } } }
                g || (a.D = c, a.j = b, a.o = null, Ii(a), 3 != b || c instanceof Ei || Li(a, c)) } },
        Ki = function(a, b, c, d, e) {
            var f = !1,
                g = function(k) {
                    f ||
                        (f = !0, c.call(e, k))
                },
                h = function(k) { f || (f = !0, d.call(e, k)) };
            try { b.call(a, g, h) } catch (k) { h(k) }
        },
        Ii = function(a) { a.C || (a.C = !0, wi(a.F, a)) },
        Gi = function(a) { var b = null;
            a.l && (b = a.l, a.l = b.next, b.next = null);
            a.l || (a.A = null); return b };
    zi.prototype.F = function() { for (var a; a = Gi(this);) Hi(this, a, this.j, this.D);
        this.C = !1 };
    var Hi = function(a, b, c, d) { if (3 == c && b.onRejected && !b.o)
                for (; a && a.B; a = a.o) a.B = !1; if (b.j) b.j.o = null, Mi(b, c, d);
            else try { b.o ? b.l.call(b.context) : Mi(b, c, d) } catch (e) { Ni.call(null, e) }
            li(Bi, b) },
        Mi = function(a, b, c) { 2 == b ? a.l.call(a.context, c) : a.onRejected && a.onRejected.call(a.context, c) },
        Li = function(a, b) { a.B = !0;
            wi(function() { a.B && Ni.call(null, b) }) },
        Ni = oi,
        Ei = function(a) { $a.call(this, a) };
    Ya(Ei, $a);
    Ei.prototype.name = "cancel";
    var Oi = function(a, b) { H.call(this);
        this.o = a || 1;
        this.l = b || v;
        this.A = Va(this.C, this);
        this.B = Xa() };
    Ya(Oi, H);
    Oi.prototype.enabled = !1;
    Oi.prototype.j = null;
    var Pi = function(a) { a.o = 250;
        a.j && a.enabled ? (a.stop(), a.start()) : a.j && a.stop() };
    Oi.prototype.C = function() { if (this.enabled) { var a = Xa() - this.B;
            0 < a && a < .8 * this.o ? this.j = this.l.setTimeout(this.A, this.o - a) : (this.j && (this.l.clearTimeout(this.j), this.j = null), I(this, "tick"), this.enabled && (this.stop(), this.start())) } };
    Oi.prototype.start = function() { this.enabled = !0;
        this.j || (this.j = this.l.setTimeout(this.A, this.o), this.B = Xa()) };
    Oi.prototype.stop = function() { this.enabled = !1;
        this.j && (this.l.clearTimeout(this.j), this.j = null) };
    Oi.prototype.N = function() { Oi.ib.N.call(this);
        this.stop();
        delete this.l };
    var Qi = function(a, b, c) { if ("function" === typeof a) c && (a = Va(a, c));
            else if (a && "function" == typeof a.handleEvent) a = Va(a.handleEvent, a);
            else throw Error("Invalid listener argument"); return 2147483647 < Number(b) ? -1 : v.setTimeout(a, b || 0) },
        Ri = function(a) { v.clearTimeout(a) },
        Si = function() { var a = null; return (new zi(function(b, c) { a = Qi(function() { b(void 0) }, 2E3); - 1 == a && c(Error("Failed to schedule timer.")) })).H(function(b) { Ri(a); throw b; }) };
    var Ti = function() { return Math.round(Date.now() / 1E3) };
    var Ui = function() { this.j = {}; return this };
    Ui.prototype.remove = function(a) { var b = this.j;
        a in b && delete b[a] };
    Ui.prototype.set = function(a, b) { this.j[a] = b };
    var Vi = function(a, b) { a.j.eb = nf(a.j, "eb", 0) | b };
    Ui.prototype.get = function(a) { return nf(this.j, a, null) };
    var Wi = function(a, b, c, d) { this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d };
    Wi.prototype.getWidth = function() { return this.right - this.left };
    Wi.prototype.getHeight = function() { return this.bottom - this.top };
    Wi.prototype.clone = function() { return new Wi(this.top, this.right, this.bottom, this.left) };
    Wi.prototype.expand = function(a, b, c, d) { Oa(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += Number(b), this.bottom += Number(c), this.left -= Number(d)); return this };
    var Xi = function(a, b) { return a == b ? !0 : a && b ? a.top == b.top && a.right == b.right && a.bottom == b.bottom && a.left == b.left : !1 };
    Wi.prototype.ceil = function() { this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left); return this };
    Wi.prototype.floor = function() { this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left); return this };
    Wi.prototype.round = function() { this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left); return this };
    var Yi = function(a, b, c) { b instanceof Gg ? (a.left += b.x, a.right += b.x, a.top += b.y, a.bottom += b.y) : (a.left += b, a.right += b, "number" === typeof c && (a.top += c, a.bottom += c)); return a };
    Wi.prototype.scale = function(a, b) { b = "number" === typeof b ? b : a;
        this.left *= a;
        this.right *= a;
        this.top *= b;
        this.bottom *= b; return this };
    var Zi = function(a, b, c, d) { this.left = a;
        this.top = b;
        this.width = c;
        this.height = d };
    Zi.prototype.clone = function() { return new Zi(this.left, this.top, this.width, this.height) };
    var $i = function(a) { return new Wi(a.top, a.left + a.width, a.top + a.height, a.left) },
        aj = function(a, b) { return b instanceof Gg ? b.x >= a.left && b.x <= a.left + a.width && b.y >= a.top && b.y <= a.top + a.height : a.left <= b.left && a.left + a.width >= b.left + b.width && a.top <= b.top && a.top + a.height >= b.top + b.height };
    l = Zi.prototype;
    l.distance = function(a) { var b = a.x < this.left ? this.left - a.x : Math.max(a.x - (this.left + this.width), 0);
        a = a.y < this.top ? this.top - a.y : Math.max(a.y - (this.top + this.height), 0); return Math.sqrt(b * b + a * a) };
    l.ceil = function() { this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height); return this };
    l.floor = function() { this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height); return this };
    l.round = function() { this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height); return this };
    l.scale = function(a, b) { b = "number" === typeof b ? b : a;
        this.left *= a;
        this.width *= a;
        this.top *= b;
        this.height *= b; return this };
    var bj = null,
        cj = function() { this.j = {};
            this.l = 0 },
        dj = function() { bj || (bj = new cj); return bj },
        ej = function(a, b) { a.j[b.getName()] = b },
        fj = function(a, b) { this.o = a;
            this.l = !0;
            this.X = b };
    fj.prototype.getName = function() { return this.o };
    fj.prototype.j = function() { return String(this.X) };
    var gj = function(a, b) { fj.call(this, String(a), b);
        this.A = a;
        this.X = !!b };
    u(gj, fj);
    gj.prototype.j = function() { return this.X ? "1" : "0" };
    var hj = function(a, b) { fj.call(this, a, b) };
    u(hj, fj);
    hj.prototype.j = function() { return this.X ? Math.round(this.X.top) + "." + Math.round(this.X.left) + "." + (Math.round(this.X.top) + Math.round(this.X.height)) + "." + (Math.round(this.X.left) + Math.round(this.X.width)) : "" };
    var ij = function(a) { if (a.match(/^-?[0-9]+\.-?[0-9]+\.-?[0-9]+\.-?[0-9]+$/)) { a = a.split("."); var b = Number(a[0]),
                c = Number(a[1]); return new hj("", new Zi(c, b, Number(a[3]) - c, Number(a[2]) - b)) } return new hj("", new Zi(0, 0, 0, 0)) };
    var kj = function(a, b, c) { if ("string" === typeof b)(b = jj(a, b)) && (a.style[b] = c);
            else
                for (var d in b) { c = a; var e = b[d],
                        f = jj(c, d);
                    f && (c.style[f] = e) } },
        lj = {},
        jj = function(a, b) { var c = lj[b]; if (!c) { var d = Ug(b);
                c = d;
                void 0 === a.style[d] && (d = (qc ? "Webkit" : pc ? "Moz" : lc ? "ms" : null) + Wg(d), void 0 !== a.style[d] && (c = d));
                lj[b] = c } return c },
        mj = function(a, b) { var c = Zg(a); return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : "" },
        nj = function(a) {
            try { return a.getBoundingClientRect() } catch (b) {
                return {
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0
                }
            }
        },
        oj = function(a) { var b = Zg(a),
                c = new Gg(0, 0); var d = b ? Zg(b) : document;
            d = !lc || 9 <= Number(Kc) || "CSS1Compat" == $g(d).j.compatMode ? d.documentElement : d.body; if (a == d) return c;
            a = nj(a);
            b = hh($g(b).j);
            c.x = a.left + b.x;
            c.y = a.top + b.y; return c },
        qj = function(a, b) { var c = new Gg(0, 0),
                d = ih(Zg(a)); if (!hc(d, "parent")) return c;
            do { var e = d == b ? oj(a) : pj(a);
                c.x += e.x;
                c.y += e.y } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent)); return c },
        pj = function(a) { a = nj(a); return new Gg(a.left, a.top) },
        sj = function(a) {
            var b =
                rj,
                c;
            (c = mj(a, "display")) || (c = a.currentStyle ? a.currentStyle.display : null);
            if ("none" != (c || a.style && a.style.display)) return b(a);
            c = a.style;
            var d = c.display,
                e = c.visibility,
                f = c.position;
            c.visibility = "hidden";
            c.position = "absolute";
            c.display = "inline";
            a = b(a);
            c.display = d;
            c.position = f;
            c.visibility = e;
            return a
        },
        rj = function(a) { var b = a.offsetWidth,
                c = a.offsetHeight,
                d = qc && !b && !c; return (void 0 === b || d) && a.getBoundingClientRect ? (a = nj(a), new Hg(a.right - a.left, a.bottom - a.top)) : new Hg(b, c) },
        tj = function(a) {
            var b = oj(a);
            a =
                sj(a);
            return new Zi(b.x, b.y, a.width, a.height)
        },
        uj = function(a, b) { a = a.style; "opacity" in a ? a.opacity = b : "MozOpacity" in a ? a.MozOpacity = b : "filter" in a && (a.filter = "" === b ? "" : "alpha(opacity=" + 100 * Number(b) + ")") },
        vj = function(a, b) { a.style.display = b ? "" : "none" };
    var wj = function(a) { var b = new Zi(-Number.MAX_VALUE / 2, -Number.MAX_VALUE / 2, Number.MAX_VALUE, Number.MAX_VALUE),
                c = new Zi(0, 0, 0, 0); if (!a || 0 == a.length) return c; for (var d = 0; d < a.length; d++) { a: { var e = b; var f = a[d],
                        g = Math.max(e.left, f.left),
                        h = Math.min(e.left + e.width, f.left + f.width); if (g <= h) { var k = Math.max(e.top, f.top);
                        f = Math.min(e.top + e.height, f.top + f.height); if (k <= f) { e.left = g;
                            e.top = k;
                            e.width = h - g;
                            e.height = f - k;
                            e = !0; break a } }
                    e = !1 } if (!e) return c } return b },
        xj = function(a, b) {
            var c = a.getBoundingClientRect();
            a = qj(a,
                b);
            return new Zi(Math.round(a.x), Math.round(a.y), Math.round(c.right - c.left), Math.round(c.bottom - c.top))
        },
        yj = function(a, b, c) {
            if (b && c) {
                a: { var d = Math.max(b.left, c.left); var e = Math.min(b.left + b.width, c.left + c.width); if (d <= e) { var f = Math.max(b.top, c.top),
                            g = Math.min(b.top + b.height, c.top + c.height); if (f <= g) { d = new Zi(d, f, e - d, g - f); break a } }
                    d = null }
                e = d ? d.height * d.width : 0;f = d ? b.height * b.width : 0;d = d && f ? Math.round(e / f * 100) : 0;ej(a, new fj("vp", d));d && 0 < d ? (e = $i(b), f = $i(c), e = e.top >= f.top && e.top < f.bottom) : e = !1;ej(a, new gj(512,
                    e));d && 0 < d ? (e = $i(b), f = $i(c), e = e.bottom <= f.bottom && e.bottom > f.top) : e = !1;ej(a, new gj(1024, e));d && 0 < d ? (e = $i(b), f = $i(c), e = e.left >= f.left && e.left < f.right) : e = !1;ej(a, new gj(2048, e));d && 0 < d ? (b = $i(b), c = $i(c), c = b.right <= c.right && b.right > c.left) : c = !1;ej(a, new gj(4096, c))
            }
        };
    var zj = function(a, b) {
        var c = 0;
        ff(ih(), "ima", "video", "client", "tagged") && (c = 1);
        var d = null;
        a && (d = a());
        if (d) {
            a = dj();
            a.j = {};
            var e = new gj(32, !0);
            e.l = !1;
            ej(a, e);
            e = ih().document;
            e = e.visibilityState || e.webkitVisibilityState || e.mozVisibilityState || e.msVisibilityState || "";
            ej(a, new gj(64, "hidden" != e.toLowerCase().substring(e.length - 6) ? !0 : !1));
            try { var f = ih().top; try { var g = !!f.location.href || "" === f.location.href } catch (n) { g = !1 } if (g) { var h = Fh(d); var k = h && 0 != h.length ? "1" : "0" } else k = "2" } catch (n) { k = "2" }
            ej(a, new gj(256,
                "2" == k));
            ej(a, new gj(128, "1" == k));
            h = g = ih().top;
            "2" == k && (h = ih());
            f = xj(d, h);
            ej(a, new hj("er", f));
            try { var m = h.document && !h.document.body ? null : gh(h || window) } catch (n) { m = null }
            m ? (h = hh($g(h.document).j), ej(a, new gj(16384, !!h)), m = h ? new Zi(h.x, h.y, m.width, m.height) : null) : m = null;
            ej(a, new hj("vi", m));
            if (m && "1" == k) { k = Fh(d);
                d = []; for (h = 0; h < k.length; h++)(e = xj(k[h], g)) && d.push(e);
                d.push(m);
                m = wj(d) }
            yj(a, f, m);
            a.l && ej(a, new fj("ts", Ti() - a.l));
            a.l = Ti()
        } else a = dj(), a.j = {}, a.l = Ti(), ej(a, new gj(32, !1));
        this.o = a;
        this.j = new Ui;
        this.j.set("ve", 4);
        c && Vi(this.j, 1);
        ff(ih(), "ima", "video", "client", "crossdomainTag") && Vi(this.j, 4);
        ff(ih(), "ima", "video", "client", "sdkTag") && Vi(this.j, 8);
        ff(ih(), "ima", "video", "client", "jsTag") && Vi(this.j, 2);
        b && nf(b, "fullscreen", !1) && Vi(this.j, 16);
        this.l = b = null;
        if (c && (c = ff(ih(), "ima", "video", "client"), c.getEData)) {
            this.l = c.getEData();
            if (c = ff(ih(), "ima", "video", "client", "getLastSnapshotFromTop"))
                if (a = c()) this.l.extendWithDataFromTopIframe(a.tagstamp, a.playstamp, a.lactstamp), c = this.o, b = a.er, a = a.vi, b &&
                    a && (b = ij(b).X, a = ij(a).X, k = null, nf(c.j, "er", null) && (k = nf(c.j, "er", null).X, k.top += b.top, k.left += b.left, ej(c, new hj("er", k))), nf(c.j, "vi", null) && (m = nf(c.j, "vi", null).X, m.top += b.top, m.left += b.left, d = [], d.push(m), d.push(b), d.push(a), b = wj(d), yj(c, k, b), ej(c, new hj("vi", a))));
            a: { if (this.l) { if (this.l.getTagLoadTimestamp) { b = this.l.getTagLoadTimestamp(); break a } if (this.l.getTimeSinceTagLoadSeconds) { b = this.l.getTimeSinceTagLoadSeconds(); break a } }
                b = null }
        }
        c = this.j;
        a = window.performance && window.performance.timing &&
            window.performance.timing.domLoading && 0 < window.performance.timing.domLoading ? Math.round(window.performance.timing.domLoading / 1E3) : null;
        c.set.call(c, "td", Ti() - (null != a ? a : null != b ? b : Ti()))
    };
    new Oi(200);
    var Aj = function(a, b) { try { var c = new zj(a, b);
            a = []; var d = Number(c.j.get("eb"));
            c.j.remove("eb"); var e, f = c.j;
            b = []; for (var g in f.j) b.push(g + f.j[g]);
            (e = b.join("_")) && a.push(e); if (c.l) { var h = c.l.serialize();
                h && a.push(h) } var k, m = c.o;
            e = d;
            f = [];
            e || (e = 0); for (var n in m.j) { var r = m.j[n]; if (r instanceof gj) r.X && (e |= r.A);
                else { var q, y = m.j[n];
                    (q = y.l ? y.j() : "") && f.push(n + q) } }
            f.push("eb" + String(e));
            (k = f.join("_")) && a.push(k);
            c.j.set("eb", d); return a.join("_") } catch (x) { return "tle;" + Pg(x.name, 12) + ";" + Pg(x.message, 40) } };
    var Bj = function(a) { C.call(this, a) };
    u(Bj, C);
    Bj.prototype.getName = function() { return Qd(this, 1) };
    Bj.prototype.setValue = function(a) { return B(this, 2, a) };
    var Cj = function(a) { C.call(this, a) };
    u(Cj, C);
    var Dj = function(a) { C.call(this, a) };
    u(Dj, C);
    var Ej = function(a) { C.call(this, a) };
    u(Ej, C);
    var Gj = function(a) { C.call(this, a, -1, Fj) };
    u(Gj, C);
    var Fj = [2];
    var Hj = function(a) { C.call(this, a) };
    u(Hj, C);
    var Oj = function(a) { C.call(this, a, -1, Ij) };
    u(Oj, C);
    var Pj = function(a) { return Kd(a, Cj, 29) },
        Ij = [28];
    var Wd = function(a) { C.call(this, a, -1, Qj) };
    u(Wd, C);
    var Qj = [21];
    var Rj = function(a) { C.call(this, a) };
    u(Rj, C);
    Rj.prototype.setValue = function(a) { return B(this, 1, a) };
    var Sj = function(a, b) { return B(a, 2, b) },
        Tj = function(a, b) { return B(a, 3, b) },
        Uj = function(a, b) { return B(a, 4, b) };
    Rj.prototype.getVersion = function() { return Ad(this, 5) };
    var Vj;
    Vj = ["av.default", "js", "unreleased"].slice(-1)[0];
    var Wj = Cg(function() { var a = !1; try { var b = Object.defineProperty({}, "passive", { get: function() { a = !0 } });
            v.addEventListener("test", null, b) } catch (c) {} return a });

    function Xj(a) { return a ? a.passive && Wj() ? a : a.capture || !1 : !1 }
    var Yj = function(a, b, c, d) { return a.addEventListener ? (a.addEventListener(b, c, Xj(d)), !0) : !1 },
        Zj = function(a, b, c) { a.removeEventListener && a.removeEventListener(b, c, Xj()) },
        ak = function(a) { var b = void 0 === b ? {} : b; if ("function" === typeof window.CustomEvent) var c = new CustomEvent("rum_blp", b);
            else c = document.createEvent("CustomEvent"), c.initCustomEvent("rum_blp", !!b.bubbles, !!b.cancelable, b.detail);
            a.dispatchEvent(c) };
    var ck = function() { return !bk() && (z("iPod") || z("iPhone") || z("Android") || z("IEMobile")) },
        bk = function() { return z("iPad") || z("Android") && !z("Mobile") || z("Silk") };
    var dk = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),
        ek = function(a) { var b = a.match(dk);
            a = b[1]; var c = b[3];
            b = b[4]; var d = "";
            a && (d += a + ":");
            c && (d = d + "//" + c, b && (d += ":" + b)); return d },
        fk = function(a, b) { if (a) { a = a.split("&"); for (var c = 0; c < a.length; c++) { var d = a[c].indexOf("="),
                        e = null; if (0 <= d) { var f = a[c].substring(0, d);
                        e = a[c].substring(d + 1) } else f = a[c];
                    b(f, e ? Jg(e) : "") } } },
        gk = function(a, b, c) {
            c = null != c ? "=" + Ig(c) : "";
            if (b +=
                c) { c = a.indexOf("#");
                0 > c && (c = a.length); var d = a.indexOf("?"); if (0 > d || d > c) { d = c; var e = "" } else e = a.substring(d + 1, c);
                a = [a.slice(0, d), e, a.slice(c)];
                c = a[1];
                a[1] = b ? c ? c + "&" + b : b : c;
                a = a[0] + (a[1] ? "?" + a[1] : "") + a[2] }
            return a
        },
        hk = function(a, b, c, d) { for (var e = c.length; 0 <= (b = a.indexOf(c, b)) && b < d;) { var f = a.charCodeAt(b - 1); if (38 == f || 63 == f)
                    if (f = a.charCodeAt(b + e), !f || 61 == f || 38 == f || 35 == f) return b;
                b += e + 1 } return -1 },
        ik = /#|$/,
        jk = function(a, b) { return 0 <= hk(a, 0, b, a.search(ik)) },
        kk = function(a, b) {
            var c = a.search(ik),
                d = hk(a, 0, b, c);
            if (0 > d) return null;
            var e = a.indexOf("&", d);
            if (0 > e || e > c) e = c;
            d += b.length + 1;
            return Jg(a.slice(d, -1 !== e ? e : 0))
        },
        lk = /[?&]($|#)/,
        mk = function(a, b) { for (var c = a.search(ik), d = 0, e, f = []; 0 <= (e = hk(a, d, b, c));) f.push(a.substring(d, e)), d = Math.min(a.indexOf("&", e) + 1 || c, c);
            f.push(a.slice(d)); return f.join("").replace(lk, "$1") };
    var nk = function(a) { try { return !!a && null != a.location.href && hc(a, "foo") } catch (b) { return !1 } },
        ok = function() { if (!globalThis.crypto) return Math.random(); try { var a = new Uint32Array(1);
                globalThis.crypto.getRandomValues(a); return a[0] / 65536 / 65536 } catch (b) { return Math.random() } },
        pk = function(a, b) { if (a)
                for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a) };

    function qk(a) { var b, c; return null != (c = null == (b = /https?:\/\/[^\/]+/.exec(a)) ? void 0 : b[0]) ? c : "" }
    var sk = function() { var a = rk; if (!a) return ""; var b = RegExp(".*[&#?]google_debug(=[^&]*)?(&.*)?$"); try { var c = b.exec(decodeURIComponent(a)); if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true" } catch (d) {} return "" };

    function tk(a, b) { if (a.length && b.head) { a = p(a); for (var c = a.next(); !c.done; c = a.next())
                if ((c = c.value) && b.head) { var d = uk("META");
                    b.head.appendChild(d);
                    d.httpEquiv = "origin-trial";
                    d.content = c } } }
    var uk = function(a, b) { b = void 0 === b ? document : b; return b.createElement(String(a).toLowerCase()) },
        vk = function(a) { for (var b = a; a && a != a.parent;) a = a.parent, nk(a) && (b = a); return b };

    function wk(a, b) { a.google_image_requests || (a.google_image_requests = []); var c = uk("IMG", a.document);
        c.src = b;
        a.google_image_requests.push(c) };
    var xk = document,
        J = window;
    var yk = function(a) { a = void 0 === a ? v : a; var b = a.context || a.AMP_CONTEXT_DATA; if (!b) try { b = a.parent.context || a.parent.AMP_CONTEXT_DATA } catch (c) {}
        try { if (b && b.pageViewId && b.canonicalUrl) return b } catch (c) {} return null };

    function zk(a) { var b = void 0 === b ? {} : b;
        a = a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
        b.Sm && (a = a.replace(/(^|[\r\n\t ]) /g, "$1&#160;"));
        b.Rm && (a = a.replace(/(\r\n|\n|\r)/g, "<br>"));
        b.Tm && (a = a.replace(/(\t+)/g, '<span style="white-space:pre">$1</span>')); return hg(a) };

    function Ak(a) { var b = document.createElement("template"); if (!("content" in b)) { b = hg("<html><body>" + a);
            b = (new DOMParser).parseFromString(gg(b), "text/html"); for (a = b.createDocumentFragment(); 0 < b.body.childNodes.length;) a.appendChild(b.body.firstChild); return a }
        a = hg(a);
        vg(b, a); return b.content };

    function Bk(a) { a = a.nodeName; return "string" === typeof a ? a : "FORM" }

    function Ck(a) { a = a.nodeType; return a === Node.ELEMENT_NODE || "number" !== typeof a };
    var Dk = function(a, b, c, d) { this.l = a;
        this.j = b;
        this.o = c;
        this.A = d };
    var Ek = new Dk(new Set("ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER".split(" ")), new Map([
            ["A",
                new Map([
                    ["href", { va: 2 }]
                ])
            ],
            ["AREA", new Map([
                ["href", { va: 2 }]
            ])],
            ["LINK", new Map([
                ["href", { va: 2, conditions: new Map([
                        ["rel", new Set("alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" "))]
                    ]) }]
            ])],
            ["SOURCE", new Map([
                ["src", { va: 2 }]
            ])],
            ["IMG", new Map([
                ["src", { va: 2 }]
            ])],
            ["VIDEO", new Map([
                ["src", { va: 2 }]
            ])],
            ["AUDIO", new Map([
                ["src", { va: 2 }]
            ])]
        ]), new Set("title aria-atomic aria-autocomplete aria-busy aria-checked aria-current aria-disabled aria-dropeffect aria-expanded aria-haspopup aria-hidden aria-invalid aria-label aria-level aria-live aria-multiline aria-multiselectable aria-orientation aria-posinset aria-pressed aria-readonly aria-relevant aria-required aria-selected aria-setsize aria-sort aria-valuemax aria-valuemin aria-valuenow aria-valuetext alt align autocapitalize autocomplete autocorrect autofocus autoplay bgcolor border cellpadding cellspacing checked color cols colspan controls datetime disabled download draggable enctype face formenctype frameborder height hreflang hidden ismap label lang loop max maxlength media minlength min multiple muted nonce open placeholder preload rel required reversed role rows rowspan selected shape size sizes slot span spellcheck start step summary translate type valign value width wrap itemscope itemtype itemid itemprop itemref".split(" ")),
        new Map([
            ["dir", { va: 3, conditions: new Map([
                    ["dir", new Set(["auto", "ltr", "rtl"])]
                ]) }],
            ["async", { va: 3, conditions: new Map([
                    ["async", new Set(["async"])]
                ]) }],
            ["cite", { va: 2 }],
            ["loading", { va: 3, conditions: new Map([
                    ["loading", new Set(["eager", "lazy"])]
                ]) }],
            ["poster", { va: 2 }],
            ["target", { va: 3, conditions: new Map([
                    ["target", new Set(["_self", "_blank"])]
                ]) }]
        ]));
    var Fk = function(a) { this.j = a;
            this.changes = []; if (ug !== ug) throw Error("Bad secret"); },
        Hk = function(a) { var b = document.createElement("span");
            b.appendChild(Gk(a));
            a = (new XMLSerializer).serializeToString(b);
            a = a.slice(a.indexOf(">") + 1, a.lastIndexOf("</")); return hg(a) },
        Gk = function(a) {
            var b = Ik;
            a = Ak(a);
            a = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, function(g) { return Jk(b, g) }, !1);
            for (var c = a.nextNode(), d = document.createDocumentFragment(), e = d; null !== c;) {
                var f = void 0;
                if (c.nodeType ===
                    Node.TEXT_NODE) f = document.createTextNode(c.data);
                else if (Ck(c)) f = Kk(b, c);
                else throw Error("Node is not of type text or element");
                e.appendChild(f);
                if (c = a.firstChild()) e = f;
                else
                    for (; !(c = a.nextSibling()) && (c = a.parentNode());) e = e.parentNode
            }
            return d
        },
        Kk = function(a, b) {
            var c = Bk(b),
                d = document.createElement(c);
            b = b.attributes;
            for (var e = p(b), f = e.next(); !f.done; f = e.next()) {
                var g = f.value;
                f = g.name;
                g = g.value;
                var h = a.j,
                    k = h.j.get(c);
                h = (null == k ? 0 : k.has(f)) ? k.get(f) : h.o.has(f) ? { va: 1 } : h.A.get(f) || { va: 0 };
                a: {
                    if (k = h.conditions) {
                        k =
                            p(k);
                        for (var m = k.next(); !m.done; m = k.next()) { var n = p(m.value);
                            m = n.next().value;
                            n = n.next().value; var r = void 0; if ((m = null == (r = b.getNamedItem(m)) ? void 0 : r.value) && !n.has(m)) { k = !1; break a } }
                    }
                    k = !0
                }
                if (k) switch (h.va) {
                    case 1:
                        d.setAttribute(f, g);
                        break;
                    case 2:
                        h = rg(g);
                        h = void 0 !== h && -1 !== sg.indexOf(h.toLowerCase()) ? g : "about:invalid#zClosurez";
                        h !== g && Lk(a);
                        d.setAttribute(f, h);
                        break;
                    case 3:
                        d.setAttribute(f, g.toLowerCase());
                        break;
                    case 4:
                        d.setAttribute(f, g);
                        break;
                    case 0:
                        Lk(a);
                        break;
                    default:
                        throw Error("Unhandled AttributePolicyAction case");
                } else Lk(a)
            }
            return d
        },
        Jk = function(a, b) { if (b.nodeType === Node.TEXT_NODE) return NodeFilter.FILTER_ACCEPT; if (!Ck(b)) return NodeFilter.FILTER_REJECT;
            b = Bk(b); if (null === b) return Lk(a), NodeFilter.FILTER_REJECT; var c = a.j; if ("form" !== b.toLowerCase() && (c.l.has(b) || c.j.has(b))) return NodeFilter.FILTER_ACCEPT;
            Lk(a); return NodeFilter.FILTER_REJECT },
        Lk = function(a) { 0 === a.changes.length && a.changes.push("") },
        Ik = new Fk(Ek);
    var Mk = function() { this.l = !1;
        this.j = Ek };
    Mk.prototype.build = function() { if (this.l) throw Error("this sanitizer has already called build");
        this.l = !0; return new Fk(this.j) };

    function Nk(a) { var b = Ea.apply(1, arguments); if (0 === b.length) return Ef(a[0]); for (var c = [a[0]], d = 0; d < b.length; d++) c.push(encodeURIComponent(b[d])), c.push(a[d + 1]); return Ef(c.join("")) };
    var Ok = function(a) { this.isValid = a };

    function Pk(a) { return new Ok(function(b) { return b.substr(0, a.length + 1).toLowerCase() === a + ":" }) }
    var Qk = [Pk("data"), Pk("http"), Pk("https"), Pk("mailto"), Pk("ftp"), new Ok(function(a) { return /^[^:]*([/?#]|$)/.test(a) })];

    function Rk(a) { var b = void 0 === b ? Qk : b;
        a: { b = void 0 === b ? Qk : b; for (var c = 0; c < b.length; ++c) { var d = b[c]; if (d instanceof Ok && d.isValid(a)) { a = Lf(a); break a } }
            a = void 0 }
        return a || Nf };
    var Sk = function(a, b, c) { c = void 0 === c ? {} : c;
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = c },
        Tk = function(a) { return !!(a.error && a.meta && a.id) };
    var Uk = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)"),
        Yk = function(a) { a = a || Vk(); for (var b = new Wk(v.location.href, !1), c = null, d = a.length - 1, e = d; 0 <= e; --e) { var f = a[e];!c && Uk.test(f.url) && (c = f); if (f.url && !f.Mf) { b = f; break } }
            e = null;
            f = a.length && a[d].url;
            0 != b.depth && f && (e = a[d]); return new Xk(b, e, c) },
        Vk = function() {
            var a = v,
                b = [],
                c = null;
            do { var d = a; if (nk(d)) { var e = d.location.href;
                    c = d.document && d.document.referrer || null } else e = c, c = null;
                b.push(new Wk(e || "")); try { a = d.parent } catch (f) { a = null } } while (a &&
                d != a);
            d = 0;
            for (a = b.length - 1; d <= a; ++d) b[d].depth = a - d;
            d = v;
            if (d.location && d.location.ancestorOrigins && d.location.ancestorOrigins.length == b.length - 1)
                for (a = 1; a < b.length; ++a) e = b[a], e.url || (e.url = d.location.ancestorOrigins[a - 1] || "", e.Mf = !0);
            return b
        },
        Xk = function(a, b, c) { this.j = a;
            this.l = b;
            this.o = c },
        Wk = function(a, b) { this.url = a;
            this.Mf = !!b;
            this.depth = null };
    var Zk = function() { this.o = "&";
            this.l = {};
            this.A = 0;
            this.j = [] },
        $k = function(a, b) { var c = {};
            c[a] = b; return [c] },
        bl = function(a, b, c, d, e) { var f = [];
            pk(a, function(g, h) {
                (g = al(g, b, c, d, e)) && f.push(h + "=" + g) }); return f.join(b) },
        al = function(a, b, c, d, e) {
            if (null == a) return "";
            b = b || "&";
            c = c || ",$";
            "string" == typeof c && (c = c.split(""));
            if (a instanceof Array) { if (d = d || 0, d < c.length) { for (var f = [], g = 0; g < a.length; g++) f.push(al(a[g], b, c, d + 1, e)); return f.join(c[d]) } } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(bl(a,
                b, c, d, e + 1)) : "...";
            return encodeURIComponent(String(a))
        },
        cl = function(a, b, c) { a.j.push(b);
            a.l[b] = c },
        dl = function(a, b, c, d) { a.j.push(b);
            a.l[b] = $k(c, d) },
        fl = function(a, b, c) {
            b = b + "//pagead2.googlesyndication.com" + c;
            var d = el(a) - c.length;
            if (0 > d) return "";
            a.j.sort(function(n, r) { return n - r });
            c = null;
            for (var e = "", f = 0; f < a.j.length; f++)
                for (var g = a.j[f], h = a.l[g], k = 0; k < h.length; k++) { if (!d) { c = null == c ? g : c; break } var m = bl(h[k], a.o, ",$"); if (m) { m = e + m; if (d >= m.length) { d -= m.length;
                            b += m;
                            e = a.o; break }
                        c = null == c ? g : c } }
            a = "";
            null != c &&
                (a = e + "trn=" + c);
            return b + a
        },
        el = function(a) { var b = 1,
                c; for (c in a.l) b = c.length > b ? c.length : b; return 3997 - b - a.o.length - 1 };
    var gl = function() { var a = void 0 === a ? J : a;
            this.l = "http:" === a.location.protocol ? "http:" : "https:";
            this.j = Math.random() },
        il = function() { var a = hl,
                b = window.google_srt;
            0 <= b && 1 >= b && (a.j = b) },
        jl = function(a, b, c, d, e) { if ((d ? a.j : Math.random()) < (e || .01)) try { if (c instanceof Zk) var f = c;
                else f = new Zk, pk(c, function(h, k) { var m = f,
                        n = m.A++;
                    cl(m, n, $k(k, h)) }); var g = fl(f, a.l, "/pagead/gen_204?id=" + b + "&");
                g && wk(v, g) } catch (h) {} };
    var kl = null;
    var ll = function() { var a = void 0 === a ? v : a; return (a = a.performance) && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Xa() },
        ml = function() { var a = void 0 === a ? v : a; return (a = a.performance) && a.now ? a.now() : null };
    var nl = function(a, b, c, d) { this.label = a;
        this.type = b;
        this.value = c;
        this.duration = void 0 === d ? 0 : d;
        this.uniqueId = Math.random();
        this.taskId = this.slotId = void 0 };
    var ol = v.performance,
        pl = !!(ol && ol.mark && ol.measure && ol.clearMarks),
        ql = Cg(function() { var a; if (a = pl) { var b; if (null === kl) { kl = ""; try { a = ""; try { a = v.top.location.hash } catch (c) { a = v.location.hash }
                        a && (kl = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "") } catch (c) {} }
                b = kl;
                a = !!b.indexOf && 0 <= b.indexOf("1337") } return a }),
        rl = function(a, b) {
            this.events = [];
            this.j = b || v;
            var c = null;
            b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [], this.events = b.google_js_reporting_queue, c = b.google_measure_js_timing);
            this.l = ql() || (null !=
                c ? c : Math.random() < a)
        };
    rl.prototype.D = function() { this.l = !1;
        this.events != this.j.google_js_reporting_queue && (ql() && Ob(this.events, sl), this.events.length = 0) };
    rl.prototype.H = function(a) {!this.l || 2048 < this.events.length || this.events.push(a) };
    var sl = function(a) { a && ol && ql() && (ol.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), ol.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end")) },
        tl = function(a, b, c, d) { a.l && a.H(new nl(b, 4, c, void 0 === d ? 0 : d)) };
    rl.prototype.start = function(a, b) { if (!this.l) return null;
        a = new nl(a, b, ml() || ll());
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        ol && ql() && ol.mark(b); return a };
    rl.prototype.end = function(a) { if (this.l && "number" === typeof a.value) { a.duration = (ml() || ll()) - a.value; var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            ol && ql() && ol.mark(b);
            this.H(a) } };
    var vl = function() { var a = ul;
        this.C = hl;
        this.B = "jserror";
        this.o = !0;
        this.l = null;
        this.D = this.vb;
        this.j = void 0 === a ? null : a;
        this.A = !1 };
    l = vl.prototype;
    l.Je = function(a) { this.l = a };
    l.cg = function(a) { this.B = a };
    l.dg = function(a) { this.o = a };
    l.eg = function(a) { this.A = a };
    l.tc = function(a, b, c) { try { if (this.j && this.j.l) { var d = this.j.start(a.toString(), 3); var e = b();
                this.j.end(d) } else e = b() } catch (h) { b = this.o; try { sl(d), b = this.D(a, new Sk(h, { message: wl(h) }), void 0, c) } catch (k) { this.vb(217, k) } if (b) { var f, g;
                null == (f = window.console) || null == (g = f.error) || g.call(f, h) } else throw h; } return e };
    l.He = function(a, b, c, d) { var e = this; return function() { var f = Ea.apply(0, arguments); return e.tc(a, function() { return b.apply(c, f) }, d) } };
    l.vb = function(a, b, c, d, e) { e = e || this.B; try { var f = new Zk;
            dl(f, 1, "context", a);
            Tk(b) || (b = new Sk(b, { message: wl(b) }));
            b.msg && dl(f, 2, "msg", b.msg.substring(0, 512)); var g = b.meta || {}; if (this.l) try { this.l(g) } catch (k) {}
            if (d) try { d(g) } catch (k) {}
            cl(f, 3, [g]); var h = Yk();
            h.l && dl(f, 4, "top", h.l.url || "");
            cl(f, 5, [{ url: h.j.url || "" }, { url: h.j.url ? ek(h.j.url) : "" }]);
            jl(this.C, e, f, this.A, c) } catch (k) { try { jl(this.C, e, { context: "ecmserr", rctx: a, msg: wl(k), url: h && h.j.url }, this.A, c) } catch (m) {} } return this.o };
    var wl = function(a) { var b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message); if (a.stack) { a = a.stack; var c = b; try {-1 == a.indexOf(c) && (a = c + "\n" + a); for (var d; a != d;) d = a, a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
                b = a.replace(RegExp("\n *", "g"), "\n") } catch (e) { b = c } } return b };
    var yl = function(a) { C.call(this, a, -1, xl) };
    u(yl, C);
    var xl = [2, 8],
        zl = [3, 4, 5];
    var Bl = function(a) { C.call(this, a, -1, Al) };
    u(Bl, C);
    var Al = [4];
    var Dl = function(a) { C.call(this, a, -1, Cl) };
    u(Dl, C);
    var Cl = [5],
        El = [1, 2, 3, 6, 7];
    var Fl = function(a) { var b = "Kf"; if (a.Kf && a.hasOwnProperty(b)) return a.Kf;
        b = new a; return a.Kf = b };
    var Gl = function(a, b) { switch (b) {
                case 1:
                    return Rd(a, 1, El);
                case 2:
                    return Rd(a, 2, El);
                case 3:
                    return Rd(a, 3, El);
                case 6:
                    return Rd(a, 6, El);
                default:
                    return null } },
        Hl = function(a, b) { if (!a) return null; switch (b) {
                case 1:
                    return Gd(a, 1);
                case 7:
                    return Qd(a, 3);
                case 2:
                    return a = Dd(a, 2), null == a ? 0 : a;
                case 3:
                    return Qd(a, 3);
                case 6:
                    return Cd(a, 4);
                default:
                    return null } };
    var Il = function() { this.j = function() { return [] } };
    var hl, Jl, ul = new rl(1, window);
    (function(a) { hl = null != a ? a : new gl; "number" !== typeof window.google_srt && (window.google_srt = Math.random());
        il();
        Jl = new vl;
        Jl.Je(function() {});
        Jl.eg(!0); "complete" == window.document.readyState ? window.google_measure_js_timing || ul.D() : ul.l && Yj(window, "load", function() { window.google_measure_js_timing || ul.D() }) })();
    var Kl = function(a, b) { return Jl.He(a, b) },
        Ll = function(a, b) { var c = Fl(Il).j();!a.eid && c.length && (a.eid = c.toString());
            jl(hl, "gdn::mta", a, !0, b) },
        Ml = function(a, b) { Jl.vb(531, a, .01, b) };
    var Nl = function() { var a = this;
        this.promise = new Promise(function(b, c) { a.resolve = b;
            a.reject = c }) };

    function Ol() { var a = new Nl; return { promise: a.promise, resolve: a.resolve } };

    function Pl(a) { var b = void 0 === b ? function() {} : b;
        a.google_llp || (a.google_llp = {});
        a = a.google_llp; var c = a[9]; if (c) return c;
        c = Ol();
        a[9] = c;
        b(); return c };

    function Ql() { var a = void 0 === a ? window : a; var b; return Da(function(c) { b = [Pl(a).promise]; try { b.push(Pl(a.parent).promise) } catch (d) {} return c.return(Promise.race(b)) }) };
    var Rl = [0, 2, 1],
        Sl = null,
        Tl = function() { var a = window.event || Sl; if (!a) return null; var b;
            (b = a.which ? 1 << Rl[a.which - 1] : a.button) && a.shiftKey && (b |= 8);
            b && a.altKey && (b |= 16);
            b && a.ctrlKey && (b |= 32); return b };
    document.addEventListener && document.addEventListener("mousedown", function(a) { Sl = a }, !0);
    window.mb = function(a) { if (a) { var b = Tl(); if (b)
                if (window.css) window.css(a.id, "mb", b, void 0, void 0);
                else if (a) { var c = a.href,
                    d = c.indexOf("&mb="); if (0 > d) b = c + "&mb=" + b;
                else { d += 4; var e = c.indexOf("&", d);
                    b = 0 <= e ? c.substring(0, d) + b + c.substring(e) : c.substring(0, d) + b }
                a.href = 2E3 < b.length ? c : b } } };
    var Ul = function(a) { return "string" == typeof a.className ? a.className : a.getAttribute && a.getAttribute("class") || "" },
        Vl = function(a) { return a.classList ? a.classList : Ul(a).match(/\S+/g) || [] },
        Wl = function(a, b) { "string" == typeof a.className ? a.className = b : a.setAttribute && a.setAttribute("class", b) },
        Xl = function(a, b) { return a.classList ? a.classList.contains(b) : Xb(Vl(a), b) },
        Yl = function(a, b) { if (a.classList) a.classList.add(b);
            else if (!Xl(a, b)) { var c = Ul(a);
                Wl(a, c + (0 < c.length ? " " + b : b)) } },
        Zl = function(a, b) {
            if (a.classList) Array.prototype.forEach.call(b,
                function(e) { Yl(a, e) });
            else { var c = {};
                Array.prototype.forEach.call(Vl(a), function(e) { c[e] = !0 });
                Array.prototype.forEach.call(b, function(e) { c[e] = !0 });
                b = ""; for (var d in c) b += 0 < b.length ? " " + d : d;
                Wl(a, b) }
        },
        $l = function(a, b) { a.classList ? a.classList.remove(b) : Xl(a, b) && Wl(a, Array.prototype.filter.call(Vl(a), function(c) { return c != b }).join(" ")) };
    var am = function(a) {
        this.serializedAttributionData = a.toJSON();
        this.attributionData = a.clone();
        this.isMutableImpression = Array.isArray(Ad(this.attributionData, 1)) && !!Gd(Kd(this.attributionData, Oj, 1), 33);
        this.D = Qd(this.attributionData, 30) || "";
        this.hasUserFeedbackData = !!this.attributionData && Array.isArray(Ad(this.attributionData, 1));
        this.kh = Pd(this.attributionData, 8) || 1;
        this.creativeIndexSuffix = 1 < Pd(this.attributionData, 8) ? Pd(this.attributionData, 7).toString() : "";
        this.B = !!Gd(this.attributionData, 14);
        this.enableMultiplexThirdPartyAttribution = !!Gd(this.attributionData, 32);
        this.C = !!Gd(this.attributionData, 15);
        this.openAttributionInline = 1 == Gd(this.attributionData, 10);
        this.isMobileDevice = !!Gd(this.attributionData, 12);
        this.survey = null;
        this.H = (a = xk.querySelector("[data-slide]")) ? "true" === a.getAttribute("data-slide") : !1;
        (this.o = "" !== this.creativeIndexSuffix) && void 0 === J.goog_multislot_cache && (J.goog_multislot_cache = {});
        if (this.o && !this.H && void 0 === J.goog_multislot_cache.hd) {
            a = !1;
            var b = xk.querySelector("[data-dim]");
            if (b)
                if (b = b.getBoundingClientRect(),
                    150 <= b.right - b.left && 150 <= b.bottom - b.top) a = !1;
                else { var c = document.body.getBoundingClientRect();
                    150 > (1 >= Math.abs(c.left - b.left) && 1 >= Math.abs(c.right - b.right) ? b.bottom - b.top : b.right - b.left) && (a = !0) }
            else a = !1;
            window.goog_multislot_cache.hd = a
        }
        ah("abgcp" + this.creativeIndexSuffix);
        ah("abgc" + this.creativeIndexSuffix);
        this.j = ah("abgs" + this.creativeIndexSuffix);
        ah("abgl" + this.creativeIndexSuffix);
        ah("abgb" + this.creativeIndexSuffix);
        ah("abgac" + this.creativeIndexSuffix);
        ah("mute_panel" + this.creativeIndexSuffix);
        this.l = dh("goog_delegate_attribution" + this.creativeIndexSuffix);
        this.isDelegateAttributionActive = !!this.l && !!this.B && !dh("goog_delegate_disabled") && !this.C;
        if (this.j) a: for (a = this.j, a = a.childNodes, b = 0; b < a.length; b++)
            if (c = a.item(b), "undefined" != typeof c.tagName && "A" == c.tagName.toUpperCase()) break a;
        this.rtl = "left" == this.D;
        this.A = this.isDelegateAttributionActive ? this.l : ah("cbb" + this.creativeIndexSuffix);
        this.enableDelegateDismissableMenu = !!this.A && Xl(this.A, "goog_dismissable_menu");
        this.autoExpandOnLoad = !!Gd(this.attributionData, 19);
        this.adbadgeEnabled = !!Gd(this.attributionData, 24);
        this.enableNativeJakeUi = !!Gd(this.attributionData, 27)
    };
    var bm = function(a, b, c) { if (!a) throw Error("bad conv util ctor args");
            this.o = a;
            this.j = b;
            this.l = c },
        dm = function(a, b) { cm(a, Qd(b, 1), Qd(b, 2), Gd(b, 3, !0)) },
        cm = function(a, b, c, d) { b = a.o + "&label=" + b;
            c && (b += "&label_instance=" + c); if (d) { if (!a.j) throw Error("missing cbt");
                b += "&cbt=" + a.j }
            a.l && (b += "&cid=" + a.l);
            wk(window, b) },
        em = function(a, b, c) { return a && b ? new bm(a, b, c) : null };
    var fm = function(a) { this.j = Md(a, Bj, 21) },
        gm = function(a, b, c) { a = p(a.j); for (var d = a.next(); !d.done; d = a.next())
                if (d = d.value, d.getName() === b) return Qd(d, 2) || c;
            return c };
    var hm = function(a) { this.j = a },
        im = function(a) { this.j = [];
            a = document.querySelectorAll(a); for (var b = 0; b < a.length; ++b) this.j.push(new hm(a[b])) },
        jm = function(a) {
            for (var b = 0; b < a.j.length; ++b) {
                a: {
                    var c = a.j[b];
                    var d = c.j;c = c.j;
                    for (var e = 0; 50 > e; ++e) {
                        c = c.parentElement;
                        if (!c || c === document.body) break;
                        var f = c.getAttribute("wp");
                        if (null !== f)
                            if ("0" === f || "1" === f) {
                                var g = d;
                                d = c.getBoundingClientRect();
                                g = g.getBoundingClientRect();
                                if (!(d.top < g.top + .5 && d.right > g.right - .5 && d.bottom > g.bottom - .5 && d.left < g.left + .5)) { c = !1; break a }
                                if ("1" ===
                                    f) break;
                                else d = c
                            } else throw Error("Waypoint value invalid");
                    }
                    c = !0
                }
                if (!c) return !1
            }
            return !0
        },
        km = function(a, b, c) { this.j = c;
            this.A = b;
            this.l = new im(a);
            this.o = function() {} },
        lm = function(a, b) { a.j = b;
            b = a.l; for (var c = a.j, d = 0; d < b.j.length; ++d) b.j[d].j.style["font-size"] = c + "px";
            a.o() };
    km.prototype.resize = function() { var a = Va(function(b, c) { var d = this;
            window.setTimeout(c, 5E3);
            window.requestAnimationFrame(function() { var e = d.j,
                    f = d.A;
                lm(d, f); if (!jm(d.l)) { for (var g = 0; f > e + .1 && !(30 < g++);) { var h = (f + e) / 2;
                        lm(d, h);
                        jm(d.l) ? e = h : f = h }
                    lm(d, e) }
                b() }) }, this); return new Promise(a) };
    var mm = function(a, b) { a.o = b };
    var nm = function(a) { return !!a && !!Qd(a, 30) && !!Qd(a, 31) && !!Qd(a, 32) },
        om = function(a, b) { return ah(a + (void 0 === b ? "" : b)) },
        pm = function(a, b) { return ah(a + (void 0 === b ? "" : b)) },
        qm = function(a) { if (null != Ad(a, 21)) { var b = JSON.parse(Qd(a, 21)).msg_type; if ("resize-me" === b || "dismiss" === b || "i-dismiss" === b) { var c = Qd(a, 21); try { "i-dismiss" === b ? Ql().then(function(d) { d.dismiss(3) }) : J.top.postMessage(c, "*") } catch (d) { Ml(d, function(e) { e.closeMsg = c }) } } } },
        rm = function(a, b, c) {
            c = void 0 === c ? {} : c;
            if ("function" === typeof window.CustomEvent) var d =
                new CustomEvent(b, c);
            else d = document.createEvent("CustomEvent"), d.initCustomEvent(b, !!c.bubbles, !!c.cancelable, c.detail);
            I(a, d)
        };
    var sm = RegExp("[\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]");
    var K = function(a, b) { this.l = this.C = this.A = "";
        this.F = null;
        this.O = this.o = "";
        this.B = !1; var c;
        a instanceof K ? (this.B = void 0 !== b ? b : a.B, tm(this, a.A), this.C = a.C, this.l = a.l, um(this, a.F), this.o = a.o, vm(this, a.j.clone()), this.O = a.D()) : a && (c = String(a).match(dk)) ? (this.B = !!b, tm(this, c[1] || "", !0), this.C = wm(c[2] || ""), this.l = wm(c[3] || "", !0), um(this, c[4]), this.o = wm(c[5] || "", !0), vm(this, c[6] || "", !0), this.O = wm(c[7] || "")) : (this.B = !!b, this.j = new xm(null, this.B)) };
    K.prototype.toString = function() { var a = [],
            b = this.A;
        b && a.push(ym(b, zm, !0), ":"); var c = this.l; if (c || "file" == b) a.push("//"), (b = this.C) && a.push(ym(b, zm, !0), "@"), a.push(Ig(c).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.F, null != c && a.push(":", String(c)); if (c = this.o) this.l && "/" != c.charAt(0) && a.push("/"), a.push(ym(c, "/" == c.charAt(0) ? Am : Bm, !0));
        (c = this.j.toString()) && a.push("?", c);
        (c = this.D()) && a.push("#", ym(c, Cm)); return a.join("") };
    K.prototype.resolve = function(a) {
        var b = this.clone(),
            c = !!a.A;
        c ? tm(b, a.A) : c = !!a.C;
        c ? b.C = a.C : c = !!a.l;
        c ? b.l = a.l : c = null != a.F;
        var d = a.o;
        if (c) um(b, a.F);
        else if (c = !!a.o) {
            if ("/" != d.charAt(0))
                if (this.l && !this.o) d = "/" + d;
                else { var e = b.o.lastIndexOf("/"); - 1 != e && (d = b.o.slice(0, e + 1) + d) }
            e = d;
            if (".." == e || "." == e) d = "";
            else if (-1 != e.indexOf("./") || -1 != e.indexOf("/.")) {
                d = fb(e, "/");
                e = e.split("/");
                for (var f = [], g = 0; g < e.length;) {
                    var h = e[g++];
                    "." == h ? d && g == e.length && f.push("") : ".." == h ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(),
                        d && g == e.length && f.push("")) : (f.push(h), d = !0)
                }
                d = f.join("/")
            } else d = e
        }
        c ? b.o = d : c = "" !== a.j.toString();
        c ? vm(b, a.j.clone()) : c = !!a.O;
        c && (b.O = a.D());
        return b
    };
    K.prototype.clone = function() { return new K(this) };
    var tm = function(a, b, c) { a.A = c ? wm(b, !0) : b;
            a.A && (a.A = a.A.replace(/:$/, "")) },
        um = function(a, b) { if (b) { b = Number(b); if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
                a.F = b } else a.F = null },
        vm = function(a, b, c) { b instanceof xm ? (a.j = b, Dm(a.j, a.B)) : (c || (b = ym(b, Em)), a.j = new xm(b, a.B)); return a },
        Fm = function(a, b) { return a.j.get(b) };
    K.prototype.D = function() { return this.O };
    var Gm = function(a) { return a instanceof K ? a.clone() : new K(a, void 0) },
        wm = function(a, b) { return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "" },
        ym = function(a, b, c) { return "string" === typeof a ? (a = encodeURI(a).replace(b, Hm), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null },
        Hm = function(a) { a = a.charCodeAt(0); return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16) },
        zm = /[#\/\?@]/g,
        Bm = /[#\?:]/g,
        Am = /[#\?]/g,
        Em = /[#\?@]/g,
        Cm = /#/g,
        xm = function(a, b) { this.l = this.j = null;
            this.o = a || null;
            this.A = !!b },
        Im = function(a) { a.j || (a.j = new Map, a.l = 0, a.o && fk(a.o, function(b, c) { a.add(Jg(b), c) })) };
    xm.prototype.add = function(a, b) { Im(this);
        this.o = null;
        a = Jm(this, a); var c = this.j.get(a);
        c || this.j.set(a, c = []);
        c.push(b);
        this.l += 1; return this };
    xm.prototype.remove = function(a) { Im(this);
        a = Jm(this, a); return this.j.has(a) ? (this.o = null, this.l -= this.j.get(a).length, this.j.delete(a)) : !1 };
    xm.prototype.clear = function() { this.j = this.o = null;
        this.l = 0 };
    xm.prototype.isEmpty = function() { Im(this); return 0 == this.l };
    var Km = function(a, b) { Im(a);
        b = Jm(a, b); return a.j.has(b) };
    l = xm.prototype;
    l.forEach = function(a, b) { Im(this);
        this.j.forEach(function(c, d) { c.forEach(function(e) { a.call(b, e, d, this) }, this) }, this) };
    l.Ff = function() { Im(this); for (var a = Array.from(this.j.values()), b = Array.from(this.j.keys()), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]); return c };
    l.ie = function(a) { Im(this); var b = []; if ("string" === typeof a) Km(this, a) && (b = b.concat(this.j.get(Jm(this, a))));
        else { a = Array.from(this.j.values()); for (var c = 0; c < a.length; c++) b = b.concat(a[c]) } return b };
    l.set = function(a, b) { Im(this);
        this.o = null;
        a = Jm(this, a);
        Km(this, a) && (this.l -= this.j.get(a).length);
        this.j.set(a, [b]);
        this.l += 1; return this };
    l.get = function(a, b) { if (!a) return b;
        a = this.ie(a); return 0 < a.length ? String(a[0]) : b };
    l.toString = function() { if (this.o) return this.o; if (!this.j) return ""; for (var a = [], b = Array.from(this.j.keys()), c = 0; c < b.length; c++) { var d = b[c],
                e = Ig(d);
            d = this.ie(d); for (var f = 0; f < d.length; f++) { var g = e; "" !== d[f] && (g += "=" + Ig(d[f]));
                a.push(g) } } return this.o = a.join("&") };
    l.clone = function() { var a = new xm;
        a.o = this.o;
        this.j && (a.j = new Map(this.j), a.l = this.l); return a };
    var Jm = function(a, b) { b = String(b);
            a.A && (b = b.toLowerCase()); return b },
        Dm = function(a, b) { b && !a.A && (Im(a), a.o = null, a.j.forEach(function(c, d) { var e = d.toLowerCase();
                d != e && (this.remove(d), this.remove(e), 0 < c.length && (this.o = null, this.j.set(Jm(this, e), bc(c)), this.l += c.length)) }, a));
            a.A = b };
    var Lm = {},
        Mm = {},
        Nm = {},
        Om = {},
        Pm = function() { throw Error("Do not instantiate directly"); };
    Pm.prototype.Vg = null;
    Pm.prototype.getContent = function() { return this.content };
    Pm.prototype.toString = function() { return this.content };
    var Qm = function() { Pm.call(this) };
    Ya(Qm, Pm);
    Qm.prototype.Wg = Lm;
    var Vm = function(a, b) { return null != a && a.Wg === b };
    var Zm = function(a) { if (null != a) switch (a.Vg) {
                case 1:
                    return 1;
                case -1:
                    return -1;
                case 0:
                    return 0 }
            return null },
        bn = function(a) { return Vm(a, Lm) ? a : a instanceof fg ? M(gg(a).toString()) : a instanceof fg ? M(gg(a).toString()) : M(String(String(a)).replace($m, an), Zm(a)) },
        M = function(a) {
            function b(c) { this.content = c }
            b.prototype = a.prototype; return function(c, d) { c = new b(String(c));
                void 0 !== d && (c.Vg = d); return c } }(Qm),
        cn = function(a, b) { for (var c in b) c in a || (a[c] = b[c]); return a },
        dn = function(a) {
            return a.replace(/<\//g, "<\\/").replace(/\]\]>/g,
                "]]\\>")
        },
        N = function(a) { return Vm(a, Lm) ? String(String(a.getContent()).replace(en, "").replace(fn, "&lt;")).replace(gn, an) : String(a).replace($m, an) },
        kn = function(a) { return Vm(a, Lm) ? String(String(a.getContent()).replace(en, "").replace(fn, "&lt;")).replace(hn, an) : String(a).replace(jn, an) },
        pn = function(a) {
            Vm(a, Mm) || Vm(a, Nm) ? a = ln(a) : a instanceof Hf ? a = ln(If(a)) : a instanceof Hf ? a = ln(If(a)) : a instanceof Af ? a = ln(Bf(a).toString()) : a instanceof Af ? a = ln(Bf(a).toString()) : (a = String(a), a = mn.test(a) ? a.replace(nn, on) :
                "about:invalid#zSoyz");
            return a
        },
        rn = function(a) { Vm(a, Mm) || Vm(a, Nm) ? a = ln(a) : a instanceof Hf ? a = ln(If(a)) : a instanceof Hf ? a = ln(If(a)) : a instanceof Af ? a = ln(Bf(a).toString()) : a instanceof Af ? a = ln(Bf(a).toString()) : (a = String(a), a = qn.test(a) ? a.replace(nn, on) : "about:invalid#zSoyz"); return a },
        O = function(a) { Vm(a, Om) ? a = dn(a.getContent()) : null == a ? a = "" : a instanceof Pf ? a = dn(Qf(a)) : a instanceof Pf ? a = dn(Qf(a)) : a instanceof cg ? a = dn(dg(a)) : a instanceof cg ? a = dn(dg(a)) : (a = String(a), a = sn.test(a) ? a : "zSoyz"); return a },
        tn = { "\x00": "&#0;", "\t": "&#9;", "\n": "&#10;", "\v": "&#11;", "\f": "&#12;", "\r": "&#13;", " ": "&#32;", '"': "&quot;", "&": "&amp;", "'": "&#39;", "-": "&#45;", "/": "&#47;", "<": "&lt;", "=": "&#61;", ">": "&gt;", "`": "&#96;", "\u0085": "&#133;", "\u00a0": "&#160;", "\u2028": "&#8232;", "\u2029": "&#8233;" },
        an = function(a) { return tn[a] },
        un = {
            "\x00": "%00",
            "\u0001": "%01",
            "\u0002": "%02",
            "\u0003": "%03",
            "\u0004": "%04",
            "\u0005": "%05",
            "\u0006": "%06",
            "\u0007": "%07",
            "\b": "%08",
            "\t": "%09",
            "\n": "%0A",
            "\v": "%0B",
            "\f": "%0C",
            "\r": "%0D",
            "\u000e": "%0E",
            "\u000f": "%0F",
            "\u0010": "%10",
            "\u0011": "%11",
            "\u0012": "%12",
            "\u0013": "%13",
            "\u0014": "%14",
            "\u0015": "%15",
            "\u0016": "%16",
            "\u0017": "%17",
            "\u0018": "%18",
            "\u0019": "%19",
            "\u001a": "%1A",
            "\u001b": "%1B",
            "\u001c": "%1C",
            "\u001d": "%1D",
            "\u001e": "%1E",
            "\u001f": "%1F",
            " ": "%20",
            '"': "%22",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "<": "%3C",
            ">": "%3E",
            "\\": "%5C",
            "{": "%7B",
            "}": "%7D",
            "\u007f": "%7F",
            "\u0085": "%C2%85",
            "\u00a0": "%C2%A0",
            "\u2028": "%E2%80%A8",
            "\u2029": "%E2%80%A9",
            "\uff01": "%EF%BC%81",
            "\uff03": "%EF%BC%83",
            "\uff04": "%EF%BC%84",
            "\uff06": "%EF%BC%86",
            "\uff07": "%EF%BC%87",
            "\uff08": "%EF%BC%88",
            "\uff09": "%EF%BC%89",
            "\uff0a": "%EF%BC%8A",
            "\uff0b": "%EF%BC%8B",
            "\uff0c": "%EF%BC%8C",
            "\uff0f": "%EF%BC%8F",
            "\uff1a": "%EF%BC%9A",
            "\uff1b": "%EF%BC%9B",
            "\uff1d": "%EF%BC%9D",
            "\uff1f": "%EF%BC%9F",
            "\uff20": "%EF%BC%A0",
            "\uff3b": "%EF%BC%BB",
            "\uff3d": "%EF%BC%BD"
        },
        on = function(a) { return un[a] },
        $m = /[\x00\x22\x26\x27\x3c\x3e]/g,
        gn = /[\x00\x22\x27\x3c\x3e]/g,
        jn = /[\x00\x09-\x0d \x22\x26\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g,
        hn = /[\x00\x09-\x0d \x22\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g,
        nn = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        sn = /^(?!-*(?:expression|(?:moz-)?binding))(?:(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:rgb|rgba|hsl|hsla|calc|max|min|cubic-bezier)\([-\u0020\t,+.!#%_0-9a-zA-Z]+\)|[-+]?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:e-?[0-9]+)?(?:[a-z]{1,4}|%)?|!important)(?:\s*[,\u0020]\s*|$))*$/i,
        mn = /^(?:(?:https?|mailto|ftp):|[^&:\/?#]*(?:[\/?#]|$))/i,
        qn = /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^ftp:|^data:image\/[a-z0-9+]+;base64,[a-z0-9+\/]+=*$|^blob:/i,
        vn = /^[a-zA-Z0-9+\/_-]+={0,2}$/,
        ln = function(a) { return String(a).replace(nn, on) },
        wn = function(a) { a = String(a); return vn.test(a) ? a : "zSoyz" },
        en = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
        fn = /</g;
    /*
     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    function xn(a, b, c) { b = yn(b(c || zn, void 0));
        Fg(a, b) }

    function An(a, b) { b = a(b || zn, void 0);
        a = $g();
        a = lh(a.j, "DIV");
        b = yn(b);
        Fg(a, b);
        1 == a.childNodes.length && (b = a.firstChild, 1 == b.nodeType && (a = b)); return a }

    function yn(a) { if (Oa(a))
            if (a instanceof Pm) { if (a.Wg !== Lm) throw Error("Sanitized content was not of kind HTML.");
                a = hg(a.toString()) } else a = ig("zSoyz");
        else a = ig(String(a)); return a }
    var zn = {};
    var Fn = function(a, b) {
            var c = M,
                d = a.creativeIndexSuffix,
                e = a.Nf,
                f = a.sh,
                g = a.confirmationText,
                h = a.enableNativeJakeUi,
                k = a.isMutableImpression,
                m = a.Dj,
                n = a.tk,
                r = a.Nh,
                q = a.Mh,
                y = a.Me,
                x = a.zh,
                A = a.yh,
                L = a.Fe,
                F = a.Ih,
                na = a.Uj,
                oa = a.Zi,
                Ga = M;
            e = '<div id="panel_set' + N(d) + '"' + (e ? ' dir="rtl"' : "") + '><div id="ad_closed_panel' + N(d) + '" class="panel" wp="1">';
            h ? n = '<div id="native-menu-bg' + N(d) + '"></div><div class="native-panel-wrapper"><div class="native-panel" wp="0"><div id="menu-dismiss' + N(d) + '">' + Bn() + '</div><div class="native-panel-contents"><div class="header"><span id="native_closed_text' +
                N(d) + '" class="header-text-wrapper"></span></div><div class="native-button-container">' + (k && !m ? (F ? Cn(a) : "") + (oa ? "" : '<a id="report_btn' + N(d) + '"><span class="padded-text button-text">' + bn(f) + "</span></a>") : "") + (n ? '<a id="why_this_ad_btn' + N(d) + '" href="' + N(pn(r)) + '" target="_blank"><span class="padded-text button-text">' + bn(q) + '&nbsp;<img id="settings_icon' + N(d) + '" class="btn-icon" src="' + N(rn(y)) + '" alt=""></span></a>' : '<a id="settings_btn' + N(d) + '" href="' + N(pn(x)) + '" target="_blank"><span class="padded-text button-text">' +
                    bn(A) + '&nbsp;<img id="settings_icon' + N(d) + '" class="btn-icon" src="' + N(rn(y)) + '" alt=""></span></a>') + "</div></div></div></div>" : (f = '<div id="menu-dismiss' + N(d) + '" class="close">' + Bn() + '</div><div class="panel-container"><div class="panel-content fade"><div class="panel-row panel-lower"><span id="closed_text' + N(d) + '"></span>' + (40 < L ? '</div><div class="panel-row panel-buttons" wp="0">' : "") + (F ? Cn(a) + '<a class="spacer' + N(d) + '"></a>' : ""), !k || m || oa ? k = "" : (k = a.creativeIndexSuffix, m = a.sh, k = M('<a id="report_btn' +
                    N(k) + '" class="btn responsive-btn primary-btn shadow"><span id="report_text' + N(k) + '" class="btn-text">' + bn(m) + "</span></a>")), k = f + k, n ? (n = '<a class="spacer' + N(d) + '"></a>', m = a.creativeIndexSuffix, oa = a.Nh, f = a.Mh, h = a.Te, r = a.Nf, m = M('<a id="why_this_ad_btn' + N(m) + '" class="btn responsive-btn settings-btn shadow" href="' + N(pn(oa)) + '" target="_blank" wp="0"><span id="why_this_ad_text' + N(m) + '" class="btn-text settings-text">' + (h && !r ? Dn(a.creativeIndexSuffix, a.Me) + bn(f) : bn(f) + "&nbsp;" + Dn(a.creativeIndexSuffix,
                    a.Me)) + "</span></a>"), n += m) : (n = '<a class="spacer' + N(d) + '"></a>', m = a.creativeIndexSuffix, oa = a.zh, f = a.yh, h = a.Me, m = M('<a id="settings_btn' + N(m) + '" class="btn responsive-btn settings-btn shadow" href="' + N(pn(oa)) + '" target="_blank" wp="0"><span id="settings_text' + N(m) + '" class="btn-text settings-text">' + bn(f) + '&nbsp;<img id="settings_icon' + N(m) + '" class="btn-icon" src="' + N(rn(h)) + '" alt=""></span></a>'), n += m), n = k + n + "</div></div></div>");
            g = e + n + '</div><div id="survey_panel' + N(d) + '" class="panel"></div><div id="post_survey_panel' +
                N(d) + '" class="panel" wp="1"><div class="panel-container"><div class="panel-content fade"><span id="confirmation_msg' + N(d) + '" class="conf-msg">' + bn(g) + '</span></div></div></div><div id="final_closed_panel' + N(d) + '" class="panel" wp="1"><div class="panel-container"><div class="panel-content fade"><span id="final_closed_text' + N(d) + '"></span></div></div></div>';
            F ? (d = '<div id="ad_options_panel' + N(d) + '" class="panel" wp="1"><div id="ad_options_dismiss' + N(d) + '" class="close">' + Bn() + '</div><div class="panel-container"><div class="panel-content fade"><div id="personalize_toggle' +
                N(d) + '" class="panel-row panel-buttons" wp="0"><a class="spacer' + N(d) + '"></a>' + bn(na) + '<label id="personalize_toggle' + N(d) + '" class="track"><input id="personalize_checkbox' + N(d) + '" type="checkbox" disabled><span class="handle"></span></label></div><div class="panel-row panel-buttons" wp="0">', F = a.creativeIndexSuffix, na = a.Nf, e = a.Ji, n = a.Ki, F = M('<a id="learn_more_btn' + N(F) + '" class="btn responsive-btn settings-btn shadow" href="' + N(pn(n)) + '" target="_blank"><span id="learn_more_text' + N(F) + '" class="btn-text settings-text">' +
                    (na ? En() + bn(e) : bn(e) + "&nbsp;" + En()) + "</span></a>"), d = d + F + "</div></div></div></div>") : d = "";
            Ga = Ga(g + d + "</div>");
            d = a.creativeIndexSuffix;
            F = a.Bf;
            na = a.Fi;
            g = a.Li;
            e = a.Tf;
            n = a.Fe;
            k = a.aj;
            m = a.qh;
            oa = a.rh;
            f = a.Te;
            h = a.Ih;
            r = a.enableNativeJakeUi;
            a = a.gg;
            b = b && b.Yi;
            b = M((f ? '<link href="https://fonts.googleapis.com/css?family=Google+Sans" rel="stylesheet"' + (b ? ' nonce="' + N(wn(b)) + '"' : "") + ">" : "") + "<style" + (b ? ' nonce="' + N(wn(b)) + '"' : "") + ">#panel_set" + O(d) + ">.panel {position: fixed;" + (F ? "top: -100%; left: -100%;" : "top: -" +
                    O(na) + "px; left: -" + O(g) + "px;") + "z-index: 2147483646; display: block;" + (F ? "width: 100%; height: 100%" : "width: " + O(e) + "px; height: " + O(n) + "px;") + "}#panel_set" + O(d) + " img {border: 0;}#panel_set" + O(d) + ">.panel.visible, #panel_set" + O(d) + " .visible .panel {" + (k ? "position: absolute; top: 0; left: 0;" : "position: fixed; left: " + O(m) + "px; top: " + O(oa) + "px;") + "opacity: 1;}#panel_set" + O(d) + " .panel-container {display: table;" + (F ? "width: 100%; height: 100%;" : "width: " + O(e) + "px; height: " + O(n) + "px;") + "margin: 0; padding: 0; background-color: #fafafa;}#panel_set" +
                O(d) + " .panel-row {display: block; padding: 0 0 0.3em 0;}#panel_set" + O(d) + " .panel-row:first-child {padding: 0.3em 17px;}#panel_set" + O(d) + " .panel-content {vertical-align: top; padding-top: " + O(a) + "px; display: table-cell; color: #999; color: rgba(0,0,0,0.4); transition: opacity 150ms linear; text-align: center;}.collapsed #panel_set" + O(d) + " .fade {opacity: 0.4;}#menu-dismiss" + O(d) + " {padding-top: " + O(a) + "px;}.jake-middle.survey-horiz #panel_set .panel-content {vertical-align: middle;}#ad_closed_panel" +
                O(d) + " .btn, #ad_options_panel" + O(d) + " .btn {display: inline-block; border-radius: 2px; box-sizing: border-box; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; width: auto; text-decoration: none; white-space: nowrap; line-height: 1em; cursor: pointer;}#closed_text" + O(d) + ", #final_closed_text" + O(d) + " {display: inline-block; line-height: 1.28em; font-size: 1.2em;}#native_closed_text" + O(d) + " {display: flex; flex-direction: row; align-items: center;}#closed_text" + O(d) + " img, #native_closed_text" +
                O(d) + " img, #final_closed_text" + O(d) + ' img {margin: 0 0 -0.34em 0; height: 1.25em; display: inline-block; width: auto; min-width: 3.75em; opacity: 0.4; -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)";}#native_closed_text' + O(d) + " img {margin: 0 0.3em -0.2em 0.3em; height: 1.4em;}.spacer" + O(d) + " {display: inline-block; padding: 0; box-shadow: none; width: 3px;}" + (360 >= e && 100 <= n ? "#ad_closed_panel" + O(d) + " .responsive-btn, #ad_options_panel" + O(d) + " .responsive-btn {max-width: 288px; width: 75%; white-space: normal; margin-bottom: 0.4em;}.spacer" +
                    O(d) + " {display: none;}" : "") + (220 >= e ? "#ad_closed_panel" + O(d) + " .responsive-btn, #ad_options_panel" + O(d) + " .responsive-btn {max-width: 198px; width: 90%; white-space: normal; margin-bottom: 0.4em;}.spacer" + O(d) + " {display: none;}" : "") + (220 <= n ? "#panel_set" + O(d) + " .panel-content {vertical-align: top;}" : "") + (36 >= n ? "#closed_text" + O(d) + " {padding: 0 1em 0 0;}#panel_set" + O(d) + " .panel-row {padding: 0 !important;}" : "") + ".btn>span {display: inline-block; padding: 0.5em 0.6em; line-height: 1em;}#ad_closed_panel" +
                O(d) + " .settings-btn, #ad_options_panel" + O(d) + " .settings-btn {background-color: #fff; color: #9e9ea6;}#ad_closed_panel" + O(d) + " .settings-btn:hover, #ad_closed_panel" + O(d) + " .settings-btn:active, #ad_options_panel" + O(d) + " .settings-btn:hover, #ad_options_panel" + O(d) + " .settings-btn:active{background-color: #f5f5f5;}.settings-text {white-space: nowrap;}#report_btn" + O(d) + ".primary-btn, #ad_options_btn" + O(d) + ".primary-btn {background-color: #4285f5; color: white;}#report_btn" + O(d) + ".primary-btn:hover, #report_btn" +
                O(d) + ".primary-btn:active, #ad_options_btn" + O(d) + ".primary-btn:hover, #ad_options_btn" + O(d) + '.primary-btn:active {background-color: #3275e5;}.btn-icon {position: relative; display: inline-block; margin-bottom: -0.15em; height: 1em; width: 1em; opacity: 0.4; -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)";}[dir="rtl"] .btn-icon {float: left;}#confirmation_msg' + O(d) + " {font-weight: bold; color: #333;}#confirmation_msg" + O(d) + ", #final_closed_text" + O(d) + " {line-height: 1.1em; padding: 0.3em;}" +
                (100 <= n ? "#confirmation_msg" + O(d) + ", #final_closed_text" + O(d) + " {padding: 1em 0.3em;}" : "") + "#post_survey_panel" + O(d) + " span {display: block; text-align: center; line-height: 1em;}#post_survey_panel" + O(d) + " a, #post_survey_panel" + O(d) + " a:active, #post_survey_panel" + O(d) + " a:hover {text-decoration: none; color: #4285f5;}#final_closed_panel" + O(d) + ", #final_closed_panel" + O(d) + " #final_closed_text {opacity: 0; transition: opacity 400ms linear;}#final_closed_panel" + O(d) + " span {white-space: normal;}#final_closed_panel" +
                O(d) + " #final_closed_text.visible {opacity: 1;}" + (h ? "#personalize_toggle" + O(d) + " {margin-top: 6px; margin-bottom: 6px;}#ad_options_panel" + O(d) + " span {display: block; text-align: center; line-height: 1em;}" : "") + '.fallback-wrap .btn{margin: 1px auto 1px auto; white-space: normal;}.close {position: absolute; top: 2px; left: 2px; color: black; font-size: 15px; line-height: 15px; opacity: 0.5; height: 15px; width: 15px; user-select: none; cursor: pointer;}[dir="rtl"] .close {right: 2px; transform: scaleX(-1);}[dir="rtl"] #menu-dismiss' +
                O(d) + " {left: initial; right: 0; transform: scaleX(-1);}.native-arrow {" + (r ? "opacity: 0.6;" : "opacity: 0.8;") + "}.window-icon {opacity: 0.4;}" + (r ? "#native-menu-bg" + O(d) + " {position: absolute; top: 0; left: 0; display: inline-block; width: 100%; height: 100%; background-color: rgba(0,0,0,0.6); cursor: pointer;}.native-panel-wrapper {display: inline-block; padding: 0.1em;}.visible .native-panel {margin-top: 0; opacity: 1;}#menu-dismiss" + O(d) + " {position: absolute; top: 0; left: 0; cursor: pointer;}#menu-dismiss" +
                    O(d) + " svg {height: 1.4em; width: 1.4em; max-height: 24px; max-width: 24px; min-height: 10px; min-width: 10px;}.cross {opacity: 0.6; stroke: #52b4c6; stroke-width: 1.25; transform: rotate(0deg); transform-origin: 50% 50%; transition: opacity 0.1s linear, transform 0.1s linear;}#menu-dismiss" + O(d) + ":hover .cross {opacity: 0.9; transform: rotate(90deg);}.native-panel-contents {display: flex; flex-wrap: nowrap; flex-direction: column; margin: 0.8em;}.header {display: flex; flex-direction: row; justify-content: flex-start; white-space: nowrap; font-size: 1.3em;}.header-text-wrapper {display: inline-block; margin: 0 0 0.2em 0.1em;}.header {margin: 0 0 5px 0;}#menu-dismiss" +
                    O(d) + " svg {height: 1em; width: 1em; margin: 0.1em;}.cross {stroke: #888;}.header-text-wrapper {margin: 0 0 0.4em 0;}.native-panel-wrapper {display: flex; padding: 0; justify-content: center; align-items: center; height: 100%;}#native_closed_text" + O(d) + " img {margin: 0 0.3em -0.1em 0.3em;}.header {font-size: 1em; justify-content: center}.native-panel {opacity: 0; display: inline-block; position: relative; box-sizing: border-box; color: rgba(0,0,0,0.4); background-color: #fafafa; font-family: 'Arial', sans-serif; white-space: nowrap; border-radius: 4px; box-shadow: 0 3px 2px 0 rgba(0,0,0,0.3); margin-top: 5px; transition: margin 0.25s ease-out;}.native-button-container {display: flex; justify-content: center; flex-wrap: nowrap; flex-direction: column;}.native-button-container #report_btn" +
                    O(d) + " {color: white; background-color: rgba(26,115,232,1); border: 1px solid rgba(66,133,245,0.6); opacity: 0.9;}.native-button-container #report_btn" + O(d) + ":hover {background-color: rgba(20,91,183,1);}.native-button-container #settings_btn" + O(d) + ", .native-button-container #why_this_ad_btn" + O(d) + ", .native-button-container #learn_more_btn" + O(d) + " {color: rgba(0,0,0,0.5); border: 1px solid rgba(0,0,0,0.3);}.native-button-container a {display: flex; flex-direction: row; justify-content: center; align-items: center; margin: 5px 0 0 0; flex-grow: 1; cursor: pointer; border-radius: 4px; box-shadow: 0 0 2px rgba(0,0,0,0.12), 0 1px 3px rgba(0,0,0,0.26) !important; background-color: white; font-size: 0.8em; line-height: 1em;}.native-button-container a:hover {background-color: #f5f5f5;}.native-button-container a, .native-button-container a:active, .native-button-container a:hover, .native-button-container a:visited {text-decoration: none;}.native-button-container a:first-child {margin-top: 0;}.button-text {font-size: 1em; display: block;}.padded-text {margin: 0.4em 0.7em;}.native-button-container #settings_icon {opacity: 0.65; opacity: 0.65;}.icon {display: inline-block; width: 2.3em; height: 2.3em; fill: #fff; stroke: none; margin: 0.2em;}" +
                    (.5 >= e / n ? ".native-panel-wrapper {padding-top: 1em; align-items: flex-start;}" : "") + (2 <= e / n && 100 >= n ? ".native-panel-contents {margin: 0.5em;}.native-button-container a {margin: 0 0 0 0.2em;}.header {margin: 0;}.native-button-container a:first-child {margin: 0;}.native-panel-contents {flex-direction: column;}.native-button-container {flex-direction: row;}" : "") + (3 <= e / n && 49 >= n ? ".native-panel-contents {margin: 0.5em 1em;}.native-panel {margin: 0.1em;}.header {margin: 0 0.2em 0 0;}.native-panel-contents {flex-direction: row;}.native-button-container {flex-direction: row;}.header-text-wrapper {margin-bottom: 0;}" :
                        "") + (130 >= n ? ".padded-text {white-space: normal; margin: 0.3em; text-align: initial;}" : "") : "") + (f ? "#panel_set" + O(d) + " .panel-content {font-family: 'Google Sans', sans-serif;}#closed_text" + O(d) + " img, #native_closed_text" + O(d) + " img, #final_closed_text" + O(d) + ' img {margin: 0 0 -0.3em 0; height: 1.1em; min-width: 3.3em;}.close {top: 6px; left: 6px; height: 22px; width: 22px;}[dir="rtl"] .close {right: 8px; transform: scaleX(-1);}.btn>span {padding: 0.7em 0.5em;}#ad_closed_panel' + O(d) + " .btn, #ad_options_panel" +
                    O(d) + " .btn {border-radius: 4px;}#ad_closed_panel" + O(d) + " .settings-btn, #ad_options_panel" + O(d) + " .settings-btn {box-shadow: inset 0 0 0 1px #dadce0;}#closed_text" + O(d) + ", #final_closed_text" + O(d) + ' {line-height: 1.28em; font-size: 1.15em;}.btn-icon {margin-right: 0.5em;}[dir="rtl"] .btn-icon {float: none;}' + (2 <= e / n ? ".spacer" + O(d) + " {width: 4px;}#closed_text" + O(d) + ", #final_closed_text" + O(d) + " {line-height: 1em;}" + (90 <= n ? ".close {height: 24px; width: 24px; top: 8px; left: 8px;}#closed_text" + O(d) +
                            ", #final_closed_text" + O(d) + " {font-size: 1.3em;}.panel-lower {margin-top: 6px;}.panel-buttons {margin-top: 6px;}" : "#closed_text" + O(d) + ", #final_closed_text" + O(d) + " {font-size: 1.1em;}.close {height: 20px; width: 20px;}.panel-lower {margin-top: 2px;}.panel-buttons {margin-top: -2px;}.btn > span {padding: 0.4em;}") : 200 >= e ? ".panel-lower {margin-top: 25px;}.close {height: 16px; width: 16px;}" : ".panel-lower {margin-top: 40px;}.panel-buttons {margin-top: 14px;}#panel_set" + O(d) + " .panel-row:first-child {padding: 0 17px;}#ad_closed_panel" +
                        O(d) + " .responsive-btn, #ad_options_panel" + O(d) + " .responsive-btn {margin-bottom: 8px; width: 51%;}") : "#panel_set" + O(d) + " .panel-content {font-family: 'Arial', sans-serif;}#ad_closed_panel" + O(d) + " .btn, #ad_options_panel" + O(d) + " .btn {border-radius: 2px; box-shadow: 0 0 2px rgba(0,0,0,0.12), 0 1px 3px rgba(0,0,0,0.26) !important;}") + (h ? "#learn_more_btn" + O(d) + " .window-icon {height: 16px; width: 16px;}#personalize_toggle" + O(d) + " .track {position: relative; display: inline-block; width: 36px; height: 14px; top: 1px; margin-left: 6px;}#personalize_toggle" +
                    O(d) + " .track input {opacity: 0; width: 0; height: 0;}#personalize_toggle" + O(d) + " .handle {position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: #dadce0; -webkit-transition: .4s; transition: .4s; border-radius: 7px;}#personalize_toggle" + O(d) + ' .handle:before {position: absolute; content: ""; height: 20px; width: 20px; left: -4px; bottom: -3px; margin-left: 4px; background-color: #fff; -webkit-transition: .4s; transition: .4s; box-shadow: 0 1px 2px 0 rgba(60, 64, 67, .3), 0 1px 3px 1px rgba(60, 64, 67, .15); border-radius: 50%;}#personalize_toggle' +
                    O(d) + " input:checked + .handle {background-color: rgba(66, 133, 244, .5);}#personalize_toggle" + O(d) + " input:focus + .handle {box-shadow: 0 0 1px #4285f4;}#personalize_toggle" + O(d) + " input:checked + .handle:before {-webkit-transform: translateX(16px); -ms-transform: translateX(16px); transform: translateX(16px); transition: .4s; -webkit-transition: background-color .4s; -ms-transition: background-color .4s; transition: background-color .4s; background-color: #1a73e8;}" + (200 >= e || 200 >= n ? "#personalize_toggle" +
                        O(d) + " .track {width: 24px; height: 9px; top: 2px;}#personalize_toggle" + O(d) + " .handle:before {height: 13px; width: 13px; left: -7px; bottom: -2px;}#learn_more_btn" + O(d) + " .window-icon {height: 14px; width: 14px;}" : "") + (500 <= n ? "#personalize_toggle" + O(d) + " {margin-top: 6;}" : "") + (100 >= e || 100 >= n ? "#personalize_toggle" + O(d) + " {margin-top: 0; margin-bottom: 3px;}#learn_more_btn" + O(d) + " .window-icon {height: 12px; width: 12px;}" : "") + (60 >= e || 60 >= n ? "#learn_more_btn" + O(d) + " .window-icon {height: 11px; width: 11px;}" :
                        "") + (50 >= e || 50 >= n ? "#learn_more_btn" + O(d) + " .window-icon {height: 9px; width: 9px;}" : "") : "") + "</style>");
            return c(Ga + b)
        },
        Cn = function(a) { var b = a.creativeIndexSuffix;
            a = a.Ii; return M('<a id="ad_options_btn' + N(b) + '" class="btn responsive-btn primary-btn shadow"><span id="options_text' + N(b) + '" class="btn-text">' + bn(a) + "</span></a>") },
        Dn = function(a, b) { return M('<img id="why_this_ad_icon' + N(a) + '" class="btn-icon" src="' + N(rn(b)) + '" alt="">') },
        Bn = function() { return M('<svg viewBox="0 0 24 24"><path class="native-arrow" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>') },
        En = function() { return M('<svg class="window-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>') };
    var Gn = function(a, b) {
        var c = a.creativeIndexSuffix,
            d = a.isRtl,
            e = a.surveyOptions,
            f = M,
            g = cn({ ej: d ? "left" : "right", Ni: d ? "right" : "left" }, a);
        d = g.ej;
        var h = g.Ni,
            k = g.creativeIndexSuffix,
            m = g.Qi,
            n = g.Si,
            r = g.Ri,
            q = g.pk,
            y = g.Xj,
            x = g.Te,
            A = g.gg,
            L = g.Bf,
            F = g.Tf;
        g = g.Fe;
        b = b && b.Yi;
        b = "&nbsp;" + M((x ? '<link href="https://fonts.googleapis.com/css?family=Google+Sans" rel="stylesheet"' + (b ? ' nonce="' + N(wn(b)) + '"' : "") + ">" : "") + "<style" + (b ? ' nonce="' + N(wn(b)) + '"' : "") + ">#survey-container" + O(k) + " {position: absolute; top: 0; left: 0;" + (L ?
                    "width: 100%; height: 100%;" : "width: " + O(F) + "px; height: " + O(g) + "px;") + "overflow: hidden; background-color: #fafafa; font-size: 0; white-space: nowrap;}.survey-native-scroll #survey-container" + O(k) + " {overflow-x: scroll;}.survey-horiz, .survey-vert {text-align: center;}#survey-container" + O(k) + " * {box-sizing: border-box; -moz-box-sizing: border-box; -webkit-box-sizing: border-box;}.survey-block {height: " + O(m) + "px;}.survey-option {position: relative; overflow: hidden; display: inline-block; padding: 1px 5px; width: " +
                O(n) + "px; height: " + O(m) + "px; border: 1px solid #e0e0e0; background-color: #fff; cursor: pointer;}.survey-option:hover, .survey-scroll .survey-option:active {background-color: #f5f5f5;}.survey-option div {width: 100%; height: 100%; display: table; text-align: center;}.survey-option span {vertical-align: middle; display: table-cell; color: #4285f4; font-family: Arial, sans-serif; text-align: center; font-size: 12px; line-height: 14px; white-space: normal;}@media (min-height: 54px) {.survey-horiz.survey-spaced .survey-option, .survey-vert .survey-option {box-shadow: 0 0 2px rgba(0,0,0,0.12), 0px 1px 3px rgba(0,0,0,0.26) !important; border: none;}}#mute_panel" +
                O(k) + ".survey-horiz .survey-option {display: inline-block; margin-" + O(h) + ": -1px; box-shadow: none;}#mute_panel" + O(k) + ".survey-horiz .survey-option:first-child {margin-" + O(h) + ": 0;}#mute_panel" + O(k) + ".survey-horiz.survey-spaced .survey-option {margin-" + O(h) + ": " + O(r) + "px;}#mute_panel" + O(k) + ".survey-horiz.survey-spaced .survey-option:first-child {margin-" + O(h) + ": 0;}#mute_panel" + O(k) + ".survey-horiz.jake-middle .survey-block {margin-top: " + O((g - m) / 2) + "px;}#mute_panel" + O(k) + ".survey-horiz.jake-top .survey-block {margin-top: " +
                O(r) + "px;}#mute_panel" + O(k) + ".survey-vert .survey-option, #mute_panel" + O(k) + ".survey-horiz.survey-spaced .survey-option {border-radius: 2px;}#mute_panel" + O(k) + ".survey-vert .survey-option {margin: " + O(r) + "px auto 0 auto; display: block;}#mute_panel" + O(k) + ".survey-vert.jake-top .survey-option:first-child {margin-top: " + O(r) + "px;}#mute_panel" + O(k) + ".survey-vert.jake-middle .survey-option:first-child {margin-top: " + O((g - q) / 2) + "px;}#mute_panel" + O(k) + ".survey-grid #survey-container" + O(k) + " {width: initial; height: initial; white-space: normal; padding: 1px;}#mute_panel" +
                O(k) + ".survey-grid .survey-option {display: inline-block; width: " + O((F - 6) / 2) + "px; height: " + O((g - 6) / 2) + "px; margin: 1px;}#mute_panel" + O(k) + ".survey-small-grid #survey-container" + O(k) + " {white-space: normal; padding: " + O(g / 2 - (m + 2)) + "px 0px;}#mute_panel" + O(k) + ".survey-small-grid #option-container" + O(k) + " {padding: 0 " + O(F / 2 - (n + 2)) + "px;}#mute_panel" + O(k) + ".survey-small-grid .survey-option {display: inline-block; margin: 1px;}.option-container {margin-top: " + O(A) + "px; display: inline-block;}.scroll, .native-scroll {position: absolute; top: 0; display: none;}.scroll {width: 30px; border: 1px solid transparent; background-color: #666; background-color: rgba(0,0,0,0.6); text-align: center; transition: visibility 150ms step-end; cursor: pointer;}.native-scroll {width: 10px;}.survey-scroll .scroll, .survey-native-scroll .native-scroll {display: block;}.scroll div {position: absolute; top: 50%; left: 50%; height: 36px; width: 36px; margin: -18px 0 0 -18px;}.scroll:hover, .scroll:active {background-color: #999; background-color: rgba(0,0,0,0.4);}.scroll-right {" +
                O(d) + ": 0;}.native-scroll.scroll-" + O(d) + " {-webkit-box-shadow: inset -10px 0 10px -10px rgba(0,0,0,0.3); -moz-box-shadow: inset -10px 0 10px -10px rgba(0,0,0,0.3); box-shadow: inset -10px 0 10px -10px rgba(0,0,0,0.3);}.scroll-right {border-top-" + O(h) + "-radius: 4px; border-bottom-" + O(h) + '-radius: 4px;}.scroll-right div {background-image:url("' + rn(y) + "/images/icons/material/system/1x/keyboard_arrow_" + ln(d) + '_white_36dp.png");}.scroll-left {' + O(h) + ": 0;}.native-scroll.scroll-" + O(h) + " {-webkit-box-shadow: inset 10px 0 10px -10px rgba(0,0,0,0.3); -moz-box-shadow: inset 10px 0 10px -10px rgba(0,0,0,0.3); box-shadow: inset 10px 0 10px -10px rgba(0,0,0,0.3);}.scroll-left {border-top-" +
                O(d) + "-radius: 4px; border-bottom-" + O(d) + '-radius: 4px;}.scroll-left div {background-image:url("' + rn(y) + "/images/icons/material/system/1x/keyboard_arrow_" + ln(h) + '_white_36dp.png");}.survey-option {transition: margin 150ms linear;}' + (x ? ".survey-option {font-family: 'Google Sans', sans-serif; border-radius: 4px;}@media (min-height: 54px) {.survey-horiz.survey-spaced .survey-option, .survey-vert .survey-option {box-shadow: inset 0 0 0 1px #dadce0 !important; border: none;}}" : "") + "</style>") + '<div id="survey-container' +
            N(c) + '"><div id="option-container' + N(c) + '" class="option-container">';
        e = cn({ options: e }, a);
        a = e.options;
        e = e.creativeIndexSuffix;
        d = "";
        h = a.length;
        for (k = 0; k < h; k++) d += '<a wp="1" class="survey-block survey-option"><div wp="0"><span>' + bn(a[k]) + "</span></div></a>";
        d += '<a id="scroll-left' + N(e) + '" class="survey-block scroll scroll-left" style="visibility:hidden"><div></div></a><a id="scroll-right' + N(e) + '" class="survey-block scroll scroll-right" style="visibility:visible"><div></div></a>';
        a = M(d);
        return f(b +
            a + '</div></div><a id="native-scroll-left' + N(c) + '" class="survey-block native-scroll scroll-left" style="visibility:hidden"><div></div></a><a id="native-scroll-right' + N(c) + '" class="survey-block native-scroll scroll-right" style="visibility:visible"><div></div></a>')
    };
    var In = function(a, b, c, d, e, f, g, h, k, m, n, r) {
        this.H = a;
        this.j = b;
        this.A = c;
        this.V = g;
        this.o = h;
        this.ga = k;
        this.U = d;
        this.Ka = e;
        this.K = f;
        this.fa = n;
        this.ca = r;
        this.Y = void 0;
        this.ba = m;
        this.C = Math.min(50, this.A);
        this.J = !1;
        this.l = 0;
        this.O = !0;
        this.F = this.G = this.I = this.B = this.D = this.T = this.L = null;
        this.P = Math.max(1, Math.floor((this.j - 30 - 1) / 95));
        a = this.j / this.A;
        a = .75 < a && 1.25 > a;
        b = 198 <= this.j && this.A >= 2 * this.C + 6 && 672 > this.j && this.A < 7 * this.C && 4 >= Hn(this);
        this.sa = 196 <= this.j && this.A >= 2 * this.C + 4 && 4 >= Hn(this);
        this.ka = "enable_jake_ui_grid" ===
            this.ga && b && a;
        this.R = !!this.ba;
        this.collapse()
    };
    In.prototype.aa = function() { xn(this.H, Gn, { Tf: this.j, Fe: this.A, qh: 0, rh: 0, Bf: this.V, creativeIndexSuffix: this.o, isRtl: this.U, Xj: this.Ka, Si: 96, Qi: this.C, Ri: 8, pk: Hn(this) * (this.C + 8) - 8, Km: 95 * Hn(this) + 1, Lm: 104 * Hn(this) - 8, surveyOptions: Rb(Md(this.K, Ej, 2), function(a) { return Qd(a, 1) }), Te: this.fa, gg: this.ca });
        Jn(this) };
    In.prototype.expand = function() { this.H && Yl(this.H, "visible") };
    In.prototype.collapse = function() { this.H && $l(this.H, "visible") };
    In.prototype.display = function(a) { this.Y = a;
        this.expand() };
    var Hn = function(a) { return Md(a.K, Ej, 2).length },
        Kn = function(a) { var b = [],
                c = a.A,
                d = a.j,
                e = a.C,
                f = 95 * Hn(a) + 1,
                g = 104 * Hn(a) - 8; var h = Hn(a) * (a.C + 8) - 8; var k = c < h && d < f && a.sa;
            a.ka ? b.push("survey-grid") : c > h && d < f ? (b.push("survey-vert"), c > h + 50 ? b.push("jake-top") : b.push("jake-middle")) : (b.push("survey-horiz"), d >= g && b.push("survey-spaced"), d < f && (k ? b.push("survey-small-grid") : a.R ? b.push("survey-native-scroll") : b.push("survey-scroll")), k || (c > e + 50 ? b.push("jake-top") : b.push("jake-middle"))); return b },
        Jn = function(a) {
            a.L = document.getElementById("survey-container" +
                a.o);
            a.T = document.getElementById("option-container" + a.o);
            a.D = document.getElementById("scroll-right" + a.o);
            a.B = document.getElementById("scroll-left" + a.o);
            a.I = document.getElementById("native-scroll-right" + a.o);
            a.G = document.getElementById("native-scroll-left" + a.o);
            a.R ? a.L && a.I && a.G && (a.L.onscroll = function() { a.J = !0 }, window.setInterval(function() {
                if (a.J) {
                    var e = a.T.getBoundingClientRect(),
                        f = a.U ? a.G : a.I;
                    (a.U ? a.I : a.G).style.visibility = 0 === e.left ? "hidden" : "visible";
                    f.style.visibility = e.right === a.j ? "hidden" :
                        "visible";
                    a.J = !1
                }
            }, 100)) : (a.D && Yj(a.D, "click", Va(a.ya, a)), a.B && Yj(a.B, "click", Va(a.ma, a)));
            var b = ch("survey-option", a.H);
            if (b && b[0]) { a.F = b[0]; for (var c = 0; c < b.length; c++) { var d = b[c];
                    d && Yj(d, "click", Va(a.Ca, a, c)) } }
        };
    In.prototype.Ca = function(a) { var b = Kd(Md(this.K, Ej, 2)[a], Dj, 2);
        b && this.Y(b, a);
        this.collapse() };
    var Ln = function(a) { var b = -95 * a.l;
        a.O || (b = a.l === Hn(a) - a.P ? a.j - (95 * Hn(a) + 1) : b + 30); return b };
    In.prototype.ya = function() { if (this.D && this.B && this.F) { var a = Hn(this) - this.P;
            this.l = Math.min(this.l + 1, a);
            this.O = this.l < a;
            this.O || (this.D.style.visibility = "hidden", this.B.style.visibility = "visible");
            this.F.style["margin-" + (this.U ? "right" : "left")] = Ln(this) + "px" } };
    In.prototype.ma = function() { if (this.D && this.B && this.F) { this.l = Math.max(this.l - 1, 0); if (this.O = 0 === this.l) this.D.style.visibility = "visible", this.B.style.visibility = "hidden";
            this.F.style["margin-" + (this.U ? "right" : "left")] = Ln(this) + "px" } };
    var Nn = function(a, b) {
        H.call(this);
        var c = this;
        this.o = b;
        this.J = a;
        if (!Array.isArray(Ad(a, 1))) throw Ll({ context: "mta_noufdata" }), Error("Bad userFeedbackData");
        this.R = Pd(this.J, 22) || 0;
        this.P = Pd(this.J, 23) || 0;
        this.l = Kd(a, Oj, 1);
        (a = Md(this.l, Hj, 28)[1 < Md(this.l, Hj, 28).length ? 1 : 0]) || Ll({ context: "mta_nomop" });
        this.ya = a || new Hj;
        this.j = this.o.creativeIndexSuffix;
        this.Ma = this.o.isMobileDevice;
        this.fa = !!this.o.creativeIndexSuffix;
        this.Ca = this.o.autoExpandOnLoad;
        this.G = em(Qd(this.l, 5), Qd(this.l, 6), Qd(this.l, 19));
        a = new fm(this.J);
        this.V = !!this.o.enableNativeJakeUi;
        this.ca = !!this.o.enableMultiplexThirdPartyAttribution;
        this.ma = !!Gd(this.l, 34);
        this.Na = gm(a, "jake_ui_extension", "jake_default_ui");
        this.fb = "true" === gm(a, "disable_report_button", (!1).toString()).toString();
        this.K = Gd(Pj(this.l), 24);
        this.F = Fd(Pj(this.l), 27, 0);
        this.ka = this.sa = this.ga = !1;
        this.B = this.P;
        this.A = this.R;
        this.L = !1;
        Mn(this);
        this.D = null;
        this.T = Kl(279, function() {
            c.C && (Ll({ ev: "psx", efsb: 1, elsb: 0, ttd: Date.now() - c.C }, 1), c.C = null, Zj(J, "beforeunload",
                c.T))
        });
        this.Ka = !1;
        this.I = this.C = null;
        this.ba = Pd(Pj(this.l), 28)
    };
    u(Nn, H);
    Nn.prototype.aa = function() {
        var a = this,
            b = pm("mute_panel", this.j),
            c = Pj(this.l),
            d = Qd(this.l, 25) || "//support.google.com/adsense/troubleshooter/1631343",
            e = Qd(c, 2),
            f = Qd(c, 1),
            g = Qd(this.l, 32),
            h = Qd(this.l, 35),
            k = Qd(this.l, 36),
            m = Qd(this.l, 39),
            n = Qd(this.l, 40),
            r = Gd(this.l, 41),
            q = Qd(Pj(this.l), 17),
            y = Qd(this.l, 31);
        q && (y = gk(y, "eid", q));
        q = nm(this.l);
        c && Qd(c, 11) && Qd(c, 12) && (e = Qd(c, 12), f = Qd(c, 11));
        c = !1;
        this.ca && (c = this.ma);
        d = {
            isMutableImpression: this.o.isMutableImpression,
            Dj: c,
            Fi: this.R,
            Li: this.P,
            Fe: this.A,
            Tf: this.B,
            qh: 0,
            rh: 0,
            Bf: this.L,
            creativeIndexSuffix: this.j,
            aj: this.fa,
            Xm: this.l,
            Nf: Gd(this.l, 27),
            sh: Qd(Pj(this.l), 6),
            confirmationText: Qd(Pj(this.l), 7),
            yh: e,
            zh: d,
            Me: f,
            tk: q,
            Mh: g,
            Nh: y,
            enableNativeJakeUi: this.V,
            Te: this.K,
            Ih: 0 !== this.F,
            Ii: h,
            Uj: k,
            Ji: m,
            Ki: n,
            Zi: this.fb,
            gg: this.ba
        };
        xn(b, Fn, d);
        var x;
        d = !0;
        this.ca && (d = !this.ma);
        d && (x = this.V ? om("native_closed_text", this.j) : om("closed_text", this.j));
        x && On(this, x, Qd(Pj(this.l), 18));
        (x = om("final_closed_text", this.j)) && On(this, x, Qd(Pj(this.l), 3));
        (x = om("report_btn", this.j)) &&
        Yj(x, "click", Kl(280, function() { Pn(a) }));
        (x = om("settings_btn", this.j)) && Yj(x, "click", function() { return a.collapse() });
        if (nm(this.l)) { var A = om("why_this_ad_btn", this.j);
            A && Yj(A, "click", Kl(281, function(oa) { var Ga;
                null == (Ga = a.G) || cm(Ga, "closebutton_whythisad_click", "1", !1);
                Ga = A.getAttribute("href"); var Sa = {};
                oa = (Sa.wtaUrl = Ga, Sa.underlyingEvent = oa, Sa);
                rm(a, "wtaClicked", { detail: oa }) })) }(x = om("menu-dismiss", this.j)) && Yj(x, "click", Kl(354, function() { Qn(a, "btn") }));
        if (0 !== this.F) {
            (x = om("ad_options_btn", this.j)) &&
            Yj(x, "click", function() { var oa = om("ad_options_panel", a.j);
                oa && Yl(oa, "visible") });
            (x = om("ad_options_dismiss", this.j)) && Yj(x, "click", function() { $l(pm("ad_options_panel", a.j), "visible") });
            var L = om("learn_more_btn", this.j);
            L && Yj(L, "click", function(oa) { a.ka || (a.ka = !0, Ll({ context: "mta_paidLearnMore" }, .01)); var Ga = L.getAttribute("href"),
                    Sa = {};
                oa = (Sa.learnMoreUrl = Ga, Sa.underlyingEvent = oa, Sa);
                rm(a, "learnMoreClicked", { detail: oa }) });
            if (x = om("personalize_toggle", this.j))
                if (Yj(x, "click", function() {
                        var oa = om("personalize_checkbox",
                            a.j);
                        oa.checked = !oa.checked;
                        var Ga = oa.checked,
                            Sa = !a.ga;
                        a.ga = !0;
                        var Ha = {};
                        Ga = (Ha.gpidType = a.F, Ha.gpidPersonalizationEnabled = Ga, Ha.gpidShouldResetAdsData = Sa, Ha);
                        rm(a, "updateGpid", { detail: Ga });
                        Sa && 1 == a.F && Ll({ context: "mta_paidClearAdsData" }, .01);
                        (Sa = Qd(a.l, 42)) && J.fetch && J.fetch(Sa);
                        a.sa || (a.sa = !0, Ll({ context: "mta_paidPersonalizationToggle", state_toggled: oa.checked }, .01))
                    }), x = om("personalize_checkbox", this.j)) x.checked = r
        }(r = om("native-menu-bg", this.j)) && Yj(r, "click", Kl(354, function() { Qn(a, "bg") }));
        r =
            om("survey_panel", this.j);
        x = Kd(this.ya, Gj, 3);
        d = ["jake-top"];
        r && x && (this.D = new In(r, this.B, this.A, Gd(this.l, 27), Qd(Pj(this.l), 16), x, this.L, this.j, this.Na, this.Ma, this.K, this.ba), d = Kn(this.D), this.D.aa());
        Zl(b, d);
        b = [];
        r = this.K ? 15 : 16;
        if (this.V) r = new km("#mute_panel" + this.j + " .native-panel", r, 6), b.push(r.resize());
        else {
            var F = new km("#mute_panel" + this.j + " .panel-row", r, 9);
            mm(F, function() { var oa = om("ad_closed_panel", a.j);
                13 >= F.j ? Yl(oa, "fallback-wrap") : $l(oa, "fallback-wrap") });
            var na = new km("#mute_panel" +
                this.j + " .btn-text", r, 9);
            b.push(F.resize().then(function() { return na.resize() }))
        }
        r = new km("#mute_panel" + this.j + " .conf-msg", 17, 12);
        b.push(r.resize());
        r = new km("#mute_panel" + this.j + " #final_closed_text", 17, 12);
        b.push(r.resize());
        r = new km("#mute_panel" + this.j + " .survey-option span", 12, 8);
        b.push(r.resize());
        Promise.all(b)
    };
    var Mn = function(a) {
            if (a.j) { for (var b = null, c = 0, d = 0, e = document.querySelectorAll("[data-dim]"), f = 0; f < e.length; ++f) { var g = e[f];
                    Xl(g, "expanded") && (++c, b = g);
                    Xl(g, "collapsed") && ++d }
                b && 1 === c && d === e.length - 1 || (b = e[parseInt(a.j, 10)]);
                b && 115 <= b.offsetWidth ? (a.A = b.offsetHeight, a.B = b.offsetWidth) : a.fa = !1 } else b = void 0 === b ? window : b, b = b.innerHeight || b.document.documentElement.clientHeight || b.document.body.clientHeight, c = void 0 === c ? window : c, c = c.innerWidth || c.document.documentElement.clientWidth || c.document.body.clientWidth,
                a.R = b, a.P = c, a.A = b, a.B = c, a.L = !0
        },
        Qn = function(a, b) { Ll({ context: "mta_dismiss", close_method: b, jake_mta_context: Qd(Pj(a.l), 17), height: a.A, width: a.B }, .01);
            a.collapse() },
        On = function(a, b, c) { c = c.split("%1$s"); var d = document.createElement("span");
            d.innerText = c[0]; var e = document.createElement("img");
            e.setAttribute("src", Qd(Pj(a.l), 5));
            a = document.createElement("span");
            a.innerText = c[1];
            b.appendChild(d);
            b.appendChild(e);
            b.appendChild(a) },
        Pn = function(a) {
            var b = Kd(a.ya, Dj, 2);
            if (!a.Ka)
                if (b) {
                    var c;
                    null == (c = a.G) || dm(c,
                        b);
                    a.Ka = !0
                } else Ll({ context: "mta_nomoconv" }, .01);
            b = 0;
            a.D ? (b = 2, a.D.display(function(d, e) { var f;
                null == (f = a.G) || dm(f, d);
                a.I = d;
                Ll({ type: "jake_survey_idx", idx: e, jake_mta_context: Qd(Pj(a.l), 17) }, .01);
                Rn(a) }), a.C = Date.now(), (c = om("survey_panel", a.j)) && Yl(c, "visible")) : Rn(a);
            Ll({ type: "jake_telemetry", surv_rc: b, jake_mta_context: Qd(Pj(a.l), 17) }, .01);
            a.C && Yj(J, "beforeunload", a.T)
        },
        Rn = function(a) {
            var b = om("survey_panel", a.j);
            b && $l(b, "visible");
            (b = om("post_survey_panel", a.j)) && Yl(b, "visible");
            setTimeout(function() { return Sn(a) },
                1600)
        },
        Sn = function(a) { var b = om("final_closed_panel", a.j);
            b && Yl(b, "visible");
            setTimeout(function() { return Tn(a) }, 300) },
        Tn = function(a) { var b = om("final_closed_text", a.j);
            b && Yl(b, "visible");
            b = a.I && "mute_survey_option" === Qd(a.I, 1) && "3" === Qd(a.I, 2);
            ("" === a.j || b) && setTimeout(function() { return qm(a.l) }, 900) };
    Nn.prototype.expand = function() { Yl(pm("ad_closed_panel", this.j), "visible");
        Yl(document.body, "goog_menu_opened"); if (!this.Ca) { var a = Kd(this.l, Dj, 7); if (a) { var b;
                null == (b = this.G) || dm(b, a);
                this.Ca = !0 } else Ll({ context: "mta_noiconv" }, .01) }
        I(this, "p-control-panel-shown") };
    Nn.prototype.collapse = function() { $l(pm("ad_closed_panel", this.j), "visible");
        $l(document.body, "goog_menu_opened");
        I(this, "p-control-panel-hidden") };
    Nn.prototype.N = function() { Zj(J, "beforeunload", this.T);
        H.prototype.N.call(this) };
    var Un = {};
    Ka("adsense.mobileads.afmanotify.receiveMessage", function(a, b) { if (Un.hasOwnProperty(a))
            for (var c = Un[a], d = 0; d < c.length; ++d) { var e = c[d];
                e.callback.call(e.object, a, b) } });
    var Vn = function(a, b, c) { this.id = a;
        a = bc(c);
        dc(a);
        this.criteria = a;
        this.event = b };
    Vn.prototype.Zb = function(a) { var b; if (b = this.event == a.event && this.id == a.id) a: if (b = this.criteria, a = a.criteria, Na(b) && Na(a) && b.length == a.length) { for (var c = b.length, d = 0; d < c; d++)
                if (b[d] !== a[d]) { b = !1; break a }
            b = !0 } else b = !1;
        return b };
    var Wn = function(a) { var b = {};
        Ob(a, function(c) { var d = c.event,
                e = b[d];
            b.hasOwnProperty(d) ? null !== e && (c.Zb(e) || (b[d] = null)) : b[d] = c });
        $b(a, function(c) { return null === b[c.event] }) };
    var Xn = { NONE: 0, Lk: 1 },
        Yn = { Jk: 0, em: 1, dm: 2, fm: 3 },
        Zn = { Sh: "a", Kk: "d", Ci: "v" };
    var $n = function() { this.ea = 0;
        this.j = !1;
        this.l = -1;
        this.hc = !1;
        this.Ia = 0 };
    $n.prototype.isVisible = function() { return this.hc ? .3 <= this.ea : .5 <= this.ea };
    var ao = { Ik: 0, Pk: 1 },
        bo = { 668123728: 0, 668123729: 1 },
        co = { 44731964: 0, 44731965: 1 },
        eo = { NONE: 0, yl: 1, Tk: 2 },
        fo = { 480596784: 0, 480596785: 1, 21063355: 2 };
    var go = function() { this.X = null;
            this.l = !1;
            this.j = null },
        ho = function(a) { a.l = !0; return a },
        io = function(a, b) { a.j && Ob(b, function(c) { c = a.j[c];
                void 0 !== c && a.setValue(c) }) },
        jo = function(a) { go.call(this);
            this.o = a };
    u(jo, go);
    jo.prototype.setValue = function(a) { if (null !== this.X || !hf(this.o, a)) return !1;
        this.X = a; return !0 };
    var ko = function() { go.call(this) };
    u(ko, go);
    ko.prototype.setValue = function(a) { if (null !== this.X || "number" !== typeof a) return !1;
        this.X = a; return !0 };
    var lo = function() { go.call(this) };
    u(lo, go);
    lo.prototype.setValue = function(a) { if (null !== this.X || "string" !== typeof a) return !1;
        this.X = a; return !0 };
    var mo = function() { this.j = {};
        this.l = !0;
        this.o = {} };
    mo.prototype.enable = function() { this.l = !0 };
    mo.prototype.isEnabled = function() { return this.l };
    mo.prototype.reset = function() { this.j = {};
        this.l = !0;
        this.o = {} };
    var no = function(a, b, c) { a.j[b] || (a.j[b] = new jo(c)); return a.j[b] },
        oo = function(a) { a.j.queryid || (a.j.queryid = new lo) },
        po = function(a, b) { a.j[b] || (a.j[b] = new ko); return a.j[b] },
        qo = function(a, b, c) {
            (a = a.j[b]) && a.setValue(c) },
        ro = function(a, b) { if (gf(a.o, b)) return a.o[b]; if (a = a.j[b]) return a.X },
        so = function(a) { var b = {},
                c = Ye(a.j, function(d) { return d.l });
            Xe(c, function(d, e) { d = void 0 !== a.o[e] ? String(a.o[e]) : d.l && null !== d.X ? String(d.X) : "";
                0 < d.length && (b[e] = d) }, a); return b },
        to = function(a) {
            a = so(a);
            var b = [];
            Xe(a, function(c,
                d) { d in Object.prototype || "undefined" != typeof c && b.push([d, ":", c].join("")) });
            return b
        },
        vo = function(a) { var b = uo().featureSet;
            b.l && Ob(df(b.j), function(c) { return io(c, a) }) };
    var wo = function(a) { no(a, "od", Xn);
        ho(no(a, "opac", ao));
        ho(no(a, "sbeos", ao));
        ho(no(a, "prf", ao));
        ho(no(a, "mwt", ao));
        no(a, "iogeo", ao) };
    var xo = !lc && !Db();
    var yo = function() { this.j = this.Pb = null };
    var zo = function(a, b) { this.l = (void 0 === a ? 0 : a) || 0;
        this.j = (void 0 === b ? "" : b) || "" };
    zo.prototype.isValid = function() { return !!this.l || !!this.j };
    zo.prototype.toString = function() { return this.l + (this.j ? "-" : "") + this.j };
    zo.prototype.matches = function(a) { return this.j || a.j ? this.j == a.j : this.l || a.l ? this.l == a.l : !1 };
    var Ao = function() {};
    Ao.prototype.j = function() { return 0 };
    Ao.prototype.o = function() { return 0 };
    Ao.prototype.A = function() { return 0 };
    Ao.prototype.l = function() { return 0 };
    var Co = function() { if (!Bo()) throw Error(); };
    u(Co, Ao);
    var Bo = function() { return !(!J || !J.performance) };
    Co.prototype.j = function() { return Bo() && J.performance.now ? J.performance.now() : Ao.prototype.j.call(this) };
    Co.prototype.o = function() { return Bo() && J.performance.memory ? J.performance.memory.totalJSHeapSize || 0 : Ao.prototype.o.call(this) };
    Co.prototype.A = function() { return Bo() && J.performance.memory ? J.performance.memory.usedJSHeapSize || 0 : Ao.prototype.A.call(this) };
    Co.prototype.l = function() { return Bo() && J.performance.memory ? J.performance.memory.jsHeapSizeLimit || 0 : Ao.prototype.l.call(this) };
    var Do = function() { return xk.prerendering ? 3 : { visible: 1, hidden: 2, prerender: 3, preview: 4, unloaded: 5 }[xk.visibilityState || xk.webkitVisibilityState || xk.mozVisibilityState || ""] || 0 },
        Eo = function(a) { var b;
            a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange"); return b };
    var Fo = function() {};
    Fo.prototype.isVisible = function() { return 1 === Do() };
    var Go = function() { return 0 === Do() };
    var Ho = function(a, b) { this.j = a;
            this.depth = b },
        Jo = function() { var a = Vk(),
                b = Math.max(a.length - 1, 0),
                c = Yk(a);
            a = c.j; var d = c.l,
                e = c.o,
                f = [];
            c = function(h, k) { return null == h ? k : h };
            e && f.push(new Ho([e.url, e.Mf ? 2 : 0], c(e.depth, 1)));
            d && d != e && f.push(new Ho([d.url, 2], 0));
            a.url && a != e && f.push(new Ho([a.url, 0], c(a.depth, b))); var g = Rb(f, function(h, k) { return f.slice(0, f.length - k) });!a.url || (e || d) && a != e || (d = qk(a.url)) && g.push([new Ho([d, 1], c(a.depth, b))]);
            g.push([]); return Rb(g, function(h) { return Io(b, h) }) };

    function Io(a, b) { var c = Sb(b, function(e, f) { return Math.max(e, f.depth) }, -1),
            d = fc(c + 2);
        d[0] = a;
        Ob(b, function(e) { return d[e.depth + 1] = e.j }); return d }

    function Ko() { var a = void 0 === a ? Jo() : a; return a.map(function(b) { return al(b) }) };
    var Lo = function() { this.l = new Fo;
            this.j = Bo() ? new Co : new Ao },
        No = function() { Mo(); var a = J.document; return !!(a && a.body && a.body.getBoundingClientRect && "function" === typeof J.setInterval && "function" === typeof J.clearInterval && "function" === typeof J.setTimeout && "function" === typeof J.clearTimeout) };
    Lo.prototype.setTimeout = function(a, b) { return J.setTimeout(a, b) };
    Lo.prototype.clearTimeout = function(a) { J.clearTimeout(a) };
    var Oo = function() { Mo(); return Ko() };
    var Po = function() {},
        Mo = function() { var a = Fl(Po); if (!a.j) { if (!J) throw Error("Context has not been set and window is undefined.");
                a.j = Fl(Lo) } return a.j };
    var Qo = function(a) { C.call(this, a) };
    u(Qo, C);
    var Ro = [Qo, 1, Le, 2, Ne, 3, Ne, 4, Ne, 5, Oe];
    var So = function(a) { this.o = a;
            this.j = -1;
            this.l = this.A = 0 },
        To = function(a, b) { return function() { var c = Ea.apply(0, arguments); if (-1 < a.j) return b.apply(null, t(c)); try { return a.j = a.o.j.j(), b.apply(null, t(c)) } finally { a.A += a.o.j.j() - a.j, a.j = -1, a.l += 1 } } };
    var Uo = function(a, b) { this.l = a;
        this.o = b;
        this.j = new So(a) };
    var Vo = function() {};
    var Wo = { Ml: 1, Fm: 2, Gl: 3 };
    var Xo = function() {
        this.B = void 0;
        this.F = 0;
        this.D = new zo(0, "");
        this.o = 0;
        this.H = -1;
        this.featureSet = new mo;
        ho(no(this.featureSet, "mv", eo)).j = void 0 === fo ? null : fo;
        no(this.featureSet, "omid", ao);
        ho(no(this.featureSet, "epoh", ao));
        ho(no(this.featureSet, "epph", ao));
        ho(no(this.featureSet, "umt", ao)).j = void 0 === bo ? null : bo;
        ho(no(this.featureSet, "phel", ao));
        ho(no(this.featureSet, "phell", ao));
        ho(no(this.featureSet, "oseid", Wo));
        ho(po(this.featureSet, "sloi"));
        ho(po(this.featureSet, "ima_tt"));
        no(this.featureSet, "mm",
            Zn);
        ho(no(this.featureSet, "ovms", Yn));
        ho(no(this.featureSet, "xdi", ao));
        ho(no(this.featureSet, "amp", ao));
        ho(no(this.featureSet, "prf", ao));
        ho(no(this.featureSet, "gtx", ao));
        ho(no(this.featureSet, "mvp_lv", ao));
        ho(no(this.featureSet, "ssmol", ao)).j = void 0 === co ? null : co;
        this.l = new Uo(Mo(), this.featureSet);
        this.C = this.j = this.A = !1;
        this.flags = new Vo
    };
    Xo.prototype.Ge = function(a) { if ("string" === typeof a && 0 != a.length) { var b = this.featureSet; if (b.l) { a = a.split("&"); for (var c = a.length - 1; 0 <= c; c--) { var d = a[c].split("="),
                        e = decodeURIComponent(d[0]);
                    1 < d.length ? (d = decodeURIComponent(d[1]), d = /^[0-9]+$/g.exec(d) ? parseInt(d, 10) : d) : d = 1;
                    (e = b.j[e]) && e.setValue(d) } } } };
    Xo.prototype.Wf = function() {};
    var uo = function() { return Fl(Xo) };
    var Yo = function(a, b, c, d, e) { if ((d ? a.o : Math.random()) < (e || a.j)) try { if (c instanceof Zk) var f = c;
            else f = new Zk, pk(c, function(h, k) { var m = f,
                    n = m.A++;
                cl(m, n, $k(k, h)) }); var g = fl(f, a.l, "/pagead/gen_204?id=" + b + "&");
            g && (Mo(), wk(J, g)) } catch (h) {} };
    var ap = function() { var a = Zo;
        this.C = $o;
        this.B = "jserror";
        this.o = !0;
        this.l = null;
        this.D = this.vb;
        this.j = void 0 === a ? null : a;
        this.A = !1 };
    l = ap.prototype;
    l.Je = function(a) { this.l = a };
    l.cg = function(a) { this.B = a };
    l.dg = function(a) { this.o = a };
    l.eg = function(a) { this.A = a };
    l.tc = function(a, b, c) { var d = this; return To(uo().l.j, function() { try { if (d.j && d.j.l) { var e = d.j.start(a.toString(), 3); var f = b();
                    d.j.end(e) } else f = b() } catch (h) { var g = d.o; try { sl(e), g = d.D(a, new bp(cp(h)), void 0, c) } catch (k) { d.vb(217, k) } if (!g) throw h; } return f })() };
    l.He = function(a, b, c, d) { var e = this; return To(uo().l.j, function() { var f = Ea.apply(0, arguments); return e.tc(a, function() { return b.apply(c, f) }, d) }) };
    l.vb = function(a, b, c, d, e) { e = e || this.B; try { var f = new Zk;
            dl(f, 1, "context", a);
            Tk(b) || (b = new bp(cp(b)));
            b.msg && dl(f, 2, "msg", b.msg.substring(0, 512)); var g = b.meta || {}; if (this.l) try { this.l(g) } catch (k) {}
            if (d) try { d(g) } catch (k) {}
            cl(f, 3, [g]); var h = Yk();
            h.l && dl(f, 4, "top", h.l.url || "");
            cl(f, 5, [{ url: h.j.url || "" }, { url: h.j.url ? ek(h.j.url) : "" }]);
            Yo(this.C, e, f, this.A, c) } catch (k) { try { Yo(this.C, e, { context: "ecmserr", rctx: a, msg: cp(k), url: h && h.j.url }, this.A, c) } catch (m) {} } return this.o };
    var cp = function(a) { var b = a.toString();
            a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
            a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message); if (a.stack) { a = a.stack; var c = b; try {-1 == a.indexOf(c) && (a = c + "\n" + a); for (var d; a != d;) d = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                    b = a.replace(/\n */g, "\n") } catch (e) { b = c } } return b },
        bp = function(a) { Sk.call(this, Error(a), { message: a }) };
    u(bp, Sk);
    var $o, dp, Zo = new rl(1, window),
        ep = function() { J && "undefined" != typeof J.google_measure_js_timing && (J.google_measure_js_timing || Zo.D()) };
    $o = new function() { var a = "https:";
        J && J.location && "http:" === J.location.protocol && (a = "http:");
        this.l = a;
        this.j = .01;
        this.o = Math.random() };
    dp = new ap;
    J && J.document && ("complete" == J.document.readyState ? ep() : Zo.l && Yj(J, "load", function() { ep() }));
    var fp = function(a) { dp.Je(function(b) { Ob(a, function(c) { c(b) }) }) },
        gp = function(a, b) { return dp.tc(a, b) },
        hp = function(a, b, c, d) { return dp.He(a, b, c, d) },
        ip = function(a, b, c, d) { dp.vb(a, b, c, d) };
    var jp = Date.now(),
        kp = -1,
        lp = -1,
        mp, np = -1,
        op = !1,
        pp = function() { return Date.now() - jp },
        qp = function() { var a = uo().B,
                b = 0 <= lp ? pp() - lp : -1,
                c = op ? pp() - kp : -1,
                d = 0 <= np ? pp() - np : -1; if (947190542 == a) return 100; if (79463069 == a) return 200;
            a = [2E3, 4E3]; var e = [250, 500, 1E3];
            ip(637, Error(), .001); var f = b; - 1 != c && c < b && (f = c); for (b = 0; b < a.length; ++b)
                if (f < a[b]) { var g = e[b]; break }
            void 0 === g && (g = e[a.length]); return -1 != d && 1500 < d && 4E3 > d ? 500 : g };
    var rp = function(a, b, c) { var d = new Wi(0, 0, 0, 0);
        this.time = a;
        this.volume = null;
        this.o = b;
        this.j = d;
        this.l = c };
    rp.prototype.Zb = function(a, b) { return !!a && (!(void 0 === b ? 0 : b) || this.volume == a.volume) && this.o == a.o && Xi(this.j, a.j) && !0 };
    var sp = function(a, b, c, d, e, f, g, h) { this.o = a;
        this.H = b;
        this.l = c;
        this.B = d;
        this.j = e;
        this.A = f;
        this.D = g;
        this.C = h };
    sp.prototype.getTimestamp = function() { return this.D };
    sp.prototype.Zb = function(a, b) { return this.o.Zb(a.o, void 0 === b ? !1 : b) && this.H == a.H && Xi(this.l, a.l) && Xi(this.B, a.B) && this.j == a.j && this.A == a.A && this.D == a.D && this.C == a.C };
    var tp = { currentTime: 1, duration: 2, isVpaid: 4, volume: 8, isYouTube: 16, isPlaying: 32 },
        kf = {
            Ig: "start",
            FIRST_QUARTILE: "firstquartile",
            MIDPOINT: "midpoint",
            THIRD_QUARTILE: "thirdquartile",
            COMPLETE: "complete",
            Ok: "error",
            ki: "metric",
            Gg: "pause",
            Hg: "resume",
            SKIPPED: "skip",
            VIEWABLE_IMPRESSION: "viewable_impression",
            ri: "mute",
            Bi: "unmute",
            FULLSCREEN: "fullscreen",
            Zh: "exitfullscreen",
            rg: "bufferstart",
            qg: "bufferfinish",
            xg: "fully_viewable_audible_half_duration_impression",
            Fg: "measurable_impression",
            Rh: "abandon",
            vg: "engagedview",
            IMPRESSION: "impression",
            Wh: "creativeview",
            LOADED: "loaded",
            Ol: "progress",
            Ck: "close",
            Dk: "collapse",
            ui: "overlay_resize",
            wi: "overlay_unmeasurable_impression",
            xi: "overlay_unviewable_impression",
            zi: "overlay_viewable_immediate_impression",
            yi: "overlay_viewable_end_of_session_impression",
            Xh: "custom_metric_viewable",
            Il: "verification_debug",
            Th: "audio_audible",
            Vh: "audio_measurable",
            Uh: "audio_impression"
        },
        up = "start firstquartile midpoint thirdquartile resume loaded".split(" "),
        vp = ["start", "firstquartile", "midpoint",
            "thirdquartile"
        ],
        wp = ["abandon"],
        xp = { qm: -1, Ig: 0, FIRST_QUARTILE: 1, MIDPOINT: 2, THIRD_QUARTILE: 3, COMPLETE: 4, ki: 5, Gg: 6, Hg: 7, SKIPPED: 8, VIEWABLE_IMPRESSION: 9, ri: 10, Bi: 11, FULLSCREEN: 12, Zh: 13, xg: 14, Fg: 15, Rh: 16, vg: 17, IMPRESSION: 18, Wh: 19, LOADED: 20, Xh: 21, rg: 22, qg: 23, Uh: 24, Vh: 25, Th: 26 };
    var cf = { vk: "addEventListener", Uk: "getMaxSize", Wk: "getScreenSize", Xk: "getState", Yk: "getVersion", Pl: "removeEventListener", zl: "isViewable" },
        yp = function(a) { var b = a !== a.top,
                c = a.top === vk(a),
                d = -1,
                e = 0; if (b && c && a.top.mraid) { d = 3; var f = a.top.mraid } else d = (f = a.mraid) ? b ? c ? 2 : 1 : 0 : -1;
            f && (f.IS_GMA_SDK || (e = 2), bf(function(g) { return "function" === typeof f[g] }) || (e = 1)); return { Xa: f, compatibility: e, fk: d } };
    var zp = function() { var a = window.document; return a && "function" === typeof a.elementFromPoint };

    function Ap(a, b, c) { try { a && (b = b.top); var d = b;
            a && null !== d && d != d.top && (d = d.top); try { var e = (void 0 === c ? 0 : c) ? (new Hg(d.innerWidth, d.innerHeight)).round() : gh(d || window).round() } catch (n) { e = new Hg(-12245933, -12245933) }
            a = e; var f = a.height,
                g = a.width; if (-12245933 === g) return new Wi(g, g, g, g); var h = hh($g(b.document).j),
                k = h.x,
                m = h.y; return new Wi(m, k + g, m + f, k) } catch (n) { return new Wi(-12245933, -12245933, -12245933, -12245933) } };
    var Bp = function(a, b) { b = Math.pow(10, b); return Math.floor(a * b) / b },
        Cp = function(a) { return new Wi(a.top, a.right, a.bottom, a.left) },
        Dp = function(a) { var b = a.top || 0,
                c = a.left || 0; return new Wi(b, c + (a.width || 0), b + (a.height || 0), c) },
        Ep = function(a) { return null != a && 0 <= a && 1 >= a };

    function Fp() { var a = xb(); return a ? Tb("Android TV;AppleTV;Apple TV;GoogleTV;HbbTV;NetCast.TV;Opera TV;POV_TV;SMART-TV;SmartTV;TV Store;AmazonWebAppPlatform;MiBOX".split(";"), function(b) { return ub(a, b) }) || ub(a, "OMI/") && !ub(a, "XiaoMi/") ? !0 : ub(a, "Presto") && ub(a, "Linux") && !ub(a, "X11") && !ub(a, "Android") && !ub(a, "Mobi") : !1 }

    function Gp() { var a = xb(); return ub(a, "AppleTV") || ub(a, "Apple TV") || ub(a, "CFNetwork") || ub(a, "tvOS") }

    function Hp() { var a = xb(); return ub(a, "sdk_google_atv_x86") || ub(a, "Android TV") }

    function Ip() { return ub(xb(), "CrKey") || ub(xb(), "PlayStation") || ub(xb(), "Roku") || Fp() || ub(xb(), "Xbox") || Gp() || Hp() };
    var Jp = function() { this.H = !1;
            this.o = !nk(J.top);
            this.isMobileDevice = bk() || ck(); var a = Vk();
            a = 0 < a.length && null != a[a.length - 1] && null != a[a.length - 1].url ? ((a = a[a.length - 1].url.match(dk)[3] || null) ? decodeURI(a) : a) || "" : "";
            this.domain = a;
            this.j = new Wi(0, 0, 0, 0);
            this.B = new Hg(0, 0);
            this.A = new Hg(0, 0);
            this.D = new Wi(0, 0, 0, 0);
            this.O = !1;
            this.C = 0;
            this.F = !1;
            this.l = !(!J || !yp(J).Xa);
            this.update(J) },
        Kp = function(a, b) { b && b.screen && (a.B = new Hg(b.screen.width, b.screen.height)) },
        Lp = function(a, b) {
            var c = a.j ? new Hg(a.j.getWidth(),
                a.j.getHeight()) : new Hg(0, 0);
            b = void 0 === b ? J : b;
            null !== b && b != b.top && (b = b.top);
            var d = 0,
                e = 0;
            try {
                var f = b.document,
                    g = f.body,
                    h = f.documentElement;
                if ("CSS1Compat" == f.compatMode && h.scrollHeight) d = h.scrollHeight != c.height ? h.scrollHeight : h.offsetHeight, e = h.scrollWidth != c.width ? h.scrollWidth : h.offsetWidth;
                else {
                    var k = h.scrollHeight,
                        m = h.scrollWidth,
                        n = h.offsetHeight,
                        r = h.offsetWidth;
                    h.clientHeight != n && (k = g.scrollHeight, m = g.scrollWidth, n = g.offsetHeight, r = g.offsetWidth);
                    k > c.height ? k > n ? (d = k, e = m) : (d = n, e = r) : k < n ? (d = k, e =
                        m) : (d = n, e = r)
                }
                var q = new Hg(e, d)
            } catch (y) { q = new Hg(-12245933, -12245933) }
            a.A = q
        };
    Jp.prototype.update = function(a) { a && a.document && (this.D = Ap(!1, a, this.isMobileDevice), this.j = Ap(!0, a, this.isMobileDevice), Lp(this, a), Kp(this, a)) };
    var Np = function() { var a = Mp(); if (0 < a.C || a.F) return !0;
            a = Mo().l.isVisible(); var b = Go(); return a || b },
        Mp = function() { return Fl(Jp) };
    var Op = function(a) { this.o = a;
        this.l = 0;
        this.j = null };
    Op.prototype.cancel = function() { Mo().clearTimeout(this.j);
        this.j = null };
    Op.prototype.schedule = function() { var a = this,
            b = Mo(),
            c = uo().l.j;
        this.j = b.setTimeout(To(c, hp(143, function() { a.l++;
            a.o.sample() })), qp()) };
    var Pp = function(a, b, c) { this.o = a;
        this.ca = void 0 === c ? "na" : c;
        this.C = [];
        this.isInitialized = !1;
        this.A = new rp(-1, !0, this);
        this.j = this;
        this.F = b;
        this.I = this.O = !1;
        this.P = "uk";
        this.K = !1;
        this.B = !0 };
    Pp.prototype.U = function() { return !1 };
    Pp.prototype.G = function() { return this.isInitialized = !0 };
    Pp.prototype.Dc = function() { return this.j.P };
    Pp.prototype.ld = function() { return this.j.I };
    var Rp = function(a, b, c) { if (!a.I || (void 0 === c ? 0 : c)) a.I = !0, a.P = b, a.F = 0, a.j != a || Qp(a) };
    Pp.prototype.getName = function() { return this.j.ca };
    Pp.prototype.Nb = function() { return this.j.T() };
    Pp.prototype.T = function() { return {} };
    Pp.prototype.Eb = function() { return this.j.F };
    var Sp = function(a, b) { Xb(a.C, b) || (a.C.push(b), b.Fc(a.j), b.Ob(a.A), b.xb() && (a.O = !0)) };
    Pp.prototype.Y = function() { var a = Mp();
        a.j = Ap(!0, this.o, a.isMobileDevice) };
    Pp.prototype.R = function() { Kp(Mp(), this.o) };
    Pp.prototype.V = function() { return this.A.j };
    var Tp = function(a) { a = a.j;
        a.R();
        a.Y(); var b = Mp();
        b.D = Ap(!1, a.o, b.isMobileDevice);
        Lp(Mp(), a.o);
        a.A.j = a.V() };
    Pp.prototype.sample = function() {};
    var Up = function(a, b) { a.j != a ? Up(a.j, b) : a.B !== b && (a.B = b, Qp(a)) };
    Pp.prototype.isActive = function() { return this.j.B };
    var Vp = function(a) { a.O = a.C.length ? Tb(a.C, function(b) { return b.xb() }) : !1 },
        Wp = function(a) { var b = bc(a.C);
            Ob(b, function(c) { c.Ob(a.A) }) },
        Qp = function(a) { var b = bc(a.C);
            Ob(b, function(c) { c.Fc(a.j) });
            a.j != a || Wp(a) };
    l = Pp.prototype;
    l.Fc = function(a) { var b = this.j;
        this.j = a.Eb() >= this.F ? a : this;
        b !== this.j ? (this.B = this.j.B, Qp(this)) : this.B !== this.j.B && (this.B = this.j.B, Qp(this)) };
    l.Ob = function(a) { if (a.l === this.j) { var b = !this.A.Zb(a, this.O);
            this.A = a;
            b && Wp(this) } };
    l.xb = function() { return this.O };
    l.W = function() { this.K = !0 };
    l.za = function() { return this.K };
    var Xp = function(a, b, c, d) { this.element = a;
        this.j = new Wi(0, 0, 0, 0);
        this.A = new Wi(0, 0, 0, 0);
        this.l = b;
        this.featureSet = c;
        this.U = d;
        this.O = !1;
        this.timestamp = -1;
        this.D = new sp(b.A, this.element, this.j, new Wi(0, 0, 0, 0), 0, 0, pp(), 0) };
    l = Xp.prototype;
    l.Ze = function() { return !0 };
    l.Md = function() {};
    l.W = function() { if (!this.za()) { var a = this.l;
            Yb(a.C, this);
            a.O && this.xb() && Vp(a);
            this.Md();
            this.O = !0 } };
    l.za = function() { return this.O };
    l.Nb = function() { return this.l.Nb() };
    l.Eb = function() { return this.l.Eb() };
    l.Dc = function() { return this.l.Dc() };
    l.ld = function() { return this.l.ld() };
    l.Fc = function() {};
    l.Ob = function() { this.Ab() };
    l.xb = function() { return this.U };
    var Yp = function(a) { this.B = !1;
        this.j = a;
        this.A = function() {} };
    l = Yp.prototype;
    l.Eb = function() { return this.j.Eb() };
    l.Dc = function() { return this.j.Dc() };
    l.ld = function() { return this.j.ld() };
    l.create = function(a, b, c) { var d = null;
        this.j && (d = this.Tc(a, b, c), Sp(this.j, d)); return d };
    l.af = function() { return this.yc() };
    l.yc = function() { return !1 };
    l.init = function(a) { return this.j.G() ? (Sp(this.j, this), this.A = a, !0) : !1 };
    l.Fc = function(a) { 0 == a.Eb() && this.A(a.Dc(), this) };
    l.Ob = function() {};
    l.xb = function() { return !1 };
    l.W = function() { this.B = !0 };
    l.za = function() { return this.B };
    l.Nb = function() { return {} };
    var Zp = function(a, b, c) { this.l = void 0 === c ? 0 : c;
            this.j = a;
            this.X = null == b ? "" : b },
        $p = function(a) { switch (Math.trunc(a.l)) {
                case -16:
                    return -16;
                case -8:
                    return -8;
                case 0:
                    return 0;
                case 8:
                    return 8;
                case 16:
                    return 16;
                default:
                    return 16 } },
        aq = function(a, b) { return a.l < b.l ? !0 : a.l > b.l ? !1 : a.j < b.j ? !0 : a.j > b.j ? !1 : typeof a.X < typeof b.X ? !0 : typeof a.X > typeof b.X ? !1 : a.X < b.X };
    var bq = function() { this.o = 0;
        this.j = [];
        this.l = !1 };
    bq.prototype.add = function(a, b, c) {++this.o;
        a = new Zp(a, b, c);
        this.j.push(new Zp(a.j, a.X, a.l + this.o / 4096));
        this.l = !0; return this };
    var cq = function(a, b) { Ob(b.j, function(c) { a.add(c.j, c.X, $p(c)) }) },
        dq = function(a, b) { var c = void 0 === c ? 0 : c; var d = void 0 === d ? !0 : d;
            pk(b, function(e, f) { d && void 0 === e || a.add(f, e, c) }); return a },
        fq = function(a) { var b = eq;
            a.l && (dc(a.j, function(c, d) { return aq(d, c) ? 1 : aq(c, d) ? -1 : 0 }), a.l = !1); return Sb(a.j, function(c, d) { d = b(d); return "" + c + ("" != c && "" != d ? "&" : "") + d }, "") };
    var eq = function(a) { var b = a.j;
        a = a.X; return "" === a ? b : "boolean" === typeof a ? a ? b : "" : Array.isArray(a) ? 0 === a.length ? b : b + "=" + a.join() : b + "=" + (Xb(["mtos", "tos", "p"], b) ? a : encodeURIComponent(a)) };
    var gq = function(a) { var b = void 0 === b ? !0 : b;
        this.j = new bq;
        void 0 !== a && cq(this.j, a);
        b && this.j.add("v", Vj, -16) };
    gq.prototype.toString = function() { var a = "//pagead2.googlesyndication.com//pagead/gen_204",
            b = fq(this.j);
        0 < b.length && (a += "?" + b); return a };
    var hq = function(a) { var b = [],
                c = [];
            Xe(a, function(d, e) { if (!(e in Object.prototype) && "undefined" != typeof d) switch (Array.isArray(d) && (d = d.join(",")), d = [e, "=", d].join(""), e) {
                    case "adk":
                    case "r":
                    case "tt":
                    case "error":
                    case "mtos":
                    case "tos":
                    case "p":
                    case "bs":
                        b.unshift(d); break;
                    case "req":
                    case "url":
                    case "referrer":
                    case "iframe_loc":
                        c.push(d); break;
                    default:
                        b.push(d) } }); return b.concat(c) },
        iq = function() { if (Vj && "unreleased" !== Vj) return Vj },
        jq = function(a) {
            var b = void 0 === b ? 4E3 : b;
            a = a.toString();
            if (!/&v=[^&]+/.test(a)) {
                var c =
                    iq();
                a = c ? a + "&v=" + encodeURIComponent(c) : a
            }
            b = a = a.substring(0, b);
            Mo();
            wk(J, b)
        };
    var kq = function() { this.j = 0 };
    var lq = function(a, b, c) { Ob(a.l, function(d) { var e = a.j; if (!d.j && (d.o(b, c), d.A())) { d.j = !0; var f = d.l(),
                    g = new bq;
                g.add("id", "av-js");
                g.add("type", "verif");
                g.add("vtype", d.B);
                d = Fl(kq);
                g.add("i", d.j++);
                g.add("adk", e);
                dq(g, f);
                e = new gq(g);
                jq(e) } }) };
    var mq = function() { this.l = this.o = this.A = this.j = 0 };
    mq.prototype.update = function(a, b, c) { a && (this.j += b, this.l += b, this.A += b, this.o = Math.max(this.o, this.A)); if (void 0 === c ? !a : c) this.A = 0 };
    var nq = [1, .75, .5, .3, 0],
        oq = function(a) { this.l = a = void 0 === a ? nq : a;
            this.j = Rb(this.l, function() { return new mq }) },
        qq = function(a, b) { return pq(a, function(c) { return c.j }, void 0 === b ? !0 : b) },
        sq = function(a, b) { return rq(a, b, function(c) { return c.j }) },
        tq = function(a, b) { return pq(a, function(c) { return c.o }, void 0 === b ? !0 : b) },
        uq = function(a, b) { return rq(a, b, function(c) { return c.o }) },
        vq = function(a, b) { return rq(a, b, function(c) { return c.l }) },
        wq = function(a) { Ob(a.j, function(b) { b.l = 0 }) };
    oq.prototype.update = function(a, b, c, d, e, f) { f = void 0 === f ? !0 : f;
        b = e ? Math.min(a, b) : b; for (e = 0; e < this.l.length; e++) { var g = this.l[e],
                h = 0 < b && b >= g;
            g = !(0 < a && a >= g) || c;
            this.j[e].update(f && h, d, !f || g) } };
    var pq = function(a, b, c) { a = Rb(a.j, function(d) { return b(d) }); return c ? a : xq(a) },
        rq = function(a, b, c) { var d = Wb(a.l, function(e) { return b <= e }); return -1 == d ? 0 : c(a.j[d]) },
        xq = function(a) { return Rb(a, function(b, c, d) { return 0 < c ? d[c] - d[c - 1] : d[c] }) };
    var yq = function() { this.o = new oq;
            this.Y = new mq;
            this.U = this.D = -1;
            this.T = 1E3;
            this.V = new oq([1, .9, .8, .7, .6, .5, .4, .3, .2, .1, 0]);
            this.J = this.G = -1 },
        zq = function(a, b) { return tq(a.o, void 0 === b ? !0 : b) };
    yq.prototype.update = function(a, b, c, d) { this.D = -1 != this.D ? Math.min(this.D, b.ea) : b.ea;
        this.U = Math.max(this.U, b.ea);
        this.G = -1 != this.G ? Math.min(this.G, b.Ia) : b.Ia;
        this.J = Math.max(this.J, b.Ia);
        this.V.update(b.Ia, c.Ia, b.j, a, d);
        this.o.update(b.ea, c.ea, b.j, a, d);
        c = d || c.hc != b.hc ? c.isVisible() && b.isVisible() : c.isVisible();
        b = !b.isVisible() || b.j;
        this.Y.update(c, a, b) };
    yq.prototype.Hb = function() { return this.Y.o >= this.T };
    if (xk && xk.URL) { var Aq, rk = xk.URL;
        Aq = !!rk && 0 < sk().length;
        dp.dg(!Aq) }
    var Bq = function(a, b, c, d) { var e = void 0 === e ? !1 : e;
        c = hp(d, c);
        Yj(a, b, c, { capture: e }) };
    var Cq = new Wi(0, 0, 0, 0);

    function Dq(a, b) { b = Eq(b); return 0 === b ? 0 : Eq(a) / b }

    function Eq(a) { return Math.max(a.bottom - a.top, 0) * Math.max(a.right - a.left, 0) }

    function Fq(a, b) { if (!a || !b) return !1; for (var c = 0; null !== a && 100 > c++;) { if (a === b) return !0; try { a: { var d = void 0; if (Ag && !(lc && Hc("9") && !Hc("10") && v.SVGElement && a instanceof v.SVGElement) && (d = a.parentElement)) { var e = d; break a }
                    d = a.parentNode;e = Oa(d) && 1 == d.nodeType ? d : null } if (a = e || a) { var f = Zg(a),
                        g = f && ih(f),
                        h = g && g.frameElement;
                    h && (a = h) } }
            catch (k) { break } } return !1 }

    function Gq(a, b, c) { if (!a || !b) return !1;
        b = Yi(a.clone(), -b.left, -b.top);
        a = (b.left + b.right) / 2;
        b = (b.top + b.bottom) / 2;
        nk(window.top) && window.top && window.top.document && (window = window.top); if (!zp()) return !1;
        a = window.document.elementFromPoint(a, b); if (!a) return !1;
        b = (b = (b = Zg(c)) && b.defaultView && b.defaultView.frameElement) && Fq(b, a); var d = a === c;
        a = !d && a && Eh(a, function(e) { return e === c }); return !(b || d || a) }

    function Hq(a, b, c, d) { return Mp().o ? !1 : 0 >= a.getWidth() || 0 >= a.getHeight() ? !0 : c && d ? gp(208, function() { return Gq(a, b, c) }) : !1 };
    var Iq = new Wi(0, 0, 0, 0),
        Kq = function(a, b, c) {
            E.call(this);
            this.position = Iq.clone();
            this.ue = this.ge();
            this.Of = -2;
            this.ik = Date.now();
            this.Fh = -1;
            this.lastUpdateTime = b;
            this.me = null;
            this.gd = !1;
            this.Ce = null;
            this.opacity = -1;
            this.requestSource = c;
            this.Pf = function() {};
            this.Gh = function() {};
            this.Ja = new yo;
            this.Ja.Pb = a;
            this.Ja.j = a;
            this.gb = !1;
            this.Yb = { Rf: null, Qf: null };
            this.Bh = !0;
            this.Dd = null;
            this.Hc = this.Cj = !1;
            uo().F++;
            this.Ha = this.Gf();
            this.Dh = -1;
            this.ia = null;
            this.hasCompleted = this.Aj = !1;
            this.featureSet = new mo;
            wo(this.featureSet);
            Jq(this);
            1 == this.requestSource ? qo(this.featureSet, "od", 1) : qo(this.featureSet, "od", 0)
        };
    u(Kq, E);
    Kq.prototype.N = function() { this.Ja.j && (this.Yb.Rf && (Zj(this.Ja.j, "mouseover", this.Yb.Rf), this.Yb.Rf = null), this.Yb.Qf && (Zj(this.Ja.j, "mouseout", this.Yb.Qf), this.Yb.Qf = null));
        this.Dd && this.Dd.W();
        this.ia && this.ia.W();
        delete this.ue;
        delete this.Pf;
        delete this.Gh;
        delete this.Ja.Pb;
        delete this.Ja.j;
        delete this.Yb;
        delete this.Dd;
        delete this.ia;
        delete this.featureSet;
        E.prototype.N.call(this) };
    Kq.prototype.dc = function() { return this.ia ? this.ia.j : this.position };
    Kq.prototype.Ge = function(a) { uo().Ge(a) };
    Kq.prototype.Wf = function(a) { uo().Wf(a) };
    var Jq = function(a) { a = a.Ja.Pb; var b; if (b = a && a.getAttribute) b = /-[a-z]/.test("googleAvInapp") ? !1 : xo && a.dataset ? "googleAvInapp" in a.dataset : a.hasAttribute ? a.hasAttribute("data-" + Vg()) : !!a.getAttribute("data-" + Vg());
        b && (Mp().l = !0) };
    Kq.prototype.xb = function() { return !1 };
    Kq.prototype.ge = function() { return new yq };
    Kq.prototype.Da = function() { return this.ue };
    var Lq = function(a, b) { b != a.Hc && (a.Hc = b, a = Mp(), b ? a.C++ : 0 < a.C && a.C--) },
        Mq = function(a, b) { if (a.ia) { if (b.getName() === a.ia.getName()) return;
                a.ia.W();
                a.ia = null }
            b = b.create(a.Ja.j, a.featureSet, a.xb()); if (b = null != b && b.Ze() ? b : null) a.ia = b },
        Nq = function(a, b, c) { if (!a.me || -1 == a.lastUpdateTime || -1 === b.getTimestamp() || -1 === a.me.getTimestamp()) return 0;
            a = b.getTimestamp() - a.me.getTimestamp(); return a > c ? 0 : a };
    Kq.prototype.fh = function(a) { return Nq(this, a, 1E4) };
    var Oq = function(a, b, c) { if (a.ia) { a.ia.Ab(); var d = a.ia.D,
                    e = d.o,
                    f = e.j; if (null != d.B) { var g = d.l;
                    a.Ce = new Gg(g.left - f.left, g.top - f.top) }
                f = a.Ne() ? Math.max(d.j, d.A) : d.j;
                g = {};
                null !== e.volume && (g.volume = e.volume);
                e = a.fh(d);
                a.me = d;
                a.ig(f, b, c, !1, g, e, d.C) } },
        Pq = function(a) {
            if (a.gd && a.Dd) {
                var b = 1 == ro(a.featureSet, "od"),
                    c = Mp().j,
                    d = a.Dd,
                    e = a.ia ? a.ia.getName() : "ns",
                    f = new Hg(c.getWidth(), c.getHeight());
                c = a.Ne();
                a = { hk: e, Ce: a.Ce, sk: f, Ne: c, ea: a.Ha.ea, nk: b };
                if (b = d.o) {
                    b.Ab();
                    e = b.D;
                    f = e.o.j;
                    var g = null,
                        h = null;
                    null != e.B && f &&
                        (g = e.l, g = new Gg(g.left - f.left, g.top - f.top), h = new Hg(f.right - f.left, f.bottom - f.top));
                    e = c ? Math.max(e.j, e.A) : e.j;
                    c = { hk: b.getName(), Ce: g, sk: h, Ne: c, nk: !1, ea: e }
                } else c = null;
                c && lq(d, a, c)
            }
        };
    l = Kq.prototype;
    l.ig = function(a, b, c, d, e, f, g) { this.gb || (this.gd && (a = this.nf(a, c, e, g), d = d && this.Ha.ea >= (this.hc() ? .3 : .5), this.jg(f, a, d), this.lastUpdateTime = b, 0 < a.ea && -1 === this.Dh && (this.Dh = b), -1 == this.Fh && this.Hb() && (this.Fh = b), -2 == this.Of && (this.Of = Eq(this.dc()) ? a.ea : -1), this.Ha = a), this.Pf(this)) };
    l.jg = function(a, b, c) { this.Da().update(a, b, this.Ha, c) };
    l.Gf = function() { return new $n };
    l.nf = function(a, b, c, d) { c = this.Gf();
        c.j = b;
        b = Mo().l;
        b = Go() ? -1 : b.isVisible() ? 0 : 1;
        c.l = b;
        c.ea = this.vf(a);
        c.hc = this.hc();
        c.Ia = d; return c };
    l.vf = function(a) { return 0 === this.opacity && 1 === ro(this.featureSet, "opac") ? 0 : a };
    l.hc = function() { return !1 };
    l.Ne = function() { return this.Aj || this.Cj };
    l.Ua = function() { return 0 };
    l.Hb = function() { return this.ue.Hb() };
    l.gh = function() { var a = this.gd;
        a = (this.hasCompleted || this.za()) && !a; var b = 2 !== uo().o; return this.gb || b && a ? 2 : this.Hb() ? 4 : 3 };
    l.ee = function() { return 0 };
    var Qq = function(a, b, c) { b && (a.Pf = b);
        c && (a.Gh = c) };
    var Rq = function() {};
    Rq.prototype.next = function() { return Sq };
    var Sq = { done: !0, value: void 0 };
    Rq.prototype.Bc = function() { return this };
    var Tq = function() { this.A = this.j = this.o = this.l = this.B = 0 },
        Uq = function(a) { var b = {};
            b = (b.ptlt = Xa() - a.B, b); var c = a.l;
            c && (b.pnk = c);
            (c = a.o) && (b.pnc = c);
            (c = a.A) && (b.pnmm = c);
            (a = a.j) && (b.pns = a); return b };
    var Vq = function() { $n.call(this);
        this.fullscreen = !1;
        this.volume = void 0;
        this.paused = !1;
        this.mediaTime = -1 };
    u(Vq, $n);
    var Wq = function(a) { return Ep(a.volume) && 0 < a.volume };
    var Yq = function(a, b, c, d) { c = void 0 === c ? !0 : c;
            d = void 0 === d ? function() { return !0 } : d; return function(e) { var f = e[a]; if (Array.isArray(f) && d(e)) return Xq(f, b, c) } },
        Zq = function(a, b) { return function(c) { return b(c) ? c[a] : void 0 } },
        $q = function(a) { return function(b) { for (var c = 0; c < a.length; c++)
                    if (a[c] === b.e || void 0 === a[c] && !b.hasOwnProperty("e")) return !0;
                return !1 } },
        Xq = function(a, b, c) {
            return void 0 === c || c ? Qb(a, function(d, e) { return Xb(b, e) }) : Rb(b, function(d, e, f) {
                return a.slice(0 < e ? f[e - 1] + 1 : 0, d + 1).reduce(function(g, h) {
                    return g +
                        h
                }, 0)
            })
        };
    var ar = $q([void 0, 1, 2, 3, 4, 8, 16]),
        br = $q([void 0, 4, 8, 16]),
        cr = {
            sv: "sv",
            v: "v",
            cb: "cb",
            e: "e",
            nas: "nas",
            msg: "msg",
            "if": "if",
            sdk: "sdk",
            p: "p",
            p0: Zq("p0", br),
            p1: Zq("p1", br),
            p2: Zq("p2", br),
            p3: Zq("p3", br),
            cp: "cp",
            tos: "tos",
            mtos: "mtos",
            amtos: "amtos",
            mtos1: Yq("mtos1", [0, 2, 4], !1, br),
            mtos2: Yq("mtos2", [0, 2, 4], !1, br),
            mtos3: Yq("mtos3", [0, 2, 4], !1, br),
            mcvt: "mcvt",
            ps: "ps",
            scs: "scs",
            bs: "bs",
            vht: "vht",
            mut: "mut",
            a: "a",
            a0: Zq("a0", br),
            a1: Zq("a1", br),
            a2: Zq("a2", br),
            a3: Zq("a3", br),
            ft: "ft",
            dft: "dft",
            at: "at",
            dat: "dat",
            as: "as",
            vpt: "vpt",
            gmm: "gmm",
            std: "std",
            efpf: "efpf",
            swf: "swf",
            nio: "nio",
            px: "px",
            nnut: "nnut",
            vmer: "vmer",
            vmmk: "vmmk",
            vmiec: "vmiec",
            nmt: "nmt",
            tcm: "tcm",
            bt: "bt",
            pst: "pst",
            vpaid: "vpaid",
            dur: "dur",
            vmtime: "vmtime",
            dtos: "dtos",
            dtoss: "dtoss",
            dvs: "dvs",
            dfvs: "dfvs",
            dvpt: "dvpt",
            fmf: "fmf",
            vds: "vds",
            is: "is",
            i0: "i0",
            i1: "i1",
            i2: "i2",
            i3: "i3",
            ic: "ic",
            cs: "cs",
            c: "c",
            c0: Zq("c0", br),
            c1: Zq("c1", br),
            c2: Zq("c2", br),
            c3: Zq("c3", br),
            mc: "mc",
            nc: "nc",
            mv: "mv",
            nv: "nv",
            qmt: Zq("qmtos", ar),
            qnc: Zq("qnc", ar),
            qmv: Zq("qmv", ar),
            qnv: Zq("qnv", ar),
            raf: "raf",
            rafc: "rafc",
            lte: "lte",
            ces: "ces",
            tth: "tth",
            femt: "femt",
            femvt: "femvt",
            emc: "emc",
            emuc: "emuc",
            emb: "emb",
            avms: "avms",
            nvat: "nvat",
            qi: "qi",
            psm: "psm",
            psv: "psv",
            psfv: "psfv",
            psa: "psa",
            pnk: "pnk",
            pnc: "pnc",
            pnmm: "pnmm",
            pns: "pns",
            ptlt: "ptlt",
            pngs: "pings",
            veid: "veid",
            ssb: "ssb",
            ss0: Zq("ss0", br),
            ss1: Zq("ss1", br),
            ss2: Zq("ss2", br),
            ss3: Zq("ss3", br),
            dc_rfl: "urlsigs",
            obd: "obd",
            omidp: "omidp",
            omidr: "omidr",
            omidv: "omidv",
            omida: "omida",
            omids: "omids",
            omidpv: "omidpv",
            omidam: "omidam",
            omidct: "omidct",
            omidia: "omidia"
        },
        dr = Object.assign({}, cr, { avid: function(a) { return function() { return a } }("audio"), avas: "avas", vs: "vs" }),
        er = { atos: "atos", avt: Yq("atos", [2]), davs: "davs", dafvs: "dafvs", dav: "dav", ss: function(a, b) { return function(c) { return void 0 === c[a] && void 0 !== b ? b : c[a] } }("ss", 0), t: "t" };
    var fr = function() { this.l = this.j = "" };
    var gr = function() {},
        hr = function(a, b) { var c = {}; if (void 0 !== a)
                if (null != b)
                    for (var d in b) { var e = b[d];
                        d in Object.prototype || null != e && (c[d] = "function" === typeof e ? e(a) : a[e]) } else qf(c, a);
            return fq(dq(new bq, c)) };
    var ir = function() { var a = {};
            this.l = (a.vs = [1, 0], a.vw = [0, 1], a.am = [2, 2], a.a = [4, 4], a.f = [8, 8], a.bm = [16, 16], a.b = [32, 32], a.avw = [0, 64], a.avs = [64, 0], a.pv = [256, 256], a.gdr = [0, 512], a.p = [0, 1024], a.r = [0, 2048], a.m = [0, 4096], a.um = [0, 8192], a.ef = [0, 16384], a.s = [0, 32768], a.pmx = [0, 16777216], a);
            this.j = {}; for (var b in this.l) 0 < this.l[b][1] && (this.j[b] = 0);
            this.o = 0 },
        jr = function(a, b) { var c = a.l[b],
                d = c[1];
            a.o += c[0];
            0 < d && 0 == a.j[b] && (a.j[b] = 1) },
        kr = function(a) {
            var b = ef(a.l),
                c = 0,
                d;
            for (d in a.j) Xb(b, d) && 1 == a.j[d] && (c += a.l[d][1], a.j[d] =
                2);
            return c
        },
        lr = function(a) { var b = 0,
                c; for (c in a.j) { var d = a.j[c]; if (1 == d || 2 == d) b += a.l[c][1] } return b };
    var mr = function() { this.l = this.j = 0 };
    mr.prototype.update = function(a, b) { 32 <= a || (this.l & 1 << a && !b ? this.j &= ~(1 << a) : this.l & 1 << a || !b || (this.j |= 1 << a), this.l |= 1 << a) };
    var nr = function() { yq.call(this);
        this.j = new mq;
        this.K = this.F = this.I = 0;
        this.H = -1;
        this.aa = new mq;
        this.B = new mq;
        this.l = new oq;
        this.C = this.A = -1;
        this.O = new mq;
        this.T = 2E3;
        this.L = new mr;
        this.P = new mr;
        this.R = new mr };
    u(nr, yq);
    var or = function(a, b, c) { var d = a.K;
        op || c || -1 == a.H || (d += b - a.H); return d };
    nr.prototype.update = function(a, b, c, d) {
        if (!b.paused) {
            yq.prototype.update.call(this, a, b, c, d);
            var e = Wq(b) && Wq(c),
                f = .5 <= (d ? Math.min(b.ea, c.ea) : c.ea);
            Ep(b.volume) && (this.A = -1 != this.A ? Math.min(this.A, b.volume) : b.volume, this.C = Math.max(this.C, b.volume));
            f && (this.I += a, this.F += e ? a : 0);
            this.l.update(b.ea, c.ea, b.j, a, d, e);
            this.j.update(!0, a);
            this.B.update(e, a);
            this.O.update(c.fullscreen, a);
            this.aa.update(e && !f, a);
            a = Math.floor(b.mediaTime / 1E3);
            this.L.update(a, b.isVisible());
            this.P.update(a, 1 <= b.ea);
            this.R.update(a,
                Wq(b))
        }
    };
    var pr = function() { this.l = !1 };
    pr.prototype.B = function(a) { this.l || (this.j(a) ? (a = this.F.report(this.o, a), this.A |= a, a = 0 == a) : a = !1, this.l = a) };
    var qr = function(a, b) { this.l = !1;
        this.o = a;
        this.F = b;
        this.A = 0 };
    u(qr, pr);
    qr.prototype.j = function() { return !0 };
    qr.prototype.C = function() { return !1 };
    qr.prototype.getId = function() { var a = this,
            b = jf(function(c) { return c == a.o }); return xp[b].toString() };
    qr.prototype.toString = function() { var a = "";
        this.C() && (a += "c");
        this.l && (a += "s");
        0 < this.A && (a += ":" + this.A); return this.getId() + a };
    var rr = function(a, b) { qr.call(this, a, b);
        this.D = [] };
    u(rr, qr);
    rr.prototype.B = function(a, b) { b = void 0 === b ? null : b;
        null != b && this.D.push(b);
        qr.prototype.B.call(this, a) };
    var sr = function(a, b, c, d) { Xp.call(this, a, b, c, d) };
    u(sr, Xp);
    l = sr.prototype;
    l.qf = function() { if (this.element) { var a = this.element,
                b = this.l.j.o; try { try { var c = Cp(a.getBoundingClientRect()) } catch (m) { c = new Wi(0, 0, 0, 0) } var d = c.right - c.left,
                    e = c.bottom - c.top,
                    f = qj(a, b),
                    g = f.x,
                    h = f.y; var k = new Wi(Math.round(h), Math.round(g + d), Math.round(h + e), Math.round(g)) } catch (m) { k = Cq.clone() }
            this.j = k } };
    l.Sg = function() { this.A = this.l.A.j };
    l.ih = function(a) { return Hq(a, this.A, this.element, 1 == ro(this.featureSet, "od")) };
    l.Tg = function() { this.timestamp = pp() };
    l.Ab = function() {
        this.Tg();
        this.qf();
        if (this.element && "number" === typeof this.element.videoWidth && "number" === typeof this.element.videoHeight) { var a = this.element; var b = new Hg(a.videoWidth, a.videoHeight);
            a = this.j; var c = a.getWidth(),
                d = a.getHeight(),
                e = b.width;
            b = b.height;
            0 >= e || 0 >= b || 0 >= c || 0 >= d || (e /= b, b = c / d, a = a.clone(), e > b ? (c /= e, d = (d - c) / 2, 0 < d && (d = a.top + d, a.top = Math.round(d), a.bottom = Math.round(d + c))) : (d *= e, c = Math.round((c - d) / 2), 0 < c && (c = a.left + c, a.left = Math.round(c), a.right = Math.round(c + d))));
            this.j = a }
        this.Sg();
        a = this.j;
        c = this.A;
        a = a.left <= c.right && c.left <= a.right && a.top <= c.bottom && c.top <= a.bottom ? new Wi(Math.max(a.top, c.top), Math.min(a.right, c.right), Math.min(a.bottom, c.bottom), Math.max(a.left, c.left)) : new Wi(0, 0, 0, 0);
        c = a.top >= a.bottom || a.left >= a.right ? new Wi(0, 0, 0, 0) : a;
        a = this.l.A;
        b = e = d = 0;
        0 < (this.j.bottom - this.j.top) * (this.j.right - this.j.left) && (this.ih(c) ? c = new Wi(0, 0, 0, 0) : (d = Mp().B, b = new Wi(0, d.height, d.width, 0), d = Dq(c, this.j), e = Dq(c, Mp().j), b = Dq(c, b)));
        c = c.top >= c.bottom || c.left >= c.right ? new Wi(0, 0, 0,
            0) : Yi(c, -this.j.left, -this.j.top);
        Np() || (e = d = 0);
        this.D = new sp(a, this.element, this.j, c, d, e, this.timestamp, b)
    };
    l.getName = function() { return this.l.getName() };
    var tr = new Wi(0, 0, 0, 0),
        ur = function(a, b, c) { Xp.call(this, null, a, b, c);
            this.C = a.isActive();
            this.B = 0 };
    u(ur, sr);
    l = ur.prototype;
    l.Ze = function() { this.o(); return !0 };
    l.Ob = function() { sr.prototype.Ab.call(this) };
    l.Tg = function() {};
    l.qf = function() {};
    l.Ab = function() { this.o();
        sr.prototype.Ab.call(this) };
    l.Fc = function(a) { a = a.isActive();
        a !== this.C && (a ? this.o() : (Mp().j = new Wi(0, 0, 0, 0), this.j = new Wi(0, 0, 0, 0), this.A = new Wi(0, 0, 0, 0), this.timestamp = -1));
        this.C = a };

    function vr(a) { return [a.top, a.left, a.bottom, a.right] }
    var wr = {},
        xr = (wr.firstquartile = 0, wr.midpoint = 1, wr.thirdquartile = 2, wr.complete = 3, wr),
        yr = function(a, b, c, d, e, f, g) {
            f = void 0 === f ? null : f;
            g = void 0 === g ? [] : g;
            Kq.call(this, b, c, d);
            this.Vf = e;
            this.zf = 0;
            this.wa = {};
            this.ta = new ir;
            this.Lh = {};
            this.Ba = "";
            this.Tb = null;
            this.ma = !1;
            this.j = [];
            this.lc = f;
            this.C = g;
            this.B = null;
            this.A = -1;
            this.T = this.F = void 0;
            this.I = this.G = 0;
            this.K = -1;
            this.fa = this.ba = !1;
            this.L = this.H = this.l = this.Pc = this.sa = 0;
            this.ya = this.P = -1;
            this.ka = 0;
            this.ca = new oq;
            this.Y = this.V = this.R = 0;
            this.aa = -1;
            this.Aa =
                0;
            this.D = Bg;
            this.J = [this.ge()];
            this.Ca = 2;
            this.xc = {};
            this.xc.pause = "p";
            this.xc.resume = "r";
            this.xc.skip = "s";
            this.xc.mute = "m";
            this.xc.unmute = "um";
            this.xc.exitfullscreen = "ef";
            this.o = null;
            this.ga = !1
        };
    u(yr, Kq);
    yr.prototype.xb = function() { return !0 };
    var zr = function(a) { a.hasCompleted = !0;
            0 != a.Aa && (a.Aa = 3) },
        Ar = function(a) { return void 0 === a ? a : Number(a) ? Bp(a, 3) : 0 };
    l = yr.prototype;
    l.fh = function(a) { return Nq(this, a, Math.max(1E4, this.A / 3)) };
    l.ig = function(a, b, c, d, e, f, g) { var h = this,
            k = this.D(this) || {};
        qf(k, e);
        this.A = k.duration || this.A;
        this.F = k.isVpaid || this.F;
        this.T = k.isYouTube || this.T;
        e = Br(this, b);
        1 === Cr(this) && (f = e);
        Kq.prototype.ig.call(this, a, b, c, d, k, f, g);
        this.lc && this.lc.l && Ob(this.C, function(m) { m.B(h) }) };
    l.jg = function(a, b, c) {
        Kq.prototype.jg.call(this, a, b, c);
        Dr(this).update(a, b, this.Ha, c);
        this.fa = Wq(this.Ha) && Wq(b); - 1 == this.K && this.ba && (this.K = this.Da().j.j);
        this.ta.o = 0;
        a = this.Hb();
        b.isVisible() && jr(this.ta, "vs");
        a && jr(this.ta, "vw");
        Ep(b.volume) && jr(this.ta, "am");
        Wq(b) && jr(this.ta, "a");
        this.Hc && jr(this.ta, "f"); - 1 != b.l && (jr(this.ta, "bm"), 1 == b.l && jr(this.ta, "b"));
        Wq(b) && b.isVisible() && jr(this.ta, "avs");
        this.fa && a && jr(this.ta, "avw");
        0 < b.ea && jr(this.ta, "pv");
        Er(this, this.Da().j.j, !0) && jr(this.ta, "gdr");
        2E3 <= uq(this.Da().o, 1) && jr(this.ta, "pmx")
    };
    l.ge = function() { return new nr };
    l.Da = function() { return this.ue };
    var Dr = function(a, b) { return a.J[null != b && b < a.J.length ? b : a.J.length - 1] };
    yr.prototype.Gf = function() { return new Vq };
    yr.prototype.nf = function(a, b, c, d) { a = Kq.prototype.nf.call(this, a, b, c, void 0 === d ? -1 : d);
        a.fullscreen = this.Hc;
        a.paused = 2 == this.Aa;
        a.volume = c.volume;
        Ep(a.volume) || (this.sa++, b = this.Ha, Ep(b.volume) && (a.volume = b.volume));
        c = c.currentTime;
        a.mediaTime = void 0 !== c && 0 <= c ? c : -1; return a };
    var Cr = function(a) { var b = !!ro(uo().featureSet, "umt"); return a.F || !b && !a.T ? 0 : 1 },
        Br = function(a, b) { 2 == a.Aa ? b = 0 : -1 == a.lastUpdateTime ? b = 0 : (b -= a.lastUpdateTime, b = b > Math.max(1E4, a.A / 3) ? 0 : b); var c = a.D(a) || {};
            c = void 0 !== c.currentTime ? c.currentTime : a.G; var d = c - a.G,
                e = 0;
            0 <= d ? (a.I += b, a.Y += Math.max(b - d, 0), e = Math.min(d, a.I)) : a.V += Math.abs(d);
            0 != d && (a.I = 0); - 1 == a.aa && 0 < d && (a.aa = 0 <= np ? pp() - np : -1);
            a.G = c; return e };
    yr.prototype.vf = function(a) { return Mp().H ? 0 : this.Hc ? 1 : Kq.prototype.vf.call(this, a) };
    yr.prototype.Ua = function() { return 1 };
    yr.prototype.getDuration = function() { return this.A };
    var Fr = function(a, b) { Tb(a.C, function(c) { return c.o == b.o }) || a.C.push(b) },
        Gr = function(a) { var b = sq(a.Da().l, 1); return Er(a, b) },
        Er = function(a, b, c) { return 15E3 <= b ? !0 : a.ba ? (void 0 === c ? 0 : c) ? !0 : 0 < a.A ? b >= a.A / 2 : 0 < a.K ? b >= a.K : !1 : !1 },
        Hr = function(a) { var b = {},
                c = Mp();
            b.insideIframe = c.o;
            b.unmeasurable = a.gb;
            b.position = a.dc();
            b.exposure = a.Ha.ea;
            b.documentSize = c.A;
            b.viewportSize = new Hg(c.j.getWidth(), c.j.getHeight());
            null != a.o && (b.presenceData = a.o);
            b.screenShare = a.Ha.Ia; return b },
        Ir = function(a) {
            var b = Bp(a.Ha.ea, 2),
                c =
                a.ta.o,
                d = a.Ha,
                e = Dr(a),
                f = Ar(e.A),
                g = Ar(e.C),
                h = Ar(d.volume),
                k = Bp(e.D, 2),
                m = Bp(e.U, 2),
                n = Bp(d.ea, 2),
                r = Bp(e.G, 2),
                q = Bp(e.J, 2);
            d = Bp(d.Ia, 2);
            a = a.dc().clone();
            a.round();
            e = zq(e, !1);
            return { rk: b, pd: c, we: f, re: g, Xc: h, xe: k, se: m, ea: n, ye: r, te: q, Ia: d, position: a, ze: e }
        },
        Kr = function(a, b) { Jr(a.j, b, function() { return { rk: 0, pd: void 0, we: -1, re: -1, Xc: -1, xe: -1, se: -1, ea: -1, ye: -1, te: -1, Ia: -1, position: void 0, ze: [] } });
            a.j[b] = Ir(a) },
        Jr = function(a, b, c) { for (var d = a.length; d < b + 1;) a.push(c()), d++ },
        Nr = function(a, b, c) {
            var d = a.Lh[b];
            if (null !=
                d) return d;
            d = Lr(a, b);
            var e = jf(function(f) { return f == b });
            a = Mr(a, d, d, c, xr[kf[e]]);
            "fully_viewable_audible_half_duration_impression" == b && (a.std = "csm");
            return a
        },
        Or = function(a, b, c) { var d = [b]; if (a != b || c != b) d.unshift(a), d.push(c); return d },
        Mr = function(a, b, c, d, e) {
            if (a.gb) return { "if": 0, vs: 0 };
            var f = a.dc().clone();
            f.round();
            var g = Mp(),
                h = uo(),
                k = a.Da(),
                m = a.ia ? a.ia.getName() : "ns",
                n = {};
            n["if"] = g.o ? 1 : void 0;
            n.sdk = a.B ? a.B : void 0;
            n.t = a.ik;
            n.p = [f.top, f.left, f.bottom, f.right];
            n.tos = qq(k.o, !1);
            n.mtos = zq(k);
            n.mcvt = k.Y.o;
            n.ps = void 0;
            n.vht = or(k, pp(), 2 == a.Aa);
            n.mut = k.aa.o;
            n.a = Ar(a.Ha.volume);
            n.mv = Ar(k.C);
            n.fs = a.Hc ? 1 : 0;
            n.ft = k.O.j;
            n.at = k.B.j;
            n.as = 0 < k.A ? 1 : 0;
            n.atos = qq(k.l);
            n.ssb = qq(k.V, !1);
            n.amtos = tq(k.l, !1);
            n.uac = a.sa;
            n.vpt = k.j.j;
            "nio" == m && (n.nio = 1, n.avms = "nio");
            n.gmm = "4";
            n.gdr = Er(a, k.j.j, !0) ? 1 : 0;
            n.efpf = a.Ca;
            if ("gsv" == m || "nis" == m) f = a.ia, 0 < f.B && (n.nnut = f.B);
            n.tcm = Cr(a);
            n.nmt = a.V;
            n.bt = a.Y;
            n.pst = a.aa;
            n.vpaid = a.F;
            n.dur = a.A;
            n.vmtime = a.G;
            n.is = a.ta.o;
            1 <= a.j.length && (n.i0 = a.j[0].pd, n.a0 = [a.j[0].Xc], n.c0 = [a.j[0].ea], n.ss0 = [a.j[0].Ia],
                f = a.j[0].position, n.p0 = f ? vr(f) : void 0);
            2 <= a.j.length && (n.i1 = a.j[1].pd, n.a1 = Or(a.j[1].we, a.j[1].Xc, a.j[1].re), n.c1 = Or(a.j[1].xe, a.j[1].ea, a.j[1].se), n.ss1 = Or(a.j[1].ye, a.j[1].Ia, a.j[1].te), f = a.j[1].position, n.p1 = f ? vr(f) : void 0, n.mtos1 = a.j[1].ze);
            3 <= a.j.length && (n.i2 = a.j[2].pd, n.a2 = Or(a.j[2].we, a.j[2].Xc, a.j[2].re), n.c2 = Or(a.j[2].xe, a.j[2].ea, a.j[2].se), n.ss2 = Or(a.j[2].ye, a.j[2].Ia, a.j[2].te), f = a.j[2].position, n.p2 = f ? vr(f) : void 0, n.mtos2 = a.j[2].ze);
            4 <= a.j.length && (n.i3 = a.j[3].pd, n.a3 = Or(a.j[3].we, a.j[3].Xc,
                a.j[3].re), n.c3 = Or(a.j[3].xe, a.j[3].ea, a.j[3].se), n.ss3 = Or(a.j[3].ye, a.j[3].Ia, a.j[3].te), f = a.j[3].position, n.p3 = f ? vr(f) : void 0, n.mtos3 = a.j[3].ze);
            n.cs = lr(a.ta);
            b && (n.ic = kr(a.ta), n.dvpt = k.j.l, n.dvs = vq(k.o, .5), n.dfvs = vq(k.o, 1), n.davs = vq(k.l, .5), n.dafvs = vq(k.l, 1), c && (k.j.l = 0, wq(k.o), wq(k.l)), a.Hb() && (n.dtos = k.I, n.dav = k.F, n.dtoss = a.zf + 1, c && (k.I = 0, k.F = 0, a.zf++)), n.dat = k.B.l, n.dft = k.O.l, c && (k.B.l = 0, k.O.l = 0));
            n.ps = [g.A.width, g.A.height];
            n.bs = [g.j.getWidth(), g.j.getHeight()];
            n.scs = [g.B.width, g.B.height];
            n.dom = g.domain;
            a.Pc && (n.vds = a.Pc);
            if (0 < a.C.length || a.lc) b = bc(a.C), a.lc && b.push(a.lc), n.pings = Rb(b, function(r) { return r.toString() });
            b = Rb(Qb(a.C, function(r) { return r.C() }), function(r) { return r.getId() });
            cc(b);
            n.ces = b;
            a.l && (n.vmer = a.l);
            a.H && (n.vmmk = a.H);
            a.L && (n.vmiec = a.L);
            n.avms = a.ia ? a.ia.getName() : "ns";
            a.ia && qf(n, a.ia.Nb());
            h.j && (n.femt = a.P, n.femvt = a.ya, n.emc = a.ka, n.emb = qq(a.ca, !1), n.emuc = a.R, n.avms = "exc");
            d ? (n.c = Bp(a.Ha.ea, 2), n.ss = Bp(a.Ha.Ia, 2)) : n.tth = pp() - mp;
            n.mc = Bp(k.U, 2);
            n.nc = Bp(k.D, 2);
            n.mv = Ar(k.C);
            n.nv = Ar(k.A);
            n.lte = Bp(a.Of, 2);
            d = Dr(a, e);
            zq(k);
            n.qmtos = zq(d);
            n.qnc = Bp(d.D, 2);
            n.qmv = Ar(d.C);
            n.qnv = Ar(d.A);
            n.qas = 0 < d.A ? 1 : 0;
            n.qi = a.Ba;
            n.avms || (n.avms = "geo");
            n.psm = k.L.l;
            n.psv = k.L.j;
            n.psfv = k.P.j;
            n.psa = k.R.j;
            h = to(h.featureSet);
            h.length && (n.veid = h);
            a.o && qf(n, Uq(a.o));
            n.avas = a.ee();
            n.vs = a.gh();
            return n
        },
        Lr = function(a, b) { if (Xb(wp, b)) return !0; var c = a.wa[b]; return void 0 !== c ? (a.wa[b] = !0, !c) : !1 };
    yr.prototype.gh = function() { return this.gb ? 2 : Gr(this) ? 5 : this.Hb() ? 4 : 3 };
    yr.prototype.ee = function() { return this.ga ? 2E3 <= this.Da().B.o ? 4 : 3 : 2 };
    var Pr = Xa(),
        Sr = function() { this.j = {}; var a = ih();
            Qr(this, a, document); var b = Rr(); try { if ("1" == b) { for (var c = a.parent; c != a.top; c = c.parent) Qr(this, c, c.document);
                    Qr(this, a.top, a.top.document) } } catch (d) {} },
        Rr = function() { var a = document.documentElement; try { if (!nk(ih().top)) return "2"; var b = [],
                    c = ih(a.ownerDocument); for (a = c; a != c.top; a = a.parent)
                    if (a.frameElement) b.push(a.frameElement);
                    else break;
                return b && 0 != b.length ? "1" : "0" } catch (d) { return "2" } },
        Qr = function(a, b, c) {
            Bq(c, "mousedown", function() { return Tr(a) }, 301);
            Bq(b, "scroll", function() { return Ur(a) }, 302);
            Bq(c, "touchmove", function() { return Vr(a) }, 303);
            Bq(c, "mousemove", function() { return Wr(a) }, 304);
            Bq(c, "keydown", function() { return Xr(a) }, 305)
        },
        Tr = function(a) { Xe(a.j, function(b) { 1E5 < b.o || ++b.o }) },
        Ur = function(a) { Xe(a.j, function(b) { 1E5 < b.j || ++b.j }) },
        Vr = function(a) { Xe(a.j, function(b) { 1E5 < b.j || ++b.j }) },
        Xr = function(a) { Xe(a.j, function(b) { 1E5 < b.l || ++b.l }) },
        Wr = function(a) { Xe(a.j, function(b) { 1E5 < b.A || ++b.A }) };
    var Yr = function() { this.j = [];
            this.l = [] },
        Zr = function(a, b) { return Ub(a.j, function(c) { return c.Ba == b }) },
        $r = function(a, b) { return b ? Ub(a.j, function(c) { return c.Ja.Pb == b }) : null },
        as = function(a, b) { return Ub(a.l, function(c) { return 2 == c.Ua() && c.Ba == b }) },
        cs = function() { var a = bs; return 0 == a.j.length ? a.l : 0 == a.l.length ? a.j : ac(a.l, a.j) };
    Yr.prototype.reset = function() { this.j = [];
        this.l = [] };
    var ds = function(a, b) { a = 1 == b.Ua() ? a.j : a.l; var c = Vb(a, function(d) { return d == b }); return -1 != c ? (a.splice(c, 1), b.ia && b.ia.Md(), b.W(), !0) : !1 },
        es = function(a) { var b = bs; if (ds(b, a)) { switch (a.Ua()) {
                    case 0:
                        var c = function() { return null };
                    case 2:
                        c = function() { return as(b, a.Ba) }; break;
                    case 1:
                        c = function() { return Zr(b, a.Ba) } } for (var d = c(); d; d = c()) ds(b, d) } },
        fs = function(a) { var b = bs;
            a = Qb(a, function(c) { return !$r(b, c.Ja.Pb) });
            b.j.push.apply(b.j, t(a)) },
        gs = function(a) {
            var b = [];
            Ob(a, function(c) {
                Tb(bs.j, function(d) {
                    return d.Ja.Pb ===
                        c.Ja.Pb && d.Ba === c.Ba
                }) || (bs.j.push(c), b.push(c))
            })
        },
        bs = Fl(Yr);
    var hs = function(a, b, c, d) { Xp.call(this, a, b, c, d);
        this.o = this.B = 0 };
    u(hs, Xp);
    hs.prototype.getName = function() { return "exc" };
    hs.prototype.Ab = function() { this.D = new sp(this.l.A, this.element, this.j, new Wi(0, 0, 0, 0), this.B, 0, pp(), this.o) };
    var is = function() { Yp.call(this, new Pp(J, 2)) };
    u(is, Yp);
    is.prototype.getName = function() { return "exc" };
    is.prototype.af = function() { return !0 };
    is.prototype.yc = function() { return !0 };
    is.prototype.Tc = function(a, b, c) { return new hs(a, this.j, b, c) };
    var Fs = function() { this.j = this.l = null },
        Gs = function(a, b) { if (null == a.l) return !1; var c = function(d, e) { b(d, e) };
            a.j = Ub(a.l, function(d) { return null != d && d.af() });
            a.j && (a.j.init(c) ? Tp(a.j.j) : b(a.j.j.Dc(), a.j)); return null != a.j };
    var Is = function(a) { a = Hs(a);
        Yp.call(this, a.length ? a[a.length - 1] : new Pp(J, 0));
        this.o = a;
        this.l = null };
    u(Is, Yp);
    l = Is.prototype;
    l.getName = function() { return (this.l ? this.l : this.j).getName() };
    l.Nb = function() { return (this.l ? this.l : this.j).Nb() };
    l.Eb = function() { return (this.l ? this.l : this.j).Eb() };
    l.init = function(a) { var b = !1;
        Ob(this.o, function(c) { c.G() && (b = !0) });
        b && (this.A = a, Sp(this.j, this)); return b };
    l.W = function() { Ob(this.o, function(a) { a.W() });
        Yp.prototype.W.call(this) };
    l.af = function() { return Tb(this.o, function(a) { return a.U() }) };
    l.yc = function() { return Tb(this.o, function(a) { return a.U() }) };
    l.Tc = function(a, b, c) { return new sr(a, this.j, b, c) };
    l.Ob = function(a) { this.l = a.l };
    var Hs = function(a) { if (!a.length) return [];
        a = Qb(a, function(c) { return null != c && c.U() }); for (var b = 1; b < a.length; b++) Sp(a[b - 1], a[b]); return a };
    var Js = { threshold: [0, .3, .5, .75, 1] },
        Ks = function(a, b, c, d) { Xp.call(this, a, b, c, d);
            this.F = this.H = this.B = this.C = this.o = null };
    u(Ks, sr);
    Ks.prototype.Ze = function() { var a = this;
        this.F || (this.F = pp()); if (gp(298, function() { return Ls(a) })) return !0;
        Rp(this.l, "msf"); return !1 };
    Ks.prototype.Md = function() { if (this.o && this.element) try { this.o.unobserve(this.element), this.C ? (this.C.unobserve(this.element), this.C = null) : this.B && (this.B.disconnect(), this.B = null) } catch (a) {} };
    var Ms = function(a) { return a.o && a.o.takeRecords ? a.o.takeRecords() : [] },
        Ls = function(a) { if (!a.element) return !1; var b = a.element,
                c = a.l.j.o,
                d = uo().l.j;
            a.o = new c.IntersectionObserver(To(d, function(e) { return Ns(a, e) }), Js);
            d = To(d, function() { a.o.unobserve(b);
                a.o.observe(b);
                Ns(a, Ms(a)) });
            c.ResizeObserver ? (a.C = new c.ResizeObserver(d), a.C.observe(b)) : c.MutationObserver && (a.B = new v.MutationObserver(d), a.B.observe(b, { attributes: !0, childList: !0, characterData: !0, subtree: !0 }));
            a.o.observe(b);
            Ns(a, Ms(a)); return !0 },
        Ns =
        function(a, b) { try { if (b.length) { a.H || (a.H = pp()); var c = Os(b),
                        d = qj(a.element, a.l.j.o),
                        e = d.x,
                        f = d.y;
                    a.j = new Wi(Math.round(f), Math.round(e) + c.boundingClientRect.width, Math.round(f) + c.boundingClientRect.height, Math.round(e)); var g = Cp(c.intersectionRect);
                    a.A = Yi(g, a.j.left - g.left, a.j.top - g.top) } } catch (h) { a.Md(), ip(299, h) } },
        Os = function(a) { return Sb(a, function(b, c) { return b.time > c.time ? b : c }, a[0]) };
    l = Ks.prototype;
    l.Ab = function() { var a = Ms(this);
        0 < a.length && Ns(this, a);
        sr.prototype.Ab.call(this) };
    l.qf = function() {};
    l.ih = function() { return !1 };
    l.Sg = function() {};
    l.Nb = function() { var a = {}; return Object.assign(this.l.Nb(), (a.niot_obs = this.F, a.niot_cbk = this.H, a)) };
    l.getName = function() { return "nio" };
    var Ps = function(a) { a = void 0 === a ? J : a;
        Yp.call(this, new Pp(a, 2)) };
    u(Ps, Yp);
    Ps.prototype.getName = function() { return "nio" };
    Ps.prototype.yc = function() { return !Mp().l && null != this.j.j.o.IntersectionObserver };
    Ps.prototype.Tc = function(a, b, c) { return new Ks(a, this.j, b, c) };
    var Rs = function() { var a = Qs();
        Pp.call(this, J.top, a, "geo") };
    u(Rs, Pp);
    Rs.prototype.V = function() { return Mp().j };
    Rs.prototype.U = function() { var a = Qs();
        this.F !== a && (this.j != this && a > this.j.F && (this.j = this, Qp(this)), this.F = a); return 2 == a };
    var Qs = function() { uo(); var a = Mp(); return a.o || a.l ? 0 : 2 };
    var Ss = function() {};
    var Ts = function() { this.done = !1;
            this.j = { Ei: 0, Jg: 0, Wm: 0, Zg: 0, Jf: -1, Wi: 0, Vi: 0, Xi: 0, gk: 0 };
            this.B = null;
            this.C = !1;
            this.o = null;
            this.D = 0;
            this.l = new Op(this) },
        Ws = function() { var a = Us;
            a.C || (a.C = !0, Vs(a, function() { return a.A.apply(a, t(Ea.apply(0, arguments))) }), a.A()) };
    Ts.prototype.sample = function() { Xs(this, cs(), !1) };
    var Ys = function() { Fl(Ss); var a = Fl(Fs);
            null != a.j && a.j.j ? Tp(a.j.j) : Mp().update(J) },
        Xs = function(a, b, c) { if (!a.done && (a.l.cancel(), 0 != b.length)) { a.o = null; try { Ys(); var d = pp();
                    uo().H = d; if (null != Fl(Fs).j)
                        for (var e = 0; e < b.length; e++) Oq(b[e], d, c); for (d = 0; d < b.length; d++) Pq(b[d]);++a.j.Zg } finally { c ? Ob(b, function(f) { f.Ha.ea = 0 }) : a.l.schedule() } } },
        Vs = function(a, b) { if (!a.B) { b = hp(142, b);
                Mo(); var c = Eo(xk);
                c && Yj(xk, c, b, { capture: !1 }) && (a.B = b) } };
    Ts.prototype.A = function() { var a = Np(),
            b = pp();
        a ? (op || (kp = b, Ob(bs.j, function(c) { var d = c.Da();
            d.K = or(d, b, 1 != c.Aa) })), op = !0) : (this.D = Zs(this, b), op = !1, mp = b, Ob(bs.j, function(c) { c.gd && (c.Da().H = b) }));
        Xs(this, cs(), !a) };
    var $s = function() { uo().j = !0; var a = Fl(Fs);
            a.l = [new is];
            Gs(a, function() { return null }) },
        at = function() { var a = Fl(Fs); if (null != a.j) { var b = a.j;
                Ob(cs(), function(c) { return Mq(c, b) }) } },
        Zs = function(a, b) { a = a.D;
            op && (a += b - kp); return a },
        bt = function(a) {
            a = void 0 === a ? function() { return {} } : a;
            dp.cg("av-js");
            $o.j = .01;
            fp([function(b) {
                var c = uo(),
                    d = {};
                d = (d.bin = c.o, d.type = "error", d);
                c = so(c.featureSet);
                if (!Us.o) {
                    var e = Us,
                        f = J.document,
                        g = 0 <= lp ? pp() - lp : -1,
                        h = pp(); - 1 == e.j.Jf && (g = h);
                    var k = Mp(),
                        m = uo(),
                        n = so(m.featureSet),
                        r = cs();
                    try {
                        if (0 <
                            r.length) { var q = k.j;
                            q && (n.bs = [q.getWidth(), q.getHeight()]); var y = k.A;
                            y && (n.ps = [y.width, y.height]);
                            J.screen && (n.scs = [J.screen.width, J.screen.height]) } else n.url = encodeURIComponent(J.location.href.substring(0, 512)), f.referrer && (n.referrer = encodeURIComponent(f.referrer.substring(0, 512)));
                        n.tt = g;
                        n.pt = lp;
                        n.bin = m.o;
                        void 0 !== J.google_osd_load_pub_page_exp && (n.olpp = J.google_osd_load_pub_page_exp);
                        n.deb = [1, e.j.Ei, e.j.Jg, e.j.Zg, e.j.Jf, 0, e.l.l, e.j.Wi, e.j.Vi, e.j.Xi, e.j.gk, -1].join(";");
                        n.tvt = Zs(e, h);
                        k.l && (n.inapp =
                            1);
                        if (null !== J && J != J.top) { 0 < r.length && (n.iframe_loc = encodeURIComponent(J.location.href.substring(0, 512))); var x = k.D;
                            n.is = [x.getWidth(), x.getHeight()] }
                    } catch (A) { n.error = 1 }
                    Us.o = n
                }
                q = of(Us.o);
                y = uo().l;
                1 == ro(y.o, "prf") ? (x = new Qo, e = y.j, f = 0, -1 < e.j && (f = e.o.j.j() - e.j), x = Id(x, 1, e.A + f, 0), e = y.j, x = Id(x, 5, -1 < e.j ? e.l + 1 : e.l, 0), x = Id(x, 2, y.l.j.A(), 0), x = Id(x, 3, y.l.j.o(), 0), y = Id(x, 4, y.l.j.l(), 0), x = {}, y = (x.pf = Qc(Je(y, Ro)), x)) : y = {};
                qf(q, y);
                qf(b, d, c, q, a());
                if (d = iq()) c = {}, qf(b, (c.v = encodeURIComponent(d), c))
            }])
        },
        Us = Fl(Ts);
    var ct = null,
        dt = "",
        et = !1,
        ft = function() { var a = ct || J; if (!a) return ""; var b = []; if (!a.location || !a.location.href) return "";
            b.push("url=" + encodeURIComponent(a.location.href.substring(0, 512)));
            a.document && a.document.referrer && b.push("referrer=" + encodeURIComponent(a.document.referrer.substring(0, 512))); return b.join("&") };

    function gt() { var a = "av.default_js_unreleased_RCxx".match(/_(\d{8})_RC\d+$/) || "av.default_js_unreleased_RCxx".match(/_(\d{8})_\d+_\d+$/) || "av.default_js_unreleased_RCxx".match(/_(\d{8})_\d+\.\d+$/) || "av.default_js_unreleased_RCxx".match(/_(\d{8})_\d+_RC\d+$/),
            b; if (2 == (null == (b = a) ? void 0 : b.length)) return a[1];
        a = "av.default_js_unreleased_RCxx".match(/.*_(\d{2})\.(\d{4})\.\d+_RC\d+$/); var c; return 3 == (null == (c = a) ? void 0 : c.length) ? "20" + a[1] + a[2] : null }
    var ht = function() {
            return "ima_html5_sdk".includes("ima_html5_sdk") ? { kb: "ima", lb: null } : "ima_html5_sdk".includes("ima_native_sdk") ? { kb: "nima", lb: null } : "ima_html5_sdk".includes("admob-native-video-javascript") ? { kb: "an", lb: null } : "av.default_js_unreleased_RCxx".includes("cast_js_sdk") ? { kb: "cast", lb: gt() } : "av.default_js_unreleased_RCxx".includes("youtube.player.web") ? { kb: "yw", lb: gt() } : "av.default_js_unreleased_RCxx".includes("outstream_web_client") ? { kb: "out", lb: gt() } : "av.default_js_unreleased_RCxx".includes("drx_rewarded_web") ? { kb: "r", lb: gt() } : "av.default_js_unreleased_RCxx".includes("gam_native_web_video") ? { kb: "n", lb: gt() } : "av.default_js_unreleased_RCxx".includes("admob_interstitial_video") ? { kb: "int", lb: gt() } : { kb: "j", lb: null }
        },
        it = ht().kb,
        jt = ht().lb;
    var lt = function(a, b) { var c = { sv: "933" };
            null !== jt && (c.v = jt);
            c.cb = it;
            c.nas = bs.j.length;
            c.msg = a;
            void 0 !== b && (a = kt(b)) && (c.e = xp[a]); return c },
        mt = function(a) { return fb(a, "custom_metric_viewable") },
        kt = function(a) { var b = mt(a) ? "custom_metric_viewable" : a.toLowerCase(); return jf(function(c) { return c == b }) };
    var nt = { Qk: "visible", zk: "audible", jm: "time", km: "timetype" },
        ot = { visible: function(a) { return /^(100|[0-9]{1,2})$/.test(a) }, audible: function(a) { return "0" == a || "1" == a }, timetype: function(a) { return "mtos" == a || "tos" == a }, time: function(a) { return /^(100|[0-9]{1,2})%$/.test(a) || /^([0-9])+ms$/.test(a) } },
        pt = function() { this.j = void 0;
            this.l = !1;
            this.o = 0;
            this.A = -1;
            this.B = "tos" },
        qt = function(a) {
            try {
                var b = a.split(",");
                return b.length > ef(nt).length ? null : Sb(b, function(c, d) {
                    d = d.toLowerCase().split("=");
                    if (2 != d.length || void 0 ===
                        ot[d[0]] || !ot[d[0]](d[1])) throw Error("Entry (" + d[0] + ", " + d[1] + ") is invalid.");
                    c[d[0]] = d[1];
                    return c
                }, {})
            } catch (c) { return null }
        },
        rt = function(a, b) { if (void 0 == a.j) return 0; switch (a.B) {
                case "mtos":
                    return a.l ? uq(b.l, a.j) : uq(b.o, a.j);
                case "tos":
                    return a.l ? sq(b.l, a.j) : sq(b.o, a.j) } return 0 };
    var tt = function(a, b, c, d) { qr.call(this, b, d);
        this.D = a;
        this.H = c };
    u(tt, qr);
    tt.prototype.getId = function() { return this.D };
    tt.prototype.C = function() { return !0 };
    tt.prototype.j = function(a) { var b = a.Da(),
            c = a.getDuration(); return Tb(this.H, function(d) { if (void 0 != d.j) var e = rt(d, b);
            else b: { switch (d.B) {
                    case "mtos":
                        e = d.l ? b.B.o : b.j.j; break b;
                    case "tos":
                        e = d.l ? b.B.j : b.j.j; break b }
                e = 0 }
            0 == e ? d = !1 : (d = -1 != d.o ? d.o : void 0 !== c && 0 < c ? d.A * c : -1, d = -1 != d && e >= d); return d }) };
    var ut = function() {};
    var vt = function() {};
    u(vt, ut);
    vt.prototype.l = function() { return null };
    vt.prototype.o = function() { return [] };
    var wt = function() {};
    u(wt, gr);
    wt.prototype.j = function(a) { var b = new fr;
        b.j = hr(a, cr);
        b.l = hr(a, er); return b };
    var xt = function(a) { qr.call(this, "fully_viewable_audible_half_duration_impression", a) };
    u(xt, qr);
    xt.prototype.j = function(a) { return Gr(a) };
    var yt = function(a) { this.j = a };
    u(yt, ut);
    var zt = function(a, b) { qr.call(this, a, b) };
    u(zt, qr);
    zt.prototype.j = function(a) { return a.Da().Hb() };
    var At = function(a) { rr.call(this, "measurable_impression", a) };
    u(At, rr);
    At.prototype.j = function(a) { var b = Xb(this.D, ro(uo().featureSet, "ovms")); return !a.gb && (0 != a.Aa || b) };
    var Bt = function() { yt.apply(this, arguments) };
    u(Bt, yt);
    Bt.prototype.l = function() { return new At(this.j) };
    Bt.prototype.o = function() { return [new zt("viewable_impression", this.j), new xt(this.j)] };
    var Ct = function(a, b, c) { ur.call(this, a, b, c) };
    u(Ct, ur);
    Ct.prototype.o = function() { var a = La("ima.admob.getViewability"),
            b = ro(this.featureSet, "queryid"); "function" === typeof a && b && a(b) };
    Ct.prototype.getName = function() { return "gsv" };
    var Dt = function(a) { a = void 0 === a ? J : a;
        Yp.call(this, new Pp(a, 2)) };
    u(Dt, Yp);
    Dt.prototype.getName = function() { return "gsv" };
    Dt.prototype.yc = function() { var a = Mp();
        uo(); return a.l && !1 };
    Dt.prototype.Tc = function(a, b, c) { return new Ct(this.j, b, c) };
    var Et = function(a, b, c) { ur.call(this, a, b, c) };
    u(Et, ur);
    Et.prototype.o = function() { var a = this,
            b = La("ima.bridge.getNativeViewability"),
            c = ro(this.featureSet, "queryid"); "function" === typeof b && c && b(c, function(d) { lf(d) && a.B++; var e = d.opt_nativeViewVisibleBounds || {},
                f = d.opt_nativeViewHidden;
            a.j = Dp(d.opt_nativeViewBounds || {}); var g = a.l.A;
            g.j = f ? tr.clone() : Dp(e);
            a.timestamp = d.opt_nativeTime || -1;
            Mp().j = g.j;
            d = d.opt_nativeVolume;
            void 0 !== d && (g.volume = d) }) };
    Et.prototype.getName = function() { return "nis" };
    var Ft = function(a) { a = void 0 === a ? J : a;
        Yp.call(this, new Pp(a, 2)) };
    u(Ft, Yp);
    Ft.prototype.getName = function() { return "nis" };
    Ft.prototype.yc = function() { var a = Mp();
        uo(); return a.l && !1 };
    Ft.prototype.Tc = function(a, b, c) { return new Et(this.j, b, c) };
    var Gt = function() { Pp.call(this, J, 2, "mraid");
        this.aa = 0;
        this.J = this.L = !1;
        this.H = null;
        this.l = yp(this.o);
        this.A.j = new Wi(0, 0, 0, 0);
        this.ba = !1 };
    u(Gt, Pp);
    Gt.prototype.U = function() { return null != this.l.Xa };
    Gt.prototype.T = function() { var a = {};
        this.aa && (a.mraid = this.aa);
        this.L && (a.mlc = 1);
        a.mtop = this.l.fk;
        this.H && (a.mse = this.H);
        this.ba && (a.msc = 1);
        a.mcp = this.l.compatibility; return a };
    Gt.prototype.D = function(a) { var b = Ea.apply(1, arguments); try { return this.l.Xa[a].apply(this.l.Xa, b) } catch (c) { ip(538, c, .01, function(d) { d.method = a }) } };
    var Ht = function(a, b, c) { a.D("addEventListener", b, c) };
    Gt.prototype.G = function() { var a = this; if (this.isInitialized) return !this.ld();
        this.isInitialized = !0; if (2 === this.l.compatibility) return this.H = "ng", Rp(this, "w"), !1; if (1 === this.l.compatibility) return this.H = "mm", Rp(this, "w"), !1;
        Mp().F = !0;
        this.o.document.readyState && "complete" == this.o.document.readyState ? It(this) : Bq(this.o, "load", function() { Mo().setTimeout(hp(292, function() { return It(a) }), 100) }, 292); return !0 };
    var It = function(a) { uo().C = !!a.D("isViewable");
            Ht(a, "viewableChange", Jt); "loading" === a.D("getState") ? Ht(a, "ready", Kt) : Lt(a) },
        Lt = function(a) { "string" === typeof a.l.Xa.AFMA_LIDAR ? (a.L = !0, Mt(a)) : (a.l.compatibility = 3, a.H = "nc", Rp(a, "w")) },
        Mt = function(a) { a.J = !1; var b = 1 == ro(uo().featureSet, "rmmt"),
                c = !!a.D("isViewable");
            (b ? !c : 1) && Mo().setTimeout(hp(524, function() { a.J || (Nt(a), ip(540, Error()), a.H = "mt", Rp(a, "w")) }), 500);
            Ot(a);
            Ht(a, a.l.Xa.AFMA_LIDAR, Pt) },
        Ot = function(a) {
            var b = 1 == ro(uo().featureSet, "sneio"),
                c = void 0 !==
                a.l.Xa.AFMA_LIDAR_EXP_1,
                d = void 0 !== a.l.Xa.AFMA_LIDAR_EXP_2;
            (b = b && d) && (a.l.Xa.AFMA_LIDAR_EXP_2 = !0);
            c && (a.l.Xa.AFMA_LIDAR_EXP_1 = !b)
        },
        Nt = function(a) { a.D("removeEventListener", a.l.Xa.AFMA_LIDAR, Pt);
            a.L = !1 };
    Gt.prototype.Y = function() { var a = Mp(),
            b = Qt(this, "getMaxSize");
        a.j = new Wi(0, b.width, b.height, 0) };
    Gt.prototype.R = function() { Mp().B = Qt(this, "getScreenSize") };
    var Qt = function(a, b) { if ("loading" === a.D("getState")) return new Hg(-1, -1);
        b = a.D(b); if (!b) return new Hg(-1, -1);
        a = parseInt(b.width, 10);
        b = parseInt(b.height, 10); return isNaN(a) || isNaN(b) ? new Hg(-1, -1) : new Hg(a, b) };
    Gt.prototype.W = function() { Nt(this);
        Pp.prototype.W.call(this) };
    var Kt = function() { try { var a = Fl(Gt);
                a.D("removeEventListener", "ready", Kt);
                Lt(a) } catch (b) { ip(541, b) } },
        Pt = function(a, b) { try { var c = Fl(Gt);
                c.J = !0; var d = a ? new Wi(a.y, a.x + a.width, a.y + a.height, a.x) : new Wi(0, 0, 0, 0); var e = pp(),
                    f = Np(); var g = new rp(e, f, c);
                g.j = d;
                g.volume = b;
                c.Ob(g) } catch (h) { ip(542, h) } },
        Jt = function(a) { var b = uo(),
                c = Fl(Gt);
            a && !b.C && (b.C = !0, c.ba = !0, c.H && Rp(c, "w", !0)) };
    var St = function() {
        this.isInitialized = !1;
        this.G = "";
        this.o = !1;
        this.j = this.l = null;
        var a = {};
        this.L = (a.start = this.uj, a.firstquartile = this.pj, a.midpoint = this.rj, a.thirdquartile = this.vj, a.complete = this.mj, a.error = this.nj, a.pause = this.Uf, a.resume = this.uh, a.skip = this.tj, a.viewable_impression = this.pb, a.mute = this.Nc, a.unmute = this.Nc, a.fullscreen = this.qj, a.exitfullscreen = this.oj, a.fully_viewable_audible_half_duration_impression = this.pb, a.measurable_impression = this.pb, a.abandon = this.Uf, a.engagedview = this.pb, a.impression =
            this.pb, a.creativeview = this.pb, a.progress = this.Nc, a.custom_metric_viewable = this.pb, a.bufferstart = this.Uf, a.bufferfinish = this.uh, a.audio_measurable = this.pb, a.audio_audible = this.pb, a);
        a = {};
        this.Y = (a.overlay_resize = this.sj, a.abandon = this.If, a.close = this.If, a.collapse = this.If, a.overlay_unmeasurable_impression = function(b) { return Nr(b, "overlay_unmeasurable_impression", Np()) }, a.overlay_viewable_immediate_impression = function(b) { return Nr(b, "overlay_viewable_immediate_impression", Np()) }, a.overlay_unviewable_impression =
            function(b) { return Nr(b, "overlay_unviewable_impression", Np()) }, a.overlay_viewable_end_of_session_impression = function(b) { return Nr(b, "overlay_viewable_end_of_session_impression", Np()) }, a);
        uo().o = 3;
        Rt(this)
    };
    St.prototype.A = function(a) { Lq(a, !1);
        es(a) };
    St.prototype.B = function() {};
    var Tt = function(a, b, c, d) { a = a.D(null, d, !0, b);
        a.B = c;
        fs([a]); return a };
    St.prototype.D = function(a, b, c, d) { var e = this;
        b = c ? b : -1;
        c = this.Xg();
        a = new yr(J, a, b, 7, this.xf(), c.l(), c.o());
        a.Ba = d;
        oo(a.featureSet);
        qo(a.featureSet, "queryid", a.Ba);
        a.Ge(this.G);
        Qq(a, function() { return e.J.apply(e, t(Ea.apply(0, arguments))) }, function() { return e.K.apply(e, t(Ea.apply(0, arguments))) });
        (d = Fl(Fs).j) && Mq(a, d);
        a.Ja.Pb && Fl(Ss); return a };
    var Ut = function(a, b, c) { Wn(b); var d = a.j;
            Ob(b, function(e) { var f = Rb(e.criteria, function(g) { var h = qt(g); if (null == h) g = null;
                    else if (g = new pt, null != h.visible && (g.j = h.visible / 100), null != h.audible && (g.l = 1 == h.audible), null != h.time) { var k = "mtos" == h.timetype ? "mtos" : "tos",
                            m = gb(h.time, "%") ? "%" : "ms";
                        h = parseInt(h.time, 10); "%" == m && (h /= 100); "ms" == m ? (g.o = h, g.A = -1) : (g.o = -1, g.A = h);
                        g.B = void 0 === k ? "tos" : k } return g });
                Tb(f, function(g) { return null == g }) || Fr(c, new tt(e.id, e.event, f, d)) }) },
        Vt = function() {
            var a = [],
                b = uo();
            b.j ||
                a.push(Fl(Rs));
            ro(b.featureSet, "mvp_lv") && a.push(Fl(Gt));
            var c = [new Dt, new Ft];
            b.j && c.push(new is);
            c.push(new Is(a));
            b.j || c.push(new Ps(J));
            return c
        },
        Xt = function(a) { if (!a.isInitialized) { a.isInitialized = !0; try { var b = pp(),
                        c = uo(),
                        d = Mp();
                    lp = b;
                    c.B = 79463069; "o" !== a.l && (ct = vk(J)); if (No()) { Us.j.Jg = 0;
                        Us.j.Jf = pp() - b; var e = Vt(),
                            f = Fl(Fs);
                        f.l = e;
                        Gs(f, function() { Wt() }) ? Us.done || (at(), Sp(f.j.j, a), Ws()) : d.o && !c.j ? Wt() : Ws() } else et = !0 } catch (g) { throw bs.reset(), g; } } },
        Yt = function(a) { Us.l.cancel();
            dt = a;
            Us.done = !0 },
        Zt =
        function(a) { if (a.l) return a.l; var b = Fl(Fs).j; if (b) switch (b.getName()) {
                case "nis":
                    a.l = "n"; break;
                case "gsv":
                    a.l = "m" }
            a.l || (a.l = "h"); return a.l },
        $t = function(a, b, c) { if (null == a.j) return b.Pc |= 4, !1;
            a = a.j.report(c, b);
            b.Pc |= a; return 0 == a };
    St.prototype.Fc = function(a) { switch (a.Eb()) {
            case 0:
                if (a = Fl(Fs).j) a = a.j, Yb(a.C, this), a.O && this.xb() && Vp(a);
                Wt(); break;
            case 2:
                Ws() } };
    St.prototype.Ob = function() {};
    St.prototype.xb = function() { return !1 };
    var Wt = function() { var a = [new Ps(J)],
            b = Fl(Fs);
        b.l = a;
        Gs(b, function() { Yt("i") }) ? Us.done || (at(), Ws()) : Yt("i") };
    St.prototype.K = function(a, b) { a.gb = !0; switch (a.Ua()) {
            case 1:
                au(a, b); break;
            case 2:
                this.Yf(a) }
        this.bg(a) };
    var au = function(a, b) { if (!a.ma) { var c = Nr(a, "start", Np());
            c = a.Vf.j(c).j; var d = { id: "lidarv" };
            d.r = b;
            d.sv = "933";
            null !== jt && (d.v = jt);
            fk(c, function(e, f) { return d[e] = "mtos" == e || "tos" == e ? f : encodeURIComponent(f) });
            b = ft();
            fk(b, function(e, f) { return d[e] = encodeURIComponent(f) });
            b = "//pagead2.googlesyndication.com/pagead/gen_204?" + fq(dq(new bq, d));
            jq(b);
            a.ma = !0 } };
    l = St.prototype;
    l.uj = function(a) { var b = a.D(a);
        b && (b = b.volume, a.ga = Ep(b) && 0 < b);
        Kr(a, 0); return Nr(a, "start", Np()) };
    l.Nc = function(a, b, c) { Xs(Us, [a], !Np()); return this.pb(a, b, c) };
    l.pb = function(a, b, c) { return Nr(a, c, Np()) };
    l.pj = function(a) { return bu(a, "firstquartile", 1) };
    l.rj = function(a) { a.ba = !0; return bu(a, "midpoint", 2) };
    l.vj = function(a) { return bu(a, "thirdquartile", 3) };
    l.mj = function(a) { var b = bu(a, "complete", 4);
        zr(a); return b };
    l.nj = function(a) { a.Aa = 3; return Nr(a, "error", Np()) };
    var bu = function(a, b, c) { Xs(Us, [a], !Np());
        Kr(a, c);
        4 != c && Jr(a.J, c, a.ge); return Nr(a, b, Np()) };
    l = St.prototype;
    l.uh = function(a, b, c) { b = Np();
        2 != a.Aa || b || (a.Da().H = pp());
        Xs(Us, [a], !b);
        2 == a.Aa && (a.Aa = 1); return Nr(a, c, b) };
    l.tj = function(a, b) { b = this.Nc(a, b || {}, "skip");
        zr(a); return b };
    l.qj = function(a, b) { Lq(a, !0); return this.Nc(a, b || {}, "fullscreen") };
    l.oj = function(a, b) { Lq(a, !1); return this.Nc(a, b || {}, "exitfullscreen") };
    l.Uf = function(a, b, c) { b = a.Da();
        b.K = or(b, pp(), 1 != a.Aa);
        Xs(Us, [a], !Np());
        1 == a.Aa && (a.Aa = 2); return Nr(a, c, Np()) };
    l.sj = function(a) { Xs(Us, [a], !Np()); return a.l() };
    l.If = function(a) { Xs(Us, [a], !Np());
        this.th(a);
        zr(a); return a.l() };
    var Rt = function(a) { bt(function() { var b = cu();
                null != a.l && (b.sdk = a.l); var c = Fl(Fs);
                null != c.j && (b.avms = c.j.getName()); return b }) },
        du = function(a, b, c, d) { var e = $r(bs, c);
            null !== e && e.Ba !== b && (a.A(e), e = null);
            e || (b = a.D(c, pp(), !1, b), 0 == bs.l.length && (uo().B = 79463069), gs([b]), e = b, e.B = Zt(a), d && (e.Tb = d)); return e };
    St.prototype.J = function() {};
    var fu = function(a, b) { b.H = 0; for (var c in tp) null == a[c] && (b.H |= tp[c]);
        eu(a, "currentTime");
        eu(a, "duration") };
    l = St.prototype;
    l.Yf = function() {};
    l.th = function() {};
    l.yg = function() {};
    l.bg = function() {};
    l.yf = function() {};
    l.Xg = function() { this.j || (this.j = this.yf()); return null == this.j || this.o ? new vt : new Bt(this.j) };
    l.xf = function() { return new wt };
    var eu = function(a, b) { var c = a[b];
            void 0 !== c && 0 < c && (a[b] = Math.floor(1E3 * c)) },
        cu = function() { var a = Mp(),
                b = {},
                c = {},
                d = {}; return Object.assign({}, (b.sv = "933", b), null !== jt && (c.v = jt, c), (d["if"] = a.o ? "1" : "0", d.nas = String(bs.j.length), d)) };
    var gu = function(a) { qr.call(this, "audio_audible", a) };
    u(gu, qr);
    gu.prototype.j = function(a) { return 4 == a.ee() };
    var hu = function(a) { rr.call(this, "audio_measurable", a) };
    u(hu, rr);
    hu.prototype.j = function(a) { a = a.ee(); return 3 == a || 4 == a };
    var iu = function() { yt.apply(this, arguments) };
    u(iu, yt);
    iu.prototype.l = function() { return new hu(this.j) };
    iu.prototype.o = function() { return [new gu(this.j)] };
    var ju = function() {};
    u(ju, gr);
    ju.prototype.j = function(a) {!a || 4 !== a.vs && 5 !== a.vs || (a = Object.assign({}, a, { vs: 3 })); var b = new fr;
        b.j = hr(a, dr);
        b.l = hr(a, er); return b };
    var ku = function(a) { this.l = a };
    ku.prototype.report = function(a, b) { var c = this.j(b); if ("function" === typeof c) { var d = {}; var e = {};
            d = Object.assign({}, null !== jt && (d.v = jt, d), (e.sv = "933", e.cb = it, e.e = lu(a), e));
            e = Nr(b, a, Np());
            qf(d, e);
            b.Lh[a] = e;
            d = 2 == b.Ua() ? hq(d).join("&") : b.Vf.j(d).j; try { return c(b.Ba, d, a), 0 } catch (f) { return 2 } } else return 1 };
    var lu = function(a) { var b = mt(a) ? "custom_metric_viewable" : a;
        a = jf(function(c) { return c == b }); return xp[a] };
    ku.prototype.j = function() { return La(this.l) };
    var mu = function(a, b) { this.l = a;
        this.o = b };
    u(mu, ku);
    mu.prototype.j = function(a) { if (!a.Tb) return ku.prototype.j.call(this, a); if (this.o[a.Tb]) return function() {};
        ip(393, Error()); return null };
    var nu = function() { St.call(this);
        this.C = void 0;
        this.U = null;
        this.O = !1;
        this.F = {};
        this.I = 0;
        this.H = "ACTIVE_VIEW_TRAFFIC_TYPE_UNSPECIFIED" };
    u(nu, St);
    nu.prototype.B = function(a, b) { var c = this,
            d = Fl(Fs); if (null != d.j) switch (d.j.getName()) {
            case "nis":
                var e = ou(this, a, b); break;
            case "gsv":
                e = pu(this, a, b); break;
            case "exc":
                e = qu(this, a) }
        e || (b.opt_overlayAdElement ? e = void 0 : b.opt_adElement && (e = du(this, a, b.opt_adElement, b.opt_osdId)));
        e && 1 == e.Ua() && (e.D == Bg && (e.D = function(f) { return c.yg(f) }), ru(this, e, b)); return e };
    var ru = function(a, b, c) { c = c.opt_configurable_tracking_events;
        null != a.j && Array.isArray(c) && Ut(a, c, b) };
    nu.prototype.yg = function(a) {
        a.l = 0;
        a.L = 0;
        if ("h" == a.B || "n" == a.B) { if (uo().A) var b = La("ima.bridge.getVideoMetadata");
            else if (a.Tb && tu(this)) { var c = this.F[a.Tb];
                c ? b = function(e) { return uu(c, e) } : null !== c && ip(379, Error()) } else b = La("ima.common.getVideoMetadata"); if ("function" === typeof b) try { var d = b(a.Ba) } catch (e) { a.l |= 4 } else a.l |= 2 } else if ("b" == a.B)
            if (b = La("ytads.bulleit.getVideoMetadata"), "function" === typeof b) try { d = b(a.Ba) } catch (e) { a.l |= 4 } else a.l |= 2;
            else if ("ml" == a.B)
            if (b = La("ima.common.getVideoMetadata"),
                "function" === typeof b) try { d = b(a.Ba) } catch (e) { a.l |= 4 } else a.l |= 2;
            else a.l |= 1;
        a.l || (void 0 === d ? a.l |= 8 : null === d ? a.l |= 16 : lf(d) ? a.l |= 32 : null != d.errorCode && (a.L = d.errorCode, a.l |= 64));
        null == d && (d = {});
        fu(d, a);
        Ep(d.volume) && Ep(this.C) && (d.volume *= this.C);
        return d
    };
    var pu = function(a, b, c) { var d = Zr(bs, b);
            d || (d = c.opt_nativeTime || -1, d = Tt(a, b, Zt(a), d), c.opt_osdId && (d.Tb = c.opt_osdId)); return d },
        ou = function(a, b, c) { var d = Zr(bs, b);
            d || (d = Tt(a, b, "n", c.opt_nativeTime || -1)); return d },
        qu = function(a, b) { var c = Zr(bs, b);
            c || (c = Tt(a, b, "h", -1)); return c };
    nu.prototype.yf = function() { if (tu(this)) return new mu("ima.common.triggerExternalActivityEvent", this.F); var a = vu(this); return null != a ? new ku(a) : null };
    var vu = function(a) { var b = uo(); switch (Zt(a)) {
            case "b":
                return "ytads.bulleit.triggerExternalActivityEvent";
            case "n":
                return "ima.bridge.triggerExternalActivityEvent";
            case "h":
                if (b.A) return "ima.bridge.triggerExternalActivityEvent";
            case "m":
            case "ml":
                return "ima.common.triggerExternalActivityEvent" } return null };
    nu.prototype.Yf = function(a) {!a.j && a.gb && $t(this, a, "overlay_unmeasurable_impression") && (a.j = !0) };
    nu.prototype.th = function(a) { a.Bh && (a.Hb() ? $t(this, a, "overlay_viewable_end_of_session_impression") : $t(this, a, "overlay_unviewable_impression"), a.Bh = !1) };
    var wu = function(a, b, c, d) {
        c = void 0 === c ? {} : c;
        var e = {};
        qf(e, { opt_adElement: void 0, opt_fullscreen: void 0 }, c);
        var f = a.B(b, c);
        c = f ? f.Vf : a.xf();
        if (e.opt_bounds) return c.j(lt("ol", d));
        if (void 0 !== d)
            if (void 0 !== kt(d))
                if (et) a = lt("ue", d);
                else if (Xt(a), "i" == dt) a = lt("i", d), a["if"] = 0;
        else if (b = a.B(b, e)) {
            b: {
                "i" == dt && (b.gb = !0, a.bg(b));f = e.opt_fullscreen;void 0 !== f && Lq(b, !!f);
                var g;
                if (g = !Mp().l && !Ip() && Go(Mo().l)) { switch (b.Ua()) {
                        case 1:
                            au(b, "pv"); break;
                        case 2:
                            a.Yf(b) }
                    Yt("pv") }
                f = d.toLowerCase();
                if (g = !g) c: {
                    if (ro(uo().featureSet,
                            "ssmol") && (g = a.o, "loaded" === f)) break c;g = Xb(up, f)
                }
                if (g && 0 == b.Aa) {
                    "i" != dt && (Us.done = !1);
                    g = void 0 !== e ? e.opt_nativeTime : void 0;
                    np = g = "number" === typeof g ? g : pp();
                    b.gd = !0;
                    var h = Np();
                    b.Aa = 1;
                    b.wa = {};
                    b.wa.start = !1;
                    b.wa.firstquartile = !1;
                    b.wa.midpoint = !1;
                    b.wa.thirdquartile = !1;
                    b.wa.complete = !1;
                    b.wa.resume = !1;
                    b.wa.pause = !1;
                    b.wa.skip = !1;
                    b.wa.mute = !1;
                    b.wa.unmute = !1;
                    b.wa.viewable_impression = !1;
                    b.wa.measurable_impression = !1;
                    b.wa.fully_viewable_audible_half_duration_impression = !1;
                    b.wa.fullscreen = !1;
                    b.wa.exitfullscreen = !1;
                    b.zf = 0;
                    h || (b.Da().H = g);
                    Xs(Us, [b], !h)
                }(g = b.xc[f]) && jr(b.ta, g);Xb(vp, f) && b.lc && b.lc.B(b, null);
                switch (b.Ua()) {
                    case 1:
                        var k = mt(f) ? a.L.custom_metric_viewable : a.L[f]; break;
                    case 2:
                        k = a.Y[f] }
                if (k && (d = k.call(a, b, e, d), void 0 !== d)) { e = lt(void 0, f);
                    qf(e, d);
                    d = e; break b }
                d = void 0
            }
            3 == b.Aa && a.A(b);a = d
        }
        else a = lt("nf", d);
        else a = void 0;
        else et ? a = lt("ue") : f ? (a = lt(), qf(a, Mr(f, !0, !1, !1))) : a = lt("nf");
        return "string" === typeof a ? c.j() : c.j(a)
    };
    nu.prototype.J = function(a) { this.o && 1 == a.Ua() && xu(this, a) };
    nu.prototype.bg = function(a) { this.o && 1 == a.Ua() && xu(this, a) };
    var xu = function(a, b) { var c; if (b.Tb && tu(a)) { var d = a.F[b.Tb];
                d ? c = function(f, g) { yu(d, f, g) } : null !== d && ip(379, Error()) } else c = La("ima.common.triggerViewabilityMeasurementUpdate"); if ("function" === typeof c) { var e = Hr(b);
                e.nativeVolume = a.C;
                c(b.Ba, e) } },
        tu = function(a) { return uo().A || "h" != Zt(a) && "m" != Zt(a) ? !1 : 0 != a.I };
    nu.prototype.D = function(a, b, c, d) { if (ro(uo().featureSet, "ima_tt")) { var e = ro(uo().featureSet, "mm"),
                f = {};
            (e = (f[Zn.Sh] = "ACTIVE_VIEW_TRAFFIC_TYPE_AUDIO", f[Zn.Ci] = "ACTIVE_VIEW_TRAFFIC_TYPE_VIDEO", f)[e]) && e && (this.H = e); "ACTIVE_VIEW_TRAFFIC_TYPE_UNSPECIFIED" === this.H && ip(1044, Error()) }
        a = St.prototype.D.call(this, a, b, c, d);
        this.O && (b = this.U, null == a.o && (a.o = new Tq), b.j[a.Ba] = a.o, a.o.B = Pr); return a };
    nu.prototype.A = function(a) { a && 1 == a.Ua() && this.O && delete this.U.j[a.Ba]; return St.prototype.A.call(this, a) };
    nu.prototype.Xg = function() { this.j || (this.j = this.yf()); return null == this.j || this.o ? new vt : "ACTIVE_VIEW_TRAFFIC_TYPE_AUDIO" === this.H ? new iu(this.j) : new Bt(this.j) };
    nu.prototype.xf = function() { return "ACTIVE_VIEW_TRAFFIC_TYPE_AUDIO" === this.H ? new ju : new wt };
    var zu = function(a) { var b = {}; return b.viewability = a.j, b.googleViewability = a.l, b },
        Au = function(a, b, c) { c = void 0 === c ? {} : c;
            a = wu(Fl(nu), b, c, a); return zu(a) },
        Bu = hp(193, Au, void 0, cu);
    Ka("Goog_AdSense_Lidar_sendVastEvent", Bu);
    var Cu = hp(194, function(a, b) { b = void 0 === b ? {} : b;
        a = wu(Fl(nu), a, b); return zu(a) });
    Ka("Goog_AdSense_Lidar_getViewability", Cu);
    var Du = hp(195, function() { return Oo() });
    Ka("Goog_AdSense_Lidar_getUrlSignalsArray", Du);
    var Eu = hp(196, function() { return JSON.stringify(Oo()) });
    Ka("Goog_AdSense_Lidar_getUrlSignalsList", Eu);
    var Gu = function(a) { C.call(this, a, -1, Fu) };
    u(Gu, C);
    var Fu = [3];
    var Iu = function(a) { C.call(this, a, -1, Hu) };
    u(Iu, C);
    var Ju = function(a, b) { return Hd(a, 1, b) },
        Ku = function(a, b) { return Hd(a, 2, b) },
        Lu = function(a, b) { return Hd(a, 3, b) },
        Mu = function(a, b) { Hd(a, 4, b) },
        Hu = [1, 2, 3, 4];
    var Nu = function(a) { C.call(this, a) };
    u(Nu, C);
    var Pu = function(a) { C.call(this, a, -1, Ou) };
    u(Pu, C);
    Pu.prototype.getVersion = function() { return Pd(this, 1) };
    var Qu = function(a, b) { return Id(a, 1, b, 0) },
        Ru = function(a, b) { return Nd(a, 2, b) },
        Su = function(a, b) { return Nd(a, 3, b) },
        Tu = function(a, b) { return Id(a, 4, b, 0) },
        Uu = function(a, b) { return Id(a, 5, b, 0) },
        Vu = function(a, b) { return Id(a, 6, b, 0) },
        Wu = function(a, b) { return Id(a, 7, b, "") },
        Xu = function(a, b) { return Id(a, 8, b, 0) },
        Yu = function(a, b) { return Id(a, 9, b, 0) },
        Zu = function(a, b) { return Id(a, 10, b, !1) },
        $u = function(a, b) { return Id(a, 11, b, !1) },
        av = function(a, b) { return Hd(a, 12, b) },
        bv = function(a, b) { return Hd(a, 13, b) },
        cv = function(a, b) {
            return Hd(a,
                14, b)
        },
        dv = function(a, b) { return Id(a, 15, b, !1) },
        ev = function(a, b) { return Id(a, 16, b, "") },
        fv = function(a, b) { return Hd(a, 17, b) },
        gv = function(a, b) { return Hd(a, 18, b) },
        hv = function(a, b) { return Od(a, 19, b) },
        Ou = [12, 13, 14, 17, 18, 19];
    var iv = function(a) { C.call(this, a) };
    u(iv, C);
    var jv = "a".charCodeAt(),
        kv = df({ ul: 0, tl: 1, ql: 2, ll: 3, rl: 4, ml: 5, sl: 6, ol: 7, pl: 8, kl: 9, nl: 10 }),
        lv = df({ wl: 0, xl: 1, vl: 2 });
    var mv = function(a) { if (/[^01]/.test(a)) throw Error("Input bitstring " + a + " is malformed!");
            this.l = a;
            this.j = 0 },
        ov = function(a) { a = nv(a, 36); var b = new Nu;
            b = Id(b, 1, Math.floor(a / 10), 0); return Id(b, 2, a % 10 * 1E8, 0) },
        pv = function(a) { return String.fromCharCode(jv + nv(a, 6)) + String.fromCharCode(jv + nv(a, 6)) },
        tv = function(a) { var b = nv(a, 16); return !0 === !!nv(a, 1) ? (a = qv(a), a.forEach(function(c) { if (c > b) throw Error("ID " + c + " is past MaxVendorId " + b + "!"); }), a) : rv(a, b) },
        uv = function(a) {
            for (var b = [], c = nv(a, 12); c--;) {
                var d = nv(a,
                        6),
                    e = nv(a, 2),
                    f = qv(a),
                    g = b,
                    h = g.push,
                    k = new Gu;
                d = Id(k, 1, d, 0);
                e = Id(d, 2, e, 0);
                f = Hd(e, 3, f);
                h.call(g, f)
            }
            return b
        },
        qv = function(a) { for (var b = nv(a, 12), c = []; b--;) { var d = !0 === !!nv(a, 1),
                    e = nv(a, 16); if (d)
                    for (d = nv(a, 16); e <= d; e++) c.push(e);
                else c.push(e) }
            c.sort(function(f, g) { return f - g }); return c },
        rv = function(a, b, c) { for (var d = [], e = 0; e < b; e++)
                if (nv(a, 1)) { var f = e + 1; if (c && -1 === c.indexOf(f)) throw Error("ID: " + f + " is outside of allowed values!");
                    d.push(f) }
            return d },
        nv = function(a, b) {
            if (a.j + b > a.l.length) throw Error("Requested length " +
                b + " is past end of string.");
            var c = a.l.substring(a.j, a.j + b);
            a.j += b;
            return parseInt(c, 2)
        };
    mv.prototype.skip = function(a) { this.j += a };
    var vv = function(a) { try { var b = Tc(a).map(function(f) { return f.toString(2).padStart(8, "0") }).join(""),
                c = new mv(b); if (3 !== nv(c, 3)) return null; var d = Ku(Ju(new Iu, rv(c, 24, kv)), rv(c, 24, kv)),
                e = nv(c, 6);
            0 !== e && Mu(Lu(d, rv(c, e)), rv(c, e)); return d } catch (f) { return null } };
    var wv = function(a) { try { var b = Tc(a).map(function(d) { return d.toString(2).padStart(8, "0") }).join(""),
                c = new mv(b); return hv(gv(fv(ev(dv(cv(bv(av($u(Zu(Yu(Xu(Wu(Vu(Uu(Tu(Su(Ru(Qu(new Pu, nv(c, 6)), ov(c)), ov(c)), nv(c, 12)), nv(c, 12)), nv(c, 6)), pv(c)), nv(c, 12)), nv(c, 6)), !!nv(c, 1)), !!nv(c, 1)), rv(c, 12, lv)), rv(c, 24, kv)), rv(c, 24, kv)), !!nv(c, 1)), pv(c)), tv(c)), tv(c)), uv(c)) } catch (d) { return null } };
    var yv = function(a) { if (!a) return null; var b = a.split("."); if (4 < b.length) return null;
            a = wv(b[0]); if (!a) return null; var c = new iv;
            a = Nd(c, 1, a);
            b.shift();
            b = p(b); for (c = b.next(); !c.done; c = b.next()) switch (c = c.value, xv(c)) {
                case 1:
                case 2:
                    break;
                case 3:
                    c = vv(c); if (!c) return null;
                    Nd(a, 2, c); break;
                default:
                    return null }
            return a },
        xv = function(a) { try { var b = Tc(a).map(function(c) { return c.toString(2).padStart(8, "0") }).join(""); return nv(new mv(b), 3) } catch (c) { return -1 } };
    var zv = function(a, b) { var c = {}; if (Array.isArray(b) && 0 !== b.length) { b = p(b); for (var d = b.next(); !d.done; d = b.next()) d = d.value, c[d] = -1 !== a.indexOf(d) } else
            for (a = p(a), d = a.next(); !d.done; d = a.next()) c[d.value] = !0;
        delete c[0]; return c };
    var Av = new function(a, b) { this.flag = a;
            this.defaultValue = void 0 === b ? !1 : b }(432946749),
        Bv = new function(a, b) { b = void 0 === b ? [] : b;
            this.flag = a;
            this.defaultValue = b }(1932);
    var Cv = /^((market|itms|intent|itms-appss):\/\/)/i;
    var Dv = function() { var a;
        this.j = a = void 0 === a ? {} : a };
    Dv.prototype.reset = function() { this.j = {} };
    var Ev = function(a) { return /^\s*$/.test(a) ? !1 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, "")) },
        Fv = function(a) { try { return v.JSON.parse(a) } catch (b) {}
            a = String(a); if (Ev(a)) try { return eval("(" + a + ")") } catch (b) {}
            throw Error("Invalid JSON string: " + a); },
        Gv = function(a) { this.j = a },
        Iv = function(a, b) {
            var c = [];
            Hv(a, b, c);
            return c.join("")
        },
        Hv = function(a, b, c) {
            if (null == b) c.push("null");
            else {
                if ("object" == typeof b) {
                    if (Array.isArray(b)) { var d = b;
                        b = d.length;
                        c.push("["); for (var e = "", f = 0; f < b; f++) c.push(e), e = d[f], Hv(a, a.j ? a.j.call(d, String(f), e) : e, c), e = ",";
                        c.push("]"); return }
                    if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                    else {
                        c.push("{");
                        f = "";
                        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (e = b[d], "function" != typeof e && (c.push(f), Jv(d, c), c.push(":"), Hv(a, a.j ? a.j.call(b, d,
                            e) : e, c), f = ","));
                        c.push("}");
                        return
                    }
                }
                switch (typeof b) {
                    case "string":
                        Jv(b, c); break;
                    case "number":
                        c.push(isFinite(b) && !isNaN(b) ? String(b) : "null"); break;
                    case "boolean":
                        c.push(String(b)); break;
                    case "function":
                        c.push("null"); break;
                    default:
                        throw Error("Unknown type: " + typeof b); }
            }
        },
        Kv = { '"': '\\"', "\\": "\\\\", "/": "\\/", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "\t": "\\t", "\v": "\\u000b" },
        Lv = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g,
        Jv = function(a, b) {
            b.push('"', a.replace(Lv,
                function(c) { var d = Kv[c];
                    d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).slice(1), Kv[c] = d); return d }), '"')
        };
    var Mv = "://secure-...imrworldwide.com/ ://cdn.imrworldwide.com/ ://aksecure.imrworldwide.com/ ://[^.]*.moatads.com ://youtube[0-9]+.moatpixel.com ://pm.adsafeprotected.com/youtube ://pm.test-adsafeprotected.com/youtube ://e[0-9]+.yt.srs.doubleverify.com www.google.com/pagead/xsul www.youtube.com/pagead/slav".split(" "),
        Nv = /\bocr\b/,
        Ov = 0,
        Pv = {};

    function Qv(a) { if (w(D(a))) return !1; if (0 <= a.indexOf("://pagead2.googlesyndication.com/pagead/gen_204?id=yt3p&sr=1&")) return !0; try { var b = new K(a) } catch (c) { return null != Ub(Mv, function(d) { return 0 < a.search(d) }) } return b.D().match(Nv) ? !0 : null != Ub(Mv, function(c) { return null != a.match(c) }) }

    function Rv(a, b) { if (a && (a = Sv(a), !w(a))) { var c = 'javascript:"<body><img src=\\""+' + a + '+"\\"></body>"';
            b ? Tv(function(d) { Uv(d ? c : 'javascript:"<body><object data=\\""+' + a + '+"\\" type=\\"text/html\\" width=1 height=1 style=\\"visibility:hidden;\\"></body>"') }) : Uv(c) } }

    function Uv(a) { var b = kh("IFRAME", { src: a, style: "display:none" });
        a = Zg(b).body; var c = Qi(function() { hi(d);
            ph(b) }, 15E3); var d = Yh(b, ["load", "error"], function() { Qi(function() { Ri(c);
                ph(b) }, 5E3) });
        a.appendChild(b) }

    function Tv(a) { var b = Pv.imageLoadingEnabled; if (null != b) a(b);
        else { var c = !1;
            Vv(function(d, e) { delete Pv[e];
                c || (c = !0, null == Pv.imageLoadingEnabled && (Pv.imageLoadingEnabled = d), a(d)) }) } }

    function Vv(a) { var b = new Image,
            c = "" + Ov++;
        Pv[c] = b;
        b.onload = function() { clearTimeout(d);
            a(!0, c) }; var d = setTimeout(function() { a(!1, c) }, 300);
        b.src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" }

    function Wv(a) { if (a) { var b = lh(document, "OBJECT");
            b.data = a;
            b.width = "1";
            b.height = "1";
            b.style.visibility = "hidden"; var c = "" + Ov++;
            Pv[c] = b;
            b.onload = b.onerror = function() { delete Pv[c] };
            document.body.appendChild(b) } }

    function Xv(a) { if (a) { var b = new Image,
                c = "" + Ov++;
            Pv[c] = b;
            b.onload = b.onerror = function() { delete Pv[c] };
            b.src = a } }

    function Yv(a, b) { a && (b ? Tv(function(c) { c ? Xv(a) : Wv(a) }) : Xv(a)) }

    function Sv(a) { a = If(Mf(a) || Nf); if ("about:invalid#zClosurez" === a) return "";
        a = gg(ig(a)).toString(); return Ig(Iv(new Gv, a)) };
    var Zv = function(a, b, c) { this.o = a;
        this.l = b;
        this.j = c };
    var $v = function(a, b, c, d, e) { this.url = a;
        this.htmlResource = b;
        this.apiFramework = void 0 === d ? null : d;
        this.mimeType = void 0 === c ? null : c;
        this.Oc = !(void 0 === e || !e) };
    var aw = function(a, b, c) { var d = void 0 === c ? {} : c;
        c = void 0 === d.offsetMs ? null : d.offsetMs;
        d = void 0 === d.qc ? null : d.qc;
        this.eventType = a;
        this.url = b;
        this.offsetMs = c;
        this.qc = d };
    var bw = function(a, b, c, d) { this.j = a;
            this.url = b;
            this.o = void 0 === c ? null : c;
            this.l = void 0 === d ? null : d },
        cw = function(a) { var b = null,
                c = null;
            a.offsetMs ? b = parseInt(a.offsetMs / 1E3, 10) : a.qc && (c = a.qc); return new bw(a.eventType, a.url, b, c) };
    var dw = function() { this.trackingEvents = new Map;
        this.extensions = new Map;
        this.l = [];
        this.adTitle = this.id = null;
        this.adType = "video";
        this.Xb = this.o = null;
        this.Fb = [] };
    dw.prototype.getId = function() { return this.id };
    var ew = function(a, b) { a.trackingEvents.has(b.j) ? a.trackingEvents.get(b.j).push(b) : a.trackingEvents.set(b.j, [b]) };
    var gw = function(a, b, c, d, e) { this.id = a;
        this.M = b;
        this.A = c;
        this.j = !1;
        this.o = d;
        this.l = e;
        this.A && fw(this) };
    gw.prototype.isSelected = function() { return this.j || this.A };
    var fw = function(a) { if (a.o && a.l) { var b = a.o;
                b && Object.assign(a.l.j, b) } },
        hw = function() { this.j = [] },
        iw = function() { this.j = new Map;
            this.l = !1;
            this.B = new hw;
            this.C = new gw(0, 0, !1);
            this.o = [this.B];
            this.A = new Dv },
        P = function(a) {
            var b = jw;
            if (b.l || b.j.has(a.id) || null == a.M && null == a.control || 0 == a.condition) return b.C;
            var c = b.B;
            if (null != a.control)
                for (var d = p(b.o), e = d.next(); !e.done; e = d.next()) { if (e = e.value, e.j.includes(a.control)) { c = e; break } } else null != a.layer && (c = a.layer);
            d = 0;
            null != a.control ? d = a.control.M : null != a.M &&
                (d = a.M);
            a = new gw(a.id, d, !!a.Jm, a.flags, b.A);
            c.j.push(a);
            b.o.includes(c) || b.o.push(c);
            b.j.set(a.id, a);
            return a
        },
        kw = function() { var a = jw; return [].concat(t(a.j.keys())).filter(function(b) { return this.j.get(b).isSelected() }, a) },
        lw = function() { return kw().sort().join(",") },
        mw = function(a) { var b = jw;
            b.l || (a.j(b.o, b.j), b.l = !0) };
    iw.prototype.reset = function() { for (var a = p(this.j), b = a.next(); !b.done; b = a.next()) b = p(b.value), b.next(), b.next().value.j = !1;
        this.l = !1;
        this.A.reset() };
    var jw = new iw,
        ow = function() { return nw.j.filter(function(a) { return a.isSelected() }).map(function(a) { return a.id }) };
    var pw = function() { this.S = {} },
        qw = null,
        rw = {},
        tw = (rw[8] = "google_prev_ad_formats_by_region", rw[9] = "google_prev_ad_slotnames_by_region", rw);
    var uw = ha(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"]),
        vw = function() { var a = void 0 === a ? "jserror" : a; var b = void 0 === b ? .01 : b; var c = void 0 === c ? Nk(uw) : c;
            this.l = a;
            this.o = !1;
            this.j = null;
            this.A = !1;
            this.D = Math.random();
            this.B = b;
            this.C = this.vb;
            this.H = c };
    l = vw.prototype;
    l.cg = function(a) { this.l = a };
    l.Je = function(a) { this.j = a };
    l.dg = function(a) { this.o = a };
    l.eg = function(a) { this.A = a };
    l.vb = function(a, b, c, d, e) { c = void 0 === c ? this.B : c;
        e = void 0 === e ? this.l : e; if ((this.A ? this.D : Math.random()) > c) return this.o;
        Tk(b) || (b = new Sk(b, { context: a, id: e })); if (d || this.j) b.meta = {}, this.j && this.j(b.meta), d && d(b.meta);
        v.google_js_errors = v.google_js_errors || [];
        v.google_js_errors.push(b);
        v.error_rep_loaded || (b = v.document, c = Ef(Bf(this.H).toString()), a = uk("SCRIPT", b), a.src = Bf(c), zg(a), (b = b.getElementsByTagName("script")[0]) && b.parentNode && b.parentNode.insertBefore(a, b), v.error_rep_loaded = !0); return this.o };
    l.tc = function(a, b, c) { try { return b() } catch (d) { if (!this.C(a, d, this.B, c, this.l)) throw d; } };
    l.He = function(a, b, c, d) { var e = this; return function() { var f = Ea.apply(0, arguments); return e.tc(a, function() { return b.apply(c, f) }, d) } };
    var ww = function(a) { a = a._google_rum_ns_ = a._google_rum_ns_ || {}; return a.pq = a.pq || [] };
    var xw = function(a, b, c) { pk(b, function(d, e) { var f = c && c[e];!d && 0 !== d || f || (a += "&" + encodeURIComponent(e) + "=" + encodeURIComponent(String(d)), c && (c[e] = !0)) }); return a },
        Ew = function(a, b, c, d, e, f, g, h) {
            f = void 0 === f ? Infinity : f;
            g = void 0 === g ? !1 : g;
            rl.call(this, a, h);
            var k = this;
            this.F = 0;
            this.L = f;
            this.V = b;
            this.J = c;
            this.T = d;
            this.aa = e;
            a = this.j.navigator;
            this.R = !("csi.gstatic.com" !== this.J || !a || !a.sendBeacon);
            this.B = {};
            this.G = {};
            this.j.performance && this.j.performance.now || yw(this, "dat", 1);
            a && a.deviceMemory && yw(this, "dmc",
                a.deviceMemory);
            this.j === this.j.top && yw(this, "top", 1);
            this.I = !g;
            this.K = function() { k.j.setTimeout(function() { return zw(k) }, 1100) };
            this.P = [];
            this.Y = function() { Aw(k) };
            this.ba = Dg(function() { zw(k) });
            this.ca = function() { var n = k.j.document;
                (null != n.hidden ? n.hidden : null != n.mozHidden ? n.mozHidden : null != n.webkitHidden && n.webkitHidden) && k.ba() };
            this.O = this.j.setTimeout(function() { return zw(k) }, 5E3);
            this.C = {};
            this.A = b.length + c.length + d.length + e.length + 3;
            this.o = 0;
            Ob(this.events, function(n) { return Bw(k, n) });
            this.U = [];
            b = ww(this.j);
            var m = function(n) { var r = n[0];
                n = n[1]; var q = r.length + n.length + 2;
                8E3 < k.A + k.o + q && zw(k);
                k.U.push([r, n]);
                k.o += q;
                6E3 <= k.A + k.o && zw(k); return 0 };
            Ob(b, function(n) { return m(n) });
            b.length = 0;
            b.push = m;
            Cw(this);
            Dw(this)
        };
    u(Ew, rl);
    var Dw = function(a) { "complete" === a.j.document.readyState ? a.j.setTimeout(function() { return zw(a) }, 0) : Yj(a.j, "load", a.K); var b = Eo(a.j.document); "undefined" !== typeof b && Yj(a.j, b, a.ca);
            Yj(a.j, "pagehide", a.Y) },
        yw = function(a, b, c) { c = String(c);
            a.A = null != a.B[b] ? a.A + (c.length - a.B[b].length) : a.A + (b.length + c.length + 2);
            a.B[b] = c },
        Fw = function(a) { null != a.B.uet && (a.A -= 3 + a.B.uet.length + 2, delete a.B.uet) },
        Gw = function(a, b, c, d, e) {
            e = void 0 === e ? "" : e;
            var f = null == a.C[b] ? b.length + c.length + 2 : d ? c.length + (void 0 === e ? "" : e).length :
                c.length - a.C[b].length;
            8E3 < a.A + a.o + f && (zw(a), f = b.length + c.length + 2);
            a.C[b] = d && null != a.C[b] ? a.C[b] + ("" + (void 0 === e ? "" : e) + c) : c;
            a.o += f;
            6E3 <= a.A + a.o && zw(a)
        },
        zw = function(a) { if (a.l && a.I) { try { if (a.o) { var b = a.C;
                        a.F++; var c = Hw(a, b);
                        b = !1; try { b = !!(a.R && a.j.navigator && a.j.navigator.sendBeacon(c, null)) } catch (d) { a.R = !1 }
                        b || wk(a.j, c);
                        Cw(a);
                        a.F === a.L && a.D() } } catch (d) {
                    (new vw).vb(358, d) }
                a.C = {};
                a.o = 0;
                a.events.length = 0;
                a.j.clearTimeout(a.O);
                a.O = 0 } },
        Hw = function(a, b) {
            var c = a.V + "//" + a.J + a.T + a.aa,
                d = {};
            c = xw(c, a.B, d);
            c = xw(c,
                b, d);
            b = a.j;
            b.google_timing_params && (c = xw(c, b.google_timing_params, d), b.google_timing_params = void 0);
            Ob(a.U, function(e) { var f = p(e);
                e = f.next().value;
                f = f.next().value; var g = {};
                c = xw(c, (g[e] = f, g)) });
            a.U.length = 0;
            return c
        },
        Cw = function(a) { yw(a, "puid", (a.F + 1).toString(36) + "~" + Xa().toString(36)) },
        Bw = function(a, b) {
            var c = "met." + b.type,
                d = "number" === typeof b.value ? Math.round(b.value).toString(36) : b.value,
                e = Math.round(b.duration);
            b = "" + b.label + (null != b.slotId ? "_" + b.slotId : "") + ("." + d) + (0 < e ? "_" + e.toString(36) : "") +
                (null != b.taskId ? "__" + Math.round(b.taskId).toString(36) : "");
            Gw(a, c, b, !0, "~")
        };
    Ew.prototype.H = function(a) { this.l && this.F < this.L && (rl.prototype.H.call(this, a), Bw(this, a)) };
    Ew.prototype.D = function() { rl.prototype.D.call(this);
        this.j.clearTimeout(this.O);
        this.o = this.O = 0;
        this.C = {};
        mf(this.G);
        mf(this.B);
        Zj(this.j, "load", this.K);
        Zj(this.j, "pagehide", this.Y) };
    var Aw = function(a) { yw(a, "uet", 2);
        Ob(a.P, function(b) { try { b() } catch (c) {} });
        ak(a.j);
        zw(a);
        Fw(a) };
    var Kw = function() {
        this.j = new Ew(1, "https:", "csi.gstatic.com", "/csi?v=2&s=", "ima", void 0, !0);
        if (qw) var a = qw;
        else { a = ((a = void 0 === a ? yk() : a) ? nk(a.master) ? a.master : null : null) || window; var b = a.google_persistent_state_async;
            a = null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? qw = b : a.google_persistent_state_async = qw = new pw }
        var c = yk(window);
        c ? (c ? (b = c.pageViewId, c = c.clientId, "string" === typeof c && (b += c.replace(/\D/g, "").substr(0, 6))) : b = null, b = +b) : (b = vk(window), (c = b.google_global_correlator) || (b.google_global_correlator =
            c = 1 + Math.floor(Math.random() * Math.pow(2, 43))), b = c);
        c = tw[7] || "google_ps_7";
        a = a.S;
        var d = a[c];
        a = void 0 === d ? a[c] = b : d;
        Iw(this, "c", a);
        Jw(this)
    };
    Kw.prototype.isLoggingEnabled = function() { return this.j.l };
    Kw.prototype.l = function() { var a = this.j;
        a.I = !0;
        zw(a) };
    var Q = function(a, b, c) { if (null != c) { a = a.j; var d = b + "=" + c;
                a.G[d] || (Gw(a, b, c, !1), 1E3 > d.length && (a.G[d] = !0)) } },
        Iw = function(a, b, c) { null != c && yw(a.j, b, c) },
        Lw = function(a) { var b = R();
            tl(b.j, a, ll() - 0) },
        Mw = function(a) { var b = R(),
                c = ml();
            c && tl(b.j, a, c, 0) },
        Jw = function(a) { Iw(a, "slotId", parseInt(a.j.B.c, 10) / 2) },
        R = function() { return Fl(Kw) };
    var Ow = function(a) { C.call(this, a, -1, Nw) };
    u(Ow, C);
    Ow.prototype.getId = function() { return Pd(this, 1) };
    var Nw = [2];
    var Qw = function(a) { C.call(this, a, -1, Pw) };
    u(Qw, C);
    var Pw = [2];
    var Sw = function(a) { C.call(this, a, -1, Rw) };
    u(Sw, C);
    var Uw = function(a) { C.call(this, a, -1, Tw) };
    u(Uw, C);
    var Rw = [1, 4, 2, 3],
        Tw = [2];
    var Vw = {},
        Ww = (Vw[47] = Lc, Vw);

    function Xw() { var a = Yw,
            b = Md(new Sw(Zw), Uw, 2);
        1 == b.length && 16 == Fd(b[0], 1, 0) && Md(b[0], Qw, 2).forEach(function(c) { var d = Fd(c, 1, 0),
                e = Kd(c, yl, 3),
                f = a[Fd(c, 4, 0)];
            Md(c, Ow, 2).forEach(function(g) { var h = d || Pd(g, 4),
                    k = g.getId(),
                    m = e || Kd(g, yl, 3);
                m = m ? Rd(m, 3, zl) : null;
                m = Ww[m];
                g = $w(Md(g, Dl, 2));
                P({ id: k, M: h, layer: f, condition: m, flags: g }) }) }) }

    function $w(a) { if (a.length) { var b = {};
            a.forEach(function(c) { var d = Jd(c, El),
                    e = Kd(c, Bl, 4);
                e && (c = Gl(c, d), d = Hl(e, d), b[c] = d) }); return b } };
    var ax = function(a) { this.ids = a };
    ax.prototype.j = function(a, b) { a = p(this.ids); for (var c = a.next(); !c.done; c = a.next())
            if (c = b.get(c.value)) c.j = !0, fw(c) };
    var bx = function(a, b) { this.ids = a;
        this.l = b };
    u(bx, ax);
    bx.prototype.j = function(a, b) { ax.prototype.j.call(this, a, b); var c = [];
        a = []; for (var d = p(this.ids), e = d.next(); !e.done; e = d.next()) e = e.value, b.get(e) ? c.push(e) : a.push(e);
        b = c.map(String).join(",") || "0";
        a = a.map(String).join(",") || "0";
        Q(R(), "sei", b);
        Q(R(), "nsei", a);
        Q(R(), "bi", this.l) };
    var cx = function() { this.o = null;
            this.j = "missing-id";
            this.l = !1 },
        dx = function(a) { var b = null; try { b = document.getElementsByClassName("lima-exp-data") } catch (c) { return a.onError("missing-element", a.j), null } if (1 < b.length) return a.onError("multiple-elements", a.j), null;
            b = b[0]; return b ? b.innerHTML : (a.onError("missing-element", a.j), null) },
        fx = function() {
            var a = ex,
                b = dx(a);
            if (null !== b)
                if (Ev(b)) {
                    var c = JSON.parse(b);
                    b = c.experimentIds;
                    var d = c.binaryIdentifier;
                    c = c.adEventId;
                    var e = "string" === typeof d;
                    "string" == typeof c &&
                        Iw(R(), "qqid", c);
                    e && (a.j = d);
                    if ("string" !== typeof b) a.onError("missing-flags", a.j);
                    else { if (!e) a.onError("missing-binary-id", a.j);
                        a.o = b }
                } else a.onError("invalid-json", a.j)
        };
    cx.prototype.reset = function() { this.o = null;
        this.j = "missing-id" };
    var gx = function() { cx.apply(this, arguments) };
    u(gx, cx);
    gx.prototype.onError = function(a, b) { var c = R();
        Q(c, "eee", a);
        Q(c, "bi", b) };

    function hx(a) { return a.split(",").map(function(b) { return parseInt(b, 10) }).filter(function(b) { return !isNaN(b) }) };
    var nw = new hw,
        ix = new hw,
        jx = new hw,
        kx = new hw,
        lx = new hw,
        mx = new hw,
        nx = new hw,
        ox = new hw,
        px = new hw,
        qx = new hw,
        rx = new hw,
        sx = new hw;
    P({ id: 318475490, M: 0 });
    P({ id: 324123032, M: 0 });
    P({ id: 418572103, M: 0 });
    P({ id: 420706097, M: 10 });
    P({ id: 420706098, M: 10 });
    P({ id: 21062100, M: 0 });
    P({ id: 420706105, M: 0 });
    var tx = P({ id: 420706106, M: 0 });
    P({ id: 21064018, M: 0 });
    P({ id: 21064020, M: 0 });
    P({ id: 21064022, M: 0 });
    P({ id: 21064024, M: 0 });
    P({ id: 21064075, M: 0 });
    P({ id: 21064201, M: 0 });
    P({ id: 420706142, M: 0 });
    P({ id: 21064347, M: 0 });
    P({ id: 44745813, M: 0 });
    P({ id: 44746068, M: 0 });
    P({ id: 21064565, M: 0 });
    P({ id: 21064567, M: 0 });
    P({ id: 418572006, M: 10 });
    P({ id: 44768716, M: 10, layer: qx });
    P({ id: 44768717, M: 10, layer: qx });
    var ux = P({ id: 44744588, M: 10 }),
        vx = P({ id: 44747319, M: 10 });
    P({ id: 44740339, M: 10 });
    var wx = P({ id: 44740340, M: 10 });
    P({ id: 44749839, M: 0 });
    var xx = P({ id: 44749840, M: 0 });
    P({ id: 44749841, M: 0 });
    var yx = P({ id: 44749842, M: 0 });
    P({ id: 44749843, M: 1 });
    var zx = P({ id: 44749844, M: 1 });
    P({ id: 44749845, M: 1 });
    var Ax = P({ id: 44749846, M: 1 }),
        Bx = P({ id: 44714743, M: 0 });
    P({ id: 44719216, M: 0 });
    P({ id: 44730895, M: 10 });
    var Cx = P({ id: 44730896, M: 10 });
    P({ id: 44736292, M: 10 });
    var Dx = P({ id: 44736293, M: 10 });
    P({ id: 31061774, M: 10 });
    P({ id: 31061775, M: 10 });
    P({ id: 44715336, M: 10 });
    P({ id: 44729309, M: 10 });
    P({ id: 75259410, M: 0 });
    P({ id: 75259412, M: 0 });
    P({ id: 75259413, M: 0 });
    P({ id: 44725355, M: 50, layer: kx });
    P({ id: 44725356, M: 50, layer: kx });
    P({ id: 44724516, M: 0 });
    P({ id: 44726389, M: 10 });
    P({ id: 44752711, M: 50 });
    P({ id: 44752052, M: 50 });
    P({ id: 44752657, M: 50 });
    P({ id: 44730464, M: 10 });
    P({ id: 44730465, M: 10 });
    P({ id: 44733378, M: 10 });
    P({ id: 44727953, M: 0 });
    P({ id: 44729911, M: 0 });
    P({ id: 44730425, M: 0 });
    P({ id: 44730426, M: 0 });
    P({ id: 44733246, M: 10 });
    var Ex = P({ id: 44750823, M: 100, layer: mx }),
        Fx = P({ id: 44750824, M: 100, layer: mx });
    P({ id: 44750822, M: 100, layer: mx });
    P({ id: 44754420, M: 1E3, layer: ix });
    P({ id: 44737473, M: 10, layer: jx });
    var Gx = P({ id: 44771449, M: 10, layer: jx }),
        Hx = P({ id: 44771450, M: 10, layer: jx });
    P({ id: 44751889, M: 10 });
    P({ id: 44751890, M: 10 });
    P({ id: 44738437, M: 0, layer: nx });
    var Ix = P({ id: 44738438, M: 0, layer: nx });
    P({ id: 44752995, M: 10 });
    P({ id: 44752996, M: 10 });
    P({ id: 44748968, M: 10 });
    var Jx = P({ id: 44748969, M: 10 });
    P({ id: 44762627, M: 0 });
    P({ id: 44762628, M: 0 });
    P({ id: 44752538, M: 0 });
    P({ id: 44754608, M: 10 });
    P({ id: 44754609, M: 10 });
    P({ id: 44770964, M: 10 });
    var Kx = P({ id: 44770965, M: 10 });
    P({ id: 44770822, M: 10 });
    P({ id: 44770823, M: 10 });
    P({ id: 44770824, M: 10 });
    P({ id: 44770825, M: 10 });
    var Lx = P({ id: 44760950, M: 1E3, layer: ox }),
        Mx = P({ id: 75259414, M: 0 }),
        Nx = P({ id: 44762904, M: 1E3, layer: px });
    P({ id: 44731964, M: 50, layer: nw });
    P({ id: 44731965, M: 50, layer: nw });
    var Ox = P({ id: 44765701, M: 1E3, layer: rx });
    P({ id: 44767584, M: 0 });
    var Px, Qx = (null == (Px = window.document.featurePolicy) || Px.allowedFeatures().includes("attribution-reporting"), 0);
    P({ id: 44769484, M: Qx, layer: sx });
    P({ id: 44769485, M: Qx, layer: sx });
    var Rx = {},
        Yw = (Rx[32] = nw, Rx[35] = lx, Rx);
    Yw = void 0 === Yw ? {} : Yw;
    if (!/^\{+IMA_EXPERIMENT_STATE_JSPB\}+$/.test("{{IMA_EXPERIMENT_STATE_JSPB}}")) try { var Zw = JSON.parse("{{IMA_EXPERIMENT_STATE_JSPB}}");
        Zw instanceof Array && Xw() } catch (a) { Q(R(), "espe", a.message) }
    if ("undefined" === typeof window.v8_flag_map) { var ex = Fl(gx),
            Sx;
        ex.l || (fx(), ex.l = !0);
        Sx = ex.o; var Tx;
        ex.l || (fx(), ex.l = !0);
        Tx = ex.j; if (null != Sx) { var Ux = new bx(hx(Sx), Tx);
            mw(Ux) } };
    var Vx = function(a, b, c) { this.l = a;
        this.o = b;
        this.j = void 0 === c ? null : c };
    Vx.prototype.getName = function() { return this.l };
    var Wx = function() { if (window.MutationObserver) { var a = [];
            (new MutationObserver(function() { a.forEach(function(b) { return b() });
                a = [] })).observe(document.createTextNode(""), { characterData: !0 }) } };
    "function" === typeof Promise && -1 < String(Promise).indexOf("[native code]") || Wx();
    var Xx = function() { this.adPosition = 1;
        this.l = -1;
        this.j = this.o = 0;
        this.totalAds = 1 };
    Xx.prototype.getAdPosition = function() { return this.adPosition };
    Xx.prototype.getPodIndex = function() { return this.o };
    Xx.prototype.getTimeOffset = function() { return this.j };
    Xx.prototype.getTotalAds = function() { return this.totalAds };
    var Yx = function(a) { return (a = a.match(/^\w{2,3}([-_]|$)/)) ? a[0].replace(/[_-]/g, "") : "" };

    function Zx(a, b) { b = void 0 === b ? !1 : b;
        a = 0 > a ? 0 : a;
        a = b ? a : Math.round(a); if (b) { var c = Math.floor(a / 3600); if (Number.isFinite(c)) { c = String(c); var d = c.indexOf("."); - 1 === d && (d = c.length); var e = "-" === c[0] ? "-" : "";
                e && (c = c.substring(1));
                c = e + Qg("0", Math.max(0, 2 - d)) + c } else c = String(c);
            c += ":";
            d = 10 > Math.floor(a / 60) % 60 ? "0" : "" } else c = 3600 <= a ? Math.floor(a / 3600) + ":" : "", d = 10 > Math.floor(a / 60) % 60 && 3600 <= a ? "0" : ""; return "" + c + d + Math.floor(a / 60) % 60 + ":" + (10 > Math.floor(a % 60) ? "0" : "") + Math.floor(a % 60) + (b ? (a % 1).toFixed(3).slice(1) : "") }

    function $x(a, b) { return w(b) ? !1 : (new RegExp(a)).test(b) }

    function ay(a) { if (!a) return !1; switch (a.toLowerCase()) {
            case "true":
            case "1":
                return !0 } return !1 }

    function by(a) { var b = [""]; if (!a) return null;
        a = a.toLowerCase().replace("-", "_"); if (b.includes(a)) return a;
        a = Yx(a); return b.includes(a) ? a : null };
    var cy = { tm: 2, wm: 3, sm: 4, vm: 5, xm: 6, ym: 7, zm: 8, Am: 11, Bm: 12 };
    var dy = { om: "ultrahigh", fl: "high", Fl: "medium" },
        ey = new Set("disable_frequency_capping adgroups adsafe adsid adtest adk ad_type js alternate_ad_url is_amp mv an u_ah u_aw channel client u_cd ca_h ca_type ca_w cdm co tfcd correlator creatives ad_block debug_experiment_id disable_budget_throttling dlt dt jar gdpr cookie cookie_enabled addtl_consent gpic gpico u_his h_ch host ht_id idt frm image_size sdkv ltd wta sz u_java eid hl is_lat max_ad_duration media_url min_ad_duration msid ms rdid u_so npa num_ads u_nmime u_nplug omid_p osd output pucrd pvtf video_product_type pubf puo ptt trt idtype ref ea rdp retrieve_only u_h u_w sdk_apis sdki sdmax slotname sdr videoad_start_delay tfua t_pyv a3p cpm u_tz top unviewed_position_start url description_url cust_age cust_gender use_budget_filtering us_privacy gdpr_consent vconp vid_d video_format mpt mpv vpa vpmute vis".split(" "));
    /*

    Math.uuid.js (v1.4)
    http://www.broofa.com
    mailto:robert@broofa.com
    Copyright (c) 2010 Robert Kieffer
    Dual licensed under the MIT and GPL licenses.
    */
    var fy = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
        gy = function() { for (var a = Array(36), b = 0, c, d = 0; 36 > d; d++) 8 == d || 13 == d || 18 == d || 23 == d ? a[d] = "-" : 14 == d ? a[d] = "4" : (2 >= b && (b = 33554432 + 16777216 * Math.random() | 0), c = b & 15, b >>= 4, a[d] = fy[19 == d ? c & 3 | 8 : c]); return a.join("") };
    var hy = function() { this.adTagUrl = null;
            this.l = "0";
            this.o = this.j = "unknown";
            this.vastLoadTimeout = 5E3;
            this.contentTitle = this.contentKeywords = this.contentDuration = this.forceNonLinearFullSlot = this.nonLinearAdSlotHeight = this.nonLinearAdSlotWidth = this.linearAdSlotHeight = this.linearAdSlotWidth = null;
            this.transactionId = gy();
            this.omidAccessModeRules = {};
            this.A = this.pageUrl = null },
        iy = function(a, b) { a = a.clone();
            a.adTagUrl = b;
            a.adsResponse = null;
            a.A = !0; return a };
    hy.prototype.clone = function() {
        var a = new hy;
        a.l = this.l;
        a.j = this.j;
        a.o = this.o;
        a.adTagUrl = this.adTagUrl;
        a.adsResponse = this.adsResponse;
        a.vastLoadTimeout = this.vastLoadTimeout;
        a.linearAdSlotWidth = this.linearAdSlotWidth;
        a.linearAdSlotHeight = this.linearAdSlotHeight;
        a.nonLinearAdSlotWidth = this.nonLinearAdSlotWidth;
        a.nonLinearAdSlotHeight = this.nonLinearAdSlotHeight;
        a.forceNonLinearFullSlot = this.forceNonLinearFullSlot;
        a.contentDuration = this.contentDuration;
        a.contentKeywords = this.contentKeywords ? this.contentKeywords.slice() :
            null;
        a.contentTitle = this.contentTitle;
        a.transactionId = this.transactionId;
        a.omidAccessModeRules = this.omidAccessModeRules;
        a.pageUrl = this.pageUrl;
        return a
    };
    var ky = function(a) { K.call(this, a);
        this.H = new Map;
        a = this.o; var b = a.indexOf(";"),
            c = null;
        0 <= b ? (this.o = a.substring(0, b), c = a.substring(b + 1)) : this.o = a;
        jy(this, c) };
    u(ky, K);
    ky.prototype.toString = function() { return ly(this, K.prototype.toString.call(this)) };
    ky.prototype.D = function() { return "" };
    var jy = function(a, b) { w(D(b)) || b.split(";").forEach(function(c) { var d = c.indexOf("="); if (!(0 >= d)) { var e = Jg(c.substring(0, d));
                    c = Jg(c.substring(d + 1));
                    d = a.H.get(e);
                    null != d ? d.includes(c) || d.push(c) : d = [D(c)];
                    a.H.set(e, d) } }, a) },
        my = function(a, b) { if (w(D(b))) return null;
            a = a.H.get(b); return null != a ? a : null },
        ny = function(a, b, c) { w(D(b)) || (c = c.map(D), a.H.set(b, c)) },
        ly = function(a, b) { b = [D(b)];
            b.push.apply(b, t(oy(a))); return b.join(";") },
        oy = function(a) {
            var b = my(a, "ord");
            null == b ? b = [D(Date.now())] : w(D("ord")) || a.H.delete("ord");
            var c = [];
            a.H.forEach(function(d, e) { d.forEach(function(f) { c.push(e + "=" + f) }) });
            c.push("ord=" + b[0]);
            ny(a, "ord", b);
            return c
        };
    ky.prototype.clone = function() { return new ky(this.toString()) };

    function py() { try { var a = window.top.location.href } catch (b) { return 2 } return null == a ? 2 : a == window.document.location.href ? 0 : 1 }

    function qy(a, b) { b.forEach(function(c, d) { a.j.set(d, c) }) }

    function ry(a, b) { b = p(b.entries()); for (var c = b.next(); !c.done; c = b.next()) { var d = p(c.value);
            c = d.next().value;
            d = d.next().value;
            w(d) && a.j.remove(c) } }

    function sy(a) { tm(a, "https") }

    function ty(a) { var b;
        (b = uy(a) || vy(a) || wy(a) || yy(a) || zy(a)) || (a = new K(a), b = a.o, b = "pubads.g.doubleclick.net" === a.l && ($x("/ssai/", b) || $x("/ondemand/", b))); return b }

    function vy(a) { var b = new ky(a);
        a = b.l;
        b = ly(b, b.o); return !gb(a, ".g.doubleclick.net") && gb(a, "doubleclick.net") && $x("/(ad|pfad)[x|i|j]?/", b) }

    function yy(a) { return "bid.g.doubleclick.net" == (new K(a)).l }

    function uy(a) { a = new K(a); var b = a.o; return gb(a.l, "googleads.g.doubleclick.net") && $x("/pagead/(live/)?ads", b) }

    function wy(a) { a = new K(a); var b = a.o; return gb(a.l, "doubleclick.net") && $x("/gampad/(live/)?ads", b) }

    function zy(a) { a = new K(a); var b = a.o; return "ad.doubleclick.net" === a.l && $x("/dv3/adv", b) }

    function Ay(a) { var b = new Map; "unknown" != a.j && b.set("vpa", a.j); "unknown" != a.o && b.set("vpmute", "muted" == a.o ? "1" : "0"); "0" != a.l && b.set("vconp", a.l); return b };
    var Ey = function(a, b) {
            a = void 0 === a ? {} : a;
            b = void 0 === b ? new Map : b;
            By(b, "ADCOUNT", function() { var e = a.Wb; return (e = void 0 === e ? null : e) ? e.getAdPosition().toString() : "-1" });
            By(b, "AD_MT", function() { var e = a.ng;
                e = void 0 === e ? null : e; return null == e ? "-1" : Math.round(Math.max(0, 1E3 * e.l)).toString() });
            By(b, "ADPLAYHEAD", function() { var e = a.ng;
                e = void 0 === e ? null : e; return null == e ? "-1" : Zx(e.l, !0) });
            By(b, "ADSERVINGID", function() { var e = a.ad; return (e = (e = void 0 === e ? null : e) && e.Xb) ? e : "-1" });
            By(b, "ASSETURI", function() {
                var e = a.ng;
                e = void 0 === e ? null : e;
                return null == e ? "-1" : e.R
            });
            Cy(b, "CLICKPOS", "-1");
            By(b, "PODSEQUENCE", function() { var e = a.ad; return (e = void 0 === e ? null : e) && e.o ? e.o.toString() : "-1" });
            tx.isSelected() && Cy(b, "SDKV", "goog.define.default");
            var c = a,
                d = c.kk;
            c = c.lk;
            Cy(b, "UNIVERSALADID", d && c ? d + " " + c : "-1");
            Dy(a, b)
        },
        Dy = function(a, b) {
            a = void 0 === a ? {} : a;
            b = void 0 === b ? new Map : b;
            By(b, "ADTYPE", function() { var d = a.ad; return (d = void 0 === d ? null : d) ? d.adType : "-1" });
            Cy(b, "APPBUNDLE", a.appName || "-1");
            By(b, "BREAKMAXADS", function() {
                var d = a.Wb;
                return (d =
                    void 0 === d ? null : d) ? d.getTotalAds().toString() : "-1"
            });
            Cy(b, "BREAKMAXADLENGTH", "-1");
            By(b, "BREAKMAXDURATION", function() { var d = a.Wb; return (d = void 0 === d ? null : d) ? d.l.toString() : "-1" });
            Cy(b, "BREAKMINADLENGTH", "-1");
            Cy(b, "BREAKMINDURATION", "-1");
            By(b, "BREAKPOSITION", function() { var d = a.Wb;
                d = void 0 === d ? null : d;
                null == d ? d = "-1" : (d = d.getPodIndex(), d = 0 == d ? "1" : -1 == d ? "3" : "2"); return d });
            By(b, "CACHEBUSTING", Fy);
            Cy(b, "CLICKTYPE", a.clickType || "-1");
            var c = a;
            Cy(b, "CLIENTUA", Gy({ bd: c.bd, Yd: c.Yd, td: c.td, ud: c.ud }));
            Cy(b,
                "CONTENTID", "-1");
            Cy(b, "CONTENTURI", "-1");
            Cy(b, "DEVICEIP", "-1");
            Cy(b, "DEVICEUA", "-1");
            Cy(b, "DOMAIN", a.domain || Hy());
            Cy(b, "GDPRCONSENT", a.Df ? a.Df : "-1");
            Cy(b, "IFA", "-2");
            Cy(b, "IFATYPE", "-2");
            Cy(b, "INVENTORYSTATE", "-1");
            Cy(b, "LATLONG", "-1");
            By(b, "LIMITADTRACKING", function() { return "-1" });
            By(b, "MEDIAPLAYHEAD", function() { var d = a.Wb; return (d = void 0 === d ? null : d) ? d.getTimeOffset().toString() : "-1" });
            By(b, "OMIDPARTNER", function() {
                var d = a.mh,
                    e = a.nh;
                d = void 0 === d ? null : d;
                e = void 0 === e ? null : e;
                return null == d || null ==
                    e ? "-1" : d + "/" + e
            });
            Cy(b, "PAGEURL", a.pageUrl || Iy());
            Cy(b, "PLACEMENTTYPE", a.placementType || "-1");
            Cy(b, "PLAYERSIZE", "-1");
            Cy(b, "PLAYERSTATE", "-1");
            Cy(b, "REGULATIONS", "-1");
            Cy(b, "SERVERSIDE", "0");
            Cy(b, "SERVERUA", "-1");
            By(b, "TIMESTAMP", Jy);
            By(b, "TRANSACTIONID", function() { var d = a.Qa; return (d = void 0 === d ? null : d) ? d.transactionId.toString() : "-1" });
            Cy(b, "US_PRIVACY", a.Hh || "-1");
            a.Ub && Cy(b, "UACH", a.Ub);
            return b
        },
        Cy = function(a, b, c) { a.set(b, new Vx(b, { toString: function() { return c } })) },
        By = function(a, b, c) {
            a.set(b, new Vx(b, { toString: function() { return c() } }))
        },
        Ky = function(a, b) { b = void 0 === b ? new Map : b;
            b.set("ERRORCODE", new Vx("ERRORCODE", a)) },
        Gy = function(a) { var b = void 0 === a.bd ? null : a.bd,
                c = void 0 === a.Yd ? null : a.Yd,
                d = void 0 === a.td ? null : a.td;
            a = void 0 === a.ud ? null : a.ud; if (!b && !d) return "-1"; var e = "unknown";
            b && (e = b + (c ? "/" + c : ""));
            b = "";
            d && (b = " " + d + (a ? "/" + a : "")); return e + b },
        Fy = function() { return Math.round(1E8 * Math.random() + 1E8).toString().slice(1) },
        Hy = function() { var a = 2 == py() ? null : ih().top.location.hostname; return a ? a : "-1" },
        Iy = function() {
            var a =
                2 == py() ? null : ih().top.location.href;
            return a ? a : "-1"
        },
        Jy = function() { return (new Date).toISOString() };
    var Ly = /(?:\[|%5B)([a-zA-Z0-9_]+)(?:\]|%5D)/g,
        My = function(a, b) { return a.replace(Ly, function(c, d) { d = b.get(d); if (null == d) return c; if (null == d.j) var e = !0;
                else try { e = d.j(a) || !1 } catch (g) { e = !1 }
                if (e) { b: { try { var f = d.o.toString(); break b } catch (g) {}
                        f = null }
                    e = f;e = null == e || "" != e && w(D(e)) ? null : encodeURIComponent(e).replace(/%2C/g, ",") }
                else e = null; return null != e ? e : c }) };
    var Ny = function(a) { this.D = a },
        Oy = function(a, b) { return a.map(function(c) { return My(c, b) }) };
    var Qy = function(a, b, c) { c = void 0 === c ? [] : c;
        this.D = b; var d = this;
        this.H = a;
        this.F = c;
        this.j = new Map;
        this.l = new Map;
        this.o = new Map;
        this.C = [];
        this.A = this.B = -1;
        R().j.P.push(function() { return Py(d) }) };
    u(Qy, Ny);
    Qy.prototype.report = function(a, b) { b = void 0 === b ? Ry(this, a) : b;
        Sy(this, a, b || []) };
    var Sy = function(a, b, c) { if (Mx.isSelected()) { var d = [];
                a.C.forEach(function(e) { e = Ty(b, e);
                    void 0 !== e && d.push(e) });
                0 === d.length ? Uy(a, b, c) : Promise.all(d).then(function(e) { e = e[0];
                    Array.isArray(e) && e.every(function(f) { return "string" === typeof f }) ? Uy(a, b, e) : Uy(a, b, c) }) } else a.C.forEach(function(e) { return Ty(b, e) }), Uy(a, b, c) },
        Uy = function(a, b, c) {
            Vy(a, b) ? Wy(a, b, c) : Xy(a, b) && (c.filter(function(d) { return d.match(/\/aclk.*label=video_engaged_view/) }).length && ("complete" == b && Lw("evoace"), "progress" == b && Lw("evoape"),
                "engagedView" == b && Lw("evoaeve")), Yy(a, b, c))
        },
        Yy = function(a, b, c) { a.j.has(b) ? a.j.set(b, a.j.get(b) + 1) : a.j.set(b, 1); if (c.length) { var d = a.o,
                    e = a.F.includes(b);
                d = void 0 === d ? null : d;
                e = void 0 === e ? !1 : e;
                c = d ? Oy(c, d) : c;
                Zy(a.D, c, e) }
            e = null; "impression" === b ? e = "measurable_impression" : "measurable_impression" === b && (e = "viewable_impression");
            null != e && a.l.has(e) && (b = a.l.get(e) || [], a.l.delete(e), Yy(a, e, b)) },
        $y = function(a, b, c) {
            var d = a.H.get("progress");
            if (!(null == d || 0 >= d.length)) {
                var e = [],
                    f = a.B,
                    g = a.A;
                d.forEach(function(h) {
                    var k =
                        h.o,
                        m = h.l;
                    m && m <= 1E5 * b / c && m > a.A ? (g = m > g ? m : g, e.push(h.url)) : k && k <= b && k > a.B && (f = k > f ? k : f, e.push(h.url))
                });
                a.B = f;
                a.A = g;
                0 < e.length && a.report("progress", e)
            }
        },
        az = function(a, b) { a.o.set(b.getName(), b) },
        bz = function(a, b) { b.forEach(function(c) { return az(a, c) }) },
        cz = function(a, b) { a.C.push(b) },
        Wy = function(a, b, c) { var d = c;
            null != a.o && (d = Oy(c, a.o));
            a.l.has(b) ? d.forEach(function(e) { return void a.l.get(b).push(e) }) : a.l.set(b, d) },
        Vy = function(a, b) {
            if (a.j.has(b)) return !1;
            switch (b) {
                case "measurable_impression":
                    return !a.j.has("impression");
                case "viewable_impression":
                    return !a.j.has("impression") || !a.j.has("measurable_impression");
                default:
                    return !1
            }
        },
        Xy = function(a, b) { switch (b) {
                case "abandon":
                    return !a.j.has(b) && !a.j.has("skip") && !a.j.has("instreamAdComplete") && a.j.has("impression");
                case "instreamAdComplete":
                case "complete":
                    return !a.j.has(b) && !a.j.has("skip");
                case "mute":
                case "unmute":
                case "pause":
                case "resume":
                case "fullscreen":
                case "exitFullscreen":
                case "progress":
                case "error":
                case "click":
                case "expand":
                case "collapse":
                    return !0;
                default:
                    return !a.j.has(b) } },
        Ty = function(a, b) { try { var c = b(a); if ("object" === typeof c && "function" === typeof c.then) return c || Promise.resolve() } catch (d) {} },
        Ry = function(a, b) { return (a.H.get(b) || []).map(function(c) { return c.url }) },
        Py = function(a) { Q(R(), "rec", Array.from(a.j, function(b) { var c = p(b);
                b = c.next().value;
                c = c.next().value; return b + "-" + c }).join("|")) };
    var dz = {},
        ez = (dz.GOOGLE_VIEWABILITY = "://pubads.g.doubleclick.net ://googleads.g.doubleclick.net ://ad[.-]([a-z0-9]+.){0,1}doubleclick.net ://ade\\.googlesyndication\\.com ://pagead2.googlesyndication.com ://([a-z0-9]+[.])*youtube.com".split(" "), dz),
        fz = new Map,
        gz = function(a, b, c, d, e, f) {
            d = void 0 === d ? !1 : d;
            e = void 0 === e ? null : e;
            f = void 0 === f ? !1 : f;
            E.call(this);
            var g = this;
            this.queryId = e ? e : String(Math.floor(1E9 * Math.random()));
            this.l = b;
            this.j = c;
            this.F = d;
            this.H = f;
            this.A = null;
            this.o = new zo;
            this.C = (a = a.extensions.get(Zv)) ?
                a.l : "";
            this.B = a ? a.j : "";
            this.D = a ? a.o : [];
            cz(this.l, function(h) { g.G(h) });
            a = ow();
            vo(a);
            fz.set(this.queryId, this)
        };
    u(gz, E);
    var iz = function(a, b) { az(a.l, new Vx("VIEWABILITY", b.viewability));
        az(a.l, new Vx("GOOGLE_VIEWABILITY", b.googleViewability, function(c) { return function(d) { return hz(d, c) } }("GOOGLE_VIEWABILITY"))) };
    gz.prototype.G = function(a) { var b = this.queryId,
            c = this.A,
            d = this.D;
        d = void 0 === d ? [] : d; var e = {};
        e = (e.opt_fullscreen = this.j.F, e.opt_adElement = void 0, e); "start" == a && (e.opt_configurable_tracking_events = d);
        c && (e.opt_bounds = tj(c));
        a = Au(a, b, e);
        iz(this, a) };
    gz.prototype.je = function() { if (this.F && this.o.isValid()) { Mp().O = !0;
            Fl(nu); var a = this.o;
            uo().D = a }
        a = Fl(nu); var b = this.C;
        a.G = b;
        uo().Ge(b);
        Fl(nu);
        a = this.B;
        uo().Wf(a) };
    var hz = function(a, b) { b = ez[b]; return null == b ? !0 : b.some(function(c) { return null != a.match(c) }) };
    gz.prototype.N = function() { fz.delete(this.queryId);
        this.j = this.l = null;
        this.o = new zo };
    Ka("ima.common.triggerExternalActivityEvent", function(a, b, c) {
        (a = fz.get(a)) && a.l.report(c) });
    Ka("ima.common.getVideoMetadata", function(a) { return (a = fz.get(a)) ? { currentTime: a.j.l, duration: a.j.getDuration(), Nm: a.H, volume: a.j.isMuted() ? 0 : a.j.getVolume() } : {} });
    var jz = function(a) { this.j = void 0 === a ? null : a };
    var kz = function(a, b) { var c = void 0 === b ? {} : b;
        b = void 0 === c.vendor ? null : c.vendor; var d = void 0 === c.Lb ? null : c.Lb,
            e = void 0 === c.parameters ? null : c.parameters;
        c = void 0 === c.trackingEvents ? [] : c.trackingEvents;
        this.j = a;
        this.vendor = b;
        this.parameters = e;
        this.Lb = d;
        this.trackingEvents = c };
    var lz = function(a, b, c) { this.id = a;
        this.title = b;
        this.thumbnailUrl = c };
    var mz = function(a, b, c, d, e) { this.id = a;
        this.Gb = void 0 === d ? !1 : d;
        this.title = b;
        this.thumbnailUrl = c;
        this.j = !(void 0 === e ? 0 : e) };
    var nz = function(a, b, c, d) { this.l = a;
        this.o = b;
        this.j = (void 0 === c ? null : c) || "";
        this.A = (void 0 === d ? null : d) || "" };
    nz.prototype.Gb = function() { return this.l.Gb };
    var oz = function(a) { var b = a.ra,
            c = a.height,
            d = a.width,
            e = void 0 === a.na ? !1 : a.na;
        this.oa = a.oa;
        this.ra = b;
        this.height = c;
        this.width = d;
        this.na = e };
    oz.prototype.getHeight = function() { return this.height };
    oz.prototype.getWidth = function() { return this.width };
    var pz = function() { this.heightPx = this.widthPx = 0;
        this.altText = this.creativeType = this.j = null };
    var qz = function() { this.altText = this.apiFramework = this.program = null;
        this.heightPx = this.widthPx = 0;
        this.C = 1;
        this.xPosition = "left";
        this.yPosition = "top";
        this.durationMs = this.offsetMs = -1;
        this.D = this.j = this.l = this.clickthroughUrl = null;
        this.B = [];
        this.A = [];
        this.o = [] };
    qz.prototype.getApiFramework = function() { return this.apiFramework };
    var rz = function(a, b) { return "left" == a.xPosition ? "0px" : "right" == a.xPosition ? b - a.widthPx + "px" : a.xPosition + "px" },
        sz = function(a, b) { return "bottom" == a.yPosition ? "0px" : "top" == a.yPosition ? b - a.heightPx + "px" : b - a.heightPx - Xg(a.yPosition) + "px" },
        tz = function(a, b) { var c = new Zi(0, 0, b.width, b.height),
                d = Number.MIN_VALUE,
                e = null;
            a.o.forEach(function(f) { var g = new Zi(0, 0, f.widthPx, f.heightPx);
                aj(c, g) && (g = new Hg(g.width, g.height), g = g.width * g.height, d < g && (e = f, d = g)) }); return e },
        uz = { Al: "left", gm: "right" },
        vz = { lm: "top", Ak: "bottom" };
    var wz = function(a, b) { this.l = void 0 === a ? "unknown" : a;
        this.j = void 0 === b ? "unknown" : b };
    wz.prototype.getAdIdValue = function() { return this.l };
    wz.prototype.getAdIdRegistry = function() { return this.j };
    var xz = function() { dw.call(this);
        this.B = this.Ya = this.description = null;
        this.j = [];
        this.A = this.creativeId = this.clientPlaybackNonce = this.icon = this.adParameters = null;
        this.Za = [] };
    u(xz, dw);
    l = xz.prototype;
    l.getAdSystem = function() { return this.l.length ? this.l[0] : null };
    l.getApiFramework = function() { return this.apiFramework };
    l.getDescription = function() { return this.description };
    l.isSkippable = function() { return null != this.Ya };
    l.getCreativeId = function() { return this.creativeId };
    l.getCreativeAdId = function() { return this.A };
    l.getUniversalAdIds = function() { return this.Za };
    var yz = function(a, b, c) { this.url = a;
        this.id = void 0 === b ? null : b;
        this.j = void 0 === c ? null : c };

    function zz(a) { a = Az(a); return null == a || 2 > a || 4 < a ? !1 : !0 }

    function Az(a) { if (!a || "VAST" == !a.nodeName) return Q(R(), "vast_v", "error"), null;
        a = a.getAttribute("version"); if (!a) return Q(R(), "vast_v", "not_specified"), null;
        Q(R(), "vast_v", a);
        a = parseInt(a, 10); return null == a || isNaN(a) ? null : a }

    function Bz() { var a = document.featurePolicy; return void 0 !== a && "function" == typeof a.allowedFeatures && "object" == typeof a.allowedFeatures() && a.allowedFeatures().includes("attribution-reporting") }

    function Cz(a) { return null != (null == a ? void 0 : a.j) }

    function Dz(a) { return Cz(a) && Bz() ? "attributionsrc=" + encodeURIComponent(a.j || "") : "" }

    function Ez(a, b) { Cz(a) && Bz() && b.setAttribute("attributionsrc", D(a.j)) };
    var Fz = RegExp("(doubleclick\\.net|googleadservices\\.com|googlesyndication\\.com)"),
        Gz = ["ai", "sigh"],
        Hz = ["xai", "sig"];

    function Iz(a) { return a && Fz.test(a) ? a.includes("/pagead/adview") || a.includes("/pagead/conversion") || a.includes("/gampad/live/conversion") || a.includes("/pagead/interaction") ? Gz.every(function(b) { return jk(a, b) }) : a.includes("/pcs/view") ? Hz.every(function(b) { return jk(a, b) }) : !1 : !1 }

    function Jz(a, b) { var c = a.indexOf("&adurl="); return -1 != c ? a.substr(0, c) + b + a.substr(c, a.length) : a + b };
    var Kz = function(a) { var b = a.Kh,
            c = a.Qg,
            d = a.videoItag,
            e = a.audioItag,
            f = a.Jh,
            g = a.Pg;
        oz.call(this, { oa: a.oa, ra: a.ra, height: a.height, width: a.width, na: void 0 === a.na ? !1 : a.na });
        this.j = b;
        this.C = c;
        this.A = d;
        this.o = e;
        this.l = f;
        this.B = g };
    u(Kz, oz);
    var Lz = function(a) { var b = a.jh,
            c = a.mimeType;
        oz.call(this, { oa: a.oa, ra: a.ra, height: a.height, width: a.width, na: void 0 === a.na ? !1 : a.na });
        this.l = b;
        this.j = c };
    u(Lz, oz);
    Lz.prototype.getMediaUrl = function() { return this.l };
    var Mz = function(a, b, c) { this.uc = a;
        this.resourceType = b;
        this.creativeType = void 0 === c ? null : c };
    var Nz = function(a) {
        a = void 0 === a ? {} : a;
        var b = void 0 === a.adSlotId ? null : a.adSlotId,
            c = void 0 === a.apiFramework ? null : a.apiFramework,
            d = void 0 === a.width ? null : a.width,
            e = void 0 === a.height ? null : a.height,
            f = void 0 === a.Sa ? !1 : a.Sa,
            g = void 0 === a.companionClickThrough ? null : a.companionClickThrough,
            h = void 0 === a.Zd ? [] : a.Zd,
            k = void 0 === a.resources ? [] : a.resources,
            m = void 0 === a.trackingEvents ? [] : a.trackingEvents;
        this.id = void 0 === a.id ? null : a.id;
        this.adSlotId = b;
        this.apiFramework = c;
        this.width = d;
        this.height = e;
        this.Sa = f;
        this.companionClickThrough =
            g;
        this.Zd = h;
        this.resources = k;
        this.trackingEvents = m
    };
    var Oz = function(a, b) { this.j = a;
        this.required = void 0 === b ? "none" : b };
    var Pz = function(a) { a = void 0 === a ? {} : a; var b = void 0 === a.mimeType ? null : a.mimeType,
            c = void 0 === a.language ? null : a.language;
        this.url = a.url;
        this.mimeType = b;
        this.language = c };
    var Qz = function(a, b, c, d) { this.Fa = a;
        this.width = void 0 === b ? null : b;
        this.height = void 0 === c ? null : c;
        this.altText = void 0 === d ? null : d };
    var Rz = function(a) { a = void 0 === a ? {} : a; var b = void 0 === a.clickTracking ? [] : a.clickTracking,
            c = void 0 === a.Xd ? [] : a.Xd;
        this.clickThrough = void 0 === a.clickThrough ? null : a.clickThrough;
        this.clickTracking = b;
        this.Xd = c };
    var Sz = function(a) {
        a = void 0 === a ? {} : a;
        var b = void 0 === a.apiFramework ? null : a.apiFramework,
            c = void 0 === a.xPosition ? null : a.xPosition,
            d = void 0 === a.yPosition ? null : a.yPosition,
            e = void 0 === a.width ? null : a.width,
            f = void 0 === a.height ? null : a.height,
            g = void 0 === a.altText ? null : a.altText,
            h = void 0 === a.hoverText ? null : a.hoverText,
            k = void 0 === a.offsetMs ? null : a.offsetMs,
            m = void 0 === a.durationMs ? null : a.durationMs,
            n = void 0 === a.wd ? null : a.wd,
            r = void 0 === a.iconClicks ? null : a.iconClicks,
            q = void 0 === a.md ? [] : a.md,
            y = void 0 === a.resources ? [] : a.resources;
        this.program = void 0 === a.program ? null : a.program;
        this.apiFramework = b;
        this.xPosition = c;
        this.yPosition = d;
        this.width = e;
        this.height = f;
        this.altText = g;
        this.hoverText = h;
        this.offsetMs = k;
        this.wd = n;
        this.durationMs = m;
        this.iconClicks = r;
        this.md = q;
        this.resources = y
    };
    var Tz = function(a, b) { var c = void 0 === b ? {} : b;
            b = void 0 === c.mimeType ? null : c.mimeType; var d = void 0 === c.apiFramework ? null : c.apiFramework;
            c = void 0 === c.Oc ? null : c.Oc;
            this.Fa = a;
            this.apiFramework = d;
            this.mimeType = b;
            this.Oc = c },
        Uz = function(a) { return "Url" === a.Fa.resourceType ? a.Fa.uc : null },
        Vz = function(a) { return "Html" === a.Fa.resourceType ? a.Fa.uc : null };
    var Wz = function(a, b) { var c = void 0 === b ? {} : b;
        b = void 0 === c.delivery ? null : c.delivery; var d = void 0 === c.mimeType ? null : c.mimeType,
            e = void 0 === c.codec ? null : c.codec,
            f = void 0 === c.width ? null : c.width;
        c = void 0 === c.height ? null : c.height;
        this.url = a;
        this.delivery = b;
        this.mimeType = d;
        this.codec = e;
        this.width = f;
        this.height = c };
    var Xz = function(a, b) {
        b = void 0 === b ? {} : b;
        var c = void 0 === b.apiFramework ? null : b.apiFramework,
            d = void 0 === b.bitrate ? null : b.bitrate,
            e = void 0 === b.minBitrate ? null : b.minBitrate,
            f = void 0 === b.maxBitrate ? null : b.maxBitrate,
            g = void 0 === b.itag ? null : b.itag;
        Wz.call(this, a, { delivery: void 0 === b.delivery ? null : b.delivery, mimeType: void 0 === b.mimeType ? null : b.mimeType, codec: void 0 === b.codec ? null : b.codec, width: void 0 === b.width ? null : b.width, height: void 0 === b.height ? null : b.height });
        this.apiFramework = c;
        this.minBitrate = e || f || d ||
            0;
        this.maxBitrate = f || e || d || 0;
        this.itag = g
    };
    u(Xz, Wz);
    var Yz = function(a) { a = void 0 === a ? {} : a; var b = void 0 === a.clickTracking ? [] : a.clickTracking,
            c = void 0 === a.customClicks ? [] : a.customClicks;
        this.clickThrough = void 0 === a.clickThrough ? null : a.clickThrough;
        this.clickTracking = b;
        this.customClicks = c };
    var Zz = function(a) { a = void 0 === a ? {} : a; var b = void 0 === a.Ya ? null : a.Ya,
            c = void 0 === a.trackingEvents ? [] : a.trackingEvents,
            d = void 0 === a.mediaFiles ? [] : a.mediaFiles,
            e = void 0 === a.Fb ? [] : a.Fb,
            f = void 0 === a.uf ? [] : a.uf,
            g = void 0 === a.videoClicks ? null : a.videoClicks,
            h = void 0 === a.adParameters ? null : a.adParameters,
            k = void 0 === a.icons ? [] : a.icons;
        this.duration = void 0 === a.duration ? null : a.duration;
        this.adParameters = h;
        this.Ya = b;
        this.trackingEvents = c;
        this.mediaFiles = d;
        this.Fb = e;
        this.uf = f;
        this.videoClicks = g;
        this.icons = k };
    var $z = function(a) {
        a = void 0 === a ? {} : a;
        var b = void 0 === a.apiFramework ? null : a.apiFramework,
            c = void 0 === a.height ? null : a.height,
            d = void 0 === a.width ? null : a.width,
            e = void 0 === a.minSuggestedDuration ? null : a.minSuggestedDuration,
            f = void 0 === a.resources ? [] : a.resources,
            g = void 0 === a.nonLinearClickThrough ? null : a.nonLinearClickThrough,
            h = void 0 === a.Be ? [] : a.Be,
            k = void 0 === a.adParameters ? null : a.adParameters;
        this.id = void 0 === a.id ? null : a.id;
        this.apiFramework = b;
        this.height = c;
        this.width = d;
        this.minSuggestedDuration = e;
        this.resources =
            f;
        this.nonLinearClickThrough = g;
        this.Be = h;
        this.adParameters = k
    };
    var aA = function(a, b) { b = void 0 === b ? [] : b;
        this.nonLinears = a;
        this.trackingEvents = b };
    var bA = function(a) { a = void 0 === a ? {} : a; var b = void 0 === a.nd ? "unknown" : a.nd;
        this.od = (void 0 === a.od ? "unknown" : a.od) || "unknown";
        this.nd = b || "unknown" };
    var cA = function(a) { a = void 0 === a ? {} : a; var b = void 0 === a.id ? null : a.id,
            c = void 0 === a.adId ? null : a.adId,
            d = void 0 === a.ub ? null : a.ub,
            e = void 0 === a.Ic ? null : a.Ic,
            f = void 0 === a.Cc ? null : a.Cc,
            g = void 0 === a.Za ? [] : a.Za;
        this.sequence = void 0 === a.sequence ? null : a.sequence;
        this.id = b;
        this.adId = c;
        this.ub = d;
        this.Ic = e;
        this.Cc = f;
        this.Za = g };
    var dA = function(a) { a = void 0 === a ? {} : a; var b = void 0 === a.Lc ? null : a.Lc,
            c = void 0 === a.Lb ? null : a.Lb,
            d = void 0 === a.parameters ? null : a.parameters,
            e = void 0 === a.trackingEvents ? [] : a.trackingEvents;
        this.vendor = void 0 === a.vendor ? null : a.vendor;
        this.Lc = b;
        this.Lb = c;
        this.parameters = d;
        this.trackingEvents = e };
    var eA = function(a) { a = void 0 === a ? {} : a; var b = void 0 === a.errors ? [] : a.errors,
            c = void 0 === a.impressions ? [] : a.impressions,
            d = void 0 === a.creatives ? [] : a.creatives,
            e = void 0 === a.Oa ? [] : a.Oa,
            f = void 0 === a.extensions ? [] : a.extensions;
        this.adSystem = void 0 === a.adSystem ? null : a.adSystem;
        this.j = b;
        this.impressionUrls = c;
        this.creatives = d;
        this.Oa = e;
        this.extensions = f };
    var fA = function(a, b) { var c = void 0 === b ? {} : b;
        b = void 0 === c.id ? null : c.id; var d = void 0 === c.sequence ? null : c.sequence;
        c = void 0 === c.adType ? null : c.adType;
        this.Ga = a;
        this.id = b;
        this.sequence = d;
        this.adType = "audio" == c ? "audio" : "hybrid" == c ? "hybrid" : "video" };
    var gA = function(a) { this.j = a = void 0 === a ? [] : a };
    gA.prototype.unshift = function(a) { this.j.unshift(a) };
    var hA = function(a, b) { var c = [];
        a.j.forEach(function(d) { c = c.concat(d.Ga.extensions.filter(function(e) { return e instanceof b })) }); return c };
    var iA = function(a) { this.trackingEvents = a = void 0 === a ? [] : a };
    var jA = function(a, b, c, d) { b = void 0 === b ? [] : b;
        c = void 0 === c ? "" : c;
        d = void 0 === d ? "" : d;
        iA.call(this, a);
        this.j = b;
        this.o = c;
        this.l = d };
    u(jA, iA);
    var kA = function() {};
    kA.prototype.j = function(a, b) { var c = [],
            d = "",
            e = "";
        hA(a, jA).forEach(function(f) { c.push.apply(c, t(f.j));
            d = d || f.o;
            e = e || f.l });
        (0 < c.length || d || e) && b.extensions.set(Zv, new Zv(c, d, e)) };
    var lA = function() { var a = {},
            b = void 0 === a.zb ? "http://www.google.com/adsense/support" : a.zb,
            c = void 0 === a.Qd ? !1 : a.Qd,
            d = void 0 === a.Pe ? 0 : a.Pe;
        this.Ra = void 0 === a.Ra ? "" : a.Ra;
        this.zb = b;
        this.Qd = c;
        this.Pe = d };
    var mA = function(a, b) { var c = void 0 === b ? {} : b;
        b = void 0 === c.Ra ? null : c.Ra; var d = void 0 === c.zb ? null : c.zb,
            e = void 0 === c.ae ? null : c.ae,
            f = void 0 === c.isPharma ? !1 : c.isPharma,
            g = void 0 === c.Ae ? [] : c.Ae,
            h = void 0 === c.Mc ? !1 : c.Mc,
            k = void 0 === c.Se ? null : c.Se,
            m = void 0 === c.Qc ? null : c.Qc;
        c = void 0 === c.Ld ? null : c.Ld;
        iA.call(this, a);
        this.Ra = b;
        this.zb = d;
        this.ae = e;
        this.isPharma = f;
        this.Ae = g;
        this.Mc = h;
        this.Se = k;
        this.Qc = m;
        this.Ld = c };
    u(mA, iA);
    var nA = "ad.doubleclick.net bid.g.doubleclick.net ggpht.com google.co.uk google.com googleads.g.doubleclick.net googleads4.g.doubleclick.net googleadservices.com googlesyndication.com googleusercontent.com gstatic.com gvt1.com prod.google.com pubads.g.doubleclick.net s0.2mdn.net static.doubleclick.net surveys.g.doubleclick.net youtube.com ytimg.com".split(" "),
        oA = ["c.googlesyndication.com"];

    function pA(a, b) { b = void 0 === b ? window.location.protocol : b; var c = !1;
        qA(a, oA) ? c = !1 : b.includes("https") && qA(a, nA) && (c = !0); if (c) { b = new K(a); if ("https" == b.A) return a;
            Q(R(), "htp", "1");
            tm(b, "https"); return b.toString() } return a }

    function qA(a, b) { return (new RegExp("^https?://([a-z0-9-]{1,63}\\.)*(" + b.join("|").replace(/\./g, "\\.") + ")(:[0-9]+)?([/?#]|$)", "i")).test(a) }

    function rA(a) { var b = sA; try { var c = (new K(a)).l;
            c = c.replace(/^www./i, ""); return b.some(function(d) { return tA(d, c) }) } catch (d) { return !1 } }

    function tA(a, b) { if (w(D(b))) return !1;
        a = a.toLowerCase();
        b = b.toLowerCase(); return "*." == a.substr(0, 2) ? (a = a.substr(2), a.length > b.length ? !1 : b.substr(-a.length) == a && (b.length == a.length || "." == b.charAt(b.length - a.length - 1))) : a == b }

    function uA(a) { a = new K(a); var b = a.l; return "http" != a.A && "https" != a.A ? !1 : -1 == b.indexOf(".") || b.match(/^[\.0-9]*$/) ? !1 : vA(a.toString()) }

    function vA(a) { try { Jg(a) } catch (b) { return !1 } return !0 };
    var wA = /OS (\S+) like/,
        xA = /Android ([\d\.]+)/;

    function yA(a, b) { a = (a = a.exec(xb())) ? a[1] : "";
        a = a.replace(/_/g, "."); return 0 <= wb(a, b) }
    var zA = function() { var a = v.navigator || null; return Yx(a.language || a.userLanguage || a.browserLanguage || a.systemLanguage || "") },
        AA = function() { return ck() || bk() },
        BA = function() { return uc && "ontouchstart" in document.documentElement },
        CA = function(a, b) { var c = window.screen.availHeight || window.screen.height; return 0 >= (window.screen.availWidth || window.screen.width) - a && 42 >= c - b };
    var DA = lc ? Ef(xf(yf('javascript:""'))) : Ef(xf(yf("about:blank")));
    lc ? Ef(xf(yf('javascript:""'))) : Ef(xf(yf("javascript:undefined")));

    function EA(a, b) { a = v[a]; return a && a.prototype ? (b = Object.getOwnPropertyDescriptor(a.prototype, b)) && b.get || null : null }
    EA("Element", "attributes") || EA("Node", "attributes");
    EA("Element", "innerHTML") || EA("HTMLElement", "innerHTML");
    EA("Node", "nodeName");
    EA("Node", "nodeType");
    EA("Node", "parentNode");
    EA("Node", "childNodes");
    EA("HTMLElement", "style") || EA("Element", "style");
    EA("HTMLStyleElement", "sheet");
    EA("Element", "namespaceURI") || EA("Node", "namespaceURI");
    var FA = { TYPE_EXTERNAL: 0, TYPE_SITELINK: 1, TYPE_WEBSITE_DEEP_LINK: 2 };
    var GA = function(a) { a = void 0 === a ? {} : a; var b = void 0 === a.target ? null : a.target,
            c = void 0 === a.title ? null : a.title,
            d = void 0 === a.packageId ? null : a.packageId,
            e = void 0 === a.be ? null : a.be;
        this.type = a.type;
        this.target = b;
        this.title = c;
        this.packageId = d;
        this.be = e };
    var HA = { TYPE_ADX_ENDCAP: 0, TYPE_WEBSITE: 1 };
    var IA = function(a) { a = void 0 === a ? {} : a; var b = void 0 === a.showInEndcap ? !1 : a.showInEndcap,
            c = void 0 === a.jd ? 5E3 : a.jd;
        this.showInCta = void 0 === a.showInCta ? !1 : a.showInCta;
        this.showInEndcap = b;
        this.jd = c };
    var JA = function(a) { a = void 0 === a ? {} : a; var b = void 0 === a.descriptionLine1 ? null : a.descriptionLine1,
            c = void 0 === a.descriptionLine2 ? null : a.descriptionLine2;
        this.linkAction = void 0 === a.linkAction ? null : a.linkAction;
        this.descriptionLine1 = b;
        this.descriptionLine2 = c };
    var KA = function(a) { a = void 0 === a ? {} : a;
        this.sitelinkExtensions = void 0 === a.sitelinkExtensions ? [] : a.sitelinkExtensions };
    var LA = function(a) { a = void 0 === a ? {} : a; var b = void 0 === a.headline ? null : a.headline,
            c = void 0 === a.imageUrl ? null : a.imageUrl,
            d = void 0 === a.extensionData ? null : a.extensionData;
        this.description = void 0 === a.description ? null : a.description;
        this.headline = b;
        this.imageUrl = c;
        this.extensionData = d };
    var MA = function(a) { a = void 0 === a ? {} : a; var b = void 0 === a.priority ? -1 : a.priority,
            c = void 0 === a.trackingEvents ? [] : a.trackingEvents,
            d = void 0 === a.actions ? [] : a.actions,
            e = void 0 === a.placement ? null : a.placement,
            f = void 0 === a.websiteCard ? null : a.websiteCard;
        this.type = a.type;
        this.priority = b;
        this.trackingEvents = c;
        this.actions = d;
        this.placement = e;
        this.websiteCard = f };
    var NA = function(a) { a = void 0 === a ? {} : a;
        this.cards = void 0 === a.cards ? [] : a.cards };
    var OA = function(a) { this.j = a };
    var PA = function(a, b, c, d, e) { this.value = a;
        this.expires = b;
        this.path = c;
        this.domain = d;
        this.j = e };
    var QA = function(a, b, c) {
        var d = void 0 === c ? {} : c;
        c = void 0 === d.delivery ? null : d.delivery;
        var e = void 0 === d.itag ? null : d.itag,
            f = void 0 === d.mimeType ? null : d.mimeType,
            g = void 0 === d.oa ? null : d.oa,
            h = void 0 === d.ra ? null : d.ra,
            k = void 0 === d.mg ? null : d.mg,
            m = void 0 === d.lf ? null : d.lf,
            n = void 0 === d.na ? null : d.na,
            r = void 0 === d.width ? null : d.width,
            q = void 0 === d.height ? null : d.height;
        d = void 0 === d.Bb ? null : d.Bb;
        this.type = b;
        this.itag = e;
        this.ra = h;
        this.mg = k;
        this.lf = m;
        this.na = n;
        this.url = a;
        this.delivery = c;
        this.mimeType = f;
        this.oa = g;
        this.width =
            r;
        this.height = q;
        this.Bb = d
    };
    var RA = function(a, b, c, d, e) { this.cpn = a;
        this.j = b;
        this.A = c;
        this.l = d;
        this.o = e };
    var SA = {},
        TA = (SA[18] = 496, SA[22] = 2128, SA[43] = 488, SA[44] = 848, SA[45] = 2128, SA[59] = 848, SA[133] = 242, SA[134] = 400, SA[135] = 1E3, SA[136] = 2E3, SA[139] = 48, SA[140] = 128, SA[141] = 256, SA[160] = 108, SA[242] = 150, SA[243] = 276, SA[244] = 512, SA[245] = 1E3, SA[249] = 48, SA[250] = 64, SA[251] = 128, SA[278] = 95, SA[342] = 464, SA[343] = 1064, SA[344] = 2128, SA[345] = 496, SA[346] = 816, SA[347] = 2096, SA[396] = 210, SA[398] = 778, SA),
        UA = {
            Yh: "application/dash+xml",
            Zk: "video/gma-demuxed",
            il: "application/vnd.apple.mpegurl",
            ji: "application/x-mpegURL",
            li: "audio/mpeg",
            mi: "video/mp4",
            ni: "audio/mp4",
            oi: "video/mpeg",
            si: "video/ogg",
            ti: "audio/ogg",
            Ai: "video/3gpp",
            Di: "video/webm"
        };
    var VA = function() {};
    VA.prototype.j = null;
    var XA = function(a) { var b;
        (b = a.j) || (b = {}, WA(a) && (b[0] = !0, b[1] = !0), b = a.j = b); return b };
    var YA, ZA = function() {};
    Ya(ZA, VA);
    var $A = function(a) { return (a = WA(a)) ? new ActiveXObject(a) : new XMLHttpRequest },
        WA = function(a) { if (!a.l && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) { for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) { var d = b[c]; try { return new ActiveXObject(d), a.l = d } catch (e) {} } throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"); } return a.l };
    YA = new ZA;
    var aB = function(a) { H.call(this);
        this.headers = new Map;
        this.G = a || null;
        this.l = !1;
        this.F = this.j = null;
        this.L = "";
        this.A = 0;
        this.o = this.J = this.B = this.I = !1;
        this.D = 0;
        this.C = null;
        this.aa = "";
        this.R = this.P = !1;
        this.K = null };
    Ya(aB, H);
    var bB = /^https?$/i,
        cB = ["POST", "PUT"];
    aB.prototype.setTrustToken = function(a) { this.K = a };
    var gB = function(a, b, c, d) {
            if (a.j) throw Error("[goog.net.XhrIo] Object is active with another request=" + a.L + "; newUri=" + b);
            c = c ? c.toUpperCase() : "GET";
            a.L = b;
            a.A = 0;
            a.I = !1;
            a.l = !0;
            a.j = a.G ? $A(a.G) : $A(YA);
            a.F = a.G ? XA(a.G) : XA(YA);
            a.j.onreadystatechange = Va(a.V, a);
            try { a.J = !0, a.j.open(c, String(b), !0), a.J = !1 } catch (g) { dB(a); return }
            b = d || "";
            d = new Map(a.headers);
            var e = Array.from(d.keys()).find(function(g) { return "content-type" == g.toLowerCase() }),
                f = v.FormData && b instanceof v.FormData;
            !Xb(cB, c) || e || f || d.set("Content-Type",
                "application/x-www-form-urlencoded;charset=utf-8");
            c = p(d);
            for (d = c.next(); !d.done; d = c.next()) e = p(d.value), d = e.next().value, e = e.next().value, a.j.setRequestHeader(d, e);
            a.aa && (a.j.responseType = a.aa);
            "withCredentials" in a.j && a.j.withCredentials !== a.P && (a.j.withCredentials = a.P);
            if ("setTrustToken" in a.j && a.K) try { a.j.setTrustToken(a.K) } catch (g) {}
            try { eB(a), 0 < a.D && (a.R = fB(a.j), a.R ? (a.j.timeout = a.D, a.j.ontimeout = Va(a.T, a)) : a.C = Qi(a.T, a.D, a)), a.B = !0, a.j.send(b), a.B = !1 } catch (g) { dB(a) }
        },
        fB = function(a) {
            return lc &&
                Hc(9) && "number" === typeof a.timeout && void 0 !== a.ontimeout
        };
    aB.prototype.T = function() { "undefined" != typeof Ja && this.j && (this.A = 8, I(this, "timeout"), this.abort(8)) };
    var dB = function(a) { a.l = !1;
            a.j && (a.o = !0, a.j.abort(), a.o = !1);
            a.A = 5;
            hB(a);
            iB(a) },
        hB = function(a) { a.I || (a.I = !0, I(a, "complete"), I(a, "error")) };
    aB.prototype.abort = function(a) { this.j && this.l && (this.l = !1, this.o = !0, this.j.abort(), this.o = !1, this.A = a || 7, I(this, "complete"), I(this, "abort"), iB(this)) };
    aB.prototype.N = function() { this.j && (this.l && (this.l = !1, this.o = !0, this.j.abort(), this.o = !1), iB(this, !0));
        aB.ib.N.call(this) };
    aB.prototype.V = function() { this.za() || (this.J || this.B || this.o ? jB(this) : this.ba()) };
    aB.prototype.ba = function() { jB(this) };
    var jB = function(a) {
            if (a.l && "undefined" != typeof Ja && (!a.F[1] || 4 != (a.j ? a.j.readyState : 0) || 2 != kB(a)))
                if (a.B && 4 == (a.j ? a.j.readyState : 0)) Qi(a.V, 0, a);
                else if (I(a, "readystatechange"), a.isComplete()) {
                a.l = !1;
                try {
                    var b = kB(a);
                    a: switch (b) {
                        case 200:
                        case 201:
                        case 202:
                        case 204:
                        case 206:
                        case 304:
                        case 1223:
                            var c = !0; break a;
                        default:
                            c = !1 }
                    var d;
                    if (!(d = c)) { var e; if (e = 0 === b) { var f = String(a.L).match(dk)[1] || null;!f && v.self && v.self.location && (f = v.self.location.protocol.slice(0, -1));
                            e = !bB.test(f ? f.toLowerCase() : "") }
                        d = e }
                    d ?
                        (I(a, "complete"), I(a, "success")) : (a.A = 6, hB(a))
                } finally { iB(a) }
            }
        },
        iB = function(a, b) { if (a.j) { eB(a); var c = a.j,
                    d = a.F[0] ? function() {} : null;
                a.j = null;
                a.F = null;
                b || I(a, "ready"); try { c.onreadystatechange = d } catch (e) {} } },
        eB = function(a) { a.j && a.R && (a.j.ontimeout = null);
            a.C && (Ri(a.C), a.C = null) };
    aB.prototype.isActive = function() { return !!this.j };
    aB.prototype.isComplete = function() { return 4 == (this.j ? this.j.readyState : 0) };
    var kB = function(a) { try { return 2 < (a.j ? a.j.readyState : 0) ? a.j.status : -1 } catch (b) { return -1 } },
        lB = function(a) { if (a.j) { a: { a = a.j.responseText; if (v.JSON) try { var b = v.JSON.parse(a); break a } catch (c) {}
                    b = Fv(a) } return b } };
    var mB = RegExp("/itag/(\\d+)/"),
        nB = RegExp("^[\\w-]{16}$");

    function oB(a, b) { if (!a) return "";
        a = D(a).toLowerCase(); return b ? a + '; codecs="' + D(b) + '"' : a };
    var pB = function(a) { this.l = void 0 === a ? null : a };
    pB.prototype.j = function(a, b) {
        if (b instanceof xz && this.l && !(0 < b.j.length)) {
            a = p(a.j);
            for (var c = a.next(); !c.done; c = a.next()) {
                c = p(c.value.Ga.extensions);
                for (var d = c.next(); !d.done; d = c.next()) {
                    var e = d.value;
                    if (e instanceof RA) {
                        d = qB(this.l, e);
                        var f = void 0;
                        if (0 < d.length)
                            for (var g = p(d), h = g.next(); !h.done; h = g.next()) { h = h.value; var k = void 0;
                                h instanceof Lz && (k = h.getMediaUrl());
                                h instanceof Kz && (k = h.j); if (k && (h = (h = kk(k, "cpn")) && h.match(nB) ? h : null)) { f = h; break } }
                        e = f ? f : e.cpn;
                        Q(R(), "cpn", e);
                        b.clientPlaybackNonce =
                            e;
                        d = p(d);
                        for (e = d.next(); !e.done; e = d.next()) b.j.push(e.value)
                    }
                }
            }
        }
    };
    var rB = function(a) { this.attributionData = a };
    var sB = function(a) {
        a = void 0 === a ? {} : a;
        var b = void 0 === a.Xb ? null : a.Xb,
            c = void 0 === a.adTitle ? null : a.adTitle,
            d = void 0 === a.advertiser ? null : a.advertiser,
            e = void 0 === a.description ? null : a.description,
            f = void 0 === a.survey ? null : a.survey;
        eA.call(this, { adSystem: void 0 === a.adSystem ? null : a.adSystem, errors: void 0 === a.errors ? [] : a.errors, impressions: void 0 === a.impressions ? [] : a.impressions, creatives: void 0 === a.creatives ? [] : a.creatives, Oa: void 0 === a.Oa ? [] : a.Oa, extensions: void 0 === a.extensions ? [] : a.extensions });
        this.Xb =
            b;
        this.adTitle = c;
        this.advertiser = d;
        this.description = e;
        this.survey = f
    };
    u(sB, eA);
    var tB = function(a, b) { this.j = void 0 === a ? null : a;
        this.l = void 0 === b ? null : b };
    var uB = function() {};
    uB.prototype.j = function(a, b) { a = p(a.j); for (var c = a.next(); !c.done; c = a.next()) { a: { var d = b;c = p(c.value.Ga.extensions); for (var e = c.next(); !e.done; e = c.next())
                    if (e = e.value, e instanceof tB) { d.extensions.set(jz, new jz(e.j, e.l));
                        d = !0; break a }
                d = !1 } if (d) break } };
    var vB = function(a) { this.Oa = a = void 0 === a ? [] : a };
    var wB = function(a) { this.dealId = a };
    var xB = function(a, b, c, d) { this.o = a;
        this.l = b;
        this.A = c;
        this.j = d };
    var yB = function(a) { this.j = void 0 === a ? !1 : a };
    var zB = function(a) {
        a = void 0 === a ? {} : a;
        var b = void 0 === a.Gb ? !1 : a.Gb,
            c = void 0 === a.videoTitle ? null : a.videoTitle,
            d = void 0 === a.Hd ? null : a.Hd,
            e = void 0 === a.rd ? !1 : a.rd,
            f = void 0 === a.channelId ? null : a.channelId,
            g = void 0 === a.channelTitle ? null : a.channelTitle,
            h = void 0 === a.Yc ? null : a.Yc,
            k = void 0 === a.Wd ? null : a.Wd,
            m = void 0 === a.format ? null : a.format,
            n = void 0 === a.visitorData ? null : a.visitorData;
        this.videoId = void 0 === a.videoId ? null : a.videoId;
        this.Gb = b;
        this.videoTitle = c;
        this.Hd = d;
        this.rd = e;
        this.channelId = f;
        this.channelTitle =
            g;
        this.Yc = h;
        this.Wd = k;
        this.format = m;
        this.visitorData = n
    };
    var AB = function() {};
    AB.prototype.j = function(a, b) { a = p(a.j); for (var c = a.next(); !c.done; c = a.next()) { c = p(c.value.Ga.extensions); for (var d = c.next(); !d.done; d = c.next())
                if (d = d.value, d instanceof zB) { b.extensions.set(nz, new nz(new mz(d.videoId, d.videoTitle, d.Hd, d.Gb, d.rd), new lz(d.channelId, d.channelTitle, d.Yc), d.format, d.visitorData)); return } } };
    var BB = function() {};
    BB.prototype.o = function() { return !0 };
    BB.prototype.l = function(a) { var b = new dw;
        this.j(a, b); return b };
    BB.prototype.j = function(a, b) { a.j.forEach(function(c) { CB(c, b);
            c.Ga.adSystem && b.l.push(c.Ga.adSystem) });
        0 < a.j.length && (a = a.j[0], a.id && (b.id = a.id), a.adType && (b.adType = a.adType), a.sequence && (b.o = a.sequence), a = a.Ga, a instanceof sB && (b.adTitle = a.adTitle, b.Xb = a.Xb, DB(a, b))) };
    var CB = function(a, b) { var c = a.Ga.impressionUrls;
            a.Ga.j.forEach(function(d) { ew(b, new bw("error", d)) });
            c.forEach(function(d) { ew(b, new bw("impression", d)) }) },
        DB = function(a, b) { a = p(a.creatives); for (var c = a.next(); !c.done; c = a.next())
                if ((c = c.value.ub) && c.Fb && 0 < c.Fb.length) { a = p(c.Fb); for (c = a.next(); !c.done; c = a.next()) c = c.value, b.Fb.push(new $v(Uz(c), Vz(c), c.mimeType, c.apiFramework, c.Oc)); break } };
    var EB = function(a, b) { a = Error.call(this, a);
        this.message = a.message; "stack" in a && (this.stack = a.stack);
        this.errorType = void 0 === b ? 900 : b };
    u(EB, Error);
    var FB = function(a) { this.l = a;
        this.j = Date.now() };
    FB.prototype.reset = function() { this.j = Date.now() };
    var GB = function(a) { a = a.j + a.l - Date.now(); return 0 < a ? a : 0 };
    var HB = "://secure-...imrworldwide.com/ ://cdn.imrworldwide.com/ ://aksecure.imrworldwide.com/ ://[^.]*.moatads.com ://youtube[0-9]+.moatpixel.com ://pm.adsafeprotected.com/youtube ://pm.test-adsafeprotected.com/youtube ://e[0-9]+.yt.srs.doubleverify.com www.google.com/pagead/xsul www.youtube.com/pagead/slav".split(" "),
        IB = /\bocr\b/;

    function JB(a) { if (w(D(a)) || lc && 2048 < a.length) return !1; try { if ((new K(a)).D().match(IB)) return !0 } catch (b) {} return null != HB.find(function(b) { return null != a.match(b) }) };
    var KB = function(a, b) { var c = Error.call(this, a);
        this.message = c.message; "stack" in c && (this.stack = c.stack);
        this.errorCode = a;
        this.httpStatus = b };
    u(KB, Error);
    var LB = function() { if (!lc) return !1; try { return new ActiveXObject("MSXML2.DOMDocument"), !0 } catch (a) { return !1 } },
        MB = lc && LB(),
        NB = function(a) {
            if ("undefined" != typeof DOMParser) { var b = new DOMParser;
                a = hg(a); return b.parseFromString(gg(a), "application/xml") }
            if (MB) { b = new ActiveXObject("MSXML2.DOMDocument");
                b.resolveExternals = !1;
                b.validateOnParse = !1; try { b.setProperty("ProhibitDTD", !0), b.setProperty("MaxXMLSize", 2048), b.setProperty("MaxElementDepth", 256) } catch (c) {}
                b.loadXML(a); return b }
            throw Error("Your browser does not support loading xml documents");
        };
    var OB = function(a) { E.call(this);
        this.l = a;
        this.j = {} };
    Ya(OB, E);
    var PB = [],
        T = function(a, b, c, d) { S(a, b, c, d) },
        S = function(a, b, c, d, e, f) { Array.isArray(c) || (c && (PB[0] = c.toString()), c = PB); for (var g = 0; g < c.length; g++) { var h = Zh(b, c[g], d || a.handleEvent, e || !1, f || a.l || a); if (!h) break;
                a.j[h.key] = h } },
        RB = function(a, b, c, d) { QB(a, b, c, d) },
        QB = function(a, b, c, d, e, f) { if (Array.isArray(c))
                for (var g = 0; g < c.length; g++) QB(a, b, c[g], d, e, f);
            else(b = Yh(b, c, d || a.handleEvent, e, f || a.l || a)) && (a.j[b.key] = b) },
        SB = function(a, b, c, d, e, f) {
            if (Array.isArray(c))
                for (var g = 0; g < c.length; g++) SB(a, b, c[g], d, e, f);
            else d =
                d || a.handleEvent, e = Oa(e) ? !!e.capture : !!e, f = f || a.l || a, d = $h(d), e = !!e, c = Nh(b) ? Uh(b.H, String(c), d, e, f) : b ? (b = ci(b)) ? Uh(b, c, d, e, f) : null : null, c && (hi(c), delete a.j[c.key])
        },
        TB = function(a) { Xe(a.j, function(b, c) { this.j.hasOwnProperty(c) && hi(b) }, a);
            a.j = {} };
    OB.prototype.N = function() { OB.ib.N.call(this);
        TB(this) };
    OB.prototype.handleEvent = function() { throw Error("EventHandler.handleEvent not implemented"); };
    var UB = function() {};
    UB.prototype.get = function(a) { return VB({ url: a.url, timeout: a.timeout, withCredentials: void 0 === a.withCredentials ? !0 : a.withCredentials, method: "GET", yb: void 0 === a.yb ? void 0 : a.yb }) };
    UB.prototype.post = function(a) { var b = a.timeout,
            c = void 0 === a.withCredentials ? !0 : a.withCredentials,
            d = void 0 === a.headers ? {} : a.headers,
            e = void 0 === a.content ? void 0 : a.content;
        a = new K(a.url);
        e || (e = a.j.toString(), vm(a, "")); return VB({ url: a.toString(), timeout: b, withCredentials: c, method: "POST", content: e, headers: d }) };
    var VB = function(a) { var b = a.url,
                c = a.timeout,
                d = a.withCredentials,
                e = a.method,
                f = void 0 === a.content ? void 0 : a.content,
                g = void 0 === a.yb ? void 0 : a.yb,
                h = void 0 === a.headers ? {} : a.headers; return WB({ url: b, timeout: c, withCredentials: d, method: e, content: f, yb: g, headers: h }).then(function(k) { return Promise.resolve(k) }, function(k) { return k instanceof Error && 6 == k.message && d ? WB({ url: b, timeout: c, withCredentials: !d, method: e, content: f, yb: g, headers: h }) : Promise.reject(k) }) },
        WB = function(a) {
            var b = a.url,
                c = a.timeout,
                d = a.withCredentials,
                e = a.method,
                f = void 0 === a.content ? void 0 : a.content,
                g = void 0 === a.yb ? void 0 : a.yb;
            a = void 0 === a.headers ? {} : a.headers;
            var h = new aB;
            h.P = d;
            h.D = Math.max(0, GB(c));
            h.setTrustToken && g && h.setTrustToken(g);
            for (var k in a) h.headers.set(k, a[k]);
            var m = new OB;
            return new Promise(function(n, r) {
                RB(m, h, "success", function() {
                    a: { if (Gp()) try { lB(h); var q = "application/json"; break a } catch (A) { q = "application/xml"; break a }
                        h.j && h.isComplete() ? (q = h.j.getResponseHeader("Content-Type"), q = null === q ? void 0 : q) : q = void 0;q = q || "" }
                    if (-1 != q.indexOf("application/json")) n(lB(h) || {});
                    else { try { var y = h.j ? h.j.responseXML : null } catch (A) { y = null } if (null == y) { try { var x = h.j ? h.j.responseText : "" } catch (A) { x = "" }
                            y = NB(x) }
                        n(y) }
                    m.W();h.W()
                });
                RB(m, h, ["error", "timeout"], function() { r(new KB(h.A, kB(h)));
                    m.W();
                    h.W() });
                gB(h, pA(b), e, f)
            })
        };
    var XB = function(a, b) { this.B = void 0 === a ? !1 : a;
        this.j = new Map;
        this.o = 0;
        this.C = (void 0 === b ? !0 : b) && null != window.fetch };
    XB.prototype.l = function(a, b) { b = void 0 === b ? !1 : b; try { a = pA(a), b = b || JB(a), this.C ? YB(this, a, b) : Gp() ? ZB(a) : b ? $B(this, a) : aC(this, a) } catch (c) {} };
    var YB = function(a, b, c) { Q(R(), "faa", "1"); var d = { keepalive: !0, method: "get", mode: "no-cors", redirect: "follow" };
            c && (d.referrerPolicy = "no-referrer");
            fetch(b, d).then(function() { Q(R(), "fas", "1") }).catch(function() { Q(R(), "faf", "1");
                a.C = !1;
                Gp() ? ZB(b) : c ? $B(a, b) : aC(a, b) }) },
        $B = function(a, b) {
            var c = If(Mf(b) || Nf);
            if ("about:invalid#zClosurez" !== c) {
                c = gg(zk(c)).toString();
                var d = 'javascript:"<body><img src=\\""+' + Ig(Iv(new Gv, c)) + '+"\\"></body>"';
                a.B ? bC(a, function(e) {
                    e || (d = 'javascript:"<body><object data="' + b + '" type=text/html width=1 height=1 style=visibility:hidden;></body>"');
                    cC(d)
                }) : cC(d)
            }
        },
        cC = function(a) { var b = kh("IFRAME", { src: a, style: "display:none" });
            a = Zg(b).body;
            Yh(b, ["load", "error"], function() { Qi(function() { ph(b) }, 5E3) });
            a.appendChild(b) },
        aC = function(a, b) { a.B ? bC(a, function(c) { c ? dC(a, b) : eC(a, b) }) : dC(a, b) },
        bC = function(a, b) { if (void 0 != a.A) b(a.A);
            else { var c = new Image,
                    d = (a.o++).toString();
                a.j.set(d, c); var e = setTimeout(function() { a.A = !1;
                    a.j.delete(d);
                    b(!1) }, 300);
                c.onload = function() { clearTimeout(e);
                    a.A = !0;
                    a.j.delete(d);
                    b(!0) };
                c.src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" } },
        eC = function(a, b) { var c = lh(document, "OBJECT");
            c.data = b;
            c.width = "1";
            c.height = "1";
            c.style.visibility = "hidden"; var d = "" + a.o++;
            a.j.set(d, c);
            c.onload = c.onerror = function() { a.j.delete(d) };
            document.body.appendChild(c) },
        dC = function(a, b) { var c = new Image,
                d = (a.o++).toString();
            a.j.set(d, c);
            c.onload = c.onerror = function() { a.j.delete(d) };
            c.src = b },
        ZB = function(a) {
            (new UB).get({ url: a, timeout: new FB(5E3) }) },
        Zy = function(a, b, c) { c = void 0 === c ? !1 : c;
            b.forEach(function(d) { return a.l(d, c) }) };

    function fC(a) { switch (!0) {
            case vy(a):
                return "dcm";
            case zy(a):
                return "dv3";
            case uy(a):
                return "adsense";
            case wy(a):
                return "xfp";
            case yy(a):
                return "dbm";
            default:
                return "simple" } };
    var gC = function(a) { this.l = a = void 0 === a ? new Map : a };
    gC.prototype.j = function() { return null };
    var hC = function(a) {!Gp() && a.set("osd", 2); var b = py(); - 1 != b && a.set("frm", b);
            b = window.document;
            b = "visible" == (b.visibilityState || b.webkitVisibilityState || b.mozVisibilityState || "");
            null != b && a.set("vis", b ? "1" : "2");
            a.set("sdr", 1) },
        iC = function(a, b) { a.l.forEach(function(c, d) { w(c) || b.set(d, c) }) },
        jC = function() { var a = 1025;
            Ip() || (a |= 64); return a | 4 };
    var kC = function() { gC.apply(this, arguments) };
    u(kC, gC);
    kC.prototype.j = function(a) { var b = new Map;
        iC(this, b);
        a = new K(a.adTagUrl);
        qy(a, b); return a.toString() };
    var lC = function(a) { this.j = a = void 0 === a ? [] : a };
    var mC = function(a) { a = void 0 === a ? {} : a; var b = void 0 === a.de ? !0 : a.de,
            c = void 0 === a.La ? !1 : a.La,
            d = void 0 === a.Af ? !1 : a.Af,
            e = void 0 === a.adTag ? null : a.adTag;
        eA.call(this, { adSystem: void 0 === a.adSystem ? null : a.adSystem, errors: void 0 === a.errors ? [] : a.errors, impressions: void 0 === a.impressions ? [] : a.impressions, creatives: void 0 === a.creatives ? [] : a.creatives, Oa: void 0 === a.Oa ? [] : a.Oa, extensions: void 0 === a.extensions ? [] : a.extensions });
        this.de = b;
        this.La = c;
        this.Af = d;
        this.adTag = e };
    u(mC, eA);

    function nC(a, b) { a = parseInt(a.getAttribute(b), 10); if (!isNaN(a)) return a }

    function oC(a) { if (null != a) { a = a.toLowerCase(); if ("1" == a || "true" == a) return !0; if ("0" == a || "false" == a) return !1 } }

    function pC(a, b) { var c = [];
        b = b.toLowerCase();
        a = p(xh(a)); for (var d = a.next(); !d.done; d = a.next()) d = d.value, d.nodeName.toLowerCase() == b && c.push(d); return c }

    function qC(a, b) { a = pC(a, b); return 0 < a.length ? a[a.length - 1] : null }

    function U(a) { if (0 == a.childNodes.length) return null; var b = "";
        a = p(a.childNodes); for (var c = a.next(); !c.done; c = a.next()) switch (c = c.value, c.nodeType) {
            case 4:
            case 3:
                b += c.nodeValue }
        return b.trim() }

    function rC(a, b) { return a.hasAttribute("type") && a.getAttribute("type").toLowerCase() == b.toLowerCase() }

    function sC(a) { var b = (a || "").split(":"); if (3 == b.length) { a = parseInt(b[0], 10); var c = parseInt(b[1], 10),
                d = b[2].split("."),
                e = parseInt(d[0], 10);
            b = 0;
            2 == d.length && (b = parseInt(d[1], 10)); if (!(isNaN(a) || isNaN(c) || isNaN(e) || isNaN(b))) return a = 36E5 * a + 6E4 * c + 1E3 * e, a += b } }

    function tC(a) { var b = [];
        a = p(xh(a)); for (var c = a.next(); !c.done; c = a.next()) { var d = c.value; if ("Verification" == d.nodeName) { c = { vendor: d.getAttribute("vendor"), trackingEvents: [] };
                d = p(xh(d)); for (var e = d.next(); !e.done; e = d.next()) switch (e = e.value, e.nodeName) {
                    case "JavaScriptResource":
                        c.Lc = U(e);
                        c.Lb = e.getAttribute("apiFramework"); break;
                    case "VerificationParameters":
                        c.parameters = U(e); break;
                    case "TrackingEvents":
                        c.trackingEvents = uC(e) }
                null != c.Lc && b.push(new dA(c)) } } return b }

    function vC(a) { var b = [];
        a = p(xh(a)); for (var c = a.next(); !c.done; c = a.next()) c = c.value, "CustomTracking" == c.nodeName && b.push.apply(b, t(uC(c))); return b }

    function EC(a, b) { var c = a.getAttribute("id");
        a = a.getAttribute("attributionsrc");
        b = new yz(b, c, a);
        (c = b.url) && Cz(b) && (a = Bz() ? "6" : "5", c = mk(c, "nis"), c = Jz(c, "&nis=" + a));
        b.url = c; return b }

    function uC(a) { var b = [];
        a = p(xh(a)); for (var c = a.next(); !c.done; c = a.next()) { var d = c.value; if ("Tracking" == d.nodeName) { c = d.getAttribute("event"); var e = U(d); if (null != e) { d = d.getAttribute("offset"); var f = null,
                        g = null;
                    d && d.endsWith("%") ? g = parseInt(d, 10) : d && d.includes(":") && (f = sC(d));
                    b.push(new aw(c, e, { offsetMs: f, qc: g })) } } } return b };
    var gD = function() { this.j = [] },
        pD = function(a, b) { a.j.includes(b) || a.j.push(b) },
        qD = function(a, b) { var c = [];
            b = p(b); for (var d = b.next(); !d.done; d = b.next())
                if (d = d.value, "Extension" == d.nodeName)
                    for (var e = p(a.j), f = e.next(); !f.done; f = e.next())
                        if (f = f.value.j(d), null != f) { c.push(f); break }
            return c },
        vD = function(a) {
            var b = { Za: [] };
            b.sequence = nC(a, "sequence");
            b.id = a.getAttribute("id");
            b.adId = a.getAttribute("adId");
            for (var c = p(xh(a)), d = c.next(); !d.done; d = c.next()) {
                var e = d.value;
                switch (e.nodeName) {
                    case "Linear":
                        for (var f =
                                void 0, g = void 0, h = void 0, k = [], m = [], n = [], r = [], q = [], y = p(xh(e)), x = y.next(); !x.done; x = y.next()) {
                            var A = x.value;
                            switch (A.nodeName) {
                                case "TrackingEvents":
                                    k = uC(A);
                                    break;
                                case "VideoClicks":
                                    for (var L = null, F = [], na = [], oa = p(xh(A)), Ga = oa.next(); !Ga.done; Ga = oa.next()) { var Sa = Ga.value,
                                            Ha = U(Sa); if (null != Ha) { var re = Sa.getAttribute("id"); switch (Sa.nodeName) {
                                                case "ClickThrough":
                                                    L = EC(Sa, Ha); break;
                                                case "ClickTracking":
                                                    F.push(new yz(Ha, re)); break;
                                                case "CustomClick":
                                                    na.push(new yz(Ha, re)) } } }
                                    h = new Yz({
                                        clickThrough: L,
                                        clickTracking: F,
                                        customClicks: na
                                    });
                                    break;
                                case "MediaFiles":
                                    for (var Jj = [], Rm = [], qh = [], $e = p(xh(A)), rh = $e.next(); !rh.done; rh = $e.next()) {
                                        var sb = rh.value;
                                        switch (sb.nodeName) {
                                            case "MediaFile":
                                                var Ta = U(sb);
                                                if (null == Ta) var Kj = null;
                                                else {
                                                    -1 != Ta.indexOf("www.youtube.com/get_video") ? Q(R(), "hgvu", "1") : -1 != Ta.indexOf("redirector.gvt1.com/get_video") && Q(R(), "hgvuc", "1");
                                                    var nc = {};
                                                    nc.height = nC(sb, "height");
                                                    nc.width = nC(sb, "width");
                                                    nc.delivery = sb.getAttribute("delivery");
                                                    nc.bitrate = nC(sb, "bitrate");
                                                    nc.minBitrate = nC(sb, "minBitrate");
                                                    nc.maxBitrate = nC(sb, "maxBitrate");
                                                    nc.mimeType = sb.getAttribute("type");
                                                    nc.apiFramework = sb.getAttribute("apiFramework");
                                                    nc.codec = sb.getAttribute("codec");
                                                    var Lj = Ta,
                                                        sh = parseInt(kk(Lj, "itag"), 10);
                                                    if (sh) var Tf = sh;
                                                    else { var th = Lj.match(mB);
                                                        Tf = th && 2 == th.length ? parseInt(th[1], 10) : null }
                                                    null != Tf && (nc.itag = Tf);
                                                    Kj = new Xz(Ta, nc)
                                                }
                                                var Mj = Kj;
                                                null !== Mj && Jj.push(Mj);
                                                break;
                                            case "ClosedCaptionFiles":
                                                for (var Sm = [], uh = p(xh(sb)), Uf = uh.next(); !Uf.done; Uf = uh.next()) {
                                                    var js = Uf.value,
                                                        wC = U(js);
                                                    if (null !== wC) {
                                                        var ks = { url: wC };
                                                        ks.mimeType =
                                                            js.getAttribute("type");
                                                        ks.language = js.getAttribute("language");
                                                        Sm.push(new Pz(ks))
                                                    }
                                                }
                                                qh = Sm;
                                                break;
                                            case "InteractiveCreativeFile":
                                                var xC = qC(sb, "HTMLResource");
                                                if (xC) { var yC = "Html"; var Tm = U(xC) } else yC = "Url", Tm = U(sb);
                                                if (!Tm || w(Tm)) var zC = null;
                                                else { var TR = new Mz(Tm, yC),
                                                        Um = {};
                                                    Um.mimeType = sb.getAttribute("type");
                                                    Um.apiFramework = sb.getAttribute("apiFramework");
                                                    Um.Oc = oC(sb.getAttribute("variableDuration"));
                                                    zC = new Tz(TR, Um) }
                                                var AC = zC;
                                                null !== AC && Rm.push(AC)
                                        }
                                    }
                                    Q(R(), "vmfc", "" + Jj.length);
                                    var UR = 0 === qh.length ?
                                        "0" : "1";
                                    Q(R(), "vhc", UR);
                                    var VR = Jj;
                                    var WR = qh;
                                    var YR = Rm;
                                    m = VR;
                                    r = WR;
                                    n = YR;
                                    break;
                                case "Duration":
                                    g = sC(U(A));
                                    break;
                                case "AdParameters":
                                    f = D(U(A));
                                    break;
                                case "Icons":
                                    for (var BC = [], CC = p(xh(A)), ls = CC.next(); !ls.done; ls = CC.next()) {
                                        var oc = ls.value;
                                        if ("Icon" == oc.nodeName) {
                                            var DC = BC,
                                                ZR = DC.push,
                                                Mb = {};
                                            Mb.program = oc.getAttribute("program");
                                            Mb.apiFramework = oc.getAttribute("apiFramework");
                                            Mb.altText = oc.getAttribute("altText");
                                            Mb.hoverText = oc.getAttribute("hoverText");
                                            Mb.width = nC(oc, "width");
                                            Mb.height = nC(oc, "height");
                                            Mb.xPosition = oc.getAttribute("xPosition");
                                            Mb.yPosition = oc.getAttribute("yPosition");
                                            Mb.durationMs = sC(oc.getAttribute("duration"));
                                            Mb.wd = sC(oc.getAttribute("pxratio"));
                                            Mb.offsetMs = rD(oc.getAttribute("offset"), Mb.durationMs);
                                            Mb.resources = sD(oc);
                                            Mb.md = [];
                                            for (var FC = p(xh(oc)), ms = FC.next(); !ms.done; ms = FC.next()) {
                                                var ns = ms.value;
                                                switch (ns.nodeName) {
                                                    case "IconViewTracking":
                                                        Mb.md.push(U(ns));
                                                        break;
                                                    case "IconClicks":
                                                        for (var GC = null, HC = [], IC = [], JC = p(xh(ns)), os = JC.next(); !os.done; os = JC.next()) {
                                                            var Nj = os.value,
                                                                Wm = U(Nj),
                                                                $R = Nj.getAttribute("id");
                                                            switch (Nj.nodeName) {
                                                                case "IconClickThrough":
                                                                    null != Wm && (GC = EC(Nj, Wm)); break;
                                                                case "IconClickTracking":
                                                                    null != Wm && HC.push(new yz(Wm, $R)); break;
                                                                case "IconClickFallbackImages":
                                                                    IC = tD(Nj) }
                                                        }
                                                        Mb.iconClicks = new Rz({ clickThrough: GC, clickTracking: HC, Xd: IC })
                                                }
                                            }
                                            ZR.call(DC, new Sz(Mb))
                                        }
                                    }
                                    var ps = q = BC;
                                    Q(R(), "icc", ps.length.toString());
                                    if (0 < ps.length) {
                                        for (var KC = 0, LC = 0, MC = 0, NC = 0, vh = null, OC = "ns", PC = "ns", QC = p(ps), qs = QC.next(); !qs.done; qs = QC.next()) {
                                            for (var wh = qs.value, RC = p(wh.resources),
                                                    rs = RC.next(); !rs.done; rs = RC.next()) switch (rs.value.resourceType) {
                                                case "Html":
                                                    KC++; break;
                                                case "IFrame":
                                                    LC++; break;
                                                case "Static":
                                                    MC++; break;
                                                default:
                                                    NC++ }
                                            vh = wh.program;
                                            PC = wh.width ? wh.width.toString() : "ns";
                                            OC = wh.height ? wh.height.toString() : "ns"
                                        }
                                        Q(R(), "icrh", KC.toString());
                                        Q(R(), "icri", LC.toString());
                                        Q(R(), "icrs", MC.toString());
                                        Q(R(), "icru", NC.toString());
                                        vh && (16 < vh.length && (vh = vh.substring(0, 15) + "*"), Q(R(), "icp", vh));
                                        Q(R(), "icdi", OC + "x" + PC)
                                    }
                            }
                        }
                        var bS = rD(e.getAttribute("skipoffset"), g);
                        b.ub = new Zz({
                            duration: g,
                            Ya: bS,
                            trackingEvents: k,
                            mediaFiles: m,
                            Fb: n,
                            uf: r,
                            videoClicks: h,
                            adParameters: f,
                            icons: q
                        });
                        break;
                    case "NonLinearAds":
                        for (var SC = [], TC = [], UC = p(xh(e)), ts = UC.next(); !ts.done; ts = UC.next()) {
                            var us = ts.value;
                            switch (us.nodeName) {
                                case "NonLinear":
                                    for (var VC = SC, cS = VC.push, Vf = us, dS = sD(Vf), eS = Vf.getAttribute("id"), fS = nC(Vf, "width"), gS = nC(Vf, "height"), hS = Vf.getAttribute("apiFramework"), iS = sC(Vf.getAttribute("minSuggestedDuration")), WC = null, XC = null, YC = [], ZC = p(xh(Vf)), vs = ZC.next(); !vs.done; vs = ZC.next()) {
                                        var Xm = vs.value,
                                            Ym = U(Xm);
                                        if (null != Ym) switch (Xm.nodeName) {
                                            case "NonLinearClickThrough":
                                                XC = EC(Xm, Ym); break;
                                            case "NonLinearClickTracking":
                                                YC.push(new yz(Ym, Xm.getAttribute("id"))); break;
                                            case "AdParameters":
                                                WC = D(Ym) }
                                    }
                                    cS.call(VC, new $z({ id: eS, apiFramework: hS, width: fS, height: gS, minSuggestedDuration: iS, nonLinearClickThrough: XC, Be: YC, resources: dS, adParameters: WC }));
                                    break;
                                case "TrackingEvents":
                                    TC = uC(us)
                            }
                        }
                        b.Ic = new aA(SC, TC);
                        var ws = b.Ic.nonLinears;
                        Q(R(), "nlc", ws.length.toString());
                        if (0 < ws.length) {
                            for (var $C = 0, aD = 0, bD = 0, cD =
                                    0, xs = !1, dD = p(ws), ys = dD.next(); !ys.done; ys = dD.next())
                                for (var eD = p(ys.value.resources), zs = eD.next(); !zs.done; zs = eD.next()) { var fD = zs.value; switch (fD.resourceType) {
                                        case "Html":
                                            $C++;
                                            xs = xs || -1 != fD.uc.indexOf("<"); break;
                                        case "IFrame":
                                            aD++; break;
                                        case "Static":
                                            bD++; break;
                                        default:
                                            cD++ } }
                            Q(R(), "nlrh", $C.toString());
                            Q(R(), "nlri", aD.toString());
                            Q(R(), "nlrs", bD.toString());
                            Q(R(), "nlru", cD.toString());
                            Q(R(), "nlrhc", xs.toString())
                        }
                        break;
                    case "CompanionAds":
                        b.Cc = uD(e);
                        var As = b.Cc.j;
                        Q(R(), "ccc", As.length.toString());
                        if (0 < As.length) { for (var hD = 0, iD = 0, jD = 0, kD = 0, Bs = !1, lD = p(As), Cs = lD.next(); !Cs.done; Cs = lD.next())
                                for (var mD = p(Cs.value.resources), Ds = mD.next(); !Ds.done; Ds = mD.next()) { var nD = Ds.value; switch (nD.resourceType) {
                                        case "Html":
                                            hD++;
                                            Bs = Bs || -1 != nD.uc.indexOf("<"); break;
                                        case "IFrame":
                                            iD++; break;
                                        case "Static":
                                            jD++; break;
                                        default:
                                            kD++ } }
                            Q(R(), "ccrh", hD.toString());
                            Q(R(), "ccri", iD.toString());
                            Q(R(), "ccrs", jD.toString());
                            Q(R(), "ccru", kD.toString());
                            Q(R(), "ccrhc", Bs.toString()) }
                        break;
                    case "UniversalAdId":
                        var oD = b.Za,
                            jS =
                            oD.push,
                            Es = U(e);
                        Es || (Es = e.getAttribute("idValue"));
                        var kS = e.getAttribute("idRegistry");
                        jS.call(oD, new bA({ nd: kS, od: Es }))
                }
            }
            return new cA(b)
        },
        rD = function(a, b) { if (null != a) return a.endsWith("%") && null != b ? parseInt(a, 10) * b / 100 : sC(a) },
        uD = function(a) {
            var b = [],
                c = a.getAttribute("required");
            "any" != c && "all" != c && (c = "none");
            a = p(xh(a));
            for (var d = a.next(); !d.done; d = a.next()) {
                var e = d.value;
                if ("Companion" == e.nodeName) {
                    d = b;
                    var f = d.push,
                        g = sD(e),
                        h = e.getAttribute("id"),
                        k = e.getAttribute("adSlotID"),
                        m = e.getAttribute("apiFramework"),
                        n = "fluid" === e.getAttribute("width") && "fluid" === e.getAttribute("height"),
                        r = nC(e, "width"),
                        q = nC(e, "height"),
                        y = [],
                        x = null,
                        A = [],
                        L;
                    e = p(xh(e));
                    for (L = e.next(); !L.done; L = e.next()) { var F = L.value; switch (F.nodeName) {
                            case "TrackingEvents":
                                y = uC(F); break;
                            case "CompanionClickThrough":
                                L = U(F);
                                null != L && (x = EC(F, L)); break;
                            case "CompanionClickTracking":
                                L = U(F), null != L && A.push(new yz(L, F.getAttribute("id"))) } }
                    f.call(d, new Nz({ id: h, adSlotId: k, apiFramework: m, width: r, height: q, Sa: n, companionClickThrough: x, Zd: A, resources: g, trackingEvents: y }))
                }
            }
            return new Oz(b,
                c)
        },
        tD = function(a) { var b = [];
            a = p(xh(a)); for (var c = a.next(); !c.done; c = a.next()) { var d = c.value;
                c = sD(d).filter(function(g) { return "Static" == g.resourceType }); if (0 < c.length) { var e = nC(d, "width"),
                        f = nC(d, "height");
                    d = wD(d);
                    b.push(new Qz(c[0], e, f, d)) } } return b },
        wD = function(a) { a = p(xh(a)); for (var b = a.next(); !b.done; b = a.next())
                if (b = b.value, "AltText" == b.nodeName) return U(b);
            return null },
        sD = function(a) {
            var b = [];
            a = p(xh(a));
            for (var c = a.next(); !c.done; c = a.next()) {
                c = c.value;
                var d = U(c);
                if (null != d) switch (c.nodeName) {
                    case "StaticResource":
                        b.push(new Mz(d,
                            "Static", c.getAttribute("creativeType")));
                        break;
                    case "HTMLResource":
                        b.push(new Mz(d, "Html"));
                        break;
                    case "IFrameResource":
                        b.push(new Mz(d, "IFrame"))
                }
            }
            return b
        };
    var yD = function() { var a = { Lg: [new xD, new BB] },
                b = void 0 === a.Hi ? [] : a.Hi;
            this.l = void 0 === a.Lg ? [] : a.Lg;
            this.j = b },
        zD = function(a, b) { a: { var c = p(a.l); for (var d = c.next(); !d.done; d = c.next())
                    if (d = d.value, d.o(b)) { c = d; break a }
                c = null } if (null != c) { c = c.l(b);
                a = p(a.j); for (d = a.next(); !d.done; d = a.next()) d.value.j(b, c); return c } throw new EB("Ad Provider was not found for ad.", 1014); throw new EB("CreateAd call failed.", 1014); },
        AD = function(a, b) { a.j.unshift(b) };
    var BD = function(a, b) { this.l = a;
        this.j = void 0 === b ? null : b };
    var CD = function(a, b) { iA.call(this, a);
        this.j = b };
    u(CD, iA);
    var xD = function() {};
    u(xD, BB);
    xD.prototype.o = function(a) { a = (1 > a.j.length ? null : a.j[0]).Ga; return a instanceof sB ? null != a.creatives.find(function(b) { return null != b.ub }) : !1 };
    xD.prototype.l = function(a) { var b = new xz;
        this.j(a, b); return b };
    xD.prototype.j = function(a, b) {
        BB.prototype.j.call(this, a, b);
        for (var c = p(a.j), d = c.next(); !d.done; d = c.next()) d = d.value, DD(d, b), d = d.Ga, d instanceof sB && (b.description = d.description);
        a: if (c = 1 > a.j.length ? null : a.j[0])
            if (d = hA(a, BD), 0 < d.length)
                for (a = p(d), c = a.next(); !c.done; c = a.next()) c = c.value, c.l && (b.Ya = c.j ? c.j : 5E3);
            else {
                d = hA(a, iA);
                d = p(d);
                for (var e = d.next(); !e.done; e = d.next()) { e = p(e.value.trackingEvents); for (var f = e.next(); !f.done; f = e.next())
                        if ("skip" == f.value.eventType) { b.Ya = 5E3; break a } }
                c = p(c.Ga.creatives);
                for (d = c.next(); !d.done; d = c.next())
                    if ((d = d.value.ub) && null != d.Ya) { b.Ya = d.Ya; break a }
                a = hA(a, CD);
                a = p(a);
                for (c = a.next(); !c.done; c = a.next())
                    if ("Generic" == c.value.j) { b.Ya = 5E3; break }
            }
    };
    var DD = function(a, b) {
        for (var c = p(a.Ga.creatives), d = c.next(); !d.done; d = c.next()) {
            d = d.value;
            var e = d.ub;
            if (e) {
                b.creativeId = d.id;
                b.A = d.adId;
                b.Za = d.Za.map(function(k) { return new wz(k.od, k.nd) });
                for (var f = p(e.trackingEvents), g = f.next(); !g.done; g = f.next()) ew(b, cw(g.value));
                if (f = e.videoClicks) { g = p(f.clickTracking); for (var h = g.next(); !h.done; h = g.next()) ew(b, new bw("click", h.value.url));
                    g = p(f.customClicks); for (h = g.next(); !h.done; h = g.next()) h = h.value, h.id && ew(b, new bw(h.id, h.url)) }
                a.Ga instanceof sB && (b.durationMs =
                    d.ub.duration, e.adParameters && (b.adParameters = e.adParameters), f && f.clickThrough && (b.C = f.clickThrough.url, b.B = Dz(f.clickThrough)))
            }
        }
    };
    var FD = function(a) { this.l = a;
            this.j = ED(a) },
        ED = function(a) { return new Map(a.o.split("/").reduce(function(b, c, d) { d % 2 ? b[b.length - 1].push(c) : b.push([c]); return b }, [])) };
    FD.prototype.getId = function() { return GD(this, "id") };
    var GD = function(a, b) { var c = Fm(a.l, b); return c ? c : (a = a.j.get(b)) ? a : null };

    function HD(a) { var b = 0,
            c = 0,
            d = !1,
            e = [];
        a.forEach(function(f) { var g = D(f.mimeType).toLowerCase();
            e.push(g); "vpaid" === D(f.apiFramework).toLowerCase() ? d = !0 : "video/webm" === g && (b++, f.codec && f.codec.toLowerCase().includes("vp9") && c++) });
        Q(R(), "webm", b.toString());
        Q(R(), "vp9", c.toString());
        Q(R(), "vamt", e.join());
        Q(R(), "hvmf", D(d)) }

    function ID(a) { a = new FD(new K(a)); var b = GD(a, "manifest"),
            c = GD(a, "itag");
        b = b || c || 0;
        a = GD(a, "source") || "none";
        Q(R(), "vsrc", a);
        Q(R(), "bit", String(b)) }

    function JD(a) { Q(R(), "vms", "1");
        a.maxBitrate ? Iw(R(), "br", a.maxBitrate) : a.minBitrate && Iw(R(), "br", a.minBitrate);
        a.mimeType && Iw(R(), "mt", a.mimeType);
        a.width && a.height && Iw(R(), "vs", a.width + "x" + a.height);
        a.codec && Iw(R(), "vc", a.codec); var b = 0,
            c = "none";
        a.url && (a = new FD(new K(a.url)), b = GD(a, "itag"), b = GD(a, "manifest") || b || 0, c = GD(a, "source"));
        Q(R(), "bit", String(b));
        Q(R(), "vsrc", c) }

    function KD(a) { if (a instanceof Kz) { var b = a.A,
                c = a.o; if (243 === b && c) { var d = a.l + '; codecs="vp09.00.10.08"',
                    e = a.B + '; codecs="' + a.ra + '"';
                b = 1E3 * TA[b] || 4E5;
                c = 1E3 * TA[c] || 4E5; var f = gh(window),
                    g = a.getHeight() || f.height;
                a = a.getWidth() || f.width; return { type: "media-source", audio: { contentType: e, channels: "2", bitrate: c, samplerate: 44100 }, video: { contentType: d, width: a, height: g, bitrate: b, framerate: 30 } } } } return null };
    var LD = function(a) { this.j = a = void 0 === a ? [] : a },
        qB = function(a, b) {
            Lw("ghmsh_s");
            for (var c = "", d = "", e = "", f = 0, g = p(b.l), h = g.next(); !h.done; h = g.next()) h = h.value, c += h.itag + ",", 0 <= h.url.indexOf("gvt1.com") && f++;
            g = p(b.o);
            for (h = g.next(); !h.done; h = g.next()) h = h.value, d += h.itag + ",", 0 <= h.url.indexOf("gvt1.com") && f++;
            g = p(b.j);
            for (h = g.next(); !h.done; h = g.next()) h = h.value, e += h.itag + ",", 0 <= h.url.indexOf("gvt1.com") && f++;
            g = p(b.A);
            for (h = g.next(); !h.done; h = g.next()) h = h.value, "application/dash+xml" == h.mimeType ? Q(R(), "ghmsh_hd",
                "1") : "application/vnd.apple.mpegurl" == h.mimeType && Q(R(), "ghmsh_hh", "1");
            Q(R(), "ghmsh_mi", c);
            Q(R(), "ghmsh_vi", d);
            Q(R(), "ghmsh_ai", e);
            Q(R(), "ghmsh_gvt", f.toString());
            a = MD(a, b);
            a || (Lw("ghmsh_f"), 0 < b.l.length ? a = ND(b.l[0]) : 0 < b.j.length && 0 < b.o.length ? a = OD(b.o[0], b.j[0]) : (Lw("ghmsh_ff"), a = null));
            return a ? ((b = a) ? (Q(R(), "ams", "1"), b.getWidth() && b.getHeight() && Q(R(), "vs", b.getWidth() + "x" + b.getHeight()), b.oa && Q(R(), "vc", b.oa), b instanceof Lz ? (b.j && Q(R(), "mt", b.j), 0 <= b.getMediaUrl().indexOf("gvt1.com") && Q(R(),
                "gvt1", "1"), ID(b.getMediaUrl())) : b instanceof Kz && (b.l && Q(R(), "mt", b.l), b.A && (Q(R(), "bit", String(b.A)), 0 <= b.j.indexOf("gvt1.com") && Q(R(), "gvt1", "1")), b.o && Q(R(), "bait", String(b.o)), ID(b.j))) : Q(R(), "ams", "0"), PD(a), [a]) : []
        },
        MD = function(a, b) {
            var c = null;
            a = p(a.j);
            for (var d = a.next(); !d.done; d = a.next()) {
                var e = d.value;
                switch (e.type) {
                    case "dash":
                        if (c = QD(b, "application/dash+xml")) return c;
                        break;
                    case "hls":
                        if (c = QD(b, "application/vnd.apple.mpegurl")) return c;
                        break;
                    case "itag":
                        if (e.Ib) a: {
                            c = e.Ib;d = p(b.l);
                            for (e =
                                d.next(); !e.done; e = d.next())
                                if (e = e.value, e.itag == c) { c = ND(e); break a }
                            c = null
                        }
                        else if (e.Kd) { d = c = void 0; var f = b,
                                g = e.Kd;
                            e = e.Rd; for (var h = p(f.o), k = h.next(); !k.done; k = h.next()) k = k.value, k.itag == g && (d = k); if (e)
                                for (f = p(f.j), k = f.next(); !k.done; k = f.next()) g = k.value, g.itag == e && (c = g);
                            c = d && c ? OD(d, c) : d ? new Kz({ Kh: d.url, Qg: "", videoItag: d.itag, audioItag: null, Jh: d.mimeType, Pg: "", oa: d.oa, ra: "", height: d.height, width: d.width, na: d.na || !1, qk: d.Bb, Mi: 0 }) : null }
                        if (c) return c
                }
            }
            return null
        },
        QD = function(a, b) {
            a = p(a.A);
            for (var c =
                    a.next(); !c.done; c = a.next())
                if (c = c.value, c.mimeType == b) return ND(c);
            return null
        },
        ND = function(a) { return new Lz({ jh: a.url, mimeType: a.mimeType, itag: a.itag, oa: a.oa, ra: a.ra, height: a.height, width: a.width, na: a.na || !1, Bb: a.Bb }) },
        OD = function(a, b) { return new Kz({ Kh: a.url, Qg: b.url, videoItag: a.itag, audioItag: b.itag, Jh: a.mimeType, Pg: b.mimeType, oa: a.oa, ra: b.ra, height: a.height, width: a.width, na: a.na && b.na || !1, qk: a.Bb, Mi: b.Bb }) },
        PD = function(a) {
            a = KD(a);
            var b, c;
            a && (null == (b = navigator) ? 0 : null == (c = b.mediaCapabilities) ?
                0 : c.decodingInfo) && navigator.mediaCapabilities.decodingInfo(a).then(function(d) { Q(R(), "mcsu", d.supported ? "1" : "0");
                Q(R(), "mcsm", d.smooth ? "1" : "0");
                Q(R(), "mcpe", d.powerEfficient ? "1" : "0") })
        };
    var RD = function() {};
    RD.prototype.j = function(a) {
        if (!rC(a, "activeview")) return null;
        var b = [],
            c = pC(a, "trackingConfiguration");
        c = p(c);
        for (var d = c.next(); !d.done; d = c.next()) {
            d = pC(d.value, "trackingEventConfiguration");
            d = p(d);
            for (var e = d.next(); !e.done; e = d.next()) {
                var f = e.value;
                e = f.getAttribute("event");
                var g = f.getAttribute("id");
                if (null == g || null == e) e = null;
                else {
                    e = e.toLowerCase();
                    g = g.toLowerCase();
                    var h = [];
                    f = pC(f, "trackingEventCriteria");
                    f = p(f);
                    for (var k = f.next(); !k.done; k = f.next()) k = k.value.getAttribute("value"), null != k && h.push(k.toLowerCase());
                    e = h.length ? new Vn(g, e, h) : null
                }
                e && b.push(e)
            }
        }
        c = vC(a);
        e = qC(a, "activeViewMetadata");
        d = "";
        e && (d = U(e) || "");
        a = qC(a, "activeViewFlags");
        e = "";
        a && (e = U(a) || "");
        return new jA(c, b, d, e)
    };
    var SD = function() {};
    SD.prototype.j = function(a) {
        if (!rC(a, "adsense")) return null;
        for (var b = null, c = null, d = null, e, f = [], g, h = null, k = null, m = null, n = p(xh(a)), r = n.next(); !r.done; r = n.next()) switch (r = r.value, r.nodeName.toLowerCase()) {
            case "attributiontext":
                b = U(r);
                break;
            case "attributionurl":
                c = U(r);
                break;
            case "conversionurl":
                d = U(r);
                break;
            case "is_pharma":
                e = oC(r.getAttribute("bool"));
                break;
            case "checkedevents":
                f = TD(r);
                break;
            case "showyoutubeannotations":
                g = oC(U(r));
                break;
            case "ui":
                h = null;
                r = qC(r, "config");
                if (null != r) {
                    var q = qC(r, "context");
                    if (null != q && "default" == q.getAttribute("data").toLowerCase() && (h = new lA, q = qC(r, "params"))) { r = h;
                        q = p(xh(q)); for (var y = q.next(); !y.done; y = q.next()) switch (y = y.value, y.nodeName.toLowerCase()) {
                            case "audio_muted_on_start":
                                r.Qd = oC(y.getAttribute("bool")) || !1; break;
                            case "attribution_text":
                                r.Ra = y.getAttribute("data"); break;
                            case "attribution_url":
                                r.zb = y.getAttribute("data"); break;
                            case "signals":
                                r.Pe = nC(y, "int") || 0 } }
                }
                break;
            case "visibleurl":
                k = U(r);
                break;
            case "whythisad":
                a: {
                    m = p(xh(r));
                    for (r = m.next(); !r.done; r =
                        m.next())
                        if (r = r.value, "wtaclickthroughurl" == r.nodeName.toLowerCase()) { m = U(r); break a }
                    m = null
                }
                m && Q(R(), "wta", "1")
        }
        return new mA(vC(a), { Ra: b, zb: c, ae: d, isPharma: e, Ae: f, Mc: g, Se: h, Qc: k, Ld: m })
    };
    var TD = function(a) { var b = [];
        Array.from(xh(a)).forEach(function(c) {
            (c = c.getAttribute("id")) && b.push(c.toLowerCase()) }); return b };
    var UD = function() {};
    UD.prototype.j = function(a) { if (!rC(a, "AdVerifications")) return null; var b = [];
        a = pC(a, "AdVerifications");
        a = p(a); for (var c = a.next(); !c.done; c = a.next()) b.push.apply(b, t(tC(c.value))); return new vB(b) };
    var VD = function() {};
    VD.prototype.j = function(a) { a = vC(a); return 0 < a.length ? new iA(a) : null };
    var WD = function() {};
    WD.prototype.j = function(a) { if (!rC(a, "esp")) return null; var b = [];
        a = p(xh(a)); for (var c = a.next(); !c.done; c = a.next()) { var d = c.value; "EspLibrary" == d.nodeName && (c = qC(d, "LibraryName")) && (c = U(c)) && (d = (d = qC(d, "LibraryUrl")) ? U(d) : null, b.push({ Ti: c, Om: d })) } return new OA(b) };
    var XD = function() {};
    XD.prototype.j = function(a) { var b = rC(a, "gfp_cookie"),
            c = rC(a, "gfp_cookie_v2"); if (!b && !c) return null;
        a = p(xh(a)); for (b = a.next(); !b.done; b = a.next()) { var d = b.value; if ("Cookie" == d.nodeName) { b = d.getAttribute("domain"); var e = nC(d, "expires"),
                    f = d.getAttribute("path");
                d = d.getAttribute("value"); if (b && e && f && d) return new PA(d, e, f, b, c) } } return null };
    var YD = function() {};
    YD.prototype.j = function(a) {
        if (!rC(a, "GoogleHostedMedia")) return null;
        Q(R(), "hghme", "1");
        var b = [],
            c = [],
            d = [],
            e = [],
            f, g = qC(a, "clientplaybacknonce");
        g && (f = U(g));
        a = p(xh(a));
        for (g = a.next(); !g.done; g = a.next()) {
            var h = g.value;
            g = null;
            switch (h.nodeName.toLowerCase()) {
                case "audiourls":
                    g = "audio"; break;
                case "manifestsurls":
                    g = "manifest"; break;
                case "muxedmediaurls":
                    g = "muxed"; break;
                case "videourls":
                    g = "video" }
            if (g) {
                h = p(xh(h));
                for (var k = h.next(); !k.done; k = h.next()) {
                    k = k.value;
                    var m = U(k),
                        n = k.getAttribute("delivery"),
                        r =
                        nC(k, "itag"),
                        q = k.getAttribute("mimeType"),
                        y = oC(k.getAttribute("mseCompatible")),
                        x = nC(k, "contentLength"),
                        A = null,
                        L = null,
                        F = null,
                        na = null,
                        oa = null,
                        Ga = null;
                    if ("video" == g || "muxed" == g) A = k.getAttribute("videoCodec"), L = nC(k, "videoBitrate"), oa = nC(k, "width"), Ga = nC(k, "height");
                    if ("audio" == g || "muxed" == g) F = k.getAttribute("audioCodec"), na = nC(k, "audioBitrate");
                    if (null != m && null != g) switch (k = new QA(m, g, { delivery: n, itag: r, mimeType: q, oa: A, ra: F, mg: L, lf: na, na: y, width: oa, height: Ga, Bb: x }), g) {
                        case "audio":
                            b.push(k);
                            break;
                        case "manifest":
                            c.push(k);
                            break;
                        case "muxed":
                            d.push(k);
                            break;
                        case "video":
                            e.push(k)
                    }
                }
            }
        }
        return new RA(f ? f : "None", b, c, d, e)
    };
    var ZD = function() {};
    ZD.prototype.j = function(a) { if (!rC(a, "gpid_wta")) return null;
        a = p(xh(a)); for (var b = a.next(); !b.done; b = a.next())
            if (b = b.value, "AttributionData" == b.nodeName && (b = U(b))) return new rB(b);
        return null };
    var $D = function() {};
    $D.prototype.j = function(a) { if (!rC(a, "metrics")) return null;
        a = p(xh(a)); for (var b = a.next(); !b.done; b = a.next()) switch (b = b.value, b.nodeName) {
            case "AdEventId":
                var c = Dh(b); break;
            case "FeEventId":
                var d = Dh(b) }
        return new tB(c, d) };
    var aE = function() {};
    aE.prototype.j = function(a) { return rC(a, "programmatic") ? (a = qC(a, "DealId")) && (a = U(a)) && !w(a) ? new wB(a) : null : null };
    var bE = function() {};
    bE.prototype.j = function(a) { if (!rC(a, "sodar")) return null;
        a = p(xh(a)); for (var b = a.next(); !b.done; b = a.next()) switch (b = b.value, b.nodeName) {
            case "Siub":
                var c = U(b); break;
            case "Scs":
                var d = U(b); break;
            case "Bgub":
                var e = U(b); break;
            case "Bgp":
                var f = U(b) }
        return c && d && e && f ? new xB(c, d, e, f) : null };
    var cE = function() {};
    cE.prototype.j = function(a) { if (!rC(a, "uisettings")) return null; var b;
        (a = qC(a, "uihideable")) && (b = oC(U(a))); return new yB(b) };
    var dE = function() {};
    dE.prototype.j = function(a) {
        if (!rC(a, "youtubehostedad")) return null;
        var b = null,
            c = !1,
            d = null,
            e = null,
            f = !1,
            g = null,
            h = null,
            k = null,
            m = null,
            n = null,
            r = null,
            q = qC(a, "youtubevideoid");
        q && (b = U(q));
        if (q = qC(a, "istrueview")) q = oC(U(q)), void 0 != q && (c = q);
        (q = qC(a, "videotitle")) && (d = U(q));
        (q = qC(a, "videothumbnailurl")) && (e = U(q));
        if (q = qC(a, "isvideounlisted")) q = oC(U(q)), void 0 != q && (f = q);
        (q = qC(a, "channelid")) && (g = U(q));
        (q = qC(a, "channeltitle")) && (h = U(q));
        (q = qC(a, "channelthumbnailurl")) && (k = U(q));
        (q = qC(a, "channelcustomurl")) && (m =
            U(q));
        (q = qC(a, "format")) && (n = U(q));
        (a = qC(a, "youtubevisitordata")) && (r = U(a));
        return new zB({ videoId: b, Gb: c, videoTitle: d, Hd: e, rd: f, channelId: g, channelTitle: h, Yc: k, Wd: m, format: n, visitorData: r })
    };
    var eE = function() { this.j = null;
        this.A = this.o = this.l = this.assetKey = this.apiKey = "";
        this.format = "hls";
        this.C = this.D = !1;
        this.U = this.F = "";
        this.G = !1;
        this.videoId = "";
        this.omidAccessModeRules = {};
        this.Wc = this.O = this.projectNumber = this.region = this.H = "";
        this.B = !1 };
    var fE = function(a) { this.j = void 0 === a ? 0 : a };
    var gE = Ox.isSelected() ? -1 : 1E3,
        iE = function(a) { a = void 0 === a ? {} : a; var b = void 0 === a.Wa ? null : a.Wa,
                c = void 0 === a.mimeTypes ? [] : a.mimeTypes;
            this.o = void 0 === a.Td ? 0 : a.Td;
            this.Wa = b;
            this.j = c.length ? c : df(UA);
            this.Wa && (this.j = this.j.filter(function(d) { return hE(d) }));
            Bx.isSelected() && this.j.push("application/javascript");
            this.j = this.j.map(function(d) { return d.toLowerCase() }) };
    iE.prototype.l = function(a) {
        HD(a);
        var b = 0 >= this.o ? ck() ? 500 : gE : this.o;
        a = jE(this, a);
        if (0 == a.length) b = null;
        else {
            Iw(R(), "smb", b);
            for (var c = null, d = p(a), e = d.next(); !e.done; e = d.next()) { e = e.value; var f = e.minBitrate,
                    g = e.maxBitrate;
                null != f && f > b || null != g && g < b || !(null == f || null == c || null == c.minBitrate || c.minBitrate > f) || (c = e) }
            if (!c)
                for (c = null, d = p(a), e = d.next(); !e.done; e = d.next())
                    if (e = e.value, f = e.minBitrate, g = e.maxBitrate, !(null != g && g > b))
                        if (null == g || null == c || null == c.maxBitrate || c.maxBitrate < g) c = e;
                        else if (null == f ||
                null == c.minBitrate || c.maxBitrate == g && c.minBitrate > f) c = e;
            if (!c)
                for (c = null, d = p(a), e = d.next(); !e.done; e = d.next())
                    if (e = e.value, f = e.minBitrate, g = e.maxBitrate, !(null != f && f < b))
                        if (null != c && c.minBitrate == f && c.maxBitrate < g) c = e;
                        else if (null == c || c.minBitrate > f) c = e;
            b = c
        }
        b || kE(a);
        a = [];
        b && (a.push(b), JD(b));
        return a
    };
    var jE = function(a, b) { var c = b.length;
            b = b.filter(function(f) { var g = f.mimeType;
                w(D(f.url)) ? f = !1 : (g = D(g).toLowerCase(), f = w(g) || "streaming" == f.delivery && "application/x-mpegurl" != D(g) || wc && yA(xA, 2.3) && -1 != g.indexOf("application/ogg") ? !1 : !0); return f }); var d = b.length;
            b = b.filter(function(f) { return a.j.includes(D(f.mimeType).toLowerCase()) }); var e = b.length;
            Iw(R(), "gpm_i", c);
            Iw(R(), "gpm_c", d);
            Iw(R(), "gpm_a", e); return b },
        kE = function(a) {
            a = a.map(function(b) { return D(b.mimeType).toLowerCase() });
            Q(R(), "plmt", a.join());
            R().l()
        };
    var lE = function() {};
    lE.prototype.filter = function(a, b, c) { if (!c) return a;
        b = [];
        a = p(a); for (c = a.next(); !c.done; c = a.next()) c = c.value, hE(oB(c.mimeType, c.codec)) && b.push(c); return b };
    var mE = function(a) { a = void 0 === a ? {} : a; var b = void 0 === a.filters ? [] : a.filters,
            c = void 0 === a.vh ? null : a.vh;
        this.Wa = void 0 === a.Wa ? null : a.Wa;
        this.o = b;
        this.j = c };
    mE.prototype.l = function(a, b) {
        HD(a);
        for (var c = p(this.o), d = c.next(); !d.done; d = c.next()) a = d.value.filter(a, b, this.Wa);
        var e = a;
        b = [];
        if (this.j) {
            a = b.push;
            c = a.apply;
            d = this.j.j;
            var f = null,
                g = null,
                h = null;
            e = p(e);
            for (var k = e.next(); !k.done; k = e.next()) k = k.value, k.minBitrate && k.minBitrate <= d && k.maxBitrate && k.maxBitrate >= d ? f && f.minBitrate && f.minBitrate < k.minBitrate || (f = k) : k.maxBitrate && k.maxBitrate < d ? g && g.maxBitrate && g.maxBitrate > k.maxBitrate || (g = k) : k.minBitrate && k.minBitrate > d && !(h && h.minBitrate && h.minBitrate <
                k.minBitrate) && (h = k);
            d = f || g || h;
            c.call(a, b, t(d ? [d] : []))
        } else 0 < e.length && b.push(e[0]);
        0 < b.length && b[0] ? (Q(R(), "mfs", "1"), JD(b[0])) : Q(R(), "mfs", "0");
        return b
    };
    var nE = function(a) { var b = void 0 === a.Pi ? [] : a.Pi;
        this.j = (void 0 === a.Mg ? [] : a.Mg).map(function(c) { return c.toLowerCase() });
        this.l = b.map(function(c) { return c.toLowerCase() }) };
    nE.prototype.filter = function(a) { var b = this;
        0 < this.j.length && (a = a.filter(function(c) { return c.mimeType && b.j.includes(c.mimeType.toLowerCase()) || b.j.includes(oB(c.mimeType, c.codec)) }));
        0 < this.l.length && (a = a.filter(function(c) { return c.mimeType && b.l.includes(c.mimeType.toLowerCase()) || b.l.includes(oB(c.mimeType, c.codec)) ? !1 : !0 })); return a };
    var oE = function(a) { this.j = a };
    oE.prototype.toString = function() { return this.j };
    var pE = new oE("ad_author_icon_update"),
        qE = new oE("ad_author_update"),
        rE = new oE("ad_cta_text_update"),
        sE = new oE("ad_title_update"),
        tE = new oE("in_creative_widget_shown"),
        uE = new oE("in_creative_widget_navigation_dispatched"),
        vE = new oE("gpid_consent_data_changed"),
        wE = function(a, b, c) { this.type = a;
            this.l = b;
            this.j = c },
        xE = new oE("publisher_invoked_skip"),
        yE = new oE("ui_ad_attribution_clicked"),
        zE = new oE("ui_ad_author_clicked"),
        AE = new oE("ui_ad_clicked"),
        BE = new oE("ui_ad_mouse_enter"),
        CE = new oE("ui_ad_mouse_over"),
        DE = new oE("ui_ad_mouse_leave"),
        EE = new oE("ui_author_icon_clicked"),
        FE = new oE("ui_ad_title_clicked"),
        GE = new oE("ui_close_button_clicked"),
        HE = new oE("ui_close_button_shown"),
        IE = new oE("ui_close_countdown_shown"),
        JE = new oE("ui_close_countdown_complete"),
        KE = new oE("ui_close_countdown_timeout"),
        LE = new oE("ui_endcap_learn_more_clicked"),
        ME = new oE("ui_focus_element"),
        NE = new oE("ui_focus_skip_button"),
        OE = new oE("ui_icon_fallback_image_closed"),
        PE = new oE("ui_learn_more_clicked"),
        QE = function(a, b) {
            this.xPosition =
                a;
            this.yPosition = b
        },
        RE = new oE("ui_overlay_clicked"),
        SE = new oE("ui_overlay_faded"),
        TE = new oE("ui_overlay_rendered"),
        UE = new oE("ui_play_pause_clicked"),
        VE = new oE("ui_play_pause_hidden"),
        WE = new oE("ui_play_pause_shown"),
        XE = new oE("ui_recall_button_clicked"),
        YE = new oE("ui_skip_clicked"),
        ZE = new oE("ui_skip_shown"),
        $E = new oE("ui_vast_icon_clicked"),
        aF = new oE("ui_vast_icon_rendered"),
        bF = new oE("ui_wta_clicked"),
        cF = new oE("video_clicked"),
        dF = new oE("video_pause"),
        eF = new oE("video_ad_shown"),
        fF = new oE("video_started"),
        gF = function(a, b, c, d, e) { this.currentTimeSeconds = a;
            this.durationSeconds = b;
            this.j = void 0 === c ? null : c;
            this.adPosition = void 0 === d ? null : d;
            this.totalAds = void 0 === e ? null : e },
        hF = new oE("video_time_update");
    var iF = function() { return M('<div class="' + N("endcapUi") + '"></div>') },
        jF = function() { return M('<div class="' + N("actionStaticImageEndcapContainer") + '"><img class="' + N("advertiserVideoThumbnail") + '"/></div>') },
        kF = function(a) { a = a.ctaButtonText; return M('<div class="' + N("callToActionContainer") + '"><div class="' + N("callToActionButton") + '">' + bn(a) + "</div></div>") };
    var lF = function(a) { a = a || {};
            a = a.learnMoreText; return M('<div class="' + N("videoAdUiLearnMore") + '" data-ck-tag="main-cta" data-ck-navigates="true">' + bn(a) + "</div>") },
        mF = function() { var a = "Learn More " + bn(""); return M(a) },
        nF = function(a) { a = a.learnMoreText; return M('<div class="' + N("learnMoreContainer") + '"><div class="' + N("learnMoreButton") + '" data-ck-tag="main-cta" data-ck-navigates="true">' + bn(a) + "</div></div>") };
    var oF = function() { H.call(this);
        this.element = null;
        this.j = new OB(this);
        G(this, this.j) };
    u(oF, H);
    oF.prototype.N = function() { this.j = null };
    var rF = function(a, b) { oF.call(this);
        this.o = this.l = null;
        this.element = An(iF, {});
        a.appendChild(this.element);
        T(this.j, this.element, "touchmove", function(c) { c.preventDefault() });
        pF(this);
        qF(this, b);
        400 >= (parseInt(mj(a, "width"), 10) || parseInt(a.getAttribute("width"), 10)) && Yl(this.element, "videoAdUi-mobile");
        this.hide() };
    u(rF, oF);
    var pF = function(a) { a.l = An(jF, {});
            a.element.appendChild(a.l);
            T(a.j, a.l, "click", function(b) { Lw("sic");
                b.stopPropagation() }) },
        qF = function(a, b) { a.o = An(kF, { ctaButtonText: b || mF() });
            a.element.appendChild(a.o);
            T(a.j, dh("callToActionButton", a.element), "click", function(c) { Lw("ecbc");
                I(a, "video_card_endcap_action");
                c.stopPropagation() }) };
    rF.prototype.show = function() { vj(this.element, !0) };
    rF.prototype.hide = function() { vj(this.element, !1) };
    rF.prototype.N = function() { ph(this.element);
        this.element = null;
        oF.prototype.N.call(this) };
    var sF = function() { return M('<div class="' + N("ctaAdvertiserInfo") + '"><div class="' + N("advertiserChannelThumbnailContainer") + '"><img class="' + N("advertiserChannelThumbnail") + '"/></div><div class="' + N("advertiserHeadline") + '"></div><div class="' + N("advertiserDescription") + '"></div></div>') };
    var uF = function(a) { oF.call(this);
        this.o = a;
        this.l = null;
        this.element = An(sF, {});
        tF(this) };
    u(uF, oF);
    var tF = function(a) { a.l = dh("advertiserChannelThumbnail", a.element);
        T(a.j, a.l, "click", function() { a.o ? Lw("ectc") : Lw("ctc") });
        T(a.j, dh("advertiserHeadline", a.element), "click", function() { a.o ? Lw("eadc") : Lw("adc") });
        T(a.j, dh("advertiserDescription", a.element), "click", function() { a.o ? Lw("eahc") : Lw("ahc") }) };
    uF.prototype.N = function() { ph(this.element);
        this.element = null;
        oF.prototype.N.call(this) };
    var vF = function() { H.call(this);
        this.j = new OB(this);
        G(this, this.j) };
    u(vF, H);
    vF.prototype.N = function() { this.j = null };
    vF.prototype.Sd = function() {};
    var wF = function() { vF.apply(this, arguments) };
    u(wF, vF);
    wF.prototype.Nd = function() {};
    var xF = function(a) { a = void 0 === a ? !1 : a;
        wF.call(this);
        this.l = new uF(a);
        this.B = dh("advertiserChannelThumbnail", this.l.element);
        this.o = dh("advertiserDescription", this.l.element);
        this.A = dh("advertiserHeadline", this.l.element) };
    u(xF, wF);
    xF.prototype.Uc = function(a) { if (a) { var b = this.l;
            b.l.setAttribute("src", a);
            kj(b.l, "display", "inline") } };
    xF.prototype.bf = function(a) { a && this.A && zh(this.A, a) };
    xF.prototype.Nd = function(a) { a && this.o && zh(this.o, a) };
    xF.prototype.Sd = function(a) { a.insertBefore(this.l.element, a.childNodes[0] || null) };
    var yF = function(a) { T(a.j, a.B, "click", function(b) { b.stopPropagation();
            I(a, "video_card_endcap_action") });
        T(a.j, a.o, "click", function(b) { b.stopPropagation();
            I(a, "video_card_endcap_action") });
        T(a.j, a.A, "click", function(b) { b.stopPropagation();
            I(a, "video_card_endcap_action") }) };
    var BF = function(a, b) { a = a.skipText; return M('<div class="' + N("videoAdUiSkipWidgetV2") + '">' + zF(null, b) + AF(a) + "</div>") },
        zF = function() { var a = '<div class="' + N("videoAdUiPreSkipContainer") + '" data-ck-tag="preskip" data-ck-navigates="false"><div class="' + N("videoAdUiPreSkipButton") + '" tabindex="0" role="button"><div class="' + N("videoAdUiPreSkipText") + '" aria-label="';
            a += "Skip Ad Countdown".replace(gn, an); return M(a + '"></div></div></div>') },
        CF = function(a) { a = a || {}; return "You can skip this ad in " + a.We },
        DF =
        function(a) { return AF(a.skipText) },
        AF = function(a) {
            var b = '<div class="' + N("videoAdUiSkipContainer") + " " + N("html5-stop-propagation") + '"><button class="' + N("videoAdUiSkipButton") + " " + N("videoAdUiAction") + " " + N("videoAdUiRedesignedSkipButton") + '" aria-label="';
            b += "Skip Ad".replace(gn, an);
            b += '" data-ck-tag="skip" data-ck-navigates="false"><div class="' + N("videoAdUiSkipButtonExperimentalText") + '">' + bn(a) + '</div><div class="' + N("videoAdUiSkipIcon") + '"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M16 18h2V6h-2M6 18l8.5-6L6 6v12z"/></svg></div></button></div>';
            return M(b)
        };
    var EF = function() { H.call(this);
        this.l = 0;
        this.endTime = this.startTime = null };
    Ya(EF, H);
    var FF = function(a, b) { Array.isArray(b) || (b = [b]);
            b = b.map(function(c) { return "string" === typeof c ? c : c.property + " " + c.duration + "s " + c.timing + " " + c.delay + "s" });
            kj(a, "transition", b.join(",")) },
        GF = Cg(function() {
            if (lc) return Hc("10.0");
            var a = lh(document, "DIV"),
                b = qc ? "-webkit" : pc ? "-moz" : lc ? "-ms" : null,
                c = { transition: "opacity 1s linear" };
            b && (c[b + "-transition"] = "opacity 1s linear");
            c = { style: c };
            if (!mg.test("div")) throw Error("");
            if ("DIV" in og) throw Error("");
            b = void 0;
            var d = "";
            if (c)
                for (m in c)
                    if (Object.prototype.hasOwnProperty.call(c,
                            m)) {
                        if (!mg.test(m)) throw Error("");
                        var e = c[m];
                        if (null != e) {
                            var f = void 0;
                            var g = m;
                            if (e instanceof wf) e = xf(e);
                            else if ("style" == g.toLowerCase()) { if (!Oa(e)) throw Error(""); if (!(e instanceof Pf)) { var h = ""; for (f in e)
                                        if (Object.prototype.hasOwnProperty.call(e, f)) { if (!/^[-_a-zA-Z0-9]+$/.test(f)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + f); var k = e[f];
                                            null != k && (k = Array.isArray(k) ? k.map(Sf).join(" ") : Sf(k), h += f + ":" + k + ";") }
                                    e = h ? new Pf(h, Of) : Rf }
                                e = Qf(e) } else {
                                if (/^on/i.test(g)) throw Error("");
                                if (g.toLowerCase() in
                                    ng)
                                    if (e instanceof Af) e = Bf(e).toString();
                                    else if (e instanceof Hf) e = If(e);
                                else if ("string" === typeof e) e = (Mf(e) || Nf).Ta();
                                else throw Error("");
                            }
                            e.rb && (e = e.Ta());
                            f = g + '="' + tb(String(e)) + '"';
                            d += " " + f
                        }
                    }
            var m = "<div" + d;
            null == b ? b = [] : Array.isArray(b) || (b = [b]);
            !0 === rf.div ? m += ">" : (b = lg(b), m += ">" + gg(b).toString() + "</div>");
            m = hg(m);
            Fg(a, m);
            a = a.firstChild;
            m = a.style[Ug("transition")];
            return "" != ("undefined" !== typeof m ? m : a.style[jj(a, "transition")] || "")
        });
    var HF = function(a, b, c, d, e) { EF.call(this);
        this.j = a;
        this.B = b;
        this.C = c;
        this.o = d;
        this.D = Array.isArray(e) ? e : [e] };
    Ya(HF, EF);
    var IF = function(a) { 1 != a.l && (I(a, "begin"), I(a, "play"), a.startTime = Xa(), a.l = 1, GF() ? (kj(a.j, a.C), a.A = Qi(a.Wj, void 0, a)) : a.cf(!1)) };
    l = HF.prototype;
    l.Wj = function() { sj(this.j);
        FF(this.j, this.D);
        kj(this.j, this.o);
        this.A = Qi(Va(this.cf, this, !1), 1E3 * this.B) };
    l.stop = function() { 1 == this.l && this.cf(!0) };
    l.cf = function(a) { kj(this.j, "transition", "");
        Ri(this.A);
        kj(this.j, this.o);
        this.endTime = Xa();
        this.l = 0;
        a ? I(this, "stop") : I(this, "finish");
        I(this, "end") };
    l.N = function() { this.stop();
        HF.ib.N.call(this) };
    l.pause = function() {};
    var JF = function(a, b) { return new HF(a, b, { opacity: 0 }, { opacity: 1 }, { property: "opacity", duration: b, timing: "ease-out", delay: 0 }) };
    var LF = function(a) { oF.call(this);
        this.D = this.C = this.o = this.A = this.F = this.B = this.l = null;
        KF(this, a) };
    u(LF, oF);
    var KF = function(a, b) { a.l = An(zF);
            a.B = dh("videoAdUiPreSkipButton", a.l);
            a.F = dh("videoAdUiPreSkipText", a.B);
            a.o = An(DF, { skipText: jb("Skip Ad ") });
            a.A = dh("videoAdUiSkipButton", a.o);
            vj(a.l, !1);
            b.appendChild(a.l);
            b.appendChild(a.o);
            T(a.j, a.A, "click", function(c) { c.stopPropagation();
                I(a, "click") }) },
        MF = function(a) { a.B.style.backgroundColor = "black";
            a.A.style.backgroundColor = "black" },
        NF = function(a) { vj(a.o, !1);
            uj(a.o, 0) };
    LF.prototype.show = function() { vj(this.B, !0);
        vj(this.A, !0) };
    LF.prototype.hide = function() { vj(this.B, !1);
        vj(this.A, !1) };
    LF.prototype.N = function() { Gh(this.C);
        this.C = null;
        Gh(this.D);
        this.D = null;
        this.l && (ph(this.l), this.l = null);
        this.A && (this.A = null);
        this.o && (ph(this.o), this.o = null);
        oF.prototype.N.call(this) };
    var OF = function() { if (vc) { var a = /Windows NT ([0-9.]+)/; return (a = a.exec(xb())) ? a[1] : "0" } return uc ? (a = /1[0|1][_.][0-9_.]+/, (a = a.exec(xb())) ? a[0].replace(/_/g, ".") : "10") : wc ? (a = /Android\s+([^\);]+)(\)|;)/, (a = a.exec(xb())) ? a[1] : "") : xc || yc || zc ? (a = /(?:iPhone|CPU)\s+OS\s+(\S+)/, (a = a.exec(xb())) ? a[1].replace(/_/g, ".") : "") : "" }();
    var QF = function(a, b) { vF.call(this);
        this.o = b;
        this.l = new LF(a);
        this.A = 0 == b ? 3 : 1;
        G(this, this.l);
        PF(this) };
    u(QF, vF);
    var PF = function(a) { RF(a, 0);
        wc && "4.4.4" === OF && MF(a.l);
        0 == a.o ? I(a, "skipShown") : NF(a.l);
        T(a.j, a.l, "click", function() { 3 == a.A && I(a, "videoSkipClicked") }) };
    QF.prototype.update = function(a, b) { 0 >= b || 0 > this.o || this.o >= b || 3 == this.A || (a <= this.o ? (2 != this.A && (RF(this, 0), b = this.l, IF(JF(b.l, .5)), vj(b.l, !0)), this.A = 2) : (b = this.l, vj(b.o, !0), b.D = new HF(b.l, .5, { opacity: 1, visibility: "shown" }, { opacity: .9, visibility: "hidden" }, { property: "opacity", duration: .5, timing: "ease-out", delay: 0 }), IF(b.D), b.C = JF(b.o, .5), IF(b.C), this.A = 3, I(this, "skipShown")));
        2 == this.A && RF(this, a) };
    var RF = function(a, b) { if (!(0 > a.o)) { b = Math.ceil(a.o - b); var c = b.toString();
            60 <= b && (c = Zx(b));
            zh(a.l.F, CF({ We: c })) } };
    QF.prototype.skip = function() { return 0 <= this.o && 3 == this.A ? (I(this, "publisher_invoked_skip"), !0) : !1 };
    QF.prototype.show = function() { this.l.show() };
    QF.prototype.hide = function() { this.l.hide() };
    var SF = function(a, b, c) { vF.call(this); var d = this;
        this.A = new rF(a, c);
        this.C = 0;
        this.D = b;
        this.l = null;
        this.o = new xF(!0);
        T(this.j, this.A, "video_card_endcap_action", function() { I(d, "video_card_endcap_action") });
        G(this, this.A);
        this.o.Y = this;
        this.o.Sd(this.A.o);
        yF(this.o);
        G(this, this.o);
        this.B = new QF(this.A.element, 0);
        this.B.Y = this;
        G(this, this.B);
        0 < b && (this.l = new Oi(100), G(this, this.l), S(this.j, this.l, "tick", this.Nj)) };
    u(SF, vF);
    l = SF.prototype;
    l.skip = function() { return null != this.B ? (I(this, "video_card_endcap_dismiss"), this.B.skip()) : !1 };
    l.show = function() { this.A.show();
        this.C = Date.now();
        this.l && this.l.start();
        I(this, "video_card_endcap_impression") };
    l.hide = function() { this.A.hide();
        this.l && this.l.stop();
        I(this, "video_card_endcap_collapse") };
    l.Nj = function() { I(this, "timeupdate");
        (0 < this.C ? Date.now() - this.C : 0) >= this.D && this.hide() };
    l.pause = function() { this.l && this.l.stop() };
    var TF = function(a) {
        a = a.ctaButtonText;
        return M('<div class="' + N("videoAdUiActionCta") + '"><div class="' + N("videoAdUiActionCtaInset") + '"><div class="' + N("videoAdUiActionCtaIconContainer") + '" data-ck-tag="thumbnail" data-ck-navigates="true"></div><div class="' + N("actionCtaCollapsibleContainer") + '"><div class="' + N("videoAdUiActionCtaTextAndLink") + '"><div class="' + N("videoAdUiActionCtaText") + '" data-ck-tag="headline" data-ck-navigates="true"></div><div class="' + N("videoAdUiActionCtaLink") + '" data-ck-tag="description" data-ck-navigates="true"></div></div><div class="' +
            N("videoAdUiActionCtaRightSide") + '"><div class="' + N("videoAdUiActionCtaButton") + " " + N("videoAdUiButton") + " " + N("videoAdUiButtonPrimary") + '" data-ck-tag="main-cta" data-ck-navigates="true">' + bn(a) + "</div></div></div></div></div>")
    };
    var VF = function(a) {
        oF.call(this);
        var b = this;
        this.element = An(TF, { ctaButtonText: a || mF() });
        a = function() { return I(b, "click") };
        this.l = dh("videoAdUiActionCtaInset", this.element);
        this.B = dh("videoAdUiActionCtaText", this.l);
        UF(this, this.B, "fctc", a);
        this.A = dh("videoAdUiActionCtaLink", this.l);
        UF(this, this.A, "fcvuc", a);
        this.o = dh("videoAdUiActionCtaIconContainer", this.l);
        UF(this, this.o, "fctnc", a);
        UF(this, dh("videoAdUiActionCtaButton", this.l), "fcabc", function() { return I(b, "click") });
        UF(this, dh("videoAdUiActionCtaInset",
            this.l), "fcbgc", a);
        UF(this, dh("actionCtaCollapsibleContainer", this.l), "fcbgc", a)
    };
    u(VF, oF);
    var UF = function(a, b, c, d) { d = void 0 === d ? null : d;
        null != b && T(a.j, b, "click", function(e) { e.stopPropagation();
            Lw(c);
            d && (R().l(), d()) }) };
    VF.prototype.show = function() { vj(this.element, !0) };
    VF.prototype.hide = function() { vj(this.element, !1) };
    var WF = function(a) { wF.call(this);
        this.l = new VF(a) };
    u(WF, wF);
    l = WF.prototype;
    l.Sd = function(a) { var b = this;
        a.insertBefore(this.l.element, a.childNodes[0] || null);
        T(this.j, this.l, "click", function() { I(b, "ctaClicked") }) };
    l.bf = function(a) { a && zh(this.l.B, a) };
    l.Uc = function(a) { var b = this.l,
            c = lh(document, "IMG");
        c.setAttribute("onerror", 'this.style.display="none"');
        c.setAttribute("src", a);
        Yl(c, "videoAdUiActionIcon");
        b.o.appendChild(c);
        kj(b.o, "display", "inline") };
    l.Nd = function(a) { a && zh(this.l.A, a) };
    l.show = function() { this.l.show() };
    l.hide = function() { this.l.hide() };
    var XF = function(a) { E.call(this);
        this.C = 1;
        this.o = [];
        this.A = 0;
        this.j = [];
        this.l = {};
        this.H = !!a };
    Ya(XF, E);
    var YF = function(a, b, c, d) { if (b = a.l[b]) { var e = a.j;
            (b = b.find(function(f) { return e[f + 1] == c && e[f + 2] == d })) && a.B(b) } };
    XF.prototype.B = function(a) { var b = this.j[a]; if (b) { var c = this.l[b];
            0 != this.A ? (this.o.push(a), this.j[a + 1] = function() {}) : (c && Yb(c, a), delete this.j[a], delete this.j[a + 1], delete this.j[a + 2]) } return !!b };
    XF.prototype.D = function(a, b) { var c = this.l[a]; if (c) { for (var d = Array(arguments.length - 1), e = 1, f = arguments.length; e < f; e++) d[e - 1] = arguments[e]; if (this.H)
                for (e = 0; e < c.length; e++) { var g = c[e];
                    ZF(this.j[g + 1], this.j[g + 2], d) } else { this.A++; try { for (e = 0, f = c.length; e < f && !this.za(); e++) g = c[e], this.j[g + 1].apply(this.j[g + 2], d) } finally { if (this.A--, 0 < this.o.length && 0 == this.A)
                            for (; c = this.o.pop();) this.B(c) } } } };
    var ZF = function(a, b, c) { wi(function() { a.apply(b, c) }) };
    XF.prototype.clear = function(a) { if (a) { var b = this.l[a];
            b && (b.forEach(this.B, this), delete this.l[a]) } else this.j.length = 0, this.l = {} };
    XF.prototype.N = function() { XF.ib.N.call(this);
        this.clear();
        this.o.length = 0 };
    var $F = function(a) { E.call(this);
        this.j = new XF(a);
        G(this, this.j) };
    Ya($F, E);
    var aG = function(a, b, c, d) { a = a.j;
            b = b.toString(); var e = a.l[b];
            e || (e = a.l[b] = []); var f = a.C;
            a.j[f] = b;
            a.j[f + 1] = c;
            a.j[f + 2] = d;
            a.C = f + 3;
            e.push(f) },
        bG = function(a, b, c) { a.j.D(b.toString(), c) };
    $F.prototype.clear = function(a) { this.j.clear(void 0 !== a ? a.toString() : void 0) };
    var cG = function(a) { E.call(this);
        this.j = a };
    u(cG, E);
    cG.prototype.build = function() {};
    var dG = function(a) { a = void 0 === a ? null : a;
        E.call(this);
        this.j = new OB(this);
        G(this, this.j);
        this.A = a };
    u(dG, E);
    var eG = function(a, b, c, d) { a.A && (aG(a.A, b, c, d), Hh(a, function() { YF(a.A.j, b.toString(), c, d) })) },
        fG = function(a, b, c) { bG(a.A, b, c) };
    var gG = function(a, b) { dG.call(this);
        b && a.o && a.o.setAttribute("data-ck-navigates", "true") };
    u(gG, dG);
    var hG = function(a, b, c) { c = void 0 === c ? null : c;
        dG.call(this, b); var d = this;
        this.o = a;
        G(this, this.o);
        (this.l = c) && T(this.j, this.o, "click", function() { d.l && fG(d, d.l, null) }) };
    u(hG, dG);
    var iG = function(a, b, c, d) { dG.call(this, b); var e = this;
        this.l = a;
        G(this, this.l);
        T(this.j, this.l, "click", function() { fG(e, c, null) });
        eG(this, d, this.o, this) };
    u(iG, dG);
    iG.prototype.o = function(a) { this.l.o(a);
        this.l.show() };
    var kG = function(a, b, c, d, e) { d = void 0 === d ? 0 : d;
        e = void 0 === e ? 0 : e;
        dG.call(this, b); var f = this;
        this.l = a;
        G(this, this.l);
        this.L = c;
        this.o = d;
        this.I = e;
        this.J = null;
        this.D = this.H = this.B = this.G = !1;
        jG(this, this.o);
        eG(this, hF, this.C, this);
        eG(this, eF, this.F, this);
        eG(this, fF, this.K, this);
        T(this.j, this.l, "click", function() { f.B && fG(f, f.L, null) }) };
    u(kG, dG);
    kG.prototype.C = function(a) {!a || 0 > a.currentTimeSeconds || 0 > a.durationSeconds || (this.B ? this.A && YF(this.A.j, hF.toString(), this.C, this) : jG(this, this.o - a.currentTimeSeconds)) };
    var jG = function(a, b) { if (0 >= b) lG(a), 0 < a.o && !a.D && (fG(a, JE, null), a.D = !0);
            else { var c = a.l;
                vj(c.o, !1);
                vj(c.l, !0);
                zh(c.l, Math.ceil(b).toString());
                a.H || (fG(a, IE, null), a.H = !0) } },
        lG = function(a) { a.l.showCloseButton();
            a.B = !0;
            fG(a, HE, null) };
    kG.prototype.F = function() { var a = this;
        0 < this.I && !this.J && (this.J = Qi(function() { a.G || (lG(a), fG(a, KE, null), a.A && YF(a.A.j, eF.toString(), a.F, a)) }, 1E3 * this.I)) };
    kG.prototype.K = function() { this.G = !0 };
    var nG = function(a, b, c) { dG.call(this, b); var d = this;
        this.l = a;
        this.C = c;
        eG(this, XE, function() { mG(d, 500) }, this);
        mG(this, 2E3) };
    u(nG, dG);
    var mG = function(a, b) { a.l.vc(!1);
        SB(a.j, a.l, "click", a.o);
        a.B && clearTimeout(a.B);
        a.B = setTimeout(function() { a.l.vc(!0);
            S(a.j, a.l, "click", a.o) }, b) };
    nG.prototype.o = function(a) { a instanceof Kh && null != a.l && null != a.o ? a = new QE(a.l, a.o) : (1 == a.nodeType ? a = pj(a) : (a = a.changedTouches ? a.changedTouches[0] : a, a = new Gg(a.clientX, a.clientY)), a = new QE(a.x, a.y));
        fG(this, this.C, a) };
    var oG = function(a, b, c) { c = void 0 === c ? !1 : c;
        dG.call(this, b); var d = this;
        T(this.j, a, "click", function() { fG(d, AE, null) });
        c ? T(this.j, a, "mouseover", function() { fG(d, CE, null) }) : T(this.j, a, "mouseenter", function() { fG(d, BE, null) });
        T(this.j, a, "mouseleave", function() { fG(d, DE, null) }) };
    u(oG, dG);
    var qG = function(a, b, c) { dG.call(this, b);
        this.l = a;
        G(this, this.l);
        this.F = c;
        this.H = this.C = !1;
        eG(this, GE, this.ij, this);
        eG(this, XE, this.lj, this);
        S(this.j, this.l, "mouseover", this.wj);
        S(this.j, this.l, "mouseout", this.jk);
        this.l.wh(400);
        pG(this) };
    u(qG, dG);
    var pG = function(a) { null == a.o && (a.o = Qi(function() { a.C || (a.hide(), a.H = !0);
            a.o = null }, a.H ? 15E3 : 45E3, a)) };
    l = qG.prototype;
    l.stop = function() { null != this.o && (Ri(this.o), this.o = null) };
    l.wj = function() { var a = this;
        this.show();
        this.C = !0;
        this.D = Qi(function() { a.C && a.stop();
            a.D = null }, 1E3, this) };
    l.jk = function() { null != this.D && (Ri(this.D), this.D = null);
        this.C && pG(this);
        this.C = !1 };
    l.show = function() { this.l.Ag();
        null != this.B && (Ri(this.B), this.B = null) };
    l.hide = function() { var a = this;
        this.l.ah();
        null == this.B && (this.B = Qi(function() { a.F && a.l.hide();
            a.B = null;
            fG(a, SE, null) }, 400, this)) };
    l.ij = function() { this.l.hide();
        fG(this, SE, null) };
    l.lj = function() { this.l.show() };
    var rG = function(a, b, c) { E.call(this);
        this.l = a;
        this.C = b || 0;
        this.o = c;
        this.B = Va(this.A, this) };
    Ya(rG, E);
    rG.prototype.j = 0;
    rG.prototype.N = function() { rG.ib.N.call(this);
        this.stop();
        delete this.l;
        delete this.o };
    rG.prototype.start = function(a) { this.stop();
        this.j = Qi(this.B, void 0 !== a ? a : this.C) };
    var sG = function(a) { a.isActive() || a.start(void 0) };
    rG.prototype.stop = function() { this.isActive() && Ri(this.j);
        this.j = 0 };
    rG.prototype.isActive = function() { return 0 != this.j };
    rG.prototype.A = function() { this.j = 0;
        this.l && this.l.call(this.o) };
    var wG = function(a, b, c) {
        c = void 0 === c ? !1 : c;
        dG.call(this, b);
        var d = this;
        this.B = !1;
        this.o = a;
        G(this, this.o);
        this.D = c;
        tG(this.o, c);
        this.C = !c;
        c ? uG(this) : vG(this);
        this.l = new rG(function() { return void vG(d) }, 2E3);
        T(this.j, this.o, "click", function() { fG(d, UE, !d.D);
            d.l.stop();
            d.B && sG(d.l) });
        eG(this, AE, function() { uG(d);
            sG(d.l) }, this);
        rc || (eG(this, BE, function() { uG(d);
            d.l.stop();
            d.B && sG(d.l) }, this), eG(this, CE, function() { uG(d);
            d.l.stop();
            d.B && sG(d.l) }, this), eG(this, DE, function() { if (!d.D || d.B) { var e = d.l;
                    e.stop();
                    e.A() } },
            this));
        eG(this, dF, function(e) { tG(d.o, e);
            (d.D = e) ? uG(d): d.B || vG(d);
            d.B && sG(d.l) }, this)
    };
    u(wG, dG);
    var uG = function(a) { a.C || (a.C = !0, fG(a, WE, null), a.o.show()) },
        vG = function(a) { a.C && (a.C = !1, fG(a, VE, null), a.o.hide()) },
        xG = function(a) { a.B = !0;
            Yl(a.o.element, "fullScreen") };
    var yG = function(a, b) { dG.call(this, b);
        this.l = a;
        G(this, this.l);
        eG(this, hF, this.o, this) };
    u(yG, dG);
    yG.prototype.o = function(a) { a && this.l.update(a.currentTimeSeconds, a.durationSeconds, a.j, a.adPosition, a.totalAds) };
    var zG = function(a, b, c) { dG.call(this, b); var d = this;
        this.l = a;
        G(this, this.l);
        this.l.hide();
        T(this.j, this.l, "click", function() { fG(d, XE, null);
            d.l.hide() });
        eG(this, c, function() { d.l.show() }, this) };
    u(zG, dG);
    var CG = function(a, b, c, d) { d = void 0 === d ? 0 : d;
        dG.call(this, b); var e = this;
        this.l = c;
        this.H = d;
        this.o = a;
        G(this, this.o);
        this.B = 0 == this.l ? 3 : 1;
        AG(this, 0);
        0 == this.l ? fG(this, ZE, null) : BG(this.o);
        T(this.j, this.o, "click", function() { 3 == e.B && fG(e, YE, null) });
        eG(this, hF, this.C, this);
        eG(this, NE, this.D, this) };
    u(CG, dG);
    CG.prototype.C = function(a) { if (a && !(a.durationSeconds <= this.H || 0 > this.l || this.l >= a.durationSeconds || 3 == this.B)) { if (a.currentTimeSeconds <= this.l) { if (2 != this.B) { AG(this, 0); var b = this.o;
                    IF(JF(b.o, b.C));
                    vj(b.o, !0) }
                this.B = 2 } else { b = this.o;
                vj(b.A, !0); var c = b.C;
                c = new HF(b.o, c, { opacity: 1, visibility: "shown" }, { opacity: .9, visibility: "hidden" }, { property: "opacity", duration: c, timing: "ease-out", delay: 0 });
                b = JF(b.A, b.C);
                IF(c);
                IF(b);
                this.B = 3;
                fG(this, ZE, null) }
            2 == this.B && AG(this, a.currentTimeSeconds) } };
    var AG = function(a, b) { if (!(0 > a.l)) { var c = Math.ceil(a.l - b);
            b = c.toString();
            60 <= c && (b = Zx(c));
            a = a.o;
            b = { We: b };
            a.F ? zh(a.D, "" + (b || {}).We) : zh(a.D, CF(b)) } };
    CG.prototype.D = function() { var a = this.o;
        a.l && a.l.focus() };
    var GG = function(a, b, c, d) { d = void 0 === d ? !1 : d;
        dG.call(this, b); var e = this;
        this.l = a;
        G(this, this.l);
        this.o = c;
        this.D = d;
        this.B = !1;
        (a = this.o.j) ? (this.l.o(a), T(this.j, this.l, "click", function() { e.l.C && (fG(e, $E, e.o), DG(e)) }), 0 <= this.o.offsetMs ? EG(this) : FG(this), (0 <= this.o.offsetMs || 0 <= this.o.durationMs) && eG(this, hF, this.C, this)) : EG(this) };
    u(GG, dG);
    GG.prototype.C = function(a) { if (a) { var b = 0 <= this.o.offsetMs ? this.o.offsetMs : 0,
                c = 0 <= this.o.durationMs ? this.o.durationMs + b : -1;
            0 <= c && 1E3 * a.currentTimeSeconds >= c ? (EG(this), HG(this)) : 1E3 * a.currentTimeSeconds >= b && (FG(this), 0 > c && HG(this)) } };
    var HG = function(a) { a.A && YF(a.A.j, hF.toString(), a.C, a) },
        EG = function(a) { a.l.C && a.l.hide() },
        FG = function(a) { a.l.C || (a.l.show(), fG(a, aF, a.o)) },
        DG = function(a) { if (a.D && !a.B) { var b = sj(a.l.element.parentElement);
                b = tz(a.o, b);
                null != b && (IG(a.l, b), (b = a.l.B) && T(a.j, b, "click", function(c) { fG(a, OE, a.o);
                    c.stopPropagation();
                    a.B && (c = a.l, c.l && (SB(c.j, c.l, "load", c.D, !0, c), SB(c.j, c.l, "error", c.D, !0, c), SB(c.j, c.l, "focusout"), ph(c.l), c.element.focus(), c.l = null, c.B = null), a.B = !1) }));
                a.B = !0 } };
    GG.prototype.N = function() { HG(this);
        dG.prototype.N.call(this) };
    var JG = function() { return M('<div class="' + N("videoAdUiTitleV2") + " " + N("ellipsisText") + '" data-ck-tag="headline" data-ck-navigates="true"></div>') };
    var KG = function(a) { a = a || {};
            a = a.Ra; return M('<div class="' + N("videoAdUiAttributionContainer") + '"><div class="' + N("videoAdUiAttribution") + '">' + bn(a) + "</div></div>") },
        LG = function(a) { var b = a.Eh,
                c = a.adPosition,
                d = a.totalAds;
            a = "";
            2 <= d && 1 <= c ? (b = "Ad " + bn(c) + " of " + bn(d) + " " + bn(b), a += b) : (b = "Ad " + bn(b), a += b); return M(a) };
    var MG = function() { return M('<div class="' + N("videoAdUiAuthorNameV2") + " " + N("ellipsisText") + '" data-ck-tag="description" data-ck-navigates="true"></div>') };
    var NG = function(a) { a = a || {};
        a = a.Hm; return M('<div class="' + N("videoAdUiAutoCloseContainer") + '"><div class="' + N("videoAdUiAutoClose") + '">' + bn(a) + "</div></div>") };
    var OG = function(a) { a = a.xj; return M('<div class="' + N("videoAdUi") + ' "><div class="' + N("videoAdUiTopBar") + '">' + (a ? '<div class="' + N("videoAdUiTopBarTextContainer") + '"></div>' : "") + '</div><div class="' + N("videoAdUiClickElement") + '" data-ck-tag="click-overlay" data-ck-navigates="false"></div><div class="' + N("videoAdUiBottomBar") + '"></div></div>') };
    var PG = function() {
        var a = M,
            b = '<div class="' + N("closeButtonContainer") + '" role="button" tabindex="0"><div class="' + N("closeButtonBackground") + '"> </div><div class="' + N("closeCountdownText") + '"></div><div class="' + N("closeButtonIcon") + '">';
        var c = M('<svg xmlns="http://www.w3.org/2000/svg" width="36px" height="36px" viewBox="0 0 48 48" fill="#FFFFFF"><path d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z"/><path d="M0 0h48v48H0z" fill="none"/></svg>');
        return a(b + c + "</div></div>")
    };
    var QG = function() { return M('<div class="' + N("videoAdUiIconV2") + '" role="button" tabindex="0" data-ck-tag="thumbnail" data-ck-navigates="true"></div>') },
        RG = function(a) { var b = a.Fa,
                c = a.height,
                d = a.width;
            a = a.alt; return M('<div class="' + N("videoAdUiIconFallback") + '"><img src="' + N(rn(b)) + '" height="' + N(c) + '" width="' + N(d) + '" alt="' + N(a) + '"></div>') };
    var SG = function(a) { var b = a.height,
                c = a.width;
            a = a.attribution; return M('<div class="' + N("overlayContainer") + '"><iframe class="' + N("embeddedOverlayIframe") + '" marginwidth="0" hspace="0" vspace="0" frameborder="0" scrolling="no" height="' + N(b) + '" width="' + N(c) + '"></iframe><div class="' + N("overlayTextAttribution") + '">' + bn(a) + "</div></div>") },
        TG = function(a) {
            var b = a.height,
                c = a.width;
            a = a.attribution;
            return M('<div class="' + N("overlayContainer") + '"><div class="' + N("overlayInnerElement") + '" style="height: ' +
                N(O(b)) + "px; width: " + N(O(c)) + 'px;"></div><div class="' + N("overlayTextAttribution") + '">' + bn(a) + "</div></div>")
        },
        UG = function(a) { var b = a.height,
                c = a.width,
                d = a.Fa;
            a = a.attribution; return M('<div class="' + N("overlayContainer") + '"><img src="' + N(rn(d)) + '" height="' + N(b) + '" width="' + N(c) + '"><div class="' + N("overlayTextAttribution") + '">' + bn(a) + "</div></div>") },
        VG = function(a) {
            var b = a.title,
                c = a.text,
                d = a.dir,
                e = a.attribution,
                f = a.image,
                g = a.duration;
            a = a.Qc;
            return M('<div class="' + N("overlayContainer") + " " + N("scalable") +
                '"><div class="' + N("overlayTextContainer") + '">' + (f ? '<div class="' + N("textImageContainer") + '"><img src="' + N(rn(f)) + '" class="' + N("overlayTextImage") + '"/>' + (g ? '<div class="' + N("textImageDuration") + '">' + bn(g) + "</div>" : "") + "</div>" : "") + '<div class="' + N("overlayTextTitle") + '" dir=' + kn(d) + ">" + bn(b) + '</div><div class="' + N("overlayTextDescription") + '" dir=' + kn(d) + ">" + bn(c) + "</div>" + (a ? '<div class="' + N("overlayTextUrl") + '">' + bn(a) + "</div>" : "") + '<div class="' + N("overlayTextAttribution") + '">' + bn(e) + "</div></div></div>")
        };
    var WG = function() {
        var a = M,
            b = '<div class="' + N("videoAdUiPlayPauseControl") + '" data-ck-tag="play-pause-overlay" data-ck-navigates="false"><div class="' + N("videoAdUiPlayIcon") + '">';
        var c = M('<svg xmlns="http://www.w3.org/2000/svg" width="36px" height="36px" viewBox="0 0 48 48" fill="#FFFFFF"><path d="M-838-2232H562v3600H-838z" fill="none"/><path d="M16 10v28l22-14z"/><path d="M0 0h48v48H0z" fill="none"/></svg>');
        b = b + c + '</div><div class="' + N("videoAdUiPauseIcon") + '">';
        c = M('<svg xmlns="http://www.w3.org/2000/svg" width="36px" height="36px" viewBox="0 0 48 48" fill="#FFFFFF"><path d="M12 38h8V10h-8v28zm16-28v28h8V10h-8z"/><path d="M0 0h48v48H0z" fill="none"/></svg>');
        return a(b + c + "</div></div>")
    };
    var XG = function() { var a = M,
            b = '<div class="' + N("recallButtonContainer") + '"><div class="' + N("recallButtonBackground") + '"><div class="' + N("recallButtonIcon") + '">'; var c = M('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 48"><path d="M18.59 16.41L20 15l-8-8-8 8 1.41 1.41L12 9.83"/><path fill="none" d="M0 0h24v24H0V0z"/></svg>'); return a(b + c + "</div></div></div>") };
    var YG = function() {
        var a = '<div class="videoAdUiWtaIconContainer" data-ck-tag="wta" data-ck-navigates="true"><span class="' + N("wtaIcon") + '" title="';
        a += "Why This Ad?".replace(gn, an);
        a += '"><svg class="' + N("wtaIconSvg") + '" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" fill="#FFFFFF"><path fill="none" d="M0 0h24v24H0z"/><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"/></svg></span></div>';
        return M(a)
    };
    var ZG = function() { H.call(this);
        this.element = null;
        this.j = new OB(this);
        G(this, this.j) };
    u(ZG, H);
    var $G = function(a, b) { a.element && b.element && a.element.appendChild(b.element) };
    ZG.prototype.xa = function() { return this.element };
    var aH = function() { ZG.call(this) };
    u(aH, ZG);
    var bH = function(a, b) { a.element && b.insertBefore(a.element, b.childNodes[0] || null) };
    var cH = function() { ZG.call(this); var a = this;
        this.element = An(JG);
        vj(this.element, !1);
        T(this.j, this.element, "click", function(b) { b.stopPropagation();
            I(a, "click") }) };
    u(cH, ZG);
    cH.prototype.o = function(a) { zh(this.element, a) };
    cH.prototype.show = function() { vj(this.element, !0) };
    var dH = function(a) { a = void 0 === a ? !1 : a;
        ZG.call(this); var b = LG({ Eh: "", adPosition: 0, totalAds: 0 });
        this.element = An(KG, { Ra: b });
        this.l = dh("videoAdUiAttribution", this.element);
        this.o = a;
        T(this.j, this.element, "click", function(c) { c.stopPropagation() });
        vj(this.element, !1) };
    u(dH, ZG);
    dH.prototype.show = function() { vj(this.element, !0) };
    dH.prototype.update = function(a, b, c, d, e) { this.l && (a = Zx(b - a), d = LG({ Eh: ": (" + a + ")", adPosition: d || 0, totalAds: e || 0 }), this.o && (d = a), zh(this.l, d.toString()));
        this.show() };
    var eH = function() { ZG.call(this); var a = this;
        this.element = An(MG);
        vj(this.element, !1);
        T(this.j, this.element, "click", function(b) { b.stopPropagation();
            I(a, "click") }) };
    u(eH, ZG);
    eH.prototype.o = function(a) { zh(this.element, "by " + a) };
    eH.prototype.show = function() { vj(this.element, !0) };
    var fH = function() { ZG.call(this);
        this.element = An(NG);
        this.l = dh("videoAdUiAutoClose", this.element);
        vj(this.element, !1) };
    u(fH, ZG);
    fH.prototype.update = function(a, b) { this.l && (a = a = { seconds: Zx(b - a) }, a = "Ad will close in " + bn(a.seconds), a = M(a), zh(this.l, a.toString()));
        vj(this.element, !0) };
    var gH = function(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        ZG.call(this);
        var e = this;
        this.D = c;
        this.B = d;
        this.element = An(OG, { xj: this.B });
        a.filter(function(f) { return !!f }).forEach(function(f) { e.element.classList.add(f) });
        this.B && this.element.classList.add("videoAdUiInstreamUxRefresh");
        this.l = dh("videoAdUiTopBar", this.element);
        this.C = dh("videoAdUiTopBarTextContainer", this.element);
        this.o = dh("videoAdUiClickElement", this.element);
        b && this.l.classList.add(b);
        this.A = dh("videoAdUiBottomBar", this.element);
        T(this.j, this.element,
            "touchmove",
            function(f) { f.preventDefault() });
        T(this.j, this.element, "click", function() { I(e, "click") });
        T(this.j, this.element, "mouseover", function() { I(e, "mouseover") });
        T(this.j, this.element, "mouseenter", function() { I(e, "mouseenter") });
        T(this.j, this.element, "mouseleave", function() { I(e, "mouseleave") });
        vj(this.l, !1)
    };
    u(gH, aH);
    var hH = function(a) { var b = 400 >= (parseInt(mj(a.element, "width"), 10) || a.element.width);
            a = a.element;
            b ? Yl(a, "videoAdUi-mobile") : $l(a, "videoAdUi-mobile") },
        iH = function(a) { a.l && vj(a.l, !0) },
        jH = function(a, b) { a.l && b.element && a.l.appendChild(b.element) },
        kH = function(a, b) { a.A && b.element && a.A.appendChild(b.element) };
    gH.prototype.vc = function(a) { kj(this.element, { "pointer-events": a ? "auto" : "none", cursor: a && this.D ? "pointer" : "auto" }) };
    var lH = function(a, b) { b ? T(a.j, a.element, "mouseover", function() { Yl(a.l, "videoAdUiTopBarTransitions") }) : $l(a.l, "videoAdUiTopBarTransitions") },
        mH = function(a, b) { a = a.l;
            b ? Yl(a, "videoAdUiTopBarCollapsed") : $l(a, "videoAdUiTopBarCollapsed") },
        nH = function(a, b) { a = a.A;
            b ? Yl(a, "videoAdUiBottomBarCollapsed") : $l(a, "videoAdUiBottomBarCollapsed") },
        oH = function(a, b) { a.C && b.element && a.C.appendChild(b.element) },
        pH = function(a, b) { a.o && b.element && a.o.appendChild(b.element) };
    gH.prototype.hide = function() { vj(this.l, !1);
        vj(this.A, !1);
        vj(this.o, !1) };
    var qH = function() { ZG.call(this); var a = this;
        this.element = An(PG);
        this.l = dh("closeCountdownText", this.element);
        this.o = dh("closeButtonIcon", this.element);
        T(this.j, this.element, "click", function(b) { b.stopPropagation();
            I(a, "click") }) };
    u(qH, ZG);
    qH.prototype.showCloseButton = function() { vj(this.o, !0);
        vj(this.l, !1) };
    var rH = function(a) { ZG.call(this); var b = this;
        this.B = this.l = null;
        this.C = !1;
        this.element = An(QG); switch (a) {
            case "author":
                Yl(this.element, "authorIcon"); break;
            case "vast":
                Yl(this.element, "vastIcon") }
        this.hide();
        this.A = null;
        T(this.j, this.element, "click", function(c) { c.stopPropagation();
            I(b, "click") }) };
    u(rH, aH);
    rH.prototype.o = function(a) { this.A || (this.A = lh(document, "IMG"));
        this.A.setAttribute("src", a);
        this.A.setAttribute("onerror", 'this.style.display="none"');
        this.element.appendChild(this.A) };
    var sH = function(a, b, c) { kj(a.element, { height: b + "px", width: c + "px" });
            a.A && (a.A.setAttribute("width", c + "px"), a.A.setAttribute("height", b + "px")) },
        tH = function(a, b, c) { kj(a.element, { position: "absolute", overflow: "hidden", left: b, bottom: c }) };
    rH.prototype.show = function() { vj(this.element, !0);
        this.C = !0 };
    rH.prototype.hide = function() { vj(this.element, !1);
        this.C = !1 };
    var IG = function(a, b) { a.l || (a.l = An(RG, { Fa: b.j, width: b.widthPx, height: b.heightPx, alt: b.altText }), vj(a.l, !1), a.element.appendChild(a.l), a.B = (new qH).element, a.l.appendChild(a.B), S(a.j, a.l, "load", a.D, !0), S(a.j, a.l, "error", a.D, !0), T(a.j, a.l, "focusout", function(c) { c.stopPropagation();
            a.B.focus() })) };
    rH.prototype.D = function() { vj(this.l, !0);
        this.B.focus() };
    var uH = function(a) { a = void 0 === a ? null : a;
        ZG.call(this); var b = this;
        this.element = An(nF, { learnMoreText: a || mF() });
        this.buttonElement = dh("learnMoreButton", this.element);
        T(this.j, this.buttonElement, "click", function(c) { c.stopPropagation();
            I(b, "click") }) };
    u(uH, ZG);
    uH.prototype.o = function(a) { zh(this.buttonElement, a) };
    uH.prototype.show = function() { vj(this.element, !0) };
    var vH = function() { ZG.call(this); var a = this;
        this.element = An(lF, { learnMoreText: mF() });
        T(this.j, this.element, "click", function(b) { b.stopPropagation();
            I(a, "click") }) };
    u(vH, ZG);
    var xH = function(a, b, c) { E.call(this);
        this.l = a;
        this.B = b;
        this.D = c;
        this.A = 0;
        this.j = {};
        this.o = new OB(this);
        G(this, this.o);
        wH(this) };
    u(xH, E);
    var wH = function(a) { a.D.forEach(function(b) { S(this.o, b.element, "mousedown", this.H, !0);
                S(this.o, b.element, "mouseup", Wa(this.G, b), !0) }, a);
            S(a.o, a.B, "mouseenter", a.F) },
        yH = function(a, b) { Xe(a.j, function(c, d) { b = gk(mk(b, d), d, c) }); return b };
    xH.prototype.H = function() { this.C = Date.now() };
    xH.prototype.G = function(a, b) {
        var c = a.element;
        1 == (this.l & 1) && (0 == this.A && this.A++, this.j.nm = this.A);
        2 == (this.l & 2) && (this.j.nb = a.clickLocation);
        8 == (this.l & 8) && (a = oj(this.B), this.j.nx = Math.round(b.clientX - a.x), this.j.ny = Math.round(b.clientY - a.y));
        16 == (this.l & 16) && null != this.C && (this.j.clkt = Date.now() - this.C);
        512 == (this.l & 512) && (b = Tl()) && (this.j.mb = b);
        "A" == c.tagName.toUpperCase() && (b = yH(this, c.href), b instanceof Hf || b instanceof Hf || (b = "object" == typeof b && b.rb ? b.Ta() : String(b), Kf.test(b) || (b = "about:invalid#zClosurez"),
            b = Lf(b)), c.href = If(b))
    };
    xH.prototype.F = function() { this.A++ };
    var zH = function(a, b, c) {
        ZG.call(this);
        var d = this,
            e = [];
        switch (b) {
            case "embedded":
                this.element = An(SG, a);
                dh("embeddedOverlayIframe", this.element).setAttribute("src", a.Fa || "");
                break;
            case "html":
                this.element = An(TG, a);
                vg(dh("overlayInnerElement", this.element), Hk(a.Fa || ""));
                break;
            case "image":
                this.element = An(UG, a);
                break;
            case "text":
                this.element = An(VG, a);
                a = dh("textImageContainer", this.element);
                null != a && e.push({ element: a, clickLocation: 9 });
                a = dh("overlayTextTitle", this.element);
                null != a && e.push({ element: a, clickLocation: 0 });
                a = dh("overlayTextUrl", this.element);
                null != a && e.push({ element: a, clickLocation: 1 });
                break;
            default:
                this.element = kh("DIV", "overlayContainer")
        }
        e.push({ element: this.element, clickLocation: 2 });
        this.l = new xH(c, this.element, e);
        T(this.j, this.element, "click", function(f) { I(d, f) });
        T(this.j, this.element, "mouseover", function() { I(d, "mouseover") });
        T(this.j, this.element, "mouseout", function() { I(d, "mouseout") })
    };
    u(zH, ZG);
    l = zH.prototype;
    l.vc = function(a) { var b = this.element;
        a ? Yl(b, "clickable") : $l(b, "clickable") };
    l.wh = function(a) { FF(this.element, "opacity " + a / 1E3 + "s") };
    l.show = function() { vj(this.element, !0) };
    l.hide = function() { vj(this.element, !1) };
    l.Ag = function() { uj(this.element, 1) };
    l.ah = function() { uj(this.element, .3) };
    l.xa = function() { return this.element };
    var AH = function(a) { return dh("overlayTextAttribution", a.element) };
    var BH = function() { ZG.call(this); var a = this;
        this.element = An(WG);
        this.o = dh("videoAdUiPlayIcon", this.element);
        this.l = dh("videoAdUiPauseIcon", this.element);
        T(this.j, this.element, "click", function(b) { b.stopPropagation();
            I(a, "click") });
        tG(this, !1) };
    u(BH, ZG);
    var tG = function(a, b) { vj(a.o, b);
        vj(a.l, !b) };
    BH.prototype.show = function() { this.element && Yl(this.element, "fade-in") };
    BH.prototype.hide = function() { this.element && $l(this.element, "fade-in") };
    var CH = function() { ZG.call(this); var a = this;
        this.element = An(XG);
        this.l = !0;
        T(this.j, this.element, "click", function(b) { a.l && (b.stopPropagation(), I(a, "click")) }) };
    u(CH, ZG);
    CH.prototype.show = function() { vj(this.element, !0);
        this.l = !0 };
    CH.prototype.hide = function() { vj(this.element, !1);
        this.l = !1 };
    var DH = function(a, b, c) {
        a = void 0 === a ? !1 : a;
        b = void 0 === b ? !1 : b;
        c = void 0 === c ? .5 : c;
        ZG.call(this);
        var d = this;
        this.element = An(BF, { skipText: jb("Skip Ad ") });
        a && Yl(this.element, "noTextSkipButton");
        b && Yl(this.element, "raisedSkipButton");
        this.F = a;
        this.C = c;
        this.o = dh("videoAdUiPreSkipContainer", this.element);
        this.B = dh("videoAdUiPreSkipButton", this.element);
        this.D = dh("videoAdUiPreSkipText", this.element);
        this.A = dh("videoAdUiSkipContainer", this.element);
        this.l = dh("videoAdUiSkipButton", this.element);
        vj(this.o, !1);
        T(this.j, this.l, "click", function(e) { e.stopPropagation();
            I(d, "click") });
        T(this.j, this.B, "click", function(e) { e.stopPropagation() });
        wc && "4.4.4" === OF && (this.B.style.backgroundColor = "black", this.l.style.backgroundColor = "black")
    };
    u(DH, ZG);
    DH.prototype.hide = function() { vj(this.B, !1);
        vj(this.l, !1) };
    var BG = function(a) { vj(a.A, !1);
        uj(a.A, 0) };
    var EH = function(a) { a = void 0 === a ? !1 : a;
        ZG.call(this); var b = this;
        this.element = An(YG);
        a && this.element.classList.add("smallWtaIcon");
        T(this.j, this.element, "click", function(c) { c.stopPropagation();
            I(b, "click") }) };
    u(EH, ZG);

    function FH(a, b) { if ("undefined" === typeof ReportingObserver) return null; var c = function(e) { e = p(e); for (var f = e.next(); !f.done; f = e.next()) f = f.value, a(f) && b(f) },
            d = new ReportingObserver(c, { buffered: !0 });
        v.addEventListener("pagehide", function() { c(d.takeRecords(), d);
            d.disconnect() });
        d.observe(); return d }

    function GH(a) { return FH(function(b) { return b.body && "HeavyAdIntervention" === b.body.id }, a) }

    function HH(a) { return GH(function(b) { b = b.body.message;
            b.includes("CPU") ? a("heavy_ad_intervention_cpu") : b.includes("network") && a("heavy_ad_intervention_network") }) }

    function IH(a) { a = void 0 === a ? null : a;
        FH(function(b) { return b.body && "HeavyAdIntervention" === b.body.id }, function(b) { var c = b.body.message,
                d = R();
            Q(d, "ham", c);
            c.includes("CPU") ? Q(d, "hacpu", "true") : c.includes("network") && Q(d, "habytes", "true");
            a && a(b) }) };
    var JH = [new Hg(200, 200), new Hg(250, 250), new Hg(300, 250), new Hg(336, 280), new Hg(450, 50), new Hg(468, 60), new Hg(480, 70), new Hg(728, 90)];

    function KH(a, b, c, d) { a && (c = Math.min(c, 90)); var e = [];
        JH.forEach(function(f) { var g = b - 15 >= f.width && c - 65 >= f.height,
                h = !d && !g && 90 >= f.height && b >= f.width && c >= f.height;
            (g || h) && e.push(f.width + "x" + f.height) }); return e.join(",") }

    function LH(a) { var b = ay(Fm(new K(a.adTagUrl), "overlay")); return KH(b, a.nonLinearAdSlotWidth || 0, a.nonLinearAdSlotHeight || 0, a.forceNonLinearFullSlot || !1) }

    function MH(a) { return "flash" === a || "image" === a || "staticimage" === a }

    function NH(a) { var b = [];
        a.forEach(function(c) { "video" === c ? b.push("standardvideo") : "skippablevideo" != c && b.push(c) }); return b }

    function OH(a) { a = PH(a, "ad_type"); return w(a) ? ["video"] : a.split("_") }

    function PH(a, b, c) { c = void 0 === c ? "" : c;
        a = a.j; var d = c;
        Km(a, b) && (d = a.get(b)); return w(d) ? c : d };
    var QH = function() { gC.apply(this, arguments) };
    u(QH, gC);
    QH.prototype.j = function(a) {
        if (!a.adTagUrl) return null;
        var b = new K(a.adTagUrl),
            c = new Map;
        c.set("sdkv", "h.0.0.0");
        var d = new K(a.adTagUrl),
            e = c.set,
            f = PH(d, "client");
        e.call(c, "video_product_type", fb(f, "ca-games-") ? "4" : fb(f, "ca-video-") ? "0" : "-1");
        c.set("client", PH(d, "client"));
        c.set("min_ad_duration", Number(PH(d, "min_ad_duration", (0).toString())).toString());
        e = Number(PH(d, "max_ad_duration", (1E5).toString()));
        0 < e && c.set("max_ad_duration", Math.round(1.1 * e).toString());
        e = Number(PH(d, "sdmax", (0).toString()));
        0 < e && c.set("sdmax", Math.round(1.1 * e).toString());
        e = c.set;
        var g = a.linearAdSlotWidth || 0,
            h = a.linearAdSlotHeight || 0,
            k = a.nonLinearAdSlotWidth || 0,
            m = a.nonLinearAdSlotHeight || 0;
        f = new K(a.adTagUrl);
        g = Math.max(g, k) + "x" + Math.max(h, m);
        f = PH(f, "sz");
        e.call(c, "sz", w(f) || "0x0" !== g ? g : f);
        e = c.set;
        f = PH(d, "channel");
        f = Array.from(new Set(f.split(/[+, ]/))).slice(0, 30).join("+");
        e.call(c, "channel", f);
        c.set("h_ch", PH(d, "h_ch").split(/[+, ]/).join("+"));
        e = c.set;
        f = PH(d, "adsafe");
        e.call(c, "adsafe", hf(dy, f) ? f : "high");
        e = c.set;
        d = PH(d, "videoad_start_delay");
        e.call(c, "videoad_start_delay", w(d) ? "1" : d);
        c.set("hl", zA());
        c.set("vid_d", a.contentDuration || "");
        c.set("ca_type", "image");
        c.set("unviewed_position_start", "1");
        c.set("output", "xml_vast4");
        hC(c);
        d = Map;
        e = [];
        f = e.concat;
        g = {};
        g.u_tz = -(new Date).getTimezoneOffset();
        var n = void 0 === n ? J : n;
        try { var r = n.history.length } catch (na) { r = 0 }
        g.u_his = r;
        var q;
        g.u_h = null == (q = J.screen) ? void 0 : q.height;
        var y;
        g.u_w = null == (y = J.screen) ? void 0 : y.width;
        var x;
        g.u_ah = null == (x = J.screen) ? void 0 : x.availHeight;
        var A;
        g.u_aw = null == (A = J.screen) ? void 0 : A.availWidth;
        var L;
        g.u_cd = null == (L = J.screen) ? void 0 : L.colorDepth;
        r = new Map;
        for (var F in g) r.set(F, g[F]);
        a = new d(f.call(e, t(r), t(Ay(a)), t(c)));
        iC(this, a);
        qy(b, a);
        RH(b);
        sy(b);
        return b.toString()
    };
    var RH = function(a) { a.j.forEach(function(b, c) { ey.has(c) && !w(b) || a.j.remove(c) }) };
    var SH = function(a) { a = void 0 === a ? new Map : a;
        gC.call(this, a) };
    u(SH, gC);
    SH.prototype.j = function(a) { if (null == a.adTagUrl) return null; var b = new K(a.adTagUrl),
            c = new Map;
        c.set("sdkv", "h.0.0.0");
        hC(c);
        a = new Map([].concat(t(Ay(a)), t(c)));
        iC(this, a);
        qy(b, a);
        ry(b, a);
        sy(b); return b.toString() };
    var TH = function(a) { a = void 0 === a ? new Map : a;
        gC.call(this, a) };
    u(TH, gC);
    TH.prototype.j = function(a) {
        if (!a.adTagUrl) return null;
        var b = new ky(a.adTagUrl),
            c = new Map;
        hC(c);
        c.set("dc_sdkv", "h.0.0.0");
        c.set("dc_sdki", jC().toString(16));
        c.set("dc_eid", lw());
        c.set("dcmt", "text/xml");
        var d = my(b, "dc_output") || [];
        (d.includes("vast") || d.includes("xml_vast2")) && c.set("dc_output", "xml_vast3");
        a = new Map([].concat(t(Ay(a)), t(c)));
        iC(this, a);
        c = p(a);
        for (d = c.next(); !d.done; d = c.next()) {
            var e = p(d.value);
            d = e.next().value;
            e.next();
            e = UH(d);
            d = a.get(d);
            "dc_rfl" !== e && (d = encodeURIComponent(d));
            w(e) ||
                w(d) || ny(b, e, [d])
        }
        sy(b);
        return b.toString()
    };
    var UH = function(a) { switch (a) {
            case "sdkv":
                return "dc_sdkv";
            case "sdki":
                return "dc_sdki";
            case "adk":
                return "dc_adk";
            case "sdk_apis":
                return "dc_sdk_apis";
            case "omid_p":
                return "dc_omid_p";
            case "js":
                return "dc_js";
            case "msid":
                return "dc_msid";
            case "frm":
                return "dc_frm";
            case "osd":
                return "dc_osd";
            case "sdr":
                return "dc_sdr";
            default:
                return a } };
    var VH = function(a) { a = void 0 === a ? new Map : a;
        gC.call(this, a) };
    u(VH, gC);
    VH.prototype.j = function(a) { if (!a.adTagUrl) return null; var b = new K(a.adTagUrl),
            c = new Map;
        hC(c);
        c.set("sdkv", "h.0.0.0");
        c.set("sdki", jC().toString(16));
        c.set("output", "xml_vast4");
        a = new Map([].concat(t(Ay(a)), t(c)));
        iC(this, a);
        qy(b, a);
        sy(b); return b.toString() };
    var WH = function(a) { a = void 0 === a ? new Map : a;
        gC.call(this, a) };
    u(WH, gC);
    WH.prototype.j = function(a) { if (!a.adTagUrl) return null; var b = new K(a.adTagUrl),
            c = new Map;
        c.set("sdkv", "h.0.0.0");
        hC(c);
        c.set("hl", zA());
        c.set("afvsz", LH(a));
        c.set("unviewed_position_start", "1"); var d = (new K(a.adTagUrl)).j,
            e = String(d.get("output") || "");
        d = String(d.get("ad_rule") || "");
        d = ay(d) && e.includes("vast");
        e.includes("vmap") || d ? c.set("output", "xml_vmap1") : e.includes("vast") && c.set("output", "xml_vast4");
        a = new Map([].concat(t(Ay(a)), t(c)));
        iC(this, a);
        qy(b, a);
        ry(b, a);
        b.j.remove("impl");
        sy(b); return b.toString() };
    var XH = { Bk: "SIMID:Creative:clickThru", Sk: "SIMID:Creative:fatalError", Vk: "SIMID:Creative:getMediaState", LOG: "SIMID:Creative:log", Ql: "SIMID:Creative:reportTracking", Rl: "SIMID:Creative:requestChangeAdDuration", Sl: "SIMID:Creative:requestChangeVolume", Tl: "SIMID:Creative:requestExitFullscreen", Ul: "SIMID:Creative:requestFullscreen", Wl: "SIMID:Creative:requestPause", Xl: "SIMID:Creative:requestPlay", Yl: "SIMID:Creative:requestResize", Zl: "SIMID:Creative:requestSkip", cm: "SIMID:Creative:requestStop", Vl: "SIMID:Creative:requestNavigation" };

    function YH(a) { return "object" != typeof a ? !1 : Number.isInteger(a.width) && Number.isInteger(a.height) && Number.isInteger(a.x) && Number.isInteger(a.y) };
    var ZH = function(a) {
        a = void 0 === a ? {} : a;
        this.adParameters = a.adParameters;
        this.sf = a.sf;
        this.tf = a.tf;
        this.dd = a.dd;
        this.cd = a.cd;
        this.ed = a.ed;
        this.fd = a.fd;
        this.code = a.code;
        this.currentTime = a.currentTime;
        this.duration = a.duration;
        this.errorCode = a.errorCode;
        this.fullscreen = a.fullscreen;
        this.message = a.message;
        this.muted = a.muted;
        this.Sf = a.Sf;
        this.Jc = a.Jc;
        this.Kc = a.Kc;
        this.Re = a.Re;
        this.uri = a.uri;
        this.lg = a.lg;
        this.version = a.version;
        this.videoHeight = a.videoHeight;
        this.videoWidth = a.videoWidth;
        this.Id = a.Id;
        this.Jd =
            a.Jd;
        this.volume = a.volume;
        this.url = a.url
    };

    function $H(a) { a = a.trackingUrls; return a instanceof Array ? a.every(function(b) { return "string" == typeof b }) : !1 }
    var aI = function() {},
        bI = function(a, b) {
            switch (a) {
                case "SIMID:Creative:requestChangeAdDuration":
                    return a = b.duration, isNaN(a) || "number" != typeof a ? null : new ZH({ duration: a });
                case "SIMID:Creative:reportTracking":
                    return $H(b) ? new ZH({ Re: b.trackingUrls }) : null;
                case "SIMID:Creative:requestResize":
                    return YH(b.videoDimensions) && YH(b.creativeDimensions) && "boolean" == typeof b.fullscreen ? new ZH({
                        Id: b.videoDimensions.x,
                        Jd: b.videoDimensions.y,
                        videoWidth: b.videoDimensions.width,
                        videoHeight: b.videoDimensions.height,
                        ed: b.creativeDimensions.x,
                        fd: b.creativeDimensions.y,
                        dd: b.creativeDimensions.width,
                        cd: b.creativeDimensions.height,
                        fullscreen: b.fullscreen
                    }) : null;
                case "SIMID:Creative:requestNavigation":
                    return "string" != typeof b.uri ? null : new ZH({ uri: b.uri });
                case "SIMID:Creative:log":
                    return "string" != typeof b.message ? null : new ZH({ message: b.message })
            }
            return new ZH
        };
    var cI = function(a, b, c, d) { this.type = a;
        this.args = d;
        this.messageId = b;
        this.sessionId = c };
    var dI = function(a, b, c) { Ih.call(this, a.type);
        this.resolve = b;
        this.reject = c;
        this.args = a.args;
        this.sessionId = a.sessionId };
    u(dI, Ih);
    var eI = function(a, b, c) { H.call(this);
        this.o = new Nl;
        this.D = c;
        this.l = "";
        this.F = 1;
        this.A = window;
        this.C = b;
        this.B = new OB(this);
        G(this, this.B);
        this.j = new Map };
    u(eI, H);
    var iI = function(a) {
        T(a.B, window, "message", function(b) {
            b = b.Pa;
            var c = a.A === b.source;
            if (b.origin === a.C || c || "*" == a.C) {
                a: if (b.data) { c = {}; try { c = JSON.parse(b.data) } catch (g) { b = null; break a }
                    b = "object" != typeof c ? null : c } else b = null;var d = b;
                if (null != d && (b = d.type, c = d.sessionId, c == a.l || "createSession" == b)) {
                    var e = d.messageId;
                    if (null != e) {
                        d = d.args;
                        if ("resolve" == b || "reject" == b) { var f = d.messageId;
                            d = null == f ? null : new ZH({ Kc: f, Jc: d.value }) } else d = bI(b, d);
                        if (d) switch (b = new cI(b, e, c, d), b.type) {
                            case "resolve":
                            case "reject":
                                if (c =
                                    b.args.Kc) e = b.args.Jc || {}, a.j.has(c) && (d = a.j.get(c), "resolve" == b.type ? d.resolve(e) : "reject" == b.type && d.reject(e), a.j.delete(c));
                                break;
                            case "createSession":
                                a.l = b.sessionId;
                                fI(a, b.messageId);
                                a.o.resolve();
                                break;
                            default:
                                gI(a, b)
                        } else hI(a, e, { errorCode: 1211, message: "Invalid message arguments." })
                    }
                }
            }
        })
    };
    eI.prototype.sendMessage = function(a, b) {
        b = void 0 === b ? new ZH : b;
        var c = this.F++,
            d = {};
        d.type = a;
        d.sessionId = this.l;
        d.messageId = c;
        d.timestamp = Date.now();
        if ("resolve" == a || "reject" == a) { var e = {};
            b = (e.messageId = b.Kc, e.value = b.Jc, e) } else {
            e = {};
            switch (a) {
                case "SIMID:Player:init":
                    var f = {};
                    f = (f.adParameters = b.adParameters, f.clickThruUri = b.sf, f.clickThruUrl = b.tf, f);
                    var g = {},
                        h = {},
                        k = {};
                    b = (k.videoDimensions = (g.height = b.videoHeight, g.width = b.videoWidth, g.x = 0, g.y = 0, g), k.creativeDimensions = (h.height = b.videoHeight, h.width =
                        b.videoWidth, h.x = 0, h.y = 0, h), k.fullscreen = b.fullscreen, k.fullscreenAllowed = !0, k.variableDurationAllowed = b.lg, k.skippableState = "adHandles", k.navigationSupport = b.Sf, k.version = "1.0", k.muted = b.muted, k.volume = b.volume, k);
                    e.environmentData = b;
                    e.creativeData = f;
                    break;
                case "SIMID:Media:timeupdate":
                    e.currentTime = b.currentTime;
                    break;
                case "SIMID:Media:volumechange":
                    e.volume = b.volume;
                    break;
                case "SIMID:Media:durationchange":
                    e.duration = b.duration;
                    break;
                case "SIMID:Player:adStopped":
                    e.code = b.code;
                    break;
                case "SIMID:Player:resize":
                    f = {};
                    f = (f.height = b.cd, f.width = b.dd, f.x = b.ed, f.y = b.fd, f);
                    g = {};
                    g = (g.height = b.videoHeight, g.width = b.videoWidth, g.x = b.Id, g.y = b.Jd, g);
                    e.creativeDimensions = f;
                    e.videoDimensions = g;
                    e.fullscreen = b.fullscreen;
                    break;
                case "SIMID:Player:fatalError":
                    e.errorCode = b.errorCode
            }
            b = e
        }
        d.args = b;
        this.A.postMessage(JSON.stringify(d), "*");
        return this.D.includes(a) ? (a = new Nl, this.j.set(c, a), a.promise) : Promise.resolve({})
    };
    var gI = function(a, b) { I(a, new dI(b, function(c) { c = void 0 === c ? {} : c;
                fI(a, b.messageId, c) }, function(c) { c = void 0 === c ? {} : c;
                hI(a, b.messageId, c) })) },
        fI = function(a, b, c) { c = void 0 === c ? {} : c;
            a.sendMessage("resolve", new ZH({ Kc: b, Jc: c })) },
        hI = function(a, b, c) { a.sendMessage("reject", new ZH({ Kc: b, Jc: c })) };
    var jI = "SIMID:Player:adSkipped SIMID:Player:adStopped SIMID:Player:appBackgrounded SIMID:Player:fatalError SIMID:Player:init SIMID:Player:startCreative".split(" "),
        kI = function(a) { H.call(this);
            a = a ? new K(a) : null;
            this.j = new eI(new aI, a ? a.A + "://" + a.l : null, jI) };
    u(kI, H);
    var lI = function(a) { iI(a.j);
        Object.values(XH).forEach(function(b) { ai(a.j, b, function(c) { return I(a, c) }) }) };
    var mI = function(a) {
            var b = "border:0; opacity:1; margin:0; overflow:hidden;padding:0; width:" + ((Hp() ? "99" : "100") + "%; height:100%; position: absolute;display:none"),
                c = Rg();
            b = kh("IFRAME", { id: c, name: c, allow: "autoplay", allowFullscreen: !0, allowtransparency: !0, background: "transparent", style: b });
            a = Rk(a);
            b.removeAttribute("srcdoc");
            if (a instanceof Af) throw new yg("TrustedResourceUrl", 2);
            b.src = tg(a);
            xg(b, "allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" "));
            return b
        },
        nI = function(a) {
            var b = "border:0; opacity:1; margin:0; overflow:hidden;padding:0; width:" + ((Hp() ? "99" : "100") + "%; height:100%; position: absolute;display:none"),
                c = Rg();
            b = kh("IFRAME", { id: c, name: c, allow: "autoplay", allowFullscreen: !0, allowtransparency: !0, background: "transparent", style: b });
            b.removeAttribute("src");
            if (a instanceof fg) throw new yg("SafeHtml", 1);
            a = hg(a);
            b.srcdoc = gg(a);
            xg(b, ["allow-scripts", "allow-forms", "allow-popups", "allow-popups-to-escape-sandbox", "allow-storage-access-by-user-activation"]);
            return b
        };
    var oI = { TRUEVIEW: "trueview", BUMPER: "bumper", NONSKIPPABLE: "nonskippable", UAC_ANDROID_ON_3P_INSTREAM: "uac-android-on-3p-instream", UAC_IOS_ON_3P_INSTREAM: "uac-ios-on-3p-instream", RDA_ON_3P_INSTREAM: "rda-on-3p-instream", LC_ON_3P_INSTREAM: "lc-on-3p-instream", OUTSTREAM: "outstream" };

    function pI(a) { if (!a) return !1; if (a = qI(a)) { if ("TRUEVIEW" == a.j) return !0; if (a.j) return !1;
            Lw("ytu_nf"); return a.Gb() } return !1 }

    function rI(a) { return a ? (a = qI(a)) ? a.l.id : null : null }

    function sI(a) { return (a = qI(a)) ? a.l : null }

    function tI(a) { return (a = qI(a)) ? a.o : null }

    function uI(a) { return (a = (a = qI(a)) ? a.j : null) ? oI[a] || null : null }

    function qI(a) { return a.extensions.get(nz) };
    var vI = function(a, b) { b = void 0 === b ? "web_gvp_ads" : b;
        H.call(this);
        this.ba = b;
        this.K = this.L = !1;
        this.l = -1;
        this.B = new OB(this);
        G(this, this.B);
        this.D = !1;
        this.I = 0;
        this.G = null;
        this.R = !1;
        this.j = null;
        this.P = this.C = !1;
        this.V = a };
    u(vI, H);
    var yI = function(a, b) {
            b.ns = "yt";
            var c = lw();
            w(c) || (b.fexp = c);
            b.el = "adunit";
            b.cpn = a.T;
            a.F && (b.docid = a.F);
            a.J && (b.visitordata = a.J);
            b.ver = "2";
            b.cmt = wI(xI(a));
            b.fmt = "18";
            null != a.G && (b.rt = wI(Math.floor((Date.now() - a.G) / 1E3)));
            b.adformat = "2_2_1";
            c = ih();
            var d = document;
            c = new K(c.parent == c ? c.location.href : d.referrer);
            b.euri = c.toString().substr(0, 128);
            b.len = wI(a.l);
            b.vtype = "gvp";
            b.c = a.ba;
            b.cver = "h.0.0.0";
            b.cbr = Eb() ? "Chrome" : Bb() ? "Edge" : Ab() ? "IE" : Cb() ? "Firefox" : zb() ? "Opera" : Db() ? "Safari" : !z("iPad") && !z("iPhone") ||
                Db() || Eb() || z("Coast") || Cb() || !z("AppleWebKit") ? Fb() ? "Android" : "Unknown" : "IOS";
            b.cbrver = Hb();
            b.cos = sc;
            b.cosver = Gc;
            b.cplatform = rc ? "mobile" : "desktop"
        },
        AI = function(a, b) { b.mos = a.R ? "1" : "0";
            b.volume = Math.round(100 * a.o.getVolume()).toString();
            b.delay = zI(a).toString() },
        xI = function(a) { return a.o.l ? a.o.l : a.l || 0 },
        zI = function(a) { var b = 28;
            a.l < b + 2 && (b = Math.round(a.l - 2)); return b },
        CI = function(a, b) { if (a.D) { var c = {};
                c.etype = b.toString();
                yI(a, c);
                BI(a, "https://s.youtube.com/api/stats/engage", c) } },
        DI = function(a, b) {
            var c =
                xI(a),
                d = {};
            d.rti = a.j.toString();
            d.st = wI(a.I);
            d.et = wI(c);
            a.I = c;
            b ? a.P || (d["final"] = "1", yI(a, d), BI(a, "https://s.youtube.com/api/stats/watchtime", d), a.P = !0) : (a.j = 10 == a.j ? 20 : 20 == a.j ? 30 : a.j + 40, d.rtn = a.j > a.l ? wI(a.l) : wI(a.j), yI(a, d), BI(a, "https://s.youtube.com/api/stats/watchtime", d))
        },
        BI = function(a, b, c) { b = new K(b); for (var d in c) b.j.set(d, c[d]);
            a.V.l(b.toString()) };
    vI.prototype.aa = function() { if (!this.C && 0 < xI(this)) { var a = {};
            this.R = 0 == this.o.getVolume();
            this.l = this.o.getDuration();
            this.G = Date.now();
            yI(this, a);
            AI(this, a);
            a.rtn = this.j.toString();
            BI(this, "https://s.youtube.com/api/stats/playback", a);
            Mw("vss_pp");
            this.C = !0 }
        this.C && !this.L && xI(this) >= zI(this) ? (a = {}, yI(this, a), AI(this, a), BI(this, "https://s.youtube.com/api/stats/delayplay", a), Mw("vss_dp"), this.L = !0) : this.C && null != this.j && xI(this) >= this.j && DI(this, xI(this) >= this.l) };
    vI.prototype.ca = function() { DI(this, !0);
        this.K = !0;
        this.D = !1;
        this.B && TB(this.B) };

    function wI(a) { return a.toFixed(3).toString() };
    var EI = function(a) { this.duration = a };
    var FI = function(a, b, c) { this.j = a;
        this.l = b;
        this.o = c };
    var GI = function(a) { this.sequence = a };
    var HI = function(a) { var b = void 0 === a.oe ? null : a.oe,
            c = void 0 === a.pe ? null : a.pe,
            d = void 0 === a.imageUrl ? null : a.imageUrl,
            e = void 0 === a.imageWidth ? 0 : a.imageWidth,
            f = void 0 === a.imageHeight ? 0 : a.imageHeight;
        this.ne = void 0 === a.ne ? null : a.ne;
        this.oe = b;
        this.pe = c;
        this.imageUrl = d;
        this.imageWidth = e;
        this.imageHeight = f };
    var II = function(a) { this.j = a };
    var JI = function() {};
    JI.prototype.j = function(a) { if (!rC(a, "wrapper_info")) return null; var b = 0;
        (a = qC(a, "Duration")) && (b = sC(U(a))); return null != b && 0 < b ? new EI(b) : null };
    var KI = function() {};
    KI.prototype.j = function(a) { if (!rC(a, "adx")) return null; var b; if (a = qC(a, "skippability")) { var c = U(a); if ("skippable" == c) { var d = !0;
                (a = a.getAttribute("offset")) && !w(a) && (b = sC(a)) } else "nonskippable" == c && (d = !1) } return null != d ? new BD(d, b) : null };
    var LI = function() {};
    LI.prototype.j = function(a) { if (!rC(a, "dart")) return null;
        a = vC(a); var b = a.find(function(c) { return "skip" == c.eventType }) ? "Generic" : "Unavailable"; return new CD(a, b) };
    var MI = function() {};
    MI.prototype.j = function(a) { if (!rC(a, "dfp")) return null; var b = "Unavailable",
            c = qC(a, "skippableadtype");
        c && "Generic" == U(c) && (b = "Generic"); return new CD(vC(a), b) };
    var NI = Object.keys(HA),
        OI = { TYPE_ACTION_ENDCAP: 0, TYPE_COLLAPSE_ENDCAP: 1, TYPE_DISMISS_ENDCAP: 2, TYPE_IMPRESSION_ENDCAP: 3 },
        PI = new Map([
            [0, "video_card_endcap_action"],
            [1, "video_card_endcap_collapse"],
            [2, "video_card_endcap_dismiss"],
            [3, "video_card_endcap_impression"]
        ]),
        QI = function() {};
    QI.prototype.j = function(a) {
        if (!rC(a, "InfoCards")) return null;
        var b = [],
            c = pC(a, "card");
        a = {};
        c = p(c);
        for (var d = c.next(); !d.done; a = { Sc: a.Sc }, d = c.next()) {
            var e = d.value;
            d = e.getAttribute("type");
            if (NI.includes(d)) {
                var f = nC(e, "priority"),
                    g = RI(e),
                    h = pC(e, "action").map(function(A) { return new GA({ target: A.getAttribute("target"), title: A.getAttribute("title"), type: FA[A.getAttribute("type")], packageId: A.getAttribute("package_id"), be: A.getAttribute("fallback_url") }) });
                a.Sc = qC(e, "placement");
                var k = null;
                a.Sc && (k = function(A) {
                    return function(L) {
                        return oC(A.Sc.getAttribute(L)) ||
                            !1
                    }
                }(a), k = new IA({ showInCta: k("show_in_cta"), showInEndcap: k("show_in_endcap"), jd: nC(a.Sc, "endcap_duration_ms") }));
                e = qC(e, "website_card");
                var m = null;
                if (e) {
                    m = null;
                    var n = qC(e, "image");
                    n && (n = qC(n, "url")) && (m = U(n));
                    n = qC(e, "extension_data");
                    var r = null;
                    if (n) {
                        r = pC(n, "sitelink_extensions");
                        n = [];
                        r = p(r);
                        for (var q = r.next(); !q.done; q = r.next()) {
                            q = q.value;
                            var y = qC(q, "link_action"),
                                x = null;
                            y && ((x = y.getAttribute("target")) || (x = y.getAttribute("link_url")), x = new GA({
                                target: x,
                                title: y.getAttribute("title"),
                                type: 1,
                                packageId: null,
                                be: null
                            }));
                            n.push(new JA({ linkAction: x, descriptionLine1: q.getAttribute("description_line_1"), descriptionLine2: q.getAttribute("description_line_2") }))
                        }
                        r = new KA({ sitelinkExtensions: n })
                    }
                    m = new LA({ description: e.getAttribute("description"), headline: e.getAttribute("headline"), imageUrl: m, extensionData: r })
                }
                b.push(new MA({ type: HA[d], priority: isNaN(f) || void 0 == f ? -1 : f, trackingEvents: g, actions: h, placement: k, websiteCard: m }))
            }
        }
        return new NA({ cards: b })
    };
    var RI = function(a) { var b = [];
        a = pC(a, "event");
        a = p(a); for (var c = a.next(); !c.done; c = a.next()) { c = c.value; var d = c.getAttribute("type");
            d = PI.get(OI[d]);
            c = c.getAttribute("base_url");
            d && c && b.push(new aw(d, c)) } return b };
    var SI = function() {};
    SI.prototype.j = function(a) { if (!rC(a, "inred_info")) return null;
        a = p(xh(a)); for (var b = a.next(); !b.done; b = a.next()) switch (b = b.value, b.nodeName) {
            case "WrapperAdId":
                var c = U(b); break;
            case "WrapperAdSystem":
                var d = U(b); break;
            case "WrapperCreativeId":
                var e = U(b) }
        return c && d && e ? new FI(c, d, e) : null };
    var TI = function() {};
    TI.prototype.j = function(a) { if (!rC(a, "pod")) return null;
        a = nC(a, "sequence");
        null == a && (a = -1); return new GI(a) };
    var UI = function() {};
    UI.prototype.j = function(a) { if (!rC(a, "textad")) return null; var b = {};
        a = p(xh(a)); for (var c = a.next(); !c.done; c = a.next()) switch (c = c.value, c.nodeName.toLowerCase()) {
            case "line1":
                b.ne = U(c); break;
            case "line2":
                b.oe = U(c); break;
            case "line3":
                b.pe = U(c); break;
            case "imageurl":
                b.imageUrl = U(c), b.imageWidth = nC(c, "width"), b.imageHeight = nC(c, "height") }
        return new HI(b) };
    var VI = function() {};
    VI.prototype.j = function(a) { if (!rC(a, "waterfall")) return null;
        a = nC(a, "fallback_index");
        null == a && (a = -1); return new II(a) };
    var WI = function(a) { a = void 0 === a ? {} : a; var b = void 0 === a.La ? !1 : a.La,
            c = void 0 === a.Cf ? !0 : a.Cf,
            d = void 0 === a.Wc ? null : a.Wc,
            e = void 0 === a.Ue ? null : a.Ue;
        this.id = void 0 === a.id ? null : a.id;
        this.La = b;
        this.Cf = c;
        this.Wc = d;
        this.Ue = e };
    var XI = function(a, b) { this.eventType = a;
        this.url = b };
    var YI = function(a, b, c) { var d = void 0 === c ? {} : c;
        c = void 0 === d.mf ? null : d.mf; var e = void 0 === d.breakType ? null : d.breakType,
            f = void 0 === d.trackingEvents ? [] : d.trackingEvents;
        d = void 0 === d.extensions ? [] : d.extensions;
        this.l = a;
        this.j = b;
        this.mf = c;
        this.breakType = e;
        this.trackingEvents = f;
        this.extensions = d };
    var ZI = function(a) { this.j = a = void 0 === a ? [] : a };
    var $I = function() {};
    var aJ = function() {};
    var bJ = function() { this.j = [] },
        cJ = function(a) { var b = new aJ;
            a.j.includes(b) || a.j.push(b) },
        eJ = function(a, b) {
            if (!b) throw Error("VMAP string is empty.");
            if (!dJ(b)) throw Error("Response string is not a valid VMAP document.");
            var c = [];
            b = p(xh(b));
            for (var d = b.next(); !d.done; d = b.next()) {
                var e = d.value;
                if ("vmap:AdBreak" == e.nodeName) {
                    var f = void 0,
                        g = void 0;
                    d = a;
                    var h = e.getAttribute("breakId"),
                        k = e.getAttribute("breakType"),
                        m = e.getAttribute("timeOffset"),
                        n = 0,
                        r = [];
                    if ("start" == m) n = 0;
                    else if ("end" == m) n = -1;
                    else if (void 0 !=
                        m) { var q = sC(m);
                        void 0 != q && (n = q / 1E3) }
                    e = p(xh(e));
                    for (q = e.next(); !q.done; q = e.next()) {
                        var y = q.value;
                        switch (y.nodeName) {
                            case "vmap:AdSource":
                                q = g = void 0;
                                var x = y;
                                y = x.getAttribute("id");
                                var A = "false" != x.getAttribute("followRedirects"),
                                    L = "true" == x.getAttribute("allowMultipleAds");
                                x = p(xh(x));
                                for (var F = x.next(); !F.done; F = x.next()) switch (F = F.value, F.nodeName) {
                                    case "vmap:AdTagURI":
                                        q = (q = U(F)) ? q : void 0;
                                        break;
                                    case "vmap:VASTAdData":
                                        F = p(xh(F));
                                        for (var na = F.next(); !na.done; na = F.next()) na = na.value, "VAST" == na.nodeName &&
                                            (g = na)
                                }
                                if (!q && !g) throw Error("VMAP ad source contains neither ad tag nor inline VAST data.");
                                if (q && g) throw Error("VMAP ad source contains both ad tag and inline VAST data");
                                g = new WI({ id: y, La: L, Cf: A, Wc: q, Ue: g });
                                break;
                            case "vmap:Extensions":
                                f = d;
                                q = [];
                                y = p(xh(y));
                                for (A = y.next(); !A.done; A = y.next())
                                    if (A = A.value, "vmap:Extension" == A.nodeName)
                                        for (L = p(f.j), x = L.next(); !x.done; x = L.next()) x = "bumper" != A.getAttribute("type") ? null : new $I, null != x && q.push(x);
                                f = q;
                                break;
                            case "vmap:TrackingEvents":
                                for (r = [], q = p(xh(y)),
                                    y = q.next(); !y.done; y = q.next()) A = y.value, "vmap:Tracking" == A.nodeName && (y = A.getAttribute("event"), A = U(A), null != A && r.push(new XI(y, A)))
                        }
                    }
                    if (!g || null == m || isNaN(n)) throw Error("VMAP ad source contains neither ad tag nor inline VAST data.");
                    c.push(new YI(g, n, { mf: h, breakType: k, trackingEvents: r, extensions: f }))
                }
            }
            return new ZI(c)
        },
        dJ = function(a) { if (!a || "vmap:VMAP" == !a.nodeName) return !1;
            a = a.getAttribute("version"); if (!a) return !1;
            a = parseInt(a, 10); return isNaN(a) || 1 > a || 1 < a ? !1 : !0 };
    var fJ = function(a, b) { this.o = a;
        this.A = b;
        this.l = this.j = null };
    var gJ = ["ADSENSE", "ADSENSE/ADX"],
        hJ = { "application/flash": "Flash", "application/shockwave-flash": "Flash", "application/x-shockwave-flash": "Flash", "application/javascript": "Javascript", "text/javascript": "Javascript", "image/jpeg": "Image", "image/jpg": "Image", "image/png": "Image", "image/gif": "Image", text: "Text" },
        iJ = { Yh: "application/dash+xml", mi: "video/mp4", oi: "video/mpeg", ji: "application/x-mpegURL", si: "video/ogg", ti: "audio/ogg", Ai: "video/3gpp", Di: "video/webm", li: "audio/mpeg", ni: "audio/mp4" };
    var jJ = function(a, b, c) { var d = Error.call(this);
        this.message = d.message; "stack" in d && (this.stack = d.stack);
        this.A = b;
        this.l = c;
        this.B = a };
    u(jJ, Error);
    var kJ = function(a, b) { a.o || (a.o = b) };
    l = jJ.prototype;
    l.getAd = function() { return this.o };
    l.getInnerError = function() { return this.j };
    l.getMessage = function() { return this.A };
    l.getErrorCode = function() { return this.l };
    l.getVastErrorCode = function() { return 1E3 > this.l ? this.l : 900 };
    l.getType = function() { return this.B };
    l.toString = function() { return "AdError " + this.getErrorCode() + ": " + this.getMessage() + (null != this.getInnerError() ? " Caused by: " + this.getInnerError() : "") };
    var lJ = function(a) { var b = {},
            c = b = (b.type = a.getType(), b.errorCode = a.getErrorCode(), b.errorMessage = a.getMessage(), b);
        a = a.getInnerError(); for (var d = 0; 3 > d; ++d)
            if (a instanceof jJ) { var e = {};
                e = (e.type = a.getType(), e.errorCode = a.getErrorCode(), e.errorMessage = a.getMessage(), e);
                c = c.innerError = e;
                a = a.getInnerError() } else { null != a && (c.innerError = String(a)); break }
        return b };
    var mJ = function() { this.j = this.l = this.A = this.B = null;
        this.o = [] };
    var nJ = function(a, b) { this.j = b;
        this.l = a };
    var oJ = function() {};
    var pJ = function(a, b) { this.message = a;
        this.errorCode = b };
    pJ.prototype.getErrorCode = function() { return this.errorCode };
    pJ.prototype.getMessage = function() { return this.message };
    var qJ = new pJ("Unable to request ads from server. Cause: {0}.", 1005),
        rJ = new pJ("Cannot parse the {0} value for the adslist response: {1}.", 900),
        sJ = new pJ("Invalid usage of the API. Cause: {0}", 900),
        tJ = new pJ("The browser prevented playback initiated without user interaction.", 1205),
        uJ = new pJ("Unable to display one or more required companions.", 602),
        vJ = new pJ("The Consent Management Provider on the page has indicated that it is not ready.", 1300),
        wJ = new pJ("There was a problem requesting ads from the server.",
            1005),
        xJ = new pJ("Ad tag URI {0} is invalid. It must be properly encoded before being passed.", 1013),
        yJ = new pJ("The provided ad type: {0} is not supported.", 200),
        zJ = new pJ("The provided {0} information: {1} is invalid.", 1101),
        AJ = new pJ("The response does not contain any valid ads.", 1009),
        BJ = new pJ("The overlay ad content could not be displayed since creative dimensions do not align with display area.", 501),
        CJ = new pJ("The ad response was not understood and cannot be parsed.", 1010),
        DJ = new pJ("An unexpected error occurred and the cause is not known. Refer to the inner error for more info.",
            900),
        EJ = new pJ("No assets were found in the VAST ad response.", 200),
        FJ = new pJ("The VAST response document is empty.", 1009),
        GJ = new pJ("Linear assets were found in the VAST ad response, but none of them matched the video player's capabilities.", 403),
        HJ = new pJ("Ad request reached a timeout.", 301),
        IJ = new pJ("VAST response was malformed and could not be parsed.", 100),
        JJ = new pJ("VAST media file loading reached a timeout of {0} seconds.", 402),
        KJ = new pJ("Non linear assets were found in the VAST ad response, but none of them matched the video player's capabilities.",
            503),
        LJ = new pJ("The maximum number of VAST wrappers ({0}) has been reached.", 302),
        MJ = new pJ("VAST media file duration differs from the VAST response duration by {0} seconds.", 202),
        NJ = new pJ("No additional VAST wrappers allowed.", 300),
        OJ = new pJ("No Ads VAST response after one or more Wrappers", 303),
        PJ = new pJ("There was an error playing the video ad.", 400),
        QJ = new pJ("An unexpected error occurred within the VPAID creative. Refer to the inner error for more info.", 901);
    var RJ = function(a) { this.j = a },
        SJ = function(a, b) { return gf(a.j, b) && (a = a.j[b], "boolean" === typeof a) ? a : !1 },
        TJ = function(a) { if (gf(a.j, "forceExperimentIds")) { a = a.j.forceExperimentIds; var b = [],
                    c = 0;
                Array.isArray(a) && a.forEach(function(d) { "number" === typeof d && (b[c++] = d) }); return b } return null };
    var V = function() { this.J = "always";
            this.P = 4;
            this.j = 1;
            this.D = 0;
            this.l = !0;
            this.R = "en";
            this.C = !0;
            this.G = this.A = this.o = !1;
            this.V = this.T = "";
            this.B = null;
            this.U = this.O = this.F = "";
            this.K = this.ca = !1;
            this.L = !0;
            this.H = gy();
            this.Y = {}; try { this.I = Jo()[0] } catch (a) {} },
        UJ = function(a) { a = D(a);
            w(a) || (a = a.substring(0, 20)); return a };
    l = V.prototype;
    l.setCompanionBackfill = function(a) { this.J = a };
    l.getCompanionBackfill = function() { return this.J };
    l.setNumRedirects = function(a) { this.P = a };
    l.getNumRedirects = function() { return this.P };
    l.setPpid = function(a) { this.ba = a };
    l.getPpid = function() { return this.ba };
    l.setVpaidAllowed = function(a) { "boolean" === typeof a && (this.j = a ? 1 : 0) };
    l.setVpaidMode = function(a) { this.j = a };
    l.gj = function() { return this.j };
    l.setAutoPlayAdBreaks = function(a) { this.l = a };
    l.zj = function() { return this.l };
    l.xh = function(a) { this.o = a };
    l.Ej = function() { return this.o };
    l.setLocale = function(a) { if (a = by(a)) this.R = a };
    l.getLocale = function() { return this.R };
    l.setPlayerType = function(a) { this.T = UJ(a) };
    l.getPlayerType = function() { return this.T };
    l.setPlayerVersion = function(a) { this.V = UJ(a) };
    l.getPlayerVersion = function() { return this.V };
    var VJ = function() { var a = W; if (null == a.B) { var b = {},
                c = (new K(ih().location.href)).j; if (Km(c, "tcnfp")) try { b = JSON.parse(c.get("tcnfp")) } catch (d) {}
            a.B = new RJ(b) } return a.B };
    l = V.prototype;
    l.bk = function() {};
    l.ck = function() {};
    l.setDisableCustomPlaybackForIOS10Plus = function(a) { this.K = a };
    l.getDisableCustomPlaybackForIOS10Plus = function() { return this.K };
    l.isCookiesEnabled = function() { return this.L };
    l.setCookiesEnabled = function(a) { null != a && (this.L = a) };
    l.setSessionId = function(a) { this.H = a };
    l.ak = function() {};
    l.fj = function() { return !0 };
    l.setFeatureFlags = function(a) { this.Y = a };
    l.getFeatureFlags = function() { return this.Y };
    V.prototype.getFeatureFlags = V.prototype.getFeatureFlags;
    V.prototype.setFeatureFlags = V.prototype.setFeatureFlags;
    V.prototype.getDisableFlashAds = V.prototype.fj;
    V.prototype.setDisableFlashAds = V.prototype.ak;
    V.prototype.setSessionId = V.prototype.setSessionId;
    V.prototype.setCookiesEnabled = V.prototype.setCookiesEnabled;
    V.prototype.isCookiesEnabled = V.prototype.isCookiesEnabled;
    V.prototype.getDisableCustomPlaybackForIOS10Plus = V.prototype.getDisableCustomPlaybackForIOS10Plus;
    V.prototype.setDisableCustomPlaybackForIOS10Plus = V.prototype.setDisableCustomPlaybackForIOS10Plus;
    V.prototype.setStreamCorrelator = V.prototype.ck;
    V.prototype.setPageCorrelator = V.prototype.bk;
    V.prototype.getPlayerVersion = V.prototype.getPlayerVersion;
    V.prototype.setPlayerVersion = V.prototype.setPlayerVersion;
    V.prototype.getPlayerType = V.prototype.getPlayerType;
    V.prototype.setPlayerType = V.prototype.setPlayerType;
    V.prototype.getLocale = V.prototype.getLocale;
    V.prototype.setLocale = V.prototype.setLocale;
    V.prototype.isVpaidAdapter = V.prototype.Ej;
    V.prototype.setIsVpaidAdapter = V.prototype.xh;
    V.prototype.isAutoPlayAdBreaks = V.prototype.zj;
    V.prototype.setAutoPlayAdBreaks = V.prototype.setAutoPlayAdBreaks;
    V.prototype.getVpaidMode = V.prototype.gj;
    V.prototype.setVpaidMode = V.prototype.setVpaidMode;
    V.prototype.setVpaidAllowed = V.prototype.setVpaidAllowed;
    V.prototype.getPpid = V.prototype.getPpid;
    V.prototype.setPpid = V.prototype.setPpid;
    V.prototype.getNumRedirects = V.prototype.getNumRedirects;
    V.prototype.setNumRedirects = V.prototype.setNumRedirects;
    V.prototype.getCompanionBackfill = V.prototype.getCompanionBackfill;
    V.prototype.setCompanionBackfill = V.prototype.setCompanionBackfill;
    var W = new V;
    var WJ = ["gdpr_consent", "addtl_consent"];

    function XJ(a) { var b = {};
        (new K(a)).j.forEach(function(c, d) { b[d] = c }); return b }

    function YJ(a) { a.forEach(function(b, c, d) { "" == b && d.delete(c) }) }
    var ZJ = function(a) { this.D = a.isGdprLoader || !1;
            this.l = a.gfcPresent || !1;
            this.C = a.gfcLoaded || !1;
            this.o = a.gfcUserConsent || 0;
            this.uspString = a.uspString || ""; var b = a.gdprApplies;
            this.B = "boolean" == typeof b ? b ? "1" : "0" : "number" != typeof b || 1 !== b && 0 !== b ? "string" != typeof b || "1" !== b && "0" !== b ? "" : "1" == b ? "1" : "0" : 1 == b ? "1" : "0";
            this.j = a.tcString || ""; /^[\.\w_-]*$/.test(this.j) || (this.j = encodeURIComponent(this.j));
            this.A = a.addtlConsent || "" },
        $J = function(a, b, c) {
            b = void 0 === b ? {} : b;
            c = void 0 === c ? {} : c;
            this.l = void 0 === a ? !1 : a;
            this.o =
                b;
            this.j = new ZJ(c)
        },
        aK = function(a, b) { return new $J(ty(a), XJ(a), b) },
        gK = function(a) { var b = new Map;
            b.set("rdp", a.l ? 1 == bK(a, "rdp") ? "1" : "" : "");
            b.set("us_privacy", cK(a)); var c = b.set,
                d = "1" == bK(a, "npa");
            c.call(b, "npa", a.l && d || a.l && a.j.l && 2 != a.j.o ? "1" : "");
            b.set("gdpr", dK(a));
            b.set("gdpr_consent", eK(a));
            c = b.set;
            d = bK(a, "addtl_consent");
            c.call(b, "addtl_consent", a.j.A || d || "");
            b.set("ltd", fK(a) ? "1" : "");
            YJ(b); return b },
        hK = function() { var a = X().j; return a.j.l && !a.j.C || (a.l && a.j.D ? a.j.l && 0 == a.j.o : !1) },
        bK = function(a,
            b) { if (a.o.hasOwnProperty(b)) return a.o[b] },
        cK = function(a) { var b = bK(a, "us_privacy"); return a.j.uspString || b || "" },
        dK = function(a) { var b, c = null == (b = bK(a, "gdpr")) ? void 0 : b.toString();
            a = a.j.B; return "1" == a || "0" == a ? a : void 0 != c ? c : "" },
        eK = function(a) { var b = a.j.j;
            a = bK(a, "gdpr_consent"); return b && "tcunavailable" != b ? b : "tcunavailable" == b ? a || b : a || "" },
        iK = function(a) {
            var b;
            if (!(b = fK(a))) {
                b = dK(a).toLowerCase();
                if ("true" === b || "1" === b)
                    if (a = eK(a), "tcunavailable" === a) var c = !1;
                    else {
                        if ((b = yv(a)) && a) {
                            var d = Kd(b, Pu, 1);
                            b = Kd(b,
                                Iu, 2) || new Iu;
                            var e = Pd(d, 9),
                                f = Pd(d, 4),
                                g = Pd(d, 5),
                                h = Gd(d, 10),
                                k = Gd(d, 11),
                                m = Qd(d, 16),
                                n = Gd(d, 15),
                                r = { consents: zv(Cd(d, 13), kv), legitimateInterests: zv(Cd(d, 14), kv) },
                                q = { consents: zv(Cd(d, 17)), legitimateInterests: zv(Cd(d, 18)) },
                                y = zv(Cd(d, 12), lv),
                                x = Md(d, Gu, 19);
                            d = {};
                            x = p(x);
                            for (var A = x.next(); !A.done; A = x.next()) { A = A.value; var L = Fd(A, 1, 0);
                                d[L] = d[L] || {}; for (var F = p(Cd(A, 3)), na = F.next(); !na.done; na = F.next()) d[L][na.value] = Fd(A, 2, 0) }
                            a = {
                                tcString: a,
                                tcfPolicyVersion: e,
                                gdprApplies: !0,
                                cmpId: f,
                                cmpVersion: g,
                                isServiceSpecific: h,
                                useNonStandardStacks: k,
                                publisherCC: m,
                                purposeOneTreatment: n,
                                purpose: r,
                                vendor: q,
                                specialFeatureOptins: y,
                                publisher: { restrictions: d, consents: zv(Cd(b, 1), kv), legitimateInterests: zv(Cd(b, 2), kv), customPurposes: { consents: zv(Cd(b, 3)), legitimateInterests: zv(Cd(b, 4)) } }
                            }
                        } else a = null;
                        if (a)
                            if (!1 === a.gdprApplies ? b = !0 : (void 0 === a.internalErrorState && (void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0), void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0), a.internalErrorState =
                                    void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3), b = "error" === a.cmpStatus || 0 !== a.internalErrorState ? !a.internalBlockOnErrors : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0), b)
                                if (!1 !== a.gdprApplies && "tcunavailable" !== a.tcString && void 0 !== a.gdprApplies && "string" === typeof a.tcString && a.tcString.length) {
                                    c = void 0 === c ? "755" : c;
                                    c: {
                                        if (a.publisher && a.publisher.restrictions &&
                                            (b = a.publisher.restrictions["1"], void 0 !== b)) { b = b[void 0 === c ? "755" : c]; break c }
                                        b = void 0
                                    }
                                    0 === b ? c = !1 : a.purpose && a.vendor ? (b = a.vendor.consents, (c = !(!b || !b[void 0 === c ? "755" : c])) && a.purposeOneTreatment && "CH" === a.publisherCC ? c = !0 : c && (c = a.purpose.consents, c = !(!c || !c["1"]))) : c = !0
                                } else c = !0;
                        else c = !1;
                        else c = !1
                    }
                else c = !0;
                b = !c
            }
            return b
        },
        fK = function(a) { var b; return "1" == (null == (b = bK(a, "ltd")) ? void 0 : b.toString()) };

    function jK(a, b) { return a.major !== b.major ? a.major - b.major : a.minor !== b.minor ? a.minor - b.minor : a.Sb !== b.Sb ? a.Sb - b.Sb : 0 };
    var kK = function(a) {
        this.A = this.l = this.o = this.B = this.j = null;
        a = D(a).split(":");
        if (null != a && 3 <= a.length) {
            if (ib(a[0], "ios")) this.j = "ios";
            else if (ib(a[0], "android")) this.j = "android";
            else if (ib(a[0], "tvos")) this.j = "tvos";
            else { var b = a[0].match(/^([A-Za-z]+)(.+)$/);
                null != b && 3 == b.length && (this.j = b[1]) }
            this.B = a[1];
            b = a[1].split(".");
            if (3 !== b.length) b = null;
            else {
                var c = p(b),
                    d = c.next().value;
                b = c.next().value;
                c = c.next().value;
                d && b && c ? (d = Number(d), b = Number(b), c = Number(c), b = Number.isNaN(d) || Number.isNaN(b) || Number.isNaN(c) ?
                    null : { major: d, minor: b, Sb: c }) : b = null
            }
            this.o = b;
            this.l = a[2];
            if ("ios" == this.j || "tvos" == this.j) this.A = 3 < a.length ? a[3] : ""
        }
    };
    var mK = function(a) { C.call(this, a, -1, lK) };
    u(mK, C);
    var nK = function(a, b) { return B(a, 2, b) },
        oK = function(a, b) { return B(a, 3, b) },
        pK = function(a, b) { return B(a, 4, b) },
        qK = function(a, b) { return B(a, 5, b) },
        rK = function(a, b) { return B(a, 9, b) },
        sK = function(a, b) { return Od(a, 10, b) },
        tK = function(a, b) { return B(a, 11, b) },
        uK = function(a, b) { return B(a, 1, b) },
        vK = function(a, b) { return B(a, 7, b) },
        wK = function(a) { C.call(this, a) };
    u(wK, C);
    wK.prototype.getVersion = function() { return Qd(this, 2) };
    var lK = [10, 6];
    var xK = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function yK(a) { var b; return null != (b = a.google_tag_data) ? b : a.google_tag_data = {} }

    function zK() { var a = window,
            b, c; if ("function" !== typeof(null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues)) return null; var d = yK(a); if (d.uach_promise) return d.uach_promise;
        a = a.navigator.userAgentData.getHighEntropyValues(xK).then(function(e) { null != d.uach || (d.uach = e); return e }); return d.uach_promise = a }

    function AK(a) { var b; return tK(sK(qK(nK(uK(pK(vK(rK(oK(new mK, a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), (null == (b = a.fullVersionList) ? void 0 : b.map(function(c) { var d = new wK;
            d = B(d, 1, c.brand); return B(d, 2, c.version) })) || []), a.wow64 || !1) }

    function BK() { var a, b; return null != (b = null == (a = zK()) ? void 0 : a.then(function(c) { return AK(c) })) ? b : null };
    var EK = function() {
            this.adBlock = 1;
            this.ma = this.sa = this.ka = this.appName = null;
            this.j = new $J;
            this.Y = this.Ka = this.R = this.G = this.K = null;
            this.ya = !1;
            gy();
            this.deviceId = "";
            this.O = this.Oh = this.Ca = this.A = null;
            this.I = "";
            this.P = -1;
            this.Qh = this.Ph = "";
            this.Na = this.pg = this.fb = this.l = this.Ma = !1;
            this.U = null;
            this.T = !1;
            this.pc = this.B = this.V = this.tg = this.sg = this.oc = this.kc = this.jc = this.o = this.tb = null;
            this.rc = !1;
            this.J = CK();
            this.yd = this.xd = null;
            this.Cd = !1;
            this.referrer = this.aa = null;
            this.D = !1;
            this.ug = this.Ed = null;
            this.H =
                CK();
            this.ba = this.wg = this.Gd = this.F = !1;
            this.ca = this.og = null;
            this.fa = [];
            this.Ub = null;
            DK(this);
            this.L = this.C = !1;
            this.ga = null
        },
        CK = function() { return Math.floor(4503599627370496 * Math.random()) },
        FK = function() { var a = X(),
                b = "h.3.526.0";
            null != a.B ? (b += "/n." + a.B, null != a.appName && (b += "/" + a.appName)) : W.o && (b += "/vpaid_adapter");
            a.Na && (b += "/ima_eap");
            a.pg && (b += "/ima_cast"); return b },
        GK = function(a, b) {
            b = b.adTagUrl || "";
            uy(b) && (b = (new K(b)).j.get("description_url", ""), a.tb === b ? a.adBlock = 0 === a.adBlock % 99 ? 1 : a.adBlock +
                1 : (a.adBlock = 1, a.tb = b))
        },
        HK = function() {
            var a = X();
            a.H = CK();
            a.adBlock = 1;
            a.appName = null;
            a.ka = null;
            a.sa = null;
            a.ma = null;
            a.j = new $J;
            a.K = null;
            a.ya = !1;
            a.deviceId = "";
            a.A = null;
            a.Ca = null;
            a.Oh = null;
            a.O = null;
            a.G = null;
            a.R = null;
            a.Ka = null;
            a.Y = null;
            a.I = "";
            a.Ma = !1;
            a.U = null;
            a.T = !1;
            a.l = !1;
            a.fb = !1;
            a.pg = !1;
            a.Na = !1;
            a.tb = null;
            a.o = null;
            a.jc = null;
            a.kc = null;
            a.sg = null;
            a.tg = null;
            a.V = null;
            a.B = null;
            a.pc = null;
            a.rc = !1;
            a.J = CK();
            a.xd = null;
            a.yd = null;
            a.Cd = !1;
            a.aa = null;
            a.referrer = null;
            a.D = !1;
            a.Ed = null;
            a.ug = null;
            a.F = !1;
            a.Gd = !1;
            a.wg = !1;
            a.ba = !1;
            a.og = null;
            a.ca = null;
            a.fa = [];
            a.C = !1;
            a.L = !1;
            a.ga = null
        },
        JK = function(a, b) {
            a = void 0 === a ? {} : a;
            b = void 0 === b ? !1 : b;
            var c = X(),
                d = a.identifierInfo || null,
                e = a.isTv || !1,
                f = a.marketAppInfo || null,
                g = a.env || null,
                h = null;
            g && (h = new kK(g));
            g = a.gfpCookieValue;
            var k = a.gfpCookieV2Id || null,
                m = a.gfpCookieV2OptOut || null;
            var n = a.espSignals || null;
            var r = a.trustTokenStatuses || [],
                q = a.companionSlots,
                y = a.network,
                x = a.settings || {},
                A = a.videoEnvironment || {},
                L = x.pageCorrelator || 0,
                F = x.streamCorrelator || 0;
            0 < L && (c.J = L);
            0 < F && (c.H = F);
            null !=
                x.ppid && (c.aa = x.ppid);
            null != A.contentMediaUrl && (c.K = A.contentMediaUrl);
            null != A.customClickTrackingProvided && (c.ya = A.customClickTrackingProvided);
            null != g && g ? c.G = g : c.G = null;
            c.R = k;
            c.Ka = m;
            c.Y = n;
            c.fa = r;
            null != A.iframeState && (c.P = A.iframeState);
            null != A.isAmp && (c.Ma = A.isAmp);
            null != A.topAccessiblePageUrl && (c.o = A.topAccessiblePageUrl);
            null != A.referrer && (c.referrer = A.referrer);
            null != A.topOrigin && (c.og = A.topOrigin);
            null != A.domLoadTime && (c.Ca = A.domLoadTime);
            null != A.downloadBandwidthKbps && (c.Oh = A.downloadBandwidthKbps);
            null != A.sdkImplLoadTime && (c.Ed = A.sdkImplLoadTime);
            null != A.imaHostingDomain && (c.Ph = A.imaHostingDomain);
            null != A.imaHostingPageUrl && (c.Qh = A.imaHostingPageUrl);
            c.C = null != A.usesCustomVideoPlayback ? A.usesCustomVideoPlayback : a.usesCustomVideoPlayback || !1;
            null != A.rendersUiNatively && (c.D = A.rendersUiNatively);
            null != a.sdkOwnedRendering && (c.ug = a.sdkOwnedRendering);
            c.ba = null != A.supportsResizing ? A.supportsResizing : a.supportsResizing || !1;
            c.fb = a.isBrowserCookieEnabled || !1;
            c.F = a.supportsIconClickFallback || !1;
            c.Gd =
                IK(a, h);
            c.rc = a.omidAdSessionsOnStartedOnly || !1;
            null != A.usesInlinePlayback && (c.L = A.usesInlinePlayback);
            null != A.videoAdKey && (c.ga = A.videoAdKey);
            q && (c.sg = q);
            y && (c.tg = y);
            c.wg = a.supportsNativeNetworking || !1;
            d ? (c.ka = d.appSetId, c.sa = d.appSetIdScope, c.deviceId = d.deviceId, c.I = d.idType, c.U = d.isLimitedAdTracking, c.xd = d.perAppIdentifier, c.yd = d.perAppIdentifierV2, c.Cd = d.perAppIdentifierV2UserEnabled || !1, c.ca = d.trackingAuthorizationStatus) : b && (c.deviceId = a.rdid || "", c.I = a.idType || "", a.isLat && (c.U = "1" == a.isLat));
            b && (c.oc = a.msParameter || "");
            f && (c.kc = f.appVersion || "", c.jc = f.packageName || "");
            h && (c.appName = h.l, c.A = h.A, d = h.j, c.o = "//mbapp" + Ig(("ios" == d || "tvos" == d ? 1 : "android" == d ? 2 : 0) + "-" + h.l) + ".com", c.V = h.j, c.B = h.j + "." + h.B, c.pc = h.o);
            c.T = b;
            c.l = e;
            c.Na = a.isEapLoader || !1;
            return c
        },
        IK = function(a, b) {
            if (null != a.supportsExternalNavigation) return a.supportsExternalNavigation;
            a = null == b ? void 0 : b.o;
            if (!a) return !1;
            switch (b.j) {
                case "android":
                    return 0 >= jK({ major: 3, minor: 16, Sb: 2 }, a);
                case "ios":
                    return 0 >= jK({ major: 3, minor: 11, Sb: 1 },
                        a);
                default:
                    return !1
            }
        },
        DK = function(a) { var b = BK();
            b && b.then(function(c) { a.Ub = null == c ? null : Rc(Vd(c)) }) },
        KK = function() { return Ip() ? !1 : !0 },
        X = function() { return Fl(EK) };
    var LK = function() { var a = ih(),
                b = document; return new K(a.parent == a ? a.location.href : b.referrer) },
        MK = function(a, b) { a.j.set("url", ""); try { var c = 2083 - a.toString().length - 1; if (0 >= c) return a.toString(); for (var d = b.slice(0, c), e = encodeURIComponent(d), f = c; 0 < f && e.length > c;) d = b.slice(0, f--), e = encodeURIComponent(d);
                a.j.set("url", d) } catch (g) {} return a.toString() };
    var NK = function(a) { H.call(this);
        this.sessionId = a || "goog_" + Sg++;
        this.o = [];
        this.A = !1 };
    u(NK, H);
    NK.prototype.connect = function() { for (this.A = !0; 0 != this.o.length;) { var a = this.o.shift();
            this.sendMessage(a.name, a.type, a.data) } };
    var OK = function(a, b, c, d) { a.A ? a.sendMessage(b, c, d) : a.o.push({ name: b, type: c, data: d }) };
    NK.prototype.sendMessage = function() {};
    var Y = {},
        PK = (Y.creativeView = "creativeview", Y.start = "start", Y.midpoint = "midpoint", Y.firstQuartile = "firstquartile", Y.thirdQuartile = "thirdquartile", Y.complete = "complete", Y.mute = "mute", Y.unmute = "unmute", Y.pause = "pause", Y.rewind = "rewind", Y.resume = "resume", Y.fullscreen = "fullscreen", Y.exitFullscreen = "exitfullscreen", Y.expand = "expand", Y.collapse = "collapse", Y.close = "close", Y.acceptInvitation = "acceptinvitation", Y.userInteraction = "userInteraction", Y.adCanPlay = "adCanPlay", Y.adStarted = "adStarted", Y.abandon = "abandon",
            Y.acceptInvitationLinear = "acceptinvitationlinear", Y.engagedView = "engagedview", Y.instreamAdComplete = "instreamAdComplete", Y.skipShown = "skipshown", Y.skippableStateChanged = "skippableStateChanged", Y.skip = "skip", Y.progress = "progress", Y.publisher_invoked_skip = "PUBLISHER_INVOKED_SKIP", Y.annotation_start = "annotation_start", Y.annotation_click = "annotation_click", Y.annotation_close = "annotation_close", Y.cta_annotation_shown = "cta_annotation_shown", Y.cta_annotation_clicked = "cta_annotation_clicked", Y.cta_annotation_closed =
            "cta_annotation_closed", Y.replay = "replay", Y.stop = "stop", Y.autoplayDisallowed = "autoplayDisallowed", Y.error = "error", Y.mediaLoadTimeout = "mediaLoadTimeout", Y.linearChanged = "linearChanged", Y.click = "click", Y.contentPauseRequested = "contentPauseRequested", Y.contentResumeRequested = "contentResumeRequested", Y.discardAdBreak = "discardAdBreak", Y.updateAdsRenderingSettings = "updateAdsRenderingSettings", Y.durationChange = "durationChange", Y.expandedChanged = "expandedChanged", Y.autoClose = "autoClose", Y.userClose = "userClose",
            Y.userRecall = "userRecall", Y.prefetched = "prefetched", Y.loaded = "loaded", Y.init = "init", Y.allAdsCompleted = "allAdsCompleted", Y.adMetadata = "adMetadata", Y.adBreakReady = "adBreakReady", Y.adBreakFetchError = "adBreakFetchError", Y.log = "log", Y.volumeChange = "volumeChange", Y.companionBackfill = "companionBackfill", Y.companionInitialized = "companionInitialized", Y.companionImpression = "companionImpression", Y.companionClick = "companionClick", Y.impression = "impression", Y.interaction = "interaction", Y.adProgress = "adProgress",
            Y.adBuffering = "adBuffering", Y.trackingUrlPinged = "trackingUrlPinged", Y.measurable_impression = "measurable_impression", Y.custom_metric_viewable = "custom_metric_viewable", Y.viewable_impression = "viewable_impression", Y.fully_viewable_audible_half_duration_impression = "fully_viewable_audible_half_duration_impression", Y.overlay_resize = "overlay_resize", Y.overlay_unmeasurable_impression = "overlay_unmeasurable_impression", Y.overlay_unviewable_impression = "overlay_unviewable_impression", Y.overlay_viewable_immediate_impression =
            "overlay_viewable_immediate_impression", Y.overlay_viewable_end_of_session_impression = "overlay_viewable_end_of_session_impression", Y.externalActivityEvent = "externalActivityEvent", Y.adEvent = "adEvent", Y.configure = "configure", Y.remainingTime = "remainingTime", Y.destroy = "destroy", Y.resize = "resize", Y.volume = "volume", Y.authorIconClicked = "videoAuthorIconClicked", Y.authorNameClicked = "videoAuthorClicked", Y.videoClicked = "videoClicked", Y.videoIconClicked = "videoIconClicked", Y.learnMoreClicked = "videoLearnMoreClicked",
            Y.muteClicked = "videoMuteClicked", Y.titleClicked = "videoTitleClicked", Y.skipShown = "SKIP_SHOWN", Y.videoSkipClicked = "SKIPPED", Y.unmuteClicked = "videoUnmuteClicked", Y.vpaidEvent = "vpaidEvent", Y.show_ad = "show_ad", Y.video_card_endcap_collapse = "video_card_endcap_collapse", Y.video_card_endcap_dismiss = "video_card_endcap_dismiss", Y.video_card_endcap_impression = "video_card_endcap_impression", Y.mediaUrlPinged = "mediaUrlPinged", Y.breakStart = "breakstart", Y.breakEnd = "breakend", Y.omidReady = "omidReady", Y.omidUnavailable =
            "omidUnavailable", Y.omidAdSessionCompleted = "omidAdSessionCompleted", Y.omidAdSessionAbandoned = "omidAdSessionAbandoned", Y.verificationNotExecuted = "verificationNotExecuted", Y.loadStart = "loadStart", Y.seeked = "seeked", Y.seeking = "seeking", Y),
        QK = "adBreakFetchError adBreakReady adBuffering adCanPlay adMetadata adProgress allAdsCompleted click companionBackfill companionInitialized complete contentPauseRequested contentResumeRequested durationChange externalActivityEvent firstQuartile heavy_ad_intervention_cpu heavy_ad_intervention_network iconFallbackImageClosed impression interaction linearChanged loaded log measurable_impression mediaUrlPinged midpoint navigationRequested pause resume show_ad skipShown skippableStateChanged skip start thirdQuartile trackingUrlPinged userClose viewable_impression video_card_endcap_collapse video_card_endcap_dismiss video_card_endcap_impression videoClicked videoIconClicked volumeChange mute".split(" "),
        RK = "adBuffering adCanPlay adMetadata adProgress click companionBackfill companionInitialized complete durationChange firstQuartile heavy_ad_intervention_cpu heavy_ad_intervention_network iconFallbackImageClosed impression interaction loaded log mediaUrlPinged midpoint navigationRequested pause resume skipShown skippableStateChanged skip start thirdQuartile trackingUrlPinged userClose videoClicked videoIconClicked volumeChange mute vpaidEvent".split(" "),
        SK = "abandon acceptInvitation acceptInvitationLinear click close collapse companionClick complete creativeView engagedView exitFullscreen expand instreamAdComplete externalActivityEvent firstQuartile fullscreen loaded measurable_impression midpoint pause progress replay resume rewind show_ad skipShown skip start stop thirdQuartile userClose verificationNotExecuted video_card_endcap_collapse video_card_endcap_dismiss video_card_endcap_impression viewable_impression mute unmute".split(" "),
        TK = "viewable_impression measurable_impression overlay_unmeasurable_impression overlay_unviewable_impression overlay_viewable_immediate_impression overlay_viewable_end_of_session_impression externalActivityEvent".split(" "),
        UK = {
            measurable_impression: "measurable_impression",
            viewable_impression: "viewable_impression",
            custom_metric_viewable: "custom_metric_viewable",
            fully_viewable_audible_half_duration_impression: "fully_viewable_audible_half_duration_impression",
            overlay_unmeasurable_impression: "overlay_unmeasurable_impression",
            overlay_unviewable_impression: "overlay_unviewable_impression",
            overlay_viewable_immediate_impression: "overlay_viewable_immediate_impression",
            overlay_viewable_end_of_session_impression: "overlay_viewable_end_of_session_impression"
        };

    function VK(a) { return fb(a, "custom_metric_viewable") ? !0 : null != UK[a] }
    var WK = "acceptInvitation acceptInvitationLinear click collapse complete exitFullscreen expand firstQuartile fullscreen impression loaded midpoint pause resume skip start thirdQuartile videoClicked volumeChange".split(" ");
    var XK = "abort canplay canplaythrough durationchange emptied loadstart loadeddata loadedmetadata progress ratechange seeked seeking stalled suspend waiting".split(" ");

    function YK(a) { var b = lh(document, "VIDEO"),
            c = df(iJ).filter(function(d) { var e = ["video/3gpp", "application/x-mpegURL"]; return Eb() && e.includes(d) || (Db() || Ac || yc || BA()) && "video/webm" == d ? !1 : b.canPlayType(d) });
        a = a.filter(function(d) { return c.includes(d) }); return 0 < a.length ? a : c }
    var $K = function(a) { a = void 0 === a ? !1 : a; return !(yc || BA() || Ac && yA(wA, 10)) || !a && X().C ? X().l || ub(xb(), "Xbox") ? !0 : xc || zc ? !1 : !wc || wc && yA(xA, 4) ? Gp() ? X().D : ZK() ? !1 : !0 : !1 : !0 },
        aL = function() { return !(X().C || xc || zc || Ip() || wc && (!wc || !yA(xA, 4))) },
        bL = function() { var a = VJ(); return a && SJ(a, "disableOnScreenDetection") ? !1 : !Gp() },
        cL = function() { var a = document; return "visible" == (a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || "") },
        dL = function(a) { a = void 0 === a ? [] : a; return YK(a) },
        eL = function() {
            var a = X(),
                b = a.pc;
            switch (a.V) {
                case "android":
                    return a.l ? !Kx.isSelected() && a.F : !!b && 0 >= jK({ major: 3, minor: 5, Sb: 2 }, b);
                case "ios":
                    return !!b && 0 >= jK({ major: 3, minor: 4, Sb: 1 }, b);
                case "tvos":
                    return !Kx.isSelected() && a.D;
                default:
                    return !ZK() }
        },
        fL = function() { var a = void 0 === a ? !0 : a; var b = [];!X().T && 0 != W.j && b.push("2");
            KK(X()) && b.push("7");
            (X().l || !ZK()) && a && b.push("8"); return b },
        ZK = function() { return Ip() || X().l },
        gL = function() { return X().l ? 1 : Ip() ? 2 : 0 };
    var sA = ["*.googlesyndication.com", "gcdn.2mdn.net"],
        hL = function(a) { return pA(a, Gp() ? "https" : window.location.protocol) };
    var iL = { Yj: function(a, b) { a && (Qv(a) ? Rv(a, b) : Yv(a, b)) } };

    function jL(a, b) { null != a && null != b && (a = My(a, b)); return a }

    function kL(a, b) { a = jL(a, b);
        a = hL(a); if (Gp()) lL(a);
        else try { iL.Yj(a, !0) } catch (c) {} }

    function lL(a) {
        (new UB).get({ url: a, timeout: new FB(5E3) }).then(function() {}, function() {}) }

    function mL(a, b) { null != a && a.forEach(function(c) { return void kL(c, b) }) };
    var nL = function() { this.j = .01 > Math.random();
        this.l = Math.floor(4503599627370496 * Math.random()) };
    nL.prototype.report = function(a, b, c) { b = void 0 === b ? {} : b; if (null == v.G_testRunner && (this.j || (void 0 === c ? 0 : c))) { b.lid = a;
            b.sdkv = FK();
            a = lw();
            w(D(a)) || (b.e = a);
            b = oL(this, b); var d = new K("http://pagead2.googlesyndication.com/pagead/gen_204");
            Xe(b, function(e, f) { d.j.set(f, null == e ? "" : "boolean" == typeof e ? e ? "t" : "f" : "" + e) }, this);
            b = LK();
            tm(d, b.A);
            W.A || (b = d.toString(), a = Fm(d, "url"), null != a && Ab() && 2083 < b.length && (b = MK(d, a)), kL(b)) } };
    var oL = function(a, b) { b.id = "ima_html5"; var c = LK();
        b.c = a.l;
        b.domain = c.l; return b };
    nL.prototype.isLoggingEnabled = function() { return this.j };
    var pL = function() { return Fl(nL) };
    var qL = function(a, b) { this.X = a;
            this.j = b },
        rL = function(a) { return a.j ? -1 : a.X };
    var sL = function() { this.j = new Map },
        tL = function(a, b) { b.forEach(function(c) { var d = c.j,
                    e = a.getEvents(d);
                e.push(c);
                a.j.set(d, e) }) },
        uL = function(a, b, c, d) { var e = null,
                f = null;
            d && (-1 != rL(d) ? e = rL(d) : f = d.j ? d.X : -1);
            c = new bw(b, c, e, f);
            d = a.getEvents(b);
            d.push(c);
            a.j.set(b, d) };
    sL.prototype.getEvents = function(a) { return null != a ? this.j.get(a) || [] : [] };
    sL.prototype.isEmpty = function() { return 0 == this.j.size };
    var vL = function(a, b) { return a.getEvents(b).map(function(c) { return c.url }) },
        wL = function(a, b) { b.j.forEach(function(c) { tL(a, c) }) };
    var xL = function(a) { this.Qa = a;
        this.j = !1;
        this.trackingEvents = new sL };
    xL.prototype.getMaxDuration = function() { if (null == this.Qa.adTagUrl) return null; var a = this.Qa.adTagUrl.match(dk)[6] || null; if (!a) return null; var b = null;
        fk(a, function(c, d) { if (null == b) switch (c) {
                case "max_ad_duration":
                case "pmxd":
                    b = parseInt(d, 10) / 1E3 } }); return b };
    var yL = function(a, b, c, d) { Ih.call(this, a);
        this.ab = b;
        this.Va = c;
        this.bi = d };
    u(yL, Ih);
    yL.prototype.toString = function() { return "" };
    var zL = function() { this.autoAlign = !0;
        this.bitrate = -1;
        this.enablePreloading = this.disableUi = this.disableClickThrough = !1;
        this.loadVideoTimeout = 8E3;
        this.mimeTypes = null;
        this.playAdsAfterTime = -1;
        this.restoreCustomPlaybackStateOnAdBreakComplete = !1;
        this.uiElements = null;
        this.useStyledNonLinearAds = this.useStyledLinearAds = this.useLearnMoreButton = !1;
        this.j = this.useVideoAdUi = !0 };
    zL.prototype.append = function(a) {
        if (a) {
            null != a.autoAlign && (this.autoAlign = a.autoAlign);
            var b = Xg(a.bitrate);
            "number" === typeof b && !isNaN(b) && 0 < b && (this.bitrate = b);
            this.disableClickThrough = a.disableClickThrough || this.disableClickThrough;
            this.disableUi = a.disableUi || this.disableUi;
            this.enablePreloading = a.enablePreloading || this.enablePreloading;
            a.mimeTypes && 0 != a.mimeTypes.length && (this.mimeTypes = a.mimeTypes);
            b = Xg(a.playAdsAfterTime);
            "number" === typeof b && !isNaN(b) && 0 < b && (this.playAdsAfterTime = b);
            this.restoreCustomPlaybackStateOnAdBreakComplete =
                a.restoreCustomPlaybackStateOnAdBreakComplete || this.restoreCustomPlaybackStateOnAdBreakComplete;
            b = Xg(a.loadVideoTimeout);
            "number" === typeof b && !isNaN(b) && 0 < b && (this.loadVideoTimeout = b);
            this.uiElements = a.uiElements || this.uiElements;
            this.useLearnMoreButton = a.useLearnMoreButton || this.useLearnMoreButton;
            this.useStyledLinearAds = a.useStyledLinearAds || this.useStyledLinearAds;
            this.useStyledNonLinearAds = a.useStyledNonLinearAds || this.useStyledNonLinearAds;
            this.useVideoAdUi = !1 === a.useVideoAdUi ? !1 : this.useVideoAdUi;
            this.j = a.useYouTubeMetadata || this.j
        }
    };
    Ka("module$contents$ima$AdsRenderingSettings_AdsRenderingSettings.AUTO_SCALE", -1);
    var AL = function() { this.Qe = 1;
        this.sd = -1;
        this.Pd = 1;
        this.fg = this.df = 0;
        this.hh = !1 };
    l = AL.prototype;
    l.getTotalAds = function() { return this.Qe };
    l.getMaxDuration = function() { return this.sd };
    l.getAdPosition = function() { return this.Pd };
    l.getPodIndex = function() { return this.df };
    l.getTimeOffset = function() { return this.fg };
    l.getIsBumper = function() { return this.hh };
    var BL = function(a) { var b = {};
        b.podIndex = a.getPodIndex();
        b.timeOffset = a.getTimeOffset();
        b.totalAds = a.getTotalAds();
        b.adPosition = a.getAdPosition();
        b.isBumper = a.getIsBumper();
        b.maxDuration = a.getMaxDuration(); return b };
    var CL = function(a, b) { b = void 0 === b ? "videoDisplay1" : b;
        H.call(this);
        this.o = a;
        this.j = b;
        this.C = this.l = -1;
        this.F = this.B = this.G = this.A = this.D = !1;
        this.K = -1;
        this.R = "";
        this.J = null;
        this.L = new OB(this);
        G(this, this.L);
        this.P = 8E3;
        this.I = 0 };
    u(CL, H);
    var DL = function(a) { S(a.L, a.o, a.j, a.jj);
            OK(a.o, a.j, "startTracking") },
        EL = function(a) { TB(a.L);
            OK(a.o, a.j, "stopTracking") };
    CL.prototype.load = function() { throw Error("Unexpected usage of VideoDisplayChannel"); };
    var GL = function(a, b, c, d) {
        a.R = b || "";
        FL(a);
        d = d ? BL(d) : null;
        if (c) {
            if (c instanceof Lz) { OK(a.o, a.j, "load", { videoUrl: b, adPodInfo: d, muxedMediaUrl: c.getMediaUrl(), muxedMimeType: c.j, muxedVideoCodec: c.oa, muxedAudioCodec: c.ra, mseCompatible: c.na }); return }
            if (c instanceof Kz) {
                var e = c.j,
                    f = c.C,
                    g = c.l,
                    h = c.B,
                    k = c.oa,
                    m = c.ra;
                if (e && f && g && h && k && m) {
                    OK(a.o, a.j, "load", { videoUrl: b, adPodInfo: d, demuxedVideoUrl: e, demuxedAudioUrl: f, demuxedVideoMimeType: g, demuxedAudioMimeType: h, demuxedVideoCodec: k, demuxedAudioCodec: m, mseCompatible: c.na });
                    return
                }
            }
        }
        OK(a.o, a.j, "load", { videoUrl: b, adPodInfo: d })
    };
    CL.prototype.reset = function(a) { this.A || this.B || this.pause();
        Ac && !a && (HL(this, .001), GL(this, "", null, null));
        (xc || zc) && this.F && !a && OK(this.o, this.j, "exitFullscreen") };
    var FL = function(a) { a.C = -1;
            a.l = -1;
            a.B = !1;
            a.A = !1;
            a.D = !1;
            IL(a) },
        HL = function(a, b) { OK(a.o, a.j, "setCurrentTime", { currentTime: b }) };
    CL.prototype.setVolume = function(a) { this.K = a;
        OK(this.o, this.j, "setVolume", { volume: a }) };
    var hE = function(a) { return dL().includes(a) },
        JL = function(a) { OK(a.o, a.j, "play");
            a.I || (a.I = Qi(a.T, a.P, a));
            Promise.resolve() };
    CL.prototype.pause = function() { OK(this.o, this.j, "pause");
        IL(this) };
    var KL = function(a) { FL(a);
        Ac || yc || BA() || OK(a.o, a.j, "unload") };
    l = CL.prototype;
    l.getDuration = function() { return this.C };
    l.getError = function() { return this.J };
    l.getVolume = function() { return this.G ? 0 : this.K };
    l.isMuted = function() { return this.G };
    l.jj = function(a) {
        var b = a.Va;
        a = a.ab;
        switch (a) {
            case "click":
                I(this, "click");
                break;
            case "end":
                this.B = !0;
                I(this, "end");
                break;
            case "error":
                IL(this);
                if (null == b.errorCode || null == b.errorMessage || null == b.type) a = null;
                else
                    for (var c = a = new jJ(b.type, b.errorMessage, b.errorCode), d = b.innerError, e = 0; 3 > e; ++e)
                        if (d instanceof Object) { var f = new jJ(d.type, d.errorMessage, d.errorCode);
                            c = c.j = f;
                            d = d.innerError } else { null != d && (c.j = Error(b.innerError)); break }
                null != a ? this.J = a : (b = b.errorMessage || PJ.getMessage(), this.J = Error(b));
                I(this, "error");
                break;
            case "fullscreen":
                this.F = !0;
                I(this, "beginFullscreen");
                break;
            case "exitFullscreen":
                this.F = !1;
                I(this, "endFullscreen");
                break;
            case "loaded":
                I(this, "loaded");
                break;
            case "mute":
                this.G = !0;
                I(this, "volumeChange");
                break;
            case "pause":
                this.A || (this.A = !0, null != b.ended && (this.B = b.ended), I(this, "pause"));
                break;
            case "play":
                this.A = !1;
                I(this, "play");
                break;
            case "autoplayDisallowed":
                I(this, "autoplayDisallowed");
                break;
            case "skip":
                I(this, "skip");
                break;
            case "focusSkipButton":
                I(this, "focusSkipButton");
                break;
            case "start":
                this.D || (IL(this), this.D = !0, LL(this, b), I(this, "start"));
                break;
            case "timeupdate":
                this.D && (c = b.timeUnit, a = ML(b.currentTime, c), b = ML(b.duration, c), void 0 !== a && void 0 !== b && (this.l = a, this.C != b && (this.C = b, I(this, "durationChange")), I(this, "timeUpdate")));
                break;
            case "timedMetadata":
                I(this, "timedMetadata");
                break;
            case "unmute":
                this.G = !1;
                I(this, "volumeChange");
                break;
            case "volumeChange":
                LL(this, b);
                I(this, "volumeChange");
                break;
            case "loadedmetadata":
                this.C = Tg(b.duration);
                I(this, a);
                break;
            case "abort":
            case "canplay":
            case "canplaythrough":
            case "durationchange":
            case "emptied":
            case "loadstart":
            case "loadeddata":
            case "progress":
            case "ratechange":
            case "seeked":
            case "seeking":
            case "stalled":
            case "suspend":
            case "waiting":
                I(this,
                    a)
        }
    };
    var LL = function(a, b) { b = b.volume; "number" !== typeof b || isNaN(b) || 0 > b || 1 < b || (a.G = 0 == b, a.K = b) };
    CL.prototype.T = function() { this.D || I(this, "mediaLoadTimeout") };
    var IL = function(a) { a.I && (Ri(a.I), a.I = 0) },
        ML = function(a, b) { if (void 0 === a) return a; switch (b) {
                case "ms":
                    return Tg(a) / 1E3;
                default:
                    return Tg(a) } };
    var NL = function(a, b) { H.call(this);
        this.l = 0;
        this.o = a;
        this.A = b;
        this.j = new OB(this);
        G(this, this.j) };
    u(NL, H);
    NL.prototype.dc = function() { return this.l };
    NL.prototype.start = function() { this.stop();
        S(this.j, this.o, "contentTimeUpdate", this.B) };
    NL.prototype.stop = function() { TB(this.j) };
    NL.prototype.B = function(a) { a = a.Va;
        a = ML(a.currentTime, a.timeUnit);
        void 0 !== a && (this.l = a, I(this, new Ih("contentPlayheadChanged"))) };
    var OL = function(a, b) { Ih.call(this, "OffsetTrackerEvent");
        this.Vj = a;
        this.Fj = b };
    u(OL, Ih);
    var PL = function(a, b) { H.call(this);
        this.l = a;
        this.j = b;
        this.o = new OB(this);
        G(this, this.o) };
    u(PL, H);
    PL.prototype.remove = function(a) { this.j.splice(this.j.indexOf(a), 1) };
    PL.prototype.start = function() { this.stop();
        S(this.o, this.l, "contentPlayheadChanged", this.A, !1);
        this.l.start() };
    PL.prototype.stop = function() { TB(this.o);
        this.l.stop() };
    PL.prototype.A = function() { QL(this) };
    var QL = function(a) { var b = a.l.dc(); if (!(isNaN(b) || 0 > b)) { var c = RL(a, b);
                b = SL(a, b, a.l.A);
                null == c && null == b || I(a, new OL(c, b)) } },
        SL = function(a, b, c) { var d = a.j.filter(function(e) { return -1 != e && b >= e - (W.l ? 8 : 2) && b < e }); return 0 < d.length ? d.pop() : -1 == a.j[a.j.length - 1] ? (-3 == c ? 0 : c && 0 < c ? b >= c - (W.l ? 8 : 2) : 1 == a.j.length || b > a.j[a.j.length - 2] + 1) ? -1 : null : null },
        RL = function(a, b) { a = a.j.filter(function(c) { return -1 != c && c <= b }); return 0 < a.length ? a.pop() : null },
        TL = function(a) {
            var b = a.j.find(function(c) { return -1 == c ? !0 : a.l.dc() <= c });
            return null == b ? null : b
        };
    var UL = function() { this.j = new Map };
    UL.prototype.add = function(a, b) { var c = this.j.get(a) || [];
        c.push.apply(c, t(b));
        this.j.set(a, c) };
    UL.prototype.remove = function(a) { this.j.delete(a) };
    var WL = function(a) { return VL(Array.from(a.j.keys())) };
    UL.prototype.getPodIndex = function(a) { var b = WL(this); switch (a) {
            case 0:
                return 0;
            case -1:
                return -1;
            default:
                return a = b.indexOf(a), 0 == b[0] ? a : a + 1 } };
    var VL = function(a) { if (0 == a.length) return a;
        a.sort(function(b, c) { return b - c }); - 1 == a[0] && a.push(a.shift()); return a };

    function XL(a, b) { return YL("adPlayError", a, void 0 === b ? null : b, Ea.apply(2, arguments)) }

    function YL(a, b, c, d) { if (c instanceof jJ) return c; var e = b.getErrorCode();
        b = b.getMessage(); if (0 < d.length)
            for (var f = 0; f < d.length; f++) b = b.replace(new RegExp("\\{" + f + "\\}", "ig"), d[f]);
        a = new jJ(a, b, e);
        a.j = c; return a };
    var ZL = function(a, b) { b = void 0 === b ? null : b;
        Ih.call(this, "adError");
        this.o = a;
        this.A = b };
    u(ZL, Ih);
    ZL.prototype.getError = function() { return this.o };
    ZL.prototype.getUserRequestContext = function() { return this.A };
    ZL.prototype.ob = function() { return this.l };

    function $L(a, b) { return YL("adLoadError", a, void 0 === b ? null : b, Ea.apply(2, arguments)) }

    function aM(a, b, c) { var d = XL.apply(null, [b, void 0 === c ? null : c].concat(t(Ea.apply(3, arguments))));
        I(a, new ZL(d)) };
    var bM = function(a, b) { this.o = a;
        this.l = b;
        pL().report(115, { vmap: !1 }) };
    u(bM, oJ);
    bM.prototype.j = function() { for (var a = new UL, b, c = xh(this.o), d = 0; d < c.length; d++) switch (b = c[d], b.nodeName) {
            case "Preroll":
                b = cM(this, b);
                a.add(0, b); break;
            case "Midroll":
                var e = b.getAttribute("timeOffset"),
                    f = sC(e); if (null == f) throw $L(rJ, null, "timeOffset", D(e));
                b = cM(this, b);
                a.add(f / 1E3, b); break;
            case "Postroll":
                b = cM(this, b);
                a.add(-1, b); break;
            default:
                throw $L(CJ, null, b.parentNode.nodeName, b.nodeName); }
        if (0 == WL(a).length) throw $L(AJ); return new nJ(null, a) };
    var cM = function(a, b) { var c = [];
        b = xh(b); for (var d, e = 0; e < b.length; e++) switch (d = b[e], d.nodeName) {
            case "Ad":
                var f = D(U(d));
                w(f) || (d = d.getAttribute("bumper"), f = new xL(iy(a.l, f)), f.j = null != d, c.push(f)); break;
            default:
                throw $L(CJ, null, d.parentNode.nodeName, d.nodeName); }
        return c };
    Ef(xf(yf("https://pagead2.googlesyndication.com/omsdk/releases/live/omweb-v1.js")));
    Ef(xf(yf("https://pagead2.googlesyndication.com/omsdk/releases/canary/omweb-v1.js")));
    var dM = function(a, b, c) { b = void 0 === b ? null : b;
        c = void 0 === c ? null : c;
        Ih.call(this, a);
        this.o = b;
        this.l = c };
    u(dM, Ih);
    dM.prototype.getAd = function() { return this.o };
    dM.prototype.getAdData = function() { return this.l };
    var eM = function(a, b) { this.O = a;
        this.F = b.map(function(c) { return { size: c.size.clone(), Sa: c.Sa } });
        this.H = "";
        this.B = null;
        this.l = this.o = 0;
        this.j = !1;
        this.D = !0;
        this.A = [];
        this.C = [] };
    eM.prototype.getSlotId = function() { return this.O };
    eM.prototype.getSizes = function() { return this.F };
    eM.prototype.setContent = function(a, b, c, d, e, f, g) { this.H = a;
        this.B = null;
        this.o = b;
        this.l = c;
        this.j = d;
        this.D = e;
        this.A = f || [];
        this.C = g || [] };
    var fM = function(a) { a.H = "";
        a.B = null;
        a.o = 0;
        a.l = 0;
        a.j = !1;
        a.D = !0;
        a.A = [];
        a.C = [] };
    eM.prototype.getContent = function() { return this.H };
    eM.prototype.clone = function() { var a = new eM(this.O, this.F); if (null != this.B) { var b = this.B,
                c = this.o,
                d = this.l,
                e = this.j,
                f = this.A;
            a.H = "<div></div>";
            a.B = b;
            a.o = c;
            a.l = d;
            a.j = e;
            a.D = !1;
            a.A = f || [];
            a.C = [] } else a.setContent(this.getContent(), this.o, this.l, this.j, this.D, this.A, this.C); return a };
    var gM = function() { this.allowCustom = !0;
            this.creativeType = this.resourceType = "All";
            this.sizeCriteria = "SelectExactMatch";
            this.nearMatchPercent = 90;
            this.adSlotIds = [] },
        hM = { IMAGE: "Image", FLASH: "Flash", ALL: "All" };
    Ka("module$contents$ima$CompanionAdSelectionSettings_CompanionAdSelectionSettings.CreativeType", hM);
    var iM = { HTML: "Html", IFRAME: "IFrame", STATIC: "Static", ALL: "All" };
    Ka("module$contents$ima$CompanionAdSelectionSettings_CompanionAdSelectionSettings.ResourceType", iM);
    var jM = { IGNORE: "IgnoreSize", SELECT_EXACT_MATCH: "SelectExactMatch", SELECT_NEAR_MATCH: "SelectNearMatch", SELECT_FLUID: "SelectFluid" };
    Ka("module$contents$ima$CompanionAdSelectionSettings_CompanionAdSelectionSettings.SizeCriteria", jM);
    var lM = function(a, b) { b = void 0 === b ? new gM : b;
            this.l = a;
            this.j = b ? b : new gM;
            this.A = kM(iM, this.j.resourceType) ? this.j.resourceType : "All";
            this.o = kM(hM, this.j.creativeType) ? this.j.creativeType : "All";
            this.D = kM(jM, this.j.sizeCriteria) ? this.j.sizeCriteria : "SelectExactMatch";
            this.B = null != this.j.adSlotIds ? this.j.adSlotIds : [];
            this.C = "number" === typeof this.j.nearMatchPercent && 0 < this.j.nearMatchPercent && 100 >= this.j.nearMatchPercent ? this.j.nearMatchPercent : 90 },
        oM = function(a, b) {
            var c = [];
            b.forEach(function(d) {
                a.j.allowCustom &&
                    (d.zg() && (isNaN(d.qa()) || isNaN(d.fe()) || d.fe() == d.qa()) && mM(a, d) ? c.push(d) : (d = nM(a, d), null != d && d.zg() && c.push(d)))
            });
            return c
        },
        mM = function(a, b) {
            var c;
            if (c = "Flash" != b.getContentType()) { if (c = "All" == a.A || a.A == b.j.D) c = b.getContentType(), c = null == c ? !0 : "All" == a.o || a.o == c;
                c && (c = b.getAdSlotId(), c = 0 == a.B.length ? !0 : null != c ? a.B.includes(c) : !1) }
            if (c)
                if (c = b.Od(), (b = b.j.ce) || a.l.Sa) a = b && a.l.Sa;
                else if ((b = "IgnoreSize" == a.D) || (b = a.l.size, b = b == c ? !0 : b && c ? b.width == c.width && b.height == c.height : !1), b) a = !0;
            else {
                if (b = "SelectNearMatch" ==
                    a.D) b = c.width, c = c.height, b = b > a.l.size.width || c > a.l.size.height || b < a.C / 100 * a.l.size.width || c < a.C / 100 * a.l.size.height ? !1 : !0;
                a = b
            } else a = !1;
            return a
        },
        nM = function(a, b) { b = b.l; return null == b ? null : b.find(function(c) { return mM(a, c) }) || null },
        kM = function(a, b) { return null != b && hf(a, b) };
    var pM = null,
        qM = function() { H.call(this);
            this.j = null;
            this.A = new OB(this);
            G(this, this.A);
            this.B = new Map;
            this.F = new Map;
            this.l = this.C = !1;
            this.o = null },
        rM;
    u(qM, H);
    var sM = function() { null == pM && (pM = new qM); return pM },
        yu = function(a, b, c) { var d = {};
            d.queryId = b;
            d.viewabilityData = c;
            a.j && OK(a.j, "activityMonitor", "viewabilityMeasurement", d) };
    qM.prototype.destroy = function() { SB(this.A, this.j, "activityMonitor", this.D);
        this.l = !1;
        this.B.clear();
        this === rM && (rM = null) };
    qM.prototype.N = function() { this.destroy();
        H.prototype.N.call(this) };
    qM.prototype.init = function(a) {
        if (!this.l) {
            if (this.j = a || null) S(this.A, this.j, "activityMonitor", this.D), tM(this);
            if (W.C && !(v.ima && v.ima.video && v.ima.video.client && v.ima.video.client.tagged)) { Ka("ima.video.client.sdkTag", !0); var b = v.document;
                a = lh(document, "SCRIPT"); var c = Ef(xf(yf("https://s0.2mdn.net/instream/video/client.js")));
                a.src = Bf(c);
                zg(a);
                a.async = !0;
                a.type = "text/javascript";
                b = b.getElementsByTagName("script")[0];
                b.parentNode.insertBefore(a, b) }
            vo(ow());
            Fl(nu).I = W.D;
            this.C = !0;
            Fl(nu).o = !0;
            this.o =
                null;
            a = Fl(nu);
            b = "h" == Zt(a) || "b" == Zt(a);
            c = !uo().j;
            b && c && (a.O = !0, a.U = new Sr);
            this.l = !0
        }
    };
    var uM = function(a, b, c, d, e) {
        e = void 0 === e ? {} : e;
        if (a.l) {
            d && null == e.opt_osdId && (e.opt_osdId = d);
            if (a.o) return a.o(b, c, e);
            if (a = d ? a.F.get(d) : W.aa) {
                if (null == e.opt_fullscreen) { if (null == a) d = !1;
                    else if ((xc || zc) && null != a.webkitDisplayingFullscreen) d = a.webkitDisplayingFullscreen;
                    else { d = { left: a.offsetLeft, top: a.offsetTop, width: a.offsetWidth, height: a.offsetHeight }; try { "function" === typeof a.getBoundingClientRect && yh(Zg(a), a) && (d = a.getBoundingClientRect()) } catch (f) {}
                        d = CA(d.width, d.height) }
                    e.opt_fullscreen = d }
                null ==
                    e.opt_adElement && (e.opt_adElement = a)
            }
            return Jl.tc(469, Wa(Au, b, c, e)) || {}
        }
        return {}
    };
    qM.prototype.je = function() { this.B.set((void 0).ci.adQueryId, void 0);
        (0 != W.D ? Fl(nu).o : this.C) && uM(this, "loaded", (void 0).ci.adQueryId) };
    var uu = function(a, b) { a = a.B.get(b); return "function" === typeof a ? a() : {} },
        tM = function(a) { if ("function" === typeof window.Goog_AdSense_Lidar_getUrlSignalsArray) { var b = {};
                b.pageSignals = window.Goog_AdSense_Lidar_getUrlSignalsArray();
                OK(a.j, "activityMonitor", "pageSignals", b) } };
    qM.prototype.D = function(a) {
        var b = a.Va,
            c = b.queryId,
            d = {},
            e = null;
        d.eventId = b.eventId;
        switch (a.ab) {
            case "getPageSignals":
                tM(this);
                break;
            case "reportVastEvent":
                e = b.vastEvent;
                a = b.osdId;
                var f = {};
                f.opt_fullscreen = b.isFullscreen;
                b.isOverlay && (f.opt_bounds = b.overlayBounds);
                d.viewabilityData = uM(this, e, c, a, f);
                OK(this.j, "activityMonitor", "viewability", d);
                break;
            case "fetchAdTagUrl":
                c = {}, c.eventId = b.eventId, a = b.osdId, gf(b, "isFullscreen") && (e = b.isFullscreen), gf(b, "loggingId") && (b = b.loggingId, c.loggingId = b, pL().report(43, { step: "beforeLookup", logid: b, time: Date.now() })), c.engagementString = vM(this, a, e), this.j && OK(this.j, "activityMonitor", "engagement", c)
        }
    };
    var vM = function(a, b, c) { if (!W.C) return ""; var d = b ? a.F.get(b) : W.aa;
        a = {};
        null != c && (a.fullscreen = c);
        c = ""; try { c = Aj(function() { return d }, a) } catch (e) { c = "sdktle;" + Pg(e.name, 12) + ";" + Pg(e.message, 40) } return c };
    Ka("ima.common.getVideoMetadata", function(a) { return uu(sM(), a) });
    Ka("ima.common.triggerViewabilityMeasurementUpdate", function(a, b) { yu(sM(), a, b) });
    var wM = function() { this.G = -1;
        this.hg = [];
        this.F = "";
        this.zc = new sL;
        this.C = null };
    l = wM.prototype;
    l.qa = function() { return this.ff };
    l.getDuration = function() { return this.G };
    l.Le = function(a) { this.T = a };
    l.Ke = function(a) { this.P = a };
    l.getCreativeId = function() { return this.T };
    l.getCreativeAdId = function() { return this.P };
    l.gf = function() { return null };
    l.getApiFramework = function() { return null };
    var xM = function(a, b) { a.F = b };
    wM.prototype.getAd = function() { return this.C };
    var yM = function(a, b) { a.hg = b };
    wM.prototype.getUniversalAdIds = function() { return this.hg };
    var zM = function(a) { var b = new sL;
        a.L().forEach(function(c) { wL(b, c.zc) }); return b };
    wM.prototype.L = function() { for (var a = [this], b = this.C.l; b;) { var c = AM(this, b) || AM(this, b, !0);
            null != c && a.push(c);
            b = b.l } return a };
    var AM = function(a, b, c) { c = void 0 === c ? !1 : c; return b.D.find(function(d) { var e = d.qa() == a.qa(); return d instanceof a.constructor && (c || e) }) };
    var BM = function(a, b, c, d, e) { wM.call(this);
        w(D(a)) && (a = "goog_" + Sg++ + "_ima");
        this.R = D(a);
        this.V = b;
        this.ce = !1;
        this.D = c;
        this.B = d;
        this.l = e;
        null == this.B ? this.I = null : this.I = hJ[this.B] || "Other" };
    u(BM, wM);
    l = BM.prototype;
    l.getContent = function() { if (Gp()) var a = "";
        else if (null == this.H && (this.H = this.O(), nh(this.H, CM(this))), a = this.H, "outerHTML" in a) a = a.outerHTML;
        else { var b = lh(Zg(a), "DIV");
            b.appendChild(a.cloneNode(!0));
            a = b.innerHTML } return a };
    l.getAdId = function() { return this.R };
    l.getContentType = function() { return this.I };
    l.jb = function() { return this.V };
    l.getWidth = function() { return this.jb().width };
    l.getHeight = function() { return this.jb().height };
    l.getMediaUrl = function() { return this.l };
    l.gf = function() { return "VPAID" == this.kf && "Javascript" == this.I ? this.l : null };
    l.getApiFramework = function() { return this.kf };
    l.bb = function() { var a, b; return null != (b = null == (a = this.Vc) ? void 0 : a.url) ? b : null };
    l.Vb = function() { return Dz(this.Vc) };
    var DM = function() { this.j = "";
        this.o = "http://www.google.com/adsense/support";
        this.l = 0;
        this.A = !1 };
    var EM = function(a, b, c, d, e) { BM.call(this, a, b, c, d, e);
        this.H = null;
        this.Y = -2;
        this.qd = !1 };
    u(EM, BM);
    EM.prototype.O = function() { var a = D(this.l); if (!w(D(this.bb()))) { a = new K(a); var b = Ig(this.bb());
            a.j.set("clickTAG", b);
            a = a.toString() }
        b = kh("IFRAME", { marginwidth: 0, marginheight: 0, hspace: 0, vspace: 0, frameborder: 0, scrolling: "no" }, null);
        b.height = this.getHeight(); "Text" != this.getContentType() && (b.width = this.getWidth());
        b.setAttribute("src", hL(a)); return FM(this, b) };
    EM.prototype.o = function(a) { var b = D(this.l); if (!w(D(this.bb()))) { b = new K(b); var c = Ig(this.bb());
            b.j.set("clickTAG", c);
            b = b.toString() } return new zH({ height: this.getHeight(), width: this.getWidth(), Fa: hL(b), attribution: a.j }, "embedded", a.l) };
    EM.prototype.getMinSuggestedDuration = function() { return this.Y };
    var FM = function(a, b) { var c = kh("DIV");
            kj(c, "cursor", "default");
            kj(c, "position", "relative");
            kj(c, "z-index", "1001");
            kj(c, "height", a.getHeight() + "px"); "Text" != a.getContentType() && kj(c, "width", a.getWidth() + "px");
            a = a.getAdId();
            w(D(a)) || (c.id = a);
            c.appendChild(b); return c },
        CM = function(a) {
            if (!a.qd) return null;
            a = [].concat(t(vL(zM(a), "start")), t(vL(zM(a), "creativeView")));
            if (null != a && 0 < a.length) {
                var b = [];
                a.forEach(function(c) {
                    if (!w(D(c))) {
                        var d = $g().Ui("IFRAME", { frameborder: 0, style: "border:0;vertical-align:bottom;" });
                        d.src = Bf(DA).toString();
                        kj(d, { display: "block", height: "0px", width: "0px" });
                        var e = "iframe" + Math.floor(1E9 * Math.random());
                        d.setAttribute("height", 0);
                        d.setAttribute("width", 0);
                        d.setAttribute("src", hL(c));
                        d.setAttribute("id", e);
                        b.push(d)
                    }
                });
                return b
            }
            return null
        };
    EM.prototype.L = function() { for (var a = [this], b = this.getAd().l; b;) { var c = this.qd ? AM(this, b) || AM(this, b, !0) : GM(this, b) || GM(this, b, !0);
            null != c && a.push(c);
            b = b.l } return a };
    var GM = function(a, b, c) { c = void 0 === c ? !1 : c; return b.D.find(function(d) { var e = d.qa() == a.qa(); return a instanceof d.constructor && (c || e) }) };
    var HM = function(a, b, c) { this.j = a;
        this.l = b;
        this.o = c };
    l = HM.prototype;
    l.getContent = function() { var a = this.j.getContent(); var b = this.j.l; if (a && b) { var c = a.toLowerCase(); - 1 < c.indexOf("<!doctype") || -1 < c.indexOf("<html") || (b = b.toLowerCase(), a = -1 < b.indexOf("<!doctype") || -1 < b.indexOf("<html") ? "<!doctype html><html><body>" + a + "</body></html>" : a) } return a };
    l.getContentType = function() { return this.j.getContentType() };
    l.getWidth = function() { return this.j.getWidth() };
    l.getHeight = function() { return this.j.getHeight() };
    l.zg = function() { return !w(D(this.j.l)) };
    l.qa = function() { return this.j.qa() };
    l.fe = function() { var a = this.j.getAd().j; return null != a ? a.qa() : NaN };
    l.Od = function() { return this.j.jb() };
    l.getAdSlotId = function() { return this.o };
    l.getApiFramework = function() { return this.j.getApiFramework() || "" };
    l.getAd = function() { return this.j.getAd() };
    var IM = function(a, b) { a.j.C = b;
            a.l.forEach(function(c) { IM(c, b) }) },
        JM = function(a) { var b = {};
            b.apiFramework = a.getApiFramework();
            b.content = a.getContent();
            b.size = a.Od();
            b.fluidSize = a.j.ce;
            b.resourceType = a.j.D;
            b.resourceValue = a.j.l;
            b.contentType = a.getContentType();
            b.sequenceNumber = a.qa();
            b.mainAdSequenceNumber = a.fe();
            b.adSlotId = a.getAdSlotId();
            b.backupCompanions = a.l.map(function(c) { return JM(c) });
            b.height = a.Od().height;
            b.width = a.Od().width; return b };
    var KM = function(a, b) { this.j = a;
        this.l = b };
    var LM = function(a, b) { a = void 0 === a ? new sL : a;
            b = void 0 === b ? [] : b;
            this.j = a;
            this.D = b },
        MM = function(a, b) { b.j.forEach(function(c) { tL(a.j, c) }) },
        NM = function(a, b) { a = vL(a.j, b); return null != a ? a : [] };
    var OM = function(a) { LM.call(this);
        this.l = a };
    u(OM, LM);
    OM.prototype.getDuration = function() { return this.l };
    var PM = function(a) { LM.call(this);
        this.l = a };
    u(PM, LM);
    var QM = function(a, b, c, d, e, f, g, h, k) { LM.call(this, h, k);
        this.l = a;
        this.C = b;
        this.H = c;
        this.F = g;
        this.o = f;
        this.A = d;
        this.B = e };
    u(QM, LM);
    QM.prototype.Mc = function() { return this.F };
    var RM = function(a, b) { LM.call(this);
        this.o = a;
        this.l = b };
    u(RM, LM);
    RM.prototype.isSkippable = function() { return this.o };
    var SM = function(a, b) { LM.call(this, b);
        this.l = a };
    u(SM, LM);
    var TM = function(a) { LM.call(this);
        this.l = a };
    u(TM, LM);
    var UM = function(a) { return a.l.map(function(b) { return b.Ti }) };
    var VM = function(a) { LM.call(this);
        this.l = a };
    u(VM, LM);
    var WM = function(a, b) { LM.call(this, b);
        this.l = a };
    u(WM, LM);
    var XM = function(a) { var b = [];
        a = p(a.l); for (var c = a.next(); !c.done; c = a.next()) c = c.value, 1 == c.type && b.push(c); return 0 < b.length ? b[0] : null };
    var YM = function(a, b, c) { LM.call(this);
        this.l = a;
        this.o = b;
        this.A = c };
    u(YM, LM);
    var ZM = function(a, b) { LM.call(this);
        this.l = a;
        this.o = b };
    u(ZM, LM);
    var $M = function(a, b, c, d, e) { LM.call(this);
        this.A = a;
        this.l = b;
        this.C = c;
        this.o = d;
        this.B = e };
    u($M, LM);
    $M.prototype.init = function() {
        if (this.A && this.l && (this.C && this.o || this.B)) {
            var a = this.A,
                b = this.l,
                c = this.C,
                d = this.o,
                e = this.B,
                f = window,
                g = c ? "//pagead2.googlesyndication.com/bg/" + Kg(c) + ".js" : "";
            c = f.document;
            var h = {};
            b && (h._scs_ = b);
            h._bgu_ = g;
            h._bgp_ = d;
            h._li_ = "v_h.3.526.0";
            e && (h._upb_ = e);
            (b = f.GoogleTyFxhY) && "function" == typeof b.push || (b = f.GoogleTyFxhY = []);
            b.push(h);
            f = $g(c);
            f = lh(f.j, "SCRIPT");
            f.type = "text/javascript";
            f.async = !0;
            a = Ff(yf("//tpc.googlesyndication.com/sodar/%{path}"), { path: Kg(a) + ".js" });
            f.src =
                Bf(a);
            zg(f);
            c.getElementsByTagName("head")[0].appendChild(f)
        }
    };
    var aN = function(a) { LM.call(this);
        this.l = a };
    u(aN, LM);
    var bN = function(a) { LM.call(this);
        this.l = a };
    u(bN, LM);
    bN.prototype.qa = function() { return this.l };
    var cN = function(a) { LM.call(this);
        this.l = isNaN(a) ? -1 : a };
    u(cN, LM);
    var dN = function(a) { if (null == a || !rA(a)) return !1;
        a = (new K(a)).o; return null != a && fb(a, "/videoplayback") };
    var eN = function(a, b, c, d, e, f, g, h, k, m) {
        var n = Array(16);
        if (v.crypto && v.crypto.getRandomValues) { var r = new Uint8Array(16);
            v.crypto.getRandomValues(r); for (var q = 0; q < n.length; q++) n[q] = r[q] } else
            for (r = 0; 16 > r; r++) { q = Xa(); for (var y = 0; y < q % 23; y++) n[r] = Math.random();
                n[r] = Math.floor(256 * Math.random()) }
        r = [];
        n = p(n);
        for (q = n.next(); !q.done; q = n.next()) r.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(q.value & 63));
        n = r.join("");
        k = hL(D(k));
        dN(k) && (k = new K(k), k.j.set("cpn", n), k = k.toString());
        Xz.call(this, k, { height: h, width: g, delivery: a, mimeType: b, apiFramework: m, bitrate: d, minBitrate: e, maxBitrate: f, codec: c });
        this.j = n
    };
    u(eN, Xz);
    eN.prototype.getWidth = function() { return this.width || 0 };
    eN.prototype.getHeight = function() { return this.height || 0 };
    eN.prototype.getApiFramework = function() { return this.apiFramework };

    function fN(a) { a = a.getApiFramework(); return "VPAID" == a || "surveys" == a }
    var hN = function(a, b, c, d, e, f) { wM.call(this);
        this.G = a;
        this.l = b;
        this.U = gN(c);
        this.K = d.slice();
        this.j = null;
        this.A = e;
        this.o = f };
    u(hN, wM);
    var gN = function(a) { return a.filter(function(b) { return fN(b) && !w(D(b.mimeType)) && -1 != b.mimeType.indexOf("x-shockwave-flash") ? !1 : !0 }) };
    hN.prototype.bb = function() { var a, b; return null != (b = null == (a = this.l) ? void 0 : a.url) ? b : null };
    hN.prototype.Vb = function() { return Dz(this.l) };
    hN.prototype.getMediaUrl = function() { return null != this.j ? this.j.url : null };
    hN.prototype.gf = function() { var a = iN(this); return null != a ? a.url : null };
    var iN = function(a) { a = a.U.find(function(b) { return fN(b) && !w(D(b.mimeType)) && -1 != b.mimeType.indexOf("javascript") }); return null != a ? a : null };
    hN.prototype.getApiFramework = function() { return null != this.j ? this.j.getApiFramework() : 1 == this.U.length ? this.U[0].getApiFramework() : null };

    function jN(a) { return a.map(function(b) { var c = {}; return c.adIdRegistry = b.getAdIdRegistry(), c.adIdValue = b.getAdIdValue(), c.universalAdIdRegistry = b.getAdIdRegistry(), c.universalAdIdValue = b.getAdIdValue(), c }) };
    var mN = function(a, b, c, d, e, f, g, h, k, m, n, r, q, y, x, A, L, F, na, oa, Ga) {
            var Sa = this;
            A = void 0 === A ? null : A;
            L = void 0 === L ? !1 : L;
            F = void 0 === F ? !1 : F;
            na = void 0 === na ? [] : na;
            oa = void 0 === oa ? !0 : oa;
            Ga = void 0 === Ga ? !1 : Ga;
            this.V = a;
            this.Y = !1;
            this.ca = b;
            this.J = c;
            this.fa = d;
            this.rc = e;
            this.jc = f;
            this.Ka = 0 < k ? k : -1;
            this.pc = g;
            this.T = h;
            this.ka = m ? m.slice() : [];
            this.ma = n ? n.slice() : [];
            this.D = r ? r.slice() : [];
            this.L = [];
            this.U = [];
            this.l = this.j = this.K = null;
            this.kc = na;
            this.H = new Map;
            null != y && y.forEach(function(Ha, re) { Sa.H.set(re, Ha) });
            this.B = new mJ;
            this.ga = (this.F = null != A) ? L : !1;
            this.sa = this.oc ? F : !1;
            this.ya = D(A);
            this.A = null;
            this.ba = new AL;
            this.G = new Hg(0, 0);
            this.C = String(Math.floor(1E9 * Math.random()));
            this.Ma = [];
            this.tb = null;
            this.P = 0;
            this.Na = this.Ca = !1;
            this.I = null;
            this.R = this.aa = !1;
            this.D.forEach(function(Ha) { Ha.C = Sa });
            this.fb = x;
            this.O = new yD;
            AD(this.O, new uB);
            oa && AD(this.O, new AB);
            AD(this.O, new kA);
            Q(R(), "ghmsh_eids", lw());
            kN(this.O, Ga);
            this.o = zD(this.O, new gA([x]), new hy);
            lN(this, q)
        },
        kN = function(a, b) {
            var c = [{ type: "itag", Ib: 22 }, {
                type: "itag",
                Ib: 18
            }];
            b = (ux.isSelected() || vx.isSelected()) && b;
            (wx.isSelected() || b) && v.customElements && (c = [{ type: "itag", Kd: 243, Rd: 250 }, { type: "itag", Kd: 243, Rd: 140 }, { type: "itag", Ib: 22 }, { type: "itag", Ib: 18 }], vx.isSelected());
            xx.isSelected() ? c.unshift({ type: "dash" }) : yx.isSelected() ? c.unshift({ type: "hls" }) : zx.isSelected() ? c.unshift({ type: "itag", Kd: 396, Rd: 139 }) : Ax.isSelected() && c.unshift({ type: "itag", Kd: 398, Rd: 139 });
            (Ac || yc || BA() || uc && Mc) && c.unshift({ type: "hls" });
            AD(a, new pB(new LD(c)))
        },
        oN = function(a) {
            var b = a.j;
            return nN(a) ?
                b.U : []
        },
        nN = function(a) { a = a.j; return null != a && a instanceof hN };
    l = mN.prototype;
    l.getAdSystem = function() { return null != this.ca ? this.ca : "" };
    l.getAdvertiserName = function() { return null != this.fa ? this.fa : "" };
    l.getApiFramework = function() { return null != this.j ? this.j.getApiFramework() : null };
    l.getTitle = function() { return D(this.rc) };
    l.getDescription = function() { return D(this.jc) };
    var pN = function(a) { for (var b = []; null != a;) b = [].concat(t(a.ka), t(b)), a = a.l; return b },
        qN = function(a) { return null != a.l ? qN(a.l).concat(a.ma) : a.ma };
    mN.prototype.getSurveyUrl = function() { return this.pc };
    mN.prototype.getDealId = function() { var a = null != this.T ? this.T : "",
            b = this.l; return null != b ? (b = b.getDealId(), w(b) ? a : b) : a };
    mN.prototype.getContentType = function() { if (null != rN(this)) return "application/javascript"; var a = this.j,
            b = ""; if (null === a) return b; if (a instanceof hN) a = a.j, null !== a && (b = D(a.mimeType));
        else if (a instanceof EM) switch (a.D) {
            case "IFrame":
            case "Html":
            case "Static":
                b = D(a.B) }
        return b };
    var sN = function(a) { return null != a.l ? a.U.concat(sN(a.l)) : a.U };
    mN.prototype.getTraffickingParametersString = function() { return null != this.j ? this.j.F : "" };
    var tN = function(a, b) { return a.H.get(b) },
        uN = function(a) { for (var b = new Map; a;) a.H.forEach(function(c, d) { b.get(d) ? b.set(d, [].concat(t(b.get(d)), [c])) : b.set(d, [c]) }), a = a.l; return b },
        vN = function(a, b) { var c = [];
            a.H.forEach(function(d) { c = c.concat(NM(d, b)) }); return c },
        wN = function(a) { return vN(a, "integrationDebug").map(function(b) { return b + "&sdkv=[SDKV]" }) },
        xN = function(a, b) {
            a.j = b;
            a.G = new Hg(0, 0);
            if (null != a.j && (a.j instanceof EM && (a.G = a.j.jb()), b = a.l, null != b)) { var c = AM(a.j, b) || AM(a.j, b, !0);
                xN(b, c) }
            b = a.getDuration();
            a.ba.sd = b
        },
        zN = function(a) { if (a.A) { var b = new gA(yN(a));
                a.o = zD(a.O, b) } },
        yN = function(a) { return a.l ? [a.fb].concat(t(yN(a.l))) : [a.fb] },
        AN = function(a) { var b = 0; for (a = a.l; null != a;) a = a.l, b++; return b };
    l = mN.prototype;
    l.getAdId = function() { return null != this.V ? this.V : "" };
    l.getWrapperAdIds = function() { var a = tN(this, "inred_info");
        a = a ? a.l : []; var b = this.l ? this.l.getAdId() : [],
            c = this.l ? this.l.getWrapperAdIds() : []; return [].concat(a, b, c) };
    l.getCreativeAdId = function() { var a = this.j; return null != a ? D(a.getCreativeAdId()) : "" };
    l.getCreativeId = function() { var a = this.j; return null != a ? (a = a.getCreativeId(), null != a ? a : "") : "" };
    l.getWrapperCreativeIds = function() { var a = tN(this, "inred_info");
        a = a ? a.A : []; var b = this.l ? this.l.getCreativeId() : [],
            c = this.l ? this.l.getWrapperCreativeIds() : []; return [].concat(a, b, c) };
    l.getWrapperAdSystems = function() { var a = tN(this, "inred_info");
        a = a ? a.o : []; var b = this.l ? this.l.getAdSystem() : [],
            c = this.l ? this.l.getWrapperAdSystems() : []; return [].concat(a, b, c) };
    var BN = function(a) { if (a.l) { var b = BN(a.l); if (b) return b } return (a = tN(a, "metrics")) ? a.l : null };
    mN.prototype.getUniversalAdIds = function() { var a = this.j; return null != a ? a.getUniversalAdIds() : [] };
    mN.prototype.getUniversalAdIdValue = function() { var a = this.getUniversalAdIds(); return a.length ? a[0].getAdIdValue() : "unknown" };
    mN.prototype.getUniversalAdIdRegistry = function() { var a = this.getUniversalAdIds(); return a.length ? a[0].getAdIdRegistry() : "unknown" };
    var CN = function(a) { if (a.l) { var b = CN(a.l); if (b) return b } return (a = tN(a, "metrics")) ? a.o : null },
        DN = function(a) { if (null == a.l) return [a.J]; var b = DN(a.l);
            b.push(a.J); return b },
        EN = function(a) { a = tN(a, "waterfall"); return null == a ? -1 : a.l };
    mN.prototype.getPodIndex = function() { if (-1 != this.Ka) return this.Ka; var a = tN(this, "pod"); return null == a ? -1 : a.qa() };
    var FN = function(a) { a.aa || (a.aa = !0, a.I.Eg(a.getDuration()), null != a.l && FN(a.l)) },
        GN = function(a) { return a.I && a.I.rf() ? a.I : null != a.l ? GN(a.l) : null };
    mN.prototype.getCompanionAds = function(a, b) { b = void 0 === b ? new gM : b; return oM(new lM(a, b), sN(this)) };
    var IN = function(a) { do
                if (HN(a)) return !1; while (a = a.l);
            return !0 },
        JN = function(a, b) { return b || null == a.l ? a.L : a.L.concat(JN(a.l)) },
        lN = function(a, b) { a.L = b ? b.slice() : [];
            a.L.forEach(function(c) { a.U = a.U.concat(c.j.slice()) });
            a.U.forEach(function(c) { IM(c, a) }) },
        KN = function(a, b) { return a.D.some(function(c) { return c instanceof hN && "linear" == b || c instanceof EM && "nonlinear" == b ? !0 : !1 }) },
        LN = function(a) { a.o instanceof xz && qI(a.o) ? a = (a = a.o) ? (a = qI(a)) && "BUMPER" == a.j ? !0 : !1 : !1 : a = !1; return a },
        MN = function(a) {
            a.o instanceof
            xz && qI(a.o) ? a = (a = a.o) ? (a = qI(a)) && "NONSKIPPABLE" == a.j ? !0 : !1 : !1 : a = !1;
            return a
        };
    mN.prototype.isLinear = function() { return this.Ca ? this.Na : NN(this) ? !0 : KN(this, "linear") };
    mN.prototype.isSkippable = function() { return null != ON(this) };
    var NN = function(a) { var b = a.j,
                c = null != a.A && null != a.A.forceNonLinearFullSlot && a.A.forceNonLinearFullSlot; return HN(a) && null != b && b instanceof EM && (90 < a.G.height || c) },
        PN = function(a, b) { if (null == b) return null; var c = tN(b, "adx"); return null != c ? c : PN(a, b.l) },
        ON = function(a) {
            var b = PN(a, a.l);
            if (null != b) return b.isSkippable() ? b.l : null;
            b = null;
            var c = new qL(5, !1);
            var d = null;
            for (var e = p(a.H.values()), f = e.next(); !f.done; f = e.next())
                if (f = f.value, 0 != NM(f, "skip").length) { d = f; break }
            null != d ? d = "implicit" : (d = a.H.get("DFP"),
                d = d instanceof SM && d.l ? "explicit" : "none");
            "implicit" == d && (b = c);
            e = a.j;
            null == b && null != e && e instanceof hN && (b = e.A);
            null == b && "explicit" == d && (b = c);
            return NN(a) ? (tN(a, "AdSense"), new qL(5, !1)) : b
        };
    mN.prototype.getSkipTimeOffset = function() { var a = ON(this); if (null != a) { var b = this.getDuration();
            a.j && 0 < b && (a.j = !1, a.X = a.X * b / 100); return rL(a) } return -1 };
    mN.prototype.oc = function() { return this.F };
    var QN = function(a) { return null !== a.j ? a.j.bb() : null },
        RN = function(a) { return null != a.j ? a.j.getDuration() : -1 },
        SN = function(a) { return null != a.K ? a.K : 0 };
    mN.prototype.getDuration = function() { if (NN(this)) return tN(this, "AdSense"), 15 + SN(this); if (this.F) { var a = tN(this, "wrapper_info"); if (a) return a.getDuration() } return RN(this) + SN(this) };
    mN.prototype.getMediaUrl = function() { var a = null,
            b = this.j;
        null != b && (a = b.getMediaUrl(), w(D(a)) && (a = null)); return a };
    var rN = function(a) { return null !== a.j ? a.j.gf() : null },
        HN = function(a) { var b;
            (b = gJ.includes(a.J)) || (b = ["ADSENSE-VIRAL"].includes(a.J)); return b },
        TN = function(a) { return a.o instanceof xz && pI(a.o) },
        UN = function(a) { a = tN(a, "InfoCards"); return null != a && null != XM(a) };
    l = mN.prototype;
    l.getVastMediaWidth = function() { var a = 0,
            b = this.j;
        b && (b instanceof hN ? (b = b.j, null !== b && (a = b.getWidth())) : b instanceof BM && (a = b.jb().width)); return a };
    l.getVastMediaHeight = function() { var a = 0,
            b = this.j;
        b && (b instanceof hN ? (b = b.j, null !== b && (a = b.getHeight())) : b instanceof BM && (a = b.jb().height)); return a };
    l.getWidth = function() { return this.isLinear() ? 0 : this.G.width };
    l.getHeight = function() { return this.isLinear() ? 0 : this.G.height };
    l.getUiElements = function() { return this.Ma };
    l.getMinSuggestedDuration = function() { return null == this.j ? -2 : this.j instanceof EM ? this.j.getMinSuggestedDuration() : this.j.getDuration() };
    l.getAdPodInfo = function() { return this.ba };
    var VN = function(a, b) { a = DN(a); for (var c = a.length - 1; 0 <= c; c--)
                if ("UNKNOWN" != a[c]) return b.includes(a[c]);
            return !1 },
        WN = function(a) { return nN(a) ? a.j.K.some(function(b) { return "SIMID" == D(b.apiFramework) }) : !1 },
        XN = function(a, b) { a: if (null != rN(a) || WN(a) || UN(a) || TN(a)) var c = !1;
                else { c = a; for (var d = !1; null != c;) { var e = tN(c, "uiSettings"); if (null != e)
                            if (e.l) null == c.l && (d = !0);
                            else { c = !1; break a }
                        c = c.l }
                    c = d }a.R = c && b;
            (b || c) && pL().report(60, { ui_disabled_available: c, ui_disable_requested: b }, !0); return a.R },
        YN = function(a) {
            var b = [];
            a.j instanceof hN && b.push.apply(b, t(a.j.o));
            a.l && b.push.apply(b, t(YN(a.l)));
            var c = new Set,
                d = [];
            b.forEach(function(e) { c.has(e.program) || (c.add(e.program), d.push(e)) });
            return d
        },
        ZN = function(a) { var b = a.kc.slice();
            a = tN(a, "adVerifications");
            null != a && (b = b.concat(a.l)); return b },
        $N = function(a) { var b = ZN(a);
            a = a.l;
            null != a && (b = $N(a).concat(b)); return b },
        bO = function(a, b) { for (var c = aO(a, b); null != a.l;) a = a.l, c = aO(a, b) || c; return c },
        aO = function(a, b) {
            a = a.H.get(b ? "GfpCookieV2Extension" : "GfpCookieV1Extension");
            return a instanceof
            VM ? a.l : null
        };
    mN.prototype.getVastMediaBitrate = function() { if (nN(this)) { var a = this.j.j; if (null != a) return a.minBitrate || 0 } return 0 };
    var cO = function(a) {
            var b = a.j;
            if (null == b) return {};
            var c = {};
            c.adId = a.getAdId();
            c.adPodInfo = BL(a.getAdPodInfo());
            c.adQueryId = a.C;
            c.adSystem = a.getAdSystem();
            c.adWrapperCreativeIds = a.getWrapperCreativeIds();
            c.adWrapperIds = a.getWrapperAdIds();
            c.adWrapperSystems = a.getWrapperAdSystems();
            c.advertiserName = a.getAdvertiserName();
            c.apiFramework = a.getApiFramework();
            c.attributionParams = b.Vb();
            c.clickThroughUrl = b.bb() || "";
            c.contentType = a.getContentType();
            c.creativeAdId = a.getCreativeAdId();
            c.creativeId = a.getCreativeId();
            c.dealId = a.getDealId();
            c.description = a.getDescription();
            c.disableUi = a.R;
            c.duration = a.getDuration();
            c.height = a.getHeight();
            c.linear = a.isLinear();
            c.mediaUrl = a.getMediaUrl();
            c.minSuggestedDuration = a.getMinSuggestedDuration();
            c.skippable = a.isSkippable();
            c.skipTimeOffset = a.getSkipTimeOffset();
            c.surveyUrl = a.getSurveyUrl();
            c.title = a.getTitle();
            c.traffickingParameters = a.getTraffickingParametersString();
            c.uiElements = a.getUiElements();
            c.universalAdIds = jN(a.getUniversalAdIds());
            c.universalAdIdRegistry = a.getUniversalAdIdRegistry();
            c.universalAdIdValue = a.getUniversalAdIdValue();
            c.vpaid = null != rN(a);
            c.width = a.getWidth();
            c.vastMediaBitrate = a.getVastMediaBitrate();
            c.vastMediaHeight = a.getVastMediaHeight();
            c.vastMediaWidth = a.getVastMediaWidth();
            return c
        },
        dO = function(a) { var b = a.j,
                c = null != b ? zM(b) : new sL;
            qN(a).forEach(function(d) { uL(c, "impression", d) });
            pN(a).forEach(function(d) { uL(c, "error", d) });
            uN(a).forEach(function(d) { d.forEach(function(e) { wL(c, e.j) }) }); return c.j },
        eO = function(a) {
            for (var b = []; null != a;) a.H.forEach(function(c) {
                b = [].concat(t(b),
                    t(c.D))
            }), a = a.l;
            return b
        };
    mN.prototype.isAutoplay = function() { return this.A ? "auto" === this.A.j : !1 };
    var fO = function(a, b) { LM.call(this, b);
        this.l = a };
    u(fO, LM);
    var gO = function(a, b) { this.j = a[v.Symbol.iterator]();
        this.l = b };
    gO.prototype[Symbol.iterator] = function() { return this };
    gO.prototype.next = function() { var a = this.j.next(); return { value: a.done ? void 0 : this.l.call(void 0, a.value), done: a.done } };
    var hO = function(a, b) { return new gO(a, b) };
    var lO = function(a) { if (a instanceof iO || a instanceof jO || a instanceof kO) return a; if ("function" == typeof a.next) return new iO(function() { return a }); if ("function" == typeof a[Symbol.iterator]) return new iO(function() { return a[Symbol.iterator]() }); if ("function" == typeof a.Bc) return new iO(function() { return a.Bc() }); throw Error("Not an iterator or iterable."); },
        iO = function(a) { this.j = a };
    iO.prototype.Bc = function() { return new jO(this.j()) };
    iO.prototype[Symbol.iterator] = function() { return new kO(this.j()) };
    iO.prototype.l = function() { return new kO(this.j()) };
    var jO = function(a) { this.j = a };
    u(jO, Rq);
    jO.prototype.next = function() { return this.j.next() };
    jO.prototype[Symbol.iterator] = function() { return new kO(this.j) };
    jO.prototype.l = function() { return new kO(this.j) };
    var kO = function(a) { iO.call(this, function() { return a });
        this.o = a };
    u(kO, iO);
    kO.prototype.next = function() { return this.o.next() };
    var mO = function(a, b) { this.l = {};
        this.j = [];
        this.o = this.size = 0; var c = arguments.length; if (1 < c) { if (c % 2) throw Error("Uneven number of arguments"); for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1]) } else if (a)
            if (a instanceof mO)
                for (c = a.Ff(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
            else
                for (d in a) this.set(d, a[d]) };
    mO.prototype.ie = function() { nO(this); for (var a = [], b = 0; b < this.j.length; b++) a.push(this.l[this.j[b]]); return a };
    mO.prototype.Ff = function() { nO(this); return this.j.concat() };
    mO.prototype.has = function(a) { return oO(this.l, a) };
    mO.prototype.Zb = function(a, b) { if (this === a) return !0; if (this.size != a.size) return !1;
        b = b || pO;
        nO(this); for (var c, d = 0; c = this.j[d]; d++)
            if (!b(this.get(c), a.get(c))) return !1;
        return !0 };
    var pO = function(a, b) { return a === b };
    mO.prototype.isEmpty = function() { return 0 == this.size };
    mO.prototype.clear = function() { this.l = {};
        this.o = this.size = this.j.length = 0 };
    mO.prototype.remove = function(a) { return this.delete(a) };
    mO.prototype.delete = function(a) { return oO(this.l, a) ? (delete this.l[a], --this.size, this.o++, this.j.length > 2 * this.size && nO(this), !0) : !1 };
    var nO = function(a) { if (a.size != a.j.length) { for (var b = 0, c = 0; b < a.j.length;) { var d = a.j[b];
                oO(a.l, d) && (a.j[c++] = d);
                b++ }
            a.j.length = c } if (a.size != a.j.length) { var e = {}; for (c = b = 0; b < a.j.length;) d = a.j[b], oO(e, d) || (a.j[c++] = d, e[d] = 1), b++;
            a.j.length = c } };
    l = mO.prototype;
    l.get = function(a, b) { return oO(this.l, a) ? this.l[a] : b };
    l.set = function(a, b) { oO(this.l, a) || (this.size += 1, this.j.push(a), this.o++);
        this.l[a] = b };
    l.forEach = function(a, b) { for (var c = this.Ff(), d = 0; d < c.length; d++) { var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this) } };
    l.clone = function() { return new mO(this) };
    l.keys = function() { return lO(this.Bc(!0)).l() };
    l.values = function() { return lO(this.Bc(!1)).l() };
    l.entries = function() { var a = this; return hO(this.keys(), function(b) { return [b, a.get(b)] }) };
    l.Bc = function(a) { nO(this); var b = 0,
            c = this.o,
            d = this,
            e = new Rq;
        e.next = function() { if (c != d.o) throw Error("The map has changed since the iterator was created"); if (b >= d.j.length) return Sq; var f = d.j[b++]; return { value: a ? f : d.l[f], done: !1 } }; return e };
    var oO = function(a, b) { return Object.prototype.hasOwnProperty.call(a, b) };
    var qO = null,
        rO = function() { H.call(this);
            this.l = new mO;
            this.j = null;
            this.o = new Map;
            this.A = new OB(this);
            G(this, this.A);
            this.L = "";
            this.D = new Map;
            this.G = this.B = this.K = null;
            this.J = -1;
            this.C = !1;
            uo().A = !0;
            bL() };
    u(rO, H);
    var sO = function() { null == qO && (qO = new rO); return qO },
        uO = function(a, b) { var c = a.C;
            bL() && tO(sO(), c, b); var d = [];
            (uN(a).get("activeview") || []).forEach(function(e) { d.push.apply(d, t(e.l)) });
            d.length && sO().o.set(c, d) },
        vO = function(a) { sO().D.delete(a.C);
            sO().o.delete(a.C) },
        tO = function(a, b, c) { a.D.set(b, c) },
        wO = function(a, b) { var c = {};
            c.queryId = a;
            c.viewabilityString = b;
            I(sO(), new dM("measurable_impression", null, c)) },
        xO = function(a, b) {
            var c = {};
            c.queryId = a;
            c.viewabilityString = b;
            I(sO(), new dM("viewable_impression", null,
                c))
        },
        yO = function(a, b, c) { var d = {};
            d.queryId = a;
            d.viewabilityString = b;
            d.eventName = c;
            I(sO(), new dM("externalActivityEvent", null, d)) },
        zO = function(a, b) { a.j && SB(a.A, a.j, "activityMonitor", a.F);
            a.j = b;
            S(a.A, a.j, "activityMonitor", a.F);
            OK(a.j, "activityMonitor", "getPageSignals") },
        AO = function(a) {
            var b = sO();
            if (b.j)
                if (b.G) a(b.G + "_ct" + (Xa() - b.J));
                else {
                    var c = b.l,
                        d = setTimeout(function() { a("timeout");
                            Array.from(c.keys()).forEach(function(f) { c.get(f) === a && c.delete(f) }) }, 200);
                    b.l.set(d, a);
                    var e = {};
                    b.B && (e.isFullscreen =
                        b.B.F);
                    e.osdId = b.L;
                    e.eventId = d;
                    pL().isLoggingEnabled() && (b.I = Xa(), e.loggingId = Math.random(), pL().report(43, { step: "sendingMessage", logid: e.loggingId, time: b.I }));
                    OK(b.j, "activityMonitor", "fetchAdTagUrl", e)
                }
            else a("")
        };
    rO.prototype.destroy = function() { SB(this.A, this.j, "activityMonitor", this.F);
        this.j = null };
    rO.prototype.F = function(a) {
        var b = a.Va;
        switch (a.ab) {
            case "appStateChanged":
                Fl(nu);
                b = b.appState;
                a = Mp();
                a.H != b && (a.H = b, (a = Fl(Fs).j) && Up(a.j, !b));
                break;
            case "externalActivityEvent":
                yO(b.queryId, b.viewabilityString, b.eventName);
                break;
            case "measurableImpression":
                wO(b.queryId, b.viewabilityString);
                break;
            case "pageSignals":
                this.K = b.pageSignals;
                break;
            case "viewableImpression":
                xO(b.queryId, b.viewabilityString);
                break;
            case "engagementData":
                b = b.engagementString;
                sO().G = b;
                sO().J = Xa();
                break;
            case "viewability":
                a = b.queryId;
                var c = b.vastEvent;
                this.o.get(a) && "start" == c && this.o.get(a);
                a = b.eventId;
                clearTimeout(a);
                if (c = this.l.get(a)) this.l.delete(a), c(b.viewabilityData);
                break;
            case "viewabilityMeasurement":
                a = Fl(nu);
                c = b.queryId;
                b = b.viewabilityData;
                if (uo().j) {
                    a.C = b.nativeVolume;
                    var d = b.exposure || 0,
                        e = b.unmeasurable;
                    a = a.B(c, {});
                    null != b.presenceData && (null === a.o && (a.o = new Tq), qf(a.o, b.presenceData)); - 1 == a.P && (a.P = pp(), a.ya = a.Da().j.j);
                    a.R += e ? 1 : 0;
                    a.ka++;
                    a.ca.update(d, d, !1, 1, !1);
                    a.gb = e || a.gb;
                    a = a.ia;
                    c = b.position;
                    a.j = new Wi(c.top,
                        c.right, c.bottom, c.left);
                    a.B = b.exposure || 0;
                    a.o = b.screenShare;
                    a = Mp();
                    c = b.insideIframe;
                    void 0 !== c && 0 == c && (a.o = !1);
                    b.documentSize && (a.A = new Hg(b.documentSize.width, b.documentSize.height));
                    b.viewportSize && (a.j = new Wi(0, b.viewportSize.width, b.viewportSize.height, 0))
                }
                break;
            case "engagement":
                a = b.eventId, clearTimeout(a), c = this.l.get(a), pL().isLoggingEnabled() && (d = -1, this.I && (d = Xa() - this.I), e = !1, c || (e = !0), gf(b, "loggingId") && pL().report(43, { step: "receivedResponse", time: Xa(), timeout: e, logid: b.loggingId, timediff: d })),
                    c && (this.l.delete(a), c(b.engagementString))
        }
    };
    Ka("ima.bridge.getNativeViewability", function(a, b) { sO();
        b({}) });
    Ka("ima.bridge.getVideoMetadata", function(a) { return (a = sO().D.get(a)) ? a() : {} });
    Ka("ima.bridge.triggerViewEvent", xO);
    Ka("ima.bridge.triggerMeasurableEvent", wO);
    Ka("ima.bridge.triggerExternalActivityEvent", yO);
    var CO = function(a) { C.call(this, a, -1, BO) };
    u(CO, C);
    var EO = function(a) { C.call(this, a, -1, DO) };
    u(EO, C);
    EO.prototype.getType = function() { return Ad(this, 1) };
    var FO = function(a, b) { return B(a, 1, b) };
    l = EO.prototype;
    l.getAdSystem = function() { return Ad(this, 3) };
    l.getAdId = function() { return Ad(this, 5) };
    l.getCreativeId = function() { return Ad(this, 6) };
    l.Le = function(a) { B(this, 6, a) };
    l.getCreativeAdId = function() { return Ad(this, 7) };
    l.Ke = function(a) { B(this, 7, a) };
    var GO = function(a, b) { Hd(a, 11, b) },
        HO = function(a) { C.call(this, a) };
    u(HO, C);
    HO.prototype.getUniversalAdIdValue = function() { return Ad(this, 7) };
    HO.prototype.getUniversalAdIdRegistry = function() { return Ad(this, 8) };
    var BO = [1],
        DO = [11],
        IO = [CO, 1, Te, [EO, 1, Ve, 2, Qe, 3, Qe, 4, Ve, 5, Qe, 6, Qe, 7, Qe, 8, Ue, 9, Qe, 10, Se, [HO, 1, Ue, 2, Ve, 3, Ve, 4, Me, 5, Pe, 6, Pe, 7, Qe, 8, Qe, 9, Ue, 10, Pe, 11, Qe, 12, Ve], 11, Re], 2, Pe, 3, Pe];
    var JO = new Map(Object.entries({ "application/dash+xml": 1, "application/x-javascript": 2, "application/x-mpegurl": 3, "application/javascript": 4, "audio/ogg": 5, "audio/mp4": 6, "audio/mpeg": 7, "audio/wav": 8, "text/javascript": 9, "video/m4v": 10, "video/ogg": 11, "video/x-flv": 12, "video/3gpp": 13, "video/mpt2": 14, "video/mp4": 15, "video/mpeg": 16, "video/quicktime": 17, "video/webm": 18 })),
        LO = function(a) {
            var b = FO(new EO, a.F ? 2 : 1),
                c = a.A;
            if (c && c.adTagUrl) {
                var d = null;
                try { d = (new K(c.adTagUrl)).l } catch (e) {}
                null != d && 0 < d.length ? d = d.slice(-40) :
                    d = null;
                B(b, 2, d)
            }
            c = a.getAdSystem();
            c = 0 == c.length ? null : c;
            B(b, 3, c);
            B(b, 4, KO(a.P));
            c = a.getAdId();
            c = 0 == c.length ? null : c;
            B(b, 5, c);
            c = a.getCreativeId();
            c = 0 == c.length ? null : c;
            b.Le(c);
            c = a.getCreativeAdId();
            c = 0 == c.length ? null : c;
            b.Ke(c);
            a = a.B;
            c = a.B;
            d = a.A;
            null != c && null != d && d >= c && B(b, 8, d - c);
            GO(b, a.o.map(function(e) { return e.vendor }));
            return b
        },
        KO = function(a) { return 1 <= a && 2 > a ? 1 : 2 <= a && 3 > a ? 2 : 3 <= a && 4 > a ? 3 : 4 <= a && 5 > a ? 4 : 0 },
        MO = function(a) { a = a.trim().toLowerCase();
            a = a.split(" ")[0]; return JO.get(a) || 0 };
    var NO = [202, 1009],
        OO = !1;

    function PO(a, b, c) { c = void 0 === c ? null : c; var d = a ? a.o : null; if (a) { var e = a.getAdPodInfo(); var f = new Xx;
            f.adPosition = e.getAdPosition();
            f.l = e.getMaxDuration();
            f.o = e.getPodIndex();
            f.j = e.getTimeOffset();
            f.totalAds = e.getTotalAds();
            e = f } else e = null; return new QO(d, e, b, a ? a.A : null, c) }

    function RO(a, b, c) { b = void 0 === b ? null : b; var d = new Map;
        a = PO(b, void 0 === c ? null : c, a);
        SO(d, a);
        Ky(a.error.getVastErrorCode(), d);
        TO(d);
        UO(d, a);
        VO(d);
        c = a.error.getErrorCode();
        Cy(d, "ERROR_MSG", a.error.getMessage());
        Cy(d, "IMA_ERROR", c.toString());
        Cy(d, "INTERNAL_ID", "0");
        a = NO.includes(c);
        Cy(d, "BLOCKING_ERROR", a ? "1" : "0");
        WO(d, b); return d }

    function XO() { var a = X().o; return (new K(a)).l || "" }

    function YO(a) { var b = new Map,
            c = PO(null, null);
        SO(b, c);
        c = b;
        c = void 0 === c ? new Map : c;
        Cy(c, "REASON", a); return b }

    function ZO(a, b) { var c = new Map;
        b = PO(a, void 0 === b ? null : b);
        SO(c, b);
        TO(c);
        UO(c, b);
        VO(c);
        WO(c, a); return c }

    function $O() { var a = eK(X().j); /^[\.\w_-]*$/.test(a) || OO || (pL().report(141, { tcstring: a }), OO = !0) }

    function TO(a) { Cy(a, "SDKV", FK()) }

    function SO(a, b) {
        var c = b.ad,
            d = b.Wb,
            e = b.Qa;
        b = b.display;
        var f = X().appName,
            g = ZK() ? "0" : AA() ? "2" : "1",
            h = null,
            k = null;
        c instanceof xz && 0 < c.Za.length && (k = c.Za[0], h = k.getAdIdValue(), k = k.getAdIdRegistry());
        var m = null,
            n = null;
        KK(X()) && (m = "Google1", n = "3.526.0");
        var r = XO(),
            q = aP(e),
            y = W.getPlayerType(),
            x = W.getPlayerVersion(),
            A = eK(X().j),
            L = X().Ub,
            F = cK(X().j);
        $O();
        Ey({
            ng: b,
            placementType: "1",
            Wb: d,
            ad: c,
            Qa: e,
            appName: f,
            clickType: g,
            lk: h,
            kk: k,
            mh: m,
            nh: n,
            bd: y,
            clientVersion: x,
            td: "IMA",
            ud: "3.526.0",
            domain: r,
            pageUrl: q,
            Df: A,
            Ub: L,
            Hh: F
        }, a)
    }

    function WO(a, b) {
        By(a, "CREATIVE_PLAYBACK", function() {
            if (b) {
                var c = new CO;
                for (var d = [], e = b; null != e;) d.push(LO(e)), e = e.l;
                e = d[0];
                var f = new HO,
                    g = b.j;
                if (g instanceof hN) { if (B(f, 5, !0), g = g.j, null != g) { var h = g.mimeType;
                        h = 0 == h.length ? null : MO(h);
                        B(f, 2, h);
                        h = g.minBitrate || 0;
                        B(f, 1, 0 >= h ? null : h);
                        g = dN(g.url) ? g.j : null;
                        B(f, 11, g) } } else g instanceof EM && (B(f, 5, !1), g = g.B, g = 0 == g.length ? null : MO(g), B(f, 2, g), B(f, 1, null));
                null != rN(b) && (2 == W.j ? B(f, 12, 1) : B(f, 12, 2));
                g = b.getDuration();
                B(f, 4, 0 > g ? null : g);
                g = b.getUniversalAdIdValue();
                B(f,
                    7, g);
                g = b.getUniversalAdIdRegistry();
                B(f, 8, g);
                h = b.B;
                g = h.l;
                h = h.j;
                null != g && null != h && h >= g && B(f, 9, h - g);
                B(f, 10, !1);
                Nd(e, 10, f);
                d.reverse();
                Od(c, 1, d);
                B(c, 3, cL());
                c = Je(c, IO);
                c = Qc(c, 3)
            } else c = "";
            return c
        })
    }

    function VO(a) { By(a, "URL_SIGNALS", function() { var b = sO().K;!b && window.Goog_AdSense_Lidar_getUrlSignalsArray && (b = window.Goog_AdSense_Lidar_getUrlSignalsArray()); return b ? b[0] : "" }) }

    function UO(a, b) { if (null != b.ad) { var c = b.ad.extensions.get(jz);
            Cy(a, "AQI", (c instanceof jz ? c.j : "") || "");
            By(a, "AD_V", function() { if (b.ad instanceof xz) { var d = rI(b.ad); if (null != d) return d } return "0" });
            Cy(a, "FINAL", "1") } }

    function aP(a) { a = (null == a ? void 0 : a.pageUrl) || null; return uA(a) ? a : X().o }
    var QO = function(a, b, c, d, e) { this.ad = a;
        this.Wb = b;
        this.Qa = void 0 === d ? null : d;
        this.display = c;
        this.error = void 0 === e ? null : e };

    function bP(a, b) { a = wN(a); var c = new Map;
        TO(c); var d = c;
        d = void 0 === d ? new Map : d;
        Cy(d, "DEBUG_MESSAGE", b);
        mL(a, c) };
    var cP = function(a, b) { var c = D(a);
            w(c) ? b = a : Iz(c) ? (a = c, c = FK(), a = Jz(a, "&sdkv=" + c), X().T && (a = Jz(a, "&ssss=gima")), "impression" != b && "click" != b && (a = Jz(a, "&vci=[CREATIVE_PLAYBACK]")), b = a) : b = c; return b },
        dP = function(a) { a = D(a); if (w(a)) return !1; try { Jg(a) } catch (b) { return !1 } return !0 };
    var eP = function(a, b, c) { this.l = a;
        this.j = b;
        this.o = c };
    eP.prototype.getContentType = function() { return null == this.j ? null : hJ[this.j] || "Other" };
    var fP = new Mk,
        gP = new Map(fP.j.A);
    gP.set("style", { va: 4 });
    fP.j = new Dk(fP.j.l, fP.j.j, fP.j.o, gP);
    var hP = new Map(fP.j.A);
    hP.set("class", { va: 1 });
    fP.j = new Dk(fP.j.l, fP.j.j, fP.j.o, hP);
    var iP = new Map(fP.j.A);
    iP.set("id", { va: 1 });
    fP.j = new Dk(fP.j.l, fP.j.j, fP.j.o, iP);
    fP.build();
    var jP = function(a, b, c, d) { EM.call(this, a, b, "Html", c, d) };
    u(jP, EM);
    jP.prototype.o = function(a) { return new zH({ height: this.getHeight(), width: this.getWidth(), Fa: this.l, attribution: a.j }, "html", a.l) };
    jP.prototype.O = function() { var a = kh("DIV"); var b = this.l;
        b = hg(b);
        vg(a, b); return FM(this, a) };
    var kP = function(a, b, c, d) { EM.call(this, a, b, "Static", c, d) };
    u(kP, EM);
    kP.prototype.getContent = function() { var a = EM.prototype.getContent.call(this);
        this.qd && (a = a.replace('src=""', 'src="' + hL(D(this.l)) + '"')); return a };
    kP.prototype.o = function(a) { var b = this.qd ? "" : hL(D(this.l)); return new zH({ height: this.getHeight(), width: this.getWidth(), Fa: b, attribution: a.j }, "image", a.l) };
    kP.prototype.O = function() { var a = this.o(new DM).xa(),
            b = kh("a", { target: "_blank", id: this.getAdId() });
        b.setAttribute("href", hL(D(this.bb())));
        Ez(this.Vc, b);
        b.appendChild(a); return b };
    var lP = function(a, b, c, d) { LM.call(this);
        this.o = a || "";
        this.A = b || "";
        this.B = c || "";
        this.l = d };
    u(lP, LM);
    var mP = function(a, b) { EM.call(this, a, b, "Static", "text", "") };
    u(mP, EM);
    mP.prototype.jb = function() { return new Hg(this.getWidth(), this.getHeight()) };
    mP.prototype.getHeight = function() { return 63 };
    mP.prototype.getWidth = function() { return null != this.A ? tj(this.A).width : 0 };
    var nP = function(a, b) { if (null != b) { var c = kh("a");
            c.setAttribute("href", hL(D(a.bb())));
            Ez(a.Vc, c);
            b.parentElement.replaceChild(c, b);
            c.appendChild(b) } };
    mP.prototype.O = function() { this.A = this.o(new DM).xa();
        this.A.id = this.getAdId();
        nP(this, dh("textImageContainer", this.A));
        nP(this, dh("overlayTextTitle", this.A)); return this.A };
    var oP = function(a, b) { var c = a.getAd();
        a = tN(c, "AdSense"); var d = tN(c, "TextAd"),
            e = d.o,
            f = "rtl";
        null != e && (f = sm.test.call(sm, e) ? "rtl" : "ltr");
        e = { title: e, text: d.A + " " + d.B, dir: f }; if (d = d.l) e.image = hL(d), c = c.D.find(function(g) { return g instanceof hN }), null != c && (e.duration = Zx(c.getDuration()));
        a.A && (e.Qc = a.A);
        e.attribution = a.l ? a.l : b; return e };
    mP.prototype.o = function(a) { return new zH(oP(this, a.j), "text", a.l) };

    function pP(a, b, c) { if (0 == c.length) return new EM(a, b, "", null, ""); var d = qP(c);
        c = d.l; var e = d.j;
        d = d.o;
        pL().report(95, { rt: c, ct: e }); switch (c) {
            case "Html":
                return new jP(a, b, e, d);
            case "Static":
                switch (hJ[e]) {
                    case "Image":
                        return new kP(a, b, e, d);
                    case "Text":
                        return new mP(a, b) } } return new EM(a, b, c, e, d) }

    function qP(a) { var b = a.find(function(f) { return "IFrame" == f.l }),
            c = a.find(function(f) { return "Html" == f.l }),
            d = a.find(function(f) { return "Static" == f.l && "Image" == hJ[f.j] }),
            e = a.find(function(f) { return "Static" == f.l && "Text" == hJ[f.j] }); return null != b ? b : null != c ? c : null != d ? d : null != e ? e : a[0] };

    function rP(a, b, c, d, e) { var f = qP(e),
            g = pP(a.id, a.size, [f]),
            h = function(m) { m.qd = !0;
                m.kf = a.apiFramework;
                m.Vc = b;
                m.ff = c;
                d && (m.zc = d);
                m.ce = !!a.Sa };
        h(g);
        e.splice(e.indexOf(f), 1); var k = [];
        e.forEach(function(m) { m = pP(a.id, a.size, [m]);
            h(m);
            k.push(new HM(m, [], a.adSlotId)) }); return new HM(g, k, a.adSlotId) };
    var sP = function(a) { LM.call(this);
        this.l = a };
    u(sP, LM);
    var tP = function(a) { LM.call(this);
        this.l = a };
    u(tP, LM);
    var uP = function(a) { LM.call(this);
        this.l = a };
    u(uP, LM);
    uP.prototype.getDealId = function() { return this.l };
    var wP = function(a, b) { var c = Array.prototype.slice.call(arguments),
                d = c.shift(); if ("undefined" == typeof d) throw Error("[goog.string.format] Template required"); return d.replace(/%([0\- \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(e, f, g, h, k, m, n, r) { if ("%" == m) return "%"; var q = c.shift(); if ("undefined" == typeof q) throw Error("[goog.string.format] Not enough arguments");
                arguments[0] = q; return vP[m].apply(null, arguments) }) },
        vP = {
            s: function(a, b, c) {
                return isNaN(c) || "" == c || a.length >= Number(c) ? a : a = -1 < b.indexOf("-", 0) ?
                    a + Qg(" ", Number(c) - a.length) : Qg(" ", Number(c) - a.length) + a
            },
            f: function(a, b, c, d, e) { d = a.toString();
                isNaN(e) || "" == e || (d = parseFloat(a).toFixed(e)); var f = 0 > Number(a) ? "-" : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
                0 <= Number(a) && (d = f + d); if (isNaN(c) || d.length >= Number(c)) return d;
                d = isNaN(e) ? Math.abs(Number(a)).toString() : Math.abs(Number(a)).toFixed(e);
                a = Number(c) - d.length - f.length; return d = 0 <= b.indexOf("-", 0) ? f + d + Qg(" ", a) : f + Qg(0 <= b.indexOf("0", 0) ? "0" : " ", a) + d },
            d: function(a, b, c, d, e, f, g, h) {
                return vP.f(parseInt(a,
                    10), b, c, d, 0, f, g, h)
            }
        };
    vP.i = vP.d;
    vP.u = vP.d;
    var xP = function(a) { this.o = a;
        this.l = !1 };
    u(xP, oJ);
    xP.prototype.j = function() { return new nJ(yP(this), null) };
    var yP = function(a) {
            try {
                return zP(a).j.map(function(b) {
                    var c = b.Ga,
                        d = null,
                        e = null,
                        f = !1,
                        g = null,
                        h = !1,
                        k = null,
                        m = null;
                    c instanceof sB ? (d = c.advertiser, e = c.adTitle, g = c.description, k = c.survey) : c instanceof mC && (f = c.La, h = c.de, m = c.adTag);
                    var n = AP(c.extensions),
                        r = null == n;
                    a: {
                        var q = c.adSystem;
                        if (w(D(q))) q = "UNKNOWN";
                        else switch (q = q.toUpperCase(), q) {
                            case "ADSENSE":
                            case "ADSENSE/ADX":
                            case "ADSENSE-VIRAL":
                            case "DART":
                            case "DART_DFP":
                            case "DART_DFA":
                            case "FREEWHEEL":
                            case "GDFP":
                            case "402":
                            case "YT:ADSENSE":
                            case "YT:DOUBLECLICK":
                            case "YT:FREEWHEEL":
                            case "VIRAL":
                            case "VIRAL-RESERVE":
                                break a;
                            default:
                                q =
                                    "UNKNOWN"
                        }
                    }
                    b = new mN(b.id || "", c.adSystem, q, d, e, g, k, BP(c.extensions), b.sequence || 0, CP(c.j, "error"), CP(c.impressionUrls, "impression"), DP(c.creatives, n), EP(c.creatives), FP(c.extensions, r), b, m, f, h, GP(c.Oa), !n, a.l);
                    c = Az(a.o) || 0;
                    b.P = c;
                    bP(b, "vl");
                    return b
                })
            } catch (b) { throw $L(IJ, b); }
        },
        AP = function(a) {
            if (!X().l && ZK() || !Ex.isSelected() && !Fx.isSelected()) return null;
            var b = a.find(function(e) { return e instanceof zB }),
                c = a.find(function(e) { return e instanceof NA });
            if (!(b instanceof zB) || c) return null;
            c = a.find(function(e) {
                return e instanceof
                RA
            });
            a = a.find(function(e) { return e instanceof mA });
            var d = {};
            return d.channelCustomUrl = b.Wd, d.channelId = b.channelId, d.channelThumbnailUrl = b.Yc, d.channelTitle = b.channelTitle, d.cpn = c instanceof RA ? c.cpn : null, d.format = b.format, d.isSkippable = "BUMPER" != b.format && "NONSKIPPABLE" != b.format, d.isTrueView = b.Gb, d.isVideoUnlisted = b.rd, d.title = b.videoTitle, d.videoThumbnailUrl = b.Hd, d.wtaUrl = a instanceof mA ? a.Ld : null, d.youtubeVideoId = b.videoId, d.engagedViewUrls = [], d.infoCards = [], d
        },
        CP = function(a, b) {
            var c = [];
            a.forEach(function(d) {
                dP(d) &&
                    c.push(cP(d, b))
            });
            return c
        },
        EP = function(a) { var b = [];
            a.forEach(function(c) { null != c.Cc && (c = HP(c.Cc, c.sequence || 0), b.push(c)) }); return b },
        HP = function(a, b) { var c = [];
            a.j.forEach(function(d) {
                (d = IP(d, b)) && c.push(d) }); return new KM(c, JP(a.required)) },
        IP = function(a, b) {
            var c = { apiFramework: a.apiFramework, size: KP(a.width, a.height), id: a.id, adSlotId: a.adSlotId, Sa: a.Sa },
                d = a.companionClickThrough || null,
                e = LP(a.resources);
            if (0 == e.length) return null;
            var f = MP(a.trackingEvents);
            a.Zd.forEach(function(g) { uL(f, "click", g.url) });
            return rP(c, d, b, f, e)
        },
        JP = function(a) { a = null != a ? a.toLowerCase() : ""; return "all" == a ? "all" : "any" == a ? "any" : "none" },
        DP = function(a, b) { var c = [];
            a.forEach(function(d) { null != d.ub ? c.push(NP(d, b)) : null != d.Ic && (c = c.concat(OP(d))) }); return c },
        NP = function(a, b) {
            var c = a.ub,
                d = c.Fb;
            b && (d = wP("https://imasdk.googleapis.com/js/simid/simid_trueview_%s.html", W.getLocale()), d = [new Tz(new Mz(d, "Url"), { mimeType: "text/html", apiFramework: "SIMID", Oc: !1 })]);
            d = new hN(c.duration ? c.duration / 1E3 : 0, PP(c.videoClicks), QP(c.mediaFiles),
                d, RP(c.Ya), SP(c.icons));
            var e = MP(c.trackingEvents);
            TP(c.videoClicks).forEach(function(f) { uL(e, "click", f) });
            c.videoClicks && c.videoClicks.customClicks.forEach(function(f) { b && Fx.isSelected() && "engagedView" == f.id ? b.engagedViewUrls.push(f.url) : uL(e, f.id ? f.id : "", f.url) });
            b ? xM(d, JSON.stringify(b)) : d.F = c.adParameters || "";
            d.ff = a.sequence || 0;
            d.Le(a.id);
            d.Ke(a.adId);
            e && (d.zc = e);
            yM(d, UP(a.Za));
            return d
        },
        OP = function(a) {
            var b = a.Ic,
                c = MP(b.trackingEvents);
            b = b.nonLinears.map(function(e) { return VP(e, c) });
            if (0 == b.length &&
                !c.isEmpty()) { var d = new EM(null, new Hg(-1, -1), "", null, "");
                c && (d.zc = c);
                b.push(d) }
            b.forEach(function(e) { e.ff = a.sequence || 0;
                e.Le(a.id);
                e.Ke(a.adId); var f = UP(a.Za);
                e.hg = f });
            return b
        },
        VP = function(a, b) { var c = -1;
            null != a.minSuggestedDuration && (c = a.minSuggestedDuration / 1E3); var d = pP(a.id, KP(a.width, a.height), LP(a.resources));
            d.F = a.adParameters || "";
            d.kf = a.apiFramework;
            d.Vc = a.nonLinearClickThrough; var e = new sL;
            a.Be.forEach(function(f) { uL(e, "click", f.url) });
            wL(e, b);
            e && (d.zc = e);
            d.Y = c; return d },
        LP = function(a, b) {
            b =
                void 0 === b ? !1 : b;
            var c = [];
            a.forEach(function(d) { var e = d.creativeType ? d.creativeType.toLowerCase() : null;
                a: { var f = d.resourceType; switch (f) {
                        case "Static":
                        case "IFrame":
                        case "Html":
                            break a;
                        default:
                            f = null } }
                null == f || b && "Static" !== f || "text/javascript" == e || c.push(new eP(f, e, d.uc)) });
            return c
        },
        SP = function(a) {
            var b = [];
            a.forEach(function(c) {
                var d = LP(c.resources, !0);
                if (0 < d.length) {
                    d = qP(d);
                    var e = new qz;
                    e.program = c.program || "";
                    e.apiFramework = c.apiFramework;
                    e.altText = c.altText;
                    e.widthPx = null != c.width ? c.width : NaN;
                    e.heightPx = null != c.height ? c.height : NaN;
                    e.C = c.wd ? c.wd : 1;
                    e.xPosition = c.xPosition ? c.xPosition.toLowerCase() : "left";
                    e.yPosition = c.yPosition ? c.yPosition.toLowerCase() : "top";
                    e.offsetMs = null != c.offsetMs ? c.offsetMs : 0;
                    e.durationMs = null != c.durationMs ? c.durationMs : -1;
                    var f = PP(c.iconClicks),
                        g;
                    e.clickthroughUrl = null != (g = null == f ? void 0 : f.url) ? g : null;
                    e.l = Dz(f);
                    e.A = TP(c.iconClicks);
                    e.o = WP(c.iconClicks);
                    e.B = c.md;
                    e.j = d.o;
                    e.D = d.j;
                    b.push(e)
                }
            });
            return b
        },
        QP = function(a) {
            var b = [];
            a.forEach(function(c) {
                c = new eN(c.delivery ?
                    c.delivery.toLowerCase() : null, c.mimeType ? c.mimeType.toLowerCase() : null, c.codec ? c.codec.toLowerCase() : null, c.minBitrate || 0, c.minBitrate || 0, c.maxBitrate || 0, null != c.width ? c.width : NaN, null != c.height ? c.height : NaN, c.url, c.apiFramework);
                b.push(c)
            });
            return b
        },
        PP = function(a) { var b; return null != (b = null == a ? void 0 : a.clickThrough) ? b : null },
        TP = function(a) { var b = []; return null == a ? b : a.clickTracking.map(function(c) { return c.url }) },
        WP = function(a) {
            return (null == a ? [] : a.Xd).map(function(b) {
                var c = new pz;
                c.widthPx = b.width ||
                    0;
                c.heightPx = b.height || 0;
                c.j = b.Fa ? b.Fa.uc : "";
                c.altText = b.altText;
                return c
            })
        },
        MP = function(a) { var b = new sL;
            a.forEach(function(c) { var d = cP(c.url, c.eventType); if (dP(d)) { var e = RP(c.offsetMs);
                    null == e && null != c.qc && (e = new qL(c.qc, !0));
                    uL(b, c.eventType, d, e) } }); return b },
        FP = function(a, b) { var c = new Map;
            a.forEach(function(d) { var e = XP(d);
                d = e.type;
                e = e.extension; if (null != d && null != e && (b || "InfoCards" != d)) { var f = c.get(d);
                    null == f ? c.set(d, e) : "generic" == d && MM(f, e.j) } }); return c },
        XP = function(a) {
            var b = null,
                c = null;
            if (a instanceof jA) b = "activeview", c = new fO(a.j, MP(a.trackingEvents));
            else if (a instanceof EI) b = "wrapper_info", c = new OM(a.duration / 1E3);
            else if (a instanceof vB) b = "adVerifications", a = GP(a.Oa), 0 != a.length && (c = new PM(a));
            else if (a instanceof BD) b = "adx", c = new RM(a.l, RP(a.j));
            else if (a instanceof mA) b = "AdSense", c = MP(a.trackingEvents), c = new QM(a.Ra, a.zb, a.ae, a.Qc, a.Ld, YP(a.Se), a.Mc, c, a.Ae);
            else if (a instanceof CD) b = "DFP", c = new SM("Generic" == a.j, MP(a.trackingEvents));
            else if (a instanceof PA) b = a.j ? "GfpCookieV2Extension" :
                "GfpCookieV1Extension", c = new VM(Uj(Tj(Sj((new Rj).setValue(a.value), a.expires), a.path), a.domain));
            else if (a instanceof RA) b = "GoogleHostedMediaExtension", c = new sP(a);
            else if (a instanceof rB) try { var d = Xd(Ng(a.attributionData));
                    c = new tP(d);
                    b = "GpidWtaExtension" } catch (f) {} else if (a instanceof FI) b = "inred_info", c = new YM(a.j, a.l, a.o);
                else if (a instanceof tB) b = "metrics", c = new ZM(a.l, a.j);
            else if (a instanceof GI) b = "pod", c = new bN(a.sequence);
            else if (a instanceof wB) b = "programmatic", c = new uP(a.dealId);
            else if (a instanceof xB) b = "sodar", c = new $M(a.o, a.l, a.A, a.j, "");
            else if (a instanceof HI) b = "TextAd", c = new lP(a.ne, a.oe, a.pe, a.imageUrl, a.imageWidth, a.imageHeight);
            else if (a instanceof yB) b = "uiSettings", c = new aN(a.j);
            else if (a instanceof II) b = "waterfall", c = new cN(a.j);
            else if (a instanceof iA) b = "generic", c = new LM(MP(a.trackingEvents));
            else if (a instanceof NA) { b = "InfoCards"; var e = [];
                a.cards.forEach(function(f) { return e.push.apply(e, t(f.trackingEvents)) });
                c = new WM(a.cards, MP(e)) } else a instanceof OA && (b = "esp", c = new TM(a.j));
            return { type: b, extension: c }
        },
        UP = function(a) { return a.map(function(b) { return new wz(b.od, b.nd) }) },
        GP = function(a) { var b = [];
            a.forEach(function(c) { if (null != c.Lc) { var d = MP(c.trackingEvents).getEvents("verificationNotExecuted");
                    b.push(new kz(c.Lc, { Lb: c.Lb || void 0, trackingEvents: d, vendor: c.vendor || void 0, parameters: c.parameters || void 0 })) } }); return b },
        YP = function(a) { var b = new DM; if (null == a) return b;
            null != a.Ra && (b.j = a.Ra);
            b.o = a.zb;
            b.A = a.Qd;
            b.l = a.Pe; return b },
        BP = function(a) {
            var b = "";
            a.forEach(function(c) {
                c instanceof
                wB && (b = c.dealId || "")
            });
            return b
        },
        KP = function(a, b) { return new Hg(null != a ? a : NaN, null != b ? b : NaN) },
        RP = function(a) { return null == a ? null : new qL(a / 1E3, !1) },
        zP = function(a) {
            var b = new gD;
            pD(b, new RD);
            pD(b, new KI);
            pD(b, new SD);
            pD(b, new MI);
            pD(b, new QI);
            pD(b, new bE);
            pD(b, new YD);
            pD(b, new dE);
            pD(b, new WD);
            pD(b, new ZD);
            pD(b, new XD);
            pD(b, new JI);
            pD(b, new UD);
            pD(b, new LI);
            pD(b, new SI);
            pD(b, new $D);
            pD(b, new TI);
            pD(b, new aE);
            pD(b, new UI);
            pD(b, new cE);
            pD(b, new VI);
            pD(b, new VD);
            var c = a.o;
            if (!c) throw Error("VAST string is empty.");
            if (!zz(c)) throw Error("Response string is not a valid VAST document.");
            a = [];
            c = p(xh(c));
            for (var d = c.next(); !d.done; d = c.next()) {
                var e = d.value;
                if ("Ad" == e.nodeName) {
                    var f = void 0,
                        g = b;
                    d = {};
                    d.id = e.getAttribute("id");
                    d.sequence = nC(e, "sequence");
                    d.adType = e.getAttribute("adType");
                    e = p(xh(e));
                    for (var h = e.next(); !h.done; h = e.next()) {
                        var k = h.value;
                        if ("InLine" == k.nodeName) {
                            var m = h = e = f = void 0,
                                n = void 0,
                                r = void 0,
                                q = void 0,
                                y = [],
                                x = [],
                                A = [],
                                L = [];
                            k = p(xh(k));
                            for (var F = k.next(); !F.done; F = k.next()) switch (F = F.value, F.nodeName) {
                                case "AdServingId":
                                    q =
                                        U(F);
                                    break;
                                case "AdSystem":
                                    r = U(F);
                                    break;
                                case "AdTitle":
                                    n = U(F);
                                    break;
                                case "AdVerifications":
                                    L = L.concat(tC(F));
                                    break;
                                case "Advertiser":
                                    m = U(F);
                                    break;
                                case "Creatives":
                                    F = p(xh(F));
                                    for (var na = F.next(); !na.done; na = F.next()) na = na.value, "Creative" == na.nodeName && A.push(vD(na));
                                    break;
                                case "Description":
                                    h = U(F);
                                    break;
                                case "Error":
                                    null != U(F) && y.push(U(F));
                                    break;
                                case "Extensions":
                                    f = qD(g, xh(F));
                                    break;
                                case "Impression":
                                    F = U(F);
                                    null != F && x.push(F);
                                    break;
                                case "Survey":
                                    e = U(F)
                            }
                            f = new sB({
                                Xb: q,
                                adSystem: r,
                                adTitle: n,
                                advertiser: m,
                                description: h,
                                survey: e,
                                errors: y,
                                impressions: x,
                                creatives: A,
                                Oa: L,
                                extensions: f
                            });
                            break
                        } else if ("Wrapper" == k.nodeName) {
                            e = h = f = void 0;
                            m = g;
                            A = k;
                            n = [];
                            r = [];
                            q = [];
                            k = [];
                            g = "false" != A.getAttribute("followAdditionalWrappers");
                            y = "true" == A.getAttribute("allowMultipleAds");
                            x = "true" == A.getAttribute("fallbackOnNoAd");
                            A = p(xh(A));
                            for (L = A.next(); !L.done; L = A.next()) switch (L = L.value, L.nodeName) {
                                case "AdSystem":
                                    e = U(L);
                                    break;
                                case "VASTAdTagURI":
                                    h = (h = U(L)) ? h : void 0;
                                    break;
                                case "Creatives":
                                    L = p(xh(L));
                                    for (F = L.next(); !F.done; F = L.next()) F =
                                        F.value, "Creative" == F.nodeName && q.push(vD(F));
                                    break;
                                case "Error":
                                    L = U(L);
                                    null != L && n.push(L);
                                    break;
                                case "AdVerifications":
                                    k = k.concat(tC(L));
                                    break;
                                case "Extensions":
                                    f = qD(m, xh(L));
                                    break;
                                case "Impression":
                                    L = U(L), null != L && r.push(L)
                            }
                            f = new mC({ adSystem: e, de: g, La: y, Af: x, adTag: h, errors: n, impressions: r, creatives: q, Oa: k, extensions: f });
                            break
                        }
                    }
                    if (!f) throw Error("Vast Ad contains neither inline nor wrapper data.");
                    a.push(new fA(f, d))
                }
            }
            return new lC(a)
        };
    var ZP = function(a, b) { this.A = a;
        this.o = b;
        this.l = null;
        pL().report(115, { vmap: !0 }) };
    u(ZP, oJ);
    ZP.prototype.j = function() { this.l || (this.l = new nJ(null, $P(this))); return this.l };
    var $P = function(a) { var b = new UL,
                c = new bJ;
            cJ(c); try { var d = eJ(c, a.A) } catch (e) { throw $L(AJ); }
            d.j.forEach(function(e) { var f = e.l; var g = f.Wc;
                f = f.Ue;
                g ? g = iy(a.o, g) : f ? (g = a.o.clone(), g.adTagUrl = null, g.adsResponse = f, g.A = !0) : g = null;
                null != g && (g = aQ(e, g), b.add(e.j, [g])) }); if (0 == WL(b).length) throw $L(AJ); return b },
        aQ = function(a, b) {
            b = new xL(b);
            var c = new sL;
            a.extensions.find(function(d) { return d instanceof $I }) && (b.j = !0);
            a.trackingEvents.forEach(function(d) {
                var e = d.eventType,
                    f = cP(d.url, e);
                f && dP(f) && null != e && uL(c, d.eventType,
                    f)
            });
            b.trackingEvents = c;
            return b
        };

    function bQ(a, b) { if (null != a) { if (a && "Playlist" == a.nodeName) return new bM(a, b); if (dJ(a)) return new ZP(a, b); if (zz(a)) return new xP(a) } return null };

    function cQ(a) { return a ? uy(a) ? "adsense" : yy(a) ? "dbm" : vy(a) ? "dcm" : zy(a) ? "dv3" : wy(a) ? "xfp" : "thirdparty" : "" }

    function dQ(a) { if (!a) return null;
        a = (new K(a)).j; return null != a.get("ms") ? D(a.get("ms")) : null };
    var eQ = function() { E.call(this);
        this.j = new Set };
    u(eQ, E);
    var fQ = function(a, b) { var c = Qi(function() { a.j.delete(c);
            b.call(a) });
        a.j.add(c) };
    eQ.prototype.N = function() { this.j.forEach(function(a) { return Ri(a) });
        this.j.clear() };
    var gQ = function(a, b) { Ih.call(this, a);
        this.l = b };
    u(gQ, Ih);
    gQ.prototype.getError = function() { return this.l };
    var hQ = function(a) { Ih.call(this, a) };
    u(hQ, Ih);
    var iQ = function(a, b, c) { b = void 0 === b ? null : b;
        c = void 0 === c ? null : c;
        Ih.call(this, a);
        this.o = b;
        this.l = c };
    u(iQ, Ih);
    iQ.prototype.getError = function() { return this.o };
    /*


     Copyright Mathias Bynens <http://mathiasbynens.be/>

     Permission is hereby granted, free of charge, to any person obtaining
     a copy of this software and associated documentation files (the
     "Software"), to deal in the Software without restriction, including
     without limitation the rights to use, copy, modify, merge, publish,
     distribute, sublicense, and/or sell copies of the Software, and to
     permit persons to whom the Software is furnished to do so, subject to
     the following conditions:

     The above copyright notice and this permission notice shall be
     included in all copies or substantial portions of the Software.

     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
     EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
     MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
     NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
     LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
     OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
     WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    */
    var jQ = function(a, b) { return 0 == a.indexOf(b) ? a.substr(b.length) : null };

    function kQ(a, b) { return b instanceof RegExp ? "__REGEXP" + b.toString() : b }

    function lQ(a, b) { return b && 0 == b.toString().indexOf("__REGEXP") ? (a = b.split("__REGEXP")[1].match(/\/(.*)\/(.*)?/), new RegExp(a[1], a[2] || "")) : b }
    var mQ = function(a, b) { NK.call(this, b);
        this.G = a;
        this.j = null;
        this.F = new OB(this);
        this.B = !1;
        S(this.F, ih(), "message", this.I) };
    u(mQ, NK);
    var nQ = function(a) { if (null == a || "string" !== typeof a || !fb(a, "ima://")) return null;
        a = a.substr(6); try { return JSON.parse(a, lQ) } catch (b) { return null } };
    mQ.prototype.sendMessage = function(a, b, c) { null != this.j && null != this.j.postMessage && this.j.postMessage(oQ(this, a, b, c), "*");
        null != this.j && null == this.j.postMessage && pL().report(11) };
    mQ.prototype.N = function() { Gh(this.F);
        this.j = null;
        NK.prototype.N.call(this) };
    mQ.prototype.l = function(a) { this.j = a };
    mQ.prototype.I = function(a) { a = a.Pa; var b = nQ(a.data); if (pQ(this, b) && (!this.B || "gpt" != b.name)) { if (null == this.j) this.j = a.source, this.A || this.connect();
            else if (this.j != a.source) return;
            qQ(this, b, a.origin) } };
    var qQ = function(a, b, c) { pQ(a, b) && I(a, new yL(b.name, b.type, b.data || {}, b.sid, c)) },
        oQ = function(a, b, c, d) { var e = {};
            e.name = b;
            e.type = c;
            null != d && (e.data = d);
            e.sid = a.sessionId;
            e.channel = a.G; return "ima://" + Iv(new Gv(kQ), e) },
        pQ = function(a, b) { if (null == b) return !1; var c = b.channel; if (null == c || c != a.G) return !1;
            b = b.sid; return null == b || "*" != a.sessionId && b != a.sessionId ? !1 : !0 };
    var rQ = function(a, b, c) { mQ.call(this, b, c);
        this.D = a;
        this.C = null };
    u(rQ, mQ);
    rQ.prototype.l = function(a) { this.D = null != a ? [a] : [] };
    rQ.prototype.sendMessage = function(a, b, c) { var d = oQ(this, a, b, c);
        this.D.forEach(function(e) { e.postMessage(d, "*") }) };
    rQ.prototype.I = function(a) { a = a.Pa; var b = nQ(a.data);
        null != b && this.D.includes(a.source) && (this.C = a.source, qQ(this, b, a.origin)) };
    var sQ = function() { var a = {};
        this.j = function() { var b = Av.flag,
                c = Av.defaultValue; return null != a[b] ? a[b] : c };
        this.l = function() { var b = Bv.flag,
                c = Bv.defaultValue; return null != a[b] ? a[b] : c } };
    var tQ = function() { H.call(this);
        this.C = !1;
        this.R = void 0;
        this.I = !1;
        this.P = void 0;
        this.D = !1;
        this.G = void 0;
        this.F = !1;
        this.l = this.A = null;
        this.B = new OB(this);
        this.o = null;
        this.j = { cslots: 0, dispcorr: 0, streamcorr: 0 } };
    u(tQ, H);
    var uQ = function(a, b) { null != a.l && SB(a.B, a.l, "gpt", a.J);
        a.l = b;
        S(a.B, a.l, "gpt", a.J) };
    tQ.prototype.N = function() { Gh(this.A);
        Gh(this.o);
        Gh(this.B);
        H.prototype.N.call(this) };
    tQ.prototype.isInitialized = function() { return this.C };
    var vQ = function(a) { if (a.I && null != a.R) return a.R.map(function(b) { return b.clone() }) },
        wQ = function(a) { a = vQ(a); if (null != a) return a.map(function(b) { return b.getSizes() }) };
    tQ.prototype.getDisplayAdsCorrelator = function() { if (this.D) return this.P };
    tQ.prototype.J = function(a) {
        var b = a.Va.returnValue,
            c = Number(b);
        switch (a.ab) {
            case "isGptPresent":
                null != b && b ? (this.j.isgptpresent = "1", this.l.l(this.l.C), null == this.o && (this.o = new Oi(100), S(this.B, this.o, "tick", this.K), this.o.start()), this.K()) : (this.j.isgptpresent = "0", this.L());
                break;
            case "getDisplayAdsCorrelator":
                isNaN(c) || (this.j.dispcorr = "1", this.P = c, this.D = !0);
                xQ(this);
                break;
            case "getVideoStreamCorrelator":
                isNaN(c) || (this.j.streamcorr = "1", this.G = c, this.F = !0);
                xQ(this);
                break;
            case "googleGetCompanionAdSlots":
                null !=
                    b && (a = b.map(this.V, this), this.j.cslots = "1", this.R = a, this.I = !0), xQ(this)
        }
    };
    var yQ = function(a, b, c, d) { null != a.l && (b = { scope: b }, null != d && (b.args = d), OK(a.l, "gpt", c, b)) },
        zQ = function(a, b) { var c = 0,
                d = 0;
            null != b && (d = new K(b.adTagUrl), c = Number(Fm(d, "pod") || 0), d = Number(Fm(d, "ppos") || 0));
            b = X().H;
            yQ(a, "companionAds", "setVideoSession", [b, c, d]) },
        AQ = function(a) { var b = X().H;
            a.G = b;
            yQ(a, "pubads", "setImaContent", ["", ""]);
            zQ(a, null) },
        BQ = function(a) { a.A && (a.A.stop(), SB(a.B, a.A, "tick", a.L), a.A.W(), a.A = null);
            null != a.o && (a.o.stop(), SB(a.B, a.o, "tick", a.K), a.o.W(), a.o = null) };
    tQ.prototype.L = function() { this.C || (this.C = !0, BQ(this), CQ(this), I(this, new iQ("companion_initialization_failed", Error("GPT companion ads service not available."))), null != this.l && SB(this.B, this.l, "gpt", this.J)) };
    tQ.prototype.K = function() { this.D || yQ(this, "companionAds", "getDisplayAdsCorrelator", [FK()]);
        this.F || yQ(this, "companionAds", "getVideoStreamCorrelator");
        this.I || yQ(this, null, "googleGetCompanionAdSlots") };
    var xQ = function(a) { a.I && a.D && a.F ? (a.C = !0, BQ(a), CQ(a), I(a, new iQ("companions_success"))) : a.A || (a.A = new Oi(5E3), QB(a.B, a.A, "tick", a.L), a.A.start()) };
    tQ.prototype.V = function(a) { var b = a.adSizes.map(function(c) { return { size: new Hg(c.adWidth, c.adHeight), Sa: !!c.fluidSize } }); return new eM(a.slotId, b) };
    tQ.prototype.T = function(a) { var b = {};
        b.slotId = a.getSlotId();
        b.adContent = a.getContent();
        b.adWidth = a.o;
        b.adHeight = a.l;
        b.fluidSize = a.j;
        b.friendlyIframeRendering = a.D; return b };
    var CQ = function(a) {
        if (!a.j.loggingDone) {
            var b = a.j;
            if (Gp()) var c = window.location.href;
            else { var d = Yk();
                c = d.l; var e = d.j;
                d = d.o; var f = null; if (d) try { var g = Gm(d.url),
                        h = g.o,
                        k = jQ(h, "/v/");
                    k || (k = jQ(h, "/a/")); if (!k) throw Error("Can not extract standalone amp url."); var m = jQ("/" + k, "/s/"),
                        n = g.j.clone();
                    n.remove("amp_js_v");
                    n.remove("amp_lite"); var r = m ? Gm("https://" + m) : Gm("http://" + k);
                    vm(r, n);
                    f = r.toString() } catch (q) { f = null }
                c = f ? f : c && c.url ? c.url : e && e.url ? e.url : "" }
            b.loc = c;
            a.j.ref = window.document.referrer;
            a.j.gcasclass =
                "1";
            a.j.vpaidadapter = W.o;
            a.j.ifstate = X().P;
            pL().report(70, a.j);
            a.j = { loggingDone: !0 }
        }
    };
    var DQ = function() { H.call(this);
        this.l = [] };
    u(DQ, H);
    DQ.prototype.C = function() { return null };
    DQ.prototype.Og = function() { return !0 };
    var EQ = function() { return new mN("empty-ad", "GDFP", "GDFP", "", "", "", "", "", 0, [], [], [], [], new Map, new fA(new mC)) };
    DQ.prototype.F = function() { return null };
    DQ.prototype.I = function() {};
    var FQ = { LOADED: "loaded", Ig: "start", FIRST_QUARTILE: "firstQuartile", MIDPOINT: "midpoint", THIRD_QUARTILE: "thirdQuartile", COMPLETE: "complete", Gg: "pause", Hg: "resume", rg: "bufferStart", qg: "bufferFinish", SKIPPED: "skipped", Gm: "volumeChange", Ll: "playerStateChange", yk: "adUserInteraction" };

    function GQ(a, b) { return a && (a[b] || (a[b] = {})) }

    function HQ(a, b) { var c; if (c = void 0 === c ? "undefined" === typeof omidExports ? null : omidExports : c) a = a.split("."), a.slice(0, a.length - 1).reduce(GQ, c)[a[a.length - 1]] = b };

    function IQ(a) { for (var b = p(JQ.keys()), c = b.next(); !c.done; c = b.next()) { c = c.value; for (var d = p(JQ.get(c)), e = d.next(); !e.done; e = d.next())
                if (e.value.test(a)) return c } return 1 }
    var JQ = new Map([
        [2, [/^(https?:\/\/|\/\/)?[-a-zA-Z0-9.]+\.moatads\.com\/.*$/]],
        [3, [/^(https?:\/\/|\/\/)?[-a-zA-Z0-9.]+\.doubleverify\.com\/.*$/]],
        [4, [/^(https?:\/\/|\/\/)?[-a-zA-Z0-9.]+\.adsafeprotected\.com\/.*$/]],
        [5, [/^https?:\/\/(q|cdn)\.adrta\.com\/s\/.*\/(aa|aanf)\.js.*$/, /^https:\/\/cdn\.rta247\.com\/s\/.*\/(aa|aanf)\.js.*$/]],
        [6, []],
        [7, [/^(https?:\/\/|\/\/)?[-a-zA-Z0-9.]+\.voicefive\.com\/.*$/, /^(https?:\/\/|\/\/)?[-a-zA-Z0-9.]+\.measuread\.com\/.*$/, /^(https?:\/\/|\/\/)?[-a-zA-Z0-9.]+\.scorecardresearch\.com\/.*$/]],
        [8, [/^(https?:\/\/|\/\/)?s418\.mxcdn\.net\/bb-serve\/omid-meetrics.*\.js$/]],
        [9, [/^(https?:\/\/|\/\/)?pagead2\.googlesyndication\.com\/.*$/, /^(https?:\/\/|\/\/)?www\.googletagservices\.com\/.*$/]]
    ]);
    HQ("OmidSessionClient.verificationVendorIdForScriptUrl", IQ);
    HQ("OmidSessionClient.VerificationVendorId", { OTHER: 1, MOAT: 2, DOUBLEVERIFY: 3, INTEGRAL_AD_SCIENCE: 4, PIXELATE: 5, NIELSEN: 6, COMSCORE: 7, MEETRICS: 8, GOOGLE: 9 });
    var KQ = Object.values({ LIMITED: "limited", DOMAIN: "domain", FULL: "full" });

    function LQ(a, b) { var c = Object.keys(a); return 0 === c.length ? "limited" : c.some(function(d) { return KQ.includes(d) }) ? MQ(a, b) : NQ(a, b) }

    function MQ(a, b) { return OQ(a, "limited", b) ? "limited" : OQ(a, "domain", b) ? "domain" : OQ(a, "full", b) ? "full" : "limited" }

    function OQ(a, b, c) { return (a[b] || []).some(function(d) { return d.test(c) }) }

    function NQ(a, b) { b = IQ(b);
        Object.keys(a).includes("" + b) || (b = 1); return (a = a[b]) && KQ.includes(a) ? a : "limited" };
    var PQ = function(a, b, c, d) { this.isSkippable = a;
        this.skipOffset = b;
        this.j = c;
        this.position = d };
    PQ.prototype.toJSON = function() { return { isSkippable: this.isSkippable, skipOffset: this.skipOffset, isAutoPlay: this.j, position: this.position } };

    function QQ(a, b) { if (!b) throw Error("Value for " + a + " is undefined, null or blank."); if ("string" !== typeof b && !(b instanceof String)) throw Error("Value for " + a + " is not a string."); if ("" === b.trim()) throw Error("Value for " + a + " is empty string."); }

    function RQ(a, b) { if (null == b) throw Error("Value for " + a + " is undefined or null"); }

    function SQ(a, b) { if (null == b) throw Error(a + " must not be null or undefined."); if ("number" !== typeof b || isNaN(b)) throw Error("Value for " + a + " is not a number"); }

    function TQ(a, b) { SQ(a, b); if (0 > b || 1 < b) throw Error("Value for " + a + " is outside the range [0,1]"); };

    function UQ() { return /\d+\.\d+\.\d+(-.*)?/.test("1.3.35-google_20220624") }

    function VQ() { for (var a = ["1", "3", "35"], b = ["1", "0", "3"], c = 0; 3 > c; c++) { var d = parseInt(a[c], 10),
                e = parseInt(b[c], 10); if (d > e) break;
            else if (d < e) return !1 } return !0 };
    var WQ = function(a, b, c, d) { this.j = a;
            this.method = b;
            this.version = c;
            this.args = d },
        XQ = function(a) { return !!a && void 0 !== a.omid_message_guid && void 0 !== a.omid_message_method && void 0 !== a.omid_message_version && "string" === typeof a.omid_message_guid && "string" === typeof a.omid_message_method && "string" === typeof a.omid_message_version && (void 0 === a.omid_message_args || void 0 !== a.omid_message_args) },
        YQ = function(a) { return new WQ(a.omid_message_guid, a.omid_message_method, a.omid_message_version, a.omid_message_args) },
        ZQ = function(a) {
            var b = {};
            b = (b.omid_message_guid = a.j, b.omid_message_method = a.method, b.omid_message_version = a.version, b);
            void 0 !== a.args && (b.omid_message_args = a.args);
            return b
        };
    var $Q = function(a) { this.l = a };

    function aR() { return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) { var b = 16 * Math.random() | 0; return "y" === a ? (b & 3 | 8).toString(16) : b.toString(16) }) };

    function bR() { var a = Ea.apply(0, arguments);
        cR(function() { throw new(Function.prototype.bind.apply(Error, [null, "Could not complete the test successfully - "].concat(t(a)))); }, function() { return console.error.apply(console, t(a)) }) }

    function cR(a, b) { "undefined" !== typeof jasmine && jasmine ? a() : "undefined" !== typeof console && console && console.error && b() };
    var dR = function(a) { try { return a.frames ? !!a.frames.omid_v1_present : !1 } catch (b) { return !1 } };
    var eR = function(a) { this.l = a;
        this.handleExportedMessage = eR.prototype.o.bind(this) };
    u(eR, $Q);
    eR.prototype.sendMessage = function(a, b) { b = void 0 === b ? this.l : b; if (!b) throw Error("Message destination must be defined at construction time or when sending the message.");
        b.handleExportedMessage(ZQ(a), this) };
    eR.prototype.o = function(a, b) { XQ(a) && this.j && this.j(YQ(a), b) };
    var fR = function() { if ("undefined" !== typeof omidGlobal && omidGlobal) return omidGlobal; if ("undefined" !== typeof global && global) return global; if ("undefined" !== typeof window && window) return window; if ("undefined" !== typeof globalThis && globalThis) return globalThis; var a = Function("return this")(); if (a) return a; throw Error("Could not determine global object context."); }();

    function gR(a) { return null != a && "undefined" !== typeof a.top && null != a.top }

    function hR(a) { if (a === fR) return !1; try { if ("undefined" === typeof a.location.hostname) return !0 } catch (b) { return !0 } return !1 };
    var iR = function(a, b) { this.l = b = void 0 === b ? fR : b; var c = this;
        a.addEventListener("message", function(d) { if ("object" === typeof d.data) { var e = d.data;
                XQ(e) && d.source && c.j && c.j(YQ(e), d.source) } }) };
    u(iR, $Q);
    iR.prototype.sendMessage = function(a, b) { b = void 0 === b ? this.l : b; if (!b) throw Error("Message destination must be defined at construction time or when sending the message.");
        b.postMessage(ZQ(a), "*") };
    var jR = ["omid", "v1_SessionServiceCommunication"];

    function kR(a) { return jR.reduce(function(b, c) { return b && b[c] }, a) };
    var lR = function(a, b) { QQ("Partner.name", a);
        QQ("Partner.version", b);
        this.name = a;
        this.version = b };
    HQ("OmidSessionClient.Partner", lR);
    var mR = function(a, b, c, d) { d = void 0 === d ? "full" : d;
        QQ("VerificationScriptResource.resourceUrl", a);
        this.A = a;
        this.l = b;
        this.o = c;
        this.j = d };
    mR.prototype.toJSON = function() { return { accessMode: this.j, resourceUrl: this.A, vendorKey: this.l, verificationParameters: this.o } };
    HQ("OmidSessionClient.VerificationScriptResource", mR);
    var nR = function(a, b, c, d) { c = void 0 === c ? null : c;
            d = void 0 === d ? null : d;
            RQ("Context.partner", a);
            this.partner = a;
            this.A = b;
            this.contentUrl = c;
            this.o = d;
            this.l = !1;
            this.j = null },
        oR = function(a, b) { RQ("Context.serviceWindow", b);
            a.j = b };
    HQ("OmidSessionClient.Context", nR);
    var pR = { sessionError: "reportError" },
        qR = Object.keys(FQ).map(function(a) { return FQ[a] }),
        rR = ["impressionOccurred"],
        sR = function() { var a = void 0 === a ? fR : a;
            this.j = a.omidSessionInterface };
    sR.prototype.isSupported = function() { return null != this.j };
    sR.prototype.sendMessage = function(a, b, c) { "registerSessionObserver" == a && (c = [b]);
        pR[a] && (a = pR[a]);
        b = this.j;
        0 <= rR.indexOf(a) && (b = b.adEvents);
        0 <= qR.indexOf(a) && (b = b.mediaEvents);
        b = b[a]; if (!b) throw Error("Unrecognized method name: " + a + ".");
        b.apply(null, t(c)) };
    var vR = function(a, b, c) {
        RQ("AdSession.context", a);
        this.o = a;
        this.D = !1;
        var d = this.o.j || void 0;
        if (!b) { var e; "undefined" === typeof e && "undefined" !== typeof window && window && (e = window);
            e = gR(e) ? e : fR; var f = void 0 === f ? dR : f;
            b = [e, gR(e) ? e.top : fR];
            d && b.unshift(d);
            a: { d = p(b); for (var g = d.next(); !g.done; g = d.next()) { b: { b = e;g = g.value; var h = f; if (!hR(g)) try { var k = kR(g); if (k) { var m = new eR(k); break b } } catch (n) {}
                        m = h(g) ? new iR(b, g) : null } if (b = m) break a }
                b = null } }
        this.A = b;
        this.F = c || new sR;
        this.H = this.U = this.O = !1;
        this.l = this.j = null;
        this.C = !1;
        this.B = {};
        this.A && (this.A.j = this.kj.bind(this));
        this.la("setClientInfo", "1.3.35-google_20220624", this.o.partner.name, this.o.partner.version);
        tR(this, a.A);
        (a = a.contentUrl) && this.la("setContentUrl", a);
        uR(this)
    };
    vR.prototype.isSupported = function() { return !!this.A || this.F.isSupported() };
    var wR = function(a, b) { a.sendMessage("registerSessionObserver", b) };
    l = vR.prototype;
    l.start = function() { this.la("startSession", { customReferenceData: this.o.o, underEvaluation: this.o.l }) };
    l.error = function(a, b) { this.la("sessionError", a, b) };
    l.la = function(a) { this.sendMessage.apply(this, [a, null].concat(t(Ea.apply(1, arguments)))) };
    l.sendMessage = function(a, b) { var c = Ea.apply(2, arguments); if (this.A) { var d = aR();
            b && (this.B[d] = b);
            c = new WQ(d, "SessionService." + a, "1.3.35-google_20220624", UQ() && VQ() ? c : JSON.stringify(c));
            this.A.sendMessage(c) } else if (this.F.isSupported()) try { this.F.sendMessage(a, b, c) } catch (e) { bR("Failed to communicate with SessionInterface with error:"), bR(e) } };
    l.kj = function(a) { var b = a.method,
            c = a.j;
        a = a.args; if ("response" === b && this.B[c]) { var d = UQ() && VQ() ? a ? a : [] : a && "string" === typeof a ? JSON.parse(a) : [];
            this.B[c].apply(this, d) } "error" === b && window.console && bR(a) };
    var tR = function(a, b) { b && (b = b.map(function(c) { return c.toJSON() }), a.la("injectVerificationScriptResources", b)) },
        uR = function(a) { wR(a, function(b) { "sessionStart" === b.type && (a.H = !0, a.j = b.data.creativeType, a.l = b.data.impressionType); "sessionFinish" === b.type && (a.H = !1) }) };
    HQ("OmidSessionClient.AdSession", vR);
    var xR = function(a) { RQ("AdEvents.adSession", a); try { if (a.O) throw Error("AdEvents already registered.");
            a.O = !0;
            a.la("registerAdEvents");
            this.j = a } catch (b) { throw Error("AdSession already has an ad events instance registered"); } };
    xR.prototype.loaded = function(a) { a = void 0 === a ? null : a; var b = this.j; if ("definedByJavaScript" === b.j) throw Error("Creative type has not been redefined"); if ("definedByJavaScript" === b.l) throw Error("Impression type has not been redefined");
        b.C = !0;
        a ? this.j.la("loaded", a.toJSON()) : this.j.la("loaded") };
    HQ("OmidSessionClient.AdEvents", xR);
    var yR = function(a) { RQ("MediaEvents.adSession", a); try { if (a.U) throw Error("MediaEvents already registered.");
            a.U = !0;
            a.la("registerMediaEvents");
            this.j = a } catch (b) { throw Error("AdSession already has a media events instance registered"); } };
    yR.prototype.start = function(a, b) { SQ("MediaEvents.start.duration", a);
        TQ("MediaEvents.start.mediaPlayerVolume", b);
        this.j.la("start", a, b) };
    yR.prototype.pause = function() { this.j.la("pause") };
    yR.prototype.resume = function() { this.j.la("resume") };
    var zR = function(a, b) { RQ("MediaEvents.playerStateChange.playerState", b);
            a.j.la("playerStateChange", b) },
        AR = function(a, b) { RQ("MediaEvents.adUserInteraction.interactionType", b);
            a.j.la("adUserInteraction", b) };
    HQ("OmidSessionClient.MediaEvents", yR);
    var BR = function(a, b, c, d, e) { H.call(this);
        this.j = a;
        this.K = b;
        this.J = c;
        this.L = d;
        this.P = e;
        this.B = null;
        this.C = new OB(this);
        this.D = [];
        this.R = this.F = this.G = !1;
        this.A = this.l = this.I = this.o = null;
        S(this.C, this.K, WK, this.aa);
        S(this.C, this.K, ["adError", "streamError"], this.V) };
    u(BR, H);
    var HR = function(a, b) {
        var c = CR(a);
        0 == c.length ? DR(a, "noVerifications") : (b = new nR(b, c, X().o), a.L && (oR(b, a.L), c = 0 < Object.keys(a.P).length, b.l = !c, pL().report(159, { pcp: c })), a.o = new vR(b), a.o.isSupported() ? (a.I = new xR(a.o), a.l = new yR(a.o), wR(a.o, function(d) {
            if (!a.F && null == a.A) switch (d.type) {
                case "sessionStart":
                    bP(a.j, "ss");
                    d = d.data;
                    a.G = !0;
                    ER(a, null == d ? void 0 : d.creativeType);
                    FR(a, null == d ? void 0 : d.impressionType);
                    GR(a);
                    break;
                case "sessionFinish":
                    bP(a.j, "sf");
                    a.F = !0;
                    I(a, new Ih("omidAdSessionCompleted"));
                    break;
                case "sessionError":
                    bP(a.j, "se")
            }
        }), ER(a), FR(a), a.o.start()) : (a.o = null, DR(a, "notSupported")))
    };
    BR.prototype.aa = function(a) { if (!this.R && !this.F && null == this.A) { if ("firstQuartile" == a.type && !this.G)
                if (0 < wN(this.j).length) bP(this.j, "bf");
                else { DR(this, "sessionNotStarted"); return }
                "complete" != a.type || this.G || bP(this.j, "bc");
            this.D.push(a);
            GR(this) } };
    BR.prototype.V = function(a) { this.D.push(a);
        GR(this) };
    BR.prototype.T = function() { GR(this) };
    var IR = function(a) { a.R = !0;
            a.o.la("finishSession");
            Qi(function() { a.F || null != a.A || (0 < wN(a.j).length ? bP(a.j, "le") : DR(a, "sessionLingering")) }, 5E3) },
        GR = function(a) {
            if (a.G && !a.F && null == a.A)
                for (; 0 < a.D.length;) {
                    var b = a.D[0];
                    if ("start" == b.type && 0 > (null == a.B ? 0 : a.B.getVolume())) break;
                    a.D.shift();
                    var c = a;
                    if (b instanceof dM) {
                        var d = c;
                        switch (b.type) {
                            case "loaded":
                                bP(d.j, "oml");
                                b = d.I;
                                c = b.loaded;
                                var e = "preroll";
                                0 > d.j.getAdPodInfo().getPodIndex() ? e = "postroll" : 0 < d.j.getAdPodInfo().getPodIndex() && (e = "midroll");
                                d = new PQ(d.j.isSkippable(),
                                    d.j.getSkipTimeOffset(), d.j.isAutoplay(), e);
                                c.call(b, d);
                                break;
                            case "adCanPlay":
                                bP(d.j, "ml");
                                break;
                            case "impression":
                                bP(d.j, "i");
                                b = d.I;
                                if (!b.j.H) throw Error("Session not started.");
                                c = b.j;
                                if ("definedByJavaScript" === c.j) throw Error("Creative type has not been redefined");
                                if ("definedByJavaScript" === c.l) throw Error("Impression type has not been redefined");
                                c.D = !0;
                                b.j.la("impressionOccurred");
                                break;
                            case "start":
                                bP(d.j, "ps");
                                d.l.start(d.j.getDuration(), null == d.B ? 0 : d.B.getVolume());
                                break;
                            case "firstQuartile":
                                d.l.j.la("firstQuartile");
                                break;
                            case "midpoint":
                                d.l.j.la("midpoint");
                                break;
                            case "thirdQuartile":
                                d.l.j.la("thirdQuartile");
                                break;
                            case "complete":
                                d.l.j.la("complete");
                                IR(d);
                                break;
                            case "pause":
                                d.l.pause();
                                break;
                            case "resume":
                                d.l.resume();
                                break;
                            case "skip":
                                d.l.j.la("skipped");
                                IR(d);
                                break;
                            case "volumeChange":
                                b = b.getAdData();
                                c = d.l;
                                b = b.volume;
                                TQ("MediaEvents.volumeChange.mediaPlayerVolume", b);
                                c.j.la("volumeChange", b);
                                break;
                            case "click":
                            case "videoClicked":
                                AR(d.l, "click");
                                break;
                            case "fullscreen":
                                zR(d.l, "fullscreen");
                                break;
                            case "exitFullscreen":
                                zR(d.l,
                                    "normal");
                                break;
                            case "expand":
                                zR(d.l, "expanded");
                                break;
                            case "collapse":
                                zR(d.l, "collapsed");
                                break;
                            case "acceptInvitation":
                            case "acceptInvitationLinear":
                                AR(d.l, "invitationAccept")
                        }
                    } else b instanceof ZL && (b = b.getError(), bP(c.j, "e"), c.o.error("video", b.toString()), IR(c))
                }
        },
        DR = function(a, b) { a.A = b;
            I(a, new Ih("omidAdSessionAbandoned"));
            bP(a.j, "ab"); "notSupported" == a.A && JR(a, $N(a.j), "3", "notSupported") },
        ER = function(a, b) {
            b = void 0 === b ? null : b;
            if (a.o && (!b || "definedByJavaScript" === b)) {
                b = a.o;
                a = a.j.getContentType().startsWith("audio") ?
                    "audio" : "video";
                if ("definedByJavaScript" === a) throw Error("Creative type cannot be redefined with value definedByJavaScript");
                if (b.D) throw Error("Impression has already occurred");
                if (b.C) throw Error("Creative has already loaded");
                if (b.j && "definedByJavaScript" !== b.j) throw Error("Creative type cannot be redefined");
                if (void 0 === b.j) throw Error("Native integration is using OMID 1.2 or earlier");
                b.la("setCreativeType", a);
                b.j = a
            }
        },
        FR = function(a, b) {
            b = void 0 === b ? null : b;
            if (a.o && (!b || "definedByJavaScript" ===
                    b)) { a = a.o; if (a.D) throw Error("Impression has already occurred"); if (a.C) throw Error("Creative has already loaded"); if (a.l && "definedByJavaScript" !== a.l) throw Error("Impression type cannot be redefined"); if (void 0 === a.l) throw Error("Native integration is using OMID 1.2 or earlier");
                a.la("setImpressionType", "beginToRender");
                a.l = "beginToRender" }
        };
    BR.prototype.getAd = function() { return this.j };
    var CR = function(a) { for (var b = [], c = a.j; null != c;) { var d = ZN(c),
                    e = [];
                d = p(d); for (var f = d.next(); !f.done; f = d.next())
                    if (f = f.value, "omid" != f.Lb) JR(a, [f], "2");
                    else if (null == f.j) JR(a, [f], "3", "nullUrl");
                else { var g = new mR(f.j, f.vendor || void 0, f.parameters || void 0, LQ(a.P, f.j));
                    b.push(g);
                    e.push(f) } if (d = c.B) d.o = e;
                c = c.l }
            KR(a, b); return b },
        JR = function(a, b, c, d) {
            var e = [];
            b = p(b);
            for (var f = b.next(); !f.done; f = b.next()) f = f.value, e = [].concat(t(e), t(f.trackingEvents.map(function(g) { return g.url })));
            d && (e = e.map(function(g) {
                g =
                    new K(g);
                g.j.set("dbg", d);
                return g.toString()
            }));
            bz(a.J, YO(c));
            a.J.report("verificationNotExecuted", e)
        };
    BR.prototype.N = function() { TB(this.C);
        Gh(this.C);
        H.prototype.N.call(this) };
    var KR = function(a, b) { b = b.map(function(c) { return [c.l || "", c.j] });
        pL().report(129, { omData: JSON.stringify(b) });
        bP(a.j, "oms") };
    var LR = function() { H.apply(this, arguments) };
    u(LR, H);
    LR.prototype.I = function() { return null };
    LR.prototype.isEnabled = function() { return !1 };
    LR.prototype.G = function() {};
    LR.prototype.D = function() {};
    var MR = null,
        NR = function() { H.call(this);
            this.B = new OB(this);
            this.o = !0;
            this.C = null;
            this.A = [];
            this.F = this.j = null;
            this.l = !1 };
    u(NR, H);
    var OR = function() { null == MR && (MR = new NR); return MR };
    NR.prototype.D = function() { this.o = !1;
        I(this, new Ih("omidUnavailable"));
        pL().report(128, { status: "disabled", reason: "iframeLoadFailed", description: "The OMSDK iframe failed to load. No measurements can be taken." }) };
    NR.prototype.isEnabled = function() { return this.o };
    NR.prototype.I = function(a, b, c, d) {
        var e = this;
        d = void 0 === d ? {} : d;
        bP(a, "omo");
        var f = new BR(a, b, c, this.F, d);
        if (!this.o) return JR(f, $N(a), "3", "notEnabled"), null;
        RB(this.B, b, ["start", "adError"], function(g) { switch (g.type) {
                case "start":
                    e.A.push(f);
                    e.l && (bP(f.getAd(), "saa"), IR(e.j));
                    PR(e); break;
                case "adError":
                    X().rc ? JR(f, $N(f.getAd()), "3", "b149499662") : (e.A.push(f), PR(e)) } });
        T(this.B, f, "omidAdSessionAbandoned", function() { QR(!0, f);
            f.W();
            e.l = !1;
            e.j = null;
            PR(e) });
        T(this.B, f, "omidAdSessionCompleted", function() {
            QR(!1,
                f);
            f.W();
            e.l = !1;
            e.j = null;
            PR(e)
        });
        return f
    };
    var PR = function(a) { if (a.o && !a.l && 0 != a.A.length) { a.l = !0;
            a.j = a.A.shift(); var b = a.j;
            null == a.C && (a.C = new lR("Google1", "3.526.0"));
            HR(b, a.C) } };
    NR.prototype.G = function(a) { this.F = a };
    var QR = function(a, b) { var c = { es: a ? "abandon" : "complete", ai: b.getAd().getAdId(), qy: b.getAd().C };
        a && null != b.A && (c.ar = b.A);
        pL().report(87, c) };
    var RR = function(a) { return Fl(sQ).j() ? !0 : a.some(function(b) { return b.hasRedemptionRecord }) },
        SR = function(a, b) {
            a = Fl(sQ).j() ? a.filter(function(c) { return 12 !== c.state }).map(function(c) { return c.issuerOrigin }) : a.filter(function(c) { return c.hasRedemptionRecord }).map(function(c) { return c.issuerOrigin });
            if (0 == a.length) return null;
            a = { type: "send-redemption-record", issuers: a, refreshPolicy: "none", signRequestData: Fl(sQ).j() ? "omit" : "include", includeTimestampHeader: !0, additionalSignedHeaders: ["sec-time", "Sec-Redemption-Record"] };
            !Fl(sQ).j() && b && 0 < Object.keys(b).length && (a.additionalSigningData = Rc(JSON.stringify(b)));
            return a
        };

    function aS(a) { var b = [];
        a.forEach(function(c) { 0 < c.length && b.push(c.map(function(d) { return d.Sa ? "fluid" : d.size.width + "x" + d.size.height }).join("|")) }); return b.join(",") }

    function lS() { var a = Jx.isSelected(),
            b = new Map; if (!W.isCookiesEnabled()) return b.set("co", "1"), b; if (!X().fb || iK(X().j)) return b; var c = X().G,
            d = null != c && !/[;\r\n]/.test(c);
        d && b.set("cookie", c);
        c = X().R; var e = null != c && !/[;\r\n]/.test(c);
        a && e && b.set("gpic", c); if (!d || a && !e) b.set("cookie_enabled", "1"), 2 == X().P && b.set("cdm", X().Ph);
        d = X().Ka;
        c = null != d && !/[;\r\n]/.test(d);
        a && c && (b.set("gpico", d), b.set("pdopt", d)); return b }

    function mS(a) {
        var b = new Map;
        b.set("sdkv", FK());
        var c = b.set,
            d = 1;
        $K(X().L) && (d += 4);
        if (!ZK()) { var e = 0;!ZK() && (e += 64);
            d += e + 1024 + 8 }
        c.call(b, "sdki", d.toString(16));
        b.set("ptt", (20).toString());
        null != X().ga && b.set("adk", X().ga);
        c = fL();
        0 < c.length && b.set("sdk_apis", c.join(","));
        c = X();
        if (KK()) { var f;
            c = "Google1/" + (null != (f = c.B) ? f : "h.3.526.0") } else c = null;
        f = c;
        null != f && b.set("omid_p", f);
        X().K && b.set("media_url", X().K);
        W.H && b.set("sid", W.H);
        (f = X().Y) && !iK(X().j) && b.set("a3p", f);
        b.set("nel", Bz() ? "1" : "0");
        f = X().fa;
        f.length && b.set("tt_state", Rc(JSON.stringify(f)));
        f = lw();
        w(D(f)) || b.set("eid", f);
        f = new Map;
        X().ca ? f.set("attmas", X().ca) : null != X().U && f.set("is_lat", X().U ? "1" : "0");
        c = X().j;
        c.l ? (d = bK(c, "tfcd"), d = 0 == d ? (0).toString() : 1 == d ? (1).toString() : "") : d = "";
        (d = d == (1).toString()) || (c.l ? (c = bK(c, "tfua"), c = 0 == c ? (0).toString() : 1 == c ? (1).toString() : "") : c = "", d = c == (1).toString());
        d || iK(X().j) || (X().I && f.set("idtype", X().I), (c = X().deviceId) && f.set("rdid", c), !(d = X().xd) || c && "00000000-0000-0000-0000-000000000000" != c || (f.set("paid",
            d), d = X().yd, e = !X().Cd, d && Nx.isSelected() && (f.set("paid2", d), f.set("uopt", e ? "1" : "0"), f.set("paopt", e ? "1" : "0"))), d = X().ka, e = X().sa, !d || !e || c && "00000000-0000-0000-0000-000000000000" != c || (f.set("pvid", d), f.set("pvid_s", "" + e)));
        c = new Map;
        d = X().P;
        e = cL();
        null != e && c.set("vis", e ? "1" : "2"); - 1 != d && c.set("frm", d.toString());
        bL() && (d = 2, e = J && yp(J).Xa ? !1 : Go(Mo().l), !ZK() && e && (d |= 2048), c.set("osd", d.toString()));
        d = X().oc;
        null != d && c.set("ms", d);
        c.set("sdr", "1");
        c.set("is_amp", X().Ma ? "1" : "0");
        (d = zA()) && c.set("hl", d);
        (d = X().Ub) && c.set("uach", d);
        d = new Map;
        e = X().B;
        null != e && d.set("js", "ima-" + e);
        e = X().appName;
        null != e && (d.set("an", e), "android" == X().V && d.set("msid", e));
        e = X().kc;
        null != e && d.set("mv", e + "." + (X().jc || ""));
        e = a.linearAdSlotWidth;
        var g = a.linearAdSlotHeight;
        d.set("u_so", null == e || null == g ? "l" : g > e ? "p" : "l");
        d.set("ctv", String(gL()));
        e = new Map;
        w(W.getPlayerType()) || (e.set("mpt", W.getPlayerType()), w(W.getPlayerVersion()) || e.set("mpv", W.getPlayerVersion()));
        g = new Map;
        eL() || g.set("wta", "0");
        if (a instanceof hy && a.A &&
            null !== a.adTagUrl) { var h = X().j; var k = a.adTagUrl;
            h = gK(h);
            k = XJ(k); for (var m = p(WJ), n = m.next(); !n.done; n = m.next()) n = n.value, "redundant" === k[n] && h.set(n, "redundant") } else h = gK(X().j);
        k = Map;
        m = [];
        n = m.concat;
        g = t(g);
        var r = new Map;
        iK(X().j) || (w(W.F) || r.set("adsid", W.F), w(W.U) || r.set("pucrd", W.U), w(W.O) || r.set("jar", W.O));
        g = new k(n.call(m, g, t(r), t(h)));
        h = new Map;
        k = X().Ca;
        (m = X().Ed) && k && 0 < k && m > k && (h.set("dlt", k.toString()), h.set("idt", (m - k).toString()));
        h.set("dt", ll().toString());
        var q;
        k = null != (q = a.adTagUrl) ?
            q : "";
        q = new K(k);
        var y;
        a = null != (y = a.pageUrl) ? y : "";
        if (Gx.isSelected()) { var x;
            y = null != (x = Fm(q, "url")) ? x : "" } else y = "";
        x = y;
        y = uA(a) ? a : x;
        nS(q);
        a = uA(X().o) ? X().o : uA(X().referrer) ? X().referrer : "null";
        x = new Map;
        q = X().referrer;
        w(D(q)) || x.set("ref", q);
        q = X().Qh;
        uA(y) ? (x.set("url", y), oS(x), x.set("loc", q)) : Hx.isSelected() ? (x.set("url", q), oS(x)) : (x.set("url", a), y = X().og, null != y && (a = Gm(a), q = Gm(y), a.l != q.l && x.set("top", y)));
        return new Map([].concat(t(f), t(c), t(d), t(e), t(g), t(b), t(x), t(h)))
    }

    function pS(a, b) {
        var c = new Map,
            d = OH(a),
            e = X().L;
        $K(e) || (d = NH(d));
        d.some(function(f) { return MH(f) }) && (c.set("ea", "0"), null != b.nonLinearAdSlotWidth && null != b.nonLinearAdSlotHeight && (b = LH(b), c.set("image_size", b), w(b) && (d = d.filter(function(f) { return !MH(f) }))));
        c.set("ad_type", d.join("_"));
        b = d.some(function(f) { return "text" === f });
        c.set("num_ads", b ? "3" : "1");
        a = PH(a, "t_pyv");
        w(a) && (a = b ? "allow" : "exclude");
        c.set("t_pyv", a);
        d.some(function(f) {
            return "bumpervideo" === f || "skippablevideo" === f || "standardvideo" === f ||
                "video" === f
        }) && (d = 6 <= Kb("Chromium") || 4 <= Kb("Firefox") || wc && yA(xA, 2.3) ? 43 : 18, c.set("video_format", d.toString()));
        return c
    }

    function oS(a) { var b = X().o;
        a.set("top", null != b ? b : "") }

    function nS(a) {
        ["video_url_to_fetch", "description_url", "durl"].find(function(b) { b = Fm(a, b) || ""; return uA(b) ? !0 : !1 }) }

    function qS(a) { var b = X().fa,
            c;
        (c = !Ix.isSelected()) || (c = RR(b), pL().report(158, { redeemed: c }), c = !(ty(a) && c)); if (c) return null;
        a = { url: Fm(new K(a), "url") }; return SR(b, a) };
    var rS = function() { this.j = [];
            this.l = [] },
        sS = function(a) { 0 === a.j.length && (a.j = a.l, a.j.reverse(), a.l = []) },
        tS = function(a, b) { a.l.push(b) };
    rS.prototype.isEmpty = function() { return 0 === this.j.length && 0 === this.l.length };
    rS.prototype.clear = function() { this.j = [];
        this.l = [] };
    rS.prototype.remove = function(a) { var b = this.j;
        b: { var c = b.length - 1;0 > c && (c = Math.max(0, b.length + c)); if ("string" === typeof b) c = "string" !== typeof a || 1 != a.length ? -1 : b.lastIndexOf(a, c);
            else { for (; 0 <= c; c--)
                    if (c in b && b[c] === a) break b;
                c = -1 } }
        0 <= c ? (Zb(b, c), b = !0) : b = !1; return b || Yb(this.l, a) };
    rS.prototype.ie = function() { for (var a = [], b = this.j.length - 1; 0 <= b; --b) a.push(this.j[b]); var c = this.l.length; for (b = 0; b < c; ++b) a.push(this.l[b]); return a };
    var uS = function() { XB.call(this, !1, !1) };
    u(uS, XB);
    uS.prototype.l = function(a, b) { XB.prototype.l.call(this, a, void 0 === b ? !1 : b) };
    var vS = function() { H.call(this);
        this.B = !1;
        this.j = null;
        this.C = this.F = this.J = !1;
        this.l = 0;
        this.A = [];
        this.D = !1;
        this.K = this.L = Infinity;
        this.o = 0;
        this.I = new OB(this);
        G(this, this.I);
        this.G = {} };
    u(vS, H);
    var zS = function(a) {
            wS(a);
            !(a.j instanceof H) && "ontouchstart" in document.documentElement && Ac ? (a.G = {
                touchstart: function(b) { a.F = !0;
                    a.l = b.touches.length;
                    a.o && (window.clearTimeout(a.o), a.o = 0, a.J = !0);
                    a.D = xS(a, b.touches) || 1 != b.touches.length;
                    a.D ? (a.L = Infinity, a.K = Infinity) : (a.L = b.touches[0].clientX, a.K = b.touches[0].clientY);
                    b = b.touches;
                    a.A = []; for (var c = 0; c < b.length; c++) a.A.push(b[c].identifier) },
                touchmove: function(b) {
                    a.l = b.touches.length;
                    if (!Ac || !yA(wA, 8) || Math.pow(b.changedTouches[0].clientX - a.L, 2) + Math.pow(b.changedTouches[0].clientY -
                            a.K, 2) > Math.pow(5, 2)) a.C = !0
                },
                touchend: function(b) { return void yS(a, b) }
            }, Xe(a.G, function(b, c) { a.j.addEventListener(c, b, !1) })) : S(a.I, a.j, "click", a.R)
        },
        wS = function(a) { SB(a.I, a.j, "click", a.R);
            Xe(a.G, function(b, c) { this.j.removeEventListener(c, b, !1) }, a);
            a.G = {} },
        yS = function(a, b) {!a.F || 1 != a.l || a.C || a.J || a.D || !xS(a, b.changedTouches) || (a.o = window.setTimeout(function() { return void AS(a) }, 300));
            a.l = b.touches.length;
            0 == a.l && (a.F = !1, a.C = !1, a.A = []);
            a.J = !1 };
    vS.prototype.R = function() { AS(this) };
    var xS = function(a, b) { for (var c = 0; c < b.length; c++)
                if (a.A.includes(b[c].identifier)) return !0;
            return !1 },
        AS = function(a) { a.o = 0;
            I(a, new Ih("click")) };
    vS.prototype.N = function() { null != this.j && this.B && (wS(this), this.C = this.F = this.B = !1, this.l = 0, this.A = [], this.D = !1);
        H.prototype.N.call(this) };
    /*

     Copyright 2020 Google LLC
     SPDX-License-Identifier: Apache-2.0
    */
    new Uint8Array(0);
    var BS = function(a, b) { Ih.call(this, "vpaidEvent");
        this.l = a;
        this.sessionId = b };
    u(BS, Ih);
    var CS = function() { cG.apply(this, arguments) };
    u(CS, cG);
    l = CS.prototype;
    l.Ac = function() {};
    l.show = function() {};
    l.hide = function() {};
    l.bc = function() {};
    l.kd = function() {};
    var DS = function(a) { var b = a.kh;
            a = a.margin; var c = '<div class="' + N("autoalign") + " " + N("nonLinearContainer") + '"><div class="' + N("innerContainer") + '"><span class="' + N("buttonSlot") + '">';
            b = Math.max(0, Math.ceil(b - 0)); for (var d = 0; d < b; d++) c += '<div class="' + N("overlaySelector") + '" style="margin-top: ' + N(O(a)) + 'px"></div>'; return M(c + "</span></div></div>") },
        ES = function() {
            return M('<div class="' + N("fullSlotContainer") + '"><div class="' + N("fullSlotContentContainer") + '"></div><div class="' + N("fullSlotBottomBar") +
                '"></div></div>')
        };
    var FS = function() { ZG.call(this);
        this.element = An(ES);
        this.l = dh("fullSlotContentContainer", this.element);
        this.o = dh("fullSlotBottomBar", this.element) };
    u(FS, aH);
    var GS = function(a, b) { a.o && b.element && a.o.appendChild(b.element) },
        HS = function(a, b) { a.l && b.element && a.l.appendChild(b.element) };
    var IS = function(a, b, c, d, e, f, g) { CS.call(this, b);
        this.B = a;
        this.C = [];
        this.H = c;
        this.F = d;
        this.D = e;
        this.G = f;
        this.I = g;
        this.l = new FS;
        this.A = new OB(this);
        this.o = 0 };
    u(IS, CS);
    l = IS.prototype;
    l.build = function() {
        var a = this;
        bH(this.l, this.H);
        this.B.forEach(function(d, e) { d = d.o(a.F);
            a.C.push(d); var f = AH(d);
            null != f && T(a.A, f, "click", function(g) { g.stopPropagation();
                bG(a.j, yE, null) });
            new nG(d, a.j, RE);
            T(a.A, d, "click", function() { a.o = e });
            HS(a.l, d) });
        if (this.G) { var b = new DH(!0, !0);
            GS(this.l, b);
            b = new CG(b, this.j, 5);
            G(this, b);
            b = new fH;
            GS(this.l, b);
            new yG(b, this.j);
            b = new cH;
            new hG(b, this.j, yE);
            b.o(this.D);
            GS(this.l, b);
            b.show(); if (this.I) { var c = new EH(!0);
                new hG(c, this.j, bF);
                $G(b, c) } }
        IF(JF(this.l.element,
            .3));
        bG(this.j, TE, null)
    };
    l.N = function() { ph(this.l.xa());
        CS.prototype.N.call(this) };
    l.Ac = function() { return this.l.l };
    l.show = function() {};
    l.hide = function() {};
    l.bc = function() { return this.B[this.o] };
    l.kd = function() { return this.C[this.o] };
    var KS = function(a, b) { ZG.call(this); var c = this;
        this.D = b;
        this.element = An(DS, { kh: a, margin: (57 - 10 * a) / a });
        this.l = dh("innerContainer", this.element);
        this.A = Array.from(ch("overlaySelector", this.element));
        this.A.forEach(function(d, e) { T(c.j, d, "click", function(f) { JS(c, e);
                f.stopPropagation() }) });
        this.C = !1;
        JS(this, 0);
        T(this.j, this.element, "mouseover", function() { I(c, "mouseover") });
        T(this.j, this.element, "mouseout", function() { I(c, "mouseout") }) };
    u(KS, aH);
    KS.prototype.vc = function(a) { this.C = a;
        this.o && this.o.vc(a) };
    var JS = function(a, b) { null != a.B && $l(a.A[a.B], "active");
            Yl(a.A[b], "active");
            a.B = b;
            a.D(b) },
        LS = function(a, b) { a.o && (a.l.removeChild(a.o.xa()), SB(a.j, b, "click"));
            a.o = b;
            a.o.vc(a.C);
            a.l.appendChild(b.element);
            T(a.j, b, "click", function(c) { I(a, c);
                c.stopPropagation() }) };
    l = KS.prototype;
    l.wh = function(a) { FF(this.l, "opacity " + a / 1E3 + "s") };
    l.show = function() { vj(this.l, !0) };
    l.hide = function() { vj(this.l, !1) };
    l.Ag = function() { uj(this.l, 1) };
    l.ah = function() { uj(this.l, .3) };
    var NS = function(a, b, c, d) { CS.call(this, b); var e = this;
        this.H = a;
        this.F = c;
        this.D = new OB(this);
        this.G = d;
        this.A = [];
        this.C = new Oi(15E3);
        this.l = new KS(a.length, function(f) { MS(e, f) }) };
    u(NS, CS);
    NS.prototype.build = function() {
        var a = this;
        bH(this.l, this.F);
        new qG(this.l, this.j, !1);
        new nG(this.l, this.j, RE);
        this.A = this.H.map(function(b) { var c = b.o(a.G),
                d = AH(c);
            null != d && T(a.D, d, "click", function(e) { e.stopPropagation();
                bG(a.j, yE, null) });
            d = new qH;
            new kG(d, a.j, GE);
            $G(c, d);
            b.J && (b = new EH(!0), new hG(b, a.j, bF), $G(c, b)); return c });
        MS(this, 0);
        this.o = new CH;
        new zG(this.o, this.j, GE);
        $G(this.l, this.o);
        aG(this.j, GE, function() { return void a.stop() });
        aG(this.j, XE, function() { a.C.start() });
        S(this.D, this.C, "tick",
            this.I);
        this.C.start()
    };
    NS.prototype.N = function() { ph(this.l.xa());
        CS.prototype.N.call(this) };
    NS.prototype.stop = function() { this.C.stop() };
    NS.prototype.I = function() { JS(this.l, (this.B + 1) % this.A.length) };
    var MS = function(a, b) { b != a.B && a.A[b] && (LS(a.l, a.A[b]), a.B = b, bG(a.j, TE, null)) };
    l = NS.prototype;
    l.Ac = function() { var a = this.kd(); return a ? a.xa() : null };
    l.kd = function() { return this.A[this.B] };
    l.show = function() { this.l && this.l.show();
        this.o && this.o.hide() };
    l.hide = function() { this.l && this.l.hide();
        this.o && this.o.show() };
    l.bc = function() { return this.H[this.B] };
    var OS = function(a, b, c, d) { cG.call(this, a);
        this.B = b;
        this.o = c;
        this.C = d;
        this.l = new gH(["videoAdUiInstreamUxRefresh", "endcap"], "", !0, !0);
        this.A = null };
    u(OS, cG);
    OS.prototype.build = function() {
        bH(this.l, this.B);
        hH(this.l);
        this.A = new DH(!0, !0);
        kH(this.l, this.A);
        new CG(this.A, this.j, 0);
        var a = new uH(this.o.actions[0].title);
        new hG(a, this.j, LE);
        jH(this.l, a);
        a = new cH;
        this.o.websiteCard.headline && (a.o(this.o.websiteCard.headline), a.show());
        new hG(a, this.j, LE);
        pH(this.l, a);
        a = new eH;
        this.o.websiteCard.description && (a.o(this.o.websiteCard.description), a.show());
        pH(this.l, a);
        new hG(a, this.j, LE);
        a = new rH("author");
        var b = this.o.websiteCard.imageUrl || this.C;
        b && (a.o(b),
            a.show());
        new hG(a, this.j, LE);
        jH(this.l, a);
        iH(this.l)
    };
    var PS = function(a) { var b;
        null != (b = a.A) && b.l && b.l.focus() };
    OS.prototype.N = function() { ph(this.l.xa());
        this.l.W();
        cG.prototype.N.call(this) };
    var QS = function(a) { this.j = a },
        RS = function(a) { return a.some(function(b) { if (!b.C) return !1;
                b = b.B; return null != b && "none" != b.style.display ? (b.focus(), !0) : !1 }) },
        SS = function(a, b) { var c = ih().screen; if (c) { var d = c.availWidth || c.width,
                    e = c.availHeight || c.height,
                    f = new Gg(0, e),
                    g = Number.MAX_VALUE,
                    h = null;
                b.forEach(function(k, m) { m = a[m]; if (m.C) { var n = new Gg(Xg(rz(k, d)), Xg(sz(k, e)));
                        k = f.x - n.x;
                        n = f.y - n.y;
                        k = Math.sqrt(k * k + n * n);
                        g > k && (h = m, g = k) } });
                null != h && (b = h.xa(), null != b && b.focus()) } };

    function TS(a, b) { null != b && (a.l = b.includes("adAttribution"), a.o = b.includes("countdown")) }

    function US(a, b) { b = void 0 === b ? 6 : b; var c = new VS; var d = -1 != a.getDuration() && 0 != a.getDuration() && 7 >= a.getDuration();
        c.C = d ? -1 : a.getSkipTimeOffset();
        c.icons = YN(a);
        c.O = !w(D(QN(a)));
        c.A = a.getDuration() > b || 0 == a.getDuration();
        a.o && (c.F = uI(a.o) || "");
        b = VJ();
        SJ(b, "disableSkipFadeTransition") && (c.U = 0);
        b = tN(a, "GpidWtaExtension");
        WS(YN(a)) && Lx.isSelected() && (c.attributionData = null == b ? void 0 : b.l); return c }

    function WS(a) { return a.some(function(b) { return "GoogleWhyThisAd" === b.program }) }
    var VS = function() { this.C = -1;
        this.o = this.l = !0;
        this.j = !1;
        this.A = !0;
        this.B = this.H = !1;
        this.F = "";
        this.icons = [];
        this.O = !1 };
    VS.prototype.getUiElements = function() { var a = [];
        this.l && a.push("adAttribution");
        this.o && a.push("countdown"); return a };
    VS.prototype.isSkippable = function() { return 0 <= this.C };
    var XS = function(a) { ZG.call(this);
        this.element = kh("DIV", "nonLinearContainer");
        a && Yl(this.element, "autoalign") };
    u(XS, aH);
    var YS = function(a, b, c, d, e, f) { CS.call(this, b);
        this.B = a;
        this.D = c;
        this.C = new OB(this);
        G(this, this.C);
        this.A = new XS(d);
        this.F = e;
        this.H = f };
    u(YS, CS);
    l = YS.prototype;
    l.build = function() { var a = this;
        bH(this.A, this.D);
        Hh(this, function() { return ph(a.A.xa()) });
        this.l = this.B.o(this.H); var b = AH(this.l);
        null != b && T(this.C, b, "click", function(c) { c.stopPropagation();
            bG(a.j, yE, null) });
        new qG(this.l, this.j, !0);
        new nG(this.l, this.j, RE);
        $G(this.A, this.l);
        this.F && (b = new qH, new kG(b, this.j, GE), $G(this.l, b), this.o = new CH, new zG(this.o, this.j, SE), $G(this.A, this.o));
        this.B.J && (b = new EH(!0), new hG(b, this.j, bF), $G(this.l, b));
        bG(this.j, TE, null) };
    l.Ac = function() { return this.l ? this.l.xa() : null };
    l.show = function() { this.o && this.o.hide();
        this.l && this.l.show() };
    l.hide = function() { this.o && this.o.show();
        this.l && this.l.hide() };
    l.bc = function() { return this.B };
    l.kd = function() { return this.l };
    var ZS = function(a, b, c, d) { dG.call(this, b); var e = this;
        this.l = new $F;
        this.B = d;
        new GG(a, this.l, c, !1);
        aG(this.l, $E, function() { e.B.show() });
        eG(this, hF, this.o, this) };
    u(ZS, dG);
    ZS.prototype.o = function(a) { bG(this.l, hF, a) };
    var $S = function() { return M('<div id="mute_panel" class="' + N("mute_panel") + '" aria-hidden="true"><div id="abgac" class="' + N("abgac") + '" aria-hidden="true"><div id="mlsc" class="' + N("mlsc") + '"><svg class="' + N("mls") + '" viewBox="50 50 100 100"><circle class="' + N("mlsd") + '" cx="100" cy="100" r="30" fill="none" stroke="#9E9E9E" stroke-width="3"/></svg></div></div></div>') };
    var aT = function(a) { ZG.call(this); var b = this;
        this.element = An($S);
        B(Kd(a, Oj, 1), 40, "https://support.google.com/ads/answer/10923348"); if (!a) throw Error("bad attrdata"); var c = new am(a);
        this.l = new Nn(a, c);
        this.A = this.o = !1;
        T(this.j, this.l, "p-control-panel-hidden", function() { b.o = !1 }) };
    u(aT, aH);
    aT.prototype.show = function() { this.o || (this.A || (this.l.aa(), this.A = !0), this.l.expand(), this.o = !0) };
    aT.prototype.hide = function() { this.o && (this.l.collapse(), this.o = !1) };
    var bT = function(a, b) { dG.call(this, b); var c = this;
        this.l = a;
        G(this, this.l);
        T(this.j, this.l.l, "wtaClicked", function(d) { d = d.detail;
            d.underlyingEvent.preventDefault();
            fG(c, uE, d.wtaUrl) });
        T(this.j, this.l.l, "learnMoreClicked", function(d) { d = d.detail;
            d.underlyingEvent.preventDefault();
            fG(c, uE, d.learnMoreUrl) });
        T(this.j, this.l.l, "updateGpid", function(d) { d = d.detail;
            fG(c, vE, new wE(d.gpidType, d.gpidPersonalizationEnabled, d.gpidShouldResetAdsData)) });
        eG(this, dF, function(d) { d || c.hide() }, this) };
    u(bT, dG);
    bT.prototype.show = function() { this.l.show();
        fG(this, tE, null) };
    bT.prototype.hide = function() { this.l.hide() };
    var cT = function(a, b, c, d, e, f) {
        f = void 0 === f ? !1 : f;
        cG.call(this, b);
        var g = this;
        this.o = a;
        this.F = c;
        this.C = d;
        this.L = e;
        this.I = this.G = !1;
        this.D = [];
        this.H = !1;
        this.A = f;
        this.l = new gH([this.o.F], this.o.B ? "videoAdUiTopBar-gvn" : "videoAdUiTopBarWithGradients", !this.o.j, this.A);
        lH(this.l, !this.A && (!AA() || !1));
        this.J = new OB(this);
        G(this, this.J);
        document.addEventListener("click", function(h) {
            var k = g.l.xa().getBoundingClientRect();
            if (!(k.bottom < h.clientY || k.right < h.clientX || k.top > h.clientY || k.left > h.clientX)) {
                Q(R(), "ctie",
                    h.target instanceof Element ? "1" : "0");
                var m = R(),
                    n = h.clientX - k.left;
                k = h.clientY - k.top;
                var r = !1,
                    q = "notag";
                for (h = h.target instanceof Element ? h.target : void 0; void 0 != h && h != document.documentElement;) {
                    var y = void 0,
                        x = void 0;
                    if ((null == (y = h) ? 0 : y.getAttribute("data-ck-navigates")) || (null == (x = h) ? 0 : x.getAttribute("data-ck-tag"))) { y = q = void 0;
                        r = null != (y = null == (q = h) ? void 0 : q.getAttribute("data-ck-navigates")) ? y : !1;
                        x = y = void 0;
                        q = null != (x = null == (y = h) ? void 0 : y.getAttribute("data-ck-tag")) ? x : "notag"; break }
                    y = void 0;
                    h =
                        null != (y = h.parentElement) ? y : void 0
                }
                tl(m.j, "clk_" + n + "x" + k + "|" + r + "|" + q, ll());
                R().l()
            }
        }, !0);
        this.K = new QS(b);
        this.B = null
    };
    u(cT, cG);
    l = cT.prototype;
    l.build = function() {
        var a = this;
        bH(this.l, this.F);
        hH(this.l);
        Hh(this, function() { return ph(a.l.xa()) });
        if (this.o.isSkippable()) { aG(this.j, ZE, function() { a.G = !0 }); var b = new DH(!0, !0, this.o.U);
            kH(this.l, b); var c = new CG(b, this.j, this.o.C);
            G(this, c);
            this.C && b.hide() }
        if (this.o.l && !this.C) { var d = new dH(this.A);
            this.A ? kH(this.l, d) : this.o.B ? (jH(this.l, d), iH(this.l)) : kH(this.l, d);
            this.o.o ? new yG(d, this.j) : d.show() }
        this.o.D && (b = new EH(!0), new hG(b, this.j, bF), this.A ? kH(this.l, b) : d ? $G(d, b) : this.o.B ? jH(this.l, b) :
            kH(this.l, b));
        this.A && (d = new BH, xG(new wG(d, this.j)), pH(this.l, d), aG(this.j, dF, function(e) { a.H && (mH(a.l, !e), nH(a.l, !e)) }));
        if (this.A || this.o.A && !this.C) d = new rH("author"), new iG(d, this.j, EE, pE), jH(this.l, d), d = new cH, new iG(d, this.j, FE, sE), this.A ? oH(this.l, d) : jH(this.l, d), d = new eH, new iG(d, this.j, zE, qE), this.A ? oH(this.l, d) : jH(this.l, d), aG(this.j, pE, function() { return void iH(a.l) }), aG(this.j, sE, function() { return void iH(a.l) }), aG(this.j, qE, function() { return void iH(a.l) });
        this.A ? new oG(this.l, this.j, !0) : this.C || (d = AE, this.o.j || !this.o.O ? d = cF : new gG(this.l, !0), this.L ? new nG(this.l, this.j, d) : (new hG(this.l, this.j, d), this.l.vc(!0)));
        this.o.icons.forEach(function(e) { var f = new rH("vast"); if (a.o.attributionData && "GoogleWhyThisAd" === e.program) { var g = new aT(a.o.attributionData);
                bH(g, a.F);
                Hh(a, function() { return ph(g.xa()) }); var h = new bT(g, a.j);
                new ZS(f, a.j, e, h) } else new GG(f, a.j, e, X().F);
            sH(f, e.heightPx, e.widthPx);
            $G(a.l, f);
            a.D.push(f) });
        this.A ? (this.B = new uH, new iG(this.B, this.j, PE, rE)) : (this.B = new vH,
            new hG(this.B, this.j, PE));
        aG(this.j, hF, function(e) {!a.A && 0 < e.durationSeconds && 5 > e.durationSeconds - e.currentTimeSeconds && lH(a.l, !1);
            a.A && !a.H && 5 < e.currentTimeSeconds && (a.H = !0, mH(a.l, !0), nH(a.l, !0)) });
        aG(this.j, ME, function() { var e = a.K,
                f = a.D,
                g = a.o.icons,
                h = a.o.isSkippable();
            RS(f) || (h ? bG(e.j, NE, null) : SS(f, g)) });
        this.De()
    };
    l.ph = function() { this.G && bG(this.j, xE, null) };
    l.oh = function() {!this.I && this.o.A && !this.C && this.o.j && this.B && (this.I = !0, jH(this.l, this.B), iH(this.l)) };
    l.De = function() { var a = this,
            b = sj(this.l.xa());
        this.o.icons.forEach(function(c, d) { a.o.icons.length == a.D.length && tH(a.D[d], rz(c, b.width), sz(c, b.height)) }) };
    l.getConfig = function() { return this.o };
    var dT = function() { ZG.call(this);
        this.element = kh("div");
        kj(this.element, { position: "absolute", width: "100%", height: "100%" }) };
    u(dT, aH);
    var eT = function(a, b, c) { cG.call(this, b);
        this.A = a;
        this.o = c;
        this.l = new dT };
    u(eT, cG);
    eT.prototype.build = function() { var a = this;
        window.frameElement && kj(window.frameElement, { "z-index": 100 });
        bH(this.l, this.o);
        this.A.forEach(function(b) { var c = new rH("vast");
            new GG(c, a.j, b);
            $G(a.l, c); var d = sj(a.l.xa());
            tH(c, rz(b, d.width), sz(b, d.height));
            sH(c, b.heightPx, b.widthPx) }) };
    eT.prototype.N = function() { ph(this.l.xa());
        cG.prototype.N.call(this) };

    function fT(a, b) {
        b = void 0 === b ? null : b;
        switch (fC(a.adTagUrl || "")) {
            case "dcm":
                b = new Map;
                null != X().A && b.set("dc_submodel", X().A);
                var c = lw();
                w(D(c)) || b.set("dc_eid", c);
                c = W.I;
                null != c && b.set("dc_rfl", al(c));
                c = my(new ky(a.adTagUrl || ""), "dc_output") || [];
                (c.includes("vast") || c.includes("xml_vast2") || c.includes("xml_vast3")) && b.set("dc_output", "xml_vast4");
                a = new Map([].concat(t(mS(a)), t(b)));
                return new TH(a);
            case "dv3":
                b = new Map;
                null != X().A && b.set("submodel", X().A);
                c = lw();
                w(D(c)) || b.set("eid", c);
                if (c = W.I) c =
                    al(c), c = encodeURIComponent(D(c)), b.set("rfl", c);
                a = new Map([].concat(t(mS(a)), t(b)));
                return new VH(a);
            case "adsense":
                var d = null != b ? b.l : [];
                b = new Map;
                b.set("correlator", X().J.toString());
                c = new K(a.adTagUrl);
                var e = c.j;
                "" !== e.get("description_url", "") && (e = e.get("ad_block", ""), e = w(e) ? X().adBlock.toString() : e, b.set("ad_block", e));
                0 < d.length && (d = d[0].getSizes(), 0 < d.length && (b.set("ca_w", d[0].size.width.toString()), b.set("ca_h", d[0].size.height.toString())));
                a = new Map([].concat(t(pS(c, a)), t(mS(a)), t(lS()),
                    t(b)));
                return new QH(a);
            case "xfp":
                return b = new Map, b.set("correlator", X().J.toString()), b.set("scor", X().H.toString()), c = X().O, null != c && (X().O = null, b.set("fbidx", c.toString())), null != X().aa && b.set("ppid", X().aa), null != X().A && b.set("submodel", X().A), d = a.adTagUrl || "", c = new Map, e = X().ma, null != e ? (d = aS(e), c.set("ciu_szs", d)) : (d = (new K(d)).j, c.set("ciu_szs", d.get("ciu_szs", ""))), d = lS(), a = new Map([].concat(t(c), t(mS(a)), t(d), t(b))), new WH(a);
            case "dbm":
                return new SH(mS(a));
            default:
                return new kC
        }
    };
    var gT = function(a) { H.call(this);
        this.j = a };
    u(gT, H);
    var hT = function(a, b, c) { I(a, new dM(b, a.j.getAd(), c)) };
    l = gT.prototype;
    l.getAd = function() { return this.j.getAd() };
    l.updateAdsRenderingSettings = function() {};
    l.expand = function() { this.j.expand() };
    l.collapse = function() { this.j.collapse() };
    l.Ie = function() { this.j.Ie() };
    l.stop = function() { this.j.stop() };
    l.destroy = function() { this.j.destroy() };
    l.init = function() { this.j.init() };
    l.start = function() { this.j.start() };
    l.pause = function() { this.j.pause() };
    l.resume = function() { this.j.resume() };
    l.skip = function() { this.j.skip() };
    l.getRemainingTime = function() { return this.j.getRemainingTime() };
    l.getVolume = function() { return this.j.getVolume() };
    l.setVolume = function(a) { this.j.setVolume(a) };
    l.Jb = function() { this.j.Jb() };
    l.resize = function(a, b) { this.j.resize(a, b) };
    l.getDuration = function() { return this.j.getDuration() };
    l.pa = function() { return this.j.pa() };
    l.fc = function() { return this.j.fc() };
    l.clicked = function() { this.j.clicked() };
    l.getAdSkippableState = function() { return this.j.getAdSkippableState() };
    l.da = function(a) { this.j.da(a) };
    l.wb = function(a, b) { this.j.wb(a, b) };
    l.Ea = function(a, b) { this.j.Ea(a, b) };
    l.Qb = function() { this.j.Qb() };
    l.Rb = function() { this.j.Rb() };
    l.toString = function() { return this.j.toString() };
    var iT = function(a, b, c, d, e) { e = void 0 === e ? !1 : e;
        gT.call(this, a);
        this.F = c;
        this.I = b;
        this.T = of(this.I);
        this.J = this.A = this.l = null;
        this.B = new OB(a);
        G(this, this.B);
        this.V = d;
        this.L = this.o = this.G = this.C = null;
        this.R = !1;
        this.K = e;
        this.P = this.D = null };
    u(iT, gT);
    iT.prototype.init = function() { this.R || (jT(this), this.R = !0);
        gT.prototype.init.call(this) };
    iT.prototype.start = function() {
        this.K || (this.I.j = !1);
        gT.prototype.start.call(this);
        dh("videoAdUi").classList.add("ima-action-ad");
        if (this.getAd()) { var a = tN(this.getAd(), "InfoCards");
            a && (this.C = XM(a)) && (this.G = this.C.actions[0].title, this.o = this.C.websiteCard, this.L = this.C.actions[0].target || QN(this.getAd())) }
        this.C.placement && this.C.placement.showInCta && (this.K ? (a = this.F.Db(), this.G && bG(a, rE, this.G), this.o.headline && bG(a, sE, this.o.headline), this.o.description && bG(a, qE, this.o.description), this.o.imageUrl &&
            bG(a, pE, this.o.imageUrl)) : (a = document.body, this.l = new WF(this.G), this.l.hide(), this.J = kh("DIV"), Yl(this.J, "videoAdUiFloatingLayer"), a.appendChild(this.J), this.l.Sd(this.J), this.l.bf(this.o.headline), this.l.Nd(this.o.description), this.o.imageUrl && this.l.Uc(this.o.imageUrl), (a = (a = this.getAd()) && a.o ? uI(a.o) : null) && this.l.l.element.classList.add(a)));
        if (this.C.placement && this.C.placement.showInEndcap && (a = this.F.Cb())) {
            var b = this.C.placement.jd;
            this.getAd().K = b / 1E3;
            this.K ? (b = this.getAd().o, b = tI(b), this.D =
                new OS(this.F.Db(), a, this.C, (null == b ? void 0 : b.thumbnailUrl) || null), this.D.build()) : (this.A = new SF(a, b, this.G), this.A.o.bf(this.o.headline), this.A.o.Nd(this.o.description), this.o.imageUrl && this.A.o.Uc(this.o.imageUrl))
        }
        a = this.getAd().o;
        var c = sI(a);
        c && c.thumbnailUrl && null != (b = this.A) && (c = c.thumbnailUrl) && dh("advertiserVideoThumbnail", b.A.l).setAttribute("src", c);
        a = tI(a);
        var d;
        if ((null == (d = this.o) || !d.imageUrl) && (null == a ? 0 : a.thumbnailUrl)) {
            var e;
            null == (e = this.l) || e.Uc(a.thumbnailUrl || "");
            var f;
            null !=
                (f = this.A) && f.o.Uc(a.thumbnailUrl || "")
        }
        kT(this);
        lT(this, "start")
    };
    iT.prototype.destroy = function() { Object.assign(this.I, this.T);
        gT.prototype.destroy.call(this) };
    var kT = function(a) { a.l && T(a.B, a.l, "ctaClicked", function() { a.pause();
                CI(a.V, 3);
                lT(a, "ctaclick");
                a.clicked() });
            a.A && (T(a.B, a.A, "video_card_endcap_action", function() { return mT(a) }), T(a.B, a.A, "video_card_endcap_collapse", function() { return nT(a, "video_card_endcap_collapse") }), T(a.B, a.A, "videoSkipClicked", function() { return nT(a, "video_card_endcap_dismiss") })) },
        jT = function(a) {
            var b = a.j;
            T(a.B, b, RK, function(c) { return I(a, c) });
            T(a.B, b, "start", function() { lT(a, "showui");
                a.l && a.l.show() });
            T(a.B, b, "contentPauseRequested",
                function(c) { return I(a, c) });
            T(a.B, b, "contentResumeRequested", function() { return function() {} });
            T(a.B, b, "adError", function(c) { lT(a, "error");
                c = c.getError() || XL(PJ);
                aM(a, PJ, c.getInnerError());
                a.destroy() });
            T(a.B, b, "allAdsCompleted", function() { return oT(a) });
            T(a.B, b, "skip", function() { lT(a, "skip");
                a.A = null; var c;
                null == (c = a.D) || c.W();
                a.D = null;
                a.l && a.l.hide();
                a.destroy() })
        },
        oT = function(a) {
            lT(a, "complete");
            a.l && a.l.hide();
            if (a.A) a.F.wc(), a.A.show();
            else if (a.D) {
                a.F.wc();
                var b = a.F.Db();
                aG(b, YE, function() {
                    nT(a,
                        "video_card_endcap_collapse")
                });
                aG(b, LE, function() { mT(a) });
                X().l && PS(a.D);
                a.P = setTimeout(function() { nT(a, "video_card_endcap_collapse") }, a.C.placement.jd)
            } else hT(a, "contentResumeRequested"), hT(a, "allAdsCompleted");
            Object.assign(a.I, a.T)
        },
        mT = function(a) { lT(a, "endcapclick"); var b;
            null == (b = a.A) || b.pause();
            clearTimeout(a.P);
            b = {};
            b.url = a.L;
            hT(a, "navigationRequested", b) };
    iT.prototype.clicked = function() { this.Ea(this.L, null) };
    var nT = function(a, b) { hT(a, b);
            hT(a, "contentResumeRequested");
            hT(a, "allAdsCompleted"); var c;
            null == (c = a.D) || c.W();
            a.F.Gc();
            a.destroy() },
        lT = function(a, b) { var c = {};
            a = (c.evt = b, c.format = pT(a), c);
            pL().report(143, a, !0) },
        pT = function(a) { a = a.getAd(); if (!a) return "noad";
            a = a.o; if (!a) return "noimalibad";
            a = qI(a); if (!a) return "noextension";
            a = a.j; return null != a ? a : "noformat" };
    iT.prototype.N = function() { var a;
        null == (a = this.D) || a.W();
        gT.prototype.N.call(this) };
    var qT = function(a) { this.j = a };
    var rT = function() { this.j = new Map };
    rT.prototype.claim = function() { for (var a = p(this.j.keys()), b = a.next(); !b.done; b = a.next())
            if (b = b.value, !this.j.get(b)) return this.j.set(b, !0), b;
        return null };
    rT.prototype.release = function(a) { a && this.j.set(a, !1) };
    var sT = function(a, b) { a.j.clear(); for (var c = 0; 1 > c; c++) a.j.set(new qT(b), !1) };
    var tT = ["videoDisplay1", "videoDisplay2"],
        uT = function(a) { this.o = a;
            this.l = new Set;
            this.j = [] },
        vT = function(a, b) { a.l.clear();
            a.j = tT.slice(0, b).map(function(c) { return new CL(a.o, c) }) },
        wT = function(a) { if (0 < a.j.length) { var b = a.j.shift();
                a.l.add(b); return b } return null },
        xT = function(a, b) { b && (a.l.delete(b), a.j.push(b)) },
        yT = function(a) { for (var b = p(a.l), c = b.next(); !c.done; c = b.next()) c = c.value, c.reset(X().C), KL(c), a.j.unshift(c) };
    var zT = function(a, b, c, d, e) { this.j = a;
        this.l = b;
        this.B = c;
        this.o = d;
        this.C = e;
        this.A = [] };
    var AT = function() { this.contentDuration = this.offset = this.l = this.j = this.adTagUrl = null };
    var BT = function(a, b) { b = void 0 === b ? new AT : b;
        Ih.call(this, a);
        this.qe = [];
        this.o = b;
        this.l = !0 };
    u(BT, Ih);
    BT.prototype.ob = function() { return this.o };
    var CT = function(a, b, c, d, e) { H.call(this);
        this.B = a;
        this.A = b;
        this.R = e;
        this.L = [].concat(t(b));
        this.F = c;
        this.I = d;
        this.l = null;
        this.D = new OB(this);
        G(this, this.D);
        this.o = [];
        this.C = [];
        this.G = W.getCompanionBackfill();
        this.j = null };
    u(CT, H);
    var FT = function(a) { var b = a.o.shift();
            DT(a) && ET(a); return b },
        GT = function(a) { if (a.j) return a.j; if (0 < a.o.length) return a.j = null, Promise.resolve(FT(a)); if (!(0 < a.A.length || a.l)) return Promise.resolve(null);
            a.j = new Nl; return a.j.promise },
        DT = function(a) { return 0 < a.A.length && 1 > a.o.length && !a.l },
        HT = function(a) { SB(a.D, a.B, "adBreakFetched", a.J, !1, a);
            SB(a.D, a.B, "adBreakFetchError", a.K, !1, a) },
        ET = function(a) {
            S(a.D, a.B, "adBreakFetched", a.J, !1, a);
            S(a.D, a.B, "adBreakFetchError", a.K, !1, a);
            a.l = a.A.shift();
            var b = new AT;
            b.offset = a.F;
            b.sessionId = a.R;
            b.l = a.l;
            W.setCompanionBackfill("on_master_ad");
            IT(a.B, a.l.Qa, b)
        };
    CT.prototype.J = function(a) { var b = a.ob(); if (b.offset == this.F) { W.setCompanionBackfill(this.G);
            HT(this);
            this.l = null; var c = a.qe;
            this.C = [].concat(t(this.C), t(c));
            JT(this.C, this.F, this.I, this.A.length, this.L);
            this.o = [].concat(t(this.o), t(c));
            0 < this.o.length && (this.j && (c = this.j.resolve, this.j = null, c(FT(this))), I(this, a));
            DT(this) && ET(this);
            0 < this.A.length || this.l || KT(this, b) } };
    CT.prototype.K = function(a) { a = a.ob();
        a.offset == this.F && (W.setCompanionBackfill(this.G), HT(this), this.l = null, JT(this.C, this.F, this.I, this.A.length, this.L), DT(this) && ET(this), 0 < this.A.length || this.l || KT(this, a)) };
    var KT = function(a, b) { if (a.j) { var c = a.j.resolve;
            a.j = null;
            c(null) }
        0 == a.C.length && ("always" == W.getCompanionBackfill() && a.B.l.C(EQ()), b = new BT("adBreakFetchError", b), $L(AJ), I(a, b)) };
    CT.prototype.N = function() { W.setCompanionBackfill(this.G);
        HT(this);
        H.prototype.N.call(this) };

    function JT(a, b, c, d, e) { var f = LT(e, a),
            g = a.length + d;
        a.forEach(function(h, k) { var m = h.getAdPodInfo();
            m.Qe = g;
            m.fg = b;
            m.df = c;
            h && nN(h) && (m.Pd = k + 1, m.sd = f) }) }

    function LT(a, b) { var c = 0;
        a.forEach(function(e) {
            (e = e.getMaxDuration()) && (c += e) }); if (0 < c) return c; var d = 0;
        b.forEach(function(e) { e && nN(e) && (d += e.getDuration()) }); return 0 < d ? d : -1 };
    var MT = function(a, b, c, d) { E.call(this);
        this.C = a;
        G(this, this.C);
        this.B = b;
        this.A = c;
        this.o = d;
        a.o = [].concat(t(a.C));
        a = FT(a);
        this.D = this.j = this.A.create([a], this.B, this.o);
        this.l = null };
    u(MT, E);
    l = MT.prototype;
    l.cc = function() { return this.j };
    l.he = function() { var a = this,
            b, c; return Da(function(d) { if (1 == d.j) return b = NT(a), a.l = null, wa(d, b, 2);
            c = d.l; if (!c) throw Error("Called getNextManager when there are no more managers.");
            a.j = c; return d.return(a.j) }) };
    l.sc = function() { var a = this; return Da(function(b) { return 1 == b.j ? wa(b, NT(a), 2) : b.return(b.l) }) };
    l.Lf = function() { return this.cc() === this.D };
    l.N = function() { this.j.destroy();
        E.prototype.N.call(this) };
    var NT = function(a) { if (a.za()) return Promise.resolve(null); if (a.l) return a.l;
        a.l = new Promise(function(b) { GT(a.C).then(function(c) { a.za() ? b(null) : c ? b(a.A.create([c], a.B, a.o)) : b(null) }).catch(function() { b(null) }) }); return a.l };
    var OT = function() { H.call(this) };
    u(OT, H);
    l = OT.prototype;
    l.getAd = function() { return null };
    l.updateAdsRenderingSettings = function() {};
    l.expand = function() {};
    l.collapse = function() {};
    l.Ie = function() {};
    l.stop = function() {};
    l.destroy = function() {};
    l.init = function() {};
    l.start = function() {};
    l.pause = function() {};
    l.resume = function() {};
    l.skip = function() {};
    l.da = function() {};
    l.wb = function() {};
    l.getRemainingTime = function() { return 0 };
    l.getVolume = function() { return 0 };
    l.setVolume = function() {};
    l.Jb = function() {};
    l.resize = function() {};
    l.getDuration = function() { return 0 };
    l.pa = function() { return 0 };
    l.fc = function() { return null };
    l.clicked = function() {};
    l.getAdSkippableState = function() { return !1 };
    l.Ea = function() {};
    l.Qb = function() {};
    l.Rb = function() {};
    var PT = function(a) { E.call(this);
        this.j = a.slice();
        this.o = this.l = this.j.shift() };
    u(PT, E);
    l = PT.prototype;
    l.cc = function() { return this.l };
    l.he = function() { var a = this; return Da(function(b) { a.l = a.j.shift(); return b.return(a.cc()) }) };
    l.sc = function() { var a = this; return Da(function(b) { return a.za() ? b.return(Promise.resolve(null)) : 0 < a.j.length ? b.return(a.j[0]) : b.return(null) }) };
    l.Lf = function() { return this.cc() === this.o };
    l.N = function() { this.j.forEach(function(a) { return void a.destroy() });
        E.prototype.N.call(this) };
    var RT = function(a, b, c, d) { H.call(this);
        this.aa = a;
        this.Ca = b;
        this.ba = c;
        this.F = !1;
        this.Ka = 0;
        this.R = new OB(this);
        G(this, this.R);
        this.A = d;
        this.l = new OB(this);
        G(this, this.l);
        this.ya = new eQ;
        this.o = new Qy(dO(this.getAd()), new uS, eO(this.getAd())); if (null == this.getAd().j) throw $L(EJ);
        this.yd = ZK() ? new LR : OR();
        this.fb = this.L = null;
        QT(this) };
    u(RT, H);
    RT.prototype.fc = function() {};
    RT.prototype.Jb = function() {};
    RT.prototype.expand = function() {};
    RT.prototype.collapse = function() {};
    var QT = function(a) { var b = a.getAd();
        a.L = a.yd.I(b, a, a.o, b.A.omidAccessModeRules);
        a.fb = HH(function(c) { return void a.da(c) }) };
    RT.prototype.getAd = function() { return this.aa };
    RT.prototype.N = function() { this.ya.W();
        Z(this, "contentResumeRequested");
        Z(this, "allAdsCompleted");
        Gh(this.l); var a;
        null == (a = this.fb) || a.disconnect();
        H.prototype.N.call(this) };
    var Z = function(a, b, c) { I(a, new dM(b, a.getAd(), c)) };
    RT.prototype.Ea = function(a, b) { var c = {};
        c.url = a;
        c.attributionParams = b;
        Z(this, "navigationRequested", c) };
    var ST = function(a) { TB(a.R);
        RB(a.R, a.ba, "companion_display_error", function() {}); var b = a.ba.C(a.getAd());
        null != b && S(a.R, b, "companion_click", a.sa); if (!a.ba.Og()) throw XL(uJ); };
    RT.prototype.sa = function() {};
    var TT = function(a) { var b = a.getAd(); for (a = tN(b, "sodar"); !a && (b = b.l);) a = tN(b, "sodar");
        null != a && a.init() };
    RT.prototype.init = function() {};
    RT.prototype.da = function(a) { this.o.report(a) };
    RT.prototype.wb = function(a, b) { bz(this.o, b);
        b = this.o;
        a = a.getErrorCode();
        Lw("err");
        Q(R(), "aec", String(a));
        Ky(a, b.o);
        b.report("error") };
    var UT = function(a, b, c) { a.da(b);
        Z(a, b, c) };
    l = RT.prototype;
    l.pa = function() { return -1 };
    l.getDuration = function() { return -1 };
    l.getRemainingTime = function() { return -1 };
    l.pause = function() {};
    l.resume = function() {};
    l.skip = function() {};
    l.start = function() { if (!this.F) throw $L(sJ, null, "Must call init before start."); };
    l.getAdSkippableState = function() { return !1 };
    l.getVolume = function() { var a; return null != (a = this.Ka) ? a : 0 };
    l.setVolume = function(a) { isNaN(a) || 0 > a || 1 < a ? aM(this, zJ, null, "volume", String(a)) : this.Ka = a };
    l.Ie = function() { this.da("abandon") };
    var VT = function(a) { if (!a.Ca) { var b = { err: Pg("Disp cont null.\n" + Error().stack, 1500) };
            pL().report(64, b, !0) } return a.Ca };
    l = RT.prototype;
    l.Ee = function(a) { var b = a.type; if (-1 != TK.indexOf(b)) { if ("externalActivityEvent" == b && (b = a.getAdData().eventName, !VK(b))) return;
            UT(this, b) } };
    l.resize = function() {};
    l.updateAdsRenderingSettings = function() {};
    l.destroy = function() { var a = this;
        fQ(this.ya, function() { return a.W() }) };
    l.stop = function() { this.destroy() };
    l.clicked = function() {};
    l.Qb = function() {};
    l.Rb = function() {};
    var WT = function(a, b, c) { RT.call(this, a, b.j, b.o, c);
        this.B = null;
        this.fa = this.ka = -1;
        this.G = !1;
        this.K = [];
        this.j = b.j.Db() };
    u(WT, RT);
    l = WT.prototype;
    l.start = function() { RT.prototype.start.call(this);
        VT(this).wc();
        this.B = VT(this).Cb(); if (null != this.B) { this.da("show_ad");
            oh(this.B);
            this.Rg(); if (bL() && this.layout) { var a = this.layout.Ac();
                sO(); var b = new gz(this.getAd().o, this.o, VT(this).jf(), bL(), this.getAd().C);
                b.A = a;
                b.je();
                G(this, b) }
            this.Zc();
            this.K.forEach(function(c) { return void c() });
            this.K = [];
            this.G = !0 } };
    l.init = function() { if (!this.F) { this.F = !0;
            Z(this, "loaded"); var a = sO();
            S(this.l, a, TK, this.Ee) } };
    l.expand = function() { null != this.layout && this.layout.show();
        this.da("expand") };
    l.collapse = function() { null != this.layout && this.layout.hide();
        this.da("collapse") };
    l.Jb = function() { RT.prototype.Jb.call(this);
        this.Zc();
        this.G && this.da("overlay_resize") };
    l.resize = function(a, b) { RT.prototype.resize.call(this, a, b);
        this.ka = a;
        this.fa = b;
        this.Zc();
        this.G && this.da("overlay_resize") };
    l.N = function() { var a;
        null == (a = this.layout) || a.W();
        this.layout = null;
        this.j.clear();
        this.G = !1;
        sO();
        null != this.B && (oh(this.B), this.B = null);
        RT.prototype.N.call(this) };
    l.Rg = function() {
        var a = this;
        if (!this.layout) {
            var b = this.getAd().j;
            if (null == b) { var c = XL(EJ);
                XT(this, c); throw c; }
            try { ST(this) } catch (d) { throw XT(this, d), d; }
            bz(this.o, ZO(this.getAd()));
            c = HN(this.getAd()) || this.A.useStyledNonLinearAds;
            this.B && (this.layout = new YS(b, this.j, this.B, this.A.autoAlign, c, new DM), aG(this.j, GE, function() { return void a.Ec() }), aG(this.j, RE, function() { var d = b.bb(),
                        e = b.Vb();
                    UT(a, "click");
                    a.Ea(d, e) }), aG(this.j, XE, function() { Z(a, "userRecall") }), aG(this.j, TE, function() { return void a.Hf() }),
                this.layout.build())
        }
    };
    l.Zc = function(a, b) { a = void 0 === a ? 0 : a;
        b = void 0 === b ? 0 : b; if (null != this.layout) { var c = sj(VT(this).Cb()),
                d = this.ka,
                e = this.fa; if (-1 == d || -1 == e) d = c.width, e = c.height;
            c = sj(this.layout.Ac()); if (c.width + a > d || c.height + b > e) throw a = XL(BJ), XT(this, a), this.stop(), a; } };
    var XT = function(a, b) { var c = RO(b, a.getAd());
        a.wb(b, c) };
    l = WT.prototype;
    l.Ec = function() { this.da("close");
        Z(this, "userClose") };
    l.Hf = function() { var a = this; if (this.layout) { var b = this.layout.bc().getAd();
            this.G ? this.Bd(b) : this.K.push(function() { return a.Bd(b) }) } };
    l.Bd = function(a) { a && (bz(this.o, ZO(a)), UT(this, "impression"), this.da("creativeView"), UT(this, "start")) };
    l.Ee = function(a) { this.getAd().C == a.getAdData().queryId && RT.prototype.Ee.call(this, a) };
    l.toString = function() { return "nonlinearman" };
    var $T = function(a, b, c) { WT.call(this, a[0], b, c); var d = this;
        this.V = !1;
        this.D = [];
        this.P = !1;
        this.J = new Oi(200);
        G(this, this.J);
        this.I = 0;
        this.ga = [];
        this.T = new uS;
        this.ca = !1;
        a.forEach(function(e) { var f = e.j; if (null == f) f = $L(EJ), e = RO(f, e), d.wb(f, e);
            else { if (null == d.C) { var g = tN(e, "AdSense");
                    g && (d.C = g.o) } "Text" == f.getContentType() && (d.V = !0);!(e = YT(e)) || ZT(d) && !d.V || (f.J = e);
                d.D.push(f) } });
        0 != sN(this.getAd()).length && ST(this) };
    u($T, WT);
    l = $T.prototype;
    l.updateAdsRenderingSettings = function(a) { a.autoAlign = !0;
        WT.prototype.updateAdsRenderingSettings.call(this, a) };
    l.Rg = function() {
        var a = this;
        if (!this.layout && this.B) {
            if (0 == this.D.length) throw XL(EJ);
            null == this.C && (this.C = new DM);
            if (ZT(this)) { var b = XN(this.getAd(), this.A.disableUi),
                    c = aU(this);
                this.layout = new IS(this.D, this.j, this.B, this.C, c.text, !b, c.ek);
                S(this.l, this.J, "tick", this.mk) } else 1 == this.D.length ? this.layout = new YS(this.D[0], this.j, this.B, !0, !0, this.C) : this.layout = new NS(this.D, this.j, this.B, this.C);
            aG(this.j, RE, function(d) {
                var e = d.xPosition,
                    f = d.yPosition;
                d = a.layout.bc();
                var g = d.getAd(),
                    h = tN(g, "AdSense");
                h = new K(h.H);
                var k = sj(a.layout.Ac()),
                    m = sj(VT(a).Cb());
                e = ["0", "aw=" + k.width, "ah=" + k.height, "nx=" + e, "ny=" + f, "viewMode=" + (CA(m.width, m.height) ? "fullscreen" : "normal"), "sdkv=h.3.526.0", "eids=" + lw(), "bw=" + m.width, "bh=" + m.height];
                h.j.set("label", "elementclick");
                h.j.set("value", e.join(";"));
                a.T.l(h.toString());
                bU(a, g);
                a.da("click");
                cU(a);
                Z(a, "click");
                if (e = d.bb())(g = a.layout.kd()) && (e = yH(g.l, e)), a.Ea(e, d.Vb())
            });
            aG(this.j, TE, function() { return void a.Hf() });
            aG(this.j, GE, function() { return void a.Ec() });
            aG(this.j,
                XE,
                function() { Z(a, "userRecall") });
            aG(this.j, ZE, function() { Z(a, "skippableStateChanged") });
            aG(this.j, YE, function() { Z(a, "skip");
                a.Ec();
                dU(a) });
            aG(this.j, bF, function() { if (ZT(a)) { var d = YT(a.getAd());
                    a.Ea(d, null) } else a.layout && a.Ea(a.layout.bc().J, null) });
            aG(this.j, yE, function() { var d, e = tN(a.getAd(), "AdSense");
                e && (d = e.C);
                null == d && a.C && (d = a.C.o);
                d && a.Ea(d, null) });
            this.layout.build()
        }
    };
    l.mk = function() { this.I += .2; var a = new gF(this.I, this.getDuration());
        bG(this.j, hF, a);
        this.I >= this.getDuration() && (Z(this, "complete"), dU(this)) };
    l.init = function() { WT.prototype.init.call(this) };
    l.start = function() { WT.prototype.start.call(this);!this.P && ZT(this) && (this.P = !0, Z(this, "contentPauseRequested"), this.J.start()) };
    l.Ec = function() { var a = this;
        WT.prototype.Ec.call(this);
        this.D.forEach(function(b) { if (b = b.getAd()) bU(a, b), a.da("close"), cU(a) }) };
    var YT = function(a) { return (a = tN(a, "AdSense")) ? a.B : null },
        aU = function(a) { var b = tN(a.getAd(), "AdSense").l;
            b = null != b ? b : a.C.j; var c; if (c = !!YT(a.getAd())) c = ZT(a) && !a.V;
            a = { text: b, ek: c };
            null == a.text && (a.text = M("Ads by Google")); return a };
    $T.prototype.Hf = function() { var a = this; if (this.layout) { var b = this.layout.bc().getAd(); if (null != b) { this.aa = b; var c = b.getAdId();
                this.ga.includes(c) || (this.ga.push(c), this.G ? this.Bd(b) : this.K.push(function() { return a.Bd(b) })) } } };
    $T.prototype.Bd = function(a) { a && (this.aa = a, this.ca || (Z(this, "impression"), this.ca = !0), bU(this, a), this.da("impression"), this.da("creativeView"), this.da("start"), Z(this, "start"), cU(this)) };
    $T.prototype.Zc = function() { var a = ZT(this) ? 15 : 0,
            b = ZT(this) ? 65 : 0;
        WT.prototype.Zc.call(this, a, b) };
    var ZT = function(a) { return NN(a.getAd()) },
        dU = function(a) { a.J.stop();
            a.layout && (a.layout.W(), a.layout = null);
            sO();
            a.P && (a.P = !1, Z(a, "contentResumeRequested")) };
    l = $T.prototype;
    l.skip = function() { this.getAdSkippableState() && (Z(this, "skip"), this.Ec(), dU(this)) };
    l.getAdSkippableState = function() { if (ON(this.getAd())) { var a = rL(ON(this.getAd())); return -1 != a && this.pa() >= a } return !1 };
    l.pa = function() { return ZT(this) ? this.I : WT.prototype.pa.call(this) };
    l.getDuration = function() { return ZT(this) && null != this.C ? 15 : WT.prototype.getDuration.call(this) };
    l.getRemainingTime = function() { var a = this.getDuration(),
            b = this.pa(); return ZT(this) && 0 <= b && b <= a ? a - b : WT.prototype.getRemainingTime.call(this) };
    var bU = function(a, b) { a.o = new Qy(dO(b), a.T, eO(b));
            bz(a.o, ZO(b)) },
        cU = function(a) { a.o = new Qy(new Map, a.T) };
    $T.prototype.toString = function() { return "adsensenonlinearman" };
    var eU = function(a, b, c, d) { E.call(this);
        this.B = this.j = a;
        this.C = b;
        this.A = c;
        this.o = d;
        this.l = null };
    u(eU, E);
    l = eU.prototype;
    l.cc = function() { return this.j };
    l.he = function() { var a = this,
            b, c; return Da(function(d) { if (1 == d.j) return b = fU(a), a.l = null, wa(d, b, 2);
            c = d.l; if (!c) throw Error("Called getNextManager when there are no more managers.");
            a.j = c; return d.return(a.j) }) };
    l.sc = function() { var a = this; return Da(function(b) { return 1 == b.j ? a.j.getAd().Y ? b.return(null) : wa(b, fU(a), 2) : b.return(b.l) }) };
    l.Lf = function() { return this.cc() === this.B };
    l.N = function() { this.j.destroy();
        E.prototype.N.call(this) };
    var fU = function(a) { if (a.l) return a.l; var b = GN(a.j.getAd()); if (null == b) return Promise.resolve(null);
        a.l = new Promise(function(c) { b.ac(function(d) { if (a.za()) c(null);
                else { 1 < d.length && (d = d.slice(0, 1)); var e = d[0].getAdPodInfo(),
                        f = a.j.getAd().getAdPodInfo(),
                        g = f.getAdPosition();
                    e.Pd = g;
                    g = f.getIsBumper();
                    e.hh = g;
                    g = f.getMaxDuration();
                    e.sd = g;
                    g = f.getPodIndex();
                    e.df = g;
                    g = f.getTimeOffset();
                    e.fg = g;
                    f = f.getTotalAds();
                    e.Qe = f;
                    d = a.A.create(d, a.C, a.o);
                    c(d) } }, function() { return void c(null) }) }); return a.l };
    var gU = [{ type: "itag", Ib: 18 }, { type: "itag", Ib: 22 }],
        hU = [{ type: "itag", Ib: 22 }, { type: "itag", Ib: 18 }];

    function iU(a) { return new eN(null, a.j, a.oa, 0, 0, 0, a.getWidth() || 0, a.getHeight() || 0, a.getMediaUrl(), null) }

    function jU() { var a = gU;
        ck() && 1 != gL() && 2 != gL() || (a = hU); return a }
    var kU = function(a) { var b = void 0 === a ? {} : a,
            c = b.Td;
        a = void 0 === b.mimeTypes ? [] : b.mimeTypes; var d = void 0 === b.hj ? [] : b.hj;
        b = void 0 === b.Wa ? null : b.Wa;
        0 >= c && (c = ck() ? 500 : 1E3);
        0 == d.length && (d = jU());
        this.j = new LD(d);
        c = new fE(c);
        d = new lE;
        a = new nE({ Mg: a });
        this.l = new mE({ Wa: b, filters: [d, a], vh: c }) };
    var lU = function(a, b, c) { this.adBreakDuration = a.getMaxDuration();
        this.adPosition = a.getAdPosition();
        this.currentTime = b;
        this.duration = c;
        this.totalAds = a.getTotalAds() };
    var mU = function(a) { H.call(this);
        this.G = a;
        this.l = new OB(this);
        G(this, this.l);
        this.J = new mO;
        this.F = -1;
        this.A = this.L = !1;
        this.B = "" };
    u(mU, H);
    mU.prototype.N = function() { nU(this);
        H.prototype.N.call(this) };
    var nU = function(a) { TB(a.l);
            null != a.j && EL(a.j);
            null != a.C && a.C.W();
            a.C = null;
            a.J.clear();
            a.F = -1;
            a.B = "";
            a.L = !1;
            a.A = !1 },
        sU = function(a, b, c, d, e) {
            nU(a);
            a.j = c;
            DL(a.j);
            a.D = d;
            a.I = e;
            a.o = new oU(a.j);
            a.B = b.C;
            bL() && (b = sO(), S(a.l, b, "externalActivityEvent", a.T), S(a.l, b, "measurable_impression", a.aa), S(a.l, b, "viewable_impression", a.ba));
            S(a.l, a.j, "timeUpdate", a.R);
            T(a.l, a.j, "loadedmetadata", function() { return void pU(a, new Ih("loadedMetadata")) });
            T(a.l, a.j, "durationChange", function() { return void pU(a, new Ih("durationChange")) });
            T(a.l, a.j, "canplay", function() { return pU(a, new Ih("adCanPlay")) });
            S(a.l, a.j, "volumeChange", a.Sj);
            S(a.l, a.j, "pause", a.Lj);
            S(a.l, a.j, "play", a.Mj);
            S(a.l, a.j, "end", a.Jj);
            S(a.l, a.j, "beginFullscreen", a.V);
            S(a.l, a.j, "endFullscreen", a.P);
            S(a.l, a.j, "skip", a.K);
            S(a.l, a.j, "skipShown", a.Bg);
            S(a.l, a.j, "start", a.Pj);
            S(a.l, a.j, "error", a.ei);
            S(a.l, a.j, "mediaLoadTimeout", a.fi);
            S(a.l, a.j, "autoplayDisallowed", a.di);
            T(a.l, a.j, "loaded", function() { return qU(a, "loaded") });
            rU(a, a.D, a.I)
        },
        rU = function(a, b, c) {
            null != b && null !=
                c && (aG(c, cF, function() { return void pU(a, new dM("videoClicked")) }), aG(c, YE, function() { return void a.K() }), aG(c, ZE, function() { return void a.Bg() }), aG(c, xE, function() { tU(a, "skip", !0, !1) }), aG(c, EE, function() { return void pU(a, new dM("authorIconClicked")) }), aG(c, FE, function() { return void pU(a, new dM("titleClicked")) }), aG(c, zE, function() { return void pU(a, new dM("authorNameClicked")) }), aG(c, PE, function() { return void pU(a, new dM("learnMoreClicked")) }), aG(c, aF, function(d) { return void uU(d) }), aG(c, $E, function(d) {
                    return void vU(a,
                        d.clickthroughUrl, d.l, d.A)
                }), aG(c, OE, function() { return void pU(a, new dM("iconFallbackImageClosed")) }), aG(c, bF, function() { return void vU(a, b ? a.D.D : null, null) }))
        },
        tU = function(a, b, c, d) { if (!c || null == a.J.get(b))
                if (!d || a.A) a.J.set(b, !0), qU(a, b), I(a, b) },
        qU = function(a, b) { if (a.D && a.D.j) { if ("click" == b) return; "learnMoreClicked" == b && a.G.report("click") } "error" != b && a.G.report(b) };
    mU.prototype.aa = function(a) { a.getAdData().queryId == this.B && tU(this, "measurable_impression", !0, !0) };
    mU.prototype.ba = function(a) { a.getAdData().queryId == this.B && tU(this, "viewable_impression", !0, !0) };
    mU.prototype.T = function(a) { a = a.getAdData() || {}; var b = a.eventName;
        a = VK(b) && a.queryId == this.B ? b : null;
        null != a && tU(this, a, !0, !0) };
    mU.prototype.R = function() { if (this.A) { var a = this.j.getDuration(); - 1 != a && (this.j.l >= .25 * a && tU(this, "firstQuartile", !0, !0), this.j.l >= .5 * a && tU(this, "midpoint", !0, !0), this.j.l >= .75 * a && tU(this, "thirdQuartile", !0, !0), $y(this.G, this.j.l, 1E3 * a));
            wU(this) } };
    var wU = function(a) { 0 > a.F || a.L || !(a.j.l >= a.F || a.j.B) || !a.A || (a.L = !0, tU(a, "engagedView", !0, !0)) };
    l = mU.prototype;
    l.Pj = function() { this.A = !0;
        tU(this, "impression", !0, !0);
        tU(this, "creativeView", !0, !0);
        tU(this, "start", !0, !0);
        this.o.j = this.j.isMuted();
        this.o.volume = this.j.getVolume();
        (this.o.j || 0 == this.o.volume) && tU(this, "mute", !1, !1) };
    l.Sj = function() { var a = this.j.isMuted(),
            b = this.j.getVolume(),
            c = this.o;
        c.j && !a || !a && 0 == c.volume && 0 < b ? tU(this, "unmute", !1, !1) : this.o.muted(a, b) && tU(this, "mute", !1, !1);
        this.o.j = a;
        this.o.volume = b };
    l.Lj = function() { this.j.B ? (wU(this), tU(this, "complete", !0, !0)) : this.j.A && (this.o.paused = !0, tU(this, "pause", !1, !1)) };
    l.Mj = function() { this.o.paused && (this.o.paused = !1, tU(this, "resume", !1, !1)) };
    l.Jj = function() { wU(this);
        tU(this, "complete", !0, !0) };
    l.hf = function() { tU(this, "click", !1, !1) };
    l.ei = function() { tU(this, "error", !1, !1) };
    l.fi = function() { tU(this, "mediaLoadTimeout", !1, !1) };
    l.di = function() { tU(this, "autoplayDisallowed", !1, !1) };
    l.Bg = function() { tU(this, "skipShown", !0, !1) };
    var uU = function(a) { a.B.forEach(function(b) { kL(b) }) },
        vU = function(a, b, c, d) { d = void 0 === d ? [] : d; var e = {};
            b = (e.clickThroughUrl = b, e.attributionParams = c, e);
            I(a, new dM("videoIconClicked", null, b));
            d.forEach(function(f) { kL(f) }) },
        pU = function(a, b) { tU(a, b.type, !1, !1) };
    mU.prototype.K = function() { tU(this, "skip", !0, !1) };
    mU.prototype.V = function() { tU(this, "fullscreen", !1, !1) };
    mU.prototype.P = function() { tU(this, "exitFullscreen", !1, !1) };
    var oU = function(a) { this.paused = !1;
        this.j = a.isMuted();
        this.volume = a.getVolume() };
    oU.prototype.muted = function(a, b) { return !this.j && a || 0 != this.volume && 0 == b };

    function xU(a) { if (Object.values(uz).includes(a)) return a;
        a = Number.parseInt(a, 10); return Number.isNaN(a) ? "left" : a }

    function yU(a) { if (Object.values(vz).includes(a)) return a;
        a = Number.parseInt(a, 10); return Number.isNaN(a) ? "top" : a }

    function zU(a, b) { var c = xU(a.xPosition),
            d = yU(a.yPosition),
            e = a.o.map(function(g) { var h = {}; return h.width = g.widthPx, h.height = g.heightPx, h.imageUrl = g.j, h.alternateText = g.altText, h }),
            f = {}; return f.id = b, f.width = a.widthPx, f.height = a.heightPx, f.pixelRatio = a.C, f.xPosition = c, f.yPosition = d, f.offset = a.offsetMs, f.duration = a.durationMs, f.imageUrl = a.j, f.alternateText = a.altText, f.fallbackImages = e, f };
    var AU = function(a, b) { b = void 0 === b ? null : b;
        Ih.call(this, a);
        this.l = b };
    u(AU, Ih);
    var CU = function(a) { H.call(this);
        this.o = a;
        this.A = new OB(this);
        G(this, this.A);
        this.j = new BU;
        this.l = !1;
        S(this.A, this.o, "nativeUi", this.B) };
    u(CU, H);
    var EU = function(a) { a.l || (a.l = !0, DU(a)) },
        FU = function(a, b) { a.j.l = b;
            DU(a) };
    CU.prototype.reset = function() { this.j = new BU;
        DU(this);
        this.l = !1 };
    var DU = function(a) { if (a.l) { var b = a.j; var c = {},
                d = {};
            b = (d.iconsView = b.l, d.skipView = (c.state = b.j, c.skipText = b.skipText, c), d);
            OK(a.o, "nativeUi", "updateUiState", b) } };
    CU.prototype.B = function(a) { switch (a.ab) {
            case "iconClicked":
                I(this, new AU("iconClicked", a.Va)); break;
            case "iconRendered":
                I(this, new AU("iconRendered", a.Va)); break;
            case "skipButtonClicked":
                I(this, new AU("skipButtonClicked")) } };
    var BU = function() { this.skipText = "";
        this.j = "skipStateHidden";
        this.l = {} };
    var GU = ["image/jpeg", "image/jpg", "image/png"],
        HU = function(a, b, c) { E.call(this);
            this.j = a;
            this.A = b;
            this.o = c.filter(function(d) { var e = d.D; return null != e && GU.includes(e.toLowerCase()) && null != d.j });
            this.l = new OB(this);
            G(this, this.l);
            S(this.l, this.j, "iconClicked", this.B);
            S(this.l, this.j, "iconRendered", this.C);
            a = {};
            FU(this.j, (a.icons = this.o.map(function(d, e) { return zU(d, e) }), a.iconsFallbackImageCloseText = "OK", a.iconsFallbackImageErrorText = "The requested information could not be loaded.", a)) };
    u(HU, E);
    HU.prototype.B = function(a) {
        (a = IU(this, a.l)) && bG(this.A, $E, a) };
    HU.prototype.C = function(a) {
        (a = IU(this, a.l)) && bG(this.A, aF, a) };
    var IU = function(a, b) { if (!b || null == b.id) return null;
        b = b.id; return 0 > b || b >= a.o.length ? null : a.o[b] };
    var LU = function(a, b, c) { E.call(this);
        this.o = c;
        this.B = a;
        this.l = b;
        a = this.o;
        this.j = 0 > a ? 1 : 0 == a ? 3 : 2;
        this.A = 0;
        this.C = new OB(this);
        G(this, this.C);
        JU(this);
        KU(this);
        3 == this.j && bG(this.l, ZE, null) };
    u(LU, E);
    var JU = function(a) { T(a.C, a.B, "skipButtonClicked", function() { 3 == a.j && bG(a.l, YE, null) });
        aG(a.l, hF, a.D, a);
        Hh(a, function() { YF(a.l.j, hF.toString(), a.D, a) }) };
    LU.prototype.D = function(a) {!a || 0 >= a.durationSeconds || this.o >= a.durationSeconds || 1 == this.j || 3 == this.j || (this.A = a.currentTimeSeconds, this.A > this.o ? (this.j = 3, bG(this.l, ZE, null)) : this.j = 2, KU(this)) };
    var KU = function(a) { var b = "skipStateHidden",
            c = ""; if (3 == a.j) b = "skipStateSkippable", c = jb("Skip Ad ");
        else if (2 == a.j) { b = "skipStatePreSkip";
            c = Math.ceil(a.o - a.A); var d = c.toString();
            60 <= c && (d = Zx(c));
            c = CF({ We: d }) }
        a = a.B; if (a.j.j != b || a.j.skipText != c) a.j.j = b, a.j.skipText = c, DU(a) };
    var MU = function(a, b, c) { E.call(this);
        this.l = a;
        this.j = b;
        this.o = c;
        this.A = !1 };
    u(MU, E);
    l = MU.prototype;
    l.build = function() { var a = this;
        aG(this.j, ZE, this.Cg, this);
        Hh(this, function() { YF(a.j.j, ZE.toString(), a.Cg, a) }); var b = new LU(this.l, this.j, this.o.C);
        G(this, b);
        b = new HU(this.l, this.j, this.o.icons);
        G(this, b);
        EU(this.l) };
    l.N = function() { this.l.reset();
        E.prototype.N.call(this) };
    l.ph = function() { this.A && bG(this.j, xE, null) };
    l.De = function() {};
    l.getConfig = function() { return this.o };
    l.oh = function() {};
    l.Cg = function() { this.A = !0 };
    var NU = function(a, b, c, d, e) { e = void 0 === e ? !1 : e;
        RT.call(this, a, b.j, b.o, c); var f = this;
        this.J = b.l;
        this.Ma = b;
        this.B = this.j = null;
        this.C = b.j.Db();
        this.D = new mU(this.o);
        this.ca = new fJ(this.C, this.getAd().isSkippable());
        this.P = d;
        this.V = this.G = !1;
        this.ka = this.ga = this.I = 1;
        this.fa = null;
        this.T = !1;
        this.Na = function() { var g = {}; return g.currentTime = f.pa(), g.duration = f.getDuration(), g.isPlaying = !0, g.isVpaid = null != rN(f.getAd()), g.isYouTube = !1, g.volume = f.getVolume(), g };
        this.ma = null;
        this.tb = e;
        b.A.push(this.toString()) };
    u(NU, RT);
    NU.prototype.N = function() { vO(this.getAd()); var a;
        null == (a = this.B) || a.W();
        this.B = null;
        this.C.clear();
        Gh(this.D);
        Gh(this.o);
        this.V = !1;
        this.G && (a = this.G = !1, null != VT(this) && (a = X().C), this.j.reset(a)); var b;
        null == (b = this.j) || KL(b);
        xT(this.J, this.j);
        RT.prototype.N.call(this) };
    var OU = function(a, b) { if (!a.G) { a.G = !0;
                uO(a.getAd(), a.Na);
                sO().B = b; if (null != a.L) { var c = a.L;
                    c.B = b;
                    S(c.C, c.B, "start", c.T) }
                c = a.A.loadVideoTimeout;
                0 < c && (b.P = c);
                c = a.getAd().o;
                c = c instanceof xz ? 0 < c.j.length ? c.j[0] : null : null; var d = a.getAd().B;
                d.l = Date.now();
                d.j = null;
                GL(b, a.fc() || "", c, a.getAd().getAdPodInfo());
                W.A && W.G && (b = a.fc(), c = {}, c.mediaUrl = b, I(a, new dM("mediaUrlPinged", null, c))) } },
        QU = function(a, b) {
            if (X().D) { var c = new CU(a.Ma.B); return new MU(c, a.C, b) }
            b = new cT(b, a.C, document.body, XN(a.getAd(), a.A.disableUi), !0, a.tb);
            aG(a.C, UE, function() { PU(a) });
            aG(a.C, tE, function() { a.pause() });
            aG(a.C, uE, function(d) { a.Ea(d, null) });
            aG(a.C, vE, function(d) { switch (d.type) {
                    case 1:
                        d.j && Z(a, "resetPaidData"); var e = {};
                        Z(a, "setPaidV2UserEnabled", (e.paidV2UserEnabled = d.l, e)); break;
                    case 2:
                        e = {}, Z(a, "updateGfpCookie", (e.gfpCookieUserEnabled = d.l, e.gfpCookieClearData = d.j, e)) } });
            return b
        };
    NU.prototype.sa = function(a) { RT.prototype.sa.call(this, a);
        CI(this.P, 1) };
    var RU = function(a, b) { S(a.l, b, "loaded", a.Qj);
            S(a.l, b, "timeUpdate", a.Rj);
            S(a.l, b, "waiting", a.Tj);
            T(a.l, b, "volumeChange", function() { var c = b.getVolume();
                c != a.I && (a.I = c, Z(a, "volumeChange", { volume: c }), 0 == c && Z(a, "mute")) });
            S(a.l, b, "focusSkipButton", a.Kj);
            T(a.l, b, "seeked", function() { return void I(a, "seeked") });
            T(a.l, b, "seeking", function() { return void I(a, "seeking") }) },
        TU = function(a) { var b = a.getAd().j,
                c = b.j; if (null != c) return c;
            a = SU(a, a.getAd());
            null != a && (b.j = a); return a },
        SU = function(a, b) {
            var c = a.getAd().o;
            if (Cx.isSelected()) { var d = new kU({ Td: a.A.bitrate, Mm: VT(a).kg(), Wa: a.j }); if (c instanceof xz) { a = null; var e = tN(b, "GoogleHostedMediaExtension");
                    e && (e = qB(d.j, e.l), 0 < e.length && (a = e[0]));
                    a || (b = d.l.l(oN(b), c), 0 < b.length && (b = b[0], a = new Lz({ jh: b.url, mimeType: b.mimeType, oa: b.codec, ra: b.codec, height: b.height, width: b.width, itag: null, Bb: null })));
                    a && (c.j.length = 0, c.j.push(a));
                    c = a; if (c instanceof Lz) return iU(c) } return null }
            if (d = tN(b, "GoogleHostedMediaExtension"))
                if (d = qB(new LD(jU()), d.l), 0 < d.length)
                    for (d = p(d), e =
                        d.next(); !e.done; e = d.next())
                        if (e = e.value, e instanceof Lz) return iU(e);
            d = dL(a.A.mimeTypes || []);
            c = (new iE({ Td: a.A.bitrate, mimeTypes: d, Wa: null })).l(oN(b), c);
            return 0 < c.length ? c[0] : null
        };
    l = NU.prototype;
    l.init = function() { if (this.F) UU(this);
        else { this.F = !0; if (UN(this.getAd()) && ZK()) { Q(R(), "bia", "1"); var a = XL(yJ, null, "action") } else a = X().L, a = this.getAd().isSkippable() && !$K(a) ? XL(yJ, null, "skippablevideo") : null; if (a) throw VU(this, this.j, yJ, a), a;
            this.fa = TU(this);
            null == this.fa ? WU(this, XL(GJ)) : (UU(this), XU(this)) } };
    l.getAdSkippableState = function() { var a; if (this.j) { if (a = !!ON(this.getAd())) a = rL(ON(this.getAd())), a = this.j.l >= a } else a = !1; return a };
    l.skip = function() { this.j && this.getAd().isSkippable() && (null != this.B ? this.B.ph() : (this.da("skip"), Z(this, "skip"), this.destroy())) };
    l.start = function() {
        if (this.ma) YU(this, this.j);
        else {
            RT.prototype.start.call(this);
            try {
                a: {
                    Z(this, "contentPauseRequested");this.j || (this.j = wT(this.J), this.j || (yT(this.J), this.j = wT(this.J)));
                    var a = this.getAd().o;
                    if (a instanceof xz) { var b = rI(a);
                        b && (this.getAd().tb = b) }
                    if (this.A.useVideoAdUi || X().D) {
                        var c = this.getAd(),
                            d = this.A,
                            e = IN(c),
                            f = d.useStyledLinearAds;
                        var g = ZK() ? !1 : AA() && !(IN(c) && AA() && X().ya) || TN(c) || UN(c) || MN(c) || LN(c) || f ? !0 : !1;
                        var h = (uN(c).get("AdSense") || []).pop(),
                            k = null != h && h.Mc(),
                            m = h ? h.B : null,
                            n = g || k || d.useStyledLinearAds;
                        if (WN(c)) { var r = tN(c, "GpidWtaExtension"),
                                q = YN(c),
                                y = null == r ? void 0 : r.l,
                                x = new VS;
                            x.icons = q;
                            x.l = !1;
                            x.o = !1;
                            x.j = !1;
                            x.A = !1;
                            x.B = !1;
                            x.C = -1;
                            WS(q) && Lx.isSelected() && (x.attributionData = y); var A = x } else if (n) { var L = D(QN(c)),
                                F = g || k || d.useLearnMoreButton; if (w(L) || !vA(L)) F = !1;
                            a = F; var na = US(c, 0);
                            na.j = a;
                            na.H = d.j;!e || TS(na, d.uiElements);
                            WS(YN(c)) || w(D(m)) || (na.D = m);
                            A = na } else {
                            if (VN(c, gJ) || VN(c, ["402"])) { var oa = US(c);
                                oa.B = !0;
                                WS(YN(c)) || w(D(m)) || (oa.D = m); var Ga = oa } else {
                                var Sa = US(c);
                                Sa.A = !1;
                                Sa.l = !1;
                                Sa.o = !1;
                                TS(Sa, d.uiElements);
                                Ga = Sa
                            }
                            A = Ga
                        }
                        this.B = QU(this, A);
                        this.B.build();
                        if (null != this.getAd().tb && A.H) { var Ha = this.ca,
                                re = this.getAd().o;
                            Ha.j = re instanceof xz ? sI(re) : null;
                            Ha.l = re instanceof xz ? tI(re) : null;
                            Ha.j && Ha.j.j && (Ha.j.title && bG(Ha.o, sE, Ha.j.title), Ha.l && Ha.l.title && bG(Ha.o, qE, Ha.l.title), Ha.l && Ha.l.thumbnailUrl && bG(Ha.o, pE, Ha.l.thumbnailUrl)) }
                        var Jj = this.getAd(),
                            Rm = A.getUiElements();
                        Jj.Ma = Rm
                    }
                    var qh = this.j;OK(qh.o, qh.j, "activate");
                    var $e = this.j;sU(this.D, this.getAd(), $e, this.B ? this.B.getConfig() :
                        null, this.C);S(this.l, this.D, "adCanPlay durationChange engagedView authorIconClicked authorNameClicked videoClicked videoIconClicked iconFallbackImageClosed learnMoreClicked muteClicked titleClicked unmuteClicked start loadedMetadata".split(" "), this.K);
                    var rh = new gz(this.getAd().o, this.o, $e, bL(), this.getAd().C);rh.je();G(this, rh);
                    if (TN(this.getAd())) {
                        var sb = this.getAd().o;
                        if (sb instanceof xz) {
                            var Ta = this.P;
                            Ta.A = sb;
                            Ta.o = $e;
                            Ta.F = rI(Ta.A);
                            var Kj = Ta.A;
                            if (Kj) { var nc = qI(Kj); var Lj = nc ? nc.A : null } else Lj =
                                null;
                            Ta.J = Lj;
                            var sh;
                            if (!(sh = Dx.isSelected() && !sb.trackingEvents.has("engagedView"))) { var Tf; if (!(Tf = Ta.K || !Ta.F || !pI(Ta.A))) { var th = Ta.A;
                                    Tf = !(0 < th.j.length && th.j[0]) }
                                sh = Tf }
                            if (!sh) { var Mj = Ta.A.clientPlaybackNonce;
                                null != Mj && (Ta.T = Mj, Ta.D = !0, Mw("vss_tr"), S(Ta.B, Ta.o, "timeUpdate", Ta.aa), S(Ta.B, Ta.o, "end", Ta.ca), Ta.j = 10) }
                        }
                    }
                    RU(this, $e);S(this.l, this.D, "impression", this.K, !1, this);ZU(this, $e);OU(this, this.j);
                    var Sm = this.setVolume,
                        uh = tN(this.getAd(), "AdSense");Sm.call(this, null != uh && null != uh.o && uh.o.A ? 0 :
                        this.ka);this.da("show_ad");VT(this).Oe();
                    try { ST(this) } catch (Uf) { VU(this, this.j, uJ, Uf); break a }
                    JL(this.j)
                }
            }
            catch (Uf) { WU(this, Uf) }
        }
    };
    l.getVolume = function() { return this.G && this.j ? this.j.isMuted() ? 0 : this.j.getVolume() : this.I };
    l.setVolume = function(a) { this.G && this.j ? this.j.setVolume(a) : this.I = a;
        this.ka = a };
    l.pause = function() { this.j && this.j.pause() };
    l.resume = function() { this.j && JL(this.j) };
    l.pa = function() { return this.j ? this.j.l : -1 };
    l.getDuration = function() { return this.j ? this.j.getDuration() : -2 };
    l.getRemainingTime = function() { var a = this.getDuration(),
            b = this.pa(); return 0 <= a && 0 <= b ? Math.max(0, a - b) : -1 };
    var YU = function(a, b) { FN(a.getAd());
            VU(a, b, PJ, XL(PJ, b.getError())) },
        VU = function(a, b, c, d) { $U(a, b, d);
            aM(a, c, d);
            a.destroy() },
        $U = function(a, b, c) { c = XL(PJ, c);
            b = RO(c, a.getAd(), b);
            a.wb(c, b) },
        ZU = function(a, b) {
            bz(a.o, ZO(a.getAd(), b));
            var c = a.getAd().j;
            null != c && c instanceof hN && (SK.forEach(function(d) { S(a.l, a.D, d, a.K, !1, a) }), c = a.l, T(c, a.D, "error", function() { return void YU(a, b) }), T(c, a.D, "mediaLoadTimeout", function() { a.getAd().B.j = Date.now();
                VU(a, b, JJ, XL(JJ, null, (a.A.loadVideoTimeout / 1E3).toString())) }), T(c, a.D,
                "autoplayDisallowed",
                function() { var d = XL(PJ),
                        e = XL(tJ);
                    d.j = e;
                    VU(a, b, PJ, d) }));
            a.getAd().isSkippable() && (a.D.F = 30)
        },
        aV = function(a) { a.T && (Z(a, "click"), a.Ea(QN(a.getAd()), a.getAd().j.Vb())) };
    NU.prototype.K = function(a) {
        switch (a.type) {
            case "start":
                TT(this);
                this.T = !0;
                this.B && this.B.oh();
                Lw("ff");
                a = this.D;
                var b = VT(this).Ef();
                b || a.D || !a.j || S(a.l, a.j, "click", a.hf);
                if (b) { a.C = new vS;
                    S(a.l, a.C, "click", a.hf, !1); var c = a.C;
                    null == b || c.B || (c.j = b, zS(c), c.B = !0) }
                a.I && aG(a.I, AE, a.hf, a);
                this.getAd().Y = !0;
                Z(this, "start");
                break;
            case "impression":
                this.getAd().Y = !0;
                Z(this, "impression");
                break;
            case "viewable_impression":
                Z(this, "viewable_impression");
                break;
            case "measurable_impression":
                Z(this, "measurable_impression");
                break;
            case "pause":
                bG(this.C, dF, !0);
                Z(this, "pause");
                break;
            case "resume":
                bG(this.C, dF, !1);
                Z(this, "resume");
                break;
            case "firstQuartile":
                Z(this, "firstQuartile");
                break;
            case "midpoint":
                Z(this, "midpoint");
                break;
            case "thirdQuartile":
                Z(this, "thirdQuartile");
                break;
            case "complete":
                Z(this, "complete");
                this.destroy();
                break;
            case "loadedMetadata":
                Z(this, "loadedMetadata");
                break;
            case "durationChange":
                Z(this, "durationChange");
                break;
            case "adCanPlay":
                Z(this, "adCanPlay");
                break;
            case "click":
                aV(this);
                this.pause();
                break;
            case "engagedView":
                Z(this, "engagedView");
                break;
            case "videoClicked":
                PU(this);
                Z(this, "videoClicked");
                break;
            case "videoIconClicked":
                I(this, a);
                X().F || (a = a.getAdData(), this.Ea(a.clickThroughUrl, a.attributionParams));
                this.pause();
                break;
            case "iconFallbackImageClosed":
                Z(this, "iconFallbackImageClosed");
                break;
            case "authorIconClicked":
                bV(this);
                break;
            case "authorNameClicked":
                bV(this);
                break;
            case "learnMoreClicked":
                CI(this.P, 3);
                aV(this);
                this.pause();
                break;
            case "titleClicked":
                b = this.ca;
                if (b.j && b.j.j)
                    if (a = b.j.id,
                        b = b.A, b = void 0 === b ? !1 : b, null == a) a = null;
                    else { c = new K("//www.youtube.com/watch"); var d = c.j;
                        d.set("v", a);
                        d.set("feature", b ? "trueview-instream" : "instream");
                        vm(c, d);
                        a = c.toString() }
                else a = null;
                null !== a && (this.pause(), this.Ea(a, null));
                break;
            case "muteClicked":
                this.ga = this.I;
                this.setVolume(0);
                break;
            case "unmuteClicked":
                this.setVolume(this.ga);
                break;
            case "skipShown":
                Z(this, "skippableStateChanged");
                break;
            case "skip":
                Z(this, "skip");
                this.destroy();
                break;
            case "fully_viewable_audible_half_duration_impression":
                Z(this,
                    "fully_viewable_audible_half_duration_impression")
        }
    };
    var PU = function(a) { a.j && (a.j.A ? a.resume() : a.pause()) };
    l = NU.prototype;
    l.fc = function() { var a = TU(this); return null == a ? null : a.url };
    l.clicked = function() { if (this.getAd().R && this.T) { var a = {};
            a = (a.url = QN(this.getAd()), a.attributionParams = this.getAd().j.Vb(), a);
            UT(this, "click", a);
            this.pause() } else this.getAd() };
    l.Qj = function() { this.getAd().B.j = Date.now() };
    l.Ah = function(a, b) { return 0 <= b && 0 <= a };
    l.Rj = function() { var a = this.pa(),
            b = this.getDuration(); if (this.Ah(a, b)) { var c = new lU(this.getAd().getAdPodInfo(), a, b);
            Z(this, "adProgress", c) } if (null != this.B && 0 <= b && 0 <= a) { if (!(this.V || 3 > this.getAd().P)) { c = this.j.getDuration(); var d = RN(this.getAd());
                c = Math.abs(c - d);
                2 < c && (c = XL(MJ, null, Number(c).toFixed(2)), d = RO(c, this.getAd(), this.j), this.wb(c, d));
                this.V = !0 }
            c = this.getAd().getAdPodInfo();
            a = new gF(a, b, this.j ? this.j.C : -1, c.getAdPosition(), c.getTotalAds());
            bG(this.C, hF, a) } };
    l.Kj = function() { this.B && bG(this.C, NE, null) };
    l.Tj = function() { Z(this, "adBuffering") };
    var bV = function(a) { var b, c = a.ca; if (c.j && c.j.j)
            if (c.l) { var d = void 0 === d ? null : d;
                (b = void 0 === b ? null : b) || (b = "//www.youtube.com/");
                d ? b += d : (c = D(c.l.id), b = w(c) ? null : b + "channel/" + (fb(c, "UC") && 24 == c.length ? c : "UC" + c)) } else b = null;
        else b = null;
        b && (a.pause(), a.Ea(b, null)) };
    NU.prototype.Jb = function() { RT.prototype.Jb.call(this);
        null != this.B && this.B.De() };
    NU.prototype.resize = function(a, b) { RT.prototype.resize.call(this, a, b);
        null != this.B && this.B.De() };
    var XU = function(a) { a.A.enablePreloading && aL() && (a.j = wT(a.J), a.j && (RU(a, a.j), T(a.l, a.j, "error", function(b) { a.ma = b }), DL(a.j), OU(a, a.j))) },
        WU = function(a, b) { $U(a, a.j, b);
            b instanceof jJ ? I(a, new ZL(b)) : aM(a, PJ, b);
            a.destroy() },
        UU = function(a) { Z(a, "loaded");
            Z(a, "adMetadata") };
    NU.prototype.toString = function() { return "videoman" };
    var cV = function() { NU.apply(this, arguments) };
    u(cV, NU);
    cV.prototype.K = function(a) { switch (a.type) {
            case "complete":
                Z(this, "complete"); break;
            default:
                NU.prototype.K.call(this, a) } };
    cV.prototype.Ah = function(a, b) { return (0 <= b || -2 == b) && 0 <= a };
    cV.prototype.getDuration = function() { return NU.prototype.getDuration.call(this) + SN(this.getAd()) };
    var dV = function(a) { this.j = a };
    l = dV.prototype;
    l.Ef = function() { return this.j.Ef() };
    l.Cb = function() { return this.j.Cb() };
    l.jf = function() { return this.j.jf() };
    l.kg = function() { return this.j.kg() };
    l.hide = function() {};
    l.Oe = function() { this.j.Oe() };
    l.le = function() { this.j.hide() };
    l.wc = function() { this.j.wc() };
    l.Gc = function() { this.j.Gc() };
    l.Db = function() { return this.j.Db() };
    l.Zf = function(a) { this.j.Zf(a) };
    l.ag = function() { this.j.ag() };
    var fV = function(a, b, c) { gT.call(this, a.cc());
        this.L = eV(this, this.j);
        this.l = a;
        this.B = b;
        this.F = this.G = -1;
        this.J = 1;
        this.A = c;
        this.C = this.o = this.I = this.K = this.D = !1 };
    u(fV, gT);
    fV.prototype.resize = function(a, b) { this.G = a;
        this.F = b;
        gT.prototype.resize.call(this, a, b) };
    fV.prototype.start = function() { this.I = !0;
        gV(this) };
    var gV = function(a) { if (!a.o && !a.C) { a.o = !0; var b = a.j.getAd();
            b && !b.isLinear() && hV(a);
            gT.prototype.start.call(a) } };
    l = fV.prototype;
    l.setVolume = function(a) { this.J = a;
        gT.prototype.setVolume.call(this, a) };
    l.updateAdsRenderingSettings = function(a) { this.A = a;
        gT.prototype.updateAdsRenderingSettings.call(this, a) };
    l.stop = function() { this.l.W();
        gT.prototype.stop.call(this) };
    l.destroy = function() { this.l.W();
        gT.prototype.destroy.call(this) };
    l.N = function() { gT.prototype.N.call(this);
        this.j.W() };
    var iV = function(a, b) { var c, d, e; return Da(function(f) { if (1 == f.j) return a.C = !0, c = b.getError() || XL(PJ), wa(f, a.l.sc(), 2);
                (d = f.l) ? (e = new dM("log", null, c), I(a, e)) : I(a, b);
                a.j.destroy();
                f.j = 0 }) },
        lV = function(a, b) {
            var c, d;
            return Da(function(e) {
                switch (e.j) {
                    case 1:
                        return wa(e, a.l.sc(), 2);
                    case 2:
                        c = e.l;
                    case 3:
                        return c && c.za() ? wa(e, a.l.he(), 5) : c ? wa(e, a.l.he(), 7) : (jV(a, c), I(a, b), a.W(), e.return());
                    case 5:
                        return wa(e, a.l.sc(), 6);
                    case 6:
                        c = e.l;
                        e.j = 3;
                        break;
                    case 7:
                        d = e.l, jV(a, d), a.j.za() || a.j.W(), a.j = d, a.C = !1, a.o = !1, a.I ?
                            (kV(a), gV(a)) : kV(a), e.j = 0
                }
            })
        },
        mV = function(a) { var b; return Da(function(c) { if (1 == c.j) return wa(c, a.l.sc(), 2); if (b = c.l) { var d = b.getAd();
                    d && !d.isLinear() && hV(a) } else hV(a);
                c.j = 0 }) },
        hV = function(a) {!a.K && a.D && (a.K = !0, hT(a, "contentResumeRequested")) },
        kV = function(a) { if (a.l.Lf()) throw Error("1st manager initialization is done by publisher calling ad pod manager api."); var b;
            null == (b = a.L) || b.W();
            a.L = eV(a, a.j);
            a.updateAdsRenderingSettings(a.A);
            a.setVolume(a.J);
            a.resize(a.G, a.F);
            a.init() },
        oV = function(a, b, c) {
            T(c,
                b, RK,
                function(d) { return I(a, d) });
            T(c, b, "contentResumeRequested", function() { return void mV(a) });
            T(c, b, "adError", function(d) { return void iV(a, d) });
            T(c, b, "allAdsCompleted", function(d) { return void lV(a, d) });
            T(c, b, "contentPauseRequested", function() { a.D || (hT(a, "contentPauseRequested"), a.D = !0) });
            T(c, b, "impression", function() { return void nV(a) })
        },
        nV = function(a) {
            var b;
            return Da(function(c) {
                if (1 == c.j) return wa(c, a.l.sc(), 2);
                (b = c.l) && a.A.enablePreloading && aL() && (pV(a, b), b.setVolume(a.getVolume()), b.init());
                c.j = 0
            })
        },
        eV = function(a, b) { var c = new OB(b);
            G(a, c);
            oV(a, b, c); return c },
        jV = function(a, b) { b ? (b = b.getAd()) && !b.isLinear() && a.B.le() : (a.B.le(), a.B.Gc()) },
        pV = function(a, b) { W.A && W.G && RB(new OB(b), b, "mediaUrlPinged", function(c) { return I(a, c) }) };
    fV.prototype.Qb = function() { this.j.Qb() };
    fV.prototype.Rb = function() { this.j.Rb() };
    var qV = function(a, b) { this.j = a;
        this.l = b };
    qV.prototype.getVolume = function() { return this.j.getVolume() };
    qV.prototype.isMuted = function() { return 0 == this.getVolume() };
    var rV = function(a) { a = sj(a.l.j.Cb()); return 0 == a.width && 0 == a.height ? new Hg(-1, -1) : a };
    qV.prototype.getMediaUrl = function() { return this.j.getAd().getMediaUrl() };
    qV.prototype.getDuration = function() { return this.j.getDuration() };

    function sV(a) { return "SIMID" == a.apiFramework && "text/html" == a.mimeType && !w(a.Fa.uc) };
    var tV = {},
        uV = (tV[400] = 1206, tV[402] = 1207, tV[403] = 1209, tV),
        wV = function(a) { var b = a.Gi,
                c = a.dk,
                d = a.ad;
            a = a.Qm;
            gT.call(this, b);
            this.o = new qV(b, c);
            this.F = d.j.K.find(sV) || null;
            this.C = null;
            b = this.F ? Uz(this.F) : null;
            this.l = a || new kI(b);
            this.T = new OB(this);
            this.A = new OB(this);
            G(this, this.A);
            this.D = c;
            this.G = new Nl;
            this.J = 0;
            this.I = !1;
            this.P = this.B = null;
            this.L = new eQ;
            this.R = null; var e;
            this.V = null != (e = null == b ? void 0 : b.includes("imasdk.googleapis.com")) ? e : !1;
            this.K = !1;
            vV(this) };
    u(wV, gT);
    wV.prototype.init = function() {
        var a = this;
        gT.prototype.init.call(this);
        if (!this.K) {
            this.K = !0;
            if (null == this.F || !X().l && ZK()) { var b = XL(yJ, null, "SIMID"),
                    c = RO(b, this.getAd());
                gT.prototype.wb.call(this, b, c);
                xV(this); throw b; }
            lI(this.l);
            b = Uz(this.F);
            (c = Vz(this.F)) ? this.C = nI(c): b && (this.C = mI(b));
            this.D.j.Cb().appendChild(this.C);
            this.l.j.A = this.C.contentWindow;
            yV(this);
            this.l.j.o.promise.then(function() {
                var d = rV(a.o);
                d = {
                    adParameters: a.o.j.getAd().getTraffickingParametersString(),
                    sf: QN(a.o.j.getAd()) || "",
                    tf: QN(a.o.j.getAd()) ||
                        "",
                    fullscreen: !1,
                    muted: a.o.isMuted(),
                    Sf: ZK() ? "notSupported" : "adHandles",
                    lg: !0,
                    videoWidth: d.width,
                    videoHeight: d.height,
                    volume: a.o.getVolume()
                };
                a.l.j.sendMessage("SIMID:Player:init", new ZH(d)).then(a.G.resolve).catch(a.G.reject)
            })
        }
    };
    var vV = function(a) {
            T(a.A, a.j, [].concat(t(RK), ["contentPauseRequested"]), function(d) { return void I(a, d) });
            T(a.A, a.j, "adProgress", function(d) { d = d.getAdData();
                zV(a, d.currentTime) });
            T(a.A, a.j, "volumeChange", function(d) { d = d.getAdData();
                a.l.j.sendMessage("SIMID:Media:volumechange", new ZH({ volume: d.volume })) });
            T(a.A, a.j, "complete", function() { return void AV(a) });
            T(a.A, a.j, "skip", function() { var d = a.l.j.sendMessage("SIMID:Player:adSkipped");
                xV(a, d) });
            T(a.A, a.j, "loadedMetadata", function() { return void BV(a) });
            T(a.A, a.j, "durationChange", function() { return void BV(a) });
            T(a.A, a.j, "adError", function(d) { var e, f = (null == d ? void 0 : null == (e = d.getError()) ? void 0 : e.getErrorCode()) || -1;
                e = a.l.j.sendMessage("SIMID:Player:fatalError", new ZH({ errorCode: uV[f] || 1200 }));
                I(a, d);
                xV(a, e) });
            var b = {},
                c = (b.adBuffering = "SIMID:Media:stalled", b.pause = "SIMID:Media:pause", b.impression = "SIMID:Media:play", b.resume = "SIMID:Media:play", b.seeked = "SIMID:Media:seeked", b.seeking = "SIMID:Media:seeking", b);
            T(a.A, a.j, Object.keys(c), function(d) { return void a.l.j.sendMessage(c[d.type]) })
        },
        zV = function(a, b) { a.l.j.sendMessage("SIMID:Media:timeupdate", new ZH({ currentTime: b })); var c = a.getDuration();
            a.I && -2 != c && b >= c && CV(a, 2) };
    wV.prototype.pause = function() { this.B ? this.B.stop() : gT.prototype.pause.call(this) };
    wV.prototype.resume = function() { this.B ? this.B.start() : gT.prototype.resume.call(this) };
    var AV = function(a) { a.l.j.sendMessage("SIMID:Media:ended");
        a.I ? (a.B = new Oi, G(a, a.B), T(a.A, a.B, "tick", function() { a.J += .25; var b = new lU(a.getAd().getAdPodInfo(), a.pa(), a.getDuration());
            hT(a, "adProgress", b);
            zV(a, a.pa()) }), Pi(a.B), a.B.start()) : CV(a, 2) };
    wV.prototype.pa = function() { return gT.prototype.pa.call(this) + this.J };
    var yV = function(a) {
            T(a.T, a.l, Object.values(XH), function(b) {
                switch (b.type) {
                    case "SIMID:Creative:clickThru":
                        a.da("click");
                        a.V && pL().report(148, { time: a.pa(), dur: a.getDuration() }, !0);
                        b.resolve();
                        break;
                    case "SIMID:Creative:fatalError":
                    case "SIMID:Creative:requestStop":
                        b.resolve();
                        CV(a, 4);
                        break;
                    case "SIMID:Creative:requestSkip":
                        b.resolve();
                        a.skip();
                        break;
                    case "SIMID:Creative:reportTracking":
                        if (Array.isArray(b.args.Re))
                            for (var c = p(b.args.Re), d = c.next(); !d.done; d = c.next()) kL(d.value);
                        b.resolve();
                        break;
                    case "SIMID:Creative:getMediaState":
                        c = {};
                        b.resolve((c.currentSrc = a.o.getMediaUrl(), c.currentTime = a.o.j.pa(), c.duration = a.o.getDuration(), c.ended = !1, c.muted = a.o.isMuted(), c.paused = !1, c.volume = a.o.getVolume(), c.fullscreen = !1, c));
                        break;
                    case "SIMID:Creative:requestPause":
                        a.pause();
                        b.resolve();
                        break;
                    case "SIMID:Creative:requestPlay":
                        a.resume();
                        b.resolve();
                        break;
                    case "SIMID:Creative:requestResize":
                        var e = b.args;
                        if (X().ba) {
                            c = e.videoWidth;
                            d = e.videoHeight;
                            var f = e.Id,
                                g = e.Jd,
                                h = e.dd,
                                k = e.cd,
                                m = e.ed,
                                n = e.fd;
                            e = rV(a.o);
                            h != e.width || k != e.height || 0 != m || 0 !=
                                n ? c = null : (c = new Zi(f, g, c, d), c = aj(new Zi(0, 0, e.width, e.height), c) ? c : null)
                        } else c = null;
                        c ? (a.P = c, a.D.j.Zf(c), b.resolve()) : b.reject();
                        break;
                    case "SIMID:Creative:requestChangeAdDuration":
                        c = b.args.duration;
                        0 > c && -2 != c ? b.reject() : (c -= RN(a.getAd()), a.getAd().K = c, a.I = !0, hT(a, "durationChange"), b.resolve());
                        break;
                    case "SIMID:Creative:requestNavigation":
                        a.Ea(b.args.uri, null);
                        a.pause();
                        b.resolve();
                        break;
                    default:
                        b.reject()
                }
            })
        },
        CV = function(a, b) {
            b = a.l.j.sendMessage("SIMID:Player:adStopped", new ZH({ code: b }));
            xV(a,
                b)
        };
    wV.prototype.start = function() { var a = this;
        gT.prototype.start.call(this);
        this.G.promise.then(function() { return void DV(a) }).catch(function() { EV(a) }) };
    var DV = function(a) { a.za() || (FV(a), a.l.j.sendMessage("SIMID:Player:startCreative").catch(function() { return void EV(a) })) },
        FV = function(a) { a.D.j.wc();
            a.C.style.display = "block" },
        EV = function(a) { var b = XL(DJ),
                c = RO(b, a.getAd());
            gT.prototype.wb.call(a, b, c);
            I(a, new ZL(b));
            xV(a) };
    wV.prototype.skip = function() { var a = this.l.j.sendMessage("SIMID:Player:adSkipped");
        this.da("skip");
        hT(this, "skip");
        xV(this, a) };
    wV.prototype.Qb = function() { gT.prototype.Qb.call(this);
        this.l.j.sendMessage("SIMID:Player:appBackgrounded") };
    wV.prototype.Rb = function() { gT.prototype.Rb.call(this);
        this.l.j.sendMessage("SIMID:Player:appForegrounded") };
    wV.prototype.Jb = function() { var a = rV(this.o),
            b = new Zi(0, 0, a.width, a.height),
            c = this.P || b;
        this.l.j.sendMessage("SIMID:Player:resize", new ZH({ ed: b.left, fd: b.top, dd: b.width, cd: b.height, Id: c.left, Jd: c.top, videoWidth: c.width, videoHeight: c.height, fullscreen: CA(a.width, a.height) })) };
    var BV = function(a) { a.l.j.o.promise.then(function() { var b = a.getDuration();
            a.l.j.sendMessage("SIMID:Media:durationchange", new ZH({ duration: b })) }) };
    wV.prototype.N = function() { this.L.W();
        X().ba && this.D.j.ag();
        this.D.j.Gc();
        this.C && (this.C.style.visibility = "hidden");
        hT(this, "contentResumeRequested");
        hT(this, "allAdsCompleted");
        xV(this);
        gT.prototype.N.call(this) };
    wV.prototype.destroy = function() { var a = this;
        gT.prototype.destroy.call(this);
        fQ(this.L, function() { return a.W() }) };
    var xV = function(a, b) { b = void 0 === b ? Promise.resolve({}) : b; if (!a.R) { var c = Si();
            a.R = Promise.race([b, c]).then(function() { ph(a.C);
                a.l.W();
                a.T.W() });
            a.destroy() } };
    var GV = function(a, b, c, d, e) { d = void 0 === d ? [] : d;
        e = void 0 === e ? null : e;
        Ih.call(this, a);
        this.offset = b;
        this.l = c;
        this.ads = d;
        this.o = e };
    u(GV, Ih);
    var HV = function(a, b, c) { H.call(this);
        this.o = a;
        this.A = b;
        this.B = c;
        this.j = new Map;
        this.l = new Map };
    u(HV, H);
    var JV = function(a, b) { if (!a.j.has(b)) { var c = new CT(a.A, [].concat(t(a.o.j.get(b) || [])), b, a.o.getPodIndex(b), a.B);
                a.j.set(b, c);
                IV(a, b, c) } },
        IV = function(a, b, c) { if (a.l.get(b)) KV(a, a.l.get(b), "adBreakFetched", b, a.l.get(b).o);
            else { var d = new OB(a);
                G(a, d);
                T(d, c, "adBreakFetched", function(e) { TB(d); var f = e.ob().offset,
                        g = e.qe;
                    0 == g.length ? LV(a, e) : KV(a, a.j.get(f), "adBreakFetched", f, g) });
                T(d, c, "adBreakFetchError", function(e) { TB(d);
                    LV(a, e) });
                ET(c) } },
        LV = function(a, b) {
            b = b.ob().offset;
            KV(a, a.j.get(b), "adBreakFetchError",
                b, [], $L(AJ))
        },
        KV = function(a, b, c, d, e, f) { e = void 0 === e ? [] : e;
            f = void 0 === f ? null : f;
            a.j.delete(d);
            0 < e.length && a.l.set(d, b);
            I(a, new GV(c, d, b, e, f)) };
    HV.prototype.N = function() { this.l.clear();
        this.j.clear();
        H.prototype.N.call(this) };
    var MV = function(a, b, c, d) { Ih.call(this, a);
        this.offset = b;
        this.l = c;
        this.ads = d };
    u(MV, Ih);
    var PV = function(a, b, c) { H.call(this);
        this.C = c;
        this.j = new Map;
        this.o = a;
        this.B = b;
        this.A = new OB(this);
        G(this, this.A);
        this.l = null;
        NV(this);
        OV(this) };
    u(PV, H);
    var QV = function(a, b) { return [].concat(t(a.C.j.get(b) || [])) },
        RV = function(a, b, c) { a.j.set(b, c);
            a.l == b && (a.l = null) },
        SV = function(a) { return [].concat(t(WL(a.C))).length == a.j.size };
    PV.prototype.start = function() { this.o.start();
        QL(this.o) };
    PV.prototype.N = function() { TB(this.A);
        this.o.stop();
        H.prototype.N.call(this) };
    var NV = function(a) { T(a.A, a.o, "OffsetTrackerEvent", function(b) { var c = b.Vj;
                b = b.Fj;
                null == c || null != a.j.get(c) ? null == b || null != a.j.get(b) || JV(a.B, b) : (a.l = c, JV(a.B, c)) }) },
        OV = function(a) { S(a.A, a.B, "adBreakFetched", a.D);
            T(a.A, a.B, "adBreakFetchError", function(b) { return void I(a, b) }) };
    PV.prototype.D = function(a) { null == this.j.get(a.offset) && (this.l == a.offset ? (this.l = null, I(this, new MV("play", a.offset, a.l, a.ads))) : null == this.l && I(this, new MV("load", a.offset, a.l, a.ads))) };
    var UV = function(a, b, c, d, e, f) {
        gT.call(this, new OT);
        this.fa = a;
        this.G = f;
        this.F = c;
        this.ca = e;
        a = e.playAdsAfterTime;
        e = WL(b);
        e = p(e);
        for (var g = e.next(); !g.done; g = e.next()) g = g.value, -1 != g && g <= a && b.remove(g);
        d = new PL(d, WL(b));
        G(this, d);
        a = new HV(b, c, f.B.sessionId);
        G(this, a);
        this.l = new PV(d, a, b);
        G(this, this.l);
        this.o = new OB(this);
        G(this, this.o);
        TV(this);
        S(this.o, c, "contentComplete", this.ga);
        this.R = 1;
        this.C = null;
        this.P = this.B = this.T = !1;
        this.A = null;
        f.A.push(this.toString());
        this.I = this.D = this.J = !1;
        this.L = this.K = -1
    };
    u(UV, gT);
    l = UV.prototype;
    l.resize = function(a, b) { this.K = a;
        this.L = b;
        gT.prototype.resize.call(this, a, b) };
    l.discardAdBreak = function() { var a = this.j;
        VV(this) && a instanceof fV && a.o ? gT.prototype.destroy.call(this) : (a = TL(this.l.o), null != a && null == this.l.j.get(a) && (RV(this.l, a, 1), 0 === a && WV(this), (SV(this.l) || this.B) && XV(this))) };
    l.getCuePoints = function() { return [].concat(t(WL(this.l.C))) };
    l.init = function() { var a = this;
        this.F.j = !1;
        T(this.o, this, "allAdsCompleted", function() { a.F.j = !0 }); var b = {};
        b.cuepoints = this.getCuePoints();
        b = new dM("adMetadata", this.getAd(), b);
        I(this, b);
        0 == QV(this.l, 0).length && WV(this);
        this.l.start() };
    l.start = function() { W.l || VV(this) && this.D || (VV(this) ? (this.D = !0, YV(this)) : this.J = !0) };
    var WV = function(a) { a.T = !0; var b = a.j.getAd();
            I(a, new dM("contentResumeRequested", b)) },
        XV = function(a) { if (!a.P) { a.P = !0; var b = a.j.getAd();
                I(a, new dM("allAdsCompleted", b)) } },
        YV = function(a) { ZV(a, "breakStart");
            a.A && (Ri(a.A), a.A = null);
            gT.prototype.start.call(a) };
    UV.prototype.setVolume = function(a) { this.R = a;
        gT.prototype.setVolume.call(this, a) };
    var bW = function(a, b) { a.C = b.offset; var c = a.fa;
            b = b.l; var d = a.G,
                e = a.ca,
                f = new dV(d.j),
                g = new zT(f, d.l, d.B, d.o, d.C);
            g.A = d.A;
            $V("multiple_adbreak");
            c = new fV(new MT(b, g, c, e), f, e, d.l);
            a.j.za() || a.j.W();
            a.j = c;
            aW(a);
            a.j.setVolume(a.R);
            a.j.resize(a.K, a.L);
            a.j.init() },
        aW = function(a) {
            var b = [].concat(t(RK));
            T(a.o, a.j, b, function(c) { return void I(a, c) });
            T(a.o, a.j, "contentResumeRequested", function() { TV(a);
                WV(a) });
            T(a.o, a.j, "contentPauseRequested", function(c) {
                SB(a.o, a.l, "load", a.aa);
                SB(a.o, a.l, "play", a.ba);
                SB(a.o, a.l,
                    "adBreakFetchError", a.V);
                I(a, c)
            });
            T(a.o, a.j, "adError", function(c) { c = c.getError() || XL(PJ);
                I(a, new dM("log", null, c)) });
            T(a.o, a.j, "allAdsCompleted", function() { a.D = !1; if (null != a.l.j.get(-1) && (HK(), null != a.G.o)) { var c = a.G.o.F();
                    null != c && AQ(c) }
                a.T || WV(a);
                ZV(a, "breakEnd");
                (SV(a.l) || a.B) && XV(a);
                a.I && (XV(a), a.W()) })
        };
    UV.prototype.aa = function(a) { var b = a.offset;
        this.C == b || -1 == b && this.getAd() && !this.getAd().isLinear() || bW(this, a) };
    UV.prototype.ba = function(a) { this.C != a.offset && bW(this, a);
        RV(this.l, a.offset, 0); var b = 1 == QV(this.l, 0).length;
        0 == a.offset && b && (b = this.j.getAd()) && !b.isLinear() && WV(this);
        W.l ? YV(this) : cW(this, a.offset) };
    UV.prototype.ga = function(a) { this.B || this.za() || this.I || (this.B = !0, null != this.l.j.get(-1) && 1 == this.l.j.get(-1)) || (SV(this.l) && this.j instanceof OT ? (I(this, new dM("contentResumeRequested")), XV(this)) : SV(this.l) || 2 != this.l.j.get(-1) ? 0 < QV(this.l, -1).length ? (a.l = !1, a = this.l.o, a.j.includes(-1) && I(a, new OL(-1, null)), a.stop()) : XV(this) : (a.l = !0, XV(this))) };
    UV.prototype.V = function(a) { RV(this.l, a.offset, 2); var b = a.o || $L(AJ);
        I(this, new dM("log", null, b));
        b = {};
        I(this, new dM("adBreakFetchError", null, (b.adBreakTime = a.offset, b)));
        ((b = SV(this.l) || this.B) || 0 == a.offset) && WV(this);
        b && XV(this) };
    var TV = function(a) { S(a.o, a.l, "load", a.aa);
        S(a.o, a.l, "play", a.ba);
        S(a.o, a.l, "adBreakFetchError", a.V) };
    UV.prototype.stop = function() { gT.prototype.destroy.call(this) };
    UV.prototype.destroy = function() { this.A && (Ri(this.A), this.A = null); var a = this.j;
        VV(this) && a instanceof fV && a.o ? (this.I = !0, gT.prototype.destroy.call(this)) : (XV(this), this.W()) };
    var VV = function(a) { return !(a.j instanceof OT) && !a.j.za() },
        cW = function(a, b) { 0 == b && (a.A = Qi(function() { WV(a) }, 100)); - 1 == b && (a.A = Qi(function() { a.stop() }, 500));
            a.J && (a.J = !1, a.D = !0, YV(a)); var c = {};
            c.adBreakTime = b;
            b = new dM("adBreakReady", a.j.getAd(), c);
            I(a, b) };
    UV.prototype.N = function() { this.F.j = !0;
        gT.prototype.N.call(this) };
    UV.prototype.toString = function() { return "vmapman" };
    var ZV = function(a, b) { null !== a.C && QV(a.l, a.C).forEach(function(c) { mL(vL(c.trackingEvents, b)) }) };
    var dW = function(a) { Ih.call(this, "vpaid-message");
        this.data = a };
    u(dW, Ih);
    var eW = function(a, b, c) { H.call(this);
        this.D = b;
        this.l = null;
        this.o = a;
        this.A = c;
        this.j = null;
        this.C = new OB(this);
        G(this, this.C) };
    u(eW, H);
    eW.prototype.init = function() { S(this.C, ih(), "message", this.gi);
        fW(this) };
    var fW = function(a) { if (!a.j || !a.l)
            if (a.j || (a.j = wT(a.A)), a.l || (a.l = a.D.claim()), a.j && a.l) { var b = a.l,
                    c = a.o;
                a = a.j.j; var d = {};
                c = (d.vpaidEventType = "createFriendlyIframe", d.session = c, d.videoDisplayName = a, d);
                OK(b.j, "adsManager", "vpaidEvent", c) } };
    l = eW.prototype;
    l.start = function() { fW(this); if (!this.j) throw yT(this.A), fW(this), Error("Play ad was called before prior video display was released."); if (!this.l) throw pL().report(122, { man: "vpaid", when: "start" }, !0), Error("Play ad was called before insecure iframe channel was available."); };
    l.resume = function() {};
    l.getName = function() { return "friendly" };
    l.Kg = function() {};
    l.post = function(a, b) { b.session = this.o;
        b.type = a;
        ih().parent.postMessage(JSON.stringify(b), "*") };
    l.gi = function(a) {
        (a = gW(a)) && a.session == this.o && ("friendlyReady" == a.type ? (a = {}, I(this, new dW((a.type = "vpaidChannelLoaded", a)))) : I(this, new dW(a))) };
    var gW = function(a) { a = a.Pa || null; if (!a) return null;
        a = a.data; if ("string" !== typeof a) return null;
        a = nQ(a); if (null != a) try { return JSON.parse(a.data) } catch (b) {}
        return null };
    eW.prototype.N = function() { var a = this.l,
            b = this.o,
            c = {};
        b = (c.vpaidEventType = "destroyFriendlyIframe", c.session = b, c);
        OK(a.j, "adsManager", "vpaidEvent", b);
        xT(this.A, this.j);
        this.D.release(this.l) };
    eW.prototype.B = function() { return this.j };
    var hW = function(a, b, c, d, e) { H.call(this);
        this.C = a;
        new K(rN(a));
        this.G = b;
        this.D = c;
        this.A = d;
        this.j = null;
        this.L = e;
        this.J = "";
        this.I = this.F = !1;
        this.o = new OB(this);
        G(this, this.o) };
    u(hW, H);
    l = hW.prototype;
    l.init = function() {
        if (!this.F && (this.j || (this.j = wT(this.A)), this.j)) {
            var a = rN(this.C);
            if (/\.html(\?.*)?$/.test(a)) this.L && (a = a.replace(".html", "_" + "en".replace("-", "_") + ".html")), a = D(a);
            else { var b = new K(a),
                    c = new K("http://tpc.googlesyndication.com/pagead/js/loader21.html"); "https" == b.A && tm(c, "https");
                a = vm(c, a || "").toString() }
            this.l = kh("IFRAME", { src: hL(a), allow: "autoplay", allowFullscreen: !0, allowtransparency: !0, background: "transparent", style: "border:0; opacity:1; margin:0; overflow:hidden;padding:0; width:100%; height:100%;position: absolute;display:none;" });
            S(this.o, this.l, "load", this.Zj);
            this.D.Cb().appendChild(this.l);
            S(this.o, ih(), "message", this.hi);
            S(this.o, this.j, "beginFullscreen click end endFullscreen error loaded mediaLoadTimeout pause play timeUpdate volumeChange".split(" "), this.eh);
            S(this.o, this.j, XK, this.eh);
            this.F = !0
        }
    };
    l.start = function() { this.init();
        this.I = !0; if (!this.j) throw yT(this.A), this.init(), Error("Play ad was called before prior video display was released.");
        null != this.l && (this.l.style.display = "block") };
    l.resume = function() { iW(this, "play") };
    l.getName = function() { return "secure" };
    l.Kg = function(a) { var b = {};
        iW(this, "supportedMimeTypes", (b.supportedMimeTypes = a, b)) };
    l.post = function(a, b) { null != this.l.contentWindow && (b.session = this.G, b.type = a, this.l.contentWindow.postMessage(JSON.stringify(b), "*")) };
    l.hi = function(a) {
        a = a.Pa || null;
        a: { if (a) try { var b = JSON.parse(a.data); break a } catch (c) {}
            b = null }
        if (a.source == this.l.contentWindow && null != b && b.session == this.G)
            if ("videoCall" == b.type) switch (b.func) {
                case "load":
                case "play":
                    if (!this.I) { I(this, new dW({ type: "AdError", message: "VPAID ad called play on video element before start was called on VPAID manager" })); break }
                    this.D.Oe();
                    this.J != b.src && (this.J = b.src, GL(this.j, b.src, null, this.C.getAdPodInfo()));
                    JL(this.j);
                    break;
                case "pause":
                    this.j.pause();
                    break;
                case "currentTime":
                    HL(this.j,
                        b.currentTime)
            } else I(this, new dW(b))
    };
    l.Zj = function() { var a = {};
        I(this, new dW((a.type = "vpaidChannelLoaded", a))) };
    l.N = function() { ph(this.l);
        xT(this.A, this.j) };
    l.eh = function(a) {
        switch (a.type) {
            case "loadedmetadata":
                a = {};
                iW(this, "loadedmetadata", (a.duration = this.j.getDuration(), a));
                break;
            case "timeUpdate":
                a = {};
                iW(this, "timeupdate", (a.duration = this.j.getDuration(), a.currentTime = this.j.l, a));
                break;
            case "end":
                iW(this, "ended");
                break;
            case "beginFullscreen":
                iW(this, "fullscreenchange");
                break;
            case "endFullscreen":
                iW(this, "fullscreenchange");
                break;
            case "loaded":
                iW(this, "loadstart");
                break;
            case "mediaLoadTimeout":
                iW(this, "stalled");
                break;
            case "play":
                iW(this, "playing");
                break;
            default:
                iW(this, a.type)
        }
    };
    var iW = function(a, b, c) { c = void 0 === c ? {} : c;
        c.messageType = b;
        a.post("wrapperCall", c) };
    hW.prototype.B = function() { return this.j };

    function jW(a) { a = rN(a); return !(!a || !a.match("//s0.2mdn.net/instream/html5/survey/survey.html")) };
    var kW = function(a, b, c) { RT.call(this, a, b.j, b.o, c); var d = this;
        this.jc = b.l;
        this.tb = b.C;
        this.j = null;
        this.kc = function() { return { currentTime: d.pa(), duration: d.getDuration(), isPlaying: !0, isVpaid: null != rN(d.getAd()), isYouTube: !1, volume: d.C } };
        this.ga = this.V = this.ka = !1;
        this.T = [];
        this.Ma = "goog_" + Sg++;
        this.C = null;
        this.ma = -1;
        this.P = new Oi(500);
        this.ca = this.K = -1;
        this.oc = (new K(rN(this.getAd()))).l;
        this.fa = this.I = !1;
        this.D = nN(this.getAd());
        this.G = b.j.Db();
        this.B = null;
        this.J = "normal";
        b.A.push(this.toString()) };
    u(kW, RT);
    l = kW.prototype;
    l.init = function() { if (0 == W.j) { var a = XL(yJ, null, "vpaid");
            lW(this, a); throw a; } if (!this.F) { a = this.getAd(); var b = this.Ma,
                c = VT(this),
                d = this.jc,
                e = this.tb;
            this.B = jW(a) || 2 != W.j ? new hW(a, b, c, d, jW(a)) : new eW(b, e, d);
            G(this, this.B);
            a = this.getAd().B;
            a.l = Xa();
            a.j = null;
            S(this.l, this.P, "tick", this.Gd);
            a = sO();
            S(this.l, a, TK, this.Ee);
            S(this.l, this.B, "vpaid-message", this.Ed);
            this.B.init();
            this.j = this.B.B();
            mW(this, this.j);
            this.F = !0;
            UT(this, "loaded") } };
    l.isLinear = function() { return 1 == this.D };
    l.start = function() {
        this.init();
        RT.prototype.start.call(this);
        try { this.B.start() } catch (c) { var a = XL(PJ, c, "internal");
            lW(this, a); return }
        this.j = this.B.B();
        mW(this, this.j);
        nW(this);
        bz(this.o, ZO(this.getAd(), this.j));
        DL(this.j);
        this.da("show_ad");
        VT(this).wc();
        a = this.getAd();
        if (a.j instanceof hN && (a = YN(a), null != a && 0 != a.length)) { var b = document.body;
            b && (this.Na = new eT(a, this.G, b), this.Na.build(), aG(this.G, $E, this.Cd, this), aG(this.G, aF, this.pc, this)) }
        null != this.C && this.j.setVolume(this.C);
        bL() && (a = new gz(this.getAd().o,
            this.o, this.j, bL(), this.getAd().C, !0), a.je(), G(this, a));
        this.ga = !0;
        this.D ? Z(this, "contentPauseRequested") : I(this, new BS("vpaidNonLinear", this.Ma));
        oW(this);
        this.V || (this.ca = Qi(this.rc, this.A.loadVideoTimeout, this))
    };
    l.resize = function(a, b) { this.J = CA(a, b) ? "fullscreen" : "normal";
        pW(this, "resizeAd", { width: a, height: b, viewMode: this.J }) };
    l.expand = function() { pW(this, "expandAd");
        this.J = "fullscreen" };
    l.collapse = function() { pW(this, "collapseAd");
        this.J = "normal" };
    l.pause = function() { this.I || pW(this, "pauseAd") };
    l.resume = function() { this.I && (pW(this, "resumeAd"), this.B.resume()) };
    l.setVolume = function(a) { RT.prototype.setVolume.call(this, a);
        null == this.C && (this.C = a);
        this.ga && pW(this, "setAdVolume", { value: a }) };
    var mW = function(a, b) { b && (uO(a.getAd(), a.kc), sO().B = b, null != a.L && (a = a.L, a.B = b, S(a.C, a.B, "start", a.T))) };
    kW.prototype.N = function() { vO(this.getAd());
        this.P.stop(); var a;
        null == (a = this.Na) || a.W();
        this.G.clear();
        this.j && (EL(this.j), X().C || KL(this.j), this.D && (!this.V || this.j.A || this.j.B || this.j.pause()));
        this.ka = !1;
        this.T = [];
        Ri(this.ca);
        this.P.W();
        RT.prototype.N.call(this) };
    var qW = function(a) { var b = a.getAd().getTraffickingParametersString(),
                c = D(QN(a.getAd())),
                d = a.getAd(); if (a.D) { var e = d.j,
                    f = iN(e);
                null != f && (e.j = f) }
            e = null != a.C ? a.C : 1;
            f = {};
            b = (f.desiredBitrate = a.A.bitrate, f.creativeData = b, f.viewMode = a.J, f.clickThroughUrl = c, f.attributionParams = a.getAd().j.Vb(), f.adUrl = rN(d), f.volume = e, f);
            a.ka = !0;
            pW(a, "initAd", b);
            a.T.forEach(function(g) { pW(a, g.type, g.params) });
            a.T = [];
            a.B.Kg(a.A.mimeTypes || []) },
        pW = function(a, b, c) { c = void 0 === c ? {} : c;
            a.ka ? a.B.post(b, c) : a.T.push({ type: b, params: c }) };
    kW.prototype.rc = function() { this.getAd().B.j = Xa();
        lW(this, XL(JJ, null, (this.A.loadVideoTimeout / 1E3).toString())) };
    var lW = function(a, b) { FN(a.getAd()); var c = a.getAd().B;
        null == c.j && (c.j = Xa());
        c = RO(b, a.getAd());
        a.wb(b, c);
        I(a, new ZL(b));
        a.stop() };
    kW.prototype.Ed = function(a) {
        a = a.data;
        if ("string" === typeof a.type) switch (a.type) {
            case "forwardVpaidManagerEvent":
                I(this, a.data);
                break;
            case "vpaidChannelLoaded":
                qW(this);
                break;
            case "heavyAdIntervention":
                this.da(a.heavyAdInterventionEventType);
                break;
            case "returnDuration":
                this.K = a.duration;
                break;
            case "returnRemainingTime":
                rW(this, a.remainingTime);
                break;
            case "AdClickThru":
                this.da("click");
                Z(this, "click", a);
                break;
            case "AdDurationChange":
                this.K = a.duration;
                rW(this, a.remainingTime);
                this.getAd().j.G = this.K;
                Z(this, "durationChange");
                break;
            case "AdError":
                this.fa = !0;
                lW(this, XL(QJ, Error(a.message)));
                break;
            case "AdExpandedChange":
                Z(this, "expandedChanged");
                break;
            case "AdImpression":
                ST(this);
                UT(this, "impression");
                this.fa = !0;
                Z(this, "start");
                break;
            case "AdLinearChange":
                var b = a.isLinear;
                !this.D && b ? (Z(this, "contentPauseRequested"), pW(this, "becameLinear")) : !b && this.D && (Z(this, "contentResumeRequested"), pW(this, "becameNonlinear"), pW(this, "getAdRemainingTime"), pW(this, "getAdDuration"));
                this.D = b;
                var c = this.getAd();
                c.Ca = !0;
                c.Na = b;
                Z(this, "linearChanged");
                break;
            case "AdLoaded":
                Ri(this.ca);
                this.V = !0;
                this.getAd().B.j = Xa();
                var d = a.companions;
                a = this.getAd();
                if (0 == sN(a).length) { var e = a.j.qa(); try { if (c = NB(D(d)), c.documentElement) { var f = uD(c.documentElement);
                            b = 0 == f.j.length ? [] : [HP(f, e)] } else b = [] } catch (g) { b = [] }
                    0 != b.length && lN(a, b) }
                oW(this);
                Z(this, "adCanPlay");
                break;
            case "AdPaused":
                this.I = !0;
                UT(this, "pause");
                break;
            case "AdPlaying":
                this.I = !1;
                UT(this, "resume");
                break;
            case "AdRemainingTimeChange":
                rW(this, a.remainingTime);
                break;
            case "AdSkipped":
                UT(this, "skip");
                this.stop();
                break;
            case "AdSkippableStateChange":
                UT(this, "skippableStateChanged");
                break;
            case "AdStarted":
                this.da("creativeView");
                TT(this);
                this.getAd().Y = !0;
                Z(this, "adStarted");
                break;
            case "AdStopped":
                this.da("stop");
                this.fa || lW(this, XL(QJ));
                this.stop();
                break;
            case "AdUserAcceptInvitation":
                this.D ? this.da("acceptInvitationLinear") : this.da("acceptInvitation");
                break;
            case "AdUserMinimize":
                this.da("collapse");
                break;
            case "AdUserClose":
                UT(this, "userClose");
                break;
            case "AdVideoComplete":
                UT(this,
                    "complete");
                break;
            case "AdVideoFirstQuartile":
                UT(this, "firstQuartile");
                break;
            case "AdVideoMidpoint":
                UT(this, "midpoint");
                break;
            case "AdVideoStart":
                this.da("start");
                break;
            case "AdVideoThirdQuartile":
                UT(this, "thirdQuartile");
                break;
            case "AdVolumeChange":
                b = a.volume;
                b != this.C && (Z(this, "volumeChange", { volume: b }), 0 == b ? (this.da("mute"), Z(this, "mute")) : 0 == this.C && 0 != b && this.da("unmute"), this.j.setVolume(b), this.C = b);
                break;
            case "AdInteraction":
                b = {};
                b.id = a.id;
                Z(this, "interaction", b);
                break;
            case "Ping":
                kL(a.url)
        }
    };
    var oW = function(a) { if (a.V && a.ga) { var b = a.j;
            OK(b.o, b.j, "activate");
            pW(a, "startAd");
            a.P.start();
            a.D || (pW(a, "becameNonlinear"), pW(a, "getAdRemainingTime"));
            pW(a, "getAdDuration") } };
    kW.prototype.pa = function() { return 0 > this.getDuration() || 0 > this.getRemainingTime() ? -1 : this.getDuration() - this.getRemainingTime() };
    kW.prototype.getDuration = function() { return this.K };
    kW.prototype.getRemainingTime = function() { return this.ma };
    var rW = function(a, b) { a.ma = b; if (!a.I) { b = a.getAd().getDuration(); var c = b - a.ma; if (0 <= b && 0 <= c) { var d = new lU(a.getAd().getAdPodInfo(), c, b);
                Z(a, "adProgress", d);
                $y(a.o, c, 1E3 * b) } }
        b = a.getAd().getDuration();
        c = b - a.getRemainingTime();
        c <= b && bG(a.G, hF, new gF(c, b)) };
    kW.prototype.Gd = function() { pW(this, "getAdRemainingTime") };
    var nW = function(a) { var b = {};
        R();
        b.pid = "0";
        b.dn = a.oc;
        b["if"] = a.B.getName();
        b.asys = a.getAd().getAdSystem(); var c = new K(rN(a.getAd()));
        b.vad = -1 != c.o.indexOf("vpaid_adapter.js");
        b.atag = Km(c.j, "adTagUrl"); var d = [];
        oN(a.getAd()).forEach(function(e) { d.push(D(e.mimeType).toLowerCase()) });
        b.mtypes = d.join(",");
        pL().report(29, b) };
    kW.prototype.pc = function(a) { a.B.forEach(function(b) { kL(b) }) };
    kW.prototype.Cd = function(a) { var b = a.clickthroughUrl;
        null != b && (this.Ea(b, a.l), this.pause());
        a.A.forEach(function(c) { kL(c) }) };
    kW.prototype.skip = function() { pW(this, "skipAd") };
    kW.prototype.toString = function() { return "vpaidman" };
    var sW = function(a) { for (var b = [], c = 0; c < a.length; c++) { var d = a[c];
            0 < d && (b.push(Math.round(1E3 * (d - 8)) / 1E3), b.push(Math.round(1E3 * d) / 1E3)) } return b };
    var tW = function(a, b) { Ih.call(this, "adsLoaded");
        this.Dg = a;
        this.l = b };
    u(tW, Ih);
    tW.prototype.ob = function() { return this.l };
    var uW = function(a, b) { E.call(this);
        this.j = new OB(this);
        G(this, this.j);
        S(this.j, b, "userInteraction", this.o);
        this.l = a };
    u(uW, E);
    uW.prototype.o = function(a) { switch (a.ab) {
            case "focusSkipButton":
                bG(this.l, NE, null); break;
            case "focusUiElement":
                bG(this.l, ME, null) } };

    function vW(a) { return KN(a, "nonlinear") && null == rN(a) }

    function $V(a) { pL().report(100, { type: a }) }

    function wW(a) { var b = 0;
        a.forEach(function(c) { c && nN(c) && (b += c.getDuration()) });
        a.forEach(function(c, d) { var e = c.getAdPodInfo();
            e.Qe = a.length;
            c && nN(c) && (e.Pd = d + 1, e.sd = b) }) }
    var xW = function() {};
    xW.prototype.create = function(a, b, c) {
        if (0 == a.length) throw Error("Ads manager creation failure, no ads.");
        var d = new dV(b.j),
            e = new zT(d, b.l, b.B, b.o, b.C);
        e.A = b.A;
        var f = a[0];
        if (HN(f) && vW(f)) $V("adsense"), a = [new $T(a, e, c)];
        else {
            f = [];
            for (var g = 0; g < a.length; g++) {
                var h = null,
                    k = a[g];
                if (k.isLinear() || g == a.length - 1) b: {
                    h = c;Iw(R(), "qqid", CN(k));Iw(R(), "gqid", BN(k));Iw(R(), "fb", "ima_html5-lima");Iw(R(), "sdkv", FK());Iw(R(), "ppt", W.getPlayerType());Iw(R(), "ppv", W.getPlayerVersion());Iw(R(), "mrd", W.getNumRedirects());
                    Iw(R(), "aab", W.l ? 1 : 0);Iw(R(), "itv", document.hidden ? 0 : 1);
                    var m = R().j;m.I = !0;zw(m);
                    var n = new vI(new XB(!1, !1));m = UN(k) || TN(k) || LN(k) || MN(k);
                    if (UN(k)) { $V("action"); var r = new NU(k, e, h, n, m);
                        m = new iT(r, h, e.j, n, m) } else if (null != rN(k) && 0 != W.j) $V("vpaid"),
                    m = new kW(k, e, h);
                    else if (WN(k)) $V("simid"),
                    m = new cV(k, e, h, n),
                    m = new wV({ Gi: m, dk: e, ad: k });
                    else if (KN(k, "linear")) $V("video"),
                    m = new NU(k, e, h, n, m);
                    else if (vW(k)) $V("nonlinear"),
                    m = new WT(k, e, h);
                    else { h = null; break b }
                    null != GN(k) && (k = new eU(m, e, new xW, h), $V("multiple_fb"),
                        m = new fV(k, e.j, h));h = m
                }
                null != h && f.push(h)
            }
            a = f
        }
        if (0 == a.length) throw Error("Manager creation failure, failed to determine ad type.");
        $V("multiple_pod");
        return new fV(new PT(a), d, c, b.l)
    };
    var yW = function(a, b, c, d) { this.o = a;
        this.l = b;
        this.j = c;
        this.A = d };
    yW.prototype.build = function(a, b) { a.enablePreloading && aL() ? vT(this.j.l, 2) : vT(this.j.l, 1); if (this.l instanceof UL) { var c = this.l,
                d = this.o,
                e = this.j,
                f = new xW;
            pL().report(100, { type: "vmap" });
            a = new UV(f, c, d, b, a, e) } else b = this.l, c = this.j, d = new xW, wW(b), a = d.create(b, c, a);
        this.A(a); return a };
    var zW = function(a, b, c, d, e) { E.call(this); var f = this;
        this.K = a;
        this.j = null;
        this.L = b;
        this.A = c;
        this.B = d;
        this.F = new NL(this.B, e);
        this.F.start();
        this.l = new OB(this);
        this.V = new uW(this.L.Db(), this.B);
        this.o = null;
        this.G = -1;
        this.D = [];
        this.H = {};
        S(this.l, this.B, "adsManager", this.T);
        this.C = null;
        this.C = Zh(window, "beforeunload", function() { f.j && f.j.Ie() }) };
    u(zW, E);
    zW.prototype.N = function() { var a = this;
        this.j && this.j.destroy();
        this.C && (hi(this.C), this.C = null);
        Gh(this.o);
        Gh(this.V);
        Qi(function() { Gh(a.l) }, 0);
        E.prototype.N.call(this) };
    zW.prototype.P = function(a) { AW(this, a.type, { vpaidEventType: a.l, session: a.sessionId }) };
    zW.prototype.T = function(a) { try { BW(this, a.ab, a.Va) } catch (b) { CW(this, b) } };
    var CW = function(a, b) { b instanceof jJ ? (b.getErrorCode(), DW(a, b)) : DW(a, XL(DJ, b));
            a.W() },
        BW = function(a, b, c) {
            if ("start" != b || a.j)
                if (a.j || "init" == b) var d = !1;
                else a.D.push({ type: b, data: c }), d = !0;
            else DW(a, XL(sJ, null, "Should call init before calling start.")), d = !0;
            if (!d) switch (b) {
                case "init":
                    if (a.j) break;
                    a.A.append(c.adsRenderingSettings);
                    try { var e = a.K.build(a.A, a.F);
                        S(a.l, e, QK, a.R);
                        S(a.l, e, "adError", a.Y);
                        S(a.l, e, "vpaidEvent", a.P);
                        a.j = e } catch (f) { CW(a, f); break }
                    for (; 0 != a.D.length;) b = a.D.shift(), BW(a, b.type,
                        b.data);
                    null == a.o && (a.o = new Oi(200));
                    S(a.l, a.o, "tick", a.I);
                    a.o.start();
                    a.j.init();
                    Gp() || S(a.l, ih(), "resize", a.J);
                    break;
                case "skip":
                    a.j.skip();
                    break;
                case "start":
                    a.j.start();
                    break;
                case "stop":
                    a.j.stop();
                    break;
                case "pause":
                    a.j.pause();
                    break;
                case "resume":
                    a.j.resume();
                    break;
                case "destroy":
                    a.W();
                    break;
                case "expand":
                    a.j.expand();
                    break;
                case "collapse":
                    a.j.collapse();
                    break;
                case "volume":
                    a.j.setVolume(c.volume);
                    break;
                case "resize":
                    a.j.resize(c.width, c.height);
                    break;
                case "discardAdBreak":
                    a.j && a.j instanceof
                    UV && a.j.discardAdBreak();
                    break;
                case "updateAdsRenderingSettings":
                    if (null == c) break;
                    a.A.append(c.adsRenderingSettings);
                    a.j.updateAdsRenderingSettings(a.A);
                    break;
                case "click":
                    a.j.clicked();
                    break;
                case "appForegrounding":
                    a.j.Rb();
                    break;
                case "appBackgrounding":
                    a.j.Qb()
            }
        };
    zW.prototype.R = function(a) {
        var b = EW(this, a.type, a.getAd()),
            c = {};
        switch (a.type) {
            case "adBreakReady":
            case "adBreakFetchError":
            case "trackingUrlPinged":
            case "mediaUrlPinged":
                null != a.getAdData() && (c = a.getAdData());
                AW(this, a.type, c);
                break;
            case "adProgress":
                c = a.getAdData();
                c instanceof lU && (b = c, c = {}, c.adBreakDuration = b.adBreakDuration, c.adPosition = b.adPosition, c.currentTime = b.currentTime, c.duration = b.duration, c.totalAds = b.totalAds, AW(this, a.type, c));
                break;
            case "interaction":
                AW(this, a.type, { adData: b, interactionData: a.getAdData() });
                break;
            case "adMetadata":
                b = (a.getAdData() || {}).cuepoints;
                if (!b) break;
                c = sW(b);
                AW(this, a.type, { adCuePoints: b, internalCuePoints: c });
                break;
            case "complete":
                AW(this, "remainingTime", { currentTime: -1, duration: -1, remainingTime: -1 });
                AW(this, a.type, { adData: b });
                break;
            case "allAdsCompleted":
                FW(this);
                AW(this, a.type, { adData: b });
                break;
            case "loaded":
                if (!a.getAd()) { DW(this, XL(DJ)); break }
                this.j.fc();
                null != a.getAd().getContentType() && (a = a.getAd().getContentType(), b.contentType = a);
                AW(this, "loaded", { adData: b });
                break;
            case "videoIconClicked":
                c =
                    a.getAdData();
                a = c.clickThroughUrl;
                (X().F || a) && AW(this, "videoIconClicked", c);
                break;
            case "iconFallbackImageClosed":
                AW(this, "iconFallbackImageClosed");
                break;
            case "click":
                AW(this, "click", { adData: b });
                break;
            case "log":
                a.getAdData() instanceof jJ && (c = lJ(a.getAdData()), AW(this, a.type, { adData: b, logData: c }));
                break;
            case "companionBackfill":
                AW(this, "companionBackfill");
                break;
            case "volumeChange":
                AW(this, a.type, { adData: a.getAdData() });
                break;
            case "navigationRequested":
                c = a.getAdData();
                a = c.url;
                if (!a) break;
                X().Gd ? AW(this,
                    "navigationRequested", c) : this.A.disableClickThrough || (b = c.attributionParams, b = null != b ? b : "", lc && (b = ""), w(D(a)) || (c = a instanceof Hf || !Cv.test(a) ? a : Lf(a), a = c instanceof Hf ? c : Rk(a), window.open(tg(a), "_blank", b)));
                break;
            default:
                AW(this, a.type, { adData: b })
        }
    };
    zW.prototype.Y = function(a) { var b = this;
        FW(this);
        SB(this.l, ih(), "resize", this.J);
        DW(this, a.getError());
        Qi(function() { return b.W() }) };
    var FW = function(a) { SB(a.l, a.o, "tick", a.I);
        Gh(a.o);
        a.o = null;
        AW(a, "remainingTime", { currentTime: -1, duration: -1, remainingTime: -1 }) };
    zW.prototype.I = function() { var a = this.j.getRemainingTime();
        this.G != a && (this.G = a, a = { currentTime: this.j.pa(), duration: this.j.getDuration(), remainingTime: a }, AW(this, "remainingTime", a)) };
    zW.prototype.J = function() { try { this.j.Jb() } catch (a) { CW(this, a) } };
    var EW = function(a, b, c) { if (null == c || null == c.j) return {}; var d = cO(c); "start" == b && (null == a.H[c.getAdId()] && (b = sN(c) || [], a.H[c.getAdId()] = b.map(function(e) { return JM(e) })), d.companions = a.H[c.getAdId()]); return d },
        AW = function(a, b, c) { c = void 0 === c ? {} : c;
            OK(a.B, "adsManager", b, c) },
        DW = function(a, b) { b = lJ(b);
            AW(a, "error", b) };
    var GW = function(a) { this.ads = a },
        IW = function(a, b) {
            (b = HW(a, b)) && a.ads.splice(a.ads.indexOf(b), 1); return b },
        HW = function(a, b) { return 0 >= b ? null : a.ads.find(function(c) { return 0 < c.getDuration() && c.getDuration() <= b }) || null };
    var KW = function(a, b) { this.o = a;
            a = JW(a, b);
            b = a.cj;
            this.j = a.yj;
            this.l = b },
        LW = function(a) { return a.o.reduce(function(b, c) { return [].concat(t(b), t(a.j.get(c))) }, []) },
        MW = function(a, b) { a.l.forEach(function(c) { var d = IW(b, c.getDuration());
                d && a.j.set(c, [d]) }) },
        JW = function(a, b) { var c = new Map,
                d = [];
            a.forEach(function(e) { if (e.F) { var f = [];
                    b.forEach(function(g) { var h;
                        a: { for (h = g.l; h;) { if (h === e) { h = !0; break a }
                                h = h.l }
                            h = !1 }
                        h && f.push(g) });
                    0 == f.length && d.push(e);
                    c.set(e, f) } else c.set(e, [e]) }); return { yj: c, cj: d } };
    var NW = function(a, b, c) { this.F = a;
            this.H = b;
            this.B = c;
            this.j = new KW(this.B, []);
            this.A = null;
            this.o = new GW([]);
            this.l = null;
            this.D = !1;
            this.C = 0 },
        OW = function(a, b) { a = 0 == a.length; var c = 2 <= b.length,
                d = 0 < b.length,
                e; if (e = a) b = b[0], e = HN(b) && KN(b, "nonlinear") && null == rN(b); return e ? !1 : a && c || !a && d };
    l = NW.prototype;
    l.ac = function(a, b) { var c = this; if (this.D) { var d = IW(this.o, this.C);
            d ? a([d]) : b($L(AJ)) } else { var e = !1,
                f = !1;
            this.F.ac(function(g) { c.j = new KW(c.B, g);
                f && PW(c, a, b);
                e = !0 }, function(g) { c.A = g;
                f && PW(c, a, b);
                e = !0 });
            this.H.ac(function(g) { c.o = new GW(g);
                e && PW(c, a, b);
                f = !0 }, function(g) { c.l = g;
                e && PW(c, a, b);
                f = !0 }) } };
    l.rf = function() { return OW(this.B, this.o.ads) };
    l.qb = function() { throw Error("Do not use hasMoreAds in ad buffet ad source."); };
    l.Mb = function() { throw Error("Do not use getNextAd in ad buffet ad source."); };
    l.lh = function() { throw Error("Do not use numInlineAdsProduced in ad buffet ad source."); };
    l.Eg = function(a) { this.C = a;
        this.D = !0 };
    var PW = function(a, b, c) { a.A && a.l ? 0 < a.B.length && a.A ? c(a.A) : a.l ? c(a.l) : c($L(AJ)) : a.l ? b(LW(a.j)) : a.A ? (MW(a.j, a.o), 0 < LW(a.j).length ? b(LW(a.j)) : c($L(AJ))) : (MW(a.j, a.o), b(LW(a.j))) };

    function QW(a, b, c) { var d = null,
            e = c + b;
        a.D.forEach(function(f) { var g; if (g = f instanceof EM) 0 == c && 0 == b || f instanceof mP ? g = !0 : (g = f.jb(), g = g.width <= b && g.height <= c);
            g && (g = 0 == c && 0 == b ? 0 : c - f.jb().height + b - f.jb().width, "Flash" != f.getContentType() && (null == d ? (d = f, e = g) : g < e ? (d = f, e = g) : g == e && ("Flash" == d.getContentType() && "Javascript" == f.getContentType() ? d = f : f.qa() < d.qa() && (d = f)))) });
        xN(a, d) }

    function RW(a) { var b = null;
        a.D.forEach(function(c) { c instanceof hN && (null === b || c.qa() < b.qa()) && (b = c) });
        xN(a, b) };
    var SW = function(a, b, c, d) { this.B = a;
        this.D = b;
        this.ads = 0 < this.B.length ? this.B : this.D;
        this.Qa = c;
        this.La = this.C = !0;
        this.l = -1;
        this.j = null;
        this.F = this.A = 0;
        this.o = null;
        this.H = d };
    SW.prototype.ac = function(a, b) { TW(this, a, b) };
    var UW = function(a, b, c) { var d = [],
                e = function(f) { a.qb() ? a.Mb(function(g) { d.push(g);
                        e(null) }, function(g) { e(g) }) : 0 < d.length ? b(d) : (null == f && (f = $L(AJ)), c(f)) };
            e(null) },
        TW = function(a, b, c) { var d = [],
                e = [];
            VW(a, d, e);
            Promise.all(e).then(function() { return WW(a, d, b, c) }, function() { return c($L(HJ)) }) },
        VW = function(a, b, c) { a.ads.forEach(function(d) { var e = [];
                b.push(e);
                d.F ? XW(a, d) || (d = YW(a, d, e, function(f) { return a.o = f }), c.push(d)) : e.push(d) }) },
        XW = function(a, b) {
            if (AN(b) >= W.getNumRedirects()) {
                var c = ZW(b, LJ, null, String(W.getNumRedirects()));
                $W(a, b, c);
                return !0
            }
            return a.C ? !1 : (a.o = ZW(b, NJ), !0)
        },
        WW = function(a, b, c, d) { var e = [];
            b.forEach(function(f) { f.forEach(function(g) { return a.vd(g, function(h) { return e.push(h) }, function(h) { return a.o = h }) }) });
            0 < e.length ? c(e) : (null == a.o && (a.o = $L(AJ)), d(a.o)) },
        YW = function(a, b, c, d) {
            return new Promise(function(e, f) {
                var g = iy(a.Qa, b.ya);
                aX(a.H, g, function(h) { h instanceof SW ? bX(a, h, b, c, d, e, f) : (h = new jJ("adLoadError", "Ad source cannot contain playlist response.", 2), kJ(h, b), d(h), e()) }, function(h) {
                    h = cX(h, b);
                    $W(a, b,
                        h);
                    d(h);
                    e()
                })
            })
        },
        bX = function(a, b, c, d, e, f, g) { dX(b, c, a.La && c.ga, c.sa);
            0 == b.ads.length ? ($W(a, c, ZW(c, OJ)), f()) : b.ac(function(h) { d.push.apply(d, t(h));
                f() }, function(h) { $W(a, c, h);
                e(h);
                301 == h.getErrorCode() && g();
                f() }) };
    l = SW.prototype;
    l.qb = function() { return null != this.j && this.j.qb() ? !0 : 0 < this.ads.length && this.l < this.ads.length - 1 };
    l.lh = function() { return this.A };
    l.Eg = function() { this.F++ };
    l.Mb = function(a, b) { var c = this;
        null != this.j ? eX(this, a, b) : this.qb() ? fX(this, a, function(d) { 301 != d.getErrorCode() && c.qb() ? c.Mb(a, b) : b(d) }) : b(new jJ("adLoadError", "The ad source contains no more ads.", 1005)) };
    l.rf = function() { return !1 };
    var gX = function(a, b) { a.La = b;
        a.ads = a.bh(a.B, a.D);
        a.l = -1 };
    SW.prototype.bh = function(a, b) { return this.La ? 0 < a.length ? a : b : 1 == a.length ? a : b.slice(0, 1) };
    SW.prototype.vd = function(a, b, c) { var d; if (!(d = null != a.j)) { var e = this.Qa;
            d = e.nonLinearAdSlotWidth || 0;
            e = e.nonLinearAdSlotHeight || 0;
            HN(a) && !a.F ? KN(a, "nonlinear") ? QW(a, d, e) : RW(a) : KN(a, "linear") ? RW(a) : KN(a, "nonlinear") && QW(a, d, e);
            d = null != a.j }
        d ? (this.A++, b(a)) : (b = 0 == a.D.length ? ZW(a, IJ) : a.isLinear() ? ZW(a, EJ) : ZW(a, KJ), kJ(b, a), hX(b, a), c(b)) };
    SW.prototype.Xf = function(a, b, c) { var d = iy(this.Qa, a.ya);
        iX(this, a, d, b, c) };
    var iX = function(a, b, c, d, e) { aX(a.H, c, function(f) { f instanceof SW ? (dX(f, b, a.La && b.ga, b.sa), d(f)) : f instanceof UL ? (f = new jJ("adLoadError", "Ad source cannot contain playlist response.", 2), kJ(f, b), e(f)) : (f = new jJ("adLoadError", "Unknown ad source.", 2), kJ(f, b), e(f)) }, e) },
        eX = function(a, b, c) {
            if (a.j.qb()) a.j.Mb(function(e) { a.vd(e, b, function(f) { a.qb() ? a.Mb(b, c) : c(f) }) }, function(e) { $W(a, a.ads[a.l], e);
                a.j = null;
                301 == e.getErrorCode() ? c(e) : a.qb() ? a.Mb(b, c) : c(e) });
            else {
                if (0 == a.j.lh()) {
                    var d = a.ads[a.l];
                    $W(a, d, ZW(d,
                        OJ))
                }
                a.j = null;
                a.Mb(b, c)
            }
        },
        $W = function(a, b, c) { a.o = c;
            hX(c, b) },
        fX = function(a, b, c) { a.l++; var d = a.ads[a.l]; if (d.F)
                if (AN(d) >= W.getNumRedirects()) { var e = ZW(d, LJ, null, String(W.getNumRedirects()));
                    $W(a, d, e);
                    c(e) } else a.C ? a.Xf(d, function(f) { a.j = f;
                    a.Mb(b, c) }, function(f) { f = cX(f, null);
                    $W(a, d, f);
                    c(f) }) : (e = ZW(d, NJ), c(e));
            else a.vd(d, b, c) },
        cX = function(a, b) { switch (a.getErrorCode()) {
                case 300:
                case 301:
                case 302:
                case 303:
                case 200:
                case 1005:
                    kJ(a, b); break;
                default:
                    a.getAd() && (b = a.getAd()), a = ZW(b, OJ) } return a },
        dX = function(a,
            b, c, d) { a.ads.forEach(function(e) { e.l = b;
                zN(e) });
            gX(a, c);
            a.C = d },
        ZW = function(a, b, c, d) { b = $L(b, c, d);
            kJ(b, a); return b },
        hX = function(a, b) { var c = b.ka;
            a.getAd() && (b = a.getAd());
            a = RO(a, b);
            mL(c, a) };
    var jX = function(a, b, c) { SW.call(this, [], a, b, c) };
    u(jX, SW);
    jX.prototype.rf = function() { return 0 < kX(this) };
    var kX = function(a) { var b = a.ads.length - (0 > a.l ? 1 : a.l + 1); return null != a.j && a.j instanceof jX ? b + kX(a.j) : b };
    l = jX.prototype;
    l.ac = function(a, b) { UW(this, a, b) };
    l.qb = function() { if (null != this.j && this.j.qb()) return !0; var a = 0 == this.A || this.A == this.F; return 0 < this.ads.length && a && this.l < this.ads.length - 1 };
    l.bh = function(a, b) { return b };
    l.vd = function(a, b, c) { var d = null == this.j ? EN(a) : EN(this.ads[this.l]);
        X().O = d;
        SW.prototype.vd.call(this, a, b, c) };
    l.Xf = function(a, b, c) { X().O = -1;
        SW.prototype.Xf.call(this, a, b, c) };
    var nX = function(a) { this.l = lX(a);
            this.j = mX(a) },
        oX = function(a, b, c) { return 0 < a.j.length && 0 <= EN(a.j[0]) ? new jX(a.j, c, b) : OW(a.l, a.j) ? new NW(new SW(a.l, [], c, b), new SW([], a.j, c, b), a.l) : new SW(a.l, a.j, c, b) },
        lX = function(a) { a = a.filter(function(b) { return 0 < b.getPodIndex() });
            a.sort(function(b, c) { return b.getPodIndex() - c.getPodIndex() }); return a },
        mX = function(a) { return a.filter(function(b) { return -1 == b.getPodIndex() }) };
    var pX = function(a, b) { this.j = a;
            this.o = b },
        aX = function(a, b, c, d) {
            if (null != b.adsResponse && ("string" === typeof b.adsResponse && !w(b.adsResponse) || b.adsResponse instanceof Document || b.adsResponse instanceof Element)) a: { var e = null; if (b.adsResponse instanceof Element) e = b.adsResponse;
                else if (b.adsResponse instanceof Document) e = b.adsResponse.documentElement;
                else try { e = NB(b.adsResponse).documentElement } catch (g) { d($L(CJ, g)); break a }
                if (e) { var f = Xa();
                    qX(a, e, b, f, f, c, d) } else d($L(CJ)) }
            else wy(b.adTagUrl || "") && a.j &&
                a.j.I(), rX(a, b, c, d)
        },
        rX = function(a, b, c, d) { var e; if (!(e = null == b.adTagUrl)) a: { try { Jg(b.adTagUrl) } catch (f) { e = !1; break a }
                e = !0 }
            e ? W.C ? AO(function(f) { return void sX(a, b, c, d, f) }) : sX(a, b, c, d) : d($L(xJ, null, b.adTagUrl)) },
        sX = function(a, b, c, d, e) {
            e = void 0 === e ? "" : e;
            tX(b.adTagUrl || "");
            e = uX(a, b, e);
            var f = iK(X().j),
                g = new FB(b.vastLoadTimeout),
                h = Date.now(),
                k = qS(e);
            return a.o.get({ url: e, timeout: g, withCredentials: !f, yb: k }).then(function(m) {
                if (ux.isSelected() || vx.isSelected()) {
                    var n = {
                            type: "media-source",
                            audio: {
                                contentType: 'audio/webm; codecs="opus"',
                                channels: "2",
                                bitrate: 4E5,
                                samplerate: 44100
                            },
                            video: { contentType: 'video/webm; codecs="vp09.00.10.08"', width: 640, height: 360, bitrate: 4E5, framerate: 30 }
                        },
                        r, q;
                    if (n && (null == (r = navigator) ? 0 : null == (q = r.mediaCapabilities) ? 0 : q.decodingInfo)) return navigator.mediaCapabilities.decodingInfo(n).then(function(y) { a.l = y.powerEfficient && y.smooth && y.supported; return m }).catch(function() { return m })
                }
                return m
            }).then(function(m) { var n; return null != (n = m.documentElement) ? n : Promise.reject() }).then(function(m) {
                qX(a, m, b, h, Date.now(),
                    c, d)
            }, function(m) { var n = "",
                    r = $L(wJ);
                m instanceof Error && (r = $L(wJ, m), n = m.message, 8 == n && (r = $L(HJ, m)));
                d(r);
                m = n;
                m = { rt: cQ(b.adTagUrl || ""), ec: m };
                pL().report(18, m) })
        },
        uX = function(a, b, c) {
            var d;
            (d = b.adTagUrl) ? ty(d): d = null;
            b.adTagUrl = d;
            a = fT(b, a.j);
            a = new K(a.j(b));
            if (d = !w(c)) d = a.l, d = null == d ? !1 : gb(d, ".g.doubleclick.net");
            d && a.j.set("ged", c);
            iK(X().j) && (c = X().j, ty(a.toString()) && iK(c) && (a.l = "pagead2.googlesyndication.com"));
            d = c = null;
            KK(X()) && (c = "Google1", d = "3.526.0");
            var e = X().Ub,
                f = eK(X().j),
                g = cK(X().j);
            $O();
            b = { placementType: "1", Qa: b, appName: X().appName, Ch: dL(), clickType: ZK() ? "0" : AA() ? "2" : "1", mh: c, nh: d, domain: XO(), pageUrl: aP(b), bd: W.getPlayerType(), Yd: W.getPlayerVersion(), td: "IMA", ud: "3.526.0", Ng: fL(), Df: f, Ub: e, Hh: g };
            b = void 0 === b ? {} : b;
            var h = void 0 === h ? new Map : h;
            Cy(h, "ADCATEGORIES", "-1");
            Cy(h, "ADCOUNT", "-1");
            Cy(h, "APIFRAMEWORKS", b.Ng ? b.Ng.join(",") : "-1");
            Cy(h, "BLOCKEDADCATEGORIES", "-1");
            Cy(h, "EXTENSIONS", "-2");
            Cy(h, "MEDIAMIME", b.Ch ? b.Ch.join(",") : "-1");
            Cy(h, "PLAYERCAPABILITIES", "-1");
            Cy(h, "VASTVERSIONS",
                df(cy).join(","));
            Cy(h, "VERIFICATIONVENDORS", "-2");
            h = Dy(b, h);
            return jL(a.toString(), h)
        },
        tX = function(a) { a = { rt: cQ(a) };
            pL().report(17, a) },
        qX = function(a, b, c, d, e, f, g) { try { var h = bQ(b, c); if (!h) throw $L(CJ);
                h instanceof xP && void 0 !== a.l && (h.l = a.l); var k = h.j();
                vX(a, k, c, d, e, f) } catch (m) { m instanceof jJ ? g(m) : g($L(DJ, m)) } },
        vX = function(a, b, c, d, e, f) {
            var g = b.j;
            if (null != g) f(g);
            else {
                b = b.l;
                if (null == b || 0 == b.length) throw $L(FJ);
                b.forEach(function(k) { k.A = c;
                    zN(k);
                    k = k.B;
                    k.B = d;
                    k.A = e });
                var h = oX(new nX(b), a, c);
                b.forEach(function(k) {
                    k.I =
                        h
                });
                f(h)
            }
        };
    var wX = function(a, b) { this.A = a;
            this.o = new pX(this.A, b);
            this.j = new rS;
            this.l = !1 },
        zX = function(a, b, c, d) { var e = function(g) { c(g);
                    g = a.j;
                    sS(g);
                    g.j.pop();
                    a.l = !1;
                    xX(a) },
                f = function(g) { d(g);
                    g = a.j;
                    sS(g);
                    g.j.pop();
                    a.l = !1;
                    xX(a) };
            tS(a.j, function() { return void yX(a, b, e, f) });
            xX(a) },
        xX = function(a) { if (!a.l) { var b = a.j;
                sS(b);
                b = b.j;
                b = b[b.length - 1];
                null != b && (a.l = !0, b()) } },
        yX = function(a, b, c, d) { var e = dQ(b.adTagUrl);
            null != e && ty(b.adTagUrl || "") && (X().oc = e);
            aX(a.o, b, function(f) { f instanceof UL ? c(f) : f.ac(c, d) }, d) };
    var AX = function(a, b) { H.call(this);
        this.o = new wX(a, b);
        this.l = a;
        this.j = !0 };
    u(AX, H);
    var EX = function(a, b, c) { a.j && (b.adTagUrl && !vA(b.adTagUrl) ? BX(a, new jJ("adLoadError", "URI malformed", 1005), c) : hK() ? (b = $L(vJ), BX(a, b, c)) : zX(a.o, b, function(d) { a.j ? CX(a, d, c) : DX(a, d, c) }, function(d) { return BX(a, d, c) })) },
        IT = function(a, b, c) { a.j || zX(a.o, b, function(d) { a.j ? CX(a, d, c) : DX(a, d, c) }, function(d) { return BX(a, d, c) }) },
        CX = function(a, b, c) { try { I(a, new tW(b, c)) } catch (d) { BX(a, $L(EJ, null), c) } },
        DX = function(a, b, c) {
            b instanceof UL ? BX(a, $L(qJ, null, "Unsupported ad format."), c) : (c = new BT("adBreakFetched", c), c.qe =
                b, I(a, c))
        },
        BX = function(a, b, c) { a.j ? ("always" == W.getCompanionBackfill() && a.l.C(EQ()), b = new ZL(b, c), b.l = c, I(a, b)) : I(a, new BT("adBreakFetchError", c)) };
    var FX = function() { this.l = [];
        this.j = !1 };
    FX.prototype.push = function(a) { this.l.push(a);
        this.j || GX(this) };
    var GX = function(a) { var b = a.l.shift();
        null != b && (a.j = !0, b(), Qi(function() { a.j = !1;
            0 != a.l.length && GX(a) }, 4)) };
    var HX = function() { NK.apply(this, arguments) };
    u(HX, NK);
    HX.prototype.sendMessage = function(a, b, c) {
        var d = IX(b, this.sessionId, c);
        JX.push(function() {
            var e = d;
            e = void 0 === e ? null : e;
            switch (KX) {
                case 0:
                    var f = e;
                    e = ["gmsg://", "afma.google.com/", a];
                    var g = "?";
                    for (h in f) e.push(g, h, "=", encodeURIComponent(f[h].toString())), g = "&";
                    e.push(g, "dt", "=", (new Date).getTime());
                    var h = document.getElementById("afmanotify");
                    !h && document.body && (h = document.createElement("iframe"), h.setAttribute("id", "afmanotify"), h.setAttribute("style", "display: none;"), document.body.appendChild(h));
                    h.setAttribute("src", e.join(""));
                    break;
                case 2:
                    e = { name: a, data: e };
                    try { ih().webkit.messageHandlers.bridge.postMessage(e) } catch (k) {}
                    break;
                case 3:
                    h = v.browserlessSender, null != h && h(a, e)
            }
        })
    };
    var MX = function(a) { a = void 0 === a ? "*" : a; var b = LX.get(a);
            null == b && (b = new HX(a), LX.set(a, b)); return b },
        IX = function(a, b, c) { var d = PK[a];
            d && (a = d);
            a = { type: a, sid: b };
            null != c && (c = JSON.stringify(c), a.data = c); return a },
        KX = 0,
        LX = new Map,
        JX = new FX;
    new DOMParser;
    Ka("google.ima.NativeBridge.receiveMessage", function(a, b) { try { var c = JSON.parse(b); if (null != c) { var d = c.sid; if (null != d) { var e = new yL(a, c.type, c.data || {}, c.sid, "");
                    I(MX(), e); "*" != d && I(MX(d), e) } } } catch (f) {} });

    function NX(a, b, c) {
        var d = window,
            e = new Nl,
            f = "",
            g = function(x) { try { var A = "object" === typeof x.data ? x.data : JSON.parse(x.data);
                    f === A.paw_id && (Zj(d, "message", g), A.error ? e.reject(Error(A.error)) : e.resolve(c(A))) } catch (L) {} },
            h;
        if ("function" === typeof(null == (h = d.gmaSdk) ? void 0 : h.getQueryInfo)) return Yj(d, "message", g), f = b(d.gmaSdk), e.promise;
        var k, m, n, r, q, y;
        return "function" === typeof(null == (k = d.webkit) ? void 0 : null == (m = k.messageHandlers) ? void 0 : null == (n = m.getGmaQueryInfo) ? void 0 : n.postMessage) || "function" === typeof(null ==
            (r = d.webkit) ? void 0 : null == (q = r.messageHandlers) ? void 0 : null == (y = q.getGmaSig) ? void 0 : y.postMessage) ? (f = String(Math.floor(2147483647 * ok())), Yj(d, "message", g), a(d.webkit.messageHandlers, f), e.promise) : null
    }

    function OX() { return NX(function(a, b) { var c, d; return void(null == (c = null != (d = a.getGmaQueryInfo) ? d : a.getGmaSig) ? void 0 : c.postMessage(b)) }, function(a) { return a.getQueryInfo() }, function(a) { return a.signal }) };
    var XX = function(a, b) {
        b = void 0 === b ? new OB : b;
        H.call(this);
        var c = this;
        this.j = a;
        this.o = b;
        G(this, this.o);
        this.B = new uT(this.j.l);
        this.A = new rT;
        this.l = null;
        zO(sO(), this.j.l);
        T(this.o, this.j.l, "adsLoader", function(d) {
            var e = new AT;
            e.sessionId = d.bi;
            switch (d.ab) {
                case "requestAds":
                    PX(c.j, e.sessionId);
                    QX(c, d.Va, e);
                    break;
                case "requestStream":
                    PX(c.j, e.sessionId);
                    d = d.Va;
                    RX(d.settings);
                    SX(d.videoEnvironment);
                    var f = new eE;
                    f.assetKey = d.assetKey || "";
                    f.l = d.authToken || "";
                    f.o = d.contentSourceId || "";
                    f.A = d.customAssetKey ||
                        "";
                    f.F = d.networkCode || "";
                    f.H = d.liveStreamEventId || "";
                    f.region = d.region || "";
                    f.projectNumber = d.projectNumber || "";
                    f.O = d.oAuthToken || "";
                    f.videoId = d.videoId || "";
                    f.apiKey = d.apiKey || "";
                    f.j = d.adTagParameters || {};
                    f.U = d.streamActivityMonitorId || "";
                    f.format = "hls";
                    f.G = d.useQAStreamBaseUrl || !1;
                    "dash" == d.format && (f.format = d.format);
                    var g = VJ();
                    SJ(g, "useTestStreamManager") && (f.D = !0);
                    f.B = d.enableNonce || !1;
                    g = JK(d, !0);
                    var h = new $J(!0, f.j || {}, d.consentSettings || {});
                    g.j = h;
                    f.C = iK(h);
                    sO().C && $s();
                    TX(d);
                    PX(c.j, e.sessionId);
                    d = UX(c.j);
                    e.j = d;
                    break;
                case "contentComplete":
                    null != (e = c.l) && (d = new BT("contentComplete", new AT), I(e, d), d.l && (HK(), e = e.l.F(), null != e && AQ(e)));
                    break;
                case "signalsRefresh":
                    e = d.Va, X().Y = e.espSignals
            }
        });
        VX();
        IH(function() { Q(R(), "haib", "1") });
        WX()
    };
    u(XX, H);
    XX.prototype.N = function() { Gh(this.l);
        H.prototype.N.call(this) };
    var ZX = function(a, b) { T(a.o, b, "adsLoaded", function(c) { return YX(a, c, b) });
            T(a.o, b, "adError", function(c) { var d = c.ob().sessionId,
                    e = c.getError();
                c = e.getInnerError();
                e = { type: e.getType(), errorMessage: e.getMessage(), errorCode: e.getErrorCode() };
                null != c && (e.innerError = c.message);
                OK(PX(a.j, d), "adsLoader", "error", e) }) },
        YX = function(a, b, c) {
            var d = b.Dg,
                e = b.ob(),
                f = e.adTagUrl || "";
            b = PX(a.j, e.sessionId);
            var g = UX(a.j);
            new zW(new yW(c, d, new zT(g, a.B, b, c.l, a.A), function(h) {
                var k = a.j;
                k.o && (k = k.o, S(k.o, h, df($X), k.J, !1, k),
                    S(k.o, h, "adError", k.D, !1, k))
            }), g, aY(), b, e.contentDuration);
            sT(a.A, b);
            c = bY(f, d);
            OK(b, "adsLoader", "adsLoaded", c)
        },
        bY = function(a, b) { if (b instanceof UL) { var c = WL(b);
                b = AA() } else c = [], b = IN(b[0]) && AA(); var d = sW(c);
            c = { adCuePoints: c, internalCuePoints: d };
            VJ();
            c.isCustomClickTrackingAllowed = b;
            c.adTagUrl = a; return c },
        RX = function(a) {
            if (null != a) {
                var b = W;
                null != a && (null != a.activityMonitorMode && (b.D = a.activityMonitorMode), null != a.autoPlayAdBreaks && b.setAutoPlayAdBreaks(a.autoPlayAdBreaks), null != a.companionBackfill &&
                    b.setCompanionBackfill(a.companionBackfill), null != a.disableCustomPlaybackForIOS10Plus && b.setDisableCustomPlaybackForIOS10Plus(a.disableCustomPlaybackForIOS10Plus), null != a.engagementDetection && (b.C = a.engagementDetection), null != a.isFunctionalTest && (b.A = a.isFunctionalTest), null != a.isVpaidAdapter && b.xh(a.isVpaidAdapter), null != a.numRedirects && b.setNumRedirects(a.numRedirects), null != a.playerType && b.setPlayerType(a.playerType), null != a.playerVersion && b.setPlayerVersion(a.playerVersion), null != a.ppid && b.setPpid(a.ppid),
                    null != a.reportMediaRequests && (b.G = a.reportMediaRequests), null != a.sessionId && b.setSessionId(a.sessionId), null != a.supportsMultipleVideoDisplayChannels && (b.ca = a.supportsMultipleVideoDisplayChannels), null != a.testingConfig && (b.B = new RJ(a.testingConfig)), null != a.urlSignals && (b.I = a.urlSignals), null != a.vpaidMode && b.setVpaidMode(a.vpaidMode), null != a.featureFlags && b.setFeatureFlags(a.featureFlags), b.F = a.adsToken || "", b.setCookiesEnabled(a.cookiesEnabled), b.O = a["1pJar"] || "", b.U = a.privacyControls || "");
                null != a.persistentStateCorrelator &&
                    (b = R(), Iw(b, "c", a.persistentStateCorrelator), Jw(R()));
                null != a.activeViewPushUpdates && (sO().C = a.activeViewPushUpdates);
                pL().report(41, { mode: W.j });
                null != a.backgroundPlayback && pL().report(32);
                null != a.pipState && pL().report(42, { state: a.pipState });
                Array.isArray(a.swiftLibraries) && Gp() && pL().report(135, { count: a.swiftLibraries.length, libs: a.swiftLibraries.join("~") })
            }
        },
        SX = function(a) { null != a && null != a.osdId && (sO().L = a.osdId) },
        QX = function(a, b, c) {
            var d = b.adTagUrl;
            RX(b.settings);
            SX(b.videoEnvironment);
            var e =
                JK(b);
            TX(b);
            sO().C && $s();
            e.j = aK(d, b.consentSettings || {});
            null != d && (c.adTagUrl = d);
            var f = cY(b);
            GK(e, f);
            c.contentDuration = f.contentDuration;
            PX(a.j, c.sessionId);
            c.j = UX(a.j);
            var g = dY(a),
                h = b.liveStreamPrefetchSeconds || 0;
            0 < h ? Qi(function() { eY(a, f, g, h);
                EX(g, f, c) }, Math.floor(1E3 * Math.random() * h), a) : (eY(a, f, g), EX(g, f, c))
        },
        TX = function(a) {
            a = (a.imalibExperiments || {}).limaExperimentIds || null;
            null != a && (jw.reset(), mw(new ax(hx(a))));
            a = VJ();
            SJ(a, "disableExperiments") && jw.reset();
            a = VJ();
            (a = TJ(a)) && 0 < a.length && (jw.reset(),
                mw(new ax(a)));
            bL() && vo(ow())
        },
        WX = function() { var a = OX();
            a ? a.then(function(b) { pL().report(155, { blob: b }) }).catch(function() { pL().report(155, { blob: "rejected" }) }) : pL().report(155, { blob: "nullPromise" }) },
        dY = function(a) { if (a.l) return a.l; var b = a.j,
                c = new AX(b.D, new UB);
            fY(b, c);
            a.l = c;
            ZX(a, a.l); return a.l },
        cY = function(a) {
            var b = new hy;
            b.adTagUrl = a.adTagUrl;
            b.adsResponse = a.adsResponse;
            b.linearAdSlotWidth = a.linearAdSlotWidth || 0;
            b.linearAdSlotHeight = a.linearAdSlotHeight || 0;
            b.nonLinearAdSlotWidth = a.nonLinearAdSlotWidth ||
                0;
            b.nonLinearAdSlotHeight = a.nonLinearAdSlotHeight || 0;
            b.forceNonLinearFullSlot = a.forceNonLinearFullSlot || !1;
            b.contentDuration = a.contentDuration || null;
            b.contentKeywords = a.contentKeywords || null;
            b.contentTitle = a.contentTitle || null;
            null != a.vastLoadTimeout && 0 < a.vastLoadTimeout && (b.vastLoadTimeout = a.vastLoadTimeout);
            b.l = a.videoContinuousPlay || "0";
            b.j = a.videoPlayActivation || "unknown";
            b.o = a.videoPlayMuted || "unknown";
            b.omidAccessModeRules = a.omidAccessModeRules || {};
            b.pageUrl = a.pageUrl || null;
            return b
        },
        eY = function(a,
            b, c, d) { d = void 0 === d ? 0 : d;
            a = a.j; var e = D(X().o); if (jk(e, "google_console") || jk(e, "google_force_console") || jk(e, "googfc")) a.o || (a.o = new gY(a.C), e = a.o, S(e.o, c, "adError", e.D, !1, e)), c = a.o, c.I || (hY(c, "version", { type: "HTML5", version: "3.526.0" }), c.I = !0), hY(a.o, "ad_request", { adTagUrl: b.adTagUrl, adType: "Deprecated" });
            c = X().appName;
            a = X().B;
            e = {};
            w(D(c)) || (e.app_name = c);
            w(D(a)) || (e.external_version = a);
            e.delay = d;
            e.vpaidadapter = W.o;
            e.request_type = cQ(b.adTagUrl);
            e.ctv = gL();
            pL().report(6, e) };
    Ka("ima.Bridge", XX, window);
    var iY = function(a) { DQ.call(this);
        this.D = new OB;
        this.o = null;
        this.j = a;
        this.G = !1;
        this.A = null;
        S(this.D, this.j, ["companions_success", "companion_initialization_failed"], this.Oj, !1, this);
        S(this.D, this.j, "companion_display_error", this.Ij, !1, this);
        S(this.D, this.j, ["companion_slot_init", "companion_click"], this.Hj, !1, this);
        this.j.isInitialized() ? this.G = !0 : (a = this.j, a.C || (yQ(a, "proxy", "isGptPresent"), xQ(a))) };
    u(iY, DQ);
    iY.prototype.N = function() { this.destroy();
        DQ.prototype.N.call(this) };
    iY.prototype.destroy = function() { this.D.W();
        this.A = null;
        this.l.forEach(function(a) { fM(a) });
        this.o = null };
    iY.prototype.C = function(a) { Gh(this.o);
        this.o = new H;
        this.A = a;
        this.B = !0;
        this.isInitialized() ? jY(this) : (this.B = kY(lY(a), []), this.B || (this.o = this.A = null)); return this.o };
    iY.prototype.I = function() { if (this.j.isInitialized()) { var a = this.j.getDisplayAdsCorrelator();
            a && (X().J = a);
            a = this.j;
            a = a.F && 0 != a.G ? a.G : void 0;
            a && (X().H = a); if (a = wQ(this.j)) X().ma = a } };
    var jY = function(a) { var b = a.A;
            a.A = null; if (0 == a.l.length) mY(a, Error("Companion slots not available."));
            else if (null == b) mY(a, Error("Invalid main ad."));
            else { var c = nY(a, b),
                    d = a.j,
                    e = a.l.map(d.T, d);
                yQ(d, null, "googleSetCompanionAdContents", [e, null, FK()]); if (0 < c.length && (a = a.j, 0 != c.length && "GDFP" == DN(b)[0])) { d = []; for (e = 0; e < c.length; e++) d.push(c[e].getSlotId());
                    zQ(a, b.A);
                    yQ(a, "companionAds", "notifyUnfilledSlots", [d]) } } },
        mY = function(a, b) { I(a, new gQ("companion_display_error", b)) };
    l = iY.prototype;
    l.isInitialized = function() { return this.G };
    l.Og = function() { return this.B };
    l.Oj = function() { pL().report(151, { csrvinit: 1 }); if (null != this.j) { var a = vQ(this.j);
            null != a && (this.l = a) }
        this.G = !0;
        null != this.A && jY(this);
        I(this, new Ih("initialized")) };
    l.Ij = function(a) { pL().report(151, { cdiserr: 1 });
        mY(this, a.getError()) };
    l.Hj = function(a) { if (null != a.l) { pL().report(151, { cadeve: 1 }); var b = a.l; "companion_slot_init" == a.type ? mL(b.A) : "companion_click" == a.type && (mL(b.C), null != this.o && I(this.o, new hQ("companion_click", b))) } };
    var nY = function(a, b) {
            var c = [],
                d = [];
            a.l.forEach(function(f) { fM(f);
                f.getSizes().some(function(g) { a: { g = b.getCompanionAds(g); if (0 != g.length && (g = oY(g, c), null != g)) { var h = g.getAdSlotId(); if (null != h && 0 != f.getSlotId().indexOf(h)) { g = !1; break a }
                            h = vL(g.j.zc, "click").concat(vN(b, "companionClick")); var k = vN(b, "companionImpression");
                            c.push(g);
                            f.setContent(g.getContent(), g.getWidth(), g.getHeight(), g.j.ce, "IFrame" != g.j.D, k, h);
                            g = !0; break a }
                        g = !1 } return g }) || d.push(f) });
            var e = lY(b);
            a.B = kY(e, c);
            a.B || a.l.forEach(function(f) { fM(f) });
            return d
        },
        kY = function(a, b) { if (null == a) return !0; var c = a.j; return "all" == a.l ? pY(c, b) : "any" == a.l ? qY(c, b) : !0 },
        lY = function(a) { return null == a || null == a.j || isNaN(a.j.qa()) ? null : JN(a, !0).find(function(b) { b = b.j; return 0 == b.length ? !1 : isNaN(b[0].qa()) ? !1 : b[0].qa() == b[0].fe() }) || null },
        pY = function(a, b) { return a.every(function(c) { return b.includes(c) }) },
        qY = function(a, b) { return a.some(function(c) { return b.includes(c) }) },
        oY = function(a, b) { return a.find(function(c) { return !b.includes(c) }) };
    iY.prototype.F = function() { return this.j };
    Ka("module$contents$ima$AdError_AdError.Type", { AD_LOAD: "adLoadError", AD_PLAY: "adPlayError" });
    Ka("module$contents$ima$AdErrorEvent_AdErrorEvent.Type", { AD_ERROR: "adError" });
    var $X = {
        AD_CAN_PLAY: "adCanPlay",
        xk: "adStarted",
        CONTENT_PAUSE_REQUESTED: "contentPauseRequested",
        CONTENT_RESUME_REQUESTED: "contentResumeRequested",
        CLICK: "click",
        VIDEO_CLICKED: "videoClicked",
        VIDEO_ICON_CLICKED: "videoIconClicked",
        vg: "engagedView",
        EXPANDED_CHANGED: "expandedChanged",
        STARTED: "start",
        AD_PROGRESS: "adProgress",
        AD_BUFFERING: "adBuffering",
        IMPRESSION: "impression",
        Fg: "measurable_impression",
        VIEWABLE_IMPRESSION: "viewable_impression",
        xg: "fully_viewable_audible_half_duration_impression",
        ui: "overlay_resize",
        wi: "overlay_unmeasurable_impression",
        xi: "overlay_unviewable_impression",
        zi: "overlay_viewable_immediate_impression",
        yi: "overlay_viewable_end_of_session_impression",
        Rk: "externalActivityEvent",
        PAUSED: "pause",
        RESUMED: "resume",
        FIRST_QUARTILE: "firstQuartile",
        MIDPOINT: "midpoint",
        THIRD_QUARTILE: "thirdQuartile",
        COMPLETE: "complete",
        DURATION_CHANGE: "durationChange",
        USER_CLOSE: "userClose",
        rm: "userRecall",
        Nl: "prefetched",
        LOADED: "loaded",
        ALL_ADS_COMPLETED: "allAdsCompleted",
        SKIPPED: "skip",
        hm: "skipShown",
        LINEAR_CHANGED: "linearChanged",
        SKIPPABLE_STATE_CHANGED: "skippableStateChanged",
        AD_METADATA: "adMetadata",
        wk: "adBreakFetchError",
        AD_BREAK_READY: "adBreakReady",
        LOG: "log",
        VOLUME_CHANGED: "volumeChange",
        VOLUME_MUTED: "mute",
        INTERACTION: "interaction",
        Ek: "companionBackfill",
        mm: "trackingUrlPinged",
        Cm: "video_card_endcap_collapse",
        Dm: "video_card_endcap_dismiss",
        Em: "video_card_endcap_impression",
        Hk: "companionInitialized",
        Gk: "companionImpression",
        Fk: "companionClick",
        El: "mediaUrlPinged",
        Dl: "loadStart",
        Hl: "navigationRequested"
    };
    Ka("module$contents$ima$AdEvent_AdEvent.Type", $X);
    var gY = function(a) { E.call(this);
        this.l = "not_loaded";
        this.o = new OB(this);
        this.A = new Oi(200);
        this.C = Xa() + 1E4;
        this.B = [];
        this.I = !1;
        this.j = a;
        S(this.o, this.j, "gpt", this.H);
        S(this.o, this.A, "tick", this.G);
        this.A.start() };
    u(gY, E);
    gY.prototype.J = function(a) { hY(this, "event", a.type); var b = a.getAd(); "start" == a.type && null != b && (a = { adSystem: b.getAdSystem(), id: b.getAdId(), adRequestUrl: b.A.adTagUrl }, b.isLinear() ? (a.duration = b.j.getDuration(), a.type = "video") : (b = b.j, a.assetSize = b.getWidth() + "x" + b.getHeight(), a.assetType = b.B, a.type = "overlay"), hY(this, "ad", a)) };
    gY.prototype.D = function(a) { a = a.getError();
        a = "Error " + a.getErrorCode() + ": " + a.getMessage();
        hY(this, "info", a) };
    var rY = function(a) { null != a.j && OK(a.j, "gpt", "isConsolePresent", { scope: "proxy" }) },
        hY = function(a, b, c) { b = { type: b, data: c }; "loaded" == a.l ? a.F(b) : ("not_loaded" == a.l || "loading" == a.l) && a.B.push(b) };
    gY.prototype.F = function(a) { null != this.j && OK(this.j, "gpt", "sendVideoMessage", { scope: "console", args: [a] }) };
    gY.prototype.N = function() { this.l = "not_loaded";
        Gh(this.o);
        this.o = null;
        Gh(this.A);
        this.A = null;
        E.prototype.N.call(this) };
    gY.prototype.G = function() { switch (this.l) {
            case "not_loaded":
                this.l = "loading";
                rY(this); break;
            case "loading":
                0 < this.C && Xa() > this.C ? (this.l = "failed", sY(this)) : rY(this); break;
            case "loaded":
                tY(this); break;
            case "failed":
                0 < this.C && Xa() > this.C ? sY(this) : (this.l = "loading", rY(this)) } };
    var tY = function(a) { S(a.o, a.A, "tick", a.G);
            null != a.A && (a.A.stop(), a.A.W(), a.A = null) },
        sY = function(a) { tY(a);
            null != a.j && (SB(a.o, a.j, "gpt", a.H), a.j = null);
            a.B = [] };
    gY.prototype.H = function(a) { "isConsolePresent" == a.ab && (a = a.Va.returnValue, null != a && a ? (this.j.l(this.j.C), this.B.forEach(this.F, this), this.B = [], this.l = "loaded") : this.l = "failed") };
    var uY = function(a, b, c) {
        this.l = c;
        0 == b.length && (b = [
            []
        ]);
        this.j = b.map(function(d) {
            d = a.concat(d);
            for (var e = [], f = 0, g = 0; f < d.length;) {
                var h = d[f++];
                if (128 > h) e[g++] = String.fromCharCode(h);
                else if (191 < h && 224 > h) { var k = d[f++];
                    e[g++] = String.fromCharCode((h & 31) << 6 | k & 63) } else if (239 < h && 365 > h) { k = d[f++]; var m = d[f++],
                        n = d[f++];
                    h = ((h & 7) << 18 | (k & 63) << 12 | (m & 63) << 6 | n & 63) - 65536;
                    e[g++] = String.fromCharCode(55296 + (h >> 10));
                    e[g++] = String.fromCharCode(56320 + (h & 1023)) } else k = d[f++], m = d[f++], e[g++] = String.fromCharCode((h & 15) << 12 |
                    (k & 63) << 6 | m & 63)
            }
            return new RegExp(e.join(""))
        })
    };
    uY.prototype.match = function(a) { var b = this; return this.j.some(function(c) { c = a.match(c); return null == c ? !1 : !b.l || 1 <= c.length && "3.526.0" == c[1] || 2 <= c.length && "3.526.0" == c[2] ? !0 : !1 }) };
    var vY = [104, 116, 116, 112, 115, 63, 58, 47, 47, 105, 109, 97, 115, 100, 107, 92, 46, 103, 111, 111, 103, 108, 101, 97, 112, 105, 115, 92, 46, 99, 111, 109, 47, 106, 115, 47, 40, 115, 100, 107, 108, 111, 97, 100, 101, 114, 124, 99, 111, 114, 101, 41, 47],
        wY = [104, 116, 116, 112, 115, 63, 58, 47, 47, 115, 48, 92, 46, 50, 109, 100, 110, 92, 46, 110, 101, 116, 47, 105, 110, 115, 116, 114, 101, 97, 109, 47, 104, 116, 109, 108, 53, 47],
        xY = [104, 116, 116, 112, 115, 63, 58, 47, 47, 105, 109, 97, 115, 100, 107, 92, 46, 103, 111, 111, 103, 108, 101, 97, 112, 105, 115, 92, 46, 99, 111, 109, 47, 112, 114, 101, 114, 101, 108, 101, 97, 115,
            101, 47, 106, 115, 47, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 47
        ],
        yY = [
            [105, 109, 97, 51, 92, 46, 106, 115],
            [105, 109, 97, 51, 95, 100, 101, 98, 117, 103, 92, 46, 106, 115],
            [105, 109, 97, 51, 95, 101, 97, 112, 46, 106, 115]
        ],
        zY = [
            [98, 114, 105, 100, 103, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108],
            [98, 114, 105, 100, 103, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 95, 100, 101, 98, 117, 103, 40, 95, 40, 91, 97, 45, 122, 48,
                45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108
            ],
            [98, 114, 105, 100, 103, 101, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108]
        ],
        AY = [
            [111, 117, 116, 115, 116, 114, 101, 97, 109, 92, 46, 106, 115],
            [111, 117, 116, 115, 116, 114, 101, 97, 109, 95, 100, 101, 98, 117, 103, 92, 46, 106, 115]
        ],
        BY = new uY(vY, yY, !1),
        CY = new uY(vY, zY, !0),
        DY = new uY(wY, yY, !1),
        EY = new uY(wY, zY, !0),
        FY = new uY(xY, yY, !1),
        GY = new uY([104, 116, 116, 112, 115, 63, 58, 47, 47, 40, 112, 97, 103, 101, 97, 100, 50, 124, 116,
            112, 99, 41, 92, 46, 103, 111, 111, 103, 108, 101, 115, 121, 110, 100, 105, 99, 97, 116, 105, 111, 110, 92, 46, 99, 111, 109, 47, 112, 97, 103, 101, 97, 100, 47, 40, 103, 97, 100, 103, 101, 116, 115, 124, 106, 115, 41, 47
        ], [], !1),
        HY = new uY(vY, [
            [100, 97, 105, 95, 105, 102, 114, 97, 109, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108],
            [100, 97, 105, 95, 105, 102, 114, 97, 109, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 95, 100, 101, 98, 117, 103, 40,
                95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108
            ],
            [100, 97, 105, 95, 105, 102, 114, 97, 109, 101, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108]
        ], !0),
        IY = new uY(vY, AY, !1),
        JY = new uY(xY, AY, !1),
        af = { cl: BY, al: CY, Cl: DY, Bl: EY, dl: FY, im: GY, bl: HY, Jl: IY, Kl: JY };

    function KY() { if (!Ze(function(b) { return b.match(ih().location.href) })) { var a = LY(bh(document, "script"));
            null == a && document.querySelectorAll && (a = LY(document.querySelectorAll("script"))); if (null == a) throw Error("IMA SDK is either not loaded from a google domain or is not a supported version."); } }

    function LY(a) { for (var b = null, c = 0; c < a.length; c++)
            if (b = a[c], Ze(function(d) { return d.match(b.src) })) return b;
        return null };
    var MY = function(a, b) { this.C = new CL(b);
        this.o = new H;
        this.j = b;
        this.A = new OB(this);
        S(this.A, this.j, "displayContainer", this.ii);
        this.l = kh("DIV", { style: "position:absolute;visibility:hidden;width:100%;height:100%;top:0;left:0;" });
        a.appendChild(this.l);
        this.B = new $F };
    l = MY.prototype;
    l.Db = function() { return this.B };
    l.kg = function() { return !1 };
    l.Cb = function() { return this.l };
    l.jf = function() { return this.C };
    l.Oe = function() { OK(this.j, "displayContainer", "showVideo") };
    l.wc = function() { this.l.style.visibility = "visible" };
    l.hide = function() { this.le();
        this.Gc() };
    l.le = function() { OK(this.j, "displayContainer", "hide") };
    l.Gc = function() { this.l && (this.l.style.visibility = "hidden") };
    l.Ef = function() { return this.o };
    l.ii = function(a) { switch (a.ab) {
            case "videoClick":
                I(this.o, "click") } };
    l.Zf = function(a) { var b = {},
            c = {};
        OK(this.j, "displayContainer", "resizeAndPositionVideo", (c.resizeAndPositionVideo = (b.x = a.left, b.y = a.top, b.width = a.width, b.height = a.height, b), c)) };
    l.ag = function() { OK(this.j, "displayContainer", "restoreSizeAndPositionVideo") };
    var NY = ["A9UYqyrcBscPFqD2DJTaMQzHcnNy5uwBdxquyYRHf5U8+rYLCQFfX6rQSazDzT0MmHA5X7oDo4j9QxpZoD2tOAwAAAB4eyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjYxMjk5MTk5LCJpc1RoaXJkUGFydHkiOnRydWV9"];
    var QY = function() {
        H.call(this);
        KY();
        this.j = new OB(this);
        G(this, this.j);
        this.l = OY();
        this.A = new Map;
        this.A.set("*", this.l);
        this.C = PY();
        this.o = null;
        var a = new tQ;
        uQ(a, this.C);
        this.D = new iY(a);
        this.B = null;
        T(this.j, ih().document.body, "click dblclick mouseup mouseover mouseout mousemove selectstart mousedown".split(" "), this.F);
        "ontouchstart" in document && T(this.j, ih().document.body, ["touchstart", "touchend", "touchmove", "touchcancel"], this.G);
        T(this.j, this.l, "omid", function(b) { "iframeFailed" === b.ab && OR().D() });
        T(this.j, ih(), "message", function(b) { b = b.Pa; var c; if ("omidIframeLoaded" === (null == (c = b.data) ? void 0 : c.type)) try { OR().G(b.source) } catch (d) { OR().D() } })
    };
    u(QY, H);
    var VX = function() { var a = void 0 === a ? window.document : a; var b = Fl(sQ).l();
            tk(b, a);
            a = {};
            pL().report(158, (a.aot = "ib", a.tte = !!document.hasTrustToken, a));
            a = window.document;
            a = void 0 === a ? window.document : a;
            tk(NY, a) },
        UX = function(a) { a.B || (a.B = new MY(document.body, PX(a))); return a.B },
        aY = function() { var a = new zL;
            a.mimeTypes = dL(); return a },
        PX = function(a, b) { b = b || "*"; var c = a.A.get(b); if (null == c) { c = new mQ(ih().location.hash.slice(1), b);
                c.B = !0; var d = RY(a);
                d && (c.l(d), c.connect());
                a.A.set(b, c) } return c },
        OY = function() {
            var a =
                new mQ(ih().location.hash.slice(1), "*");
            a.B = !0;
            return a
        },
        RY = function(a) { var b = null;
            a.A.forEach(function(c) { c = c.j;
                null != c && (b = c) }); return b },
        fY = function(a, b) { T(a.j, b, "adsLoaded", function(c) { var d = c.Dg;
                d instanceof UL || SY(a, d, c.ob().sessionId) });
            T(a.j, b, "adBreakFetched", function(c) { SY(a, c.qe, c.ob().sessionId) }) },
        SY = function(a, b, c) {
            if (!iK(X().j)) {
                a = PX(a, c);
                c = {};
                var d = TY(b, !1);
                d && (X().G = Ad(d, 1), c.gfpCookie = Vd(d));
                Jx.isSelected() && (d = TY(b, !0)) && (X().R = Ad(d, 1), c.gfpCookieV2 = Vd(d));
                c.encryptedSignalBidderIds =
                    UY(b);
                OK(a, "adsLoader", "cookieUpdate", c)
            }
        },
        TY = function(a, b) { var c = iK(X().j); return !W.isCookiesEnabled() || c ? null : (a = a.find(function(d) { return null != bO(d, b) })) ? bO(a, b) : null },
        UY = function(a) { return a.map(function(b) { for (var c = []; b;) { var d = tN(b, "esp");
                    d instanceof TM && (c = [].concat(t(c), t(UM(d))));
                    b = b.l } return c }).flat() },
        PY = function() { var a = ih();
            a = new rQ([a.top, a.parent], ih().location.hash.slice(1), "*");
            a.connect(); return a };
    QY.prototype.F = function(a) { OK(this.l, "mouse", a.type, { detail: a.detail, screenX: a.screenX, screenY: a.screenY, clientX: a.clientX, clientY: a.clientY, ctrlKey: a.ctrlKey, altKey: a.altKey, shiftKey: a.shiftKey, metaKey: a.metaKey, button: a.button }) };
    var VY = function(a) { var b = []; if (null == a) return b; var c = !!("TouchEvent" in window && 0 < TouchEvent.length),
            d = 0; for (; d < a.length; d++) { var e = a[d];
            c ? b.push({ identifier: e.identifier, pageX: e.pageX, pageY: e.pageY, screenX: e.screenX, screenY: e.screenY, clientX: e.clientX, clientY: e.clientY }) : b.push({ identifier: e.identifier, pageX: e.pageX, pageY: e.pageY, screenX: e.screenX, screenY: e.screenY }) } return b };
    QY.prototype.G = function(a) { var b = a.Pa;
        b = { detail: b.detail, screenX: a.screenX, screenY: a.screenY, clientX: a.clientX, clientY: a.clientY, ctrlKey: a.ctrlKey, altKey: a.altKey, shiftKey: a.shiftKey, metaKey: a.metaKey, touches: VY(b.touches), targetTouches: VY(b.targetTouches), changedTouches: VY(b.changedTouches), scale: b.scale, rotation: b.rotation };
        OK(this.l, "touch", a.type, b) };
    Ka("ima.IframeBridge", QY, window);
})();