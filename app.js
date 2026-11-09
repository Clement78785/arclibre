(() => {
  var Ps = Object.create;
  var vi = Object.defineProperty;
  var xs = Object.getOwnPropertyDescriptor;
  var gs = Object.getOwnPropertyNames;
  var Cs = Object.getPrototypeOf,
    Is = Object.prototype.hasOwnProperty;
  var bs = (e, s) => () => {
    try {
      return (s || e((s = { exports: {} }).exports, s), s.exports);
    } catch (o) {
      throw ((s = 0), o);
    }
  };
  var _s = (e, s, o, l) => {
    if ((s && typeof s == "object") || typeof s == "function")
      for (let a of gs(s))
        !Is.call(e, a) &&
          a !== o &&
          vi(e, a, { get: () => s[a], enumerable: !(l = xs(s, a)) || l.enumerable });
    return e;
  };
  var ws = (e, s, o) => (
    (o = e != null ? Ps(Cs(e)) : {}),
    _s(s || !e || !e.__esModule ? vi(o, "default", { value: e, enumerable: !0 }) : o, e)
  );
  var Si = bs((Zr, Ae) => {
    (function () {
      "use strict";
      var e = {};
      ((e.version = "6.4.2.2"), (e.use_lines = !0), (e.use_xyz = !1));
      var s = !1;
      typeof Ae < "u" && Ae.exports
        ? ((Ae.exports = e), (s = !0))
        : (typeof define == "function" && define.amd && define(e),
          typeof document < "u" ? (window.ClipperLib = e) : (self.ClipperLib = e));
      var o;
      if (s) {
        var l = "chrome";
        o = "Netscape";
      } else {
        var l = navigator.userAgent.toString().toLowerCase();
        o = navigator.appName;
      }
      var a = {};
      (l.indexOf("chrome") != -1 && l.indexOf("chromium") == -1 ? (a.chrome = 1) : (a.chrome = 0),
        l.indexOf("chromium") != -1 ? (a.chromium = 1) : (a.chromium = 0),
        l.indexOf("safari") != -1 && l.indexOf("chrome") == -1 && l.indexOf("chromium") == -1
          ? (a.safari = 1)
          : (a.safari = 0),
        l.indexOf("firefox") != -1 ? (a.firefox = 1) : (a.firefox = 0),
        l.indexOf("firefox/17") != -1 ? (a.firefox17 = 1) : (a.firefox17 = 0),
        l.indexOf("firefox/15") != -1 ? (a.firefox15 = 1) : (a.firefox15 = 0),
        l.indexOf("firefox/3") != -1 ? (a.firefox3 = 1) : (a.firefox3 = 0),
        l.indexOf("opera") != -1 ? (a.opera = 1) : (a.opera = 0),
        l.indexOf("msie 10") != -1 ? (a.msie10 = 1) : (a.msie10 = 0),
        l.indexOf("msie 9") != -1 ? (a.msie9 = 1) : (a.msie9 = 0),
        l.indexOf("msie 8") != -1 ? (a.msie8 = 1) : (a.msie8 = 0),
        l.indexOf("msie 7") != -1 ? (a.msie7 = 1) : (a.msie7 = 0),
        l.indexOf("msie ") != -1 ? (a.msie = 1) : (a.msie = 0),
        (e.biginteger_used = null));
      var u,
        p = 0xdeadbeefcafe,
        d = (p & 16777215) == 15715070;
      function h(t, i, n) {
        ((e.biginteger_used = 1),
          t != null &&
            (typeof t == "number" && typeof i > "u"
              ? this.fromInt(t)
              : typeof t == "number"
                ? this.fromNumber(t, i, n)
                : i == null && typeof t != "string"
                  ? this.fromString(t, 256)
                  : this.fromString(t, i)));
      }
      function m() {
        return new h(null, void 0, void 0);
      }
      function v(t, i, n, r, f, c) {
        for (; --c >= 0; ) {
          var y = i * this[t++] + n[r] + f;
          ((f = Math.floor(y / 67108864)), (n[r++] = y & 67108863));
        }
        return f;
      }
      function P(t, i, n, r, f, c) {
        for (var y = i & 32767, g = i >> 15; --c >= 0; ) {
          var C = this[t] & 32767,
            L = this[t++] >> 15,
            k = g * C + L * y;
          ((C = y * C + ((k & 32767) << 15) + n[r] + (f & 1073741823)),
            (f = (C >>> 30) + (k >>> 15) + g * L + (f >>> 30)),
            (n[r++] = C & 1073741823));
        }
        return f;
      }
      function x(t, i, n, r, f, c) {
        for (var y = i & 16383, g = i >> 14; --c >= 0; ) {
          var C = this[t] & 16383,
            L = this[t++] >> 14,
            k = g * C + L * y;
          ((C = y * C + ((k & 16383) << 14) + n[r] + f),
            (f = (C >> 28) + (k >> 14) + g * L),
            (n[r++] = C & 268435455));
        }
        return f;
      }
      (d && o == "Microsoft Internet Explorer"
        ? ((h.prototype.am = P), (u = 30))
        : d && o != "Netscape"
          ? ((h.prototype.am = v), (u = 26))
          : ((h.prototype.am = x), (u = 28)),
        (h.prototype.DB = u),
        (h.prototype.DM = (1 << u) - 1),
        (h.prototype.DV = 1 << u));
      var I = 52;
      ((h.prototype.FV = Math.pow(2, I)), (h.prototype.F1 = I - u), (h.prototype.F2 = 2 * u - I));
      var _ = "0123456789abcdefghijklmnopqrstuvwxyz",
        T = new Array(),
        E,
        M;
      for (E = 48, M = 0; M <= 9; ++M) T[E++] = M;
      for (E = 97, M = 10; M < 36; ++M) T[E++] = M;
      for (E = 65, M = 10; M < 36; ++M) T[E++] = M;
      function b(t) {
        return _.charAt(t);
      }
      function A(t, i) {
        var n = T[t.charCodeAt(i)];
        return n ?? -1;
      }
      function Y(t) {
        for (var i = this.t - 1; i >= 0; --i) t[i] = this[i];
        ((t.t = this.t), (t.s = this.s));
      }
      function X(t) {
        ((this.t = 1),
          (this.s = t < 0 ? -1 : 0),
          t > 0 ? (this[0] = t) : t < -1 ? (this[0] = t + this.DV) : (this.t = 0));
      }
      function S(t) {
        var i = m();
        return (i.fromInt(t), i);
      }
      function F(t, i) {
        var n;
        if (i == 16) n = 4;
        else if (i == 8) n = 3;
        else if (i == 256) n = 8;
        else if (i == 2) n = 1;
        else if (i == 32) n = 5;
        else if (i == 4) n = 2;
        else {
          this.fromRadix(t, i);
          return;
        }
        ((this.t = 0), (this.s = 0));
        for (var r = t.length, f = !1, c = 0; --r >= 0; ) {
          var y = n == 8 ? t[r] & 255 : A(t, r);
          if (y < 0) {
            t.charAt(r) == "-" && (f = !0);
            continue;
          }
          ((f = !1),
            c == 0
              ? (this[this.t++] = y)
              : c + n > this.DB
                ? ((this[this.t - 1] |= (y & ((1 << (this.DB - c)) - 1)) << c),
                  (this[this.t++] = y >> (this.DB - c)))
                : (this[this.t - 1] |= y << c),
            (c += n),
            c >= this.DB && (c -= this.DB));
        }
        (n == 8 &&
          (t[0] & 128) != 0 &&
          ((this.s = -1), c > 0 && (this[this.t - 1] |= ((1 << (this.DB - c)) - 1) << c)),
          this.clamp(),
          f && h.ZERO.subTo(this, this));
      }
      function G() {
        for (var t = this.s & this.DM; this.t > 0 && this[this.t - 1] == t; ) --this.t;
      }
      function J(t) {
        if (this.s < 0) return "-" + this.negate().toString(t);
        var i;
        if (t == 16) i = 4;
        else if (t == 8) i = 3;
        else if (t == 2) i = 1;
        else if (t == 32) i = 5;
        else if (t == 4) i = 2;
        else return this.toRadix(t);
        var n = (1 << i) - 1,
          r,
          f = !1,
          c = "",
          y = this.t,
          g = this.DB - ((y * this.DB) % i);
        if (y-- > 0)
          for (g < this.DB && (r = this[y] >> g) > 0 && ((f = !0), (c = b(r))); y >= 0; )
            (g < i
              ? ((r = (this[y] & ((1 << g) - 1)) << (i - g)), (r |= this[--y] >> (g += this.DB - i)))
              : ((r = (this[y] >> (g -= i)) & n), g <= 0 && ((g += this.DB), --y)),
              r > 0 && (f = !0),
              f && (c += b(r)));
        return f ? c : "0";
      }
      function B() {
        var t = m();
        return (h.ZERO.subTo(this, t), t);
      }
      function U() {
        return this.s < 0 ? this.negate() : this;
      }
      function R(t) {
        var i = this.s - t.s;
        if (i != 0) return i;
        var n = this.t;
        if (((i = n - t.t), i != 0)) return this.s < 0 ? -i : i;
        for (; --n >= 0; ) if ((i = this[n] - t[n]) != 0) return i;
        return 0;
      }
      function $(t) {
        var i = 1,
          n;
        return (
          (n = t >>> 16) != 0 && ((t = n), (i += 16)),
          (n = t >> 8) != 0 && ((t = n), (i += 8)),
          (n = t >> 4) != 0 && ((t = n), (i += 4)),
          (n = t >> 2) != 0 && ((t = n), (i += 2)),
          (n = t >> 1) != 0 && ((t = n), (i += 1)),
          i
        );
      }
      function V() {
        return this.t <= 0 ? 0 : this.DB * (this.t - 1) + $(this[this.t - 1] ^ (this.s & this.DM));
      }
      function st(t, i) {
        var n;
        for (n = this.t - 1; n >= 0; --n) i[n + t] = this[n];
        for (n = t - 1; n >= 0; --n) i[n] = 0;
        ((i.t = this.t + t), (i.s = this.s));
      }
      function tt(t, i) {
        for (var n = t; n < this.t; ++n) i[n - t] = this[n];
        ((i.t = Math.max(this.t - t, 0)), (i.s = this.s));
      }
      function et(t, i) {
        var n = t % this.DB,
          r = this.DB - n,
          f = (1 << r) - 1,
          c = Math.floor(t / this.DB),
          y = (this.s << n) & this.DM,
          g;
        for (g = this.t - 1; g >= 0; --g) ((i[g + c + 1] = (this[g] >> r) | y), (y = (this[g] & f) << n));
        for (g = c - 1; g >= 0; --g) i[g] = 0;
        ((i[c] = y), (i.t = this.t + c + 1), (i.s = this.s), i.clamp());
      }
      function z(t, i) {
        i.s = this.s;
        var n = Math.floor(t / this.DB);
        if (n >= this.t) {
          i.t = 0;
          return;
        }
        var r = t % this.DB,
          f = this.DB - r,
          c = (1 << r) - 1;
        i[0] = this[n] >> r;
        for (var y = n + 1; y < this.t; ++y)
          ((i[y - n - 1] |= (this[y] & c) << f), (i[y - n] = this[y] >> r));
        (r > 0 && (i[this.t - n - 1] |= (this.s & c) << f), (i.t = this.t - n), i.clamp());
      }
      function lt(t, i) {
        for (var n = 0, r = 0, f = Math.min(t.t, this.t); n < f; )
          ((r += this[n] - t[n]), (i[n++] = r & this.DM), (r >>= this.DB));
        if (t.t < this.t) {
          for (r -= t.s; n < this.t; ) ((r += this[n]), (i[n++] = r & this.DM), (r >>= this.DB));
          r += this.s;
        } else {
          for (r += this.s; n < t.t; ) ((r -= t[n]), (i[n++] = r & this.DM), (r >>= this.DB));
          r -= t.s;
        }
        ((i.s = r < 0 ? -1 : 0),
          r < -1 ? (i[n++] = this.DV + r) : r > 0 && (i[n++] = r),
          (i.t = n),
          i.clamp());
      }
      function Tt(t, i) {
        var n = this.abs(),
          r = t.abs(),
          f = n.t;
        for (i.t = f + r.t; --f >= 0; ) i[f] = 0;
        for (f = 0; f < r.t; ++f) i[f + n.t] = n.am(0, r[f], i, f, 0, n.t);
        ((i.s = 0), i.clamp(), this.s != t.s && h.ZERO.subTo(i, i));
      }
      function Pt(t) {
        for (var i = this.abs(), n = (t.t = 2 * i.t); --n >= 0; ) t[n] = 0;
        for (n = 0; n < i.t - 1; ++n) {
          var r = i.am(n, i[n], t, 2 * n, 0, 1);
          (t[n + i.t] += i.am(n + 1, 2 * i[n], t, 2 * n + 1, r, i.t - n - 1)) >= i.DV &&
            ((t[n + i.t] -= i.DV), (t[n + i.t + 1] = 1));
        }
        (t.t > 0 && (t[t.t - 1] += i.am(n, i[n], t, 2 * n, 0, 1)), (t.s = 0), t.clamp());
      }
      function Ot(t, i, n) {
        var r = t.abs();
        if (!(r.t <= 0)) {
          var f = this.abs();
          if (f.t < r.t) {
            (i?.fromInt(0), n != null && this.copyTo(n));
            return;
          }
          n == null && (n = m());
          var c = m(),
            y = this.s,
            g = t.s,
            C = this.DB - $(r[r.t - 1]);
          C > 0 ? (r.lShiftTo(C, c), f.lShiftTo(C, n)) : (r.copyTo(c), f.copyTo(n));
          var L = c.t,
            k = c[L - 1];
          if (k != 0) {
            var N = k * (1 << this.F1) + (L > 1 ? c[L - 2] >> this.F2 : 0),
              q = this.FV / N,
              K = (1 << this.F1) / N,
              ot = 1 << this.F2,
              at = n.t,
              dt = at - L,
              Mt = i ?? m();
            for (
              c.dlShiftTo(dt, Mt),
                n.compareTo(Mt) >= 0 && ((n[n.t++] = 1), n.subTo(Mt, n)),
                h.ONE.dlShiftTo(L, Mt),
                Mt.subTo(c, c);
              c.t < L;
            )
              c[c.t++] = 0;
            for (; --dt >= 0; ) {
              var Bt = n[--at] == k ? this.DM : Math.floor(n[at] * q + (n[at - 1] + ot) * K);
              if ((n[at] += c.am(0, Bt, n, dt, 0, L)) < Bt)
                for (c.dlShiftTo(dt, Mt), n.subTo(Mt, n); n[at] < --Bt; ) n.subTo(Mt, n);
            }
            (i != null && (n.drShiftTo(L, i), y != g && h.ZERO.subTo(i, i)),
              (n.t = L),
              n.clamp(),
              C > 0 && n.rShiftTo(C, n),
              y < 0 && h.ZERO.subTo(n, n));
          }
        }
      }
      function $t(t) {
        var i = m();
        return (this.abs().divRemTo(t, null, i), this.s < 0 && i.compareTo(h.ZERO) > 0 && t.subTo(i, i), i);
      }
      function Lt(t) {
        this.m = t;
      }
      function Gt(t) {
        return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t;
      }
      function Ut(t) {
        return t;
      }
      function Xt(t) {
        t.divRemTo(this.m, null, t);
      }
      function At(t, i, n) {
        (t.multiplyTo(i, n), this.reduce(n));
      }
      function O(t, i) {
        (t.squareTo(i), this.reduce(i));
      }
      ((Lt.prototype.convert = Gt),
        (Lt.prototype.revert = Ut),
        (Lt.prototype.reduce = Xt),
        (Lt.prototype.mulTo = At),
        (Lt.prototype.sqrTo = O));
      function j() {
        if (this.t < 1) return 0;
        var t = this[0];
        if ((t & 1) == 0) return 0;
        var i = t & 3;
        return (
          (i = (i * (2 - (t & 15) * i)) & 15),
          (i = (i * (2 - (t & 255) * i)) & 255),
          (i = (i * (2 - (((t & 65535) * i) & 65535))) & 65535),
          (i = (i * (2 - ((t * i) % this.DV))) % this.DV),
          i > 0 ? this.DV - i : -i
        );
      }
      function Q(t) {
        ((this.m = t),
          (this.mp = t.invDigit()),
          (this.mpl = this.mp & 32767),
          (this.mph = this.mp >> 15),
          (this.um = (1 << (t.DB - 15)) - 1),
          (this.mt2 = 2 * t.t));
      }
      function pt(t) {
        var i = m();
        return (
          t.abs().dlShiftTo(this.m.t, i),
          i.divRemTo(this.m, null, i),
          t.s < 0 && i.compareTo(h.ZERO) > 0 && this.m.subTo(i, i),
          i
        );
      }
      function gt(t) {
        var i = m();
        return (t.copyTo(i), this.reduce(i), i);
      }
      function it(t) {
        for (; t.t <= this.mt2; ) t[t.t++] = 0;
        for (var i = 0; i < this.m.t; ++i) {
          var n = t[i] & 32767,
            r = (n * this.mpl + (((n * this.mph + (t[i] >> 15) * this.mpl) & this.um) << 15)) & t.DM;
          for (n = i + this.m.t, t[n] += this.m.am(0, r, t, i, 0, this.m.t); t[n] >= t.DV; )
            ((t[n] -= t.DV), t[++n]++);
        }
        (t.clamp(), t.drShiftTo(this.m.t, t), t.compareTo(this.m) >= 0 && t.subTo(this.m, t));
      }
      function xt(t, i) {
        (t.squareTo(i), this.reduce(i));
      }
      function Ct(t, i, n) {
        (t.multiplyTo(i, n), this.reduce(n));
      }
      ((Q.prototype.convert = pt),
        (Q.prototype.revert = gt),
        (Q.prototype.reduce = it),
        (Q.prototype.mulTo = Ct),
        (Q.prototype.sqrTo = xt));
      function Qt() {
        return (this.t > 0 ? this[0] & 1 : this.s) == 0;
      }
      function Wt(t, i) {
        if (t > 4294967295 || t < 1) return h.ONE;
        var n = m(),
          r = m(),
          f = i.convert(this),
          c = $(t) - 1;
        for (f.copyTo(n); --c >= 0; )
          if ((i.sqrTo(n, r), (t & (1 << c)) > 0)) i.mulTo(r, f, n);
          else {
            var y = n;
            ((n = r), (r = y));
          }
        return i.revert(n);
      }
      function ln(t, i) {
        var n;
        return (t < 256 || i.isEven() ? (n = new Lt(i)) : (n = new Q(i)), this.exp(t, n));
      }
      ((h.prototype.copyTo = Y),
        (h.prototype.fromInt = X),
        (h.prototype.fromString = F),
        (h.prototype.clamp = G),
        (h.prototype.dlShiftTo = st),
        (h.prototype.drShiftTo = tt),
        (h.prototype.lShiftTo = et),
        (h.prototype.rShiftTo = z),
        (h.prototype.subTo = lt),
        (h.prototype.multiplyTo = Tt),
        (h.prototype.squareTo = Pt),
        (h.prototype.divRemTo = Ot),
        (h.prototype.invDigit = j),
        (h.prototype.isEven = Qt),
        (h.prototype.exp = Wt),
        (h.prototype.toString = J),
        (h.prototype.negate = B),
        (h.prototype.abs = U),
        (h.prototype.compareTo = R),
        (h.prototype.bitLength = V),
        (h.prototype.mod = $t),
        (h.prototype.modPowInt = ln),
        (h.ZERO = S(0)),
        (h.ONE = S(1)));
      function an() {
        var t = m();
        return (this.copyTo(t), t);
      }
      function fn() {
        if (this.s < 0) {
          if (this.t == 1) return this[0] - this.DV;
          if (this.t == 0) return -1;
        } else {
          if (this.t == 1) return this[0];
          if (this.t == 0) return 0;
        }
        return ((this[1] & ((1 << (32 - this.DB)) - 1)) << this.DB) | this[0];
      }
      function un() {
        return this.t == 0 ? this.s : (this[0] << 24) >> 24;
      }
      function hn() {
        return this.t == 0 ? this.s : (this[0] << 16) >> 16;
      }
      function cn(t) {
        return Math.floor((Math.LN2 * this.DB) / Math.log(t));
      }
      function pn() {
        return this.s < 0 ? -1 : this.t <= 0 || (this.t == 1 && this[0] <= 0) ? 0 : 1;
      }
      function dn(t) {
        if ((t == null && (t = 10), this.signum() == 0 || t < 2 || t > 36)) return "0";
        var i = this.chunkSize(t),
          n = Math.pow(t, i),
          r = S(n),
          f = m(),
          c = m(),
          y = "";
        for (this.divRemTo(r, f, c); f.signum() > 0; )
          ((y = (n + c.intValue()).toString(t).substr(1) + y), f.divRemTo(r, f, c));
        return c.intValue().toString(t) + y;
      }
      function mn(t, i) {
        (this.fromInt(0), i == null && (i = 10));
        for (var n = this.chunkSize(i), r = Math.pow(i, n), f = !1, c = 0, y = 0, g = 0; g < t.length; ++g) {
          var C = A(t, g);
          if (C < 0) {
            t.charAt(g) == "-" && this.signum() == 0 && (f = !0);
            continue;
          }
          ((y = i * y + C), ++c >= n && (this.dMultiply(r), this.dAddOffset(y, 0), (c = 0), (y = 0)));
        }
        (c > 0 && (this.dMultiply(Math.pow(i, c)), this.dAddOffset(y, 0)), f && h.ZERO.subTo(this, this));
      }
      function yn(t, i, n) {
        if (typeof i == "number")
          if (t < 2) this.fromInt(1);
          else
            for (
              this.fromNumber(t, n),
                this.testBit(t - 1) || this.bitwiseTo(h.ONE.shiftLeft(t - 1), Ze, this),
                this.isEven() && this.dAddOffset(1, 0);
              !this.isProbablePrime(i);
            )
              (this.dAddOffset(2, 0), this.bitLength() > t && this.subTo(h.ONE.shiftLeft(t - 1), this));
        else {
          var r = new Array(),
            f = t & 7;
          ((r.length = (t >> 3) + 1),
            i.nextBytes(r),
            f > 0 ? (r[0] &= (1 << f) - 1) : (r[0] = 0),
            this.fromString(r, 256));
        }
      }
      function vn() {
        var t = this.t,
          i = new Array();
        i[0] = this.s;
        var n = this.DB - ((t * this.DB) % 8),
          r,
          f = 0;
        if (t-- > 0)
          for (
            n < this.DB &&
            (r = this[t] >> n) != (this.s & this.DM) >> n &&
            (i[f++] = r | (this.s << (this.DB - n)));
            t >= 0;
          )
            (n < 8
              ? ((r = (this[t] & ((1 << n) - 1)) << (8 - n)), (r |= this[--t] >> (n += this.DB - 8)))
              : ((r = (this[t] >> (n -= 8)) & 255), n <= 0 && ((n += this.DB), --t)),
              (r & 128) != 0 && (r |= -256),
              f == 0 && (this.s & 128) != (r & 128) && ++f,
              (f > 0 || r != this.s) && (i[f++] = r));
        return i;
      }
      function Pn(t) {
        return this.compareTo(t) == 0;
      }
      function xn(t) {
        return this.compareTo(t) < 0 ? this : t;
      }
      function gn(t) {
        return this.compareTo(t) > 0 ? this : t;
      }
      function Cn(t, i, n) {
        var r,
          f,
          c = Math.min(t.t, this.t);
        for (r = 0; r < c; ++r) n[r] = i(this[r], t[r]);
        if (t.t < this.t) {
          for (f = t.s & this.DM, r = c; r < this.t; ++r) n[r] = i(this[r], f);
          n.t = this.t;
        } else {
          for (f = this.s & this.DM, r = c; r < t.t; ++r) n[r] = i(f, t[r]);
          n.t = t.t;
        }
        ((n.s = i(this.s, t.s)), n.clamp());
      }
      function In(t, i) {
        return t & i;
      }
      function bn(t) {
        var i = m();
        return (this.bitwiseTo(t, In, i), i);
      }
      function Ze(t, i) {
        return t | i;
      }
      function _n(t) {
        var i = m();
        return (this.bitwiseTo(t, Ze, i), i);
      }
      function pi(t, i) {
        return t ^ i;
      }
      function wn(t) {
        var i = m();
        return (this.bitwiseTo(t, pi, i), i);
      }
      function di(t, i) {
        return t & ~i;
      }
      function Tn(t) {
        var i = m();
        return (this.bitwiseTo(t, di, i), i);
      }
      function Ln() {
        for (var t = m(), i = 0; i < this.t; ++i) t[i] = this.DM & ~this[i];
        return ((t.t = this.t), (t.s = ~this.s), t);
      }
      function Mn(t) {
        var i = m();
        return (t < 0 ? this.rShiftTo(-t, i) : this.lShiftTo(t, i), i);
      }
      function Sn(t) {
        var i = m();
        return (t < 0 ? this.lShiftTo(-t, i) : this.rShiftTo(t, i), i);
      }
      function An(t) {
        if (t == 0) return -1;
        var i = 0;
        return (
          (t & 65535) == 0 && ((t >>= 16), (i += 16)),
          (t & 255) == 0 && ((t >>= 8), (i += 8)),
          (t & 15) == 0 && ((t >>= 4), (i += 4)),
          (t & 3) == 0 && ((t >>= 2), (i += 2)),
          (t & 1) == 0 && ++i,
          i
        );
      }
      function En() {
        for (var t = 0; t < this.t; ++t) if (this[t] != 0) return t * this.DB + An(this[t]);
        return this.s < 0 ? this.t * this.DB : -1;
      }
      function Xn(t) {
        for (var i = 0; t != 0; ) ((t &= t - 1), ++i);
        return i;
      }
      function On() {
        for (var t = 0, i = this.s & this.DM, n = 0; n < this.t; ++n) t += Xn(this[n] ^ i);
        return t;
      }
      function Nn(t) {
        var i = Math.floor(t / this.DB);
        return i >= this.t ? this.s != 0 : (this[i] & (1 << (t % this.DB))) != 0;
      }
      function Yn(t, i) {
        var n = h.ONE.shiftLeft(t);
        return (this.bitwiseTo(n, i, n), n);
      }
      function Dn(t) {
        return this.changeBit(t, Ze);
      }
      function Bn(t) {
        return this.changeBit(t, di);
      }
      function kn(t) {
        return this.changeBit(t, pi);
      }
      function Fn(t, i) {
        for (var n = 0, r = 0, f = Math.min(t.t, this.t); n < f; )
          ((r += this[n] + t[n]), (i[n++] = r & this.DM), (r >>= this.DB));
        if (t.t < this.t) {
          for (r += t.s; n < this.t; ) ((r += this[n]), (i[n++] = r & this.DM), (r >>= this.DB));
          r += this.s;
        } else {
          for (r += this.s; n < t.t; ) ((r += t[n]), (i[n++] = r & this.DM), (r >>= this.DB));
          r += t.s;
        }
        ((i.s = r < 0 ? -1 : 0),
          r > 0 ? (i[n++] = r) : r < -1 && (i[n++] = this.DV + r),
          (i.t = n),
          i.clamp());
      }
      function Rn(t) {
        var i = m();
        return (this.addTo(t, i), i);
      }
      function $n(t) {
        var i = m();
        return (this.subTo(t, i), i);
      }
      function Gn(t) {
        var i = m();
        return (this.multiplyTo(t, i), i);
      }
      function Wn() {
        var t = m();
        return (this.squareTo(t), t);
      }
      function qn(t) {
        var i = m();
        return (this.divRemTo(t, i, null), i);
      }
      function Zn(t) {
        var i = m();
        return (this.divRemTo(t, null, i), i);
      }
      function zn(t) {
        var i = m(),
          n = m();
        return (this.divRemTo(t, i, n), new Array(i, n));
      }
      function Un(t) {
        ((this[this.t] = this.am(0, t - 1, this, 0, 0, this.t)), ++this.t, this.clamp());
      }
      function jn(t, i) {
        if (t != 0) {
          for (; this.t <= i; ) this[this.t++] = 0;
          for (this[i] += t; this[i] >= this.DV; )
            ((this[i] -= this.DV), ++i >= this.t && (this[this.t++] = 0), ++this[i]);
        }
      }
      function ue() {}
      function mi(t) {
        return t;
      }
      function Hn(t, i, n) {
        t.multiplyTo(i, n);
      }
      function Jn(t, i) {
        t.squareTo(i);
      }
      ((ue.prototype.convert = mi),
        (ue.prototype.revert = mi),
        (ue.prototype.mulTo = Hn),
        (ue.prototype.sqrTo = Jn));
      function Vn(t) {
        return this.exp(t, new ue());
      }
      function Kn(t, i, n) {
        var r = Math.min(this.t + t.t, i);
        for (n.s = 0, n.t = r; r > 0; ) n[--r] = 0;
        var f;
        for (f = n.t - this.t; r < f; ++r) n[r + this.t] = this.am(0, t[r], n, r, 0, this.t);
        for (f = Math.min(t.t, i); r < f; ++r) this.am(0, t[r], n, r, 0, i - r);
        n.clamp();
      }
      function Qn(t, i, n) {
        --i;
        var r = (n.t = this.t + t.t - i);
        for (n.s = 0; --r >= 0; ) n[r] = 0;
        for (r = Math.max(i - this.t, 0); r < t.t; ++r)
          n[this.t + r - i] = this.am(i - r, t[r], n, 0, 0, this.t + r - i);
        (n.clamp(), n.drShiftTo(1, n));
      }
      function te(t) {
        ((this.r2 = m()),
          (this.q3 = m()),
          h.ONE.dlShiftTo(2 * t.t, this.r2),
          (this.mu = this.r2.divide(t)),
          (this.m = t));
      }
      function ts(t) {
        if (t.s < 0 || t.t > 2 * this.m.t) return t.mod(this.m);
        if (t.compareTo(this.m) < 0) return t;
        var i = m();
        return (t.copyTo(i), this.reduce(i), i);
      }
      function es(t) {
        return t;
      }
      function is(t) {
        for (
          t.drShiftTo(this.m.t - 1, this.r2),
            t.t > this.m.t + 1 && ((t.t = this.m.t + 1), t.clamp()),
            this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3),
            this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
          t.compareTo(this.r2) < 0;
        )
          t.dAddOffset(1, this.m.t + 1);
        for (t.subTo(this.r2, t); t.compareTo(this.m) >= 0; ) t.subTo(this.m, t);
      }
      function ns(t, i) {
        (t.squareTo(i), this.reduce(i));
      }
      function ss(t, i, n) {
        (t.multiplyTo(i, n), this.reduce(n));
      }
      ((te.prototype.convert = ts),
        (te.prototype.revert = es),
        (te.prototype.reduce = is),
        (te.prototype.mulTo = ss),
        (te.prototype.sqrTo = ns));
      function rs(t, i) {
        var n = t.bitLength(),
          r,
          f = S(1),
          c;
        if (n <= 0) return f;
        (n < 18 ? (r = 1) : n < 48 ? (r = 3) : n < 144 ? (r = 4) : n < 768 ? (r = 5) : (r = 6),
          n < 8 ? (c = new Lt(i)) : i.isEven() ? (c = new te(i)) : (c = new Q(i)));
        var y = new Array(),
          g = 3,
          C = r - 1,
          L = (1 << r) - 1;
        if (((y[1] = c.convert(this)), r > 1)) {
          var k = m();
          for (c.sqrTo(y[1], k); g <= L; ) ((y[g] = m()), c.mulTo(k, y[g - 2], y[g]), (g += 2));
        }
        var N = t.t - 1,
          q,
          K = !0,
          ot = m(),
          at;
        for (n = $(t[N]) - 1; N >= 0; ) {
          for (
            n >= C
              ? (q = (t[N] >> (n - C)) & L)
              : ((q = (t[N] & ((1 << (n + 1)) - 1)) << (C - n)),
                N > 0 && (q |= t[N - 1] >> (this.DB + n - C))),
              g = r;
            (q & 1) == 0;
          )
            ((q >>= 1), --g);
          if (((n -= g) < 0 && ((n += this.DB), --N), K)) (y[q].copyTo(f), (K = !1));
          else {
            for (; g > 1; ) (c.sqrTo(f, ot), c.sqrTo(ot, f), (g -= 2));
            (g > 0 ? c.sqrTo(f, ot) : ((at = f), (f = ot), (ot = at)), c.mulTo(ot, y[q], f));
          }
          for (; N >= 0 && (t[N] & (1 << n)) == 0; )
            (c.sqrTo(f, ot), (at = f), (f = ot), (ot = at), --n < 0 && ((n = this.DB - 1), --N));
        }
        return c.revert(f);
      }
      function os(t) {
        var i = this.s < 0 ? this.negate() : this.clone(),
          n = t.s < 0 ? t.negate() : t.clone();
        if (i.compareTo(n) < 0) {
          var r = i;
          ((i = n), (n = r));
        }
        var f = i.getLowestSetBit(),
          c = n.getLowestSetBit();
        if (c < 0) return i;
        for (f < c && (c = f), c > 0 && (i.rShiftTo(c, i), n.rShiftTo(c, n)); i.signum() > 0; )
          ((f = i.getLowestSetBit()) > 0 && i.rShiftTo(f, i),
            (f = n.getLowestSetBit()) > 0 && n.rShiftTo(f, n),
            i.compareTo(n) >= 0 ? (i.subTo(n, i), i.rShiftTo(1, i)) : (n.subTo(i, n), n.rShiftTo(1, n)));
        return (c > 0 && n.lShiftTo(c, n), n);
      }
      function ls(t) {
        if (t <= 0) return 0;
        var i = this.DV % t,
          n = this.s < 0 ? t - 1 : 0;
        if (this.t > 0)
          if (i == 0) n = this[0] % t;
          else for (var r = this.t - 1; r >= 0; --r) n = (i * n + this[r]) % t;
        return n;
      }
      function as(t) {
        var i = t.isEven();
        if ((this.isEven() && i) || t.signum() == 0) return h.ZERO;
        for (var n = t.clone(), r = this.clone(), f = S(1), c = S(0), y = S(0), g = S(1); n.signum() != 0; ) {
          for (; n.isEven(); )
            (n.rShiftTo(1, n),
              i
                ? ((!f.isEven() || !c.isEven()) && (f.addTo(this, f), c.subTo(t, c)), f.rShiftTo(1, f))
                : c.isEven() || c.subTo(t, c),
              c.rShiftTo(1, c));
          for (; r.isEven(); )
            (r.rShiftTo(1, r),
              i
                ? ((!y.isEven() || !g.isEven()) && (y.addTo(this, y), g.subTo(t, g)), y.rShiftTo(1, y))
                : g.isEven() || g.subTo(t, g),
              g.rShiftTo(1, g));
          n.compareTo(r) >= 0
            ? (n.subTo(r, n), i && f.subTo(y, f), c.subTo(g, c))
            : (r.subTo(n, r), i && y.subTo(f, y), g.subTo(c, g));
        }
        if (r.compareTo(h.ONE) != 0) return h.ZERO;
        if (g.compareTo(t) >= 0) return g.subtract(t);
        if (g.signum() < 0) g.addTo(t, g);
        else return g;
        return g.signum() < 0 ? g.add(t) : g;
      }
      var _t = [
          2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101,
          103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199,
          211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317,
          331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443,
          449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577,
          587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701,
          709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839,
          853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983,
          991, 997,
        ],
        fs = (1 << 26) / _t[_t.length - 1];
      function us(t) {
        var i,
          n = this.abs();
        if (n.t == 1 && n[0] <= _t[_t.length - 1]) {
          for (i = 0; i < _t.length; ++i) if (n[0] == _t[i]) return !0;
          return !1;
        }
        if (n.isEven()) return !1;
        for (i = 1; i < _t.length; ) {
          for (var r = _t[i], f = i + 1; f < _t.length && r < fs; ) r *= _t[f++];
          for (r = n.modInt(r); i < f; ) if (r % _t[i++] == 0) return !1;
        }
        return n.millerRabin(t);
      }
      function hs(t) {
        var i = this.subtract(h.ONE),
          n = i.getLowestSetBit();
        if (n <= 0) return !1;
        var r = i.shiftRight(n);
        ((t = (t + 1) >> 1), t > _t.length && (t = _t.length));
        for (var f = m(), c = 0; c < t; ++c) {
          f.fromInt(_t[Math.floor(Math.random() * _t.length)]);
          var y = f.modPow(r, this);
          if (y.compareTo(h.ONE) != 0 && y.compareTo(i) != 0) {
            for (var g = 1; g++ < n && y.compareTo(i) != 0; )
              if (((y = y.modPowInt(2, this)), y.compareTo(h.ONE) == 0)) return !1;
            if (y.compareTo(i) != 0) return !1;
          }
        }
        return !0;
      }
      ((h.prototype.chunkSize = cn),
        (h.prototype.toRadix = dn),
        (h.prototype.fromRadix = mn),
        (h.prototype.fromNumber = yn),
        (h.prototype.bitwiseTo = Cn),
        (h.prototype.changeBit = Yn),
        (h.prototype.addTo = Fn),
        (h.prototype.dMultiply = Un),
        (h.prototype.dAddOffset = jn),
        (h.prototype.multiplyLowerTo = Kn),
        (h.prototype.multiplyUpperTo = Qn),
        (h.prototype.modInt = ls),
        (h.prototype.millerRabin = hs),
        (h.prototype.clone = an),
        (h.prototype.intValue = fn),
        (h.prototype.byteValue = un),
        (h.prototype.shortValue = hn),
        (h.prototype.signum = pn),
        (h.prototype.toByteArray = vn),
        (h.prototype.equals = Pn),
        (h.prototype.min = xn),
        (h.prototype.max = gn),
        (h.prototype.and = bn),
        (h.prototype.or = _n),
        (h.prototype.xor = wn),
        (h.prototype.andNot = Tn),
        (h.prototype.not = Ln),
        (h.prototype.shiftLeft = Mn),
        (h.prototype.shiftRight = Sn),
        (h.prototype.getLowestSetBit = En),
        (h.prototype.bitCount = On),
        (h.prototype.testBit = Nn),
        (h.prototype.setBit = Dn),
        (h.prototype.clearBit = Bn),
        (h.prototype.flipBit = kn),
        (h.prototype.add = Rn),
        (h.prototype.subtract = $n),
        (h.prototype.multiply = Gn),
        (h.prototype.divide = qn),
        (h.prototype.remainder = Zn),
        (h.prototype.divideAndRemainder = zn),
        (h.prototype.modPow = rs),
        (h.prototype.modInverse = as),
        (h.prototype.pow = Vn),
        (h.prototype.gcd = os),
        (h.prototype.isProbablePrime = us),
        (h.prototype.square = Wn));
      var rt = h;
      ((rt.prototype.IsNegative = function () {
        return this.compareTo(rt.ZERO) == -1;
      }),
        (rt.op_Equality = function (t, i) {
          return t.compareTo(i) == 0;
        }),
        (rt.op_Inequality = function (t, i) {
          return t.compareTo(i) != 0;
        }),
        (rt.op_GreaterThan = function (t, i) {
          return t.compareTo(i) > 0;
        }),
        (rt.op_LessThan = function (t, i) {
          return t.compareTo(i) < 0;
        }),
        (rt.op_Addition = function (t, i) {
          return new rt(t, void 0, void 0).add(new rt(i, void 0, void 0));
        }),
        (rt.op_Subtraction = function (t, i) {
          return new rt(t, void 0, void 0).subtract(new rt(i, void 0, void 0));
        }),
        (rt.Int128Mul = function (t, i) {
          return new rt(t, void 0, void 0).multiply(new rt(i, void 0, void 0));
        }),
        (rt.op_Division = function (t, i) {
          return t.divide(i);
        }),
        (rt.prototype.ToDouble = function () {
          return parseFloat(this.toString());
        }));
      var yi = function (t, i) {
        var n;
        if (typeof Object.getOwnPropertyNames > "u") {
          for (n in i.prototype)
            (typeof t.prototype[n] > "u" || t.prototype[n] === Object.prototype[n]) &&
              (t.prototype[n] = i.prototype[n]);
          for (n in i) typeof t[n] > "u" && (t[n] = i[n]);
          t.$baseCtor = i;
        } else {
          for (var r = Object.getOwnPropertyNames(i.prototype), f = 0; f < r.length; f++)
            typeof Object.getOwnPropertyDescriptor(t.prototype, r[f]) > "u" &&
              Object.defineProperty(t.prototype, r[f], Object.getOwnPropertyDescriptor(i.prototype, r[f]));
          for (n in i) typeof t[n] > "u" && (t[n] = i[n]);
          t.$baseCtor = i;
        }
      };
      ((e.Path = function () {
        return [];
      }),
        (e.Path.prototype.push = Array.prototype.push),
        (e.Paths = function () {
          return [];
        }),
        (e.Paths.prototype.push = Array.prototype.push),
        (e.DoublePoint = function () {
          var t = arguments;
          ((this.X = 0),
            (this.Y = 0),
            t.length === 1
              ? ((this.X = t[0].X), (this.Y = t[0].Y))
              : t.length === 2 && ((this.X = t[0]), (this.Y = t[1])));
        }),
        (e.DoublePoint0 = function () {
          ((this.X = 0), (this.Y = 0));
        }),
        (e.DoublePoint0.prototype = e.DoublePoint.prototype),
        (e.DoublePoint1 = function (t) {
          ((this.X = t.X), (this.Y = t.Y));
        }),
        (e.DoublePoint1.prototype = e.DoublePoint.prototype),
        (e.DoublePoint2 = function (t, i) {
          ((this.X = t), (this.Y = i));
        }),
        (e.DoublePoint2.prototype = e.DoublePoint.prototype),
        (e.PolyNode = function () {
          ((this.m_Parent = null),
            (this.m_polygon = new e.Path()),
            (this.m_Index = 0),
            (this.m_jointype = 0),
            (this.m_endtype = 0),
            (this.m_Childs = []),
            (this.IsOpen = !1));
        }),
        (e.PolyNode.prototype.IsHoleNode = function () {
          for (var t = !0, i = this.m_Parent; i !== null; ) ((t = !t), (i = i.m_Parent));
          return t;
        }),
        (e.PolyNode.prototype.ChildCount = function () {
          return this.m_Childs.length;
        }),
        (e.PolyNode.prototype.Contour = function () {
          return this.m_polygon;
        }),
        (e.PolyNode.prototype.AddChild = function (t) {
          var i = this.m_Childs.length;
          (this.m_Childs.push(t), (t.m_Parent = this), (t.m_Index = i));
        }),
        (e.PolyNode.prototype.GetNext = function () {
          return this.m_Childs.length > 0 ? this.m_Childs[0] : this.GetNextSiblingUp();
        }),
        (e.PolyNode.prototype.GetNextSiblingUp = function () {
          return this.m_Parent === null
            ? null
            : this.m_Index === this.m_Parent.m_Childs.length - 1
              ? this.m_Parent.GetNextSiblingUp()
              : this.m_Parent.m_Childs[this.m_Index + 1];
        }),
        (e.PolyNode.prototype.Childs = function () {
          return this.m_Childs;
        }),
        (e.PolyNode.prototype.Parent = function () {
          return this.m_Parent;
        }),
        (e.PolyNode.prototype.IsHole = function () {
          return this.IsHoleNode();
        }),
        (e.PolyTree = function () {
          ((this.m_AllPolys = []), e.PolyNode.call(this));
        }),
        (e.PolyTree.prototype.Clear = function () {
          for (var t = 0, i = this.m_AllPolys.length; t < i; t++) this.m_AllPolys[t] = null;
          ((this.m_AllPolys.length = 0), (this.m_Childs.length = 0));
        }),
        (e.PolyTree.prototype.GetFirst = function () {
          return this.m_Childs.length > 0 ? this.m_Childs[0] : null;
        }),
        (e.PolyTree.prototype.Total = function () {
          var t = this.m_AllPolys.length;
          return (t > 0 && this.m_Childs[0] !== this.m_AllPolys[0] && t--, t);
        }),
        yi(e.PolyTree, e.PolyNode),
        (e.Math_Abs_Int64 =
          e.Math_Abs_Int32 =
          e.Math_Abs_Double =
            function (t) {
              return Math.abs(t);
            }),
        (e.Math_Max_Int32_Int32 = function (t, i) {
          return Math.max(t, i);
        }),
        a.msie || a.opera || a.safari
          ? (e.Cast_Int32 = function (t) {
              return t | 0;
            })
          : (e.Cast_Int32 = function (t) {
              return ~~t;
            }),
        typeof Number.toInteger > "u" && (Number.toInteger = null),
        a.chrome
          ? (e.Cast_Int64 = function (t) {
              return t < -2147483648 || t > 2147483647 ? (t < 0 ? Math.ceil(t) : Math.floor(t)) : ~~t;
            })
          : a.firefox && typeof Number.toInteger == "function"
            ? (e.Cast_Int64 = function (t) {
                return Number.toInteger(t);
              })
            : a.msie7 || a.msie8
              ? (e.Cast_Int64 = function (t) {
                  return parseInt(t, 10);
                })
              : a.msie
                ? (e.Cast_Int64 = function (t) {
                    return t < -2147483648 || t > 2147483647 ? (t < 0 ? Math.ceil(t) : Math.floor(t)) : t | 0;
                  })
                : (e.Cast_Int64 = function (t) {
                    return t < 0 ? Math.ceil(t) : Math.floor(t);
                  }),
        (e.Clear = function (t) {
          t.length = 0;
        }),
        (e.PI = 3.141592653589793),
        (e.PI2 = 2 * 3.141592653589793),
        (e.IntPoint = function () {
          var t = arguments,
            i = t.length;
          if (((this.X = 0), (this.Y = 0), e.use_xyz))
            if (((this.Z = 0), i === 3)) ((this.X = t[0]), (this.Y = t[1]), (this.Z = t[2]));
            else if (i === 2) ((this.X = t[0]), (this.Y = t[1]), (this.Z = 0));
            else if (i === 1)
              if (t[0] instanceof e.DoublePoint) {
                var n = t[0];
                ((this.X = e.Clipper.Round(n.X)), (this.Y = e.Clipper.Round(n.Y)), (this.Z = 0));
              } else {
                var r = t[0];
                (typeof r.Z > "u" && (r.Z = 0), (this.X = r.X), (this.Y = r.Y), (this.Z = r.Z));
              }
            else ((this.X = 0), (this.Y = 0), (this.Z = 0));
          else if (i === 2) ((this.X = t[0]), (this.Y = t[1]));
          else if (i === 1)
            if (t[0] instanceof e.DoublePoint) {
              var n = t[0];
              ((this.X = e.Clipper.Round(n.X)), (this.Y = e.Clipper.Round(n.Y)));
            } else {
              var r = t[0];
              ((this.X = r.X), (this.Y = r.Y));
            }
          else ((this.X = 0), (this.Y = 0));
        }),
        (e.IntPoint.op_Equality = function (t, i) {
          return t.X === i.X && t.Y === i.Y;
        }),
        (e.IntPoint.op_Inequality = function (t, i) {
          return t.X !== i.X || t.Y !== i.Y;
        }),
        (e.IntPoint0 = function () {
          ((this.X = 0), (this.Y = 0), e.use_xyz && (this.Z = 0));
        }),
        (e.IntPoint0.prototype = e.IntPoint.prototype),
        (e.IntPoint1 = function (t) {
          ((this.X = t.X), (this.Y = t.Y), e.use_xyz && (typeof t.Z > "u" ? (this.Z = 0) : (this.Z = t.Z)));
        }),
        (e.IntPoint1.prototype = e.IntPoint.prototype),
        (e.IntPoint1dp = function (t) {
          ((this.X = e.Clipper.Round(t.X)), (this.Y = e.Clipper.Round(t.Y)), e.use_xyz && (this.Z = 0));
        }),
        (e.IntPoint1dp.prototype = e.IntPoint.prototype),
        (e.IntPoint2 = function (t, i, n) {
          ((this.X = t), (this.Y = i), e.use_xyz && (typeof n > "u" ? (this.Z = 0) : (this.Z = n)));
        }),
        (e.IntPoint2.prototype = e.IntPoint.prototype),
        (e.IntRect = function () {
          var t = arguments,
            i = t.length;
          if (i === 4) ((this.left = t[0]), (this.top = t[1]), (this.right = t[2]), (this.bottom = t[3]));
          else if (i === 1) {
            var n = t[0];
            ((this.left = n.left), (this.top = n.top), (this.right = n.right), (this.bottom = n.bottom));
          } else ((this.left = 0), (this.top = 0), (this.right = 0), (this.bottom = 0));
        }),
        (e.IntRect0 = function () {
          ((this.left = 0), (this.top = 0), (this.right = 0), (this.bottom = 0));
        }),
        (e.IntRect0.prototype = e.IntRect.prototype),
        (e.IntRect1 = function (t) {
          ((this.left = t.left), (this.top = t.top), (this.right = t.right), (this.bottom = t.bottom));
        }),
        (e.IntRect1.prototype = e.IntRect.prototype),
        (e.IntRect4 = function (t, i, n, r) {
          ((this.left = t), (this.top = i), (this.right = n), (this.bottom = r));
        }),
        (e.IntRect4.prototype = e.IntRect.prototype),
        (e.ClipType = { ctIntersection: 0, ctUnion: 1, ctDifference: 2, ctXor: 3 }),
        (e.PolyType = { ptSubject: 0, ptClip: 1 }),
        (e.PolyFillType = { pftEvenOdd: 0, pftNonZero: 1, pftPositive: 2, pftNegative: 3 }),
        (e.JoinType = { jtSquare: 0, jtRound: 1, jtMiter: 2 }),
        (e.EndType = { etOpenSquare: 0, etOpenRound: 1, etOpenButt: 2, etClosedLine: 3, etClosedPolygon: 4 }),
        (e.EdgeSide = { esLeft: 0, esRight: 1 }),
        (e.Direction = { dRightToLeft: 0, dLeftToRight: 1 }),
        (e.TEdge = function () {
          ((this.Bot = new e.IntPoint0()),
            (this.Curr = new e.IntPoint0()),
            (this.Top = new e.IntPoint0()),
            (this.Delta = new e.IntPoint0()),
            (this.Dx = 0),
            (this.PolyTyp = e.PolyType.ptSubject),
            (this.Side = e.EdgeSide.esLeft),
            (this.WindDelta = 0),
            (this.WindCnt = 0),
            (this.WindCnt2 = 0),
            (this.OutIdx = 0),
            (this.Next = null),
            (this.Prev = null),
            (this.NextInLML = null),
            (this.NextInAEL = null),
            (this.PrevInAEL = null),
            (this.NextInSEL = null),
            (this.PrevInSEL = null));
        }),
        (e.IntersectNode = function () {
          ((this.Edge1 = null), (this.Edge2 = null), (this.Pt = new e.IntPoint0()));
        }),
        (e.MyIntersectNodeSort = function () {}),
        (e.MyIntersectNodeSort.Compare = function (t, i) {
          var n = i.Pt.Y - t.Pt.Y;
          return n > 0 ? 1 : n < 0 ? -1 : 0;
        }),
        (e.LocalMinima = function () {
          ((this.Y = 0), (this.LeftBound = null), (this.RightBound = null), (this.Next = null));
        }),
        (e.Scanbeam = function () {
          ((this.Y = 0), (this.Next = null));
        }),
        (e.Maxima = function () {
          ((this.X = 0), (this.Next = null), (this.Prev = null));
        }),
        (e.OutRec = function () {
          ((this.Idx = 0),
            (this.IsHole = !1),
            (this.IsOpen = !1),
            (this.FirstLeft = null),
            (this.Pts = null),
            (this.BottomPt = null),
            (this.PolyNode = null));
        }),
        (e.OutPt = function () {
          ((this.Idx = 0), (this.Pt = new e.IntPoint0()), (this.Next = null), (this.Prev = null));
        }),
        (e.Join = function () {
          ((this.OutPt1 = null), (this.OutPt2 = null), (this.OffPt = new e.IntPoint0()));
        }),
        (e.ClipperBase = function () {
          ((this.m_MinimaList = null),
            (this.m_CurrentLM = null),
            (this.m_edges = new Array()),
            (this.m_UseFullRange = !1),
            (this.m_HasOpenPaths = !1),
            (this.PreserveCollinear = !1),
            (this.m_Scanbeam = null),
            (this.m_PolyOuts = null),
            (this.m_ActiveEdges = null));
        }),
        (e.ClipperBase.horizontal = -9007199254740992),
        (e.ClipperBase.Skip = -2),
        (e.ClipperBase.Unassigned = -1),
        (e.ClipperBase.tolerance = 1e-20),
        (e.ClipperBase.loRange = 47453132),
        (e.ClipperBase.hiRange = 0xfffffffffffff),
        (e.ClipperBase.near_zero = function (t) {
          return t > -e.ClipperBase.tolerance && t < e.ClipperBase.tolerance;
        }),
        (e.ClipperBase.IsHorizontal = function (t) {
          return t.Delta.Y === 0;
        }),
        (e.ClipperBase.prototype.PointIsVertex = function (t, i) {
          var n = i;
          do {
            if (e.IntPoint.op_Equality(n.Pt, t)) return !0;
            n = n.Next;
          } while (n !== i);
          return !1;
        }),
        (e.ClipperBase.prototype.PointOnLineSegment = function (t, i, n, r) {
          return r
            ? (t.X === i.X && t.Y === i.Y) ||
                (t.X === n.X && t.Y === n.Y) ||
                (t.X > i.X == t.X < n.X &&
                  t.Y > i.Y == t.Y < n.Y &&
                  rt.op_Equality(rt.Int128Mul(t.X - i.X, n.Y - i.Y), rt.Int128Mul(n.X - i.X, t.Y - i.Y)))
            : (t.X === i.X && t.Y === i.Y) ||
                (t.X === n.X && t.Y === n.Y) ||
                (t.X > i.X == t.X < n.X &&
                  t.Y > i.Y == t.Y < n.Y &&
                  (t.X - i.X) * (n.Y - i.Y) === (n.X - i.X) * (t.Y - i.Y));
        }),
        (e.ClipperBase.prototype.PointOnPolygon = function (t, i, n) {
          for (var r = i; ; ) {
            if (this.PointOnLineSegment(t, r.Pt, r.Next.Pt, n)) return !0;
            if (((r = r.Next), r === i)) break;
          }
          return !1;
        }),
        (e.ClipperBase.prototype.SlopesEqual = e.ClipperBase.SlopesEqual =
          function () {
            var t = arguments,
              i = t.length,
              n,
              r,
              f,
              c,
              y,
              g,
              C;
            return i === 3
              ? ((n = t[0]),
                (r = t[1]),
                (C = t[2]),
                C
                  ? rt.op_Equality(rt.Int128Mul(n.Delta.Y, r.Delta.X), rt.Int128Mul(n.Delta.X, r.Delta.Y))
                  : e.Cast_Int64(n.Delta.Y * r.Delta.X) === e.Cast_Int64(n.Delta.X * r.Delta.Y))
              : i === 4
                ? ((f = t[0]),
                  (c = t[1]),
                  (y = t[2]),
                  (C = t[3]),
                  C
                    ? rt.op_Equality(rt.Int128Mul(f.Y - c.Y, c.X - y.X), rt.Int128Mul(f.X - c.X, c.Y - y.Y))
                    : e.Cast_Int64((f.Y - c.Y) * (c.X - y.X)) - e.Cast_Int64((f.X - c.X) * (c.Y - y.Y)) === 0)
                : ((f = t[0]),
                  (c = t[1]),
                  (y = t[2]),
                  (g = t[3]),
                  (C = t[4]),
                  C
                    ? rt.op_Equality(rt.Int128Mul(f.Y - c.Y, y.X - g.X), rt.Int128Mul(f.X - c.X, y.Y - g.Y))
                    : e.Cast_Int64((f.Y - c.Y) * (y.X - g.X)) - e.Cast_Int64((f.X - c.X) * (y.Y - g.Y)) ===
                      0);
          }),
        (e.ClipperBase.SlopesEqual3 = function (t, i, n) {
          return n
            ? rt.op_Equality(rt.Int128Mul(t.Delta.Y, i.Delta.X), rt.Int128Mul(t.Delta.X, i.Delta.Y))
            : e.Cast_Int64(t.Delta.Y * i.Delta.X) === e.Cast_Int64(t.Delta.X * i.Delta.Y);
        }),
        (e.ClipperBase.SlopesEqual4 = function (t, i, n, r) {
          return r
            ? rt.op_Equality(rt.Int128Mul(t.Y - i.Y, i.X - n.X), rt.Int128Mul(t.X - i.X, i.Y - n.Y))
            : e.Cast_Int64((t.Y - i.Y) * (i.X - n.X)) - e.Cast_Int64((t.X - i.X) * (i.Y - n.Y)) === 0;
        }),
        (e.ClipperBase.SlopesEqual5 = function (t, i, n, r, f) {
          return f
            ? rt.op_Equality(rt.Int128Mul(t.Y - i.Y, n.X - r.X), rt.Int128Mul(t.X - i.X, n.Y - r.Y))
            : e.Cast_Int64((t.Y - i.Y) * (n.X - r.X)) - e.Cast_Int64((t.X - i.X) * (n.Y - r.Y)) === 0;
        }),
        (e.ClipperBase.prototype.Clear = function () {
          this.DisposeLocalMinimaList();
          for (var t = 0, i = this.m_edges.length; t < i; ++t) {
            for (var n = 0, r = this.m_edges[t].length; n < r; ++n) this.m_edges[t][n] = null;
            e.Clear(this.m_edges[t]);
          }
          (e.Clear(this.m_edges), (this.m_UseFullRange = !1), (this.m_HasOpenPaths = !1));
        }),
        (e.ClipperBase.prototype.DisposeLocalMinimaList = function () {
          for (; this.m_MinimaList !== null; ) {
            var t = this.m_MinimaList.Next;
            ((this.m_MinimaList = null), (this.m_MinimaList = t));
          }
          this.m_CurrentLM = null;
        }),
        (e.ClipperBase.prototype.RangeTest = function (t, i) {
          i.Value
            ? (t.X > e.ClipperBase.hiRange ||
                t.Y > e.ClipperBase.hiRange ||
                -t.X > e.ClipperBase.hiRange ||
                -t.Y > e.ClipperBase.hiRange) &&
              e.Error("Coordinate outside allowed range in RangeTest().")
            : (t.X > e.ClipperBase.loRange ||
                t.Y > e.ClipperBase.loRange ||
                -t.X > e.ClipperBase.loRange ||
                -t.Y > e.ClipperBase.loRange) &&
              ((i.Value = !0), this.RangeTest(t, i));
        }),
        (e.ClipperBase.prototype.InitEdge = function (t, i, n, r) {
          ((t.Next = i),
            (t.Prev = n),
            (t.Curr.X = r.X),
            (t.Curr.Y = r.Y),
            e.use_xyz && (t.Curr.Z = r.Z),
            (t.OutIdx = -1));
        }),
        (e.ClipperBase.prototype.InitEdge2 = function (t, i) {
          (t.Curr.Y >= t.Next.Curr.Y
            ? ((t.Bot.X = t.Curr.X),
              (t.Bot.Y = t.Curr.Y),
              e.use_xyz && (t.Bot.Z = t.Curr.Z),
              (t.Top.X = t.Next.Curr.X),
              (t.Top.Y = t.Next.Curr.Y),
              e.use_xyz && (t.Top.Z = t.Next.Curr.Z))
            : ((t.Top.X = t.Curr.X),
              (t.Top.Y = t.Curr.Y),
              e.use_xyz && (t.Top.Z = t.Curr.Z),
              (t.Bot.X = t.Next.Curr.X),
              (t.Bot.Y = t.Next.Curr.Y),
              e.use_xyz && (t.Bot.Z = t.Next.Curr.Z)),
            this.SetDx(t),
            (t.PolyTyp = i));
        }),
        (e.ClipperBase.prototype.FindNextLocMin = function (t) {
          for (var i; ; ) {
            for (; e.IntPoint.op_Inequality(t.Bot, t.Prev.Bot) || e.IntPoint.op_Equality(t.Curr, t.Top); )
              t = t.Next;
            if (t.Dx !== e.ClipperBase.horizontal && t.Prev.Dx !== e.ClipperBase.horizontal) break;
            for (; t.Prev.Dx === e.ClipperBase.horizontal; ) t = t.Prev;
            for (i = t; t.Dx === e.ClipperBase.horizontal; ) t = t.Next;
            if (t.Top.Y !== t.Prev.Bot.Y) {
              i.Prev.Bot.X < t.Bot.X && (t = i);
              break;
            }
          }
          return t;
        }),
        (e.ClipperBase.prototype.ProcessBound = function (t, i) {
          var n,
            r = t,
            f;
          if (r.OutIdx === e.ClipperBase.Skip) {
            if (((t = r), i)) {
              for (; t.Top.Y === t.Next.Bot.Y; ) t = t.Next;
              for (; t !== r && t.Dx === e.ClipperBase.horizontal; ) t = t.Prev;
            } else {
              for (; t.Top.Y === t.Prev.Bot.Y; ) t = t.Prev;
              for (; t !== r && t.Dx === e.ClipperBase.horizontal; ) t = t.Next;
            }
            if (t === r) i ? (r = t.Next) : (r = t.Prev);
            else {
              i ? (t = r.Next) : (t = r.Prev);
              var c = new e.LocalMinima();
              ((c.Next = null),
                (c.Y = t.Bot.Y),
                (c.LeftBound = null),
                (c.RightBound = t),
                (t.WindDelta = 0),
                (r = this.ProcessBound(t, i)),
                this.InsertLocalMinima(c));
            }
            return r;
          }
          if (
            (t.Dx === e.ClipperBase.horizontal &&
              (i ? (n = t.Prev) : (n = t.Next),
              n.Dx === e.ClipperBase.horizontal
                ? n.Bot.X !== t.Bot.X && n.Top.X !== t.Bot.X && this.ReverseHorizontal(t)
                : n.Bot.X !== t.Bot.X && this.ReverseHorizontal(t)),
            (n = t),
            i)
          ) {
            for (; r.Top.Y === r.Next.Bot.Y && r.Next.OutIdx !== e.ClipperBase.Skip; ) r = r.Next;
            if (r.Dx === e.ClipperBase.horizontal && r.Next.OutIdx !== e.ClipperBase.Skip) {
              for (f = r; f.Prev.Dx === e.ClipperBase.horizontal; ) f = f.Prev;
              f.Prev.Top.X > r.Next.Top.X && (r = f.Prev);
            }
            for (; t !== r; )
              ((t.NextInLML = t.Next),
                t.Dx === e.ClipperBase.horizontal &&
                  t !== n &&
                  t.Bot.X !== t.Prev.Top.X &&
                  this.ReverseHorizontal(t),
                (t = t.Next));
            (t.Dx === e.ClipperBase.horizontal &&
              t !== n &&
              t.Bot.X !== t.Prev.Top.X &&
              this.ReverseHorizontal(t),
              (r = r.Next));
          } else {
            for (; r.Top.Y === r.Prev.Bot.Y && r.Prev.OutIdx !== e.ClipperBase.Skip; ) r = r.Prev;
            if (r.Dx === e.ClipperBase.horizontal && r.Prev.OutIdx !== e.ClipperBase.Skip) {
              for (f = r; f.Next.Dx === e.ClipperBase.horizontal; ) f = f.Next;
              (f.Next.Top.X === r.Prev.Top.X || f.Next.Top.X > r.Prev.Top.X) && (r = f.Next);
            }
            for (; t !== r; )
              ((t.NextInLML = t.Prev),
                t.Dx === e.ClipperBase.horizontal &&
                  t !== n &&
                  t.Bot.X !== t.Next.Top.X &&
                  this.ReverseHorizontal(t),
                (t = t.Prev));
            (t.Dx === e.ClipperBase.horizontal &&
              t !== n &&
              t.Bot.X !== t.Next.Top.X &&
              this.ReverseHorizontal(t),
              (r = r.Prev));
          }
          return r;
        }),
        (e.ClipperBase.prototype.AddPath = function (t, i, n) {
          e.use_lines
            ? !n && i === e.PolyType.ptClip && e.Error("AddPath: Open paths must be subject.")
            : n || e.Error("AddPath: Open paths have been disabled.");
          var r = t.length - 1;
          if (n) for (; r > 0 && e.IntPoint.op_Equality(t[r], t[0]); ) --r;
          for (; r > 0 && e.IntPoint.op_Equality(t[r], t[r - 1]); ) --r;
          if ((n && r < 2) || (!n && r < 1)) return !1;
          for (var f = new Array(), c = 0; c <= r; c++) f.push(new e.TEdge());
          var y = !0;
          ((f[1].Curr.X = t[1].X), (f[1].Curr.Y = t[1].Y), e.use_xyz && (f[1].Curr.Z = t[1].Z));
          var g = { Value: this.m_UseFullRange };
          (this.RangeTest(t[0], g),
            (this.m_UseFullRange = g.Value),
            (g.Value = this.m_UseFullRange),
            this.RangeTest(t[r], g),
            (this.m_UseFullRange = g.Value),
            this.InitEdge(f[0], f[1], f[r], t[0]),
            this.InitEdge(f[r], f[0], f[r - 1], t[r]));
          for (var c = r - 1; c >= 1; --c)
            ((g.Value = this.m_UseFullRange),
              this.RangeTest(t[c], g),
              (this.m_UseFullRange = g.Value),
              this.InitEdge(f[c], f[c + 1], f[c - 1], t[c]));
          for (var C = f[0], L = C, k = C; ; ) {
            if (L.Curr === L.Next.Curr && (n || L.Next !== C)) {
              if (L === L.Next) break;
              (L === C && (C = L.Next), (L = this.RemoveEdge(L)), (k = L));
              continue;
            }
            if (L.Prev === L.Next) break;
            if (
              n &&
              e.ClipperBase.SlopesEqual4(L.Prev.Curr, L.Curr, L.Next.Curr, this.m_UseFullRange) &&
              (!this.PreserveCollinear || !this.Pt2IsBetweenPt1AndPt3(L.Prev.Curr, L.Curr, L.Next.Curr))
            ) {
              (L === C && (C = L.Next), (L = this.RemoveEdge(L)), (L = L.Prev), (k = L));
              continue;
            }
            if (((L = L.Next), L === k || (!n && L.Next === C))) break;
          }
          if ((!n && L === L.Next) || (n && L.Prev === L.Next)) return !1;
          (n || ((this.m_HasOpenPaths = !0), (C.Prev.OutIdx = e.ClipperBase.Skip)), (L = C));
          do (this.InitEdge2(L, i), (L = L.Next), y && L.Curr.Y !== C.Curr.Y && (y = !1));
          while (L !== C);
          if (y) {
            if (n) return !1;
            L.Prev.OutIdx = e.ClipperBase.Skip;
            var N = new e.LocalMinima();
            for (
              N.Next = null,
                N.Y = L.Bot.Y,
                N.LeftBound = null,
                N.RightBound = L,
                N.RightBound.Side = e.EdgeSide.esRight,
                N.RightBound.WindDelta = 0;
              L.Bot.X !== L.Prev.Top.X && this.ReverseHorizontal(L), L.Next.OutIdx !== e.ClipperBase.Skip;
            )
              ((L.NextInLML = L.Next), (L = L.Next));
            return (this.InsertLocalMinima(N), this.m_edges.push(f), !0);
          }
          this.m_edges.push(f);
          var q,
            K = null;
          for (
            e.IntPoint.op_Equality(L.Prev.Bot, L.Prev.Top) && (L = L.Next);
            (L = this.FindNextLocMin(L)), L !== K;
          ) {
            K === null && (K = L);
            var N = new e.LocalMinima();
            ((N.Next = null),
              (N.Y = L.Bot.Y),
              L.Dx < L.Prev.Dx
                ? ((N.LeftBound = L.Prev), (N.RightBound = L), (q = !1))
                : ((N.LeftBound = L), (N.RightBound = L.Prev), (q = !0)),
              (N.LeftBound.Side = e.EdgeSide.esLeft),
              (N.RightBound.Side = e.EdgeSide.esRight),
              n
                ? N.LeftBound.Next === N.RightBound
                  ? (N.LeftBound.WindDelta = -1)
                  : (N.LeftBound.WindDelta = 1)
                : (N.LeftBound.WindDelta = 0),
              (N.RightBound.WindDelta = -N.LeftBound.WindDelta),
              (L = this.ProcessBound(N.LeftBound, q)),
              L.OutIdx === e.ClipperBase.Skip && (L = this.ProcessBound(L, q)));
            var ot = this.ProcessBound(N.RightBound, !q);
            (ot.OutIdx === e.ClipperBase.Skip && (ot = this.ProcessBound(ot, !q)),
              N.LeftBound.OutIdx === e.ClipperBase.Skip
                ? (N.LeftBound = null)
                : N.RightBound.OutIdx === e.ClipperBase.Skip && (N.RightBound = null),
              this.InsertLocalMinima(N),
              q || (L = ot));
          }
          return !0;
        }),
        (e.ClipperBase.prototype.AddPaths = function (t, i, n) {
          for (var r = !1, f = 0, c = t.length; f < c; ++f) this.AddPath(t[f], i, n) && (r = !0);
          return r;
        }),
        (e.ClipperBase.prototype.Pt2IsBetweenPt1AndPt3 = function (t, i, n) {
          return e.IntPoint.op_Equality(t, n) || e.IntPoint.op_Equality(t, i) || e.IntPoint.op_Equality(n, i)
            ? !1
            : t.X !== n.X
              ? i.X > t.X == i.X < n.X
              : i.Y > t.Y == i.Y < n.Y;
        }),
        (e.ClipperBase.prototype.RemoveEdge = function (t) {
          ((t.Prev.Next = t.Next), (t.Next.Prev = t.Prev));
          var i = t.Next;
          return ((t.Prev = null), i);
        }),
        (e.ClipperBase.prototype.SetDx = function (t) {
          ((t.Delta.X = t.Top.X - t.Bot.X),
            (t.Delta.Y = t.Top.Y - t.Bot.Y),
            t.Delta.Y === 0 ? (t.Dx = e.ClipperBase.horizontal) : (t.Dx = t.Delta.X / t.Delta.Y));
        }),
        (e.ClipperBase.prototype.InsertLocalMinima = function (t) {
          if (this.m_MinimaList === null) this.m_MinimaList = t;
          else if (t.Y >= this.m_MinimaList.Y) ((t.Next = this.m_MinimaList), (this.m_MinimaList = t));
          else {
            for (var i = this.m_MinimaList; i.Next !== null && t.Y < i.Next.Y; ) i = i.Next;
            ((t.Next = i.Next), (i.Next = t));
          }
        }),
        (e.ClipperBase.prototype.PopLocalMinima = function (t, i) {
          return (
            (i.v = this.m_CurrentLM),
            this.m_CurrentLM !== null && this.m_CurrentLM.Y === t
              ? ((this.m_CurrentLM = this.m_CurrentLM.Next), !0)
              : !1
          );
        }),
        (e.ClipperBase.prototype.ReverseHorizontal = function (t) {
          var i = t.Top.X;
          ((t.Top.X = t.Bot.X),
            (t.Bot.X = i),
            e.use_xyz && ((i = t.Top.Z), (t.Top.Z = t.Bot.Z), (t.Bot.Z = i)));
        }),
        (e.ClipperBase.prototype.Reset = function () {
          if (((this.m_CurrentLM = this.m_MinimaList), this.m_CurrentLM !== null)) {
            this.m_Scanbeam = null;
            for (var t = this.m_MinimaList; t !== null; ) {
              this.InsertScanbeam(t.Y);
              var i = t.LeftBound;
              (i !== null &&
                ((i.Curr.X = i.Bot.X),
                (i.Curr.Y = i.Bot.Y),
                e.use_xyz && (i.Curr.Z = i.Bot.Z),
                (i.OutIdx = e.ClipperBase.Unassigned)),
                (i = t.RightBound),
                i !== null &&
                  ((i.Curr.X = i.Bot.X),
                  (i.Curr.Y = i.Bot.Y),
                  e.use_xyz && (i.Curr.Z = i.Bot.Z),
                  (i.OutIdx = e.ClipperBase.Unassigned)),
                (t = t.Next));
            }
            this.m_ActiveEdges = null;
          }
        }),
        (e.ClipperBase.prototype.InsertScanbeam = function (t) {
          if (this.m_Scanbeam === null)
            ((this.m_Scanbeam = new e.Scanbeam()), (this.m_Scanbeam.Next = null), (this.m_Scanbeam.Y = t));
          else if (t > this.m_Scanbeam.Y) {
            var i = new e.Scanbeam();
            ((i.Y = t), (i.Next = this.m_Scanbeam), (this.m_Scanbeam = i));
          } else {
            for (var n = this.m_Scanbeam; n.Next !== null && t <= n.Next.Y; ) n = n.Next;
            if (t === n.Y) return;
            var r = new e.Scanbeam();
            ((r.Y = t), (r.Next = n.Next), (n.Next = r));
          }
        }),
        (e.ClipperBase.prototype.PopScanbeam = function (t) {
          return this.m_Scanbeam === null
            ? ((t.v = 0), !1)
            : ((t.v = this.m_Scanbeam.Y), (this.m_Scanbeam = this.m_Scanbeam.Next), !0);
        }),
        (e.ClipperBase.prototype.LocalMinimaPending = function () {
          return this.m_CurrentLM !== null;
        }),
        (e.ClipperBase.prototype.CreateOutRec = function () {
          var t = new e.OutRec();
          return (
            (t.Idx = e.ClipperBase.Unassigned),
            (t.IsHole = !1),
            (t.IsOpen = !1),
            (t.FirstLeft = null),
            (t.Pts = null),
            (t.BottomPt = null),
            (t.PolyNode = null),
            this.m_PolyOuts.push(t),
            (t.Idx = this.m_PolyOuts.length - 1),
            t
          );
        }),
        (e.ClipperBase.prototype.DisposeOutRec = function (t) {
          var i = this.m_PolyOuts[t];
          ((i.Pts = null), (i = null), (this.m_PolyOuts[t] = null));
        }),
        (e.ClipperBase.prototype.UpdateEdgeIntoAEL = function (t) {
          t.NextInLML === null && e.Error("UpdateEdgeIntoAEL: invalid call");
          var i = t.PrevInAEL,
            n = t.NextInAEL;
          return (
            (t.NextInLML.OutIdx = t.OutIdx),
            i !== null ? (i.NextInAEL = t.NextInLML) : (this.m_ActiveEdges = t.NextInLML),
            n !== null && (n.PrevInAEL = t.NextInLML),
            (t.NextInLML.Side = t.Side),
            (t.NextInLML.WindDelta = t.WindDelta),
            (t.NextInLML.WindCnt = t.WindCnt),
            (t.NextInLML.WindCnt2 = t.WindCnt2),
            (t = t.NextInLML),
            (t.Curr.X = t.Bot.X),
            (t.Curr.Y = t.Bot.Y),
            (t.PrevInAEL = i),
            (t.NextInAEL = n),
            e.ClipperBase.IsHorizontal(t) || this.InsertScanbeam(t.Top.Y),
            t
          );
        }),
        (e.ClipperBase.prototype.SwapPositionsInAEL = function (t, i) {
          if (!(t.NextInAEL === t.PrevInAEL || i.NextInAEL === i.PrevInAEL)) {
            if (t.NextInAEL === i) {
              var n = i.NextInAEL;
              n !== null && (n.PrevInAEL = t);
              var r = t.PrevInAEL;
              (r !== null && (r.NextInAEL = i),
                (i.PrevInAEL = r),
                (i.NextInAEL = t),
                (t.PrevInAEL = i),
                (t.NextInAEL = n));
            } else if (i.NextInAEL === t) {
              var f = t.NextInAEL;
              f !== null && (f.PrevInAEL = i);
              var c = i.PrevInAEL;
              (c !== null && (c.NextInAEL = t),
                (t.PrevInAEL = c),
                (t.NextInAEL = i),
                (i.PrevInAEL = t),
                (i.NextInAEL = f));
            } else {
              var y = t.NextInAEL,
                g = t.PrevInAEL;
              ((t.NextInAEL = i.NextInAEL),
                t.NextInAEL !== null && (t.NextInAEL.PrevInAEL = t),
                (t.PrevInAEL = i.PrevInAEL),
                t.PrevInAEL !== null && (t.PrevInAEL.NextInAEL = t),
                (i.NextInAEL = y),
                i.NextInAEL !== null && (i.NextInAEL.PrevInAEL = i),
                (i.PrevInAEL = g),
                i.PrevInAEL !== null && (i.PrevInAEL.NextInAEL = i));
            }
            t.PrevInAEL === null
              ? (this.m_ActiveEdges = t)
              : i.PrevInAEL === null && (this.m_ActiveEdges = i);
          }
        }),
        (e.ClipperBase.prototype.DeleteFromAEL = function (t) {
          var i = t.PrevInAEL,
            n = t.NextInAEL;
          (i === null && n === null && t !== this.m_ActiveEdges) ||
            (i !== null ? (i.NextInAEL = n) : (this.m_ActiveEdges = n),
            n !== null && (n.PrevInAEL = i),
            (t.NextInAEL = null),
            (t.PrevInAEL = null));
        }),
        (e.Clipper = function (t) {
          (typeof t > "u" && (t = 0),
            (this.m_PolyOuts = null),
            (this.m_ClipType = e.ClipType.ctIntersection),
            (this.m_Scanbeam = null),
            (this.m_Maxima = null),
            (this.m_ActiveEdges = null),
            (this.m_SortedEdges = null),
            (this.m_IntersectList = null),
            (this.m_IntersectNodeComparer = null),
            (this.m_ExecuteLocked = !1),
            (this.m_ClipFillType = e.PolyFillType.pftEvenOdd),
            (this.m_SubjFillType = e.PolyFillType.pftEvenOdd),
            (this.m_Joins = null),
            (this.m_GhostJoins = null),
            (this.m_UsingPolyTree = !1),
            (this.ReverseSolution = !1),
            (this.StrictlySimple = !1),
            e.ClipperBase.call(this),
            (this.m_Scanbeam = null),
            (this.m_Maxima = null),
            (this.m_ActiveEdges = null),
            (this.m_SortedEdges = null),
            (this.m_IntersectList = new Array()),
            (this.m_IntersectNodeComparer = e.MyIntersectNodeSort.Compare),
            (this.m_ExecuteLocked = !1),
            (this.m_UsingPolyTree = !1),
            (this.m_PolyOuts = new Array()),
            (this.m_Joins = new Array()),
            (this.m_GhostJoins = new Array()),
            (this.ReverseSolution = (1 & t) !== 0),
            (this.StrictlySimple = (2 & t) !== 0),
            (this.PreserveCollinear = (4 & t) !== 0),
            e.use_xyz && (this.ZFillFunction = null));
        }),
        (e.Clipper.ioReverseSolution = 1),
        (e.Clipper.ioStrictlySimple = 2),
        (e.Clipper.ioPreserveCollinear = 4),
        (e.Clipper.prototype.Clear = function () {
          this.m_edges.length !== 0 && (this.DisposeAllPolyPts(), e.ClipperBase.prototype.Clear.call(this));
        }),
        (e.Clipper.prototype.InsertMaxima = function (t) {
          var i = new e.Maxima();
          if (((i.X = t), this.m_Maxima === null))
            ((this.m_Maxima = i), (this.m_Maxima.Next = null), (this.m_Maxima.Prev = null));
          else if (t < this.m_Maxima.X) ((i.Next = this.m_Maxima), (i.Prev = null), (this.m_Maxima = i));
          else {
            for (var n = this.m_Maxima; n.Next !== null && t >= n.Next.X; ) n = n.Next;
            if (t === n.X) return;
            ((i.Next = n.Next), (i.Prev = n), n.Next !== null && (n.Next.Prev = i), (n.Next = i));
          }
        }),
        (e.Clipper.prototype.Execute = function () {
          var t = arguments,
            i = t.length,
            n = t[1] instanceof e.PolyTree;
          if (i === 4 && !n) {
            var r = t[0],
              f = t[1],
              c = t[2],
              y = t[3];
            if (this.m_ExecuteLocked) return !1;
            (this.m_HasOpenPaths && e.Error("Error: PolyTree struct is needed for open path clipping."),
              (this.m_ExecuteLocked = !0),
              e.Clear(f),
              (this.m_SubjFillType = c),
              (this.m_ClipFillType = y),
              (this.m_ClipType = r),
              (this.m_UsingPolyTree = !1));
            try {
              var g = this.ExecuteInternal();
              g && this.BuildResult(f);
            } finally {
              (this.DisposeAllPolyPts(), (this.m_ExecuteLocked = !1));
            }
            return g;
          } else if (i === 4 && n) {
            var r = t[0],
              C = t[1],
              c = t[2],
              y = t[3];
            if (this.m_ExecuteLocked) return !1;
            ((this.m_ExecuteLocked = !0),
              (this.m_SubjFillType = c),
              (this.m_ClipFillType = y),
              (this.m_ClipType = r),
              (this.m_UsingPolyTree = !0));
            try {
              var g = this.ExecuteInternal();
              g && this.BuildResult2(C);
            } finally {
              (this.DisposeAllPolyPts(), (this.m_ExecuteLocked = !1));
            }
            return g;
          } else if (i === 2 && !n) {
            var r = t[0],
              f = t[1];
            return this.Execute(r, f, e.PolyFillType.pftEvenOdd, e.PolyFillType.pftEvenOdd);
          } else if (i === 2 && n) {
            var r = t[0],
              C = t[1];
            return this.Execute(r, C, e.PolyFillType.pftEvenOdd, e.PolyFillType.pftEvenOdd);
          }
        }),
        (e.Clipper.prototype.FixHoleLinkage = function (t) {
          if (!(t.FirstLeft === null || (t.IsHole !== t.FirstLeft.IsHole && t.FirstLeft.Pts !== null))) {
            for (var i = t.FirstLeft; i !== null && (i.IsHole === t.IsHole || i.Pts === null); )
              i = i.FirstLeft;
            t.FirstLeft = i;
          }
        }),
        (e.Clipper.prototype.ExecuteInternal = function () {
          try {
            (this.Reset(), (this.m_SortedEdges = null), (this.m_Maxima = null));
            var t = {},
              i = {};
            if (!this.PopScanbeam(t)) return !1;
            for (this.InsertLocalMinimaIntoAEL(t.v); this.PopScanbeam(i) || this.LocalMinimaPending(); ) {
              if (
                (this.ProcessHorizontals(), (this.m_GhostJoins.length = 0), !this.ProcessIntersections(i.v))
              )
                return !1;
              (this.ProcessEdgesAtTopOfScanbeam(i.v), (t.v = i.v), this.InsertLocalMinimaIntoAEL(t.v));
            }
            var n, r, f;
            for (r = 0, f = this.m_PolyOuts.length; r < f; r++)
              ((n = this.m_PolyOuts[r]),
                !(n.Pts === null || n.IsOpen) &&
                  (n.IsHole ^ this.ReverseSolution) == this.Area$1(n) > 0 &&
                  this.ReversePolyPtLinks(n.Pts));
            for (this.JoinCommonEdges(), r = 0, f = this.m_PolyOuts.length; r < f; r++)
              ((n = this.m_PolyOuts[r]),
                n.Pts !== null && (n.IsOpen ? this.FixupOutPolyline(n) : this.FixupOutPolygon(n)));
            return (this.StrictlySimple && this.DoSimplePolygons(), !0);
          } finally {
            ((this.m_Joins.length = 0), (this.m_GhostJoins.length = 0));
          }
        }),
        (e.Clipper.prototype.DisposeAllPolyPts = function () {
          for (var t = 0, i = this.m_PolyOuts.length; t < i; ++t) this.DisposeOutRec(t);
          e.Clear(this.m_PolyOuts);
        }),
        (e.Clipper.prototype.AddJoin = function (t, i, n) {
          var r = new e.Join();
          ((r.OutPt1 = t),
            (r.OutPt2 = i),
            (r.OffPt.X = n.X),
            (r.OffPt.Y = n.Y),
            e.use_xyz && (r.OffPt.Z = n.Z),
            this.m_Joins.push(r));
        }),
        (e.Clipper.prototype.AddGhostJoin = function (t, i) {
          var n = new e.Join();
          ((n.OutPt1 = t),
            (n.OffPt.X = i.X),
            (n.OffPt.Y = i.Y),
            e.use_xyz && (n.OffPt.Z = i.Z),
            this.m_GhostJoins.push(n));
        }),
        (e.Clipper.prototype.SetZ = function (t, i, n) {
          if (this.ZFillFunction !== null) {
            if (t.Z !== 0 || this.ZFillFunction === null) return;
            e.IntPoint.op_Equality(t, i.Bot)
              ? (t.Z = i.Bot.Z)
              : e.IntPoint.op_Equality(t, i.Top)
                ? (t.Z = i.Top.Z)
                : e.IntPoint.op_Equality(t, n.Bot)
                  ? (t.Z = n.Bot.Z)
                  : e.IntPoint.op_Equality(t, n.Top)
                    ? (t.Z = n.Top.Z)
                    : this.ZFillFunction(i.Bot, i.Top, n.Bot, n.Top, t);
          }
        }),
        (e.Clipper.prototype.InsertLocalMinimaIntoAEL = function (t) {
          for (var i = {}, n, r; this.PopLocalMinima(t, i); ) {
            ((n = i.v.LeftBound), (r = i.v.RightBound));
            var f = null;
            if (
              (n === null
                ? (this.InsertEdgeIntoAEL(r, null),
                  this.SetWindingCount(r),
                  this.IsContributing(r) && (f = this.AddOutPt(r, r.Bot)))
                : r === null
                  ? (this.InsertEdgeIntoAEL(n, null),
                    this.SetWindingCount(n),
                    this.IsContributing(n) && (f = this.AddOutPt(n, n.Bot)),
                    this.InsertScanbeam(n.Top.Y))
                  : (this.InsertEdgeIntoAEL(n, null),
                    this.InsertEdgeIntoAEL(r, n),
                    this.SetWindingCount(n),
                    (r.WindCnt = n.WindCnt),
                    (r.WindCnt2 = n.WindCnt2),
                    this.IsContributing(n) && (f = this.AddLocalMinPoly(n, r, n.Bot)),
                    this.InsertScanbeam(n.Top.Y)),
              r !== null &&
                (e.ClipperBase.IsHorizontal(r)
                  ? (r.NextInLML !== null && this.InsertScanbeam(r.NextInLML.Top.Y), this.AddEdgeToSEL(r))
                  : this.InsertScanbeam(r.Top.Y)),
              !(n === null || r === null))
            ) {
              if (
                f !== null &&
                e.ClipperBase.IsHorizontal(r) &&
                this.m_GhostJoins.length > 0 &&
                r.WindDelta !== 0
              )
                for (var c = 0, y = this.m_GhostJoins.length; c < y; c++) {
                  var g = this.m_GhostJoins[c];
                  this.HorzSegmentsOverlap(g.OutPt1.Pt.X, g.OffPt.X, r.Bot.X, r.Top.X) &&
                    this.AddJoin(g.OutPt1, f, g.OffPt);
                }
              if (
                n.OutIdx >= 0 &&
                n.PrevInAEL !== null &&
                n.PrevInAEL.Curr.X === n.Bot.X &&
                n.PrevInAEL.OutIdx >= 0 &&
                e.ClipperBase.SlopesEqual5(
                  n.PrevInAEL.Curr,
                  n.PrevInAEL.Top,
                  n.Curr,
                  n.Top,
                  this.m_UseFullRange,
                ) &&
                n.WindDelta !== 0 &&
                n.PrevInAEL.WindDelta !== 0
              ) {
                var C = this.AddOutPt(n.PrevInAEL, n.Bot);
                this.AddJoin(f, C, n.Top);
              }
              if (n.NextInAEL !== r) {
                if (
                  r.OutIdx >= 0 &&
                  r.PrevInAEL.OutIdx >= 0 &&
                  e.ClipperBase.SlopesEqual5(
                    r.PrevInAEL.Curr,
                    r.PrevInAEL.Top,
                    r.Curr,
                    r.Top,
                    this.m_UseFullRange,
                  ) &&
                  r.WindDelta !== 0 &&
                  r.PrevInAEL.WindDelta !== 0
                ) {
                  var C = this.AddOutPt(r.PrevInAEL, r.Bot);
                  this.AddJoin(f, C, r.Top);
                }
                var L = n.NextInAEL;
                if (L !== null) for (; L !== r; ) (this.IntersectEdges(r, L, n.Curr), (L = L.NextInAEL));
              }
            }
          }
        }),
        (e.Clipper.prototype.InsertEdgeIntoAEL = function (t, i) {
          if (this.m_ActiveEdges === null)
            ((t.PrevInAEL = null), (t.NextInAEL = null), (this.m_ActiveEdges = t));
          else if (i === null && this.E2InsertsBeforeE1(this.m_ActiveEdges, t))
            ((t.PrevInAEL = null),
              (t.NextInAEL = this.m_ActiveEdges),
              (this.m_ActiveEdges.PrevInAEL = t),
              (this.m_ActiveEdges = t));
          else {
            for (
              i === null && (i = this.m_ActiveEdges);
              i.NextInAEL !== null && !this.E2InsertsBeforeE1(i.NextInAEL, t);
            )
              i = i.NextInAEL;
            ((t.NextInAEL = i.NextInAEL),
              i.NextInAEL !== null && (i.NextInAEL.PrevInAEL = t),
              (t.PrevInAEL = i),
              (i.NextInAEL = t));
          }
        }),
        (e.Clipper.prototype.E2InsertsBeforeE1 = function (t, i) {
          return i.Curr.X === t.Curr.X
            ? i.Top.Y > t.Top.Y
              ? i.Top.X < e.Clipper.TopX(t, i.Top.Y)
              : t.Top.X > e.Clipper.TopX(i, t.Top.Y)
            : i.Curr.X < t.Curr.X;
        }),
        (e.Clipper.prototype.IsEvenOddFillType = function (t) {
          return t.PolyTyp === e.PolyType.ptSubject
            ? this.m_SubjFillType === e.PolyFillType.pftEvenOdd
            : this.m_ClipFillType === e.PolyFillType.pftEvenOdd;
        }),
        (e.Clipper.prototype.IsEvenOddAltFillType = function (t) {
          return t.PolyTyp === e.PolyType.ptSubject
            ? this.m_ClipFillType === e.PolyFillType.pftEvenOdd
            : this.m_SubjFillType === e.PolyFillType.pftEvenOdd;
        }),
        (e.Clipper.prototype.IsContributing = function (t) {
          var i, n;
          switch (
            (t.PolyTyp === e.PolyType.ptSubject
              ? ((i = this.m_SubjFillType), (n = this.m_ClipFillType))
              : ((i = this.m_ClipFillType), (n = this.m_SubjFillType)),
            i)
          ) {
            case e.PolyFillType.pftEvenOdd:
              if (t.WindDelta === 0 && t.WindCnt !== 1) return !1;
              break;
            case e.PolyFillType.pftNonZero:
              if (Math.abs(t.WindCnt) !== 1) return !1;
              break;
            case e.PolyFillType.pftPositive:
              if (t.WindCnt !== 1) return !1;
              break;
            default:
              if (t.WindCnt !== -1) return !1;
              break;
          }
          switch (this.m_ClipType) {
            case e.ClipType.ctIntersection:
              switch (n) {
                case e.PolyFillType.pftEvenOdd:
                case e.PolyFillType.pftNonZero:
                  return t.WindCnt2 !== 0;
                case e.PolyFillType.pftPositive:
                  return t.WindCnt2 > 0;
                default:
                  return t.WindCnt2 < 0;
              }
            case e.ClipType.ctUnion:
              switch (n) {
                case e.PolyFillType.pftEvenOdd:
                case e.PolyFillType.pftNonZero:
                  return t.WindCnt2 === 0;
                case e.PolyFillType.pftPositive:
                  return t.WindCnt2 <= 0;
                default:
                  return t.WindCnt2 >= 0;
              }
            case e.ClipType.ctDifference:
              if (t.PolyTyp === e.PolyType.ptSubject)
                switch (n) {
                  case e.PolyFillType.pftEvenOdd:
                  case e.PolyFillType.pftNonZero:
                    return t.WindCnt2 === 0;
                  case e.PolyFillType.pftPositive:
                    return t.WindCnt2 <= 0;
                  default:
                    return t.WindCnt2 >= 0;
                }
              else
                switch (n) {
                  case e.PolyFillType.pftEvenOdd:
                  case e.PolyFillType.pftNonZero:
                    return t.WindCnt2 !== 0;
                  case e.PolyFillType.pftPositive:
                    return t.WindCnt2 > 0;
                  default:
                    return t.WindCnt2 < 0;
                }
            case e.ClipType.ctXor:
              if (t.WindDelta === 0)
                switch (n) {
                  case e.PolyFillType.pftEvenOdd:
                  case e.PolyFillType.pftNonZero:
                    return t.WindCnt2 === 0;
                  case e.PolyFillType.pftPositive:
                    return t.WindCnt2 <= 0;
                  default:
                    return t.WindCnt2 >= 0;
                }
              else return !0;
          }
          return !0;
        }),
        (e.Clipper.prototype.SetWindingCount = function (t) {
          for (var i = t.PrevInAEL; i !== null && (i.PolyTyp !== t.PolyTyp || i.WindDelta === 0); )
            i = i.PrevInAEL;
          if (i === null) {
            var n = t.PolyTyp === e.PolyType.ptSubject ? this.m_SubjFillType : this.m_ClipFillType;
            (t.WindDelta === 0
              ? (t.WindCnt = n === e.PolyFillType.pftNegative ? -1 : 1)
              : (t.WindCnt = t.WindDelta),
              (t.WindCnt2 = 0),
              (i = this.m_ActiveEdges));
          } else if (t.WindDelta === 0 && this.m_ClipType !== e.ClipType.ctUnion)
            ((t.WindCnt = 1), (t.WindCnt2 = i.WindCnt2), (i = i.NextInAEL));
          else if (this.IsEvenOddFillType(t)) {
            if (t.WindDelta === 0) {
              for (var r = !0, f = i.PrevInAEL; f !== null; )
                (f.PolyTyp === i.PolyTyp && f.WindDelta !== 0 && (r = !r), (f = f.PrevInAEL));
              t.WindCnt = r ? 0 : 1;
            } else t.WindCnt = t.WindDelta;
            ((t.WindCnt2 = i.WindCnt2), (i = i.NextInAEL));
          } else
            (i.WindCnt * i.WindDelta < 0
              ? Math.abs(i.WindCnt) > 1
                ? i.WindDelta * t.WindDelta < 0
                  ? (t.WindCnt = i.WindCnt)
                  : (t.WindCnt = i.WindCnt + t.WindDelta)
                : (t.WindCnt = t.WindDelta === 0 ? 1 : t.WindDelta)
              : t.WindDelta === 0
                ? (t.WindCnt = i.WindCnt < 0 ? i.WindCnt - 1 : i.WindCnt + 1)
                : i.WindDelta * t.WindDelta < 0
                  ? (t.WindCnt = i.WindCnt)
                  : (t.WindCnt = i.WindCnt + t.WindDelta),
              (t.WindCnt2 = i.WindCnt2),
              (i = i.NextInAEL));
          if (this.IsEvenOddAltFillType(t))
            for (; i !== t; )
              (i.WindDelta !== 0 && (t.WindCnt2 = t.WindCnt2 === 0 ? 1 : 0), (i = i.NextInAEL));
          else for (; i !== t; ) ((t.WindCnt2 += i.WindDelta), (i = i.NextInAEL));
        }),
        (e.Clipper.prototype.AddEdgeToSEL = function (t) {
          this.m_SortedEdges === null
            ? ((this.m_SortedEdges = t), (t.PrevInSEL = null), (t.NextInSEL = null))
            : ((t.NextInSEL = this.m_SortedEdges),
              (t.PrevInSEL = null),
              (this.m_SortedEdges.PrevInSEL = t),
              (this.m_SortedEdges = t));
        }),
        (e.Clipper.prototype.PopEdgeFromSEL = function (t) {
          if (((t.v = this.m_SortedEdges), t.v === null)) return !1;
          var i = t.v;
          return (
            (this.m_SortedEdges = t.v.NextInSEL),
            this.m_SortedEdges !== null && (this.m_SortedEdges.PrevInSEL = null),
            (i.NextInSEL = null),
            (i.PrevInSEL = null),
            !0
          );
        }),
        (e.Clipper.prototype.CopyAELToSEL = function () {
          var t = this.m_ActiveEdges;
          for (this.m_SortedEdges = t; t !== null; )
            ((t.PrevInSEL = t.PrevInAEL), (t.NextInSEL = t.NextInAEL), (t = t.NextInAEL));
        }),
        (e.Clipper.prototype.SwapPositionsInSEL = function (t, i) {
          if (
            !(t.NextInSEL === null && t.PrevInSEL === null) &&
            !(i.NextInSEL === null && i.PrevInSEL === null)
          ) {
            if (t.NextInSEL === i) {
              var n = i.NextInSEL;
              n !== null && (n.PrevInSEL = t);
              var r = t.PrevInSEL;
              (r !== null && (r.NextInSEL = i),
                (i.PrevInSEL = r),
                (i.NextInSEL = t),
                (t.PrevInSEL = i),
                (t.NextInSEL = n));
            } else if (i.NextInSEL === t) {
              var n = t.NextInSEL;
              n !== null && (n.PrevInSEL = i);
              var r = i.PrevInSEL;
              (r !== null && (r.NextInSEL = t),
                (t.PrevInSEL = r),
                (t.NextInSEL = i),
                (i.PrevInSEL = t),
                (i.NextInSEL = n));
            } else {
              var n = t.NextInSEL,
                r = t.PrevInSEL;
              ((t.NextInSEL = i.NextInSEL),
                t.NextInSEL !== null && (t.NextInSEL.PrevInSEL = t),
                (t.PrevInSEL = i.PrevInSEL),
                t.PrevInSEL !== null && (t.PrevInSEL.NextInSEL = t),
                (i.NextInSEL = n),
                i.NextInSEL !== null && (i.NextInSEL.PrevInSEL = i),
                (i.PrevInSEL = r),
                i.PrevInSEL !== null && (i.PrevInSEL.NextInSEL = i));
            }
            t.PrevInSEL === null
              ? (this.m_SortedEdges = t)
              : i.PrevInSEL === null && (this.m_SortedEdges = i);
          }
        }),
        (e.Clipper.prototype.AddLocalMaxPoly = function (t, i, n) {
          (this.AddOutPt(t, n),
            i.WindDelta === 0 && this.AddOutPt(i, n),
            t.OutIdx === i.OutIdx
              ? ((t.OutIdx = -1), (i.OutIdx = -1))
              : t.OutIdx < i.OutIdx
                ? this.AppendPolygon(t, i)
                : this.AppendPolygon(i, t));
        }),
        (e.Clipper.prototype.AddLocalMinPoly = function (t, i, n) {
          var r, f, c;
          if (
            (e.ClipperBase.IsHorizontal(i) || t.Dx > i.Dx
              ? ((r = this.AddOutPt(t, n)),
                (i.OutIdx = t.OutIdx),
                (t.Side = e.EdgeSide.esLeft),
                (i.Side = e.EdgeSide.esRight),
                (f = t),
                f.PrevInAEL === i ? (c = i.PrevInAEL) : (c = f.PrevInAEL))
              : ((r = this.AddOutPt(i, n)),
                (t.OutIdx = i.OutIdx),
                (t.Side = e.EdgeSide.esRight),
                (i.Side = e.EdgeSide.esLeft),
                (f = i),
                f.PrevInAEL === t ? (c = t.PrevInAEL) : (c = f.PrevInAEL)),
            c !== null && c.OutIdx >= 0 && c.Top.Y < n.Y && f.Top.Y < n.Y)
          ) {
            var y = e.Clipper.TopX(c, n.Y),
              g = e.Clipper.TopX(f, n.Y);
            if (
              y === g &&
              f.WindDelta !== 0 &&
              c.WindDelta !== 0 &&
              e.ClipperBase.SlopesEqual5(
                new e.IntPoint2(y, n.Y),
                c.Top,
                new e.IntPoint2(g, n.Y),
                f.Top,
                this.m_UseFullRange,
              )
            ) {
              var C = this.AddOutPt(c, n);
              this.AddJoin(r, C, f.Top);
            }
          }
          return r;
        }),
        (e.Clipper.prototype.AddOutPt = function (t, i) {
          if (t.OutIdx < 0) {
            var n = this.CreateOutRec();
            n.IsOpen = t.WindDelta === 0;
            var r = new e.OutPt();
            return (
              (n.Pts = r),
              (r.Idx = n.Idx),
              (r.Pt.X = i.X),
              (r.Pt.Y = i.Y),
              e.use_xyz && (r.Pt.Z = i.Z),
              (r.Next = r),
              (r.Prev = r),
              n.IsOpen || this.SetHoleState(t, n),
              (t.OutIdx = n.Idx),
              r
            );
          } else {
            var n = this.m_PolyOuts[t.OutIdx],
              f = n.Pts,
              c = t.Side === e.EdgeSide.esLeft;
            if (c && e.IntPoint.op_Equality(i, f.Pt)) return f;
            if (!c && e.IntPoint.op_Equality(i, f.Prev.Pt)) return f.Prev;
            var r = new e.OutPt();
            return (
              (r.Idx = n.Idx),
              (r.Pt.X = i.X),
              (r.Pt.Y = i.Y),
              e.use_xyz && (r.Pt.Z = i.Z),
              (r.Next = f),
              (r.Prev = f.Prev),
              (r.Prev.Next = r),
              (f.Prev = r),
              c && (n.Pts = r),
              r
            );
          }
        }),
        (e.Clipper.prototype.GetLastOutPt = function (t) {
          var i = this.m_PolyOuts[t.OutIdx];
          return t.Side === e.EdgeSide.esLeft ? i.Pts : i.Pts.Prev;
        }),
        (e.Clipper.prototype.SwapPoints = function (t, i) {
          var n = new e.IntPoint1(t.Value);
          ((t.Value.X = i.Value.X),
            (t.Value.Y = i.Value.Y),
            e.use_xyz && (t.Value.Z = i.Value.Z),
            (i.Value.X = n.X),
            (i.Value.Y = n.Y),
            e.use_xyz && (i.Value.Z = n.Z));
        }),
        (e.Clipper.prototype.HorzSegmentsOverlap = function (t, i, n, r) {
          var f;
          return (t > i && ((f = t), (t = i), (i = f)), n > r && ((f = n), (n = r), (r = f)), t < r && n < i);
        }),
        (e.Clipper.prototype.SetHoleState = function (t, i) {
          for (var n = t.PrevInAEL, r = null; n !== null; )
            (n.OutIdx >= 0 &&
              n.WindDelta !== 0 &&
              (r === null ? (r = n) : r.OutIdx === n.OutIdx && (r = null)),
              (n = n.PrevInAEL));
          r === null
            ? ((i.FirstLeft = null), (i.IsHole = !1))
            : ((i.FirstLeft = this.m_PolyOuts[r.OutIdx]), (i.IsHole = !i.FirstLeft.IsHole));
        }),
        (e.Clipper.prototype.GetDx = function (t, i) {
          return t.Y === i.Y ? e.ClipperBase.horizontal : (i.X - t.X) / (i.Y - t.Y);
        }),
        (e.Clipper.prototype.FirstIsBottomPt = function (t, i) {
          for (var n = t.Prev; e.IntPoint.op_Equality(n.Pt, t.Pt) && n !== t; ) n = n.Prev;
          var r = Math.abs(this.GetDx(t.Pt, n.Pt));
          for (n = t.Next; e.IntPoint.op_Equality(n.Pt, t.Pt) && n !== t; ) n = n.Next;
          var f = Math.abs(this.GetDx(t.Pt, n.Pt));
          for (n = i.Prev; e.IntPoint.op_Equality(n.Pt, i.Pt) && n !== i; ) n = n.Prev;
          var c = Math.abs(this.GetDx(i.Pt, n.Pt));
          for (n = i.Next; e.IntPoint.op_Equality(n.Pt, i.Pt) && n !== i; ) n = n.Next;
          var y = Math.abs(this.GetDx(i.Pt, n.Pt));
          return Math.max(r, f) === Math.max(c, y) && Math.min(r, f) === Math.min(c, y)
            ? this.Area(t) > 0
            : (r >= c && r >= y) || (f >= c && f >= y);
        }),
        (e.Clipper.prototype.GetBottomPt = function (t) {
          for (var i = null, n = t.Next; n !== t; )
            (n.Pt.Y > t.Pt.Y
              ? ((t = n), (i = null))
              : n.Pt.Y === t.Pt.Y &&
                n.Pt.X <= t.Pt.X &&
                (n.Pt.X < t.Pt.X ? ((i = null), (t = n)) : n.Next !== t && n.Prev !== t && (i = n)),
              (n = n.Next));
          if (i !== null)
            for (; i !== n; )
              for (this.FirstIsBottomPt(n, i) || (t = i), i = i.Next; e.IntPoint.op_Inequality(i.Pt, t.Pt); )
                i = i.Next;
          return t;
        }),
        (e.Clipper.prototype.GetLowermostRec = function (t, i) {
          (t.BottomPt === null && (t.BottomPt = this.GetBottomPt(t.Pts)),
            i.BottomPt === null && (i.BottomPt = this.GetBottomPt(i.Pts)));
          var n = t.BottomPt,
            r = i.BottomPt;
          return n.Pt.Y > r.Pt.Y
            ? t
            : n.Pt.Y < r.Pt.Y
              ? i
              : n.Pt.X < r.Pt.X
                ? t
                : n.Pt.X > r.Pt.X || n.Next === n
                  ? i
                  : r.Next === r || this.FirstIsBottomPt(n, r)
                    ? t
                    : i;
        }),
        (e.Clipper.prototype.OutRec1RightOfOutRec2 = function (t, i) {
          do if (((t = t.FirstLeft), t === i)) return !0;
          while (t !== null);
          return !1;
        }),
        (e.Clipper.prototype.GetOutRec = function (t) {
          for (var i = this.m_PolyOuts[t]; i !== this.m_PolyOuts[i.Idx]; ) i = this.m_PolyOuts[i.Idx];
          return i;
        }),
        (e.Clipper.prototype.AppendPolygon = function (t, i) {
          var n = this.m_PolyOuts[t.OutIdx],
            r = this.m_PolyOuts[i.OutIdx],
            f;
          this.OutRec1RightOfOutRec2(n, r)
            ? (f = r)
            : this.OutRec1RightOfOutRec2(r, n)
              ? (f = n)
              : (f = this.GetLowermostRec(n, r));
          var c = n.Pts,
            y = c.Prev,
            g = r.Pts,
            C = g.Prev;
          (t.Side === e.EdgeSide.esLeft
            ? i.Side === e.EdgeSide.esLeft
              ? (this.ReversePolyPtLinks(g),
                (g.Next = c),
                (c.Prev = g),
                (y.Next = C),
                (C.Prev = y),
                (n.Pts = C))
              : ((C.Next = c), (c.Prev = C), (g.Prev = y), (y.Next = g), (n.Pts = g))
            : i.Side === e.EdgeSide.esRight
              ? (this.ReversePolyPtLinks(g), (y.Next = C), (C.Prev = y), (g.Next = c), (c.Prev = g))
              : ((y.Next = g), (g.Prev = y), (c.Prev = C), (C.Next = c)),
            (n.BottomPt = null),
            f === r && (r.FirstLeft !== n && (n.FirstLeft = r.FirstLeft), (n.IsHole = r.IsHole)),
            (r.Pts = null),
            (r.BottomPt = null),
            (r.FirstLeft = n));
          var L = t.OutIdx,
            k = i.OutIdx;
          ((t.OutIdx = -1), (i.OutIdx = -1));
          for (var N = this.m_ActiveEdges; N !== null; ) {
            if (N.OutIdx === k) {
              ((N.OutIdx = L), (N.Side = t.Side));
              break;
            }
            N = N.NextInAEL;
          }
          r.Idx = n.Idx;
        }),
        (e.Clipper.prototype.ReversePolyPtLinks = function (t) {
          if (t !== null) {
            var i, n;
            i = t;
            do ((n = i.Next), (i.Next = i.Prev), (i.Prev = n), (i = n));
            while (i !== t);
          }
        }),
        (e.Clipper.SwapSides = function (t, i) {
          var n = t.Side;
          ((t.Side = i.Side), (i.Side = n));
        }),
        (e.Clipper.SwapPolyIndexes = function (t, i) {
          var n = t.OutIdx;
          ((t.OutIdx = i.OutIdx), (i.OutIdx = n));
        }),
        (e.Clipper.prototype.IntersectEdges = function (t, i, n) {
          var r = t.OutIdx >= 0,
            f = i.OutIdx >= 0;
          if ((e.use_xyz && this.SetZ(n, t, i), e.use_lines && (t.WindDelta === 0 || i.WindDelta === 0))) {
            if (t.WindDelta === 0 && i.WindDelta === 0) return;
            t.PolyTyp === i.PolyTyp && t.WindDelta !== i.WindDelta && this.m_ClipType === e.ClipType.ctUnion
              ? t.WindDelta === 0
                ? f && (this.AddOutPt(t, n), r && (t.OutIdx = -1))
                : r && (this.AddOutPt(i, n), f && (i.OutIdx = -1))
              : t.PolyTyp !== i.PolyTyp &&
                (t.WindDelta === 0 &&
                Math.abs(i.WindCnt) === 1 &&
                (this.m_ClipType !== e.ClipType.ctUnion || i.WindCnt2 === 0)
                  ? (this.AddOutPt(t, n), r && (t.OutIdx = -1))
                  : i.WindDelta === 0 &&
                    Math.abs(t.WindCnt) === 1 &&
                    (this.m_ClipType !== e.ClipType.ctUnion || t.WindCnt2 === 0) &&
                    (this.AddOutPt(i, n), f && (i.OutIdx = -1)));
            return;
          }
          if (t.PolyTyp === i.PolyTyp)
            if (this.IsEvenOddFillType(t)) {
              var c = t.WindCnt;
              ((t.WindCnt = i.WindCnt), (i.WindCnt = c));
            } else
              (t.WindCnt + i.WindDelta === 0 ? (t.WindCnt = -t.WindCnt) : (t.WindCnt += i.WindDelta),
                i.WindCnt - t.WindDelta === 0 ? (i.WindCnt = -i.WindCnt) : (i.WindCnt -= t.WindDelta));
          else
            (this.IsEvenOddFillType(i)
              ? (t.WindCnt2 = t.WindCnt2 === 0 ? 1 : 0)
              : (t.WindCnt2 += i.WindDelta),
              this.IsEvenOddFillType(t)
                ? (i.WindCnt2 = i.WindCnt2 === 0 ? 1 : 0)
                : (i.WindCnt2 -= t.WindDelta));
          var y, g, C, L;
          (t.PolyTyp === e.PolyType.ptSubject
            ? ((y = this.m_SubjFillType), (C = this.m_ClipFillType))
            : ((y = this.m_ClipFillType), (C = this.m_SubjFillType)),
            i.PolyTyp === e.PolyType.ptSubject
              ? ((g = this.m_SubjFillType), (L = this.m_ClipFillType))
              : ((g = this.m_ClipFillType), (L = this.m_SubjFillType)));
          var k, N;
          switch (y) {
            case e.PolyFillType.pftPositive:
              k = t.WindCnt;
              break;
            case e.PolyFillType.pftNegative:
              k = -t.WindCnt;
              break;
            default:
              k = Math.abs(t.WindCnt);
              break;
          }
          switch (g) {
            case e.PolyFillType.pftPositive:
              N = i.WindCnt;
              break;
            case e.PolyFillType.pftNegative:
              N = -i.WindCnt;
              break;
            default:
              N = Math.abs(i.WindCnt);
              break;
          }
          if (r && f)
            (k !== 0 && k !== 1) ||
            (N !== 0 && N !== 1) ||
            (t.PolyTyp !== i.PolyTyp && this.m_ClipType !== e.ClipType.ctXor)
              ? this.AddLocalMaxPoly(t, i, n)
              : (this.AddOutPt(t, n),
                this.AddOutPt(i, n),
                e.Clipper.SwapSides(t, i),
                e.Clipper.SwapPolyIndexes(t, i));
          else if (r)
            (N === 0 || N === 1) &&
              (this.AddOutPt(t, n), e.Clipper.SwapSides(t, i), e.Clipper.SwapPolyIndexes(t, i));
          else if (f)
            (k === 0 || k === 1) &&
              (this.AddOutPt(i, n), e.Clipper.SwapSides(t, i), e.Clipper.SwapPolyIndexes(t, i));
          else if ((k === 0 || k === 1) && (N === 0 || N === 1)) {
            var q, K;
            switch (C) {
              case e.PolyFillType.pftPositive:
                q = t.WindCnt2;
                break;
              case e.PolyFillType.pftNegative:
                q = -t.WindCnt2;
                break;
              default:
                q = Math.abs(t.WindCnt2);
                break;
            }
            switch (L) {
              case e.PolyFillType.pftPositive:
                K = i.WindCnt2;
                break;
              case e.PolyFillType.pftNegative:
                K = -i.WindCnt2;
                break;
              default:
                K = Math.abs(i.WindCnt2);
                break;
            }
            if (t.PolyTyp !== i.PolyTyp) this.AddLocalMinPoly(t, i, n);
            else if (k === 1 && N === 1)
              switch (this.m_ClipType) {
                case e.ClipType.ctIntersection:
                  q > 0 && K > 0 && this.AddLocalMinPoly(t, i, n);
                  break;
                case e.ClipType.ctUnion:
                  q <= 0 && K <= 0 && this.AddLocalMinPoly(t, i, n);
                  break;
                case e.ClipType.ctDifference:
                  ((t.PolyTyp === e.PolyType.ptClip && q > 0 && K > 0) ||
                    (t.PolyTyp === e.PolyType.ptSubject && q <= 0 && K <= 0)) &&
                    this.AddLocalMinPoly(t, i, n);
                  break;
                case e.ClipType.ctXor:
                  this.AddLocalMinPoly(t, i, n);
                  break;
              }
            else e.Clipper.SwapSides(t, i);
          }
        }),
        (e.Clipper.prototype.DeleteFromSEL = function (t) {
          var i = t.PrevInSEL,
            n = t.NextInSEL;
          (i === null && n === null && t !== this.m_SortedEdges) ||
            (i !== null ? (i.NextInSEL = n) : (this.m_SortedEdges = n),
            n !== null && (n.PrevInSEL = i),
            (t.NextInSEL = null),
            (t.PrevInSEL = null));
        }),
        (e.Clipper.prototype.ProcessHorizontals = function () {
          for (var t = {}; this.PopEdgeFromSEL(t); ) this.ProcessHorizontal(t.v);
        }),
        (e.Clipper.prototype.GetHorzDirection = function (t, i) {
          t.Bot.X < t.Top.X
            ? ((i.Left = t.Bot.X), (i.Right = t.Top.X), (i.Dir = e.Direction.dLeftToRight))
            : ((i.Left = t.Top.X), (i.Right = t.Bot.X), (i.Dir = e.Direction.dRightToLeft));
        }),
        (e.Clipper.prototype.ProcessHorizontal = function (t) {
          var i = { Dir: null, Left: null, Right: null };
          this.GetHorzDirection(t, i);
          for (
            var n = i.Dir, r = i.Left, f = i.Right, c = t.WindDelta === 0, y = t, g = null;
            y.NextInLML !== null && e.ClipperBase.IsHorizontal(y.NextInLML);
          )
            y = y.NextInLML;
          y.NextInLML === null && (g = this.GetMaximaPair(y));
          var C = this.m_Maxima;
          if (C !== null)
            if (n === e.Direction.dLeftToRight) {
              for (; C !== null && C.X <= t.Bot.X; ) C = C.Next;
              C !== null && C.X >= y.Top.X && (C = null);
            } else {
              for (; C.Next !== null && C.Next.X < t.Bot.X; ) C = C.Next;
              C.X <= y.Top.X && (C = null);
            }
          for (var L = null; ; ) {
            for (var k = t === y, N = this.GetNextInAEL(t, n); N !== null; ) {
              if (C !== null)
                if (n === e.Direction.dLeftToRight)
                  for (; C !== null && C.X < N.Curr.X; )
                    (t.OutIdx >= 0 && !c && this.AddOutPt(t, new e.IntPoint2(C.X, t.Bot.Y)), (C = C.Next));
                else
                  for (; C !== null && C.X > N.Curr.X; )
                    (t.OutIdx >= 0 && !c && this.AddOutPt(t, new e.IntPoint2(C.X, t.Bot.Y)), (C = C.Prev));
              if (
                (n === e.Direction.dLeftToRight && N.Curr.X > f) ||
                (n === e.Direction.dRightToLeft && N.Curr.X < r) ||
                (N.Curr.X === t.Top.X && t.NextInLML !== null && N.Dx < t.NextInLML.Dx)
              )
                break;
              if (t.OutIdx >= 0 && !c) {
                (e.use_xyz &&
                  (n === e.Direction.dLeftToRight ? this.SetZ(N.Curr, t, N) : this.SetZ(N.Curr, N, t)),
                  (L = this.AddOutPt(t, N.Curr)));
                for (var q = this.m_SortedEdges; q !== null; ) {
                  if (q.OutIdx >= 0 && this.HorzSegmentsOverlap(t.Bot.X, t.Top.X, q.Bot.X, q.Top.X)) {
                    var K = this.GetLastOutPt(q);
                    this.AddJoin(K, L, q.Top);
                  }
                  q = q.NextInSEL;
                }
                this.AddGhostJoin(L, t.Bot);
              }
              if (N === g && k) {
                (t.OutIdx >= 0 && this.AddLocalMaxPoly(t, g, t.Top),
                  this.DeleteFromAEL(t),
                  this.DeleteFromAEL(g));
                return;
              }
              if (n === e.Direction.dLeftToRight) {
                var ot = new e.IntPoint2(N.Curr.X, t.Curr.Y);
                this.IntersectEdges(t, N, ot);
              } else {
                var ot = new e.IntPoint2(N.Curr.X, t.Curr.Y);
                this.IntersectEdges(N, t, ot);
              }
              var at = this.GetNextInAEL(N, n);
              (this.SwapPositionsInAEL(t, N), (N = at));
            }
            if (t.NextInLML === null || !e.ClipperBase.IsHorizontal(t.NextInLML)) break;
            ((t = this.UpdateEdgeIntoAEL(t)),
              t.OutIdx >= 0 && this.AddOutPt(t, t.Bot),
              (i = { Dir: n, Left: r, Right: f }),
              this.GetHorzDirection(t, i),
              (n = i.Dir),
              (r = i.Left),
              (f = i.Right));
          }
          if (t.OutIdx >= 0 && L === null) {
            L = this.GetLastOutPt(t);
            for (var q = this.m_SortedEdges; q !== null; ) {
              if (q.OutIdx >= 0 && this.HorzSegmentsOverlap(t.Bot.X, t.Top.X, q.Bot.X, q.Top.X)) {
                var K = this.GetLastOutPt(q);
                this.AddJoin(K, L, q.Top);
              }
              q = q.NextInSEL;
            }
            this.AddGhostJoin(L, t.Top);
          }
          if (t.NextInLML !== null)
            if (t.OutIdx >= 0) {
              if (((L = this.AddOutPt(t, t.Top)), (t = this.UpdateEdgeIntoAEL(t)), t.WindDelta === 0)) return;
              var dt = t.PrevInAEL,
                at = t.NextInAEL;
              if (
                dt !== null &&
                dt.Curr.X === t.Bot.X &&
                dt.Curr.Y === t.Bot.Y &&
                dt.WindDelta === 0 &&
                dt.OutIdx >= 0 &&
                dt.Curr.Y > dt.Top.Y &&
                e.ClipperBase.SlopesEqual3(t, dt, this.m_UseFullRange)
              ) {
                var K = this.AddOutPt(dt, t.Bot);
                this.AddJoin(L, K, t.Top);
              } else if (
                at !== null &&
                at.Curr.X === t.Bot.X &&
                at.Curr.Y === t.Bot.Y &&
                at.WindDelta !== 0 &&
                at.OutIdx >= 0 &&
                at.Curr.Y > at.Top.Y &&
                e.ClipperBase.SlopesEqual3(t, at, this.m_UseFullRange)
              ) {
                var K = this.AddOutPt(at, t.Bot);
                this.AddJoin(L, K, t.Top);
              }
            } else t = this.UpdateEdgeIntoAEL(t);
          else (t.OutIdx >= 0 && this.AddOutPt(t, t.Top), this.DeleteFromAEL(t));
        }),
        (e.Clipper.prototype.GetNextInAEL = function (t, i) {
          return i === e.Direction.dLeftToRight ? t.NextInAEL : t.PrevInAEL;
        }),
        (e.Clipper.prototype.IsMinima = function (t) {
          return t !== null && t.Prev.NextInLML !== t && t.Next.NextInLML !== t;
        }),
        (e.Clipper.prototype.IsMaxima = function (t, i) {
          return t !== null && t.Top.Y === i && t.NextInLML === null;
        }),
        (e.Clipper.prototype.IsIntermediate = function (t, i) {
          return t.Top.Y === i && t.NextInLML !== null;
        }),
        (e.Clipper.prototype.GetMaximaPair = function (t) {
          return e.IntPoint.op_Equality(t.Next.Top, t.Top) && t.Next.NextInLML === null
            ? t.Next
            : e.IntPoint.op_Equality(t.Prev.Top, t.Top) && t.Prev.NextInLML === null
              ? t.Prev
              : null;
        }),
        (e.Clipper.prototype.GetMaximaPairEx = function (t) {
          var i = this.GetMaximaPair(t);
          return i === null ||
            i.OutIdx === e.ClipperBase.Skip ||
            (i.NextInAEL === i.PrevInAEL && !e.ClipperBase.IsHorizontal(i))
            ? null
            : i;
        }),
        (e.Clipper.prototype.ProcessIntersections = function (t) {
          if (this.m_ActiveEdges === null) return !0;
          try {
            if ((this.BuildIntersectList(t), this.m_IntersectList.length === 0)) return !0;
            if (this.m_IntersectList.length === 1 || this.FixupIntersectionOrder())
              this.ProcessIntersectList();
            else return !1;
          } catch {
            ((this.m_SortedEdges = null),
              (this.m_IntersectList.length = 0),
              e.Error("ProcessIntersections error"));
          }
          return ((this.m_SortedEdges = null), !0);
        }),
        (e.Clipper.prototype.BuildIntersectList = function (t) {
          if (this.m_ActiveEdges !== null) {
            var i = this.m_ActiveEdges;
            for (this.m_SortedEdges = i; i !== null; )
              ((i.PrevInSEL = i.PrevInAEL),
                (i.NextInSEL = i.NextInAEL),
                (i.Curr.X = e.Clipper.TopX(i, t)),
                (i = i.NextInAEL));
            for (var n = !0; n && this.m_SortedEdges !== null; ) {
              for (n = !1, i = this.m_SortedEdges; i.NextInSEL !== null; ) {
                var r = i.NextInSEL,
                  f = new e.IntPoint0();
                if (i.Curr.X > r.Curr.X) {
                  (this.IntersectPoint(i, r, f), f.Y < t && (f = new e.IntPoint2(e.Clipper.TopX(i, t), t)));
                  var c = new e.IntersectNode();
                  ((c.Edge1 = i),
                    (c.Edge2 = r),
                    (c.Pt.X = f.X),
                    (c.Pt.Y = f.Y),
                    e.use_xyz && (c.Pt.Z = f.Z),
                    this.m_IntersectList.push(c),
                    this.SwapPositionsInSEL(i, r),
                    (n = !0));
                } else i = r;
              }
              if (i.PrevInSEL !== null) i.PrevInSEL.NextInSEL = null;
              else break;
            }
            this.m_SortedEdges = null;
          }
        }),
        (e.Clipper.prototype.EdgesAdjacent = function (t) {
          return t.Edge1.NextInSEL === t.Edge2 || t.Edge1.PrevInSEL === t.Edge2;
        }),
        (e.Clipper.IntersectNodeSort = function (t, i) {
          return i.Pt.Y - t.Pt.Y;
        }),
        (e.Clipper.prototype.FixupIntersectionOrder = function () {
          (this.m_IntersectList.sort(this.m_IntersectNodeComparer), this.CopyAELToSEL());
          for (var t = this.m_IntersectList.length, i = 0; i < t; i++) {
            if (!this.EdgesAdjacent(this.m_IntersectList[i])) {
              for (var n = i + 1; n < t && !this.EdgesAdjacent(this.m_IntersectList[n]); ) n++;
              if (n === t) return !1;
              var r = this.m_IntersectList[i];
              ((this.m_IntersectList[i] = this.m_IntersectList[n]), (this.m_IntersectList[n] = r));
            }
            this.SwapPositionsInSEL(this.m_IntersectList[i].Edge1, this.m_IntersectList[i].Edge2);
          }
          return !0;
        }),
        (e.Clipper.prototype.ProcessIntersectList = function () {
          for (var t = 0, i = this.m_IntersectList.length; t < i; t++) {
            var n = this.m_IntersectList[t];
            (this.IntersectEdges(n.Edge1, n.Edge2, n.Pt), this.SwapPositionsInAEL(n.Edge1, n.Edge2));
          }
          this.m_IntersectList.length = 0;
        }));
      var cs = function (t) {
          return t < 0 ? Math.ceil(t - 0.5) : Math.round(t);
        },
        ps = function (t) {
          return t < 0 ? Math.ceil(t - 0.5) : Math.floor(t + 0.5);
        },
        ds = function (t) {
          return t < 0 ? -Math.round(Math.abs(t)) : Math.round(t);
        },
        ms = function (t) {
          return t < 0
            ? ((t -= 0.5), t < -2147483648 ? Math.ceil(t) : t | 0)
            : ((t += 0.5), t > 2147483647 ? Math.floor(t) : t | 0);
        };
      (a.msie
        ? (e.Clipper.Round = cs)
        : a.chromium
          ? (e.Clipper.Round = ds)
          : a.safari
            ? (e.Clipper.Round = ms)
            : (e.Clipper.Round = ps),
        (e.Clipper.TopX = function (t, i) {
          return i === t.Top.Y ? t.Top.X : t.Bot.X + e.Clipper.Round(t.Dx * (i - t.Bot.Y));
        }),
        (e.Clipper.prototype.IntersectPoint = function (t, i, n) {
          ((n.X = 0), (n.Y = 0));
          var r, f;
          if (t.Dx === i.Dx) {
            ((n.Y = t.Curr.Y), (n.X = e.Clipper.TopX(t, n.Y)));
            return;
          }
          if (t.Delta.X === 0)
            ((n.X = t.Bot.X),
              e.ClipperBase.IsHorizontal(i)
                ? (n.Y = i.Bot.Y)
                : ((f = i.Bot.Y - i.Bot.X / i.Dx), (n.Y = e.Clipper.Round(n.X / i.Dx + f))));
          else if (i.Delta.X === 0)
            ((n.X = i.Bot.X),
              e.ClipperBase.IsHorizontal(t)
                ? (n.Y = t.Bot.Y)
                : ((r = t.Bot.Y - t.Bot.X / t.Dx), (n.Y = e.Clipper.Round(n.X / t.Dx + r))));
          else {
            ((r = t.Bot.X - t.Bot.Y * t.Dx), (f = i.Bot.X - i.Bot.Y * i.Dx));
            var c = (f - r) / (t.Dx - i.Dx);
            ((n.Y = e.Clipper.Round(c)),
              Math.abs(t.Dx) < Math.abs(i.Dx)
                ? (n.X = e.Clipper.Round(t.Dx * c + r))
                : (n.X = e.Clipper.Round(i.Dx * c + f)));
          }
          if (n.Y < t.Top.Y || n.Y < i.Top.Y) {
            if (t.Top.Y > i.Top.Y)
              return ((n.Y = t.Top.Y), (n.X = e.Clipper.TopX(i, t.Top.Y)), n.X < t.Top.X);
            ((n.Y = i.Top.Y),
              Math.abs(t.Dx) < Math.abs(i.Dx)
                ? (n.X = e.Clipper.TopX(t, n.Y))
                : (n.X = e.Clipper.TopX(i, n.Y)));
          }
          n.Y > t.Curr.Y &&
            ((n.Y = t.Curr.Y),
            Math.abs(t.Dx) > Math.abs(i.Dx)
              ? (n.X = e.Clipper.TopX(i, n.Y))
              : (n.X = e.Clipper.TopX(t, n.Y)));
        }),
        (e.Clipper.prototype.ProcessEdgesAtTopOfScanbeam = function (t) {
          for (var i = this.m_ActiveEdges; i !== null; ) {
            var n = this.IsMaxima(i, t);
            if (n) {
              var r = this.GetMaximaPairEx(i);
              n = r === null || !e.ClipperBase.IsHorizontal(r);
            }
            if (n) {
              this.StrictlySimple && this.InsertMaxima(i.Top.X);
              var f = i.PrevInAEL;
              (this.DoMaxima(i), f === null ? (i = this.m_ActiveEdges) : (i = f.NextInAEL));
            } else {
              if (
                (this.IsIntermediate(i, t) && e.ClipperBase.IsHorizontal(i.NextInLML)
                  ? ((i = this.UpdateEdgeIntoAEL(i)),
                    i.OutIdx >= 0 && this.AddOutPt(i, i.Bot),
                    this.AddEdgeToSEL(i))
                  : ((i.Curr.X = e.Clipper.TopX(i, t)), (i.Curr.Y = t)),
                e.use_xyz &&
                  (i.Top.Y === t
                    ? (i.Curr.Z = i.Top.Z)
                    : i.Bot.Y === t
                      ? (i.Curr.Z = i.Bot.Z)
                      : (i.Curr.Z = 0)),
                this.StrictlySimple)
              ) {
                var f = i.PrevInAEL;
                if (
                  i.OutIdx >= 0 &&
                  i.WindDelta !== 0 &&
                  f !== null &&
                  f.OutIdx >= 0 &&
                  f.Curr.X === i.Curr.X &&
                  f.WindDelta !== 0
                ) {
                  var c = new e.IntPoint1(i.Curr);
                  e.use_xyz && this.SetZ(c, f, i);
                  var y = this.AddOutPt(f, c),
                    g = this.AddOutPt(i, c);
                  this.AddJoin(y, g, c);
                }
              }
              i = i.NextInAEL;
            }
          }
          for (this.ProcessHorizontals(), this.m_Maxima = null, i = this.m_ActiveEdges; i !== null; ) {
            if (this.IsIntermediate(i, t)) {
              var y = null;
              (i.OutIdx >= 0 && (y = this.AddOutPt(i, i.Top)), (i = this.UpdateEdgeIntoAEL(i)));
              var f = i.PrevInAEL,
                C = i.NextInAEL;
              if (
                f !== null &&
                f.Curr.X === i.Bot.X &&
                f.Curr.Y === i.Bot.Y &&
                y !== null &&
                f.OutIdx >= 0 &&
                f.Curr.Y === f.Top.Y &&
                e.ClipperBase.SlopesEqual5(i.Curr, i.Top, f.Curr, f.Top, this.m_UseFullRange) &&
                i.WindDelta !== 0 &&
                f.WindDelta !== 0
              ) {
                var g = this.AddOutPt(ePrev2, i.Bot);
                this.AddJoin(y, g, i.Top);
              } else if (
                C !== null &&
                C.Curr.X === i.Bot.X &&
                C.Curr.Y === i.Bot.Y &&
                y !== null &&
                C.OutIdx >= 0 &&
                C.Curr.Y === C.Top.Y &&
                e.ClipperBase.SlopesEqual5(i.Curr, i.Top, C.Curr, C.Top, this.m_UseFullRange) &&
                i.WindDelta !== 0 &&
                C.WindDelta !== 0
              ) {
                var g = this.AddOutPt(C, i.Bot);
                this.AddJoin(y, g, i.Top);
              }
            }
            i = i.NextInAEL;
          }
        }),
        (e.Clipper.prototype.DoMaxima = function (t) {
          var i = this.GetMaximaPairEx(t);
          if (i === null) {
            (t.OutIdx >= 0 && this.AddOutPt(t, t.Top), this.DeleteFromAEL(t));
            return;
          }
          for (var n = t.NextInAEL; n !== null && n !== i; )
            (this.IntersectEdges(t, n, t.Top), this.SwapPositionsInAEL(t, n), (n = t.NextInAEL));
          t.OutIdx === -1 && i.OutIdx === -1
            ? (this.DeleteFromAEL(t), this.DeleteFromAEL(i))
            : t.OutIdx >= 0 && i.OutIdx >= 0
              ? (t.OutIdx >= 0 && this.AddLocalMaxPoly(t, i, t.Top),
                this.DeleteFromAEL(t),
                this.DeleteFromAEL(i))
              : e.use_lines && t.WindDelta === 0
                ? (t.OutIdx >= 0 && (this.AddOutPt(t, t.Top), (t.OutIdx = e.ClipperBase.Unassigned)),
                  this.DeleteFromAEL(t),
                  i.OutIdx >= 0 && (this.AddOutPt(i, t.Top), (i.OutIdx = e.ClipperBase.Unassigned)),
                  this.DeleteFromAEL(i))
                : e.Error("DoMaxima error");
        }),
        (e.Clipper.ReversePaths = function (t) {
          for (var i = 0, n = t.length; i < n; i++) t[i].reverse();
        }),
        (e.Clipper.Orientation = function (t) {
          return e.Clipper.Area(t) >= 0;
        }),
        (e.Clipper.prototype.PointCount = function (t) {
          if (t === null) return 0;
          var i = 0,
            n = t;
          do (i++, (n = n.Next));
          while (n !== t);
          return i;
        }),
        (e.Clipper.prototype.BuildResult = function (t) {
          e.Clear(t);
          for (var i = 0, n = this.m_PolyOuts.length; i < n; i++) {
            var r = this.m_PolyOuts[i];
            if (r.Pts !== null) {
              var f = r.Pts.Prev,
                c = this.PointCount(f);
              if (!(c < 2)) {
                for (var y = new Array(c), g = 0; g < c; g++) ((y[g] = f.Pt), (f = f.Prev));
                t.push(y);
              }
            }
          }
        }),
        (e.Clipper.prototype.BuildResult2 = function (t) {
          t.Clear();
          for (var i = 0, n = this.m_PolyOuts.length; i < n; i++) {
            var r = this.m_PolyOuts[i],
              f = this.PointCount(r.Pts);
            if (!((r.IsOpen && f < 2) || (!r.IsOpen && f < 3))) {
              this.FixHoleLinkage(r);
              var c = new e.PolyNode();
              (t.m_AllPolys.push(c), (r.PolyNode = c), (c.m_polygon.length = f));
              for (var y = r.Pts.Prev, g = 0; g < f; g++) ((c.m_polygon[g] = y.Pt), (y = y.Prev));
            }
          }
          for (var i = 0, n = this.m_PolyOuts.length; i < n; i++) {
            var r = this.m_PolyOuts[i];
            r.PolyNode !== null &&
              (r.IsOpen
                ? ((r.PolyNode.IsOpen = !0), t.AddChild(r.PolyNode))
                : r.FirstLeft !== null && r.FirstLeft.PolyNode !== null
                  ? r.FirstLeft.PolyNode.AddChild(r.PolyNode)
                  : t.AddChild(r.PolyNode));
          }
        }),
        (e.Clipper.prototype.FixupOutPolyline = function (t) {
          for (var i = t.Pts, n = i.Prev; i !== n; )
            if (((i = i.Next), e.IntPoint.op_Equality(i.Pt, i.Prev.Pt))) {
              i === n && (n = i.Prev);
              var r = i.Prev;
              ((r.Next = i.Next), (i.Next.Prev = r), (i = r));
            }
          i === i.Prev && (t.Pts = null);
        }),
        (e.Clipper.prototype.FixupOutPolygon = function (t) {
          var i = null;
          t.BottomPt = null;
          for (var n = t.Pts, r = this.PreserveCollinear || this.StrictlySimple; ; ) {
            if (n.Prev === n || n.Prev === n.Next) {
              t.Pts = null;
              return;
            }
            if (
              e.IntPoint.op_Equality(n.Pt, n.Next.Pt) ||
              e.IntPoint.op_Equality(n.Pt, n.Prev.Pt) ||
              (e.ClipperBase.SlopesEqual4(n.Prev.Pt, n.Pt, n.Next.Pt, this.m_UseFullRange) &&
                (!r || !this.Pt2IsBetweenPt1AndPt3(n.Prev.Pt, n.Pt, n.Next.Pt)))
            )
              ((i = null), (n.Prev.Next = n.Next), (n.Next.Prev = n.Prev), (n = n.Prev));
            else {
              if (n === i) break;
              (i === null && (i = n), (n = n.Next));
            }
          }
          t.Pts = n;
        }),
        (e.Clipper.prototype.DupOutPt = function (t, i) {
          var n = new e.OutPt();
          return (
            (n.Pt.X = t.Pt.X),
            (n.Pt.Y = t.Pt.Y),
            e.use_xyz && (n.Pt.Z = t.Pt.Z),
            (n.Idx = t.Idx),
            i
              ? ((n.Next = t.Next), (n.Prev = t), (t.Next.Prev = n), (t.Next = n))
              : ((n.Prev = t.Prev), (n.Next = t), (t.Prev.Next = n), (t.Prev = n)),
            n
          );
        }),
        (e.Clipper.prototype.GetOverlap = function (t, i, n, r, f) {
          return (
            t < i
              ? n < r
                ? ((f.Left = Math.max(t, n)), (f.Right = Math.min(i, r)))
                : ((f.Left = Math.max(t, r)), (f.Right = Math.min(i, n)))
              : n < r
                ? ((f.Left = Math.max(i, n)), (f.Right = Math.min(t, r)))
                : ((f.Left = Math.max(i, r)), (f.Right = Math.min(t, n))),
            f.Left < f.Right
          );
        }),
        (e.Clipper.prototype.JoinHorz = function (t, i, n, r, f, c) {
          var y = t.Pt.X > i.Pt.X ? e.Direction.dRightToLeft : e.Direction.dLeftToRight,
            g = n.Pt.X > r.Pt.X ? e.Direction.dRightToLeft : e.Direction.dLeftToRight;
          if (y === g) return !1;
          if (y === e.Direction.dLeftToRight) {
            for (; t.Next.Pt.X <= f.X && t.Next.Pt.X >= t.Pt.X && t.Next.Pt.Y === f.Y; ) t = t.Next;
            (c && t.Pt.X !== f.X && (t = t.Next),
              (i = this.DupOutPt(t, !c)),
              e.IntPoint.op_Inequality(i.Pt, f) &&
                ((t = i),
                (t.Pt.X = f.X),
                (t.Pt.Y = f.Y),
                e.use_xyz && (t.Pt.Z = f.Z),
                (i = this.DupOutPt(t, !c))));
          } else {
            for (; t.Next.Pt.X >= f.X && t.Next.Pt.X <= t.Pt.X && t.Next.Pt.Y === f.Y; ) t = t.Next;
            (!c && t.Pt.X !== f.X && (t = t.Next),
              (i = this.DupOutPt(t, c)),
              e.IntPoint.op_Inequality(i.Pt, f) &&
                ((t = i),
                (t.Pt.X = f.X),
                (t.Pt.Y = f.Y),
                e.use_xyz && (t.Pt.Z = f.Z),
                (i = this.DupOutPt(t, c))));
          }
          if (g === e.Direction.dLeftToRight) {
            for (; n.Next.Pt.X <= f.X && n.Next.Pt.X >= n.Pt.X && n.Next.Pt.Y === f.Y; ) n = n.Next;
            (c && n.Pt.X !== f.X && (n = n.Next),
              (r = this.DupOutPt(n, !c)),
              e.IntPoint.op_Inequality(r.Pt, f) &&
                ((n = r),
                (n.Pt.X = f.X),
                (n.Pt.Y = f.Y),
                e.use_xyz && (n.Pt.Z = f.Z),
                (r = this.DupOutPt(n, !c))));
          } else {
            for (; n.Next.Pt.X >= f.X && n.Next.Pt.X <= n.Pt.X && n.Next.Pt.Y === f.Y; ) n = n.Next;
            (!c && n.Pt.X !== f.X && (n = n.Next),
              (r = this.DupOutPt(n, c)),
              e.IntPoint.op_Inequality(r.Pt, f) &&
                ((n = r),
                (n.Pt.X = f.X),
                (n.Pt.Y = f.Y),
                e.use_xyz && (n.Pt.Z = f.Z),
                (r = this.DupOutPt(n, c))));
          }
          return (
            (y === e.Direction.dLeftToRight) === c
              ? ((t.Prev = n), (n.Next = t), (i.Next = r), (r.Prev = i))
              : ((t.Next = n), (n.Prev = t), (i.Prev = r), (r.Next = i)),
            !0
          );
        }),
        (e.Clipper.prototype.JoinPoints = function (t, i, n) {
          var r = t.OutPt1,
            f = new e.OutPt(),
            c = t.OutPt2,
            y = new e.OutPt(),
            g = t.OutPt1.Pt.Y === t.OffPt.Y;
          if (
            g &&
            e.IntPoint.op_Equality(t.OffPt, t.OutPt1.Pt) &&
            e.IntPoint.op_Equality(t.OffPt, t.OutPt2.Pt)
          ) {
            if (i !== n) return !1;
            for (f = t.OutPt1.Next; f !== r && e.IntPoint.op_Equality(f.Pt, t.OffPt); ) f = f.Next;
            var C = f.Pt.Y > t.OffPt.Y;
            for (y = t.OutPt2.Next; y !== c && e.IntPoint.op_Equality(y.Pt, t.OffPt); ) y = y.Next;
            var L = y.Pt.Y > t.OffPt.Y;
            return C === L
              ? !1
              : C
                ? ((f = this.DupOutPt(r, !1)),
                  (y = this.DupOutPt(c, !0)),
                  (r.Prev = c),
                  (c.Next = r),
                  (f.Next = y),
                  (y.Prev = f),
                  (t.OutPt1 = r),
                  (t.OutPt2 = f),
                  !0)
                : ((f = this.DupOutPt(r, !0)),
                  (y = this.DupOutPt(c, !1)),
                  (r.Next = c),
                  (c.Prev = r),
                  (f.Prev = y),
                  (y.Next = f),
                  (t.OutPt1 = r),
                  (t.OutPt2 = f),
                  !0);
          } else if (g) {
            for (f = r; r.Prev.Pt.Y === r.Pt.Y && r.Prev !== f && r.Prev !== c; ) r = r.Prev;
            for (; f.Next.Pt.Y === f.Pt.Y && f.Next !== r && f.Next !== c; ) f = f.Next;
            if (f.Next === r || f.Next === c) return !1;
            for (y = c; c.Prev.Pt.Y === c.Pt.Y && c.Prev !== y && c.Prev !== f; ) c = c.Prev;
            for (; y.Next.Pt.Y === y.Pt.Y && y.Next !== c && y.Next !== r; ) y = y.Next;
            if (y.Next === c || y.Next === r) return !1;
            var k = { Left: null, Right: null };
            if (!this.GetOverlap(r.Pt.X, f.Pt.X, c.Pt.X, y.Pt.X, k)) return !1;
            var N = k.Left,
              q = k.Right,
              K = new e.IntPoint0(),
              ot;
            return (
              r.Pt.X >= N && r.Pt.X <= q
                ? ((K.X = r.Pt.X), (K.Y = r.Pt.Y), e.use_xyz && (K.Z = r.Pt.Z), (ot = r.Pt.X > f.Pt.X))
                : c.Pt.X >= N && c.Pt.X <= q
                  ? ((K.X = c.Pt.X), (K.Y = c.Pt.Y), e.use_xyz && (K.Z = c.Pt.Z), (ot = c.Pt.X > y.Pt.X))
                  : f.Pt.X >= N && f.Pt.X <= q
                    ? ((K.X = f.Pt.X), (K.Y = f.Pt.Y), e.use_xyz && (K.Z = f.Pt.Z), (ot = f.Pt.X > r.Pt.X))
                    : ((K.X = y.Pt.X), (K.Y = y.Pt.Y), e.use_xyz && (K.Z = y.Pt.Z), (ot = y.Pt.X > c.Pt.X)),
              (t.OutPt1 = r),
              (t.OutPt2 = c),
              this.JoinHorz(r, f, c, y, K, ot)
            );
          } else {
            for (f = r.Next; e.IntPoint.op_Equality(f.Pt, r.Pt) && f !== r; ) f = f.Next;
            var at = f.Pt.Y > r.Pt.Y || !e.ClipperBase.SlopesEqual4(r.Pt, f.Pt, t.OffPt, this.m_UseFullRange);
            if (at) {
              for (f = r.Prev; e.IntPoint.op_Equality(f.Pt, r.Pt) && f !== r; ) f = f.Prev;
              if (f.Pt.Y > r.Pt.Y || !e.ClipperBase.SlopesEqual4(r.Pt, f.Pt, t.OffPt, this.m_UseFullRange))
                return !1;
            }
            for (y = c.Next; e.IntPoint.op_Equality(y.Pt, c.Pt) && y !== c; ) y = y.Next;
            var dt = y.Pt.Y > c.Pt.Y || !e.ClipperBase.SlopesEqual4(c.Pt, y.Pt, t.OffPt, this.m_UseFullRange);
            if (dt) {
              for (y = c.Prev; e.IntPoint.op_Equality(y.Pt, c.Pt) && y !== c; ) y = y.Prev;
              if (y.Pt.Y > c.Pt.Y || !e.ClipperBase.SlopesEqual4(c.Pt, y.Pt, t.OffPt, this.m_UseFullRange))
                return !1;
            }
            return f === r || y === c || f === y || (i === n && at === dt)
              ? !1
              : at
                ? ((f = this.DupOutPt(r, !1)),
                  (y = this.DupOutPt(c, !0)),
                  (r.Prev = c),
                  (c.Next = r),
                  (f.Next = y),
                  (y.Prev = f),
                  (t.OutPt1 = r),
                  (t.OutPt2 = f),
                  !0)
                : ((f = this.DupOutPt(r, !0)),
                  (y = this.DupOutPt(c, !1)),
                  (r.Next = c),
                  (c.Prev = r),
                  (f.Prev = y),
                  (y.Next = f),
                  (t.OutPt1 = r),
                  (t.OutPt2 = f),
                  !0);
          }
        }),
        (e.Clipper.GetBounds = function (t) {
          for (var i = 0, n = t.length; i < n && t[i].length === 0; ) i++;
          if (i === n) return new e.IntRect(0, 0, 0, 0);
          var r = new e.IntRect();
          for (r.left = t[i][0].X, r.right = r.left, r.top = t[i][0].Y, r.bottom = r.top; i < n; i++)
            for (var f = 0, c = t[i].length; f < c; f++)
              (t[i][f].X < r.left ? (r.left = t[i][f].X) : t[i][f].X > r.right && (r.right = t[i][f].X),
                t[i][f].Y < r.top ? (r.top = t[i][f].Y) : t[i][f].Y > r.bottom && (r.bottom = t[i][f].Y));
          return r;
        }),
        (e.Clipper.prototype.GetBounds2 = function (t) {
          var i = t,
            n = new e.IntRect();
          for (n.left = t.Pt.X, n.right = t.Pt.X, n.top = t.Pt.Y, n.bottom = t.Pt.Y, t = t.Next; t !== i; )
            (t.Pt.X < n.left && (n.left = t.Pt.X),
              t.Pt.X > n.right && (n.right = t.Pt.X),
              t.Pt.Y < n.top && (n.top = t.Pt.Y),
              t.Pt.Y > n.bottom && (n.bottom = t.Pt.Y),
              (t = t.Next));
          return n;
        }),
        (e.Clipper.PointInPolygon = function (t, i) {
          var n = 0,
            r = i.length;
          if (r < 3) return 0;
          for (var f = i[0], c = 1; c <= r; ++c) {
            var y = c === r ? i[0] : i[c];
            if (y.Y === t.Y && (y.X === t.X || (f.Y === t.Y && y.X > t.X == f.X < t.X))) return -1;
            if (f.Y < t.Y != y.Y < t.Y) {
              if (f.X >= t.X)
                if (y.X > t.X) n = 1 - n;
                else {
                  var g = (f.X - t.X) * (y.Y - t.Y) - (y.X - t.X) * (f.Y - t.Y);
                  if (g === 0) return -1;
                  g > 0 == y.Y > f.Y && (n = 1 - n);
                }
              else if (y.X > t.X) {
                var g = (f.X - t.X) * (y.Y - t.Y) - (y.X - t.X) * (f.Y - t.Y);
                if (g === 0) return -1;
                g > 0 == y.Y > f.Y && (n = 1 - n);
              }
            }
            f = y;
          }
          return n;
        }),
        (e.Clipper.prototype.PointInPolygon = function (t, i) {
          var n = 0,
            r = i,
            f = t.X,
            c = t.Y,
            y = i.Pt.X,
            g = i.Pt.Y;
          do {
            i = i.Next;
            var C = i.Pt.X,
              L = i.Pt.Y;
            if (L === c && (C === f || (g === c && C > f == y < f))) return -1;
            if (g < c != L < c) {
              if (y >= f)
                if (C > f) n = 1 - n;
                else {
                  var k = (y - f) * (L - c) - (C - f) * (g - c);
                  if (k === 0) return -1;
                  k > 0 == L > g && (n = 1 - n);
                }
              else if (C > f) {
                var k = (y - f) * (L - c) - (C - f) * (g - c);
                if (k === 0) return -1;
                k > 0 == L > g && (n = 1 - n);
              }
            }
            ((y = C), (g = L));
          } while (r !== i);
          return n;
        }),
        (e.Clipper.prototype.Poly2ContainsPoly1 = function (t, i) {
          var n = t;
          do {
            var r = this.PointInPolygon(n.Pt, i);
            if (r >= 0) return r > 0;
            n = n.Next;
          } while (n !== t);
          return !0;
        }),
        (e.Clipper.prototype.FixupFirstLefts1 = function (t, i) {
          for (var n, r, f = 0, c = this.m_PolyOuts.length; f < c; f++)
            ((n = this.m_PolyOuts[f]),
              (r = e.Clipper.ParseFirstLeft(n.FirstLeft)),
              n.Pts !== null && r === t && this.Poly2ContainsPoly1(n.Pts, i.Pts) && (n.FirstLeft = i));
        }),
        (e.Clipper.prototype.FixupFirstLefts2 = function (t, i) {
          for (var n = i.FirstLeft, r, f, c = 0, y = this.m_PolyOuts.length; c < y; c++)
            ((r = this.m_PolyOuts[c]),
              !(r.Pts === null || r === i || r === t) &&
                ((f = e.Clipper.ParseFirstLeft(r.FirstLeft)),
                !(f !== n && f !== t && f !== i) &&
                  (this.Poly2ContainsPoly1(r.Pts, t.Pts)
                    ? (r.FirstLeft = t)
                    : this.Poly2ContainsPoly1(r.Pts, i.Pts)
                      ? (r.FirstLeft = i)
                      : (r.FirstLeft === t || r.FirstLeft === i) && (r.FirstLeft = n))));
        }),
        (e.Clipper.prototype.FixupFirstLefts3 = function (t, i) {
          for (var n, r, f = 0, c = this.m_PolyOuts.length; f < c; f++)
            ((n = this.m_PolyOuts[f]),
              (r = e.Clipper.ParseFirstLeft(n.FirstLeft)),
              n.Pts !== null && r === t && (n.FirstLeft = i));
        }),
        (e.Clipper.ParseFirstLeft = function (t) {
          for (; t !== null && t.Pts === null; ) t = t.FirstLeft;
          return t;
        }),
        (e.Clipper.prototype.JoinCommonEdges = function () {
          for (var t = 0, i = this.m_Joins.length; t < i; t++) {
            var n = this.m_Joins[t],
              r = this.GetOutRec(n.OutPt1.Idx),
              f = this.GetOutRec(n.OutPt2.Idx);
            if (!(r.Pts === null || f.Pts === null) && !(r.IsOpen || f.IsOpen)) {
              var c;
              (r === f
                ? (c = r)
                : this.OutRec1RightOfOutRec2(r, f)
                  ? (c = f)
                  : this.OutRec1RightOfOutRec2(f, r)
                    ? (c = r)
                    : (c = this.GetLowermostRec(r, f)),
                this.JoinPoints(n, r, f) &&
                  (r === f
                    ? ((r.Pts = n.OutPt1),
                      (r.BottomPt = null),
                      (f = this.CreateOutRec()),
                      (f.Pts = n.OutPt2),
                      this.UpdateOutPtIdxs(f),
                      this.Poly2ContainsPoly1(f.Pts, r.Pts)
                        ? ((f.IsHole = !r.IsHole),
                          (f.FirstLeft = r),
                          this.m_UsingPolyTree && this.FixupFirstLefts2(f, r),
                          (f.IsHole ^ this.ReverseSolution) == this.Area$1(f) > 0 &&
                            this.ReversePolyPtLinks(f.Pts))
                        : this.Poly2ContainsPoly1(r.Pts, f.Pts)
                          ? ((f.IsHole = r.IsHole),
                            (r.IsHole = !f.IsHole),
                            (f.FirstLeft = r.FirstLeft),
                            (r.FirstLeft = f),
                            this.m_UsingPolyTree && this.FixupFirstLefts2(r, f),
                            (r.IsHole ^ this.ReverseSolution) == this.Area$1(r) > 0 &&
                              this.ReversePolyPtLinks(r.Pts))
                          : ((f.IsHole = r.IsHole),
                            (f.FirstLeft = r.FirstLeft),
                            this.m_UsingPolyTree && this.FixupFirstLefts1(r, f)))
                    : ((f.Pts = null),
                      (f.BottomPt = null),
                      (f.Idx = r.Idx),
                      (r.IsHole = c.IsHole),
                      c === f && (r.FirstLeft = f.FirstLeft),
                      (f.FirstLeft = r),
                      this.m_UsingPolyTree && this.FixupFirstLefts3(f, r))));
            }
          }
        }),
        (e.Clipper.prototype.UpdateOutPtIdxs = function (t) {
          var i = t.Pts;
          do ((i.Idx = t.Idx), (i = i.Prev));
          while (i !== t.Pts);
        }),
        (e.Clipper.prototype.DoSimplePolygons = function () {
          for (var t = 0; t < this.m_PolyOuts.length; ) {
            var i = this.m_PolyOuts[t++],
              n = i.Pts;
            if (!(n === null || i.IsOpen))
              do {
                for (var r = n.Next; r !== i.Pts; ) {
                  if (e.IntPoint.op_Equality(n.Pt, r.Pt) && r.Next !== n && r.Prev !== n) {
                    var f = n.Prev,
                      c = r.Prev;
                    ((n.Prev = c), (c.Next = n), (r.Prev = f), (f.Next = r), (i.Pts = n));
                    var y = this.CreateOutRec();
                    ((y.Pts = r),
                      this.UpdateOutPtIdxs(y),
                      this.Poly2ContainsPoly1(y.Pts, i.Pts)
                        ? ((y.IsHole = !i.IsHole),
                          (y.FirstLeft = i),
                          this.m_UsingPolyTree && this.FixupFirstLefts2(y, i))
                        : this.Poly2ContainsPoly1(i.Pts, y.Pts)
                          ? ((y.IsHole = i.IsHole),
                            (i.IsHole = !y.IsHole),
                            (y.FirstLeft = i.FirstLeft),
                            (i.FirstLeft = y),
                            this.m_UsingPolyTree && this.FixupFirstLefts2(i, y))
                          : ((y.IsHole = i.IsHole),
                            (y.FirstLeft = i.FirstLeft),
                            this.m_UsingPolyTree && this.FixupFirstLefts1(i, y)),
                      (r = n));
                  }
                  r = r.Next;
                }
                n = n.Next;
              } while (n !== i.Pts);
          }
        }),
        (e.Clipper.Area = function (t) {
          if (!Array.isArray(t)) return 0;
          var i = t.length;
          if (i < 3) return 0;
          for (var n = 0, r = 0, f = i - 1; r < i; ++r)
            ((n += (t[f].X + t[r].X) * (t[f].Y - t[r].Y)), (f = r));
          return -n * 0.5;
        }),
        (e.Clipper.prototype.Area = function (t) {
          var i = t;
          if (t === null) return 0;
          var n = 0;
          do ((n = n + (t.Prev.Pt.X + t.Pt.X) * (t.Prev.Pt.Y - t.Pt.Y)), (t = t.Next));
          while (t !== i);
          return n * 0.5;
        }),
        (e.Clipper.prototype.Area$1 = function (t) {
          return this.Area(t.Pts);
        }),
        (e.Clipper.SimplifyPolygon = function (t, i) {
          var n = new Array(),
            r = new e.Clipper(0);
          return (
            (r.StrictlySimple = !0),
            r.AddPath(t, e.PolyType.ptSubject, !0),
            r.Execute(e.ClipType.ctUnion, n, i, i),
            n
          );
        }),
        (e.Clipper.SimplifyPolygons = function (t, i) {
          typeof i > "u" && (i = e.PolyFillType.pftEvenOdd);
          var n = new Array(),
            r = new e.Clipper(0);
          return (
            (r.StrictlySimple = !0),
            r.AddPaths(t, e.PolyType.ptSubject, !0),
            r.Execute(e.ClipType.ctUnion, n, i, i),
            n
          );
        }),
        (e.Clipper.DistanceSqrd = function (t, i) {
          var n = t.X - i.X,
            r = t.Y - i.Y;
          return n * n + r * r;
        }),
        (e.Clipper.DistanceFromLineSqrd = function (t, i, n) {
          var r = i.Y - n.Y,
            f = n.X - i.X,
            c = r * i.X + f * i.Y;
          return ((c = r * t.X + f * t.Y - c), (c * c) / (r * r + f * f));
        }),
        (e.Clipper.SlopesNearCollinear = function (t, i, n, r) {
          return Math.abs(t.X - i.X) > Math.abs(t.Y - i.Y)
            ? t.X > i.X == t.X < n.X
              ? e.Clipper.DistanceFromLineSqrd(t, i, n) < r
              : i.X > t.X == i.X < n.X
                ? e.Clipper.DistanceFromLineSqrd(i, t, n) < r
                : e.Clipper.DistanceFromLineSqrd(n, t, i) < r
            : t.Y > i.Y == t.Y < n.Y
              ? e.Clipper.DistanceFromLineSqrd(t, i, n) < r
              : i.Y > t.Y == i.Y < n.Y
                ? e.Clipper.DistanceFromLineSqrd(i, t, n) < r
                : e.Clipper.DistanceFromLineSqrd(n, t, i) < r;
        }),
        (e.Clipper.PointsAreClose = function (t, i, n) {
          var r = t.X - i.X,
            f = t.Y - i.Y;
          return r * r + f * f <= n;
        }),
        (e.Clipper.ExcludeOp = function (t) {
          var i = t.Prev;
          return ((i.Next = t.Next), (t.Next.Prev = i), (i.Idx = 0), i);
        }),
        (e.Clipper.CleanPolygon = function (t, i) {
          typeof i > "u" && (i = 1.415);
          var n = t.length;
          if (n === 0) return new Array();
          for (var r = new Array(n), f = 0; f < n; ++f) r[f] = new e.OutPt();
          for (var f = 0; f < n; ++f)
            ((r[f].Pt = t[f]), (r[f].Next = r[(f + 1) % n]), (r[f].Next.Prev = r[f]), (r[f].Idx = 0));
          for (var c = i * i, y = r[0]; y.Idx === 0 && y.Next !== y.Prev; )
            e.Clipper.PointsAreClose(y.Pt, y.Prev.Pt, c)
              ? ((y = e.Clipper.ExcludeOp(y)), n--)
              : e.Clipper.PointsAreClose(y.Prev.Pt, y.Next.Pt, c)
                ? (e.Clipper.ExcludeOp(y.Next), (y = e.Clipper.ExcludeOp(y)), (n -= 2))
                : e.Clipper.SlopesNearCollinear(y.Prev.Pt, y.Pt, y.Next.Pt, c)
                  ? ((y = e.Clipper.ExcludeOp(y)), n--)
                  : ((y.Idx = 1), (y = y.Next));
          n < 3 && (n = 0);
          for (var g = new Array(n), f = 0; f < n; ++f) ((g[f] = new e.IntPoint1(y.Pt)), (y = y.Next));
          return ((r = null), g);
        }),
        (e.Clipper.CleanPolygons = function (t, i) {
          for (var n = new Array(t.length), r = 0, f = t.length; r < f; r++)
            n[r] = e.Clipper.CleanPolygon(t[r], i);
          return n;
        }),
        (e.Clipper.Minkowski = function (t, i, n, r) {
          var f = r ? 1 : 0,
            c = t.length,
            y = i.length,
            g = new Array();
          if (n)
            for (var C = 0; C < y; C++) {
              for (var L = new Array(c), k = 0, N = t.length, q = t[k]; k < N; k++, q = t[k])
                L[k] = new e.IntPoint2(i[C].X + q.X, i[C].Y + q.Y);
              g.push(L);
            }
          else
            for (var C = 0; C < y; C++) {
              for (var L = new Array(c), k = 0, N = t.length, q = t[k]; k < N; k++, q = t[k])
                L[k] = new e.IntPoint2(i[C].X - q.X, i[C].Y - q.Y);
              g.push(L);
            }
          for (var K = new Array(), C = 0; C < y - 1 + f; C++)
            for (var k = 0; k < c; k++) {
              var ot = new Array();
              (ot.push(g[C % y][k % c]),
                ot.push(g[(C + 1) % y][k % c]),
                ot.push(g[(C + 1) % y][(k + 1) % c]),
                ot.push(g[C % y][(k + 1) % c]),
                e.Clipper.Orientation(ot) || ot.reverse(),
                K.push(ot));
            }
          return K;
        }),
        (e.Clipper.MinkowskiSum = function (t, i, n) {
          if (i[0] instanceof Array) {
            for (var f = i, y = new e.Paths(), c = new e.Clipper(), g = 0; g < f.length; ++g) {
              var C = e.Clipper.Minkowski(t, f[g], !0, n);
              if ((c.AddPaths(C, e.PolyType.ptSubject, !0), n)) {
                var r = e.Clipper.TranslatePath(f[g], t[0]);
                c.AddPath(r, e.PolyType.ptClip, !0);
              }
            }
            return (
              c.Execute(e.ClipType.ctUnion, y, e.PolyFillType.pftNonZero, e.PolyFillType.pftNonZero),
              y
            );
          } else {
            var r = i,
              f = e.Clipper.Minkowski(t, r, !0, n),
              c = new e.Clipper();
            return (
              c.AddPaths(f, e.PolyType.ptSubject, !0),
              c.Execute(e.ClipType.ctUnion, f, e.PolyFillType.pftNonZero, e.PolyFillType.pftNonZero),
              f
            );
          }
        }),
        (e.Clipper.TranslatePath = function (t, i) {
          for (var n = new e.Path(), r = 0; r < t.length; r++)
            n.push(new e.IntPoint2(t[r].X + i.X, t[r].Y + i.Y));
          return n;
        }),
        (e.Clipper.MinkowskiDiff = function (t, i) {
          var n = e.Clipper.Minkowski(t, i, !1, !0),
            r = new e.Clipper();
          return (
            r.AddPaths(n, e.PolyType.ptSubject, !0),
            r.Execute(e.ClipType.ctUnion, n, e.PolyFillType.pftNonZero, e.PolyFillType.pftNonZero),
            n
          );
        }),
        (e.Clipper.PolyTreeToPaths = function (t) {
          var i = new Array();
          return (e.Clipper.AddPolyNodeToPaths(t, e.Clipper.NodeType.ntAny, i), i);
        }),
        (e.Clipper.AddPolyNodeToPaths = function (t, i, n) {
          var r = !0;
          switch (i) {
            case e.Clipper.NodeType.ntOpen:
              return;
            case e.Clipper.NodeType.ntClosed:
              r = !t.IsOpen;
              break;
            default:
              break;
          }
          t.m_polygon.length > 0 && r && n.push(t.m_polygon);
          for (var f = 0, c = t.Childs(), y = c.length, g = c[f]; f < y; f++, g = c[f])
            e.Clipper.AddPolyNodeToPaths(g, i, n);
        }),
        (e.Clipper.OpenPathsFromPolyTree = function (t) {
          for (var i = new e.Paths(), n = 0, r = t.ChildCount(); n < r; n++)
            t.Childs()[n].IsOpen && i.push(t.Childs()[n].m_polygon);
          return i;
        }),
        (e.Clipper.ClosedPathsFromPolyTree = function (t) {
          var i = new e.Paths();
          return (e.Clipper.AddPolyNodeToPaths(t, e.Clipper.NodeType.ntClosed, i), i);
        }),
        yi(e.Clipper, e.ClipperBase),
        (e.Clipper.NodeType = { ntAny: 0, ntOpen: 1, ntClosed: 2 }),
        (e.ClipperOffset = function (t, i) {
          (typeof t > "u" && (t = 2),
            typeof i > "u" && (i = e.ClipperOffset.def_arc_tolerance),
            (this.m_destPolys = new e.Paths()),
            (this.m_srcPoly = new e.Path()),
            (this.m_destPoly = new e.Path()),
            (this.m_normals = new Array()),
            (this.m_delta = 0),
            (this.m_sinA = 0),
            (this.m_sin = 0),
            (this.m_cos = 0),
            (this.m_miterLim = 0),
            (this.m_StepsPerRad = 0),
            (this.m_lowest = new e.IntPoint0()),
            (this.m_polyNodes = new e.PolyNode()),
            (this.MiterLimit = t),
            (this.ArcTolerance = i),
            (this.m_lowest.X = -1));
        }),
        (e.ClipperOffset.two_pi = 6.28318530717959),
        (e.ClipperOffset.def_arc_tolerance = 0.25),
        (e.ClipperOffset.prototype.Clear = function () {
          (e.Clear(this.m_polyNodes.Childs()), (this.m_lowest.X = -1));
        }),
        (e.ClipperOffset.Round = e.Clipper.Round),
        (e.ClipperOffset.prototype.AddPath = function (t, i, n) {
          var r = t.length - 1;
          if (!(r < 0)) {
            var f = new e.PolyNode();
            if (
              ((f.m_jointype = i),
              (f.m_endtype = n),
              n === e.EndType.etClosedLine || n === e.EndType.etClosedPolygon)
            )
              for (; r > 0 && e.IntPoint.op_Equality(t[0], t[r]); ) r--;
            f.m_polygon.push(t[0]);
            for (var c = 0, y = 0, g = 1; g <= r; g++)
              e.IntPoint.op_Inequality(f.m_polygon[c], t[g]) &&
                (c++,
                f.m_polygon.push(t[g]),
                (t[g].Y > f.m_polygon[y].Y || (t[g].Y === f.m_polygon[y].Y && t[g].X < f.m_polygon[y].X)) &&
                  (y = c));
            if (
              !(n === e.EndType.etClosedPolygon && c < 2) &&
              (this.m_polyNodes.AddChild(f), n === e.EndType.etClosedPolygon)
            )
              if (this.m_lowest.X < 0) this.m_lowest = new e.IntPoint2(this.m_polyNodes.ChildCount() - 1, y);
              else {
                var C = this.m_polyNodes.Childs()[this.m_lowest.X].m_polygon[this.m_lowest.Y];
                (f.m_polygon[y].Y > C.Y || (f.m_polygon[y].Y === C.Y && f.m_polygon[y].X < C.X)) &&
                  (this.m_lowest = new e.IntPoint2(this.m_polyNodes.ChildCount() - 1, y));
              }
          }
        }),
        (e.ClipperOffset.prototype.AddPaths = function (t, i, n) {
          for (var r = 0, f = t.length; r < f; r++) this.AddPath(t[r], i, n);
        }),
        (e.ClipperOffset.prototype.FixOrientations = function () {
          if (
            this.m_lowest.X >= 0 &&
            !e.Clipper.Orientation(this.m_polyNodes.Childs()[this.m_lowest.X].m_polygon)
          )
            for (var t = 0; t < this.m_polyNodes.ChildCount(); t++) {
              var i = this.m_polyNodes.Childs()[t];
              (i.m_endtype === e.EndType.etClosedPolygon ||
                (i.m_endtype === e.EndType.etClosedLine && e.Clipper.Orientation(i.m_polygon))) &&
                i.m_polygon.reverse();
            }
          else
            for (var t = 0; t < this.m_polyNodes.ChildCount(); t++) {
              var i = this.m_polyNodes.Childs()[t];
              i.m_endtype === e.EndType.etClosedLine &&
                !e.Clipper.Orientation(i.m_polygon) &&
                i.m_polygon.reverse();
            }
        }),
        (e.ClipperOffset.GetUnitNormal = function (t, i) {
          var n = i.X - t.X,
            r = i.Y - t.Y;
          if (n === 0 && r === 0) return new e.DoublePoint2(0, 0);
          var f = 1 / Math.sqrt(n * n + r * r);
          return ((n *= f), (r *= f), new e.DoublePoint2(r, -n));
        }),
        (e.ClipperOffset.prototype.DoOffset = function (t) {
          if (((this.m_destPolys = new Array()), (this.m_delta = t), e.ClipperBase.near_zero(t))) {
            for (var i = 0; i < this.m_polyNodes.ChildCount(); i++) {
              var n = this.m_polyNodes.Childs()[i];
              n.m_endtype === e.EndType.etClosedPolygon && this.m_destPolys.push(n.m_polygon);
            }
            return;
          }
          this.MiterLimit > 2
            ? (this.m_miterLim = 2 / (this.MiterLimit * this.MiterLimit))
            : (this.m_miterLim = 0.5);
          var r;
          this.ArcTolerance <= 0
            ? (r = e.ClipperOffset.def_arc_tolerance)
            : this.ArcTolerance > Math.abs(t) * e.ClipperOffset.def_arc_tolerance
              ? (r = Math.abs(t) * e.ClipperOffset.def_arc_tolerance)
              : (r = this.ArcTolerance);
          var f = 3.14159265358979 / Math.acos(1 - r / Math.abs(t));
          ((this.m_sin = Math.sin(e.ClipperOffset.two_pi / f)),
            (this.m_cos = Math.cos(e.ClipperOffset.two_pi / f)),
            (this.m_StepsPerRad = f / e.ClipperOffset.two_pi),
            t < 0 && (this.m_sin = -this.m_sin));
          for (var i = 0; i < this.m_polyNodes.ChildCount(); i++) {
            var n = this.m_polyNodes.Childs()[i];
            this.m_srcPoly = n.m_polygon;
            var c = this.m_srcPoly.length;
            if (!(c === 0 || (t <= 0 && (c < 3 || n.m_endtype !== e.EndType.etClosedPolygon)))) {
              if (((this.m_destPoly = new Array()), c === 1)) {
                if (n.m_jointype === e.JoinType.jtRound)
                  for (var y = 1, g = 0, C = 1; C <= f; C++) {
                    this.m_destPoly.push(
                      new e.IntPoint2(
                        e.ClipperOffset.Round(this.m_srcPoly[0].X + y * t),
                        e.ClipperOffset.Round(this.m_srcPoly[0].Y + g * t),
                      ),
                    );
                    var L = y;
                    ((y = y * this.m_cos - this.m_sin * g), (g = L * this.m_sin + g * this.m_cos));
                  }
                else
                  for (var y = -1, g = -1, C = 0; C < 4; ++C)
                    (this.m_destPoly.push(
                      new e.IntPoint2(
                        e.ClipperOffset.Round(this.m_srcPoly[0].X + y * t),
                        e.ClipperOffset.Round(this.m_srcPoly[0].Y + g * t),
                      ),
                    ),
                      y < 0 ? (y = 1) : g < 0 ? (g = 1) : (y = -1));
                this.m_destPolys.push(this.m_destPoly);
                continue;
              }
              this.m_normals.length = 0;
              for (var C = 0; C < c - 1; C++)
                this.m_normals.push(e.ClipperOffset.GetUnitNormal(this.m_srcPoly[C], this.m_srcPoly[C + 1]));
              if (
                (n.m_endtype === e.EndType.etClosedLine || n.m_endtype === e.EndType.etClosedPolygon
                  ? this.m_normals.push(
                      e.ClipperOffset.GetUnitNormal(this.m_srcPoly[c - 1], this.m_srcPoly[0]),
                    )
                  : this.m_normals.push(new e.DoublePoint1(this.m_normals[c - 2])),
                n.m_endtype === e.EndType.etClosedPolygon)
              ) {
                for (var k = c - 1, C = 0; C < c; C++) k = this.OffsetPoint(C, k, n.m_jointype);
                this.m_destPolys.push(this.m_destPoly);
              } else if (n.m_endtype === e.EndType.etClosedLine) {
                for (var k = c - 1, C = 0; C < c; C++) k = this.OffsetPoint(C, k, n.m_jointype);
                (this.m_destPolys.push(this.m_destPoly), (this.m_destPoly = new Array()));
                for (var N = this.m_normals[c - 1], C = c - 1; C > 0; C--)
                  this.m_normals[C] = new e.DoublePoint2(-this.m_normals[C - 1].X, -this.m_normals[C - 1].Y);
                ((this.m_normals[0] = new e.DoublePoint2(-N.X, -N.Y)), (k = 0));
                for (var C = c - 1; C >= 0; C--) k = this.OffsetPoint(C, k, n.m_jointype);
                this.m_destPolys.push(this.m_destPoly);
              } else {
                for (var k = 0, C = 1; C < c - 1; ++C) k = this.OffsetPoint(C, k, n.m_jointype);
                var q;
                if (n.m_endtype === e.EndType.etOpenButt) {
                  var C = c - 1;
                  ((q = new e.IntPoint2(
                    e.ClipperOffset.Round(this.m_srcPoly[C].X + this.m_normals[C].X * t),
                    e.ClipperOffset.Round(this.m_srcPoly[C].Y + this.m_normals[C].Y * t),
                  )),
                    this.m_destPoly.push(q),
                    (q = new e.IntPoint2(
                      e.ClipperOffset.Round(this.m_srcPoly[C].X - this.m_normals[C].X * t),
                      e.ClipperOffset.Round(this.m_srcPoly[C].Y - this.m_normals[C].Y * t),
                    )),
                    this.m_destPoly.push(q));
                } else {
                  var C = c - 1;
                  ((k = c - 2),
                    (this.m_sinA = 0),
                    (this.m_normals[C] = new e.DoublePoint2(-this.m_normals[C].X, -this.m_normals[C].Y)),
                    n.m_endtype === e.EndType.etOpenSquare ? this.DoSquare(C, k) : this.DoRound(C, k));
                }
                for (var C = c - 1; C > 0; C--)
                  this.m_normals[C] = new e.DoublePoint2(-this.m_normals[C - 1].X, -this.m_normals[C - 1].Y);
                ((this.m_normals[0] = new e.DoublePoint2(-this.m_normals[1].X, -this.m_normals[1].Y)),
                  (k = c - 1));
                for (var C = k - 1; C > 0; --C) k = this.OffsetPoint(C, k, n.m_jointype);
                (n.m_endtype === e.EndType.etOpenButt
                  ? ((q = new e.IntPoint2(
                      e.ClipperOffset.Round(this.m_srcPoly[0].X - this.m_normals[0].X * t),
                      e.ClipperOffset.Round(this.m_srcPoly[0].Y - this.m_normals[0].Y * t),
                    )),
                    this.m_destPoly.push(q),
                    (q = new e.IntPoint2(
                      e.ClipperOffset.Round(this.m_srcPoly[0].X + this.m_normals[0].X * t),
                      e.ClipperOffset.Round(this.m_srcPoly[0].Y + this.m_normals[0].Y * t),
                    )),
                    this.m_destPoly.push(q))
                  : ((k = 1),
                    (this.m_sinA = 0),
                    n.m_endtype === e.EndType.etOpenSquare ? this.DoSquare(0, 1) : this.DoRound(0, 1)),
                  this.m_destPolys.push(this.m_destPoly));
              }
            }
          }
        }),
        (e.ClipperOffset.prototype.Execute = function () {
          var t = arguments,
            i = t[0] instanceof e.PolyTree;
          if (i) {
            var n = t[0],
              r = t[1];
            (n.Clear(), this.FixOrientations(), this.DoOffset(r));
            var f = new e.Clipper(0);
            if ((f.AddPaths(this.m_destPolys, e.PolyType.ptSubject, !0), r > 0))
              f.Execute(e.ClipType.ctUnion, n, e.PolyFillType.pftPositive, e.PolyFillType.pftPositive);
            else {
              var c = e.Clipper.GetBounds(this.m_destPolys),
                y = new e.Path();
              if (
                (y.push(new e.IntPoint2(c.left - 10, c.bottom + 10)),
                y.push(new e.IntPoint2(c.right + 10, c.bottom + 10)),
                y.push(new e.IntPoint2(c.right + 10, c.top - 10)),
                y.push(new e.IntPoint2(c.left - 10, c.top - 10)),
                f.AddPath(y, e.PolyType.ptSubject, !0),
                (f.ReverseSolution = !0),
                f.Execute(e.ClipType.ctUnion, n, e.PolyFillType.pftNegative, e.PolyFillType.pftNegative),
                n.ChildCount() === 1 && n.Childs()[0].ChildCount() > 0)
              ) {
                var g = n.Childs()[0];
                ((n.Childs()[0] = g.Childs()[0]), (n.Childs()[0].m_Parent = n));
                for (var C = 1; C < g.ChildCount(); C++) n.AddChild(g.Childs()[C]);
              } else n.Clear();
            }
          } else {
            var n = t[0],
              r = t[1];
            (e.Clear(n), this.FixOrientations(), this.DoOffset(r));
            var f = new e.Clipper(0);
            if ((f.AddPaths(this.m_destPolys, e.PolyType.ptSubject, !0), r > 0))
              f.Execute(e.ClipType.ctUnion, n, e.PolyFillType.pftPositive, e.PolyFillType.pftPositive);
            else {
              var c = e.Clipper.GetBounds(this.m_destPolys),
                y = new e.Path();
              (y.push(new e.IntPoint2(c.left - 10, c.bottom + 10)),
                y.push(new e.IntPoint2(c.right + 10, c.bottom + 10)),
                y.push(new e.IntPoint2(c.right + 10, c.top - 10)),
                y.push(new e.IntPoint2(c.left - 10, c.top - 10)),
                f.AddPath(y, e.PolyType.ptSubject, !0),
                (f.ReverseSolution = !0),
                f.Execute(e.ClipType.ctUnion, n, e.PolyFillType.pftNegative, e.PolyFillType.pftNegative),
                n.length > 0 && n.splice(0, 1));
            }
          }
        }),
        (e.ClipperOffset.prototype.OffsetPoint = function (t, i, n) {
          if (
            ((this.m_sinA =
              this.m_normals[i].X * this.m_normals[t].Y - this.m_normals[t].X * this.m_normals[i].Y),
            Math.abs(this.m_sinA * this.m_delta) < 1)
          ) {
            var r = this.m_normals[i].X * this.m_normals[t].X + this.m_normals[t].Y * this.m_normals[i].Y;
            if (r > 0)
              return (
                this.m_destPoly.push(
                  new e.IntPoint2(
                    e.ClipperOffset.Round(this.m_srcPoly[t].X + this.m_normals[i].X * this.m_delta),
                    e.ClipperOffset.Round(this.m_srcPoly[t].Y + this.m_normals[i].Y * this.m_delta),
                  ),
                ),
                i
              );
          } else this.m_sinA > 1 ? (this.m_sinA = 1) : this.m_sinA < -1 && (this.m_sinA = -1);
          if (this.m_sinA * this.m_delta < 0)
            (this.m_destPoly.push(
              new e.IntPoint2(
                e.ClipperOffset.Round(this.m_srcPoly[t].X + this.m_normals[i].X * this.m_delta),
                e.ClipperOffset.Round(this.m_srcPoly[t].Y + this.m_normals[i].Y * this.m_delta),
              ),
            ),
              this.m_destPoly.push(new e.IntPoint1(this.m_srcPoly[t])),
              this.m_destPoly.push(
                new e.IntPoint2(
                  e.ClipperOffset.Round(this.m_srcPoly[t].X + this.m_normals[t].X * this.m_delta),
                  e.ClipperOffset.Round(this.m_srcPoly[t].Y + this.m_normals[t].Y * this.m_delta),
                ),
              ));
          else
            switch (n) {
              case e.JoinType.jtMiter: {
                var f =
                  1 + (this.m_normals[t].X * this.m_normals[i].X + this.m_normals[t].Y * this.m_normals[i].Y);
                f >= this.m_miterLim ? this.DoMiter(t, i, f) : this.DoSquare(t, i);
                break;
              }
              case e.JoinType.jtSquare:
                this.DoSquare(t, i);
                break;
              case e.JoinType.jtRound:
                this.DoRound(t, i);
                break;
            }
          return ((i = t), i);
        }),
        (e.ClipperOffset.prototype.DoSquare = function (t, i) {
          var n = Math.tan(
            Math.atan2(
              this.m_sinA,
              this.m_normals[i].X * this.m_normals[t].X + this.m_normals[i].Y * this.m_normals[t].Y,
            ) / 4,
          );
          (this.m_destPoly.push(
            new e.IntPoint2(
              e.ClipperOffset.Round(
                this.m_srcPoly[t].X + this.m_delta * (this.m_normals[i].X - this.m_normals[i].Y * n),
              ),
              e.ClipperOffset.Round(
                this.m_srcPoly[t].Y + this.m_delta * (this.m_normals[i].Y + this.m_normals[i].X * n),
              ),
            ),
          ),
            this.m_destPoly.push(
              new e.IntPoint2(
                e.ClipperOffset.Round(
                  this.m_srcPoly[t].X + this.m_delta * (this.m_normals[t].X + this.m_normals[t].Y * n),
                ),
                e.ClipperOffset.Round(
                  this.m_srcPoly[t].Y + this.m_delta * (this.m_normals[t].Y - this.m_normals[t].X * n),
                ),
              ),
            ));
        }),
        (e.ClipperOffset.prototype.DoMiter = function (t, i, n) {
          var r = this.m_delta / n;
          this.m_destPoly.push(
            new e.IntPoint2(
              e.ClipperOffset.Round(this.m_srcPoly[t].X + (this.m_normals[i].X + this.m_normals[t].X) * r),
              e.ClipperOffset.Round(this.m_srcPoly[t].Y + (this.m_normals[i].Y + this.m_normals[t].Y) * r),
            ),
          );
        }),
        (e.ClipperOffset.prototype.DoRound = function (t, i) {
          for (
            var n = Math.atan2(
                this.m_sinA,
                this.m_normals[i].X * this.m_normals[t].X + this.m_normals[i].Y * this.m_normals[t].Y,
              ),
              r = Math.max(e.Cast_Int32(e.ClipperOffset.Round(this.m_StepsPerRad * Math.abs(n))), 1),
              f = this.m_normals[i].X,
              c = this.m_normals[i].Y,
              y,
              g = 0;
            g < r;
            ++g
          )
            (this.m_destPoly.push(
              new e.IntPoint2(
                e.ClipperOffset.Round(this.m_srcPoly[t].X + f * this.m_delta),
                e.ClipperOffset.Round(this.m_srcPoly[t].Y + c * this.m_delta),
              ),
            ),
              (y = f),
              (f = f * this.m_cos - this.m_sin * c),
              (c = y * this.m_sin + c * this.m_cos));
          this.m_destPoly.push(
            new e.IntPoint2(
              e.ClipperOffset.Round(this.m_srcPoly[t].X + this.m_normals[t].X * this.m_delta),
              e.ClipperOffset.Round(this.m_srcPoly[t].Y + this.m_normals[t].Y * this.m_delta),
            ),
          );
        }),
        (e.Error = function (t) {
          try {
            throw new Error(t);
          } catch (i) {
            alert(i.message);
          }
        }),
        (e.JS = {}),
        (e.JS.AreaOfPolygon = function (t, i) {
          return (i || (i = 1), e.Clipper.Area(t) / (i * i));
        }),
        (e.JS.AreaOfPolygons = function (t, i) {
          i || (i = 1);
          for (var n = 0, r = 0; r < t.length; r++) n += e.Clipper.Area(t[r]);
          return n / (i * i);
        }),
        (e.JS.BoundsOfPath = function (t, i) {
          return e.JS.BoundsOfPaths([t], i);
        }),
        (e.JS.BoundsOfPaths = function (t, i) {
          i || (i = 1);
          var n = e.Clipper.GetBounds(t);
          return ((n.left /= i), (n.bottom /= i), (n.right /= i), (n.top /= i), n);
        }),
        (e.JS.Clean = function (r, i) {
          if (!(r instanceof Array)) return [];
          var n = r[0] instanceof Array,
            r = e.JS.Clone(r);
          if (typeof i != "number" || i === null) return (e.Error("Delta is not a number in Clean()."), r);
          if (r.length === 0 || (r.length === 1 && r[0].length === 0) || i < 0) return r;
          n || (r = [r]);
          for (var f = r.length, c, y, g, C, L, k, N, q = [], K = 0; K < f; K++)
            if (((y = r[K]), (c = y.length), c !== 0)) {
              if (c < 3) {
                ((g = y), q.push(g));
                continue;
              }
              for (g = y, C = i * i, L = y[0], k = 1, N = 1; N < c; N++)
                (y[N].X - L.X) * (y[N].X - L.X) + (y[N].Y - L.Y) * (y[N].Y - L.Y) <= C ||
                  ((g[k] = y[N]), (L = y[N]), k++);
              ((L = y[k - 1]),
                (y[0].X - L.X) * (y[0].X - L.X) + (y[0].Y - L.Y) * (y[0].Y - L.Y) <= C && k--,
                k < c && g.splice(k, c - k),
                g.length && q.push(g));
            }
          return (
            !n && q.length ? (q = q[0]) : !n && q.length === 0 ? (q = []) : n && q.length === 0 && (q = [[]]),
            q
          );
        }),
        (e.JS.Clone = function (t) {
          if (!(t instanceof Array)) return [];
          if (t.length === 0) return [];
          if (t.length === 1 && t[0].length === 0) return [[]];
          var i = t[0] instanceof Array;
          i || (t = [t]);
          var n = t.length,
            r,
            f,
            c,
            y,
            g = new Array(n);
          for (f = 0; f < n; f++) {
            for (r = t[f].length, y = new Array(r), c = 0; c < r; c++) y[c] = { X: t[f][c].X, Y: t[f][c].Y };
            g[f] = y;
          }
          return (i || (g = g[0]), g);
        }),
        (e.JS.Lighten = function (t, i) {
          if (!(t instanceof Array)) return [];
          if (typeof i != "number" || i === null)
            return (e.Error("Tolerance is not a number in Lighten()."), e.JS.Clone(t));
          if (t.length === 0 || (t.length === 1 && t[0].length === 0) || i < 0) return e.JS.Clone(t);
          var n = t[0] instanceof Array;
          n || (t = [t]);
          var r,
            f,
            c,
            y,
            g,
            C,
            L,
            k,
            N,
            q,
            K,
            ot,
            at,
            dt,
            Mt,
            Bt,
            ee,
            ys = t.length,
            vs = i * i,
            ie = [];
          for (r = 0; r < ys; r++)
            if (((c = t[r]), (C = c.length), C !== 0)) {
              for (y = 0; y < 1e6; y++) {
                for (
                  g = [],
                    C = c.length,
                    c[C - 1].X !== c[0].X || c[C - 1].Y !== c[0].Y
                      ? ((ot = 1), c.push({ X: c[0].X, Y: c[0].Y }), (C = c.length))
                      : (ot = 0),
                    K = [],
                    f = 0;
                  f < C - 2;
                  f++
                )
                  ((L = c[f]),
                    (N = c[f + 1]),
                    (k = c[f + 2]),
                    (Bt = L.X),
                    (ee = L.Y),
                    (at = k.X - Bt),
                    (dt = k.Y - ee),
                    (at !== 0 || dt !== 0) &&
                      ((Mt = ((N.X - Bt) * at + (N.Y - ee) * dt) / (at * at + dt * dt)),
                      Mt > 1 ? ((Bt = k.X), (ee = k.Y)) : Mt > 0 && ((Bt += at * Mt), (ee += dt * Mt))),
                    (at = N.X - Bt),
                    (dt = N.Y - ee),
                    (q = at * at + dt * dt),
                    q <= vs && ((K[f + 1] = 1), f++));
                for (g.push({ X: c[0].X, Y: c[0].Y }), f = 1; f < C - 1; f++)
                  K[f] || g.push({ X: c[f].X, Y: c[f].Y });
                if ((g.push({ X: c[C - 1].X, Y: c[C - 1].Y }), ot && c.pop(), K.length)) c = g;
                else break;
              }
              ((C = g.length),
                g[C - 1].X === g[0].X && g[C - 1].Y === g[0].Y && g.pop(),
                g.length > 2 && ie.push(g));
            }
          return (n || (ie = ie[0]), typeof ie > "u" && (ie = []), ie);
        }),
        (e.JS.PerimeterOfPath = function (t, i, n) {
          if (typeof t > "u") return 0;
          var r = Math.sqrt,
            f = 0,
            c,
            y,
            g = 0,
            C = 0,
            L = 0,
            k = 0,
            N = t.length;
          if (N < 2) return 0;
          for (i && ((t[N] = t[0]), N++); --N; )
            ((c = t[N]),
              (g = c.X),
              (C = c.Y),
              (y = t[N - 1]),
              (L = y.X),
              (k = y.Y),
              (f += r((g - L) * (g - L) + (C - k) * (C - k))));
          return (i && t.pop(), f / n);
        }),
        (e.JS.PerimeterOfPaths = function (t, i, n) {
          n || (n = 1);
          for (var r = 0, f = 0; f < t.length; f++) r += e.JS.PerimeterOfPath(t[f], i, n);
          return r;
        }),
        (e.JS.ScaleDownPath = function (t, i) {
          var n, r;
          for (i || (i = 1), n = t.length; n--; ) ((r = t[n]), (r.X = r.X / i), (r.Y = r.Y / i));
        }),
        (e.JS.ScaleDownPaths = function (t, i) {
          var n, r, f;
          for (i || (i = 1), n = t.length; n--; )
            for (r = t[n].length; r--; ) ((f = t[n][r]), (f.X = f.X / i), (f.Y = f.Y / i));
        }),
        (e.JS.ScaleUpPath = function (t, i) {
          var n,
            r,
            f = Math.round;
          for (i || (i = 1), n = t.length; n--; ) ((r = t[n]), (r.X = f(r.X * i)), (r.Y = f(r.Y * i)));
        }),
        (e.JS.ScaleUpPaths = function (t, i) {
          var n,
            r,
            f,
            c = Math.round;
          for (i || (i = 1), n = t.length; n--; )
            for (r = t[n].length; r--; ) ((f = t[n][r]), (f.X = c(f.X * i)), (f.Y = c(f.Y * i)));
        }),
        (e.ExPolygons = function () {
          return [];
        }),
        (e.ExPolygon = function () {
          ((this.outer = null), (this.holes = null));
        }),
        (e.JS.AddOuterPolyNodeToExPolygons = function (t, i) {
          var n = new e.ExPolygon();
          n.outer = t.Contour();
          var r = t.Childs(),
            f = r.length;
          n.holes = new Array(f);
          var c, y, g, C, L, k;
          for (g = 0; g < f; g++)
            for (c = r[g], n.holes[g] = c.Contour(), C = 0, L = c.Childs(), k = L.length; C < k; C++)
              ((y = L[C]), e.JS.AddOuterPolyNodeToExPolygons(y, i));
          i.push(n);
        }),
        (e.JS.ExPolygonsToPaths = function (t) {
          var i,
            n,
            r,
            f,
            c = new e.Paths();
          for (i = 0, r = t.length; i < r; i++)
            for (c.push(t[i].outer), n = 0, f = t[i].holes.length; n < f; n++) c.push(t[i].holes[n]);
          return c;
        }),
        (e.JS.PolyTreeToExPolygons = function (t) {
          var i = new e.ExPolygons(),
            n,
            r,
            f,
            c;
          for (r = 0, f = t.Childs(), c = f.length; r < c; r++)
            ((n = f[r]), e.JS.AddOuterPolyNodeToExPolygons(n, i));
          return i;
        }));
    })();
  });
  var ft = (e, s) => Math.hypot(e[0] - s[0], e[1] - s[1]),
    Nt = class {
      constructor(s = "", o = "") {
        Object.assign(this, { name: s, kind: o, paths: [], points: [], layers: {}, warnings: [], info: [] });
      }
      count(s) {
        let o = this.layers[s] || (this.layers[s] = { count: 0, visible: !0 });
        o.count += 1;
      }
      add(s, o, l) {
        let a = ne(s);
        a.length < 2 ||
          ((o || ft(a[0], a[a.length - 1]) < 1e-6) && ((a = ce(a)), (o = a.length >= 4)),
          this.paths.push({ pts: a, closed: o, layer: l }),
          this.count(l));
      }
    };
  function ne(e, s = 1e-7) {
    let o = [];
    for (let l of e) {
      let a = [+l[0], +l[1]];
      (!o.length || ft(o[o.length - 1], a) > s) && o.push(a);
    }
    return o;
  }
  function ce(e) {
    let s = ne(e);
    return (
      s.length > 1 &&
        (ft(s[0], s[s.length - 1]) > 1e-9
          ? s.push([s[0][0], s[0][1]])
          : (s[s.length - 1] = [s[0][0], s[0][1]])),
      s
    );
  }
  function It(e) {
    let s = 0;
    for (let o = 0; o < e.length - 1; o++) s += e[o][0] * e[o + 1][1] - e[o + 1][0] * e[o][1];
    return s / 2;
  }
  function qt(e) {
    let s = 0;
    for (let o = 0; o < e.length - 1; o++) s += ft(e[o], e[o + 1]);
    return s;
  }
  function he(e, s) {
    let o = Math.hypot(e, s);
    return o > 1e-12 ? [e / o, s / o] : [1, 0];
  }
  function Ue(e, s, o) {
    let l = o[0] - s[0],
      a = o[1] - s[1],
      u = l * l + a * a;
    if (u < 1e-18) return s;
    let p = Math.max(0, Math.min(1, ((e[0] - s[0]) * l + (e[1] - s[1]) * a) / u));
    return [s[0] + p * l, s[1] + p * a];
  }
  var we = (e, s, o) => ft(e, Ue(e, s, o));
  function je(e, s = 1e-4) {
    if (e.length < 3) return e.slice();
    let o = [e[0]];
    for (let l = 1; l < e.length - 1; l++) we(e[l], o[o.length - 1], e[l + 1]) > s && o.push(e[l]);
    return (o.push(e[e.length - 1]), o);
  }
  function Pi(e, s) {
    if (e.length < 3) return e.slice();
    let o = new Uint8Array(e.length);
    o[0] = o[e.length - 1] = 1;
    let l = [[0, e.length - 1]];
    for (; l.length; ) {
      let [a, u] = l.pop(),
        p = -1,
        d = s;
      for (let h = a + 1; h < u; h++) {
        let m = we(e[h], e[a], e[u]);
        m > d && ((d = m), (p = h));
      }
      p >= 0 && ((o[p] = 1), l.push([a, p], [p, u]));
    }
    return e.filter((a, u) => o[u]);
  }
  function xi(e, s) {
    let o = [],
      l = 0;
    for (let a = 0; a < e.length - 1; a++) {
      let u = e[a],
        p = e[a + 1],
        d = ft(u, p);
      if (!(d <= 0)) {
        if (l + d >= s) {
          let h = (s - l) / d;
          return (o.push([u[0] + (p[0] - u[0]) * h, u[1] + (p[1] - u[1]) * h]), o);
        }
        (o.push(p), (l += d));
      }
    }
    return o;
  }
  function gi(e, s) {
    let o = qt(e);
    if (o <= 0 || e.length < 2) return null;
    let l = o * s,
      a = 0;
    for (let d = 0; d < e.length - 1; d++) {
      let h = e[d],
        m = e[d + 1],
        v = ft(h, m);
      if (v > 0 && a + v >= l) {
        let P = (l - a) / v;
        return [[h[0] + (m[0] - h[0]) * P, h[1] + (m[1] - h[1]) * P], he(m[0] - h[0], m[1] - h[1])];
      }
      a += v;
    }
    let u = e[e.length - 2],
      p = e[e.length - 1];
    return [p, he(p[0] - u[0], p[1] - u[1])];
  }
  function mt(e, s = [1 / 0, 1 / 0, -1 / 0, -1 / 0]) {
    for (let o of e)
      (o[0] < s[0] && (s[0] = o[0]),
        o[1] < s[1] && (s[1] = o[1]),
        o[0] > s[2] && (s[2] = o[0]),
        o[1] > s[3] && (s[3] = o[1]));
    return s;
  }
  function se(e) {
    let s = 0,
      o = 0,
      l = 0;
    for (let a = 0; a < e.length - 1; a++) {
      let [u, p] = e[a],
        [d, h] = e[a + 1],
        m = u * h - d * p;
      ((s += m), (o += (u + d) * m), (l += (p + h) * m));
    }
    if (Math.abs(s) < 1e-12) {
      let a = mt(e);
      return [(a[0] + a[2]) / 2, (a[1] + a[3]) / 2];
    }
    return [o / (3 * s), l / (3 * s)];
  }
  function Yt(e, s) {
    let [o, l] = e,
      a = !1;
    for (let u = 0, p = s.length - 1; u < s.length; p = u++) {
      let d = s[u][0],
        h = s[u][1],
        m = s[p][0],
        v = s[p][1];
      h > l != v > l && o < ((m - d) * (l - h)) / (v - h) + d && (a = !a);
    }
    return a;
  }
  function jt(e) {
    let s = se(e);
    if (Yt(s, e)) return s;
    let o = mt(e);
    for (let l of [0.5, 0.37, 0.63, 0.25, 0.75, 0.13, 0.87]) {
      let a = o[1] + (o[3] - o[1]) * l + 1e-7,
        u = [];
      for (let d = 0; d < e.length - 1; d++) {
        let [h, m] = e[d],
          [v, P] = e[d + 1];
        m > a != P > a && u.push(h + ((a - m) * (v - h)) / (P - m));
      }
      u.sort((d, h) => d - h);
      let p = null;
      for (let d = 0; d + 1 < u.length; d += 2)
        (!p || u[d + 1] - u[d] > p[1] - p[0]) && (p = [u[d], u[d + 1]]);
      if (p) return [(p[0] + p[1]) / 2, a];
    }
    return e[0];
  }
  var be = (e, s, o) => (s[0] - e[0]) * (o[1] - e[1]) - (s[1] - e[1]) * (o[0] - e[0]),
    _e = (e, s, o) =>
      Math.min(e[0], s[0]) - 1e-12 <= o[0] &&
      o[0] <= Math.max(e[0], s[0]) + 1e-12 &&
      Math.min(e[1], s[1]) - 1e-12 <= o[1] &&
      o[1] <= Math.max(e[1], s[1]) + 1e-12;
  function Ts(e, s, o, l) {
    let a = be(o, l, e),
      u = be(o, l, s),
      p = be(e, s, o),
      d = be(e, s, l);
    return !!(
      (((a > 0 && u < 0) || (a < 0 && u > 0)) && ((p > 0 && d < 0) || (p < 0 && d > 0))) ||
      (Math.abs(a) < 1e-12 && _e(o, l, e)) ||
      (Math.abs(u) < 1e-12 && _e(o, l, s)) ||
      (Math.abs(p) < 1e-12 && _e(e, s, o)) ||
      (Math.abs(d) < 1e-12 && _e(e, s, l))
    );
  }
  function pe(e) {
    return { rings: e, bbs: e.map((s) => mt(s)) };
  }
  function de(e, s) {
    let o = !1;
    return (
      e.rings.forEach((l, a) => {
        let u = e.bbs[a];
        s[0] < u[0] || s[0] > u[2] || s[1] < u[1] || s[1] > u[3] || (Yt(s, l) && (o = !o));
      }),
      o
    );
  }
  function Ci(e, s) {
    if (!s || !s.rings.length) return !1;
    for (let l of e) if (de(s, l)) return !0;
    let o = mt(e);
    for (let l = 0; l < s.rings.length; l++) {
      let a = s.bbs[l];
      if (o[2] < a[0] || o[0] > a[2] || o[3] < a[1] || o[1] > a[3]) continue;
      let u = s.rings[l];
      for (let p = 0; p < e.length - 1; p++)
        for (let d = 0; d < u.length - 1; d++) if (Ts(e[p], e[p + 1], u[d], u[d + 1])) return !0;
    }
    return !1;
  }
  function Te(e, s) {
    let o = 1 / 0;
    for (let l = 0; l < s.length - 1; l++) o = Math.min(o, we(e, s[l], s[l + 1]));
    return o;
  }
  function Ls(e, s, o) {
    let l = s[0] - e[0],
      a = s[1] - e[1],
      u = o[0] - e[0],
      p = o[1] - e[1],
      d = 2 * (l * p - a * u);
    if (Math.abs(d) < 1e-12) return null;
    let h = l * l + a * a,
      m = u * u + p * p,
      v = (p * h - a * m) / d,
      P = (l * m - u * h) / d;
    return [[v + e[0], P + e[1]], Math.hypot(v, P)];
  }
  function Ms(e, s, o, l) {
    let a = Math.atan2(e[1] - o[1], e[0] - o[0]),
      u = Math.atan2(s[1] - o[1], s[0] - o[0]) - a;
    if (l) for (; u <= 1e-12; ) u += 2 * Math.PI;
    else for (; u >= -1e-12; ) u -= 2 * Math.PI;
    return [a, u];
  }
  function Et(e, s, o, l, a = 0.01, u = 6) {
    let [p, d] = Ms(e, s, o, l),
      h = ft(e, o),
      m = (u * Math.PI) / 180;
    h > a && (m = Math.min(m, 2 * Math.acos(Math.max(-1, 1 - a / h))));
    let v = Math.max(2, Math.ceil(Math.abs(d) / Math.max(m, 0.001))),
      P = [];
    for (let x = 1; x < v; x++)
      P.push([o[0] + h * Math.cos(p + (d * x) / v), o[1] + h * Math.sin(p + (d * x) / v)]);
    return (P.push([s[0], s[1]]), P);
  }
  function Ht(e, s, o, l, a = 2, u = 14) {
    let p = e(s),
      d = [p],
      h = (m, v, P, x, I) => {
        let _ = (m + P) / 2,
          T = e(_);
        I < u && (I < a || we(T, v, x) > l) ? (h(m, v, _, T, I + 1), h(_, T, P, x, I + 1)) : d.push(x);
      };
    return (h(s, p, o, e(o), 0), d);
  }
  function ze(e, s, o, l, a) {
    let u = (s + o) >> 1,
      p = Ls(e[s], e[u], e[o]);
    if (!p) return null;
    let [[d, h], m] = p;
    if (m > a || m < 0.05) return null;
    let v = (e[u][0] - e[s][0]) * (e[o][1] - e[s][1]) - (e[u][1] - e[s][1]) * (e[o][0] - e[s][0]) > 0,
      P = 0,
      x = Math.PI / 6;
    for (let I = s; I < o; I++) {
      let _ = e[I],
        T = e[I + 1];
      if (
        Math.abs(Math.hypot(T[0] - d, T[1] - h) - m) > l ||
        Math.abs(Math.hypot((_[0] + T[0]) / 2 - d, (_[1] + T[1]) / 2 - h) - m) > l
      )
        return null;
      let E = Math.atan2(T[1] - h, T[0] - d) - Math.atan2(_[1] - h, _[0] - d);
      if (
        (E > Math.PI ? (E -= 2 * Math.PI) : E < -Math.PI && (E += 2 * Math.PI),
        E === 0 || E > 0 !== v || Math.abs(E) > x)
      )
        return null;
      P += Math.abs(E);
    }
    return P > (300 * Math.PI) / 180 ? null : [[d, h], m, v];
  }
  function Ss(e, s, o, l, a, u) {
    let p = s + u;
    if (p >= o) return null;
    let d = ze(e, s, p, l, a);
    if (!d) return null;
    let h = p,
      m = null,
      v = 1;
    for (;;) {
      let P = Math.min(o - 1, h + v);
      if (P === h) break;
      let x = ze(e, s, P, l, a);
      if (x) ((h = P), (d = x), (v *= 2));
      else {
        m = P;
        break;
      }
    }
    if (m !== null) {
      let P = h,
        x = m;
      for (; x - P > 1; ) {
        let I = (P + x) >> 1,
          _ = ze(e, s, I, l, a);
        _ ? ((P = I), (d = _)) : (x = I);
      }
      h = P;
    }
    return [h, d];
  }
  function He(e, s = 0.02, o = 5e3, l = 3) {
    let a = [],
      u = e.length,
      p = 0;
    for (; p < u - 1; ) {
      let d = Ss(e, p, u, s, o, l);
      if (d) {
        let [h, [m, , v]] = d;
        (a.push(["A", e[h], m, v]), (p = h));
      } else (a.push(["L", e[p + 1]]), (p += 1));
    }
    return a;
  }
  function Le(e, s) {
    let o = e.length;
    if (!o) return [];
    let l = Math.max(s, 1e-6),
      a = new Map(),
      u = (m) => `${Math.floor(m[0] / l)},${Math.floor(m[1] / l)}`;
    e.forEach((m, v) => {
      for (let [P, x] of [
        [0, m[0]],
        [1, m[m.length - 1]],
      ]) {
        let I = u(x);
        (a.has(I) || a.set(I, []), a.get(I).push([v, P]));
      }
    });
    let p = new Uint8Array(o),
      d = (m) => {
        let v = Math.floor(m[0] / l),
          P = Math.floor(m[1] / l),
          x = null,
          I = s;
        for (let _ = -1; _ <= 1; _++)
          for (let T = -1; T <= 1; T++)
            for (let [E, M] of a.get(`${v + _},${P + T}`) || []) {
              if (p[E]) continue;
              let b = M === 0 ? e[E][0] : e[E][e[E].length - 1],
                A = ft(m, b);
              A <= I && ((x = [E, M]), (I = A));
            }
        return x;
      },
      h = [];
    for (let m = 0; m < o; m++) {
      if (p[m]) continue;
      p[m] = 1;
      let v = e[m].slice(),
        P = v.length > 2 && ft(v[0], v[v.length - 1]) <= s;
      if (!P)
        for (let x = d(v[v.length - 1]); x; x = d(v[v.length - 1])) {
          let [I, _] = x;
          p[I] = 1;
          let T = _ === 0 ? e[I] : e[I].slice().reverse();
          if ((v.push(...T.slice(1)), v.length > 2 && ft(v[0], v[v.length - 1]) <= s)) {
            P = !0;
            break;
          }
        }
      if (!P)
        for (let x = d(v[0]); x; x = d(v[0])) {
          let [I, _] = x;
          if (
            ((p[I] = 1),
            (v = (_ === 1 ? e[I] : e[I].slice().reverse()).slice(0, -1).concat(v)),
            v.length > 2 && ft(v[0], v[v.length - 1]) <= s)
          ) {
            P = !0;
            break;
          }
        }
      (P && (v[v.length - 1] = [v[0][0], v[0][1]]), h.push([v, P]));
    }
    return h;
  }
  var As = 0.01,
    Ii = { 1: 25.4, 2: 304.8, 4: 1, 5: 10, 6: 1e3, 8: 254e-7, 9: 0.0254, 10: 914.4, 13: 0.001, 14: 100 },
    Es = {
      1: "pouces",
      2: "pieds",
      4: "millim\xE8tres",
      5: "centim\xE8tres",
      6: "m\xE8tres",
      9: "mils",
      10: "yards",
      13: "microns",
      14: "d\xE9cim\xE8tres",
    },
    Xs = new Set(["TEXT", "MTEXT", "ATTRIB", "ATTDEF"]);
  function Je(e, s, o) {
    let l = [];
    for (; s < e.length; ) {
      let [a, u] = e[s];
      if (a === 0 && o.has(u)) break;
      if (a !== 0) {
        s++;
        continue;
      }
      let p = { type: u, g: [] };
      for (s++; s < e.length && e[s][0] !== 0; ) p.g.push(e[s++]);
      if (u === "POLYLINE") {
        for (p.vertices = []; s < e.length && e[s][0] === 0 && e[s][1] === "VERTEX"; ) {
          let d = { g: [] };
          for (s++; s < e.length && e[s][0] !== 0; ) d.g.push(e[s++]);
          p.vertices.push(d);
        }
        if (s < e.length && e[s][1] === "SEQEND") for (s++; s < e.length && e[s][0] !== 0; ) s++;
      }
      l.push(p);
    }
    return [l, s];
  }
  var nt = (e, s, o = 0) => {
      for (let [l, a] of e.g) if (l === s) return parseFloat(a);
      return o;
    },
    Se = (e, s, o = "") => {
      for (let [l, a] of e.g) if (l === s) return a.trim();
      return o;
    },
    re = (e, s) => e.g.filter(([o]) => o === s).map(([, o]) => parseFloat(o));
  function Os(e, s, o) {
    let l = s[0] - e[0],
      a = s[1] - e[1],
      u = Math.hypot(l, a),
      p = u / (2 * Math.tan((4 * Math.atan(o)) / 2));
    return [(e[0] + s[0]) / 2 - (a / u) * p, (e[1] + s[1]) / 2 + (l / u) * p];
  }
  function bi(e, s, o) {
    if (e.length < 2) return [];
    let l = [[e[0][0], e[0][1]]],
      a = e.length;
    for (let u = 0; u < (s ? a : a - 1); u++) {
      let [p, d, h] = e[u],
        [m, v] = e[(u + 1) % a];
      Math.abs(h) < 1e-12 || Math.hypot(m - p, v - d) < 1e-12
        ? l.push([m, v])
        : l.push(...Et([p, d], [m, v], Os([p, d], [m, v], h), h > 0, o));
    }
    return l;
  }
  function Ns(e, s, o, l) {
    let a = o.length - 1,
      u = a;
    for (let d = e; d <= a; d++)
      if (l >= s[d] && l < s[d + 1]) {
        u = d;
        break;
      }
    let p = [];
    for (let d = 0; d <= e; d++) p.push(o[d + u - e].slice());
    for (let d = 1; d <= e; d++)
      for (let h = e; h >= d; h--) {
        let m = h + u - e,
          v = s[m + e - d + 1] - s[m],
          P = v === 0 ? 0 : (l - s[m]) / v;
        for (let x = 0; x < 3; x++) p[h][x] = (1 - P) * p[h - 1][x] + P * p[h][x];
      }
    return [p[e][0] / p[e][2], p[e][1] / p[e][2]];
  }
  function Ys(e, s) {
    let o = nt(e, 71, 3),
      l = re(e, 40),
      a = re(e, 41),
      u = re(e, 10),
      p = re(e, 20),
      d = u.map((v, P) => {
        let x = a.length === u.length ? a[P] : 1;
        return [v * x, p[P] * x, x];
      });
    if (d.length > o && l.length === d.length + o + 1) {
      let v = [];
      for (let P = o; P < d.length; P++) {
        if (l[P + 1] - l[P] <= 0) continue;
        let x = Ht((I) => Ns(o, l, d, Math.min(I, l[P + 1] - 1e-12)), l[P], l[P + 1], s);
        v.push(...(v.length ? x.slice(1) : x));
      }
      if (v.length) return v;
    }
    let h = re(e, 11),
      m = re(e, 21);
    return h.length > 1 ? h.map((v, P) => [v, m[P]]) : u.map((v, P) => [v, p[P]]);
  }
  function _i(e, s = "dessin.dxf", o = "auto") {
    if (e.startsWith("AutoCAD Binary DXF"))
      throw new Error("DXF binaire non pris en charge : enregistrez-le en DXF ASCII.");
    let l = e.split(/\r\n|\r|\n/),
      a = [];
    for (let b = 0; b + 1 < l.length; b += 2) {
      let A = parseInt(l[b].trim(), 10);
      if (Number.isNaN(A)) throw new Error("Fichier DXF illisible (structure inattendue).");
      a.push([A, A === 0 || A === 2 || A === 9 ? l[b + 1].trim() : l[b + 1]]);
    }
    let u = 0,
      p = [],
      d = {},
      h = {},
      m = 0;
    for (; m < a.length; )
      if (a[m][0] === 0 && a[m][1] === "SECTION" && a[m + 1]) {
        let b = a[m + 1][1];
        if (((m += 2), b === "HEADER"))
          for (; m < a.length && !(a[m][0] === 0 && a[m][1] === "ENDSEC"); )
            (a[m][0] === 9 && a[m][1] === "$INSUNITS" && a[m + 1] && (u = parseInt(a[m + 1][1], 10) || 0),
              m++);
        else if (b === "TABLES") {
          let [A, Y] = Je(a, m, new Set(["ENDSEC"]));
          m = Y;
          for (let X of A)
            X.type === "LAYER" && (d[Se(X, 2)] = { off: nt(X, 62, 7) < 0, frozen: (nt(X, 70, 0) & 1) === 1 });
        } else if (b === "BLOCKS") {
          let [A, Y] = Je(a, m, new Set(["ENDSEC"]));
          m = Y;
          let X = null;
          for (let S of A)
            S.type === "BLOCK"
              ? ((X = { base: [nt(S, 10), nt(S, 20)], ents: [] }), (h[Se(S, 2)] = X))
              : S.type === "ENDBLK"
                ? (X = null)
                : X && X.ents.push(S);
        } else if (b === "ENTITIES") {
          let [A, Y] = Je(a, m, new Set(["ENDSEC"]));
          ((p = A), (m = Y));
        }
      } else m++;
    let v = new Nt(s, "dxf"),
      P = 1;
    o === "mm"
      ? v.info.push("Unit\xE9s impos\xE9es : millim\xE8tres.")
      : o === "inch"
        ? ((P = 25.4), v.info.push("Unit\xE9s impos\xE9es : pouces."))
        : Ii[u]
          ? ((P = Ii[u]), v.info.push(`Unit\xE9s du DXF : ${Es[u]}.`))
          : v.warnings.push(
              "Le DXF ne pr\xE9cise pas ses unit\xE9s : millim\xE8tres suppos\xE9s. Changez l\u2019unit\xE9 dans D\xE9coupe > Lecture si la taille est fausse.",
            );
    let x = As / P,
      I = {},
      _ = 0,
      T = (b, A, Y, X) => {
        let S = Se(b, 8, "0");
        Y && S === "0" && (S = Y);
        let F = nt(b, 230, 1) < 0,
          G = (B) => (F ? [-B[0], B[1]] : B),
          J = (B, U) =>
            v.add(
              B.map((R) => {
                let $ = A(R);
                return [$[0] * P, $[1] * P];
              }),
              U,
              S,
            );
        switch (b.type) {
          case "LINE":
            J(
              [
                [nt(b, 10), nt(b, 20)],
                [nt(b, 11), nt(b, 21)],
              ],
              !1,
            );
            break;
          case "CIRCLE": {
            let B = [nt(b, 10), nt(b, 20)],
              U = nt(b, 40),
              R = [B[0] + U, B[1]];
            U > 0 && J([R, ...Et(R, R, B, !0, x)].map(G), !0);
            break;
          }
          case "ARC": {
            let B = [nt(b, 10), nt(b, 20)],
              U = nt(b, 40),
              R = (nt(b, 50) * Math.PI) / 180,
              $ = (nt(b, 51) * Math.PI) / 180,
              V = [B[0] + U * Math.cos(R), B[1] + U * Math.sin(R)],
              st = [B[0] + U * Math.cos($), B[1] + U * Math.sin($)];
            U > 0 && J([V, ...Et(V, st, B, !0, x)].map(G), !1);
            break;
          }
          case "LWPOLYLINE": {
            let B = [];
            for (let [R, $] of b.g)
              R === 10
                ? B.push([parseFloat($), 0, 0])
                : R === 20 && B.length
                  ? (B[B.length - 1][1] = parseFloat($))
                  : R === 42 && B.length && (B[B.length - 1][2] = parseFloat($));
            let U = (nt(b, 70, 0) & 1) === 1;
            J(bi(B, U, x).map(G), U);
            break;
          }
          case "POLYLINE": {
            let B = nt(b, 70, 0);
            if (B & 80) {
              I.MAILLAGE = (I.MAILLAGE || 0) + 1;
              break;
            }
            let U = (b.vertices || [])
                .filter(($) => !(nt($, 70, 0) & 16))
                .map(($) => [nt($, 10), nt($, 20), B & 8 ? 0 : nt($, 42, 0)]),
              R = bi(U, (B & 1) === 1, x);
            J(B & 8 ? R : R.map(G), (B & 1) === 1);
            break;
          }
          case "ELLIPSE": {
            let B = [nt(b, 10), nt(b, 20)],
              U = [nt(b, 11), nt(b, 21)],
              R = nt(b, 40, 1),
              $ = nt(b, 230, 1) < 0 ? -1 : 1,
              V = [-U[1] * R * $, U[0] * R * $],
              st = nt(b, 41, 0),
              tt = nt(b, 42, 2 * Math.PI);
            for (; tt <= st; ) tt += 2 * Math.PI;
            let et = Math.abs(tt - st - 2 * Math.PI) < 1e-6;
            J(
              Ht(
                (lt) => [
                  B[0] + U[0] * Math.cos(lt) + V[0] * Math.sin(lt),
                  B[1] + U[1] * Math.cos(lt) + V[1] * Math.sin(lt),
                ],
                st,
                tt,
                x,
                4,
              ),
              et,
            );
            break;
          }
          case "SPLINE": {
            let B = Ys(b, x);
            J(B, (nt(b, 70, 0) & 1) === 1);
            break;
          }
          case "POINT": {
            let B = A([nt(b, 10), nt(b, 20)]);
            (v.points.push([B[0] * P, B[1] * P, S]), v.count(S));
            break;
          }
          case "INSERT": {
            let B = h[Se(b, 2)];
            if (!B || X > 10) break;
            let U = [nt(b, 10), nt(b, 20)],
              R = nt(b, 41, 1),
              $ = nt(b, 42, 1),
              V = (nt(b, 50, 0) * Math.PI) / 180,
              st = Math.cos(V),
              tt = Math.sin(V),
              et = (z) => {
                let lt = (z[0] - B.base[0]) * R,
                  Tt = (z[1] - B.base[1]) * $;
                return A(G([U[0] + st * lt - tt * Tt, U[1] + tt * lt + st * Tt]));
              };
            for (let z of B.ents) T(z, et, S, X + 1);
            break;
          }
          default:
            Xs.has(b.type) ? _++ : (I[b.type] = (I[b.type] || 0) + 1);
        }
      };
    for (let b of p) T(b, (A) => A, null, 0);
    let E = [];
    for (let [b, A] of Object.entries(v.layers)) {
      let Y = d[b];
      Y && (Y.off || Y.frozen) && ((A.visible = !1), E.push(b));
    }
    (E.length &&
      v.info.push(`Calques masqu\xE9s ou gel\xE9s dans le DXF d\xE9sactiv\xE9s : ${E.join(", ")}.`),
      _ &&
        v.warnings.push(
          `${_} texte(s) ignor\xE9(s) : convertissez-les en contours dans votre logiciel de DAO pour les d\xE9couper.`,
        ));
    let M = Object.entries(I);
    return (
      M.length && v.info.push(`Entit\xE9s ignor\xE9es : ${M.map(([b, A]) => `${b} \xD7${A}`).join(", ")}.`),
      v
    );
  }
  var Ds = 0.01,
    Bs = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'" },
    ks = (e) =>
      e.replace(/&(#x?[0-9a-fA-F]+|\w+);/g, (s, o) =>
        o[0] === "#"
          ? String.fromCodePoint(o[1] === "x" ? parseInt(o.slice(2), 16) : parseInt(o.slice(1), 10))
          : (Bs[o] ?? s),
      );
  function Fs(e) {
    let s = { name: "#root", attrs: {}, children: [] },
      o = [s],
      l =
        /<!--[\s\S]*?-->|<!\[CDATA\[[\s\S]*?\]\]>|<\?[\s\S]*?\?>|<!DOCTYPE[^[>]*(?:\[[\s\S]*?\])?\s*>|<(\/?)([\w:.-]+)((?:[^>"']|"[^"]*"|'[^']*')*?)(\/?)>/g,
      a;
    for (; (a = l.exec(e)); ) {
      if (!a[2]) continue;
      let [, u, p, d, h] = a;
      if (u) {
        for (; o.length > 1 && o.pop().name !== p; );
        continue;
      }
      let m = {},
        v = /([\w:.-]+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g,
        P;
      for (; (P = v.exec(d)); ) m[P[1]] = ks(P[2] ?? P[3] ?? "");
      let x = { name: p, attrs: m, children: [] };
      (o[o.length - 1].children.push(x), h || o.push(x));
    }
    return s;
  }
  var Jt = (e, s) => [
      e[0] * s[0] + e[2] * s[1],
      e[1] * s[0] + e[3] * s[1],
      e[0] * s[2] + e[2] * s[3],
      e[1] * s[2] + e[3] * s[3],
      e[0] * s[4] + e[2] * s[5] + e[4],
      e[1] * s[4] + e[3] * s[5] + e[5],
    ],
    Rs = (e, s) => [e[0] * s[0] + e[2] * s[1] + e[4], e[1] * s[0] + e[3] * s[1] + e[5]],
    wi = [1, 0, 0, 1, 0, 0];
  function Ti(e) {
    let s = wi;
    if (!e) return s;
    let o = /(matrix|translate|scale|rotate|skewX|skewY)\s*\(([^)]*)\)/g,
      l;
    for (; (l = o.exec(e)); ) {
      let a = l[2]
          .trim()
          .split(/[\s,]+/)
          .filter(Boolean)
          .map(Number),
        u = wi;
      if (l[1] === "matrix" && a.length === 6) u = a;
      else if (l[1] === "translate") u = [1, 0, 0, 1, a[0] || 0, a[1] || 0];
      else if (l[1] === "scale") u = [a[0] ?? 1, 0, 0, a[1] ?? a[0] ?? 1, 0, 0];
      else if (l[1] === "rotate") {
        let p = ((a[0] || 0) * Math.PI) / 180,
          d = Math.cos(p),
          h = Math.sin(p);
        ((u = [d, h, -h, d, 0, 0]),
          a.length >= 3 && (u = Jt(Jt([1, 0, 0, 1, a[1], a[2]], u), [1, 0, 0, 1, -a[1], -a[2]])));
      } else
        l[1] === "skewX"
          ? (u = [1, 0, Math.tan(((a[0] || 0) * Math.PI) / 180), 1, 0, 0])
          : l[1] === "skewY" && (u = [1, Math.tan(((a[0] || 0) * Math.PI) / 180), 0, 1, 0, 0]);
      s = Jt(s, u);
    }
    return s;
  }
  function Li(e, s) {
    if (!e) return null;
    let o = /^\s*([-+]?(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?)\s*([a-z%]*)\s*$/i.exec(e);
    if (!o) return null;
    let l = parseFloat(o[1]),
      a = { mm: 1, cm: 10, in: 25.4, pt: 25.4 / 72, pc: 25.4 / 6, px: 25.4 / s, "": 25.4 / s }[
        o[2].toLowerCase()
      ];
    return a === void 0 ? null : l * a;
  }
  function $s(e) {
    let s = [],
      o = e.length,
      l = /[-+]?(?:\d+\.?\d*|\.\d+)(?:[eE][-+]?\d+)?/y,
      a = 0,
      u = null,
      p = () => {
        for (
          ;
          a < o &&
          (e[a] === " " ||
            e[a] === "," ||
            e[a] ===
              `
` ||
            e[a] === "\r" ||
            e[a] === "	");
        )
          a++;
      },
      d = () => {
        (p(), (l.lastIndex = a));
        let v = l.exec(e);
        return v ? ((a += v[0].length), parseFloat(v[0])) : null;
      },
      h = () => {
        p();
        let v = e[a];
        return v === "0" || v === "1" ? (a++, v === "1" ? 1 : 0) : null;
      },
      m = { M: 2, L: 2, H: 1, V: 1, C: 6, S: 4, Q: 4, T: 2, A: 7, Z: 0 };
    for (; p(), !(a >= o); ) {
      if (/[MmLlHhVvCcSsQqTtAaZz]/.test(e[a])) u = e[a++];
      else if (!u) break;
      let v = u.toUpperCase();
      if (v === "Z") {
        (s.push([u, []]), (u = null));
        continue;
      }
      let P = [];
      for (let x = 0; x < m[v]; x++) {
        let I = v === "A" && (x === 3 || x === 4) ? h() : d();
        if (I === null) break;
        P.push(I);
      }
      if (P.length !== m[v]) break;
      (s.push([u, P]), u === "M" ? (u = "L") : u === "m" && (u = "l"));
    }
    return s;
  }
  function Gs(e, s, o, l, a, u, p, d, h) {
    if (((o = Math.abs(o)), (l = Math.abs(l)), o < 1e-12 || l < 1e-12)) return null;
    let m = (a * Math.PI) / 180,
      v = Math.cos(m),
      P = Math.sin(m),
      x = (e - d) / 2,
      I = (s - h) / 2,
      _ = v * x + P * I,
      T = -P * x + v * I,
      E = (_ * _) / (o * o) + (T * T) / (l * l);
    E > 1 && ((o *= Math.sqrt(E)), (l *= Math.sqrt(E)));
    let M = o * o * l * l - o * o * T * T - l * l * _ * _,
      b = o * o * T * T + l * l * _ * _,
      A = Math.sqrt(Math.max(0, M / b));
    u === p && (A = -A);
    let Y = (A * o * T) / l,
      X = (-A * l * _) / o,
      S = v * Y - P * X + (e + d) / 2,
      F = P * Y + v * X + (s + h) / 2,
      G = (U, R, $, V) => Math.atan2(U * V - R * $, U * $ + R * V),
      J = G(1, 0, (_ - Y) / o, (T - X) / l),
      B = G((_ - Y) / o, (T - X) / l, (-_ - Y) / o, (-T - X) / l);
    return (
      !p && B > 0 ? (B -= 2 * Math.PI) : p && B < 0 && (B += 2 * Math.PI),
      (U) => [
        S + o * Math.cos(U) * v - l * Math.sin(U) * P,
        F + o * Math.cos(U) * P + l * Math.sin(U) * v,
        J,
        B,
      ]
    );
  }
  function Ws(e, s) {
    let o = [],
      l = [0, 0],
      a = [0, 0],
      u = null,
      p = null,
      d = null,
      h = "",
      m = (x) => {
        (u && u.length > 1 && o.push([u, x]), (u = null));
      },
      v = () => {
        u || (u = [l.slice()]);
      },
      P = (x, I, _, T) => (E) => {
        let M = 1 - E;
        return [
          M * M * M * x[0] + 3 * M * M * E * I[0] + 3 * M * E * E * _[0] + E * E * E * T[0],
          M * M * M * x[1] + 3 * M * M * E * I[1] + 3 * M * E * E * _[1] + E * E * E * T[1],
        ];
      };
    for (let [x, I] of e) {
      let _ = x === x.toLowerCase() && x !== "z",
        T = x.toUpperCase(),
        E = (M, b) => (_ ? [l[0] + M, l[1] + b] : [M, b]);
      if (T === "M") (m(!1), (l = E(I[0], I[1])), (a = l.slice()), (u = [l.slice()]));
      else if (T === "L") (v(), (l = E(I[0], I[1])), u.push(l.slice()));
      else if (T === "H") (v(), (l = [_ ? l[0] + I[0] : I[0], l[1]]), u.push(l.slice()));
      else if (T === "V") (v(), (l = [l[0], _ ? l[1] + I[0] : I[0]]), u.push(l.slice()));
      else if (T === "C" || T === "S") {
        v();
        let M, b, A;
        (T === "C"
          ? ((M = E(I[0], I[1])), (b = E(I[2], I[3])), (A = E(I[4], I[5])))
          : ((M = p && "CS".includes(h) ? [2 * l[0] - p[0], 2 * l[1] - p[1]] : l.slice()),
            (b = E(I[0], I[1])),
            (A = E(I[2], I[3]))),
          u.push(...Ht(P(l, M, b, A), 0, 1, s).slice(1)),
          (p = b),
          (l = A));
      } else if (T === "Q" || T === "T") {
        v();
        let M, b;
        T === "Q"
          ? ((M = E(I[0], I[1])), (b = E(I[2], I[3])))
          : ((M = d && "QT".includes(h) ? [2 * l[0] - d[0], 2 * l[1] - d[1]] : l.slice()),
            (b = E(I[0], I[1])));
        let A = [l[0] + (2 / 3) * (M[0] - l[0]), l[1] + (2 / 3) * (M[1] - l[1])],
          Y = [b[0] + (2 / 3) * (M[0] - b[0]), b[1] + (2 / 3) * (M[1] - b[1])];
        (u.push(...Ht(P(l, A, Y, b), 0, 1, s).slice(1)), (d = M), (l = b));
      } else if (T === "A") {
        v();
        let M = E(I[5], I[6]),
          b = Gs(l[0], l[1], I[0], I[1], I[2], I[3], I[4], M[0], M[1]);
        if (b) {
          let [, , A, Y] = b(0),
            X = Ht((S) => b(S).slice(0, 2), A, A + Y, s, 3);
          ((X[X.length - 1] = M.slice()), u.push(...X.slice(1)));
        } else u.push(M.slice());
        l = M;
      } else T === "Z" && (u && (u.push(a.slice()), m(!0)), (l = a.slice()));
      h = T;
    }
    return (m(!1), o);
  }
  function qs(e) {
    let s = e.attrs,
      o = (l, a = 0) => (s[l] !== void 0 ? parseFloat(s[l]) || 0 : a);
    switch (e.name) {
      case "path":
        return $s(s.d || "");
      case "rect": {
        let l = o("x"),
          a = o("y"),
          u = o("width"),
          p = o("height");
        if (u <= 0 || p <= 0) return [];
        let d = s.rx !== void 0 ? o("rx") : o("ry"),
          h = s.ry !== void 0 ? o("ry") : d;
        return (
          (d = Math.min(Math.max(d, 0), u / 2)),
          (h = Math.min(Math.max(h, 0), p / 2)),
          d <= 0 || h <= 0
            ? [
                ["M", [l, a]],
                ["H", [l + u]],
                ["V", [a + p]],
                ["H", [l]],
                ["Z", []],
              ]
            : [
                ["M", [l + d, a]],
                ["H", [l + u - d]],
                ["A", [d, h, 0, 0, 1, l + u, a + h]],
                ["V", [a + p - h]],
                ["A", [d, h, 0, 0, 1, l + u - d, a + p]],
                ["H", [l + d]],
                ["A", [d, h, 0, 0, 1, l, a + p - h]],
                ["V", [a + h]],
                ["A", [d, h, 0, 0, 1, l + d, a]],
                ["Z", []],
              ]
        );
      }
      case "circle":
      case "ellipse": {
        let l = o("cx"),
          a = o("cy"),
          u = e.name === "circle" ? o("r") : o("rx"),
          p = e.name === "circle" ? o("r") : o("ry");
        return u <= 0 || p <= 0
          ? []
          : [
              ["M", [l + u, a]],
              ["A", [u, p, 0, 1, 1, l - u, a]],
              ["A", [u, p, 0, 1, 1, l + u, a]],
              ["Z", []],
            ];
      }
      case "line":
        return [
          ["M", [o("x1"), o("y1")]],
          ["L", [o("x2"), o("y2")]],
        ];
      case "polyline":
      case "polygon": {
        let l = (s.points || "")
            .trim()
            .split(/[\s,]+/)
            .filter(Boolean)
            .map(Number),
          a = [];
        for (let u = 0; u + 1 < l.length; u += 2) a.push([u ? "L" : "M", [l[u], l[u + 1]]]);
        return (e.name === "polygon" && a.length && a.push(["Z", []]), a);
      }
      default:
        return null;
    }
  }
  var Zs = new Set([
      "defs",
      "symbol",
      "clipPath",
      "mask",
      "pattern",
      "marker",
      "metadata",
      "title",
      "desc",
      "style",
      "script",
      "linearGradient",
      "radialGradient",
      "filter",
      "sodipodi:namedview",
      "image",
      "foreignObject",
    ]),
    zs = (e) => {
      let s = (e.attrs.style || "").replace(/\s/g, "");
      return (
        e.attrs.display === "none" ||
        /display:none/.test(s) ||
        e.attrs.visibility === "hidden" ||
        /visibility:hidden/.test(s)
      );
    };
  function Mi(e, s = "dessin.svg", o = "auto") {
    let l = o === "px72" ? 72 : 96,
      a = Fs(e),
      u = (b) => (b.name === "svg" ? b : b.children.map(u).find(Boolean)),
      p = u(a);
    if (!p) throw new Error("Ce fichier n\u2019est pas un SVG valide.");
    let d = {},
      h = (b) => {
        (b.attrs.id && (d[b.attrs.id] = b), b.children.forEach(h));
      };
    h(p);
    let m = (p.attrs.viewBox || "")
        .trim()
        .split(/[\s,]+/)
        .filter(Boolean)
        .map(Number),
      v = Li(p.attrs.width, l),
      P = Li(p.attrs.height, l),
      x = 25.4 / l,
      I;
    if (m.length === 4 && m[2] > 0 && m[3] > 0) {
      let b = v ? v / m[2] : P ? P / m[3] : x,
        A = P ? P / m[3] : b,
        Y = Math.min(b, A),
        X = v ? (v - m[2] * Y) / 2 : 0,
        S = P ? (P - m[3] * Y) / 2 : 0;
      I = [Y, 0, 0, Y, X - m[0] * Y, S - m[1] * Y];
    } else I = [x, 0, 0, x, 0, 0];
    I = Jt([1, 0, 0, -1, 0, 0], I);
    let _ = new Nt(s, "svg");
    o === "px72" && _.info.push("SVG lu \xE0 72 ppp (Illustrator).");
    let T = 0,
      E = (b, A, Y) => {
        let X = qs(b);
        if (!X || !X.length) return;
        let S = Math.sqrt(Math.abs(A[0] * A[3] - A[1] * A[2])) || 1;
        for (let [F, G] of Ws(X, Ds / S))
          _.add(
            F.map((J) => Rs(A, J)),
            G,
            Y,
          );
      },
      M = (b, A, Y, X) => {
        for (let S of b.children) {
          if (Zs.has(S.name) || zs(S)) continue;
          let F = Jt(A, Ti(S.attrs.transform));
          if (S.name === "g" || S.name === "a" || S.name === "switch" || S.name === "svg") {
            let G =
              (S.attrs["inkscape:groupmode"] === "layer" && (S.attrs["inkscape:label"] || S.attrs.id)) || Y;
            M(S, F, G, X);
          } else if (S.name === "use") {
            let G = d[(S.attrs.href || S.attrs["xlink:href"] || "").replace(/^#/, "")];
            if (!G || X > 8) continue;
            let J = Jt(F, [1, 0, 0, 1, parseFloat(S.attrs.x) || 0, parseFloat(S.attrs.y) || 0]);
            G.name === "symbol" || G.name === "g"
              ? M(G, Jt(J, Ti(G.attrs.transform)), Y, X + 1)
              : M({ children: [G] }, J, Y, X + 1);
          } else S.name === "text" ? T++ : E(S, F, Y);
        }
      };
    return (
      M(p, I, "SVG", 0),
      T &&
        _.warnings.push(
          `${T} texte(s) ignor\xE9(s) : dans Inkscape, s\xE9lectionnez-les puis Chemin > Objet en chemin.`,
        ),
      _.paths.length ||
        _.warnings.push("Aucun trac\xE9 trouv\xE9 dans le SVG (les calques masqu\xE9s sont ignor\xE9s)."),
      _
    );
  }
  var bt = ws(Si(), 1),
    oe = 1e3,
    Us = (e) =>
      e.length > 1 && e[0][0] === e[e.length - 1][0] && e[0][1] === e[e.length - 1][1] ? e.slice(0, -1) : e,
    Ee = (e) => Us(e).map((s) => ({ X: Math.round(s[0] * oe), Y: Math.round(s[1] * oe) })),
    Ve = (e) => {
      let s = e.map((o) => [o.X / oe, o.Y / oe]);
      return (s.length && s.push([s[0][0], s[0][1]]), s);
    },
    js = {
      union: bt.default.ClipType.ctUnion,
      difference: bt.default.ClipType.ctDifference,
      intersection: bt.default.ClipType.ctIntersection,
      xor: bt.default.ClipType.ctXor,
    };
  function Dt(e, s, o = 0.005, l = !1) {
    let a = e.map(Ee).filter((d) => d.length >= 3);
    if (!a.length) return [];
    let u = new bt.default.ClipperOffset(l ? 4 : 2, Math.max(1, o * oe));
    u.AddPaths(
      a,
      l ? bt.default.JoinType.jtMiter : bt.default.JoinType.jtRound,
      bt.default.EndType.etClosedPolygon,
    );
    let p = new bt.default.Paths();
    return (u.Execute(p, s * oe), p.filter((d) => d.length >= 3).map(Ve));
  }
  function Vt(e, s, o = [], l = !1) {
    let a = new bt.default.Clipper(),
      u = s.map(Ee).filter((m) => m.length >= 3),
      p = o.map(Ee).filter((m) => m.length >= 3);
    if (!u.length) return [];
    (a.AddPaths(u, bt.default.PolyType.ptSubject, !0),
      p.length && a.AddPaths(p, bt.default.PolyType.ptClip, !0));
    let d = new bt.default.Paths(),
      h = l ? bt.default.PolyFillType.pftEvenOdd : bt.default.PolyFillType.pftNonZero;
    return (a.Execute(js[e], d, h, h), d.filter((m) => m.length >= 3).map(Ve));
  }
  function Xe(e) {
    let s = Ee(e);
    return s.length < 3
      ? []
      : bt.default.Clipper.SimplifyPolygon(s, bt.default.PolyFillType.pftNonZero)
          .filter((o) => o.length >= 3)
          .map(Ve);
  }
  var Hs = ["auto", "ignore", "outside", "inside", "online", "spot"],
    Oe = {
      outside: "Ext\xE9rieur",
      inside: "Int\xE9rieur",
      hole: "Trou rond",
      online: "Sur la ligne",
      spot: "Pointage",
    },
    Js = new Set(["outside", "inside", "hole", "online"]),
    me = (e) => (Math.round(e * 10) / 10).toString().replace(".", ",");
  function Ai(e, s) {
    let o = {
        pts: e,
        layer: s,
        area: Math.abs(It(e)),
        bb: mt(e),
        depth: 0,
        parent: -1,
        children: [],
        kind: "",
        circle: !1,
        center: se(e),
        size: 0,
      },
      l = e.slice(0, -1);
    if (l.length >= 8) {
      let a = l.map((h) => ft(h, o.center)),
        u = a.reduce((h, m) => h + m, 0) / a.length,
        p = Math.max(0.03, 0.005 * u),
        d = a.every((h) => Math.abs(h - u) <= p);
      for (let h = 0; d && h < l.length; h++) {
        let m = l[h],
          v = l[(h + 1) % l.length];
        Math.abs(ft([(m[0] + v[0]) / 2, (m[1] + v[1]) / 2], o.center) - u) > p && (d = !1);
      }
      d && ((o.circle = !0), (o.size = 2 * u));
    }
    return (o.circle || (o.size = Math.max(o.bb[2] - o.bb[0], o.bb[3] - o.bb[1])), o);
  }
  function Vs(e, s, o) {
    let l = Math.abs(It(e));
    if (l < 1e-4) return (o.degenerate++, []);
    let a = Xe(e),
      u = a.reduce((d, h) => d + Math.abs(It(h)), 0);
    if (a.length === 1 && Math.abs(u - l) <= 1e-5 * l + 0.01) return [Ai(e, s)];
    let p = a.filter((d) => It(d) > 1e-4);
    return p.length ? (o.fixed++, p.map((d) => Ai(d, s))) : (o.degenerate++, []);
  }
  function Ks(e, s, o, l) {
    let a = { cnt: l, keepout: null, pierce: null };
    if (e.length) {
      let u = Dt(e, s > 0.03 ? s - 0.02 : -0.01, 0.02);
      u.length && (a.keepout = pe(u));
      let p = Dt(e, s + Math.max(0.5 * o, 0.25) - 0.01, 0.02);
      p.length && (a.pierce = pe(p));
    }
    return (
      (a.ok = (u, p) =>
        a.keepout && u.length >= 2 && Ci(u, a.keepout) ? !1 : !(p && a.pierce && de(a.pierce, p))),
      a
    );
  }
  function Qs(e, s, o, l = 4) {
    let a = e.length - 1,
      u = [];
    for (let m = 0; m < a; m++) u.push([ft(e[m], e[m + 1]), m]);
    u.sort((m, v) => v[0] - m[0]);
    let p = (m) => [(e[m][0] + e[m + 1][0]) / 2, (e[m][1] + e[m + 1][1]) / 2],
      d;
    if (s === "nearest") {
      let m = null;
      for (let v = 0; v < a; v++) {
        let P = Ue(o, e[v], e[v + 1]),
          x = ft(o, P);
        (!m || x < m[0]) && (m = [x, v, P]);
      }
      d = [m[1], m[2]];
    } else d = [u[0][1], p(u[0][1])];
    let h = [d];
    for (let [, m] of u) {
      if (h.length >= l) break;
      m !== d[0] && h.push([m, p(m)]);
    }
    return h;
  }
  var Ei = (e, s, o) => {
    let l = e.slice(0, -1);
    return ne([o, ...l.slice(s + 1), ...l.slice(0, s + 1), o]);
  };
  function tr(e, s) {
    return !["line", "arc"].includes(e) || s <= 0
      ? []
      : [
          [e, s],
          [e, s * 0.5],
          [e, s * 0.25],
          [e === "arc" ? "line" : "arc", s * 0.25],
        ];
  }
  function er([e, s], o, l, a, u, p) {
    if (e === "center") return ft(p, o) < 1e-6 ? null : [p, [["L", o]], [p, o]];
    if (e === "line") {
      let m = [o[0] + a[0] * s, o[1] + a[1] * s];
      return [m, [["L", o]], [m, o]];
    }
    let d = [o[0] + a[0] * s, o[1] + a[1] * s],
      h = [d[0] - l[0] * s, d[1] - l[1] * s];
    return [h, [["A", o, d, u]], [h, ...Et(h, o, d, u)]];
  }
  function ir(e, s, o, l, a, u) {
    if (e === "line") {
      let h = [o[0] + a[0] * s, o[1] + a[1] * s];
      return [[["L", h]], [o, h]];
    }
    let p = [o[0] + a[0] * s, o[1] + a[1] * s],
      d = [p[0] + l[0] * s, p[1] + l[1] * s];
    return [[["A", d, p, u]], [o, ...Et(o, d, p, u)]];
  }
  function nr(e, s, o, l, a) {
    let u = e.kind,
      p = ne(s);
    if (p.length < 4) return null;
    ft(p[0], p[p.length - 1]) > 1e-9 ? p.push(p[0].slice()) : (p[p.length - 1] = p[0].slice());
    let d = It(p) > 0;
    if (u !== "online") {
      let G = (u === "inside" || u === "hole") != (o.direction === "reverse");
      d !== G && (p.reverse(), (d = G));
    }
    let h = (u === "inside" || u === "hole") === d,
      m = Qs(p, o.start_mode, l),
      v = u === "hole" && o.hole_lead === "center",
      P = u === "online" ? [] : v ? [["center", 0]] : tr(o.lead_in_type, +o.lead_in_len),
      x = null;
    t: for (let G = 0; G < P.length; G++)
      for (let J of m) {
        let B = Ei(p, J[0], J[1]);
        if (B.length < 3) continue;
        let U = he(B[1][0] - B[0][0], B[1][1] - B[0][1]),
          R = h ? [-U[1], U[0]] : [U[1], -U[0]],
          $ = er(P[G], B[0], U, R, h, e.center);
        if ($ && a.ok($[2], P[G][0] === "center" ? null : $[0])) {
          ((x = [B, $]), G > 0 && a.cnt.leadShort++);
          break t;
        }
      }
    let I, _;
    x ? ([I, _] = x) : ((I = Ei(p, m[0][0], m[0][1])), P.length && a.cnt.noLead++, (_ = [I[0], [], [I[0]]]));
    let [T, E, M] = _,
      b = I.slice(),
      A = +(u === "hole" ? o.hole_overcut : o.overcut);
    A > 0 && u !== "online" && (b = b.concat(xi(I, A)));
    let Y = [],
      X = [],
      S = +o.lead_out_len;
    if (u !== "online" && !v && ["line", "arc"].includes(o.lead_out_type) && S > 0) {
      let G = b[b.length - 1],
        J = b[b.length - 2],
        B = he(G[0] - J[0], G[1] - J[1]),
        U = h ? [-B[1], B[0]] : [B[1], -B[0]];
      for (let R of [1, 0.5, 0.25]) {
        let [$, V] = ir(o.lead_out_type, S * R, G, B, U, h);
        if (a.ok(V)) {
          ((Y = $), (X = V));
          break;
        }
      }
    }
    let F = M.slice(0, -1).concat(b, X.slice(1));
    return {
      kind: u,
      layer: e.layer,
      pierce: T,
      moves: E.concat(He(je(b)), Y),
      preview: F,
      feedPct: u === "hole" ? +o.hole_speed_pct : 100,
      cutLen: qt(F),
      end: F[F.length - 1],
      size: e.size,
    };
  }
  function sr(e, s) {
    let o = ne(e);
    return {
      kind: "online",
      layer: s,
      pierce: o[0],
      moves: He(je(o)),
      preview: o,
      feedPct: 100,
      cutLen: qt(o),
      end: o[o.length - 1],
      size: 0,
    };
  }
  var rr = (e, s) => Math.hypot(Math.max(s[0] - e[0], 0, e[0] - s[2]), Math.max(s[1] - e[1], 0, e[1] - s[3]));
  function Xi(e, s) {
    let o = { toolpaths: [], source: [], warnings: [], info: [], shift: [0, 0], stats: {} },
      l = { open: 0, fixed: 0, degenerate: 0, dup: 0, spotHoles: 0, narrow: 0, noLead: 0, leadShort: 0 },
      a = Math.max(0, +s.kerf || 0),
      u = a / 2,
      p = s.layers || {},
      d = (O) => {
        let j = e.layers[O] || {},
          Q = p[O] || {};
        return (Q.enabled !== void 0 ? Q.enabled : j.visible !== !1)
          ? Hs.includes(Q.op)
            ? Q.op
            : "auto"
          : "ignore";
      },
      h = new Map();
    for (let O of e.paths) {
      if (d(O.layer) === "ignore") {
        o.source.push({ pts: O.pts, closed: O.closed, state: "ignored" });
        continue;
      }
      (h.has(O.layer) || h.set(O.layer, []), h.get(O.layer).push(O));
    }
    let m = [],
      v = [],
      P = [],
      x = Math.max(+s.join_tol || 0.05, 1e-6);
    for (let [O, j] of h) {
      let Q = d(O),
        pt = j.filter((it) => it.closed).map((it) => it.pts),
        gt = [];
      for (let [it, xt] of Le(
        j.filter((Ct) => !Ct.closed).map((Ct) => Ct.pts),
        x,
      ))
        (xt && it.length >= 4 ? pt : gt).push(it);
      for (let it of pt) o.source.push({ pts: it, closed: !0, state: "cut" });
      for (let it of gt) o.source.push({ pts: it, closed: !1, state: "cut" });
      if (Q === "spot") {
        for (let it of pt) {
          let xt = se(it);
          P.push([xt[0], xt[1], O]);
        }
        continue;
      }
      for (let it of pt) m.push(...Vs(it, O, l));
      for (let it of gt) qt(it) > 1e-6 && (v.push([it, O]), Q !== "online" && l.open++);
    }
    for (let [O, j, Q] of e.points) d(Q) !== "ignore" && P.push([O, j, Q]);
    let I = new Set();
    m = m.filter((O) => {
      let j = [O.area.toFixed(2), O.center[0].toFixed(2), O.center[1].toFixed(2), qt(O.pts).toFixed(1)].join(
        "|",
      );
      return I.has(j) ? (l.dup++, !1) : (I.add(j), !0);
    });
    for (let O of m) O.ip = jt(O.pts);
    (m.forEach((O) => {
      let j = 1 / 0;
      m.forEach((Q, pt) => {
        Q === O ||
          Q.area <= O.area ||
          O.ip[0] < Q.bb[0] ||
          O.ip[0] > Q.bb[2] ||
          O.ip[1] < Q.bb[1] ||
          O.ip[1] > Q.bb[3] ||
          (Yt(O.ip, Q.pts) && (O.depth++, Q.area < j && ((j = Q.area), (O.parent = pt))));
      });
    }),
      m.forEach((O, j) => {
        O.parent >= 0 && m[O.parent].children.push(j);
      }));
    let _ = +s.spot_max_dia,
      T = +s.hole_max_dia;
    for (let O of m) {
      let j = d(O.layer);
      ((O.kind = ["outside", "inside", "online"].includes(j) ? j : O.depth % 2 === 0 ? "outside" : "inside"),
        O.kind === "inside" &&
          (s.spot_enable && O.size <= _ + 1e-9
            ? ((O.kind = "spot"), P.push([O.center[0], O.center[1], O.layer]), l.spotHoles++)
            : s.hole_enable && O.circle && O.size <= T + 1e-9 && (O.kind = "hole")));
    }
    let E = [];
    for (let O of m) {
      if (O.kind !== "outside") continue;
      let j = O.children.filter((Q) => m[Q].kind === "inside" || m[Q].kind === "hole").map((Q) => m[Q].pts);
      E.push(...(j.length ? Vt("difference", [O.pts], j) : [O.pts]));
    }
    let M = Ks(E.length ? Vt("union", E) : [], u, a, l),
      b = new Map(),
      A = [],
      Y = Math.max(0.3, 0.2 * a);
    m.forEach((O, j) => {
      if (!Js.has(O.kind)) return;
      if (O.kind === "online") {
        b.set(j, [O.pts]);
        return;
      }
      if (u <= 1e-9) {
        b.set(j, [O.pts]);
        return;
      }
      let Q = Dt([O.pts], O.kind === "outside" ? u : -u, 0.005),
        pt = Q.filter((it) => It(it) > 0),
        gt = pt.filter((it) => {
          let xt = mt(it);
          return Math.max(xt[2] - xt[0], xt[3] - xt[1]) >= Y;
        });
      if (!gt.length) {
        A.push(O.size);
        return;
      }
      ((gt.length > 1 || Q.length > pt.length) && l.narrow++, b.set(j, gt));
    });
    let X = [];
    for (let O of o.source) if (O.state === "cut") for (let j of O.pts) X.push(j);
    for (let [O, j] of P) X.push([O, j]);
    let S = X.length ? mt(X) : null,
      F = S ? [S[0], S[1]] : [0, 0],
      G = new Set(),
      J = [];
    for (let O of P) {
      let j = `${O[0].toFixed(2)},${O[1].toFixed(2)}`;
      G.has(j) || (G.add(j), J.push(O));
    }
    for (; J.length; ) {
      let O = 0,
        j = 1 / 0;
      J.forEach((it, xt) => {
        let Ct = (it[0] - F[0]) ** 2 + (it[1] - F[1]) ** 2;
        Ct < j && ((j = Ct), (O = xt));
      });
      let [Q, pt, gt] = J.splice(O, 1)[0];
      (o.toolpaths.push({
        kind: "spot",
        layer: gt,
        pierce: [Q, pt],
        moves: [],
        preview: [],
        feedPct: 100,
        cutLen: 0,
        end: [Q, pt],
        size: 0,
      }),
        (F = [Q, pt]));
    }
    let B = v.slice();
    for (; B.length; ) {
      let O = [0, 1 / 0, !1];
      B.forEach(([gt], it) => {
        let xt = ft(F, gt[0]),
          Ct = ft(F, gt[gt.length - 1]);
        (xt < O[1] && (O = [it, xt, !1]), Ct < O[1] && (O = [it, Ct, !0]));
      });
      let [j, Q] = B.splice(O[0], 1)[0],
        pt = sr(O[2] ? j.slice().reverse() : j, Q);
      (o.toolpaths.push(pt), (F = pt.end));
    }
    let U = new Set(b.keys()),
      R = new Map(),
      $ = new Map();
    for (let O of U) {
      let j = m[O].parent;
      for (; j >= 0 && !U.has(j); ) j = m[j].parent;
      (R.set(O, j), $.set(O, []));
    }
    for (let [O, j] of R) j >= 0 && $.get(j).push(O);
    let V = [...U]
      .filter((O) => R.get(O) < 0)
      .sort((O, j) => O - j)
      .map((O) => {
        let j = [],
          Q = [O];
        for (; Q.length; ) {
          let pt = Q.pop();
          (j.push(pt), Q.push(...$.get(pt)));
        }
        return [O, j];
      });
    for (; V.length; ) {
      let O = 0,
        j = 1 / 0;
      V.forEach(([it], xt) => {
        let Ct = rr(F, m[it].bb);
        Ct < j && ((j = Ct), (O = xt));
      });
      let [, Q] = V.splice(O, 1)[0],
        pt = new Map(Q.map((it) => [it, $.get(it).length])),
        gt = new Set(Q.filter((it) => pt.get(it) === 0));
      for (; gt.size; ) {
        let it = -1,
          xt = 1 / 0;
        for (let Qt of gt) {
          let Wt = ft(F, m[Qt].center);
          Wt < xt && ((xt = Wt), (it = Qt));
        }
        gt.delete(it);
        let Ct = R.get(it);
        pt.has(Ct) && (pt.set(Ct, pt.get(Ct) - 1), pt.get(Ct) === 0 && gt.add(Ct));
        for (let Qt of b.get(it)) {
          let Wt = nr(m[it], Qt, s, F, M);
          Wt && (o.toolpaths.push(Wt), (F = Wt.end));
        }
      }
    }
    let st = [];
    for (let O of o.toolpaths) for (let j of O.preview.length ? O.preview : [O.pierce]) st.push(j);
    let tt = st.length ? mt(st) : null,
      et = [0, 0];
    (s.origin === "toolpath" && tt
      ? (et = [tt[0], tt[1]])
      : s.origin === "drawing" && S && (et = [S[0], S[1]]),
      (o.shift = [(+s.origin_x || 0) - et[0], (+s.origin_y || 0) - et[1]]),
      tt &&
        (tt[0] + o.shift[0] < -1e-6 || tt[1] + o.shift[1] < -1e-6) &&
        o.warnings.push(
          `Des trajectoires passent en coordonn\xE9es n\xE9gatives (X min ${me(tt[0] + o.shift[0])}, Y min ${me(tt[1] + o.shift[1])} mm) : v\xE9rifiez l\u2019origine.`,
        ));
    let z = Math.max(+s.feed, 1),
      lt = [-o.shift[0], -o.shift[1]],
      Tt = {},
      Pt = 0,
      Ot = lt,
      $t = 0,
      Lt = 0,
      Gt = 0;
    for (let O of o.toolpaths)
      ((Tt[O.kind] = (Tt[O.kind] || 0) + 1),
        (Pt += ft(Ot, O.pierce)),
        (Ot = O.end),
        O.kind !== "spot" &&
          (Gt++, (Lt += O.cutLen), ($t += O.cutLen / ((z * Math.max(O.feedPct, 1)) / 100))));
    o.toolpaths.length && (Pt += ft(Ot, lt));
    let Ut =
      $t * 60 +
      (Pt / Math.max(+s.rapid_feed, 1)) * 60 +
      Gt * (+s.pierce_delay + 1) +
      (Tt.spot || 0) * (+s.spot_time + 1);
    o.stats = {
      kinds: Tt,
      pierces: Gt,
      spots: Tt.spot || 0,
      cutLen: Lt,
      rapidLen: Pt,
      time: Ut,
      size: S ? [S[2] - S[0], S[3] - S[1]] : [0, 0],
      bounds: tt ? [tt[0] + o.shift[0], tt[1] + o.shift[1], tt[2] + o.shift[0], tt[3] + o.shift[1]] : null,
    };
    let Xt = o.warnings,
      At = o.info;
    return (
      l.open &&
        Xt.push(
          `${l.open} contour(s) ouvert(s) d\xE9coup\xE9(s) sur la ligne, sans compensation de saign\xE9e. S\u2019ils devraient \xEAtre ferm\xE9s, augmentez la tol\xE9rance de jonction.`,
        ),
      l.fixed &&
        Xt.push(
          `${l.fixed} contour(s) qui se recoupent ont \xE9t\xE9 corrig\xE9s : v\xE9rifiez l\u2019aper\xE7u.`,
        ),
      A.length &&
        Xt.push(
          `${A.length} contour(s) int\xE9rieur(s) plus petit(s) que la saign\xE9e non d\xE9coup\xE9(s) (\xD8 ${A.sort(
            (O, j) => O - j,
          )
            .slice(0, 8)
            .map(me)
            .join(", ")} mm).`,
        ),
      l.narrow &&
        Xt.push(
          `${l.narrow} contour(s) avec des d\xE9tails plus \xE9troits que la saign\xE9e : d\xE9tails supprim\xE9s.`,
        ),
      l.noLead &&
        Xt.push(
          `${l.noLead} contour(s) sans amorce d\u2019entr\xE9e faute de place : le per\xE7age se fait sur le contour.`,
        ),
      l.leadShort && At.push(`${l.leadShort} amorce(s) raccourcie(s) ou chang\xE9e(s) faute de place.`),
      l.dup && At.push(`${l.dup} contour(s) en double ignor\xE9(s).`),
      l.degenerate && At.push(`${l.degenerate} contour(s) sans surface ignor\xE9(s).`),
      l.spotHoles &&
        At.push(`${l.spotHoles} petit(s) trou(s) (\xD8 \u2264 ${me(_)} mm) remplac\xE9(s) par un pointage.`),
      Tt.hole &&
        At.push(`${Tt.hole} trou(s) rond(s) d\xE9coup\xE9(s) \xE0 ${me(+s.hole_speed_pct)} % de la vitesse.`),
      o.toolpaths.length || Xt.push("Aucune trajectoire : v\xE9rifiez les calques activ\xE9s."),
      o
    );
  }
  var or = {
      header: `G21 (millimetres)
G90 (coordonnees absolues)
G17
G94`,
      footer: `M5
G0 X0 Y0
M30`,
      torch_on: "M3 S1000",
      torch_off: "M5",
      pierce_dwell: "G4 P{s}",
      spot_dwell: !0,
      arcs: !0,
      decimals: 3,
      comments: !0,
    },
    lr = (e) =>
      String(e)
        .replace(/[–—]/g, "-")
        .replace(/×/g, "x")
        .replace(/Ø/g, "D")
        .replace(/≤/g, "<=")
        .normalize("NFKD")
        .replace(/[^\x20-\x7e]/g, "")
        .replace(/\(/g, "[")
        .replace(/\)/g, "]"),
    ar = (e, s) => (e || "").replace(/\{(\w+)\}/g, (o, l) => (l in s ? s[l] : o));
  function Oi(e, s, o = {}, l = "") {
    let a = { ...or, ...o },
      u = Math.max(1, Math.min(6, +a.decimals || 3)),
      p = 10 ** u,
      d = (b) => Math.round(b * p) / p,
      h = (b) => {
        let A = d(b).toFixed(u).replace(/0+$/, "").replace(/\.$/, "");
        return ((A === "-0" || A === "") && (A = "0"), A);
      },
      [m, v] = e.shift,
      P = +s.feed,
      x = [],
      I = (b) => {
        a.comments && x.push(`(${lr(b)})`);
      },
      _ = (b, A = {}) => {
        for (let Y of ar(b, A).split(`
`))
          Y.trim() && x.push(Y.trim());
      },
      T = (b) => {
        a.pierce_dwell && b > 0 && _(a.pierce_dwell, { s: h(b), ms: String(Math.round(b * 1e3)) });
      };
    (I(`ArcLibre Mobile - ${l} - ${new Date().toISOString().slice(0, 16).replace("T", " ")}`),
      I(`Saignee ${h(+s.kerf)} mm, vitesse ${h(P)} mm/min, percage ${h(+s.pierce_delay)} s`),
      _(a.header));
    let E = null,
      M = null;
    return (
      e.toolpaths.forEach((b, A) => {
        let Y = d(b.pierce[0] + m),
          X = d(b.pierce[1] + v);
        if (b.kind === "spot") {
          (I(`${A + 1} - Pointage`),
            x.push(`G0 X${h(Y)} Y${h(X)}`),
            _(a.torch_on),
            a.spot_dwell && T(+s.spot_time),
            _(a.torch_off),
            (M = [Y, X]));
          return;
        }
        (I(`${A + 1} - ${Oe[b.kind] || b.kind}${b.kind === "hole" ? ` D${h(b.size)}` : ""}`),
          x.push(`G0 X${h(Y)} Y${h(X)}`),
          _(a.torch_on),
          T(+s.pierce_delay));
        let S = (P * b.feedPct) / 100;
        M = [Y, X];
        for (let F of b.moves) {
          let [G, J] = fr(F, M, m, v, d, h, a.arcs);
          M = J;
          for (let B of G) (E !== S && ((B += ` F${h(S)}`), (E = S)), x.push(B));
        }
        _(a.torch_off);
      }),
      _(a.footer),
      x.join(`
`) +
        `
`
    );
  }
  function fr(e, s, o, l, a, u, p) {
    let d = a(e[1][0] + o),
      h = a(e[1][1] + l);
    if (d === s[0] && h === s[1]) return [[], s];
    if (e[0] === "L") return [[`G1 X${u(d)} Y${u(h)}`], [d, h]];
    let m = e[2][0] + o,
      v = e[2][1] + l,
      P = e[3],
      [x, I] = s,
      _ = Math.hypot(d - x, h - I);
    if (_ < 0.02) return [[`G1 X${u(d)} Y${u(h)}`], [d, h]];
    if (!p) {
      let Y = [],
        X = s;
      for (let S of Et([x, I], [d, h], [m, v], P)) {
        let F = [a(S[0]), a(S[1])];
        (F[0] !== X[0] || F[1] !== X[1]) && (Y.push(`G1 X${u(F[0])} Y${u(F[1])}`), (X = F));
      }
      return [Y, X];
    }
    let T = (x + d) / 2,
      E = (I + h) / 2,
      M = -(h - I) / _,
      b = (d - x) / _,
      A = (m - T) * M + (v - E) * b;
    return [[`${P ? "G3" : "G2"} X${u(d)} Y${u(h)} I${u(T + M * A - x)} J${u(E + b * A - I)}`], [d, h]];
  }
  function ur(e, s) {
    let o = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
    for (let P of e) mt(P, o);
    let l = Math.ceil((o[2] - o[0]) / s) + 2,
      a = new Float64Array(l).fill(1 / 0),
      u = new Float64Array(l).fill(-1 / 0),
      p = (P, x) => {
        for (let I of [-0.5, 0, 0.5]) {
          let _ = Math.min(l - 1, Math.max(0, Math.floor(P / s + I)));
          (x < a[_] && (a[_] = x), x > u[_] && (u[_] = x));
        }
      },
      d = Math.max(s * 0.4, 0.001);
    for (let P of e)
      for (let x = 0; x < P.length - 1; x++) {
        let I = P[x][0] - o[0],
          _ = P[x][1] - o[1],
          T = P[x + 1][0] - o[0],
          E = P[x + 1][1] - o[1],
          M = Math.max(1, Math.ceil(Math.hypot(T - I, E - _) / d));
        for (let b = 0; b < M; b++) p(I + ((T - I) * b) / M, _ + ((E - _) * b) / M);
      }
    let h = [],
      m = [],
      v = [];
    for (let P = 0; P < l; P++)
      Number.isFinite(a[P]) &&
        (h.push(P), m.push(Math.floor(a[P] / s - 0.5)), v.push(Math.ceil(u[P] / s + 0.5)));
    return {
      w: l,
      nz: h,
      bn: m,
      tn: v,
      h: Math.max(...v),
      last: h[h.length - 1] + 1,
      minx: o[0],
      miny: o[1],
    };
  }
  function hr(e, s, o, l) {
    let a = new Float64Array(l),
      u = new Map(),
      p = 0;
    for (let h of e) {
      let m = s[h],
        v = null;
      for (let T of m.rots) {
        let E = o.get(`${m.key}:${T}`);
        if (E.w > l) continue;
        let M = E.nz,
          b = E.bn,
          A = M.length;
        for (let Y = 0; Y + E.w <= l; Y++) {
          let X = -1 / 0;
          for (let G = 0; G < A; G++) {
            let J = a[Y + M[G]] - b[G];
            J > X && (X = J);
          }
          let S = X + E.h;
          if (v && S > v[0]) continue;
          let F = 0;
          for (let G = 0; G < A; G++) F += X + b[G] - a[Y + M[G]];
          (!v || S < v[0] || (S === v[0] && (F < v[1] || (F === v[1] && Y < v[2])))) && (v = [S, F, Y, T, X]);
        }
      }
      if (!v) return null;
      let [, , P, x, I] = v,
        _ = o.get(`${m.key}:${x}`);
      (_.nz.forEach((T, E) => {
        a[P + T] = I + _.tn[E];
      }),
        (p = Math.max(p, P + _.last)),
        u.set(m.id, [x, P, I]));
    }
    let d = 0;
    for (let h of a) h > d && (d = h);
    return [u, p, d];
  }
  function Ni(e, s, o = "rect", l = 0, a = 0) {
    if (!e.length) return { place: new Map(), info: { width: 0, height: 0, fits: !0, ratio: 0 } };
    let u = Math.max(+s || 0, 0) / 2,
      p = new Map(),
      d = new Map(),
      h = [];
    for (let R of e) {
      for (let [$, V] of R.geoms) {
        let st = `${R.key}:${$}`;
        p.has(st) || (d.set(st, V), p.set(st, u > 0 ? Dt(V, u, 0.05) : V));
      }
      h.push({ id: R.id, key: R.key, rots: [...R.geoms.keys()] });
    }
    let m = (R) => {
        let $ = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
        for (let V of p.get(R)) mt(V, $);
        return [$[2] - $[0], $[3] - $[1]];
      },
      v = (R) =>
        R.reduce(($, V) => {
          let st = 0;
          for (let tt = 0; tt < V.length - 1; tt++) st += V[tt][0] * V[tt + 1][1] - V[tt + 1][0] * V[tt][1];
          return $ + st / 2;
        }, 0),
      P = h.reduce((R, $) => R + v(p.get(`${$.key}:${$.rots[0]}`)), 0),
      x = Math.sqrt(Math.max(P, 1e-6) / 0.75),
      I = (R) => Math.min(...R.rots.map(($) => m(`${R.key}:${$}`)[0])),
      _ = Math.max(...h.map(I)),
      T = Math.max(
        _,
        Math.min(
          h.reduce((R, $) => R + I($), 0),
          4 * x,
        ),
      );
    l > 0 && (T = Math.max(_, Math.min(T, l)));
    let E = new Set();
    for (let R = 0; R < 12; R++) E.add(_ * (T / _) ** (R / 11));
    for (let R of [0.75, 0.85, 1, 1.15, 1.3, 1.5]) E.add(x * R);
    l > 0 && E.add(l);
    let M = [...E].filter((R) => R >= _ * 0.9999 && R <= T * 1.0001).sort((R, $) => R - $);
    M.length || M.push(_);
    let b = h.map((R, $) => $),
      A = [];
    for (let R of [
      ($) => -v(p.get(`${h[$].key}:${h[$].rots[0]}`)),
      ($) => -Math.max(...h[$].rots.flatMap((V) => m(`${h[$].key}:${V}`))),
      ($) => -m(`${h[$].key}:${h[$].rots[0]}`)[1],
    ]) {
      let $ = b.slice().sort((V, st) => R(V) - R(st));
      A.some((V) => V.join() === $.join()) || A.push($);
    }
    let Y = (R, $) => (l > 0 && R > l + 1e-6) || (a > 0 && $ > a + 1e-6),
      X = (R, $, V) => {
        let st = new Map(),
          tt = [];
        for (let Pt of h) {
          let [Ot, $t, Lt] = R.get(Pt.id),
            Gt = $.get(`${Pt.key}:${Ot}`),
            Ut = $t * V - Gt.minx,
            Xt = Lt * V - Gt.miny;
          st.set(Pt.id, [Ot, Ut, Xt]);
          let At = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
          for (let O of d.get(`${Pt.key}:${Ot}`)) mt(O, At);
          tt.push([At[0] + Ut, At[1] + Xt, At[2] + Ut, At[3] + Xt]);
        }
        let et = Math.min(...tt.map((Pt) => Pt[0])),
          z = Math.min(...tt.map((Pt) => Pt[1])),
          lt = Math.max(...tt.map((Pt) => Pt[2])),
          Tt = Math.max(...tt.map((Pt) => Pt[3]));
        for (let [Pt, [Ot, $t, Lt]] of st) st.set(Pt, [Ot, $t - et, Lt - z]);
        return { place: st, w: lt - et, h: Tt - z };
      },
      S = (R, $, V) => {
        let st = new Map([...p].map(([et, z]) => [et, ur(z, R)])),
          tt = [];
        for (let et of V)
          for (let z of $) {
            let lt = hr(et, h, st, Math.ceil(z / R) + 2);
            lt && tt.push({ ...X(lt[0], st, R), order: et, wmm: z });
          }
        return tt;
      },
      F = (R) => {
        let $ = R.filter((z) => !Y(z.w, z.h)),
          V = $.length ? $ : R;
        if (o === "square")
          return V.reduce((z, lt) =>
            Math.max(lt.w, lt.h) < Math.max(z.w, z.h) - 1e-9 ||
            (Math.abs(Math.max(lt.w, lt.h) - Math.max(z.w, z.h)) < 1e-9 && lt.w * lt.h < z.w * z.h)
              ? lt
              : z,
          );
        let st = (z) => Math.max(z.w, z.h) / Math.max(Math.min(z.w, z.h), 1e-9),
          tt = V.filter((z) => st(z) <= 2.5);
        tt.length || (tt = [V.reduce((z, lt) => (st(lt) < st(z) ? lt : z))]);
        let et = Math.min(...tt.map((z) => z.w * z.h));
        return tt
          .filter((z) => z.w * z.h <= et * 1.03)
          .reduce((z, lt) => (Math.max(lt.w, lt.h) < Math.max(z.w, z.h) ? lt : z));
      },
      G = Math.min(Math.max(x / 160, 0.3), 25),
      J = S(G, M, A);
    if (!J.length) return { place: new Map(), info: { width: 0, height: 0, fits: !1, ratio: 0 } };
    let B = F(J);
    x / (G / 2) <= 700 &&
      ((J = J.concat(S(G / 2, [...new Set([0.95, 1, 1.05].map((R) => Math.max(_, B.wmm * R)))], [B.order]))),
      (B = F(J)));
    let U = h.reduce((R, $) => R + v(d.get(`${$.key}:${B.place.get($.id)[0]}`)), 0);
    return {
      place: B.place,
      info: { width: B.w, height: B.h, fits: !Y(B.w, B.h), ratio: B.w * B.h > 0 ? U / (B.w * B.h) : 0 },
    };
  }
  function Ye(e, s = {}) {
    return (o) => {
      let l = s[o] || {};
      return (l.enabled !== void 0 ? l.enabled : (e[o] || {}).visible !== !1) ? l.op !== "ignore" : !1;
    };
  }
  var Yi = (e) => {
      let s = Math.round((((e % 360) + 360) % 360) * 1e9) / 1e9;
      return (
        { 0: [1, 0], 90: [0, 1], 180: [-1, 0], 270: [0, -1] }[s] || [
          Math.cos((s * Math.PI) / 180),
          Math.sin((s * Math.PI) / 180),
        ]
      );
    },
    Di = (e) => {
      let s = Xe(e);
      return s.length ? s.filter((o) => It(o) > 1e-6) : [];
    },
    ye = (e) => {
      let s = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
      for (let o of e) mt(o, s);
      return s;
    },
    Bi = (e) => e.reduce((s, o) => s + It(o), 0),
    Kt = class {
      constructor(s, o, l, a = {}) {
        (Object.assign(this, {
          id: s,
          name: o,
          drawing: l,
          sx: a.sx ?? 1,
          sy: a.sy ?? 1,
          source: a.source || "file",
          cache: new Map(),
        }),
          this.frame());
      }
      frame() {
        let s = [];
        for (let l of this.drawing.paths) for (let a of l.pts) s.push(a);
        for (let l of this.drawing.points) s.push(l);
        let o = s.length ? mt(s) : [0, 0, 0, 0];
        ((this.m0 = [o[0], o[1]]), (this.c0 = [(o[0] + o[2]) / 2, (o[1] + o[3]) / 2]));
      }
      key(s) {
        return Object.keys(this.drawing.layers).filter(s).sort().join("|");
      }
      cached(s, o) {
        return (this.cache.has(s) || this.cache.set(s, o()), this.cache.get(s));
      }
      bbox(s) {
        return this.cached(`bb:${this.key(s)}`, () => {
          let o = [];
          for (let l of this.drawing.paths) if (s(l.layer)) for (let a of l.pts) o.push(a);
          for (let l of this.drawing.points) s(l[2]) && o.push(l);
          return o.length ? mt(o) : null;
        });
      }
      rings(s, o) {
        return this.cached(`rings:${this.key(s)}:${o}`, () => {
          let l = [],
            a = new Map();
          for (let u of this.drawing.paths)
            s(u.layer) &&
              (u.closed && u.pts.length >= 4
                ? l.push(u.pts)
                : u.closed || (a.has(u.layer) || a.set(u.layer, []), a.get(u.layer).push(u.pts)));
          for (let u of a.values())
            for (let [p, d] of Le(u, Math.max(o, 1e-6))) d && p.length >= 4 && l.push(p);
          return l;
        });
      }
      shapes(s, o) {
        return this.cached(`shapes:${this.key(s)}:${o}`, () => {
          let l = this.rings(s, o).flatMap(Di);
          if (l.length) return { fill: Vt("union", l), material: Vt("xor", l, [], !0) };
          let a = this.bbox(s);
          if (!a) return { fill: [], material: [] };
          let u = [
            [a[0], a[1]],
            [Math.max(a[2], a[0] + 0.1), a[1]],
            [Math.max(a[2], a[0] + 0.1), Math.max(a[3], a[1] + 0.1)],
            [a[0], Math.max(a[3], a[1] + 0.1)],
            [a[0], a[1]],
          ];
          return { fill: [u], material: [u] };
        });
      }
    },
    Ne = class e {
      constructor() {
        ((this.defs = new Map()), (this.instances = []), (this.next = 1), (this.joinTol = 0.05));
      }
      newId() {
        return this.next++;
      }
      empty() {
        return !this.instances.length;
      }
      get(s) {
        return this.instances.find((o) => o.id === s) || null;
      }
      copies(s) {
        return this.instances.filter((o) => o.defId === s).length;
      }
      names() {
        return [...this.defs.values()].map((s) => s.name).join(" + ");
      }
      layers() {
        let s = {};
        for (let o of this.defs.values())
          for (let [l, a] of Object.entries(o.drawing.layers)) {
            let u = s[l] || (s[l] = { count: 0, visible: !1 });
            ((u.count += a.count), (u.visible = u.visible || a.visible !== !1));
          }
        return s;
      }
      matrix(s) {
        let o = this.defs.get(s.defId),
          [l, a] = Yi(s.rot),
          u = l * o.sx,
          p = -a * o.sy,
          d = a * o.sx,
          h = l * o.sy;
        return [
          u,
          p,
          d,
          h,
          -(u * o.c0[0] + p * o.c0[1]) + o.sx * (o.c0[0] - o.m0[0]) + s.dx,
          -(d * o.c0[0] + h * o.c0[1]) + o.sy * (o.c0[1] - o.m0[1]) + s.dy,
        ];
      }
      static tf(s, o) {
        return o.map((l) =>
          l.map((a) => [s[0] * a[0] + s[1] * a[1] + s[4], s[2] * a[0] + s[3] * a[1] + s[5]]),
        );
      }
      place(s, o) {
        return e.tf(this.matrix(s), this.defs.get(s.defId).shapes(o, this.joinTol).fill);
      }
      material(s, o) {
        return e.tf(this.matrix(s), this.defs.get(s.defId).shapes(o, this.joinTol).material);
      }
      addDrawing(s, o, l, a, u = {}) {
        let p = new Kt(this.newId(), o, s, u);
        this.defs.set(p.id, p);
        let d = { id: this.newId(), defId: p.id, dx: p.m0[0], dy: p.m0[1], rot: 0 };
        return (this.instances.length && Object.assign(d, this.freeSpot(d, l, a)), this.instances.push(d), p);
      }
      layoutBounds(s, o) {
        let l = this.instances
          .filter((a) => a !== o)
          .map((a) => this.place(a, s))
          .filter((a) => a.length)
          .map(ye);
        return l.length
          ? [
              Math.min(...l.map((a) => a[0])),
              Math.min(...l.map((a) => a[1])),
              Math.max(...l.map((a) => a[2])),
              Math.max(...l.map((a) => a[3])),
            ]
          : null;
      }
      freeSpot(s, o, l) {
        let a = this.layoutBounds(o, s),
          u = this.place({ ...s, dx: 0, dy: 0 }, o);
        if (!a || !u.length) return { dx: s.dx, dy: s.dy };
        let p = ye(u);
        return { dx: a[2] + l - p[0], dy: a[1] - p[1] };
      }
      setCopies(s, o, l, a) {
        let u = this.instances.filter((P) => P.defId === s);
        if (((o = Math.max(1, Math.round(o))), o <= u.length)) {
          let P = new Set(u.slice(o).map((x) => x.id));
          this.instances = this.instances.filter((x) => !P.has(x.id));
          return;
        }
        let p = u.length ? u[u.length - 1].rot : 0,
          d = this.place({ defId: s, dx: 0, dy: 0, rot: p }, l),
          h = this.layoutBounds(l, null),
          m = o - u.length,
          v = Math.max(1, Math.ceil(Math.sqrt(m)));
        for (let P = 0; P < m; P++) {
          let x = { id: this.newId(), defId: s, dx: 0, dy: 0, rot: p };
          if (d.length && h) {
            let I = ye(d),
              _ = I[2] - I[0],
              T = I[3] - I[1],
              E = Math.floor(P / v),
              M = P % v;
            ((x.dx = h[2] + a + M * (_ + a) - I[0]), (x.dy = h[1] + E * (T + a) - I[1]));
          }
          this.instances.push(x);
        }
      }
      removeDef(s) {
        (this.defs.delete(s), (this.instances = this.instances.filter((o) => o.defId !== s)));
      }
      removeInstance(s) {
        let o = this.get(s);
        o &&
          ((this.instances = this.instances.filter((l) => l !== o)),
          this.instances.some((l) => l.defId === o.defId) || this.defs.delete(o.defId));
      }
      duplicate(s, o, l) {
        let a = this.get(s);
        if (!a) return null;
        let u = { ...a, id: this.newId() };
        return (Object.assign(u, this.freeSpot(u, o, l)), this.instances.push(u), u);
      }
      move(s, o, l) {
        let a = this.get(s);
        a && ((a.dx += o), (a.dy += l));
      }
      rotate(s, o) {
        let l = this.get(s);
        l && (l.rot = (((l.rot + o) % 360) + 360) % 360);
      }
      applyLayout(s) {
        for (let o of this.instances) s.has(o.id) && ([o.rot, o.dx, o.dy] = s.get(o.id));
      }
      snapshot() {
        let s = new e();
        ((s.next = this.next), (s.joinTol = this.joinTol));
        for (let [o, l] of this.defs) s.defs.set(o, Object.assign(Object.create(Kt.prototype), l));
        return ((s.instances = this.instances.map((o) => ({ ...o }))), s);
      }
      compose() {
        let s = new Nt(this.names(), "feuille");
        s.layers = this.layers();
        let o = this.defs.size > 1;
        for (let l of this.defs.values()) {
          let a = o ? `${l.name} : ` : "";
          (s.warnings.push(...l.drawing.warnings.map((u) => a + u)),
            s.info.push(...l.drawing.info.map((u) => a + u)));
        }
        for (let l of this.instances) {
          let a = this.defs.get(l.defId),
            u = this.matrix(l);
          for (let p of a.drawing.paths) {
            if (p.circle && Math.abs(a.sx - a.sy) > 1e-9) {
              let [[d, h], m] = p.circle,
                v = [u[0] * d + u[1] * h + u[4], u[2] * d + u[3] * h + u[5]],
                P = [v[0] + m * Math.sqrt(a.sx * a.sy), v[1]];
              s.paths.push({ pts: [P, ...Et(P, P, v, !0, 0.01)], closed: !0, layer: p.layer });
              continue;
            }
            s.paths.push({
              pts: p.pts.map((d) => [u[0] * d[0] + u[1] * d[1] + u[4], u[2] * d[0] + u[3] * d[1] + u[5]]),
              closed: p.closed,
              layer: p.layer,
            });
          }
          for (let [p, d, h] of a.drawing.points)
            s.points.push([u[0] * p + u[1] * d + u[4], u[2] * p + u[3] * d + u[5], h]);
        }
        return s;
      }
      overlaps(s, o) {
        let l = this.instances
            .map((u) => [u.id, this.material(u, s)])
            .filter(([, u]) => u.length)
            .map(([u, p]) => ({ id: u, rings: p, bb: ye(p), grown: null })),
          a = new Set();
        for (let u = 0; u < l.length; u++)
          for (let p = u + 1; p < l.length; p++) {
            let d = l[u],
              h = l[p];
            d.bb[2] + o < h.bb[0] ||
              h.bb[2] + o < d.bb[0] ||
              d.bb[3] + o < h.bb[1] ||
              h.bb[3] + o < d.bb[1] ||
              ((d.grown = d.grown || Dt(d.rings, o / 2, 0.05)),
              (h.grown = h.grown || Dt(h.rings, o / 2, 0.05)),
              Math.abs(Bi(Vt("intersection", d.grown, h.grown))) > 1e-6 && (a.add(d.id), a.add(h.id)));
          }
        return a;
      }
      split(s, o) {
        let l = this.defs.get(s);
        if (!l) return 0;
        let a = l
            .rings(o, this.joinTol)
            .flatMap(Di)
            .map((v) => ({ r: v, area: It(v), bb: mt(v), ip: jt(v) })),
          u = a.filter((v) => !a.some((P) => P !== v && P.area > v.area && Yt(v.ip, P.r)));
        if (u.length < 2) return 0;
        let p = (v) => {
            let P = -1,
              x = 1 / 0;
            if (
              (u.forEach((_, T) => {
                _.area < x &&
                  v[0] >= _.bb[0] &&
                  v[0] <= _.bb[2] &&
                  v[1] >= _.bb[1] &&
                  v[1] <= _.bb[3] &&
                  Yt(v, _.r) &&
                  ((P = T), (x = _.area));
              }),
              P >= 0)
            )
              return P;
            let I = 1 / 0;
            return (
              u.forEach((_, T) => {
                let E = Te(v, _.r);
                E < I && ((I = E), (P = T));
              }),
              P
            );
          },
          d = u.map(() => ({ paths: [], points: [] }));
        for (let v of l.drawing.paths)
          d[p(v.closed && v.pts.length >= 4 ? jt(v.pts) : v.pts[v.pts.length >> 1])].paths.push(v);
        for (let v of l.drawing.points) d[p(v)].points.push(v);
        let h = [];
        for (let v of d) {
          if (!v.paths.length) continue;
          let P = new Nt(l.drawing.name, l.drawing.kind);
          ((P.paths = v.paths), (P.points = v.points));
          for (let x of v.paths) P.count(x.layer);
          for (let x of v.points) P.count(x[2]);
          for (let [x, I] of Object.entries(P.layers)) I.visible = (l.drawing.layers[x] || {}).visible !== !1;
          h.push(new Kt(this.newId(), "", P, { sx: l.sx, sy: l.sy, source: l.source }));
        }
        if (h.length < 2) return 0;
        h.forEach((v, P) => {
          v.name = `${l.name} \u2013 pi\xE8ce ${P + 1}`;
        });
        let m = [];
        for (let v of this.instances.filter((P) => P.defId === s)) {
          let [P, x] = Yi(v.rot);
          for (let I of h) {
            let _ = l.sx * (I.c0[0] - l.c0[0]),
              T = l.sy * (I.c0[1] - l.c0[1]);
            m.push({
              id: this.newId(),
              defId: I.id,
              rot: v.rot,
              dx: v.dx + (P * _ - x * T - _) + l.sx * (I.m0[0] - l.m0[0]),
              dy: v.dy + (x * _ + P * T - T) + l.sy * (I.m0[1] - l.m0[1]),
            });
          }
        }
        ((this.instances = this.instances.filter((v) => v.defId !== s).concat(m)), this.defs.delete(s));
        for (let v of h) this.defs.set(v.id, v);
        return h.length;
      }
      nest(s, o, l, a, u = 0, p = 0) {
        let d = new Map(),
          h = [];
        for (let m of this.instances) {
          let v = new Map();
          for (let P of l ? [0, 90, 180, 270] : [m.rot]) {
            let x = `${m.defId}:${P}`;
            (d.has(x) || d.set(x, this.place({ defId: m.defId, dx: 0, dy: 0, rot: P }, s)),
              d.get(x).length && v.set(P, d.get(x)));
          }
          v.size && h.push({ id: m.id, key: m.defId, geoms: v });
        }
        return Ni(h, o, a, u, p);
      }
    };
  function ki(e) {
    let s = [...e.values()].filter((u) => u.length);
    if (!s.length) return 0;
    let o = ye(s.flat()),
      l = o[2] - o[0],
      a = o[3] - o[1];
    return l * a > 0 ? s.reduce((u, p) => u + Bi(p), 0) / (l * a) : 0;
  }
  var De = { A4: [210, 297], A5: [148, 210], A3: [297, 420], Letter: [215.9, 279.4] };
  function Ke(e) {
    let { width: s, height: o, data: l } = e,
      a = new Float32Array(s * o);
    for (let u = 0, p = 0; u < s * o; u++, p += 4) a[u] = 0.299 * l[p] + 0.587 * l[p + 1] + 0.114 * l[p + 2];
    return { w: s, h: o, g: a };
  }
  function Qe(e, s, o, l) {
    let a = new Int32Array(s * o).fill(-1),
      u = new Int32Array(s * o),
      p = [],
      d = [],
      h = [];
    for (let m = 0; m < s * o; m++) {
      if (e[m] !== l || a[m] !== -1) continue;
      let v = p.length,
        P = 0,
        x = 0,
        I = !1;
      for (a[m] = v, u[x++] = m; x; ) {
        let _ = u[--x],
          T = _ % s,
          E = (_ / s) | 0;
        (P++,
          (T === 0 || E === 0 || T === s - 1 || E === o - 1) && (I = !0),
          T > 0 && e[_ - 1] === l && a[_ - 1] === -1 && ((a[_ - 1] = v), (u[x++] = _ - 1)),
          T < s - 1 && e[_ + 1] === l && a[_ + 1] === -1 && ((a[_ + 1] = v), (u[x++] = _ + 1)),
          E > 0 && e[_ - s] === l && a[_ - s] === -1 && ((a[_ - s] = v), (u[x++] = _ - s)),
          E < o - 1 && e[_ + s] === l && a[_ + s] === -1 && ((a[_ + s] = v), (u[x++] = _ + s)));
      }
      (p.push(P), d.push(I), h.push(m));
    }
    return { labels: a, sizes: p, touch: d, first: h };
  }
  function $i(e, o = "A4") {
    // La photo entiere sert de feuille : aucune detection ni deformation.
    let [a, u] = De[o] || De.A4,
      l = Math.max(a, u) / Math.max(e.w, e.h);
    return { ...e, mmPerPx: l, paperMM: [e.w * l, e.h * l] };
  }
  function Fi(e, s, o, l, a) {
    if (l < 1) return e;
    let u = new Uint8Array(s * o),
      p = new Uint8Array(s * o);
    for (let d = 0; d < o; d++)
      for (let h = 0; h < s; h++) {
        let m = a ? 0 : 1;
        for (let v = Math.max(0, h - l); v <= Math.min(s - 1, h + l); v++) {
          let P = e[d * s + v];
          if (a ? P : !P) {
            m = a ? 1 : 0;
            break;
          }
        }
        u[d * s + h] = m;
      }
    for (let d = 0; d < o; d++)
      for (let h = 0; h < s; h++) {
        let m = a ? 0 : 1;
        for (let v = Math.max(0, d - l); v <= Math.min(o - 1, d + l); v++) {
          let P = u[v * s + h];
          if (a ? P : !P) {
            m = a ? 1 : 0;
            break;
          }
        }
        p[d * s + h] = m;
      }
    return p;
  }
  function Gi(e, s = 0.35, o = 0.4) {
    let { w: l, h: a, g: u, mmPerPx: p } = e,
      d = 24,
      h = Math.ceil(l / d),
      m = Math.ceil(a / d),
      v = new Float32Array(h * m);
    for (let A = 0; A < m; A++)
      for (let Y = 0; Y < h; Y++) {
        let X = [];
        for (let S = A * d; S < Math.min(a, A * d + d); S++)
          for (let F = Y * d; F < Math.min(l, Y * d + d); F++) X.push(u[S * l + F]);
        (X.sort((S, F) => S - F), (v[A * h + Y] = X[Math.floor(X.length * 0.85)]));
      }
    let P = new Float32Array(h * m);
    for (let A = 0; A < m; A++)
      for (let Y = 0; Y < h; Y++) {
        let X = 0;
        for (let S = -1; S <= 1; S++)
          for (let F = -1; F <= 1; F++) {
            let G = Math.min(h - 1, Math.max(0, Y + F)),
              J = Math.min(m - 1, Math.max(0, A + S));
            X = Math.max(X, v[J * h + G]);
          }
        P[A * h + Y] = X;
      }
    let x = new Uint8Array(l * a),
      I = Math.round(Math.min(l, a) * 0.025);
    for (let A = I; A < a - I; A++)
      for (let Y = I; Y < l - I; Y++) {
        let X = Math.min(h - 1.001, Math.max(0, Y / d - 0.5)),
          S = Math.min(m - 1.001, Math.max(0, A / d - 0.5)),
          F = X | 0,
          G = S | 0,
          J = X - F,
          B = S - G,
          U = Math.min(h - 1, F + 1),
          R = Math.min(m - 1, G + 1),
          $ =
            (P[G * h + F] * (1 - J) + P[G * h + U] * J) * (1 - B) +
            (P[R * h + F] * (1 - J) + P[R * h + U] * J) * B;
        x[A * l + Y] = u[A * l + Y] < $ * (1 - s) ? 1 : 0;
      }
    // Sans redressement de la photo, la table autour de la feuille est visible : une grande
    // zone sombre qui touche le bord de l'image n'est pas de l'encre (sinon elle fausse
    // l'epaisseur du trait et decale tous les contours).
    {
      let hist = new Float64Array(256),
        n = l * a,
        white = 255,
        cum = 0;
      for (let A = 0; A < n; A++) hist[Math.max(0, Math.min(255, u[A] | 0))]++;
      for (let A = 0; A < 256; A++)
        if (((cum += hist[A]), cum >= n * 0.9)) {
          white = A;
          break;
        }
      let dark = new Uint8Array(n);
      for (let A = 0; A < n; A++) dark[A] = u[A] < white * 0.55 ? 1 : 0;
      let { labels: dl, sizes: ds, touch: dt } = Qe(dark, l, a, 1);
      for (let A = 0; A < n; A++) dark[A] && dt[dl[A]] && ds[dl[A]] > 0.03 * n && (x[A] = 0);
    }
    let _ = Math.round(o / p),
      T = Fi(Fi(x, l, a, _, !0), l, a, _, !1),
      { labels: E, sizes: M } = Qe(T, l, a, 1),
      b = (1.2 / p) ** 2;
    for (let A = 0; A < l * a; A++) E[A] >= 0 && M[E[A]] < b && (T[A] = 0);
    return T;
  }
  function mr(e, s, o, l, a) {
    let u = (_, T) => _ >= 0 && T >= 0 && _ < s && T < o && e[T * s + _] === l,
      p = a % s,
      d = (a / s) | 0,
      h = [1, 0, -1, 0],
      m = [0, 1, 0, -1],
      v = [[p, d]],
      P = p,
      x = d,
      I = 0;
    for (let _ = 0; _ < 8 * (s + o) * 50; _++) {
      ((P += h[I]), (x += m[I]));
      let T, E;
      if (
        (I === 0
          ? ((T = u(P, x - 1)), (E = u(P, x)))
          : I === 1
            ? ((T = u(P, x)), (E = u(P - 1, x)))
            : I === 2
              ? ((T = u(P - 1, x)), (E = u(P - 1, x - 1)))
              : ((T = u(P - 1, x - 1)), (E = u(P, x - 1))),
        (I = E ? (T ? (I + 3) % 4 : I) : (I + 1) % 4),
        P === p && x === d && I === 0)
      )
        break;
      v.push([P, x]);
    }
    return v;
  }
  function yr(e, s) {
    // Lissage du contour ferme : trois moyennes glissantes successives (noyau quasi gaussien),
    // qui effacent les tremblements du trait mieux qu'une seule passe.
    let o = e.length;
    s = Math.min(s, Math.floor(o / 4));
    if (s < 1) return e;
    for (let pass = 0; pass < 3; pass++) {
      let l = [];
      for (let a = 0; a < o; a++) {
        let u = 0,
          p = 0;
        for (let d = -s; d <= s; d++) {
          let h = e[(a + d + o) % o];
          ((u += h[0]), (p += h[1]));
        }
        l.push([u / (2 * s + 1), p / (2 * s + 1)]);
      }
      e = l;
    }
    return e;
  }
  function qr(e, n = 120, frac = 0.06) {
    // Plus fort virage (en degres) d'un contour ferme sur une fenetre de 6 % du perimetre.
    // Un cercle, meme tremble, tourne de facon progressive ; un carre ou un rectangle a de vrais coins.
    let pts = e.slice(0, -1),
      m = pts.length;
    if (m < 4) return 180;
    let cum = [0];
    for (let i = 1; i <= m; i++) cum.push(cum[i - 1] + Math.hypot(pts[i % m][0] - pts[i - 1][0], pts[i % m][1] - pts[i - 1][1]));
    let total = cum[m],
      res = [],
      j = 0;
    for (let i = 0; i < n; i++) {
      let target = (total * i) / n;
      while (j < m - 1 && cum[j + 1] < target) j++;
      let a = pts[j],
        b = pts[(j + 1) % m],
        d = cum[j + 1] - cum[j] || 1,
        f = (target - cum[j]) / d;
      res.push([a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f]);
    }
    let k = Math.max(1, Math.round(n * frac)),
      best = 0;
    for (let i = 0; i < n; i++) {
      let p = res[(i - k + n) % n],
        q = res[i],
        r = res[(i + k) % n],
        ux = q[0] - p[0],
        uy = q[1] - p[1],
        vx = r[0] - q[0],
        vy = r[1] - q[1],
        c = (ux * vx + uy * vy) / ((Math.hypot(ux, uy) * Math.hypot(vx, vy)) || 1);
      best = Math.max(best, (Math.acos(Math.max(-1, Math.min(1, c))) * 180) / Math.PI);
    }
    return best;
  }
  function Wi(e, s, o = {}) {
    let { w: l, h: a, mmPerPx: u } = e,
      p = o.smoothMM ?? 1.5,
      d = o.minMM ?? 2,
      h = new Float32Array(l * a),
      m = Math.SQRT2;
    for (let X = 0; X < l * a; X++) h[X] = s[X] ? 1e9 : 0;
    for (let X = 0; X < a; X++)
      for (let S = 0; S < l; S++) {
        let F = X * l + S;
        if (!h[F]) continue;
        let G = S > 0 ? h[F - 1] + 1 : 1;
        (X > 0
          ? (G = Math.min(G, h[F - l] + 1, S > 0 ? h[F - l - 1] + m : 1, S < l - 1 ? h[F - l + 1] + m : 1))
          : (G = 1),
          (h[F] = Math.min(h[F], G)));
      }
    let v = 0,
      P = 0;
    for (let X = a - 1; X >= 0; X--)
      for (let S = l - 1; S >= 0; S--) {
        let F = X * l + S;
        if (!h[F]) continue;
        let G = S < l - 1 ? h[F + 1] + 1 : 1;
        (X < a - 1
          ? (G = Math.min(G, h[F + l] + 1, S < l - 1 ? h[F + l + 1] + m : 1, S > 0 ? h[F + l - 1] + m : 1))
          : (G = 1),
          (h[F] = Math.min(h[F], G)),
          v++,
          (P += h[F]));
      }
    let x = v ? Math.max(1, (4 * P) / v - 2) : 3,
      I = new Uint8Array(l * a);
    for (let X = 0; X < l * a; X++) I[X] = s[X] ? 0 : 1;
    let { labels: _, sizes: T, touch: E, first: M } = Qe(I, l, a, 1),
      b = (d / u) ** 2,
      A = [],
      Y = Math.max(1, Math.round(p / u));
    for (let X = 0; X < T.length; X++) {
      if (E[X] || T[X] < b) continue;
      let S = Dt([ce(mr(_, l, a, X, M[X]))], x / 2, 0.05, !0);
      if (!S.length) continue;
      let F = S.reduce((et, z) => (Math.abs(It(z)) > Math.abs(It(et)) ? z : et)),
        G = [];
      for (let et = 0; et < F.length - 1; et++) {
        let z = Math.max(1, Math.ceil(ft(F[et], F[et + 1])));
        for (let lt = 0; lt < z; lt++)
          G.push([
            F[et][0] + ((F[et + 1][0] - F[et][0]) * lt) / z,
            F[et][1] + ((F[et + 1][1] - F[et][1]) * lt) / z,
          ]);
      }
      let J = ce(yr(G, Y));
      J = Pi(J, Math.max(0.35, 0.08 / u));
      let B = J.map(([et, z]) => [et * u, (a - z) * u]),
        U = Math.abs(It(B)),
        R = qt(B),
        $ = se(B),
        V = B.slice(0, -1).map((et) => ft(et, $)),
        st = V.reduce((et, z) => et + z, 0) / V.length,
        tt =
          o.circles !== !1 &&
          V.length >= 6 &&
          (4 * Math.PI * U) / (R * R) > 0.8 &&
          Math.max(...V.map((et) => Math.abs(et - st))) / st < (o.circleTol ?? 0.2) &&
          qr(B) < 65;
      if (tt) {
        let et = Math.sqrt(U / Math.PI),
          z = [$[0] + et, $[1]];
        B = [z, ...Et(z, z, $, !0, 0.01)];
      }
      A.push({ ring: J, mm: ce(B), circle: tt, area: U });
    }
    return { shapes: A, strokeMM: x * u };
  }
  var Zi = new TextEncoder(),
    qi = (e) => (e || 0).toString(16).padStart(4, "0");
  function ii(e = globalThis.navigator) {
    return e
      ? /Android/i.test(e.userAgent || "") && e.usb
        ? "webusb"
        : e.serial
          ? "webserial"
          : e.usb
            ? "webusb"
            : null
      : null;
  }
  var ti = class {
    constructor(s) {
      ((this.port = s), (this.onData = null), (this.onClose = null));
    }
    get label() {
      let s = this.port.getInfo?.() || {};
      return s.usbVendorId ? `USB ${qi(s.usbVendorId)}:${qi(s.usbProductId)}` : "port s\xE9rie";
    }
    async open(s) {
      (await this.port.open({ baudRate: s }),
        (this.writer = this.port.writable.getWriter()),
        (this.reading = !0),
        (async () => {
          let o = new TextDecoder();
          try {
            for (; this.reading && this.port.readable; ) {
              this.reader = this.port.readable.getReader();
              try {
                for (;;) {
                  let { value: l, done: a } = await this.reader.read();
                  if (a) break;
                  this.onData?.(o.decode(l, { stream: !0 }));
                }
              } finally {
                this.reader.releaseLock();
              }
            }
          } catch {
          } finally {
            this.onClose?.();
          }
        })());
    }
    write(s) {
      return this.writer.write(typeof s == "string" ? Zi.encode(s) : s);
    }
    async close() {
      this.reading = !1;
      try {
        await this.reader?.cancel();
      } catch {}
      try {
        this.writer.releaseLock();
      } catch {}
      try {
        await this.port.close();
      } catch {}
    }
  };
  function vr(e) {
    let s = Math.round(24e6 / e),
      o = [0, 3, 2, 4, 1, 5, 6, 7][s & 7];
    return [((s >> 3) | ((o & 3) << 14)) & 65535, o >> 2];
  }
  var ei = class {
    constructor(s) {
      ((this.dev = s),
        (this.onData = null),
        (this.onClose = null),
        (this.chain = Promise.resolve()),
        (this.kind = ""));
    }
    get label() {
      return `${this.dev.productName || "USB"} (${this.kind})`;
    }
    out(s, o, l, a, u, p) {
      return this.dev.controlTransferOut({ requestType: s, recipient: o, request: l, value: a, index: u }, p);
    }
    in(s, o, l, a, u, p) {
      return this.dev.controlTransferIn({ requestType: s, recipient: o, request: l, value: a, index: u }, p);
    }
    async ch34xBaud(s) {
      let o = Math.floor(1532620800 / s),
        l = 3;
      for (; o > 65520 && l > 0; ) ((o >>= 3), l--);
      ((o = 65536 - o),
        await this.out("vendor", "device", 154, 4882, (o & 65280) | l | 128),
        await this.out("vendor", "device", 154, 3884, o & 255));
    }
    async open(s) {
      let o = this.dev;
      (await o.open(), o.configuration || (await o.selectConfiguration(1)));
      let l = o.configuration.interfaces,
        a = (v) => v.alternates[0],
        u = l.find((v) => a(v).interfaceClass === 10);
      this.kind = u ? "CDC" : { 6790: "CH340", 4292: "CP210x", 1027: "FTDI" }[o.vendorId] || "inconnu";
      let p = u || l.find((v) => a(v).endpoints.some((P) => P.type === "bulk"));
      if (!p) throw new Error("Cet appareil USB n\u2019expose pas de liaison s\xE9rie.");
      let d = u ? l.find((v) => a(v).interfaceClass === 2) : null;
      try {
        (d && (await o.claimInterface(d.interfaceNumber)), await o.claimInterface(p.interfaceNumber));
      } catch {
        throw new Error(
          "Android utilise d\xE9j\xE0 cet adaptateur USB. D\xE9branchez puis rebranchez le c\xE2ble, fermez les autres applis s\xE9rie et r\xE9essayez.",
        );
      }
      let h = a(p).endpoints;
      ((this.epIn = h.find((v) => v.direction === "in" && v.type === "bulk")),
        (this.epOut = h.find((v) => v.direction === "out" && v.type === "bulk")));
      let m = p.interfaceNumber;
      if (this.kind === "CDC") {
        let v = d ? d.interfaceNumber : m;
        (await this.out(
          "class",
          "interface",
          32,
          0,
          v,
          new Uint8Array([s & 255, (s >> 8) & 255, (s >> 16) & 255, s >>> 24, 0, 0, 8]),
        ),
          await this.out("class", "interface", 34, 3, v));
      } else if (this.kind === "CH340")
        (await this.in("vendor", "device", 95, 0, 0, 2),
          await this.out("vendor", "device", 161, 0, 0),
          await this.ch34xBaud(s),
          await this.in("vendor", "device", 149, 9496, 0, 2),
          await this.out("vendor", "device", 154, 9496, 195),
          await this.in("vendor", "device", 149, 1798, 0, 2),
          await this.out("vendor", "device", 161, 20511, 55562),
          await this.ch34xBaud(s),
          await this.out("vendor", "device", 164, 65439, 0));
      else if (this.kind === "CP210x") {
        let v = new Uint8Array(4);
        (new DataView(v.buffer).setUint32(0, s, !0),
          await this.out("vendor", "interface", 0, 1, m),
          await this.out("vendor", "interface", 30, 0, m, v),
          await this.out("vendor", "interface", 3, 2048, m),
          await this.out("vendor", "interface", 7, 771, m));
      } else if (this.kind === "FTDI") {
        let [v, P] = vr(s);
        (await this.out("vendor", "device", 0, 0, 0),
          await this.out("vendor", "device", 1, 771, 0),
          await this.out("vendor", "device", 2, 0, 0),
          await this.out("vendor", "device", 3, v, P),
          await this.out("vendor", "device", 4, 8, 0),
          await this.out("vendor", "device", 9, 4, 0));
      }
      ((this.reading = !0), this.readLoop());
    }
    async readLoop() {
      let s = new TextDecoder(),
        o = this.epIn.packetSize || 64;
      for (; this.reading; )
        try {
          let l = await this.dev.transferIn(this.epIn.endpointNumber, o);
          if (l.status === "stall") {
            await this.dev.clearHalt("in", this.epIn.endpointNumber);
            continue;
          }
          let a = new Uint8Array(l.data.buffer, l.data.byteOffset, l.data.byteLength);
          (this.kind === "FTDI" && (a = a.slice(2)), a.length && this.onData?.(s.decode(a, { stream: !0 })));
        } catch {
          break;
        }
      ((this.reading = !1), this.onClose?.());
    }
    write(s) {
      let o = typeof s == "string" ? Zi.encode(s) : s;
      return (
        (this.chain = this.chain
          .then(async () => {
            for (let l = 0; l < o.length; l += 64)
              await this.dev.transferOut(this.epOut.endpointNumber, o.slice(l, l + 64));
          })
          .catch(() => {})),
        this.chain
      );
    }
    async close() {
      this.reading = !1;
      try {
        await this.dev.close();
      } catch {}
    }
  };
  async function zi(e = globalThis.navigator) {
    let s = ii(e);
    if (s === "webserial") return new ti(await e.serial.requestPort());
    if (s === "webusb") return new ei(await e.usb.requestDevice({ filters: [] }));
    throw new Error(
      "Ce navigateur ne permet pas de piloter un appareil USB. Sur Android, ouvrez l\u2019appli dans Chrome. Sur iPhone et iPad, Apple ne l\u2019autorise pas.",
    );
  }
  var Pr = {
      1: "commande inconnue",
      2: "valeur manquante ou invalide",
      3: "commande $ non reconnue",
      8: "commande refus\xE9e pendant le mouvement",
      9: "G-code verrouill\xE9 : la machine est en alarme, d\xE9verrouillez-la",
      15: "d\xE9placement manuel hors des limites",
      20: "commande G-code non prise en charge",
      22: "vitesse F non d\xE9finie",
      33: "arc impossible (rayon incoh\xE9rent)",
    },
    xr = {
      1: "fin de course d\xE9clench\xE9 : position perdue, refaites la prise d\u2019origine",
      2: "d\xE9placement hors des limites de la machine",
      3: "r\xE9initialisation pendant un mouvement : position perdue",
      6: "prise d\u2019origine interrompue",
      8: "prise d\u2019origine : fin de course non lib\xE9r\xE9",
      9: "prise d\u2019origine : fin de course non trouv\xE9",
      10: "fin de course d\xE9clench\xE9",
    },
    Ui = {
      Idle: "\xC0 l\u2019arr\xEAt",
      Run: "En mouvement",
      Hold: "En pause",
      Jog: "D\xE9placement",
      Alarm: "Alarme",
      Door: "Porte ouverte",
      Check: "V\xE9rification",
      Home: "Prise d\u2019origine",
      Sleep: "En veille",
      Déconnecté: "D\xE9connect\xE9e",
    },
    Be = class {
      constructor() {
        ((this.t = null),
          (this.rx = ""),
          (this.queue = []),
          (this.inflight = []),
          (this.used = 0),
          (this.version = ""),
          (this.job = null),
          (this.status = {
            state: "D\xE9connect\xE9",
            mpos: [0, 0, 0],
            wpos: [0, 0, 0],
            wco: [0, 0, 0],
            feed: 0,
            torch: !1,
          }),
          (this.listeners = new Set()),
          (this.maxUsed = 0));
      }
      on(s) {
        return (this.listeners.add(s), () => this.listeners.delete(s));
      }
      emit(s, o) {
        for (let l of this.listeners) l(s, o);
      }
      get connected() {
        return !!this.t;
      }
      get idle() {
        return this.status.state === "Idle";
      }
      async connect(s) {
        ((this.t = s),
          (s.onData = (o) => this.onData(o)),
          (s.onClose = () => this.lost()),
          await s.open(115200),
          (this.status.state = "Connexion"),
          this.emit("connected", s.label),
          (this.wake = setTimeout(() => {
            this.t &&
              !this.version &&
              this.write(`\r
\r
`);
          }, 2500)),
          (this.poll = setInterval(() => {
            this.t && this.realtime("?");
          }, 250)));
      }
      async disconnect() {
        (clearInterval(this.poll), clearTimeout(this.wake));
        let s = this.t;
        ((this.t = null),
          this.flush("Machine d\xE9connect\xE9e"),
          (this.status.state = "D\xE9connect\xE9"),
          s && (await s.close()),
          this.emit("disconnected"));
      }
      lost() {
        this.t &&
          (clearInterval(this.poll),
          (this.t = null),
          this.flush("Liaison USB interrompue"),
          (this.status.state = "D\xE9connect\xE9"),
          this.emit("disconnected", "Liaison USB interrompue"));
      }
      write(s) {
        return this.t ? this.t.write(s) : null;
      }
      realtime(s) {
        return this.write(typeof s == "number" ? new Uint8Array([s]) : s);
      }
      onData(s) {
        this.rx += s;
        let o;
        for (
          ;
          (o = this.rx.indexOf(`
`)) >= 0;
        ) {
          let l = this.rx.slice(0, o).replace(/\r/g, "").trim();
          ((this.rx = this.rx.slice(o + 1)), l && this.onLine(l));
        }
      }
      onLine(s) {
        if (s[0] === "<") {
          this.parseStatus(s);
          return;
        }
        if ((this.emit("line", s), s === "ok" || s.startsWith("error:"))) {
          let o = this.inflight.shift();
          (o && ((this.used -= o.len), o.cb?.(s === "ok" ? null : this.errorText(s), o.text)), this.pump());
        } else if (s.startsWith("ALARM:")) {
          let o = +s.slice(6);
          ((this.status.alarm = `Alarme ${o} : ${xr[o] || "voir la documentation GRBL"}`),
            this.emit("alarm", this.status.alarm));
        } else
          /^Grbl\s/i.test(s) &&
            ((this.version = s), this.flush("Contr\xF4leur r\xE9initialis\xE9"), this.emit("banner", s));
      }
      errorText(s) {
        let o = +s.slice(6);
        return `Erreur ${o} : ${Pr[o] || "voir la documentation GRBL"}`;
      }
      parseStatus(s) {
        let o = s.slice(1, -1).split("|"),
          l = this.status;
        ((l.state = o[0].split(":")[0]), (l.sub = o[0].split(":")[1]));
        let a = null,
          u = null;
        l.torch = !1;
        for (let p of o.slice(1)) {
          let [d, h = ""] = p.split(":"),
            m = h.split(",").map(Number);
          d === "MPos"
            ? (a = m)
            : d === "WPos"
              ? (u = m)
              : d === "WCO"
                ? (l.wco = m)
                : d === "FS" || d === "F"
                  ? (l.feed = m[0])
                  : d === "Bf"
                    ? (l.buf = m)
                    : d === "A" && (l.torch = /[SC]/.test(h));
        }
        (a && ((l.mpos = a), (l.wpos = a.map((p, d) => p - (l.wco[d] || 0)))),
          u && ((l.wpos = u), (l.mpos = u.map((p, d) => p + (l.wco[d] || 0)))),
          l.state !== "Alarm" && (l.alarm = null),
          this.job && this.job.acked === this.job.total && l.state === "Idle" && this.finishJob(null),
          this.emit("status", l));
      }
      enqueue(s, o) {
        (this.queue.push({ text: s, len: s.length + 1, cb: o }), this.pump());
      }
      pump() {
        for (; this.t && this.queue.length && this.used + this.queue[0].len <= 127; ) {
          let s = this.queue.shift();
          (this.inflight.push(s),
            (this.used += s.len),
            (this.maxUsed = Math.max(this.maxUsed, this.used)),
            this.write(
              s.text +
                `
`,
            ));
        }
      }
      flush(s) {
        let o = [...this.inflight, ...this.queue];
        ((this.inflight = []), (this.queue = []), (this.used = 0));
        for (let l of o) l.cb?.(s, l.text);
        this.job && this.finishJob(s);
      }
      command(s) {
        return new Promise((o, l) => this.enqueue(s, (a) => (a ? l(new Error(a)) : o())));
      }
      jog(s, o, l) {
        let a = [];
        (s && a.push(`X${s.toFixed(3)}`),
          o && a.push(`Y${o.toFixed(3)}`),
          a.length && this.enqueue(`$J=G91 G21 ${a.join(" ")} F${Math.round(l)}`));
      }
      jogCancel() {
        this.realtime(133);
      }
      setOrigin() {
        return this.command("G10 L20 P1 X0 Y0");
      }
      goOrigin(s) {
        return this.command(`G90 G21 G1 X0 Y0 F${Math.round(s)}`);
      }
      unlock() {
        return this.command("$X");
      }
      home() {
        return this.command("$H");
      }
      frame(s, o) {
        let l = Math.round(o),
          a = (u, p) => `X${u.toFixed(3)} Y${p.toFixed(3)}`;
        for (let u of [
          "M5",
          "G90 G21",
          `G1 ${a(s[0], s[1])} F${l}`,
          `G1 ${a(s[2], s[1])}`,
          `G1 ${a(s[2], s[3])}`,
          `G1 ${a(s[0], s[3])}`,
          `G1 ${a(s[0], s[1])}`,
          "G1 X0 Y0",
        ])
          this.enqueue(u);
      }
      hold() {
        this.realtime("!");
      }
      resume() {
        this.realtime("~");
      }
      stop() {
        (this.realtime("!"),
          setTimeout(() => {
            (this.realtime(24), this.flush("D\xE9coupe arr\xEAt\xE9e"));
          }, 150));
      }
      startJob(s) {
        let o = s
          .split(
            `
`,
          )
          .map((l) =>
            l
              .replace(/\(.*?\)/g, "")
              .replace(/;.*$/, "")
              .trim(),
          )
          .filter(Boolean);
        ((this.job = { total: o.length, acked: 0, error: null, t0: Date.now() }), this.emit("job", this.job));
        for (let l of o)
          this.enqueue(l, (a) => {
            let u = this.job;
            if (u) {
              if (a) {
                ((u.error = a), this.hold(), this.emit("job", u));
                return;
              }
              (u.acked++, this.emit("progress", u));
            }
          });
      }
      finishJob(s) {
        let o = this.job;
        o && ((this.job = null), (o.done = !0), (o.error = o.error || s), this.emit("job", o));
      }
    };
  var gr = "0.2.0",
    ke = { outside: "#5cc0ff", inside: "#57d6a6", hole: "#f2c14e", online: "#c79bff", spot: "#ff7a3d" },
    si = {
      material_id: "",
      kerf: 1.5,
      feed: 3e3,
      pierce_delay: 0.5,
      rapid_feed: 6e3,
      torch_on: "M3 S1000",
      torch_off: "M5",
      lead_in_type: "arc",
      lead_in_len: 4,
      lead_out_type: "none",
      lead_out_len: 2,
      overcut: 0,
      direction: "standard",
      start_mode: "longest",
      hole_enable: !0,
      hole_max_dia: 25,
      hole_speed_pct: 70,
      hole_lead: "center",
      hole_overcut: 1,
      spot_enable: !0,
      spot_max_dia: 4,
      spot_time: 0.2,
      origin: "toolpath",
      origin_x: 0,
      origin_y: 0,
      units: "auto",
      join_tol: 0.05,
      nest_spacing: 6,
      nest_rotate: !0,
      nest_goal: "rect",
      sheet_w: 0,
      sheet_h: 0,
      jog_step: 10,
      jog_feed: 3e3,
      scan_paper: "A4",
      scan_sensitivity: 0.35,
      scan_lissage: 1.5,
      scan_circle_tol: 0.2,
      scan_circles: !0,
      show_order: !0,
    },
    H = { ...si };
  try {
    Object.assign(H, JSON.parse(localStorage.getItem("arclibre-mobile") || "{}"));
  } catch {}
  H.layers = {};
  // Veille de l'ecran, bandeau de decoupe et rechargement apres mise a jour.
  var guard = { on: false, lock: null, video: null, mode: "", pending: false, hiddenAt: 0 };
  var NOSLEEP = {
    mp4: "data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAMsbW9vdgAAAGxtdmhkAAAAAAAAAAAAAAAAAAAD6AAAA+gAAQAAAQAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAlZ0cmFrAAAAXHRraGQAAAADAAAAAAAAAAAAAAABAAAAAAAAA+gAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAEAAAABAAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAAPoAAAAAAABAAAAAAHObWRpYQAAACBtZGhkAAAAAAAAAAAAAAAAAABAAAAAQABVxAAAAAAALWhkbHIAAAAAAAAAAHZpZGUAAAAAAAAAAAAAAABWaWRlb0hhbmRsZXIAAAABeW1pbmYAAAAUdm1oZAAAAAEAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAATlzdGJsAAAAuXN0c2QAAAAAAAAAAQAAAKlhdmMxAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAEAAQABIAAAASAAAAAAAAAABFUxhdmM2MC4zMS4xMDIgbGlieDI2NAAAAAAAAAAAAAAAGP//AAAAL2F2Y0MBQsAK/+EAF2dCwArZBCbARAAAAwAEAAADABA8SJkgAQAFaMuDyyAAAAAQcGFzcAAAAAEAAAABAAAAFGJ0cnQAAAAAAAAUyAAAFMgAAAAYc3R0cwAAAAAAAAABAAAAAgAAIAAAAAAUc3RzcwAAAAAAAAABAAAAAQAAABxzdHNjAAAAAAAAAAEAAAABAAAAAgAAAAEAAAAcc3RzegAAAAAAAAAAAAAAAgAAAo8AAAAKAAAAFHN0Y28AAAAAAAAAAQAAA1wAAABidWR0YQAAAFptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABtZGlyYXBwbAAAAAAAAAAAAAAAAC1pbHN0AAAAJal0b28AAAAdZGF0YQAAAAEAAAAATGF2ZjYwLjE2LjEwMAAAAAhmcmVlAAACoW1kYXQAAAJwBgX//2zcRem95tlIt5Ys2CDZI+7veDI2NCAtIGNvcmUgMTY0IHIzMTA4IDMxZTE5ZjkgLSBILjI2NC9NUEVHLTQgQVZDIGNvZGVjIC0gQ29weWxlZnQgMjAwMy0yMDIzIC0gaHR0cDovL3d3dy52aWRlb2xhbi5vcmcveDI2NC5odG1sIC0gb3B0aW9uczogY2FiYWM9MCByZWY9MyBkZWJsb2NrPTE6MDowIGFuYWx5c2U9MHgxOjB4MTExIG1lPWhleCBzdWJtZT03IHBzeT0xIHBzeV9yZD0xLjAwOjAuMDAgbWl4ZWRfcmVmPTEgbWVfcmFuZ2U9MTYgY2hyb21hX21lPTEgdHJlbGxpcz0xIDh4OGRjdD0wIGNxbT0wIGRlYWR6b25lPTIxLDExIGZhc3RfcHNraXA9MSBjaHJvbWFfcXBfb2Zmc2V0PS0yIHRocmVhZHM9MiBsb29rYWhlYWRfdGhyZWFkcz0xIHNsaWNlZF90aHJlYWRzPTAgbnI9MCBkZWNpbWF0ZT0xIGludGVybGFjZWQ9MCBibHVyYXlfY29tcGF0PTAgY29uc3RyYWluZWRfaW50cmE9MCBiZnJhbWVzPTAgd2VpZ2h0cD0wIGtleWludD0yNTAga2V5aW50X21pbj0yIHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAF2WIhAU8mKAAP78nJyddddddddddddeAAAAABkGaOAl4Rg==",
    webm: "data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQJChYECGFOAZwEAAAAAAAIBEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHYTbuMU6uEElTDZ1OsggEeTbuMU6uEHFO7a1OsggHr7AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmsirXsYMPQkBNgI1MYXZmNjAuMTYuMTAwV0GNTGF2ZjYwLjE2LjEwMESJiECPQAAAAAAAFlSua8GuAQAAAAAAADjXgQFzxYh5gDu9NQK2xJyBACK1nIN1bmSIgQCGhVZfVlA4g4EBI+ODhB3NZQDgibCBQLqBQJqBAhJUw2f8c3OgY8CAZ8iaRaOHRU5DT0RFUkSHjUxhdmY2MC4xNi4xMDBzc9ZjwItjxYh5gDu9NQK2xGfIoUWjh0VOQ09ERVJEh5RMYXZjNjAuMzEuMTAyIGxpYnZweGfIoUWjiERVUkFUSU9ORIeTMDA6MDA6MDEuMDAwMDAwMDAwAB9DtnXH54EAo6qBAACA8AIAnQEqQABAAABHCIWFiIWEiAICAAZwPEJgCrIg9zAA/v+rUICjloEB9ADRAQABEBAAGAAYWC/0AAiOgAAcU7trkbuPs4EAt4r3gQHxggGf8IED",
  };
  async function wakeAcquire() {
    guard.mode = "";
    try {
      if (navigator.wakeLock) {
        guard.lock = await navigator.wakeLock.request("screen");
        guard.lock.addEventListener("release", () => {
          guard.lock = null;
        });
        guard.mode = "wakelock";
      }
    } catch {}
    // iPhone : l'application installee ignore parfois l'API de veille. On joue en plus une video
    // muette et invisible en boucle, ce qui garde aussi l'ecran allume.
    if (!guard.mode || Nr) {
      try {
        if (!guard.video) {
          let v = W("video", {
            muted: !0,
            loop: !0,
            playsinline: !0,
            "aria-hidden": "true",
            style: "position:fixed;left:0;bottom:0;width:2px;height:2px;opacity:0.01;pointer-events:none",
          });
          ((v.muted = !0), v.setAttribute("playsinline", ""), v.setAttribute("webkit-playsinline", ""));
          v.append(W("source", { src: NOSLEEP.mp4, type: "video/mp4" }), W("source", { src: NOSLEEP.webm, type: "video/webm" }));
          (document.body.append(v), (guard.video = v));
        }
        await guard.video.play();
        guard.mode = guard.mode || "video";
      } catch {}
    }
    guardBanner();
  }
  function wakeRelease() {
    try {
      guard.lock && guard.lock.release();
    } catch {}
    ((guard.lock = null), guard.video && guard.video.pause(), (guard.mode = ""));
  }
  function guardBanner() {
    let b = Z("#jobBanner");
    b.hidden = !guard.on;
    Z("#jobBannerText").textContent = guard.mode
      ? "Gardez l\u2019\xE9cran allum\xE9 et ne fermez pas l\u2019application. \xC9cran maintenu allum\xE9."
      : "Gardez l\u2019\xE9cran allum\xE9 et ne fermez pas l\u2019application. Veille non bloquable ici : d\xE9sactivez le verrouillage automatique de l\u2019appareil.";
  }
  function jobGuard() {
    let run = !!vt.job;
    if (run !== guard.on) {
      guard.on = run;
      run ? wakeAcquire() : (wakeRelease(), reloadIfPending());
    }
    guardBanner();
  }
  function reloadIfPending() {
    if (!guard.pending || vt.job) return;
    ((guard.pending = !1), yt("Nouvelle version installée : rechargement…"));
    setTimeout(() => {
      vt.job ? (guard.pending = !0) : location.reload();
    }, 1200);
  }
  var zt = () => {
      try {
        let e = { ...H };
        (delete e.layers, localStorage.setItem("arclibre-mobile", JSON.stringify(e)));
      } catch {}
    },
    vt = new Be(),
    w = {
      sheet: null,
      job: null,
      gcode: "",
      drawing: null,
      outlines: new Map(),
      overlaps: new Set(),
      occ: 0,
      sel: null,
      view: null,
      ghost: null,
      sim: null,
      arrows: [],
      scans: 0,
    },
    Z = (e) => document.querySelector(e);
  function W(e, s = {}, ...o) {
    let l = document.createElement(e);
    for (let [a, u] of Object.entries(s || {}))
      a === "class"
        ? (l.className = u)
        : a.startsWith("on")
          ? l.addEventListener(a.slice(2), u)
          : a === "text"
            ? (l.textContent = u)
            : u === !0
              ? l.setAttribute(a, "")
              : u !== !1 && u != null && l.setAttribute(a, u);
    for (let a of o.flat())
      a != null && a !== !1 && l.append(a instanceof Node ? a : document.createTextNode(String(a)));
    return l;
  }
  var ct = (e, s = 1) => (+e).toLocaleString("fr-FR", { maximumFractionDigits: s, minimumFractionDigits: 0 }),
    Fe = (e) => parseFloat(String(e).replace(/\s/g, "").replace(",", ".")),
    Re = (e, s = 2) => String(Math.round(e * 10 ** s) / 10 ** s).replace(".", ","),
    ai = (e) => {
      e = Math.round(e);
      let s = Math.floor(e / 60);
      return s >= 60
        ? `${Math.floor(s / 60)} h ${String(s % 60).padStart(2, "0")}`
        : `${s} min ${String(e % 60).padStart(2, "0")} s`;
    },
    ji = 0;
  function yt(e, s = "") {
    let o = Z("#toast");
    ((o.textContent = e),
      (o.className = `show ${s}`),
      clearTimeout(ji),
      (ji = setTimeout(
        () => {
          o.className = "";
        },
        s === "err" ? 6e3 : 3200,
      )));
  }
  function We({ title: e, build: s, actions: o = [], full: l = !1 }) {
    return new Promise((a) => {
      let u = W("div", { class: "backdrop" }),
        p = W("div", {
          class: `sheet${l ? " full" : ""}`,
          role: "dialog",
          "aria-modal": "true",
          "aria-label": e || "Fen\xEAtre",
        }),
        d = !1,
        h = (m) => {
          d || ((d = !0), u.remove(), p.remove(), a(m));
        };
      (u.addEventListener("click", () => h(null)),
        p.append(W("div", { class: "sheet-grip" })),
        e && p.append(W("h2", { text: e })),
        s && p.append(s(h)),
        o.length &&
          p.append(
            W(
              "div",
              { class: "sheet-actions" },
              o.map((m) =>
                W(
                  "button",
                  {
                    class: `btn ${m.kind || ""}`,
                    type: "button",
                    onclick: () => {
                      (m.check ? m.check() : !0) !== !1 && h(m.value);
                    },
                  },
                  m.label,
                ),
              ),
            ),
          ),
        document.body.append(u, p));
    });
  }
  function Ji(e, s, o = "#ece7dc") {
    let l = e.getBoundingClientRect(),
      a = window.devicePixelRatio || 1,
      u = l.width || e.width,
      p = l.height || e.height;
    ((e.width = Math.round(u * a)), (e.height = Math.round(p * a)));
    let d = e.getContext("2d");
    (d.setTransform(a, 0, 0, a, 0, 0), d.clearRect(0, 0, u, p));
    let h = s.paths.flatMap((I) => I.pts);
    if (!h.length) return;
    let m = mt(h),
      v = Math.min((u - 10) / Math.max(m[2] - m[0], 1e-6), (p - 10) / Math.max(m[3] - m[1], 1e-6)),
      P = (u - (m[2] - m[0]) * v) / 2 - m[0] * v,
      x = (p + (m[3] - m[1]) * v) / 2 + m[1] * v;
    ((d.strokeStyle = o), (d.lineWidth = 1));
    for (let I of s.paths)
      ((d.globalAlpha = (s.layers[I.layer] || {}).visible === !1 ? 0.35 : 1),
        d.beginPath(),
        I.pts.forEach(([_, T], E) => (E ? d.lineTo(_ * v + P, x - T * v) : d.moveTo(_ * v + P, x - T * v))),
        d.stroke());
    d.globalAlpha = 1;
  }
  function Cr() {
    let e = new Ne();
    return ((e.joinTol = +H.join_tol), e);
  }
  w.sheet = Cr();
  var ae = () => Ye(w.sheet.layers(), H.layers),
    ri = 0;
  function kt(e = 120) {
    (clearTimeout(ri), (ri = setTimeout($e, e)));
  }
  function $e() {
    if ((clearTimeout(ri), rn(), w.sheet.empty()))
      Object.assign(w, {
        job: null,
        gcode: "",
        drawing: null,
        outlines: new Map(),
        overlaps: new Set(),
        arrows: [],
        occ: 0,
      });
    else
      try {
        let e = w.sheet.compose(),
          s = Ye(e.layers, H.layers);
        ((w.drawing = e),
          (w.job = Xi(e, H)),
          (w.gcode = Oi(w.job, H, { torch_on: H.torch_on, torch_off: H.torch_off }, w.sheet.names())),
          (w.outlines = new Map(w.sheet.instances.map((o) => [o.id, w.sheet.place(o, s)]))),
          (w.overlaps = w.sheet.overlaps(s, Math.max(+H.kerf, 0.1))),
          (w.occ = ki(w.outlines)),
          (w.arrows = w.job.toolpaths
            .filter((o) => o.kind !== "spot" && o.preview.length > 2)
            .map((o) => [gi(o.preview, 0.55), ke[o.kind]])
            .filter((o) => o[0])));
      } catch (e) {
        (console.error(e), yt(`Calcul impossible : ${e.message}`, "err"));
      }
    (ge(), Mr(), St(), fe());
  }
  function Zt(e = !1) {
    (e && (w.view = null), ge(), Vi(), kt(30));
  }
  function qe(e) {
    (document.querySelectorAll(".panel").forEach((s) => s.classList.toggle("active", s.id === `tab-${e}`)),
      document
        .querySelectorAll(".tabs button")
        .forEach((s) => s.setAttribute("aria-selected", String(s.dataset.tab === e))),
      e === "apercu" &&
        requestAnimationFrame(() => {
          (en(), w.view || Ce());
        }));
  }
  document
    .querySelectorAll(".tabs button")
    .forEach((e) => e.addEventListener("click", () => qe(e.dataset.tab)));
  Z("#chip").addEventListener("click", () => qe("machine"));
  function ge() {
    let e = Z("#parts"),
      s = [...w.sheet.defs.values()];
    ((Z("#partsEmpty").hidden = s.length > 0),
      (Z("#cardNest").hidden = !s.length),
      (Z("#cardLayers").hidden = !s.length),
      e.replaceChildren());
    let o = ae();
    for (let l of s) {
      let a = l.bbox(o),
        u = w.sheet.copies(l.id),
        p = a
          ? `${ct((a[2] - a[0]) * l.sx)} \xD7 ${ct((a[3] - a[1]) * l.sy)} mm`
          : "aucun calque d\xE9coup\xE9",
        d = W("canvas", { class: "thumb" }),
        h = w.sel && w.sheet.get(w.sel) && w.sheet.get(w.sel).defId === l.id;
      (e.append(
        W(
          "div",
          { class: `part${h ? " sel" : ""}` },
          d,
          W(
            "div",
            {},
            W("div", { class: "part-name", text: l.name }),
            W("div", { class: "part-size", text: p }),
          ),
          W(
            "div",
            { class: "stepper" },
            W(
              "button",
              { type: "button", "aria-label": "Une copie de moins", onclick: () => oi(l.id, u - 1) },
              "\u2212",
            ),
            W("output", { text: u }),
            W(
              "button",
              { type: "button", "aria-label": "Une copie de plus", onclick: () => oi(l.id, u + 1) },
              "+",
            ),
          ),
          W(
            "button",
            {
              class: "icon-btn",
              type: "button",
              "aria-label": `Actions pour ${l.name}`,
              onclick: () => hi(l.id, null),
            },
            "\u22EF",
          ),
        ),
      ),
        requestAnimationFrame(() => Ji(d, l.drawing)));
    }
  }
  function oi(e, s) {
    s < 1 || (w.sheet.setCopies(e, Math.min(s, 500), ae(), +H.nest_spacing), (w.view = null), ge(), kt(60));
  }
  function Vi() {
    let e = Z("#layers"),
      s = w.sheet.layers();
    e.replaceChildren();
    let o = {
      auto: "Auto",
      outside: "Ext\xE9rieur",
      inside: "Int\xE9rieur",
      online: "Sur la ligne",
      spot: "Pointage",
      ignore: "Ignorer",
    };
    for (let l of Object.keys(s).sort((a, u) => a.localeCompare(u))) {
      let a = H.layers[l] || {},
        u = s[l],
        p = W("input", { type: "checkbox", "aria-label": `D\xE9couper le calque ${l}` });
      p.checked = a.enabled !== void 0 ? a.enabled : u.visible;
      let d = W(
        "select",
        { "aria-label": `Op\xE9ration du calque ${l}` },
        Object.entries(o).map(([m, v]) => W("option", { value: m }, v)),
      );
      d.value = a.op || "auto";
      let h = () => {
        ((H.layers[l] = { enabled: p.checked, op: d.value }), kt());
      };
      (p.addEventListener("change", h),
        d.addEventListener("change", h),
        e.append(
          W(
            "div",
            { class: "layer" },
            p,
            W("div", {}, l, " ", W("small", { text: `${u.count} entit\xE9s` })),
            d,
          ),
        ));
    }
  }
  function ht(e, s, o, l = {}) {
    let a = H[e];
    if (typeof si[e] == "boolean") {
      let p = W("input", { type: "checkbox", id: `f-${e}` });
      return (
        (p.checked = !!a),
        p.addEventListener("change", () => {
          ((H[e] = p.checked), zt(), l.onchange ? l.onchange() : kt());
        }),
        W("div", { class: "row check" }, W("label", { for: `f-${e}`, text: s }), p)
      );
    }
    if (l.choices) {
      let p = W(
        "select",
        { id: `f-${e}` },
        Object.entries(l.choices).map(([d, h]) => W("option", { value: d }, h)),
      );
      return (
        (p.value = a),
        p.addEventListener("change", () => {
          ((H[e] = p.value), zt(), l.onchange ? l.onchange() : kt());
        }),
        W("div", { class: "row" }, W("label", { for: `f-${e}`, text: s }), p)
      );
    }
    if (typeof si[e] == "string") {
      let p = W("input", { id: `f-${e}`, class: "text", autocapitalize: "characters", autocomplete: "off" });
      return (
        (p.value = a),
        p.addEventListener("change", () => {
          ((H[e] = p.value.trim()), zt(), kt());
        }),
        W("div", { class: "row" }, W("label", { for: `f-${e}`, text: s }), p)
      );
    }
    let u = W("input", { id: `f-${e}`, inputmode: "decimal", autocomplete: "off" });
    return (
      (u.value = Re(a, 3)),
      u.addEventListener("change", () => {
        let p = Fe(u.value),
          [d, h] = l.range || [0, 1e6];
        if (!(p >= d && p <= h)) {
          u.classList.add("bad");
          return;
        }
        (u.classList.remove("bad"), (H[e] = p), zt(), l.onchange ? l.onchange() : kt());
      }),
      W(
        "div",
        { class: "row" },
        W("label", { for: `f-${e}`, text: s }),
        u,
        W("span", { class: "unit", text: o }),
      )
    );
  }
  function Ir() {
    Z("#nestForm").replaceChildren(
      ht("nest_spacing", "Espacement entre pi\xE8ces", "mm", { onchange: () => {} }),
      ht("sheet_w", "Largeur maximale (0 = libre)", "mm", { onchange: () => {} }),
      ht("sheet_h", "Hauteur maximale (0 = libre)", "mm", { onchange: () => {} }),
    );
  }
  Z("#btnNest").addEventListener("click", Ki);
  function Ki() {
    w.sheet.empty() ||
      (yt("Organisation des pi\xE8ces\u2026"),
      setTimeout(() => {
        let { place: e, info: s } = w.sheet.nest(
          ae(),
          +H.nest_spacing,
          !!H.nest_rotate,
          H.nest_goal,
          +H.sheet_w,
          +H.sheet_h,
        );
        if (!e.size) {
          yt("Aucune pi\xE8ce \xE0 organiser : v\xE9rifiez les calques.", "warn");
          return;
        }
        (w.sheet.applyLayout(e),
          (w.view = null),
          $e(),
          yt(
            s.fits
              ? `Pi\xE8ces organis\xE9es : ${ct(s.width)} \xD7 ${ct(s.height)} mm, occupation ${Math.round(s.ratio * 100)} %.`
              : `Les pi\xE8ces ne tiennent pas dans la taille maximale : ${ct(s.width)} \xD7 ${ct(s.height)} mm.`,
            s.fits ? "" : "warn",
          ));
      }, 30));
  }
  Z("#btnImport").addEventListener("click", () => Z("#fileInput").click());
  Z("#fileInput").addEventListener("change", async (e) => {
    let s = [...e.target.files];
    e.target.value = "";
    for (let o of s) await br(o);
  });
  function fi(e, s) {
    return /\.svg$/i.test(e) ? Mi(s, e, H.units === "px72" ? "px72" : "auto") : _i(s, e, H.units);
  }
  async function br(e) {
    let s = e.name;
    if (!/\.(dxf|svg)$/i.test(s)) {
      yt(`\xAB ${s} \xBB n\u2019est pas un fichier DXF ou SVG.`, "err");
      return;
    }
    let o, l;
    try {
      ((l = await e.text()), (o = fi(s, l)));
    } catch (a) {
      yt(a.message || `Lecture de \xAB ${s} \xBB impossible.`, "err");
      return;
    }
    await Qi(o, s, { kind: "file", text: l });
  }
  async function Qi(e, s, o, l = !0) {
    if (!e.paths.length && !e.points.length) return (yt(`Aucun trac\xE9 dans \xAB ${s} \xBB.`, "warn"), !1);
    let a = await ui(e, s, { importing: !0, linked: l, scan: o.kind === "scan" });
    if (!a) return !1;
    let u = w.sheet.addDrawing(e, s, ae(), +H.nest_spacing, { sx: a.sx, sy: a.sy, source: o.kind });
    u.src = o;
    for (let p of e.warnings) yt(p, "warn");
    return (Zt(!0), !0);
  }
  function ui(e, s, { importing: o = !1, sx: l = 1, sy: a = 1, linked: u = !0, scan: p = !1 } = {}) {
    let d = new Kt(0, s, e),
      h = d.bbox(Ye(e.layers, H.layers)) || [0, 0, 0, 0],
      m = h[2] - h[0],
      v = h[3] - h[1],
      P = l,
      x = a,
      I = u,
      _ = W("input", { inputmode: "decimal", id: "sz-w" }),
      T = W("input", { inputmode: "decimal", id: "sz-h" }),
      E = W("input", { inputmode: "decimal", id: "sz-p" }),
      M = W("input", { type: "checkbox", id: "sz-link" });
    M.checked = I;
    let b = W("p", { class: "note" }),
      A = (S) => {
        (S !== "w" && (_.value = Re(m * P)),
          S !== "h" && (T.value = Re(v * x)),
          S !== "p" && (E.value = I ? Re(P * 100, 3) : ""),
          (E.disabled = !I),
          (b.textContent = I
            ? `\xC9chelle ${ct(P * 100, 2)} %.`
            : `\xC9chelle en largeur ${ct(P * 100, 1)} %, en hauteur ${ct(x * 100, 1)} %.`));
      };
    (_.addEventListener("input", () => {
      let S = Fe(_.value);
      S > 0 && m > 0 && ((P = S / m), I && (x = P), A("w"));
    }),
      T.addEventListener("input", () => {
        let S = Fe(T.value);
        S > 0 && v > 0 && ((x = S / v), I && (P = x), A("h"));
      }),
      E.addEventListener("input", () => {
        let S = Fe(E.value);
        S > 0 && ((P = x = S / 100), A("p"));
      }),
      M.addEventListener("change", () => {
        ((I = M.checked), I && (x = P), A());
      }));
    let Y = (S) => {
      ((P = x = S), (I = !0), (M.checked = !0), A());
    };
    A();
    let X = W("canvas", { class: "preview-box" });
    return (
      requestAnimationFrame(() => Ji(X, e)),
      We({
        title: s,
        build: () =>
          W(
            "div",
            {},
            X,
            W("p", {
              class: "note",
              text: `Taille d\u2019origine : ${ct(m, 2)} \xD7 ${ct(v, 2)} mm${p ? " sur la feuille" : ""}.`,
            }),
            p
              ? W("p", {
                  text: "Indiquez la largeur et la hauteur r\xE9elles de la pi\xE8ce, mesur\xE9es au bord de la d\xE9coupe.",
                })
              : null,
            W(
              "div",
              { class: "row" },
              W("label", { for: "sz-w", text: "Largeur" }),
              _,
              W("span", { class: "unit", text: "mm" }),
            ),
            W(
              "div",
              { class: "row" },
              W("label", { for: "sz-h", text: "Hauteur" }),
              T,
              W("span", { class: "unit", text: "mm" }),
            ),
            W(
              "div",
              { class: "row check" },
              W("label", { for: "sz-link", text: "Garder les proportions" }),
              M,
            ),
            W(
              "div",
              { class: "row" },
              W("label", { for: "sz-p", text: "\xC9chelle" }),
              E,
              W("span", { class: "unit", text: "%" }),
            ),
            W(
              "div",
              { class: "presets" },
              [
                ["50 %", 0.5],
                ["100 %", 1],
                ["200 %", 2],
                ["Pouces \u2192 mm", 25.4],
              ].map(([S, F]) => W("button", { class: "btn small", type: "button", onclick: () => Y(F) }, S)),
            ),
            b,
          ),
        actions: o
          ? [
              { label: "Annuler", value: null },
              { label: "Ajouter \xE0 la feuille", kind: "primary", value: "ok" },
            ]
          : [
              { label: "Annuler", value: null },
              { label: "Appliquer", kind: "primary", value: "ok" },
            ],
      }).then((S) => (S === "ok" && P > 0 && x > 0 ? { sx: P, sy: x } : null))
    );
  }
  async function hi(e, s) {
    let o = w.sheet.defs.get(e);
    if (!o) return;
    let l = [["size", "Taille\u2026"]].concat(
        s
          ? [
              ["rotR", "Pivoter d\u2019un quart de tour \xE0 droite"],
              ["rotL", "Pivoter d\u2019un quart de tour \xE0 gauche"],
              ["dup", "Dupliquer cette pi\xE8ce"],
              ["del", "Supprimer cette pi\xE8ce"],
            ]
          : [
              ["copy", "Ajouter une copie"],
              ["split", "S\xE9parer en pi\xE8ces"],
              ["remove", "Retirer ce dessin"],
            ],
      ),
      a = await We({
        title: o.name,
        build: (p) =>
          W(
            "div",
            { class: "menu" },
            l.map(([d, h]) => W("button", { class: "btn", type: "button", onclick: () => p(d) }, h)),
          ),
      }),
      u = ae();
    if (a === "size") {
      let p = await ui(o.drawing, o.name, {
        sx: o.sx,
        sy: o.sy,
        linked: Math.abs(o.sx - o.sy) < 1e-9,
        scan: o.source === "scan",
      });
      p && ((o.sx = p.sx), (o.sy = p.sy), Zt(!1));
    } else if (a === "rotR" || a === "rotL") (w.sheet.rotate(s, a === "rotR" ? -90 : 90), kt(10));
    else if (a === "dup") {
      let p = w.sheet.duplicate(s, u, +H.nest_spacing);
      (p && (w.sel = p.id), (w.view = null), Zt(!0));
    } else if (a === "del") (w.sheet.removeInstance(s), (w.sel = null), Zt(!1));
    else if (a === "copy") oi(e, w.sheet.copies(e) + 1);
    else if (a === "split") {
      let p = w.sheet.split(e, u);
      p < 2
        ? yt(`\xAB ${o.name} \xBB ne contient qu\u2019une seule pi\xE8ce.`, "warn")
        : (yt(`\xAB ${o.name} \xBB est s\xE9par\xE9 en ${p} pi\xE8ces.`), Zt(!0));
    } else a === "remove" && (w.sheet.removeDef(e), (w.sel = null), Zt(!0));
  }
  Z("#btnScan").addEventListener("click", () => Z("#photoInput").click());
  Z("#photoInput").addEventListener("change", async (e) => {
    let s = e.target.files[0];
    ((e.target.value = ""), s && (await wr(s)));
  });
  function _r(e) {
    return new Promise((s, o) => {
      let l = new Image();
      ((l.onload = () => s(l)),
        (l.onerror = () => o(new Error("Photo illisible."))),
        (l.src = URL.createObjectURL(e)));
    });
  }
  async function wr(e) {
    let s;
    try {
      let o = await _r(e),
        l = Math.min(1, 1600 / Math.max(o.naturalWidth, o.naturalHeight)),
        a = W("canvas", { width: Math.round(o.naturalWidth * l), height: Math.round(o.naturalHeight * l) }),
        u = a.getContext("2d", { willReadFrequently: !0 });
      (u.drawImage(o, 0, 0, a.width, a.height), (s = Ke(u.getImageData(0, 0, a.width, a.height))));
    } catch (o) {
      yt(o.message, "err");
      return;
    }
    await tn(s);
  }
  async function tn(e) {
    let o = null,
      l = null,
      a = new Set(),
      u = W("canvas", { class: "scan-canvas" }),
      p = W("p", { class: "note" }),
      d = W("canvas"),
      h = () => {
        o = $i(e, H.scan_paper);
        let M = new ImageData(o.w, o.h);
        for (let b = 0; b < o.w * o.h; b++) {
          let A = o.g[b];
          ((M.data[b * 4] = M.data[b * 4 + 1] = M.data[b * 4 + 2] = A), (M.data[b * 4 + 3] = 255));
        }
        ((d.width = o.w), (d.height = o.h), d.getContext("2d").putImageData(M, 0, 0), m());
      },
      m = () => {
        ((l = Wi(o, Gi(o, +H.scan_sensitivity, 0.25), {
          smoothMM: +H.scan_lissage,
          circleTol: +H.scan_circle_tol,
          circles: !!H.scan_circles,
        })),
          (a = new Set()),
          v());
      },
      v = () => {
        let M = u.clientWidth || 340,
          b = M / o.w,
          A = window.devicePixelRatio || 1;
        ((u.style.height = `${o.h * b}px`),
          (u.width = Math.round(M * A)),
          (u.height = Math.round(o.h * b * A)));
        let Y = u.getContext("2d");
        (Y.setTransform(A * b, 0, 0, A * b, 0, 0),
          Y.drawImage(d, 0, 0),
          (Y.lineWidth = 3 / b),
          l.shapes.forEach((S, F) => {
            ((Y.strokeStyle = a.has(F) ? "rgba(160,160,160,0.6)" : S.circle ? "#ff7a3d" : "#2f9be8"),
              Y.setLineDash(a.has(F) ? [8 / b, 6 / b] : []),
              Y.beginPath(),
              S.mm.forEach(([G, J], B) => {
                let U = G / o.mmPerPx,
                  R = o.h - J / o.mmPerPx;
                B ? Y.lineTo(U, R) : Y.moveTo(U, R);
              }),
              Y.stroke());
          }),
          Y.setLineDash([]));
        let X = l.shapes.length - a.size;
        p.textContent = l.shapes.length
          ? `${X} contour${X > 1 ? "s" : ""} retenu${X > 1 ? "s" : ""}, trait d\u2019environ ${ct(l.strokeMM, 1)} mm. Touchez un contour pour l\u2019\xE9carter ou le reprendre.`
          : "Aucun contour ferm\xE9 trouv\xE9 : tracez des formes ferm\xE9es bien noires, ou augmentez la sensibilit\xE9.";
      };
    u.addEventListener("click", (M) => {
      let b = u.getBoundingClientRect(),
        A = b.width / o.w,
        Y = [((M.clientX - b.left) / A) * o.mmPerPx, (o.h - (M.clientY - b.top) / A) * o.mmPerPx],
        X = -1,
        S = 1 / 0;
      (l.shapes.forEach((F, G) => {
        Yt(Y, F.mm) && F.area < S && ((S = F.area), (X = G));
      }),
        !(X < 0) && (a.has(X) ? a.delete(X) : a.add(X), v()));
    });
    let P = (M, b, A, Y, X, S) => {
        let F = W("span", { class: "unit", text: S(H[M]) }),
          G = W("input", { type: "range", min: A, max: Y, step: X, id: `sc-${M}`, "aria-label": b });
        return (
          (G.value = H[M]),
          G.addEventListener("input", () => {
            F.textContent = S(+G.value);
          }),
          G.addEventListener("change", () => {
            ((H[M] = +G.value), zt(), m());
          }),
          W("div", { class: "row" }, W("label", { for: `sc-${M}`, text: b }), G, F)
        );
      },
      x = W(
        "select",
        { id: "sc-paper" },
        Object.keys(De).map((M) => W("option", { value: M }, M === "Letter" ? "Lettre US" : M)),
      );
    ((x.value = H.scan_paper),
      x.addEventListener("change", () => {
        ((H.scan_paper = x.value), zt(), h());
      }));
    let I = W("input", { type: "checkbox", id: "sc-circ" });
    ((I.checked = !!H.scan_circles),
      I.addEventListener("change", () => {
        ((H.scan_circles = I.checked), zt(), m());
      }));
    let _ = await We({
      title: "Croquis",
      full: !0,
      build: () => (
        requestAnimationFrame(h),
        W(
          "div",
          {},
          u,
          p,
          W("div", { class: "row" }, W("label", { for: "sc-paper", text: "Format de la feuille (cadr\u00E9e)" }), x),
          P("scan_sensitivity", "Sensibilit\xE9", 0.15, 0.6, 0.05, (M) => `${Math.round(M * 100)} %`),
          P("scan_lissage", "Lissage", 0, 6, 0.25, (M) => `${ct(M, 2)} mm`),
          W("div", { class: "row check" }, W("label", { for: "sc-circ", text: "Cercles parfaits" }), I),
          P("scan_circle_tol", "Tol\xE9rance des cercles", 0.05, 0.25, 0.01, (M) => `${Math.round(M * 100)} %`),
        )
      ),
      actions: [
        { label: "Reprendre la photo", value: "retake" },
        {
          label: "Continuer",
          kind: "primary",
          value: "ok",
          check: () => (l && l.shapes.length > a.size ? !0 : (yt("Aucun contour retenu.", "warn"), !1)),
        },
      ],
    });
    if (_ === "retake") {
      Z("#photoInput").click();
      return;
    }
    if (_ !== "ok") return;
    let T = Tr(l.shapes.filter((M, b) => !a.has(b))),
      E = `Croquis ${++w.scans}`;
    for (let M = 0; M < T.length; M++) {
      let b = T.length > 1 ? `${E} \u2013 pi\xE8ce ${M + 1}` : E,
        A = new Nt(b, "croquis");
      for (let Y of T[M])
        if ((A.add(Y.mm, !0, "Croquis"), Y.circle)) {
          let X = mt(Y.mm);
          A.paths[A.paths.length - 1].circle = [[(X[0] + X[2]) / 2, (X[1] + X[3]) / 2], (X[2] - X[0]) / 2];
        }
      await Qi(A, b, { kind: "scan" }, !1);
    }
  }
  function Tr(e) {
    let s = e.map((a) => ({ s: a, ip: jt(a.mm), area: Math.abs(It(a.mm)), bb: mt(a.mm) })),
      o = s
        .filter((a) => !s.some((u) => u !== a && u.area > a.area && Yt(a.ip, u.s.mm)))
        .sort((a, u) => u.bb[3] - a.bb[3] || a.bb[0] - u.bb[0]),
      l = o.map((a) => [a.s]);
    for (let a of s) {
      if (o.includes(a)) continue;
      let u = -1,
        p = 1 / 0;
      (o.forEach((d, h) => {
        d.area < p && Yt(a.ip, d.s.mm) && ((p = d.area), (u = h));
      }),
        u >= 0 && l[u].push(a.s));
    }
    return l;
  }
  var wt = Z("#view"),
    D = wt.getContext("2d"),
    xe = 1;
  function en() {
    let e = wt.getBoundingClientRect();
    e.width &&
      ((xe = window.devicePixelRatio || 1),
      (wt.width = Math.round(e.width * xe)),
      (wt.height = Math.round(e.height * xe)),
      St());
  }
  window.ResizeObserver && new ResizeObserver(en).observe(wt);
  var ci = () => (w.job ? [-w.job.shift[0], -w.job.shift[1]] : [0, 0]);
  function Lr() {
    let e = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
    for (let s of w.job.source) mt(s.pts, e);
    for (let s of w.job.toolpaths) mt(s.preview.length ? s.preview : [s.pierce], e);
    return (mt([ci()], e), e);
  }
  function Ce() {
    let e = wt.clientWidth,
      s = wt.clientHeight;
    if (!w.job || e < 50) {
      St();
      return;
    }
    let [o, l, a, u] = Lr(),
      p = 44,
      d = 130,
      h = Math.max(0.001, Math.min((e - 36) / Math.max(a - o, 1), (s - p - d) / Math.max(u - l, 1)));
    ((w.view = { k: h, tx: e / 2 - ((o + a) / 2) * h, ty: p + (s - p - d) / 2 + ((l + u) / 2) * h }), St());
  }
  var Rt = (e, s) => [e * w.view.k + w.view.tx, -s * w.view.k + w.view.ty];
  function le(e, s = !1) {
    D.beginPath();
    let o = null;
    (e.forEach((l, a) => {
      let [u, p] = Rt(l[0], l[1]);
      (o && a !== e.length - 1 && Math.abs(u - o[0]) < 0.7 && Math.abs(p - o[1]) < 0.7) ||
        (a ? D.lineTo(u, p) : D.moveTo(u, p), (o = [u, p]));
    }),
      s && D.closePath());
  }
  function St() {
    let e = wt.clientWidth,
      s = wt.clientHeight;
    if (!e) return;
    if (
      (D.setTransform(xe, 0, 0, xe, 0, 0),
      (D.fillStyle = "#1b2128"),
      D.fillRect(0, 0, e, s),
      !w.job || w.sheet.empty())
    ) {
      ((D.fillStyle = "#ece7dc"),
        (D.font = '600 22px "Barlow Semi Condensed", sans-serif'),
        (D.textAlign = "center"),
        D.fillText("Aucune pi\xE8ce", e / 2, s / 2 - 12),
        (D.fillStyle = "#a3acb6"),
        (D.font = '500 16px "Barlow Semi Condensed", sans-serif'),
        D.fillText("Importez un fichier ou scannez un croquis", e / 2, s / 2 + 16),
        (D.textAlign = "start"),
        Z("#legend").replaceChildren());
      return;
    }
    if (!w.view) {
      Ce();
      return;
    }
    let { k: o, tx: l, ty: a } = w.view,
      u = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1e3, 2e3].find((x) => x * o >= 48) || 5e3;
    D.lineWidth = 1;
    for (let x = Math.floor(-l / o / u); x <= Math.ceil((e - l) / o / u); x++)
      ((D.strokeStyle = x % 5 ? "#212831" : "#2a323c"),
        D.beginPath(),
        D.moveTo(x * u * o + l, 0),
        D.lineTo(x * u * o + l, s),
        D.stroke());
    for (let x = Math.floor((a - s) / o / u); x <= Math.ceil(a / o / u); x++)
      ((D.strokeStyle = x % 5 ? "#212831" : "#2a323c"),
        D.beginPath(),
        D.moveTo(0, -x * u * o + a),
        D.lineTo(e, -x * u * o + a),
        D.stroke());
    for (let [x, I] of w.outlines)
      if (!(w.ghost && w.ghost.id === x)) {
        D.fillStyle = "#242c35";
        for (let _ of I) (le(_, !0), D.fill());
      }
    ((D.strokeStyle = "#7f8790"), (D.lineWidth = 1));
    for (let x of w.job.source) x.state === "cut" && (le(x.pts), D.stroke());
    let p = ci();
    (D.setLineDash([3, 4]), (D.strokeStyle = "#5f6a75"));
    let d = p;
    D.beginPath();
    for (let x of w.job.toolpaths) (D.moveTo(...Rt(...d)), D.lineTo(...Rt(...x.pierce)), (d = x.end));
    (D.stroke(), D.setLineDash([]), (D.lineWidth = 2), (D.lineJoin = "round"), (D.lineCap = "round"));
    for (let x of w.job.toolpaths)
      x.kind !== "spot" && ((D.strokeStyle = ke[x.kind]), le(x.preview), D.stroke());
    for (let [[x, I], _] of w.arrows) {
      let [T, E] = Rt(x[0], x[1]),
        M = I[0],
        b = -I[1];
      ((D.fillStyle = _),
        D.beginPath(),
        D.moveTo(T + M * 7, E + b * 7),
        D.lineTo(T - M * 5 - b * 5, E - b * 5 + M * 5),
        D.lineTo(T - M * 5 + b * 5, E - b * 5 - M * 5),
        D.closePath(),
        D.fill());
    }
    let h = H.show_order && w.job.toolpaths.length <= 150;
    ((D.font = '600 11px "Barlow Semi Condensed", sans-serif'),
      w.job.toolpaths.forEach((x, I) => {
        let [_, T] = Rt(...x.pierce);
        ((D.lineWidth = 2),
          x.kind === "spot"
            ? ((D.strokeStyle = ke.spot),
              D.beginPath(),
              D.arc(_, T, 4.5, 0, 7),
              D.moveTo(_ - 8, T),
              D.lineTo(_ + 8, T),
              D.moveTo(_, T - 8),
              D.lineTo(_, T + 8),
              D.stroke())
            : ((D.fillStyle = "#1b2128"),
              (D.strokeStyle = "#ff7a3d"),
              D.beginPath(),
              D.arc(_, T, 3.5, 0, 7),
              D.fill(),
              D.stroke()),
          h && ((D.fillStyle = "#ece7dc"), D.fillText(String(I + 1), _ + 6, T - 6)));
      }));
    let [m, v] = Rt(...p);
    ((D.lineWidth = 2),
      (D.strokeStyle = "#ff6b5e"),
      D.beginPath(),
      D.moveTo(m, v),
      D.lineTo(m + 28, v),
      D.stroke(),
      (D.strokeStyle = "#57d6a6"),
      D.beginPath(),
      D.moveTo(m, v),
      D.lineTo(m, v - 28),
      D.stroke(),
      (D.fillStyle = "#ece7dc"),
      D.fillText("0", m - 12, v + 14));
    for (let [x, I] of w.outlines) {
      let _ = w.overlaps.has(x),
        T = w.sel === x;
      if (!(!_ && !T)) {
        ((D.strokeStyle = _ ? "#ff4f45" : "#ff935f"), (D.lineWidth = T ? 2.5 : 1.5), D.setLineDash([7, 5]));
        for (let E of I)
          (w.ghost && w.ghost.id === x
            ? le(
                E.map((M) => [M[0] + w.ghost.dx, M[1] + w.ghost.dy]),
                !0,
              )
            : le(E, !0),
            D.stroke());
        D.setLineDash([]);
      }
    }
    if (w.ghost) {
      ((D.fillStyle = "rgba(255, 122, 61, 0.25)"), (D.strokeStyle = "#ff7a3d"), (D.lineWidth = 2));
      for (let x of w.outlines.get(w.ghost.id) || [])
        (le(
          x.map((I) => [I[0] + w.ghost.dx, I[1] + w.ghost.dy]),
          !0,
        ),
          D.fill(),
          D.stroke());
    }
    (w.sim && Er(),
      (D.fillStyle = "#a3acb6"),
      (D.textAlign = "right"),
      D.fillText(`grille ${ct(u)} mm`, e - 10, s - 124),
      (D.textAlign = "start"));
    let P = w.job.stats.kinds;
    Z("#legend").replaceChildren(
      ...["outside", "inside", "hole", "online", "spot"]
        .filter((x) => P[x])
        .map((x) => W("span", { style: `--c:${ke[x]}`, text: `${Oe[x]} ${P[x]}` })),
    );
  }
  function Mr() {
    let e = Z("#stats");
    if (!w.job) {
      e.textContent = "";
      return;
    }
    let s = w.job.stats,
      o = w.sheet.instances.length;
    e.textContent =
      `Feuille ${ct(s.size[0])} \xD7 ${ct(s.size[1])} mm, ${o} pi\xE8ce${o > 1 ? "s" : ""}${o > 1 ? ` (occupation ${Math.round(w.occ * 100)} %)` : ""}. ${ct(s.cutLen / 1e3, 2)} m de coupe, ${s.pierces} per\xE7age${s.pierces > 1 ? "s" : ""}, environ ${ai(s.time)}.` +
      (w.overlaps.size ? ` ${w.overlaps.size} pi\xE8ces se chevauchent (contour rouge).` : "");
  }
  function Sr(e, s) {
    if (!w.view) return null;
    let o = [(e - w.view.tx) / w.view.k, (w.view.ty - s) / w.view.k],
      l = 12 / w.view.k,
      a = null,
      u = 1 / 0;
    for (let [p, d] of w.outlines) {
      if (!d.length) continue;
      let h = mt(d.flat());
      if (o[0] < h[0] - l || o[0] > h[2] + l || o[1] < h[1] - l || o[1] > h[3] + l) continue;
      let m = de(pe(d), o) || d.some((P) => Te(o, P) < l),
        v = (h[2] - h[0]) * (h[3] - h[1]);
      m && v < u && ((u = v), (a = p));
    }
    return a;
  }
  function nn(e) {
    ((w.sel = e), ge(), St());
  }
  function Ar(e, s, o) {
    if (!w.view) return;
    let l = Math.min(1e4, Math.max(0.001, w.view.k * o)),
      a = l / w.view.k;
    ((w.view = { k: l, tx: e - (e - w.view.tx) * a, ty: s - (s - w.view.ty) * a }), St());
  }
  var Ft = new Map(),
    ut = null,
    Ge = 0,
    ni = 0;
  wt.addEventListener("pointerdown", (e) => {
    if (
      (wt.setPointerCapture(e.pointerId),
      Ft.set(e.pointerId, [e.offsetX, e.offsetY]),
      clearTimeout(Ge),
      Ft.size === 1)
    ) {
      let s = Sr(e.offsetX, e.offsetY);
      ((ut = {
        mode: s ? "part" : "pan",
        x0: e.offsetX,
        y0: e.offsetY,
        x: e.offsetX,
        y: e.offsetY,
        inst: s,
        moved: !1,
      }),
        s &&
          (Ge = setTimeout(() => {
            if (!ut || ut.moved) return;
            let o = w.sheet.get(s);
            ((ut = null), nn(s), navigator.vibrate && navigator.vibrate(15), o && hi(o.defId, s));
          }, 550)));
    } else if (Ft.size === 2 && w.view) {
      let [s, o] = [...Ft.values()];
      ((ut = {
        mode: "pinch",
        d0: Math.max(10, Math.hypot(s[0] - o[0], s[1] - o[1])),
        m0: [(s[0] + o[0]) / 2, (s[1] + o[1]) / 2],
        v0: { ...w.view },
      }),
        (w.ghost = null));
    }
  });
  wt.addEventListener("pointermove", (e) => {
    if (!Ft.has(e.pointerId) || !ut || !w.view) return;
    if ((Ft.set(e.pointerId, [e.offsetX, e.offsetY]), ut.mode === "pinch")) {
      if (Ft.size < 2) return;
      let [l, a] = [...Ft.values()],
        u = [(l[0] + a[0]) / 2, (l[1] + a[1]) / 2],
        p = ut.v0,
        d = Math.min(1e4, Math.max(0.001, (p.k * Math.hypot(l[0] - a[0], l[1] - a[1])) / ut.d0)),
        h = (ut.m0[0] - p.tx) / p.k,
        m = (p.ty - ut.m0[1]) / p.k;
      ((w.view = { k: d, tx: u[0] - h * d, ty: u[1] + m * d }), St());
      return;
    }
    let s = e.offsetX - ut.x,
      o = e.offsetY - ut.y;
    ((ut.x = e.offsetX),
      (ut.y = e.offsetY),
      !ut.moved &&
        Math.hypot(e.offsetX - ut.x0, e.offsetY - ut.y0) > 8 &&
        ((ut.moved = !0), clearTimeout(Ge), ut.mode === "part" && (w.sel = ut.inst)),
      ut.moved &&
        (ut.mode === "pan"
          ? ((w.view.tx += s), (w.view.ty += o))
          : (w.ghost = {
              id: ut.inst,
              dx: (e.offsetX - ut.x0) / w.view.k,
              dy: -(e.offsetY - ut.y0) / w.view.k,
            }),
        St()));
  });
  function sn(e) {
    if ((Ft.delete(e.pointerId), clearTimeout(Ge), !!ut)) {
      if (ut.mode === "pinch") {
        Ft.size || (ut = null);
        return;
      }
      if (ut.mode === "part" && ut.moved && w.ghost) {
        let { id: s, dx: o, dy: l } = w.ghost;
        (w.sheet.move(s, o, l),
          w.outlines.set(
            s,
            (w.outlines.get(s) || []).map((a) => a.map((u) => [u[0] + o, u[1] + l])),
          ),
          (w.ghost = null),
          kt(10));
      } else if (!ut.moved) {
        let s = Date.now();
        s - ni < 320 ? ((ni = 0), Ce()) : ((ni = s), nn(ut.mode === "part" ? ut.inst : null));
      }
      ((ut = null), St());
    }
  }
  wt.addEventListener("pointerup", sn);
  wt.addEventListener("pointercancel", sn);
  wt.addEventListener(
    "wheel",
    (e) => {
      (e.preventDefault(), Ar(e.offsetX, e.offsetY, e.deltaY < 0 ? 1.2 : 1 / 1.2));
    },
    { passive: !1 },
  );
  Z("#btnFit").addEventListener("click", Ce);
  function rn() {
    w.sim && (cancelAnimationFrame(w.sim.raf), (w.sim = null), (Z("#btnSim").textContent = "Simuler"));
  }
  Z("#btnSim").addEventListener("click", () => {
    if (w.sim) {
      (rn(), St());
      return;
    }
    if (!w.job || !w.job.toolpaths.length) return;
    let e = Math.max(+H.feed, 1) / 60,
      s = Math.max(+H.rapid_feed, 1) / 60,
      o = ci(),
      l = [],
      a = o;
    for (let h of w.job.toolpaths)
      if (
        (l.push([a, h.pierce, "rapid", ft(a, h.pierce) / s]),
        l.push([h.pierce, h.pierce, "pause", (h.kind === "spot" ? +H.spot_time : +H.pierce_delay) + 0.3]),
        h.kind !== "spot")
      ) {
        let m = (e * Math.max(h.feedPct, 1)) / 100;
        for (let v = 0; v < h.preview.length - 1; v++)
          l.push([h.preview[v], h.preview[v + 1], "cut", ft(h.preview[v], h.preview[v + 1]) / m]);
        a = h.end;
      } else a = h.pierce;
    l.push([a, o, "rapid", ft(a, o) / s]);
    let u = l.reduce((h, m) => h + m[3], 0),
      p = Math.max(1, u / 25);
    ((w.sim = { segs: l, i: 0, frac: 0, t: performance.now(), done: [], pos: o, mode: "rapid" }),
      (Z("#btnSim").textContent = "Arr\xEAter"));
    let d = (h) => {
      let m = w.sim;
      if (!m) return;
      let v = (Math.min(100, h - m.t) / 1e3) * p;
      for (m.t = h; v > 0 && m.i < l.length; ) {
        let [P, x, I, _] = l[m.i],
          T = _ * (1 - m.frac);
        v >= T
          ? ((v -= T), I === "cut" && m.done.push([P, x]), m.i++, (m.frac = 0))
          : ((m.frac += _ > 0 ? v / _ : 1), (v = 0));
      }
      if (m.i < l.length) {
        let [P, x, I] = l[m.i];
        ((m.pos = [P[0] + (x[0] - P[0]) * m.frac, P[1] + (x[1] - P[1]) * m.frac]),
          (m.mode = I),
          St(),
          (m.raf = requestAnimationFrame(d)));
      } else ((m.pos = o), St(), (w.sim = null), (Z("#btnSim").textContent = "Simuler"));
    };
    w.sim.raf = requestAnimationFrame(d);
  });
  function Er() {
    ((D.strokeStyle = "#fff1c9"), (D.lineWidth = 2.5), D.beginPath());
    for (let [o, l] of w.sim.done) (D.moveTo(...Rt(...o)), D.lineTo(...Rt(...l)));
    D.stroke();
    let [e, s] = Rt(...w.sim.pos);
    (D.beginPath(),
      D.arc(e, s, w.sim.mode === "pause" ? 9 : 6, 0, 7),
      (D.fillStyle =
        w.sim.mode === "rapid" ? "rgba(0,0,0,0)" : w.sim.mode === "pause" ? "#ff7a3d" : "#fff1c9"),
      D.fill(),
      (D.strokeStyle = "#ff7a3d"),
      D.stroke());
  }
  Z("#btnExport").addEventListener("click", Xr);
  async function Xr() {
    if (!w.gcode) {
      yt("Rien \xE0 exporter : ajoutez une pi\xE8ce.", "warn");
      return;
    }
    let e = [...w.sheet.defs.values()],
      s = `${e.length === 1 ? e[0].name.replace(/\.[^.]+$/, "") : "decoupe"}.gcode`,
      o = new File([w.gcode], s, { type: "text/plain" });
    try {
      if (navigator.canShare && navigator.canShare({ files: [o] })) {
        await navigator.share({ files: [o], title: s });
        return;
      }
    } catch (a) {
      if (a.name === "AbortError") return;
    }
    let l = W("a", { href: URL.createObjectURL(o), download: s });
    (document.body.append(l), l.click(), l.remove(), yt(`G-code enregistr\xE9 : ${s}`));
  }
  Z("#btnToMachine").addEventListener("click", () => qe("machine"));
  var Hi = { none: "Aucune", line: "Ligne", arc: "Arc" };
  var card = (title, children) => W("section", { class: "card" }, W("h2", { text: title }), children);
  var MATS_KEY = "arclibre-materials",
    mats = (() => {
      try {
        let l = JSON.parse(localStorage.getItem(MATS_KEY) || "[]");
        if (Array.isArray(l)) {
          l = l.filter(
            (m) =>
              m &&
              typeof m.id === "string" &&
              typeof m.name === "string" &&
              Number.isFinite(m.kerf) &&
              m.kerf >= 0 &&
              Number.isFinite(m.feed) &&
              m.feed > 0 &&
              Number.isFinite(m.pierce_delay) &&
              m.pierce_delay >= 0,
          );
          if (l.length) return l;
        }
      } catch {}
      return [
        { id: "m0", name: "Mat\u00E9riau 1", kerf: +H.kerf, feed: +H.feed, pierce_delay: +H.pierce_delay },
      ];
    })();
  var saveMats = () => {
      try {
        localStorage.setItem(MATS_KEY, JSON.stringify(mats));
      } catch {}
    },
    curMat = () => mats.find((m) => m.id === H.material_id) || mats[0];
  function applyMat(m) {
    ((H.material_id = m.id), (H.kerf = m.kerf), (H.feed = m.feed), (H.pierce_delay = m.pierce_delay));
    (zt(), saveMats());
  }
  function addMat() {
    let c = curMat(),
      n = mats.length + 1;
    while (mats.some((m) => m.name === `Mat\u00E9riau ${n}`)) n++;
    let m = {
      id: `m${Date.now().toString(36)}${Math.random().toString(36).slice(2, 5)}`,
      name: `Mat\u00E9riau ${n}`,
      kerf: c.kerf,
      feed: c.feed,
      pierce_delay: c.pierce_delay,
    };
    (mats.push(m), applyMat(m), Or(), kt());
  }
  async function delMat() {
    if (mats.length < 2) {
      yt("Gardez au moins un mat\u00E9riau.", "warn");
      return;
    }
    let c = curMat();
    if (
      (await We({
        title: `Supprimer \xAB ${c.name} \xBB ?`,
        actions: [
          { label: "Annuler", value: "no" },
          { label: "Supprimer", kind: "primary", value: "yes" },
        ],
      })) !== "yes"
    )
      return;
    (mats.splice(mats.indexOf(c), 1), applyMat(mats[0]), Or(), kt());
  }
  function matCard() {
    let m = curMat(),
      pick = W(
        "select",
        { id: "f-mat" },
        mats.map((x) => W("option", { value: x.id }, x.name)),
      ),
      name = W("input", { id: "f-mat-name", class: "text", autocomplete: "off", maxlength: "40" }),
      sync = () => {
        let c = curMat();
        ((c.kerf = +H.kerf), (c.feed = +H.feed), (c.pierce_delay = +H.pierce_delay), saveMats(), kt());
      };
    ((pick.value = m.id),
      pick.addEventListener("change", () => {
        (applyMat(mats.find((x) => x.id === pick.value) || mats[0]), Or(), kt());
      }),
      (name.value = m.name),
      name.addEventListener("change", () => {
        let v = name.value.trim();
        if (!v) {
          name.value = curMat().name;
          return;
        }
        ((curMat().name = v), saveMats(), Or());
      }));
    return card("Mat\u00E9riau", [
      W("div", { class: "row" }, W("label", { for: "f-mat", text: "Mat\u00E9riau enregistr\u00E9" }), pick),
      W("div", { class: "row" }, W("label", { for: "f-mat-name", text: "Nom" }), name),
      ht("kerf", "Largeur de saign\u00E9e", "mm", { range: [0, 20], onchange: sync }),
      ht("feed", "Vitesse de coupe", "mm/min", { range: [1, 1e5], onchange: sync }),
      ht("pierce_delay", "D\u00E9lai de la torche (per\xE7age)", "s", { range: [0, 30], onchange: sync }),
      W(
        "div",
        { class: "grid2 mat-actions" },
        W("button", { class: "btn small", type: "button", onclick: addMat }, "Nouveau mat\u00E9riau"),
        W("button", { class: "btn small", type: "button", onclick: delMat }, "Supprimer"),
      ),
    ]);
  }
  function Or() {
    (Z("#cutForm").replaceChildren(
      matCard(),
      card("Amorces", [
        ht("lead_in_type", "Entr\xE9e", "", { choices: Hi }),
        ht("lead_in_len", "Longueur ou rayon", "mm", { range: [0, 100] }),
        ht("lead_out_type", "Sortie", "", { choices: Hi }),
        ht("lead_out_len", "Longueur ou rayon", "mm", { range: [0, 100] }),
      ]),
      card("Per\xE7ages", [
        ht("hole_enable", "Traitement des trous ronds"),
        ht("hole_max_dia", "Diam\xE8tre maximal", "mm", { range: [0, 2e3] }),
        ht("hole_speed_pct", "Vitesse des trous", "%", { range: [1, 100] }),
        ht("hole_lead", "Entr\xE9e des trous", "", {
          choices: { center: "Depuis le centre", standard: "Comme les contours" },
        }),
        ht("hole_overcut", "Sur-coupe des trous", "mm", { range: [0, 50] }),
        ht("spot_enable", "Pointer les petits trous"),
        ht("spot_max_dia", "Diam\xE8tre maximal point\xE9", "mm", { range: [0, 200] }),
        ht("spot_time", "Dur\xE9e de pointage", "s", { range: [0, 30] }),
      ]),
    ),
      (Z("#version").textContent =
        `ArcLibre Mobile ${gr}. Les r\xE9glages sont gard\xE9s sur cet appareil. Les r\xE9glages avanc\xE9s sont dans le menu Param\xE8tres (engrenage, en haut).`));
  }
  async function openSettings() {
    let reload = () => {
      for (let o of w.sheet.defs.values())
        if (o.src && o.src.kind === "file")
          try {
            ((o.drawing = fi(o.name, o.src.text)), o.cache.clear(), o.frame());
          } catch {}
      Zt(!0);
    };
    await We({
      title: "Param\xE8tres",
      full: !0,
      build: () =>
        W(
          "div",
          {},
          card("Torche", [
            ht("torch_on", "Allumage de la torche"),
            ht("torch_off", "Extinction de la torche"),
          ]),
          card("Trajectoires", [
            ht("overcut", "Sur-coupe", "mm", { range: [0, 50] }),
            ht("direction", "Sens de d\xE9coupe", "", {
              choices: { standard: "Standard", reverse: "Invers\xE9" },
            }),
            ht("start_mode", "Point de d\xE9part", "", {
              choices: { longest: "Milieu du plus long c\xF4t\xE9", nearest: "Au plus pr\xE8s" },
            }),
          ]),
          card("Placement automatique", [
            ht("nest_goal", "Objectif", "", {
              choices: { rect: "Plus petit rectangle", square: "Plus petit carr\xE9" },
              onchange: () => {},
            }),
            ht("nest_rotate", "Autoriser les quarts de tour", "", { onchange: () => {} }),
          ]),
          card("G-code", [
            ht("origin", "Origine", "", {
              choices: {
                toolpath: "Coin bas-gauche des trajectoires",
                drawing: "Coin bas-gauche du dessin",
                file: "Origine du fichier",
              },
            }),
            ht("origin_x", "D\xE9calage X", "mm", { range: [-1e4, 1e4] }),
            ht("origin_y", "D\xE9calage Y", "mm", { range: [-1e4, 1e4] }),
            ht("rapid_feed", "Vitesse des rapides (estimation)", "mm/min", { range: [1, 1e5] }),
            ht("show_order", "Num\xE9ros d\u2019ordre dans l\u2019aper\xE7u", "", { onchange: St }),
          ]),
          card("Lecture des fichiers", [
            ht("units", "Unit\xE9s", "", {
              choices: {
                auto: "Selon le fichier",
                mm: "Millim\xE8tres",
                inch: "Pouces",
                px72: "SVG \xE0 72 ppp (Illustrator)",
              },
              onchange: reload,
            }),
            ht("join_tol", "Tol\xE9rance de jonction", "mm", {
              range: [1e-4, 10],
              onchange: () => {
                w.sheet.joinTol = +H.join_tol;
                for (let o of w.sheet.defs.values()) o.cache.clear();
                kt();
              },
            }),
          ]),
        ),
      actions: [{ label: "Fermer", kind: "primary", value: "ok" }],
    });
  }
  Z("#btnSettings").addEventListener("click", openSettings);
  var li = ii(),
    Nr =
      /iPhone|iPad|iPod/i.test(navigator.userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1),
    ve = [];
  function Pe(e) {
    (ve.push(e), ve.length > 300 && (ve = ve.slice(-300)));
    let s = Z("#log");
    ((s.textContent = ve.join(`
`)),
      (s.scrollTop = s.scrollHeight));
  }
  function Yr() {
    return li === "webusb"
      ? "Branchez la machine avec un c\xE2ble OTG (USB-C vers USB), puis touchez Connecter. Adaptateurs reconnus : Arduino, CH340, CP210x, FTDI."
      : li === "webserial"
        ? "Branchez la machine en USB, touchez Connecter et choisissez son port."
        : Nr
          ? "Apple ne permet pas aux applis d\u2019iPhone et d\u2019iPad de piloter un adaptateur USB-s\xE9rie. Exportez le G-code (onglet Aper\xE7u) et lancez-le depuis OpenBuilds Control sur l\u2019ordinateur."
          : "Ce navigateur ne peut pas piloter un appareil USB. Sur Android, ouvrez ArcLibre dans Chrome.";
  }
  function fe() {
    let e = vt.status,
      s = vt.connected,
      o = vt.job,
      l = s && vt.idle && !o,
      a = s ? Ui[e.state] || e.state : "D\xE9connect\xE9e";
    Z("#state").textContent = a;
    let u = (d) => (+d || 0).toLocaleString("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    ((Z("#wx").textContent = u(e.wpos[0])),
      (Z("#wy").textContent = u(e.wpos[1])),
      (Z("#mpos").textContent = s
        ? `Position machine X ${ct(e.mpos[0] || 0, 2)}, Y ${ct(e.mpos[1] || 0, 2)}`
        : ""),
      (Z("#torch").hidden = !e.torch),
      (Z("#alarm").hidden = !e.alarm),
      (Z("#alarm").textContent = e.alarm || ""),
      (Z("#btnConnect").hidden = s),
      (Z("#btnConnect").disabled = !li),
      (Z("#usbText").textContent = s ? "Machine connect\xE9e." : Yr()));
    for (let d of ["btnZero", "btnGoZero", "btnUnlock", "btnHome", "btnDisconnect"])
      Z(`#${d}`).disabled = !s || !!o;
    ((Z("#btnFrame").disabled = !l || !w.job || !w.job.stats.bounds),
      (Z("#btnStart").disabled = !l || !w.gcode),
      (Z("#btnPause").disabled = !o),
      (Z("#btnResume").disabled = !s),
      document.querySelectorAll("#pad button").forEach((d) => {
        d.disabled = !s || !!o;
      }),
      (Z("#fabStop").hidden = !o && !(s && (e.state === "Run" || e.state === "Jog"))));
    let p = Z("#chip");
    if (
      ((p.className = `chip${s ? " on" : ""}${s && (e.state === "Run" || o) ? " run" : ""}${s && e.state === "Alarm" ? " alarm" : ""}`),
      (Z("#chipText").textContent = s
        ? o
          ? `D\xE9coupe ${Math.round((100 * o.acked) / Math.max(o.total, 1))} %`
          : `${a}, X ${ct(e.wpos[0] || 0, 1)} Y ${ct(e.wpos[1] || 0, 1)}`
        : "Machine non connect\xE9e"),
      w.job && w.gcode)
    ) {
      let d = w.job.stats.bounds,
        h = w.gcode.split(`
`).length;
      Z("#jobInfo").textContent = o
        ? `Ligne ${o.acked} sur ${o.total}.${o.error ? ` ${o.error}.` : ""}`
        : `${w.sheet.names()} : ${h} lignes, environ ${ai(w.job.stats.time)}.${d ? ` Zone de travail de X ${ct(d[0])} \xE0 ${ct(d[2])} et de Y ${ct(d[1])} \xE0 ${ct(d[3])} mm depuis l\u2019origine.` : ""}`;
    } else Z("#jobInfo").textContent = "Ajoutez une pi\xE8ce pour pr\xE9parer la d\xE9coupe.";
    ((Z("#jobBar").style.width = o ? `${(100 * o.acked) / Math.max(o.total, 1)}%` : "0"), jobGuard());
  }
  vt.on((e, s) => {
    (e === "line"
      ? Pe(s)
      : e === "connected"
        ? (Pe(`Connect\xE9e : ${s}`), yt("Machine connect\xE9e."))
        : e === "disconnected"
          ? (Pe("D\xE9connect\xE9e"), s && yt(s, "err"))
          : e === "alarm"
            ? yt(s, "err")
            : e === "banner"
              ? Pe(s)
              : e === "job" && s.done
                ? yt(
                    s.error ? `D\xE9coupe interrompue : ${s.error}` : "D\xE9coupe termin\xE9e.",
                    s.error ? "err" : "",
                  )
                : e === "job" &&
                  s.error &&
                  yt(`${s.error}. Machine en pause : reprenez ou arr\xEAtez.`, "err"),
      fe());
  });
  Z("#btnConnect").addEventListener("click", async () => {
    try {
      await vt.connect(await zi());
    } catch (e) {
      e.name !== "NotFoundError" && yt(e.message, "err");
    }
    fe();
  });
  Z("#btnDisconnect").addEventListener("click", () => vt.disconnect().then(fe));
  var Ie = (e, s) => e.then(() => s && yt(s)).catch((o) => yt(o.message, "err"));
  Z("#btnZero").addEventListener("click", () =>
    Ie(vt.setOrigin(), "Origine d\xE9finie \xE0 la position actuelle."),
  );
  Z("#btnGoZero").addEventListener("click", () => Ie(vt.goOrigin(+H.jog_feed)));
  Z("#btnUnlock").addEventListener("click", () => Ie(vt.unlock(), "Machine d\xE9verrouill\xE9e."));
  Z("#btnHome").addEventListener("click", () => Ie(vt.home(), "Prise d\u2019origine termin\xE9e."));
  Z("#btnFrame").addEventListener("click", () => {
    w.job &&
      w.job.stats.bounds &&
      (vt.frame(w.job.stats.bounds, +H.jog_feed), yt("Parcours de l\u2019encombrement, torche \xE9teinte."));
  });
  Z("#btnPause").addEventListener("click", () => vt.hold());
  Z("#btnResume").addEventListener("click", () => vt.resume());
  var Dr = () => {
    (vt.stop(),
      yt("Arr\xEAt demand\xE9 : torche coup\xE9e. D\xE9verrouillez la machine avant de repartir.", "warn"));
  };
  Z("#fabStop").addEventListener("click", Dr);
  Z("#btnStart").addEventListener("click", async () => {
    if (!w.gcode) return;
    if (w.overlaps.size) {
      yt("Des pi\xE8ces se chevauchent : corrigez le placement avant de d\xE9couper.", "err");
      return;
    }
    let e = w.job.stats;
    (await We({
      title: "Lancer la d\xE9coupe",
      build: () =>
        W(
          "div",
          {},
          W("p", {
            text: `${w.sheet.names()} : ${ct(e.cutLen / 1e3, 2)} m de coupe, ${e.pierces} per\xE7ages, environ ${ai(e.time)}.`,
          }),
          W("p", {
            class: "note",
            text: "Avant de lancer : l\u2019origine est r\xE9gl\xE9e sur le coin de la t\xF4le, la pince de masse est sur la t\xF4le, la torche est \xE0 la bonne hauteur et vous avez de quoi l\u2019arr\xEAter.",
          }),
        ),
      actions: [
        { label: "Annuler", value: null },
        { label: "Lancer", kind: "primary", value: "go" },
      ],
    })) === "go" && (vt.startJob(w.gcode), fe());
  });
  var Br = [[-1, 1], [0, 1], [1, 1], [-1, 0], null, [1, 0], [-1, -1], [0, -1], [1, -1]],
    kr = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V5 M6 11l6-6 6 6"/></svg>';
  Br.forEach((e) => {
    if (!e) {
      let p = W(
        "button",
        { type: "button", class: "center", "aria-label": "Aller \xE0 l\u2019origine" },
        "0",
      );
      (p.addEventListener("click", () => Ie(vt.goOrigin(+H.jog_feed))), Z("#pad").append(p));
      return;
    }
    let s = (Math.atan2(e[0], e[1]) * 180) / Math.PI,
      o = W("button", {
        type: "button",
        "aria-label":
          `D\xE9placer ${e[1] > 0 ? "vers l\u2019arri\xE8re" : e[1] < 0 ? "vers l\u2019avant" : ""} ${e[0] > 0 ? "\xE0 droite" : e[0] < 0 ? "\xE0 gauche" : ""}`.trim(),
      });
    ((o.innerHTML = kr), (o.querySelector("svg").style.transform = `rotate(${s}deg)`));
    let l = 0,
      a = !1;
    o.addEventListener("pointerdown", (p) => {
      o.setPointerCapture(p.pointerId);
      let d = +H.jog_step,
        h = Math.hypot(e[0], e[1]);
      (vt.jog((e[0] / h) * d, (e[1] / h) * d, +H.jog_feed),
        (a = !1),
        (l = setTimeout(() => {
          ((a = !0), o.classList.add("held"), vt.jog((e[0] / h) * 1e3, (e[1] / h) * 1e3, +H.jog_feed));
        }, 450)));
    });
    let u = () => {
      (clearTimeout(l), a && vt.jogCancel(), (a = !1), o.classList.remove("held"));
    };
    (o.addEventListener("pointerup", u), o.addEventListener("pointercancel", u), Z("#pad").append(o));
  });
  function on(e, s, o, l) {
    let a = Z(e),
      u = () =>
        a
          .querySelectorAll("button")
          .forEach((p) => p.setAttribute("aria-pressed", String(+p.dataset.v == +H[s])));
    for (let p of o) {
      let d = W("button", { type: "button", "data-v": p }, l(p));
      (d.addEventListener("click", () => {
        ((H[s] = p), zt(), u());
      }),
        a.append(d));
    }
    u();
  }
  on("#steps", "jog_step", [0.1, 1, 10, 100], (e) => ct(e, 1));
  on("#speeds", "jog_feed", [1e3, 3e3, 6e3], (e) => ct(e, 0));
  Z("#consoleForm").addEventListener("submit", (e) => {
    e.preventDefault();
    let s = Z("#consoleInput").value.trim();
    !s ||
      !vt.connected ||
      (["?", "!", "~"].includes(s) ? vt.realtime(s) : (Pe(`> ${s}`), vt.enqueue(s)),
      (Z("#consoleInput").value = ""));
  });
  window.addEventListener("beforeunload", (e) => {
    vt.job && (e.preventDefault(), (e.returnValue = ""));
  });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      (document.querySelectorAll("#pad button.held").forEach(() => vt.jogCancel()), (guard.hiddenAt = Date.now()));
    } else if (vt.job) {
      // La veille est levee quand la page est masquee : on la reprend et on previent l'utilisateur.
      (wakeAcquire(),
        Date.now() - guard.hiddenAt > 1500 &&
          yt("L’application était masquée pendant la découpe : vérifiez la machine.", "warn"));
    }
  });
  applyMat(curMat());
  Ir();
  Or();
  ge();
  Vi();
  fe();
  St();
  Z("#appVersion").textContent = `v${gr}`;
  if ("serviceWorker" in navigator && location.protocol === "https:") {
    // Nouvelle version : le service worker se remplace tout seul, puis la page se recharge
    // (apres la decoupe s'il y en a une en cours).
    let hadController = !!navigator.serviceWorker.controller;
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (!hadController) {
        hadController = !0;
        return;
      }
      ((guard.pending = !0),
        vt.job
          ? yt("Nouvelle version prête : elle s’installera à la fin de la découpe.", "warn")
          : reloadIfPending());
    });
    navigator.serviceWorker
      .register("sw.js")
      .then((reg) => {
        let check = () => reg.update().catch(() => {});
        (document.addEventListener("visibilitychange", () => {
          document.hidden || check();
        }),
          setInterval(check, 30 * 60 * 1000));
      })
      .catch(() => {});
  }
  window.__arclibre = {
    st: w,
    cfg: H,
    showTab: qe,
    recompute: $e,
    fit: Ce,
    organize: Ki,
    partMenu: hi,
    sizeDialog: ui,
    scanSession: tn,
    machine: vt,
    toGray: Ke,
    async importText(e, s, o = { sx: 1, sy: 1 }) {
      let l = w.sheet.addDrawing(fi(e, s), e, ae(), +H.nest_spacing, o);
      ((l.src = { kind: "file", text: s }), Zt(!0), $e());
    },
  };
})();
