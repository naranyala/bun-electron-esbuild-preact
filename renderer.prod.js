"use strict";
(() => {
  // node_modules/preact/dist/preact.module.js
  var n;
  var l;
  var u;
  var t;
  var i;
  var r;
  var o;
  var e;
  var f;
  var c;
  var s;
  var a;
  var h;
  var p = {};
  var v = [];
  var y = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  var w = Array.isArray;
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
    var a5, h5, y5, w4, d4, g4, _4 = t5 && t5.__k || v, m4 = l6.length;
    for (f4 = P(u5, l6, _4, f4, m4), a5 = 0; a5 < m4; a5++) null != (y5 = u5.__k[a5]) && (h5 = -1 == y5.__i ? p : _4[y5.__i] || p, y5.__i = a5, g4 = O(n4, y5, h5, i5, r4, o5, e5, f4, c5, s5), w4 = y5.__e, y5.ref && h5.ref != y5.ref && (h5.ref && B(h5.ref, null, y5), s5.push(y5.ref, y5.__c || w4, y5)), null == d4 && null != w4 && (d4 = w4), 4 & y5.__u || h5.__k === y5.__k ? f4 = A(y5, f4, n4) : "function" == typeof y5.type && void 0 !== g4 ? f4 = g4 : w4 && (f4 = w4.nextSibling), y5.__u &= -7);
    return u5.__e = d4, f4;
  }
  function P(n4, l6, u5, t5, i5) {
    var r4, o5, e5, f4, c5, s5 = u5.length, a5 = s5, h5 = 0;
    for (n4.__k = new Array(i5), r4 = 0; r4 < i5; r4++) null != (o5 = l6[r4]) && "boolean" != typeof o5 && "function" != typeof o5 ? (f4 = r4 + h5, (o5 = n4.__k[r4] = "string" == typeof o5 || "number" == typeof o5 || "bigint" == typeof o5 || o5.constructor == String ? m(null, o5, null, null, null) : w(o5) ? m(k, { children: o5 }, null, null, null) : null == o5.constructor && o5.__b > 0 ? m(o5.type, o5.props, o5.key, o5.ref ? o5.ref : null, o5.__v) : o5).__ = n4, o5.__b = n4.__b + 1, e5 = null, -1 != (c5 = o5.__i = L(o5, u5, f4, a5)) && (a5--, (e5 = u5[c5]) && (e5.__u |= 2)), null == e5 || null == e5.__v ? (-1 == c5 && (i5 > s5 ? h5-- : i5 < s5 && h5++), "function" != typeof o5.type && (o5.__u |= 4)) : c5 != f4 && (c5 == f4 - 1 ? h5-- : c5 == f4 + 1 ? h5++ : (c5 > f4 ? h5-- : h5++, o5.__u |= 4))) : n4.__k[r4] = null;
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
    var a5, h5, p5, v4, y5, _4, m4, b4, S2, C3, M2, $2, P2, A3, H, L2, T4, j3 = u5.type;
    if (null != u5.constructor) return null;
    128 & t5.__u && (c5 = !!(32 & t5.__u), o5 = [f4 = u5.__e = t5.__e]), (a5 = l.__b) && a5(u5);
    n: if ("function" == typeof j3) try {
      if (b4 = u5.props, S2 = "prototype" in j3 && j3.prototype.render, C3 = (a5 = j3.contextType) && i5[a5.__c], M2 = a5 ? C3 ? C3.props.value : a5.__ : i5, t5.__c ? m4 = (h5 = u5.__c = t5.__c).__ = h5.__E : (S2 ? u5.__c = h5 = new j3(b4, M2) : (u5.__c = h5 = new x(b4, M2), h5.constructor = j3, h5.render = E), C3 && C3.sub(h5), h5.props = b4, h5.state || (h5.state = {}), h5.context = M2, h5.__n = i5, p5 = h5.__d = true, h5.__h = [], h5._sb = []), S2 && null == h5.__s && (h5.__s = h5.state), S2 && null != j3.getDerivedStateFromProps && (h5.__s == h5.state && (h5.__s = d({}, h5.__s)), d(h5.__s, j3.getDerivedStateFromProps(b4, h5.__s))), v4 = h5.props, y5 = h5.state, h5.__v = u5, p5) S2 && null == j3.getDerivedStateFromProps && null != h5.componentWillMount && h5.componentWillMount(), S2 && null != h5.componentDidMount && h5.__h.push(h5.componentDidMount);
      else {
        if (S2 && null == j3.getDerivedStateFromProps && b4 !== v4 && null != h5.componentWillReceiveProps && h5.componentWillReceiveProps(b4, M2), !h5.__e && null != h5.shouldComponentUpdate && false === h5.shouldComponentUpdate(b4, h5.__s, M2) || u5.__v == t5.__v) {
          for (u5.__v != t5.__v && (h5.props = b4, h5.state = h5.__s, h5.__d = false), u5.__e = t5.__e, u5.__k = t5.__k, u5.__k.some(function(n5) {
            n5 && (n5.__ = u5);
          }), $2 = 0; $2 < h5._sb.length; $2++) h5.__h.push(h5._sb[$2]);
          h5._sb = [], h5.__h.length && e5.push(h5);
          break n;
        }
        null != h5.componentWillUpdate && h5.componentWillUpdate(b4, h5.__s, M2), S2 && null != h5.componentDidUpdate && h5.__h.push(function() {
          h5.componentDidUpdate(v4, y5, _4);
        });
      }
      if (h5.context = M2, h5.props = b4, h5.__P = n4, h5.__e = false, P2 = l.__r, A3 = 0, S2) {
        for (h5.state = h5.__s, h5.__d = false, P2 && P2(u5), a5 = h5.render(h5.props, h5.state, h5.context), H = 0; H < h5._sb.length; H++) h5.__h.push(h5._sb[H]);
        h5._sb = [];
      } else do {
        h5.__d = false, P2 && P2(u5), a5 = h5.render(h5.props, h5.state, h5.context), h5.state = h5.__s;
      } while (h5.__d && ++A3 < 25);
      h5.state = h5.__s, null != h5.getChildContext && (i5 = d(d({}, i5), h5.getChildContext())), S2 && !p5 && null != h5.getSnapshotBeforeUpdate && (_4 = h5.getSnapshotBeforeUpdate(v4, y5)), L2 = a5, null != a5 && a5.type === k && null == a5.key && (L2 = V(a5.props.children)), f4 = I(n4, w(L2) ? L2 : [L2], u5, t5, i5, r4, o5, e5, f4, c5, s5), h5.base = u5.__e, u5.__u &= -161, h5.__h.length && e5.push(h5), m4 && (h5.__E = h5.__ = null);
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
    var a5, h5, v4, y5, d4, _4, m4, b4 = i5.props, k3 = t5.props, x2 = t5.type;
    if ("svg" == x2 ? o5 = "http://www.w3.org/2000/svg" : "math" == x2 ? o5 = "http://www.w3.org/1998/Math/MathML" : o5 || (o5 = "http://www.w3.org/1999/xhtml"), null != e5) {
      for (a5 = 0; a5 < e5.length; a5++) if ((d4 = e5[a5]) && "setAttribute" in d4 == !!x2 && (x2 ? d4.localName == x2 : 3 == d4.nodeType)) {
        u5 = d4, e5[a5] = null;
        break;
      }
    }
    if (null == u5) {
      if (null == x2) return document.createTextNode(k3);
      u5 = document.createElementNS(o5, x2, k3.is && k3), c5 && (l.__m && l.__m(t5, e5), c5 = false), e5 = null;
    }
    if (null == x2) b4 === k3 || c5 && u5.data == k3 || (u5.data = k3);
    else {
      if (e5 = e5 && n.call(u5.childNodes), b4 = i5.props || p, !c5 && null != e5) for (b4 = {}, a5 = 0; a5 < u5.attributes.length; a5++) b4[(d4 = u5.attributes[a5]).name] = d4.value;
      for (a5 in b4) if (d4 = b4[a5], "children" == a5) ;
      else if ("dangerouslySetInnerHTML" == a5) v4 = d4;
      else if (!(a5 in k3)) {
        if ("value" == a5 && "defaultValue" in k3 || "checked" == a5 && "defaultChecked" in k3) continue;
        j(u5, a5, null, d4, o5);
      }
      for (a5 in k3) d4 = k3[a5], "children" == a5 ? y5 = d4 : "dangerouslySetInnerHTML" == a5 ? h5 = d4 : "value" == a5 ? _4 = d4 : "checked" == a5 ? m4 = d4 : c5 && "function" != typeof d4 || b4[a5] === d4 || j(u5, a5, d4, b4[a5], o5);
      if (h5) c5 || v4 && (h5.__html == v4.__html || h5.__html == u5.innerHTML) || (u5.innerHTML = h5.__html), t5.__k = [];
      else if (v4 && (u5.innerHTML = ""), I("template" == t5.type ? u5.content : u5, w(y5) ? y5 : [y5], t5, i5, r4, "foreignObject" == x2 ? "http://www.w3.org/1999/xhtml" : o5, e5, f4, e5 ? e5[0] : i5.__k && S(i5, 0), c5, s5), null != e5) for (a5 = e5.length; a5--; ) g(e5[a5]);
      c5 || (a5 = "value", "progress" == x2 && null == _4 ? u5.removeAttribute("value") : null != _4 && (_4 !== u5[a5] || "progress" == x2 && !_4 || "option" == x2 && _4 != b4[a5]) && j(u5, a5, _4, b4[a5], o5), a5 = "checked", null != m4 && m4 != u5[a5] && j(u5, a5, m4, b4[a5], o5));
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

  // node_modules/preact/hooks/dist/hooks.module.js
  var t2;
  var r2;
  var u2;
  var i2;
  var o2 = 0;
  var f2 = [];
  var c2 = l;
  var e2 = c2.__b;
  var a2 = c2.__r;
  var v2 = c2.diffed;
  var l2 = c2.__c;
  var m2 = c2.unmount;
  var s2 = c2.__;
  function p2(n4, t5) {
    c2.__h && c2.__h(r2, n4, o2 || t5), o2 = 0;
    var u5 = r2.__H || (r2.__H = { __: [], __h: [] });
    return n4 >= u5.__.length && u5.__.push({}), u5.__[n4];
  }
  function T2(n4, r4) {
    var u5 = p2(t2++, 7);
    return C2(u5.__H, r4) && (u5.__ = n4(), u5.__H = r4, u5.__h = n4), u5.__;
  }
  function j2() {
    for (var n4; n4 = f2.shift(); ) if (n4.__P && n4.__H) try {
      n4.__H.__h.forEach(z2), n4.__H.__h.forEach(B2), n4.__H.__h = [];
    } catch (t5) {
      n4.__H.__h = [], c2.__e(t5, n4.__v);
    }
  }
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
  var k2 = "function" == typeof requestAnimationFrame;
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

  // node_modules/@preact/signals-core/dist/signals-core.module.js
  var i3 = Symbol.for("preact-signals");
  function t3() {
    if (!(s3 > 1)) {
      var i5, t5 = false;
      while (void 0 !== h2) {
        var r4 = h2;
        h2 = void 0;
        f3++;
        while (void 0 !== r4) {
          var o5 = r4.o;
          r4.o = void 0;
          r4.f &= -3;
          if (!(8 & r4.f) && c3(r4)) try {
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
      s3--;
      if (t5) throw i5;
    } else s3--;
  }
  function r3(i5) {
    if (s3 > 0) return i5();
    s3++;
    try {
      return i5();
    } finally {
      t3();
    }
  }
  var o3 = void 0;
  function n2(i5) {
    var t5 = o3;
    o3 = void 0;
    try {
      return i5();
    } finally {
      o3 = t5;
    }
  }
  var h2 = void 0;
  var s3 = 0;
  var f3 = 0;
  var v3 = 0;
  function e3(i5) {
    if (void 0 !== o3) {
      var t5 = i5.n;
      if (void 0 === t5 || t5.t !== o3) {
        t5 = { i: 0, S: i5, p: o3.s, n: void 0, t: o3, e: void 0, x: void 0, r: t5 };
        if (void 0 !== o3.s) o3.s.n = t5;
        o3.s = t5;
        i5.n = t5;
        if (32 & o3.f) i5.S(t5);
        return t5;
      } else if (-1 === t5.i) {
        t5.i = 0;
        if (void 0 !== t5.n) {
          t5.n.p = t5.p;
          if (void 0 !== t5.p) t5.p.n = t5.n;
          t5.p = o3.s;
          t5.n = void 0;
          o3.s.n = t5;
          o3.s = t5;
        }
        return t5;
      }
    }
  }
  function u3(i5, t5) {
    this.v = i5;
    this.i = 0;
    this.n = void 0;
    this.t = void 0;
    this.W = null == t5 ? void 0 : t5.watched;
    this.Z = null == t5 ? void 0 : t5.unwatched;
  }
  u3.prototype.brand = i3;
  u3.prototype.h = function() {
    return true;
  };
  u3.prototype.S = function(i5) {
    var t5 = this, r4 = this.t;
    if (r4 !== i5 && void 0 === i5.e) {
      i5.x = r4;
      this.t = i5;
      if (void 0 !== r4) r4.e = i5;
      else n2(function() {
        var i6;
        null == (i6 = t5.W) || i6.call(t5);
      });
    }
  };
  u3.prototype.U = function(i5) {
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
        if (void 0 === o5) n2(function() {
          var i6;
          null == (i6 = t5.Z) || i6.call(t5);
        });
      }
    }
  };
  u3.prototype.subscribe = function(i5) {
    var t5 = this;
    return E2(function() {
      var r4 = t5.value, n4 = o3;
      o3 = void 0;
      try {
        i5(r4);
      } finally {
        o3 = n4;
      }
    });
  };
  u3.prototype.valueOf = function() {
    return this.value;
  };
  u3.prototype.toString = function() {
    return this.value + "";
  };
  u3.prototype.toJSON = function() {
    return this.value;
  };
  u3.prototype.peek = function() {
    var i5 = o3;
    o3 = void 0;
    try {
      return this.value;
    } finally {
      o3 = i5;
    }
  };
  Object.defineProperty(u3.prototype, "value", { get: function() {
    var i5 = e3(this);
    if (void 0 !== i5) i5.i = this.i;
    return this.v;
  }, set: function(i5) {
    if (i5 !== this.v) {
      if (f3 > 100) throw new Error("Cycle detected");
      this.v = i5;
      this.i++;
      v3++;
      s3++;
      try {
        for (var r4 = this.t; void 0 !== r4; r4 = r4.x) r4.t.N();
      } finally {
        t3();
      }
    }
  } });
  function d2(i5, t5) {
    return new u3(i5, t5);
  }
  function c3(i5) {
    for (var t5 = i5.s; void 0 !== t5; t5 = t5.n) if (t5.S.i !== t5.i || !t5.S.h() || t5.S.i !== t5.i) return true;
    return false;
  }
  function a3(i5) {
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
  function l3(i5) {
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
  function y2(i5, t5) {
    u3.call(this, void 0);
    this.x = i5;
    this.s = void 0;
    this.g = v3 - 1;
    this.f = 4;
    this.W = null == t5 ? void 0 : t5.watched;
    this.Z = null == t5 ? void 0 : t5.unwatched;
  }
  y2.prototype = new u3();
  y2.prototype.h = function() {
    this.f &= -3;
    if (1 & this.f) return false;
    if (32 == (36 & this.f)) return true;
    this.f &= -5;
    if (this.g === v3) return true;
    this.g = v3;
    this.f |= 1;
    if (this.i > 0 && !c3(this)) {
      this.f &= -2;
      return true;
    }
    var i5 = o3;
    try {
      a3(this);
      o3 = this;
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
    o3 = i5;
    l3(this);
    this.f &= -2;
    return true;
  };
  y2.prototype.S = function(i5) {
    if (void 0 === this.t) {
      this.f |= 36;
      for (var t5 = this.s; void 0 !== t5; t5 = t5.n) t5.S.S(t5);
    }
    u3.prototype.S.call(this, i5);
  };
  y2.prototype.U = function(i5) {
    if (void 0 !== this.t) {
      u3.prototype.U.call(this, i5);
      if (void 0 === this.t) {
        this.f &= -33;
        for (var t5 = this.s; void 0 !== t5; t5 = t5.n) t5.S.U(t5);
      }
    }
  };
  y2.prototype.N = function() {
    if (!(2 & this.f)) {
      this.f |= 6;
      for (var i5 = this.t; void 0 !== i5; i5 = i5.x) i5.t.N();
    }
  };
  Object.defineProperty(y2.prototype, "value", { get: function() {
    if (1 & this.f) throw new Error("Cycle detected");
    var i5 = e3(this);
    this.h();
    if (void 0 !== i5) i5.i = this.i;
    if (16 & this.f) throw this.v;
    return this.v;
  } });
  function w3(i5, t5) {
    return new y2(i5, t5);
  }
  function _2(i5) {
    var r4 = i5.u;
    i5.u = void 0;
    if ("function" == typeof r4) {
      s3++;
      var n4 = o3;
      o3 = void 0;
      try {
        r4();
      } catch (t5) {
        i5.f &= -2;
        i5.f |= 8;
        b(i5);
        throw t5;
      } finally {
        o3 = n4;
        t3();
      }
    }
  }
  function b(i5) {
    for (var t5 = i5.s; void 0 !== t5; t5 = t5.n) t5.S.U(t5);
    i5.x = void 0;
    i5.s = void 0;
    _2(i5);
  }
  function g2(i5) {
    if (o3 !== this) throw new Error("Out-of-order effect");
    l3(this);
    o3 = i5;
    this.f &= -2;
    if (8 & this.f) b(this);
    t3();
  }
  function p3(i5) {
    this.x = i5;
    this.u = void 0;
    this.s = void 0;
    this.o = void 0;
    this.f = 32;
  }
  p3.prototype.c = function() {
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
  p3.prototype.S = function() {
    if (1 & this.f) throw new Error("Cycle detected");
    this.f |= 1;
    this.f &= -9;
    _2(this);
    a3(this);
    s3++;
    var i5 = o3;
    o3 = this;
    return g2.bind(this, i5);
  };
  p3.prototype.N = function() {
    if (!(2 & this.f)) {
      this.f |= 2;
      this.o = h2;
      h2 = this;
    }
  };
  p3.prototype.d = function() {
    this.f |= 8;
    if (!(1 & this.f)) b(this);
  };
  p3.prototype.dispose = function() {
    this.d();
  };
  function E2(i5) {
    var t5 = new p3(i5);
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

  // node_modules/@preact/signals/dist/signals.module.js
  var h3;
  var l4;
  var d3;
  var m3 = [];
  E2(function() {
    h3 = this.N;
  })();
  function _3(i5, r4) {
    l[i5] = r4.bind(null, l[i5] || function() {
    });
  }
  function g3(i5) {
    if (d3) d3();
    d3 = i5 && i5.S();
  }
  function b2(i5) {
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
  b2.displayName = "_st";
  Object.defineProperties(u3.prototype, { constructor: { configurable: true, value: void 0 }, type: { configurable: true, value: b2 }, props: { configurable: true, get: function() {
    return { data: this };
  } }, __b: { configurable: true, value: 1 } });
  _3("__b", function(i5, n4) {
    if ("string" == typeof n4.type) {
      var r4, t5 = n4.props;
      for (var f4 in t5) if ("children" !== f4) {
        var o5 = t5[f4];
        if (o5 instanceof u3) {
          if (!r4) n4.__np = r4 = {};
          r4[f4] = o5;
          t5[f4] = o5.peek();
        }
      }
    }
    i5(n4);
  });
  _3("__r", function(i5, n4) {
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
      l4 = f4;
      g3(r4);
    }
    i5(n4);
  });
  _3("__e", function(i5, n4, r4, t5) {
    g3();
    l4 = void 0;
    i5(n4, r4, t5);
  });
  _3("diffed", function(i5, n4) {
    g3();
    l4 = void 0;
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
  function y4(i5, n4, r4, t5) {
    var f4 = n4 in i5 && void 0 === i5.ownerSVGElement, o5 = d2(r4);
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
  _3("unmount", function(i5, n4) {
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
  _3("__h", function(i5, n4, r4, t5) {
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
  function useSignal(i5, n4) {
    return T2(function() {
      return d2(i5, n4);
    }, []);
  }
  var q2 = function(i5) {
    queueMicrotask(function() {
      queueMicrotask(i5);
    });
  };
  function F2() {
    r3(function() {
      var i5;
      while (i5 = m3.shift()) h3.call(i5);
    });
  }
  function T3() {
    if (1 === m3.push(this)) (l.requestAnimationFrame || q2)(F2);
  }

  // node_modules/goober/dist/goober.modern.js
  var e4 = { data: "" };
  var t4 = (t5) => "object" == typeof window ? ((t5 ? t5.querySelector("#_goober") : window._goober) || Object.assign((t5 || document.head).appendChild(document.createElement("style")), { innerHTML: " ", id: "_goober" })).firstChild : t5 || e4;
  var l5 = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g;
  var a4 = /\/\*[^]*?\*\/|  +/g;
  var n3 = /\n+/g;
  var o4 = (e5, t5) => {
    let r4 = "", l6 = "", a5 = "";
    for (let n4 in e5) {
      let c5 = e5[n4];
      "@" == n4[0] ? "i" == n4[1] ? r4 = n4 + " " + c5 + ";" : l6 += "f" == n4[1] ? o4(c5, n4) : n4 + "{" + o4(c5, "k" == n4[1] ? "" : t5) + "}" : "object" == typeof c5 ? l6 += o4(c5, t5 ? t5.replace(/([^,])+/g, (e6) => n4.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, (t6) => /&/.test(t6) ? t6.replace(/&/g, e6) : e6 ? e6 + " " + t6 : t6)) : n4) : null != c5 && (n4 = /^--/.test(n4) ? n4 : n4.replace(/[A-Z]/g, "-$&").toLowerCase(), a5 += o4.p ? o4.p(n4, c5) : n4 + ":" + c5 + ";");
    }
    return r4 + (t5 && a5 ? t5 + "{" + a5 + "}" : a5) + l6;
  };
  var c4 = {};
  var s4 = (e5) => {
    if ("object" == typeof e5) {
      let t5 = "";
      for (let r4 in e5) t5 += r4 + s4(e5[r4]);
      return t5;
    }
    return e5;
  };
  var i4 = (e5, t5, r4, i5, p5) => {
    let u5 = s4(e5), d4 = c4[u5] || (c4[u5] = ((e6) => {
      let t6 = 0, r5 = 11;
      for (; t6 < e6.length; ) r5 = 101 * r5 + e6.charCodeAt(t6++) >>> 0;
      return "go" + r5;
    })(u5));
    if (!c4[d4]) {
      let t6 = u5 !== e5 ? e5 : ((e6) => {
        let t7, r5, o5 = [{}];
        for (; t7 = l5.exec(e6.replace(a4, "")); ) t7[4] ? o5.shift() : t7[3] ? (r5 = t7[3].replace(n3, " ").trim(), o5.unshift(o5[0][r5] = o5[0][r5] || {})) : o5[0][t7[1]] = t7[2].replace(n3, " ").trim();
        return o5[0];
      })(e5);
      c4[d4] = o4(p5 ? { ["@keyframes " + d4]: t6 } : t6, r4 ? "" : "." + d4);
    }
    let f4 = r4 && c4.g ? c4.g : null;
    return r4 && (c4.g = c4[d4]), ((e6, t6, r5, l6) => {
      l6 ? t6.data = t6.data.replace(l6, e6) : -1 === t6.data.indexOf(e6) && (t6.data = r5 ? e6 + t6.data : t6.data + e6);
    })(c4[d4], t5, i5, f4), d4;
  };
  var p4 = (e5, t5, r4) => e5.reduce((e6, l6, a5) => {
    let n4 = t5[a5];
    if (n4 && n4.call) {
      let e7 = n4(r4), t6 = e7 && e7.props && e7.props.className || /^go/.test(e7) && e7;
      n4 = t6 ? "." + t6 : e7 && "object" == typeof e7 ? e7.props ? "" : o4(e7, "") : false === e7 ? "" : e7;
    }
    return e6 + l6 + (null == n4 ? "" : n4);
  }, "");
  function u4(e5) {
    let r4 = this || {}, l6 = e5.call ? e5(r4.p) : e5;
    return i4(l6.unshift ? l6.raw ? p4(l6, [].slice.call(arguments, 1), r4.p) : l6.reduce((e6, t5) => Object.assign(e6, t5 && t5.call ? t5(r4.p) : t5), {}) : l6, t4(r4.target), r4.g, r4.o, r4.k);
  }
  var b3 = u4.bind({ g: 1 });
  var h4 = u4.bind({ k: 1 });

  // app-01/App.styles.js
  var styles = {
    container: u4`
        display: grid;
        place-items: center;
        align-items: center; 
        text-align: center;
        min-height: 620px;
        max-height: 620px;
        font-family: sans;
    `,
    header: u4`
        font-weight: bold;        
        font-size: 50px;
        padding: 40px 0 20px 0;
    `,
    btn: u4`
        font-size: 40px;
        border: 1px solid gray;
        border-radius: 20px;
        padding: 20px;
        background: white;

        &:hover { background: lightgray; }
    `,
    animateBg: u4`
      @keyframes gradientShift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }

      background: linear-gradient(270deg, #ff6ec4, #7873f5, #4ade80);
      background-size: 600% 600%;
      animation: gradientShift 8s ease infinite;
    `
  };

  // reusables/Button.styles.js
  var styles2 = {
    btn: u4`
        background: white;
        border-radius: 20px;
        padding: 20px;

        &:hover { background: lightgray; }
    `
  };

  // reusables/Button.jsx
  var Button = (props) => {
    return /* @__PURE__ */ _("button", { className: styles2.btn }, props?.label ?? /* @__PURE__ */ _(k, null, /* @__PURE__ */ _("b", null, "ctrl+shift+i"), " ", "to open devtools"));
  };

  // app-01/App.jsx
  function App() {
    const count = d2(0);
    const double = w3(() => count.value * 2);
    const increment = () => count.value++;
    E2(() => {
      console.log(`${count.value} - ${double.value}`);
    });
    return /* @__PURE__ */ _("div", { className: `${styles.container} ${styles.animateBg}` }, /* @__PURE__ */ _("div", { className: styles.header }, "hello from jsx"), /* @__PURE__ */ _("button", { className: styles.btn, onClick: increment }, "click ", count, " - ", double), /* @__PURE__ */ _("hr", null), /* @__PURE__ */ _(Button, null));
  }

  // renderer.jsx
  G(_(App), document.getElementById("app"));
})();
