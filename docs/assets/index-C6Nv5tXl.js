var Ux = Object.defineProperty;
var jx = (t, r, l) =>
  r in t ? Ux(t, r, { enumerable: !0, configurable: !0, writable: !0, value: l }) : (t[r] = l);
var Pi = (t, r, l) => jx(t, typeof r != 'symbol' ? r + '' : r, l);
function Lx(t, r) {
  for (var l = 0; l < r.length; l++) {
    const i = r[l];
    if (typeof i != 'string' && !Array.isArray(i)) {
      for (const s in i)
        if (s !== 'default' && !(s in t)) {
          const u = Object.getOwnPropertyDescriptor(i, s);
          u && Object.defineProperty(t, s, u.get ? u : { enumerable: !0, get: () => i[s] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }));
}
(function () {
  const r = document.createElement('link').relList;
  if (r && r.supports && r.supports('modulepreload')) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) i(s);
  new MutationObserver((s) => {
    for (const u of s)
      if (u.type === 'childList')
        for (const f of u.addedNodes) f.tagName === 'LINK' && f.rel === 'modulepreload' && i(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function l(s) {
    const u = {};
    return (
      s.integrity && (u.integrity = s.integrity),
      s.referrerPolicy && (u.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === 'use-credentials'
        ? (u.credentials = 'include')
        : s.crossOrigin === 'anonymous'
          ? (u.credentials = 'omit')
          : (u.credentials = 'same-origin'),
      u
    );
  }
  function i(s) {
    if (s.ep) return;
    s.ep = !0;
    const u = l(s);
    fetch(s.href, u);
  }
})();
function wv(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, 'default') ? t.default : t;
}
var fd = { exports: {} },
  qi = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var kg;
function Hx() {
  if (kg) return qi;
  kg = 1;
  var t = Symbol.for('react.transitional.element'),
    r = Symbol.for('react.fragment');
  function l(i, s, u) {
    var f = null;
    if ((u !== void 0 && (f = '' + u), s.key !== void 0 && (f = '' + s.key), 'key' in s)) {
      u = {};
      for (var p in s) p !== 'key' && (u[p] = s[p]);
    } else u = s;
    return (s = u.ref), { $$typeof: t, type: i, key: f, ref: s !== void 0 ? s : null, props: u };
  }
  return (qi.Fragment = r), (qi.jsx = l), (qi.jsxs = l), qi;
}
var Ug;
function Px() {
  return Ug || ((Ug = 1), (fd.exports = Hx())), fd.exports;
}
var L = Px(),
  dd = { exports: {} },
  Ae = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jg;
function qx() {
  if (jg) return Ae;
  jg = 1;
  var t = Symbol.for('react.transitional.element'),
    r = Symbol.for('react.portal'),
    l = Symbol.for('react.fragment'),
    i = Symbol.for('react.strict_mode'),
    s = Symbol.for('react.profiler'),
    u = Symbol.for('react.consumer'),
    f = Symbol.for('react.context'),
    p = Symbol.for('react.forward_ref'),
    m = Symbol.for('react.suspense'),
    h = Symbol.for('react.memo'),
    y = Symbol.for('react.lazy'),
    v = Symbol.iterator;
  function b(_) {
    return _ === null || typeof _ != 'object'
      ? null
      : ((_ = (v && _[v]) || _['@@iterator']), typeof _ == 'function' ? _ : null);
  }
  var w = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    S = Object.assign,
    A = {};
  function O(_, K, se) {
    (this.props = _), (this.context = K), (this.refs = A), (this.updater = se || w);
  }
  (O.prototype.isReactComponent = {}),
    (O.prototype.setState = function (_, K) {
      if (typeof _ != 'object' && typeof _ != 'function' && _ != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.',
        );
      this.updater.enqueueSetState(this, _, K, 'setState');
    }),
    (O.prototype.forceUpdate = function (_) {
      this.updater.enqueueForceUpdate(this, _, 'forceUpdate');
    });
  function M() {}
  M.prototype = O.prototype;
  function z(_, K, se) {
    (this.props = _), (this.context = K), (this.refs = A), (this.updater = se || w);
  }
  var E = (z.prototype = new M());
  (E.constructor = z), S(E, O.prototype), (E.isPureReactComponent = !0);
  var D = Array.isArray,
    R = { H: null, A: null, T: null, S: null },
    U = Object.prototype.hasOwnProperty;
  function q(_, K, se, ue, le, pe) {
    return (
      (se = pe.ref), { $$typeof: t, type: _, key: K, ref: se !== void 0 ? se : null, props: pe }
    );
  }
  function V(_, K) {
    return q(_.type, K, void 0, void 0, void 0, _.props);
  }
  function G(_) {
    return typeof _ == 'object' && _ !== null && _.$$typeof === t;
  }
  function x(_) {
    var K = { '=': '=0', ':': '=2' };
    return (
      '$' +
      _.replace(/[=:]/g, function (se) {
        return K[se];
      })
    );
  }
  var P = /\/+/g;
  function I(_, K) {
    return typeof _ == 'object' && _ !== null && _.key != null ? x('' + _.key) : K.toString(36);
  }
  function ee() {}
  function ne(_) {
    switch (_.status) {
      case 'fulfilled':
        return _.value;
      case 'rejected':
        throw _.reason;
      default:
        switch (
          (typeof _.status == 'string'
            ? _.then(ee, ee)
            : ((_.status = 'pending'),
              _.then(
                function (K) {
                  _.status === 'pending' && ((_.status = 'fulfilled'), (_.value = K));
                },
                function (K) {
                  _.status === 'pending' && ((_.status = 'rejected'), (_.reason = K));
                },
              )),
          _.status)
        ) {
          case 'fulfilled':
            return _.value;
          case 'rejected':
            throw _.reason;
        }
    }
    throw _;
  }
  function Z(_, K, se, ue, le) {
    var pe = typeof _;
    (pe === 'undefined' || pe === 'boolean') && (_ = null);
    var ge = !1;
    if (_ === null) ge = !0;
    else
      switch (pe) {
        case 'bigint':
        case 'string':
        case 'number':
          ge = !0;
          break;
        case 'object':
          switch (_.$$typeof) {
            case t:
            case r:
              ge = !0;
              break;
            case y:
              return (ge = _._init), Z(ge(_._payload), K, se, ue, le);
          }
      }
    if (ge)
      return (
        (le = le(_)),
        (ge = ue === '' ? '.' + I(_, 0) : ue),
        D(le)
          ? ((se = ''),
            ge != null && (se = ge.replace(P, '$&/') + '/'),
            Z(le, K, se, '', function (de) {
              return de;
            }))
          : le != null &&
            (G(le) &&
              (le = V(
                le,
                se +
                  (le.key == null || (_ && _.key === le.key)
                    ? ''
                    : ('' + le.key).replace(P, '$&/') + '/') +
                  ge,
              )),
            K.push(le)),
        1
      );
    ge = 0;
    var Se = ue === '' ? '.' : ue + ':';
    if (D(_))
      for (var ae = 0; ae < _.length; ae++)
        (ue = _[ae]), (pe = Se + I(ue, ae)), (ge += Z(ue, K, se, pe, le));
    else if (((ae = b(_)), typeof ae == 'function'))
      for (_ = ae.call(_), ae = 0; !(ue = _.next()).done; )
        (ue = ue.value), (pe = Se + I(ue, ae++)), (ge += Z(ue, K, se, pe, le));
    else if (pe === 'object') {
      if (typeof _.then == 'function') return Z(ne(_), K, se, ue, le);
      throw (
        ((K = String(_)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (K === '[object Object]' ? 'object with keys {' + Object.keys(_).join(', ') + '}' : K) +
            '). If you meant to render a collection of children, use an array instead.',
        ))
      );
    }
    return ge;
  }
  function j(_, K, se) {
    if (_ == null) return _;
    var ue = [],
      le = 0;
    return (
      Z(_, ue, '', '', function (pe) {
        return K.call(se, pe, le++);
      }),
      ue
    );
  }
  function te(_) {
    if (_._status === -1) {
      var K = _._result;
      (K = K()),
        K.then(
          function (se) {
            (_._status === 0 || _._status === -1) && ((_._status = 1), (_._result = se));
          },
          function (se) {
            (_._status === 0 || _._status === -1) && ((_._status = 2), (_._result = se));
          },
        ),
        _._status === -1 && ((_._status = 0), (_._result = K));
    }
    if (_._status === 1) return _._result.default;
    throw _._result;
  }
  var ie =
    typeof reportError == 'function'
      ? reportError
      : function (_) {
          if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
            var K = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof _ == 'object' && _ !== null && typeof _.message == 'string'
                  ? String(_.message)
                  : String(_),
              error: _,
            });
            if (!window.dispatchEvent(K)) return;
          } else if (typeof process == 'object' && typeof process.emit == 'function') {
            process.emit('uncaughtException', _);
            return;
          }
          console.error(_);
        };
  function oe() {}
  return (
    (Ae.Children = {
      map: j,
      forEach: function (_, K, se) {
        j(
          _,
          function () {
            K.apply(this, arguments);
          },
          se,
        );
      },
      count: function (_) {
        var K = 0;
        return (
          j(_, function () {
            K++;
          }),
          K
        );
      },
      toArray: function (_) {
        return (
          j(_, function (K) {
            return K;
          }) || []
        );
      },
      only: function (_) {
        if (!G(_))
          throw Error('React.Children.only expected to receive a single React element child.');
        return _;
      },
    }),
    (Ae.Component = O),
    (Ae.Fragment = l),
    (Ae.Profiler = s),
    (Ae.PureComponent = z),
    (Ae.StrictMode = i),
    (Ae.Suspense = m),
    (Ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = R),
    (Ae.act = function () {
      throw Error('act(...) is not supported in production builds of React.');
    }),
    (Ae.cache = function (_) {
      return function () {
        return _.apply(null, arguments);
      };
    }),
    (Ae.cloneElement = function (_, K, se) {
      if (_ == null) throw Error('The argument must be a React element, but you passed ' + _ + '.');
      var ue = S({}, _.props),
        le = _.key,
        pe = void 0;
      if (K != null)
        for (ge in (K.ref !== void 0 && (pe = void 0), K.key !== void 0 && (le = '' + K.key), K))
          !U.call(K, ge) ||
            ge === 'key' ||
            ge === '__self' ||
            ge === '__source' ||
            (ge === 'ref' && K.ref === void 0) ||
            (ue[ge] = K[ge]);
      var ge = arguments.length - 2;
      if (ge === 1) ue.children = se;
      else if (1 < ge) {
        for (var Se = Array(ge), ae = 0; ae < ge; ae++) Se[ae] = arguments[ae + 2];
        ue.children = Se;
      }
      return q(_.type, le, void 0, void 0, pe, ue);
    }),
    (Ae.createContext = function (_) {
      return (
        (_ = {
          $$typeof: f,
          _currentValue: _,
          _currentValue2: _,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (_.Provider = _),
        (_.Consumer = { $$typeof: u, _context: _ }),
        _
      );
    }),
    (Ae.createElement = function (_, K, se) {
      var ue,
        le = {},
        pe = null;
      if (K != null)
        for (ue in (K.key !== void 0 && (pe = '' + K.key), K))
          U.call(K, ue) && ue !== 'key' && ue !== '__self' && ue !== '__source' && (le[ue] = K[ue]);
      var ge = arguments.length - 2;
      if (ge === 1) le.children = se;
      else if (1 < ge) {
        for (var Se = Array(ge), ae = 0; ae < ge; ae++) Se[ae] = arguments[ae + 2];
        le.children = Se;
      }
      if (_ && _.defaultProps)
        for (ue in ((ge = _.defaultProps), ge)) le[ue] === void 0 && (le[ue] = ge[ue]);
      return q(_, pe, void 0, void 0, null, le);
    }),
    (Ae.createRef = function () {
      return { current: null };
    }),
    (Ae.forwardRef = function (_) {
      return { $$typeof: p, render: _ };
    }),
    (Ae.isValidElement = G),
    (Ae.lazy = function (_) {
      return { $$typeof: y, _payload: { _status: -1, _result: _ }, _init: te };
    }),
    (Ae.memo = function (_, K) {
      return { $$typeof: h, type: _, compare: K === void 0 ? null : K };
    }),
    (Ae.startTransition = function (_) {
      var K = R.T,
        se = {};
      R.T = se;
      try {
        var ue = _(),
          le = R.S;
        le !== null && le(se, ue),
          typeof ue == 'object' && ue !== null && typeof ue.then == 'function' && ue.then(oe, ie);
      } catch (pe) {
        ie(pe);
      } finally {
        R.T = K;
      }
    }),
    (Ae.unstable_useCacheRefresh = function () {
      return R.H.useCacheRefresh();
    }),
    (Ae.use = function (_) {
      return R.H.use(_);
    }),
    (Ae.useActionState = function (_, K, se) {
      return R.H.useActionState(_, K, se);
    }),
    (Ae.useCallback = function (_, K) {
      return R.H.useCallback(_, K);
    }),
    (Ae.useContext = function (_) {
      return R.H.useContext(_);
    }),
    (Ae.useDebugValue = function () {}),
    (Ae.useDeferredValue = function (_, K) {
      return R.H.useDeferredValue(_, K);
    }),
    (Ae.useEffect = function (_, K) {
      return R.H.useEffect(_, K);
    }),
    (Ae.useId = function () {
      return R.H.useId();
    }),
    (Ae.useImperativeHandle = function (_, K, se) {
      return R.H.useImperativeHandle(_, K, se);
    }),
    (Ae.useInsertionEffect = function (_, K) {
      return R.H.useInsertionEffect(_, K);
    }),
    (Ae.useLayoutEffect = function (_, K) {
      return R.H.useLayoutEffect(_, K);
    }),
    (Ae.useMemo = function (_, K) {
      return R.H.useMemo(_, K);
    }),
    (Ae.useOptimistic = function (_, K) {
      return R.H.useOptimistic(_, K);
    }),
    (Ae.useReducer = function (_, K, se) {
      return R.H.useReducer(_, K, se);
    }),
    (Ae.useRef = function (_) {
      return R.H.useRef(_);
    }),
    (Ae.useState = function (_) {
      return R.H.useState(_);
    }),
    (Ae.useSyncExternalStore = function (_, K, se) {
      return R.H.useSyncExternalStore(_, K, se);
    }),
    (Ae.useTransition = function () {
      return R.H.useTransition();
    }),
    (Ae.version = '19.0.0'),
    Ae
  );
}
var Lg;
function fp() {
  return Lg || ((Lg = 1), (dd.exports = qx())), dd.exports;
}
var C = fp();
const Zn = wv(C),
  Ud = Lx({ __proto__: null, default: Zn }, [C]);
var pd = { exports: {} },
  Fi = {},
  hd = { exports: {} },
  md = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Hg;
function Fx() {
  return (
    Hg ||
      ((Hg = 1),
      (function (t) {
        function r(j, te) {
          var ie = j.length;
          j.push(te);
          e: for (; 0 < ie; ) {
            var oe = (ie - 1) >>> 1,
              _ = j[oe];
            if (0 < s(_, te)) (j[oe] = te), (j[ie] = _), (ie = oe);
            else break e;
          }
        }
        function l(j) {
          return j.length === 0 ? null : j[0];
        }
        function i(j) {
          if (j.length === 0) return null;
          var te = j[0],
            ie = j.pop();
          if (ie !== te) {
            j[0] = ie;
            e: for (var oe = 0, _ = j.length, K = _ >>> 1; oe < K; ) {
              var se = 2 * (oe + 1) - 1,
                ue = j[se],
                le = se + 1,
                pe = j[le];
              if (0 > s(ue, ie))
                le < _ && 0 > s(pe, ue)
                  ? ((j[oe] = pe), (j[le] = ie), (oe = le))
                  : ((j[oe] = ue), (j[se] = ie), (oe = se));
              else if (le < _ && 0 > s(pe, ie)) (j[oe] = pe), (j[le] = ie), (oe = le);
              else break e;
            }
          }
          return te;
        }
        function s(j, te) {
          var ie = j.sortIndex - te.sortIndex;
          return ie !== 0 ? ie : j.id - te.id;
        }
        if (
          ((t.unstable_now = void 0),
          typeof performance == 'object' && typeof performance.now == 'function')
        ) {
          var u = performance;
          t.unstable_now = function () {
            return u.now();
          };
        } else {
          var f = Date,
            p = f.now();
          t.unstable_now = function () {
            return f.now() - p;
          };
        }
        var m = [],
          h = [],
          y = 1,
          v = null,
          b = 3,
          w = !1,
          S = !1,
          A = !1,
          O = typeof setTimeout == 'function' ? setTimeout : null,
          M = typeof clearTimeout == 'function' ? clearTimeout : null,
          z = typeof setImmediate < 'u' ? setImmediate : null;
        function E(j) {
          for (var te = l(h); te !== null; ) {
            if (te.callback === null) i(h);
            else if (te.startTime <= j) i(h), (te.sortIndex = te.expirationTime), r(m, te);
            else break;
            te = l(h);
          }
        }
        function D(j) {
          if (((A = !1), E(j), !S))
            if (l(m) !== null) (S = !0), ne();
            else {
              var te = l(h);
              te !== null && Z(D, te.startTime - j);
            }
        }
        var R = !1,
          U = -1,
          q = 5,
          V = -1;
        function G() {
          return !(t.unstable_now() - V < q);
        }
        function x() {
          if (R) {
            var j = t.unstable_now();
            V = j;
            var te = !0;
            try {
              e: {
                (S = !1), A && ((A = !1), M(U), (U = -1)), (w = !0);
                var ie = b;
                try {
                  t: {
                    for (E(j), v = l(m); v !== null && !(v.expirationTime > j && G()); ) {
                      var oe = v.callback;
                      if (typeof oe == 'function') {
                        (v.callback = null), (b = v.priorityLevel);
                        var _ = oe(v.expirationTime <= j);
                        if (((j = t.unstable_now()), typeof _ == 'function')) {
                          (v.callback = _), E(j), (te = !0);
                          break t;
                        }
                        v === l(m) && i(m), E(j);
                      } else i(m);
                      v = l(m);
                    }
                    if (v !== null) te = !0;
                    else {
                      var K = l(h);
                      K !== null && Z(D, K.startTime - j), (te = !1);
                    }
                  }
                  break e;
                } finally {
                  (v = null), (b = ie), (w = !1);
                }
                te = void 0;
              }
            } finally {
              te ? P() : (R = !1);
            }
          }
        }
        var P;
        if (typeof z == 'function')
          P = function () {
            z(x);
          };
        else if (typeof MessageChannel < 'u') {
          var I = new MessageChannel(),
            ee = I.port2;
          (I.port1.onmessage = x),
            (P = function () {
              ee.postMessage(null);
            });
        } else
          P = function () {
            O(x, 0);
          };
        function ne() {
          R || ((R = !0), P());
        }
        function Z(j, te) {
          U = O(function () {
            j(t.unstable_now());
          }, te);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (j) {
            j.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            S || w || ((S = !0), ne());
          }),
          (t.unstable_forceFrameRate = function (j) {
            0 > j || 125 < j
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
                )
              : (q = 0 < j ? Math.floor(1e3 / j) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return b;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return l(m);
          }),
          (t.unstable_next = function (j) {
            switch (b) {
              case 1:
              case 2:
              case 3:
                var te = 3;
                break;
              default:
                te = b;
            }
            var ie = b;
            b = te;
            try {
              return j();
            } finally {
              b = ie;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (j, te) {
            switch (j) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                j = 3;
            }
            var ie = b;
            b = j;
            try {
              return te();
            } finally {
              b = ie;
            }
          }),
          (t.unstable_scheduleCallback = function (j, te, ie) {
            var oe = t.unstable_now();
            switch (
              (typeof ie == 'object' && ie !== null
                ? ((ie = ie.delay), (ie = typeof ie == 'number' && 0 < ie ? oe + ie : oe))
                : (ie = oe),
              j)
            ) {
              case 1:
                var _ = -1;
                break;
              case 2:
                _ = 250;
                break;
              case 5:
                _ = 1073741823;
                break;
              case 4:
                _ = 1e4;
                break;
              default:
                _ = 5e3;
            }
            return (
              (_ = ie + _),
              (j = {
                id: y++,
                callback: te,
                priorityLevel: j,
                startTime: ie,
                expirationTime: _,
                sortIndex: -1,
              }),
              ie > oe
                ? ((j.sortIndex = ie),
                  r(h, j),
                  l(m) === null && j === l(h) && (A ? (M(U), (U = -1)) : (A = !0), Z(D, ie - oe)))
                : ((j.sortIndex = _), r(m, j), S || w || ((S = !0), ne())),
              j
            );
          }),
          (t.unstable_shouldYield = G),
          (t.unstable_wrapCallback = function (j) {
            var te = b;
            return function () {
              var ie = b;
              b = te;
              try {
                return j.apply(this, arguments);
              } finally {
                b = ie;
              }
            };
          });
      })(md)),
    md
  );
}
var Pg;
function Gx() {
  return Pg || ((Pg = 1), (hd.exports = Fx())), hd.exports;
}
var gd = { exports: {} },
  Ft = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qg;
function Vx() {
  if (qg) return Ft;
  qg = 1;
  var t = fp();
  function r(m) {
    var h = 'https://react.dev/errors/' + m;
    if (1 < arguments.length) {
      h += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var y = 2; y < arguments.length; y++) h += '&args[]=' + encodeURIComponent(arguments[y]);
    }
    return (
      'Minified React error #' +
      m +
      '; visit ' +
      h +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function l() {}
  var i = {
      d: {
        f: l,
        r: function () {
          throw Error(r(522));
        },
        D: l,
        C: l,
        L: l,
        m: l,
        X: l,
        S: l,
        M: l,
      },
      p: 0,
      findDOMNode: null,
    },
    s = Symbol.for('react.portal');
  function u(m, h, y) {
    var v = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: v == null ? null : '' + v,
      children: m,
      containerInfo: h,
      implementation: y,
    };
  }
  var f = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(m, h) {
    if (m === 'font') return '';
    if (typeof h == 'string') return h === 'use-credentials' ? h : '';
  }
  return (
    (Ft.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i),
    (Ft.createPortal = function (m, h) {
      var y = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!h || (h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11)) throw Error(r(299));
      return u(m, h, null, y);
    }),
    (Ft.flushSync = function (m) {
      var h = f.T,
        y = i.p;
      try {
        if (((f.T = null), (i.p = 2), m)) return m();
      } finally {
        (f.T = h), (i.p = y), i.d.f();
      }
    }),
    (Ft.preconnect = function (m, h) {
      typeof m == 'string' &&
        (h
          ? ((h = h.crossOrigin),
            (h = typeof h == 'string' ? (h === 'use-credentials' ? h : '') : void 0))
          : (h = null),
        i.d.C(m, h));
    }),
    (Ft.prefetchDNS = function (m) {
      typeof m == 'string' && i.d.D(m);
    }),
    (Ft.preinit = function (m, h) {
      if (typeof m == 'string' && h && typeof h.as == 'string') {
        var y = h.as,
          v = p(y, h.crossOrigin),
          b = typeof h.integrity == 'string' ? h.integrity : void 0,
          w = typeof h.fetchPriority == 'string' ? h.fetchPriority : void 0;
        y === 'style'
          ? i.d.S(m, typeof h.precedence == 'string' ? h.precedence : void 0, {
              crossOrigin: v,
              integrity: b,
              fetchPriority: w,
            })
          : y === 'script' &&
            i.d.X(m, {
              crossOrigin: v,
              integrity: b,
              fetchPriority: w,
              nonce: typeof h.nonce == 'string' ? h.nonce : void 0,
            });
      }
    }),
    (Ft.preinitModule = function (m, h) {
      if (typeof m == 'string')
        if (typeof h == 'object' && h !== null) {
          if (h.as == null || h.as === 'script') {
            var y = p(h.as, h.crossOrigin);
            i.d.M(m, {
              crossOrigin: y,
              integrity: typeof h.integrity == 'string' ? h.integrity : void 0,
              nonce: typeof h.nonce == 'string' ? h.nonce : void 0,
            });
          }
        } else h == null && i.d.M(m);
    }),
    (Ft.preload = function (m, h) {
      if (typeof m == 'string' && typeof h == 'object' && h !== null && typeof h.as == 'string') {
        var y = h.as,
          v = p(y, h.crossOrigin);
        i.d.L(m, y, {
          crossOrigin: v,
          integrity: typeof h.integrity == 'string' ? h.integrity : void 0,
          nonce: typeof h.nonce == 'string' ? h.nonce : void 0,
          type: typeof h.type == 'string' ? h.type : void 0,
          fetchPriority: typeof h.fetchPriority == 'string' ? h.fetchPriority : void 0,
          referrerPolicy: typeof h.referrerPolicy == 'string' ? h.referrerPolicy : void 0,
          imageSrcSet: typeof h.imageSrcSet == 'string' ? h.imageSrcSet : void 0,
          imageSizes: typeof h.imageSizes == 'string' ? h.imageSizes : void 0,
          media: typeof h.media == 'string' ? h.media : void 0,
        });
      }
    }),
    (Ft.preloadModule = function (m, h) {
      if (typeof m == 'string')
        if (h) {
          var y = p(h.as, h.crossOrigin);
          i.d.m(m, {
            as: typeof h.as == 'string' && h.as !== 'script' ? h.as : void 0,
            crossOrigin: y,
            integrity: typeof h.integrity == 'string' ? h.integrity : void 0,
          });
        } else i.d.m(m);
    }),
    (Ft.requestFormReset = function (m) {
      i.d.r(m);
    }),
    (Ft.unstable_batchedUpdates = function (m, h) {
      return m(h);
    }),
    (Ft.useFormState = function (m, h, y) {
      return f.H.useFormState(m, h, y);
    }),
    (Ft.useFormStatus = function () {
      return f.H.useHostTransitionStatus();
    }),
    (Ft.version = '19.0.0'),
    Ft
  );
}
var Fg;
function Av() {
  if (Fg) return gd.exports;
  Fg = 1;
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (r) {
        console.error(r);
      }
  }
  return t(), (gd.exports = Vx()), gd.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gg;
function Yx() {
  if (Gg) return Fi;
  Gg = 1;
  var t = Gx(),
    r = fp(),
    l = Av();
  function i(e) {
    var n = 'https://react.dev/errors/' + e;
    if (1 < arguments.length) {
      n += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++) n += '&args[]=' + encodeURIComponent(arguments[a]);
    }
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      n +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function s(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  var u = Symbol.for('react.element'),
    f = Symbol.for('react.transitional.element'),
    p = Symbol.for('react.portal'),
    m = Symbol.for('react.fragment'),
    h = Symbol.for('react.strict_mode'),
    y = Symbol.for('react.profiler'),
    v = Symbol.for('react.provider'),
    b = Symbol.for('react.consumer'),
    w = Symbol.for('react.context'),
    S = Symbol.for('react.forward_ref'),
    A = Symbol.for('react.suspense'),
    O = Symbol.for('react.suspense_list'),
    M = Symbol.for('react.memo'),
    z = Symbol.for('react.lazy'),
    E = Symbol.for('react.offscreen'),
    D = Symbol.for('react.memo_cache_sentinel'),
    R = Symbol.iterator;
  function U(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (R && e[R]) || e['@@iterator']), typeof e == 'function' ? e : null);
  }
  var q = Symbol.for('react.client.reference');
  function V(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.$$typeof === q ? null : e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case m:
        return 'Fragment';
      case p:
        return 'Portal';
      case y:
        return 'Profiler';
      case h:
        return 'StrictMode';
      case A:
        return 'Suspense';
      case O:
        return 'SuspenseList';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case w:
          return (e.displayName || 'Context') + '.Provider';
        case b:
          return (e._context.displayName || 'Context') + '.Consumer';
        case S:
          var n = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = n.displayName || n.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case M:
          return (n = e.displayName || null), n !== null ? n : V(e.type) || 'Memo';
        case z:
          (n = e._payload), (e = e._init);
          try {
            return V(e(n));
          } catch {}
      }
    return null;
  }
  var G = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    x = Object.assign,
    P,
    I;
  function ee(e) {
    if (P === void 0)
      try {
        throw Error();
      } catch (a) {
        var n = a.stack.trim().match(/\n( *(at )?)/);
        (P = (n && n[1]) || ''),
          (I =
            -1 <
            a.stack.indexOf(`
    at`)
              ? ' (<anonymous>)'
              : -1 < a.stack.indexOf('@')
                ? '@unknown:0:0'
                : '');
      }
    return (
      `
` +
      P +
      e +
      I
    );
  }
  var ne = !1;
  function Z(e, n) {
    if (!e || ne) return '';
    ne = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var o = {
        DetermineComponentFrameRoot: function () {
          try {
            if (n) {
              var re = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(re.prototype, 'props', {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == 'object' && Reflect.construct)
              ) {
                try {
                  Reflect.construct(re, []);
                } catch (Q) {
                  var F = Q;
                }
                Reflect.construct(e, [], re);
              } else {
                try {
                  re.call();
                } catch (Q) {
                  F = Q;
                }
                e.call(re.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (Q) {
                F = Q;
              }
              (re = e()) && typeof re.catch == 'function' && re.catch(function () {});
            }
          } catch (Q) {
            if (Q && F && typeof Q.stack == 'string') return [Q.stack, F.stack];
          }
          return [null, null];
        },
      };
      o.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
      var c = Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot, 'name');
      c &&
        c.configurable &&
        Object.defineProperty(o.DetermineComponentFrameRoot, 'name', {
          value: 'DetermineComponentFrameRoot',
        });
      var d = o.DetermineComponentFrameRoot(),
        g = d[0],
        T = d[1];
      if (g && T) {
        var $ = g.split(`
`),
          N = T.split(`
`);
        for (c = o = 0; o < $.length && !$[o].includes('DetermineComponentFrameRoot'); ) o++;
        for (; c < N.length && !N[c].includes('DetermineComponentFrameRoot'); ) c++;
        if (o === $.length || c === N.length)
          for (o = $.length - 1, c = N.length - 1; 1 <= o && 0 <= c && $[o] !== N[c]; ) c--;
        for (; 1 <= o && 0 <= c; o--, c--)
          if ($[o] !== N[c]) {
            if (o !== 1 || c !== 1)
              do
                if ((o--, c--, 0 > c || $[o] !== N[c])) {
                  var W =
                    `
` + $[o].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      W.includes('<anonymous>') &&
                      (W = W.replace('<anonymous>', e.displayName)),
                    W
                  );
                }
              while (1 <= o && 0 <= c);
            break;
          }
      }
    } finally {
      (ne = !1), (Error.prepareStackTrace = a);
    }
    return (a = e ? e.displayName || e.name : '') ? ee(a) : '';
  }
  function j(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return ee(e.type);
      case 16:
        return ee('Lazy');
      case 13:
        return ee('Suspense');
      case 19:
        return ee('SuspenseList');
      case 0:
      case 15:
        return (e = Z(e.type, !1)), e;
      case 11:
        return (e = Z(e.type.render, !1)), e;
      case 1:
        return (e = Z(e.type, !0)), e;
      default:
        return '';
    }
  }
  function te(e) {
    try {
      var n = '';
      do (n += j(e)), (e = e.return);
      while (e);
      return n;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  function ie(e) {
    var n = e,
      a = e;
    if (e.alternate) for (; n.return; ) n = n.return;
    else {
      e = n;
      do (n = e), n.flags & 4098 && (a = n.return), (e = n.return);
      while (e);
    }
    return n.tag === 3 ? a : null;
  }
  function oe(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if ((n === null && ((e = e.alternate), e !== null && (n = e.memoizedState)), n !== null))
        return n.dehydrated;
    }
    return null;
  }
  function _(e) {
    if (ie(e) !== e) throw Error(i(188));
  }
  function K(e) {
    var n = e.alternate;
    if (!n) {
      if (((n = ie(e)), n === null)) throw Error(i(188));
      return n !== e ? null : e;
    }
    for (var a = e, o = n; ; ) {
      var c = a.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (((o = c.return), o !== null)) {
          a = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === a) return _(c), e;
          if (d === o) return _(c), n;
          d = d.sibling;
        }
        throw Error(i(188));
      }
      if (a.return !== o.return) (a = c), (o = d);
      else {
        for (var g = !1, T = c.child; T; ) {
          if (T === a) {
            (g = !0), (a = c), (o = d);
            break;
          }
          if (T === o) {
            (g = !0), (o = c), (a = d);
            break;
          }
          T = T.sibling;
        }
        if (!g) {
          for (T = d.child; T; ) {
            if (T === a) {
              (g = !0), (a = d), (o = c);
              break;
            }
            if (T === o) {
              (g = !0), (o = d), (a = c);
              break;
            }
            T = T.sibling;
          }
          if (!g) throw Error(i(189));
        }
      }
      if (a.alternate !== o) throw Error(i(190));
    }
    if (a.tag !== 3) throw Error(i(188));
    return a.stateNode.current === a ? e : n;
  }
  function se(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((n = se(e)), n !== null)) return n;
      e = e.sibling;
    }
    return null;
  }
  var ue = Array.isArray,
    le = l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    pe = { pending: !1, data: null, method: null, action: null },
    ge = [],
    Se = -1;
  function ae(e) {
    return { current: e };
  }
  function de(e) {
    0 > Se || ((e.current = ge[Se]), (ge[Se] = null), Se--);
  }
  function ce(e, n) {
    Se++, (ge[Se] = e.current), (e.current = n);
  }
  var be = ae(null),
    Te = ae(null),
    Fe = ae(null),
    Me = ae(null);
  function Ge(e, n) {
    switch ((ce(Fe, n), ce(Te, e), ce(be, null), (e = n.nodeType), e)) {
      case 9:
      case 11:
        n = (n = n.documentElement) && (n = n.namespaceURI) ? fg(n) : 0;
        break;
      default:
        if (((e = e === 8 ? n.parentNode : n), (n = e.tagName), (e = e.namespaceURI)))
          (e = fg(e)), (n = dg(e, n));
        else
          switch (n) {
            case 'svg':
              n = 1;
              break;
            case 'math':
              n = 2;
              break;
            default:
              n = 0;
          }
    }
    de(be), ce(be, n);
  }
  function xt() {
    de(be), de(Te), de(Fe);
  }
  function wt(e) {
    e.memoizedState !== null && ce(Me, e);
    var n = be.current,
      a = dg(n, e.type);
    n !== a && (ce(Te, e), ce(be, a));
  }
  function lt(e) {
    Te.current === e && (de(be), de(Te)), Me.current === e && (de(Me), (ki._currentValue = pe));
  }
  var It = Object.prototype.hasOwnProperty,
    Mt = t.unstable_scheduleCallback,
    it = t.unstable_cancelCallback,
    ve = t.unstable_shouldYield,
    Mr = t.unstable_requestPaint,
    Je = t.unstable_now,
    $r = t.unstable_getCurrentPriorityLevel,
    zr = t.unstable_ImmediatePriority,
    Dr = t.unstable_UserBlockingPriority,
    $n = t.unstable_NormalPriority,
    _r = t.unstable_LowPriority,
    Hn = t.unstable_IdlePriority,
    We = t.log,
    Br = t.unstable_setDisableYieldValue,
    zn = null,
    Ht = null;
  function xe(e) {
    if (Ht && typeof Ht.onCommitFiberRoot == 'function')
      try {
        Ht.onCommitFiberRoot(zn, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  function Be(e) {
    if ((typeof We == 'function' && Br(e), Ht && typeof Ht.setStrictMode == 'function'))
      try {
        Ht.setStrictMode(zn, e);
      } catch {}
  }
  var Le = Math.clz32 ? Math.clz32 : R1,
    Nr = Math.log,
    zo = Math.LN2;
  function R1(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Nr(e) / zo) | 0)) | 0;
  }
  var Do = 128,
    _o = 4194304;
  function sa(e) {
    var n = e & 42;
    if (n !== 0) return n;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194176;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Bo(e, n) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var o = 0,
      c = e.suspendedLanes,
      d = e.pingedLanes,
      g = e.warmLanes;
    e = e.finishedLanes !== 0;
    var T = a & 134217727;
    return (
      T !== 0
        ? ((a = T & ~c),
          a !== 0
            ? (o = sa(a))
            : ((d &= T), d !== 0 ? (o = sa(d)) : e || ((g = T & ~g), g !== 0 && (o = sa(g)))))
        : ((T = a & ~c),
          T !== 0
            ? (o = sa(T))
            : d !== 0
              ? (o = sa(d))
              : e || ((g = a & ~g), g !== 0 && (o = sa(g)))),
      o === 0
        ? 0
        : n !== 0 &&
            n !== o &&
            !(n & c) &&
            ((c = o & -o), (g = n & -n), c >= g || (c === 32 && (g & 4194176) !== 0))
          ? n
          : o
    );
  }
  function Yl(e, n) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & n) === 0;
  }
  function T1(e, n) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
        return n + 250;
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function rh() {
    var e = Do;
    return (Do <<= 1), !(Do & 4194176) && (Do = 128), e;
  }
  function ah() {
    var e = _o;
    return (_o <<= 1), !(_o & 62914560) && (_o = 4194304), e;
  }
  function lc(e) {
    for (var n = [], a = 0; 31 > a; a++) n.push(e);
    return n;
  }
  function Kl(e, n) {
    (e.pendingLanes |= n),
      n !== 268435456 && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
  }
  function w1(e, n, a, o, c, d) {
    var g = e.pendingLanes;
    (e.pendingLanes = a),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= a),
      (e.entangledLanes &= a),
      (e.errorRecoveryDisabledLanes &= a),
      (e.shellSuspendCounter = 0);
    var T = e.entanglements,
      $ = e.expirationTimes,
      N = e.hiddenUpdates;
    for (a = g & ~a; 0 < a; ) {
      var W = 31 - Le(a),
        re = 1 << W;
      (T[W] = 0), ($[W] = -1);
      var F = N[W];
      if (F !== null)
        for (N[W] = null, W = 0; W < F.length; W++) {
          var Q = F[W];
          Q !== null && (Q.lane &= -536870913);
        }
      a &= ~re;
    }
    o !== 0 && lh(e, o, 0),
      d !== 0 && c === 0 && e.tag !== 0 && (e.suspendedLanes |= d & ~(g & ~n));
  }
  function lh(e, n, a) {
    (e.pendingLanes |= n), (e.suspendedLanes &= ~n);
    var o = 31 - Le(n);
    (e.entangledLanes |= n), (e.entanglements[o] = e.entanglements[o] | 1073741824 | (a & 4194218));
  }
  function ih(e, n) {
    var a = (e.entangledLanes |= n);
    for (e = e.entanglements; a; ) {
      var o = 31 - Le(a),
        c = 1 << o;
      (c & n) | (e[o] & n) && (e[o] |= n), (a &= ~c);
    }
  }
  function oh(e) {
    return (e &= -e), 2 < e ? (8 < e ? (e & 134217727 ? 32 : 268435456) : 8) : 2;
  }
  function sh() {
    var e = le.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : $g(e.type));
  }
  function A1(e, n) {
    var a = le.p;
    try {
      return (le.p = e), n();
    } finally {
      le.p = a;
    }
  }
  var kr = Math.random().toString(36).slice(2),
    Pt = '__reactFiber$' + kr,
    Zt = '__reactProps$' + kr,
    Pa = '__reactContainer$' + kr,
    ic = '__reactEvents$' + kr,
    O1 = '__reactListeners$' + kr,
    M1 = '__reactHandles$' + kr,
    uh = '__reactResources$' + kr,
    Xl = '__reactMarker$' + kr;
  function oc(e) {
    delete e[Pt], delete e[Zt], delete e[ic], delete e[O1], delete e[M1];
  }
  function ua(e) {
    var n = e[Pt];
    if (n) return n;
    for (var a = e.parentNode; a; ) {
      if ((n = a[Pa] || a[Pt])) {
        if (((a = n.alternate), n.child !== null || (a !== null && a.child !== null)))
          for (e = mg(e); e !== null; ) {
            if ((a = e[Pt])) return a;
            e = mg(e);
          }
        return n;
      }
      (e = a), (a = e.parentNode);
    }
    return null;
  }
  function qa(e) {
    if ((e = e[Pt] || e[Pa])) {
      var n = e.tag;
      if (n === 5 || n === 6 || n === 13 || n === 26 || n === 27 || n === 3) return e;
    }
    return null;
  }
  function Ql(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e.stateNode;
    throw Error(i(33));
  }
  function Fa(e) {
    var n = e[uh];
    return n || (n = e[uh] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), n;
  }
  function $t(e) {
    e[Xl] = !0;
  }
  var ch = new Set(),
    fh = {};
  function ca(e, n) {
    Ga(e, n), Ga(e + 'Capture', n);
  }
  function Ga(e, n) {
    for (fh[e] = n, e = 0; e < n.length; e++) ch.add(n[e]);
  }
  var ar = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    $1 = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$',
    ),
    dh = {},
    ph = {};
  function z1(e) {
    return It.call(ph, e)
      ? !0
      : It.call(dh, e)
        ? !1
        : $1.test(e)
          ? (ph[e] = !0)
          : ((dh[e] = !0), !1);
  }
  function No(e, n, a) {
    if (z1(n))
      if (a === null) e.removeAttribute(n);
      else {
        switch (typeof a) {
          case 'undefined':
          case 'function':
          case 'symbol':
            e.removeAttribute(n);
            return;
          case 'boolean':
            var o = n.toLowerCase().slice(0, 5);
            if (o !== 'data-' && o !== 'aria-') {
              e.removeAttribute(n);
              return;
            }
        }
        e.setAttribute(n, '' + a);
      }
  }
  function ko(e, n, a) {
    if (a === null) e.removeAttribute(n);
    else {
      switch (typeof a) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(n);
          return;
      }
      e.setAttribute(n, '' + a);
    }
  }
  function lr(e, n, a, o) {
    if (o === null) e.removeAttribute(a);
    else {
      switch (typeof o) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(a);
          return;
      }
      e.setAttributeNS(n, a, '' + o);
    }
  }
  function pn(e) {
    switch (typeof e) {
      case 'bigint':
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return e;
      case 'object':
        return e;
      default:
        return '';
    }
  }
  function hh(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (n === 'checkbox' || n === 'radio');
  }
  function D1(e) {
    var n = hh(e) ? 'checked' : 'value',
      a = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
      o = '' + e[n];
    if (
      !e.hasOwnProperty(n) &&
      typeof a < 'u' &&
      typeof a.get == 'function' &&
      typeof a.set == 'function'
    ) {
      var c = a.get,
        d = a.set;
      return (
        Object.defineProperty(e, n, {
          configurable: !0,
          get: function () {
            return c.call(this);
          },
          set: function (g) {
            (o = '' + g), d.call(this, g);
          },
        }),
        Object.defineProperty(e, n, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return o;
          },
          setValue: function (g) {
            o = '' + g;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[n];
          },
        }
      );
    }
  }
  function Uo(e) {
    e._valueTracker || (e._valueTracker = D1(e));
  }
  function mh(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var a = n.getValue(),
      o = '';
    return (
      e && (o = hh(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = o),
      e !== a ? (n.setValue(e), !0) : !1
    );
  }
  function jo(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var _1 = /[\n"\\]/g;
  function hn(e) {
    return e.replace(_1, function (n) {
      return '\\' + n.charCodeAt(0).toString(16) + ' ';
    });
  }
  function sc(e, n, a, o, c, d, g, T) {
    (e.name = ''),
      g != null && typeof g != 'function' && typeof g != 'symbol' && typeof g != 'boolean'
        ? (e.type = g)
        : e.removeAttribute('type'),
      n != null
        ? g === 'number'
          ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + pn(n))
          : e.value !== '' + pn(n) && (e.value = '' + pn(n))
        : (g !== 'submit' && g !== 'reset') || e.removeAttribute('value'),
      n != null
        ? uc(e, g, pn(n))
        : a != null
          ? uc(e, g, pn(a))
          : o != null && e.removeAttribute('value'),
      c == null && d != null && (e.defaultChecked = !!d),
      c != null && (e.checked = c && typeof c != 'function' && typeof c != 'symbol'),
      T != null && typeof T != 'function' && typeof T != 'symbol' && typeof T != 'boolean'
        ? (e.name = '' + pn(T))
        : e.removeAttribute('name');
  }
  function gh(e, n, a, o, c, d, g, T) {
    if (
      (d != null &&
        typeof d != 'function' &&
        typeof d != 'symbol' &&
        typeof d != 'boolean' &&
        (e.type = d),
      n != null || a != null)
    ) {
      if (!((d !== 'submit' && d !== 'reset') || n != null)) return;
      (a = a != null ? '' + pn(a) : ''),
        (n = n != null ? '' + pn(n) : a),
        T || n === e.value || (e.value = n),
        (e.defaultValue = n);
    }
    (o = o ?? c),
      (o = typeof o != 'function' && typeof o != 'symbol' && !!o),
      (e.checked = T ? e.checked : !!o),
      (e.defaultChecked = !!o),
      g != null &&
        typeof g != 'function' &&
        typeof g != 'symbol' &&
        typeof g != 'boolean' &&
        (e.name = g);
  }
  function uc(e, n, a) {
    (n === 'number' && jo(e.ownerDocument) === e) ||
      e.defaultValue === '' + a ||
      (e.defaultValue = '' + a);
  }
  function Va(e, n, a, o) {
    if (((e = e.options), n)) {
      n = {};
      for (var c = 0; c < a.length; c++) n['$' + a[c]] = !0;
      for (a = 0; a < e.length; a++)
        (c = n.hasOwnProperty('$' + e[a].value)),
          e[a].selected !== c && (e[a].selected = c),
          c && o && (e[a].defaultSelected = !0);
    } else {
      for (a = '' + pn(a), n = null, c = 0; c < e.length; c++) {
        if (e[c].value === a) {
          (e[c].selected = !0), o && (e[c].defaultSelected = !0);
          return;
        }
        n !== null || e[c].disabled || (n = e[c]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function yh(e, n, a) {
    if (n != null && ((n = '' + pn(n)), n !== e.value && (e.value = n), a == null)) {
      e.defaultValue !== n && (e.defaultValue = n);
      return;
    }
    e.defaultValue = a != null ? '' + pn(a) : '';
  }
  function vh(e, n, a, o) {
    if (n == null) {
      if (o != null) {
        if (a != null) throw Error(i(92));
        if (ue(o)) {
          if (1 < o.length) throw Error(i(93));
          o = o[0];
        }
        a = o;
      }
      a == null && (a = ''), (n = a);
    }
    (a = pn(n)),
      (e.defaultValue = a),
      (o = e.textContent),
      o === a && o !== '' && o !== null && (e.value = o);
  }
  function Ya(e, n) {
    if (n) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var B1 = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' ',
    ),
  );
  function bh(e, n, a) {
    var o = n.indexOf('--') === 0;
    a == null || typeof a == 'boolean' || a === ''
      ? o
        ? e.setProperty(n, '')
        : n === 'float'
          ? (e.cssFloat = '')
          : (e[n] = '')
      : o
        ? e.setProperty(n, a)
        : typeof a != 'number' || a === 0 || B1.has(n)
          ? n === 'float'
            ? (e.cssFloat = a)
            : (e[n] = ('' + a).trim())
          : (e[n] = a + 'px');
  }
  function Sh(e, n, a) {
    if (n != null && typeof n != 'object') throw Error(i(62));
    if (((e = e.style), a != null)) {
      for (var o in a)
        !a.hasOwnProperty(o) ||
          (n != null && n.hasOwnProperty(o)) ||
          (o.indexOf('--') === 0
            ? e.setProperty(o, '')
            : o === 'float'
              ? (e.cssFloat = '')
              : (e[o] = ''));
      for (var c in n) (o = n[c]), n.hasOwnProperty(c) && a[c] !== o && bh(e, c, o);
    } else for (var d in n) n.hasOwnProperty(d) && bh(e, d, n[d]);
  }
  function cc(e) {
    if (e.indexOf('-') === -1) return !1;
    switch (e) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1;
      default:
        return !0;
    }
  }
  var N1 = new Map([
      ['acceptCharset', 'accept-charset'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
      ['crossOrigin', 'crossorigin'],
      ['accentHeight', 'accent-height'],
      ['alignmentBaseline', 'alignment-baseline'],
      ['arabicForm', 'arabic-form'],
      ['baselineShift', 'baseline-shift'],
      ['capHeight', 'cap-height'],
      ['clipPath', 'clip-path'],
      ['clipRule', 'clip-rule'],
      ['colorInterpolation', 'color-interpolation'],
      ['colorInterpolationFilters', 'color-interpolation-filters'],
      ['colorProfile', 'color-profile'],
      ['colorRendering', 'color-rendering'],
      ['dominantBaseline', 'dominant-baseline'],
      ['enableBackground', 'enable-background'],
      ['fillOpacity', 'fill-opacity'],
      ['fillRule', 'fill-rule'],
      ['floodColor', 'flood-color'],
      ['floodOpacity', 'flood-opacity'],
      ['fontFamily', 'font-family'],
      ['fontSize', 'font-size'],
      ['fontSizeAdjust', 'font-size-adjust'],
      ['fontStretch', 'font-stretch'],
      ['fontStyle', 'font-style'],
      ['fontVariant', 'font-variant'],
      ['fontWeight', 'font-weight'],
      ['glyphName', 'glyph-name'],
      ['glyphOrientationHorizontal', 'glyph-orientation-horizontal'],
      ['glyphOrientationVertical', 'glyph-orientation-vertical'],
      ['horizAdvX', 'horiz-adv-x'],
      ['horizOriginX', 'horiz-origin-x'],
      ['imageRendering', 'image-rendering'],
      ['letterSpacing', 'letter-spacing'],
      ['lightingColor', 'lighting-color'],
      ['markerEnd', 'marker-end'],
      ['markerMid', 'marker-mid'],
      ['markerStart', 'marker-start'],
      ['overlinePosition', 'overline-position'],
      ['overlineThickness', 'overline-thickness'],
      ['paintOrder', 'paint-order'],
      ['panose-1', 'panose-1'],
      ['pointerEvents', 'pointer-events'],
      ['renderingIntent', 'rendering-intent'],
      ['shapeRendering', 'shape-rendering'],
      ['stopColor', 'stop-color'],
      ['stopOpacity', 'stop-opacity'],
      ['strikethroughPosition', 'strikethrough-position'],
      ['strikethroughThickness', 'strikethrough-thickness'],
      ['strokeDasharray', 'stroke-dasharray'],
      ['strokeDashoffset', 'stroke-dashoffset'],
      ['strokeLinecap', 'stroke-linecap'],
      ['strokeLinejoin', 'stroke-linejoin'],
      ['strokeMiterlimit', 'stroke-miterlimit'],
      ['strokeOpacity', 'stroke-opacity'],
      ['strokeWidth', 'stroke-width'],
      ['textAnchor', 'text-anchor'],
      ['textDecoration', 'text-decoration'],
      ['textRendering', 'text-rendering'],
      ['transformOrigin', 'transform-origin'],
      ['underlinePosition', 'underline-position'],
      ['underlineThickness', 'underline-thickness'],
      ['unicodeBidi', 'unicode-bidi'],
      ['unicodeRange', 'unicode-range'],
      ['unitsPerEm', 'units-per-em'],
      ['vAlphabetic', 'v-alphabetic'],
      ['vHanging', 'v-hanging'],
      ['vIdeographic', 'v-ideographic'],
      ['vMathematical', 'v-mathematical'],
      ['vectorEffect', 'vector-effect'],
      ['vertAdvY', 'vert-adv-y'],
      ['vertOriginX', 'vert-origin-x'],
      ['vertOriginY', 'vert-origin-y'],
      ['wordSpacing', 'word-spacing'],
      ['writingMode', 'writing-mode'],
      ['xmlnsXlink', 'xmlns:xlink'],
      ['xHeight', 'x-height'],
    ]),
    k1 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Lo(e) {
    return k1.test('' + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  var fc = null;
  function dc(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Ka = null,
    Xa = null;
  function xh(e) {
    var n = qa(e);
    if (n && (e = n.stateNode)) {
      var a = e[Zt] || null;
      e: switch (((e = n.stateNode), n.type)) {
        case 'input':
          if (
            (sc(
              e,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name,
            ),
            (n = a.name),
            a.type === 'radio' && n != null)
          ) {
            for (a = e; a.parentNode; ) a = a.parentNode;
            for (
              a = a.querySelectorAll('input[name="' + hn('' + n) + '"][type="radio"]'), n = 0;
              n < a.length;
              n++
            ) {
              var o = a[n];
              if (o !== e && o.form === e.form) {
                var c = o[Zt] || null;
                if (!c) throw Error(i(90));
                sc(
                  o,
                  c.value,
                  c.defaultValue,
                  c.defaultValue,
                  c.checked,
                  c.defaultChecked,
                  c.type,
                  c.name,
                );
              }
            }
            for (n = 0; n < a.length; n++) (o = a[n]), o.form === e.form && mh(o);
          }
          break e;
        case 'textarea':
          yh(e, a.value, a.defaultValue);
          break e;
        case 'select':
          (n = a.value), n != null && Va(e, !!a.multiple, n, !1);
      }
    }
  }
  var pc = !1;
  function Eh(e, n, a) {
    if (pc) return e(n, a);
    pc = !0;
    try {
      var o = e(n);
      return o;
    } finally {
      if (
        ((pc = !1),
        (Ka !== null || Xa !== null) &&
          (Es(), Ka && ((n = Ka), (e = Xa), (Xa = Ka = null), xh(n), e)))
      )
        for (n = 0; n < e.length; n++) xh(e[n]);
    }
  }
  function Wl(e, n) {
    var a = e.stateNode;
    if (a === null) return null;
    var o = a[Zt] || null;
    if (o === null) return null;
    a = o[n];
    e: switch (n) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        (o = !o.disabled) ||
          ((e = e.type),
          (o = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
          (e = !o);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (a && typeof a != 'function') throw Error(i(231, n, typeof a));
    return a;
  }
  var hc = !1;
  if (ar)
    try {
      var Il = {};
      Object.defineProperty(Il, 'passive', {
        get: function () {
          hc = !0;
        },
      }),
        window.addEventListener('test', Il, Il),
        window.removeEventListener('test', Il, Il);
    } catch {
      hc = !1;
    }
  var Ur = null,
    mc = null,
    Ho = null;
  function Ch() {
    if (Ho) return Ho;
    var e,
      n = mc,
      a = n.length,
      o,
      c = 'value' in Ur ? Ur.value : Ur.textContent,
      d = c.length;
    for (e = 0; e < a && n[e] === c[e]; e++);
    var g = a - e;
    for (o = 1; o <= g && n[a - o] === c[d - o]; o++);
    return (Ho = c.slice(e, 1 < o ? 1 - o : void 0));
  }
  function Po(e) {
    var n = e.keyCode;
    return (
      'charCode' in e ? ((e = e.charCode), e === 0 && n === 13 && (e = 13)) : (e = n),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function qo() {
    return !0;
  }
  function Rh() {
    return !1;
  }
  function Jt(e) {
    function n(a, o, c, d, g) {
      (this._reactName = a),
        (this._targetInst = c),
        (this.type = o),
        (this.nativeEvent = d),
        (this.target = g),
        (this.currentTarget = null);
      for (var T in e) e.hasOwnProperty(T) && ((a = e[T]), (this[T] = a ? a(d) : d[T]));
      return (
        (this.isDefaultPrevented = (
          d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1
        )
          ? qo
          : Rh),
        (this.isPropagationStopped = Rh),
        this
      );
    }
    return (
      x(n.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != 'unknown' && (a.returnValue = !1),
            (this.isDefaultPrevented = qo));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != 'unknown' && (a.cancelBubble = !0),
            (this.isPropagationStopped = qo));
        },
        persist: function () {},
        isPersistent: qo,
      }),
      n
    );
  }
  var fa = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Fo = Jt(fa),
    Zl = x({}, fa, { view: 0, detail: 0 }),
    U1 = Jt(Zl),
    gc,
    yc,
    Jl,
    Go = x({}, Zl, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: bc,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return 'movementX' in e
          ? e.movementX
          : (e !== Jl &&
              (Jl && e.type === 'mousemove'
                ? ((gc = e.screenX - Jl.screenX), (yc = e.screenY - Jl.screenY))
                : (yc = gc = 0),
              (Jl = e)),
            gc);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : yc;
      },
    }),
    Th = Jt(Go),
    j1 = x({}, Go, { dataTransfer: 0 }),
    L1 = Jt(j1),
    H1 = x({}, Zl, { relatedTarget: 0 }),
    vc = Jt(H1),
    P1 = x({}, fa, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    q1 = Jt(P1),
    F1 = x({}, fa, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    G1 = Jt(F1),
    V1 = x({}, fa, { data: 0 }),
    wh = Jt(V1),
    Y1 = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified',
    },
    K1 = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta',
    },
    X1 = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function Q1(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : (e = X1[e]) ? !!n[e] : !1;
  }
  function bc() {
    return Q1;
  }
  var W1 = x({}, Zl, {
      key: function (e) {
        if (e.key) {
          var n = Y1[e.key] || e.key;
          if (n !== 'Unidentified') return n;
        }
        return e.type === 'keypress'
          ? ((e = Po(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? K1[e.keyCode] || 'Unidentified'
            : '';
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: bc,
      charCode: function (e) {
        return e.type === 'keypress' ? Po(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? Po(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    I1 = Jt(W1),
    Z1 = x({}, Go, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Ah = Jt(Z1),
    J1 = x({}, Zl, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: bc,
    }),
    eS = Jt(J1),
    tS = x({}, fa, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    nS = Jt(tS),
    rS = x({}, Go, {
      deltaX: function (e) {
        return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function (e) {
        return 'deltaY' in e
          ? e.deltaY
          : 'wheelDeltaY' in e
            ? -e.wheelDeltaY
            : 'wheelDelta' in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    aS = Jt(rS),
    lS = x({}, fa, { newState: 0, oldState: 0 }),
    iS = Jt(lS),
    oS = [9, 13, 27, 32],
    Sc = ar && 'CompositionEvent' in window,
    ei = null;
  ar && 'documentMode' in document && (ei = document.documentMode);
  var sS = ar && 'TextEvent' in window && !ei,
    Oh = ar && (!Sc || (ei && 8 < ei && 11 >= ei)),
    Mh = ' ',
    $h = !1;
  function zh(e, n) {
    switch (e) {
      case 'keyup':
        return oS.indexOf(n.keyCode) !== -1;
      case 'keydown':
        return n.keyCode !== 229;
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0;
      default:
        return !1;
    }
  }
  function Dh(e) {
    return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
  }
  var Qa = !1;
  function uS(e, n) {
    switch (e) {
      case 'compositionend':
        return Dh(n);
      case 'keypress':
        return n.which !== 32 ? null : (($h = !0), Mh);
      case 'textInput':
        return (e = n.data), e === Mh && $h ? null : e;
      default:
        return null;
    }
  }
  function cS(e, n) {
    if (Qa)
      return e === 'compositionend' || (!Sc && zh(e, n))
        ? ((e = Ch()), (Ho = mc = Ur = null), (Qa = !1), e)
        : null;
    switch (e) {
      case 'paste':
        return null;
      case 'keypress':
        if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
          if (n.char && 1 < n.char.length) return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case 'compositionend':
        return Oh && n.locale !== 'ko' ? null : n.data;
      default:
        return null;
    }
  }
  var fS = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function _h(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === 'input' ? !!fS[e.type] : n === 'textarea';
  }
  function Bh(e, n, a, o) {
    Ka ? (Xa ? Xa.push(o) : (Xa = [o])) : (Ka = o),
      (n = As(n, 'onChange')),
      0 < n.length &&
        ((a = new Fo('onChange', 'change', null, a, o)), e.push({ event: a, listeners: n }));
  }
  var ti = null,
    ni = null;
  function dS(e) {
    ig(e, 0);
  }
  function Vo(e) {
    var n = Ql(e);
    if (mh(n)) return e;
  }
  function Nh(e, n) {
    if (e === 'change') return n;
  }
  var kh = !1;
  if (ar) {
    var xc;
    if (ar) {
      var Ec = 'oninput' in document;
      if (!Ec) {
        var Uh = document.createElement('div');
        Uh.setAttribute('oninput', 'return;'), (Ec = typeof Uh.oninput == 'function');
      }
      xc = Ec;
    } else xc = !1;
    kh = xc && (!document.documentMode || 9 < document.documentMode);
  }
  function jh() {
    ti && (ti.detachEvent('onpropertychange', Lh), (ni = ti = null));
  }
  function Lh(e) {
    if (e.propertyName === 'value' && Vo(ni)) {
      var n = [];
      Bh(n, ni, e, dc(e)), Eh(dS, n);
    }
  }
  function pS(e, n, a) {
    e === 'focusin'
      ? (jh(), (ti = n), (ni = a), ti.attachEvent('onpropertychange', Lh))
      : e === 'focusout' && jh();
  }
  function hS(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Vo(ni);
  }
  function mS(e, n) {
    if (e === 'click') return Vo(n);
  }
  function gS(e, n) {
    if (e === 'input' || e === 'change') return Vo(n);
  }
  function yS(e, n) {
    return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
  }
  var rn = typeof Object.is == 'function' ? Object.is : yS;
  function ri(e, n) {
    if (rn(e, n)) return !0;
    if (typeof e != 'object' || e === null || typeof n != 'object' || n === null) return !1;
    var a = Object.keys(e),
      o = Object.keys(n);
    if (a.length !== o.length) return !1;
    for (o = 0; o < a.length; o++) {
      var c = a[o];
      if (!It.call(n, c) || !rn(e[c], n[c])) return !1;
    }
    return !0;
  }
  function Hh(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Ph(e, n) {
    var a = Hh(e);
    e = 0;
    for (var o; a; ) {
      if (a.nodeType === 3) {
        if (((o = e + a.textContent.length), e <= n && o >= n)) return { node: a, offset: n - e };
        e = o;
      }
      e: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break e;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = Hh(a);
    }
  }
  function qh(e, n) {
    return e && n
      ? e === n
        ? !0
        : e && e.nodeType === 3
          ? !1
          : n && n.nodeType === 3
            ? qh(e, n.parentNode)
            : 'contains' in e
              ? e.contains(n)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(n) & 16)
                : !1
      : !1;
  }
  function Fh(e) {
    e =
      e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var n = jo(e.document); n instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof n.contentWindow.location.href == 'string';
      } catch {
        a = !1;
      }
      if (a) e = n.contentWindow;
      else break;
      n = jo(e.document);
    }
    return n;
  }
  function Cc(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      n &&
      ((n === 'input' &&
        (e.type === 'text' ||
          e.type === 'search' ||
          e.type === 'tel' ||
          e.type === 'url' ||
          e.type === 'password')) ||
        n === 'textarea' ||
        e.contentEditable === 'true')
    );
  }
  function vS(e, n) {
    var a = Fh(n);
    n = e.focusedElem;
    var o = e.selectionRange;
    if (a !== n && n && n.ownerDocument && qh(n.ownerDocument.documentElement, n)) {
      if (o !== null && Cc(n)) {
        if (((e = o.start), (a = o.end), a === void 0 && (a = e), 'selectionStart' in n))
          (n.selectionStart = e), (n.selectionEnd = Math.min(a, n.value.length));
        else if (
          ((a = ((e = n.ownerDocument || document) && e.defaultView) || window), a.getSelection)
        ) {
          a = a.getSelection();
          var c = n.textContent.length,
            d = Math.min(o.start, c);
          (o = o.end === void 0 ? d : Math.min(o.end, c)),
            !a.extend && d > o && ((c = o), (o = d), (d = c)),
            (c = Ph(n, d));
          var g = Ph(n, o);
          c &&
            g &&
            (a.rangeCount !== 1 ||
              a.anchorNode !== c.node ||
              a.anchorOffset !== c.offset ||
              a.focusNode !== g.node ||
              a.focusOffset !== g.offset) &&
            ((e = e.createRange()),
            e.setStart(c.node, c.offset),
            a.removeAllRanges(),
            d > o
              ? (a.addRange(e), a.extend(g.node, g.offset))
              : (e.setEnd(g.node, g.offset), a.addRange(e)));
        }
      }
      for (e = [], a = n; (a = a.parentNode); )
        a.nodeType === 1 && e.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
      for (typeof n.focus == 'function' && n.focus(), n = 0; n < e.length; n++)
        (a = e[n]), (a.element.scrollLeft = a.left), (a.element.scrollTop = a.top);
    }
  }
  var bS = ar && 'documentMode' in document && 11 >= document.documentMode,
    Wa = null,
    Rc = null,
    ai = null,
    Tc = !1;
  function Gh(e, n, a) {
    var o = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    Tc ||
      Wa == null ||
      Wa !== jo(o) ||
      ((o = Wa),
      'selectionStart' in o && Cc(o)
        ? (o = { start: o.selectionStart, end: o.selectionEnd })
        : ((o = ((o.ownerDocument && o.ownerDocument.defaultView) || window).getSelection()),
          (o = {
            anchorNode: o.anchorNode,
            anchorOffset: o.anchorOffset,
            focusNode: o.focusNode,
            focusOffset: o.focusOffset,
          })),
      (ai && ri(ai, o)) ||
        ((ai = o),
        (o = As(Rc, 'onSelect')),
        0 < o.length &&
          ((n = new Fo('onSelect', 'select', null, n, a)),
          e.push({ event: n, listeners: o }),
          (n.target = Wa))));
  }
  function da(e, n) {
    var a = {};
    return (
      (a[e.toLowerCase()] = n.toLowerCase()),
      (a['Webkit' + e] = 'webkit' + n),
      (a['Moz' + e] = 'moz' + n),
      a
    );
  }
  var Ia = {
      animationend: da('Animation', 'AnimationEnd'),
      animationiteration: da('Animation', 'AnimationIteration'),
      animationstart: da('Animation', 'AnimationStart'),
      transitionrun: da('Transition', 'TransitionRun'),
      transitionstart: da('Transition', 'TransitionStart'),
      transitioncancel: da('Transition', 'TransitionCancel'),
      transitionend: da('Transition', 'TransitionEnd'),
    },
    wc = {},
    Vh = {};
  ar &&
    ((Vh = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete Ia.animationend.animation,
      delete Ia.animationiteration.animation,
      delete Ia.animationstart.animation),
    'TransitionEvent' in window || delete Ia.transitionend.transition);
  function pa(e) {
    if (wc[e]) return wc[e];
    if (!Ia[e]) return e;
    var n = Ia[e],
      a;
    for (a in n) if (n.hasOwnProperty(a) && a in Vh) return (wc[e] = n[a]);
    return e;
  }
  var Yh = pa('animationend'),
    Kh = pa('animationiteration'),
    Xh = pa('animationstart'),
    SS = pa('transitionrun'),
    xS = pa('transitionstart'),
    ES = pa('transitioncancel'),
    Qh = pa('transitionend'),
    Wh = new Map(),
    Ih =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel'.split(
        ' ',
      );
  function Dn(e, n) {
    Wh.set(e, n), ca(n, [e]);
  }
  var mn = [],
    Za = 0,
    Ac = 0;
  function Yo() {
    for (var e = Za, n = (Ac = Za = 0); n < e; ) {
      var a = mn[n];
      mn[n++] = null;
      var o = mn[n];
      mn[n++] = null;
      var c = mn[n];
      mn[n++] = null;
      var d = mn[n];
      if (((mn[n++] = null), o !== null && c !== null)) {
        var g = o.pending;
        g === null ? (c.next = c) : ((c.next = g.next), (g.next = c)), (o.pending = c);
      }
      d !== 0 && Zh(a, c, d);
    }
  }
  function Ko(e, n, a, o) {
    (mn[Za++] = e),
      (mn[Za++] = n),
      (mn[Za++] = a),
      (mn[Za++] = o),
      (Ac |= o),
      (e.lanes |= o),
      (e = e.alternate),
      e !== null && (e.lanes |= o);
  }
  function Oc(e, n, a, o) {
    return Ko(e, n, a, o), Xo(e);
  }
  function jr(e, n) {
    return Ko(e, null, null, n), Xo(e);
  }
  function Zh(e, n, a) {
    e.lanes |= a;
    var o = e.alternate;
    o !== null && (o.lanes |= a);
    for (var c = !1, d = e.return; d !== null; )
      (d.childLanes |= a),
        (o = d.alternate),
        o !== null && (o.childLanes |= a),
        d.tag === 22 && ((e = d.stateNode), e === null || e._visibility & 1 || (c = !0)),
        (e = d),
        (d = d.return);
    c &&
      n !== null &&
      e.tag === 3 &&
      ((d = e.stateNode),
      (c = 31 - Le(a)),
      (d = d.hiddenUpdates),
      (e = d[c]),
      e === null ? (d[c] = [n]) : e.push(n),
      (n.lane = a | 536870912));
  }
  function Xo(e) {
    if (50 < Mi) throw ((Mi = 0), (Nf = null), Error(i(185)));
    for (var n = e.return; n !== null; ) (e = n), (n = e.return);
    return e.tag === 3 ? e.stateNode : null;
  }
  var Ja = {},
    Jh = new WeakMap();
  function gn(e, n) {
    if (typeof e == 'object' && e !== null) {
      var a = Jh.get(e);
      return a !== void 0 ? a : ((n = { value: e, source: n, stack: te(n) }), Jh.set(e, n), n);
    }
    return { value: e, source: n, stack: te(n) };
  }
  var el = [],
    tl = 0,
    Qo = null,
    Wo = 0,
    yn = [],
    vn = 0,
    ha = null,
    ir = 1,
    or = '';
  function ma(e, n) {
    (el[tl++] = Wo), (el[tl++] = Qo), (Qo = e), (Wo = n);
  }
  function em(e, n, a) {
    (yn[vn++] = ir), (yn[vn++] = or), (yn[vn++] = ha), (ha = e);
    var o = ir;
    e = or;
    var c = 32 - Le(o) - 1;
    (o &= ~(1 << c)), (a += 1);
    var d = 32 - Le(n) + c;
    if (30 < d) {
      var g = c - (c % 5);
      (d = (o & ((1 << g) - 1)).toString(32)),
        (o >>= g),
        (c -= g),
        (ir = (1 << (32 - Le(n) + c)) | (a << c) | o),
        (or = d + e);
    } else (ir = (1 << d) | (a << c) | o), (or = e);
  }
  function Mc(e) {
    e.return !== null && (ma(e, 1), em(e, 1, 0));
  }
  function $c(e) {
    for (; e === Qo; ) (Qo = el[--tl]), (el[tl] = null), (Wo = el[--tl]), (el[tl] = null);
    for (; e === ha; )
      (ha = yn[--vn]),
        (yn[vn] = null),
        (or = yn[--vn]),
        (yn[vn] = null),
        (ir = yn[--vn]),
        (yn[vn] = null);
  }
  var Qt = null,
    Nt = null,
    Ue = !1,
    _n = null,
    Pn = !1,
    zc = Error(i(519));
  function ga(e) {
    var n = Error(i(418, ''));
    throw (oi(gn(n, e)), zc);
  }
  function tm(e) {
    var n = e.stateNode,
      a = e.type,
      o = e.memoizedProps;
    switch (((n[Pt] = e), (n[Zt] = o), a)) {
      case 'dialog':
        _e('cancel', n), _e('close', n);
        break;
      case 'iframe':
      case 'object':
      case 'embed':
        _e('load', n);
        break;
      case 'video':
      case 'audio':
        for (a = 0; a < zi.length; a++) _e(zi[a], n);
        break;
      case 'source':
        _e('error', n);
        break;
      case 'img':
      case 'image':
      case 'link':
        _e('error', n), _e('load', n);
        break;
      case 'details':
        _e('toggle', n);
        break;
      case 'input':
        _e('invalid', n),
          gh(n, o.value, o.defaultValue, o.checked, o.defaultChecked, o.type, o.name, !0),
          Uo(n);
        break;
      case 'select':
        _e('invalid', n);
        break;
      case 'textarea':
        _e('invalid', n), vh(n, o.value, o.defaultValue, o.children), Uo(n);
    }
    (a = o.children),
      (typeof a != 'string' && typeof a != 'number' && typeof a != 'bigint') ||
      n.textContent === '' + a ||
      o.suppressHydrationWarning === !0 ||
      cg(n.textContent, a)
        ? (o.popover != null && (_e('beforetoggle', n), _e('toggle', n)),
          o.onScroll != null && _e('scroll', n),
          o.onScrollEnd != null && _e('scrollend', n),
          o.onClick != null && (n.onclick = Os),
          (n = !0))
        : (n = !1),
      n || ga(e);
  }
  function nm(e) {
    for (Qt = e.return; Qt; )
      switch (Qt.tag) {
        case 3:
        case 27:
          Pn = !0;
          return;
        case 5:
        case 13:
          Pn = !1;
          return;
        default:
          Qt = Qt.return;
      }
  }
  function li(e) {
    if (e !== Qt) return !1;
    if (!Ue) return nm(e), (Ue = !0), !1;
    var n = !1,
      a;
    if (
      ((a = e.tag !== 3 && e.tag !== 27) &&
        ((a = e.tag === 5) &&
          ((a = e.type), (a = !(a !== 'form' && a !== 'button') || Zf(e.type, e.memoizedProps))),
        (a = !a)),
      a && (n = !0),
      n && Nt && ga(e),
      nm(e),
      e.tag === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(i(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8)
            if (((a = e.data), a === '/$')) {
              if (n === 0) {
                Nt = Nn(e.nextSibling);
                break e;
              }
              n--;
            } else (a !== '$' && a !== '$!' && a !== '$?') || n++;
          e = e.nextSibling;
        }
        Nt = null;
      }
    } else Nt = Qt ? Nn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ii() {
    (Nt = Qt = null), (Ue = !1);
  }
  function oi(e) {
    _n === null ? (_n = [e]) : _n.push(e);
  }
  var si = Error(i(460)),
    rm = Error(i(474)),
    Dc = { then: function () {} };
  function am(e) {
    return (e = e.status), e === 'fulfilled' || e === 'rejected';
  }
  function Io() {}
  function lm(e, n, a) {
    switch (
      ((a = e[a]), a === void 0 ? e.push(n) : a !== n && (n.then(Io, Io), (n = a)), n.status)
    ) {
      case 'fulfilled':
        return n.value;
      case 'rejected':
        throw ((e = n.reason), e === si ? Error(i(483)) : e);
      default:
        if (typeof n.status == 'string') n.then(Io, Io);
        else {
          if (((e = Ie), e !== null && 100 < e.shellSuspendCounter)) throw Error(i(482));
          (e = n),
            (e.status = 'pending'),
            e.then(
              function (o) {
                if (n.status === 'pending') {
                  var c = n;
                  (c.status = 'fulfilled'), (c.value = o);
                }
              },
              function (o) {
                if (n.status === 'pending') {
                  var c = n;
                  (c.status = 'rejected'), (c.reason = o);
                }
              },
            );
        }
        switch (n.status) {
          case 'fulfilled':
            return n.value;
          case 'rejected':
            throw ((e = n.reason), e === si ? Error(i(483)) : e);
        }
        throw ((ui = n), si);
    }
  }
  var ui = null;
  function im() {
    if (ui === null) throw Error(i(459));
    var e = ui;
    return (ui = null), e;
  }
  var nl = null,
    ci = 0;
  function Zo(e) {
    var n = ci;
    return (ci += 1), nl === null && (nl = []), lm(nl, e, n);
  }
  function fi(e, n) {
    (n = n.props.ref), (e.ref = n !== void 0 ? n : null);
  }
  function Jo(e, n) {
    throw n.$$typeof === u
      ? Error(i(525))
      : ((e = Object.prototype.toString.call(n)),
        Error(
          i(
            31,
            e === '[object Object]' ? 'object with keys {' + Object.keys(n).join(', ') + '}' : e,
          ),
        ));
  }
  function om(e) {
    var n = e._init;
    return n(e._payload);
  }
  function sm(e) {
    function n(k, B) {
      if (e) {
        var H = k.deletions;
        H === null ? ((k.deletions = [B]), (k.flags |= 16)) : H.push(B);
      }
    }
    function a(k, B) {
      if (!e) return null;
      for (; B !== null; ) n(k, B), (B = B.sibling);
      return null;
    }
    function o(k) {
      for (var B = new Map(); k !== null; )
        k.key !== null ? B.set(k.key, k) : B.set(k.index, k), (k = k.sibling);
      return B;
    }
    function c(k, B) {
      return (k = Wr(k, B)), (k.index = 0), (k.sibling = null), k;
    }
    function d(k, B, H) {
      return (
        (k.index = H),
        e
          ? ((H = k.alternate),
            H !== null
              ? ((H = H.index), H < B ? ((k.flags |= 33554434), B) : H)
              : ((k.flags |= 33554434), B))
          : ((k.flags |= 1048576), B)
      );
    }
    function g(k) {
      return e && k.alternate === null && (k.flags |= 33554434), k;
    }
    function T(k, B, H, J) {
      return B === null || B.tag !== 6
        ? ((B = Af(H, k.mode, J)), (B.return = k), B)
        : ((B = c(B, H)), (B.return = k), B);
    }
    function $(k, B, H, J) {
      var he = H.type;
      return he === m
        ? W(k, B, H.props.children, J, H.key)
        : B !== null &&
            (B.elementType === he ||
              (typeof he == 'object' && he !== null && he.$$typeof === z && om(he) === B.type))
          ? ((B = c(B, H.props)), fi(B, H), (B.return = k), B)
          : ((B = ys(H.type, H.key, H.props, null, k.mode, J)), fi(B, H), (B.return = k), B);
    }
    function N(k, B, H, J) {
      return B === null ||
        B.tag !== 4 ||
        B.stateNode.containerInfo !== H.containerInfo ||
        B.stateNode.implementation !== H.implementation
        ? ((B = Of(H, k.mode, J)), (B.return = k), B)
        : ((B = c(B, H.children || [])), (B.return = k), B);
    }
    function W(k, B, H, J, he) {
      return B === null || B.tag !== 7
        ? ((B = wa(H, k.mode, J, he)), (B.return = k), B)
        : ((B = c(B, H)), (B.return = k), B);
    }
    function re(k, B, H) {
      if ((typeof B == 'string' && B !== '') || typeof B == 'number' || typeof B == 'bigint')
        return (B = Af('' + B, k.mode, H)), (B.return = k), B;
      if (typeof B == 'object' && B !== null) {
        switch (B.$$typeof) {
          case f:
            return (H = ys(B.type, B.key, B.props, null, k.mode, H)), fi(H, B), (H.return = k), H;
          case p:
            return (B = Of(B, k.mode, H)), (B.return = k), B;
          case z:
            var J = B._init;
            return (B = J(B._payload)), re(k, B, H);
        }
        if (ue(B) || U(B)) return (B = wa(B, k.mode, H, null)), (B.return = k), B;
        if (typeof B.then == 'function') return re(k, Zo(B), H);
        if (B.$$typeof === w) return re(k, hs(k, B), H);
        Jo(k, B);
      }
      return null;
    }
    function F(k, B, H, J) {
      var he = B !== null ? B.key : null;
      if ((typeof H == 'string' && H !== '') || typeof H == 'number' || typeof H == 'bigint')
        return he !== null ? null : T(k, B, '' + H, J);
      if (typeof H == 'object' && H !== null) {
        switch (H.$$typeof) {
          case f:
            return H.key === he ? $(k, B, H, J) : null;
          case p:
            return H.key === he ? N(k, B, H, J) : null;
          case z:
            return (he = H._init), (H = he(H._payload)), F(k, B, H, J);
        }
        if (ue(H) || U(H)) return he !== null ? null : W(k, B, H, J, null);
        if (typeof H.then == 'function') return F(k, B, Zo(H), J);
        if (H.$$typeof === w) return F(k, B, hs(k, H), J);
        Jo(k, H);
      }
      return null;
    }
    function Q(k, B, H, J, he) {
      if ((typeof J == 'string' && J !== '') || typeof J == 'number' || typeof J == 'bigint')
        return (k = k.get(H) || null), T(B, k, '' + J, he);
      if (typeof J == 'object' && J !== null) {
        switch (J.$$typeof) {
          case f:
            return (k = k.get(J.key === null ? H : J.key) || null), $(B, k, J, he);
          case p:
            return (k = k.get(J.key === null ? H : J.key) || null), N(B, k, J, he);
          case z:
            var ze = J._init;
            return (J = ze(J._payload)), Q(k, B, H, J, he);
        }
        if (ue(J) || U(J)) return (k = k.get(H) || null), W(B, k, J, he, null);
        if (typeof J.then == 'function') return Q(k, B, H, Zo(J), he);
        if (J.$$typeof === w) return Q(k, B, H, hs(B, J), he);
        Jo(B, J);
      }
      return null;
    }
    function me(k, B, H, J) {
      for (
        var he = null, ze = null, ye = B, Ee = (B = 0), _t = null;
        ye !== null && Ee < H.length;
        Ee++
      ) {
        ye.index > Ee ? ((_t = ye), (ye = null)) : (_t = ye.sibling);
        var je = F(k, ye, H[Ee], J);
        if (je === null) {
          ye === null && (ye = _t);
          break;
        }
        e && ye && je.alternate === null && n(k, ye),
          (B = d(je, B, Ee)),
          ze === null ? (he = je) : (ze.sibling = je),
          (ze = je),
          (ye = _t);
      }
      if (Ee === H.length) return a(k, ye), Ue && ma(k, Ee), he;
      if (ye === null) {
        for (; Ee < H.length; Ee++)
          (ye = re(k, H[Ee], J)),
            ye !== null &&
              ((B = d(ye, B, Ee)), ze === null ? (he = ye) : (ze.sibling = ye), (ze = ye));
        return Ue && ma(k, Ee), he;
      }
      for (ye = o(ye); Ee < H.length; Ee++)
        (_t = Q(ye, k, Ee, H[Ee], J)),
          _t !== null &&
            (e && _t.alternate !== null && ye.delete(_t.key === null ? Ee : _t.key),
            (B = d(_t, B, Ee)),
            ze === null ? (he = _t) : (ze.sibling = _t),
            (ze = _t));
      return (
        e &&
          ye.forEach(function (ra) {
            return n(k, ra);
          }),
        Ue && ma(k, Ee),
        he
      );
    }
    function Re(k, B, H, J) {
      if (H == null) throw Error(i(151));
      for (
        var he = null, ze = null, ye = B, Ee = (B = 0), _t = null, je = H.next();
        ye !== null && !je.done;
        Ee++, je = H.next()
      ) {
        ye.index > Ee ? ((_t = ye), (ye = null)) : (_t = ye.sibling);
        var ra = F(k, ye, je.value, J);
        if (ra === null) {
          ye === null && (ye = _t);
          break;
        }
        e && ye && ra.alternate === null && n(k, ye),
          (B = d(ra, B, Ee)),
          ze === null ? (he = ra) : (ze.sibling = ra),
          (ze = ra),
          (ye = _t);
      }
      if (je.done) return a(k, ye), Ue && ma(k, Ee), he;
      if (ye === null) {
        for (; !je.done; Ee++, je = H.next())
          (je = re(k, je.value, J)),
            je !== null &&
              ((B = d(je, B, Ee)), ze === null ? (he = je) : (ze.sibling = je), (ze = je));
        return Ue && ma(k, Ee), he;
      }
      for (ye = o(ye); !je.done; Ee++, je = H.next())
        (je = Q(ye, k, Ee, je.value, J)),
          je !== null &&
            (e && je.alternate !== null && ye.delete(je.key === null ? Ee : je.key),
            (B = d(je, B, Ee)),
            ze === null ? (he = je) : (ze.sibling = je),
            (ze = je));
      return (
        e &&
          ye.forEach(function (kx) {
            return n(k, kx);
          }),
        Ue && ma(k, Ee),
        he
      );
    }
    function dt(k, B, H, J) {
      if (
        (typeof H == 'object' &&
          H !== null &&
          H.type === m &&
          H.key === null &&
          (H = H.props.children),
        typeof H == 'object' && H !== null)
      ) {
        switch (H.$$typeof) {
          case f:
            e: {
              for (var he = H.key; B !== null; ) {
                if (B.key === he) {
                  if (((he = H.type), he === m)) {
                    if (B.tag === 7) {
                      a(k, B.sibling), (J = c(B, H.props.children)), (J.return = k), (k = J);
                      break e;
                    }
                  } else if (
                    B.elementType === he ||
                    (typeof he == 'object' && he !== null && he.$$typeof === z && om(he) === B.type)
                  ) {
                    a(k, B.sibling), (J = c(B, H.props)), fi(J, H), (J.return = k), (k = J);
                    break e;
                  }
                  a(k, B);
                  break;
                } else n(k, B);
                B = B.sibling;
              }
              H.type === m
                ? ((J = wa(H.props.children, k.mode, J, H.key)), (J.return = k), (k = J))
                : ((J = ys(H.type, H.key, H.props, null, k.mode, J)),
                  fi(J, H),
                  (J.return = k),
                  (k = J));
            }
            return g(k);
          case p:
            e: {
              for (he = H.key; B !== null; ) {
                if (B.key === he)
                  if (
                    B.tag === 4 &&
                    B.stateNode.containerInfo === H.containerInfo &&
                    B.stateNode.implementation === H.implementation
                  ) {
                    a(k, B.sibling), (J = c(B, H.children || [])), (J.return = k), (k = J);
                    break e;
                  } else {
                    a(k, B);
                    break;
                  }
                else n(k, B);
                B = B.sibling;
              }
              (J = Of(H, k.mode, J)), (J.return = k), (k = J);
            }
            return g(k);
          case z:
            return (he = H._init), (H = he(H._payload)), dt(k, B, H, J);
        }
        if (ue(H)) return me(k, B, H, J);
        if (U(H)) {
          if (((he = U(H)), typeof he != 'function')) throw Error(i(150));
          return (H = he.call(H)), Re(k, B, H, J);
        }
        if (typeof H.then == 'function') return dt(k, B, Zo(H), J);
        if (H.$$typeof === w) return dt(k, B, hs(k, H), J);
        Jo(k, H);
      }
      return (typeof H == 'string' && H !== '') || typeof H == 'number' || typeof H == 'bigint'
        ? ((H = '' + H),
          B !== null && B.tag === 6
            ? (a(k, B.sibling), (J = c(B, H)), (J.return = k), (k = J))
            : (a(k, B), (J = Af(H, k.mode, J)), (J.return = k), (k = J)),
          g(k))
        : a(k, B);
    }
    return function (k, B, H, J) {
      try {
        ci = 0;
        var he = dt(k, B, H, J);
        return (nl = null), he;
      } catch (ye) {
        if (ye === si) throw ye;
        var ze = En(29, ye, null, k.mode);
        return (ze.lanes = J), (ze.return = k), ze;
      } finally {
      }
    };
  }
  var ya = sm(!0),
    um = sm(!1),
    rl = ae(null),
    es = ae(0);
  function cm(e, n) {
    (e = vr), ce(es, e), ce(rl, n), (vr = e | n.baseLanes);
  }
  function _c() {
    ce(es, vr), ce(rl, rl.current);
  }
  function Bc() {
    (vr = es.current), de(rl), de(es);
  }
  var bn = ae(null),
    qn = null;
  function Lr(e) {
    var n = e.alternate;
    ce(At, At.current & 1),
      ce(bn, e),
      qn === null && (n === null || rl.current !== null || n.memoizedState !== null) && (qn = e);
  }
  function fm(e) {
    if (e.tag === 22) {
      if ((ce(At, At.current), ce(bn, e), qn === null)) {
        var n = e.alternate;
        n !== null && n.memoizedState !== null && (qn = e);
      }
    } else Hr();
  }
  function Hr() {
    ce(At, At.current), ce(bn, bn.current);
  }
  function sr(e) {
    de(bn), qn === e && (qn = null), de(At);
  }
  var At = ae(0);
  function ts(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var a = n.memoizedState;
        if (a !== null && ((a = a.dehydrated), a === null || a.data === '$?' || a.data === '$!'))
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if (n.flags & 128) return n;
      } else if (n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return null;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
    return null;
  }
  var CS =
      typeof AbortController < 'u'
        ? AbortController
        : function () {
            var e = [],
              n = (this.signal = {
                aborted: !1,
                addEventListener: function (a, o) {
                  e.push(o);
                },
              });
            this.abort = function () {
              (n.aborted = !0),
                e.forEach(function (a) {
                  return a();
                });
            };
          },
    RS = t.unstable_scheduleCallback,
    TS = t.unstable_NormalPriority,
    Ot = {
      $$typeof: w,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Nc() {
    return { controller: new CS(), data: new Map(), refCount: 0 };
  }
  function di(e) {
    e.refCount--,
      e.refCount === 0 &&
        RS(TS, function () {
          e.controller.abort();
        });
  }
  var pi = null,
    kc = 0,
    al = 0,
    ll = null;
  function wS(e, n) {
    if (pi === null) {
      var a = (pi = []);
      (kc = 0),
        (al = Ff()),
        (ll = {
          status: 'pending',
          value: void 0,
          then: function (o) {
            a.push(o);
          },
        });
    }
    return kc++, n.then(dm, dm), n;
  }
  function dm() {
    if (--kc === 0 && pi !== null) {
      ll !== null && (ll.status = 'fulfilled');
      var e = pi;
      (pi = null), (al = 0), (ll = null);
      for (var n = 0; n < e.length; n++) (0, e[n])();
    }
  }
  function AS(e, n) {
    var a = [],
      o = {
        status: 'pending',
        value: null,
        reason: null,
        then: function (c) {
          a.push(c);
        },
      };
    return (
      e.then(
        function () {
          (o.status = 'fulfilled'), (o.value = n);
          for (var c = 0; c < a.length; c++) (0, a[c])(n);
        },
        function (c) {
          for (o.status = 'rejected', o.reason = c, c = 0; c < a.length; c++) (0, a[c])(void 0);
        },
      ),
      o
    );
  }
  var pm = G.S;
  G.S = function (e, n) {
    typeof n == 'object' && n !== null && typeof n.then == 'function' && wS(e, n),
      pm !== null && pm(e, n);
  };
  var va = ae(null);
  function Uc() {
    var e = va.current;
    return e !== null ? e : Ie.pooledCache;
  }
  function ns(e, n) {
    n === null ? ce(va, va.current) : ce(va, n.pool);
  }
  function hm() {
    var e = Uc();
    return e === null ? null : { parent: Ot._currentValue, pool: e };
  }
  var Pr = 0,
    $e = null,
    Ve = null,
    Et = null,
    rs = !1,
    il = !1,
    ba = !1,
    as = 0,
    hi = 0,
    ol = null,
    OS = 0;
  function vt() {
    throw Error(i(321));
  }
  function jc(e, n) {
    if (n === null) return !1;
    for (var a = 0; a < n.length && a < e.length; a++) if (!rn(e[a], n[a])) return !1;
    return !0;
  }
  function Lc(e, n, a, o, c, d) {
    return (
      (Pr = d),
      ($e = n),
      (n.memoizedState = null),
      (n.updateQueue = null),
      (n.lanes = 0),
      (G.H = e === null || e.memoizedState === null ? Sa : qr),
      (ba = !1),
      (d = a(o, c)),
      (ba = !1),
      il && (d = gm(n, a, o, c)),
      mm(e),
      d
    );
  }
  function mm(e) {
    G.H = Fn;
    var n = Ve !== null && Ve.next !== null;
    if (((Pr = 0), (Et = Ve = $e = null), (rs = !1), (hi = 0), (ol = null), n)) throw Error(i(300));
    e === null || zt || ((e = e.dependencies), e !== null && ps(e) && (zt = !0));
  }
  function gm(e, n, a, o) {
    $e = e;
    var c = 0;
    do {
      if ((il && (ol = null), (hi = 0), (il = !1), 25 <= c)) throw Error(i(301));
      if (((c += 1), (Et = Ve = null), e.updateQueue != null)) {
        var d = e.updateQueue;
        (d.lastEffect = null),
          (d.events = null),
          (d.stores = null),
          d.memoCache != null && (d.memoCache.index = 0);
      }
      (G.H = xa), (d = n(a, o));
    } while (il);
    return d;
  }
  function MS() {
    var e = G.H,
      n = e.useState()[0];
    return (
      (n = typeof n.then == 'function' ? mi(n) : n),
      (e = e.useState()[0]),
      (Ve !== null ? Ve.memoizedState : null) !== e && ($e.flags |= 1024),
      n
    );
  }
  function Hc() {
    var e = as !== 0;
    return (as = 0), e;
  }
  function Pc(e, n, a) {
    (n.updateQueue = e.updateQueue), (n.flags &= -2053), (e.lanes &= ~a);
  }
  function qc(e) {
    if (rs) {
      for (e = e.memoizedState; e !== null; ) {
        var n = e.queue;
        n !== null && (n.pending = null), (e = e.next);
      }
      rs = !1;
    }
    (Pr = 0), (Et = Ve = $e = null), (il = !1), (hi = as = 0), (ol = null);
  }
  function en() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Et === null ? ($e.memoizedState = Et = e) : (Et = Et.next = e), Et;
  }
  function Ct() {
    if (Ve === null) {
      var e = $e.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ve.next;
    var n = Et === null ? $e.memoizedState : Et.next;
    if (n !== null) (Et = n), (Ve = e);
    else {
      if (e === null) throw $e.alternate === null ? Error(i(467)) : Error(i(310));
      (Ve = e),
        (e = {
          memoizedState: Ve.memoizedState,
          baseState: Ve.baseState,
          baseQueue: Ve.baseQueue,
          queue: Ve.queue,
          next: null,
        }),
        Et === null ? ($e.memoizedState = Et = e) : (Et = Et.next = e);
    }
    return Et;
  }
  var ls;
  ls = function () {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  };
  function mi(e) {
    var n = hi;
    return (
      (hi += 1),
      ol === null && (ol = []),
      (e = lm(ol, e, n)),
      (n = $e),
      (Et === null ? n.memoizedState : Et.next) === null &&
        ((n = n.alternate), (G.H = n === null || n.memoizedState === null ? Sa : qr)),
      e
    );
  }
  function is(e) {
    if (e !== null && typeof e == 'object') {
      if (typeof e.then == 'function') return mi(e);
      if (e.$$typeof === w) return qt(e);
    }
    throw Error(i(438, String(e)));
  }
  function Fc(e) {
    var n = null,
      a = $e.updateQueue;
    if ((a !== null && (n = a.memoCache), n == null)) {
      var o = $e.alternate;
      o !== null &&
        ((o = o.updateQueue),
        o !== null &&
          ((o = o.memoCache),
          o != null &&
            (n = {
              data: o.data.map(function (c) {
                return c.slice();
              }),
              index: 0,
            })));
    }
    if (
      (n == null && (n = { data: [], index: 0 }),
      a === null && ((a = ls()), ($e.updateQueue = a)),
      (a.memoCache = n),
      (a = n.data[n.index]),
      a === void 0)
    )
      for (a = n.data[n.index] = Array(e), o = 0; o < e; o++) a[o] = D;
    return n.index++, a;
  }
  function ur(e, n) {
    return typeof n == 'function' ? n(e) : n;
  }
  function os(e) {
    var n = Ct();
    return Gc(n, Ve, e);
  }
  function Gc(e, n, a) {
    var o = e.queue;
    if (o === null) throw Error(i(311));
    o.lastRenderedReducer = a;
    var c = e.baseQueue,
      d = o.pending;
    if (d !== null) {
      if (c !== null) {
        var g = c.next;
        (c.next = d.next), (d.next = g);
      }
      (n.baseQueue = c = d), (o.pending = null);
    }
    if (((d = e.baseState), c === null)) e.memoizedState = d;
    else {
      n = c.next;
      var T = (g = null),
        $ = null,
        N = n,
        W = !1;
      do {
        var re = N.lane & -536870913;
        if (re !== N.lane ? (Ne & re) === re : (Pr & re) === re) {
          var F = N.revertLane;
          if (F === 0)
            $ !== null &&
              ($ = $.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: N.action,
                  hasEagerState: N.hasEagerState,
                  eagerState: N.eagerState,
                  next: null,
                }),
              re === al && (W = !0);
          else if ((Pr & F) === F) {
            (N = N.next), F === al && (W = !0);
            continue;
          } else
            (re = {
              lane: 0,
              revertLane: N.revertLane,
              action: N.action,
              hasEagerState: N.hasEagerState,
              eagerState: N.eagerState,
              next: null,
            }),
              $ === null ? ((T = $ = re), (g = d)) : ($ = $.next = re),
              ($e.lanes |= F),
              (Ir |= F);
          (re = N.action), ba && a(d, re), (d = N.hasEagerState ? N.eagerState : a(d, re));
        } else
          (F = {
            lane: re,
            revertLane: N.revertLane,
            action: N.action,
            hasEagerState: N.hasEagerState,
            eagerState: N.eagerState,
            next: null,
          }),
            $ === null ? ((T = $ = F), (g = d)) : ($ = $.next = F),
            ($e.lanes |= re),
            (Ir |= re);
        N = N.next;
      } while (N !== null && N !== n);
      if (
        ($ === null ? (g = d) : ($.next = T),
        !rn(d, e.memoizedState) && ((zt = !0), W && ((a = ll), a !== null)))
      )
        throw a;
      (e.memoizedState = d), (e.baseState = g), (e.baseQueue = $), (o.lastRenderedState = d);
    }
    return c === null && (o.lanes = 0), [e.memoizedState, o.dispatch];
  }
  function Vc(e) {
    var n = Ct(),
      a = n.queue;
    if (a === null) throw Error(i(311));
    a.lastRenderedReducer = e;
    var o = a.dispatch,
      c = a.pending,
      d = n.memoizedState;
    if (c !== null) {
      a.pending = null;
      var g = (c = c.next);
      do (d = e(d, g.action)), (g = g.next);
      while (g !== c);
      rn(d, n.memoizedState) || (zt = !0),
        (n.memoizedState = d),
        n.baseQueue === null && (n.baseState = d),
        (a.lastRenderedState = d);
    }
    return [d, o];
  }
  function ym(e, n, a) {
    var o = $e,
      c = Ct(),
      d = Ue;
    if (d) {
      if (a === void 0) throw Error(i(407));
      a = a();
    } else a = n();
    var g = !rn((Ve || c).memoizedState, a);
    if (
      (g && ((c.memoizedState = a), (zt = !0)),
      (c = c.queue),
      Xc(Sm.bind(null, o, c, e), [e]),
      c.getSnapshot !== n || g || (Et !== null && Et.memoizedState.tag & 1))
    ) {
      if (
        ((o.flags |= 2048),
        sl(9, bm.bind(null, o, c, a, n), { destroy: void 0 }, null),
        Ie === null)
      )
        throw Error(i(349));
      d || Pr & 60 || vm(o, n, a);
    }
    return a;
  }
  function vm(e, n, a) {
    (e.flags |= 16384),
      (e = { getSnapshot: n, value: a }),
      (n = $e.updateQueue),
      n === null
        ? ((n = ls()), ($e.updateQueue = n), (n.stores = [e]))
        : ((a = n.stores), a === null ? (n.stores = [e]) : a.push(e));
  }
  function bm(e, n, a, o) {
    (n.value = a), (n.getSnapshot = o), xm(n) && Em(e);
  }
  function Sm(e, n, a) {
    return a(function () {
      xm(n) && Em(e);
    });
  }
  function xm(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var a = n();
      return !rn(e, a);
    } catch {
      return !0;
    }
  }
  function Em(e) {
    var n = jr(e, 2);
    n !== null && Wt(n, e, 2);
  }
  function Yc(e) {
    var n = en();
    if (typeof e == 'function') {
      var a = e;
      if (((e = a()), ba)) {
        Be(!0);
        try {
          a();
        } finally {
          Be(!1);
        }
      }
    }
    return (
      (n.memoizedState = n.baseState = e),
      (n.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ur,
        lastRenderedState: e,
      }),
      n
    );
  }
  function Cm(e, n, a, o) {
    return (e.baseState = a), Gc(e, Ve, typeof o == 'function' ? o : ur);
  }
  function $S(e, n, a, o, c) {
    if (cs(e)) throw Error(i(485));
    if (((e = n.action), e !== null)) {
      var d = {
        payload: c,
        action: e,
        next: null,
        isTransition: !0,
        status: 'pending',
        value: null,
        reason: null,
        listeners: [],
        then: function (g) {
          d.listeners.push(g);
        },
      };
      G.T !== null ? a(!0) : (d.isTransition = !1),
        o(d),
        (a = n.pending),
        a === null
          ? ((d.next = n.pending = d), Rm(n, d))
          : ((d.next = a.next), (n.pending = a.next = d));
    }
  }
  function Rm(e, n) {
    var a = n.action,
      o = n.payload,
      c = e.state;
    if (n.isTransition) {
      var d = G.T,
        g = {};
      G.T = g;
      try {
        var T = a(c, o),
          $ = G.S;
        $ !== null && $(g, T), Tm(e, n, T);
      } catch (N) {
        Kc(e, n, N);
      } finally {
        G.T = d;
      }
    } else
      try {
        (d = a(c, o)), Tm(e, n, d);
      } catch (N) {
        Kc(e, n, N);
      }
  }
  function Tm(e, n, a) {
    a !== null && typeof a == 'object' && typeof a.then == 'function'
      ? a.then(
          function (o) {
            wm(e, n, o);
          },
          function (o) {
            return Kc(e, n, o);
          },
        )
      : wm(e, n, a);
  }
  function wm(e, n, a) {
    (n.status = 'fulfilled'),
      (n.value = a),
      Am(n),
      (e.state = a),
      (n = e.pending),
      n !== null &&
        ((a = n.next), a === n ? (e.pending = null) : ((a = a.next), (n.next = a), Rm(e, a)));
  }
  function Kc(e, n, a) {
    var o = e.pending;
    if (((e.pending = null), o !== null)) {
      o = o.next;
      do (n.status = 'rejected'), (n.reason = a), Am(n), (n = n.next);
      while (n !== o);
    }
    e.action = null;
  }
  function Am(e) {
    e = e.listeners;
    for (var n = 0; n < e.length; n++) (0, e[n])();
  }
  function Om(e, n) {
    return n;
  }
  function Mm(e, n) {
    if (Ue) {
      var a = Ie.formState;
      if (a !== null) {
        e: {
          var o = $e;
          if (Ue) {
            if (Nt) {
              t: {
                for (var c = Nt, d = Pn; c.nodeType !== 8; ) {
                  if (!d) {
                    c = null;
                    break t;
                  }
                  if (((c = Nn(c.nextSibling)), c === null)) {
                    c = null;
                    break t;
                  }
                }
                (d = c.data), (c = d === 'F!' || d === 'F' ? c : null);
              }
              if (c) {
                (Nt = Nn(c.nextSibling)), (o = c.data === 'F!');
                break e;
              }
            }
            ga(o);
          }
          o = !1;
        }
        o && (n = a[0]);
      }
    }
    return (
      (a = en()),
      (a.memoizedState = a.baseState = n),
      (o = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Om,
        lastRenderedState: n,
      }),
      (a.queue = o),
      (a = Km.bind(null, $e, o)),
      (o.dispatch = a),
      (o = Yc(!1)),
      (d = Jc.bind(null, $e, !1, o.queue)),
      (o = en()),
      (c = { state: n, dispatch: null, action: e, pending: null }),
      (o.queue = c),
      (a = $S.bind(null, $e, c, d, a)),
      (c.dispatch = a),
      (o.memoizedState = e),
      [n, a, !1]
    );
  }
  function $m(e) {
    var n = Ct();
    return zm(n, Ve, e);
  }
  function zm(e, n, a) {
    (n = Gc(e, n, Om)[0]),
      (e = os(ur)[0]),
      (n = typeof n == 'object' && n !== null && typeof n.then == 'function' ? mi(n) : n);
    var o = Ct(),
      c = o.queue,
      d = c.dispatch;
    return (
      a !== o.memoizedState &&
        (($e.flags |= 2048), sl(9, zS.bind(null, c, a), { destroy: void 0 }, null)),
      [n, d, e]
    );
  }
  function zS(e, n) {
    e.action = n;
  }
  function Dm(e) {
    var n = Ct(),
      a = Ve;
    if (a !== null) return zm(n, a, e);
    Ct(), (n = n.memoizedState), (a = Ct());
    var o = a.queue.dispatch;
    return (a.memoizedState = e), [n, o, !1];
  }
  function sl(e, n, a, o) {
    return (
      (e = { tag: e, create: n, inst: a, deps: o, next: null }),
      (n = $e.updateQueue),
      n === null && ((n = ls()), ($e.updateQueue = n)),
      (a = n.lastEffect),
      a === null
        ? (n.lastEffect = e.next = e)
        : ((o = a.next), (a.next = e), (e.next = o), (n.lastEffect = e)),
      e
    );
  }
  function _m() {
    return Ct().memoizedState;
  }
  function ss(e, n, a, o) {
    var c = en();
    ($e.flags |= e), (c.memoizedState = sl(1 | n, a, { destroy: void 0 }, o === void 0 ? null : o));
  }
  function us(e, n, a, o) {
    var c = Ct();
    o = o === void 0 ? null : o;
    var d = c.memoizedState.inst;
    Ve !== null && o !== null && jc(o, Ve.memoizedState.deps)
      ? (c.memoizedState = sl(n, a, d, o))
      : (($e.flags |= e), (c.memoizedState = sl(1 | n, a, d, o)));
  }
  function Bm(e, n) {
    ss(8390656, 8, e, n);
  }
  function Xc(e, n) {
    us(2048, 8, e, n);
  }
  function Nm(e, n) {
    return us(4, 2, e, n);
  }
  function km(e, n) {
    return us(4, 4, e, n);
  }
  function Um(e, n) {
    if (typeof n == 'function') {
      e = e();
      var a = n(e);
      return function () {
        typeof a == 'function' ? a() : n(null);
      };
    }
    if (n != null)
      return (
        (e = e()),
        (n.current = e),
        function () {
          n.current = null;
        }
      );
  }
  function jm(e, n, a) {
    (a = a != null ? a.concat([e]) : null), us(4, 4, Um.bind(null, n, e), a);
  }
  function Qc() {}
  function Lm(e, n) {
    var a = Ct();
    n = n === void 0 ? null : n;
    var o = a.memoizedState;
    return n !== null && jc(n, o[1]) ? o[0] : ((a.memoizedState = [e, n]), e);
  }
  function Hm(e, n) {
    var a = Ct();
    n = n === void 0 ? null : n;
    var o = a.memoizedState;
    if (n !== null && jc(n, o[1])) return o[0];
    if (((o = e()), ba)) {
      Be(!0);
      try {
        e();
      } finally {
        Be(!1);
      }
    }
    return (a.memoizedState = [o, n]), o;
  }
  function Wc(e, n, a) {
    return a === void 0 || Pr & 1073741824
      ? (e.memoizedState = n)
      : ((e.memoizedState = a), (e = q0()), ($e.lanes |= e), (Ir |= e), a);
  }
  function Pm(e, n, a, o) {
    return rn(a, n)
      ? a
      : rl.current !== null
        ? ((e = Wc(e, a, o)), rn(e, n) || (zt = !0), e)
        : Pr & 42
          ? ((e = q0()), ($e.lanes |= e), (Ir |= e), n)
          : ((zt = !0), (e.memoizedState = a));
  }
  function qm(e, n, a, o, c) {
    var d = le.p;
    le.p = d !== 0 && 8 > d ? d : 8;
    var g = G.T,
      T = {};
    (G.T = T), Jc(e, !1, n, a);
    try {
      var $ = c(),
        N = G.S;
      if (
        (N !== null && N(T, $), $ !== null && typeof $ == 'object' && typeof $.then == 'function')
      ) {
        var W = AS($, o);
        gi(e, n, W, sn(e));
      } else gi(e, n, o, sn(e));
    } catch (re) {
      gi(e, n, { then: function () {}, status: 'rejected', reason: re }, sn());
    } finally {
      (le.p = d), (G.T = g);
    }
  }
  function DS() {}
  function Ic(e, n, a, o) {
    if (e.tag !== 5) throw Error(i(476));
    var c = Fm(e).queue;
    qm(
      e,
      c,
      n,
      pe,
      a === null
        ? DS
        : function () {
            return Gm(e), a(o);
          },
    );
  }
  function Fm(e) {
    var n = e.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: pe,
      baseState: pe,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ur,
        lastRenderedState: pe,
      },
      next: null,
    };
    var a = {};
    return (
      (n.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: ur,
          lastRenderedState: a,
        },
        next: null,
      }),
      (e.memoizedState = n),
      (e = e.alternate),
      e !== null && (e.memoizedState = n),
      n
    );
  }
  function Gm(e) {
    var n = Fm(e).next.queue;
    gi(e, n, {}, sn());
  }
  function Zc() {
    return qt(ki);
  }
  function Vm() {
    return Ct().memoizedState;
  }
  function Ym() {
    return Ct().memoizedState;
  }
  function _S(e) {
    for (var n = e.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var a = sn();
          e = Vr(a);
          var o = Yr(n, e, a);
          o !== null && (Wt(o, n, a), bi(o, n, a)), (n = { cache: Nc() }), (e.payload = n);
          return;
      }
      n = n.return;
    }
  }
  function BS(e, n, a) {
    var o = sn();
    (a = { lane: o, revertLane: 0, action: a, hasEagerState: !1, eagerState: null, next: null }),
      cs(e) ? Xm(n, a) : ((a = Oc(e, n, a, o)), a !== null && (Wt(a, e, o), Qm(a, n, o)));
  }
  function Km(e, n, a) {
    var o = sn();
    gi(e, n, a, o);
  }
  function gi(e, n, a, o) {
    var c = { lane: o, revertLane: 0, action: a, hasEagerState: !1, eagerState: null, next: null };
    if (cs(e)) Xm(n, c);
    else {
      var d = e.alternate;
      if (
        e.lanes === 0 &&
        (d === null || d.lanes === 0) &&
        ((d = n.lastRenderedReducer), d !== null)
      )
        try {
          var g = n.lastRenderedState,
            T = d(g, a);
          if (((c.hasEagerState = !0), (c.eagerState = T), rn(T, g)))
            return Ko(e, n, c, 0), Ie === null && Yo(), !1;
        } catch {
        } finally {
        }
      if (((a = Oc(e, n, c, o)), a !== null)) return Wt(a, e, o), Qm(a, n, o), !0;
    }
    return !1;
  }
  function Jc(e, n, a, o) {
    if (
      ((o = {
        lane: 2,
        revertLane: Ff(),
        action: o,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      cs(e))
    ) {
      if (n) throw Error(i(479));
    } else (n = Oc(e, a, o, 2)), n !== null && Wt(n, e, 2);
  }
  function cs(e) {
    var n = e.alternate;
    return e === $e || (n !== null && n === $e);
  }
  function Xm(e, n) {
    il = rs = !0;
    var a = e.pending;
    a === null ? (n.next = n) : ((n.next = a.next), (a.next = n)), (e.pending = n);
  }
  function Qm(e, n, a) {
    if (a & 4194176) {
      var o = n.lanes;
      (o &= e.pendingLanes), (a |= o), (n.lanes = a), ih(e, a);
    }
  }
  var Fn = {
    readContext: qt,
    use: is,
    useCallback: vt,
    useContext: vt,
    useEffect: vt,
    useImperativeHandle: vt,
    useLayoutEffect: vt,
    useInsertionEffect: vt,
    useMemo: vt,
    useReducer: vt,
    useRef: vt,
    useState: vt,
    useDebugValue: vt,
    useDeferredValue: vt,
    useTransition: vt,
    useSyncExternalStore: vt,
    useId: vt,
  };
  (Fn.useCacheRefresh = vt),
    (Fn.useMemoCache = vt),
    (Fn.useHostTransitionStatus = vt),
    (Fn.useFormState = vt),
    (Fn.useActionState = vt),
    (Fn.useOptimistic = vt);
  var Sa = {
    readContext: qt,
    use: is,
    useCallback: function (e, n) {
      return (en().memoizedState = [e, n === void 0 ? null : n]), e;
    },
    useContext: qt,
    useEffect: Bm,
    useImperativeHandle: function (e, n, a) {
      (a = a != null ? a.concat([e]) : null), ss(4194308, 4, Um.bind(null, n, e), a);
    },
    useLayoutEffect: function (e, n) {
      return ss(4194308, 4, e, n);
    },
    useInsertionEffect: function (e, n) {
      ss(4, 2, e, n);
    },
    useMemo: function (e, n) {
      var a = en();
      n = n === void 0 ? null : n;
      var o = e();
      if (ba) {
        Be(!0);
        try {
          e();
        } finally {
          Be(!1);
        }
      }
      return (a.memoizedState = [o, n]), o;
    },
    useReducer: function (e, n, a) {
      var o = en();
      if (a !== void 0) {
        var c = a(n);
        if (ba) {
          Be(!0);
          try {
            a(n);
          } finally {
            Be(!1);
          }
        }
      } else c = n;
      return (
        (o.memoizedState = o.baseState = c),
        (e = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: c,
        }),
        (o.queue = e),
        (e = e.dispatch = BS.bind(null, $e, e)),
        [o.memoizedState, e]
      );
    },
    useRef: function (e) {
      var n = en();
      return (e = { current: e }), (n.memoizedState = e);
    },
    useState: function (e) {
      e = Yc(e);
      var n = e.queue,
        a = Km.bind(null, $e, n);
      return (n.dispatch = a), [e.memoizedState, a];
    },
    useDebugValue: Qc,
    useDeferredValue: function (e, n) {
      var a = en();
      return Wc(a, e, n);
    },
    useTransition: function () {
      var e = Yc(!1);
      return (e = qm.bind(null, $e, e.queue, !0, !1)), (en().memoizedState = e), [!1, e];
    },
    useSyncExternalStore: function (e, n, a) {
      var o = $e,
        c = en();
      if (Ue) {
        if (a === void 0) throw Error(i(407));
        a = a();
      } else {
        if (((a = n()), Ie === null)) throw Error(i(349));
        Ne & 60 || vm(o, n, a);
      }
      c.memoizedState = a;
      var d = { value: a, getSnapshot: n };
      return (
        (c.queue = d),
        Bm(Sm.bind(null, o, d, e), [e]),
        (o.flags |= 2048),
        sl(9, bm.bind(null, o, d, a, n), { destroy: void 0 }, null),
        a
      );
    },
    useId: function () {
      var e = en(),
        n = Ie.identifierPrefix;
      if (Ue) {
        var a = or,
          o = ir;
        (a = (o & ~(1 << (32 - Le(o) - 1))).toString(32) + a),
          (n = ':' + n + 'R' + a),
          (a = as++),
          0 < a && (n += 'H' + a.toString(32)),
          (n += ':');
      } else (a = OS++), (n = ':' + n + 'r' + a.toString(32) + ':');
      return (e.memoizedState = n);
    },
    useCacheRefresh: function () {
      return (en().memoizedState = _S.bind(null, $e));
    },
  };
  (Sa.useMemoCache = Fc),
    (Sa.useHostTransitionStatus = Zc),
    (Sa.useFormState = Mm),
    (Sa.useActionState = Mm),
    (Sa.useOptimistic = function (e) {
      var n = en();
      n.memoizedState = n.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null,
      };
      return (n.queue = a), (n = Jc.bind(null, $e, !0, a)), (a.dispatch = n), [e, n];
    });
  var qr = {
    readContext: qt,
    use: is,
    useCallback: Lm,
    useContext: qt,
    useEffect: Xc,
    useImperativeHandle: jm,
    useInsertionEffect: Nm,
    useLayoutEffect: km,
    useMemo: Hm,
    useReducer: os,
    useRef: _m,
    useState: function () {
      return os(ur);
    },
    useDebugValue: Qc,
    useDeferredValue: function (e, n) {
      var a = Ct();
      return Pm(a, Ve.memoizedState, e, n);
    },
    useTransition: function () {
      var e = os(ur)[0],
        n = Ct().memoizedState;
      return [typeof e == 'boolean' ? e : mi(e), n];
    },
    useSyncExternalStore: ym,
    useId: Vm,
  };
  (qr.useCacheRefresh = Ym),
    (qr.useMemoCache = Fc),
    (qr.useHostTransitionStatus = Zc),
    (qr.useFormState = $m),
    (qr.useActionState = $m),
    (qr.useOptimistic = function (e, n) {
      var a = Ct();
      return Cm(a, Ve, e, n);
    });
  var xa = {
    readContext: qt,
    use: is,
    useCallback: Lm,
    useContext: qt,
    useEffect: Xc,
    useImperativeHandle: jm,
    useInsertionEffect: Nm,
    useLayoutEffect: km,
    useMemo: Hm,
    useReducer: Vc,
    useRef: _m,
    useState: function () {
      return Vc(ur);
    },
    useDebugValue: Qc,
    useDeferredValue: function (e, n) {
      var a = Ct();
      return Ve === null ? Wc(a, e, n) : Pm(a, Ve.memoizedState, e, n);
    },
    useTransition: function () {
      var e = Vc(ur)[0],
        n = Ct().memoizedState;
      return [typeof e == 'boolean' ? e : mi(e), n];
    },
    useSyncExternalStore: ym,
    useId: Vm,
  };
  (xa.useCacheRefresh = Ym),
    (xa.useMemoCache = Fc),
    (xa.useHostTransitionStatus = Zc),
    (xa.useFormState = Dm),
    (xa.useActionState = Dm),
    (xa.useOptimistic = function (e, n) {
      var a = Ct();
      return Ve !== null ? Cm(a, Ve, e, n) : ((a.baseState = e), [e, a.queue.dispatch]);
    });
  function ef(e, n, a, o) {
    (n = e.memoizedState),
      (a = a(o, n)),
      (a = a == null ? n : x({}, n, a)),
      (e.memoizedState = a),
      e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var tf = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? ie(e) === e : !1;
    },
    enqueueSetState: function (e, n, a) {
      e = e._reactInternals;
      var o = sn(),
        c = Vr(o);
      (c.payload = n),
        a != null && (c.callback = a),
        (n = Yr(e, c, o)),
        n !== null && (Wt(n, e, o), bi(n, e, o));
    },
    enqueueReplaceState: function (e, n, a) {
      e = e._reactInternals;
      var o = sn(),
        c = Vr(o);
      (c.tag = 1),
        (c.payload = n),
        a != null && (c.callback = a),
        (n = Yr(e, c, o)),
        n !== null && (Wt(n, e, o), bi(n, e, o));
    },
    enqueueForceUpdate: function (e, n) {
      e = e._reactInternals;
      var a = sn(),
        o = Vr(a);
      (o.tag = 2),
        n != null && (o.callback = n),
        (n = Yr(e, o, a)),
        n !== null && (Wt(n, e, a), bi(n, e, a));
    },
  };
  function Wm(e, n, a, o, c, d, g) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(o, d, g)
        : n.prototype && n.prototype.isPureReactComponent
          ? !ri(a, o) || !ri(c, d)
          : !0
    );
  }
  function Im(e, n, a, o) {
    (e = n.state),
      typeof n.componentWillReceiveProps == 'function' && n.componentWillReceiveProps(a, o),
      typeof n.UNSAFE_componentWillReceiveProps == 'function' &&
        n.UNSAFE_componentWillReceiveProps(a, o),
      n.state !== e && tf.enqueueReplaceState(n, n.state, null);
  }
  function Ea(e, n) {
    var a = n;
    if ('ref' in n) {
      a = {};
      for (var o in n) o !== 'ref' && (a[o] = n[o]);
    }
    if ((e = e.defaultProps)) {
      a === n && (a = x({}, a));
      for (var c in e) a[c] === void 0 && (a[c] = e[c]);
    }
    return a;
  }
  var fs =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
            var n = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof e == 'object' && e !== null && typeof e.message == 'string'
                  ? String(e.message)
                  : String(e),
              error: e,
            });
            if (!window.dispatchEvent(n)) return;
          } else if (typeof process == 'object' && typeof process.emit == 'function') {
            process.emit('uncaughtException', e);
            return;
          }
          console.error(e);
        };
  function Zm(e) {
    fs(e);
  }
  function Jm(e) {
    console.error(e);
  }
  function e0(e) {
    fs(e);
  }
  function ds(e, n) {
    try {
      var a = e.onUncaughtError;
      a(n.value, { componentStack: n.stack });
    } catch (o) {
      setTimeout(function () {
        throw o;
      });
    }
  }
  function t0(e, n, a) {
    try {
      var o = e.onCaughtError;
      o(a.value, { componentStack: a.stack, errorBoundary: n.tag === 1 ? n.stateNode : null });
    } catch (c) {
      setTimeout(function () {
        throw c;
      });
    }
  }
  function nf(e, n, a) {
    return (
      (a = Vr(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        ds(e, n);
      }),
      a
    );
  }
  function n0(e) {
    return (e = Vr(e)), (e.tag = 3), e;
  }
  function r0(e, n, a, o) {
    var c = a.type.getDerivedStateFromError;
    if (typeof c == 'function') {
      var d = o.value;
      (e.payload = function () {
        return c(d);
      }),
        (e.callback = function () {
          t0(n, a, o);
        });
    }
    var g = a.stateNode;
    g !== null &&
      typeof g.componentDidCatch == 'function' &&
      (e.callback = function () {
        t0(n, a, o),
          typeof c != 'function' && (Zr === null ? (Zr = new Set([this])) : Zr.add(this));
        var T = o.stack;
        this.componentDidCatch(o.value, { componentStack: T !== null ? T : '' });
      });
  }
  function NS(e, n, a, o, c) {
    if (((a.flags |= 32768), o !== null && typeof o == 'object' && typeof o.then == 'function')) {
      if (((n = a.alternate), n !== null && vi(n, a, c, !0), (a = bn.current), a !== null)) {
        switch (a.tag) {
          case 13:
            return (
              qn === null ? jf() : a.alternate === null && ft === 0 && (ft = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = c),
              o === Dc
                ? (a.flags |= 16384)
                : ((n = a.updateQueue),
                  n === null ? (a.updateQueue = new Set([o])) : n.add(o),
                  Hf(e, o, c)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              o === Dc
                ? (a.flags |= 16384)
                : ((n = a.updateQueue),
                  n === null
                    ? ((n = { transitions: null, markerInstances: null, retryQueue: new Set([o]) }),
                      (a.updateQueue = n))
                    : ((a = n.retryQueue), a === null ? (n.retryQueue = new Set([o])) : a.add(o)),
                  Hf(e, o, c)),
              !1
            );
        }
        throw Error(i(435, a.tag));
      }
      return Hf(e, o, c), jf(), !1;
    }
    if (Ue)
      return (
        (n = bn.current),
        n !== null
          ? (!(n.flags & 65536) && (n.flags |= 256),
            (n.flags |= 65536),
            (n.lanes = c),
            o !== zc && ((e = Error(i(422), { cause: o })), oi(gn(e, a))))
          : (o !== zc && ((n = Error(i(423), { cause: o })), oi(gn(n, a))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (c &= -c),
            (e.lanes |= c),
            (o = gn(o, a)),
            (c = nf(e.stateNode, o, c)),
            vf(e, c),
            ft !== 4 && (ft = 2)),
        !1
      );
    var d = Error(i(520), { cause: o });
    if (((d = gn(d, a)), Ai === null ? (Ai = [d]) : Ai.push(d), ft !== 4 && (ft = 2), n === null))
      return !0;
    (o = gn(o, a)), (a = n);
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (e = c & -c),
            (a.lanes |= e),
            (e = nf(a.stateNode, o, e)),
            vf(a, e),
            !1
          );
        case 1:
          if (
            ((n = a.type),
            (d = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof n.getDerivedStateFromError == 'function' ||
                (d !== null &&
                  typeof d.componentDidCatch == 'function' &&
                  (Zr === null || !Zr.has(d)))))
          )
            return (
              (a.flags |= 65536),
              (c &= -c),
              (a.lanes |= c),
              (c = n0(c)),
              r0(c, e, a, o),
              vf(a, c),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var a0 = Error(i(461)),
    zt = !1;
  function kt(e, n, a, o) {
    n.child = e === null ? um(n, null, a, o) : ya(n, e.child, a, o);
  }
  function l0(e, n, a, o, c) {
    a = a.render;
    var d = n.ref;
    if ('ref' in o) {
      var g = {};
      for (var T in o) T !== 'ref' && (g[T] = o[T]);
    } else g = o;
    return (
      Ra(n),
      (o = Lc(e, n, a, g, d, c)),
      (T = Hc()),
      e !== null && !zt
        ? (Pc(e, n, c), cr(e, n, c))
        : (Ue && T && Mc(n), (n.flags |= 1), kt(e, n, o, c), n.child)
    );
  }
  function i0(e, n, a, o, c) {
    if (e === null) {
      var d = a.type;
      return typeof d == 'function' && !wf(d) && d.defaultProps === void 0 && a.compare === null
        ? ((n.tag = 15), (n.type = d), o0(e, n, d, o, c))
        : ((e = ys(a.type, null, o, n, n.mode, c)), (e.ref = n.ref), (e.return = n), (n.child = e));
    }
    if (((d = e.child), !df(e, c))) {
      var g = d.memoizedProps;
      if (((a = a.compare), (a = a !== null ? a : ri), a(g, o) && e.ref === n.ref))
        return cr(e, n, c);
    }
    return (n.flags |= 1), (e = Wr(d, o)), (e.ref = n.ref), (e.return = n), (n.child = e);
  }
  function o0(e, n, a, o, c) {
    if (e !== null) {
      var d = e.memoizedProps;
      if (ri(d, o) && e.ref === n.ref)
        if (((zt = !1), (n.pendingProps = o = d), df(e, c))) e.flags & 131072 && (zt = !0);
        else return (n.lanes = e.lanes), cr(e, n, c);
    }
    return rf(e, n, a, o, c);
  }
  function s0(e, n, a) {
    var o = n.pendingProps,
      c = o.children,
      d = (n.stateNode._pendingVisibility & 2) !== 0,
      g = e !== null ? e.memoizedState : null;
    if ((yi(e, n), o.mode === 'hidden' || d)) {
      if (n.flags & 128) {
        if (((o = g !== null ? g.baseLanes | a : a), e !== null)) {
          for (c = n.child = e.child, d = 0; c !== null; )
            (d = d | c.lanes | c.childLanes), (c = c.sibling);
          n.childLanes = d & ~o;
        } else (n.childLanes = 0), (n.child = null);
        return u0(e, n, o, a);
      }
      if (a & 536870912)
        (n.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && ns(n, g !== null ? g.cachePool : null),
          g !== null ? cm(n, g) : _c(),
          fm(n);
      else
        return (n.lanes = n.childLanes = 536870912), u0(e, n, g !== null ? g.baseLanes | a : a, a);
    } else
      g !== null
        ? (ns(n, g.cachePool), cm(n, g), Hr(), (n.memoizedState = null))
        : (e !== null && ns(n, null), _c(), Hr());
    return kt(e, n, c, a), n.child;
  }
  function u0(e, n, a, o) {
    var c = Uc();
    return (
      (c = c === null ? null : { parent: Ot._currentValue, pool: c }),
      (n.memoizedState = { baseLanes: a, cachePool: c }),
      e !== null && ns(n, null),
      _c(),
      fm(n),
      e !== null && vi(e, n, o, !0),
      null
    );
  }
  function yi(e, n) {
    var a = n.ref;
    if (a === null) e !== null && e.ref !== null && (n.flags |= 2097664);
    else {
      if (typeof a != 'function' && typeof a != 'object') throw Error(i(284));
      (e === null || e.ref !== a) && (n.flags |= 2097664);
    }
  }
  function rf(e, n, a, o, c) {
    return (
      Ra(n),
      (a = Lc(e, n, a, o, void 0, c)),
      (o = Hc()),
      e !== null && !zt
        ? (Pc(e, n, c), cr(e, n, c))
        : (Ue && o && Mc(n), (n.flags |= 1), kt(e, n, a, c), n.child)
    );
  }
  function c0(e, n, a, o, c, d) {
    return (
      Ra(n),
      (n.updateQueue = null),
      (a = gm(n, o, a, c)),
      mm(e),
      (o = Hc()),
      e !== null && !zt
        ? (Pc(e, n, d), cr(e, n, d))
        : (Ue && o && Mc(n), (n.flags |= 1), kt(e, n, a, d), n.child)
    );
  }
  function f0(e, n, a, o, c) {
    if ((Ra(n), n.stateNode === null)) {
      var d = Ja,
        g = a.contextType;
      typeof g == 'object' && g !== null && (d = qt(g)),
        (d = new a(o, d)),
        (n.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null),
        (d.updater = tf),
        (n.stateNode = d),
        (d._reactInternals = n),
        (d = n.stateNode),
        (d.props = o),
        (d.state = n.memoizedState),
        (d.refs = {}),
        gf(n),
        (g = a.contextType),
        (d.context = typeof g == 'object' && g !== null ? qt(g) : Ja),
        (d.state = n.memoizedState),
        (g = a.getDerivedStateFromProps),
        typeof g == 'function' && (ef(n, a, g, o), (d.state = n.memoizedState)),
        typeof a.getDerivedStateFromProps == 'function' ||
          typeof d.getSnapshotBeforeUpdate == 'function' ||
          (typeof d.UNSAFE_componentWillMount != 'function' &&
            typeof d.componentWillMount != 'function') ||
          ((g = d.state),
          typeof d.componentWillMount == 'function' && d.componentWillMount(),
          typeof d.UNSAFE_componentWillMount == 'function' && d.UNSAFE_componentWillMount(),
          g !== d.state && tf.enqueueReplaceState(d, d.state, null),
          xi(n, o, d, c),
          Si(),
          (d.state = n.memoizedState)),
        typeof d.componentDidMount == 'function' && (n.flags |= 4194308),
        (o = !0);
    } else if (e === null) {
      d = n.stateNode;
      var T = n.memoizedProps,
        $ = Ea(a, T);
      d.props = $;
      var N = d.context,
        W = a.contextType;
      (g = Ja), typeof W == 'object' && W !== null && (g = qt(W));
      var re = a.getDerivedStateFromProps;
      (W = typeof re == 'function' || typeof d.getSnapshotBeforeUpdate == 'function'),
        (T = n.pendingProps !== T),
        W ||
          (typeof d.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof d.componentWillReceiveProps != 'function') ||
          ((T || N !== g) && Im(n, d, o, g)),
        (Gr = !1);
      var F = n.memoizedState;
      (d.state = F),
        xi(n, o, d, c),
        Si(),
        (N = n.memoizedState),
        T || F !== N || Gr
          ? (typeof re == 'function' && (ef(n, a, re, o), (N = n.memoizedState)),
            ($ = Gr || Wm(n, a, $, o, F, N, g))
              ? (W ||
                  (typeof d.UNSAFE_componentWillMount != 'function' &&
                    typeof d.componentWillMount != 'function') ||
                  (typeof d.componentWillMount == 'function' && d.componentWillMount(),
                  typeof d.UNSAFE_componentWillMount == 'function' &&
                    d.UNSAFE_componentWillMount()),
                typeof d.componentDidMount == 'function' && (n.flags |= 4194308))
              : (typeof d.componentDidMount == 'function' && (n.flags |= 4194308),
                (n.memoizedProps = o),
                (n.memoizedState = N)),
            (d.props = o),
            (d.state = N),
            (d.context = g),
            (o = $))
          : (typeof d.componentDidMount == 'function' && (n.flags |= 4194308), (o = !1));
    } else {
      (d = n.stateNode),
        yf(e, n),
        (g = n.memoizedProps),
        (W = Ea(a, g)),
        (d.props = W),
        (re = n.pendingProps),
        (F = d.context),
        (N = a.contextType),
        ($ = Ja),
        typeof N == 'object' && N !== null && ($ = qt(N)),
        (T = a.getDerivedStateFromProps),
        (N = typeof T == 'function' || typeof d.getSnapshotBeforeUpdate == 'function') ||
          (typeof d.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof d.componentWillReceiveProps != 'function') ||
          ((g !== re || F !== $) && Im(n, d, o, $)),
        (Gr = !1),
        (F = n.memoizedState),
        (d.state = F),
        xi(n, o, d, c),
        Si();
      var Q = n.memoizedState;
      g !== re || F !== Q || Gr || (e !== null && e.dependencies !== null && ps(e.dependencies))
        ? (typeof T == 'function' && (ef(n, a, T, o), (Q = n.memoizedState)),
          (W =
            Gr ||
            Wm(n, a, W, o, F, Q, $) ||
            (e !== null && e.dependencies !== null && ps(e.dependencies)))
            ? (N ||
                (typeof d.UNSAFE_componentWillUpdate != 'function' &&
                  typeof d.componentWillUpdate != 'function') ||
                (typeof d.componentWillUpdate == 'function' && d.componentWillUpdate(o, Q, $),
                typeof d.UNSAFE_componentWillUpdate == 'function' &&
                  d.UNSAFE_componentWillUpdate(o, Q, $)),
              typeof d.componentDidUpdate == 'function' && (n.flags |= 4),
              typeof d.getSnapshotBeforeUpdate == 'function' && (n.flags |= 1024))
            : (typeof d.componentDidUpdate != 'function' ||
                (g === e.memoizedProps && F === e.memoizedState) ||
                (n.flags |= 4),
              typeof d.getSnapshotBeforeUpdate != 'function' ||
                (g === e.memoizedProps && F === e.memoizedState) ||
                (n.flags |= 1024),
              (n.memoizedProps = o),
              (n.memoizedState = Q)),
          (d.props = o),
          (d.state = Q),
          (d.context = $),
          (o = W))
        : (typeof d.componentDidUpdate != 'function' ||
            (g === e.memoizedProps && F === e.memoizedState) ||
            (n.flags |= 4),
          typeof d.getSnapshotBeforeUpdate != 'function' ||
            (g === e.memoizedProps && F === e.memoizedState) ||
            (n.flags |= 1024),
          (o = !1));
    }
    return (
      (d = o),
      yi(e, n),
      (o = (n.flags & 128) !== 0),
      d || o
        ? ((d = n.stateNode),
          (a = o && typeof a.getDerivedStateFromError != 'function' ? null : d.render()),
          (n.flags |= 1),
          e !== null && o
            ? ((n.child = ya(n, e.child, null, c)), (n.child = ya(n, null, a, c)))
            : kt(e, n, a, c),
          (n.memoizedState = d.state),
          (e = n.child))
        : (e = cr(e, n, c)),
      e
    );
  }
  function d0(e, n, a, o) {
    return ii(), (n.flags |= 256), kt(e, n, a, o), n.child;
  }
  var af = { dehydrated: null, treeContext: null, retryLane: 0 };
  function lf(e) {
    return { baseLanes: e, cachePool: hm() };
  }
  function of(e, n, a) {
    return (e = e !== null ? e.childLanes & ~a : 0), n && (e |= Cn), e;
  }
  function p0(e, n, a) {
    var o = n.pendingProps,
      c = !1,
      d = (n.flags & 128) !== 0,
      g;
    if (
      ((g = d) || (g = e !== null && e.memoizedState === null ? !1 : (At.current & 2) !== 0),
      g && ((c = !0), (n.flags &= -129)),
      (g = (n.flags & 32) !== 0),
      (n.flags &= -33),
      e === null)
    ) {
      if (Ue) {
        if ((c ? Lr(n) : Hr(), Ue)) {
          var T = Nt,
            $;
          if (($ = T)) {
            e: {
              for ($ = T, T = Pn; $.nodeType !== 8; ) {
                if (!T) {
                  T = null;
                  break e;
                }
                if ((($ = Nn($.nextSibling)), $ === null)) {
                  T = null;
                  break e;
                }
              }
              T = $;
            }
            T !== null
              ? ((n.memoizedState = {
                  dehydrated: T,
                  treeContext: ha !== null ? { id: ir, overflow: or } : null,
                  retryLane: 536870912,
                }),
                ($ = En(18, null, null, 0)),
                ($.stateNode = T),
                ($.return = n),
                (n.child = $),
                (Qt = n),
                (Nt = null),
                ($ = !0))
              : ($ = !1);
          }
          $ || ga(n);
        }
        if (((T = n.memoizedState), T !== null && ((T = T.dehydrated), T !== null)))
          return T.data === '$!' ? (n.lanes = 16) : (n.lanes = 536870912), null;
        sr(n);
      }
      return (
        (T = o.children),
        (o = o.fallback),
        c
          ? (Hr(),
            (c = n.mode),
            (T = uf({ mode: 'hidden', children: T }, c)),
            (o = wa(o, c, a, null)),
            (T.return = n),
            (o.return = n),
            (T.sibling = o),
            (n.child = T),
            (c = n.child),
            (c.memoizedState = lf(a)),
            (c.childLanes = of(e, g, a)),
            (n.memoizedState = af),
            o)
          : (Lr(n), sf(n, T))
      );
    }
    if ((($ = e.memoizedState), $ !== null && ((T = $.dehydrated), T !== null))) {
      if (d)
        n.flags & 256
          ? (Lr(n), (n.flags &= -257), (n = cf(e, n, a)))
          : n.memoizedState !== null
            ? (Hr(), (n.child = e.child), (n.flags |= 128), (n = null))
            : (Hr(),
              (c = o.fallback),
              (T = n.mode),
              (o = uf({ mode: 'visible', children: o.children }, T)),
              (c = wa(c, T, a, null)),
              (c.flags |= 2),
              (o.return = n),
              (c.return = n),
              (o.sibling = c),
              (n.child = o),
              ya(n, e.child, null, a),
              (o = n.child),
              (o.memoizedState = lf(a)),
              (o.childLanes = of(e, g, a)),
              (n.memoizedState = af),
              (n = c));
      else if ((Lr(n), T.data === '$!')) {
        if (((g = T.nextSibling && T.nextSibling.dataset), g)) var N = g.dgst;
        (g = N),
          (o = Error(i(419))),
          (o.stack = ''),
          (o.digest = g),
          oi({ value: o, source: null, stack: null }),
          (n = cf(e, n, a));
      } else if ((zt || vi(e, n, a, !1), (g = (a & e.childLanes) !== 0), zt || g)) {
        if (((g = Ie), g !== null)) {
          if (((o = a & -a), o & 42)) o = 1;
          else
            switch (o) {
              case 2:
                o = 1;
                break;
              case 8:
                o = 4;
                break;
              case 32:
                o = 16;
                break;
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
                o = 64;
                break;
              case 268435456:
                o = 134217728;
                break;
              default:
                o = 0;
            }
          if (((o = o & (g.suspendedLanes | a) ? 0 : o), o !== 0 && o !== $.retryLane))
            throw (($.retryLane = o), jr(e, o), Wt(g, e, o), a0);
        }
        T.data === '$?' || jf(), (n = cf(e, n, a));
      } else
        T.data === '$?'
          ? ((n.flags |= 128),
            (n.child = e.child),
            (n = WS.bind(null, e)),
            (T._reactRetry = n),
            (n = null))
          : ((e = $.treeContext),
            (Nt = Nn(T.nextSibling)),
            (Qt = n),
            (Ue = !0),
            (_n = null),
            (Pn = !1),
            e !== null &&
              ((yn[vn++] = ir),
              (yn[vn++] = or),
              (yn[vn++] = ha),
              (ir = e.id),
              (or = e.overflow),
              (ha = n)),
            (n = sf(n, o.children)),
            (n.flags |= 4096));
      return n;
    }
    return c
      ? (Hr(),
        (c = o.fallback),
        (T = n.mode),
        ($ = e.child),
        (N = $.sibling),
        (o = Wr($, { mode: 'hidden', children: o.children })),
        (o.subtreeFlags = $.subtreeFlags & 31457280),
        N !== null ? (c = Wr(N, c)) : ((c = wa(c, T, a, null)), (c.flags |= 2)),
        (c.return = n),
        (o.return = n),
        (o.sibling = c),
        (n.child = o),
        (o = c),
        (c = n.child),
        (T = e.child.memoizedState),
        T === null
          ? (T = lf(a))
          : (($ = T.cachePool),
            $ !== null
              ? ((N = Ot._currentValue), ($ = $.parent !== N ? { parent: N, pool: N } : $))
              : ($ = hm()),
            (T = { baseLanes: T.baseLanes | a, cachePool: $ })),
        (c.memoizedState = T),
        (c.childLanes = of(e, g, a)),
        (n.memoizedState = af),
        o)
      : (Lr(n),
        (a = e.child),
        (e = a.sibling),
        (a = Wr(a, { mode: 'visible', children: o.children })),
        (a.return = n),
        (a.sibling = null),
        e !== null &&
          ((g = n.deletions), g === null ? ((n.deletions = [e]), (n.flags |= 16)) : g.push(e)),
        (n.child = a),
        (n.memoizedState = null),
        a);
  }
  function sf(e, n) {
    return (n = uf({ mode: 'visible', children: n }, e.mode)), (n.return = e), (e.child = n);
  }
  function uf(e, n) {
    return L0(e, n, 0, null);
  }
  function cf(e, n, a) {
    return (
      ya(n, e.child, null, a),
      (e = sf(n, n.pendingProps.children)),
      (e.flags |= 2),
      (n.memoizedState = null),
      e
    );
  }
  function h0(e, n, a) {
    e.lanes |= n;
    var o = e.alternate;
    o !== null && (o.lanes |= n), hf(e.return, n, a);
  }
  function ff(e, n, a, o, c) {
    var d = e.memoizedState;
    d === null
      ? (e.memoizedState = {
          isBackwards: n,
          rendering: null,
          renderingStartTime: 0,
          last: o,
          tail: a,
          tailMode: c,
        })
      : ((d.isBackwards = n),
        (d.rendering = null),
        (d.renderingStartTime = 0),
        (d.last = o),
        (d.tail = a),
        (d.tailMode = c));
  }
  function m0(e, n, a) {
    var o = n.pendingProps,
      c = o.revealOrder,
      d = o.tail;
    if ((kt(e, n, o.children, a), (o = At.current), o & 2)) (o = (o & 1) | 2), (n.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = n.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && h0(e, a, n);
          else if (e.tag === 19) h0(e, a, n);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === n) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === n) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      o &= 1;
    }
    switch ((ce(At, o), c)) {
      case 'forwards':
        for (a = n.child, c = null; a !== null; )
          (e = a.alternate), e !== null && ts(e) === null && (c = a), (a = a.sibling);
        (a = c),
          a === null ? ((c = n.child), (n.child = null)) : ((c = a.sibling), (a.sibling = null)),
          ff(n, !1, c, a, d);
        break;
      case 'backwards':
        for (a = null, c = n.child, n.child = null; c !== null; ) {
          if (((e = c.alternate), e !== null && ts(e) === null)) {
            n.child = c;
            break;
          }
          (e = c.sibling), (c.sibling = a), (a = c), (c = e);
        }
        ff(n, !0, a, null, d);
        break;
      case 'together':
        ff(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function cr(e, n, a) {
    if ((e !== null && (n.dependencies = e.dependencies), (Ir |= n.lanes), !(a & n.childLanes)))
      if (e !== null) {
        if ((vi(e, n, a, !1), (a & n.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && n.child !== e.child) throw Error(i(153));
    if (n.child !== null) {
      for (e = n.child, a = Wr(e, e.pendingProps), n.child = a, a.return = n; e.sibling !== null; )
        (e = e.sibling), (a = a.sibling = Wr(e, e.pendingProps)), (a.return = n);
      a.sibling = null;
    }
    return n.child;
  }
  function df(e, n) {
    return e.lanes & n ? !0 : ((e = e.dependencies), !!(e !== null && ps(e)));
  }
  function kS(e, n, a) {
    switch (n.tag) {
      case 3:
        Ge(n, n.stateNode.containerInfo), Fr(n, Ot, e.memoizedState.cache), ii();
        break;
      case 27:
      case 5:
        wt(n);
        break;
      case 4:
        Ge(n, n.stateNode.containerInfo);
        break;
      case 10:
        Fr(n, n.type, n.memoizedProps.value);
        break;
      case 13:
        var o = n.memoizedState;
        if (o !== null)
          return o.dehydrated !== null
            ? (Lr(n), (n.flags |= 128), null)
            : a & n.child.childLanes
              ? p0(e, n, a)
              : (Lr(n), (e = cr(e, n, a)), e !== null ? e.sibling : null);
        Lr(n);
        break;
      case 19:
        var c = (e.flags & 128) !== 0;
        if (
          ((o = (a & n.childLanes) !== 0),
          o || (vi(e, n, a, !1), (o = (a & n.childLanes) !== 0)),
          c)
        ) {
          if (o) return m0(e, n, a);
          n.flags |= 128;
        }
        if (
          ((c = n.memoizedState),
          c !== null && ((c.rendering = null), (c.tail = null), (c.lastEffect = null)),
          ce(At, At.current),
          o)
        )
          break;
        return null;
      case 22:
      case 23:
        return (n.lanes = 0), s0(e, n, a);
      case 24:
        Fr(n, Ot, e.memoizedState.cache);
    }
    return cr(e, n, a);
  }
  function g0(e, n, a) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps) zt = !0;
      else {
        if (!df(e, a) && !(n.flags & 128)) return (zt = !1), kS(e, n, a);
        zt = !!(e.flags & 131072);
      }
    else (zt = !1), Ue && n.flags & 1048576 && em(n, Wo, n.index);
    switch (((n.lanes = 0), n.tag)) {
      case 16:
        e: {
          e = n.pendingProps;
          var o = n.elementType,
            c = o._init;
          if (((o = c(o._payload)), (n.type = o), typeof o == 'function'))
            wf(o)
              ? ((e = Ea(o, e)), (n.tag = 1), (n = f0(null, n, o, e, a)))
              : ((n.tag = 0), (n = rf(null, n, o, e, a)));
          else {
            if (o != null) {
              if (((c = o.$$typeof), c === S)) {
                (n.tag = 11), (n = l0(null, n, o, e, a));
                break e;
              } else if (c === M) {
                (n.tag = 14), (n = i0(null, n, o, e, a));
                break e;
              }
            }
            throw ((n = V(o) || o), Error(i(306, n, '')));
          }
        }
        return n;
      case 0:
        return rf(e, n, n.type, n.pendingProps, a);
      case 1:
        return (o = n.type), (c = Ea(o, n.pendingProps)), f0(e, n, o, c, a);
      case 3:
        e: {
          if ((Ge(n, n.stateNode.containerInfo), e === null)) throw Error(i(387));
          var d = n.pendingProps;
          (c = n.memoizedState), (o = c.element), yf(e, n), xi(n, d, null, a);
          var g = n.memoizedState;
          if (
            ((d = g.cache),
            Fr(n, Ot, d),
            d !== c.cache && mf(n, [Ot], a, !0),
            Si(),
            (d = g.element),
            c.isDehydrated)
          )
            if (
              ((c = { element: d, isDehydrated: !1, cache: g.cache }),
              (n.updateQueue.baseState = c),
              (n.memoizedState = c),
              n.flags & 256)
            ) {
              n = d0(e, n, d, a);
              break e;
            } else if (d !== o) {
              (o = gn(Error(i(424)), n)), oi(o), (n = d0(e, n, d, a));
              break e;
            } else
              for (
                Nt = Nn(n.stateNode.containerInfo.firstChild),
                  Qt = n,
                  Ue = !0,
                  _n = null,
                  Pn = !0,
                  a = um(n, null, d, a),
                  n.child = a;
                a;

              )
                (a.flags = (a.flags & -3) | 4096), (a = a.sibling);
          else {
            if ((ii(), d === o)) {
              n = cr(e, n, a);
              break e;
            }
            kt(e, n, d, a);
          }
          n = n.child;
        }
        return n;
      case 26:
        return (
          yi(e, n),
          e === null
            ? (a = bg(n.type, null, n.pendingProps, null))
              ? (n.memoizedState = a)
              : Ue ||
                ((a = n.type),
                (e = n.pendingProps),
                (o = Ms(Fe.current).createElement(a)),
                (o[Pt] = n),
                (o[Zt] = e),
                Ut(o, a, e),
                $t(o),
                (n.stateNode = o))
            : (n.memoizedState = bg(n.type, e.memoizedProps, n.pendingProps, e.memoizedState)),
          null
        );
      case 27:
        return (
          wt(n),
          e === null &&
            Ue &&
            ((o = n.stateNode = gg(n.type, n.pendingProps, Fe.current)),
            (Qt = n),
            (Pn = !0),
            (Nt = Nn(o.firstChild))),
          (o = n.pendingProps.children),
          e !== null || Ue ? kt(e, n, o, a) : (n.child = ya(n, null, o, a)),
          yi(e, n),
          n.child
        );
      case 5:
        return (
          e === null &&
            Ue &&
            ((c = o = Nt) &&
              ((o = dx(o, n.type, n.pendingProps, Pn)),
              o !== null
                ? ((n.stateNode = o), (Qt = n), (Nt = Nn(o.firstChild)), (Pn = !1), (c = !0))
                : (c = !1)),
            c || ga(n)),
          wt(n),
          (c = n.type),
          (d = n.pendingProps),
          (g = e !== null ? e.memoizedProps : null),
          (o = d.children),
          Zf(c, d) ? (o = null) : g !== null && Zf(c, g) && (n.flags |= 32),
          n.memoizedState !== null && ((c = Lc(e, n, MS, null, null, a)), (ki._currentValue = c)),
          yi(e, n),
          kt(e, n, o, a),
          n.child
        );
      case 6:
        return (
          e === null &&
            Ue &&
            ((e = a = Nt) &&
              ((a = px(a, n.pendingProps, Pn)),
              a !== null ? ((n.stateNode = a), (Qt = n), (Nt = null), (e = !0)) : (e = !1)),
            e || ga(n)),
          null
        );
      case 13:
        return p0(e, n, a);
      case 4:
        return (
          Ge(n, n.stateNode.containerInfo),
          (o = n.pendingProps),
          e === null ? (n.child = ya(n, null, o, a)) : kt(e, n, o, a),
          n.child
        );
      case 11:
        return l0(e, n, n.type, n.pendingProps, a);
      case 7:
        return kt(e, n, n.pendingProps, a), n.child;
      case 8:
        return kt(e, n, n.pendingProps.children, a), n.child;
      case 12:
        return kt(e, n, n.pendingProps.children, a), n.child;
      case 10:
        return (o = n.pendingProps), Fr(n, n.type, o.value), kt(e, n, o.children, a), n.child;
      case 9:
        return (
          (c = n.type._context),
          (o = n.pendingProps.children),
          Ra(n),
          (c = qt(c)),
          (o = o(c)),
          (n.flags |= 1),
          kt(e, n, o, a),
          n.child
        );
      case 14:
        return i0(e, n, n.type, n.pendingProps, a);
      case 15:
        return o0(e, n, n.type, n.pendingProps, a);
      case 19:
        return m0(e, n, a);
      case 22:
        return s0(e, n, a);
      case 24:
        return (
          Ra(n),
          (o = qt(Ot)),
          e === null
            ? ((c = Uc()),
              c === null &&
                ((c = Ie),
                (d = Nc()),
                (c.pooledCache = d),
                d.refCount++,
                d !== null && (c.pooledCacheLanes |= a),
                (c = d)),
              (n.memoizedState = { parent: o, cache: c }),
              gf(n),
              Fr(n, Ot, c))
            : (e.lanes & a && (yf(e, n), xi(n, null, null, a), Si()),
              (c = e.memoizedState),
              (d = n.memoizedState),
              c.parent !== o
                ? ((c = { parent: o, cache: o }),
                  (n.memoizedState = c),
                  n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = c),
                  Fr(n, Ot, o))
                : ((o = d.cache), Fr(n, Ot, o), o !== c.cache && mf(n, [Ot], a, !0))),
          kt(e, n, n.pendingProps.children, a),
          n.child
        );
      case 29:
        throw n.pendingProps;
    }
    throw Error(i(156, n.tag));
  }
  var pf = ae(null),
    Ca = null,
    fr = null;
  function Fr(e, n, a) {
    ce(pf, n._currentValue), (n._currentValue = a);
  }
  function dr(e) {
    (e._currentValue = pf.current), de(pf);
  }
  function hf(e, n, a) {
    for (; e !== null; ) {
      var o = e.alternate;
      if (
        ((e.childLanes & n) !== n
          ? ((e.childLanes |= n), o !== null && (o.childLanes |= n))
          : o !== null && (o.childLanes & n) !== n && (o.childLanes |= n),
        e === a)
      )
        break;
      e = e.return;
    }
  }
  function mf(e, n, a, o) {
    var c = e.child;
    for (c !== null && (c.return = e); c !== null; ) {
      var d = c.dependencies;
      if (d !== null) {
        var g = c.child;
        d = d.firstContext;
        e: for (; d !== null; ) {
          var T = d;
          d = c;
          for (var $ = 0; $ < n.length; $++)
            if (T.context === n[$]) {
              (d.lanes |= a),
                (T = d.alternate),
                T !== null && (T.lanes |= a),
                hf(d.return, a, e),
                o || (g = null);
              break e;
            }
          d = T.next;
        }
      } else if (c.tag === 18) {
        if (((g = c.return), g === null)) throw Error(i(341));
        (g.lanes |= a), (d = g.alternate), d !== null && (d.lanes |= a), hf(g, a, e), (g = null);
      } else g = c.child;
      if (g !== null) g.return = c;
      else
        for (g = c; g !== null; ) {
          if (g === e) {
            g = null;
            break;
          }
          if (((c = g.sibling), c !== null)) {
            (c.return = g.return), (g = c);
            break;
          }
          g = g.return;
        }
      c = g;
    }
  }
  function vi(e, n, a, o) {
    e = null;
    for (var c = n, d = !1; c !== null; ) {
      if (!d) {
        if (c.flags & 524288) d = !0;
        else if (c.flags & 262144) break;
      }
      if (c.tag === 10) {
        var g = c.alternate;
        if (g === null) throw Error(i(387));
        if (((g = g.memoizedProps), g !== null)) {
          var T = c.type;
          rn(c.pendingProps.value, g.value) || (e !== null ? e.push(T) : (e = [T]));
        }
      } else if (c === Me.current) {
        if (((g = c.alternate), g === null)) throw Error(i(387));
        g.memoizedState.memoizedState !== c.memoizedState.memoizedState &&
          (e !== null ? e.push(ki) : (e = [ki]));
      }
      c = c.return;
    }
    e !== null && mf(n, e, a, o), (n.flags |= 262144);
  }
  function ps(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!rn(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Ra(e) {
    (Ca = e), (fr = null), (e = e.dependencies), e !== null && (e.firstContext = null);
  }
  function qt(e) {
    return y0(Ca, e);
  }
  function hs(e, n) {
    return Ca === null && Ra(e), y0(e, n);
  }
  function y0(e, n) {
    var a = n._currentValue;
    if (((n = { context: n, memoizedValue: a, next: null }), fr === null)) {
      if (e === null) throw Error(i(308));
      (fr = n), (e.dependencies = { lanes: 0, firstContext: n }), (e.flags |= 524288);
    } else fr = fr.next = n;
    return a;
  }
  var Gr = !1;
  function gf(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function yf(e, n) {
    (e = e.updateQueue),
      n.updateQueue === e &&
        (n.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        });
  }
  function Vr(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Yr(e, n, a) {
    var o = e.updateQueue;
    if (o === null) return null;
    if (((o = o.shared), st & 2)) {
      var c = o.pending;
      return (
        c === null ? (n.next = n) : ((n.next = c.next), (c.next = n)),
        (o.pending = n),
        (n = Xo(e)),
        Zh(e, null, a),
        n
      );
    }
    return Ko(e, o, n, a), Xo(e);
  }
  function bi(e, n, a) {
    if (((n = n.updateQueue), n !== null && ((n = n.shared), (a & 4194176) !== 0))) {
      var o = n.lanes;
      (o &= e.pendingLanes), (a |= o), (n.lanes = a), ih(e, a);
    }
  }
  function vf(e, n) {
    var a = e.updateQueue,
      o = e.alternate;
    if (o !== null && ((o = o.updateQueue), a === o)) {
      var c = null,
        d = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var g = { lane: a.lane, tag: a.tag, payload: a.payload, callback: null, next: null };
          d === null ? (c = d = g) : (d = d.next = g), (a = a.next);
        } while (a !== null);
        d === null ? (c = d = n) : (d = d.next = n);
      } else c = d = n;
      (a = {
        baseState: o.baseState,
        firstBaseUpdate: c,
        lastBaseUpdate: d,
        shared: o.shared,
        callbacks: o.callbacks,
      }),
        (e.updateQueue = a);
      return;
    }
    (e = a.lastBaseUpdate),
      e === null ? (a.firstBaseUpdate = n) : (e.next = n),
      (a.lastBaseUpdate = n);
  }
  var bf = !1;
  function Si() {
    if (bf) {
      var e = ll;
      if (e !== null) throw e;
    }
  }
  function xi(e, n, a, o) {
    bf = !1;
    var c = e.updateQueue;
    Gr = !1;
    var d = c.firstBaseUpdate,
      g = c.lastBaseUpdate,
      T = c.shared.pending;
    if (T !== null) {
      c.shared.pending = null;
      var $ = T,
        N = $.next;
      ($.next = null), g === null ? (d = N) : (g.next = N), (g = $);
      var W = e.alternate;
      W !== null &&
        ((W = W.updateQueue),
        (T = W.lastBaseUpdate),
        T !== g && (T === null ? (W.firstBaseUpdate = N) : (T.next = N), (W.lastBaseUpdate = $)));
    }
    if (d !== null) {
      var re = c.baseState;
      (g = 0), (W = N = $ = null), (T = d);
      do {
        var F = T.lane & -536870913,
          Q = F !== T.lane;
        if (Q ? (Ne & F) === F : (o & F) === F) {
          F !== 0 && F === al && (bf = !0),
            W !== null &&
              (W = W.next =
                { lane: 0, tag: T.tag, payload: T.payload, callback: null, next: null });
          e: {
            var me = e,
              Re = T;
            F = n;
            var dt = a;
            switch (Re.tag) {
              case 1:
                if (((me = Re.payload), typeof me == 'function')) {
                  re = me.call(dt, re, F);
                  break e;
                }
                re = me;
                break e;
              case 3:
                me.flags = (me.flags & -65537) | 128;
              case 0:
                if (
                  ((me = Re.payload),
                  (F = typeof me == 'function' ? me.call(dt, re, F) : me),
                  F == null)
                )
                  break e;
                re = x({}, re, F);
                break e;
              case 2:
                Gr = !0;
            }
          }
          (F = T.callback),
            F !== null &&
              ((e.flags |= 64),
              Q && (e.flags |= 8192),
              (Q = c.callbacks),
              Q === null ? (c.callbacks = [F]) : Q.push(F));
        } else
          (Q = { lane: F, tag: T.tag, payload: T.payload, callback: T.callback, next: null }),
            W === null ? ((N = W = Q), ($ = re)) : (W = W.next = Q),
            (g |= F);
        if (((T = T.next), T === null)) {
          if (((T = c.shared.pending), T === null)) break;
          (Q = T), (T = Q.next), (Q.next = null), (c.lastBaseUpdate = Q), (c.shared.pending = null);
        }
      } while (!0);
      W === null && ($ = re),
        (c.baseState = $),
        (c.firstBaseUpdate = N),
        (c.lastBaseUpdate = W),
        d === null && (c.shared.lanes = 0),
        (Ir |= g),
        (e.lanes = g),
        (e.memoizedState = re);
    }
  }
  function v0(e, n) {
    if (typeof e != 'function') throw Error(i(191, e));
    e.call(n);
  }
  function b0(e, n) {
    var a = e.callbacks;
    if (a !== null) for (e.callbacks = null, e = 0; e < a.length; e++) v0(a[e], n);
  }
  function Ei(e, n) {
    try {
      var a = n.updateQueue,
        o = a !== null ? a.lastEffect : null;
      if (o !== null) {
        var c = o.next;
        a = c;
        do {
          if ((a.tag & e) === e) {
            o = void 0;
            var d = a.create,
              g = a.inst;
            (o = d()), (g.destroy = o);
          }
          a = a.next;
        } while (a !== c);
      }
    } catch (T) {
      Ke(n, n.return, T);
    }
  }
  function Kr(e, n, a) {
    try {
      var o = n.updateQueue,
        c = o !== null ? o.lastEffect : null;
      if (c !== null) {
        var d = c.next;
        o = d;
        do {
          if ((o.tag & e) === e) {
            var g = o.inst,
              T = g.destroy;
            if (T !== void 0) {
              (g.destroy = void 0), (c = n);
              var $ = a;
              try {
                T();
              } catch (N) {
                Ke(c, $, N);
              }
            }
          }
          o = o.next;
        } while (o !== d);
      }
    } catch (N) {
      Ke(n, n.return, N);
    }
  }
  function S0(e) {
    var n = e.updateQueue;
    if (n !== null) {
      var a = e.stateNode;
      try {
        b0(n, a);
      } catch (o) {
        Ke(e, e.return, o);
      }
    }
  }
  function x0(e, n, a) {
    (a.props = Ea(e.type, e.memoizedProps)), (a.state = e.memoizedState);
    try {
      a.componentWillUnmount();
    } catch (o) {
      Ke(e, n, o);
    }
  }
  function Ta(e, n) {
    try {
      var a = e.ref;
      if (a !== null) {
        var o = e.stateNode;
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var c = o;
            break;
          default:
            c = o;
        }
        typeof a == 'function' ? (e.refCleanup = a(c)) : (a.current = c);
      }
    } catch (d) {
      Ke(e, n, d);
    }
  }
  function an(e, n) {
    var a = e.ref,
      o = e.refCleanup;
    if (a !== null)
      if (typeof o == 'function')
        try {
          o();
        } catch (c) {
          Ke(e, n, c);
        } finally {
          (e.refCleanup = null), (e = e.alternate), e != null && (e.refCleanup = null);
        }
      else if (typeof a == 'function')
        try {
          a(null);
        } catch (c) {
          Ke(e, n, c);
        }
      else a.current = null;
  }
  function E0(e) {
    var n = e.type,
      a = e.memoizedProps,
      o = e.stateNode;
    try {
      e: switch (n) {
        case 'button':
        case 'input':
        case 'select':
        case 'textarea':
          a.autoFocus && o.focus();
          break e;
        case 'img':
          a.src ? (o.src = a.src) : a.srcSet && (o.srcset = a.srcSet);
      }
    } catch (c) {
      Ke(e, e.return, c);
    }
  }
  function C0(e, n, a) {
    try {
      var o = e.stateNode;
      ox(o, e.type, a, n), (o[Zt] = n);
    } catch (c) {
      Ke(e, e.return, c);
    }
  }
  function R0(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 || e.tag === 4;
  }
  function Sf(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || R0(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 27 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function xf(e, n, a) {
    var o = e.tag;
    if (o === 5 || o === 6)
      (e = e.stateNode),
        n
          ? a.nodeType === 8
            ? a.parentNode.insertBefore(e, n)
            : a.insertBefore(e, n)
          : (a.nodeType === 8
              ? ((n = a.parentNode), n.insertBefore(e, a))
              : ((n = a), n.appendChild(e)),
            (a = a._reactRootContainer),
            a != null || n.onclick !== null || (n.onclick = Os));
    else if (o !== 4 && o !== 27 && ((e = e.child), e !== null))
      for (xf(e, n, a), e = e.sibling; e !== null; ) xf(e, n, a), (e = e.sibling);
  }
  function ms(e, n, a) {
    var o = e.tag;
    if (o === 5 || o === 6) (e = e.stateNode), n ? a.insertBefore(e, n) : a.appendChild(e);
    else if (o !== 4 && o !== 27 && ((e = e.child), e !== null))
      for (ms(e, n, a), e = e.sibling; e !== null; ) ms(e, n, a), (e = e.sibling);
  }
  var pr = !1,
    ct = !1,
    Ef = !1,
    T0 = typeof WeakSet == 'function' ? WeakSet : Set,
    Dt = null,
    w0 = !1;
  function US(e, n) {
    if (((e = e.containerInfo), (Wf = Ns), (e = Fh(e)), Cc(e))) {
      if ('selectionStart' in e) var a = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          a = ((a = e.ownerDocument) && a.defaultView) || window;
          var o = a.getSelection && a.getSelection();
          if (o && o.rangeCount !== 0) {
            a = o.anchorNode;
            var c = o.anchorOffset,
              d = o.focusNode;
            o = o.focusOffset;
            try {
              a.nodeType, d.nodeType;
            } catch {
              a = null;
              break e;
            }
            var g = 0,
              T = -1,
              $ = -1,
              N = 0,
              W = 0,
              re = e,
              F = null;
            t: for (;;) {
              for (
                var Q;
                re !== a || (c !== 0 && re.nodeType !== 3) || (T = g + c),
                  re !== d || (o !== 0 && re.nodeType !== 3) || ($ = g + o),
                  re.nodeType === 3 && (g += re.nodeValue.length),
                  (Q = re.firstChild) !== null;

              )
                (F = re), (re = Q);
              for (;;) {
                if (re === e) break t;
                if (
                  (F === a && ++N === c && (T = g),
                  F === d && ++W === o && ($ = g),
                  (Q = re.nextSibling) !== null)
                )
                  break;
                (re = F), (F = re.parentNode);
              }
              re = Q;
            }
            a = T === -1 || $ === -1 ? null : { start: T, end: $ };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (If = { focusedElem: e, selectionRange: a }, Ns = !1, Dt = n; Dt !== null; )
      if (((n = Dt), (e = n.child), (n.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = n), (Dt = e);
      else
        for (; Dt !== null; ) {
          switch (((n = Dt), (d = n.alternate), (e = n.flags), n.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if (e & 1024 && d !== null) {
                (e = void 0),
                  (a = n),
                  (c = d.memoizedProps),
                  (d = d.memoizedState),
                  (o = a.stateNode);
                try {
                  var me = Ea(a.type, c, a.elementType === a.type);
                  (e = o.getSnapshotBeforeUpdate(me, d)),
                    (o.__reactInternalSnapshotBeforeUpdate = e);
                } catch (Re) {
                  Ke(a, a.return, Re);
                }
              }
              break;
            case 3:
              if (e & 1024) {
                if (((e = n.stateNode.containerInfo), (a = e.nodeType), a === 9)) td(e);
                else if (a === 1)
                  switch (e.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      td(e);
                      break;
                    default:
                      e.textContent = '';
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if (e & 1024) throw Error(i(163));
          }
          if (((e = n.sibling), e !== null)) {
            (e.return = n.return), (Dt = e);
            break;
          }
          Dt = n.return;
        }
    return (me = w0), (w0 = !1), me;
  }
  function A0(e, n, a) {
    var o = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        mr(e, a), o & 4 && Ei(5, a);
        break;
      case 1:
        if ((mr(e, a), o & 4))
          if (((e = a.stateNode), n === null))
            try {
              e.componentDidMount();
            } catch (T) {
              Ke(a, a.return, T);
            }
          else {
            var c = Ea(a.type, n.memoizedProps);
            n = n.memoizedState;
            try {
              e.componentDidUpdate(c, n, e.__reactInternalSnapshotBeforeUpdate);
            } catch (T) {
              Ke(a, a.return, T);
            }
          }
        o & 64 && S0(a), o & 512 && Ta(a, a.return);
        break;
      case 3:
        if ((mr(e, a), o & 64 && ((o = a.updateQueue), o !== null))) {
          if (((e = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                e = a.child.stateNode;
                break;
              case 1:
                e = a.child.stateNode;
            }
          try {
            b0(o, e);
          } catch (T) {
            Ke(a, a.return, T);
          }
        }
        break;
      case 26:
        mr(e, a), o & 512 && Ta(a, a.return);
        break;
      case 27:
      case 5:
        mr(e, a), n === null && o & 4 && E0(a), o & 512 && Ta(a, a.return);
        break;
      case 12:
        mr(e, a);
        break;
      case 13:
        mr(e, a), o & 4 && $0(e, a);
        break;
      case 22:
        if (((c = a.memoizedState !== null || pr), !c)) {
          n = (n !== null && n.memoizedState !== null) || ct;
          var d = pr,
            g = ct;
          (pr = c),
            (ct = n) && !g ? Xr(e, a, (a.subtreeFlags & 8772) !== 0) : mr(e, a),
            (pr = d),
            (ct = g);
        }
        o & 512 && (a.memoizedProps.mode === 'manual' ? Ta(a, a.return) : an(a, a.return));
        break;
      default:
        mr(e, a);
    }
  }
  function O0(e) {
    var n = e.alternate;
    n !== null && ((e.alternate = null), O0(n)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((n = e.stateNode), n !== null && oc(n)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  var Rt = null,
    ln = !1;
  function hr(e, n, a) {
    for (a = a.child; a !== null; ) M0(e, n, a), (a = a.sibling);
  }
  function M0(e, n, a) {
    if (Ht && typeof Ht.onCommitFiberUnmount == 'function')
      try {
        Ht.onCommitFiberUnmount(zn, a);
      } catch {}
    switch (a.tag) {
      case 26:
        ct || an(a, n),
          hr(e, n, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a));
        break;
      case 27:
        ct || an(a, n);
        var o = Rt,
          c = ln;
        for (Rt = a.stateNode, hr(e, n, a), a = a.stateNode, n = a.attributes; n.length; )
          a.removeAttributeNode(n[0]);
        oc(a), (Rt = o), (ln = c);
        break;
      case 5:
        ct || an(a, n);
      case 6:
        c = Rt;
        var d = ln;
        if (((Rt = null), hr(e, n, a), (Rt = c), (ln = d), Rt !== null))
          if (ln)
            try {
              (e = Rt),
                (o = a.stateNode),
                e.nodeType === 8 ? e.parentNode.removeChild(o) : e.removeChild(o);
            } catch (g) {
              Ke(a, n, g);
            }
          else
            try {
              Rt.removeChild(a.stateNode);
            } catch (g) {
              Ke(a, n, g);
            }
        break;
      case 18:
        Rt !== null &&
          (ln
            ? ((n = Rt),
              (a = a.stateNode),
              n.nodeType === 8 ? ed(n.parentNode, a) : n.nodeType === 1 && ed(n, a),
              Hi(n))
            : ed(Rt, a.stateNode));
        break;
      case 4:
        (o = Rt),
          (c = ln),
          (Rt = a.stateNode.containerInfo),
          (ln = !0),
          hr(e, n, a),
          (Rt = o),
          (ln = c);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ct || Kr(2, a, n), ct || Kr(4, a, n), hr(e, n, a);
        break;
      case 1:
        ct ||
          (an(a, n), (o = a.stateNode), typeof o.componentWillUnmount == 'function' && x0(a, n, o)),
          hr(e, n, a);
        break;
      case 21:
        hr(e, n, a);
        break;
      case 22:
        ct || an(a, n), (ct = (o = ct) || a.memoizedState !== null), hr(e, n, a), (ct = o);
        break;
      default:
        hr(e, n, a);
    }
  }
  function $0(e, n) {
    if (
      n.memoizedState === null &&
      ((e = n.alternate),
      e !== null && ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Hi(e);
      } catch (a) {
        Ke(n, n.return, a);
      }
  }
  function jS(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var n = e.stateNode;
        return n === null && (n = e.stateNode = new T0()), n;
      case 22:
        return (
          (e = e.stateNode), (n = e._retryCache), n === null && (n = e._retryCache = new T0()), n
        );
      default:
        throw Error(i(435, e.tag));
    }
  }
  function Cf(e, n) {
    var a = jS(e);
    n.forEach(function (o) {
      var c = IS.bind(null, e, o);
      a.has(o) || (a.add(o), o.then(c, c));
    });
  }
  function Sn(e, n) {
    var a = n.deletions;
    if (a !== null)
      for (var o = 0; o < a.length; o++) {
        var c = a[o],
          d = e,
          g = n,
          T = g;
        e: for (; T !== null; ) {
          switch (T.tag) {
            case 27:
            case 5:
              (Rt = T.stateNode), (ln = !1);
              break e;
            case 3:
              (Rt = T.stateNode.containerInfo), (ln = !0);
              break e;
            case 4:
              (Rt = T.stateNode.containerInfo), (ln = !0);
              break e;
          }
          T = T.return;
        }
        if (Rt === null) throw Error(i(160));
        M0(d, g, c),
          (Rt = null),
          (ln = !1),
          (d = c.alternate),
          d !== null && (d.return = null),
          (c.return = null);
      }
    if (n.subtreeFlags & 13878) for (n = n.child; n !== null; ) z0(n, e), (n = n.sibling);
  }
  var Bn = null;
  function z0(e, n) {
    var a = e.alternate,
      o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Sn(n, e), xn(e), o & 4 && (Kr(3, e, e.return), Ei(3, e), Kr(5, e, e.return));
        break;
      case 1:
        Sn(n, e),
          xn(e),
          o & 512 && (ct || a === null || an(a, a.return)),
          o & 64 &&
            pr &&
            ((e = e.updateQueue),
            e !== null &&
              ((o = e.callbacks),
              o !== null &&
                ((a = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = a === null ? o : a.concat(o)))));
        break;
      case 26:
        var c = Bn;
        if ((Sn(n, e), xn(e), o & 512 && (ct || a === null || an(a, a.return)), o & 4)) {
          var d = a !== null ? a.memoizedState : null;
          if (((o = e.memoizedState), a === null))
            if (o === null)
              if (e.stateNode === null) {
                e: {
                  (o = e.type), (a = e.memoizedProps), (c = c.ownerDocument || c);
                  t: switch (o) {
                    case 'title':
                      (d = c.getElementsByTagName('title')[0]),
                        (!d ||
                          d[Xl] ||
                          d[Pt] ||
                          d.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          d.hasAttribute('itemprop')) &&
                          ((d = c.createElement(o)),
                          c.head.insertBefore(d, c.querySelector('head > title'))),
                        Ut(d, o, a),
                        (d[Pt] = e),
                        $t(d),
                        (o = d);
                      break e;
                    case 'link':
                      var g = Eg('link', 'href', c).get(o + (a.href || ''));
                      if (g) {
                        for (var T = 0; T < g.length; T++)
                          if (
                            ((d = g[T]),
                            d.getAttribute('href') === (a.href == null ? null : a.href) &&
                              d.getAttribute('rel') === (a.rel == null ? null : a.rel) &&
                              d.getAttribute('title') === (a.title == null ? null : a.title) &&
                              d.getAttribute('crossorigin') ===
                                (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            g.splice(T, 1);
                            break t;
                          }
                      }
                      (d = c.createElement(o)), Ut(d, o, a), c.head.appendChild(d);
                      break;
                    case 'meta':
                      if ((g = Eg('meta', 'content', c).get(o + (a.content || '')))) {
                        for (T = 0; T < g.length; T++)
                          if (
                            ((d = g[T]),
                            d.getAttribute('content') ===
                              (a.content == null ? null : '' + a.content) &&
                              d.getAttribute('name') === (a.name == null ? null : a.name) &&
                              d.getAttribute('property') ===
                                (a.property == null ? null : a.property) &&
                              d.getAttribute('http-equiv') ===
                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                              d.getAttribute('charset') === (a.charSet == null ? null : a.charSet))
                          ) {
                            g.splice(T, 1);
                            break t;
                          }
                      }
                      (d = c.createElement(o)), Ut(d, o, a), c.head.appendChild(d);
                      break;
                    default:
                      throw Error(i(468, o));
                  }
                  (d[Pt] = e), $t(d), (o = d);
                }
                e.stateNode = o;
              } else Cg(c, e.type, e.stateNode);
            else e.stateNode = xg(c, o, e.memoizedProps);
          else
            d !== o
              ? (d === null
                  ? a.stateNode !== null && ((a = a.stateNode), a.parentNode.removeChild(a))
                  : d.count--,
                o === null ? Cg(c, e.type, e.stateNode) : xg(c, o, e.memoizedProps))
              : o === null && e.stateNode !== null && C0(e, e.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        if (o & 4 && e.alternate === null) {
          (c = e.stateNode), (d = e.memoizedProps);
          try {
            for (var $ = c.firstChild; $; ) {
              var N = $.nextSibling,
                W = $.nodeName;
              $[Xl] ||
                W === 'HEAD' ||
                W === 'BODY' ||
                W === 'SCRIPT' ||
                W === 'STYLE' ||
                (W === 'LINK' && $.rel.toLowerCase() === 'stylesheet') ||
                c.removeChild($),
                ($ = N);
            }
            for (var re = e.type, F = c.attributes; F.length; ) c.removeAttributeNode(F[0]);
            Ut(c, re, d), (c[Pt] = e), (c[Zt] = d);
          } catch (me) {
            Ke(e, e.return, me);
          }
        }
      case 5:
        if ((Sn(n, e), xn(e), o & 512 && (ct || a === null || an(a, a.return)), e.flags & 32)) {
          c = e.stateNode;
          try {
            Ya(c, '');
          } catch (me) {
            Ke(e, e.return, me);
          }
        }
        o & 4 &&
          e.stateNode != null &&
          ((c = e.memoizedProps), C0(e, c, a !== null ? a.memoizedProps : c)),
          o & 1024 && (Ef = !0);
        break;
      case 6:
        if ((Sn(n, e), xn(e), o & 4)) {
          if (e.stateNode === null) throw Error(i(162));
          (o = e.memoizedProps), (a = e.stateNode);
          try {
            a.nodeValue = o;
          } catch (me) {
            Ke(e, e.return, me);
          }
        }
        break;
      case 3:
        if (
          ((Ds = null),
          (c = Bn),
          (Bn = $s(n.containerInfo)),
          Sn(n, e),
          (Bn = c),
          xn(e),
          o & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            Hi(n.containerInfo);
          } catch (me) {
            Ke(e, e.return, me);
          }
        Ef && ((Ef = !1), D0(e));
        break;
      case 4:
        (o = Bn), (Bn = $s(e.stateNode.containerInfo)), Sn(n, e), xn(e), (Bn = o);
        break;
      case 12:
        Sn(n, e), xn(e);
        break;
      case 13:
        Sn(n, e),
          xn(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) != (a !== null && a.memoizedState !== null) &&
            (Df = Je()),
          o & 4 && ((o = e.updateQueue), o !== null && ((e.updateQueue = null), Cf(e, o)));
        break;
      case 22:
        if (
          (o & 512 && (ct || a === null || an(a, a.return)),
          ($ = e.memoizedState !== null),
          (N = a !== null && a.memoizedState !== null),
          (W = pr),
          (re = ct),
          (pr = W || $),
          (ct = re || N),
          Sn(n, e),
          (ct = re),
          (pr = W),
          xn(e),
          (n = e.stateNode),
          (n._current = e),
          (n._visibility &= -3),
          (n._visibility |= n._pendingVisibility & 2),
          o & 8192 &&
            ((n._visibility = $ ? n._visibility & -2 : n._visibility | 1),
            $ && ((n = pr || ct), a === null || N || n || ul(e)),
            e.memoizedProps === null || e.memoizedProps.mode !== 'manual'))
        )
          e: for (a = null, n = e; ; ) {
            if (n.tag === 5 || n.tag === 26 || n.tag === 27) {
              if (a === null) {
                N = a = n;
                try {
                  if (((c = N.stateNode), $))
                    (d = c.style),
                      typeof d.setProperty == 'function'
                        ? d.setProperty('display', 'none', 'important')
                        : (d.display = 'none');
                  else {
                    (g = N.stateNode), (T = N.memoizedProps.style);
                    var Q = T != null && T.hasOwnProperty('display') ? T.display : null;
                    g.style.display = Q == null || typeof Q == 'boolean' ? '' : ('' + Q).trim();
                  }
                } catch (me) {
                  Ke(N, N.return, me);
                }
              }
            } else if (n.tag === 6) {
              if (a === null) {
                N = n;
                try {
                  N.stateNode.nodeValue = $ ? '' : N.memoizedProps;
                } catch (me) {
                  Ke(N, N.return, me);
                }
              }
            } else if (
              ((n.tag !== 22 && n.tag !== 23) || n.memoizedState === null || n === e) &&
              n.child !== null
            ) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === e) break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === e) break e;
              a === n && (a = null), (n = n.return);
            }
            a === n && (a = null), (n.sibling.return = n.return), (n = n.sibling);
          }
        o & 4 &&
          ((o = e.updateQueue),
          o !== null && ((a = o.retryQueue), a !== null && ((o.retryQueue = null), Cf(e, a))));
        break;
      case 19:
        Sn(n, e),
          xn(e),
          o & 4 && ((o = e.updateQueue), o !== null && ((e.updateQueue = null), Cf(e, o)));
        break;
      case 21:
        break;
      default:
        Sn(n, e), xn(e);
    }
  }
  function xn(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        if (e.tag !== 27) {
          e: {
            for (var a = e.return; a !== null; ) {
              if (R0(a)) {
                var o = a;
                break e;
              }
              a = a.return;
            }
            throw Error(i(160));
          }
          switch (o.tag) {
            case 27:
              var c = o.stateNode,
                d = Sf(e);
              ms(e, d, c);
              break;
            case 5:
              var g = o.stateNode;
              o.flags & 32 && (Ya(g, ''), (o.flags &= -33));
              var T = Sf(e);
              ms(e, T, g);
              break;
            case 3:
            case 4:
              var $ = o.stateNode.containerInfo,
                N = Sf(e);
              xf(e, N, $);
              break;
            default:
              throw Error(i(161));
          }
        }
      } catch (W) {
        Ke(e, e.return, W);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function D0(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var n = e;
        D0(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), (e = e.sibling);
      }
  }
  function mr(e, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; ) A0(e, n.alternate, n), (n = n.sibling);
  }
  function ul(e) {
    for (e = e.child; e !== null; ) {
      var n = e;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Kr(4, n, n.return), ul(n);
          break;
        case 1:
          an(n, n.return);
          var a = n.stateNode;
          typeof a.componentWillUnmount == 'function' && x0(n, n.return, a), ul(n);
          break;
        case 26:
        case 27:
        case 5:
          an(n, n.return), ul(n);
          break;
        case 22:
          an(n, n.return), n.memoizedState === null && ul(n);
          break;
        default:
          ul(n);
      }
      e = e.sibling;
    }
  }
  function Xr(e, n, a) {
    for (a = a && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var o = n.alternate,
        c = e,
        d = n,
        g = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          Xr(c, d, a), Ei(4, d);
          break;
        case 1:
          if ((Xr(c, d, a), (o = d), (c = o.stateNode), typeof c.componentDidMount == 'function'))
            try {
              c.componentDidMount();
            } catch (N) {
              Ke(o, o.return, N);
            }
          if (((o = d), (c = o.updateQueue), c !== null)) {
            var T = o.stateNode;
            try {
              var $ = c.shared.hiddenCallbacks;
              if ($ !== null)
                for (c.shared.hiddenCallbacks = null, c = 0; c < $.length; c++) v0($[c], T);
            } catch (N) {
              Ke(o, o.return, N);
            }
          }
          a && g & 64 && S0(d), Ta(d, d.return);
          break;
        case 26:
        case 27:
        case 5:
          Xr(c, d, a), a && o === null && g & 4 && E0(d), Ta(d, d.return);
          break;
        case 12:
          Xr(c, d, a);
          break;
        case 13:
          Xr(c, d, a), a && g & 4 && $0(c, d);
          break;
        case 22:
          d.memoizedState === null && Xr(c, d, a), Ta(d, d.return);
          break;
        default:
          Xr(c, d, a);
      }
      n = n.sibling;
    }
  }
  function Rf(e, n) {
    var a = null;
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (a = e.memoizedState.cachePool.pool),
      (e = null),
      n.memoizedState !== null &&
        n.memoizedState.cachePool !== null &&
        (e = n.memoizedState.cachePool.pool),
      e !== a && (e != null && e.refCount++, a != null && di(a));
  }
  function Tf(e, n) {
    (e = null),
      n.alternate !== null && (e = n.alternate.memoizedState.cache),
      (n = n.memoizedState.cache),
      n !== e && (n.refCount++, e != null && di(e));
  }
  function Qr(e, n, a, o) {
    if (n.subtreeFlags & 10256) for (n = n.child; n !== null; ) _0(e, n, a, o), (n = n.sibling);
  }
  function _0(e, n, a, o) {
    var c = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Qr(e, n, a, o), c & 2048 && Ei(9, n);
        break;
      case 3:
        Qr(e, n, a, o),
          c & 2048 &&
            ((e = null),
            n.alternate !== null && (e = n.alternate.memoizedState.cache),
            (n = n.memoizedState.cache),
            n !== e && (n.refCount++, e != null && di(e)));
        break;
      case 12:
        if (c & 2048) {
          Qr(e, n, a, o), (e = n.stateNode);
          try {
            var d = n.memoizedProps,
              g = d.id,
              T = d.onPostCommit;
            typeof T == 'function' &&
              T(g, n.alternate === null ? 'mount' : 'update', e.passiveEffectDuration, -0);
          } catch ($) {
            Ke(n, n.return, $);
          }
        } else Qr(e, n, a, o);
        break;
      case 23:
        break;
      case 22:
        (d = n.stateNode),
          n.memoizedState !== null
            ? d._visibility & 4
              ? Qr(e, n, a, o)
              : Ci(e, n)
            : d._visibility & 4
              ? Qr(e, n, a, o)
              : ((d._visibility |= 4), cl(e, n, a, o, (n.subtreeFlags & 10256) !== 0)),
          c & 2048 && Rf(n.alternate, n);
        break;
      case 24:
        Qr(e, n, a, o), c & 2048 && Tf(n.alternate, n);
        break;
      default:
        Qr(e, n, a, o);
    }
  }
  function cl(e, n, a, o, c) {
    for (c = c && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null; ) {
      var d = e,
        g = n,
        T = a,
        $ = o,
        N = g.flags;
      switch (g.tag) {
        case 0:
        case 11:
        case 15:
          cl(d, g, T, $, c), Ei(8, g);
          break;
        case 23:
          break;
        case 22:
          var W = g.stateNode;
          g.memoizedState !== null
            ? W._visibility & 4
              ? cl(d, g, T, $, c)
              : Ci(d, g)
            : ((W._visibility |= 4), cl(d, g, T, $, c)),
            c && N & 2048 && Rf(g.alternate, g);
          break;
        case 24:
          cl(d, g, T, $, c), c && N & 2048 && Tf(g.alternate, g);
          break;
        default:
          cl(d, g, T, $, c);
      }
      n = n.sibling;
    }
  }
  function Ci(e, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var a = e,
          o = n,
          c = o.flags;
        switch (o.tag) {
          case 22:
            Ci(a, o), c & 2048 && Rf(o.alternate, o);
            break;
          case 24:
            Ci(a, o), c & 2048 && Tf(o.alternate, o);
            break;
          default:
            Ci(a, o);
        }
        n = n.sibling;
      }
  }
  var Ri = 8192;
  function fl(e) {
    if (e.subtreeFlags & Ri) for (e = e.child; e !== null; ) B0(e), (e = e.sibling);
  }
  function B0(e) {
    switch (e.tag) {
      case 26:
        fl(e), e.flags & Ri && e.memoizedState !== null && wx(Bn, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        fl(e);
        break;
      case 3:
      case 4:
        var n = Bn;
        (Bn = $s(e.stateNode.containerInfo)), fl(e), (Bn = n);
        break;
      case 22:
        e.memoizedState === null &&
          ((n = e.alternate),
          n !== null && n.memoizedState !== null
            ? ((n = Ri), (Ri = 16777216), fl(e), (Ri = n))
            : fl(e));
        break;
      default:
        fl(e);
    }
  }
  function N0(e) {
    var n = e.alternate;
    if (n !== null && ((e = n.child), e !== null)) {
      n.child = null;
      do (n = e.sibling), (e.sibling = null), (e = n);
      while (e !== null);
    }
  }
  function Ti(e) {
    var n = e.deletions;
    if (e.flags & 16) {
      if (n !== null)
        for (var a = 0; a < n.length; a++) {
          var o = n[a];
          (Dt = o), U0(o, e);
        }
      N0(e);
    }
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) k0(e), (e = e.sibling);
  }
  function k0(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Ti(e), e.flags & 2048 && Kr(9, e, e.return);
        break;
      case 3:
        Ti(e);
        break;
      case 12:
        Ti(e);
        break;
      case 22:
        var n = e.stateNode;
        e.memoizedState !== null && n._visibility & 4 && (e.return === null || e.return.tag !== 13)
          ? ((n._visibility &= -5), gs(e))
          : Ti(e);
        break;
      default:
        Ti(e);
    }
  }
  function gs(e) {
    var n = e.deletions;
    if (e.flags & 16) {
      if (n !== null)
        for (var a = 0; a < n.length; a++) {
          var o = n[a];
          (Dt = o), U0(o, e);
        }
      N0(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((n = e), n.tag)) {
        case 0:
        case 11:
        case 15:
          Kr(8, n, n.return), gs(n);
          break;
        case 22:
          (a = n.stateNode), a._visibility & 4 && ((a._visibility &= -5), gs(n));
          break;
        default:
          gs(n);
      }
      e = e.sibling;
    }
  }
  function U0(e, n) {
    for (; Dt !== null; ) {
      var a = Dt;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Kr(8, a, n);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var o = a.memoizedState.cachePool.pool;
            o != null && o.refCount++;
          }
          break;
        case 24:
          di(a.memoizedState.cache);
      }
      if (((o = a.child), o !== null)) (o.return = a), (Dt = o);
      else
        e: for (a = e; Dt !== null; ) {
          o = Dt;
          var c = o.sibling,
            d = o.return;
          if ((O0(o), o === a)) {
            Dt = null;
            break e;
          }
          if (c !== null) {
            (c.return = d), (Dt = c);
            break e;
          }
          Dt = d;
        }
    }
  }
  function LS(e, n, a, o) {
    (this.tag = e),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = n),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = o),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function En(e, n, a, o) {
    return new LS(e, n, a, o);
  }
  function wf(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Wr(e, n) {
    var a = e.alternate;
    return (
      a === null
        ? ((a = En(e.tag, n, e.key, e.mode)),
          (a.elementType = e.elementType),
          (a.type = e.type),
          (a.stateNode = e.stateNode),
          (a.alternate = e),
          (e.alternate = a))
        : ((a.pendingProps = n),
          (a.type = e.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = e.flags & 31457280),
      (a.childLanes = e.childLanes),
      (a.lanes = e.lanes),
      (a.child = e.child),
      (a.memoizedProps = e.memoizedProps),
      (a.memoizedState = e.memoizedState),
      (a.updateQueue = e.updateQueue),
      (n = e.dependencies),
      (a.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
      (a.sibling = e.sibling),
      (a.index = e.index),
      (a.ref = e.ref),
      (a.refCleanup = e.refCleanup),
      a
    );
  }
  function j0(e, n) {
    e.flags &= 31457282;
    var a = e.alternate;
    return (
      a === null
        ? ((e.childLanes = 0),
          (e.lanes = n),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = a.childLanes),
          (e.lanes = a.lanes),
          (e.child = a.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = a.memoizedProps),
          (e.memoizedState = a.memoizedState),
          (e.updateQueue = a.updateQueue),
          (e.type = a.type),
          (n = a.dependencies),
          (e.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext })),
      e
    );
  }
  function ys(e, n, a, o, c, d) {
    var g = 0;
    if (((o = e), typeof e == 'function')) wf(e) && (g = 1);
    else if (typeof e == 'string')
      g = Rx(e, a, be.current) ? 26 : e === 'html' || e === 'head' || e === 'body' ? 27 : 5;
    else
      e: switch (e) {
        case m:
          return wa(a.children, c, d, n);
        case h:
          (g = 8), (c |= 24);
          break;
        case y:
          return (e = En(12, a, n, c | 2)), (e.elementType = y), (e.lanes = d), e;
        case A:
          return (e = En(13, a, n, c)), (e.elementType = A), (e.lanes = d), e;
        case O:
          return (e = En(19, a, n, c)), (e.elementType = O), (e.lanes = d), e;
        case E:
          return L0(a, c, d, n);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case v:
              case w:
                g = 10;
                break e;
              case b:
                g = 9;
                break e;
              case S:
                g = 11;
                break e;
              case M:
                g = 14;
                break e;
              case z:
                (g = 16), (o = null);
                break e;
            }
          (g = 29), (a = Error(i(130, e === null ? 'null' : typeof e, ''))), (o = null);
      }
    return (n = En(g, a, n, c)), (n.elementType = e), (n.type = o), (n.lanes = d), n;
  }
  function wa(e, n, a, o) {
    return (e = En(7, e, o, n)), (e.lanes = a), e;
  }
  function L0(e, n, a, o) {
    (e = En(22, e, o, n)), (e.elementType = E), (e.lanes = a);
    var c = {
      _visibility: 1,
      _pendingVisibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null,
      _current: null,
      detach: function () {
        var d = c._current;
        if (d === null) throw Error(i(456));
        if (!(c._pendingVisibility & 2)) {
          var g = jr(d, 2);
          g !== null && ((c._pendingVisibility |= 2), Wt(g, d, 2));
        }
      },
      attach: function () {
        var d = c._current;
        if (d === null) throw Error(i(456));
        if (c._pendingVisibility & 2) {
          var g = jr(d, 2);
          g !== null && ((c._pendingVisibility &= -3), Wt(g, d, 2));
        }
      },
    };
    return (e.stateNode = c), e;
  }
  function Af(e, n, a) {
    return (e = En(6, e, null, n)), (e.lanes = a), e;
  }
  function Of(e, n, a) {
    return (
      (n = En(4, e.children !== null ? e.children : [], e.key, n)),
      (n.lanes = a),
      (n.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      n
    );
  }
  function gr(e) {
    e.flags |= 4;
  }
  function H0(e, n) {
    if (n.type !== 'stylesheet' || n.state.loading & 4) e.flags &= -16777217;
    else if (((e.flags |= 16777216), !Rg(n))) {
      if (
        ((n = bn.current),
        n !== null &&
          ((Ne & 4194176) === Ne
            ? qn !== null
            : ((Ne & 62914560) !== Ne && !(Ne & 536870912)) || n !== qn))
      )
        throw ((ui = Dc), rm);
      e.flags |= 8192;
    }
  }
  function vs(e, n) {
    n !== null && (e.flags |= 4),
      e.flags & 16384 && ((n = e.tag !== 22 ? ah() : 536870912), (e.lanes |= n), (pl |= n));
  }
  function wi(e, n) {
    if (!Ue)
      switch (e.tailMode) {
        case 'hidden':
          n = e.tail;
          for (var a = null; n !== null; ) n.alternate !== null && (a = n), (n = n.sibling);
          a === null ? (e.tail = null) : (a.sibling = null);
          break;
        case 'collapsed':
          a = e.tail;
          for (var o = null; a !== null; ) a.alternate !== null && (o = a), (a = a.sibling);
          o === null
            ? n || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (o.sibling = null);
      }
  }
  function ot(e) {
    var n = e.alternate !== null && e.alternate.child === e.child,
      a = 0,
      o = 0;
    if (n)
      for (var c = e.child; c !== null; )
        (a |= c.lanes | c.childLanes),
          (o |= c.subtreeFlags & 31457280),
          (o |= c.flags & 31457280),
          (c.return = e),
          (c = c.sibling);
    else
      for (c = e.child; c !== null; )
        (a |= c.lanes | c.childLanes),
          (o |= c.subtreeFlags),
          (o |= c.flags),
          (c.return = e),
          (c = c.sibling);
    return (e.subtreeFlags |= o), (e.childLanes = a), n;
  }
  function HS(e, n, a) {
    var o = n.pendingProps;
    switch (($c(n), n.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return ot(n), null;
      case 1:
        return ot(n), null;
      case 3:
        return (
          (a = n.stateNode),
          (o = null),
          e !== null && (o = e.memoizedState.cache),
          n.memoizedState.cache !== o && (n.flags |= 2048),
          dr(Ot),
          xt(),
          a.pendingContext && ((a.context = a.pendingContext), (a.pendingContext = null)),
          (e === null || e.child === null) &&
            (li(n)
              ? gr(n)
              : e === null ||
                (e.memoizedState.isDehydrated && !(n.flags & 256)) ||
                ((n.flags |= 1024), _n !== null && (kf(_n), (_n = null)))),
          ot(n),
          null
        );
      case 26:
        return (
          (a = n.memoizedState),
          e === null
            ? (gr(n), a !== null ? (ot(n), H0(n, a)) : (ot(n), (n.flags &= -16777217)))
            : a
              ? a !== e.memoizedState
                ? (gr(n), ot(n), H0(n, a))
                : (ot(n), (n.flags &= -16777217))
              : (e.memoizedProps !== o && gr(n), ot(n), (n.flags &= -16777217)),
          null
        );
      case 27:
        lt(n), (a = Fe.current);
        var c = n.type;
        if (e !== null && n.stateNode != null) e.memoizedProps !== o && gr(n);
        else {
          if (!o) {
            if (n.stateNode === null) throw Error(i(166));
            return ot(n), null;
          }
          (e = be.current), li(n) ? tm(n) : ((e = gg(c, o, a)), (n.stateNode = e), gr(n));
        }
        return ot(n), null;
      case 5:
        if ((lt(n), (a = n.type), e !== null && n.stateNode != null))
          e.memoizedProps !== o && gr(n);
        else {
          if (!o) {
            if (n.stateNode === null) throw Error(i(166));
            return ot(n), null;
          }
          if (((e = be.current), li(n))) tm(n);
          else {
            switch (((c = Ms(Fe.current)), e)) {
              case 1:
                e = c.createElementNS('http://www.w3.org/2000/svg', a);
                break;
              case 2:
                e = c.createElementNS('http://www.w3.org/1998/Math/MathML', a);
                break;
              default:
                switch (a) {
                  case 'svg':
                    e = c.createElementNS('http://www.w3.org/2000/svg', a);
                    break;
                  case 'math':
                    e = c.createElementNS('http://www.w3.org/1998/Math/MathML', a);
                    break;
                  case 'script':
                    (e = c.createElement('div')),
                      (e.innerHTML = '<script><\/script>'),
                      (e = e.removeChild(e.firstChild));
                    break;
                  case 'select':
                    (e =
                      typeof o.is == 'string'
                        ? c.createElement('select', { is: o.is })
                        : c.createElement('select')),
                      o.multiple ? (e.multiple = !0) : o.size && (e.size = o.size);
                    break;
                  default:
                    e =
                      typeof o.is == 'string'
                        ? c.createElement(a, { is: o.is })
                        : c.createElement(a);
                }
            }
            (e[Pt] = n), (e[Zt] = o);
            e: for (c = n.child; c !== null; ) {
              if (c.tag === 5 || c.tag === 6) e.appendChild(c.stateNode);
              else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                (c.child.return = c), (c = c.child);
                continue;
              }
              if (c === n) break e;
              for (; c.sibling === null; ) {
                if (c.return === null || c.return === n) break e;
                c = c.return;
              }
              (c.sibling.return = c.return), (c = c.sibling);
            }
            n.stateNode = e;
            e: switch ((Ut(e, a, o), a)) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                e = !!o.autoFocus;
                break e;
              case 'img':
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && gr(n);
          }
        }
        return ot(n), (n.flags &= -16777217), null;
      case 6:
        if (e && n.stateNode != null) e.memoizedProps !== o && gr(n);
        else {
          if (typeof o != 'string' && n.stateNode === null) throw Error(i(166));
          if (((e = Fe.current), li(n))) {
            if (((e = n.stateNode), (a = n.memoizedProps), (o = null), (c = Qt), c !== null))
              switch (c.tag) {
                case 27:
                case 5:
                  o = c.memoizedProps;
              }
            (e[Pt] = n),
              (e = !!(
                e.nodeValue === a ||
                (o !== null && o.suppressHydrationWarning === !0) ||
                cg(e.nodeValue, a)
              )),
              e || ga(n);
          } else (e = Ms(e).createTextNode(o)), (e[Pt] = n), (n.stateNode = e);
        }
        return ot(n), null;
      case 13:
        if (
          ((o = n.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((c = li(n)), o !== null && o.dehydrated !== null)) {
            if (e === null) {
              if (!c) throw Error(i(318));
              if (((c = n.memoizedState), (c = c !== null ? c.dehydrated : null), !c))
                throw Error(i(317));
              c[Pt] = n;
            } else ii(), !(n.flags & 128) && (n.memoizedState = null), (n.flags |= 4);
            ot(n), (c = !1);
          } else _n !== null && (kf(_n), (_n = null)), (c = !0);
          if (!c) return n.flags & 256 ? (sr(n), n) : (sr(n), null);
        }
        if ((sr(n), n.flags & 128)) return (n.lanes = a), n;
        if (((a = o !== null), (e = e !== null && e.memoizedState !== null), a)) {
          (o = n.child),
            (c = null),
            o.alternate !== null &&
              o.alternate.memoizedState !== null &&
              o.alternate.memoizedState.cachePool !== null &&
              (c = o.alternate.memoizedState.cachePool.pool);
          var d = null;
          o.memoizedState !== null &&
            o.memoizedState.cachePool !== null &&
            (d = o.memoizedState.cachePool.pool),
            d !== c && (o.flags |= 2048);
        }
        return a !== e && a && (n.child.flags |= 8192), vs(n, n.updateQueue), ot(n), null;
      case 4:
        return xt(), e === null && Kf(n.stateNode.containerInfo), ot(n), null;
      case 10:
        return dr(n.type), ot(n), null;
      case 19:
        if ((de(At), (c = n.memoizedState), c === null)) return ot(n), null;
        if (((o = (n.flags & 128) !== 0), (d = c.rendering), d === null))
          if (o) wi(c, !1);
          else {
            if (ft !== 0 || (e !== null && e.flags & 128))
              for (e = n.child; e !== null; ) {
                if (((d = ts(e)), d !== null)) {
                  for (
                    n.flags |= 128,
                      wi(c, !1),
                      e = d.updateQueue,
                      n.updateQueue = e,
                      vs(n, e),
                      n.subtreeFlags = 0,
                      e = a,
                      a = n.child;
                    a !== null;

                  )
                    j0(a, e), (a = a.sibling);
                  return ce(At, (At.current & 1) | 2), n.child;
                }
                e = e.sibling;
              }
            c.tail !== null &&
              Je() > bs &&
              ((n.flags |= 128), (o = !0), wi(c, !1), (n.lanes = 4194304));
          }
        else {
          if (!o)
            if (((e = ts(d)), e !== null)) {
              if (
                ((n.flags |= 128),
                (o = !0),
                (e = e.updateQueue),
                (n.updateQueue = e),
                vs(n, e),
                wi(c, !0),
                c.tail === null && c.tailMode === 'hidden' && !d.alternate && !Ue)
              )
                return ot(n), null;
            } else
              2 * Je() - c.renderingStartTime > bs &&
                a !== 536870912 &&
                ((n.flags |= 128), (o = !0), wi(c, !1), (n.lanes = 4194304));
          c.isBackwards
            ? ((d.sibling = n.child), (n.child = d))
            : ((e = c.last), e !== null ? (e.sibling = d) : (n.child = d), (c.last = d));
        }
        return c.tail !== null
          ? ((n = c.tail),
            (c.rendering = n),
            (c.tail = n.sibling),
            (c.renderingStartTime = Je()),
            (n.sibling = null),
            (e = At.current),
            ce(At, o ? (e & 1) | 2 : e & 1),
            n)
          : (ot(n), null);
      case 22:
      case 23:
        return (
          sr(n),
          Bc(),
          (o = n.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== o && (n.flags |= 8192)
            : o && (n.flags |= 8192),
          o
            ? a & 536870912 && !(n.flags & 128) && (ot(n), n.subtreeFlags & 6 && (n.flags |= 8192))
            : ot(n),
          (a = n.updateQueue),
          a !== null && vs(n, a.retryQueue),
          (a = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (a = e.memoizedState.cachePool.pool),
          (o = null),
          n.memoizedState !== null &&
            n.memoizedState.cachePool !== null &&
            (o = n.memoizedState.cachePool.pool),
          o !== a && (n.flags |= 2048),
          e !== null && de(va),
          null
        );
      case 24:
        return (
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          n.memoizedState.cache !== a && (n.flags |= 2048),
          dr(Ot),
          ot(n),
          null
        );
      case 25:
        return null;
    }
    throw Error(i(156, n.tag));
  }
  function PS(e, n) {
    switch (($c(n), n.tag)) {
      case 1:
        return (e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null;
      case 3:
        return (
          dr(Ot),
          xt(),
          (e = n.flags),
          e & 65536 && !(e & 128) ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 26:
      case 27:
      case 5:
        return lt(n), null;
      case 13:
        if ((sr(n), (e = n.memoizedState), e !== null && e.dehydrated !== null)) {
          if (n.alternate === null) throw Error(i(340));
          ii();
        }
        return (e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null;
      case 19:
        return de(At), null;
      case 4:
        return xt(), null;
      case 10:
        return dr(n.type), null;
      case 22:
      case 23:
        return (
          sr(n),
          Bc(),
          e !== null && de(va),
          (e = n.flags),
          e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 24:
        return dr(Ot), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function P0(e, n) {
    switch (($c(n), n.tag)) {
      case 3:
        dr(Ot), xt();
        break;
      case 26:
      case 27:
      case 5:
        lt(n);
        break;
      case 4:
        xt();
        break;
      case 13:
        sr(n);
        break;
      case 19:
        de(At);
        break;
      case 10:
        dr(n.type);
        break;
      case 22:
      case 23:
        sr(n), Bc(), e !== null && de(va);
        break;
      case 24:
        dr(Ot);
    }
  }
  var qS = {
      getCacheForType: function (e) {
        var n = qt(Ot),
          a = n.data.get(e);
        return a === void 0 && ((a = e()), n.data.set(e, a)), a;
      },
    },
    FS = typeof WeakMap == 'function' ? WeakMap : Map,
    st = 0,
    Ie = null,
    De = null,
    Ne = 0,
    Ze = 0,
    on = null,
    yr = !1,
    dl = !1,
    Mf = !1,
    vr = 0,
    ft = 0,
    Ir = 0,
    Aa = 0,
    $f = 0,
    Cn = 0,
    pl = 0,
    Ai = null,
    Gn = null,
    zf = !1,
    Df = 0,
    bs = 1 / 0,
    Ss = null,
    Zr = null,
    xs = !1,
    Oa = null,
    Oi = 0,
    _f = 0,
    Bf = null,
    Mi = 0,
    Nf = null;
  function sn() {
    if (st & 2 && Ne !== 0) return Ne & -Ne;
    if (G.T !== null) {
      var e = al;
      return e !== 0 ? e : Ff();
    }
    return sh();
  }
  function q0() {
    Cn === 0 && (Cn = !(Ne & 536870912) || Ue ? rh() : 536870912);
    var e = bn.current;
    return e !== null && (e.flags |= 32), Cn;
  }
  function Wt(e, n, a) {
    ((e === Ie && Ze === 2) || e.cancelPendingCommit !== null) && (hl(e, 0), br(e, Ne, Cn, !1)),
      Kl(e, a),
      (!(st & 2) || e !== Ie) &&
        (e === Ie && (!(st & 2) && (Aa |= a), ft === 4 && br(e, Ne, Cn, !1)), Vn(e));
  }
  function F0(e, n, a) {
    if (st & 6) throw Error(i(327));
    var o = (!a && (n & 60) === 0 && (n & e.expiredLanes) === 0) || Yl(e, n),
      c = o ? YS(e, n) : Lf(e, n, !0),
      d = o;
    do {
      if (c === 0) {
        dl && !o && br(e, n, 0, !1);
        break;
      } else if (c === 6) br(e, n, 0, !yr);
      else {
        if (((a = e.current.alternate), d && !GS(a))) {
          (c = Lf(e, n, !1)), (d = !1);
          continue;
        }
        if (c === 2) {
          if (((d = n), e.errorRecoveryDisabledLanes & d)) var g = 0;
          else (g = e.pendingLanes & -536870913), (g = g !== 0 ? g : g & 536870912 ? 536870912 : 0);
          if (g !== 0) {
            n = g;
            e: {
              var T = e;
              c = Ai;
              var $ = T.current.memoizedState.isDehydrated;
              if (($ && (hl(T, g).flags |= 256), (g = Lf(T, g, !1)), g !== 2)) {
                if (Mf && !$) {
                  (T.errorRecoveryDisabledLanes |= d), (Aa |= d), (c = 4);
                  break e;
                }
                (d = Gn), (Gn = c), d !== null && kf(d);
              }
              c = g;
            }
            if (((d = !1), c !== 2)) continue;
          }
        }
        if (c === 1) {
          hl(e, 0), br(e, n, 0, !0);
          break;
        }
        e: {
          switch (((o = e), c)) {
            case 0:
            case 1:
              throw Error(i(345));
            case 4:
              if ((n & 4194176) === n) {
                br(o, n, Cn, !yr);
                break e;
              }
              break;
            case 2:
              Gn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(i(329));
          }
          if (
            ((o.finishedWork = a),
            (o.finishedLanes = n),
            (n & 62914560) === n && ((d = Df + 300 - Je()), 10 < d))
          ) {
            if ((br(o, n, Cn, !yr), Bo(o, 0) !== 0)) break e;
            o.timeoutHandle = pg(G0.bind(null, o, a, Gn, Ss, zf, n, Cn, Aa, pl, yr, 2, -0, 0), d);
            break e;
          }
          G0(o, a, Gn, Ss, zf, n, Cn, Aa, pl, yr, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Vn(e);
  }
  function kf(e) {
    Gn === null ? (Gn = e) : Gn.push.apply(Gn, e);
  }
  function G0(e, n, a, o, c, d, g, T, $, N, W, re, F) {
    var Q = n.subtreeFlags;
    if (
      (Q & 8192 || (Q & 16785408) === 16785408) &&
      ((Ni = { stylesheets: null, count: 0, unsuspend: Tx }), B0(n), (n = Ax()), n !== null)
    ) {
      (e.cancelPendingCommit = n(I0.bind(null, e, a, o, c, g, T, $, 1, re, F))), br(e, d, g, !N);
      return;
    }
    I0(e, a, o, c, g, T, $, W, re, F);
  }
  function GS(e) {
    for (var n = e; ; ) {
      var a = n.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        n.flags & 16384 &&
        ((a = n.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var o = 0; o < a.length; o++) {
          var c = a[o],
            d = c.getSnapshot;
          c = c.value;
          try {
            if (!rn(d(), c)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = n.child), n.subtreeFlags & 16384 && a !== null)) (a.return = n), (n = a);
      else {
        if (n === e) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e) return !0;
          n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
      }
    }
    return !0;
  }
  function br(e, n, a, o) {
    (n &= ~$f),
      (n &= ~Aa),
      (e.suspendedLanes |= n),
      (e.pingedLanes &= ~n),
      o && (e.warmLanes |= n),
      (o = e.expirationTimes);
    for (var c = n; 0 < c; ) {
      var d = 31 - Le(c),
        g = 1 << d;
      (o[d] = -1), (c &= ~g);
    }
    a !== 0 && lh(e, a, n);
  }
  function Es() {
    return st & 6 ? !0 : ($i(0), !1);
  }
  function Uf() {
    if (De !== null) {
      if (Ze === 0) var e = De.return;
      else (e = De), (fr = Ca = null), qc(e), (nl = null), (ci = 0), (e = De);
      for (; e !== null; ) P0(e.alternate, e), (e = e.return);
      De = null;
    }
  }
  function hl(e, n) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var a = e.timeoutHandle;
    a !== -1 && ((e.timeoutHandle = -1), ux(a)),
      (a = e.cancelPendingCommit),
      a !== null && ((e.cancelPendingCommit = null), a()),
      Uf(),
      (Ie = e),
      (De = a = Wr(e.current, null)),
      (Ne = n),
      (Ze = 0),
      (on = null),
      (yr = !1),
      (dl = Yl(e, n)),
      (Mf = !1),
      (pl = Cn = $f = Aa = Ir = ft = 0),
      (Gn = Ai = null),
      (zf = !1),
      n & 8 && (n |= n & 32);
    var o = e.entangledLanes;
    if (o !== 0)
      for (e = e.entanglements, o &= n; 0 < o; ) {
        var c = 31 - Le(o),
          d = 1 << c;
        (n |= e[c]), (o &= ~d);
      }
    return (vr = n), Yo(), a;
  }
  function V0(e, n) {
    ($e = null),
      (G.H = Fn),
      n === si
        ? ((n = im()), (Ze = 3))
        : n === rm
          ? ((n = im()), (Ze = 4))
          : (Ze =
              n === a0
                ? 8
                : n !== null && typeof n == 'object' && typeof n.then == 'function'
                  ? 6
                  : 1),
      (on = n),
      De === null && ((ft = 1), ds(e, gn(n, e.current)));
  }
  function Y0() {
    var e = G.H;
    return (G.H = Fn), e === null ? Fn : e;
  }
  function K0() {
    var e = G.A;
    return (G.A = qS), e;
  }
  function jf() {
    (ft = 4),
      yr || ((Ne & 4194176) !== Ne && bn.current !== null) || (dl = !0),
      (!(Ir & 134217727) && !(Aa & 134217727)) || Ie === null || br(Ie, Ne, Cn, !1);
  }
  function Lf(e, n, a) {
    var o = st;
    st |= 2;
    var c = Y0(),
      d = K0();
    (Ie !== e || Ne !== n) && ((Ss = null), hl(e, n)), (n = !1);
    var g = ft;
    e: do
      try {
        if (Ze !== 0 && De !== null) {
          var T = De,
            $ = on;
          switch (Ze) {
            case 8:
              Uf(), (g = 6);
              break e;
            case 3:
            case 2:
            case 6:
              bn.current === null && (n = !0);
              var N = Ze;
              if (((Ze = 0), (on = null), ml(e, T, $, N), a && dl)) {
                g = 0;
                break e;
              }
              break;
            default:
              (N = Ze), (Ze = 0), (on = null), ml(e, T, $, N);
          }
        }
        VS(), (g = ft);
        break;
      } catch (W) {
        V0(e, W);
      }
    while (!0);
    return (
      n && e.shellSuspendCounter++,
      (fr = Ca = null),
      (st = o),
      (G.H = c),
      (G.A = d),
      De === null && ((Ie = null), (Ne = 0), Yo()),
      g
    );
  }
  function VS() {
    for (; De !== null; ) X0(De);
  }
  function YS(e, n) {
    var a = st;
    st |= 2;
    var o = Y0(),
      c = K0();
    Ie !== e || Ne !== n ? ((Ss = null), (bs = Je() + 500), hl(e, n)) : (dl = Yl(e, n));
    e: do
      try {
        if (Ze !== 0 && De !== null) {
          n = De;
          var d = on;
          t: switch (Ze) {
            case 1:
              (Ze = 0), (on = null), ml(e, n, d, 1);
              break;
            case 2:
              if (am(d)) {
                (Ze = 0), (on = null), Q0(n);
                break;
              }
              (n = function () {
                Ze === 2 && Ie === e && (Ze = 7), Vn(e);
              }),
                d.then(n, n);
              break e;
            case 3:
              Ze = 7;
              break e;
            case 4:
              Ze = 5;
              break e;
            case 7:
              am(d) ? ((Ze = 0), (on = null), Q0(n)) : ((Ze = 0), (on = null), ml(e, n, d, 7));
              break;
            case 5:
              var g = null;
              switch (De.tag) {
                case 26:
                  g = De.memoizedState;
                case 5:
                case 27:
                  var T = De;
                  if (!g || Rg(g)) {
                    (Ze = 0), (on = null);
                    var $ = T.sibling;
                    if ($ !== null) De = $;
                    else {
                      var N = T.return;
                      N !== null ? ((De = N), Cs(N)) : (De = null);
                    }
                    break t;
                  }
              }
              (Ze = 0), (on = null), ml(e, n, d, 5);
              break;
            case 6:
              (Ze = 0), (on = null), ml(e, n, d, 6);
              break;
            case 8:
              Uf(), (ft = 6);
              break e;
            default:
              throw Error(i(462));
          }
        }
        KS();
        break;
      } catch (W) {
        V0(e, W);
      }
    while (!0);
    return (
      (fr = Ca = null),
      (G.H = o),
      (G.A = c),
      (st = a),
      De !== null ? 0 : ((Ie = null), (Ne = 0), Yo(), ft)
    );
  }
  function KS() {
    for (; De !== null && !ve(); ) X0(De);
  }
  function X0(e) {
    var n = g0(e.alternate, e, vr);
    (e.memoizedProps = e.pendingProps), n === null ? Cs(e) : (De = n);
  }
  function Q0(e) {
    var n = e,
      a = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = c0(a, n, n.pendingProps, n.type, void 0, Ne);
        break;
      case 11:
        n = c0(a, n, n.pendingProps, n.type.render, n.ref, Ne);
        break;
      case 5:
        qc(n);
      default:
        P0(a, n), (n = De = j0(n, vr)), (n = g0(a, n, vr));
    }
    (e.memoizedProps = e.pendingProps), n === null ? Cs(e) : (De = n);
  }
  function ml(e, n, a, o) {
    (fr = Ca = null), qc(n), (nl = null), (ci = 0);
    var c = n.return;
    try {
      if (NS(e, c, n, a, Ne)) {
        (ft = 1), ds(e, gn(a, e.current)), (De = null);
        return;
      }
    } catch (d) {
      if (c !== null) throw ((De = c), d);
      (ft = 1), ds(e, gn(a, e.current)), (De = null);
      return;
    }
    n.flags & 32768
      ? (Ue || o === 1
          ? (e = !0)
          : dl || Ne & 536870912
            ? (e = !1)
            : ((yr = e = !0),
              (o === 2 || o === 3 || o === 6) &&
                ((o = bn.current), o !== null && o.tag === 13 && (o.flags |= 16384))),
        W0(n, e))
      : Cs(n);
  }
  function Cs(e) {
    var n = e;
    do {
      if (n.flags & 32768) {
        W0(n, yr);
        return;
      }
      e = n.return;
      var a = HS(n.alternate, n, vr);
      if (a !== null) {
        De = a;
        return;
      }
      if (((n = n.sibling), n !== null)) {
        De = n;
        return;
      }
      De = n = e;
    } while (n !== null);
    ft === 0 && (ft = 5);
  }
  function W0(e, n) {
    do {
      var a = PS(e.alternate, e);
      if (a !== null) {
        (a.flags &= 32767), (De = a);
        return;
      }
      if (
        ((a = e.return),
        a !== null && ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !n && ((e = e.sibling), e !== null))
      ) {
        De = e;
        return;
      }
      De = e = a;
    } while (e !== null);
    (ft = 6), (De = null);
  }
  function I0(e, n, a, o, c, d, g, T, $, N) {
    var W = G.T,
      re = le.p;
    try {
      (le.p = 2), (G.T = null), XS(e, n, a, o, re, c, d, g, T, $, N);
    } finally {
      (G.T = W), (le.p = re);
    }
  }
  function XS(e, n, a, o, c, d, g, T) {
    do gl();
    while (Oa !== null);
    if (st & 6) throw Error(i(327));
    var $ = e.finishedWork;
    if (((o = e.finishedLanes), $ === null)) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), $ === e.current)) throw Error(i(177));
    (e.callbackNode = null), (e.callbackPriority = 0), (e.cancelPendingCommit = null);
    var N = $.lanes | $.childLanes;
    if (
      ((N |= Ac),
      w1(e, o, N, d, g, T),
      e === Ie && ((De = Ie = null), (Ne = 0)),
      (!($.subtreeFlags & 10256) && !($.flags & 10256)) ||
        xs ||
        ((xs = !0),
        (_f = N),
        (Bf = a),
        ZS($n, function () {
          return gl(), null;
        })),
      (a = ($.flags & 15990) !== 0),
      $.subtreeFlags & 15990 || a
        ? ((a = G.T),
          (G.T = null),
          (d = le.p),
          (le.p = 2),
          (g = st),
          (st |= 4),
          US(e, $),
          z0($, e),
          vS(If, e.containerInfo),
          (Ns = !!Wf),
          (If = Wf = null),
          (e.current = $),
          A0(e, $.alternate, $),
          Mr(),
          (st = g),
          (le.p = d),
          (G.T = a))
        : (e.current = $),
      xs ? ((xs = !1), (Oa = e), (Oi = o)) : Z0(e, N),
      (N = e.pendingLanes),
      N === 0 && (Zr = null),
      xe($.stateNode),
      Vn(e),
      n !== null)
    )
      for (c = e.onRecoverableError, $ = 0; $ < n.length; $++)
        (N = n[$]), c(N.value, { componentStack: N.stack });
    return (
      Oi & 3 && gl(),
      (N = e.pendingLanes),
      o & 4194218 && N & 42 ? (e === Nf ? Mi++ : ((Mi = 0), (Nf = e))) : (Mi = 0),
      $i(0),
      null
    );
  }
  function Z0(e, n) {
    (e.pooledCacheLanes &= n) === 0 &&
      ((n = e.pooledCache), n != null && ((e.pooledCache = null), di(n)));
  }
  function gl() {
    if (Oa !== null) {
      var e = Oa,
        n = _f;
      _f = 0;
      var a = oh(Oi),
        o = G.T,
        c = le.p;
      try {
        if (((le.p = 32 > a ? 32 : a), (G.T = null), Oa === null)) var d = !1;
        else {
          (a = Bf), (Bf = null);
          var g = Oa,
            T = Oi;
          if (((Oa = null), (Oi = 0), st & 6)) throw Error(i(331));
          var $ = st;
          if (
            ((st |= 4),
            k0(g.current),
            _0(g, g.current, T, a),
            (st = $),
            $i(0, !1),
            Ht && typeof Ht.onPostCommitFiberRoot == 'function')
          )
            try {
              Ht.onPostCommitFiberRoot(zn, g);
            } catch {}
          d = !0;
        }
        return d;
      } finally {
        (le.p = c), (G.T = o), Z0(e, n);
      }
    }
    return !1;
  }
  function J0(e, n, a) {
    (n = gn(a, n)), (n = nf(e.stateNode, n, 2)), (e = Yr(e, n, 2)), e !== null && (Kl(e, 2), Vn(e));
  }
  function Ke(e, n, a) {
    if (e.tag === 3) J0(e, e, a);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          J0(n, e, a);
          break;
        } else if (n.tag === 1) {
          var o = n.stateNode;
          if (
            typeof n.type.getDerivedStateFromError == 'function' ||
            (typeof o.componentDidCatch == 'function' && (Zr === null || !Zr.has(o)))
          ) {
            (e = gn(a, e)),
              (a = n0(2)),
              (o = Yr(n, a, 2)),
              o !== null && (r0(a, o, n, e), Kl(o, 2), Vn(o));
            break;
          }
        }
        n = n.return;
      }
  }
  function Hf(e, n, a) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new FS();
      var c = new Set();
      o.set(n, c);
    } else (c = o.get(n)), c === void 0 && ((c = new Set()), o.set(n, c));
    c.has(a) || ((Mf = !0), c.add(a), (e = QS.bind(null, e, n, a)), n.then(e, e));
  }
  function QS(e, n, a) {
    var o = e.pingCache;
    o !== null && o.delete(n),
      (e.pingedLanes |= e.suspendedLanes & a),
      (e.warmLanes &= ~a),
      Ie === e &&
        (Ne & a) === a &&
        (ft === 4 || (ft === 3 && (Ne & 62914560) === Ne && 300 > Je() - Df)
          ? !(st & 2) && hl(e, 0)
          : ($f |= a),
        pl === Ne && (pl = 0)),
      Vn(e);
  }
  function eg(e, n) {
    n === 0 && (n = ah()), (e = jr(e, n)), e !== null && (Kl(e, n), Vn(e));
  }
  function WS(e) {
    var n = e.memoizedState,
      a = 0;
    n !== null && (a = n.retryLane), eg(e, a);
  }
  function IS(e, n) {
    var a = 0;
    switch (e.tag) {
      case 13:
        var o = e.stateNode,
          c = e.memoizedState;
        c !== null && (a = c.retryLane);
        break;
      case 19:
        o = e.stateNode;
        break;
      case 22:
        o = e.stateNode._retryCache;
        break;
      default:
        throw Error(i(314));
    }
    o !== null && o.delete(n), eg(e, a);
  }
  function ZS(e, n) {
    return Mt(e, n);
  }
  var Rs = null,
    yl = null,
    Pf = !1,
    Ts = !1,
    qf = !1,
    Ma = 0;
  function Vn(e) {
    e !== yl && e.next === null && (yl === null ? (Rs = yl = e) : (yl = yl.next = e)),
      (Ts = !0),
      Pf || ((Pf = !0), ex(JS));
  }
  function $i(e, n) {
    if (!qf && Ts) {
      qf = !0;
      do
        for (var a = !1, o = Rs; o !== null; ) {
          if (e !== 0) {
            var c = o.pendingLanes;
            if (c === 0) var d = 0;
            else {
              var g = o.suspendedLanes,
                T = o.pingedLanes;
              (d = (1 << (31 - Le(42 | e) + 1)) - 1),
                (d &= c & ~(g & ~T)),
                (d = d & 201326677 ? (d & 201326677) | 1 : d ? d | 2 : 0);
            }
            d !== 0 && ((a = !0), rg(o, d));
          } else
            (d = Ne), (d = Bo(o, o === Ie ? d : 0)), !(d & 3) || Yl(o, d) || ((a = !0), rg(o, d));
          o = o.next;
        }
      while (a);
      qf = !1;
    }
  }
  function JS() {
    Ts = Pf = !1;
    var e = 0;
    Ma !== 0 && (sx() && (e = Ma), (Ma = 0));
    for (var n = Je(), a = null, o = Rs; o !== null; ) {
      var c = o.next,
        d = tg(o, n);
      d === 0
        ? ((o.next = null), a === null ? (Rs = c) : (a.next = c), c === null && (yl = a))
        : ((a = o), (e !== 0 || d & 3) && (Ts = !0)),
        (o = c);
    }
    $i(e);
  }
  function tg(e, n) {
    for (
      var a = e.suspendedLanes,
        o = e.pingedLanes,
        c = e.expirationTimes,
        d = e.pendingLanes & -62914561;
      0 < d;

    ) {
      var g = 31 - Le(d),
        T = 1 << g,
        $ = c[g];
      $ === -1 ? (!(T & a) || T & o) && (c[g] = T1(T, n)) : $ <= n && (e.expiredLanes |= T),
        (d &= ~T);
    }
    if (
      ((n = Ie),
      (a = Ne),
      (a = Bo(e, e === n ? a : 0)),
      (o = e.callbackNode),
      a === 0 || (e === n && Ze === 2) || e.cancelPendingCommit !== null)
    )
      return o !== null && o !== null && it(o), (e.callbackNode = null), (e.callbackPriority = 0);
    if (!(a & 3) || Yl(e, a)) {
      if (((n = a & -a), n === e.callbackPriority)) return n;
      switch ((o !== null && it(o), oh(a))) {
        case 2:
        case 8:
          a = Dr;
          break;
        case 32:
          a = $n;
          break;
        case 268435456:
          a = Hn;
          break;
        default:
          a = $n;
      }
      return (
        (o = ng.bind(null, e)), (a = Mt(a, o)), (e.callbackPriority = n), (e.callbackNode = a), n
      );
    }
    return o !== null && o !== null && it(o), (e.callbackPriority = 2), (e.callbackNode = null), 2;
  }
  function ng(e, n) {
    var a = e.callbackNode;
    if (gl() && e.callbackNode !== a) return null;
    var o = Ne;
    return (
      (o = Bo(e, e === Ie ? o : 0)),
      o === 0
        ? null
        : (F0(e, o, n),
          tg(e, Je()),
          e.callbackNode != null && e.callbackNode === a ? ng.bind(null, e) : null)
    );
  }
  function rg(e, n) {
    if (gl()) return null;
    F0(e, n, !0);
  }
  function ex(e) {
    cx(function () {
      st & 6 ? Mt(zr, e) : e();
    });
  }
  function Ff() {
    return Ma === 0 && (Ma = rh()), Ma;
  }
  function ag(e) {
    return e == null || typeof e == 'symbol' || typeof e == 'boolean'
      ? null
      : typeof e == 'function'
        ? e
        : Lo('' + e);
  }
  function lg(e, n) {
    var a = n.ownerDocument.createElement('input');
    return (
      (a.name = n.name),
      (a.value = n.value),
      e.id && a.setAttribute('form', e.id),
      n.parentNode.insertBefore(a, n),
      (e = new FormData(e)),
      a.parentNode.removeChild(a),
      e
    );
  }
  function tx(e, n, a, o, c) {
    if (n === 'submit' && a && a.stateNode === c) {
      var d = ag((c[Zt] || null).action),
        g = o.submitter;
      g &&
        ((n = (n = g[Zt] || null) ? ag(n.formAction) : g.getAttribute('formAction')),
        n !== null && ((d = n), (g = null)));
      var T = new Fo('action', 'action', null, o, c);
      e.push({
        event: T,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (o.defaultPrevented) {
                if (Ma !== 0) {
                  var $ = g ? lg(c, g) : new FormData(c);
                  Ic(a, { pending: !0, data: $, method: c.method, action: d }, null, $);
                }
              } else
                typeof d == 'function' &&
                  (T.preventDefault(),
                  ($ = g ? lg(c, g) : new FormData(c)),
                  Ic(a, { pending: !0, data: $, method: c.method, action: d }, d, $));
            },
            currentTarget: c,
          },
        ],
      });
    }
  }
  for (var Gf = 0; Gf < Ih.length; Gf++) {
    var Vf = Ih[Gf],
      nx = Vf.toLowerCase(),
      rx = Vf[0].toUpperCase() + Vf.slice(1);
    Dn(nx, 'on' + rx);
  }
  Dn(Yh, 'onAnimationEnd'),
    Dn(Kh, 'onAnimationIteration'),
    Dn(Xh, 'onAnimationStart'),
    Dn('dblclick', 'onDoubleClick'),
    Dn('focusin', 'onFocus'),
    Dn('focusout', 'onBlur'),
    Dn(SS, 'onTransitionRun'),
    Dn(xS, 'onTransitionStart'),
    Dn(ES, 'onTransitionCancel'),
    Dn(Qh, 'onTransitionEnd'),
    Ga('onMouseEnter', ['mouseout', 'mouseover']),
    Ga('onMouseLeave', ['mouseout', 'mouseover']),
    Ga('onPointerEnter', ['pointerout', 'pointerover']),
    Ga('onPointerLeave', ['pointerout', 'pointerover']),
    ca('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    ca(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' ',
      ),
    ),
    ca('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    ca('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    ca(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
    ),
    ca(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
    );
  var zi =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' ',
      ),
    ax = new Set(
      'beforetoggle cancel close invalid load scroll scrollend toggle'.split(' ').concat(zi),
    );
  function ig(e, n) {
    n = (n & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var o = e[a],
        c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (n)
          for (var g = o.length - 1; 0 <= g; g--) {
            var T = o[g],
              $ = T.instance,
              N = T.currentTarget;
            if (((T = T.listener), $ !== d && c.isPropagationStopped())) break e;
            (d = T), (c.currentTarget = N);
            try {
              d(c);
            } catch (W) {
              fs(W);
            }
            (c.currentTarget = null), (d = $);
          }
        else
          for (g = 0; g < o.length; g++) {
            if (
              ((T = o[g]),
              ($ = T.instance),
              (N = T.currentTarget),
              (T = T.listener),
              $ !== d && c.isPropagationStopped())
            )
              break e;
            (d = T), (c.currentTarget = N);
            try {
              d(c);
            } catch (W) {
              fs(W);
            }
            (c.currentTarget = null), (d = $);
          }
      }
    }
  }
  function _e(e, n) {
    var a = n[ic];
    a === void 0 && (a = n[ic] = new Set());
    var o = e + '__bubble';
    a.has(o) || (og(n, e, 2, !1), a.add(o));
  }
  function Yf(e, n, a) {
    var o = 0;
    n && (o |= 4), og(a, e, o, n);
  }
  var ws = '_reactListening' + Math.random().toString(36).slice(2);
  function Kf(e) {
    if (!e[ws]) {
      (e[ws] = !0),
        ch.forEach(function (a) {
          a !== 'selectionchange' && (ax.has(a) || Yf(a, !1, e), Yf(a, !0, e));
        });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[ws] || ((n[ws] = !0), Yf('selectionchange', !1, n));
    }
  }
  function og(e, n, a, o) {
    switch ($g(n)) {
      case 2:
        var c = $x;
        break;
      case 8:
        c = zx;
        break;
      default:
        c = id;
    }
    (a = c.bind(null, n, a, e)),
      (c = void 0),
      !hc || (n !== 'touchstart' && n !== 'touchmove' && n !== 'wheel') || (c = !0),
      o
        ? c !== void 0
          ? e.addEventListener(n, a, { capture: !0, passive: c })
          : e.addEventListener(n, a, !0)
        : c !== void 0
          ? e.addEventListener(n, a, { passive: c })
          : e.addEventListener(n, a, !1);
  }
  function Xf(e, n, a, o, c) {
    var d = o;
    if (!(n & 1) && !(n & 2) && o !== null)
      e: for (;;) {
        if (o === null) return;
        var g = o.tag;
        if (g === 3 || g === 4) {
          var T = o.stateNode.containerInfo;
          if (T === c || (T.nodeType === 8 && T.parentNode === c)) break;
          if (g === 4)
            for (g = o.return; g !== null; ) {
              var $ = g.tag;
              if (
                ($ === 3 || $ === 4) &&
                (($ = g.stateNode.containerInfo),
                $ === c || ($.nodeType === 8 && $.parentNode === c))
              )
                return;
              g = g.return;
            }
          for (; T !== null; ) {
            if (((g = ua(T)), g === null)) return;
            if ((($ = g.tag), $ === 5 || $ === 6 || $ === 26 || $ === 27)) {
              o = d = g;
              continue e;
            }
            T = T.parentNode;
          }
        }
        o = o.return;
      }
    Eh(function () {
      var N = d,
        W = dc(a),
        re = [];
      e: {
        var F = Wh.get(e);
        if (F !== void 0) {
          var Q = Fo,
            me = e;
          switch (e) {
            case 'keypress':
              if (Po(a) === 0) break e;
            case 'keydown':
            case 'keyup':
              Q = I1;
              break;
            case 'focusin':
              (me = 'focus'), (Q = vc);
              break;
            case 'focusout':
              (me = 'blur'), (Q = vc);
              break;
            case 'beforeblur':
            case 'afterblur':
              Q = vc;
              break;
            case 'click':
              if (a.button === 2) break e;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              Q = Th;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              Q = L1;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              Q = eS;
              break;
            case Yh:
            case Kh:
            case Xh:
              Q = q1;
              break;
            case Qh:
              Q = nS;
              break;
            case 'scroll':
            case 'scrollend':
              Q = U1;
              break;
            case 'wheel':
              Q = aS;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              Q = G1;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              Q = Ah;
              break;
            case 'toggle':
            case 'beforetoggle':
              Q = iS;
          }
          var Re = (n & 4) !== 0,
            dt = !Re && (e === 'scroll' || e === 'scrollend'),
            k = Re ? (F !== null ? F + 'Capture' : null) : F;
          Re = [];
          for (var B = N, H; B !== null; ) {
            var J = B;
            if (
              ((H = J.stateNode),
              (J = J.tag),
              (J !== 5 && J !== 26 && J !== 27) ||
                H === null ||
                k === null ||
                ((J = Wl(B, k)), J != null && Re.push(Di(B, J, H))),
              dt)
            )
              break;
            B = B.return;
          }
          0 < Re.length && ((F = new Q(F, me, null, a, W)), re.push({ event: F, listeners: Re }));
        }
      }
      if (!(n & 7)) {
        e: {
          if (
            ((F = e === 'mouseover' || e === 'pointerover'),
            (Q = e === 'mouseout' || e === 'pointerout'),
            F && a !== fc && (me = a.relatedTarget || a.fromElement) && (ua(me) || me[Pa]))
          )
            break e;
          if (
            (Q || F) &&
            ((F =
              W.window === W
                ? W
                : (F = W.ownerDocument)
                  ? F.defaultView || F.parentWindow
                  : window),
            Q
              ? ((me = a.relatedTarget || a.toElement),
                (Q = N),
                (me = me ? ua(me) : null),
                me !== null &&
                  ((dt = ie(me)),
                  (Re = me.tag),
                  me !== dt || (Re !== 5 && Re !== 27 && Re !== 6)) &&
                  (me = null))
              : ((Q = null), (me = N)),
            Q !== me)
          ) {
            if (
              ((Re = Th),
              (J = 'onMouseLeave'),
              (k = 'onMouseEnter'),
              (B = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((Re = Ah), (J = 'onPointerLeave'), (k = 'onPointerEnter'), (B = 'pointer')),
              (dt = Q == null ? F : Ql(Q)),
              (H = me == null ? F : Ql(me)),
              (F = new Re(J, B + 'leave', Q, a, W)),
              (F.target = dt),
              (F.relatedTarget = H),
              (J = null),
              ua(W) === N &&
                ((Re = new Re(k, B + 'enter', me, a, W)),
                (Re.target = H),
                (Re.relatedTarget = dt),
                (J = Re)),
              (dt = J),
              Q && me)
            )
              t: {
                for (Re = Q, k = me, B = 0, H = Re; H; H = vl(H)) B++;
                for (H = 0, J = k; J; J = vl(J)) H++;
                for (; 0 < B - H; ) (Re = vl(Re)), B--;
                for (; 0 < H - B; ) (k = vl(k)), H--;
                for (; B--; ) {
                  if (Re === k || (k !== null && Re === k.alternate)) break t;
                  (Re = vl(Re)), (k = vl(k));
                }
                Re = null;
              }
            else Re = null;
            Q !== null && sg(re, F, Q, Re, !1),
              me !== null && dt !== null && sg(re, dt, me, Re, !0);
          }
        }
        e: {
          if (
            ((F = N ? Ql(N) : window),
            (Q = F.nodeName && F.nodeName.toLowerCase()),
            Q === 'select' || (Q === 'input' && F.type === 'file'))
          )
            var he = Nh;
          else if (_h(F))
            if (kh) he = gS;
            else {
              he = hS;
              var ze = pS;
            }
          else
            (Q = F.nodeName),
              !Q || Q.toLowerCase() !== 'input' || (F.type !== 'checkbox' && F.type !== 'radio')
                ? N && cc(N.elementType) && (he = Nh)
                : (he = mS);
          if (he && (he = he(e, N))) {
            Bh(re, he, a, W);
            break e;
          }
          ze && ze(e, F, N),
            e === 'focusout' &&
              N &&
              F.type === 'number' &&
              N.memoizedProps.value != null &&
              uc(F, 'number', F.value);
        }
        switch (((ze = N ? Ql(N) : window), e)) {
          case 'focusin':
            (_h(ze) || ze.contentEditable === 'true') && ((Wa = ze), (Rc = N), (ai = null));
            break;
          case 'focusout':
            ai = Rc = Wa = null;
            break;
          case 'mousedown':
            Tc = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            (Tc = !1), Gh(re, a, W);
            break;
          case 'selectionchange':
            if (bS) break;
          case 'keydown':
          case 'keyup':
            Gh(re, a, W);
        }
        var ye;
        if (Sc)
          e: {
            switch (e) {
              case 'compositionstart':
                var Ee = 'onCompositionStart';
                break e;
              case 'compositionend':
                Ee = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                Ee = 'onCompositionUpdate';
                break e;
            }
            Ee = void 0;
          }
        else
          Qa
            ? zh(e, a) && (Ee = 'onCompositionEnd')
            : e === 'keydown' && a.keyCode === 229 && (Ee = 'onCompositionStart');
        Ee &&
          (Oh &&
            a.locale !== 'ko' &&
            (Qa || Ee !== 'onCompositionStart'
              ? Ee === 'onCompositionEnd' && Qa && (ye = Ch())
              : ((Ur = W), (mc = 'value' in Ur ? Ur.value : Ur.textContent), (Qa = !0))),
          (ze = As(N, Ee)),
          0 < ze.length &&
            ((Ee = new wh(Ee, e, null, a, W)),
            re.push({ event: Ee, listeners: ze }),
            ye ? (Ee.data = ye) : ((ye = Dh(a)), ye !== null && (Ee.data = ye)))),
          (ye = sS ? uS(e, a) : cS(e, a)) &&
            ((Ee = As(N, 'onBeforeInput')),
            0 < Ee.length &&
              ((ze = new wh('onBeforeInput', 'beforeinput', null, a, W)),
              re.push({ event: ze, listeners: Ee }),
              (ze.data = ye))),
          tx(re, e, N, a, W);
      }
      ig(re, n);
    });
  }
  function Di(e, n, a) {
    return { instance: e, listener: n, currentTarget: a };
  }
  function As(e, n) {
    for (var a = n + 'Capture', o = []; e !== null; ) {
      var c = e,
        d = c.stateNode;
      (c = c.tag),
        (c !== 5 && c !== 26 && c !== 27) ||
          d === null ||
          ((c = Wl(e, a)),
          c != null && o.unshift(Di(e, c, d)),
          (c = Wl(e, n)),
          c != null && o.push(Di(e, c, d))),
        (e = e.return);
    }
    return o;
  }
  function vl(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function sg(e, n, a, o, c) {
    for (var d = n._reactName, g = []; a !== null && a !== o; ) {
      var T = a,
        $ = T.alternate,
        N = T.stateNode;
      if (((T = T.tag), $ !== null && $ === o)) break;
      (T !== 5 && T !== 26 && T !== 27) ||
        N === null ||
        (($ = N),
        c
          ? ((N = Wl(a, d)), N != null && g.unshift(Di(a, N, $)))
          : c || ((N = Wl(a, d)), N != null && g.push(Di(a, N, $)))),
        (a = a.return);
    }
    g.length !== 0 && e.push({ event: n, listeners: g });
  }
  var lx = /\r\n?/g,
    ix = /\u0000|\uFFFD/g;
  function ug(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        lx,
        `
`,
      )
      .replace(ix, '');
  }
  function cg(e, n) {
    return (n = ug(n)), ug(e) === n;
  }
  function Os() {}
  function Ye(e, n, a, o, c, d) {
    switch (a) {
      case 'children':
        typeof o == 'string'
          ? n === 'body' || (n === 'textarea' && o === '') || Ya(e, o)
          : (typeof o == 'number' || typeof o == 'bigint') && n !== 'body' && Ya(e, '' + o);
        break;
      case 'className':
        ko(e, 'class', o);
        break;
      case 'tabIndex':
        ko(e, 'tabindex', o);
        break;
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        ko(e, a, o);
        break;
      case 'style':
        Sh(e, o, d);
        break;
      case 'data':
        if (n !== 'object') {
          ko(e, 'data', o);
          break;
        }
      case 'src':
      case 'href':
        if (o === '' && (n !== 'a' || a !== 'href')) {
          e.removeAttribute(a);
          break;
        }
        if (o == null || typeof o == 'function' || typeof o == 'symbol' || typeof o == 'boolean') {
          e.removeAttribute(a);
          break;
        }
        (o = Lo('' + o)), e.setAttribute(a, o);
        break;
      case 'action':
      case 'formAction':
        if (typeof o == 'function') {
          e.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof d == 'function' &&
            (a === 'formAction'
              ? (n !== 'input' && Ye(e, n, 'name', c.name, c, null),
                Ye(e, n, 'formEncType', c.formEncType, c, null),
                Ye(e, n, 'formMethod', c.formMethod, c, null),
                Ye(e, n, 'formTarget', c.formTarget, c, null))
              : (Ye(e, n, 'encType', c.encType, c, null),
                Ye(e, n, 'method', c.method, c, null),
                Ye(e, n, 'target', c.target, c, null)));
        if (o == null || typeof o == 'symbol' || typeof o == 'boolean') {
          e.removeAttribute(a);
          break;
        }
        (o = Lo('' + o)), e.setAttribute(a, o);
        break;
      case 'onClick':
        o != null && (e.onclick = Os);
        break;
      case 'onScroll':
        o != null && _e('scroll', e);
        break;
      case 'onScrollEnd':
        o != null && _e('scrollend', e);
        break;
      case 'dangerouslySetInnerHTML':
        if (o != null) {
          if (typeof o != 'object' || !('__html' in o)) throw Error(i(61));
          if (((a = o.__html), a != null)) {
            if (c.children != null) throw Error(i(60));
            e.innerHTML = a;
          }
        }
        break;
      case 'multiple':
        e.multiple = o && typeof o != 'function' && typeof o != 'symbol';
        break;
      case 'muted':
        e.muted = o && typeof o != 'function' && typeof o != 'symbol';
        break;
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'defaultValue':
      case 'defaultChecked':
      case 'innerHTML':
      case 'ref':
        break;
      case 'autoFocus':
        break;
      case 'xlinkHref':
        if (o == null || typeof o == 'function' || typeof o == 'boolean' || typeof o == 'symbol') {
          e.removeAttribute('xlink:href');
          break;
        }
        (a = Lo('' + o)), e.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', a);
        break;
      case 'contentEditable':
      case 'spellCheck':
      case 'draggable':
      case 'value':
      case 'autoReverse':
      case 'externalResourcesRequired':
      case 'focusable':
      case 'preserveAlpha':
        o != null && typeof o != 'function' && typeof o != 'symbol'
          ? e.setAttribute(a, '' + o)
          : e.removeAttribute(a);
        break;
      case 'inert':
      case 'allowFullScreen':
      case 'async':
      case 'autoPlay':
      case 'controls':
      case 'default':
      case 'defer':
      case 'disabled':
      case 'disablePictureInPicture':
      case 'disableRemotePlayback':
      case 'formNoValidate':
      case 'hidden':
      case 'loop':
      case 'noModule':
      case 'noValidate':
      case 'open':
      case 'playsInline':
      case 'readOnly':
      case 'required':
      case 'reversed':
      case 'scoped':
      case 'seamless':
      case 'itemScope':
        o && typeof o != 'function' && typeof o != 'symbol'
          ? e.setAttribute(a, '')
          : e.removeAttribute(a);
        break;
      case 'capture':
      case 'download':
        o === !0
          ? e.setAttribute(a, '')
          : o !== !1 && o != null && typeof o != 'function' && typeof o != 'symbol'
            ? e.setAttribute(a, o)
            : e.removeAttribute(a);
        break;
      case 'cols':
      case 'rows':
      case 'size':
      case 'span':
        o != null && typeof o != 'function' && typeof o != 'symbol' && !isNaN(o) && 1 <= o
          ? e.setAttribute(a, o)
          : e.removeAttribute(a);
        break;
      case 'rowSpan':
      case 'start':
        o == null || typeof o == 'function' || typeof o == 'symbol' || isNaN(o)
          ? e.removeAttribute(a)
          : e.setAttribute(a, o);
        break;
      case 'popover':
        _e('beforetoggle', e), _e('toggle', e), No(e, 'popover', o);
        break;
      case 'xlinkActuate':
        lr(e, 'http://www.w3.org/1999/xlink', 'xlink:actuate', o);
        break;
      case 'xlinkArcrole':
        lr(e, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', o);
        break;
      case 'xlinkRole':
        lr(e, 'http://www.w3.org/1999/xlink', 'xlink:role', o);
        break;
      case 'xlinkShow':
        lr(e, 'http://www.w3.org/1999/xlink', 'xlink:show', o);
        break;
      case 'xlinkTitle':
        lr(e, 'http://www.w3.org/1999/xlink', 'xlink:title', o);
        break;
      case 'xlinkType':
        lr(e, 'http://www.w3.org/1999/xlink', 'xlink:type', o);
        break;
      case 'xmlBase':
        lr(e, 'http://www.w3.org/XML/1998/namespace', 'xml:base', o);
        break;
      case 'xmlLang':
        lr(e, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', o);
        break;
      case 'xmlSpace':
        lr(e, 'http://www.w3.org/XML/1998/namespace', 'xml:space', o);
        break;
      case 'is':
        No(e, 'is', o);
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        (!(2 < a.length) || (a[0] !== 'o' && a[0] !== 'O') || (a[1] !== 'n' && a[1] !== 'N')) &&
          ((a = N1.get(a) || a), No(e, a, o));
    }
  }
  function Qf(e, n, a, o, c, d) {
    switch (a) {
      case 'style':
        Sh(e, o, d);
        break;
      case 'dangerouslySetInnerHTML':
        if (o != null) {
          if (typeof o != 'object' || !('__html' in o)) throw Error(i(61));
          if (((a = o.__html), a != null)) {
            if (c.children != null) throw Error(i(60));
            e.innerHTML = a;
          }
        }
        break;
      case 'children':
        typeof o == 'string'
          ? Ya(e, o)
          : (typeof o == 'number' || typeof o == 'bigint') && Ya(e, '' + o);
        break;
      case 'onScroll':
        o != null && _e('scroll', e);
        break;
      case 'onScrollEnd':
        o != null && _e('scrollend', e);
        break;
      case 'onClick':
        o != null && (e.onclick = Os);
        break;
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'innerHTML':
      case 'ref':
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        if (!fh.hasOwnProperty(a))
          e: {
            if (
              a[0] === 'o' &&
              a[1] === 'n' &&
              ((c = a.endsWith('Capture')),
              (n = a.slice(2, c ? a.length - 7 : void 0)),
              (d = e[Zt] || null),
              (d = d != null ? d[a] : null),
              typeof d == 'function' && e.removeEventListener(n, d, c),
              typeof o == 'function')
            ) {
              typeof d != 'function' &&
                d !== null &&
                (a in e ? (e[a] = null) : e.hasAttribute(a) && e.removeAttribute(a)),
                e.addEventListener(n, o, c);
              break e;
            }
            a in e ? (e[a] = o) : o === !0 ? e.setAttribute(a, '') : No(e, a, o);
          }
    }
  }
  function Ut(e, n, a) {
    switch (n) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break;
      case 'img':
        _e('error', e), _e('load', e);
        var o = !1,
          c = !1,
          d;
        for (d in a)
          if (a.hasOwnProperty(d)) {
            var g = a[d];
            if (g != null)
              switch (d) {
                case 'src':
                  o = !0;
                  break;
                case 'srcSet':
                  c = !0;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  throw Error(i(137, n));
                default:
                  Ye(e, n, d, g, a, null);
              }
          }
        c && Ye(e, n, 'srcSet', a.srcSet, a, null), o && Ye(e, n, 'src', a.src, a, null);
        return;
      case 'input':
        _e('invalid', e);
        var T = (d = g = c = null),
          $ = null,
          N = null;
        for (o in a)
          if (a.hasOwnProperty(o)) {
            var W = a[o];
            if (W != null)
              switch (o) {
                case 'name':
                  c = W;
                  break;
                case 'type':
                  g = W;
                  break;
                case 'checked':
                  $ = W;
                  break;
                case 'defaultChecked':
                  N = W;
                  break;
                case 'value':
                  d = W;
                  break;
                case 'defaultValue':
                  T = W;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (W != null) throw Error(i(137, n));
                  break;
                default:
                  Ye(e, n, o, W, a, null);
              }
          }
        gh(e, d, T, $, N, g, c, !1), Uo(e);
        return;
      case 'select':
        _e('invalid', e), (o = g = d = null);
        for (c in a)
          if (a.hasOwnProperty(c) && ((T = a[c]), T != null))
            switch (c) {
              case 'value':
                d = T;
                break;
              case 'defaultValue':
                g = T;
                break;
              case 'multiple':
                o = T;
              default:
                Ye(e, n, c, T, a, null);
            }
        (n = d),
          (a = g),
          (e.multiple = !!o),
          n != null ? Va(e, !!o, n, !1) : a != null && Va(e, !!o, a, !0);
        return;
      case 'textarea':
        _e('invalid', e), (d = c = o = null);
        for (g in a)
          if (a.hasOwnProperty(g) && ((T = a[g]), T != null))
            switch (g) {
              case 'value':
                o = T;
                break;
              case 'defaultValue':
                c = T;
                break;
              case 'children':
                d = T;
                break;
              case 'dangerouslySetInnerHTML':
                if (T != null) throw Error(i(91));
                break;
              default:
                Ye(e, n, g, T, a, null);
            }
        vh(e, o, c, d), Uo(e);
        return;
      case 'option':
        for ($ in a)
          if (a.hasOwnProperty($) && ((o = a[$]), o != null))
            switch ($) {
              case 'selected':
                e.selected = o && typeof o != 'function' && typeof o != 'symbol';
                break;
              default:
                Ye(e, n, $, o, a, null);
            }
        return;
      case 'dialog':
        _e('cancel', e), _e('close', e);
        break;
      case 'iframe':
      case 'object':
        _e('load', e);
        break;
      case 'video':
      case 'audio':
        for (o = 0; o < zi.length; o++) _e(zi[o], e);
        break;
      case 'image':
        _e('error', e), _e('load', e);
        break;
      case 'details':
        _e('toggle', e);
        break;
      case 'embed':
      case 'source':
      case 'link':
        _e('error', e), _e('load', e);
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (N in a)
          if (a.hasOwnProperty(N) && ((o = a[N]), o != null))
            switch (N) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(i(137, n));
              default:
                Ye(e, n, N, o, a, null);
            }
        return;
      default:
        if (cc(n)) {
          for (W in a)
            a.hasOwnProperty(W) && ((o = a[W]), o !== void 0 && Qf(e, n, W, o, a, void 0));
          return;
        }
    }
    for (T in a) a.hasOwnProperty(T) && ((o = a[T]), o != null && Ye(e, n, T, o, a, null));
  }
  function ox(e, n, a, o) {
    switch (n) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break;
      case 'input':
        var c = null,
          d = null,
          g = null,
          T = null,
          $ = null,
          N = null,
          W = null;
        for (Q in a) {
          var re = a[Q];
          if (a.hasOwnProperty(Q) && re != null)
            switch (Q) {
              case 'checked':
                break;
              case 'value':
                break;
              case 'defaultValue':
                $ = re;
              default:
                o.hasOwnProperty(Q) || Ye(e, n, Q, null, o, re);
            }
        }
        for (var F in o) {
          var Q = o[F];
          if (((re = a[F]), o.hasOwnProperty(F) && (Q != null || re != null)))
            switch (F) {
              case 'type':
                d = Q;
                break;
              case 'name':
                c = Q;
                break;
              case 'checked':
                N = Q;
                break;
              case 'defaultChecked':
                W = Q;
                break;
              case 'value':
                g = Q;
                break;
              case 'defaultValue':
                T = Q;
                break;
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (Q != null) throw Error(i(137, n));
                break;
              default:
                Q !== re && Ye(e, n, F, Q, o, re);
            }
        }
        sc(e, g, T, $, N, W, d, c);
        return;
      case 'select':
        Q = g = T = F = null;
        for (d in a)
          if ((($ = a[d]), a.hasOwnProperty(d) && $ != null))
            switch (d) {
              case 'value':
                break;
              case 'multiple':
                Q = $;
              default:
                o.hasOwnProperty(d) || Ye(e, n, d, null, o, $);
            }
        for (c in o)
          if (((d = o[c]), ($ = a[c]), o.hasOwnProperty(c) && (d != null || $ != null)))
            switch (c) {
              case 'value':
                F = d;
                break;
              case 'defaultValue':
                T = d;
                break;
              case 'multiple':
                g = d;
              default:
                d !== $ && Ye(e, n, c, d, o, $);
            }
        (n = T),
          (a = g),
          (o = Q),
          F != null
            ? Va(e, !!a, F, !1)
            : !!o != !!a && (n != null ? Va(e, !!a, n, !0) : Va(e, !!a, a ? [] : '', !1));
        return;
      case 'textarea':
        Q = F = null;
        for (T in a)
          if (((c = a[T]), a.hasOwnProperty(T) && c != null && !o.hasOwnProperty(T)))
            switch (T) {
              case 'value':
                break;
              case 'children':
                break;
              default:
                Ye(e, n, T, null, o, c);
            }
        for (g in o)
          if (((c = o[g]), (d = a[g]), o.hasOwnProperty(g) && (c != null || d != null)))
            switch (g) {
              case 'value':
                F = c;
                break;
              case 'defaultValue':
                Q = c;
                break;
              case 'children':
                break;
              case 'dangerouslySetInnerHTML':
                if (c != null) throw Error(i(91));
                break;
              default:
                c !== d && Ye(e, n, g, c, o, d);
            }
        yh(e, F, Q);
        return;
      case 'option':
        for (var me in a)
          if (((F = a[me]), a.hasOwnProperty(me) && F != null && !o.hasOwnProperty(me)))
            switch (me) {
              case 'selected':
                e.selected = !1;
                break;
              default:
                Ye(e, n, me, null, o, F);
            }
        for ($ in o)
          if (((F = o[$]), (Q = a[$]), o.hasOwnProperty($) && F !== Q && (F != null || Q != null)))
            switch ($) {
              case 'selected':
                e.selected = F && typeof F != 'function' && typeof F != 'symbol';
                break;
              default:
                Ye(e, n, $, F, o, Q);
            }
        return;
      case 'img':
      case 'link':
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'embed':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'source':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (var Re in a)
          (F = a[Re]),
            a.hasOwnProperty(Re) && F != null && !o.hasOwnProperty(Re) && Ye(e, n, Re, null, o, F);
        for (N in o)
          if (((F = o[N]), (Q = a[N]), o.hasOwnProperty(N) && F !== Q && (F != null || Q != null)))
            switch (N) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (F != null) throw Error(i(137, n));
                break;
              default:
                Ye(e, n, N, F, o, Q);
            }
        return;
      default:
        if (cc(n)) {
          for (var dt in a)
            (F = a[dt]),
              a.hasOwnProperty(dt) &&
                F !== void 0 &&
                !o.hasOwnProperty(dt) &&
                Qf(e, n, dt, void 0, o, F);
          for (W in o)
            (F = o[W]),
              (Q = a[W]),
              !o.hasOwnProperty(W) ||
                F === Q ||
                (F === void 0 && Q === void 0) ||
                Qf(e, n, W, F, o, Q);
          return;
        }
    }
    for (var k in a)
      (F = a[k]),
        a.hasOwnProperty(k) && F != null && !o.hasOwnProperty(k) && Ye(e, n, k, null, o, F);
    for (re in o)
      (F = o[re]),
        (Q = a[re]),
        !o.hasOwnProperty(re) || F === Q || (F == null && Q == null) || Ye(e, n, re, F, o, Q);
  }
  var Wf = null,
    If = null;
  function Ms(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function fg(e) {
    switch (e) {
      case 'http://www.w3.org/2000/svg':
        return 1;
      case 'http://www.w3.org/1998/Math/MathML':
        return 2;
      default:
        return 0;
    }
  }
  function dg(e, n) {
    if (e === 0)
      switch (n) {
        case 'svg':
          return 1;
        case 'math':
          return 2;
        default:
          return 0;
      }
    return e === 1 && n === 'foreignObject' ? 0 : e;
  }
  function Zf(e, n) {
    return (
      e === 'textarea' ||
      e === 'noscript' ||
      typeof n.children == 'string' ||
      typeof n.children == 'number' ||
      typeof n.children == 'bigint' ||
      (typeof n.dangerouslySetInnerHTML == 'object' &&
        n.dangerouslySetInnerHTML !== null &&
        n.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Jf = null;
  function sx() {
    var e = window.event;
    return e && e.type === 'popstate' ? (e === Jf ? !1 : ((Jf = e), !0)) : ((Jf = null), !1);
  }
  var pg = typeof setTimeout == 'function' ? setTimeout : void 0,
    ux = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    hg = typeof Promise == 'function' ? Promise : void 0,
    cx =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof hg < 'u'
          ? function (e) {
              return hg.resolve(null).then(e).catch(fx);
            }
          : pg;
  function fx(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function ed(e, n) {
    var a = n,
      o = 0;
    do {
      var c = a.nextSibling;
      if ((e.removeChild(a), c && c.nodeType === 8))
        if (((a = c.data), a === '/$')) {
          if (o === 0) {
            e.removeChild(c), Hi(n);
            return;
          }
          o--;
        } else (a !== '$' && a !== '$?' && a !== '$!') || o++;
      a = c;
    } while (a);
    Hi(n);
  }
  function td(e) {
    var n = e.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var a = n;
      switch (((n = n.nextSibling), a.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          td(a), oc(a);
          continue;
        case 'SCRIPT':
        case 'STYLE':
          continue;
        case 'LINK':
          if (a.rel.toLowerCase() === 'stylesheet') continue;
      }
      e.removeChild(a);
    }
  }
  function dx(e, n, a, o) {
    for (; e.nodeType === 1; ) {
      var c = a;
      if (e.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!o && (e.nodeName !== 'INPUT' || e.type !== 'hidden')) break;
      } else if (o) {
        if (!e[Xl])
          switch (n) {
            case 'meta':
              if (!e.hasAttribute('itemprop')) break;
              return e;
            case 'link':
              if (
                ((d = e.getAttribute('rel')),
                d === 'stylesheet' && e.hasAttribute('data-precedence'))
              )
                break;
              if (
                d !== c.rel ||
                e.getAttribute('href') !== (c.href == null ? null : c.href) ||
                e.getAttribute('crossorigin') !== (c.crossOrigin == null ? null : c.crossOrigin) ||
                e.getAttribute('title') !== (c.title == null ? null : c.title)
              )
                break;
              return e;
            case 'style':
              if (e.hasAttribute('data-precedence')) break;
              return e;
            case 'script':
              if (
                ((d = e.getAttribute('src')),
                (d !== (c.src == null ? null : c.src) ||
                  e.getAttribute('type') !== (c.type == null ? null : c.type) ||
                  e.getAttribute('crossorigin') !==
                    (c.crossOrigin == null ? null : c.crossOrigin)) &&
                  d &&
                  e.hasAttribute('async') &&
                  !e.hasAttribute('itemprop'))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (n === 'input' && e.type === 'hidden') {
        var d = c.name == null ? null : '' + c.name;
        if (c.type === 'hidden' && e.getAttribute('name') === d) return e;
      } else return e;
      if (((e = Nn(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function px(e, n, a) {
    if (n === '') return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') && !a) ||
        ((e = Nn(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Nn(e) {
    for (; e != null; e = e.nextSibling) {
      var n = e.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (((n = e.data), n === '$' || n === '$!' || n === '$?' || n === 'F!' || n === 'F')) break;
        if (n === '/$') return null;
      }
    }
    return e;
  }
  function mg(e) {
    e = e.previousSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === '$' || a === '$!' || a === '$?') {
          if (n === 0) return e;
          n--;
        } else a === '/$' && n++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function gg(e, n, a) {
    switch (((n = Ms(a)), e)) {
      case 'html':
        if (((e = n.documentElement), !e)) throw Error(i(452));
        return e;
      case 'head':
        if (((e = n.head), !e)) throw Error(i(453));
        return e;
      case 'body':
        if (((e = n.body), !e)) throw Error(i(454));
        return e;
      default:
        throw Error(i(451));
    }
  }
  var Rn = new Map(),
    yg = new Set();
  function $s(e) {
    return typeof e.getRootNode == 'function' ? e.getRootNode() : e.ownerDocument;
  }
  var Sr = le.d;
  le.d = { f: hx, r: mx, D: gx, C: yx, L: vx, m: bx, X: xx, S: Sx, M: Ex };
  function hx() {
    var e = Sr.f(),
      n = Es();
    return e || n;
  }
  function mx(e) {
    var n = qa(e);
    n !== null && n.tag === 5 && n.type === 'form' ? Gm(n) : Sr.r(e);
  }
  var bl = typeof document > 'u' ? null : document;
  function vg(e, n, a) {
    var o = bl;
    if (o && typeof n == 'string' && n) {
      var c = hn(n);
      (c = 'link[rel="' + e + '"][href="' + c + '"]'),
        typeof a == 'string' && (c += '[crossorigin="' + a + '"]'),
        yg.has(c) ||
          (yg.add(c),
          (e = { rel: e, crossOrigin: a, href: n }),
          o.querySelector(c) === null &&
            ((n = o.createElement('link')), Ut(n, 'link', e), $t(n), o.head.appendChild(n)));
    }
  }
  function gx(e) {
    Sr.D(e), vg('dns-prefetch', e, null);
  }
  function yx(e, n) {
    Sr.C(e, n), vg('preconnect', e, n);
  }
  function vx(e, n, a) {
    Sr.L(e, n, a);
    var o = bl;
    if (o && e && n) {
      var c = 'link[rel="preload"][as="' + hn(n) + '"]';
      n === 'image' && a && a.imageSrcSet
        ? ((c += '[imagesrcset="' + hn(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == 'string' && (c += '[imagesizes="' + hn(a.imageSizes) + '"]'))
        : (c += '[href="' + hn(e) + '"]');
      var d = c;
      switch (n) {
        case 'style':
          d = Sl(e);
          break;
        case 'script':
          d = xl(e);
      }
      Rn.has(d) ||
        ((e = x(
          { rel: 'preload', href: n === 'image' && a && a.imageSrcSet ? void 0 : e, as: n },
          a,
        )),
        Rn.set(d, e),
        o.querySelector(c) !== null ||
          (n === 'style' && o.querySelector(_i(d))) ||
          (n === 'script' && o.querySelector(Bi(d))) ||
          ((n = o.createElement('link')), Ut(n, 'link', e), $t(n), o.head.appendChild(n)));
    }
  }
  function bx(e, n) {
    Sr.m(e, n);
    var a = bl;
    if (a && e) {
      var o = n && typeof n.as == 'string' ? n.as : 'script',
        c = 'link[rel="modulepreload"][as="' + hn(o) + '"][href="' + hn(e) + '"]',
        d = c;
      switch (o) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          d = xl(e);
      }
      if (
        !Rn.has(d) &&
        ((e = x({ rel: 'modulepreload', href: e }, n)), Rn.set(d, e), a.querySelector(c) === null)
      ) {
        switch (o) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (a.querySelector(Bi(d))) return;
        }
        (o = a.createElement('link')), Ut(o, 'link', e), $t(o), a.head.appendChild(o);
      }
    }
  }
  function Sx(e, n, a) {
    Sr.S(e, n, a);
    var o = bl;
    if (o && e) {
      var c = Fa(o).hoistableStyles,
        d = Sl(e);
      n = n || 'default';
      var g = c.get(d);
      if (!g) {
        var T = { loading: 0, preload: null };
        if ((g = o.querySelector(_i(d)))) T.loading = 5;
        else {
          (e = x({ rel: 'stylesheet', href: e, 'data-precedence': n }, a)),
            (a = Rn.get(d)) && nd(e, a);
          var $ = (g = o.createElement('link'));
          $t($),
            Ut($, 'link', e),
            ($._p = new Promise(function (N, W) {
              ($.onload = N), ($.onerror = W);
            })),
            $.addEventListener('load', function () {
              T.loading |= 1;
            }),
            $.addEventListener('error', function () {
              T.loading |= 2;
            }),
            (T.loading |= 4),
            zs(g, n, o);
        }
        (g = { type: 'stylesheet', instance: g, count: 1, state: T }), c.set(d, g);
      }
    }
  }
  function xx(e, n) {
    Sr.X(e, n);
    var a = bl;
    if (a && e) {
      var o = Fa(a).hoistableScripts,
        c = xl(e),
        d = o.get(c);
      d ||
        ((d = a.querySelector(Bi(c))),
        d ||
          ((e = x({ src: e, async: !0 }, n)),
          (n = Rn.get(c)) && rd(e, n),
          (d = a.createElement('script')),
          $t(d),
          Ut(d, 'link', e),
          a.head.appendChild(d)),
        (d = { type: 'script', instance: d, count: 1, state: null }),
        o.set(c, d));
    }
  }
  function Ex(e, n) {
    Sr.M(e, n);
    var a = bl;
    if (a && e) {
      var o = Fa(a).hoistableScripts,
        c = xl(e),
        d = o.get(c);
      d ||
        ((d = a.querySelector(Bi(c))),
        d ||
          ((e = x({ src: e, async: !0, type: 'module' }, n)),
          (n = Rn.get(c)) && rd(e, n),
          (d = a.createElement('script')),
          $t(d),
          Ut(d, 'link', e),
          a.head.appendChild(d)),
        (d = { type: 'script', instance: d, count: 1, state: null }),
        o.set(c, d));
    }
  }
  function bg(e, n, a, o) {
    var c = (c = Fe.current) ? $s(c) : null;
    if (!c) throw Error(i(446));
    switch (e) {
      case 'meta':
      case 'title':
        return null;
      case 'style':
        return typeof a.precedence == 'string' && typeof a.href == 'string'
          ? ((n = Sl(a.href)),
            (a = Fa(c).hoistableStyles),
            (o = a.get(n)),
            o || ((o = { type: 'style', instance: null, count: 0, state: null }), a.set(n, o)),
            o)
          : { type: 'void', instance: null, count: 0, state: null };
      case 'link':
        if (
          a.rel === 'stylesheet' &&
          typeof a.href == 'string' &&
          typeof a.precedence == 'string'
        ) {
          e = Sl(a.href);
          var d = Fa(c).hoistableStyles,
            g = d.get(e);
          if (
            (g ||
              ((c = c.ownerDocument || c),
              (g = {
                type: 'stylesheet',
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              d.set(e, g),
              (d = c.querySelector(_i(e))) && !d._p && ((g.instance = d), (g.state.loading = 5)),
              Rn.has(e) ||
                ((a = {
                  rel: 'preload',
                  as: 'style',
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy,
                }),
                Rn.set(e, a),
                d || Cx(c, e, a, g.state))),
            n && o === null)
          )
            throw Error(i(528, ''));
          return g;
        }
        if (n && o !== null) throw Error(i(529, ''));
        return null;
      case 'script':
        return (
          (n = a.async),
          (a = a.src),
          typeof a == 'string' && n && typeof n != 'function' && typeof n != 'symbol'
            ? ((n = xl(a)),
              (a = Fa(c).hoistableScripts),
              (o = a.get(n)),
              o || ((o = { type: 'script', instance: null, count: 0, state: null }), a.set(n, o)),
              o)
            : { type: 'void', instance: null, count: 0, state: null }
        );
      default:
        throw Error(i(444, e));
    }
  }
  function Sl(e) {
    return 'href="' + hn(e) + '"';
  }
  function _i(e) {
    return 'link[rel="stylesheet"][' + e + ']';
  }
  function Sg(e) {
    return x({}, e, { 'data-precedence': e.precedence, precedence: null });
  }
  function Cx(e, n, a, o) {
    e.querySelector('link[rel="preload"][as="style"][' + n + ']')
      ? (o.loading = 1)
      : ((n = e.createElement('link')),
        (o.preload = n),
        n.addEventListener('load', function () {
          return (o.loading |= 1);
        }),
        n.addEventListener('error', function () {
          return (o.loading |= 2);
        }),
        Ut(n, 'link', a),
        $t(n),
        e.head.appendChild(n));
  }
  function xl(e) {
    return '[src="' + hn(e) + '"]';
  }
  function Bi(e) {
    return 'script[async]' + e;
  }
  function xg(e, n, a) {
    if ((n.count++, n.instance === null))
      switch (n.type) {
        case 'style':
          var o = e.querySelector('style[data-href~="' + hn(a.href) + '"]');
          if (o) return (n.instance = o), $t(o), o;
          var c = x({}, a, {
            'data-href': a.href,
            'data-precedence': a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (o = (e.ownerDocument || e).createElement('style')),
            $t(o),
            Ut(o, 'style', c),
            zs(o, a.precedence, e),
            (n.instance = o)
          );
        case 'stylesheet':
          c = Sl(a.href);
          var d = e.querySelector(_i(c));
          if (d) return (n.state.loading |= 4), (n.instance = d), $t(d), d;
          (o = Sg(a)),
            (c = Rn.get(c)) && nd(o, c),
            (d = (e.ownerDocument || e).createElement('link')),
            $t(d);
          var g = d;
          return (
            (g._p = new Promise(function (T, $) {
              (g.onload = T), (g.onerror = $);
            })),
            Ut(d, 'link', o),
            (n.state.loading |= 4),
            zs(d, a.precedence, e),
            (n.instance = d)
          );
        case 'script':
          return (
            (d = xl(a.src)),
            (c = e.querySelector(Bi(d)))
              ? ((n.instance = c), $t(c), c)
              : ((o = a),
                (c = Rn.get(d)) && ((o = x({}, a)), rd(o, c)),
                (e = e.ownerDocument || e),
                (c = e.createElement('script')),
                $t(c),
                Ut(c, 'link', o),
                e.head.appendChild(c),
                (n.instance = c))
          );
        case 'void':
          return null;
        default:
          throw Error(i(443, n.type));
      }
    else
      n.type === 'stylesheet' &&
        !(n.state.loading & 4) &&
        ((o = n.instance), (n.state.loading |= 4), zs(o, a.precedence, e));
    return n.instance;
  }
  function zs(e, n, a) {
    for (
      var o = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
        c = o.length ? o[o.length - 1] : null,
        d = c,
        g = 0;
      g < o.length;
      g++
    ) {
      var T = o[g];
      if (T.dataset.precedence === n) d = T;
      else if (d !== c) break;
    }
    d
      ? d.parentNode.insertBefore(e, d.nextSibling)
      : ((n = a.nodeType === 9 ? a.head : a), n.insertBefore(e, n.firstChild));
  }
  function nd(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy),
      e.title == null && (e.title = n.title);
  }
  function rd(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy),
      e.integrity == null && (e.integrity = n.integrity);
  }
  var Ds = null;
  function Eg(e, n, a) {
    if (Ds === null) {
      var o = new Map(),
        c = (Ds = new Map());
      c.set(a, o);
    } else (c = Ds), (o = c.get(a)), o || ((o = new Map()), c.set(a, o));
    if (o.has(e)) return o;
    for (o.set(e, null), a = a.getElementsByTagName(e), c = 0; c < a.length; c++) {
      var d = a[c];
      if (
        !(d[Xl] || d[Pt] || (e === 'link' && d.getAttribute('rel') === 'stylesheet')) &&
        d.namespaceURI !== 'http://www.w3.org/2000/svg'
      ) {
        var g = d.getAttribute(n) || '';
        g = e + g;
        var T = o.get(g);
        T ? T.push(d) : o.set(g, [d]);
      }
    }
    return o;
  }
  function Cg(e, n, a) {
    (e = e.ownerDocument || e),
      e.head.insertBefore(a, n === 'title' ? e.querySelector('head > title') : null);
  }
  function Rx(e, n, a) {
    if (a === 1 || n.itemProp != null) return !1;
    switch (e) {
      case 'meta':
      case 'title':
        return !0;
      case 'style':
        if (typeof n.precedence != 'string' || typeof n.href != 'string' || n.href === '') break;
        return !0;
      case 'link':
        if (
          typeof n.rel != 'string' ||
          typeof n.href != 'string' ||
          n.href === '' ||
          n.onLoad ||
          n.onError
        )
          break;
        switch (n.rel) {
          case 'stylesheet':
            return (e = n.disabled), typeof n.precedence == 'string' && e == null;
          default:
            return !0;
        }
      case 'script':
        if (
          n.async &&
          typeof n.async != 'function' &&
          typeof n.async != 'symbol' &&
          !n.onLoad &&
          !n.onError &&
          n.src &&
          typeof n.src == 'string'
        )
          return !0;
    }
    return !1;
  }
  function Rg(e) {
    return !(e.type === 'stylesheet' && !(e.state.loading & 3));
  }
  var Ni = null;
  function Tx() {}
  function wx(e, n, a) {
    if (Ni === null) throw Error(i(475));
    var o = Ni;
    if (
      n.type === 'stylesheet' &&
      (typeof a.media != 'string' || matchMedia(a.media).matches !== !1) &&
      !(n.state.loading & 4)
    ) {
      if (n.instance === null) {
        var c = Sl(a.href),
          d = e.querySelector(_i(c));
        if (d) {
          (e = d._p),
            e !== null &&
              typeof e == 'object' &&
              typeof e.then == 'function' &&
              (o.count++, (o = _s.bind(o)), e.then(o, o)),
            (n.state.loading |= 4),
            (n.instance = d),
            $t(d);
          return;
        }
        (d = e.ownerDocument || e),
          (a = Sg(a)),
          (c = Rn.get(c)) && nd(a, c),
          (d = d.createElement('link')),
          $t(d);
        var g = d;
        (g._p = new Promise(function (T, $) {
          (g.onload = T), (g.onerror = $);
        })),
          Ut(d, 'link', a),
          (n.instance = d);
      }
      o.stylesheets === null && (o.stylesheets = new Map()),
        o.stylesheets.set(n, e),
        (e = n.state.preload) &&
          !(n.state.loading & 3) &&
          (o.count++,
          (n = _s.bind(o)),
          e.addEventListener('load', n),
          e.addEventListener('error', n));
    }
  }
  function Ax() {
    if (Ni === null) throw Error(i(475));
    var e = Ni;
    return (
      e.stylesheets && e.count === 0 && ad(e, e.stylesheets),
      0 < e.count
        ? function (n) {
            var a = setTimeout(function () {
              if ((e.stylesheets && ad(e, e.stylesheets), e.unsuspend)) {
                var o = e.unsuspend;
                (e.unsuspend = null), o();
              }
            }, 6e4);
            return (
              (e.unsuspend = n),
              function () {
                (e.unsuspend = null), clearTimeout(a);
              }
            );
          }
        : null
    );
  }
  function _s() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) ad(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        (this.unsuspend = null), e();
      }
    }
  }
  var Bs = null;
  function ad(e, n) {
    (e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++, (Bs = new Map()), n.forEach(Ox, e), (Bs = null), _s.call(e));
  }
  function Ox(e, n) {
    if (!(n.state.loading & 4)) {
      var a = Bs.get(e);
      if (a) var o = a.get(null);
      else {
        (a = new Map()), Bs.set(e, a);
        for (
          var c = e.querySelectorAll('link[data-precedence],style[data-precedence]'), d = 0;
          d < c.length;
          d++
        ) {
          var g = c[d];
          (g.nodeName === 'LINK' || g.getAttribute('media') !== 'not all') &&
            (a.set(g.dataset.precedence, g), (o = g));
        }
        o && a.set(null, o);
      }
      (c = n.instance),
        (g = c.getAttribute('data-precedence')),
        (d = a.get(g) || o),
        d === o && a.set(null, c),
        a.set(g, c),
        this.count++,
        (o = _s.bind(this)),
        c.addEventListener('load', o),
        c.addEventListener('error', o),
        d
          ? d.parentNode.insertBefore(c, d.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e), e.insertBefore(c, e.firstChild)),
        (n.state.loading |= 4);
    }
  }
  var ki = {
    $$typeof: w,
    Provider: null,
    Consumer: null,
    _currentValue: pe,
    _currentValue2: pe,
    _threadCount: 0,
  };
  function Mx(e, n, a, o, c, d, g, T) {
    (this.tag = 1),
      (this.containerInfo = e),
      (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = lc(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.finishedLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = lc(0)),
      (this.hiddenUpdates = lc(null)),
      (this.identifierPrefix = o),
      (this.onUncaughtError = c),
      (this.onCaughtError = d),
      (this.onRecoverableError = g),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = T),
      (this.incompleteTransitions = new Map());
  }
  function Tg(e, n, a, o, c, d, g, T, $, N, W, re) {
    return (
      (e = new Mx(e, n, a, g, T, $, N, re)),
      (n = 1),
      d === !0 && (n |= 24),
      (d = En(3, null, null, n)),
      (e.current = d),
      (d.stateNode = e),
      (n = Nc()),
      n.refCount++,
      (e.pooledCache = n),
      n.refCount++,
      (d.memoizedState = { element: o, isDehydrated: a, cache: n }),
      gf(d),
      e
    );
  }
  function wg(e) {
    return e ? ((e = Ja), e) : Ja;
  }
  function Ag(e, n, a, o, c, d) {
    (c = wg(c)),
      o.context === null ? (o.context = c) : (o.pendingContext = c),
      (o = Vr(n)),
      (o.payload = { element: a }),
      (d = d === void 0 ? null : d),
      d !== null && (o.callback = d),
      (a = Yr(e, o, n)),
      a !== null && (Wt(a, e, n), bi(a, e, n));
  }
  function Og(e, n) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < n ? a : n;
    }
  }
  function ld(e, n) {
    Og(e, n), (e = e.alternate) && Og(e, n);
  }
  function Mg(e) {
    if (e.tag === 13) {
      var n = jr(e, 67108864);
      n !== null && Wt(n, e, 67108864), ld(e, 67108864);
    }
  }
  var Ns = !0;
  function $x(e, n, a, o) {
    var c = G.T;
    G.T = null;
    var d = le.p;
    try {
      (le.p = 2), id(e, n, a, o);
    } finally {
      (le.p = d), (G.T = c);
    }
  }
  function zx(e, n, a, o) {
    var c = G.T;
    G.T = null;
    var d = le.p;
    try {
      (le.p = 8), id(e, n, a, o);
    } finally {
      (le.p = d), (G.T = c);
    }
  }
  function id(e, n, a, o) {
    if (Ns) {
      var c = od(o);
      if (c === null) Xf(e, n, o, ks, a), zg(e, o);
      else if (_x(c, e, n, a, o)) o.stopPropagation();
      else if ((zg(e, o), n & 4 && -1 < Dx.indexOf(e))) {
        for (; c !== null; ) {
          var d = qa(c);
          if (d !== null)
            switch (d.tag) {
              case 3:
                if (((d = d.stateNode), d.current.memoizedState.isDehydrated)) {
                  var g = sa(d.pendingLanes);
                  if (g !== 0) {
                    var T = d;
                    for (T.pendingLanes |= 2, T.entangledLanes |= 2; g; ) {
                      var $ = 1 << (31 - Le(g));
                      (T.entanglements[1] |= $), (g &= ~$);
                    }
                    Vn(d), !(st & 6) && ((bs = Je() + 500), $i(0));
                  }
                }
                break;
              case 13:
                (T = jr(d, 2)), T !== null && Wt(T, d, 2), Es(), ld(d, 2);
            }
          if (((d = od(o)), d === null && Xf(e, n, o, ks, a), d === c)) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else Xf(e, n, o, null, a);
    }
  }
  function od(e) {
    return (e = dc(e)), sd(e);
  }
  var ks = null;
  function sd(e) {
    if (((ks = null), (e = ua(e)), e !== null)) {
      var n = ie(e);
      if (n === null) e = null;
      else {
        var a = n.tag;
        if (a === 13) {
          if (((e = oe(n)), e !== null)) return e;
          e = null;
        } else if (a === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          e = null;
        } else n !== e && (e = null);
      }
    }
    return (ks = e), null;
  }
  function $g(e) {
    switch (e) {
      case 'beforetoggle':
      case 'cancel':
      case 'click':
      case 'close':
      case 'contextmenu':
      case 'copy':
      case 'cut':
      case 'auxclick':
      case 'dblclick':
      case 'dragend':
      case 'dragstart':
      case 'drop':
      case 'focusin':
      case 'focusout':
      case 'input':
      case 'invalid':
      case 'keydown':
      case 'keypress':
      case 'keyup':
      case 'mousedown':
      case 'mouseup':
      case 'paste':
      case 'pause':
      case 'play':
      case 'pointercancel':
      case 'pointerdown':
      case 'pointerup':
      case 'ratechange':
      case 'reset':
      case 'resize':
      case 'seeked':
      case 'submit':
      case 'toggle':
      case 'touchcancel':
      case 'touchend':
      case 'touchstart':
      case 'volumechange':
      case 'change':
      case 'selectionchange':
      case 'textInput':
      case 'compositionstart':
      case 'compositionend':
      case 'compositionupdate':
      case 'beforeblur':
      case 'afterblur':
      case 'beforeinput':
      case 'blur':
      case 'fullscreenchange':
      case 'focus':
      case 'hashchange':
      case 'popstate':
      case 'select':
      case 'selectstart':
        return 2;
      case 'drag':
      case 'dragenter':
      case 'dragexit':
      case 'dragleave':
      case 'dragover':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'pointermove':
      case 'pointerout':
      case 'pointerover':
      case 'scroll':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 8;
      case 'message':
        switch ($r()) {
          case zr:
            return 2;
          case Dr:
            return 8;
          case $n:
          case _r:
            return 32;
          case Hn:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var ud = !1,
    Jr = null,
    ea = null,
    ta = null,
    Ui = new Map(),
    ji = new Map(),
    na = [],
    Dx =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' ',
      );
  function zg(e, n) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        Jr = null;
        break;
      case 'dragenter':
      case 'dragleave':
        ea = null;
        break;
      case 'mouseover':
      case 'mouseout':
        ta = null;
        break;
      case 'pointerover':
      case 'pointerout':
        Ui.delete(n.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        ji.delete(n.pointerId);
    }
  }
  function Li(e, n, a, o, c, d) {
    return e === null || e.nativeEvent !== d
      ? ((e = {
          blockedOn: n,
          domEventName: a,
          eventSystemFlags: o,
          nativeEvent: d,
          targetContainers: [c],
        }),
        n !== null && ((n = qa(n)), n !== null && Mg(n)),
        e)
      : ((e.eventSystemFlags |= o),
        (n = e.targetContainers),
        c !== null && n.indexOf(c) === -1 && n.push(c),
        e);
  }
  function _x(e, n, a, o, c) {
    switch (n) {
      case 'focusin':
        return (Jr = Li(Jr, e, n, a, o, c)), !0;
      case 'dragenter':
        return (ea = Li(ea, e, n, a, o, c)), !0;
      case 'mouseover':
        return (ta = Li(ta, e, n, a, o, c)), !0;
      case 'pointerover':
        var d = c.pointerId;
        return Ui.set(d, Li(Ui.get(d) || null, e, n, a, o, c)), !0;
      case 'gotpointercapture':
        return (d = c.pointerId), ji.set(d, Li(ji.get(d) || null, e, n, a, o, c)), !0;
    }
    return !1;
  }
  function Dg(e) {
    var n = ua(e.target);
    if (n !== null) {
      var a = ie(n);
      if (a !== null) {
        if (((n = a.tag), n === 13)) {
          if (((n = oe(a)), n !== null)) {
            (e.blockedOn = n),
              A1(e.priority, function () {
                if (a.tag === 13) {
                  var o = sn(),
                    c = jr(a, o);
                  c !== null && Wt(c, a, o), ld(a, o);
                }
              });
            return;
          }
        } else if (n === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Us(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var a = od(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var o = new a.constructor(a.type, a);
        (fc = o), a.target.dispatchEvent(o), (fc = null);
      } else return (n = qa(a)), n !== null && Mg(n), (e.blockedOn = a), !1;
      n.shift();
    }
    return !0;
  }
  function _g(e, n, a) {
    Us(e) && a.delete(n);
  }
  function Bx() {
    (ud = !1),
      Jr !== null && Us(Jr) && (Jr = null),
      ea !== null && Us(ea) && (ea = null),
      ta !== null && Us(ta) && (ta = null),
      Ui.forEach(_g),
      ji.forEach(_g);
  }
  function js(e, n) {
    e.blockedOn === n &&
      ((e.blockedOn = null),
      ud || ((ud = !0), t.unstable_scheduleCallback(t.unstable_NormalPriority, Bx)));
  }
  var Ls = null;
  function Bg(e) {
    Ls !== e &&
      ((Ls = e),
      t.unstable_scheduleCallback(t.unstable_NormalPriority, function () {
        Ls === e && (Ls = null);
        for (var n = 0; n < e.length; n += 3) {
          var a = e[n],
            o = e[n + 1],
            c = e[n + 2];
          if (typeof o != 'function') {
            if (sd(o || a) === null) continue;
            break;
          }
          var d = qa(a);
          d !== null &&
            (e.splice(n, 3),
            (n -= 3),
            Ic(d, { pending: !0, data: c, method: a.method, action: o }, o, c));
        }
      }));
  }
  function Hi(e) {
    function n($) {
      return js($, e);
    }
    Jr !== null && js(Jr, e),
      ea !== null && js(ea, e),
      ta !== null && js(ta, e),
      Ui.forEach(n),
      ji.forEach(n);
    for (var a = 0; a < na.length; a++) {
      var o = na[a];
      o.blockedOn === e && (o.blockedOn = null);
    }
    for (; 0 < na.length && ((a = na[0]), a.blockedOn === null); )
      Dg(a), a.blockedOn === null && na.shift();
    if (((a = (e.ownerDocument || e).$$reactFormReplay), a != null))
      for (o = 0; o < a.length; o += 3) {
        var c = a[o],
          d = a[o + 1],
          g = c[Zt] || null;
        if (typeof d == 'function') g || Bg(a);
        else if (g) {
          var T = null;
          if (d && d.hasAttribute('formAction')) {
            if (((c = d), (g = d[Zt] || null))) T = g.formAction;
            else if (sd(c) !== null) continue;
          } else T = g.action;
          typeof T == 'function' ? (a[o + 1] = T) : (a.splice(o, 3), (o -= 3)), Bg(a);
        }
      }
  }
  function cd(e) {
    this._internalRoot = e;
  }
  (Hs.prototype.render = cd.prototype.render =
    function (e) {
      var n = this._internalRoot;
      if (n === null) throw Error(i(409));
      var a = n.current,
        o = sn();
      Ag(a, o, e, n, null, null);
    }),
    (Hs.prototype.unmount = cd.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var n = e.containerInfo;
          e.tag === 0 && gl(), Ag(e.current, 2, null, e, null, null), Es(), (n[Pa] = null);
        }
      });
  function Hs(e) {
    this._internalRoot = e;
  }
  Hs.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var n = sh();
      e = { blockedOn: null, target: e, priority: n };
      for (var a = 0; a < na.length && n !== 0 && n < na[a].priority; a++);
      na.splice(a, 0, e), a === 0 && Dg(e);
    }
  };
  var Ng = r.version;
  if (Ng !== '19.0.0') throw Error(i(527, Ng, '19.0.0'));
  le.findDOMNode = function (e) {
    var n = e._reactInternals;
    if (n === void 0)
      throw typeof e.render == 'function'
        ? Error(i(188))
        : ((e = Object.keys(e).join(',')), Error(i(268, e)));
    return (e = K(n)), (e = e !== null ? se(e) : null), (e = e === null ? null : e.stateNode), e;
  };
  var Nx = {
    bundleType: 0,
    version: '19.0.0',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: G,
    findFiberByHostInstance: ua,
    reconcilerVersion: '19.0.0',
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Ps = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ps.isDisabled && Ps.supportsFiber)
      try {
        (zn = Ps.inject(Nx)), (Ht = Ps);
      } catch {}
  }
  return (
    (Fi.createRoot = function (e, n) {
      if (!s(e)) throw Error(i(299));
      var a = !1,
        o = '',
        c = Zm,
        d = Jm,
        g = e0,
        T = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (a = !0),
          n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (c = n.onUncaughtError),
          n.onCaughtError !== void 0 && (d = n.onCaughtError),
          n.onRecoverableError !== void 0 && (g = n.onRecoverableError),
          n.unstable_transitionCallbacks !== void 0 && (T = n.unstable_transitionCallbacks)),
        (n = Tg(e, 1, !1, null, null, a, o, c, d, g, T, null)),
        (e[Pa] = n.current),
        Kf(e.nodeType === 8 ? e.parentNode : e),
        new cd(n)
      );
    }),
    (Fi.hydrateRoot = function (e, n, a) {
      if (!s(e)) throw Error(i(299));
      var o = !1,
        c = '',
        d = Zm,
        g = Jm,
        T = e0,
        $ = null,
        N = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (o = !0),
          a.identifierPrefix !== void 0 && (c = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (d = a.onUncaughtError),
          a.onCaughtError !== void 0 && (g = a.onCaughtError),
          a.onRecoverableError !== void 0 && (T = a.onRecoverableError),
          a.unstable_transitionCallbacks !== void 0 && ($ = a.unstable_transitionCallbacks),
          a.formState !== void 0 && (N = a.formState)),
        (n = Tg(e, 1, !0, n, a ?? null, o, c, d, g, T, $, N)),
        (n.context = wg(null)),
        (a = n.current),
        (o = sn()),
        (c = Vr(o)),
        (c.callback = null),
        Yr(a, c, o),
        (n.current.lanes = o),
        Kl(n, o),
        Vn(n),
        (e[Pa] = n.current),
        Kf(e),
        new Hs(n)
      );
    }),
    (Fi.version = '19.0.0'),
    Fi
  );
}
var Vg;
function Kx() {
  if (Vg) return pd.exports;
  Vg = 1;
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (r) {
        console.error(r);
      }
  }
  return t(), (pd.exports = Yx()), pd.exports;
}
var Xx = Kx();
const io = { black: '#000', white: '#fff' },
  El = {
    50: '#ffebee',
    100: '#ffcdd2',
    200: '#ef9a9a',
    300: '#e57373',
    400: '#ef5350',
    500: '#f44336',
    600: '#e53935',
    700: '#d32f2f',
    800: '#c62828',
    900: '#b71c1c',
    A100: '#ff8a80',
    A200: '#ff5252',
    A400: '#ff1744',
    A700: '#d50000',
  },
  Cl = {
    50: '#f3e5f5',
    100: '#e1bee7',
    200: '#ce93d8',
    300: '#ba68c8',
    400: '#ab47bc',
    500: '#9c27b0',
    600: '#8e24aa',
    700: '#7b1fa2',
    800: '#6a1b9a',
    900: '#4a148c',
    A100: '#ea80fc',
    A200: '#e040fb',
    A400: '#d500f9',
    A700: '#aa00ff',
  },
  Rl = {
    50: '#e3f2fd',
    100: '#bbdefb',
    200: '#90caf9',
    300: '#64b5f6',
    400: '#42a5f5',
    500: '#2196f3',
    600: '#1e88e5',
    700: '#1976d2',
    800: '#1565c0',
    900: '#0d47a1',
    A100: '#82b1ff',
    A200: '#448aff',
    A400: '#2979ff',
    A700: '#2962ff',
  },
  Tl = {
    50: '#e1f5fe',
    100: '#b3e5fc',
    200: '#81d4fa',
    300: '#4fc3f7',
    400: '#29b6f6',
    500: '#03a9f4',
    600: '#039be5',
    700: '#0288d1',
    800: '#0277bd',
    900: '#01579b',
    A100: '#80d8ff',
    A200: '#40c4ff',
    A400: '#00b0ff',
    A700: '#0091ea',
  },
  wl = {
    50: '#e8f5e9',
    100: '#c8e6c9',
    200: '#a5d6a7',
    300: '#81c784',
    400: '#66bb6a',
    500: '#4caf50',
    600: '#43a047',
    700: '#388e3c',
    800: '#2e7d32',
    900: '#1b5e20',
    A100: '#b9f6ca',
    A200: '#69f0ae',
    A400: '#00e676',
    A700: '#00c853',
  },
  Gi = {
    50: '#fff3e0',
    100: '#ffe0b2',
    200: '#ffcc80',
    300: '#ffb74d',
    400: '#ffa726',
    500: '#ff9800',
    600: '#fb8c00',
    700: '#f57c00',
    800: '#ef6c00',
    900: '#e65100',
    A100: '#ffd180',
    A200: '#ffab40',
    A400: '#ff9100',
    A700: '#ff6d00',
  },
  Qx = {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    A100: '#f5f5f5',
    A200: '#eeeeee',
    A400: '#bdbdbd',
    A700: '#616161',
  };
function Tr(t, ...r) {
  const l = new URL(`https://mui.com/production-error/?code=${t}`);
  return (
    r.forEach((i) => l.searchParams.append('args[]', i)),
    `Minified MUI error #${t}; visit ${l} for the full message.`
  );
}
const Eu = '$$material';
function fe() {
  return (
    (fe = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var r = 1; r < arguments.length; r++) {
            var l = arguments[r];
            for (var i in l) ({}).hasOwnProperty.call(l, i) && (t[i] = l[i]);
          }
          return t;
        }),
    fe.apply(null, arguments)
  );
}
var Wx = !1;
function Ix(t) {
  if (t.sheet) return t.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === t) return document.styleSheets[r];
}
function Zx(t) {
  var r = document.createElement('style');
  return (
    r.setAttribute('data-emotion', t.key),
    t.nonce !== void 0 && r.setAttribute('nonce', t.nonce),
    r.appendChild(document.createTextNode('')),
    r.setAttribute('data-s', ''),
    r
  );
}
var Jx = (function () {
    function t(l) {
      var i = this;
      (this._insertTag = function (s) {
        var u;
        i.tags.length === 0
          ? i.insertionPoint
            ? (u = i.insertionPoint.nextSibling)
            : i.prepend
              ? (u = i.container.firstChild)
              : (u = i.before)
          : (u = i.tags[i.tags.length - 1].nextSibling),
          i.container.insertBefore(s, u),
          i.tags.push(s);
      }),
        (this.isSpeedy = l.speedy === void 0 ? !Wx : l.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = l.nonce),
        (this.key = l.key),
        (this.container = l.container),
        (this.prepend = l.prepend),
        (this.insertionPoint = l.insertionPoint),
        (this.before = null);
    }
    var r = t.prototype;
    return (
      (r.hydrate = function (i) {
        i.forEach(this._insertTag);
      }),
      (r.insert = function (i) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Zx(this));
        var s = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var u = Ix(s);
          try {
            u.insertRule(i, u.cssRules.length);
          } catch {}
        } else s.appendChild(document.createTextNode(i));
        this.ctr++;
      }),
      (r.flush = function () {
        this.tags.forEach(function (i) {
          var s;
          return (s = i.parentNode) == null ? void 0 : s.removeChild(i);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      t
    );
  })(),
  Vt = '-ms-',
  su = '-moz-',
  He = '-webkit-',
  Ov = 'comm',
  dp = 'rule',
  pp = 'decl',
  eE = '@import',
  Mv = '@keyframes',
  tE = '@layer',
  nE = Math.abs,
  Cu = String.fromCharCode,
  rE = Object.assign;
function aE(t, r) {
  return jt(t, 0) ^ 45
    ? (((((((r << 2) ^ jt(t, 0)) << 2) ^ jt(t, 1)) << 2) ^ jt(t, 2)) << 2) ^ jt(t, 3)
    : 0;
}
function $v(t) {
  return t.trim();
}
function lE(t, r) {
  return (t = r.exec(t)) ? t[0] : t;
}
function Pe(t, r, l) {
  return t.replace(r, l);
}
function jd(t, r) {
  return t.indexOf(r);
}
function jt(t, r) {
  return t.charCodeAt(r) | 0;
}
function oo(t, r, l) {
  return t.slice(r, l);
}
function Qn(t) {
  return t.length;
}
function hp(t) {
  return t.length;
}
function qs(t, r) {
  return r.push(t), t;
}
function iE(t, r) {
  return t.map(r).join('');
}
var Ru = 1,
  Nl = 1,
  zv = 0,
  nn = 0,
  Tt = 0,
  Ul = '';
function Tu(t, r, l, i, s, u, f) {
  return {
    value: t,
    root: r,
    parent: l,
    type: i,
    props: s,
    children: u,
    line: Ru,
    column: Nl,
    length: f,
    return: '',
  };
}
function Vi(t, r) {
  return rE(Tu('', null, null, '', null, null, 0), t, { length: -t.length }, r);
}
function oE() {
  return Tt;
}
function sE() {
  return (Tt = nn > 0 ? jt(Ul, --nn) : 0), Nl--, Tt === 10 && ((Nl = 1), Ru--), Tt;
}
function fn() {
  return (Tt = nn < zv ? jt(Ul, nn++) : 0), Nl++, Tt === 10 && ((Nl = 1), Ru++), Tt;
}
function Jn() {
  return jt(Ul, nn);
}
function Is() {
  return nn;
}
function mo(t, r) {
  return oo(Ul, t, r);
}
function so(t) {
  switch (t) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Dv(t) {
  return (Ru = Nl = 1), (zv = Qn((Ul = t))), (nn = 0), [];
}
function _v(t) {
  return (Ul = ''), t;
}
function Zs(t) {
  return $v(mo(nn - 1, Ld(t === 91 ? t + 2 : t === 40 ? t + 1 : t)));
}
function uE(t) {
  for (; (Tt = Jn()) && Tt < 33; ) fn();
  return so(t) > 2 || so(Tt) > 3 ? '' : ' ';
}
function cE(t, r) {
  for (; --r && fn() && !(Tt < 48 || Tt > 102 || (Tt > 57 && Tt < 65) || (Tt > 70 && Tt < 97)); );
  return mo(t, Is() + (r < 6 && Jn() == 32 && fn() == 32));
}
function Ld(t) {
  for (; fn(); )
    switch (Tt) {
      case t:
        return nn;
      case 34:
      case 39:
        t !== 34 && t !== 39 && Ld(Tt);
        break;
      case 40:
        t === 41 && Ld(t);
        break;
      case 92:
        fn();
        break;
    }
  return nn;
}
function fE(t, r) {
  for (; fn() && t + Tt !== 57; ) if (t + Tt === 84 && Jn() === 47) break;
  return '/*' + mo(r, nn - 1) + '*' + Cu(t === 47 ? t : fn());
}
function dE(t) {
  for (; !so(Jn()); ) fn();
  return mo(t, nn);
}
function pE(t) {
  return _v(Js('', null, null, null, [''], (t = Dv(t)), 0, [0], t));
}
function Js(t, r, l, i, s, u, f, p, m) {
  for (
    var h = 0,
      y = 0,
      v = f,
      b = 0,
      w = 0,
      S = 0,
      A = 1,
      O = 1,
      M = 1,
      z = 0,
      E = '',
      D = s,
      R = u,
      U = i,
      q = E;
    O;

  )
    switch (((S = z), (z = fn()))) {
      case 40:
        if (S != 108 && jt(q, v - 1) == 58) {
          jd((q += Pe(Zs(z), '&', '&\f')), '&\f') != -1 && (M = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        q += Zs(z);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        q += uE(S);
        break;
      case 92:
        q += cE(Is() - 1, 7);
        continue;
      case 47:
        switch (Jn()) {
          case 42:
          case 47:
            qs(hE(fE(fn(), Is()), r, l), m);
            break;
          default:
            q += '/';
        }
        break;
      case 123 * A:
        p[h++] = Qn(q) * M;
      case 125 * A:
      case 59:
      case 0:
        switch (z) {
          case 0:
          case 125:
            O = 0;
          case 59 + y:
            M == -1 && (q = Pe(q, /\f/g, '')),
              w > 0 &&
                Qn(q) - v &&
                qs(w > 32 ? Kg(q + ';', i, l, v - 1) : Kg(Pe(q, ' ', '') + ';', i, l, v - 2), m);
            break;
          case 59:
            q += ';';
          default:
            if ((qs((U = Yg(q, r, l, h, y, s, p, E, (D = []), (R = []), v)), u), z === 123))
              if (y === 0) Js(q, r, U, U, D, u, v, p, R);
              else
                switch (b === 99 && jt(q, 3) === 110 ? 100 : b) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Js(
                      t,
                      U,
                      U,
                      i && qs(Yg(t, U, U, 0, 0, s, p, E, s, (D = []), v), R),
                      s,
                      R,
                      v,
                      p,
                      i ? D : R,
                    );
                    break;
                  default:
                    Js(q, U, U, U, [''], R, 0, p, R);
                }
        }
        (h = y = w = 0), (A = M = 1), (E = q = ''), (v = f);
        break;
      case 58:
        (v = 1 + Qn(q)), (w = S);
      default:
        if (A < 1) {
          if (z == 123) --A;
          else if (z == 125 && A++ == 0 && sE() == 125) continue;
        }
        switch (((q += Cu(z)), z * A)) {
          case 38:
            M = y > 0 ? 1 : ((q += '\f'), -1);
            break;
          case 44:
            (p[h++] = (Qn(q) - 1) * M), (M = 1);
            break;
          case 64:
            Jn() === 45 && (q += Zs(fn())), (b = Jn()), (y = v = Qn((E = q += dE(Is())))), z++;
            break;
          case 45:
            S === 45 && Qn(q) == 2 && (A = 0);
        }
    }
  return u;
}
function Yg(t, r, l, i, s, u, f, p, m, h, y) {
  for (var v = s - 1, b = s === 0 ? u : [''], w = hp(b), S = 0, A = 0, O = 0; S < i; ++S)
    for (var M = 0, z = oo(t, v + 1, (v = nE((A = f[S])))), E = t; M < w; ++M)
      (E = $v(A > 0 ? b[M] + ' ' + z : Pe(z, /&\f/g, b[M]))) && (m[O++] = E);
  return Tu(t, r, l, s === 0 ? dp : p, m, h, y);
}
function hE(t, r, l) {
  return Tu(t, r, l, Ov, Cu(oE()), oo(t, 2, -2), 0);
}
function Kg(t, r, l, i) {
  return Tu(t, r, l, pp, oo(t, 0, i), oo(t, i + 1, -1), i);
}
function $l(t, r) {
  for (var l = '', i = hp(t), s = 0; s < i; s++) l += r(t[s], s, t, r) || '';
  return l;
}
function mE(t, r, l, i) {
  switch (t.type) {
    case tE:
      if (t.children.length) break;
    case eE:
    case pp:
      return (t.return = t.return || t.value);
    case Ov:
      return '';
    case Mv:
      return (t.return = t.value + '{' + $l(t.children, i) + '}');
    case dp:
      t.value = t.props.join(',');
  }
  return Qn((l = $l(t.children, i))) ? (t.return = t.value + '{' + l + '}') : '';
}
function gE(t) {
  var r = hp(t);
  return function (l, i, s, u) {
    for (var f = '', p = 0; p < r; p++) f += t[p](l, i, s, u) || '';
    return f;
  };
}
function yE(t) {
  return function (r) {
    r.root || ((r = r.return) && t(r));
  };
}
function Bv(t) {
  var r = Object.create(null);
  return function (l) {
    return r[l] === void 0 && (r[l] = t(l)), r[l];
  };
}
var vE = function (r, l, i) {
    for (var s = 0, u = 0; (s = u), (u = Jn()), s === 38 && u === 12 && (l[i] = 1), !so(u); ) fn();
    return mo(r, nn);
  },
  bE = function (r, l) {
    var i = -1,
      s = 44;
    do
      switch (so(s)) {
        case 0:
          s === 38 && Jn() === 12 && (l[i] = 1), (r[i] += vE(nn - 1, l, i));
          break;
        case 2:
          r[i] += Zs(s);
          break;
        case 4:
          if (s === 44) {
            (r[++i] = Jn() === 58 ? '&\f' : ''), (l[i] = r[i].length);
            break;
          }
        default:
          r[i] += Cu(s);
      }
    while ((s = fn()));
    return r;
  },
  SE = function (r, l) {
    return _v(bE(Dv(r), l));
  },
  Xg = new WeakMap(),
  xE = function (r) {
    if (!(r.type !== 'rule' || !r.parent || r.length < 1)) {
      for (
        var l = r.value, i = r.parent, s = r.column === i.column && r.line === i.line;
        i.type !== 'rule';

      )
        if (((i = i.parent), !i)) return;
      if (!(r.props.length === 1 && l.charCodeAt(0) !== 58 && !Xg.get(i)) && !s) {
        Xg.set(r, !0);
        for (var u = [], f = SE(l, u), p = i.props, m = 0, h = 0; m < f.length; m++)
          for (var y = 0; y < p.length; y++, h++)
            r.props[h] = u[m] ? f[m].replace(/&\f/g, p[y]) : p[y] + ' ' + f[m];
      }
    }
  },
  EE = function (r) {
    if (r.type === 'decl') {
      var l = r.value;
      l.charCodeAt(0) === 108 && l.charCodeAt(2) === 98 && ((r.return = ''), (r.value = ''));
    }
  };
function Nv(t, r) {
  switch (aE(t, r)) {
    case 5103:
      return He + 'print-' + t + t;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return He + t + t;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return He + t + su + t + Vt + t + t;
    case 6828:
    case 4268:
      return He + t + Vt + t + t;
    case 6165:
      return He + t + Vt + 'flex-' + t + t;
    case 5187:
      return He + t + Pe(t, /(\w+).+(:[^]+)/, He + 'box-$1$2' + Vt + 'flex-$1$2') + t;
    case 5443:
      return He + t + Vt + 'flex-item-' + Pe(t, /flex-|-self/, '') + t;
    case 4675:
      return He + t + Vt + 'flex-line-pack' + Pe(t, /align-content|flex-|-self/, '') + t;
    case 5548:
      return He + t + Vt + Pe(t, 'shrink', 'negative') + t;
    case 5292:
      return He + t + Vt + Pe(t, 'basis', 'preferred-size') + t;
    case 6060:
      return He + 'box-' + Pe(t, '-grow', '') + He + t + Vt + Pe(t, 'grow', 'positive') + t;
    case 4554:
      return He + Pe(t, /([^-])(transform)/g, '$1' + He + '$2') + t;
    case 6187:
      return Pe(Pe(Pe(t, /(zoom-|grab)/, He + '$1'), /(image-set)/, He + '$1'), t, '') + t;
    case 5495:
    case 3959:
      return Pe(t, /(image-set\([^]*)/, He + '$1$`$1');
    case 4968:
      return (
        Pe(
          Pe(t, /(.+:)(flex-)?(.*)/, He + 'box-pack:$3' + Vt + 'flex-pack:$3'),
          /s.+-b[^;]+/,
          'justify',
        ) +
        He +
        t +
        t
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Pe(t, /(.+)-inline(.+)/, He + '$1$2') + t;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Qn(t) - 1 - r > 6)
        switch (jt(t, r + 1)) {
          case 109:
            if (jt(t, r + 4) !== 45) break;
          case 102:
            return (
              Pe(
                t,
                /(.+:)(.+)-([^]+)/,
                '$1' + He + '$2-$3$1' + su + (jt(t, r + 3) == 108 ? '$3' : '$2-$3'),
              ) + t
            );
          case 115:
            return ~jd(t, 'stretch') ? Nv(Pe(t, 'stretch', 'fill-available'), r) + t : t;
        }
      break;
    case 4949:
      if (jt(t, r + 1) !== 115) break;
    case 6444:
      switch (jt(t, Qn(t) - 3 - (~jd(t, '!important') && 10))) {
        case 107:
          return Pe(t, ':', ':' + He) + t;
        case 101:
          return (
            Pe(
              t,
              /(.+:)([^;!]+)(;|!.+)?/,
              '$1' +
                He +
                (jt(t, 14) === 45 ? 'inline-' : '') +
                'box$3$1' +
                He +
                '$2$3$1' +
                Vt +
                '$2box$3',
            ) + t
          );
      }
      break;
    case 5936:
      switch (jt(t, r + 11)) {
        case 114:
          return He + t + Vt + Pe(t, /[svh]\w+-[tblr]{2}/, 'tb') + t;
        case 108:
          return He + t + Vt + Pe(t, /[svh]\w+-[tblr]{2}/, 'tb-rl') + t;
        case 45:
          return He + t + Vt + Pe(t, /[svh]\w+-[tblr]{2}/, 'lr') + t;
      }
      return He + t + Vt + t + t;
  }
  return t;
}
var CE = function (r, l, i, s) {
    if (r.length > -1 && !r.return)
      switch (r.type) {
        case pp:
          r.return = Nv(r.value, r.length);
          break;
        case Mv:
          return $l([Vi(r, { value: Pe(r.value, '@', '@' + He) })], s);
        case dp:
          if (r.length)
            return iE(r.props, function (u) {
              switch (lE(u, /(::plac\w+|:read-\w+)/)) {
                case ':read-only':
                case ':read-write':
                  return $l([Vi(r, { props: [Pe(u, /:(read-\w+)/, ':' + su + '$1')] })], s);
                case '::placeholder':
                  return $l(
                    [
                      Vi(r, { props: [Pe(u, /:(plac\w+)/, ':' + He + 'input-$1')] }),
                      Vi(r, { props: [Pe(u, /:(plac\w+)/, ':' + su + '$1')] }),
                      Vi(r, { props: [Pe(u, /:(plac\w+)/, Vt + 'input-$1')] }),
                    ],
                    s,
                  );
              }
              return '';
            });
      }
  },
  RE = [CE],
  TE = function (r) {
    var l = r.key;
    if (l === 'css') {
      var i = document.querySelectorAll('style[data-emotion]:not([data-s])');
      Array.prototype.forEach.call(i, function (A) {
        var O = A.getAttribute('data-emotion');
        O.indexOf(' ') !== -1 && (document.head.appendChild(A), A.setAttribute('data-s', ''));
      });
    }
    var s = r.stylisPlugins || RE,
      u = {},
      f,
      p = [];
    (f = r.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + l + ' "]'),
        function (A) {
          for (var O = A.getAttribute('data-emotion').split(' '), M = 1; M < O.length; M++)
            u[O[M]] = !0;
          p.push(A);
        },
      );
    var m,
      h = [xE, EE];
    {
      var y,
        v = [
          mE,
          yE(function (A) {
            y.insert(A);
          }),
        ],
        b = gE(h.concat(s, v)),
        w = function (O) {
          return $l(pE(O), b);
        };
      m = function (O, M, z, E) {
        (y = z), w(O ? O + '{' + M.styles + '}' : M.styles), E && (S.inserted[M.name] = !0);
      };
    }
    var S = {
      key: l,
      sheet: new Jx({
        key: l,
        container: f,
        nonce: r.nonce,
        speedy: r.speedy,
        prepend: r.prepend,
        insertionPoint: r.insertionPoint,
      }),
      nonce: r.nonce,
      inserted: u,
      registered: {},
      insert: m,
    };
    return S.sheet.hydrate(p), S;
  },
  yd = { exports: {} },
  qe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qg;
function wE() {
  if (Qg) return qe;
  Qg = 1;
  var t = typeof Symbol == 'function' && Symbol.for,
    r = t ? Symbol.for('react.element') : 60103,
    l = t ? Symbol.for('react.portal') : 60106,
    i = t ? Symbol.for('react.fragment') : 60107,
    s = t ? Symbol.for('react.strict_mode') : 60108,
    u = t ? Symbol.for('react.profiler') : 60114,
    f = t ? Symbol.for('react.provider') : 60109,
    p = t ? Symbol.for('react.context') : 60110,
    m = t ? Symbol.for('react.async_mode') : 60111,
    h = t ? Symbol.for('react.concurrent_mode') : 60111,
    y = t ? Symbol.for('react.forward_ref') : 60112,
    v = t ? Symbol.for('react.suspense') : 60113,
    b = t ? Symbol.for('react.suspense_list') : 60120,
    w = t ? Symbol.for('react.memo') : 60115,
    S = t ? Symbol.for('react.lazy') : 60116,
    A = t ? Symbol.for('react.block') : 60121,
    O = t ? Symbol.for('react.fundamental') : 60117,
    M = t ? Symbol.for('react.responder') : 60118,
    z = t ? Symbol.for('react.scope') : 60119;
  function E(R) {
    if (typeof R == 'object' && R !== null) {
      var U = R.$$typeof;
      switch (U) {
        case r:
          switch (((R = R.type), R)) {
            case m:
            case h:
            case i:
            case u:
            case s:
            case v:
              return R;
            default:
              switch (((R = R && R.$$typeof), R)) {
                case p:
                case y:
                case S:
                case w:
                case f:
                  return R;
                default:
                  return U;
              }
          }
        case l:
          return U;
      }
    }
  }
  function D(R) {
    return E(R) === h;
  }
  return (
    (qe.AsyncMode = m),
    (qe.ConcurrentMode = h),
    (qe.ContextConsumer = p),
    (qe.ContextProvider = f),
    (qe.Element = r),
    (qe.ForwardRef = y),
    (qe.Fragment = i),
    (qe.Lazy = S),
    (qe.Memo = w),
    (qe.Portal = l),
    (qe.Profiler = u),
    (qe.StrictMode = s),
    (qe.Suspense = v),
    (qe.isAsyncMode = function (R) {
      return D(R) || E(R) === m;
    }),
    (qe.isConcurrentMode = D),
    (qe.isContextConsumer = function (R) {
      return E(R) === p;
    }),
    (qe.isContextProvider = function (R) {
      return E(R) === f;
    }),
    (qe.isElement = function (R) {
      return typeof R == 'object' && R !== null && R.$$typeof === r;
    }),
    (qe.isForwardRef = function (R) {
      return E(R) === y;
    }),
    (qe.isFragment = function (R) {
      return E(R) === i;
    }),
    (qe.isLazy = function (R) {
      return E(R) === S;
    }),
    (qe.isMemo = function (R) {
      return E(R) === w;
    }),
    (qe.isPortal = function (R) {
      return E(R) === l;
    }),
    (qe.isProfiler = function (R) {
      return E(R) === u;
    }),
    (qe.isStrictMode = function (R) {
      return E(R) === s;
    }),
    (qe.isSuspense = function (R) {
      return E(R) === v;
    }),
    (qe.isValidElementType = function (R) {
      return (
        typeof R == 'string' ||
        typeof R == 'function' ||
        R === i ||
        R === h ||
        R === u ||
        R === s ||
        R === v ||
        R === b ||
        (typeof R == 'object' &&
          R !== null &&
          (R.$$typeof === S ||
            R.$$typeof === w ||
            R.$$typeof === f ||
            R.$$typeof === p ||
            R.$$typeof === y ||
            R.$$typeof === O ||
            R.$$typeof === M ||
            R.$$typeof === z ||
            R.$$typeof === A))
      );
    }),
    (qe.typeOf = E),
    qe
  );
}
var Wg;
function AE() {
  return Wg || ((Wg = 1), (yd.exports = wE())), yd.exports;
}
var vd, Ig;
function OE() {
  if (Ig) return vd;
  Ig = 1;
  var t = AE(),
    r = {
      childContextTypes: !0,
      contextType: !0,
      contextTypes: !0,
      defaultProps: !0,
      displayName: !0,
      getDefaultProps: !0,
      getDerivedStateFromError: !0,
      getDerivedStateFromProps: !0,
      mixins: !0,
      propTypes: !0,
      type: !0,
    },
    l = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
    i = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
    s = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
    u = {};
  (u[t.ForwardRef] = i), (u[t.Memo] = s);
  function f(S) {
    return t.isMemo(S) ? s : u[S.$$typeof] || r;
  }
  var p = Object.defineProperty,
    m = Object.getOwnPropertyNames,
    h = Object.getOwnPropertySymbols,
    y = Object.getOwnPropertyDescriptor,
    v = Object.getPrototypeOf,
    b = Object.prototype;
  function w(S, A, O) {
    if (typeof A != 'string') {
      if (b) {
        var M = v(A);
        M && M !== b && w(S, M, O);
      }
      var z = m(A);
      h && (z = z.concat(h(A)));
      for (var E = f(S), D = f(A), R = 0; R < z.length; ++R) {
        var U = z[R];
        if (!l[U] && !(O && O[U]) && !(D && D[U]) && !(E && E[U])) {
          var q = y(A, U);
          try {
            p(S, U, q);
          } catch {}
        }
      }
    }
    return S;
  }
  return (vd = w), vd;
}
OE();
var ME = !0;
function kv(t, r, l) {
  var i = '';
  return (
    l.split(' ').forEach(function (s) {
      t[s] !== void 0 ? r.push(t[s] + ';') : s && (i += s + ' ');
    }),
    i
  );
}
var mp = function (r, l, i) {
    var s = r.key + '-' + l.name;
    (i === !1 || ME === !1) && r.registered[s] === void 0 && (r.registered[s] = l.styles);
  },
  gp = function (r, l, i) {
    mp(r, l, i);
    var s = r.key + '-' + l.name;
    if (r.inserted[l.name] === void 0) {
      var u = l;
      do r.insert(l === u ? '.' + s : '', u, r.sheet, !0), (u = u.next);
      while (u !== void 0);
    }
  };
function $E(t) {
  for (var r = 0, l, i = 0, s = t.length; s >= 4; ++i, s -= 4)
    (l =
      (t.charCodeAt(i) & 255) |
      ((t.charCodeAt(++i) & 255) << 8) |
      ((t.charCodeAt(++i) & 255) << 16) |
      ((t.charCodeAt(++i) & 255) << 24)),
      (l = (l & 65535) * 1540483477 + (((l >>> 16) * 59797) << 16)),
      (l ^= l >>> 24),
      (r =
        ((l & 65535) * 1540483477 + (((l >>> 16) * 59797) << 16)) ^
        ((r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)));
  switch (s) {
    case 3:
      r ^= (t.charCodeAt(i + 2) & 255) << 16;
    case 2:
      r ^= (t.charCodeAt(i + 1) & 255) << 8;
    case 1:
      (r ^= t.charCodeAt(i) & 255), (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16));
  }
  return (
    (r ^= r >>> 13),
    (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)),
    ((r ^ (r >>> 15)) >>> 0).toString(36)
  );
}
var zE = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    scale: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  DE = /[A-Z]|^ms/g,
  _E = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Uv = function (r) {
    return r.charCodeAt(1) === 45;
  },
  Zg = function (r) {
    return r != null && typeof r != 'boolean';
  },
  bd = Bv(function (t) {
    return Uv(t) ? t : t.replace(DE, '-$&').toLowerCase();
  }),
  Jg = function (r, l) {
    switch (r) {
      case 'animation':
      case 'animationName':
        if (typeof l == 'string')
          return l.replace(_E, function (i, s, u) {
            return (Wn = { name: s, styles: u, next: Wn }), s;
          });
    }
    return zE[r] !== 1 && !Uv(r) && typeof l == 'number' && l !== 0 ? l + 'px' : l;
  };
function uo(t, r, l) {
  if (l == null) return '';
  var i = l;
  if (i.__emotion_styles !== void 0) return i;
  switch (typeof l) {
    case 'boolean':
      return '';
    case 'object': {
      var s = l;
      if (s.anim === 1) return (Wn = { name: s.name, styles: s.styles, next: Wn }), s.name;
      var u = l;
      if (u.styles !== void 0) {
        var f = u.next;
        if (f !== void 0)
          for (; f !== void 0; ) (Wn = { name: f.name, styles: f.styles, next: Wn }), (f = f.next);
        var p = u.styles + ';';
        return p;
      }
      return BE(t, r, l);
    }
    case 'function': {
      if (t !== void 0) {
        var m = Wn,
          h = l(t);
        return (Wn = m), uo(t, r, h);
      }
      break;
    }
  }
  var y = l;
  if (r == null) return y;
  var v = r[y];
  return v !== void 0 ? v : y;
}
function BE(t, r, l) {
  var i = '';
  if (Array.isArray(l)) for (var s = 0; s < l.length; s++) i += uo(t, r, l[s]) + ';';
  else
    for (var u in l) {
      var f = l[u];
      if (typeof f != 'object') {
        var p = f;
        r != null && r[p] !== void 0
          ? (i += u + '{' + r[p] + '}')
          : Zg(p) && (i += bd(u) + ':' + Jg(u, p) + ';');
      } else if (Array.isArray(f) && typeof f[0] == 'string' && (r == null || r[f[0]] === void 0))
        for (var m = 0; m < f.length; m++) Zg(f[m]) && (i += bd(u) + ':' + Jg(u, f[m]) + ';');
      else {
        var h = uo(t, r, f);
        switch (u) {
          case 'animation':
          case 'animationName': {
            i += bd(u) + ':' + h + ';';
            break;
          }
          default:
            i += u + '{' + h + '}';
        }
      }
    }
  return i;
}
var ey = /label:\s*([^\s;{]+)\s*(;|$)/g,
  Wn;
function go(t, r, l) {
  if (t.length === 1 && typeof t[0] == 'object' && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var i = !0,
    s = '';
  Wn = void 0;
  var u = t[0];
  if (u == null || u.raw === void 0) (i = !1), (s += uo(l, r, u));
  else {
    var f = u;
    s += f[0];
  }
  for (var p = 1; p < t.length; p++)
    if (((s += uo(l, r, t[p])), i)) {
      var m = u;
      s += m[p];
    }
  ey.lastIndex = 0;
  for (var h = '', y; (y = ey.exec(s)) !== null; ) h += '-' + y[1];
  var v = $E(s) + h;
  return { name: v, styles: s, next: Wn };
}
var NE = function (r) {
    return r();
  },
  jv = Ud.useInsertionEffect ? Ud.useInsertionEffect : !1,
  Lv = jv || NE,
  ty = jv || C.useLayoutEffect,
  kE = !1,
  Hv = C.createContext(typeof HTMLElement < 'u' ? TE({ key: 'css' }) : null);
Hv.Provider;
var yp = function (r) {
    return C.forwardRef(function (l, i) {
      var s = C.useContext(Hv);
      return r(l, s, i);
    });
  },
  yo = C.createContext({}),
  vp = {}.hasOwnProperty,
  Hd = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__',
  UE = function (r, l) {
    var i = {};
    for (var s in l) vp.call(l, s) && (i[s] = l[s]);
    return (i[Hd] = r), i;
  },
  jE = function (r) {
    var l = r.cache,
      i = r.serialized,
      s = r.isStringTag;
    return (
      mp(l, i, s),
      Lv(function () {
        return gp(l, i, s);
      }),
      null
    );
  },
  LE = yp(function (t, r, l) {
    var i = t.css;
    typeof i == 'string' && r.registered[i] !== void 0 && (i = r.registered[i]);
    var s = t[Hd],
      u = [i],
      f = '';
    typeof t.className == 'string'
      ? (f = kv(r.registered, u, t.className))
      : t.className != null && (f = t.className + ' ');
    var p = go(u, void 0, C.useContext(yo));
    f += r.key + '-' + p.name;
    var m = {};
    for (var h in t) vp.call(t, h) && h !== 'css' && h !== Hd && !kE && (m[h] = t[h]);
    return (
      (m.className = f),
      l && (m.ref = l),
      C.createElement(
        C.Fragment,
        null,
        C.createElement(jE, { cache: r, serialized: p, isStringTag: typeof s == 'string' }),
        C.createElement(s, m),
      )
    );
  }),
  HE = LE,
  PE = function (r, l) {
    var i = arguments;
    if (l == null || !vp.call(l, 'css')) return C.createElement.apply(void 0, i);
    var s = i.length,
      u = new Array(s);
    (u[0] = HE), (u[1] = UE(r, l));
    for (var f = 2; f < s; f++) u[f] = i[f];
    return C.createElement.apply(null, u);
  };
(function (t) {
  var r;
  r || (r = t.JSX || (t.JSX = {}));
})(PE);
var qE = yp(function (t, r) {
  var l = t.styles,
    i = go([l], void 0, C.useContext(yo)),
    s = C.useRef();
  return (
    ty(
      function () {
        var u = r.key + '-global',
          f = new r.sheet.constructor({
            key: u,
            nonce: r.sheet.nonce,
            container: r.sheet.container,
            speedy: r.sheet.isSpeedy,
          }),
          p = !1,
          m = document.querySelector('style[data-emotion="' + u + ' ' + i.name + '"]');
        return (
          r.sheet.tags.length && (f.before = r.sheet.tags[0]),
          m !== null && ((p = !0), m.setAttribute('data-emotion', u), f.hydrate([m])),
          (s.current = [f, p]),
          function () {
            f.flush();
          }
        );
      },
      [r],
    ),
    ty(
      function () {
        var u = s.current,
          f = u[0],
          p = u[1];
        if (p) {
          u[1] = !1;
          return;
        }
        if ((i.next !== void 0 && gp(r, i.next, !0), f.tags.length)) {
          var m = f.tags[f.tags.length - 1].nextElementSibling;
          (f.before = m), f.flush();
        }
        r.insert('', i, f, !1);
      },
      [r, i.name],
    ),
    null
  );
});
function FE() {
  for (var t = arguments.length, r = new Array(t), l = 0; l < t; l++) r[l] = arguments[l];
  return go(r);
}
function bp() {
  var t = FE.apply(void 0, arguments),
    r = 'animation-' + t.name;
  return {
    name: r,
    styles: '@keyframes ' + r + '{' + t.styles + '}',
    anim: 1,
    toString: function () {
      return '_EMO_' + this.name + '_' + this.styles + '_EMO_';
    },
  };
}
var GE =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  VE = Bv(function (t) {
    return (
      GE.test(t) || (t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && t.charCodeAt(2) < 91)
    );
  }),
  YE = VE,
  KE = function (r) {
    return r !== 'theme';
  },
  ny = function (r) {
    return typeof r == 'string' && r.charCodeAt(0) > 96 ? YE : KE;
  },
  ry = function (r, l, i) {
    var s;
    if (l) {
      var u = l.shouldForwardProp;
      s =
        r.__emotion_forwardProp && u
          ? function (f) {
              return r.__emotion_forwardProp(f) && u(f);
            }
          : u;
    }
    return typeof s != 'function' && i && (s = r.__emotion_forwardProp), s;
  },
  XE = function (r) {
    var l = r.cache,
      i = r.serialized,
      s = r.isStringTag;
    return (
      mp(l, i, s),
      Lv(function () {
        return gp(l, i, s);
      }),
      null
    );
  },
  QE = function t(r, l) {
    var i = r.__emotion_real === r,
      s = (i && r.__emotion_base) || r,
      u,
      f;
    l !== void 0 && ((u = l.label), (f = l.target));
    var p = ry(r, l, i),
      m = p || ny(s),
      h = !m('as');
    return function () {
      var y = arguments,
        v = i && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
      if ((u !== void 0 && v.push('label:' + u + ';'), y[0] == null || y[0].raw === void 0))
        v.push.apply(v, y);
      else {
        var b = y[0];
        v.push(b[0]);
        for (var w = y.length, S = 1; S < w; S++) v.push(y[S], b[S]);
      }
      var A = yp(function (O, M, z) {
        var E = (h && O.as) || s,
          D = '',
          R = [],
          U = O;
        if (O.theme == null) {
          U = {};
          for (var q in O) U[q] = O[q];
          U.theme = C.useContext(yo);
        }
        typeof O.className == 'string'
          ? (D = kv(M.registered, R, O.className))
          : O.className != null && (D = O.className + ' ');
        var V = go(v.concat(R), M.registered, U);
        (D += M.key + '-' + V.name), f !== void 0 && (D += ' ' + f);
        var G = h && p === void 0 ? ny(E) : m,
          x = {};
        for (var P in O) (h && P === 'as') || (G(P) && (x[P] = O[P]));
        return (
          (x.className = D),
          z && (x.ref = z),
          C.createElement(
            C.Fragment,
            null,
            C.createElement(XE, { cache: M, serialized: V, isStringTag: typeof E == 'string' }),
            C.createElement(E, x),
          )
        );
      });
      return (
        (A.displayName =
          u !== void 0
            ? u
            : 'Styled(' +
              (typeof s == 'string' ? s : s.displayName || s.name || 'Component') +
              ')'),
        (A.defaultProps = r.defaultProps),
        (A.__emotion_real = A),
        (A.__emotion_base = s),
        (A.__emotion_styles = v),
        (A.__emotion_forwardProp = p),
        Object.defineProperty(A, 'toString', {
          value: function () {
            return '.' + f;
          },
        }),
        (A.withComponent = function (O, M) {
          var z = t(O, fe({}, l, M, { shouldForwardProp: ry(A, M, !0) }));
          return z.apply(void 0, v);
        }),
        A
      );
    };
  },
  WE = [
    'a',
    'abbr',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'bdi',
    'bdo',
    'big',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'div',
    'dl',
    'dt',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'keygen',
    'label',
    'legend',
    'li',
    'link',
    'main',
    'map',
    'mark',
    'marquee',
    'menu',
    'menuitem',
    'meta',
    'meter',
    'nav',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'script',
    'section',
    'select',
    'small',
    'source',
    'span',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'title',
    'tr',
    'track',
    'u',
    'ul',
    'var',
    'video',
    'wbr',
    'circle',
    'clipPath',
    'defs',
    'ellipse',
    'foreignObject',
    'g',
    'image',
    'line',
    'linearGradient',
    'mask',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'stop',
    'svg',
    'text',
    'tspan',
  ],
  uu = QE.bind(null);
WE.forEach(function (t) {
  uu[t] = uu(t);
});
function IE(t) {
  return t == null || Object.keys(t).length === 0;
}
function ZE(t) {
  const { styles: r, defaultTheme: l = {} } = t,
    i = typeof r == 'function' ? (s) => r(IE(s) ? l : s) : r;
  return L.jsx(qE, { styles: i });
}
/**
 * @mui/styled-engine v6.3.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function Pv(t, r) {
  return uu(t, r);
}
function JE(t, r) {
  Array.isArray(t.__emotion_styles) && (t.__emotion_styles = r(t.__emotion_styles));
}
const ay = [];
function ly(t) {
  return (ay[0] = t), go(ay);
}
function In(t) {
  if (typeof t != 'object' || t === null) return !1;
  const r = Object.getPrototypeOf(t);
  return (
    (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) &&
    !(Symbol.toStringTag in t) &&
    !(Symbol.iterator in t)
  );
}
function qv(t) {
  if (C.isValidElement(t) || !In(t)) return t;
  const r = {};
  return (
    Object.keys(t).forEach((l) => {
      r[l] = qv(t[l]);
    }),
    r
  );
}
function Kt(t, r, l = { clone: !0 }) {
  const i = l.clone ? { ...t } : t;
  return (
    In(t) &&
      In(r) &&
      Object.keys(r).forEach((s) => {
        C.isValidElement(r[s])
          ? (i[s] = r[s])
          : In(r[s]) && Object.prototype.hasOwnProperty.call(t, s) && In(t[s])
            ? (i[s] = Kt(t[s], r[s], l))
            : l.clone
              ? (i[s] = In(r[s]) ? qv(r[s]) : r[s])
              : (i[s] = r[s]);
      }),
    i
  );
}
const eC = (t) => {
  const r = Object.keys(t).map((l) => ({ key: l, val: t[l] })) || [];
  return r.sort((l, i) => l.val - i.val), r.reduce((l, i) => ({ ...l, [i.key]: i.val }), {});
};
function tC(t) {
  const {
      values: r = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: l = 'px',
      step: i = 5,
      ...s
    } = t,
    u = eC(r),
    f = Object.keys(u);
  function p(b) {
    return `@media (min-width:${typeof r[b] == 'number' ? r[b] : b}${l})`;
  }
  function m(b) {
    return `@media (max-width:${(typeof r[b] == 'number' ? r[b] : b) - i / 100}${l})`;
  }
  function h(b, w) {
    const S = f.indexOf(w);
    return `@media (min-width:${typeof r[b] == 'number' ? r[b] : b}${l}) and (max-width:${(S !== -1 && typeof r[f[S]] == 'number' ? r[f[S]] : w) - i / 100}${l})`;
  }
  function y(b) {
    return f.indexOf(b) + 1 < f.length ? h(b, f[f.indexOf(b) + 1]) : p(b);
  }
  function v(b) {
    const w = f.indexOf(b);
    return w === 0
      ? p(f[1])
      : w === f.length - 1
        ? m(f[w])
        : h(b, f[f.indexOf(b) + 1]).replace('@media', '@media not all and');
  }
  return { keys: f, values: u, up: p, down: m, between: h, only: y, not: v, unit: l, ...s };
}
function nC(t, r) {
  if (!t.containerQueries) return r;
  const l = Object.keys(r)
    .filter((i) => i.startsWith('@container'))
    .sort((i, s) => {
      var f, p;
      const u = /min-width:\s*([0-9.]+)/;
      return (
        +(((f = i.match(u)) == null ? void 0 : f[1]) || 0) -
        +(((p = s.match(u)) == null ? void 0 : p[1]) || 0)
      );
    });
  return l.length
    ? l.reduce(
        (i, s) => {
          const u = r[s];
          return delete i[s], (i[s] = u), i;
        },
        { ...r },
      )
    : r;
}
function rC(t, r) {
  return (
    r === '@' || (r.startsWith('@') && (t.some((l) => r.startsWith(`@${l}`)) || !!r.match(/^@\d/)))
  );
}
function aC(t, r) {
  const l = r.match(/^@([^/]+)?\/?(.+)?$/);
  if (!l) return null;
  const [, i, s] = l,
    u = Number.isNaN(+i) ? i || 0 : +i;
  return t.containerQueries(s).up(u);
}
function lC(t) {
  const r = (u, f) => u.replace('@media', f ? `@container ${f}` : '@container');
  function l(u, f) {
    (u.up = (...p) => r(t.breakpoints.up(...p), f)),
      (u.down = (...p) => r(t.breakpoints.down(...p), f)),
      (u.between = (...p) => r(t.breakpoints.between(...p), f)),
      (u.only = (...p) => r(t.breakpoints.only(...p), f)),
      (u.not = (...p) => {
        const m = r(t.breakpoints.not(...p), f);
        return m.includes('not all and')
          ? m
              .replace('not all and ', '')
              .replace('min-width:', 'width<')
              .replace('max-width:', 'width>')
              .replace('and', 'or')
          : m;
      });
  }
  const i = {},
    s = (u) => (l(i, u), i);
  return l(s), { ...t, containerQueries: s };
}
const iC = { borderRadius: 4 };
function no(t, r) {
  return r ? Kt(t, r, { clone: !1 }) : t;
}
const wu = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  iy = { keys: ['xs', 'sm', 'md', 'lg', 'xl'], up: (t) => `@media (min-width:${wu[t]}px)` },
  oC = {
    containerQueries: (t) => ({
      up: (r) => {
        let l = typeof r == 'number' ? r : wu[r] || r;
        return (
          typeof l == 'number' && (l = `${l}px`),
          t ? `@container ${t} (min-width:${l})` : `@container (min-width:${l})`
        );
      },
    }),
  };
function wr(t, r, l) {
  const i = t.theme || {};
  if (Array.isArray(r)) {
    const u = i.breakpoints || iy;
    return r.reduce((f, p, m) => ((f[u.up(u.keys[m])] = l(r[m])), f), {});
  }
  if (typeof r == 'object') {
    const u = i.breakpoints || iy;
    return Object.keys(r).reduce((f, p) => {
      if (rC(u.keys, p)) {
        const m = aC(i.containerQueries ? i : oC, p);
        m && (f[m] = l(r[p], p));
      } else if (Object.keys(u.values || wu).includes(p)) {
        const m = u.up(p);
        f[m] = l(r[p], p);
      } else {
        const m = p;
        f[m] = r[m];
      }
      return f;
    }, {});
  }
  return l(r);
}
function sC(t = {}) {
  var l;
  return (
    ((l = t.keys) == null
      ? void 0
      : l.reduce((i, s) => {
          const u = t.up(s);
          return (i[u] = {}), i;
        }, {})) || {}
  );
}
function uC(t, r) {
  return t.reduce((l, i) => {
    const s = l[i];
    return (!s || Object.keys(s).length === 0) && delete l[i], l;
  }, r);
}
function ke(t) {
  if (typeof t != 'string') throw new Error(Tr(7));
  return t.charAt(0).toUpperCase() + t.slice(1);
}
function Au(t, r, l = !0) {
  if (!r || typeof r != 'string') return null;
  if (t && t.vars && l) {
    const i = `vars.${r}`.split('.').reduce((s, u) => (s && s[u] ? s[u] : null), t);
    if (i != null) return i;
  }
  return r.split('.').reduce((i, s) => (i && i[s] != null ? i[s] : null), t);
}
function cu(t, r, l, i = l) {
  let s;
  return (
    typeof t == 'function' ? (s = t(l)) : Array.isArray(t) ? (s = t[l] || i) : (s = Au(t, l) || i),
    r && (s = r(s, i, t)),
    s
  );
}
function bt(t) {
  const { prop: r, cssProperty: l = t.prop, themeKey: i, transform: s } = t,
    u = (f) => {
      if (f[r] == null) return null;
      const p = f[r],
        m = f.theme,
        h = Au(m, i) || {};
      return wr(f, p, (v) => {
        let b = cu(h, s, v);
        return (
          v === b &&
            typeof v == 'string' &&
            (b = cu(h, s, `${r}${v === 'default' ? '' : ke(v)}`, v)),
          l === !1 ? b : { [l]: b }
        );
      });
    };
  return (u.propTypes = {}), (u.filterProps = [r]), u;
}
function cC(t) {
  const r = {};
  return (l) => (r[l] === void 0 && (r[l] = t(l)), r[l]);
}
const fC = { m: 'margin', p: 'padding' },
  dC = { t: 'Top', r: 'Right', b: 'Bottom', l: 'Left', x: ['Left', 'Right'], y: ['Top', 'Bottom'] },
  oy = { marginX: 'mx', marginY: 'my', paddingX: 'px', paddingY: 'py' },
  pC = cC((t) => {
    if (t.length > 2)
      if (oy[t]) t = oy[t];
      else return [t];
    const [r, l] = t.split(''),
      i = fC[r],
      s = dC[l] || '';
    return Array.isArray(s) ? s.map((u) => i + u) : [i + s];
  }),
  Sp = [
    'm',
    'mt',
    'mr',
    'mb',
    'ml',
    'mx',
    'my',
    'margin',
    'marginTop',
    'marginRight',
    'marginBottom',
    'marginLeft',
    'marginX',
    'marginY',
    'marginInline',
    'marginInlineStart',
    'marginInlineEnd',
    'marginBlock',
    'marginBlockStart',
    'marginBlockEnd',
  ],
  xp = [
    'p',
    'pt',
    'pr',
    'pb',
    'pl',
    'px',
    'py',
    'padding',
    'paddingTop',
    'paddingRight',
    'paddingBottom',
    'paddingLeft',
    'paddingX',
    'paddingY',
    'paddingInline',
    'paddingInlineStart',
    'paddingInlineEnd',
    'paddingBlock',
    'paddingBlockStart',
    'paddingBlockEnd',
  ];
[...Sp, ...xp];
function vo(t, r, l, i) {
  const s = Au(t, r, !0) ?? l;
  return typeof s == 'number' || typeof s == 'string'
    ? (u) => (typeof u == 'string' ? u : typeof s == 'string' ? `calc(${u} * ${s})` : s * u)
    : Array.isArray(s)
      ? (u) => {
          if (typeof u == 'string') return u;
          const f = Math.abs(u),
            p = s[f];
          return u >= 0 ? p : typeof p == 'number' ? -p : `-${p}`;
        }
      : typeof s == 'function'
        ? s
        : () => {};
}
function Ep(t) {
  return vo(t, 'spacing', 8);
}
function bo(t, r) {
  return typeof r == 'string' || r == null ? r : t(r);
}
function hC(t, r) {
  return (l) => t.reduce((i, s) => ((i[s] = bo(r, l)), i), {});
}
function mC(t, r, l, i) {
  if (!r.includes(l)) return null;
  const s = pC(l),
    u = hC(s, i),
    f = t[l];
  return wr(t, f, u);
}
function Fv(t, r) {
  const l = Ep(t.theme);
  return Object.keys(t)
    .map((i) => mC(t, r, i, l))
    .reduce(no, {});
}
function pt(t) {
  return Fv(t, Sp);
}
pt.propTypes = {};
pt.filterProps = Sp;
function ht(t) {
  return Fv(t, xp);
}
ht.propTypes = {};
ht.filterProps = xp;
function Gv(t = 8, r = Ep({ spacing: t })) {
  if (t.mui) return t;
  const l = (...i) =>
    (i.length === 0 ? [1] : i)
      .map((u) => {
        const f = r(u);
        return typeof f == 'number' ? `${f}px` : f;
      })
      .join(' ');
  return (l.mui = !0), l;
}
function Ou(...t) {
  const r = t.reduce(
      (i, s) => (
        s.filterProps.forEach((u) => {
          i[u] = s;
        }),
        i
      ),
      {},
    ),
    l = (i) => Object.keys(i).reduce((s, u) => (r[u] ? no(s, r[u](i)) : s), {});
  return (l.propTypes = {}), (l.filterProps = t.reduce((i, s) => i.concat(s.filterProps), [])), l;
}
function wn(t) {
  return typeof t != 'number' ? t : `${t}px solid`;
}
function On(t, r) {
  return bt({ prop: t, themeKey: 'borders', transform: r });
}
const gC = On('border', wn),
  yC = On('borderTop', wn),
  vC = On('borderRight', wn),
  bC = On('borderBottom', wn),
  SC = On('borderLeft', wn),
  xC = On('borderColor'),
  EC = On('borderTopColor'),
  CC = On('borderRightColor'),
  RC = On('borderBottomColor'),
  TC = On('borderLeftColor'),
  wC = On('outline', wn),
  AC = On('outlineColor'),
  Mu = (t) => {
    if (t.borderRadius !== void 0 && t.borderRadius !== null) {
      const r = vo(t.theme, 'shape.borderRadius', 4),
        l = (i) => ({ borderRadius: bo(r, i) });
      return wr(t, t.borderRadius, l);
    }
    return null;
  };
Mu.propTypes = {};
Mu.filterProps = ['borderRadius'];
Ou(gC, yC, vC, bC, SC, xC, EC, CC, RC, TC, Mu, wC, AC);
const $u = (t) => {
  if (t.gap !== void 0 && t.gap !== null) {
    const r = vo(t.theme, 'spacing', 8),
      l = (i) => ({ gap: bo(r, i) });
    return wr(t, t.gap, l);
  }
  return null;
};
$u.propTypes = {};
$u.filterProps = ['gap'];
const zu = (t) => {
  if (t.columnGap !== void 0 && t.columnGap !== null) {
    const r = vo(t.theme, 'spacing', 8),
      l = (i) => ({ columnGap: bo(r, i) });
    return wr(t, t.columnGap, l);
  }
  return null;
};
zu.propTypes = {};
zu.filterProps = ['columnGap'];
const Du = (t) => {
  if (t.rowGap !== void 0 && t.rowGap !== null) {
    const r = vo(t.theme, 'spacing', 8),
      l = (i) => ({ rowGap: bo(r, i) });
    return wr(t, t.rowGap, l);
  }
  return null;
};
Du.propTypes = {};
Du.filterProps = ['rowGap'];
const OC = bt({ prop: 'gridColumn' }),
  MC = bt({ prop: 'gridRow' }),
  $C = bt({ prop: 'gridAutoFlow' }),
  zC = bt({ prop: 'gridAutoColumns' }),
  DC = bt({ prop: 'gridAutoRows' }),
  _C = bt({ prop: 'gridTemplateColumns' }),
  BC = bt({ prop: 'gridTemplateRows' }),
  NC = bt({ prop: 'gridTemplateAreas' }),
  kC = bt({ prop: 'gridArea' });
Ou($u, zu, Du, OC, MC, $C, zC, DC, _C, BC, NC, kC);
function zl(t, r) {
  return r === 'grey' ? r : t;
}
const UC = bt({ prop: 'color', themeKey: 'palette', transform: zl }),
  jC = bt({ prop: 'bgcolor', cssProperty: 'backgroundColor', themeKey: 'palette', transform: zl }),
  LC = bt({ prop: 'backgroundColor', themeKey: 'palette', transform: zl });
Ou(UC, jC, LC);
function un(t) {
  return t <= 1 && t !== 0 ? `${t * 100}%` : t;
}
const HC = bt({ prop: 'width', transform: un }),
  Cp = (t) => {
    if (t.maxWidth !== void 0 && t.maxWidth !== null) {
      const r = (l) => {
        var s, u, f, p, m;
        const i =
          ((f = (u = (s = t.theme) == null ? void 0 : s.breakpoints) == null ? void 0 : u.values) ==
          null
            ? void 0
            : f[l]) || wu[l];
        return i
          ? ((m = (p = t.theme) == null ? void 0 : p.breakpoints) == null ? void 0 : m.unit) !==
            'px'
            ? { maxWidth: `${i}${t.theme.breakpoints.unit}` }
            : { maxWidth: i }
          : { maxWidth: un(l) };
      };
      return wr(t, t.maxWidth, r);
    }
    return null;
  };
Cp.filterProps = ['maxWidth'];
const PC = bt({ prop: 'minWidth', transform: un }),
  qC = bt({ prop: 'height', transform: un }),
  FC = bt({ prop: 'maxHeight', transform: un }),
  GC = bt({ prop: 'minHeight', transform: un });
bt({ prop: 'size', cssProperty: 'width', transform: un });
bt({ prop: 'size', cssProperty: 'height', transform: un });
const VC = bt({ prop: 'boxSizing' });
Ou(HC, Cp, PC, qC, FC, GC, VC);
const So = {
  border: { themeKey: 'borders', transform: wn },
  borderTop: { themeKey: 'borders', transform: wn },
  borderRight: { themeKey: 'borders', transform: wn },
  borderBottom: { themeKey: 'borders', transform: wn },
  borderLeft: { themeKey: 'borders', transform: wn },
  borderColor: { themeKey: 'palette' },
  borderTopColor: { themeKey: 'palette' },
  borderRightColor: { themeKey: 'palette' },
  borderBottomColor: { themeKey: 'palette' },
  borderLeftColor: { themeKey: 'palette' },
  outline: { themeKey: 'borders', transform: wn },
  outlineColor: { themeKey: 'palette' },
  borderRadius: { themeKey: 'shape.borderRadius', style: Mu },
  color: { themeKey: 'palette', transform: zl },
  bgcolor: { themeKey: 'palette', cssProperty: 'backgroundColor', transform: zl },
  backgroundColor: { themeKey: 'palette', transform: zl },
  p: { style: ht },
  pt: { style: ht },
  pr: { style: ht },
  pb: { style: ht },
  pl: { style: ht },
  px: { style: ht },
  py: { style: ht },
  padding: { style: ht },
  paddingTop: { style: ht },
  paddingRight: { style: ht },
  paddingBottom: { style: ht },
  paddingLeft: { style: ht },
  paddingX: { style: ht },
  paddingY: { style: ht },
  paddingInline: { style: ht },
  paddingInlineStart: { style: ht },
  paddingInlineEnd: { style: ht },
  paddingBlock: { style: ht },
  paddingBlockStart: { style: ht },
  paddingBlockEnd: { style: ht },
  m: { style: pt },
  mt: { style: pt },
  mr: { style: pt },
  mb: { style: pt },
  ml: { style: pt },
  mx: { style: pt },
  my: { style: pt },
  margin: { style: pt },
  marginTop: { style: pt },
  marginRight: { style: pt },
  marginBottom: { style: pt },
  marginLeft: { style: pt },
  marginX: { style: pt },
  marginY: { style: pt },
  marginInline: { style: pt },
  marginInlineStart: { style: pt },
  marginInlineEnd: { style: pt },
  marginBlock: { style: pt },
  marginBlockStart: { style: pt },
  marginBlockEnd: { style: pt },
  displayPrint: { cssProperty: !1, transform: (t) => ({ '@media print': { display: t } }) },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  gap: { style: $u },
  rowGap: { style: Du },
  columnGap: { style: zu },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  position: {},
  zIndex: { themeKey: 'zIndex' },
  top: {},
  right: {},
  bottom: {},
  left: {},
  boxShadow: { themeKey: 'shadows' },
  width: { transform: un },
  maxWidth: { style: Cp },
  minWidth: { transform: un },
  height: { transform: un },
  maxHeight: { transform: un },
  minHeight: { transform: un },
  boxSizing: {},
  font: { themeKey: 'font' },
  fontFamily: { themeKey: 'typography' },
  fontSize: { themeKey: 'typography' },
  fontStyle: { themeKey: 'typography' },
  fontWeight: { themeKey: 'typography' },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: { cssProperty: !1, themeKey: 'typography' },
};
function YC(...t) {
  const r = t.reduce((i, s) => i.concat(Object.keys(s)), []),
    l = new Set(r);
  return t.every((i) => l.size === Object.keys(i).length);
}
function KC(t, r) {
  return typeof t == 'function' ? t(r) : t;
}
function XC() {
  function t(l, i, s, u) {
    const f = { [l]: i, theme: s },
      p = u[l];
    if (!p) return { [l]: i };
    const { cssProperty: m = l, themeKey: h, transform: y, style: v } = p;
    if (i == null) return null;
    if (h === 'typography' && i === 'inherit') return { [l]: i };
    const b = Au(s, h) || {};
    return v
      ? v(f)
      : wr(f, i, (S) => {
          let A = cu(b, y, S);
          return (
            S === A &&
              typeof S == 'string' &&
              (A = cu(b, y, `${l}${S === 'default' ? '' : ke(S)}`, S)),
            m === !1 ? A : { [m]: A }
          );
        });
  }
  function r(l) {
    const { sx: i, theme: s = {} } = l || {};
    if (!i) return null;
    const u = s.unstable_sxConfig ?? So;
    function f(p) {
      let m = p;
      if (typeof p == 'function') m = p(s);
      else if (typeof p != 'object') return p;
      if (!m) return null;
      const h = sC(s.breakpoints),
        y = Object.keys(h);
      let v = h;
      return (
        Object.keys(m).forEach((b) => {
          const w = KC(m[b], s);
          if (w != null)
            if (typeof w == 'object')
              if (u[b]) v = no(v, t(b, w, s, u));
              else {
                const S = wr({ theme: s }, w, (A) => ({ [b]: A }));
                YC(S, w) ? (v[b] = r({ sx: w, theme: s })) : (v = no(v, S));
              }
            else v = no(v, t(b, w, s, u));
        }),
        nC(s, uC(y, v))
      );
    }
    return Array.isArray(i) ? i.map(f) : f(i);
  }
  return r;
}
const Ua = XC();
Ua.filterProps = ['sx'];
function QC(t, r) {
  var i;
  const l = this;
  if (l.vars) {
    if (!((i = l.colorSchemes) != null && i[t]) || typeof l.getColorSchemeSelector != 'function')
      return {};
    let s = l.getColorSchemeSelector(t);
    return s === '&'
      ? r
      : ((s.includes('data-') || s.includes('.')) && (s = `*:where(${s.replace(/\s*&$/, '')}) &`),
        { [s]: r });
  }
  return l.palette.mode === t ? r : {};
}
function _u(t = {}, ...r) {
  const { breakpoints: l = {}, palette: i = {}, spacing: s, shape: u = {}, ...f } = t,
    p = tC(l),
    m = Gv(s);
  let h = Kt(
    {
      breakpoints: p,
      direction: 'ltr',
      components: {},
      palette: { mode: 'light', ...i },
      spacing: m,
      shape: { ...iC, ...u },
    },
    f,
  );
  return (
    (h = lC(h)),
    (h.applyStyles = QC),
    (h = r.reduce((y, v) => Kt(y, v), h)),
    (h.unstable_sxConfig = { ...So, ...(f == null ? void 0 : f.unstable_sxConfig) }),
    (h.unstable_sx = function (v) {
      return Ua({ sx: v, theme: this });
    }),
    h
  );
}
function WC(t) {
  return Object.keys(t).length === 0;
}
function IC(t = null) {
  const r = C.useContext(yo);
  return !r || WC(r) ? t : r;
}
const ZC = _u();
function xo(t = ZC) {
  return IC(t);
}
function JC({ styles: t, themeId: r, defaultTheme: l = {} }) {
  const i = xo(l),
    s = typeof t == 'function' ? t((r && i[r]) || i) : t;
  return L.jsx(ZE, { styles: s });
}
const e2 = (t) => {
  var i;
  const r = { systemProps: {}, otherProps: {} },
    l = ((i = t == null ? void 0 : t.theme) == null ? void 0 : i.unstable_sxConfig) ?? So;
  return (
    Object.keys(t).forEach((s) => {
      l[s] ? (r.systemProps[s] = t[s]) : (r.otherProps[s] = t[s]);
    }),
    r
  );
};
function Rp(t) {
  const { sx: r, ...l } = t,
    { systemProps: i, otherProps: s } = e2(l);
  let u;
  return (
    Array.isArray(r)
      ? (u = [i, ...r])
      : typeof r == 'function'
        ? (u = (...f) => {
            const p = r(...f);
            return In(p) ? { ...i, ...p } : i;
          })
        : (u = { ...i, ...r }),
    { ...s, sx: u }
  );
}
const sy = (t) => t,
  t2 = () => {
    let t = sy;
    return {
      configure(r) {
        t = r;
      },
      generate(r) {
        return t(r);
      },
      reset() {
        t = sy;
      },
    };
  },
  Vv = t2();
function Yv(t) {
  var r,
    l,
    i = '';
  if (typeof t == 'string' || typeof t == 'number') i += t;
  else if (typeof t == 'object')
    if (Array.isArray(t)) {
      var s = t.length;
      for (r = 0; r < s; r++) t[r] && (l = Yv(t[r])) && (i && (i += ' '), (i += l));
    } else for (l in t) t[l] && (i && (i += ' '), (i += l));
  return i;
}
function Oe() {
  for (var t, r, l = 0, i = '', s = arguments.length; l < s; l++)
    (t = arguments[l]) && (r = Yv(t)) && (i && (i += ' '), (i += r));
  return i;
}
function n2(t = {}) {
  const {
      themeId: r,
      defaultTheme: l,
      defaultClassName: i = 'MuiBox-root',
      generateClassName: s,
    } = t,
    u = Pv('div', { shouldForwardProp: (p) => p !== 'theme' && p !== 'sx' && p !== 'as' })(Ua);
  return C.forwardRef(function (m, h) {
    const y = xo(l),
      { className: v, component: b = 'div', ...w } = Rp(m);
    return L.jsx(u, {
      as: b,
      ref: h,
      className: Oe(v, s ? s(i) : i),
      theme: (r && y[r]) || y,
      ...w,
    });
  });
}
const r2 = {
  active: 'active',
  checked: 'checked',
  completed: 'completed',
  disabled: 'disabled',
  error: 'error',
  expanded: 'expanded',
  focused: 'focused',
  focusVisible: 'focusVisible',
  open: 'open',
  readOnly: 'readOnly',
  required: 'required',
  selected: 'selected',
};
function et(t, r, l = 'Mui') {
  const i = r2[r];
  return i ? `${l}-${i}` : `${Vv.generate(t)}-${r}`;
}
function tt(t, r, l = 'Mui') {
  const i = {};
  return (
    r.forEach((s) => {
      i[s] = et(t, s, l);
    }),
    i
  );
}
function Kv(t) {
  const { variants: r, ...l } = t,
    i = { variants: r, style: ly(l), isProcessed: !0 };
  return (
    i.style === l ||
      (r &&
        r.forEach((s) => {
          typeof s.style != 'function' && (s.style = ly(s.style));
        })),
    i
  );
}
const a2 = _u();
function Sd(t) {
  return t !== 'ownerState' && t !== 'theme' && t !== 'sx' && t !== 'as';
}
function l2(t) {
  return t ? (r, l) => l[t] : null;
}
function i2(t, r, l) {
  t.theme = s2(t.theme) ? l : t.theme[r] || t.theme;
}
function eu(t, r) {
  const l = typeof r == 'function' ? r(t) : r;
  if (Array.isArray(l)) return l.flatMap((i) => eu(t, i));
  if (Array.isArray(l == null ? void 0 : l.variants)) {
    let i;
    if (l.isProcessed) i = l.style;
    else {
      const { variants: s, ...u } = l;
      i = u;
    }
    return Xv(t, l.variants, [i]);
  }
  return l != null && l.isProcessed ? l.style : l;
}
function Xv(t, r, l = []) {
  var s;
  let i;
  e: for (let u = 0; u < r.length; u += 1) {
    const f = r[u];
    if (typeof f.props == 'function') {
      if ((i ?? (i = { ...t, ...t.ownerState, ownerState: t.ownerState }), !f.props(i))) continue;
    } else
      for (const p in f.props)
        if (t[p] !== f.props[p] && ((s = t.ownerState) == null ? void 0 : s[p]) !== f.props[p])
          continue e;
    typeof f.style == 'function'
      ? (i ?? (i = { ...t, ...t.ownerState, ownerState: t.ownerState }), l.push(f.style(i)))
      : l.push(f.style);
  }
  return l;
}
function Qv(t = {}) {
  const {
    themeId: r,
    defaultTheme: l = a2,
    rootShouldForwardProp: i = Sd,
    slotShouldForwardProp: s = Sd,
  } = t;
  function u(p) {
    i2(p, r, l);
  }
  return (p, m = {}) => {
    JE(p, (R) => R.filter((U) => U !== Ua));
    const {
        name: h,
        slot: y,
        skipVariantsResolver: v,
        skipSx: b,
        overridesResolver: w = l2(c2(y)),
        ...S
      } = m,
      A = v !== void 0 ? v : (y && y !== 'Root' && y !== 'root') || !1,
      O = b || !1;
    let M = Sd;
    y === 'Root' || y === 'root' ? (M = i) : y ? (M = s) : u2(p) && (M = void 0);
    const z = Pv(p, { shouldForwardProp: M, label: o2(), ...S }),
      E = (R) => {
        if (typeof R == 'function' && R.__emotion_real !== R)
          return function (q) {
            return eu(q, R);
          };
        if (In(R)) {
          const U = Kv(R);
          return U.variants
            ? function (V) {
                return eu(V, U);
              }
            : U.style;
        }
        return R;
      },
      D = (...R) => {
        const U = [],
          q = R.map(E),
          V = [];
        if (
          (U.push(u),
          h &&
            w &&
            V.push(function (I) {
              var j, te;
              const ne =
                (te = (j = I.theme.components) == null ? void 0 : j[h]) == null
                  ? void 0
                  : te.styleOverrides;
              if (!ne) return null;
              const Z = {};
              for (const ie in ne) Z[ie] = eu(I, ne[ie]);
              return w(I, Z);
            }),
          h &&
            !A &&
            V.push(function (I) {
              var Z, j;
              const ee = I.theme,
                ne =
                  (j = (Z = ee == null ? void 0 : ee.components) == null ? void 0 : Z[h]) == null
                    ? void 0
                    : j.variants;
              return ne ? Xv(I, ne) : null;
            }),
          O || V.push(Ua),
          Array.isArray(q[0]))
        ) {
          const P = q.shift(),
            I = new Array(U.length).fill(''),
            ee = new Array(V.length).fill('');
          let ne;
          (ne = [...I, ...P, ...ee]), (ne.raw = [...I, ...P.raw, ...ee]), U.unshift(ne);
        }
        const G = [...U, ...q, ...V],
          x = z(...G);
        return p.muiName && (x.muiName = p.muiName), x;
      };
    return z.withConfig && (D.withConfig = z.withConfig), D;
  };
}
function o2(t, r) {
  return void 0;
}
function s2(t) {
  for (const r in t) return !1;
  return !0;
}
function u2(t) {
  return typeof t == 'string' && t.charCodeAt(0) > 96;
}
function c2(t) {
  return t && t.charAt(0).toLowerCase() + t.slice(1);
}
const f2 = Qv();
function co(t, r) {
  const l = { ...r };
  for (const i in t)
    if (Object.prototype.hasOwnProperty.call(t, i)) {
      const s = i;
      if (s === 'components' || s === 'slots') l[s] = { ...t[s], ...l[s] };
      else if (s === 'componentsProps' || s === 'slotProps') {
        const u = t[s],
          f = r[s];
        if (!f) l[s] = u || {};
        else if (!u) l[s] = f;
        else {
          l[s] = { ...f };
          for (const p in u)
            if (Object.prototype.hasOwnProperty.call(u, p)) {
              const m = p;
              l[s][m] = co(u[m], f[m]);
            }
        }
      } else l[s] === void 0 && (l[s] = t[s]);
    }
  return l;
}
function d2(t) {
  const { theme: r, name: l, props: i } = t;
  return !r || !r.components || !r.components[l] || !r.components[l].defaultProps
    ? i
    : co(r.components[l].defaultProps, i);
}
function p2({ props: t, name: r, defaultTheme: l, themeId: i }) {
  let s = xo(l);
  return i && (s = s[i] || s), d2({ theme: s, name: r, props: t });
}
const ja = typeof window < 'u' ? C.useLayoutEffect : C.useEffect;
function h2(t, r = Number.MIN_SAFE_INTEGER, l = Number.MAX_SAFE_INTEGER) {
  return Math.max(r, Math.min(t, l));
}
function Tp(t, r = 0, l = 1) {
  return h2(t, r, l);
}
function m2(t) {
  t = t.slice(1);
  const r = new RegExp(`.{1,${t.length >= 6 ? 2 : 1}}`, 'g');
  let l = t.match(r);
  return (
    l && l[0].length === 1 && (l = l.map((i) => i + i)),
    l
      ? `rgb${l.length === 4 ? 'a' : ''}(${l.map((i, s) => (s < 3 ? parseInt(i, 16) : Math.round((parseInt(i, 16) / 255) * 1e3) / 1e3)).join(', ')})`
      : ''
  );
}
function ia(t) {
  if (t.type) return t;
  if (t.charAt(0) === '#') return ia(m2(t));
  const r = t.indexOf('('),
    l = t.substring(0, r);
  if (!['rgb', 'rgba', 'hsl', 'hsla', 'color'].includes(l)) throw new Error(Tr(9, t));
  let i = t.substring(r + 1, t.length - 1),
    s;
  if (l === 'color') {
    if (
      ((i = i.split(' ')),
      (s = i.shift()),
      i.length === 4 && i[3].charAt(0) === '/' && (i[3] = i[3].slice(1)),
      !['srgb', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec-2020'].includes(s))
    )
      throw new Error(Tr(10, s));
  } else i = i.split(',');
  return (i = i.map((u) => parseFloat(u))), { type: l, values: i, colorSpace: s };
}
const g2 = (t) => {
    const r = ia(t);
    return r.values
      .slice(0, 3)
      .map((l, i) => (r.type.includes('hsl') && i !== 0 ? `${l}%` : l))
      .join(' ');
  },
  Ji = (t, r) => {
    try {
      return g2(t);
    } catch {
      return t;
    }
  };
function Bu(t) {
  const { type: r, colorSpace: l } = t;
  let { values: i } = t;
  return (
    r.includes('rgb')
      ? (i = i.map((s, u) => (u < 3 ? parseInt(s, 10) : s)))
      : r.includes('hsl') && ((i[1] = `${i[1]}%`), (i[2] = `${i[2]}%`)),
    r.includes('color') ? (i = `${l} ${i.join(' ')}`) : (i = `${i.join(', ')}`),
    `${r}(${i})`
  );
}
function Wv(t) {
  t = ia(t);
  const { values: r } = t,
    l = r[0],
    i = r[1] / 100,
    s = r[2] / 100,
    u = i * Math.min(s, 1 - s),
    f = (h, y = (h + l / 30) % 12) => s - u * Math.max(Math.min(y - 3, 9 - y, 1), -1);
  let p = 'rgb';
  const m = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
  return t.type === 'hsla' && ((p += 'a'), m.push(r[3])), Bu({ type: p, values: m });
}
function Pd(t) {
  t = ia(t);
  let r = t.type === 'hsl' || t.type === 'hsla' ? ia(Wv(t)).values : t.values;
  return (
    (r = r.map(
      (l) => (
        t.type !== 'color' && (l /= 255), l <= 0.03928 ? l / 12.92 : ((l + 0.055) / 1.055) ** 2.4
      ),
    )),
    Number((0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2]).toFixed(3))
  );
}
function y2(t, r) {
  const l = Pd(t),
    i = Pd(r);
  return (Math.max(l, i) + 0.05) / (Math.min(l, i) + 0.05);
}
function aa(t, r) {
  return (
    (t = ia(t)),
    (r = Tp(r)),
    (t.type === 'rgb' || t.type === 'hsl') && (t.type += 'a'),
    t.type === 'color' ? (t.values[3] = `/${r}`) : (t.values[3] = r),
    Bu(t)
  );
}
function Fs(t, r, l) {
  try {
    return aa(t, r);
  } catch {
    return t;
  }
}
function wp(t, r) {
  if (((t = ia(t)), (r = Tp(r)), t.type.includes('hsl'))) t.values[2] *= 1 - r;
  else if (t.type.includes('rgb') || t.type.includes('color'))
    for (let l = 0; l < 3; l += 1) t.values[l] *= 1 - r;
  return Bu(t);
}
function Xe(t, r, l) {
  try {
    return wp(t, r);
  } catch {
    return t;
  }
}
function Ap(t, r) {
  if (((t = ia(t)), (r = Tp(r)), t.type.includes('hsl'))) t.values[2] += (100 - t.values[2]) * r;
  else if (t.type.includes('rgb'))
    for (let l = 0; l < 3; l += 1) t.values[l] += (255 - t.values[l]) * r;
  else if (t.type.includes('color'))
    for (let l = 0; l < 3; l += 1) t.values[l] += (1 - t.values[l]) * r;
  return Bu(t);
}
function Qe(t, r, l) {
  try {
    return Ap(t, r);
  } catch {
    return t;
  }
}
function v2(t, r = 0.15) {
  return Pd(t) > 0.5 ? wp(t, r) : Ap(t, r);
}
function Gs(t, r, l) {
  try {
    return v2(t, r);
  } catch {
    return t;
  }
}
function uy(...t) {
  return t.reduce(
    (r, l) =>
      l == null
        ? r
        : function (...s) {
            r.apply(this, s), l.apply(this, s);
          },
    () => {},
  );
}
function Iv(t, r = 166) {
  let l;
  function i(...s) {
    const u = () => {
      t.apply(this, s);
    };
    clearTimeout(l), (l = setTimeout(u, r));
  }
  return (
    (i.clear = () => {
      clearTimeout(l);
    }),
    i
  );
}
function tu(t, r) {
  var l, i, s;
  return (
    C.isValidElement(t) &&
    r.indexOf(
      t.type.muiName ??
        ((s = (i = (l = t.type) == null ? void 0 : l._payload) == null ? void 0 : i.value) == null
          ? void 0
          : s.muiName),
    ) !== -1
  );
}
function Un(t) {
  return (t && t.ownerDocument) || document;
}
function Ar(t) {
  return Un(t).defaultView || window;
}
function qd(t, r) {
  typeof t == 'function' ? t(r) : t && (t.current = r);
}
let cy = 0;
function b2(t) {
  const [r, l] = C.useState(t),
    i = t || r;
  return (
    C.useEffect(() => {
      r == null && ((cy += 1), l(`mui-${cy}`));
    }, [r]),
    i
  );
}
const S2 = { ...Ud },
  fy = S2.useId;
function Zv(t) {
  if (fy !== void 0) {
    const r = fy();
    return t ?? r;
  }
  return b2(t);
}
function dy({ controlled: t, default: r, name: l, state: i = 'value' }) {
  const { current: s } = C.useRef(t !== void 0),
    [u, f] = C.useState(r),
    p = s ? t : u,
    m = C.useCallback((h) => {
      s || f(h);
    }, []);
  return [p, m];
}
function Dl(t) {
  const r = C.useRef(t);
  return (
    ja(() => {
      r.current = t;
    }),
    C.useRef((...l) => (0, r.current)(...l)).current
  );
}
function Xt(...t) {
  return C.useMemo(
    () =>
      t.every((r) => r == null)
        ? null
        : (r) => {
            t.forEach((l) => {
              qd(l, r);
            });
          },
    t,
  );
}
const py = {};
function Jv(t, r) {
  const l = C.useRef(py);
  return l.current === py && (l.current = t(r)), l;
}
const x2 = [];
function E2(t) {
  C.useEffect(t, x2);
}
class Op {
  constructor() {
    Pi(this, 'currentId', null);
    Pi(this, 'clear', () => {
      this.currentId !== null && (clearTimeout(this.currentId), (this.currentId = null));
    });
    Pi(this, 'disposeEffect', () => this.clear);
  }
  static create() {
    return new Op();
  }
  start(r, l) {
    this.clear(),
      (this.currentId = setTimeout(() => {
        (this.currentId = null), l();
      }, r));
  }
}
function eb() {
  const t = Jv(Op.create).current;
  return E2(t.disposeEffect), t;
}
function hy(t) {
  try {
    return t.matches(':focus-visible');
  } catch {}
  return !1;
}
function tb(t = window) {
  const r = t.document.documentElement.clientWidth;
  return t.innerWidth - r;
}
function rt(t, r, l = void 0) {
  const i = {};
  for (const s in t) {
    const u = t[s];
    let f = '',
      p = !0;
    for (let m = 0; m < u.length; m += 1) {
      const h = u[m];
      h && ((f += (p === !0 ? '' : ' ') + r(h)), (p = !1), l && l[h] && (f += ' ' + l[h]));
    }
    i[s] = f;
  }
  return i;
}
function C2(t) {
  return typeof t == 'string';
}
function nb(t, r, l) {
  return t === void 0 || C2(t) ? r : { ...r, ownerState: { ...r.ownerState, ...l } };
}
function rb(t, r = []) {
  if (t === void 0) return {};
  const l = {};
  return (
    Object.keys(t)
      .filter((i) => i.match(/^on[A-Z]/) && typeof t[i] == 'function' && !r.includes(i))
      .forEach((i) => {
        l[i] = t[i];
      }),
    l
  );
}
function my(t) {
  if (t === void 0) return {};
  const r = {};
  return (
    Object.keys(t)
      .filter((l) => !(l.match(/^on[A-Z]/) && typeof t[l] == 'function'))
      .forEach((l) => {
        r[l] = t[l];
      }),
    r
  );
}
function ab(t) {
  const {
    getSlotProps: r,
    additionalProps: l,
    externalSlotProps: i,
    externalForwardedProps: s,
    className: u,
  } = t;
  if (!r) {
    const w = Oe(
        l == null ? void 0 : l.className,
        u,
        s == null ? void 0 : s.className,
        i == null ? void 0 : i.className,
      ),
      S = {
        ...(l == null ? void 0 : l.style),
        ...(s == null ? void 0 : s.style),
        ...(i == null ? void 0 : i.style),
      },
      A = { ...l, ...s, ...i };
    return (
      w.length > 0 && (A.className = w),
      Object.keys(S).length > 0 && (A.style = S),
      { props: A, internalRef: void 0 }
    );
  }
  const f = rb({ ...s, ...i }),
    p = my(i),
    m = my(s),
    h = r(f),
    y = Oe(
      h == null ? void 0 : h.className,
      l == null ? void 0 : l.className,
      u,
      s == null ? void 0 : s.className,
      i == null ? void 0 : i.className,
    ),
    v = {
      ...(h == null ? void 0 : h.style),
      ...(l == null ? void 0 : l.style),
      ...(s == null ? void 0 : s.style),
      ...(i == null ? void 0 : i.style),
    },
    b = { ...h, ...l, ...m, ...p };
  return (
    y.length > 0 && (b.className = y),
    Object.keys(v).length > 0 && (b.style = v),
    { props: b, internalRef: h.ref }
  );
}
function lb(t, r, l) {
  return typeof t == 'function' ? t(r, l) : t;
}
function gy(t) {
  var v;
  const {
      elementType: r,
      externalSlotProps: l,
      ownerState: i,
      skipResolvingSlotProps: s = !1,
      ...u
    } = t,
    f = s ? {} : lb(l, i),
    { props: p, internalRef: m } = ab({ ...u, externalSlotProps: f }),
    h = Xt(m, f == null ? void 0 : f.ref, (v = t.additionalProps) == null ? void 0 : v.ref);
  return nb(r, { ...p, ref: h }, i);
}
function Eo(t) {
  var r;
  return parseInt(C.version, 10) >= 19
    ? ((r = t == null ? void 0 : t.props) == null ? void 0 : r.ref) || null
    : (t == null ? void 0 : t.ref) || null;
}
const R2 = C.createContext(),
  T2 = () => C.useContext(R2) ?? !1,
  w2 = C.createContext(void 0);
function A2(t) {
  const { theme: r, name: l, props: i } = t;
  if (!r || !r.components || !r.components[l]) return i;
  const s = r.components[l];
  return s.defaultProps ? co(s.defaultProps, i) : !s.styleOverrides && !s.variants ? co(s, i) : i;
}
function O2({ props: t, name: r }) {
  const l = C.useContext(w2);
  return A2({ props: t, name: r, theme: { components: l } });
}
const yy = { theme: void 0 };
function M2(t) {
  let r, l;
  return function (s) {
    let u = r;
    return (
      (u === void 0 || s.theme !== l) &&
        ((yy.theme = s.theme), (u = Kv(t(yy))), (r = u), (l = s.theme)),
      u
    );
  };
}
function $2(t = '') {
  function r(...i) {
    if (!i.length) return '';
    const s = i[0];
    return typeof s == 'string' &&
      !s.match(
        /(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/,
      )
      ? `, var(--${t ? `${t}-` : ''}${s}${r(...i.slice(1))})`
      : `, ${s}`;
  }
  return (i, ...s) => `var(--${t ? `${t}-` : ''}${i}${r(...s)})`;
}
const vy = (t, r, l, i = []) => {
    let s = t;
    r.forEach((u, f) => {
      f === r.length - 1
        ? Array.isArray(s)
          ? (s[Number(u)] = l)
          : s && typeof s == 'object' && (s[u] = l)
        : s && typeof s == 'object' && (s[u] || (s[u] = i.includes(u) ? [] : {}), (s = s[u]));
    });
  },
  z2 = (t, r, l) => {
    function i(s, u = [], f = []) {
      Object.entries(s).forEach(([p, m]) => {
        (!l || !l([...u, p])) &&
          m != null &&
          (typeof m == 'object' && Object.keys(m).length > 0
            ? i(m, [...u, p], Array.isArray(m) ? [...f, p] : f)
            : r([...u, p], m, f));
      });
    }
    i(t);
  },
  D2 = (t, r) =>
    typeof r == 'number'
      ? ['lineHeight', 'fontWeight', 'opacity', 'zIndex'].some((i) => t.includes(i)) ||
        t[t.length - 1].toLowerCase().includes('opacity')
        ? r
        : `${r}px`
      : r;
function xd(t, r) {
  const { prefix: l, shouldSkipGeneratingVar: i } = r || {},
    s = {},
    u = {},
    f = {};
  return (
    z2(
      t,
      (p, m, h) => {
        if ((typeof m == 'string' || typeof m == 'number') && (!i || !i(p, m))) {
          const y = `--${l ? `${l}-` : ''}${p.join('-')}`,
            v = D2(p, m);
          Object.assign(s, { [y]: v }), vy(u, p, `var(${y})`, h), vy(f, p, `var(${y}, ${v})`, h);
        }
      },
      (p) => p[0] === 'vars',
    ),
    { css: s, vars: u, varsWithDefaults: f }
  );
}
function _2(t, r = {}) {
  const { getSelector: l = O, disableCssColorScheme: i, colorSchemeSelector: s } = r,
    { colorSchemes: u = {}, components: f, defaultColorScheme: p = 'light', ...m } = t,
    { vars: h, css: y, varsWithDefaults: v } = xd(m, r);
  let b = v;
  const w = {},
    { [p]: S, ...A } = u;
  if (
    (Object.entries(A || {}).forEach(([E, D]) => {
      const { vars: R, css: U, varsWithDefaults: q } = xd(D, r);
      (b = Kt(b, q)), (w[E] = { css: U, vars: R });
    }),
    S)
  ) {
    const { css: E, vars: D, varsWithDefaults: R } = xd(S, r);
    (b = Kt(b, R)), (w[p] = { css: E, vars: D });
  }
  function O(E, D) {
    var U, q;
    let R = s;
    if (
      (s === 'class' && (R = '.%s'),
      s === 'data' && (R = '[data-%s]'),
      s != null && s.startsWith('data-') && !s.includes('%s') && (R = `[${s}="%s"]`),
      E)
    ) {
      if (R === 'media')
        return t.defaultColorScheme === E
          ? ':root'
          : {
              [`@media (prefers-color-scheme: ${((q = (U = u[E]) == null ? void 0 : U.palette) == null ? void 0 : q.mode) || E})`]:
                { ':root': D },
            };
      if (R)
        return t.defaultColorScheme === E
          ? `:root, ${R.replace('%s', String(E))}`
          : R.replace('%s', String(E));
    }
    return ':root';
  }
  return {
    vars: b,
    generateThemeVars: () => {
      let E = { ...h };
      return (
        Object.entries(w).forEach(([, { vars: D }]) => {
          E = Kt(E, D);
        }),
        E
      );
    },
    generateStyleSheets: () => {
      var V, G;
      const E = [],
        D = t.defaultColorScheme || 'light';
      function R(x, P) {
        Object.keys(P).length && E.push(typeof x == 'string' ? { [x]: { ...P } } : x);
      }
      R(l(void 0, { ...y }), y);
      const { [D]: U, ...q } = w;
      if (U) {
        const { css: x } = U,
          P = (G = (V = u[D]) == null ? void 0 : V.palette) == null ? void 0 : G.mode,
          I = !i && P ? { colorScheme: P, ...x } : { ...x };
        R(l(D, { ...I }), I);
      }
      return (
        Object.entries(q).forEach(([x, { css: P }]) => {
          var ne, Z;
          const I = (Z = (ne = u[x]) == null ? void 0 : ne.palette) == null ? void 0 : Z.mode,
            ee = !i && I ? { colorScheme: I, ...P } : { ...P };
          R(l(x, { ...ee }), ee);
        }),
        E
      );
    },
  };
}
function B2(t) {
  return function (l) {
    return t === 'media'
      ? `@media (prefers-color-scheme: ${l})`
      : t
        ? t.startsWith('data-') && !t.includes('%s')
          ? `[${t}="${l}"] &`
          : t === 'class'
            ? `.${l} &`
            : t === 'data'
              ? `[data-${l}] &`
              : `${t.replace('%s', l)} &`
        : '&';
  };
}
const N2 = (t, r) => t.filter((l) => r.includes(l)),
  jl = (t, r, l) => {
    const i = t.keys[0];
    Array.isArray(r)
      ? r.forEach((s, u) => {
          l((f, p) => {
            u <= t.keys.length - 1 && (u === 0 ? Object.assign(f, p) : (f[t.up(t.keys[u])] = p));
          }, s);
        })
      : r && typeof r == 'object'
        ? (Object.keys(r).length > t.keys.length ? t.keys : N2(t.keys, Object.keys(r))).forEach(
            (u) => {
              if (t.keys.includes(u)) {
                const f = r[u];
                f !== void 0 &&
                  l((p, m) => {
                    i === u ? Object.assign(p, m) : (p[t.up(u)] = m);
                  }, f);
              }
            },
          )
        : (typeof r == 'number' || typeof r == 'string') &&
          l((s, u) => {
            Object.assign(s, u);
          }, r);
  };
function fu(t) {
  return `--Grid-${t}Spacing`;
}
function Nu(t) {
  return `--Grid-parent-${t}Spacing`;
}
const by = '--Grid-columns',
  _l = '--Grid-parent-columns',
  k2 = ({ theme: t, ownerState: r }) => {
    const l = {};
    return (
      jl(t.breakpoints, r.size, (i, s) => {
        let u = {};
        s === 'grow' && (u = { flexBasis: 0, flexGrow: 1, maxWidth: '100%' }),
          s === 'auto' &&
            (u = {
              flexBasis: 'auto',
              flexGrow: 0,
              flexShrink: 0,
              maxWidth: 'none',
              width: 'auto',
            }),
          typeof s == 'number' &&
            (u = {
              flexGrow: 0,
              flexBasis: 'auto',
              width: `calc(100% * ${s} / var(${_l}) - (var(${_l}) - ${s}) * (var(${Nu('column')}) / var(${_l})))`,
            }),
          i(l, u);
      }),
      l
    );
  },
  U2 = ({ theme: t, ownerState: r }) => {
    const l = {};
    return (
      jl(t.breakpoints, r.offset, (i, s) => {
        let u = {};
        s === 'auto' && (u = { marginLeft: 'auto' }),
          typeof s == 'number' &&
            (u = {
              marginLeft:
                s === 0
                  ? '0px'
                  : `calc(100% * ${s} / var(${_l}) + var(${Nu('column')}) * ${s} / var(${_l}))`,
            }),
          i(l, u);
      }),
      l
    );
  },
  j2 = ({ theme: t, ownerState: r }) => {
    if (!r.container) return {};
    const l = { [by]: 12 };
    return (
      jl(t.breakpoints, r.columns, (i, s) => {
        const u = s ?? 12;
        i(l, { [by]: u, '> *': { [_l]: u } });
      }),
      l
    );
  },
  L2 = ({ theme: t, ownerState: r }) => {
    if (!r.container) return {};
    const l = {};
    return (
      jl(t.breakpoints, r.rowSpacing, (i, s) => {
        var f;
        const u = typeof s == 'string' ? s : (f = t.spacing) == null ? void 0 : f.call(t, s);
        i(l, { [fu('row')]: u, '> *': { [Nu('row')]: u } });
      }),
      l
    );
  },
  H2 = ({ theme: t, ownerState: r }) => {
    if (!r.container) return {};
    const l = {};
    return (
      jl(t.breakpoints, r.columnSpacing, (i, s) => {
        var f;
        const u = typeof s == 'string' ? s : (f = t.spacing) == null ? void 0 : f.call(t, s);
        i(l, { [fu('column')]: u, '> *': { [Nu('column')]: u } });
      }),
      l
    );
  },
  P2 = ({ theme: t, ownerState: r }) => {
    if (!r.container) return {};
    const l = {};
    return (
      jl(t.breakpoints, r.direction, (i, s) => {
        i(l, { flexDirection: s });
      }),
      l
    );
  },
  q2 = ({ ownerState: t }) => ({
    minWidth: 0,
    boxSizing: 'border-box',
    ...(t.container && {
      display: 'flex',
      flexWrap: 'wrap',
      ...(t.wrap && t.wrap !== 'wrap' && { flexWrap: t.wrap }),
      gap: `var(${fu('row')}) var(${fu('column')})`,
    }),
  }),
  F2 = (t) => {
    const r = [];
    return (
      Object.entries(t).forEach(([l, i]) => {
        i !== !1 && i !== void 0 && r.push(`grid-${l}-${String(i)}`);
      }),
      r
    );
  },
  G2 = (t, r = 'xs') => {
    function l(i) {
      return i === void 0
        ? !1
        : (typeof i == 'string' && !Number.isNaN(Number(i))) || (typeof i == 'number' && i > 0);
    }
    if (l(t)) return [`spacing-${r}-${String(t)}`];
    if (typeof t == 'object' && !Array.isArray(t)) {
      const i = [];
      return (
        Object.entries(t).forEach(([s, u]) => {
          l(u) && i.push(`spacing-${s}-${String(u)}`);
        }),
        i
      );
    }
    return [];
  },
  V2 = (t) =>
    t === void 0
      ? []
      : typeof t == 'object'
        ? Object.entries(t).map(([r, l]) => `direction-${r}-${l}`)
        : [`direction-xs-${String(t)}`],
  Y2 = _u(),
  K2 = f2('div', { name: 'MuiGrid', slot: 'Root', overridesResolver: (t, r) => r.root });
function X2(t) {
  return p2({ props: t, name: 'MuiGrid', defaultTheme: Y2 });
}
function Q2(t = {}) {
  const {
      createStyledComponent: r = K2,
      useThemeProps: l = X2,
      useTheme: i = xo,
      componentName: s = 'MuiGrid',
    } = t,
    u = (h, y) => {
      const { container: v, direction: b, spacing: w, wrap: S, size: A } = h,
        O = {
          root: [
            'root',
            v && 'container',
            S !== 'wrap' && `wrap-xs-${String(S)}`,
            ...V2(b),
            ...F2(A),
            ...(v ? G2(w, y.breakpoints.keys[0]) : []),
          ],
        };
      return rt(O, (M) => et(s, M), {});
    };
  function f(h, y, v = () => !0) {
    const b = {};
    return (
      h === null ||
        (Array.isArray(h)
          ? h.forEach((w, S) => {
              w !== null && v(w) && y.keys[S] && (b[y.keys[S]] = w);
            })
          : typeof h == 'object'
            ? Object.keys(h).forEach((w) => {
                const S = h[w];
                S != null && v(S) && (b[w] = S);
              })
            : (b[y.keys[0]] = h)),
      b
    );
  }
  const p = r(j2, H2, L2, k2, P2, q2, U2),
    m = C.forwardRef(function (y, v) {
      const b = i(),
        w = l(y),
        S = Rp(w),
        {
          className: A,
          children: O,
          columns: M = 12,
          container: z = !1,
          component: E = 'div',
          direction: D = 'row',
          wrap: R = 'wrap',
          size: U = {},
          offset: q = {},
          spacing: V = 0,
          rowSpacing: G = V,
          columnSpacing: x = V,
          unstable_level: P = 0,
          ...I
        } = S,
        ee = f(U, b.breakpoints, (K) => K !== !1),
        ne = f(q, b.breakpoints),
        Z = y.columns ?? (P ? void 0 : M),
        j = y.spacing ?? (P ? void 0 : V),
        te = y.rowSpacing ?? y.spacing ?? (P ? void 0 : G),
        ie = y.columnSpacing ?? y.spacing ?? (P ? void 0 : x),
        oe = {
          ...S,
          level: P,
          columns: Z,
          container: z,
          direction: D,
          wrap: R,
          spacing: j,
          rowSpacing: te,
          columnSpacing: ie,
          size: ee,
          offset: ne,
        },
        _ = u(oe, b);
      return L.jsx(p, {
        ref: v,
        as: E,
        ownerState: oe,
        className: Oe(_.root, A),
        ...I,
        children: C.Children.map(O, (K) => {
          var se;
          return C.isValidElement(K) && tu(K, ['Grid']) && z && K.props.container
            ? C.cloneElement(K, {
                unstable_level: ((se = K.props) == null ? void 0 : se.unstable_level) ?? P + 1,
              })
            : K;
        }),
      });
    });
  return (m.muiName = 'Grid'), m;
}
function ib() {
  return {
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    background: { paper: io.white, default: io.white },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.04)',
      hoverOpacity: 0.04,
      selected: 'rgba(0, 0, 0, 0.08)',
      selectedOpacity: 0.08,
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(0, 0, 0, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  };
}
const W2 = ib();
function ob() {
  return {
    text: {
      primary: io.white,
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    background: { paper: '#121212', default: '#121212' },
    action: {
      active: io.white,
      hover: 'rgba(255, 255, 255, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(255, 255, 255, 0.16)',
      selectedOpacity: 0.16,
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(255, 255, 255, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
}
const Sy = ob();
function xy(t, r, l, i) {
  const s = i.light || i,
    u = i.dark || i * 1.5;
  t[r] ||
    (t.hasOwnProperty(l)
      ? (t[r] = t[l])
      : r === 'light'
        ? (t.light = Ap(t.main, s))
        : r === 'dark' && (t.dark = wp(t.main, u)));
}
function I2(t = 'light') {
  return t === 'dark'
    ? { main: Rl[200], light: Rl[50], dark: Rl[400] }
    : { main: Rl[700], light: Rl[400], dark: Rl[800] };
}
function Z2(t = 'light') {
  return t === 'dark'
    ? { main: Cl[200], light: Cl[50], dark: Cl[400] }
    : { main: Cl[500], light: Cl[300], dark: Cl[700] };
}
function J2(t = 'light') {
  return t === 'dark'
    ? { main: El[500], light: El[300], dark: El[700] }
    : { main: El[700], light: El[400], dark: El[800] };
}
function eR(t = 'light') {
  return t === 'dark'
    ? { main: Tl[400], light: Tl[300], dark: Tl[700] }
    : { main: Tl[700], light: Tl[500], dark: Tl[900] };
}
function tR(t = 'light') {
  return t === 'dark'
    ? { main: wl[400], light: wl[300], dark: wl[700] }
    : { main: wl[800], light: wl[500], dark: wl[900] };
}
function nR(t = 'light') {
  return t === 'dark'
    ? { main: Gi[400], light: Gi[300], dark: Gi[700] }
    : { main: '#ed6c02', light: Gi[500], dark: Gi[900] };
}
function Mp(t) {
  const { mode: r = 'light', contrastThreshold: l = 3, tonalOffset: i = 0.2, ...s } = t,
    u = t.primary || I2(r),
    f = t.secondary || Z2(r),
    p = t.error || J2(r),
    m = t.info || eR(r),
    h = t.success || tR(r),
    y = t.warning || nR(r);
  function v(A) {
    return y2(A, Sy.text.primary) >= l ? Sy.text.primary : W2.text.primary;
  }
  const b = ({
    color: A,
    name: O,
    mainShade: M = 500,
    lightShade: z = 300,
    darkShade: E = 700,
  }) => {
    if (((A = { ...A }), !A.main && A[M] && (A.main = A[M]), !A.hasOwnProperty('main')))
      throw new Error(Tr(11, O ? ` (${O})` : '', M));
    if (typeof A.main != 'string')
      throw new Error(Tr(12, O ? ` (${O})` : '', JSON.stringify(A.main)));
    return (
      xy(A, 'light', z, i), xy(A, 'dark', E, i), A.contrastText || (A.contrastText = v(A.main)), A
    );
  };
  let w;
  return (
    r === 'light' ? (w = ib()) : r === 'dark' && (w = ob()),
    Kt(
      {
        common: { ...io },
        mode: r,
        primary: b({ color: u, name: 'primary' }),
        secondary: b({
          color: f,
          name: 'secondary',
          mainShade: 'A400',
          lightShade: 'A200',
          darkShade: 'A700',
        }),
        error: b({ color: p, name: 'error' }),
        warning: b({ color: y, name: 'warning' }),
        info: b({ color: m, name: 'info' }),
        success: b({ color: h, name: 'success' }),
        grey: Qx,
        contrastThreshold: l,
        getContrastText: v,
        augmentColor: b,
        tonalOffset: i,
        ...w,
      },
      s,
    )
  );
}
function rR(t) {
  const r = {};
  return (
    Object.entries(t).forEach((i) => {
      const [s, u] = i;
      typeof u == 'object' &&
        (r[s] =
          `${u.fontStyle ? `${u.fontStyle} ` : ''}${u.fontVariant ? `${u.fontVariant} ` : ''}${u.fontWeight ? `${u.fontWeight} ` : ''}${u.fontStretch ? `${u.fontStretch} ` : ''}${u.fontSize || ''}${u.lineHeight ? `/${u.lineHeight} ` : ''}${u.fontFamily || ''}`);
    }),
    r
  );
}
function aR(t, r) {
  return {
    toolbar: {
      minHeight: 56,
      [t.up('xs')]: { '@media (orientation: landscape)': { minHeight: 48 } },
      [t.up('sm')]: { minHeight: 64 },
    },
    ...r,
  };
}
function lR(t) {
  return Math.round(t * 1e5) / 1e5;
}
const Ey = { textTransform: 'uppercase' },
  Cy = '"Roboto", "Helvetica", "Arial", sans-serif';
function iR(t, r) {
  const {
      fontFamily: l = Cy,
      fontSize: i = 14,
      fontWeightLight: s = 300,
      fontWeightRegular: u = 400,
      fontWeightMedium: f = 500,
      fontWeightBold: p = 700,
      htmlFontSize: m = 16,
      allVariants: h,
      pxToRem: y,
      ...v
    } = typeof r == 'function' ? r(t) : r,
    b = i / 14,
    w = y || ((O) => `${(O / m) * b}rem`),
    S = (O, M, z, E, D) => ({
      fontFamily: l,
      fontWeight: O,
      fontSize: w(M),
      lineHeight: z,
      ...(l === Cy ? { letterSpacing: `${lR(E / M)}em` } : {}),
      ...D,
      ...h,
    }),
    A = {
      h1: S(s, 96, 1.167, -1.5),
      h2: S(s, 60, 1.2, -0.5),
      h3: S(u, 48, 1.167, 0),
      h4: S(u, 34, 1.235, 0.25),
      h5: S(u, 24, 1.334, 0),
      h6: S(f, 20, 1.6, 0.15),
      subtitle1: S(u, 16, 1.75, 0.15),
      subtitle2: S(f, 14, 1.57, 0.1),
      body1: S(u, 16, 1.5, 0.15),
      body2: S(u, 14, 1.43, 0.15),
      button: S(f, 14, 1.75, 0.4, Ey),
      caption: S(u, 12, 1.66, 0.4),
      overline: S(u, 12, 2.66, 1, Ey),
      inherit: {
        fontFamily: 'inherit',
        fontWeight: 'inherit',
        fontSize: 'inherit',
        lineHeight: 'inherit',
        letterSpacing: 'inherit',
      },
    };
  return Kt(
    {
      htmlFontSize: m,
      pxToRem: w,
      fontFamily: l,
      fontSize: i,
      fontWeightLight: s,
      fontWeightRegular: u,
      fontWeightMedium: f,
      fontWeightBold: p,
      ...A,
    },
    v,
    { clone: !1 },
  );
}
const oR = 0.2,
  sR = 0.14,
  uR = 0.12;
function nt(...t) {
  return [
    `${t[0]}px ${t[1]}px ${t[2]}px ${t[3]}px rgba(0,0,0,${oR})`,
    `${t[4]}px ${t[5]}px ${t[6]}px ${t[7]}px rgba(0,0,0,${sR})`,
    `${t[8]}px ${t[9]}px ${t[10]}px ${t[11]}px rgba(0,0,0,${uR})`,
  ].join(',');
}
const cR = [
    'none',
    nt(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    nt(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    nt(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    nt(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    nt(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    nt(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    nt(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    nt(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    nt(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    nt(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    nt(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    nt(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    nt(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    nt(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    nt(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    nt(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    nt(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    nt(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    nt(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    nt(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    nt(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    nt(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    nt(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    nt(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  fR = {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },
  dR = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function Ry(t) {
  return `${Math.round(t)}ms`;
}
function pR(t) {
  if (!t) return 0;
  const r = t / 36;
  return Math.min(Math.round((4 + 15 * r ** 0.25 + r / 5) * 10), 3e3);
}
function hR(t) {
  const r = { ...fR, ...t.easing },
    l = { ...dR, ...t.duration };
  return {
    getAutoHeightDuration: pR,
    create: (s = ['all'], u = {}) => {
      const { duration: f = l.standard, easing: p = r.easeInOut, delay: m = 0, ...h } = u;
      return (Array.isArray(s) ? s : [s])
        .map(
          (y) =>
            `${y} ${typeof f == 'string' ? f : Ry(f)} ${p} ${typeof m == 'string' ? m : Ry(m)}`,
        )
        .join(',');
    },
    ...t,
    easing: r,
    duration: l,
  };
}
const mR = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
};
function gR(t) {
  return (
    In(t) ||
    typeof t > 'u' ||
    typeof t == 'string' ||
    typeof t == 'boolean' ||
    typeof t == 'number' ||
    Array.isArray(t)
  );
}
function sb(t = {}) {
  const r = { ...t };
  function l(i) {
    const s = Object.entries(i);
    for (let u = 0; u < s.length; u++) {
      const [f, p] = s[u];
      !gR(p) || f.startsWith('unstable_') ? delete i[f] : In(p) && ((i[f] = { ...p }), l(i[f]));
    }
  }
  return (
    l(r),
    `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(r, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`
  );
}
function Fd(t = {}, ...r) {
  const {
    breakpoints: l,
    mixins: i = {},
    spacing: s,
    palette: u = {},
    transitions: f = {},
    typography: p = {},
    shape: m,
    ...h
  } = t;
  if (t.vars) throw new Error(Tr(20));
  const y = Mp(u),
    v = _u(t);
  let b = Kt(v, {
    mixins: aR(v.breakpoints, i),
    palette: y,
    shadows: cR.slice(),
    typography: iR(y, p),
    transitions: hR(f),
    zIndex: { ...mR },
  });
  return (
    (b = Kt(b, h)),
    (b = r.reduce((w, S) => Kt(w, S), b)),
    (b.unstable_sxConfig = { ...So, ...(h == null ? void 0 : h.unstable_sxConfig) }),
    (b.unstable_sx = function (S) {
      return Ua({ sx: S, theme: this });
    }),
    (b.toRuntimeSource = sb),
    b
  );
}
function Gd(t) {
  let r;
  return t < 1 ? (r = 5.11916 * t ** 2) : (r = 4.5 * Math.log(t + 1) + 2), Math.round(r * 10) / 1e3;
}
const yR = [...Array(25)].map((t, r) => {
  if (r === 0) return 'none';
  const l = Gd(r);
  return `linear-gradient(rgba(255 255 255 / ${l}), rgba(255 255 255 / ${l}))`;
});
function ub(t) {
  return {
    inputPlaceholder: t === 'dark' ? 0.5 : 0.42,
    inputUnderline: t === 'dark' ? 0.7 : 0.42,
    switchTrackDisabled: t === 'dark' ? 0.2 : 0.12,
    switchTrack: t === 'dark' ? 0.3 : 0.38,
  };
}
function cb(t) {
  return t === 'dark' ? yR : [];
}
function vR(t) {
  const { palette: r = { mode: 'light' }, opacity: l, overlays: i, ...s } = t,
    u = Mp(r);
  return { palette: u, opacity: { ...ub(u.mode), ...l }, overlays: i || cb(u.mode), ...s };
}
function bR(t) {
  var r;
  return (
    !!t[0].match(
      /(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/,
    ) ||
    !!t[0].match(/sxConfig$/) ||
    (t[0] === 'palette' &&
      !!((r = t[1]) != null && r.match(/(mode|contrastThreshold|tonalOffset)/)))
  );
}
const SR = (t) => [
    ...[...Array(25)].map((r, l) => `--${t ? `${t}-` : ''}overlays-${l}`),
    `--${t ? `${t}-` : ''}palette-AppBar-darkBg`,
    `--${t ? `${t}-` : ''}palette-AppBar-darkColor`,
  ],
  xR = (t) => (r, l) => {
    const i = t.rootSelector || ':root',
      s = t.colorSchemeSelector;
    let u = s;
    if (
      (s === 'class' && (u = '.%s'),
      s === 'data' && (u = '[data-%s]'),
      s != null && s.startsWith('data-') && !s.includes('%s') && (u = `[${s}="%s"]`),
      t.defaultColorScheme === r)
    ) {
      if (r === 'dark') {
        const f = {};
        return (
          SR(t.cssVarPrefix).forEach((p) => {
            (f[p] = l[p]), delete l[p];
          }),
          u === 'media'
            ? { [i]: l, '@media (prefers-color-scheme: dark)': { [i]: f } }
            : u
              ? { [u.replace('%s', r)]: f, [`${i}, ${u.replace('%s', r)}`]: l }
              : { [i]: { ...l, ...f } }
        );
      }
      if (u && u !== 'media') return `${i}, ${u.replace('%s', String(r))}`;
    } else if (r) {
      if (u === 'media') return { [`@media (prefers-color-scheme: ${String(r)})`]: { [i]: l } };
      if (u) return u.replace('%s', String(r));
    }
    return i;
  };
function ER(t, r) {
  r.forEach((l) => {
    t[l] || (t[l] = {});
  });
}
function X(t, r, l) {
  !t[r] && l && (t[r] = l);
}
function eo(t) {
  return typeof t != 'string' || !t.startsWith('hsl') ? t : Wv(t);
}
function xr(t, r) {
  `${r}Channel` in t || (t[`${r}Channel`] = Ji(eo(t[r])));
}
function CR(t) {
  return typeof t == 'number'
    ? `${t}px`
    : typeof t == 'string' || typeof t == 'function' || Array.isArray(t)
      ? t
      : '8px';
}
const Yn = (t) => {
    try {
      return t();
    } catch {}
  },
  RR = (t = 'mui') => $2(t);
function Ed(t, r, l, i) {
  if (!r) return;
  r = r === !0 ? {} : r;
  const s = i === 'dark' ? 'dark' : 'light';
  if (!l) {
    t[i] = vR({ ...r, palette: { mode: s, ...(r == null ? void 0 : r.palette) } });
    return;
  }
  const { palette: u, ...f } = Fd({
    ...l,
    palette: { mode: s, ...(r == null ? void 0 : r.palette) },
  });
  return (
    (t[i] = {
      ...r,
      palette: u,
      opacity: { ...ub(s), ...(r == null ? void 0 : r.opacity) },
      overlays: (r == null ? void 0 : r.overlays) || cb(s),
    }),
    f
  );
}
function TR(t = {}, ...r) {
  const {
      colorSchemes: l = { light: !0 },
      defaultColorScheme: i,
      disableCssColorScheme: s = !1,
      cssVarPrefix: u = 'mui',
      shouldSkipGeneratingVar: f = bR,
      colorSchemeSelector: p = l.light && l.dark ? 'media' : void 0,
      rootSelector: m = ':root',
      ...h
    } = t,
    y = Object.keys(l)[0],
    v = i || (l.light && y !== 'light' ? 'light' : y),
    b = RR(u),
    { [v]: w, light: S, dark: A, ...O } = l,
    M = { ...O };
  let z = w;
  if ((((v === 'dark' && !('dark' in l)) || (v === 'light' && !('light' in l))) && (z = !0), !z))
    throw new Error(Tr(21, v));
  const E = Ed(M, z, h, v);
  S && !M.light && Ed(M, S, void 0, 'light'), A && !M.dark && Ed(M, A, void 0, 'dark');
  let D = {
    defaultColorScheme: v,
    ...E,
    cssVarPrefix: u,
    colorSchemeSelector: p,
    rootSelector: m,
    getCssVar: b,
    colorSchemes: M,
    font: { ...rR(E.typography), ...E.font },
    spacing: CR(h.spacing),
  };
  Object.keys(D.colorSchemes).forEach((G) => {
    const x = D.colorSchemes[G].palette,
      P = (I) => {
        const ee = I.split('-'),
          ne = ee[1],
          Z = ee[2];
        return b(I, x[ne][Z]);
      };
    if (
      (x.mode === 'light' &&
        (X(x.common, 'background', '#fff'), X(x.common, 'onBackground', '#000')),
      x.mode === 'dark' && (X(x.common, 'background', '#000'), X(x.common, 'onBackground', '#fff')),
      ER(x, [
        'Alert',
        'AppBar',
        'Avatar',
        'Button',
        'Chip',
        'FilledInput',
        'LinearProgress',
        'Skeleton',
        'Slider',
        'SnackbarContent',
        'SpeedDialAction',
        'StepConnector',
        'StepContent',
        'Switch',
        'TableCell',
        'Tooltip',
      ]),
      x.mode === 'light')
    ) {
      X(x.Alert, 'errorColor', Xe(x.error.light, 0.6)),
        X(x.Alert, 'infoColor', Xe(x.info.light, 0.6)),
        X(x.Alert, 'successColor', Xe(x.success.light, 0.6)),
        X(x.Alert, 'warningColor', Xe(x.warning.light, 0.6)),
        X(x.Alert, 'errorFilledBg', P('palette-error-main')),
        X(x.Alert, 'infoFilledBg', P('palette-info-main')),
        X(x.Alert, 'successFilledBg', P('palette-success-main')),
        X(x.Alert, 'warningFilledBg', P('palette-warning-main')),
        X(
          x.Alert,
          'errorFilledColor',
          Yn(() => x.getContrastText(x.error.main)),
        ),
        X(
          x.Alert,
          'infoFilledColor',
          Yn(() => x.getContrastText(x.info.main)),
        ),
        X(
          x.Alert,
          'successFilledColor',
          Yn(() => x.getContrastText(x.success.main)),
        ),
        X(
          x.Alert,
          'warningFilledColor',
          Yn(() => x.getContrastText(x.warning.main)),
        ),
        X(x.Alert, 'errorStandardBg', Qe(x.error.light, 0.9)),
        X(x.Alert, 'infoStandardBg', Qe(x.info.light, 0.9)),
        X(x.Alert, 'successStandardBg', Qe(x.success.light, 0.9)),
        X(x.Alert, 'warningStandardBg', Qe(x.warning.light, 0.9)),
        X(x.Alert, 'errorIconColor', P('palette-error-main')),
        X(x.Alert, 'infoIconColor', P('palette-info-main')),
        X(x.Alert, 'successIconColor', P('palette-success-main')),
        X(x.Alert, 'warningIconColor', P('palette-warning-main')),
        X(x.AppBar, 'defaultBg', P('palette-grey-100')),
        X(x.Avatar, 'defaultBg', P('palette-grey-400')),
        X(x.Button, 'inheritContainedBg', P('palette-grey-300')),
        X(x.Button, 'inheritContainedHoverBg', P('palette-grey-A100')),
        X(x.Chip, 'defaultBorder', P('palette-grey-400')),
        X(x.Chip, 'defaultAvatarColor', P('palette-grey-700')),
        X(x.Chip, 'defaultIconColor', P('palette-grey-700')),
        X(x.FilledInput, 'bg', 'rgba(0, 0, 0, 0.06)'),
        X(x.FilledInput, 'hoverBg', 'rgba(0, 0, 0, 0.09)'),
        X(x.FilledInput, 'disabledBg', 'rgba(0, 0, 0, 0.12)'),
        X(x.LinearProgress, 'primaryBg', Qe(x.primary.main, 0.62)),
        X(x.LinearProgress, 'secondaryBg', Qe(x.secondary.main, 0.62)),
        X(x.LinearProgress, 'errorBg', Qe(x.error.main, 0.62)),
        X(x.LinearProgress, 'infoBg', Qe(x.info.main, 0.62)),
        X(x.LinearProgress, 'successBg', Qe(x.success.main, 0.62)),
        X(x.LinearProgress, 'warningBg', Qe(x.warning.main, 0.62)),
        X(x.Skeleton, 'bg', `rgba(${P('palette-text-primaryChannel')} / 0.11)`),
        X(x.Slider, 'primaryTrack', Qe(x.primary.main, 0.62)),
        X(x.Slider, 'secondaryTrack', Qe(x.secondary.main, 0.62)),
        X(x.Slider, 'errorTrack', Qe(x.error.main, 0.62)),
        X(x.Slider, 'infoTrack', Qe(x.info.main, 0.62)),
        X(x.Slider, 'successTrack', Qe(x.success.main, 0.62)),
        X(x.Slider, 'warningTrack', Qe(x.warning.main, 0.62));
      const I = Gs(x.background.default, 0.8);
      X(x.SnackbarContent, 'bg', I),
        X(
          x.SnackbarContent,
          'color',
          Yn(() => x.getContrastText(I)),
        ),
        X(x.SpeedDialAction, 'fabHoverBg', Gs(x.background.paper, 0.15)),
        X(x.StepConnector, 'border', P('palette-grey-400')),
        X(x.StepContent, 'border', P('palette-grey-400')),
        X(x.Switch, 'defaultColor', P('palette-common-white')),
        X(x.Switch, 'defaultDisabledColor', P('palette-grey-100')),
        X(x.Switch, 'primaryDisabledColor', Qe(x.primary.main, 0.62)),
        X(x.Switch, 'secondaryDisabledColor', Qe(x.secondary.main, 0.62)),
        X(x.Switch, 'errorDisabledColor', Qe(x.error.main, 0.62)),
        X(x.Switch, 'infoDisabledColor', Qe(x.info.main, 0.62)),
        X(x.Switch, 'successDisabledColor', Qe(x.success.main, 0.62)),
        X(x.Switch, 'warningDisabledColor', Qe(x.warning.main, 0.62)),
        X(x.TableCell, 'border', Qe(Fs(x.divider, 1), 0.88)),
        X(x.Tooltip, 'bg', Fs(x.grey[700], 0.92));
    }
    if (x.mode === 'dark') {
      X(x.Alert, 'errorColor', Qe(x.error.light, 0.6)),
        X(x.Alert, 'infoColor', Qe(x.info.light, 0.6)),
        X(x.Alert, 'successColor', Qe(x.success.light, 0.6)),
        X(x.Alert, 'warningColor', Qe(x.warning.light, 0.6)),
        X(x.Alert, 'errorFilledBg', P('palette-error-dark')),
        X(x.Alert, 'infoFilledBg', P('palette-info-dark')),
        X(x.Alert, 'successFilledBg', P('palette-success-dark')),
        X(x.Alert, 'warningFilledBg', P('palette-warning-dark')),
        X(
          x.Alert,
          'errorFilledColor',
          Yn(() => x.getContrastText(x.error.dark)),
        ),
        X(
          x.Alert,
          'infoFilledColor',
          Yn(() => x.getContrastText(x.info.dark)),
        ),
        X(
          x.Alert,
          'successFilledColor',
          Yn(() => x.getContrastText(x.success.dark)),
        ),
        X(
          x.Alert,
          'warningFilledColor',
          Yn(() => x.getContrastText(x.warning.dark)),
        ),
        X(x.Alert, 'errorStandardBg', Xe(x.error.light, 0.9)),
        X(x.Alert, 'infoStandardBg', Xe(x.info.light, 0.9)),
        X(x.Alert, 'successStandardBg', Xe(x.success.light, 0.9)),
        X(x.Alert, 'warningStandardBg', Xe(x.warning.light, 0.9)),
        X(x.Alert, 'errorIconColor', P('palette-error-main')),
        X(x.Alert, 'infoIconColor', P('palette-info-main')),
        X(x.Alert, 'successIconColor', P('palette-success-main')),
        X(x.Alert, 'warningIconColor', P('palette-warning-main')),
        X(x.AppBar, 'defaultBg', P('palette-grey-900')),
        X(x.AppBar, 'darkBg', P('palette-background-paper')),
        X(x.AppBar, 'darkColor', P('palette-text-primary')),
        X(x.Avatar, 'defaultBg', P('palette-grey-600')),
        X(x.Button, 'inheritContainedBg', P('palette-grey-800')),
        X(x.Button, 'inheritContainedHoverBg', P('palette-grey-700')),
        X(x.Chip, 'defaultBorder', P('palette-grey-700')),
        X(x.Chip, 'defaultAvatarColor', P('palette-grey-300')),
        X(x.Chip, 'defaultIconColor', P('palette-grey-300')),
        X(x.FilledInput, 'bg', 'rgba(255, 255, 255, 0.09)'),
        X(x.FilledInput, 'hoverBg', 'rgba(255, 255, 255, 0.13)'),
        X(x.FilledInput, 'disabledBg', 'rgba(255, 255, 255, 0.12)'),
        X(x.LinearProgress, 'primaryBg', Xe(x.primary.main, 0.5)),
        X(x.LinearProgress, 'secondaryBg', Xe(x.secondary.main, 0.5)),
        X(x.LinearProgress, 'errorBg', Xe(x.error.main, 0.5)),
        X(x.LinearProgress, 'infoBg', Xe(x.info.main, 0.5)),
        X(x.LinearProgress, 'successBg', Xe(x.success.main, 0.5)),
        X(x.LinearProgress, 'warningBg', Xe(x.warning.main, 0.5)),
        X(x.Skeleton, 'bg', `rgba(${P('palette-text-primaryChannel')} / 0.13)`),
        X(x.Slider, 'primaryTrack', Xe(x.primary.main, 0.5)),
        X(x.Slider, 'secondaryTrack', Xe(x.secondary.main, 0.5)),
        X(x.Slider, 'errorTrack', Xe(x.error.main, 0.5)),
        X(x.Slider, 'infoTrack', Xe(x.info.main, 0.5)),
        X(x.Slider, 'successTrack', Xe(x.success.main, 0.5)),
        X(x.Slider, 'warningTrack', Xe(x.warning.main, 0.5));
      const I = Gs(x.background.default, 0.98);
      X(x.SnackbarContent, 'bg', I),
        X(
          x.SnackbarContent,
          'color',
          Yn(() => x.getContrastText(I)),
        ),
        X(x.SpeedDialAction, 'fabHoverBg', Gs(x.background.paper, 0.15)),
        X(x.StepConnector, 'border', P('palette-grey-600')),
        X(x.StepContent, 'border', P('palette-grey-600')),
        X(x.Switch, 'defaultColor', P('palette-grey-300')),
        X(x.Switch, 'defaultDisabledColor', P('palette-grey-600')),
        X(x.Switch, 'primaryDisabledColor', Xe(x.primary.main, 0.55)),
        X(x.Switch, 'secondaryDisabledColor', Xe(x.secondary.main, 0.55)),
        X(x.Switch, 'errorDisabledColor', Xe(x.error.main, 0.55)),
        X(x.Switch, 'infoDisabledColor', Xe(x.info.main, 0.55)),
        X(x.Switch, 'successDisabledColor', Xe(x.success.main, 0.55)),
        X(x.Switch, 'warningDisabledColor', Xe(x.warning.main, 0.55)),
        X(x.TableCell, 'border', Xe(Fs(x.divider, 1), 0.68)),
        X(x.Tooltip, 'bg', Fs(x.grey[700], 0.92));
    }
    xr(x.background, 'default'),
      xr(x.background, 'paper'),
      xr(x.common, 'background'),
      xr(x.common, 'onBackground'),
      xr(x, 'divider'),
      Object.keys(x).forEach((I) => {
        const ee = x[I];
        I !== 'tonalOffset' &&
          ee &&
          typeof ee == 'object' &&
          (ee.main && X(x[I], 'mainChannel', Ji(eo(ee.main))),
          ee.light && X(x[I], 'lightChannel', Ji(eo(ee.light))),
          ee.dark && X(x[I], 'darkChannel', Ji(eo(ee.dark))),
          ee.contrastText && X(x[I], 'contrastTextChannel', Ji(eo(ee.contrastText))),
          I === 'text' && (xr(x[I], 'primary'), xr(x[I], 'secondary')),
          I === 'action' && (ee.active && xr(x[I], 'active'), ee.selected && xr(x[I], 'selected')));
      });
  }),
    (D = r.reduce((G, x) => Kt(G, x), D));
  const R = { prefix: u, disableCssColorScheme: s, shouldSkipGeneratingVar: f, getSelector: xR(D) },
    { vars: U, generateThemeVars: q, generateStyleSheets: V } = _2(D, R);
  return (
    (D.vars = U),
    Object.entries(D.colorSchemes[D.defaultColorScheme]).forEach(([G, x]) => {
      D[G] = x;
    }),
    (D.generateThemeVars = q),
    (D.generateStyleSheets = V),
    (D.generateSpacing = function () {
      return Gv(h.spacing, Ep(this));
    }),
    (D.getColorSchemeSelector = B2(p)),
    (D.spacing = D.generateSpacing()),
    (D.shouldSkipGeneratingVar = f),
    (D.unstable_sxConfig = { ...So, ...(h == null ? void 0 : h.unstable_sxConfig) }),
    (D.unstable_sx = function (x) {
      return Ua({ sx: x, theme: this });
    }),
    (D.toRuntimeSource = sb),
    D
  );
}
function Ty(t, r, l) {
  t.colorSchemes &&
    l &&
    (t.colorSchemes[r] = {
      ...(l !== !0 && l),
      palette: Mp({ ...(l === !0 ? {} : l.palette), mode: r }),
    });
}
function fb(t = {}, ...r) {
  const {
      palette: l,
      cssVariables: i = !1,
      colorSchemes: s = l ? void 0 : { light: !0 },
      defaultColorScheme: u = l == null ? void 0 : l.mode,
      ...f
    } = t,
    p = u || 'light',
    m = s == null ? void 0 : s[p],
    h = { ...s, ...(l ? { [p]: { ...(typeof m != 'boolean' && m), palette: l } } : void 0) };
  if (i === !1) {
    if (!('colorSchemes' in t)) return Fd(t, ...r);
    let y = l;
    'palette' in t ||
      (h[p] && (h[p] !== !0 ? (y = h[p].palette) : p === 'dark' && (y = { mode: 'dark' })));
    const v = Fd({ ...t, palette: y }, ...r);
    return (
      (v.defaultColorScheme = p),
      (v.colorSchemes = h),
      v.palette.mode === 'light' &&
        ((v.colorSchemes.light = { ...(h.light !== !0 && h.light), palette: v.palette }),
        Ty(v, 'dark', h.dark)),
      v.palette.mode === 'dark' &&
        ((v.colorSchemes.dark = { ...(h.dark !== !0 && h.dark), palette: v.palette }),
        Ty(v, 'light', h.light)),
      v
    );
  }
  return (
    !l && !('light' in h) && p === 'light' && (h.light = !0),
    TR({ ...f, colorSchemes: h, defaultColorScheme: p, ...(typeof i != 'boolean' && i) }, ...r)
  );
}
const $p = fb();
function ku() {
  const t = xo($p);
  return t[Eu] || t;
}
function db(t) {
  return t !== 'ownerState' && t !== 'theme' && t !== 'sx' && t !== 'as';
}
const jn = (t) => db(t) && t !== 'classes',
  Ce = Qv({ themeId: Eu, defaultTheme: $p, rootShouldForwardProp: jn });
function wR(t) {
  return L.jsx(JC, { ...t, defaultTheme: $p, themeId: Eu });
}
function AR(t) {
  return function (l) {
    return L.jsx(wR, { styles: typeof t == 'function' ? (i) => t({ theme: i, ...l }) : t });
  };
}
function OR() {
  return Rp;
}
const Bt = M2;
function at(t) {
  return O2(t);
}
function MR(t) {
  return et('MuiSvgIcon', t);
}
tt('MuiSvgIcon', [
  'root',
  'colorPrimary',
  'colorSecondary',
  'colorAction',
  'colorError',
  'colorDisabled',
  'fontSizeInherit',
  'fontSizeSmall',
  'fontSizeMedium',
  'fontSizeLarge',
]);
const $R = (t) => {
    const { color: r, fontSize: l, classes: i } = t,
      s = { root: ['root', r !== 'inherit' && `color${ke(r)}`, `fontSize${ke(l)}`] };
    return rt(s, MR, i);
  },
  zR = Ce('svg', {
    name: 'MuiSvgIcon',
    slot: 'Root',
    overridesResolver: (t, r) => {
      const { ownerState: l } = t;
      return [
        r.root,
        l.color !== 'inherit' && r[`color${ke(l.color)}`],
        r[`fontSize${ke(l.fontSize)}`],
      ];
    },
  })(
    Bt(({ theme: t }) => {
      var r, l, i, s, u, f, p, m, h, y, v, b, w, S;
      return {
        userSelect: 'none',
        width: '1em',
        height: '1em',
        display: 'inline-block',
        flexShrink: 0,
        transition:
          (s = (r = t.transitions) == null ? void 0 : r.create) == null
            ? void 0
            : s.call(r, 'fill', {
                duration:
                  (i = (l = (t.vars ?? t).transitions) == null ? void 0 : l.duration) == null
                    ? void 0
                    : i.shorter,
              }),
        variants: [
          { props: (A) => !A.hasSvgAsChild, style: { fill: 'currentColor' } },
          { props: { fontSize: 'inherit' }, style: { fontSize: 'inherit' } },
          {
            props: { fontSize: 'small' },
            style: {
              fontSize:
                ((f = (u = t.typography) == null ? void 0 : u.pxToRem) == null
                  ? void 0
                  : f.call(u, 20)) || '1.25rem',
            },
          },
          {
            props: { fontSize: 'medium' },
            style: {
              fontSize:
                ((m = (p = t.typography) == null ? void 0 : p.pxToRem) == null
                  ? void 0
                  : m.call(p, 24)) || '1.5rem',
            },
          },
          {
            props: { fontSize: 'large' },
            style: {
              fontSize:
                ((y = (h = t.typography) == null ? void 0 : h.pxToRem) == null
                  ? void 0
                  : y.call(h, 35)) || '2.1875rem',
            },
          },
          ...Object.entries((t.vars ?? t).palette)
            .filter(([, A]) => A && A.main)
            .map(([A]) => {
              var O, M;
              return {
                props: { color: A },
                style: {
                  color:
                    (M = (O = (t.vars ?? t).palette) == null ? void 0 : O[A]) == null
                      ? void 0
                      : M.main,
                },
              };
            }),
          {
            props: { color: 'action' },
            style: {
              color:
                (b = (v = (t.vars ?? t).palette) == null ? void 0 : v.action) == null
                  ? void 0
                  : b.active,
            },
          },
          {
            props: { color: 'disabled' },
            style: {
              color:
                (S = (w = (t.vars ?? t).palette) == null ? void 0 : w.action) == null
                  ? void 0
                  : S.disabled,
            },
          },
          { props: { color: 'inherit' }, style: { color: void 0 } },
        ],
      };
    }),
  ),
  Vd = C.forwardRef(function (r, l) {
    const i = at({ props: r, name: 'MuiSvgIcon' }),
      {
        children: s,
        className: u,
        color: f = 'inherit',
        component: p = 'svg',
        fontSize: m = 'medium',
        htmlColor: h,
        inheritViewBox: y = !1,
        titleAccess: v,
        viewBox: b = '0 0 24 24',
        ...w
      } = i,
      S = C.isValidElement(s) && s.type === 'svg',
      A = {
        ...i,
        color: f,
        component: p,
        fontSize: m,
        instanceFontSize: r.fontSize,
        inheritViewBox: y,
        viewBox: b,
        hasSvgAsChild: S,
      },
      O = {};
    y || (O.viewBox = b);
    const M = $R(A);
    return L.jsxs(zR, {
      as: p,
      className: Oe(M.root, u),
      focusable: 'false',
      color: h,
      'aria-hidden': v ? void 0 : !0,
      role: v ? 'img' : void 0,
      ref: l,
      ...O,
      ...w,
      ...(S && s.props),
      ownerState: A,
      children: [S ? s.props.children : s, v ? L.jsx('title', { children: v }) : null],
    });
  });
Vd.muiName = 'SvgIcon';
function Uu(t, r) {
  function l(i, s) {
    return L.jsx(Vd, { 'data-testid': `${r}Icon`, ref: s, ...i, children: t });
  }
  return (l.muiName = Vd.muiName), C.memo(C.forwardRef(l));
}
function Lt(t, r) {
  if (t == null) return {};
  var l = {};
  for (var i in t)
    if ({}.hasOwnProperty.call(t, i)) {
      if (r.includes(i)) continue;
      l[i] = t[i];
    }
  return l;
}
function Yd(t, r) {
  return (
    (Yd = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (l, i) {
          return (l.__proto__ = i), l;
        }),
    Yd(t, r)
  );
}
function pb(t, r) {
  (t.prototype = Object.create(r.prototype)), (t.prototype.constructor = t), Yd(t, r);
}
var hb = Av();
const Vs = wv(hb),
  wy = { disabled: !1 },
  du = Zn.createContext(null);
var DR = function (r) {
    return r.scrollTop;
  },
  to = 'unmounted',
  Da = 'exited',
  _a = 'entering',
  Ml = 'entered',
  Kd = 'exiting',
  tr = (function (t) {
    pb(r, t);
    function r(i, s) {
      var u;
      u = t.call(this, i, s) || this;
      var f = s,
        p = f && !f.isMounting ? i.enter : i.appear,
        m;
      return (
        (u.appearStatus = null),
        i.in
          ? p
            ? ((m = Da), (u.appearStatus = _a))
            : (m = Ml)
          : i.unmountOnExit || i.mountOnEnter
            ? (m = to)
            : (m = Da),
        (u.state = { status: m }),
        (u.nextCallback = null),
        u
      );
    }
    r.getDerivedStateFromProps = function (s, u) {
      var f = s.in;
      return f && u.status === to ? { status: Da } : null;
    };
    var l = r.prototype;
    return (
      (l.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (l.componentDidUpdate = function (s) {
        var u = null;
        if (s !== this.props) {
          var f = this.state.status;
          this.props.in ? f !== _a && f !== Ml && (u = _a) : (f === _a || f === Ml) && (u = Kd);
        }
        this.updateStatus(!1, u);
      }),
      (l.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (l.getTimeouts = function () {
        var s = this.props.timeout,
          u,
          f,
          p;
        return (
          (u = f = p = s),
          s != null &&
            typeof s != 'number' &&
            ((u = s.exit), (f = s.enter), (p = s.appear !== void 0 ? s.appear : f)),
          { exit: u, enter: f, appear: p }
        );
      }),
      (l.updateStatus = function (s, u) {
        if ((s === void 0 && (s = !1), u !== null))
          if ((this.cancelNextCallback(), u === _a)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var f = this.props.nodeRef ? this.props.nodeRef.current : Vs.findDOMNode(this);
              f && DR(f);
            }
            this.performEnter(s);
          } else this.performExit();
        else this.props.unmountOnExit && this.state.status === Da && this.setState({ status: to });
      }),
      (l.performEnter = function (s) {
        var u = this,
          f = this.props.enter,
          p = this.context ? this.context.isMounting : s,
          m = this.props.nodeRef ? [p] : [Vs.findDOMNode(this), p],
          h = m[0],
          y = m[1],
          v = this.getTimeouts(),
          b = p ? v.appear : v.enter;
        if ((!s && !f) || wy.disabled) {
          this.safeSetState({ status: Ml }, function () {
            u.props.onEntered(h);
          });
          return;
        }
        this.props.onEnter(h, y),
          this.safeSetState({ status: _a }, function () {
            u.props.onEntering(h, y),
              u.onTransitionEnd(b, function () {
                u.safeSetState({ status: Ml }, function () {
                  u.props.onEntered(h, y);
                });
              });
          });
      }),
      (l.performExit = function () {
        var s = this,
          u = this.props.exit,
          f = this.getTimeouts(),
          p = this.props.nodeRef ? void 0 : Vs.findDOMNode(this);
        if (!u || wy.disabled) {
          this.safeSetState({ status: Da }, function () {
            s.props.onExited(p);
          });
          return;
        }
        this.props.onExit(p),
          this.safeSetState({ status: Kd }, function () {
            s.props.onExiting(p),
              s.onTransitionEnd(f.exit, function () {
                s.safeSetState({ status: Da }, function () {
                  s.props.onExited(p);
                });
              });
          });
      }),
      (l.cancelNextCallback = function () {
        this.nextCallback !== null && (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (l.safeSetState = function (s, u) {
        (u = this.setNextCallback(u)), this.setState(s, u);
      }),
      (l.setNextCallback = function (s) {
        var u = this,
          f = !0;
        return (
          (this.nextCallback = function (p) {
            f && ((f = !1), (u.nextCallback = null), s(p));
          }),
          (this.nextCallback.cancel = function () {
            f = !1;
          }),
          this.nextCallback
        );
      }),
      (l.onTransitionEnd = function (s, u) {
        this.setNextCallback(u);
        var f = this.props.nodeRef ? this.props.nodeRef.current : Vs.findDOMNode(this),
          p = s == null && !this.props.addEndListener;
        if (!f || p) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var m = this.props.nodeRef ? [this.nextCallback] : [f, this.nextCallback],
            h = m[0],
            y = m[1];
          this.props.addEndListener(h, y);
        }
        s != null && setTimeout(this.nextCallback, s);
      }),
      (l.render = function () {
        var s = this.state.status;
        if (s === to) return null;
        var u = this.props,
          f = u.children;
        u.in,
          u.mountOnEnter,
          u.unmountOnExit,
          u.appear,
          u.enter,
          u.exit,
          u.timeout,
          u.addEndListener,
          u.onEnter,
          u.onEntering,
          u.onEntered,
          u.onExit,
          u.onExiting,
          u.onExited,
          u.nodeRef;
        var p = Lt(u, [
          'children',
          'in',
          'mountOnEnter',
          'unmountOnExit',
          'appear',
          'enter',
          'exit',
          'timeout',
          'addEndListener',
          'onEnter',
          'onEntering',
          'onEntered',
          'onExit',
          'onExiting',
          'onExited',
          'nodeRef',
        ]);
        return Zn.createElement(
          du.Provider,
          { value: null },
          typeof f == 'function' ? f(s, p) : Zn.cloneElement(Zn.Children.only(f), p),
        );
      }),
      r
    );
  })(Zn.Component);
tr.contextType = du;
tr.propTypes = {};
function Al() {}
tr.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Al,
  onEntering: Al,
  onEntered: Al,
  onExit: Al,
  onExiting: Al,
  onExited: Al,
};
tr.UNMOUNTED = to;
tr.EXITED = Da;
tr.ENTERING = _a;
tr.ENTERED = Ml;
tr.EXITING = Kd;
function _R(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function zp(t, r) {
  var l = function (u) {
      return r && C.isValidElement(u) ? r(u) : u;
    },
    i = Object.create(null);
  return (
    t &&
      C.Children.map(t, function (s) {
        return s;
      }).forEach(function (s) {
        i[s.key] = l(s);
      }),
    i
  );
}
function BR(t, r) {
  (t = t || {}), (r = r || {});
  function l(y) {
    return y in r ? r[y] : t[y];
  }
  var i = Object.create(null),
    s = [];
  for (var u in t) u in r ? s.length && ((i[u] = s), (s = [])) : s.push(u);
  var f,
    p = {};
  for (var m in r) {
    if (i[m])
      for (f = 0; f < i[m].length; f++) {
        var h = i[m][f];
        p[i[m][f]] = l(h);
      }
    p[m] = l(m);
  }
  for (f = 0; f < s.length; f++) p[s[f]] = l(s[f]);
  return p;
}
function Ba(t, r, l) {
  return l[r] != null ? l[r] : t.props[r];
}
function NR(t, r) {
  return zp(t.children, function (l) {
    return C.cloneElement(l, {
      onExited: r.bind(null, l),
      in: !0,
      appear: Ba(l, 'appear', t),
      enter: Ba(l, 'enter', t),
      exit: Ba(l, 'exit', t),
    });
  });
}
function kR(t, r, l) {
  var i = zp(t.children),
    s = BR(r, i);
  return (
    Object.keys(s).forEach(function (u) {
      var f = s[u];
      if (C.isValidElement(f)) {
        var p = u in r,
          m = u in i,
          h = r[u],
          y = C.isValidElement(h) && !h.props.in;
        m && (!p || y)
          ? (s[u] = C.cloneElement(f, {
              onExited: l.bind(null, f),
              in: !0,
              exit: Ba(f, 'exit', t),
              enter: Ba(f, 'enter', t),
            }))
          : !m && p && !y
            ? (s[u] = C.cloneElement(f, { in: !1 }))
            : m &&
              p &&
              C.isValidElement(h) &&
              (s[u] = C.cloneElement(f, {
                onExited: l.bind(null, f),
                in: h.props.in,
                exit: Ba(f, 'exit', t),
                enter: Ba(f, 'enter', t),
              }));
      }
    }),
    s
  );
}
var UR =
    Object.values ||
    function (t) {
      return Object.keys(t).map(function (r) {
        return t[r];
      });
    },
  jR = {
    component: 'div',
    childFactory: function (r) {
      return r;
    },
  },
  Dp = (function (t) {
    pb(r, t);
    function r(i, s) {
      var u;
      u = t.call(this, i, s) || this;
      var f = u.handleExited.bind(_R(u));
      return (u.state = { contextValue: { isMounting: !0 }, handleExited: f, firstRender: !0 }), u;
    }
    var l = r.prototype;
    return (
      (l.componentDidMount = function () {
        (this.mounted = !0), this.setState({ contextValue: { isMounting: !1 } });
      }),
      (l.componentWillUnmount = function () {
        this.mounted = !1;
      }),
      (r.getDerivedStateFromProps = function (s, u) {
        var f = u.children,
          p = u.handleExited,
          m = u.firstRender;
        return { children: m ? NR(s, p) : kR(s, f, p), firstRender: !1 };
      }),
      (l.handleExited = function (s, u) {
        var f = zp(this.props.children);
        s.key in f ||
          (s.props.onExited && s.props.onExited(u),
          this.mounted &&
            this.setState(function (p) {
              var m = fe({}, p.children);
              return delete m[s.key], { children: m };
            }));
      }),
      (l.render = function () {
        var s = this.props,
          u = s.component,
          f = s.childFactory,
          p = Lt(s, ['component', 'childFactory']),
          m = this.state.contextValue,
          h = UR(this.state.children).map(f);
        return (
          delete p.appear,
          delete p.enter,
          delete p.exit,
          u === null
            ? Zn.createElement(du.Provider, { value: m }, h)
            : Zn.createElement(du.Provider, { value: m }, Zn.createElement(u, p, h))
        );
      }),
      r
    );
  })(Zn.Component);
Dp.propTypes = {};
Dp.defaultProps = jR;
const mb = (t) => t.scrollTop;
function pu(t, r) {
  const { timeout: l, easing: i, style: s = {} } = t;
  return {
    duration: s.transitionDuration ?? (typeof l == 'number' ? l : l[r.mode] || 0),
    easing: s.transitionTimingFunction ?? (typeof i == 'object' ? i[r.mode] : i),
    delay: s.transitionDelay,
  };
}
function LR(t) {
  return et('MuiPaper', t);
}
tt('MuiPaper', [
  'root',
  'rounded',
  'outlined',
  'elevation',
  'elevation0',
  'elevation1',
  'elevation2',
  'elevation3',
  'elevation4',
  'elevation5',
  'elevation6',
  'elevation7',
  'elevation8',
  'elevation9',
  'elevation10',
  'elevation11',
  'elevation12',
  'elevation13',
  'elevation14',
  'elevation15',
  'elevation16',
  'elevation17',
  'elevation18',
  'elevation19',
  'elevation20',
  'elevation21',
  'elevation22',
  'elevation23',
  'elevation24',
]);
const HR = (t) => {
    const { square: r, elevation: l, variant: i, classes: s } = t,
      u = { root: ['root', i, !r && 'rounded', i === 'elevation' && `elevation${l}`] };
    return rt(u, LR, s);
  },
  PR = Ce('div', {
    name: 'MuiPaper',
    slot: 'Root',
    overridesResolver: (t, r) => {
      const { ownerState: l } = t;
      return [
        r.root,
        r[l.variant],
        !l.square && r.rounded,
        l.variant === 'elevation' && r[`elevation${l.elevation}`],
      ];
    },
  })(
    Bt(({ theme: t }) => ({
      backgroundColor: (t.vars || t).palette.background.paper,
      color: (t.vars || t).palette.text.primary,
      transition: t.transitions.create('box-shadow'),
      variants: [
        { props: ({ ownerState: r }) => !r.square, style: { borderRadius: t.shape.borderRadius } },
        {
          props: { variant: 'outlined' },
          style: { border: `1px solid ${(t.vars || t).palette.divider}` },
        },
        {
          props: { variant: 'elevation' },
          style: { boxShadow: 'var(--Paper-shadow)', backgroundImage: 'var(--Paper-overlay)' },
        },
      ],
    })),
  ),
  gb = C.forwardRef(function (r, l) {
    var w;
    const i = at({ props: r, name: 'MuiPaper' }),
      s = ku(),
      {
        className: u,
        component: f = 'div',
        elevation: p = 1,
        square: m = !1,
        variant: h = 'elevation',
        ...y
      } = i,
      v = { ...i, component: f, elevation: p, square: m, variant: h },
      b = HR(v);
    return L.jsx(PR, {
      as: f,
      ownerState: v,
      className: Oe(b.root, u),
      ref: l,
      ...y,
      style: {
        ...(h === 'elevation' && {
          '--Paper-shadow': (s.vars || s).shadows[p],
          ...(s.vars && { '--Paper-overlay': (w = s.vars.overlays) == null ? void 0 : w[p] }),
          ...(!s.vars &&
            s.palette.mode === 'dark' && {
              '--Paper-overlay': `linear-gradient(${aa('#fff', Gd(p))}, ${aa('#fff', Gd(p))})`,
            }),
        }),
        ...y.style,
      },
    });
  });
function kn(t, r) {
  const {
      className: l,
      elementType: i,
      ownerState: s,
      externalForwardedProps: u,
      internalForwardedProps: f,
      ...p
    } = r,
    { component: m, slots: h = { [t]: void 0 }, slotProps: y = { [t]: void 0 }, ...v } = u,
    b = h[t] || i,
    w = lb(y[t], s),
    {
      props: { component: S, ...A },
      internalRef: O,
    } = ab({
      className: l,
      ...p,
      externalForwardedProps: t === 'root' ? v : void 0,
      externalSlotProps: w,
    }),
    M = Xt(O, w == null ? void 0 : w.ref, r.ref),
    z = t === 'root' ? S || m : S,
    E = nb(
      b,
      {
        ...(t === 'root' && !m && !h[t] && f),
        ...(t !== 'root' && !h[t] && f),
        ...A,
        ...(z && { as: z }),
        ref: M,
      },
      s,
    );
  return [b, E];
}
class hu {
  constructor() {
    Pi(this, 'mountEffect', () => {
      this.shouldMount &&
        !this.didMount &&
        this.ref.current !== null &&
        ((this.didMount = !0), this.mounted.resolve());
    });
    (this.ref = { current: null }),
      (this.mounted = null),
      (this.didMount = !1),
      (this.shouldMount = !1),
      (this.setShouldMount = null);
  }
  static create() {
    return new hu();
  }
  static use() {
    const r = Jv(hu.create).current,
      [l, i] = C.useState(!1);
    return (r.shouldMount = l), (r.setShouldMount = i), C.useEffect(r.mountEffect, [l]), r;
  }
  mount() {
    return (
      this.mounted ||
        ((this.mounted = FR()), (this.shouldMount = !0), this.setShouldMount(this.shouldMount)),
      this.mounted
    );
  }
  start(...r) {
    this.mount().then(() => {
      var l;
      return (l = this.ref.current) == null ? void 0 : l.start(...r);
    });
  }
  stop(...r) {
    this.mount().then(() => {
      var l;
      return (l = this.ref.current) == null ? void 0 : l.stop(...r);
    });
  }
  pulsate(...r) {
    this.mount().then(() => {
      var l;
      return (l = this.ref.current) == null ? void 0 : l.pulsate(...r);
    });
  }
}
function qR() {
  return hu.use();
}
function FR() {
  let t, r;
  const l = new Promise((i, s) => {
    (t = i), (r = s);
  });
  return (l.resolve = t), (l.reject = r), l;
}
function GR(t) {
  const {
      className: r,
      classes: l,
      pulsate: i = !1,
      rippleX: s,
      rippleY: u,
      rippleSize: f,
      in: p,
      onExited: m,
      timeout: h,
    } = t,
    [y, v] = C.useState(!1),
    b = Oe(r, l.ripple, l.rippleVisible, i && l.ripplePulsate),
    w = { width: f, height: f, top: -(f / 2) + u, left: -(f / 2) + s },
    S = Oe(l.child, y && l.childLeaving, i && l.childPulsate);
  return (
    !p && !y && v(!0),
    C.useEffect(() => {
      if (!p && m != null) {
        const A = setTimeout(m, h);
        return () => {
          clearTimeout(A);
        };
      }
    }, [m, p, h]),
    L.jsx('span', { className: b, style: w, children: L.jsx('span', { className: S }) })
  );
}
const Tn = tt('MuiTouchRipple', [
    'root',
    'ripple',
    'rippleVisible',
    'ripplePulsate',
    'child',
    'childLeaving',
    'childPulsate',
  ]),
  Xd = 550,
  VR = 80,
  YR = bp`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,
  KR = bp`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,
  XR = bp`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,
  QR = Ce('span', { name: 'MuiTouchRipple', slot: 'Root' })({
    overflow: 'hidden',
    pointerEvents: 'none',
    position: 'absolute',
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 'inherit',
  }),
  WR = Ce(GR, { name: 'MuiTouchRipple', slot: 'Ripple' })`
  opacity: 0;
  position: absolute;

  &.${Tn.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${YR};
    animation-duration: ${Xd}ms;
    animation-timing-function: ${({ theme: t }) => t.transitions.easing.easeInOut};
  }

  &.${Tn.ripplePulsate} {
    animation-duration: ${({ theme: t }) => t.transitions.duration.shorter}ms;
  }

  & .${Tn.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Tn.childLeaving} {
    opacity: 0;
    animation-name: ${KR};
    animation-duration: ${Xd}ms;
    animation-timing-function: ${({ theme: t }) => t.transitions.easing.easeInOut};
  }

  & .${Tn.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${XR};
    animation-duration: 2500ms;
    animation-timing-function: ${({ theme: t }) => t.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,
  IR = C.forwardRef(function (r, l) {
    const i = at({ props: r, name: 'MuiTouchRipple' }),
      { center: s = !1, classes: u = {}, className: f, ...p } = i,
      [m, h] = C.useState([]),
      y = C.useRef(0),
      v = C.useRef(null);
    C.useEffect(() => {
      v.current && (v.current(), (v.current = null));
    }, [m]);
    const b = C.useRef(!1),
      w = eb(),
      S = C.useRef(null),
      A = C.useRef(null),
      O = C.useCallback(
        (D) => {
          const { pulsate: R, rippleX: U, rippleY: q, rippleSize: V, cb: G } = D;
          h((x) => [
            ...x,
            L.jsx(
              WR,
              {
                classes: {
                  ripple: Oe(u.ripple, Tn.ripple),
                  rippleVisible: Oe(u.rippleVisible, Tn.rippleVisible),
                  ripplePulsate: Oe(u.ripplePulsate, Tn.ripplePulsate),
                  child: Oe(u.child, Tn.child),
                  childLeaving: Oe(u.childLeaving, Tn.childLeaving),
                  childPulsate: Oe(u.childPulsate, Tn.childPulsate),
                },
                timeout: Xd,
                pulsate: R,
                rippleX: U,
                rippleY: q,
                rippleSize: V,
              },
              y.current,
            ),
          ]),
            (y.current += 1),
            (v.current = G);
        },
        [u],
      ),
      M = C.useCallback(
        (D = {}, R = {}, U = () => {}) => {
          const { pulsate: q = !1, center: V = s || R.pulsate, fakeElement: G = !1 } = R;
          if ((D == null ? void 0 : D.type) === 'mousedown' && b.current) {
            b.current = !1;
            return;
          }
          (D == null ? void 0 : D.type) === 'touchstart' && (b.current = !0);
          const x = G ? null : A.current,
            P = x ? x.getBoundingClientRect() : { width: 0, height: 0, left: 0, top: 0 };
          let I, ee, ne;
          if (
            V ||
            D === void 0 ||
            (D.clientX === 0 && D.clientY === 0) ||
            (!D.clientX && !D.touches)
          )
            (I = Math.round(P.width / 2)), (ee = Math.round(P.height / 2));
          else {
            const { clientX: Z, clientY: j } = D.touches && D.touches.length > 0 ? D.touches[0] : D;
            (I = Math.round(Z - P.left)), (ee = Math.round(j - P.top));
          }
          if (V)
            (ne = Math.sqrt((2 * P.width ** 2 + P.height ** 2) / 3)), ne % 2 === 0 && (ne += 1);
          else {
            const Z = Math.max(Math.abs((x ? x.clientWidth : 0) - I), I) * 2 + 2,
              j = Math.max(Math.abs((x ? x.clientHeight : 0) - ee), ee) * 2 + 2;
            ne = Math.sqrt(Z ** 2 + j ** 2);
          }
          D != null && D.touches
            ? S.current === null &&
              ((S.current = () => {
                O({ pulsate: q, rippleX: I, rippleY: ee, rippleSize: ne, cb: U });
              }),
              w.start(VR, () => {
                S.current && (S.current(), (S.current = null));
              }))
            : O({ pulsate: q, rippleX: I, rippleY: ee, rippleSize: ne, cb: U });
        },
        [s, O, w],
      ),
      z = C.useCallback(() => {
        M({}, { pulsate: !0 });
      }, [M]),
      E = C.useCallback(
        (D, R) => {
          if ((w.clear(), (D == null ? void 0 : D.type) === 'touchend' && S.current)) {
            S.current(),
              (S.current = null),
              w.start(0, () => {
                E(D, R);
              });
            return;
          }
          (S.current = null), h((U) => (U.length > 0 ? U.slice(1) : U)), (v.current = R);
        },
        [w],
      );
    return (
      C.useImperativeHandle(l, () => ({ pulsate: z, start: M, stop: E }), [z, M, E]),
      L.jsx(QR, {
        className: Oe(Tn.root, u.root, f),
        ref: A,
        ...p,
        children: L.jsx(Dp, { component: null, exit: !0, children: m }),
      })
    );
  });
function ZR(t) {
  return et('MuiButtonBase', t);
}
const JR = tt('MuiButtonBase', ['root', 'disabled', 'focusVisible']),
  eT = (t) => {
    const { disabled: r, focusVisible: l, focusVisibleClassName: i, classes: s } = t,
      f = rt({ root: ['root', r && 'disabled', l && 'focusVisible'] }, ZR, s);
    return l && i && (f.root += ` ${i}`), f;
  },
  tT = Ce('button', { name: 'MuiButtonBase', slot: 'Root', overridesResolver: (t, r) => r.root })({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    boxSizing: 'border-box',
    WebkitTapHighlightColor: 'transparent',
    backgroundColor: 'transparent',
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: 'pointer',
    userSelect: 'none',
    verticalAlign: 'middle',
    MozAppearance: 'none',
    WebkitAppearance: 'none',
    textDecoration: 'none',
    color: 'inherit',
    '&::-moz-focus-inner': { borderStyle: 'none' },
    [`&.${JR.disabled}`]: { pointerEvents: 'none', cursor: 'default' },
    '@media print': { colorAdjust: 'exact' },
  }),
  nT = C.forwardRef(function (r, l) {
    const i = at({ props: r, name: 'MuiButtonBase' }),
      {
        action: s,
        centerRipple: u = !1,
        children: f,
        className: p,
        component: m = 'button',
        disabled: h = !1,
        disableRipple: y = !1,
        disableTouchRipple: v = !1,
        focusRipple: b = !1,
        focusVisibleClassName: w,
        LinkComponent: S = 'a',
        onBlur: A,
        onClick: O,
        onContextMenu: M,
        onDragLeave: z,
        onFocus: E,
        onFocusVisible: D,
        onKeyDown: R,
        onKeyUp: U,
        onMouseDown: q,
        onMouseLeave: V,
        onMouseUp: G,
        onTouchEnd: x,
        onTouchMove: P,
        onTouchStart: I,
        tabIndex: ee = 0,
        TouchRippleProps: ne,
        touchRippleRef: Z,
        type: j,
        ...te
      } = i,
      ie = C.useRef(null),
      oe = qR(),
      _ = Xt(oe.ref, Z),
      [K, se] = C.useState(!1);
    h && K && se(!1),
      C.useImperativeHandle(
        s,
        () => ({
          focusVisible: () => {
            se(!0), ie.current.focus();
          },
        }),
        [],
      );
    const ue = oe.shouldMount && !y && !h;
    C.useEffect(() => {
      K && b && !y && oe.pulsate();
    }, [y, b, K, oe]);
    const le = Er(oe, 'start', q, v),
      pe = Er(oe, 'stop', M, v),
      ge = Er(oe, 'stop', z, v),
      Se = Er(oe, 'stop', G, v),
      ae = Er(
        oe,
        'stop',
        (ve) => {
          K && ve.preventDefault(), V && V(ve);
        },
        v,
      ),
      de = Er(oe, 'start', I, v),
      ce = Er(oe, 'stop', x, v),
      be = Er(oe, 'stop', P, v),
      Te = Er(
        oe,
        'stop',
        (ve) => {
          hy(ve.target) || se(!1), A && A(ve);
        },
        !1,
      ),
      Fe = Dl((ve) => {
        ie.current || (ie.current = ve.currentTarget),
          hy(ve.target) && (se(!0), D && D(ve)),
          E && E(ve);
      }),
      Me = () => {
        const ve = ie.current;
        return m && m !== 'button' && !(ve.tagName === 'A' && ve.href);
      },
      Ge = Dl((ve) => {
        b &&
          !ve.repeat &&
          K &&
          ve.key === ' ' &&
          oe.stop(ve, () => {
            oe.start(ve);
          }),
          ve.target === ve.currentTarget && Me() && ve.key === ' ' && ve.preventDefault(),
          R && R(ve),
          ve.target === ve.currentTarget &&
            Me() &&
            ve.key === 'Enter' &&
            !h &&
            (ve.preventDefault(), O && O(ve));
      }),
      xt = Dl((ve) => {
        b &&
          ve.key === ' ' &&
          K &&
          !ve.defaultPrevented &&
          oe.stop(ve, () => {
            oe.pulsate(ve);
          }),
          U && U(ve),
          O &&
            ve.target === ve.currentTarget &&
            Me() &&
            ve.key === ' ' &&
            !ve.defaultPrevented &&
            O(ve);
      });
    let wt = m;
    wt === 'button' && (te.href || te.to) && (wt = S);
    const lt = {};
    wt === 'button'
      ? ((lt.type = j === void 0 ? 'button' : j), (lt.disabled = h))
      : (!te.href && !te.to && (lt.role = 'button'), h && (lt['aria-disabled'] = h));
    const It = Xt(l, ie),
      Mt = {
        ...i,
        centerRipple: u,
        component: m,
        disabled: h,
        disableRipple: y,
        disableTouchRipple: v,
        focusRipple: b,
        tabIndex: ee,
        focusVisible: K,
      },
      it = eT(Mt);
    return L.jsxs(tT, {
      as: wt,
      className: Oe(it.root, p),
      ownerState: Mt,
      onBlur: Te,
      onClick: O,
      onContextMenu: pe,
      onFocus: Fe,
      onKeyDown: Ge,
      onKeyUp: xt,
      onMouseDown: le,
      onMouseLeave: ae,
      onMouseUp: Se,
      onDragLeave: ge,
      onTouchEnd: ce,
      onTouchMove: be,
      onTouchStart: de,
      ref: It,
      tabIndex: h ? -1 : ee,
      type: j,
      ...lt,
      ...te,
      children: [f, ue ? L.jsx(IR, { ref: _, center: u, ...ne }) : null],
    });
  });
function Er(t, r, l, i = !1) {
  return Dl((s) => (l && l(s), i || t[r](s), !0));
}
function rT(t) {
  return typeof t.main == 'string';
}
function aT(t, r = []) {
  if (!rT(t)) return !1;
  for (const l of r) if (!t.hasOwnProperty(l) || typeof t[l] != 'string') return !1;
  return !0;
}
function Ll(t = []) {
  return ([, r]) => r && aT(r, t);
}
function lT(t) {
  return et('MuiTypography', t);
}
tt('MuiTypography', [
  'root',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'subtitle1',
  'subtitle2',
  'body1',
  'body2',
  'inherit',
  'button',
  'caption',
  'overline',
  'alignLeft',
  'alignRight',
  'alignCenter',
  'alignJustify',
  'noWrap',
  'gutterBottom',
  'paragraph',
]);
const iT = {
    primary: !0,
    secondary: !0,
    error: !0,
    info: !0,
    success: !0,
    warning: !0,
    textPrimary: !0,
    textSecondary: !0,
    textDisabled: !0,
  },
  oT = OR(),
  sT = (t) => {
    const { align: r, gutterBottom: l, noWrap: i, paragraph: s, variant: u, classes: f } = t,
      p = {
        root: [
          'root',
          u,
          t.align !== 'inherit' && `align${ke(r)}`,
          l && 'gutterBottom',
          i && 'noWrap',
          s && 'paragraph',
        ],
      };
    return rt(p, lT, f);
  },
  uT = Ce('span', {
    name: 'MuiTypography',
    slot: 'Root',
    overridesResolver: (t, r) => {
      const { ownerState: l } = t;
      return [
        r.root,
        l.variant && r[l.variant],
        l.align !== 'inherit' && r[`align${ke(l.align)}`],
        l.noWrap && r.noWrap,
        l.gutterBottom && r.gutterBottom,
        l.paragraph && r.paragraph,
      ];
    },
  })(
    Bt(({ theme: t }) => {
      var r;
      return {
        margin: 0,
        variants: [
          {
            props: { variant: 'inherit' },
            style: { font: 'inherit', lineHeight: 'inherit', letterSpacing: 'inherit' },
          },
          ...Object.entries(t.typography)
            .filter(([l, i]) => l !== 'inherit' && i && typeof i == 'object')
            .map(([l, i]) => ({ props: { variant: l }, style: i })),
          ...Object.entries(t.palette)
            .filter(Ll())
            .map(([l]) => ({
              props: { color: l },
              style: { color: (t.vars || t).palette[l].main },
            })),
          ...Object.entries(((r = t.palette) == null ? void 0 : r.text) || {})
            .filter(([, l]) => typeof l == 'string')
            .map(([l]) => ({
              props: { color: `text${ke(l)}` },
              style: { color: (t.vars || t).palette.text[l] },
            })),
          {
            props: ({ ownerState: l }) => l.align !== 'inherit',
            style: { textAlign: 'var(--Typography-textAlign)' },
          },
          {
            props: ({ ownerState: l }) => l.noWrap,
            style: { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' },
          },
          { props: ({ ownerState: l }) => l.gutterBottom, style: { marginBottom: '0.35em' } },
          { props: ({ ownerState: l }) => l.paragraph, style: { marginBottom: 16 } },
        ],
      };
    }),
  ),
  Ay = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    subtitle1: 'h6',
    subtitle2: 'h6',
    body1: 'p',
    body2: 'p',
    inherit: 'p',
  },
  _p = C.forwardRef(function (r, l) {
    const { color: i, ...s } = at({ props: r, name: 'MuiTypography' }),
      u = !iT[i],
      f = oT({ ...s, ...(u && { color: i }) }),
      {
        align: p = 'inherit',
        className: m,
        component: h,
        gutterBottom: y = !1,
        noWrap: v = !1,
        paragraph: b = !1,
        variant: w = 'body1',
        variantMapping: S = Ay,
        ...A
      } = f,
      O = {
        ...f,
        align: p,
        color: i,
        className: m,
        component: h,
        gutterBottom: y,
        noWrap: v,
        paragraph: b,
        variant: w,
        variantMapping: S,
      },
      M = h || (b ? 'p' : S[w] || Ay[w]) || 'span',
      z = sT(O);
    return L.jsx(uT, {
      as: M,
      ref: l,
      className: Oe(z.root, m),
      ...A,
      ownerState: O,
      style: { ...(p !== 'inherit' && { '--Typography-textAlign': p }), ...A.style },
    });
  });
function cT(t) {
  return typeof t == 'function' ? t() : t;
}
const fT = C.forwardRef(function (r, l) {
  const { children: i, container: s, disablePortal: u = !1 } = r,
    [f, p] = C.useState(null),
    m = Xt(C.isValidElement(i) ? Eo(i) : null, l);
  if (
    (ja(() => {
      u || p(cT(s) || document.body);
    }, [s, u]),
    ja(() => {
      if (f && !u)
        return (
          qd(l, f),
          () => {
            qd(l, null);
          }
        );
    }, [l, f, u]),
    u)
  ) {
    if (C.isValidElement(i)) {
      const h = { ref: m };
      return C.cloneElement(i, h);
    }
    return i;
  }
  return f && hb.createPortal(i, f);
});
function Ys(t) {
  return parseInt(t, 10) || 0;
}
const dT = {
  shadow: {
    visibility: 'hidden',
    position: 'absolute',
    overflow: 'hidden',
    height: 0,
    top: 0,
    left: 0,
    transform: 'translateZ(0)',
  },
};
function pT(t) {
  return t == null || Object.keys(t).length === 0 || (t.outerHeightStyle === 0 && !t.overflowing);
}
const hT = C.forwardRef(function (r, l) {
  const { onChange: i, maxRows: s, minRows: u = 1, style: f, value: p, ...m } = r,
    { current: h } = C.useRef(p != null),
    y = C.useRef(null),
    v = Xt(l, y),
    b = C.useRef(null),
    w = C.useRef(null),
    S = C.useCallback(() => {
      const M = y.current,
        E = Ar(M).getComputedStyle(M);
      if (E.width === '0px') return { outerHeightStyle: 0, overflowing: !1 };
      const D = w.current;
      (D.style.width = E.width),
        (D.value = M.value || r.placeholder || 'x'),
        D.value.slice(-1) ===
          `
` && (D.value += ' ');
      const R = E.boxSizing,
        U = Ys(E.paddingBottom) + Ys(E.paddingTop),
        q = Ys(E.borderBottomWidth) + Ys(E.borderTopWidth),
        V = D.scrollHeight;
      D.value = 'x';
      const G = D.scrollHeight;
      let x = V;
      u && (x = Math.max(Number(u) * G, x)),
        s && (x = Math.min(Number(s) * G, x)),
        (x = Math.max(x, G));
      const P = x + (R === 'border-box' ? U + q : 0),
        I = Math.abs(x - V) <= 1;
      return { outerHeightStyle: P, overflowing: I };
    }, [s, u, r.placeholder]),
    A = C.useCallback(() => {
      const M = S();
      if (pT(M)) return;
      const z = M.outerHeightStyle,
        E = y.current;
      b.current !== z && ((b.current = z), (E.style.height = `${z}px`)),
        (E.style.overflow = M.overflowing ? 'hidden' : '');
    }, [S]);
  ja(() => {
    const M = () => {
      A();
    };
    let z;
    const E = Iv(M),
      D = y.current,
      R = Ar(D);
    R.addEventListener('resize', E);
    let U;
    return (
      typeof ResizeObserver < 'u' && ((U = new ResizeObserver(M)), U.observe(D)),
      () => {
        E.clear(), cancelAnimationFrame(z), R.removeEventListener('resize', E), U && U.disconnect();
      }
    );
  }, [S, A]),
    ja(() => {
      A();
    });
  const O = (M) => {
    h || A(), i && i(M);
  };
  return L.jsxs(C.Fragment, {
    children: [
      L.jsx('textarea', { value: p, onChange: O, ref: v, rows: u, style: f, ...m }),
      L.jsx('textarea', {
        'aria-hidden': !0,
        className: r.className,
        readOnly: !0,
        ref: w,
        tabIndex: -1,
        style: { ...dT.shadow, ...f, paddingTop: 0, paddingBottom: 0 },
      }),
    ],
  });
});
function Qd(t) {
  return typeof t == 'string';
}
function Hl({ props: t, states: r, muiFormControl: l }) {
  return r.reduce((i, s) => ((i[s] = t[s]), l && typeof t[s] > 'u' && (i[s] = l[s]), i), {});
}
const Bp = C.createContext(void 0);
function Pl() {
  return C.useContext(Bp);
}
function Oy(t) {
  return t != null && !(Array.isArray(t) && t.length === 0);
}
function mu(t, r = !1) {
  return (
    t && ((Oy(t.value) && t.value !== '') || (r && Oy(t.defaultValue) && t.defaultValue !== ''))
  );
}
function mT(t) {
  return t.startAdornment;
}
function gT(t) {
  return et('MuiInputBase', t);
}
const kl = tt('MuiInputBase', [
  'root',
  'formControl',
  'focused',
  'disabled',
  'adornedStart',
  'adornedEnd',
  'error',
  'sizeSmall',
  'multiline',
  'colorSecondary',
  'fullWidth',
  'hiddenLabel',
  'readOnly',
  'input',
  'inputSizeSmall',
  'inputMultiline',
  'inputTypeSearch',
  'inputAdornedStart',
  'inputAdornedEnd',
  'inputHiddenLabel',
]);
var My;
const ju = (t, r) => {
    const { ownerState: l } = t;
    return [
      r.root,
      l.formControl && r.formControl,
      l.startAdornment && r.adornedStart,
      l.endAdornment && r.adornedEnd,
      l.error && r.error,
      l.size === 'small' && r.sizeSmall,
      l.multiline && r.multiline,
      l.color && r[`color${ke(l.color)}`],
      l.fullWidth && r.fullWidth,
      l.hiddenLabel && r.hiddenLabel,
    ];
  },
  Lu = (t, r) => {
    const { ownerState: l } = t;
    return [
      r.input,
      l.size === 'small' && r.inputSizeSmall,
      l.multiline && r.inputMultiline,
      l.type === 'search' && r.inputTypeSearch,
      l.startAdornment && r.inputAdornedStart,
      l.endAdornment && r.inputAdornedEnd,
      l.hiddenLabel && r.inputHiddenLabel,
    ];
  },
  yT = (t) => {
    const {
        classes: r,
        color: l,
        disabled: i,
        error: s,
        endAdornment: u,
        focused: f,
        formControl: p,
        fullWidth: m,
        hiddenLabel: h,
        multiline: y,
        readOnly: v,
        size: b,
        startAdornment: w,
        type: S,
      } = t,
      A = {
        root: [
          'root',
          `color${ke(l)}`,
          i && 'disabled',
          s && 'error',
          m && 'fullWidth',
          f && 'focused',
          p && 'formControl',
          b && b !== 'medium' && `size${ke(b)}`,
          y && 'multiline',
          w && 'adornedStart',
          u && 'adornedEnd',
          h && 'hiddenLabel',
          v && 'readOnly',
        ],
        input: [
          'input',
          i && 'disabled',
          S === 'search' && 'inputTypeSearch',
          y && 'inputMultiline',
          b === 'small' && 'inputSizeSmall',
          h && 'inputHiddenLabel',
          w && 'inputAdornedStart',
          u && 'inputAdornedEnd',
          v && 'readOnly',
        ],
      };
    return rt(A, gT, r);
  },
  Hu = Ce('div', { name: 'MuiInputBase', slot: 'Root', overridesResolver: ju })(
    Bt(({ theme: t }) => ({
      ...t.typography.body1,
      color: (t.vars || t).palette.text.primary,
      lineHeight: '1.4375em',
      boxSizing: 'border-box',
      position: 'relative',
      cursor: 'text',
      display: 'inline-flex',
      alignItems: 'center',
      [`&.${kl.disabled}`]: { color: (t.vars || t).palette.text.disabled, cursor: 'default' },
      variants: [
        { props: ({ ownerState: r }) => r.multiline, style: { padding: '4px 0 5px' } },
        {
          props: ({ ownerState: r, size: l }) => r.multiline && l === 'small',
          style: { paddingTop: 1 },
        },
        { props: ({ ownerState: r }) => r.fullWidth, style: { width: '100%' } },
      ],
    })),
  ),
  Pu = Ce('input', { name: 'MuiInputBase', slot: 'Input', overridesResolver: Lu })(
    Bt(({ theme: t }) => {
      const r = t.palette.mode === 'light',
        l = {
          color: 'currentColor',
          ...(t.vars ? { opacity: t.vars.opacity.inputPlaceholder } : { opacity: r ? 0.42 : 0.5 }),
          transition: t.transitions.create('opacity', { duration: t.transitions.duration.shorter }),
        },
        i = { opacity: '0 !important' },
        s = t.vars ? { opacity: t.vars.opacity.inputPlaceholder } : { opacity: r ? 0.42 : 0.5 };
      return {
        font: 'inherit',
        letterSpacing: 'inherit',
        color: 'currentColor',
        padding: '4px 0 5px',
        border: 0,
        boxSizing: 'content-box',
        background: 'none',
        height: '1.4375em',
        margin: 0,
        WebkitTapHighlightColor: 'transparent',
        display: 'block',
        minWidth: 0,
        width: '100%',
        '&::-webkit-input-placeholder': l,
        '&::-moz-placeholder': l,
        '&::-ms-input-placeholder': l,
        '&:focus': { outline: 0 },
        '&:invalid': { boxShadow: 'none' },
        '&::-webkit-search-decoration': { WebkitAppearance: 'none' },
        [`label[data-shrink=false] + .${kl.formControl} &`]: {
          '&::-webkit-input-placeholder': i,
          '&::-moz-placeholder': i,
          '&::-ms-input-placeholder': i,
          '&:focus::-webkit-input-placeholder': s,
          '&:focus::-moz-placeholder': s,
          '&:focus::-ms-input-placeholder': s,
        },
        [`&.${kl.disabled}`]: {
          opacity: 1,
          WebkitTextFillColor: (t.vars || t).palette.text.disabled,
        },
        variants: [
          {
            props: ({ ownerState: u }) => !u.disableInjectingGlobalStyles,
            style: {
              animationName: 'mui-auto-fill-cancel',
              animationDuration: '10ms',
              '&:-webkit-autofill': { animationDuration: '5000s', animationName: 'mui-auto-fill' },
            },
          },
          { props: { size: 'small' }, style: { paddingTop: 1 } },
          {
            props: ({ ownerState: u }) => u.multiline,
            style: { height: 'auto', resize: 'none', padding: 0, paddingTop: 0 },
          },
          { props: { type: 'search' }, style: { MozAppearance: 'textfield' } },
        ],
      };
    }),
  ),
  $y = AR({
    '@keyframes mui-auto-fill': { from: { display: 'block' } },
    '@keyframes mui-auto-fill-cancel': { from: { display: 'block' } },
  }),
  Np = C.forwardRef(function (r, l) {
    const i = at({ props: r, name: 'MuiInputBase' }),
      {
        'aria-describedby': s,
        autoComplete: u,
        autoFocus: f,
        className: p,
        color: m,
        components: h = {},
        componentsProps: y = {},
        defaultValue: v,
        disabled: b,
        disableInjectingGlobalStyles: w,
        endAdornment: S,
        error: A,
        fullWidth: O = !1,
        id: M,
        inputComponent: z = 'input',
        inputProps: E = {},
        inputRef: D,
        margin: R,
        maxRows: U,
        minRows: q,
        multiline: V = !1,
        name: G,
        onBlur: x,
        onChange: P,
        onClick: I,
        onFocus: ee,
        onKeyDown: ne,
        onKeyUp: Z,
        placeholder: j,
        readOnly: te,
        renderSuffix: ie,
        rows: oe,
        size: _,
        slotProps: K = {},
        slots: se = {},
        startAdornment: ue,
        type: le = 'text',
        value: pe,
        ...ge
      } = i,
      Se = E.value != null ? E.value : pe,
      { current: ae } = C.useRef(Se != null),
      de = C.useRef(),
      ce = C.useCallback((We) => {}, []),
      be = Xt(de, D, E.ref, ce),
      [Te, Fe] = C.useState(!1),
      Me = Pl(),
      Ge = Hl({
        props: i,
        muiFormControl: Me,
        states: ['color', 'disabled', 'error', 'hiddenLabel', 'size', 'required', 'filled'],
      });
    (Ge.focused = Me ? Me.focused : Te),
      C.useEffect(() => {
        !Me && b && Te && (Fe(!1), x && x());
      }, [Me, b, Te, x]);
    const xt = Me && Me.onFilled,
      wt = Me && Me.onEmpty,
      lt = C.useCallback(
        (We) => {
          mu(We) ? xt && xt() : wt && wt();
        },
        [xt, wt],
      );
    ja(() => {
      ae && lt({ value: Se });
    }, [Se, lt, ae]);
    const It = (We) => {
        ee && ee(We), E.onFocus && E.onFocus(We), Me && Me.onFocus ? Me.onFocus(We) : Fe(!0);
      },
      Mt = (We) => {
        x && x(We), E.onBlur && E.onBlur(We), Me && Me.onBlur ? Me.onBlur(We) : Fe(!1);
      },
      it = (We, ...Br) => {
        if (!ae) {
          const zn = We.target || de.current;
          if (zn == null) throw new Error(Tr(1));
          lt({ value: zn.value });
        }
        E.onChange && E.onChange(We, ...Br), P && P(We, ...Br);
      };
    C.useEffect(() => {
      lt(de.current);
    }, []);
    const ve = (We) => {
      de.current && We.currentTarget === We.target && de.current.focus(), I && I(We);
    };
    let Mr = z,
      Je = E;
    V &&
      Mr === 'input' &&
      (oe
        ? (Je = { type: void 0, minRows: oe, maxRows: oe, ...Je })
        : (Je = { type: void 0, maxRows: U, minRows: q, ...Je }),
      (Mr = hT));
    const $r = (We) => {
      lt(We.animationName === 'mui-auto-fill-cancel' ? de.current : { value: 'x' });
    };
    C.useEffect(() => {
      Me && Me.setAdornedStart(!!ue);
    }, [Me, ue]);
    const zr = {
        ...i,
        color: Ge.color || 'primary',
        disabled: Ge.disabled,
        endAdornment: S,
        error: Ge.error,
        focused: Ge.focused,
        formControl: Me,
        fullWidth: O,
        hiddenLabel: Ge.hiddenLabel,
        multiline: V,
        size: Ge.size,
        startAdornment: ue,
        type: le,
      },
      Dr = yT(zr),
      $n = se.root || h.Root || Hu,
      _r = K.root || y.root || {},
      Hn = se.input || h.Input || Pu;
    return (
      (Je = { ...Je, ...(K.input ?? y.input) }),
      L.jsxs(C.Fragment, {
        children: [
          !w && typeof $y == 'function' && (My || (My = L.jsx($y, {}))),
          L.jsxs($n, {
            ..._r,
            ref: l,
            onClick: ve,
            ...ge,
            ...(!Qd($n) && { ownerState: { ...zr, ..._r.ownerState } }),
            className: Oe(Dr.root, _r.className, p, te && 'MuiInputBase-readOnly'),
            children: [
              ue,
              L.jsx(Bp.Provider, {
                value: null,
                children: L.jsx(Hn, {
                  'aria-invalid': Ge.error,
                  'aria-describedby': s,
                  autoComplete: u,
                  autoFocus: f,
                  defaultValue: v,
                  disabled: Ge.disabled,
                  id: M,
                  onAnimationStart: $r,
                  name: G,
                  placeholder: j,
                  readOnly: te,
                  required: Ge.required,
                  rows: oe,
                  value: Se,
                  onKeyDown: ne,
                  onKeyUp: Z,
                  type: le,
                  ...Je,
                  ...(!Qd(Hn) && { as: Mr, ownerState: { ...zr, ...Je.ownerState } }),
                  ref: be,
                  className: Oe(Dr.input, Je.className, te && 'MuiInputBase-readOnly'),
                  onBlur: Mt,
                  onChange: it,
                  onFocus: It,
                }),
              }),
              S,
              ie ? ie({ ...Ge, startAdornment: ue }) : null,
            ],
          }),
        ],
      })
    );
  });
function vT(t) {
  return et('MuiInput', t);
}
const Yi = { ...kl, ...tt('MuiInput', ['root', 'underline', 'input']) };
function bT(t) {
  return et('MuiOutlinedInput', t);
}
const Kn = { ...kl, ...tt('MuiOutlinedInput', ['root', 'notchedOutline', 'input']) };
function ST(t) {
  return et('MuiFilledInput', t);
}
const $a = {
    ...kl,
    ...tt('MuiFilledInput', [
      'root',
      'underline',
      'input',
      'adornedStart',
      'adornedEnd',
      'sizeSmall',
      'multiline',
      'hiddenLabel',
    ]),
  },
  xT = Uu(L.jsx('path', { d: 'M7 10l5 5 5-5z' }), 'ArrowDropDown'),
  ET = { entering: { opacity: 1 }, entered: { opacity: 1 } },
  CT = C.forwardRef(function (r, l) {
    const i = ku(),
      s = {
        enter: i.transitions.duration.enteringScreen,
        exit: i.transitions.duration.leavingScreen,
      },
      {
        addEndListener: u,
        appear: f = !0,
        children: p,
        easing: m,
        in: h,
        onEnter: y,
        onEntered: v,
        onEntering: b,
        onExit: w,
        onExited: S,
        onExiting: A,
        style: O,
        timeout: M = s,
        TransitionComponent: z = tr,
        ...E
      } = r,
      D = C.useRef(null),
      R = Xt(D, Eo(p), l),
      U = (ne) => (Z) => {
        if (ne) {
          const j = D.current;
          Z === void 0 ? ne(j) : ne(j, Z);
        }
      },
      q = U(b),
      V = U((ne, Z) => {
        mb(ne);
        const j = pu({ style: O, timeout: M, easing: m }, { mode: 'enter' });
        (ne.style.webkitTransition = i.transitions.create('opacity', j)),
          (ne.style.transition = i.transitions.create('opacity', j)),
          y && y(ne, Z);
      }),
      G = U(v),
      x = U(A),
      P = U((ne) => {
        const Z = pu({ style: O, timeout: M, easing: m }, { mode: 'exit' });
        (ne.style.webkitTransition = i.transitions.create('opacity', Z)),
          (ne.style.transition = i.transitions.create('opacity', Z)),
          w && w(ne);
      }),
      I = U(S),
      ee = (ne) => {
        u && u(D.current, ne);
      };
    return L.jsx(z, {
      appear: f,
      in: h,
      nodeRef: D,
      onEnter: V,
      onEntered: G,
      onEntering: q,
      onExit: P,
      onExited: I,
      onExiting: x,
      addEndListener: ee,
      timeout: M,
      ...E,
      children: (ne, { ownerState: Z, ...j }) =>
        C.cloneElement(p, {
          style: {
            opacity: 0,
            visibility: ne === 'exited' && !h ? 'hidden' : void 0,
            ...ET[ne],
            ...O,
            ...p.props.style,
          },
          ref: R,
          ...j,
        }),
    });
  });
function RT(t) {
  return et('MuiBackdrop', t);
}
tt('MuiBackdrop', ['root', 'invisible']);
const TT = (t) => {
    const { classes: r, invisible: l } = t;
    return rt({ root: ['root', l && 'invisible'] }, RT, r);
  },
  wT = Ce('div', {
    name: 'MuiBackdrop',
    slot: 'Root',
    overridesResolver: (t, r) => {
      const { ownerState: l } = t;
      return [r.root, l.invisible && r.invisible];
    },
  })({
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    WebkitTapHighlightColor: 'transparent',
    variants: [{ props: { invisible: !0 }, style: { backgroundColor: 'transparent' } }],
  }),
  AT = C.forwardRef(function (r, l) {
    const i = at({ props: r, name: 'MuiBackdrop' }),
      {
        children: s,
        className: u,
        component: f = 'div',
        invisible: p = !1,
        open: m,
        components: h = {},
        componentsProps: y = {},
        slotProps: v = {},
        slots: b = {},
        TransitionComponent: w,
        transitionDuration: S,
        ...A
      } = i,
      O = { ...i, component: f, invisible: p },
      M = TT(O),
      z = { transition: w, root: h.Root, ...b },
      E = { ...y, ...v },
      D = { slots: z, slotProps: E },
      [R, U] = kn('root', {
        elementType: wT,
        externalForwardedProps: D,
        className: Oe(M.root, u),
        ownerState: O,
      }),
      [q, V] = kn('transition', { elementType: CT, externalForwardedProps: D, ownerState: O });
    return L.jsx(q, {
      in: m,
      timeout: S,
      ...A,
      ...V,
      children: L.jsx(R, { 'aria-hidden': !0, ...U, classes: M, ref: l, children: s }),
    });
  }),
  OT = tt('MuiBox', ['root']),
  MT = fb(),
  gu = n2({
    themeId: Eu,
    defaultTheme: MT,
    defaultClassName: OT.root,
    generateClassName: Vv.generate,
  });
function $T(t) {
  return et('MuiButton', t);
}
const Ol = tt('MuiButton', [
    'root',
    'text',
    'textInherit',
    'textPrimary',
    'textSecondary',
    'textSuccess',
    'textError',
    'textInfo',
    'textWarning',
    'outlined',
    'outlinedInherit',
    'outlinedPrimary',
    'outlinedSecondary',
    'outlinedSuccess',
    'outlinedError',
    'outlinedInfo',
    'outlinedWarning',
    'contained',
    'containedInherit',
    'containedPrimary',
    'containedSecondary',
    'containedSuccess',
    'containedError',
    'containedInfo',
    'containedWarning',
    'disableElevation',
    'focusVisible',
    'disabled',
    'colorInherit',
    'colorPrimary',
    'colorSecondary',
    'colorSuccess',
    'colorError',
    'colorInfo',
    'colorWarning',
    'textSizeSmall',
    'textSizeMedium',
    'textSizeLarge',
    'outlinedSizeSmall',
    'outlinedSizeMedium',
    'outlinedSizeLarge',
    'containedSizeSmall',
    'containedSizeMedium',
    'containedSizeLarge',
    'sizeMedium',
    'sizeSmall',
    'sizeLarge',
    'fullWidth',
    'startIcon',
    'endIcon',
    'icon',
    'iconSizeSmall',
    'iconSizeMedium',
    'iconSizeLarge',
  ]),
  zT = C.createContext({}),
  DT = C.createContext(void 0),
  _T = (t) => {
    const { color: r, disableElevation: l, fullWidth: i, size: s, variant: u, classes: f } = t,
      p = {
        root: [
          'root',
          u,
          `${u}${ke(r)}`,
          `size${ke(s)}`,
          `${u}Size${ke(s)}`,
          `color${ke(r)}`,
          l && 'disableElevation',
          i && 'fullWidth',
        ],
        label: ['label'],
        startIcon: ['icon', 'startIcon', `iconSize${ke(s)}`],
        endIcon: ['icon', 'endIcon', `iconSize${ke(s)}`],
      },
      m = rt(p, $T, f);
    return { ...f, ...m };
  },
  yb = [
    { props: { size: 'small' }, style: { '& > *:nth-of-type(1)': { fontSize: 18 } } },
    { props: { size: 'medium' }, style: { '& > *:nth-of-type(1)': { fontSize: 20 } } },
    { props: { size: 'large' }, style: { '& > *:nth-of-type(1)': { fontSize: 22 } } },
  ],
  BT = Ce(nT, {
    shouldForwardProp: (t) => jn(t) || t === 'classes',
    name: 'MuiButton',
    slot: 'Root',
    overridesResolver: (t, r) => {
      const { ownerState: l } = t;
      return [
        r.root,
        r[l.variant],
        r[`${l.variant}${ke(l.color)}`],
        r[`size${ke(l.size)}`],
        r[`${l.variant}Size${ke(l.size)}`],
        l.color === 'inherit' && r.colorInherit,
        l.disableElevation && r.disableElevation,
        l.fullWidth && r.fullWidth,
      ];
    },
  })(
    Bt(({ theme: t }) => {
      const r = t.palette.mode === 'light' ? t.palette.grey[300] : t.palette.grey[800],
        l = t.palette.mode === 'light' ? t.palette.grey.A100 : t.palette.grey[700];
      return {
        ...t.typography.button,
        minWidth: 64,
        padding: '6px 16px',
        border: 0,
        borderRadius: (t.vars || t).shape.borderRadius,
        transition: t.transitions.create(
          ['background-color', 'box-shadow', 'border-color', 'color'],
          { duration: t.transitions.duration.short },
        ),
        '&:hover': { textDecoration: 'none' },
        [`&.${Ol.disabled}`]: { color: (t.vars || t).palette.action.disabled },
        variants: [
          {
            props: { variant: 'contained' },
            style: {
              color: 'var(--variant-containedColor)',
              backgroundColor: 'var(--variant-containedBg)',
              boxShadow: (t.vars || t).shadows[2],
              '&:hover': {
                boxShadow: (t.vars || t).shadows[4],
                '@media (hover: none)': { boxShadow: (t.vars || t).shadows[2] },
              },
              '&:active': { boxShadow: (t.vars || t).shadows[8] },
              [`&.${Ol.focusVisible}`]: { boxShadow: (t.vars || t).shadows[6] },
              [`&.${Ol.disabled}`]: {
                color: (t.vars || t).palette.action.disabled,
                boxShadow: (t.vars || t).shadows[0],
                backgroundColor: (t.vars || t).palette.action.disabledBackground,
              },
            },
          },
          {
            props: { variant: 'outlined' },
            style: {
              padding: '5px 15px',
              border: '1px solid currentColor',
              borderColor: 'var(--variant-outlinedBorder, currentColor)',
              backgroundColor: 'var(--variant-outlinedBg)',
              color: 'var(--variant-outlinedColor)',
              [`&.${Ol.disabled}`]: {
                border: `1px solid ${(t.vars || t).palette.action.disabledBackground}`,
              },
            },
          },
          {
            props: { variant: 'text' },
            style: {
              padding: '6px 8px',
              color: 'var(--variant-textColor)',
              backgroundColor: 'var(--variant-textBg)',
            },
          },
          ...Object.entries(t.palette)
            .filter(Ll())
            .map(([i]) => ({
              props: { color: i },
              style: {
                '--variant-textColor': (t.vars || t).palette[i].main,
                '--variant-outlinedColor': (t.vars || t).palette[i].main,
                '--variant-outlinedBorder': t.vars
                  ? `rgba(${t.vars.palette[i].mainChannel} / 0.5)`
                  : aa(t.palette[i].main, 0.5),
                '--variant-containedColor': (t.vars || t).palette[i].contrastText,
                '--variant-containedBg': (t.vars || t).palette[i].main,
                '@media (hover: hover)': {
                  '&:hover': {
                    '--variant-containedBg': (t.vars || t).palette[i].dark,
                    '--variant-textBg': t.vars
                      ? `rgba(${t.vars.palette[i].mainChannel} / ${t.vars.palette.action.hoverOpacity})`
                      : aa(t.palette[i].main, t.palette.action.hoverOpacity),
                    '--variant-outlinedBorder': (t.vars || t).palette[i].main,
                    '--variant-outlinedBg': t.vars
                      ? `rgba(${t.vars.palette[i].mainChannel} / ${t.vars.palette.action.hoverOpacity})`
                      : aa(t.palette[i].main, t.palette.action.hoverOpacity),
                  },
                },
              },
            })),
          {
            props: { color: 'inherit' },
            style: {
              color: 'inherit',
              borderColor: 'currentColor',
              '--variant-containedBg': t.vars ? t.vars.palette.Button.inheritContainedBg : r,
              '@media (hover: hover)': {
                '&:hover': {
                  '--variant-containedBg': t.vars
                    ? t.vars.palette.Button.inheritContainedHoverBg
                    : l,
                  '--variant-textBg': t.vars
                    ? `rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.hoverOpacity})`
                    : aa(t.palette.text.primary, t.palette.action.hoverOpacity),
                  '--variant-outlinedBg': t.vars
                    ? `rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.hoverOpacity})`
                    : aa(t.palette.text.primary, t.palette.action.hoverOpacity),
                },
              },
            },
          },
          {
            props: { size: 'small', variant: 'text' },
            style: { padding: '4px 5px', fontSize: t.typography.pxToRem(13) },
          },
          {
            props: { size: 'large', variant: 'text' },
            style: { padding: '8px 11px', fontSize: t.typography.pxToRem(15) },
          },
          {
            props: { size: 'small', variant: 'outlined' },
            style: { padding: '3px 9px', fontSize: t.typography.pxToRem(13) },
          },
          {
            props: { size: 'large', variant: 'outlined' },
            style: { padding: '7px 21px', fontSize: t.typography.pxToRem(15) },
          },
          {
            props: { size: 'small', variant: 'contained' },
            style: { padding: '4px 10px', fontSize: t.typography.pxToRem(13) },
          },
          {
            props: { size: 'large', variant: 'contained' },
            style: { padding: '8px 22px', fontSize: t.typography.pxToRem(15) },
          },
          {
            props: { disableElevation: !0 },
            style: {
              boxShadow: 'none',
              '&:hover': { boxShadow: 'none' },
              [`&.${Ol.focusVisible}`]: { boxShadow: 'none' },
              '&:active': { boxShadow: 'none' },
              [`&.${Ol.disabled}`]: { boxShadow: 'none' },
            },
          },
          { props: { fullWidth: !0 }, style: { width: '100%' } },
        ],
      };
    }),
  ),
  NT = Ce('span', {
    name: 'MuiButton',
    slot: 'StartIcon',
    overridesResolver: (t, r) => {
      const { ownerState: l } = t;
      return [r.startIcon, r[`iconSize${ke(l.size)}`]];
    },
  })({
    display: 'inherit',
    marginRight: 8,
    marginLeft: -4,
    variants: [{ props: { size: 'small' }, style: { marginLeft: -2 } }, ...yb],
  }),
  kT = Ce('span', {
    name: 'MuiButton',
    slot: 'EndIcon',
    overridesResolver: (t, r) => {
      const { ownerState: l } = t;
      return [r.endIcon, r[`iconSize${ke(l.size)}`]];
    },
  })({
    display: 'inherit',
    marginRight: -4,
    marginLeft: 8,
    variants: [{ props: { size: 'small' }, style: { marginRight: -2 } }, ...yb],
  }),
  UT = C.forwardRef(function (r, l) {
    const i = C.useContext(zT),
      s = C.useContext(DT),
      u = co(i, r),
      f = at({ props: u, name: 'MuiButton' }),
      {
        children: p,
        color: m = 'primary',
        component: h = 'button',
        className: y,
        disabled: v = !1,
        disableElevation: b = !1,
        disableFocusRipple: w = !1,
        endIcon: S,
        focusVisibleClassName: A,
        fullWidth: O = !1,
        size: M = 'medium',
        startIcon: z,
        type: E,
        variant: D = 'text',
        ...R
      } = f,
      U = {
        ...f,
        color: m,
        component: h,
        disabled: v,
        disableElevation: b,
        disableFocusRipple: w,
        fullWidth: O,
        size: M,
        type: E,
        variant: D,
      },
      q = _T(U),
      V = z && L.jsx(NT, { className: q.startIcon, ownerState: U, children: z }),
      G = S && L.jsx(kT, { className: q.endIcon, ownerState: U, children: S }),
      x = s || '';
    return L.jsxs(BT, {
      ownerState: U,
      className: Oe(i.className, q.root, y, x),
      component: h,
      disabled: v,
      focusRipple: !w,
      focusVisibleClassName: Oe(q.focusVisible, A),
      ref: l,
      type: E,
      ...R,
      classes: q,
      children: [V, p, G],
    });
  });
function jT(t) {
  return et('MuiCard', t);
}
tt('MuiCard', ['root']);
const LT = (t) => {
    const { classes: r } = t;
    return rt({ root: ['root'] }, jT, r);
  },
  HT = Ce(gb, { name: 'MuiCard', slot: 'Root', overridesResolver: (t, r) => r.root })({
    overflow: 'hidden',
  }),
  PT = C.forwardRef(function (r, l) {
    const i = at({ props: r, name: 'MuiCard' }),
      { className: s, raised: u = !1, ...f } = i,
      p = { ...i, raised: u },
      m = LT(p);
    return L.jsx(HT, {
      className: Oe(m.root, s),
      elevation: u ? 8 : void 0,
      ref: l,
      ownerState: p,
      ...f,
    });
  });
function qT(t) {
  return et('MuiCardContent', t);
}
tt('MuiCardContent', ['root']);
const FT = (t) => {
    const { classes: r } = t;
    return rt({ root: ['root'] }, qT, r);
  },
  GT = Ce('div', { name: 'MuiCardContent', slot: 'Root', overridesResolver: (t, r) => r.root })({
    padding: 16,
    '&:last-child': { paddingBottom: 24 },
  }),
  VT = C.forwardRef(function (r, l) {
    const i = at({ props: r, name: 'MuiCardContent' }),
      { className: s, component: u = 'div', ...f } = i,
      p = { ...i, component: u },
      m = FT(p);
    return L.jsx(GT, { as: u, className: Oe(m.root, s), ownerState: p, ref: l, ...f });
  });
function YT(t) {
  const r = Un(t);
  return r.body === t
    ? Ar(t).innerWidth > r.documentElement.clientWidth
    : t.scrollHeight > t.clientHeight;
}
function ro(t, r) {
  r ? t.setAttribute('aria-hidden', 'true') : t.removeAttribute('aria-hidden');
}
function zy(t) {
  return parseInt(Ar(t).getComputedStyle(t).paddingRight, 10) || 0;
}
function KT(t) {
  const l = [
      'TEMPLATE',
      'SCRIPT',
      'STYLE',
      'LINK',
      'MAP',
      'META',
      'NOSCRIPT',
      'PICTURE',
      'COL',
      'COLGROUP',
      'PARAM',
      'SLOT',
      'SOURCE',
      'TRACK',
    ].includes(t.tagName),
    i = t.tagName === 'INPUT' && t.getAttribute('type') === 'hidden';
  return l || i;
}
function Dy(t, r, l, i, s) {
  const u = [r, l, ...i];
  [].forEach.call(t.children, (f) => {
    const p = !u.includes(f),
      m = !KT(f);
    p && m && ro(f, s);
  });
}
function Cd(t, r) {
  let l = -1;
  return t.some((i, s) => (r(i) ? ((l = s), !0) : !1)), l;
}
function XT(t, r) {
  const l = [],
    i = t.container;
  if (!r.disableScrollLock) {
    if (YT(i)) {
      const f = tb(Ar(i));
      l.push({ value: i.style.paddingRight, property: 'padding-right', el: i }),
        (i.style.paddingRight = `${zy(i) + f}px`);
      const p = Un(i).querySelectorAll('.mui-fixed');
      [].forEach.call(p, (m) => {
        l.push({ value: m.style.paddingRight, property: 'padding-right', el: m }),
          (m.style.paddingRight = `${zy(m) + f}px`);
      });
    }
    let u;
    if (i.parentNode instanceof DocumentFragment) u = Un(i).body;
    else {
      const f = i.parentElement,
        p = Ar(i);
      u =
        (f == null ? void 0 : f.nodeName) === 'HTML' && p.getComputedStyle(f).overflowY === 'scroll'
          ? f
          : i;
    }
    l.push(
      { value: u.style.overflow, property: 'overflow', el: u },
      { value: u.style.overflowX, property: 'overflow-x', el: u },
      { value: u.style.overflowY, property: 'overflow-y', el: u },
    ),
      (u.style.overflow = 'hidden');
  }
  return () => {
    l.forEach(({ value: u, el: f, property: p }) => {
      u ? f.style.setProperty(p, u) : f.style.removeProperty(p);
    });
  };
}
function QT(t) {
  const r = [];
  return (
    [].forEach.call(t.children, (l) => {
      l.getAttribute('aria-hidden') === 'true' && r.push(l);
    }),
    r
  );
}
class WT {
  constructor() {
    (this.modals = []), (this.containers = []);
  }
  add(r, l) {
    let i = this.modals.indexOf(r);
    if (i !== -1) return i;
    (i = this.modals.length), this.modals.push(r), r.modalRef && ro(r.modalRef, !1);
    const s = QT(l);
    Dy(l, r.mount, r.modalRef, s, !0);
    const u = Cd(this.containers, (f) => f.container === l);
    return u !== -1
      ? (this.containers[u].modals.push(r), i)
      : (this.containers.push({ modals: [r], container: l, restore: null, hiddenSiblings: s }), i);
  }
  mount(r, l) {
    const i = Cd(this.containers, (u) => u.modals.includes(r)),
      s = this.containers[i];
    s.restore || (s.restore = XT(s, l));
  }
  remove(r, l = !0) {
    const i = this.modals.indexOf(r);
    if (i === -1) return i;
    const s = Cd(this.containers, (f) => f.modals.includes(r)),
      u = this.containers[s];
    if ((u.modals.splice(u.modals.indexOf(r), 1), this.modals.splice(i, 1), u.modals.length === 0))
      u.restore && u.restore(),
        r.modalRef && ro(r.modalRef, l),
        Dy(u.container, r.mount, r.modalRef, u.hiddenSiblings, !1),
        this.containers.splice(s, 1);
    else {
      const f = u.modals[u.modals.length - 1];
      f.modalRef && ro(f.modalRef, !1);
    }
    return i;
  }
  isTopModal(r) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === r;
  }
}
const IT = [
  'input',
  'select',
  'textarea',
  'a[href]',
  'button',
  '[tabindex]',
  'audio[controls]',
  'video[controls]',
  '[contenteditable]:not([contenteditable="false"])',
].join(',');
function ZT(t) {
  const r = parseInt(t.getAttribute('tabindex') || '', 10);
  return Number.isNaN(r)
    ? t.contentEditable === 'true' ||
      ((t.nodeName === 'AUDIO' || t.nodeName === 'VIDEO' || t.nodeName === 'DETAILS') &&
        t.getAttribute('tabindex') === null)
      ? 0
      : t.tabIndex
    : r;
}
function JT(t) {
  if (t.tagName !== 'INPUT' || t.type !== 'radio' || !t.name) return !1;
  const r = (i) => t.ownerDocument.querySelector(`input[type="radio"]${i}`);
  let l = r(`[name="${t.name}"]:checked`);
  return l || (l = r(`[name="${t.name}"]`)), l !== t;
}
function ew(t) {
  return !(t.disabled || (t.tagName === 'INPUT' && t.type === 'hidden') || JT(t));
}
function tw(t) {
  const r = [],
    l = [];
  return (
    Array.from(t.querySelectorAll(IT)).forEach((i, s) => {
      const u = ZT(i);
      u === -1 ||
        !ew(i) ||
        (u === 0 ? r.push(i) : l.push({ documentOrder: s, tabIndex: u, node: i }));
    }),
    l
      .sort((i, s) =>
        i.tabIndex === s.tabIndex ? i.documentOrder - s.documentOrder : i.tabIndex - s.tabIndex,
      )
      .map((i) => i.node)
      .concat(r)
  );
}
function nw() {
  return !0;
}
function rw(t) {
  const {
      children: r,
      disableAutoFocus: l = !1,
      disableEnforceFocus: i = !1,
      disableRestoreFocus: s = !1,
      getTabbable: u = tw,
      isEnabled: f = nw,
      open: p,
    } = t,
    m = C.useRef(!1),
    h = C.useRef(null),
    y = C.useRef(null),
    v = C.useRef(null),
    b = C.useRef(null),
    w = C.useRef(!1),
    S = C.useRef(null),
    A = Xt(Eo(r), S),
    O = C.useRef(null);
  C.useEffect(() => {
    !p || !S.current || (w.current = !l);
  }, [l, p]),
    C.useEffect(() => {
      if (!p || !S.current) return;
      const E = Un(S.current);
      return (
        S.current.contains(E.activeElement) ||
          (S.current.hasAttribute('tabIndex') || S.current.setAttribute('tabIndex', '-1'),
          w.current && S.current.focus()),
        () => {
          s ||
            (v.current && v.current.focus && ((m.current = !0), v.current.focus()),
            (v.current = null));
        }
      );
    }, [p]),
    C.useEffect(() => {
      if (!p || !S.current) return;
      const E = Un(S.current),
        D = (q) => {
          (O.current = q),
            !(i || !f() || q.key !== 'Tab') &&
              E.activeElement === S.current &&
              q.shiftKey &&
              ((m.current = !0), y.current && y.current.focus());
        },
        R = () => {
          var G, x;
          const q = S.current;
          if (q === null) return;
          if (!E.hasFocus() || !f() || m.current) {
            m.current = !1;
            return;
          }
          if (
            q.contains(E.activeElement) ||
            (i && E.activeElement !== h.current && E.activeElement !== y.current)
          )
            return;
          if (E.activeElement !== b.current) b.current = null;
          else if (b.current !== null) return;
          if (!w.current) return;
          let V = [];
          if (
            ((E.activeElement === h.current || E.activeElement === y.current) && (V = u(S.current)),
            V.length > 0)
          ) {
            const P = !!(
                (G = O.current) != null &&
                G.shiftKey &&
                ((x = O.current) == null ? void 0 : x.key) === 'Tab'
              ),
              I = V[0],
              ee = V[V.length - 1];
            typeof I != 'string' && typeof ee != 'string' && (P ? ee.focus() : I.focus());
          } else q.focus();
        };
      E.addEventListener('focusin', R), E.addEventListener('keydown', D, !0);
      const U = setInterval(() => {
        E.activeElement && E.activeElement.tagName === 'BODY' && R();
      }, 50);
      return () => {
        clearInterval(U),
          E.removeEventListener('focusin', R),
          E.removeEventListener('keydown', D, !0);
      };
    }, [l, i, s, f, p, u]);
  const M = (E) => {
      v.current === null && (v.current = E.relatedTarget), (w.current = !0), (b.current = E.target);
      const D = r.props.onFocus;
      D && D(E);
    },
    z = (E) => {
      v.current === null && (v.current = E.relatedTarget), (w.current = !0);
    };
  return L.jsxs(C.Fragment, {
    children: [
      L.jsx('div', { tabIndex: p ? 0 : -1, onFocus: z, ref: h, 'data-testid': 'sentinelStart' }),
      C.cloneElement(r, { ref: A, onFocus: M }),
      L.jsx('div', { tabIndex: p ? 0 : -1, onFocus: z, ref: y, 'data-testid': 'sentinelEnd' }),
    ],
  });
}
function aw(t) {
  return typeof t == 'function' ? t() : t;
}
function lw(t) {
  return t ? t.props.hasOwnProperty('in') : !1;
}
const _y = () => {},
  Ks = new WT();
function iw(t) {
  const {
      container: r,
      disableEscapeKeyDown: l = !1,
      disableScrollLock: i = !1,
      closeAfterTransition: s = !1,
      onTransitionEnter: u,
      onTransitionExited: f,
      children: p,
      onClose: m,
      open: h,
      rootRef: y,
    } = t,
    v = C.useRef({}),
    b = C.useRef(null),
    w = C.useRef(null),
    S = Xt(w, y),
    [A, O] = C.useState(!h),
    M = lw(p);
  let z = !0;
  (t['aria-hidden'] === 'false' || t['aria-hidden'] === !1) && (z = !1);
  const E = () => Un(b.current),
    D = () => ((v.current.modalRef = w.current), (v.current.mount = b.current), v.current),
    R = () => {
      Ks.mount(D(), { disableScrollLock: i }), w.current && (w.current.scrollTop = 0);
    },
    U = Dl(() => {
      const Z = aw(r) || E().body;
      Ks.add(D(), Z), w.current && R();
    }),
    q = () => Ks.isTopModal(D()),
    V = Dl((Z) => {
      (b.current = Z), Z && (h && q() ? R() : w.current && ro(w.current, z));
    }),
    G = C.useCallback(() => {
      Ks.remove(D(), z);
    }, [z]);
  C.useEffect(
    () => () => {
      G();
    },
    [G],
  ),
    C.useEffect(() => {
      h ? U() : (!M || !s) && G();
    }, [h, G, M, s, U]);
  const x = (Z) => (j) => {
      var te;
      (te = Z.onKeyDown) == null || te.call(Z, j),
        !(j.key !== 'Escape' || j.which === 229 || !q()) &&
          (l || (j.stopPropagation(), m && m(j, 'escapeKeyDown')));
    },
    P = (Z) => (j) => {
      var te;
      (te = Z.onClick) == null || te.call(Z, j),
        j.target === j.currentTarget && m && m(j, 'backdropClick');
    };
  return {
    getRootProps: (Z = {}) => {
      const j = rb(t);
      delete j.onTransitionEnter, delete j.onTransitionExited;
      const te = { ...j, ...Z };
      return { role: 'presentation', ...te, onKeyDown: x(te), ref: S };
    },
    getBackdropProps: (Z = {}) => {
      const j = Z;
      return { 'aria-hidden': !0, ...j, onClick: P(j), open: h };
    },
    getTransitionProps: () => {
      const Z = () => {
          O(!1), u && u();
        },
        j = () => {
          O(!0), f && f(), s && G();
        };
      return {
        onEnter: uy(Z, (p == null ? void 0 : p.props.onEnter) ?? _y),
        onExited: uy(j, (p == null ? void 0 : p.props.onExited) ?? _y),
      };
    },
    rootRef: S,
    portalRef: V,
    isTopModal: q,
    exited: A,
    hasTransition: M,
  };
}
function ow(t) {
  return et('MuiModal', t);
}
tt('MuiModal', ['root', 'hidden', 'backdrop']);
const sw = (t) => {
    const { open: r, exited: l, classes: i } = t;
    return rt({ root: ['root', !r && l && 'hidden'], backdrop: ['backdrop'] }, ow, i);
  },
  uw = Ce('div', {
    name: 'MuiModal',
    slot: 'Root',
    overridesResolver: (t, r) => {
      const { ownerState: l } = t;
      return [r.root, !l.open && l.exited && r.hidden];
    },
  })(
    Bt(({ theme: t }) => ({
      position: 'fixed',
      zIndex: (t.vars || t).zIndex.modal,
      right: 0,
      bottom: 0,
      top: 0,
      left: 0,
      variants: [
        { props: ({ ownerState: r }) => !r.open && r.exited, style: { visibility: 'hidden' } },
      ],
    })),
  ),
  cw = Ce(AT, { name: 'MuiModal', slot: 'Backdrop', overridesResolver: (t, r) => r.backdrop })({
    zIndex: -1,
  }),
  fw = C.forwardRef(function (r, l) {
    const i = at({ name: 'MuiModal', props: r }),
      {
        BackdropComponent: s = cw,
        BackdropProps: u,
        classes: f,
        className: p,
        closeAfterTransition: m = !1,
        children: h,
        container: y,
        component: v,
        components: b = {},
        componentsProps: w = {},
        disableAutoFocus: S = !1,
        disableEnforceFocus: A = !1,
        disableEscapeKeyDown: O = !1,
        disablePortal: M = !1,
        disableRestoreFocus: z = !1,
        disableScrollLock: E = !1,
        hideBackdrop: D = !1,
        keepMounted: R = !1,
        onBackdropClick: U,
        onClose: q,
        onTransitionEnter: V,
        onTransitionExited: G,
        open: x,
        slotProps: P = {},
        slots: I = {},
        theme: ee,
        ...ne
      } = i,
      Z = {
        ...i,
        closeAfterTransition: m,
        disableAutoFocus: S,
        disableEnforceFocus: A,
        disableEscapeKeyDown: O,
        disablePortal: M,
        disableRestoreFocus: z,
        disableScrollLock: E,
        hideBackdrop: D,
        keepMounted: R,
      },
      {
        getRootProps: j,
        getBackdropProps: te,
        getTransitionProps: ie,
        portalRef: oe,
        isTopModal: _,
        exited: K,
        hasTransition: se,
      } = iw({ ...Z, rootRef: l }),
      ue = { ...Z, exited: K },
      le = sw(ue),
      pe = {};
    if ((h.props.tabIndex === void 0 && (pe.tabIndex = '-1'), se)) {
      const { onEnter: Te, onExited: Fe } = ie();
      (pe.onEnter = Te), (pe.onExited = Fe);
    }
    const ge = {
        ...ne,
        slots: { root: b.Root, backdrop: b.Backdrop, ...I },
        slotProps: { ...w, ...P },
      },
      [Se, ae] = kn('root', {
        elementType: uw,
        externalForwardedProps: ge,
        getSlotProps: j,
        additionalProps: { ref: l, as: v },
        ownerState: ue,
        className: Oe(
          p,
          le == null ? void 0 : le.root,
          !ue.open && ue.exited && (le == null ? void 0 : le.hidden),
        ),
      }),
      [de, ce] = kn('backdrop', {
        elementType: s,
        externalForwardedProps: ge,
        additionalProps: u,
        getSlotProps: (Te) =>
          te({
            ...Te,
            onClick: (Fe) => {
              U && U(Fe), Te != null && Te.onClick && Te.onClick(Fe);
            },
          }),
        className: Oe(u == null ? void 0 : u.className, le == null ? void 0 : le.backdrop),
        ownerState: ue,
      }),
      be = Xt(u == null ? void 0 : u.ref, ce.ref);
    return !R && !x && (!se || K)
      ? null
      : L.jsx(fT, {
          ref: oe,
          container: y,
          disablePortal: M,
          children: L.jsxs(Se, {
            ...ae,
            children: [
              !D && s ? L.jsx(de, { ...ce, ref: be }) : null,
              L.jsx(rw, {
                disableEnforceFocus: A,
                disableAutoFocus: S,
                disableRestoreFocus: z,
                isEnabled: _,
                open: x,
                children: C.cloneElement(h, pe),
              }),
            ],
          }),
        });
  }),
  dw = (t) => {
    const {
        classes: r,
        disableUnderline: l,
        startAdornment: i,
        endAdornment: s,
        size: u,
        hiddenLabel: f,
        multiline: p,
      } = t,
      m = {
        root: [
          'root',
          !l && 'underline',
          i && 'adornedStart',
          s && 'adornedEnd',
          u === 'small' && `size${ke(u)}`,
          f && 'hiddenLabel',
          p && 'multiline',
        ],
        input: ['input'],
      },
      h = rt(m, ST, r);
    return { ...r, ...h };
  },
  pw = Ce(Hu, {
    shouldForwardProp: (t) => jn(t) || t === 'classes',
    name: 'MuiFilledInput',
    slot: 'Root',
    overridesResolver: (t, r) => {
      const { ownerState: l } = t;
      return [...ju(t, r), !l.disableUnderline && r.underline];
    },
  })(
    Bt(({ theme: t }) => {
      const r = t.palette.mode === 'light',
        l = r ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)',
        i = r ? 'rgba(0, 0, 0, 0.06)' : 'rgba(255, 255, 255, 0.09)',
        s = r ? 'rgba(0, 0, 0, 0.09)' : 'rgba(255, 255, 255, 0.13)',
        u = r ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)';
      return {
        position: 'relative',
        backgroundColor: t.vars ? t.vars.palette.FilledInput.bg : i,
        borderTopLeftRadius: (t.vars || t).shape.borderRadius,
        borderTopRightRadius: (t.vars || t).shape.borderRadius,
        transition: t.transitions.create('background-color', {
          duration: t.transitions.duration.shorter,
          easing: t.transitions.easing.easeOut,
        }),
        '&:hover': {
          backgroundColor: t.vars ? t.vars.palette.FilledInput.hoverBg : s,
          '@media (hover: none)': { backgroundColor: t.vars ? t.vars.palette.FilledInput.bg : i },
        },
        [`&.${$a.focused}`]: { backgroundColor: t.vars ? t.vars.palette.FilledInput.bg : i },
        [`&.${$a.disabled}`]: {
          backgroundColor: t.vars ? t.vars.palette.FilledInput.disabledBg : u,
        },
        variants: [
          {
            props: ({ ownerState: f }) => !f.disableUnderline,
            style: {
              '&::after': {
                left: 0,
                bottom: 0,
                content: '""',
                position: 'absolute',
                right: 0,
                transform: 'scaleX(0)',
                transition: t.transitions.create('transform', {
                  duration: t.transitions.duration.shorter,
                  easing: t.transitions.easing.easeOut,
                }),
                pointerEvents: 'none',
              },
              [`&.${$a.focused}:after`]: { transform: 'scaleX(1) translateX(0)' },
              [`&.${$a.error}`]: {
                '&::before, &::after': { borderBottomColor: (t.vars || t).palette.error.main },
              },
              '&::before': {
                borderBottom: `1px solid ${t.vars ? `rgba(${t.vars.palette.common.onBackgroundChannel} / ${t.vars.opacity.inputUnderline})` : l}`,
                left: 0,
                bottom: 0,
                content: '"\\00a0"',
                position: 'absolute',
                right: 0,
                transition: t.transitions.create('border-bottom-color', {
                  duration: t.transitions.duration.shorter,
                }),
                pointerEvents: 'none',
              },
              [`&:hover:not(.${$a.disabled}, .${$a.error}):before`]: {
                borderBottom: `1px solid ${(t.vars || t).palette.text.primary}`,
              },
              [`&.${$a.disabled}:before`]: { borderBottomStyle: 'dotted' },
            },
          },
          ...Object.entries(t.palette)
            .filter(Ll())
            .map(([f]) => {
              var p;
              return {
                props: { disableUnderline: !1, color: f },
                style: {
                  '&::after': {
                    borderBottom: `2px solid ${(p = (t.vars || t).palette[f]) == null ? void 0 : p.main}`,
                  },
                },
              };
            }),
          { props: ({ ownerState: f }) => f.startAdornment, style: { paddingLeft: 12 } },
          { props: ({ ownerState: f }) => f.endAdornment, style: { paddingRight: 12 } },
          { props: ({ ownerState: f }) => f.multiline, style: { padding: '25px 12px 8px' } },
          {
            props: ({ ownerState: f, size: p }) => f.multiline && p === 'small',
            style: { paddingTop: 21, paddingBottom: 4 },
          },
          {
            props: ({ ownerState: f }) => f.multiline && f.hiddenLabel,
            style: { paddingTop: 16, paddingBottom: 17 },
          },
          {
            props: ({ ownerState: f }) => f.multiline && f.hiddenLabel && f.size === 'small',
            style: { paddingTop: 8, paddingBottom: 9 },
          },
        ],
      };
    }),
  ),
  hw = Ce(Pu, { name: 'MuiFilledInput', slot: 'Input', overridesResolver: Lu })(
    Bt(({ theme: t }) => ({
      paddingTop: 25,
      paddingRight: 12,
      paddingBottom: 8,
      paddingLeft: 12,
      ...(!t.vars && {
        '&:-webkit-autofill': {
          WebkitBoxShadow: t.palette.mode === 'light' ? null : '0 0 0 100px #266798 inset',
          WebkitTextFillColor: t.palette.mode === 'light' ? null : '#fff',
          caretColor: t.palette.mode === 'light' ? null : '#fff',
          borderTopLeftRadius: 'inherit',
          borderTopRightRadius: 'inherit',
        },
      }),
      ...(t.vars && {
        '&:-webkit-autofill': { borderTopLeftRadius: 'inherit', borderTopRightRadius: 'inherit' },
        [t.getColorSchemeSelector('dark')]: {
          '&:-webkit-autofill': {
            WebkitBoxShadow: '0 0 0 100px #266798 inset',
            WebkitTextFillColor: '#fff',
            caretColor: '#fff',
          },
        },
      }),
      variants: [
        { props: { size: 'small' }, style: { paddingTop: 21, paddingBottom: 4 } },
        {
          props: ({ ownerState: r }) => r.hiddenLabel,
          style: { paddingTop: 16, paddingBottom: 17 },
        },
        { props: ({ ownerState: r }) => r.startAdornment, style: { paddingLeft: 0 } },
        { props: ({ ownerState: r }) => r.endAdornment, style: { paddingRight: 0 } },
        {
          props: ({ ownerState: r }) => r.hiddenLabel && r.size === 'small',
          style: { paddingTop: 8, paddingBottom: 9 },
        },
        {
          props: ({ ownerState: r }) => r.multiline,
          style: { paddingTop: 0, paddingBottom: 0, paddingLeft: 0, paddingRight: 0 },
        },
      ],
    })),
  ),
  kp = C.forwardRef(function (r, l) {
    const i = at({ props: r, name: 'MuiFilledInput' }),
      {
        disableUnderline: s = !1,
        components: u = {},
        componentsProps: f,
        fullWidth: p = !1,
        hiddenLabel: m,
        inputComponent: h = 'input',
        multiline: y = !1,
        slotProps: v,
        slots: b = {},
        type: w = 'text',
        ...S
      } = i,
      A = { ...i, disableUnderline: s, fullWidth: p, inputComponent: h, multiline: y, type: w },
      O = dw(i),
      M = { root: { ownerState: A }, input: { ownerState: A } },
      z = (v ?? f) ? Kt(M, v ?? f) : M,
      E = b.root ?? u.Root ?? pw,
      D = b.input ?? u.Input ?? hw;
    return L.jsx(Np, {
      slots: { root: E, input: D },
      slotProps: z,
      fullWidth: p,
      inputComponent: h,
      multiline: y,
      ref: l,
      type: w,
      ...S,
      classes: O,
    });
  });
kp.muiName = 'Input';
function mw(t) {
  return et('MuiFormControl', t);
}
tt('MuiFormControl', [
  'root',
  'marginNone',
  'marginNormal',
  'marginDense',
  'fullWidth',
  'disabled',
]);
const gw = (t) => {
    const { classes: r, margin: l, fullWidth: i } = t,
      s = { root: ['root', l !== 'none' && `margin${ke(l)}`, i && 'fullWidth'] };
    return rt(s, mw, r);
  },
  yw = Ce('div', {
    name: 'MuiFormControl',
    slot: 'Root',
    overridesResolver: (t, r) => {
      const { ownerState: l } = t;
      return [r.root, r[`margin${ke(l.margin)}`], l.fullWidth && r.fullWidth];
    },
  })({
    display: 'inline-flex',
    flexDirection: 'column',
    position: 'relative',
    minWidth: 0,
    padding: 0,
    margin: 0,
    border: 0,
    verticalAlign: 'top',
    variants: [
      { props: { margin: 'normal' }, style: { marginTop: 16, marginBottom: 8 } },
      { props: { margin: 'dense' }, style: { marginTop: 8, marginBottom: 4 } },
      { props: { fullWidth: !0 }, style: { width: '100%' } },
    ],
  }),
  vw = C.forwardRef(function (r, l) {
    const i = at({ props: r, name: 'MuiFormControl' }),
      {
        children: s,
        className: u,
        color: f = 'primary',
        component: p = 'div',
        disabled: m = !1,
        error: h = !1,
        focused: y,
        fullWidth: v = !1,
        hiddenLabel: b = !1,
        margin: w = 'none',
        required: S = !1,
        size: A = 'medium',
        variant: O = 'outlined',
        ...M
      } = i,
      z = {
        ...i,
        color: f,
        component: p,
        disabled: m,
        error: h,
        fullWidth: v,
        hiddenLabel: b,
        margin: w,
        required: S,
        size: A,
        variant: O,
      },
      E = gw(z),
      [D, R] = C.useState(() => {
        let ee = !1;
        return (
          s &&
            C.Children.forEach(s, (ne) => {
              if (!tu(ne, ['Input', 'Select'])) return;
              const Z = tu(ne, ['Select']) ? ne.props.input : ne;
              Z && mT(Z.props) && (ee = !0);
            }),
          ee
        );
      }),
      [U, q] = C.useState(() => {
        let ee = !1;
        return (
          s &&
            C.Children.forEach(s, (ne) => {
              tu(ne, ['Input', 'Select']) &&
                (mu(ne.props, !0) || mu(ne.props.inputProps, !0)) &&
                (ee = !0);
            }),
          ee
        );
      }),
      [V, G] = C.useState(!1);
    m && V && G(!1);
    const x = y !== void 0 && !m ? y : V;
    let P;
    C.useRef(!1);
    const I = C.useMemo(
      () => ({
        adornedStart: D,
        setAdornedStart: R,
        color: f,
        disabled: m,
        error: h,
        filled: U,
        focused: x,
        fullWidth: v,
        hiddenLabel: b,
        size: A,
        onBlur: () => {
          G(!1);
        },
        onEmpty: () => {
          q(!1);
        },
        onFilled: () => {
          q(!0);
        },
        onFocus: () => {
          G(!0);
        },
        registerEffect: P,
        required: S,
        variant: O,
      }),
      [D, f, m, h, U, x, v, b, P, S, A, O],
    );
    return L.jsx(Bp.Provider, {
      value: I,
      children: L.jsx(yw, {
        as: p,
        ownerState: z,
        className: Oe(E.root, u),
        ref: l,
        ...M,
        children: s,
      }),
    });
  });
function bw(t) {
  return et('MuiFormHelperText', t);
}
const By = tt('MuiFormHelperText', [
  'root',
  'error',
  'disabled',
  'sizeSmall',
  'sizeMedium',
  'contained',
  'focused',
  'filled',
  'required',
]);
var Ny;
const Sw = (t) => {
    const {
        classes: r,
        contained: l,
        size: i,
        disabled: s,
        error: u,
        filled: f,
        focused: p,
        required: m,
      } = t,
      h = {
        root: [
          'root',
          s && 'disabled',
          u && 'error',
          i && `size${ke(i)}`,
          l && 'contained',
          p && 'focused',
          f && 'filled',
          m && 'required',
        ],
      };
    return rt(h, bw, r);
  },
  xw = Ce('p', {
    name: 'MuiFormHelperText',
    slot: 'Root',
    overridesResolver: (t, r) => {
      const { ownerState: l } = t;
      return [
        r.root,
        l.size && r[`size${ke(l.size)}`],
        l.contained && r.contained,
        l.filled && r.filled,
      ];
    },
  })(
    Bt(({ theme: t }) => ({
      color: (t.vars || t).palette.text.secondary,
      ...t.typography.caption,
      textAlign: 'left',
      marginTop: 3,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0,
      [`&.${By.disabled}`]: { color: (t.vars || t).palette.text.disabled },
      [`&.${By.error}`]: { color: (t.vars || t).palette.error.main },
      variants: [
        { props: { size: 'small' }, style: { marginTop: 4 } },
        { props: ({ ownerState: r }) => r.contained, style: { marginLeft: 14, marginRight: 14 } },
      ],
    })),
  ),
  Ew = C.forwardRef(function (r, l) {
    const i = at({ props: r, name: 'MuiFormHelperText' }),
      {
        children: s,
        className: u,
        component: f = 'p',
        disabled: p,
        error: m,
        filled: h,
        focused: y,
        margin: v,
        required: b,
        variant: w,
        ...S
      } = i,
      A = Pl(),
      O = Hl({
        props: i,
        muiFormControl: A,
        states: ['variant', 'size', 'disabled', 'error', 'filled', 'focused', 'required'],
      }),
      M = {
        ...i,
        component: f,
        contained: O.variant === 'filled' || O.variant === 'outlined',
        variant: O.variant,
        size: O.size,
        disabled: O.disabled,
        error: O.error,
        filled: O.filled,
        focused: O.focused,
        required: O.required,
      };
    delete M.ownerState;
    const z = Sw(M);
    return L.jsx(xw, {
      as: f,
      className: Oe(z.root, u),
      ref: l,
      ...S,
      ownerState: M,
      children:
        s === ' '
          ? Ny ||
            (Ny = L.jsx('span', { className: 'notranslate', 'aria-hidden': !0, children: '​' }))
          : s,
    });
  });
function Cw(t) {
  return et('MuiFormLabel', t);
}
const ao = tt('MuiFormLabel', [
    'root',
    'colorSecondary',
    'focused',
    'disabled',
    'error',
    'filled',
    'required',
    'asterisk',
  ]),
  Rw = (t) => {
    const { classes: r, color: l, focused: i, disabled: s, error: u, filled: f, required: p } = t,
      m = {
        root: [
          'root',
          `color${ke(l)}`,
          s && 'disabled',
          u && 'error',
          f && 'filled',
          i && 'focused',
          p && 'required',
        ],
        asterisk: ['asterisk', u && 'error'],
      };
    return rt(m, Cw, r);
  },
  Tw = Ce('label', {
    name: 'MuiFormLabel',
    slot: 'Root',
    overridesResolver: (t, r) => {
      const { ownerState: l } = t;
      return [r.root, l.color === 'secondary' && r.colorSecondary, l.filled && r.filled];
    },
  })(
    Bt(({ theme: t }) => ({
      color: (t.vars || t).palette.text.secondary,
      ...t.typography.body1,
      lineHeight: '1.4375em',
      padding: 0,
      position: 'relative',
      variants: [
        ...Object.entries(t.palette)
          .filter(Ll())
          .map(([r]) => ({
            props: { color: r },
            style: { [`&.${ao.focused}`]: { color: (t.vars || t).palette[r].main } },
          })),
        {
          props: {},
          style: {
            [`&.${ao.disabled}`]: { color: (t.vars || t).palette.text.disabled },
            [`&.${ao.error}`]: { color: (t.vars || t).palette.error.main },
          },
        },
      ],
    })),
  ),
  ww = Ce('span', {
    name: 'MuiFormLabel',
    slot: 'Asterisk',
    overridesResolver: (t, r) => r.asterisk,
  })(Bt(({ theme: t }) => ({ [`&.${ao.error}`]: { color: (t.vars || t).palette.error.main } }))),
  Aw = C.forwardRef(function (r, l) {
    const i = at({ props: r, name: 'MuiFormLabel' }),
      {
        children: s,
        className: u,
        color: f,
        component: p = 'label',
        disabled: m,
        error: h,
        filled: y,
        focused: v,
        required: b,
        ...w
      } = i,
      S = Pl(),
      A = Hl({
        props: i,
        muiFormControl: S,
        states: ['color', 'required', 'focused', 'disabled', 'error', 'filled'],
      }),
      O = {
        ...i,
        color: A.color || 'primary',
        component: p,
        disabled: A.disabled,
        error: A.error,
        filled: A.filled,
        focused: A.focused,
        required: A.required,
      },
      M = Rw(O);
    return L.jsxs(Tw, {
      as: p,
      ownerState: O,
      className: Oe(M.root, u),
      ref: l,
      ...w,
      children: [
        s,
        A.required &&
          L.jsxs(ww, {
            ownerState: O,
            'aria-hidden': !0,
            className: M.asterisk,
            children: [' ', '*'],
          }),
      ],
    });
  }),
  Xs = Q2({
    createStyledComponent: Ce('div', {
      name: 'MuiGrid2',
      slot: 'Root',
      overridesResolver: (t, r) => {
        const { ownerState: l } = t;
        return [r.root, l.container && r.container];
      },
    }),
    componentName: 'MuiGrid2',
    useThemeProps: (t) => at({ props: t, name: 'MuiGrid2' }),
    useTheme: ku,
  });
function Wd(t) {
  return `scale(${t}, ${t ** 2})`;
}
const Ow = {
    entering: { opacity: 1, transform: Wd(1) },
    entered: { opacity: 1, transform: 'none' },
  },
  Rd =
    typeof navigator < 'u' &&
    /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) &&
    /(os |version\/)15(.|_)4/i.test(navigator.userAgent),
  Id = C.forwardRef(function (r, l) {
    const {
        addEndListener: i,
        appear: s = !0,
        children: u,
        easing: f,
        in: p,
        onEnter: m,
        onEntered: h,
        onEntering: y,
        onExit: v,
        onExited: b,
        onExiting: w,
        style: S,
        timeout: A = 'auto',
        TransitionComponent: O = tr,
        ...M
      } = r,
      z = eb(),
      E = C.useRef(),
      D = ku(),
      R = C.useRef(null),
      U = Xt(R, Eo(u), l),
      q = (Z) => (j) => {
        if (Z) {
          const te = R.current;
          j === void 0 ? Z(te) : Z(te, j);
        }
      },
      V = q(y),
      G = q((Z, j) => {
        mb(Z);
        const {
          duration: te,
          delay: ie,
          easing: oe,
        } = pu({ style: S, timeout: A, easing: f }, { mode: 'enter' });
        let _;
        A === 'auto'
          ? ((_ = D.transitions.getAutoHeightDuration(Z.clientHeight)), (E.current = _))
          : (_ = te),
          (Z.style.transition = [
            D.transitions.create('opacity', { duration: _, delay: ie }),
            D.transitions.create('transform', {
              duration: Rd ? _ : _ * 0.666,
              delay: ie,
              easing: oe,
            }),
          ].join(',')),
          m && m(Z, j);
      }),
      x = q(h),
      P = q(w),
      I = q((Z) => {
        const {
          duration: j,
          delay: te,
          easing: ie,
        } = pu({ style: S, timeout: A, easing: f }, { mode: 'exit' });
        let oe;
        A === 'auto'
          ? ((oe = D.transitions.getAutoHeightDuration(Z.clientHeight)), (E.current = oe))
          : (oe = j),
          (Z.style.transition = [
            D.transitions.create('opacity', { duration: oe, delay: te }),
            D.transitions.create('transform', {
              duration: Rd ? oe : oe * 0.666,
              delay: Rd ? te : te || oe * 0.333,
              easing: ie,
            }),
          ].join(',')),
          (Z.style.opacity = 0),
          (Z.style.transform = Wd(0.75)),
          v && v(Z);
      }),
      ee = q(b),
      ne = (Z) => {
        A === 'auto' && z.start(E.current || 0, Z), i && i(R.current, Z);
      };
    return L.jsx(O, {
      appear: s,
      in: p,
      nodeRef: R,
      onEnter: G,
      onEntered: x,
      onEntering: V,
      onExit: I,
      onExited: ee,
      onExiting: P,
      addEndListener: ne,
      timeout: A === 'auto' ? null : A,
      ...M,
      children: (Z, { ownerState: j, ...te }) =>
        C.cloneElement(u, {
          style: {
            opacity: 0,
            transform: Wd(0.75),
            visibility: Z === 'exited' && !p ? 'hidden' : void 0,
            ...Ow[Z],
            ...S,
            ...u.props.style,
          },
          ref: U,
          ...te,
        }),
    });
  });
Id && (Id.muiSupportAuto = !0);
const Mw = (t) => {
    const { classes: r, disableUnderline: l } = t,
      s = rt({ root: ['root', !l && 'underline'], input: ['input'] }, vT, r);
    return { ...r, ...s };
  },
  $w = Ce(Hu, {
    shouldForwardProp: (t) => jn(t) || t === 'classes',
    name: 'MuiInput',
    slot: 'Root',
    overridesResolver: (t, r) => {
      const { ownerState: l } = t;
      return [...ju(t, r), !l.disableUnderline && r.underline];
    },
  })(
    Bt(({ theme: t }) => {
      let l = t.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)';
      return (
        t.vars &&
          (l = `rgba(${t.vars.palette.common.onBackgroundChannel} / ${t.vars.opacity.inputUnderline})`),
        {
          position: 'relative',
          variants: [
            {
              props: ({ ownerState: i }) => i.formControl,
              style: { 'label + &': { marginTop: 16 } },
            },
            {
              props: ({ ownerState: i }) => !i.disableUnderline,
              style: {
                '&::after': {
                  left: 0,
                  bottom: 0,
                  content: '""',
                  position: 'absolute',
                  right: 0,
                  transform: 'scaleX(0)',
                  transition: t.transitions.create('transform', {
                    duration: t.transitions.duration.shorter,
                    easing: t.transitions.easing.easeOut,
                  }),
                  pointerEvents: 'none',
                },
                [`&.${Yi.focused}:after`]: { transform: 'scaleX(1) translateX(0)' },
                [`&.${Yi.error}`]: {
                  '&::before, &::after': { borderBottomColor: (t.vars || t).palette.error.main },
                },
                '&::before': {
                  borderBottom: `1px solid ${l}`,
                  left: 0,
                  bottom: 0,
                  content: '"\\00a0"',
                  position: 'absolute',
                  right: 0,
                  transition: t.transitions.create('border-bottom-color', {
                    duration: t.transitions.duration.shorter,
                  }),
                  pointerEvents: 'none',
                },
                [`&:hover:not(.${Yi.disabled}, .${Yi.error}):before`]: {
                  borderBottom: `2px solid ${(t.vars || t).palette.text.primary}`,
                  '@media (hover: none)': { borderBottom: `1px solid ${l}` },
                },
                [`&.${Yi.disabled}:before`]: { borderBottomStyle: 'dotted' },
              },
            },
            ...Object.entries(t.palette)
              .filter(Ll())
              .map(([i]) => ({
                props: { color: i, disableUnderline: !1 },
                style: {
                  '&::after': { borderBottom: `2px solid ${(t.vars || t).palette[i].main}` },
                },
              })),
          ],
        }
      );
    }),
  ),
  zw = Ce(Pu, { name: 'MuiInput', slot: 'Input', overridesResolver: Lu })({}),
  Up = C.forwardRef(function (r, l) {
    const i = at({ props: r, name: 'MuiInput' }),
      {
        disableUnderline: s = !1,
        components: u = {},
        componentsProps: f,
        fullWidth: p = !1,
        inputComponent: m = 'input',
        multiline: h = !1,
        slotProps: y,
        slots: v = {},
        type: b = 'text',
        ...w
      } = i,
      S = Mw(i),
      O = { root: { ownerState: { disableUnderline: s } } },
      M = (y ?? f) ? Kt(y ?? f, O) : O,
      z = v.root ?? u.Root ?? $w,
      E = v.input ?? u.Input ?? zw;
    return L.jsx(Np, {
      slots: { root: z, input: E },
      slotProps: M,
      fullWidth: p,
      inputComponent: m,
      multiline: h,
      ref: l,
      type: b,
      ...w,
      classes: S,
    });
  });
Up.muiName = 'Input';
function Dw(t) {
  return et('MuiInputLabel', t);
}
tt('MuiInputLabel', [
  'root',
  'focused',
  'disabled',
  'error',
  'required',
  'asterisk',
  'formControl',
  'sizeSmall',
  'shrink',
  'animated',
  'standard',
  'filled',
  'outlined',
]);
const _w = (t) => {
    const {
        classes: r,
        formControl: l,
        size: i,
        shrink: s,
        disableAnimation: u,
        variant: f,
        required: p,
      } = t,
      m = {
        root: [
          'root',
          l && 'formControl',
          !u && 'animated',
          s && 'shrink',
          i && i !== 'normal' && `size${ke(i)}`,
          f,
        ],
        asterisk: [p && 'asterisk'],
      },
      h = rt(m, Dw, r);
    return { ...r, ...h };
  },
  Bw = Ce(Aw, {
    shouldForwardProp: (t) => jn(t) || t === 'classes',
    name: 'MuiInputLabel',
    slot: 'Root',
    overridesResolver: (t, r) => {
      const { ownerState: l } = t;
      return [
        { [`& .${ao.asterisk}`]: r.asterisk },
        r.root,
        l.formControl && r.formControl,
        l.size === 'small' && r.sizeSmall,
        l.shrink && r.shrink,
        !l.disableAnimation && r.animated,
        l.focused && r.focused,
        r[l.variant],
      ];
    },
  })(
    Bt(({ theme: t }) => ({
      display: 'block',
      transformOrigin: 'top left',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      maxWidth: '100%',
      variants: [
        {
          props: ({ ownerState: r }) => r.formControl,
          style: {
            position: 'absolute',
            left: 0,
            top: 0,
            transform: 'translate(0, 20px) scale(1)',
          },
        },
        { props: { size: 'small' }, style: { transform: 'translate(0, 17px) scale(1)' } },
        {
          props: ({ ownerState: r }) => r.shrink,
          style: {
            transform: 'translate(0, -1.5px) scale(0.75)',
            transformOrigin: 'top left',
            maxWidth: '133%',
          },
        },
        {
          props: ({ ownerState: r }) => !r.disableAnimation,
          style: {
            transition: t.transitions.create(['color', 'transform', 'max-width'], {
              duration: t.transitions.duration.shorter,
              easing: t.transitions.easing.easeOut,
            }),
          },
        },
        {
          props: { variant: 'filled' },
          style: {
            zIndex: 1,
            pointerEvents: 'none',
            transform: 'translate(12px, 16px) scale(1)',
            maxWidth: 'calc(100% - 24px)',
          },
        },
        {
          props: { variant: 'filled', size: 'small' },
          style: { transform: 'translate(12px, 13px) scale(1)' },
        },
        {
          props: ({ variant: r, ownerState: l }) => r === 'filled' && l.shrink,
          style: {
            userSelect: 'none',
            pointerEvents: 'auto',
            transform: 'translate(12px, 7px) scale(0.75)',
            maxWidth: 'calc(133% - 24px)',
          },
        },
        {
          props: ({ variant: r, ownerState: l, size: i }) =>
            r === 'filled' && l.shrink && i === 'small',
          style: { transform: 'translate(12px, 4px) scale(0.75)' },
        },
        {
          props: { variant: 'outlined' },
          style: {
            zIndex: 1,
            pointerEvents: 'none',
            transform: 'translate(14px, 16px) scale(1)',
            maxWidth: 'calc(100% - 24px)',
          },
        },
        {
          props: { variant: 'outlined', size: 'small' },
          style: { transform: 'translate(14px, 9px) scale(1)' },
        },
        {
          props: ({ variant: r, ownerState: l }) => r === 'outlined' && l.shrink,
          style: {
            userSelect: 'none',
            pointerEvents: 'auto',
            maxWidth: 'calc(133% - 32px)',
            transform: 'translate(14px, -9px) scale(0.75)',
          },
        },
      ],
    })),
  ),
  Nw = C.forwardRef(function (r, l) {
    const i = at({ name: 'MuiInputLabel', props: r }),
      { disableAnimation: s = !1, margin: u, shrink: f, variant: p, className: m, ...h } = i,
      y = Pl();
    let v = f;
    typeof v > 'u' && y && (v = y.filled || y.focused || y.adornedStart);
    const b = Hl({
        props: i,
        muiFormControl: y,
        states: ['size', 'variant', 'required', 'focused'],
      }),
      w = {
        ...i,
        disableAnimation: s,
        formControl: y,
        shrink: v,
        size: b.size,
        variant: b.variant,
        required: b.required,
        focused: b.focused,
      },
      S = _w(w);
    return L.jsx(Bw, {
      'data-shrink': v,
      ref: l,
      className: Oe(S.root, m),
      ...h,
      ownerState: w,
      classes: S,
    });
  }),
  kw = C.createContext({});
function Uw(t) {
  return et('MuiList', t);
}
tt('MuiList', ['root', 'padding', 'dense', 'subheader']);
const jw = (t) => {
    const { classes: r, disablePadding: l, dense: i, subheader: s } = t;
    return rt({ root: ['root', !l && 'padding', i && 'dense', s && 'subheader'] }, Uw, r);
  },
  Lw = Ce('ul', {
    name: 'MuiList',
    slot: 'Root',
    overridesResolver: (t, r) => {
      const { ownerState: l } = t;
      return [
        r.root,
        !l.disablePadding && r.padding,
        l.dense && r.dense,
        l.subheader && r.subheader,
      ];
    },
  })({
    listStyle: 'none',
    margin: 0,
    padding: 0,
    position: 'relative',
    variants: [
      {
        props: ({ ownerState: t }) => !t.disablePadding,
        style: { paddingTop: 8, paddingBottom: 8 },
      },
      { props: ({ ownerState: t }) => t.subheader, style: { paddingTop: 0 } },
    ],
  }),
  Hw = C.forwardRef(function (r, l) {
    const i = at({ props: r, name: 'MuiList' }),
      {
        children: s,
        className: u,
        component: f = 'ul',
        dense: p = !1,
        disablePadding: m = !1,
        subheader: h,
        ...y
      } = i,
      v = C.useMemo(() => ({ dense: p }), [p]),
      b = { ...i, component: f, dense: p, disablePadding: m },
      w = jw(b);
    return L.jsx(kw.Provider, {
      value: v,
      children: L.jsxs(Lw, {
        as: f,
        className: Oe(w.root, u),
        ref: l,
        ownerState: b,
        ...y,
        children: [h, s],
      }),
    });
  });
function Td(t, r, l) {
  return t === r
    ? t.firstChild
    : r && r.nextElementSibling
      ? r.nextElementSibling
      : l
        ? null
        : t.firstChild;
}
function ky(t, r, l) {
  return t === r
    ? l
      ? t.firstChild
      : t.lastChild
    : r && r.previousElementSibling
      ? r.previousElementSibling
      : l
        ? null
        : t.lastChild;
}
function vb(t, r) {
  if (r === void 0) return !0;
  let l = t.innerText;
  return (
    l === void 0 && (l = t.textContent),
    (l = l.trim().toLowerCase()),
    l.length === 0 ? !1 : r.repeating ? l[0] === r.keys[0] : l.startsWith(r.keys.join(''))
  );
}
function Ki(t, r, l, i, s, u) {
  let f = !1,
    p = s(t, r, r ? l : !1);
  for (; p; ) {
    if (p === t.firstChild) {
      if (f) return !1;
      f = !0;
    }
    const m = i ? !1 : p.disabled || p.getAttribute('aria-disabled') === 'true';
    if (!p.hasAttribute('tabindex') || !vb(p, u) || m) p = s(t, p, l);
    else return p.focus(), !0;
  }
  return !1;
}
const Pw = C.forwardRef(function (r, l) {
  const {
      actions: i,
      autoFocus: s = !1,
      autoFocusItem: u = !1,
      children: f,
      className: p,
      disabledItemsFocusable: m = !1,
      disableListWrap: h = !1,
      onKeyDown: y,
      variant: v = 'selectedMenu',
      ...b
    } = r,
    w = C.useRef(null),
    S = C.useRef({ keys: [], repeating: !0, previousKeyMatched: !0, lastTime: null });
  ja(() => {
    s && w.current.focus();
  }, [s]),
    C.useImperativeHandle(
      i,
      () => ({
        adjustStyleForScrollbar: (E, { direction: D }) => {
          const R = !w.current.style.width;
          if (E.clientHeight < w.current.clientHeight && R) {
            const U = `${tb(Ar(E))}px`;
            (w.current.style[D === 'rtl' ? 'paddingLeft' : 'paddingRight'] = U),
              (w.current.style.width = `calc(100% + ${U})`);
          }
          return w.current;
        },
      }),
      [],
    );
  const A = (E) => {
      const D = w.current,
        R = E.key;
      if (E.ctrlKey || E.metaKey || E.altKey) {
        y && y(E);
        return;
      }
      const q = Un(D).activeElement;
      if (R === 'ArrowDown') E.preventDefault(), Ki(D, q, h, m, Td);
      else if (R === 'ArrowUp') E.preventDefault(), Ki(D, q, h, m, ky);
      else if (R === 'Home') E.preventDefault(), Ki(D, null, h, m, Td);
      else if (R === 'End') E.preventDefault(), Ki(D, null, h, m, ky);
      else if (R.length === 1) {
        const V = S.current,
          G = R.toLowerCase(),
          x = performance.now();
        V.keys.length > 0 &&
          (x - V.lastTime > 500
            ? ((V.keys = []), (V.repeating = !0), (V.previousKeyMatched = !0))
            : V.repeating && G !== V.keys[0] && (V.repeating = !1)),
          (V.lastTime = x),
          V.keys.push(G);
        const P = q && !V.repeating && vb(q, V);
        V.previousKeyMatched && (P || Ki(D, q, !1, m, Td, V))
          ? E.preventDefault()
          : (V.previousKeyMatched = !1);
      }
      y && y(E);
    },
    O = Xt(w, l);
  let M = -1;
  C.Children.forEach(f, (E, D) => {
    if (!C.isValidElement(E)) {
      M === D && ((M += 1), M >= f.length && (M = -1));
      return;
    }
    E.props.disabled || (((v === 'selectedMenu' && E.props.selected) || M === -1) && (M = D)),
      M === D &&
        (E.props.disabled || E.props.muiSkipListHighlight || E.type.muiSkipListHighlight) &&
        ((M += 1), M >= f.length && (M = -1));
  });
  const z = C.Children.map(f, (E, D) => {
    if (D === M) {
      const R = {};
      return (
        u && (R.autoFocus = !0),
        E.props.tabIndex === void 0 && v === 'selectedMenu' && (R.tabIndex = 0),
        C.cloneElement(E, R)
      );
    }
    return E;
  });
  return L.jsx(Hw, {
    role: 'menu',
    ref: O,
    className: p,
    onKeyDown: A,
    tabIndex: s ? 0 : -1,
    ...b,
    children: z,
  });
});
function qw(t) {
  return et('MuiPopover', t);
}
tt('MuiPopover', ['root', 'paper']);
function Uy(t, r) {
  let l = 0;
  return (
    typeof r == 'number'
      ? (l = r)
      : r === 'center'
        ? (l = t.height / 2)
        : r === 'bottom' && (l = t.height),
    l
  );
}
function jy(t, r) {
  let l = 0;
  return (
    typeof r == 'number'
      ? (l = r)
      : r === 'center'
        ? (l = t.width / 2)
        : r === 'right' && (l = t.width),
    l
  );
}
function Ly(t) {
  return [t.horizontal, t.vertical].map((r) => (typeof r == 'number' ? `${r}px` : r)).join(' ');
}
function wd(t) {
  return typeof t == 'function' ? t() : t;
}
const Fw = (t) => {
    const { classes: r } = t;
    return rt({ root: ['root'], paper: ['paper'] }, qw, r);
  },
  Gw = Ce(fw, { name: 'MuiPopover', slot: 'Root', overridesResolver: (t, r) => r.root })({}),
  bb = Ce(gb, { name: 'MuiPopover', slot: 'Paper', overridesResolver: (t, r) => r.paper })({
    position: 'absolute',
    overflowY: 'auto',
    overflowX: 'hidden',
    minWidth: 16,
    minHeight: 16,
    maxWidth: 'calc(100% - 32px)',
    maxHeight: 'calc(100% - 32px)',
    outline: 0,
  }),
  Vw = C.forwardRef(function (r, l) {
    const i = at({ props: r, name: 'MuiPopover' }),
      {
        action: s,
        anchorEl: u,
        anchorOrigin: f = { vertical: 'top', horizontal: 'left' },
        anchorPosition: p,
        anchorReference: m = 'anchorEl',
        children: h,
        className: y,
        container: v,
        elevation: b = 8,
        marginThreshold: w = 16,
        open: S,
        PaperProps: A = {},
        slots: O = {},
        slotProps: M = {},
        transformOrigin: z = { vertical: 'top', horizontal: 'left' },
        TransitionComponent: E = Id,
        transitionDuration: D = 'auto',
        TransitionProps: { onEntering: R, ...U } = {},
        disableScrollLock: q = !1,
        ...V
      } = i,
      G = (M == null ? void 0 : M.paper) ?? A,
      x = C.useRef(),
      P = {
        ...i,
        anchorOrigin: f,
        anchorReference: m,
        elevation: b,
        marginThreshold: w,
        externalPaperSlotProps: G,
        transformOrigin: z,
        TransitionComponent: E,
        transitionDuration: D,
        TransitionProps: U,
      },
      I = Fw(P),
      ee = C.useCallback(() => {
        if (m === 'anchorPosition') return p;
        const ce = wd(u),
          Te = (ce && ce.nodeType === 1 ? ce : Un(x.current).body).getBoundingClientRect();
        return { top: Te.top + Uy(Te, f.vertical), left: Te.left + jy(Te, f.horizontal) };
      }, [u, f.horizontal, f.vertical, p, m]),
      ne = C.useCallback(
        (ce) => ({ vertical: Uy(ce, z.vertical), horizontal: jy(ce, z.horizontal) }),
        [z.horizontal, z.vertical],
      ),
      Z = C.useCallback(
        (ce) => {
          const be = { width: ce.offsetWidth, height: ce.offsetHeight },
            Te = ne(be);
          if (m === 'none') return { top: null, left: null, transformOrigin: Ly(Te) };
          const Fe = ee();
          let Me = Fe.top - Te.vertical,
            Ge = Fe.left - Te.horizontal;
          const xt = Me + be.height,
            wt = Ge + be.width,
            lt = Ar(wd(u)),
            It = lt.innerHeight - w,
            Mt = lt.innerWidth - w;
          if (w !== null && Me < w) {
            const it = Me - w;
            (Me -= it), (Te.vertical += it);
          } else if (w !== null && xt > It) {
            const it = xt - It;
            (Me -= it), (Te.vertical += it);
          }
          if (w !== null && Ge < w) {
            const it = Ge - w;
            (Ge -= it), (Te.horizontal += it);
          } else if (wt > Mt) {
            const it = wt - Mt;
            (Ge -= it), (Te.horizontal += it);
          }
          return {
            top: `${Math.round(Me)}px`,
            left: `${Math.round(Ge)}px`,
            transformOrigin: Ly(Te),
          };
        },
        [u, m, ee, ne, w],
      ),
      [j, te] = C.useState(S),
      ie = C.useCallback(() => {
        const ce = x.current;
        if (!ce) return;
        const be = Z(ce);
        be.top !== null && ce.style.setProperty('top', be.top),
          be.left !== null && (ce.style.left = be.left),
          (ce.style.transformOrigin = be.transformOrigin),
          te(!0);
      }, [Z]);
    C.useEffect(
      () => (
        q && window.addEventListener('scroll', ie), () => window.removeEventListener('scroll', ie)
      ),
      [u, q, ie],
    );
    const oe = (ce, be) => {
        R && R(ce, be), ie();
      },
      _ = () => {
        te(!1);
      };
    C.useEffect(() => {
      S && ie();
    }),
      C.useImperativeHandle(
        s,
        () =>
          S
            ? {
                updatePosition: () => {
                  ie();
                },
              }
            : null,
        [S, ie],
      ),
      C.useEffect(() => {
        if (!S) return;
        const ce = Iv(() => {
            ie();
          }),
          be = Ar(u);
        return (
          be.addEventListener('resize', ce),
          () => {
            ce.clear(), be.removeEventListener('resize', ce);
          }
        );
      }, [u, S, ie]);
    let K = D;
    D === 'auto' && !E.muiSupportAuto && (K = void 0);
    const se = v || (u ? Un(wd(u)).body : void 0),
      ue = { slots: O, slotProps: { ...M, paper: G } },
      [le, pe] = kn('paper', {
        elementType: bb,
        externalForwardedProps: ue,
        additionalProps: {
          elevation: b,
          className: Oe(I.paper, G == null ? void 0 : G.className),
          style: j ? G.style : { ...G.style, opacity: 0 },
        },
        ownerState: P,
      }),
      [ge, { slotProps: Se, ...ae }] = kn('root', {
        elementType: Gw,
        externalForwardedProps: ue,
        additionalProps: { slotProps: { backdrop: { invisible: !0 } }, container: se, open: S },
        ownerState: P,
        className: Oe(I.root, y),
      }),
      de = Xt(x, pe.ref);
    return L.jsx(ge, {
      ...ae,
      ...(!Qd(ge) && { slotProps: Se, disableScrollLock: q }),
      ...V,
      ref: l,
      children: L.jsx(E, {
        appear: !0,
        in: S,
        onEntering: oe,
        onExited: _,
        timeout: K,
        ...U,
        children: L.jsx(le, { ...pe, ref: de, children: h }),
      }),
    });
  });
function Yw(t) {
  return et('MuiMenu', t);
}
tt('MuiMenu', ['root', 'paper', 'list']);
const Kw = { vertical: 'top', horizontal: 'right' },
  Xw = { vertical: 'top', horizontal: 'left' },
  Qw = (t) => {
    const { classes: r } = t;
    return rt({ root: ['root'], paper: ['paper'], list: ['list'] }, Yw, r);
  },
  Ww = Ce(Vw, {
    shouldForwardProp: (t) => jn(t) || t === 'classes',
    name: 'MuiMenu',
    slot: 'Root',
    overridesResolver: (t, r) => r.root,
  })({}),
  Iw = Ce(bb, { name: 'MuiMenu', slot: 'Paper', overridesResolver: (t, r) => r.paper })({
    maxHeight: 'calc(100% - 96px)',
    WebkitOverflowScrolling: 'touch',
  }),
  Zw = Ce(Pw, { name: 'MuiMenu', slot: 'List', overridesResolver: (t, r) => r.list })({
    outline: 0,
  }),
  Jw = C.forwardRef(function (r, l) {
    const i = at({ props: r, name: 'MuiMenu' }),
      {
        autoFocus: s = !0,
        children: u,
        className: f,
        disableAutoFocusItem: p = !1,
        MenuListProps: m = {},
        onClose: h,
        open: y,
        PaperProps: v = {},
        PopoverClasses: b,
        transitionDuration: w = 'auto',
        TransitionProps: { onEntering: S, ...A } = {},
        variant: O = 'selectedMenu',
        slots: M = {},
        slotProps: z = {},
        ...E
      } = i,
      D = T2(),
      R = {
        ...i,
        autoFocus: s,
        disableAutoFocusItem: p,
        MenuListProps: m,
        onEntering: S,
        PaperProps: v,
        transitionDuration: w,
        TransitionProps: A,
        variant: O,
      },
      U = Qw(R),
      q = s && !p && y,
      V = C.useRef(null),
      G = (j, te) => {
        V.current && V.current.adjustStyleForScrollbar(j, { direction: D ? 'rtl' : 'ltr' }),
          S && S(j, te);
      },
      x = (j) => {
        j.key === 'Tab' && (j.preventDefault(), h && h(j, 'tabKeyDown'));
      };
    let P = -1;
    C.Children.map(u, (j, te) => {
      C.isValidElement(j) &&
        (j.props.disabled ||
          (((O === 'selectedMenu' && j.props.selected) || P === -1) && (P = te)));
    });
    const I = M.paper ?? Iw,
      ee = z.paper ?? v,
      ne = gy({
        elementType: M.root,
        externalSlotProps: z.root,
        ownerState: R,
        className: [U.root, f],
      }),
      Z = gy({ elementType: I, externalSlotProps: ee, ownerState: R, className: U.paper });
    return L.jsx(Ww, {
      onClose: h,
      anchorOrigin: { vertical: 'bottom', horizontal: D ? 'right' : 'left' },
      transformOrigin: D ? Kw : Xw,
      slots: { paper: I, root: M.root },
      slotProps: { root: ne, paper: Z },
      open: y,
      ref: l,
      transitionDuration: w,
      TransitionProps: { onEntering: G, ...A },
      ownerState: R,
      ...E,
      classes: b,
      children: L.jsx(Zw, {
        onKeyDown: x,
        actions: V,
        autoFocus: s && (P === -1 || p),
        autoFocusItem: q,
        variant: O,
        ...m,
        className: Oe(U.list, m.className),
        children: u,
      }),
    });
  });
function eA(t) {
  return et('MuiNativeSelect', t);
}
const jp = tt('MuiNativeSelect', [
    'root',
    'select',
    'multiple',
    'filled',
    'outlined',
    'standard',
    'disabled',
    'icon',
    'iconOpen',
    'iconFilled',
    'iconOutlined',
    'iconStandard',
    'nativeInput',
    'error',
  ]),
  tA = (t) => {
    const { classes: r, variant: l, disabled: i, multiple: s, open: u, error: f } = t,
      p = {
        select: ['select', l, i && 'disabled', s && 'multiple', f && 'error'],
        icon: ['icon', `icon${ke(l)}`, u && 'iconOpen', i && 'disabled'],
      };
    return rt(p, eA, r);
  },
  Sb = Ce('select')(({ theme: t }) => ({
    MozAppearance: 'none',
    WebkitAppearance: 'none',
    userSelect: 'none',
    borderRadius: 0,
    cursor: 'pointer',
    '&:focus': { borderRadius: 0 },
    [`&.${jp.disabled}`]: { cursor: 'default' },
    '&[multiple]': { height: 'auto' },
    '&:not([multiple]) option, &:not([multiple]) optgroup': {
      backgroundColor: (t.vars || t).palette.background.paper,
    },
    variants: [
      {
        props: ({ ownerState: r }) => r.variant !== 'filled' && r.variant !== 'outlined',
        style: { '&&&': { paddingRight: 24, minWidth: 16 } },
      },
      { props: { variant: 'filled' }, style: { '&&&': { paddingRight: 32 } } },
      {
        props: { variant: 'outlined' },
        style: {
          borderRadius: (t.vars || t).shape.borderRadius,
          '&:focus': { borderRadius: (t.vars || t).shape.borderRadius },
          '&&&': { paddingRight: 32 },
        },
      },
    ],
  })),
  nA = Ce(Sb, {
    name: 'MuiNativeSelect',
    slot: 'Select',
    shouldForwardProp: jn,
    overridesResolver: (t, r) => {
      const { ownerState: l } = t;
      return [r.select, r[l.variant], l.error && r.error, { [`&.${jp.multiple}`]: r.multiple }];
    },
  })({}),
  xb = Ce('svg')(({ theme: t }) => ({
    position: 'absolute',
    right: 0,
    top: 'calc(50% - .5em)',
    pointerEvents: 'none',
    color: (t.vars || t).palette.action.active,
    [`&.${jp.disabled}`]: { color: (t.vars || t).palette.action.disabled },
    variants: [
      { props: ({ ownerState: r }) => r.open, style: { transform: 'rotate(180deg)' } },
      { props: { variant: 'filled' }, style: { right: 7 } },
      { props: { variant: 'outlined' }, style: { right: 7 } },
    ],
  })),
  rA = Ce(xb, {
    name: 'MuiNativeSelect',
    slot: 'Icon',
    overridesResolver: (t, r) => {
      const { ownerState: l } = t;
      return [r.icon, l.variant && r[`icon${ke(l.variant)}`], l.open && r.iconOpen];
    },
  })({}),
  aA = C.forwardRef(function (r, l) {
    const {
        className: i,
        disabled: s,
        error: u,
        IconComponent: f,
        inputRef: p,
        variant: m = 'standard',
        ...h
      } = r,
      y = { ...r, disabled: s, variant: m, error: u },
      v = tA(y);
    return L.jsxs(C.Fragment, {
      children: [
        L.jsx(nA, { ownerState: y, className: Oe(v.select, i), disabled: s, ref: p || l, ...h }),
        r.multiple ? null : L.jsx(rA, { as: f, ownerState: y, className: v.icon }),
      ],
    });
  });
var Hy;
const lA = Ce('fieldset', { shouldForwardProp: jn })({
    textAlign: 'left',
    position: 'absolute',
    bottom: 0,
    right: 0,
    top: -5,
    left: 0,
    margin: 0,
    padding: '0 8px',
    pointerEvents: 'none',
    borderRadius: 'inherit',
    borderStyle: 'solid',
    borderWidth: 1,
    overflow: 'hidden',
    minWidth: '0%',
  }),
  iA = Ce('legend', { shouldForwardProp: jn })(
    Bt(({ theme: t }) => ({
      float: 'unset',
      width: 'auto',
      overflow: 'hidden',
      variants: [
        {
          props: ({ ownerState: r }) => !r.withLabel,
          style: {
            padding: 0,
            lineHeight: '11px',
            transition: t.transitions.create('width', {
              duration: 150,
              easing: t.transitions.easing.easeOut,
            }),
          },
        },
        {
          props: ({ ownerState: r }) => r.withLabel,
          style: {
            display: 'block',
            padding: 0,
            height: 11,
            fontSize: '0.75em',
            visibility: 'hidden',
            maxWidth: 0.01,
            transition: t.transitions.create('max-width', {
              duration: 50,
              easing: t.transitions.easing.easeOut,
            }),
            whiteSpace: 'nowrap',
            '& > span': {
              paddingLeft: 5,
              paddingRight: 5,
              display: 'inline-block',
              opacity: 0,
              visibility: 'visible',
            },
          },
        },
        {
          props: ({ ownerState: r }) => r.withLabel && r.notched,
          style: {
            maxWidth: '100%',
            transition: t.transitions.create('max-width', {
              duration: 100,
              easing: t.transitions.easing.easeOut,
              delay: 50,
            }),
          },
        },
      ],
    })),
  );
function oA(t) {
  const { children: r, classes: l, className: i, label: s, notched: u, ...f } = t,
    p = s != null && s !== '',
    m = { ...t, notched: u, withLabel: p };
  return L.jsx(lA, {
    'aria-hidden': !0,
    className: i,
    ownerState: m,
    ...f,
    children: L.jsx(iA, {
      ownerState: m,
      children: p
        ? L.jsx('span', { children: s })
        : Hy ||
          (Hy = L.jsx('span', { className: 'notranslate', 'aria-hidden': !0, children: '​' })),
    }),
  });
}
const sA = (t) => {
    const { classes: r } = t,
      i = rt({ root: ['root'], notchedOutline: ['notchedOutline'], input: ['input'] }, bT, r);
    return { ...r, ...i };
  },
  uA = Ce(Hu, {
    shouldForwardProp: (t) => jn(t) || t === 'classes',
    name: 'MuiOutlinedInput',
    slot: 'Root',
    overridesResolver: ju,
  })(
    Bt(({ theme: t }) => {
      const r = t.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)';
      return {
        position: 'relative',
        borderRadius: (t.vars || t).shape.borderRadius,
        [`&:hover .${Kn.notchedOutline}`]: { borderColor: (t.vars || t).palette.text.primary },
        '@media (hover: none)': {
          [`&:hover .${Kn.notchedOutline}`]: {
            borderColor: t.vars ? `rgba(${t.vars.palette.common.onBackgroundChannel} / 0.23)` : r,
          },
        },
        [`&.${Kn.focused} .${Kn.notchedOutline}`]: { borderWidth: 2 },
        variants: [
          ...Object.entries(t.palette)
            .filter(Ll())
            .map(([l]) => ({
              props: { color: l },
              style: {
                [`&.${Kn.focused} .${Kn.notchedOutline}`]: {
                  borderColor: (t.vars || t).palette[l].main,
                },
              },
            })),
          {
            props: {},
            style: {
              [`&.${Kn.error} .${Kn.notchedOutline}`]: {
                borderColor: (t.vars || t).palette.error.main,
              },
              [`&.${Kn.disabled} .${Kn.notchedOutline}`]: {
                borderColor: (t.vars || t).palette.action.disabled,
              },
            },
          },
          { props: ({ ownerState: l }) => l.startAdornment, style: { paddingLeft: 14 } },
          { props: ({ ownerState: l }) => l.endAdornment, style: { paddingRight: 14 } },
          { props: ({ ownerState: l }) => l.multiline, style: { padding: '16.5px 14px' } },
          {
            props: ({ ownerState: l, size: i }) => l.multiline && i === 'small',
            style: { padding: '8.5px 14px' },
          },
        ],
      };
    }),
  ),
  cA = Ce(oA, {
    name: 'MuiOutlinedInput',
    slot: 'NotchedOutline',
    overridesResolver: (t, r) => r.notchedOutline,
  })(
    Bt(({ theme: t }) => {
      const r = t.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)';
      return {
        borderColor: t.vars ? `rgba(${t.vars.palette.common.onBackgroundChannel} / 0.23)` : r,
      };
    }),
  ),
  fA = Ce(Pu, { name: 'MuiOutlinedInput', slot: 'Input', overridesResolver: Lu })(
    Bt(({ theme: t }) => ({
      padding: '16.5px 14px',
      ...(!t.vars && {
        '&:-webkit-autofill': {
          WebkitBoxShadow: t.palette.mode === 'light' ? null : '0 0 0 100px #266798 inset',
          WebkitTextFillColor: t.palette.mode === 'light' ? null : '#fff',
          caretColor: t.palette.mode === 'light' ? null : '#fff',
          borderRadius: 'inherit',
        },
      }),
      ...(t.vars && {
        '&:-webkit-autofill': { borderRadius: 'inherit' },
        [t.getColorSchemeSelector('dark')]: {
          '&:-webkit-autofill': {
            WebkitBoxShadow: '0 0 0 100px #266798 inset',
            WebkitTextFillColor: '#fff',
            caretColor: '#fff',
          },
        },
      }),
      variants: [
        { props: { size: 'small' }, style: { padding: '8.5px 14px' } },
        { props: ({ ownerState: r }) => r.multiline, style: { padding: 0 } },
        { props: ({ ownerState: r }) => r.startAdornment, style: { paddingLeft: 0 } },
        { props: ({ ownerState: r }) => r.endAdornment, style: { paddingRight: 0 } },
      ],
    })),
  ),
  Lp = C.forwardRef(function (r, l) {
    var i;
    const s = at({ props: r, name: 'MuiOutlinedInput' }),
      {
        components: u = {},
        fullWidth: f = !1,
        inputComponent: p = 'input',
        label: m,
        multiline: h = !1,
        notched: y,
        slots: v = {},
        type: b = 'text',
        ...w
      } = s,
      S = sA(s),
      A = Pl(),
      O = Hl({
        props: s,
        muiFormControl: A,
        states: ['color', 'disabled', 'error', 'focused', 'hiddenLabel', 'size', 'required'],
      }),
      M = {
        ...s,
        color: O.color || 'primary',
        disabled: O.disabled,
        error: O.error,
        focused: O.focused,
        formControl: A,
        fullWidth: f,
        hiddenLabel: O.hiddenLabel,
        multiline: h,
        size: O.size,
        type: b,
      },
      z = v.root ?? u.Root ?? uA,
      E = v.input ?? u.Input ?? fA;
    return L.jsx(Np, {
      slots: { root: z, input: E },
      renderSuffix: (D) =>
        L.jsx(cA, {
          ownerState: M,
          className: S.notchedOutline,
          label:
            m != null && m !== '' && O.required
              ? i || (i = L.jsxs(C.Fragment, { children: [m, ' ', '*'] }))
              : m,
          notched: typeof y < 'u' ? y : !!(D.startAdornment || D.filled || D.focused),
        }),
      fullWidth: f,
      inputComponent: p,
      multiline: h,
      ref: l,
      type: b,
      ...w,
      classes: { ...S, notchedOutline: null },
    });
  });
Lp.muiName = 'Input';
function dA(t) {
  return et('MuiSelect', t);
}
const Xi = tt('MuiSelect', [
  'root',
  'select',
  'multiple',
  'filled',
  'outlined',
  'standard',
  'disabled',
  'focused',
  'icon',
  'iconOpen',
  'iconFilled',
  'iconOutlined',
  'iconStandard',
  'nativeInput',
  'error',
]);
var Py;
const pA = Ce(Sb, {
    name: 'MuiSelect',
    slot: 'Select',
    overridesResolver: (t, r) => {
      const { ownerState: l } = t;
      return [
        { [`&.${Xi.select}`]: r.select },
        { [`&.${Xi.select}`]: r[l.variant] },
        { [`&.${Xi.error}`]: r.error },
        { [`&.${Xi.multiple}`]: r.multiple },
      ];
    },
  })({
    [`&.${Xi.select}`]: {
      height: 'auto',
      minHeight: '1.4375em',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
    },
  }),
  hA = Ce(xb, {
    name: 'MuiSelect',
    slot: 'Icon',
    overridesResolver: (t, r) => {
      const { ownerState: l } = t;
      return [r.icon, l.variant && r[`icon${ke(l.variant)}`], l.open && r.iconOpen];
    },
  })({}),
  mA = Ce('input', {
    shouldForwardProp: (t) => db(t) && t !== 'classes',
    name: 'MuiSelect',
    slot: 'NativeInput',
    overridesResolver: (t, r) => r.nativeInput,
  })({
    bottom: 0,
    left: 0,
    position: 'absolute',
    opacity: 0,
    pointerEvents: 'none',
    width: '100%',
    boxSizing: 'border-box',
  });
function qy(t, r) {
  return typeof r == 'object' && r !== null ? t === r : String(t) === String(r);
}
function gA(t) {
  return t == null || (typeof t == 'string' && !t.trim());
}
const yA = (t) => {
    const { classes: r, variant: l, disabled: i, multiple: s, open: u, error: f } = t,
      p = {
        select: ['select', l, i && 'disabled', s && 'multiple', f && 'error'],
        icon: ['icon', `icon${ke(l)}`, u && 'iconOpen', i && 'disabled'],
        nativeInput: ['nativeInput'],
      };
    return rt(p, dA, r);
  },
  vA = C.forwardRef(function (r, l) {
    var Ht;
    const {
        'aria-describedby': i,
        'aria-label': s,
        autoFocus: u,
        autoWidth: f,
        children: p,
        className: m,
        defaultOpen: h,
        defaultValue: y,
        disabled: v,
        displayEmpty: b,
        error: w = !1,
        IconComponent: S,
        inputRef: A,
        labelId: O,
        MenuProps: M = {},
        multiple: z,
        name: E,
        onBlur: D,
        onChange: R,
        onClose: U,
        onFocus: q,
        onOpen: V,
        open: G,
        readOnly: x,
        renderValue: P,
        required: I,
        SelectDisplayProps: ee = {},
        tabIndex: ne,
        type: Z,
        value: j,
        variant: te = 'standard',
        ...ie
      } = r,
      [oe, _] = dy({ controlled: j, default: y, name: 'Select' }),
      [K, se] = dy({ controlled: G, default: h, name: 'Select' }),
      ue = C.useRef(null),
      le = C.useRef(null),
      [pe, ge] = C.useState(null),
      { current: Se } = C.useRef(G != null),
      [ae, de] = C.useState(),
      ce = Xt(l, A),
      be = C.useCallback((xe) => {
        (le.current = xe), xe && ge(xe);
      }, []),
      Te = pe == null ? void 0 : pe.parentNode;
    C.useImperativeHandle(
      ce,
      () => ({
        focus: () => {
          le.current.focus();
        },
        node: ue.current,
        value: oe,
      }),
      [oe],
    ),
      C.useEffect(() => {
        h && K && pe && !Se && (de(f ? null : Te.clientWidth), le.current.focus());
      }, [pe, f]),
      C.useEffect(() => {
        u && le.current.focus();
      }, [u]),
      C.useEffect(() => {
        if (!O) return;
        const xe = Un(le.current).getElementById(O);
        if (xe) {
          const Be = () => {
            getSelection().isCollapsed && le.current.focus();
          };
          return (
            xe.addEventListener('click', Be),
            () => {
              xe.removeEventListener('click', Be);
            }
          );
        }
      }, [O]);
    const Fe = (xe, Be) => {
        xe ? V && V(Be) : U && U(Be), Se || (de(f ? null : Te.clientWidth), se(xe));
      },
      Me = (xe) => {
        xe.button === 0 && (xe.preventDefault(), le.current.focus(), Fe(!0, xe));
      },
      Ge = (xe) => {
        Fe(!1, xe);
      },
      xt = C.Children.toArray(p),
      wt = (xe) => {
        const Be = xt.find((Le) => Le.props.value === xe.target.value);
        Be !== void 0 && (_(Be.props.value), R && R(xe, Be));
      },
      lt = (xe) => (Be) => {
        let Le;
        if (Be.currentTarget.hasAttribute('tabindex')) {
          if (z) {
            Le = Array.isArray(oe) ? oe.slice() : [];
            const Nr = oe.indexOf(xe.props.value);
            Nr === -1 ? Le.push(xe.props.value) : Le.splice(Nr, 1);
          } else Le = xe.props.value;
          if ((xe.props.onClick && xe.props.onClick(Be), oe !== Le && (_(Le), R))) {
            const Nr = Be.nativeEvent || Be,
              zo = new Nr.constructor(Nr.type, Nr);
            Object.defineProperty(zo, 'target', { writable: !0, value: { value: Le, name: E } }),
              R(zo, xe);
          }
          z || Fe(!1, Be);
        }
      },
      It = (xe) => {
        x ||
          ([' ', 'ArrowUp', 'ArrowDown', 'Enter'].includes(xe.key) &&
            (xe.preventDefault(), Fe(!0, xe)));
      },
      Mt = pe !== null && K,
      it = (xe) => {
        !Mt &&
          D &&
          (Object.defineProperty(xe, 'target', { writable: !0, value: { value: oe, name: E } }),
          D(xe));
      };
    delete ie['aria-invalid'];
    let ve, Mr;
    const Je = [];
    let $r = !1;
    (mu({ value: oe }) || b) && (P ? (ve = P(oe)) : ($r = !0));
    const zr = xt.map((xe) => {
      if (!C.isValidElement(xe)) return null;
      let Be;
      if (z) {
        if (!Array.isArray(oe)) throw new Error(Tr(2));
        (Be = oe.some((Le) => qy(Le, xe.props.value))), Be && $r && Je.push(xe.props.children);
      } else (Be = qy(oe, xe.props.value)), Be && $r && (Mr = xe.props.children);
      return C.cloneElement(xe, {
        'aria-selected': Be ? 'true' : 'false',
        onClick: lt(xe),
        onKeyUp: (Le) => {
          Le.key === ' ' && Le.preventDefault(), xe.props.onKeyUp && xe.props.onKeyUp(Le);
        },
        role: 'option',
        selected: Be,
        value: void 0,
        'data-value': xe.props.value,
      });
    });
    $r &&
      (z
        ? Je.length === 0
          ? (ve = null)
          : (ve = Je.reduce(
              (xe, Be, Le) => (xe.push(Be), Le < Je.length - 1 && xe.push(', '), xe),
              [],
            ))
        : (ve = Mr));
    let Dr = ae;
    !f && Se && pe && (Dr = Te.clientWidth);
    let $n;
    typeof ne < 'u' ? ($n = ne) : ($n = v ? null : 0);
    const _r = ee.id || (E ? `mui-component-select-${E}` : void 0),
      Hn = { ...r, variant: te, value: oe, open: Mt, error: w },
      We = yA(Hn),
      Br = { ...M.PaperProps, ...((Ht = M.slotProps) == null ? void 0 : Ht.paper) },
      zn = Zv();
    return L.jsxs(C.Fragment, {
      children: [
        L.jsx(pA, {
          as: 'div',
          ref: be,
          tabIndex: $n,
          role: 'combobox',
          'aria-controls': zn,
          'aria-disabled': v ? 'true' : void 0,
          'aria-expanded': Mt ? 'true' : 'false',
          'aria-haspopup': 'listbox',
          'aria-label': s,
          'aria-labelledby': [O, _r].filter(Boolean).join(' ') || void 0,
          'aria-describedby': i,
          'aria-required': I ? 'true' : void 0,
          'aria-invalid': w ? 'true' : void 0,
          onKeyDown: It,
          onMouseDown: v || x ? null : Me,
          onBlur: it,
          onFocus: q,
          ...ee,
          ownerState: Hn,
          className: Oe(ee.className, We.select, m),
          id: _r,
          children: gA(ve)
            ? Py ||
              (Py = L.jsx('span', { className: 'notranslate', 'aria-hidden': !0, children: '​' }))
            : ve,
        }),
        L.jsx(mA, {
          'aria-invalid': w,
          value: Array.isArray(oe) ? oe.join(',') : oe,
          name: E,
          ref: ue,
          'aria-hidden': !0,
          onChange: wt,
          tabIndex: -1,
          disabled: v,
          className: We.nativeInput,
          autoFocus: u,
          required: I,
          ...ie,
          ownerState: Hn,
        }),
        L.jsx(hA, { as: S, className: We.icon, ownerState: Hn }),
        L.jsx(Jw, {
          id: `menu-${E || ''}`,
          anchorEl: Te,
          open: Mt,
          onClose: Ge,
          anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
          transformOrigin: { vertical: 'top', horizontal: 'center' },
          ...M,
          MenuListProps: {
            'aria-labelledby': O,
            role: 'listbox',
            'aria-multiselectable': z ? 'true' : void 0,
            disableListWrap: !0,
            id: zn,
            ...M.MenuListProps,
          },
          slotProps: {
            ...M.slotProps,
            paper: { ...Br, style: { minWidth: Dr, ...(Br != null ? Br.style : null) } },
          },
          children: zr,
        }),
      ],
    });
  }),
  bA = (t) => {
    const { classes: r } = t;
    return r;
  },
  Hp = {
    name: 'MuiSelect',
    overridesResolver: (t, r) => r.root,
    shouldForwardProp: (t) => jn(t) && t !== 'variant',
    slot: 'Root',
  },
  SA = Ce(Up, Hp)(''),
  xA = Ce(Lp, Hp)(''),
  EA = Ce(kp, Hp)(''),
  Eb = C.forwardRef(function (r, l) {
    const i = at({ name: 'MuiSelect', props: r }),
      {
        autoWidth: s = !1,
        children: u,
        classes: f = {},
        className: p,
        defaultOpen: m = !1,
        displayEmpty: h = !1,
        IconComponent: y = xT,
        id: v,
        input: b,
        inputProps: w,
        label: S,
        labelId: A,
        MenuProps: O,
        multiple: M = !1,
        native: z = !1,
        onClose: E,
        onOpen: D,
        open: R,
        renderValue: U,
        SelectDisplayProps: q,
        variant: V = 'outlined',
        ...G
      } = i,
      x = z ? aA : vA,
      P = Pl(),
      I = Hl({ props: i, muiFormControl: P, states: ['variant', 'error'] }),
      ee = I.variant || V,
      ne = { ...i, variant: ee, classes: f },
      Z = bA(ne),
      { root: j, ...te } = Z,
      ie =
        b ||
        {
          standard: L.jsx(SA, { ownerState: ne }),
          outlined: L.jsx(xA, { label: S, ownerState: ne }),
          filled: L.jsx(EA, { ownerState: ne }),
        }[ee],
      oe = Xt(l, Eo(ie));
    return L.jsx(C.Fragment, {
      children: C.cloneElement(ie, {
        inputComponent: x,
        inputProps: {
          children: u,
          error: I.error,
          IconComponent: y,
          variant: ee,
          type: void 0,
          multiple: M,
          ...(z
            ? { id: v }
            : {
                autoWidth: s,
                defaultOpen: m,
                displayEmpty: h,
                labelId: A,
                MenuProps: O,
                onClose: E,
                onOpen: D,
                open: R,
                renderValue: U,
                SelectDisplayProps: { id: v, ...q },
              }),
          ...w,
          classes: w ? Kt(te, w.classes) : te,
          ...(b ? b.props.inputProps : {}),
        },
        ...(((M && z) || h) && ee === 'outlined' ? { notched: !0 } : {}),
        ref: oe,
        className: Oe(ie.props.className, p, Z.root),
        ...(!b && { variant: ee }),
        ...G,
      }),
    });
  });
Eb.muiName = 'Select';
function CA(t) {
  return et('MuiTextField', t);
}
tt('MuiTextField', ['root']);
const RA = { standard: Up, filled: kp, outlined: Lp },
  TA = (t) => {
    const { classes: r } = t;
    return rt({ root: ['root'] }, CA, r);
  },
  wA = Ce(vw, { name: 'MuiTextField', slot: 'Root', overridesResolver: (t, r) => r.root })({}),
  Zd = C.forwardRef(function (r, l) {
    const i = at({ props: r, name: 'MuiTextField' }),
      {
        autoComplete: s,
        autoFocus: u = !1,
        children: f,
        className: p,
        color: m = 'primary',
        defaultValue: h,
        disabled: y = !1,
        error: v = !1,
        FormHelperTextProps: b,
        fullWidth: w = !1,
        helperText: S,
        id: A,
        InputLabelProps: O,
        inputProps: M,
        InputProps: z,
        inputRef: E,
        label: D,
        maxRows: R,
        minRows: U,
        multiline: q = !1,
        name: V,
        onBlur: G,
        onChange: x,
        onFocus: P,
        placeholder: I,
        required: ee = !1,
        rows: ne,
        select: Z = !1,
        SelectProps: j,
        slots: te = {},
        slotProps: ie = {},
        type: oe,
        value: _,
        variant: K = 'outlined',
        ...se
      } = i,
      ue = {
        ...i,
        autoFocus: u,
        color: m,
        disabled: y,
        error: v,
        fullWidth: w,
        multiline: q,
        required: ee,
        select: Z,
        variant: K,
      },
      le = TA(ue),
      pe = Zv(A),
      ge = S && pe ? `${pe}-helper-text` : void 0,
      Se = D && pe ? `${pe}-label` : void 0,
      ae = RA[K],
      de = {
        slots: te,
        slotProps: { input: z, inputLabel: O, htmlInput: M, formHelperText: b, select: j, ...ie },
      },
      ce = {},
      be = de.slotProps.inputLabel;
    K === 'outlined' && (be && typeof be.shrink < 'u' && (ce.notched = be.shrink), (ce.label = D)),
      Z && ((!j || !j.native) && (ce.id = void 0), (ce['aria-describedby'] = void 0));
    const [Te, Fe] = kn('input', {
        elementType: ae,
        externalForwardedProps: de,
        additionalProps: ce,
        ownerState: ue,
      }),
      [Me, Ge] = kn('inputLabel', { elementType: Nw, externalForwardedProps: de, ownerState: ue }),
      [xt, wt] = kn('htmlInput', {
        elementType: 'input',
        externalForwardedProps: de,
        ownerState: ue,
      }),
      [lt, It] = kn('formHelperText', {
        elementType: Ew,
        externalForwardedProps: de,
        ownerState: ue,
      }),
      [Mt, it] = kn('select', { elementType: Eb, externalForwardedProps: de, ownerState: ue }),
      ve = L.jsx(Te, {
        'aria-describedby': ge,
        autoComplete: s,
        autoFocus: u,
        defaultValue: h,
        fullWidth: w,
        multiline: q,
        name: V,
        rows: ne,
        maxRows: R,
        minRows: U,
        type: oe,
        value: _,
        id: pe,
        inputRef: E,
        onBlur: G,
        onChange: x,
        onFocus: P,
        placeholder: I,
        inputProps: wt,
        slots: { input: te.htmlInput ? xt : void 0 },
        ...Fe,
      });
    return L.jsxs(wA, {
      className: Oe(le.root, p),
      disabled: y,
      error: v,
      fullWidth: w,
      ref: l,
      required: ee,
      color: m,
      variant: K,
      ownerState: ue,
      ...se,
      children: [
        D != null && D !== '' && L.jsx(Me, { htmlFor: pe, id: Se, ...Ge, children: D }),
        Z
          ? L.jsx(Mt, {
              'aria-describedby': ge,
              id: pe,
              labelId: Se,
              value: _,
              input: ve,
              ...it,
              children: f,
            })
          : ve,
        S && L.jsx(lt, { id: ge, ...It, children: S }),
      ],
    });
  });
function Jd({ children: t }) {
  return L.jsx(gu, { component: 'section', children: t });
}
const Fy = ({ id: t, label: r, defaultValue: l, ...i }) =>
    L.jsx(Zd, { id: t, label: r, defaultValue: l, ...i, variant: 'outlined' }),
  AA = Uu(L.jsx('path', { d: 'M2.01 21 23 12 2.01 3 2 10l15 2-15 2z' }), 'Send'),
  OA = Uu(
    L.jsx('path', {
      d: 'M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z',
    }),
    'Delete',
  ),
  MA = { send: L.jsx(AA, {}), delete: L.jsx(OA, {}) },
  Cb = ({ label: t, icon: r = 'send', handleClickButton: l, ...i }) =>
    L.jsx(UT, { variant: 'contained', endIcon: r ? MA[r] : void 0, onClick: l, ...i, children: t });
function Rb(t, r) {
  return function () {
    return t.apply(r, arguments);
  };
}
const { toString: $A } = Object.prototype,
  { getPrototypeOf: Pp } = Object,
  qu = ((t) => (r) => {
    const l = $A.call(r);
    return t[l] || (t[l] = l.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Ln = (t) => ((t = t.toLowerCase()), (r) => qu(r) === t),
  Fu = (t) => (r) => typeof r === t,
  { isArray: ql } = Array,
  fo = Fu('undefined');
function zA(t) {
  return (
    t !== null &&
    !fo(t) &&
    t.constructor !== null &&
    !fo(t.constructor) &&
    dn(t.constructor.isBuffer) &&
    t.constructor.isBuffer(t)
  );
}
const Tb = Ln('ArrayBuffer');
function DA(t) {
  let r;
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView
      ? (r = ArrayBuffer.isView(t))
      : (r = t && t.buffer && Tb(t.buffer)),
    r
  );
}
const _A = Fu('string'),
  dn = Fu('function'),
  wb = Fu('number'),
  Gu = (t) => t !== null && typeof t == 'object',
  BA = (t) => t === !0 || t === !1,
  nu = (t) => {
    if (qu(t) !== 'object') return !1;
    const r = Pp(t);
    return (
      (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) &&
      !(Symbol.toStringTag in t) &&
      !(Symbol.iterator in t)
    );
  },
  NA = Ln('Date'),
  kA = Ln('File'),
  UA = Ln('Blob'),
  jA = Ln('FileList'),
  LA = (t) => Gu(t) && dn(t.pipe),
  HA = (t) => {
    let r;
    return (
      t &&
      ((typeof FormData == 'function' && t instanceof FormData) ||
        (dn(t.append) &&
          ((r = qu(t)) === 'formdata' ||
            (r === 'object' && dn(t.toString) && t.toString() === '[object FormData]'))))
    );
  },
  PA = Ln('URLSearchParams'),
  [qA, FA, GA, VA] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(Ln),
  YA = (t) => (t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''));
function Co(t, r, { allOwnKeys: l = !1 } = {}) {
  if (t === null || typeof t > 'u') return;
  let i, s;
  if ((typeof t != 'object' && (t = [t]), ql(t)))
    for (i = 0, s = t.length; i < s; i++) r.call(null, t[i], i, t);
  else {
    const u = l ? Object.getOwnPropertyNames(t) : Object.keys(t),
      f = u.length;
    let p;
    for (i = 0; i < f; i++) (p = u[i]), r.call(null, t[p], p, t);
  }
}
function Ab(t, r) {
  r = r.toLowerCase();
  const l = Object.keys(t);
  let i = l.length,
    s;
  for (; i-- > 0; ) if (((s = l[i]), r === s.toLowerCase())) return s;
  return null;
}
const Na =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : global,
  Ob = (t) => !fo(t) && t !== Na;
function ep() {
  const { caseless: t } = (Ob(this) && this) || {},
    r = {},
    l = (i, s) => {
      const u = (t && Ab(r, s)) || s;
      nu(r[u]) && nu(i)
        ? (r[u] = ep(r[u], i))
        : nu(i)
          ? (r[u] = ep({}, i))
          : ql(i)
            ? (r[u] = i.slice())
            : (r[u] = i);
    };
  for (let i = 0, s = arguments.length; i < s; i++) arguments[i] && Co(arguments[i], l);
  return r;
}
const KA = (t, r, l, { allOwnKeys: i } = {}) => (
    Co(
      r,
      (s, u) => {
        l && dn(s) ? (t[u] = Rb(s, l)) : (t[u] = s);
      },
      { allOwnKeys: i },
    ),
    t
  ),
  XA = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t),
  QA = (t, r, l, i) => {
    (t.prototype = Object.create(r.prototype, i)),
      (t.prototype.constructor = t),
      Object.defineProperty(t, 'super', { value: r.prototype }),
      l && Object.assign(t.prototype, l);
  },
  WA = (t, r, l, i) => {
    let s, u, f;
    const p = {};
    if (((r = r || {}), t == null)) return r;
    do {
      for (s = Object.getOwnPropertyNames(t), u = s.length; u-- > 0; )
        (f = s[u]), (!i || i(f, t, r)) && !p[f] && ((r[f] = t[f]), (p[f] = !0));
      t = l !== !1 && Pp(t);
    } while (t && (!l || l(t, r)) && t !== Object.prototype);
    return r;
  },
  IA = (t, r, l) => {
    (t = String(t)), (l === void 0 || l > t.length) && (l = t.length), (l -= r.length);
    const i = t.indexOf(r, l);
    return i !== -1 && i === l;
  },
  ZA = (t) => {
    if (!t) return null;
    if (ql(t)) return t;
    let r = t.length;
    if (!wb(r)) return null;
    const l = new Array(r);
    for (; r-- > 0; ) l[r] = t[r];
    return l;
  },
  JA = (
    (t) => (r) =>
      t && r instanceof t
  )(typeof Uint8Array < 'u' && Pp(Uint8Array)),
  eO = (t, r) => {
    const i = (t && t[Symbol.iterator]).call(t);
    let s;
    for (; (s = i.next()) && !s.done; ) {
      const u = s.value;
      r.call(t, u[0], u[1]);
    }
  },
  tO = (t, r) => {
    let l;
    const i = [];
    for (; (l = t.exec(r)) !== null; ) i.push(l);
    return i;
  },
  nO = Ln('HTMLFormElement'),
  rO = (t) =>
    t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (l, i, s) {
      return i.toUpperCase() + s;
    }),
  Gy = (
    ({ hasOwnProperty: t }) =>
    (r, l) =>
      t.call(r, l)
  )(Object.prototype),
  aO = Ln('RegExp'),
  Mb = (t, r) => {
    const l = Object.getOwnPropertyDescriptors(t),
      i = {};
    Co(l, (s, u) => {
      let f;
      (f = r(s, u, t)) !== !1 && (i[u] = f || s);
    }),
      Object.defineProperties(t, i);
  },
  lO = (t) => {
    Mb(t, (r, l) => {
      if (dn(t) && ['arguments', 'caller', 'callee'].indexOf(l) !== -1) return !1;
      const i = t[l];
      if (dn(i)) {
        if (((r.enumerable = !1), 'writable' in r)) {
          r.writable = !1;
          return;
        }
        r.set ||
          (r.set = () => {
            throw Error("Can not rewrite read-only method '" + l + "'");
          });
      }
    });
  },
  iO = (t, r) => {
    const l = {},
      i = (s) => {
        s.forEach((u) => {
          l[u] = !0;
        });
      };
    return ql(t) ? i(t) : i(String(t).split(r)), l;
  },
  oO = () => {},
  sO = (t, r) => (t != null && Number.isFinite((t = +t)) ? t : r),
  Ad = 'abcdefghijklmnopqrstuvwxyz',
  Vy = '0123456789',
  $b = { DIGIT: Vy, ALPHA: Ad, ALPHA_DIGIT: Ad + Ad.toUpperCase() + Vy },
  uO = (t = 16, r = $b.ALPHA_DIGIT) => {
    let l = '';
    const { length: i } = r;
    for (; t--; ) l += r[(Math.random() * i) | 0];
    return l;
  };
function cO(t) {
  return !!(t && dn(t.append) && t[Symbol.toStringTag] === 'FormData' && t[Symbol.iterator]);
}
const fO = (t) => {
    const r = new Array(10),
      l = (i, s) => {
        if (Gu(i)) {
          if (r.indexOf(i) >= 0) return;
          if (!('toJSON' in i)) {
            r[s] = i;
            const u = ql(i) ? [] : {};
            return (
              Co(i, (f, p) => {
                const m = l(f, s + 1);
                !fo(m) && (u[p] = m);
              }),
              (r[s] = void 0),
              u
            );
          }
        }
        return i;
      };
    return l(t, 0);
  },
  dO = Ln('AsyncFunction'),
  pO = (t) => t && (Gu(t) || dn(t)) && dn(t.then) && dn(t.catch),
  zb = ((t, r) =>
    t
      ? setImmediate
      : r
        ? ((l, i) => (
            Na.addEventListener(
              'message',
              ({ source: s, data: u }) => {
                s === Na && u === l && i.length && i.shift()();
              },
              !1,
            ),
            (s) => {
              i.push(s), Na.postMessage(l, '*');
            }
          ))(`axios@${Math.random()}`, [])
        : (l) => setTimeout(l))(typeof setImmediate == 'function', dn(Na.postMessage)),
  hO =
    typeof queueMicrotask < 'u'
      ? queueMicrotask.bind(Na)
      : (typeof process < 'u' && process.nextTick) || zb,
  Y = {
    isArray: ql,
    isArrayBuffer: Tb,
    isBuffer: zA,
    isFormData: HA,
    isArrayBufferView: DA,
    isString: _A,
    isNumber: wb,
    isBoolean: BA,
    isObject: Gu,
    isPlainObject: nu,
    isReadableStream: qA,
    isRequest: FA,
    isResponse: GA,
    isHeaders: VA,
    isUndefined: fo,
    isDate: NA,
    isFile: kA,
    isBlob: UA,
    isRegExp: aO,
    isFunction: dn,
    isStream: LA,
    isURLSearchParams: PA,
    isTypedArray: JA,
    isFileList: jA,
    forEach: Co,
    merge: ep,
    extend: KA,
    trim: YA,
    stripBOM: XA,
    inherits: QA,
    toFlatObject: WA,
    kindOf: qu,
    kindOfTest: Ln,
    endsWith: IA,
    toArray: ZA,
    forEachEntry: eO,
    matchAll: tO,
    isHTMLForm: nO,
    hasOwnProperty: Gy,
    hasOwnProp: Gy,
    reduceDescriptors: Mb,
    freezeMethods: lO,
    toObjectSet: iO,
    toCamelCase: rO,
    noop: oO,
    toFiniteNumber: sO,
    findKey: Ab,
    global: Na,
    isContextDefined: Ob,
    ALPHABET: $b,
    generateString: uO,
    isSpecCompliantForm: cO,
    toJSONObject: fO,
    isAsyncFn: dO,
    isThenable: pO,
    setImmediate: zb,
    asap: hO,
  };
function we(t, r, l, i, s) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = t),
    (this.name = 'AxiosError'),
    r && (this.code = r),
    l && (this.config = l),
    i && (this.request = i),
    s && ((this.response = s), (this.status = s.status ? s.status : null));
}
Y.inherits(we, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: Y.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const Db = we.prototype,
  _b = {};
[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL',
].forEach((t) => {
  _b[t] = { value: t };
});
Object.defineProperties(we, _b);
Object.defineProperty(Db, 'isAxiosError', { value: !0 });
we.from = (t, r, l, i, s, u) => {
  const f = Object.create(Db);
  return (
    Y.toFlatObject(
      t,
      f,
      function (m) {
        return m !== Error.prototype;
      },
      (p) => p !== 'isAxiosError',
    ),
    we.call(f, t.message, r, l, i, s),
    (f.cause = t),
    (f.name = t.name),
    u && Object.assign(f, u),
    f
  );
};
const mO = null;
function tp(t) {
  return Y.isPlainObject(t) || Y.isArray(t);
}
function Bb(t) {
  return Y.endsWith(t, '[]') ? t.slice(0, -2) : t;
}
function Yy(t, r, l) {
  return t
    ? t
        .concat(r)
        .map(function (s, u) {
          return (s = Bb(s)), !l && u ? '[' + s + ']' : s;
        })
        .join(l ? '.' : '')
    : r;
}
function gO(t) {
  return Y.isArray(t) && !t.some(tp);
}
const yO = Y.toFlatObject(Y, {}, null, function (r) {
  return /^is[A-Z]/.test(r);
});
function Vu(t, r, l) {
  if (!Y.isObject(t)) throw new TypeError('target must be an object');
  (r = r || new FormData()),
    (l = Y.toFlatObject(l, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function (A, O) {
      return !Y.isUndefined(O[A]);
    }));
  const i = l.metaTokens,
    s = l.visitor || y,
    u = l.dots,
    f = l.indexes,
    m = (l.Blob || (typeof Blob < 'u' && Blob)) && Y.isSpecCompliantForm(r);
  if (!Y.isFunction(s)) throw new TypeError('visitor must be a function');
  function h(S) {
    if (S === null) return '';
    if (Y.isDate(S)) return S.toISOString();
    if (!m && Y.isBlob(S)) throw new we('Blob is not supported. Use a Buffer instead.');
    return Y.isArrayBuffer(S) || Y.isTypedArray(S)
      ? m && typeof Blob == 'function'
        ? new Blob([S])
        : Buffer.from(S)
      : S;
  }
  function y(S, A, O) {
    let M = S;
    if (S && !O && typeof S == 'object') {
      if (Y.endsWith(A, '{}')) (A = i ? A : A.slice(0, -2)), (S = JSON.stringify(S));
      else if (
        (Y.isArray(S) && gO(S)) ||
        ((Y.isFileList(S) || Y.endsWith(A, '[]')) && (M = Y.toArray(S)))
      )
        return (
          (A = Bb(A)),
          M.forEach(function (E, D) {
            !(Y.isUndefined(E) || E === null) &&
              r.append(f === !0 ? Yy([A], D, u) : f === null ? A : A + '[]', h(E));
          }),
          !1
        );
    }
    return tp(S) ? !0 : (r.append(Yy(O, A, u), h(S)), !1);
  }
  const v = [],
    b = Object.assign(yO, { defaultVisitor: y, convertValue: h, isVisitable: tp });
  function w(S, A) {
    if (!Y.isUndefined(S)) {
      if (v.indexOf(S) !== -1) throw Error('Circular reference detected in ' + A.join('.'));
      v.push(S),
        Y.forEach(S, function (M, z) {
          (!(Y.isUndefined(M) || M === null) &&
            s.call(r, M, Y.isString(z) ? z.trim() : z, A, b)) === !0 && w(M, A ? A.concat(z) : [z]);
        }),
        v.pop();
    }
  }
  if (!Y.isObject(t)) throw new TypeError('data must be an object');
  return w(t), r;
}
function Ky(t) {
  const r = { '!': '%21', "'": '%27', '(': '%28', ')': '%29', '~': '%7E', '%20': '+', '%00': '\0' };
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function (i) {
    return r[i];
  });
}
function qp(t, r) {
  (this._pairs = []), t && Vu(t, this, r);
}
const Nb = qp.prototype;
Nb.append = function (r, l) {
  this._pairs.push([r, l]);
};
Nb.toString = function (r) {
  const l = r
    ? function (i) {
        return r.call(this, i, Ky);
      }
    : Ky;
  return this._pairs
    .map(function (s) {
      return l(s[0]) + '=' + l(s[1]);
    }, '')
    .join('&');
};
function vO(t) {
  return encodeURIComponent(t)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']');
}
function kb(t, r, l) {
  if (!r) return t;
  const i = (l && l.encode) || vO;
  Y.isFunction(l) && (l = { serialize: l });
  const s = l && l.serialize;
  let u;
  if (
    (s ? (u = s(r, l)) : (u = Y.isURLSearchParams(r) ? r.toString() : new qp(r, l).toString(i)), u)
  ) {
    const f = t.indexOf('#');
    f !== -1 && (t = t.slice(0, f)), (t += (t.indexOf('?') === -1 ? '?' : '&') + u);
  }
  return t;
}
class Xy {
  constructor() {
    this.handlers = [];
  }
  use(r, l, i) {
    return (
      this.handlers.push({
        fulfilled: r,
        rejected: l,
        synchronous: i ? i.synchronous : !1,
        runWhen: i ? i.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(r) {
    this.handlers[r] && (this.handlers[r] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(r) {
    Y.forEach(this.handlers, function (i) {
      i !== null && r(i);
    });
  }
}
const Ub = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 },
  bO = typeof URLSearchParams < 'u' ? URLSearchParams : qp,
  SO = typeof FormData < 'u' ? FormData : null,
  xO = typeof Blob < 'u' ? Blob : null,
  EO = {
    isBrowser: !0,
    classes: { URLSearchParams: bO, FormData: SO, Blob: xO },
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
  },
  Fp = typeof window < 'u' && typeof document < 'u',
  np = (typeof navigator == 'object' && navigator) || void 0,
  CO = Fp && (!np || ['ReactNative', 'NativeScript', 'NS'].indexOf(np.product) < 0),
  RO =
    typeof WorkerGlobalScope < 'u' &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == 'function',
  TO = (Fp && window.location.href) || 'http://localhost',
  wO = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Fp,
        hasStandardBrowserEnv: CO,
        hasStandardBrowserWebWorkerEnv: RO,
        navigator: np,
        origin: TO,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  Yt = { ...wO, ...EO };
function AO(t, r) {
  return Vu(
    t,
    new Yt.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (l, i, s, u) {
          return Yt.isNode && Y.isBuffer(l)
            ? (this.append(i, l.toString('base64')), !1)
            : u.defaultVisitor.apply(this, arguments);
        },
      },
      r,
    ),
  );
}
function OO(t) {
  return Y.matchAll(/\w+|\[(\w*)]/g, t).map((r) => (r[0] === '[]' ? '' : r[1] || r[0]));
}
function MO(t) {
  const r = {},
    l = Object.keys(t);
  let i;
  const s = l.length;
  let u;
  for (i = 0; i < s; i++) (u = l[i]), (r[u] = t[u]);
  return r;
}
function jb(t) {
  function r(l, i, s, u) {
    let f = l[u++];
    if (f === '__proto__') return !0;
    const p = Number.isFinite(+f),
      m = u >= l.length;
    return (
      (f = !f && Y.isArray(s) ? s.length : f),
      m
        ? (Y.hasOwnProp(s, f) ? (s[f] = [s[f], i]) : (s[f] = i), !p)
        : ((!s[f] || !Y.isObject(s[f])) && (s[f] = []),
          r(l, i, s[f], u) && Y.isArray(s[f]) && (s[f] = MO(s[f])),
          !p)
    );
  }
  if (Y.isFormData(t) && Y.isFunction(t.entries)) {
    const l = {};
    return (
      Y.forEachEntry(t, (i, s) => {
        r(OO(i), s, l, 0);
      }),
      l
    );
  }
  return null;
}
function $O(t, r, l) {
  if (Y.isString(t))
    try {
      return (r || JSON.parse)(t), Y.trim(t);
    } catch (i) {
      if (i.name !== 'SyntaxError') throw i;
    }
  return (0, JSON.stringify)(t);
}
const Ro = {
  transitional: Ub,
  adapter: ['xhr', 'http', 'fetch'],
  transformRequest: [
    function (r, l) {
      const i = l.getContentType() || '',
        s = i.indexOf('application/json') > -1,
        u = Y.isObject(r);
      if ((u && Y.isHTMLForm(r) && (r = new FormData(r)), Y.isFormData(r)))
        return s ? JSON.stringify(jb(r)) : r;
      if (
        Y.isArrayBuffer(r) ||
        Y.isBuffer(r) ||
        Y.isStream(r) ||
        Y.isFile(r) ||
        Y.isBlob(r) ||
        Y.isReadableStream(r)
      )
        return r;
      if (Y.isArrayBufferView(r)) return r.buffer;
      if (Y.isURLSearchParams(r))
        return (
          l.setContentType('application/x-www-form-urlencoded;charset=utf-8', !1), r.toString()
        );
      let p;
      if (u) {
        if (i.indexOf('application/x-www-form-urlencoded') > -1)
          return AO(r, this.formSerializer).toString();
        if ((p = Y.isFileList(r)) || i.indexOf('multipart/form-data') > -1) {
          const m = this.env && this.env.FormData;
          return Vu(p ? { 'files[]': r } : r, m && new m(), this.formSerializer);
        }
      }
      return u || s ? (l.setContentType('application/json', !1), $O(r)) : r;
    },
  ],
  transformResponse: [
    function (r) {
      const l = this.transitional || Ro.transitional,
        i = l && l.forcedJSONParsing,
        s = this.responseType === 'json';
      if (Y.isResponse(r) || Y.isReadableStream(r)) return r;
      if (r && Y.isString(r) && ((i && !this.responseType) || s)) {
        const f = !(l && l.silentJSONParsing) && s;
        try {
          return JSON.parse(r);
        } catch (p) {
          if (f)
            throw p.name === 'SyntaxError'
              ? we.from(p, we.ERR_BAD_RESPONSE, this, null, this.response)
              : p;
        }
      }
      return r;
    },
  ],
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Yt.classes.FormData, Blob: Yt.classes.Blob },
  validateStatus: function (r) {
    return r >= 200 && r < 300;
  },
  headers: { common: { Accept: 'application/json, text/plain, */*', 'Content-Type': void 0 } },
};
Y.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (t) => {
  Ro.headers[t] = {};
});
const zO = Y.toObjectSet([
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent',
  ]),
  DO = (t) => {
    const r = {};
    let l, i, s;
    return (
      t &&
        t
          .split(
            `
`,
          )
          .forEach(function (f) {
            (s = f.indexOf(':')),
              (l = f.substring(0, s).trim().toLowerCase()),
              (i = f.substring(s + 1).trim()),
              !(!l || (r[l] && zO[l])) &&
                (l === 'set-cookie'
                  ? r[l]
                    ? r[l].push(i)
                    : (r[l] = [i])
                  : (r[l] = r[l] ? r[l] + ', ' + i : i));
          }),
      r
    );
  },
  Qy = Symbol('internals');
function Qi(t) {
  return t && String(t).trim().toLowerCase();
}
function ru(t) {
  return t === !1 || t == null ? t : Y.isArray(t) ? t.map(ru) : String(t);
}
function _O(t) {
  const r = Object.create(null),
    l = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let i;
  for (; (i = l.exec(t)); ) r[i[1]] = i[2];
  return r;
}
const BO = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function Od(t, r, l, i, s) {
  if (Y.isFunction(i)) return i.call(this, r, l);
  if ((s && (r = l), !!Y.isString(r))) {
    if (Y.isString(i)) return r.indexOf(i) !== -1;
    if (Y.isRegExp(i)) return i.test(r);
  }
}
function NO(t) {
  return t
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (r, l, i) => l.toUpperCase() + i);
}
function kO(t, r) {
  const l = Y.toCamelCase(' ' + r);
  ['get', 'set', 'has'].forEach((i) => {
    Object.defineProperty(t, i + l, {
      value: function (s, u, f) {
        return this[i].call(this, r, s, u, f);
      },
      configurable: !0,
    });
  });
}
class tn {
  constructor(r) {
    r && this.set(r);
  }
  set(r, l, i) {
    const s = this;
    function u(p, m, h) {
      const y = Qi(m);
      if (!y) throw new Error('header name must be a non-empty string');
      const v = Y.findKey(s, y);
      (!v || s[v] === void 0 || h === !0 || (h === void 0 && s[v] !== !1)) && (s[v || m] = ru(p));
    }
    const f = (p, m) => Y.forEach(p, (h, y) => u(h, y, m));
    if (Y.isPlainObject(r) || r instanceof this.constructor) f(r, l);
    else if (Y.isString(r) && (r = r.trim()) && !BO(r)) f(DO(r), l);
    else if (Y.isHeaders(r)) for (const [p, m] of r.entries()) u(m, p, i);
    else r != null && u(l, r, i);
    return this;
  }
  get(r, l) {
    if (((r = Qi(r)), r)) {
      const i = Y.findKey(this, r);
      if (i) {
        const s = this[i];
        if (!l) return s;
        if (l === !0) return _O(s);
        if (Y.isFunction(l)) return l.call(this, s, i);
        if (Y.isRegExp(l)) return l.exec(s);
        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }
  has(r, l) {
    if (((r = Qi(r)), r)) {
      const i = Y.findKey(this, r);
      return !!(i && this[i] !== void 0 && (!l || Od(this, this[i], i, l)));
    }
    return !1;
  }
  delete(r, l) {
    const i = this;
    let s = !1;
    function u(f) {
      if (((f = Qi(f)), f)) {
        const p = Y.findKey(i, f);
        p && (!l || Od(i, i[p], p, l)) && (delete i[p], (s = !0));
      }
    }
    return Y.isArray(r) ? r.forEach(u) : u(r), s;
  }
  clear(r) {
    const l = Object.keys(this);
    let i = l.length,
      s = !1;
    for (; i--; ) {
      const u = l[i];
      (!r || Od(this, this[u], u, r, !0)) && (delete this[u], (s = !0));
    }
    return s;
  }
  normalize(r) {
    const l = this,
      i = {};
    return (
      Y.forEach(this, (s, u) => {
        const f = Y.findKey(i, u);
        if (f) {
          (l[f] = ru(s)), delete l[u];
          return;
        }
        const p = r ? NO(u) : String(u).trim();
        p !== u && delete l[u], (l[p] = ru(s)), (i[p] = !0);
      }),
      this
    );
  }
  concat(...r) {
    return this.constructor.concat(this, ...r);
  }
  toJSON(r) {
    const l = Object.create(null);
    return (
      Y.forEach(this, (i, s) => {
        i != null && i !== !1 && (l[s] = r && Y.isArray(i) ? i.join(', ') : i);
      }),
      l
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([r, l]) => r + ': ' + l).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }
  static from(r) {
    return r instanceof this ? r : new this(r);
  }
  static concat(r, ...l) {
    const i = new this(r);
    return l.forEach((s) => i.set(s)), i;
  }
  static accessor(r) {
    const i = (this[Qy] = this[Qy] = { accessors: {} }).accessors,
      s = this.prototype;
    function u(f) {
      const p = Qi(f);
      i[p] || (kO(s, f), (i[p] = !0));
    }
    return Y.isArray(r) ? r.forEach(u) : u(r), this;
  }
}
tn.accessor([
  'Content-Type',
  'Content-Length',
  'Accept',
  'Accept-Encoding',
  'User-Agent',
  'Authorization',
]);
Y.reduceDescriptors(tn.prototype, ({ value: t }, r) => {
  let l = r[0].toUpperCase() + r.slice(1);
  return {
    get: () => t,
    set(i) {
      this[l] = i;
    },
  };
});
Y.freezeMethods(tn);
function Md(t, r) {
  const l = this || Ro,
    i = r || l,
    s = tn.from(i.headers);
  let u = i.data;
  return (
    Y.forEach(t, function (p) {
      u = p.call(l, u, s.normalize(), r ? r.status : void 0);
    }),
    s.normalize(),
    u
  );
}
function Lb(t) {
  return !!(t && t.__CANCEL__);
}
function Fl(t, r, l) {
  we.call(this, t ?? 'canceled', we.ERR_CANCELED, r, l), (this.name = 'CanceledError');
}
Y.inherits(Fl, we, { __CANCEL__: !0 });
function Hb(t, r, l) {
  const i = l.config.validateStatus;
  !l.status || !i || i(l.status)
    ? t(l)
    : r(
        new we(
          'Request failed with status code ' + l.status,
          [we.ERR_BAD_REQUEST, we.ERR_BAD_RESPONSE][Math.floor(l.status / 100) - 4],
          l.config,
          l.request,
          l,
        ),
      );
}
function UO(t) {
  const r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return (r && r[1]) || '';
}
function jO(t, r) {
  t = t || 10;
  const l = new Array(t),
    i = new Array(t);
  let s = 0,
    u = 0,
    f;
  return (
    (r = r !== void 0 ? r : 1e3),
    function (m) {
      const h = Date.now(),
        y = i[u];
      f || (f = h), (l[s] = m), (i[s] = h);
      let v = u,
        b = 0;
      for (; v !== s; ) (b += l[v++]), (v = v % t);
      if (((s = (s + 1) % t), s === u && (u = (u + 1) % t), h - f < r)) return;
      const w = y && h - y;
      return w ? Math.round((b * 1e3) / w) : void 0;
    }
  );
}
function LO(t, r) {
  let l = 0,
    i = 1e3 / r,
    s,
    u;
  const f = (h, y = Date.now()) => {
    (l = y), (s = null), u && (clearTimeout(u), (u = null)), t.apply(null, h);
  };
  return [
    (...h) => {
      const y = Date.now(),
        v = y - l;
      v >= i
        ? f(h, y)
        : ((s = h),
          u ||
            (u = setTimeout(() => {
              (u = null), f(s);
            }, i - v)));
    },
    () => s && f(s),
  ];
}
const yu = (t, r, l = 3) => {
    let i = 0;
    const s = jO(50, 250);
    return LO((u) => {
      const f = u.loaded,
        p = u.lengthComputable ? u.total : void 0,
        m = f - i,
        h = s(m),
        y = f <= p;
      i = f;
      const v = {
        loaded: f,
        total: p,
        progress: p ? f / p : void 0,
        bytes: m,
        rate: h || void 0,
        estimated: h && p && y ? (p - f) / h : void 0,
        event: u,
        lengthComputable: p != null,
        [r ? 'download' : 'upload']: !0,
      };
      t(v);
    }, l);
  },
  Wy = (t, r) => {
    const l = t != null;
    return [(i) => r[0]({ lengthComputable: l, total: t, loaded: i }), r[1]];
  },
  Iy =
    (t) =>
    (...r) =>
      Y.asap(() => t(...r)),
  HO = Yt.hasStandardBrowserEnv
    ? ((t, r) => (l) => (
        (l = new URL(l, Yt.origin)),
        t.protocol === l.protocol && t.host === l.host && (r || t.port === l.port)
      ))(new URL(Yt.origin), Yt.navigator && /(msie|trident)/i.test(Yt.navigator.userAgent))
    : () => !0,
  PO = Yt.hasStandardBrowserEnv
    ? {
        write(t, r, l, i, s, u) {
          const f = [t + '=' + encodeURIComponent(r)];
          Y.isNumber(l) && f.push('expires=' + new Date(l).toGMTString()),
            Y.isString(i) && f.push('path=' + i),
            Y.isString(s) && f.push('domain=' + s),
            u === !0 && f.push('secure'),
            (document.cookie = f.join('; '));
        },
        read(t) {
          const r = document.cookie.match(new RegExp('(^|;\\s*)(' + t + ')=([^;]*)'));
          return r ? decodeURIComponent(r[3]) : null;
        },
        remove(t) {
          this.write(t, '', Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function qO(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function FO(t, r) {
  return r ? t.replace(/\/?\/$/, '') + '/' + r.replace(/^\/+/, '') : t;
}
function Pb(t, r) {
  return t && !qO(r) ? FO(t, r) : r;
}
const Zy = (t) => (t instanceof tn ? { ...t } : t);
function La(t, r) {
  r = r || {};
  const l = {};
  function i(h, y, v, b) {
    return Y.isPlainObject(h) && Y.isPlainObject(y)
      ? Y.merge.call({ caseless: b }, h, y)
      : Y.isPlainObject(y)
        ? Y.merge({}, y)
        : Y.isArray(y)
          ? y.slice()
          : y;
  }
  function s(h, y, v, b) {
    if (Y.isUndefined(y)) {
      if (!Y.isUndefined(h)) return i(void 0, h, v, b);
    } else return i(h, y, v, b);
  }
  function u(h, y) {
    if (!Y.isUndefined(y)) return i(void 0, y);
  }
  function f(h, y) {
    if (Y.isUndefined(y)) {
      if (!Y.isUndefined(h)) return i(void 0, h);
    } else return i(void 0, y);
  }
  function p(h, y, v) {
    if (v in r) return i(h, y);
    if (v in t) return i(void 0, h);
  }
  const m = {
    url: u,
    method: u,
    data: u,
    baseURL: f,
    transformRequest: f,
    transformResponse: f,
    paramsSerializer: f,
    timeout: f,
    timeoutMessage: f,
    withCredentials: f,
    withXSRFToken: f,
    adapter: f,
    responseType: f,
    xsrfCookieName: f,
    xsrfHeaderName: f,
    onUploadProgress: f,
    onDownloadProgress: f,
    decompress: f,
    maxContentLength: f,
    maxBodyLength: f,
    beforeRedirect: f,
    transport: f,
    httpAgent: f,
    httpsAgent: f,
    cancelToken: f,
    socketPath: f,
    responseEncoding: f,
    validateStatus: p,
    headers: (h, y, v) => s(Zy(h), Zy(y), v, !0),
  };
  return (
    Y.forEach(Object.keys(Object.assign({}, t, r)), function (y) {
      const v = m[y] || s,
        b = v(t[y], r[y], y);
      (Y.isUndefined(b) && v !== p) || (l[y] = b);
    }),
    l
  );
}
const qb = (t) => {
    const r = La({}, t);
    let {
      data: l,
      withXSRFToken: i,
      xsrfHeaderName: s,
      xsrfCookieName: u,
      headers: f,
      auth: p,
    } = r;
    (r.headers = f = tn.from(f)),
      (r.url = kb(Pb(r.baseURL, r.url), t.params, t.paramsSerializer)),
      p &&
        f.set(
          'Authorization',
          'Basic ' +
            btoa(
              (p.username || '') +
                ':' +
                (p.password ? unescape(encodeURIComponent(p.password)) : ''),
            ),
        );
    let m;
    if (Y.isFormData(l)) {
      if (Yt.hasStandardBrowserEnv || Yt.hasStandardBrowserWebWorkerEnv) f.setContentType(void 0);
      else if ((m = f.getContentType()) !== !1) {
        const [h, ...y] = m
          ? m
              .split(';')
              .map((v) => v.trim())
              .filter(Boolean)
          : [];
        f.setContentType([h || 'multipart/form-data', ...y].join('; '));
      }
    }
    if (
      Yt.hasStandardBrowserEnv &&
      (i && Y.isFunction(i) && (i = i(r)), i || (i !== !1 && HO(r.url)))
    ) {
      const h = s && u && PO.read(u);
      h && f.set(s, h);
    }
    return r;
  },
  GO = typeof XMLHttpRequest < 'u',
  VO =
    GO &&
    function (t) {
      return new Promise(function (l, i) {
        const s = qb(t);
        let u = s.data;
        const f = tn.from(s.headers).normalize();
        let { responseType: p, onUploadProgress: m, onDownloadProgress: h } = s,
          y,
          v,
          b,
          w,
          S;
        function A() {
          w && w(),
            S && S(),
            s.cancelToken && s.cancelToken.unsubscribe(y),
            s.signal && s.signal.removeEventListener('abort', y);
        }
        let O = new XMLHttpRequest();
        O.open(s.method.toUpperCase(), s.url, !0), (O.timeout = s.timeout);
        function M() {
          if (!O) return;
          const E = tn.from('getAllResponseHeaders' in O && O.getAllResponseHeaders()),
            R = {
              data: !p || p === 'text' || p === 'json' ? O.responseText : O.response,
              status: O.status,
              statusText: O.statusText,
              headers: E,
              config: t,
              request: O,
            };
          Hb(
            function (q) {
              l(q), A();
            },
            function (q) {
              i(q), A();
            },
            R,
          ),
            (O = null);
        }
        'onloadend' in O
          ? (O.onloadend = M)
          : (O.onreadystatechange = function () {
              !O ||
                O.readyState !== 4 ||
                (O.status === 0 && !(O.responseURL && O.responseURL.indexOf('file:') === 0)) ||
                setTimeout(M);
            }),
          (O.onabort = function () {
            O && (i(new we('Request aborted', we.ECONNABORTED, t, O)), (O = null));
          }),
          (O.onerror = function () {
            i(new we('Network Error', we.ERR_NETWORK, t, O)), (O = null);
          }),
          (O.ontimeout = function () {
            let D = s.timeout ? 'timeout of ' + s.timeout + 'ms exceeded' : 'timeout exceeded';
            const R = s.transitional || Ub;
            s.timeoutErrorMessage && (D = s.timeoutErrorMessage),
              i(new we(D, R.clarifyTimeoutError ? we.ETIMEDOUT : we.ECONNABORTED, t, O)),
              (O = null);
          }),
          u === void 0 && f.setContentType(null),
          'setRequestHeader' in O &&
            Y.forEach(f.toJSON(), function (D, R) {
              O.setRequestHeader(R, D);
            }),
          Y.isUndefined(s.withCredentials) || (O.withCredentials = !!s.withCredentials),
          p && p !== 'json' && (O.responseType = s.responseType),
          h && (([b, S] = yu(h, !0)), O.addEventListener('progress', b)),
          m &&
            O.upload &&
            (([v, w] = yu(m)),
            O.upload.addEventListener('progress', v),
            O.upload.addEventListener('loadend', w)),
          (s.cancelToken || s.signal) &&
            ((y = (E) => {
              O && (i(!E || E.type ? new Fl(null, t, O) : E), O.abort(), (O = null));
            }),
            s.cancelToken && s.cancelToken.subscribe(y),
            s.signal && (s.signal.aborted ? y() : s.signal.addEventListener('abort', y)));
        const z = UO(s.url);
        if (z && Yt.protocols.indexOf(z) === -1) {
          i(new we('Unsupported protocol ' + z + ':', we.ERR_BAD_REQUEST, t));
          return;
        }
        O.send(u || null);
      });
    },
  YO = (t, r) => {
    const { length: l } = (t = t ? t.filter(Boolean) : []);
    if (r || l) {
      let i = new AbortController(),
        s;
      const u = function (h) {
        if (!s) {
          (s = !0), p();
          const y = h instanceof Error ? h : this.reason;
          i.abort(y instanceof we ? y : new Fl(y instanceof Error ? y.message : y));
        }
      };
      let f =
        r &&
        setTimeout(() => {
          (f = null), u(new we(`timeout ${r} of ms exceeded`, we.ETIMEDOUT));
        }, r);
      const p = () => {
        t &&
          (f && clearTimeout(f),
          (f = null),
          t.forEach((h) => {
            h.unsubscribe ? h.unsubscribe(u) : h.removeEventListener('abort', u);
          }),
          (t = null));
      };
      t.forEach((h) => h.addEventListener('abort', u));
      const { signal: m } = i;
      return (m.unsubscribe = () => Y.asap(p)), m;
    }
  },
  KO = function* (t, r) {
    let l = t.byteLength;
    if (l < r) {
      yield t;
      return;
    }
    let i = 0,
      s;
    for (; i < l; ) (s = i + r), yield t.slice(i, s), (i = s);
  },
  XO = async function* (t, r) {
    for await (const l of QO(t)) yield* KO(l, r);
  },
  QO = async function* (t) {
    if (t[Symbol.asyncIterator]) {
      yield* t;
      return;
    }
    const r = t.getReader();
    try {
      for (;;) {
        const { done: l, value: i } = await r.read();
        if (l) break;
        yield i;
      }
    } finally {
      await r.cancel();
    }
  },
  Jy = (t, r, l, i) => {
    const s = XO(t, r);
    let u = 0,
      f,
      p = (m) => {
        f || ((f = !0), i && i(m));
      };
    return new ReadableStream(
      {
        async pull(m) {
          try {
            const { done: h, value: y } = await s.next();
            if (h) {
              p(), m.close();
              return;
            }
            let v = y.byteLength;
            if (l) {
              let b = (u += v);
              l(b);
            }
            m.enqueue(new Uint8Array(y));
          } catch (h) {
            throw (p(h), h);
          }
        },
        cancel(m) {
          return p(m), s.return();
        },
      },
      { highWaterMark: 2 },
    );
  },
  Yu = typeof fetch == 'function' && typeof Request == 'function' && typeof Response == 'function',
  Fb = Yu && typeof ReadableStream == 'function',
  WO =
    Yu &&
    (typeof TextEncoder == 'function'
      ? (
          (t) => (r) =>
            t.encode(r)
        )(new TextEncoder())
      : async (t) => new Uint8Array(await new Response(t).arrayBuffer())),
  Gb = (t, ...r) => {
    try {
      return !!t(...r);
    } catch {
      return !1;
    }
  },
  IO =
    Fb &&
    Gb(() => {
      let t = !1;
      const r = new Request(Yt.origin, {
        body: new ReadableStream(),
        method: 'POST',
        get duplex() {
          return (t = !0), 'half';
        },
      }).headers.has('Content-Type');
      return t && !r;
    }),
  ev = 64 * 1024,
  rp = Fb && Gb(() => Y.isReadableStream(new Response('').body)),
  vu = { stream: rp && ((t) => t.body) };
Yu &&
  ((t) => {
    ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach((r) => {
      !vu[r] &&
        (vu[r] = Y.isFunction(t[r])
          ? (l) => l[r]()
          : (l, i) => {
              throw new we(`Response type '${r}' is not supported`, we.ERR_NOT_SUPPORT, i);
            });
    });
  })(new Response());
const ZO = async (t) => {
    if (t == null) return 0;
    if (Y.isBlob(t)) return t.size;
    if (Y.isSpecCompliantForm(t))
      return (await new Request(Yt.origin, { method: 'POST', body: t }).arrayBuffer()).byteLength;
    if (Y.isArrayBufferView(t) || Y.isArrayBuffer(t)) return t.byteLength;
    if ((Y.isURLSearchParams(t) && (t = t + ''), Y.isString(t))) return (await WO(t)).byteLength;
  },
  JO = async (t, r) => {
    const l = Y.toFiniteNumber(t.getContentLength());
    return l ?? ZO(r);
  },
  e5 =
    Yu &&
    (async (t) => {
      let {
        url: r,
        method: l,
        data: i,
        signal: s,
        cancelToken: u,
        timeout: f,
        onDownloadProgress: p,
        onUploadProgress: m,
        responseType: h,
        headers: y,
        withCredentials: v = 'same-origin',
        fetchOptions: b,
      } = qb(t);
      h = h ? (h + '').toLowerCase() : 'text';
      let w = YO([s, u && u.toAbortSignal()], f),
        S;
      const A =
        w &&
        w.unsubscribe &&
        (() => {
          w.unsubscribe();
        });
      let O;
      try {
        if (m && IO && l !== 'get' && l !== 'head' && (O = await JO(y, i)) !== 0) {
          let R = new Request(r, { method: 'POST', body: i, duplex: 'half' }),
            U;
          if (
            (Y.isFormData(i) && (U = R.headers.get('content-type')) && y.setContentType(U), R.body)
          ) {
            const [q, V] = Wy(O, yu(Iy(m)));
            i = Jy(R.body, ev, q, V);
          }
        }
        Y.isString(v) || (v = v ? 'include' : 'omit');
        const M = 'credentials' in Request.prototype;
        S = new Request(r, {
          ...b,
          signal: w,
          method: l.toUpperCase(),
          headers: y.normalize().toJSON(),
          body: i,
          duplex: 'half',
          credentials: M ? v : void 0,
        });
        let z = await fetch(S);
        const E = rp && (h === 'stream' || h === 'response');
        if (rp && (p || (E && A))) {
          const R = {};
          ['status', 'statusText', 'headers'].forEach((G) => {
            R[G] = z[G];
          });
          const U = Y.toFiniteNumber(z.headers.get('content-length')),
            [q, V] = (p && Wy(U, yu(Iy(p), !0))) || [];
          z = new Response(
            Jy(z.body, ev, q, () => {
              V && V(), A && A();
            }),
            R,
          );
        }
        h = h || 'text';
        let D = await vu[Y.findKey(vu, h) || 'text'](z, t);
        return (
          !E && A && A(),
          await new Promise((R, U) => {
            Hb(R, U, {
              data: D,
              headers: tn.from(z.headers),
              status: z.status,
              statusText: z.statusText,
              config: t,
              request: S,
            });
          })
        );
      } catch (M) {
        throw (
          (A && A(),
          M && M.name === 'TypeError' && /fetch/i.test(M.message)
            ? Object.assign(new we('Network Error', we.ERR_NETWORK, t, S), { cause: M.cause || M })
            : we.from(M, M && M.code, t, S))
        );
      }
    }),
  ap = { http: mO, xhr: VO, fetch: e5 };
Y.forEach(ap, (t, r) => {
  if (t) {
    try {
      Object.defineProperty(t, 'name', { value: r });
    } catch {}
    Object.defineProperty(t, 'adapterName', { value: r });
  }
});
const tv = (t) => `- ${t}`,
  t5 = (t) => Y.isFunction(t) || t === null || t === !1,
  Vb = {
    getAdapter: (t) => {
      t = Y.isArray(t) ? t : [t];
      const { length: r } = t;
      let l, i;
      const s = {};
      for (let u = 0; u < r; u++) {
        l = t[u];
        let f;
        if (((i = l), !t5(l) && ((i = ap[(f = String(l)).toLowerCase()]), i === void 0)))
          throw new we(`Unknown adapter '${f}'`);
        if (i) break;
        s[f || '#' + u] = i;
      }
      if (!i) {
        const u = Object.entries(s).map(
          ([p, m]) =>
            `adapter ${p} ` +
            (m === !1 ? 'is not supported by the environment' : 'is not available in the build'),
        );
        let f = r
          ? u.length > 1
            ? `since :
` +
              u.map(tv).join(`
`)
            : ' ' + tv(u[0])
          : 'as no adapter specified';
        throw new we(
          'There is no suitable adapter to dispatch the request ' + f,
          'ERR_NOT_SUPPORT',
        );
      }
      return i;
    },
    adapters: ap,
  };
function $d(t) {
  if ((t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted))
    throw new Fl(null, t);
}
function nv(t) {
  return (
    $d(t),
    (t.headers = tn.from(t.headers)),
    (t.data = Md.call(t, t.transformRequest)),
    ['post', 'put', 'patch'].indexOf(t.method) !== -1 &&
      t.headers.setContentType('application/x-www-form-urlencoded', !1),
    Vb.getAdapter(t.adapter || Ro.adapter)(t).then(
      function (i) {
        return (
          $d(t), (i.data = Md.call(t, t.transformResponse, i)), (i.headers = tn.from(i.headers)), i
        );
      },
      function (i) {
        return (
          Lb(i) ||
            ($d(t),
            i &&
              i.response &&
              ((i.response.data = Md.call(t, t.transformResponse, i.response)),
              (i.response.headers = tn.from(i.response.headers)))),
          Promise.reject(i)
        );
      },
    )
  );
}
const Yb = '1.7.9',
  Ku = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((t, r) => {
  Ku[t] = function (i) {
    return typeof i === t || 'a' + (r < 1 ? 'n ' : ' ') + t;
  };
});
const rv = {};
Ku.transitional = function (r, l, i) {
  function s(u, f) {
    return '[Axios v' + Yb + "] Transitional option '" + u + "'" + f + (i ? '. ' + i : '');
  }
  return (u, f, p) => {
    if (r === !1)
      throw new we(s(f, ' has been removed' + (l ? ' in ' + l : '')), we.ERR_DEPRECATED);
    return (
      l &&
        !rv[f] &&
        ((rv[f] = !0),
        console.warn(
          s(f, ' has been deprecated since v' + l + ' and will be removed in the near future'),
        )),
      r ? r(u, f, p) : !0
    );
  };
};
Ku.spelling = function (r) {
  return (l, i) => (console.warn(`${i} is likely a misspelling of ${r}`), !0);
};
function n5(t, r, l) {
  if (typeof t != 'object') throw new we('options must be an object', we.ERR_BAD_OPTION_VALUE);
  const i = Object.keys(t);
  let s = i.length;
  for (; s-- > 0; ) {
    const u = i[s],
      f = r[u];
    if (f) {
      const p = t[u],
        m = p === void 0 || f(p, u, t);
      if (m !== !0) throw new we('option ' + u + ' must be ' + m, we.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (l !== !0) throw new we('Unknown option ' + u, we.ERR_BAD_OPTION);
  }
}
const au = { assertOptions: n5, validators: Ku },
  Xn = au.validators;
class ka {
  constructor(r) {
    (this.defaults = r), (this.interceptors = { request: new Xy(), response: new Xy() });
  }
  async request(r, l) {
    try {
      return await this._request(r, l);
    } catch (i) {
      if (i instanceof Error) {
        let s = {};
        Error.captureStackTrace ? Error.captureStackTrace(s) : (s = new Error());
        const u = s.stack ? s.stack.replace(/^.+\n/, '') : '';
        try {
          i.stack
            ? u &&
              !String(i.stack).endsWith(u.replace(/^.+\n.+\n/, '')) &&
              (i.stack +=
                `
` + u)
            : (i.stack = u);
        } catch {}
      }
      throw i;
    }
  }
  _request(r, l) {
    typeof r == 'string' ? ((l = l || {}), (l.url = r)) : (l = r || {}), (l = La(this.defaults, l));
    const { transitional: i, paramsSerializer: s, headers: u } = l;
    i !== void 0 &&
      au.assertOptions(
        i,
        {
          silentJSONParsing: Xn.transitional(Xn.boolean),
          forcedJSONParsing: Xn.transitional(Xn.boolean),
          clarifyTimeoutError: Xn.transitional(Xn.boolean),
        },
        !1,
      ),
      s != null &&
        (Y.isFunction(s)
          ? (l.paramsSerializer = { serialize: s })
          : au.assertOptions(s, { encode: Xn.function, serialize: Xn.function }, !0)),
      au.assertOptions(
        l,
        { baseUrl: Xn.spelling('baseURL'), withXsrfToken: Xn.spelling('withXSRFToken') },
        !0,
      ),
      (l.method = (l.method || this.defaults.method || 'get').toLowerCase());
    let f = u && Y.merge(u.common, u[l.method]);
    u &&
      Y.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], (S) => {
        delete u[S];
      }),
      (l.headers = tn.concat(f, u));
    const p = [];
    let m = !0;
    this.interceptors.request.forEach(function (A) {
      (typeof A.runWhen == 'function' && A.runWhen(l) === !1) ||
        ((m = m && A.synchronous), p.unshift(A.fulfilled, A.rejected));
    });
    const h = [];
    this.interceptors.response.forEach(function (A) {
      h.push(A.fulfilled, A.rejected);
    });
    let y,
      v = 0,
      b;
    if (!m) {
      const S = [nv.bind(this), void 0];
      for (S.unshift.apply(S, p), S.push.apply(S, h), b = S.length, y = Promise.resolve(l); v < b; )
        y = y.then(S[v++], S[v++]);
      return y;
    }
    b = p.length;
    let w = l;
    for (v = 0; v < b; ) {
      const S = p[v++],
        A = p[v++];
      try {
        w = S(w);
      } catch (O) {
        A.call(this, O);
        break;
      }
    }
    try {
      y = nv.call(this, w);
    } catch (S) {
      return Promise.reject(S);
    }
    for (v = 0, b = h.length; v < b; ) y = y.then(h[v++], h[v++]);
    return y;
  }
  getUri(r) {
    r = La(this.defaults, r);
    const l = Pb(r.baseURL, r.url);
    return kb(l, r.params, r.paramsSerializer);
  }
}
Y.forEach(['delete', 'get', 'head', 'options'], function (r) {
  ka.prototype[r] = function (l, i) {
    return this.request(La(i || {}, { method: r, url: l, data: (i || {}).data }));
  };
});
Y.forEach(['post', 'put', 'patch'], function (r) {
  function l(i) {
    return function (u, f, p) {
      return this.request(
        La(p || {}, {
          method: r,
          headers: i ? { 'Content-Type': 'multipart/form-data' } : {},
          url: u,
          data: f,
        }),
      );
    };
  }
  (ka.prototype[r] = l()), (ka.prototype[r + 'Form'] = l(!0));
});
class Gp {
  constructor(r) {
    if (typeof r != 'function') throw new TypeError('executor must be a function.');
    let l;
    this.promise = new Promise(function (u) {
      l = u;
    });
    const i = this;
    this.promise.then((s) => {
      if (!i._listeners) return;
      let u = i._listeners.length;
      for (; u-- > 0; ) i._listeners[u](s);
      i._listeners = null;
    }),
      (this.promise.then = (s) => {
        let u;
        const f = new Promise((p) => {
          i.subscribe(p), (u = p);
        }).then(s);
        return (
          (f.cancel = function () {
            i.unsubscribe(u);
          }),
          f
        );
      }),
      r(function (u, f, p) {
        i.reason || ((i.reason = new Fl(u, f, p)), l(i.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(r) {
    if (this.reason) {
      r(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(r) : (this._listeners = [r]);
  }
  unsubscribe(r) {
    if (!this._listeners) return;
    const l = this._listeners.indexOf(r);
    l !== -1 && this._listeners.splice(l, 1);
  }
  toAbortSignal() {
    const r = new AbortController(),
      l = (i) => {
        r.abort(i);
      };
    return this.subscribe(l), (r.signal.unsubscribe = () => this.unsubscribe(l)), r.signal;
  }
  static source() {
    let r;
    return {
      token: new Gp(function (s) {
        r = s;
      }),
      cancel: r,
    };
  }
}
function r5(t) {
  return function (l) {
    return t.apply(null, l);
  };
}
function a5(t) {
  return Y.isObject(t) && t.isAxiosError === !0;
}
const lp = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(lp).forEach(([t, r]) => {
  lp[r] = t;
});
function Kb(t) {
  const r = new ka(t),
    l = Rb(ka.prototype.request, r);
  return (
    Y.extend(l, ka.prototype, r, { allOwnKeys: !0 }),
    Y.extend(l, r, null, { allOwnKeys: !0 }),
    (l.create = function (s) {
      return Kb(La(t, s));
    }),
    l
  );
}
const yt = Kb(Ro);
yt.Axios = ka;
yt.CanceledError = Fl;
yt.CancelToken = Gp;
yt.isCancel = Lb;
yt.VERSION = Yb;
yt.toFormData = Vu;
yt.AxiosError = we;
yt.Cancel = yt.CanceledError;
yt.all = function (r) {
  return Promise.all(r);
};
yt.spread = r5;
yt.isAxiosError = a5;
yt.mergeConfig = La;
yt.AxiosHeaders = tn;
yt.formToJSON = (t) => jb(Y.isHTMLForm(t) ? new FormData(t) : t);
yt.getAdapter = Vb.getAdapter;
yt.HttpStatusCode = lp;
yt.default = yt;
const l5 = async (t) =>
  await yt.post('https://jsonplaceholder.typicode.com/posts', {
    userId: 1,
    title: t.title,
    body: t.body,
  });
function i5() {
  const t = () => {
    (async () => {
      try {
        const l = document.getElementById('title'),
          i = document.getElementById('body'),
          s = { title: l.value, body: i.value };
        console.log(s), await l5(s);
      } catch {
        console.error('投稿ボタン押下時処理に失敗しました。');
      }
    })();
  };
  return L.jsxs(Xs, {
    container: !0,
    spacing: 2,
    children: [
      L.jsx(Xs, {
        size: 3,
        children: L.jsx(Fy, { id: 'title', label: 'タイトル', fullWidth: !0 }),
      }),
      L.jsx(Xs, { size: 7, children: L.jsx(Fy, { id: 'body', label: '本文', fullWidth: !0 }) }),
      L.jsx(Xs, {
        size: 2,
        children: L.jsx(Cb, {
          handleClickButton: t,
          icon: 'send',
          label: '投稿',
          sx: { height: '100%' },
          size: 'small',
          fullWidth: !0,
        }),
      }),
    ],
  });
}
const o5 = { API_URL: 'https://jsonplaceholder.typicode.com' },
  Xb = (t) => typeof t == 'object' && t !== null,
  av = (t) => Xb(t) && !(t instanceof RegExp) && !(t instanceof Error) && !(t instanceof Date),
  s5 = Symbol('mapObjectSkip'),
  ip = (t, r, l, i = new WeakMap()) => {
    if (((l = { deep: !1, target: {}, ...l }), i.has(t))) return i.get(t);
    i.set(t, l.target);
    const { target: s } = l;
    delete l.target;
    const u = (f) => f.map((p) => (av(p) ? ip(p, r, l, i) : p));
    if (Array.isArray(t)) return u(t);
    for (const [f, p] of Object.entries(t)) {
      const m = r(f, p, t);
      if (m === s5) continue;
      let [h, y, { shouldRecurse: v = !0 } = {}] = m;
      h !== '__proto__' &&
        (l.deep && v && av(y) && (y = Array.isArray(y) ? u(y) : ip(y, r, l, i)), (s[h] = y));
    }
    return s;
  };
function lv(t, r, l) {
  if (!Xb(t)) throw new TypeError(`Expected an object, got \`${t}\` (${typeof t})`);
  return ip(t, r, l);
}
const u5 = /[\p{Lu}]/u,
  c5 = /[\p{Ll}]/u,
  iv = /^[\p{Lu}](?![\p{Lu}])/gu,
  Qb = /([\p{Alpha}\p{N}_]|$)/u,
  Vp = /[_.\- ]+/,
  f5 = new RegExp('^' + Vp.source),
  ov = new RegExp(Vp.source + Qb.source, 'gu'),
  sv = new RegExp('\\d+' + Qb.source, 'gu'),
  d5 = (t, r, l, i) => {
    let s = !1,
      u = !1,
      f = !1,
      p = !1;
    for (let m = 0; m < t.length; m++) {
      const h = t[m];
      (p = m > 2 ? t[m - 3] === '-' : !0),
        s && u5.test(h)
          ? ((t = t.slice(0, m) + '-' + t.slice(m)), (s = !1), (f = u), (u = !0), m++)
          : u && f && c5.test(h) && (!p || i)
            ? ((t = t.slice(0, m - 1) + '-' + t.slice(m - 1)), (f = u), (u = !1), (s = !0))
            : ((s = r(h) === h && l(h) !== h), (f = u), (u = l(h) === h && r(h) !== h));
    }
    return t;
  },
  p5 = (t, r) => ((iv.lastIndex = 0), t.replaceAll(iv, (l) => r(l))),
  h5 = (t, r) => (
    (ov.lastIndex = 0),
    (sv.lastIndex = 0),
    t
      .replaceAll(sv, (l, i, s) => (['_', '-'].includes(t.charAt(s + l.length)) ? l : r(l)))
      .replaceAll(ov, (l, i) => r(i))
  );
function m5(t, r) {
  if (!(typeof t == 'string' || Array.isArray(t)))
    throw new TypeError('Expected the input to be `string | string[]`');
  if (
    ((r = { pascalCase: !1, preserveConsecutiveUppercase: !1, ...r }),
    Array.isArray(t)
      ? (t = t
          .map((u) => u.trim())
          .filter((u) => u.length)
          .join('-'))
      : (t = t.trim()),
    t.length === 0)
  )
    return '';
  const l = r.locale === !1 ? (u) => u.toLowerCase() : (u) => u.toLocaleLowerCase(r.locale),
    i = r.locale === !1 ? (u) => u.toUpperCase() : (u) => u.toLocaleUpperCase(r.locale);
  return t.length === 1
    ? Vp.test(t)
      ? ''
      : r.pascalCase
        ? i(t)
        : l(t)
    : (t !== l(t) && (t = d5(t, l, i, r.preserveConsecutiveUppercase)),
      (t = t.replace(f5, '')),
      (t = r.preserveConsecutiveUppercase ? p5(t, l) : l(t)),
      r.pascalCase && (t = i(t.charAt(0)) + t.slice(1)),
      h5(t, i));
}
class g5 extends Map {
  constructor(r = {}) {
    if ((super(), !(r.maxSize && r.maxSize > 0)))
      throw new TypeError('`maxSize` must be a number greater than 0');
    if (typeof r.maxAge == 'number' && r.maxAge === 0)
      throw new TypeError('`maxAge` must be a number greater than 0');
    (this.maxSize = r.maxSize),
      (this.maxAge = r.maxAge || Number.POSITIVE_INFINITY),
      (this.onEviction = r.onEviction),
      (this.cache = new Map()),
      (this.oldCache = new Map()),
      (this._size = 0);
  }
  _emitEvictions(r) {
    if (typeof this.onEviction == 'function') for (const [l, i] of r) this.onEviction(l, i.value);
  }
  _deleteIfExpired(r, l) {
    return typeof l.expiry == 'number' && l.expiry <= Date.now()
      ? (typeof this.onEviction == 'function' && this.onEviction(r, l.value), this.delete(r))
      : !1;
  }
  _getOrDeleteIfExpired(r, l) {
    if (this._deleteIfExpired(r, l) === !1) return l.value;
  }
  _getItemValue(r, l) {
    return l.expiry ? this._getOrDeleteIfExpired(r, l) : l.value;
  }
  _peek(r, l) {
    const i = l.get(r);
    return this._getItemValue(r, i);
  }
  _set(r, l) {
    this.cache.set(r, l),
      this._size++,
      this._size >= this.maxSize &&
        ((this._size = 0),
        this._emitEvictions(this.oldCache),
        (this.oldCache = this.cache),
        (this.cache = new Map()));
  }
  _moveToRecent(r, l) {
    this.oldCache.delete(r), this._set(r, l);
  }
  *_entriesAscending() {
    for (const r of this.oldCache) {
      const [l, i] = r;
      this.cache.has(l) || (this._deleteIfExpired(l, i) === !1 && (yield r));
    }
    for (const r of this.cache) {
      const [l, i] = r;
      this._deleteIfExpired(l, i) === !1 && (yield r);
    }
  }
  get(r) {
    if (this.cache.has(r)) {
      const l = this.cache.get(r);
      return this._getItemValue(r, l);
    }
    if (this.oldCache.has(r)) {
      const l = this.oldCache.get(r);
      if (this._deleteIfExpired(r, l) === !1) return this._moveToRecent(r, l), l.value;
    }
  }
  set(r, l, { maxAge: i = this.maxAge } = {}) {
    const s = typeof i == 'number' && i !== Number.POSITIVE_INFINITY ? Date.now() + i : void 0;
    return (
      this.cache.has(r)
        ? this.cache.set(r, { value: l, expiry: s })
        : this._set(r, { value: l, expiry: s }),
      this
    );
  }
  has(r) {
    return this.cache.has(r)
      ? !this._deleteIfExpired(r, this.cache.get(r))
      : this.oldCache.has(r)
        ? !this._deleteIfExpired(r, this.oldCache.get(r))
        : !1;
  }
  peek(r) {
    if (this.cache.has(r)) return this._peek(r, this.cache);
    if (this.oldCache.has(r)) return this._peek(r, this.oldCache);
  }
  delete(r) {
    const l = this.cache.delete(r);
    return l && this._size--, this.oldCache.delete(r) || l;
  }
  clear() {
    this.cache.clear(), this.oldCache.clear(), (this._size = 0);
  }
  resize(r) {
    if (!(r && r > 0)) throw new TypeError('`maxSize` must be a number greater than 0');
    const l = [...this._entriesAscending()],
      i = l.length - r;
    i < 0
      ? ((this.cache = new Map(l)), (this.oldCache = new Map()), (this._size = l.length))
      : (i > 0 && this._emitEvictions(l.slice(0, i)),
        (this.oldCache = new Map(l.slice(i))),
        (this.cache = new Map()),
        (this._size = 0)),
      (this.maxSize = r);
  }
  *keys() {
    for (const [r] of this) yield r;
  }
  *values() {
    for (const [, r] of this) yield r;
  }
  *[Symbol.iterator]() {
    for (const r of this.cache) {
      const [l, i] = r;
      this._deleteIfExpired(l, i) === !1 && (yield [l, i.value]);
    }
    for (const r of this.oldCache) {
      const [l, i] = r;
      this.cache.has(l) || (this._deleteIfExpired(l, i) === !1 && (yield [l, i.value]));
    }
  }
  *entriesDescending() {
    let r = [...this.cache];
    for (let l = r.length - 1; l >= 0; --l) {
      const i = r[l],
        [s, u] = i;
      this._deleteIfExpired(s, u) === !1 && (yield [s, u.value]);
    }
    r = [...this.oldCache];
    for (let l = r.length - 1; l >= 0; --l) {
      const i = r[l],
        [s, u] = i;
      this.cache.has(s) || (this._deleteIfExpired(s, u) === !1 && (yield [s, u.value]));
    }
  }
  *entriesAscending() {
    for (const [r, l] of this._entriesAscending()) yield [r, l.value];
  }
  get size() {
    if (!this._size) return this.oldCache.size;
    let r = 0;
    for (const l of this.oldCache.keys()) this.cache.has(l) || r++;
    return Math.min(this._size + r, this.maxSize);
  }
  entries() {
    return this.entriesAscending();
  }
  forEach(r, l = this) {
    for (const [i, s] of this.entriesAscending()) r.call(l, s, i, this);
  }
  get [Symbol.toStringTag]() {
    return JSON.stringify([...this.entriesAscending()]);
  }
}
const y5 = (t, r) =>
    t.some((l) => (typeof l == 'string' ? l === r : ((l.lastIndex = 0), l.test(r)))),
  zd = new g5({ maxSize: 1e5 }),
  uv = (t) =>
    typeof t == 'object' &&
    t !== null &&
    !(t instanceof RegExp) &&
    !(t instanceof Error) &&
    !(t instanceof Date),
  cv = (t, r = {}) => {
    if (!uv(t)) return t;
    const {
        exclude: l,
        pascalCase: i = !1,
        stopPaths: s,
        deep: u = !1,
        preserveConsecutiveUppercase: f = !1,
      } = r,
      p = new Set(s),
      m = (h) => (y, v) => {
        if (u && uv(v)) {
          const b = h === void 0 ? y : `${h}.${y}`;
          p.has(b) || (v = lv(v, m(b)));
        }
        if (!(l && y5(l, y))) {
          const b = i ? `${y}_` : y;
          if (zd.has(b)) y = zd.get(b);
          else {
            const w = m5(y, { pascalCase: i, locale: !1, preserveConsecutiveUppercase: f });
            y.length < 100 && zd.set(b, w), (y = w);
          }
        }
        return [y, v];
      };
    return lv(t, m(void 0));
  };
function v5(t, r) {
  return Array.isArray(t) ? Object.keys(t).map((l) => cv(t[l], r)) : cv(t, r);
}
const To = yt.create({
  baseURL: o5.API_URL,
  timeout: 1e4,
  headers: { 'Content-Type': 'application/json' },
});
To.interceptors.response.use(
  (t) => (t.data && typeof t.data == 'object' && (t.data = v5(t.data, { deep: !0 })), t),
  (t) => Promise.reject(t),
);
const b5 = async () => (console.log('getPostList'), (await To.get('/posts')).data),
  S5 = async (t) => {
    const l = (await To.get(`/users/${t}`)).data,
      i = { id: l.id, name: l.name, username: l.username, email: l.email };
    return console.log('getUser', i), i;
  };
function la(t) {
  if (typeof t != 'object' || t === null) return !1;
  const r = Object.getPrototypeOf(t);
  return (
    (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) &&
    !(Symbol.toStringTag in t) &&
    !(Symbol.iterator in t)
  );
}
function Wb(t) {
  if (C.isValidElement(t) || !la(t)) return t;
  const r = {};
  return (
    Object.keys(t).forEach((l) => {
      r[l] = Wb(t[l]);
    }),
    r
  );
}
function Cr(t, r, l = { clone: !0 }) {
  const i = l.clone ? fe({}, t) : t;
  return (
    la(t) &&
      la(r) &&
      Object.keys(r).forEach((s) => {
        C.isValidElement(r[s])
          ? (i[s] = r[s])
          : la(r[s]) && Object.prototype.hasOwnProperty.call(t, s) && la(t[s])
            ? (i[s] = Cr(t[s], r[s], l))
            : l.clone
              ? (i[s] = la(r[s]) ? Wb(r[s]) : r[s])
              : (i[s] = r[s]);
      }),
    i
  );
}
function op(t) {
  let r = 'https://mui.com/production-error/?code=' + t;
  for (let l = 1; l < arguments.length; l += 1) r += '&args[]=' + encodeURIComponent(arguments[l]);
  return 'Minified MUI error #' + t + '; visit ' + r + ' for the full message.';
}
function bu(t) {
  if (typeof t != 'string') throw new Error(op(7));
  return t.charAt(0).toUpperCase() + t.slice(1);
}
function x5(t, r) {
  var l, i;
  return (
    C.isValidElement(t) &&
    r.indexOf(
      (l = t.type.muiName) != null
        ? l
        : (i = t.type) == null || (i = i._payload) == null || (i = i.value) == null
          ? void 0
          : i.muiName,
    ) !== -1
  );
}
function E5(t, r) {
  typeof t == 'function' ? t(r) : t && (t.current = r);
}
function C5(...t) {
  return C.useMemo(
    () =>
      t.every((r) => r == null)
        ? null
        : (r) => {
            t.forEach((l) => {
              E5(l, r);
            });
          },
    t,
  );
}
function Ib(t, r) {
  const l = fe({}, r);
  return (
    Object.keys(t).forEach((i) => {
      if (i.toString().match(/^(components|slots)$/)) l[i] = fe({}, t[i], l[i]);
      else if (i.toString().match(/^(componentsProps|slotProps)$/)) {
        const s = t[i] || {},
          u = r[i];
        (l[i] = {}),
          !u || !Object.keys(u)
            ? (l[i] = s)
            : !s || !Object.keys(s)
              ? (l[i] = u)
              : ((l[i] = fe({}, u)),
                Object.keys(s).forEach((f) => {
                  l[i][f] = Ib(s[f], u[f]);
                }));
      } else l[i] === void 0 && (l[i] = t[i]);
    }),
    l
  );
}
function R5(t, r, l = void 0) {
  const i = {};
  return (
    Object.keys(t).forEach((s) => {
      i[s] = t[s]
        .reduce((u, f) => {
          if (f) {
            const p = r(f);
            p !== '' && u.push(p), l && l[f] && u.push(l[f]);
          }
          return u;
        }, [])
        .join(' ');
    }),
    i
  );
}
const fv = (t) => t,
  T5 = () => {
    let t = fv;
    return {
      configure(r) {
        t = r;
      },
      generate(r) {
        return t(r);
      },
      reset() {
        t = fv;
      },
    };
  },
  w5 = T5(),
  A5 = {
    active: 'active',
    checked: 'checked',
    completed: 'completed',
    disabled: 'disabled',
    error: 'error',
    expanded: 'expanded',
    focused: 'focused',
    focusVisible: 'focusVisible',
    open: 'open',
    readOnly: 'readOnly',
    required: 'required',
    selected: 'selected',
  };
function Zb(t, r, l = 'Mui') {
  const i = A5[r];
  return i ? `${l}-${i}` : `${w5.generate(t)}-${r}`;
}
function O5(t, r, l = 'Mui') {
  const i = {};
  return (
    r.forEach((s) => {
      i[s] = Zb(t, s, l);
    }),
    i
  );
}
function M5(t) {
  return typeof t == 'string';
}
function $5(t, r, l) {
  return t === void 0 || M5(t) ? r : fe({}, r, { ownerState: fe({}, r.ownerState, l) });
}
function z5(t, r = []) {
  if (t === void 0) return {};
  const l = {};
  return (
    Object.keys(t)
      .filter((i) => i.match(/^on[A-Z]/) && typeof t[i] == 'function' && !r.includes(i))
      .forEach((i) => {
        l[i] = t[i];
      }),
    l
  );
}
function dv(t) {
  if (t === void 0) return {};
  const r = {};
  return (
    Object.keys(t)
      .filter((l) => !(l.match(/^on[A-Z]/) && typeof t[l] == 'function'))
      .forEach((l) => {
        r[l] = t[l];
      }),
    r
  );
}
function D5(t) {
  const {
    getSlotProps: r,
    additionalProps: l,
    externalSlotProps: i,
    externalForwardedProps: s,
    className: u,
  } = t;
  if (!r) {
    const w = Oe(
        l == null ? void 0 : l.className,
        u,
        s == null ? void 0 : s.className,
        i == null ? void 0 : i.className,
      ),
      S = fe(
        {},
        l == null ? void 0 : l.style,
        s == null ? void 0 : s.style,
        i == null ? void 0 : i.style,
      ),
      A = fe({}, l, s, i);
    return (
      w.length > 0 && (A.className = w),
      Object.keys(S).length > 0 && (A.style = S),
      { props: A, internalRef: void 0 }
    );
  }
  const f = z5(fe({}, s, i)),
    p = dv(i),
    m = dv(s),
    h = r(f),
    y = Oe(
      h == null ? void 0 : h.className,
      l == null ? void 0 : l.className,
      u,
      s == null ? void 0 : s.className,
      i == null ? void 0 : i.className,
    ),
    v = fe(
      {},
      h == null ? void 0 : h.style,
      l == null ? void 0 : l.style,
      s == null ? void 0 : s.style,
      i == null ? void 0 : i.style,
    ),
    b = fe({}, h, l, m, p);
  return (
    y.length > 0 && (b.className = y),
    Object.keys(v).length > 0 && (b.style = v),
    { props: b, internalRef: h.ref }
  );
}
function _5(t, r, l) {
  return typeof t == 'function' ? t(r, l) : t;
}
function B5(t, r) {
  return uu(t, r);
}
const N5 = (t, r) => {
    Array.isArray(t.__emotion_styles) && (t.__emotion_styles = r(t.__emotion_styles));
  },
  k5 = ['values', 'unit', 'step'],
  U5 = (t) => {
    const r = Object.keys(t).map((l) => ({ key: l, val: t[l] })) || [];
    return r.sort((l, i) => l.val - i.val), r.reduce((l, i) => fe({}, l, { [i.key]: i.val }), {});
  };
function Jb(t) {
  const {
      values: r = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: l = 'px',
      step: i = 5,
    } = t,
    s = Lt(t, k5),
    u = U5(r),
    f = Object.keys(u);
  function p(b) {
    return `@media (min-width:${typeof r[b] == 'number' ? r[b] : b}${l})`;
  }
  function m(b) {
    return `@media (max-width:${(typeof r[b] == 'number' ? r[b] : b) - i / 100}${l})`;
  }
  function h(b, w) {
    const S = f.indexOf(w);
    return `@media (min-width:${typeof r[b] == 'number' ? r[b] : b}${l}) and (max-width:${(S !== -1 && typeof r[f[S]] == 'number' ? r[f[S]] : w) - i / 100}${l})`;
  }
  function y(b) {
    return f.indexOf(b) + 1 < f.length ? h(b, f[f.indexOf(b) + 1]) : p(b);
  }
  function v(b) {
    const w = f.indexOf(b);
    return w === 0
      ? p(f[1])
      : w === f.length - 1
        ? m(f[w])
        : h(b, f[f.indexOf(b) + 1]).replace('@media', '@media not all and');
  }
  return fe({ keys: f, values: u, up: p, down: m, between: h, only: y, not: v, unit: l }, s);
}
const j5 = { borderRadius: 4 };
function lo(t, r) {
  return r ? Cr(t, r, { clone: !1 }) : t;
}
const Yp = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  pv = { keys: ['xs', 'sm', 'md', 'lg', 'xl'], up: (t) => `@media (min-width:${Yp[t]}px)` };
function Or(t, r, l) {
  const i = t.theme || {};
  if (Array.isArray(r)) {
    const u = i.breakpoints || pv;
    return r.reduce((f, p, m) => ((f[u.up(u.keys[m])] = l(r[m])), f), {});
  }
  if (typeof r == 'object') {
    const u = i.breakpoints || pv;
    return Object.keys(r).reduce((f, p) => {
      if (Object.keys(u.values || Yp).indexOf(p) !== -1) {
        const m = u.up(p);
        f[m] = l(r[p], p);
      } else {
        const m = p;
        f[m] = r[m];
      }
      return f;
    }, {});
  }
  return l(r);
}
function L5(t = {}) {
  var r;
  return (
    ((r = t.keys) == null
      ? void 0
      : r.reduce((i, s) => {
          const u = t.up(s);
          return (i[u] = {}), i;
        }, {})) || {}
  );
}
function H5(t, r) {
  return t.reduce((l, i) => {
    const s = l[i];
    return (!s || Object.keys(s).length === 0) && delete l[i], l;
  }, r);
}
function Xu(t, r, l = !0) {
  if (!r || typeof r != 'string') return null;
  if (t && t.vars && l) {
    const i = `vars.${r}`.split('.').reduce((s, u) => (s && s[u] ? s[u] : null), t);
    if (i != null) return i;
  }
  return r.split('.').reduce((i, s) => (i && i[s] != null ? i[s] : null), t);
}
function Su(t, r, l, i = l) {
  let s;
  return (
    typeof t == 'function' ? (s = t(l)) : Array.isArray(t) ? (s = t[l] || i) : (s = Xu(t, l) || i),
    r && (s = r(s, i, t)),
    s
  );
}
function St(t) {
  const { prop: r, cssProperty: l = t.prop, themeKey: i, transform: s } = t,
    u = (f) => {
      if (f[r] == null) return null;
      const p = f[r],
        m = f.theme,
        h = Xu(m, i) || {};
      return Or(f, p, (v) => {
        let b = Su(h, s, v);
        return (
          v === b &&
            typeof v == 'string' &&
            (b = Su(h, s, `${r}${v === 'default' ? '' : bu(v)}`, v)),
          l === !1 ? b : { [l]: b }
        );
      });
    };
  return (u.propTypes = {}), (u.filterProps = [r]), u;
}
function P5(t) {
  const r = {};
  return (l) => (r[l] === void 0 && (r[l] = t(l)), r[l]);
}
const q5 = { m: 'margin', p: 'padding' },
  F5 = { t: 'Top', r: 'Right', b: 'Bottom', l: 'Left', x: ['Left', 'Right'], y: ['Top', 'Bottom'] },
  hv = { marginX: 'mx', marginY: 'my', paddingX: 'px', paddingY: 'py' },
  G5 = P5((t) => {
    if (t.length > 2)
      if (hv[t]) t = hv[t];
      else return [t];
    const [r, l] = t.split(''),
      i = q5[r],
      s = F5[l] || '';
    return Array.isArray(s) ? s.map((u) => i + u) : [i + s];
  }),
  Kp = [
    'm',
    'mt',
    'mr',
    'mb',
    'ml',
    'mx',
    'my',
    'margin',
    'marginTop',
    'marginRight',
    'marginBottom',
    'marginLeft',
    'marginX',
    'marginY',
    'marginInline',
    'marginInlineStart',
    'marginInlineEnd',
    'marginBlock',
    'marginBlockStart',
    'marginBlockEnd',
  ],
  Xp = [
    'p',
    'pt',
    'pr',
    'pb',
    'pl',
    'px',
    'py',
    'padding',
    'paddingTop',
    'paddingRight',
    'paddingBottom',
    'paddingLeft',
    'paddingX',
    'paddingY',
    'paddingInline',
    'paddingInlineStart',
    'paddingInlineEnd',
    'paddingBlock',
    'paddingBlockStart',
    'paddingBlockEnd',
  ];
[...Kp, ...Xp];
function wo(t, r, l, i) {
  var s;
  const u = (s = Xu(t, r, !1)) != null ? s : l;
  return typeof u == 'number'
    ? (f) => (typeof f == 'string' ? f : u * f)
    : Array.isArray(u)
      ? (f) => (typeof f == 'string' ? f : u[f])
      : typeof u == 'function'
        ? u
        : () => {};
}
function e1(t) {
  return wo(t, 'spacing', 8);
}
function Ao(t, r) {
  if (typeof r == 'string' || r == null) return r;
  const l = Math.abs(r),
    i = t(l);
  return r >= 0 ? i : typeof i == 'number' ? -i : `-${i}`;
}
function V5(t, r) {
  return (l) => t.reduce((i, s) => ((i[s] = Ao(r, l)), i), {});
}
function Y5(t, r, l, i) {
  if (r.indexOf(l) === -1) return null;
  const s = G5(l),
    u = V5(s, i),
    f = t[l];
  return Or(t, f, u);
}
function t1(t, r) {
  const l = e1(t.theme);
  return Object.keys(t)
    .map((i) => Y5(t, r, i, l))
    .reduce(lo, {});
}
function mt(t) {
  return t1(t, Kp);
}
mt.propTypes = {};
mt.filterProps = Kp;
function gt(t) {
  return t1(t, Xp);
}
gt.propTypes = {};
gt.filterProps = Xp;
function n1(t = 8) {
  if (t.mui) return t;
  const r = e1({ spacing: t }),
    l = (...i) =>
      (i.length === 0 ? [1] : i)
        .map((u) => {
          const f = r(u);
          return typeof f == 'number' ? `${f}px` : f;
        })
        .join(' ');
  return (l.mui = !0), l;
}
function Qu(...t) {
  const r = t.reduce(
      (i, s) => (
        s.filterProps.forEach((u) => {
          i[u] = s;
        }),
        i
      ),
      {},
    ),
    l = (i) => Object.keys(i).reduce((s, u) => (r[u] ? lo(s, r[u](i)) : s), {});
  return (l.propTypes = {}), (l.filterProps = t.reduce((i, s) => i.concat(s.filterProps), [])), l;
}
function An(t) {
  return typeof t != 'number' ? t : `${t}px solid`;
}
function Mn(t, r) {
  return St({ prop: t, themeKey: 'borders', transform: r });
}
const K5 = Mn('border', An),
  X5 = Mn('borderTop', An),
  Q5 = Mn('borderRight', An),
  W5 = Mn('borderBottom', An),
  I5 = Mn('borderLeft', An),
  Z5 = Mn('borderColor'),
  J5 = Mn('borderTopColor'),
  e4 = Mn('borderRightColor'),
  t4 = Mn('borderBottomColor'),
  n4 = Mn('borderLeftColor'),
  r4 = Mn('outline', An),
  a4 = Mn('outlineColor'),
  Wu = (t) => {
    if (t.borderRadius !== void 0 && t.borderRadius !== null) {
      const r = wo(t.theme, 'shape.borderRadius', 4),
        l = (i) => ({ borderRadius: Ao(r, i) });
      return Or(t, t.borderRadius, l);
    }
    return null;
  };
Wu.propTypes = {};
Wu.filterProps = ['borderRadius'];
Qu(K5, X5, Q5, W5, I5, Z5, J5, e4, t4, n4, Wu, r4, a4);
const Iu = (t) => {
  if (t.gap !== void 0 && t.gap !== null) {
    const r = wo(t.theme, 'spacing', 8),
      l = (i) => ({ gap: Ao(r, i) });
    return Or(t, t.gap, l);
  }
  return null;
};
Iu.propTypes = {};
Iu.filterProps = ['gap'];
const Zu = (t) => {
  if (t.columnGap !== void 0 && t.columnGap !== null) {
    const r = wo(t.theme, 'spacing', 8),
      l = (i) => ({ columnGap: Ao(r, i) });
    return Or(t, t.columnGap, l);
  }
  return null;
};
Zu.propTypes = {};
Zu.filterProps = ['columnGap'];
const Ju = (t) => {
  if (t.rowGap !== void 0 && t.rowGap !== null) {
    const r = wo(t.theme, 'spacing', 8),
      l = (i) => ({ rowGap: Ao(r, i) });
    return Or(t, t.rowGap, l);
  }
  return null;
};
Ju.propTypes = {};
Ju.filterProps = ['rowGap'];
const l4 = St({ prop: 'gridColumn' }),
  i4 = St({ prop: 'gridRow' }),
  o4 = St({ prop: 'gridAutoFlow' }),
  s4 = St({ prop: 'gridAutoColumns' }),
  u4 = St({ prop: 'gridAutoRows' }),
  c4 = St({ prop: 'gridTemplateColumns' }),
  f4 = St({ prop: 'gridTemplateRows' }),
  d4 = St({ prop: 'gridTemplateAreas' }),
  p4 = St({ prop: 'gridArea' });
Qu(Iu, Zu, Ju, l4, i4, o4, s4, u4, c4, f4, d4, p4);
function Bl(t, r) {
  return r === 'grey' ? r : t;
}
const h4 = St({ prop: 'color', themeKey: 'palette', transform: Bl }),
  m4 = St({ prop: 'bgcolor', cssProperty: 'backgroundColor', themeKey: 'palette', transform: Bl }),
  g4 = St({ prop: 'backgroundColor', themeKey: 'palette', transform: Bl });
Qu(h4, m4, g4);
function cn(t) {
  return t <= 1 && t !== 0 ? `${t * 100}%` : t;
}
const y4 = St({ prop: 'width', transform: cn }),
  Qp = (t) => {
    if (t.maxWidth !== void 0 && t.maxWidth !== null) {
      const r = (l) => {
        var i, s;
        const u =
          ((i = t.theme) == null || (i = i.breakpoints) == null || (i = i.values) == null
            ? void 0
            : i[l]) || Yp[l];
        return u
          ? ((s = t.theme) == null || (s = s.breakpoints) == null ? void 0 : s.unit) !== 'px'
            ? { maxWidth: `${u}${t.theme.breakpoints.unit}` }
            : { maxWidth: u }
          : { maxWidth: cn(l) };
      };
      return Or(t, t.maxWidth, r);
    }
    return null;
  };
Qp.filterProps = ['maxWidth'];
const v4 = St({ prop: 'minWidth', transform: cn }),
  b4 = St({ prop: 'height', transform: cn }),
  S4 = St({ prop: 'maxHeight', transform: cn }),
  x4 = St({ prop: 'minHeight', transform: cn });
St({ prop: 'size', cssProperty: 'width', transform: cn });
St({ prop: 'size', cssProperty: 'height', transform: cn });
const E4 = St({ prop: 'boxSizing' });
Qu(y4, Qp, v4, b4, S4, x4, E4);
const ec = {
  border: { themeKey: 'borders', transform: An },
  borderTop: { themeKey: 'borders', transform: An },
  borderRight: { themeKey: 'borders', transform: An },
  borderBottom: { themeKey: 'borders', transform: An },
  borderLeft: { themeKey: 'borders', transform: An },
  borderColor: { themeKey: 'palette' },
  borderTopColor: { themeKey: 'palette' },
  borderRightColor: { themeKey: 'palette' },
  borderBottomColor: { themeKey: 'palette' },
  borderLeftColor: { themeKey: 'palette' },
  outline: { themeKey: 'borders', transform: An },
  outlineColor: { themeKey: 'palette' },
  borderRadius: { themeKey: 'shape.borderRadius', style: Wu },
  color: { themeKey: 'palette', transform: Bl },
  bgcolor: { themeKey: 'palette', cssProperty: 'backgroundColor', transform: Bl },
  backgroundColor: { themeKey: 'palette', transform: Bl },
  p: { style: gt },
  pt: { style: gt },
  pr: { style: gt },
  pb: { style: gt },
  pl: { style: gt },
  px: { style: gt },
  py: { style: gt },
  padding: { style: gt },
  paddingTop: { style: gt },
  paddingRight: { style: gt },
  paddingBottom: { style: gt },
  paddingLeft: { style: gt },
  paddingX: { style: gt },
  paddingY: { style: gt },
  paddingInline: { style: gt },
  paddingInlineStart: { style: gt },
  paddingInlineEnd: { style: gt },
  paddingBlock: { style: gt },
  paddingBlockStart: { style: gt },
  paddingBlockEnd: { style: gt },
  m: { style: mt },
  mt: { style: mt },
  mr: { style: mt },
  mb: { style: mt },
  ml: { style: mt },
  mx: { style: mt },
  my: { style: mt },
  margin: { style: mt },
  marginTop: { style: mt },
  marginRight: { style: mt },
  marginBottom: { style: mt },
  marginLeft: { style: mt },
  marginX: { style: mt },
  marginY: { style: mt },
  marginInline: { style: mt },
  marginInlineStart: { style: mt },
  marginInlineEnd: { style: mt },
  marginBlock: { style: mt },
  marginBlockStart: { style: mt },
  marginBlockEnd: { style: mt },
  displayPrint: { cssProperty: !1, transform: (t) => ({ '@media print': { display: t } }) },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  gap: { style: Iu },
  rowGap: { style: Ju },
  columnGap: { style: Zu },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  position: {},
  zIndex: { themeKey: 'zIndex' },
  top: {},
  right: {},
  bottom: {},
  left: {},
  boxShadow: { themeKey: 'shadows' },
  width: { transform: cn },
  maxWidth: { style: Qp },
  minWidth: { transform: cn },
  height: { transform: cn },
  maxHeight: { transform: cn },
  minHeight: { transform: cn },
  boxSizing: {},
  fontFamily: { themeKey: 'typography' },
  fontSize: { themeKey: 'typography' },
  fontStyle: { themeKey: 'typography' },
  fontWeight: { themeKey: 'typography' },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: { cssProperty: !1, themeKey: 'typography' },
};
function C4(...t) {
  const r = t.reduce((i, s) => i.concat(Object.keys(s)), []),
    l = new Set(r);
  return t.every((i) => l.size === Object.keys(i).length);
}
function R4(t, r) {
  return typeof t == 'function' ? t(r) : t;
}
function T4() {
  function t(l, i, s, u) {
    const f = { [l]: i, theme: s },
      p = u[l];
    if (!p) return { [l]: i };
    const { cssProperty: m = l, themeKey: h, transform: y, style: v } = p;
    if (i == null) return null;
    if (h === 'typography' && i === 'inherit') return { [l]: i };
    const b = Xu(s, h) || {};
    return v
      ? v(f)
      : Or(f, i, (S) => {
          let A = Su(b, y, S);
          return (
            S === A &&
              typeof S == 'string' &&
              (A = Su(b, y, `${l}${S === 'default' ? '' : bu(S)}`, S)),
            m === !1 ? A : { [m]: A }
          );
        });
  }
  function r(l) {
    var i;
    const { sx: s, theme: u = {} } = l || {};
    if (!s) return null;
    const f = (i = u.unstable_sxConfig) != null ? i : ec;
    function p(m) {
      let h = m;
      if (typeof m == 'function') h = m(u);
      else if (typeof m != 'object') return m;
      if (!h) return null;
      const y = L5(u.breakpoints),
        v = Object.keys(y);
      let b = y;
      return (
        Object.keys(h).forEach((w) => {
          const S = R4(h[w], u);
          if (S != null)
            if (typeof S == 'object')
              if (f[w]) b = lo(b, t(w, S, u, f));
              else {
                const A = Or({ theme: u }, S, (O) => ({ [w]: O }));
                C4(A, S) ? (b[w] = r({ sx: S, theme: u })) : (b = lo(b, A));
              }
            else b = lo(b, t(w, S, u, f));
        }),
        H5(v, b)
      );
    }
    return Array.isArray(s) ? s.map(p) : p(s);
  }
  return r;
}
const tc = T4();
tc.filterProps = ['sx'];
function r1(t, r) {
  const l = this;
  return l.vars && typeof l.getColorSchemeSelector == 'function'
    ? { [l.getColorSchemeSelector(t).replace(/(\[[^\]]+\])/, '*:where($1)')]: r }
    : l.palette.mode === t
      ? r
      : {};
}
const w4 = ['breakpoints', 'palette', 'spacing', 'shape'];
function a1(t = {}, ...r) {
  const { breakpoints: l = {}, palette: i = {}, spacing: s, shape: u = {} } = t,
    f = Lt(t, w4),
    p = Jb(l),
    m = n1(s);
  let h = Cr(
    {
      breakpoints: p,
      direction: 'ltr',
      components: {},
      palette: fe({ mode: 'light' }, i),
      spacing: m,
      shape: fe({}, j5, u),
    },
    f,
  );
  return (
    (h.applyStyles = r1),
    (h = r.reduce((y, v) => Cr(y, v), h)),
    (h.unstable_sxConfig = fe({}, ec, f == null ? void 0 : f.unstable_sxConfig)),
    (h.unstable_sx = function (v) {
      return tc({ sx: v, theme: this });
    }),
    h
  );
}
function A4(t) {
  return Object.keys(t).length === 0;
}
function O4(t = null) {
  const r = C.useContext(yo);
  return !r || A4(r) ? t : r;
}
const M4 = a1();
function $4(t = M4) {
  return O4(t);
}
const z4 = ['sx'],
  D4 = (t) => {
    var r, l;
    const i = { systemProps: {}, otherProps: {} },
      s = (r = t == null || (l = t.theme) == null ? void 0 : l.unstable_sxConfig) != null ? r : ec;
    return (
      Object.keys(t).forEach((u) => {
        s[u] ? (i.systemProps[u] = t[u]) : (i.otherProps[u] = t[u]);
      }),
      i
    );
  };
function _4(t) {
  const { sx: r } = t,
    l = Lt(t, z4),
    { systemProps: i, otherProps: s } = D4(l);
  let u;
  return (
    Array.isArray(r)
      ? (u = [i, ...r])
      : typeof r == 'function'
        ? (u = (...f) => {
            const p = r(...f);
            return la(p) ? fe({}, i, p) : i;
          })
        : (u = fe({}, i, r)),
    fe({}, s, { sx: u })
  );
}
const B4 = ['ownerState'],
  N4 = ['variants'],
  k4 = ['name', 'slot', 'skipVariantsResolver', 'skipSx', 'overridesResolver'];
function U4(t) {
  return Object.keys(t).length === 0;
}
function j4(t) {
  return typeof t == 'string' && t.charCodeAt(0) > 96;
}
function Dd(t) {
  return t !== 'ownerState' && t !== 'theme' && t !== 'sx' && t !== 'as';
}
const L4 = a1(),
  H4 = (t) => t && t.charAt(0).toLowerCase() + t.slice(1);
function Qs({ defaultTheme: t, theme: r, themeId: l }) {
  return U4(r) ? t : r[l] || r;
}
function P4(t) {
  return t ? (r, l) => l[t] : null;
}
function lu(t, r) {
  let { ownerState: l } = r,
    i = Lt(r, B4);
  const s = typeof t == 'function' ? t(fe({ ownerState: l }, i)) : t;
  if (Array.isArray(s)) return s.flatMap((u) => lu(u, fe({ ownerState: l }, i)));
  if (s && typeof s == 'object' && Array.isArray(s.variants)) {
    const { variants: u = [] } = s;
    let p = Lt(s, N4);
    return (
      u.forEach((m) => {
        let h = !0;
        typeof m.props == 'function'
          ? (h = m.props(fe({ ownerState: l }, i, l)))
          : Object.keys(m.props).forEach((y) => {
              (l == null ? void 0 : l[y]) !== m.props[y] && i[y] !== m.props[y] && (h = !1);
            }),
          h &&
            (Array.isArray(p) || (p = [p]),
            p.push(typeof m.style == 'function' ? m.style(fe({ ownerState: l }, i, l)) : m.style));
      }),
      p
    );
  }
  return s;
}
function q4(t = {}) {
  const {
      themeId: r,
      defaultTheme: l = L4,
      rootShouldForwardProp: i = Dd,
      slotShouldForwardProp: s = Dd,
    } = t,
    u = (f) => tc(fe({}, f, { theme: Qs(fe({}, f, { defaultTheme: l, themeId: r })) }));
  return (
    (u.__mui_systemSx = !0),
    (f, p = {}) => {
      N5(f, (R) => R.filter((U) => !(U != null && U.__mui_systemSx)));
      const {
          name: m,
          slot: h,
          skipVariantsResolver: y,
          skipSx: v,
          overridesResolver: b = P4(H4(h)),
        } = p,
        w = Lt(p, k4),
        S = y !== void 0 ? y : (h && h !== 'Root' && h !== 'root') || !1,
        A = v || !1;
      let O,
        M = Dd;
      h === 'Root' || h === 'root' ? (M = i) : h ? (M = s) : j4(f) && (M = void 0);
      const z = B5(f, fe({ shouldForwardProp: M, label: O }, w)),
        E = (R) =>
          (typeof R == 'function' && R.__emotion_real !== R) || la(R)
            ? (U) =>
                lu(R, fe({}, U, { theme: Qs({ theme: U.theme, defaultTheme: l, themeId: r }) }))
            : R,
        D = (R, ...U) => {
          let q = E(R);
          const V = U ? U.map(E) : [];
          m &&
            b &&
            V.push((P) => {
              const I = Qs(fe({}, P, { defaultTheme: l, themeId: r }));
              if (!I.components || !I.components[m] || !I.components[m].styleOverrides) return null;
              const ee = I.components[m].styleOverrides,
                ne = {};
              return (
                Object.entries(ee).forEach(([Z, j]) => {
                  ne[Z] = lu(j, fe({}, P, { theme: I }));
                }),
                b(P, ne)
              );
            }),
            m &&
              !S &&
              V.push((P) => {
                var I;
                const ee = Qs(fe({}, P, { defaultTheme: l, themeId: r })),
                  ne =
                    ee == null || (I = ee.components) == null || (I = I[m]) == null
                      ? void 0
                      : I.variants;
                return lu({ variants: ne }, fe({}, P, { theme: ee }));
              }),
            A || V.push(u);
          const G = V.length - U.length;
          if (Array.isArray(R) && G > 0) {
            const P = new Array(G).fill('');
            (q = [...R, ...P]), (q.raw = [...R.raw, ...P]);
          }
          const x = z(q, ...V);
          return f.muiName && (x.muiName = f.muiName), x;
        };
      return z.withConfig && (D.withConfig = z.withConfig), D;
    }
  );
}
function F4(t) {
  const { theme: r, name: l, props: i } = t;
  return !r || !r.components || !r.components[l] || !r.components[l].defaultProps
    ? i
    : Ib(r.components[l].defaultProps, i);
}
function G4({ props: t, name: r, defaultTheme: l, themeId: i }) {
  let s = $4(l);
  return i && (s = s[i] || s), F4({ theme: s, name: r, props: t });
}
function V4(t) {
  t = t.slice(1);
  const r = new RegExp(`.{1,${t.length >= 6 ? 2 : 1}}`, 'g');
  let l = t.match(r);
  return (
    l && l[0].length === 1 && (l = l.map((i) => i + i)),
    l
      ? `rgb${l.length === 4 ? 'a' : ''}(${l.map((i, s) => (s < 3 ? parseInt(i, 16) : Math.round((parseInt(i, 16) / 255) * 1e3) / 1e3)).join(', ')})`
      : ''
  );
}
function l1(t) {
  if (t.type) return t;
  if (t.charAt(0) === '#') return l1(V4(t));
  const r = t.indexOf('('),
    l = t.substring(0, r);
  if (['rgb', 'rgba', 'hsl', 'hsla', 'color'].indexOf(l) === -1) throw new Error(op(9, t));
  let i = t.substring(r + 1, t.length - 1),
    s;
  if (l === 'color') {
    if (
      ((i = i.split(' ')),
      (s = i.shift()),
      i.length === 4 && i[3].charAt(0) === '/' && (i[3] = i[3].slice(1)),
      ['srgb', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec-2020'].indexOf(s) === -1)
    )
      throw new Error(op(10, s));
  } else i = i.split(',');
  return (i = i.map((u) => parseFloat(u))), { type: l, values: i, colorSpace: s };
}
const za = (t) => {
  const r = l1(t);
  return r.values
    .slice(0, 3)
    .map((l, i) => (r.type.indexOf('hsl') !== -1 && i !== 0 ? `${l}%` : l))
    .join(' ');
};
function Y4(t = '') {
  function r(...i) {
    if (!i.length) return '';
    const s = i[0];
    return typeof s == 'string' &&
      !s.match(
        /(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/,
      )
      ? `, var(--${t ? `${t}-` : ''}${s}${r(...i.slice(1))})`
      : `, ${s}`;
  }
  return (i, ...s) => `var(--${t ? `${t}-` : ''}${i}${r(...s)})`;
}
const mv = (t, r, l, i = []) => {
    let s = t;
    r.forEach((u, f) => {
      f === r.length - 1
        ? Array.isArray(s)
          ? (s[Number(u)] = l)
          : s && typeof s == 'object' && (s[u] = l)
        : s && typeof s == 'object' && (s[u] || (s[u] = i.includes(u) ? [] : {}), (s = s[u]));
    });
  },
  K4 = (t, r, l) => {
    function i(s, u = [], f = []) {
      Object.entries(s).forEach(([p, m]) => {
        (!l || !l([...u, p])) &&
          m != null &&
          (typeof m == 'object' && Object.keys(m).length > 0
            ? i(m, [...u, p], Array.isArray(m) ? [...f, p] : f)
            : r([...u, p], m, f));
      });
    }
    i(t);
  },
  X4 = (t, r) =>
    typeof r == 'number'
      ? ['lineHeight', 'fontWeight', 'opacity', 'zIndex'].some((i) => t.includes(i)) ||
        t[t.length - 1].toLowerCase().indexOf('opacity') >= 0
        ? r
        : `${r}px`
      : r;
function _d(t, r) {
  const { prefix: l, shouldSkipGeneratingVar: i } = r,
    s = {},
    u = {},
    f = {};
  return (
    K4(
      t,
      (p, m, h) => {
        if ((typeof m == 'string' || typeof m == 'number') && (!i || !i(p, m))) {
          const y = `--${l ? `${l}-` : ''}${p.join('-')}`;
          Object.assign(s, { [y]: X4(p, m) }),
            mv(u, p, `var(${y})`, h),
            mv(f, p, `var(${y}, ${m})`, h);
        }
      },
      (p) => p[0] === 'vars',
    ),
    { css: s, vars: u, varsWithDefaults: f }
  );
}
function po(t) {
  '@babel/helpers - typeof';
  return (
    (po =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (r) {
            return typeof r;
          }
        : function (r) {
            return r &&
              typeof Symbol == 'function' &&
              r.constructor === Symbol &&
              r !== Symbol.prototype
              ? 'symbol'
              : typeof r;
          }),
    po(t)
  );
}
function Q4(t, r) {
  if (po(t) != 'object' || !t) return t;
  var l = t[Symbol.toPrimitive];
  if (l !== void 0) {
    var i = l.call(t, r);
    if (po(i) != 'object') return i;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return String(t);
}
function W4(t) {
  var r = Q4(t, 'string');
  return po(r) == 'symbol' ? r : r + '';
}
const I4 = ['colorSchemes', 'components', 'defaultColorScheme'];
function Z4(t, r) {
  const { colorSchemes: l = {}, defaultColorScheme: i = 'light' } = t,
    s = Lt(t, I4),
    { vars: u, css: f, varsWithDefaults: p } = _d(s, r);
  let m = p;
  const h = {},
    { [i]: y } = l,
    v = Lt(l, [i].map(W4));
  if (
    (Object.entries(v || {}).forEach(([w, S]) => {
      const { vars: A, css: O, varsWithDefaults: M } = _d(S, r);
      (m = Cr(m, M)), (h[w] = { css: O, vars: A });
    }),
    y)
  ) {
    const { css: w, vars: S, varsWithDefaults: A } = _d(y, r);
    (m = Cr(m, A)), (h[i] = { css: w, vars: S });
  }
  return {
    vars: m,
    generateCssVars: (w) => {
      var S;
      if (!w) {
        var A;
        const M = fe({}, f);
        return {
          css: M,
          vars: u,
          selector:
            (r == null || (A = r.getSelector) == null ? void 0 : A.call(r, w, M)) || ':root',
        };
      }
      const O = fe({}, h[w].css);
      return {
        css: O,
        vars: h[w].vars,
        selector: (r == null || (S = r.getSelector) == null ? void 0 : S.call(r, w, O)) || ':root',
      };
    },
  };
}
const J4 = fe({}, ec, {
    borderRadius: { themeKey: 'radius' },
    boxShadow: { themeKey: 'shadow' },
    fontFamily: { themeKey: 'fontFamily' },
    fontSize: { themeKey: 'fontSize' },
    fontWeight: { themeKey: 'fontWeight' },
    letterSpacing: { themeKey: 'letterSpacing' },
    lineHeight: { themeKey: 'lineHeight' },
  }),
  Wi = {
    grey: {
      50: '#FBFCFE',
      100: '#F0F4F8',
      200: '#DDE7EE',
      300: '#CDD7E1',
      400: '#9FA6AD',
      500: '#636B74',
      600: '#555E68',
      700: '#32383E',
      800: '#171A1C',
      900: '#0B0D0E',
    },
    blue: {
      50: '#EDF5FD',
      100: '#E3EFFB',
      200: '#C7DFF7',
      300: '#97C3F0',
      400: '#4393E4',
      500: '#0B6BCB',
      600: '#185EA5',
      700: '#12467B',
      800: '#0A2744',
      900: '#051423',
    },
    yellow: {
      50: '#FEFAF6',
      100: '#FDF0E1',
      200: '#FCE1C2',
      300: '#F3C896',
      400: '#EA9A3E',
      500: '#9A5B13',
      600: '#72430D',
      700: '#492B08',
      800: '#2E1B05',
      900: '#1D1002',
    },
    red: {
      50: '#FEF6F6',
      100: '#FCE4E4',
      200: '#F7C5C5',
      300: '#F09898',
      400: '#E47474',
      500: '#C41C1C',
      600: '#A51818',
      700: '#7D1212',
      800: '#430A0A',
      900: '#240505',
    },
    green: {
      50: '#F6FEF6',
      100: '#E3FBE3',
      200: '#C7F7C7',
      300: '#A1E8A1',
      400: '#51BC51',
      500: '#1F7A1F',
      600: '#136C13',
      700: '#0A470A',
      800: '#042F04',
      900: '#021D02',
    },
  };
function eM(t) {
  var r;
  return (
    !!t[0].match(/^(typography|variants|breakpoints)$/) ||
    !!t[0].match(/sxConfig$/) ||
    (t[0] === 'palette' && !!((r = t[1]) != null && r.match(/^(mode)$/))) ||
    (t[0] === 'focus' && t[1] !== 'thickness')
  );
}
const i1 = (t, r) => Zb(t, r, 'Mui'),
  tM = (t, r) => O5(t, r, 'Mui'),
  nM = (t) =>
    t &&
    typeof t == 'object' &&
    Object.keys(t).some((r) => {
      var l;
      return (l = r.match) == null
        ? void 0
        : l.call(
            r,
            /^(plain(Hover|Active|Disabled)?(Color|Bg)|outlined(Hover|Active|Disabled)?(Color|Border|Bg)|soft(Hover|Active|Disabled)?(Color|Bg)|solid(Hover|Active|Disabled)?(Color|Bg))$/,
          );
    }),
  gv = (t, r, l) => {
    r.includes('Color') && (t.color = l),
      r.includes('Bg') && (t.backgroundColor = l),
      r.includes('Border') && (t.borderColor = l);
  },
  yv = (t, r, l) => {
    const i = {};
    return (
      Object.entries(r || {}).forEach(([s, u]) => {
        if (s.match(new RegExp(`${t}(color|bg|border)`, 'i')) && u) {
          const f = l ? l(s) : u;
          s.includes('Disabled') &&
            ((i.pointerEvents = 'none'),
            (i.cursor = 'default'),
            (i['--Icon-color'] = 'currentColor')),
            s.match(/(Hover|Active|Disabled)/) ||
              (i['--variant-borderWidth'] || (i['--variant-borderWidth'] = '0px'),
              s.includes('Border') &&
                ((i['--variant-borderWidth'] = '1px'),
                (i.border = 'var(--variant-borderWidth) solid'))),
            gv(i, s, f);
        }
      }),
      i
    );
  },
  Gt = (t, r) => {
    let l = {};
    {
      const { getCssVar: i, palette: s } = r;
      Object.entries(s).forEach((u) => {
        const [f, p] = u;
        nM(p) &&
          typeof p == 'object' &&
          (l = fe({}, l, {
            [f]: yv(t, p, (m) => `var(--variant-${m}, ${i(`palette-${f}-${m}`, s[f][m])})`),
          }));
      });
    }
    return (
      (l.context = yv(t, {
        plainColor: 'var(--variant-plainColor)',
        plainHoverColor: 'var(--variant-plainHoverColor)',
        plainHoverBg: 'var(--variant-plainHoverBg)',
        plainActiveBg: 'var(--variant-plainActiveBg)',
        plainDisabledColor: 'var(--variant-plainDisabledColor)',
        outlinedColor: 'var(--variant-outlinedColor)',
        outlinedBorder: 'var(--variant-outlinedBorder)',
        outlinedHoverColor: 'var(--variant-outlinedHoverColor)',
        outlinedHoverBorder: 'var(--variant-outlinedHoverBorder)',
        outlinedHoverBg: 'var(--variant-outlinedHoverBg)',
        outlinedActiveBg: 'var(--variant-outlinedActiveBg)',
        outlinedDisabledColor: 'var(--variant-outlinedDisabledColor)',
        outlinedDisabledBorder: 'var(--variant-outlinedDisabledBorder)',
        softColor: 'var(--variant-softColor)',
        softBg: 'var(--variant-softBg)',
        softHoverColor: 'var(--variant-softHoverColor)',
        softHoverBg: 'var(--variant-softHoverBg)',
        softActiveBg: 'var(--variant-softActiveBg)',
        softDisabledColor: 'var(--variant-softDisabledColor)',
        softDisabledBg: 'var(--variant-softDisabledBg)',
        solidColor: 'var(--variant-solidColor)',
        solidBg: 'var(--variant-solidBg)',
        solidHoverBg: 'var(--variant-solidHoverBg)',
        solidActiveBg: 'var(--variant-solidActiveBg)',
        solidDisabledColor: 'var(--variant-solidDisabledColor)',
        solidDisabledBg: 'var(--variant-solidDisabledBg)',
      })),
      l
    );
  },
  rM = [
    'cssVarPrefix',
    'breakpoints',
    'spacing',
    'components',
    'variants',
    'shouldSkipGeneratingVar',
  ],
  aM = ['colorSchemes'],
  lM = (t = 'joy') => Y4(t);
function iM(t) {
  var r, l, i, s, u, f, p, m, h, y;
  const v = {},
    {
      cssVarPrefix: b = 'joy',
      breakpoints: w,
      spacing: S,
      components: A,
      variants: O,
      shouldSkipGeneratingVar: M = eM,
    } = v,
    z = Lt(v, rM),
    E = lM(b),
    D = {
      primary: Wi.blue,
      neutral: Wi.grey,
      danger: Wi.red,
      success: Wi.green,
      warning: Wi.yellow,
      common: { white: '#FFF', black: '#000' },
    },
    R = (ae) => {
      var de;
      const ce = ae.split('-'),
        be = ce[1],
        Te = ce[2];
      return E(ae, (de = D[be]) == null ? void 0 : de[Te]);
    },
    U = (ae) => ({
      plainColor: R(`palette-${ae}-500`),
      plainHoverBg: R(`palette-${ae}-100`),
      plainActiveBg: R(`palette-${ae}-200`),
      plainDisabledColor: R('palette-neutral-400'),
      outlinedColor: R(`palette-${ae}-500`),
      outlinedBorder: R(`palette-${ae}-300`),
      outlinedHoverBg: R(`palette-${ae}-100`),
      outlinedActiveBg: R(`palette-${ae}-200`),
      outlinedDisabledColor: R('palette-neutral-400'),
      outlinedDisabledBorder: R('palette-neutral-200'),
      softColor: R(`palette-${ae}-700`),
      softBg: R(`palette-${ae}-100`),
      softHoverBg: R(`palette-${ae}-200`),
      softActiveColor: R(`palette-${ae}-800`),
      softActiveBg: R(`palette-${ae}-300`),
      softDisabledColor: R('palette-neutral-400'),
      softDisabledBg: R('palette-neutral-50'),
      solidColor: R('palette-common-white'),
      solidBg: R(`palette-${ae}-500`),
      solidHoverBg: R(`palette-${ae}-600`),
      solidActiveBg: R(`palette-${ae}-700`),
      solidDisabledColor: R('palette-neutral-400'),
      solidDisabledBg: R('palette-neutral-100'),
    }),
    q = (ae) => ({
      plainColor: R(`palette-${ae}-300`),
      plainHoverBg: R(`palette-${ae}-800`),
      plainActiveBg: R(`palette-${ae}-700`),
      plainDisabledColor: R('palette-neutral-500'),
      outlinedColor: R(`palette-${ae}-200`),
      outlinedBorder: R(`palette-${ae}-700`),
      outlinedHoverBg: R(`palette-${ae}-800`),
      outlinedActiveBg: R(`palette-${ae}-700`),
      outlinedDisabledColor: R('palette-neutral-500'),
      outlinedDisabledBorder: R('palette-neutral-800'),
      softColor: R(`palette-${ae}-200`),
      softBg: R(`palette-${ae}-800`),
      softHoverBg: R(`palette-${ae}-700`),
      softActiveColor: R(`palette-${ae}-100`),
      softActiveBg: R(`palette-${ae}-600`),
      softDisabledColor: R('palette-neutral-500'),
      softDisabledBg: R('palette-neutral-800'),
      solidColor: R('palette-common-white'),
      solidBg: R(`palette-${ae}-500`),
      solidHoverBg: R(`palette-${ae}-600`),
      solidActiveBg: R(`palette-${ae}-700`),
      solidDisabledColor: R('palette-neutral-500'),
      solidDisabledBg: R('palette-neutral-800'),
    }),
    V = {
      palette: {
        mode: 'light',
        primary: fe({}, D.primary, U('primary')),
        neutral: fe({}, D.neutral, U('neutral'), {
          plainColor: R('palette-neutral-700'),
          plainHoverColor: R('palette-neutral-900'),
          outlinedColor: R('palette-neutral-700'),
        }),
        danger: fe({}, D.danger, U('danger')),
        success: fe({}, D.success, U('success')),
        warning: fe({}, D.warning, U('warning')),
        common: { white: '#FFF', black: '#000' },
        text: {
          primary: R('palette-neutral-800'),
          secondary: R('palette-neutral-700'),
          tertiary: R('palette-neutral-600'),
          icon: R('palette-neutral-500'),
        },
        background: {
          body: R('palette-common-white'),
          surface: R('palette-neutral-50'),
          popup: R('palette-common-white'),
          level1: R('palette-neutral-100'),
          level2: R('palette-neutral-200'),
          level3: R('palette-neutral-300'),
          tooltip: R('palette-neutral-500'),
          backdrop: `rgba(${E('palette-neutral-darkChannel', za(D.neutral[900]))} / 0.25)`,
        },
        divider: `rgba(${E('palette-neutral-mainChannel', za(D.neutral[500]))} / 0.2)`,
        focusVisible: R('palette-primary-500'),
      },
      shadowRing: '0 0 #000',
      shadowChannel: '21 21 21',
      shadowOpacity: '0.08',
    },
    G = {
      palette: {
        mode: 'dark',
        primary: fe({}, D.primary, q('primary')),
        neutral: fe({}, D.neutral, q('neutral'), {
          plainColor: R('palette-neutral-300'),
          plainHoverColor: R('palette-neutral-300'),
        }),
        danger: fe({}, D.danger, q('danger')),
        success: fe({}, D.success, q('success')),
        warning: fe({}, D.warning, q('warning')),
        common: { white: '#FFF', black: '#000' },
        text: {
          primary: R('palette-neutral-100'),
          secondary: R('palette-neutral-300'),
          tertiary: R('palette-neutral-400'),
          icon: R('palette-neutral-400'),
        },
        background: {
          body: R('palette-common-black'),
          surface: R('palette-neutral-900'),
          popup: R('palette-common-black'),
          level1: R('palette-neutral-800'),
          level2: R('palette-neutral-700'),
          level3: R('palette-neutral-600'),
          tooltip: R('palette-neutral-600'),
          backdrop: `rgba(${E('palette-neutral-darkChannel', za(D.neutral[50]))} / 0.25)`,
        },
        divider: `rgba(${E('palette-neutral-mainChannel', za(D.neutral[500]))} / 0.16)`,
        focusVisible: R('palette-primary-500'),
      },
      shadowRing: '0 0 #000',
      shadowChannel: '0 0 0',
      shadowOpacity: '0.6',
    },
    x =
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    P = fe(
      {
        body: `"Inter", ${E(`fontFamily-fallback, ${x}`)}`,
        display: `"Inter", ${E(`fontFamily-fallback, ${x}`)}`,
        code: 'Source Code Pro,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace',
        fallback: x,
      },
      z.fontFamily,
    ),
    I = fe({ sm: 300, md: 500, lg: 600, xl: 700 }, z.fontWeight),
    ee = fe(
      {
        xs: '0.75rem',
        sm: '0.875rem',
        md: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        xl2: '1.5rem',
        xl3: '1.875rem',
        xl4: '2.25rem',
      },
      z.fontSize,
    ),
    ne = fe(
      { xs: '1.33334', sm: '1.42858', md: '1.5', lg: '1.55556', xl: '1.66667' },
      z.lineHeight,
    ),
    Z =
      (r = (l = z.colorSchemes) == null || (l = l.light) == null ? void 0 : l.shadowRing) != null
        ? r
        : V.shadowRing,
    j =
      (i = (s = z.colorSchemes) == null || (s = s.light) == null ? void 0 : s.shadowChannel) != null
        ? i
        : V.shadowChannel,
    te =
      (u = (f = z.colorSchemes) == null || (f = f.light) == null ? void 0 : f.shadowOpacity) != null
        ? u
        : V.shadowOpacity,
    ie = {
      colorSchemes: { light: V, dark: G },
      fontSize: ee,
      fontFamily: P,
      fontWeight: I,
      focus: {
        thickness: '2px',
        selector: `&.${i1('', 'focusVisible')}, &:focus-visible`,
        default: {
          outlineOffset: `var(--focus-outline-offset, ${E('focus-thickness', (p = (m = z.focus) == null ? void 0 : m.thickness) != null ? p : '2px')})`,
          outline: `${E('focus-thickness', (h = (y = z.focus) == null ? void 0 : y.thickness) != null ? h : '2px')} solid ${E('palette-focusVisible', D.primary[500])}`,
        },
      },
      lineHeight: ne,
      radius: { xs: '2px', sm: '6px', md: '8px', lg: '12px', xl: '16px' },
      shadow: {
        xs: `${E('shadowRing', Z)}, 0px 1px 2px 0px rgba(${E('shadowChannel', j)} / ${E('shadowOpacity', te)})`,
        sm: `${E('shadowRing', Z)}, 0px 1px 2px 0px rgba(${E('shadowChannel', j)} / ${E('shadowOpacity', te)}), 0px 2px 4px 0px rgba(${E('shadowChannel', j)} / ${E('shadowOpacity', te)})`,
        md: `${E('shadowRing', Z)}, 0px 2px 8px -2px rgba(${E('shadowChannel', j)} / ${E('shadowOpacity', te)}), 0px 6px 12px -2px rgba(${E('shadowChannel', j)} / ${E('shadowOpacity', te)})`,
        lg: `${E('shadowRing', Z)}, 0px 2px 8px -2px rgba(${E('shadowChannel', j)} / ${E('shadowOpacity', te)}), 0px 12px 16px -4px rgba(${E('shadowChannel', j)} / ${E('shadowOpacity', te)})`,
        xl: `${E('shadowRing', Z)}, 0px 2px 8px -2px rgba(${E('shadowChannel', j)} / ${E('shadowOpacity', te)}), 0px 20px 24px -4px rgba(${E('shadowChannel', j)} / ${E('shadowOpacity', te)})`,
      },
      zIndex: { badge: 1, table: 10, popup: 1e3, modal: 1300, snackbar: 1400, tooltip: 1500 },
      typography: {
        h1: {
          fontFamily: E(`fontFamily-display, ${P.display}`),
          fontWeight: E(`fontWeight-xl, ${I.xl}`),
          fontSize: E(`fontSize-xl4, ${ee.xl4}`),
          lineHeight: E(`lineHeight-xs, ${ne.xs}`),
          letterSpacing: '-0.025em',
          color: E(`palette-text-primary, ${V.palette.text.primary}`),
        },
        h2: {
          fontFamily: E(`fontFamily-display, ${P.display}`),
          fontWeight: E(`fontWeight-xl, ${I.xl}`),
          fontSize: E(`fontSize-xl3, ${ee.xl3}`),
          lineHeight: E(`lineHeight-xs, ${ne.xs}`),
          letterSpacing: '-0.025em',
          color: E(`palette-text-primary, ${V.palette.text.primary}`),
        },
        h3: {
          fontFamily: E(`fontFamily-display, ${P.display}`),
          fontWeight: E(`fontWeight-lg, ${I.lg}`),
          fontSize: E(`fontSize-xl2, ${ee.xl2}`),
          lineHeight: E(`lineHeight-xs, ${ne.xs}`),
          letterSpacing: '-0.025em',
          color: E(`palette-text-primary, ${V.palette.text.primary}`),
        },
        h4: {
          fontFamily: E(`fontFamily-display, ${P.display}`),
          fontWeight: E(`fontWeight-lg, ${I.lg}`),
          fontSize: E(`fontSize-xl, ${ee.xl}`),
          lineHeight: E(`lineHeight-md, ${ne.md}`),
          letterSpacing: '-0.025em',
          color: E(`palette-text-primary, ${V.palette.text.primary}`),
        },
        'title-lg': {
          fontFamily: E(`fontFamily-body, ${P.body}`),
          fontWeight: E(`fontWeight-lg, ${I.lg}`),
          fontSize: E(`fontSize-lg, ${ee.lg}`),
          lineHeight: E(`lineHeight-xs, ${ne.xs}`),
          color: E(`palette-text-primary, ${V.palette.text.primary}`),
        },
        'title-md': {
          fontFamily: E(`fontFamily-body, ${P.body}`),
          fontWeight: E(`fontWeight-md, ${I.md}`),
          fontSize: E(`fontSize-md, ${ee.md}`),
          lineHeight: E(`lineHeight-md, ${ne.md}`),
          color: E(`palette-text-primary, ${V.palette.text.primary}`),
        },
        'title-sm': {
          fontFamily: E(`fontFamily-body, ${P.body}`),
          fontWeight: E(`fontWeight-md, ${I.md}`),
          fontSize: E(`fontSize-sm, ${ee.sm}`),
          lineHeight: E(`lineHeight-sm, ${ne.sm}`),
          color: E(`palette-text-primary, ${V.palette.text.primary}`),
        },
        'body-lg': {
          fontFamily: E(`fontFamily-body, ${P.body}`),
          fontSize: E(`fontSize-lg, ${ee.lg}`),
          lineHeight: E(`lineHeight-md, ${ne.md}`),
          color: E(`palette-text-secondary, ${V.palette.text.secondary}`),
        },
        'body-md': {
          fontFamily: E(`fontFamily-body, ${P.body}`),
          fontSize: E(`fontSize-md, ${ee.md}`),
          lineHeight: E(`lineHeight-md, ${ne.md}`),
          color: E(`palette-text-secondary, ${V.palette.text.secondary}`),
        },
        'body-sm': {
          fontFamily: E(`fontFamily-body, ${P.body}`),
          fontSize: E(`fontSize-sm, ${ee.sm}`),
          lineHeight: E(`lineHeight-md, ${ne.md}`),
          color: E(`palette-text-tertiary, ${V.palette.text.tertiary}`),
        },
        'body-xs': {
          fontFamily: E(`fontFamily-body, ${P.body}`),
          fontWeight: E(`fontWeight-md, ${I.md}`),
          fontSize: E(`fontSize-xs, ${ee.xs}`),
          lineHeight: E(`lineHeight-md, ${ne.md}`),
          color: E(`palette-text-tertiary, ${V.palette.text.tertiary}`),
        },
      },
    },
    oe = z ? Cr(ie, z) : ie,
    { colorSchemes: _ } = oe,
    K = Lt(oe, aM),
    se = fe({ colorSchemes: _ }, K, {
      breakpoints: Jb(w ?? {}),
      components: Cr(
        {
          MuiSvgIcon: {
            defaultProps: { fontSize: 'xl2' },
            styleOverrides: {
              root: ({ ownerState: ae, theme: de }) => {
                var ce;
                const be = ae.instanceFontSize;
                return fe(
                  { margin: 'var(--Icon-margin)' },
                  ae.fontSize &&
                    ae.fontSize !== 'inherit' && {
                      fontSize: `var(--Icon-fontSize, ${de.vars.fontSize[ae.fontSize]})`,
                    },
                  !ae.htmlColor &&
                    fe(
                      { color: `var(--Icon-color, ${se.vars.palette.text.icon})` },
                      ae.color &&
                        ae.color !== 'inherit' &&
                        de.vars.palette[ae.color] && {
                          color: `rgba(${(ce = de.vars.palette[ae.color]) == null ? void 0 : ce.mainChannel} / 1)`,
                        },
                    ),
                  be && be !== 'inherit' && { '--Icon-fontSize': de.vars.fontSize[be] },
                );
              },
            },
          },
        },
        A,
      ),
      cssVarPrefix: b,
      getCssVar: E,
      spacing: n1(S),
    });
  function ue(ae, de) {
    Object.keys(de).forEach((ce) => {
      const be = { main: '500', light: '200', dark: '700' };
      ae === 'dark' && (be.main = 400),
        !de[ce].mainChannel && de[ce][be.main] && (de[ce].mainChannel = za(de[ce][be.main])),
        !de[ce].lightChannel && de[ce][be.light] && (de[ce].lightChannel = za(de[ce][be.light])),
        !de[ce].darkChannel && de[ce][be.dark] && (de[ce].darkChannel = za(de[ce][be.dark]));
    });
  }
  Object.entries(se.colorSchemes).forEach(([ae, de]) => {
    ue(ae, de.palette);
  });
  const le = { prefix: b, shouldSkipGeneratingVar: M },
    { vars: pe, generateCssVars: ge } = Z4(fe({ colorSchemes: _ }, K), le);
  (se.vars = pe),
    (se.generateCssVars = ge),
    (se.unstable_sxConfig = fe({}, J4, void 0)),
    (se.unstable_sx = function (de) {
      return tc({ sx: de, theme: this });
    }),
    (se.getColorSchemeSelector = (ae) =>
      ae === 'light' ? '&' : `&[data-joy-color-scheme="${ae}"], [data-joy-color-scheme="${ae}"] &`);
  const Se = { getCssVar: E, palette: se.colorSchemes.light.palette };
  return (
    (se.variants = Cr(
      {
        plain: Gt('plain', Se),
        plainHover: Gt('plainHover', Se),
        plainActive: Gt('plainActive', Se),
        plainDisabled: Gt('plainDisabled', Se),
        outlined: Gt('outlined', Se),
        outlinedHover: Gt('outlinedHover', Se),
        outlinedActive: Gt('outlinedActive', Se),
        outlinedDisabled: Gt('outlinedDisabled', Se),
        soft: Gt('soft', Se),
        softHover: Gt('softHover', Se),
        softActive: Gt('softActive', Se),
        softDisabled: Gt('softDisabled', Se),
        solid: Gt('solid', Se),
        solidHover: Gt('solidHover', Se),
        solidActive: Gt('solidActive', Se),
        solidDisabled: Gt('solidDisabled', Se),
      },
      O,
    )),
    (se.palette = fe({}, se.colorSchemes.light.palette, { colorScheme: 'light' })),
    (se.shouldSkipGeneratingVar = M),
    (se.applyStyles = r1),
    se
  );
}
const o1 = iM(),
  s1 = '$$joy',
  Wp = q4({ defaultTheme: o1, themeId: s1 });
function oM({ props: t, name: r }) {
  return G4({ props: t, name: r, defaultTheme: fe({}, o1, { components: {} }), themeId: s1 });
}
const sM = [
    'className',
    'elementType',
    'ownerState',
    'externalForwardedProps',
    'getSlotOwnerState',
    'internalForwardedProps',
  ],
  uM = ['component', 'slots', 'slotProps'],
  cM = ['component'];
function Bd(t, r) {
  const {
      className: l,
      elementType: i,
      ownerState: s,
      externalForwardedProps: u,
      getSlotOwnerState: f,
      internalForwardedProps: p,
    } = r,
    m = Lt(r, sM),
    { component: h, slots: y = { [t]: void 0 }, slotProps: v = { [t]: void 0 } } = u,
    b = Lt(u, uM),
    w = y[t] || i,
    S = _5(v[t], s),
    A = D5(
      fe({ className: l }, m, {
        externalForwardedProps: t === 'root' ? b : void 0,
        externalSlotProps: S,
      }),
    ),
    {
      props: { component: O },
      internalRef: M,
    } = A,
    z = Lt(A.props, cM),
    E = C5(M, S == null ? void 0 : S.ref, r.ref),
    D = f ? f(z) : {},
    R = fe({}, s, D),
    U = t === 'root' ? O || h : O,
    q = $5(
      w,
      fe({}, t === 'root' && !h && !y[t] && p, t !== 'root' && !y[t] && p, z, U && { as: U }, {
        ref: E,
      }),
      R,
    );
  return (
    Object.keys(D).forEach((V) => {
      delete q[V];
    }),
    [w, q]
  );
}
function fM(t) {
  return i1('MuiTypography', t);
}
tM('MuiTypography', [
  'root',
  'h1',
  'h2',
  'h3',
  'h4',
  'title-lg',
  'title-md',
  'title-sm',
  'body-lg',
  'body-md',
  'body-sm',
  'body-xs',
  'noWrap',
  'gutterBottom',
  'startDecorator',
  'endDecorator',
  'colorPrimary',
  'colorNeutral',
  'colorDanger',
  'colorSuccess',
  'colorWarning',
  'colorContext',
  'variantPlain',
  'variantOutlined',
  'variantSoft',
  'variantSolid',
]);
const dM = ['color', 'textColor'],
  pM = [
    'component',
    'gutterBottom',
    'noWrap',
    'level',
    'levelMapping',
    'children',
    'endDecorator',
    'startDecorator',
    'variant',
    'slots',
    'slotProps',
  ],
  vv = C.createContext(!1),
  hM = C.createContext(!1),
  mM = (t) => {
    const { gutterBottom: r, noWrap: l, level: i, color: s, variant: u } = t,
      f = {
        root: [
          'root',
          i,
          r && 'gutterBottom',
          l && 'noWrap',
          s && `color${bu(s)}`,
          u && `variant${bu(u)}`,
        ],
        startDecorator: ['startDecorator'],
        endDecorator: ['endDecorator'],
      };
    return R5(f, fM, {});
  },
  gM = Wp('span', {
    name: 'JoyTypography',
    slot: 'StartDecorator',
    overridesResolver: (t, r) => r.startDecorator,
  })({
    display: 'inline-flex',
    marginInlineEnd: 'clamp(4px, var(--Typography-gap, 0.375em), 0.75rem)',
  }),
  yM = Wp('span', {
    name: 'JoyTypography',
    slot: 'endDecorator',
    overridesResolver: (t, r) => r.endDecorator,
  })({
    display: 'inline-flex',
    marginInlineStart: 'clamp(4px, var(--Typography-gap, 0.375em), 0.75rem)',
  }),
  vM = Wp('span', { name: 'JoyTypography', slot: 'Root', overridesResolver: (t, r) => r.root })(
    ({ theme: t, ownerState: r }) => {
      var l, i, s, u, f;
      const p =
        r.level !== 'inherit' ? ((l = t.typography[r.level]) == null ? void 0 : l.lineHeight) : '1';
      return fe(
        { '--Icon-fontSize': `calc(1em * ${p})` },
        r.color && { '--Icon-color': 'currentColor' },
        { margin: 'var(--Typography-margin, 0px)' },
        r.nesting
          ? { display: 'inline' }
          : fe({ display: 'block' }, r.unstable_hasSkeleton && { position: 'relative' }),
        (r.startDecorator || r.endDecorator) &&
          fe(
            { display: 'flex', alignItems: 'center' },
            r.nesting &&
              fe({ display: 'inline-flex' }, r.startDecorator && { verticalAlign: 'bottom' }),
          ),
        r.level && r.level !== 'inherit' && t.typography[r.level],
        {
          fontSize: `var(--Typography-fontSize, ${r.level && r.level !== 'inherit' && (i = (s = t.typography[r.level]) == null ? void 0 : s.fontSize) != null ? i : 'inherit'})`,
        },
        r.noWrap && { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' },
        r.gutterBottom && { marginBottom: '0.35em' },
        r.color && {
          color: `var(--variant-plainColor, rgba(${(u = t.vars.palette[r.color]) == null ? void 0 : u.mainChannel} / 1))`,
        },
        r.variant &&
          fe(
            {
              borderRadius: t.vars.radius.xs,
              paddingBlock: 'min(0.1em, 4px)',
              paddingInline: '0.25em',
            },
            !r.nesting && { marginInline: '-0.25em' },
            (f = t.variants[r.variant]) == null ? void 0 : f[r.color],
          ),
      );
    },
  ),
  bv = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    'title-lg': 'p',
    'title-md': 'p',
    'title-sm': 'p',
    'body-lg': 'p',
    'body-md': 'p',
    'body-sm': 'p',
    'body-xs': 'span',
    inherit: 'p',
  },
  Ip = C.forwardRef(function (r, l) {
    var i;
    const s = oM({ props: r, name: 'JoyTypography' }),
      { color: u, textColor: f } = s,
      p = Lt(s, dM),
      m = C.useContext(vv),
      h = C.useContext(hM),
      y = _4(fe({}, p, { color: f })),
      {
        component: v,
        gutterBottom: b = !1,
        noWrap: w = !1,
        level: S = 'body-md',
        levelMapping: A = bv,
        children: O,
        endDecorator: M,
        startDecorator: z,
        variant: E,
        slots: D = {},
        slotProps: R = {},
      } = y,
      U = Lt(y, pM),
      q = (i = r.color) != null ? i : E ? (u ?? 'neutral') : u,
      V = m || h ? r.level || 'inherit' : S,
      G = x5(O, ['Skeleton']),
      x = v || (m ? 'span' : A[V] || bv[V] || 'span'),
      P = fe({}, y, {
        level: V,
        component: x,
        color: q,
        gutterBottom: b,
        noWrap: w,
        nesting: m,
        variant: E,
        unstable_hasSkeleton: G,
      }),
      I = mM(P),
      ee = fe({}, U, { component: x, slots: D, slotProps: R }),
      [ne, Z] = Bd('root', {
        ref: l,
        className: I.root,
        elementType: vM,
        externalForwardedProps: ee,
        ownerState: P,
      }),
      [j, te] = Bd('startDecorator', {
        className: I.startDecorator,
        elementType: gM,
        externalForwardedProps: ee,
        ownerState: P,
      }),
      [ie, oe] = Bd('endDecorator', {
        className: I.endDecorator,
        elementType: yM,
        externalForwardedProps: ee,
        ownerState: P,
      });
    return L.jsx(vv.Provider, {
      value: !0,
      children: L.jsxs(
        ne,
        fe({}, Z, {
          children: [
            z && L.jsx(j, fe({}, te, { children: z })),
            G ? C.cloneElement(O, { variant: O.props.variant || 'inline' }) : O,
            M && L.jsx(ie, fe({}, oe, { children: M })),
          ],
        }),
      ),
    });
  });
Ip.muiName = 'Typography';
const bM = ({ level: t = 'title-md', align: r = 'left', label: l }) =>
    L.jsx(Ip, { level: t, textAlign: r, children: l }),
  SM = ({ level: t = 'body-md', align: r = 'left', label: l }) =>
    L.jsx(Ip, { level: t, textAlign: r, children: l });
function xM({ userId: t, title: r, body: l, marginBottom: i = 2 }) {
  const [s, u] = C.useState('');
  C.useEffect(() => {
    (async () => {
      try {
        const m = await S5(t);
        u(m.username);
      } catch {
        console.error('ユーザー情報の取得に失敗しました');
      }
    })();
  }, []);
  const f = l.length > 20 ? `${l.substring(0, 20)}...` : l;
  return L.jsx(PT, {
    component: 'article',
    role: 'article',
    elevation: 3,
    sx: { marginBottom: i },
    children: L.jsx(VT, {
      children: L.jsxs(gu, {
        component: 'header',
        'data-user-id': t,
        children: [
          L.jsx(_p, { component: 'p', children: s }),
          L.jsx(bM, { level: 'title-md', label: r }),
          L.jsx(SM, { level: 'body-sm', label: f }),
        ],
      }),
    }),
  });
}
const EM = ({ level: t = 'h5', color: r = 'inherit', align: l = 'left', label: i }) =>
  L.jsx(_p, { variant: t, color: r, align: l, children: i });
var Ii = {},
  Sv;
function CM() {
  if (Sv) return Ii;
  (Sv = 1),
    Object.defineProperty(Ii, '__esModule', { value: !0 }),
    (Ii.parse = f),
    (Ii.serialize = h);
  const t = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    r = /^[\u0021-\u003A\u003C-\u007E]*$/,
    l = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    i = /^[\u0020-\u003A\u003D-\u007E]*$/,
    s = Object.prototype.toString,
    u = (() => {
      const b = function () {};
      return (b.prototype = Object.create(null)), b;
    })();
  function f(b, w) {
    const S = new u(),
      A = b.length;
    if (A < 2) return S;
    const O = (w == null ? void 0 : w.decode) || y;
    let M = 0;
    do {
      const z = b.indexOf('=', M);
      if (z === -1) break;
      const E = b.indexOf(';', M),
        D = E === -1 ? A : E;
      if (z > D) {
        M = b.lastIndexOf(';', z - 1) + 1;
        continue;
      }
      const R = p(b, M, z),
        U = m(b, z, R),
        q = b.slice(R, U);
      if (S[q] === void 0) {
        let V = p(b, z + 1, D),
          G = m(b, D, V);
        const x = O(b.slice(V, G));
        S[q] = x;
      }
      M = D + 1;
    } while (M < A);
    return S;
  }
  function p(b, w, S) {
    do {
      const A = b.charCodeAt(w);
      if (A !== 32 && A !== 9) return w;
    } while (++w < S);
    return S;
  }
  function m(b, w, S) {
    for (; w > S; ) {
      const A = b.charCodeAt(--w);
      if (A !== 32 && A !== 9) return w + 1;
    }
    return S;
  }
  function h(b, w, S) {
    const A = (S == null ? void 0 : S.encode) || encodeURIComponent;
    if (!t.test(b)) throw new TypeError(`argument name is invalid: ${b}`);
    const O = A(w);
    if (!r.test(O)) throw new TypeError(`argument val is invalid: ${w}`);
    let M = b + '=' + O;
    if (!S) return M;
    if (S.maxAge !== void 0) {
      if (!Number.isInteger(S.maxAge)) throw new TypeError(`option maxAge is invalid: ${S.maxAge}`);
      M += '; Max-Age=' + S.maxAge;
    }
    if (S.domain) {
      if (!l.test(S.domain)) throw new TypeError(`option domain is invalid: ${S.domain}`);
      M += '; Domain=' + S.domain;
    }
    if (S.path) {
      if (!i.test(S.path)) throw new TypeError(`option path is invalid: ${S.path}`);
      M += '; Path=' + S.path;
    }
    if (S.expires) {
      if (!v(S.expires) || !Number.isFinite(S.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${S.expires}`);
      M += '; Expires=' + S.expires.toUTCString();
    }
    if (
      (S.httpOnly && (M += '; HttpOnly'),
      S.secure && (M += '; Secure'),
      S.partitioned && (M += '; Partitioned'),
      S.priority)
    )
      switch (typeof S.priority == 'string' ? S.priority.toLowerCase() : void 0) {
        case 'low':
          M += '; Priority=Low';
          break;
        case 'medium':
          M += '; Priority=Medium';
          break;
        case 'high':
          M += '; Priority=High';
          break;
        default:
          throw new TypeError(`option priority is invalid: ${S.priority}`);
      }
    if (S.sameSite)
      switch (typeof S.sameSite == 'string' ? S.sameSite.toLowerCase() : S.sameSite) {
        case !0:
        case 'strict':
          M += '; SameSite=Strict';
          break;
        case 'lax':
          M += '; SameSite=Lax';
          break;
        case 'none':
          M += '; SameSite=None';
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${S.sameSite}`);
      }
    return M;
  }
  function y(b) {
    if (b.indexOf('%') === -1) return b;
    try {
      return decodeURIComponent(b);
    } catch {
      return b;
    }
  }
  function v(b) {
    return s.call(b) === '[object Date]';
  }
  return Ii;
}
CM();
/**
 * react-router v7.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var xv = 'popstate';
function RM(t = {}) {
  function r(i, s) {
    let { pathname: u, search: f, hash: p } = i.location;
    return sp(
      '',
      { pathname: u, search: f, hash: p },
      (s.state && s.state.usr) || null,
      (s.state && s.state.key) || 'default',
    );
  }
  function l(i, s) {
    return typeof s == 'string' ? s : ho(s);
  }
  return wM(r, l, null, t);
}
function ut(t, r) {
  if (t === !1 || t === null || typeof t > 'u') throw new Error(r);
}
function er(t, r) {
  if (!t) {
    typeof console < 'u' && console.warn(r);
    try {
      throw new Error(r);
    } catch {}
  }
}
function TM() {
  return Math.random().toString(36).substring(2, 10);
}
function Ev(t, r) {
  return { usr: t.state, key: t.key, idx: r };
}
function sp(t, r, l = null, i) {
  return {
    pathname: typeof t == 'string' ? t : t.pathname,
    search: '',
    hash: '',
    ...(typeof r == 'string' ? Gl(r) : r),
    state: l,
    key: (r && r.key) || i || TM(),
  };
}
function ho({ pathname: t = '/', search: r = '', hash: l = '' }) {
  return (
    r && r !== '?' && (t += r.charAt(0) === '?' ? r : '?' + r),
    l && l !== '#' && (t += l.charAt(0) === '#' ? l : '#' + l),
    t
  );
}
function Gl(t) {
  let r = {};
  if (t) {
    let l = t.indexOf('#');
    l >= 0 && ((r.hash = t.substring(l)), (t = t.substring(0, l)));
    let i = t.indexOf('?');
    i >= 0 && ((r.search = t.substring(i)), (t = t.substring(0, i))), t && (r.pathname = t);
  }
  return r;
}
function wM(t, r, l, i = {}) {
  let { window: s = document.defaultView, v5Compat: u = !1 } = i,
    f = s.history,
    p = 'POP',
    m = null,
    h = y();
  h == null && ((h = 0), f.replaceState({ ...f.state, idx: h }, ''));
  function y() {
    return (f.state || { idx: null }).idx;
  }
  function v() {
    p = 'POP';
    let O = y(),
      M = O == null ? null : O - h;
    (h = O), m && m({ action: p, location: A.location, delta: M });
  }
  function b(O, M) {
    p = 'PUSH';
    let z = sp(A.location, O, M);
    h = y() + 1;
    let E = Ev(z, h),
      D = A.createHref(z);
    try {
      f.pushState(E, '', D);
    } catch (R) {
      if (R instanceof DOMException && R.name === 'DataCloneError') throw R;
      s.location.assign(D);
    }
    u && m && m({ action: p, location: A.location, delta: 1 });
  }
  function w(O, M) {
    p = 'REPLACE';
    let z = sp(A.location, O, M);
    h = y();
    let E = Ev(z, h),
      D = A.createHref(z);
    f.replaceState(E, '', D), u && m && m({ action: p, location: A.location, delta: 0 });
  }
  function S(O) {
    let M = s.location.origin !== 'null' ? s.location.origin : s.location.href,
      z = typeof O == 'string' ? O : ho(O);
    return (
      (z = z.replace(/ $/, '%20')),
      ut(M, `No window.location.(origin|href) available to create URL for href: ${z}`),
      new URL(z, M)
    );
  }
  let A = {
    get action() {
      return p;
    },
    get location() {
      return t(s, f);
    },
    listen(O) {
      if (m) throw new Error('A history only accepts one active listener');
      return (
        s.addEventListener(xv, v),
        (m = O),
        () => {
          s.removeEventListener(xv, v), (m = null);
        }
      );
    },
    createHref(O) {
      return r(s, O);
    },
    createURL: S,
    encodeLocation(O) {
      let M = S(O);
      return { pathname: M.pathname, search: M.search, hash: M.hash };
    },
    push: b,
    replace: w,
    go(O) {
      return f.go(O);
    },
  };
  return A;
}
function u1(t, r, l = '/') {
  return AM(t, r, l, !1);
}
function AM(t, r, l, i) {
  let s = typeof r == 'string' ? Gl(r) : r,
    u = oa(s.pathname || '/', l);
  if (u == null) return null;
  let f = c1(t);
  OM(f);
  let p = null;
  for (let m = 0; p == null && m < f.length; ++m) {
    let h = LM(u);
    p = UM(f[m], h, i);
  }
  return p;
}
function c1(t, r = [], l = [], i = '') {
  let s = (u, f, p) => {
    let m = {
      relativePath: p === void 0 ? u.path || '' : p,
      caseSensitive: u.caseSensitive === !0,
      childrenIndex: f,
      route: u,
    };
    m.relativePath.startsWith('/') &&
      (ut(
        m.relativePath.startsWith(i),
        `Absolute route path "${m.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
      (m.relativePath = m.relativePath.slice(i.length)));
    let h = Rr([i, m.relativePath]),
      y = l.concat(m);
    u.children &&
      u.children.length > 0 &&
      (ut(
        u.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${h}".`,
      ),
      c1(u.children, r, y, h)),
      !(u.path == null && !u.index) && r.push({ path: h, score: NM(h, u.index), routesMeta: y });
  };
  return (
    t.forEach((u, f) => {
      var p;
      if (u.path === '' || !((p = u.path) != null && p.includes('?'))) s(u, f);
      else for (let m of f1(u.path)) s(u, f, m);
    }),
    r
  );
}
function f1(t) {
  let r = t.split('/');
  if (r.length === 0) return [];
  let [l, ...i] = r,
    s = l.endsWith('?'),
    u = l.replace(/\?$/, '');
  if (i.length === 0) return s ? [u, ''] : [u];
  let f = f1(i.join('/')),
    p = [];
  return (
    p.push(...f.map((m) => (m === '' ? u : [u, m].join('/')))),
    s && p.push(...f),
    p.map((m) => (t.startsWith('/') && m === '' ? '/' : m))
  );
}
function OM(t) {
  t.sort((r, l) =>
    r.score !== l.score
      ? l.score - r.score
      : kM(
          r.routesMeta.map((i) => i.childrenIndex),
          l.routesMeta.map((i) => i.childrenIndex),
        ),
  );
}
var MM = /^:[\w-]+$/,
  $M = 3,
  zM = 2,
  DM = 1,
  _M = 10,
  BM = -2,
  Cv = (t) => t === '*';
function NM(t, r) {
  let l = t.split('/'),
    i = l.length;
  return (
    l.some(Cv) && (i += BM),
    r && (i += zM),
    l.filter((s) => !Cv(s)).reduce((s, u) => s + (MM.test(u) ? $M : u === '' ? DM : _M), i)
  );
}
function kM(t, r) {
  return t.length === r.length && t.slice(0, -1).every((i, s) => i === r[s])
    ? t[t.length - 1] - r[r.length - 1]
    : 0;
}
function UM(t, r, l = !1) {
  let { routesMeta: i } = t,
    s = {},
    u = '/',
    f = [];
  for (let p = 0; p < i.length; ++p) {
    let m = i[p],
      h = p === i.length - 1,
      y = u === '/' ? r : r.slice(u.length) || '/',
      v = xu({ path: m.relativePath, caseSensitive: m.caseSensitive, end: h }, y),
      b = m.route;
    if (
      (!v &&
        h &&
        l &&
        !i[i.length - 1].route.index &&
        (v = xu({ path: m.relativePath, caseSensitive: m.caseSensitive, end: !1 }, y)),
      !v)
    )
      return null;
    Object.assign(s, v.params),
      f.push({
        params: s,
        pathname: Rr([u, v.pathname]),
        pathnameBase: FM(Rr([u, v.pathnameBase])),
        route: b,
      }),
      v.pathnameBase !== '/' && (u = Rr([u, v.pathnameBase]));
  }
  return f;
}
function xu(t, r) {
  typeof t == 'string' && (t = { path: t, caseSensitive: !1, end: !0 });
  let [l, i] = jM(t.path, t.caseSensitive, t.end),
    s = r.match(l);
  if (!s) return null;
  let u = s[0],
    f = u.replace(/(.)\/+$/, '$1'),
    p = s.slice(1);
  return {
    params: i.reduce((h, { paramName: y, isOptional: v }, b) => {
      if (y === '*') {
        let S = p[b] || '';
        f = u.slice(0, u.length - S.length).replace(/(.)\/+$/, '$1');
      }
      const w = p[b];
      return v && !w ? (h[y] = void 0) : (h[y] = (w || '').replace(/%2F/g, '/')), h;
    }, {}),
    pathname: u,
    pathnameBase: f,
    pattern: t,
  };
}
function jM(t, r = !1, l = !0) {
  er(
    t === '*' || !t.endsWith('*') || t.endsWith('/*'),
    `Route path "${t}" will be treated as if it were "${t.replace(/\*$/, '/*')}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/, '/*')}".`,
  );
  let i = [],
    s =
      '^' +
      t
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (f, p, m) => (
            i.push({ paramName: p, isOptional: m != null }), m ? '/?([^\\/]+)?' : '/([^\\/]+)'
          ),
        );
  return (
    t.endsWith('*')
      ? (i.push({ paramName: '*' }), (s += t === '*' || t === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : l
        ? (s += '\\/*$')
        : t !== '' && t !== '/' && (s += '(?:(?=\\/|$))'),
    [new RegExp(s, r ? void 0 : 'i'), i]
  );
}
function LM(t) {
  try {
    return t
      .split('/')
      .map((r) => decodeURIComponent(r).replace(/\//g, '%2F'))
      .join('/');
  } catch (r) {
    return (
      er(
        !1,
        `The URL path "${t}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`,
      ),
      t
    );
  }
}
function oa(t, r) {
  if (r === '/') return t;
  if (!t.toLowerCase().startsWith(r.toLowerCase())) return null;
  let l = r.endsWith('/') ? r.length - 1 : r.length,
    i = t.charAt(l);
  return i && i !== '/' ? null : t.slice(l) || '/';
}
function HM(t, r = '/') {
  let { pathname: l, search: i = '', hash: s = '' } = typeof t == 'string' ? Gl(t) : t;
  return { pathname: l ? (l.startsWith('/') ? l : PM(l, r)) : r, search: GM(i), hash: VM(s) };
}
function PM(t, r) {
  let l = r.replace(/\/+$/, '').split('/');
  return (
    t.split('/').forEach((s) => {
      s === '..' ? l.length > 1 && l.pop() : s !== '.' && l.push(s);
    }),
    l.length > 1 ? l.join('/') : '/'
  );
}
function Nd(t, r, l, i) {
  return `Cannot include a '${t}' character in a manually specified \`to.${r}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${l}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function qM(t) {
  return t.filter((r, l) => l === 0 || (r.route.path && r.route.path.length > 0));
}
function d1(t) {
  let r = qM(t);
  return r.map((l, i) => (i === r.length - 1 ? l.pathname : l.pathnameBase));
}
function p1(t, r, l, i = !1) {
  let s;
  typeof t == 'string'
    ? (s = Gl(t))
    : ((s = { ...t }),
      ut(!s.pathname || !s.pathname.includes('?'), Nd('?', 'pathname', 'search', s)),
      ut(!s.pathname || !s.pathname.includes('#'), Nd('#', 'pathname', 'hash', s)),
      ut(!s.search || !s.search.includes('#'), Nd('#', 'search', 'hash', s)));
  let u = t === '' || s.pathname === '',
    f = u ? '/' : s.pathname,
    p;
  if (f == null) p = l;
  else {
    let v = r.length - 1;
    if (!i && f.startsWith('..')) {
      let b = f.split('/');
      for (; b[0] === '..'; ) b.shift(), (v -= 1);
      s.pathname = b.join('/');
    }
    p = v >= 0 ? r[v] : '/';
  }
  let m = HM(s, p),
    h = f && f !== '/' && f.endsWith('/'),
    y = (u || f === '.') && l.endsWith('/');
  return !m.pathname.endsWith('/') && (h || y) && (m.pathname += '/'), m;
}
var Rr = (t) => t.join('/').replace(/\/\/+/g, '/'),
  FM = (t) => t.replace(/\/+$/, '').replace(/^\/*/, '/'),
  GM = (t) => (!t || t === '?' ? '' : t.startsWith('?') ? t : '?' + t),
  VM = (t) => (!t || t === '#' ? '' : t.startsWith('#') ? t : '#' + t);
function YM(t) {
  return (
    t != null &&
    typeof t.status == 'number' &&
    typeof t.statusText == 'string' &&
    typeof t.internal == 'boolean' &&
    'data' in t
  );
}
var h1 = ['POST', 'PUT', 'PATCH', 'DELETE'];
new Set(h1);
var KM = ['GET', ...h1];
new Set(KM);
var Vl = C.createContext(null);
Vl.displayName = 'DataRouter';
var nc = C.createContext(null);
nc.displayName = 'DataRouterState';
var m1 = C.createContext({ isTransitioning: !1 });
m1.displayName = 'ViewTransition';
var XM = C.createContext(new Map());
XM.displayName = 'Fetchers';
var QM = C.createContext(null);
QM.displayName = 'Await';
var nr = C.createContext(null);
nr.displayName = 'Navigation';
var Oo = C.createContext(null);
Oo.displayName = 'Location';
var rr = C.createContext({ outlet: null, matches: [], isDataRoute: !1 });
rr.displayName = 'Route';
var Zp = C.createContext(null);
Zp.displayName = 'RouteError';
function WM(t, { relative: r } = {}) {
  ut(Mo(), 'useHref() may be used only in the context of a <Router> component.');
  let { basename: l, navigator: i } = C.useContext(nr),
    { hash: s, pathname: u, search: f } = $o(t, { relative: r }),
    p = u;
  return (
    l !== '/' && (p = u === '/' ? l : Rr([l, u])), i.createHref({ pathname: p, search: f, hash: s })
  );
}
function Mo() {
  return C.useContext(Oo) != null;
}
function Ha() {
  return (
    ut(Mo(), 'useLocation() may be used only in the context of a <Router> component.'),
    C.useContext(Oo).location
  );
}
var g1 =
  'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function y1(t) {
  C.useContext(nr).static || C.useLayoutEffect(t);
}
function IM() {
  let { isDataRoute: t } = C.useContext(rr);
  return t ? f3() : ZM();
}
function ZM() {
  ut(Mo(), 'useNavigate() may be used only in the context of a <Router> component.');
  let t = C.useContext(Vl),
    { basename: r, navigator: l } = C.useContext(nr),
    { matches: i } = C.useContext(rr),
    { pathname: s } = Ha(),
    u = JSON.stringify(d1(i)),
    f = C.useRef(!1);
  return (
    y1(() => {
      f.current = !0;
    }),
    C.useCallback(
      (m, h = {}) => {
        if ((er(f.current, g1), !f.current)) return;
        if (typeof m == 'number') {
          l.go(m);
          return;
        }
        let y = p1(m, JSON.parse(u), s, h.relative === 'path');
        t == null && r !== '/' && (y.pathname = y.pathname === '/' ? r : Rr([r, y.pathname])),
          (h.replace ? l.replace : l.push)(y, h.state, h);
      },
      [r, l, u, s, t],
    )
  );
}
C.createContext(null);
function JM() {
  let { matches: t } = C.useContext(rr),
    r = t[t.length - 1];
  return r ? r.params : {};
}
function $o(t, { relative: r } = {}) {
  let { matches: l } = C.useContext(rr),
    { pathname: i } = Ha(),
    s = JSON.stringify(d1(l));
  return C.useMemo(() => p1(t, JSON.parse(s), i, r === 'path'), [t, s, i, r]);
}
function e3(t, r) {
  return v1(t, r);
}
function v1(t, r, l, i) {
  var M;
  ut(Mo(), 'useRoutes() may be used only in the context of a <Router> component.');
  let { navigator: s } = C.useContext(nr),
    { matches: u } = C.useContext(rr),
    f = u[u.length - 1],
    p = f ? f.params : {},
    m = f ? f.pathname : '/',
    h = f ? f.pathnameBase : '/',
    y = f && f.route;
  {
    let z = (y && y.path) || '';
    b1(
      m,
      !y || z.endsWith('*') || z.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${z}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${z}"> to <Route path="${z === '/' ? '*' : `${z}/*`}">.`,
    );
  }
  let v = Ha(),
    b;
  if (r) {
    let z = typeof r == 'string' ? Gl(r) : r;
    ut(
      h === '/' || ((M = z.pathname) == null ? void 0 : M.startsWith(h)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${z.pathname}" was given in the \`location\` prop.`,
    ),
      (b = z);
  } else b = v;
  let w = b.pathname || '/',
    S = w;
  if (h !== '/') {
    let z = h.replace(/^\//, '').split('/');
    S = '/' + w.replace(/^\//, '').split('/').slice(z.length).join('/');
  }
  let A = u1(t, { pathname: S });
  er(y || A != null, `No routes matched location "${b.pathname}${b.search}${b.hash}" `),
    er(
      A == null ||
        A[A.length - 1].route.element !== void 0 ||
        A[A.length - 1].route.Component !== void 0 ||
        A[A.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${b.pathname}${b.search}${b.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    );
  let O = l3(
    A &&
      A.map((z) =>
        Object.assign({}, z, {
          params: Object.assign({}, p, z.params),
          pathname: Rr([h, s.encodeLocation ? s.encodeLocation(z.pathname).pathname : z.pathname]),
          pathnameBase:
            z.pathnameBase === '/'
              ? h
              : Rr([
                  h,
                  s.encodeLocation ? s.encodeLocation(z.pathnameBase).pathname : z.pathnameBase,
                ]),
        }),
      ),
    u,
    l,
    i,
  );
  return r && O
    ? C.createElement(
        Oo.Provider,
        {
          value: {
            location: { pathname: '/', search: '', hash: '', state: null, key: 'default', ...b },
            navigationType: 'POP',
          },
        },
        O,
      )
    : O;
}
function t3() {
  let t = c3(),
    r = YM(t) ? `${t.status} ${t.statusText}` : t instanceof Error ? t.message : JSON.stringify(t),
    l = t instanceof Error ? t.stack : null,
    i = 'rgba(200,200,200, 0.5)',
    s = { padding: '0.5rem', backgroundColor: i },
    u = { padding: '2px 4px', backgroundColor: i },
    f = null;
  return (
    console.error('Error handled by React Router default ErrorBoundary:', t),
    (f = C.createElement(
      C.Fragment,
      null,
      C.createElement('p', null, '💿 Hey developer 👋'),
      C.createElement(
        'p',
        null,
        'You can provide a way better UX than this when your app throws errors by providing your own ',
        C.createElement('code', { style: u }, 'ErrorBoundary'),
        ' or',
        ' ',
        C.createElement('code', { style: u }, 'errorElement'),
        ' prop on your route.',
      ),
    )),
    C.createElement(
      C.Fragment,
      null,
      C.createElement('h2', null, 'Unexpected Application Error!'),
      C.createElement('h3', { style: { fontStyle: 'italic' } }, r),
      l ? C.createElement('pre', { style: s }, l) : null,
      f,
    )
  );
}
var n3 = C.createElement(t3, null),
  r3 = class extends C.Component {
    constructor(t) {
      super(t),
        (this.state = { location: t.location, revalidation: t.revalidation, error: t.error });
    }
    static getDerivedStateFromError(t) {
      return { error: t };
    }
    static getDerivedStateFromProps(t, r) {
      return r.location !== t.location || (r.revalidation !== 'idle' && t.revalidation === 'idle')
        ? { error: t.error, location: t.location, revalidation: t.revalidation }
        : {
            error: t.error !== void 0 ? t.error : r.error,
            location: r.location,
            revalidation: t.revalidation || r.revalidation,
          };
    }
    componentDidCatch(t, r) {
      console.error('React Router caught the following error during render', t, r);
    }
    render() {
      return this.state.error !== void 0
        ? C.createElement(
            rr.Provider,
            { value: this.props.routeContext },
            C.createElement(Zp.Provider, {
              value: this.state.error,
              children: this.props.component,
            }),
          )
        : this.props.children;
    }
  };
function a3({ routeContext: t, match: r, children: l }) {
  let i = C.useContext(Vl);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (r.route.errorElement || r.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = r.route.id),
    C.createElement(rr.Provider, { value: t }, l)
  );
}
function l3(t, r = [], l = null, i = null) {
  if (t == null) {
    if (!l) return null;
    if (l.errors) t = l.matches;
    else if (r.length === 0 && !l.initialized && l.matches.length > 0) t = l.matches;
    else return null;
  }
  let s = t,
    u = l == null ? void 0 : l.errors;
  if (u != null) {
    let m = s.findIndex((h) => h.route.id && (u == null ? void 0 : u[h.route.id]) !== void 0);
    ut(
      m >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(u).join(',')}`,
    ),
      (s = s.slice(0, Math.min(s.length, m + 1)));
  }
  let f = !1,
    p = -1;
  if (l)
    for (let m = 0; m < s.length; m++) {
      let h = s[m];
      if (((h.route.HydrateFallback || h.route.hydrateFallbackElement) && (p = m), h.route.id)) {
        let { loaderData: y, errors: v } = l,
          b = h.route.loader && !y.hasOwnProperty(h.route.id) && (!v || v[h.route.id] === void 0);
        if (h.route.lazy || b) {
          (f = !0), p >= 0 ? (s = s.slice(0, p + 1)) : (s = [s[0]]);
          break;
        }
      }
    }
  return s.reduceRight((m, h, y) => {
    let v,
      b = !1,
      w = null,
      S = null;
    l &&
      ((v = u && h.route.id ? u[h.route.id] : void 0),
      (w = h.route.errorElement || n3),
      f &&
        (p < 0 && y === 0
          ? (b1(
              'route-fallback',
              !1,
              'No `HydrateFallback` element provided to render during initial hydration',
            ),
            (b = !0),
            (S = null))
          : p === y && ((b = !0), (S = h.route.hydrateFallbackElement || null))));
    let A = r.concat(s.slice(0, y + 1)),
      O = () => {
        let M;
        return (
          v
            ? (M = w)
            : b
              ? (M = S)
              : h.route.Component
                ? (M = C.createElement(h.route.Component, null))
                : h.route.element
                  ? (M = h.route.element)
                  : (M = m),
          C.createElement(a3, {
            match: h,
            routeContext: { outlet: m, matches: A, isDataRoute: l != null },
            children: M,
          })
        );
      };
    return l && (h.route.ErrorBoundary || h.route.errorElement || y === 0)
      ? C.createElement(r3, {
          location: l.location,
          revalidation: l.revalidation,
          component: w,
          error: v,
          children: O(),
          routeContext: { outlet: null, matches: A, isDataRoute: !0 },
        })
      : O();
  }, null);
}
function Jp(t) {
  return `${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function i3(t) {
  let r = C.useContext(Vl);
  return ut(r, Jp(t)), r;
}
function o3(t) {
  let r = C.useContext(nc);
  return ut(r, Jp(t)), r;
}
function s3(t) {
  let r = C.useContext(rr);
  return ut(r, Jp(t)), r;
}
function eh(t) {
  let r = s3(t),
    l = r.matches[r.matches.length - 1];
  return ut(l.route.id, `${t} can only be used on routes that contain a unique "id"`), l.route.id;
}
function u3() {
  return eh('useRouteId');
}
function c3() {
  var i;
  let t = C.useContext(Zp),
    r = o3('useRouteError'),
    l = eh('useRouteError');
  return t !== void 0 ? t : (i = r.errors) == null ? void 0 : i[l];
}
function f3() {
  let { router: t } = i3('useNavigate'),
    r = eh('useNavigate'),
    l = C.useRef(!1);
  return (
    y1(() => {
      l.current = !0;
    }),
    C.useCallback(
      async (s, u = {}) => {
        er(l.current, g1),
          l.current &&
            (typeof s == 'number' ? t.navigate(s) : await t.navigate(s, { fromRouteId: r, ...u }));
      },
      [t, r],
    )
  );
}
var Rv = {};
function b1(t, r, l) {
  !r && !Rv[t] && ((Rv[t] = !0), er(!1, l));
}
C.memo(d3);
function d3({ routes: t, future: r, state: l }) {
  return v1(t, void 0, l, r);
}
function up(t) {
  ut(
    !1,
    'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.',
  );
}
function p3({
  basename: t = '/',
  children: r = null,
  location: l,
  navigationType: i = 'POP',
  navigator: s,
  static: u = !1,
}) {
  ut(
    !Mo(),
    'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.',
  );
  let f = t.replace(/^\/*/, '/'),
    p = C.useMemo(() => ({ basename: f, navigator: s, static: u, future: {} }), [f, s, u]);
  typeof l == 'string' && (l = Gl(l));
  let { pathname: m = '/', search: h = '', hash: y = '', state: v = null, key: b = 'default' } = l,
    w = C.useMemo(() => {
      let S = oa(m, f);
      return S == null
        ? null
        : { location: { pathname: S, search: h, hash: y, state: v, key: b }, navigationType: i };
    }, [f, m, h, y, v, b, i]);
  return (
    er(
      w != null,
      `<Router basename="${f}"> is not able to match the URL "${m}${h}${y}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    w == null
      ? null
      : C.createElement(
          nr.Provider,
          { value: p },
          C.createElement(Oo.Provider, { children: r, value: w }),
        )
  );
}
function h3({ children: t, location: r }) {
  return e3(cp(t), r);
}
function cp(t, r = []) {
  let l = [];
  return (
    C.Children.forEach(t, (i, s) => {
      if (!C.isValidElement(i)) return;
      let u = [...r, s];
      if (i.type === C.Fragment) {
        l.push.apply(l, cp(i.props.children, u));
        return;
      }
      ut(
        i.type === up,
        `[${typeof i.type == 'string' ? i.type : i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`,
      ),
        ut(!i.props.index || !i.props.children, 'An index route cannot have child routes.');
      let f = {
        id: i.props.id || u.join('-'),
        caseSensitive: i.props.caseSensitive,
        element: i.props.element,
        Component: i.props.Component,
        index: i.props.index,
        path: i.props.path,
        loader: i.props.loader,
        action: i.props.action,
        hydrateFallbackElement: i.props.hydrateFallbackElement,
        HydrateFallback: i.props.HydrateFallback,
        errorElement: i.props.errorElement,
        ErrorBoundary: i.props.ErrorBoundary,
        hasErrorBoundary:
          i.props.hasErrorBoundary === !0 ||
          i.props.ErrorBoundary != null ||
          i.props.errorElement != null,
        shouldRevalidate: i.props.shouldRevalidate,
        handle: i.props.handle,
        lazy: i.props.lazy,
      };
      i.props.children && (f.children = cp(i.props.children, u)), l.push(f);
    }),
    l
  );
}
var iu = 'get',
  ou = 'application/x-www-form-urlencoded';
function rc(t) {
  return t != null && typeof t.tagName == 'string';
}
function m3(t) {
  return rc(t) && t.tagName.toLowerCase() === 'button';
}
function g3(t) {
  return rc(t) && t.tagName.toLowerCase() === 'form';
}
function y3(t) {
  return rc(t) && t.tagName.toLowerCase() === 'input';
}
function v3(t) {
  return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
}
function b3(t, r) {
  return t.button === 0 && (!r || r === '_self') && !v3(t);
}
var Ws = null;
function S3() {
  if (Ws === null)
    try {
      new FormData(document.createElement('form'), 0), (Ws = !1);
    } catch {
      Ws = !0;
    }
  return Ws;
}
var x3 = new Set(['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain']);
function kd(t) {
  return t != null && !x3.has(t)
    ? (er(
        !1,
        `"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ou}"`,
      ),
      null)
    : t;
}
function E3(t, r) {
  let l, i, s, u, f;
  if (g3(t)) {
    let p = t.getAttribute('action');
    (i = p ? oa(p, r) : null),
      (l = t.getAttribute('method') || iu),
      (s = kd(t.getAttribute('enctype')) || ou),
      (u = new FormData(t));
  } else if (m3(t) || (y3(t) && (t.type === 'submit' || t.type === 'image'))) {
    let p = t.form;
    if (p == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let m = t.getAttribute('formaction') || p.getAttribute('action');
    if (
      ((i = m ? oa(m, r) : null),
      (l = t.getAttribute('formmethod') || p.getAttribute('method') || iu),
      (s = kd(t.getAttribute('formenctype')) || kd(p.getAttribute('enctype')) || ou),
      (u = new FormData(p, t)),
      !S3())
    ) {
      let { name: h, type: y, value: v } = t;
      if (y === 'image') {
        let b = h ? `${h}.` : '';
        u.append(`${b}x`, '0'), u.append(`${b}y`, '0');
      } else h && u.append(h, v);
    }
  } else {
    if (rc(t))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    (l = iu), (i = null), (s = ou), (f = t);
  }
  return (
    u && s === 'text/plain' && ((f = u), (u = void 0)),
    { action: i, method: l.toLowerCase(), encType: s, formData: u, body: f }
  );
}
function th(t, r) {
  if (t === !1 || t === null || typeof t > 'u') throw new Error(r);
}
async function C3(t, r) {
  if (t.id in r) return r[t.id];
  try {
    let l = await import(t.module);
    return (r[t.id] = l), l;
  } catch (l) {
    return (
      console.error(`Error loading route module \`${t.module}\`, reloading page...`),
      console.error(l),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function R3(t) {
  return t == null
    ? !1
    : t.href == null
      ? t.rel === 'preload' && typeof t.imageSrcSet == 'string' && typeof t.imageSizes == 'string'
      : typeof t.rel == 'string' && typeof t.href == 'string';
}
async function T3(t, r, l) {
  let i = await Promise.all(
    t.map(async (s) => {
      let u = r.routes[s.route.id];
      if (u) {
        let f = await C3(u, l);
        return f.links ? f.links() : [];
      }
      return [];
    }),
  );
  return M3(
    i
      .flat(1)
      .filter(R3)
      .filter((s) => s.rel === 'stylesheet' || s.rel === 'preload')
      .map((s) =>
        s.rel === 'stylesheet' ? { ...s, rel: 'prefetch', as: 'style' } : { ...s, rel: 'prefetch' },
      ),
  );
}
function Tv(t, r, l, i, s, u) {
  let f = (m, h) => (l[h] ? m.route.id !== l[h].route.id : !0),
    p = (m, h) => {
      var y;
      return (
        l[h].pathname !== m.pathname ||
        (((y = l[h].route.path) == null ? void 0 : y.endsWith('*')) &&
          l[h].params['*'] !== m.params['*'])
      );
    };
  return u === 'assets'
    ? r.filter((m, h) => f(m, h) || p(m, h))
    : u === 'data'
      ? r.filter((m, h) => {
          var v;
          let y = i.routes[m.route.id];
          if (!y || !y.hasLoader) return !1;
          if (f(m, h) || p(m, h)) return !0;
          if (m.route.shouldRevalidate) {
            let b = m.route.shouldRevalidate({
              currentUrl: new URL(s.pathname + s.search + s.hash, window.origin),
              currentParams: ((v = l[0]) == null ? void 0 : v.params) || {},
              nextUrl: new URL(t, window.origin),
              nextParams: m.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof b == 'boolean') return b;
          }
          return !0;
        })
      : [];
}
function w3(t, r) {
  return A3(
    t
      .map((l) => {
        let i = r.routes[l.route.id];
        if (!i) return [];
        let s = [i.module];
        return i.imports && (s = s.concat(i.imports)), s;
      })
      .flat(1),
  );
}
function A3(t) {
  return [...new Set(t)];
}
function O3(t) {
  let r = {},
    l = Object.keys(t).sort();
  for (let i of l) r[i] = t[i];
  return r;
}
function M3(t, r) {
  let l = new Set();
  return (
    new Set(r),
    t.reduce((i, s) => {
      let u = JSON.stringify(O3(s));
      return l.has(u) || (l.add(u), i.push({ key: u, link: s })), i;
    }, [])
  );
}
function $3(t) {
  let r =
    typeof t == 'string'
      ? new URL(t, typeof window > 'u' ? 'server://singlefetch/' : window.location.origin)
      : t;
  return (
    r.pathname === '/'
      ? (r.pathname = '_root.data')
      : (r.pathname = `${r.pathname.replace(/\/$/, '')}.data`),
    r
  );
}
function z3() {
  let t = C.useContext(Vl);
  return th(t, 'You must render this element inside a <DataRouterContext.Provider> element'), t;
}
function D3() {
  let t = C.useContext(nc);
  return (
    th(t, 'You must render this element inside a <DataRouterStateContext.Provider> element'), t
  );
}
var nh = C.createContext(void 0);
nh.displayName = 'FrameworkContext';
function S1() {
  let t = C.useContext(nh);
  return th(t, 'You must render this element inside a <HydratedRouter> element'), t;
}
function _3(t, r) {
  let l = C.useContext(nh),
    [i, s] = C.useState(!1),
    [u, f] = C.useState(!1),
    { onFocus: p, onBlur: m, onMouseEnter: h, onMouseLeave: y, onTouchStart: v } = r,
    b = C.useRef(null);
  C.useEffect(() => {
    if ((t === 'render' && f(!0), t === 'viewport')) {
      let A = (M) => {
          M.forEach((z) => {
            f(z.isIntersecting);
          });
        },
        O = new IntersectionObserver(A, { threshold: 0.5 });
      return (
        b.current && O.observe(b.current),
        () => {
          O.disconnect();
        }
      );
    }
  }, [t]),
    C.useEffect(() => {
      if (i) {
        let A = setTimeout(() => {
          f(!0);
        }, 100);
        return () => {
          clearTimeout(A);
        };
      }
    }, [i]);
  let w = () => {
      s(!0);
    },
    S = () => {
      s(!1), f(!1);
    };
  return l
    ? t !== 'intent'
      ? [u, b, {}]
      : [
          u,
          b,
          {
            onFocus: Zi(p, w),
            onBlur: Zi(m, S),
            onMouseEnter: Zi(h, w),
            onMouseLeave: Zi(y, S),
            onTouchStart: Zi(v, w),
          },
        ]
    : [!1, b, {}];
}
function Zi(t, r) {
  return (l) => {
    t && t(l), l.defaultPrevented || r(l);
  };
}
function B3({ page: t, ...r }) {
  let { router: l } = z3(),
    i = C.useMemo(() => u1(l.routes, t, l.basename), [l.routes, t, l.basename]);
  return i ? C.createElement(k3, { page: t, matches: i, ...r }) : null;
}
function N3(t) {
  let { manifest: r, routeModules: l } = S1(),
    [i, s] = C.useState([]);
  return (
    C.useEffect(() => {
      let u = !1;
      return (
        T3(t, r, l).then((f) => {
          u || s(f);
        }),
        () => {
          u = !0;
        }
      );
    }, [t, r, l]),
    i
  );
}
function k3({ page: t, matches: r, ...l }) {
  let i = Ha(),
    { manifest: s, routeModules: u } = S1(),
    { loaderData: f, matches: p } = D3(),
    m = C.useMemo(() => Tv(t, r, p, s, i, 'data'), [t, r, p, s, i]),
    h = C.useMemo(() => Tv(t, r, p, s, i, 'assets'), [t, r, p, s, i]),
    y = C.useMemo(() => {
      if (t === i.pathname + i.search + i.hash) return [];
      let w = new Set(),
        S = !1;
      if (
        (r.forEach((O) => {
          var z;
          let M = s.routes[O.route.id];
          !M ||
            !M.hasLoader ||
            ((!m.some((E) => E.route.id === O.route.id) &&
              O.route.id in f &&
              (z = u[O.route.id]) != null &&
              z.shouldRevalidate) ||
            M.hasClientLoader
              ? (S = !0)
              : w.add(O.route.id));
        }),
        w.size === 0)
      )
        return [];
      let A = $3(t);
      return (
        S &&
          w.size > 0 &&
          A.searchParams.set(
            '_routes',
            r
              .filter((O) => w.has(O.route.id))
              .map((O) => O.route.id)
              .join(','),
          ),
        [A.pathname + A.search]
      );
    }, [f, i, s, m, r, t, u]),
    v = C.useMemo(() => w3(h, s), [h, s]),
    b = N3(h);
  return C.createElement(
    C.Fragment,
    null,
    y.map((w) => C.createElement('link', { key: w, rel: 'prefetch', as: 'fetch', href: w, ...l })),
    v.map((w) => C.createElement('link', { key: w, rel: 'modulepreload', href: w, ...l })),
    b.map(({ key: w, link: S }) => C.createElement('link', { key: w, ...S })),
  );
}
function U3(...t) {
  return (r) => {
    t.forEach((l) => {
      typeof l == 'function' ? l(r) : l != null && (l.current = r);
    });
  };
}
var x1 =
  typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u';
try {
  x1 && (window.__reactRouterVersion = '7.1.1');
} catch {}
function j3({ basename: t, children: r, window: l }) {
  let i = C.useRef();
  i.current == null && (i.current = RM({ window: l, v5Compat: !0 }));
  let s = i.current,
    [u, f] = C.useState({ action: s.action, location: s.location }),
    p = C.useCallback(
      (m) => {
        C.startTransition(() => f(m));
      },
      [f],
    );
  return (
    C.useLayoutEffect(() => s.listen(p), [s, p]),
    C.createElement(p3, {
      basename: t,
      children: r,
      location: u.location,
      navigationType: u.action,
      navigator: s,
    })
  );
}
var E1 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ac = C.forwardRef(function (
    {
      onClick: r,
      discover: l = 'render',
      prefetch: i = 'none',
      relative: s,
      reloadDocument: u,
      replace: f,
      state: p,
      target: m,
      to: h,
      preventScrollReset: y,
      viewTransition: v,
      ...b
    },
    w,
  ) {
    let { basename: S } = C.useContext(nr),
      A = typeof h == 'string' && E1.test(h),
      O,
      M = !1;
    if (typeof h == 'string' && A && ((O = h), x1))
      try {
        let G = new URL(window.location.href),
          x = h.startsWith('//') ? new URL(G.protocol + h) : new URL(h),
          P = oa(x.pathname, S);
        x.origin === G.origin && P != null ? (h = P + x.search + x.hash) : (M = !0);
      } catch {
        er(
          !1,
          `<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
        );
      }
    let z = WM(h, { relative: s }),
      [E, D, R] = _3(i, b),
      U = q3(h, {
        replace: f,
        state: p,
        target: m,
        preventScrollReset: y,
        relative: s,
        viewTransition: v,
      });
    function q(G) {
      r && r(G), G.defaultPrevented || U(G);
    }
    let V = C.createElement('a', {
      ...b,
      ...R,
      href: O || z,
      onClick: M || u ? r : q,
      ref: U3(w, D),
      target: m,
      'data-discover': !A && l === 'render' ? 'true' : void 0,
    });
    return E && !A ? C.createElement(C.Fragment, null, V, C.createElement(B3, { page: z })) : V;
  });
ac.displayName = 'Link';
var L3 = C.forwardRef(function (
  {
    'aria-current': r = 'page',
    caseSensitive: l = !1,
    className: i = '',
    end: s = !1,
    style: u,
    to: f,
    viewTransition: p,
    children: m,
    ...h
  },
  y,
) {
  let v = $o(f, { relative: h.relative }),
    b = Ha(),
    w = C.useContext(nc),
    { navigator: S, basename: A } = C.useContext(nr),
    O = w != null && K3(v) && p === !0,
    M = S.encodeLocation ? S.encodeLocation(v).pathname : v.pathname,
    z = b.pathname,
    E = w && w.navigation && w.navigation.location ? w.navigation.location.pathname : null;
  l || ((z = z.toLowerCase()), (E = E ? E.toLowerCase() : null), (M = M.toLowerCase())),
    E && A && (E = oa(E, A) || E);
  const D = M !== '/' && M.endsWith('/') ? M.length - 1 : M.length;
  let R = z === M || (!s && z.startsWith(M) && z.charAt(D) === '/'),
    U = E != null && (E === M || (!s && E.startsWith(M) && E.charAt(M.length) === '/')),
    q = { isActive: R, isPending: U, isTransitioning: O },
    V = R ? r : void 0,
    G;
  typeof i == 'function'
    ? (G = i(q))
    : (G = [i, R ? 'active' : null, U ? 'pending' : null, O ? 'transitioning' : null]
        .filter(Boolean)
        .join(' '));
  let x = typeof u == 'function' ? u(q) : u;
  return C.createElement(
    ac,
    { ...h, 'aria-current': V, className: G, ref: y, style: x, to: f, viewTransition: p },
    typeof m == 'function' ? m(q) : m,
  );
});
L3.displayName = 'NavLink';
var H3 = C.forwardRef(
  (
    {
      discover: t = 'render',
      fetcherKey: r,
      navigate: l,
      reloadDocument: i,
      replace: s,
      state: u,
      method: f = iu,
      action: p,
      onSubmit: m,
      relative: h,
      preventScrollReset: y,
      viewTransition: v,
      ...b
    },
    w,
  ) => {
    let S = V3(),
      A = Y3(p, { relative: h }),
      O = f.toLowerCase() === 'get' ? 'get' : 'post',
      M = typeof p == 'string' && E1.test(p),
      z = (E) => {
        if ((m && m(E), E.defaultPrevented)) return;
        E.preventDefault();
        let D = E.nativeEvent.submitter,
          R = (D == null ? void 0 : D.getAttribute('formmethod')) || f;
        S(D || E.currentTarget, {
          fetcherKey: r,
          method: R,
          navigate: l,
          replace: s,
          state: u,
          relative: h,
          preventScrollReset: y,
          viewTransition: v,
        });
      };
    return C.createElement('form', {
      ref: w,
      method: O,
      action: A,
      onSubmit: i ? m : z,
      ...b,
      'data-discover': !M && t === 'render' ? 'true' : void 0,
    });
  },
);
H3.displayName = 'Form';
function P3(t) {
  return `${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function C1(t) {
  let r = C.useContext(Vl);
  return ut(r, P3(t)), r;
}
function q3(
  t,
  { target: r, replace: l, state: i, preventScrollReset: s, relative: u, viewTransition: f } = {},
) {
  let p = IM(),
    m = Ha(),
    h = $o(t, { relative: u });
  return C.useCallback(
    (y) => {
      if (b3(y, r)) {
        y.preventDefault();
        let v = l !== void 0 ? l : ho(m) === ho(h);
        p(t, { replace: v, state: i, preventScrollReset: s, relative: u, viewTransition: f });
      }
    },
    [m, p, h, l, i, r, t, s, u, f],
  );
}
var F3 = 0,
  G3 = () => `__${String(++F3)}__`;
function V3() {
  let { router: t } = C1('useSubmit'),
    { basename: r } = C.useContext(nr),
    l = u3();
  return C.useCallback(
    async (i, s = {}) => {
      let { action: u, method: f, encType: p, formData: m, body: h } = E3(i, r);
      if (s.navigate === !1) {
        let y = s.fetcherKey || G3();
        await t.fetch(y, l, s.action || u, {
          preventScrollReset: s.preventScrollReset,
          formData: m,
          body: h,
          formMethod: s.method || f,
          formEncType: s.encType || p,
          flushSync: s.flushSync,
        });
      } else
        await t.navigate(s.action || u, {
          preventScrollReset: s.preventScrollReset,
          formData: m,
          body: h,
          formMethod: s.method || f,
          formEncType: s.encType || p,
          replace: s.replace,
          state: s.state,
          fromRouteId: l,
          flushSync: s.flushSync,
          viewTransition: s.viewTransition,
        });
    },
    [t, r, l],
  );
}
function Y3(t, { relative: r } = {}) {
  let { basename: l } = C.useContext(nr),
    i = C.useContext(rr);
  ut(i, 'useFormAction must be used inside a RouteContext');
  let [s] = i.matches.slice(-1),
    u = { ...$o(t || '.', { relative: r }) },
    f = Ha();
  if (t == null) {
    u.search = f.search;
    let p = new URLSearchParams(u.search),
      m = p.getAll('index');
    if (m.some((y) => y === '')) {
      p.delete('index'), m.filter((v) => v).forEach((v) => p.append('index', v));
      let y = p.toString();
      u.search = y ? `?${y}` : '';
    }
  }
  return (
    (!t || t === '.') &&
      s.route.index &&
      (u.search = u.search ? u.search.replace(/^\?/, '?index&') : '?index'),
    l !== '/' && (u.pathname = u.pathname === '/' ? l : Rr([l, u.pathname])),
    ho(u)
  );
}
function K3(t, r = {}) {
  let l = C.useContext(m1);
  ut(
    l != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: i } = C1('useViewTransitionState'),
    s = $o(t, { relative: r.relative });
  if (!l.isTransitioning) return !1;
  let u = oa(l.currentLocation.pathname, i) || l.currentLocation.pathname,
    f = oa(l.nextLocation.pathname, i) || l.nextLocation.pathname;
  return xu(s.pathname, f) != null || xu(s.pathname, u) != null;
}
new TextEncoder();
const X3 = ({ posts: t }) =>
    L.jsxs(L.Fragment, {
      children: [
        L.jsx(EM, { level: 'h6', label: '投稿一覧', align: 'left' }),
        t
          .slice(0, 10)
          .map((r) =>
            L.jsx(
              ac,
              {
                to: `/posts/${r.id}`,
                children: L.jsx(xM, { userId: r.userId, title: r.title, body: r.body }, r.id),
              },
              r.id,
            ),
          ),
      ],
    }),
  Q3 = () => {
    const [t, r] = C.useState([]);
    return (
      C.useEffect(() => {
        (async () => {
          try {
            const i = await b5();
            r(i);
          } catch {
            console.error('投稿一覧の取得に失敗しました');
          }
        })();
      }, []),
      L.jsx(L.Fragment, { children: L.jsx(X3, { posts: t }) })
    );
  };
function W3() {
  return L.jsx(L.Fragment, { children: L.jsxs(Jd, { children: [L.jsx(i5, {}), L.jsx(Q3, {})] }) });
}
const I3 = async (t) =>
    await To.put(`/posts/${t.id}`, { userId: 1, id: t.id, title: t.title, body: t.body }),
  Z3 = async (t) => await To.delete(`/posts/${t}`);
function J3(t) {
  const [r, l] = C.useState(''),
    [i, s] = C.useState(''),
    [u, f] = C.useState(),
    [p, m] = C.useState(t.title),
    [h, y] = C.useState(t.body),
    A = u
      ? [
          {
            label: 'キャンセル',
            onClick: () => {
              m(r), y(i), f(!1);
            },
          },
          {
            label: '更新',
            onClick: () => {
              (async () => {
                try {
                  const M = { id: t.id, title: p, body: h };
                  console.log(M);
                  const z = await I3(M);
                  m(z.data.title), y(z.data.body), l(z.data.title), s(z.data.body), f(!1);
                } catch {
                  console.error('更新ボタン押下時処理に失敗しました。');
                }
              })();
            },
          },
        ]
      : [
          {
            label: '編集',
            onClick: () => {
              l(p), s(h), f(!0);
            },
          },
          {
            label: '削除',
            onClick: () => {
              (async () => {
                try {
                  console.log(t.id), await Z3(t.id);
                } catch {
                  console.error('削除ボタン押下時処理に失敗しました。');
                }
              })();
            },
          },
        ];
  return L.jsxs(L.Fragment, {
    children: [
      L.jsxs(gu, {
        sx: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          mb: 2,
        },
        children: [
          L.jsx(_p, { variant: 'h6', children: 'ユーザ名' }),
          L.jsx(gu, {
            sx: { display: 'flex', gap: 2 },
            children: A.map((O, M) =>
              L.jsx(Cb, { label: O.label, handleClickButton: O.onClick }, M),
            ),
          }),
        ],
      }),
      L.jsx(Zd, {
        id: 'title',
        label: 'タイトル',
        value: p,
        onChange: (O) => m(O.target.value),
        disabled: !u,
        fullWidth: !0,
        sx: { mb: 2 },
      }),
      L.jsx(Zd, {
        id: 'body',
        label: '本文',
        value: h,
        multiline: !0,
        onChange: (O) => y(O.target.value),
        disabled: !u,
        fullWidth: !0,
        sx: { mb: 2 },
      }),
    ],
  });
}
function e$() {
  return L.jsxs(L.Fragment, {
    children: [
      L.jsx('h3', { children: 'コメント一覧' }),
      L.jsxs('ol', {
        children: [
          L.jsx('li', { children: 'コメント１' }),
          L.jsx('li', { children: 'コメント２' }),
          L.jsx('li', { children: 'コメント３' }),
        ],
      }),
    ],
  });
}
const t$ = Uu(L.jsx('path', { d: 'M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z' }), 'ChevronLeft'),
  n$ = async (t) => (await yt.get(`https://jsonplaceholder.typicode.com/posts/${t}`)).data;
function r$() {
  const { id: t } = JM(),
    [r, l] = C.useState();
  return (
    C.useEffect(() => {
      (async () => {
        if (!t) {
          console.error('投稿IDが見つかりません');
          return;
        }
        try {
          const s = await n$(t);
          l(s);
        } catch {
          console.error('投稿が取得できませんでした');
        }
      })();
    }, [t]),
    L.jsxs('article', {
      children: [
        L.jsxs(Jd, {
          children: [
            L.jsx(ac, {
              to: '/',
              style: {
                display: 'flex',
                alignItems: 'center',
                color: 'black',
                textDecoration: 'none',
              },
              children: L.jsx(t$, {}),
            }),
            r ? L.jsx(J3, { id: Number(t), title: r.title, body: r.body }) : L.jsx(L.Fragment, {}),
          ],
        }),
        L.jsx(Jd, { children: L.jsx(e$, {}) }),
      ],
    })
  );
}
function a$() {
  return L.jsxs(L.Fragment, {
    children: [
      L.jsx('header', { children: L.jsx('h1', { children: 'React Practice' }) }),
      L.jsx('main', {
        children: L.jsx(j3, {
          children: L.jsxs(h3, {
            children: [
              L.jsx(up, { path: '/', element: L.jsx(W3, {}) }),
              L.jsx(up, { path: '/posts/:id', element: L.jsx(r$, {}) }),
            ],
          }),
        }),
      }),
    ],
  });
}
Xx.createRoot(document.getElementById('root')).render(
  L.jsx(C.StrictMode, { children: L.jsx(a$, {}) }),
);
