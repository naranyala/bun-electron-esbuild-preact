"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // node_modules/preact/dist/preact.module.js
  function d(n4, l6) {
    for (var u5 in l6) n4[u5] = l6[u5];
    return n4;
  }
  function g(n4) {
    n4 && n4.parentNode && n4.parentNode.removeChild(n4);
  }
  function _(l6, u5, t5) {
    var i5, r4, o5, e5 = {};
    for (o5 in u5) "key" == o5 ? i5 = u5[o5] : "ref" == o5 ? r4 = u5[o5] : e5[o5] = u5[o5];
    if (arguments.length > 2 && (e5.children = arguments.length > 3 ? n.call(arguments, 2) : t5), "function" == typeof l6 && null != l6.defaultProps) for (o5 in l6.defaultProps) void 0 === e5[o5] && (e5[o5] = l6.defaultProps[o5]);
    return m(l6, e5, i5, r4, null);
  }
  function m(n4, t5, i5, r4, o5) {
    var e5 = { type: n4, props: t5, key: i5, ref: r4, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: null == o5 ? ++u : o5, __i: -1, __u: 0 };
    return null == o5 && null != l.vnode && l.vnode(e5), e5;
  }
  function k(n4) {
    return n4.children;
  }
  function x(n4, l6) {
    this.props = n4, this.context = l6;
  }
  function S(n4, l6) {
    if (null == l6) return n4.__ ? S(n4.__, n4.__i + 1) : null;
    for (var u5; l6 < n4.__k.length; l6++) if (null != (u5 = n4.__k[l6]) && null != u5.__e) return u5.__e;
    return "function" == typeof n4.type ? S(n4) : null;
  }
  function C(n4) {
    var l6, u5;
    if (null != (n4 = n4.__) && null != n4.__c) {
      for (n4.__e = n4.__c.base = null, l6 = 0; l6 < n4.__k.length; l6++) if (null != (u5 = n4.__k[l6]) && null != u5.__e) {
        n4.__e = n4.__c.base = u5.__e;
        break;
      }
      return C(n4);
    }
  }
  function M(n4) {
    (!n4.__d && (n4.__d = true) && i.push(n4) && !$.__r++ || r != l.debounceRendering) && ((r = l.debounceRendering) || o)($);
  }
  function $() {
    for (var n4, u5, t5, r4, o5, f4, c5, s5 = 1; i.length; ) i.length > s5 && i.sort(e), n4 = i.shift(), s5 = i.length, n4.__d && (t5 = void 0, o5 = (r4 = (u5 = n4).__v).__e, f4 = [], c5 = [], u5.__P && ((t5 = d({}, r4)).__v = r4.__v + 1, l.vnode && l.vnode(t5), O(u5.__P, t5, r4, u5.__n, u5.__P.namespaceURI, 32 & r4.__u ? [o5] : null, f4, null == o5 ? S(r4) : o5, !!(32 & r4.__u), c5), t5.__v = r4.__v, t5.__.__k[t5.__i] = t5, N(f4, t5, c5), t5.__e != o5 && C(t5)));
    $.__r = 0;
  }
  function I(n4, l6, u5, t5, i5, r4, o5, e5, f4, c5, s5) {
    var a5, h6, y5, w4, d5, g4, _5 = t5 && t5.__k || v, m4 = l6.length;
    for (f4 = P(u5, l6, _5, f4, m4), a5 = 0; a5 < m4; a5++) null != (y5 = u5.__k[a5]) && (h6 = -1 == y5.__i ? p : _5[y5.__i] || p, y5.__i = a5, g4 = O(n4, y5, h6, i5, r4, o5, e5, f4, c5, s5), w4 = y5.__e, y5.ref && h6.ref != y5.ref && (h6.ref && B(h6.ref, null, y5), s5.push(y5.ref, y5.__c || w4, y5)), null == d5 && null != w4 && (d5 = w4), 4 & y5.__u || h6.__k === y5.__k ? f4 = A(y5, f4, n4) : "function" == typeof y5.type && void 0 !== g4 ? f4 = g4 : w4 && (f4 = w4.nextSibling), y5.__u &= -7);
    return u5.__e = d5, f4;
  }
  function P(n4, l6, u5, t5, i5) {
    var r4, o5, e5, f4, c5, s5 = u5.length, a5 = s5, h6 = 0;
    for (n4.__k = new Array(i5), r4 = 0; r4 < i5; r4++) null != (o5 = l6[r4]) && "boolean" != typeof o5 && "function" != typeof o5 ? (f4 = r4 + h6, (o5 = n4.__k[r4] = "string" == typeof o5 || "number" == typeof o5 || "bigint" == typeof o5 || o5.constructor == String ? m(null, o5, null, null, null) : w(o5) ? m(k, { children: o5 }, null, null, null) : null == o5.constructor && o5.__b > 0 ? m(o5.type, o5.props, o5.key, o5.ref ? o5.ref : null, o5.__v) : o5).__ = n4, o5.__b = n4.__b + 1, e5 = null, -1 != (c5 = o5.__i = L(o5, u5, f4, a5)) && (a5--, (e5 = u5[c5]) && (e5.__u |= 2)), null == e5 || null == e5.__v ? (-1 == c5 && (i5 > s5 ? h6-- : i5 < s5 && h6++), "function" != typeof o5.type && (o5.__u |= 4)) : c5 != f4 && (c5 == f4 - 1 ? h6-- : c5 == f4 + 1 ? h6++ : (c5 > f4 ? h6-- : h6++, o5.__u |= 4))) : n4.__k[r4] = null;
    if (a5) for (r4 = 0; r4 < s5; r4++) null != (e5 = u5[r4]) && 0 == (2 & e5.__u) && (e5.__e == t5 && (t5 = S(e5)), D(e5, e5));
    return t5;
  }
  function A(n4, l6, u5) {
    var t5, i5;
    if ("function" == typeof n4.type) {
      for (t5 = n4.__k, i5 = 0; t5 && i5 < t5.length; i5++) t5[i5] && (t5[i5].__ = n4, l6 = A(t5[i5], l6, u5));
      return l6;
    }
    n4.__e != l6 && (l6 && n4.type && !u5.contains(l6) && (l6 = S(n4)), u5.insertBefore(n4.__e, l6 || null), l6 = n4.__e);
    do {
      l6 = l6 && l6.nextSibling;
    } while (null != l6 && 8 == l6.nodeType);
    return l6;
  }
  function H(n4, l6) {
    return l6 = l6 || [], null == n4 || "boolean" == typeof n4 || (w(n4) ? n4.some(function(n5) {
      H(n5, l6);
    }) : l6.push(n4)), l6;
  }
  function L(n4, l6, u5, t5) {
    var i5, r4, o5, e5 = n4.key, f4 = n4.type, c5 = l6[u5], s5 = null != c5 && 0 == (2 & c5.__u);
    if (null === c5 && null == n4.key || s5 && e5 == c5.key && f4 == c5.type) return u5;
    if (t5 > (s5 ? 1 : 0)) {
      for (i5 = u5 - 1, r4 = u5 + 1; i5 >= 0 || r4 < l6.length; ) if (null != (c5 = l6[o5 = i5 >= 0 ? i5-- : r4++]) && 0 == (2 & c5.__u) && e5 == c5.key && f4 == c5.type) return o5;
    }
    return -1;
  }
  function T(n4, l6, u5) {
    "-" == l6[0] ? n4.setProperty(l6, null == u5 ? "" : u5) : n4[l6] = null == u5 ? "" : "number" != typeof u5 || y.test(l6) ? u5 : u5 + "px";
  }
  function j(n4, l6, u5, t5, i5) {
    var r4, o5;
    n: if ("style" == l6) if ("string" == typeof u5) n4.style.cssText = u5;
    else {
      if ("string" == typeof t5 && (n4.style.cssText = t5 = ""), t5) for (l6 in t5) u5 && l6 in u5 || T(n4.style, l6, "");
      if (u5) for (l6 in u5) t5 && u5[l6] == t5[l6] || T(n4.style, l6, u5[l6]);
    }
    else if ("o" == l6[0] && "n" == l6[1]) r4 = l6 != (l6 = l6.replace(f, "$1")), o5 = l6.toLowerCase(), l6 = o5 in n4 || "onFocusOut" == l6 || "onFocusIn" == l6 ? o5.slice(2) : l6.slice(2), n4.l || (n4.l = {}), n4.l[l6 + r4] = u5, u5 ? t5 ? u5.u = t5.u : (u5.u = c, n4.addEventListener(l6, r4 ? a : s, r4)) : n4.removeEventListener(l6, r4 ? a : s, r4);
    else {
      if ("http://www.w3.org/2000/svg" == i5) l6 = l6.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("width" != l6 && "height" != l6 && "href" != l6 && "list" != l6 && "form" != l6 && "tabIndex" != l6 && "download" != l6 && "rowSpan" != l6 && "colSpan" != l6 && "role" != l6 && "popover" != l6 && l6 in n4) try {
        n4[l6] = null == u5 ? "" : u5;
        break n;
      } catch (n5) {
      }
      "function" == typeof u5 || (null == u5 || false === u5 && "-" != l6[4] ? n4.removeAttribute(l6) : n4.setAttribute(l6, "popover" == l6 && 1 == u5 ? "" : u5));
    }
  }
  function F(n4) {
    return function(u5) {
      if (this.l) {
        var t5 = this.l[u5.type + n4];
        if (null == u5.t) u5.t = c++;
        else if (u5.t < t5.u) return;
        return t5(l.event ? l.event(u5) : u5);
      }
    };
  }
  function O(n4, u5, t5, i5, r4, o5, e5, f4, c5, s5) {
    var a5, h6, p5, v4, y5, _5, m4, b4, S2, C3, M2, $2, P2, A3, H2, L2, T4, j3 = u5.type;
    if (null != u5.constructor) return null;
    128 & t5.__u && (c5 = !!(32 & t5.__u), o5 = [f4 = u5.__e = t5.__e]), (a5 = l.__b) && a5(u5);
    n: if ("function" == typeof j3) try {
      if (b4 = u5.props, S2 = "prototype" in j3 && j3.prototype.render, C3 = (a5 = j3.contextType) && i5[a5.__c], M2 = a5 ? C3 ? C3.props.value : a5.__ : i5, t5.__c ? m4 = (h6 = u5.__c = t5.__c).__ = h6.__E : (S2 ? u5.__c = h6 = new j3(b4, M2) : (u5.__c = h6 = new x(b4, M2), h6.constructor = j3, h6.render = E), C3 && C3.sub(h6), h6.props = b4, h6.state || (h6.state = {}), h6.context = M2, h6.__n = i5, p5 = h6.__d = true, h6.__h = [], h6._sb = []), S2 && null == h6.__s && (h6.__s = h6.state), S2 && null != j3.getDerivedStateFromProps && (h6.__s == h6.state && (h6.__s = d({}, h6.__s)), d(h6.__s, j3.getDerivedStateFromProps(b4, h6.__s))), v4 = h6.props, y5 = h6.state, h6.__v = u5, p5) S2 && null == j3.getDerivedStateFromProps && null != h6.componentWillMount && h6.componentWillMount(), S2 && null != h6.componentDidMount && h6.__h.push(h6.componentDidMount);
      else {
        if (S2 && null == j3.getDerivedStateFromProps && b4 !== v4 && null != h6.componentWillReceiveProps && h6.componentWillReceiveProps(b4, M2), !h6.__e && null != h6.shouldComponentUpdate && false === h6.shouldComponentUpdate(b4, h6.__s, M2) || u5.__v == t5.__v) {
          for (u5.__v != t5.__v && (h6.props = b4, h6.state = h6.__s, h6.__d = false), u5.__e = t5.__e, u5.__k = t5.__k, u5.__k.some(function(n5) {
            n5 && (n5.__ = u5);
          }), $2 = 0; $2 < h6._sb.length; $2++) h6.__h.push(h6._sb[$2]);
          h6._sb = [], h6.__h.length && e5.push(h6);
          break n;
        }
        null != h6.componentWillUpdate && h6.componentWillUpdate(b4, h6.__s, M2), S2 && null != h6.componentDidUpdate && h6.__h.push(function() {
          h6.componentDidUpdate(v4, y5, _5);
        });
      }
      if (h6.context = M2, h6.props = b4, h6.__P = n4, h6.__e = false, P2 = l.__r, A3 = 0, S2) {
        for (h6.state = h6.__s, h6.__d = false, P2 && P2(u5), a5 = h6.render(h6.props, h6.state, h6.context), H2 = 0; H2 < h6._sb.length; H2++) h6.__h.push(h6._sb[H2]);
        h6._sb = [];
      } else do {
        h6.__d = false, P2 && P2(u5), a5 = h6.render(h6.props, h6.state, h6.context), h6.state = h6.__s;
      } while (h6.__d && ++A3 < 25);
      h6.state = h6.__s, null != h6.getChildContext && (i5 = d(d({}, i5), h6.getChildContext())), S2 && !p5 && null != h6.getSnapshotBeforeUpdate && (_5 = h6.getSnapshotBeforeUpdate(v4, y5)), L2 = a5, null != a5 && a5.type === k && null == a5.key && (L2 = V(a5.props.children)), f4 = I(n4, w(L2) ? L2 : [L2], u5, t5, i5, r4, o5, e5, f4, c5, s5), h6.base = u5.__e, u5.__u &= -161, h6.__h.length && e5.push(h6), m4 && (h6.__E = h6.__ = null);
    } catch (n5) {
      if (u5.__v = null, c5 || null != o5) if (n5.then) {
        for (u5.__u |= c5 ? 160 : 128; f4 && 8 == f4.nodeType && f4.nextSibling; ) f4 = f4.nextSibling;
        o5[o5.indexOf(f4)] = null, u5.__e = f4;
      } else {
        for (T4 = o5.length; T4--; ) g(o5[T4]);
        z(u5);
      }
      else u5.__e = t5.__e, u5.__k = t5.__k, n5.then || z(u5);
      l.__e(n5, u5, t5);
    }
    else null == o5 && u5.__v == t5.__v ? (u5.__k = t5.__k, u5.__e = t5.__e) : f4 = u5.__e = q(t5.__e, u5, t5, i5, r4, o5, e5, c5, s5);
    return (a5 = l.diffed) && a5(u5), 128 & u5.__u ? void 0 : f4;
  }
  function z(n4) {
    n4 && n4.__c && (n4.__c.__e = true), n4 && n4.__k && n4.__k.forEach(z);
  }
  function N(n4, u5, t5) {
    for (var i5 = 0; i5 < t5.length; i5++) B(t5[i5], t5[++i5], t5[++i5]);
    l.__c && l.__c(u5, n4), n4.some(function(u6) {
      try {
        n4 = u6.__h, u6.__h = [], n4.some(function(n5) {
          n5.call(u6);
        });
      } catch (n5) {
        l.__e(n5, u6.__v);
      }
    });
  }
  function V(n4) {
    return "object" != typeof n4 || null == n4 || n4.__b && n4.__b > 0 ? n4 : w(n4) ? n4.map(V) : d({}, n4);
  }
  function q(u5, t5, i5, r4, o5, e5, f4, c5, s5) {
    var a5, h6, v4, y5, d5, _5, m4, b4 = i5.props, k3 = t5.props, x3 = t5.type;
    if ("svg" == x3 ? o5 = "http://www.w3.org/2000/svg" : "math" == x3 ? o5 = "http://www.w3.org/1998/Math/MathML" : o5 || (o5 = "http://www.w3.org/1999/xhtml"), null != e5) {
      for (a5 = 0; a5 < e5.length; a5++) if ((d5 = e5[a5]) && "setAttribute" in d5 == !!x3 && (x3 ? d5.localName == x3 : 3 == d5.nodeType)) {
        u5 = d5, e5[a5] = null;
        break;
      }
    }
    if (null == u5) {
      if (null == x3) return document.createTextNode(k3);
      u5 = document.createElementNS(o5, x3, k3.is && k3), c5 && (l.__m && l.__m(t5, e5), c5 = false), e5 = null;
    }
    if (null == x3) b4 === k3 || c5 && u5.data == k3 || (u5.data = k3);
    else {
      if (e5 = e5 && n.call(u5.childNodes), b4 = i5.props || p, !c5 && null != e5) for (b4 = {}, a5 = 0; a5 < u5.attributes.length; a5++) b4[(d5 = u5.attributes[a5]).name] = d5.value;
      for (a5 in b4) if (d5 = b4[a5], "children" == a5) ;
      else if ("dangerouslySetInnerHTML" == a5) v4 = d5;
      else if (!(a5 in k3)) {
        if ("value" == a5 && "defaultValue" in k3 || "checked" == a5 && "defaultChecked" in k3) continue;
        j(u5, a5, null, d5, o5);
      }
      for (a5 in k3) d5 = k3[a5], "children" == a5 ? y5 = d5 : "dangerouslySetInnerHTML" == a5 ? h6 = d5 : "value" == a5 ? _5 = d5 : "checked" == a5 ? m4 = d5 : c5 && "function" != typeof d5 || b4[a5] === d5 || j(u5, a5, d5, b4[a5], o5);
      if (h6) c5 || v4 && (h6.__html == v4.__html || h6.__html == u5.innerHTML) || (u5.innerHTML = h6.__html), t5.__k = [];
      else if (v4 && (u5.innerHTML = ""), I("template" == t5.type ? u5.content : u5, w(y5) ? y5 : [y5], t5, i5, r4, "foreignObject" == x3 ? "http://www.w3.org/1999/xhtml" : o5, e5, f4, e5 ? e5[0] : i5.__k && S(i5, 0), c5, s5), null != e5) for (a5 = e5.length; a5--; ) g(e5[a5]);
      c5 || (a5 = "value", "progress" == x3 && null == _5 ? u5.removeAttribute("value") : null != _5 && (_5 !== u5[a5] || "progress" == x3 && !_5 || "option" == x3 && _5 != b4[a5]) && j(u5, a5, _5, b4[a5], o5), a5 = "checked", null != m4 && m4 != u5[a5] && j(u5, a5, m4, b4[a5], o5));
    }
    return u5;
  }
  function B(n4, u5, t5) {
    try {
      if ("function" == typeof n4) {
        var i5 = "function" == typeof n4.__u;
        i5 && n4.__u(), i5 && null == u5 || (n4.__u = n4(u5));
      } else n4.current = u5;
    } catch (n5) {
      l.__e(n5, t5);
    }
  }
  function D(n4, u5, t5) {
    var i5, r4;
    if (l.unmount && l.unmount(n4), (i5 = n4.ref) && (i5.current && i5.current != n4.__e || B(i5, null, u5)), null != (i5 = n4.__c)) {
      if (i5.componentWillUnmount) try {
        i5.componentWillUnmount();
      } catch (n5) {
        l.__e(n5, u5);
      }
      i5.base = i5.__P = null;
    }
    if (i5 = n4.__k) for (r4 = 0; r4 < i5.length; r4++) i5[r4] && D(i5[r4], u5, t5 || "function" != typeof n4.type);
    t5 || g(n4.__e), n4.__c = n4.__ = n4.__e = void 0;
  }
  function E(n4, l6, u5) {
    return this.constructor(n4, u5);
  }
  function G(u5, t5, i5) {
    var r4, o5, e5, f4;
    t5 == document && (t5 = document.documentElement), l.__ && l.__(u5, t5), o5 = (r4 = "function" == typeof i5) ? null : i5 && i5.__k || t5.__k, e5 = [], f4 = [], O(t5, u5 = (!r4 && i5 || t5).__k = _(k, null, [u5]), o5 || p, p, t5.namespaceURI, !r4 && i5 ? [i5] : o5 ? null : t5.firstChild ? n.call(t5.childNodes) : null, e5, !r4 && i5 ? i5 : o5 ? o5.__e : t5.firstChild, r4, f4), N(e5, u5, f4);
  }
  function K(l6, u5, t5) {
    var i5, r4, o5, e5, f4 = d({}, l6.props);
    for (o5 in l6.type && l6.type.defaultProps && (e5 = l6.type.defaultProps), u5) "key" == o5 ? i5 = u5[o5] : "ref" == o5 ? r4 = u5[o5] : f4[o5] = void 0 === u5[o5] && null != e5 ? e5[o5] : u5[o5];
    return arguments.length > 2 && (f4.children = arguments.length > 3 ? n.call(arguments, 2) : t5), m(l6.type, f4, i5 || l6.key, r4 || l6.ref, null);
  }
  function Q(n4) {
    function l6(n5) {
      var u5, t5;
      return this.getChildContext || (u5 = /* @__PURE__ */ new Set(), (t5 = {})[l6.__c] = this, this.getChildContext = function() {
        return t5;
      }, this.componentWillUnmount = function() {
        u5 = null;
      }, this.shouldComponentUpdate = function(n6) {
        this.props.value != n6.value && u5.forEach(function(n7) {
          n7.__e = true, M(n7);
        });
      }, this.sub = function(n6) {
        u5.add(n6);
        var l7 = n6.componentWillUnmount;
        n6.componentWillUnmount = function() {
          u5 && u5.delete(n6), l7 && l7.call(n6);
        };
      }), n5.children;
    }
    return l6.__c = "__cC" + h++, l6.__ = n4, l6.Provider = l6.__l = (l6.Consumer = function(n5, l7) {
      return n5.children(l7);
    }).contextType = l6, l6;
  }
  var n, l, u, t, i, r, o, e, f, c, s, a, h, p, v, y, w;
  var init_preact_module = __esm({
    "node_modules/preact/dist/preact.module.js"() {
      p = {};
      v = [];
      y = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
      w = Array.isArray;
      n = v.slice, l = { __e: function(n4, l6, u5, t5) {
        for (var i5, r4, o5; l6 = l6.__; ) if ((i5 = l6.__c) && !i5.__) try {
          if ((r4 = i5.constructor) && null != r4.getDerivedStateFromError && (i5.setState(r4.getDerivedStateFromError(n4)), o5 = i5.__d), null != i5.componentDidCatch && (i5.componentDidCatch(n4, t5 || {}), o5 = i5.__d), o5) return i5.__E = i5;
        } catch (l7) {
          n4 = l7;
        }
        throw n4;
      } }, u = 0, t = function(n4) {
        return null != n4 && null == n4.constructor;
      }, x.prototype.setState = function(n4, l6) {
        var u5;
        u5 = null != this.__s && this.__s != this.state ? this.__s : this.__s = d({}, this.state), "function" == typeof n4 && (n4 = n4(d({}, u5), this.props)), n4 && d(u5, n4), null != n4 && this.__v && (l6 && this._sb.push(l6), M(this));
      }, x.prototype.forceUpdate = function(n4) {
        this.__v && (this.__e = true, n4 && this.__h.push(n4), M(this));
      }, x.prototype.render = k, i = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e = function(n4, l6) {
        return n4.__v.__b - l6.__v.__b;
      }, $.__r = 0, f = /(PointerCapture)$|Capture$/i, c = 0, s = F(false), a = F(true), h = 0;
    }
  });

  // node_modules/preact/hooks/dist/hooks.module.js
  function p2(n4, t5) {
    c2.__h && c2.__h(r2, n4, o2 || t5), o2 = 0;
    var u5 = r2.__H || (r2.__H = { __: [], __h: [] });
    return n4 >= u5.__.length && u5.__.push({}), u5.__[n4];
  }
  function d2(n4) {
    return o2 = 1, h2(D2, n4);
  }
  function h2(n4, u5, i5) {
    var o5 = p2(t2++, 2);
    if (o5.t = n4, !o5.__c && (o5.__ = [i5 ? i5(u5) : D2(void 0, u5), function(n5) {
      var t5 = o5.__N ? o5.__N[0] : o5.__[0], r4 = o5.t(t5, n5);
      t5 !== r4 && (o5.__N = [r4, o5.__[1]], o5.__c.setState({}));
    }], o5.__c = r2, !r2.__f)) {
      var f4 = function(n5, t5, r4) {
        if (!o5.__c.__H) return true;
        var u6 = o5.__c.__H.__.filter(function(n6) {
          return !!n6.__c;
        });
        if (u6.every(function(n6) {
          return !n6.__N;
        })) return !c5 || c5.call(this, n5, t5, r4);
        var i6 = o5.__c.props !== n5;
        return u6.forEach(function(n6) {
          if (n6.__N) {
            var t6 = n6.__[0];
            n6.__ = n6.__N, n6.__N = void 0, t6 !== n6.__[0] && (i6 = true);
          }
        }), c5 && c5.call(this, n5, t5, r4) || i6;
      };
      r2.__f = true;
      var c5 = r2.shouldComponentUpdate, e5 = r2.componentWillUpdate;
      r2.componentWillUpdate = function(n5, t5, r4) {
        if (this.__e) {
          var u6 = c5;
          c5 = void 0, f4(n5, t5, r4), c5 = u6;
        }
        e5 && e5.call(this, n5, t5, r4);
      }, r2.shouldComponentUpdate = f4;
    }
    return o5.__N || o5.__;
  }
  function y2(n4, u5) {
    var i5 = p2(t2++, 3);
    !c2.__s && C2(i5.__H, u5) && (i5.__ = n4, i5.u = u5, r2.__H.__h.push(i5));
  }
  function _2(n4, u5) {
    var i5 = p2(t2++, 4);
    !c2.__s && C2(i5.__H, u5) && (i5.__ = n4, i5.u = u5, r2.__h.push(i5));
  }
  function A2(n4) {
    return o2 = 5, T2(function() {
      return { current: n4 };
    }, []);
  }
  function T2(n4, r4) {
    var u5 = p2(t2++, 7);
    return C2(u5.__H, r4) && (u5.__ = n4(), u5.__H = r4, u5.__h = n4), u5.__;
  }
  function x2(n4) {
    var u5 = r2.context[n4.__c], i5 = p2(t2++, 9);
    return i5.c = n4, u5 ? (null == i5.__ && (i5.__ = true, u5.sub(r2)), u5.props.value) : n4.__;
  }
  function j2() {
    for (var n4; n4 = f2.shift(); ) if (n4.__P && n4.__H) try {
      n4.__H.__h.forEach(z2), n4.__H.__h.forEach(B2), n4.__H.__h = [];
    } catch (t5) {
      n4.__H.__h = [], c2.__e(t5, n4.__v);
    }
  }
  function w2(n4) {
    var t5, r4 = function() {
      clearTimeout(u5), k2 && cancelAnimationFrame(t5), setTimeout(n4);
    }, u5 = setTimeout(r4, 35);
    k2 && (t5 = requestAnimationFrame(r4));
  }
  function z2(n4) {
    var t5 = r2, u5 = n4.__c;
    "function" == typeof u5 && (n4.__c = void 0, u5()), r2 = t5;
  }
  function B2(n4) {
    var t5 = r2;
    n4.__c = n4.__(), r2 = t5;
  }
  function C2(n4, t5) {
    return !n4 || n4.length !== t5.length || t5.some(function(t6, r4) {
      return t6 !== n4[r4];
    });
  }
  function D2(n4, t5) {
    return "function" == typeof t5 ? t5(n4) : t5;
  }
  var t2, r2, u2, i2, o2, f2, c2, e2, a2, v2, l2, m2, s2, k2;
  var init_hooks_module = __esm({
    "node_modules/preact/hooks/dist/hooks.module.js"() {
      init_preact_module();
      o2 = 0;
      f2 = [];
      c2 = l;
      e2 = c2.__b;
      a2 = c2.__r;
      v2 = c2.diffed;
      l2 = c2.__c;
      m2 = c2.unmount;
      s2 = c2.__;
      c2.__b = function(n4) {
        r2 = null, e2 && e2(n4);
      }, c2.__ = function(n4, t5) {
        n4 && t5.__k && t5.__k.__m && (n4.__m = t5.__k.__m), s2 && s2(n4, t5);
      }, c2.__r = function(n4) {
        a2 && a2(n4), t2 = 0;
        var i5 = (r2 = n4.__c).__H;
        i5 && (u2 === r2 ? (i5.__h = [], r2.__h = [], i5.__.forEach(function(n5) {
          n5.__N && (n5.__ = n5.__N), n5.u = n5.__N = void 0;
        })) : (i5.__h.forEach(z2), i5.__h.forEach(B2), i5.__h = [], t2 = 0)), u2 = r2;
      }, c2.diffed = function(n4) {
        v2 && v2(n4);
        var t5 = n4.__c;
        t5 && t5.__H && (t5.__H.__h.length && (1 !== f2.push(t5) && i2 === c2.requestAnimationFrame || ((i2 = c2.requestAnimationFrame) || w2)(j2)), t5.__H.__.forEach(function(n5) {
          n5.u && (n5.__H = n5.u), n5.u = void 0;
        })), u2 = r2 = null;
      }, c2.__c = function(n4, t5) {
        t5.some(function(n5) {
          try {
            n5.__h.forEach(z2), n5.__h = n5.__h.filter(function(n6) {
              return !n6.__ || B2(n6);
            });
          } catch (r4) {
            t5.some(function(n6) {
              n6.__h && (n6.__h = []);
            }), t5 = [], c2.__e(r4, n5.__v);
          }
        }), l2 && l2(n4, t5);
      }, c2.unmount = function(n4) {
        m2 && m2(n4);
        var t5, r4 = n4.__c;
        r4 && r4.__H && (r4.__H.__.forEach(function(n5) {
          try {
            z2(n5);
          } catch (n6) {
            t5 = n6;
          }
        }), r4.__H = void 0, t5 && c2.__e(t5, r4.__v));
      };
      k2 = "function" == typeof requestAnimationFrame;
    }
  });

  // node_modules/goober/dist/goober.modern.js
  function u3(e5) {
    let r4 = this || {}, l6 = e5.call ? e5(r4.p) : e5;
    return i3(l6.unshift ? l6.raw ? p3(l6, [].slice.call(arguments, 1), r4.p) : l6.reduce((e6, t5) => Object.assign(e6, t5 && t5.call ? t5(r4.p) : t5), {}) : l6, t3(r4.target), r4.g, r4.o, r4.k);
  }
  var e3, t3, l3, a3, n2, o3, c3, s3, i3, p3, b, h3;
  var init_goober_modern = __esm({
    "node_modules/goober/dist/goober.modern.js"() {
      e3 = { data: "" };
      t3 = (t5) => "object" == typeof window ? ((t5 ? t5.querySelector("#_goober") : window._goober) || Object.assign((t5 || document.head).appendChild(document.createElement("style")), { innerHTML: " ", id: "_goober" })).firstChild : t5 || e3;
      l3 = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g;
      a3 = /\/\*[^]*?\*\/|  +/g;
      n2 = /\n+/g;
      o3 = (e5, t5) => {
        let r4 = "", l6 = "", a5 = "";
        for (let n4 in e5) {
          let c5 = e5[n4];
          "@" == n4[0] ? "i" == n4[1] ? r4 = n4 + " " + c5 + ";" : l6 += "f" == n4[1] ? o3(c5, n4) : n4 + "{" + o3(c5, "k" == n4[1] ? "" : t5) + "}" : "object" == typeof c5 ? l6 += o3(c5, t5 ? t5.replace(/([^,])+/g, (e6) => n4.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, (t6) => /&/.test(t6) ? t6.replace(/&/g, e6) : e6 ? e6 + " " + t6 : t6)) : n4) : null != c5 && (n4 = /^--/.test(n4) ? n4 : n4.replace(/[A-Z]/g, "-$&").toLowerCase(), a5 += o3.p ? o3.p(n4, c5) : n4 + ":" + c5 + ";");
        }
        return r4 + (t5 && a5 ? t5 + "{" + a5 + "}" : a5) + l6;
      };
      c3 = {};
      s3 = (e5) => {
        if ("object" == typeof e5) {
          let t5 = "";
          for (let r4 in e5) t5 += r4 + s3(e5[r4]);
          return t5;
        }
        return e5;
      };
      i3 = (e5, t5, r4, i5, p5) => {
        let u5 = s3(e5), d5 = c3[u5] || (c3[u5] = ((e6) => {
          let t6 = 0, r5 = 11;
          for (; t6 < e6.length; ) r5 = 101 * r5 + e6.charCodeAt(t6++) >>> 0;
          return "go" + r5;
        })(u5));
        if (!c3[d5]) {
          let t6 = u5 !== e5 ? e5 : ((e6) => {
            let t7, r5, o5 = [{}];
            for (; t7 = l3.exec(e6.replace(a3, "")); ) t7[4] ? o5.shift() : t7[3] ? (r5 = t7[3].replace(n2, " ").trim(), o5.unshift(o5[0][r5] = o5[0][r5] || {})) : o5[0][t7[1]] = t7[2].replace(n2, " ").trim();
            return o5[0];
          })(e5);
          c3[d5] = o3(p5 ? { ["@keyframes " + d5]: t6 } : t6, r4 ? "" : "." + d5);
        }
        let f4 = r4 && c3.g ? c3.g : null;
        return r4 && (c3.g = c3[d5]), ((e6, t6, r5, l6) => {
          l6 ? t6.data = t6.data.replace(l6, e6) : -1 === t6.data.indexOf(e6) && (t6.data = r5 ? e6 + t6.data : t6.data + e6);
        })(c3[d5], t5, i5, f4), d5;
      };
      p3 = (e5, t5, r4) => e5.reduce((e6, l6, a5) => {
        let n4 = t5[a5];
        if (n4 && n4.call) {
          let e7 = n4(r4), t6 = e7 && e7.props && e7.props.className || /^go/.test(e7) && e7;
          n4 = t6 ? "." + t6 : e7 && "object" == typeof e7 ? e7.props ? "" : o3(e7, "") : false === e7 ? "" : e7;
        }
        return e6 + l6 + (null == n4 ? "" : n4);
      }, "");
      b = u3.bind({ g: 1 });
      h3 = u3.bind({ k: 1 });
    }
  });

  // node_modules/@preact/signals-core/dist/signals-core.module.js
  function t4() {
    if (!(s4 > 1)) {
      var i5, t5 = false;
      while (void 0 !== h4) {
        var r4 = h4;
        h4 = void 0;
        f3++;
        while (void 0 !== r4) {
          var o5 = r4.o;
          r4.o = void 0;
          r4.f &= -3;
          if (!(8 & r4.f) && c4(r4)) try {
            r4.c();
          } catch (r5) {
            if (!t5) {
              i5 = r5;
              t5 = true;
            }
          }
          r4 = o5;
        }
      }
      f3 = 0;
      s4--;
      if (t5) throw i5;
    } else s4--;
  }
  function r3(i5) {
    if (s4 > 0) return i5();
    s4++;
    try {
      return i5();
    } finally {
      t4();
    }
  }
  function n3(i5) {
    var t5 = o4;
    o4 = void 0;
    try {
      return i5();
    } finally {
      o4 = t5;
    }
  }
  function e4(i5) {
    if (void 0 !== o4) {
      var t5 = i5.n;
      if (void 0 === t5 || t5.t !== o4) {
        t5 = { i: 0, S: i5, p: o4.s, n: void 0, t: o4, e: void 0, x: void 0, r: t5 };
        if (void 0 !== o4.s) o4.s.n = t5;
        o4.s = t5;
        i5.n = t5;
        if (32 & o4.f) i5.S(t5);
        return t5;
      } else if (-1 === t5.i) {
        t5.i = 0;
        if (void 0 !== t5.n) {
          t5.n.p = t5.p;
          if (void 0 !== t5.p) t5.p.n = t5.n;
          t5.p = o4.s;
          t5.n = void 0;
          o4.s.n = t5;
          o4.s = t5;
        }
        return t5;
      }
    }
  }
  function u4(i5, t5) {
    this.v = i5;
    this.i = 0;
    this.n = void 0;
    this.t = void 0;
    this.W = null == t5 ? void 0 : t5.watched;
    this.Z = null == t5 ? void 0 : t5.unwatched;
  }
  function d3(i5, t5) {
    return new u4(i5, t5);
  }
  function c4(i5) {
    for (var t5 = i5.s; void 0 !== t5; t5 = t5.n) if (t5.S.i !== t5.i || !t5.S.h() || t5.S.i !== t5.i) return true;
    return false;
  }
  function a4(i5) {
    for (var t5 = i5.s; void 0 !== t5; t5 = t5.n) {
      var r4 = t5.S.n;
      if (void 0 !== r4) t5.r = r4;
      t5.S.n = t5;
      t5.i = -1;
      if (void 0 === t5.n) {
        i5.s = t5;
        break;
      }
    }
  }
  function l4(i5) {
    var t5 = i5.s, r4 = void 0;
    while (void 0 !== t5) {
      var o5 = t5.p;
      if (-1 === t5.i) {
        t5.S.U(t5);
        if (void 0 !== o5) o5.n = t5.n;
        if (void 0 !== t5.n) t5.n.p = o5;
      } else r4 = t5;
      t5.S.n = t5.r;
      if (void 0 !== t5.r) t5.r = void 0;
      t5 = o5;
    }
    i5.s = r4;
  }
  function y3(i5, t5) {
    u4.call(this, void 0);
    this.x = i5;
    this.s = void 0;
    this.g = v3 - 1;
    this.f = 4;
    this.W = null == t5 ? void 0 : t5.watched;
    this.Z = null == t5 ? void 0 : t5.unwatched;
  }
  function w3(i5, t5) {
    return new y3(i5, t5);
  }
  function _3(i5) {
    var r4 = i5.u;
    i5.u = void 0;
    if ("function" == typeof r4) {
      s4++;
      var n4 = o4;
      o4 = void 0;
      try {
        r4();
      } catch (t5) {
        i5.f &= -2;
        i5.f |= 8;
        b2(i5);
        throw t5;
      } finally {
        o4 = n4;
        t4();
      }
    }
  }
  function b2(i5) {
    for (var t5 = i5.s; void 0 !== t5; t5 = t5.n) t5.S.U(t5);
    i5.x = void 0;
    i5.s = void 0;
    _3(i5);
  }
  function g2(i5) {
    if (o4 !== this) throw new Error("Out-of-order effect");
    l4(this);
    o4 = i5;
    this.f &= -2;
    if (8 & this.f) b2(this);
    t4();
  }
  function p4(i5) {
    this.x = i5;
    this.u = void 0;
    this.s = void 0;
    this.o = void 0;
    this.f = 32;
  }
  function E2(i5) {
    var t5 = new p4(i5);
    try {
      t5.c();
    } catch (i6) {
      t5.d();
      throw i6;
    }
    var r4 = t5.d.bind(t5);
    r4[Symbol.dispose] = r4;
    return r4;
  }
  var i4, o4, h4, s4, f3, v3;
  var init_signals_core_module = __esm({
    "node_modules/@preact/signals-core/dist/signals-core.module.js"() {
      i4 = Symbol.for("preact-signals");
      o4 = void 0;
      h4 = void 0;
      s4 = 0;
      f3 = 0;
      v3 = 0;
      u4.prototype.brand = i4;
      u4.prototype.h = function() {
        return true;
      };
      u4.prototype.S = function(i5) {
        var t5 = this, r4 = this.t;
        if (r4 !== i5 && void 0 === i5.e) {
          i5.x = r4;
          this.t = i5;
          if (void 0 !== r4) r4.e = i5;
          else n3(function() {
            var i6;
            null == (i6 = t5.W) || i6.call(t5);
          });
        }
      };
      u4.prototype.U = function(i5) {
        var t5 = this;
        if (void 0 !== this.t) {
          var r4 = i5.e, o5 = i5.x;
          if (void 0 !== r4) {
            r4.x = o5;
            i5.e = void 0;
          }
          if (void 0 !== o5) {
            o5.e = r4;
            i5.x = void 0;
          }
          if (i5 === this.t) {
            this.t = o5;
            if (void 0 === o5) n3(function() {
              var i6;
              null == (i6 = t5.Z) || i6.call(t5);
            });
          }
        }
      };
      u4.prototype.subscribe = function(i5) {
        var t5 = this;
        return E2(function() {
          var r4 = t5.value, n4 = o4;
          o4 = void 0;
          try {
            i5(r4);
          } finally {
            o4 = n4;
          }
        });
      };
      u4.prototype.valueOf = function() {
        return this.value;
      };
      u4.prototype.toString = function() {
        return this.value + "";
      };
      u4.prototype.toJSON = function() {
        return this.value;
      };
      u4.prototype.peek = function() {
        var i5 = o4;
        o4 = void 0;
        try {
          return this.value;
        } finally {
          o4 = i5;
        }
      };
      Object.defineProperty(u4.prototype, "value", { get: function() {
        var i5 = e4(this);
        if (void 0 !== i5) i5.i = this.i;
        return this.v;
      }, set: function(i5) {
        if (i5 !== this.v) {
          if (f3 > 100) throw new Error("Cycle detected");
          this.v = i5;
          this.i++;
          v3++;
          s4++;
          try {
            for (var r4 = this.t; void 0 !== r4; r4 = r4.x) r4.t.N();
          } finally {
            t4();
          }
        }
      } });
      y3.prototype = new u4();
      y3.prototype.h = function() {
        this.f &= -3;
        if (1 & this.f) return false;
        if (32 == (36 & this.f)) return true;
        this.f &= -5;
        if (this.g === v3) return true;
        this.g = v3;
        this.f |= 1;
        if (this.i > 0 && !c4(this)) {
          this.f &= -2;
          return true;
        }
        var i5 = o4;
        try {
          a4(this);
          o4 = this;
          var t5 = this.x();
          if (16 & this.f || this.v !== t5 || 0 === this.i) {
            this.v = t5;
            this.f &= -17;
            this.i++;
          }
        } catch (i6) {
          this.v = i6;
          this.f |= 16;
          this.i++;
        }
        o4 = i5;
        l4(this);
        this.f &= -2;
        return true;
      };
      y3.prototype.S = function(i5) {
        if (void 0 === this.t) {
          this.f |= 36;
          for (var t5 = this.s; void 0 !== t5; t5 = t5.n) t5.S.S(t5);
        }
        u4.prototype.S.call(this, i5);
      };
      y3.prototype.U = function(i5) {
        if (void 0 !== this.t) {
          u4.prototype.U.call(this, i5);
          if (void 0 === this.t) {
            this.f &= -33;
            for (var t5 = this.s; void 0 !== t5; t5 = t5.n) t5.S.U(t5);
          }
        }
      };
      y3.prototype.N = function() {
        if (!(2 & this.f)) {
          this.f |= 6;
          for (var i5 = this.t; void 0 !== i5; i5 = i5.x) i5.t.N();
        }
      };
      Object.defineProperty(y3.prototype, "value", { get: function() {
        if (1 & this.f) throw new Error("Cycle detected");
        var i5 = e4(this);
        this.h();
        if (void 0 !== i5) i5.i = this.i;
        if (16 & this.f) throw this.v;
        return this.v;
      } });
      p4.prototype.c = function() {
        var i5 = this.S();
        try {
          if (8 & this.f) return;
          if (void 0 === this.x) return;
          var t5 = this.x();
          if ("function" == typeof t5) this.u = t5;
        } finally {
          i5();
        }
      };
      p4.prototype.S = function() {
        if (1 & this.f) throw new Error("Cycle detected");
        this.f |= 1;
        this.f &= -9;
        _3(this);
        a4(this);
        s4++;
        var i5 = o4;
        o4 = this;
        return g2.bind(this, i5);
      };
      p4.prototype.N = function() {
        if (!(2 & this.f)) {
          this.f |= 2;
          this.o = h4;
          h4 = this;
        }
      };
      p4.prototype.d = function() {
        this.f |= 8;
        if (!(1 & this.f)) b2(this);
      };
      p4.prototype.dispose = function() {
        this.d();
      };
    }
  });

  // node_modules/@preact/signals/dist/signals.module.js
  function _4(i5, r4) {
    l[i5] = r4.bind(null, l[i5] || function() {
    });
  }
  function g3(i5) {
    if (d4) d4();
    d4 = i5 && i5.S();
  }
  function b3(i5) {
    var n4 = this, t5 = i5.data, o5 = useSignal(t5);
    o5.value = t5;
    var e5 = T2(function() {
      var i6 = n4, t6 = n4.__v;
      while (t6 = t6.__) if (t6.__c) {
        t6.__c.__$f |= 4;
        break;
      }
      var f4 = w3(function() {
        var i7 = o5.value.value;
        return 0 === i7 ? 0 : true === i7 ? "" : i7 || "";
      }), e6 = w3(function() {
        return !Array.isArray(f4.value) && !t(f4.value);
      }), a6 = E2(function() {
        this.N = T3;
        if (e6.value) {
          var n5 = f4.value;
          if (i6.__v && i6.__v.__e && 3 === i6.__v.__e.nodeType) i6.__v.__e.data = n5;
        }
      }), v5 = n4.__$u.d;
      n4.__$u.d = function() {
        a6();
        v5.call(this);
      };
      return [e6, f4];
    }, []), a5 = e5[0], v4 = e5[1];
    return a5.value ? v4.peek() : v4.value;
  }
  function y4(i5, n4, r4, t5) {
    var f4 = n4 in i5 && void 0 === i5.ownerSVGElement, o5 = d3(r4);
    return { o: function(i6, n5) {
      o5.value = i6;
      t5 = n5;
    }, d: E2(function() {
      this.N = T3;
      var r5 = o5.value.value;
      if (t5[n4] !== r5) {
        t5[n4] = r5;
        if (f4) i5[n4] = r5;
        else if (r5) i5.setAttribute(n4, r5);
        else i5.removeAttribute(n4);
      }
    }) };
  }
  function useSignal(i5, n4) {
    return T2(function() {
      return d3(i5, n4);
    }, []);
  }
  function F2() {
    r3(function() {
      var i5;
      while (i5 = m3.shift()) h5.call(i5);
    });
  }
  function T3() {
    if (1 === m3.push(this)) (l.requestAnimationFrame || q2)(F2);
  }
  var h5, l5, d4, m3, q2;
  var init_signals_module = __esm({
    "node_modules/@preact/signals/dist/signals.module.js"() {
      init_preact_module();
      init_hooks_module();
      init_signals_core_module();
      init_signals_core_module();
      m3 = [];
      E2(function() {
        h5 = this.N;
      })();
      b3.displayName = "_st";
      Object.defineProperties(u4.prototype, { constructor: { configurable: true, value: void 0 }, type: { configurable: true, value: b3 }, props: { configurable: true, get: function() {
        return { data: this };
      } }, __b: { configurable: true, value: 1 } });
      _4("__b", function(i5, n4) {
        if ("string" == typeof n4.type) {
          var r4, t5 = n4.props;
          for (var f4 in t5) if ("children" !== f4) {
            var o5 = t5[f4];
            if (o5 instanceof u4) {
              if (!r4) n4.__np = r4 = {};
              r4[f4] = o5;
              t5[f4] = o5.peek();
            }
          }
        }
        i5(n4);
      });
      _4("__r", function(i5, n4) {
        if (n4.type !== k) {
          g3();
          var r4, f4 = n4.__c;
          if (f4) {
            f4.__$f &= -2;
            if (void 0 === (r4 = f4.__$u)) f4.__$u = r4 = function(i6) {
              var n5;
              E2(function() {
                n5 = this;
              });
              n5.c = function() {
                f4.__$f |= 1;
                f4.setState({});
              };
              return n5;
            }();
          }
          l5 = f4;
          g3(r4);
        }
        i5(n4);
      });
      _4("__e", function(i5, n4, r4, t5) {
        g3();
        l5 = void 0;
        i5(n4, r4, t5);
      });
      _4("diffed", function(i5, n4) {
        g3();
        l5 = void 0;
        var r4;
        if ("string" == typeof n4.type && (r4 = n4.__e)) {
          var t5 = n4.__np, f4 = n4.props;
          if (t5) {
            var o5 = r4.U;
            if (o5) for (var e5 in o5) {
              var u5 = o5[e5];
              if (void 0 !== u5 && !(e5 in t5)) {
                u5.d();
                o5[e5] = void 0;
              }
            }
            else {
              o5 = {};
              r4.U = o5;
            }
            for (var a5 in t5) {
              var c5 = o5[a5], v4 = t5[a5];
              if (void 0 === c5) {
                c5 = y4(r4, a5, v4, f4);
                o5[a5] = c5;
              } else c5.o(v4, f4);
            }
          }
        }
        i5(n4);
      });
      _4("unmount", function(i5, n4) {
        if ("string" == typeof n4.type) {
          var r4 = n4.__e;
          if (r4) {
            var t5 = r4.U;
            if (t5) {
              r4.U = void 0;
              for (var f4 in t5) {
                var o5 = t5[f4];
                if (o5) o5.d();
              }
            }
          }
        } else {
          var e5 = n4.__c;
          if (e5) {
            var u5 = e5.__$u;
            if (u5) {
              e5.__$u = void 0;
              u5.d();
            }
          }
        }
        i5(n4);
      });
      _4("__h", function(i5, n4, r4, t5) {
        if (t5 < 3 || 9 === t5) n4.__$f |= 2;
        i5(n4, r4, t5);
      });
      x.prototype.shouldComponentUpdate = function(i5, n4) {
        var r4 = this.__$u, t5 = r4 && void 0 !== r4.s;
        for (var f4 in n4) return true;
        if (this.__f || "boolean" == typeof this.u && true === this.u) {
          var o5 = 2 & this.__$f;
          if (!(t5 || o5 || 4 & this.__$f)) return true;
          if (1 & this.__$f) return true;
        } else {
          if (!(t5 || 4 & this.__$f)) return true;
          if (3 & this.__$f) return true;
        }
        for (var e5 in i5) if ("__source" !== e5 && i5[e5] !== this.props[e5]) return true;
        for (var u5 in this.props) if (!(u5 in i5)) return true;
        return false;
      };
      q2 = function(i5) {
        queueMicrotask(function() {
          queueMicrotask(i5);
        });
      };
    }
  });

  // src/_404.tsx
  var __exports = {};
  __export(__exports, {
    default: () => __default
  });
  var __default;
  var init__ = __esm({
    "src/_404.tsx"() {
      "use strict";
      init_preact_module();
      __default = () => /* @__PURE__ */ _("div", null, "404 Not Found");
    }
  });

  // src/use-cases/home.tsx
  var home_exports = {};
  __export(home_exports, {
    default: () => home_default
  });
  var home_default;
  var init_home = __esm({
    "src/use-cases/home.tsx"() {
      "use strict";
      init_preact_module();
      home_default = () => /* @__PURE__ */ _("div", null, "Home");
    }
  });

  // src/reusable/ModalDialog.tsx
  function Modal() {
    const handleBackdropClick = () => {
      isModalOpen.value = false;
    };
    const handleModalClick = (event) => {
      event.stopPropagation();
    };
    const handlePrimaryAction = () => {
      console.log("Primary action confirmed");
      isModalOpen.value = false;
    };
    const handleSecondaryAction = () => {
      console.log("Secondary action cancelled");
      isModalOpen.value = false;
    };
    const handleCloseClick = () => {
      isModalOpen.value = false;
    };
    if (!isModalOpen.value) {
      return null;
    }
    return /* @__PURE__ */ _("div", { className: styles2.backdrop, onClick: handleBackdropClick }, /* @__PURE__ */ _("div", { className: styles2.modal, onClick: handleModalClick }, /* @__PURE__ */ _("div", { className: styles2.modalHeader }, /* @__PURE__ */ _("h2", { className: styles2.modalTitle }, modalContent.title), /* @__PURE__ */ _("button", { className: styles2.closeButton, onClick: handleCloseClick }, "\xD7")), /* @__PURE__ */ _("div", { className: styles2.modalBody }, /* @__PURE__ */ _("p", { className: styles2.modalMessage }, modalContent.message)), /* @__PURE__ */ _("div", { className: styles2.modalFooter }, /* @__PURE__ */ _("button", { className: styles2.secondaryButton, onClick: handleSecondaryAction }, modalContent.secondaryAction), /* @__PURE__ */ _("button", { className: styles2.primaryButton, onClick: handlePrimaryAction }, modalContent.primaryAction))));
  }
  function ModalDialog() {
    const handleOpenModal = () => {
      isModalOpen.value = true;
    };
    return /* @__PURE__ */ _("div", { className: styles2.container }, /* @__PURE__ */ _("h2", null, "Modal Dialog Demo"), /* @__PURE__ */ _("p", null, "Click the button below to open the modal dialog. You can close it by:"), /* @__PURE__ */ _("ul", { className: styles2.instructionList }, /* @__PURE__ */ _("li", null, "Clicking the backdrop (dark area)"), /* @__PURE__ */ _("li", null, "Clicking the \xD7 close button"), /* @__PURE__ */ _("li", null, "Clicking any action button")), /* @__PURE__ */ _("button", { className: styles2.triggerButton, onClick: handleOpenModal }, "Open Modal Dialog"), /* @__PURE__ */ _(Modal, null));
  }
  var isModalOpen, modalContent, styles2;
  var init_ModalDialog = __esm({
    "src/reusable/ModalDialog.tsx"() {
      "use strict";
      init_preact_module();
      init_signals_module();
      init_goober_modern();
      isModalOpen = d3(false);
      modalContent = {
        title: "Confirm Action",
        message: "Are you sure you want to proceed with this action? This cannot be undone.",
        primaryAction: "Confirm",
        secondaryAction: "Cancel"
      };
      styles2 = {
        container: u3`
    padding: 20px;
    max-width: 600px;
    margin: 0 auto;
  `,
        instructionList: u3`
    text-align: left;
    margin: 16px 0;
    padding-left: 20px;

    li {
      margin-bottom: 4px;
      color: #666;
    }
  `,
        triggerButton: u3`
    background: #28a745;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
      background: #218838;
    }

    &:active {
      transform: translateY(1px);
    }
  `,
        backdrop: u3`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    animation: backdropFadeIn 0.3s ease-out;

    @keyframes backdropFadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `,
        modal: u3`
    background: white;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    max-width: 500px;
    width: 100%;
    max-height: 90vh;
    overflow: hidden;
    animation: modalScaleIn 0.3s ease-out;

    @keyframes modalScaleIn {
      from {
        opacity: 0;
        transform: scale(0.9);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
  `,
        modalHeader: u3`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 24px 16px;
    border-bottom: 1px solid #eee;
  `,
        modalTitle: u3`
    margin: 0;
    font-size: 20px;
    font-weight: 600;
    color: #333;
  `,
        closeButton: u3`
    background: none;
    border: none;
    font-size: 24px;
    color: #999;
    cursor: pointer;
    padding: 4px;
    border-radius: 4px;
    transition: all 0.2s ease;

    &:hover {
      background: #f0f0f0;
      color: #666;
    }
  `,
        modalBody: u3`
    padding: 20px 24px;
  `,
        modalMessage: u3`
    margin: 0;
    line-height: 1.5;
    color: #555;
    font-size: 16px;
  `,
        modalFooter: u3`
    display: flex;
    justify-content: flex-end;
    gap: 12px;
    padding: 16px 24px 20px;
    border-top: 1px solid #eee;
  `,
        primaryButton: u3`
    background: #dc3545;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
      background: #c82333;
    }

    &:active {
      transform: translateY(1px);
    }
  `,
        secondaryButton: u3`
    background: #6c757d;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
      background: #5a6268;
    }

    &:active {
      transform: translateY(1px);
    }
  `
      };
    }
  });

  // src/reusable/Accordion.tsx
  function AccordionItem({ title, content, index }) {
    const isOpen = openIndices.value.includes(index);
    const handleToggle = () => {
      if (isOpen) {
        openIndices.value = openIndices.value.filter((itemIndex) => itemIndex !== index);
      } else {
        openIndices.value = [...openIndices.value, index];
      }
    };
    return /* @__PURE__ */ _("div", { className: styles3.accordionItem }, /* @__PURE__ */ _("button", { className: styles3.accordionHeader, onClick: handleToggle }, title, /* @__PURE__ */ _("span", { className: styles3.arrow(isOpen) }, "\u25B6")), /* @__PURE__ */ _("div", { className: styles3.accordionContent(isOpen) }, content));
  }
  function Accordion() {
    return /* @__PURE__ */ _("div", { className: styles3.accordionContainer }, accordionData.map((item, index) => /* @__PURE__ */ _(
      AccordionItem,
      {
        key: index,
        title: item.title,
        content: item.content,
        index
      }
    )));
  }
  var accordionData, openIndices, styles3;
  var init_Accordion = __esm({
    "src/reusable/Accordion.tsx"() {
      "use strict";
      init_preact_module();
      init_signals_module();
      init_goober_modern();
      accordionData = [
        {
          title: "What is Preact?",
          content: "Preact is a fast 3kB alternative to React with the same modern API."
        },
        {
          title: "What are Signals?",
          content: "Signals are a reactive state management system for Preact, enabling fine-grained updates."
        },
        {
          title: "What is Goober?",
          content: "Goober is a lightweight CSS-in-JS library for styling components with minimal overhead."
        }
      ];
      openIndices = d3([]);
      styles3 = {
        accordionContainer: u3`
    max-width: 600px;
    margin: 20px auto;
  `,
        accordionItem: u3`
    border: 1px solid #ccc;
    margin-bottom: 10px;
    border-radius: 4px;
  `,
        accordionHeader: u3`
    width: 100%;
    padding: 15px;
    background: #f4f4f4;
    border: none;
    text-align: left;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: background 0.2s ease;

    &:hover {
      background: #e0e0e0;
    }
  `,
        accordionContent: (isOpen) => u3`
    padding: ${isOpen ? "15px" : "0 15px"};
    background: #fff;
    transition: max-height 0.3s ease-out, padding 0.3s ease-out;
    overflow: hidden;
    max-height: ${isOpen ? "200px" : "0"};
  `,
        arrow: (isOpen) => u3`
    font-size: 14px;
    transition: transform 0.3s ease;
    transform: ${isOpen ? "rotate(90deg)" : "rotate(0deg)"};
  `
      };
    }
  });

  // src/reusable/BottomSheetDrawer.tsx
  function GridMenuItem({ icon, label, action }) {
    const handleClick = () => {
      console.log(`Menu item clicked: ${action}`);
      isDrawerOpen.value = false;
    };
    return /* @__PURE__ */ _("button", { className: styles4.gridItem, onClick: handleClick }, /* @__PURE__ */ _("div", { className: styles4.itemIcon }, icon), /* @__PURE__ */ _("div", { className: styles4.itemLabel }, label));
  }
  function BottomSheet() {
    const handleOverlayClick = () => {
      isDrawerOpen.value = false;
    };
    const handleDrawerClick = (event) => {
      event.stopPropagation();
    };
    if (!isDrawerOpen.value) {
      return null;
    }
    return /* @__PURE__ */ _("div", { className: styles4.overlay, onClick: handleOverlayClick }, /* @__PURE__ */ _("div", { className: styles4.drawer, onClick: handleDrawerClick }, /* @__PURE__ */ _("div", { className: styles4.handle }), /* @__PURE__ */ _("div", { className: styles4.drawerHeader }, /* @__PURE__ */ _("h3", { className: styles4.drawerTitle }, "Quick Actions")), /* @__PURE__ */ _("div", { className: styles4.gridContainer }, menuItems.map((item) => /* @__PURE__ */ _(
      GridMenuItem,
      {
        key: item.id,
        icon: item.icon,
        label: item.label,
        action: item.action
      }
    )))));
  }
  function BottomSheetDrawer() {
    const handleOpenDrawer = () => {
      isDrawerOpen.value = true;
    };
    return /* @__PURE__ */ _("div", { className: styles4.container }, /* @__PURE__ */ _("h2", null, "Bottom Sheet Drawer Demo"), /* @__PURE__ */ _("p", null, "Click the button below to open the sliding drawer with grid menu."), /* @__PURE__ */ _("button", { className: styles4.triggerButton, onClick: handleOpenDrawer }, "Open Menu Drawer"), /* @__PURE__ */ _(BottomSheet, null));
  }
  var menuItems, isDrawerOpen, styles4;
  var init_BottomSheetDrawer = __esm({
    "src/reusable/BottomSheetDrawer.tsx"() {
      "use strict";
      init_preact_module();
      init_signals_module();
      init_goober_modern();
      menuItems = [
        { id: 1, icon: "\u{1F3E0}", label: "Home", action: "home" },
        { id: 2, icon: "\u{1F464}", label: "Profile", action: "profile" },
        { id: 3, icon: "\u2699\uFE0F", label: "Settings", action: "settings" },
        { id: 4, icon: "\u{1F4E7}", label: "Messages", action: "messages" },
        { id: 5, icon: "\u{1F514}", label: "Notifications", action: "notifications" },
        { id: 6, icon: "\u2764\uFE0F", label: "Favorites", action: "favorites" },
        { id: 7, icon: "\u{1F4CA}", label: "Analytics", action: "analytics" },
        { id: 8, icon: "\u{1F512}", label: "Privacy", action: "privacy" },
        { id: 9, icon: "\u{1F4F1}", label: "Apps", action: "apps" }
      ];
      isDrawerOpen = d3(false);
      styles4 = {
        container: u3`
    padding: 20px;
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
  `,
        triggerButton: u3`
    background: #007bff;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
      background: #0056b3;
    }

    &:active {
      transform: translateY(1px);
    }
  `,
        overlay: u3`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    display: flex;
    align-items: flex-end;
    animation: fadeIn 0.3s ease-out;

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `,
        drawer: u3`
    background: white;
    width: 100%;
    max-height: 80vh;
    border-radius: 16px 16px 0 0;
    overflow: hidden;
    animation: slideUp 0.3s ease-out;

    @keyframes slideUp {
      from {
        transform: translateY(100%);
      }
      to {
        transform: translateY(0);
      }
    }
  `,
        handle: u3`
    width: 40px;
    height: 4px;
    background: #ccc;
    border-radius: 2px;
    margin: 12px auto 8px;
  `,
        drawerHeader: u3`
    padding: 0 20px 16px;
    border-bottom: 1px solid #eee;
  `,
        drawerTitle: u3`
    margin: 0;
    font-size: 18px;
    font-weight: 600;
    color: #333;
  `,
        gridContainer: u3`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    padding: 20px;
    max-height: 400px;
    overflow-y: auto;
  `,
        gridItem: u3`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px 8px;
    background: #f8f9fa;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background: #e9ecef;
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(0);
    }
  `,
        itemIcon: u3`
    font-size: 24px;
    margin-bottom: 8px;
  `,
        itemLabel: u3`
    font-size: 12px;
    font-weight: 500;
    color: #666;
    text-align: center;
  `
      };
    }
  });

  // node_modules/tslib/tslib.es6.mjs
  function __extends(d5, b4) {
    if (typeof b4 !== "function" && b4 !== null)
      throw new TypeError("Class extends value " + String(b4) + " is not a constructor or null");
    extendStatics(d5, b4);
    function __() {
      this.constructor = d5;
    }
    d5.prototype = b4 === null ? Object.create(b4) : (__.prototype = b4.prototype, new __());
  }
  function __values(o5) {
    var s5 = typeof Symbol === "function" && Symbol.iterator, m4 = s5 && o5[s5], i5 = 0;
    if (m4) return m4.call(o5);
    if (o5 && typeof o5.length === "number") return {
      next: function() {
        if (o5 && i5 >= o5.length) o5 = void 0;
        return { value: o5 && o5[i5++], done: !o5 };
      }
    };
    throw new TypeError(s5 ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function __read(o5, n4) {
    var m4 = typeof Symbol === "function" && o5[Symbol.iterator];
    if (!m4) return o5;
    var i5 = m4.call(o5), r4, ar = [], e5;
    try {
      while ((n4 === void 0 || n4-- > 0) && !(r4 = i5.next()).done) ar.push(r4.value);
    } catch (error) {
      e5 = { error };
    } finally {
      try {
        if (r4 && !r4.done && (m4 = i5["return"])) m4.call(i5);
      } finally {
        if (e5) throw e5.error;
      }
    }
    return ar;
  }
  function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i5 = 0, l6 = from.length, ar; i5 < l6; i5++) {
      if (ar || !(i5 in from)) {
        if (!ar) ar = Array.prototype.slice.call(from, 0, i5);
        ar[i5] = from[i5];
      }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
  }
  var extendStatics;
  var init_tslib_es6 = __esm({
    "node_modules/tslib/tslib.es6.mjs"() {
      extendStatics = function(d5, b4) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d6, b5) {
          d6.__proto__ = b5;
        } || function(d6, b5) {
          for (var p5 in b5) if (Object.prototype.hasOwnProperty.call(b5, p5)) d6[p5] = b5[p5];
        };
        return extendStatics(d5, b4);
      };
    }
  });

  // node_modules/rxjs/dist/esm5/internal/util/isFunction.js
  function isFunction(value) {
    return typeof value === "function";
  }
  var init_isFunction = __esm({
    "node_modules/rxjs/dist/esm5/internal/util/isFunction.js"() {
    }
  });

  // node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js
  function createErrorClass(createImpl) {
    var _super = function(instance) {
      Error.call(instance);
      instance.stack = new Error().stack;
    };
    var ctorFunc = createImpl(_super);
    ctorFunc.prototype = Object.create(Error.prototype);
    ctorFunc.prototype.constructor = ctorFunc;
    return ctorFunc;
  }
  var init_createErrorClass = __esm({
    "node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js"() {
    }
  });

  // node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js
  var UnsubscriptionError;
  var init_UnsubscriptionError = __esm({
    "node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js"() {
      init_createErrorClass();
      UnsubscriptionError = createErrorClass(function(_super) {
        return function UnsubscriptionErrorImpl(errors) {
          _super(this);
          this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function(err, i5) {
            return i5 + 1 + ") " + err.toString();
          }).join("\n  ") : "";
          this.name = "UnsubscriptionError";
          this.errors = errors;
        };
      });
    }
  });

  // node_modules/rxjs/dist/esm5/internal/util/arrRemove.js
  function arrRemove(arr, item) {
    if (arr) {
      var index = arr.indexOf(item);
      0 <= index && arr.splice(index, 1);
    }
  }
  var init_arrRemove = __esm({
    "node_modules/rxjs/dist/esm5/internal/util/arrRemove.js"() {
    }
  });

  // node_modules/rxjs/dist/esm5/internal/Subscription.js
  function isSubscription(value) {
    return value instanceof Subscription || value && "closed" in value && isFunction(value.remove) && isFunction(value.add) && isFunction(value.unsubscribe);
  }
  function execFinalizer(finalizer) {
    if (isFunction(finalizer)) {
      finalizer();
    } else {
      finalizer.unsubscribe();
    }
  }
  var Subscription, EMPTY_SUBSCRIPTION;
  var init_Subscription = __esm({
    "node_modules/rxjs/dist/esm5/internal/Subscription.js"() {
      init_tslib_es6();
      init_isFunction();
      init_UnsubscriptionError();
      init_arrRemove();
      Subscription = function() {
        function Subscription2(initialTeardown) {
          this.initialTeardown = initialTeardown;
          this.closed = false;
          this._parentage = null;
          this._finalizers = null;
        }
        Subscription2.prototype.unsubscribe = function() {
          var e_1, _a, e_2, _b;
          var errors;
          if (!this.closed) {
            this.closed = true;
            var _parentage = this._parentage;
            if (_parentage) {
              this._parentage = null;
              if (Array.isArray(_parentage)) {
                try {
                  for (var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
                    var parent_1 = _parentage_1_1.value;
                    parent_1.remove(this);
                  }
                } catch (e_1_1) {
                  e_1 = { error: e_1_1 };
                } finally {
                  try {
                    if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return)) _a.call(_parentage_1);
                  } finally {
                    if (e_1) throw e_1.error;
                  }
                }
              } else {
                _parentage.remove(this);
              }
            }
            var initialFinalizer = this.initialTeardown;
            if (isFunction(initialFinalizer)) {
              try {
                initialFinalizer();
              } catch (e5) {
                errors = e5 instanceof UnsubscriptionError ? e5.errors : [e5];
              }
            }
            var _finalizers = this._finalizers;
            if (_finalizers) {
              this._finalizers = null;
              try {
                for (var _finalizers_1 = __values(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
                  var finalizer = _finalizers_1_1.value;
                  try {
                    execFinalizer(finalizer);
                  } catch (err) {
                    errors = errors !== null && errors !== void 0 ? errors : [];
                    if (err instanceof UnsubscriptionError) {
                      errors = __spreadArray(__spreadArray([], __read(errors)), __read(err.errors));
                    } else {
                      errors.push(err);
                    }
                  }
                }
              } catch (e_2_1) {
                e_2 = { error: e_2_1 };
              } finally {
                try {
                  if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return)) _b.call(_finalizers_1);
                } finally {
                  if (e_2) throw e_2.error;
                }
              }
            }
            if (errors) {
              throw new UnsubscriptionError(errors);
            }
          }
        };
        Subscription2.prototype.add = function(teardown) {
          var _a;
          if (teardown && teardown !== this) {
            if (this.closed) {
              execFinalizer(teardown);
            } else {
              if (teardown instanceof Subscription2) {
                if (teardown.closed || teardown._hasParent(this)) {
                  return;
                }
                teardown._addParent(this);
              }
              (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
            }
          }
        };
        Subscription2.prototype._hasParent = function(parent) {
          var _parentage = this._parentage;
          return _parentage === parent || Array.isArray(_parentage) && _parentage.includes(parent);
        };
        Subscription2.prototype._addParent = function(parent) {
          var _parentage = this._parentage;
          this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
        };
        Subscription2.prototype._removeParent = function(parent) {
          var _parentage = this._parentage;
          if (_parentage === parent) {
            this._parentage = null;
          } else if (Array.isArray(_parentage)) {
            arrRemove(_parentage, parent);
          }
        };
        Subscription2.prototype.remove = function(teardown) {
          var _finalizers = this._finalizers;
          _finalizers && arrRemove(_finalizers, teardown);
          if (teardown instanceof Subscription2) {
            teardown._removeParent(this);
          }
        };
        Subscription2.EMPTY = function() {
          var empty = new Subscription2();
          empty.closed = true;
          return empty;
        }();
        return Subscription2;
      }();
      EMPTY_SUBSCRIPTION = Subscription.EMPTY;
    }
  });

  // node_modules/rxjs/dist/esm5/internal/config.js
  var config;
  var init_config = __esm({
    "node_modules/rxjs/dist/esm5/internal/config.js"() {
      config = {
        onUnhandledError: null,
        onStoppedNotification: null,
        Promise: void 0,
        useDeprecatedSynchronousErrorHandling: false,
        useDeprecatedNextContext: false
      };
    }
  });

  // node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js
  var timeoutProvider;
  var init_timeoutProvider = __esm({
    "node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js"() {
      init_tslib_es6();
      timeoutProvider = {
        setTimeout: function(handler, timeout) {
          var args = [];
          for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
          }
          var delegate = timeoutProvider.delegate;
          if (delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) {
            return delegate.setTimeout.apply(delegate, __spreadArray([handler, timeout], __read(args)));
          }
          return setTimeout.apply(void 0, __spreadArray([handler, timeout], __read(args)));
        },
        clearTimeout: function(handle) {
          var delegate = timeoutProvider.delegate;
          return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
        },
        delegate: void 0
      };
    }
  });

  // node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js
  function reportUnhandledError(err) {
    timeoutProvider.setTimeout(function() {
      var onUnhandledError = config.onUnhandledError;
      if (onUnhandledError) {
        onUnhandledError(err);
      } else {
        throw err;
      }
    });
  }
  var init_reportUnhandledError = __esm({
    "node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js"() {
      init_config();
      init_timeoutProvider();
    }
  });

  // node_modules/rxjs/dist/esm5/internal/util/noop.js
  function noop() {
  }
  var init_noop = __esm({
    "node_modules/rxjs/dist/esm5/internal/util/noop.js"() {
    }
  });

  // node_modules/rxjs/dist/esm5/internal/NotificationFactories.js
  function errorNotification(error) {
    return createNotification("E", void 0, error);
  }
  function nextNotification(value) {
    return createNotification("N", value, void 0);
  }
  function createNotification(kind, value, error) {
    return {
      kind,
      value,
      error
    };
  }
  var COMPLETE_NOTIFICATION;
  var init_NotificationFactories = __esm({
    "node_modules/rxjs/dist/esm5/internal/NotificationFactories.js"() {
      COMPLETE_NOTIFICATION = function() {
        return createNotification("C", void 0, void 0);
      }();
    }
  });

  // node_modules/rxjs/dist/esm5/internal/util/errorContext.js
  function errorContext(cb) {
    if (config.useDeprecatedSynchronousErrorHandling) {
      var isRoot = !context;
      if (isRoot) {
        context = { errorThrown: false, error: null };
      }
      cb();
      if (isRoot) {
        var _a = context, errorThrown = _a.errorThrown, error = _a.error;
        context = null;
        if (errorThrown) {
          throw error;
        }
      }
    } else {
      cb();
    }
  }
  function captureError(err) {
    if (config.useDeprecatedSynchronousErrorHandling && context) {
      context.errorThrown = true;
      context.error = err;
    }
  }
  var context;
  var init_errorContext = __esm({
    "node_modules/rxjs/dist/esm5/internal/util/errorContext.js"() {
      init_config();
      context = null;
    }
  });

  // node_modules/rxjs/dist/esm5/internal/Subscriber.js
  function bind(fn, thisArg) {
    return _bind.call(fn, thisArg);
  }
  function handleUnhandledError(error) {
    if (config.useDeprecatedSynchronousErrorHandling) {
      captureError(error);
    } else {
      reportUnhandledError(error);
    }
  }
  function defaultErrorHandler(err) {
    throw err;
  }
  function handleStoppedNotification(notification, subscriber) {
    var onStoppedNotification = config.onStoppedNotification;
    onStoppedNotification && timeoutProvider.setTimeout(function() {
      return onStoppedNotification(notification, subscriber);
    });
  }
  var Subscriber, _bind, ConsumerObserver, SafeSubscriber, EMPTY_OBSERVER;
  var init_Subscriber = __esm({
    "node_modules/rxjs/dist/esm5/internal/Subscriber.js"() {
      init_tslib_es6();
      init_isFunction();
      init_Subscription();
      init_config();
      init_reportUnhandledError();
      init_noop();
      init_NotificationFactories();
      init_timeoutProvider();
      init_errorContext();
      Subscriber = function(_super) {
        __extends(Subscriber2, _super);
        function Subscriber2(destination) {
          var _this = _super.call(this) || this;
          _this.isStopped = false;
          if (destination) {
            _this.destination = destination;
            if (isSubscription(destination)) {
              destination.add(_this);
            }
          } else {
            _this.destination = EMPTY_OBSERVER;
          }
          return _this;
        }
        Subscriber2.create = function(next, error, complete) {
          return new SafeSubscriber(next, error, complete);
        };
        Subscriber2.prototype.next = function(value) {
          if (this.isStopped) {
            handleStoppedNotification(nextNotification(value), this);
          } else {
            this._next(value);
          }
        };
        Subscriber2.prototype.error = function(err) {
          if (this.isStopped) {
            handleStoppedNotification(errorNotification(err), this);
          } else {
            this.isStopped = true;
            this._error(err);
          }
        };
        Subscriber2.prototype.complete = function() {
          if (this.isStopped) {
            handleStoppedNotification(COMPLETE_NOTIFICATION, this);
          } else {
            this.isStopped = true;
            this._complete();
          }
        };
        Subscriber2.prototype.unsubscribe = function() {
          if (!this.closed) {
            this.isStopped = true;
            _super.prototype.unsubscribe.call(this);
            this.destination = null;
          }
        };
        Subscriber2.prototype._next = function(value) {
          this.destination.next(value);
        };
        Subscriber2.prototype._error = function(err) {
          try {
            this.destination.error(err);
          } finally {
            this.unsubscribe();
          }
        };
        Subscriber2.prototype._complete = function() {
          try {
            this.destination.complete();
          } finally {
            this.unsubscribe();
          }
        };
        return Subscriber2;
      }(Subscription);
      _bind = Function.prototype.bind;
      ConsumerObserver = function() {
        function ConsumerObserver2(partialObserver) {
          this.partialObserver = partialObserver;
        }
        ConsumerObserver2.prototype.next = function(value) {
          var partialObserver = this.partialObserver;
          if (partialObserver.next) {
            try {
              partialObserver.next(value);
            } catch (error) {
              handleUnhandledError(error);
            }
          }
        };
        ConsumerObserver2.prototype.error = function(err) {
          var partialObserver = this.partialObserver;
          if (partialObserver.error) {
            try {
              partialObserver.error(err);
            } catch (error) {
              handleUnhandledError(error);
            }
          } else {
            handleUnhandledError(err);
          }
        };
        ConsumerObserver2.prototype.complete = function() {
          var partialObserver = this.partialObserver;
          if (partialObserver.complete) {
            try {
              partialObserver.complete();
            } catch (error) {
              handleUnhandledError(error);
            }
          }
        };
        return ConsumerObserver2;
      }();
      SafeSubscriber = function(_super) {
        __extends(SafeSubscriber2, _super);
        function SafeSubscriber2(observerOrNext, error, complete) {
          var _this = _super.call(this) || this;
          var partialObserver;
          if (isFunction(observerOrNext) || !observerOrNext) {
            partialObserver = {
              next: observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : void 0,
              error: error !== null && error !== void 0 ? error : void 0,
              complete: complete !== null && complete !== void 0 ? complete : void 0
            };
          } else {
            var context_1;
            if (_this && config.useDeprecatedNextContext) {
              context_1 = Object.create(observerOrNext);
              context_1.unsubscribe = function() {
                return _this.unsubscribe();
              };
              partialObserver = {
                next: observerOrNext.next && bind(observerOrNext.next, context_1),
                error: observerOrNext.error && bind(observerOrNext.error, context_1),
                complete: observerOrNext.complete && bind(observerOrNext.complete, context_1)
              };
            } else {
              partialObserver = observerOrNext;
            }
          }
          _this.destination = new ConsumerObserver(partialObserver);
          return _this;
        }
        return SafeSubscriber2;
      }(Subscriber);
      EMPTY_OBSERVER = {
        closed: true,
        next: noop,
        error: defaultErrorHandler,
        complete: noop
      };
    }
  });

  // node_modules/rxjs/dist/esm5/internal/symbol/observable.js
  var observable;
  var init_observable = __esm({
    "node_modules/rxjs/dist/esm5/internal/symbol/observable.js"() {
      observable = function() {
        return typeof Symbol === "function" && Symbol.observable || "@@observable";
      }();
    }
  });

  // node_modules/rxjs/dist/esm5/internal/util/identity.js
  function identity(x3) {
    return x3;
  }
  var init_identity = __esm({
    "node_modules/rxjs/dist/esm5/internal/util/identity.js"() {
    }
  });

  // node_modules/rxjs/dist/esm5/internal/util/pipe.js
  function pipeFromArray(fns) {
    if (fns.length === 0) {
      return identity;
    }
    if (fns.length === 1) {
      return fns[0];
    }
    return function piped(input) {
      return fns.reduce(function(prev, fn) {
        return fn(prev);
      }, input);
    };
  }
  var init_pipe = __esm({
    "node_modules/rxjs/dist/esm5/internal/util/pipe.js"() {
      init_identity();
    }
  });

  // node_modules/rxjs/dist/esm5/internal/Observable.js
  function getPromiseCtor(promiseCtor) {
    var _a;
    return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config.Promise) !== null && _a !== void 0 ? _a : Promise;
  }
  function isObserver(value) {
    return value && isFunction(value.next) && isFunction(value.error) && isFunction(value.complete);
  }
  function isSubscriber(value) {
    return value && value instanceof Subscriber || isObserver(value) && isSubscription(value);
  }
  var Observable;
  var init_Observable = __esm({
    "node_modules/rxjs/dist/esm5/internal/Observable.js"() {
      init_Subscriber();
      init_Subscription();
      init_observable();
      init_pipe();
      init_config();
      init_isFunction();
      init_errorContext();
      Observable = function() {
        function Observable2(subscribe) {
          if (subscribe) {
            this._subscribe = subscribe;
          }
        }
        Observable2.prototype.lift = function(operator) {
          var observable2 = new Observable2();
          observable2.source = this;
          observable2.operator = operator;
          return observable2;
        };
        Observable2.prototype.subscribe = function(observerOrNext, error, complete) {
          var _this = this;
          var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new SafeSubscriber(observerOrNext, error, complete);
          errorContext(function() {
            var _a = _this, operator = _a.operator, source = _a.source;
            subscriber.add(operator ? operator.call(subscriber, source) : source ? _this._subscribe(subscriber) : _this._trySubscribe(subscriber));
          });
          return subscriber;
        };
        Observable2.prototype._trySubscribe = function(sink) {
          try {
            return this._subscribe(sink);
          } catch (err) {
            sink.error(err);
          }
        };
        Observable2.prototype.forEach = function(next, promiseCtor) {
          var _this = this;
          promiseCtor = getPromiseCtor(promiseCtor);
          return new promiseCtor(function(resolve, reject) {
            var subscriber = new SafeSubscriber({
              next: function(value) {
                try {
                  next(value);
                } catch (err) {
                  reject(err);
                  subscriber.unsubscribe();
                }
              },
              error: reject,
              complete: resolve
            });
            _this.subscribe(subscriber);
          });
        };
        Observable2.prototype._subscribe = function(subscriber) {
          var _a;
          return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
        };
        Observable2.prototype[observable] = function() {
          return this;
        };
        Observable2.prototype.pipe = function() {
          var operations = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
          }
          return pipeFromArray(operations)(this);
        };
        Observable2.prototype.toPromise = function(promiseCtor) {
          var _this = this;
          promiseCtor = getPromiseCtor(promiseCtor);
          return new promiseCtor(function(resolve, reject) {
            var value;
            _this.subscribe(function(x3) {
              return value = x3;
            }, function(err) {
              return reject(err);
            }, function() {
              return resolve(value);
            });
          });
        };
        Observable2.create = function(subscribe) {
          return new Observable2(subscribe);
        };
        return Observable2;
      }();
    }
  });

  // node_modules/rxjs/dist/esm5/internal/util/lift.js
  function hasLift(source) {
    return isFunction(source === null || source === void 0 ? void 0 : source.lift);
  }
  function operate(init) {
    return function(source) {
      if (hasLift(source)) {
        return source.lift(function(liftedSource) {
          try {
            return init(liftedSource, this);
          } catch (err) {
            this.error(err);
          }
        });
      }
      throw new TypeError("Unable to lift unknown Observable type");
    };
  }
  var init_lift = __esm({
    "node_modules/rxjs/dist/esm5/internal/util/lift.js"() {
      init_isFunction();
    }
  });

  // node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js
  function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
    return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
  }
  var OperatorSubscriber;
  var init_OperatorSubscriber = __esm({
    "node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"() {
      init_tslib_es6();
      init_Subscriber();
      OperatorSubscriber = function(_super) {
        __extends(OperatorSubscriber2, _super);
        function OperatorSubscriber2(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
          var _this = _super.call(this, destination) || this;
          _this.onFinalize = onFinalize;
          _this.shouldUnsubscribe = shouldUnsubscribe;
          _this._next = onNext ? function(value) {
            try {
              onNext(value);
            } catch (err) {
              destination.error(err);
            }
          } : _super.prototype._next;
          _this._error = onError ? function(err) {
            try {
              onError(err);
            } catch (err2) {
              destination.error(err2);
            } finally {
              this.unsubscribe();
            }
          } : _super.prototype._error;
          _this._complete = onComplete ? function() {
            try {
              onComplete();
            } catch (err) {
              destination.error(err);
            } finally {
              this.unsubscribe();
            }
          } : _super.prototype._complete;
          return _this;
        }
        OperatorSubscriber2.prototype.unsubscribe = function() {
          var _a;
          if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            var closed_1 = this.closed;
            _super.prototype.unsubscribe.call(this);
            !closed_1 && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
          }
        };
        return OperatorSubscriber2;
      }(Subscriber);
    }
  });

  // node_modules/rxjs/dist/esm5/internal/util/ObjectUnsubscribedError.js
  var ObjectUnsubscribedError;
  var init_ObjectUnsubscribedError = __esm({
    "node_modules/rxjs/dist/esm5/internal/util/ObjectUnsubscribedError.js"() {
      init_createErrorClass();
      ObjectUnsubscribedError = createErrorClass(function(_super) {
        return function ObjectUnsubscribedErrorImpl() {
          _super(this);
          this.name = "ObjectUnsubscribedError";
          this.message = "object unsubscribed";
        };
      });
    }
  });

  // node_modules/rxjs/dist/esm5/internal/Subject.js
  var Subject, AnonymousSubject;
  var init_Subject = __esm({
    "node_modules/rxjs/dist/esm5/internal/Subject.js"() {
      init_tslib_es6();
      init_Observable();
      init_Subscription();
      init_ObjectUnsubscribedError();
      init_arrRemove();
      init_errorContext();
      Subject = function(_super) {
        __extends(Subject2, _super);
        function Subject2() {
          var _this = _super.call(this) || this;
          _this.closed = false;
          _this.currentObservers = null;
          _this.observers = [];
          _this.isStopped = false;
          _this.hasError = false;
          _this.thrownError = null;
          return _this;
        }
        Subject2.prototype.lift = function(operator) {
          var subject = new AnonymousSubject(this, this);
          subject.operator = operator;
          return subject;
        };
        Subject2.prototype._throwIfClosed = function() {
          if (this.closed) {
            throw new ObjectUnsubscribedError();
          }
        };
        Subject2.prototype.next = function(value) {
          var _this = this;
          errorContext(function() {
            var e_1, _a;
            _this._throwIfClosed();
            if (!_this.isStopped) {
              if (!_this.currentObservers) {
                _this.currentObservers = Array.from(_this.observers);
              }
              try {
                for (var _b = __values(_this.currentObservers), _c = _b.next(); !_c.done; _c = _b.next()) {
                  var observer = _c.value;
                  observer.next(value);
                }
              } catch (e_1_1) {
                e_1 = { error: e_1_1 };
              } finally {
                try {
                  if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                } finally {
                  if (e_1) throw e_1.error;
                }
              }
            }
          });
        };
        Subject2.prototype.error = function(err) {
          var _this = this;
          errorContext(function() {
            _this._throwIfClosed();
            if (!_this.isStopped) {
              _this.hasError = _this.isStopped = true;
              _this.thrownError = err;
              var observers = _this.observers;
              while (observers.length) {
                observers.shift().error(err);
              }
            }
          });
        };
        Subject2.prototype.complete = function() {
          var _this = this;
          errorContext(function() {
            _this._throwIfClosed();
            if (!_this.isStopped) {
              _this.isStopped = true;
              var observers = _this.observers;
              while (observers.length) {
                observers.shift().complete();
              }
            }
          });
        };
        Subject2.prototype.unsubscribe = function() {
          this.isStopped = this.closed = true;
          this.observers = this.currentObservers = null;
        };
        Object.defineProperty(Subject2.prototype, "observed", {
          get: function() {
            var _a;
            return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
          },
          enumerable: false,
          configurable: true
        });
        Subject2.prototype._trySubscribe = function(subscriber) {
          this._throwIfClosed();
          return _super.prototype._trySubscribe.call(this, subscriber);
        };
        Subject2.prototype._subscribe = function(subscriber) {
          this._throwIfClosed();
          this._checkFinalizedStatuses(subscriber);
          return this._innerSubscribe(subscriber);
        };
        Subject2.prototype._innerSubscribe = function(subscriber) {
          var _this = this;
          var _a = this, hasError = _a.hasError, isStopped = _a.isStopped, observers = _a.observers;
          if (hasError || isStopped) {
            return EMPTY_SUBSCRIPTION;
          }
          this.currentObservers = null;
          observers.push(subscriber);
          return new Subscription(function() {
            _this.currentObservers = null;
            arrRemove(observers, subscriber);
          });
        };
        Subject2.prototype._checkFinalizedStatuses = function(subscriber) {
          var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, isStopped = _a.isStopped;
          if (hasError) {
            subscriber.error(thrownError);
          } else if (isStopped) {
            subscriber.complete();
          }
        };
        Subject2.prototype.asObservable = function() {
          var observable2 = new Observable();
          observable2.source = this;
          return observable2;
        };
        Subject2.create = function(destination, source) {
          return new AnonymousSubject(destination, source);
        };
        return Subject2;
      }(Observable);
      AnonymousSubject = function(_super) {
        __extends(AnonymousSubject2, _super);
        function AnonymousSubject2(destination, source) {
          var _this = _super.call(this) || this;
          _this.destination = destination;
          _this.source = source;
          return _this;
        }
        AnonymousSubject2.prototype.next = function(value) {
          var _a, _b;
          (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.call(_a, value);
        };
        AnonymousSubject2.prototype.error = function(err) {
          var _a, _b;
          (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, err);
        };
        AnonymousSubject2.prototype.complete = function() {
          var _a, _b;
          (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 ? void 0 : _b.call(_a);
        };
        AnonymousSubject2.prototype._subscribe = function(subscriber) {
          var _a, _b;
          return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : EMPTY_SUBSCRIPTION;
        };
        return AnonymousSubject2;
      }(Subject);
    }
  });

  // node_modules/rxjs/dist/esm5/internal/BehaviorSubject.js
  var BehaviorSubject;
  var init_BehaviorSubject = __esm({
    "node_modules/rxjs/dist/esm5/internal/BehaviorSubject.js"() {
      init_tslib_es6();
      init_Subject();
      BehaviorSubject = function(_super) {
        __extends(BehaviorSubject2, _super);
        function BehaviorSubject2(_value) {
          var _this = _super.call(this) || this;
          _this._value = _value;
          return _this;
        }
        Object.defineProperty(BehaviorSubject2.prototype, "value", {
          get: function() {
            return this.getValue();
          },
          enumerable: false,
          configurable: true
        });
        BehaviorSubject2.prototype._subscribe = function(subscriber) {
          var subscription = _super.prototype._subscribe.call(this, subscriber);
          !subscription.closed && subscriber.next(this._value);
          return subscription;
        };
        BehaviorSubject2.prototype.getValue = function() {
          var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, _value = _a._value;
          if (hasError) {
            throw thrownError;
          }
          this._throwIfClosed();
          return _value;
        };
        BehaviorSubject2.prototype.next = function(value) {
          _super.prototype.next.call(this, this._value = value);
        };
        return BehaviorSubject2;
      }(Subject);
    }
  });

  // node_modules/rxjs/dist/esm5/internal/operators/map.js
  function map(project, thisArg) {
    return operate(function(source, subscriber) {
      var index = 0;
      source.subscribe(createOperatorSubscriber(subscriber, function(value) {
        subscriber.next(project.call(thisArg, value, index++));
      }));
    });
  }
  var init_map = __esm({
    "node_modules/rxjs/dist/esm5/internal/operators/map.js"() {
      init_lift();
      init_OperatorSubscriber();
    }
  });

  // node_modules/rxjs/dist/esm5/internal/types.js
  var init_types = __esm({
    "node_modules/rxjs/dist/esm5/internal/types.js"() {
    }
  });

  // node_modules/rxjs/dist/esm5/index.js
  var init_esm5 = __esm({
    "node_modules/rxjs/dist/esm5/index.js"() {
      init_BehaviorSubject();
      init_types();
    }
  });

  // node_modules/rxjs/dist/esm5/operators/index.js
  var init_operators = __esm({
    "node_modules/rxjs/dist/esm5/operators/index.js"() {
      init_map();
    }
  });

  // src/reusable/RxPreact.tsx
  var countSubject, messageSubject, doubleCount$, RxPreact, styles5, RxPreact_default;
  var init_RxPreact = __esm({
    "src/reusable/RxPreact.tsx"() {
      "use strict";
      init_preact_module();
      init_esm5();
      init_operators();
      init_goober_modern();
      countSubject = new BehaviorSubject(0);
      messageSubject = new BehaviorSubject("");
      doubleCount$ = countSubject.pipe(map((count) => count * 2));
      RxPreact = class extends x {
        state = {
          count: 0,
          doubleCount: 0,
          message: ""
        };
        componentDidMount() {
          this.countSub = countSubject.subscribe((count) => {
            this.setState({ count });
          });
          this.doubleCountSub = doubleCount$.subscribe((doubleCount) => {
            this.setState({ doubleCount });
          });
          this.messageSub = messageSubject.subscribe((message) => {
            this.setState({ message });
          });
        }
        componentWillUnmount() {
          this.countSub.unsubscribe();
          this.doubleCountSub.unsubscribe();
          this.messageSub.unsubscribe();
        }
        // Handlers for state updates
        increment = () => {
          countSubject.next(countSubject.getValue() + 1);
        };
        updateMessage = (e5) => {
          messageSubject.next(e5.target.value);
        };
        render() {
          return _("div", { class: styles5.container }, [
            _("h1", { class: styles5.heading }, "RxJS in Preact with Goober"),
            _("div", { class: styles5.counter }, `Count: ${this.state.count}`),
            _("div", { class: styles5.counter }, `Double Count: ${this.state.doubleCount}`),
            _("button", { class: styles5.button, onClick: this.increment }, "Increment"),
            _("div", null, [
              _("input", {
                class: styles5.input,
                type: "text",
                value: this.state.message,
                onInput: this.updateMessage,
                placeholder: "Type a message"
              }),
              _("p", { class: styles5.message }, `Message: ${this.state.message}`)
            ])
          ]);
        }
      };
      styles5 = {
        container: u3`
        font-family: Arial, sans-serif;
        padding: 20px;
        max-width: 600px;
        margin: 0 auto;
      `,
        heading: u3`
        font-size: 1.5em;
        margin-bottom: 15px;
        color: #333;
      `,
        counter: u3`
        font-size: 1.2em;
        margin: 10px 0;
        color: #0066cc;
      `,
        button: u3`
        padding: 8px 16px;
        margin: 5px;
        background-color: #0066cc;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        &:hover {
          background-color: #0052a3;
        }
      `,
        input: u3`
        padding: 8px;
        margin: 5px 0;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 100%;
        box-sizing: border-box;
      `,
        message: u3`
        margin-top: 10px;
        color: #333;
      `
      };
      RxPreact_default = RxPreact;
    }
  });

  // src/use-cases/components.tsx
  var components_exports = {};
  __export(components_exports, {
    default: () => components_default
  });
  var components_default;
  var init_components = __esm({
    "src/use-cases/components.tsx"() {
      "use strict";
      init_preact_module();
      init_ModalDialog();
      init_Accordion();
      init_BottomSheetDrawer();
      init_RxPreact();
      components_default = () => {
        return /* @__PURE__ */ _(k, null, /* @__PURE__ */ _("div", null, "Components"), /* @__PURE__ */ _(RxPreact_default, null), /* @__PURE__ */ _("hr", null), /* @__PURE__ */ _(ModalDialog, null), /* @__PURE__ */ _("hr", null), /* @__PURE__ */ _(Accordion, null), /* @__PURE__ */ _("hr", null), /* @__PURE__ */ _(BottomSheetDrawer, null));
      };
    }
  });

  // src/use-cases/articles.tsx
  var articles_exports = {};
  __export(articles_exports, {
    default: () => articles_default
  });
  var articles_default;
  var init_articles = __esm({
    "src/use-cases/articles.tsx"() {
      "use strict";
      init_preact_module();
      articles_default = () => /* @__PURE__ */ _("div", null, "Articles");
    }
  });

  // src/reusable/LyricsEditor.tsx
  function LyricsEditor() {
    const canvasRef = A2(null);
    const audioRef = A2(null);
    const audioContextRef = A2(null);
    const audioBufferRef2 = A2(null);
    const sourceRef = A2(null);
    y2(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const drawWaveform = () => {
        const w4 = canvas.width = canvas.offsetWidth;
        const h6 = canvas.height = canvas.offsetHeight;
        ctx.clearRect(0, 0, w4, h6);
        if (!audioBufferRef2.current) return;
        const buffer = audioBufferRef2.current;
        const channelData = buffer.getChannelData(0);
        const step = Math.ceil(channelData.length / sampleDensity.value);
        const amp = h6 / 2;
        ctx.beginPath();
        ctx.strokeStyle = waveColor.value;
        ctx.lineWidth = 2;
        for (let i5 = 0; i5 < sampleDensity.value; i5++) {
          const x3 = i5 / sampleDensity.value * w4;
          const sampleIdx = Math.floor(i5 * step);
          const y5 = amp + channelData[sampleIdx] * amplitudeScale.value;
          if (i5 === 0) {
            ctx.moveTo(x3, y5);
          } else {
            ctx.lineTo(x3, y5);
          }
        }
        ctx.stroke();
      };
      const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (!file) return;
        if (!audioContextRef.current) {
          audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
        }
        try {
          const arrayBuffer = await file.arrayBuffer();
          audioBufferRef2.current = await audioContextRef.current.decodeAudioData(arrayBuffer);
          audioRef.current.src = URL.createObjectURL(file);
          drawWaveform();
        } catch (error) {
          console.error("Error processing audio file:", error);
        }
      };
      const togglePlayback = () => {
        if (!audioBufferRef2.current) return;
        if (isPlaying.value) {
          if (sourceRef.current) {
            sourceRef.current.stop();
            sourceRef.current = null;
          }
          isPlaying.value = false;
        } else {
          sourceRef.current = audioContextRef.current.createBufferSource();
          sourceRef.current.buffer = audioBufferRef2.current;
          sourceRef.current.connect(audioContextRef.current.destination);
          sourceRef.current.start();
          isPlaying.value = true;
          sourceRef.current.onended = () => {
            isPlaying.value = false;
            sourceRef.current = null;
          };
        }
      };
      const unsub = [waveColor, amplitudeScale, sampleDensity].map((s5) => s5.subscribe(drawWaveform));
      drawWaveform();
      const fileInput = document.querySelector('input[type="file"]');
      fileInput.addEventListener("change", handleFileChange);
      const playButton = document.querySelector("#playButton");
      playButton.addEventListener("click", togglePlayback);
      return () => {
        unsub.forEach((u5) => u5());
        fileInput.removeEventListener("change", handleFileChange);
        playButton.removeEventListener("click", togglePlayback);
        if (sourceRef.current) {
          sourceRef.current.stop();
          sourceRef.current = null;
        }
        if (audioContextRef.current) {
          audioContextRef.current.close();
          audioContextRef.current = null;
        }
      };
    }, []);
    return /* @__PURE__ */ _("div", { class: styles6.dashboard }, /* @__PURE__ */ _("aside", { class: styles6.sidebar }, /* @__PURE__ */ _("label", { class: styles6.label }, "Audio File", /* @__PURE__ */ _("input", { type: "file", accept: "audio/*" })), /* @__PURE__ */ _("label", { class: styles6.label }, "Wave Color", /* @__PURE__ */ _(
      "input",
      {
        type: "color",
        value: waveColor.value,
        onInput: (e5) => waveColor.value = e5.target.value
      }
    )), /* @__PURE__ */ _("label", { class: styles6.label }, "Amplitude Scale", /* @__PURE__ */ _(
      "input",
      {
        type: "range",
        min: "10",
        max: "300",
        value: amplitudeScale.value,
        onInput: (e5) => amplitudeScale.value = +e5.target.value
      }
    )), /* @__PURE__ */ _("label", { class: styles6.label }, "Sample Density", /* @__PURE__ */ _(
      "input",
      {
        type: "range",
        min: "100",
        max: "5000",
        step: "100",
        value: sampleDensity.value,
        onInput: (e5) => sampleDensity.value = +e5.target.value
      }
    )), /* @__PURE__ */ _("button", { id: "playButton", class: styles6.button }, isPlaying.value ? "Pause" : "Play")), /* @__PURE__ */ _("main", { class: styles6.canvasContainer }, /* @__PURE__ */ _("canvas", { class: styles6.canvas, ref: canvasRef }), /* @__PURE__ */ _("audio", { ref: audioRef, style: "display: none;" })));
  }
  var waveColor, amplitudeScale, sampleDensity, isPlaying, styles6;
  var init_LyricsEditor = __esm({
    "src/reusable/LyricsEditor.tsx"() {
      "use strict";
      init_preact_module();
      init_signals_module();
      init_hooks_module();
      init_goober_modern();
      waveColor = d3("#0099ff");
      amplitudeScale = d3(100);
      sampleDensity = d3(1e3);
      isPlaying = d3(false);
      styles6 = {
        dashboard: u3`
    display: flex;
    height: 100vh;
    overflow: hidden;
  `,
        sidebar: u3`
    width: 260px;
    background: #f0f0f0;
    padding: 1rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-right: 1px solid #ccc;
  `,
        label: u3`
    display: flex;
    flex-direction: column;
    font-size: 0.9rem;
    gap: 0.3rem;
  `,
        canvasContainer: u3`
    flex: 1;
    position: relative;
  `,
        canvas: u3`
    width: 100%;
    height: 100%;
    display: block;
  `,
        button: u3`
    padding: 0.5rem;
    font-size: 1rem;
    cursor: pointer;
    background: #0099ff;
    color: white;
    border: none;
    border-radius: 4px;
    &:hover {
      background: #0077cc;
    }
  `
      };
    }
  });

  // src/use-cases/lyrics-editor.tsx
  var lyrics_editor_exports = {};
  __export(lyrics_editor_exports, {
    default: () => lyrics_editor_default
  });
  var PageLyricsEditor, lyrics_editor_default;
  var init_lyrics_editor = __esm({
    "src/use-cases/lyrics-editor.tsx"() {
      "use strict";
      init_preact_module();
      init_LyricsEditor();
      PageLyricsEditor = () => {
        return /* @__PURE__ */ _("div", null, /* @__PURE__ */ _(LyricsEditor, null));
      };
      lyrics_editor_default = PageLyricsEditor;
    }
  });

  // src/reusable/CircularWaveform.tsx
  function CircularWaveform() {
    const canvasRef = A2(null);
    const audioRef = A2(null);
    const audioContextRef = A2(null);
    const analyserRef = A2(null);
    const sourceRef = A2(null);
    const animationRef = A2(null);
    const rotationAngle = A2(0);
    const dataArrayRef = A2(null);
    y2(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const initAudioContext = () => {
        if (!audioContextRef.current) {
          audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
          analyserRef.current = audioContextRef.current.createAnalyser();
          analyserRef.current.smoothingTimeConstant = smoothing.value;
          analyserRef.current.fftSize = fftSize.value;
          dataArrayRef.current = new Uint8Array(analyserRef.current.frequencyBinCount);
        }
      };
      const drawReactiveWaveform = () => {
        const w4 = canvas.width = canvas.offsetWidth;
        const h6 = canvas.height = canvas.offsetHeight;
        ctx.clearRect(0, 0, w4, h6);
        if (!analyserRef.current) return;
        analyserRef.current.getByteFrequencyData(dataArrayRef.current);
        const centerX = w4 / 2;
        const centerY = h6 / 2;
        const radius = circleRadius.value;
        const data = dataArrayRef.current;
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(rotationAngle.current * Math.PI / 180);
        ctx.beginPath();
        ctx.strokeStyle = waveColor2.value;
        ctx.lineWidth = 2;
        for (let i5 = 0; i5 < data.length; i5++) {
          const angle = i5 / data.length * Math.PI * 2;
          const amplitude = data[i5] / 255 * amplitudeScale2.value * 100;
          const x3 = Math.cos(angle) * (radius + amplitude);
          const y5 = Math.sin(angle) * (radius + amplitude);
          if (i5 === 0) {
            ctx.moveTo(x3, y5);
          } else {
            ctx.lineTo(x3, y5);
          }
        }
        ctx.closePath();
        ctx.stroke();
        ctx.restore();
        rotationAngle.current += rotationSpeed.value;
        if (rotationAngle.current >= 360) {
          rotationAngle.current -= 360;
        }
        animationRef.current = requestAnimationFrame(drawReactiveWaveform);
      };
      const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (!file) return;
        initAudioContext();
        try {
          const arrayBuffer = await file.arrayBuffer();
          const audioBuffer = await audioContextRef.current.decodeAudioData(arrayBuffer);
          audioRef.current.src = URL.createObjectURL(file);
          if (!animationRef.current) {
            drawReactiveWaveform();
          }
        } catch (error) {
          console.error("Error processing audio file:", error);
        }
      };
      const togglePlayback = () => {
        if (!audioContextRef.current) initAudioContext();
        if (isPlaying2.value) {
          if (sourceRef.current) {
            sourceRef.current.stop();
            sourceRef.current = null;
          }
          isPlaying2.value = false;
        } else {
          sourceRef.current = audioContextRef.current.createBufferSource();
          sourceRef.current.buffer = audioBufferRef.current;
          sourceRef.current.connect(analyserRef.current);
          analyserRef.current.connect(audioContextRef.current.destination);
          sourceRef.current.start();
          isPlaying2.value = true;
          sourceRef.current.onended = () => {
            isPlaying2.value = false;
            sourceRef.current = null;
          };
        }
      };
      const unsub = [
        waveColor2,
        amplitudeScale2,
        circleRadius,
        rotationSpeed,
        smoothing,
        fftSize
      ].map((s5) => s5.subscribe(() => {
        if (analyserRef.current) {
          analyserRef.current.smoothingTimeConstant = smoothing.value;
          analyserRef.current.fftSize = fftSize.value;
          dataArrayRef.current = new Uint8Array(analyserRef.current.frequencyBinCount);
        }
      }));
      const fileInput = document.querySelector('input[type="file"]');
      fileInput.addEventListener("change", handleFileChange);
      const playButton = document.querySelector("#playButton");
      playButton.addEventListener("click", togglePlayback);
      drawReactiveWaveform();
      return () => {
        unsub.forEach((u5) => u5());
        fileInput.removeEventListener("change", handleFileChange);
        playButton.removeEventListener("click", togglePlayback);
        cancelAnimationFrame(animationRef.current);
        if (sourceRef.current) {
          sourceRef.current.stop();
          sourceRef.current = null;
        }
        if (audioContextRef.current) {
          audioContextRef.current.close();
          audioContextRef.current = null;
        }
      };
    }, []);
    return /* @__PURE__ */ _("div", { class: styles7.dashboard }, /* @__PURE__ */ _("aside", { class: styles7.sidebar }, /* @__PURE__ */ _("label", { class: styles7.label }, "Audio File", /* @__PURE__ */ _("input", { type: "file", accept: "audio/*" })), /* @__PURE__ */ _("label", { class: styles7.label }, "Wave Color", /* @__PURE__ */ _(
      "input",
      {
        type: "color",
        value: waveColor2.value,
        onInput: (e5) => waveColor2.value = e5.target.value
      }
    )), /* @__PURE__ */ _("label", { class: styles7.label }, "Amplitude Scale", /* @__PURE__ */ _(
      "input",
      {
        type: "range",
        min: "0.1",
        max: "3",
        step: "0.1",
        value: amplitudeScale2.value,
        onInput: (e5) => amplitudeScale2.value = +e5.target.value
      }
    )), /* @__PURE__ */ _("label", { class: styles7.label }, "Circle Radius", /* @__PURE__ */ _(
      "input",
      {
        type: "range",
        min: "50",
        max: "300",
        value: circleRadius.value,
        onInput: (e5) => circleRadius.value = +e5.target.value
      }
    )), /* @__PURE__ */ _("label", { class: styles7.label }, "Rotation Speed", /* @__PURE__ */ _(
      "input",
      {
        type: "range",
        min: "-5",
        max: "5",
        step: "0.1",
        value: rotationSpeed.value,
        onInput: (e5) => rotationSpeed.value = +e5.target.value
      }
    )), /* @__PURE__ */ _("label", { class: styles7.label }, "Smoothing", /* @__PURE__ */ _(
      "input",
      {
        type: "range",
        min: "0",
        max: "0.99",
        step: "0.01",
        value: smoothing.value,
        onInput: (e5) => smoothing.value = +e5.target.value
      }
    )), /* @__PURE__ */ _("label", { class: styles7.label }, "FFT Size", /* @__PURE__ */ _(
      "select",
      {
        value: fftSize.value,
        onInput: (e5) => fftSize.value = +e5.target.value
      },
      /* @__PURE__ */ _("option", { value: "64" }, "64 (Low Detail)"),
      /* @__PURE__ */ _("option", { value: "128" }, "128"),
      /* @__PURE__ */ _("option", { value: "256" }, "256 (Default)"),
      /* @__PURE__ */ _("option", { value: "512" }, "512"),
      /* @__PURE__ */ _("option", { value: "1024" }, "1024 (High Detail)"),
      /* @__PURE__ */ _("option", { value: "2048" }, "2048 (Very High Detail)")
    )), /* @__PURE__ */ _("button", { id: "playButton", class: styles7.button }, isPlaying2.value ? "Pause" : "Play")), /* @__PURE__ */ _("main", { class: styles7.canvasContainer }, /* @__PURE__ */ _("canvas", { class: styles7.canvas, ref: canvasRef }), /* @__PURE__ */ _("audio", { ref: audioRef, style: "display: none;" })));
  }
  var waveColor2, amplitudeScale2, circleRadius, rotationSpeed, smoothing, fftSize, isPlaying2, styles7;
  var init_CircularWaveform = __esm({
    "src/reusable/CircularWaveform.tsx"() {
      "use strict";
      init_preact_module();
      init_signals_module();
      init_hooks_module();
      init_goober_modern();
      waveColor2 = d3("#0099ff");
      amplitudeScale2 = d3(1.5);
      circleRadius = d3(150);
      rotationSpeed = d3(0.5);
      smoothing = d3(0.7);
      fftSize = d3(256);
      isPlaying2 = d3(false);
      styles7 = {
        dashboard: u3`
    display: flex;
    height: 100vh;
    overflow: hidden;
  `,
        sidebar: u3`
    width: 260px;
    background: #f0f0f0;
    padding: 1rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-right: 1px solid #ccc;
    overflow-y: auto;
  `,
        label: u3`
    display: flex;
    flex-direction: column;
    font-size: 0.9rem;
    gap: 0.3rem;
  `,
        canvasContainer: u3`
    flex: 1;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #000;
  `,
        canvas: u3`
    width: 90%;
    height: 90%;
    display: block;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    box-shadow: 0 0 20px rgba(0, 153, 255, 0.5);
  `,
        button: u3`
    padding: 0.5rem;
    font-size: 1rem;
    cursor: pointer;
    background: #0099ff;
    color: white;
    border: none;
    border-radius: 4px;
    &:hover {
      background: #0077cc;
    }
  `
      };
    }
  });

  // src/use-cases/export-waveform.tsx
  var export_waveform_exports = {};
  __export(export_waveform_exports, {
    default: () => export_waveform_default
  });
  var styles8, export_waveform_default;
  var init_export_waveform = __esm({
    "src/use-cases/export-waveform.tsx"() {
      "use strict";
      init_preact_module();
      init_CircularWaveform();
      init_goober_modern();
      styles8 = {
        title: u3`
    font-size: 20px font-weight: bold;
  `
      };
      export_waveform_default = () => {
        return /* @__PURE__ */ _("div", null, /* @__PURE__ */ _("div", { className: styles8.title }, "export waveform"), /* @__PURE__ */ _(CircularWaveform, null));
      };
    }
  });

  // renderer.jsx
  init_preact_module();

  // src/App.tsx
  init_preact_module();
  init_hooks_module();

  // node_modules/preact-iso/src/router.js
  init_preact_module();
  init_hooks_module();
  var push;
  var scope;
  var UPDATE = (state, url) => {
    push = void 0;
    if (url && url.type === "click") {
      if (url.ctrlKey || url.metaKey || url.altKey || url.shiftKey || url.button !== 0) {
        return state;
      }
      const link = url.composedPath().find((el) => el.nodeName == "A" && el.href), href = link && link.getAttribute("href");
      if (!link || link.origin != location.origin || /^#/.test(href) || !/^(_?self)?$/i.test(link.target) || scope && (typeof scope == "string" ? !href.startsWith(scope) : !scope.test(href))) {
        return state;
      }
      push = true;
      url.preventDefault();
      url = link.href.replace(location.origin, "");
    } else if (typeof url === "string") {
      push = true;
    } else if (url && url.url) {
      push = !url.replace;
      url = url.url;
    } else {
      url = location.pathname + location.search;
    }
    if (push === true) history.pushState(null, "", url);
    else if (push === false) history.replaceState(null, "", url);
    return url;
  };
  var exec = (url, route, matches = {}) => {
    url = url.split("/").filter(Boolean);
    route = (route || "").split("/").filter(Boolean);
    if (!matches.params) matches.params = {};
    for (let i5 = 0, val, rest; i5 < Math.max(url.length, route.length); i5++) {
      let [, m4, param, flag] = (route[i5] || "").match(/^(:?)(.*?)([+*?]?)$/);
      val = url[i5];
      if (!m4 && param == val) continue;
      if (!m4 && val && flag == "*") {
        matches.rest = "/" + url.slice(i5).map(decodeURIComponent).join("/");
        break;
      }
      if (!m4 || !val && flag != "?" && flag != "*") return;
      rest = flag == "+" || flag == "*";
      if (rest) val = url.slice(i5).map(decodeURIComponent).join("/") || void 0;
      else if (val) val = decodeURIComponent(val);
      matches.params[param] = val;
      if (!(param in matches)) matches[param] = val;
      if (rest) break;
    }
    return matches;
  };
  function LocationProvider(props) {
    const [url, route] = h2(UPDATE, props.url || location.pathname + location.search);
    if (props.scope) scope = props.scope;
    const wasPush = push === true;
    const value = T2(() => {
      const u5 = new URL(url, location.origin);
      const path = u5.pathname.replace(/\/+$/g, "") || "/";
      return {
        url,
        path,
        query: Object.fromEntries(u5.searchParams),
        route: (url2, replace) => route({ url: url2, replace }),
        wasPush
      };
    }, [url]);
    _2(() => {
      addEventListener("click", route);
      addEventListener("popstate", route);
      return () => {
        removeEventListener("click", route);
        removeEventListener("popstate", route);
      };
    }, []);
    return _(LocationProvider.ctx.Provider, { value }, props.children);
  }
  var RESOLVED = Promise.resolve();
  function Router(props) {
    const [c5, update] = h2((c6) => c6 + 1, 0);
    const { url, query, wasPush, path } = useLocation();
    if (!url) {
      throw new Error(`preact-iso's <Router> must be used within a <LocationProvider>, see: https://github.com/preactjs/preact-iso#locationprovider`);
    }
    const { rest = path, params = {} } = x2(RouteContext);
    const isLoading = A2(false);
    const prevRoute = A2(path);
    const count = A2(0);
    const cur = (
      /** @type {RefObject<VNode<any>>} */
      A2()
    );
    const prev = (
      /** @type {RefObject<VNode<any>>} */
      A2()
    );
    const pendingBase = (
      /** @type {RefObject<Element | Text>} */
      A2()
    );
    const hasEverCommitted = A2(false);
    const didSuspend = (
      /** @type {RefObject<boolean>} */
      A2()
    );
    didSuspend.current = false;
    let pathRoute, defaultRoute, matchProps;
    H(props.children).some((vnode) => {
      const matches = exec(rest, vnode.props.path, matchProps = { ...vnode.props, path: rest, query, params, rest: "" });
      if (matches) return pathRoute = K(vnode, matchProps);
      if (vnode.props.default) defaultRoute = K(vnode, matchProps);
    });
    let incoming = pathRoute || defaultRoute;
    const isHydratingSuspense = cur.current && cur.current.__u & MODE_HYDRATE && cur.current.__u & MODE_SUSPENDED;
    const isHydratingBool = cur.current && cur.current.__h;
    const routeChanged = T2(() => {
      prev.current = cur.current;
      cur.current = /** @type {VNode<any>} */
      _(RouteContext.Provider, { value: matchProps }, incoming);
      const outgoing = prev.current && prev.current.props.children;
      if (!outgoing || !incoming || incoming.type !== outgoing.type || incoming.props.component !== outgoing.props.component) {
        if (this.__v && this.__v.__k) this.__v.__k.reverse();
        count.current++;
        return true;
      }
      return false;
    }, [url, JSON.stringify(matchProps)]);
    if (isHydratingSuspense) {
      cur.current.__u |= MODE_HYDRATE;
      cur.current.__u |= MODE_SUSPENDED;
    } else if (isHydratingBool) {
      cur.current.__h = true;
    }
    const p5 = prev.current;
    prev.current = null;
    this.__c = (e5, suspendedVNode) => {
      didSuspend.current = true;
      prev.current = p5;
      if (props.onLoadStart) props.onLoadStart(url);
      isLoading.current = true;
      let c6 = count.current;
      e5.then(() => {
        if (c6 !== count.current) return;
        prev.current = null;
        if (cur.current) {
          if (suspendedVNode.__h) {
            cur.current.__h = suspendedVNode.__h;
          }
          if (suspendedVNode.__u & MODE_SUSPENDED) {
            cur.current.__u |= MODE_SUSPENDED;
          }
          if (suspendedVNode.__u & MODE_HYDRATE) {
            cur.current.__u |= MODE_HYDRATE;
          }
        }
        RESOLVED.then(update);
      });
    };
    _2(() => {
      const currentDom = this.__v && this.__v.__e;
      if (didSuspend.current) {
        if (!hasEverCommitted.current && !pendingBase.current) {
          pendingBase.current = currentDom;
        }
        return;
      }
      if (!hasEverCommitted.current && pendingBase.current) {
        if (pendingBase.current !== currentDom) pendingBase.current.remove();
        pendingBase.current = null;
      }
      hasEverCommitted.current = true;
      if (prevRoute.current !== path) {
        if (wasPush) scrollTo(0, 0);
        if (props.onRouteChange) props.onRouteChange(url);
        prevRoute.current = path;
      }
      if (props.onLoadEnd && isLoading.current) props.onLoadEnd(url);
      isLoading.current = false;
    }, [path, wasPush, c5]);
    return routeChanged ? [_(RenderRef, { r: cur }), _(RenderRef, { r: prev })] : _(RenderRef, { r: cur });
  }
  var MODE_HYDRATE = 1 << 5;
  var MODE_SUSPENDED = 1 << 7;
  var RenderRef = ({ r: r4 }) => r4.current;
  Router.Provider = LocationProvider;
  LocationProvider.ctx = Q(
    /** @type {import('./router.d.ts').LocationHook & { wasPush: boolean }} */
    {}
  );
  var RouteContext = Q(
    /** @type {import('./router.d.ts').RouteHook & { rest: string }} */
    {}
  );
  var Route = (props) => _(props.component, props);
  var useLocation = () => x2(LocationProvider.ctx);

  // node_modules/preact-iso/src/lazy.js
  init_preact_module();
  init_hooks_module();
  var oldDiff = l.__b;
  l.__b = (vnode) => {
    if (vnode.type && vnode.type._forwarded && vnode.ref) {
      vnode.props.ref = vnode.ref;
      vnode.ref = null;
    }
    if (oldDiff) oldDiff(vnode);
  };
  function lazy(load) {
    let p5, c5;
    const loadModule = () => load().then((m4) => c5 = m4 && m4.default || m4);
    const LazyComponent = (props) => {
      const [, update] = d2(0);
      const r4 = A2(c5);
      if (!p5) p5 = loadModule();
      if (c5 !== void 0) return _(c5, props);
      if (!r4.current) r4.current = p5.then(() => update(1));
      throw p5;
    };
    LazyComponent.preload = () => {
      if (!p5) p5 = loadModule();
      return p5;
    };
    LazyComponent._forwarded = true;
    return LazyComponent;
  }
  var oldCatchError = l.__e;
  l.__e = (err, newVNode, oldVNode) => {
    if (err && err.then) {
      let v4 = newVNode;
      while (v4 = v4.__) {
        if (v4.__c && v4.__c.__c) {
          if (newVNode.__e == null) {
            newVNode.__c.__z = [oldVNode.__e];
            newVNode.__e = oldVNode.__e;
            newVNode.__k = oldVNode.__k;
          }
          if (!newVNode.__k) newVNode.__k = [];
          return v4.__c.__c(err, newVNode);
        }
      }
    }
    if (oldCatchError) oldCatchError(err, newVNode, oldVNode);
  };
  function ErrorBoundary(props) {
    this.__c = childDidSuspend;
    this.componentDidCatch = props.onError;
    return props.children;
  }
  function childDidSuspend(err) {
    err.then(() => this.forceUpdate());
  }

  // node_modules/preact-iso/src/hydrate.js
  init_preact_module();

  // src/App.styles.js
  init_goober_modern();
  var styles = {
    sidebar: u3`
    position: fixed;
    top: 0;
    left: 0;
    width: 16rem;
    height: 100%;
    background: #1f2937;
    color: white;
    transform: translateX(0);
    transition: transform 0.3s ease-in-out;
    z-index: 50;

    @media (max-width: 768px) {
      transform: translateX(-100%);
      &.open {
        transform: translateX(0);
      }
    }

    @media (min-width: 769px) {
      &:not(.open) {
        transform: translateX(-100%);
      }
    }
  `,
    sidebarHeader: u3`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #374151;
  `,
    sidebarTitle: u3`
    font-size: 1.125rem;
    font-weight: 600;
    margin: 0;
  `,
    closeButton: u3`
    padding: 0.5rem;
    border-radius: 0.25rem;
    background: none;
    color: white;
    border: none;
    cursor: pointer;

    @media (min-width: 769px) {
      display: none;
    }

    &:hover {
      background: #374151;
    }
    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px white;
    }
  `,
    nav: u3`
    padding: 1rem;
  `,
    navList: u3`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    list-style: none;
    margin: 0;
    padding: 0;
  `,
    navLink: u3`
    display: block;
    padding: 0.5rem;
    border-radius: 0.25rem;
    color: white;
    text-decoration: none;
    &:hover {
      background: #374151;
    }
    &.active {
      background: #4b5563;
    }
  `,
    mainContainer: u3`
    display: flex;
    min-height: 100vh;
    background: #f3f4f6;
  `,
    content: u3`
    flex: 1;
    transition: margin-left 0.3s ease-in-out;

    @media (min-width: 769px) {
      margin-left: 16rem;

      &:not(.shifted) {
        margin-left: 0;
      }
    }
  `,
    header: u3`
    background: white;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    padding: 1rem;
  `,
    menuButton: u3`
    padding: 0.5rem;
    border-radius: 0.25rem;
    background: none;
    border: none;
    cursor: pointer;
    &:hover {
      background: #e5e7eb;
    }
    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px #6b7280;
    }
  `,
    main: u3`
    padding: 1rem;
  `,
    overlay: u3`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 40;

    @media (min-width: 769px) {
      display: none;
    }
  `
  };

  // src/App.tsx
  init_signals_module();
  var NotFound = lazy(() => Promise.resolve().then(() => (init__(), __exports)));
  var PageHome = lazy(() => Promise.resolve().then(() => (init_home(), home_exports)));
  var PageComponents = lazy(() => Promise.resolve().then(() => (init_components(), components_exports)));
  var PageArticle = lazy(() => Promise.resolve().then(() => (init_articles(), articles_exports)));
  var PageLyricsEditor2 = lazy(() => Promise.resolve().then(() => (init_lyrics_editor(), lyrics_editor_exports)));
  var PageExportWaveform = lazy(() => Promise.resolve().then(() => (init_export_waveform(), export_waveform_exports)));
  function Sidebar({ isOpen, toggleSidebar }) {
    const { url } = useLocation();
    const sidebarMenu = d3([
      { name: "home", link: "/" },
      { name: "components", link: "/components" },
      { name: "articles", link: "/articles" },
      { name: "lyrics editor", link: "/lyric-editor" },
      { name: "export-waveform", link: "/export-waveform" }
    ]);
    return /* @__PURE__ */ _("div", { class: `${styles.sidebar} ${isOpen ? "open" : ""}` }, /* @__PURE__ */ _("div", { class: styles.sidebarHeader }, /* @__PURE__ */ _("h2", { class: styles.sidebarTitle }, "Dashboard"), /* @__PURE__ */ _(
      "button",
      {
        onClick: toggleSidebar,
        class: styles.closeButton,
        "aria-label": "Close sidebar"
      },
      "\u2715"
    )), /* @__PURE__ */ _("nav", { class: styles.nav }, /* @__PURE__ */ _("ul", { class: styles.navList }, sidebarMenu.value.map((it) => /* @__PURE__ */ _(k, null, /* @__PURE__ */ _("li", null, /* @__PURE__ */ _(
      "a",
      {
        href: it.link,
        class: `${styles.navLink} ${it.link === "/" ? "active" : ""}`
      },
      it.name
    )))))));
  }
  function App() {
    const [isSidebarOpen, setSidebarOpen] = d2(true);
    const toggleSidebar = () => {
      setSidebarOpen(!isSidebarOpen);
    };
    return /* @__PURE__ */ _(LocationProvider, null, /* @__PURE__ */ _(ErrorBoundary, null, /* @__PURE__ */ _("div", { class: styles.mainContainer }, /* @__PURE__ */ _(Sidebar, { isOpen: isSidebarOpen, toggleSidebar }), /* @__PURE__ */ _("div", { class: `${styles.content} ${isSidebarOpen ? "shifted" : ""}` }, /* @__PURE__ */ _("header", { class: styles.header }, /* @__PURE__ */ _(
      "button",
      {
        onClick: toggleSidebar,
        class: styles.menuButton,
        "aria-label": "Toggle sidebar"
      },
      "\u2630"
    )), /* @__PURE__ */ _("main", { class: styles.main }, /* @__PURE__ */ _(Router, null, /* @__PURE__ */ _(Route, { path: "/", component: PageHome }), /* @__PURE__ */ _(Route, { path: "/components", component: PageComponents }), /* @__PURE__ */ _(Route, { path: "/articles", component: PageArticle }), /* @__PURE__ */ _(NotFound, { default: true })))), isSidebarOpen && /* @__PURE__ */ _(
      "div",
      {
        class: styles.overlay,
        onClick: toggleSidebar,
        "aria-hidden": "true"
      }
    ))));
  }

  // renderer.jsx
  G(_(App), document.getElementById("app"));
})();
