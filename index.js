/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
  var B_ = Object.create;
  var Qr = Object.defineProperty;
  var W_ = Object.getOwnPropertyDescriptor;
  var j_ = Object.getOwnPropertyNames;
  var k_ = Object.getPrototypeOf,
    z_ = Object.prototype.hasOwnProperty;
  var K_ = ((e) =>
    typeof require < "u"
      ? require
      : typeof Proxy < "u"
      ? new Proxy(e, { get: (t, r) => (typeof require < "u" ? require : t)[r] })
      : e)(function (e) {
    if (typeof require < "u") return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + e + '" is not supported');
  });
  var re = (e, t) => () => (e && (t = e((e = 0))), t);
  var u = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
    be = (e, t) => {
      for (var r in t) Qr(e, r, { get: t[r], enumerable: !0 });
    },
    xs = (e, t, r, n) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let i of j_(t))
          !z_.call(e, i) &&
            i !== r &&
            Qr(e, i, {
              get: () => t[i],
              enumerable: !(n = W_(t, i)) || n.enumerable,
            });
      return e;
    };
  var Y = (e, t, r) => (
      (r = e != null ? B_(k_(e)) : {}),
      xs(
        t || !e || !e.__esModule
          ? Qr(r, "default", { value: e, enumerable: !0 })
          : r,
        e
      )
    ),
    He = (e) => xs(Qr({}, "__esModule", { value: !0 }), e);
  var Oi = u(() => {
    "use strict";
    window.tram = (function (e) {
      function t(l, h) {
        var v = new he.Bare();
        return v.init(l, h);
      }
      function r(l) {
        return l.replace(/[A-Z]/g, function (h) {
          return "-" + h.toLowerCase();
        });
      }
      function n(l) {
        var h = parseInt(l.slice(1), 16),
          v = (h >> 16) & 255,
          I = (h >> 8) & 255,
          w = 255 & h;
        return [v, I, w];
      }
      function i(l, h, v) {
        return (
          "#" + ((1 << 24) | (l << 16) | (h << 8) | v).toString(16).slice(1)
        );
      }
      function o() {}
      function a(l, h) {
        f("Type warning: Expected: [" + l + "] Got: [" + typeof h + "] " + h);
      }
      function s(l, h, v) {
        f("Units do not match [" + l + "]: " + h + ", " + v);
      }
      function c(l, h, v) {
        if ((h !== void 0 && (v = h), l === void 0)) return v;
        var I = v;
        return (
          V_.test(l) || !Ss.test(l)
            ? (I = parseInt(l, 10))
            : Ss.test(l) && (I = 1e3 * parseFloat(l)),
          0 > I && (I = 0),
          I === I ? I : v
        );
      }
      function f(l) {
        Ie.debug && window && window.console.warn(l);
      }
      function p(l) {
        for (var h = -1, v = l ? l.length : 0, I = []; ++h < v; ) {
          var w = l[h];
          w && I.push(w);
        }
        return I;
      }
      var d = (function (l, h, v) {
          function I(H) {
            return typeof H == "object";
          }
          function w(H) {
            return typeof H == "function";
          }
          function O() {}
          function V(H, te) {
            function P() {
              var ve = new z();
              return w(ve.init) && ve.init.apply(ve, arguments), ve;
            }
            function z() {}
            te === v && ((te = H), (H = Object)), (P.Bare = z);
            var K,
              ae = (O[l] = H[l]),
              Xe = (z[l] = P[l] = new O());
            return (
              (Xe.constructor = P),
              (P.mixin = function (ve) {
                return (z[l] = P[l] = V(P, ve)[l]), P;
              }),
              (P.open = function (ve) {
                if (
                  ((K = {}),
                  w(ve) ? (K = ve.call(P, Xe, ae, P, H)) : I(ve) && (K = ve),
                  I(K))
                )
                  for (var ur in K) h.call(K, ur) && (Xe[ur] = K[ur]);
                return w(Xe.init) || (Xe.init = H), P;
              }),
              P.open(te)
            );
          }
          return V;
        })("prototype", {}.hasOwnProperty),
        g = {
          ease: [
            "ease",
            function (l, h, v, I) {
              var w = (l /= I) * l,
                O = w * l;
              return (
                h +
                v * (-2.75 * O * w + 11 * w * w + -15.5 * O + 8 * w + 0.25 * l)
              );
            },
          ],
          "ease-in": [
            "ease-in",
            function (l, h, v, I) {
              var w = (l /= I) * l,
                O = w * l;
              return h + v * (-1 * O * w + 3 * w * w + -3 * O + 2 * w);
            },
          ],
          "ease-out": [
            "ease-out",
            function (l, h, v, I) {
              var w = (l /= I) * l,
                O = w * l;
              return (
                h +
                v * (0.3 * O * w + -1.6 * w * w + 2.2 * O + -1.8 * w + 1.9 * l)
              );
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (l, h, v, I) {
              var w = (l /= I) * l,
                O = w * l;
              return h + v * (2 * O * w + -5 * w * w + 2 * O + 2 * w);
            },
          ],
          linear: [
            "linear",
            function (l, h, v, I) {
              return (v * l) / I + h;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (l, h, v, I) {
              return v * (l /= I) * l + h;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (l, h, v, I) {
              return -v * (l /= I) * (l - 2) + h;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (l, h, v, I) {
              return (l /= I / 2) < 1
                ? (v / 2) * l * l + h
                : (-v / 2) * (--l * (l - 2) - 1) + h;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (l, h, v, I) {
              return v * (l /= I) * l * l + h;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (l, h, v, I) {
              return v * ((l = l / I - 1) * l * l + 1) + h;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (l, h, v, I) {
              return (l /= I / 2) < 1
                ? (v / 2) * l * l * l + h
                : (v / 2) * ((l -= 2) * l * l + 2) + h;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (l, h, v, I) {
              return v * (l /= I) * l * l * l + h;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (l, h, v, I) {
              return -v * ((l = l / I - 1) * l * l * l - 1) + h;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (l, h, v, I) {
              return (l /= I / 2) < 1
                ? (v / 2) * l * l * l * l + h
                : (-v / 2) * ((l -= 2) * l * l * l - 2) + h;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (l, h, v, I) {
              return v * (l /= I) * l * l * l * l + h;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (l, h, v, I) {
              return v * ((l = l / I - 1) * l * l * l * l + 1) + h;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (l, h, v, I) {
              return (l /= I / 2) < 1
                ? (v / 2) * l * l * l * l * l + h
                : (v / 2) * ((l -= 2) * l * l * l * l + 2) + h;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (l, h, v, I) {
              return -v * Math.cos((l / I) * (Math.PI / 2)) + v + h;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (l, h, v, I) {
              return v * Math.sin((l / I) * (Math.PI / 2)) + h;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (l, h, v, I) {
              return (-v / 2) * (Math.cos((Math.PI * l) / I) - 1) + h;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (l, h, v, I) {
              return l === 0 ? h : v * Math.pow(2, 10 * (l / I - 1)) + h;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (l, h, v, I) {
              return l === I
                ? h + v
                : v * (-Math.pow(2, (-10 * l) / I) + 1) + h;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (l, h, v, I) {
              return l === 0
                ? h
                : l === I
                ? h + v
                : (l /= I / 2) < 1
                ? (v / 2) * Math.pow(2, 10 * (l - 1)) + h
                : (v / 2) * (-Math.pow(2, -10 * --l) + 2) + h;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (l, h, v, I) {
              return -v * (Math.sqrt(1 - (l /= I) * l) - 1) + h;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (l, h, v, I) {
              return v * Math.sqrt(1 - (l = l / I - 1) * l) + h;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (l, h, v, I) {
              return (l /= I / 2) < 1
                ? (-v / 2) * (Math.sqrt(1 - l * l) - 1) + h
                : (v / 2) * (Math.sqrt(1 - (l -= 2) * l) + 1) + h;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (l, h, v, I, w) {
              return (
                w === void 0 && (w = 1.70158),
                v * (l /= I) * l * ((w + 1) * l - w) + h
              );
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (l, h, v, I, w) {
              return (
                w === void 0 && (w = 1.70158),
                v * ((l = l / I - 1) * l * ((w + 1) * l + w) + 1) + h
              );
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (l, h, v, I, w) {
              return (
                w === void 0 && (w = 1.70158),
                (l /= I / 2) < 1
                  ? (v / 2) * l * l * (((w *= 1.525) + 1) * l - w) + h
                  : (v / 2) *
                      ((l -= 2) * l * (((w *= 1.525) + 1) * l + w) + 2) +
                    h
              );
            },
          ],
        },
        E = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        m = document,
        y = window,
        R = "bkwld-tram",
        b = /[\-\.0-9]/g,
        A = /[A-Z]/,
        T = "number",
        x = /^(rgb|#)/,
        C = /(em|cm|mm|in|pt|pc|px)$/,
        S = /(em|cm|mm|in|pt|pc|px|%)$/,
        M = /(deg|rad|turn)$/,
        D = "unitless",
        G = /(all|none) 0s ease 0s/,
        X = /^(width|height)$/,
        W = " ",
        L = m.createElement("a"),
        _ = ["Webkit", "Moz", "O", "ms"],
        N = ["-webkit-", "-moz-", "-o-", "-ms-"],
        F = function (l) {
          if (l in L.style) return { dom: l, css: l };
          var h,
            v,
            I = "",
            w = l.split("-");
          for (h = 0; h < w.length; h++)
            I += w[h].charAt(0).toUpperCase() + w[h].slice(1);
          for (h = 0; h < _.length; h++)
            if (((v = _[h] + I), v in L.style))
              return { dom: v, css: N[h] + l };
        },
        q = (t.support = {
          bind: Function.prototype.bind,
          transform: F("transform"),
          transition: F("transition"),
          backface: F("backface-visibility"),
          timing: F("transition-timing-function"),
        });
      if (q.transition) {
        var j = q.timing.dom;
        if (((L.style[j] = g["ease-in-back"][0]), !L.style[j]))
          for (var B in E) g[B][0] = E[B];
      }
      var J = (t.frame = (function () {
          var l =
            y.requestAnimationFrame ||
            y.webkitRequestAnimationFrame ||
            y.mozRequestAnimationFrame ||
            y.oRequestAnimationFrame ||
            y.msRequestAnimationFrame;
          return l && q.bind
            ? l.bind(y)
            : function (h) {
                y.setTimeout(h, 16);
              };
        })()),
        we = (t.now = (function () {
          var l = y.performance,
            h = l && (l.now || l.webkitNow || l.msNow || l.mozNow);
          return h && q.bind
            ? h.bind(l)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        ot = d(function (l) {
          function h(U, $) {
            var ie = p(("" + U).split(W)),
              Q = ie[0];
            $ = $ || {};
            var Ee = bi[Q];
            if (!Ee) return f("Unsupported property: " + Q);
            if (!$.weak || !this.props[Q]) {
              var Le = Ee[0],
                Te = this.props[Q];
              return (
                Te || (Te = this.props[Q] = new Le.Bare()),
                Te.init(this.$el, ie, Ee, $),
                Te
              );
            }
          }
          function v(U, $, ie) {
            if (U) {
              var Q = typeof U;
              if (
                ($ ||
                  (this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1)),
                Q == "number" && $)
              )
                return (
                  (this.timer = new $r({
                    duration: U,
                    context: this,
                    complete: O,
                  })),
                  void (this.active = !0)
                );
              if (Q == "string" && $) {
                switch (U) {
                  case "hide":
                    P.call(this);
                    break;
                  case "stop":
                    V.call(this);
                    break;
                  case "redraw":
                    z.call(this);
                    break;
                  default:
                    h.call(this, U, ie && ie[1]);
                }
                return O.call(this);
              }
              if (Q == "function") return void U.call(this, this);
              if (Q == "object") {
                var Ee = 0;
                Xe.call(
                  this,
                  U,
                  function (se, H_) {
                    se.span > Ee && (Ee = se.span), se.stop(), se.animate(H_);
                  },
                  function (se) {
                    "wait" in se && (Ee = c(se.wait, 0));
                  }
                ),
                  ae.call(this),
                  Ee > 0 &&
                    ((this.timer = new $r({ duration: Ee, context: this })),
                    (this.active = !0),
                    $ && (this.timer.complete = O));
                var Le = this,
                  Te = !1,
                  Yr = {};
                J(function () {
                  Xe.call(Le, U, function (se) {
                    se.active && ((Te = !0), (Yr[se.name] = se.nextStyle));
                  }),
                    Te && Le.$el.css(Yr);
                });
              }
            }
          }
          function I(U) {
            (U = c(U, 0)),
              this.active
                ? this.queue.push({ options: U })
                : ((this.timer = new $r({
                    duration: U,
                    context: this,
                    complete: O,
                  })),
                  (this.active = !0));
          }
          function w(U) {
            return this.active
              ? (this.queue.push({ options: U, args: arguments }),
                void (this.timer.complete = O))
              : f(
                  "No active transition timer. Use start() or wait() before then()."
                );
          }
          function O() {
            if (
              (this.timer && this.timer.destroy(),
              (this.active = !1),
              this.queue.length)
            ) {
              var U = this.queue.shift();
              v.call(this, U.options, !0, U.args);
            }
          }
          function V(U) {
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1);
            var $;
            typeof U == "string"
              ? (($ = {}), ($[U] = 1))
              : ($ = typeof U == "object" && U != null ? U : this.props),
              Xe.call(this, $, ve),
              ae.call(this);
          }
          function H(U) {
            V.call(this, U), Xe.call(this, U, ur, U_);
          }
          function te(U) {
            typeof U != "string" && (U = "block"), (this.el.style.display = U);
          }
          function P() {
            V.call(this), (this.el.style.display = "none");
          }
          function z() {
            this.el.offsetHeight;
          }
          function K() {
            V.call(this), e.removeData(this.el, R), (this.$el = this.el = null);
          }
          function ae() {
            var U,
              $,
              ie = [];
            this.upstream && ie.push(this.upstream);
            for (U in this.props)
              ($ = this.props[U]), $.active && ie.push($.string);
            (ie = ie.join(",")),
              this.style !== ie &&
                ((this.style = ie), (this.el.style[q.transition.dom] = ie));
          }
          function Xe(U, $, ie) {
            var Q,
              Ee,
              Le,
              Te,
              Yr = $ !== ve,
              se = {};
            for (Q in U)
              (Le = U[Q]),
                Q in at
                  ? (se.transform || (se.transform = {}),
                    (se.transform[Q] = Le))
                  : (A.test(Q) && (Q = r(Q)),
                    Q in bi ? (se[Q] = Le) : (Te || (Te = {}), (Te[Q] = Le)));
            for (Q in se) {
              if (((Le = se[Q]), (Ee = this.props[Q]), !Ee)) {
                if (!Yr) continue;
                Ee = h.call(this, Q);
              }
              $.call(this, Ee, Le);
            }
            ie && Te && ie.call(this, Te);
          }
          function ve(U) {
            U.stop();
          }
          function ur(U, $) {
            U.set($);
          }
          function U_(U) {
            this.$el.css(U);
          }
          function Ne(U, $) {
            l[U] = function () {
              return this.children
                ? X_.call(this, $, arguments)
                : (this.el && $.apply(this, arguments), this);
            };
          }
          function X_(U, $) {
            var ie,
              Q = this.children.length;
            for (ie = 0; Q > ie; ie++) U.apply(this.children[ie], $);
            return this;
          }
          (l.init = function (U) {
            if (
              ((this.$el = e(U)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ""),
              (this.active = !1),
              Ie.keepInherited && !Ie.fallback)
            ) {
              var $ = Os(this.el, "transition");
              $ && !G.test($) && (this.upstream = $);
            }
            q.backface &&
              Ie.hideBackface &&
              xt(this.el, q.backface.css, "hidden");
          }),
            Ne("add", h),
            Ne("start", v),
            Ne("wait", I),
            Ne("then", w),
            Ne("next", O),
            Ne("stop", V),
            Ne("set", H),
            Ne("show", te),
            Ne("hide", P),
            Ne("redraw", z),
            Ne("destroy", K);
        }),
        he = d(ot, function (l) {
          function h(v, I) {
            var w = e.data(v, R) || e.data(v, R, new ot.Bare());
            return w.el || w.init(v), I ? w.start(I) : w;
          }
          l.init = function (v, I) {
            var w = e(v);
            if (!w.length) return this;
            if (w.length === 1) return h(w[0], I);
            var O = [];
            return (
              w.each(function (V, H) {
                O.push(h(H, I));
              }),
              (this.children = O),
              this
            );
          };
        }),
        k = d(function (l) {
          function h() {
            var O = this.get();
            this.update("auto");
            var V = this.get();
            return this.update(O), V;
          }
          function v(O, V, H) {
            return V !== void 0 && (H = V), O in g ? O : H;
          }
          function I(O) {
            var V = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(O);
            return (V ? i(V[1], V[2], V[3]) : O).replace(
              /#(\w)(\w)(\w)$/,
              "#$1$1$2$2$3$3"
            );
          }
          var w = { duration: 500, ease: "ease", delay: 0 };
          (l.init = function (O, V, H, te) {
            (this.$el = O), (this.el = O[0]);
            var P = V[0];
            H[2] && (P = H[2]),
              As[P] && (P = As[P]),
              (this.name = P),
              (this.type = H[1]),
              (this.duration = c(V[1], this.duration, w.duration)),
              (this.ease = v(V[2], this.ease, w.ease)),
              (this.delay = c(V[3], this.delay, w.delay)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = X.test(this.name)),
              (this.unit = te.unit || this.unit || Ie.defaultUnit),
              (this.angle = te.angle || this.angle || Ie.defaultAngle),
              Ie.fallback || te.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    W +
                    this.duration +
                    "ms" +
                    (this.ease != "ease" ? W + g[this.ease][0] : "") +
                    (this.delay ? W + this.delay + "ms" : "")));
          }),
            (l.set = function (O) {
              (O = this.convert(O, this.type)), this.update(O), this.redraw();
            }),
            (l.transition = function (O) {
              (this.active = !0),
                (O = this.convert(O, this.type)),
                this.auto &&
                  (this.el.style[this.name] == "auto" &&
                    (this.update(this.get()), this.redraw()),
                  O == "auto" && (O = h.call(this))),
                (this.nextStyle = O);
            }),
            (l.fallback = function (O) {
              var V =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (O = this.convert(O, this.type)),
                this.auto &&
                  (V == "auto" && (V = this.convert(this.get(), this.type)),
                  O == "auto" && (O = h.call(this))),
                (this.tween = new sr({
                  from: V,
                  to: O,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (l.get = function () {
              return Os(this.el, this.name);
            }),
            (l.update = function (O) {
              xt(this.el, this.name, O);
            }),
            (l.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                (this.nextStyle = null),
                xt(this.el, this.name, this.get()));
              var O = this.tween;
              O && O.context && O.destroy();
            }),
            (l.convert = function (O, V) {
              if (O == "auto" && this.auto) return O;
              var H,
                te = typeof O == "number",
                P = typeof O == "string";
              switch (V) {
                case T:
                  if (te) return O;
                  if (P && O.replace(b, "") === "") return +O;
                  H = "number(unitless)";
                  break;
                case x:
                  if (P) {
                    if (O === "" && this.original) return this.original;
                    if (V.test(O))
                      return O.charAt(0) == "#" && O.length == 7 ? O : I(O);
                  }
                  H = "hex or rgb string";
                  break;
                case C:
                  if (te) return O + this.unit;
                  if (P && V.test(O)) return O;
                  H = "number(px) or string(unit)";
                  break;
                case S:
                  if (te) return O + this.unit;
                  if (P && V.test(O)) return O;
                  H = "number(px) or string(unit or %)";
                  break;
                case M:
                  if (te) return O + this.angle;
                  if (P && V.test(O)) return O;
                  H = "number(deg) or string(angle)";
                  break;
                case D:
                  if (te || (P && S.test(O))) return O;
                  H = "number(unitless) or string(unit or %)";
              }
              return a(H, O), O;
            }),
            (l.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        Ce = d(k, function (l, h) {
          l.init = function () {
            h.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), x));
          };
        }),
        ar = d(k, function (l, h) {
          (l.init = function () {
            h.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (l.get = function () {
              return this.$el[this.name]();
            }),
            (l.update = function (v) {
              this.$el[this.name](v);
            });
        }),
        Kr = d(k, function (l, h) {
          function v(I, w) {
            var O, V, H, te, P;
            for (O in I)
              (te = at[O]),
                (H = te[0]),
                (V = te[1] || O),
                (P = this.convert(I[O], H)),
                w.call(this, V, P, H);
          }
          (l.init = function () {
            h.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                at.perspective &&
                  Ie.perspective &&
                  ((this.current.perspective = Ie.perspective),
                  xt(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (l.set = function (I) {
              v.call(this, I, function (w, O) {
                this.current[w] = O;
              }),
                xt(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (l.transition = function (I) {
              var w = this.values(I);
              this.tween = new bs({
                current: this.current,
                values: w,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var O,
                V = {};
              for (O in this.current) V[O] = O in w ? w[O] : this.current[O];
              (this.active = !0), (this.nextStyle = this.style(V));
            }),
            (l.fallback = function (I) {
              var w = this.values(I);
              this.tween = new bs({
                current: this.current,
                values: w,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (l.update = function () {
              xt(this.el, this.name, this.style(this.current));
            }),
            (l.style = function (I) {
              var w,
                O = "";
              for (w in I) O += w + "(" + I[w] + ") ";
              return O;
            }),
            (l.values = function (I) {
              var w,
                O = {};
              return (
                v.call(this, I, function (V, H, te) {
                  (O[V] = H),
                    this.current[V] === void 0 &&
                      ((w = 0),
                      ~V.indexOf("scale") && (w = 1),
                      (this.current[V] = this.convert(w, te)));
                }),
                O
              );
            });
        }),
        sr = d(function (l) {
          function h(P) {
            H.push(P) === 1 && J(v);
          }
          function v() {
            var P,
              z,
              K,
              ae = H.length;
            if (ae)
              for (J(v), z = we(), P = ae; P--; ) (K = H[P]), K && K.render(z);
          }
          function I(P) {
            var z,
              K = e.inArray(P, H);
            K >= 0 &&
              ((z = H.slice(K + 1)),
              (H.length = K),
              z.length && (H = H.concat(z)));
          }
          function w(P) {
            return Math.round(P * te) / te;
          }
          function O(P, z, K) {
            return i(
              P[0] + K * (z[0] - P[0]),
              P[1] + K * (z[1] - P[1]),
              P[2] + K * (z[2] - P[2])
            );
          }
          var V = { ease: g.ease[1], from: 0, to: 1 };
          (l.init = function (P) {
            (this.duration = P.duration || 0), (this.delay = P.delay || 0);
            var z = P.ease || V.ease;
            g[z] && (z = g[z][1]),
              typeof z != "function" && (z = V.ease),
              (this.ease = z),
              (this.update = P.update || o),
              (this.complete = P.complete || o),
              (this.context = P.context || this),
              (this.name = P.name);
            var K = P.from,
              ae = P.to;
            K === void 0 && (K = V.from),
              ae === void 0 && (ae = V.to),
              (this.unit = P.unit || ""),
              typeof K == "number" && typeof ae == "number"
                ? ((this.begin = K), (this.change = ae - K))
                : this.format(ae, K),
              (this.value = this.begin + this.unit),
              (this.start = we()),
              P.autoplay !== !1 && this.play();
          }),
            (l.play = function () {
              this.active ||
                (this.start || (this.start = we()),
                (this.active = !0),
                h(this));
            }),
            (l.stop = function () {
              this.active && ((this.active = !1), I(this));
            }),
            (l.render = function (P) {
              var z,
                K = P - this.start;
              if (this.delay) {
                if (K <= this.delay) return;
                K -= this.delay;
              }
              if (K < this.duration) {
                var ae = this.ease(K, 0, 1, this.duration);
                return (
                  (z = this.startRGB
                    ? O(this.startRGB, this.endRGB, ae)
                    : w(this.begin + ae * this.change)),
                  (this.value = z + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              (z = this.endHex || this.begin + this.change),
                (this.value = z + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (l.format = function (P, z) {
              if (((z += ""), (P += ""), P.charAt(0) == "#"))
                return (
                  (this.startRGB = n(z)),
                  (this.endRGB = n(P)),
                  (this.endHex = P),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var K = z.replace(b, ""),
                  ae = P.replace(b, "");
                K !== ae && s("tween", z, P), (this.unit = K);
              }
              (z = parseFloat(z)),
                (P = parseFloat(P)),
                (this.begin = this.value = z),
                (this.change = P - z);
            }),
            (l.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = o);
            });
          var H = [],
            te = 1e3;
        }),
        $r = d(sr, function (l) {
          (l.init = function (h) {
            (this.duration = h.duration || 0),
              (this.complete = h.complete || o),
              (this.context = h.context),
              this.play();
          }),
            (l.render = function (h) {
              var v = h - this.start;
              v < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        bs = d(sr, function (l, h) {
          (l.init = function (v) {
            (this.context = v.context),
              (this.update = v.update),
              (this.tweens = []),
              (this.current = v.current);
            var I, w;
            for (I in v.values)
              (w = v.values[I]),
                this.current[I] !== w &&
                  this.tweens.push(
                    new sr({
                      name: I,
                      from: this.current[I],
                      to: w,
                      duration: v.duration,
                      delay: v.delay,
                      ease: v.ease,
                      autoplay: !1,
                    })
                  );
            this.play();
          }),
            (l.render = function (v) {
              var I,
                w,
                O = this.tweens.length,
                V = !1;
              for (I = O; I--; )
                (w = this.tweens[I]),
                  w.context &&
                    (w.render(v), (this.current[w.name] = w.value), (V = !0));
              return V
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (l.destroy = function () {
              if ((h.destroy.call(this), this.tweens)) {
                var v,
                  I = this.tweens.length;
                for (v = I; v--; ) this.tweens[v].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        Ie = (t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !q.transition,
          agentTests: [],
        });
      (t.fallback = function (l) {
        if (!q.transition) return (Ie.fallback = !0);
        Ie.agentTests.push("(" + l + ")");
        var h = new RegExp(Ie.agentTests.join("|"), "i");
        Ie.fallback = h.test(navigator.userAgent);
      }),
        t.fallback("6.0.[2-5] Safari"),
        (t.tween = function (l) {
          return new sr(l);
        }),
        (t.delay = function (l, h, v) {
          return new $r({ complete: h, duration: l, context: v });
        }),
        (e.fn.tram = function (l) {
          return t.call(null, this, l);
        });
      var xt = e.style,
        Os = e.css,
        As = { transform: q.transform && q.transform.css },
        bi = {
          color: [Ce, x],
          background: [Ce, x, "background-color"],
          "outline-color": [Ce, x],
          "border-color": [Ce, x],
          "border-top-color": [Ce, x],
          "border-right-color": [Ce, x],
          "border-bottom-color": [Ce, x],
          "border-left-color": [Ce, x],
          "border-width": [k, C],
          "border-top-width": [k, C],
          "border-right-width": [k, C],
          "border-bottom-width": [k, C],
          "border-left-width": [k, C],
          "border-spacing": [k, C],
          "letter-spacing": [k, C],
          margin: [k, C],
          "margin-top": [k, C],
          "margin-right": [k, C],
          "margin-bottom": [k, C],
          "margin-left": [k, C],
          padding: [k, C],
          "padding-top": [k, C],
          "padding-right": [k, C],
          "padding-bottom": [k, C],
          "padding-left": [k, C],
          "outline-width": [k, C],
          opacity: [k, T],
          top: [k, S],
          right: [k, S],
          bottom: [k, S],
          left: [k, S],
          "font-size": [k, S],
          "text-indent": [k, S],
          "word-spacing": [k, S],
          width: [k, S],
          "min-width": [k, S],
          "max-width": [k, S],
          height: [k, S],
          "min-height": [k, S],
          "max-height": [k, S],
          "line-height": [k, D],
          "scroll-top": [ar, T, "scrollTop"],
          "scroll-left": [ar, T, "scrollLeft"],
        },
        at = {};
      q.transform &&
        ((bi.transform = [Kr]),
        (at = {
          x: [S, "translateX"],
          y: [S, "translateY"],
          rotate: [M],
          rotateX: [M],
          rotateY: [M],
          scale: [T],
          scaleX: [T],
          scaleY: [T],
          skew: [M],
          skewX: [M],
          skewY: [M],
        })),
        q.transform &&
          q.backface &&
          ((at.z = [S, "translateZ"]),
          (at.rotateZ = [M]),
          (at.scaleZ = [T]),
          (at.perspective = [C]));
      var V_ = /ms/,
        Ss = /s|\./;
      return (e.tram = t);
    })(window.jQuery);
  });
  var Rs = u((FX, ws) => {
    "use strict";
    var $_ = window.$,
      Y_ = Oi() && $_.tram;
    ws.exports = (function () {
      var e = {};
      e.VERSION = "1.6.0-Webflow";
      var t = {},
        r = Array.prototype,
        n = Object.prototype,
        i = Function.prototype,
        o = r.push,
        a = r.slice,
        s = r.concat,
        c = n.toString,
        f = n.hasOwnProperty,
        p = r.forEach,
        d = r.map,
        g = r.reduce,
        E = r.reduceRight,
        m = r.filter,
        y = r.every,
        R = r.some,
        b = r.indexOf,
        A = r.lastIndexOf,
        T = Array.isArray,
        x = Object.keys,
        C = i.bind,
        S =
          (e.each =
          e.forEach =
            function (_, N, F) {
              if (_ == null) return _;
              if (p && _.forEach === p) _.forEach(N, F);
              else if (_.length === +_.length) {
                for (var q = 0, j = _.length; q < j; q++)
                  if (N.call(F, _[q], q, _) === t) return;
              } else
                for (var B = e.keys(_), q = 0, j = B.length; q < j; q++)
                  if (N.call(F, _[B[q]], B[q], _) === t) return;
              return _;
            });
      (e.map = e.collect =
        function (_, N, F) {
          var q = [];
          return _ == null
            ? q
            : d && _.map === d
            ? _.map(N, F)
            : (S(_, function (j, B, J) {
                q.push(N.call(F, j, B, J));
              }),
              q);
        }),
        (e.find = e.detect =
          function (_, N, F) {
            var q;
            return (
              M(_, function (j, B, J) {
                if (N.call(F, j, B, J)) return (q = j), !0;
              }),
              q
            );
          }),
        (e.filter = e.select =
          function (_, N, F) {
            var q = [];
            return _ == null
              ? q
              : m && _.filter === m
              ? _.filter(N, F)
              : (S(_, function (j, B, J) {
                  N.call(F, j, B, J) && q.push(j);
                }),
                q);
          });
      var M =
        (e.some =
        e.any =
          function (_, N, F) {
            N || (N = e.identity);
            var q = !1;
            return _ == null
              ? q
              : R && _.some === R
              ? _.some(N, F)
              : (S(_, function (j, B, J) {
                  if (q || (q = N.call(F, j, B, J))) return t;
                }),
                !!q);
          });
      (e.contains = e.include =
        function (_, N) {
          return _ == null
            ? !1
            : b && _.indexOf === b
            ? _.indexOf(N) != -1
            : M(_, function (F) {
                return F === N;
              });
        }),
        (e.delay = function (_, N) {
          var F = a.call(arguments, 2);
          return setTimeout(function () {
            return _.apply(null, F);
          }, N);
        }),
        (e.defer = function (_) {
          return e.delay.apply(e, [_, 1].concat(a.call(arguments, 1)));
        }),
        (e.throttle = function (_) {
          var N, F, q;
          return function () {
            N ||
              ((N = !0),
              (F = arguments),
              (q = this),
              Y_.frame(function () {
                (N = !1), _.apply(q, F);
              }));
          };
        }),
        (e.debounce = function (_, N, F) {
          var q,
            j,
            B,
            J,
            we,
            ot = function () {
              var he = e.now() - J;
              he < N
                ? (q = setTimeout(ot, N - he))
                : ((q = null), F || ((we = _.apply(B, j)), (B = j = null)));
            };
          return function () {
            (B = this), (j = arguments), (J = e.now());
            var he = F && !q;
            return (
              q || (q = setTimeout(ot, N)),
              he && ((we = _.apply(B, j)), (B = j = null)),
              we
            );
          };
        }),
        (e.defaults = function (_) {
          if (!e.isObject(_)) return _;
          for (var N = 1, F = arguments.length; N < F; N++) {
            var q = arguments[N];
            for (var j in q) _[j] === void 0 && (_[j] = q[j]);
          }
          return _;
        }),
        (e.keys = function (_) {
          if (!e.isObject(_)) return [];
          if (x) return x(_);
          var N = [];
          for (var F in _) e.has(_, F) && N.push(F);
          return N;
        }),
        (e.has = function (_, N) {
          return f.call(_, N);
        }),
        (e.isObject = function (_) {
          return _ === Object(_);
        }),
        (e.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (e.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var D = /(.)^/,
        G = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        X = /\\|'|\r|\n|\u2028|\u2029/g,
        W = function (_) {
          return "\\" + G[_];
        },
        L = /^\s*(\w|\$)+\s*$/;
      return (
        (e.template = function (_, N, F) {
          !N && F && (N = F), (N = e.defaults({}, N, e.templateSettings));
          var q = RegExp(
              [
                (N.escape || D).source,
                (N.interpolate || D).source,
                (N.evaluate || D).source,
              ].join("|") + "|$",
              "g"
            ),
            j = 0,
            B = "__p+='";
          _.replace(q, function (he, k, Ce, ar, Kr) {
            return (
              (B += _.slice(j, Kr).replace(X, W)),
              (j = Kr + he.length),
              k
                ? (B +=
                    `'+
((__t=(` +
                    k +
                    `))==null?'':_.escape(__t))+
'`)
                : Ce
                ? (B +=
                    `'+
((__t=(` +
                    Ce +
                    `))==null?'':__t)+
'`)
                : ar &&
                  (B +=
                    `';
` +
                    ar +
                    `
__p+='`),
              he
            );
          }),
            (B += `';
`);
          var J = N.variable;
          if (J) {
            if (!L.test(J))
              throw new Error("variable is not a bare identifier: " + J);
          } else
            (B =
              `with(obj||{}){
` +
              B +
              `}
`),
              (J = "obj");
          B =
            `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` +
            B +
            `return __p;
`;
          var we;
          try {
            we = new Function(N.variable || "obj", "_", B);
          } catch (he) {
            throw ((he.source = B), he);
          }
          var ot = function (he) {
            return we.call(this, he, e);
          };
          return (
            (ot.source =
              "function(" +
              J +
              `){
` +
              B +
              "}"),
            ot
          );
        }),
        e
      );
    })();
  });
  var We = u((GX, Fs) => {
    "use strict";
    var Z = {},
      wt = {},
      Rt = [],
      Si = window.Webflow || [],
      st = window.jQuery,
      qe = st(window),
      Q_ = st(document),
      Be = st.isFunction,
      Pe = (Z._ = Rs()),
      Ns = (Z.tram = Oi() && st.tram),
      Jr = !1,
      xi = !1;
    Ns.config.hideBackface = !1;
    Ns.config.keepInherited = !0;
    Z.define = function (e, t, r) {
      wt[e] && Ps(wt[e]);
      var n = (wt[e] = t(st, Pe, r) || {});
      return Ls(n), n;
    };
    Z.require = function (e) {
      return wt[e];
    };
    function Ls(e) {
      Z.env() &&
        (Be(e.design) && qe.on("__wf_design", e.design),
        Be(e.preview) && qe.on("__wf_preview", e.preview)),
        Be(e.destroy) && qe.on("__wf_destroy", e.destroy),
        e.ready && Be(e.ready) && Z_(e);
    }
    function Z_(e) {
      if (Jr) {
        e.ready();
        return;
      }
      Pe.contains(Rt, e.ready) || Rt.push(e.ready);
    }
    function Ps(e) {
      Be(e.design) && qe.off("__wf_design", e.design),
        Be(e.preview) && qe.off("__wf_preview", e.preview),
        Be(e.destroy) && qe.off("__wf_destroy", e.destroy),
        e.ready && Be(e.ready) && J_(e);
    }
    function J_(e) {
      Rt = Pe.filter(Rt, function (t) {
        return t !== e.ready;
      });
    }
    Z.push = function (e) {
      if (Jr) {
        Be(e) && e();
        return;
      }
      Si.push(e);
    };
    Z.env = function (e) {
      var t = window.__wf_design,
        r = typeof t < "u";
      if (!e) return r;
      if (e === "design") return r && t;
      if (e === "preview") return r && !t;
      if (e === "slug") return r && window.__wf_slug;
      if (e === "editor") return window.WebflowEditor;
      if (e === "test") return window.__wf_test;
      if (e === "frame") return window !== window.top;
    };
    var Zr = navigator.userAgent.toLowerCase(),
      qs = (Z.env.touch =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      eI = (Z.env.chrome =
        /chrome/.test(Zr) &&
        /Google/.test(navigator.vendor) &&
        parseInt(Zr.match(/chrome\/(\d+)\./)[1], 10)),
      tI = (Z.env.ios = /(ipod|iphone|ipad)/.test(Zr));
    Z.env.safari = /safari/.test(Zr) && !eI && !tI;
    var Ai;
    qs &&
      Q_.on("touchstart mousedown", function (e) {
        Ai = e.target;
      });
    Z.validClick = qs
      ? function (e) {
          return e === Ai || st.contains(e, Ai);
        }
      : function () {
          return !0;
        };
    var Ms = "resize.webflow orientationchange.webflow load.webflow",
      rI = "scroll.webflow " + Ms;
    Z.resize = wi(qe, Ms);
    Z.scroll = wi(qe, rI);
    Z.redraw = wi();
    function wi(e, t) {
      var r = [],
        n = {};
      return (
        (n.up = Pe.throttle(function (i) {
          Pe.each(r, function (o) {
            o(i);
          });
        })),
        e && t && e.on(t, n.up),
        (n.on = function (i) {
          typeof i == "function" && (Pe.contains(r, i) || r.push(i));
        }),
        (n.off = function (i) {
          if (!arguments.length) {
            r = [];
            return;
          }
          r = Pe.filter(r, function (o) {
            return o !== i;
          });
        }),
        n
      );
    }
    Z.location = function (e) {
      window.location = e;
    };
    Z.env() && (Z.location = function () {});
    Z.ready = function () {
      (Jr = !0), xi ? nI() : Pe.each(Rt, Cs), Pe.each(Si, Cs), Z.resize.up();
    };
    function Cs(e) {
      Be(e) && e();
    }
    function nI() {
      (xi = !1), Pe.each(wt, Ls);
    }
    var ht;
    Z.load = function (e) {
      ht.then(e);
    };
    function Ds() {
      ht && (ht.reject(), qe.off("load", ht.resolve)),
        (ht = new st.Deferred()),
        qe.on("load", ht.resolve);
    }
    Z.destroy = function (e) {
      (e = e || {}),
        (xi = !0),
        qe.triggerHandler("__wf_destroy"),
        e.domready != null && (Jr = e.domready),
        Pe.each(wt, Ps),
        Z.resize.off(),
        Z.scroll.off(),
        Z.redraw.off(),
        (Rt = []),
        (Si = []),
        ht.state() === "pending" && Ds();
    };
    st(Z.ready);
    Ds();
    Fs.exports = window.Webflow = Z;
  });
  var Hs = u((le) => {
    "use strict";
    Object.defineProperty(le, "__esModule", { value: !0 });
    le.setLoadHandler =
      le.ready =
      le.init =
      le.getInstance =
      le.destroyInstance =
      le.destroy =
      le.createInstance =
        void 0;
    var Ri;
    async function iI() {
      let { Application: e } = await import(
        "https://unpkg.com/@splinetool/runtime/build/runtime.js"
      );
      Ri = e;
    }
    var lr = new Map(),
      cr = new Map(),
      oI = new Event("w-spline-load"),
      Ci = class {
        destroy() {
          var t, r;
          this.container &&
            (lr.delete(this.container), cr.delete(this.container)),
            (t = this.spline) === null ||
              t === void 0 ||
              (r = t.dispose) === null ||
              r === void 0 ||
              r.call(t);
        }
        async load(t, r) {
          Ri || (await iI());
          let n = t.querySelector("canvas"),
            i = new Ri(n);
          await i.load(r),
            lr.set(t, this),
            (this.container = t),
            (this.spline = i),
            t.dispatchEvent(oI),
            cr.has(t) && (cr.get(t)(i), cr.delete(t));
        }
      },
      Gs = () =>
        Array.from(document.querySelectorAll('[data-animation-type="spline"]')),
      Vs = async (e, t) => {
        let r = lr.get(e);
        return r == null && (r = new Ci()), await r.load(e, t), r;
      };
    le.createInstance = Vs;
    var Us = (e) => {
      let t = lr.get(e);
      t?.destroy();
    };
    le.destroyInstance = Us;
    var aI = (e) => lr.get(e);
    le.getInstance = aI;
    var sI = (e, t) => {
      cr.set(e, t);
    };
    le.setLoadHandler = sI;
    var Xs = () => {
      Gs().forEach((e) => {
        let t = e.getAttribute("data-spline-url");
        t && Vs(e, t);
      });
    };
    le.init = Xs;
    var uI = () => {
      Gs().forEach(Us);
    };
    le.destroy = uI;
    var VX = (le.ready = Xs);
  });
  var Ws = u((XX, Bs) => {
    "use strict";
    var cI = We(),
      vt = Hs();
    cI.define(
      "spline",
      (Bs.exports = function () {
        return {
          createInstance: vt.createInstance,
          destroyInstance: vt.destroyInstance,
          getInstance: vt.getInstance,
          setLoadHandler: vt.setLoadHandler,
          init: vt.init,
          destroy: vt.destroy,
          ready: vt.ready,
        };
      })
    );
  });
  var zs = u((HX, ks) => {
    "use strict";
    var js = We();
    js.define(
      "brand",
      (ks.exports = function (e) {
        var t = {},
          r = document,
          n = e("html"),
          i = e("body"),
          o = ".w-webflow-badge",
          a = window.location,
          s = /PhantomJS/i.test(navigator.userAgent),
          c =
            "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
          f;
        t.ready = function () {
          var E = n.attr("data-wf-status"),
            m = n.attr("data-wf-domain") || "";
          /\.webflow\.io$/i.test(m) && a.hostname !== m && (E = !0),
            E &&
              !s &&
              ((f = f || d()),
              g(),
              setTimeout(g, 500),
              e(r).off(c, p).on(c, p));
        };
        function p() {
          var E =
            r.fullScreen ||
            r.mozFullScreen ||
            r.webkitIsFullScreen ||
            r.msFullscreenElement ||
            !!r.webkitFullscreenElement;
          e(f).attr("style", E ? "display: none !important;" : "");
        }
        function g() {
          var E = i.children(o),
            m = E.length && E.get(0) === f,
            y = js.env("editor");
          if (m) {
            y && E.remove();
            return;
          }
          E.length && E.remove(), y || i.append(f);
        }
        return t;
      })
    );
  });
  var $s = u((BX, Ks) => {
    "use strict";
    var Ni = We();
    Ni.define(
      "edit",
      (Ks.exports = function (e, t, r) {
        if (
          ((r = r || {}),
          (Ni.env("test") || Ni.env("frame")) && !r.fixture && !lI())
        )
          return { exit: 1 };
        var n = {},
          i = e(window),
          o = e(document.documentElement),
          a = document.location,
          s = "hashchange",
          c,
          f = r.load || g,
          p = !1;
        try {
          p =
            localStorage &&
            localStorage.getItem &&
            localStorage.getItem("WebflowEditor");
        } catch {}
        p
          ? f()
          : a.search
          ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) ||
              /\?edit$/.test(a.href)) &&
            f()
          : i.on(s, d).triggerHandler(s);
        function d() {
          c || (/\?edit/.test(a.hash) && f());
        }
        function g() {
          (c = !0),
            (window.WebflowEditor = !0),
            i.off(s, d),
            A(function (x) {
              e.ajax({
                url: b("https://editor-api.webflow.com/api/editor/view"),
                data: { siteId: o.attr("data-wf-site") },
                xhrFields: { withCredentials: !0 },
                dataType: "json",
                crossDomain: !0,
                success: E(x),
              });
            });
        }
        function E(x) {
          return function (C) {
            if (!C) {
              console.error("Could not load editor data");
              return;
            }
            (C.thirdPartyCookiesSupported = x),
              m(R(C.bugReporterScriptPath), function () {
                m(R(C.scriptPath), function () {
                  window.WebflowEditor(C);
                });
              });
          };
        }
        function m(x, C) {
          e.ajax({ type: "GET", url: x, dataType: "script", cache: !0 }).then(
            C,
            y
          );
        }
        function y(x, C, S) {
          throw (console.error("Could not load editor script: " + C), S);
        }
        function R(x) {
          return x.indexOf("//") >= 0
            ? x
            : b("https://editor-api.webflow.com" + x);
        }
        function b(x) {
          return x.replace(/([^:])\/\//g, "$1/");
        }
        function A(x) {
          var C = window.document.createElement("iframe");
          (C.src = "https://webflow.com/site/third-party-cookie-check.html"),
            (C.style.display = "none"),
            (C.sandbox = "allow-scripts allow-same-origin");
          var S = function (M) {
            M.data === "WF_third_party_cookies_unsupported"
              ? (T(C, S), x(!1))
              : M.data === "WF_third_party_cookies_supported" &&
                (T(C, S), x(!0));
          };
          (C.onerror = function () {
            T(C, S), x(!1);
          }),
            window.addEventListener("message", S, !1),
            window.document.body.appendChild(C);
        }
        function T(x, C) {
          window.removeEventListener("message", C, !1), x.remove();
        }
        return n;
      })
    );
    function lI() {
      try {
        return window.top.__Cypress__;
      } catch {
        return !1;
      }
    }
  });
  var Qs = u((WX, Ys) => {
    "use strict";
    var fI = We();
    fI.define(
      "focus-visible",
      (Ys.exports = function () {
        function e(r) {
          var n = !0,
            i = !1,
            o = null,
            a = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function s(T) {
            return !!(
              T &&
              T !== document &&
              T.nodeName !== "HTML" &&
              T.nodeName !== "BODY" &&
              "classList" in T &&
              "contains" in T.classList
            );
          }
          function c(T) {
            var x = T.type,
              C = T.tagName;
            return !!(
              (C === "INPUT" && a[x] && !T.readOnly) ||
              (C === "TEXTAREA" && !T.readOnly) ||
              T.isContentEditable
            );
          }
          function f(T) {
            T.getAttribute("data-wf-focus-visible") ||
              T.setAttribute("data-wf-focus-visible", "true");
          }
          function p(T) {
            T.getAttribute("data-wf-focus-visible") &&
              T.removeAttribute("data-wf-focus-visible");
          }
          function d(T) {
            T.metaKey ||
              T.altKey ||
              T.ctrlKey ||
              (s(r.activeElement) && f(r.activeElement), (n = !0));
          }
          function g() {
            n = !1;
          }
          function E(T) {
            s(T.target) && (n || c(T.target)) && f(T.target);
          }
          function m(T) {
            s(T.target) &&
              T.target.hasAttribute("data-wf-focus-visible") &&
              ((i = !0),
              window.clearTimeout(o),
              (o = window.setTimeout(function () {
                i = !1;
              }, 100)),
              p(T.target));
          }
          function y() {
            document.visibilityState === "hidden" && (i && (n = !0), R());
          }
          function R() {
            document.addEventListener("mousemove", A),
              document.addEventListener("mousedown", A),
              document.addEventListener("mouseup", A),
              document.addEventListener("pointermove", A),
              document.addEventListener("pointerdown", A),
              document.addEventListener("pointerup", A),
              document.addEventListener("touchmove", A),
              document.addEventListener("touchstart", A),
              document.addEventListener("touchend", A);
          }
          function b() {
            document.removeEventListener("mousemove", A),
              document.removeEventListener("mousedown", A),
              document.removeEventListener("mouseup", A),
              document.removeEventListener("pointermove", A),
              document.removeEventListener("pointerdown", A),
              document.removeEventListener("pointerup", A),
              document.removeEventListener("touchmove", A),
              document.removeEventListener("touchstart", A),
              document.removeEventListener("touchend", A);
          }
          function A(T) {
            (T.target.nodeName && T.target.nodeName.toLowerCase() === "html") ||
              ((n = !1), b());
          }
          document.addEventListener("keydown", d, !0),
            document.addEventListener("mousedown", g, !0),
            document.addEventListener("pointerdown", g, !0),
            document.addEventListener("touchstart", g, !0),
            document.addEventListener("visibilitychange", y, !0),
            R(),
            r.addEventListener("focus", E, !0),
            r.addEventListener("blur", m, !0);
        }
        function t() {
          if (typeof document < "u")
            try {
              document.querySelector(":focus-visible");
            } catch {
              e(document);
            }
        }
        return { ready: t };
      })
    );
  });
  var eu = u((jX, Js) => {
    "use strict";
    var Zs = We();
    Zs.define(
      "focus",
      (Js.exports = function () {
        var e = [],
          t = !1;
        function r(a) {
          t &&
            (a.preventDefault(),
            a.stopPropagation(),
            a.stopImmediatePropagation(),
            e.unshift(a));
        }
        function n(a) {
          var s = a.target,
            c = s.tagName;
          return (
            (/^a$/i.test(c) && s.href != null) ||
            (/^(button|textarea)$/i.test(c) && s.disabled !== !0) ||
            (/^input$/i.test(c) &&
              /^(button|reset|submit|radio|checkbox)$/i.test(s.type) &&
              !s.disabled) ||
            (!/^(button|input|textarea|select|a)$/i.test(c) &&
              !Number.isNaN(Number.parseFloat(s.tabIndex))) ||
            /^audio$/i.test(c) ||
            (/^video$/i.test(c) && s.controls === !0)
          );
        }
        function i(a) {
          n(a) &&
            ((t = !0),
            setTimeout(() => {
              for (t = !1, a.target.focus(); e.length > 0; ) {
                var s = e.pop();
                s.target.dispatchEvent(new MouseEvent(s.type, s));
              }
            }, 0));
        }
        function o() {
          typeof document < "u" &&
            document.body.hasAttribute("data-wf-focus-within") &&
            Zs.env.safari &&
            (document.addEventListener("mousedown", i, !0),
            document.addEventListener("mouseup", r, !0),
            document.addEventListener("click", r, !0));
        }
        return { ready: o };
      })
    );
  });
  var nu = u((kX, ru) => {
    "use strict";
    var Li = window.jQuery,
      je = {},
      en = [],
      tu = ".w-ix",
      tn = {
        reset: function (e, t) {
          t.__wf_intro = null;
        },
        intro: function (e, t) {
          t.__wf_intro ||
            ((t.__wf_intro = !0), Li(t).triggerHandler(je.types.INTRO));
        },
        outro: function (e, t) {
          t.__wf_intro &&
            ((t.__wf_intro = null), Li(t).triggerHandler(je.types.OUTRO));
        },
      };
    je.triggers = {};
    je.types = { INTRO: "w-ix-intro" + tu, OUTRO: "w-ix-outro" + tu };
    je.init = function () {
      for (var e = en.length, t = 0; t < e; t++) {
        var r = en[t];
        r[0](0, r[1]);
      }
      (en = []), Li.extend(je.triggers, tn);
    };
    je.async = function () {
      for (var e in tn) {
        var t = tn[e];
        tn.hasOwnProperty(e) &&
          (je.triggers[e] = function (r, n) {
            en.push([t, n]);
          });
      }
    };
    je.async();
    ru.exports = je;
  });
  var su = u((zX, au) => {
    "use strict";
    var Pi = nu();
    function iu(e, t) {
      var r = document.createEvent("CustomEvent");
      r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r);
    }
    var dI = window.jQuery,
      rn = {},
      ou = ".w-ix",
      pI = {
        reset: function (e, t) {
          Pi.triggers.reset(e, t);
        },
        intro: function (e, t) {
          Pi.triggers.intro(e, t), iu(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          Pi.triggers.outro(e, t), iu(t, "COMPONENT_INACTIVE");
        },
      };
    rn.triggers = {};
    rn.types = { INTRO: "w-ix-intro" + ou, OUTRO: "w-ix-outro" + ou };
    dI.extend(rn.triggers, pI);
    au.exports = rn;
  });
  var uu = u((KX, Ze) => {
    function qi(e) {
      return (
        (Ze.exports = qi =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol == "function" &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        (Ze.exports.__esModule = !0),
        (Ze.exports.default = Ze.exports),
        qi(e)
      );
    }
    (Ze.exports = qi),
      (Ze.exports.__esModule = !0),
      (Ze.exports.default = Ze.exports);
  });
  var nn = u(($X, fr) => {
    var gI = uu().default;
    function cu(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (cu = function (i) {
        return i ? r : t;
      })(e);
    }
    function hI(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (gI(e) !== "object" && typeof e != "function"))
        return { default: e };
      var r = cu(t);
      if (r && r.has(e)) return r.get(e);
      var n = {},
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(n, o, a)
            : (n[o] = e[o]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
    (fr.exports = hI),
      (fr.exports.__esModule = !0),
      (fr.exports.default = fr.exports);
  });
  var lu = u((YX, dr) => {
    function vI(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (dr.exports = vI),
      (dr.exports.__esModule = !0),
      (dr.exports.default = dr.exports);
  });
  var ne = u((QX, fu) => {
    var on = function (e) {
      return e && e.Math == Math && e;
    };
    fu.exports =
      on(typeof globalThis == "object" && globalThis) ||
      on(typeof window == "object" && window) ||
      on(typeof self == "object" && self) ||
      on(typeof global == "object" && global) ||
      (function () {
        return this;
      })() ||
      Function("return this")();
  });
  var Ct = u((ZX, du) => {
    du.exports = function (e) {
      try {
        return !!e();
      } catch {
        return !0;
      }
    };
  });
  var Et = u((JX, pu) => {
    var EI = Ct();
    pu.exports = !EI(function () {
      return (
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1] != 7
      );
    });
  });
  var an = u((e5, gu) => {
    var pr = Function.prototype.call;
    gu.exports = pr.bind
      ? pr.bind(pr)
      : function () {
          return pr.apply(pr, arguments);
        };
  });
  var yu = u((Eu) => {
    "use strict";
    var hu = {}.propertyIsEnumerable,
      vu = Object.getOwnPropertyDescriptor,
      yI = vu && !hu.call({ 1: 2 }, 1);
    Eu.f = yI
      ? function (t) {
          var r = vu(this, t);
          return !!r && r.enumerable;
        }
      : hu;
  });
  var Mi = u((r5, mu) => {
    mu.exports = function (e, t) {
      return {
        enumerable: !(e & 1),
        configurable: !(e & 2),
        writable: !(e & 4),
        value: t,
      };
    };
  });
  var Me = u((n5, Iu) => {
    var _u = Function.prototype,
      Di = _u.bind,
      Fi = _u.call,
      mI = Di && Di.bind(Fi);
    Iu.exports = Di
      ? function (e) {
          return e && mI(Fi, e);
        }
      : function (e) {
          return (
            e &&
            function () {
              return Fi.apply(e, arguments);
            }
          );
        };
  });
  var Ou = u((i5, bu) => {
    var Tu = Me(),
      _I = Tu({}.toString),
      II = Tu("".slice);
    bu.exports = function (e) {
      return II(_I(e), 8, -1);
    };
  });
  var Su = u((o5, Au) => {
    var TI = ne(),
      bI = Me(),
      OI = Ct(),
      AI = Ou(),
      Gi = TI.Object,
      SI = bI("".split);
    Au.exports = OI(function () {
      return !Gi("z").propertyIsEnumerable(0);
    })
      ? function (e) {
          return AI(e) == "String" ? SI(e, "") : Gi(e);
        }
      : Gi;
  });
  var Vi = u((a5, xu) => {
    var xI = ne(),
      wI = xI.TypeError;
    xu.exports = function (e) {
      if (e == null) throw wI("Can't call method on " + e);
      return e;
    };
  });
  var gr = u((s5, wu) => {
    var RI = Su(),
      CI = Vi();
    wu.exports = function (e) {
      return RI(CI(e));
    };
  });
  var ke = u((u5, Ru) => {
    Ru.exports = function (e) {
      return typeof e == "function";
    };
  });
  var Nt = u((c5, Cu) => {
    var NI = ke();
    Cu.exports = function (e) {
      return typeof e == "object" ? e !== null : NI(e);
    };
  });
  var hr = u((l5, Nu) => {
    var Ui = ne(),
      LI = ke(),
      PI = function (e) {
        return LI(e) ? e : void 0;
      };
    Nu.exports = function (e, t) {
      return arguments.length < 2 ? PI(Ui[e]) : Ui[e] && Ui[e][t];
    };
  });
  var Pu = u((f5, Lu) => {
    var qI = Me();
    Lu.exports = qI({}.isPrototypeOf);
  });
  var Mu = u((d5, qu) => {
    var MI = hr();
    qu.exports = MI("navigator", "userAgent") || "";
  });
  var Hu = u((p5, Xu) => {
    var Uu = ne(),
      Xi = Mu(),
      Du = Uu.process,
      Fu = Uu.Deno,
      Gu = (Du && Du.versions) || (Fu && Fu.version),
      Vu = Gu && Gu.v8,
      De,
      sn;
    Vu &&
      ((De = Vu.split(".")),
      (sn = De[0] > 0 && De[0] < 4 ? 1 : +(De[0] + De[1])));
    !sn &&
      Xi &&
      ((De = Xi.match(/Edge\/(\d+)/)),
      (!De || De[1] >= 74) &&
        ((De = Xi.match(/Chrome\/(\d+)/)), De && (sn = +De[1])));
    Xu.exports = sn;
  });
  var Hi = u((g5, Wu) => {
    var Bu = Hu(),
      DI = Ct();
    Wu.exports =
      !!Object.getOwnPropertySymbols &&
      !DI(function () {
        var e = Symbol();
        return (
          !String(e) ||
          !(Object(e) instanceof Symbol) ||
          (!Symbol.sham && Bu && Bu < 41)
        );
      });
  });
  var Bi = u((h5, ju) => {
    var FI = Hi();
    ju.exports = FI && !Symbol.sham && typeof Symbol.iterator == "symbol";
  });
  var Wi = u((v5, ku) => {
    var GI = ne(),
      VI = hr(),
      UI = ke(),
      XI = Pu(),
      HI = Bi(),
      BI = GI.Object;
    ku.exports = HI
      ? function (e) {
          return typeof e == "symbol";
        }
      : function (e) {
          var t = VI("Symbol");
          return UI(t) && XI(t.prototype, BI(e));
        };
  });
  var Ku = u((E5, zu) => {
    var WI = ne(),
      jI = WI.String;
    zu.exports = function (e) {
      try {
        return jI(e);
      } catch {
        return "Object";
      }
    };
  });
  var Yu = u((y5, $u) => {
    var kI = ne(),
      zI = ke(),
      KI = Ku(),
      $I = kI.TypeError;
    $u.exports = function (e) {
      if (zI(e)) return e;
      throw $I(KI(e) + " is not a function");
    };
  });
  var Zu = u((m5, Qu) => {
    var YI = Yu();
    Qu.exports = function (e, t) {
      var r = e[t];
      return r == null ? void 0 : YI(r);
    };
  });
  var ec = u((_5, Ju) => {
    var QI = ne(),
      ji = an(),
      ki = ke(),
      zi = Nt(),
      ZI = QI.TypeError;
    Ju.exports = function (e, t) {
      var r, n;
      if (
        (t === "string" && ki((r = e.toString)) && !zi((n = ji(r, e)))) ||
        (ki((r = e.valueOf)) && !zi((n = ji(r, e)))) ||
        (t !== "string" && ki((r = e.toString)) && !zi((n = ji(r, e))))
      )
        return n;
      throw ZI("Can't convert object to primitive value");
    };
  });
  var rc = u((I5, tc) => {
    tc.exports = !1;
  });
  var un = u((T5, ic) => {
    var nc = ne(),
      JI = Object.defineProperty;
    ic.exports = function (e, t) {
      try {
        JI(nc, e, { value: t, configurable: !0, writable: !0 });
      } catch {
        nc[e] = t;
      }
      return t;
    };
  });
  var cn = u((b5, ac) => {
    var eT = ne(),
      tT = un(),
      oc = "__core-js_shared__",
      rT = eT[oc] || tT(oc, {});
    ac.exports = rT;
  });
  var Ki = u((O5, uc) => {
    var nT = rc(),
      sc = cn();
    (uc.exports = function (e, t) {
      return sc[e] || (sc[e] = t !== void 0 ? t : {});
    })("versions", []).push({
      version: "3.19.0",
      mode: nT ? "pure" : "global",
      copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)",
    });
  });
  var lc = u((A5, cc) => {
    var iT = ne(),
      oT = Vi(),
      aT = iT.Object;
    cc.exports = function (e) {
      return aT(oT(e));
    };
  });
  var ut = u((S5, fc) => {
    var sT = Me(),
      uT = lc(),
      cT = sT({}.hasOwnProperty);
    fc.exports =
      Object.hasOwn ||
      function (t, r) {
        return cT(uT(t), r);
      };
  });
  var $i = u((x5, dc) => {
    var lT = Me(),
      fT = 0,
      dT = Math.random(),
      pT = lT((1).toString);
    dc.exports = function (e) {
      return "Symbol(" + (e === void 0 ? "" : e) + ")_" + pT(++fT + dT, 36);
    };
  });
  var Yi = u((w5, Ec) => {
    var gT = ne(),
      hT = Ki(),
      pc = ut(),
      vT = $i(),
      gc = Hi(),
      vc = Bi(),
      Lt = hT("wks"),
      yt = gT.Symbol,
      hc = yt && yt.for,
      ET = vc ? yt : (yt && yt.withoutSetter) || vT;
    Ec.exports = function (e) {
      if (!pc(Lt, e) || !(gc || typeof Lt[e] == "string")) {
        var t = "Symbol." + e;
        gc && pc(yt, e)
          ? (Lt[e] = yt[e])
          : vc && hc
          ? (Lt[e] = hc(t))
          : (Lt[e] = ET(t));
      }
      return Lt[e];
    };
  });
  var Ic = u((R5, _c) => {
    var yT = ne(),
      mT = an(),
      yc = Nt(),
      mc = Wi(),
      _T = Zu(),
      IT = ec(),
      TT = Yi(),
      bT = yT.TypeError,
      OT = TT("toPrimitive");
    _c.exports = function (e, t) {
      if (!yc(e) || mc(e)) return e;
      var r = _T(e, OT),
        n;
      if (r) {
        if (
          (t === void 0 && (t = "default"), (n = mT(r, e, t)), !yc(n) || mc(n))
        )
          return n;
        throw bT("Can't convert object to primitive value");
      }
      return t === void 0 && (t = "number"), IT(e, t);
    };
  });
  var Qi = u((C5, Tc) => {
    var AT = Ic(),
      ST = Wi();
    Tc.exports = function (e) {
      var t = AT(e, "string");
      return ST(t) ? t : t + "";
    };
  });
  var Ji = u((N5, Oc) => {
    var xT = ne(),
      bc = Nt(),
      Zi = xT.document,
      wT = bc(Zi) && bc(Zi.createElement);
    Oc.exports = function (e) {
      return wT ? Zi.createElement(e) : {};
    };
  });
  var eo = u((L5, Ac) => {
    var RT = Et(),
      CT = Ct(),
      NT = Ji();
    Ac.exports =
      !RT &&
      !CT(function () {
        return (
          Object.defineProperty(NT("div"), "a", {
            get: function () {
              return 7;
            },
          }).a != 7
        );
      });
  });
  var to = u((xc) => {
    var LT = Et(),
      PT = an(),
      qT = yu(),
      MT = Mi(),
      DT = gr(),
      FT = Qi(),
      GT = ut(),
      VT = eo(),
      Sc = Object.getOwnPropertyDescriptor;
    xc.f = LT
      ? Sc
      : function (t, r) {
          if (((t = DT(t)), (r = FT(r)), VT))
            try {
              return Sc(t, r);
            } catch {}
          if (GT(t, r)) return MT(!PT(qT.f, t, r), t[r]);
        };
  });
  var vr = u((q5, Rc) => {
    var wc = ne(),
      UT = Nt(),
      XT = wc.String,
      HT = wc.TypeError;
    Rc.exports = function (e) {
      if (UT(e)) return e;
      throw HT(XT(e) + " is not an object");
    };
  });
  var Er = u((Lc) => {
    var BT = ne(),
      WT = Et(),
      jT = eo(),
      Cc = vr(),
      kT = Qi(),
      zT = BT.TypeError,
      Nc = Object.defineProperty;
    Lc.f = WT
      ? Nc
      : function (t, r, n) {
          if ((Cc(t), (r = kT(r)), Cc(n), jT))
            try {
              return Nc(t, r, n);
            } catch {}
          if ("get" in n || "set" in n) throw zT("Accessors not supported");
          return "value" in n && (t[r] = n.value), t;
        };
  });
  var ln = u((D5, Pc) => {
    var KT = Et(),
      $T = Er(),
      YT = Mi();
    Pc.exports = KT
      ? function (e, t, r) {
          return $T.f(e, t, YT(1, r));
        }
      : function (e, t, r) {
          return (e[t] = r), e;
        };
  });
  var no = u((F5, qc) => {
    var QT = Me(),
      ZT = ke(),
      ro = cn(),
      JT = QT(Function.toString);
    ZT(ro.inspectSource) ||
      (ro.inspectSource = function (e) {
        return JT(e);
      });
    qc.exports = ro.inspectSource;
  });
  var Fc = u((G5, Dc) => {
    var eb = ne(),
      tb = ke(),
      rb = no(),
      Mc = eb.WeakMap;
    Dc.exports = tb(Mc) && /native code/.test(rb(Mc));
  });
  var io = u((V5, Vc) => {
    var nb = Ki(),
      ib = $i(),
      Gc = nb("keys");
    Vc.exports = function (e) {
      return Gc[e] || (Gc[e] = ib(e));
    };
  });
  var fn = u((U5, Uc) => {
    Uc.exports = {};
  });
  var kc = u((X5, jc) => {
    var ob = Fc(),
      Wc = ne(),
      oo = Me(),
      ab = Nt(),
      sb = ln(),
      ao = ut(),
      so = cn(),
      ub = io(),
      cb = fn(),
      Xc = "Object already initialized",
      co = Wc.TypeError,
      lb = Wc.WeakMap,
      dn,
      yr,
      pn,
      fb = function (e) {
        return pn(e) ? yr(e) : dn(e, {});
      },
      db = function (e) {
        return function (t) {
          var r;
          if (!ab(t) || (r = yr(t)).type !== e)
            throw co("Incompatible receiver, " + e + " required");
          return r;
        };
      };
    ob || so.state
      ? ((ct = so.state || (so.state = new lb())),
        (Hc = oo(ct.get)),
        (uo = oo(ct.has)),
        (Bc = oo(ct.set)),
        (dn = function (e, t) {
          if (uo(ct, e)) throw new co(Xc);
          return (t.facade = e), Bc(ct, e, t), t;
        }),
        (yr = function (e) {
          return Hc(ct, e) || {};
        }),
        (pn = function (e) {
          return uo(ct, e);
        }))
      : ((mt = ub("state")),
        (cb[mt] = !0),
        (dn = function (e, t) {
          if (ao(e, mt)) throw new co(Xc);
          return (t.facade = e), sb(e, mt, t), t;
        }),
        (yr = function (e) {
          return ao(e, mt) ? e[mt] : {};
        }),
        (pn = function (e) {
          return ao(e, mt);
        }));
    var ct, Hc, uo, Bc, mt;
    jc.exports = { set: dn, get: yr, has: pn, enforce: fb, getterFor: db };
  });
  var $c = u((H5, Kc) => {
    var lo = Et(),
      pb = ut(),
      zc = Function.prototype,
      gb = lo && Object.getOwnPropertyDescriptor,
      fo = pb(zc, "name"),
      hb = fo && function () {}.name === "something",
      vb = fo && (!lo || (lo && gb(zc, "name").configurable));
    Kc.exports = { EXISTS: fo, PROPER: hb, CONFIGURABLE: vb };
  });
  var el = u((B5, Jc) => {
    var Eb = ne(),
      Yc = ke(),
      yb = ut(),
      Qc = ln(),
      mb = un(),
      _b = no(),
      Zc = kc(),
      Ib = $c().CONFIGURABLE,
      Tb = Zc.get,
      bb = Zc.enforce,
      Ob = String(String).split("String");
    (Jc.exports = function (e, t, r, n) {
      var i = n ? !!n.unsafe : !1,
        o = n ? !!n.enumerable : !1,
        a = n ? !!n.noTargetGet : !1,
        s = n && n.name !== void 0 ? n.name : t,
        c;
      if (
        (Yc(r) &&
          (String(s).slice(0, 7) === "Symbol(" &&
            (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
          (!yb(r, "name") || (Ib && r.name !== s)) && Qc(r, "name", s),
          (c = bb(r)),
          c.source || (c.source = Ob.join(typeof s == "string" ? s : ""))),
        e === Eb)
      ) {
        o ? (e[t] = r) : mb(t, r);
        return;
      } else i ? !a && e[t] && (o = !0) : delete e[t];
      o ? (e[t] = r) : Qc(e, t, r);
    })(Function.prototype, "toString", function () {
      return (Yc(this) && Tb(this).source) || _b(this);
    });
  });
  var po = u((W5, tl) => {
    var Ab = Math.ceil,
      Sb = Math.floor;
    tl.exports = function (e) {
      var t = +e;
      return t !== t || t === 0 ? 0 : (t > 0 ? Sb : Ab)(t);
    };
  });
  var nl = u((j5, rl) => {
    var xb = po(),
      wb = Math.max,
      Rb = Math.min;
    rl.exports = function (e, t) {
      var r = xb(e);
      return r < 0 ? wb(r + t, 0) : Rb(r, t);
    };
  });
  var ol = u((k5, il) => {
    var Cb = po(),
      Nb = Math.min;
    il.exports = function (e) {
      return e > 0 ? Nb(Cb(e), 9007199254740991) : 0;
    };
  });
  var sl = u((z5, al) => {
    var Lb = ol();
    al.exports = function (e) {
      return Lb(e.length);
    };
  });
  var go = u((K5, cl) => {
    var Pb = gr(),
      qb = nl(),
      Mb = sl(),
      ul = function (e) {
        return function (t, r, n) {
          var i = Pb(t),
            o = Mb(i),
            a = qb(n, o),
            s;
          if (e && r != r) {
            for (; o > a; ) if (((s = i[a++]), s != s)) return !0;
          } else
            for (; o > a; a++)
              if ((e || a in i) && i[a] === r) return e || a || 0;
          return !e && -1;
        };
      };
    cl.exports = { includes: ul(!0), indexOf: ul(!1) };
  });
  var vo = u(($5, fl) => {
    var Db = Me(),
      ho = ut(),
      Fb = gr(),
      Gb = go().indexOf,
      Vb = fn(),
      ll = Db([].push);
    fl.exports = function (e, t) {
      var r = Fb(e),
        n = 0,
        i = [],
        o;
      for (o in r) !ho(Vb, o) && ho(r, o) && ll(i, o);
      for (; t.length > n; ) ho(r, (o = t[n++])) && (~Gb(i, o) || ll(i, o));
      return i;
    };
  });
  var gn = u((Y5, dl) => {
    dl.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  });
  var gl = u((pl) => {
    var Ub = vo(),
      Xb = gn(),
      Hb = Xb.concat("length", "prototype");
    pl.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return Ub(t, Hb);
      };
  });
  var vl = u((hl) => {
    hl.f = Object.getOwnPropertySymbols;
  });
  var yl = u((J5, El) => {
    var Bb = hr(),
      Wb = Me(),
      jb = gl(),
      kb = vl(),
      zb = vr(),
      Kb = Wb([].concat);
    El.exports =
      Bb("Reflect", "ownKeys") ||
      function (t) {
        var r = jb.f(zb(t)),
          n = kb.f;
        return n ? Kb(r, n(t)) : r;
      };
  });
  var _l = u((eH, ml) => {
    var $b = ut(),
      Yb = yl(),
      Qb = to(),
      Zb = Er();
    ml.exports = function (e, t) {
      for (var r = Yb(t), n = Zb.f, i = Qb.f, o = 0; o < r.length; o++) {
        var a = r[o];
        $b(e, a) || n(e, a, i(t, a));
      }
    };
  });
  var Tl = u((tH, Il) => {
    var Jb = Ct(),
      eO = ke(),
      tO = /#|\.prototype\./,
      mr = function (e, t) {
        var r = nO[rO(e)];
        return r == oO ? !0 : r == iO ? !1 : eO(t) ? Jb(t) : !!t;
      },
      rO = (mr.normalize = function (e) {
        return String(e).replace(tO, ".").toLowerCase();
      }),
      nO = (mr.data = {}),
      iO = (mr.NATIVE = "N"),
      oO = (mr.POLYFILL = "P");
    Il.exports = mr;
  });
  var Ol = u((rH, bl) => {
    var Eo = ne(),
      aO = to().f,
      sO = ln(),
      uO = el(),
      cO = un(),
      lO = _l(),
      fO = Tl();
    bl.exports = function (e, t) {
      var r = e.target,
        n = e.global,
        i = e.stat,
        o,
        a,
        s,
        c,
        f,
        p;
      if (
        (n
          ? (a = Eo)
          : i
          ? (a = Eo[r] || cO(r, {}))
          : (a = (Eo[r] || {}).prototype),
        a)
      )
        for (s in t) {
          if (
            ((f = t[s]),
            e.noTargetGet ? ((p = aO(a, s)), (c = p && p.value)) : (c = a[s]),
            (o = fO(n ? s : r + (i ? "." : "#") + s, e.forced)),
            !o && c !== void 0)
          ) {
            if (typeof f == typeof c) continue;
            lO(f, c);
          }
          (e.sham || (c && c.sham)) && sO(f, "sham", !0), uO(a, s, f, e);
        }
    };
  });
  var Sl = u((nH, Al) => {
    var dO = vo(),
      pO = gn();
    Al.exports =
      Object.keys ||
      function (t) {
        return dO(t, pO);
      };
  });
  var wl = u((iH, xl) => {
    var gO = Et(),
      hO = Er(),
      vO = vr(),
      EO = gr(),
      yO = Sl();
    xl.exports = gO
      ? Object.defineProperties
      : function (t, r) {
          vO(t);
          for (var n = EO(r), i = yO(r), o = i.length, a = 0, s; o > a; )
            hO.f(t, (s = i[a++]), n[s]);
          return t;
        };
  });
  var Cl = u((oH, Rl) => {
    var mO = hr();
    Rl.exports = mO("document", "documentElement");
  });
  var Gl = u((aH, Fl) => {
    var _O = vr(),
      IO = wl(),
      Nl = gn(),
      TO = fn(),
      bO = Cl(),
      OO = Ji(),
      AO = io(),
      Ll = ">",
      Pl = "<",
      mo = "prototype",
      _o = "script",
      Ml = AO("IE_PROTO"),
      yo = function () {},
      Dl = function (e) {
        return Pl + _o + Ll + e + Pl + "/" + _o + Ll;
      },
      ql = function (e) {
        e.write(Dl("")), e.close();
        var t = e.parentWindow.Object;
        return (e = null), t;
      },
      SO = function () {
        var e = OO("iframe"),
          t = "java" + _o + ":",
          r;
        return (
          (e.style.display = "none"),
          bO.appendChild(e),
          (e.src = String(t)),
          (r = e.contentWindow.document),
          r.open(),
          r.write(Dl("document.F=Object")),
          r.close(),
          r.F
        );
      },
      hn,
      vn = function () {
        try {
          hn = new ActiveXObject("htmlfile");
        } catch {}
        vn =
          typeof document < "u"
            ? document.domain && hn
              ? ql(hn)
              : SO()
            : ql(hn);
        for (var e = Nl.length; e--; ) delete vn[mo][Nl[e]];
        return vn();
      };
    TO[Ml] = !0;
    Fl.exports =
      Object.create ||
      function (t, r) {
        var n;
        return (
          t !== null
            ? ((yo[mo] = _O(t)), (n = new yo()), (yo[mo] = null), (n[Ml] = t))
            : (n = vn()),
          r === void 0 ? n : IO(n, r)
        );
      };
  });
  var Ul = u((sH, Vl) => {
    var xO = Yi(),
      wO = Gl(),
      RO = Er(),
      Io = xO("unscopables"),
      To = Array.prototype;
    To[Io] == null && RO.f(To, Io, { configurable: !0, value: wO(null) });
    Vl.exports = function (e) {
      To[Io][e] = !0;
    };
  });
  var Xl = u(() => {
    "use strict";
    var CO = Ol(),
      NO = go().includes,
      LO = Ul();
    CO(
      { target: "Array", proto: !0 },
      {
        includes: function (t) {
          return NO(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
    LO("includes");
  });
  var Bl = u((lH, Hl) => {
    var PO = ne(),
      qO = Me();
    Hl.exports = function (e, t) {
      return qO(PO[e].prototype[t]);
    };
  });
  var jl = u((fH, Wl) => {
    Xl();
    var MO = Bl();
    Wl.exports = MO("Array", "includes");
  });
  var zl = u((dH, kl) => {
    var DO = jl();
    kl.exports = DO;
  });
  var $l = u((pH, Kl) => {
    var FO = zl();
    Kl.exports = FO;
  });
  var bo = u((gH, Yl) => {
    var GO =
      typeof global == "object" && global && global.Object === Object && global;
    Yl.exports = GO;
  });
  var Fe = u((hH, Ql) => {
    var VO = bo(),
      UO = typeof self == "object" && self && self.Object === Object && self,
      XO = VO || UO || Function("return this")();
    Ql.exports = XO;
  });
  var Pt = u((vH, Zl) => {
    var HO = Fe(),
      BO = HO.Symbol;
    Zl.exports = BO;
  });
  var rf = u((EH, tf) => {
    var Jl = Pt(),
      ef = Object.prototype,
      WO = ef.hasOwnProperty,
      jO = ef.toString,
      _r = Jl ? Jl.toStringTag : void 0;
    function kO(e) {
      var t = WO.call(e, _r),
        r = e[_r];
      try {
        e[_r] = void 0;
        var n = !0;
      } catch {}
      var i = jO.call(e);
      return n && (t ? (e[_r] = r) : delete e[_r]), i;
    }
    tf.exports = kO;
  });
  var of = u((yH, nf) => {
    var zO = Object.prototype,
      KO = zO.toString;
    function $O(e) {
      return KO.call(e);
    }
    nf.exports = $O;
  });
  var lt = u((mH, uf) => {
    var af = Pt(),
      YO = rf(),
      QO = of(),
      ZO = "[object Null]",
      JO = "[object Undefined]",
      sf = af ? af.toStringTag : void 0;
    function eA(e) {
      return e == null
        ? e === void 0
          ? JO
          : ZO
        : sf && sf in Object(e)
        ? YO(e)
        : QO(e);
    }
    uf.exports = eA;
  });
  var Oo = u((_H, cf) => {
    function tA(e, t) {
      return function (r) {
        return e(t(r));
      };
    }
    cf.exports = tA;
  });
  var Ao = u((IH, lf) => {
    var rA = Oo(),
      nA = rA(Object.getPrototypeOf, Object);
    lf.exports = nA;
  });
  var Je = u((TH, ff) => {
    function iA(e) {
      return e != null && typeof e == "object";
    }
    ff.exports = iA;
  });
  var So = u((bH, pf) => {
    var oA = lt(),
      aA = Ao(),
      sA = Je(),
      uA = "[object Object]",
      cA = Function.prototype,
      lA = Object.prototype,
      df = cA.toString,
      fA = lA.hasOwnProperty,
      dA = df.call(Object);
    function pA(e) {
      if (!sA(e) || oA(e) != uA) return !1;
      var t = aA(e);
      if (t === null) return !0;
      var r = fA.call(t, "constructor") && t.constructor;
      return typeof r == "function" && r instanceof r && df.call(r) == dA;
    }
    pf.exports = pA;
  });
  var gf = u((xo) => {
    "use strict";
    Object.defineProperty(xo, "__esModule", { value: !0 });
    xo.default = gA;
    function gA(e) {
      var t,
        r = e.Symbol;
      return (
        typeof r == "function"
          ? r.observable
            ? (t = r.observable)
            : ((t = r("observable")), (r.observable = t))
          : (t = "@@observable"),
        t
      );
    }
  });
  var hf = u((Ro, wo) => {
    "use strict";
    Object.defineProperty(Ro, "__esModule", { value: !0 });
    var hA = gf(),
      vA = EA(hA);
    function EA(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var qt;
    typeof self < "u"
      ? (qt = self)
      : typeof window < "u"
      ? (qt = window)
      : typeof global < "u"
      ? (qt = global)
      : typeof wo < "u"
      ? (qt = wo)
      : (qt = Function("return this")());
    var yA = (0, vA.default)(qt);
    Ro.default = yA;
  });
  var Co = u((Ir) => {
    "use strict";
    Ir.__esModule = !0;
    Ir.ActionTypes = void 0;
    Ir.default = mf;
    var mA = So(),
      _A = yf(mA),
      IA = hf(),
      vf = yf(IA);
    function yf(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var Ef = (Ir.ActionTypes = { INIT: "@@redux/INIT" });
    function mf(e, t, r) {
      var n;
      if (
        (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
        typeof r < "u")
      ) {
        if (typeof r != "function")
          throw new Error("Expected the enhancer to be a function.");
        return r(mf)(e, t);
      }
      if (typeof e != "function")
        throw new Error("Expected the reducer to be a function.");
      var i = e,
        o = t,
        a = [],
        s = a,
        c = !1;
      function f() {
        s === a && (s = a.slice());
      }
      function p() {
        return o;
      }
      function d(y) {
        if (typeof y != "function")
          throw new Error("Expected listener to be a function.");
        var R = !0;
        return (
          f(),
          s.push(y),
          function () {
            if (R) {
              (R = !1), f();
              var A = s.indexOf(y);
              s.splice(A, 1);
            }
          }
        );
      }
      function g(y) {
        if (!(0, _A.default)(y))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (typeof y.type > "u")
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (c) throw new Error("Reducers may not dispatch actions.");
        try {
          (c = !0), (o = i(o, y));
        } finally {
          c = !1;
        }
        for (var R = (a = s), b = 0; b < R.length; b++) R[b]();
        return y;
      }
      function E(y) {
        if (typeof y != "function")
          throw new Error("Expected the nextReducer to be a function.");
        (i = y), g({ type: Ef.INIT });
      }
      function m() {
        var y,
          R = d;
        return (
          (y = {
            subscribe: function (A) {
              if (typeof A != "object")
                throw new TypeError("Expected the observer to be an object.");
              function T() {
                A.next && A.next(p());
              }
              T();
              var x = R(T);
              return { unsubscribe: x };
            },
          }),
          (y[vf.default] = function () {
            return this;
          }),
          y
        );
      }
      return (
        g({ type: Ef.INIT }),
        (n = { dispatch: g, subscribe: d, getState: p, replaceReducer: E }),
        (n[vf.default] = m),
        n
      );
    }
  });
  var Lo = u((No) => {
    "use strict";
    No.__esModule = !0;
    No.default = TA;
    function TA(e) {
      typeof console < "u" &&
        typeof console.error == "function" &&
        console.error(e);
      try {
        throw new Error(e);
      } catch {}
    }
  });
  var Tf = u((Po) => {
    "use strict";
    Po.__esModule = !0;
    Po.default = xA;
    var _f = Co(),
      bA = So(),
      xH = If(bA),
      OA = Lo(),
      wH = If(OA);
    function If(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function AA(e, t) {
      var r = t && t.type,
        n = (r && '"' + r.toString() + '"') || "an action";
      return (
        "Given action " +
        n +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function SA(e) {
      Object.keys(e).forEach(function (t) {
        var r = e[t],
          n = r(void 0, { type: _f.ActionTypes.INIT });
        if (typeof n > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
          );
        var i =
          "@@redux/PROBE_UNKNOWN_ACTION_" +
          Math.random().toString(36).substring(7).split("").join(".");
        if (typeof r(void 0, { type: i }) > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined when probed with a random type. ' +
              ("Don't try to handle " +
                _f.ActionTypes.INIT +
                ' or other actions in "redux/*" ') +
              "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
          );
      });
    }
    function xA(e) {
      for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        typeof e[i] == "function" && (r[i] = e[i]);
      }
      var o = Object.keys(r);
      if (!1) var a;
      var s;
      try {
        SA(r);
      } catch (c) {
        s = c;
      }
      return function () {
        var f =
            arguments.length <= 0 || arguments[0] === void 0
              ? {}
              : arguments[0],
          p = arguments[1];
        if (s) throw s;
        if (!1) var d;
        for (var g = !1, E = {}, m = 0; m < o.length; m++) {
          var y = o[m],
            R = r[y],
            b = f[y],
            A = R(b, p);
          if (typeof A > "u") {
            var T = AA(y, p);
            throw new Error(T);
          }
          (E[y] = A), (g = g || A !== b);
        }
        return g ? E : f;
      };
    }
  });
  var Of = u((qo) => {
    "use strict";
    qo.__esModule = !0;
    qo.default = wA;
    function bf(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function wA(e, t) {
      if (typeof e == "function") return bf(e, t);
      if (typeof e != "object" || e === null)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (e === null ? "null" : typeof e) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
        var o = r[i],
          a = e[o];
        typeof a == "function" && (n[o] = bf(a, t));
      }
      return n;
    }
  });
  var Do = u((Mo) => {
    "use strict";
    Mo.__esModule = !0;
    Mo.default = RA;
    function RA() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      if (t.length === 0)
        return function (o) {
          return o;
        };
      if (t.length === 1) return t[0];
      var n = t[t.length - 1],
        i = t.slice(0, -1);
      return function () {
        return i.reduceRight(function (o, a) {
          return a(o);
        }, n.apply(void 0, arguments));
      };
    }
  });
  var Af = u((Fo) => {
    "use strict";
    Fo.__esModule = !0;
    var CA =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      };
    Fo.default = qA;
    var NA = Do(),
      LA = PA(NA);
    function PA(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function qA() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      return function (n) {
        return function (i, o, a) {
          var s = n(i, o, a),
            c = s.dispatch,
            f = [],
            p = {
              getState: s.getState,
              dispatch: function (g) {
                return c(g);
              },
            };
          return (
            (f = t.map(function (d) {
              return d(p);
            })),
            (c = LA.default.apply(void 0, f)(s.dispatch)),
            CA({}, s, { dispatch: c })
          );
        };
      };
    }
  });
  var Go = u((Re) => {
    "use strict";
    Re.__esModule = !0;
    Re.compose =
      Re.applyMiddleware =
      Re.bindActionCreators =
      Re.combineReducers =
      Re.createStore =
        void 0;
    var MA = Co(),
      DA = Mt(MA),
      FA = Tf(),
      GA = Mt(FA),
      VA = Of(),
      UA = Mt(VA),
      XA = Af(),
      HA = Mt(XA),
      BA = Do(),
      WA = Mt(BA),
      jA = Lo(),
      PH = Mt(jA);
    function Mt(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Re.createStore = DA.default;
    Re.combineReducers = GA.default;
    Re.bindActionCreators = UA.default;
    Re.applyMiddleware = HA.default;
    Re.compose = WA.default;
  });
  var Ge,
    Vo,
    ze,
    kA,
    zA,
    En,
    KA,
    Uo = re(() => {
      "use strict";
      (Ge = {
        NAVBAR_OPEN: "NAVBAR_OPEN",
        NAVBAR_CLOSE: "NAVBAR_CLOSE",
        TAB_ACTIVE: "TAB_ACTIVE",
        TAB_INACTIVE: "TAB_INACTIVE",
        SLIDER_ACTIVE: "SLIDER_ACTIVE",
        SLIDER_INACTIVE: "SLIDER_INACTIVE",
        DROPDOWN_OPEN: "DROPDOWN_OPEN",
        DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
        MOUSE_CLICK: "MOUSE_CLICK",
        MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
        MOUSE_DOWN: "MOUSE_DOWN",
        MOUSE_UP: "MOUSE_UP",
        MOUSE_OVER: "MOUSE_OVER",
        MOUSE_OUT: "MOUSE_OUT",
        MOUSE_MOVE: "MOUSE_MOVE",
        MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
        SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
        SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
        SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
        ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
        ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
        PAGE_START: "PAGE_START",
        PAGE_FINISH: "PAGE_FINISH",
        PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
        PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
        PAGE_SCROLL: "PAGE_SCROLL",
      }),
        (Vo = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" }),
        (ze = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" }),
        (kA = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" }),
        (zA = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        }),
        (En = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        }),
        (KA = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        });
    });
  var Oe,
    $A,
    yn = re(() => {
      "use strict";
      (Oe = {
        TRANSFORM_MOVE: "TRANSFORM_MOVE",
        TRANSFORM_SCALE: "TRANSFORM_SCALE",
        TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
        TRANSFORM_SKEW: "TRANSFORM_SKEW",
        STYLE_OPACITY: "STYLE_OPACITY",
        STYLE_SIZE: "STYLE_SIZE",
        STYLE_FILTER: "STYLE_FILTER",
        STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
        STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
        STYLE_BORDER: "STYLE_BORDER",
        STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
        OBJECT_VALUE: "OBJECT_VALUE",
        PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
        PLUGIN_SPLINE: "PLUGIN_SPLINE",
        PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
        GENERAL_DISPLAY: "GENERAL_DISPLAY",
        GENERAL_START_ACTION: "GENERAL_START_ACTION",
        GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
        GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
        GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
        GENERAL_LOOP: "GENERAL_LOOP",
        STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
      }),
        ($A = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        });
    });
  var YA,
    Sf = re(() => {
      "use strict";
      YA = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    });
  var QA,
    ZA,
    JA,
    eS,
    tS,
    rS,
    nS,
    Xo,
    xf = re(() => {
      "use strict";
      yn();
      ({
        TRANSFORM_MOVE: QA,
        TRANSFORM_SCALE: ZA,
        TRANSFORM_ROTATE: JA,
        TRANSFORM_SKEW: eS,
        STYLE_SIZE: tS,
        STYLE_FILTER: rS,
        STYLE_FONT_VARIATION: nS,
      } = Oe),
        (Xo = {
          [QA]: !0,
          [ZA]: !0,
          [JA]: !0,
          [eS]: !0,
          [tS]: !0,
          [rS]: !0,
          [nS]: !0,
        });
    });
  var ue = {};
  be(ue, {
    IX2_ACTION_LIST_PLAYBACK_CHANGED: () => _S,
    IX2_ANIMATION_FRAME_CHANGED: () => gS,
    IX2_CLEAR_REQUESTED: () => fS,
    IX2_ELEMENT_STATE_CHANGED: () => mS,
    IX2_EVENT_LISTENER_ADDED: () => dS,
    IX2_EVENT_STATE_CHANGED: () => pS,
    IX2_INSTANCE_ADDED: () => vS,
    IX2_INSTANCE_REMOVED: () => yS,
    IX2_INSTANCE_STARTED: () => ES,
    IX2_MEDIA_QUERIES_DEFINED: () => TS,
    IX2_PARAMETER_CHANGED: () => hS,
    IX2_PLAYBACK_REQUESTED: () => cS,
    IX2_PREVIEW_REQUESTED: () => uS,
    IX2_RAW_DATA_IMPORTED: () => iS,
    IX2_SESSION_INITIALIZED: () => oS,
    IX2_SESSION_STARTED: () => aS,
    IX2_SESSION_STOPPED: () => sS,
    IX2_STOP_REQUESTED: () => lS,
    IX2_TEST_FRAME_RENDERED: () => bS,
    IX2_VIEWPORT_WIDTH_CHANGED: () => IS,
  });
  var iS,
    oS,
    aS,
    sS,
    uS,
    cS,
    lS,
    fS,
    dS,
    pS,
    gS,
    hS,
    vS,
    ES,
    yS,
    mS,
    _S,
    IS,
    TS,
    bS,
    wf = re(() => {
      "use strict";
      (iS = "IX2_RAW_DATA_IMPORTED"),
        (oS = "IX2_SESSION_INITIALIZED"),
        (aS = "IX2_SESSION_STARTED"),
        (sS = "IX2_SESSION_STOPPED"),
        (uS = "IX2_PREVIEW_REQUESTED"),
        (cS = "IX2_PLAYBACK_REQUESTED"),
        (lS = "IX2_STOP_REQUESTED"),
        (fS = "IX2_CLEAR_REQUESTED"),
        (dS = "IX2_EVENT_LISTENER_ADDED"),
        (pS = "IX2_EVENT_STATE_CHANGED"),
        (gS = "IX2_ANIMATION_FRAME_CHANGED"),
        (hS = "IX2_PARAMETER_CHANGED"),
        (vS = "IX2_INSTANCE_ADDED"),
        (ES = "IX2_INSTANCE_STARTED"),
        (yS = "IX2_INSTANCE_REMOVED"),
        (mS = "IX2_ELEMENT_STATE_CHANGED"),
        (_S = "IX2_ACTION_LIST_PLAYBACK_CHANGED"),
        (IS = "IX2_VIEWPORT_WIDTH_CHANGED"),
        (TS = "IX2_MEDIA_QUERIES_DEFINED"),
        (bS = "IX2_TEST_FRAME_RENDERED");
    });
  var ge = {};
  be(ge, {
    ABSTRACT_NODE: () => Ix,
    AUTO: () => lx,
    BACKGROUND: () => ix,
    BACKGROUND_COLOR: () => nx,
    BAR_DELIMITER: () => px,
    BORDER_COLOR: () => ox,
    BOUNDARY_SELECTOR: () => wS,
    CHILDREN: () => gx,
    COLON_DELIMITER: () => dx,
    COLOR: () => ax,
    COMMA_DELIMITER: () => fx,
    CONFIG_UNIT: () => DS,
    CONFIG_VALUE: () => LS,
    CONFIG_X_UNIT: () => PS,
    CONFIG_X_VALUE: () => RS,
    CONFIG_Y_UNIT: () => qS,
    CONFIG_Y_VALUE: () => CS,
    CONFIG_Z_UNIT: () => MS,
    CONFIG_Z_VALUE: () => NS,
    DISPLAY: () => sx,
    FILTER: () => JS,
    FLEX: () => ux,
    FONT_VARIATION_SETTINGS: () => ex,
    HEIGHT: () => rx,
    HTML_ELEMENT: () => mx,
    IMMEDIATE_CHILDREN: () => hx,
    IX2_ID_DELIMITER: () => OS,
    OPACITY: () => ZS,
    PARENT: () => Ex,
    PLAIN_OBJECT: () => _x,
    PRESERVE_3D: () => yx,
    RENDER_GENERAL: () => bx,
    RENDER_PLUGIN: () => Ax,
    RENDER_STYLE: () => Ox,
    RENDER_TRANSFORM: () => Tx,
    ROTATE_X: () => kS,
    ROTATE_Y: () => zS,
    ROTATE_Z: () => KS,
    SCALE_3D: () => jS,
    SCALE_X: () => HS,
    SCALE_Y: () => BS,
    SCALE_Z: () => WS,
    SIBLINGS: () => vx,
    SKEW: () => $S,
    SKEW_X: () => YS,
    SKEW_Y: () => QS,
    TRANSFORM: () => FS,
    TRANSLATE_3D: () => XS,
    TRANSLATE_X: () => GS,
    TRANSLATE_Y: () => VS,
    TRANSLATE_Z: () => US,
    WF_PAGE: () => AS,
    WIDTH: () => tx,
    WILL_CHANGE: () => cx,
    W_MOD_IX: () => xS,
    W_MOD_JS: () => SS,
  });
  var OS,
    AS,
    SS,
    xS,
    wS,
    RS,
    CS,
    NS,
    LS,
    PS,
    qS,
    MS,
    DS,
    FS,
    GS,
    VS,
    US,
    XS,
    HS,
    BS,
    WS,
    jS,
    kS,
    zS,
    KS,
    $S,
    YS,
    QS,
    ZS,
    JS,
    ex,
    tx,
    rx,
    nx,
    ix,
    ox,
    ax,
    sx,
    ux,
    cx,
    lx,
    fx,
    dx,
    px,
    gx,
    hx,
    vx,
    Ex,
    yx,
    mx,
    _x,
    Ix,
    Tx,
    bx,
    Ox,
    Ax,
    Rf = re(() => {
      "use strict";
      (OS = "|"),
        (AS = "data-wf-page"),
        (SS = "w-mod-js"),
        (xS = "w-mod-ix"),
        (wS = ".w-dyn-item"),
        (RS = "xValue"),
        (CS = "yValue"),
        (NS = "zValue"),
        (LS = "value"),
        (PS = "xUnit"),
        (qS = "yUnit"),
        (MS = "zUnit"),
        (DS = "unit"),
        (FS = "transform"),
        (GS = "translateX"),
        (VS = "translateY"),
        (US = "translateZ"),
        (XS = "translate3d"),
        (HS = "scaleX"),
        (BS = "scaleY"),
        (WS = "scaleZ"),
        (jS = "scale3d"),
        (kS = "rotateX"),
        (zS = "rotateY"),
        (KS = "rotateZ"),
        ($S = "skew"),
        (YS = "skewX"),
        (QS = "skewY"),
        (ZS = "opacity"),
        (JS = "filter"),
        (ex = "font-variation-settings"),
        (tx = "width"),
        (rx = "height"),
        (nx = "backgroundColor"),
        (ix = "background"),
        (ox = "borderColor"),
        (ax = "color"),
        (sx = "display"),
        (ux = "flex"),
        (cx = "willChange"),
        (lx = "AUTO"),
        (fx = ","),
        (dx = ":"),
        (px = "|"),
        (gx = "CHILDREN"),
        (hx = "IMMEDIATE_CHILDREN"),
        (vx = "SIBLINGS"),
        (Ex = "PARENT"),
        (yx = "preserve-3d"),
        (mx = "HTML_ELEMENT"),
        (_x = "PLAIN_OBJECT"),
        (Ix = "ABSTRACT_NODE"),
        (Tx = "RENDER_TRANSFORM"),
        (bx = "RENDER_GENERAL"),
        (Ox = "RENDER_STYLE"),
        (Ax = "RENDER_PLUGIN");
    });
  var Cf = {};
  be(Cf, {
    ActionAppliesTo: () => $A,
    ActionTypeConsts: () => Oe,
    EventAppliesTo: () => Vo,
    EventBasedOn: () => ze,
    EventContinuousMouseAxes: () => kA,
    EventLimitAffectedElements: () => zA,
    EventTypeConsts: () => Ge,
    IX2EngineActionTypes: () => ue,
    IX2EngineConstants: () => ge,
    InteractionTypeConsts: () => YA,
    QuickEffectDirectionConsts: () => KA,
    QuickEffectIds: () => En,
    ReducedMotionTypes: () => Xo,
  });
  var Ae = re(() => {
    "use strict";
    Uo();
    yn();
    Sf();
    xf();
    wf();
    Rf();
    yn();
    Uo();
  });
  var Sx,
    Nf,
    Lf = re(() => {
      "use strict";
      Ae();
      ({ IX2_RAW_DATA_IMPORTED: Sx } = ue),
        (Nf = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case Sx:
              return t.payload.ixData || Object.freeze({});
            default:
              return e;
          }
        });
    });
  var Dt = u((oe) => {
    "use strict";
    Object.defineProperty(oe, "__esModule", { value: !0 });
    var xx =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    oe.clone = _n;
    oe.addLast = Mf;
    oe.addFirst = Df;
    oe.removeLast = Ff;
    oe.removeFirst = Gf;
    oe.insert = Vf;
    oe.removeAt = Uf;
    oe.replaceAt = Xf;
    oe.getIn = In;
    oe.set = Tn;
    oe.setIn = bn;
    oe.update = Bf;
    oe.updateIn = Wf;
    oe.merge = jf;
    oe.mergeDeep = kf;
    oe.mergeIn = zf;
    oe.omit = Kf;
    oe.addDefaults = $f;
    var Pf = "INVALID_ARGS";
    function qf(e) {
      throw new Error(e);
    }
    function Ho(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols
        ? t.concat(Object.getOwnPropertySymbols(e))
        : t;
    }
    var wx = {}.hasOwnProperty;
    function _n(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = Ho(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        r[i] = e[i];
      }
      return r;
    }
    function Se(e, t, r) {
      var n = r;
      n == null && qf(Pf);
      for (
        var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), s = 3;
        s < o;
        s++
      )
        a[s - 3] = arguments[s];
      for (var c = 0; c < a.length; c++) {
        var f = a[c];
        if (f != null) {
          var p = Ho(f);
          if (p.length)
            for (var d = 0; d <= p.length; d++) {
              var g = p[d];
              if (!(e && n[g] !== void 0)) {
                var E = f[g];
                t && mn(n[g]) && mn(E) && (E = Se(e, t, n[g], E)),
                  !(E === void 0 || E === n[g]) &&
                    (i || ((i = !0), (n = _n(n))), (n[g] = E));
              }
            }
        }
      }
      return n;
    }
    function mn(e) {
      var t = typeof e > "u" ? "undefined" : xx(e);
      return e != null && (t === "object" || t === "function");
    }
    function Mf(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function Df(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function Ff(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function Gf(e) {
      return e.length ? e.slice(1) : e;
    }
    function Vf(e, t, r) {
      return e
        .slice(0, t)
        .concat(Array.isArray(r) ? r : [r])
        .concat(e.slice(t));
    }
    function Uf(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function Xf(e, t, r) {
      if (e[t] === r) return e;
      for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
      return (i[t] = r), i;
    }
    function In(e, t) {
      if ((!Array.isArray(t) && qf(Pf), e != null)) {
        for (var r = e, n = 0; n < t.length; n++) {
          var i = t[n];
          if (((r = r?.[i]), r === void 0)) return r;
        }
        return r;
      }
    }
    function Tn(e, t, r) {
      var n = typeof t == "number" ? [] : {},
        i = e ?? n;
      if (i[t] === r) return i;
      var o = _n(i);
      return (o[t] = r), o;
    }
    function Hf(e, t, r, n) {
      var i = void 0,
        o = t[n];
      if (n === t.length - 1) i = r;
      else {
        var a =
          mn(e) && mn(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
        i = Hf(a, t, r, n + 1);
      }
      return Tn(e, o, i);
    }
    function bn(e, t, r) {
      return t.length ? Hf(e, t, r, 0) : r;
    }
    function Bf(e, t, r) {
      var n = e?.[t],
        i = r(n);
      return Tn(e, t, i);
    }
    function Wf(e, t, r) {
      var n = In(e, t),
        i = r(n);
      return bn(e, t, i);
    }
    function jf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6;
        c < a;
        c++
      )
        s[c - 6] = arguments[c];
      return s.length
        ? Se.call.apply(Se, [null, !1, !1, e, t, r, n, i, o].concat(s))
        : Se(!1, !1, e, t, r, n, i, o);
    }
    function kf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6;
        c < a;
        c++
      )
        s[c - 6] = arguments[c];
      return s.length
        ? Se.call.apply(Se, [null, !1, !0, e, t, r, n, i, o].concat(s))
        : Se(!1, !0, e, t, r, n, i, o);
    }
    function zf(e, t, r, n, i, o, a) {
      var s = In(e, t);
      s == null && (s = {});
      for (
        var c = void 0,
          f = arguments.length,
          p = Array(f > 7 ? f - 7 : 0),
          d = 7;
        d < f;
        d++
      )
        p[d - 7] = arguments[d];
      return (
        p.length
          ? (c = Se.call.apply(Se, [null, !1, !1, s, r, n, i, o, a].concat(p)))
          : (c = Se(!1, !1, s, r, n, i, o, a)),
        bn(e, t, c)
      );
    }
    function Kf(e, t) {
      for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
        if (wx.call(e, r[i])) {
          n = !0;
          break;
        }
      if (!n) return e;
      for (var o = {}, a = Ho(e), s = 0; s < a.length; s++) {
        var c = a[s];
        r.indexOf(c) >= 0 || (o[c] = e[c]);
      }
      return o;
    }
    function $f(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6;
        c < a;
        c++
      )
        s[c - 6] = arguments[c];
      return s.length
        ? Se.call.apply(Se, [null, !0, !1, e, t, r, n, i, o].concat(s))
        : Se(!0, !1, e, t, r, n, i, o);
    }
    var Rx = {
      clone: _n,
      addLast: Mf,
      addFirst: Df,
      removeLast: Ff,
      removeFirst: Gf,
      insert: Vf,
      removeAt: Uf,
      replaceAt: Xf,
      getIn: In,
      set: Tn,
      setIn: bn,
      update: Bf,
      updateIn: Wf,
      merge: jf,
      mergeDeep: kf,
      mergeIn: zf,
      omit: Kf,
      addDefaults: $f,
    };
    oe.default = Rx;
  });
  var Qf,
    Cx,
    Nx,
    Lx,
    Px,
    qx,
    Yf,
    Zf,
    Jf = re(() => {
      "use strict";
      Ae();
      (Qf = Y(Dt())),
        ({
          IX2_PREVIEW_REQUESTED: Cx,
          IX2_PLAYBACK_REQUESTED: Nx,
          IX2_STOP_REQUESTED: Lx,
          IX2_CLEAR_REQUESTED: Px,
        } = ue),
        (qx = { preview: {}, playback: {}, stop: {}, clear: {} }),
        (Yf = Object.create(null, {
          [Cx]: { value: "preview" },
          [Nx]: { value: "playback" },
          [Lx]: { value: "stop" },
          [Px]: { value: "clear" },
        })),
        (Zf = (e = qx, t) => {
          if (t.type in Yf) {
            let r = [Yf[t.type]];
            return (0, Qf.setIn)(e, [r], { ...t.payload });
          }
          return e;
        });
    });
  var ye,
    Mx,
    Dx,
    Fx,
    Gx,
    Vx,
    Ux,
    Xx,
    Hx,
    Bx,
    Wx,
    ed,
    jx,
    td,
    rd = re(() => {
      "use strict";
      Ae();
      (ye = Y(Dt())),
        ({
          IX2_SESSION_INITIALIZED: Mx,
          IX2_SESSION_STARTED: Dx,
          IX2_TEST_FRAME_RENDERED: Fx,
          IX2_SESSION_STOPPED: Gx,
          IX2_EVENT_LISTENER_ADDED: Vx,
          IX2_EVENT_STATE_CHANGED: Ux,
          IX2_ANIMATION_FRAME_CHANGED: Xx,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: Hx,
          IX2_VIEWPORT_WIDTH_CHANGED: Bx,
          IX2_MEDIA_QUERIES_DEFINED: Wx,
        } = ue),
        (ed = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        }),
        (jx = 20),
        (td = (e = ed, t) => {
          switch (t.type) {
            case Mx: {
              let { hasBoundaryNodes: r, reducedMotion: n } = t.payload;
              return (0, ye.merge)(e, {
                hasBoundaryNodes: r,
                reducedMotion: n,
              });
            }
            case Dx:
              return (0, ye.set)(e, "active", !0);
            case Fx: {
              let {
                payload: { step: r = jx },
              } = t;
              return (0, ye.set)(e, "tick", e.tick + r);
            }
            case Gx:
              return ed;
            case Xx: {
              let {
                payload: { now: r },
              } = t;
              return (0, ye.set)(e, "tick", r);
            }
            case Vx: {
              let r = (0, ye.addLast)(e.eventListeners, t.payload);
              return (0, ye.set)(e, "eventListeners", r);
            }
            case Ux: {
              let { stateKey: r, newState: n } = t.payload;
              return (0, ye.setIn)(e, ["eventState", r], n);
            }
            case Hx: {
              let { actionListId: r, isPlaying: n } = t.payload;
              return (0, ye.setIn)(e, ["playbackState", r], n);
            }
            case Bx: {
              let { width: r, mediaQueries: n } = t.payload,
                i = n.length,
                o = null;
              for (let a = 0; a < i; a++) {
                let { key: s, min: c, max: f } = n[a];
                if (r >= c && r <= f) {
                  o = s;
                  break;
                }
              }
              return (0, ye.merge)(e, { viewportWidth: r, mediaQueryKey: o });
            }
            case Wx:
              return (0, ye.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        });
    });
  var id = u((JH, nd) => {
    function kx() {
      (this.__data__ = []), (this.size = 0);
    }
    nd.exports = kx;
  });
  var On = u((eB, od) => {
    function zx(e, t) {
      return e === t || (e !== e && t !== t);
    }
    od.exports = zx;
  });
  var Tr = u((tB, ad) => {
    var Kx = On();
    function $x(e, t) {
      for (var r = e.length; r--; ) if (Kx(e[r][0], t)) return r;
      return -1;
    }
    ad.exports = $x;
  });
  var ud = u((rB, sd) => {
    var Yx = Tr(),
      Qx = Array.prototype,
      Zx = Qx.splice;
    function Jx(e) {
      var t = this.__data__,
        r = Yx(t, e);
      if (r < 0) return !1;
      var n = t.length - 1;
      return r == n ? t.pop() : Zx.call(t, r, 1), --this.size, !0;
    }
    sd.exports = Jx;
  });
  var ld = u((nB, cd) => {
    var e0 = Tr();
    function t0(e) {
      var t = this.__data__,
        r = e0(t, e);
      return r < 0 ? void 0 : t[r][1];
    }
    cd.exports = t0;
  });
  var dd = u((iB, fd) => {
    var r0 = Tr();
    function n0(e) {
      return r0(this.__data__, e) > -1;
    }
    fd.exports = n0;
  });
  var gd = u((oB, pd) => {
    var i0 = Tr();
    function o0(e, t) {
      var r = this.__data__,
        n = i0(r, e);
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
    }
    pd.exports = o0;
  });
  var br = u((aB, hd) => {
    var a0 = id(),
      s0 = ud(),
      u0 = ld(),
      c0 = dd(),
      l0 = gd();
    function Ft(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Ft.prototype.clear = a0;
    Ft.prototype.delete = s0;
    Ft.prototype.get = u0;
    Ft.prototype.has = c0;
    Ft.prototype.set = l0;
    hd.exports = Ft;
  });
  var Ed = u((sB, vd) => {
    var f0 = br();
    function d0() {
      (this.__data__ = new f0()), (this.size = 0);
    }
    vd.exports = d0;
  });
  var md = u((uB, yd) => {
    function p0(e) {
      var t = this.__data__,
        r = t.delete(e);
      return (this.size = t.size), r;
    }
    yd.exports = p0;
  });
  var Id = u((cB, _d) => {
    function g0(e) {
      return this.__data__.get(e);
    }
    _d.exports = g0;
  });
  var bd = u((lB, Td) => {
    function h0(e) {
      return this.__data__.has(e);
    }
    Td.exports = h0;
  });
  var Ke = u((fB, Od) => {
    function v0(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    Od.exports = v0;
  });
  var Bo = u((dB, Ad) => {
    var E0 = lt(),
      y0 = Ke(),
      m0 = "[object AsyncFunction]",
      _0 = "[object Function]",
      I0 = "[object GeneratorFunction]",
      T0 = "[object Proxy]";
    function b0(e) {
      if (!y0(e)) return !1;
      var t = E0(e);
      return t == _0 || t == I0 || t == m0 || t == T0;
    }
    Ad.exports = b0;
  });
  var xd = u((pB, Sd) => {
    var O0 = Fe(),
      A0 = O0["__core-js_shared__"];
    Sd.exports = A0;
  });
  var Cd = u((gB, Rd) => {
    var Wo = xd(),
      wd = (function () {
        var e = /[^.]+$/.exec((Wo && Wo.keys && Wo.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
    function S0(e) {
      return !!wd && wd in e;
    }
    Rd.exports = S0;
  });
  var jo = u((hB, Nd) => {
    var x0 = Function.prototype,
      w0 = x0.toString;
    function R0(e) {
      if (e != null) {
        try {
          return w0.call(e);
        } catch {}
        try {
          return e + "";
        } catch {}
      }
      return "";
    }
    Nd.exports = R0;
  });
  var Pd = u((vB, Ld) => {
    var C0 = Bo(),
      N0 = Cd(),
      L0 = Ke(),
      P0 = jo(),
      q0 = /[\\^$.*+?()[\]{}|]/g,
      M0 = /^\[object .+?Constructor\]$/,
      D0 = Function.prototype,
      F0 = Object.prototype,
      G0 = D0.toString,
      V0 = F0.hasOwnProperty,
      U0 = RegExp(
        "^" +
          G0.call(V0)
            .replace(q0, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    function X0(e) {
      if (!L0(e) || N0(e)) return !1;
      var t = C0(e) ? U0 : M0;
      return t.test(P0(e));
    }
    Ld.exports = X0;
  });
  var Md = u((EB, qd) => {
    function H0(e, t) {
      return e?.[t];
    }
    qd.exports = H0;
  });
  var ft = u((yB, Dd) => {
    var B0 = Pd(),
      W0 = Md();
    function j0(e, t) {
      var r = W0(e, t);
      return B0(r) ? r : void 0;
    }
    Dd.exports = j0;
  });
  var An = u((mB, Fd) => {
    var k0 = ft(),
      z0 = Fe(),
      K0 = k0(z0, "Map");
    Fd.exports = K0;
  });
  var Or = u((_B, Gd) => {
    var $0 = ft(),
      Y0 = $0(Object, "create");
    Gd.exports = Y0;
  });
  var Xd = u((IB, Ud) => {
    var Vd = Or();
    function Q0() {
      (this.__data__ = Vd ? Vd(null) : {}), (this.size = 0);
    }
    Ud.exports = Q0;
  });
  var Bd = u((TB, Hd) => {
    function Z0(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    Hd.exports = Z0;
  });
  var jd = u((bB, Wd) => {
    var J0 = Or(),
      ew = "__lodash_hash_undefined__",
      tw = Object.prototype,
      rw = tw.hasOwnProperty;
    function nw(e) {
      var t = this.__data__;
      if (J0) {
        var r = t[e];
        return r === ew ? void 0 : r;
      }
      return rw.call(t, e) ? t[e] : void 0;
    }
    Wd.exports = nw;
  });
  var zd = u((OB, kd) => {
    var iw = Or(),
      ow = Object.prototype,
      aw = ow.hasOwnProperty;
    function sw(e) {
      var t = this.__data__;
      return iw ? t[e] !== void 0 : aw.call(t, e);
    }
    kd.exports = sw;
  });
  var $d = u((AB, Kd) => {
    var uw = Or(),
      cw = "__lodash_hash_undefined__";
    function lw(e, t) {
      var r = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (r[e] = uw && t === void 0 ? cw : t),
        this
      );
    }
    Kd.exports = lw;
  });
  var Qd = u((SB, Yd) => {
    var fw = Xd(),
      dw = Bd(),
      pw = jd(),
      gw = zd(),
      hw = $d();
    function Gt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Gt.prototype.clear = fw;
    Gt.prototype.delete = dw;
    Gt.prototype.get = pw;
    Gt.prototype.has = gw;
    Gt.prototype.set = hw;
    Yd.exports = Gt;
  });
  var ep = u((xB, Jd) => {
    var Zd = Qd(),
      vw = br(),
      Ew = An();
    function yw() {
      (this.size = 0),
        (this.__data__ = {
          hash: new Zd(),
          map: new (Ew || vw)(),
          string: new Zd(),
        });
    }
    Jd.exports = yw;
  });
  var rp = u((wB, tp) => {
    function mw(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean"
        ? e !== "__proto__"
        : e === null;
    }
    tp.exports = mw;
  });
  var Ar = u((RB, np) => {
    var _w = rp();
    function Iw(e, t) {
      var r = e.__data__;
      return _w(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
    }
    np.exports = Iw;
  });
  var op = u((CB, ip) => {
    var Tw = Ar();
    function bw(e) {
      var t = Tw(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    ip.exports = bw;
  });
  var sp = u((NB, ap) => {
    var Ow = Ar();
    function Aw(e) {
      return Ow(this, e).get(e);
    }
    ap.exports = Aw;
  });
  var cp = u((LB, up) => {
    var Sw = Ar();
    function xw(e) {
      return Sw(this, e).has(e);
    }
    up.exports = xw;
  });
  var fp = u((PB, lp) => {
    var ww = Ar();
    function Rw(e, t) {
      var r = ww(this, e),
        n = r.size;
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
    }
    lp.exports = Rw;
  });
  var Sn = u((qB, dp) => {
    var Cw = ep(),
      Nw = op(),
      Lw = sp(),
      Pw = cp(),
      qw = fp();
    function Vt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Vt.prototype.clear = Cw;
    Vt.prototype.delete = Nw;
    Vt.prototype.get = Lw;
    Vt.prototype.has = Pw;
    Vt.prototype.set = qw;
    dp.exports = Vt;
  });
  var gp = u((MB, pp) => {
    var Mw = br(),
      Dw = An(),
      Fw = Sn(),
      Gw = 200;
    function Vw(e, t) {
      var r = this.__data__;
      if (r instanceof Mw) {
        var n = r.__data__;
        if (!Dw || n.length < Gw - 1)
          return n.push([e, t]), (this.size = ++r.size), this;
        r = this.__data__ = new Fw(n);
      }
      return r.set(e, t), (this.size = r.size), this;
    }
    pp.exports = Vw;
  });
  var ko = u((DB, hp) => {
    var Uw = br(),
      Xw = Ed(),
      Hw = md(),
      Bw = Id(),
      Ww = bd(),
      jw = gp();
    function Ut(e) {
      var t = (this.__data__ = new Uw(e));
      this.size = t.size;
    }
    Ut.prototype.clear = Xw;
    Ut.prototype.delete = Hw;
    Ut.prototype.get = Bw;
    Ut.prototype.has = Ww;
    Ut.prototype.set = jw;
    hp.exports = Ut;
  });
  var Ep = u((FB, vp) => {
    var kw = "__lodash_hash_undefined__";
    function zw(e) {
      return this.__data__.set(e, kw), this;
    }
    vp.exports = zw;
  });
  var mp = u((GB, yp) => {
    function Kw(e) {
      return this.__data__.has(e);
    }
    yp.exports = Kw;
  });
  var Ip = u((VB, _p) => {
    var $w = Sn(),
      Yw = Ep(),
      Qw = mp();
    function xn(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.__data__ = new $w(); ++t < r; ) this.add(e[t]);
    }
    xn.prototype.add = xn.prototype.push = Yw;
    xn.prototype.has = Qw;
    _p.exports = xn;
  });
  var bp = u((UB, Tp) => {
    function Zw(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
        if (t(e[r], r, e)) return !0;
      return !1;
    }
    Tp.exports = Zw;
  });
  var Ap = u((XB, Op) => {
    function Jw(e, t) {
      return e.has(t);
    }
    Op.exports = Jw;
  });
  var zo = u((HB, Sp) => {
    var eR = Ip(),
      tR = bp(),
      rR = Ap(),
      nR = 1,
      iR = 2;
    function oR(e, t, r, n, i, o) {
      var a = r & nR,
        s = e.length,
        c = t.length;
      if (s != c && !(a && c > s)) return !1;
      var f = o.get(e),
        p = o.get(t);
      if (f && p) return f == t && p == e;
      var d = -1,
        g = !0,
        E = r & iR ? new eR() : void 0;
      for (o.set(e, t), o.set(t, e); ++d < s; ) {
        var m = e[d],
          y = t[d];
        if (n) var R = a ? n(y, m, d, t, e, o) : n(m, y, d, e, t, o);
        if (R !== void 0) {
          if (R) continue;
          g = !1;
          break;
        }
        if (E) {
          if (
            !tR(t, function (b, A) {
              if (!rR(E, A) && (m === b || i(m, b, r, n, o))) return E.push(A);
            })
          ) {
            g = !1;
            break;
          }
        } else if (!(m === y || i(m, y, r, n, o))) {
          g = !1;
          break;
        }
      }
      return o.delete(e), o.delete(t), g;
    }
    Sp.exports = oR;
  });
  var wp = u((BB, xp) => {
    var aR = Fe(),
      sR = aR.Uint8Array;
    xp.exports = sR;
  });
  var Cp = u((WB, Rp) => {
    function uR(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n, i) {
          r[++t] = [i, n];
        }),
        r
      );
    }
    Rp.exports = uR;
  });
  var Lp = u((jB, Np) => {
    function cR(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n) {
          r[++t] = n;
        }),
        r
      );
    }
    Np.exports = cR;
  });
  var Fp = u((kB, Dp) => {
    var Pp = Pt(),
      qp = wp(),
      lR = On(),
      fR = zo(),
      dR = Cp(),
      pR = Lp(),
      gR = 1,
      hR = 2,
      vR = "[object Boolean]",
      ER = "[object Date]",
      yR = "[object Error]",
      mR = "[object Map]",
      _R = "[object Number]",
      IR = "[object RegExp]",
      TR = "[object Set]",
      bR = "[object String]",
      OR = "[object Symbol]",
      AR = "[object ArrayBuffer]",
      SR = "[object DataView]",
      Mp = Pp ? Pp.prototype : void 0,
      Ko = Mp ? Mp.valueOf : void 0;
    function xR(e, t, r, n, i, o, a) {
      switch (r) {
        case SR:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case AR:
          return !(e.byteLength != t.byteLength || !o(new qp(e), new qp(t)));
        case vR:
        case ER:
        case _R:
          return lR(+e, +t);
        case yR:
          return e.name == t.name && e.message == t.message;
        case IR:
        case bR:
          return e == t + "";
        case mR:
          var s = dR;
        case TR:
          var c = n & gR;
          if ((s || (s = pR), e.size != t.size && !c)) return !1;
          var f = a.get(e);
          if (f) return f == t;
          (n |= hR), a.set(e, t);
          var p = fR(s(e), s(t), n, i, o, a);
          return a.delete(e), p;
        case OR:
          if (Ko) return Ko.call(e) == Ko.call(t);
      }
      return !1;
    }
    Dp.exports = xR;
  });
  var wn = u((zB, Gp) => {
    function wR(e, t) {
      for (var r = -1, n = t.length, i = e.length; ++r < n; ) e[i + r] = t[r];
      return e;
    }
    Gp.exports = wR;
  });
  var fe = u((KB, Vp) => {
    var RR = Array.isArray;
    Vp.exports = RR;
  });
  var $o = u(($B, Up) => {
    var CR = wn(),
      NR = fe();
    function LR(e, t, r) {
      var n = t(e);
      return NR(e) ? n : CR(n, r(e));
    }
    Up.exports = LR;
  });
  var Hp = u((YB, Xp) => {
    function PR(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n; ) {
        var a = e[r];
        t(a, r, e) && (o[i++] = a);
      }
      return o;
    }
    Xp.exports = PR;
  });
  var Yo = u((QB, Bp) => {
    function qR() {
      return [];
    }
    Bp.exports = qR;
  });
  var Qo = u((ZB, jp) => {
    var MR = Hp(),
      DR = Yo(),
      FR = Object.prototype,
      GR = FR.propertyIsEnumerable,
      Wp = Object.getOwnPropertySymbols,
      VR = Wp
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                MR(Wp(e), function (t) {
                  return GR.call(e, t);
                }));
          }
        : DR;
    jp.exports = VR;
  });
  var zp = u((JB, kp) => {
    function UR(e, t) {
      for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
      return n;
    }
    kp.exports = UR;
  });
  var $p = u((eW, Kp) => {
    var XR = lt(),
      HR = Je(),
      BR = "[object Arguments]";
    function WR(e) {
      return HR(e) && XR(e) == BR;
    }
    Kp.exports = WR;
  });
  var Sr = u((tW, Zp) => {
    var Yp = $p(),
      jR = Je(),
      Qp = Object.prototype,
      kR = Qp.hasOwnProperty,
      zR = Qp.propertyIsEnumerable,
      KR = Yp(
        (function () {
          return arguments;
        })()
      )
        ? Yp
        : function (e) {
            return jR(e) && kR.call(e, "callee") && !zR.call(e, "callee");
          };
    Zp.exports = KR;
  });
  var eg = u((rW, Jp) => {
    function $R() {
      return !1;
    }
    Jp.exports = $R;
  });
  var Rn = u((xr, Xt) => {
    var YR = Fe(),
      QR = eg(),
      ng = typeof xr == "object" && xr && !xr.nodeType && xr,
      tg = ng && typeof Xt == "object" && Xt && !Xt.nodeType && Xt,
      ZR = tg && tg.exports === ng,
      rg = ZR ? YR.Buffer : void 0,
      JR = rg ? rg.isBuffer : void 0,
      eC = JR || QR;
    Xt.exports = eC;
  });
  var Cn = u((nW, ig) => {
    var tC = 9007199254740991,
      rC = /^(?:0|[1-9]\d*)$/;
    function nC(e, t) {
      var r = typeof e;
      return (
        (t = t ?? tC),
        !!t &&
          (r == "number" || (r != "symbol" && rC.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
      );
    }
    ig.exports = nC;
  });
  var Nn = u((iW, og) => {
    var iC = 9007199254740991;
    function oC(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= iC;
    }
    og.exports = oC;
  });
  var sg = u((oW, ag) => {
    var aC = lt(),
      sC = Nn(),
      uC = Je(),
      cC = "[object Arguments]",
      lC = "[object Array]",
      fC = "[object Boolean]",
      dC = "[object Date]",
      pC = "[object Error]",
      gC = "[object Function]",
      hC = "[object Map]",
      vC = "[object Number]",
      EC = "[object Object]",
      yC = "[object RegExp]",
      mC = "[object Set]",
      _C = "[object String]",
      IC = "[object WeakMap]",
      TC = "[object ArrayBuffer]",
      bC = "[object DataView]",
      OC = "[object Float32Array]",
      AC = "[object Float64Array]",
      SC = "[object Int8Array]",
      xC = "[object Int16Array]",
      wC = "[object Int32Array]",
      RC = "[object Uint8Array]",
      CC = "[object Uint8ClampedArray]",
      NC = "[object Uint16Array]",
      LC = "[object Uint32Array]",
      ee = {};
    ee[OC] =
      ee[AC] =
      ee[SC] =
      ee[xC] =
      ee[wC] =
      ee[RC] =
      ee[CC] =
      ee[NC] =
      ee[LC] =
        !0;
    ee[cC] =
      ee[lC] =
      ee[TC] =
      ee[fC] =
      ee[bC] =
      ee[dC] =
      ee[pC] =
      ee[gC] =
      ee[hC] =
      ee[vC] =
      ee[EC] =
      ee[yC] =
      ee[mC] =
      ee[_C] =
      ee[IC] =
        !1;
    function PC(e) {
      return uC(e) && sC(e.length) && !!ee[aC(e)];
    }
    ag.exports = PC;
  });
  var cg = u((aW, ug) => {
    function qC(e) {
      return function (t) {
        return e(t);
      };
    }
    ug.exports = qC;
  });
  var fg = u((wr, Ht) => {
    var MC = bo(),
      lg = typeof wr == "object" && wr && !wr.nodeType && wr,
      Rr = lg && typeof Ht == "object" && Ht && !Ht.nodeType && Ht,
      DC = Rr && Rr.exports === lg,
      Zo = DC && MC.process,
      FC = (function () {
        try {
          var e = Rr && Rr.require && Rr.require("util").types;
          return e || (Zo && Zo.binding && Zo.binding("util"));
        } catch {}
      })();
    Ht.exports = FC;
  });
  var Ln = u((sW, gg) => {
    var GC = sg(),
      VC = cg(),
      dg = fg(),
      pg = dg && dg.isTypedArray,
      UC = pg ? VC(pg) : GC;
    gg.exports = UC;
  });
  var Jo = u((uW, hg) => {
    var XC = zp(),
      HC = Sr(),
      BC = fe(),
      WC = Rn(),
      jC = Cn(),
      kC = Ln(),
      zC = Object.prototype,
      KC = zC.hasOwnProperty;
    function $C(e, t) {
      var r = BC(e),
        n = !r && HC(e),
        i = !r && !n && WC(e),
        o = !r && !n && !i && kC(e),
        a = r || n || i || o,
        s = a ? XC(e.length, String) : [],
        c = s.length;
      for (var f in e)
        (t || KC.call(e, f)) &&
          !(
            a &&
            (f == "length" ||
              (i && (f == "offset" || f == "parent")) ||
              (o &&
                (f == "buffer" || f == "byteLength" || f == "byteOffset")) ||
              jC(f, c))
          ) &&
          s.push(f);
      return s;
    }
    hg.exports = $C;
  });
  var Pn = u((cW, vg) => {
    var YC = Object.prototype;
    function QC(e) {
      var t = e && e.constructor,
        r = (typeof t == "function" && t.prototype) || YC;
      return e === r;
    }
    vg.exports = QC;
  });
  var yg = u((lW, Eg) => {
    var ZC = Oo(),
      JC = ZC(Object.keys, Object);
    Eg.exports = JC;
  });
  var qn = u((fW, mg) => {
    var eN = Pn(),
      tN = yg(),
      rN = Object.prototype,
      nN = rN.hasOwnProperty;
    function iN(e) {
      if (!eN(e)) return tN(e);
      var t = [];
      for (var r in Object(e)) nN.call(e, r) && r != "constructor" && t.push(r);
      return t;
    }
    mg.exports = iN;
  });
  var _t = u((dW, _g) => {
    var oN = Bo(),
      aN = Nn();
    function sN(e) {
      return e != null && aN(e.length) && !oN(e);
    }
    _g.exports = sN;
  });
  var Cr = u((pW, Ig) => {
    var uN = Jo(),
      cN = qn(),
      lN = _t();
    function fN(e) {
      return lN(e) ? uN(e) : cN(e);
    }
    Ig.exports = fN;
  });
  var bg = u((gW, Tg) => {
    var dN = $o(),
      pN = Qo(),
      gN = Cr();
    function hN(e) {
      return dN(e, gN, pN);
    }
    Tg.exports = hN;
  });
  var Sg = u((hW, Ag) => {
    var Og = bg(),
      vN = 1,
      EN = Object.prototype,
      yN = EN.hasOwnProperty;
    function mN(e, t, r, n, i, o) {
      var a = r & vN,
        s = Og(e),
        c = s.length,
        f = Og(t),
        p = f.length;
      if (c != p && !a) return !1;
      for (var d = c; d--; ) {
        var g = s[d];
        if (!(a ? g in t : yN.call(t, g))) return !1;
      }
      var E = o.get(e),
        m = o.get(t);
      if (E && m) return E == t && m == e;
      var y = !0;
      o.set(e, t), o.set(t, e);
      for (var R = a; ++d < c; ) {
        g = s[d];
        var b = e[g],
          A = t[g];
        if (n) var T = a ? n(A, b, g, t, e, o) : n(b, A, g, e, t, o);
        if (!(T === void 0 ? b === A || i(b, A, r, n, o) : T)) {
          y = !1;
          break;
        }
        R || (R = g == "constructor");
      }
      if (y && !R) {
        var x = e.constructor,
          C = t.constructor;
        x != C &&
          "constructor" in e &&
          "constructor" in t &&
          !(
            typeof x == "function" &&
            x instanceof x &&
            typeof C == "function" &&
            C instanceof C
          ) &&
          (y = !1);
      }
      return o.delete(e), o.delete(t), y;
    }
    Ag.exports = mN;
  });
  var wg = u((vW, xg) => {
    var _N = ft(),
      IN = Fe(),
      TN = _N(IN, "DataView");
    xg.exports = TN;
  });
  var Cg = u((EW, Rg) => {
    var bN = ft(),
      ON = Fe(),
      AN = bN(ON, "Promise");
    Rg.exports = AN;
  });
  var Lg = u((yW, Ng) => {
    var SN = ft(),
      xN = Fe(),
      wN = SN(xN, "Set");
    Ng.exports = wN;
  });
  var ea = u((mW, Pg) => {
    var RN = ft(),
      CN = Fe(),
      NN = RN(CN, "WeakMap");
    Pg.exports = NN;
  });
  var Mn = u((_W, Ug) => {
    var ta = wg(),
      ra = An(),
      na = Cg(),
      ia = Lg(),
      oa = ea(),
      Vg = lt(),
      Bt = jo(),
      qg = "[object Map]",
      LN = "[object Object]",
      Mg = "[object Promise]",
      Dg = "[object Set]",
      Fg = "[object WeakMap]",
      Gg = "[object DataView]",
      PN = Bt(ta),
      qN = Bt(ra),
      MN = Bt(na),
      DN = Bt(ia),
      FN = Bt(oa),
      It = Vg;
    ((ta && It(new ta(new ArrayBuffer(1))) != Gg) ||
      (ra && It(new ra()) != qg) ||
      (na && It(na.resolve()) != Mg) ||
      (ia && It(new ia()) != Dg) ||
      (oa && It(new oa()) != Fg)) &&
      (It = function (e) {
        var t = Vg(e),
          r = t == LN ? e.constructor : void 0,
          n = r ? Bt(r) : "";
        if (n)
          switch (n) {
            case PN:
              return Gg;
            case qN:
              return qg;
            case MN:
              return Mg;
            case DN:
              return Dg;
            case FN:
              return Fg;
          }
        return t;
      });
    Ug.exports = It;
  });
  var Kg = u((IW, zg) => {
    var aa = ko(),
      GN = zo(),
      VN = Fp(),
      UN = Sg(),
      Xg = Mn(),
      Hg = fe(),
      Bg = Rn(),
      XN = Ln(),
      HN = 1,
      Wg = "[object Arguments]",
      jg = "[object Array]",
      Dn = "[object Object]",
      BN = Object.prototype,
      kg = BN.hasOwnProperty;
    function WN(e, t, r, n, i, o) {
      var a = Hg(e),
        s = Hg(t),
        c = a ? jg : Xg(e),
        f = s ? jg : Xg(t);
      (c = c == Wg ? Dn : c), (f = f == Wg ? Dn : f);
      var p = c == Dn,
        d = f == Dn,
        g = c == f;
      if (g && Bg(e)) {
        if (!Bg(t)) return !1;
        (a = !0), (p = !1);
      }
      if (g && !p)
        return (
          o || (o = new aa()),
          a || XN(e) ? GN(e, t, r, n, i, o) : VN(e, t, c, r, n, i, o)
        );
      if (!(r & HN)) {
        var E = p && kg.call(e, "__wrapped__"),
          m = d && kg.call(t, "__wrapped__");
        if (E || m) {
          var y = E ? e.value() : e,
            R = m ? t.value() : t;
          return o || (o = new aa()), i(y, R, r, n, o);
        }
      }
      return g ? (o || (o = new aa()), UN(e, t, r, n, i, o)) : !1;
    }
    zg.exports = WN;
  });
  var sa = u((TW, Qg) => {
    var jN = Kg(),
      $g = Je();
    function Yg(e, t, r, n, i) {
      return e === t
        ? !0
        : e == null || t == null || (!$g(e) && !$g(t))
        ? e !== e && t !== t
        : jN(e, t, r, n, Yg, i);
    }
    Qg.exports = Yg;
  });
  var Jg = u((bW, Zg) => {
    var kN = ko(),
      zN = sa(),
      KN = 1,
      $N = 2;
    function YN(e, t, r, n) {
      var i = r.length,
        o = i,
        a = !n;
      if (e == null) return !o;
      for (e = Object(e); i--; ) {
        var s = r[i];
        if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
      }
      for (; ++i < o; ) {
        s = r[i];
        var c = s[0],
          f = e[c],
          p = s[1];
        if (a && s[2]) {
          if (f === void 0 && !(c in e)) return !1;
        } else {
          var d = new kN();
          if (n) var g = n(f, p, c, e, t, d);
          if (!(g === void 0 ? zN(p, f, KN | $N, n, d) : g)) return !1;
        }
      }
      return !0;
    }
    Zg.exports = YN;
  });
  var ua = u((OW, eh) => {
    var QN = Ke();
    function ZN(e) {
      return e === e && !QN(e);
    }
    eh.exports = ZN;
  });
  var rh = u((AW, th) => {
    var JN = ua(),
      eL = Cr();
    function tL(e) {
      for (var t = eL(e), r = t.length; r--; ) {
        var n = t[r],
          i = e[n];
        t[r] = [n, i, JN(i)];
      }
      return t;
    }
    th.exports = tL;
  });
  var ca = u((SW, nh) => {
    function rL(e, t) {
      return function (r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
      };
    }
    nh.exports = rL;
  });
  var oh = u((xW, ih) => {
    var nL = Jg(),
      iL = rh(),
      oL = ca();
    function aL(e) {
      var t = iL(e);
      return t.length == 1 && t[0][2]
        ? oL(t[0][0], t[0][1])
        : function (r) {
            return r === e || nL(r, e, t);
          };
    }
    ih.exports = aL;
  });
  var Nr = u((wW, ah) => {
    var sL = lt(),
      uL = Je(),
      cL = "[object Symbol]";
    function lL(e) {
      return typeof e == "symbol" || (uL(e) && sL(e) == cL);
    }
    ah.exports = lL;
  });
  var Fn = u((RW, sh) => {
    var fL = fe(),
      dL = Nr(),
      pL = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      gL = /^\w*$/;
    function hL(e, t) {
      if (fL(e)) return !1;
      var r = typeof e;
      return r == "number" ||
        r == "symbol" ||
        r == "boolean" ||
        e == null ||
        dL(e)
        ? !0
        : gL.test(e) || !pL.test(e) || (t != null && e in Object(t));
    }
    sh.exports = hL;
  });
  var lh = u((CW, ch) => {
    var uh = Sn(),
      vL = "Expected a function";
    function la(e, t) {
      if (typeof e != "function" || (t != null && typeof t != "function"))
        throw new TypeError(vL);
      var r = function () {
        var n = arguments,
          i = t ? t.apply(this, n) : n[0],
          o = r.cache;
        if (o.has(i)) return o.get(i);
        var a = e.apply(this, n);
        return (r.cache = o.set(i, a) || o), a;
      };
      return (r.cache = new (la.Cache || uh)()), r;
    }
    la.Cache = uh;
    ch.exports = la;
  });
  var dh = u((NW, fh) => {
    var EL = lh(),
      yL = 500;
    function mL(e) {
      var t = EL(e, function (n) {
          return r.size === yL && r.clear(), n;
        }),
        r = t.cache;
      return t;
    }
    fh.exports = mL;
  });
  var gh = u((LW, ph) => {
    var _L = dh(),
      IL =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      TL = /\\(\\)?/g,
      bL = _L(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(""),
          e.replace(IL, function (r, n, i, o) {
            t.push(i ? o.replace(TL, "$1") : n || r);
          }),
          t
        );
      });
    ph.exports = bL;
  });
  var fa = u((PW, hh) => {
    function OL(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
        i[r] = t(e[r], r, e);
      return i;
    }
    hh.exports = OL;
  });
  var Ih = u((qW, _h) => {
    var vh = Pt(),
      AL = fa(),
      SL = fe(),
      xL = Nr(),
      wL = 1 / 0,
      Eh = vh ? vh.prototype : void 0,
      yh = Eh ? Eh.toString : void 0;
    function mh(e) {
      if (typeof e == "string") return e;
      if (SL(e)) return AL(e, mh) + "";
      if (xL(e)) return yh ? yh.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -wL ? "-0" : t;
    }
    _h.exports = mh;
  });
  var bh = u((MW, Th) => {
    var RL = Ih();
    function CL(e) {
      return e == null ? "" : RL(e);
    }
    Th.exports = CL;
  });
  var Lr = u((DW, Oh) => {
    var NL = fe(),
      LL = Fn(),
      PL = gh(),
      qL = bh();
    function ML(e, t) {
      return NL(e) ? e : LL(e, t) ? [e] : PL(qL(e));
    }
    Oh.exports = ML;
  });
  var Wt = u((FW, Ah) => {
    var DL = Nr(),
      FL = 1 / 0;
    function GL(e) {
      if (typeof e == "string" || DL(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -FL ? "-0" : t;
    }
    Ah.exports = GL;
  });
  var Gn = u((GW, Sh) => {
    var VL = Lr(),
      UL = Wt();
    function XL(e, t) {
      t = VL(t, e);
      for (var r = 0, n = t.length; e != null && r < n; ) e = e[UL(t[r++])];
      return r && r == n ? e : void 0;
    }
    Sh.exports = XL;
  });
  var Vn = u((VW, xh) => {
    var HL = Gn();
    function BL(e, t, r) {
      var n = e == null ? void 0 : HL(e, t);
      return n === void 0 ? r : n;
    }
    xh.exports = BL;
  });
  var Rh = u((UW, wh) => {
    function WL(e, t) {
      return e != null && t in Object(e);
    }
    wh.exports = WL;
  });
  var Nh = u((XW, Ch) => {
    var jL = Lr(),
      kL = Sr(),
      zL = fe(),
      KL = Cn(),
      $L = Nn(),
      YL = Wt();
    function QL(e, t, r) {
      t = jL(t, e);
      for (var n = -1, i = t.length, o = !1; ++n < i; ) {
        var a = YL(t[n]);
        if (!(o = e != null && r(e, a))) break;
        e = e[a];
      }
      return o || ++n != i
        ? o
        : ((i = e == null ? 0 : e.length),
          !!i && $L(i) && KL(a, i) && (zL(e) || kL(e)));
    }
    Ch.exports = QL;
  });
  var Ph = u((HW, Lh) => {
    var ZL = Rh(),
      JL = Nh();
    function eP(e, t) {
      return e != null && JL(e, t, ZL);
    }
    Lh.exports = eP;
  });
  var Mh = u((BW, qh) => {
    var tP = sa(),
      rP = Vn(),
      nP = Ph(),
      iP = Fn(),
      oP = ua(),
      aP = ca(),
      sP = Wt(),
      uP = 1,
      cP = 2;
    function lP(e, t) {
      return iP(e) && oP(t)
        ? aP(sP(e), t)
        : function (r) {
            var n = rP(r, e);
            return n === void 0 && n === t ? nP(r, e) : tP(t, n, uP | cP);
          };
    }
    qh.exports = lP;
  });
  var Un = u((WW, Dh) => {
    function fP(e) {
      return e;
    }
    Dh.exports = fP;
  });
  var da = u((jW, Fh) => {
    function dP(e) {
      return function (t) {
        return t?.[e];
      };
    }
    Fh.exports = dP;
  });
  var Vh = u((kW, Gh) => {
    var pP = Gn();
    function gP(e) {
      return function (t) {
        return pP(t, e);
      };
    }
    Gh.exports = gP;
  });
  var Xh = u((zW, Uh) => {
    var hP = da(),
      vP = Vh(),
      EP = Fn(),
      yP = Wt();
    function mP(e) {
      return EP(e) ? hP(yP(e)) : vP(e);
    }
    Uh.exports = mP;
  });
  var dt = u((KW, Hh) => {
    var _P = oh(),
      IP = Mh(),
      TP = Un(),
      bP = fe(),
      OP = Xh();
    function AP(e) {
      return typeof e == "function"
        ? e
        : e == null
        ? TP
        : typeof e == "object"
        ? bP(e)
          ? IP(e[0], e[1])
          : _P(e)
        : OP(e);
    }
    Hh.exports = AP;
  });
  var pa = u(($W, Bh) => {
    var SP = dt(),
      xP = _t(),
      wP = Cr();
    function RP(e) {
      return function (t, r, n) {
        var i = Object(t);
        if (!xP(t)) {
          var o = SP(r, 3);
          (t = wP(t)),
            (r = function (s) {
              return o(i[s], s, i);
            });
        }
        var a = e(t, r, n);
        return a > -1 ? i[o ? t[a] : a] : void 0;
      };
    }
    Bh.exports = RP;
  });
  var ga = u((YW, Wh) => {
    function CP(e, t, r, n) {
      for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i; )
        if (t(e[o], o, e)) return o;
      return -1;
    }
    Wh.exports = CP;
  });
  var kh = u((QW, jh) => {
    var NP = /\s/;
    function LP(e) {
      for (var t = e.length; t-- && NP.test(e.charAt(t)); );
      return t;
    }
    jh.exports = LP;
  });
  var Kh = u((ZW, zh) => {
    var PP = kh(),
      qP = /^\s+/;
    function MP(e) {
      return e && e.slice(0, PP(e) + 1).replace(qP, "");
    }
    zh.exports = MP;
  });
  var Xn = u((JW, Qh) => {
    var DP = Kh(),
      $h = Ke(),
      FP = Nr(),
      Yh = 0 / 0,
      GP = /^[-+]0x[0-9a-f]+$/i,
      VP = /^0b[01]+$/i,
      UP = /^0o[0-7]+$/i,
      XP = parseInt;
    function HP(e) {
      if (typeof e == "number") return e;
      if (FP(e)) return Yh;
      if ($h(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = $h(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = DP(e);
      var r = VP.test(e);
      return r || UP.test(e) ? XP(e.slice(2), r ? 2 : 8) : GP.test(e) ? Yh : +e;
    }
    Qh.exports = HP;
  });
  var ev = u((ej, Jh) => {
    var BP = Xn(),
      Zh = 1 / 0,
      WP = 17976931348623157e292;
    function jP(e) {
      if (!e) return e === 0 ? e : 0;
      if (((e = BP(e)), e === Zh || e === -Zh)) {
        var t = e < 0 ? -1 : 1;
        return t * WP;
      }
      return e === e ? e : 0;
    }
    Jh.exports = jP;
  });
  var ha = u((tj, tv) => {
    var kP = ev();
    function zP(e) {
      var t = kP(e),
        r = t % 1;
      return t === t ? (r ? t - r : t) : 0;
    }
    tv.exports = zP;
  });
  var nv = u((rj, rv) => {
    var KP = ga(),
      $P = dt(),
      YP = ha(),
      QP = Math.max;
    function ZP(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = r == null ? 0 : YP(r);
      return i < 0 && (i = QP(n + i, 0)), KP(e, $P(t, 3), i);
    }
    rv.exports = ZP;
  });
  var va = u((nj, iv) => {
    var JP = pa(),
      eq = nv(),
      tq = JP(eq);
    iv.exports = tq;
  });
  var sv = {};
  be(sv, {
    ELEMENT_MATCHES: () => rq,
    FLEX_PREFIXED: () => Ea,
    IS_BROWSER_ENV: () => Ve,
    TRANSFORM_PREFIXED: () => pt,
    TRANSFORM_STYLE_PREFIXED: () => Bn,
    withBrowser: () => Hn,
  });
  var av,
    Ve,
    Hn,
    rq,
    Ea,
    pt,
    ov,
    Bn,
    Wn = re(() => {
      "use strict";
      (av = Y(va())),
        (Ve = typeof window < "u"),
        (Hn = (e, t) => (Ve ? e() : t)),
        (rq = Hn(() =>
          (0, av.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector",
            ],
            (e) => e in Element.prototype
          )
        )),
        (Ea = Hn(() => {
          let e = document.createElement("i"),
            t = [
              "flex",
              "-webkit-flex",
              "-ms-flexbox",
              "-moz-box",
              "-webkit-box",
            ],
            r = "";
          try {
            let { length: n } = t;
            for (let i = 0; i < n; i++) {
              let o = t[i];
              if (((e.style.display = o), e.style.display === o)) return o;
            }
            return r;
          } catch {
            return r;
          }
        }, "flex")),
        (pt = Hn(() => {
          let e = document.createElement("i");
          if (e.style.transform == null) {
            let t = ["Webkit", "Moz", "ms"],
              r = "Transform",
              { length: n } = t;
            for (let i = 0; i < n; i++) {
              let o = t[i] + r;
              if (e.style[o] !== void 0) return o;
            }
          }
          return "transform";
        }, "transform")),
        (ov = pt.split("transform")[0]),
        (Bn = ov ? ov + "TransformStyle" : "transformStyle");
    });
  var ya = u((ij, dv) => {
    var nq = 4,
      iq = 0.001,
      oq = 1e-7,
      aq = 10,
      Pr = 11,
      jn = 1 / (Pr - 1),
      sq = typeof Float32Array == "function";
    function uv(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function cv(e, t) {
      return 3 * t - 6 * e;
    }
    function lv(e) {
      return 3 * e;
    }
    function kn(e, t, r) {
      return ((uv(t, r) * e + cv(t, r)) * e + lv(t)) * e;
    }
    function fv(e, t, r) {
      return 3 * uv(t, r) * e * e + 2 * cv(t, r) * e + lv(t);
    }
    function uq(e, t, r, n, i) {
      var o,
        a,
        s = 0;
      do
        (a = t + (r - t) / 2), (o = kn(a, n, i) - e), o > 0 ? (r = a) : (t = a);
      while (Math.abs(o) > oq && ++s < aq);
      return a;
    }
    function cq(e, t, r, n) {
      for (var i = 0; i < nq; ++i) {
        var o = fv(t, r, n);
        if (o === 0) return t;
        var a = kn(t, r, n) - e;
        t -= a / o;
      }
      return t;
    }
    dv.exports = function (t, r, n, i) {
      if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      var o = sq ? new Float32Array(Pr) : new Array(Pr);
      if (t !== r || n !== i)
        for (var a = 0; a < Pr; ++a) o[a] = kn(a * jn, t, n);
      function s(c) {
        for (var f = 0, p = 1, d = Pr - 1; p !== d && o[p] <= c; ++p) f += jn;
        --p;
        var g = (c - o[p]) / (o[p + 1] - o[p]),
          E = f + g * jn,
          m = fv(E, t, n);
        return m >= iq ? cq(c, E, t, n) : m === 0 ? E : uq(c, f, f + jn, t, n);
      }
      return function (f) {
        return t === r && n === i
          ? f
          : f === 0
          ? 0
          : f === 1
          ? 1
          : kn(s(f), r, i);
      };
    };
  });
  var Mr = {};
  be(Mr, {
    bounce: () => jq,
    bouncePast: () => kq,
    ease: () => lq,
    easeIn: () => fq,
    easeInOut: () => pq,
    easeOut: () => dq,
    inBack: () => Dq,
    inCirc: () => Lq,
    inCubic: () => Eq,
    inElastic: () => Vq,
    inExpo: () => Rq,
    inOutBack: () => Gq,
    inOutCirc: () => qq,
    inOutCubic: () => mq,
    inOutElastic: () => Xq,
    inOutExpo: () => Nq,
    inOutQuad: () => vq,
    inOutQuart: () => Tq,
    inOutQuint: () => Aq,
    inOutSine: () => wq,
    inQuad: () => gq,
    inQuart: () => _q,
    inQuint: () => bq,
    inSine: () => Sq,
    outBack: () => Fq,
    outBounce: () => Mq,
    outCirc: () => Pq,
    outCubic: () => yq,
    outElastic: () => Uq,
    outExpo: () => Cq,
    outQuad: () => hq,
    outQuart: () => Iq,
    outQuint: () => Oq,
    outSine: () => xq,
    swingFrom: () => Bq,
    swingFromTo: () => Hq,
    swingTo: () => Wq,
  });
  function gq(e) {
    return Math.pow(e, 2);
  }
  function hq(e) {
    return -(Math.pow(e - 1, 2) - 1);
  }
  function vq(e) {
    return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
  }
  function Eq(e) {
    return Math.pow(e, 3);
  }
  function yq(e) {
    return Math.pow(e - 1, 3) + 1;
  }
  function mq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 3)
      : 0.5 * (Math.pow(e - 2, 3) + 2);
  }
  function _q(e) {
    return Math.pow(e, 4);
  }
  function Iq(e) {
    return -(Math.pow(e - 1, 4) - 1);
  }
  function Tq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 4)
      : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
  }
  function bq(e) {
    return Math.pow(e, 5);
  }
  function Oq(e) {
    return Math.pow(e - 1, 5) + 1;
  }
  function Aq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 5)
      : 0.5 * (Math.pow(e - 2, 5) + 2);
  }
  function Sq(e) {
    return -Math.cos(e * (Math.PI / 2)) + 1;
  }
  function xq(e) {
    return Math.sin(e * (Math.PI / 2));
  }
  function wq(e) {
    return -0.5 * (Math.cos(Math.PI * e) - 1);
  }
  function Rq(e) {
    return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
  }
  function Cq(e) {
    return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
  }
  function Nq(e) {
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (e /= 0.5) < 1
      ? 0.5 * Math.pow(2, 10 * (e - 1))
      : 0.5 * (-Math.pow(2, -10 * --e) + 2);
  }
  function Lq(e) {
    return -(Math.sqrt(1 - e * e) - 1);
  }
  function Pq(e) {
    return Math.sqrt(1 - Math.pow(e - 1, 2));
  }
  function qq(e) {
    return (e /= 0.5) < 1
      ? -0.5 * (Math.sqrt(1 - e * e) - 1)
      : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
  }
  function Mq(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function Dq(e) {
    let t = et;
    return e * e * ((t + 1) * e - t);
  }
  function Fq(e) {
    let t = et;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function Gq(e) {
    let t = et;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function Vq(e) {
    let t = et,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (r || (r = 0.3),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        -(
          n *
          Math.pow(2, 10 * (e -= 1)) *
          Math.sin(((e - t) * (2 * Math.PI)) / r)
        ));
  }
  function Uq(e) {
    let t = et,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (r || (r = 0.3),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        n * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / r) + 1);
  }
  function Xq(e) {
    let t = et,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : (e /= 1 / 2) === 2
      ? 1
      : (r || (r = 0.3 * 1.5),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        e < 1
          ? -0.5 *
            (n *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / r))
          : n *
              Math.pow(2, -10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / r) *
              0.5 +
            1);
  }
  function Hq(e) {
    let t = et;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function Bq(e) {
    let t = et;
    return e * e * ((t + 1) * e - t);
  }
  function Wq(e) {
    let t = et;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function jq(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function kq(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
      : e < 2.5 / 2.75
      ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
      : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
  }
  var qr,
    et,
    lq,
    fq,
    dq,
    pq,
    ma = re(() => {
      "use strict";
      (qr = Y(ya())),
        (et = 1.70158),
        (lq = (0, qr.default)(0.25, 0.1, 0.25, 1)),
        (fq = (0, qr.default)(0.42, 0, 1, 1)),
        (dq = (0, qr.default)(0, 0, 0.58, 1)),
        (pq = (0, qr.default)(0.42, 0, 0.58, 1));
    });
  var gv = {};
  be(gv, {
    applyEasing: () => Kq,
    createBezierEasing: () => zq,
    optimizeFloat: () => Dr,
  });
  function Dr(e, t = 5, r = 10) {
    let n = Math.pow(r, t),
      i = Number(Math.round(e * n) / n);
    return Math.abs(i) > 1e-4 ? i : 0;
  }
  function zq(e) {
    return (0, pv.default)(...e);
  }
  function Kq(e, t, r) {
    return t === 0
      ? 0
      : t === 1
      ? 1
      : Dr(r ? (t > 0 ? r(t) : t) : t > 0 && e && Mr[e] ? Mr[e](t) : t);
  }
  var pv,
    _a = re(() => {
      "use strict";
      ma();
      pv = Y(ya());
    });
  var Ev = {};
  be(Ev, {
    createElementState: () => vv,
    ixElements: () => uM,
    mergeActionState: () => Ia,
  });
  function vv(e, t, r, n, i) {
    let o =
      r === $q ? (0, jt.getIn)(i, ["config", "target", "objectId"]) : null;
    return (0, jt.mergeIn)(e, [n], { id: n, ref: t, refId: o, refType: r });
  }
  function Ia(e, t, r, n, i) {
    let o = lM(i);
    return (0, jt.mergeIn)(e, [t, sM, r], n, o);
  }
  function lM(e) {
    let { config: t } = e;
    return cM.reduce((r, n) => {
      let i = n[0],
        o = n[1],
        a = t[i],
        s = t[o];
      return a != null && s != null && (r[o] = s), r;
    }, {});
  }
  var jt,
    aj,
    $q,
    sj,
    Yq,
    Qq,
    Zq,
    Jq,
    eM,
    tM,
    rM,
    nM,
    iM,
    oM,
    aM,
    hv,
    sM,
    uM,
    cM,
    yv = re(() => {
      "use strict";
      jt = Y(Dt());
      Ae();
      ({
        HTML_ELEMENT: aj,
        PLAIN_OBJECT: $q,
        ABSTRACT_NODE: sj,
        CONFIG_X_VALUE: Yq,
        CONFIG_Y_VALUE: Qq,
        CONFIG_Z_VALUE: Zq,
        CONFIG_VALUE: Jq,
        CONFIG_X_UNIT: eM,
        CONFIG_Y_UNIT: tM,
        CONFIG_Z_UNIT: rM,
        CONFIG_UNIT: nM,
      } = ge),
        ({
          IX2_SESSION_STOPPED: iM,
          IX2_INSTANCE_ADDED: oM,
          IX2_ELEMENT_STATE_CHANGED: aM,
        } = ue),
        (hv = {}),
        (sM = "refState"),
        (uM = (e = hv, t = {}) => {
          switch (t.type) {
            case iM:
              return hv;
            case oM: {
              let {
                  elementId: r,
                  element: n,
                  origin: i,
                  actionItem: o,
                  refType: a,
                } = t.payload,
                { actionTypeId: s } = o,
                c = e;
              return (
                (0, jt.getIn)(c, [r, n]) !== n && (c = vv(c, n, a, r, o)),
                Ia(c, r, s, i, o)
              );
            }
            case aM: {
              let {
                elementId: r,
                actionTypeId: n,
                current: i,
                actionItem: o,
              } = t.payload;
              return Ia(e, r, n, i, o);
            }
            default:
              return e;
          }
        });
      cM = [
        [Yq, eM],
        [Qq, tM],
        [Zq, rM],
        [Jq, nM],
      ];
    });
  var mv = u((de) => {
    "use strict";
    Object.defineProperty(de, "__esModule", { value: !0 });
    de.renderPlugin =
      de.getPluginOrigin =
      de.getPluginDuration =
      de.getPluginDestination =
      de.getPluginConfig =
      de.createPluginInstance =
      de.clearPlugin =
        void 0;
    var fM = (e) => e.value;
    de.getPluginConfig = fM;
    var dM = (e, t) => {
      if (t.config.duration !== "auto") return null;
      let r = parseFloat(e.getAttribute("data-duration"));
      return r > 0
        ? r * 1e3
        : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
    };
    de.getPluginDuration = dM;
    var pM = (e) => e || { value: 0 };
    de.getPluginOrigin = pM;
    var gM = (e) => ({ value: e.value });
    de.getPluginDestination = gM;
    var hM = (e) => {
      let t = window.Webflow.require("lottie").createInstance(e);
      return t.stop(), t.setSubframe(!0), t;
    };
    de.createPluginInstance = hM;
    var vM = (e, t, r) => {
      if (!e) return;
      let n = t[r.actionTypeId].value / 100;
      e.goToFrame(e.frames * n);
    };
    de.renderPlugin = vM;
    var EM = (e) => {
      window.Webflow.require("lottie").createInstance(e).stop();
    };
    de.clearPlugin = EM;
  });
  var Iv = u((pe) => {
    "use strict";
    Object.defineProperty(pe, "__esModule", { value: !0 });
    pe.renderPlugin =
      pe.getPluginOrigin =
      pe.getPluginDuration =
      pe.getPluginDestination =
      pe.getPluginConfig =
      pe.createPluginInstance =
      pe.clearPlugin =
        void 0;
    var yM = (e) => document.querySelector(`[data-w-id="${e}"]`),
      mM = () => window.Webflow.require("spline"),
      _M = (e, t) => e.filter((r) => !t.includes(r)),
      IM = (e, t) => e.value[t];
    pe.getPluginConfig = IM;
    var TM = () => null;
    pe.getPluginDuration = TM;
    var _v = Object.freeze({
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
      }),
      bM = (e, t) => {
        let r = t.config.value,
          n = Object.keys(r);
        if (e) {
          let o = Object.keys(e),
            a = _M(n, o);
          return a.length ? a.reduce((c, f) => ((c[f] = _v[f]), c), e) : e;
        }
        return n.reduce((o, a) => ((o[a] = _v[a]), o), {});
      };
    pe.getPluginOrigin = bM;
    var OM = (e) => e.value;
    pe.getPluginDestination = OM;
    var AM = (e, t) => {
      var r, n;
      let i =
        t == null ||
        (r = t.config) === null ||
        r === void 0 ||
        (n = r.target) === null ||
        n === void 0
          ? void 0
          : n.pluginElement;
      return i ? yM(i) : null;
    };
    pe.createPluginInstance = AM;
    var SM = (e, t, r) => {
      let n = mM(),
        i = n.getInstance(e),
        o = r.config.target.objectId,
        a = (s) => {
          if (!s) throw new Error("Invalid spline app passed to renderSpline");
          let c = o && s.findObjectById(o);
          if (!c) return;
          let { PLUGIN_SPLINE: f } = t;
          f.positionX != null && (c.position.x = f.positionX),
            f.positionY != null && (c.position.y = f.positionY),
            f.positionZ != null && (c.position.z = f.positionZ),
            f.rotationX != null && (c.rotation.x = f.rotationX),
            f.rotationY != null && (c.rotation.y = f.rotationY),
            f.rotationZ != null && (c.rotation.z = f.rotationZ),
            f.scaleX != null && (c.scale.x = f.scaleX),
            f.scaleY != null && (c.scale.y = f.scaleY),
            f.scaleZ != null && (c.scale.z = f.scaleZ);
        };
      i ? a(i.spline) : n.setLoadHandler(e, a);
    };
    pe.renderPlugin = SM;
    var xM = () => null;
    pe.clearPlugin = xM;
  });
  var bv = u((ce) => {
    "use strict";
    Object.defineProperty(ce, "__esModule", { value: !0 });
    ce.getPluginOrigin =
      ce.getPluginDuration =
      ce.getPluginDestination =
      ce.getPluginConfig =
      ce.createPluginInstance =
      ce.clearPlugin =
        void 0;
    ce.normalizeColor = Tv;
    ce.renderPlugin = void 0;
    function Tv(e) {
      let t,
        r,
        n,
        i = 1,
        o = e.replace(/\s/g, "").toLowerCase();
      if (o.startsWith("#")) {
        let a = o.substring(1);
        a.length === 3
          ? ((t = parseInt(a[0] + a[0], 16)),
            (r = parseInt(a[1] + a[1], 16)),
            (n = parseInt(a[2] + a[2], 16)))
          : a.length === 6 &&
            ((t = parseInt(a.substring(0, 2), 16)),
            (r = parseInt(a.substring(2, 4), 16)),
            (n = parseInt(a.substring(4, 6), 16)));
      } else if (o.startsWith("rgba")) {
        let a = o.match(/rgba\(([^)]+)\)/)[1].split(",");
        (t = parseInt(a[0], 10)),
          (r = parseInt(a[1], 10)),
          (n = parseInt(a[2], 10)),
          (i = parseFloat(a[3]));
      } else if (o.startsWith("rgb")) {
        let a = o.match(/rgb\(([^)]+)\)/)[1].split(",");
        (t = parseInt(a[0], 10)),
          (r = parseInt(a[1], 10)),
          (n = parseInt(a[2], 10));
      } else if (o.startsWith("hsla")) {
        let a = o.match(/hsla\(([^)]+)\)/)[1].split(","),
          s = parseFloat(a[0]),
          c = parseFloat(a[1].replace("%", "")) / 100,
          f = parseFloat(a[2].replace("%", "")) / 100;
        i = parseFloat(a[3]);
        let p = (1 - Math.abs(2 * f - 1)) * c,
          d = p * (1 - Math.abs(((s / 60) % 2) - 1)),
          g = f - p / 2,
          E,
          m,
          y;
        s >= 0 && s < 60
          ? ((E = p), (m = d), (y = 0))
          : s >= 60 && s < 120
          ? ((E = d), (m = p), (y = 0))
          : s >= 120 && s < 180
          ? ((E = 0), (m = p), (y = d))
          : s >= 180 && s < 240
          ? ((E = 0), (m = d), (y = p))
          : s >= 240 && s < 300
          ? ((E = d), (m = 0), (y = p))
          : ((E = p), (m = 0), (y = d)),
          (t = Math.round((E + g) * 255)),
          (r = Math.round((m + g) * 255)),
          (n = Math.round((y + g) * 255));
      } else if (o.startsWith("hsl")) {
        let a = o.match(/hsl\(([^)]+)\)/)[1].split(","),
          s = parseFloat(a[0]),
          c = parseFloat(a[1].replace("%", "")) / 100,
          f = parseFloat(a[2].replace("%", "")) / 100,
          p = (1 - Math.abs(2 * f - 1)) * c,
          d = p * (1 - Math.abs(((s / 60) % 2) - 1)),
          g = f - p / 2,
          E,
          m,
          y;
        s >= 0 && s < 60
          ? ((E = p), (m = d), (y = 0))
          : s >= 60 && s < 120
          ? ((E = d), (m = p), (y = 0))
          : s >= 120 && s < 180
          ? ((E = 0), (m = p), (y = d))
          : s >= 180 && s < 240
          ? ((E = 0), (m = d), (y = p))
          : s >= 240 && s < 300
          ? ((E = d), (m = 0), (y = p))
          : ((E = p), (m = 0), (y = d)),
          (t = Math.round((E + g) * 255)),
          (r = Math.round((m + g) * 255)),
          (n = Math.round((y + g) * 255));
      }
      return (
        (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n)) && `${e}`,
        { red: t, green: r, blue: n, alpha: i }
      );
    }
    var wM = (e, t) => e.value[t];
    ce.getPluginConfig = wM;
    var RM = () => null;
    ce.getPluginDuration = RM;
    var CM = (e, t) => {
      if (e) return e;
      let r = t.config.value,
        n = t.config.target.objectId,
        i = getComputedStyle(document.documentElement).getPropertyValue(n);
      if (r.size != null) return { size: parseInt(i, 10) };
      if (r.red != null && r.green != null && r.blue != null) return Tv(i);
    };
    ce.getPluginOrigin = CM;
    var NM = (e) => e.value;
    ce.getPluginDestination = NM;
    var LM = () => null;
    ce.createPluginInstance = LM;
    var PM = (e, t, r) => {
      let n = r.config.target.objectId,
        i = r.config.value.unit,
        { PLUGIN_VARIABLE: o } = t,
        { size: a, red: s, green: c, blue: f, alpha: p } = o,
        d;
      a != null && (d = a + i),
        s != null &&
          f != null &&
          c != null &&
          p != null &&
          (d = `rgba(${s}, ${c}, ${f}, ${p})`),
        d != null && document.documentElement.style.setProperty(n, d);
    };
    ce.renderPlugin = PM;
    var qM = (e, t) => {
      let r = t.config.target.objectId;
      document.documentElement.style.removeProperty(r);
    };
    ce.clearPlugin = qM;
  });
  var Ov = u((zn) => {
    "use strict";
    var ba = nn().default;
    Object.defineProperty(zn, "__esModule", { value: !0 });
    zn.pluginMethodMap = void 0;
    var Ta = (Ae(), He(Cf)),
      MM = ba(mv()),
      DM = ba(Iv()),
      FM = ba(bv()),
      fj = (zn.pluginMethodMap = new Map([
        [Ta.ActionTypeConsts.PLUGIN_LOTTIE, { ...MM }],
        [Ta.ActionTypeConsts.PLUGIN_SPLINE, { ...DM }],
        [Ta.ActionTypeConsts.PLUGIN_VARIABLE, { ...FM }],
      ]));
  });
  var Av = {};
  be(Av, {
    clearPlugin: () => Ra,
    createPluginInstance: () => VM,
    getPluginConfig: () => Aa,
    getPluginDestination: () => xa,
    getPluginDuration: () => GM,
    getPluginOrigin: () => Sa,
    isPluginType: () => Tt,
    renderPlugin: () => wa,
  });
  function Tt(e) {
    return Oa.pluginMethodMap.has(e);
  }
  var Oa,
    bt,
    Aa,
    Sa,
    GM,
    xa,
    VM,
    wa,
    Ra,
    Ca = re(() => {
      "use strict";
      Wn();
      Oa = Y(Ov());
      (bt = (e) => (t) => {
        if (!Ve) return () => null;
        let r = Oa.pluginMethodMap.get(t);
        if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
        let n = r[e];
        if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
        return n;
      }),
        (Aa = bt("getPluginConfig")),
        (Sa = bt("getPluginOrigin")),
        (GM = bt("getPluginDuration")),
        (xa = bt("getPluginDestination")),
        (VM = bt("createPluginInstance")),
        (wa = bt("renderPlugin")),
        (Ra = bt("clearPlugin"));
    });
  var xv = u((gj, Sv) => {
    function UM(e, t) {
      return e == null || e !== e ? t : e;
    }
    Sv.exports = UM;
  });
  var Rv = u((hj, wv) => {
    function XM(e, t, r, n) {
      var i = -1,
        o = e == null ? 0 : e.length;
      for (n && o && (r = e[++i]); ++i < o; ) r = t(r, e[i], i, e);
      return r;
    }
    wv.exports = XM;
  });
  var Nv = u((vj, Cv) => {
    function HM(e) {
      return function (t, r, n) {
        for (var i = -1, o = Object(t), a = n(t), s = a.length; s--; ) {
          var c = a[e ? s : ++i];
          if (r(o[c], c, o) === !1) break;
        }
        return t;
      };
    }
    Cv.exports = HM;
  });
  var Pv = u((Ej, Lv) => {
    var BM = Nv(),
      WM = BM();
    Lv.exports = WM;
  });
  var Na = u((yj, qv) => {
    var jM = Pv(),
      kM = Cr();
    function zM(e, t) {
      return e && jM(e, t, kM);
    }
    qv.exports = zM;
  });
  var Dv = u((mj, Mv) => {
    var KM = _t();
    function $M(e, t) {
      return function (r, n) {
        if (r == null) return r;
        if (!KM(r)) return e(r, n);
        for (
          var i = r.length, o = t ? i : -1, a = Object(r);
          (t ? o-- : ++o < i) && n(a[o], o, a) !== !1;

        );
        return r;
      };
    }
    Mv.exports = $M;
  });
  var La = u((_j, Fv) => {
    var YM = Na(),
      QM = Dv(),
      ZM = QM(YM);
    Fv.exports = ZM;
  });
  var Vv = u((Ij, Gv) => {
    function JM(e, t, r, n, i) {
      return (
        i(e, function (o, a, s) {
          r = n ? ((n = !1), o) : t(r, o, a, s);
        }),
        r
      );
    }
    Gv.exports = JM;
  });
  var Xv = u((Tj, Uv) => {
    var e1 = Rv(),
      t1 = La(),
      r1 = dt(),
      n1 = Vv(),
      i1 = fe();
    function o1(e, t, r) {
      var n = i1(e) ? e1 : n1,
        i = arguments.length < 3;
      return n(e, r1(t, 4), r, i, t1);
    }
    Uv.exports = o1;
  });
  var Bv = u((bj, Hv) => {
    var a1 = ga(),
      s1 = dt(),
      u1 = ha(),
      c1 = Math.max,
      l1 = Math.min;
    function f1(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = n - 1;
      return (
        r !== void 0 &&
          ((i = u1(r)), (i = r < 0 ? c1(n + i, 0) : l1(i, n - 1))),
        a1(e, s1(t, 3), i, !0)
      );
    }
    Hv.exports = f1;
  });
  var jv = u((Oj, Wv) => {
    var d1 = pa(),
      p1 = Bv(),
      g1 = d1(p1);
    Wv.exports = g1;
  });
  function kv(e, t) {
    return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
  }
  function v1(e, t) {
    if (kv(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    let r = Object.keys(e),
      n = Object.keys(t);
    if (r.length !== n.length) return !1;
    for (let i = 0; i < r.length; i++)
      if (!h1.call(t, r[i]) || !kv(e[r[i]], t[r[i]])) return !1;
    return !0;
  }
  var h1,
    Pa,
    zv = re(() => {
      "use strict";
      h1 = Object.prototype.hasOwnProperty;
      Pa = v1;
    });
  var lE = {};
  be(lE, {
    cleanupHTMLElement: () => pD,
    clearAllStyles: () => dD,
    clearObjectCache: () => P1,
    getActionListProgress: () => hD,
    getAffectedElements: () => Ga,
    getComputedStyle: () => X1,
    getDestinationValues: () => K1,
    getElementId: () => F1,
    getInstanceId: () => M1,
    getInstanceOrigin: () => W1,
    getItemConfigByKey: () => z1,
    getMaxDurationItemIndex: () => cE,
    getNamespacedParameterId: () => yD,
    getRenderType: () => aE,
    getStyleProp: () => $1,
    mediaQueriesEqual: () => _D,
    observeStore: () => U1,
    reduceListToGroup: () => vD,
    reifyState: () => G1,
    renderHTMLElement: () => Y1,
    shallowEqual: () => Pa,
    shouldAllowMediaQuery: () => mD,
    shouldNamespaceEventParameter: () => ED,
    stringifyTarget: () => ID,
  });
  function P1() {
    Kn.clear();
  }
  function M1() {
    return "i" + q1++;
  }
  function F1(e, t) {
    for (let r in e) {
      let n = e[r];
      if (n && n.ref === t) return n.id;
    }
    return "e" + D1++;
  }
  function G1({ events: e, actionLists: t, site: r } = {}) {
    let n = (0, Zn.default)(
        e,
        (a, s) => {
          let { eventTypeId: c } = s;
          return a[c] || (a[c] = {}), (a[c][s.id] = s), a;
        },
        {}
      ),
      i = r && r.mediaQueries,
      o = [];
    return (
      i
        ? (o = i.map((a) => a.key))
        : ((i = []), console.warn("IX2 missing mediaQueries in site data")),
      {
        ixData: {
          events: e,
          actionLists: t,
          eventTypeMap: n,
          mediaQueries: i,
          mediaQueryKeys: o,
        },
      }
    );
  }
  function U1({ store: e, select: t, onChange: r, comparator: n = V1 }) {
    let { getState: i, subscribe: o } = e,
      a = o(c),
      s = t(i());
    function c() {
      let f = t(i());
      if (f == null) {
        a();
        return;
      }
      n(f, s) || ((s = f), r(s, e));
    }
    return a;
  }
  function Yv(e) {
    let t = typeof e;
    if (t === "string") return { id: e };
    if (e != null && t === "object") {
      let {
        id: r,
        objectId: n,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: s,
      } = e;
      return {
        id: r,
        objectId: n,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: s,
      };
    }
    return {};
  }
  function Ga({
    config: e,
    event: t,
    eventTarget: r,
    elementRoot: n,
    elementApi: i,
  }) {
    if (!i) throw new Error("IX2 missing elementApi");
    let { targets: o } = e;
    if (Array.isArray(o) && o.length > 0)
      return o.reduce(
        (L, _) =>
          L.concat(
            Ga({
              config: { target: _ },
              event: t,
              eventTarget: r,
              elementRoot: n,
              elementApi: i,
            })
          ),
        []
      );
    let {
        getValidDocument: a,
        getQuerySelector: s,
        queryDocument: c,
        getChildElements: f,
        getSiblingElements: p,
        matchSelector: d,
        elementContains: g,
        isSiblingNode: E,
      } = i,
      { target: m } = e;
    if (!m) return [];
    let {
      id: y,
      objectId: R,
      selector: b,
      selectorGuids: A,
      appliesTo: T,
      useEventTarget: x,
    } = Yv(m);
    if (R) return [Kn.has(R) ? Kn.get(R) : Kn.set(R, {}).get(R)];
    if (T === Vo.PAGE) {
      let L = a(y);
      return L ? [L] : [];
    }
    let S = (t?.action?.config?.affectedElements ?? {})[y || b] || {},
      M = !!(S.id || S.selector),
      D,
      G,
      X,
      W = t && s(Yv(t.target));
    if (
      (M
        ? ((D = S.limitAffectedElements), (G = W), (X = s(S)))
        : (G = X = s({ id: y, selector: b, selectorGuids: A })),
      t && x)
    ) {
      let L = r && (X || x === !0) ? [r] : c(W);
      if (X) {
        if (x === C1) return c(X).filter((_) => L.some((N) => g(_, N)));
        if (x === Kv) return c(X).filter((_) => L.some((N) => g(N, _)));
        if (x === $v) return c(X).filter((_) => L.some((N) => E(N, _)));
      }
      return L;
    }
    return G == null || X == null
      ? []
      : Ve && n
      ? c(X).filter((L) => n.contains(L))
      : D === Kv
      ? c(G, X)
      : D === R1
      ? f(c(G)).filter(d(X))
      : D === $v
      ? p(c(G)).filter(d(X))
      : c(X);
  }
  function X1({ element: e, actionItem: t }) {
    if (!Ve) return {};
    let { actionTypeId: r } = t;
    switch (r) {
      case Yt:
      case Qt:
      case Zt:
      case Jt:
      case ei:
        return window.getComputedStyle(e);
      default:
        return {};
    }
  }
  function W1(e, t = {}, r = {}, n, i) {
    let { getStyle: o } = i,
      { actionTypeId: a } = n;
    if (Tt(a)) return Sa(a)(t[a], n);
    switch (n.actionTypeId) {
      case zt:
      case Kt:
      case $t:
      case Ur:
        return t[n.actionTypeId] || Va[n.actionTypeId];
      case Xr:
        return H1(t[n.actionTypeId], n.config.filters);
      case Hr:
        return B1(t[n.actionTypeId], n.config.fontVariations);
      case nE:
        return { value: (0, tt.default)(parseFloat(o(e, Yn)), 1) };
      case Yt: {
        let s = o(e, $e),
          c = o(e, Ye),
          f,
          p;
        return (
          n.config.widthUnit === gt
            ? (f = Qv.test(s) ? parseFloat(s) : parseFloat(r.width))
            : (f = (0, tt.default)(parseFloat(s), parseFloat(r.width))),
          n.config.heightUnit === gt
            ? (p = Qv.test(c) ? parseFloat(c) : parseFloat(r.height))
            : (p = (0, tt.default)(parseFloat(c), parseFloat(r.height))),
          { widthValue: f, heightValue: p }
        );
      }
      case Qt:
      case Zt:
      case Jt:
        return cD({
          element: e,
          actionTypeId: n.actionTypeId,
          computedStyle: r,
          getStyle: o,
        });
      case ei:
        return { value: (0, tt.default)(o(e, Qn), r.display) };
      case L1:
        return t[n.actionTypeId] || { value: 0 };
      default:
        return;
    }
  }
  function K1({ element: e, actionItem: t, elementApi: r }) {
    if (Tt(t.actionTypeId)) return xa(t.actionTypeId)(t.config);
    switch (t.actionTypeId) {
      case zt:
      case Kt:
      case $t:
      case Ur: {
        let { xValue: n, yValue: i, zValue: o } = t.config;
        return { xValue: n, yValue: i, zValue: o };
      }
      case Yt: {
        let { getStyle: n, setStyle: i, getProperty: o } = r,
          { widthUnit: a, heightUnit: s } = t.config,
          { widthValue: c, heightValue: f } = t.config;
        if (!Ve) return { widthValue: c, heightValue: f };
        if (a === gt) {
          let p = n(e, $e);
          i(e, $e, ""), (c = o(e, "offsetWidth")), i(e, $e, p);
        }
        if (s === gt) {
          let p = n(e, Ye);
          i(e, Ye, ""), (f = o(e, "offsetHeight")), i(e, Ye, p);
        }
        return { widthValue: c, heightValue: f };
      }
      case Qt:
      case Zt:
      case Jt: {
        let { rValue: n, gValue: i, bValue: o, aValue: a } = t.config;
        return { rValue: n, gValue: i, bValue: o, aValue: a };
      }
      case Xr:
        return t.config.filters.reduce(j1, {});
      case Hr:
        return t.config.fontVariations.reduce(k1, {});
      default: {
        let { value: n } = t.config;
        return { value: n };
      }
    }
  }
  function aE(e) {
    if (/^TRANSFORM_/.test(e)) return tE;
    if (/^STYLE_/.test(e)) return Da;
    if (/^GENERAL_/.test(e)) return Ma;
    if (/^PLUGIN_/.test(e)) return rE;
  }
  function $1(e, t) {
    return e === Da ? t.replace("STYLE_", "").toLowerCase() : null;
  }
  function Y1(e, t, r, n, i, o, a, s, c) {
    switch (s) {
      case tE:
        return tD(e, t, r, i, a);
      case Da:
        return lD(e, t, r, i, o, a);
      case Ma:
        return fD(e, i, a);
      case rE: {
        let { actionTypeId: f } = i;
        if (Tt(f)) return wa(f)(c, t, i);
      }
    }
  }
  function tD(e, t, r, n, i) {
    let o = eD
        .map((s) => {
          let c = Va[s],
            {
              xValue: f = c.xValue,
              yValue: p = c.yValue,
              zValue: d = c.zValue,
              xUnit: g = "",
              yUnit: E = "",
              zUnit: m = "",
            } = t[s] || {};
          switch (s) {
            case zt:
              return `${m1}(${f}${g}, ${p}${E}, ${d}${m})`;
            case Kt:
              return `${_1}(${f}${g}, ${p}${E}, ${d}${m})`;
            case $t:
              return `${I1}(${f}${g}) ${T1}(${p}${E}) ${b1}(${d}${m})`;
            case Ur:
              return `${O1}(${f}${g}, ${p}${E})`;
            default:
              return "";
          }
        })
        .join(" "),
      { setStyle: a } = i;
    Ot(e, pt, i), a(e, pt, o), iD(n, r) && a(e, Bn, A1);
  }
  function rD(e, t, r, n) {
    let i = (0, Zn.default)(t, (a, s, c) => `${a} ${c}(${s}${J1(c, r)})`, ""),
      { setStyle: o } = n;
    Ot(e, Fr, n), o(e, Fr, i);
  }
  function nD(e, t, r, n) {
    let i = (0, Zn.default)(
        t,
        (a, s, c) => (a.push(`"${c}" ${s}`), a),
        []
      ).join(", "),
      { setStyle: o } = n;
    Ot(e, Gr, n), o(e, Gr, i);
  }
  function iD({ actionTypeId: e }, { xValue: t, yValue: r, zValue: n }) {
    return (
      (e === zt && n !== void 0) ||
      (e === Kt && n !== void 0) ||
      (e === $t && (t !== void 0 || r !== void 0))
    );
  }
  function uD(e, t) {
    let r = e.exec(t);
    return r ? r[1] : "";
  }
  function cD({ element: e, actionTypeId: t, computedStyle: r, getStyle: n }) {
    let i = Fa[t],
      o = n(e, i),
      a = aD.test(o) ? o : r[i],
      s = uD(sD, a).split(Vr);
    return {
      rValue: (0, tt.default)(parseInt(s[0], 10), 255),
      gValue: (0, tt.default)(parseInt(s[1], 10), 255),
      bValue: (0, tt.default)(parseInt(s[2], 10), 255),
      aValue: (0, tt.default)(parseFloat(s[3]), 1),
    };
  }
  function lD(e, t, r, n, i, o) {
    let { setStyle: a } = o;
    switch (n.actionTypeId) {
      case Yt: {
        let { widthUnit: s = "", heightUnit: c = "" } = n.config,
          { widthValue: f, heightValue: p } = r;
        f !== void 0 && (s === gt && (s = "px"), Ot(e, $e, o), a(e, $e, f + s)),
          p !== void 0 &&
            (c === gt && (c = "px"), Ot(e, Ye, o), a(e, Ye, p + c));
        break;
      }
      case Xr: {
        rD(e, r, n.config, o);
        break;
      }
      case Hr: {
        nD(e, r, n.config, o);
        break;
      }
      case Qt:
      case Zt:
      case Jt: {
        let s = Fa[n.actionTypeId],
          c = Math.round(r.rValue),
          f = Math.round(r.gValue),
          p = Math.round(r.bValue),
          d = r.aValue;
        Ot(e, s, o),
          a(e, s, d >= 1 ? `rgb(${c},${f},${p})` : `rgba(${c},${f},${p},${d})`);
        break;
      }
      default: {
        let { unit: s = "" } = n.config;
        Ot(e, i, o), a(e, i, r.value + s);
        break;
      }
    }
  }
  function fD(e, t, r) {
    let { setStyle: n } = r;
    switch (t.actionTypeId) {
      case ei: {
        let { value: i } = t.config;
        i === S1 && Ve ? n(e, Qn, Ea) : n(e, Qn, i);
        return;
      }
    }
  }
  function Ot(e, t, r) {
    if (!Ve) return;
    let n = oE[t];
    if (!n) return;
    let { getStyle: i, setStyle: o } = r,
      a = i(e, kt);
    if (!a) {
      o(e, kt, n);
      return;
    }
    let s = a.split(Vr).map(iE);
    s.indexOf(n) === -1 && o(e, kt, s.concat(n).join(Vr));
  }
  function sE(e, t, r) {
    if (!Ve) return;
    let n = oE[t];
    if (!n) return;
    let { getStyle: i, setStyle: o } = r,
      a = i(e, kt);
    !a ||
      a.indexOf(n) === -1 ||
      o(
        e,
        kt,
        a
          .split(Vr)
          .map(iE)
          .filter((s) => s !== n)
          .join(Vr)
      );
  }
  function dD({ store: e, elementApi: t }) {
    let { ixData: r } = e.getState(),
      { events: n = {}, actionLists: i = {} } = r;
    Object.keys(n).forEach((o) => {
      let a = n[o],
        { config: s } = a.action,
        { actionListId: c } = s,
        f = i[c];
      f && Zv({ actionList: f, event: a, elementApi: t });
    }),
      Object.keys(i).forEach((o) => {
        Zv({ actionList: i[o], elementApi: t });
      });
  }
  function Zv({ actionList: e = {}, event: t, elementApi: r }) {
    let { actionItemGroups: n, continuousParameterGroups: i } = e;
    n &&
      n.forEach((o) => {
        Jv({ actionGroup: o, event: t, elementApi: r });
      }),
      i &&
        i.forEach((o) => {
          let { continuousActionGroups: a } = o;
          a.forEach((s) => {
            Jv({ actionGroup: s, event: t, elementApi: r });
          });
        });
  }
  function Jv({ actionGroup: e, event: t, elementApi: r }) {
    let { actionItems: n } = e;
    n.forEach((i) => {
      let { actionTypeId: o, config: a } = i,
        s;
      Tt(o)
        ? (s = (c) => Ra(o)(c, i))
        : (s = uE({ effect: gD, actionTypeId: o, elementApi: r })),
        Ga({ config: a, event: t, elementApi: r }).forEach(s);
    });
  }
  function pD(e, t, r) {
    let { setStyle: n, getStyle: i } = r,
      { actionTypeId: o } = t;
    if (o === Yt) {
      let { config: a } = t;
      a.widthUnit === gt && n(e, $e, ""), a.heightUnit === gt && n(e, Ye, "");
    }
    i(e, kt) && uE({ effect: sE, actionTypeId: o, elementApi: r })(e);
  }
  function gD(e, t, r) {
    let { setStyle: n } = r;
    sE(e, t, r), n(e, t, ""), t === pt && n(e, Bn, "");
  }
  function cE(e) {
    let t = 0,
      r = 0;
    return (
      e.forEach((n, i) => {
        let { config: o } = n,
          a = o.delay + o.duration;
        a >= t && ((t = a), (r = i));
      }),
      r
    );
  }
  function hD(e, t) {
    let { actionItemGroups: r, useFirstGroupAsInitialState: n } = e,
      { actionItem: i, verboseTimeElapsed: o = 0 } = t,
      a = 0,
      s = 0;
    return (
      r.forEach((c, f) => {
        if (n && f === 0) return;
        let { actionItems: p } = c,
          d = p[cE(p)],
          { config: g, actionTypeId: E } = d;
        i.id === d.id && (s = a + o);
        let m = aE(E) === Ma ? 0 : g.duration;
        a += g.delay + m;
      }),
      a > 0 ? Dr(s / a) : 0
    );
  }
  function vD({ actionList: e, actionItemId: t, rawData: r }) {
    let { actionItemGroups: n, continuousParameterGroups: i } = e,
      o = [],
      a = (s) => (
        o.push((0, Jn.mergeIn)(s, ["config"], { delay: 0, duration: 0 })),
        s.id === t
      );
    return (
      n && n.some(({ actionItems: s }) => s.some(a)),
      i &&
        i.some((s) => {
          let { continuousActionGroups: c } = s;
          return c.some(({ actionItems: f }) => f.some(a));
        }),
      (0, Jn.setIn)(r, ["actionLists"], {
        [e.id]: { id: e.id, actionItemGroups: [{ actionItems: o }] },
      })
    );
  }
  function ED(e, { basedOn: t }) {
    return (
      (e === Ge.SCROLLING_IN_VIEW && (t === ze.ELEMENT || t == null)) ||
      (e === Ge.MOUSE_MOVE && t === ze.ELEMENT)
    );
  }
  function yD(e, t) {
    return e + N1 + t;
  }
  function mD(e, t) {
    return t == null ? !0 : e.indexOf(t) !== -1;
  }
  function _D(e, t) {
    return Pa(e && e.sort(), t && t.sort());
  }
  function ID(e) {
    if (typeof e == "string") return e;
    if (e.pluginElement && e.objectId) return e.pluginElement + qa + e.objectId;
    if (e.objectId) return e.objectId;
    let { id: t = "", selector: r = "", useEventTarget: n = "" } = e;
    return t + qa + r + qa + n;
  }
  var tt,
    Zn,
    $n,
    Jn,
    E1,
    y1,
    m1,
    _1,
    I1,
    T1,
    b1,
    O1,
    A1,
    S1,
    Yn,
    Fr,
    Gr,
    $e,
    Ye,
    eE,
    x1,
    w1,
    Kv,
    R1,
    $v,
    C1,
    Qn,
    kt,
    gt,
    Vr,
    N1,
    qa,
    tE,
    Ma,
    Da,
    rE,
    zt,
    Kt,
    $t,
    Ur,
    nE,
    Xr,
    Hr,
    Yt,
    Qt,
    Zt,
    Jt,
    ei,
    L1,
    iE,
    Fa,
    oE,
    Kn,
    q1,
    D1,
    V1,
    Qv,
    H1,
    B1,
    j1,
    k1,
    z1,
    Va,
    Q1,
    Z1,
    J1,
    eD,
    oD,
    aD,
    sD,
    uE,
    fE = re(() => {
      "use strict";
      (tt = Y(xv())), (Zn = Y(Xv())), ($n = Y(jv())), (Jn = Y(Dt()));
      Ae();
      zv();
      _a();
      Ca();
      Wn();
      ({
        BACKGROUND: E1,
        TRANSFORM: y1,
        TRANSLATE_3D: m1,
        SCALE_3D: _1,
        ROTATE_X: I1,
        ROTATE_Y: T1,
        ROTATE_Z: b1,
        SKEW: O1,
        PRESERVE_3D: A1,
        FLEX: S1,
        OPACITY: Yn,
        FILTER: Fr,
        FONT_VARIATION_SETTINGS: Gr,
        WIDTH: $e,
        HEIGHT: Ye,
        BACKGROUND_COLOR: eE,
        BORDER_COLOR: x1,
        COLOR: w1,
        CHILDREN: Kv,
        IMMEDIATE_CHILDREN: R1,
        SIBLINGS: $v,
        PARENT: C1,
        DISPLAY: Qn,
        WILL_CHANGE: kt,
        AUTO: gt,
        COMMA_DELIMITER: Vr,
        COLON_DELIMITER: N1,
        BAR_DELIMITER: qa,
        RENDER_TRANSFORM: tE,
        RENDER_GENERAL: Ma,
        RENDER_STYLE: Da,
        RENDER_PLUGIN: rE,
      } = ge),
        ({
          TRANSFORM_MOVE: zt,
          TRANSFORM_SCALE: Kt,
          TRANSFORM_ROTATE: $t,
          TRANSFORM_SKEW: Ur,
          STYLE_OPACITY: nE,
          STYLE_FILTER: Xr,
          STYLE_FONT_VARIATION: Hr,
          STYLE_SIZE: Yt,
          STYLE_BACKGROUND_COLOR: Qt,
          STYLE_BORDER: Zt,
          STYLE_TEXT_COLOR: Jt,
          GENERAL_DISPLAY: ei,
          OBJECT_VALUE: L1,
        } = Oe),
        (iE = (e) => e.trim()),
        (Fa = Object.freeze({ [Qt]: eE, [Zt]: x1, [Jt]: w1 })),
        (oE = Object.freeze({
          [pt]: y1,
          [eE]: E1,
          [Yn]: Yn,
          [Fr]: Fr,
          [$e]: $e,
          [Ye]: Ye,
          [Gr]: Gr,
        })),
        (Kn = new Map());
      q1 = 1;
      D1 = 1;
      V1 = (e, t) => e === t;
      (Qv = /px/),
        (H1 = (e, t) =>
          t.reduce(
            (r, n) => (r[n.type] == null && (r[n.type] = Q1[n.type]), r),
            e || {}
          )),
        (B1 = (e, t) =>
          t.reduce(
            (r, n) => (
              r[n.type] == null &&
                (r[n.type] = Z1[n.type] || n.defaultValue || 0),
              r
            ),
            e || {}
          ));
      (j1 = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (k1 = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (z1 = (e, t, r) => {
          if (Tt(e)) return Aa(e)(r, t);
          switch (e) {
            case Xr: {
              let n = (0, $n.default)(r.filters, ({ type: i }) => i === t);
              return n ? n.value : 0;
            }
            case Hr: {
              let n = (0, $n.default)(
                r.fontVariations,
                ({ type: i }) => i === t
              );
              return n ? n.value : 0;
            }
            default:
              return r[t];
          }
        });
      (Va = {
        [zt]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [Kt]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
        [$t]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [Ur]: Object.freeze({ xValue: 0, yValue: 0 }),
      }),
        (Q1 = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        })),
        (Z1 = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 })),
        (J1 = (e, t) => {
          let r = (0, $n.default)(t.filters, ({ type: n }) => n === e);
          if (r && r.unit) return r.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        }),
        (eD = Object.keys(Va));
      (oD = "\\(([^)]+)\\)"), (aD = /^rgb/), (sD = RegExp(`rgba?${oD}`));
      uE =
        ({ effect: e, actionTypeId: t, elementApi: r }) =>
        (n) => {
          switch (t) {
            case zt:
            case Kt:
            case $t:
            case Ur:
              e(n, pt, r);
              break;
            case Xr:
              e(n, Fr, r);
              break;
            case Hr:
              e(n, Gr, r);
              break;
            case nE:
              e(n, Yn, r);
              break;
            case Yt:
              e(n, $e, r), e(n, Ye, r);
              break;
            case Qt:
            case Zt:
            case Jt:
              e(n, Fa[t], r);
              break;
            case ei:
              e(n, Qn, r);
              break;
          }
        };
    });
  var At = u((me) => {
    "use strict";
    var er = nn().default;
    Object.defineProperty(me, "__esModule", { value: !0 });
    me.IX2VanillaUtils =
      me.IX2VanillaPlugins =
      me.IX2ElementsReducer =
      me.IX2Easings =
      me.IX2EasingUtils =
      me.IX2BrowserSupport =
        void 0;
    var TD = er((Wn(), He(sv)));
    me.IX2BrowserSupport = TD;
    var bD = er((ma(), He(Mr)));
    me.IX2Easings = bD;
    var OD = er((_a(), He(gv)));
    me.IX2EasingUtils = OD;
    var AD = er((yv(), He(Ev)));
    me.IX2ElementsReducer = AD;
    var SD = er((Ca(), He(Av)));
    me.IX2VanillaPlugins = SD;
    var xD = er((fE(), He(lE)));
    me.IX2VanillaUtils = xD;
  });
  var ri,
    rt,
    wD,
    RD,
    CD,
    ND,
    LD,
    PD,
    ti,
    dE,
    qD,
    MD,
    Ua,
    DD,
    FD,
    GD,
    VD,
    pE,
    gE = re(() => {
      "use strict";
      Ae();
      (ri = Y(At())),
        (rt = Y(Dt())),
        ({
          IX2_RAW_DATA_IMPORTED: wD,
          IX2_SESSION_STOPPED: RD,
          IX2_INSTANCE_ADDED: CD,
          IX2_INSTANCE_STARTED: ND,
          IX2_INSTANCE_REMOVED: LD,
          IX2_ANIMATION_FRAME_CHANGED: PD,
        } = ue),
        ({
          optimizeFloat: ti,
          applyEasing: dE,
          createBezierEasing: qD,
        } = ri.IX2EasingUtils),
        ({ RENDER_GENERAL: MD } = ge),
        ({
          getItemConfigByKey: Ua,
          getRenderType: DD,
          getStyleProp: FD,
        } = ri.IX2VanillaUtils),
        (GD = (e, t) => {
          let {
              position: r,
              parameterId: n,
              actionGroups: i,
              destinationKeys: o,
              smoothing: a,
              restingValue: s,
              actionTypeId: c,
              customEasingFn: f,
              skipMotion: p,
              skipToValue: d,
            } = e,
            { parameters: g } = t.payload,
            E = Math.max(1 - a, 0.01),
            m = g[n];
          m == null && ((E = 1), (m = s));
          let y = Math.max(m, 0) || 0,
            R = ti(y - r),
            b = p ? d : ti(r + R * E),
            A = b * 100;
          if (b === r && e.current) return e;
          let T, x, C, S;
          for (let D = 0, { length: G } = i; D < G; D++) {
            let { keyframe: X, actionItems: W } = i[D];
            if ((D === 0 && (T = W[0]), A >= X)) {
              T = W[0];
              let L = i[D + 1],
                _ = L && A !== X;
              (x = _ ? L.actionItems[0] : null),
                _ && ((C = X / 100), (S = (L.keyframe - X) / 100));
            }
          }
          let M = {};
          if (T && !x)
            for (let D = 0, { length: G } = o; D < G; D++) {
              let X = o[D];
              M[X] = Ua(c, X, T.config);
            }
          else if (T && x && C !== void 0 && S !== void 0) {
            let D = (b - C) / S,
              G = T.config.easing,
              X = dE(G, D, f);
            for (let W = 0, { length: L } = o; W < L; W++) {
              let _ = o[W],
                N = Ua(c, _, T.config),
                j = (Ua(c, _, x.config) - N) * X + N;
              M[_] = j;
            }
          }
          return (0, rt.merge)(e, { position: b, current: M });
        }),
        (VD = (e, t) => {
          let {
              active: r,
              origin: n,
              start: i,
              immediate: o,
              renderType: a,
              verbose: s,
              actionItem: c,
              destination: f,
              destinationKeys: p,
              pluginDuration: d,
              instanceDelay: g,
              customEasingFn: E,
              skipMotion: m,
            } = e,
            y = c.config.easing,
            { duration: R, delay: b } = c.config;
          d != null && (R = d),
            (b = g ?? b),
            a === MD ? (R = 0) : (o || m) && (R = b = 0);
          let { now: A } = t.payload;
          if (r && n) {
            let T = A - (i + b);
            if (s) {
              let D = A - i,
                G = R + b,
                X = ti(Math.min(Math.max(0, D / G), 1));
              e = (0, rt.set)(e, "verboseTimeElapsed", G * X);
            }
            if (T < 0) return e;
            let x = ti(Math.min(Math.max(0, T / R), 1)),
              C = dE(y, x, E),
              S = {},
              M = null;
            return (
              p.length &&
                (M = p.reduce((D, G) => {
                  let X = f[G],
                    W = parseFloat(n[G]) || 0,
                    _ = (parseFloat(X) - W) * C + W;
                  return (D[G] = _), D;
                }, {})),
              (S.current = M),
              (S.position = x),
              x === 1 && ((S.active = !1), (S.complete = !0)),
              (0, rt.merge)(e, S)
            );
          }
          return e;
        }),
        (pE = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case wD:
              return t.payload.ixInstances || Object.freeze({});
            case RD:
              return Object.freeze({});
            case CD: {
              let {
                  instanceId: r,
                  elementId: n,
                  actionItem: i,
                  eventId: o,
                  eventTarget: a,
                  eventStateKey: s,
                  actionListId: c,
                  groupIndex: f,
                  isCarrier: p,
                  origin: d,
                  destination: g,
                  immediate: E,
                  verbose: m,
                  continuous: y,
                  parameterId: R,
                  actionGroups: b,
                  smoothing: A,
                  restingValue: T,
                  pluginInstance: x,
                  pluginDuration: C,
                  instanceDelay: S,
                  skipMotion: M,
                  skipToValue: D,
                } = t.payload,
                { actionTypeId: G } = i,
                X = DD(G),
                W = FD(X, G),
                L = Object.keys(g).filter(
                  (N) => g[N] != null && typeof g[N] != "string"
                ),
                { easing: _ } = i.config;
              return (0, rt.set)(e, r, {
                id: r,
                elementId: n,
                active: !1,
                position: 0,
                start: 0,
                origin: d,
                destination: g,
                destinationKeys: L,
                immediate: E,
                verbose: m,
                current: null,
                actionItem: i,
                actionTypeId: G,
                eventId: o,
                eventTarget: a,
                eventStateKey: s,
                actionListId: c,
                groupIndex: f,
                renderType: X,
                isCarrier: p,
                styleProp: W,
                continuous: y,
                parameterId: R,
                actionGroups: b,
                smoothing: A,
                restingValue: T,
                pluginInstance: x,
                pluginDuration: C,
                instanceDelay: S,
                skipMotion: M,
                skipToValue: D,
                customEasingFn:
                  Array.isArray(_) && _.length === 4 ? qD(_) : void 0,
              });
            }
            case ND: {
              let { instanceId: r, time: n } = t.payload;
              return (0, rt.mergeIn)(e, [r], {
                active: !0,
                complete: !1,
                start: n,
              });
            }
            case LD: {
              let { instanceId: r } = t.payload;
              if (!e[r]) return e;
              let n = {},
                i = Object.keys(e),
                { length: o } = i;
              for (let a = 0; a < o; a++) {
                let s = i[a];
                s !== r && (n[s] = e[s]);
              }
              return n;
            }
            case PD: {
              let r = e,
                n = Object.keys(e),
                { length: i } = n;
              for (let o = 0; o < i; o++) {
                let a = n[o],
                  s = e[a],
                  c = s.continuous ? GD : VD;
                r = (0, rt.set)(r, a, c(s, t));
              }
              return r;
            }
            default:
              return e;
          }
        });
    });
  var UD,
    XD,
    HD,
    hE,
    vE = re(() => {
      "use strict";
      Ae();
      ({
        IX2_RAW_DATA_IMPORTED: UD,
        IX2_SESSION_STOPPED: XD,
        IX2_PARAMETER_CHANGED: HD,
      } = ue),
        (hE = (e = {}, t) => {
          switch (t.type) {
            case UD:
              return t.payload.ixParameters || {};
            case XD:
              return {};
            case HD: {
              let { key: r, value: n } = t.payload;
              return (e[r] = n), e;
            }
            default:
              return e;
          }
        });
    });
  var mE = {};
  be(mE, { default: () => WD });
  var EE,
    yE,
    BD,
    WD,
    _E = re(() => {
      "use strict";
      EE = Y(Go());
      Lf();
      Jf();
      rd();
      yE = Y(At());
      gE();
      vE();
      ({ ixElements: BD } = yE.IX2ElementsReducer),
        (WD = (0, EE.combineReducers)({
          ixData: Nf,
          ixRequest: Zf,
          ixSession: td,
          ixElements: BD,
          ixInstances: pE,
          ixParameters: hE,
        }));
    });
  var TE = u((Xj, IE) => {
    var jD = lt(),
      kD = fe(),
      zD = Je(),
      KD = "[object String]";
    function $D(e) {
      return typeof e == "string" || (!kD(e) && zD(e) && jD(e) == KD);
    }
    IE.exports = $D;
  });
  var OE = u((Hj, bE) => {
    var YD = da(),
      QD = YD("length");
    bE.exports = QD;
  });
  var SE = u((Bj, AE) => {
    var ZD = "\\ud800-\\udfff",
      JD = "\\u0300-\\u036f",
      e2 = "\\ufe20-\\ufe2f",
      t2 = "\\u20d0-\\u20ff",
      r2 = JD + e2 + t2,
      n2 = "\\ufe0e\\ufe0f",
      i2 = "\\u200d",
      o2 = RegExp("[" + i2 + ZD + r2 + n2 + "]");
    function a2(e) {
      return o2.test(e);
    }
    AE.exports = a2;
  });
  var ME = u((Wj, qE) => {
    var wE = "\\ud800-\\udfff",
      s2 = "\\u0300-\\u036f",
      u2 = "\\ufe20-\\ufe2f",
      c2 = "\\u20d0-\\u20ff",
      l2 = s2 + u2 + c2,
      f2 = "\\ufe0e\\ufe0f",
      d2 = "[" + wE + "]",
      Xa = "[" + l2 + "]",
      Ha = "\\ud83c[\\udffb-\\udfff]",
      p2 = "(?:" + Xa + "|" + Ha + ")",
      RE = "[^" + wE + "]",
      CE = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      NE = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      g2 = "\\u200d",
      LE = p2 + "?",
      PE = "[" + f2 + "]?",
      h2 = "(?:" + g2 + "(?:" + [RE, CE, NE].join("|") + ")" + PE + LE + ")*",
      v2 = PE + LE + h2,
      E2 = "(?:" + [RE + Xa + "?", Xa, CE, NE, d2].join("|") + ")",
      xE = RegExp(Ha + "(?=" + Ha + ")|" + E2 + v2, "g");
    function y2(e) {
      for (var t = (xE.lastIndex = 0); xE.test(e); ) ++t;
      return t;
    }
    qE.exports = y2;
  });
  var FE = u((jj, DE) => {
    var m2 = OE(),
      _2 = SE(),
      I2 = ME();
    function T2(e) {
      return _2(e) ? I2(e) : m2(e);
    }
    DE.exports = T2;
  });
  var VE = u((kj, GE) => {
    var b2 = qn(),
      O2 = Mn(),
      A2 = _t(),
      S2 = TE(),
      x2 = FE(),
      w2 = "[object Map]",
      R2 = "[object Set]";
    function C2(e) {
      if (e == null) return 0;
      if (A2(e)) return S2(e) ? x2(e) : e.length;
      var t = O2(e);
      return t == w2 || t == R2 ? e.size : b2(e).length;
    }
    GE.exports = C2;
  });
  var XE = u((zj, UE) => {
    var N2 = "Expected a function";
    function L2(e) {
      if (typeof e != "function") throw new TypeError(N2);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    }
    UE.exports = L2;
  });
  var Ba = u((Kj, HE) => {
    var P2 = ft(),
      q2 = (function () {
        try {
          var e = P2(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch {}
      })();
    HE.exports = q2;
  });
  var Wa = u(($j, WE) => {
    var BE = Ba();
    function M2(e, t, r) {
      t == "__proto__" && BE
        ? BE(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (e[t] = r);
    }
    WE.exports = M2;
  });
  var kE = u((Yj, jE) => {
    var D2 = Wa(),
      F2 = On(),
      G2 = Object.prototype,
      V2 = G2.hasOwnProperty;
    function U2(e, t, r) {
      var n = e[t];
      (!(V2.call(e, t) && F2(n, r)) || (r === void 0 && !(t in e))) &&
        D2(e, t, r);
    }
    jE.exports = U2;
  });
  var $E = u((Qj, KE) => {
    var X2 = kE(),
      H2 = Lr(),
      B2 = Cn(),
      zE = Ke(),
      W2 = Wt();
    function j2(e, t, r, n) {
      if (!zE(e)) return e;
      t = H2(t, e);
      for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o; ) {
        var c = W2(t[i]),
          f = r;
        if (c === "__proto__" || c === "constructor" || c === "prototype")
          return e;
        if (i != a) {
          var p = s[c];
          (f = n ? n(p, c, s) : void 0),
            f === void 0 && (f = zE(p) ? p : B2(t[i + 1]) ? [] : {});
        }
        X2(s, c, f), (s = s[c]);
      }
      return e;
    }
    KE.exports = j2;
  });
  var QE = u((Zj, YE) => {
    var k2 = Gn(),
      z2 = $E(),
      K2 = Lr();
    function $2(e, t, r) {
      for (var n = -1, i = t.length, o = {}; ++n < i; ) {
        var a = t[n],
          s = k2(e, a);
        r(s, a) && z2(o, K2(a, e), s);
      }
      return o;
    }
    YE.exports = $2;
  });
  var JE = u((Jj, ZE) => {
    var Y2 = wn(),
      Q2 = Ao(),
      Z2 = Qo(),
      J2 = Yo(),
      eF = Object.getOwnPropertySymbols,
      tF = eF
        ? function (e) {
            for (var t = []; e; ) Y2(t, Z2(e)), (e = Q2(e));
            return t;
          }
        : J2;
    ZE.exports = tF;
  });
  var ty = u((ek, ey) => {
    function rF(e) {
      var t = [];
      if (e != null) for (var r in Object(e)) t.push(r);
      return t;
    }
    ey.exports = rF;
  });
  var ny = u((tk, ry) => {
    var nF = Ke(),
      iF = Pn(),
      oF = ty(),
      aF = Object.prototype,
      sF = aF.hasOwnProperty;
    function uF(e) {
      if (!nF(e)) return oF(e);
      var t = iF(e),
        r = [];
      for (var n in e)
        (n == "constructor" && (t || !sF.call(e, n))) || r.push(n);
      return r;
    }
    ry.exports = uF;
  });
  var oy = u((rk, iy) => {
    var cF = Jo(),
      lF = ny(),
      fF = _t();
    function dF(e) {
      return fF(e) ? cF(e, !0) : lF(e);
    }
    iy.exports = dF;
  });
  var sy = u((nk, ay) => {
    var pF = $o(),
      gF = JE(),
      hF = oy();
    function vF(e) {
      return pF(e, hF, gF);
    }
    ay.exports = vF;
  });
  var cy = u((ik, uy) => {
    var EF = fa(),
      yF = dt(),
      mF = QE(),
      _F = sy();
    function IF(e, t) {
      if (e == null) return {};
      var r = EF(_F(e), function (n) {
        return [n];
      });
      return (
        (t = yF(t)),
        mF(e, r, function (n, i) {
          return t(n, i[0]);
        })
      );
    }
    uy.exports = IF;
  });
  var fy = u((ok, ly) => {
    var TF = dt(),
      bF = XE(),
      OF = cy();
    function AF(e, t) {
      return OF(e, bF(TF(t)));
    }
    ly.exports = AF;
  });
  var py = u((ak, dy) => {
    var SF = qn(),
      xF = Mn(),
      wF = Sr(),
      RF = fe(),
      CF = _t(),
      NF = Rn(),
      LF = Pn(),
      PF = Ln(),
      qF = "[object Map]",
      MF = "[object Set]",
      DF = Object.prototype,
      FF = DF.hasOwnProperty;
    function GF(e) {
      if (e == null) return !0;
      if (
        CF(e) &&
        (RF(e) ||
          typeof e == "string" ||
          typeof e.splice == "function" ||
          NF(e) ||
          PF(e) ||
          wF(e))
      )
        return !e.length;
      var t = xF(e);
      if (t == qF || t == MF) return !e.size;
      if (LF(e)) return !SF(e).length;
      for (var r in e) if (FF.call(e, r)) return !1;
      return !0;
    }
    dy.exports = GF;
  });
  var hy = u((sk, gy) => {
    var VF = Wa(),
      UF = Na(),
      XF = dt();
    function HF(e, t) {
      var r = {};
      return (
        (t = XF(t, 3)),
        UF(e, function (n, i, o) {
          VF(r, i, t(n, i, o));
        }),
        r
      );
    }
    gy.exports = HF;
  });
  var Ey = u((uk, vy) => {
    function BF(e, t) {
      for (
        var r = -1, n = e == null ? 0 : e.length;
        ++r < n && t(e[r], r, e) !== !1;

      );
      return e;
    }
    vy.exports = BF;
  });
  var my = u((ck, yy) => {
    var WF = Un();
    function jF(e) {
      return typeof e == "function" ? e : WF;
    }
    yy.exports = jF;
  });
  var Iy = u((lk, _y) => {
    var kF = Ey(),
      zF = La(),
      KF = my(),
      $F = fe();
    function YF(e, t) {
      var r = $F(e) ? kF : zF;
      return r(e, KF(t));
    }
    _y.exports = YF;
  });
  var by = u((fk, Ty) => {
    var QF = Fe(),
      ZF = function () {
        return QF.Date.now();
      };
    Ty.exports = ZF;
  });
  var Sy = u((dk, Ay) => {
    var JF = Ke(),
      ja = by(),
      Oy = Xn(),
      eG = "Expected a function",
      tG = Math.max,
      rG = Math.min;
    function nG(e, t, r) {
      var n,
        i,
        o,
        a,
        s,
        c,
        f = 0,
        p = !1,
        d = !1,
        g = !0;
      if (typeof e != "function") throw new TypeError(eG);
      (t = Oy(t) || 0),
        JF(r) &&
          ((p = !!r.leading),
          (d = "maxWait" in r),
          (o = d ? tG(Oy(r.maxWait) || 0, t) : o),
          (g = "trailing" in r ? !!r.trailing : g));
      function E(S) {
        var M = n,
          D = i;
        return (n = i = void 0), (f = S), (a = e.apply(D, M)), a;
      }
      function m(S) {
        return (f = S), (s = setTimeout(b, t)), p ? E(S) : a;
      }
      function y(S) {
        var M = S - c,
          D = S - f,
          G = t - M;
        return d ? rG(G, o - D) : G;
      }
      function R(S) {
        var M = S - c,
          D = S - f;
        return c === void 0 || M >= t || M < 0 || (d && D >= o);
      }
      function b() {
        var S = ja();
        if (R(S)) return A(S);
        s = setTimeout(b, y(S));
      }
      function A(S) {
        return (s = void 0), g && n ? E(S) : ((n = i = void 0), a);
      }
      function T() {
        s !== void 0 && clearTimeout(s), (f = 0), (n = c = i = s = void 0);
      }
      function x() {
        return s === void 0 ? a : A(ja());
      }
      function C() {
        var S = ja(),
          M = R(S);
        if (((n = arguments), (i = this), (c = S), M)) {
          if (s === void 0) return m(c);
          if (d) return clearTimeout(s), (s = setTimeout(b, t)), E(c);
        }
        return s === void 0 && (s = setTimeout(b, t)), a;
      }
      return (C.cancel = T), (C.flush = x), C;
    }
    Ay.exports = nG;
  });
  var wy = u((pk, xy) => {
    var iG = Sy(),
      oG = Ke(),
      aG = "Expected a function";
    function sG(e, t, r) {
      var n = !0,
        i = !0;
      if (typeof e != "function") throw new TypeError(aG);
      return (
        oG(r) &&
          ((n = "leading" in r ? !!r.leading : n),
          (i = "trailing" in r ? !!r.trailing : i)),
        iG(e, t, { leading: n, maxWait: t, trailing: i })
      );
    }
    xy.exports = sG;
  });
  var Cy = {};
  be(Cy, {
    actionListPlaybackChanged: () => rr,
    animationFrameChanged: () => ii,
    clearRequested: () => LG,
    elementStateChanged: () => Ja,
    eventListenerAdded: () => ni,
    eventStateChanged: () => Ya,
    instanceAdded: () => Qa,
    instanceRemoved: () => Za,
    instanceStarted: () => oi,
    mediaQueriesDefined: () => ts,
    parameterChanged: () => tr,
    playbackRequested: () => CG,
    previewRequested: () => RG,
    rawDataImported: () => ka,
    sessionInitialized: () => za,
    sessionStarted: () => Ka,
    sessionStopped: () => $a,
    stopRequested: () => NG,
    testFrameRendered: () => PG,
    viewportWidthChanged: () => es,
  });
  var Ry,
    uG,
    cG,
    lG,
    fG,
    dG,
    pG,
    gG,
    hG,
    vG,
    EG,
    yG,
    mG,
    _G,
    IG,
    TG,
    bG,
    OG,
    AG,
    SG,
    xG,
    wG,
    ka,
    za,
    Ka,
    $a,
    RG,
    CG,
    NG,
    LG,
    ni,
    PG,
    Ya,
    ii,
    tr,
    Qa,
    oi,
    Za,
    Ja,
    rr,
    es,
    ts,
    ai = re(() => {
      "use strict";
      Ae();
      (Ry = Y(At())),
        ({
          IX2_RAW_DATA_IMPORTED: uG,
          IX2_SESSION_INITIALIZED: cG,
          IX2_SESSION_STARTED: lG,
          IX2_SESSION_STOPPED: fG,
          IX2_PREVIEW_REQUESTED: dG,
          IX2_PLAYBACK_REQUESTED: pG,
          IX2_STOP_REQUESTED: gG,
          IX2_CLEAR_REQUESTED: hG,
          IX2_EVENT_LISTENER_ADDED: vG,
          IX2_TEST_FRAME_RENDERED: EG,
          IX2_EVENT_STATE_CHANGED: yG,
          IX2_ANIMATION_FRAME_CHANGED: mG,
          IX2_PARAMETER_CHANGED: _G,
          IX2_INSTANCE_ADDED: IG,
          IX2_INSTANCE_STARTED: TG,
          IX2_INSTANCE_REMOVED: bG,
          IX2_ELEMENT_STATE_CHANGED: OG,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: AG,
          IX2_VIEWPORT_WIDTH_CHANGED: SG,
          IX2_MEDIA_QUERIES_DEFINED: xG,
        } = ue),
        ({ reifyState: wG } = Ry.IX2VanillaUtils),
        (ka = (e) => ({ type: uG, payload: { ...wG(e) } })),
        (za = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: cG,
          payload: { hasBoundaryNodes: e, reducedMotion: t },
        })),
        (Ka = () => ({ type: lG })),
        ($a = () => ({ type: fG })),
        (RG = ({ rawData: e, defer: t }) => ({
          type: dG,
          payload: { defer: t, rawData: e },
        })),
        (CG = ({
          actionTypeId: e = Oe.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: r,
          eventId: n,
          allowEvents: i,
          immediate: o,
          testManual: a,
          verbose: s,
          rawData: c,
        }) => ({
          type: pG,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: r,
            testManual: a,
            eventId: n,
            allowEvents: i,
            immediate: o,
            verbose: s,
            rawData: c,
          },
        })),
        (NG = (e) => ({ type: gG, payload: { actionListId: e } })),
        (LG = () => ({ type: hG })),
        (ni = (e, t) => ({
          type: vG,
          payload: { target: e, listenerParams: t },
        })),
        (PG = (e = 1) => ({ type: EG, payload: { step: e } })),
        (Ya = (e, t) => ({ type: yG, payload: { stateKey: e, newState: t } })),
        (ii = (e, t) => ({ type: mG, payload: { now: e, parameters: t } })),
        (tr = (e, t) => ({ type: _G, payload: { key: e, value: t } })),
        (Qa = (e) => ({ type: IG, payload: { ...e } })),
        (oi = (e, t) => ({ type: TG, payload: { instanceId: e, time: t } })),
        (Za = (e) => ({ type: bG, payload: { instanceId: e } })),
        (Ja = (e, t, r, n) => ({
          type: OG,
          payload: { elementId: e, actionTypeId: t, current: r, actionItem: n },
        })),
        (rr = ({ actionListId: e, isPlaying: t }) => ({
          type: AG,
          payload: { actionListId: e, isPlaying: t },
        })),
        (es = ({ width: e, mediaQueries: t }) => ({
          type: SG,
          payload: { width: e, mediaQueries: t },
        })),
        (ts = () => ({ type: xG }));
    });
  var _e = {};
  be(_e, {
    elementContains: () => is,
    getChildElements: () => BG,
    getClosestElement: () => Br,
    getProperty: () => GG,
    getQuerySelector: () => ns,
    getRefType: () => os,
    getSiblingElements: () => WG,
    getStyle: () => FG,
    getValidDocument: () => UG,
    isSiblingNode: () => HG,
    matchSelector: () => VG,
    queryDocument: () => XG,
    setStyle: () => DG,
  });
  function DG(e, t, r) {
    e.style[t] = r;
  }
  function FG(e, t) {
    return e.style[t];
  }
  function GG(e, t) {
    return e[t];
  }
  function VG(e) {
    return (t) => t[rs](e);
  }
  function ns({ id: e, selector: t }) {
    if (e) {
      let r = e;
      if (e.indexOf(Ny) !== -1) {
        let n = e.split(Ny),
          i = n[0];
        if (((r = n[1]), i !== document.documentElement.getAttribute(Py)))
          return null;
      }
      return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`;
    }
    return t;
  }
  function UG(e) {
    return e == null || e === document.documentElement.getAttribute(Py)
      ? document
      : null;
  }
  function XG(e, t) {
    return Array.prototype.slice.call(
      document.querySelectorAll(t ? e + " " + t : e)
    );
  }
  function is(e, t) {
    return e.contains(t);
  }
  function HG(e, t) {
    return e !== t && e.parentNode === t.parentNode;
  }
  function BG(e) {
    let t = [];
    for (let r = 0, { length: n } = e || []; r < n; r++) {
      let { children: i } = e[r],
        { length: o } = i;
      if (o) for (let a = 0; a < o; a++) t.push(i[a]);
    }
    return t;
  }
  function WG(e = []) {
    let t = [],
      r = [];
    for (let n = 0, { length: i } = e; n < i; n++) {
      let { parentNode: o } = e[n];
      if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1)
        continue;
      r.push(o);
      let a = o.firstElementChild;
      for (; a != null; )
        e.indexOf(a) === -1 && t.push(a), (a = a.nextElementSibling);
    }
    return t;
  }
  function os(e) {
    return e != null && typeof e == "object"
      ? e instanceof Element
        ? qG
        : MG
      : null;
  }
  var Ly,
    rs,
    Ny,
    qG,
    MG,
    Py,
    Br,
    qy = re(() => {
      "use strict";
      Ly = Y(At());
      Ae();
      ({ ELEMENT_MATCHES: rs } = Ly.IX2BrowserSupport),
        ({
          IX2_ID_DELIMITER: Ny,
          HTML_ELEMENT: qG,
          PLAIN_OBJECT: MG,
          WF_PAGE: Py,
        } = ge);
      Br = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let r = e;
            do {
              if (r[rs] && r[rs](t)) return r;
              r = r.parentNode;
            } while (r != null);
            return null;
          };
    });
  var as = u((vk, Dy) => {
    var jG = Ke(),
      My = Object.create,
      kG = (function () {
        function e() {}
        return function (t) {
          if (!jG(t)) return {};
          if (My) return My(t);
          e.prototype = t;
          var r = new e();
          return (e.prototype = void 0), r;
        };
      })();
    Dy.exports = kG;
  });
  var si = u((Ek, Fy) => {
    function zG() {}
    Fy.exports = zG;
  });
  var ci = u((yk, Gy) => {
    var KG = as(),
      $G = si();
    function ui(e, t) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__chain__ = !!t),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    ui.prototype = KG($G.prototype);
    ui.prototype.constructor = ui;
    Gy.exports = ui;
  });
  var Hy = u((mk, Xy) => {
    var Vy = Pt(),
      YG = Sr(),
      QG = fe(),
      Uy = Vy ? Vy.isConcatSpreadable : void 0;
    function ZG(e) {
      return QG(e) || YG(e) || !!(Uy && e && e[Uy]);
    }
    Xy.exports = ZG;
  });
  var jy = u((_k, Wy) => {
    var JG = wn(),
      eV = Hy();
    function By(e, t, r, n, i) {
      var o = -1,
        a = e.length;
      for (r || (r = eV), i || (i = []); ++o < a; ) {
        var s = e[o];
        t > 0 && r(s)
          ? t > 1
            ? By(s, t - 1, r, n, i)
            : JG(i, s)
          : n || (i[i.length] = s);
      }
      return i;
    }
    Wy.exports = By;
  });
  var zy = u((Ik, ky) => {
    var tV = jy();
    function rV(e) {
      var t = e == null ? 0 : e.length;
      return t ? tV(e, 1) : [];
    }
    ky.exports = rV;
  });
  var $y = u((Tk, Ky) => {
    function nV(e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2]);
      }
      return e.apply(t, r);
    }
    Ky.exports = nV;
  });
  var Zy = u((bk, Qy) => {
    var iV = $y(),
      Yy = Math.max;
    function oV(e, t, r) {
      return (
        (t = Yy(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var n = arguments, i = -1, o = Yy(n.length - t, 0), a = Array(o);
            ++i < o;

          )
            a[i] = n[t + i];
          i = -1;
          for (var s = Array(t + 1); ++i < t; ) s[i] = n[i];
          return (s[t] = r(a)), iV(e, this, s);
        }
      );
    }
    Qy.exports = oV;
  });
  var em = u((Ok, Jy) => {
    function aV(e) {
      return function () {
        return e;
      };
    }
    Jy.exports = aV;
  });
  var nm = u((Ak, rm) => {
    var sV = em(),
      tm = Ba(),
      uV = Un(),
      cV = tm
        ? function (e, t) {
            return tm(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: sV(t),
              writable: !0,
            });
          }
        : uV;
    rm.exports = cV;
  });
  var om = u((Sk, im) => {
    var lV = 800,
      fV = 16,
      dV = Date.now;
    function pV(e) {
      var t = 0,
        r = 0;
      return function () {
        var n = dV(),
          i = fV - (n - r);
        if (((r = n), i > 0)) {
          if (++t >= lV) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    im.exports = pV;
  });
  var sm = u((xk, am) => {
    var gV = nm(),
      hV = om(),
      vV = hV(gV);
    am.exports = vV;
  });
  var cm = u((wk, um) => {
    var EV = zy(),
      yV = Zy(),
      mV = sm();
    function _V(e) {
      return mV(yV(e, void 0, EV), e + "");
    }
    um.exports = _V;
  });
  var dm = u((Rk, fm) => {
    var lm = ea(),
      IV = lm && new lm();
    fm.exports = IV;
  });
  var gm = u((Ck, pm) => {
    function TV() {}
    pm.exports = TV;
  });
  var ss = u((Nk, vm) => {
    var hm = dm(),
      bV = gm(),
      OV = hm
        ? function (e) {
            return hm.get(e);
          }
        : bV;
    vm.exports = OV;
  });
  var ym = u((Lk, Em) => {
    var AV = {};
    Em.exports = AV;
  });
  var us = u((Pk, _m) => {
    var mm = ym(),
      SV = Object.prototype,
      xV = SV.hasOwnProperty;
    function wV(e) {
      for (
        var t = e.name + "", r = mm[t], n = xV.call(mm, t) ? r.length : 0;
        n--;

      ) {
        var i = r[n],
          o = i.func;
        if (o == null || o == e) return i.name;
      }
      return t;
    }
    _m.exports = wV;
  });
  var fi = u((qk, Im) => {
    var RV = as(),
      CV = si(),
      NV = 4294967295;
    function li(e) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = NV),
        (this.__views__ = []);
    }
    li.prototype = RV(CV.prototype);
    li.prototype.constructor = li;
    Im.exports = li;
  });
  var bm = u((Mk, Tm) => {
    function LV(e, t) {
      var r = -1,
        n = e.length;
      for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
      return t;
    }
    Tm.exports = LV;
  });
  var Am = u((Dk, Om) => {
    var PV = fi(),
      qV = ci(),
      MV = bm();
    function DV(e) {
      if (e instanceof PV) return e.clone();
      var t = new qV(e.__wrapped__, e.__chain__);
      return (
        (t.__actions__ = MV(e.__actions__)),
        (t.__index__ = e.__index__),
        (t.__values__ = e.__values__),
        t
      );
    }
    Om.exports = DV;
  });
  var wm = u((Fk, xm) => {
    var FV = fi(),
      Sm = ci(),
      GV = si(),
      VV = fe(),
      UV = Je(),
      XV = Am(),
      HV = Object.prototype,
      BV = HV.hasOwnProperty;
    function di(e) {
      if (UV(e) && !VV(e) && !(e instanceof FV)) {
        if (e instanceof Sm) return e;
        if (BV.call(e, "__wrapped__")) return XV(e);
      }
      return new Sm(e);
    }
    di.prototype = GV.prototype;
    di.prototype.constructor = di;
    xm.exports = di;
  });
  var Cm = u((Gk, Rm) => {
    var WV = fi(),
      jV = ss(),
      kV = us(),
      zV = wm();
    function KV(e) {
      var t = kV(e),
        r = zV[t];
      if (typeof r != "function" || !(t in WV.prototype)) return !1;
      if (e === r) return !0;
      var n = jV(r);
      return !!n && e === n[0];
    }
    Rm.exports = KV;
  });
  var qm = u((Vk, Pm) => {
    var Nm = ci(),
      $V = cm(),
      YV = ss(),
      cs = us(),
      QV = fe(),
      Lm = Cm(),
      ZV = "Expected a function",
      JV = 8,
      eU = 32,
      tU = 128,
      rU = 256;
    function nU(e) {
      return $V(function (t) {
        var r = t.length,
          n = r,
          i = Nm.prototype.thru;
        for (e && t.reverse(); n--; ) {
          var o = t[n];
          if (typeof o != "function") throw new TypeError(ZV);
          if (i && !a && cs(o) == "wrapper") var a = new Nm([], !0);
        }
        for (n = a ? n : r; ++n < r; ) {
          o = t[n];
          var s = cs(o),
            c = s == "wrapper" ? YV(o) : void 0;
          c &&
          Lm(c[0]) &&
          c[1] == (tU | JV | eU | rU) &&
          !c[4].length &&
          c[9] == 1
            ? (a = a[cs(c[0])].apply(a, c[3]))
            : (a = o.length == 1 && Lm(o) ? a[s]() : a.thru(o));
        }
        return function () {
          var f = arguments,
            p = f[0];
          if (a && f.length == 1 && QV(p)) return a.plant(p).value();
          for (var d = 0, g = r ? t[d].apply(this, f) : p; ++d < r; )
            g = t[d].call(this, g);
          return g;
        };
      });
    }
    Pm.exports = nU;
  });
  var Dm = u((Uk, Mm) => {
    var iU = qm(),
      oU = iU();
    Mm.exports = oU;
  });
  var Gm = u((Xk, Fm) => {
    function aU(e, t, r) {
      return (
        e === e &&
          (r !== void 0 && (e = e <= r ? e : r),
          t !== void 0 && (e = e >= t ? e : t)),
        e
      );
    }
    Fm.exports = aU;
  });
  var Um = u((Hk, Vm) => {
    var sU = Gm(),
      ls = Xn();
    function uU(e, t, r) {
      return (
        r === void 0 && ((r = t), (t = void 0)),
        r !== void 0 && ((r = ls(r)), (r = r === r ? r : 0)),
        t !== void 0 && ((t = ls(t)), (t = t === t ? t : 0)),
        sU(ls(e), t, r)
      );
    }
    Vm.exports = uU;
  });
  var $m,
    Ym,
    Qm,
    Zm,
    cU,
    lU,
    fU,
    dU,
    pU,
    gU,
    hU,
    vU,
    EU,
    yU,
    mU,
    _U,
    IU,
    TU,
    bU,
    Jm,
    e_,
    OU,
    AU,
    SU,
    t_,
    xU,
    wU,
    r_,
    RU,
    fs,
    n_,
    Xm,
    Hm,
    i_,
    jr,
    CU,
    Qe,
    o_,
    NU,
    xe,
    Ue,
    kr,
    a_,
    ds,
    Bm,
    ps,
    LU,
    Wr,
    PU,
    qU,
    MU,
    s_,
    Wm,
    DU,
    jm,
    FU,
    GU,
    VU,
    km,
    pi,
    gi,
    zm,
    Km,
    u_,
    c_ = re(() => {
      "use strict";
      ($m = Y(Dm())), (Ym = Y(Vn())), (Qm = Y(Um()));
      Ae();
      gs();
      ai();
      (Zm = Y(At())),
        ({
          MOUSE_CLICK: cU,
          MOUSE_SECOND_CLICK: lU,
          MOUSE_DOWN: fU,
          MOUSE_UP: dU,
          MOUSE_OVER: pU,
          MOUSE_OUT: gU,
          DROPDOWN_CLOSE: hU,
          DROPDOWN_OPEN: vU,
          SLIDER_ACTIVE: EU,
          SLIDER_INACTIVE: yU,
          TAB_ACTIVE: mU,
          TAB_INACTIVE: _U,
          NAVBAR_CLOSE: IU,
          NAVBAR_OPEN: TU,
          MOUSE_MOVE: bU,
          PAGE_SCROLL_DOWN: Jm,
          SCROLL_INTO_VIEW: e_,
          SCROLL_OUT_OF_VIEW: OU,
          PAGE_SCROLL_UP: AU,
          SCROLLING_IN_VIEW: SU,
          PAGE_FINISH: t_,
          ECOMMERCE_CART_CLOSE: xU,
          ECOMMERCE_CART_OPEN: wU,
          PAGE_START: r_,
          PAGE_SCROLL: RU,
        } = Ge),
        (fs = "COMPONENT_ACTIVE"),
        (n_ = "COMPONENT_INACTIVE"),
        ({ COLON_DELIMITER: Xm } = ge),
        ({ getNamespacedParameterId: Hm } = Zm.IX2VanillaUtils),
        (i_ = (e) => (t) => typeof t == "object" && e(t) ? !0 : t),
        (jr = i_(({ element: e, nativeEvent: t }) => e === t.target)),
        (CU = i_(({ element: e, nativeEvent: t }) => e.contains(t.target))),
        (Qe = (0, $m.default)([jr, CU])),
        (o_ = (e, t) => {
          if (t) {
            let { ixData: r } = e.getState(),
              { events: n } = r,
              i = n[t];
            if (i && !LU[i.eventTypeId]) return i;
          }
          return null;
        }),
        (NU = ({ store: e, event: t }) => {
          let { action: r } = t,
            { autoStopEventId: n } = r.config;
          return !!o_(e, n);
        }),
        (xe = ({ store: e, event: t, element: r, eventStateKey: n }, i) => {
          let { action: o, id: a } = t,
            { actionListId: s, autoStopEventId: c } = o.config,
            f = o_(e, c);
          return (
            f &&
              nr({
                store: e,
                eventId: c,
                eventTarget: r,
                eventStateKey: c + Xm + n.split(Xm)[1],
                actionListId: (0, Ym.default)(f, "action.config.actionListId"),
              }),
            nr({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: s,
            }),
            zr({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: s,
            }),
            i
          );
        }),
        (Ue = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n),
        (kr = { handler: Ue(Qe, xe) }),
        (a_ = { ...kr, types: [fs, n_].join(" ") }),
        (ds = [
          { target: window, types: "resize orientationchange", throttle: !0 },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ]),
        (Bm = "mouseover mouseout"),
        (ps = { types: ds }),
        (LU = { PAGE_START: r_, PAGE_FINISH: t_ }),
        (Wr = (() => {
          let e = window.pageXOffset !== void 0,
            r =
              document.compatMode === "CSS1Compat"
                ? document.documentElement
                : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : r.scrollLeft,
            scrollTop: e ? window.pageYOffset : r.scrollTop,
            stiffScrollTop: (0, Qm.default)(
              e ? window.pageYOffset : r.scrollTop,
              0,
              r.scrollHeight - window.innerHeight
            ),
            scrollWidth: r.scrollWidth,
            scrollHeight: r.scrollHeight,
            clientWidth: r.clientWidth,
            clientHeight: r.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })()),
        (PU = (e, t) =>
          !(
            e.left > t.right ||
            e.right < t.left ||
            e.top > t.bottom ||
            e.bottom < t.top
          )),
        (qU = ({ element: e, nativeEvent: t }) => {
          let { type: r, target: n, relatedTarget: i } = t,
            o = e.contains(n);
          if (r === "mouseover" && o) return !0;
          let a = e.contains(i);
          return !!(r === "mouseout" && o && a);
        }),
        (MU = (e) => {
          let {
              element: t,
              event: { config: r },
            } = e,
            { clientWidth: n, clientHeight: i } = Wr(),
            o = r.scrollOffsetValue,
            c = r.scrollOffsetUnit === "PX" ? o : (i * (o || 0)) / 100;
          return PU(t.getBoundingClientRect(), {
            left: 0,
            top: c,
            right: n,
            bottom: i - c,
          });
        }),
        (s_ = (e) => (t, r) => {
          let { type: n } = t.nativeEvent,
            i = [fs, n_].indexOf(n) !== -1 ? n === fs : r.isActive,
            o = { ...r, isActive: i };
          return ((!r || o.isActive !== r.isActive) && e(t, o)) || o;
        }),
        (Wm = (e) => (t, r) => {
          let n = { elementHovered: qU(t) };
          return (
            ((r ? n.elementHovered !== r.elementHovered : n.elementHovered) &&
              e(t, n)) ||
            n
          );
        }),
        (DU = (e) => (t, r) => {
          let n = { ...r, elementVisible: MU(t) };
          return (
            ((r ? n.elementVisible !== r.elementVisible : n.elementVisible) &&
              e(t, n)) ||
            n
          );
        }),
        (jm =
          (e) =>
          (t, r = {}) => {
            let { stiffScrollTop: n, scrollHeight: i, innerHeight: o } = Wr(),
              {
                event: { config: a, eventTypeId: s },
              } = t,
              { scrollOffsetValue: c, scrollOffsetUnit: f } = a,
              p = f === "PX",
              d = i - o,
              g = Number((n / d).toFixed(2));
            if (r && r.percentTop === g) return r;
            let E = (p ? c : (o * (c || 0)) / 100) / d,
              m,
              y,
              R = 0;
            r &&
              ((m = g > r.percentTop),
              (y = r.scrollingDown !== m),
              (R = y ? g : r.anchorTop));
            let b = s === Jm ? g >= R + E : g <= R - E,
              A = {
                ...r,
                percentTop: g,
                inBounds: b,
                anchorTop: R,
                scrollingDown: m,
              };
            return (r && b && (y || A.inBounds !== r.inBounds) && e(t, A)) || A;
          }),
        (FU = (e, t) =>
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom),
        (GU = (e) => (t, r) => {
          let n = { finished: document.readyState === "complete" };
          return n.finished && !(r && r.finshed) && e(t), n;
        }),
        (VU = (e) => (t, r) => {
          let n = { started: !0 };
          return r || e(t), n;
        }),
        (km =
          (e) =>
          (t, r = { clickCount: 0 }) => {
            let n = { clickCount: (r.clickCount % 2) + 1 };
            return (n.clickCount !== r.clickCount && e(t, n)) || n;
          }),
        (pi = (e = !0) => ({
          ...a_,
          handler: Ue(
            e ? Qe : jr,
            s_((t, r) => (r.isActive ? kr.handler(t, r) : r))
          ),
        })),
        (gi = (e = !0) => ({
          ...a_,
          handler: Ue(
            e ? Qe : jr,
            s_((t, r) => (r.isActive ? r : kr.handler(t, r)))
          ),
        })),
        (zm = {
          ...ps,
          handler: DU((e, t) => {
            let { elementVisible: r } = t,
              { event: n, store: i } = e,
              { ixData: o } = i.getState(),
              { events: a } = o;
            return !a[n.action.config.autoStopEventId] && t.triggered
              ? t
              : (n.eventTypeId === e_) === r
              ? (xe(e), { ...t, triggered: !0 })
              : t;
          }),
        }),
        (Km = 0.05),
        (u_ = {
          [EU]: pi(),
          [yU]: gi(),
          [vU]: pi(),
          [hU]: gi(),
          [TU]: pi(!1),
          [IU]: gi(!1),
          [mU]: pi(),
          [_U]: gi(),
          [wU]: { types: "ecommerce-cart-open", handler: Ue(Qe, xe) },
          [xU]: { types: "ecommerce-cart-close", handler: Ue(Qe, xe) },
          [cU]: {
            types: "click",
            handler: Ue(
              Qe,
              km((e, { clickCount: t }) => {
                NU(e) ? t === 1 && xe(e) : xe(e);
              })
            ),
          },
          [lU]: {
            types: "click",
            handler: Ue(
              Qe,
              km((e, { clickCount: t }) => {
                t === 2 && xe(e);
              })
            ),
          },
          [fU]: { ...kr, types: "mousedown" },
          [dU]: { ...kr, types: "mouseup" },
          [pU]: {
            types: Bm,
            handler: Ue(
              Qe,
              Wm((e, t) => {
                t.elementHovered && xe(e);
              })
            ),
          },
          [gU]: {
            types: Bm,
            handler: Ue(
              Qe,
              Wm((e, t) => {
                t.elementHovered || xe(e);
              })
            ),
          },
          [bU]: {
            types: "mousemove mouseout scroll",
            handler: (
              {
                store: e,
                element: t,
                eventConfig: r,
                nativeEvent: n,
                eventStateKey: i,
              },
              o = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
            ) => {
              let {
                  basedOn: a,
                  selectedAxis: s,
                  continuousParameterGroupId: c,
                  reverse: f,
                  restingState: p = 0,
                } = r,
                {
                  clientX: d = o.clientX,
                  clientY: g = o.clientY,
                  pageX: E = o.pageX,
                  pageY: m = o.pageY,
                } = n,
                y = s === "X_AXIS",
                R = n.type === "mouseout",
                b = p / 100,
                A = c,
                T = !1;
              switch (a) {
                case ze.VIEWPORT: {
                  b = y
                    ? Math.min(d, window.innerWidth) / window.innerWidth
                    : Math.min(g, window.innerHeight) / window.innerHeight;
                  break;
                }
                case ze.PAGE: {
                  let {
                    scrollLeft: x,
                    scrollTop: C,
                    scrollWidth: S,
                    scrollHeight: M,
                  } = Wr();
                  b = y ? Math.min(x + E, S) / S : Math.min(C + m, M) / M;
                  break;
                }
                case ze.ELEMENT:
                default: {
                  A = Hm(i, c);
                  let x = n.type.indexOf("mouse") === 0;
                  if (x && Qe({ element: t, nativeEvent: n }) !== !0) break;
                  let C = t.getBoundingClientRect(),
                    { left: S, top: M, width: D, height: G } = C;
                  if (!x && !FU({ left: d, top: g }, C)) break;
                  (T = !0), (b = y ? (d - S) / D : (g - M) / G);
                  break;
                }
              }
              return (
                R && (b > 1 - Km || b < Km) && (b = Math.round(b)),
                (a !== ze.ELEMENT || T || T !== o.elementHovered) &&
                  ((b = f ? 1 - b : b), e.dispatch(tr(A, b))),
                {
                  elementHovered: T,
                  clientX: d,
                  clientY: g,
                  pageX: E,
                  pageY: m,
                }
              );
            },
          },
          [RU]: {
            types: ds,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: r, reverse: n } = t,
                { scrollTop: i, scrollHeight: o, clientHeight: a } = Wr(),
                s = i / (o - a);
              (s = n ? 1 - s : s), e.dispatch(tr(r, s));
            },
          },
          [SU]: {
            types: ds,
            handler: (
              { element: e, store: t, eventConfig: r, eventStateKey: n },
              i = { scrollPercent: 0 }
            ) => {
              let {
                  scrollLeft: o,
                  scrollTop: a,
                  scrollWidth: s,
                  scrollHeight: c,
                  clientHeight: f,
                } = Wr(),
                {
                  basedOn: p,
                  selectedAxis: d,
                  continuousParameterGroupId: g,
                  startsEntering: E,
                  startsExiting: m,
                  addEndOffset: y,
                  addStartOffset: R,
                  addOffsetValue: b = 0,
                  endOffsetValue: A = 0,
                } = r,
                T = d === "X_AXIS";
              if (p === ze.VIEWPORT) {
                let x = T ? o / s : a / c;
                return (
                  x !== i.scrollPercent && t.dispatch(tr(g, x)),
                  { scrollPercent: x }
                );
              } else {
                let x = Hm(n, g),
                  C = e.getBoundingClientRect(),
                  S = (R ? b : 0) / 100,
                  M = (y ? A : 0) / 100;
                (S = E ? S : 1 - S), (M = m ? M : 1 - M);
                let D = C.top + Math.min(C.height * S, f),
                  X = C.top + C.height * M - D,
                  W = Math.min(f + X, c),
                  _ = Math.min(Math.max(0, f - D), W) / W;
                return (
                  _ !== i.scrollPercent && t.dispatch(tr(x, _)),
                  { scrollPercent: _ }
                );
              }
            },
          },
          [e_]: zm,
          [OU]: zm,
          [Jm]: {
            ...ps,
            handler: jm((e, t) => {
              t.scrollingDown && xe(e);
            }),
          },
          [AU]: {
            ...ps,
            handler: jm((e, t) => {
              t.scrollingDown || xe(e);
            }),
          },
          [t_]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: Ue(jr, GU(xe)),
          },
          [r_]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: Ue(jr, VU(xe)),
          },
        });
    });
  var S_ = {};
  be(S_, {
    observeRequests: () => oX,
    startActionGroup: () => zr,
    startEngine: () => _i,
    stopActionGroup: () => nr,
    stopAllActionGroups: () => b_,
    stopEngine: () => Ii,
  });
  function oX(e) {
    St({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: uX }),
      St({ store: e, select: ({ ixRequest: t }) => t.playback, onChange: cX }),
      St({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: lX }),
      St({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: fX });
  }
  function aX(e) {
    St({
      store: e,
      select: ({ ixSession: t }) => t.mediaQueryKey,
      onChange: () => {
        Ii(e),
          m_({ store: e, elementApi: _e }),
          _i({ store: e, allowEvents: !0 }),
          __();
      },
    });
  }
  function sX(e, t) {
    let r = St({
      store: e,
      select: ({ ixSession: n }) => n.tick,
      onChange: (n) => {
        t(n), r();
      },
    });
  }
  function uX({ rawData: e, defer: t }, r) {
    let n = () => {
      _i({ store: r, rawData: e, allowEvents: !0 }), __();
    };
    t ? setTimeout(n, 0) : n();
  }
  function __() {
    document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
  }
  function cX(e, t) {
    let {
        actionTypeId: r,
        actionListId: n,
        actionItemId: i,
        eventId: o,
        allowEvents: a,
        immediate: s,
        testManual: c,
        verbose: f = !0,
      } = e,
      { rawData: p } = e;
    if (n && i && p && s) {
      let d = p.actionLists[n];
      d && (p = KU({ actionList: d, actionItemId: i, rawData: p }));
    }
    if (
      (_i({ store: t, rawData: p, allowEvents: a, testManual: c }),
      (n && r === Oe.GENERAL_START_ACTION) || hs(r))
    ) {
      nr({ store: t, actionListId: n }),
        T_({ store: t, actionListId: n, eventId: o });
      let d = zr({
        store: t,
        eventId: o,
        actionListId: n,
        immediate: s,
        verbose: f,
      });
      f && d && t.dispatch(rr({ actionListId: n, isPlaying: !s }));
    }
  }
  function lX({ actionListId: e }, t) {
    e ? nr({ store: t, actionListId: e }) : b_({ store: t }), Ii(t);
  }
  function fX(e, t) {
    Ii(t), m_({ store: t, elementApi: _e });
  }
  function _i({ store: e, rawData: t, allowEvents: r, testManual: n }) {
    let { ixSession: i } = e.getState();
    t && e.dispatch(ka(t)),
      i.active ||
        (e.dispatch(
          za({
            hasBoundaryNodes: !!document.querySelector(vi),
            reducedMotion:
              document.body.hasAttribute("data-wf-ix-vacation") &&
              window.matchMedia("(prefers-reduced-motion)").matches,
          })
        ),
        r &&
          (EX(e), dX(), e.getState().ixSession.hasDefinedMediaQueries && aX(e)),
        e.dispatch(Ka()),
        pX(e, n));
  }
  function dX() {
    let { documentElement: e } = document;
    e.className.indexOf(l_) === -1 && (e.className += ` ${l_}`);
  }
  function pX(e, t) {
    let r = (n) => {
      let { ixSession: i, ixParameters: o } = e.getState();
      i.active &&
        (e.dispatch(ii(n, o)), t ? sX(e, r) : requestAnimationFrame(r));
    };
    r(window.performance.now());
  }
  function Ii(e) {
    let { ixSession: t } = e.getState();
    if (t.active) {
      let { eventListeners: r } = t;
      r.forEach(gX), ZU(), e.dispatch($a());
    }
  }
  function gX({ target: e, listenerParams: t }) {
    e.removeEventListener.apply(e, t);
  }
  function hX({
    store: e,
    eventStateKey: t,
    eventTarget: r,
    eventId: n,
    eventConfig: i,
    actionListId: o,
    parameterGroup: a,
    smoothing: s,
    restingValue: c,
  }) {
    let { ixData: f, ixSession: p } = e.getState(),
      { events: d } = f,
      g = d[n],
      { eventTypeId: E } = g,
      m = {},
      y = {},
      R = [],
      { continuousActionGroups: b } = a,
      { id: A } = a;
    $U(E, i) && (A = YU(t, A));
    let T = p.hasBoundaryNodes && r ? Br(r, vi) : null;
    b.forEach((x) => {
      let { keyframe: C, actionItems: S } = x;
      S.forEach((M) => {
        let { actionTypeId: D } = M,
          { target: G } = M.config;
        if (!G) return;
        let X = G.boundaryMode ? T : null,
          W = JU(G) + vs + D;
        if (((y[W] = vX(y[W], C, M)), !m[W])) {
          m[W] = !0;
          let { config: L } = M;
          Ei({
            config: L,
            event: g,
            eventTarget: r,
            elementRoot: X,
            elementApi: _e,
          }).forEach((_) => {
            R.push({ element: _, key: W });
          });
        }
      });
    }),
      R.forEach(({ element: x, key: C }) => {
        let S = y[C],
          M = (0, nt.default)(S, "[0].actionItems[0]", {}),
          { actionTypeId: D } = M,
          G = mi(D) ? ys(D)(x, M) : null,
          X = Es({ element: x, actionItem: M, elementApi: _e }, G);
        ms({
          store: e,
          element: x,
          eventId: n,
          actionListId: o,
          actionItem: M,
          destination: X,
          continuous: !0,
          parameterId: A,
          actionGroups: S,
          smoothing: s,
          restingValue: c,
          pluginInstance: G,
        });
      });
  }
  function vX(e = [], t, r) {
    let n = [...e],
      i;
    return (
      n.some((o, a) => (o.keyframe === t ? ((i = a), !0) : !1)),
      i == null && ((i = n.length), n.push({ keyframe: t, actionItems: [] })),
      n[i].actionItems.push(r),
      n
    );
  }
  function EX(e) {
    let { ixData: t } = e.getState(),
      { eventTypeMap: r } = t;
    I_(e),
      (0, ir.default)(r, (i, o) => {
        let a = u_[o];
        if (!a) {
          console.warn(`IX2 event type not configured: ${o}`);
          return;
        }
        bX({ logic: a, store: e, events: i });
      });
    let { ixSession: n } = e.getState();
    n.eventListeners.length && mX(e);
  }
  function mX(e) {
    let t = () => {
      I_(e);
    };
    yX.forEach((r) => {
      window.addEventListener(r, t), e.dispatch(ni(window, [r, t]));
    }),
      t();
  }
  function I_(e) {
    let { ixSession: t, ixData: r } = e.getState(),
      n = window.innerWidth;
    if (n !== t.viewportWidth) {
      let { mediaQueries: i } = r;
      e.dispatch(es({ width: n, mediaQueries: i }));
    }
  }
  function bX({ logic: e, store: t, events: r }) {
    OX(r);
    let { types: n, handler: i } = e,
      { ixData: o } = t.getState(),
      { actionLists: a } = o,
      s = _X(r, TX);
    if (!(0, p_.default)(s)) return;
    (0, ir.default)(s, (d, g) => {
      let E = r[g],
        { action: m, id: y, mediaQueries: R = o.mediaQueryKeys } = E,
        { actionListId: b } = m.config;
      eX(R, o.mediaQueryKeys) || t.dispatch(ts()),
        m.actionTypeId === Oe.GENERAL_CONTINUOUS_ACTION &&
          (Array.isArray(E.config) ? E.config : [E.config]).forEach((T) => {
            let { continuousParameterGroupId: x } = T,
              C = (0, nt.default)(a, `${b}.continuousParameterGroups`, []),
              S = (0, d_.default)(C, ({ id: G }) => G === x),
              M = (T.smoothing || 0) / 100,
              D = (T.restingState || 0) / 100;
            S &&
              d.forEach((G, X) => {
                let W = y + vs + X;
                hX({
                  store: t,
                  eventStateKey: W,
                  eventTarget: G,
                  eventId: y,
                  eventConfig: T,
                  actionListId: b,
                  parameterGroup: S,
                  smoothing: M,
                  restingValue: D,
                });
              });
          }),
        (m.actionTypeId === Oe.GENERAL_START_ACTION || hs(m.actionTypeId)) &&
          T_({ store: t, actionListId: b, eventId: y });
    });
    let c = (d) => {
        let { ixSession: g } = t.getState();
        IX(s, (E, m, y) => {
          let R = r[m],
            b = g.eventState[y],
            { action: A, mediaQueries: T = o.mediaQueryKeys } = R;
          if (!yi(T, g.mediaQueryKey)) return;
          let x = (C = {}) => {
            let S = i(
              {
                store: t,
                element: E,
                event: R,
                eventConfig: C,
                nativeEvent: d,
                eventStateKey: y,
              },
              b
            );
            tX(S, b) || t.dispatch(Ya(y, S));
          };
          A.actionTypeId === Oe.GENERAL_CONTINUOUS_ACTION
            ? (Array.isArray(R.config) ? R.config : [R.config]).forEach(x)
            : x();
        });
      },
      f = (0, E_.default)(c, iX),
      p = ({ target: d = document, types: g, throttle: E }) => {
        g.split(" ")
          .filter(Boolean)
          .forEach((m) => {
            let y = E ? f : c;
            d.addEventListener(m, y), t.dispatch(ni(d, [m, y]));
          });
      };
    Array.isArray(n) ? n.forEach(p) : typeof n == "string" && p(e);
  }
  function OX(e) {
    if (!nX) return;
    let t = {},
      r = "";
    for (let n in e) {
      let { eventTypeId: i, target: o } = e[n],
        a = ns(o);
      t[a] ||
        ((i === Ge.MOUSE_CLICK || i === Ge.MOUSE_SECOND_CLICK) &&
          ((t[a] = !0),
          (r += a + "{cursor: pointer;touch-action: manipulation;}")));
    }
    if (r) {
      let n = document.createElement("style");
      (n.textContent = r), document.body.appendChild(n);
    }
  }
  function T_({ store: e, actionListId: t, eventId: r }) {
    let { ixData: n, ixSession: i } = e.getState(),
      { actionLists: o, events: a } = n,
      s = a[r],
      c = o[t];
    if (c && c.useFirstGroupAsInitialState) {
      let f = (0, nt.default)(c, "actionItemGroups[0].actionItems", []),
        p = (0, nt.default)(s, "mediaQueries", n.mediaQueryKeys);
      if (!yi(p, i.mediaQueryKey)) return;
      f.forEach((d) => {
        let { config: g, actionTypeId: E } = d,
          m =
            g?.target?.useEventTarget === !0 && g?.target?.objectId == null
              ? { target: s.target, targets: s.targets }
              : g,
          y = Ei({ config: m, event: s, elementApi: _e }),
          R = mi(E);
        y.forEach((b) => {
          let A = R ? ys(E)(b, d) : null;
          ms({
            destination: Es({ element: b, actionItem: d, elementApi: _e }, A),
            immediate: !0,
            store: e,
            element: b,
            eventId: r,
            actionItem: d,
            actionListId: t,
            pluginInstance: A,
          });
        });
      });
    }
  }
  function b_({ store: e }) {
    let { ixInstances: t } = e.getState();
    (0, ir.default)(t, (r) => {
      if (!r.continuous) {
        let { actionListId: n, verbose: i } = r;
        _s(r, e), i && e.dispatch(rr({ actionListId: n, isPlaying: !1 }));
      }
    });
  }
  function nr({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: i,
  }) {
    let { ixInstances: o, ixSession: a } = e.getState(),
      s = a.hasBoundaryNodes && r ? Br(r, vi) : null;
    (0, ir.default)(o, (c) => {
      let f = (0, nt.default)(c, "actionItem.config.target.boundaryMode"),
        p = n ? c.eventStateKey === n : !0;
      if (c.actionListId === i && c.eventId === t && p) {
        if (s && f && !is(s, c.element)) return;
        _s(c, e),
          c.verbose && e.dispatch(rr({ actionListId: i, isPlaying: !1 }));
      }
    });
  }
  function zr({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: i,
    groupIndex: o = 0,
    immediate: a,
    verbose: s,
  }) {
    let { ixData: c, ixSession: f } = e.getState(),
      { events: p } = c,
      d = p[t] || {},
      { mediaQueries: g = c.mediaQueryKeys } = d,
      E = (0, nt.default)(c, `actionLists.${i}`, {}),
      { actionItemGroups: m, useFirstGroupAsInitialState: y } = E;
    if (!m || !m.length) return !1;
    o >= m.length && (0, nt.default)(d, "config.loop") && (o = 0),
      o === 0 && y && o++;
    let b =
        (o === 0 || (o === 1 && y)) && hs(d.action?.actionTypeId)
          ? d.config.delay
          : void 0,
      A = (0, nt.default)(m, [o, "actionItems"], []);
    if (!A.length || !yi(g, f.mediaQueryKey)) return !1;
    let T = f.hasBoundaryNodes && r ? Br(r, vi) : null,
      x = jU(A),
      C = !1;
    return (
      A.forEach((S, M) => {
        let { config: D, actionTypeId: G } = S,
          X = mi(G),
          { target: W } = D;
        if (!W) return;
        let L = W.boundaryMode ? T : null;
        Ei({
          config: D,
          event: d,
          eventTarget: r,
          elementRoot: L,
          elementApi: _e,
        }).forEach((N, F) => {
          let q = X ? ys(G)(N, S) : null,
            j = X ? rX(G)(N, S) : null;
          C = !0;
          let B = x === M && F === 0,
            J = kU({ element: N, actionItem: S }),
            we = Es({ element: N, actionItem: S, elementApi: _e }, q);
          ms({
            store: e,
            element: N,
            actionItem: S,
            eventId: t,
            eventTarget: r,
            eventStateKey: n,
            actionListId: i,
            groupIndex: o,
            isCarrier: B,
            computedStyle: J,
            destination: we,
            immediate: a,
            verbose: s,
            pluginInstance: q,
            pluginDuration: j,
            instanceDelay: b,
          });
        });
      }),
      C
    );
  }
  function ms(e) {
    let { store: t, computedStyle: r, ...n } = e,
      {
        element: i,
        actionItem: o,
        immediate: a,
        pluginInstance: s,
        continuous: c,
        restingValue: f,
        eventId: p,
      } = n,
      d = !c,
      g = BU(),
      { ixElements: E, ixSession: m, ixData: y } = t.getState(),
      R = HU(E, i),
      { refState: b } = E[R] || {},
      A = os(i),
      T = m.reducedMotion && Xo[o.actionTypeId],
      x;
    if (T && c)
      switch (y.events[p]?.eventTypeId) {
        case Ge.MOUSE_MOVE:
        case Ge.MOUSE_MOVE_IN_VIEWPORT:
          x = f;
          break;
        default:
          x = 0.5;
          break;
      }
    let C = zU(i, b, r, o, _e, s);
    if (
      (t.dispatch(
        Qa({
          instanceId: g,
          elementId: R,
          origin: C,
          refType: A,
          skipMotion: T,
          skipToValue: x,
          ...n,
        })
      ),
      O_(document.body, "ix2-animation-started", g),
      a)
    ) {
      AX(t, g);
      return;
    }
    St({ store: t, select: ({ ixInstances: S }) => S[g], onChange: A_ }),
      d && t.dispatch(oi(g, m.tick));
  }
  function _s(e, t) {
    O_(document.body, "ix2-animation-stopping", {
      instanceId: e.id,
      state: t.getState(),
    });
    let { elementId: r, actionItem: n } = e,
      { ixElements: i } = t.getState(),
      { ref: o, refType: a } = i[r] || {};
    a === y_ && QU(o, n, _e), t.dispatch(Za(e.id));
  }
  function O_(e, t, r) {
    let n = document.createEvent("CustomEvent");
    n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n);
  }
  function AX(e, t) {
    let { ixParameters: r } = e.getState();
    e.dispatch(oi(t, 0)), e.dispatch(ii(performance.now(), r));
    let { ixInstances: n } = e.getState();
    A_(n[t], e);
  }
  function A_(e, t) {
    let {
        active: r,
        continuous: n,
        complete: i,
        elementId: o,
        actionItem: a,
        actionTypeId: s,
        renderType: c,
        current: f,
        groupIndex: p,
        eventId: d,
        eventTarget: g,
        eventStateKey: E,
        actionListId: m,
        isCarrier: y,
        styleProp: R,
        verbose: b,
        pluginInstance: A,
      } = e,
      { ixData: T, ixSession: x } = t.getState(),
      { events: C } = T,
      S = C[d] || {},
      { mediaQueries: M = T.mediaQueryKeys } = S;
    if (yi(M, x.mediaQueryKey) && (n || r || i)) {
      if (f || (c === XU && i)) {
        t.dispatch(Ja(o, s, f, a));
        let { ixElements: D } = t.getState(),
          { ref: G, refType: X, refState: W } = D[o] || {},
          L = W && W[s];
        (X === y_ || mi(s)) && WU(G, W, L, d, a, R, _e, c, A);
      }
      if (i) {
        if (y) {
          let D = zr({
            store: t,
            eventId: d,
            eventTarget: g,
            eventStateKey: E,
            actionListId: m,
            groupIndex: p + 1,
            verbose: b,
          });
          b && !D && t.dispatch(rr({ actionListId: m, isPlaying: !1 }));
        }
        _s(e, t);
      }
    }
  }
  var d_,
    nt,
    p_,
    g_,
    h_,
    v_,
    ir,
    E_,
    hi,
    UU,
    hs,
    vs,
    vi,
    y_,
    XU,
    l_,
    Ei,
    HU,
    Es,
    St,
    BU,
    WU,
    m_,
    jU,
    kU,
    zU,
    KU,
    $U,
    YU,
    yi,
    QU,
    ZU,
    JU,
    eX,
    tX,
    mi,
    ys,
    rX,
    f_,
    nX,
    iX,
    yX,
    _X,
    IX,
    TX,
    gs = re(() => {
      "use strict";
      (d_ = Y(va())),
        (nt = Y(Vn())),
        (p_ = Y(VE())),
        (g_ = Y(fy())),
        (h_ = Y(py())),
        (v_ = Y(hy())),
        (ir = Y(Iy())),
        (E_ = Y(wy()));
      Ae();
      hi = Y(At());
      ai();
      qy();
      c_();
      (UU = Object.keys(En)),
        (hs = (e) => UU.includes(e)),
        ({
          COLON_DELIMITER: vs,
          BOUNDARY_SELECTOR: vi,
          HTML_ELEMENT: y_,
          RENDER_GENERAL: XU,
          W_MOD_IX: l_,
        } = ge),
        ({
          getAffectedElements: Ei,
          getElementId: HU,
          getDestinationValues: Es,
          observeStore: St,
          getInstanceId: BU,
          renderHTMLElement: WU,
          clearAllStyles: m_,
          getMaxDurationItemIndex: jU,
          getComputedStyle: kU,
          getInstanceOrigin: zU,
          reduceListToGroup: KU,
          shouldNamespaceEventParameter: $U,
          getNamespacedParameterId: YU,
          shouldAllowMediaQuery: yi,
          cleanupHTMLElement: QU,
          clearObjectCache: ZU,
          stringifyTarget: JU,
          mediaQueriesEqual: eX,
          shallowEqual: tX,
        } = hi.IX2VanillaUtils),
        ({
          isPluginType: mi,
          createPluginInstance: ys,
          getPluginDuration: rX,
        } = hi.IX2VanillaPlugins),
        (f_ = navigator.userAgent),
        (nX = f_.match(/iPad/i) || f_.match(/iPhone/)),
        (iX = 12);
      yX = ["resize", "orientationchange"];
      (_X = (e, t) => (0, g_.default)((0, v_.default)(e, t), h_.default)),
        (IX = (e, t) => {
          (0, ir.default)(e, (r, n) => {
            r.forEach((i, o) => {
              let a = n + vs + o;
              t(i, n, a);
            });
          });
        }),
        (TX = (e) => {
          let t = { target: e.target, targets: e.targets };
          return Ei({ config: t, elementApi: _e });
        });
    });
  var w_ = u((it) => {
    "use strict";
    var SX = nn().default,
      xX = lu().default;
    Object.defineProperty(it, "__esModule", { value: !0 });
    it.actions = void 0;
    it.destroy = x_;
    it.init = LX;
    it.setEnv = NX;
    it.store = void 0;
    $l();
    var wX = Go(),
      RX = xX((_E(), He(mE))),
      Is = (gs(), He(S_)),
      CX = SX((ai(), He(Cy)));
    it.actions = CX;
    var Ts = (it.store = (0, wX.createStore)(RX.default));
    function NX(e) {
      e() && (0, Is.observeRequests)(Ts);
    }
    function LX(e) {
      x_(), (0, Is.startEngine)({ store: Ts, rawData: e, allowEvents: !0 });
    }
    function x_() {
      (0, Is.stopEngine)(Ts);
    }
  });
  var L_ = u((Qk, N_) => {
    "use strict";
    var R_ = We(),
      C_ = w_();
    C_.setEnv(R_.env);
    R_.define(
      "ix2",
      (N_.exports = function () {
        return C_;
      })
    );
  });
  var q_ = u((Zk, P_) => {
    "use strict";
    var or = We();
    or.define(
      "links",
      (P_.exports = function (e, t) {
        var r = {},
          n = e(window),
          i,
          o = or.env(),
          a = window.location,
          s = document.createElement("a"),
          c = "w--current",
          f = /index\.(html|php)$/,
          p = /\/$/,
          d,
          g;
        r.ready = r.design = r.preview = E;
        function E() {
          (i = o && or.env("design")),
            (g = or.env("slug") || a.pathname || ""),
            or.scroll.off(y),
            (d = []);
          for (var b = document.links, A = 0; A < b.length; ++A) m(b[A]);
          d.length && (or.scroll.on(y), y());
        }
        function m(b) {
          if (!b.getAttribute("hreflang")) {
            var A =
              (i && b.getAttribute("href-disabled")) || b.getAttribute("href");
            if (((s.href = A), !(A.indexOf(":") >= 0))) {
              var T = e(b);
              if (
                s.hash.length > 1 &&
                s.host + s.pathname === a.host + a.pathname
              ) {
                if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                var x = e(s.hash);
                x.length && d.push({ link: T, sec: x, active: !1 });
                return;
              }
              if (!(A === "#" || A === "")) {
                var C =
                  s.href === a.href || A === g || (f.test(A) && p.test(g));
                R(T, c, C);
              }
            }
          }
        }
        function y() {
          var b = n.scrollTop(),
            A = n.height();
          t.each(d, function (T) {
            if (!T.link.attr("hreflang")) {
              var x = T.link,
                C = T.sec,
                S = C.offset().top,
                M = C.outerHeight(),
                D = A * 0.5,
                G = C.is(":visible") && S + M - D >= b && S + D <= b + A;
              T.active !== G && ((T.active = G), R(x, c, G));
            }
          });
        }
        function R(b, A, T) {
          var x = b.hasClass(A);
          (T && x) || (!T && !x) || (T ? b.addClass(A) : b.removeClass(A));
        }
        return r;
      })
    );
  });
  var D_ = u((Jk, M_) => {
    "use strict";
    var Ti = We();
    Ti.define(
      "scroll",
      (M_.exports = function (e) {
        var t = {
            WF_CLICK_EMPTY: "click.wf-empty-link",
            WF_CLICK_SCROLL: "click.wf-scroll",
          },
          r = window.location,
          n = m() ? null : window.history,
          i = e(window),
          o = e(document),
          a = e(document.body),
          s =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (L) {
              window.setTimeout(L, 15);
            },
          c = Ti.env("editor") ? ".w-editor-body" : "body",
          f =
            "header, " +
            c +
            " > .header, " +
            c +
            " > .w-nav:not([data-no-scroll])",
          p = 'a[href="#"]',
          d = 'a[href*="#"]:not(.w-tab-link):not(' + p + ")",
          g = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
          E = document.createElement("style");
        E.appendChild(document.createTextNode(g));
        function m() {
          try {
            return !!window.frameElement;
          } catch {
            return !0;
          }
        }
        var y = /^#[a-zA-Z0-9][\w:.-]*$/;
        function R(L) {
          return y.test(L.hash) && L.host + L.pathname === r.host + r.pathname;
        }
        let b =
          typeof window.matchMedia == "function" &&
          window.matchMedia("(prefers-reduced-motion: reduce)");
        function A() {
          return (
            document.body.getAttribute("data-wf-scroll-motion") === "none" ||
            b.matches
          );
        }
        function T(L, _) {
          var N;
          switch (_) {
            case "add":
              (N = L.attr("tabindex")),
                N
                  ? L.attr("data-wf-tabindex-swap", N)
                  : L.attr("tabindex", "-1");
              break;
            case "remove":
              (N = L.attr("data-wf-tabindex-swap")),
                N
                  ? (L.attr("tabindex", N),
                    L.removeAttr("data-wf-tabindex-swap"))
                  : L.removeAttr("tabindex");
              break;
          }
          L.toggleClass("wf-force-outline-none", _ === "add");
        }
        function x(L) {
          var _ = L.currentTarget;
          if (
            !(
              Ti.env("design") ||
              (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(_.className))
            )
          ) {
            var N = R(_) ? _.hash : "";
            if (N !== "") {
              var F = e(N);
              F.length &&
                (L && (L.preventDefault(), L.stopPropagation()),
                C(N, L),
                window.setTimeout(
                  function () {
                    S(F, function () {
                      T(F, "add"),
                        F.get(0).focus({ preventScroll: !0 }),
                        T(F, "remove");
                    });
                  },
                  L ? 0 : 300
                ));
            }
          }
        }
        function C(L) {
          if (
            r.hash !== L &&
            n &&
            n.pushState &&
            !(Ti.env.chrome && r.protocol === "file:")
          ) {
            var _ = n.state && n.state.hash;
            _ !== L && n.pushState({ hash: L }, "", L);
          }
        }
        function S(L, _) {
          var N = i.scrollTop(),
            F = M(L);
          if (N !== F) {
            var q = D(L, N, F),
              j = Date.now(),
              B = function () {
                var J = Date.now() - j;
                window.scroll(0, G(N, F, J, q)),
                  J <= q ? s(B) : typeof _ == "function" && _();
              };
            s(B);
          }
        }
        function M(L) {
          var _ = e(f),
            N = _.css("position") === "fixed" ? _.outerHeight() : 0,
            F = L.offset().top - N;
          if (L.data("scroll") === "mid") {
            var q = i.height() - N,
              j = L.outerHeight();
            j < q && (F -= Math.round((q - j) / 2));
          }
          return F;
        }
        function D(L, _, N) {
          if (A()) return 0;
          var F = 1;
          return (
            a.add(L).each(function (q, j) {
              var B = parseFloat(j.getAttribute("data-scroll-time"));
              !isNaN(B) && B >= 0 && (F = B);
            }),
            (472.143 * Math.log(Math.abs(_ - N) + 125) - 2e3) * F
          );
        }
        function G(L, _, N, F) {
          return N > F ? _ : L + (_ - L) * X(N / F);
        }
        function X(L) {
          return L < 0.5
            ? 4 * L * L * L
            : (L - 1) * (2 * L - 2) * (2 * L - 2) + 1;
        }
        function W() {
          var { WF_CLICK_EMPTY: L, WF_CLICK_SCROLL: _ } = t;
          o.on(_, d, x),
            o.on(L, p, function (N) {
              N.preventDefault();
            }),
            document.head.insertBefore(E, document.head.firstChild);
        }
        return { ready: W };
      })
    );
  });
  var G_ = u((ez, F_) => {
    "use strict";
    var PX = We();
    PX.define(
      "touch",
      (F_.exports = function (e) {
        var t = {},
          r = window.getSelection;
        (e.event.special.tap = { bindType: "click", delegateType: "click" }),
          (t.init = function (o) {
            return (
              (o = typeof o == "string" ? e(o).get(0) : o), o ? new n(o) : null
            );
          });
        function n(o) {
          var a = !1,
            s = !1,
            c = Math.min(Math.round(window.innerWidth * 0.04), 40),
            f,
            p;
          o.addEventListener("touchstart", d, !1),
            o.addEventListener("touchmove", g, !1),
            o.addEventListener("touchend", E, !1),
            o.addEventListener("touchcancel", m, !1),
            o.addEventListener("mousedown", d, !1),
            o.addEventListener("mousemove", g, !1),
            o.addEventListener("mouseup", E, !1),
            o.addEventListener("mouseout", m, !1);
          function d(R) {
            var b = R.touches;
            (b && b.length > 1) ||
              ((a = !0),
              b ? ((s = !0), (f = b[0].clientX)) : (f = R.clientX),
              (p = f));
          }
          function g(R) {
            if (a) {
              if (s && R.type === "mousemove") {
                R.preventDefault(), R.stopPropagation();
                return;
              }
              var b = R.touches,
                A = b ? b[0].clientX : R.clientX,
                T = A - p;
              (p = A),
                Math.abs(T) > c &&
                  r &&
                  String(r()) === "" &&
                  (i("swipe", R, { direction: T > 0 ? "right" : "left" }), m());
            }
          }
          function E(R) {
            if (a && ((a = !1), s && R.type === "mouseup")) {
              R.preventDefault(), R.stopPropagation(), (s = !1);
              return;
            }
          }
          function m() {
            a = !1;
          }
          function y() {
            o.removeEventListener("touchstart", d, !1),
              o.removeEventListener("touchmove", g, !1),
              o.removeEventListener("touchend", E, !1),
              o.removeEventListener("touchcancel", m, !1),
              o.removeEventListener("mousedown", d, !1),
              o.removeEventListener("mousemove", g, !1),
              o.removeEventListener("mouseup", E, !1),
              o.removeEventListener("mouseout", m, !1),
              (o = null);
          }
          this.destroy = y;
        }
        function i(o, a, s) {
          var c = e.Event(o, { originalEvent: a });
          e(a.target).trigger(c, s);
        }
        return (t.instance = t.init(document)), t;
      })
    );
  });
  Ws();
  zs();
  $s();
  Qs();
  eu();
  su();
  L_();
  q_();
  D_();
  G_();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require("ix2").init({
  events: {
    "e-4": {
      id: "e-4",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-5",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".menu-link-wrapper",
        originalId:
          "65044b32e1c25ecb050ee4fb|7a5c644b-9ca7-68bb-11d9-df18965b0128",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".menu-link-wrapper",
          originalId:
            "65044b32e1c25ecb050ee4fb|7a5c644b-9ca7-68bb-11d9-df18965b0128",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1694524161770,
    },
    "e-5": {
      id: "e-5",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-4",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".menu-link-wrapper",
        originalId:
          "65044b32e1c25ecb050ee4fb|7a5c644b-9ca7-68bb-11d9-df18965b0128",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".menu-link-wrapper",
          originalId:
            "65044b32e1c25ecb050ee4fb|7a5c644b-9ca7-68bb-11d9-df18965b0128",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1694524161771,
    },
    "e-6": {
      id: "e-6",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-7",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65b3a539dcce4c90ad80ae57|558f92f2-78aa-8e01-e2e5-f2840b274e4d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b3a539dcce4c90ad80ae57|558f92f2-78aa-8e01-e2e5-f2840b274e4d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1704821474315,
    },
    "e-7": {
      id: "e-7",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-6",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65b3a539dcce4c90ad80ae57|558f92f2-78aa-8e01-e2e5-f2840b274e4d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b3a539dcce4c90ad80ae57|558f92f2-78aa-8e01-e2e5-f2840b274e4d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1704821474315,
    },
    "e-9": {
      id: "e-9",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-10",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65b3a539dcce4c90ad80ae57|b945cf11-9ed2-f84e-69c0-5a6333d75af3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b3a539dcce4c90ad80ae57|b945cf11-9ed2-f84e-69c0-5a6333d75af3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1704829299941,
    },
    "e-10": {
      id: "e-10",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-9",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65b3a539dcce4c90ad80ae57|b945cf11-9ed2-f84e-69c0-5a6333d75af3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b3a539dcce4c90ad80ae57|b945cf11-9ed2-f84e-69c0-5a6333d75af3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1704829299941,
    },
    "e-11": {
      id: "e-11",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-13", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65b3a539dcce4c90ad80ae57|347c3be9-0cae-261a-8d8c-453267b365e0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b3a539dcce4c90ad80ae57|347c3be9-0cae-261a-8d8c-453267b365e0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-13-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1704838746884,
    },
    "e-14": {
      id: "e-14",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-15" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".testimonial-card",
        originalId: "6152c4fd-fb79-b970-757c-319b3de29807",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".testimonial-card",
          originalId: "6152c4fd-fb79-b970-757c-319b3de29807",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1699362288634,
    },
    "e-16": {
      id: "e-16",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-11", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6152c4fd-fb79-b970-757c-319b3de297df",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6152c4fd-fb79-b970-757c-319b3de297df",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-11-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1704901281659,
    },
    "e-18": {
      id: "e-18",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-19",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "adfd576a-329f-715b-8fe9-3e0da6d781d0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "adfd576a-329f-715b-8fe9-3e0da6d781d0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1704905639618,
    },
    "e-19": {
      id: "e-19",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-18",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "adfd576a-329f-715b-8fe9-3e0da6d781d0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "adfd576a-329f-715b-8fe9-3e0da6d781d0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1704905639618,
    },
    "e-22": {
      id: "e-22",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-14",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-23",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65b3a539dcce4c90ad80ae57|f4278e2c-9e93-668e-7368-6afce8f6e88e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b3a539dcce4c90ad80ae57|f4278e2c-9e93-668e-7368-6afce8f6e88e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1704916405760,
    },
    "e-24": {
      id: "e-24",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-15", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium"],
      target: {
        id: "65b3a539dcce4c90ad80ae57|d26b498a-cf71-222d-2a78-6a6ace69d99c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b3a539dcce4c90ad80ae57|d26b498a-cf71-222d-2a78-6a6ace69d99c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-15-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1704916978661,
    },
    "e-30": {
      id: "e-30",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-17", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6152c4fd-fb79-b970-757c-319b3de297da",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6152c4fd-fb79-b970-757c-319b3de297da",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-17-p",
          smoothing: 80,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1704917852600,
    },
    "e-35": {
      id: "e-35",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-36",
        },
      },
      mediaQueries: ["main", "medium"],
      target: {
        id: "65b3a539dcce4c90ad80ae57|6ea8a91f-fa24-1d07-a187-fddc22b705b8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b3a539dcce4c90ad80ae57|6ea8a91f-fa24-1d07-a187-fddc22b705b8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705099433683,
    },
    "e-39": {
      id: "e-39",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-23",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-40",
        },
      },
      mediaQueries: ["small", "tiny"],
      target: {
        id: "65b3a539dcce4c90ad80ae57|6ea8a91f-fa24-1d07-a187-fddc22b705b8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b3a539dcce4c90ad80ae57|6ea8a91f-fa24-1d07-a187-fddc22b705b8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705166423344,
    },
    "e-41": {
      id: "e-41",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-24",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-42",
        },
      },
      mediaQueries: ["small", "tiny"],
      target: {
        id: "65b3a539dcce4c90ad80ae57|6ea8a91f-fa24-1d07-a187-fddc22b705bf",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b3a539dcce4c90ad80ae57|6ea8a91f-fa24-1d07-a187-fddc22b705bf",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705168737416,
    },
    "e-46": {
      id: "e-46",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-10", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65b3a539dcce4c90ad80ae57|7b85017d-2e26-9671-8165-1ce7b857b4d2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b3a539dcce4c90ad80ae57|7b85017d-2e26-9671-8165-1ce7b857b4d2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-10-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1705169929835,
    },
    "e-47": {
      id: "e-47",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-29", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65b3a539dcce4c90ad80ae57|7b85017d-2e26-9671-8165-1ce7b857b4d1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b3a539dcce4c90ad80ae57|7b85017d-2e26-9671-8165-1ce7b857b4d1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-29-p",
          smoothing: 80,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1705169929835,
    },
    "e-48": {
      id: "e-48",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-49" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65b3a539dcce4c90ad80ae57|7b85017d-2e26-9671-8165-1ce7b857b4e6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b3a539dcce4c90ad80ae57|7b85017d-2e26-9671-8165-1ce7b857b4e6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1705169929835,
    },
    "e-50": {
      id: "e-50",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-51" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65b3a539dcce4c90ad80ae57|7b85017d-2e26-9671-8165-1ce7b857b4fe",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b3a539dcce4c90ad80ae57|7b85017d-2e26-9671-8165-1ce7b857b4fe",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1705169929835,
    },
    "e-54": {
      id: "e-54",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-55",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65b3a539dcce4c90ad80ae59|c9edaffb-3ac3-95c1-462c-6949509c1998",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b3a539dcce4c90ad80ae59|c9edaffb-3ac3-95c1-462c-6949509c1998",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705173593800,
    },
    "e-55": {
      id: "e-55",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-54",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65b3a539dcce4c90ad80ae59|c9edaffb-3ac3-95c1-462c-6949509c1998",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b3a539dcce4c90ad80ae59|c9edaffb-3ac3-95c1-462c-6949509c1998",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705173593800,
    },
    "e-57": {
      id: "e-57",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-32", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "65b3a539dcce4c90ad80ae59|8cb5e4cb-aff6-63b0-b022-3d082f47427e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b3a539dcce4c90ad80ae59|8cb5e4cb-aff6-63b0-b022-3d082f47427e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-32-p",
          smoothing: 89,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1705176129056,
    },
    "e-58": {
      id: "e-58",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-33", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65b3a539dcce4c90ad80ae59",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b3a539dcce4c90ad80ae59",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-33-p",
          smoothing: 82,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1705256269268,
    },
    "e-68": {
      id: "e-68",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-69" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65b3a539dcce4c90ad80ae59|f66fa2c5-ee67-b1e9-cc58-5dd5245b6c9e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b3a539dcce4c90ad80ae59|f66fa2c5-ee67-b1e9-cc58-5dd5245b6c9e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1705259528827,
    },
    "e-72": {
      id: "e-72",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-73",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65b3a539dcce4c90ad80ae57|146abbe0-7c51-6b13-4632-380080663f81",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b3a539dcce4c90ad80ae57|146abbe0-7c51-6b13-4632-380080663f81",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705263863473,
    },
    "e-73": {
      id: "e-73",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-72",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65b3a539dcce4c90ad80ae57|146abbe0-7c51-6b13-4632-380080663f81",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b3a539dcce4c90ad80ae57|146abbe0-7c51-6b13-4632-380080663f81",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705263863473,
    },
    "e-74": {
      id: "e-74",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-75",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65b3a539dcce4c90ad80ae59|2189d321-7d8f-3874-7ed5-bd16dfdaed58",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b3a539dcce4c90ad80ae59|2189d321-7d8f-3874-7ed5-bd16dfdaed58",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705263897570,
    },
    "e-75": {
      id: "e-75",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-74",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65b3a539dcce4c90ad80ae59|2189d321-7d8f-3874-7ed5-bd16dfdaed58",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b3a539dcce4c90ad80ae59|2189d321-7d8f-3874-7ed5-bd16dfdaed58",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705263897570,
    },
    "e-76": {
      id: "e-76",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-77",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "f3ed19df-72b0-d435-084f-459ea2f48b75",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "f3ed19df-72b0-d435-084f-459ea2f48b75",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705263973388,
    },
    "e-77": {
      id: "e-77",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-76",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "f3ed19df-72b0-d435-084f-459ea2f48b75",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "f3ed19df-72b0-d435-084f-459ea2f48b75",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705263973389,
    },
    "e-78": {
      id: "e-78",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-12", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65b3a539dcce4c90ad80ae57|d0a21d95-3275-3a15-a53b-5a0d9a34cea0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b3a539dcce4c90ad80ae57|d0a21d95-3275-3a15-a53b-5a0d9a34cea0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-12-p",
          selectedAxis: "X_AXIS",
          basedOn: "ELEMENT",
          reverse: false,
          smoothing: 89,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-12-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "ELEMENT",
          reverse: false,
          smoothing: 89,
          restingState: 50,
        },
      ],
      createdOn: 1705264187179,
    },
    "e-79": {
      id: "e-79",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-19", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small"],
      target: {
        id: "65b3a539dcce4c90ad80ae57|d0a21d95-3275-3a15-a53b-5a0d9a34ce9e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b3a539dcce4c90ad80ae57|d0a21d95-3275-3a15-a53b-5a0d9a34ce9e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-19-p",
          smoothing: 89,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1705264187179,
    },
    "e-80": {
      id: "e-80",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-81",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65b3a539dcce4c90ad80ae57|d0a21d95-3275-3a15-a53b-5a0d9a34cea0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b3a539dcce4c90ad80ae57|d0a21d95-3275-3a15-a53b-5a0d9a34cea0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705264187179,
    },
    "e-81": {
      id: "e-81",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-80",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65b3a539dcce4c90ad80ae57|d0a21d95-3275-3a15-a53b-5a0d9a34cea0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b3a539dcce4c90ad80ae57|d0a21d95-3275-3a15-a53b-5a0d9a34cea0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705264187179,
    },
    "e-82": {
      id: "e-82",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-31", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["tiny"],
      target: {
        id: "65b3a539dcce4c90ad80ae57|d0a21d95-3275-3a15-a53b-5a0d9a34ce9e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b3a539dcce4c90ad80ae57|d0a21d95-3275-3a15-a53b-5a0d9a34ce9e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-31-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1705264187179,
    },
    "e-83": {
      id: "e-83",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-84" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65b3a539dcce4c90ad80ae59|e2b2fc5e-cf5b-d899-777c-884bfc63356d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b3a539dcce4c90ad80ae59|e2b2fc5e-cf5b-d899-777c-884bfc63356d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1705265546596,
    },
    "e-85": {
      id: "e-85",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-86",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65b3a539dcce4c90ad80ae5a|2224c47a-6cdf-90ad-0c16-cbf86599d2f1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b3a539dcce4c90ad80ae5a|2224c47a-6cdf-90ad-0c16-cbf86599d2f1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705266681714,
    },
    "e-86": {
      id: "e-86",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-85",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65b3a539dcce4c90ad80ae5a|2224c47a-6cdf-90ad-0c16-cbf86599d2f1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b3a539dcce4c90ad80ae5a|2224c47a-6cdf-90ad-0c16-cbf86599d2f1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705266681714,
    },
    "e-87": {
      id: "e-87",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-88",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65b3a539dcce4c90ad80ae58|2c0db6b7-eb58-87d6-8a88-e81f4205acdc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b3a539dcce4c90ad80ae58|2c0db6b7-eb58-87d6-8a88-e81f4205acdc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705266817239,
    },
    "e-88": {
      id: "e-88",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-87",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65b3a539dcce4c90ad80ae58|2c0db6b7-eb58-87d6-8a88-e81f4205acdc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b3a539dcce4c90ad80ae58|2c0db6b7-eb58-87d6-8a88-e81f4205acdc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705266817239,
    },
    "e-89": {
      id: "e-89",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-90",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65b3a539dcce4c90ad80ae5c|da1c72aa-3416-8f74-24a2-bf06c6a19d4c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b3a539dcce4c90ad80ae5c|da1c72aa-3416-8f74-24a2-bf06c6a19d4c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705266824016,
    },
    "e-90": {
      id: "e-90",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-89",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65b3a539dcce4c90ad80ae5c|da1c72aa-3416-8f74-24a2-bf06c6a19d4c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b3a539dcce4c90ad80ae5c|da1c72aa-3416-8f74-24a2-bf06c6a19d4c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705266824016,
    },
    "e-91": {
      id: "e-91",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-34",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-92",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65b3a539dcce4c90ad80ae59|5ec7b548-bdcf-d4a0-956f-b8e1596c3876",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b3a539dcce4c90ad80ae59|5ec7b548-bdcf-d4a0-956f-b8e1596c3876",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705270632156,
    },
    "e-92": {
      id: "e-92",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-35",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-91",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65b3a539dcce4c90ad80ae59|5ec7b548-bdcf-d4a0-956f-b8e1596c3876",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b3a539dcce4c90ad80ae59|5ec7b548-bdcf-d4a0-956f-b8e1596c3876",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705270632157,
    },
    "e-93": {
      id: "e-93",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-18", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65b3a539dcce4c90ad80ae57|7b85017d-2e26-9671-8165-1ce7b857b4fe",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b3a539dcce4c90ad80ae57|7b85017d-2e26-9671-8165-1ce7b857b4fe",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-18-p",
          selectedAxis: "X_AXIS",
          basedOn: "ELEMENT",
          reverse: false,
          smoothing: 89,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-18-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "ELEMENT",
          reverse: false,
          smoothing: 89,
          restingState: 50,
        },
      ],
      createdOn: 1705314887380,
    },
    "e-94": {
      id: "e-94",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-18", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "65b3a539dcce4c90ad80ae57|7b85017d-2e26-9671-8165-1ce7b857b4e6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b3a539dcce4c90ad80ae57|7b85017d-2e26-9671-8165-1ce7b857b4e6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-18-p",
          selectedAxis: "X_AXIS",
          basedOn: "ELEMENT",
          reverse: false,
          smoothing: 89,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-18-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "ELEMENT",
          reverse: false,
          smoothing: 89,
          restingState: 50,
        },
      ],
      createdOn: 1705314902540,
    },
  },
  actionLists: {
    "a-4": {
      id: "a-4",
      title: "Menu Link",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-4-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".menu-link-wrapper",
                  selectorGuids: ["2ddb2524-6254-9485-c45f-58cfcb36313d"],
                },
                xValue: -16,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-4-n-2",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".menu-link-text",
                  selectorGuids: ["2ddb2524-6254-9485-c45f-58cfcb363132"],
                },
                globalSwatchId: "",
                rValue: 24,
                bValue: 217,
                gValue: 206,
                aValue: 1,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-4-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 700,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".menu-link-wrapper",
                  selectorGuids: ["2ddb2524-6254-9485-c45f-58cfcb36313d"],
                },
                xValue: 0,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-4-n-4",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 700,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".menu-link-text",
                  selectorGuids: ["2ddb2524-6254-9485-c45f-58cfcb363132"],
                },
                globalSwatchId: "",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1694524164212,
    },
    "a-5": {
      id: "a-5",
      title: "Menu Link Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-5-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 700,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".menu-link-wrapper",
                  selectorGuids: ["2ddb2524-6254-9485-c45f-58cfcb36313d"],
                },
                xValue: -16,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-5-n-2",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 700,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".menu-link-text",
                  selectorGuids: ["2ddb2524-6254-9485-c45f-58cfcb363132"],
                },
                globalSwatchId: "",
                rValue: 24,
                bValue: 217,
                gValue: 206,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1694524164212,
    },
    "a-2": {
      id: "a-2",
      title: "Menu Open",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-2-n-15",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".menu-text---hide",
                  selectorGuids: ["8a35b3ec-854c-1605-3812-1edc8f5ad5d0"],
                },
                yValue: 101,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-2-n-23",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".line-btn-down",
                  selectorGuids: ["2ddb2524-6254-9485-c45f-58cfcb363131"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-2-n-13",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".line-btn-down",
                  selectorGuids: ["2ddb2524-6254-9485-c45f-58cfcb363131"],
                },
                widthValue: 41,
                widthUnit: "px",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-2-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".menu",
                  selectorGuids: ["2ddb2524-6254-9485-c45f-58cfcb363140"],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
            {
              id: "a-2-n-4",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".line-btn-down",
                  selectorGuids: ["2ddb2524-6254-9485-c45f-58cfcb363131"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-2-n-5",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".line-btn",
                  selectorGuids: ["2ddb2524-6254-9485-c45f-58cfcb36313c"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-2-n-6",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".menu",
                  selectorGuids: ["2ddb2524-6254-9485-c45f-58cfcb363140"],
                },
                value: "none",
              },
            },
            {
              id: "a-2-n-20",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".line-btn",
                  selectorGuids: ["2ddb2524-6254-9485-c45f-58cfcb36313c"],
                },
                xValue: 0,
                yValue: 0,
                xUnit: "px",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-2-n-22",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".menu-text",
                  selectorGuids: ["2ddb2524-6254-9485-c45f-58cfcb36313f"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-2-n-7",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".menu",
                  selectorGuids: ["2ddb2524-6254-9485-c45f-58cfcb363140"],
                },
                value: "flex",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-2-n-18",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".menu-text---hide",
                  selectorGuids: ["8a35b3ec-854c-1605-3812-1edc8f5ad5d0"],
                },
                yValue: 5,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-2-n-17",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".menu-text",
                  selectorGuids: ["2ddb2524-6254-9485-c45f-58cfcb36313f"],
                },
                yValue: -101,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-2-n-12",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 600,
                target: {
                  selector: ".menu",
                  selectorGuids: ["2ddb2524-6254-9485-c45f-58cfcb363140"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-2-n-9",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 600,
                target: {
                  selector: ".line-btn",
                  selectorGuids: ["2ddb2524-6254-9485-c45f-58cfcb36313c"],
                },
                zValue: 45,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-2-n-19",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".line-btn",
                  selectorGuids: ["2ddb2524-6254-9485-c45f-58cfcb36313c"],
                },
                xValue: 0,
                yValue: 5,
                xUnit: "px",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-2-n-24",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".line-btn-down",
                  selectorGuids: ["2ddb2524-6254-9485-c45f-58cfcb363131"],
                },
                yValue: -3,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-2-n-21",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".line-btn-down",
                  selectorGuids: ["2ddb2524-6254-9485-c45f-58cfcb363131"],
                },
                widthValue: 30,
                widthUnit: "px",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-2-n-10",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".line-btn-down",
                  selectorGuids: ["2ddb2524-6254-9485-c45f-58cfcb363131"],
                },
                zValue: -45,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1694524589668,
    },
    "a-6": {
      id: "a-6",
      title: "Menu Close",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-6-n-10",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".menu-text---hide",
                  selectorGuids: ["8a35b3ec-854c-1605-3812-1edc8f5ad5d0"],
                },
                yValue: 101,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-6-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".menu-text",
                  selectorGuids: ["2ddb2524-6254-9485-c45f-58cfcb36313f"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-6-n-12",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 600,
                target: {
                  selector: ".menu",
                  selectorGuids: ["2ddb2524-6254-9485-c45f-58cfcb363140"],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
            {
              id: "a-6-n-13",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 600,
                target: {
                  selector: ".line-btn",
                  selectorGuids: ["2ddb2524-6254-9485-c45f-58cfcb36313c"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-6-n-14",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".line-btn-down",
                  selectorGuids: ["2ddb2524-6254-9485-c45f-58cfcb363131"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-6-n-15",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".line-btn-down",
                  selectorGuids: ["2ddb2524-6254-9485-c45f-58cfcb363131"],
                },
                widthValue: 41,
                widthUnit: "px",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-6-n-17",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".line-btn-down",
                  selectorGuids: ["2ddb2524-6254-9485-c45f-58cfcb363131"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-6-n-16",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".line-btn",
                  selectorGuids: ["2ddb2524-6254-9485-c45f-58cfcb36313c"],
                },
                xValue: 0,
                yValue: 0,
                xUnit: "px",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-6-n-9",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".menu",
                  selectorGuids: ["2ddb2524-6254-9485-c45f-58cfcb363140"],
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1694524589668,
    },
    "a-7": {
      id: "a-7",
      title: "Button Open",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-7-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-fill",
                  selectorGuids: ["d871dfa9-e19a-da24-ba3c-33ca0b5e8499"],
                },
                yValue: 101,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-7-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-text-absolute",
                  selectorGuids: ["ae3fd2b8-d56e-8b86-9f10-24fed21b6c80"],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-7-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-text",
                  selectorGuids: ["13dabaf8-8c0d-b8b4-99be-602e0eaec4aa"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-7-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 900,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-fill",
                  selectorGuids: ["d871dfa9-e19a-da24-ba3c-33ca0b5e8499"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-7-n-6",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 700,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-text",
                  selectorGuids: ["13dabaf8-8c0d-b8b4-99be-602e0eaec4aa"],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-7-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 700,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-text-absolute",
                  selectorGuids: ["ae3fd2b8-d56e-8b86-9f10-24fed21b6c80"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1704829305756,
    },
    "a-8": {
      id: "a-8",
      title: "Button Close",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-8-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 900,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-fill",
                  selectorGuids: ["d871dfa9-e19a-da24-ba3c-33ca0b5e8499"],
                },
                yValue: 101,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-8-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 700,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-text",
                  selectorGuids: ["13dabaf8-8c0d-b8b4-99be-602e0eaec4aa"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-8-n-6",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 700,
                target: {
                  selector: ".button-text-absolute",
                  selectorGuids: ["ae3fd2b8-d56e-8b86-9f10-24fed21b6c80"],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1704829305756,
    },
    "a-13": {
      id: "a-13",
      title: "[H3 Heading] - Fill Text On Scroll",
      continuousParameterGroups: [
        {
          id: "a-13-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 12,
              actionItems: [
                {
                  id: "a-13-n",
                  actionTypeId: "STYLE_SIZE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".h3-heading._1st",
                      selectorGuids: [
                        "35759879-3188-36e8-5c9d-562462074095",
                        "90f0646e-bf22-82bd-4ff9-42c644bceeff",
                      ],
                    },
                    widthValue: 0,
                    widthUnit: "%",
                    heightUnit: "PX",
                    locked: false,
                  },
                },
              ],
            },
            {
              keyframe: 30,
              actionItems: [
                {
                  id: "a-13-n-2",
                  actionTypeId: "STYLE_SIZE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".h3-heading._1st",
                      selectorGuids: [
                        "35759879-3188-36e8-5c9d-562462074095",
                        "90f0646e-bf22-82bd-4ff9-42c644bceeff",
                      ],
                    },
                    widthValue: 100,
                    widthUnit: "%",
                    heightUnit: "PX",
                    locked: false,
                  },
                },
                {
                  id: "a-13-n-3",
                  actionTypeId: "STYLE_SIZE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".h3-heading._2nd",
                      selectorGuids: [
                        "35759879-3188-36e8-5c9d-562462074095",
                        "73f7207a-bac0-baec-13a1-2f524c12e661",
                      ],
                    },
                    widthValue: 0,
                    widthUnit: "%",
                    heightUnit: "PX",
                    locked: false,
                  },
                },
              ],
            },
            {
              keyframe: 50,
              actionItems: [
                {
                  id: "a-13-n-4",
                  actionTypeId: "STYLE_SIZE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".h3-heading._2nd",
                      selectorGuids: [
                        "35759879-3188-36e8-5c9d-562462074095",
                        "73f7207a-bac0-baec-13a1-2f524c12e661",
                      ],
                    },
                    widthValue: 100,
                    widthUnit: "%",
                    heightUnit: "PX",
                    locked: false,
                  },
                },
                {
                  id: "a-13-n-5",
                  actionTypeId: "STYLE_SIZE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".h3-heading._3rd",
                      selectorGuids: [
                        "35759879-3188-36e8-5c9d-562462074095",
                        "2ece0f3e-594a-c013-2e20-b61c7733c11f",
                      ],
                    },
                    widthValue: 0,
                    widthUnit: "%",
                    heightUnit: "PX",
                    locked: false,
                  },
                },
              ],
            },
            {
              keyframe: 76,
              actionItems: [
                {
                  id: "a-13-n-6",
                  actionTypeId: "STYLE_SIZE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".h3-heading._3rd",
                      selectorGuids: [
                        "35759879-3188-36e8-5c9d-562462074095",
                        "2ece0f3e-594a-c013-2e20-b61c7733c11f",
                      ],
                    },
                    widthValue: 100,
                    widthUnit: "%",
                    heightUnit: "PX",
                    locked: false,
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1701777144057,
    },    
  
  "a-11": {
    "id": "a-11",
    "title": "Testimonials Profile Animation",
    "continuousParameterGroups": [
      {
        "id": "a-11-p",
        "type": "SCROLL_PROGRESS",
        "parameterLabel": "Scroll",
        "continuousActionGroups": [
          {
            "keyframe": 39,
            "actionItems": [
              {
                "id": "a-11-n-5",
                "actionTypeId": "TRANSFORM_MOVE",
                "config": {
                  "delay": 0,
                  "easing": "inQuad",
                  "duration": 500,
                  "target": {
                    "useEventTarget": "CHILDREN",
                    "selector": ".testimonial-indicator",
                    "selectorGuids": [
                      "171f86ed-2508-a2fe-8b9f-c60c501aa117"
                    ]
                  },
                  "yValue": 0,
                  "xUnit": "PX",
                  "yUnit": "px",
                  "zUnit": "PX"
                }
              },
              {
                "id": "a-11-n",
                "actionTypeId": "STYLE_BORDER",
                "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 500,
                  "target": {
                    "useEventTarget": "CHILDREN",
                    "selector": ".testimonial-profile._1",
                    "selectorGuids": [
                      "0f70881c-acd7-20c0-3c89-60c1bf971423",
                      "0f70881c-acd7-20c0-3c89-60c1bf971430"
                    ]
                  },
                  "globalSwatchId": "",
                  "rValue": 0,
                  "bValue": 0,
                  "gValue": 255,
                  "aValue": 1
                }
              },
              {
                "id": "a-11-n-10",
                "actionTypeId": "STYLE_BACKGROUND_COLOR",
                "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 500,
                  "target": {
                    "useEventTarget": "CHILDREN",
                    "selector": ".profile-gradient._1",
                    "selectorGuids": [
                      "889c36cb-5571-a783-a496-11dcd7805356",
                      "cfdb78bc-ffd2-2588-53fa-b942f6201762"
                    ]
                  },
                  "globalSwatchId": "",
                  "rValue": 0,
                  "bValue": 0,
                  "gValue": 0,
                  "aValue": 0
                }
              },
              {
                "id": "a-11-n-3",
                "actionTypeId": "STYLE_BORDER",
                "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 500,
                  "target": {
                    "useEventTarget": "CHILDREN",
                    "selector": ".testimonial-profile._2",
                    "selectorGuids": [
                      "0f70881c-acd7-20c0-3c89-60c1bf971423",
                      "0f70881c-acd7-20c0-3c89-60c1bf97142c"
                    ]
                  },
                  "globalSwatchId": "",
                  "rValue": 0,
                  "bValue": 0,
                  "gValue": 0,
                  "aValue": 1
                }
              },
              {
                "id": "a-11-n-11",
                "actionTypeId": "STYLE_BACKGROUND_COLOR",
                "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 500,
                  "target": {
                    "useEventTarget": "CHILDREN",
                    "selector": ".profile-gradient._2",
                    "selectorGuids": [
                      "889c36cb-5571-a783-a496-11dcd7805356",
                      "5ad3fa18-111a-0394-1526-49424a0b4473"
                    ]
                  },
                  "globalSwatchId": "",
                  "rValue": 0,
                  "bValue": 0,
                  "gValue": 0,
                  "aValue": 0.7
                }
              }
            ]
          },
          {
            "keyframe": 41,
            "actionItems": [
              {
                "id": "a-11-n-9",
                "actionTypeId": "TRANSFORM_MOVE",
                "config": {
                  "delay": 0,
                  "easing": "inQuad",
                  "duration": 500,
                  "target": {
                    "useEventTarget": "CHILDREN",
                    "selector": ".testimonial-indicator",
                    "selectorGuids": [
                      "171f86ed-2508-a2fe-8b9f-c60c501aa117"
                    ]
                  },
                  "yValue": 120,
                  "xUnit": "PX",
                  "yUnit": "px",
                  "zUnit": "PX"
                }
              },
              {
                "id": "a-11-n-6",
                "actionTypeId": "STYLE_BORDER",
                "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 500,
                  "target": {
                    "useEventTarget": "CHILDREN",
                    "selector": ".testimonial-profile._1",
                    "selectorGuids": [
                      "0f70881c-acd7-20c0-3c89-60c1bf971423",
                      "0f70881c-acd7-20c0-3c89-60c1bf971430"
                    ]
                  },
                  "globalSwatchId": "",
                  "rValue": 0,
                  "bValue": 0,
                  "gValue": 0,
                  "aValue": 1
                }
              },
              {
                "id": "a-11-n-13",
                "actionTypeId": "STYLE_BACKGROUND_COLOR",
                "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 500,
                  "target": {
                    "useEventTarget": "CHILDREN",
                    "selector": ".profile-gradient._1",
                    "selectorGuids": [
                      "889c36cb-5571-a783-a496-11dcd7805356",
                      "cfdb78bc-ffd2-2588-53fa-b942f6201762"
                    ]
                  },
                  "globalSwatchId": "",
                  "rValue": 0,
                  "bValue": 0,
                  "gValue": 0,
                  "aValue": 0.7
                }
              },
              {
                "id": "a-11-n-12",
                "actionTypeId": "STYLE_BACKGROUND_COLOR",
                "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 500,
                  "target": {
                    "useEventTarget": "CHILDREN",
                    "selector": ".profile-gradient._2",
                    "selectorGuids": [
                      "889c36cb-5571-a783-a496-11dcd7805356",
                      "5ad3fa18-111a-0394-1526-49424a0b4473"
                    ]
                  },
                  "globalSwatchId": "",
                  "rValue": 0,
                  "bValue": 0,
                  "gValue": 0,
                  "aValue": 0
                }
              },
              {
                "id": "a-11-n-7",
                "actionTypeId": "STYLE_BORDER",
                "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 500,
                  "target": {
                    "useEventTarget": "CHILDREN",
                    "selector": ".testimonial-profile._2",
                    "selectorGuids": [
                      "0f70881c-acd7-20c0-3c89-60c1bf971423",
                      "0f70881c-acd7-20c0-3c89-60c1bf97142c"
                    ]
                  },
                  "globalSwatchId": "",
                  "rValue": 0,
                  "bValue": 0,
                  "gValue": 255,
                  "aValue": 1
                }
              }
            ]
          },
          {
            "keyframe": 57,
            "actionItems": [
              {
                "id": "a-11-n-20",
                "actionTypeId": "TRANSFORM_MOVE",
                "config": {
                  "delay": 0,
                  "easing": "inQuad",
                  "duration": 500,
                  "target": {
                    "useEventTarget": "CHILDREN",
                    "selector": ".testimonial-indicator",
                    "selectorGuids": [
                      "171f86ed-2508-a2fe-8b9f-c60c501aa117"
                    ]
                  },
                  "yValue": 235,
                  "xUnit": "PX",
                  "yUnit": "px",
                  "zUnit": "PX"
                }
              },
              {
                "id": "a-11-n-17",
                "actionTypeId": "STYLE_BACKGROUND_COLOR",
                "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 500,
                  "target": {
                    "useEventTarget": "CHILDREN",
                    "selector": ".profile-gradient._2",
                    "selectorGuids": [
                      "889c36cb-5571-a783-a496-11dcd7805356",
                      "5ad3fa18-111a-0394-1526-49424a0b4473"
                    ]
                  },
                  "globalSwatchId": "",
                  "rValue": 0,
                  "bValue": 0,
                  "gValue": 0,
                  "aValue": 0
                }
              },
              {
                "id": "a-11-n-18",
                "actionTypeId": "STYLE_BORDER",
                "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 500,
                  "target": {
                    "useEventTarget": "CHILDREN",
                    "selector": ".testimonial-profile._2",
                    "selectorGuids": [
                      "0f70881c-acd7-20c0-3c89-60c1bf971423",
                      "0f70881c-acd7-20c0-3c89-60c1bf97142c"
                    ]
                  },
                  "globalSwatchId": "",
                  "rValue": 0,
                  "bValue": 0,
                  "gValue": 255,
                  "aValue": 1
                }
              },
              {
                "id": "a-11-n-14",
                "actionTypeId": "STYLE_BORDER",
                "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 500,
                  "target": {
                    "useEventTarget": "CHILDREN",
                    "selector": ".testimonial-profile._3",
                    "selectorGuids": [
                      "0f70881c-acd7-20c0-3c89-60c1bf971423",
                      "0f70881c-acd7-20c0-3c89-60c1bf97142a"
                    ]
                  },
                  "globalSwatchId": "",
                  "rValue": 0,
                  "bValue": 0,
                  "gValue": 0,
                  "aValue": 1
                }
              },
              {
                "id": "a-11-n-15",
                "actionTypeId": "STYLE_BACKGROUND_COLOR",
                "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 500,
                  "target": {
                    "useEventTarget": "CHILDREN",
                    "selector": ".profile-gradient._3",
                    "selectorGuids": [
                      "889c36cb-5571-a783-a496-11dcd7805356",
                      "ed25dea2-ac2b-3efe-c16a-9fd975328d33"
                    ]
                  },
                  "globalSwatchId": "",
                  "rValue": 0,
                  "bValue": 0,
                  "gValue": 0,
                  "aValue": 0.7
                }
              }
            ]
          },
          {
            "keyframe": 60,
            "actionItems": [
              {
                "id": "a-11-n-19",
                "actionTypeId": "TRANSFORM_MOVE",
                "config": {
                  "delay": 0,
                  "easing": "inQuad",
                  "duration": 500,
                  "target": {
                    "useEventTarget": "CHILDREN",
                    "selector": ".testimonial-indicator",
                    "selectorGuids": [
                      "171f86ed-2508-a2fe-8b9f-c60c501aa117"
                    ]
                  },
                  "yValue": 235,
                  "xUnit": "PX",
                  "yUnit": "px",
                  "zUnit": "PX"
                }
              },
              {
                "id": "a-11-n-21",
                "actionTypeId": "STYLE_BACKGROUND_COLOR",
                "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 500,
                  "target": {
                    "useEventTarget": "CHILDREN",
                    "selector": ".profile-gradient._2",
                    "selectorGuids": [
                      "889c36cb-5571-a783-a496-11dcd7805356",
                      "5ad3fa18-111a-0394-1526-49424a0b4473"
                    ]
                  },
                  "globalSwatchId": "",
                  "rValue": 0,
                  "bValue": 0,
                  "gValue": 0,
                  "aValue": 0.7
                }
              },
              {
                "id": "a-11-n-22",
                "actionTypeId": "STYLE_BORDER",
                "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 500,
                  "target": {
                    "useEventTarget": "CHILDREN",
                    "selector": ".testimonial-profile._2",
                    "selectorGuids": [
                      "0f70881c-acd7-20c0-3c89-60c1bf971423",
                      "0f70881c-acd7-20c0-3c89-60c1bf97142c"
                    ]
                  },
                  "globalSwatchId": "",
                  "rValue": 0,
                  "bValue": 0,
                  "gValue": 0,
                  "aValue": 1
                }
              },
              {
                "id": "a-11-n-8",
                "actionTypeId": "STYLE_BORDER",
                "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 500,
                  "target": {
                    "useEventTarget": "CHILDREN",
                    "selector": ".testimonial-profile._3",
                    "selectorGuids": [
                      "0f70881c-acd7-20c0-3c89-60c1bf971423",
                      "0f70881c-acd7-20c0-3c89-60c1bf97142a"
                    ]
                  },
                  "globalSwatchId": "",
                  "rValue": 0,
                  "bValue": 0,
                  "gValue": 255,
                  "aValue": 1
                }
              },
              {
                "id": "a-11-n-16",
                "actionTypeId": "STYLE_BACKGROUND_COLOR",
                "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 500,
                  "target": {
                    "useEventTarget": "CHILDREN",
                    "selector": ".profile-gradient._3",
                    "selectorGuids": [
                      "889c36cb-5571-a783-a496-11dcd7805356",
                      "ed25dea2-ac2b-3efe-c16a-9fd975328d33"
                    ]
                  },
                  "globalSwatchId": "",
                  "rValue": 0,
                  "bValue": 0,
                  "gValue": 0,
                  "aValue": 0
                }
              },
              {
                "id": "a-11-n-25",
                "actionTypeId": "STYLE_BORDER",
                "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 500,
                  "target": {
                    "useEventTarget": "CHILDREN",
                    "selector": ".testimonial-profile._4",
                    "selectorGuids": [
                      "0f70881c-acd7-20c0-3c89-60c1bf971423",
                      "0f70881c-acd7-20c0-3c89-60c1bf97142a"
                    ]
                  },
                  "globalSwatchId": "",
                  "rValue": 0,
                  "bValue": 0,
                  "gValue": 0,
                  "aValue": 1
                }
              },
              {
                "id": "a-11-n-26",
                "actionTypeId": "STYLE_BACKGROUND_COLOR",
                "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 500,
                  "target": {
                    "useEventTarget": "CHILDREN",
                    "selector": ".profile-gradient._4",
                    "selectorGuids": [
                      "889c36cb-5571-a783-a496-11dcd7805356",
                      "ed25dea2-ac2b-3efe-c16a-9fd975328d33"
                    ]
                  },
                  "globalSwatchId": "",
                  "rValue": 0,
                  "bValue": 0,
                  "gValue": 0,
                  "aValue": 0.7
                }
              }
            ]
          },
          {
            "keyframe": 85,
            "actionItems": [
              {
                "id": "a-11-n-27",
                "actionTypeId": "TRANSFORM_MOVE",
                "config": {
                  "delay": 0,
                  "easing": "inQuad",
                  "duration": 500,
                  "target": {
                    "useEventTarget": "CHILDREN",
                    "selector": ".testimonial-indicator",
                    "selectorGuids": [
                      "171f86ed-2508-a2fe-8b9f-c60c501aa117"
                    ]
                  },
                  "yValue": 340,
                  "xUnit": "PX",
                  "yUnit": "px",
                  "zUnit": "PX"
                }
              },
              {
                "id": "a-11-n-28",
                "actionTypeId": "STYLE_BORDER",
                "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 500,
                  "target": {
                    "useEventTarget": "CHILDREN",
                    "selector": ".testimonial-profile._3",
                    "selectorGuids": [
                      "0f70881c-acd7-20c0-3c89-60c1bf971423",
                      "0f70881c-acd7-20c0-3c89-60c1bf97142a"
                    ]
                  },
                  "globalSwatchId": "",
                  "rValue": 0,
                  "bValue": 0,
                  "gValue": 0,
                  "aValue": 1
                }
              },
              {
                "id": "a-11-n-29",
                "actionTypeId": "STYLE_BACKGROUND_COLOR",
                "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 500,
                  "target": {
                    "useEventTarget": "CHILDREN",
                    "selector": ".profile-gradient._3",
                    "selectorGuids": [
                      "889c36cb-5571-a783-a496-11dcd7805356",
                      "ed25dea2-ac2b-3efe-c16a-9fd975328d33"
                    ]
                  },
                  "globalSwatchId": "",
                  "rValue": 0,
                  "bValue": 0,
                  "gValue": 0,
                  "aValue": 0
                }
              },
              {
                "id": "a-11-n-30",
                "actionTypeId": "STYLE_BORDER",
                "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 500,
                  "target": {
                    "useEventTarget": "CHILDREN",
                    "selector": ".testimonial-profile._4",
                    "selectorGuids": [
                      "0f70881c-acd7-20c0-3c89-60c1bf971423",
                      "0f70881c-acd7-20c0-3c89-60c1bf97142a"
                    ]
                  },
                  "globalSwatchId": "",
                  "rValue": 0,
                  "bValue": 0,
                  "gValue": 255,
                  "aValue": 1
                }
              },
              {
                "id": "a-11-n-31",
                "actionTypeId": "STYLE_BACKGROUND_COLOR",
                "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 500,
                  "target": {
                    "useEventTarget": "CHILDREN",
                    "selector": ".profile-gradient._4",
                    "selectorGuids": [
                      "889c36cb-5571-a783-a496-11dcd7805356",
                      "ed25dea2-ac2b-3efe-c16a-9fd975328d33"
                    ]
                  },
                  "globalSwatchId": "",
                  "rValue": 0,
                  "bValue": 0,
                  "gValue": 0,
                  "aValue": 0
                }
              }
            ]
          }
        ]
      }
    ],
    "createdOn": 1704901387418
  },

    "a-14": {
      id: "a-14",
      title: "Hero Text Marquee",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-14-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".h1-heading.marquee",
                  selectorGuids: [
                    "f5057964-2f48-1a12-d4c8-196a9b72271d",
                    "6defe99b-b069-994e-531e-0fb68870c0c4",
                  ],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-14-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 20000,
                target: {
                  selector: ".h1-heading.marquee",
                  selectorGuids: [
                    "f5057964-2f48-1a12-d4c8-196a9b72271d",
                    "6defe99b-b069-994e-531e-0fb68870c0c4",
                  ],
                },
                xValue: -102,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-14-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".h1-heading.marquee",
                  selectorGuids: [
                    "f5057964-2f48-1a12-d4c8-196a9b72271d",
                    "6defe99b-b069-994e-531e-0fb68870c0c4",
                  ],
                },
                xValue: 0,
                yValue: null,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1704916415452,
    },
    "a-15": {
      id: "a-15",
      title: "3D Logo Play on Scroll",
      continuousParameterGroups: [
        {
          id: "a-15-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 18,
              actionItems: [
                {
                  id: "a-15-n",
                  actionTypeId: "PLUGIN_SPLINE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      pluginElement: "6ea8a91f-fa24-1d07-a187-fddc22b705bf",
                      objectId: "b269b451-75cc-4abb-a26b-421b518cca89",
                      selector: "._3d-logo",
                      selectorGuids: ["dedd4a90-2a3f-d9f1-a05e-55ccee4df456"],
                    },
                    value: { rotationX: 1.7, rotationY: 0, rotationZ: 0 },
                  },
                },
              ],
            },
            {
              keyframe: 35,
              actionItems: [
                {
                  id: "a-15-n-2",
                  actionTypeId: "PLUGIN_SPLINE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      pluginElement: "6ea8a91f-fa24-1d07-a187-fddc22b705bf",
                      objectId: "b269b451-75cc-4abb-a26b-421b518cca89",
                      selector: "._3d-logo",
                      selectorGuids: ["dedd4a90-2a3f-d9f1-a05e-55ccee4df456"],
                    },
                    value: { rotationX: 3.4, rotationY: -0.8, rotationZ: 0 },
                  },
                },
              ],
            },
            {
              keyframe: 50,
              actionItems: [
                {
                  id: "a-15-n-3",
                  actionTypeId: "PLUGIN_SPLINE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      pluginElement: "6ea8a91f-fa24-1d07-a187-fddc22b705bf",
                      objectId: "b269b451-75cc-4abb-a26b-421b518cca89",
                      selector: "._3d-logo",
                      selectorGuids: ["dedd4a90-2a3f-d9f1-a05e-55ccee4df456"],
                    },
                    value: { rotationX: 2.7, rotationY: -3, rotationZ: -0.8 },
                  },
                },
              ],
            },
            {
              keyframe: 79,
              actionItems: [
                {
                  id: "a-15-n-5",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".button",
                      selectorGuids: ["d67ca484-8235-e725-5d52-fdfea9a47355"],
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 81,
              actionItems: [
                {
                  id: "a-15-n-6",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".button",
                      selectorGuids: ["d67ca484-8235-e725-5d52-fdfea9a47355"],
                    },
                    value: 0,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 85,
              actionItems: [
                {
                  id: "a-15-n-4",
                  actionTypeId: "PLUGIN_SPLINE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      pluginElement: "6ea8a91f-fa24-1d07-a187-fddc22b705bf",
                      objectId: "b269b451-75cc-4abb-a26b-421b518cca89",
                      selector: "._3d-logo",
                      selectorGuids: ["dedd4a90-2a3f-d9f1-a05e-55ccee4df456"],
                    },
                    value: { rotationX: 6.3, rotationY: 0, rotationZ: 0.1 },
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1704916991783,
    },
    "a-17": {
      id: "a-17",
      title: "Testimonial Heading Image Move",
      continuousParameterGroups: [
        {
          id: "a-17-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 18,
              actionItems: [
                {
                  id: "a-17-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".absolute-image-3",
                      selectorGuids: ["cbfc362b-940c-2cf1-5f0b-80f3e1e21bdb"],
                    },
                    xValue: 40,
                    yValue: -20,
                    xUnit: "%",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 28,
              actionItems: [
                {
                  id: "a-17-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "outCubic",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".absolute-image-3",
                      selectorGuids: ["cbfc362b-940c-2cf1-5f0b-80f3e1e21bdb"],
                    },
                    xValue: -7,
                    yValue: 10,
                    xUnit: "%",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1704917859875,
    },
    "a-22": {
      id: "a-22",
      title: "[Desktop] Hero Intro Animation",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-22-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".container-nav",
                  selectorGuids: ["ef4c4036-aa48-fe3f-65d6-8355b9743f6f"],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-22-n-17",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: "._3d-logo",
                  selectorGuids: ["dedd4a90-2a3f-d9f1-a05e-55ccee4df456"],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-22-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: "._3d-logo",
                  selectorGuids: ["dedd4a90-2a3f-d9f1-a05e-55ccee4df456"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-22-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".h1-heading.marquee",
                  selectorGuids: [
                    "f5057964-2f48-1a12-d4c8-196a9b72271d",
                    "6defe99b-b069-994e-531e-0fb68870c0c4",
                  ],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-22-n-10",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "65b3a539dcce4c90ad80ae57|29e3e817-8dd0-62a2-0eb2-35335773ddd3",
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-22-n-14",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".button.mobile-hide",
                  selectorGuids: [
                    "d67ca484-8235-e725-5d52-fdfea9a47355",
                    "f203bd0e-f430-8007-0b35-06b5fb33cb3c",
                  ],
                },
                yValue: 20,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-22-n-19",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".button.mobile-hide",
                  selectorGuids: [
                    "d67ca484-8235-e725-5d52-fdfea9a47355",
                    "f203bd0e-f430-8007-0b35-06b5fb33cb3c",
                  ],
                },
                value: "none",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-22-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 500,
                easing: "outQuart",
                duration: 700,
                target: {
                  selector: ".h1-heading.marquee",
                  selectorGuids: [
                    "f5057964-2f48-1a12-d4c8-196a9b72271d",
                    "6defe99b-b069-994e-531e-0fb68870c0c4",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-22-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 500,
                easing: "outQuart",
                duration: 700,
                target: {
                  selector: ".container-nav",
                  selectorGuids: ["ef4c4036-aa48-fe3f-65d6-8355b9743f6f"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-22-n-20",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 800,
                easing: "",
                duration: 0,
                target: {
                  selector: ".button.mobile-hide",
                  selectorGuids: [
                    "d67ca484-8235-e725-5d52-fdfea9a47355",
                    "f203bd0e-f430-8007-0b35-06b5fb33cb3c",
                  ],
                },
                value: "block",
              },
            },
            {
              id: "a-22-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 900,
                easing: "outQuart",
                duration: 700,
                target: {
                  selector: ".button.mobile-hide",
                  selectorGuids: [
                    "d67ca484-8235-e725-5d52-fdfea9a47355",
                    "f203bd0e-f430-8007-0b35-06b5fb33cb3c",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-22-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 900,
                easing: "outQuart",
                duration: 600,
                target: {
                  id: "65b3a539dcce4c90ad80ae57|29e3e817-8dd0-62a2-0eb2-35335773ddd3",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-22-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 1000,
                easing: "outQuart",
                duration: 700,
                target: {
                  selector: "._3d-logo",
                  selectorGuids: ["dedd4a90-2a3f-d9f1-a05e-55ccee4df456"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-22-n-18",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 1000,
                easing: "outQuart",
                duration: 700,
                target: {
                  selector: "._3d-logo",
                  selectorGuids: ["dedd4a90-2a3f-d9f1-a05e-55ccee4df456"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1705098390362,
    },
    "a-23": {
      id: "a-23",
      title: "[Mobile] Hero Intro Animation",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-23-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".container-nav",
                  selectorGuids: ["ef4c4036-aa48-fe3f-65d6-8355b9743f6f"],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-23-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: "._3d-logo",
                  selectorGuids: ["dedd4a90-2a3f-d9f1-a05e-55ccee4df456"],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-23-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: "._3d-logo",
                  selectorGuids: ["dedd4a90-2a3f-d9f1-a05e-55ccee4df456"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-23-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".h1-heading.marquee",
                  selectorGuids: [
                    "f5057964-2f48-1a12-d4c8-196a9b72271d",
                    "6defe99b-b069-994e-531e-0fb68870c0c4",
                  ],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-23-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "65b3a539dcce4c90ad80ae57|29e3e817-8dd0-62a2-0eb2-35335773ddd3",
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-23-n-8",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 500,
                easing: "outQuart",
                duration: 700,
                target: {
                  selector: ".h1-heading.marquee",
                  selectorGuids: [
                    "f5057964-2f48-1a12-d4c8-196a9b72271d",
                    "6defe99b-b069-994e-531e-0fb68870c0c4",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-23-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 500,
                easing: "outQuart",
                duration: 700,
                target: {
                  selector: ".container-nav",
                  selectorGuids: ["ef4c4036-aa48-fe3f-65d6-8355b9743f6f"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-23-n-12",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 900,
                easing: "outQuart",
                duration: 600,
                target: {
                  id: "65b3a539dcce4c90ad80ae57|29e3e817-8dd0-62a2-0eb2-35335773ddd3",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-23-n-13",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 1000,
                easing: "outQuart",
                duration: 700,
                target: {
                  selector: "._3d-logo",
                  selectorGuids: ["dedd4a90-2a3f-d9f1-a05e-55ccee4df456"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-23-n-14",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 1000,
                easing: "outQuart",
                duration: 700,
                target: {
                  selector: "._3d-logo",
                  selectorGuids: ["dedd4a90-2a3f-d9f1-a05e-55ccee4df456"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1705098390362,
    },
    "a-24": {
      id: "a-24",
      title: "[Mobile] 3D Play in Background",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-24-n",
              actionTypeId: "PLUGIN_SPLINE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  pluginElement: "6ea8a91f-fa24-1d07-a187-fddc22b705bf",
                  objectId: "b269b451-75cc-4abb-a26b-421b518cca89",
                  useEventTarget: true,
                  id: "65b3a539dcce4c90ad80ae57|6ea8a91f-fa24-1d07-a187-fddc22b705bf",
                },
                value: {
                  scaleX: null,
                  positionX: -46,
                  scaleY: null,
                  positionY: -5,
                  scaleZ: null,
                  positionZ: null,
                  rotationX: 1.7,
                  rotationY: 0,
                  rotationZ: 0,
                },
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-24-n-2",
              actionTypeId: "PLUGIN_SPLINE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 10000,
                target: {
                  pluginElement: "6ea8a91f-fa24-1d07-a187-fddc22b705bf",
                  objectId: "b269b451-75cc-4abb-a26b-421b518cca89",
                  useEventTarget: true,
                  id: "65b3a539dcce4c90ad80ae57|6ea8a91f-fa24-1d07-a187-fddc22b705bf",
                },
                value: {
                  scaleX: null,
                  positionX: null,
                  scaleY: null,
                  positionY: null,
                  scaleZ: null,
                  positionZ: null,
                  rotationX: 3.2,
                  rotationY: 3.2,
                  rotationZ: 2.6,
                },
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-24-n-3",
              actionTypeId: "PLUGIN_SPLINE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 10000,
                target: {
                  pluginElement: "6ea8a91f-fa24-1d07-a187-fddc22b705bf",
                  objectId: "b269b451-75cc-4abb-a26b-421b518cca89",
                  useEventTarget: true,
                  id: "65b3a539dcce4c90ad80ae57|6ea8a91f-fa24-1d07-a187-fddc22b705bf",
                },
                value: {
                  scaleX: null,
                  positionX: null,
                  scaleY: null,
                  positionY: null,
                  scaleZ: null,
                  positionZ: null,
                  rotationX: -3.9,
                  rotationY: -1.6,
                  rotationZ: -1.3,
                },
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1705168743452,
    },
    "a-10": {
      id: "a-10",
      title: "[H2-Heading] - Fill Text On Scroll",
      continuousParameterGroups: [
        {
          id: "a-10-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 12,
              actionItems: [
                {
                  id: "a-10-n",
                  actionTypeId: "STYLE_SIZE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".h2-heading._1st",
                      selectorGuids: [
                        "a0bce6c7-5f76-dfd3-d248-ac76b9e80ccd",
                        "82b8683d-c6b4-4f27-b048-05a1ab1a757e",
                      ],
                    },
                    widthValue: 0,
                    widthUnit: "%",
                    heightUnit: "PX",
                    locked: false,
                  },
                },
              ],
            },
            {
              keyframe: 30,
              actionItems: [
                {
                  id: "a-10-n-2",
                  actionTypeId: "STYLE_SIZE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".h2-heading._1st",
                      selectorGuids: [
                        "a0bce6c7-5f76-dfd3-d248-ac76b9e80ccd",
                        "82b8683d-c6b4-4f27-b048-05a1ab1a757e",
                      ],
                    },
                    widthValue: 100,
                    widthUnit: "%",
                    heightUnit: "PX",
                    locked: false,
                  },
                },
                {
                  id: "a-10-n-3",
                  actionTypeId: "STYLE_SIZE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".h2-heading._2nd",
                      selectorGuids: [
                        "a0bce6c7-5f76-dfd3-d248-ac76b9e80ccd",
                        "891f7a12-7126-f0b4-9727-cfc5f7b4d1c6",
                      ],
                    },
                    widthValue: 0,
                    widthUnit: "%",
                    heightUnit: "PX",
                    locked: false,
                  },
                },
              ],
            },
            {
              keyframe: 58,
              actionItems: [
                {
                  id: "a-10-n-4",
                  actionTypeId: "STYLE_SIZE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".h2-heading._2nd",
                      selectorGuids: [
                        "a0bce6c7-5f76-dfd3-d248-ac76b9e80ccd",
                        "891f7a12-7126-f0b4-9727-cfc5f7b4d1c6",
                      ],
                    },
                    widthValue: 100,
                    widthUnit: "%",
                    heightUnit: "PX",
                    locked: false,
                  },
                },
                {
                  id: "a-10-n-5",
                  actionTypeId: "STYLE_SIZE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {},
                    widthValue: 0,
                    widthUnit: "%",
                    heightUnit: "PX",
                    locked: false,
                  },
                },
              ],
            },
            {
              keyframe: 86,
              actionItems: [
                {
                  id: "a-10-n-6",
                  actionTypeId: "STYLE_SIZE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {},
                    widthValue: 100,
                    widthUnit: "%",
                    heightUnit: "PX",
                    locked: false,
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1701777144057,
    },
    "a-29": {
      id: "a-29",
      title: "Projects Heading Images Move",
      continuousParameterGroups: [
        {
          id: "a-29-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 18,
              actionItems: [
                {
                  id: "a-29-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".absolute-image-1",
                      selectorGuids: ["b6f1fe2a-a202-22fd-fc8e-0a0a64019926"],
                    },
                    xValue: -50,
                    yValue: -40,
                    xUnit: "%",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-29-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".absolute-image-2",
                      selectorGuids: ["f44a5ed2-bfff-c0fc-f7f7-69e3bbae628f"],
                    },
                    xValue: 80,
                    yValue: -10,
                    xUnit: "%",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 56,
              actionItems: [
                {
                  id: "a-29-n-3",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "outQuart",
                    duration: 500,
                    target: {
                      selector: ".absolute-image-1",
                      selectorGuids: ["b6f1fe2a-a202-22fd-fc8e-0a0a64019926"],
                    },
                    xValue: -100,
                    yValue: -59,
                    xUnit: "%",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-29-n-4",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "outQuart",
                    duration: 500,
                    target: {
                      selector: ".absolute-image-2",
                      selectorGuids: ["f44a5ed2-bfff-c0fc-f7f7-69e3bbae628f"],
                    },
                    xValue: 130,
                    yValue: 30,
                    xUnit: "%",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1704917401116,
    },
    "a-32": {
      id: "a-32",
      title: "[Projects] Cover Image Move",
      continuousParameterGroups: [
        {
          id: "a-32-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 35,
              actionItems: [
                {
                  id: "a-32-n-3",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".project-cover-wrapper",
                      selectorGuids: ["198020b7-febb-201d-08c4-25131e8300a4"],
                    },
                    xValue: 0.4,
                    yValue: 0.4,
                    locked: false,
                  },
                },
                {
                  id: "a-32-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".project-cover-wrapper",
                      selectorGuids: ["198020b7-febb-201d-08c4-25131e8300a4"],
                    },
                    xValue: 0,
                    yValue: -59,
                    xUnit: "%",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-32-n-4",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".project-card-box.full-width",
                      selectorGuids: [
                        "635e16ea-9dc6-2ef1-a157-cc8f11eb5393",
                        "604a3580-ffea-217e-5487-5fb49fbba09b",
                      ],
                    },
                    globalSwatchId: "",
                    rValue: 10,
                    bValue: 189,
                    gValue: 6,
                    aValue: 1,
                  },
                },
              ],
            },
            {
              keyframe: 59,
              actionItems: [
                {
                  id: "a-32-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".project-cover-wrapper",
                      selectorGuids: ["198020b7-febb-201d-08c4-25131e8300a4"],
                    },
                    xValue: 0,
                    yValue: 0,
                    xUnit: "%",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-32-n-5",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".project-card-box.full-width",
                      selectorGuids: [
                        "635e16ea-9dc6-2ef1-a157-cc8f11eb5393",
                        "604a3580-ffea-217e-5487-5fb49fbba09b",
                      ],
                    },
                    globalSwatchId: "",
                    rValue: 10,
                    bValue: 189,
                    gValue: 6,
                    aValue: 0.3,
                  },
                },
                {
                  id: "a-32-n-6",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".project-cover-wrapper",
                      selectorGuids: ["198020b7-febb-201d-08c4-25131e8300a4"],
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: true,
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1705176135803,
    },
    "a-33": {
      id: "a-33",
      title: "[Project Page] Scroll indicator line",
      continuousParameterGroups: [
        {
          id: "a-33-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-33-n",
                  actionTypeId: "STYLE_SIZE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "65b3a539dcce4c90ad80ae59|265d73ae-a9d0-782a-8bda-6bd9ddf9cf27",
                    },
                    widthValue: 0,
                    widthUnit: "%",
                    heightUnit: "PX",
                    locked: false,
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-33-n-2",
                  actionTypeId: "STYLE_SIZE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "65b3a539dcce4c90ad80ae59|265d73ae-a9d0-782a-8bda-6bd9ddf9cf27",
                    },
                    widthValue: 100,
                    widthUnit: "%",
                    heightUnit: "PX",
                    locked: false,
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1705256273461,
    },
    "a-12": {
      id: "a-12",
      title: "CTA Button Move",
      continuousParameterGroups: [
        {
          id: "a-12-p",
          type: "MOUSE_X",
          parameterLabel: "Mouse X",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-12-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".cta-button",
                      selectorGuids: ["804d3bbb-c94a-042d-48e0-030972702882"],
                    },
                    xValue: -10,
                    xUnit: "vw",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-12-n-5",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".cta-button-icon",
                      selectorGuids: ["7c79c769-5c6d-eeef-90a4-3398a0643801"],
                    },
                    zValue: -15,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "deg",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-12-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".cta-button",
                      selectorGuids: ["804d3bbb-c94a-042d-48e0-030972702882"],
                    },
                    xValue: 10,
                    xUnit: "vw",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-12-n-6",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".cta-button-icon",
                      selectorGuids: ["7c79c769-5c6d-eeef-90a4-3398a0643801"],
                    },
                    zValue: 16,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "deg",
                  },
                },
              ],
            },
          ],
        },
        {
          id: "a-12-p-2",
          type: "MOUSE_Y",
          parameterLabel: "Mouse Y",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-12-n-3",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".cta-button",
                      selectorGuids: ["804d3bbb-c94a-042d-48e0-030972702882"],
                    },
                    yValue: -10,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-12-n-4",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".cta-button",
                      selectorGuids: ["804d3bbb-c94a-042d-48e0-030972702882"],
                    },
                    yValue: 10,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1704905166646,
    },
    "a-19": {
      id: "a-19",
      title: "CTA Images Move",
      continuousParameterGroups: [
        {
          id: "a-19-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 40,
              actionItems: [
                {
                  id: "a-19-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".cta-image._2",
                      selectorGuids: [
                        "bc1d1193-e484-db3c-6979-2ae975fd61f2",
                        "fb9d57be-7717-c0c0-ad4d-b1c5ddf7f91e",
                      ],
                    },
                    xValue: 16,
                    yValue: 25,
                    xUnit: "%",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-19-n-3",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".cta-image._7",
                      selectorGuids: [
                        "bc1d1193-e484-db3c-6979-2ae975fd61f2",
                        "f355bbae-a9ba-79d0-2468-f2063195c9b1",
                      ],
                    },
                    xValue: 0,
                    yValue: 50,
                    xUnit: "%",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-19-n-4",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".cta-image._5",
                      selectorGuids: [
                        "bc1d1193-e484-db3c-6979-2ae975fd61f2",
                        "cc4cd5fa-1578-6df3-ee07-7eb07ba15c1a",
                      ],
                    },
                    xValue: 0,
                    yValue: 80,
                    xUnit: "%",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-19-n-5",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".cta-image._4",
                      selectorGuids: [
                        "bc1d1193-e484-db3c-6979-2ae975fd61f2",
                        "57fc4923-3445-f72d-fdf9-b89f99d19b3e",
                      ],
                    },
                    xValue: 60,
                    yValue: -10,
                    xUnit: "%",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-19-n-6",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".cta-image._4",
                      selectorGuids: [
                        "bc1d1193-e484-db3c-6979-2ae975fd61f2",
                        "57fc4923-3445-f72d-fdf9-b89f99d19b3e",
                      ],
                    },
                    zValue: -12,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "deg",
                  },
                },
                {
                  id: "a-19-n-7",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".cta-image._3",
                      selectorGuids: [
                        "bc1d1193-e484-db3c-6979-2ae975fd61f2",
                        "f2ff416d-aae4-dee2-70b1-3a5b2733ed0e",
                      ],
                    },
                    xValue: 10,
                    yValue: -10,
                    xUnit: "%",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-19-n-8",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".cta-image._6",
                      selectorGuids: [
                        "bc1d1193-e484-db3c-6979-2ae975fd61f2",
                        "9963f539-e5df-5bd4-fee0-9bb842d710ca",
                      ],
                    },
                    xValue: 0,
                    yValue: -50,
                    xUnit: "%",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-19-n-9",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".cta-image._1",
                      selectorGuids: [
                        "bc1d1193-e484-db3c-6979-2ae975fd61f2",
                        "71e01c22-bf45-09c8-dbc2-1d517be0f253",
                      ],
                    },
                    xValue: -10,
                    yValue: -10,
                    xUnit: "%",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-19-n-18",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".cta-image._7",
                      selectorGuids: [
                        "bc1d1193-e484-db3c-6979-2ae975fd61f2",
                        "f355bbae-a9ba-79d0-2468-f2063195c9b1",
                      ],
                    },
                    zValue: -11,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "deg",
                  },
                },
              ],
            },
            {
              keyframe: 90,
              actionItems: [
                {
                  id: "a-19-n-10",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".cta-image._2",
                      selectorGuids: [
                        "bc1d1193-e484-db3c-6979-2ae975fd61f2",
                        "fb9d57be-7717-c0c0-ad4d-b1c5ddf7f91e",
                      ],
                    },
                    xValue: -10,
                    yValue: -20,
                    xUnit: "%",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-19-n-11",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".cta-image._7",
                      selectorGuids: [
                        "bc1d1193-e484-db3c-6979-2ae975fd61f2",
                        "f355bbae-a9ba-79d0-2468-f2063195c9b1",
                      ],
                    },
                    xValue: 30,
                    yValue: -30,
                    xUnit: "%",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-19-n-12",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".cta-image._5",
                      selectorGuids: [
                        "bc1d1193-e484-db3c-6979-2ae975fd61f2",
                        "cc4cd5fa-1578-6df3-ee07-7eb07ba15c1a",
                      ],
                    },
                    xValue: 40,
                    yValue: -20,
                    xUnit: "%",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-19-n-13",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".cta-image._4",
                      selectorGuids: [
                        "bc1d1193-e484-db3c-6979-2ae975fd61f2",
                        "57fc4923-3445-f72d-fdf9-b89f99d19b3e",
                      ],
                    },
                    xValue: -30,
                    yValue: 60,
                    xUnit: "%",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-19-n-14",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".cta-image._4",
                      selectorGuids: [
                        "bc1d1193-e484-db3c-6979-2ae975fd61f2",
                        "57fc4923-3445-f72d-fdf9-b89f99d19b3e",
                      ],
                    },
                    zValue: -6,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "deg",
                  },
                },
                {
                  id: "a-19-n-15",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".cta-image._3",
                      selectorGuids: [
                        "bc1d1193-e484-db3c-6979-2ae975fd61f2",
                        "f2ff416d-aae4-dee2-70b1-3a5b2733ed0e",
                      ],
                    },
                    xValue: 0,
                    yValue: 30,
                    xUnit: "%",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-19-n-16",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".cta-image._6",
                      selectorGuids: [
                        "bc1d1193-e484-db3c-6979-2ae975fd61f2",
                        "9963f539-e5df-5bd4-fee0-9bb842d710ca",
                      ],
                    },
                    xValue: 0,
                    yValue: 50,
                    xUnit: "%",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-19-n-17",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".cta-image._1",
                      selectorGuids: [
                        "bc1d1193-e484-db3c-6979-2ae975fd61f2",
                        "71e01c22-bf45-09c8-dbc2-1d517be0f253",
                      ],
                    },
                    xValue: 30,
                    yValue: 20,
                    xUnit: "%",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-19-n-19",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".cta-image._7",
                      selectorGuids: [
                        "bc1d1193-e484-db3c-6979-2ae975fd61f2",
                        "f355bbae-a9ba-79d0-2468-f2063195c9b1",
                      ],
                    },
                    zValue: -6,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "deg",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1705097268200,
    },
    "a-20": {
      id: "a-20",
      title: "CTA Button Show",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-20-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 600,
                target: {
                  selector: ".cta-button",
                  selectorGuids: ["804d3bbb-c94a-042d-48e0-030972702882"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-20-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 600,
                target: {
                  selector: ".cta-button",
                  selectorGuids: ["804d3bbb-c94a-042d-48e0-030972702882"],
                },
                xValue: 0.1,
                yValue: 0.1,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-20-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 500,
                target: {
                  selector: ".cta-button",
                  selectorGuids: ["804d3bbb-c94a-042d-48e0-030972702882"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-20-n-4",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 500,
                target: {
                  selector: ".cta-button",
                  selectorGuids: ["804d3bbb-c94a-042d-48e0-030972702882"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1705097832936,
    },
    "a-21": {
      id: "a-21",
      title: "CTA Button Hide",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-21-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 600,
                target: {
                  selector: ".cta-button",
                  selectorGuids: ["804d3bbb-c94a-042d-48e0-030972702882"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-21-n-4",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 600,
                target: {
                  selector: ".cta-button",
                  selectorGuids: ["804d3bbb-c94a-042d-48e0-030972702882"],
                },
                xValue: 0.1,
                yValue: 0.1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1705097832936,
    },
    "a-31": {
      id: "a-31",
      title: "[Mobile] CTA Images Move",
      continuousParameterGroups: [
        {
          id: "a-31-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 20,
              actionItems: [
                {
                  id: "a-31-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".cta-image._2",
                      selectorGuids: [
                        "bc1d1193-e484-db3c-6979-2ae975fd61f2",
                        "fb9d57be-7717-c0c0-ad4d-b1c5ddf7f91e",
                      ],
                    },
                    xValue: 16,
                    yValue: 70,
                    xUnit: "%",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-31-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".cta-image._7",
                      selectorGuids: [
                        "bc1d1193-e484-db3c-6979-2ae975fd61f2",
                        "f355bbae-a9ba-79d0-2468-f2063195c9b1",
                      ],
                    },
                    xValue: 0,
                    yValue: 90,
                    xUnit: "%",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-31-n-3",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".cta-image._5",
                      selectorGuids: [
                        "bc1d1193-e484-db3c-6979-2ae975fd61f2",
                        "cc4cd5fa-1578-6df3-ee07-7eb07ba15c1a",
                      ],
                    },
                    xValue: 0,
                    yValue: 100,
                    xUnit: "%",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-31-n-4",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".cta-image._4",
                      selectorGuids: [
                        "bc1d1193-e484-db3c-6979-2ae975fd61f2",
                        "57fc4923-3445-f72d-fdf9-b89f99d19b3e",
                      ],
                    },
                    xValue: 70,
                    yValue: -40,
                    xUnit: "%",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-31-n-5",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".cta-image._4",
                      selectorGuids: [
                        "bc1d1193-e484-db3c-6979-2ae975fd61f2",
                        "57fc4923-3445-f72d-fdf9-b89f99d19b3e",
                      ],
                    },
                    zValue: -12,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "deg",
                  },
                },
                {
                  id: "a-31-n-6",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".cta-image._3",
                      selectorGuids: [
                        "bc1d1193-e484-db3c-6979-2ae975fd61f2",
                        "f2ff416d-aae4-dee2-70b1-3a5b2733ed0e",
                      ],
                    },
                    xValue: 10,
                    yValue: -70,
                    xUnit: "%",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-31-n-7",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".cta-image._6",
                      selectorGuids: [
                        "bc1d1193-e484-db3c-6979-2ae975fd61f2",
                        "9963f539-e5df-5bd4-fee0-9bb842d710ca",
                      ],
                    },
                    xValue: 0,
                    yValue: -80,
                    xUnit: "%",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-31-n-8",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".cta-image._1",
                      selectorGuids: [
                        "bc1d1193-e484-db3c-6979-2ae975fd61f2",
                        "71e01c22-bf45-09c8-dbc2-1d517be0f253",
                      ],
                    },
                    xValue: -10,
                    yValue: -40,
                    xUnit: "%",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-31-n-9",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".cta-image._7",
                      selectorGuids: [
                        "bc1d1193-e484-db3c-6979-2ae975fd61f2",
                        "f355bbae-a9ba-79d0-2468-f2063195c9b1",
                      ],
                    },
                    zValue: -11,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "deg",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-31-n-10",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".cta-image._2",
                      selectorGuids: [
                        "bc1d1193-e484-db3c-6979-2ae975fd61f2",
                        "fb9d57be-7717-c0c0-ad4d-b1c5ddf7f91e",
                      ],
                    },
                    xValue: -20,
                    yValue: -40,
                    xUnit: "%",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-31-n-11",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".cta-image._7",
                      selectorGuids: [
                        "bc1d1193-e484-db3c-6979-2ae975fd61f2",
                        "f355bbae-a9ba-79d0-2468-f2063195c9b1",
                      ],
                    },
                    xValue: 30,
                    yValue: -30,
                    xUnit: "%",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-31-n-12",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".cta-image._5",
                      selectorGuids: [
                        "bc1d1193-e484-db3c-6979-2ae975fd61f2",
                        "cc4cd5fa-1578-6df3-ee07-7eb07ba15c1a",
                      ],
                    },
                    xValue: 60,
                    yValue: -20,
                    xUnit: "%",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-31-n-13",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".cta-image._4",
                      selectorGuids: [
                        "bc1d1193-e484-db3c-6979-2ae975fd61f2",
                        "57fc4923-3445-f72d-fdf9-b89f99d19b3e",
                      ],
                    },
                    xValue: -30,
                    yValue: 110,
                    xUnit: "%",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-31-n-14",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".cta-image._4",
                      selectorGuids: [
                        "bc1d1193-e484-db3c-6979-2ae975fd61f2",
                        "57fc4923-3445-f72d-fdf9-b89f99d19b3e",
                      ],
                    },
                    zValue: -6,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "deg",
                  },
                },
                {
                  id: "a-31-n-15",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".cta-image._3",
                      selectorGuids: [
                        "bc1d1193-e484-db3c-6979-2ae975fd61f2",
                        "f2ff416d-aae4-dee2-70b1-3a5b2733ed0e",
                      ],
                    },
                    xValue: 0,
                    yValue: 38,
                    xUnit: "%",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-31-n-16",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".cta-image._6",
                      selectorGuids: [
                        "bc1d1193-e484-db3c-6979-2ae975fd61f2",
                        "9963f539-e5df-5bd4-fee0-9bb842d710ca",
                      ],
                    },
                    xValue: 0,
                    yValue: 50,
                    xUnit: "%",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-31-n-17",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".cta-image._1",
                      selectorGuids: [
                        "bc1d1193-e484-db3c-6979-2ae975fd61f2",
                        "71e01c22-bf45-09c8-dbc2-1d517be0f253",
                      ],
                    },
                    xValue: 30,
                    yValue: 20,
                    xUnit: "%",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-31-n-18",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".cta-image._7",
                      selectorGuids: [
                        "bc1d1193-e484-db3c-6979-2ae975fd61f2",
                        "f355bbae-a9ba-79d0-2468-f2063195c9b1",
                      ],
                    },
                    zValue: -6,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "deg",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1705097268200,
    },
    "a-34": {
      id: "a-34",
      title: "[Project Page] Nav Arrow In",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-34-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".back-icon",
                  selectorGuids: ["60dfa959-09cd-5ca9-9da1-3f9adc5626d7"],
                },
                xValue: 32,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-34-n-5",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "65b3a539dcce4c90ad80ae59|5ec7b548-bdcf-d4a0-956f-b8e1596c3876",
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-34-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "65b3a539dcce4c90ad80ae59|c7badad3-279d-65f9-82e2-c56ac828290e",
                },
                xValue: 0,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-34-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".back-icon",
                  selectorGuids: ["60dfa959-09cd-5ca9-9da1-3f9adc5626d7"],
                },
                xValue: 0,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-34-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 600,
                target: {
                  id: "65b3a539dcce4c90ad80ae59|c7badad3-279d-65f9-82e2-c56ac828290e",
                },
                xValue: -32,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-34-n-6",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "65b3a539dcce4c90ad80ae59|5ec7b548-bdcf-d4a0-956f-b8e1596c3876",
                },
                xValue: 0.9,
                yValue: 0.9,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1705270636008,
    },
    "a-35": {
      id: "a-35",
      title: "[Project Page] Nav Arrow Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-35-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".back-icon",
                  selectorGuids: ["60dfa959-09cd-5ca9-9da1-3f9adc5626d7"],
                },
                xValue: 32,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-35-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 600,
                target: {
                  id: "65b3a539dcce4c90ad80ae59|c7badad3-279d-65f9-82e2-c56ac828290e",
                },
                xValue: 0,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-35-n-6",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 600,
                target: {
                  useEventTarget: true,
                  id: "65b3a539dcce4c90ad80ae59|5ec7b548-bdcf-d4a0-956f-b8e1596c3876",
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1705270636008,
    },
    "a-18": {
      id: "a-18",
      title: "Project Card Move",
      continuousParameterGroups: [
        {
          id: "a-18-p",
          type: "MOUSE_X",
          parameterLabel: "Mouse X",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-18-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: true,
                      id: "845b63eb-8ea4-cd41-e659-ac8ebb297db0",
                    },
                    xValue: -6,
                    xUnit: "vw",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-18-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: true,
                      id: "845b63eb-8ea4-cd41-e659-ac8ebb297db0",
                    },
                    xValue: 6,
                    xUnit: "vw",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
        {
          id: "a-18-p-2",
          type: "MOUSE_Y",
          parameterLabel: "Mouse Y",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-18-n-3",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: true,
                      id: "845b63eb-8ea4-cd41-e659-ac8ebb297db0",
                    },
                    yValue: -6,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-18-n-4",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: true,
                      id: "845b63eb-8ea4-cd41-e659-ac8ebb297db0",
                    },
                    yValue: 6,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1704918067925,
    },
    slideInBottom: {
      id: "slideInBottom",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 100,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
          ],
        },
      ],
    },
  },
  site: {
    mediaQueries: [
      { key: "main", min: 992, max: 10000 },
      { key: "medium", min: 768, max: 991 },
      { key: "small", min: 480, max: 767 },
      { key: "tiny", min: 0, max: 479 },
    ],
  },
});
