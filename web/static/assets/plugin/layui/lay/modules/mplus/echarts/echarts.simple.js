layui.define(function (exports) {
    !function (t, e) {
        "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.echarts = e() : t.echarts = e()
    }(this, function () {
        return function (t) {
            function e(n) {
                if (i[n])return i[n].exports;
                var r = i[n] = {exports: {}, id: n, loaded: !1};
                return t[n].call(r.exports, r, r.exports, e), r.loaded = !0, r.exports
            }

            var i = {};
            return e.m = t, e.c = i, e.p = "", e(0)
        }([function (t, e, i) {
            t.exports = i(2), i(96), i(90), i(101), i(36)
        }, function (t, e) {
            function i(t) {
                if ("object" == typeof t && null !== t) {
                    var e = t;
                    if (t instanceof Array) {
                        e = [];
                        for (var n = 0, r = t.length; n < r; n++)e[n] = i(t[n])
                    } else if (!T(t) && !S(t)) {
                        e = {};
                        for (var a in t)t.hasOwnProperty(a) && (e[a] = i(t[a]))
                    }
                    return e
                }
                return t
            }

            function n(t, e, r) {
                if (!M(e) || !M(t))return r ? i(e) : t;
                for (var a in e)if (e.hasOwnProperty(a)) {
                    var o = t[a], s = e[a];
                    !M(s) || !M(o) || _(s) || _(o) || S(s) || S(o) || T(s) || T(o) ? !r && a in t || (t[a] = i(e[a], !0)) : n(o, s, r)
                }
                return t
            }

            function r(t, e) {
                for (var i = t[0], r = 1, a = t.length; r < a; r++)i = n(i, t[r], e);
                return i
            }

            function a(t, e) {
                for (var i in e)e.hasOwnProperty(i) && (t[i] = e[i]);
                return t
            }

            function o(t, e, i) {
                for (var n in e)e.hasOwnProperty(n) && (i ? null != e[n] : null == t[n]) && (t[n] = e[n]);
                return t
            }

            function s() {
                return document.createElement("canvas")
            }

            function l() {
                return L || (L = N.createCanvas().getContext("2d")), L
            }

            function h(t, e) {
                if (t) {
                    if (t.indexOf)return t.indexOf(e);
                    for (var i = 0, n = t.length; i < n; i++)if (t[i] === e)return i
                }
                return -1
            }

            function u(t, e) {
                function i() {
                }

                var n = t.prototype;
                i.prototype = e.prototype, t.prototype = new i;
                for (var r in n)t.prototype[r] = n[r];
                t.prototype.constructor = t, t.superClass = e
            }

            function c(t, e, i) {
                t = "prototype" in t ? t.prototype : t, e = "prototype" in e ? e.prototype : e, o(t, e, i)
            }

            function f(t) {
                if (t)return "string" != typeof t && "number" == typeof t.length
            }

            function d(t, e, i) {
                if (t && e)if (t.forEach && t.forEach === O)t.forEach(e, i); else if (t.length === +t.length)for (var n = 0, r = t.length; n < r; n++)e.call(i, t[n], n, t); else for (var a in t)t.hasOwnProperty(a) && e.call(i, t[a], a, t)
            }

            function p(t, e, i) {
                if (t && e) {
                    if (t.map && t.map === R)return t.map(e, i);
                    for (var n = [], r = 0, a = t.length; r < a; r++)n.push(e.call(i, t[r], r, t));
                    return n
                }
            }

            function g(t, e, i, n) {
                if (t && e) {
                    if (t.reduce && t.reduce === B)return t.reduce(e, i, n);
                    for (var r = 0, a = t.length; r < a; r++)i = e.call(n, i, t[r], r, t);
                    return i
                }
            }

            function v(t, e, i) {
                if (t && e) {
                    if (t.filter && t.filter === E)return t.filter(e, i);
                    for (var n = [], r = 0, a = t.length; r < a; r++)e.call(i, t[r], r, t) && n.push(t[r]);
                    return n
                }
            }

            function m(t, e, i) {
                if (t && e)for (var n = 0, r = t.length; n < r; n++)if (e.call(i, t[n], n, t))return t[n]
            }

            function y(t, e) {
                var i = z.call(arguments, 2);
                return function () {
                    return t.apply(e, i.concat(z.call(arguments)))
                }
            }

            function x(t) {
                var e = z.call(arguments, 1);
                return function () {
                    return t.apply(this, e.concat(z.call(arguments)))
                }
            }

            function _(t) {
                return "[object Array]" === P.call(t)
            }

            function b(t) {
                return "function" == typeof t
            }

            function w(t) {
                return "[object String]" === P.call(t)
            }

            function M(t) {
                var e = typeof t;
                return "function" === e || !!t && "object" == e
            }

            function T(t) {
                return !!k[P.call(t)]
            }

            function S(t) {
                return t && 1 === t.nodeType && "string" == typeof t.nodeName
            }

            function A(t) {
                for (var e = 0, i = arguments.length; e < i; e++)if (null != arguments[e])return arguments[e]
            }

            function I() {
                return Function.call.apply(z, arguments)
            }

            function C(t, e) {
                if (!t)throw new Error(e)
            }

            var L, k = {
                "[object Function]": 1,
                "[object RegExp]": 1,
                "[object Date]": 1,
                "[object Error]": 1,
                "[object CanvasGradient]": 1,
                "[object CanvasPattern]": 1,
                "[object Image]": 1
            }, P = Object.prototype.toString, D = Array.prototype, O = D.forEach, E = D.filter, z = D.slice, R = D.map, B = D.reduce, N = {
                inherits: u,
                mixin: c,
                clone: i,
                merge: n,
                mergeAll: r,
                extend: a,
                defaults: o,
                getContext: l,
                createCanvas: s,
                indexOf: h,
                slice: I,
                find: m,
                isArrayLike: f,
                each: d,
                map: p,
                reduce: g,
                filter: v,
                bind: y,
                curry: x,
                isArray: _,
                isString: w,
                isObject: M,
                isFunction: b,
                isBuildInObject: T,
                isDom: S,
                retrieve: A,
                assert: C,
                noop: function () {
                }
            };
            t.exports = N
        }, function (t, e, i) {
            function n(t) {
                return function (e, i, n) {
                    e = e && e.toLowerCase(), O.prototype[t].call(this, e, i, n)
                }
            }

            function r() {
                O.call(this)
            }

            function a(t, e, i) {
                function n(t, e) {
                    return t.prio - e.prio
                }

                i = i || {}, "string" == typeof e && (e = tt[e]), this.id, this.group, this._dom = t, this._zr = k.init(t, {
                    renderer: i.renderer || "canvas",
                    devicePixelRatio: i.devicePixelRatio,
                    width: i.width,
                    height: i.height
                }), this._theme = P.clone(e), this._chartsViews = [], this._chartsMap = {}, this._componentsViews = [], this._componentsMap = {}, this._api = new b(this), this._coordSysMgr = new w, O.call(this), this._messageCenter = new r, this._initEvents(), this.resize = P.bind(this.resize, this), this._pendingActions = [], E(J, n), E(Q, n), this._zr.animation.on("frame", this._onframe, this)
            }

            function o(t, e, i) {
                var n, r = this._model, a = this._coordSysMgr.getCoordinateSystems();
                e = L.parseFinder(r, e);
                for (var o = 0; o < a.length; o++) {
                    var s = a[o];
                    if (s[t] && null != (n = s[t](r, e, i)))return n
                }
            }

            function s(t, e) {
                var i = this._model;
                i && i.eachComponent({mainType: "series", query: e}, function (n, r) {
                    var a = this._chartsMap[n.__viewId];
                    a && a.__alive && a[t](n, i, this._api, e)
                }, this)
            }

            function l(t, e, i) {
                var n = this._api;
                z(this._componentsViews, function (r) {
                    var a = r.__model;
                    r[t](a, e, n, i), m(a, r)
                }, this), e.eachSeries(function (r, a) {
                    var o = this._chartsMap[r.__viewId];
                    o[t](r, e, n, i), m(r, o), v(r, o)
                }, this), g(this._zr, e)
            }

            function h(t, e) {
                for (var i = "component" === t, n = i ? this._componentsViews : this._chartsViews, r = i ? this._componentsMap : this._chartsMap, a = this._zr, o = 0; o < n.length; o++)n[o].__alive = !1;
                e[i ? "eachComponent" : "eachSeries"](function (t, o) {
                    if (i) {
                        if ("series" === t)return
                    } else o = t;
                    var s = o.id + "_" + o.type, l = r[s];
                    if (!l) {
                        var h = T.parseClassType(o.type), u = i ? A.getClass(h.main, h.sub) : I.getClass(h.sub);
                        if (!u)return;
                        l = new u, l.init(e, this._api), r[s] = l, n.push(l), a.add(l.group)
                    }
                    o.__viewId = s, l.__alive = !0, l.__id = s, l.__model = o
                }, this);
                for (var o = 0; o < n.length;) {
                    var s = n[o];
                    s.__alive ? o++ : (a.remove(s.group), s.dispose(e, this._api), n.splice(o, 1), delete r[s.__id])
                }
            }

            function u(t, e) {
                z(Q, function (i) {
                    i.func(t, e)
                })
            }

            function c(t) {
                var e = {};
                t.eachSeries(function (t) {
                    var i = t.get("stack"), n = t.getData();
                    if (i && "list" === n.type) {
                        var r = e[i];
                        r && (n.stackedOn = r), e[i] = n
                    }
                })
            }

            function f(t, e) {
                var i = this._api;
                z(J, function (n) {
                    n.isLayout && n.func(t, i, e)
                })
            }

            function d(t, e) {
                var i = this._api;
                t.clearColorPalette(), t.eachSeries(function (t) {
                    t.clearColorPalette()
                }), z(J, function (n) {
                    n.func(t, i, e)
                })
            }

            function p(t, e) {
                var i = this._api;
                z(this._componentsViews, function (n) {
                    var r = n.__model;
                    n.render(r, t, i, e), m(r, n)
                }, this), z(this._chartsViews, function (t) {
                    t.__alive = !1
                }, this), t.eachSeries(function (n, r) {
                    var a = this._chartsMap[n.__viewId];
                    a.__alive = !0, a.render(n, t, i, e), a.group.silent = !!n.get("silent"), m(n, a), v(n, a)
                }, this), g(this._zr, t), z(this._chartsViews, function (e) {
                    e.__alive || e.remove(t, i)
                }, this)
            }

            function g(t, e) {
                var i = t.storage, n = 0;
                i.traverse(function (t) {
                    t.isGroup || n++
                }), n > e.get("hoverLayerThreshold") && !x.node && i.traverse(function (t) {
                    t.isGroup || (t.useHoverLayer = !0)
                })
            }

            function v(t, e) {
                var i = 0;
                e.group.traverse(function (t) {
                    "group" === t.type || t.ignore || i++
                });
                var n = +t.get("progressive"), r = i > t.get("progressiveThreshold") && n && !x.node;
                r && e.group.traverse(function (t) {
                    t.isGroup || (t.progressive = r ? Math.floor(i++ / n) : -1, r && t.stopAnimation(!0))
                });
                var a = t.get("blendMode") || null;
                e.group.traverse(function (t) {
                    t.isGroup || t.setStyle("blend", a)
                })
            }

            function m(t, e) {
                var i = t.get("z"), n = t.get("zlevel");
                e.group.traverse(function (t) {
                    "group" !== t.type && (null != i && (t.z = i), null != n && (t.zlevel = n))
                })
            }

            function y(t) {
                function e(t, e) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n[a] = e
                    }
                }

                var i = 0, n = 1, r = 2, a = "__connectUpdateStatus";
                P.each($, function (o, s) {
                    t._messageCenter.on(s, function (o) {
                        if (nt[t.group] && t[a] !== i) {
                            var s = t.makeActionFromEvent(o), l = [];
                            P.each(it, function (e) {
                                e !== t && e.group === t.group && l.push(e)
                            }), e(l, i), z(l, function (t) {
                                t[a] !== n && t.dispatchAction(s)
                            }), e(l, r)
                        }
                    })
                })
            }

            /*!
             * ECharts, a javascript interactive chart library.
             *
             * Copyright (c) 2015, Baidu Inc.
             * All rights reserved.
             *
             * LICENSE
             * https://github.com/ecomfe/echarts/blob/master/LICENSE.txt
             */
            var x = i(11), _ = i(124), b = i(89), w = i(23), M = i(125), T = i(12), S = i(15), A = i(57), I = i(27), C = i(3), L = i(7), k = i(76), P = i(1), D = i(18), O = i(20), E = i(44), z = P.each, R = 1e3, B = 5e3, N = 1e3, F = 2e3, G = 3e3, V = 4e3, q = 5e3, H = "__flag_in_main_process", W = "_hasGradientOrPatternBg", j = "_optionUpdated";
            r.prototype.on = n("on"), r.prototype.off = n("off"), r.prototype.one = n("one"), P.mixin(r, O);
            var Z = a.prototype;
            Z._onframe = function () {
                this[j] && (this[H] = !0, X.prepareAndUpdate.call(this), this[H] = !1, this[j] = !1)
            }, Z.getDom = function () {
                return this._dom
            }, Z.getZr = function () {
                return this._zr
            }, Z.setOption = function (t, e, i) {
                if (this[H] = !0, !this._model || e) {
                    var n = new M(this._api), r = this._theme, a = this._model = new _(null, null, r, n);
                    a.init(null, null, r, n)
                }
                this._model.setOption(t, K), i ? this[j] = !0 : (X.prepareAndUpdate.call(this), this._zr.refreshImmediately(), this[j] = !1), this[H] = !1, this._flushPendingActions()
            }, Z.setTheme = function () {
                console.log("ECharts#setTheme() is DEPRECATED in ECharts 3.0")
            }, Z.getModel = function () {
                return this._model
            }, Z.getOption = function () {
                return this._model && this._model.getOption()
            }, Z.getWidth = function () {
                return this._zr.getWidth()
            }, Z.getHeight = function () {
                return this._zr.getHeight()
            }, Z.getRenderedCanvas = function (t) {
                if (x.canvasSupported) {
                    t = t || {}, t.pixelRatio = t.pixelRatio || 1, t.backgroundColor = t.backgroundColor || this._model.get("backgroundColor");
                    var e = this._zr, i = e.storage.getDisplayList();
                    return P.each(i, function (t) {
                        t.stopAnimation(!0)
                    }), e.painter.getRenderedCanvas(t)
                }
            }, Z.getDataURL = function (t) {
                t = t || {};
                var e = t.excludeComponents, i = this._model, n = [], r = this;
                z(e, function (t) {
                    i.eachComponent({mainType: t}, function (t) {
                        var e = r._componentsMap[t.__viewId];
                        e.group.ignore || (n.push(e), e.group.ignore = !0)
                    })
                });
                var a = this.getRenderedCanvas(t).toDataURL("image/" + (t && t.type || "png"));
                return z(n, function (t) {
                    t.group.ignore = !1
                }), a
            }, Z.getConnectedDataURL = function (t) {
                if (x.canvasSupported) {
                    var e = this.group, i = Math.min, n = Math.max, r = 1 / 0;
                    if (nt[e]) {
                        var a = r, o = r, s = -r, l = -r, h = [], u = t && t.pixelRatio || 1;
                        P.each(it, function (r, u) {
                            if (r.group === e) {
                                var c = r.getRenderedCanvas(P.clone(t)), f = r.getDom().getBoundingClientRect();
                                a = i(f.left, a), o = i(f.top, o), s = n(f.right, s), l = n(f.bottom, l), h.push({
                                    dom: c,
                                    left: f.left,
                                    top: f.top
                                })
                            }
                        }), a *= u, o *= u, s *= u, l *= u;
                        var c = s - a, f = l - o, d = P.createCanvas();
                        d.width = c, d.height = f;
                        var p = k.init(d);
                        return z(h, function (t) {
                            var e = new C.Image({style: {x: t.left * u - a, y: t.top * u - o, image: t.dom}});
                            p.add(e)
                        }), p.refreshImmediately(), d.toDataURL("image/" + (t && t.type || "png"))
                    }
                    return this.getDataURL(t)
                }
            }, Z.convertToPixel = P.curry(o, "convertToPixel"), Z.convertFromPixel = P.curry(o, "convertFromPixel"), Z.containPixel = function (t, e) {
                var i, n = this._model;
                return t = L.parseFinder(n, t), P.each(t, function (t, n) {
                    n.indexOf("Models") >= 0 && P.each(t, function (t) {
                        var r = t.coordinateSystem;
                        if (r && r.containPoint)i |= !!r.containPoint(e); else if ("seriesModels" === n) {
                            var a = this._chartsMap[t.__viewId];
                            a && a.containPoint && (i |= a.containPoint(e, t))
                        }
                    }, this)
                }, this), !!i
            }, Z.getVisual = function (t, e) {
                var i = this._model;
                t = L.parseFinder(i, t, {defaultMainType: "series"});
                var n = t.seriesModel, r = n.getData(), a = t.hasOwnProperty("dataIndexInside") ? t.dataIndexInside : t.hasOwnProperty("dataIndex") ? r.indexOfRawIndex(t.dataIndex) : null;
                return null != a ? r.getItemVisual(a, e) : r.getVisual(e)
            };
            var X = {
                update: function (t) {
                    var e = this._model, i = this._api, n = this._coordSysMgr, r = this._zr;
                    if (e) {
                        e.restoreData(), n.create(this._model, this._api), u.call(this, e, i), c.call(this, e), n.update(e, i), d.call(this, e, t), p.call(this, e, t);
                        var a = e.get("backgroundColor") || "transparent", o = r.painter;
                        if (o.isSingleCanvas && o.isSingleCanvas())r.configLayer(0, {clearColor: a}); else {
                            if (!x.canvasSupported) {
                                var s = D.parse(a);
                                a = D.stringify(s, "rgb"), 0 === s[3] && (a = "transparent")
                            }
                            a.colorStops || a.image ? (r.configLayer(0, {clearColor: a}), this[W] = !0, this._dom.style.background = "transparent") : (this[W] && r.configLayer(0, {clearColor: null}), this[W] = !1, this._dom.style.background = a)
                        }
                    }
                }, updateView: function (t) {
                    var e = this._model;
                    e && (e.eachSeries(function (t) {
                        t.getData().clearAllVisual()
                    }), d.call(this, e, t), l.call(this, "updateView", e, t))
                }, updateVisual: function (t) {
                    var e = this._model;
                    e && (e.eachSeries(function (t) {
                        t.getData().clearAllVisual()
                    }), d.call(this, e, t), l.call(this, "updateVisual", e, t))
                }, updateLayout: function (t) {
                    var e = this._model;
                    e && (f.call(this, e, t), l.call(this, "updateLayout", e, t))
                }, highlight: function (t) {
                    s.call(this, "highlight", t)
                }, downplay: function (t) {
                    s.call(this, "downplay", t)
                }, prepareAndUpdate: function (t) {
                    var e = this._model;
                    h.call(this, "component", e), h.call(this, "chart", e), X.update.call(this, t)
                }
            };
            Z.resize = function (t) {
                this[H] = !0, this._zr.resize(t);
                var e = this._model && this._model.resetOption("media");
                X[e ? "prepareAndUpdate" : "update"].call(this), this._loadingFX && this._loadingFX.resize(), this[H] = !1, this._flushPendingActions()
            }, Z.showLoading = function (t, e) {
                if (P.isObject(t) && (e = t, t = ""), t = t || "default", this.hideLoading(), et[t]) {
                    var i = et[t](this._api, e), n = this._zr;
                    this._loadingFX = i, n.add(i)
                }
            }, Z.hideLoading = function () {
                this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null
            }, Z.makeActionFromEvent = function (t) {
                var e = P.extend({}, t);
                return e.type = $[t.type], e
            }, Z.dispatchAction = function (t, e) {
                var i = Y[t.type];
                if (i) {
                    var n = i.actionInfo, r = n.update || "update";
                    if (this[H])return void this._pendingActions.push(t);
                    this[H] = !0;
                    var a = [t], o = !1;
                    t.batch && (o = !0, a = P.map(t.batch, function (e) {
                        return e = P.defaults(P.extend({}, e), t), e.batch = null, e
                    }));
                    for (var s, l = [], h = "highlight" === t.type || "downplay" === t.type, u = 0; u < a.length; u++) {
                        var c = a[u];
                        s = i.action(c, this._model), s = s || P.extend({}, c), s.type = n.event || s.type, l.push(s), h && X[r].call(this, c)
                    }
                    "none" === r || h || (this[j] ? (X.prepareAndUpdate.call(this, t), this[j] = !1) : X[r].call(this, t)), s = o ? {
                        type: n.event || t.type,
                        batch: l
                    } : l[0], this[H] = !1, !e && this._messageCenter.trigger(s.type, s), this._flushPendingActions()
                }
            }, Z._flushPendingActions = function () {
                for (var t = this._pendingActions; t.length;) {
                    var e = t.shift();
                    this.dispatchAction(e)
                }
            }, Z.on = n("on"), Z.off = n("off"), Z.one = n("one");
            var U = ["click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu"];
            Z._initEvents = function () {
                z(U, function (t) {
                    this._zr.on(t, function (e) {
                        var i, n = this.getModel(), r = e.target;
                        if ("globalout" === t)i = {}; else if (r && null != r.dataIndex) {
                            var a = r.dataModel || n.getSeriesByIndex(r.seriesIndex);
                            i = a && a.getDataParams(r.dataIndex, r.dataType) || {}
                        } else r && r.eventData && (i = P.extend({}, r.eventData));
                        i && (i.event = e, i.type = t, this.trigger(t, i))
                    }, this)
                }, this), z($, function (t, e) {
                    this._messageCenter.on(e, function (t) {
                        this.trigger(e, t)
                    }, this)
                }, this)
            }, Z.isDisposed = function () {
                return this._disposed
            }, Z.clear = function () {
                this.setOption({series: []}, !0)
            }, Z.dispose = function () {
                if (!this._disposed) {
                    this._disposed = !0;
                    var t = this._api, e = this._model;
                    z(this._componentsViews, function (i) {
                        i.dispose(e, t)
                    }), z(this._chartsViews, function (i) {
                        i.dispose(e, t)
                    }), this._zr.dispose(), delete it[this.id]
                }
            }, P.mixin(a, O);
            var Y = [], $ = {}, Q = [], K = [], J = [], tt = {}, et = {}, it = {}, nt = {}, rt = new Date - 0, at = new Date - 0, ot = "_echarts_instance_", st = {
                version: "3.3.1",
                dependencies: {zrender: "3.2.1"}
            };
            st.init = function (t, e, i) {
                var n = new a(t, e, i);
                return n.id = "ec_" + rt++, it[n.id] = n, t.setAttribute && t.setAttribute(ot, n.id), y(n), n
            }, st.connect = function (t) {
                if (P.isArray(t)) {
                    var e = t;
                    t = null, P.each(e, function (e) {
                        null != e.group && (t = e.group)
                    }), t = t || "g_" + at++, P.each(e, function (e) {
                        e.group = t
                    })
                }
                return nt[t] = !0, t
            }, st.disConnect = function (t) {
                nt[t] = !1
            }, st.dispose = function (t) {
                P.isDom(t) ? t = st.getInstanceByDom(t) : "string" == typeof t && (t = it[t]), t instanceof a && !t.isDisposed() && t.dispose()
            }, st.getInstanceByDom = function (t) {
                var e = t.getAttribute(ot);
                return it[e]
            }, st.getInstanceById = function (t) {
                return it[t]
            }, st.registerTheme = function (t, e) {
                tt[t] = e
            }, st.registerPreprocessor = function (t) {
                K.push(t)
            }, st.registerProcessor = function (t, e) {
                "function" == typeof t && (e = t, t = R), Q.push({prio: t, func: e})
            }, st.registerAction = function (t, e, i) {
                "function" == typeof e && (i = e, e = "");
                var n = P.isObject(t) ? t.type : [t, t = {event: e}][0];
                t.event = (t.event || n).toLowerCase(), e = t.event, Y[n] || (Y[n] = {action: i, actionInfo: t}), $[e] = n
            }, st.registerCoordinateSystem = function (t, e) {
                w.register(t, e)
            }, st.registerLayout = function (t, e) {
                "function" == typeof t && (e = t, t = N), J.push({prio: t, func: e, isLayout: !0})
            }, st.registerVisual = function (t, e) {
                "function" == typeof t && (e = t, t = G), J.push({prio: t, func: e})
            }, st.registerLoading = function (t, e) {
                et[t] = e
            };
            var lt = T.parseClassType;
            st.extendComponentModel = function (t, e) {
                var i = T;
                if (e) {
                    var n = lt(e);
                    i = T.getClass(n.main, n.sub, !0)
                }
                return i.extend(t)
            }, st.extendComponentView = function (t, e) {
                var i = A;
                if (e) {
                    var n = lt(e);
                    i = A.getClass(n.main, n.sub, !0)
                }
                return i.extend(t)
            }, st.extendSeriesModel = function (t, e) {
                var i = S;
                if (e) {
                    e = "series." + e.replace("series.", "");
                    var n = lt(e);
                    i = S.getClass(n.main, n.sub, !0)
                }
                return i.extend(t)
            }, st.extendChartView = function (t, e) {
                var i = I;
                if (e) {
                    e.replace("series.", "");
                    var n = lt(e);
                    i = I.getClass(n.main, !0)
                }
                return i.extend(t)
            }, st.setCanvasCreator = function (t) {
                P.createCanvas = t
            }, st.registerVisual(F, i(138)), st.registerPreprocessor(i(132)), st.registerLoading("default", i(123)), st.registerAction({
                type: "highlight",
                event: "highlight",
                update: "highlight"
            }, P.noop), st.registerAction({
                type: "downplay",
                event: "downplay",
                update: "downplay"
            }, P.noop), st.List = i(14), st.Model = i(10), st.graphic = i(3), st.number = i(4), st.format = i(9), st.matrix = i(19), st.vector = i(5), st.color = i(18), st.util = {}, z(["map", "each", "filter", "indexOf", "inherits", "reduce", "filter", "bind", "curry", "isArray", "isString", "isObject", "isFunction", "extend", "defaults"], function (t) {
                st.util[t] = P[t]
            }), st.PRIORITY = {
                PROCESSOR: {FILTER: R, STATISTIC: B},
                VISUAL: {LAYOUT: N, GLOBAL: F, CHART: G, COMPONENT: V, BRUSH: q}
            }, t.exports = st
        }, function (t, e, i) {
            "use strict";
            function n(t) {
                return null != t && "none" != t
            }

            function r(t) {
                return "string" == typeof t ? _.lift(t, -.1) : t
            }

            function a(t) {
                if (t.__hoverStlDirty) {
                    var e = t.style.stroke, i = t.style.fill, a = t.__hoverStl;
                    a.fill = a.fill || (n(i) ? r(i) : null), a.stroke = a.stroke || (n(e) ? r(e) : null);
                    var o = {};
                    for (var s in a)a.hasOwnProperty(s) && (o[s] = t.style[s]);
                    t.__normalStl = o, t.__hoverStlDirty = !1
                }
            }

            function o(t) {
                t.__isHover || (a(t), t.useHoverLayer ? t.__zr && t.__zr.addHover(t, t.__hoverStl) : (t.setStyle(t.__hoverStl), t.z2 += 1), t.__isHover = !0)
            }

            function s(t) {
                if (t.__isHover) {
                    var e = t.__normalStl;
                    t.useHoverLayer ? t.__zr && t.__zr.removeHover(t) : (e && t.setStyle(e), t.z2 -= 1), t.__isHover = !1
                }
            }

            function l(t) {
                "group" === t.type ? t.traverse(function (t) {
                    "group" !== t.type && o(t)
                }) : o(t)
            }

            function h(t) {
                "group" === t.type ? t.traverse(function (t) {
                    "group" !== t.type && s(t)
                }) : s(t)
            }

            function u(t, e) {
                t.__hoverStl = t.hoverStyle || e || {}, t.__hoverStlDirty = !0, t.__isHover && a(t)
            }

            function c() {
                !this.__isEmphasis && l(this)
            }

            function f() {
                !this.__isEmphasis && h(this)
            }

            function d() {
                this.__isEmphasis = !0, l(this)
            }

            function p() {
                this.__isEmphasis = !1, h(this)
            }

            function g(t, e, i, n, r, a) {
                "function" == typeof r && (a = r, r = null);
                var o = n && (n.ifEnableAnimation ? n.ifEnableAnimation() : n.getShallow("animation"));
                if (o) {
                    var s = t ? "Update" : "", l = n && n.getShallow("animationDuration" + s), h = n && n.getShallow("animationEasing" + s), u = n && n.getShallow("animationDelay" + s);
                    "function" == typeof u && (u = u(r)), l > 0 ? e.animateTo(i, l, u || 0, h, a) : (e.attr(i), a && a())
                } else e.attr(i), a && a()
            }

            var v = i(1), m = i(168), y = Math.round, x = i(6), _ = i(18), b = i(19), w = i(5), M = (i(29), {});
            M.Group = i(34), M.Image = i(48), M.Text = i(74), M.Circle = i(159), M.Sector = i(165), M.Ring = i(164), M.Polygon = i(161), M.Polyline = i(162), M.Rect = i(163), M.Line = i(160), M.BezierCurve = i(158), M.Arc = i(157), M.CompoundPath = i(152), M.LinearGradient = i(87), M.RadialGradient = i(153), M.BoundingRect = i(8), M.extendShape = function (t) {
                return x.extend(t)
            }, M.extendPath = function (t, e) {
                return m.extendFromString(t, e)
            }, M.makePath = function (t, e, i, n) {
                var r = m.createFromString(t, e), a = r.getBoundingRect();
                if (i) {
                    var o = a.width / a.height;
                    if ("center" === n) {
                        var s, l = i.height * o;
                        l <= i.width ? s = i.height : (l = i.width, s = l / o);
                        var h = i.x + i.width / 2, u = i.y + i.height / 2;
                        i.x = h - l / 2, i.y = u - s / 2, i.width = l, i.height = s
                    }
                    this.resizePath(r, i)
                }
                return r
            }, M.mergePath = m.mergePath, M.resizePath = function (t, e) {
                if (t.applyTransform) {
                    var i = t.getBoundingRect(), n = i.calculateTransform(e);
                    t.applyTransform(n)
                }
            }, M.subPixelOptimizeLine = function (t) {
                var e = M.subPixelOptimize, i = t.shape, n = t.style.lineWidth;
                return y(2 * i.x1) === y(2 * i.x2) && (i.x1 = i.x2 = e(i.x1, n, !0)), y(2 * i.y1) === y(2 * i.y2) && (i.y1 = i.y2 = e(i.y1, n, !0)), t
            }, M.subPixelOptimizeRect = function (t) {
                var e = M.subPixelOptimize, i = t.shape, n = t.style.lineWidth, r = i.x, a = i.y, o = i.width, s = i.height;
                return i.x = e(i.x, n, !0), i.y = e(i.y, n, !0), i.width = Math.max(e(r + o, n, !1) - i.x, 0 === o ? 0 : 1), i.height = Math.max(e(a + s, n, !1) - i.y, 0 === s ? 0 : 1), t
            }, M.subPixelOptimize = function (t, e, i) {
                var n = y(2 * t);
                return (n + y(e)) % 2 === 0 ? n / 2 : (n + (i ? 1 : -1)) / 2
            }, M.setHoverStyle = function (t, e) {
                "group" === t.type ? t.traverse(function (t) {
                    "group" !== t.type && u(t, e)
                }) : u(t, e), t.on("mouseover", c).on("mouseout", f), t.on("emphasis", d).on("normal", p)
            }, M.setText = function (t, e, i) {
                var n = e.getShallow("position") || "inside", r = n.indexOf("inside") >= 0 ? "white" : i, a = e.getModel("textStyle");
                v.extend(t, {
                    textDistance: e.getShallow("distance") || 5,
                    textFont: a.getFont(),
                    textPosition: n,
                    textFill: a.getTextColor() || r
                })
            }, M.updateProps = function (t, e, i, n, r) {
                g(!0, t, e, i, n, r)
            }, M.initProps = function (t, e, i, n, r) {
                g(!1, t, e, i, n, r)
            }, M.getTransform = function (t, e) {
                for (var i = b.identity([]); t && t !== e;)b.mul(i, t.getLocalTransform(), i), t = t.parent;
                return i
            }, M.applyTransform = function (t, e, i) {
                return i && (e = b.invert([], e)), w.applyTransform([], t, e)
            }, M.transformDirection = function (t, e, i) {
                var n = 0 === e[4] || 0 === e[5] || 0 === e[0] ? 1 : Math.abs(2 * e[4] / e[0]), r = 0 === e[4] || 0 === e[5] || 0 === e[2] ? 1 : Math.abs(2 * e[4] / e[2]), a = ["left" === t ? -n : "right" === t ? n : 0, "top" === t ? -r : "bottom" === t ? r : 0];
                return a = M.applyTransform(a, e, i), Math.abs(a[0]) > Math.abs(a[1]) ? a[0] > 0 ? "right" : "left" : a[1] > 0 ? "bottom" : "top"
            }, M.groupTransition = function (t, e, i, n) {
                function r(t) {
                    var e = {};
                    return t.traverse(function (t) {
                        !t.isGroup && t.anid && (e[t.anid] = t)
                    }), e
                }

                function a(t) {
                    var e = {position: w.clone(t.position), rotation: t.rotation};
                    return t.shape && (e.shape = v.extend({}, t.shape)), e
                }

                if (t && e) {
                    var o = r(t);
                    e.traverse(function (t) {
                        if (!t.isGroup && t.anid) {
                            var e = o[t.anid];
                            if (e) {
                                var n = a(t);
                                t.attr(a(e)), M.updateProps(t, n, i, t.dataIndex)
                            }
                        }
                    })
                }
            }, t.exports = M
        }, function (t, e) {
            function i(t) {
                return t.replace(/^\s+/, "").replace(/\s+$/, "")
            }

            var n = {}, r = 1e-4;
            n.linearMap = function (t, e, i, n) {
                var r = e[1] - e[0], a = i[1] - i[0];
                if (0 === r)return 0 === a ? i[0] : (i[0] + i[1]) / 2;
                if (n)if (r > 0) {
                    if (t <= e[0])return i[0];
                    if (t >= e[1])return i[1]
                } else {
                    if (t >= e[0])return i[0];
                    if (t <= e[1])return i[1]
                } else {
                    if (t === e[0])return i[0];
                    if (t === e[1])return i[1]
                }
                return (t - e[0]) / r * a + i[0]
            }, n.parsePercent = function (t, e) {
                switch (t) {
                    case"center":
                    case"middle":
                        t = "50%";
                        break;
                    case"left":
                    case"top":
                        t = "0%";
                        break;
                    case"right":
                    case"bottom":
                        t = "100%"
                }
                return "string" == typeof t ? i(t).match(/%$/) ? parseFloat(t) / 100 * e : parseFloat(t) : null == t ? NaN : +t
            }, n.round = function (t, e) {
                return null == e && (e = 10), e = Math.min(Math.max(0, e), 20), +(+t).toFixed(e)
            }, n.asc = function (t) {
                return t.sort(function (t, e) {
                    return t - e
                }), t
            }, n.getPrecision = function (t) {
                if (t = +t, isNaN(t))return 0;
                for (var e = 1, i = 0; Math.round(t * e) / e !== t;)e *= 10, i++;
                return i
            }, n.getPrecisionSafe = function (t) {
                var e = t.toString(), i = e.indexOf(".");
                return i < 0 ? 0 : e.length - 1 - i
            }, n.getPixelPrecision = function (t, e) {
                var i = Math.log, n = Math.LN10, r = Math.floor(i(t[1] - t[0]) / n), a = Math.round(i(Math.abs(e[1] - e[0])) / n);
                return Math.max(-r + a, 0)
            }, n.MAX_SAFE_INTEGER = 9007199254740991, n.remRadian = function (t) {
                var e = 2 * Math.PI;
                return (t % e + e) % e
            }, n.isRadianAroundZero = function (t) {
                return t > -r && t < r
            }, n.parseDate = function (t) {
                if (t instanceof Date)return t;
                if ("string" == typeof t) {
                    var e = new Date(t);
                    return isNaN(+e) && (e = new Date(new Date(t.replace(/-/g, "/")) - new Date("1970/01/01"))), e
                }
                return new Date(Math.round(t))
            }, n.quantity = function (t) {
                return Math.pow(10, Math.floor(Math.log(t) / Math.LN10))
            }, n.nice = function (t, e) {
                var i, r = n.quantity(t), a = t / r;
                return i = e ? a < 1.5 ? 1 : a < 2.5 ? 2 : a < 4 ? 3 : a < 7 ? 5 : 10 : a < 1 ? 1 : a < 2 ? 2 : a < 3 ? 3 : a < 5 ? 5 : 10, i * r
            }, t.exports = n
        }, function (t, e) {
            var i = "undefined" == typeof Float32Array ? Array : Float32Array, n = {
                create: function (t, e) {
                    var n = new i(2);
                    return null == t && (t = 0), null == e && (e = 0), n[0] = t, n[1] = e, n
                }, copy: function (t, e) {
                    return t[0] = e[0], t[1] = e[1], t
                }, clone: function (t) {
                    var e = new i(2);
                    return e[0] = t[0], e[1] = t[1], e
                }, set: function (t, e, i) {
                    return t[0] = e, t[1] = i, t
                }, add: function (t, e, i) {
                    return t[0] = e[0] + i[0], t[1] = e[1] + i[1], t
                }, scaleAndAdd: function (t, e, i, n) {
                    return t[0] = e[0] + i[0] * n, t[1] = e[1] + i[1] * n, t
                }, sub: function (t, e, i) {
                    return t[0] = e[0] - i[0], t[1] = e[1] - i[1], t
                }, len: function (t) {
                    return Math.sqrt(this.lenSquare(t))
                }, lenSquare: function (t) {
                    return t[0] * t[0] + t[1] * t[1]
                }, mul: function (t, e, i) {
                    return t[0] = e[0] * i[0], t[1] = e[1] * i[1], t
                }, div: function (t, e, i) {
                    return t[0] = e[0] / i[0], t[1] = e[1] / i[1], t
                }, dot: function (t, e) {
                    return t[0] * e[0] + t[1] * e[1]
                }, scale: function (t, e, i) {
                    return t[0] = e[0] * i, t[1] = e[1] * i, t
                }, normalize: function (t, e) {
                    var i = n.len(e);
                    return 0 === i ? (t[0] = 0, t[1] = 0) : (t[0] = e[0] / i, t[1] = e[1] / i), t
                }, distance: function (t, e) {
                    return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]))
                }, distanceSquare: function (t, e) {
                    return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1])
                }, negate: function (t, e) {
                    return t[0] = -e[0], t[1] = -e[1], t
                }, lerp: function (t, e, i, n) {
                    return t[0] = e[0] + n * (i[0] - e[0]), t[1] = e[1] + n * (i[1] - e[1]), t
                }, applyTransform: function (t, e, i) {
                    var n = e[0], r = e[1];
                    return t[0] = i[0] * n + i[2] * r + i[4], t[1] = i[1] * n + i[3] * r + i[5], t
                }, min: function (t, e, i) {
                    return t[0] = Math.min(e[0], i[0]), t[1] = Math.min(e[1], i[1]), t
                }, max: function (t, e, i) {
                    return t[0] = Math.max(e[0], i[0]), t[1] = Math.max(e[1], i[1]), t
                }
            };
            n.length = n.len, n.lengthSquare = n.lenSquare, n.dist = n.distance, n.distSquare = n.distanceSquare, t.exports = n
        }, function (t, e, i) {
            function n(t) {
                r.call(this, t), this.path = new o
            }

            var r = i(37), a = i(1), o = i(28), s = i(148), l = i(63), h = l.prototype.getCanvasPattern, u = Math.abs;
            n.prototype = {
                constructor: n,
                type: "path",
                __dirtyPath: !0,
                strokeContainThreshold: 5,
                brush: function (t, e) {
                    var i = this.style, n = this.path, r = i.hasStroke(), a = i.hasFill(), o = i.fill, s = i.stroke, l = a && !!o.colorStops, u = r && !!s.colorStops, c = a && !!o.image, f = r && !!s.image;
                    if (i.bind(t, this, e), this.setTransform(t), this.__dirty) {
                        var d = this.getBoundingRect();
                        l && (this._fillGradient = i.getGradient(t, o, d)), u && (this._strokeGradient = i.getGradient(t, s, d))
                    }
                    l ? t.fillStyle = this._fillGradient : c && (t.fillStyle = h.call(o, t)), u ? t.strokeStyle = this._strokeGradient : f && (t.strokeStyle = h.call(s, t));
                    var p = i.lineDash, g = i.lineDashOffset, v = !!t.setLineDash, m = this.getGlobalScale();
                    n.setScale(m[0], m[1]), this.__dirtyPath || p && !v && r ? (n = this.path.beginPath(t), p && !v && (n.setLineDash(p), n.setLineDashOffset(g)), this.buildPath(n, this.shape, !1), this.__dirtyPath = !1) : (t.beginPath(), this.path.rebuildPath(t)), a && n.fill(t), p && v && (t.setLineDash(p), t.lineDashOffset = g), r && n.stroke(t), p && v && t.setLineDash([]), this.restoreTransform(t), (i.text || 0 === i.text) && this.drawRectText(t, this.getBoundingRect())
                },
                buildPath: function (t, e, i) {
                },
                getBoundingRect: function () {
                    var t = this._rect, e = this.style, i = !t;
                    if (i) {
                        var n = this.path;
                        this.__dirtyPath && (n.beginPath(), this.buildPath(n, this.shape, !1)), t = n.getBoundingRect()
                    }
                    if (this._rect = t, e.hasStroke()) {
                        var r = this._rectWithStroke || (this._rectWithStroke = t.clone());
                        if (this.__dirty || i) {
                            r.copy(t);
                            var a = e.lineWidth, o = e.strokeNoScale ? this.getLineScale() : 1;
                            e.hasFill() || (a = Math.max(a, this.strokeContainThreshold || 4)), o > 1e-10 && (r.width += a / o, r.height += a / o, r.x -= a / o / 2, r.y -= a / o / 2)
                        }
                        return r
                    }
                    return t
                },
                contain: function (t, e) {
                    var i = this.transformCoordToLocal(t, e), n = this.getBoundingRect(), r = this.style;
                    if (t = i[0], e = i[1], n.contain(t, e)) {
                        var a = this.path.data;
                        if (r.hasStroke()) {
                            var o = r.lineWidth, l = r.strokeNoScale ? this.getLineScale() : 1;
                            if (l > 1e-10 && (r.hasFill() || (o = Math.max(o, this.strokeContainThreshold)), s.containStroke(a, o / l, t, e)))return !0
                        }
                        if (r.hasFill())return s.contain(a, t, e)
                    }
                    return !1
                },
                dirty: function (t) {
                    null == t && (t = !0), t && (this.__dirtyPath = t, this._rect = null), this.__dirty = !0, this.__zr && this.__zr.refresh(), this.__clipTarget && this.__clipTarget.dirty()
                },
                animateShape: function (t) {
                    return this.animate("shape", t)
                },
                attrKV: function (t, e) {
                    "shape" === t ? (this.setShape(e), this.__dirtyPath = !0, this._rect = null) : r.prototype.attrKV.call(this, t, e)
                },
                setShape: function (t, e) {
                    var i = this.shape;
                    if (i) {
                        if (a.isObject(t))for (var n in t)t.hasOwnProperty(n) && (i[n] = t[n]); else i[t] = e;
                        this.dirty(!0)
                    }
                    return this
                },
                getLineScale: function () {
                    var t = this.transform;
                    return t && u(t[0] - 1) > 1e-10 && u(t[3] - 1) > 1e-10 ? Math.sqrt(u(t[0] * t[3] - t[2] * t[1])) : 1
                }
            }, n.extend = function (t) {
                var e = function (e) {
                    n.call(this, e), t.style && this.style.extendFrom(t.style, !1);
                    var i = t.shape;
                    if (i) {
                        this.shape = this.shape || {};
                        var r = this.shape;
                        for (var a in i)!r.hasOwnProperty(a) && i.hasOwnProperty(a) && (r[a] = i[a])
                    }
                    t.init && t.init.call(this, e)
                };
                a.inherits(e, n);
                for (var i in t)"style" !== i && "shape" !== i && (e.prototype[i] = t[i]);
                return e
            }, a.inherits(n, r), t.exports = n
        }, function (t, e, i) {
            function n(t, e) {
                return t && t.hasOwnProperty(e)
            }

            var r = i(9), a = i(4), o = i(10), s = i(1), l = {};
            l.normalizeToArray = function (t) {
                return t instanceof Array ? t : null == t ? [] : [t]
            }, l.defaultEmphasis = function (t, e) {
                if (t) {
                    var i = t.emphasis = t.emphasis || {}, n = t.normal = t.normal || {};
                    s.each(e, function (t) {
                        var e = s.retrieve(i[t], n[t]);
                        null != e && (i[t] = e)
                    })
                }
            }, l.LABEL_OPTIONS = ["position", "show", "textStyle", "distance", "formatter"], l.getDataItemValue = function (t) {
                return t && (null == t.value ? t : t.value)
            }, l.isDataItemOption = function (t) {
                return s.isObject(t) && !(t instanceof Array)
            }, l.converDataValue = function (t, e) {
                var i = e && e.type;
                return "ordinal" === i ? t : ("time" !== i || isFinite(t) || null == t || "-" === t || (t = +a.parseDate(t)), null == t || "" === t ? NaN : +t)
            }, l.createDataFormatModel = function (t, e) {
                var i = new o;
                return s.mixin(i, l.dataFormatMixin), i.seriesIndex = e.seriesIndex, i.name = e.name || "", i.mainType = e.mainType, i.subType = e.subType, i.getData = function () {
                    return t
                }, i
            }, l.dataFormatMixin = {
                getDataParams: function (t, e) {
                    var i = this.getData(e), n = this.seriesIndex, r = this.name, a = this.getRawValue(t, e), o = i.getRawIndex(t), s = i.getName(t, !0), l = i.getRawDataItem(t);
                    return {
                        componentType: this.mainType,
                        componentSubType: this.subType,
                        seriesType: "series" === this.mainType ? this.subType : null,
                        seriesIndex: n,
                        seriesName: r,
                        name: s,
                        dataIndex: o,
                        data: l,
                        dataType: e,
                        value: a,
                        color: i.getItemVisual(t, "color"),
                        $vars: ["seriesName", "name", "value"]
                    }
                }, getFormattedLabel: function (t, e, i, n) {
                    e = e || "normal";
                    var a = this.getData(i), o = a.getItemModel(t), s = this.getDataParams(t, i);
                    null != n && s.value instanceof Array && (s.value = s.value[n]);
                    var l = o.get(["label", e, "formatter"]);
                    return "function" == typeof l ? (s.status = e, l(s)) : "string" == typeof l ? r.formatTpl(l, s) : void 0
                }, getRawValue: function (t, e) {
                    var i = this.getData(e), n = i.getRawDataItem(t);
                    if (null != n)return !s.isObject(n) || n instanceof Array ? n : n.value
                }, formatTooltip: s.noop
            }, l.mappingToExists = function (t, e) {
                e = (e || []).slice();
                var i = s.map(t || [], function (t, e) {
                    return {exist: t}
                });
                return s.each(e, function (t, n) {
                    if (s.isObject(t)) {
                        for (var r = 0; r < i.length; r++)if (!i[r].option && null != t.id && i[r].exist.id === t.id + "")return i[r].option = t, void(e[n] = null);
                        for (var r = 0; r < i.length; r++) {
                            var a = i[r].exist;
                            if (!(i[r].option || null != a.id && null != t.id || null == t.name || l.isIdInner(t) || l.isIdInner(a) || a.name !== t.name + ""))return i[r].option = t, void(e[n] = null)
                        }
                    }
                }), s.each(e, function (t, e) {
                    if (s.isObject(t)) {
                        for (var n = 0; n < i.length; n++) {
                            var r = i[n].exist;
                            if (!i[n].option && !l.isIdInner(r) && null == t.id) {
                                i[n].option = t;
                                break
                            }
                        }
                        n >= i.length && i.push({option: t})
                    }
                }), i
            }, l.isIdInner = function (t) {
                return s.isObject(t) && t.id && 0 === (t.id + "").indexOf("\0_ec_\0")
            }, l.compressBatches = function (t, e) {
                function i(t, e, i) {
                    for (var n = 0, r = t.length; n < r; n++)for (var a = t[n].seriesId, o = l.normalizeToArray(t[n].dataIndex), s = i && i[a], h = 0, u = o.length; h < u; h++) {
                        var c = o[h];
                        s && s[c] ? s[c] = null : (e[a] || (e[a] = {}))[c] = 1
                    }
                }

                function n(t, e) {
                    var i = [];
                    for (var r in t)if (t.hasOwnProperty(r) && null != t[r])if (e)i.push(+r); else {
                        var a = n(t[r], !0);
                        a.length && i.push({seriesId: r, dataIndex: a})
                    }
                    return i
                }

                var r = {}, a = {};
                return i(t || [], r), i(e || [], a, r), [n(r), n(a)]
            }, l.queryDataIndex = function (t, e) {
                return null != e.dataIndexInside ? e.dataIndexInside : null != e.dataIndex ? s.isArray(e.dataIndex) ? s.map(e.dataIndex, function (e) {
                    return t.indexOfRawIndex(e)
                }) : t.indexOfRawIndex(e.dataIndex) : null != e.name ? s.isArray(e.name) ? s.map(e.name, function (e) {
                    return t.indexOfName(e)
                }) : t.indexOfName(e.name) : void 0
            }, l.parseFinder = function (t, e, i) {
                if (s.isString(e)) {
                    var r = {};
                    r[e + "Index"] = 0, e = r
                }
                var a = i && i.defaultMainType;
                !a || n(e, a + "Index") || n(e, a + "Id") || n(e, a + "Name") || (e[a + "Index"] = 0);
                var o = {};
                return s.each(e, function (i, n) {
                    var i = e[n];
                    if ("dataIndex" === n || "dataIndexInside" === n)return void(o[n] = i);
                    var r = n.match(/^(\w+)(Index|Id|Name)$/) || [], a = r[1], s = r[2];
                    if (a && s) {
                        var l = {mainType: a};
                        l[s.toLowerCase()] = i;
                        var h = t.queryComponents(l);
                        o[a + "Models"] = h, o[a + "Model"] = h[0]
                    }
                }), o
            }, t.exports = l
        }, function (t, e, i) {
            "use strict";
            function n(t, e, i, n) {
                i < 0 && (t += i, i = -i), n < 0 && (e += n, n = -n), this.x = t, this.y = e, this.width = i, this.height = n
            }

            var r = i(5), a = i(19), o = r.applyTransform, s = Math.min, l = Math.abs, h = Math.max;
            n.prototype = {
                constructor: n, union: function (t) {
                    var e = s(t.x, this.x), i = s(t.y, this.y);
                    this.width = h(t.x + t.width, this.x + this.width) - e, this.height = h(t.y + t.height, this.y + this.height) - i, this.x = e, this.y = i
                }, applyTransform: function () {
                    var t = [], e = [];
                    return function (i) {
                        i && (t[0] = this.x, t[1] = this.y, e[0] = this.x + this.width, e[1] = this.y + this.height, o(t, t, i), o(e, e, i), this.x = s(t[0], e[0]), this.y = s(t[1], e[1]), this.width = l(e[0] - t[0]), this.height = l(e[1] - t[1]))
                    }
                }(), calculateTransform: function (t) {
                    var e = this, i = t.width / e.width, n = t.height / e.height, r = a.create();
                    return a.translate(r, r, [-e.x, -e.y]), a.scale(r, r, [i, n]), a.translate(r, r, [t.x, t.y]), r
                }, intersect: function (t) {
                    t instanceof n || (t = n.create(t));
                    var e = this, i = e.x, r = e.x + e.width, a = e.y, o = e.y + e.height, s = t.x, l = t.x + t.width, h = t.y, u = t.y + t.height;
                    return !(r < s || l < i || o < h || u < a)
                }, contain: function (t, e) {
                    var i = this;
                    return t >= i.x && t <= i.x + i.width && e >= i.y && e <= i.y + i.height
                }, clone: function () {
                    return new n(this.x, this.y, this.width, this.height)
                }, copy: function (t) {
                    this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height
                }, plain: function () {
                    return {x: this.x, y: this.y, width: this.width, height: this.height}
                }
            }, n.create = function (t) {
                return new n(t.x, t.y, t.width, t.height)
            }, t.exports = n
        }, function (t, e, i) {
            var n = i(1), r = i(4), a = i(16), o = {};
            o.addCommas = function (t) {
                return isNaN(t) ? "-" : (t = (t + "").split("."), t[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (t.length > 1 ? "." + t[1] : ""))
            }, o.toCamelCase = function (t) {
                return t.toLowerCase().replace(/-(.)/g, function (t, e) {
                    return e.toUpperCase()
                })
            }, o.normalizeCssArray = function (t) {
                var e = t.length;
                return "number" == typeof t ? [t, t, t, t] : 2 === e ? [t[0], t[1], t[0], t[1]] : 3 === e ? [t[0], t[1], t[2], t[1]] : t
            }, o.encodeHTML = function (t) {
                return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
            };
            var s = ["a", "b", "c", "d", "e", "f", "g"], l = function (t, e) {
                return "{" + t + (null == e ? "" : e) + "}"
            };
            o.formatTpl = function (t, e) {
                n.isArray(e) || (e = [e]);
                var i = e.length;
                if (!i)return "";
                for (var r = e[0].$vars || [], a = 0; a < r.length; a++) {
                    var o = s[a];
                    t = t.replace(l(o), l(o, 0))
                }
                for (var h = 0; h < i; h++)for (var u = 0; u < r.length; u++)t = t.replace(l(s[u], h), e[h][r[u]]);
                return t
            };
            var h = function (t) {
                return t < 10 ? "0" + t : t
            };
            o.formatTime = function (t, e) {
                "week" !== t && "month" !== t && "quarter" !== t && "half-year" !== t && "year" !== t || (t = "MM-dd\nyyyy");
                var i = r.parseDate(e), n = i.getFullYear(), a = i.getMonth() + 1, o = i.getDate(), s = i.getHours(), l = i.getMinutes(), u = i.getSeconds();
                return t = t.replace("MM", h(a)).toLowerCase().replace("yyyy", n).replace("yy", n % 100).replace("dd", h(o)).replace("d", o).replace("hh", h(s)).replace("h", s).replace("mm", h(l)).replace("m", l).replace("ss", h(u)).replace("s", u)
            }, o.capitalFirst = function (t) {
                return t ? t.charAt(0).toUpperCase() + t.substr(1) : t
            }, o.truncateText = a.truncateText, t.exports = o
        }, function (t, e, i) {
            function n(t, e, i) {
                this.parentModel = e, this.ecModel = i, this.option = t
            }

            var r = i(1), a = i(21);
            n.prototype = {
                constructor: n, init: null, mergeOption: function (t) {
                    r.merge(this.option, t, !0)
                }, get: function (t, e) {
                    if (!t)return this.option;
                    "string" == typeof t && (t = t.split("."));
                    for (var i = this.option, n = this.parentModel, r = 0; r < t.length && (!t[r] || (i = i && "object" == typeof i ? i[t[r]] : null, null != i)); r++);
                    return null == i && n && !e && (i = n.get(t)), i
                }, getShallow: function (t, e) {
                    var i = this.option, n = null == i ? i : i[t], r = this.parentModel;
                    return null == n && r && !e && (n = r.getShallow(t)), n
                }, getModel: function (t, e) {
                    var i = this.get(t, !0), r = this.parentModel, a = new n(i, e || r && r.getModel(t), this.ecModel);
                    return a
                }, isEmpty: function () {
                    return null == this.option
                }, restoreData: function () {
                }, clone: function () {
                    var t = this.constructor;
                    return new t(r.clone(this.option))
                }, setReadOnly: function (t) {
                    a.setReadOnly(this, t)
                }
            }, a.enableClassExtend(n);
            var o = r.mixin;
            o(n, i(130)), o(n, i(127)), o(n, i(131)), o(n, i(129)), t.exports = n
        }, function (t, e) {
            function i(t) {
                var e = {}, i = {}, n = t.match(/Firefox\/([\d.]+)/), r = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/.+?rv:(([\d.]+))/), a = t.match(/Edge\/([\d.]+)/);
                return n && (i.firefox = !0, i.version = n[1]), r && (i.ie = !0, i.version = r[1]), a && (i.edge = !0, i.version = a[1]), {
                    browser: i,
                    os: e,
                    node: !1,
                    canvasSupported: !!document.createElement("canvas").getContext,
                    touchEventsSupported: "ontouchstart" in window && !i.ie && !i.edge,
                    pointerEventsSupported: "onpointerdown" in window && (i.edge || i.ie && i.version >= 10)
                }
            }

            var n = {};
            n = "undefined" == typeof navigator ? {
                browser: {},
                os: {},
                node: !0,
                canvasSupported: !0
            } : i(navigator.userAgent), t.exports = n
        }, function (t, e, i) {
            function n(t) {
                var e = [];
                return a.each(u.getClassesByMainType(t), function (t) {
                    o.apply(e, t.prototype.dependencies || [])
                }), a.map(e, function (t) {
                    return l.parseClassType(t).main
                })
            }

            var r = i(10), a = i(1), o = Array.prototype.push, s = i(43), l = i(21), h = i(13), u = r.extend({
                type: "component",
                id: "",
                name: "",
                mainType: "",
                subType: "",
                componentIndex: 0,
                defaultOption: null,
                ecModel: null,
                dependentModels: [],
                uid: null,
                layoutMode: null,
                $constructor: function (t, e, i, n) {
                    r.call(this, t, e, i, n), this.uid = s.getUID("componentModel")
                },
                init: function (t, e, i, n) {
                    this.mergeDefaultAndTheme(t, i)
                },
                mergeDefaultAndTheme: function (t, e) {
                    var i = this.layoutMode, n = i ? h.getLayoutParams(t) : {}, r = e.getTheme();
                    a.merge(t, r.get(this.mainType)), a.merge(t, this.getDefaultOption()), i && h.mergeLayoutParam(t, n, i)
                },
                mergeOption: function (t, e) {
                    a.merge(this.option, t, !0);
                    var i = this.layoutMode;
                    i && h.mergeLayoutParam(this.option, t, i)
                },
                optionUpdated: function (t, e) {
                },
                getDefaultOption: function () {
                    if (!this.hasOwnProperty("__defaultOption")) {
                        for (var t = [], e = this.constructor; e;) {
                            var i = e.prototype.defaultOption;
                            i && t.push(i), e = e.superClass
                        }
                        for (var n = {}, r = t.length - 1; r >= 0; r--)n = a.merge(n, t[r], !0);
                        this.__defaultOption = n
                    }
                    return this.__defaultOption
                },
                getReferringComponents: function (t) {
                    return this.ecModel.queryComponents({
                        mainType: t,
                        index: this.get(t + "Index", !0),
                        id: this.get(t + "Id", !0)
                    })
                }
            });
            l.enableClassManagement(u, {registerWhenExtend: !0}), s.enableSubTypeDefaulter(u), s.enableTopologicalTravel(u, n), a.mixin(u, i(128)), t.exports = u
        }, function (t, e, i) {
            "use strict";
            function n(t, e, i, n, r) {
                var a = 0, o = 0;
                null == n && (n = 1 / 0), null == r && (r = 1 / 0);
                var s = 0;
                e.eachChild(function (l, h) {
                    var u, c, f = l.position, d = l.getBoundingRect(), p = e.childAt(h + 1), g = p && p.getBoundingRect();
                    if ("horizontal" === t) {
                        var v = d.width + (g ? -g.x + d.x : 0);
                        u = a + v, u > n || l.newline ? (a = 0, u = v, o += s + i, s = d.height) : s = Math.max(s, d.height)
                    } else {
                        var m = d.height + (g ? -g.y + d.y : 0);
                        c = o + m, c > r || l.newline ? (a += s + i, o = 0, c = m, s = d.width) : s = Math.max(s, d.width)
                    }
                    l.newline || (f[0] = a, f[1] = o, "horizontal" === t ? a = u + i : o = c + i)
                })
            }

            var r = i(1), a = i(8), o = i(4), s = i(9), l = o.parsePercent, h = r.each, u = {}, c = ["left", "right", "top", "bottom", "width", "height"];
            u.box = n, u.vbox = r.curry(n, "vertical"), u.hbox = r.curry(n, "horizontal"), u.getAvailableSize = function (t, e, i) {
                var n = e.width, r = e.height, a = l(t.x, n), o = l(t.y, r), h = l(t.x2, n), u = l(t.y2, r);
                return (isNaN(a) || isNaN(parseFloat(t.x))) && (a = 0), (isNaN(h) || isNaN(parseFloat(t.x2))) && (h = n), (isNaN(o) || isNaN(parseFloat(t.y))) && (o = 0), (isNaN(u) || isNaN(parseFloat(t.y2))) && (u = r), i = s.normalizeCssArray(i || 0), {
                    width: Math.max(h - a - i[1] - i[3], 0),
                    height: Math.max(u - o - i[0] - i[2], 0)
                }
            }, u.getLayoutRect = function (t, e, i) {
                i = s.normalizeCssArray(i || 0);
                var n = e.width, r = e.height, o = l(t.left, n), h = l(t.top, r), u = l(t.right, n), c = l(t.bottom, r), f = l(t.width, n), d = l(t.height, r), p = i[2] + i[0], g = i[1] + i[3], v = t.aspect;
                switch (isNaN(f) && (f = n - u - g - o), isNaN(d) && (d = r - c - p - h), isNaN(f) && isNaN(d) && (v > n / r ? f = .8 * n : d = .8 * r), null != v && (isNaN(f) && (f = v * d), isNaN(d) && (d = f / v)), isNaN(o) && (o = n - u - f - g), isNaN(h) && (h = r - c - d - p), t.left || t.right) {
                    case"center":
                        o = n / 2 - f / 2 - i[3];
                        break;
                    case"right":
                        o = n - f - g
                }
                switch (t.top || t.bottom) {
                    case"middle":
                    case"center":
                        h = r / 2 - d / 2 - i[0];
                        break;
                    case"bottom":
                        h = r - d - p
                }
                o = o || 0, h = h || 0, isNaN(f) && (f = n - o - (u || 0)), isNaN(d) && (d = r - h - (c || 0));
                var m = new a(o + i[3], h + i[0], f, d);
                return m.margin = i, m
            }, u.positionGroup = function (t, e, i, n) {
                var a = t.getBoundingRect();
                e = r.extend(r.clone(e), {
                    width: a.width,
                    height: a.height
                }), e = u.getLayoutRect(e, i, n), t.attr("position", [e.x - a.x, e.y - a.y])
            }, u.mergeLayoutParam = function (t, e, i) {
                function n(n) {
                    var r = {}, s = 0, l = {}, u = 0, c = i.ignoreSize ? 1 : 2;
                    if (h(n, function (e) {
                            l[e] = t[e]
                        }), h(n, function (t) {
                            a(e, t) && (r[t] = l[t] = e[t]), o(r, t) && s++,
                            o(l, t) && u++
                        }), u !== c && s) {
                        if (s >= c)return r;
                        for (var f = 0; f < n.length; f++) {
                            var d = n[f];
                            if (!a(r, d) && a(t, d)) {
                                r[d] = t[d];
                                break
                            }
                        }
                        return r
                    }
                    return l
                }

                function a(t, e) {
                    return t.hasOwnProperty(e)
                }

                function o(t, e) {
                    return null != t[e] && "auto" !== t[e]
                }

                function s(t, e, i) {
                    h(t, function (t) {
                        e[t] = i[t]
                    })
                }

                !r.isObject(i) && (i = {});
                var l = ["width", "left", "right"], u = ["height", "top", "bottom"], c = n(l), f = n(u);
                s(l, t, c), s(u, t, f)
            }, u.getLayoutParams = function (t) {
                return u.copyLayoutParams({}, t)
            }, u.copyLayoutParams = function (t, e) {
                return e && t && h(c, function (i) {
                    e.hasOwnProperty(i) && (t[i] = e[i])
                }), t
            }, t.exports = u
        }, function (t, e, i) {
            (function (e) {
                function n(t) {
                    return f.isArray(t) || (t = [t]), t
                }

                function r(t, e) {
                    var i = t.dimensions, n = new m(f.map(i, t.getDimensionInfo, t), t.hostModel);
                    v(n, t);
                    for (var r = n._storage = {}, a = t._storage, o = 0; o < i.length; o++) {
                        var s = i[o], l = a[s];
                        f.indexOf(e, s) >= 0 ? r[s] = new l.constructor(a[s].length) : r[s] = a[s]
                    }
                    return n
                }

                var a = "undefined", o = "undefined" == typeof window ? e : window, s = typeof o.Float64Array === a ? Array : o.Float64Array, l = typeof o.Int32Array === a ? Array : o.Int32Array, h = {
                    "float": s,
                    "int": l,
                    ordinal: Array,
                    number: Array,
                    time: Array
                }, u = i(10), c = i(45), f = i(1), d = i(7), p = f.isObject, g = ["stackedOn", "hasItemOption", "_nameList", "_idList", "_rawData"], v = function (t, e) {
                    f.each(g.concat(e.__wrappedMethods || []), function (i) {
                        e.hasOwnProperty(i) && (t[i] = e[i])
                    }), t.__wrappedMethods = e.__wrappedMethods
                }, m = function (t, e) {
                    t = t || ["x", "y"];
                    for (var i = {}, n = [], r = 0; r < t.length; r++) {
                        var a, o = {};
                        "string" == typeof t[r] ? (a = t[r], o = {
                            name: a,
                            stackable: !1,
                            type: "number"
                        }) : (o = t[r], a = o.name, o.type = o.type || "number"), n.push(a), i[a] = o
                    }
                    this.dimensions = n, this._dimensionInfos = i, this.hostModel = e, this.dataType, this.indices = [], this._storage = {}, this._nameList = [], this._idList = [], this._optionModels = [], this.stackedOn = null, this._visual = {}, this._layout = {}, this._itemVisuals = [], this._itemLayouts = [], this._graphicEls = [], this._rawData, this._extent
                }, y = m.prototype;
                y.type = "list", y.hasItemOption = !0, y.getDimension = function (t) {
                    return isNaN(t) || (t = this.dimensions[t] || t), t
                }, y.getDimensionInfo = function (t) {
                    return f.clone(this._dimensionInfos[this.getDimension(t)])
                }, y.initData = function (t, e, i) {
                    t = t || [], this._rawData = t;
                    var n = this._storage = {}, r = this.indices = [], a = this.dimensions, o = t.length, s = this._dimensionInfos, l = [], u = {};
                    e = e || [];
                    for (var c = 0; c < a.length; c++) {
                        var f = s[a[c]], p = h[f.type];
                        n[a[c]] = new p(o)
                    }
                    var g = this;
                    i || (g.hasItemOption = !1), i = i || function (t, e, i, n) {
                            var r = d.getDataItemValue(t);
                            return d.isDataItemOption(t) && (g.hasItemOption = !0), d.converDataValue(r instanceof Array ? r[n] : r, s[e])
                        };
                    for (var v = 0; v < t.length; v++) {
                        for (var m = t[v], y = 0; y < a.length; y++) {
                            var x = a[y], _ = n[x];
                            _[v] = i(m, x, v, y)
                        }
                        r.push(v)
                    }
                    for (var c = 0; c < t.length; c++) {
                        e[c] || t[c] && null != t[c].name && (e[c] = t[c].name);
                        var b = e[c] || "", w = t[c] && t[c].id;
                        !w && b && (u[b] = u[b] || 0, w = b, u[b] > 0 && (w += "__ec__" + u[b]), u[b]++), w && (l[c] = w)
                    }
                    this._nameList = e, this._idList = l
                }, y.count = function () {
                    return this.indices.length
                }, y.get = function (t, e, i) {
                    var n = this._storage, r = this.indices[e];
                    if (null == r)return NaN;
                    var a = n[t] && n[t][r];
                    if (i) {
                        var o = this._dimensionInfos[t];
                        if (o && o.stackable)for (var s = this.stackedOn; s;) {
                            var l = s.get(t, e);
                            (a >= 0 && l > 0 || a <= 0 && l < 0) && (a += l), s = s.stackedOn
                        }
                    }
                    return a
                }, y.getValues = function (t, e, i) {
                    var n = [];
                    f.isArray(t) || (i = e, e = t, t = this.dimensions);
                    for (var r = 0, a = t.length; r < a; r++)n.push(this.get(t[r], e, i));
                    return n
                }, y.hasValue = function (t) {
                    for (var e = this.dimensions, i = this._dimensionInfos, n = 0, r = e.length; n < r; n++)if ("ordinal" !== i[e[n]].type && isNaN(this.get(e[n], t)))return !1;
                    return !0
                }, y.getDataExtent = function (t, e) {
                    t = this.getDimension(t);
                    var i = this._storage[t], n = this.getDimensionInfo(t);
                    e = n && n.stackable && e;
                    var r, a = (this._extent || (this._extent = {}))[t + !!e];
                    if (a)return a;
                    if (i) {
                        for (var o = 1 / 0, s = -(1 / 0), l = 0, h = this.count(); l < h; l++)r = this.get(t, l, e), r < o && (o = r), r > s && (s = r);
                        return this._extent[t + !!e] = [o, s]
                    }
                    return [1 / 0, -(1 / 0)]
                }, y.getSum = function (t, e) {
                    var i = this._storage[t], n = 0;
                    if (i)for (var r = 0, a = this.count(); r < a; r++) {
                        var o = this.get(t, r, e);
                        isNaN(o) || (n += o)
                    }
                    return n
                }, y.indexOf = function (t, e) {
                    var i = this._storage, n = i[t], r = this.indices;
                    if (n)for (var a = 0, o = r.length; a < o; a++) {
                        var s = r[a];
                        if (n[s] === e)return a
                    }
                    return -1
                }, y.indexOfName = function (t) {
                    for (var e = this.indices, i = this._nameList, n = 0, r = e.length; n < r; n++) {
                        var a = e[n];
                        if (i[a] === t)return n
                    }
                    return -1
                }, y.indexOfRawIndex = function (t) {
                    var e = this.indices, i = e[t];
                    if (null != i && i === t)return t;
                    for (var n = 0, r = e.length - 1; n <= r;) {
                        var a = (n + r) / 2 | 0;
                        if (e[a] < t)n = a + 1; else {
                            if (!(e[a] > t))return a;
                            r = a - 1
                        }
                    }
                    return -1
                }, y.indexOfNearest = function (t, e, i, n) {
                    var r = this._storage, a = r[t];
                    null == n && (n = 1 / 0);
                    var o = -1;
                    if (a)for (var s = Number.MAX_VALUE, l = 0, h = this.count(); l < h; l++) {
                        var u = e - this.get(t, l, i), c = Math.abs(u);
                        u <= n && (c < s || c === s && u > 0) && (s = c, o = l)
                    }
                    return o
                }, y.getRawIndex = function (t) {
                    var e = this.indices[t];
                    return null == e ? -1 : e
                }, y.getRawDataItem = function (t) {
                    return this._rawData[this.getRawIndex(t)]
                }, y.getName = function (t) {
                    return this._nameList[this.indices[t]] || ""
                }, y.getId = function (t) {
                    return this._idList[this.indices[t]] || this.getRawIndex(t) + ""
                }, y.each = function (t, e, i, r) {
                    "function" == typeof t && (r = i, i = e, e = t, t = []), t = f.map(n(t), this.getDimension, this);
                    var a = [], o = t.length, s = this.indices;
                    r = r || this;
                    for (var l = 0; l < s.length; l++)switch (o) {
                        case 0:
                            e.call(r, l);
                            break;
                        case 1:
                            e.call(r, this.get(t[0], l, i), l);
                            break;
                        case 2:
                            e.call(r, this.get(t[0], l, i), this.get(t[1], l, i), l);
                            break;
                        default:
                            for (var h = 0; h < o; h++)a[h] = this.get(t[h], l, i);
                            a[h] = l, e.apply(r, a)
                    }
                }, y.filterSelf = function (t, e, i, r) {
                    "function" == typeof t && (r = i, i = e, e = t, t = []), t = f.map(n(t), this.getDimension, this);
                    var a = [], o = [], s = t.length, l = this.indices;
                    r = r || this;
                    for (var h = 0; h < l.length; h++) {
                        var u;
                        if (1 === s)u = e.call(r, this.get(t[0], h, i), h); else {
                            for (var c = 0; c < s; c++)o[c] = this.get(t[c], h, i);
                            o[c] = h, u = e.apply(r, o)
                        }
                        u && a.push(l[h])
                    }
                    return this.indices = a, this._extent = {}, this
                }, y.mapArray = function (t, e, i, n) {
                    "function" == typeof t && (n = i, i = e, e = t, t = []);
                    var r = [];
                    return this.each(t, function () {
                        r.push(e && e.apply(this, arguments))
                    }, i, n), r
                }, y.map = function (t, e, i, a) {
                    t = f.map(n(t), this.getDimension, this);
                    var o = r(this, t), s = o.indices = this.indices, l = o._storage, h = [];
                    return this.each(t, function () {
                        var i = arguments[arguments.length - 1], n = e && e.apply(this, arguments);
                        if (null != n) {
                            "number" == typeof n && (h[0] = n, n = h);
                            for (var r = 0; r < n.length; r++) {
                                var a = t[r], o = l[a], u = s[i];
                                o && (o[u] = n[r])
                            }
                        }
                    }, i, a), o
                }, y.downSample = function (t, e, i, n) {
                    for (var a = r(this, [t]), o = this._storage, s = a._storage, l = this.indices, h = a.indices = [], u = [], c = [], f = Math.floor(1 / e), d = s[t], p = this.count(), g = 0; g < o[t].length; g++)s[t][g] = o[t][g];
                    for (var g = 0; g < p; g += f) {
                        f > p - g && (f = p - g, u.length = f);
                        for (var v = 0; v < f; v++) {
                            var m = l[g + v];
                            u[v] = d[m], c[v] = m
                        }
                        var y = i(u), m = c[n(u, y) || 0];
                        d[m] = y, h.push(m)
                    }
                    return a
                }, y.getItemModel = function (t) {
                    var e = this.hostModel;
                    return t = this.indices[t], new u(this._rawData[t], e, e && e.ecModel)
                }, y.diff = function (t) {
                    var e = this._idList, i = t && t._idList;
                    return new c(t ? t.indices : [], this.indices, function (t) {
                        return i[t] || t + ""
                    }, function (t) {
                        return e[t] || t + ""
                    })
                }, y.getVisual = function (t) {
                    var e = this._visual;
                    return e && e[t]
                }, y.setVisual = function (t, e) {
                    if (p(t))for (var i in t)t.hasOwnProperty(i) && this.setVisual(i, t[i]); else this._visual = this._visual || {}, this._visual[t] = e
                }, y.setLayout = function (t, e) {
                    if (p(t))for (var i in t)t.hasOwnProperty(i) && this.setLayout(i, t[i]); else this._layout[t] = e
                }, y.getLayout = function (t) {
                    return this._layout[t]
                }, y.getItemLayout = function (t) {
                    return this._itemLayouts[t]
                }, y.setItemLayout = function (t, e, i) {
                    this._itemLayouts[t] = i ? f.extend(this._itemLayouts[t] || {}, e) : e
                }, y.clearItemLayouts = function () {
                    this._itemLayouts.length = 0
                }, y.getItemVisual = function (t, e, i) {
                    var n = this._itemVisuals[t], r = n && n[e];
                    return null != r || i ? r : this.getVisual(e)
                }, y.setItemVisual = function (t, e, i) {
                    var n = this._itemVisuals[t] || {};
                    if (this._itemVisuals[t] = n, p(e))for (var r in e)e.hasOwnProperty(r) && (n[r] = e[r]); else n[e] = i
                }, y.clearAllVisual = function () {
                    this._visual = {}, this._itemVisuals = []
                };
                var x = function (t) {
                    t.seriesIndex = this.seriesIndex, t.dataIndex = this.dataIndex, t.dataType = this.dataType
                };
                y.setItemGraphicEl = function (t, e) {
                    var i = this.hostModel;
                    e && (e.dataIndex = t, e.dataType = this.dataType, e.seriesIndex = i && i.seriesIndex, "group" === e.type && e.traverse(x, e)), this._graphicEls[t] = e
                }, y.getItemGraphicEl = function (t) {
                    return this._graphicEls[t]
                }, y.eachItemGraphicEl = function (t, e) {
                    f.each(this._graphicEls, function (i, n) {
                        i && t && t.call(e, i, n)
                    })
                }, y.cloneShallow = function () {
                    var t = f.map(this.dimensions, this.getDimensionInfo, this), e = new m(t, this.hostModel);
                    return e._storage = this._storage, v(e, this), e.indices = this.indices.slice(), this._extent && (e._extent = f.extend({}, this._extent)), e
                }, y.wrapMethod = function (t, e) {
                    var i = this[t];
                    "function" == typeof i && (this.__wrappedMethods = this.__wrappedMethods || [], this.__wrappedMethods.push(t), this[t] = function () {
                        var t = i.apply(this, arguments);
                        return e.apply(this, [t].concat(f.slice(arguments)))
                    })
                }, y.TRANSFERABLE_METHODS = ["cloneShallow", "downSample", "map"], y.CHANGABLE_METHODS = ["filterSelf"], t.exports = m
            }).call(e, function () {
                return this
            }())
        }, function (t, e, i) {
            "use strict";
            var n = i(1), r = i(9), a = i(7), o = i(12), s = i(56), l = i(11), h = r.encodeHTML, u = r.addCommas, c = o.extend({
                type: "series.__base__",
                seriesIndex: 0,
                coordinateSystem: null,
                defaultOption: null,
                legendDataProvider: null,
                visualColorAccessPath: "itemStyle.normal.color",
                init: function (t, e, i, n) {
                    this.seriesIndex = this.componentIndex, this.mergeDefaultAndTheme(t, i), this._dataBeforeProcessed = this.getInitialData(t, i), this._data = this._dataBeforeProcessed.cloneShallow()
                },
                mergeDefaultAndTheme: function (t, e) {
                    n.merge(t, e.getTheme().get(this.subType)), n.merge(t, this.getDefaultOption()), a.defaultEmphasis(t.label, a.LABEL_OPTIONS), this.fillDataTextStyle(t.data)
                },
                mergeOption: function (t, e) {
                    t = n.merge(this.option, t, !0), this.fillDataTextStyle(t.data);
                    var i = this.getInitialData(t, e);
                    i && (this._data = i, this._dataBeforeProcessed = i.cloneShallow())
                },
                fillDataTextStyle: function (t) {
                    if (t)for (var e = 0; e < t.length; e++)t[e] && t[e].label && a.defaultEmphasis(t[e].label, a.LABEL_OPTIONS)
                },
                getInitialData: function () {
                },
                getData: function (t) {
                    return null == t ? this._data : this._data.getLinkedData(t)
                },
                setData: function (t) {
                    this._data = t
                },
                getRawData: function () {
                    return this._dataBeforeProcessed
                },
                coordDimToDataDim: function (t) {
                    return [t]
                },
                dataDimToCoordDim: function (t) {
                    return t
                },
                getBaseAxis: function () {
                    var t = this.coordinateSystem;
                    return t && t.getBaseAxis && t.getBaseAxis()
                },
                formatTooltip: function (t, e, i) {
                    function a(t) {
                        var i = [];
                        return n.each(t, function (t, n) {
                            var a, s = o.getDimensionInfo(n), l = s && s.type;
                            a = "ordinal" === l ? t + "" : "time" === l ? e ? "" : r.formatTime("yyyy/mm/dd hh:mm:ss", t) : u(t), a && i.push(a)
                        }), i.join(", ")
                    }

                    var o = this._data, s = this.getRawValue(t), l = n.isArray(s) ? a(s) : u(s), c = o.getName(t), f = o.getItemVisual(t, "color"), d = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + f + '"></span>', p = this.name;
                    return "\0-" === p && (p = ""), e ? d + h(this.name) + " : " + l : (p && h(p) + "<br />") + d + (c ? h(c) + " : " + l : l)
                },
                ifEnableAnimation: function () {
                    if (l.node)return !1;
                    var t = this.getShallow("animation");
                    return t && this.getData().count() > this.getShallow("animationThreshold") && (t = !1), t
                },
                restoreData: function () {
                    this._data = this._dataBeforeProcessed.cloneShallow()
                },
                getColorFromPalette: function (t, e) {
                    var i = this.ecModel, n = s.getColorFromPalette.call(this, t, e);
                    return n || (n = i.getColorFromPalette(t, e)), n
                },
                getAxisTooltipDataIndex: null,
                getTooltipPosition: null
            });
            n.mixin(c, a.dataFormatMixin), n.mixin(c, s), t.exports = c
        }, function (t, e, i) {
            function n(t, e) {
                var i = t + ":" + e;
                if (l[i])return l[i];
                for (var n = (t + "").split("\n"), r = 0, a = 0, o = n.length; a < o; a++)r = Math.max(p.measureText(n[a], e).width, r);
                return h > u && (h = 0, l = {}), h++, l[i] = r, r
            }

            function r(t, e, i, r) {
                var a = ((t || "") + "").split("\n").length, o = n(t, e), s = n("???", e), l = a * s, h = new f(0, 0, o, l);
                switch (h.lineHeight = s, r) {
                    case"bottom":
                    case"alphabetic":
                        h.y -= s;
                        break;
                    case"middle":
                        h.y -= s / 2
                }
                switch (i) {
                    case"end":
                    case"right":
                        h.x -= h.width;
                        break;
                    case"center":
                        h.x -= h.width / 2
                }
                return h
            }

            function a(t, e, i, n) {
                var r = e.x, a = e.y, o = e.height, s = e.width, l = i.height, h = o / 2 - l / 2, u = "left";
                switch (t) {
                    case"left":
                        r -= n, a += h, u = "right";
                        break;
                    case"right":
                        r += n + s, a += h, u = "left";
                        break;
                    case"top":
                        r += s / 2, a -= n + l, u = "center";
                        break;
                    case"bottom":
                        r += s / 2, a += o + n, u = "center";
                        break;
                    case"inside":
                        r += s / 2, a += h, u = "center";
                        break;
                    case"insideLeft":
                        r += n, a += h, u = "left";
                        break;
                    case"insideRight":
                        r += s - n, a += h, u = "right";
                        break;
                    case"insideTop":
                        r += s / 2, a += n, u = "center";
                        break;
                    case"insideBottom":
                        r += s / 2, a += o - l - n, u = "center";
                        break;
                    case"insideTopLeft":
                        r += n, a += n, u = "left";
                        break;
                    case"insideTopRight":
                        r += s - n, a += n, u = "right";
                        break;
                    case"insideBottomLeft":
                        r += n, a += o - l - n;
                        break;
                    case"insideBottomRight":
                        r += s - n, a += o - l - n, u = "right"
                }
                return {x: r, y: a, textAlign: u, textBaseline: "top"}
            }

            function o(t, e, i, r, a) {
                if (!e)return "";
                a = a || {}, r = d(r, "...");
                for (var o = d(a.maxIterations, 2), l = d(a.minChar, 0), h = n("???", i), u = n("a", i), c = d(a.placeholder, ""), f = e = Math.max(0, e - 1), p = 0; p < l && f >= u; p++)f -= u;
                var g = n(r);
                g > f && (r = "", g = 0), f = e - g;
                for (var v = (t + "").split("\n"), p = 0, m = v.length; p < m; p++) {
                    var y = v[p], x = n(y, i);
                    if (!(x <= e)) {
                        for (var _ = 0; ; _++) {
                            if (x <= f || _ >= o) {
                                y += r;
                                break
                            }
                            var b = 0 === _ ? s(y, f, u, h) : x > 0 ? Math.floor(y.length * f / x) : 0;
                            y = y.substr(0, b), x = n(y, i)
                        }
                        "" === y && (y = c), v[p] = y
                    }
                }
                return v.join("\n")
            }

            function s(t, e, i, n) {
                for (var r = 0, a = 0, o = t.length; a < o && r < e; a++) {
                    var s = t.charCodeAt(a);
                    r += 0 <= s && s <= 127 ? i : n
                }
                return a
            }

            var l = {}, h = 0, u = 5e3, c = i(1), f = i(8), d = c.retrieve, p = {
                getWidth: n,
                getBoundingRect: r,
                adjustTextPositionOnRect: a,
                truncateText: o,
                measureText: function (t, e) {
                    var i = c.getContext();
                    return i.font = e || "12px sans-serif", i.measureText(t)
                }
            };
            t.exports = p
        }, function (t, e, i) {
            "use strict";
            function n(t) {
                return t > -w && t < w
            }

            function r(t) {
                return t > w || t < -w
            }

            function a(t, e, i, n, r) {
                var a = 1 - r;
                return a * a * (a * t + 3 * r * e) + r * r * (r * n + 3 * a * i)
            }

            function o(t, e, i, n, r) {
                var a = 1 - r;
                return 3 * (((e - t) * a + 2 * (i - e) * r) * a + (n - i) * r * r)
            }

            function s(t, e, i, r, a, o) {
                var s = r + 3 * (e - i) - t, l = 3 * (i - 2 * e + t), h = 3 * (e - t), u = t - a, c = l * l - 3 * s * h, f = l * h - 9 * s * u, d = h * h - 3 * l * u, p = 0;
                if (n(c) && n(f))if (n(l))o[0] = 0; else {
                    var g = -h / l;
                    g >= 0 && g <= 1 && (o[p++] = g)
                } else {
                    var v = f * f - 4 * c * d;
                    if (n(v)) {
                        var m = f / c, g = -l / s + m, y = -m / 2;
                        g >= 0 && g <= 1 && (o[p++] = g), y >= 0 && y <= 1 && (o[p++] = y)
                    } else if (v > 0) {
                        var x = b(v), w = c * l + 1.5 * s * (-f + x), M = c * l + 1.5 * s * (-f - x);
                        w = w < 0 ? -_(-w, S) : _(w, S), M = M < 0 ? -_(-M, S) : _(M, S);
                        var g = (-l - (w + M)) / (3 * s);
                        g >= 0 && g <= 1 && (o[p++] = g)
                    } else {
                        var A = (2 * c * l - 3 * s * f) / (2 * b(c * c * c)), I = Math.acos(A) / 3, C = b(c), L = Math.cos(I), g = (-l - 2 * C * L) / (3 * s), y = (-l + C * (L + T * Math.sin(I))) / (3 * s), k = (-l + C * (L - T * Math.sin(I))) / (3 * s);
                        g >= 0 && g <= 1 && (o[p++] = g), y >= 0 && y <= 1 && (o[p++] = y), k >= 0 && k <= 1 && (o[p++] = k)
                    }
                }
                return p
            }

            function l(t, e, i, a, o) {
                var s = 6 * i - 12 * e + 6 * t, l = 9 * e + 3 * a - 3 * t - 9 * i, h = 3 * e - 3 * t, u = 0;
                if (n(l)) {
                    if (r(s)) {
                        var c = -h / s;
                        c >= 0 && c <= 1 && (o[u++] = c)
                    }
                } else {
                    var f = s * s - 4 * l * h;
                    if (n(f))o[0] = -s / (2 * l); else if (f > 0) {
                        var d = b(f), c = (-s + d) / (2 * l), p = (-s - d) / (2 * l);
                        c >= 0 && c <= 1 && (o[u++] = c), p >= 0 && p <= 1 && (o[u++] = p)
                    }
                }
                return u
            }

            function h(t, e, i, n, r, a) {
                var o = (e - t) * r + t, s = (i - e) * r + e, l = (n - i) * r + i, h = (s - o) * r + o, u = (l - s) * r + s, c = (u - h) * r + h;
                a[0] = t, a[1] = o, a[2] = h, a[3] = c, a[4] = c, a[5] = u, a[6] = l, a[7] = n
            }

            function u(t, e, i, n, r, o, s, l, h, u, c) {
                var f, d, p, g, v, m = .005, y = 1 / 0;
                A[0] = h, A[1] = u;
                for (var _ = 0; _ < 1; _ += .05)I[0] = a(t, i, r, s, _), I[1] = a(e, n, o, l, _), g = x(A, I), g < y && (f = _, y = g);
                y = 1 / 0;
                for (var w = 0; w < 32 && !(m < M); w++)d = f - m, p = f + m, I[0] = a(t, i, r, s, d), I[1] = a(e, n, o, l, d), g = x(I, A), d >= 0 && g < y ? (f = d, y = g) : (C[0] = a(t, i, r, s, p), C[1] = a(e, n, o, l, p), v = x(C, A), p <= 1 && v < y ? (f = p, y = v) : m *= .5);
                return c && (c[0] = a(t, i, r, s, f), c[1] = a(e, n, o, l, f)), b(y)
            }

            function c(t, e, i, n) {
                var r = 1 - n;
                return r * (r * t + 2 * n * e) + n * n * i
            }

            function f(t, e, i, n) {
                return 2 * ((1 - n) * (e - t) + n * (i - e))
            }

            function d(t, e, i, a, o) {
                var s = t - 2 * e + i, l = 2 * (e - t), h = t - a, u = 0;
                if (n(s)) {
                    if (r(l)) {
                        var c = -h / l;
                        c >= 0 && c <= 1 && (o[u++] = c)
                    }
                } else {
                    var f = l * l - 4 * s * h;
                    if (n(f)) {
                        var c = -l / (2 * s);
                        c >= 0 && c <= 1 && (o[u++] = c)
                    } else if (f > 0) {
                        var d = b(f), c = (-l + d) / (2 * s), p = (-l - d) / (2 * s);
                        c >= 0 && c <= 1 && (o[u++] = c), p >= 0 && p <= 1 && (o[u++] = p)
                    }
                }
                return u
            }

            function p(t, e, i) {
                var n = t + i - 2 * e;
                return 0 === n ? .5 : (t - e) / n
            }

            function g(t, e, i, n, r) {
                var a = (e - t) * n + t, o = (i - e) * n + e, s = (o - a) * n + a;
                r[0] = t, r[1] = a, r[2] = s, r[3] = s, r[4] = o, r[5] = i
            }

            function v(t, e, i, n, r, a, o, s, l) {
                var h, u = .005, f = 1 / 0;
                A[0] = o, A[1] = s;
                for (var d = 0; d < 1; d += .05) {
                    I[0] = c(t, i, r, d), I[1] = c(e, n, a, d);
                    var p = x(A, I);
                    p < f && (h = d, f = p)
                }
                f = 1 / 0;
                for (var g = 0; g < 32 && !(u < M); g++) {
                    var v = h - u, m = h + u;
                    I[0] = c(t, i, r, v), I[1] = c(e, n, a, v);
                    var p = x(I, A);
                    if (v >= 0 && p < f)h = v, f = p; else {
                        C[0] = c(t, i, r, m), C[1] = c(e, n, a, m);
                        var y = x(C, A);
                        m <= 1 && y < f ? (h = m, f = y) : u *= .5
                    }
                }
                return l && (l[0] = c(t, i, r, h), l[1] = c(e, n, a, h)), b(f)
            }

            var m = i(5), y = m.create, x = m.distSquare, _ = Math.pow, b = Math.sqrt, w = 1e-8, M = 1e-4, T = b(3), S = 1 / 3, A = y(), I = y(), C = y();
            t.exports = {
                cubicAt: a,
                cubicDerivativeAt: o,
                cubicRootAt: s,
                cubicExtrema: l,
                cubicSubdivide: h,
                cubicProjectPoint: u,
                quadraticAt: c,
                quadraticDerivativeAt: f,
                quadraticRootAt: d,
                quadraticExtremum: p,
                quadraticSubdivide: g,
                quadraticProjectPoint: v
            }
        }, function (t, e) {
            function i(t) {
                return t = Math.round(t), t < 0 ? 0 : t > 255 ? 255 : t
            }

            function n(t) {
                return t = Math.round(t), t < 0 ? 0 : t > 360 ? 360 : t
            }

            function r(t) {
                return t < 0 ? 0 : t > 1 ? 1 : t
            }

            function a(t) {
                return i(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 * 255 : parseInt(t, 10))
            }

            function o(t) {
                return r(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 : parseFloat(t))
            }

            function s(t, e, i) {
                return i < 0 ? i += 1 : i > 1 && (i -= 1), 6 * i < 1 ? t + (e - t) * i * 6 : 2 * i < 1 ? e : 3 * i < 2 ? t + (e - t) * (2 / 3 - i) * 6 : t
            }

            function l(t, e, i) {
                return t + (e - t) * i
            }

            function h(t) {
                if (t) {
                    t += "";
                    var e = t.replace(/ /g, "").toLowerCase();
                    if (e in x)return x[e].slice();
                    if ("#" !== e.charAt(0)) {
                        var i = e.indexOf("("), n = e.indexOf(")");
                        if (i !== -1 && n + 1 === e.length) {
                            var r = e.substr(0, i), s = e.substr(i + 1, n - (i + 1)).split(","), l = 1;
                            switch (r) {
                                case"rgba":
                                    if (4 !== s.length)return;
                                    l = o(s.pop());
                                case"rgb":
                                    if (3 !== s.length)return;
                                    return [a(s[0]), a(s[1]), a(s[2]), l];
                                case"hsla":
                                    if (4 !== s.length)return;
                                    return s[3] = o(s[3]), u(s);
                                case"hsl":
                                    if (3 !== s.length)return;
                                    return u(s);
                                default:
                                    return
                            }
                        }
                    } else {
                        if (4 === e.length) {
                            var h = parseInt(e.substr(1), 16);
                            if (!(h >= 0 && h <= 4095))return;
                            return [(3840 & h) >> 4 | (3840 & h) >> 8, 240 & h | (240 & h) >> 4, 15 & h | (15 & h) << 4, 1]
                        }
                        if (7 === e.length) {
                            var h = parseInt(e.substr(1), 16);
                            if (!(h >= 0 && h <= 16777215))return;
                            return [(16711680 & h) >> 16, (65280 & h) >> 8, 255 & h, 1]
                        }
                    }
                }
            }

            function u(t) {
                var e = (parseFloat(t[0]) % 360 + 360) % 360 / 360, n = o(t[1]), r = o(t[2]), a = r <= .5 ? r * (n + 1) : r + n - r * n, l = 2 * r - a, h = [i(255 * s(l, a, e + 1 / 3)), i(255 * s(l, a, e)), i(255 * s(l, a, e - 1 / 3))];
                return 4 === t.length && (h[3] = t[3]), h
            }

            function c(t) {
                if (t) {
                    var e, i, n = t[0] / 255, r = t[1] / 255, a = t[2] / 255, o = Math.min(n, r, a), s = Math.max(n, r, a), l = s - o, h = (s + o) / 2;
                    if (0 === l)e = 0, i = 0; else {
                        i = h < .5 ? l / (s + o) : l / (2 - s - o);
                        var u = ((s - n) / 6 + l / 2) / l, c = ((s - r) / 6 + l / 2) / l, f = ((s - a) / 6 + l / 2) / l;
                        n === s ? e = f - c : r === s ? e = 1 / 3 + u - f : a === s && (e = 2 / 3 + c - u), e < 0 && (e += 1), e > 1 && (e -= 1)
                    }
                    var d = [360 * e, i, h];
                    return null != t[3] && d.push(t[3]), d
                }
            }

            function f(t, e) {
                var i = h(t);
                if (i) {
                    for (var n = 0; n < 3; n++)e < 0 ? i[n] = i[n] * (1 - e) | 0 : i[n] = (255 - i[n]) * e + i[n] | 0;
                    return y(i, 4 === i.length ? "rgba" : "rgb")
                }
            }

            function d(t, e) {
                var i = h(t);
                if (i)return ((1 << 24) + (i[0] << 16) + (i[1] << 8) + +i[2]).toString(16).slice(1)
            }

            function p(t, e, n) {
                if (e && e.length && t >= 0 && t <= 1) {
                    n = n || [0, 0, 0, 0];
                    var r = t * (e.length - 1), a = Math.floor(r), o = Math.ceil(r), s = e[a], h = e[o], u = r - a;
                    return n[0] = i(l(s[0], h[0], u)), n[1] = i(l(s[1], h[1], u)), n[2] = i(l(s[2], h[2], u)), n[3] = i(l(s[3], h[3], u)), n
                }
            }

            function g(t, e, n) {
                if (e && e.length && t >= 0 && t <= 1) {
                    var a = t * (e.length - 1), o = Math.floor(a), s = Math.ceil(a), u = h(e[o]), c = h(e[s]), f = a - o, d = y([i(l(u[0], c[0], f)), i(l(u[1], c[1], f)), i(l(u[2], c[2], f)), r(l(u[3], c[3], f))], "rgba");
                    return n ? {color: d, leftIndex: o, rightIndex: s, value: a} : d
                }
            }

            function v(t, e, i, r) {
                if (t = h(t))return t = c(t), null != e && (t[0] = n(e)), null != i && (t[1] = o(i)), null != r && (t[2] = o(r)), y(u(t), "rgba")
            }

            function m(t, e) {
                if (t = h(t), t && null != e)return t[3] = r(e), y(t, "rgba")
            }

            function y(t, e) {
                var i = t[0] + "," + t[1] + "," + t[2];
                return "rgba" !== e && "hsva" !== e && "hsla" !== e || (i += "," + t[3]), e + "(" + i + ")"
            }

            var x = {
                transparent: [0, 0, 0, 0],
                aliceblue: [240, 248, 255, 1],
                antiquewhite: [250, 235, 215, 1],
                aqua: [0, 255, 255, 1],
                aquamarine: [127, 255, 212, 1],
                azure: [240, 255, 255, 1],
                beige: [245, 245, 220, 1],
                bisque: [255, 228, 196, 1],
                black: [0, 0, 0, 1],
                blanchedalmond: [255, 235, 205, 1],
                blue: [0, 0, 255, 1],
                blueviolet: [138, 43, 226, 1],
                brown: [165, 42, 42, 1],
                burlywood: [222, 184, 135, 1],
                cadetblue: [95, 158, 160, 1],
                chartreuse: [127, 255, 0, 1],
                chocolate: [210, 105, 30, 1],
                coral: [255, 127, 80, 1],
                cornflowerblue: [100, 149, 237, 1],
                cornsilk: [255, 248, 220, 1],
                crimson: [220, 20, 60, 1],
                cyan: [0, 255, 255, 1],
                darkblue: [0, 0, 139, 1],
                darkcyan: [0, 139, 139, 1],
                darkgoldenrod: [184, 134, 11, 1],
                darkgray: [169, 169, 169, 1],
                darkgreen: [0, 100, 0, 1],
                darkgrey: [169, 169, 169, 1],
                darkkhaki: [189, 183, 107, 1],
                darkmagenta: [139, 0, 139, 1],
                darkolivegreen: [85, 107, 47, 1],
                darkorange: [255, 140, 0, 1],
                darkorchid: [153, 50, 204, 1],
                darkred: [139, 0, 0, 1],
                darksalmon: [233, 150, 122, 1],
                darkseagreen: [143, 188, 143, 1],
                darkslateblue: [72, 61, 139, 1],
                darkslategray: [47, 79, 79, 1],
                darkslategrey: [47, 79, 79, 1],
                darkturquoise: [0, 206, 209, 1],
                darkviolet: [148, 0, 211, 1],
                deeppink: [255, 20, 147, 1],
                deepskyblue: [0, 191, 255, 1],
                dimgray: [105, 105, 105, 1],
                dimgrey: [105, 105, 105, 1],
                dodgerblue: [30, 144, 255, 1],
                firebrick: [178, 34, 34, 1],
                floralwhite: [255, 250, 240, 1],
                forestgreen: [34, 139, 34, 1],
                fuchsia: [255, 0, 255, 1],
                gainsboro: [220, 220, 220, 1],
                ghostwhite: [248, 248, 255, 1],
                gold: [255, 215, 0, 1],
                goldenrod: [218, 165, 32, 1],
                gray: [128, 128, 128, 1],
                green: [0, 128, 0, 1],
                greenyellow: [173, 255, 47, 1],
                grey: [128, 128, 128, 1],
                honeydew: [240, 255, 240, 1],
                hotpink: [255, 105, 180, 1],
                indianred: [205, 92, 92, 1],
                indigo: [75, 0, 130, 1],
                ivory: [255, 255, 240, 1],
                khaki: [240, 230, 140, 1],
                lavender: [230, 230, 250, 1],
                lavenderblush: [255, 240, 245, 1],
                lawngreen: [124, 252, 0, 1],
                lemonchiffon: [255, 250, 205, 1],
                lightblue: [173, 216, 230, 1],
                lightcoral: [240, 128, 128, 1],
                lightcyan: [224, 255, 255, 1],
                lightgoldenrodyellow: [250, 250, 210, 1],
                lightgray: [211, 211, 211, 1],
                lightgreen: [144, 238, 144, 1],
                lightgrey: [211, 211, 211, 1],
                lightpink: [255, 182, 193, 1],
                lightsalmon: [255, 160, 122, 1],
                lightseagreen: [32, 178, 170, 1],
                lightskyblue: [135, 206, 250, 1],
                lightslategray: [119, 136, 153, 1],
                lightslategrey: [119, 136, 153, 1],
                lightsteelblue: [176, 196, 222, 1],
                lightyellow: [255, 255, 224, 1],
                lime: [0, 255, 0, 1],
                limegreen: [50, 205, 50, 1],
                linen: [250, 240, 230, 1],
                magenta: [255, 0, 255, 1],
                maroon: [128, 0, 0, 1],
                mediumaquamarine: [102, 205, 170, 1],
                mediumblue: [0, 0, 205, 1],
                mediumorchid: [186, 85, 211, 1],
                mediumpurple: [147, 112, 219, 1],
                mediumseagreen: [60, 179, 113, 1],
                mediumslateblue: [123, 104, 238, 1],
                mediumspringgreen: [0, 250, 154, 1],
                mediumturquoise: [72, 209, 204, 1],
                mediumvioletred: [199, 21, 133, 1],
                midnightblue: [25, 25, 112, 1],
                mintcream: [245, 255, 250, 1],
                mistyrose: [255, 228, 225, 1],
                moccasin: [255, 228, 181, 1],
                navajowhite: [255, 222, 173, 1],
                navy: [0, 0, 128, 1],
                oldlace: [253, 245, 230, 1],
                olive: [128, 128, 0, 1],
                olivedrab: [107, 142, 35, 1],
                orange: [255, 165, 0, 1],
                orangered: [255, 69, 0, 1],
                orchid: [218, 112, 214, 1],
                palegoldenrod: [238, 232, 170, 1],
                palegreen: [152, 251, 152, 1],
                paleturquoise: [175, 238, 238, 1],
                palevioletred: [219, 112, 147, 1],
                papayawhip: [255, 239, 213, 1],
                peachpuff: [255, 218, 185, 1],
                peru: [205, 133, 63, 1],
                pink: [255, 192, 203, 1],
                plum: [221, 160, 221, 1],
                powderblue: [176, 224, 230, 1],
                purple: [128, 0, 128, 1],
                red: [255, 0, 0, 1],
                rosybrown: [188, 143, 143, 1],
                royalblue: [65, 105, 225, 1],
                saddlebrown: [139, 69, 19, 1],
                salmon: [250, 128, 114, 1],
                sandybrown: [244, 164, 96, 1],
                seagreen: [46, 139, 87, 1],
                seashell: [255, 245, 238, 1],
                sienna: [160, 82, 45, 1],
                silver: [192, 192, 192, 1],
                skyblue: [135, 206, 235, 1],
                slateblue: [106, 90, 205, 1],
                slategray: [112, 128, 144, 1],
                slategrey: [112, 128, 144, 1],
                snow: [255, 250, 250, 1],
                springgreen: [0, 255, 127, 1],
                steelblue: [70, 130, 180, 1],
                tan: [210, 180, 140, 1],
                teal: [0, 128, 128, 1],
                thistle: [216, 191, 216, 1],
                tomato: [255, 99, 71, 1],
                turquoise: [64, 224, 208, 1],
                violet: [238, 130, 238, 1],
                wheat: [245, 222, 179, 1],
                white: [255, 255, 255, 1],
                whitesmoke: [245, 245, 245, 1],
                yellow: [255, 255, 0, 1],
                yellowgreen: [154, 205, 50, 1]
            };
            t.exports = {
                parse: h,
                lift: f,
                toHex: d,
                fastMapToColor: p,
                mapToColor: g,
                modifyHSL: v,
                modifyAlpha: m,
                stringify: y
            }
        }, function (t, e) {
            var i = "undefined" == typeof Float32Array ? Array : Float32Array, n = {
                create: function () {
                    var t = new i(6);
                    return n.identity(t), t
                }, identity: function (t) {
                    return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t
                }, copy: function (t, e) {
                    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t
                }, mul: function (t, e, i) {
                    var n = e[0] * i[0] + e[2] * i[1], r = e[1] * i[0] + e[3] * i[1], a = e[0] * i[2] + e[2] * i[3], o = e[1] * i[2] + e[3] * i[3], s = e[0] * i[4] + e[2] * i[5] + e[4], l = e[1] * i[4] + e[3] * i[5] + e[5];
                    return t[0] = n, t[1] = r, t[2] = a, t[3] = o, t[4] = s, t[5] = l, t
                }, translate: function (t, e, i) {
                    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4] + i[0], t[5] = e[5] + i[1], t
                }, rotate: function (t, e, i) {
                    var n = e[0], r = e[2], a = e[4], o = e[1], s = e[3], l = e[5], h = Math.sin(i), u = Math.cos(i);
                    return t[0] = n * u + o * h, t[1] = -n * h + o * u, t[2] = r * u + s * h, t[3] = -r * h + u * s, t[4] = u * a + h * l, t[5] = u * l - h * a, t
                }, scale: function (t, e, i) {
                    var n = i[0], r = i[1];
                    return t[0] = e[0] * n, t[1] = e[1] * r, t[2] = e[2] * n, t[3] = e[3] * r, t[4] = e[4] * n, t[5] = e[5] * r, t
                }, invert: function (t, e) {
                    var i = e[0], n = e[2], r = e[4], a = e[1], o = e[3], s = e[5], l = i * o - a * n;
                    return l ? (l = 1 / l, t[0] = o * l, t[1] = -a * l, t[2] = -n * l, t[3] = i * l, t[4] = (n * s - o * r) * l, t[5] = (a * r - i * s) * l, t) : null
                }
            };
            t.exports = n
        }, function (t, e) {
            var i = Array.prototype.slice, n = function () {
                this._$handlers = {}
            };
            n.prototype = {
                constructor: n, one: function (t, e, i) {
                    var n = this._$handlers;
                    if (!e || !t)return this;
                    n[t] || (n[t] = []);
                    for (var r = 0; r < n[t].length; r++)if (n[t][r].h === e)return this;
                    return n[t].push({h: e, one: !0, ctx: i || this}), this
                }, on: function (t, e, i) {
                    var n = this._$handlers;
                    if (!e || !t)return this;
                    n[t] || (n[t] = []);
                    for (var r = 0; r < n[t].length; r++)if (n[t][r].h === e)return this;
                    return n[t].push({h: e, one: !1, ctx: i || this}), this
                }, isSilent: function (t) {
                    var e = this._$handlers;
                    return e[t] && e[t].length
                }, off: function (t, e) {
                    var i = this._$handlers;
                    if (!t)return this._$handlers = {}, this;
                    if (e) {
                        if (i[t]) {
                            for (var n = [], r = 0, a = i[t].length; r < a; r++)i[t][r].h != e && n.push(i[t][r]);
                            i[t] = n
                        }
                        i[t] && 0 === i[t].length && delete i[t]
                    } else delete i[t];
                    return this
                }, trigger: function (t) {
                    if (this._$handlers[t]) {
                        var e = arguments, n = e.length;
                        n > 3 && (e = i.call(e, 1));
                        for (var r = this._$handlers[t], a = r.length, o = 0; o < a;) {
                            switch (n) {
                                case 1:
                                    r[o].h.call(r[o].ctx);
                                    break;
                                case 2:
                                    r[o].h.call(r[o].ctx, e[1]);
                                    break;
                                case 3:
                                    r[o].h.call(r[o].ctx, e[1], e[2]);
                                    break;
                                default:
                                    r[o].h.apply(r[o].ctx, e)
                            }
                            r[o].one ? (r.splice(o, 1), a--) : o++
                        }
                    }
                    return this
                }, triggerWithContext: function (t) {
                    if (this._$handlers[t]) {
                        var e = arguments, n = e.length;
                        n > 4 && (e = i.call(e, 1, e.length - 1));
                        for (var r = e[e.length - 1], a = this._$handlers[t], o = a.length, s = 0; s < o;) {
                            switch (n) {
                                case 1:
                                    a[s].h.call(r);
                                    break;
                                case 2:
                                    a[s].h.call(r, e[1]);
                                    break;
                                case 3:
                                    a[s].h.call(r, e[1], e[2]);
                                    break;
                                default:
                                    a[s].h.apply(r, e)
                            }
                            a[s].one ? (a.splice(s, 1), o--) : s++
                        }
                    }
                    return this
                }
            }, t.exports = n
        }, function (t, e, i) {
            function n(t, e) {
                var i = a.slice(arguments, 2);
                return this.superClass.prototype[e].apply(t, i)
            }

            function r(t, e, i) {
                return this.superClass.prototype[e].apply(t, i)
            }

            var a = i(1), o = {}, s = ".", l = "___EC__COMPONENT__CONTAINER___", h = o.parseClassType = function (t) {
                var e = {main: "", sub: ""};
                return t && (t = t.split(s), e.main = t[0] || "", e.sub = t[1] || ""), e
            };
            o.enableClassExtend = function (t, e) {
                t.$constructor = t, t.extend = function (t) {
                    var e = this, i = function () {
                        t.$constructor ? t.$constructor.apply(this, arguments) : e.apply(this, arguments)
                    };
                    return a.extend(i.prototype, t), i.extend = this.extend, i.superCall = n, i.superApply = r, a.inherits(i, this), i.superClass = e, i
                }
            }, o.enableClassManagement = function (t, e) {
                function i(t) {
                    var e = n[t.main];
                    return e && e[l] || (e = n[t.main] = {}, e[l] = !0), e
                }

                e = e || {};
                var n = {};
                if (t.registerClass = function (t, e) {
                        if (e)if (e = h(e), e.sub) {
                            if (e.sub !== l) {
                                var r = i(e);
                                r[e.sub] = t
                            }
                        } else n[e.main] = t;
                        return t
                    }, t.getClass = function (t, e, i) {
                        var r = n[t];
                        if (r && r[l] && (r = e ? r[e] : null), i && !r)throw new Error("Component " + t + "." + (e || "") + " not exists. Load it first.");
                        return r
                    }, t.getClassesByMainType = function (t) {
                        t = h(t);
                        var e = [], i = n[t.main];
                        return i && i[l] ? a.each(i, function (t, i) {
                            i !== l && e.push(t)
                        }) : e.push(i), e
                    }, t.hasClass = function (t) {
                        return t = h(t), !!n[t.main]
                    }, t.getAllClassMainTypes = function () {
                        var t = [];
                        return a.each(n, function (e, i) {
                            t.push(i)
                        }), t
                    }, t.hasSubTypes = function (t) {
                        t = h(t);
                        var e = n[t.main];
                        return e && e[l]
                    }, t.parseClassType = h, e.registerWhenExtend) {
                    var r = t.extend;
                    r && (t.extend = function (e) {
                        var i = r.call(this, e);
                        return t.registerClass(i, e.type)
                    })
                }
                return t
            }, o.setReadOnly = function (t, e) {
            }, t.exports = o
        }, function (t, e, i) {
            var n = i(136), r = i(38);
            i(137), i(135);
            var a = i(32), o = i(4), s = i(1), l = i(16), h = {};
            h.getScaleExtent = function (t, e) {
                var i = t.scale, n = i.getExtent(), r = n[1] - n[0];
                if ("ordinal" === i.type)return isFinite(r) ? n : [0, 0];
                var a = e.getMin ? e.getMin() : e.get("min"), l = e.getMax ? e.getMax() : e.get("max"), h = e.getNeedCrossZero ? e.getNeedCrossZero() : !e.get("scale"), u = e.get("boundaryGap");
                s.isArray(u) || (u = [u || 0, u || 0]), u[0] = o.parsePercent(u[0], 1), u[1] = o.parsePercent(u[1], 1);
                var c = !0, f = !0;
                return null == a && (a = n[0] - u[0] * r, c = !1), null == l && (l = n[1] + u[1] * r, f = !1), "dataMin" === a && (a = n[0]), "dataMax" === l && (l = n[1]), h && (a > 0 && l > 0 && !c && (a = 0), a < 0 && l < 0 && !f && (l = 0)), [a, l]
            }, h.niceScaleExtent = function (t, e) {
                var i = t.scale, n = h.getScaleExtent(t, e), r = null != (e.getMin ? e.getMin() : e.get("min")), a = null != (e.getMax ? e.getMax() : e.get("max")), o = e.get("splitNumber");
                "log" === i.type && (i.base = e.get("logBase")), i.setExtent(n[0], n[1]), i.niceExtent(o, r, a);
                var s = e.get("minInterval");
                if (isFinite(s) && !r && !a && "interval" === i.type) {
                    var l = i.getInterval(), u = Math.max(Math.abs(l), s) / l;
                    n = i.getExtent();
                    var c = (n[1] + n[0]) / 2;
                    i.setExtent(u * (n[0] - c) + c, u * (n[1] - c) + c), i.niceExtent(o)
                }
                var l = e.get("interval");
                null != l && i.setInterval && i.setInterval(l)
            }, h.createScaleByModel = function (t, e) {
                if (e = e || t.get("type"))switch (e) {
                    case"category":
                        return new n(t.getCategories(), [1 / 0, -(1 / 0)]);
                    case"value":
                        return new r;
                    default:
                        return (a.getClass(e) || r).create(t)
                }
            }, h.ifAxisCrossZero = function (t) {
                var e = t.scale.getExtent(), i = e[0], n = e[1];
                return !(i > 0 && n > 0 || i < 0 && n < 0)
            }, h.getAxisLabelInterval = function (t, e, i, n) {
                var r, a = 0, o = 0, s = 1;
                e.length > 40 && (s = Math.floor(e.length / 40));
                for (var h = 0; h < t.length; h += s) {
                    var u = t[h], c = l.getBoundingRect(e[h], i, "center", "top");
                    c[n ? "x" : "y"] += u, c[n ? "width" : "height"] *= 1.3, r ? r.intersect(c) ? (o++, a = Math.max(a, o)) : (r.union(c), o = 0) : r = c.clone()
                }
                return 0 === a && s > 1 ? s : (a + 1) * s - 1
            }, h.getFormattedLabels = function (t, e) {
                var i = t.scale, n = i.getTicksLabels(), r = i.getTicks();
                return "string" == typeof e ? (e = function (t) {
                    return function (e) {
                        return t.replace("{value}", e)
                    }
                }(e), s.map(n, e)) : "function" == typeof e ? s.map(r, function (n, r) {
                    return e("category" === t.type ? i.getLabel(n) : n, r)
                }, this) : n
            }, t.exports = h
        }, function (t, e, i) {
            "use strict";
            function n() {
                this._coordinateSystems = []
            }

            var r = i(1), a = {};
            n.prototype = {
                constructor: n, create: function (t, e) {
                    var i = [];
                    r.each(a, function (n, r) {
                        var a = n.create(t, e);
                        i = i.concat(a || [])
                    }), this._coordinateSystems = i
                }, update: function (t, e) {
                    r.each(this._coordinateSystems, function (i) {
                        i.update && i.update(t, e)
                    })
                }, getCoordinateSystems: function () {
                    return this._coordinateSystems.slice()
                }
            }, n.register = function (t, e) {
                a[t] = e
            }, n.get = function (t) {
                return a[t]
            }, t.exports = n
        }, function (t, e, i) {
            "use strict";
            function n(t) {
                return t.getBoundingClientRect ? t.getBoundingClientRect() : {left: 0, top: 0}
            }

            function r(t, e, i, n) {
                return i = i || {}, n ? a(t, e, i) : u.browser.firefox && null != e.layerX && e.layerX !== e.offsetX ? (i.zrX = e.layerX, i.zrY = e.layerY) : null != e.offsetX ? (i.zrX = e.offsetX, i.zrY = e.offsetY) : a(t, e, i), i
            }

            function a(t, e, i) {
                var r = n(t);
                i.zrX = e.clientX - r.left, i.zrY = e.clientY - r.top
            }

            function o(t, e, i) {
                if (e = e || window.event, null != e.zrX)return e;
                var n = e.type, a = n && n.indexOf("touch") >= 0;
                if (a) {
                    var o = "touchend" != n ? e.targetTouches[0] : e.changedTouches[0];
                    o && r(t, o, e, i)
                } else r(t, e, e, i), e.zrDelta = e.wheelDelta ? e.wheelDelta / 120 : -(e.detail || 0) / 3;
                return e
            }

            function s(t, e, i) {
                c ? t.addEventListener(e, i) : t.attachEvent("on" + e, i)
            }

            function l(t, e, i) {
                c ? t.removeEventListener(e, i) : t.detachEvent("on" + e, i)
            }

            var h = i(20), u = i(11), c = "undefined" != typeof window && !!window.addEventListener, f = c ? function (t) {
                t.preventDefault(), t.stopPropagation(), t.cancelBubble = !0
            } : function (t) {
                t.returnValue = !1, t.cancelBubble = !0
            };
            t.exports = {
                clientToLocal: r,
                normalizeEvent: o,
                addEventListener: s,
                removeEventListener: l,
                stop: f,
                Dispatcher: h
            }
        }, , function (t, e, i) {
            "use strict";
            var n = i(3), r = i(8), a = n.extendShape({
                type: "triangle",
                shape: {cx: 0, cy: 0, width: 0, height: 0},
                buildPath: function (t, e) {
                    var i = e.cx, n = e.cy, r = e.width / 2, a = e.height / 2;
                    t.moveTo(i, n - a), t.lineTo(i + r, n + a), t.lineTo(i - r, n + a), t.closePath()
                }
            }), o = n.extendShape({
                type: "diamond", shape: {cx: 0, cy: 0, width: 0, height: 0}, buildPath: function (t, e) {
                    var i = e.cx, n = e.cy, r = e.width / 2, a = e.height / 2;
                    t.moveTo(i, n - a), t.lineTo(i + r, n), t.lineTo(i, n + a), t.lineTo(i - r, n), t.closePath()
                }
            }), s = n.extendShape({
                type: "pin", shape: {x: 0, y: 0, width: 0, height: 0}, buildPath: function (t, e) {
                    var i = e.x, n = e.y, r = e.width / 5 * 3, a = Math.max(r, e.height), o = r / 2, s = o * o / (a - o), l = n - a + o + s, h = Math.asin(s / o), u = Math.cos(h) * o, c = Math.sin(h), f = Math.cos(h);
                    t.arc(i, l, o, Math.PI - h, 2 * Math.PI + h);
                    var d = .6 * o, p = .7 * o;
                    t.bezierCurveTo(i + u - c * d, l + s + f * d, i, n - p, i, n), t.bezierCurveTo(i, n - p, i - u + c * d, l + s + f * d, i - u, l + s), t.closePath()
                }
            }), l = n.extendShape({
                type: "arrow", shape: {x: 0, y: 0, width: 0, height: 0}, buildPath: function (t, e) {
                    var i = e.height, n = e.width, r = e.x, a = e.y, o = n / 3 * 2;
                    t.moveTo(r, a), t.lineTo(r + o, a + i), t.lineTo(r, a + i / 4 * 3), t.lineTo(r - o, a + i), t.lineTo(r, a), t.closePath()
                }
            }), h = {
                line: n.Line,
                rect: n.Rect,
                roundRect: n.Rect,
                square: n.Rect,
                circle: n.Circle,
                diamond: o,
                pin: s,
                arrow: l,
                triangle: a
            }, u = {
                line: function (t, e, i, n, r) {
                    r.x1 = t, r.y1 = e + n / 2, r.x2 = t + i, r.y2 = e + n / 2
                }, rect: function (t, e, i, n, r) {
                    r.x = t, r.y = e, r.width = i, r.height = n
                }, roundRect: function (t, e, i, n, r) {
                    r.x = t, r.y = e, r.width = i, r.height = n,
                        r.r = Math.min(i, n) / 4
                }, square: function (t, e, i, n, r) {
                    var a = Math.min(i, n);
                    r.x = t, r.y = e, r.width = a, r.height = a
                }, circle: function (t, e, i, n, r) {
                    r.cx = t + i / 2, r.cy = e + n / 2, r.r = Math.min(i, n) / 2
                }, diamond: function (t, e, i, n, r) {
                    r.cx = t + i / 2, r.cy = e + n / 2, r.width = i, r.height = n
                }, pin: function (t, e, i, n, r) {
                    r.x = t + i / 2, r.y = e + n / 2, r.width = i, r.height = n
                }, arrow: function (t, e, i, n, r) {
                    r.x = t + i / 2, r.y = e + n / 2, r.width = i, r.height = n
                }, triangle: function (t, e, i, n, r) {
                    r.cx = t + i / 2, r.cy = e + n / 2, r.width = i, r.height = n
                }
            }, c = {};
            for (var f in h)h.hasOwnProperty(f) && (c[f] = new h[f]);
            var d = n.extendShape({
                type: "symbol",
                shape: {symbolType: "", x: 0, y: 0, width: 0, height: 0},
                beforeBrush: function () {
                    var t = this.style, e = this.shape;
                    "pin" === e.symbolType && "inside" === t.textPosition && (t.textPosition = ["50%", "40%"], t.textAlign = "center", t.textVerticalAlign = "middle")
                },
                buildPath: function (t, e, i) {
                    var n = e.symbolType, r = c[n];
                    "none" !== e.symbolType && (r || (n = "rect", r = c[n]), u[n](e.x, e.y, e.width, e.height, r.shape), r.buildPath(t, r.shape, i))
                }
            }), p = function (t) {
                if ("image" !== this.type) {
                    var e = this.style, i = this.shape;
                    i && "line" === i.symbolType ? e.stroke = t : this.__isEmptyBrush ? (e.stroke = t, e.fill = "#fff") : (e.fill && (e.fill = t), e.stroke && (e.stroke = t)), this.dirty(!1)
                }
            }, g = {
                createSymbol: function (t, e, i, a, o, s) {
                    var l = 0 === t.indexOf("empty");
                    l && (t = t.substr(5, 1).toLowerCase() + t.substr(6));
                    var h;
                    return h = 0 === t.indexOf("image://") ? new n.Image({
                        style: {
                            image: t.slice(8),
                            x: e,
                            y: i,
                            width: a,
                            height: o
                        }
                    }) : 0 === t.indexOf("path://") ? n.makePath(t.slice(7), {}, new r(e, i, a, o)) : new d({
                        shape: {
                            symbolType: t,
                            x: e,
                            y: i,
                            width: a,
                            height: o
                        }
                    }), h.__isEmptyBrush = l, h.setColor = p, h.setColor(s), h
                }
            };
            t.exports = g
        }, function (t, e, i) {
            function n() {
                this.group = new o, this.uid = s.getUID("viewChart")
            }

            function r(t, e) {
                if (t && (t.trigger(e), "group" === t.type))for (var i = 0; i < t.childCount(); i++)r(t.childAt(i), e)
            }

            function a(t, e, i) {
                var n = h.queryDataIndex(t, e);
                null != n ? u.each(h.normalizeToArray(n), function (e) {
                    r(t.getItemGraphicEl(e), i)
                }) : t.eachItemGraphicEl(function (t) {
                    r(t, i)
                })
            }

            var o = i(34), s = i(43), l = i(21), h = i(7), u = i(1);
            n.prototype = {
                type: "chart", init: function (t, e) {
                }, render: function (t, e, i, n) {
                }, highlight: function (t, e, i, n) {
                    a(t.getData(), n, "emphasis")
                }, downplay: function (t, e, i, n) {
                    a(t.getData(), n, "normal")
                }, remove: function (t, e) {
                    this.group.removeAll()
                }, dispose: function () {
                }
            };
            var c = n.prototype;
            c.updateView = c.updateLayout = c.updateVisual = function (t, e, i, n) {
                this.render(t, e, i, n)
            }, l.enableClassExtend(n, ["dispose"]), l.enableClassManagement(n, {registerWhenExtend: !0}), t.exports = n
        }, function (t, e, i) {
            "use strict";
            var n = i(17), r = i(5), a = i(73), o = i(8), s = i(33).devicePixelRatio, l = {
                M: 1,
                L: 2,
                C: 3,
                Q: 4,
                A: 5,
                Z: 6,
                R: 7
            }, h = [], u = [], c = [], f = [], d = Math.min, p = Math.max, g = Math.cos, v = Math.sin, m = Math.sqrt, y = Math.abs, x = "undefined" != typeof Float32Array, _ = function () {
                this.data = [], this._len = 0, this._ctx = null, this._xi = 0, this._yi = 0, this._x0 = 0, this._y0 = 0, this._ux = 0, this._uy = 0
            };
            _.prototype = {
                constructor: _,
                _lineDash: null,
                _dashOffset: 0,
                _dashIdx: 0,
                _dashSum: 0,
                setScale: function (t, e) {
                    this._ux = y(1 / s / t) || 0, this._uy = y(1 / s / e) || 0
                },
                getContext: function () {
                    return this._ctx
                },
                beginPath: function (t) {
                    return this._ctx = t, t && t.beginPath(), t && (this.dpr = t.dpr), this._len = 0, this._lineDash && (this._lineDash = null, this._dashOffset = 0), this
                },
                moveTo: function (t, e) {
                    return this.addData(l.M, t, e), this._ctx && this._ctx.moveTo(t, e), this._x0 = t, this._y0 = e, this._xi = t, this._yi = e, this
                },
                lineTo: function (t, e) {
                    var i = y(t - this._xi) > this._ux || y(e - this._yi) > this._uy || this._len < 5;
                    return this.addData(l.L, t, e), this._ctx && i && (this._needsDash() ? this._dashedLineTo(t, e) : this._ctx.lineTo(t, e)), i && (this._xi = t, this._yi = e), this
                },
                bezierCurveTo: function (t, e, i, n, r, a) {
                    return this.addData(l.C, t, e, i, n, r, a), this._ctx && (this._needsDash() ? this._dashedBezierTo(t, e, i, n, r, a) : this._ctx.bezierCurveTo(t, e, i, n, r, a)), this._xi = r, this._yi = a, this
                },
                quadraticCurveTo: function (t, e, i, n) {
                    return this.addData(l.Q, t, e, i, n), this._ctx && (this._needsDash() ? this._dashedQuadraticTo(t, e, i, n) : this._ctx.quadraticCurveTo(t, e, i, n)), this._xi = i, this._yi = n, this
                },
                arc: function (t, e, i, n, r, a) {
                    return this.addData(l.A, t, e, i, i, n, r - n, 0, a ? 0 : 1), this._ctx && this._ctx.arc(t, e, i, n, r, a), this._xi = g(r) * i + t, this._xi = v(r) * i + t, this
                },
                arcTo: function (t, e, i, n, r) {
                    return this._ctx && this._ctx.arcTo(t, e, i, n, r), this
                },
                rect: function (t, e, i, n) {
                    return this._ctx && this._ctx.rect(t, e, i, n), this.addData(l.R, t, e, i, n), this
                },
                closePath: function () {
                    this.addData(l.Z);
                    var t = this._ctx, e = this._x0, i = this._y0;
                    return t && (this._needsDash() && this._dashedLineTo(e, i), t.closePath()), this._xi = e, this._yi = i, this
                },
                fill: function (t) {
                    t && t.fill(), this.toStatic()
                },
                stroke: function (t) {
                    t && t.stroke(), this.toStatic()
                },
                setLineDash: function (t) {
                    if (t instanceof Array) {
                        this._lineDash = t, this._dashIdx = 0;
                        for (var e = 0, i = 0; i < t.length; i++)e += t[i];
                        this._dashSum = e
                    }
                    return this
                },
                setLineDashOffset: function (t) {
                    return this._dashOffset = t, this
                },
                len: function () {
                    return this._len
                },
                setData: function (t) {
                    var e = t.length;
                    this.data && this.data.length == e || !x || (this.data = new Float32Array(e));
                    for (var i = 0; i < e; i++)this.data[i] = t[i];
                    this._len = e
                },
                appendPath: function (t) {
                    t instanceof Array || (t = [t]);
                    for (var e = t.length, i = 0, n = this._len, r = 0; r < e; r++)i += t[r].len();
                    x && this.data instanceof Float32Array && (this.data = new Float32Array(n + i));
                    for (var r = 0; r < e; r++)for (var a = t[r].data, o = 0; o < a.length; o++)this.data[n++] = a[o];
                    this._len = n
                },
                addData: function (t) {
                    var e = this.data;
                    this._len + arguments.length > e.length && (this._expandData(), e = this.data);
                    for (var i = 0; i < arguments.length; i++)e[this._len++] = arguments[i];
                    this._prevCmd = t
                },
                _expandData: function () {
                    if (!(this.data instanceof Array)) {
                        for (var t = [], e = 0; e < this._len; e++)t[e] = this.data[e];
                        this.data = t
                    }
                },
                _needsDash: function () {
                    return this._lineDash
                },
                _dashedLineTo: function (t, e) {
                    var i, n, r = this._dashSum, a = this._dashOffset, o = this._lineDash, s = this._ctx, l = this._xi, h = this._yi, u = t - l, c = e - h, f = m(u * u + c * c), g = l, v = h, y = o.length;
                    for (u /= f, c /= f, a < 0 && (a = r + a), a %= r, g -= a * u, v -= a * c; u > 0 && g <= t || u < 0 && g >= t || 0 == u && (c > 0 && v <= e || c < 0 && v >= e);)n = this._dashIdx, i = o[n], g += u * i, v += c * i, this._dashIdx = (n + 1) % y, u > 0 && g < l || u < 0 && g > l || c > 0 && v < h || c < 0 && v > h || s[n % 2 ? "moveTo" : "lineTo"](u >= 0 ? d(g, t) : p(g, t), c >= 0 ? d(v, e) : p(v, e));
                    u = g - t, c = v - e, this._dashOffset = -m(u * u + c * c)
                },
                _dashedBezierTo: function (t, e, i, r, a, o) {
                    var s, l, h, u, c, f = this._dashSum, d = this._dashOffset, p = this._lineDash, g = this._ctx, v = this._xi, y = this._yi, x = n.cubicAt, _ = 0, b = this._dashIdx, w = p.length, M = 0;
                    for (d < 0 && (d = f + d), d %= f, s = 0; s < 1; s += .1)l = x(v, t, i, a, s + .1) - x(v, t, i, a, s), h = x(y, e, r, o, s + .1) - x(y, e, r, o, s), _ += m(l * l + h * h);
                    for (; b < w && (M += p[b], !(M > d)); b++);
                    for (s = (M - d) / _; s <= 1;)u = x(v, t, i, a, s), c = x(y, e, r, o, s), b % 2 ? g.moveTo(u, c) : g.lineTo(u, c), s += p[b] / _, b = (b + 1) % w;
                    b % 2 !== 0 && g.lineTo(a, o), l = a - u, h = o - c, this._dashOffset = -m(l * l + h * h)
                },
                _dashedQuadraticTo: function (t, e, i, n) {
                    var r = i, a = n;
                    i = (i + 2 * t) / 3, n = (n + 2 * e) / 3, t = (this._xi + 2 * t) / 3, e = (this._yi + 2 * e) / 3, this._dashedBezierTo(t, e, i, n, r, a)
                },
                toStatic: function () {
                    var t = this.data;
                    t instanceof Array && (t.length = this._len, x && (this.data = new Float32Array(t)))
                },
                getBoundingRect: function () {
                    h[0] = h[1] = c[0] = c[1] = Number.MAX_VALUE, u[0] = u[1] = f[0] = f[1] = -Number.MAX_VALUE;
                    for (var t = this.data, e = 0, i = 0, n = 0, s = 0, d = 0; d < t.length;) {
                        var p = t[d++];
                        switch (1 == d && (e = t[d], i = t[d + 1], n = e, s = i), p) {
                            case l.M:
                                n = t[d++], s = t[d++], e = n, i = s, c[0] = n, c[1] = s, f[0] = n, f[1] = s;
                                break;
                            case l.L:
                                a.fromLine(e, i, t[d], t[d + 1], c, f), e = t[d++], i = t[d++];
                                break;
                            case l.C:
                                a.fromCubic(e, i, t[d++], t[d++], t[d++], t[d++], t[d], t[d + 1], c, f), e = t[d++], i = t[d++];
                                break;
                            case l.Q:
                                a.fromQuadratic(e, i, t[d++], t[d++], t[d], t[d + 1], c, f), e = t[d++], i = t[d++];
                                break;
                            case l.A:
                                var m = t[d++], y = t[d++], x = t[d++], _ = t[d++], b = t[d++], w = t[d++] + b, M = (t[d++], 1 - t[d++]);
                                1 == d && (n = g(b) * x + m, s = v(b) * _ + y), a.fromArc(m, y, x, _, b, w, M, c, f), e = g(w) * x + m, i = v(w) * _ + y;
                                break;
                            case l.R:
                                n = e = t[d++], s = i = t[d++];
                                var T = t[d++], S = t[d++];
                                a.fromLine(n, s, n + T, s + S, c, f);
                                break;
                            case l.Z:
                                e = n, i = s
                        }
                        r.min(h, h, c), r.max(u, u, f)
                    }
                    return 0 === d && (h[0] = h[1] = u[0] = u[1] = 0), new o(h[0], h[1], u[0] - h[0], u[1] - h[1])
                },
                rebuildPath: function (t) {
                    for (var e, i, n, r, a, o, s = this.data, h = this._ux, u = this._uy, c = this._len, f = 0; f < c;) {
                        var d = s[f++];
                        switch (1 == f && (n = s[f], r = s[f + 1], e = n, i = r), d) {
                            case l.M:
                                e = n = s[f++], i = r = s[f++], t.moveTo(n, r);
                                break;
                            case l.L:
                                a = s[f++], o = s[f++], (y(a - n) > h || y(o - r) > u || f === c - 1) && (t.lineTo(a, o), n = a, r = o);
                                break;
                            case l.C:
                                t.bezierCurveTo(s[f++], s[f++], s[f++], s[f++], s[f++], s[f++]), n = s[f - 2], r = s[f - 1];
                                break;
                            case l.Q:
                                t.quadraticCurveTo(s[f++], s[f++], s[f++], s[f++]), n = s[f - 2], r = s[f - 1];
                                break;
                            case l.A:
                                var p = s[f++], m = s[f++], x = s[f++], _ = s[f++], b = s[f++], w = s[f++], M = s[f++], T = s[f++], S = x > _ ? x : _, A = x > _ ? 1 : x / _, I = x > _ ? _ / x : 1, C = Math.abs(x - _) > .001, L = b + w;
                                C ? (t.translate(p, m), t.rotate(M), t.scale(A, I), t.arc(0, 0, S, b, L, 1 - T), t.scale(1 / A, 1 / I), t.rotate(-M), t.translate(-p, -m)) : t.arc(p, m, S, b, L, 1 - T), 1 == f && (e = g(b) * x + p, i = v(b) * _ + m), n = g(L) * x + p, r = v(L) * _ + m;
                                break;
                            case l.R:
                                e = n = s[f], i = r = s[f + 1], t.rect(s[f++], s[f++], s[f++], s[f++]);
                                break;
                            case l.Z:
                                t.closePath(), n = e, r = i
                        }
                    }
                }
            }, _.CMD = l, t.exports = _
        }, function (t, e) {
            var i = function (t) {
                this.colorStops = t || []
            };
            i.prototype = {
                constructor: i, addColorStop: function (t, e) {
                    this.colorStops.push({offset: t, color: e})
                }
            }, t.exports = i
        }, function (t, e, i) {
            function n(t, e, i, n) {
                if (!e)return t;
                var s = r(e[0]), l = a.isArray(s) && s.length || 1;
                i = i || [], n = n || "extra";
                for (var h = 0; h < l; h++)if (!t[h]) {
                    var u = i[h] || n + (h - i.length);
                    t[h] = o(e, h) ? {type: "ordinal", name: u} : u
                }
                return t
            }

            function r(t) {
                return a.isArray(t) ? t : a.isObject(t) ? t.value : t
            }

            var a = i(1), o = n.guessOrdinal = function (t, e) {
                for (var i = 0, n = t.length; i < n; i++) {
                    var o = r(t[i]);
                    if (!a.isArray(o))return !1;
                    var o = o[e];
                    if (null != o && isFinite(o))return !1;
                    if (a.isString(o) && "-" !== o)return !0
                }
                return !1
            };
            t.exports = n
        }, function (t, e, i) {
            var n = i(1);
            t.exports = function (t) {
                for (var e = 0; e < t.length; e++)t[e][1] || (t[e][1] = t[e][0]);
                return function (e) {
                    for (var i = {}, r = 0; r < t.length; r++) {
                        var a = t[r][1];
                        if (!(e && n.indexOf(e, a) >= 0)) {
                            var o = this.getShallow(a);
                            null != o && (i[t[r][0]] = o)
                        }
                    }
                    return i
                }
            }
        }, function (t, e, i) {
            function n() {
                this._extent = [1 / 0, -(1 / 0)], this._interval = 0, this.init && this.init.apply(this, arguments)
            }

            var r = i(21), a = n.prototype;
            a.parse = function (t) {
                return t
            }, a.contain = function (t) {
                var e = this._extent;
                return t >= e[0] && t <= e[1]
            }, a.normalize = function (t) {
                var e = this._extent;
                return e[1] === e[0] ? .5 : (t - e[0]) / (e[1] - e[0])
            }, a.scale = function (t) {
                var e = this._extent;
                return t * (e[1] - e[0]) + e[0]
            }, a.unionExtent = function (t) {
                var e = this._extent;
                t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1])
            }, a.getExtent = function () {
                return this._extent.slice()
            }, a.setExtent = function (t, e) {
                var i = this._extent;
                isNaN(t) || (i[0] = t), isNaN(e) || (i[1] = e)
            }, a.getTicksLabels = function () {
                for (var t = [], e = this.getTicks(), i = 0; i < e.length; i++)t.push(this.getLabel(e[i]));
                return t
            }, r.enableClassExtend(n), r.enableClassManagement(n, {registerWhenExtend: !0}), t.exports = n
        }, function (t, e) {
            var i = 1;
            "undefined" != typeof window && (i = Math.max(window.devicePixelRatio || 1, 1));
            var n = {debugMode: 0, devicePixelRatio: i};
            t.exports = n
        }, function (t, e, i) {
            var n = i(1), r = i(58), a = i(8), o = function (t) {
                t = t || {}, r.call(this, t);
                for (var e in t)t.hasOwnProperty(e) && (this[e] = t[e]);
                this._children = [], this.__storage = null, this.__dirty = !0
            };
            o.prototype = {
                constructor: o, isGroup: !0, type: "group", silent: !1, children: function () {
                    return this._children.slice()
                }, childAt: function (t) {
                    return this._children[t]
                }, childOfName: function (t) {
                    for (var e = this._children, i = 0; i < e.length; i++)if (e[i].name === t)return e[i]
                }, childCount: function () {
                    return this._children.length
                }, add: function (t) {
                    return t && t !== this && t.parent !== this && (this._children.push(t), this._doAdd(t)), this
                }, addBefore: function (t, e) {
                    if (t && t !== this && t.parent !== this && e && e.parent === this) {
                        var i = this._children, n = i.indexOf(e);
                        n >= 0 && (i.splice(n, 0, t), this._doAdd(t))
                    }
                    return this
                }, _doAdd: function (t) {
                    t.parent && t.parent.remove(t), t.parent = this;
                    var e = this.__storage, i = this.__zr;
                    e && e !== t.__storage && (e.addToMap(t), t instanceof o && t.addChildrenToStorage(e)), i && i.refresh()
                }, remove: function (t) {
                    var e = this.__zr, i = this.__storage, r = this._children, a = n.indexOf(r, t);
                    return a < 0 ? this : (r.splice(a, 1), t.parent = null, i && (i.delFromMap(t.id), t instanceof o && t.delChildrenFromStorage(i)), e && e.refresh(), this)
                }, removeAll: function () {
                    var t, e, i = this._children, n = this.__storage;
                    for (e = 0; e < i.length; e++)t = i[e], n && (n.delFromMap(t.id), t instanceof o && t.delChildrenFromStorage(n)), t.parent = null;
                    return i.length = 0, this
                }, eachChild: function (t, e) {
                    for (var i = this._children, n = 0; n < i.length; n++) {
                        var r = i[n];
                        t.call(e, r, n)
                    }
                    return this
                }, traverse: function (t, e) {
                    for (var i = 0; i < this._children.length; i++) {
                        var n = this._children[i];
                        t.call(e, n), "group" === n.type && n.traverse(t, e)
                    }
                    return this
                }, addChildrenToStorage: function (t) {
                    for (var e = 0; e < this._children.length; e++) {
                        var i = this._children[e];
                        t.addToMap(i), i instanceof o && i.addChildrenToStorage(t)
                    }
                }, delChildrenFromStorage: function (t) {
                    for (var e = 0; e < this._children.length; e++) {
                        var i = this._children[e];
                        t.delFromMap(i.id), i instanceof o && i.delChildrenFromStorage(t)
                    }
                }, dirty: function () {
                    return this.__dirty = !0, this.__zr && this.__zr.refresh(), this
                }, getBoundingRect: function (t) {
                    for (var e = null, i = new a(0, 0, 0, 0), n = t || this._children, r = [], o = 0; o < n.length; o++) {
                        var s = n[o];
                        if (!s.ignore && !s.invisible) {
                            var l = s.getBoundingRect(), h = s.getLocalTransform(r);
                            h ? (i.copy(l), i.applyTransform(h), e = e || i.clone(), e.union(i)) : (e = e || l.clone(), e.union(l))
                        }
                    }
                    return e || i
                }
            }, n.inherits(o, r), t.exports = o
        }, function (t, e, i) {
            "use strict";
            function n(t) {
                for (var e = 0; e < t.length && null == t[e];)e++;
                return t[e]
            }

            function r(t) {
                var e = n(t);
                return null != e && !c.isArray(p(e))
            }

            function a(t, e, i) {
                t = t || [];
                var n = e.get("coordinateSystem"), a = v[n], o = d.get(n), s = a && a(t, e, i), m = s && s.dimensions;
                m || (m = o && o.dimensions || ["x", "y"], m = u(m, t, m.concat(["value"])));
                var y = s ? s.categoryIndex : -1, x = new h(m, e), _ = l(s, t), b = {}, w = y >= 0 && r(t) ? function (t, e, i, n) {
                    return f.isDataItemOption(t) && (x.hasItemOption = !0), n === y ? i : g(p(t), m[n])
                } : function (t, e, i, n) {
                    var r = p(t), a = g(r && r[n], m[n]);
                    f.isDataItemOption(t) && (x.hasItemOption = !0);
                    var o = s && s.categoryAxesModels;
                    return o && o[e] && "string" == typeof a && (b[e] = b[e] || o[e].getCategories(), a = c.indexOf(b[e], a), a < 0 && !isNaN(a) && (a = +a)), a
                };
                return x.hasItemOption = !1, x.initData(t, _, w), x
            }

            function o(t) {
                return "category" !== t && "time" !== t
            }

            function s(t) {
                return "category" === t ? "ordinal" : "time" === t ? "time" : "float"
            }

            function l(t, e) {
                var i, n = [], r = t && t.dimensions[t.categoryIndex];
                if (r && (i = t.categoryAxesModels[r.name]), i) {
                    var a = i.getCategories();
                    if (a) {
                        var o = e.length;
                        if (c.isArray(e[0]) && e[0].length > 1) {
                            n = [];
                            for (var s = 0; s < o; s++)n[s] = a[e[s][t.categoryIndex || 0]]
                        } else n = a.slice(0)
                    }
                }
                return n
            }

            var h = i(14), u = i(30), c = i(1), f = i(7), d = i(23), p = f.getDataItemValue, g = f.converDataValue, v = {
                cartesian2d: function (t, e, i) {
                    var n = c.map(["xAxis", "yAxis"], function (t) {
                        return i.queryComponents({mainType: t, index: e.get(t + "Index"), id: e.get(t + "Id")})[0]
                    }), r = n[0], a = n[1], l = r.get("type"), h = a.get("type"), f = [{
                        name: "x",
                        type: s(l),
                        stackable: o(l)
                    }, {name: "y", type: s(h), stackable: o(h)}], d = "category" === l, p = "category" === h;
                    u(f, t, ["x", "y", "z"]);
                    var g = {};
                    return d && (g.x = r), p && (g.y = a), {
                        dimensions: f,
                        categoryIndex: d ? 0 : p ? 1 : -1,
                        categoryAxesModels: g
                    }
                }, polar: function (t, e, i) {
                    var n = i.queryComponents({
                        mainType: "polar",
                        index: e.get("polarIndex"),
                        id: e.get("polarId")
                    })[0], r = n.findAxisModel("angleAxis"), a = n.findAxisModel("radiusAxis"), l = a.get("type"), h = r.get("type"), c = [{
                        name: "radius",
                        type: s(l),
                        stackable: o(l)
                    }, {name: "angle", type: s(h), stackable: o(h)}], f = "category" === h, d = "category" === l;
                    u(c, t, ["radius", "angle", "value"]);
                    var p = {};
                    return d && (p.radius = a), f && (p.angle = r), {
                        dimensions: c,
                        categoryIndex: f ? 1 : d ? 0 : -1,
                        categoryAxesModels: p
                    }
                }, geo: function (t, e, i) {
                    return {dimensions: u([{name: "lng"}, {name: "lat"}], t, ["lng", "lat", "value"])}
                }
            };
            t.exports = a
        }, function (t, e, i) {
            "use strict";
            var n = i(3), r = i(1), a = i(2);
            i(54), i(106), a.extendComponentView({
                type: "grid", render: function (t, e) {
                    this.group.removeAll(), t.get("show") && this.group.add(new n.Rect({
                        shape: t.coordinateSystem.getRect(),
                        style: r.defaults({fill: t.get("backgroundColor")}, t.getItemStyle()),
                        silent: !0,
                        z2: -1
                    }))
                }
            }), a.registerPreprocessor(function (t) {
                t.xAxis && t.yAxis && !t.grid && (t.grid = {})
            })
        }, function (t, e, i) {
            function n(t) {
                t = t || {}, o.call(this, t);
                for (var e in t)t.hasOwnProperty(e) && "style" !== e && (this[e] = t[e]);
                this.style = new a(t.style), this._rect = null, this.__clipPaths = []
            }

            var r = i(1), a = i(64), o = i(58), s = i(75);
            n.prototype = {
                constructor: n,
                type: "displayable",
                __dirty: !0,
                invisible: !1,
                z: 0,
                z2: 0,
                zlevel: 0,
                draggable: !1,
                dragging: !1,
                silent: !1,
                culling: !1,
                cursor: "pointer",
                rectHover: !1,
                progressive: -1,
                beforeBrush: function (t) {
                },
                afterBrush: function (t) {
                },
                brush: function (t, e) {
                },
                getBoundingRect: function () {
                },
                contain: function (t, e) {
                    return this.rectContain(t, e)
                },
                traverse: function (t, e) {
                    t.call(e, this)
                },
                rectContain: function (t, e) {
                    var i = this.transformCoordToLocal(t, e), n = this.getBoundingRect();
                    return n.contain(i[0], i[1])
                },
                dirty: function () {
                    this.__dirty = !0, this._rect = null, this.__zr && this.__zr.refresh()
                },
                animateStyle: function (t) {
                    return this.animate("style", t)
                },
                attrKV: function (t, e) {
                    "style" !== t ? o.prototype.attrKV.call(this, t, e) : this.style.set(e)
                },
                setStyle: function (t, e) {
                    return this.style.set(t, e), this.dirty(!1), this
                },
                useStyle: function (t) {
                    return this.style = new a(t), this.dirty(!1), this
                }
            }, r.inherits(n, o), r.mixin(n, s), t.exports = n
        }, function (t, e, i) {
            var n = i(4), r = i(9), a = i(32), o = Math.floor, s = Math.ceil, l = n.getPrecisionSafe, h = n.round, u = a.extend({
                type: "interval",
                _interval: 0,
                setExtent: function (t, e) {
                    var i = this._extent;
                    isNaN(t) || (i[0] = parseFloat(t)), isNaN(e) || (i[1] = parseFloat(e))
                },
                unionExtent: function (t) {
                    var e = this._extent;
                    t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]), u.prototype.setExtent.call(this, e[0], e[1])
                },
                getInterval: function () {
                    return this._interval || this.niceTicks(), this._interval
                },
                setInterval: function (t) {
                    this._interval = t, this._niceExtent = this._extent.slice()
                },
                getTicks: function () {
                    this._interval || this.niceTicks();
                    var t = this._interval, e = this._extent, i = [], n = 1e4;
                    if (t) {
                        var r = this._niceExtent, a = l(t) + 2;
                        e[0] < r[0] && i.push(e[0]);
                        for (var o = r[0]; o <= r[1];)if (i.push(o), o = h(o + t, a), i.length > n)return [];
                        e[1] > (i.length ? i[i.length - 1] : r[1]) && i.push(e[1])
                    }
                    return i
                },
                getTicksLabels: function () {
                    for (var t = [], e = this.getTicks(), i = 0; i < e.length; i++)t.push(this.getLabel(e[i]));
                    return t
                },
                getLabel: function (t) {
                    return r.addCommas(t)
                },
                niceTicks: function (t) {
                    t = t || 5;
                    var e = this._extent, i = e[1] - e[0];
                    if (isFinite(i)) {
                        i < 0 && (i = -i, e.reverse());
                        var r = h(n.nice(i / t, !0), Math.max(l(e[0]), l(e[1])) + 2), a = l(r) + 2, u = [h(s(e[0] / r) * r, a), h(o(e[1] / r) * r, a)];
                        this._interval = r, this._niceExtent = u
                    }
                },
                niceExtent: function (t, e, i) {
                    var n = this._extent;
                    if (n[0] === n[1])if (0 !== n[0]) {
                        var r = n[0];
                        i ? n[0] -= r / 2 : (n[1] += r / 2, n[0] -= r / 2)
                    } else n[1] = 1;
                    var a = n[1] - n[0];
                    isFinite(a) || (n[0] = 0, n[1] = 1), this.niceTicks(t);
                    var l = this._interval;
                    e || (n[0] = h(o(n[0] / l) * l)), i || (n[1] = h(s(n[1] / l) * l))
                }
            });
            u.create = function () {
                return new u
            }, t.exports = u
        }, function (t, e, i) {
            function n(t) {
                this.group = new a.Group, this._symbolCtor = t || o
            }

            function r(t, e, i) {
                var n = t.getItemLayout(e);
                return n && !isNaN(n[0]) && !isNaN(n[1]) && !(i && i(e)) && "none" !== t.getItemVisual(e, "symbol")
            }

            var a = i(3), o = i(49), s = n.prototype;
            s.updateData = function (t, e) {
                var i = this.group, n = t.hostModel, o = this._data, s = this._symbolCtor, l = {
                    itemStyle: n.getModel("itemStyle.normal").getItemStyle(["color"]),
                    hoverItemStyle: n.getModel("itemStyle.emphasis").getItemStyle(),
                    symbolRotate: n.get("symbolRotate"),
                    symbolOffset: n.get("symbolOffset"),
                    hoverAnimation: n.get("hoverAnimation"),
                    labelModel: n.getModel("label.normal"),
                    hoverLabelModel: n.getModel("label.emphasis")
                };
                t.diff(o).add(function (n) {
                    var a = t.getItemLayout(n);
                    if (r(t, n, e)) {
                        var o = new s(t, n, l);
                        o.attr("position", a), t.setItemGraphicEl(n, o), i.add(o)
                    }
                }).update(function (h, u) {
                    var c = o.getItemGraphicEl(u), f = t.getItemLayout(h);
                    return r(t, h, e) ? (c ? (c.updateData(t, h, l), a.updateProps(c, {position: f}, n)) : (c = new s(t, h), c.attr("position", f)), i.add(c), void t.setItemGraphicEl(h, c)) : void i.remove(c)
                }).remove(function (t) {
                    var e = o.getItemGraphicEl(t);
                    e && e.fadeOut(function () {
                        i.remove(e)
                    })
                }).execute(), this._data = t
            }, s.updateLayout = function () {
                var t = this._data;
                t && t.eachItemGraphicEl(function (e, i) {
                    var n = t.getItemLayout(i);
                    e.attr("position", n)
                })
            }, s.remove = function (t) {
                var e = this.group, i = this._data;
                i && (t ? i.eachItemGraphicEl(function (t) {
                    t.fadeOut(function () {
                        e.remove(t)
                    })
                }) : e.removeAll())
            }, t.exports = n
        }, , , function (t, e, i) {
            function n(t, e) {
                var i = t[1] - t[0], n = e, r = i / n / 2;
                t[0] += r, t[1] -= r
            }

            var r = i(4), a = r.linearMap, o = i(1), s = [0, 1], l = function (t, e, i) {
                this.dim = t, this.scale = e, this._extent = i || [0, 0], this.inverse = !1, this.onBand = !1
            };
            l.prototype = {
                constructor: l, contain: function (t) {
                    var e = this._extent, i = Math.min(e[0], e[1]), n = Math.max(e[0], e[1]);
                    return t >= i && t <= n
                }, containData: function (t) {
                    return this.contain(this.dataToCoord(t))
                }, getExtent: function () {
                    var t = this._extent.slice();
                    return t
                }, getPixelPrecision: function (t) {
                    return r.getPixelPrecision(t || this.scale.getExtent(), this._extent)
                }, setExtent: function (t, e) {
                    var i = this._extent;
                    i[0] = t, i[1] = e
                }, dataToCoord: function (t, e) {
                    var i = this._extent, r = this.scale;
                    return t = r.normalize(t), this.onBand && "ordinal" === r.type && (i = i.slice(), n(i, r.count())), a(t, s, i, e)
                }, coordToData: function (t, e) {
                    var i = this._extent, r = this.scale;
                    this.onBand && "ordinal" === r.type && (i = i.slice(), n(i, r.count()));
                    var o = a(t, i, s, e);
                    return this.scale.scale(o)
                }, getTicksCoords: function (t) {
                    if (this.onBand && !t) {
                        for (var e = this.getBands(), i = [], n = 0; n < e.length; n++)i.push(e[n][0]);
                        return e[n - 1] && i.push(e[n - 1][1]), i
                    }
                    return o.map(this.scale.getTicks(), this.dataToCoord, this)
                }, getLabelsCoords: function () {
                    return o.map(this.scale.getTicks(), this.dataToCoord, this)
                }, getBands: function () {
                    for (var t = this.getExtent(), e = [], i = this.scale.count(), n = t[0], r = t[1], a = r - n, o = 0; o < i; o++)e.push([a * o / i + n, a * (o + 1) / i + n]);
                    return e
                }, getBandWidth: function () {
                    var t = this._extent, e = this.scale.getExtent(), i = e[1] - e[0] + (this.onBand ? 1 : 0);
                    0 === i && (i = 1);
                    var n = Math.abs(t[1] - t[0]);
                    return Math.abs(n) / i
                }
            }, t.exports = l
        }, function (t, e, i) {
            var n = i(1), r = i(21), a = r.parseClassType, o = 0, s = {}, l = "_";
            s.getUID = function (t) {
                return [t || "", o++, Math.random()].join(l)
            }, s.enableSubTypeDefaulter = function (t) {
                var e = {};
                return t.registerSubTypeDefaulter = function (t, i) {
                    t = a(t), e[t.main] = i
                }, t.determineSubType = function (i, n) {
                    var r = n.type;
                    if (!r) {
                        var o = a(i).main;
                        t.hasSubTypes(i) && e[o] && (r = e[o](n))
                    }
                    return r
                }, t
            }, s.enableTopologicalTravel = function (t, e) {
                function i(t) {
                    var i = {}, o = [];
                    return n.each(t, function (s) {
                        var l = r(i, s), h = l.originalDeps = e(s), u = a(h, t);
                        l.entryCount = u.length, 0 === l.entryCount && o.push(s), n.each(u, function (t) {
                            n.indexOf(l.predecessor, t) < 0 && l.predecessor.push(t);
                            var e = r(i, t);
                            n.indexOf(e.successor, t) < 0 && e.successor.push(s)
                        })
                    }), {graph: i, noEntryList: o}
                }

                function r(t, e) {
                    return t[e] || (t[e] = {predecessor: [], successor: []}), t[e]
                }

                function a(t, e) {
                    var i = [];
                    return n.each(t, function (t) {
                        n.indexOf(e, t) >= 0 && i.push(t)
                    }), i
                }

                t.topologicalTravel = function (t, e, r, a) {
                    function o(t) {
                        h[t].entryCount--, 0 === h[t].entryCount && u.push(t)
                    }

                    function s(t) {
                        c[t] = !0, o(t)
                    }

                    if (t.length) {
                        var l = i(e), h = l.graph, u = l.noEntryList, c = {};
                        for (n.each(t, function (t) {
                            c[t] = !0
                        }); u.length;) {
                            var f = u.pop(), d = h[f], p = !!c[f];
                            p && (r.call(a, f, d.originalDeps.slice()), delete c[f]), n.each(d.successor, p ? s : o)
                        }
                        n.each(c, function () {
                            throw new Error("Circle dependency may exists")
                        })
                    }
                }
            }, t.exports = s
        }, function (t, e) {
            function i(t) {
                for (var e = 0; t >= u;)e |= 1 & t, t >>= 1;
                return t + e
            }

            function n(t, e, i, n) {
                var a = e + 1;
                if (a === i)return 1;
                if (n(t[a++], t[e]) < 0) {
                    for (; a < i && n(t[a], t[a - 1]) < 0;)a++;
                    r(t, e, a)
                } else for (; a < i && n(t[a], t[a - 1]) >= 0;)a++;
                return a - e
            }

            function r(t, e, i) {
                for (i--; e < i;) {
                    var n = t[e];
                    t[e++] = t[i], t[i--] = n
                }
            }

            function a(t, e, i, n, r) {
                for (n === e && n++; n < i; n++) {
                    for (var a, o = t[n], s = e, l = n; s < l;)a = s + l >>> 1, r(o, t[a]) < 0 ? l = a : s = a + 1;
                    var h = n - s;
                    switch (h) {
                        case 3:
                            t[s + 3] = t[s + 2];
                        case 2:
                            t[s + 2] = t[s + 1];
                        case 1:
                            t[s + 1] = t[s];
                            break;
                        default:
                            for (; h > 0;)t[s + h] = t[s + h - 1], h--
                    }
                    t[s] = o
                }
            }

            function o(t, e, i, n, r, a) {
                var o = 0, s = 0, l = 1;
                if (a(t, e[i + r]) > 0) {
                    for (s = n - r; l < s && a(t, e[i + r + l]) > 0;)o = l, l = (l << 1) + 1, l <= 0 && (l = s);
                    l > s && (l = s), o += r, l += r
                } else {
                    for (s = r + 1; l < s && a(t, e[i + r - l]) <= 0;)o = l, l = (l << 1) + 1, l <= 0 && (l = s);
                    l > s && (l = s);
                    var h = o;
                    o = r - l, l = r - h
                }
                for (o++; o < l;) {
                    var u = o + (l - o >>> 1);
                    a(t, e[i + u]) > 0 ? o = u + 1 : l = u
                }
                return l
            }

            function s(t, e, i, n, r, a) {
                var o = 0, s = 0, l = 1;
                if (a(t, e[i + r]) < 0) {
                    for (s = r + 1; l < s && a(t, e[i + r - l]) < 0;)o = l, l = (l << 1) + 1, l <= 0 && (l = s);
                    l > s && (l = s);
                    var h = o;
                    o = r - l, l = r - h
                } else {
                    for (s = n - r; l < s && a(t, e[i + r + l]) >= 0;)o = l, l = (l << 1) + 1, l <= 0 && (l = s);
                    l > s && (l = s), o += r, l += r
                }
                for (o++; o < l;) {
                    var u = o + (l - o >>> 1);
                    a(t, e[i + u]) < 0 ? l = u : o = u + 1
                }
                return l
            }

            function l(t, e) {
                function i(t, e) {
                    u[y] = t, d[y] = e, y += 1
                }

                function n() {
                    for (; y > 1;) {
                        var t = y - 2;
                        if (t >= 1 && d[t - 1] <= d[t] + d[t + 1] || t >= 2 && d[t - 2] <= d[t] + d[t - 1])d[t - 1] < d[t + 1] && t--; else if (d[t] > d[t + 1])break;
                        a(t)
                    }
                }

                function r() {
                    for (; y > 1;) {
                        var t = y - 2;
                        t > 0 && d[t - 1] < d[t + 1] && t--, a(t)
                    }
                }

                function a(i) {
                    var n = u[i], r = d[i], a = u[i + 1], c = d[i + 1];
                    d[i] = r + c, i === y - 3 && (u[i + 1] = u[i + 2], d[i + 1] = d[i + 2]), y--;
                    var f = s(t[a], t, n, r, 0, e);
                    n += f, r -= f, 0 !== r && (c = o(t[n + r - 1], t, a, c, c - 1, e), 0 !== c && (r <= c ? l(n, r, a, c) : h(n, r, a, c)))
                }

                function l(i, n, r, a) {
                    var l = 0;
                    for (l = 0; l < n; l++)x[l] = t[i + l];
                    var h = 0, u = r, f = i;
                    if (t[f++] = t[u++], 0 !== --a) {
                        if (1 === n) {
                            for (l = 0; l < a; l++)t[f + l] = t[u + l];
                            return void(t[f + a] = x[h])
                        }
                        for (var d, g, v, m = p; ;) {
                            d = 0, g = 0, v = !1;
                            do if (e(t[u], x[h]) < 0) {
                                if (t[f++] = t[u++], g++, d = 0, 0 === --a) {
                                    v = !0;
                                    break
                                }
                            } else if (t[f++] = x[h++], d++, g = 0, 1 === --n) {
                                v = !0;
                                break
                            } while ((d | g) < m);
                            if (v)break;
                            do {
                                if (d = s(t[u], x, h, n, 0, e), 0 !== d) {
                                    for (l = 0; l < d; l++)t[f + l] = x[h + l];
                                    if (f += d, h += d, n -= d, n <= 1) {
                                        v = !0;
                                        break
                                    }
                                }
                                if (t[f++] = t[u++], 0 === --a) {
                                    v = !0;
                                    break
                                }
                                if (g = o(x[h], t, u, a, 0, e), 0 !== g) {
                                    for (l = 0; l < g; l++)t[f + l] = t[u + l];
                                    if (f += g, u += g, a -= g, 0 === a) {
                                        v = !0;
                                        break
                                    }
                                }
                                if (t[f++] = x[h++], 1 === --n) {
                                    v = !0;
                                    break
                                }
                                m--
                            } while (d >= c || g >= c);
                            if (v)break;
                            m < 0 && (m = 0), m += 2
                        }
                        if (p = m, p < 1 && (p = 1), 1 === n) {
                            for (l = 0; l < a; l++)t[f + l] = t[u + l];
                            t[f + a] = x[h]
                        } else {
                            if (0 === n)throw new Error;
                            for (l = 0; l < n; l++)t[f + l] = x[h + l]
                        }
                    } else for (l = 0; l < n; l++)t[f + l] = x[h + l]
                }

                function h(i, n, r, a) {
                    var l = 0;
                    for (l = 0; l < a; l++)x[l] = t[r + l];
                    var h = i + n - 1, u = a - 1, f = r + a - 1, d = 0, g = 0;
                    if (t[f--] = t[h--], 0 !== --n) {
                        if (1 === a) {
                            for (f -= n, h -= n, g = f + 1, d = h + 1, l = n - 1; l >= 0; l--)t[g + l] = t[d + l];
                            return void(t[f] = x[u])
                        }
                        for (var v = p; ;) {
                            var m = 0, y = 0, _ = !1;
                            do if (e(x[u], t[h]) < 0) {
                                if (t[f--] = t[h--], m++, y = 0, 0 === --n) {
                                    _ = !0;
                                    break
                                }
                            } else if (t[f--] = x[u--], y++, m = 0, 1 === --a) {
                                _ = !0;
                                break
                            } while ((m | y) < v);
                            if (_)break;
                            do {
                                if (m = n - s(x[u], t, i, n, n - 1, e), 0 !== m) {
                                    for (f -= m, h -= m, n -= m, g = f + 1, d = h + 1, l = m - 1; l >= 0; l--)t[g + l] = t[d + l];
                                    if (0 === n) {
                                        _ = !0;
                                        break
                                    }
                                }
                                if (t[f--] = x[u--], 1 === --a) {
                                    _ = !0;
                                    break
                                }
                                if (y = a - o(t[h], x, 0, a, a - 1, e), 0 !== y) {
                                    for (f -= y, u -= y, a -= y, g = f + 1, d = u + 1, l = 0; l < y; l++)t[g + l] = x[d + l];
                                    if (a <= 1) {
                                        _ = !0;
                                        break
                                    }
                                }
                                if (t[f--] = t[h--], 0 === --n) {
                                    _ = !0;
                                    break
                                }
                                v--
                            } while (m >= c || y >= c);
                            if (_)break;
                            v < 0 && (v = 0), v += 2
                        }
                        if (p = v, p < 1 && (p = 1), 1 === a) {
                            for (f -= n, h -= n, g = f + 1, d = h + 1, l = n - 1; l >= 0; l--)t[g + l] = t[d + l];
                            t[f] = x[u]
                        } else {
                            if (0 === a)throw new Error;
                            for (d = f - (a - 1), l = 0; l < a; l++)t[d + l] = x[l]
                        }
                    } else for (d = f - (a - 1), l = 0; l < a; l++)t[d + l] = x[l]
                }

                var u, d, p = c, g = 0, v = f, m = 0, y = 0;
                g = t.length, g < 2 * f && (v = g >>> 1);
                var x = [];
                m = g < 120 ? 5 : g < 1542 ? 10 : g < 119151 ? 19 : 40, u = [], d = [], this.mergeRuns = n, this.forceMergeRuns = r, this.pushRun = i
            }

            function h(t, e, r, o) {
                r || (r = 0), o || (o = t.length);
                var s = o - r;
                if (!(s < 2)) {
                    var h = 0;
                    if (s < u)return h = n(t, r, o, e), void a(t, r, o, r + h, e);
                    var c = new l(t, e), f = i(s);
                    do {
                        if (h = n(t, r, o, e), h < f) {
                            var d = s;
                            d > f && (d = f), a(t, r, r + d, r + h, e), h = d
                        }
                        c.pushRun(r, h), c.mergeRuns(), s -= h, r += h
                    } while (0 !== s);
                    c.forceMergeRuns()
                }
            }

            var u = 32, c = 7, f = 256;
            t.exports = h
        }, function (t, e) {
            "use strict";
            function i(t) {
                return t
            }

            function n(t, e, n, r) {
                this._old = t, this._new = e, this._oldKeyGetter = n || i, this._newKeyGetter = r || i
            }

            function r(t, e, i, n) {
                for (var r = 0; r < t.length; r++) {
                    var a = n(t[r], r), o = e[a];
                    null == o ? (i.push(a), e[a] = r) : (o.length || (e[a] = o = [o]), o.push(r))
                }
            }

            n.prototype = {
                constructor: n, add: function (t) {
                    return this._add = t, this
                }, update: function (t) {
                    return this._update = t, this
                }, remove: function (t) {
                    return this._remove = t, this
                }, execute: function () {
                    var t, e = this._old, i = this._new, n = this._oldKeyGetter, a = this._newKeyGetter, o = {}, s = {}, l = [], h = [];
                    for (r(e, o, l, n), r(i, s, h, a), t = 0; t < e.length; t++) {
                        var u = l[t], c = s[u];
                        if (null != c) {
                            var f = c.length;
                            f ? (1 === f && (s[u] = null), c = c.unshift()) : s[u] = null, this._update && this._update(c, t)
                        } else this._remove && this._remove(t)
                    }
                    for (var t = 0; t < h.length; t++) {
                        var u = h[t];
                        if (s.hasOwnProperty(u)) {
                            var c = s[u];
                            if (null == c)continue;
                            if (c.length)for (var d = 0, f = c.length; d < f; d++)this._add && this._add(c[d]); else this._add && this._add(c)
                        }
                    }
                }
            }, t.exports = n
        }, function (t, e) {
            t.exports = function (t, e, i, n, r) {
                n.eachRawSeriesByType(t, function (t) {
                    var r = t.getData(), a = t.get("symbol") || e, o = t.get("symbolSize");
                    r.setVisual({
                        legendSymbol: i || a,
                        symbol: a,
                        symbolSize: o
                    }), n.isSeriesFiltered(t) || ("function" == typeof o && r.each(function (e) {
                        var i = t.getRawValue(e), n = t.getDataParams(e);
                        r.setItemVisual(e, "symbolSize", o(i, n))
                    }), r.each(function (t) {
                        var e = r.getItemModel(t), i = e.getShallow("symbol", !0), n = e.getShallow("symbolSize", !0);
                        null != i && r.setItemVisual(t, "symbol", i), null != n && r.setItemVisual(t, "symbolSize", n)
                    }))
                })
            }
        }, function (t, e, i) {
            var n = i(33);
            t.exports = function () {
                if (0 !== n.debugMode)if (1 == n.debugMode)for (var t in arguments)throw new Error(arguments[t]); else if (n.debugMode > 1)for (var t in arguments)console.log(arguments[t])
            }
        }, function (t, e, i) {
            function n(t) {
                r.call(this, t)
            }

            var r = i(37), a = i(8), o = i(1), s = i(150), l = new s(50);
            n.prototype = {
                constructor: n, type: "image", brush: function (t, e) {
                    var i, n = this.style, r = n.image;
                    if (n.bind(t, this, e), i = "string" == typeof r ? this._image : r, !i && r) {
                        var a = l.get(r);
                        if (!a)return i = new Image, i.onload = function () {
                            i.onload = null;
                            for (var t = 0; t < a.pending.length; t++)a.pending[t].dirty()
                        }, a = {image: i, pending: [this]}, i.src = r, l.put(r, a), void(this._image = i);
                        if (i = a.image, this._image = i, !i.width || !i.height)return void a.pending.push(this)
                    }
                    if (i) {
                        var o = n.width || i.width, s = n.height || i.height, h = n.x || 0, u = n.y || 0;
                        if (!i.width || !i.height)return;
                        if (this.setTransform(t), n.sWidth && n.sHeight) {
                            var c = n.sx || 0, f = n.sy || 0;
                            t.drawImage(i, c, f, n.sWidth, n.sHeight, h, u, o, s)
                        } else if (n.sx && n.sy) {
                            var c = n.sx, f = n.sy, d = o - c, p = s - f;
                            t.drawImage(i, c, f, d, p, h, u, o, s)
                        } else t.drawImage(i, h, u, o, s);
                        null == n.width && (n.width = o), null == n.height && (n.height = s), this.restoreTransform(t), null != n.text && this.drawRectText(t, this.getBoundingRect())
                    }
                }, getBoundingRect: function () {
                    var t = this.style;
                    return this._rect || (this._rect = new a(t.x || 0, t.y || 0, t.width || 0, t.height || 0)), this._rect
                }
            }, o.inherits(n, r), t.exports = n
        }, function (t, e, i) {
            function n(t) {
                return t = t instanceof Array ? t.slice() : [+t, +t], t[0] /= 2, t[1] /= 2, t
            }

            function r(t, e, i) {
                l.Group.call(this), this.updateData(t, e, i)
            }

            function a(t, e) {
                this.parent.drift(t, e)
            }

            var o = i(1), s = i(26), l = i(3), h = i(4), u = r.prototype;
            u._createSymbol = function (t, e, i) {
                this.removeAll();
                var r = e.hostModel, o = e.getItemVisual(i, "color"), h = s.createSymbol(t, -1, -1, 2, 2, o);
                h.attr({z2: 100, culling: !0, scale: [0, 0]}), h.drift = a;
                var u = n(e.getItemVisual(i, "symbolSize"));
                l.initProps(h, {scale: u}, r, i), this._symbolType = t, this.add(h)
            }, u.stopSymbolAnimation = function (t) {
                this.childAt(0).stopAnimation(t)
            }, u.getSymbolPath = function () {
                return this.childAt(0)
            }, u.getScale = function () {
                return this.childAt(0).scale
            }, u.highlight = function () {
                this.childAt(0).trigger("emphasis")
            }, u.downplay = function () {
                this.childAt(0).trigger("normal")
            }, u.setZ = function (t, e) {
                var i = this.childAt(0);
                i.zlevel = t, i.z = e
            }, u.setDraggable = function (t) {
                var e = this.childAt(0);
                e.draggable = t, e.cursor = t ? "move" : "pointer"
            }, u.updateData = function (t, e, i) {
                this.silent = !1;
                var r = t.getItemVisual(e, "symbol") || "circle", a = t.hostModel, o = n(t.getItemVisual(e, "symbolSize"));
                if (r !== this._symbolType)this._createSymbol(r, t, e); else {
                    var s = this.childAt(0);
                    l.updateProps(s, {scale: o}, a, e)
                }
                this._updateCommon(t, e, o, i), this._seriesModel = a
            };
            var c = ["itemStyle", "normal"], f = ["itemStyle", "emphasis"], d = ["label", "normal"], p = ["label", "emphasis"];
            u._updateCommon = function (t, e, i, r) {
                var a = this.childAt(0), s = t.hostModel, u = t.getItemVisual(e, "color");
                "image" !== a.type && a.useStyle({strokeNoScale: !0}), r = r || null;
                var g = r && r.itemStyle, v = r && r.hoverItemStyle, m = r && r.symbolRotate, y = r && r.symbolOffset, x = r && r.labelModel, _ = r && r.hoverLabelModel, b = r && r.hoverAnimation;
                if (!r || t.hasItemOption) {
                    var w = t.getItemModel(e);
                    g = w.getModel(c).getItemStyle(["color"]), v = w.getModel(f).getItemStyle(), m = w.getShallow("symbolRotate"), y = w.getShallow("symbolOffset"), x = w.getModel(d), _ = w.getModel(p), b = w.getShallow("hoverAnimation")
                } else v = o.extend({}, v);
                var M = a.style;
                a.attr("rotation", (m || 0) * Math.PI / 180 || 0), y && a.attr("position", [h.parsePercent(y[0], i[0]), h.parsePercent(y[1], i[1])]), a.setColor(u), a.setStyle(g);
                var T = t.getItemVisual(e, "opacity");
                null != T && (M.opacity = T);
                for (var S, A, I = t.dimensions.slice(); I.length && (S = I.pop(), A = t.getDimensionInfo(S).type, "ordinal" === A || "time" === A););
                null != S && x.getShallow("show") ? (l.setText(M, x, u), M.text = o.retrieve(s.getFormattedLabel(e, "normal"), t.get(S, e))) : M.text = "", null != S && _.getShallow("show") ? (l.setText(v, _, u), v.text = o.retrieve(s.getFormattedLabel(e, "emphasis"), t.get(S, e))) : v.text = "";
                var C = n(t.getItemVisual(e, "symbolSize"));
                if (a.off("mouseover").off("mouseout").off("emphasis").off("normal"), a.hoverStyle = v, l.setHoverStyle(a), b && s.ifEnableAnimation()) {
                    var L = function () {
                        var t = C[1] / C[0];
                        this.animateTo({scale: [Math.max(1.1 * C[0], C[0] + 3), Math.max(1.1 * C[1], C[1] + 3 * t)]}, 400, "elasticOut")
                    }, k = function () {
                        this.animateTo({scale: C}, 400, "elasticOut")
                    };
                    a.on("mouseover", L).on("mouseout", k).on("emphasis", L).on("normal", k)
                }
            }, u.fadeOut = function (t) {
                var e = this.childAt(0);
                this.silent = !0,
                    e.style.text = "", l.updateProps(e, {scale: [0, 0]}, this._seriesModel, this.dataIndex, t)
            }, o.inherits(r, l.Group), t.exports = r
        }, function (t, e, i) {
            function n(t) {
                var e = {componentType: t.mainType};
                return e[t.mainType + "Index"] = t.componentIndex, e
            }

            function r(t, e, i) {
                var n, r, a = f(e - t.rotation);
                return d(a) ? (r = i > 0 ? "top" : "bottom", n = "center") : d(a - m) ? (r = i > 0 ? "bottom" : "top", n = "center") : (r = "middle", n = a > 0 && a < m ? i > 0 ? "right" : "left" : i > 0 ? "left" : "right"), {
                    rotation: a,
                    textAlign: n,
                    verticalAlign: r
                }
            }

            function a(t, e, i, n) {
                var r, a, o = f(i - t.rotation), s = n[0] > n[1], l = "start" === e && !s || "start" !== e && s;
                return d(o - m / 2) ? (a = l ? "bottom" : "top", r = "center") : d(o - 1.5 * m) ? (a = l ? "top" : "bottom", r = "center") : (a = "middle", r = o < 1.5 * m && o > m / 2 ? l ? "left" : "right" : l ? "right" : "left"), {
                    rotation: o,
                    textAlign: r,
                    verticalAlign: a
                }
            }

            function o(t) {
                var e = t.get("tooltip");
                return t.get("silent") || !(t.get("triggerEvent") || e && e.show)
            }

            var s = i(1), l = i(9), h = i(3), u = i(10), c = i(4), f = c.remRadian, d = c.isRadianAroundZero, p = i(5), g = p.applyTransform, v = s.retrieve, m = Math.PI, y = function (t, e) {
                this.opt = e, this.axisModel = t, s.defaults(e, {
                    labelOffset: 0,
                    nameDirection: 1,
                    tickDirection: 1,
                    labelDirection: 1,
                    silent: !0
                }), this.group = new h.Group;
                var i = new h.Group({position: e.position.slice(), rotation: e.rotation});
                i.updateTransform(), this._transform = i.transform, this._dumbGroup = i
            };
            y.prototype = {
                constructor: y, hasBuilder: function (t) {
                    return !!x[t]
                }, add: function (t) {
                    x[t].call(this)
                }, getGroup: function () {
                    return this.group
                }
            };
            var x = {
                axisLine: function () {
                    var t = this.opt, e = this.axisModel;
                    if (e.get("axisLine.show")) {
                        var i = this.axisModel.axis.getExtent(), n = this._transform, r = [i[0], 0], a = [i[1], 0];
                        n && (g(r, r, n), g(a, a, n)), this.group.add(new h.Line(h.subPixelOptimizeLine({
                            anid: "line",
                            shape: {x1: r[0], y1: r[1], x2: a[0], y2: a[1]},
                            style: s.extend({lineCap: "round"}, e.getModel("axisLine.lineStyle").getLineStyle()),
                            strokeContainThreshold: t.strokeContainThreshold || 5,
                            silent: !0,
                            z2: 1
                        })))
                    }
                }, axisTick: function () {
                    var t = this.axisModel;
                    if (t.get("axisTick.show"))for (var e = t.axis, i = t.getModel("axisTick"), n = this.opt, r = i.getModel("lineStyle"), a = i.get("length"), o = b(i, n.labelInterval), l = e.getTicksCoords(i.get("alignWithLabel")), u = e.scale.getTicks(), c = [], f = [], d = this._transform, p = 0; p < l.length; p++)if (!_(e, p, o)) {
                        var v = l[p];
                        c[0] = v, c[1] = 0, f[0] = v, f[1] = n.tickDirection * a, d && (g(c, c, d), g(f, f, d)), this.group.add(new h.Line(h.subPixelOptimizeLine({
                            anid: "tick_" + u[p],
                            shape: {x1: c[0], y1: c[1], x2: f[0], y2: f[1]},
                            style: s.defaults(r.getLineStyle(), {stroke: t.get("axisLine.lineStyle.color")}),
                            z2: 2,
                            silent: !0
                        })))
                    }
                }, axisLabel: function () {
                    function t(t, e) {
                        var i = t && t.getBoundingRect().clone(), n = e && e.getBoundingRect().clone();
                        if (i && n)return i.applyTransform(t.getLocalTransform()), n.applyTransform(e.getLocalTransform()), i.intersect(n)
                    }

                    var e = this.opt, i = this.axisModel, a = v(e.axisLabelShow, i.get("axisLabel.show"));
                    if (a) {
                        var s = i.axis, l = i.getModel("axisLabel"), c = l.getModel("textStyle"), f = l.get("margin"), d = s.scale.getTicks(), p = i.getFormattedLabels(), g = v(e.labelRotation, l.get("rotate")) || 0;
                        g = g * m / 180;
                        for (var y = r(e, g, e.labelDirection), x = i.get("data"), b = [], w = o(i), M = i.get("triggerEvent"), T = 0; T < d.length; T++)if (!_(s, T, e.labelInterval)) {
                            var S = c;
                            x && x[T] && x[T].textStyle && (S = new u(x[T].textStyle, c, i.ecModel));
                            var A = S.getTextColor() || i.get("axisLine.lineStyle.color"), I = s.dataToCoord(d[T]), C = [I, e.labelOffset + e.labelDirection * f], L = s.scale.getLabel(d[T]), k = new h.Text({
                                anid: "label_" + d[T],
                                style: {
                                    text: p[T],
                                    textAlign: S.get("align", !0) || y.textAlign,
                                    textVerticalAlign: S.get("baseline", !0) || y.verticalAlign,
                                    textFont: S.getFont(),
                                    fill: "function" == typeof A ? A(L) : A
                                },
                                position: C,
                                rotation: y.rotation,
                                silent: w,
                                z2: 10
                            });
                            M && (k.eventData = n(i), k.eventData.targetType = "axisLabel", k.eventData.value = L), this._dumbGroup.add(k), k.updateTransform(), b.push(k), this.group.add(k), k.decomposeTransform()
                        }
                        if ("category" !== s.type) {
                            if (i.getMin ? i.getMin() : i.get("min")) {
                                var P = b[0], D = b[1];
                                t(P, D) && (P.ignore = !0)
                            }
                            if (i.getMax ? i.getMax() : i.get("max")) {
                                var O = b[b.length - 1], E = b[b.length - 2];
                                t(E, O) && (O.ignore = !0)
                            }
                        }
                    }
                }, axisName: function () {
                    var t = this.opt, e = this.axisModel, i = v(t.axisName, e.get("name"));
                    if (i) {
                        var u, c = e.get("nameLocation"), f = t.nameDirection, d = e.getModel("nameTextStyle"), p = e.get("nameGap") || 0, g = this.axisModel.axis.getExtent(), y = g[0] > g[1] ? -1 : 1, x = ["start" === c ? g[0] - y * p : "end" === c ? g[1] + y * p : (g[0] + g[1]) / 2, "middle" === c ? t.labelOffset + f * p : 0], _ = e.get("nameRotate");
                        null != _ && (_ = _ * m / 180);
                        var b;
                        "middle" === c ? u = r(t, null != _ ? _ : t.rotation, f) : (u = a(t, c, _ || 0, g), b = t.axisNameAvailableWidth, null != b && (b = Math.abs(b / Math.sin(u.rotation)), !isFinite(b) && (b = null)));
                        var w = d.getFont(), M = e.get("nameTruncate", !0) || {}, T = M.ellipsis, S = v(M.maxWidth, b), A = null != T && null != S ? l.truncateText(i, S, w, T, {
                            minChar: 2,
                            placeholder: M.placeholder
                        }) : i, I = e.get("tooltip", !0), C = e.mainType, L = {componentType: C, name: i, $vars: ["name"]};
                        L[C + "Index"] = e.componentIndex;
                        var k = new h.Text({
                            anid: "name",
                            __fullText: i,
                            __truncatedText: A,
                            style: {
                                text: A,
                                textFont: w,
                                fill: d.getTextColor() || e.get("axisLine.lineStyle.color"),
                                textAlign: u.textAlign,
                                textVerticalAlign: u.verticalAlign
                            },
                            position: x,
                            rotation: u.rotation,
                            silent: o(e),
                            z2: 1,
                            tooltip: I && I.show ? s.extend({
                                content: i, formatter: function () {
                                    return i
                                }, formatterParams: L
                            }, I) : null
                        });
                        e.get("triggerEvent") && (k.eventData = n(e), k.eventData.targetType = "axisName", k.eventData.name = i), this._dumbGroup.add(k), k.updateTransform(), this.group.add(k), k.decomposeTransform()
                    }
                }
            }, _ = y.ifIgnoreOnTick = function (t, e, i) {
                var n, r = t.scale;
                return "ordinal" === r.type && ("function" == typeof i ? (n = r.getTicks()[e], !i(n, r.getLabel(n))) : e % (i + 1))
            }, b = y.getInterval = function (t, e) {
                var i = t.get("interval");
                return null != i && "auto" != i || (i = e), i
            };
            t.exports = y
        }, function (t, e, i) {
            function n(t) {
                return o.isObject(t) && null != t.value ? t.value : t
            }

            function r() {
                return "category" === this.get("type") && o.map(this.get("data"), n)
            }

            function a() {
                return s.getFormattedLabels(this.axis, this.get("axisLabel.formatter"))
            }

            var o = i(1), s = i(22);
            t.exports = {getFormattedLabels: a, getCategories: r}
        }, function (t, e, i) {
            var n = i(81), r = i(1), a = i(12), o = i(13), s = ["value", "category", "time", "log"];
            t.exports = function (t, e, i, l) {
                r.each(s, function (a) {
                    e.extend({
                        type: t + "Axis." + a, mergeDefaultAndTheme: function (e, n) {
                            var s = this.layoutMode, l = s ? o.getLayoutParams(e) : {}, h = n.getTheme();
                            r.merge(e, h.get(a + "Axis")), r.merge(e, this.getDefaultOption()), e.type = i(t, e), s && o.mergeLayoutParam(e, l, s)
                        }, defaultOption: r.mergeAll([{}, n[a + "Axis"], l], !0)
                    })
                }), a.registerSubTypeDefaulter(t + "Axis", r.curry(i, t))
            }
        }, function (t, e, i) {
            "use strict";
            function n(t, e) {
                return e.type || (e.data ? "category" : "value")
            }

            var r = i(12), a = i(1), o = i(52), s = r.extend({
                type: "cartesian2dAxis", axis: null, init: function () {
                    s.superApply(this, "init", arguments), this.resetRange()
                }, mergeOption: function () {
                    s.superApply(this, "mergeOption", arguments), this.resetRange()
                }, restoreData: function () {
                    s.superApply(this, "restoreData", arguments), this.resetRange()
                }, findGridModel: function () {
                    return this.ecModel.queryComponents({
                        mainType: "grid",
                        index: this.get("gridIndex"),
                        id: this.get("gridId")
                    })[0]
                }
            });
            a.merge(s.prototype, i(51)), a.merge(s.prototype, i(82));
            var l = {offset: 0};
            o("x", s, n, l), o("y", s, n, l), t.exports = s
        }, function (t, e, i) {
            function n(t, e, i) {
                return t.findGridModel() === e
            }

            function r(t) {
                var e, i = t.model, n = i.getFormattedLabels(), r = 1, a = n.length;
                a > 40 && (r = Math.ceil(a / 40));
                for (var o = 0; o < a; o += r)if (!t.isLabelIgnored(o)) {
                    var s = i.getTextRect(n[o]);
                    e ? e.union(s) : e = s
                }
                return e
            }

            function a(t, e, i) {
                this._coordsMap = {}, this._coordsList = [], this._axesMap = {}, this._axesList = [], this._initCartesian(t, e, i), this._model = t
            }

            function o(t, e) {
                var i = t.getExtent(), n = i[0] + i[1];
                t.toGlobalCoord = "x" === t.dim ? function (t) {
                    return t + e
                } : function (t) {
                    return n - t + e
                }, t.toLocalCoord = "x" === t.dim ? function (t) {
                    return t - e
                } : function (t) {
                    return n - t + e
                }
            }

            function s(t, e) {
                return c.map(y, function (e) {
                    var i = t.getReferringComponents(e)[0];
                    return i
                })
            }

            function l(t) {
                return "cartesian2d" === t.get("coordinateSystem")
            }

            var h = i(13), u = i(22), c = i(1), f = i(119), d = i(117), p = c.each, g = u.ifAxisCrossZero, v = u.niceScaleExtent;
            i(120);
            var m = a.prototype;
            m.type = "grid", m.getRect = function () {
                return this._rect
            }, m.update = function (t, e) {
                function i(t) {
                    var e = n[t];
                    for (var i in e)if (e.hasOwnProperty(i)) {
                        var r = e[i];
                        if (r && ("category" === r.type || !g(r)))return !0
                    }
                    return !1
                }

                var n = this._axesMap;
                this._updateScale(t, this._model), p(n.x, function (t) {
                    v(t, t.model)
                }), p(n.y, function (t) {
                    v(t, t.model)
                }), p(n.x, function (t) {
                    i("y") && (t.onZero = !1)
                }), p(n.y, function (t) {
                    i("x") && (t.onZero = !1)
                }), this.resize(this._model, e)
            }, m.resize = function (t, e) {
                function i() {
                    p(a, function (t) {
                        var e = t.isHorizontal(), i = e ? [0, n.width] : [0, n.height], r = t.inverse ? 1 : 0;
                        t.setExtent(i[r], i[1 - r]), o(t, e ? n.x : n.y)
                    })
                }

                var n = h.getLayoutRect(t.getBoxLayoutParams(), {width: e.getWidth(), height: e.getHeight()});
                this._rect = n;
                var a = this._axesList;
                i(), t.get("containLabel") && (p(a, function (t) {
                    if (!t.model.get("axisLabel.inside")) {
                        var e = r(t);
                        if (e) {
                            var i = t.isHorizontal() ? "height" : "width", a = t.model.get("axisLabel.margin");
                            n[i] -= e[i] + a, "top" === t.position ? n.y += e.height + a : "left" === t.position && (n.x += e.width + a)
                        }
                    }
                }), i())
            }, m.getAxis = function (t, e) {
                var i = this._axesMap[t];
                if (null != i) {
                    if (null == e)for (var n in i)if (i.hasOwnProperty(n))return i[n];
                    return i[e]
                }
            }, m.getCartesian = function (t, e) {
                if (null != t && null != e) {
                    var i = "x" + t + "y" + e;
                    return this._coordsMap[i]
                }
                for (var n = 0, r = this._coordsList; n < r.length; n++)if (r[n].getAxis("x").index === t || r[n].getAxis("y").index === e)return r[n]
            }, m.convertToPixel = function (t, e, i) {
                var n = this._findConvertTarget(t, e);
                return n.cartesian ? n.cartesian.dataToPoint(i) : n.axis ? n.axis.toGlobalCoord(n.axis.dataToCoord(i)) : null
            }, m.convertFromPixel = function (t, e, i) {
                var n = this._findConvertTarget(t, e);
                return n.cartesian ? n.cartesian.pointToData(i) : n.axis ? n.axis.coordToData(n.axis.toLocalCoord(i)) : null
            }, m._findConvertTarget = function (t, e) {
                var i, n, r = e.seriesModel, a = e.xAxisModel || r && r.getReferringComponents("xAxis")[0], o = e.yAxisModel || r && r.getReferringComponents("yAxis")[0], s = e.gridModel, l = this._coordsList;
                if (r)i = r.coordinateSystem, c.indexOf(l, i) < 0 && (i = null); else if (a && o)i = this.getCartesian(a.componentIndex, o.componentIndex); else if (a)n = this.getAxis("x", a.componentIndex); else if (o)n = this.getAxis("y", o.componentIndex); else if (s) {
                    var h = s.coordinateSystem;
                    h === this && (i = this._coordsList[0])
                }
                return {cartesian: i, axis: n}
            }, m.containPoint = function (t) {
                var e = this._coordsList[0];
                if (e)return e.containPoint(t)
            }, m._initCartesian = function (t, e, i) {
                function r(i) {
                    return function (r, l) {
                        if (n(r, t, e)) {
                            var h = r.get("position");
                            "x" === i ? "top" !== h && "bottom" !== h && (h = "bottom", a[h] && (h = "top" === h ? "bottom" : "top")) : "left" !== h && "right" !== h && (h = "left", a[h] && (h = "left" === h ? "right" : "left")), a[h] = !0;
                            var c = new d(i, u.createScaleByModel(r), [0, 0], r.get("type"), h), f = "category" === c.type;
                            c.onBand = f && r.get("boundaryGap"), c.inverse = r.get("inverse"), c.onZero = r.get("axisLine.onZero"), r.axis = c, c.model = r, c.grid = this, c.index = l, this._axesList.push(c), o[i][l] = c, s[i]++
                        }
                    }
                }

                var a = {left: !1, right: !1, top: !1, bottom: !1}, o = {x: {}, y: {}}, s = {x: 0, y: 0};
                return e.eachComponent("xAxis", r("x"), this), e.eachComponent("yAxis", r("y"), this), s.x && s.y ? (this._axesMap = o, void p(o.x, function (t, e) {
                    p(o.y, function (i, n) {
                        var r = "x" + e + "y" + n, a = new f(r);
                        a.grid = this, this._coordsMap[r] = a, this._coordsList.push(a), a.addAxis(t), a.addAxis(i)
                    }, this)
                }, this)) : (this._axesMap = {}, void(this._axesList = []))
            }, m._updateScale = function (t, e) {
                function i(t, e, i) {
                    p(i.coordDimToDataDim(e.dim), function (i) {
                        e.scale.unionExtent(t.getDataExtent(i, "ordinal" !== e.scale.type))
                    })
                }

                c.each(this._axesList, function (t) {
                    t.scale.setExtent(1 / 0, -(1 / 0))
                }), t.eachSeries(function (r) {
                    if (l(r)) {
                        var a = s(r, t), o = a[0], h = a[1];
                        if (!n(o, e, t) || !n(h, e, t))return;
                        var u = this.getCartesian(o.componentIndex, h.componentIndex), c = r.getData(), f = u.getAxis("x"), d = u.getAxis("y");
                        "list" === c.type && (i(c, f, r), i(c, d, r))
                    }
                }, this)
            };
            var y = ["xAxis", "yAxis"];
            a.create = function (t, e) {
                var i = [];
                return t.eachComponent("grid", function (n, r) {
                    var o = new a(n, t, e);
                    o.name = "grid_" + r, o.resize(n, e), n.coordinateSystem = o, i.push(o)
                }), t.eachSeries(function (e) {
                    if (l(e)) {
                        var i = s(e, t), n = i[0], r = i[1], a = n.findGridModel(), o = a.coordinateSystem;
                        e.coordinateSystem = o.getCartesian(n.componentIndex, r.componentIndex)
                    }
                }), i
            }, a.dimensions = f.prototype.dimensions, i(23).register("cartesian2d", a), t.exports = a
        }, function (t, e) {
            t.exports = function (t, e) {
                e.eachSeriesByType(t, function (t) {
                    var e = t.getData(), i = t.coordinateSystem;
                    if (i) {
                        var n = i.dimensions;
                        "singleAxis" === i.type ? e.each(n[0], function (t, n) {
                            e.setItemLayout(n, isNaN(t) ? [NaN, NaN] : i.dataToPoint(t))
                        }) : e.each(n, function (t, n, r) {
                            e.setItemLayout(r, isNaN(t) || isNaN(n) ? [NaN, NaN] : i.dataToPoint([t, n]))
                        }, !0)
                    }
                })
            }
        }, function (t, e) {
            t.exports = {
                clearColorPalette: function () {
                    this._colorIdx = 0, this._colorNameMap = {}
                }, getColorFromPalette: function (t, e) {
                    e = e || this;
                    var i = e._colorIdx || 0, n = e._colorNameMap || (e._colorNameMap = {});
                    if (n[t])return n[t];
                    var r = this.get("color", !0) || [];
                    if (r.length) {
                        var a = r[i];
                        return t && (n[t] = a), e._colorIdx = (i + 1) % r.length, a
                    }
                }
            }
        }, function (t, e, i) {
            var n = i(34), r = i(43), a = i(21), o = function () {
                this.group = new n, this.uid = r.getUID("viewComponent")
            };
            o.prototype = {
                constructor: o, init: function (t, e) {
                }, render: function (t, e, i, n) {
                }, dispose: function () {
                }
            };
            var s = o.prototype;
            s.updateView = s.updateLayout = s.updateVisual = function (t, e, i, n) {
            }, a.enableClassExtend(o), a.enableClassManagement(o, {registerWhenExtend: !0}), t.exports = o
        }, function (t, e, i) {
            "use strict";
            var n = i(62), r = i(20), a = i(88), o = i(166), s = i(1), l = function (t) {
                a.call(this, t), r.call(this, t), o.call(this, t), this.id = t.id || n()
            };
            l.prototype = {
                type: "element", name: "", __zr: null, ignore: !1, clipPath: null, drift: function (t, e) {
                    switch (this.draggable) {
                        case"horizontal":
                            e = 0;
                            break;
                        case"vertical":
                            t = 0
                    }
                    var i = this.transform;
                    i || (i = this.transform = [1, 0, 0, 1, 0, 0]), i[4] += t, i[5] += e, this.decomposeTransform(), this.dirty(!1)
                }, beforeUpdate: function () {
                }, afterUpdate: function () {
                }, update: function () {
                    this.updateTransform()
                }, traverse: function (t, e) {
                }, attrKV: function (t, e) {
                    if ("position" === t || "scale" === t || "origin" === t) {
                        if (e) {
                            var i = this[t];
                            i || (i = this[t] = []), i[0] = e[0], i[1] = e[1]
                        }
                    } else this[t] = e
                }, hide: function () {
                    this.ignore = !0, this.__zr && this.__zr.refresh()
                }, show: function () {
                    this.ignore = !1, this.__zr && this.__zr.refresh()
                }, attr: function (t, e) {
                    if ("string" == typeof t)this.attrKV(t, e); else if (s.isObject(t))for (var i in t)t.hasOwnProperty(i) && this.attrKV(i, t[i]);
                    return this.dirty(!1), this
                }, setClipPath: function (t) {
                    var e = this.__zr;
                    e && t.addSelfToZr(e), this.clipPath && this.clipPath !== t && this.removeClipPath(), this.clipPath = t, t.__zr = e, t.__clipTarget = this, this.dirty(!1)
                }, removeClipPath: function () {
                    var t = this.clipPath;
                    t && (t.__zr && t.removeSelfFromZr(t.__zr), t.__zr = null, t.__clipTarget = null, this.clipPath = null, this.dirty(!1))
                }, addSelfToZr: function (t) {
                    this.__zr = t;
                    var e = this.animators;
                    if (e)for (var i = 0; i < e.length; i++)t.animation.addAnimator(e[i]);
                    this.clipPath && this.clipPath.addSelfToZr(t)
                }, removeSelfFromZr: function (t) {
                    this.__zr = null;
                    var e = this.animators;
                    if (e)for (var i = 0; i < e.length; i++)t.animation.removeAnimator(e[i]);
                    this.clipPath && this.clipPath.removeSelfFromZr(t)
                }
            }, s.mixin(l, o), s.mixin(l, a), s.mixin(l, r), t.exports = l
        }, function (t, e, i) {
            function n(t, e) {
                return t[e]
            }

            function r(t, e, i) {
                t[e] = i
            }

            function a(t, e, i) {
                return (e - t) * i + t
            }

            function o(t, e, i) {
                return i > .5 ? e : t
            }

            function s(t, e, i, n, r) {
                var o = t.length;
                if (1 == r)for (var s = 0; s < o; s++)n[s] = a(t[s], e[s], i); else for (var l = t[0].length, s = 0; s < o; s++)for (var h = 0; h < l; h++)n[s][h] = a(t[s][h], e[s][h], i)
            }

            function l(t, e, i) {
                var n = t.length, r = e.length;
                if (n !== r) {
                    var a = n > r;
                    if (a)t.length = r; else for (var o = n; o < r; o++)t.push(1 === i ? e[o] : x.call(e[o]))
                }
                for (var s = t[0] && t[0].length, o = 0; o < t.length; o++)if (1 === i)isNaN(t[o]) && (t[o] = e[o]); else for (var l = 0; l < s; l++)isNaN(t[o][l]) && (t[o][l] = e[o][l])
            }

            function h(t, e, i) {
                if (t === e)return !0;
                var n = t.length;
                if (n !== e.length)return !1;
                if (1 === i) {
                    for (var r = 0; r < n; r++)if (t[r] !== e[r])return !1
                } else for (var a = t[0].length, r = 0; r < n; r++)for (var o = 0; o < a; o++)if (t[r][o] !== e[r][o])return !1;
                return !0
            }

            function u(t, e, i, n, r, a, o, s, l) {
                var h = t.length;
                if (1 == l)for (var u = 0; u < h; u++)s[u] = c(t[u], e[u], i[u], n[u], r, a, o); else for (var f = t[0].length, u = 0; u < h; u++)for (var d = 0; d < f; d++)s[u][d] = c(t[u][d], e[u][d], i[u][d], n[u][d], r, a, o)
            }

            function c(t, e, i, n, r, a, o) {
                var s = .5 * (i - t), l = .5 * (n - e);
                return (2 * (e - i) + s + l) * o + (-3 * (e - i) - 2 * s - l) * a + s * r + e
            }

            function f(t) {
                if (y(t)) {
                    var e = t.length;
                    if (y(t[0])) {
                        for (var i = [], n = 0; n < e; n++)i.push(x.call(t[n]));
                        return i
                    }
                    return x.call(t)
                }
                return t
            }

            function d(t) {
                return t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.floor(t[2]), "rgba(" + t.join(",") + ")"
            }

            function p(t, e, i, n, r) {
                var f = t._getter, p = t._setter, m = "spline" === e, x = n.length;
                if (x) {
                    var _, b = n[0].value, w = y(b), M = !1, T = !1, S = w && y(b[0]) ? 2 : 1;
                    n.sort(function (t, e) {
                        return t.time - e.time
                    }), _ = n[x - 1].time;
                    for (var A = [], I = [], C = n[0].value, L = !0, k = 0; k < x; k++) {
                        A.push(n[k].time / _);
                        var P = n[k].value;
                        if (w && h(P, C, S) || !w && P === C || (L = !1), C = P, "string" == typeof P) {
                            var D = v.parse(P);
                            D ? (P = D, M = !0) : T = !0
                        }
                        I.push(P)
                    }
                    if (!L) {
                        for (var O = I[x - 1], k = 0; k < x - 1; k++)w ? l(I[k], O, S) : !isNaN(I[k]) || isNaN(O) || T || M || (I[k] = O);
                        w && l(f(t._target, r), O, S);
                        var E, z, R, B, N, F, G = 0, V = 0;
                        if (M)var q = [0, 0, 0, 0];
                        var H = function (t, e) {
                            var i;
                            if (e < 0)i = 0; else if (e < V) {
                                for (E = Math.min(G + 1, x - 1), i = E; i >= 0 && !(A[i] <= e); i--);
                                i = Math.min(i, x - 2)
                            } else {
                                for (i = G; i < x && !(A[i] > e); i++);
                                i = Math.min(i - 1, x - 2)
                            }
                            G = i, V = e;
                            var n = A[i + 1] - A[i];
                            if (0 !== n)if (z = (e - A[i]) / n, m)if (B = I[i], R = I[0 === i ? i : i - 1], N = I[i > x - 2 ? x - 1 : i + 1], F = I[i > x - 3 ? x - 1 : i + 2], w)u(R, B, N, F, z, z * z, z * z * z, f(t, r), S); else {
                                var l;
                                if (M)l = u(R, B, N, F, z, z * z, z * z * z, q, 1), l = d(q); else {
                                    if (T)return o(B, N, z);
                                    l = c(R, B, N, F, z, z * z, z * z * z)
                                }
                                p(t, r, l)
                            } else if (w)s(I[i], I[i + 1], z, f(t, r), S); else {
                                var l;
                                if (M)s(I[i], I[i + 1], z, q, 1), l = d(q); else {
                                    if (T)return o(I[i], I[i + 1], z);
                                    l = a(I[i], I[i + 1], z)
                                }
                                p(t, r, l)
                            }
                        }, W = new g({
                            target: t._target,
                            life: _,
                            loop: t._loop,
                            delay: t._delay,
                            onframe: H,
                            ondestroy: i
                        });
                        return e && "spline" !== e && (W.easing = e), W
                    }
                }
            }

            var g = i(144), v = i(18), m = i(1), y = m.isArrayLike, x = Array.prototype.slice, _ = function (t, e, i, a) {
                this._tracks = {}, this._target = t, this._loop = e || !1, this._getter = i || n, this._setter = a || r, this._clipCount = 0, this._delay = 0, this._doneList = [], this._onframeList = [], this._clipList = []
            };
            _.prototype = {
                when: function (t, e) {
                    var i = this._tracks;
                    for (var n in e)if (e.hasOwnProperty(n)) {
                        if (!i[n]) {
                            i[n] = [];
                            var r = this._getter(this._target, n);
                            if (null == r)continue;
                            0 !== t && i[n].push({time: 0, value: f(r)})
                        }
                        i[n].push({time: t, value: e[n]})
                    }
                    return this
                }, during: function (t) {
                    return this._onframeList.push(t), this
                }, _doneCallback: function () {
                    this._tracks = {}, this._clipList.length = 0;
                    for (var t = this._doneList, e = t.length, i = 0; i < e; i++)t[i].call(this)
                }, start: function (t) {
                    var e, i = this, n = 0, r = function () {
                        n--, n || i._doneCallback()
                    };
                    for (var a in this._tracks)if (this._tracks.hasOwnProperty(a)) {
                        var o = p(this, t, r, this._tracks[a], a);
                        o && (this._clipList.push(o), n++, this.animation && this.animation.addClip(o), e = o)
                    }
                    if (e) {
                        var s = e.onframe;
                        e.onframe = function (t, e) {
                            s(t, e);
                            for (var n = 0; n < i._onframeList.length; n++)i._onframeList[n](t, e)
                        }
                    }
                    return n || this._doneCallback(), this
                }, stop: function (t) {
                    for (var e = this._clipList, i = this.animation, n = 0; n < e.length; n++) {
                        var r = e[n];
                        t && r.onframe(this._target, 1), i && i.removeClip(r)
                    }
                    e.length = 0
                }, delay: function (t) {
                    return this._delay = t, this
                }, done: function (t) {
                    return t && this._doneList.push(t), this
                }, getClips: function () {
                    return this._clipList
                }
            }, t.exports = _
        }, function (t, e) {
            t.exports = "undefined" != typeof window && (window.requestAnimationFrame || window.msRequestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function (t) {
                    setTimeout(t, 16)
                }
        }, function (t, e) {
            var i = 2 * Math.PI;
            t.exports = {
                normalizeRadian: function (t) {
                    return t %= i, t < 0 && (t += i), t
                }
            }
        }, function (t, e) {
            var i = 2311;
            t.exports = function () {
                return i++
            }
        }, function (t, e) {
            var i = function (t, e) {
                this.image = t, this.repeat = e, this.type = "pattern"
            };
            i.prototype.getCanvasPattern = function (t) {
                return this._canvasPattern || (this._canvasPattern = t.createPattern(this.image, this.repeat))
            }, t.exports = i
        }, function (t, e) {
            function i(t, e, i) {
                var n = e.x, r = e.x2, a = e.y, o = e.y2;
                e.global || (n = n * i.width + i.x, r = r * i.width + i.x, a = a * i.height + i.y, o = o * i.height + i.y);
                var s = t.createLinearGradient(n, a, r, o);
                return s
            }

            function n(t, e, i) {
                var n = i.width, r = i.height, a = Math.min(n, r), o = e.x, s = e.y, l = e.r;
                e.global || (o = o * n + i.x, s = s * r + i.y, l *= a);
                var h = t.createRadialGradient(o, s, 0, o, s, l);
                return h
            }

            var r = [["shadowBlur", 0], ["shadowOffsetX", 0], ["shadowOffsetY", 0], ["shadowColor", "#000"], ["lineCap", "butt"], ["lineJoin", "miter"], ["miterLimit", 10]], a = function (t) {
                this.extendFrom(t)
            };
            a.prototype = {
                constructor: a,
                fill: "#000000",
                stroke: null,
                opacity: 1,
                lineDash: null,
                lineDashOffset: 0,
                shadowBlur: 0,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                lineWidth: 1,
                strokeNoScale: !1,
                text: null,
                textFill: "#000",
                textStroke: null,
                textPosition: "inside",
                textBaseline: null,
                textAlign: null,
                textVerticalAlign: null,
                textDistance: 5,
                textShadowBlur: 0,
                textShadowOffsetX: 0,
                textShadowOffsetY: 0,
                textTransform: !1,
                textRotation: 0,
                blend: null,
                bind: function (t, e, i) {
                    for (var n = this, a = i && i.style, o = !a, s = 0; s < r.length; s++) {
                        var l = r[s], h = l[0];
                        (o || n[h] !== a[h]) && (t[h] = n[h] || l[1])
                    }
                    if ((o || n.fill !== a.fill) && (t.fillStyle = n.fill), (o || n.stroke !== a.stroke) && (t.strokeStyle = n.stroke), (o || n.opacity !== a.opacity) && (t.globalAlpha = null == n.opacity ? 1 : n.opacity), (o || n.blend !== a.blend) && (t.globalCompositeOperation = n.blend || "source-over"), this.hasStroke()) {
                        var u = n.lineWidth;
                        t.lineWidth = u / (this.strokeNoScale && e && e.getLineScale ? e.getLineScale() : 1)
                    }
                },
                hasFill: function () {
                    var t = this.fill;
                    return null != t && "none" !== t
                },
                hasStroke: function () {
                    var t = this.stroke;
                    return null != t && "none" !== t && this.lineWidth > 0
                },
                extendFrom: function (t, e) {
                    if (t) {
                        var i = this;
                        for (var n in t)!t.hasOwnProperty(n) || !e && i.hasOwnProperty(n) || (i[n] = t[n])
                    }
                },
                set: function (t, e) {
                    "string" == typeof t ? this[t] = e : this.extendFrom(t, !0)
                },
                clone: function () {
                    var t = new this.constructor;
                    return t.extendFrom(this, !0), t
                },
                getGradient: function (t, e, r) {
                    for (var a = "radial" === e.type ? n : i, o = a(t, e, r), s = e.colorStops, l = 0; l < s.length; l++)o.addColorStop(s[l].offset, s[l].color);
                    return o
                }
            };
            for (var o = a.prototype, s = 0; s < r.length; s++) {
                var l = r[s];
                l[0] in o || (o[l[0]] = l[1])
            }
            a.getGradient = o.getGradient, t.exports = a
        }, function (t, e, i) {
            var n = i(156), r = i(155);
            t.exports = {
                buildPath: function (t, e, i) {
                    var a = e.points, o = e.smooth;
                    if (a && a.length >= 2) {
                        if (o && "spline" !== o) {
                            var s = r(a, o, i, e.smoothConstraint);
                            t.moveTo(a[0][0], a[0][1]);
                            for (var l = a.length, h = 0; h < (i ? l : l - 1); h++) {
                                var u = s[2 * h], c = s[2 * h + 1], f = a[(h + 1) % l];
                                t.bezierCurveTo(u[0], u[1], c[0], c[1], f[0], f[1])
                            }
                        } else {
                            "spline" === o && (a = n(a, i)), t.moveTo(a[0][0], a[0][1]);
                            for (var h = 1, d = a.length; h < d; h++)t.lineTo(a[h][0], a[h][1])
                        }
                        i && t.closePath()
                    }
                }
            }
        }, function (t, e, i) {
            var n = i(1);
            t.exports = {
                updateSelectedMap: function (t) {
                    this._selectTargetMap = n.reduce(t || [], function (t, e) {
                        return t[e.name] = e, t
                    }, {})
                }, select: function (t) {
                    var e = this._selectTargetMap, i = e[t], r = this.get("selectedMode");
                    "single" === r && n.each(e, function (t) {
                        t.selected = !1
                    }), i && (i.selected = !0)
                }, unSelect: function (t) {
                    var e = this._selectTargetMap[t];
                    e && (e.selected = !1)
                }, toggleSelected: function (t) {
                    var e = this._selectTargetMap[t];
                    if (null != e)return this[e.selected ? "unSelect" : "select"](t), e.selected
                }, isSelected: function (t) {
                    var e = this._selectTargetMap[t];
                    return e && e.selected
                }
            }
        }, , , , function (t, e) {
            t.exports = function (t, e) {
                var i = e.findComponents({mainType: "legend"});
                i && i.length && e.eachSeriesByType(t, function (t) {
                    var e = t.getData();
                    e.filterSelf(function (t) {
                        for (var n = e.getName(t), r = 0; r < i.length; r++)if (!i[r].isSelected(n))return !1;
                        return !0
                    }, this)
                }, this)
            }
        }, , function (t, e) {
            t.exports = function (t, e) {
                var i = {};
                e.eachRawSeriesByType(t, function (t) {
                    var n = t.getRawData(), r = {};
                    if (!e.isSeriesFiltered(t)) {
                        var a = t.getData();
                        a.each(function (t) {
                            var e = a.getRawIndex(t);
                            r[e] = t
                        }), n.each(function (e) {
                            var o = n.getItemModel(e), s = r[e], l = null != s && a.getItemVisual(s, "color", !0);
                            if (l)n.setItemVisual(e, "color", l); else {
                                var h = o.get("itemStyle.normal.color") || t.getColorFromPalette(n.getName(e), i);
                                n.setItemVisual(e, "color", h), null != s && a.setItemVisual(s, "color", h)
                            }
                        })
                    }
                })
            }
        }, function (t, e, i) {
            var n = i(5), r = i(17), a = {}, o = Math.min, s = Math.max, l = Math.sin, h = Math.cos, u = n.create(), c = n.create(), f = n.create(), d = 2 * Math.PI;
            a.fromPoints = function (t, e, i) {
                if (0 !== t.length) {
                    var n, r = t[0], a = r[0], l = r[0], h = r[1], u = r[1];
                    for (n = 1; n < t.length; n++)r = t[n], a = o(a, r[0]), l = s(l, r[0]), h = o(h, r[1]), u = s(u, r[1]);
                    e[0] = a, e[1] = h, i[0] = l, i[1] = u
                }
            }, a.fromLine = function (t, e, i, n, r, a) {
                r[0] = o(t, i), r[1] = o(e, n), a[0] = s(t, i), a[1] = s(e, n)
            };
            var p = [], g = [];
            a.fromCubic = function (t, e, i, n, a, l, h, u, c, f) {
                var d, v = r.cubicExtrema, m = r.cubicAt, y = v(t, i, a, h, p);
                for (c[0] = 1 / 0, c[1] = 1 / 0, f[0] = -(1 / 0), f[1] = -(1 / 0), d = 0; d < y; d++) {
                    var x = m(t, i, a, h, p[d]);
                    c[0] = o(x, c[0]), f[0] = s(x, f[0])
                }
                for (y = v(e, n, l, u, g), d = 0; d < y; d++) {
                    var _ = m(e, n, l, u, g[d]);
                    c[1] = o(_, c[1]), f[1] = s(_, f[1])
                }
                c[0] = o(t, c[0]), f[0] = s(t, f[0]), c[0] = o(h, c[0]), f[0] = s(h, f[0]), c[1] = o(e, c[1]), f[1] = s(e, f[1]), c[1] = o(u, c[1]), f[1] = s(u, f[1])
            }, a.fromQuadratic = function (t, e, i, n, a, l, h, u) {
                var c = r.quadraticExtremum, f = r.quadraticAt, d = s(o(c(t, i, a), 1), 0), p = s(o(c(e, n, l), 1), 0), g = f(t, i, a, d), v = f(e, n, l, p);
                h[0] = o(t, a, g), h[1] = o(e, l, v), u[0] = s(t, a, g), u[1] = s(e, l, v)
            }, a.fromArc = function (t, e, i, r, a, o, s, p, g) {
                var v = n.min, m = n.max, y = Math.abs(a - o);
                if (y % d < 1e-4 && y > 1e-4)return p[0] = t - i, p[1] = e - r, g[0] = t + i, void(g[1] = e + r);
                if (u[0] = h(a) * i + t, u[1] = l(a) * r + e, c[0] = h(o) * i + t, c[1] = l(o) * r + e, v(p, u, c), m(g, u, c), a %= d, a < 0 && (a += d), o %= d, o < 0 && (o += d), a > o && !s ? o += d : a < o && s && (a += d), s) {
                    var x = o;
                    o = a, a = x
                }
                for (var _ = 0; _ < o; _ += Math.PI / 2)_ > a && (f[0] = h(_) * i + t, f[1] = l(_) * r + e, v(p, f, p), m(g, f, g))
            }, t.exports = a
        }, function (t, e, i) {
            var n = i(37), r = i(1), a = i(16), o = function (t) {
                n.call(this, t)
            };
            o.prototype = {
                constructor: o, type: "text", brush: function (t, e) {
                    var i = this.style, n = i.x || 0, r = i.y || 0, o = i.text;
                    if (null != o && (o += ""), i.bind(t, this, e), o) {
                        this.setTransform(t);
                        var s, l = i.textAlign, h = i.textFont || i.font;
                        if (i.textVerticalAlign) {
                            var u = a.getBoundingRect(o, h, i.textAlign, "top");
                            switch (s = "middle", i.textVerticalAlign) {
                                case"middle":
                                    r -= u.height / 2 - u.lineHeight / 2;
                                    break;
                                case"bottom":
                                    r -= u.height - u.lineHeight / 2;
                                    break;
                                default:
                                    r += u.lineHeight / 2
                            }
                        } else s = i.textBaseline;
                        t.font = h || "12px sans-serif", t.textAlign = l || "left", t.textAlign !== l && (t.textAlign = "left"), t.textBaseline = s || "alphabetic", t.textBaseline !== s && (t.textBaseline = "alphabetic");
                        for (var c = a.measureText("???", t.font).width, f = o.split("\n"), d = 0; d < f.length; d++)i.hasFill() && t.fillText(f[d], n, r), i.hasStroke() && t.strokeText(f[d], n, r), r += c;
                        this.restoreTransform(t)
                    }
                }, getBoundingRect: function () {
                    if (!this._rect) {
                        var t = this.style, e = t.textVerticalAlign, i = a.getBoundingRect(t.text + "", t.textFont || t.font, t.textAlign, e ? "top" : t.textBaseline);
                        switch (e) {
                            case"middle":
                                i.y -= i.height / 2;
                                break;
                            case"bottom":
                                i.y -= i.height
                        }
                        i.x += t.x || 0, i.y += t.y || 0, this._rect = i
                    }
                    return this._rect
                }
            }, r.inherits(o, n), t.exports = o
        }, function (t, e, i) {
            function n(t, e) {
                return "string" == typeof t ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t
            }

            var r = i(16), a = i(8), o = new a, s = function () {
            };
            s.prototype = {
                constructor: s, drawRectText: function (t, e, i) {
                    var a = this.style, s = a.text;
                    if (null != s && (s += ""), s) {
                        t.save();
                        var l, h, u = a.textPosition, c = a.textDistance, f = a.textAlign, d = a.textFont || a.font, p = a.textBaseline, g = a.textVerticalAlign;
                        i = i || r.getBoundingRect(s, d, f, p);
                        var v = this.transform;
                        if (a.textTransform ? this.setTransform(t) : v && (o.copy(e), o.applyTransform(v), e = o), u instanceof Array) {
                            if (l = e.x + n(u[0], e.width), h = e.y + n(u[1], e.height), f = f || "left", p = p || "top", g) {
                                switch (g) {
                                    case"middle":
                                        h -= i.height / 2 - i.lineHeight / 2;
                                        break;
                                    case"bottom":
                                        h -= i.height - i.lineHeight / 2;
                                        break;
                                    default:
                                        h += i.lineHeight / 2
                                }
                                p = "middle"
                            }
                        } else {
                            var m = r.adjustTextPositionOnRect(u, e, i, c);
                            l = m.x, h = m.y, f = f || m.textAlign, p = p || m.textBaseline
                        }
                        t.textAlign = f || "left", t.textBaseline = p || "alphabetic";
                        var y = a.textFill, x = a.textStroke;
                        y && (t.fillStyle = y), x && (t.strokeStyle = x), t.font = d || "12px sans-serif", t.shadowBlur = a.textShadowBlur, t.shadowColor = a.textShadowColor || "transparent", t.shadowOffsetX = a.textShadowOffsetX, t.shadowOffsetY = a.textShadowOffsetY;
                        var _ = s.split("\n");
                        a.textRotation && (v && t.translate(v[4], v[5]), t.rotate(a.textRotation), v && t.translate(-v[4], -v[5]));
                        for (var b = 0; b < _.length; b++)y && t.fillText(_[b], l, h), x && t.strokeText(_[b], l, h), h += i.lineHeight;
                        t.restore()
                    }
                }
            }, t.exports = s
        }, function (t, e, i) {
            function n(t) {
                delete f[t]
            }

            /*!
             * ZRender, a high performance 2d drawing library.
             *
             * Copyright (c) 2013, Baidu Inc.
             * All rights reserved.
             *
             * LICENSE
             * https://github.com/ecomfe/zrender/blob/master/LICENSE.txt
             */
            var r = i(62), a = i(11), o = i(139), s = i(142), l = i(143), h = i(151), u = !a.canvasSupported, c = {canvas: i(141)}, f = {}, d = {};
            d.version = "3.2.1", d.init = function (t, e) {
                var i = new p(r(), t, e);
                return f[i.id] = i, i
            }, d.dispose = function (t) {
                if (t)t.dispose(); else {
                    for (var e in f)f.hasOwnProperty(e) && f[e].dispose();
                    f = {}
                }
                return d
            }, d.getInstance = function (t) {
                return f[t]
            }, d.registerPainter = function (t, e) {
                c[t] = e
            };
            var p = function (t, e, i) {
                i = i || {}, this.dom = e, this.id = t;
                var n = this, r = new s, f = i.renderer;
                if (u) {
                    if (!c.vml)throw new Error("You need to require 'zrender/vml/vml' to support IE8");
                    f = "vml"
                } else f && c[f] || (f = "canvas");
                var d = new c[f](e, r, i);
                this.storage = r, this.painter = d;
                var p = a.node ? null : new h(d.getViewportRoot());
                this.handler = new o(r, d, p, d.root), this.animation = new l({
                    stage: {
                        update: function () {
                            n._needsRefresh && n.refreshImmediately(), n._needsRefreshHover && n.refreshHoverImmediately()
                        }
                    }
                }), this.animation.start(), this._needsRefresh;
                var g = r.delFromMap, v = r.addToMap;
                r.delFromMap = function (t) {
                    var e = r.get(t);
                    g.call(r, t), e && e.removeSelfFromZr(n)
                }, r.addToMap = function (t) {
                    v.call(r, t), t.addSelfToZr(n)
                }
            };
            p.prototype = {
                constructor: p, getId: function () {
                    return this.id
                }, add: function (t) {
                    this.storage.addRoot(t), this._needsRefresh = !0
                }, remove: function (t) {
                    this.storage.delRoot(t), this._needsRefresh = !0
                }, configLayer: function (t, e) {
                    this.painter.configLayer(t, e), this._needsRefresh = !0
                }, refreshImmediately: function () {
                    this._needsRefresh = !1, this.painter.refresh(), this._needsRefresh = !1
                }, refresh: function () {
                    this._needsRefresh = !0
                }, addHover: function (t, e) {
                    this.painter.addHover && (this.painter.addHover(t, e), this.refreshHover())
                }, removeHover: function (t) {
                    this.painter.removeHover && (this.painter.removeHover(t), this.refreshHover())
                }, clearHover: function () {
                    this.painter.clearHover && (this.painter.clearHover(), this.refreshHover())
                }, refreshHover: function () {
                    this._needsRefreshHover = !0
                }, refreshHoverImmediately: function () {
                    this._needsRefreshHover = !1, this.painter.refreshHover && this.painter.refreshHover()
                }, resize: function (t) {
                    t = t || {}, this.painter.resize(t.width, t.height), this.handler.resize()
                }, clearAnimation: function () {
                    this.animation.clear()
                }, getWidth: function () {
                    return this.painter.getWidth()
                }, getHeight: function () {
                    return this.painter.getHeight()
                }, pathToImage: function (t, e, i) {
                    var n = r();
                    return this.painter.pathToImage(n, t, e, i)
                }, setCursorStyle: function (t) {
                    this.handler.setCursorStyle(t)
                }, on: function (t, e, i) {
                    this.handler.on(t, e, i)
                }, off: function (t, e) {
                    this.handler.off(t, e)
                }, trigger: function (t, e) {
                    this.handler.trigger(t, e)
                }, clear: function () {
                    this.storage.delRoot(), this.painter.clear()
                }, dispose: function () {
                    this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null, n(this.id)
                }
            }, t.exports = d
        }, function (t, e, i) {
            var n = i(2), r = i(1);
            t.exports = function (t, e) {
                r.each(e, function (e) {
                    e.update = "updateView", n.registerAction(e, function (i, n) {
                        var r = {};
                        return n.eachComponent({mainType: "series", subType: t, query: i}, function (t) {
                            t[e.method] && t[e.method](i.name);
                            var n = t.getData();
                            n.each(function (e) {
                                var i = n.getName(e);
                                r[i] = t.isSelected(i) || !1
                            })
                        }), {name: i.name, selected: r}
                    })
                })
            }
        }, , , , function (t, e, i) {
            var n = i(1), r = {
                show: !0,
                zlevel: 0,
                z: 0,
                inverse: !1,
                name: "",
                nameLocation: "end",
                nameRotate: null,
                nameTruncate: {maxWidth: null, ellipsis: "...", placeholder: "."},
                nameTextStyle: {},
                nameGap: 15,
                silent: !1,
                triggerEvent: !1,
                tooltip: {show: !1},
                axisLine: {show: !0, onZero: !0, lineStyle: {color: "#333", width: 1, type: "solid"}},
                axisTick: {show: !0, inside: !1, length: 5, lineStyle: {width: 1}},
                axisLabel: {show: !0, inside: !1, rotate: 0, margin: 8, textStyle: {fontSize: 12}},
                splitLine: {show: !0, lineStyle: {color: ["#ccc"], width: 1, type: "solid"}},
                splitArea: {show: !1, areaStyle: {color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"]}}
            }, a = n.merge({
                boundaryGap: !0,
                splitLine: {show: !1},
                axisTick: {alignWithLabel: !1, interval: "auto"},
                axisLabel: {interval: "auto"}
            }, r), o = n.merge({boundaryGap: [0, 0], splitNumber: 5}, r), s = n.defaults({
                scale: !0,
                min: "dataMin",
                max: "dataMax"
            }, o), l = n.defaults({logBase: 10}, o);
            l.scale = !0, t.exports = {categoryAxis: a, valueAxis: o, timeAxis: s, logAxis: l}
        }, function (t, e) {
            t.exports = {
                getMin: function () {
                    var t = this.option, e = null != t.rangeStart ? t.rangeStart : t.min;
                    return e instanceof Date && (e = +e), e
                }, getMax: function () {
                    var t = this.option, e = null != t.rangeEnd ? t.rangeEnd : t.max;
                    return e instanceof Date && (e = +e), e
                }, getNeedCrossZero: function () {
                    var t = this.option;
                    return null == t.rangeStart && null == t.rangeEnd && !t.scale
                }, setRange: function (t, e) {
                    this.option.rangeStart = t, this.option.rangeEnd = e
                }, resetRange: function () {
                    this.option.rangeStart = this.option.rangeEnd = null
                }
            }
        }, , function (t, e) {
            t.exports = {
                containStroke: function (t, e, i, n, r, a, o) {
                    if (0 === r)return !1;
                    var s = r, l = 0, h = t;
                    if (o > e + s && o > n + s || o < e - s && o < n - s || a > t + s && a > i + s || a < t - s && a < i - s)return !1;
                    if (t === i)return Math.abs(a - t) <= s / 2;
                    l = (e - n) / (t - i), h = (t * n - i * e) / (t - i);
                    var u = l * a - o + h, c = u * u / (l * l + 1);
                    return c <= s / 2 * s / 2
                }
            }
        }, function (t, e, i) {
            var n = i(17);
            t.exports = {
                containStroke: function (t, e, i, r, a, o, s, l, h) {
                    if (0 === s)return !1;
                    var u = s;
                    if (h > e + u && h > r + u && h > o + u || h < e - u && h < r - u && h < o - u || l > t + u && l > i + u && l > a + u || l < t - u && l < i - u && l < a - u)return !1;
                    var c = n.quadraticProjectPoint(t, e, i, r, a, o, l, h, null);
                    return c <= u / 2
                }
            }
        }, function (t, e) {
            t.exports = function (t, e, i, n, r, a) {
                if (a > e && a > n || a < e && a < n)return 0;
                if (n === e)return 0;
                var o = n < e ? 1 : -1, s = (a - e) / (n - e);
                1 !== s && 0 !== s || (o = n < e ? .5 : -.5);
                var l = s * (i - t) + t;
                return l > r ? o : 0
            }
        }, function (t, e, i) {
            "use strict";
            var n = i(1), r = i(29), a = function (t, e, i, n, a, o) {
                this.x = null == t ? 0 : t, this.y = null == e ? 0 : e, this.x2 = null == i ? 1 : i, this.y2 = null == n ? 0 : n, this.type = "linear", this.global = o || !1, r.call(this, a)
            };
            a.prototype = {constructor: a}, n.inherits(a, r), t.exports = a
        }, function (t, e, i) {
            "use strict";
            function n(t) {
                return t > s || t < -s
            }

            var r = i(19), a = i(5), o = r.identity, s = 5e-5, l = function (t) {
                t = t || {}, t.position || (this.position = [0, 0]), null == t.rotation && (this.rotation = 0), t.scale || (this.scale = [1, 1]), this.origin = this.origin || null
            }, h = l.prototype;
            h.transform = null, h.needLocalTransform = function () {
                return n(this.rotation) || n(this.position[0]) || n(this.position[1]) || n(this.scale[0] - 1) || n(this.scale[1] - 1)
            }, h.updateTransform = function () {
                var t = this.parent, e = t && t.transform, i = this.needLocalTransform(), n = this.transform;
                return i || e ? (n = n || r.create(), i ? this.getLocalTransform(n) : o(n), e && (i ? r.mul(n, t.transform, n) : r.copy(n, t.transform)), this.transform = n, this.invTransform = this.invTransform || r.create(), void r.invert(this.invTransform, n)) : void(n && o(n))
            }, h.getLocalTransform = function (t) {
                t = t || [], o(t);
                var e = this.origin, i = this.scale, n = this.rotation, a = this.position;
                return e && (t[4] -= e[0], t[5] -= e[1]), r.scale(t, t, i), n && r.rotate(t, t, n), e && (t[4] += e[0], t[5] += e[1]), t[4] += a[0], t[5] += a[1], t
            }, h.setTransform = function (t) {
                var e = this.transform, i = t.dpr || 1;
                e ? t.setTransform(i * e[0], i * e[1], i * e[2], i * e[3], i * e[4], i * e[5]) : t.setTransform(i, 0, 0, i, 0, 0)
            }, h.restoreTransform = function (t) {
                var e = (this.transform, t.dpr || 1);
                t.setTransform(e, 0, 0, e, 0, 0)
            };
            var u = [];
            h.decomposeTransform = function () {
                if (this.transform) {
                    var t = this.parent, e = this.transform;
                    t && t.transform && (r.mul(u, t.invTransform, e), e = u);
                    var i = e[0] * e[0] + e[1] * e[1], a = e[2] * e[2] + e[3] * e[3], o = this.position, s = this.scale;
                    n(i - 1) && (i = Math.sqrt(i)), n(a - 1) && (a = Math.sqrt(a)), e[0] < 0 && (i = -i), e[3] < 0 && (a = -a), o[0] = e[4], o[1] = e[5], s[0] = i, s[1] = a, this.rotation = Math.atan2(-e[1] / a, e[0] / i)
                }
            }, h.getGlobalScale = function () {
                var t = this.transform;
                if (!t)return [1, 1];
                var e = Math.sqrt(t[0] * t[0] + t[1] * t[1]), i = Math.sqrt(t[2] * t[2] + t[3] * t[3]);
                return t[0] < 0 && (e = -e), t[3] < 0 && (i = -i), [e, i]
            }, h.transformCoordToLocal = function (t, e) {
                var i = [t, e], n = this.invTransform;
                return n && a.applyTransform(i, i, n), i
            }, h.transformCoordToGlobal = function (t, e) {
                var i = [t, e], n = this.transform;
                return n && a.applyTransform(i, i, n), i
            }, t.exports = l
        }, function (t, e, i) {
            "use strict";
            function n(t) {
                r.each(a, function (e) {
                    this[e] = r.bind(t[e], t)
                }, this)
            }

            var r = i(1), a = ["getDom", "getZr", "getWidth", "getHeight", "dispatchAction", "isDisposed", "on", "off", "getDataURL", "getConnectedDataURL", "getModel", "getOption"];
            t.exports = n
        }, function (t, e, i) {
            var n = i(1);
            i(54), i(91), i(92);
            var r = i(122), a = i(2);
            a.registerLayout(n.curry(r, "bar")), a.registerVisual(function (t) {
                t.eachSeriesByType("bar", function (t) {
                    var e = t.getData();
                    e.setVisual("legendSymbol", "roundRect")
                })
            }), i(36)
        }, function (t, e, i) {
            "use strict";
            var n = i(15), r = i(35);
            t.exports = n.extend({
                type: "series.bar",
                dependencies: ["grid", "polar"],
                getInitialData: function (t, e) {
                    return r(t.data, this, e)
                },
                getMarkerPosition: function (t) {
                    var e = this.coordinateSystem;
                    if (e) {
                        var i = e.dataToPoint(t, !0), n = this.getData(), r = n.getLayout("offset"), a = n.getLayout("size"), o = e.getBaseAxis().isHorizontal() ? 0 : 1;
                        return i[o] += r + a / 2, i
                    }
                    return [NaN, NaN]
                },
                brushSelector: "rect",
                defaultOption: {
                    zlevel: 0,
                    z: 2,
                    coordinateSystem: "cartesian2d",
                    legendHoverLink: !0,
                    barMinHeight: 0,
                    itemStyle: {normal: {}, emphasis: {}}
                }
            })
        }, function (t, e, i) {
            "use strict";
            function n(t, e) {
                var i = t.width > 0 ? 1 : -1, n = t.height > 0 ? 1 : -1;
                e = Math.min(e, Math.abs(t.width), Math.abs(t.height)), t.x += i * e / 2, t.y += n * e / 2, t.width -= i * e, t.height -= n * e
            }

            var r = i(1), a = i(3);
            r.extend(i(10).prototype, i(93)), t.exports = i(2).extendChartView({
                type: "bar", render: function (t, e, i) {
                    var n = t.get("coordinateSystem");
                    return "cartesian2d" === n && this._renderOnCartesian(t, e, i), this.group
                }, dispose: r.noop, _renderOnCartesian: function (t, e, i) {
                    function o(e, i) {
                        var o = l.getItemLayout(e), s = l.getItemModel(e).get(p) || 0;
                        n(o, s);
                        var h = new a.Rect({shape: r.extend({}, o)});
                        if (d) {
                            var u = h.shape, c = f ? "height" : "width", g = {};
                            u[c] = 0, g[c] = o[c], a[i ? "updateProps" : "initProps"](h, {shape: g}, t, e)
                        }
                        return h
                    }

                    var s = this.group, l = t.getData(), h = this._data, u = t.coordinateSystem, c = u.getBaseAxis(), f = c.isHorizontal(), d = t.get("animation"), p = ["itemStyle", "normal", "barBorderWidth"];
                    l.diff(h).add(function (t) {
                        if (l.hasValue(t)) {
                            var e = o(t);
                            l.setItemGraphicEl(t, e), s.add(e)
                        }
                    }).update(function (e, i) {
                        var r = h.getItemGraphicEl(i);
                        if (!l.hasValue(e))return void s.remove(r);
                        r || (r = o(e, !0));
                        var u = l.getItemLayout(e), c = l.getItemModel(e).get(p) || 0;
                        n(u, c), a.updateProps(r, {shape: u}, t, e), l.setItemGraphicEl(e, r), s.add(r)
                    }).remove(function (e) {
                        var i = h.getItemGraphicEl(e);
                        i && (i.style.text = "", a.updateProps(i, {shape: {width: 0}}, t, e, function () {
                            s.remove(i)
                        }))
                    }).execute(), this._updateStyle(t, l, f), this._data = l
                }, _updateStyle: function (t, e, i) {
                    function n(t, e, i, n, r) {
                        a.setText(t, e, i), t.text = n, "outside" === t.textPosition && (t.textPosition = r)
                    }

                    e.eachItemGraphicEl(function (o, s) {
                        var l = e.getItemModel(s), h = e.getItemVisual(s, "color"), u = e.getItemVisual(s, "opacity"), c = e.getItemLayout(s), f = l.getModel("itemStyle.normal"), d = l.getModel("itemStyle.emphasis").getBarItemStyle();
                        o.setShape("r", f.get("barBorderRadius") || 0), o.useStyle(r.defaults({
                            fill: h,
                            opacity: u
                        }, f.getBarItemStyle()));
                        var p = i ? c.height > 0 ? "bottom" : "top" : c.width > 0 ? "left" : "right", g = l.getModel("label.normal"), v = l.getModel("label.emphasis"), m = o.style;
                        g.get("show") ? n(m, g, h, r.retrieve(t.getFormattedLabel(s, "normal"), t.getRawValue(s)), p) : m.text = "", v.get("show") ? n(d, v, h, r.retrieve(t.getFormattedLabel(s, "emphasis"), t.getRawValue(s)), p) : d.text = "", a.setHoverStyle(o, d)
                    })
                }, remove: function (t, e) {
                    var i = this.group;
                    t.get("animation") ? this._data && this._data.eachItemGraphicEl(function (e) {
                        e.style.text = "", a.updateProps(e, {shape: {width: 0}}, t, e.dataIndex, function () {
                            i.remove(e)
                        })
                    }) : i.removeAll()
                }
            })
        }, function (t, e, i) {
            var n = i(31)([["fill", "color"], ["stroke", "borderColor"], ["lineWidth", "borderWidth"], ["stroke", "barBorderColor"], ["lineWidth", "barBorderWidth"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"]]);
            t.exports = {
                getBarItemStyle: function (t) {
                    var e = n.call(this, t);
                    if (this.getBorderLineDash) {
                        var i = this.getBorderLineDash();
                        i && (e.lineDash = i)
                    }
                    return e
                }
            }
        }, , , function (t, e, i) {
            var n = i(1), r = i(2), a = r.PRIORITY;
            i(97), i(98), r.registerVisual(n.curry(i(46), "line", "circle", "line")), r.registerLayout(n.curry(i(55), "line")), r.registerProcessor(a.PROCESSOR.STATISTIC, n.curry(i(134), "line")), i(36)
        }, function (t, e, i) {
            "use strict";
            var n = i(35), r = i(15);
            t.exports = r.extend({
                type: "series.line",
                dependencies: ["grid", "polar"],
                getInitialData: function (t, e) {
                    return n(t.data, this, e)
                },
                defaultOption: {
                    zlevel: 0,
                    z: 2,
                    coordinateSystem: "cartesian2d",
                    legendHoverLink: !0,
                    hoverAnimation: !0,
                    clipOverflow: !0,
                    label: {normal: {position: "top"}},
                    lineStyle: {normal: {width: 2, type: "solid"}},
                    step: !1,
                    smooth: !1,
                    smoothMonotone: null,
                    symbol: "emptyCircle",
                    symbolSize: 4,
                    symbolRotate: null,
                    showSymbol: !0,
                    showAllSymbol: !1,
                    connectNulls: !1,
                    sampling: "none",
                    animationEasing: "linear",
                    progressive: 0,
                    hoverLayerThreshold: 1 / 0
                }
            })
        }, function (t, e, i) {
            "use strict";
            function n(t, e) {
                if (t.length === e.length) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i], r = e[i];
                        if (n[0] !== r[0] || n[1] !== r[1])return
                    }
                    return !0
                }
            }

            function r(t) {
                return "number" == typeof t ? t : t ? .3 : 0
            }

            function a(t) {
                var e = t.getGlobalExtent();
                if (t.onBand) {
                    var i = t.getBandWidth() / 2 - 1, n = e[1] > e[0] ? 1 : -1;
                    e[0] += n * i, e[1] -= n * i
                }
                return e
            }

            function o(t) {
                return t >= 0 ? 1 : -1
            }

            function s(t, e) {
                var i = t.getBaseAxis(), n = t.getOtherAxis(i), r = i.onZero ? 0 : n.scale.getExtent()[0], a = n.dim, s = "x" === a || "radius" === a ? 1 : 0;
                return e.mapArray([a], function (n, l) {
                    for (var h, u = e.stackedOn; u && o(u.get(a, l)) === o(n);) {
                        h = u;
                        break
                    }
                    var c = [];
                    return c[s] = e.get(i.dim, l), c[1 - s] = h ? h.get(a, l, !0) : r, t.dataToPoint(c)
                }, !0)
            }

            function l(t, e, i) {
                var n = a(t.getAxis("x")), r = a(t.getAxis("y")), o = t.getBaseAxis().isHorizontal(), s = Math.min(n[0], n[1]), l = Math.min(r[0], r[1]), h = Math.max(n[0], n[1]) - s, u = Math.max(r[0], r[1]) - l, c = i.get("lineStyle.normal.width") || 2, f = i.get("clipOverflow") ? c / 2 : Math.max(h, u);
                o ? (l -= f, u += 2 * f) : (s -= f, h += 2 * f);
                var d = new y.Rect({shape: {x: s, y: l, width: h, height: u}});
                return e && (d.shape[o ? "width" : "height"] = 0, y.initProps(d, {shape: {width: h, height: u}}, i)), d
            }

            function h(t, e, i) {
                var n = t.getAngleAxis(), r = t.getRadiusAxis(), a = r.getExtent(), o = n.getExtent(), s = Math.PI / 180, l = new y.Sector({
                    shape: {
                        cx: t.cx,
                        cy: t.cy,
                        r0: a[0],
                        r: a[1],
                        startAngle: -o[0] * s,
                        endAngle: -o[1] * s,
                        clockwise: n.inverse
                    }
                });
                return e && (l.shape.endAngle = -o[0] * s, y.initProps(l, {shape: {endAngle: -o[1] * s}}, i)), l
            }

            function u(t, e, i) {
                return "polar" === t.type ? h(t, e, i) : l(t, e, i)
            }

            function c(t, e, i) {
                for (var n = e.getBaseAxis(), r = "x" === n.dim || "radius" === n.dim ? 0 : 1, a = [], o = 0; o < t.length - 1; o++) {
                    var s = t[o + 1], l = t[o];
                    a.push(l);
                    var h = [];
                    switch (i) {
                        case"end":
                            h[r] = s[r], h[1 - r] = l[1 - r], a.push(h);
                            break;
                        case"middle":
                            var u = (l[r] + s[r]) / 2, c = [];
                            h[r] = c[r] = u, h[1 - r] = l[1 - r], c[1 - r] = s[1 - r], a.push(h), a.push(c);
                            break;
                        default:
                            h[r] = l[r], h[1 - r] = s[1 - r], a.push(h)
                    }
                }
                return t[o] && a.push(t[o]), a
            }

            function f(t, e) {
                return Math.max(Math.min(t, e[1]), e[0])
            }

            function d(t, e) {
                var i = t.getVisual("visualMeta");
                if (i && i.length && t.count()) {
                    for (var n, r = i.length - 1; r >= 0; r--)if (i[r].dimension < 2) {
                        n = i[r];
                        break
                    }
                    if (n && "cartesian2d" === e.type) {
                        var a = n.dimension, o = t.dimensions[a], s = t.getDataExtent(o), l = n.stops, h = [];
                        l[0].interval && l.sort(function (t, e) {
                            return t.interval[0] - e.interval[0]
                        });
                        var u = l[0], c = l[l.length - 1], d = u.interval ? f(u.interval[0], s) : u.value, p = c.interval ? f(c.interval[1], s) : c.value, g = p - d;
                        if (0 === g)return t.getItemVisual(0, "color");
                        for (var r = 0; r < l.length; r++)if (l[r].interval) {
                            if (l[r].interval[1] === l[r].interval[0])continue;
                            h.push({
                                offset: (f(l[r].interval[0], s) - d) / g,
                                color: l[r].color
                            }, {offset: (f(l[r].interval[1], s) - d) / g, color: l[r].color})
                        } else h.push({offset: (l[r].value - d) / g, color: l[r].color});
                        var v = new y.LinearGradient(0, 0, 0, 0, h, (!0)), m = e.getAxis(o), x = m.toGlobalCoord(m.dataToCoord(d)), _ = m.toGlobalCoord(m.dataToCoord(p));
                        return v[o] = x, v[o + "2"] = _, v
                    }
                }
            }

            var p = i(1), g = i(39), v = i(49), m = i(99), y = i(3), x = i(7), _ = i(100), b = i(27);
            t.exports = b.extend({
                type: "line", init: function () {
                    var t = new y.Group, e = new g;
                    this.group.add(e.group), this._symbolDraw = e, this._lineGroup = t
                }, render: function (t, e, i) {
                    var a = t.coordinateSystem, o = this.group, l = t.getData(), h = t.getModel("lineStyle.normal"), f = t.getModel("areaStyle.normal"), g = l.mapArray(l.getItemLayout, !0), v = "polar" === a.type, m = this._coordSys, y = this._symbolDraw, x = this._polyline, _ = this._polygon, b = this._lineGroup, w = t.get("animation"), M = !f.isEmpty(), T = s(a, l), S = t.get("showSymbol"), A = S && !v && !t.get("showAllSymbol") && this._getSymbolIgnoreFunc(l, a), I = this._data;
                    I && I.eachItemGraphicEl(function (t, e) {
                        t.__temp && (o.remove(t), I.setItemGraphicEl(e, null))
                    }), S || y.remove(), o.add(b);
                    var C = !v && t.get("step");
                    x && m.type === a.type && C === this._step ? (M && !_ ? _ = this._newPolygon(g, T, a, w) : _ && !M && (b.remove(_), _ = this._polygon = null), b.setClipPath(u(a, !1, t)), S && y.updateData(l, A), l.eachItemGraphicEl(function (t) {
                        t.stopAnimation(!0)
                    }), n(this._stackedOnPoints, T) && n(this._points, g) || (w ? this._updateAnimation(l, T, a, i, C) : (C && (g = c(g, a, C), T = c(T, a, C)), x.setShape({points: g}), _ && _.setShape({
                        points: g,
                        stackedOnPoints: T
                    })))) : (S && y.updateData(l, A), C && (g = c(g, a, C), T = c(T, a, C)), x = this._newPolyline(g, a, w), M && (_ = this._newPolygon(g, T, a, w)), b.setClipPath(u(a, !0, t)));
                    var L = d(l, a) || l.getVisual("color");
                    x.useStyle(p.defaults(h.getLineStyle(), {fill: "none", stroke: L, lineJoin: "bevel"}));
                    var k = t.get("smooth");
                    if (k = r(t.get("smooth")), x.setShape({
                            smooth: k,
                            smoothMonotone: t.get("smoothMonotone"),
                            connectNulls: t.get("connectNulls")
                        }), _) {
                        var P = l.stackedOn, D = 0;
                        if (_.useStyle(p.defaults(f.getAreaStyle(), {fill: L, opacity: .7, lineJoin: "bevel"})), P) {
                            var O = P.hostModel;
                            D = r(O.get("smooth"))
                        }
                        _.setShape({
                            smooth: k,
                            stackedOnSmooth: D,
                            smoothMonotone: t.get("smoothMonotone"),
                            connectNulls: t.get("connectNulls")
                        })
                    }
                    this._data = l, this._coordSys = a, this._stackedOnPoints = T, this._points = g, this._step = C
                }, dispose: function () {
                }, highlight: function (t, e, i, n) {
                    var r = t.getData(), a = x.queryDataIndex(r, n);
                    if (!(a instanceof Array) && null != a && a >= 0) {
                        var o = r.getItemGraphicEl(a);
                        if (!o) {
                            var s = r.getItemLayout(a);
                            o = new v(r, a), o.position = s, o.setZ(t.get("zlevel"), t.get("z")), o.ignore = isNaN(s[0]) || isNaN(s[1]), o.__temp = !0, r.setItemGraphicEl(a, o), o.stopSymbolAnimation(!0), this.group.add(o)
                        }
                        o.highlight()
                    } else b.prototype.highlight.call(this, t, e, i, n)
                }, downplay: function (t, e, i, n) {
                    var r = t.getData(), a = x.queryDataIndex(r, n);
                    if (null != a && a >= 0) {
                        var o = r.getItemGraphicEl(a);
                        o && (o.__temp ? (r.setItemGraphicEl(a, null), this.group.remove(o)) : o.downplay())
                    } else b.prototype.downplay.call(this, t, e, i, n)
                }, _newPolyline: function (t) {
                    var e = this._polyline;
                    return e && this._lineGroup.remove(e), e = new _.Polyline({
                        shape: {points: t},
                        silent: !0,
                        z2: 10
                    }), this._lineGroup.add(e), this._polyline = e, e
                }, _newPolygon: function (t, e) {
                    var i = this._polygon;
                    return i && this._lineGroup.remove(i), i = new _.Polygon({
                        shape: {points: t, stackedOnPoints: e},
                        silent: !0
                    }), this._lineGroup.add(i), this._polygon = i, i
                }, _getSymbolIgnoreFunc: function (t, e) {
                    var i = e.getAxesByScale("ordinal")[0];
                    if (i && i.isLabelIgnored)return p.bind(i.isLabelIgnored, i)
                }, _updateAnimation: function (t, e, i, n, r) {
                    var a = this._polyline, o = this._polygon, s = t.hostModel, l = m(this._data, t, this._stackedOnPoints, e, this._coordSys, i), h = l.current, u = l.stackedOnCurrent, f = l.next, d = l.stackedOnNext;
                    r && (h = c(l.current, i, r), u = c(l.stackedOnCurrent, i, r), f = c(l.next, i, r), d = c(l.stackedOnNext, i, r)), a.shape.__points = l.current, a.shape.points = h, y.updateProps(a, {shape: {points: f}}, s), o && (o.setShape({
                        points: h,
                        stackedOnPoints: u
                    }), y.updateProps(o, {shape: {points: f, stackedOnPoints: d}}, s));
                    for (var p = [], g = l.status, v = 0; v < g.length; v++) {
                        var x = g[v].cmd;
                        if ("=" === x) {
                            var _ = t.getItemGraphicEl(g[v].idx1);
                            _ && p.push({el: _, ptIdx: v})
                        }
                    }
                    a.animators && a.animators.length && a.animators[0].during(function () {
                        for (var t = 0; t < p.length; t++) {
                            var e = p[t].el;
                            e.attr("position", a.shape.__points[p[t].ptIdx])
                        }
                    })
                }, remove: function (t) {
                    var e = this.group, i = this._data;
                    this._lineGroup.removeAll(), this._symbolDraw.remove(!0), i && i.eachItemGraphicEl(function (t, n) {
                        t.__temp && (e.remove(t), i.setItemGraphicEl(n, null))
                    }), this._polyline = this._polygon = this._coordSys = this._points = this._stackedOnPoints = this._data = null
                }
            })
        }, function (t, e) {
            function i(t) {
                return t >= 0 ? 1 : -1
            }

            function n(t, e, n) {
                for (var r, a = t.getBaseAxis(), o = t.getOtherAxis(a), s = a.onZero ? 0 : o.scale.getExtent()[0], l = o.dim, h = "x" === l || "radius" === l ? 1 : 0, u = e.stackedOn, c = e.get(l, n); u && i(u.get(l, n)) === i(c);) {
                    r = u;
                    break
                }
                var f = [];
                return f[h] = e.get(a.dim, n), f[1 - h] = r ? r.get(l, n, !0) : s, t.dataToPoint(f)
            }

            function r(t, e) {
                var i = [];
                return e.diff(t).add(function (t) {
                    i.push({cmd: "+", idx: t})
                }).update(function (t, e) {
                    i.push({cmd: "=", idx: e, idx1: t})
                }).remove(function (t) {
                    i.push({cmd: "-", idx: t})
                }).execute(), i
            }

            t.exports = function (t, e, i, a, o, s) {
                for (var l = r(t, e), h = [], u = [], c = [], f = [], d = [], p = [], g = [], v = s.dimensions, m = 0; m < l.length; m++) {
                    var y = l[m], x = !0;
                    switch (y.cmd) {
                        case"=":
                            var _ = t.getItemLayout(y.idx), b = e.getItemLayout(y.idx1);
                            (isNaN(_[0]) || isNaN(_[1])) && (_ = b.slice()), h.push(_), u.push(b), c.push(i[y.idx]), f.push(a[y.idx1]), g.push(e.getRawIndex(y.idx1));
                            break;
                        case"+":
                            var w = y.idx;
                            h.push(o.dataToPoint([e.get(v[0], w, !0), e.get(v[1], w, !0)])), u.push(e.getItemLayout(w).slice()), c.push(n(o, e, w)), f.push(a[w]), g.push(e.getRawIndex(w));
                            break;
                        case"-":
                            var w = y.idx, M = t.getRawIndex(w);
                            M !== w ? (h.push(t.getItemLayout(w)), u.push(s.dataToPoint([t.get(v[0], w, !0), t.get(v[1], w, !0)])), c.push(i[w]), f.push(n(s, t, w)), g.push(M)) : x = !1
                    }
                    x && (d.push(y), p.push(p.length))
                }
                p.sort(function (t, e) {
                    return g[t] - g[e]
                });
                for (var T = [], S = [], A = [], I = [], C = [], m = 0; m < p.length; m++) {
                    var w = p[m];
                    T[m] = h[w], S[m] = u[w], A[m] = c[w], I[m] = f[w], C[m] = d[w]
                }
                return {current: T, next: S, stackedOnCurrent: A, stackedOnNext: I, status: C}
            }
        }, function (t, e, i) {
            function n(t) {
                return isNaN(t[0]) || isNaN(t[1])
            }

            function r(t, e, i, r, a, o, g, v, m, y, x) {
                for (var _ = 0, b = i, w = 0; w < r; w++) {
                    var M = e[b];
                    if (b >= a || b < 0)break;
                    if (n(M)) {
                        if (x) {
                            b += o;
                            continue
                        }
                        break
                    }
                    if (b === i)t[o > 0 ? "moveTo" : "lineTo"](M[0], M[1]), c(d, M); else if (m > 0) {
                        var T = b + o, S = e[T];
                        if (x)for (; S && n(e[T]);)T += o, S = e[T];
                        var A = .5, I = e[_], S = e[T];
                        if (!S || n(S))c(p, M); else {
                            n(S) && !x && (S = M), s.sub(f, S, I);
                            var C, L;
                            if ("x" === y || "y" === y) {
                                var k = "x" === y ? 0 : 1;
                                C = Math.abs(M[k] - I[k]), L = Math.abs(M[k] - S[k])
                            } else C = s.dist(M, I), L = s.dist(M, S);
                            A = L / (L + C), u(p, M, f, -m * (1 - A))
                        }
                        l(d, d, v), h(d, d, g), l(p, p, v), h(p, p, g), t.bezierCurveTo(d[0], d[1], p[0], p[1], M[0], M[1]), u(d, M, f, m * A)
                    } else t.lineTo(M[0], M[1]);
                    _ = b, b += o
                }
                return w
            }

            function a(t, e) {
                var i = [1 / 0, 1 / 0], n = [-(1 / 0), -(1 / 0)];
                if (e)for (var r = 0; r < t.length; r++) {
                    var a = t[r];
                    a[0] < i[0] && (i[0] = a[0]), a[1] < i[1] && (i[1] = a[1]), a[0] > n[0] && (n[0] = a[0]), a[1] > n[1] && (n[1] = a[1])
                }
                return {min: e ? i : n, max: e ? n : i}
            }

            var o = i(6), s = i(5), l = s.min, h = s.max, u = s.scaleAndAdd, c = s.copy, f = [], d = [], p = [];
            t.exports = {
                Polyline: o.extend({
                    type: "ec-polyline",
                    shape: {points: [], smooth: 0, smoothConstraint: !0, smoothMonotone: null, connectNulls: !1},
                    style: {fill: null, stroke: "#000"},
                    buildPath: function (t, e) {
                        var i = e.points, o = 0, s = i.length, l = a(i, e.smoothConstraint);
                        if (e.connectNulls) {
                            for (; s > 0 && n(i[s - 1]); s--);
                            for (; o < s && n(i[o]); o++);
                        }
                        for (; o < s;)o += r(t, i, o, s, s, 1, l.min, l.max, e.smooth, e.smoothMonotone, e.connectNulls) + 1
                    }
                }),
                Polygon: o.extend({
                    type: "ec-polygon",
                    shape: {
                        points: [],
                        stackedOnPoints: [],
                        smooth: 0,
                        stackedOnSmooth: 0,
                        smoothConstraint: !0,
                        smoothMonotone: null,
                        connectNulls: !1
                    },
                    buildPath: function (t, e) {
                        var i = e.points, o = e.stackedOnPoints, s = 0, l = i.length, h = e.smoothMonotone, u = a(i, e.smoothConstraint), c = a(o, e.smoothConstraint);
                        if (e.connectNulls) {
                            for (; l > 0 && n(i[l - 1]); l--);
                            for (; s < l && n(i[s]); s++);
                        }
                        for (; s < l;) {
                            var f = r(t, i, s, l, l, 1, u.min, u.max, e.smooth, h, e.connectNulls);
                            r(t, o, s + f - 1, f, l, -1, c.min, c.max, e.stackedOnSmooth, h, e.connectNulls), s += f + 1, t.closePath()
                        }
                    }
                })
            }
        }, function (t, e, i) {
            var n = i(1), r = i(2);
            i(102), i(103), i(77)("pie", [{
                type: "pieToggleSelect",
                event: "pieselectchanged",
                method: "toggleSelected"
            }, {type: "pieSelect", event: "pieselected", method: "select"}, {
                type: "pieUnSelect",
                event: "pieunselected",
                method: "unSelect"
            }]), r.registerVisual(n.curry(i(72), "pie")), r.registerLayout(n.curry(i(105), "pie")), r.registerProcessor(n.curry(i(70), "pie"))
        }, function (t, e, i) {
            "use strict";
            var n = i(14), r = i(1), a = i(7), o = i(30), s = i(66), l = i(2).extendSeriesModel({
                type: "series.pie",
                init: function (t) {
                    l.superApply(this, "init", arguments), this.legendDataProvider = function () {
                        return this._dataBeforeProcessed
                    }, this.updateSelectedMap(t.data), this._defaultLabelLine(t)
                },
                mergeOption: function (t) {
                    l.superCall(this, "mergeOption", t), this.updateSelectedMap(this.option.data)
                },
                getInitialData: function (t, e) {
                    var i = o(["value"], t.data), r = new n(i, this);
                    return r.initData(t.data), r
                },
                getDataParams: function (t) {
                    var e = this._data, i = l.superCall(this, "getDataParams", t), n = e.getSum("value");
                    return i.percent = n ? +(e.get("value", t) / n * 100).toFixed(2) : 0, i.$vars.push("percent"), i
                },
                _defaultLabelLine: function (t) {
                    a.defaultEmphasis(t.labelLine, ["show"]);
                    var e = t.labelLine.normal, i = t.labelLine.emphasis;
                    e.show = e.show && t.label.normal.show, i.show = i.show && t.label.emphasis.show
                },
                defaultOption: {
                    zlevel: 0,
                    z: 2,
                    legendHoverLink: !0,
                    hoverAnimation: !0,
                    center: ["50%", "50%"],
                    radius: [0, "75%"],
                    clockwise: !0,
                    startAngle: 90,
                    minAngle: 0,
                    selectedOffset: 10,
                    avoidLabelOverlap: !0,
                    label: {normal: {rotate: !1, show: !0, position: "outer"}, emphasis: {}},
                    labelLine: {
                        normal: {
                            show: !0,
                            length: 15,
                            length2: 15,
                            smooth: !1,
                            lineStyle: {width: 1, type: "solid"}
                        }
                    },
                    itemStyle: {normal: {borderWidth: 1}, emphasis: {}},
                    animationEasing: "cubicOut",
                    data: []
                }
            });
            r.mixin(l, s), t.exports = l
        }, function (t, e, i) {
            function n(t, e, i, n) {
                var a = e.getData(), o = this.dataIndex, s = a.getName(o), l = e.get("selectedOffset");
                n.dispatchAction({type: "pieToggleSelect", from: t, name: s, seriesId: e.id}), a.each(function (t) {
                    r(a.getItemGraphicEl(t), a.getItemLayout(t), e.isSelected(a.getName(t)), l, i)
                })
            }

            function r(t, e, i, n, r) {
                var a = (e.startAngle + e.endAngle) / 2, o = Math.cos(a), s = Math.sin(a), l = i ? n : 0, h = [o * l, s * l];
                r ? t.animate().when(200, {position: h}).start("bounceOut") : t.attr("position", h)
            }

            function a(t, e) {
                function i() {
                    a.ignore = a.hoverIgnore, o.ignore = o.hoverIgnore
                }

                function n() {
                    a.ignore = a.normalIgnore, o.ignore = o.normalIgnore
                }

                s.Group.call(this);
                var r = new s.Sector({z2: 2}), a = new s.Polyline, o = new s.Text;
                this.add(r), this.add(a), this.add(o), this.updateData(t, e, !0), this.on("emphasis", i).on("normal", n).on("mouseover", i).on("mouseout", n)
            }

            function o(t, e, i, n, r) {
                var a = n.getModel("textStyle"), o = "inside" === r || "inner" === r;
                return {
                    fill: a.getTextColor() || (o ? "#fff" : t.getItemVisual(e, "color")),
                    opacity: t.getItemVisual(e, "opacity"),
                    textFont: a.getFont(),
                    text: l.retrieve(t.hostModel.getFormattedLabel(e, i), t.getName(e))
                }
            }

            var s = i(3), l = i(1), h = a.prototype;
            h.updateData = function (t, e, i) {
                function n() {
                    o.stopAnimation(!0), o.animateTo({shape: {r: c.r + 10}}, 300, "elasticOut")
                }

                function a() {
                    o.stopAnimation(!0), o.animateTo({shape: {r: c.r}}, 300, "elasticOut")
                }

                var o = this.childAt(0), h = t.hostModel, u = t.getItemModel(e), c = t.getItemLayout(e), f = l.extend({}, c);
                f.label = null, i ? (o.setShape(f), o.shape.endAngle = c.startAngle, s.updateProps(o, {shape: {endAngle: c.endAngle}}, h, e)) : s.updateProps(o, {shape: f}, h, e);
                var d = u.getModel("itemStyle"), p = t.getItemVisual(e, "color");
                o.useStyle(l.defaults({
                    lineJoin: "bevel",
                    fill: p
                }, d.getModel("normal").getItemStyle())), o.hoverStyle = d.getModel("emphasis").getItemStyle(), r(this, t.getItemLayout(e), u.get("selected"), h.get("selectedOffset"), h.get("animation")), o.off("mouseover").off("mouseout").off("emphasis").off("normal"), u.get("hoverAnimation") && h.ifEnableAnimation() && o.on("mouseover", n).on("mouseout", a).on("emphasis", n).on("normal", a), this._updateLabel(t, e), s.setHoverStyle(this)
            }, h._updateLabel = function (t, e) {
                var i = this.childAt(1), n = this.childAt(2), r = t.hostModel, a = t.getItemModel(e), l = t.getItemLayout(e), h = l.label, u = t.getItemVisual(e, "color");
                s.updateProps(i, {shape: {points: h.linePoints || [[h.x, h.y], [h.x, h.y], [h.x, h.y]]}}, r, e), s.updateProps(n, {
                    style: {
                        x: h.x,
                        y: h.y
                    }
                }, r, e), n.attr({
                    style: {textVerticalAlign: h.verticalAlign, textAlign: h.textAlign, textFont: h.font},
                    rotation: h.rotation,
                    origin: [h.x, h.y],
                    z2: 10
                });
                var c = a.getModel("label.normal"), f = a.getModel("label.emphasis"), d = a.getModel("labelLine.normal"), p = a.getModel("labelLine.emphasis"), g = c.get("position") || f.get("position");
                n.setStyle(o(t, e, "normal", c, g)), n.ignore = n.normalIgnore = !c.get("show"), n.hoverIgnore = !f.get("show"), i.ignore = i.normalIgnore = !d.get("show"), i.hoverIgnore = !p.get("show"), i.setStyle({
                    stroke: u,
                    opacity: t.getItemVisual(e, "opacity")
                }), i.setStyle(d.getModel("lineStyle").getLineStyle()), n.hoverStyle = o(t, e, "emphasis", f, g), i.hoverStyle = p.getModel("lineStyle").getLineStyle();
                var v = d.get("smooth");
                v && v === !0 && (v = .4), i.setShape({smooth: v})
            }, l.inherits(a, s.Group);
            var u = i(27).extend({
                type: "pie", init: function () {
                    var t = new s.Group;
                    this._sectorGroup = t
                }, render: function (t, e, i, r) {
                    if (!r || r.from !== this.uid) {
                        var o = t.getData(), s = this._data, h = this.group, u = e.get("animation"), c = !s, f = l.curry(n, this.uid, t, u, i), d = t.get("selectedMode");
                        if (o.diff(s).add(function (t) {
                                var e = new a(o, t);
                                c && e.eachChild(function (t) {
                                    t.stopAnimation(!0)
                                }), d && e.on("click", f), o.setItemGraphicEl(t, e), h.add(e)
                            }).update(function (t, e) {
                                var i = s.getItemGraphicEl(e);
                                i.updateData(o, t), i.off("click"), d && i.on("click", f), h.add(i), o.setItemGraphicEl(t, i)
                            }).remove(function (t) {
                                var e = s.getItemGraphicEl(t);
                                h.remove(e)
                            }).execute(), u && c && o.count() > 0) {
                            var p = o.getItemLayout(0), g = Math.max(i.getWidth(), i.getHeight()) / 2, v = l.bind(h.removeClipPath, h);
                            h.setClipPath(this._createClipPath(p.cx, p.cy, g, p.startAngle, p.clockwise, v, t))
                        }
                        this._data = o
                    }
                }, dispose: function () {
                }, _createClipPath: function (t, e, i, n, r, a, o) {
                    var l = new s.Sector({shape: {cx: t, cy: e, r0: 0, r: i, startAngle: n, endAngle: n, clockwise: r}});
                    return s.initProps(l, {shape: {endAngle: n + (r ? 1 : -1) * Math.PI * 2}}, o, a), l
                }, containPoint: function (t, e) {
                    var i = e.getData(), n = i.getItemLayout(0);
                    if (n) {
                        var r = t[0] - n.cx, a = t[1] - n.cy, o = Math.sqrt(r * r + a * a);
                        return o <= n.r && o >= n.r0
                    }
                }
            });
            t.exports = u
        }, function (t, e, i) {
            "use strict";
            function n(t, e, i, n, r, a, o) {
                function s(e, i, n, r) {
                    for (var a = e; a < i; a++)if (t[a].y += n, a > e && a + 1 < i && t[a + 1].y > t[a].y + t[a].height)return void l(a, n / 2);
                    l(i - 1, n / 2)
                }

                function l(e, i) {
                    for (var n = e; n >= 0 && (t[n].y -= i, !(n > 0 && t[n].y > t[n - 1].y + t[n - 1].height)); n--);
                }

                function h(t, e, i, n, r, a) {
                    for (var o = a > 0 ? e ? Number.MAX_VALUE : 0 : e ? Number.MAX_VALUE : 0, s = 0, l = t.length; s < l; s++)if ("center" !== t[s].position) {
                        var h = Math.abs(t[s].y - n), u = t[s].len, c = t[s].len2, f = h < r + u ? Math.sqrt((r + u + c) * (r + u + c) - h * h) : Math.abs(t[s].x - i);
                        e && f >= o && (f = o - 10), !e && f <= o && (f = o + 10), t[s].x = i + f * a, o = f
                    }
                }

                t.sort(function (t, e) {
                    return t.y - e.y
                });
                for (var u, c = 0, f = t.length, d = [], p = [], g = 0; g < f; g++)u = t[g].y - c, u < 0 && s(g, f, -u, r), c = t[g].y + t[g].height;
                o - c < 0 && l(f - 1, c - o);
                for (var g = 0; g < f; g++)t[g].y >= i ? p.push(t[g]) : d.push(t[g]);
                h(d, !1, e, i, n, r), h(p, !0, e, i, n, r)
            }

            function r(t, e, i, r, a, o) {
                for (var s = [], l = [], h = 0; h < t.length; h++)t[h].x < e ? s.push(t[h]) : l.push(t[h]);
                n(l, e, i, r, 1, a, o), n(s, e, i, r, -1, a, o);
                for (var h = 0; h < t.length; h++) {
                    var u = t[h].linePoints;
                    if (u) {
                        var c = u[1][0] - u[2][0];
                        t[h].x < e ? u[2][0] = t[h].x + 3 : u[2][0] = t[h].x - 3, u[1][1] = u[2][1] = t[h].y, u[1][0] = u[2][0] + c
                    }
                }
            }

            var a = i(16);
            t.exports = function (t, e, i, n) {
                var o, s, l = t.getData(), h = [], u = !1;
                l.each(function (i) {
                    var n, r, c, f, d = l.getItemLayout(i), p = l.getItemModel(i), g = p.getModel("label.normal"), v = g.get("position") || p.get("label.emphasis.position"), m = p.getModel("labelLine.normal"), y = m.get("length"), x = m.get("length2"), _ = (d.startAngle + d.endAngle) / 2, b = Math.cos(_), w = Math.sin(_);
                    o = d.cx, s = d.cy;
                    var M = "inside" === v || "inner" === v;
                    if ("center" === v)n = d.cx, r = d.cy, f = "center"; else {
                        var T = (M ? (d.r + d.r0) / 2 * b : d.r * b) + o, S = (M ? (d.r + d.r0) / 2 * w : d.r * w) + s;
                        if (n = T + 3 * b, r = S + 3 * w, !M) {
                            var A = T + b * (y + e - d.r), I = S + w * (y + e - d.r), C = A + (b < 0 ? -1 : 1) * x, L = I;
                            n = C + (b < 0 ? -5 : 5), r = L, c = [[T, S], [A, I], [C, L]]
                        }
                        f = M ? "center" : b > 0 ? "left" : "right"
                    }
                    var k = g.getModel("textStyle").getFont(), P = g.get("rotate") ? b < 0 ? -_ + Math.PI : -_ : 0, D = t.getFormattedLabel(i, "normal") || l.getName(i), O = a.getBoundingRect(D, k, f, "top");
                    u = !!P, d.label = {
                        x: n,
                        y: r,
                        position: v,
                        height: O.height,
                        len: y,
                        len2: x,
                        linePoints: c,
                        textAlign: f,
                        verticalAlign: "middle",
                        font: k,
                        rotation: P
                    }, M || h.push(d.label)
                }), !u && t.get("avoidLabelOverlap") && r(h, o, s, e, i, n)
            }
        }, function (t, e, i) {
            var n = i(4), r = n.parsePercent, a = i(104), o = i(1), s = 2 * Math.PI, l = Math.PI / 180;
            t.exports = function (t, e, i, h) {
                e.eachSeriesByType(t, function (t) {
                    var e = t.get("center"), h = t.get("radius");
                    o.isArray(h) || (h = [0, h]), o.isArray(e) || (e = [e, e]);
                    var u = i.getWidth(), c = i.getHeight(), f = Math.min(u, c), d = r(e[0], u), p = r(e[1], c), g = r(h[0], f / 2), v = r(h[1], f / 2), m = t.getData(), y = -t.get("startAngle") * l, x = t.get("minAngle") * l, _ = m.getSum("value"), b = Math.PI / (_ || m.count()) * 2, w = t.get("clockwise"), M = t.get("roseType"), T = m.getDataExtent("value");
                    T[0] = 0;
                    var S = s, A = 0, I = y, C = w ? 1 : -1;
                    if (m.each("value", function (t, e) {
                            var i;
                            i = "area" !== M ? 0 === _ ? b : t * b : s / (m.count() || 1), i < x ? (i = x, S -= x) : A += t;
                            var r = I + C * i;
                            m.setItemLayout(e, {
                                angle: i,
                                startAngle: I,
                                endAngle: r,
                                clockwise: w,
                                cx: d,
                                cy: p,
                                r0: g,
                                r: M ? n.linearMap(t, T, [g, v]) : v
                            }), I = r
                        }, !0), S < s)if (S <= .001) {
                        var L = s / m.count();
                        m.each(function (t) {
                            var e = m.getItemLayout(t);
                            e.startAngle = y + C * t * L, e.endAngle = y + C * (t + 1) * L
                        })
                    } else b = S / A, I = y, m.each("value", function (t, e) {
                        var i = m.getItemLayout(e), n = i.angle === x ? x : t * b;
                        i.startAngle = I, i.endAngle = I + C * n, I += n
                    });
                    a(t, v, u, c)
                })
            }
        }, function (t, e, i) {
            "use strict";
            i(53), i(107)
        }, function (t, e, i) {
            function n(t, e) {
                function i(t, e) {
                    var i = n.getAxis(t);
                    return i.toGlobalCoord(i.dataToCoord(0))
                }

                var n = t.coordinateSystem, r = e.axis, a = {}, o = r.position, s = r.onZero ? "onZero" : o, l = r.dim, h = n.getRect(), u = [h.x, h.x + h.width, h.y, h.y + h.height], c = e.get("offset") || 0, f = {
                    x: {
                        top: u[2] - c,
                        bottom: u[3] + c
                    }, y: {left: u[0] - c, right: u[1] + c}
                };
                f.x.onZero = Math.max(Math.min(i("y"), f.x.bottom), f.x.top),
                    f.y.onZero = Math.max(Math.min(i("x"), f.y.right), f.y.left), a.position = ["y" === l ? f.y[s] : u[0], "x" === l ? f.x[s] : u[3]], a.rotation = Math.PI / 2 * ("x" === l ? 0 : 1);
                var d = {top: -1, bottom: 1, left: -1, right: 1};
                a.labelDirection = a.tickDirection = a.nameDirection = d[o], r.onZero && (a.labelOffset = f[l][o] - f[l].onZero), e.getModel("axisTick").get("inside") && (a.tickDirection = -a.tickDirection), e.getModel("axisLabel").get("inside") && (a.labelDirection = -a.labelDirection);
                var p = e.getModel("axisLabel").get("rotate");
                return a.labelRotation = "top" === s ? -p : p, a.labelInterval = r.getLabelInterval(), a.z2 = 1, a
            }

            var r = i(1), a = i(3), o = i(50), s = o.ifIgnoreOnTick, l = o.getInterval, h = ["axisLine", "axisLabel", "axisTick", "axisName"], u = ["splitArea", "splitLine"], c = i(2).extendComponentView({
                type: "axis",
                render: function (t, e) {
                    this.group.removeAll();
                    var i = this._axisGroup;
                    if (this._axisGroup = new a.Group, this.group.add(this._axisGroup), t.get("show")) {
                        var s = t.findGridModel(), l = n(s, t), c = new o(t, l);
                        r.each(h, c.add, c), this._axisGroup.add(c.getGroup()), r.each(u, function (e) {
                            t.get(e + ".show") && this["_" + e](t, s, l.labelInterval)
                        }, this), a.groupTransition(i, this._axisGroup, t)
                    }
                },
                _splitLine: function (t, e, i) {
                    var n = t.axis, o = t.getModel("splitLine"), h = o.getModel("lineStyle"), u = h.get("color"), c = l(o, i);
                    u = r.isArray(u) ? u : [u];
                    for (var f = e.coordinateSystem.getRect(), d = n.isHorizontal(), p = 0, g = n.getTicksCoords(), v = n.scale.getTicks(), m = [], y = [], x = h.getLineStyle(), _ = 0; _ < g.length; _++)if (!s(n, _, c)) {
                        var b = n.toGlobalCoord(g[_]);
                        d ? (m[0] = b, m[1] = f.y, y[0] = b, y[1] = f.y + f.height) : (m[0] = f.x, m[1] = b, y[0] = f.x + f.width, y[1] = b);
                        var w = p++ % u.length;
                        this._axisGroup.add(new a.Line(a.subPixelOptimizeLine({
                            anid: "line_" + v[_],
                            shape: {x1: m[0], y1: m[1], x2: y[0], y2: y[1]},
                            style: r.defaults({stroke: u[w]}, x),
                            silent: !0
                        })))
                    }
                },
                _splitArea: function (t, e, i) {
                    var n = t.axis, o = t.getModel("splitArea"), h = o.getModel("areaStyle"), u = h.get("color"), c = e.coordinateSystem.getRect(), f = n.getTicksCoords(), d = n.scale.getTicks(), p = n.toGlobalCoord(f[0]), g = n.toGlobalCoord(f[0]), v = 0, m = l(o, i), y = h.getAreaStyle();
                    u = r.isArray(u) ? u : [u];
                    for (var x = 1; x < f.length; x++)if (!s(n, x, m)) {
                        var _, b, w, M, T = n.toGlobalCoord(f[x]);
                        n.isHorizontal() ? (_ = p, b = c.y, w = T - _, M = c.height) : (_ = c.x, b = g, w = c.width, M = T - b);
                        var S = v++ % u.length;
                        this._axisGroup.add(new a.Rect({
                            anid: "area_" + d[x],
                            shape: {x: _, y: b, width: w, height: M},
                            style: r.defaults({fill: u[S]}, y),
                            silent: !0
                        })), p = _ + w, g = b + M
                    }
                }
            });
            c.extend({type: "xAxis"}), c.extend({type: "yAxis"})
        }, , , , , , , , , , function (t, e, i) {
            var n = i(1), r = i(42), a = i(121), o = function (t, e, i, n, a) {
                r.call(this, t, e, i), this.type = n || "value", this.position = a || "bottom"
            };
            o.prototype = {
                constructor: o, index: 0, onZero: !1, model: null, isHorizontal: function () {
                    var t = this.position;
                    return "top" === t || "bottom" === t
                }, getGlobalExtent: function () {
                    var t = this.getExtent();
                    return t[0] = this.toGlobalCoord(t[0]), t[1] = this.toGlobalCoord(t[1]), t
                }, getLabelInterval: function () {
                    var t = this._labelInterval;
                    return t || (t = this._labelInterval = a(this)), t
                }, isLabelIgnored: function (t) {
                    if ("category" === this.type) {
                        var e = this.getLabelInterval();
                        return "function" == typeof e && !e(t, this.scale.getLabel(t)) || t % (e + 1)
                    }
                }, toLocalCoord: null, toGlobalCoord: null
            }, n.inherits(o, r), t.exports = o
        }, function (t, e, i) {
            "use strict";
            function n(t) {
                return this._axes[t]
            }

            var r = i(1), a = function (t) {
                this._axes = {}, this._dimList = [], this.name = t || ""
            };
            a.prototype = {
                constructor: a, type: "cartesian", getAxis: function (t) {
                    return this._axes[t]
                }, getAxes: function () {
                    return r.map(this._dimList, n, this)
                }, getAxesByScale: function (t) {
                    return t = t.toLowerCase(), r.filter(this.getAxes(), function (e) {
                        return e.scale.type === t
                    })
                }, addAxis: function (t) {
                    var e = t.dim;
                    this._axes[e] = t, this._dimList.push(e)
                }, dataToCoord: function (t) {
                    return this._dataCoordConvert(t, "dataToCoord")
                }, coordToData: function (t) {
                    return this._dataCoordConvert(t, "coordToData")
                }, _dataCoordConvert: function (t, e) {
                    for (var i = this._dimList, n = t instanceof Array ? [] : {}, r = 0; r < i.length; r++) {
                        var a = i[r], o = this._axes[a];
                        n[a] = o[e](t[a])
                    }
                    return n
                }
            }, t.exports = a
        }, function (t, e, i) {
            "use strict";
            function n(t) {
                a.call(this, t)
            }

            var r = i(1), a = i(118);
            n.prototype = {
                constructor: n, type: "cartesian2d", dimensions: ["x", "y"], getBaseAxis: function () {
                    return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this.getAxis("x")
                }, containPoint: function (t) {
                    var e = this.getAxis("x"), i = this.getAxis("y");
                    return e.contain(e.toLocalCoord(t[0])) && i.contain(i.toLocalCoord(t[1]))
                }, containData: function (t) {
                    return this.getAxis("x").containData(t[0]) && this.getAxis("y").containData(t[1])
                }, dataToPoints: function (t, e) {
                    return t.mapArray(["x", "y"], function (t, e) {
                        return this.dataToPoint([t, e])
                    }, e, this)
                }, dataToPoint: function (t, e) {
                    var i = this.getAxis("x"), n = this.getAxis("y");
                    return [i.toGlobalCoord(i.dataToCoord(t[0], e)), n.toGlobalCoord(n.dataToCoord(t[1], e))]
                }, pointToData: function (t, e) {
                    var i = this.getAxis("x"), n = this.getAxis("y");
                    return [i.coordToData(i.toLocalCoord(t[0]), e), n.coordToData(n.toLocalCoord(t[1]), e)]
                }, getOtherAxis: function (t) {
                    return this.getAxis("x" === t.dim ? "y" : "x")
                }
            }, r.inherits(n, a), t.exports = n
        }, function (t, e, i) {
            "use strict";
            i(53);
            var n = i(12);
            t.exports = n.extend({
                type: "grid",
                dependencies: ["xAxis", "yAxis"],
                layoutMode: "box",
                coordinateSystem: null,
                defaultOption: {
                    show: !1,
                    zlevel: 0,
                    z: 0,
                    left: "10%",
                    top: 60,
                    right: "10%",
                    bottom: 60,
                    containLabel: !1,
                    backgroundColor: "rgba(0,0,0,0)",
                    borderWidth: 1,
                    borderColor: "#ccc"
                }
            })
        }, function (t, e, i) {
            "use strict";
            var n = i(1), r = i(22);
            t.exports = function (t) {
                var e = t.model, i = e.getModel("axisLabel"), a = i.get("interval");
                return "category" !== t.type || "auto" !== a ? "auto" === a ? 0 : a : r.getAxisLabelInterval(n.map(t.scale.getTicks(), t.dataToCoord, t), e.getFormattedLabels(), i.getModel("textStyle").getFont(), t.isHorizontal())
            }
        }, function (t, e, i) {
            "use strict";
            function n(t) {
                return t.get("stack") || "__ec_stack_" + t.seriesIndex
            }

            function r(t) {
                return t.dim + t.index
            }

            function a(t, e) {
                var i = {};
                s.each(t, function (t, e) {
                    var a = t.getData(), o = t.coordinateSystem, s = o.getBaseAxis(), l = s.getExtent(), u = "category" === s.type ? s.getBandWidth() : Math.abs(l[1] - l[0]) / a.count(), c = i[r(s)] || {
                            bandWidth: u,
                            remainedWidth: u,
                            autoWidthCount: 0,
                            categoryGap: "20%",
                            gap: "30%",
                            stacks: {}
                        }, f = c.stacks;
                    i[r(s)] = c;
                    var d = n(t);
                    f[d] || c.autoWidthCount++, f[d] = f[d] || {width: 0, maxWidth: 0};
                    var p = h(t.get("barWidth"), u), g = h(t.get("barMaxWidth"), u), v = t.get("barGap"), m = t.get("barCategoryGap");
                    p && !f[d].width && (p = Math.min(c.remainedWidth, p), f[d].width = p, c.remainedWidth -= p), g && (f[d].maxWidth = g), null != v && (c.gap = v), null != m && (c.categoryGap = m)
                });
                var a = {};
                return s.each(i, function (t, e) {
                    a[e] = {};
                    var i = t.stacks, n = t.bandWidth, r = h(t.categoryGap, n), o = h(t.gap, 1), l = t.remainedWidth, u = t.autoWidthCount, c = (l - r) / (u + (u - 1) * o);
                    c = Math.max(c, 0), s.each(i, function (t, e) {
                        var i = t.maxWidth;
                        !t.width && i && i < c && (i = Math.min(i, l), l -= i, t.width = i, u--)
                    }), c = (l - r) / (u + (u - 1) * o), c = Math.max(c, 0);
                    var f, d = 0;
                    s.each(i, function (t, e) {
                        t.width || (t.width = c), f = t, d += t.width * (1 + o)
                    }), f && (d -= f.width * o);
                    var p = -d / 2;
                    s.each(i, function (t, i) {
                        a[e][i] = a[e][i] || {offset: p, width: t.width}, p += t.width * (1 + o)
                    })
                }), a
            }

            function o(t, e, i) {
                var o = a(s.filter(e.getSeriesByType(t), function (t) {
                    return !e.isSeriesFiltered(t) && t.coordinateSystem && "cartesian2d" === t.coordinateSystem.type
                })), l = {}, h = {};
                e.eachSeriesByType(t, function (t) {
                    var e = t.getData(), i = t.coordinateSystem, a = i.getBaseAxis(), s = n(t), u = o[r(a)][s], c = u.offset, f = u.width, d = i.getOtherAxis(a), p = t.get("barMinHeight") || 0, g = a.onZero ? d.toGlobalCoord(d.dataToCoord(0)) : d.getGlobalExtent()[0], v = i.dataToPoints(e, !0);
                    l[s] = l[s] || [], h[s] = h[s] || [], e.setLayout({offset: c, size: f}), e.each(d.dim, function (t, i) {
                        if (!isNaN(t)) {
                            l[s][i] || (l[s][i] = {p: g, n: g}, h[s][i] = {p: g, n: g});
                            var n, r, a, o, u = t >= 0 ? "p" : "n", m = v[i], y = l[s][i][u], x = h[s][i][u];
                            d.isHorizontal() ? (n = y, r = m[1] + c, a = m[0] - x, o = f, h[s][i][u] += a, Math.abs(a) < p && (a = (a < 0 ? -1 : 1) * p), l[s][i][u] += a) : (n = m[0] + c, r = y, a = f, o = m[1] - x, h[s][i][u] += o, Math.abs(o) < p && (o = (o <= 0 ? -1 : 1) * p), l[s][i][u] += o), e.setItemLayout(i, {
                                x: n,
                                y: r,
                                width: a,
                                height: o
                            })
                        }
                    }, !0)
                }, this)
            }

            var s = i(1), l = i(4), h = l.parsePercent;
            t.exports = o
        }, function (t, e, i) {
            var n = i(3), r = i(1), a = Math.PI;
            t.exports = function (t, e) {
                e = e || {}, r.defaults(e, {
                    text: "loading",
                    color: "#c23531",
                    textColor: "#000",
                    maskColor: "rgba(255, 255, 255, 0.8)",
                    zlevel: 0
                });
                var i = new n.Rect({
                    style: {fill: e.maskColor},
                    zlevel: e.zlevel,
                    z: 1e4
                }), o = new n.Arc({
                    shape: {startAngle: -a / 2, endAngle: -a / 2 + .1, r: 10},
                    style: {stroke: e.color, lineCap: "round", lineWidth: 5},
                    zlevel: e.zlevel,
                    z: 10001
                }), s = new n.Rect({
                    style: {
                        fill: "none",
                        text: e.text,
                        textPosition: "right",
                        textDistance: 10,
                        textFill: e.textColor
                    }, zlevel: e.zlevel, z: 10001
                });
                o.animateShape(!0).when(1e3, {endAngle: 3 * a / 2}).start("circularInOut"), o.animateShape(!0).when(1e3, {startAngle: 3 * a / 2}).delay(300).start("circularInOut");
                var l = new n.Group;
                return l.add(o), l.add(s), l.add(i), l.resize = function () {
                    var e = t.getWidth() / 2, n = t.getHeight() / 2;
                    o.setShape({cx: e, cy: n});
                    var r = o.shape.r;
                    s.setShape({x: e - r, y: n - r, width: 2 * r, height: 2 * r}), i.setShape({
                        x: 0,
                        y: 0,
                        width: t.getWidth(),
                        height: t.getHeight()
                    })
                }, l.resize(), l
            }
        }, function (t, e, i) {
            function n(t, e) {
                c.each(e, function (e, i) {
                    _.hasClass(i) || ("object" == typeof e ? t[i] = t[i] ? c.merge(t[i], e, !1) : c.clone(e) : null == t[i] && (t[i] = e))
                })
            }

            function r(t) {
                t = t, this.option = {}, this.option[w] = 1, this._componentsMap = {}, this._seriesIndices = null, n(t, this._theme.option), c.merge(t, b, !1), this.mergeOption(t)
            }

            function a(t, e) {
                c.isArray(e) || (e = e ? [e] : []);
                var i = {};
                return p(e, function (e) {
                    i[e] = (t[e] || []).slice()
                }), i
            }

            function o(t, e) {
                var i = {};
                p(e, function (t, e) {
                    var n = t.exist;
                    n && (i[n.id] = t)
                }), p(e, function (e, n) {
                    var r = e.option;
                    if (c.assert(!r || null == r.id || !i[r.id] || i[r.id] === e, "id duplicates: " + (r && r.id)), r && null != r.id && (i[r.id] = e), x(r)) {
                        var a = s(t, r, e.exist);
                        e.keyInfo = {mainType: t, subType: a}
                    }
                }), p(e, function (t, e) {
                    var n = t.exist, r = t.option, a = t.keyInfo;
                    if (x(r)) {
                        if (a.name = null != r.name ? r.name + "" : n ? n.name : "\0-", n)a.id = n.id; else if (null != r.id)a.id = r.id + ""; else {
                            var o = 0;
                            do a.id = "\0" + a.name + "\0" + o++; while (i[a.id])
                        }
                        i[a.id] = t
                    }
                })
            }

            function s(t, e, i) {
                var n = e.type ? e.type : i ? i.subType : _.determineSubType(t, e);
                return n
            }

            function l(t) {
                return v(t, function (t) {
                        return t.componentIndex
                    }) || []
            }

            function h(t, e) {
                return e.hasOwnProperty("subType") ? g(t, function (t) {
                    return t.subType === e.subType
                }) : t
            }

            function u(t) {
            }

            var c = i(1), f = i(7), d = i(10), p = c.each, g = c.filter, v = c.map, m = c.isArray, y = c.indexOf, x = c.isObject, _ = i(12), b = i(126), w = "\0_ec_inner", M = d.extend({
                constructor: M,
                init: function (t, e, i, n) {
                    i = i || {}, this.option = null, this._theme = new d(i), this._optionManager = n
                },
                setOption: function (t, e) {
                    c.assert(!(w in t), "please use chart.getOption()"), this._optionManager.setOption(t, e), this.resetOption()
                },
                resetOption: function (t) {
                    var e = !1, i = this._optionManager;
                    if (!t || "recreate" === t) {
                        var n = i.mountOption("recreate" === t);
                        this.option && "recreate" !== t ? (this.restoreData(), this.mergeOption(n)) : r.call(this, n), e = !0
                    }
                    if ("timeline" !== t && "media" !== t || this.restoreData(), !t || "recreate" === t || "timeline" === t) {
                        var a = i.getTimelineOption(this);
                        a && (this.mergeOption(a), e = !0)
                    }
                    if (!t || "recreate" === t || "media" === t) {
                        var o = i.getMediaOption(this, this._api);
                        o.length && p(o, function (t) {
                            this.mergeOption(t, e = !0)
                        }, this)
                    }
                    return e
                },
                mergeOption: function (t) {
                    function e(e, r) {
                        var s = f.normalizeToArray(t[e]), h = f.mappingToExists(n[e], s);
                        o(e, h);
                        var u = a(n, r);
                        i[e] = [], n[e] = [], p(h, function (t, r) {
                            var a = t.exist, o = t.option;
                            if (c.assert(x(o) || a, "Empty component definition"), o) {
                                var s = _.getClass(e, t.keyInfo.subType, !0);
                                if (a && a instanceof s)a.name = t.keyInfo.name, a.mergeOption(o, this), a.optionUpdated(o, !1); else {
                                    var l = c.extend({dependentModels: u, componentIndex: r}, t.keyInfo);
                                    a = new s(o, this, this, l), c.extend(a, l), a.init(o, this, this, l), a.optionUpdated(null, !0)
                                }
                            } else a.mergeOption({}, this), a.optionUpdated({}, !1);
                            n[e][r] = a, i[e][r] = a.option
                        }, this), "series" === e && (this._seriesIndices = l(n.series))
                    }

                    var i = this.option, n = this._componentsMap, r = [];
                    p(t, function (t, e) {
                        null != t && (_.hasClass(e) ? r.push(e) : i[e] = null == i[e] ? c.clone(t) : c.merge(i[e], t, !0))
                    }), _.topologicalTravel(r, _.getAllClassMainTypes(), e, this), this._seriesIndices = this._seriesIndices || []
                },
                getOption: function () {
                    var t = c.clone(this.option);
                    return p(t, function (e, i) {
                        if (_.hasClass(i)) {
                            for (var e = f.normalizeToArray(e), n = e.length - 1; n >= 0; n--)f.isIdInner(e[n]) && e.splice(n, 1);
                            t[i] = e
                        }
                    }), delete t[w], t
                },
                getTheme: function () {
                    return this._theme
                },
                getComponent: function (t, e) {
                    var i = this._componentsMap[t];
                    if (i)return i[e || 0]
                },
                queryComponents: function (t) {
                    var e = t.mainType;
                    if (!e)return [];
                    var i = t.index, n = t.id, r = t.name, a = this._componentsMap[e];
                    if (!a || !a.length)return [];
                    var o;
                    if (null != i)m(i) || (i = [i]), o = g(v(i, function (t) {
                        return a[t]
                    }), function (t) {
                        return !!t
                    }); else if (null != n) {
                        var s = m(n);
                        o = g(a, function (t) {
                            return s && y(n, t.id) >= 0 || !s && t.id === n
                        })
                    } else if (null != r) {
                        var l = m(r);
                        o = g(a, function (t) {
                            return l && y(r, t.name) >= 0 || !l && t.name === r
                        })
                    } else o = a;
                    return h(o, t)
                },
                findComponents: function (t) {
                    function e(t) {
                        var e = r + "Index", i = r + "Id", n = r + "Name";
                        return t && (t.hasOwnProperty(e) || t.hasOwnProperty(i) || t.hasOwnProperty(n)) ? {
                            mainType: r,
                            index: t[e],
                            id: t[i],
                            name: t[n]
                        } : null
                    }

                    function i(e) {
                        return t.filter ? g(e, t.filter) : e
                    }

                    var n = t.query, r = t.mainType, a = e(n), o = a ? this.queryComponents(a) : this._componentsMap[r];
                    return i(h(o, t))
                },
                eachComponent: function (t, e, i) {
                    var n = this._componentsMap;
                    if ("function" == typeof t)i = e, e = t, p(n, function (t, n) {
                        p(t, function (t, r) {
                            e.call(i, n, t, r)
                        })
                    }); else if (c.isString(t))p(n[t], e, i); else if (x(t)) {
                        var r = this.findComponents(t);
                        p(r, e, i)
                    }
                },
                getSeriesByName: function (t) {
                    var e = this._componentsMap.series;
                    return g(e, function (e) {
                        return e.name === t
                    })
                },
                getSeriesByIndex: function (t) {
                    return this._componentsMap.series[t]
                },
                getSeriesByType: function (t) {
                    var e = this._componentsMap.series;
                    return g(e, function (e) {
                        return e.subType === t
                    })
                },
                getSeries: function () {
                    return this._componentsMap.series.slice()
                },
                eachSeries: function (t, e) {
                    u(this), p(this._seriesIndices, function (i) {
                        var n = this._componentsMap.series[i];
                        t.call(e, n, i)
                    }, this)
                },
                eachRawSeries: function (t, e) {
                    p(this._componentsMap.series, t, e)
                },
                eachSeriesByType: function (t, e, i) {
                    u(this), p(this._seriesIndices, function (n) {
                        var r = this._componentsMap.series[n];
                        r.subType === t && e.call(i, r, n)
                    }, this)
                },
                eachRawSeriesByType: function (t, e, i) {
                    return p(this.getSeriesByType(t), e, i)
                },
                isSeriesFiltered: function (t) {
                    return u(this), c.indexOf(this._seriesIndices, t.componentIndex) < 0
                },
                filterSeries: function (t, e) {
                    u(this);
                    var i = g(this._componentsMap.series, t, e);
                    this._seriesIndices = l(i)
                },
                restoreData: function () {
                    var t = this._componentsMap;
                    this._seriesIndices = l(t.series);
                    var e = [];
                    p(t, function (t, i) {
                        e.push(i)
                    }), _.topologicalTravel(e, _.getAllClassMainTypes(), function (e, i) {
                        p(t[e], function (t) {
                            t.restoreData()
                        })
                    })
                }
            });
            c.mixin(M, i(56)), t.exports = M
        }, function (t, e, i) {
            function n(t) {
                this._api = t, this._timelineOptions = [], this._mediaList = [], this._mediaDefault, this._currentMediaIndices = [], this._optionBackup, this._newBaseOption
            }

            function r(t, e, i) {
                var n, r, a = [], o = [], s = t.timeline;
                if (t.baseOption && (r = t.baseOption), (s || t.options) && (r = r || {}, a = (t.options || []).slice()), t.media) {
                    r = r || {};
                    var l = t.media;
                    f(l, function (t) {
                        t && t.option && (t.query ? o.push(t) : n || (n = t))
                    })
                }
                return r || (r = t), r.timeline || (r.timeline = s), f([r].concat(a).concat(h.map(o, function (t) {
                    return t.option
                })), function (t) {
                    f(e, function (e) {
                        e(t, i)
                    })
                }), {baseOption: r, timelineOptions: a, mediaDefault: n, mediaList: o}
            }

            function a(t, e, i) {
                var n = {width: e, height: i, aspectratio: e / i}, r = !0;
                return h.each(t, function (t, e) {
                    var i = e.match(v);
                    if (i && i[1] && i[2]) {
                        var a = i[1], s = i[2].toLowerCase();
                        o(n[s], t, a) || (r = !1)
                    }
                }), r
            }

            function o(t, e, i) {
                return "min" === i ? t >= e : "max" === i ? t <= e : t === e
            }

            function s(t, e) {
                return t.join(",") === e.join(",")
            }

            function l(t, e) {
                e = e || {}, f(e, function (e, i) {
                    if (null != e) {
                        var n = t[i];
                        if (c.hasClass(i)) {
                            e = u.normalizeToArray(e), n = u.normalizeToArray(n);
                            var r = u.mappingToExists(n, e);
                            t[i] = p(r, function (t) {
                                return t.option && t.exist ? g(t.exist, t.option, !0) : t.exist || t.option
                            })
                        } else t[i] = g(n, e, !0)
                    }
                })
            }

            var h = i(1), u = i(7), c = i(12), f = h.each, d = h.clone, p = h.map, g = h.merge, v = /^(min|max)?(.+)$/;
            n.prototype = {
                constructor: n, setOption: function (t, e) {
                    t = d(t, !0);
                    var i = this._optionBackup, n = r.call(this, t, e, !i);
                    this._newBaseOption = n.baseOption, i ? (l(i.baseOption, n.baseOption), n.timelineOptions.length && (i.timelineOptions = n.timelineOptions), n.mediaList.length && (i.mediaList = n.mediaList), n.mediaDefault && (i.mediaDefault = n.mediaDefault)) : this._optionBackup = n
                }, mountOption: function (t) {
                    var e = this._optionBackup;
                    return this._timelineOptions = p(e.timelineOptions, d), this._mediaList = p(e.mediaList, d), this._mediaDefault = d(e.mediaDefault), this._currentMediaIndices = [], d(t ? e.baseOption : this._newBaseOption)
                }, getTimelineOption: function (t) {
                    var e, i = this._timelineOptions;
                    if (i.length) {
                        var n = t.getComponent("timeline");
                        n && (e = d(i[n.getCurrentIndex()], !0))
                    }
                    return e
                }, getMediaOption: function (t) {
                    var e = this._api.getWidth(), i = this._api.getHeight(), n = this._mediaList, r = this._mediaDefault, o = [], l = [];
                    if (!n.length && !r)return l;
                    for (var h = 0, u = n.length; h < u; h++)a(n[h].query, e, i) && o.push(h);
                    return !o.length && r && (o = [-1]), o.length && !s(o, this._currentMediaIndices) && (l = p(o, function (t) {
                        return d(t === -1 ? r.option : n[t].option)
                    })), this._currentMediaIndices = o, l
                }
            }, t.exports = n
        }, function (t, e) {
            var i = "";
            "undefined" != typeof navigator && (i = navigator.platform || ""), t.exports = {
                color: ["#c23531", "#2f4554", "#61a0a8", "#d48265", "#91c7ae", "#749f83", "#ca8622", "#bda29a", "#6e7074", "#546570", "#c4ccd3"],
                textStyle: {
                    fontFamily: i.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
                    fontSize: 12,
                    fontStyle: "normal",
                    fontWeight: "normal"
                },
                blendMode: null,
                animation: !0,
                animationDuration: 1e3,
                animationDurationUpdate: 300,
                animationEasing: "exponentialOut",
                animationEasingUpdate: "cubicOut",
                animationThreshold: 2e3,
                progressiveThreshold: 3e3,
                progressive: 400,
                hoverLayerThreshold: 3e3
            }
        }, function (t, e, i) {
            t.exports = {getAreaStyle: i(31)([["fill", "color"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["opacity"], ["shadowColor"]])}
        }, function (t, e) {
            t.exports = {
                getBoxLayoutParams: function () {
                    return {
                        left: this.get("left"),
                        top: this.get("top"),
                        right: this.get("right"),
                        bottom: this.get("bottom"),
                        width: this.get("width"),
                        height: this.get("height")
                    }
                }
            }
        }, function (t, e, i) {
            var n = i(31)([["fill", "color"], ["stroke", "borderColor"], ["lineWidth", "borderWidth"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"], ["textPosition"], ["textAlign"]]);
            t.exports = {
                getItemStyle: function (t) {
                    var e = n.call(this, t), i = this.getBorderLineDash();
                    return i && (e.lineDash = i), e
                }, getBorderLineDash: function () {
                    var t = this.get("borderType");
                    return "solid" === t || null == t ? null : "dashed" === t ? [5, 5] : [1, 1]
                }
            }
        }, function (t, e, i) {
            var n = i(31)([["lineWidth", "width"], ["stroke", "color"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"]]);
            t.exports = {
                getLineStyle: function (t) {
                    var e = n.call(this, t), i = this.getLineDash(e.lineWidth);
                    return i && (e.lineDash = i), e
                }, getLineDash: function (t) {
                    null == t && (t = 1);
                    var e = this.get("type"), i = Math.max(t, 2), n = 4 * t;
                    return "solid" === e || null == e ? null : "dashed" === e ? [n, n] : [i, i]
                }
            }
        }, function (t, e, i) {
            function n(t, e) {
                return t && t.getShallow(e)
            }

            var r = i(16);
            t.exports = {
                getTextColor: function () {
                    var t = this.ecModel;
                    return this.getShallow("color") || t && t.get("textStyle.color")
                }, getFont: function () {
                    var t = this.ecModel, e = t && t.getModel("textStyle");
                    return [this.getShallow("fontStyle") || n(e, "fontStyle"), this.getShallow("fontWeight") || n(e, "fontWeight"), (this.getShallow("fontSize") || n(e, "fontSize") || 12) + "px", this.getShallow("fontFamily") || n(e, "fontFamily") || "sans-serif"].join(" ")
                }, getTextRect: function (t) {
                    var e = this.get("textStyle") || {};
                    return r.getBoundingRect(t, this.getFont(), e.align, e.baseline)
                }, truncateText: function (t, e, i, n) {
                    return r.truncateText(t, e, this.getFont(), i, n)
                }
            }
        }, function (t, e, i) {
            function n(t, e) {
                e = e.split(",");
                for (var i = t, n = 0; n < e.length && (i = i && i[e[n]], null != i); n++);
                return i
            }

            function r(t, e, i, n) {
                e = e.split(",");
                for (var r, a = t, o = 0; o < e.length - 1; o++)r = e[o], null == a[r] && (a[r] = {}), a = a[r];
                (n || null == a[e[o]]) && (a[e[o]] = i)
            }

            function a(t) {
                c(l, function (e) {
                    e[0] in t && !(e[1] in t) && (t[e[1]] = t[e[0]])
                })
            }

            var o = i(1), s = i(133), l = [["x", "left"], ["y", "top"], ["x2", "right"], ["y2", "bottom"]], h = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"], u = ["bar", "boxplot", "candlestick", "chord", "effectScatter", "funnel", "gauge", "lines", "graph", "heatmap", "line", "map", "parallel", "pie", "radar", "sankey", "scatter", "treemap"], c = o.each;
            t.exports = function (t) {
                c(t.series, function (t) {
                    if (o.isObject(t)) {
                        var e = t.type;
                        if (s(t), "pie" !== e && "gauge" !== e || null != t.clockWise && (t.clockwise = t.clockWise), "gauge" === e) {
                            var i = n(t, "pointer.color");
                            null != i && r(t, "itemStyle.normal.color", i)
                        }
                        for (var l = 0; l < u.length; l++)if (u[l] === t.type) {
                            a(t);
                            break
                        }
                    }
                }), t.dataRange && (t.visualMap = t.dataRange), c(h, function (e) {
                    var i = t[e];
                    i && (o.isArray(i) || (i = [i]), c(i, function (t) {
                        a(t)
                    }))
                })
            }
        }, function (t, e, i) {
            function n(t) {
                var e = t && t.itemStyle;
                e && r.each(a, function (i) {
                    var n = e.normal, a = e.emphasis;
                    n && n[i] && (t[i] = t[i] || {}, t[i].normal ? r.merge(t[i].normal, n[i]) : t[i].normal = n[i], n[i] = null), a && a[i] && (t[i] = t[i] || {}, t[i].emphasis ? r.merge(t[i].emphasis, a[i]) : t[i].emphasis = a[i], a[i] = null)
                })
            }

            var r = i(1), a = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"];
            t.exports = function (t) {
                if (t) {
                    n(t), n(t.markPoint), n(t.markLine);
                    var e = t.data;
                    if (e) {
                        for (var i = 0; i < e.length; i++)n(e[i]);
                        var a = t.markPoint;
                        if (a && a.data)for (var o = a.data, i = 0; i < o.length; i++)n(o[i]);
                        var s = t.markLine;
                        if (s && s.data)for (var l = s.data, i = 0; i < l.length; i++)r.isArray(l[i]) ? (n(l[i][0]), n(l[i][1])) : n(l[i])
                    }
                }
            }
        }, function (t, e) {
            var i = {
                average: function (t) {
                    for (var e = 0, i = 0, n = 0; n < t.length; n++)isNaN(t[n]) || (e += t[n], i++);
                    return 0 === i ? NaN : e / i
                }, sum: function (t) {
                    for (var e = 0, i = 0; i < t.length; i++)e += t[i] || 0;
                    return e
                }, max: function (t) {
                    for (var e = -(1 / 0), i = 0; i < t.length; i++)t[i] > e && (e = t[i]);
                    return e
                }, min: function (t) {
                    for (var e = 1 / 0, i = 0; i < t.length; i++)t[i] < e && (e = t[i]);
                    return e
                }, nearest: function (t) {
                    return t[0]
                }
            }, n = function (t, e) {
                return Math.round(t.length / 2)
            };
            t.exports = function (t, e, r) {
                e.eachSeriesByType(t, function (t) {
                    var e = t.getData(), r = t.get("sampling"), a = t.coordinateSystem;
                    if ("cartesian2d" === a.type && r) {
                        var o = a.getBaseAxis(), s = a.getOtherAxis(o), l = o.getExtent(), h = l[1] - l[0], u = Math.round(e.count() / h);
                        if (u > 1) {
                            var c;
                            "string" == typeof r ? c = i[r] : "function" == typeof r && (c = r), c && (e = e.downSample(s.dim, 1 / u, c, n), t.setData(e))
                        }
                    }
                }, this)
            }
        }, function (t, e, i) {
            function n(t, e) {
                return c(t, u(e))
            }

            var r = i(1), a = i(32), o = i(4), s = i(38), l = a.prototype, h = s.prototype, u = o.getPrecisionSafe, c = o.round, f = Math.floor, d = Math.ceil, p = Math.pow, g = Math.log, v = a.extend({
                type: "log",
                base: 10,
                $constructor: function () {
                    a.apply(this, arguments), this._originalScale = new s
                },
                getTicks: function () {
                    var t = this._originalScale, e = this._extent, i = t.getExtent();
                    return r.map(h.getTicks.call(this), function (r) {
                        var a = o.round(p(this.base, r));
                        return a = r === e[0] && t.__fixMin ? n(a, i[0]) : a, a = r === e[1] && t.__fixMax ? n(a, i[1]) : a
                    }, this)
                },
                getLabel: h.getLabel,
                scale: function (t) {
                    return t = l.scale.call(this, t), p(this.base, t)
                },
                setExtent: function (t, e) {
                    var i = this.base;
                    t = g(t) / g(i), e = g(e) / g(i), h.setExtent.call(this, t, e)
                },
                getExtent: function () {
                    var t = this.base, e = l.getExtent.call(this);
                    e[0] = p(t, e[0]), e[1] = p(t, e[1]);
                    var i = this._originalScale, r = i.getExtent();
                    return i.__fixMin && (e[0] = n(e[0], r[0])), i.__fixMax && (e[1] = n(e[1], r[1])), e
                },
                unionExtent: function (t) {
                    this._originalScale.unionExtent(t);
                    var e = this.base;
                    t[0] = g(t[0]) / g(e), t[1] = g(t[1]) / g(e), l.unionExtent.call(this, t)
                },
                niceTicks: function (t) {
                    t = t || 10;
                    var e = this._extent, i = e[1] - e[0];
                    if (!(i === 1 / 0 || i <= 0)) {
                        var n = o.quantity(i), r = t / i * n;
                        for (r <= .5 && (n *= 10); !isNaN(n) && Math.abs(n) < 1 && Math.abs(n) > 0;)n *= 10;
                        var a = [o.round(d(e[0] / n) * n), o.round(f(e[1] / n) * n)];
                        this._interval = n, this._niceExtent = a
                    }
                },
                niceExtent: function (t, e, i) {
                    h.niceExtent.call(this, t, e, i);
                    var n = this._originalScale;
                    n.__fixMin = e, n.__fixMax = i
                }
            });
            r.each(["contain", "normalize"], function (t) {
                v.prototype[t] = function (e) {
                    return e = g(e) / g(this.base), l[t].call(this, e)
                }
            }), v.create = function () {
                return new v
            }, t.exports = v
        }, function (t, e, i) {
            var n = i(1), r = i(32), a = r.prototype, o = r.extend({
                type: "ordinal", init: function (t, e) {
                    this._data = t, this._extent = e || [0, t.length - 1]
                }, parse: function (t) {
                    return "string" == typeof t ? n.indexOf(this._data, t) : Math.round(t)
                }, contain: function (t) {
                    return t = this.parse(t), a.contain.call(this, t) && null != this._data[t]
                }, normalize: function (t) {
                    return a.normalize.call(this, this.parse(t))
                }, scale: function (t) {
                    return Math.round(a.scale.call(this, t))
                }, getTicks: function () {
                    for (var t = [], e = this._extent, i = e[0]; i <= e[1];)t.push(i), i++;
                    return t
                }, getLabel: function (t) {
                    return this._data[t]
                }, count: function () {
                    return this._extent[1] - this._extent[0] + 1
                }, niceTicks: n.noop, niceExtent: n.noop
            });
            o.create = function () {
                return new o
            }, t.exports = o
        }, function (t, e, i) {
            var n = i(1), r = i(4), a = i(9), o = i(38), s = o.prototype, l = Math.ceil, h = Math.floor, u = 1e3, c = 60 * u, f = 60 * c, d = 24 * f, p = function (t, e, i, n) {
                for (; i < n;) {
                    var r = i + n >>> 1;
                    t[r][2] < e ? i = r + 1 : n = r
                }
                return i
            }, g = o.extend({
                type: "time", getLabel: function (t) {
                    var e = this._stepLvl, i = new Date(t);
                    return a.formatTime(e[0], i)
                }, niceExtent: function (t, e, i) {
                    var n = this._extent;
                    if (n[0] === n[1] && (n[0] -= d, n[1] += d), n[1] === -(1 / 0) && n[0] === 1 / 0) {
                        var a = new Date;
                        n[1] = new Date(a.getFullYear(), a.getMonth(), a.getDate()), n[0] = n[1] - d
                    }
                    this.niceTicks(t);
                    var o = this._interval;
                    e || (n[0] = r.round(h(n[0] / o) * o)), i || (n[1] = r.round(l(n[1] / o) * o))
                }, niceTicks: function (t) {
                    t = t || 10;
                    var e = this._extent, i = e[1] - e[0], n = i / t, a = v.length, o = p(v, n, 0, a), s = v[Math.min(o, a - 1)], u = s[2];
                    if ("year" === s[0]) {
                        var c = i / u, f = r.nice(c / t, !0);
                        u *= f
                    }
                    var d = [l(e[0] / u) * u, h(e[1] / u) * u];
                    this._stepLvl = s, this._interval = u, this._niceExtent = d
                }, parse: function (t) {
                    return +r.parseDate(t)
                }
            });
            n.each(["contain", "normalize"], function (t) {
                g.prototype[t] = function (e) {
                    return s[t].call(this, this.parse(e))
                }
            });
            var v = [["hh:mm:ss", 1, u], ["hh:mm:ss", 5, 5 * u], ["hh:mm:ss", 10, 10 * u], ["hh:mm:ss", 15, 15 * u], ["hh:mm:ss", 30, 30 * u], ["hh:mm\nMM-dd", 1, c], ["hh:mm\nMM-dd", 5, 5 * c], ["hh:mm\nMM-dd", 10, 10 * c], ["hh:mm\nMM-dd", 15, 15 * c], ["hh:mm\nMM-dd", 30, 30 * c], ["hh:mm\nMM-dd", 1, f], ["hh:mm\nMM-dd", 2, 2 * f], ["hh:mm\nMM-dd", 6, 6 * f], ["hh:mm\nMM-dd", 12, 12 * f], ["MM-dd\nyyyy", 1, d], ["week", 7, 7 * d], ["month", 1, 31 * d], ["quarter", 3, 380 * d / 4], ["half-year", 6, 380 * d / 2], ["year", 1, 380 * d]];
            g.create = function () {
                return new g
            }, t.exports = g
        }, function (t, e, i) {
            var n = i(29);
            t.exports = function (t) {
                function e(e) {
                    var i = (e.visualColorAccessPath || "itemStyle.normal.color").split("."), r = e.getData(), a = e.get(i) || e.getColorFromPalette(e.get("name"));
                    r.setVisual("color", a), t.isSeriesFiltered(e) || ("function" != typeof a || a instanceof n || r.each(function (t) {
                        r.setItemVisual(t, "color", a(e.getDataParams(t)))
                    }), r.each(function (t) {
                        var e = r.getItemModel(t), n = e.get(i, !0);
                        null != n && r.setItemVisual(t, "color", n)
                    }))
                }

                t.eachRawSeries(e)
            }
        }, function (t, e, i) {
            "use strict";
            function n(t, e, i) {
                return {
                    type: t,
                    event: i,
                    target: e,
                    cancelBubble: !1,
                    offsetX: i.zrX,
                    offsetY: i.zrY,
                    gestureEvent: i.gestureEvent,
                    pinchX: i.pinchX,
                    pinchY: i.pinchY,
                    pinchScale: i.pinchScale,
                    wheelDelta: i.zrDelta
                }
            }

            function r() {
            }

            function a(t, e, i) {
                if (t[t.rectHover ? "rectContain" : "contain"](e, i)) {
                    for (var n = t; n;) {
                        if (n.silent || n.clipPath && !n.clipPath.contain(e, i))return !1;
                        n = n.parent
                    }
                    return !0
                }
                return !1
            }

            var o = i(1), s = i(167), l = i(20);
            r.prototype.dispose = function () {
            };
            var h = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"], u = function (t, e, i, n) {
                l.call(this), this.storage = t, this.painter = e, this.painterRoot = n, i = i || new r, this.proxy = i, i.handler = this, this._hovered, this._lastTouchMoment, this._lastX, this._lastY, s.call(this), o.each(h, function (t) {
                    i.on && i.on(t, this[t], this)
                }, this)
            };
            u.prototype = {
                constructor: u, mousemove: function (t) {
                    var e = t.zrX, i = t.zrY, n = this.findHover(e, i, null), r = this._hovered, a = this.proxy;
                    this._hovered = n, a.setCursor && a.setCursor(n ? n.cursor : "default"), r && n !== r && r.__zr && this.dispatchToElement(r, "mouseout", t), this.dispatchToElement(n, "mousemove", t), n && n !== r && this.dispatchToElement(n, "mouseover", t)
                }, mouseout: function (t) {
                    this.dispatchToElement(this._hovered, "mouseout", t);
                    var e, i = t.toElement || t.relatedTarget;
                    do i = i && i.parentNode; while (i && 9 != i.nodeType && !(e = i === this.painterRoot));
                    !e && this.trigger("globalout", {event: t})
                }, resize: function (t) {
                    this._hovered = null
                }, dispatch: function (t, e) {
                    var i = this[t];
                    i && i.call(this, e)
                }, dispose: function () {
                    this.proxy.dispose(), this.storage = this.proxy = this.painter = null
                }, setCursorStyle: function (t) {
                    var e = this.proxy;
                    e.setCursor && e.setCursor(t)
                }, dispatchToElement: function (t, e, i) {
                    for (var r = "on" + e, a = n(e, t, i), o = t; o && (o[r] && (a.cancelBubble = o[r].call(o, a)), o.trigger(e, a), o = o.parent, !a.cancelBubble););
                    a.cancelBubble || (this.trigger(e, a), this.painter && this.painter.eachOtherLayer(function (t) {
                        "function" == typeof t[r] && t[r].call(t, a), t.trigger && t.trigger(e, a)
                    }))
                }, findHover: function (t, e, i) {
                    for (var n = this.storage.getDisplayList(), r = n.length - 1; r >= 0; r--)if (!n[r].silent && n[r] !== i && !n[r].ignore && a(n[r], t, e))return n[r]
                }
            }, o.each(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function (t) {
                u.prototype[t] = function (e) {
                    var i = this.findHover(e.zrX, e.zrY, null);
                    if ("mousedown" === t)this._downel = i, this._upel = i; else if ("mosueup" === t)this._upel = i; else if ("click" === t && this._downel !== this._upel)return;
                    this.dispatchToElement(i, t, e)
                }
            }), o.mixin(u, l), o.mixin(u, s), t.exports = u
        }, function (t, e, i) {
            function n() {
                return !1
            }

            function r(t, e, i, n) {
                var r = document.createElement(e), a = i.getWidth(), o = i.getHeight(), s = r.style;
                return s.position = "absolute", s.left = 0, s.top = 0, s.width = a + "px", s.height = o + "px", r.width = a * n, r.height = o * n, r.setAttribute("data-zr-dom-id", t), r
            }

            var a = i(1), o = i(33), s = i(64), l = i(63), h = function (t, e, i) {
                var s;
                i = i || o.devicePixelRatio, "string" == typeof t ? s = r(t, "canvas", e, i) : a.isObject(t) && (s = t, t = s.id), this.id = t, this.dom = s;
                var l = s.style;
                l && (s.onselectstart = n, l["-webkit-user-select"] = "none", l["user-select"] = "none", l["-webkit-touch-callout"] = "none", l["-webkit-tap-highlight-color"] = "rgba(0,0,0,0)", l.padding = 0, l.margin = 0, l["border-width"] = 0), this.domBack = null, this.ctxBack = null, this.painter = e, this.config = null, this.clearColor = 0, this.motionBlur = !1, this.lastFrameAlpha = .7, this.dpr = i
            };
            h.prototype = {
                constructor: h, elCount: 0, __dirty: !0, initContext: function () {
                    this.ctx = this.dom.getContext("2d"), this.ctx.dpr = this.dpr
                }, createBackBuffer: function () {
                    var t = this.dpr;
                    this.domBack = r("back-" + this.id, "canvas", this.painter, t), this.ctxBack = this.domBack.getContext("2d"), 1 != t && this.ctxBack.scale(t, t)
                }, resize: function (t, e) {
                    var i = this.dpr, n = this.dom, r = n.style, a = this.domBack;
                    r.width = t + "px", r.height = e + "px", n.width = t * i, n.height = e * i, a && (a.width = t * i, a.height = e * i, 1 != i && this.ctxBack.scale(i, i))
                }, clear: function (t) {
                    var e = this.dom, i = this.ctx, n = e.width, r = e.height, a = this.clearColor, o = this.motionBlur && !t, h = this.lastFrameAlpha, u = this.dpr;
                    if (o && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", this.ctxBack.drawImage(e, 0, 0, n / u, r / u)), i.clearRect(0, 0, n, r), a) {
                        var c;
                        a.colorStops ? (c = a.__canvasGradient || s.getGradient(i, a, {
                                x: 0,
                                y: 0,
                                width: n,
                                height: r
                            }), a.__canvasGradient = c) : a.image && (c = l.prototype.getCanvasPattern.call(a, i)), i.save(), i.fillStyle = c || a, i.fillRect(0, 0, n, r), i.restore()
                    }
                    if (o) {
                        var f = this.domBack;
                        i.save(), i.globalAlpha = h, i.drawImage(f, 0, 0, n, r), i.restore()
                    }
                }
            }, t.exports = h
        }, function (t, e, i) {
            "use strict";
            function n(t) {
                return parseInt(t, 10)
            }

            function r(t) {
                return !!t && (!!t.isBuildin || "function" == typeof t.resize && "function" == typeof t.refresh)
            }

            function a(t) {
                t.__unusedCount++
            }

            function o(t) {
                1 == t.__unusedCount && t.clear()
            }

            function s(t, e, i) {
                return x.copy(t.getBoundingRect()), t.transform && x.applyTransform(t.transform), _.width = e, _.height = i, !x.intersect(_)
            }

            function l(t, e) {
                if (t == e)return !1;
                if (!t || !e || t.length !== e.length)return !0;
                for (var i = 0; i < t.length; i++)if (t[i] !== e[i])return !0
            }

            function h(t, e) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i], r = n.path;
                    n.setTransform(e), r.beginPath(e), n.buildPath(r, n.shape), e.clip(), n.restoreTransform(e)
                }
            }

            function u(t, e) {
                var i = document.createElement("div");
                return i.style.cssText = ["position:relative", "overflow:hidden", "width:" + t + "px", "height:" + e + "px", "padding:0", "margin:0", "border-width:0"].join(";") + ";", i
            }

            var c = i(33), f = i(1), d = i(47), p = i(8), g = i(44), v = i(140), m = i(60), y = 5, x = new p(0, 0, 0, 0), _ = new p(0, 0, 0, 0), b = function (t, e, i) {
                var n = !t.nodeName || "CANVAS" === t.nodeName.toUpperCase();
                this._opts = i = f.extend({}, i || {}), this.dpr = i.devicePixelRatio || c.devicePixelRatio, this._singleCanvas = n, this.root = t;
                var r = t.style;
                r && (r["-webkit-tap-highlight-color"] = "transparent", r["-webkit-user-select"] = r["user-select"] = r["-webkit-touch-callout"] = "none", t.innerHTML = ""), this.storage = e;
                var a = this._zlevelList = [], o = this._layers = {};
                if (this._layerConfig = {}, n) {
                    var s = t.width, l = t.height;
                    this._width = s, this._height = l;
                    var h = new v(t, this, 1);
                    h.initContext(), o[0] = h, a.push(0)
                } else {
                    this._width = this._getSize(0), this._height = this._getSize(1);
                    var d = this._domRoot = u(this._width, this._height);
                    t.appendChild(d)
                }
                this.pathToImage = this._createPathToImage(), this._progressiveLayers = [], this._hoverlayer, this._hoverElements = []
            };
            b.prototype = {
                constructor: b, isSingleCanvas: function () {
                    return this._singleCanvas
                }, getViewportRoot: function () {
                    return this._singleCanvas ? this._layers[0].dom : this._domRoot
                }, refresh: function (t) {
                    var e = this.storage.getDisplayList(!0), i = this._zlevelList;
                    this._paintList(e, t);
                    for (var n = 0; n < i.length; n++) {
                        var r = i[n], a = this._layers[r];
                        !a.isBuildin && a.refresh && a.refresh()
                    }
                    return this.refreshHover(), this._progressiveLayers.length && this._startProgessive(), this
                }, addHover: function (t, e) {
                    if (!t.__hoverMir) {
                        var i = new t.constructor({style: t.style, shape: t.shape});
                        i.__from = t, t.__hoverMir = i, i.setStyle(e), this._hoverElements.push(i)
                    }
                }, removeHover: function (t) {
                    var e = t.__hoverMir, i = this._hoverElements, n = f.indexOf(i, e);
                    n >= 0 && i.splice(n, 1), t.__hoverMir = null
                }, clearHover: function (t) {
                    for (var e = this._hoverElements, i = 0; i < e.length; i++) {
                        var n = e[i].__from;
                        n && (n.__hoverMir = null)
                    }
                    e.length = 0
                }, refreshHover: function () {
                    var t = this._hoverElements, e = t.length, i = this._hoverlayer;
                    if (i && i.clear(), e) {
                        g(t, this.storage.displayableSortFunc), i || (i = this._hoverlayer = this.getLayer(1e5));
                        var n = {};
                        i.ctx.save();
                        for (var r = 0; r < e;) {
                            var a = t[r], o = a.__from;
                            o && o.__zr ? (r++, o.invisible || (a.transform = o.transform, a.invTransform = o.invTransform, a.__clipPaths = o.__clipPaths, this._doPaintEl(a, i, !0, n))) : (t.splice(r, 1), o.__hoverMir = null, e--)
                        }
                        i.ctx.restore()
                    }
                }, _startProgessive: function () {
                    function t() {
                        i === e._progressiveToken && e.storage && (e._doPaintList(e.storage.getDisplayList()), e._furtherProgressive ? (e._progress++, m(t)) : e._progressiveToken = -1)
                    }

                    var e = this;
                    if (e._furtherProgressive) {
                        var i = e._progressiveToken = +new Date;
                        e._progress++, m(t)
                    }
                }, _clearProgressive: function () {
                    this._progressiveToken = -1, this._progress = 0, f.each(this._progressiveLayers, function (t) {
                        t.__dirty && t.clear()
                    })
                }, _paintList: function (t, e) {
                    null == e && (e = !1), this._updateLayerStatus(t), this._clearProgressive(), this.eachBuildinLayer(a), this._doPaintList(t, e), this.eachBuildinLayer(o)
                }, _doPaintList: function (t, e) {
                    function i(t) {
                        var e = a.dpr || 1;
                        a.save(), a.globalAlpha = 1, a.shadowBlur = 0, n.__dirty = !0, a.setTransform(1, 0, 0, 1, 0, 0), a.drawImage(t.dom, 0, 0, u * e, c * e), a.restore()
                    }

                    for (var n, r, a, o, s, l, h = 0, u = this._width, c = this._height, p = this._progress, g = 0, v = t.length; g < v; g++) {
                        var m = t[g], x = this._singleCanvas ? 0 : m.zlevel, _ = m.__frame;
                        if (_ < 0 && s && (i(s), s = null), r !== x && (a && a.restore(), o = {}, r = x, n = this.getLayer(r), n.isBuildin || d("ZLevel " + r + " has been used by unkown layer " + n.id), a = n.ctx, a.save(), n.__unusedCount = 0, (n.__dirty || e) && n.clear()), n.__dirty || e) {
                            if (_ >= 0) {
                                if (!s) {
                                    if (s = this._progressiveLayers[Math.min(h++, y - 1)], s.ctx.save(), s.renderScope = {}, s && s.__progress > s.__maxProgress) {
                                        g = s.__nextIdxNotProg - 1;
                                        continue
                                    }
                                    l = s.__progress, s.__dirty || (p = l), s.__progress = p + 1
                                }
                                _ === p && this._doPaintEl(m, s, !0, s.renderScope)
                            } else this._doPaintEl(m, n, e, o);
                            m.__dirty = !1
                        }
                    }
                    s && i(s), a && a.restore(), this._furtherProgressive = !1, f.each(this._progressiveLayers, function (t) {
                        t.__maxProgress >= t.__progress && (this._furtherProgressive = !0)
                    }, this)
                }, _doPaintEl: function (t, e, i, n) {
                    var r = e.ctx, a = t.transform;
                    if ((e.__dirty || i) && !t.invisible && 0 !== t.style.opacity && (!a || a[0] || a[3]) && (!t.culling || !s(t, this._width, this._height))) {
                        var o = t.__clipPaths;
                        (n.prevClipLayer !== e || l(o, n.prevElClipPaths)) && (n.prevElClipPaths && (n.prevClipLayer.ctx.restore(), n.prevClipLayer = n.prevElClipPaths = null, n.prevEl = null), o && (r.save(), h(o, r), n.prevClipLayer = e, n.prevElClipPaths = o)), t.beforeBrush && t.beforeBrush(r), t.brush(r, n.prevEl || null), n.prevEl = t, t.afterBrush && t.afterBrush(r)
                    }
                }, getLayer: function (t) {
                    if (this._singleCanvas)return this._layers[0];
                    var e = this._layers[t];
                    return e || (e = new v("zr_" + t, this, this.dpr), e.isBuildin = !0, this._layerConfig[t] && f.merge(e, this._layerConfig[t], !0), this.insertLayer(t, e), e.initContext()), e
                }, insertLayer: function (t, e) {
                    var i = this._layers, n = this._zlevelList, a = n.length, o = null, s = -1, l = this._domRoot;
                    if (i[t])return void d("ZLevel " + t + " has been used already");
                    if (!r(e))return void d("Layer of zlevel " + t + " is not valid");
                    if (a > 0 && t > n[0]) {
                        for (s = 0; s < a - 1 && !(n[s] < t && n[s + 1] > t); s++);
                        o = i[n[s]]
                    }
                    if (n.splice(s + 1, 0, t), o) {
                        var h = o.dom;
                        h.nextSibling ? l.insertBefore(e.dom, h.nextSibling) : l.appendChild(e.dom)
                    } else l.firstChild ? l.insertBefore(e.dom, l.firstChild) : l.appendChild(e.dom);
                    i[t] = e
                }, eachLayer: function (t, e) {
                    var i, n, r = this._zlevelList;
                    for (n = 0; n < r.length; n++)i = r[n], t.call(e, this._layers[i], i)
                }, eachBuildinLayer: function (t, e) {
                    var i, n, r, a = this._zlevelList;
                    for (r = 0; r < a.length; r++)n = a[r], i = this._layers[n], i.isBuildin && t.call(e, i, n)
                }, eachOtherLayer: function (t, e) {
                    var i, n, r, a = this._zlevelList;
                    for (r = 0; r < a.length; r++)n = a[r], i = this._layers[n], i.isBuildin || t.call(e, i, n)
                }, getLayers: function () {
                    return this._layers
                }, _updateLayerStatus: function (t) {
                    var e = this._layers, i = this._progressiveLayers, n = {}, r = {};
                    this.eachBuildinLayer(function (t, e) {
                        n[e] = t.elCount, t.elCount = 0, t.__dirty = !1
                    }), f.each(i, function (t, e) {
                        r[e] = t.elCount, t.elCount = 0, t.__dirty = !1
                    });
                    for (var a, o, s = 0, l = 0, h = 0, u = t.length; h < u; h++) {
                        var c = t[h], d = this._singleCanvas ? 0 : c.zlevel, p = e[d], g = c.progressive;
                        if (p && (p.elCount++, p.__dirty = p.__dirty || c.__dirty), g >= 0) {
                            o !== g && (o = g, l++);
                            var m = c.__frame = l - 1;
                            if (!a) {
                                var x = Math.min(s, y - 1);
                                a = i[x], a || (a = i[x] = new v("progressive", this, this.dpr), a.initContext()), a.__maxProgress = 0
                            }
                            a.__dirty = a.__dirty || c.__dirty, a.elCount++, a.__maxProgress = Math.max(a.__maxProgress, m), a.__maxProgress >= a.__progress && (p.__dirty = !0)
                        } else c.__frame = -1, a && (a.__nextIdxNotProg = h, s++, a = null)
                    }
                    a && (s++, a.__nextIdxNotProg = h), this.eachBuildinLayer(function (t, e) {
                        n[e] !== t.elCount && (t.__dirty = !0)
                    }), i.length = Math.min(s, y), f.each(i, function (t, e) {
                        r[e] !== t.elCount && (c.__dirty = !0), t.__dirty && (t.__progress = 0)
                    })
                }, clear: function () {
                    return this.eachBuildinLayer(this._clearLayer), this
                }, _clearLayer: function (t) {
                    t.clear()
                }, configLayer: function (t, e) {
                    if (e) {
                        var i = this._layerConfig;
                        i[t] ? f.merge(i[t], e, !0) : i[t] = e;
                        var n = this._layers[t];
                        n && f.merge(n, i[t], !0)
                    }
                }, delLayer: function (t) {
                    var e = this._layers, i = this._zlevelList, n = e[t];
                    n && (n.dom.parentNode.removeChild(n.dom), delete e[t], i.splice(f.indexOf(i, t), 1))
                }, resize: function (t, e) {
                    var i = this._domRoot;
                    i.style.display = "none";
                    var n = this._opts;
                    if (null != t && (n.width = t), null != e && (n.height = e), t = this._getSize(0), e = this._getSize(1), i.style.display = "", this._width != t || e != this._height) {
                        i.style.width = t + "px", i.style.height = e + "px";
                        for (var r in this._layers)this._layers.hasOwnProperty(r) && this._layers[r].resize(t, e);
                        f.each(this._progressiveLayers, function (i) {
                            i.resize(t, e)
                        }), this.refresh(!0)
                    }
                    return this._width = t, this._height = e, this
                }, clearLayer: function (t) {
                    var e = this._layers[t];
                    e && e.clear()
                }, dispose: function () {
                    this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._layers = null
                }, getRenderedCanvas: function (t) {
                    if (t = t || {}, this._singleCanvas)return this._layers[0].dom;
                    var e = new v("image", this, t.pixelRatio || this.dpr);
                    e.initContext(), e.clearColor = t.backgroundColor, e.clear();
                    for (var i = this.storage.getDisplayList(!0), n = {}, r = 0; r < i.length; r++) {
                        var a = i[r];
                        this._doPaintEl(a, e, !0, n)
                    }
                    return e.dom
                }, getWidth: function () {
                    return this._width
                }, getHeight: function () {
                    return this._height
                }, _getSize: function (t) {
                    var e = this._opts, i = ["width", "height"][t], r = ["clientWidth", "clientHeight"][t], a = ["paddingLeft", "paddingTop"][t], o = ["paddingRight", "paddingBottom"][t];
                    if (null != e[i] && "auto" !== e[i])return parseFloat(e[i]);
                    var s = this.root, l = document.defaultView.getComputedStyle(s);
                    return (s[r] || n(l[i]) || n(s.style[i])) - (n(l[a]) || 0) - (n(l[o]) || 0) | 0
                }, _pathToImage: function (t, e, n, r, a) {
                    var o = document.createElement("canvas"), s = o.getContext("2d");
                    o.width = n * a, o.height = r * a, s.clearRect(0, 0, n * a, r * a);
                    var l = {position: e.position, rotation: e.rotation, scale: e.scale};
                    e.position = [0, 0, 0], e.rotation = 0, e.scale = [1, 1], e && e.brush(s);
                    var h = i(48), u = new h({id: t, style: {x: 0, y: 0, image: o}});
                    return null != l.position && (u.position = e.position = l.position), null != l.rotation && (u.rotation = e.rotation = l.rotation), null != l.scale && (u.scale = e.scale = l.scale), u
                }, _createPathToImage: function () {
                    var t = this;
                    return function (e, i, n, r) {
                        return t._pathToImage(e, i, n, r, t.dpr)
                    }
                }
            }, t.exports = b
        }, function (t, e, i) {
            "use strict";
            function n(t, e) {
                return t.zlevel === e.zlevel ? t.z === e.z ? t.z2 - e.z2 : t.z - e.z : t.zlevel - e.zlevel
            }

            var r = i(1), a = i(11), o = i(34), s = i(44), l = function () {
                this._elements = {}, this._roots = [], this._displayList = [], this._displayListLen = 0
            };
            l.prototype = {
                constructor: l, traverse: function (t, e) {
                    for (var i = 0; i < this._roots.length; i++)this._roots[i].traverse(t, e)
                }, getDisplayList: function (t, e) {
                    return e = e || !1, t && this.updateDisplayList(e), this._displayList
                }, updateDisplayList: function (t) {
                    this._displayListLen = 0;
                    for (var e = this._roots, i = this._displayList, r = 0, o = e.length; r < o; r++)this._updateAndAddDisplayable(e[r], null, t);
                    i.length = this._displayListLen, a.canvasSupported && s(i, n)
                }, _updateAndAddDisplayable: function (t, e, i) {
                    if (!t.ignore || i) {
                        t.beforeUpdate(), t.__dirty && t.update(), t.afterUpdate();
                        var n = t.clipPath;
                        if (n && (n.parent = t, n.updateTransform(), e ? (e = e.slice(), e.push(n)) : e = [n]), t.isGroup) {
                            for (var r = t._children, a = 0; a < r.length; a++) {
                                var o = r[a];
                                t.__dirty && (o.__dirty = !0), this._updateAndAddDisplayable(o, e, i)
                            }
                            t.__dirty = !1
                        } else t.__clipPaths = e, this._displayList[this._displayListLen++] = t
                    }
                }, addRoot: function (t) {
                    this._elements[t.id] || (t instanceof o && t.addChildrenToStorage(this), this.addToMap(t), this._roots.push(t))
                }, delRoot: function (t) {
                    if (null == t) {
                        for (var e = 0; e < this._roots.length; e++) {
                            var i = this._roots[e];
                            i instanceof o && i.delChildrenFromStorage(this)
                        }
                        return this._elements = {}, this._roots = [], this._displayList = [], void(this._displayListLen = 0)
                    }
                    if (t instanceof Array)for (var e = 0, n = t.length; e < n; e++)this.delRoot(t[e]); else {
                        var a;
                        a = "string" == typeof t ? this._elements[t] : t;
                        var s = r.indexOf(this._roots, a);
                        s >= 0 && (this.delFromMap(a.id), this._roots.splice(s, 1), a instanceof o && a.delChildrenFromStorage(this))
                    }
                }, addToMap: function (t) {
                    return t instanceof o && (t.__storage = this), t.dirty(!1), this._elements[t.id] = t, this
                }, get: function (t) {
                    return this._elements[t]
                }, delFromMap: function (t) {
                    var e = this._elements, i = e[t];
                    return i && (delete e[t], i instanceof o && (i.__storage = null)), this
                }, dispose: function () {
                    this._elements = this._renderList = this._roots = null
                }, displayableSortFunc: n
            }, t.exports = l
        }, function (t, e, i) {
            "use strict";
            var n = i(1), r = i(24).Dispatcher, a = i(60), o = i(59), s = function (t) {
                t = t || {}, this.stage = t.stage || {}, this.onframe = t.onframe || function () {
                    }, this._clips = [], this._running = !1, this._time, this._pausedTime, this._pauseStart, this._paused = !1, r.call(this)
            };
            s.prototype = {
                constructor: s, addClip: function (t) {
                    this._clips.push(t)
                }, addAnimator: function (t) {
                    t.animation = this;
                    for (var e = t.getClips(), i = 0; i < e.length; i++)this.addClip(e[i])
                }, removeClip: function (t) {
                    var e = n.indexOf(this._clips, t);
                    e >= 0 && this._clips.splice(e, 1)
                }, removeAnimator: function (t) {
                    for (var e = t.getClips(), i = 0; i < e.length; i++)this.removeClip(e[i]);
                    t.animation = null
                }, _update: function () {
                    for (var t = (new Date).getTime() - this._pausedTime, e = t - this._time, i = this._clips, n = i.length, r = [], a = [], o = 0; o < n; o++) {
                        var s = i[o], l = s.step(t);
                        l && (r.push(l), a.push(s))
                    }
                    for (var o = 0; o < n;)i[o]._needsRemove ? (i[o] = i[n - 1], i.pop(), n--) : o++;
                    n = r.length;
                    for (var o = 0; o < n; o++)a[o].fire(r[o]);
                    this._time = t, this.onframe(e), this.trigger("frame", e), this.stage.update && this.stage.update()
                }, _startLoop: function () {
                    function t() {
                        e._running && (a(t), !e._paused && e._update())
                    }

                    var e = this;
                    this._running = !0, a(t)
                }, start: function () {
                    this._time = (new Date).getTime(), this._pausedTime = 0, this._startLoop()
                }, stop: function () {
                    this._running = !1
                }, pause: function () {
                    this._paused || (this._pauseStart = (new Date).getTime(), this._paused = !0)
                }, resume: function () {
                    this._paused && (this._pausedTime += (new Date).getTime() - this._pauseStart, this._paused = !1)
                }, clear: function () {
                    this._clips = []
                }, animate: function (t, e) {
                    e = e || {};
                    var i = new o(t, e.loop, e.getter, e.setter);
                    return i
                }
            }, n.mixin(s, r), t.exports = s
        }, function (t, e, i) {
            function n(t) {
                this._target = t.target, this._life = t.life || 1e3, this._delay = t.delay || 0, this._initialized = !1, this.loop = null != t.loop && t.loop, this.gap = t.gap || 0, this.easing = t.easing || "Linear", this.onframe = t.onframe, this.ondestroy = t.ondestroy, this.onrestart = t.onrestart
            }

            var r = i(145);
            n.prototype = {
                constructor: n, step: function (t) {
                    this._initialized || (this._startTime = t + this._delay, this._initialized = !0);
                    var e = (t - this._startTime) / this._life;
                    if (!(e < 0)) {
                        e = Math.min(e, 1);
                        var i = this.easing, n = "string" == typeof i ? r[i] : i, a = "function" == typeof n ? n(e) : e;
                        return this.fire("frame", a), 1 == e ? this.loop ? (this.restart(t), "restart") : (this._needsRemove = !0, "destroy") : null
                    }
                }, restart: function (t) {
                    var e = (t - this._startTime) % this._life;
                    this._startTime = t - e + this.gap, this._needsRemove = !1
                }, fire: function (t, e) {
                    t = "on" + t, this[t] && this[t](this._target, e)
                }
            }, t.exports = n
        }, function (t, e) {
            var i = {
                linear: function (t) {
                    return t
                }, quadraticIn: function (t) {
                    return t * t
                }, quadraticOut: function (t) {
                    return t * (2 - t)
                }, quadraticInOut: function (t) {
                    return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
                }, cubicIn: function (t) {
                    return t * t * t
                }, cubicOut: function (t) {
                    return --t * t * t + 1
                }, cubicInOut: function (t) {
                    return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
                }, quarticIn: function (t) {
                    return t * t * t * t
                }, quarticOut: function (t) {
                    return 1 - --t * t * t * t
                }, quarticInOut: function (t) {
                    return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
                }, quinticIn: function (t) {
                    return t * t * t * t * t
                }, quinticOut: function (t) {
                    return --t * t * t * t * t + 1
                }, quinticInOut: function (t) {
                    return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
                }, sinusoidalIn: function (t) {
                    return 1 - Math.cos(t * Math.PI / 2)
                }, sinusoidalOut: function (t) {
                    return Math.sin(t * Math.PI / 2)
                }, sinusoidalInOut: function (t) {
                    return .5 * (1 - Math.cos(Math.PI * t))
                }, exponentialIn: function (t) {
                    return 0 === t ? 0 : Math.pow(1024, t - 1)
                }, exponentialOut: function (t) {
                    return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
                }, exponentialInOut: function (t) {
                    return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (-Math.pow(2, -10 * (t - 1)) + 2)
                }, circularIn: function (t) {
                    return 1 - Math.sqrt(1 - t * t)
                }, circularOut: function (t) {
                    return Math.sqrt(1 - --t * t)
                }, circularInOut: function (t) {
                    return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                }, elasticIn: function (t) {
                    var e, i = .1, n = .4;
                    return 0 === t ? 0 : 1 === t ? 1 : (!i || i < 1 ? (i = 1, e = n / 4) : e = n * Math.asin(1 / i) / (2 * Math.PI), -(i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n)))
                }, elasticOut: function (t) {
                    var e, i = .1, n = .4;
                    return 0 === t ? 0 : 1 === t ? 1 : (!i || i < 1 ? (i = 1, e = n / 4) : e = n * Math.asin(1 / i) / (2 * Math.PI), i * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1)
                }, elasticInOut: function (t) {
                    var e, i = .1, n = .4;
                    return 0 === t ? 0 : 1 === t ? 1 : (!i || i < 1 ? (i = 1, e = n / 4) : e = n * Math.asin(1 / i) / (2 * Math.PI), (t *= 2) < 1 ? -.5 * (i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n)) : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * .5 + 1)
                }, backIn: function (t) {
                    var e = 1.70158;
                    return t * t * ((e + 1) * t - e)
                }, backOut: function (t) {
                    var e = 1.70158;
                    return --t * t * ((e + 1) * t + e) + 1
                }, backInOut: function (t) {
                    var e = 2.5949095;
                    return (t *= 2) < 1 ? .5 * (t * t * ((e + 1) * t - e)) : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
                }, bounceIn: function (t) {
                    return 1 - i.bounceOut(1 - t)
                }, bounceOut: function (t) {
                    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                }, bounceInOut: function (t) {
                    return t < .5 ? .5 * i.bounceIn(2 * t) : .5 * i.bounceOut(2 * t - 1) + .5
                }
            };
            t.exports = i
        }, function (t, e, i) {
            var n = i(61).normalizeRadian, r = 2 * Math.PI;
            t.exports = {
                containStroke: function (t, e, i, a, o, s, l, h, u) {
                    if (0 === l)return !1;
                    var c = l;
                    h -= t, u -= e;
                    var f = Math.sqrt(h * h + u * u);
                    if (f - c > i || f + c < i)return !1;
                    if (Math.abs(a - o) % r < 1e-4)return !0;
                    if (s) {
                        var d = a;
                        a = n(o), o = n(d)
                    } else a = n(a), o = n(o);
                    a > o && (o += r);
                    var p = Math.atan2(u, h);
                    return p < 0 && (p += r), p >= a && p <= o || p + r >= a && p + r <= o
                }
            }
        }, function (t, e, i) {
            var n = i(17);
            t.exports = {
                containStroke: function (t, e, i, r, a, o, s, l, h, u, c) {
                    if (0 === h)return !1;
                    var f = h;
                    if (c > e + f && c > r + f && c > o + f && c > l + f || c < e - f && c < r - f && c < o - f && c < l - f || u > t + f && u > i + f && u > a + f && u > s + f || u < t - f && u < i - f && u < a - f && u < s - f)return !1;
                    var d = n.cubicProjectPoint(t, e, i, r, a, o, s, l, u, c, null);
                    return d <= f / 2
                }
            }
        }, function (t, e, i) {
            "use strict";
            function n(t, e) {
                return Math.abs(t - e) < x
            }

            function r() {
                var t = b[0];
                b[0] = b[1], b[1] = t
            }

            function a(t, e, i, n, a, o, s, l, h, u) {
                if (u > e && u > n && u > o && u > l || u < e && u < n && u < o && u < l)return 0;
                var c = g.cubicRootAt(e, n, o, l, u, _);
                if (0 === c)return 0;
                for (var f, d, p = 0, v = -1, m = 0; m < c; m++) {
                    var y = _[m], x = 0 === y || 1 === y ? .5 : 1, w = g.cubicAt(t, i, a, s, y);
                    w < h || (v < 0 && (v = g.cubicExtrema(e, n, o, l, b), b[1] < b[0] && v > 1 && r(), f = g.cubicAt(e, n, o, l, b[0]), v > 1 && (d = g.cubicAt(e, n, o, l, b[1]))), p += 2 == v ? y < b[0] ? f < e ? x : -x : y < b[1] ? d < f ? x : -x : l < d ? x : -x : y < b[0] ? f < e ? x : -x : l < f ? x : -x)
                }
                return p
            }

            function o(t, e, i, n, r, a, o, s) {
                if (s > e && s > n && s > a || s < e && s < n && s < a)return 0;
                var l = g.quadraticRootAt(e, n, a, s, _);
                if (0 === l)return 0;
                var h = g.quadraticExtremum(e, n, a);
                if (h >= 0 && h <= 1) {
                    for (var u = 0, c = g.quadraticAt(e, n, a, h), f = 0; f < l; f++) {
                        var d = 0 === _[f] || 1 === _[f] ? .5 : 1, p = g.quadraticAt(t, i, r, _[f]);
                        p < o || (u += _[f] < h ? c < e ? d : -d : a < c ? d : -d)
                    }
                    return u
                }
                var d = 0 === _[0] || 1 === _[0] ? .5 : 1, p = g.quadraticAt(t, i, r, _[0]);
                return p < o ? 0 : a < e ? d : -d
            }

            function s(t, e, i, n, r, a, o, s) {
                if (s -= e, s > i || s < -i)return 0;
                var l = Math.sqrt(i * i - s * s);
                _[0] = -l, _[1] = l;
                var h = Math.abs(n - r);
                if (h < 1e-4)return 0;
                if (h % y < 1e-4) {
                    n = 0, r = y;
                    var u = a ? 1 : -1;
                    return o >= _[0] + t && o <= _[1] + t ? u : 0
                }
                if (a) {
                    var l = n;
                    n = p(r), r = p(l)
                } else n = p(n), r = p(r);
                n > r && (r += y);
                for (var c = 0, f = 0; f < 2; f++) {
                    var d = _[f];
                    if (d + t > o) {
                        var g = Math.atan2(s, d), u = a ? 1 : -1;
                        g < 0 && (g = y + g), (g >= n && g <= r || g + y >= n && g + y <= r) && (g > Math.PI / 2 && g < 1.5 * Math.PI && (u = -u), c += u)
                    }
                }
                return c
            }

            function l(t, e, i, r, l) {
                for (var u = 0, p = 0, g = 0, y = 0, x = 0, _ = 0; _ < t.length;) {
                    var b = t[_++];
                    switch (b === h.M && _ > 1 && (i || (u += v(p, g, y, x, r, l))), 1 == _ && (p = t[_], g = t[_ + 1], y = p, x = g), b) {
                        case h.M:
                            y = t[_++], x = t[_++], p = y, g = x;
                            break;
                        case h.L:
                            if (i) {
                                if (m(p, g, t[_], t[_ + 1], e, r, l))return !0
                            } else u += v(p, g, t[_], t[_ + 1], r, l) || 0;
                            p = t[_++], g = t[_++];
                            break;
                        case h.C:
                            if (i) {
                                if (c.containStroke(p, g, t[_++], t[_++], t[_++], t[_++], t[_], t[_ + 1], e, r, l))return !0
                            } else u += a(p, g, t[_++], t[_++], t[_++], t[_++], t[_], t[_ + 1], r, l) || 0;
                            p = t[_++], g = t[_++];
                            break;
                        case h.Q:
                            if (i) {
                                if (f.containStroke(p, g, t[_++], t[_++], t[_], t[_ + 1], e, r, l))return !0
                            } else u += o(p, g, t[_++], t[_++], t[_], t[_ + 1], r, l) || 0;
                            p = t[_++], g = t[_++];
                            break;
                        case h.A:
                            var w = t[_++], M = t[_++], T = t[_++], S = t[_++], A = t[_++], I = t[_++], C = (t[_++], 1 - t[_++]), L = Math.cos(A) * T + w, k = Math.sin(A) * S + M;
                            _ > 1 ? u += v(p, g, L, k, r, l) : (y = L, x = k);
                            var P = (r - w) * S / T + w;
                            if (i) {
                                if (d.containStroke(w, M, S, A, A + I, C, e, P, l))return !0
                            } else u += s(w, M, S, A, A + I, C, P, l);
                            p = Math.cos(A + I) * T + w, g = Math.sin(A + I) * S + M;
                            break;
                        case h.R:
                            y = p = t[_++], x = g = t[_++];
                            var D = t[_++], O = t[_++], L = y + D, k = x + O;
                            if (i) {
                                if (m(y, x, L, x, e, r, l) || m(L, x, L, k, e, r, l) || m(L, k, y, k, e, r, l) || m(y, k, y, x, e, r, l))return !0
                            } else u += v(L, x, L, k, r, l), u += v(y, k, y, x, r, l);
                            break;
                        case h.Z:
                            if (i) {
                                if (m(p, g, y, x, e, r, l))return !0
                            } else u += v(p, g, y, x, r, l);
                            p = y, g = x
                    }
                }
                return i || n(g, x) || (u += v(p, g, y, x, r, l) || 0), 0 !== u
            }

            var h = i(28).CMD, u = i(84), c = i(147), f = i(85), d = i(146), p = i(61).normalizeRadian, g = i(17), v = i(86), m = u.containStroke, y = 2 * Math.PI, x = 1e-4, _ = [-1, -1, -1], b = [-1, -1];
            t.exports = {
                contain: function (t, e, i) {
                    return l(t, 0, !1, e, i)
                }, containStroke: function (t, e, i, n) {
                    return l(t, e, !0, i, n)
                }
            }
        }, function (t, e, i) {
            "use strict";
            function n(t) {
                var e = t[1][0] - t[0][0], i = t[1][1] - t[0][1];
                return Math.sqrt(e * e + i * i)
            }

            function r(t) {
                return [(t[0][0] + t[1][0]) / 2, (t[0][1] + t[1][1]) / 2]
            }

            var a = i(24), o = function () {
                this._track = []
            };
            o.prototype = {
                constructor: o, recognize: function (t, e, i) {
                    return this._doTrack(t, e, i), this._recognize(t)
                }, clear: function () {
                    return this._track.length = 0, this
                }, _doTrack: function (t, e, i) {
                    var n = t.touches;
                    if (n) {
                        for (var r = {points: [], touches: [], target: e, event: t}, o = 0, s = n.length; o < s; o++) {
                            var l = n[o], h = a.clientToLocal(i, l, {});
                            r.points.push([h.zrX, h.zrY]), r.touches.push(l)
                        }
                        this._track.push(r)
                    }
                }, _recognize: function (t) {
                    for (var e in s)if (s.hasOwnProperty(e)) {
                        var i = s[e](this._track, t);
                        if (i)return i
                    }
                }
            };
            var s = {
                pinch: function (t, e) {
                    var i = t.length;
                    if (i) {
                        var a = (t[i - 1] || {}).points, o = (t[i - 2] || {}).points || a;
                        if (o && o.length > 1 && a && a.length > 1) {
                            var s = n(a) / n(o);
                            !isFinite(s) && (s = 1), e.pinchScale = s;
                            var l = r(a);
                            return e.pinchX = l[0], e.pinchY = l[1], {type: "pinch", target: t[0].target, event: e}
                        }
                    }
                }
            };
            t.exports = o
        }, function (t, e) {
            var i = function () {
                this.head = null, this.tail = null, this._len = 0
            }, n = i.prototype;
            n.insert = function (t) {
                var e = new r(t);
                return this.insertEntry(e), e
            }, n.insertEntry = function (t) {
                this.head ? (this.tail.next = t, t.prev = this.tail, this.tail = t) : this.head = this.tail = t, this._len++
            }, n.remove = function (t) {
                var e = t.prev, i = t.next;
                e ? e.next = i : this.head = i, i ? i.prev = e : this.tail = e, t.next = t.prev = null, this._len--
            }, n.len = function () {
                return this._len
            };
            var r = function (t) {
                this.value = t, this.next, this.prev
            }, a = function (t) {
                this._list = new i, this._map = {}, this._maxSize = t || 10
            }, o = a.prototype;
            o.put = function (t, e) {
                var i = this._list, n = this._map;
                if (null == n[t]) {
                    var r = i.len();
                    if (r >= this._maxSize && r > 0) {
                        var a = i.head;
                        i.remove(a), delete n[a.key]
                    }
                    var o = i.insert(e);
                    o.key = t, n[t] = o
                }
            }, o.get = function (t) {
                var e = this._map[t], i = this._list;
                if (null != e)return e !== i.tail && (i.remove(e), i.insertEntry(e)), e.value
            }, o.clear = function () {
                this._list.clear(), this._map = {}
            }, t.exports = a
        }, function (t, e, i) {
            function n(t) {
                return "mousewheel" === t && f.browser.firefox ? "DOMMouseScroll" : t
            }

            function r(t, e, i) {
                var n = t._gestureMgr;
                "start" === i && n.clear();
                var r = n.recognize(e, t.handler.findHover(e.zrX, e.zrY, null), t.dom);
                if ("end" === i && n.clear(), r) {
                    var a = r.type;
                    e.gestureEvent = a, t.handler.dispatchToElement(r.target, a, r.event)
                }
            }

            function a(t) {
                t._touching = !0, clearTimeout(t._touchTimer), t._touchTimer = setTimeout(function () {
                    t._touching = !1
                }, 700)
            }

            function o() {
                return f.touchEventsSupported
            }

            function s(t) {
                function e(t, e) {
                    return function () {
                        if (!e._touching)return t.apply(e, arguments)
                    }
                }

                for (var i = 0; i < x.length; i++) {
                    var n = x[i];
                    t._handlers[n] = u.bind(_[n], t)
                }
                for (var i = 0; i < y.length; i++) {
                    var n = y[i];
                    t._handlers[n] = e(_[n], t)
                }
            }

            function l(t) {
                function e(e, i) {
                    u.each(e, function (e) {
                        p(t, n(e), i._handlers[e])
                    }, i)
                }

                c.call(this), this.dom = t, this._touching = !1, this._touchTimer, this._gestureMgr = new d, this._handlers = {}, s(this), o() && e(x, this), e(y, this)
            }

            var h = i(24), u = i(1), c = i(20), f = i(11), d = i(149), p = h.addEventListener, g = h.removeEventListener, v = h.normalizeEvent, m = 300, y = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"], x = ["touchstart", "touchend", "touchmove"], _ = {
                mousemove: function (t) {
                    t = v(this.dom, t), this.trigger("mousemove", t)
                }, mouseout: function (t) {
                    t = v(this.dom, t);
                    var e = t.toElement || t.relatedTarget;
                    if (e != this.dom)for (; e && 9 != e.nodeType;) {
                        if (e === this.dom)return;
                        e = e.parentNode
                    }
                    this.trigger("mouseout", t)
                }, touchstart: function (t) {
                    t = v(this.dom, t), this._lastTouchMoment = new Date, r(this, t, "start"), _.mousemove.call(this, t), _.mousedown.call(this, t), a(this)
                }, touchmove: function (t) {
                    t = v(this.dom, t), r(this, t, "change"), _.mousemove.call(this, t), a(this)
                }, touchend: function (t) {
                    t = v(this.dom, t), r(this, t, "end"), _.mouseup.call(this, t), +new Date - this._lastTouchMoment < m && _.click.call(this, t), a(this)
                }
            };
            u.each(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function (t) {
                _[t] = function (e) {
                    e = v(this.dom, e), this.trigger(t, e)
                }
            });
            var b = l.prototype;
            b.dispose = function () {
                for (var t = y.concat(x), e = 0; e < t.length; e++) {
                    var i = t[e];
                    g(this.dom, n(i), this._handlers[i])
                }
            }, b.setCursor = function (t) {
                this.dom.style.cursor = t || "default"
            }, u.mixin(l, c), t.exports = l
        }, function (t, e, i) {
            var n = i(6);
            t.exports = n.extend({
                type: "compound", shape: {paths: null}, _updatePathDirty: function () {
                    for (var t = this.__dirtyPath, e = this.shape.paths, i = 0; i < e.length; i++)t = t || e[i].__dirtyPath;
                    this.__dirtyPath = t, this.__dirty = this.__dirty || t
                }, beforeBrush: function () {
                    this._updatePathDirty();
                    for (var t = this.shape.paths || [], e = this.getGlobalScale(), i = 0; i < t.length; i++)t[i].path.setScale(e[0], e[1])
                }, buildPath: function (t, e) {
                    for (var i = e.paths || [], n = 0; n < i.length; n++)i[n].buildPath(t, i[n].shape, !0)
                }, afterBrush: function () {
                    for (var t = this.shape.paths, e = 0; e < t.length; e++)t[e].__dirtyPath = !1
                }, getBoundingRect: function () {
                    return this._updatePathDirty(), n.prototype.getBoundingRect.call(this)
                }
            })
        }, function (t, e, i) {
            "use strict";
            var n = i(1), r = i(29), a = function (t, e, i, n, a) {
                this.x = null == t ? .5 : t, this.y = null == e ? .5 : e, this.r = null == i ? .5 : i, this.type = "radial", this.global = a || !1, r.call(this, n)
            };
            a.prototype = {constructor: a}, n.inherits(a, r), t.exports = a
        }, function (t, e) {
            t.exports = {
                buildPath: function (t, e) {
                    var i, n, r, a, o = e.x, s = e.y, l = e.width, h = e.height, u = e.r;
                    l < 0 && (o += l, l = -l), h < 0 && (s += h, h = -h), "number" == typeof u ? i = n = r = a = u : u instanceof Array ? 1 === u.length ? i = n = r = a = u[0] : 2 === u.length ? (i = r = u[0], n = a = u[1]) : 3 === u.length ? (i = u[0], n = a = u[1], r = u[2]) : (i = u[0], n = u[1], r = u[2], a = u[3]) : i = n = r = a = 0;
                    var c;
                    i + n > l && (c = i + n, i *= l / c, n *= l / c), r + a > l && (c = r + a, r *= l / c, a *= l / c), n + r > h && (c = n + r, n *= h / c, r *= h / c), i + a > h && (c = i + a, i *= h / c, a *= h / c), t.moveTo(o + i, s), t.lineTo(o + l - n, s), 0 !== n && t.quadraticCurveTo(o + l, s, o + l, s + n), t.lineTo(o + l, s + h - r), 0 !== r && t.quadraticCurveTo(o + l, s + h, o + l - r, s + h), t.lineTo(o + a, s + h), 0 !== a && t.quadraticCurveTo(o, s + h, o, s + h - a), t.lineTo(o, s + i), 0 !== i && t.quadraticCurveTo(o, s, o + i, s)
                }
            }
        }, function (t, e, i) {
            var n = i(5), r = n.min, a = n.max, o = n.scale, s = n.distance, l = n.add;
            t.exports = function (t, e, i, h) {
                var u, c, f, d, p = [], g = [], v = [], m = [];
                if (h) {
                    f = [1 / 0, 1 / 0], d = [-(1 / 0), -(1 / 0)];
                    for (var y = 0, x = t.length; y < x; y++)r(f, f, t[y]), a(d, d, t[y]);
                    r(f, f, h[0]), a(d, d, h[1])
                }
                for (var y = 0, x = t.length; y < x; y++) {
                    var _ = t[y];
                    if (i)u = t[y ? y - 1 : x - 1], c = t[(y + 1) % x]; else {
                        if (0 === y || y === x - 1) {
                            p.push(n.clone(t[y]));
                            continue
                        }
                        u = t[y - 1], c = t[y + 1]
                    }
                    n.sub(g, c, u), o(g, g, e);
                    var b = s(_, u), w = s(_, c), M = b + w;
                    0 !== M && (b /= M, w /= M), o(v, g, -b), o(m, g, w);
                    var T = l([], _, v), S = l([], _, m);
                    h && (a(T, T, f), r(T, T, d), a(S, S, f), r(S, S, d)), p.push(T), p.push(S)
                }
                return i && p.push(p.shift()), p
            }
        }, function (t, e, i) {
            function n(t, e, i, n, r, a, o) {
                var s = .5 * (i - t), l = .5 * (n - e);
                return (2 * (e - i) + s + l) * o + (-3 * (e - i) - 2 * s - l) * a + s * r + e
            }

            var r = i(5);
            t.exports = function (t, e) {
                for (var i = t.length, a = [], o = 0, s = 1; s < i; s++)o += r.distance(t[s - 1], t[s]);
                var l = o / 2;
                l = l < i ? i : l;
                for (var s = 0; s < l; s++) {
                    var h, u, c, f = s / (l - 1) * (e ? i : i - 1), d = Math.floor(f), p = f - d, g = t[d % i];
                    e ? (h = t[(d - 1 + i) % i], u = t[(d + 1) % i], c = t[(d + 2) % i]) : (h = t[0 === d ? d : d - 1], u = t[d > i - 2 ? i - 1 : d + 1], c = t[d > i - 3 ? i - 1 : d + 2]);
                    var v = p * p, m = p * v;
                    a.push([n(h[0], g[0], u[0], c[0], p, v, m), n(h[1], g[1], u[1], c[1], p, v, m)])
                }
                return a
            }
        }, function (t, e, i) {
            t.exports = i(6).extend({
                type: "arc",
                shape: {cx: 0, cy: 0, r: 0, startAngle: 0, endAngle: 2 * Math.PI, clockwise: !0},
                style: {stroke: "#000", fill: null},
                buildPath: function (t, e) {
                    var i = e.cx, n = e.cy, r = Math.max(e.r, 0), a = e.startAngle, o = e.endAngle, s = e.clockwise, l = Math.cos(a), h = Math.sin(a);
                    t.moveTo(l * r + i, h * r + n), t.arc(i, n, r, a, o, !s)
                }
            })
        }, function (t, e, i) {
            "use strict";
            function n(t, e, i) {
                var n = t.cpx2, r = t.cpy2;
                return null === n || null === r ? [(i ? c : h)(t.x1, t.cpx1, t.cpx2, t.x2, e), (i ? c : h)(t.y1, t.cpy1, t.cpy2, t.y2, e)] : [(i ? u : l)(t.x1, t.cpx1, t.x2, e), (i ? u : l)(t.y1, t.cpy1, t.y2, e)]
            }

            var r = i(17), a = i(5), o = r.quadraticSubdivide, s = r.cubicSubdivide, l = r.quadraticAt, h = r.cubicAt, u = r.quadraticDerivativeAt, c = r.cubicDerivativeAt, f = [];
            t.exports = i(6).extend({
                type: "bezier-curve",
                shape: {x1: 0, y1: 0, x2: 0, y2: 0, cpx1: 0, cpy1: 0, percent: 1},
                style: {stroke: "#000", fill: null},
                buildPath: function (t, e) {
                    var i = e.x1, n = e.y1, r = e.x2, a = e.y2, l = e.cpx1, h = e.cpy1, u = e.cpx2, c = e.cpy2, d = e.percent;
                    0 !== d && (t.moveTo(i, n), null == u || null == c ? (d < 1 && (o(i, l, r, d, f), l = f[1], r = f[2], o(n, h, a, d, f), h = f[1], a = f[2]), t.quadraticCurveTo(l, h, r, a)) : (d < 1 && (s(i, l, u, r, d, f), l = f[1], u = f[2], r = f[3], s(n, h, c, a, d, f), h = f[1], c = f[2], a = f[3]), t.bezierCurveTo(l, h, u, c, r, a)))
                },
                pointAt: function (t) {
                    return n(this.shape, t, !1)
                },
                tangentAt: function (t) {
                    var e = n(this.shape, t, !0);
                    return a.normalize(e, e)
                }
            })
        }, function (t, e, i) {
            "use strict";
            t.exports = i(6).extend({
                type: "circle", shape: {cx: 0, cy: 0, r: 0}, buildPath: function (t, e, i) {
                    i && t.moveTo(e.cx + e.r, e.cy), t.arc(e.cx, e.cy, e.r, 0, 2 * Math.PI, !0)
                }
            })
        }, function (t, e, i) {
            t.exports = i(6).extend({
                type: "line",
                shape: {x1: 0, y1: 0, x2: 0, y2: 0, percent: 1},
                style: {stroke: "#000", fill: null},
                buildPath: function (t, e) {
                    var i = e.x1, n = e.y1, r = e.x2, a = e.y2, o = e.percent;
                    0 !== o && (t.moveTo(i, n), o < 1 && (r = i * (1 - o) + r * o, a = n * (1 - o) + a * o), t.lineTo(r, a))
                },
                pointAt: function (t) {
                    var e = this.shape;
                    return [e.x1 * (1 - t) + e.x2 * t, e.y1 * (1 - t) + e.y2 * t]
                }
            })
        }, function (t, e, i) {
            var n = i(65);
            t.exports = i(6).extend({
                type: "polygon",
                shape: {points: null, smooth: !1, smoothConstraint: null},
                buildPath: function (t, e) {
                    n.buildPath(t, e, !0)
                }
            })
        }, function (t, e, i) {
            var n = i(65);
            t.exports = i(6).extend({
                type: "polyline",
                shape: {points: null, smooth: !1, smoothConstraint: null},
                style: {stroke: "#000", fill: null},
                buildPath: function (t, e) {
                    n.buildPath(t, e, !1)
                }
            })
        }, function (t, e, i) {
            var n = i(154);
            t.exports = i(6).extend({
                type: "rect",
                shape: {r: 0, x: 0, y: 0, width: 0, height: 0},
                buildPath: function (t, e) {
                    var i = e.x, r = e.y, a = e.width, o = e.height;
                    e.r ? n.buildPath(t, e) : t.rect(i, r, a, o), t.closePath()
                }
            })
        }, function (t, e, i) {
            t.exports = i(6).extend({
                type: "ring", shape: {cx: 0, cy: 0, r: 0, r0: 0}, buildPath: function (t, e) {
                    var i = e.cx, n = e.cy, r = 2 * Math.PI;
                    t.moveTo(i + e.r, n), t.arc(i, n, e.r, 0, r, !1), t.moveTo(i + e.r0, n), t.arc(i, n, e.r0, 0, r, !0)
                }
            })
        }, function (t, e, i) {
            t.exports = i(6).extend({
                type: "sector",
                shape: {cx: 0, cy: 0, r0: 0, r: 0, startAngle: 0, endAngle: 2 * Math.PI, clockwise: !0},
                buildPath: function (t, e) {
                    var i = e.cx, n = e.cy, r = Math.max(e.r0 || 0, 0), a = Math.max(e.r, 0), o = e.startAngle, s = e.endAngle, l = e.clockwise, h = Math.cos(o), u = Math.sin(o);
                    t.moveTo(h * r + i, u * r + n), t.lineTo(h * a + i, u * a + n), t.arc(i, n, a, o, s, !l), t.lineTo(Math.cos(s) * r + i, Math.sin(s) * r + n), 0 !== r && t.arc(i, n, r, s, o, l), t.closePath()
                }
            })
        }, function (t, e, i) {
            "use strict";
            var n = i(59), r = i(1), a = r.isString, o = r.isFunction, s = r.isObject, l = i(47), h = function () {
                this.animators = []
            };
            h.prototype = {
                constructor: h, animate: function (t, e) {
                    var i, a = !1, o = this, s = this.__zr;
                    if (t) {
                        var h = t.split("."), u = o;
                        a = "shape" === h[0];
                        for (var c = 0, f = h.length; c < f; c++)u && (u = u[h[c]]);
                        u && (i = u)
                    } else i = o;
                    if (!i)return void l('Property "' + t + '" is not existed in element ' + o.id);
                    var d = o.animators, p = new n(i, e);
                    return p.during(function (t) {
                        o.dirty(a)
                    }).done(function () {
                        d.splice(r.indexOf(d, p), 1)
                    }), d.push(p), s && s.animation.addAnimator(p), p
                }, stopAnimation: function (t) {
                    for (var e = this.animators, i = e.length, n = 0; n < i; n++)e[n].stop(t);
                    return e.length = 0, this
                }, animateTo: function (t, e, i, n, r) {
                    function s() {
                        h--, h || r && r()
                    }

                    a(i) ? (r = n, n = i, i = 0) : o(n) ? (r = n, n = "linear", i = 0) : o(i) ? (r = i, i = 0) : o(e) ? (r = e, e = 500) : e || (e = 500), this.stopAnimation(), this._animateToShallow("", this, t, e, i, n, r);
                    var l = this.animators.slice(), h = l.length;
                    h || r && r();
                    for (var u = 0; u < l.length; u++)l[u].done(s).start(n)
                }, _animateToShallow: function (t, e, i, n, a) {
                    var o = {}, l = 0;
                    for (var h in i)if (i.hasOwnProperty(h))if (null != e[h])s(i[h]) && !r.isArrayLike(i[h]) ? this._animateToShallow(t ? t + "." + h : h, e[h], i[h], n, a) : (o[h] = i[h], l++); else if (null != i[h])if (t) {
                        var u = {};
                        u[t] = {}, u[t][h] = i[h], this.attr(u)
                    } else this.attr(h, i[h]);
                    return l > 0 && this.animate(t, !1).when(null == n ? 500 : n, o).delay(a || 0), this
                }
            }, t.exports = h
        }, function (t, e) {
            function i() {
                this.on("mousedown", this._dragStart, this), this.on("mousemove", this._drag, this), this.on("mouseup", this._dragEnd, this), this.on("globalout", this._dragEnd, this)
            }

            i.prototype = {
                constructor: i, _dragStart: function (t) {
                    var e = t.target;
                    e && e.draggable && (this._draggingTarget = e, e.dragging = !0, this._x = t.offsetX, this._y = t.offsetY, this.dispatchToElement(e, "dragstart", t.event))
                }, _drag: function (t) {
                    var e = this._draggingTarget;
                    if (e) {
                        var i = t.offsetX, n = t.offsetY, r = i - this._x, a = n - this._y;
                        this._x = i, this._y = n, e.drift(r, a, t), this.dispatchToElement(e, "drag", t.event);
                        var o = this.findHover(i, n, e), s = this._dropTarget;
                        this._dropTarget = o, e !== o && (s && o !== s && this.dispatchToElement(s, "dragleave", t.event), o && o !== s && this.dispatchToElement(o, "dragenter", t.event))
                    }
                }, _dragEnd: function (t) {
                    var e = this._draggingTarget;
                    e && (e.dragging = !1), this.dispatchToElement(e, "dragend", t.event), this._dropTarget && this.dispatchToElement(this._dropTarget, "drop", t.event), this._draggingTarget = null, this._dropTarget = null
                }
            }, t.exports = i
        }, function (t, e, i) {
            function n(t, e, i, n, r, a, o, s, l, h, u) {
                var g = l * (p / 180), y = d(g) * (t - i) / 2 + f(g) * (e - n) / 2, x = -1 * f(g) * (t - i) / 2 + d(g) * (e - n) / 2, _ = y * y / (o * o) + x * x / (s * s);
                _ > 1 && (o *= c(_), s *= c(_));
                var b = (r === a ? -1 : 1) * c((o * o * (s * s) - o * o * (x * x) - s * s * (y * y)) / (o * o * (x * x) + s * s * (y * y))) || 0, w = b * o * x / s, M = b * -s * y / o, T = (t + i) / 2 + d(g) * w - f(g) * M, S = (e + n) / 2 + f(g) * w + d(g) * M, A = m([1, 0], [(y - w) / o, (x - M) / s]), I = [(y - w) / o, (x - M) / s], C = [(-1 * y - w) / o, (-1 * x - M) / s], L = m(I, C);
                v(I, C) <= -1 && (L = p), v(I, C) >= 1 && (L = 0), 0 === a && L > 0 && (L -= 2 * p), 1 === a && L < 0 && (L += 2 * p), u.addData(h, T, S, o, s, A, L, g, a)
            }

            function r(t) {
                if (!t)return [];
                var e, i = t.replace(/-/g, " -").replace(/  /g, " ").replace(/ /g, ",").replace(/,,/g, ",");
                for (e = 0; e < u.length; e++)i = i.replace(new RegExp(u[e], "g"), "|" + u[e]);
                var r, a = i.split("|"), o = 0, l = 0, h = new s, c = s.CMD;
                for (e = 1; e < a.length; e++) {
                    var f, d = a[e], p = d.charAt(0), g = 0, v = d.slice(1).replace(/e,-/g, "e-").split(",");
                    v.length > 0 && "" === v[0] && v.shift();
                    for (var m = 0; m < v.length; m++)v[m] = parseFloat(v[m]);
                    for (; g < v.length && !isNaN(v[g]) && !isNaN(v[0]);) {
                        var y, x, _, b, w, M, T, S = o, A = l;
                        switch (p) {
                            case"l":
                                o += v[g++], l += v[g++], f = c.L, h.addData(f, o, l);
                                break;
                            case"L":
                                o = v[g++], l = v[g++], f = c.L, h.addData(f, o, l);
                                break;
                            case"m":
                                o += v[g++], l += v[g++], f = c.M, h.addData(f, o, l), p = "l";
                                break;
                            case"M":
                                o = v[g++], l = v[g++], f = c.M, h.addData(f, o, l), p = "L";
                                break;
                            case"h":
                                o += v[g++], f = c.L, h.addData(f, o, l);
                                break;
                            case"H":
                                o = v[g++], f = c.L, h.addData(f, o, l);
                                break;
                            case"v":
                                l += v[g++], f = c.L, h.addData(f, o, l);
                                break;
                            case"V":
                                l = v[g++], f = c.L, h.addData(f, o, l);
                                break;
                            case"C":
                                f = c.C, h.addData(f, v[g++], v[g++], v[g++], v[g++], v[g++], v[g++]), o = v[g - 2], l = v[g - 1];
                                break;
                            case"c":
                                f = c.C, h.addData(f, v[g++] + o, v[g++] + l, v[g++] + o, v[g++] + l, v[g++] + o, v[g++] + l), o += v[g - 2], l += v[g - 1];
                                break;
                            case"S":
                                y = o, x = l;
                                var I = h.len(), C = h.data;
                                r === c.C && (y += o - C[I - 4],
                                    x += l - C[I - 3]), f = c.C, S = v[g++], A = v[g++], o = v[g++], l = v[g++], h.addData(f, y, x, S, A, o, l);
                                break;
                            case"s":
                                y = o, x = l;
                                var I = h.len(), C = h.data;
                                r === c.C && (y += o - C[I - 4], x += l - C[I - 3]), f = c.C, S = o + v[g++], A = l + v[g++], o += v[g++], l += v[g++], h.addData(f, y, x, S, A, o, l);
                                break;
                            case"Q":
                                S = v[g++], A = v[g++], o = v[g++], l = v[g++], f = c.Q, h.addData(f, S, A, o, l);
                                break;
                            case"q":
                                S = v[g++] + o, A = v[g++] + l, o += v[g++], l += v[g++], f = c.Q, h.addData(f, S, A, o, l);
                                break;
                            case"T":
                                y = o, x = l;
                                var I = h.len(), C = h.data;
                                r === c.Q && (y += o - C[I - 4], x += l - C[I - 3]), o = v[g++], l = v[g++], f = c.Q, h.addData(f, y, x, o, l);
                                break;
                            case"t":
                                y = o, x = l;
                                var I = h.len(), C = h.data;
                                r === c.Q && (y += o - C[I - 4], x += l - C[I - 3]), o += v[g++], l += v[g++], f = c.Q, h.addData(f, y, x, o, l);
                                break;
                            case"A":
                                _ = v[g++], b = v[g++], w = v[g++], M = v[g++], T = v[g++], S = o, A = l, o = v[g++], l = v[g++], f = c.A, n(S, A, o, l, M, T, _, b, w, f, h);
                                break;
                            case"a":
                                _ = v[g++], b = v[g++], w = v[g++], M = v[g++], T = v[g++], S = o, A = l, o += v[g++], l += v[g++], f = c.A, n(S, A, o, l, M, T, _, b, w, f, h)
                        }
                    }
                    "z" !== p && "Z" !== p || (f = c.Z, h.addData(f)), r = f
                }
                return h.toStatic(), h
            }

            function a(t, e) {
                var i, n = r(t);
                return e = e || {}, e.buildPath = function (t) {
                    t.setData(n.data), i && l(t, i);
                    var e = t.getContext();
                    e && t.rebuildPath(e)
                }, e.applyTransform = function (t) {
                    i || (i = h.create()), h.mul(i, t, i), this.dirty(!0)
                }, e
            }

            var o = i(6), s = i(28), l = i(169), h = i(19), u = ["m", "M", "l", "L", "v", "V", "h", "H", "z", "Z", "c", "C", "q", "Q", "t", "T", "s", "S", "a", "A"], c = Math.sqrt, f = Math.sin, d = Math.cos, p = Math.PI, g = function (t) {
                return Math.sqrt(t[0] * t[0] + t[1] * t[1])
            }, v = function (t, e) {
                return (t[0] * e[0] + t[1] * e[1]) / (g(t) * g(e))
            }, m = function (t, e) {
                return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(v(t, e))
            };
            t.exports = {
                createFromString: function (t, e) {
                    return new o(a(t, e))
                }, extendFromString: function (t, e) {
                    return o.extend(a(t, e))
                }, mergePath: function (t, e) {
                    for (var i = [], n = t.length, r = 0; r < n; r++) {
                        var a = t[r];
                        a.__dirty && a.buildPath(a.path, a.shape, !0), i.push(a.path)
                    }
                    var s = new o(e);
                    return s.buildPath = function (t) {
                        t.appendPath(i);
                        var e = t.getContext();
                        e && t.rebuildPath(e)
                    }, s
                }
            }
        }, function (t, e, i) {
            function n(t, e) {
                var i, n, a, u, c, f, d = t.data, p = r.M, g = r.C, v = r.L, m = r.R, y = r.A, x = r.Q;
                for (a = 0, u = 0; a < d.length;) {
                    switch (i = d[a++], u = a, n = 0, i) {
                        case p:
                            n = 1;
                            break;
                        case v:
                            n = 1;
                            break;
                        case g:
                            n = 3;
                            break;
                        case x:
                            n = 2;
                            break;
                        case y:
                            var _ = e[4], b = e[5], w = l(e[0] * e[0] + e[1] * e[1]), M = l(e[2] * e[2] + e[3] * e[3]), T = h(-e[1] / M, e[0] / w);
                            d[a++] += _, d[a++] += b, d[a++] *= w, d[a++] *= M, d[a++] += T, d[a++] += T, a += 2, u = a;
                            break;
                        case m:
                            f[0] = d[a++], f[1] = d[a++], o(f, f, e), d[u++] = f[0], d[u++] = f[1], f[0] += d[a++], f[1] += d[a++], o(f, f, e), d[u++] = f[0], d[u++] = f[1]
                    }
                    for (c = 0; c < n; c++) {
                        var f = s[c];
                        f[0] = d[a++], f[1] = d[a++], o(f, f, e), d[u++] = f[0], d[u++] = f[1]
                    }
                }
            }

            var r = i(28).CMD, a = i(5), o = a.applyTransform, s = [[], [], []], l = Math.sqrt, h = Math.atan2;
            t.exports = n
        }])
    });
    exports('echarts_simple');
})