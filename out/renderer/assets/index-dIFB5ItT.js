var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
var react = { exports: {} };
var react_production_min = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReact_production_min;
function requireReact_production_min() {
  if (hasRequiredReact_production_min) return react_production_min;
  hasRequiredReact_production_min = 1;
  var l = Symbol.for('react.element'),
    n = Symbol.for('react.portal'),
    p = Symbol.for('react.fragment'),
    q = Symbol.for('react.strict_mode'),
    r = Symbol.for('react.profiler'),
    t = Symbol.for('react.provider'),
    u = Symbol.for('react.context'),
    v = Symbol.for('react.forward_ref'),
    w = Symbol.for('react.suspense'),
    x = Symbol.for('react.memo'),
    y = Symbol.for('react.lazy'),
    z = Symbol.iterator;
  function A(a) {
    if (null === a || 'object' !== typeof a) return null;
    a = (z && a[z]) || a['@@iterator'];
    return 'function' === typeof a ? a : null;
  }
  var B = {
      isMounted: function () {
        return false;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    C = Object.assign,
    D = {};
  function E(a, b, e) {
    this.props = a;
    this.context = b;
    this.refs = D;
    this.updater = e || B;
  }
  E.prototype.isReactComponent = {};
  E.prototype.setState = function (a, b) {
    if ('object' !== typeof a && 'function' !== typeof a && null != a)
      throw Error(
        'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
      );
    this.updater.enqueueSetState(this, a, b, 'setState');
  };
  E.prototype.forceUpdate = function (a) {
    this.updater.enqueueForceUpdate(this, a, 'forceUpdate');
  };
  function F() {}
  F.prototype = E.prototype;
  function G(a, b, e) {
    this.props = a;
    this.context = b;
    this.refs = D;
    this.updater = e || B;
  }
  var H = (G.prototype = new F());
  H.constructor = G;
  C(H, E.prototype);
  H.isPureReactComponent = true;
  var I = Array.isArray,
    J = Object.prototype.hasOwnProperty,
    K = { current: null },
    L = { key: true, ref: true, __self: true, __source: true };
  function M(a, b, e) {
    var d,
      c = {},
      k = null,
      h = null;
    if (null != b)
      for (d in (void 0 !== b.ref && (h = b.ref),
      void 0 !== b.key && (k = '' + b.key),
      b))
        J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
    var g = arguments.length - 2;
    if (1 === g) c.children = e;
    else if (1 < g) {
      for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
      c.children = f;
    }
    if (a && a.defaultProps)
      for (d in ((g = a.defaultProps), g)) void 0 === c[d] && (c[d] = g[d]);
    return {
      $$typeof: l,
      type: a,
      key: k,
      ref: h,
      props: c,
      _owner: K.current,
    };
  }
  function N(a, b) {
    return {
      $$typeof: l,
      type: a.type,
      key: b,
      ref: a.ref,
      props: a.props,
      _owner: a._owner,
    };
  }
  function O(a) {
    return 'object' === typeof a && null !== a && a.$$typeof === l;
  }
  function escape(a) {
    var b = { '=': '=0', ':': '=2' };
    return (
      '$' +
      a.replace(/[=:]/g, function (a2) {
        return b[a2];
      })
    );
  }
  var P = /\/+/g;
  function Q(a, b) {
    return 'object' === typeof a && null !== a && null != a.key
      ? escape('' + a.key)
      : b.toString(36);
  }
  function R(a, b, e, d, c) {
    var k = typeof a;
    if ('undefined' === k || 'boolean' === k) a = null;
    var h = false;
    if (null === a) h = true;
    else
      switch (k) {
        case 'string':
        case 'number':
          h = true;
          break;
        case 'object':
          switch (a.$$typeof) {
            case l:
            case n:
              h = true;
          }
      }
    if (h)
      return (
        (h = a),
        (c = c(h)),
        (a = '' === d ? '.' + Q(h, 0) : d),
        I(c)
          ? ((e = ''),
            null != a && (e = a.replace(P, '$&/') + '/'),
            R(c, b, e, '', function (a2) {
              return a2;
            }))
          : null != c &&
            (O(c) &&
              (c = N(
                c,
                e +
                  (!c.key || (h && h.key === c.key)
                    ? ''
                    : ('' + c.key).replace(P, '$&/') + '/') +
                  a
              )),
            b.push(c)),
        1
      );
    h = 0;
    d = '' === d ? '.' : d + ':';
    if (I(a))
      for (var g = 0; g < a.length; g++) {
        k = a[g];
        var f = d + Q(k, g);
        h += R(k, b, e, f, c);
      }
    else if (((f = A(a)), 'function' === typeof f))
      for (a = f.call(a), g = 0; !(k = a.next()).done; )
        (k = k.value), (f = d + Q(k, g++)), (h += R(k, b, e, f, c));
    else if ('object' === k)
      throw (
        ((b = String(a)),
        Error(
          'Objects are not valid as a React child (found: ' +
            ('[object Object]' === b
              ? 'object with keys {' + Object.keys(a).join(', ') + '}'
              : b) +
            '). If you meant to render a collection of children, use an array instead.'
        ))
      );
    return h;
  }
  function S(a, b, e) {
    if (null == a) return a;
    var d = [],
      c = 0;
    R(a, d, '', '', function (a2) {
      return b.call(e, a2, c++);
    });
    return d;
  }
  function T(a) {
    if (-1 === a._status) {
      var b = a._result;
      b = b();
      b.then(
        function (b2) {
          if (0 === a._status || -1 === a._status)
            (a._status = 1), (a._result = b2);
        },
        function (b2) {
          if (0 === a._status || -1 === a._status)
            (a._status = 2), (a._result = b2);
        }
      );
      -1 === a._status && ((a._status = 0), (a._result = b));
    }
    if (1 === a._status) return a._result.default;
    throw a._result;
  }
  var U = { current: null },
    V = { transition: null },
    W = {
      ReactCurrentDispatcher: U,
      ReactCurrentBatchConfig: V,
      ReactCurrentOwner: K,
    };
  function X() {
    throw Error('act(...) is not supported in production builds of React.');
  }
  react_production_min.Children = {
    map: S,
    forEach: function (a, b, e) {
      S(
        a,
        function () {
          b.apply(this, arguments);
        },
        e
      );
    },
    count: function (a) {
      var b = 0;
      S(a, function () {
        b++;
      });
      return b;
    },
    toArray: function (a) {
      return (
        S(a, function (a2) {
          return a2;
        }) || []
      );
    },
    only: function (a) {
      if (!O(a))
        throw Error(
          'React.Children.only expected to receive a single React element child.'
        );
      return a;
    },
  };
  react_production_min.Component = E;
  react_production_min.Fragment = p;
  react_production_min.Profiler = r;
  react_production_min.PureComponent = G;
  react_production_min.StrictMode = q;
  react_production_min.Suspense = w;
  react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
  react_production_min.act = X;
  react_production_min.cloneElement = function (a, b, e) {
    if (null === a || void 0 === a)
      throw Error(
        'React.cloneElement(...): The argument must be a React element, but you passed ' +
          a +
          '.'
      );
    var d = C({}, a.props),
      c = a.key,
      k = a.ref,
      h = a._owner;
    if (null != b) {
      void 0 !== b.ref && ((k = b.ref), (h = K.current));
      void 0 !== b.key && (c = '' + b.key);
      if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
      for (f in b)
        J.call(b, f) &&
          !L.hasOwnProperty(f) &&
          (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
    }
    var f = arguments.length - 2;
    if (1 === f) d.children = e;
    else if (1 < f) {
      g = Array(f);
      for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
      d.children = g;
    }
    return { $$typeof: l, type: a.type, key: c, ref: k, props: d, _owner: h };
  };
  react_production_min.createContext = function (a) {
    a = {
      $$typeof: u,
      _currentValue: a,
      _currentValue2: a,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    };
    a.Provider = { $$typeof: t, _context: a };
    return (a.Consumer = a);
  };
  react_production_min.createElement = M;
  react_production_min.createFactory = function (a) {
    var b = M.bind(null, a);
    b.type = a;
    return b;
  };
  react_production_min.createRef = function () {
    return { current: null };
  };
  react_production_min.forwardRef = function (a) {
    return { $$typeof: v, render: a };
  };
  react_production_min.isValidElement = O;
  react_production_min.lazy = function (a) {
    return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T };
  };
  react_production_min.memo = function (a, b) {
    return { $$typeof: x, type: a, compare: void 0 === b ? null : b };
  };
  react_production_min.startTransition = function (a) {
    var b = V.transition;
    V.transition = {};
    try {
      a();
    } finally {
      V.transition = b;
    }
  };
  react_production_min.unstable_act = X;
  react_production_min.useCallback = function (a, b) {
    return U.current.useCallback(a, b);
  };
  react_production_min.useContext = function (a) {
    return U.current.useContext(a);
  };
  react_production_min.useDebugValue = function () {};
  react_production_min.useDeferredValue = function (a) {
    return U.current.useDeferredValue(a);
  };
  react_production_min.useEffect = function (a, b) {
    return U.current.useEffect(a, b);
  };
  react_production_min.useId = function () {
    return U.current.useId();
  };
  react_production_min.useImperativeHandle = function (a, b, e) {
    return U.current.useImperativeHandle(a, b, e);
  };
  react_production_min.useInsertionEffect = function (a, b) {
    return U.current.useInsertionEffect(a, b);
  };
  react_production_min.useLayoutEffect = function (a, b) {
    return U.current.useLayoutEffect(a, b);
  };
  react_production_min.useMemo = function (a, b) {
    return U.current.useMemo(a, b);
  };
  react_production_min.useReducer = function (a, b, e) {
    return U.current.useReducer(a, b, e);
  };
  react_production_min.useRef = function (a) {
    return U.current.useRef(a);
  };
  react_production_min.useState = function (a) {
    return U.current.useState(a);
  };
  react_production_min.useSyncExternalStore = function (a, b, e) {
    return U.current.useSyncExternalStore(a, b, e);
  };
  react_production_min.useTransition = function () {
    return U.current.useTransition();
  };
  react_production_min.version = '18.3.1';
  return react_production_min;
}
var hasRequiredReact;
function requireReact() {
  if (hasRequiredReact) return react.exports;
  hasRequiredReact = 1;
  {
    react.exports = requireReact_production_min();
  }
  return react.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactJsxRuntime_production_min;
function requireReactJsxRuntime_production_min() {
  if (hasRequiredReactJsxRuntime_production_min)
    return reactJsxRuntime_production_min;
  hasRequiredReactJsxRuntime_production_min = 1;
  var f = requireReact(),
    k = Symbol.for('react.element'),
    l = Symbol.for('react.fragment'),
    m = Object.prototype.hasOwnProperty,
    n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    p = { key: true, ref: true, __self: true, __source: true };
  function q(c, a, g) {
    var b,
      d = {},
      e = null,
      h = null;
    void 0 !== g && (e = '' + g);
    void 0 !== a.key && (e = '' + a.key);
    void 0 !== a.ref && (h = a.ref);
    for (b in a) m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
    if (c && c.defaultProps)
      for (b in ((a = c.defaultProps), a)) void 0 === d[b] && (d[b] = a[b]);
    return {
      $$typeof: k,
      type: c,
      key: e,
      ref: h,
      props: d,
      _owner: n.current,
    };
  }
  reactJsxRuntime_production_min.Fragment = l;
  reactJsxRuntime_production_min.jsx = q;
  reactJsxRuntime_production_min.jsxs = q;
  return reactJsxRuntime_production_min;
}
var hasRequiredJsxRuntime;
function requireJsxRuntime() {
  if (hasRequiredJsxRuntime) return jsxRuntime.exports;
  hasRequiredJsxRuntime = 1;
  {
    jsxRuntime.exports = requireReactJsxRuntime_production_min();
  }
  return jsxRuntime.exports;
}
var jsxRuntimeExports = requireJsxRuntime();
var client = {};
var reactDom = { exports: {} };
var reactDom_production_min = {};
var scheduler = { exports: {} };
var scheduler_production_min = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredScheduler_production_min;
function requireScheduler_production_min() {
  if (hasRequiredScheduler_production_min) return scheduler_production_min;
  hasRequiredScheduler_production_min = 1;
  (function (exports) {
    function f(a, b) {
      var c = a.length;
      a.push(b);
      a: for (; 0 < c; ) {
        var d = (c - 1) >>> 1,
          e = a[d];
        if (0 < g(e, b)) (a[d] = b), (a[c] = e), (c = d);
        else break a;
      }
    }
    function h(a) {
      return 0 === a.length ? null : a[0];
    }
    function k(a) {
      if (0 === a.length) return null;
      var b = a[0],
        c = a.pop();
      if (c !== b) {
        a[0] = c;
        a: for (var d = 0, e = a.length, w = e >>> 1; d < w; ) {
          var m = 2 * (d + 1) - 1,
            C = a[m],
            n = m + 1,
            x = a[n];
          if (0 > g(C, c))
            n < e && 0 > g(x, C)
              ? ((a[d] = x), (a[n] = c), (d = n))
              : ((a[d] = C), (a[m] = c), (d = m));
          else if (n < e && 0 > g(x, c)) (a[d] = x), (a[n] = c), (d = n);
          else break a;
        }
      }
      return b;
    }
    function g(a, b) {
      var c = a.sortIndex - b.sortIndex;
      return 0 !== c ? c : a.id - b.id;
    }
    if (
      'object' === typeof performance &&
      'function' === typeof performance.now
    ) {
      var l = performance;
      exports.unstable_now = function () {
        return l.now();
      };
    } else {
      var p = Date,
        q = p.now();
      exports.unstable_now = function () {
        return p.now() - q;
      };
    }
    var r = [],
      t = [],
      u = 1,
      v = null,
      y = 3,
      z = false,
      A = false,
      B = false,
      D = 'function' === typeof setTimeout ? setTimeout : null,
      E = 'function' === typeof clearTimeout ? clearTimeout : null,
      F = 'undefined' !== typeof setImmediate ? setImmediate : null;
    'undefined' !== typeof navigator &&
      void 0 !== navigator.scheduling &&
      void 0 !== navigator.scheduling.isInputPending &&
      navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function G(a) {
      for (var b = h(t); null !== b; ) {
        if (null === b.callback) k(t);
        else if (b.startTime <= a)
          k(t), (b.sortIndex = b.expirationTime), f(r, b);
        else break;
        b = h(t);
      }
    }
    function H(a) {
      B = false;
      G(a);
      if (!A)
        if (null !== h(r)) (A = true), I(J);
        else {
          var b = h(t);
          null !== b && K(H, b.startTime - a);
        }
    }
    function J(a, b) {
      A = false;
      B && ((B = false), E(L), (L = -1));
      z = true;
      var c = y;
      try {
        G(b);
        for (
          v = h(r);
          null !== v && (!(v.expirationTime > b) || (a && !M()));

        ) {
          var d = v.callback;
          if ('function' === typeof d) {
            v.callback = null;
            y = v.priorityLevel;
            var e = d(v.expirationTime <= b);
            b = exports.unstable_now();
            'function' === typeof e ? (v.callback = e) : v === h(r) && k(r);
            G(b);
          } else k(r);
          v = h(r);
        }
        if (null !== v) var w = true;
        else {
          var m = h(t);
          null !== m && K(H, m.startTime - b);
          w = false;
        }
        return w;
      } finally {
        (v = null), (y = c), (z = false);
      }
    }
    var N = false,
      O = null,
      L = -1,
      P = 5,
      Q = -1;
    function M() {
      return exports.unstable_now() - Q < P ? false : true;
    }
    function R() {
      if (null !== O) {
        var a = exports.unstable_now();
        Q = a;
        var b = true;
        try {
          b = O(true, a);
        } finally {
          b ? S() : ((N = false), (O = null));
        }
      } else N = false;
    }
    var S;
    if ('function' === typeof F)
      S = function () {
        F(R);
      };
    else if ('undefined' !== typeof MessageChannel) {
      var T = new MessageChannel(),
        U = T.port2;
      T.port1.onmessage = R;
      S = function () {
        U.postMessage(null);
      };
    } else
      S = function () {
        D(R, 0);
      };
    function I(a) {
      O = a;
      N || ((N = true), S());
    }
    function K(a, b) {
      L = D(function () {
        a(exports.unstable_now());
      }, b);
    }
    exports.unstable_IdlePriority = 5;
    exports.unstable_ImmediatePriority = 1;
    exports.unstable_LowPriority = 4;
    exports.unstable_NormalPriority = 3;
    exports.unstable_Profiling = null;
    exports.unstable_UserBlockingPriority = 2;
    exports.unstable_cancelCallback = function (a) {
      a.callback = null;
    };
    exports.unstable_continueExecution = function () {
      A || z || ((A = true), I(J));
    };
    exports.unstable_forceFrameRate = function (a) {
      0 > a || 125 < a
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (P = 0 < a ? Math.floor(1e3 / a) : 5);
    };
    exports.unstable_getCurrentPriorityLevel = function () {
      return y;
    };
    exports.unstable_getFirstCallbackNode = function () {
      return h(r);
    };
    exports.unstable_next = function (a) {
      switch (y) {
        case 1:
        case 2:
        case 3:
          var b = 3;
          break;
        default:
          b = y;
      }
      var c = y;
      y = b;
      try {
        return a();
      } finally {
        y = c;
      }
    };
    exports.unstable_pauseExecution = function () {};
    exports.unstable_requestPaint = function () {};
    exports.unstable_runWithPriority = function (a, b) {
      switch (a) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          a = 3;
      }
      var c = y;
      y = a;
      try {
        return b();
      } finally {
        y = c;
      }
    };
    exports.unstable_scheduleCallback = function (a, b, c) {
      var d = exports.unstable_now();
      'object' === typeof c && null !== c
        ? ((c = c.delay), (c = 'number' === typeof c && 0 < c ? d + c : d))
        : (c = d);
      switch (a) {
        case 1:
          var e = -1;
          break;
        case 2:
          e = 250;
          break;
        case 5:
          e = 1073741823;
          break;
        case 4:
          e = 1e4;
          break;
        default:
          e = 5e3;
      }
      e = c + e;
      a = {
        id: u++,
        callback: b,
        priorityLevel: a,
        startTime: c,
        expirationTime: e,
        sortIndex: -1,
      };
      c > d
        ? ((a.sortIndex = c),
          f(t, a),
          null === h(r) &&
            a === h(t) &&
            (B ? (E(L), (L = -1)) : (B = true), K(H, c - d)))
        : ((a.sortIndex = e), f(r, a), A || z || ((A = true), I(J)));
      return a;
    };
    exports.unstable_shouldYield = M;
    exports.unstable_wrapCallback = function (a) {
      var b = y;
      return function () {
        var c = y;
        y = b;
        try {
          return a.apply(this, arguments);
        } finally {
          y = c;
        }
      };
    };
  })(scheduler_production_min);
  return scheduler_production_min;
}
var hasRequiredScheduler;
function requireScheduler() {
  if (hasRequiredScheduler) return scheduler.exports;
  hasRequiredScheduler = 1;
  {
    scheduler.exports = requireScheduler_production_min();
  }
  return scheduler.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactDom_production_min;
function requireReactDom_production_min() {
  if (hasRequiredReactDom_production_min) return reactDom_production_min;
  hasRequiredReactDom_production_min = 1;
  var aa = requireReact(),
    ca = requireScheduler();
  function p(a) {
    for (
      var b = 'https://reactjs.org/docs/error-decoder.html?invariant=' + a,
        c = 1;
      c < arguments.length;
      c++
    )
      b += '&args[]=' + encodeURIComponent(arguments[c]);
    return (
      'Minified React error #' +
      a +
      '; visit ' +
      b +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  var da = /* @__PURE__ */ new Set(),
    ea = {};
  function fa(a, b) {
    ha(a, b);
    ha(a + 'Capture', b);
  }
  function ha(a, b) {
    ea[a] = b;
    for (a = 0; a < b.length; a++) da.add(b[a]);
  }
  var ia = !(
      'undefined' === typeof window ||
      'undefined' === typeof window.document ||
      'undefined' === typeof window.document.createElement
    ),
    ja = Object.prototype.hasOwnProperty,
    ka =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    la = {},
    ma = {};
  function oa(a) {
    if (ja.call(ma, a)) return true;
    if (ja.call(la, a)) return false;
    if (ka.test(a)) return (ma[a] = true);
    la[a] = true;
    return false;
  }
  function pa(a, b, c, d) {
    if (null !== c && 0 === c.type) return false;
    switch (typeof b) {
      case 'function':
      case 'symbol':
        return true;
      case 'boolean':
        if (d) return false;
        if (null !== c) return !c.acceptsBooleans;
        a = a.toLowerCase().slice(0, 5);
        return 'data-' !== a && 'aria-' !== a;
      default:
        return false;
    }
  }
  function qa(a, b, c, d) {
    if (null === b || 'undefined' === typeof b || pa(a, b, c, d)) return true;
    if (d) return false;
    if (null !== c)
      switch (c.type) {
        case 3:
          return !b;
        case 4:
          return false === b;
        case 5:
          return isNaN(b);
        case 6:
          return isNaN(b) || 1 > b;
      }
    return false;
  }
  function v(a, b, c, d, e, f, g) {
    this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
    this.attributeName = d;
    this.attributeNamespace = e;
    this.mustUseProperty = c;
    this.propertyName = a;
    this.type = b;
    this.sanitizeURL = f;
    this.removeEmptyString = g;
  }
  var z = {};
  'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (a) {
      z[a] = new v(a, 0, false, a, null, false, false);
    });
  [
    ['acceptCharset', 'accept-charset'],
    ['className', 'class'],
    ['htmlFor', 'for'],
    ['httpEquiv', 'http-equiv'],
  ].forEach(function (a) {
    var b = a[0];
    z[b] = new v(b, 1, false, a[1], null, false, false);
  });
  ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (a) {
    z[a] = new v(a, 2, false, a.toLowerCase(), null, false, false);
  });
  [
    'autoReverse',
    'externalResourcesRequired',
    'focusable',
    'preserveAlpha',
  ].forEach(function (a) {
    z[a] = new v(a, 2, false, a, null, false, false);
  });
  'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
    .split(' ')
    .forEach(function (a) {
      z[a] = new v(a, 3, false, a.toLowerCase(), null, false, false);
    });
  ['checked', 'multiple', 'muted', 'selected'].forEach(function (a) {
    z[a] = new v(a, 3, true, a, null, false, false);
  });
  ['capture', 'download'].forEach(function (a) {
    z[a] = new v(a, 4, false, a, null, false, false);
  });
  ['cols', 'rows', 'size', 'span'].forEach(function (a) {
    z[a] = new v(a, 6, false, a, null, false, false);
  });
  ['rowSpan', 'start'].forEach(function (a) {
    z[a] = new v(a, 5, false, a.toLowerCase(), null, false, false);
  });
  var ra = /[\-:]([a-z])/g;
  function sa(a) {
    return a[1].toUpperCase();
  }
  'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (a) {
      var b = a.replace(ra, sa);
      z[b] = new v(b, 1, false, a, null, false, false);
    });
  'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
    .split(' ')
    .forEach(function (a) {
      var b = a.replace(ra, sa);
      z[b] = new v(
        b,
        1,
        false,
        a,
        'http://www.w3.org/1999/xlink',
        false,
        false
      );
    });
  ['xml:base', 'xml:lang', 'xml:space'].forEach(function (a) {
    var b = a.replace(ra, sa);
    z[b] = new v(
      b,
      1,
      false,
      a,
      'http://www.w3.org/XML/1998/namespace',
      false,
      false
    );
  });
  ['tabIndex', 'crossOrigin'].forEach(function (a) {
    z[a] = new v(a, 1, false, a.toLowerCase(), null, false, false);
  });
  z.xlinkHref = new v(
    'xlinkHref',
    1,
    false,
    'xlink:href',
    'http://www.w3.org/1999/xlink',
    true,
    false
  );
  ['src', 'href', 'action', 'formAction'].forEach(function (a) {
    z[a] = new v(a, 1, false, a.toLowerCase(), null, true, true);
  });
  function ta(a, b, c, d) {
    var e = z.hasOwnProperty(b) ? z[b] : null;
    if (
      null !== e
        ? 0 !== e.type
        : d ||
          !(2 < b.length) ||
          ('o' !== b[0] && 'O' !== b[0]) ||
          ('n' !== b[1] && 'N' !== b[1])
    )
      qa(b, c, e, d) && (c = null),
        d || null === e
          ? oa(b) &&
            (null === c ? a.removeAttribute(b) : a.setAttribute(b, '' + c))
          : e.mustUseProperty
            ? (a[e.propertyName] = null === c ? (3 === e.type ? false : '') : c)
            : ((b = e.attributeName),
              (d = e.attributeNamespace),
              null === c
                ? a.removeAttribute(b)
                : ((e = e.type),
                  (c = 3 === e || (4 === e && true === c) ? '' : '' + c),
                  d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
  }
  var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    va = Symbol.for('react.element'),
    wa = Symbol.for('react.portal'),
    ya = Symbol.for('react.fragment'),
    za = Symbol.for('react.strict_mode'),
    Aa = Symbol.for('react.profiler'),
    Ba = Symbol.for('react.provider'),
    Ca = Symbol.for('react.context'),
    Da = Symbol.for('react.forward_ref'),
    Ea = Symbol.for('react.suspense'),
    Fa = Symbol.for('react.suspense_list'),
    Ga = Symbol.for('react.memo'),
    Ha = Symbol.for('react.lazy');
  var Ia = Symbol.for('react.offscreen');
  var Ja = Symbol.iterator;
  function Ka(a) {
    if (null === a || 'object' !== typeof a) return null;
    a = (Ja && a[Ja]) || a['@@iterator'];
    return 'function' === typeof a ? a : null;
  }
  var A = Object.assign,
    La;
  function Ma(a) {
    if (void 0 === La)
      try {
        throw Error();
      } catch (c) {
        var b = c.stack.trim().match(/\n( *(at )?)/);
        La = (b && b[1]) || '';
      }
    return '\n' + La + a;
  }
  var Na = false;
  function Oa(a, b) {
    if (!a || Na) return '';
    Na = true;
    var c = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (b)
        if (
          ((b = function () {
            throw Error();
          }),
          Object.defineProperty(b.prototype, 'props', {
            set: function () {
              throw Error();
            },
          }),
          'object' === typeof Reflect && Reflect.construct)
        ) {
          try {
            Reflect.construct(b, []);
          } catch (l) {
            var d = l;
          }
          Reflect.construct(a, [], b);
        } else {
          try {
            b.call();
          } catch (l) {
            d = l;
          }
          a.call(b.prototype);
        }
      else {
        try {
          throw Error();
        } catch (l) {
          d = l;
        }
        a();
      }
    } catch (l) {
      if (l && d && 'string' === typeof l.stack) {
        for (
          var e = l.stack.split('\n'),
            f = d.stack.split('\n'),
            g = e.length - 1,
            h = f.length - 1;
          1 <= g && 0 <= h && e[g] !== f[h];

        )
          h--;
        for (; 1 <= g && 0 <= h; g--, h--)
          if (e[g] !== f[h]) {
            if (1 !== g || 1 !== h) {
              do
                if ((g--, h--, 0 > h || e[g] !== f[h])) {
                  var k = '\n' + e[g].replace(' at new ', ' at ');
                  a.displayName &&
                    k.includes('<anonymous>') &&
                    (k = k.replace('<anonymous>', a.displayName));
                  return k;
                }
              while (1 <= g && 0 <= h);
            }
            break;
          }
      }
    } finally {
      (Na = false), (Error.prepareStackTrace = c);
    }
    return (a = a ? a.displayName || a.name : '') ? Ma(a) : '';
  }
  function Pa(a) {
    switch (a.tag) {
      case 5:
        return Ma(a.type);
      case 16:
        return Ma('Lazy');
      case 13:
        return Ma('Suspense');
      case 19:
        return Ma('SuspenseList');
      case 0:
      case 2:
      case 15:
        return (a = Oa(a.type, false)), a;
      case 11:
        return (a = Oa(a.type.render, false)), a;
      case 1:
        return (a = Oa(a.type, true)), a;
      default:
        return '';
    }
  }
  function Qa(a) {
    if (null == a) return null;
    if ('function' === typeof a) return a.displayName || a.name || null;
    if ('string' === typeof a) return a;
    switch (a) {
      case ya:
        return 'Fragment';
      case wa:
        return 'Portal';
      case Aa:
        return 'Profiler';
      case za:
        return 'StrictMode';
      case Ea:
        return 'Suspense';
      case Fa:
        return 'SuspenseList';
    }
    if ('object' === typeof a)
      switch (a.$$typeof) {
        case Ca:
          return (a.displayName || 'Context') + '.Consumer';
        case Ba:
          return (a._context.displayName || 'Context') + '.Provider';
        case Da:
          var b = a.render;
          a = a.displayName;
          a ||
            ((a = b.displayName || b.name || ''),
            (a = '' !== a ? 'ForwardRef(' + a + ')' : 'ForwardRef'));
          return a;
        case Ga:
          return (
            (b = a.displayName || null), null !== b ? b : Qa(a.type) || 'Memo'
          );
        case Ha:
          b = a._payload;
          a = a._init;
          try {
            return Qa(a(b));
          } catch (c) {}
      }
    return null;
  }
  function Ra(a) {
    var b = a.type;
    switch (a.tag) {
      case 24:
        return 'Cache';
      case 9:
        return (b.displayName || 'Context') + '.Consumer';
      case 10:
        return (b._context.displayName || 'Context') + '.Provider';
      case 18:
        return 'DehydratedFragment';
      case 11:
        return (
          (a = b.render),
          (a = a.displayName || a.name || ''),
          b.displayName || ('' !== a ? 'ForwardRef(' + a + ')' : 'ForwardRef')
        );
      case 7:
        return 'Fragment';
      case 5:
        return b;
      case 4:
        return 'Portal';
      case 3:
        return 'Root';
      case 6:
        return 'Text';
      case 16:
        return Qa(b);
      case 8:
        return b === za ? 'StrictMode' : 'Mode';
      case 22:
        return 'Offscreen';
      case 12:
        return 'Profiler';
      case 21:
        return 'Scope';
      case 13:
        return 'Suspense';
      case 19:
        return 'SuspenseList';
      case 25:
        return 'TracingMarker';
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if ('function' === typeof b) return b.displayName || b.name || null;
        if ('string' === typeof b) return b;
    }
    return null;
  }
  function Sa(a) {
    switch (typeof a) {
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return a;
      case 'object':
        return a;
      default:
        return '';
    }
  }
  function Ta(a) {
    var b = a.type;
    return (
      (a = a.nodeName) &&
      'input' === a.toLowerCase() &&
      ('checkbox' === b || 'radio' === b)
    );
  }
  function Ua(a) {
    var b = Ta(a) ? 'checked' : 'value',
      c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b),
      d = '' + a[b];
    if (
      !a.hasOwnProperty(b) &&
      'undefined' !== typeof c &&
      'function' === typeof c.get &&
      'function' === typeof c.set
    ) {
      var e = c.get,
        f = c.set;
      Object.defineProperty(a, b, {
        configurable: true,
        get: function () {
          return e.call(this);
        },
        set: function (a2) {
          d = '' + a2;
          f.call(this, a2);
        },
      });
      Object.defineProperty(a, b, { enumerable: c.enumerable });
      return {
        getValue: function () {
          return d;
        },
        setValue: function (a2) {
          d = '' + a2;
        },
        stopTracking: function () {
          a._valueTracker = null;
          delete a[b];
        },
      };
    }
  }
  function Va(a) {
    a._valueTracker || (a._valueTracker = Ua(a));
  }
  function Wa(a) {
    if (!a) return false;
    var b = a._valueTracker;
    if (!b) return true;
    var c = b.getValue();
    var d = '';
    a && (d = Ta(a) ? (a.checked ? 'true' : 'false') : a.value);
    a = d;
    return a !== c ? (b.setValue(a), true) : false;
  }
  function Xa(a) {
    a = a || ('undefined' !== typeof document ? document : void 0);
    if ('undefined' === typeof a) return null;
    try {
      return a.activeElement || a.body;
    } catch (b) {
      return a.body;
    }
  }
  function Ya(a, b) {
    var c = b.checked;
    return A({}, b, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: null != c ? c : a._wrapperState.initialChecked,
    });
  }
  function Za(a, b) {
    var c = null == b.defaultValue ? '' : b.defaultValue,
      d = null != b.checked ? b.checked : b.defaultChecked;
    c = Sa(null != b.value ? b.value : c);
    a._wrapperState = {
      initialChecked: d,
      initialValue: c,
      controlled:
        'checkbox' === b.type || 'radio' === b.type
          ? null != b.checked
          : null != b.value,
    };
  }
  function ab(a, b) {
    b = b.checked;
    null != b && ta(a, 'checked', b, false);
  }
  function bb(a, b) {
    ab(a, b);
    var c = Sa(b.value),
      d = b.type;
    if (null != c)
      if ('number' === d) {
        if ((0 === c && '' === a.value) || a.value != c) a.value = '' + c;
      } else a.value !== '' + c && (a.value = '' + c);
    else if ('submit' === d || 'reset' === d) {
      a.removeAttribute('value');
      return;
    }
    b.hasOwnProperty('value')
      ? cb(a, b.type, c)
      : b.hasOwnProperty('defaultValue') && cb(a, b.type, Sa(b.defaultValue));
    null == b.checked &&
      null != b.defaultChecked &&
      (a.defaultChecked = !!b.defaultChecked);
  }
  function db(a, b, c) {
    if (b.hasOwnProperty('value') || b.hasOwnProperty('defaultValue')) {
      var d = b.type;
      if (
        !(
          ('submit' !== d && 'reset' !== d) ||
          (void 0 !== b.value && null !== b.value)
        )
      )
        return;
      b = '' + a._wrapperState.initialValue;
      c || b === a.value || (a.value = b);
      a.defaultValue = b;
    }
    c = a.name;
    '' !== c && (a.name = '');
    a.defaultChecked = !!a._wrapperState.initialChecked;
    '' !== c && (a.name = c);
  }
  function cb(a, b, c) {
    if ('number' !== b || Xa(a.ownerDocument) !== a)
      null == c
        ? (a.defaultValue = '' + a._wrapperState.initialValue)
        : a.defaultValue !== '' + c && (a.defaultValue = '' + c);
  }
  var eb = Array.isArray;
  function fb(a, b, c, d) {
    a = a.options;
    if (b) {
      b = {};
      for (var e = 0; e < c.length; e++) b['$' + c[e]] = true;
      for (c = 0; c < a.length; c++)
        (e = b.hasOwnProperty('$' + a[c].value)),
          a[c].selected !== e && (a[c].selected = e),
          e && d && (a[c].defaultSelected = true);
    } else {
      c = '' + Sa(c);
      b = null;
      for (e = 0; e < a.length; e++) {
        if (a[e].value === c) {
          a[e].selected = true;
          d && (a[e].defaultSelected = true);
          return;
        }
        null !== b || a[e].disabled || (b = a[e]);
      }
      null !== b && (b.selected = true);
    }
  }
  function gb(a, b) {
    if (null != b.dangerouslySetInnerHTML) throw Error(p(91));
    return A({}, b, {
      value: void 0,
      defaultValue: void 0,
      children: '' + a._wrapperState.initialValue,
    });
  }
  function hb(a, b) {
    var c = b.value;
    if (null == c) {
      c = b.children;
      b = b.defaultValue;
      if (null != c) {
        if (null != b) throw Error(p(92));
        if (eb(c)) {
          if (1 < c.length) throw Error(p(93));
          c = c[0];
        }
        b = c;
      }
      null == b && (b = '');
      c = b;
    }
    a._wrapperState = { initialValue: Sa(c) };
  }
  function ib(a, b) {
    var c = Sa(b.value),
      d = Sa(b.defaultValue);
    null != c &&
      ((c = '' + c),
      c !== a.value && (a.value = c),
      null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
    null != d && (a.defaultValue = '' + d);
  }
  function jb(a) {
    var b = a.textContent;
    b === a._wrapperState.initialValue &&
      '' !== b &&
      null !== b &&
      (a.value = b);
  }
  function kb(a) {
    switch (a) {
      case 'svg':
        return 'http://www.w3.org/2000/svg';
      case 'math':
        return 'http://www.w3.org/1998/Math/MathML';
      default:
        return 'http://www.w3.org/1999/xhtml';
    }
  }
  function lb(a, b) {
    return null == a || 'http://www.w3.org/1999/xhtml' === a
      ? kb(b)
      : 'http://www.w3.org/2000/svg' === a && 'foreignObject' === b
        ? 'http://www.w3.org/1999/xhtml'
        : a;
  }
  var mb,
    nb = (function (a) {
      return 'undefined' !== typeof MSApp && MSApp.execUnsafeLocalFunction
        ? function (b, c, d, e) {
            MSApp.execUnsafeLocalFunction(function () {
              return a(b, c, d, e);
            });
          }
        : a;
    })(function (a, b) {
      if ('http://www.w3.org/2000/svg' !== a.namespaceURI || 'innerHTML' in a)
        a.innerHTML = b;
      else {
        mb = mb || document.createElement('div');
        mb.innerHTML = '<svg>' + b.valueOf().toString() + '</svg>';
        for (b = mb.firstChild; a.firstChild; ) a.removeChild(a.firstChild);
        for (; b.firstChild; ) a.appendChild(b.firstChild);
      }
    });
  function ob(a, b) {
    if (b) {
      var c = a.firstChild;
      if (c && c === a.lastChild && 3 === c.nodeType) {
        c.nodeValue = b;
        return;
      }
    }
    a.textContent = b;
  }
  var pb = {
      animationIterationCount: true,
      aspectRatio: true,
      borderImageOutset: true,
      borderImageSlice: true,
      borderImageWidth: true,
      boxFlex: true,
      boxFlexGroup: true,
      boxOrdinalGroup: true,
      columnCount: true,
      columns: true,
      flex: true,
      flexGrow: true,
      flexPositive: true,
      flexShrink: true,
      flexNegative: true,
      flexOrder: true,
      gridArea: true,
      gridRow: true,
      gridRowEnd: true,
      gridRowSpan: true,
      gridRowStart: true,
      gridColumn: true,
      gridColumnEnd: true,
      gridColumnSpan: true,
      gridColumnStart: true,
      fontWeight: true,
      lineClamp: true,
      lineHeight: true,
      opacity: true,
      order: true,
      orphans: true,
      tabSize: true,
      widows: true,
      zIndex: true,
      zoom: true,
      fillOpacity: true,
      floodOpacity: true,
      stopOpacity: true,
      strokeDasharray: true,
      strokeDashoffset: true,
      strokeMiterlimit: true,
      strokeOpacity: true,
      strokeWidth: true,
    },
    qb = ['Webkit', 'ms', 'Moz', 'O'];
  Object.keys(pb).forEach(function (a) {
    qb.forEach(function (b) {
      b = b + a.charAt(0).toUpperCase() + a.substring(1);
      pb[b] = pb[a];
    });
  });
  function rb(a, b, c) {
    return null == b || 'boolean' === typeof b || '' === b
      ? ''
      : c || 'number' !== typeof b || 0 === b || (pb.hasOwnProperty(a) && pb[a])
        ? ('' + b).trim()
        : b + 'px';
  }
  function sb(a, b) {
    a = a.style;
    for (var c in b)
      if (b.hasOwnProperty(c)) {
        var d = 0 === c.indexOf('--'),
          e = rb(c, b[c], d);
        'float' === c && (c = 'cssFloat');
        d ? a.setProperty(c, e) : (a[c] = e);
      }
  }
  var tb = A(
    { menuitem: true },
    {
      area: true,
      base: true,
      br: true,
      col: true,
      embed: true,
      hr: true,
      img: true,
      input: true,
      keygen: true,
      link: true,
      meta: true,
      param: true,
      source: true,
      track: true,
      wbr: true,
    }
  );
  function ub(a, b) {
    if (b) {
      if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML))
        throw Error(p(137, a));
      if (null != b.dangerouslySetInnerHTML) {
        if (null != b.children) throw Error(p(60));
        if (
          'object' !== typeof b.dangerouslySetInnerHTML ||
          !('__html' in b.dangerouslySetInnerHTML)
        )
          throw Error(p(61));
      }
      if (null != b.style && 'object' !== typeof b.style) throw Error(p(62));
    }
  }
  function vb(a, b) {
    if (-1 === a.indexOf('-')) return 'string' === typeof b.is;
    switch (a) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return false;
      default:
        return true;
    }
  }
  var wb = null;
  function xb(a) {
    a = a.target || a.srcElement || window;
    a.correspondingUseElement && (a = a.correspondingUseElement);
    return 3 === a.nodeType ? a.parentNode : a;
  }
  var yb = null,
    zb = null,
    Ab = null;
  function Bb(a) {
    if ((a = Cb(a))) {
      if ('function' !== typeof yb) throw Error(p(280));
      var b = a.stateNode;
      b && ((b = Db(b)), yb(a.stateNode, a.type, b));
    }
  }
  function Eb(a) {
    zb ? (Ab ? Ab.push(a) : (Ab = [a])) : (zb = a);
  }
  function Fb() {
    if (zb) {
      var a = zb,
        b = Ab;
      Ab = zb = null;
      Bb(a);
      if (b) for (a = 0; a < b.length; a++) Bb(b[a]);
    }
  }
  function Gb(a, b) {
    return a(b);
  }
  function Hb() {}
  var Ib = false;
  function Jb(a, b, c) {
    if (Ib) return a(b, c);
    Ib = true;
    try {
      return Gb(a, b, c);
    } finally {
      if (((Ib = false), null !== zb || null !== Ab)) Hb(), Fb();
    }
  }
  function Kb(a, b) {
    var c = a.stateNode;
    if (null === c) return null;
    var d = Db(c);
    if (null === d) return null;
    c = d[b];
    a: switch (b) {
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
        (d = !d.disabled) ||
          ((a = a.type),
          (d = !(
            'button' === a ||
            'input' === a ||
            'select' === a ||
            'textarea' === a
          )));
        a = !d;
        break a;
      default:
        a = false;
    }
    if (a) return null;
    if (c && 'function' !== typeof c) throw Error(p(231, b, typeof c));
    return c;
  }
  var Lb = false;
  if (ia)
    try {
      var Mb = {};
      Object.defineProperty(Mb, 'passive', {
        get: function () {
          Lb = true;
        },
      });
      window.addEventListener('test', Mb, Mb);
      window.removeEventListener('test', Mb, Mb);
    } catch (a) {
      Lb = false;
    }
  function Nb(a, b, c, d, e, f, g, h, k) {
    var l = Array.prototype.slice.call(arguments, 3);
    try {
      b.apply(c, l);
    } catch (m) {
      this.onError(m);
    }
  }
  var Ob = false,
    Pb = null,
    Qb = false,
    Rb = null,
    Sb = {
      onError: function (a) {
        Ob = true;
        Pb = a;
      },
    };
  function Tb(a, b, c, d, e, f, g, h, k) {
    Ob = false;
    Pb = null;
    Nb.apply(Sb, arguments);
  }
  function Ub(a, b, c, d, e, f, g, h, k) {
    Tb.apply(this, arguments);
    if (Ob) {
      if (Ob) {
        var l = Pb;
        Ob = false;
        Pb = null;
      } else throw Error(p(198));
      Qb || ((Qb = true), (Rb = l));
    }
  }
  function Vb(a) {
    var b = a,
      c = a;
    if (a.alternate) for (; b.return; ) b = b.return;
    else {
      a = b;
      do (b = a), 0 !== (b.flags & 4098) && (c = b.return), (a = b.return);
      while (a);
    }
    return 3 === b.tag ? c : null;
  }
  function Wb(a) {
    if (13 === a.tag) {
      var b = a.memoizedState;
      null === b && ((a = a.alternate), null !== a && (b = a.memoizedState));
      if (null !== b) return b.dehydrated;
    }
    return null;
  }
  function Xb(a) {
    if (Vb(a) !== a) throw Error(p(188));
  }
  function Yb(a) {
    var b = a.alternate;
    if (!b) {
      b = Vb(a);
      if (null === b) throw Error(p(188));
      return b !== a ? null : a;
    }
    for (var c = a, d = b; ; ) {
      var e = c.return;
      if (null === e) break;
      var f = e.alternate;
      if (null === f) {
        d = e.return;
        if (null !== d) {
          c = d;
          continue;
        }
        break;
      }
      if (e.child === f.child) {
        for (f = e.child; f; ) {
          if (f === c) return Xb(e), a;
          if (f === d) return Xb(e), b;
          f = f.sibling;
        }
        throw Error(p(188));
      }
      if (c.return !== d.return) (c = e), (d = f);
      else {
        for (var g = false, h = e.child; h; ) {
          if (h === c) {
            g = true;
            c = e;
            d = f;
            break;
          }
          if (h === d) {
            g = true;
            d = e;
            c = f;
            break;
          }
          h = h.sibling;
        }
        if (!g) {
          for (h = f.child; h; ) {
            if (h === c) {
              g = true;
              c = f;
              d = e;
              break;
            }
            if (h === d) {
              g = true;
              d = f;
              c = e;
              break;
            }
            h = h.sibling;
          }
          if (!g) throw Error(p(189));
        }
      }
      if (c.alternate !== d) throw Error(p(190));
    }
    if (3 !== c.tag) throw Error(p(188));
    return c.stateNode.current === c ? a : b;
  }
  function Zb(a) {
    a = Yb(a);
    return null !== a ? $b(a) : null;
  }
  function $b(a) {
    if (5 === a.tag || 6 === a.tag) return a;
    for (a = a.child; null !== a; ) {
      var b = $b(a);
      if (null !== b) return b;
      a = a.sibling;
    }
    return null;
  }
  var ac = ca.unstable_scheduleCallback,
    bc = ca.unstable_cancelCallback,
    cc = ca.unstable_shouldYield,
    dc = ca.unstable_requestPaint,
    B = ca.unstable_now,
    ec = ca.unstable_getCurrentPriorityLevel,
    fc = ca.unstable_ImmediatePriority,
    gc = ca.unstable_UserBlockingPriority,
    hc = ca.unstable_NormalPriority,
    ic = ca.unstable_LowPriority,
    jc = ca.unstable_IdlePriority,
    kc = null,
    lc = null;
  function mc(a) {
    if (lc && 'function' === typeof lc.onCommitFiberRoot)
      try {
        lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
      } catch (b) {}
  }
  var oc = Math.clz32 ? Math.clz32 : nc,
    pc = Math.log,
    qc = Math.LN2;
  function nc(a) {
    a >>>= 0;
    return 0 === a ? 32 : (31 - ((pc(a) / qc) | 0)) | 0;
  }
  var rc = 64,
    sc = 4194304;
  function tc(a) {
    switch (a & -a) {
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
        return a & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return a & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return a;
    }
  }
  function uc(a, b) {
    var c = a.pendingLanes;
    if (0 === c) return 0;
    var d = 0,
      e = a.suspendedLanes,
      f = a.pingedLanes,
      g = c & 268435455;
    if (0 !== g) {
      var h = g & ~e;
      0 !== h ? (d = tc(h)) : ((f &= g), 0 !== f && (d = tc(f)));
    } else (g = c & ~e), 0 !== g ? (d = tc(g)) : 0 !== f && (d = tc(f));
    if (0 === d) return 0;
    if (
      0 !== b &&
      b !== d &&
      0 === (b & e) &&
      ((e = d & -d), (f = b & -b), e >= f || (16 === e && 0 !== (f & 4194240)))
    )
      return b;
    0 !== (d & 4) && (d |= c & 16);
    b = a.entangledLanes;
    if (0 !== b)
      for (a = a.entanglements, b &= d; 0 < b; )
        (c = 31 - oc(b)), (e = 1 << c), (d |= a[c]), (b &= ~e);
    return d;
  }
  function vc(a, b) {
    switch (a) {
      case 1:
      case 2:
      case 4:
        return b + 250;
      case 8:
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
        return b + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function wc(a, b) {
    for (
      var c = a.suspendedLanes,
        d = a.pingedLanes,
        e = a.expirationTimes,
        f = a.pendingLanes;
      0 < f;

    ) {
      var g = 31 - oc(f),
        h = 1 << g,
        k = e[g];
      if (-1 === k) {
        if (0 === (h & c) || 0 !== (h & d)) e[g] = vc(h, b);
      } else k <= b && (a.expiredLanes |= h);
      f &= ~h;
    }
  }
  function xc(a) {
    a = a.pendingLanes & -1073741825;
    return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
  }
  function yc() {
    var a = rc;
    rc <<= 1;
    0 === (rc & 4194240) && (rc = 64);
    return a;
  }
  function zc(a) {
    for (var b = [], c = 0; 31 > c; c++) b.push(a);
    return b;
  }
  function Ac(a, b, c) {
    a.pendingLanes |= b;
    536870912 !== b && ((a.suspendedLanes = 0), (a.pingedLanes = 0));
    a = a.eventTimes;
    b = 31 - oc(b);
    a[b] = c;
  }
  function Bc(a, b) {
    var c = a.pendingLanes & ~b;
    a.pendingLanes = b;
    a.suspendedLanes = 0;
    a.pingedLanes = 0;
    a.expiredLanes &= b;
    a.mutableReadLanes &= b;
    a.entangledLanes &= b;
    b = a.entanglements;
    var d = a.eventTimes;
    for (a = a.expirationTimes; 0 < c; ) {
      var e = 31 - oc(c),
        f = 1 << e;
      b[e] = 0;
      d[e] = -1;
      a[e] = -1;
      c &= ~f;
    }
  }
  function Cc(a, b) {
    var c = (a.entangledLanes |= b);
    for (a = a.entanglements; c; ) {
      var d = 31 - oc(c),
        e = 1 << d;
      (e & b) | (a[d] & b) && (a[d] |= b);
      c &= ~e;
    }
  }
  var C = 0;
  function Dc(a) {
    a &= -a;
    return 1 < a ? (4 < a ? (0 !== (a & 268435455) ? 16 : 536870912) : 4) : 1;
  }
  var Ec,
    Fc,
    Gc,
    Hc,
    Ic,
    Jc = false,
    Kc = [],
    Lc = null,
    Mc = null,
    Nc = null,
    Oc = /* @__PURE__ */ new Map(),
    Pc = /* @__PURE__ */ new Map(),
    Qc = [],
    Rc =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
        ' '
      );
  function Sc(a, b) {
    switch (a) {
      case 'focusin':
      case 'focusout':
        Lc = null;
        break;
      case 'dragenter':
      case 'dragleave':
        Mc = null;
        break;
      case 'mouseover':
      case 'mouseout':
        Nc = null;
        break;
      case 'pointerover':
      case 'pointerout':
        Oc.delete(b.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        Pc.delete(b.pointerId);
    }
  }
  function Tc(a, b, c, d, e, f) {
    if (null === a || a.nativeEvent !== f)
      return (
        (a = {
          blockedOn: b,
          domEventName: c,
          eventSystemFlags: d,
          nativeEvent: f,
          targetContainers: [e],
        }),
        null !== b && ((b = Cb(b)), null !== b && Fc(b)),
        a
      );
    a.eventSystemFlags |= d;
    b = a.targetContainers;
    null !== e && -1 === b.indexOf(e) && b.push(e);
    return a;
  }
  function Uc(a, b, c, d, e) {
    switch (b) {
      case 'focusin':
        return (Lc = Tc(Lc, a, b, c, d, e)), true;
      case 'dragenter':
        return (Mc = Tc(Mc, a, b, c, d, e)), true;
      case 'mouseover':
        return (Nc = Tc(Nc, a, b, c, d, e)), true;
      case 'pointerover':
        var f = e.pointerId;
        Oc.set(f, Tc(Oc.get(f) || null, a, b, c, d, e));
        return true;
      case 'gotpointercapture':
        return (
          (f = e.pointerId),
          Pc.set(f, Tc(Pc.get(f) || null, a, b, c, d, e)),
          true
        );
    }
    return false;
  }
  function Vc(a) {
    var b = Wc(a.target);
    if (null !== b) {
      var c = Vb(b);
      if (null !== c) {
        if (((b = c.tag), 13 === b)) {
          if (((b = Wb(c)), null !== b)) {
            a.blockedOn = b;
            Ic(a.priority, function () {
              Gc(c);
            });
            return;
          }
        } else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
          a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
          return;
        }
      }
    }
    a.blockedOn = null;
  }
  function Xc(a) {
    if (null !== a.blockedOn) return false;
    for (var b = a.targetContainers; 0 < b.length; ) {
      var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
      if (null === c) {
        c = a.nativeEvent;
        var d = new c.constructor(c.type, c);
        wb = d;
        c.target.dispatchEvent(d);
        wb = null;
      } else return (b = Cb(c)), null !== b && Fc(b), (a.blockedOn = c), false;
      b.shift();
    }
    return true;
  }
  function Zc(a, b, c) {
    Xc(a) && c.delete(b);
  }
  function $c() {
    Jc = false;
    null !== Lc && Xc(Lc) && (Lc = null);
    null !== Mc && Xc(Mc) && (Mc = null);
    null !== Nc && Xc(Nc) && (Nc = null);
    Oc.forEach(Zc);
    Pc.forEach(Zc);
  }
  function ad(a, b) {
    a.blockedOn === b &&
      ((a.blockedOn = null),
      Jc ||
        ((Jc = true),
        ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
  }
  function bd(a) {
    function b(b2) {
      return ad(b2, a);
    }
    if (0 < Kc.length) {
      ad(Kc[0], a);
      for (var c = 1; c < Kc.length; c++) {
        var d = Kc[c];
        d.blockedOn === a && (d.blockedOn = null);
      }
    }
    null !== Lc && ad(Lc, a);
    null !== Mc && ad(Mc, a);
    null !== Nc && ad(Nc, a);
    Oc.forEach(b);
    Pc.forEach(b);
    for (c = 0; c < Qc.length; c++)
      (d = Qc[c]), d.blockedOn === a && (d.blockedOn = null);
    for (; 0 < Qc.length && ((c = Qc[0]), null === c.blockedOn); )
      Vc(c), null === c.blockedOn && Qc.shift();
  }
  var cd = ua.ReactCurrentBatchConfig,
    dd = true;
  function ed(a, b, c, d) {
    var e = C,
      f = cd.transition;
    cd.transition = null;
    try {
      (C = 1), fd(a, b, c, d);
    } finally {
      (C = e), (cd.transition = f);
    }
  }
  function gd(a, b, c, d) {
    var e = C,
      f = cd.transition;
    cd.transition = null;
    try {
      (C = 4), fd(a, b, c, d);
    } finally {
      (C = e), (cd.transition = f);
    }
  }
  function fd(a, b, c, d) {
    if (dd) {
      var e = Yc(a, b, c, d);
      if (null === e) hd(a, b, d, id, c), Sc(a, d);
      else if (Uc(e, a, b, c, d)) d.stopPropagation();
      else if ((Sc(a, d), b & 4 && -1 < Rc.indexOf(a))) {
        for (; null !== e; ) {
          var f = Cb(e);
          null !== f && Ec(f);
          f = Yc(a, b, c, d);
          null === f && hd(a, b, d, id, c);
          if (f === e) break;
          e = f;
        }
        null !== e && d.stopPropagation();
      } else hd(a, b, d, null, c);
    }
  }
  var id = null;
  function Yc(a, b, c, d) {
    id = null;
    a = xb(d);
    a = Wc(a);
    if (null !== a)
      if (((b = Vb(a)), null === b)) a = null;
      else if (((c = b.tag), 13 === c)) {
        a = Wb(b);
        if (null !== a) return a;
        a = null;
      } else if (3 === c) {
        if (b.stateNode.current.memoizedState.isDehydrated)
          return 3 === b.tag ? b.stateNode.containerInfo : null;
        a = null;
      } else b !== a && (a = null);
    id = a;
    return null;
  }
  function jd(a) {
    switch (a) {
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
        return 1;
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
      case 'toggle':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 4;
      case 'message':
        switch (ec()) {
          case fc:
            return 1;
          case gc:
            return 4;
          case hc:
          case ic:
            return 16;
          case jc:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var kd = null,
    ld = null,
    md = null;
  function nd() {
    if (md) return md;
    var a,
      b = ld,
      c = b.length,
      d,
      e = 'value' in kd ? kd.value : kd.textContent,
      f = e.length;
    for (a = 0; a < c && b[a] === e[a]; a++);
    var g = c - a;
    for (d = 1; d <= g && b[c - d] === e[f - d]; d++);
    return (md = e.slice(a, 1 < d ? 1 - d : void 0));
  }
  function od(a) {
    var b = a.keyCode;
    'charCode' in a
      ? ((a = a.charCode), 0 === a && 13 === b && (a = 13))
      : (a = b);
    10 === a && (a = 13);
    return 32 <= a || 13 === a ? a : 0;
  }
  function pd() {
    return true;
  }
  function qd() {
    return false;
  }
  function rd(a) {
    function b(b2, d, e, f, g) {
      this._reactName = b2;
      this._targetInst = e;
      this.type = d;
      this.nativeEvent = f;
      this.target = g;
      this.currentTarget = null;
      for (var c in a)
        a.hasOwnProperty(c) && ((b2 = a[c]), (this[c] = b2 ? b2(f) : f[c]));
      this.isDefaultPrevented = (
        null != f.defaultPrevented
          ? f.defaultPrevented
          : false === f.returnValue
      )
        ? pd
        : qd;
      this.isPropagationStopped = qd;
      return this;
    }
    A(b.prototype, {
      preventDefault: function () {
        this.defaultPrevented = true;
        var a2 = this.nativeEvent;
        a2 &&
          (a2.preventDefault
            ? a2.preventDefault()
            : 'unknown' !== typeof a2.returnValue && (a2.returnValue = false),
          (this.isDefaultPrevented = pd));
      },
      stopPropagation: function () {
        var a2 = this.nativeEvent;
        a2 &&
          (a2.stopPropagation
            ? a2.stopPropagation()
            : 'unknown' !== typeof a2.cancelBubble && (a2.cancelBubble = true),
          (this.isPropagationStopped = pd));
      },
      persist: function () {},
      isPersistent: pd,
    });
    return b;
  }
  var sd = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (a) {
        return a.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    td = rd(sd),
    ud = A({}, sd, { view: 0, detail: 0 }),
    vd = rd(ud),
    wd,
    xd,
    yd,
    Ad = A({}, ud, {
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
      getModifierState: zd,
      button: 0,
      buttons: 0,
      relatedTarget: function (a) {
        return void 0 === a.relatedTarget
          ? a.fromElement === a.srcElement
            ? a.toElement
            : a.fromElement
          : a.relatedTarget;
      },
      movementX: function (a) {
        if ('movementX' in a) return a.movementX;
        a !== yd &&
          (yd && 'mousemove' === a.type
            ? ((wd = a.screenX - yd.screenX), (xd = a.screenY - yd.screenY))
            : (xd = wd = 0),
          (yd = a));
        return wd;
      },
      movementY: function (a) {
        return 'movementY' in a ? a.movementY : xd;
      },
    }),
    Bd = rd(Ad),
    Cd = A({}, Ad, { dataTransfer: 0 }),
    Dd = rd(Cd),
    Ed = A({}, ud, { relatedTarget: 0 }),
    Fd = rd(Ed),
    Gd = A({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Hd = rd(Gd),
    Id = A({}, sd, {
      clipboardData: function (a) {
        return 'clipboardData' in a ? a.clipboardData : window.clipboardData;
      },
    }),
    Jd = rd(Id),
    Kd = A({}, sd, { data: 0 }),
    Ld = rd(Kd),
    Md = {
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
    Nd = {
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
    Od = {
      Alt: 'altKey',
      Control: 'ctrlKey',
      Meta: 'metaKey',
      Shift: 'shiftKey',
    };
  function Pd(a) {
    var b = this.nativeEvent;
    return b.getModifierState
      ? b.getModifierState(a)
      : (a = Od[a])
        ? !!b[a]
        : false;
  }
  function zd() {
    return Pd;
  }
  var Qd = A({}, ud, {
      key: function (a) {
        if (a.key) {
          var b = Md[a.key] || a.key;
          if ('Unidentified' !== b) return b;
        }
        return 'keypress' === a.type
          ? ((a = od(a)), 13 === a ? 'Enter' : String.fromCharCode(a))
          : 'keydown' === a.type || 'keyup' === a.type
            ? Nd[a.keyCode] || 'Unidentified'
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
      getModifierState: zd,
      charCode: function (a) {
        return 'keypress' === a.type ? od(a) : 0;
      },
      keyCode: function (a) {
        return 'keydown' === a.type || 'keyup' === a.type ? a.keyCode : 0;
      },
      which: function (a) {
        return 'keypress' === a.type
          ? od(a)
          : 'keydown' === a.type || 'keyup' === a.type
            ? a.keyCode
            : 0;
      },
    }),
    Rd = rd(Qd),
    Sd = A({}, Ad, {
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
    Td = rd(Sd),
    Ud = A({}, ud, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: zd,
    }),
    Vd = rd(Ud),
    Wd = A({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Xd = rd(Wd),
    Yd = A({}, Ad, {
      deltaX: function (a) {
        return 'deltaX' in a
          ? a.deltaX
          : 'wheelDeltaX' in a
            ? -a.wheelDeltaX
            : 0;
      },
      deltaY: function (a) {
        return 'deltaY' in a
          ? a.deltaY
          : 'wheelDeltaY' in a
            ? -a.wheelDeltaY
            : 'wheelDelta' in a
              ? -a.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Zd = rd(Yd),
    $d = [9, 13, 27, 32],
    ae = ia && 'CompositionEvent' in window,
    be = null;
  ia && 'documentMode' in document && (be = document.documentMode);
  var ce = ia && 'TextEvent' in window && !be,
    de = ia && (!ae || (be && 8 < be && 11 >= be)),
    ee = String.fromCharCode(32),
    fe = false;
  function ge(a, b) {
    switch (a) {
      case 'keyup':
        return -1 !== $d.indexOf(b.keyCode);
      case 'keydown':
        return 229 !== b.keyCode;
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return true;
      default:
        return false;
    }
  }
  function he(a) {
    a = a.detail;
    return 'object' === typeof a && 'data' in a ? a.data : null;
  }
  var ie = false;
  function je(a, b) {
    switch (a) {
      case 'compositionend':
        return he(b);
      case 'keypress':
        if (32 !== b.which) return null;
        fe = true;
        return ee;
      case 'textInput':
        return (a = b.data), a === ee && fe ? null : a;
      default:
        return null;
    }
  }
  function ke(a, b) {
    if (ie)
      return 'compositionend' === a || (!ae && ge(a, b))
        ? ((a = nd()), (md = ld = kd = null), (ie = false), a)
        : null;
    switch (a) {
      case 'paste':
        return null;
      case 'keypress':
        if (!(b.ctrlKey || b.altKey || b.metaKey) || (b.ctrlKey && b.altKey)) {
          if (b.char && 1 < b.char.length) return b.char;
          if (b.which) return String.fromCharCode(b.which);
        }
        return null;
      case 'compositionend':
        return de && 'ko' !== b.locale ? null : b.data;
      default:
        return null;
    }
  }
  var le = {
    color: true,
    date: true,
    datetime: true,
    'datetime-local': true,
    email: true,
    month: true,
    number: true,
    password: true,
    range: true,
    search: true,
    tel: true,
    text: true,
    time: true,
    url: true,
    week: true,
  };
  function me(a) {
    var b = a && a.nodeName && a.nodeName.toLowerCase();
    return 'input' === b ? !!le[a.type] : 'textarea' === b ? true : false;
  }
  function ne(a, b, c, d) {
    Eb(d);
    b = oe(b, 'onChange');
    0 < b.length &&
      ((c = new td('onChange', 'change', null, c, d)),
      a.push({ event: c, listeners: b }));
  }
  var pe = null,
    qe = null;
  function re(a) {
    se(a, 0);
  }
  function te(a) {
    var b = ue(a);
    if (Wa(b)) return a;
  }
  function ve(a, b) {
    if ('change' === a) return b;
  }
  var we = false;
  if (ia) {
    var xe;
    if (ia) {
      var ye = 'oninput' in document;
      if (!ye) {
        var ze = document.createElement('div');
        ze.setAttribute('oninput', 'return;');
        ye = 'function' === typeof ze.oninput;
      }
      xe = ye;
    } else xe = false;
    we = xe && (!document.documentMode || 9 < document.documentMode);
  }
  function Ae() {
    pe && (pe.detachEvent('onpropertychange', Be), (qe = pe = null));
  }
  function Be(a) {
    if ('value' === a.propertyName && te(qe)) {
      var b = [];
      ne(b, qe, a, xb(a));
      Jb(re, b);
    }
  }
  function Ce(a, b, c) {
    'focusin' === a
      ? (Ae(), (pe = b), (qe = c), pe.attachEvent('onpropertychange', Be))
      : 'focusout' === a && Ae();
  }
  function De(a) {
    if ('selectionchange' === a || 'keyup' === a || 'keydown' === a)
      return te(qe);
  }
  function Ee(a, b) {
    if ('click' === a) return te(b);
  }
  function Fe(a, b) {
    if ('input' === a || 'change' === a) return te(b);
  }
  function Ge(a, b) {
    return (a === b && (0 !== a || 1 / a === 1 / b)) || (a !== a && b !== b);
  }
  var He = 'function' === typeof Object.is ? Object.is : Ge;
  function Ie(a, b) {
    if (He(a, b)) return true;
    if (
      'object' !== typeof a ||
      null === a ||
      'object' !== typeof b ||
      null === b
    )
      return false;
    var c = Object.keys(a),
      d = Object.keys(b);
    if (c.length !== d.length) return false;
    for (d = 0; d < c.length; d++) {
      var e = c[d];
      if (!ja.call(b, e) || !He(a[e], b[e])) return false;
    }
    return true;
  }
  function Je(a) {
    for (; a && a.firstChild; ) a = a.firstChild;
    return a;
  }
  function Ke(a, b) {
    var c = Je(a);
    a = 0;
    for (var d; c; ) {
      if (3 === c.nodeType) {
        d = a + c.textContent.length;
        if (a <= b && d >= b) return { node: c, offset: b - a };
        a = d;
      }
      a: {
        for (; c; ) {
          if (c.nextSibling) {
            c = c.nextSibling;
            break a;
          }
          c = c.parentNode;
        }
        c = void 0;
      }
      c = Je(c);
    }
  }
  function Le(a, b) {
    return a && b
      ? a === b
        ? true
        : a && 3 === a.nodeType
          ? false
          : b && 3 === b.nodeType
            ? Le(a, b.parentNode)
            : 'contains' in a
              ? a.contains(b)
              : a.compareDocumentPosition
                ? !!(a.compareDocumentPosition(b) & 16)
                : false
      : false;
  }
  function Me() {
    for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement; ) {
      try {
        var c = 'string' === typeof b.contentWindow.location.href;
      } catch (d) {
        c = false;
      }
      if (c) a = b.contentWindow;
      else break;
      b = Xa(a.document);
    }
    return b;
  }
  function Ne(a) {
    var b = a && a.nodeName && a.nodeName.toLowerCase();
    return (
      b &&
      (('input' === b &&
        ('text' === a.type ||
          'search' === a.type ||
          'tel' === a.type ||
          'url' === a.type ||
          'password' === a.type)) ||
        'textarea' === b ||
        'true' === a.contentEditable)
    );
  }
  function Oe(a) {
    var b = Me(),
      c = a.focusedElem,
      d = a.selectionRange;
    if (
      b !== c &&
      c &&
      c.ownerDocument &&
      Le(c.ownerDocument.documentElement, c)
    ) {
      if (null !== d && Ne(c)) {
        if (
          ((b = d.start),
          (a = d.end),
          void 0 === a && (a = b),
          'selectionStart' in c)
        )
          (c.selectionStart = b),
            (c.selectionEnd = Math.min(a, c.value.length));
        else if (
          ((a = ((b = c.ownerDocument || document) && b.defaultView) || window),
          a.getSelection)
        ) {
          a = a.getSelection();
          var e = c.textContent.length,
            f = Math.min(d.start, e);
          d = void 0 === d.end ? f : Math.min(d.end, e);
          !a.extend && f > d && ((e = d), (d = f), (f = e));
          e = Ke(c, f);
          var g = Ke(c, d);
          e &&
            g &&
            (1 !== a.rangeCount ||
              a.anchorNode !== e.node ||
              a.anchorOffset !== e.offset ||
              a.focusNode !== g.node ||
              a.focusOffset !== g.offset) &&
            ((b = b.createRange()),
            b.setStart(e.node, e.offset),
            a.removeAllRanges(),
            f > d
              ? (a.addRange(b), a.extend(g.node, g.offset))
              : (b.setEnd(g.node, g.offset), a.addRange(b)));
        }
      }
      b = [];
      for (a = c; (a = a.parentNode); )
        1 === a.nodeType &&
          b.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
      'function' === typeof c.focus && c.focus();
      for (c = 0; c < b.length; c++)
        (a = b[c]),
          (a.element.scrollLeft = a.left),
          (a.element.scrollTop = a.top);
    }
  }
  var Pe = ia && 'documentMode' in document && 11 >= document.documentMode,
    Qe = null,
    Re = null,
    Se = null,
    Te = false;
  function Ue(a, b, c) {
    var d =
      c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
    Te ||
      null == Qe ||
      Qe !== Xa(d) ||
      ((d = Qe),
      'selectionStart' in d && Ne(d)
        ? (d = { start: d.selectionStart, end: d.selectionEnd })
        : ((d = (
            (d.ownerDocument && d.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (d = {
            anchorNode: d.anchorNode,
            anchorOffset: d.anchorOffset,
            focusNode: d.focusNode,
            focusOffset: d.focusOffset,
          })),
      (Se && Ie(Se, d)) ||
        ((Se = d),
        (d = oe(Re, 'onSelect')),
        0 < d.length &&
          ((b = new td('onSelect', 'select', null, b, c)),
          a.push({ event: b, listeners: d }),
          (b.target = Qe))));
  }
  function Ve(a, b) {
    var c = {};
    c[a.toLowerCase()] = b.toLowerCase();
    c['Webkit' + a] = 'webkit' + b;
    c['Moz' + a] = 'moz' + b;
    return c;
  }
  var We = {
      animationend: Ve('Animation', 'AnimationEnd'),
      animationiteration: Ve('Animation', 'AnimationIteration'),
      animationstart: Ve('Animation', 'AnimationStart'),
      transitionend: Ve('Transition', 'TransitionEnd'),
    },
    Xe = {},
    Ye = {};
  ia &&
    ((Ye = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete We.animationend.animation,
      delete We.animationiteration.animation,
      delete We.animationstart.animation),
    'TransitionEvent' in window || delete We.transitionend.transition);
  function Ze(a) {
    if (Xe[a]) return Xe[a];
    if (!We[a]) return a;
    var b = We[a],
      c;
    for (c in b) if (b.hasOwnProperty(c) && c in Ye) return (Xe[a] = b[c]);
    return a;
  }
  var $e = Ze('animationend'),
    af = Ze('animationiteration'),
    bf = Ze('animationstart'),
    cf = Ze('transitionend'),
    df = /* @__PURE__ */ new Map(),
    ef =
      'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  function ff(a, b) {
    df.set(a, b);
    fa(b, [a]);
  }
  for (var gf = 0; gf < ef.length; gf++) {
    var hf = ef[gf],
      jf = hf.toLowerCase(),
      kf = hf[0].toUpperCase() + hf.slice(1);
    ff(jf, 'on' + kf);
  }
  ff($e, 'onAnimationEnd');
  ff(af, 'onAnimationIteration');
  ff(bf, 'onAnimationStart');
  ff('dblclick', 'onDoubleClick');
  ff('focusin', 'onFocus');
  ff('focusout', 'onBlur');
  ff(cf, 'onTransitionEnd');
  ha('onMouseEnter', ['mouseout', 'mouseover']);
  ha('onMouseLeave', ['mouseout', 'mouseover']);
  ha('onPointerEnter', ['pointerout', 'pointerover']);
  ha('onPointerLeave', ['pointerout', 'pointerover']);
  fa(
    'onChange',
    'change click focusin focusout input keydown keyup selectionchange'.split(
      ' '
    )
  );
  fa(
    'onSelect',
    'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
      ' '
    )
  );
  fa('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
  fa(
    'onCompositionEnd',
    'compositionend focusout keydown keypress keyup mousedown'.split(' ')
  );
  fa(
    'onCompositionStart',
    'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
  );
  fa(
    'onCompositionUpdate',
    'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
  );
  var lf =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    mf = new Set(
      'cancel close invalid load scroll toggle'.split(' ').concat(lf)
    );
  function nf(a, b, c) {
    var d = a.type || 'unknown-event';
    a.currentTarget = c;
    Ub(d, b, void 0, a);
    a.currentTarget = null;
  }
  function se(a, b) {
    b = 0 !== (b & 4);
    for (var c = 0; c < a.length; c++) {
      var d = a[c],
        e = d.event;
      d = d.listeners;
      a: {
        var f = void 0;
        if (b)
          for (var g = d.length - 1; 0 <= g; g--) {
            var h = d[g],
              k = h.instance,
              l = h.currentTarget;
            h = h.listener;
            if (k !== f && e.isPropagationStopped()) break a;
            nf(e, h, l);
            f = k;
          }
        else
          for (g = 0; g < d.length; g++) {
            h = d[g];
            k = h.instance;
            l = h.currentTarget;
            h = h.listener;
            if (k !== f && e.isPropagationStopped()) break a;
            nf(e, h, l);
            f = k;
          }
      }
    }
    if (Qb) throw ((a = Rb), (Qb = false), (Rb = null), a);
  }
  function D(a, b) {
    var c = b[of];
    void 0 === c && (c = b[of] = /* @__PURE__ */ new Set());
    var d = a + '__bubble';
    c.has(d) || (pf(b, a, 2, false), c.add(d));
  }
  function qf(a, b, c) {
    var d = 0;
    b && (d |= 4);
    pf(c, a, d, b);
  }
  var rf = '_reactListening' + Math.random().toString(36).slice(2);
  function sf(a) {
    if (!a[rf]) {
      a[rf] = true;
      da.forEach(function (b2) {
        'selectionchange' !== b2 &&
          (mf.has(b2) || qf(b2, false, a), qf(b2, true, a));
      });
      var b = 9 === a.nodeType ? a : a.ownerDocument;
      null === b || b[rf] || ((b[rf] = true), qf('selectionchange', false, b));
    }
  }
  function pf(a, b, c, d) {
    switch (jd(b)) {
      case 1:
        var e = ed;
        break;
      case 4:
        e = gd;
        break;
      default:
        e = fd;
    }
    c = e.bind(null, b, c, a);
    e = void 0;
    !Lb ||
      ('touchstart' !== b && 'touchmove' !== b && 'wheel' !== b) ||
      (e = true);
    d
      ? void 0 !== e
        ? a.addEventListener(b, c, { capture: true, passive: e })
        : a.addEventListener(b, c, true)
      : void 0 !== e
        ? a.addEventListener(b, c, { passive: e })
        : a.addEventListener(b, c, false);
  }
  function hd(a, b, c, d, e) {
    var f = d;
    if (0 === (b & 1) && 0 === (b & 2) && null !== d)
      a: for (;;) {
        if (null === d) return;
        var g = d.tag;
        if (3 === g || 4 === g) {
          var h = d.stateNode.containerInfo;
          if (h === e || (8 === h.nodeType && h.parentNode === e)) break;
          if (4 === g)
            for (g = d.return; null !== g; ) {
              var k = g.tag;
              if (3 === k || 4 === k) {
                if (
                  ((k = g.stateNode.containerInfo),
                  k === e || (8 === k.nodeType && k.parentNode === e))
                )
                  return;
              }
              g = g.return;
            }
          for (; null !== h; ) {
            g = Wc(h);
            if (null === g) return;
            k = g.tag;
            if (5 === k || 6 === k) {
              d = f = g;
              continue a;
            }
            h = h.parentNode;
          }
        }
        d = d.return;
      }
    Jb(function () {
      var d2 = f,
        e2 = xb(c),
        g2 = [];
      a: {
        var h2 = df.get(a);
        if (void 0 !== h2) {
          var k2 = td,
            n = a;
          switch (a) {
            case 'keypress':
              if (0 === od(c)) break a;
            case 'keydown':
            case 'keyup':
              k2 = Rd;
              break;
            case 'focusin':
              n = 'focus';
              k2 = Fd;
              break;
            case 'focusout':
              n = 'blur';
              k2 = Fd;
              break;
            case 'beforeblur':
            case 'afterblur':
              k2 = Fd;
              break;
            case 'click':
              if (2 === c.button) break a;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              k2 = Bd;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              k2 = Dd;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              k2 = Vd;
              break;
            case $e:
            case af:
            case bf:
              k2 = Hd;
              break;
            case cf:
              k2 = Xd;
              break;
            case 'scroll':
              k2 = vd;
              break;
            case 'wheel':
              k2 = Zd;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              k2 = Jd;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              k2 = Td;
          }
          var t = 0 !== (b & 4),
            J = !t && 'scroll' === a,
            x = t ? (null !== h2 ? h2 + 'Capture' : null) : h2;
          t = [];
          for (var w = d2, u; null !== w; ) {
            u = w;
            var F = u.stateNode;
            5 === u.tag &&
              null !== F &&
              ((u = F),
              null !== x && ((F = Kb(w, x)), null != F && t.push(tf(w, F, u))));
            if (J) break;
            w = w.return;
          }
          0 < t.length &&
            ((h2 = new k2(h2, n, null, c, e2)),
            g2.push({ event: h2, listeners: t }));
        }
      }
      if (0 === (b & 7)) {
        a: {
          h2 = 'mouseover' === a || 'pointerover' === a;
          k2 = 'mouseout' === a || 'pointerout' === a;
          if (
            h2 &&
            c !== wb &&
            (n = c.relatedTarget || c.fromElement) &&
            (Wc(n) || n[uf])
          )
            break a;
          if (k2 || h2) {
            h2 =
              e2.window === e2
                ? e2
                : (h2 = e2.ownerDocument)
                  ? h2.defaultView || h2.parentWindow
                  : window;
            if (k2) {
              if (
                ((n = c.relatedTarget || c.toElement),
                (k2 = d2),
                (n = n ? Wc(n) : null),
                null !== n &&
                  ((J = Vb(n)), n !== J || (5 !== n.tag && 6 !== n.tag)))
              )
                n = null;
            } else (k2 = null), (n = d2);
            if (k2 !== n) {
              t = Bd;
              F = 'onMouseLeave';
              x = 'onMouseEnter';
              w = 'mouse';
              if ('pointerout' === a || 'pointerover' === a)
                (t = Td),
                  (F = 'onPointerLeave'),
                  (x = 'onPointerEnter'),
                  (w = 'pointer');
              J = null == k2 ? h2 : ue(k2);
              u = null == n ? h2 : ue(n);
              h2 = new t(F, w + 'leave', k2, c, e2);
              h2.target = J;
              h2.relatedTarget = u;
              F = null;
              Wc(e2) === d2 &&
                ((t = new t(x, w + 'enter', n, c, e2)),
                (t.target = u),
                (t.relatedTarget = J),
                (F = t));
              J = F;
              if (k2 && n)
                b: {
                  t = k2;
                  x = n;
                  w = 0;
                  for (u = t; u; u = vf(u)) w++;
                  u = 0;
                  for (F = x; F; F = vf(F)) u++;
                  for (; 0 < w - u; ) (t = vf(t)), w--;
                  for (; 0 < u - w; ) (x = vf(x)), u--;
                  for (; w--; ) {
                    if (t === x || (null !== x && t === x.alternate)) break b;
                    t = vf(t);
                    x = vf(x);
                  }
                  t = null;
                }
              else t = null;
              null !== k2 && wf(g2, h2, k2, t, false);
              null !== n && null !== J && wf(g2, J, n, t, true);
            }
          }
        }
        a: {
          h2 = d2 ? ue(d2) : window;
          k2 = h2.nodeName && h2.nodeName.toLowerCase();
          if ('select' === k2 || ('input' === k2 && 'file' === h2.type))
            var na = ve;
          else if (me(h2))
            if (we) na = Fe;
            else {
              na = De;
              var xa = Ce;
            }
          else
            (k2 = h2.nodeName) &&
              'input' === k2.toLowerCase() &&
              ('checkbox' === h2.type || 'radio' === h2.type) &&
              (na = Ee);
          if (na && (na = na(a, d2))) {
            ne(g2, na, c, e2);
            break a;
          }
          xa && xa(a, h2, d2);
          'focusout' === a &&
            (xa = h2._wrapperState) &&
            xa.controlled &&
            'number' === h2.type &&
            cb(h2, 'number', h2.value);
        }
        xa = d2 ? ue(d2) : window;
        switch (a) {
          case 'focusin':
            if (me(xa) || 'true' === xa.contentEditable)
              (Qe = xa), (Re = d2), (Se = null);
            break;
          case 'focusout':
            Se = Re = Qe = null;
            break;
          case 'mousedown':
            Te = true;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            Te = false;
            Ue(g2, c, e2);
            break;
          case 'selectionchange':
            if (Pe) break;
          case 'keydown':
          case 'keyup':
            Ue(g2, c, e2);
        }
        var $a;
        if (ae)
          b: {
            switch (a) {
              case 'compositionstart':
                var ba = 'onCompositionStart';
                break b;
              case 'compositionend':
                ba = 'onCompositionEnd';
                break b;
              case 'compositionupdate':
                ba = 'onCompositionUpdate';
                break b;
            }
            ba = void 0;
          }
        else
          ie
            ? ge(a, c) && (ba = 'onCompositionEnd')
            : 'keydown' === a &&
              229 === c.keyCode &&
              (ba = 'onCompositionStart');
        ba &&
          (de &&
            'ko' !== c.locale &&
            (ie || 'onCompositionStart' !== ba
              ? 'onCompositionEnd' === ba && ie && ($a = nd())
              : ((kd = e2),
                (ld = 'value' in kd ? kd.value : kd.textContent),
                (ie = true))),
          (xa = oe(d2, ba)),
          0 < xa.length &&
            ((ba = new Ld(ba, a, null, c, e2)),
            g2.push({ event: ba, listeners: xa }),
            $a
              ? (ba.data = $a)
              : (($a = he(c)), null !== $a && (ba.data = $a))));
        if (($a = ce ? je(a, c) : ke(a, c)))
          (d2 = oe(d2, 'onBeforeInput')),
            0 < d2.length &&
              ((e2 = new Ld('onBeforeInput', 'beforeinput', null, c, e2)),
              g2.push({ event: e2, listeners: d2 }),
              (e2.data = $a));
      }
      se(g2, b);
    });
  }
  function tf(a, b, c) {
    return { instance: a, listener: b, currentTarget: c };
  }
  function oe(a, b) {
    for (var c = b + 'Capture', d = []; null !== a; ) {
      var e = a,
        f = e.stateNode;
      5 === e.tag &&
        null !== f &&
        ((e = f),
        (f = Kb(a, c)),
        null != f && d.unshift(tf(a, f, e)),
        (f = Kb(a, b)),
        null != f && d.push(tf(a, f, e)));
      a = a.return;
    }
    return d;
  }
  function vf(a) {
    if (null === a) return null;
    do a = a.return;
    while (a && 5 !== a.tag);
    return a ? a : null;
  }
  function wf(a, b, c, d, e) {
    for (var f = b._reactName, g = []; null !== c && c !== d; ) {
      var h = c,
        k = h.alternate,
        l = h.stateNode;
      if (null !== k && k === d) break;
      5 === h.tag &&
        null !== l &&
        ((h = l),
        e
          ? ((k = Kb(c, f)), null != k && g.unshift(tf(c, k, h)))
          : e || ((k = Kb(c, f)), null != k && g.push(tf(c, k, h))));
      c = c.return;
    }
    0 !== g.length && a.push({ event: b, listeners: g });
  }
  var xf = /\r\n?/g,
    yf = /\u0000|\uFFFD/g;
  function zf(a) {
    return ('string' === typeof a ? a : '' + a)
      .replace(xf, '\n')
      .replace(yf, '');
  }
  function Af(a, b, c) {
    b = zf(b);
    if (zf(a) !== b && c) throw Error(p(425));
  }
  function Bf() {}
  var Cf = null,
    Df = null;
  function Ef(a, b) {
    return (
      'textarea' === a ||
      'noscript' === a ||
      'string' === typeof b.children ||
      'number' === typeof b.children ||
      ('object' === typeof b.dangerouslySetInnerHTML &&
        null !== b.dangerouslySetInnerHTML &&
        null != b.dangerouslySetInnerHTML.__html)
    );
  }
  var Ff = 'function' === typeof setTimeout ? setTimeout : void 0,
    Gf = 'function' === typeof clearTimeout ? clearTimeout : void 0,
    Hf = 'function' === typeof Promise ? Promise : void 0,
    Jf =
      'function' === typeof queueMicrotask
        ? queueMicrotask
        : 'undefined' !== typeof Hf
          ? function (a) {
              return Hf.resolve(null).then(a).catch(If);
            }
          : Ff;
  function If(a) {
    setTimeout(function () {
      throw a;
    });
  }
  function Kf(a, b) {
    var c = b,
      d = 0;
    do {
      var e = c.nextSibling;
      a.removeChild(c);
      if (e && 8 === e.nodeType)
        if (((c = e.data), '/$' === c)) {
          if (0 === d) {
            a.removeChild(e);
            bd(b);
            return;
          }
          d--;
        } else ('$' !== c && '$?' !== c && '$!' !== c) || d++;
      c = e;
    } while (c);
    bd(b);
  }
  function Lf(a) {
    for (; null != a; a = a.nextSibling) {
      var b = a.nodeType;
      if (1 === b || 3 === b) break;
      if (8 === b) {
        b = a.data;
        if ('$' === b || '$!' === b || '$?' === b) break;
        if ('/$' === b) return null;
      }
    }
    return a;
  }
  function Mf(a) {
    a = a.previousSibling;
    for (var b = 0; a; ) {
      if (8 === a.nodeType) {
        var c = a.data;
        if ('$' === c || '$!' === c || '$?' === c) {
          if (0 === b) return a;
          b--;
        } else '/$' === c && b++;
      }
      a = a.previousSibling;
    }
    return null;
  }
  var Nf = Math.random().toString(36).slice(2),
    Of = '__reactFiber$' + Nf,
    Pf = '__reactProps$' + Nf,
    uf = '__reactContainer$' + Nf,
    of = '__reactEvents$' + Nf,
    Qf = '__reactListeners$' + Nf,
    Rf = '__reactHandles$' + Nf;
  function Wc(a) {
    var b = a[Of];
    if (b) return b;
    for (var c = a.parentNode; c; ) {
      if ((b = c[uf] || c[Of])) {
        c = b.alternate;
        if (null !== b.child || (null !== c && null !== c.child))
          for (a = Mf(a); null !== a; ) {
            if ((c = a[Of])) return c;
            a = Mf(a);
          }
        return b;
      }
      a = c;
      c = a.parentNode;
    }
    return null;
  }
  function Cb(a) {
    a = a[Of] || a[uf];
    return !a || (5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag)
      ? null
      : a;
  }
  function ue(a) {
    if (5 === a.tag || 6 === a.tag) return a.stateNode;
    throw Error(p(33));
  }
  function Db(a) {
    return a[Pf] || null;
  }
  var Sf = [],
    Tf = -1;
  function Uf(a) {
    return { current: a };
  }
  function E(a) {
    0 > Tf || ((a.current = Sf[Tf]), (Sf[Tf] = null), Tf--);
  }
  function G(a, b) {
    Tf++;
    Sf[Tf] = a.current;
    a.current = b;
  }
  var Vf = {},
    H = Uf(Vf),
    Wf = Uf(false),
    Xf = Vf;
  function Yf(a, b) {
    var c = a.type.contextTypes;
    if (!c) return Vf;
    var d = a.stateNode;
    if (d && d.__reactInternalMemoizedUnmaskedChildContext === b)
      return d.__reactInternalMemoizedMaskedChildContext;
    var e = {},
      f;
    for (f in c) e[f] = b[f];
    d &&
      ((a = a.stateNode),
      (a.__reactInternalMemoizedUnmaskedChildContext = b),
      (a.__reactInternalMemoizedMaskedChildContext = e));
    return e;
  }
  function Zf(a) {
    a = a.childContextTypes;
    return null !== a && void 0 !== a;
  }
  function $f() {
    E(Wf);
    E(H);
  }
  function ag(a, b, c) {
    if (H.current !== Vf) throw Error(p(168));
    G(H, b);
    G(Wf, c);
  }
  function bg(a, b, c) {
    var d = a.stateNode;
    b = b.childContextTypes;
    if ('function' !== typeof d.getChildContext) return c;
    d = d.getChildContext();
    for (var e in d) if (!(e in b)) throw Error(p(108, Ra(a) || 'Unknown', e));
    return A({}, c, d);
  }
  function cg(a) {
    a =
      ((a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext) || Vf;
    Xf = H.current;
    G(H, a);
    G(Wf, Wf.current);
    return true;
  }
  function dg(a, b, c) {
    var d = a.stateNode;
    if (!d) throw Error(p(169));
    c
      ? ((a = bg(a, b, Xf)),
        (d.__reactInternalMemoizedMergedChildContext = a),
        E(Wf),
        E(H),
        G(H, a))
      : E(Wf);
    G(Wf, c);
  }
  var eg = null,
    fg = false,
    gg = false;
  function hg(a) {
    null === eg ? (eg = [a]) : eg.push(a);
  }
  function ig(a) {
    fg = true;
    hg(a);
  }
  function jg() {
    if (!gg && null !== eg) {
      gg = true;
      var a = 0,
        b = C;
      try {
        var c = eg;
        for (C = 1; a < c.length; a++) {
          var d = c[a];
          do d = d(true);
          while (null !== d);
        }
        eg = null;
        fg = false;
      } catch (e) {
        throw (null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e);
      } finally {
        (C = b), (gg = false);
      }
    }
    return null;
  }
  var kg = [],
    lg = 0,
    mg = null,
    ng = 0,
    og = [],
    pg = 0,
    qg = null,
    rg = 1,
    sg = '';
  function tg(a, b) {
    kg[lg++] = ng;
    kg[lg++] = mg;
    mg = a;
    ng = b;
  }
  function ug(a, b, c) {
    og[pg++] = rg;
    og[pg++] = sg;
    og[pg++] = qg;
    qg = a;
    var d = rg;
    a = sg;
    var e = 32 - oc(d) - 1;
    d &= ~(1 << e);
    c += 1;
    var f = 32 - oc(b) + e;
    if (30 < f) {
      var g = e - (e % 5);
      f = (d & ((1 << g) - 1)).toString(32);
      d >>= g;
      e -= g;
      rg = (1 << (32 - oc(b) + e)) | (c << e) | d;
      sg = f + a;
    } else (rg = (1 << f) | (c << e) | d), (sg = a);
  }
  function vg(a) {
    null !== a.return && (tg(a, 1), ug(a, 1, 0));
  }
  function wg(a) {
    for (; a === mg; )
      (mg = kg[--lg]), (kg[lg] = null), (ng = kg[--lg]), (kg[lg] = null);
    for (; a === qg; )
      (qg = og[--pg]),
        (og[pg] = null),
        (sg = og[--pg]),
        (og[pg] = null),
        (rg = og[--pg]),
        (og[pg] = null);
  }
  var xg = null,
    yg = null,
    I = false,
    zg = null;
  function Ag(a, b) {
    var c = Bg(5, null, null, 0);
    c.elementType = 'DELETED';
    c.stateNode = b;
    c.return = a;
    b = a.deletions;
    null === b ? ((a.deletions = [c]), (a.flags |= 16)) : b.push(c);
  }
  function Cg(a, b) {
    switch (a.tag) {
      case 5:
        var c = a.type;
        b =
          1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase()
            ? null
            : b;
        return null !== b
          ? ((a.stateNode = b), (xg = a), (yg = Lf(b.firstChild)), true)
          : false;
      case 6:
        return (
          (b = '' === a.pendingProps || 3 !== b.nodeType ? null : b),
          null !== b ? ((a.stateNode = b), (xg = a), (yg = null), true) : false
        );
      case 13:
        return (
          (b = 8 !== b.nodeType ? null : b),
          null !== b
            ? ((c = null !== qg ? { id: rg, overflow: sg } : null),
              (a.memoizedState = {
                dehydrated: b,
                treeContext: c,
                retryLane: 1073741824,
              }),
              (c = Bg(18, null, null, 0)),
              (c.stateNode = b),
              (c.return = a),
              (a.child = c),
              (xg = a),
              (yg = null),
              true)
            : false
        );
      default:
        return false;
    }
  }
  function Dg(a) {
    return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
  }
  function Eg(a) {
    if (I) {
      var b = yg;
      if (b) {
        var c = b;
        if (!Cg(a, b)) {
          if (Dg(a)) throw Error(p(418));
          b = Lf(c.nextSibling);
          var d = xg;
          b && Cg(a, b)
            ? Ag(d, c)
            : ((a.flags = (a.flags & -4097) | 2), (I = false), (xg = a));
        }
      } else {
        if (Dg(a)) throw Error(p(418));
        a.flags = (a.flags & -4097) | 2;
        I = false;
        xg = a;
      }
    }
  }
  function Fg(a) {
    for (
      a = a.return;
      null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag;

    )
      a = a.return;
    xg = a;
  }
  function Gg(a) {
    if (a !== xg) return false;
    if (!I) return Fg(a), (I = true), false;
    var b;
    (b = 3 !== a.tag) &&
      !(b = 5 !== a.tag) &&
      ((b = a.type),
      (b = 'head' !== b && 'body' !== b && !Ef(a.type, a.memoizedProps)));
    if (b && (b = yg)) {
      if (Dg(a)) throw (Hg(), Error(p(418)));
      for (; b; ) Ag(a, b), (b = Lf(b.nextSibling));
    }
    Fg(a);
    if (13 === a.tag) {
      a = a.memoizedState;
      a = null !== a ? a.dehydrated : null;
      if (!a) throw Error(p(317));
      a: {
        a = a.nextSibling;
        for (b = 0; a; ) {
          if (8 === a.nodeType) {
            var c = a.data;
            if ('/$' === c) {
              if (0 === b) {
                yg = Lf(a.nextSibling);
                break a;
              }
              b--;
            } else ('$' !== c && '$!' !== c && '$?' !== c) || b++;
          }
          a = a.nextSibling;
        }
        yg = null;
      }
    } else yg = xg ? Lf(a.stateNode.nextSibling) : null;
    return true;
  }
  function Hg() {
    for (var a = yg; a; ) a = Lf(a.nextSibling);
  }
  function Ig() {
    yg = xg = null;
    I = false;
  }
  function Jg(a) {
    null === zg ? (zg = [a]) : zg.push(a);
  }
  var Kg = ua.ReactCurrentBatchConfig;
  function Lg(a, b, c) {
    a = c.ref;
    if (null !== a && 'function' !== typeof a && 'object' !== typeof a) {
      if (c._owner) {
        c = c._owner;
        if (c) {
          if (1 !== c.tag) throw Error(p(309));
          var d = c.stateNode;
        }
        if (!d) throw Error(p(147, a));
        var e = d,
          f = '' + a;
        if (
          null !== b &&
          null !== b.ref &&
          'function' === typeof b.ref &&
          b.ref._stringRef === f
        )
          return b.ref;
        b = function (a2) {
          var b2 = e.refs;
          null === a2 ? delete b2[f] : (b2[f] = a2);
        };
        b._stringRef = f;
        return b;
      }
      if ('string' !== typeof a) throw Error(p(284));
      if (!c._owner) throw Error(p(290, a));
    }
    return a;
  }
  function Mg(a, b) {
    a = Object.prototype.toString.call(b);
    throw Error(
      p(
        31,
        '[object Object]' === a
          ? 'object with keys {' + Object.keys(b).join(', ') + '}'
          : a
      )
    );
  }
  function Ng(a) {
    var b = a._init;
    return b(a._payload);
  }
  function Og(a) {
    function b(b2, c2) {
      if (a) {
        var d2 = b2.deletions;
        null === d2 ? ((b2.deletions = [c2]), (b2.flags |= 16)) : d2.push(c2);
      }
    }
    function c(c2, d2) {
      if (!a) return null;
      for (; null !== d2; ) b(c2, d2), (d2 = d2.sibling);
      return null;
    }
    function d(a2, b2) {
      for (a2 = /* @__PURE__ */ new Map(); null !== b2; )
        null !== b2.key ? a2.set(b2.key, b2) : a2.set(b2.index, b2),
          (b2 = b2.sibling);
      return a2;
    }
    function e(a2, b2) {
      a2 = Pg(a2, b2);
      a2.index = 0;
      a2.sibling = null;
      return a2;
    }
    function f(b2, c2, d2) {
      b2.index = d2;
      if (!a) return (b2.flags |= 1048576), c2;
      d2 = b2.alternate;
      if (null !== d2)
        return (d2 = d2.index), d2 < c2 ? ((b2.flags |= 2), c2) : d2;
      b2.flags |= 2;
      return c2;
    }
    function g(b2) {
      a && null === b2.alternate && (b2.flags |= 2);
      return b2;
    }
    function h(a2, b2, c2, d2) {
      if (null === b2 || 6 !== b2.tag)
        return (b2 = Qg(c2, a2.mode, d2)), (b2.return = a2), b2;
      b2 = e(b2, c2);
      b2.return = a2;
      return b2;
    }
    function k(a2, b2, c2, d2) {
      var f2 = c2.type;
      if (f2 === ya) return m(a2, b2, c2.props.children, d2, c2.key);
      if (
        null !== b2 &&
        (b2.elementType === f2 ||
          ('object' === typeof f2 &&
            null !== f2 &&
            f2.$$typeof === Ha &&
            Ng(f2) === b2.type))
      )
        return (
          (d2 = e(b2, c2.props)),
          (d2.ref = Lg(a2, b2, c2)),
          (d2.return = a2),
          d2
        );
      d2 = Rg(c2.type, c2.key, c2.props, null, a2.mode, d2);
      d2.ref = Lg(a2, b2, c2);
      d2.return = a2;
      return d2;
    }
    function l(a2, b2, c2, d2) {
      if (
        null === b2 ||
        4 !== b2.tag ||
        b2.stateNode.containerInfo !== c2.containerInfo ||
        b2.stateNode.implementation !== c2.implementation
      )
        return (b2 = Sg(c2, a2.mode, d2)), (b2.return = a2), b2;
      b2 = e(b2, c2.children || []);
      b2.return = a2;
      return b2;
    }
    function m(a2, b2, c2, d2, f2) {
      if (null === b2 || 7 !== b2.tag)
        return (b2 = Tg(c2, a2.mode, d2, f2)), (b2.return = a2), b2;
      b2 = e(b2, c2);
      b2.return = a2;
      return b2;
    }
    function q(a2, b2, c2) {
      if (('string' === typeof b2 && '' !== b2) || 'number' === typeof b2)
        return (b2 = Qg('' + b2, a2.mode, c2)), (b2.return = a2), b2;
      if ('object' === typeof b2 && null !== b2) {
        switch (b2.$$typeof) {
          case va:
            return (
              (c2 = Rg(b2.type, b2.key, b2.props, null, a2.mode, c2)),
              (c2.ref = Lg(a2, null, b2)),
              (c2.return = a2),
              c2
            );
          case wa:
            return (b2 = Sg(b2, a2.mode, c2)), (b2.return = a2), b2;
          case Ha:
            var d2 = b2._init;
            return q(a2, d2(b2._payload), c2);
        }
        if (eb(b2) || Ka(b2))
          return (b2 = Tg(b2, a2.mode, c2, null)), (b2.return = a2), b2;
        Mg(a2, b2);
      }
      return null;
    }
    function r(a2, b2, c2, d2) {
      var e2 = null !== b2 ? b2.key : null;
      if (('string' === typeof c2 && '' !== c2) || 'number' === typeof c2)
        return null !== e2 ? null : h(a2, b2, '' + c2, d2);
      if ('object' === typeof c2 && null !== c2) {
        switch (c2.$$typeof) {
          case va:
            return c2.key === e2 ? k(a2, b2, c2, d2) : null;
          case wa:
            return c2.key === e2 ? l(a2, b2, c2, d2) : null;
          case Ha:
            return (e2 = c2._init), r(a2, b2, e2(c2._payload), d2);
        }
        if (eb(c2) || Ka(c2))
          return null !== e2 ? null : m(a2, b2, c2, d2, null);
        Mg(a2, c2);
      }
      return null;
    }
    function y(a2, b2, c2, d2, e2) {
      if (('string' === typeof d2 && '' !== d2) || 'number' === typeof d2)
        return (a2 = a2.get(c2) || null), h(b2, a2, '' + d2, e2);
      if ('object' === typeof d2 && null !== d2) {
        switch (d2.$$typeof) {
          case va:
            return (
              (a2 = a2.get(null === d2.key ? c2 : d2.key) || null),
              k(b2, a2, d2, e2)
            );
          case wa:
            return (
              (a2 = a2.get(null === d2.key ? c2 : d2.key) || null),
              l(b2, a2, d2, e2)
            );
          case Ha:
            var f2 = d2._init;
            return y(a2, b2, c2, f2(d2._payload), e2);
        }
        if (eb(d2) || Ka(d2))
          return (a2 = a2.get(c2) || null), m(b2, a2, d2, e2, null);
        Mg(b2, d2);
      }
      return null;
    }
    function n(e2, g2, h2, k2) {
      for (
        var l2 = null, m2 = null, u = g2, w = (g2 = 0), x = null;
        null !== u && w < h2.length;
        w++
      ) {
        u.index > w ? ((x = u), (u = null)) : (x = u.sibling);
        var n2 = r(e2, u, h2[w], k2);
        if (null === n2) {
          null === u && (u = x);
          break;
        }
        a && u && null === n2.alternate && b(e2, u);
        g2 = f(n2, g2, w);
        null === m2 ? (l2 = n2) : (m2.sibling = n2);
        m2 = n2;
        u = x;
      }
      if (w === h2.length) return c(e2, u), I && tg(e2, w), l2;
      if (null === u) {
        for (; w < h2.length; w++)
          (u = q(e2, h2[w], k2)),
            null !== u &&
              ((g2 = f(u, g2, w)),
              null === m2 ? (l2 = u) : (m2.sibling = u),
              (m2 = u));
        I && tg(e2, w);
        return l2;
      }
      for (u = d(e2, u); w < h2.length; w++)
        (x = y(u, e2, w, h2[w], k2)),
          null !== x &&
            (a && null !== x.alternate && u.delete(null === x.key ? w : x.key),
            (g2 = f(x, g2, w)),
            null === m2 ? (l2 = x) : (m2.sibling = x),
            (m2 = x));
      a &&
        u.forEach(function (a2) {
          return b(e2, a2);
        });
      I && tg(e2, w);
      return l2;
    }
    function t(e2, g2, h2, k2) {
      var l2 = Ka(h2);
      if ('function' !== typeof l2) throw Error(p(150));
      h2 = l2.call(h2);
      if (null == h2) throw Error(p(151));
      for (
        var u = (l2 = null), m2 = g2, w = (g2 = 0), x = null, n2 = h2.next();
        null !== m2 && !n2.done;
        w++, n2 = h2.next()
      ) {
        m2.index > w ? ((x = m2), (m2 = null)) : (x = m2.sibling);
        var t2 = r(e2, m2, n2.value, k2);
        if (null === t2) {
          null === m2 && (m2 = x);
          break;
        }
        a && m2 && null === t2.alternate && b(e2, m2);
        g2 = f(t2, g2, w);
        null === u ? (l2 = t2) : (u.sibling = t2);
        u = t2;
        m2 = x;
      }
      if (n2.done) return c(e2, m2), I && tg(e2, w), l2;
      if (null === m2) {
        for (; !n2.done; w++, n2 = h2.next())
          (n2 = q(e2, n2.value, k2)),
            null !== n2 &&
              ((g2 = f(n2, g2, w)),
              null === u ? (l2 = n2) : (u.sibling = n2),
              (u = n2));
        I && tg(e2, w);
        return l2;
      }
      for (m2 = d(e2, m2); !n2.done; w++, n2 = h2.next())
        (n2 = y(m2, e2, w, n2.value, k2)),
          null !== n2 &&
            (a &&
              null !== n2.alternate &&
              m2.delete(null === n2.key ? w : n2.key),
            (g2 = f(n2, g2, w)),
            null === u ? (l2 = n2) : (u.sibling = n2),
            (u = n2));
      a &&
        m2.forEach(function (a2) {
          return b(e2, a2);
        });
      I && tg(e2, w);
      return l2;
    }
    function J(a2, d2, f2, h2) {
      'object' === typeof f2 &&
        null !== f2 &&
        f2.type === ya &&
        null === f2.key &&
        (f2 = f2.props.children);
      if ('object' === typeof f2 && null !== f2) {
        switch (f2.$$typeof) {
          case va:
            a: {
              for (var k2 = f2.key, l2 = d2; null !== l2; ) {
                if (l2.key === k2) {
                  k2 = f2.type;
                  if (k2 === ya) {
                    if (7 === l2.tag) {
                      c(a2, l2.sibling);
                      d2 = e(l2, f2.props.children);
                      d2.return = a2;
                      a2 = d2;
                      break a;
                    }
                  } else if (
                    l2.elementType === k2 ||
                    ('object' === typeof k2 &&
                      null !== k2 &&
                      k2.$$typeof === Ha &&
                      Ng(k2) === l2.type)
                  ) {
                    c(a2, l2.sibling);
                    d2 = e(l2, f2.props);
                    d2.ref = Lg(a2, l2, f2);
                    d2.return = a2;
                    a2 = d2;
                    break a;
                  }
                  c(a2, l2);
                  break;
                } else b(a2, l2);
                l2 = l2.sibling;
              }
              f2.type === ya
                ? ((d2 = Tg(f2.props.children, a2.mode, h2, f2.key)),
                  (d2.return = a2),
                  (a2 = d2))
                : ((h2 = Rg(f2.type, f2.key, f2.props, null, a2.mode, h2)),
                  (h2.ref = Lg(a2, d2, f2)),
                  (h2.return = a2),
                  (a2 = h2));
            }
            return g(a2);
          case wa:
            a: {
              for (l2 = f2.key; null !== d2; ) {
                if (d2.key === l2)
                  if (
                    4 === d2.tag &&
                    d2.stateNode.containerInfo === f2.containerInfo &&
                    d2.stateNode.implementation === f2.implementation
                  ) {
                    c(a2, d2.sibling);
                    d2 = e(d2, f2.children || []);
                    d2.return = a2;
                    a2 = d2;
                    break a;
                  } else {
                    c(a2, d2);
                    break;
                  }
                else b(a2, d2);
                d2 = d2.sibling;
              }
              d2 = Sg(f2, a2.mode, h2);
              d2.return = a2;
              a2 = d2;
            }
            return g(a2);
          case Ha:
            return (l2 = f2._init), J(a2, d2, l2(f2._payload), h2);
        }
        if (eb(f2)) return n(a2, d2, f2, h2);
        if (Ka(f2)) return t(a2, d2, f2, h2);
        Mg(a2, f2);
      }
      return ('string' === typeof f2 && '' !== f2) || 'number' === typeof f2
        ? ((f2 = '' + f2),
          null !== d2 && 6 === d2.tag
            ? (c(a2, d2.sibling), (d2 = e(d2, f2)), (d2.return = a2), (a2 = d2))
            : (c(a2, d2),
              (d2 = Qg(f2, a2.mode, h2)),
              (d2.return = a2),
              (a2 = d2)),
          g(a2))
        : c(a2, d2);
    }
    return J;
  }
  var Ug = Og(true),
    Vg = Og(false),
    Wg = Uf(null),
    Xg = null,
    Yg = null,
    Zg = null;
  function $g() {
    Zg = Yg = Xg = null;
  }
  function ah(a) {
    var b = Wg.current;
    E(Wg);
    a._currentValue = b;
  }
  function bh(a, b, c) {
    for (; null !== a; ) {
      var d = a.alternate;
      (a.childLanes & b) !== b
        ? ((a.childLanes |= b), null !== d && (d.childLanes |= b))
        : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
      if (a === c) break;
      a = a.return;
    }
  }
  function ch(a, b) {
    Xg = a;
    Zg = Yg = null;
    a = a.dependencies;
    null !== a &&
      null !== a.firstContext &&
      (0 !== (a.lanes & b) && (dh = true), (a.firstContext = null));
  }
  function eh(a) {
    var b = a._currentValue;
    if (Zg !== a)
      if (((a = { context: a, memoizedValue: b, next: null }), null === Yg)) {
        if (null === Xg) throw Error(p(308));
        Yg = a;
        Xg.dependencies = { lanes: 0, firstContext: a };
      } else Yg = Yg.next = a;
    return b;
  }
  var fh = null;
  function gh(a) {
    null === fh ? (fh = [a]) : fh.push(a);
  }
  function hh(a, b, c, d) {
    var e = b.interleaved;
    null === e ? ((c.next = c), gh(b)) : ((c.next = e.next), (e.next = c));
    b.interleaved = c;
    return ih(a, d);
  }
  function ih(a, b) {
    a.lanes |= b;
    var c = a.alternate;
    null !== c && (c.lanes |= b);
    c = a;
    for (a = a.return; null !== a; )
      (a.childLanes |= b),
        (c = a.alternate),
        null !== c && (c.childLanes |= b),
        (c = a),
        (a = a.return);
    return 3 === c.tag ? c.stateNode : null;
  }
  var jh = false;
  function kh(a) {
    a.updateQueue = {
      baseState: a.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function lh(a, b) {
    a = a.updateQueue;
    b.updateQueue === a &&
      (b.updateQueue = {
        baseState: a.baseState,
        firstBaseUpdate: a.firstBaseUpdate,
        lastBaseUpdate: a.lastBaseUpdate,
        shared: a.shared,
        effects: a.effects,
      });
  }
  function mh(a, b) {
    return {
      eventTime: a,
      lane: b,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function nh(a, b, c) {
    var d = a.updateQueue;
    if (null === d) return null;
    d = d.shared;
    if (0 !== (K & 2)) {
      var e = d.pending;
      null === e ? (b.next = b) : ((b.next = e.next), (e.next = b));
      d.pending = b;
      return ih(a, c);
    }
    e = d.interleaved;
    null === e ? ((b.next = b), gh(d)) : ((b.next = e.next), (e.next = b));
    d.interleaved = b;
    return ih(a, c);
  }
  function oh(a, b, c) {
    b = b.updateQueue;
    if (null !== b && ((b = b.shared), 0 !== (c & 4194240))) {
      var d = b.lanes;
      d &= a.pendingLanes;
      c |= d;
      b.lanes = c;
      Cc(a, c);
    }
  }
  function ph(a, b) {
    var c = a.updateQueue,
      d = a.alternate;
    if (null !== d && ((d = d.updateQueue), c === d)) {
      var e = null,
        f = null;
      c = c.firstBaseUpdate;
      if (null !== c) {
        do {
          var g = {
            eventTime: c.eventTime,
            lane: c.lane,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null,
          };
          null === f ? (e = f = g) : (f = f.next = g);
          c = c.next;
        } while (null !== c);
        null === f ? (e = f = b) : (f = f.next = b);
      } else e = f = b;
      c = {
        baseState: d.baseState,
        firstBaseUpdate: e,
        lastBaseUpdate: f,
        shared: d.shared,
        effects: d.effects,
      };
      a.updateQueue = c;
      return;
    }
    a = c.lastBaseUpdate;
    null === a ? (c.firstBaseUpdate = b) : (a.next = b);
    c.lastBaseUpdate = b;
  }
  function qh(a, b, c, d) {
    var e = a.updateQueue;
    jh = false;
    var f = e.firstBaseUpdate,
      g = e.lastBaseUpdate,
      h = e.shared.pending;
    if (null !== h) {
      e.shared.pending = null;
      var k = h,
        l = k.next;
      k.next = null;
      null === g ? (f = l) : (g.next = l);
      g = k;
      var m = a.alternate;
      null !== m &&
        ((m = m.updateQueue),
        (h = m.lastBaseUpdate),
        h !== g &&
          (null === h ? (m.firstBaseUpdate = l) : (h.next = l),
          (m.lastBaseUpdate = k)));
    }
    if (null !== f) {
      var q = e.baseState;
      g = 0;
      m = l = k = null;
      h = f;
      do {
        var r = h.lane,
          y = h.eventTime;
        if ((d & r) === r) {
          null !== m &&
            (m = m.next =
              {
                eventTime: y,
                lane: 0,
                tag: h.tag,
                payload: h.payload,
                callback: h.callback,
                next: null,
              });
          a: {
            var n = a,
              t = h;
            r = b;
            y = c;
            switch (t.tag) {
              case 1:
                n = t.payload;
                if ('function' === typeof n) {
                  q = n.call(y, q, r);
                  break a;
                }
                q = n;
                break a;
              case 3:
                n.flags = (n.flags & -65537) | 128;
              case 0:
                n = t.payload;
                r = 'function' === typeof n ? n.call(y, q, r) : n;
                if (null === r || void 0 === r) break a;
                q = A({}, q, r);
                break a;
              case 2:
                jh = true;
            }
          }
          null !== h.callback &&
            0 !== h.lane &&
            ((a.flags |= 64),
            (r = e.effects),
            null === r ? (e.effects = [h]) : r.push(h));
        } else
          (y = {
            eventTime: y,
            lane: r,
            tag: h.tag,
            payload: h.payload,
            callback: h.callback,
            next: null,
          }),
            null === m ? ((l = m = y), (k = q)) : (m = m.next = y),
            (g |= r);
        h = h.next;
        if (null === h)
          if (((h = e.shared.pending), null === h)) break;
          else
            (r = h),
              (h = r.next),
              (r.next = null),
              (e.lastBaseUpdate = r),
              (e.shared.pending = null);
      } while (1);
      null === m && (k = q);
      e.baseState = k;
      e.firstBaseUpdate = l;
      e.lastBaseUpdate = m;
      b = e.shared.interleaved;
      if (null !== b) {
        e = b;
        do (g |= e.lane), (e = e.next);
        while (e !== b);
      } else null === f && (e.shared.lanes = 0);
      rh |= g;
      a.lanes = g;
      a.memoizedState = q;
    }
  }
  function sh(a, b, c) {
    a = b.effects;
    b.effects = null;
    if (null !== a)
      for (b = 0; b < a.length; b++) {
        var d = a[b],
          e = d.callback;
        if (null !== e) {
          d.callback = null;
          d = c;
          if ('function' !== typeof e) throw Error(p(191, e));
          e.call(d);
        }
      }
  }
  var th = {},
    uh = Uf(th),
    vh = Uf(th),
    wh = Uf(th);
  function xh(a) {
    if (a === th) throw Error(p(174));
    return a;
  }
  function yh(a, b) {
    G(wh, b);
    G(vh, a);
    G(uh, th);
    a = b.nodeType;
    switch (a) {
      case 9:
      case 11:
        b = (b = b.documentElement) ? b.namespaceURI : lb(null, '');
        break;
      default:
        (a = 8 === a ? b.parentNode : b),
          (b = a.namespaceURI || null),
          (a = a.tagName),
          (b = lb(b, a));
    }
    E(uh);
    G(uh, b);
  }
  function zh() {
    E(uh);
    E(vh);
    E(wh);
  }
  function Ah(a) {
    xh(wh.current);
    var b = xh(uh.current);
    var c = lb(b, a.type);
    b !== c && (G(vh, a), G(uh, c));
  }
  function Bh(a) {
    vh.current === a && (E(uh), E(vh));
  }
  var L = Uf(0);
  function Ch(a) {
    for (var b = a; null !== b; ) {
      if (13 === b.tag) {
        var c = b.memoizedState;
        if (
          null !== c &&
          ((c = c.dehydrated), null === c || '$?' === c.data || '$!' === c.data)
        )
          return b;
      } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
        if (0 !== (b.flags & 128)) return b;
      } else if (null !== b.child) {
        b.child.return = b;
        b = b.child;
        continue;
      }
      if (b === a) break;
      for (; null === b.sibling; ) {
        if (null === b.return || b.return === a) return null;
        b = b.return;
      }
      b.sibling.return = b.return;
      b = b.sibling;
    }
    return null;
  }
  var Dh = [];
  function Eh() {
    for (var a = 0; a < Dh.length; a++)
      Dh[a]._workInProgressVersionPrimary = null;
    Dh.length = 0;
  }
  var Fh = ua.ReactCurrentDispatcher,
    Gh = ua.ReactCurrentBatchConfig,
    Hh = 0,
    M = null,
    N = null,
    O = null,
    Ih = false,
    Jh = false,
    Kh = 0,
    Lh = 0;
  function P() {
    throw Error(p(321));
  }
  function Mh(a, b) {
    if (null === b) return false;
    for (var c = 0; c < b.length && c < a.length; c++)
      if (!He(a[c], b[c])) return false;
    return true;
  }
  function Nh(a, b, c, d, e, f) {
    Hh = f;
    M = b;
    b.memoizedState = null;
    b.updateQueue = null;
    b.lanes = 0;
    Fh.current = null === a || null === a.memoizedState ? Oh : Ph;
    a = c(d, e);
    if (Jh) {
      f = 0;
      do {
        Jh = false;
        Kh = 0;
        if (25 <= f) throw Error(p(301));
        f += 1;
        O = N = null;
        b.updateQueue = null;
        Fh.current = Qh;
        a = c(d, e);
      } while (Jh);
    }
    Fh.current = Rh;
    b = null !== N && null !== N.next;
    Hh = 0;
    O = N = M = null;
    Ih = false;
    if (b) throw Error(p(300));
    return a;
  }
  function Sh() {
    var a = 0 !== Kh;
    Kh = 0;
    return a;
  }
  function Th() {
    var a = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    null === O ? (M.memoizedState = O = a) : (O = O.next = a);
    return O;
  }
  function Uh() {
    if (null === N) {
      var a = M.alternate;
      a = null !== a ? a.memoizedState : null;
    } else a = N.next;
    var b = null === O ? M.memoizedState : O.next;
    if (null !== b) (O = b), (N = a);
    else {
      if (null === a) throw Error(p(310));
      N = a;
      a = {
        memoizedState: N.memoizedState,
        baseState: N.baseState,
        baseQueue: N.baseQueue,
        queue: N.queue,
        next: null,
      };
      null === O ? (M.memoizedState = O = a) : (O = O.next = a);
    }
    return O;
  }
  function Vh(a, b) {
    return 'function' === typeof b ? b(a) : b;
  }
  function Wh(a) {
    var b = Uh(),
      c = b.queue;
    if (null === c) throw Error(p(311));
    c.lastRenderedReducer = a;
    var d = N,
      e = d.baseQueue,
      f = c.pending;
    if (null !== f) {
      if (null !== e) {
        var g = e.next;
        e.next = f.next;
        f.next = g;
      }
      d.baseQueue = e = f;
      c.pending = null;
    }
    if (null !== e) {
      f = e.next;
      d = d.baseState;
      var h = (g = null),
        k = null,
        l = f;
      do {
        var m = l.lane;
        if ((Hh & m) === m)
          null !== k &&
            (k = k.next =
              {
                lane: 0,
                action: l.action,
                hasEagerState: l.hasEagerState,
                eagerState: l.eagerState,
                next: null,
              }),
            (d = l.hasEagerState ? l.eagerState : a(d, l.action));
        else {
          var q = {
            lane: m,
            action: l.action,
            hasEagerState: l.hasEagerState,
            eagerState: l.eagerState,
            next: null,
          };
          null === k ? ((h = k = q), (g = d)) : (k = k.next = q);
          M.lanes |= m;
          rh |= m;
        }
        l = l.next;
      } while (null !== l && l !== f);
      null === k ? (g = d) : (k.next = h);
      He(d, b.memoizedState) || (dh = true);
      b.memoizedState = d;
      b.baseState = g;
      b.baseQueue = k;
      c.lastRenderedState = d;
    }
    a = c.interleaved;
    if (null !== a) {
      e = a;
      do (f = e.lane), (M.lanes |= f), (rh |= f), (e = e.next);
      while (e !== a);
    } else null === e && (c.lanes = 0);
    return [b.memoizedState, c.dispatch];
  }
  function Xh(a) {
    var b = Uh(),
      c = b.queue;
    if (null === c) throw Error(p(311));
    c.lastRenderedReducer = a;
    var d = c.dispatch,
      e = c.pending,
      f = b.memoizedState;
    if (null !== e) {
      c.pending = null;
      var g = (e = e.next);
      do (f = a(f, g.action)), (g = g.next);
      while (g !== e);
      He(f, b.memoizedState) || (dh = true);
      b.memoizedState = f;
      null === b.baseQueue && (b.baseState = f);
      c.lastRenderedState = f;
    }
    return [f, d];
  }
  function Yh() {}
  function Zh(a, b) {
    var c = M,
      d = Uh(),
      e = b(),
      f = !He(d.memoizedState, e);
    f && ((d.memoizedState = e), (dh = true));
    d = d.queue;
    $h(ai.bind(null, c, d, a), [a]);
    if (d.getSnapshot !== b || f || (null !== O && O.memoizedState.tag & 1)) {
      c.flags |= 2048;
      bi(9, ci.bind(null, c, d, e, b), void 0, null);
      if (null === Q) throw Error(p(349));
      0 !== (Hh & 30) || di(c, b, e);
    }
    return e;
  }
  function di(a, b, c) {
    a.flags |= 16384;
    a = { getSnapshot: b, value: c };
    b = M.updateQueue;
    null === b
      ? ((b = { lastEffect: null, stores: null }),
        (M.updateQueue = b),
        (b.stores = [a]))
      : ((c = b.stores), null === c ? (b.stores = [a]) : c.push(a));
  }
  function ci(a, b, c, d) {
    b.value = c;
    b.getSnapshot = d;
    ei(b) && fi(a);
  }
  function ai(a, b, c) {
    return c(function () {
      ei(b) && fi(a);
    });
  }
  function ei(a) {
    var b = a.getSnapshot;
    a = a.value;
    try {
      var c = b();
      return !He(a, c);
    } catch (d) {
      return true;
    }
  }
  function fi(a) {
    var b = ih(a, 1);
    null !== b && gi(b, a, 1, -1);
  }
  function hi(a) {
    var b = Th();
    'function' === typeof a && (a = a());
    b.memoizedState = b.baseState = a;
    a = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Vh,
      lastRenderedState: a,
    };
    b.queue = a;
    a = a.dispatch = ii.bind(null, M, a);
    return [b.memoizedState, a];
  }
  function bi(a, b, c, d) {
    a = { tag: a, create: b, destroy: c, deps: d, next: null };
    b = M.updateQueue;
    null === b
      ? ((b = { lastEffect: null, stores: null }),
        (M.updateQueue = b),
        (b.lastEffect = a.next = a))
      : ((c = b.lastEffect),
        null === c
          ? (b.lastEffect = a.next = a)
          : ((d = c.next), (c.next = a), (a.next = d), (b.lastEffect = a)));
    return a;
  }
  function ji() {
    return Uh().memoizedState;
  }
  function ki(a, b, c, d) {
    var e = Th();
    M.flags |= a;
    e.memoizedState = bi(1 | b, c, void 0, void 0 === d ? null : d);
  }
  function li(a, b, c, d) {
    var e = Uh();
    d = void 0 === d ? null : d;
    var f = void 0;
    if (null !== N) {
      var g = N.memoizedState;
      f = g.destroy;
      if (null !== d && Mh(d, g.deps)) {
        e.memoizedState = bi(b, c, f, d);
        return;
      }
    }
    M.flags |= a;
    e.memoizedState = bi(1 | b, c, f, d);
  }
  function mi(a, b) {
    return ki(8390656, 8, a, b);
  }
  function $h(a, b) {
    return li(2048, 8, a, b);
  }
  function ni(a, b) {
    return li(4, 2, a, b);
  }
  function oi(a, b) {
    return li(4, 4, a, b);
  }
  function pi(a, b) {
    if ('function' === typeof b)
      return (
        (a = a()),
        b(a),
        function () {
          b(null);
        }
      );
    if (null !== b && void 0 !== b)
      return (
        (a = a()),
        (b.current = a),
        function () {
          b.current = null;
        }
      );
  }
  function qi(a, b, c) {
    c = null !== c && void 0 !== c ? c.concat([a]) : null;
    return li(4, 4, pi.bind(null, b, a), c);
  }
  function ri() {}
  function si(a, b) {
    var c = Uh();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && Mh(b, d[1])) return d[0];
    c.memoizedState = [a, b];
    return a;
  }
  function ti(a, b) {
    var c = Uh();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && Mh(b, d[1])) return d[0];
    a = a();
    c.memoizedState = [a, b];
    return a;
  }
  function ui(a, b, c) {
    if (0 === (Hh & 21))
      return (
        a.baseState && ((a.baseState = false), (dh = true)),
        (a.memoizedState = c)
      );
    He(c, b) || ((c = yc()), (M.lanes |= c), (rh |= c), (a.baseState = true));
    return b;
  }
  function vi(a, b) {
    var c = C;
    C = 0 !== c && 4 > c ? c : 4;
    a(true);
    var d = Gh.transition;
    Gh.transition = {};
    try {
      a(false), b();
    } finally {
      (C = c), (Gh.transition = d);
    }
  }
  function wi() {
    return Uh().memoizedState;
  }
  function xi(a, b, c) {
    var d = yi(a);
    c = {
      lane: d,
      action: c,
      hasEagerState: false,
      eagerState: null,
      next: null,
    };
    if (zi(a)) Ai(b, c);
    else if (((c = hh(a, b, c, d)), null !== c)) {
      var e = R();
      gi(c, a, d, e);
      Bi(c, b, d);
    }
  }
  function ii(a, b, c) {
    var d = yi(a),
      e = {
        lane: d,
        action: c,
        hasEagerState: false,
        eagerState: null,
        next: null,
      };
    if (zi(a)) Ai(b, e);
    else {
      var f = a.alternate;
      if (
        0 === a.lanes &&
        (null === f || 0 === f.lanes) &&
        ((f = b.lastRenderedReducer), null !== f)
      )
        try {
          var g = b.lastRenderedState,
            h = f(g, c);
          e.hasEagerState = true;
          e.eagerState = h;
          if (He(h, g)) {
            var k = b.interleaved;
            null === k
              ? ((e.next = e), gh(b))
              : ((e.next = k.next), (k.next = e));
            b.interleaved = e;
            return;
          }
        } catch (l) {
        } finally {
        }
      c = hh(a, b, e, d);
      null !== c && ((e = R()), gi(c, a, d, e), Bi(c, b, d));
    }
  }
  function zi(a) {
    var b = a.alternate;
    return a === M || (null !== b && b === M);
  }
  function Ai(a, b) {
    Jh = Ih = true;
    var c = a.pending;
    null === c ? (b.next = b) : ((b.next = c.next), (c.next = b));
    a.pending = b;
  }
  function Bi(a, b, c) {
    if (0 !== (c & 4194240)) {
      var d = b.lanes;
      d &= a.pendingLanes;
      c |= d;
      b.lanes = c;
      Cc(a, c);
    }
  }
  var Rh = {
      readContext: eh,
      useCallback: P,
      useContext: P,
      useEffect: P,
      useImperativeHandle: P,
      useInsertionEffect: P,
      useLayoutEffect: P,
      useMemo: P,
      useReducer: P,
      useRef: P,
      useState: P,
      useDebugValue: P,
      useDeferredValue: P,
      useTransition: P,
      useMutableSource: P,
      useSyncExternalStore: P,
      useId: P,
      unstable_isNewReconciler: false,
    },
    Oh = {
      readContext: eh,
      useCallback: function (a, b) {
        Th().memoizedState = [a, void 0 === b ? null : b];
        return a;
      },
      useContext: eh,
      useEffect: mi,
      useImperativeHandle: function (a, b, c) {
        c = null !== c && void 0 !== c ? c.concat([a]) : null;
        return ki(4194308, 4, pi.bind(null, b, a), c);
      },
      useLayoutEffect: function (a, b) {
        return ki(4194308, 4, a, b);
      },
      useInsertionEffect: function (a, b) {
        return ki(4, 2, a, b);
      },
      useMemo: function (a, b) {
        var c = Th();
        b = void 0 === b ? null : b;
        a = a();
        c.memoizedState = [a, b];
        return a;
      },
      useReducer: function (a, b, c) {
        var d = Th();
        b = void 0 !== c ? c(b) : b;
        d.memoizedState = d.baseState = b;
        a = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: a,
          lastRenderedState: b,
        };
        d.queue = a;
        a = a.dispatch = xi.bind(null, M, a);
        return [d.memoizedState, a];
      },
      useRef: function (a) {
        var b = Th();
        a = { current: a };
        return (b.memoizedState = a);
      },
      useState: hi,
      useDebugValue: ri,
      useDeferredValue: function (a) {
        return (Th().memoizedState = a);
      },
      useTransition: function () {
        var a = hi(false),
          b = a[0];
        a = vi.bind(null, a[1]);
        Th().memoizedState = a;
        return [b, a];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (a, b, c) {
        var d = M,
          e = Th();
        if (I) {
          if (void 0 === c) throw Error(p(407));
          c = c();
        } else {
          c = b();
          if (null === Q) throw Error(p(349));
          0 !== (Hh & 30) || di(d, b, c);
        }
        e.memoizedState = c;
        var f = { value: c, getSnapshot: b };
        e.queue = f;
        mi(ai.bind(null, d, f, a), [a]);
        d.flags |= 2048;
        bi(9, ci.bind(null, d, f, c, b), void 0, null);
        return c;
      },
      useId: function () {
        var a = Th(),
          b = Q.identifierPrefix;
        if (I) {
          var c = sg;
          var d = rg;
          c = (d & ~(1 << (32 - oc(d) - 1))).toString(32) + c;
          b = ':' + b + 'R' + c;
          c = Kh++;
          0 < c && (b += 'H' + c.toString(32));
          b += ':';
        } else (c = Lh++), (b = ':' + b + 'r' + c.toString(32) + ':');
        return (a.memoizedState = b);
      },
      unstable_isNewReconciler: false,
    },
    Ph = {
      readContext: eh,
      useCallback: si,
      useContext: eh,
      useEffect: $h,
      useImperativeHandle: qi,
      useInsertionEffect: ni,
      useLayoutEffect: oi,
      useMemo: ti,
      useReducer: Wh,
      useRef: ji,
      useState: function () {
        return Wh(Vh);
      },
      useDebugValue: ri,
      useDeferredValue: function (a) {
        var b = Uh();
        return ui(b, N.memoizedState, a);
      },
      useTransition: function () {
        var a = Wh(Vh)[0],
          b = Uh().memoizedState;
        return [a, b];
      },
      useMutableSource: Yh,
      useSyncExternalStore: Zh,
      useId: wi,
      unstable_isNewReconciler: false,
    },
    Qh = {
      readContext: eh,
      useCallback: si,
      useContext: eh,
      useEffect: $h,
      useImperativeHandle: qi,
      useInsertionEffect: ni,
      useLayoutEffect: oi,
      useMemo: ti,
      useReducer: Xh,
      useRef: ji,
      useState: function () {
        return Xh(Vh);
      },
      useDebugValue: ri,
      useDeferredValue: function (a) {
        var b = Uh();
        return null === N ? (b.memoizedState = a) : ui(b, N.memoizedState, a);
      },
      useTransition: function () {
        var a = Xh(Vh)[0],
          b = Uh().memoizedState;
        return [a, b];
      },
      useMutableSource: Yh,
      useSyncExternalStore: Zh,
      useId: wi,
      unstable_isNewReconciler: false,
    };
  function Ci(a, b) {
    if (a && a.defaultProps) {
      b = A({}, b);
      a = a.defaultProps;
      for (var c in a) void 0 === b[c] && (b[c] = a[c]);
      return b;
    }
    return b;
  }
  function Di(a, b, c, d) {
    b = a.memoizedState;
    c = c(d, b);
    c = null === c || void 0 === c ? b : A({}, b, c);
    a.memoizedState = c;
    0 === a.lanes && (a.updateQueue.baseState = c);
  }
  var Ei = {
    isMounted: function (a) {
      return (a = a._reactInternals) ? Vb(a) === a : false;
    },
    enqueueSetState: function (a, b, c) {
      a = a._reactInternals;
      var d = R(),
        e = yi(a),
        f = mh(d, e);
      f.payload = b;
      void 0 !== c && null !== c && (f.callback = c);
      b = nh(a, f, e);
      null !== b && (gi(b, a, e, d), oh(b, a, e));
    },
    enqueueReplaceState: function (a, b, c) {
      a = a._reactInternals;
      var d = R(),
        e = yi(a),
        f = mh(d, e);
      f.tag = 1;
      f.payload = b;
      void 0 !== c && null !== c && (f.callback = c);
      b = nh(a, f, e);
      null !== b && (gi(b, a, e, d), oh(b, a, e));
    },
    enqueueForceUpdate: function (a, b) {
      a = a._reactInternals;
      var c = R(),
        d = yi(a),
        e = mh(c, d);
      e.tag = 2;
      void 0 !== b && null !== b && (e.callback = b);
      b = nh(a, e, d);
      null !== b && (gi(b, a, d, c), oh(b, a, d));
    },
  };
  function Fi(a, b, c, d, e, f, g) {
    a = a.stateNode;
    return 'function' === typeof a.shouldComponentUpdate
      ? a.shouldComponentUpdate(d, f, g)
      : b.prototype && b.prototype.isPureReactComponent
        ? !Ie(c, d) || !Ie(e, f)
        : true;
  }
  function Gi(a, b, c) {
    var d = false,
      e = Vf;
    var f = b.contextType;
    'object' === typeof f && null !== f
      ? (f = eh(f))
      : ((e = Zf(b) ? Xf : H.current),
        (d = b.contextTypes),
        (f = (d = null !== d && void 0 !== d) ? Yf(a, e) : Vf));
    b = new b(c, f);
    a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
    b.updater = Ei;
    a.stateNode = b;
    b._reactInternals = a;
    d &&
      ((a = a.stateNode),
      (a.__reactInternalMemoizedUnmaskedChildContext = e),
      (a.__reactInternalMemoizedMaskedChildContext = f));
    return b;
  }
  function Hi(a, b, c, d) {
    a = b.state;
    'function' === typeof b.componentWillReceiveProps &&
      b.componentWillReceiveProps(c, d);
    'function' === typeof b.UNSAFE_componentWillReceiveProps &&
      b.UNSAFE_componentWillReceiveProps(c, d);
    b.state !== a && Ei.enqueueReplaceState(b, b.state, null);
  }
  function Ii(a, b, c, d) {
    var e = a.stateNode;
    e.props = c;
    e.state = a.memoizedState;
    e.refs = {};
    kh(a);
    var f = b.contextType;
    'object' === typeof f && null !== f
      ? (e.context = eh(f))
      : ((f = Zf(b) ? Xf : H.current), (e.context = Yf(a, f)));
    e.state = a.memoizedState;
    f = b.getDerivedStateFromProps;
    'function' === typeof f && (Di(a, b, f, c), (e.state = a.memoizedState));
    'function' === typeof b.getDerivedStateFromProps ||
      'function' === typeof e.getSnapshotBeforeUpdate ||
      ('function' !== typeof e.UNSAFE_componentWillMount &&
        'function' !== typeof e.componentWillMount) ||
      ((b = e.state),
      'function' === typeof e.componentWillMount && e.componentWillMount(),
      'function' === typeof e.UNSAFE_componentWillMount &&
        e.UNSAFE_componentWillMount(),
      b !== e.state && Ei.enqueueReplaceState(e, e.state, null),
      qh(a, c, e, d),
      (e.state = a.memoizedState));
    'function' === typeof e.componentDidMount && (a.flags |= 4194308);
  }
  function Ji(a, b) {
    try {
      var c = '',
        d = b;
      do (c += Pa(d)), (d = d.return);
      while (d);
      var e = c;
    } catch (f) {
      e = '\nError generating stack: ' + f.message + '\n' + f.stack;
    }
    return { value: a, source: b, stack: e, digest: null };
  }
  function Ki(a, b, c) {
    return {
      value: a,
      source: null,
      stack: null != c ? c : null,
      digest: null != b ? b : null,
    };
  }
  function Li(a, b) {
    try {
      console.error(b.value);
    } catch (c) {
      setTimeout(function () {
        throw c;
      });
    }
  }
  var Mi = 'function' === typeof WeakMap ? WeakMap : Map;
  function Ni(a, b, c) {
    c = mh(-1, c);
    c.tag = 3;
    c.payload = { element: null };
    var d = b.value;
    c.callback = function () {
      Oi || ((Oi = true), (Pi = d));
      Li(a, b);
    };
    return c;
  }
  function Qi(a, b, c) {
    c = mh(-1, c);
    c.tag = 3;
    var d = a.type.getDerivedStateFromError;
    if ('function' === typeof d) {
      var e = b.value;
      c.payload = function () {
        return d(e);
      };
      c.callback = function () {
        Li(a, b);
      };
    }
    var f = a.stateNode;
    null !== f &&
      'function' === typeof f.componentDidCatch &&
      (c.callback = function () {
        Li(a, b);
        'function' !== typeof d &&
          (null === Ri ? (Ri = /* @__PURE__ */ new Set([this])) : Ri.add(this));
        var c2 = b.stack;
        this.componentDidCatch(b.value, {
          componentStack: null !== c2 ? c2 : '',
        });
      });
    return c;
  }
  function Si(a, b, c) {
    var d = a.pingCache;
    if (null === d) {
      d = a.pingCache = new Mi();
      var e = /* @__PURE__ */ new Set();
      d.set(b, e);
    } else
      (e = d.get(b)),
        void 0 === e && ((e = /* @__PURE__ */ new Set()), d.set(b, e));
    e.has(c) || (e.add(c), (a = Ti.bind(null, a, b, c)), b.then(a, a));
  }
  function Ui(a) {
    do {
      var b;
      if ((b = 13 === a.tag))
        (b = a.memoizedState),
          (b = null !== b ? (null !== b.dehydrated ? true : false) : true);
      if (b) return a;
      a = a.return;
    } while (null !== a);
    return null;
  }
  function Vi(a, b, c, d, e) {
    if (0 === (a.mode & 1))
      return (
        a === b
          ? (a.flags |= 65536)
          : ((a.flags |= 128),
            (c.flags |= 131072),
            (c.flags &= -52805),
            1 === c.tag &&
              (null === c.alternate
                ? (c.tag = 17)
                : ((b = mh(-1, 1)), (b.tag = 2), nh(c, b, 1))),
            (c.lanes |= 1)),
        a
      );
    a.flags |= 65536;
    a.lanes = e;
    return a;
  }
  var Wi = ua.ReactCurrentOwner,
    dh = false;
  function Xi(a, b, c, d) {
    b.child = null === a ? Vg(b, null, c, d) : Ug(b, a.child, c, d);
  }
  function Yi(a, b, c, d, e) {
    c = c.render;
    var f = b.ref;
    ch(b, e);
    d = Nh(a, b, c, d, f, e);
    c = Sh();
    if (null !== a && !dh)
      return (
        (b.updateQueue = a.updateQueue),
        (b.flags &= -2053),
        (a.lanes &= ~e),
        Zi(a, b, e)
      );
    I && c && vg(b);
    b.flags |= 1;
    Xi(a, b, d, e);
    return b.child;
  }
  function $i(a, b, c, d, e) {
    if (null === a) {
      var f = c.type;
      if (
        'function' === typeof f &&
        !aj(f) &&
        void 0 === f.defaultProps &&
        null === c.compare &&
        void 0 === c.defaultProps
      )
        return (b.tag = 15), (b.type = f), bj(a, b, f, d, e);
      a = Rg(c.type, null, d, b, b.mode, e);
      a.ref = b.ref;
      a.return = b;
      return (b.child = a);
    }
    f = a.child;
    if (0 === (a.lanes & e)) {
      var g = f.memoizedProps;
      c = c.compare;
      c = null !== c ? c : Ie;
      if (c(g, d) && a.ref === b.ref) return Zi(a, b, e);
    }
    b.flags |= 1;
    a = Pg(f, d);
    a.ref = b.ref;
    a.return = b;
    return (b.child = a);
  }
  function bj(a, b, c, d, e) {
    if (null !== a) {
      var f = a.memoizedProps;
      if (Ie(f, d) && a.ref === b.ref)
        if (((dh = false), (b.pendingProps = d = f), 0 !== (a.lanes & e)))
          0 !== (a.flags & 131072) && (dh = true);
        else return (b.lanes = a.lanes), Zi(a, b, e);
    }
    return cj(a, b, c, d, e);
  }
  function dj(a, b, c) {
    var d = b.pendingProps,
      e = d.children,
      f = null !== a ? a.memoizedState : null;
    if ('hidden' === d.mode)
      if (0 === (b.mode & 1))
        (b.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          G(ej, fj),
          (fj |= c);
      else {
        if (0 === (c & 1073741824))
          return (
            (a = null !== f ? f.baseLanes | c : c),
            (b.lanes = b.childLanes = 1073741824),
            (b.memoizedState = {
              baseLanes: a,
              cachePool: null,
              transitions: null,
            }),
            (b.updateQueue = null),
            G(ej, fj),
            (fj |= a),
            null
          );
        b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
        d = null !== f ? f.baseLanes : c;
        G(ej, fj);
        fj |= d;
      }
    else
      null !== f ? ((d = f.baseLanes | c), (b.memoizedState = null)) : (d = c),
        G(ej, fj),
        (fj |= d);
    Xi(a, b, e, c);
    return b.child;
  }
  function gj(a, b) {
    var c = b.ref;
    if ((null === a && null !== c) || (null !== a && a.ref !== c))
      (b.flags |= 512), (b.flags |= 2097152);
  }
  function cj(a, b, c, d, e) {
    var f = Zf(c) ? Xf : H.current;
    f = Yf(b, f);
    ch(b, e);
    c = Nh(a, b, c, d, f, e);
    d = Sh();
    if (null !== a && !dh)
      return (
        (b.updateQueue = a.updateQueue),
        (b.flags &= -2053),
        (a.lanes &= ~e),
        Zi(a, b, e)
      );
    I && d && vg(b);
    b.flags |= 1;
    Xi(a, b, c, e);
    return b.child;
  }
  function hj(a, b, c, d, e) {
    if (Zf(c)) {
      var f = true;
      cg(b);
    } else f = false;
    ch(b, e);
    if (null === b.stateNode) ij(a, b), Gi(b, c, d), Ii(b, c, d, e), (d = true);
    else if (null === a) {
      var g = b.stateNode,
        h = b.memoizedProps;
      g.props = h;
      var k = g.context,
        l = c.contextType;
      'object' === typeof l && null !== l
        ? (l = eh(l))
        : ((l = Zf(c) ? Xf : H.current), (l = Yf(b, l)));
      var m = c.getDerivedStateFromProps,
        q =
          'function' === typeof m ||
          'function' === typeof g.getSnapshotBeforeUpdate;
      q ||
        ('function' !== typeof g.UNSAFE_componentWillReceiveProps &&
          'function' !== typeof g.componentWillReceiveProps) ||
        ((h !== d || k !== l) && Hi(b, g, d, l));
      jh = false;
      var r = b.memoizedState;
      g.state = r;
      qh(b, d, g, e);
      k = b.memoizedState;
      h !== d || r !== k || Wf.current || jh
        ? ('function' === typeof m && (Di(b, c, m, d), (k = b.memoizedState)),
          (h = jh || Fi(b, c, h, d, r, k, l))
            ? (q ||
                ('function' !== typeof g.UNSAFE_componentWillMount &&
                  'function' !== typeof g.componentWillMount) ||
                ('function' === typeof g.componentWillMount &&
                  g.componentWillMount(),
                'function' === typeof g.UNSAFE_componentWillMount &&
                  g.UNSAFE_componentWillMount()),
              'function' === typeof g.componentDidMount && (b.flags |= 4194308))
            : ('function' === typeof g.componentDidMount &&
                (b.flags |= 4194308),
              (b.memoizedProps = d),
              (b.memoizedState = k)),
          (g.props = d),
          (g.state = k),
          (g.context = l),
          (d = h))
        : ('function' === typeof g.componentDidMount && (b.flags |= 4194308),
          (d = false));
    } else {
      g = b.stateNode;
      lh(a, b);
      h = b.memoizedProps;
      l = b.type === b.elementType ? h : Ci(b.type, h);
      g.props = l;
      q = b.pendingProps;
      r = g.context;
      k = c.contextType;
      'object' === typeof k && null !== k
        ? (k = eh(k))
        : ((k = Zf(c) ? Xf : H.current), (k = Yf(b, k)));
      var y = c.getDerivedStateFromProps;
      (m =
        'function' === typeof y ||
        'function' === typeof g.getSnapshotBeforeUpdate) ||
        ('function' !== typeof g.UNSAFE_componentWillReceiveProps &&
          'function' !== typeof g.componentWillReceiveProps) ||
        ((h !== q || r !== k) && Hi(b, g, d, k));
      jh = false;
      r = b.memoizedState;
      g.state = r;
      qh(b, d, g, e);
      var n = b.memoizedState;
      h !== q || r !== n || Wf.current || jh
        ? ('function' === typeof y && (Di(b, c, y, d), (n = b.memoizedState)),
          (l = jh || Fi(b, c, l, d, r, n, k) || false)
            ? (m ||
                ('function' !== typeof g.UNSAFE_componentWillUpdate &&
                  'function' !== typeof g.componentWillUpdate) ||
                ('function' === typeof g.componentWillUpdate &&
                  g.componentWillUpdate(d, n, k),
                'function' === typeof g.UNSAFE_componentWillUpdate &&
                  g.UNSAFE_componentWillUpdate(d, n, k)),
              'function' === typeof g.componentDidUpdate && (b.flags |= 4),
              'function' === typeof g.getSnapshotBeforeUpdate &&
                (b.flags |= 1024))
            : ('function' !== typeof g.componentDidUpdate ||
                (h === a.memoizedProps && r === a.memoizedState) ||
                (b.flags |= 4),
              'function' !== typeof g.getSnapshotBeforeUpdate ||
                (h === a.memoizedProps && r === a.memoizedState) ||
                (b.flags |= 1024),
              (b.memoizedProps = d),
              (b.memoizedState = n)),
          (g.props = d),
          (g.state = n),
          (g.context = k),
          (d = l))
        : ('function' !== typeof g.componentDidUpdate ||
            (h === a.memoizedProps && r === a.memoizedState) ||
            (b.flags |= 4),
          'function' !== typeof g.getSnapshotBeforeUpdate ||
            (h === a.memoizedProps && r === a.memoizedState) ||
            (b.flags |= 1024),
          (d = false));
    }
    return jj(a, b, c, d, f, e);
  }
  function jj(a, b, c, d, e, f) {
    gj(a, b);
    var g = 0 !== (b.flags & 128);
    if (!d && !g) return e && dg(b, c, false), Zi(a, b, f);
    d = b.stateNode;
    Wi.current = b;
    var h =
      g && 'function' !== typeof c.getDerivedStateFromError ? null : d.render();
    b.flags |= 1;
    null !== a && g
      ? ((b.child = Ug(b, a.child, null, f)), (b.child = Ug(b, null, h, f)))
      : Xi(a, b, h, f);
    b.memoizedState = d.state;
    e && dg(b, c, true);
    return b.child;
  }
  function kj(a) {
    var b = a.stateNode;
    b.pendingContext
      ? ag(a, b.pendingContext, b.pendingContext !== b.context)
      : b.context && ag(a, b.context, false);
    yh(a, b.containerInfo);
  }
  function lj(a, b, c, d, e) {
    Ig();
    Jg(e);
    b.flags |= 256;
    Xi(a, b, c, d);
    return b.child;
  }
  var mj = { dehydrated: null, treeContext: null, retryLane: 0 };
  function nj(a) {
    return { baseLanes: a, cachePool: null, transitions: null };
  }
  function oj(a, b, c) {
    var d = b.pendingProps,
      e = L.current,
      f = false,
      g = 0 !== (b.flags & 128),
      h;
    (h = g) ||
      (h = null !== a && null === a.memoizedState ? false : 0 !== (e & 2));
    if (h) (f = true), (b.flags &= -129);
    else if (null === a || null !== a.memoizedState) e |= 1;
    G(L, e & 1);
    if (null === a) {
      Eg(b);
      a = b.memoizedState;
      if (null !== a && ((a = a.dehydrated), null !== a))
        return (
          0 === (b.mode & 1)
            ? (b.lanes = 1)
            : '$!' === a.data
              ? (b.lanes = 8)
              : (b.lanes = 1073741824),
          null
        );
      g = d.children;
      a = d.fallback;
      return f
        ? ((d = b.mode),
          (f = b.child),
          (g = { mode: 'hidden', children: g }),
          0 === (d & 1) && null !== f
            ? ((f.childLanes = 0), (f.pendingProps = g))
            : (f = pj(g, d, 0, null)),
          (a = Tg(a, d, c, null)),
          (f.return = b),
          (a.return = b),
          (f.sibling = a),
          (b.child = f),
          (b.child.memoizedState = nj(c)),
          (b.memoizedState = mj),
          a)
        : qj(b, g);
    }
    e = a.memoizedState;
    if (null !== e && ((h = e.dehydrated), null !== h))
      return rj(a, b, g, d, h, e, c);
    if (f) {
      f = d.fallback;
      g = b.mode;
      e = a.child;
      h = e.sibling;
      var k = { mode: 'hidden', children: d.children };
      0 === (g & 1) && b.child !== e
        ? ((d = b.child),
          (d.childLanes = 0),
          (d.pendingProps = k),
          (b.deletions = null))
        : ((d = Pg(e, k)), (d.subtreeFlags = e.subtreeFlags & 14680064));
      null !== h ? (f = Pg(h, f)) : ((f = Tg(f, g, c, null)), (f.flags |= 2));
      f.return = b;
      d.return = b;
      d.sibling = f;
      b.child = d;
      d = f;
      f = b.child;
      g = a.child.memoizedState;
      g =
        null === g
          ? nj(c)
          : {
              baseLanes: g.baseLanes | c,
              cachePool: null,
              transitions: g.transitions,
            };
      f.memoizedState = g;
      f.childLanes = a.childLanes & ~c;
      b.memoizedState = mj;
      return d;
    }
    f = a.child;
    a = f.sibling;
    d = Pg(f, { mode: 'visible', children: d.children });
    0 === (b.mode & 1) && (d.lanes = c);
    d.return = b;
    d.sibling = null;
    null !== a &&
      ((c = b.deletions),
      null === c ? ((b.deletions = [a]), (b.flags |= 16)) : c.push(a));
    b.child = d;
    b.memoizedState = null;
    return d;
  }
  function qj(a, b) {
    b = pj({ mode: 'visible', children: b }, a.mode, 0, null);
    b.return = a;
    return (a.child = b);
  }
  function sj(a, b, c, d) {
    null !== d && Jg(d);
    Ug(b, a.child, null, c);
    a = qj(b, b.pendingProps.children);
    a.flags |= 2;
    b.memoizedState = null;
    return a;
  }
  function rj(a, b, c, d, e, f, g) {
    if (c) {
      if (b.flags & 256)
        return (b.flags &= -257), (d = Ki(Error(p(422)))), sj(a, b, g, d);
      if (null !== b.memoizedState)
        return (b.child = a.child), (b.flags |= 128), null;
      f = d.fallback;
      e = b.mode;
      d = pj({ mode: 'visible', children: d.children }, e, 0, null);
      f = Tg(f, e, g, null);
      f.flags |= 2;
      d.return = b;
      f.return = b;
      d.sibling = f;
      b.child = d;
      0 !== (b.mode & 1) && Ug(b, a.child, null, g);
      b.child.memoizedState = nj(g);
      b.memoizedState = mj;
      return f;
    }
    if (0 === (b.mode & 1)) return sj(a, b, g, null);
    if ('$!' === e.data) {
      d = e.nextSibling && e.nextSibling.dataset;
      if (d) var h = d.dgst;
      d = h;
      f = Error(p(419));
      d = Ki(f, d, void 0);
      return sj(a, b, g, d);
    }
    h = 0 !== (g & a.childLanes);
    if (dh || h) {
      d = Q;
      if (null !== d) {
        switch (g & -g) {
          case 4:
            e = 2;
            break;
          case 16:
            e = 8;
            break;
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
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            e = 32;
            break;
          case 536870912:
            e = 268435456;
            break;
          default:
            e = 0;
        }
        e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
        0 !== e &&
          e !== f.retryLane &&
          ((f.retryLane = e), ih(a, e), gi(d, a, e, -1));
      }
      tj();
      d = Ki(Error(p(421)));
      return sj(a, b, g, d);
    }
    if ('$?' === e.data)
      return (
        (b.flags |= 128),
        (b.child = a.child),
        (b = uj.bind(null, a)),
        (e._reactRetry = b),
        null
      );
    a = f.treeContext;
    yg = Lf(e.nextSibling);
    xg = b;
    I = true;
    zg = null;
    null !== a &&
      ((og[pg++] = rg),
      (og[pg++] = sg),
      (og[pg++] = qg),
      (rg = a.id),
      (sg = a.overflow),
      (qg = b));
    b = qj(b, d.children);
    b.flags |= 4096;
    return b;
  }
  function vj(a, b, c) {
    a.lanes |= b;
    var d = a.alternate;
    null !== d && (d.lanes |= b);
    bh(a.return, b, c);
  }
  function wj(a, b, c, d, e) {
    var f = a.memoizedState;
    null === f
      ? (a.memoizedState = {
          isBackwards: b,
          rendering: null,
          renderingStartTime: 0,
          last: d,
          tail: c,
          tailMode: e,
        })
      : ((f.isBackwards = b),
        (f.rendering = null),
        (f.renderingStartTime = 0),
        (f.last = d),
        (f.tail = c),
        (f.tailMode = e));
  }
  function xj(a, b, c) {
    var d = b.pendingProps,
      e = d.revealOrder,
      f = d.tail;
    Xi(a, b, d.children, c);
    d = L.current;
    if (0 !== (d & 2)) (d = (d & 1) | 2), (b.flags |= 128);
    else {
      if (null !== a && 0 !== (a.flags & 128))
        a: for (a = b.child; null !== a; ) {
          if (13 === a.tag) null !== a.memoizedState && vj(a, c, b);
          else if (19 === a.tag) vj(a, c, b);
          else if (null !== a.child) {
            a.child.return = a;
            a = a.child;
            continue;
          }
          if (a === b) break a;
          for (; null === a.sibling; ) {
            if (null === a.return || a.return === b) break a;
            a = a.return;
          }
          a.sibling.return = a.return;
          a = a.sibling;
        }
      d &= 1;
    }
    G(L, d);
    if (0 === (b.mode & 1)) b.memoizedState = null;
    else
      switch (e) {
        case 'forwards':
          c = b.child;
          for (e = null; null !== c; )
            (a = c.alternate),
              null !== a && null === Ch(a) && (e = c),
              (c = c.sibling);
          c = e;
          null === c
            ? ((e = b.child), (b.child = null))
            : ((e = c.sibling), (c.sibling = null));
          wj(b, false, e, c, f);
          break;
        case 'backwards':
          c = null;
          e = b.child;
          for (b.child = null; null !== e; ) {
            a = e.alternate;
            if (null !== a && null === Ch(a)) {
              b.child = e;
              break;
            }
            a = e.sibling;
            e.sibling = c;
            c = e;
            e = a;
          }
          wj(b, true, c, null, f);
          break;
        case 'together':
          wj(b, false, null, null, void 0);
          break;
        default:
          b.memoizedState = null;
      }
    return b.child;
  }
  function ij(a, b) {
    0 === (b.mode & 1) &&
      null !== a &&
      ((a.alternate = null), (b.alternate = null), (b.flags |= 2));
  }
  function Zi(a, b, c) {
    null !== a && (b.dependencies = a.dependencies);
    rh |= b.lanes;
    if (0 === (c & b.childLanes)) return null;
    if (null !== a && b.child !== a.child) throw Error(p(153));
    if (null !== b.child) {
      a = b.child;
      c = Pg(a, a.pendingProps);
      b.child = c;
      for (c.return = b; null !== a.sibling; )
        (a = a.sibling),
          (c = c.sibling = Pg(a, a.pendingProps)),
          (c.return = b);
      c.sibling = null;
    }
    return b.child;
  }
  function yj(a, b, c) {
    switch (b.tag) {
      case 3:
        kj(b);
        Ig();
        break;
      case 5:
        Ah(b);
        break;
      case 1:
        Zf(b.type) && cg(b);
        break;
      case 4:
        yh(b, b.stateNode.containerInfo);
        break;
      case 10:
        var d = b.type._context,
          e = b.memoizedProps.value;
        G(Wg, d._currentValue);
        d._currentValue = e;
        break;
      case 13:
        d = b.memoizedState;
        if (null !== d) {
          if (null !== d.dehydrated)
            return G(L, L.current & 1), (b.flags |= 128), null;
          if (0 !== (c & b.child.childLanes)) return oj(a, b, c);
          G(L, L.current & 1);
          a = Zi(a, b, c);
          return null !== a ? a.sibling : null;
        }
        G(L, L.current & 1);
        break;
      case 19:
        d = 0 !== (c & b.childLanes);
        if (0 !== (a.flags & 128)) {
          if (d) return xj(a, b, c);
          b.flags |= 128;
        }
        e = b.memoizedState;
        null !== e &&
          ((e.rendering = null), (e.tail = null), (e.lastEffect = null));
        G(L, L.current);
        if (d) break;
        else return null;
      case 22:
      case 23:
        return (b.lanes = 0), dj(a, b, c);
    }
    return Zi(a, b, c);
  }
  var zj, Aj, Bj, Cj;
  zj = function (a, b) {
    for (var c = b.child; null !== c; ) {
      if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);
      else if (4 !== c.tag && null !== c.child) {
        c.child.return = c;
        c = c.child;
        continue;
      }
      if (c === b) break;
      for (; null === c.sibling; ) {
        if (null === c.return || c.return === b) return;
        c = c.return;
      }
      c.sibling.return = c.return;
      c = c.sibling;
    }
  };
  Aj = function () {};
  Bj = function (a, b, c, d) {
    var e = a.memoizedProps;
    if (e !== d) {
      a = b.stateNode;
      xh(uh.current);
      var f = null;
      switch (c) {
        case 'input':
          e = Ya(a, e);
          d = Ya(a, d);
          f = [];
          break;
        case 'select':
          e = A({}, e, { value: void 0 });
          d = A({}, d, { value: void 0 });
          f = [];
          break;
        case 'textarea':
          e = gb(a, e);
          d = gb(a, d);
          f = [];
          break;
        default:
          'function' !== typeof e.onClick &&
            'function' === typeof d.onClick &&
            (a.onclick = Bf);
      }
      ub(c, d);
      var g;
      c = null;
      for (l in e)
        if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && null != e[l])
          if ('style' === l) {
            var h = e[l];
            for (g in h) h.hasOwnProperty(g) && (c || (c = {}), (c[g] = ''));
          } else
            'dangerouslySetInnerHTML' !== l &&
              'children' !== l &&
              'suppressContentEditableWarning' !== l &&
              'suppressHydrationWarning' !== l &&
              'autoFocus' !== l &&
              (ea.hasOwnProperty(l)
                ? f || (f = [])
                : (f = f || []).push(l, null));
      for (l in d) {
        var k = d[l];
        h = null != e ? e[l] : void 0;
        if (d.hasOwnProperty(l) && k !== h && (null != k || null != h))
          if ('style' === l)
            if (h) {
              for (g in h)
                !h.hasOwnProperty(g) ||
                  (k && k.hasOwnProperty(g)) ||
                  (c || (c = {}), (c[g] = ''));
              for (g in k)
                k.hasOwnProperty(g) &&
                  h[g] !== k[g] &&
                  (c || (c = {}), (c[g] = k[g]));
            } else c || (f || (f = []), f.push(l, c)), (c = k);
          else
            'dangerouslySetInnerHTML' === l
              ? ((k = k ? k.__html : void 0),
                (h = h ? h.__html : void 0),
                null != k && h !== k && (f = f || []).push(l, k))
              : 'children' === l
                ? ('string' !== typeof k && 'number' !== typeof k) ||
                  (f = f || []).push(l, '' + k)
                : 'suppressContentEditableWarning' !== l &&
                  'suppressHydrationWarning' !== l &&
                  (ea.hasOwnProperty(l)
                    ? (null != k && 'onScroll' === l && D('scroll', a),
                      f || h === k || (f = []))
                    : (f = f || []).push(l, k));
      }
      c && (f = f || []).push('style', c);
      var l = f;
      if ((b.updateQueue = l)) b.flags |= 4;
    }
  };
  Cj = function (a, b, c, d) {
    c !== d && (b.flags |= 4);
  };
  function Dj(a, b) {
    if (!I)
      switch (a.tailMode) {
        case 'hidden':
          b = a.tail;
          for (var c = null; null !== b; )
            null !== b.alternate && (c = b), (b = b.sibling);
          null === c ? (a.tail = null) : (c.sibling = null);
          break;
        case 'collapsed':
          c = a.tail;
          for (var d = null; null !== c; )
            null !== c.alternate && (d = c), (c = c.sibling);
          null === d
            ? b || null === a.tail
              ? (a.tail = null)
              : (a.tail.sibling = null)
            : (d.sibling = null);
      }
  }
  function S(a) {
    var b = null !== a.alternate && a.alternate.child === a.child,
      c = 0,
      d = 0;
    if (b)
      for (var e = a.child; null !== e; )
        (c |= e.lanes | e.childLanes),
          (d |= e.subtreeFlags & 14680064),
          (d |= e.flags & 14680064),
          (e.return = a),
          (e = e.sibling);
    else
      for (e = a.child; null !== e; )
        (c |= e.lanes | e.childLanes),
          (d |= e.subtreeFlags),
          (d |= e.flags),
          (e.return = a),
          (e = e.sibling);
    a.subtreeFlags |= d;
    a.childLanes = c;
    return b;
  }
  function Ej(a, b, c) {
    var d = b.pendingProps;
    wg(b);
    switch (b.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return S(b), null;
      case 1:
        return Zf(b.type) && $f(), S(b), null;
      case 3:
        d = b.stateNode;
        zh();
        E(Wf);
        E(H);
        Eh();
        d.pendingContext &&
          ((d.context = d.pendingContext), (d.pendingContext = null));
        if (null === a || null === a.child)
          Gg(b)
            ? (b.flags |= 4)
            : null === a ||
              (a.memoizedState.isDehydrated && 0 === (b.flags & 256)) ||
              ((b.flags |= 1024), null !== zg && (Fj(zg), (zg = null)));
        Aj(a, b);
        S(b);
        return null;
      case 5:
        Bh(b);
        var e = xh(wh.current);
        c = b.type;
        if (null !== a && null != b.stateNode)
          Bj(a, b, c, d, e),
            a.ref !== b.ref && ((b.flags |= 512), (b.flags |= 2097152));
        else {
          if (!d) {
            if (null === b.stateNode) throw Error(p(166));
            S(b);
            return null;
          }
          a = xh(uh.current);
          if (Gg(b)) {
            d = b.stateNode;
            c = b.type;
            var f = b.memoizedProps;
            d[Of] = b;
            d[Pf] = f;
            a = 0 !== (b.mode & 1);
            switch (c) {
              case 'dialog':
                D('cancel', d);
                D('close', d);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                D('load', d);
                break;
              case 'video':
              case 'audio':
                for (e = 0; e < lf.length; e++) D(lf[e], d);
                break;
              case 'source':
                D('error', d);
                break;
              case 'img':
              case 'image':
              case 'link':
                D('error', d);
                D('load', d);
                break;
              case 'details':
                D('toggle', d);
                break;
              case 'input':
                Za(d, f);
                D('invalid', d);
                break;
              case 'select':
                d._wrapperState = { wasMultiple: !!f.multiple };
                D('invalid', d);
                break;
              case 'textarea':
                hb(d, f), D('invalid', d);
            }
            ub(c, f);
            e = null;
            for (var g in f)
              if (f.hasOwnProperty(g)) {
                var h = f[g];
                'children' === g
                  ? 'string' === typeof h
                    ? d.textContent !== h &&
                      (true !== f.suppressHydrationWarning &&
                        Af(d.textContent, h, a),
                      (e = ['children', h]))
                    : 'number' === typeof h &&
                      d.textContent !== '' + h &&
                      (true !== f.suppressHydrationWarning &&
                        Af(d.textContent, h, a),
                      (e = ['children', '' + h]))
                  : ea.hasOwnProperty(g) &&
                    null != h &&
                    'onScroll' === g &&
                    D('scroll', d);
              }
            switch (c) {
              case 'input':
                Va(d);
                db(d, f, true);
                break;
              case 'textarea':
                Va(d);
                jb(d);
                break;
              case 'select':
              case 'option':
                break;
              default:
                'function' === typeof f.onClick && (d.onclick = Bf);
            }
            d = e;
            b.updateQueue = d;
            null !== d && (b.flags |= 4);
          } else {
            g = 9 === e.nodeType ? e : e.ownerDocument;
            'http://www.w3.org/1999/xhtml' === a && (a = kb(c));
            'http://www.w3.org/1999/xhtml' === a
              ? 'script' === c
                ? ((a = g.createElement('div')),
                  (a.innerHTML = '<script><\/script>'),
                  (a = a.removeChild(a.firstChild)))
                : 'string' === typeof d.is
                  ? (a = g.createElement(c, { is: d.is }))
                  : ((a = g.createElement(c)),
                    'select' === c &&
                      ((g = a),
                      d.multiple
                        ? (g.multiple = true)
                        : d.size && (g.size = d.size)))
              : (a = g.createElementNS(a, c));
            a[Of] = b;
            a[Pf] = d;
            zj(a, b, false, false);
            b.stateNode = a;
            a: {
              g = vb(c, d);
              switch (c) {
                case 'dialog':
                  D('cancel', a);
                  D('close', a);
                  e = d;
                  break;
                case 'iframe':
                case 'object':
                case 'embed':
                  D('load', a);
                  e = d;
                  break;
                case 'video':
                case 'audio':
                  for (e = 0; e < lf.length; e++) D(lf[e], a);
                  e = d;
                  break;
                case 'source':
                  D('error', a);
                  e = d;
                  break;
                case 'img':
                case 'image':
                case 'link':
                  D('error', a);
                  D('load', a);
                  e = d;
                  break;
                case 'details':
                  D('toggle', a);
                  e = d;
                  break;
                case 'input':
                  Za(a, d);
                  e = Ya(a, d);
                  D('invalid', a);
                  break;
                case 'option':
                  e = d;
                  break;
                case 'select':
                  a._wrapperState = { wasMultiple: !!d.multiple };
                  e = A({}, d, { value: void 0 });
                  D('invalid', a);
                  break;
                case 'textarea':
                  hb(a, d);
                  e = gb(a, d);
                  D('invalid', a);
                  break;
                default:
                  e = d;
              }
              ub(c, e);
              h = e;
              for (f in h)
                if (h.hasOwnProperty(f)) {
                  var k = h[f];
                  'style' === f
                    ? sb(a, k)
                    : 'dangerouslySetInnerHTML' === f
                      ? ((k = k ? k.__html : void 0), null != k && nb(a, k))
                      : 'children' === f
                        ? 'string' === typeof k
                          ? ('textarea' !== c || '' !== k) && ob(a, k)
                          : 'number' === typeof k && ob(a, '' + k)
                        : 'suppressContentEditableWarning' !== f &&
                          'suppressHydrationWarning' !== f &&
                          'autoFocus' !== f &&
                          (ea.hasOwnProperty(f)
                            ? null != k && 'onScroll' === f && D('scroll', a)
                            : null != k && ta(a, f, k, g));
                }
              switch (c) {
                case 'input':
                  Va(a);
                  db(a, d, false);
                  break;
                case 'textarea':
                  Va(a);
                  jb(a);
                  break;
                case 'option':
                  null != d.value && a.setAttribute('value', '' + Sa(d.value));
                  break;
                case 'select':
                  a.multiple = !!d.multiple;
                  f = d.value;
                  null != f
                    ? fb(a, !!d.multiple, f, false)
                    : null != d.defaultValue &&
                      fb(a, !!d.multiple, d.defaultValue, true);
                  break;
                default:
                  'function' === typeof e.onClick && (a.onclick = Bf);
              }
              switch (c) {
                case 'button':
                case 'input':
                case 'select':
                case 'textarea':
                  d = !!d.autoFocus;
                  break a;
                case 'img':
                  d = true;
                  break a;
                default:
                  d = false;
              }
            }
            d && (b.flags |= 4);
          }
          null !== b.ref && ((b.flags |= 512), (b.flags |= 2097152));
        }
        S(b);
        return null;
      case 6:
        if (a && null != b.stateNode) Cj(a, b, a.memoizedProps, d);
        else {
          if ('string' !== typeof d && null === b.stateNode)
            throw Error(p(166));
          c = xh(wh.current);
          xh(uh.current);
          if (Gg(b)) {
            d = b.stateNode;
            c = b.memoizedProps;
            d[Of] = b;
            if ((f = d.nodeValue !== c)) {
              if (((a = xg), null !== a))
                switch (a.tag) {
                  case 3:
                    Af(d.nodeValue, c, 0 !== (a.mode & 1));
                    break;
                  case 5:
                    true !== a.memoizedProps.suppressHydrationWarning &&
                      Af(d.nodeValue, c, 0 !== (a.mode & 1));
                }
            }
            f && (b.flags |= 4);
          } else
            (d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d)),
              (d[Of] = b),
              (b.stateNode = d);
        }
        S(b);
        return null;
      case 13:
        E(L);
        d = b.memoizedState;
        if (
          null === a ||
          (null !== a.memoizedState && null !== a.memoizedState.dehydrated)
        ) {
          if (I && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128))
            Hg(), Ig(), (b.flags |= 98560), (f = false);
          else if (((f = Gg(b)), null !== d && null !== d.dehydrated)) {
            if (null === a) {
              if (!f) throw Error(p(318));
              f = b.memoizedState;
              f = null !== f ? f.dehydrated : null;
              if (!f) throw Error(p(317));
              f[Of] = b;
            } else
              Ig(),
                0 === (b.flags & 128) && (b.memoizedState = null),
                (b.flags |= 4);
            S(b);
            f = false;
          } else null !== zg && (Fj(zg), (zg = null)), (f = true);
          if (!f) return b.flags & 65536 ? b : null;
        }
        if (0 !== (b.flags & 128)) return (b.lanes = c), b;
        d = null !== d;
        d !== (null !== a && null !== a.memoizedState) &&
          d &&
          ((b.child.flags |= 8192),
          0 !== (b.mode & 1) &&
            (null === a || 0 !== (L.current & 1) ? 0 === T && (T = 3) : tj()));
        null !== b.updateQueue && (b.flags |= 4);
        S(b);
        return null;
      case 4:
        return (
          zh(),
          Aj(a, b),
          null === a && sf(b.stateNode.containerInfo),
          S(b),
          null
        );
      case 10:
        return ah(b.type._context), S(b), null;
      case 17:
        return Zf(b.type) && $f(), S(b), null;
      case 19:
        E(L);
        f = b.memoizedState;
        if (null === f) return S(b), null;
        d = 0 !== (b.flags & 128);
        g = f.rendering;
        if (null === g)
          if (d) Dj(f, false);
          else {
            if (0 !== T || (null !== a && 0 !== (a.flags & 128)))
              for (a = b.child; null !== a; ) {
                g = Ch(a);
                if (null !== g) {
                  b.flags |= 128;
                  Dj(f, false);
                  d = g.updateQueue;
                  null !== d && ((b.updateQueue = d), (b.flags |= 4));
                  b.subtreeFlags = 0;
                  d = c;
                  for (c = b.child; null !== c; )
                    (f = c),
                      (a = d),
                      (f.flags &= 14680066),
                      (g = f.alternate),
                      null === g
                        ? ((f.childLanes = 0),
                          (f.lanes = a),
                          (f.child = null),
                          (f.subtreeFlags = 0),
                          (f.memoizedProps = null),
                          (f.memoizedState = null),
                          (f.updateQueue = null),
                          (f.dependencies = null),
                          (f.stateNode = null))
                        : ((f.childLanes = g.childLanes),
                          (f.lanes = g.lanes),
                          (f.child = g.child),
                          (f.subtreeFlags = 0),
                          (f.deletions = null),
                          (f.memoizedProps = g.memoizedProps),
                          (f.memoizedState = g.memoizedState),
                          (f.updateQueue = g.updateQueue),
                          (f.type = g.type),
                          (a = g.dependencies),
                          (f.dependencies =
                            null === a
                              ? null
                              : {
                                  lanes: a.lanes,
                                  firstContext: a.firstContext,
                                })),
                      (c = c.sibling);
                  G(L, (L.current & 1) | 2);
                  return b.child;
                }
                a = a.sibling;
              }
            null !== f.tail &&
              B() > Gj &&
              ((b.flags |= 128), (d = true), Dj(f, false), (b.lanes = 4194304));
          }
        else {
          if (!d)
            if (((a = Ch(g)), null !== a)) {
              if (
                ((b.flags |= 128),
                (d = true),
                (c = a.updateQueue),
                null !== c && ((b.updateQueue = c), (b.flags |= 4)),
                Dj(f, true),
                null === f.tail &&
                  'hidden' === f.tailMode &&
                  !g.alternate &&
                  !I)
              )
                return S(b), null;
            } else
              2 * B() - f.renderingStartTime > Gj &&
                1073741824 !== c &&
                ((b.flags |= 128),
                (d = true),
                Dj(f, false),
                (b.lanes = 4194304));
          f.isBackwards
            ? ((g.sibling = b.child), (b.child = g))
            : ((c = f.last),
              null !== c ? (c.sibling = g) : (b.child = g),
              (f.last = g));
        }
        if (null !== f.tail)
          return (
            (b = f.tail),
            (f.rendering = b),
            (f.tail = b.sibling),
            (f.renderingStartTime = B()),
            (b.sibling = null),
            (c = L.current),
            G(L, d ? (c & 1) | 2 : c & 1),
            b
          );
        S(b);
        return null;
      case 22:
      case 23:
        return (
          Hj(),
          (d = null !== b.memoizedState),
          null !== a && (null !== a.memoizedState) !== d && (b.flags |= 8192),
          d && 0 !== (b.mode & 1)
            ? 0 !== (fj & 1073741824) &&
              (S(b), b.subtreeFlags & 6 && (b.flags |= 8192))
            : S(b),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(p(156, b.tag));
  }
  function Ij(a, b) {
    wg(b);
    switch (b.tag) {
      case 1:
        return (
          Zf(b.type) && $f(),
          (a = b.flags),
          a & 65536 ? ((b.flags = (a & -65537) | 128), b) : null
        );
      case 3:
        return (
          zh(),
          E(Wf),
          E(H),
          Eh(),
          (a = b.flags),
          0 !== (a & 65536) && 0 === (a & 128)
            ? ((b.flags = (a & -65537) | 128), b)
            : null
        );
      case 5:
        return Bh(b), null;
      case 13:
        E(L);
        a = b.memoizedState;
        if (null !== a && null !== a.dehydrated) {
          if (null === b.alternate) throw Error(p(340));
          Ig();
        }
        a = b.flags;
        return a & 65536 ? ((b.flags = (a & -65537) | 128), b) : null;
      case 19:
        return E(L), null;
      case 4:
        return zh(), null;
      case 10:
        return ah(b.type._context), null;
      case 22:
      case 23:
        return Hj(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Jj = false,
    U = false,
    Kj = 'function' === typeof WeakSet ? WeakSet : Set,
    V = null;
  function Lj(a, b) {
    var c = a.ref;
    if (null !== c)
      if ('function' === typeof c)
        try {
          c(null);
        } catch (d) {
          W(a, b, d);
        }
      else c.current = null;
  }
  function Mj(a, b, c) {
    try {
      c();
    } catch (d) {
      W(a, b, d);
    }
  }
  var Nj = false;
  function Oj(a, b) {
    Cf = dd;
    a = Me();
    if (Ne(a)) {
      if ('selectionStart' in a)
        var c = { start: a.selectionStart, end: a.selectionEnd };
      else
        a: {
          c = ((c = a.ownerDocument) && c.defaultView) || window;
          var d = c.getSelection && c.getSelection();
          if (d && 0 !== d.rangeCount) {
            c = d.anchorNode;
            var e = d.anchorOffset,
              f = d.focusNode;
            d = d.focusOffset;
            try {
              c.nodeType, f.nodeType;
            } catch (F) {
              c = null;
              break a;
            }
            var g = 0,
              h = -1,
              k = -1,
              l = 0,
              m = 0,
              q = a,
              r = null;
            b: for (;;) {
              for (var y; ; ) {
                q !== c || (0 !== e && 3 !== q.nodeType) || (h = g + e);
                q !== f || (0 !== d && 3 !== q.nodeType) || (k = g + d);
                3 === q.nodeType && (g += q.nodeValue.length);
                if (null === (y = q.firstChild)) break;
                r = q;
                q = y;
              }
              for (;;) {
                if (q === a) break b;
                r === c && ++l === e && (h = g);
                r === f && ++m === d && (k = g);
                if (null !== (y = q.nextSibling)) break;
                q = r;
                r = q.parentNode;
              }
              q = y;
            }
            c = -1 === h || -1 === k ? null : { start: h, end: k };
          } else c = null;
        }
      c = c || { start: 0, end: 0 };
    } else c = null;
    Df = { focusedElem: a, selectionRange: c };
    dd = false;
    for (V = b; null !== V; )
      if (((b = V), (a = b.child), 0 !== (b.subtreeFlags & 1028) && null !== a))
        (a.return = b), (V = a);
      else
        for (; null !== V; ) {
          b = V;
          try {
            var n = b.alternate;
            if (0 !== (b.flags & 1024))
              switch (b.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (null !== n) {
                    var t = n.memoizedProps,
                      J = n.memoizedState,
                      x = b.stateNode,
                      w = x.getSnapshotBeforeUpdate(
                        b.elementType === b.type ? t : Ci(b.type, t),
                        J
                      );
                    x.__reactInternalSnapshotBeforeUpdate = w;
                  }
                  break;
                case 3:
                  var u = b.stateNode.containerInfo;
                  1 === u.nodeType
                    ? (u.textContent = '')
                    : 9 === u.nodeType &&
                      u.documentElement &&
                      u.removeChild(u.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(p(163));
              }
          } catch (F) {
            W(b, b.return, F);
          }
          a = b.sibling;
          if (null !== a) {
            a.return = b.return;
            V = a;
            break;
          }
          V = b.return;
        }
    n = Nj;
    Nj = false;
    return n;
  }
  function Pj(a, b, c) {
    var d = b.updateQueue;
    d = null !== d ? d.lastEffect : null;
    if (null !== d) {
      var e = (d = d.next);
      do {
        if ((e.tag & a) === a) {
          var f = e.destroy;
          e.destroy = void 0;
          void 0 !== f && Mj(b, c, f);
        }
        e = e.next;
      } while (e !== d);
    }
  }
  function Qj(a, b) {
    b = b.updateQueue;
    b = null !== b ? b.lastEffect : null;
    if (null !== b) {
      var c = (b = b.next);
      do {
        if ((c.tag & a) === a) {
          var d = c.create;
          c.destroy = d();
        }
        c = c.next;
      } while (c !== b);
    }
  }
  function Rj(a) {
    var b = a.ref;
    if (null !== b) {
      var c = a.stateNode;
      switch (a.tag) {
        case 5:
          a = c;
          break;
        default:
          a = c;
      }
      'function' === typeof b ? b(a) : (b.current = a);
    }
  }
  function Sj(a) {
    var b = a.alternate;
    null !== b && ((a.alternate = null), Sj(b));
    a.child = null;
    a.deletions = null;
    a.sibling = null;
    5 === a.tag &&
      ((b = a.stateNode),
      null !== b &&
        (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
    a.stateNode = null;
    a.return = null;
    a.dependencies = null;
    a.memoizedProps = null;
    a.memoizedState = null;
    a.pendingProps = null;
    a.stateNode = null;
    a.updateQueue = null;
  }
  function Tj(a) {
    return 5 === a.tag || 3 === a.tag || 4 === a.tag;
  }
  function Uj(a) {
    a: for (;;) {
      for (; null === a.sibling; ) {
        if (null === a.return || Tj(a.return)) return null;
        a = a.return;
      }
      a.sibling.return = a.return;
      for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
        if (a.flags & 2) continue a;
        if (null === a.child || 4 === a.tag) continue a;
        else (a.child.return = a), (a = a.child);
      }
      if (!(a.flags & 2)) return a.stateNode;
    }
  }
  function Vj(a, b, c) {
    var d = a.tag;
    if (5 === d || 6 === d)
      (a = a.stateNode),
        b
          ? 8 === c.nodeType
            ? c.parentNode.insertBefore(a, b)
            : c.insertBefore(a, b)
          : (8 === c.nodeType
              ? ((b = c.parentNode), b.insertBefore(a, c))
              : ((b = c), b.appendChild(a)),
            (c = c._reactRootContainer),
            (null !== c && void 0 !== c) ||
              null !== b.onclick ||
              (b.onclick = Bf));
    else if (4 !== d && ((a = a.child), null !== a))
      for (Vj(a, b, c), a = a.sibling; null !== a; )
        Vj(a, b, c), (a = a.sibling);
  }
  function Wj(a, b, c) {
    var d = a.tag;
    if (5 === d || 6 === d)
      (a = a.stateNode), b ? c.insertBefore(a, b) : c.appendChild(a);
    else if (4 !== d && ((a = a.child), null !== a))
      for (Wj(a, b, c), a = a.sibling; null !== a; )
        Wj(a, b, c), (a = a.sibling);
  }
  var X = null,
    Xj = false;
  function Yj(a, b, c) {
    for (c = c.child; null !== c; ) Zj(a, b, c), (c = c.sibling);
  }
  function Zj(a, b, c) {
    if (lc && 'function' === typeof lc.onCommitFiberUnmount)
      try {
        lc.onCommitFiberUnmount(kc, c);
      } catch (h) {}
    switch (c.tag) {
      case 5:
        U || Lj(c, b);
      case 6:
        var d = X,
          e = Xj;
        X = null;
        Yj(a, b, c);
        X = d;
        Xj = e;
        null !== X &&
          (Xj
            ? ((a = X),
              (c = c.stateNode),
              8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c))
            : X.removeChild(c.stateNode));
        break;
      case 18:
        null !== X &&
          (Xj
            ? ((a = X),
              (c = c.stateNode),
              8 === a.nodeType
                ? Kf(a.parentNode, c)
                : 1 === a.nodeType && Kf(a, c),
              bd(a))
            : Kf(X, c.stateNode));
        break;
      case 4:
        d = X;
        e = Xj;
        X = c.stateNode.containerInfo;
        Xj = true;
        Yj(a, b, c);
        X = d;
        Xj = e;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !U &&
          ((d = c.updateQueue), null !== d && ((d = d.lastEffect), null !== d))
        ) {
          e = d = d.next;
          do {
            var f = e,
              g = f.destroy;
            f = f.tag;
            void 0 !== g &&
              (0 !== (f & 2) ? Mj(c, b, g) : 0 !== (f & 4) && Mj(c, b, g));
            e = e.next;
          } while (e !== d);
        }
        Yj(a, b, c);
        break;
      case 1:
        if (
          !U &&
          (Lj(c, b),
          (d = c.stateNode),
          'function' === typeof d.componentWillUnmount)
        )
          try {
            (d.props = c.memoizedProps),
              (d.state = c.memoizedState),
              d.componentWillUnmount();
          } catch (h) {
            W(c, b, h);
          }
        Yj(a, b, c);
        break;
      case 21:
        Yj(a, b, c);
        break;
      case 22:
        c.mode & 1
          ? ((U = (d = U) || null !== c.memoizedState), Yj(a, b, c), (U = d))
          : Yj(a, b, c);
        break;
      default:
        Yj(a, b, c);
    }
  }
  function ak(a) {
    var b = a.updateQueue;
    if (null !== b) {
      a.updateQueue = null;
      var c = a.stateNode;
      null === c && (c = a.stateNode = new Kj());
      b.forEach(function (b2) {
        var d = bk.bind(null, a, b2);
        c.has(b2) || (c.add(b2), b2.then(d, d));
      });
    }
  }
  function ck(a, b) {
    var c = b.deletions;
    if (null !== c)
      for (var d = 0; d < c.length; d++) {
        var e = c[d];
        try {
          var f = a,
            g = b,
            h = g;
          a: for (; null !== h; ) {
            switch (h.tag) {
              case 5:
                X = h.stateNode;
                Xj = false;
                break a;
              case 3:
                X = h.stateNode.containerInfo;
                Xj = true;
                break a;
              case 4:
                X = h.stateNode.containerInfo;
                Xj = true;
                break a;
            }
            h = h.return;
          }
          if (null === X) throw Error(p(160));
          Zj(f, g, e);
          X = null;
          Xj = false;
          var k = e.alternate;
          null !== k && (k.return = null);
          e.return = null;
        } catch (l) {
          W(e, b, l);
        }
      }
    if (b.subtreeFlags & 12854)
      for (b = b.child; null !== b; ) dk(b, a), (b = b.sibling);
  }
  function dk(a, b) {
    var c = a.alternate,
      d = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ck(b, a);
        ek(a);
        if (d & 4) {
          try {
            Pj(3, a, a.return), Qj(3, a);
          } catch (t) {
            W(a, a.return, t);
          }
          try {
            Pj(5, a, a.return);
          } catch (t) {
            W(a, a.return, t);
          }
        }
        break;
      case 1:
        ck(b, a);
        ek(a);
        d & 512 && null !== c && Lj(c, c.return);
        break;
      case 5:
        ck(b, a);
        ek(a);
        d & 512 && null !== c && Lj(c, c.return);
        if (a.flags & 32) {
          var e = a.stateNode;
          try {
            ob(e, '');
          } catch (t) {
            W(a, a.return, t);
          }
        }
        if (d & 4 && ((e = a.stateNode), null != e)) {
          var f = a.memoizedProps,
            g = null !== c ? c.memoizedProps : f,
            h = a.type,
            k = a.updateQueue;
          a.updateQueue = null;
          if (null !== k)
            try {
              'input' === h && 'radio' === f.type && null != f.name && ab(e, f);
              vb(h, g);
              var l = vb(h, f);
              for (g = 0; g < k.length; g += 2) {
                var m = k[g],
                  q = k[g + 1];
                'style' === m
                  ? sb(e, q)
                  : 'dangerouslySetInnerHTML' === m
                    ? nb(e, q)
                    : 'children' === m
                      ? ob(e, q)
                      : ta(e, m, q, l);
              }
              switch (h) {
                case 'input':
                  bb(e, f);
                  break;
                case 'textarea':
                  ib(e, f);
                  break;
                case 'select':
                  var r = e._wrapperState.wasMultiple;
                  e._wrapperState.wasMultiple = !!f.multiple;
                  var y = f.value;
                  null != y
                    ? fb(e, !!f.multiple, y, false)
                    : r !== !!f.multiple &&
                      (null != f.defaultValue
                        ? fb(e, !!f.multiple, f.defaultValue, true)
                        : fb(e, !!f.multiple, f.multiple ? [] : '', false));
              }
              e[Pf] = f;
            } catch (t) {
              W(a, a.return, t);
            }
        }
        break;
      case 6:
        ck(b, a);
        ek(a);
        if (d & 4) {
          if (null === a.stateNode) throw Error(p(162));
          e = a.stateNode;
          f = a.memoizedProps;
          try {
            e.nodeValue = f;
          } catch (t) {
            W(a, a.return, t);
          }
        }
        break;
      case 3:
        ck(b, a);
        ek(a);
        if (d & 4 && null !== c && c.memoizedState.isDehydrated)
          try {
            bd(b.containerInfo);
          } catch (t) {
            W(a, a.return, t);
          }
        break;
      case 4:
        ck(b, a);
        ek(a);
        break;
      case 13:
        ck(b, a);
        ek(a);
        e = a.child;
        e.flags & 8192 &&
          ((f = null !== e.memoizedState),
          (e.stateNode.isHidden = f),
          !f ||
            (null !== e.alternate && null !== e.alternate.memoizedState) ||
            (fk = B()));
        d & 4 && ak(a);
        break;
      case 22:
        m = null !== c && null !== c.memoizedState;
        a.mode & 1 ? ((U = (l = U) || m), ck(b, a), (U = l)) : ck(b, a);
        ek(a);
        if (d & 8192) {
          l = null !== a.memoizedState;
          if ((a.stateNode.isHidden = l) && !m && 0 !== (a.mode & 1))
            for (V = a, m = a.child; null !== m; ) {
              for (q = V = m; null !== V; ) {
                r = V;
                y = r.child;
                switch (r.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Pj(4, r, r.return);
                    break;
                  case 1:
                    Lj(r, r.return);
                    var n = r.stateNode;
                    if ('function' === typeof n.componentWillUnmount) {
                      d = r;
                      c = r.return;
                      try {
                        (b = d),
                          (n.props = b.memoizedProps),
                          (n.state = b.memoizedState),
                          n.componentWillUnmount();
                      } catch (t) {
                        W(d, c, t);
                      }
                    }
                    break;
                  case 5:
                    Lj(r, r.return);
                    break;
                  case 22:
                    if (null !== r.memoizedState) {
                      gk(q);
                      continue;
                    }
                }
                null !== y ? ((y.return = r), (V = y)) : gk(q);
              }
              m = m.sibling;
            }
          a: for (m = null, q = a; ; ) {
            if (5 === q.tag) {
              if (null === m) {
                m = q;
                try {
                  (e = q.stateNode),
                    l
                      ? ((f = e.style),
                        'function' === typeof f.setProperty
                          ? f.setProperty('display', 'none', 'important')
                          : (f.display = 'none'))
                      : ((h = q.stateNode),
                        (k = q.memoizedProps.style),
                        (g =
                          void 0 !== k &&
                          null !== k &&
                          k.hasOwnProperty('display')
                            ? k.display
                            : null),
                        (h.style.display = rb('display', g)));
                } catch (t) {
                  W(a, a.return, t);
                }
              }
            } else if (6 === q.tag) {
              if (null === m)
                try {
                  q.stateNode.nodeValue = l ? '' : q.memoizedProps;
                } catch (t) {
                  W(a, a.return, t);
                }
            } else if (
              ((22 !== q.tag && 23 !== q.tag) ||
                null === q.memoizedState ||
                q === a) &&
              null !== q.child
            ) {
              q.child.return = q;
              q = q.child;
              continue;
            }
            if (q === a) break a;
            for (; null === q.sibling; ) {
              if (null === q.return || q.return === a) break a;
              m === q && (m = null);
              q = q.return;
            }
            m === q && (m = null);
            q.sibling.return = q.return;
            q = q.sibling;
          }
        }
        break;
      case 19:
        ck(b, a);
        ek(a);
        d & 4 && ak(a);
        break;
      case 21:
        break;
      default:
        ck(b, a), ek(a);
    }
  }
  function ek(a) {
    var b = a.flags;
    if (b & 2) {
      try {
        a: {
          for (var c = a.return; null !== c; ) {
            if (Tj(c)) {
              var d = c;
              break a;
            }
            c = c.return;
          }
          throw Error(p(160));
        }
        switch (d.tag) {
          case 5:
            var e = d.stateNode;
            d.flags & 32 && (ob(e, ''), (d.flags &= -33));
            var f = Uj(a);
            Wj(a, f, e);
            break;
          case 3:
          case 4:
            var g = d.stateNode.containerInfo,
              h = Uj(a);
            Vj(a, h, g);
            break;
          default:
            throw Error(p(161));
        }
      } catch (k) {
        W(a, a.return, k);
      }
      a.flags &= -3;
    }
    b & 4096 && (a.flags &= -4097);
  }
  function hk(a, b, c) {
    V = a;
    ik(a);
  }
  function ik(a, b, c) {
    for (var d = 0 !== (a.mode & 1); null !== V; ) {
      var e = V,
        f = e.child;
      if (22 === e.tag && d) {
        var g = null !== e.memoizedState || Jj;
        if (!g) {
          var h = e.alternate,
            k = (null !== h && null !== h.memoizedState) || U;
          h = Jj;
          var l = U;
          Jj = g;
          if ((U = k) && !l)
            for (V = e; null !== V; )
              (g = V),
                (k = g.child),
                22 === g.tag && null !== g.memoizedState
                  ? jk(e)
                  : null !== k
                    ? ((k.return = g), (V = k))
                    : jk(e);
          for (; null !== f; ) (V = f), ik(f), (f = f.sibling);
          V = e;
          Jj = h;
          U = l;
        }
        kk(a);
      } else
        0 !== (e.subtreeFlags & 8772) && null !== f
          ? ((f.return = e), (V = f))
          : kk(a);
    }
  }
  function kk(a) {
    for (; null !== V; ) {
      var b = V;
      if (0 !== (b.flags & 8772)) {
        var c = b.alternate;
        try {
          if (0 !== (b.flags & 8772))
            switch (b.tag) {
              case 0:
              case 11:
              case 15:
                U || Qj(5, b);
                break;
              case 1:
                var d = b.stateNode;
                if (b.flags & 4 && !U)
                  if (null === c) d.componentDidMount();
                  else {
                    var e =
                      b.elementType === b.type
                        ? c.memoizedProps
                        : Ci(b.type, c.memoizedProps);
                    d.componentDidUpdate(
                      e,
                      c.memoizedState,
                      d.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var f = b.updateQueue;
                null !== f && sh(b, f, d);
                break;
              case 3:
                var g = b.updateQueue;
                if (null !== g) {
                  c = null;
                  if (null !== b.child)
                    switch (b.child.tag) {
                      case 5:
                        c = b.child.stateNode;
                        break;
                      case 1:
                        c = b.child.stateNode;
                    }
                  sh(b, g, c);
                }
                break;
              case 5:
                var h = b.stateNode;
                if (null === c && b.flags & 4) {
                  c = h;
                  var k = b.memoizedProps;
                  switch (b.type) {
                    case 'button':
                    case 'input':
                    case 'select':
                    case 'textarea':
                      k.autoFocus && c.focus();
                      break;
                    case 'img':
                      k.src && (c.src = k.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (null === b.memoizedState) {
                  var l = b.alternate;
                  if (null !== l) {
                    var m = l.memoizedState;
                    if (null !== m) {
                      var q = m.dehydrated;
                      null !== q && bd(q);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(p(163));
            }
          U || (b.flags & 512 && Rj(b));
        } catch (r) {
          W(b, b.return, r);
        }
      }
      if (b === a) {
        V = null;
        break;
      }
      c = b.sibling;
      if (null !== c) {
        c.return = b.return;
        V = c;
        break;
      }
      V = b.return;
    }
  }
  function gk(a) {
    for (; null !== V; ) {
      var b = V;
      if (b === a) {
        V = null;
        break;
      }
      var c = b.sibling;
      if (null !== c) {
        c.return = b.return;
        V = c;
        break;
      }
      V = b.return;
    }
  }
  function jk(a) {
    for (; null !== V; ) {
      var b = V;
      try {
        switch (b.tag) {
          case 0:
          case 11:
          case 15:
            var c = b.return;
            try {
              Qj(4, b);
            } catch (k) {
              W(b, c, k);
            }
            break;
          case 1:
            var d = b.stateNode;
            if ('function' === typeof d.componentDidMount) {
              var e = b.return;
              try {
                d.componentDidMount();
              } catch (k) {
                W(b, e, k);
              }
            }
            var f = b.return;
            try {
              Rj(b);
            } catch (k) {
              W(b, f, k);
            }
            break;
          case 5:
            var g = b.return;
            try {
              Rj(b);
            } catch (k) {
              W(b, g, k);
            }
        }
      } catch (k) {
        W(b, b.return, k);
      }
      if (b === a) {
        V = null;
        break;
      }
      var h = b.sibling;
      if (null !== h) {
        h.return = b.return;
        V = h;
        break;
      }
      V = b.return;
    }
  }
  var lk = Math.ceil,
    mk = ua.ReactCurrentDispatcher,
    nk = ua.ReactCurrentOwner,
    ok = ua.ReactCurrentBatchConfig,
    K = 0,
    Q = null,
    Y = null,
    Z = 0,
    fj = 0,
    ej = Uf(0),
    T = 0,
    pk = null,
    rh = 0,
    qk = 0,
    rk = 0,
    sk = null,
    tk = null,
    fk = 0,
    Gj = Infinity,
    uk = null,
    Oi = false,
    Pi = null,
    Ri = null,
    vk = false,
    wk = null,
    xk = 0,
    yk = 0,
    zk = null,
    Ak = -1,
    Bk = 0;
  function R() {
    return 0 !== (K & 6) ? B() : -1 !== Ak ? Ak : (Ak = B());
  }
  function yi(a) {
    if (0 === (a.mode & 1)) return 1;
    if (0 !== (K & 2) && 0 !== Z) return Z & -Z;
    if (null !== Kg.transition) return 0 === Bk && (Bk = yc()), Bk;
    a = C;
    if (0 !== a) return a;
    a = window.event;
    a = void 0 === a ? 16 : jd(a.type);
    return a;
  }
  function gi(a, b, c, d) {
    if (50 < yk) throw ((yk = 0), (zk = null), Error(p(185)));
    Ac(a, c, d);
    if (0 === (K & 2) || a !== Q)
      a === Q && (0 === (K & 2) && (qk |= c), 4 === T && Ck(a, Z)),
        Dk(a, d),
        1 === c &&
          0 === K &&
          0 === (b.mode & 1) &&
          ((Gj = B() + 500), fg && jg());
  }
  function Dk(a, b) {
    var c = a.callbackNode;
    wc(a, b);
    var d = uc(a, a === Q ? Z : 0);
    if (0 === d)
      null !== c && bc(c), (a.callbackNode = null), (a.callbackPriority = 0);
    else if (((b = d & -d), a.callbackPriority !== b)) {
      null != c && bc(c);
      if (1 === b)
        0 === a.tag ? ig(Ek.bind(null, a)) : hg(Ek.bind(null, a)),
          Jf(function () {
            0 === (K & 6) && jg();
          }),
          (c = null);
      else {
        switch (Dc(d)) {
          case 1:
            c = fc;
            break;
          case 4:
            c = gc;
            break;
          case 16:
            c = hc;
            break;
          case 536870912:
            c = jc;
            break;
          default:
            c = hc;
        }
        c = Fk(c, Gk.bind(null, a));
      }
      a.callbackPriority = b;
      a.callbackNode = c;
    }
  }
  function Gk(a, b) {
    Ak = -1;
    Bk = 0;
    if (0 !== (K & 6)) throw Error(p(327));
    var c = a.callbackNode;
    if (Hk() && a.callbackNode !== c) return null;
    var d = uc(a, a === Q ? Z : 0);
    if (0 === d) return null;
    if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b) b = Ik(a, d);
    else {
      b = d;
      var e = K;
      K |= 2;
      var f = Jk();
      if (Q !== a || Z !== b) (uk = null), (Gj = B() + 500), Kk(a, b);
      do
        try {
          Lk();
          break;
        } catch (h) {
          Mk(a, h);
        }
      while (1);
      $g();
      mk.current = f;
      K = e;
      null !== Y ? (b = 0) : ((Q = null), (Z = 0), (b = T));
    }
    if (0 !== b) {
      2 === b && ((e = xc(a)), 0 !== e && ((d = e), (b = Nk(a, e))));
      if (1 === b) throw ((c = pk), Kk(a, 0), Ck(a, d), Dk(a, B()), c);
      if (6 === b) Ck(a, d);
      else {
        e = a.current.alternate;
        if (
          0 === (d & 30) &&
          !Ok(e) &&
          ((b = Ik(a, d)),
          2 === b && ((f = xc(a)), 0 !== f && ((d = f), (b = Nk(a, f)))),
          1 === b)
        )
          throw ((c = pk), Kk(a, 0), Ck(a, d), Dk(a, B()), c);
        a.finishedWork = e;
        a.finishedLanes = d;
        switch (b) {
          case 0:
          case 1:
            throw Error(p(345));
          case 2:
            Pk(a, tk, uk);
            break;
          case 3:
            Ck(a, d);
            if ((d & 130023424) === d && ((b = fk + 500 - B()), 10 < b)) {
              if (0 !== uc(a, 0)) break;
              e = a.suspendedLanes;
              if ((e & d) !== d) {
                R();
                a.pingedLanes |= a.suspendedLanes & e;
                break;
              }
              a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), b);
              break;
            }
            Pk(a, tk, uk);
            break;
          case 4:
            Ck(a, d);
            if ((d & 4194240) === d) break;
            b = a.eventTimes;
            for (e = -1; 0 < d; ) {
              var g = 31 - oc(d);
              f = 1 << g;
              g = b[g];
              g > e && (e = g);
              d &= ~f;
            }
            d = e;
            d = B() - d;
            d =
              (120 > d
                ? 120
                : 480 > d
                  ? 480
                  : 1080 > d
                    ? 1080
                    : 1920 > d
                      ? 1920
                      : 3e3 > d
                        ? 3e3
                        : 4320 > d
                          ? 4320
                          : 1960 * lk(d / 1960)) - d;
            if (10 < d) {
              a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), d);
              break;
            }
            Pk(a, tk, uk);
            break;
          case 5:
            Pk(a, tk, uk);
            break;
          default:
            throw Error(p(329));
        }
      }
    }
    Dk(a, B());
    return a.callbackNode === c ? Gk.bind(null, a) : null;
  }
  function Nk(a, b) {
    var c = sk;
    a.current.memoizedState.isDehydrated && (Kk(a, b).flags |= 256);
    a = Ik(a, b);
    2 !== a && ((b = tk), (tk = c), null !== b && Fj(b));
    return a;
  }
  function Fj(a) {
    null === tk ? (tk = a) : tk.push.apply(tk, a);
  }
  function Ok(a) {
    for (var b = a; ; ) {
      if (b.flags & 16384) {
        var c = b.updateQueue;
        if (null !== c && ((c = c.stores), null !== c))
          for (var d = 0; d < c.length; d++) {
            var e = c[d],
              f = e.getSnapshot;
            e = e.value;
            try {
              if (!He(f(), e)) return false;
            } catch (g) {
              return false;
            }
          }
      }
      c = b.child;
      if (b.subtreeFlags & 16384 && null !== c) (c.return = b), (b = c);
      else {
        if (b === a) break;
        for (; null === b.sibling; ) {
          if (null === b.return || b.return === a) return true;
          b = b.return;
        }
        b.sibling.return = b.return;
        b = b.sibling;
      }
    }
    return true;
  }
  function Ck(a, b) {
    b &= ~rk;
    b &= ~qk;
    a.suspendedLanes |= b;
    a.pingedLanes &= ~b;
    for (a = a.expirationTimes; 0 < b; ) {
      var c = 31 - oc(b),
        d = 1 << c;
      a[c] = -1;
      b &= ~d;
    }
  }
  function Ek(a) {
    if (0 !== (K & 6)) throw Error(p(327));
    Hk();
    var b = uc(a, 0);
    if (0 === (b & 1)) return Dk(a, B()), null;
    var c = Ik(a, b);
    if (0 !== a.tag && 2 === c) {
      var d = xc(a);
      0 !== d && ((b = d), (c = Nk(a, d)));
    }
    if (1 === c) throw ((c = pk), Kk(a, 0), Ck(a, b), Dk(a, B()), c);
    if (6 === c) throw Error(p(345));
    a.finishedWork = a.current.alternate;
    a.finishedLanes = b;
    Pk(a, tk, uk);
    Dk(a, B());
    return null;
  }
  function Qk(a, b) {
    var c = K;
    K |= 1;
    try {
      return a(b);
    } finally {
      (K = c), 0 === K && ((Gj = B() + 500), fg && jg());
    }
  }
  function Rk(a) {
    null !== wk && 0 === wk.tag && 0 === (K & 6) && Hk();
    var b = K;
    K |= 1;
    var c = ok.transition,
      d = C;
    try {
      if (((ok.transition = null), (C = 1), a)) return a();
    } finally {
      (C = d), (ok.transition = c), (K = b), 0 === (K & 6) && jg();
    }
  }
  function Hj() {
    fj = ej.current;
    E(ej);
  }
  function Kk(a, b) {
    a.finishedWork = null;
    a.finishedLanes = 0;
    var c = a.timeoutHandle;
    -1 !== c && ((a.timeoutHandle = -1), Gf(c));
    if (null !== Y)
      for (c = Y.return; null !== c; ) {
        var d = c;
        wg(d);
        switch (d.tag) {
          case 1:
            d = d.type.childContextTypes;
            null !== d && void 0 !== d && $f();
            break;
          case 3:
            zh();
            E(Wf);
            E(H);
            Eh();
            break;
          case 5:
            Bh(d);
            break;
          case 4:
            zh();
            break;
          case 13:
            E(L);
            break;
          case 19:
            E(L);
            break;
          case 10:
            ah(d.type._context);
            break;
          case 22:
          case 23:
            Hj();
        }
        c = c.return;
      }
    Q = a;
    Y = a = Pg(a.current, null);
    Z = fj = b;
    T = 0;
    pk = null;
    rk = qk = rh = 0;
    tk = sk = null;
    if (null !== fh) {
      for (b = 0; b < fh.length; b++)
        if (((c = fh[b]), (d = c.interleaved), null !== d)) {
          c.interleaved = null;
          var e = d.next,
            f = c.pending;
          if (null !== f) {
            var g = f.next;
            f.next = e;
            d.next = g;
          }
          c.pending = d;
        }
      fh = null;
    }
    return a;
  }
  function Mk(a, b) {
    do {
      var c = Y;
      try {
        $g();
        Fh.current = Rh;
        if (Ih) {
          for (var d = M.memoizedState; null !== d; ) {
            var e = d.queue;
            null !== e && (e.pending = null);
            d = d.next;
          }
          Ih = false;
        }
        Hh = 0;
        O = N = M = null;
        Jh = false;
        Kh = 0;
        nk.current = null;
        if (null === c || null === c.return) {
          T = 1;
          pk = b;
          Y = null;
          break;
        }
        a: {
          var f = a,
            g = c.return,
            h = c,
            k = b;
          b = Z;
          h.flags |= 32768;
          if (
            null !== k &&
            'object' === typeof k &&
            'function' === typeof k.then
          ) {
            var l = k,
              m = h,
              q = m.tag;
            if (0 === (m.mode & 1) && (0 === q || 11 === q || 15 === q)) {
              var r = m.alternate;
              r
                ? ((m.updateQueue = r.updateQueue),
                  (m.memoizedState = r.memoizedState),
                  (m.lanes = r.lanes))
                : ((m.updateQueue = null), (m.memoizedState = null));
            }
            var y = Ui(g);
            if (null !== y) {
              y.flags &= -257;
              Vi(y, g, h, f, b);
              y.mode & 1 && Si(f, l, b);
              b = y;
              k = l;
              var n = b.updateQueue;
              if (null === n) {
                var t = /* @__PURE__ */ new Set();
                t.add(k);
                b.updateQueue = t;
              } else n.add(k);
              break a;
            } else {
              if (0 === (b & 1)) {
                Si(f, l, b);
                tj();
                break a;
              }
              k = Error(p(426));
            }
          } else if (I && h.mode & 1) {
            var J = Ui(g);
            if (null !== J) {
              0 === (J.flags & 65536) && (J.flags |= 256);
              Vi(J, g, h, f, b);
              Jg(Ji(k, h));
              break a;
            }
          }
          f = k = Ji(k, h);
          4 !== T && (T = 2);
          null === sk ? (sk = [f]) : sk.push(f);
          f = g;
          do {
            switch (f.tag) {
              case 3:
                f.flags |= 65536;
                b &= -b;
                f.lanes |= b;
                var x = Ni(f, k, b);
                ph(f, x);
                break a;
              case 1:
                h = k;
                var w = f.type,
                  u = f.stateNode;
                if (
                  0 === (f.flags & 128) &&
                  ('function' === typeof w.getDerivedStateFromError ||
                    (null !== u &&
                      'function' === typeof u.componentDidCatch &&
                      (null === Ri || !Ri.has(u))))
                ) {
                  f.flags |= 65536;
                  b &= -b;
                  f.lanes |= b;
                  var F = Qi(f, h, b);
                  ph(f, F);
                  break a;
                }
            }
            f = f.return;
          } while (null !== f);
        }
        Sk(c);
      } catch (na) {
        b = na;
        Y === c && null !== c && (Y = c = c.return);
        continue;
      }
      break;
    } while (1);
  }
  function Jk() {
    var a = mk.current;
    mk.current = Rh;
    return null === a ? Rh : a;
  }
  function tj() {
    if (0 === T || 3 === T || 2 === T) T = 4;
    null === Q ||
      (0 === (rh & 268435455) && 0 === (qk & 268435455)) ||
      Ck(Q, Z);
  }
  function Ik(a, b) {
    var c = K;
    K |= 2;
    var d = Jk();
    if (Q !== a || Z !== b) (uk = null), Kk(a, b);
    do
      try {
        Tk();
        break;
      } catch (e) {
        Mk(a, e);
      }
    while (1);
    $g();
    K = c;
    mk.current = d;
    if (null !== Y) throw Error(p(261));
    Q = null;
    Z = 0;
    return T;
  }
  function Tk() {
    for (; null !== Y; ) Uk(Y);
  }
  function Lk() {
    for (; null !== Y && !cc(); ) Uk(Y);
  }
  function Uk(a) {
    var b = Vk(a.alternate, a, fj);
    a.memoizedProps = a.pendingProps;
    null === b ? Sk(a) : (Y = b);
    nk.current = null;
  }
  function Sk(a) {
    var b = a;
    do {
      var c = b.alternate;
      a = b.return;
      if (0 === (b.flags & 32768)) {
        if (((c = Ej(c, b, fj)), null !== c)) {
          Y = c;
          return;
        }
      } else {
        c = Ij(c, b);
        if (null !== c) {
          c.flags &= 32767;
          Y = c;
          return;
        }
        if (null !== a)
          (a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null);
        else {
          T = 6;
          Y = null;
          return;
        }
      }
      b = b.sibling;
      if (null !== b) {
        Y = b;
        return;
      }
      Y = b = a;
    } while (null !== b);
    0 === T && (T = 5);
  }
  function Pk(a, b, c) {
    var d = C,
      e = ok.transition;
    try {
      (ok.transition = null), (C = 1), Wk(a, b, c, d);
    } finally {
      (ok.transition = e), (C = d);
    }
    return null;
  }
  function Wk(a, b, c, d) {
    do Hk();
    while (null !== wk);
    if (0 !== (K & 6)) throw Error(p(327));
    c = a.finishedWork;
    var e = a.finishedLanes;
    if (null === c) return null;
    a.finishedWork = null;
    a.finishedLanes = 0;
    if (c === a.current) throw Error(p(177));
    a.callbackNode = null;
    a.callbackPriority = 0;
    var f = c.lanes | c.childLanes;
    Bc(a, f);
    a === Q && ((Y = Q = null), (Z = 0));
    (0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064)) ||
      vk ||
      ((vk = true),
      Fk(hc, function () {
        Hk();
        return null;
      }));
    f = 0 !== (c.flags & 15990);
    if (0 !== (c.subtreeFlags & 15990) || f) {
      f = ok.transition;
      ok.transition = null;
      var g = C;
      C = 1;
      var h = K;
      K |= 4;
      nk.current = null;
      Oj(a, c);
      dk(c, a);
      Oe(Df);
      dd = !!Cf;
      Df = Cf = null;
      a.current = c;
      hk(c);
      dc();
      K = h;
      C = g;
      ok.transition = f;
    } else a.current = c;
    vk && ((vk = false), (wk = a), (xk = e));
    f = a.pendingLanes;
    0 === f && (Ri = null);
    mc(c.stateNode);
    Dk(a, B());
    if (null !== b)
      for (d = a.onRecoverableError, c = 0; c < b.length; c++)
        (e = b[c]), d(e.value, { componentStack: e.stack, digest: e.digest });
    if (Oi) throw ((Oi = false), (a = Pi), (Pi = null), a);
    0 !== (xk & 1) && 0 !== a.tag && Hk();
    f = a.pendingLanes;
    0 !== (f & 1) ? (a === zk ? yk++ : ((yk = 0), (zk = a))) : (yk = 0);
    jg();
    return null;
  }
  function Hk() {
    if (null !== wk) {
      var a = Dc(xk),
        b = ok.transition,
        c = C;
      try {
        ok.transition = null;
        C = 16 > a ? 16 : a;
        if (null === wk) var d = false;
        else {
          a = wk;
          wk = null;
          xk = 0;
          if (0 !== (K & 6)) throw Error(p(331));
          var e = K;
          K |= 4;
          for (V = a.current; null !== V; ) {
            var f = V,
              g = f.child;
            if (0 !== (V.flags & 16)) {
              var h = f.deletions;
              if (null !== h) {
                for (var k = 0; k < h.length; k++) {
                  var l = h[k];
                  for (V = l; null !== V; ) {
                    var m = V;
                    switch (m.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Pj(8, m, f);
                    }
                    var q = m.child;
                    if (null !== q) (q.return = m), (V = q);
                    else
                      for (; null !== V; ) {
                        m = V;
                        var r = m.sibling,
                          y = m.return;
                        Sj(m);
                        if (m === l) {
                          V = null;
                          break;
                        }
                        if (null !== r) {
                          r.return = y;
                          V = r;
                          break;
                        }
                        V = y;
                      }
                  }
                }
                var n = f.alternate;
                if (null !== n) {
                  var t = n.child;
                  if (null !== t) {
                    n.child = null;
                    do {
                      var J = t.sibling;
                      t.sibling = null;
                      t = J;
                    } while (null !== t);
                  }
                }
                V = f;
              }
            }
            if (0 !== (f.subtreeFlags & 2064) && null !== g)
              (g.return = f), (V = g);
            else
              b: for (; null !== V; ) {
                f = V;
                if (0 !== (f.flags & 2048))
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pj(9, f, f.return);
                  }
                var x = f.sibling;
                if (null !== x) {
                  x.return = f.return;
                  V = x;
                  break b;
                }
                V = f.return;
              }
          }
          var w = a.current;
          for (V = w; null !== V; ) {
            g = V;
            var u = g.child;
            if (0 !== (g.subtreeFlags & 2064) && null !== u)
              (u.return = g), (V = u);
            else
              b: for (g = w; null !== V; ) {
                h = V;
                if (0 !== (h.flags & 2048))
                  try {
                    switch (h.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Qj(9, h);
                    }
                  } catch (na) {
                    W(h, h.return, na);
                  }
                if (h === g) {
                  V = null;
                  break b;
                }
                var F = h.sibling;
                if (null !== F) {
                  F.return = h.return;
                  V = F;
                  break b;
                }
                V = h.return;
              }
          }
          K = e;
          jg();
          if (lc && 'function' === typeof lc.onPostCommitFiberRoot)
            try {
              lc.onPostCommitFiberRoot(kc, a);
            } catch (na) {}
          d = true;
        }
        return d;
      } finally {
        (C = c), (ok.transition = b);
      }
    }
    return false;
  }
  function Xk(a, b, c) {
    b = Ji(c, b);
    b = Ni(a, b, 1);
    a = nh(a, b, 1);
    b = R();
    null !== a && (Ac(a, 1, b), Dk(a, b));
  }
  function W(a, b, c) {
    if (3 === a.tag) Xk(a, a, c);
    else
      for (; null !== b; ) {
        if (3 === b.tag) {
          Xk(b, a, c);
          break;
        } else if (1 === b.tag) {
          var d = b.stateNode;
          if (
            'function' === typeof b.type.getDerivedStateFromError ||
            ('function' === typeof d.componentDidCatch &&
              (null === Ri || !Ri.has(d)))
          ) {
            a = Ji(c, a);
            a = Qi(b, a, 1);
            b = nh(b, a, 1);
            a = R();
            null !== b && (Ac(b, 1, a), Dk(b, a));
            break;
          }
        }
        b = b.return;
      }
  }
  function Ti(a, b, c) {
    var d = a.pingCache;
    null !== d && d.delete(b);
    b = R();
    a.pingedLanes |= a.suspendedLanes & c;
    Q === a &&
      (Z & c) === c &&
      (4 === T || (3 === T && (Z & 130023424) === Z && 500 > B() - fk)
        ? Kk(a, 0)
        : (rk |= c));
    Dk(a, b);
  }
  function Yk(a, b) {
    0 === b &&
      (0 === (a.mode & 1)
        ? (b = 1)
        : ((b = sc), (sc <<= 1), 0 === (sc & 130023424) && (sc = 4194304)));
    var c = R();
    a = ih(a, b);
    null !== a && (Ac(a, b, c), Dk(a, c));
  }
  function uj(a) {
    var b = a.memoizedState,
      c = 0;
    null !== b && (c = b.retryLane);
    Yk(a, c);
  }
  function bk(a, b) {
    var c = 0;
    switch (a.tag) {
      case 13:
        var d = a.stateNode;
        var e = a.memoizedState;
        null !== e && (c = e.retryLane);
        break;
      case 19:
        d = a.stateNode;
        break;
      default:
        throw Error(p(314));
    }
    null !== d && d.delete(b);
    Yk(a, c);
  }
  var Vk;
  Vk = function (a, b, c) {
    if (null !== a)
      if (a.memoizedProps !== b.pendingProps || Wf.current) dh = true;
      else {
        if (0 === (a.lanes & c) && 0 === (b.flags & 128))
          return (dh = false), yj(a, b, c);
        dh = 0 !== (a.flags & 131072) ? true : false;
      }
    else (dh = false), I && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
    b.lanes = 0;
    switch (b.tag) {
      case 2:
        var d = b.type;
        ij(a, b);
        a = b.pendingProps;
        var e = Yf(b, H.current);
        ch(b, c);
        e = Nh(null, b, d, a, e, c);
        var f = Sh();
        b.flags |= 1;
        'object' === typeof e &&
        null !== e &&
        'function' === typeof e.render &&
        void 0 === e.$$typeof
          ? ((b.tag = 1),
            (b.memoizedState = null),
            (b.updateQueue = null),
            Zf(d) ? ((f = true), cg(b)) : (f = false),
            (b.memoizedState =
              null !== e.state && void 0 !== e.state ? e.state : null),
            kh(b),
            (e.updater = Ei),
            (b.stateNode = e),
            (e._reactInternals = b),
            Ii(b, d, a, c),
            (b = jj(null, b, d, true, f, c)))
          : ((b.tag = 0), I && f && vg(b), Xi(null, b, e, c), (b = b.child));
        return b;
      case 16:
        d = b.elementType;
        a: {
          ij(a, b);
          a = b.pendingProps;
          e = d._init;
          d = e(d._payload);
          b.type = d;
          e = b.tag = Zk(d);
          a = Ci(d, a);
          switch (e) {
            case 0:
              b = cj(null, b, d, a, c);
              break a;
            case 1:
              b = hj(null, b, d, a, c);
              break a;
            case 11:
              b = Yi(null, b, d, a, c);
              break a;
            case 14:
              b = $i(null, b, d, Ci(d.type, a), c);
              break a;
          }
          throw Error(p(306, d, ''));
        }
        return b;
      case 0:
        return (
          (d = b.type),
          (e = b.pendingProps),
          (e = b.elementType === d ? e : Ci(d, e)),
          cj(a, b, d, e, c)
        );
      case 1:
        return (
          (d = b.type),
          (e = b.pendingProps),
          (e = b.elementType === d ? e : Ci(d, e)),
          hj(a, b, d, e, c)
        );
      case 3:
        a: {
          kj(b);
          if (null === a) throw Error(p(387));
          d = b.pendingProps;
          f = b.memoizedState;
          e = f.element;
          lh(a, b);
          qh(b, d, null, c);
          var g = b.memoizedState;
          d = g.element;
          if (f.isDehydrated)
            if (
              ((f = {
                element: d,
                isDehydrated: false,
                cache: g.cache,
                pendingSuspenseBoundaries: g.pendingSuspenseBoundaries,
                transitions: g.transitions,
              }),
              (b.updateQueue.baseState = f),
              (b.memoizedState = f),
              b.flags & 256)
            ) {
              e = Ji(Error(p(423)), b);
              b = lj(a, b, d, c, e);
              break a;
            } else if (d !== e) {
              e = Ji(Error(p(424)), b);
              b = lj(a, b, d, c, e);
              break a;
            } else
              for (
                yg = Lf(b.stateNode.containerInfo.firstChild),
                  xg = b,
                  I = true,
                  zg = null,
                  c = Vg(b, null, d, c),
                  b.child = c;
                c;

              )
                (c.flags = (c.flags & -3) | 4096), (c = c.sibling);
          else {
            Ig();
            if (d === e) {
              b = Zi(a, b, c);
              break a;
            }
            Xi(a, b, d, c);
          }
          b = b.child;
        }
        return b;
      case 5:
        return (
          Ah(b),
          null === a && Eg(b),
          (d = b.type),
          (e = b.pendingProps),
          (f = null !== a ? a.memoizedProps : null),
          (g = e.children),
          Ef(d, e) ? (g = null) : null !== f && Ef(d, f) && (b.flags |= 32),
          gj(a, b),
          Xi(a, b, g, c),
          b.child
        );
      case 6:
        return null === a && Eg(b), null;
      case 13:
        return oj(a, b, c);
      case 4:
        return (
          yh(b, b.stateNode.containerInfo),
          (d = b.pendingProps),
          null === a ? (b.child = Ug(b, null, d, c)) : Xi(a, b, d, c),
          b.child
        );
      case 11:
        return (
          (d = b.type),
          (e = b.pendingProps),
          (e = b.elementType === d ? e : Ci(d, e)),
          Yi(a, b, d, e, c)
        );
      case 7:
        return Xi(a, b, b.pendingProps, c), b.child;
      case 8:
        return Xi(a, b, b.pendingProps.children, c), b.child;
      case 12:
        return Xi(a, b, b.pendingProps.children, c), b.child;
      case 10:
        a: {
          d = b.type._context;
          e = b.pendingProps;
          f = b.memoizedProps;
          g = e.value;
          G(Wg, d._currentValue);
          d._currentValue = g;
          if (null !== f)
            if (He(f.value, g)) {
              if (f.children === e.children && !Wf.current) {
                b = Zi(a, b, c);
                break a;
              }
            } else
              for (f = b.child, null !== f && (f.return = b); null !== f; ) {
                var h = f.dependencies;
                if (null !== h) {
                  g = f.child;
                  for (var k = h.firstContext; null !== k; ) {
                    if (k.context === d) {
                      if (1 === f.tag) {
                        k = mh(-1, c & -c);
                        k.tag = 2;
                        var l = f.updateQueue;
                        if (null !== l) {
                          l = l.shared;
                          var m = l.pending;
                          null === m
                            ? (k.next = k)
                            : ((k.next = m.next), (m.next = k));
                          l.pending = k;
                        }
                      }
                      f.lanes |= c;
                      k = f.alternate;
                      null !== k && (k.lanes |= c);
                      bh(f.return, c, b);
                      h.lanes |= c;
                      break;
                    }
                    k = k.next;
                  }
                } else if (10 === f.tag) g = f.type === b.type ? null : f.child;
                else if (18 === f.tag) {
                  g = f.return;
                  if (null === g) throw Error(p(341));
                  g.lanes |= c;
                  h = g.alternate;
                  null !== h && (h.lanes |= c);
                  bh(g, c, b);
                  g = f.sibling;
                } else g = f.child;
                if (null !== g) g.return = f;
                else
                  for (g = f; null !== g; ) {
                    if (g === b) {
                      g = null;
                      break;
                    }
                    f = g.sibling;
                    if (null !== f) {
                      f.return = g.return;
                      g = f;
                      break;
                    }
                    g = g.return;
                  }
                f = g;
              }
          Xi(a, b, e.children, c);
          b = b.child;
        }
        return b;
      case 9:
        return (
          (e = b.type),
          (d = b.pendingProps.children),
          ch(b, c),
          (e = eh(e)),
          (d = d(e)),
          (b.flags |= 1),
          Xi(a, b, d, c),
          b.child
        );
      case 14:
        return (
          (d = b.type),
          (e = Ci(d, b.pendingProps)),
          (e = Ci(d.type, e)),
          $i(a, b, d, e, c)
        );
      case 15:
        return bj(a, b, b.type, b.pendingProps, c);
      case 17:
        return (
          (d = b.type),
          (e = b.pendingProps),
          (e = b.elementType === d ? e : Ci(d, e)),
          ij(a, b),
          (b.tag = 1),
          Zf(d) ? ((a = true), cg(b)) : (a = false),
          ch(b, c),
          Gi(b, d, e),
          Ii(b, d, e, c),
          jj(null, b, d, true, a, c)
        );
      case 19:
        return xj(a, b, c);
      case 22:
        return dj(a, b, c);
    }
    throw Error(p(156, b.tag));
  };
  function Fk(a, b) {
    return ac(a, b);
  }
  function $k(a, b, c, d) {
    this.tag = a;
    this.key = c;
    this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null;
    this.index = 0;
    this.ref = null;
    this.pendingProps = b;
    this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null;
    this.mode = d;
    this.subtreeFlags = this.flags = 0;
    this.deletions = null;
    this.childLanes = this.lanes = 0;
    this.alternate = null;
  }
  function Bg(a, b, c, d) {
    return new $k(a, b, c, d);
  }
  function aj(a) {
    a = a.prototype;
    return !(!a || !a.isReactComponent);
  }
  function Zk(a) {
    if ('function' === typeof a) return aj(a) ? 1 : 0;
    if (void 0 !== a && null !== a) {
      a = a.$$typeof;
      if (a === Da) return 11;
      if (a === Ga) return 14;
    }
    return 2;
  }
  function Pg(a, b) {
    var c = a.alternate;
    null === c
      ? ((c = Bg(a.tag, b, a.key, a.mode)),
        (c.elementType = a.elementType),
        (c.type = a.type),
        (c.stateNode = a.stateNode),
        (c.alternate = a),
        (a.alternate = c))
      : ((c.pendingProps = b),
        (c.type = a.type),
        (c.flags = 0),
        (c.subtreeFlags = 0),
        (c.deletions = null));
    c.flags = a.flags & 14680064;
    c.childLanes = a.childLanes;
    c.lanes = a.lanes;
    c.child = a.child;
    c.memoizedProps = a.memoizedProps;
    c.memoizedState = a.memoizedState;
    c.updateQueue = a.updateQueue;
    b = a.dependencies;
    c.dependencies =
      null === b ? null : { lanes: b.lanes, firstContext: b.firstContext };
    c.sibling = a.sibling;
    c.index = a.index;
    c.ref = a.ref;
    return c;
  }
  function Rg(a, b, c, d, e, f) {
    var g = 2;
    d = a;
    if ('function' === typeof a) aj(a) && (g = 1);
    else if ('string' === typeof a) g = 5;
    else
      a: switch (a) {
        case ya:
          return Tg(c.children, e, f, b);
        case za:
          g = 8;
          e |= 8;
          break;
        case Aa:
          return (
            (a = Bg(12, c, b, e | 2)), (a.elementType = Aa), (a.lanes = f), a
          );
        case Ea:
          return (a = Bg(13, c, b, e)), (a.elementType = Ea), (a.lanes = f), a;
        case Fa:
          return (a = Bg(19, c, b, e)), (a.elementType = Fa), (a.lanes = f), a;
        case Ia:
          return pj(c, e, f, b);
        default:
          if ('object' === typeof a && null !== a)
            switch (a.$$typeof) {
              case Ba:
                g = 10;
                break a;
              case Ca:
                g = 9;
                break a;
              case Da:
                g = 11;
                break a;
              case Ga:
                g = 14;
                break a;
              case Ha:
                g = 16;
                d = null;
                break a;
            }
          throw Error(p(130, null == a ? a : typeof a, ''));
      }
    b = Bg(g, c, b, e);
    b.elementType = a;
    b.type = d;
    b.lanes = f;
    return b;
  }
  function Tg(a, b, c, d) {
    a = Bg(7, a, d, b);
    a.lanes = c;
    return a;
  }
  function pj(a, b, c, d) {
    a = Bg(22, a, d, b);
    a.elementType = Ia;
    a.lanes = c;
    a.stateNode = { isHidden: false };
    return a;
  }
  function Qg(a, b, c) {
    a = Bg(6, a, null, b);
    a.lanes = c;
    return a;
  }
  function Sg(a, b, c) {
    b = Bg(4, null !== a.children ? a.children : [], a.key, b);
    b.lanes = c;
    b.stateNode = {
      containerInfo: a.containerInfo,
      pendingChildren: null,
      implementation: a.implementation,
    };
    return b;
  }
  function al(a, b, c, d, e) {
    this.tag = b;
    this.containerInfo = a;
    this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null;
    this.timeoutHandle = -1;
    this.callbackNode = this.pendingContext = this.context = null;
    this.callbackPriority = 0;
    this.eventTimes = zc(0);
    this.expirationTimes = zc(-1);
    this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0;
    this.entanglements = zc(0);
    this.identifierPrefix = d;
    this.onRecoverableError = e;
    this.mutableSourceEagerHydrationData = null;
  }
  function bl(a, b, c, d, e, f, g, h, k) {
    a = new al(a, b, c, h, k);
    1 === b ? ((b = 1), true === f && (b |= 8)) : (b = 0);
    f = Bg(3, null, null, b);
    a.current = f;
    f.stateNode = a;
    f.memoizedState = {
      element: d,
      isDehydrated: c,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    };
    kh(f);
    return a;
  }
  function cl(a, b, c) {
    var d =
      3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
    return {
      $$typeof: wa,
      key: null == d ? null : '' + d,
      children: a,
      containerInfo: b,
      implementation: c,
    };
  }
  function dl(a) {
    if (!a) return Vf;
    a = a._reactInternals;
    a: {
      if (Vb(a) !== a || 1 !== a.tag) throw Error(p(170));
      var b = a;
      do {
        switch (b.tag) {
          case 3:
            b = b.stateNode.context;
            break a;
          case 1:
            if (Zf(b.type)) {
              b = b.stateNode.__reactInternalMemoizedMergedChildContext;
              break a;
            }
        }
        b = b.return;
      } while (null !== b);
      throw Error(p(171));
    }
    if (1 === a.tag) {
      var c = a.type;
      if (Zf(c)) return bg(a, c, b);
    }
    return b;
  }
  function el(a, b, c, d, e, f, g, h, k) {
    a = bl(c, d, true, a, e, f, g, h, k);
    a.context = dl(null);
    c = a.current;
    d = R();
    e = yi(c);
    f = mh(d, e);
    f.callback = void 0 !== b && null !== b ? b : null;
    nh(c, f, e);
    a.current.lanes = e;
    Ac(a, e, d);
    Dk(a, d);
    return a;
  }
  function fl(a, b, c, d) {
    var e = b.current,
      f = R(),
      g = yi(e);
    c = dl(c);
    null === b.context ? (b.context = c) : (b.pendingContext = c);
    b = mh(f, g);
    b.payload = { element: a };
    d = void 0 === d ? null : d;
    null !== d && (b.callback = d);
    a = nh(e, b, g);
    null !== a && (gi(a, e, g, f), oh(a, e, g));
    return g;
  }
  function gl(a) {
    a = a.current;
    if (!a.child) return null;
    switch (a.child.tag) {
      case 5:
        return a.child.stateNode;
      default:
        return a.child.stateNode;
    }
  }
  function hl(a, b) {
    a = a.memoizedState;
    if (null !== a && null !== a.dehydrated) {
      var c = a.retryLane;
      a.retryLane = 0 !== c && c < b ? c : b;
    }
  }
  function il(a, b) {
    hl(a, b);
    (a = a.alternate) && hl(a, b);
  }
  var kl =
    'function' === typeof reportError
      ? reportError
      : function (a) {
          console.error(a);
        };
  function ll(a) {
    this._internalRoot = a;
  }
  ml.prototype.render = ll.prototype.render = function (a) {
    var b = this._internalRoot;
    if (null === b) throw Error(p(409));
    fl(a, b, null, null);
  };
  ml.prototype.unmount = ll.prototype.unmount = function () {
    var a = this._internalRoot;
    if (null !== a) {
      this._internalRoot = null;
      var b = a.containerInfo;
      Rk(function () {
        fl(null, a, null, null);
      });
      b[uf] = null;
    }
  };
  function ml(a) {
    this._internalRoot = a;
  }
  ml.prototype.unstable_scheduleHydration = function (a) {
    if (a) {
      var b = Hc();
      a = { blockedOn: null, target: a, priority: b };
      for (var c = 0; c < Qc.length && 0 !== b && b < Qc[c].priority; c++);
      Qc.splice(c, 0, a);
      0 === c && Vc(a);
    }
  };
  function nl(a) {
    return !(!a || (1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType));
  }
  function ol(a) {
    return !(
      !a ||
      (1 !== a.nodeType &&
        9 !== a.nodeType &&
        11 !== a.nodeType &&
        (8 !== a.nodeType || ' react-mount-point-unstable ' !== a.nodeValue))
    );
  }
  function pl() {}
  function ql(a, b, c, d, e) {
    if (e) {
      if ('function' === typeof d) {
        var f = d;
        d = function () {
          var a2 = gl(g);
          f.call(a2);
        };
      }
      var g = el(b, d, a, 0, null, false, false, '', pl);
      a._reactRootContainer = g;
      a[uf] = g.current;
      sf(8 === a.nodeType ? a.parentNode : a);
      Rk();
      return g;
    }
    for (; (e = a.lastChild); ) a.removeChild(e);
    if ('function' === typeof d) {
      var h = d;
      d = function () {
        var a2 = gl(k);
        h.call(a2);
      };
    }
    var k = bl(a, 0, false, null, null, false, false, '', pl);
    a._reactRootContainer = k;
    a[uf] = k.current;
    sf(8 === a.nodeType ? a.parentNode : a);
    Rk(function () {
      fl(b, k, c, d);
    });
    return k;
  }
  function rl(a, b, c, d, e) {
    var f = c._reactRootContainer;
    if (f) {
      var g = f;
      if ('function' === typeof e) {
        var h = e;
        e = function () {
          var a2 = gl(g);
          h.call(a2);
        };
      }
      fl(b, g, a, e);
    } else g = ql(c, b, a, e, d);
    return gl(g);
  }
  Ec = function (a) {
    switch (a.tag) {
      case 3:
        var b = a.stateNode;
        if (b.current.memoizedState.isDehydrated) {
          var c = tc(b.pendingLanes);
          0 !== c &&
            (Cc(b, c | 1),
            Dk(b, B()),
            0 === (K & 6) && ((Gj = B() + 500), jg()));
        }
        break;
      case 13:
        Rk(function () {
          var b2 = ih(a, 1);
          if (null !== b2) {
            var c2 = R();
            gi(b2, a, 1, c2);
          }
        }),
          il(a, 1);
    }
  };
  Fc = function (a) {
    if (13 === a.tag) {
      var b = ih(a, 134217728);
      if (null !== b) {
        var c = R();
        gi(b, a, 134217728, c);
      }
      il(a, 134217728);
    }
  };
  Gc = function (a) {
    if (13 === a.tag) {
      var b = yi(a),
        c = ih(a, b);
      if (null !== c) {
        var d = R();
        gi(c, a, b, d);
      }
      il(a, b);
    }
  };
  Hc = function () {
    return C;
  };
  Ic = function (a, b) {
    var c = C;
    try {
      return (C = a), b();
    } finally {
      C = c;
    }
  };
  yb = function (a, b, c) {
    switch (b) {
      case 'input':
        bb(a, c);
        b = c.name;
        if ('radio' === c.type && null != b) {
          for (c = a; c.parentNode; ) c = c.parentNode;
          c = c.querySelectorAll(
            'input[name=' + JSON.stringify('' + b) + '][type="radio"]'
          );
          for (b = 0; b < c.length; b++) {
            var d = c[b];
            if (d !== a && d.form === a.form) {
              var e = Db(d);
              if (!e) throw Error(p(90));
              Wa(d);
              bb(d, e);
            }
          }
        }
        break;
      case 'textarea':
        ib(a, c);
        break;
      case 'select':
        (b = c.value), null != b && fb(a, !!c.multiple, b, false);
    }
  };
  Gb = Qk;
  Hb = Rk;
  var sl = { usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Qk] },
    tl = {
      findFiberByHostInstance: Wc,
      bundleType: 0,
      version: '18.3.1',
      rendererPackageName: 'react-dom',
    };
  var ul = {
    bundleType: tl.bundleType,
    version: tl.version,
    rendererPackageName: tl.rendererPackageName,
    rendererConfig: tl.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ua.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (a) {
      a = Zb(a);
      return null === a ? null : a.stateNode;
    },
    findFiberByHostInstance: tl.findFiberByHostInstance,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
  };
  if ('undefined' !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
    var vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!vl.isDisabled && vl.supportsFiber)
      try {
        (kc = vl.inject(ul)), (lc = vl);
      } catch (a) {}
  }
  reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED =
    sl;
  reactDom_production_min.createPortal = function (a, b) {
    var c =
      2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
    if (!nl(b)) throw Error(p(200));
    return cl(a, b, null, c);
  };
  reactDom_production_min.createRoot = function (a, b) {
    if (!nl(a)) throw Error(p(299));
    var c = false,
      d = '',
      e = kl;
    null !== b &&
      void 0 !== b &&
      (true === b.unstable_strictMode && (c = true),
      void 0 !== b.identifierPrefix && (d = b.identifierPrefix),
      void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
    b = bl(a, 1, false, null, null, c, false, d, e);
    a[uf] = b.current;
    sf(8 === a.nodeType ? a.parentNode : a);
    return new ll(b);
  };
  reactDom_production_min.findDOMNode = function (a) {
    if (null == a) return null;
    if (1 === a.nodeType) return a;
    var b = a._reactInternals;
    if (void 0 === b) {
      if ('function' === typeof a.render) throw Error(p(188));
      a = Object.keys(a).join(',');
      throw Error(p(268, a));
    }
    a = Zb(b);
    a = null === a ? null : a.stateNode;
    return a;
  };
  reactDom_production_min.flushSync = function (a) {
    return Rk(a);
  };
  reactDom_production_min.hydrate = function (a, b, c) {
    if (!ol(b)) throw Error(p(200));
    return rl(null, a, b, true, c);
  };
  reactDom_production_min.hydrateRoot = function (a, b, c) {
    if (!nl(a)) throw Error(p(405));
    var d = (null != c && c.hydratedSources) || null,
      e = false,
      f = '',
      g = kl;
    null !== c &&
      void 0 !== c &&
      (true === c.unstable_strictMode && (e = true),
      void 0 !== c.identifierPrefix && (f = c.identifierPrefix),
      void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
    b = el(b, null, a, 1, null != c ? c : null, e, false, f, g);
    a[uf] = b.current;
    sf(a);
    if (d)
      for (a = 0; a < d.length; a++)
        (c = d[a]),
          (e = c._getVersion),
          (e = e(c._source)),
          null == b.mutableSourceEagerHydrationData
            ? (b.mutableSourceEagerHydrationData = [c, e])
            : b.mutableSourceEagerHydrationData.push(c, e);
    return new ml(b);
  };
  reactDom_production_min.render = function (a, b, c) {
    if (!ol(b)) throw Error(p(200));
    return rl(null, a, b, false, c);
  };
  reactDom_production_min.unmountComponentAtNode = function (a) {
    if (!ol(a)) throw Error(p(40));
    return a._reactRootContainer
      ? (Rk(function () {
          rl(null, null, a, false, function () {
            a._reactRootContainer = null;
            a[uf] = null;
          });
        }),
        true)
      : false;
  };
  reactDom_production_min.unstable_batchedUpdates = Qk;
  reactDom_production_min.unstable_renderSubtreeIntoContainer = function (
    a,
    b,
    c,
    d
  ) {
    if (!ol(c)) throw Error(p(200));
    if (null == a || void 0 === a._reactInternals) throw Error(p(38));
    return rl(a, b, c, false, d);
  };
  reactDom_production_min.version = '18.3.1-next-f1338f8080-20240426';
  return reactDom_production_min;
}
var hasRequiredReactDom;
function requireReactDom() {
  if (hasRequiredReactDom) return reactDom.exports;
  hasRequiredReactDom = 1;
  function checkDCE() {
    if (
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
    ) {
      return;
    }
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
    } catch (err) {
      console.error(err);
    }
  }
  {
    checkDCE();
    reactDom.exports = requireReactDom_production_min();
  }
  return reactDom.exports;
}
var hasRequiredClient;
function requireClient() {
  if (hasRequiredClient) return client;
  hasRequiredClient = 1;
  var m = requireReactDom();
  {
    client.createRoot = m.createRoot;
    client.hydrateRoot = m.hydrateRoot;
  }
  return client;
}
var clientExports = requireClient();
var reactExports = requireReact();
var dist = {};
var hasRequiredDist;
function requireDist() {
  if (hasRequiredDist) return dist;
  hasRequiredDist = 1;
  Object.defineProperty(dist, '__esModule', { value: true });
  dist.parse = parse;
  dist.serialize = serialize;
  const cookieNameRegExp = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/;
  const cookieValueRegExp = /^[\u0021-\u003A\u003C-\u007E]*$/;
  const domainValueRegExp =
    /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i;
  const pathValueRegExp = /^[\u0020-\u003A\u003D-\u007E]*$/;
  const __toString = Object.prototype.toString;
  const NullObject = /* @__PURE__ */ (() => {
    const C = function () {};
    C.prototype = /* @__PURE__ */ Object.create(null);
    return C;
  })();
  function parse(str, options) {
    const obj = new NullObject();
    const len = str.length;
    if (len < 2) return obj;
    const dec = options?.decode || decode;
    let index = 0;
    do {
      const eqIdx = str.indexOf('=', index);
      if (eqIdx === -1) break;
      const colonIdx = str.indexOf(';', index);
      const endIdx = colonIdx === -1 ? len : colonIdx;
      if (eqIdx > endIdx) {
        index = str.lastIndexOf(';', eqIdx - 1) + 1;
        continue;
      }
      const keyStartIdx = startIndex(str, index, eqIdx);
      const keyEndIdx = endIndex(str, eqIdx, keyStartIdx);
      const key = str.slice(keyStartIdx, keyEndIdx);
      if (obj[key] === void 0) {
        let valStartIdx = startIndex(str, eqIdx + 1, endIdx);
        let valEndIdx = endIndex(str, endIdx, valStartIdx);
        const value = dec(str.slice(valStartIdx, valEndIdx));
        obj[key] = value;
      }
      index = endIdx + 1;
    } while (index < len);
    return obj;
  }
  function startIndex(str, index, max) {
    do {
      const code = str.charCodeAt(index);
      if (code !== 32 && code !== 9) return index;
    } while (++index < max);
    return max;
  }
  function endIndex(str, index, min) {
    while (index > min) {
      const code = str.charCodeAt(--index);
      if (code !== 32 && code !== 9) return index + 1;
    }
    return min;
  }
  function serialize(name, val, options) {
    const enc = options?.encode || encodeURIComponent;
    if (!cookieNameRegExp.test(name)) {
      throw new TypeError(`argument name is invalid: ${name}`);
    }
    const value = enc(val);
    if (!cookieValueRegExp.test(value)) {
      throw new TypeError(`argument val is invalid: ${val}`);
    }
    let str = name + '=' + value;
    if (!options) return str;
    if (options.maxAge !== void 0) {
      if (!Number.isInteger(options.maxAge)) {
        throw new TypeError(`option maxAge is invalid: ${options.maxAge}`);
      }
      str += '; Max-Age=' + options.maxAge;
    }
    if (options.domain) {
      if (!domainValueRegExp.test(options.domain)) {
        throw new TypeError(`option domain is invalid: ${options.domain}`);
      }
      str += '; Domain=' + options.domain;
    }
    if (options.path) {
      if (!pathValueRegExp.test(options.path)) {
        throw new TypeError(`option path is invalid: ${options.path}`);
      }
      str += '; Path=' + options.path;
    }
    if (options.expires) {
      if (
        !isDate2(options.expires) ||
        !Number.isFinite(options.expires.valueOf())
      ) {
        throw new TypeError(`option expires is invalid: ${options.expires}`);
      }
      str += '; Expires=' + options.expires.toUTCString();
    }
    if (options.httpOnly) {
      str += '; HttpOnly';
    }
    if (options.secure) {
      str += '; Secure';
    }
    if (options.partitioned) {
      str += '; Partitioned';
    }
    if (options.priority) {
      const priority =
        typeof options.priority === 'string'
          ? options.priority.toLowerCase()
          : void 0;
      switch (priority) {
        case 'low':
          str += '; Priority=Low';
          break;
        case 'medium':
          str += '; Priority=Medium';
          break;
        case 'high':
          str += '; Priority=High';
          break;
        default:
          throw new TypeError(
            `option priority is invalid: ${options.priority}`
          );
      }
    }
    if (options.sameSite) {
      const sameSite =
        typeof options.sameSite === 'string'
          ? options.sameSite.toLowerCase()
          : options.sameSite;
      switch (sameSite) {
        case true:
        case 'strict':
          str += '; SameSite=Strict';
          break;
        case 'lax':
          str += '; SameSite=Lax';
          break;
        case 'none':
          str += '; SameSite=None';
          break;
        default:
          throw new TypeError(
            `option sameSite is invalid: ${options.sameSite}`
          );
      }
    }
    return str;
  }
  function decode(str) {
    if (str.indexOf('%') === -1) return str;
    try {
      return decodeURIComponent(str);
    } catch (e) {
      return str;
    }
  }
  function isDate2(val) {
    return __toString.call(val) === '[object Date]';
  }
  return dist;
}
requireDist();
/**
 * react-router v7.1.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var PopStateEventType = 'popstate';
function createBrowserHistory(options = {}) {
  function createBrowserLocation(window2, globalHistory) {
    let { pathname, search, hash } = window2.location;
    return createLocation(
      '',
      { pathname, search, hash },
      // state defaults to `null` because `window.history.state` does
      (globalHistory.state && globalHistory.state.usr) || null,
      (globalHistory.state && globalHistory.state.key) || 'default'
    );
  }
  function createBrowserHref(window2, to) {
    return typeof to === 'string' ? to : createPath(to);
  }
  return getUrlBasedHistory(
    createBrowserLocation,
    createBrowserHref,
    null,
    options
  );
}
function invariant(value, message) {
  if (value === false || value === null || typeof value === 'undefined') {
    throw new Error(message);
  }
}
function warning(cond, message) {
  if (!cond) {
    if (typeof console !== 'undefined') console.warn(message);
    try {
      throw new Error(message);
    } catch (e) {}
  }
}
function createKey() {
  return Math.random().toString(36).substring(2, 10);
}
function getHistoryState(location, index) {
  return {
    usr: location.state,
    key: location.key,
    idx: index,
  };
}
function createLocation(current, to, state = null, key) {
  let location = {
    pathname: typeof current === 'string' ? current : current.pathname,
    search: '',
    hash: '',
    ...(typeof to === 'string' ? parsePath(to) : to),
    state,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: (to && to.key) || key || createKey(),
  };
  return location;
}
function createPath({ pathname = '/', search = '', hash = '' }) {
  if (search && search !== '?')
    pathname += search.charAt(0) === '?' ? search : '?' + search;
  if (hash && hash !== '#')
    pathname += hash.charAt(0) === '#' ? hash : '#' + hash;
  return pathname;
}
function parsePath(path) {
  let parsedPath = {};
  if (path) {
    let hashIndex = path.indexOf('#');
    if (hashIndex >= 0) {
      parsedPath.hash = path.substring(hashIndex);
      path = path.substring(0, hashIndex);
    }
    let searchIndex = path.indexOf('?');
    if (searchIndex >= 0) {
      parsedPath.search = path.substring(searchIndex);
      path = path.substring(0, searchIndex);
    }
    if (path) {
      parsedPath.pathname = path;
    }
  }
  return parsedPath;
}
function getUrlBasedHistory(
  getLocation,
  createHref2,
  validateLocation,
  options = {}
) {
  let { window: window2 = document.defaultView, v5Compat = false } = options;
  let globalHistory = window2.history;
  let action = 'POP';
  let listener = null;
  let index = getIndex();
  if (index == null) {
    index = 0;
    globalHistory.replaceState({ ...globalHistory.state, idx: index }, '');
  }
  function getIndex() {
    let state = globalHistory.state || { idx: null };
    return state.idx;
  }
  function handlePop() {
    action = 'POP';
    let nextIndex = getIndex();
    let delta = nextIndex == null ? null : nextIndex - index;
    index = nextIndex;
    if (listener) {
      listener({ action, location: history.location, delta });
    }
  }
  function push(to, state) {
    action = 'PUSH';
    let location = createLocation(history.location, to, state);
    index = getIndex() + 1;
    let historyState = getHistoryState(location, index);
    let url = history.createHref(location);
    try {
      globalHistory.pushState(historyState, '', url);
    } catch (error) {
      if (error instanceof DOMException && error.name === 'DataCloneError') {
        throw error;
      }
      window2.location.assign(url);
    }
    if (v5Compat && listener) {
      listener({ action, location: history.location, delta: 1 });
    }
  }
  function replace2(to, state) {
    action = 'REPLACE';
    let location = createLocation(history.location, to, state);
    index = getIndex();
    let historyState = getHistoryState(location, index);
    let url = history.createHref(location);
    globalHistory.replaceState(historyState, '', url);
    if (v5Compat && listener) {
      listener({ action, location: history.location, delta: 0 });
    }
  }
  function createURL(to) {
    let base =
      window2.location.origin !== 'null'
        ? window2.location.origin
        : window2.location.href;
    let href = typeof to === 'string' ? to : createPath(to);
    href = href.replace(/ $/, '%20');
    invariant(
      base,
      `No window.location.(origin|href) available to create URL for href: ${href}`
    );
    return new URL(href, base);
  }
  let history = {
    get action() {
      return action;
    },
    get location() {
      return getLocation(window2, globalHistory);
    },
    listen(fn) {
      if (listener) {
        throw new Error('A history only accepts one active listener');
      }
      window2.addEventListener(PopStateEventType, handlePop);
      listener = fn;
      return () => {
        window2.removeEventListener(PopStateEventType, handlePop);
        listener = null;
      };
    },
    createHref(to) {
      return createHref2(window2, to);
    },
    createURL,
    encodeLocation(to) {
      let url = createURL(to);
      return {
        pathname: url.pathname,
        search: url.search,
        hash: url.hash,
      };
    },
    push,
    replace: replace2,
    go(n) {
      return globalHistory.go(n);
    },
  };
  return history;
}
function matchRoutes(routes, locationArg, basename = '/') {
  return matchRoutesImpl(routes, locationArg, basename, false);
}
function matchRoutesImpl(routes, locationArg, basename, allowPartial) {
  let location =
    typeof locationArg === 'string' ? parsePath(locationArg) : locationArg;
  let pathname = stripBasename(location.pathname || '/', basename);
  if (pathname == null) {
    return null;
  }
  let branches = flattenRoutes(routes);
  rankRouteBranches(branches);
  let matches = null;
  for (let i = 0; matches == null && i < branches.length; ++i) {
    let decoded = decodePath(pathname);
    matches = matchRouteBranch(branches[i], decoded, allowPartial);
  }
  return matches;
}
function flattenRoutes(
  routes,
  branches = [],
  parentsMeta = [],
  parentPath = ''
) {
  let flattenRoute = (route, index, relativePath) => {
    let meta = {
      relativePath: relativePath === void 0 ? route.path || '' : relativePath,
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index,
      route,
    };
    if (meta.relativePath.startsWith('/')) {
      invariant(
        meta.relativePath.startsWith(parentPath),
        `Absolute route path "${meta.relativePath}" nested under path "${parentPath}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      );
      meta.relativePath = meta.relativePath.slice(parentPath.length);
    }
    let path = joinPaths([parentPath, meta.relativePath]);
    let routesMeta = parentsMeta.concat(meta);
    if (route.children && route.children.length > 0) {
      invariant(
        // Our types know better, but runtime JS may not!
        // @ts-expect-error
        route.index !== true,
        `Index routes must not have child routes. Please remove all child routes from route path "${path}".`
      );
      flattenRoutes(route.children, branches, routesMeta, path);
    }
    if (route.path == null && !route.index) {
      return;
    }
    branches.push({
      path,
      score: computeScore(path, route.index),
      routesMeta,
    });
  };
  routes.forEach((route, index) => {
    if (route.path === '' || !route.path?.includes('?')) {
      flattenRoute(route, index);
    } else {
      for (let exploded of explodeOptionalSegments(route.path)) {
        flattenRoute(route, index, exploded);
      }
    }
  });
  return branches;
}
function explodeOptionalSegments(path) {
  let segments = path.split('/');
  if (segments.length === 0) return [];
  let [first, ...rest] = segments;
  let isOptional = first.endsWith('?');
  let required = first.replace(/\?$/, '');
  if (rest.length === 0) {
    return isOptional ? [required, ''] : [required];
  }
  let restExploded = explodeOptionalSegments(rest.join('/'));
  let result = [];
  result.push(
    ...restExploded.map((subpath) =>
      subpath === '' ? required : [required, subpath].join('/')
    )
  );
  if (isOptional) {
    result.push(...restExploded);
  }
  return result.map((exploded) =>
    path.startsWith('/') && exploded === '' ? '/' : exploded
  );
}
function rankRouteBranches(branches) {
  branches.sort((a, b) =>
    a.score !== b.score
      ? b.score - a.score
      : compareIndexes(
          a.routesMeta.map((meta) => meta.childrenIndex),
          b.routesMeta.map((meta) => meta.childrenIndex)
        )
  );
}
var paramRe = /^:[\w-]+$/;
var dynamicSegmentValue = 3;
var indexRouteValue = 2;
var emptySegmentValue = 1;
var staticSegmentValue = 10;
var splatPenalty = -2;
var isSplat = (s) => s === '*';
function computeScore(path, index) {
  let segments = path.split('/');
  let initialScore = segments.length;
  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }
  if (index) {
    initialScore += indexRouteValue;
  }
  return segments
    .filter((s) => !isSplat(s))
    .reduce(
      (score, segment) =>
        score +
        (paramRe.test(segment)
          ? dynamicSegmentValue
          : segment === ''
            ? emptySegmentValue
            : staticSegmentValue),
      initialScore
    );
}
function compareIndexes(a, b) {
  let siblings =
    a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]);
  return siblings
    ? // If two routes are siblings, we should try to match the earlier sibling
      // first. This allows people to have fine-grained control over the matching
      // behavior by simply putting routes with identical paths in the order they
      // want them tried.
      a[a.length - 1] - b[b.length - 1]
    : // Otherwise, it doesn't really make sense to rank non-siblings by index,
      // so they sort equally.
      0;
}
function matchRouteBranch(branch, pathname, allowPartial = false) {
  let { routesMeta } = branch;
  let matchedParams = {};
  let matchedPathname = '/';
  let matches = [];
  for (let i = 0; i < routesMeta.length; ++i) {
    let meta = routesMeta[i];
    let end = i === routesMeta.length - 1;
    let remainingPathname =
      matchedPathname === '/'
        ? pathname
        : pathname.slice(matchedPathname.length) || '/';
    let match = matchPath(
      { path: meta.relativePath, caseSensitive: meta.caseSensitive, end },
      remainingPathname
    );
    let route = meta.route;
    if (
      !match &&
      end &&
      allowPartial &&
      !routesMeta[routesMeta.length - 1].route.index
    ) {
      match = matchPath(
        {
          path: meta.relativePath,
          caseSensitive: meta.caseSensitive,
          end: false,
        },
        remainingPathname
      );
    }
    if (!match) {
      return null;
    }
    Object.assign(matchedParams, match.params);
    matches.push({
      // TODO: Can this as be avoided?
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match.pathname]),
      pathnameBase: normalizePathname(
        joinPaths([matchedPathname, match.pathnameBase])
      ),
      route,
    });
    if (match.pathnameBase !== '/') {
      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
    }
  }
  return matches;
}
function matchPath(pattern, pathname) {
  if (typeof pattern === 'string') {
    pattern = { path: pattern, caseSensitive: false, end: true };
  }
  let [matcher, compiledParams] = compilePath(
    pattern.path,
    pattern.caseSensitive,
    pattern.end
  );
  let match = pathname.match(matcher);
  if (!match) return null;
  let matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, '$1');
  let captureGroups = match.slice(1);
  let params = compiledParams.reduce(
    (memo2, { paramName, isOptional }, index) => {
      if (paramName === '*') {
        let splatValue = captureGroups[index] || '';
        pathnameBase = matchedPathname
          .slice(0, matchedPathname.length - splatValue.length)
          .replace(/(.)\/+$/, '$1');
      }
      const value = captureGroups[index];
      if (isOptional && !value) {
        memo2[paramName] = void 0;
      } else {
        memo2[paramName] = (value || '').replace(/%2F/g, '/');
      }
      return memo2;
    },
    {}
  );
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern,
  };
}
function compilePath(path, caseSensitive = false, end = true) {
  warning(
    path === '*' || !path.endsWith('*') || path.endsWith('/*'),
    `Route path "${path}" will be treated as if it were "${path.replace(/\*$/, '/*')}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${path.replace(/\*$/, '/*')}".`
  );
  let params = [];
  let regexpSource =
    '^' +
    path
      .replace(/\/*\*?$/, '')
      .replace(/^\/*/, '/')
      .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
      .replace(/\/:([\w-]+)(\?)?/g, (_, paramName, isOptional) => {
        params.push({ paramName, isOptional: isOptional != null });
        return isOptional ? '/?([^\\/]+)?' : '/([^\\/]+)';
      });
  if (path.endsWith('*')) {
    params.push({ paramName: '*' });
    regexpSource +=
      path === '*' || path === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$';
  } else if (end) {
    regexpSource += '\\/*$';
  } else if (path !== '' && path !== '/') {
    regexpSource += '(?:(?=\\/|$))';
  } else;
  let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : 'i');
  return [matcher, params];
}
function decodePath(value) {
  try {
    return value
      .split('/')
      .map((v) => decodeURIComponent(v).replace(/\//g, '%2F'))
      .join('/');
  } catch (error) {
    warning(
      false,
      `The URL path "${value}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${error}).`
    );
    return value;
  }
}
function stripBasename(pathname, basename) {
  if (basename === '/') return pathname;
  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  }
  let startIndex = basename.endsWith('/')
    ? basename.length - 1
    : basename.length;
  let nextChar = pathname.charAt(startIndex);
  if (nextChar && nextChar !== '/') {
    return null;
  }
  return pathname.slice(startIndex) || '/';
}
function resolvePath(to, fromPathname = '/') {
  let {
    pathname: toPathname,
    search = '',
    hash = '',
  } = typeof to === 'string' ? parsePath(to) : to;
  let pathname = toPathname
    ? toPathname.startsWith('/')
      ? toPathname
      : resolvePathname(toPathname, fromPathname)
    : fromPathname;
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash),
  };
}
function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, '').split('/');
  let relativeSegments = relativePath.split('/');
  relativeSegments.forEach((segment) => {
    if (segment === '..') {
      if (segments.length > 1) segments.pop();
    } else if (segment !== '.') {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join('/') : '/';
}
function getInvalidPathError(char, field, dest, path) {
  return `Cannot include a '${char}' character in a manually specified \`to.${field}\` field [${JSON.stringify(
    path
  )}].  Please separate it out to the \`to.${dest}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function getPathContributingMatches(matches) {
  return matches.filter(
    (match, index) =>
      index === 0 || (match.route.path && match.route.path.length > 0)
  );
}
function getResolveToMatches(matches) {
  let pathMatches = getPathContributingMatches(matches);
  return pathMatches.map((match, idx) =>
    idx === pathMatches.length - 1 ? match.pathname : match.pathnameBase
  );
}
function resolveTo(
  toArg,
  routePathnames,
  locationPathname,
  isPathRelative = false
) {
  let to;
  if (typeof toArg === 'string') {
    to = parsePath(toArg);
  } else {
    to = { ...toArg };
    invariant(
      !to.pathname || !to.pathname.includes('?'),
      getInvalidPathError('?', 'pathname', 'search', to)
    );
    invariant(
      !to.pathname || !to.pathname.includes('#'),
      getInvalidPathError('#', 'pathname', 'hash', to)
    );
    invariant(
      !to.search || !to.search.includes('#'),
      getInvalidPathError('#', 'search', 'hash', to)
    );
  }
  let isEmptyPath = toArg === '' || to.pathname === '';
  let toPathname = isEmptyPath ? '/' : to.pathname;
  let from;
  if (toPathname == null) {
    from = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;
    if (!isPathRelative && toPathname.startsWith('..')) {
      let toSegments = toPathname.split('/');
      while (toSegments[0] === '..') {
        toSegments.shift();
        routePathnameIndex -= 1;
      }
      to.pathname = toSegments.join('/');
    }
    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : '/';
  }
  let path = resolvePath(to, from);
  let hasExplicitTrailingSlash =
    toPathname && toPathname !== '/' && toPathname.endsWith('/');
  let hasCurrentTrailingSlash =
    (isEmptyPath || toPathname === '.') && locationPathname.endsWith('/');
  if (
    !path.pathname.endsWith('/') &&
    (hasExplicitTrailingSlash || hasCurrentTrailingSlash)
  ) {
    path.pathname += '/';
  }
  return path;
}
var joinPaths = (paths) => paths.join('/').replace(/\/\/+/g, '/');
var normalizePathname = (pathname) =>
  pathname.replace(/\/+$/, '').replace(/^\/*/, '/');
var normalizeSearch = (search) =>
  !search || search === '?'
    ? ''
    : search.startsWith('?')
      ? search
      : '?' + search;
var normalizeHash = (hash) =>
  !hash || hash === '#' ? '' : hash.startsWith('#') ? hash : '#' + hash;
function isRouteErrorResponse(error) {
  return (
    error != null &&
    typeof error.status === 'number' &&
    typeof error.statusText === 'string' &&
    typeof error.internal === 'boolean' &&
    'data' in error
  );
}
var validMutationMethodsArr = ['POST', 'PUT', 'PATCH', 'DELETE'];
new Set(validMutationMethodsArr);
var validRequestMethodsArr = ['GET', ...validMutationMethodsArr];
new Set(validRequestMethodsArr);
var DataRouterContext = reactExports.createContext(null);
DataRouterContext.displayName = 'DataRouter';
var DataRouterStateContext = reactExports.createContext(null);
DataRouterStateContext.displayName = 'DataRouterState';
var ViewTransitionContext = reactExports.createContext({
  isTransitioning: false,
});
ViewTransitionContext.displayName = 'ViewTransition';
var FetchersContext = reactExports.createContext(/* @__PURE__ */ new Map());
FetchersContext.displayName = 'Fetchers';
var AwaitContext = reactExports.createContext(null);
AwaitContext.displayName = 'Await';
var NavigationContext = reactExports.createContext(null);
NavigationContext.displayName = 'Navigation';
var LocationContext = reactExports.createContext(null);
LocationContext.displayName = 'Location';
var RouteContext = reactExports.createContext({
  outlet: null,
  matches: [],
  isDataRoute: false,
});
RouteContext.displayName = 'Route';
var RouteErrorContext = reactExports.createContext(null);
RouteErrorContext.displayName = 'RouteError';
function useHref(to, { relative } = {}) {
  invariant(
    useInRouterContext(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    `useHref() may be used only in the context of a <Router> component.`
  );
  let { basename, navigator: navigator2 } =
    reactExports.useContext(NavigationContext);
  let { hash, pathname, search } = useResolvedPath(to, { relative });
  let joinedPathname = pathname;
  if (basename !== '/') {
    joinedPathname =
      pathname === '/' ? basename : joinPaths([basename, pathname]);
  }
  return navigator2.createHref({ pathname: joinedPathname, search, hash });
}
function useInRouterContext() {
  return reactExports.useContext(LocationContext) != null;
}
function useLocation() {
  invariant(
    useInRouterContext(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    `useLocation() may be used only in the context of a <Router> component.`
  );
  return reactExports.useContext(LocationContext).location;
}
var navigateEffectWarning = `You should call navigate() in a React.useEffect(), not when your component is first rendered.`;
function useIsomorphicLayoutEffect(cb) {
  let isStatic = reactExports.useContext(NavigationContext).static;
  if (!isStatic) {
    reactExports.useLayoutEffect(cb);
  }
}
function useNavigate() {
  let { isDataRoute } = reactExports.useContext(RouteContext);
  return isDataRoute ? useNavigateStable() : useNavigateUnstable();
}
function useNavigateUnstable() {
  invariant(
    useInRouterContext(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    `useNavigate() may be used only in the context of a <Router> component.`
  );
  let dataRouterContext = reactExports.useContext(DataRouterContext);
  let { basename, navigator: navigator2 } =
    reactExports.useContext(NavigationContext);
  let { matches } = reactExports.useContext(RouteContext);
  let { pathname: locationPathname } = useLocation();
  let routePathnamesJson = JSON.stringify(getResolveToMatches(matches));
  let activeRef = reactExports.useRef(false);
  useIsomorphicLayoutEffect(() => {
    activeRef.current = true;
  });
  let navigate = reactExports.useCallback(
    (to, options = {}) => {
      warning(activeRef.current, navigateEffectWarning);
      if (!activeRef.current) return;
      if (typeof to === 'number') {
        navigator2.go(to);
        return;
      }
      let path = resolveTo(
        to,
        JSON.parse(routePathnamesJson),
        locationPathname,
        options.relative === 'path'
      );
      if (dataRouterContext == null && basename !== '/') {
        path.pathname =
          path.pathname === '/'
            ? basename
            : joinPaths([basename, path.pathname]);
      }
      (!!options.replace ? navigator2.replace : navigator2.push)(
        path,
        options.state,
        options
      );
    },
    [
      basename,
      navigator2,
      routePathnamesJson,
      locationPathname,
      dataRouterContext,
    ]
  );
  return navigate;
}
var OutletContext = reactExports.createContext(null);
function useOutlet(context) {
  let outlet = reactExports.useContext(RouteContext).outlet;
  if (outlet) {
    return /* @__PURE__ */ reactExports.createElement(
      OutletContext.Provider,
      { value: context },
      outlet
    );
  }
  return outlet;
}
function useResolvedPath(to, { relative } = {}) {
  let { matches } = reactExports.useContext(RouteContext);
  let { pathname: locationPathname } = useLocation();
  let routePathnamesJson = JSON.stringify(getResolveToMatches(matches));
  return reactExports.useMemo(
    () =>
      resolveTo(
        to,
        JSON.parse(routePathnamesJson),
        locationPathname,
        relative === 'path'
      ),
    [to, routePathnamesJson, locationPathname, relative]
  );
}
function useRoutes(routes, locationArg) {
  return useRoutesImpl(routes, locationArg);
}
function useRoutesImpl(routes, locationArg, dataRouterState, future) {
  invariant(
    useInRouterContext(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    `useRoutes() may be used only in the context of a <Router> component.`
  );
  let { navigator: navigator2 } = reactExports.useContext(NavigationContext);
  let { matches: parentMatches } = reactExports.useContext(RouteContext);
  let routeMatch = parentMatches[parentMatches.length - 1];
  let parentParams = routeMatch ? routeMatch.params : {};
  let parentPathname = routeMatch ? routeMatch.pathname : '/';
  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : '/';
  let parentRoute = routeMatch && routeMatch.route;
  {
    let parentPath = (parentRoute && parentRoute.path) || '';
    warningOnce(
      parentPathname,
      !parentRoute || parentPath.endsWith('*') || parentPath.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${parentPathname}" (under <Route path="${parentPath}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${parentPath}"> to <Route path="${parentPath === '/' ? '*' : `${parentPath}/*`}">.`
    );
  }
  let locationFromContext = useLocation();
  let location;
  if (locationArg) {
    let parsedLocationArg =
      typeof locationArg === 'string' ? parsePath(locationArg) : locationArg;
    invariant(
      parentPathnameBase === '/' ||
        parsedLocationArg.pathname?.startsWith(parentPathnameBase),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${parentPathnameBase}" but pathname "${parsedLocationArg.pathname}" was given in the \`location\` prop.`
    );
    location = parsedLocationArg;
  } else {
    location = locationFromContext;
  }
  let pathname = location.pathname || '/';
  let remainingPathname = pathname;
  if (parentPathnameBase !== '/') {
    let parentSegments = parentPathnameBase.replace(/^\//, '').split('/');
    let segments = pathname.replace(/^\//, '').split('/');
    remainingPathname = '/' + segments.slice(parentSegments.length).join('/');
  }
  let matches = matchRoutes(routes, { pathname: remainingPathname });
  {
    warning(
      parentRoute || matches != null,
      `No routes matched location "${location.pathname}${location.search}${location.hash}" `
    );
    warning(
      matches == null ||
        matches[matches.length - 1].route.element !== void 0 ||
        matches[matches.length - 1].route.Component !== void 0 ||
        matches[matches.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${location.pathname}${location.search}${location.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  }
  let renderedMatches = _renderMatches(
    matches &&
      matches.map((match) =>
        Object.assign({}, match, {
          params: Object.assign({}, parentParams, match.params),
          pathname: joinPaths([
            parentPathnameBase,
            // Re-encode pathnames that were decoded inside matchRoutes
            navigator2.encodeLocation
              ? navigator2.encodeLocation(match.pathname).pathname
              : match.pathname,
          ]),
          pathnameBase:
            match.pathnameBase === '/'
              ? parentPathnameBase
              : joinPaths([
                  parentPathnameBase,
                  // Re-encode pathnames that were decoded inside matchRoutes
                  navigator2.encodeLocation
                    ? navigator2.encodeLocation(match.pathnameBase).pathname
                    : match.pathnameBase,
                ]),
        })
      ),
    parentMatches,
    dataRouterState,
    future
  );
  if (locationArg && renderedMatches) {
    return /* @__PURE__ */ reactExports.createElement(
      LocationContext.Provider,
      {
        value: {
          location: {
            pathname: '/',
            search: '',
            hash: '',
            state: null,
            key: 'default',
            ...location,
          },
          navigationType: 'POP',
          /* Pop */
        },
      },
      renderedMatches
    );
  }
  return renderedMatches;
}
function DefaultErrorComponent() {
  let error = useRouteError();
  let message = isRouteErrorResponse(error)
    ? `${error.status} ${error.statusText}`
    : error instanceof Error
      ? error.message
      : JSON.stringify(error);
  let stack = error instanceof Error ? error.stack : null;
  let lightgrey = 'rgba(200,200,200, 0.5)';
  let preStyles = { padding: '0.5rem', backgroundColor: lightgrey };
  let codeStyles = { padding: '2px 4px', backgroundColor: lightgrey };
  let devInfo = null;
  {
    console.error(
      'Error handled by React Router default ErrorBoundary:',
      error
    );
    devInfo = /* @__PURE__ */ reactExports.createElement(
      reactExports.Fragment,
      null,
      /* @__PURE__ */ reactExports.createElement(
        'p',
        null,
        '💿 Hey developer 👋'
      ),
      /* @__PURE__ */ reactExports.createElement(
        'p',
        null,
        'You can provide a way better UX than this when your app throws errors by providing your own ',
        /* @__PURE__ */ reactExports.createElement(
          'code',
          { style: codeStyles },
          'ErrorBoundary'
        ),
        ' or',
        ' ',
        /* @__PURE__ */ reactExports.createElement(
          'code',
          { style: codeStyles },
          'errorElement'
        ),
        ' prop on your route.'
      )
    );
  }
  return /* @__PURE__ */ reactExports.createElement(
    reactExports.Fragment,
    null,
    /* @__PURE__ */ reactExports.createElement(
      'h2',
      null,
      'Unexpected Application Error!'
    ),
    /* @__PURE__ */ reactExports.createElement(
      'h3',
      { style: { fontStyle: 'italic' } },
      message
    ),
    stack
      ? /* @__PURE__ */ reactExports.createElement(
          'pre',
          { style: preStyles },
          stack
        )
      : null,
    devInfo
  );
}
var defaultErrorElement = /* @__PURE__ */ reactExports.createElement(
  DefaultErrorComponent,
  null
);
var RenderErrorBoundary = class extends reactExports.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      revalidation: props.revalidation,
      error: props.error,
    };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  static getDerivedStateFromProps(props, state) {
    if (
      state.location !== props.location ||
      (state.revalidation !== 'idle' && props.revalidation === 'idle')
    ) {
      return {
        error: props.error,
        location: props.location,
        revalidation: props.revalidation,
      };
    }
    return {
      error: props.error !== void 0 ? props.error : state.error,
      location: state.location,
      revalidation: props.revalidation || state.revalidation,
    };
  }
  componentDidCatch(error, errorInfo) {
    console.error(
      'React Router caught the following error during render',
      error,
      errorInfo
    );
  }
  render() {
    return this.state.error !== void 0
      ? /* @__PURE__ */ reactExports.createElement(
          RouteContext.Provider,
          { value: this.props.routeContext },
          /* @__PURE__ */ reactExports.createElement(
            RouteErrorContext.Provider,
            {
              value: this.state.error,
              children: this.props.component,
            }
          )
        )
      : this.props.children;
  }
};
function RenderedRoute({ routeContext, match, children }) {
  let dataRouterContext = reactExports.useContext(DataRouterContext);
  if (
    dataRouterContext &&
    dataRouterContext.static &&
    dataRouterContext.staticContext &&
    (match.route.errorElement || match.route.ErrorBoundary)
  ) {
    dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
  }
  return /* @__PURE__ */ reactExports.createElement(
    RouteContext.Provider,
    { value: routeContext },
    children
  );
}
function _renderMatches(
  matches,
  parentMatches = [],
  dataRouterState = null,
  future = null
) {
  if (matches == null) {
    if (!dataRouterState) {
      return null;
    }
    if (dataRouterState.errors) {
      matches = dataRouterState.matches;
    } else if (
      parentMatches.length === 0 &&
      !dataRouterState.initialized &&
      dataRouterState.matches.length > 0
    ) {
      matches = dataRouterState.matches;
    } else {
      return null;
    }
  }
  let renderedMatches = matches;
  let errors = dataRouterState?.errors;
  if (errors != null) {
    let errorIndex = renderedMatches.findIndex(
      (m) => m.route.id && errors?.[m.route.id] !== void 0
    );
    invariant(
      errorIndex >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        errors
      ).join(',')}`
    );
    renderedMatches = renderedMatches.slice(
      0,
      Math.min(renderedMatches.length, errorIndex + 1)
    );
  }
  let renderFallback = false;
  let fallbackIndex = -1;
  if (dataRouterState) {
    for (let i = 0; i < renderedMatches.length; i++) {
      let match = renderedMatches[i];
      if (match.route.HydrateFallback || match.route.hydrateFallbackElement) {
        fallbackIndex = i;
      }
      if (match.route.id) {
        let { loaderData, errors: errors2 } = dataRouterState;
        let needsToRunLoader =
          match.route.loader &&
          !loaderData.hasOwnProperty(match.route.id) &&
          (!errors2 || errors2[match.route.id] === void 0);
        if (match.route.lazy || needsToRunLoader) {
          renderFallback = true;
          if (fallbackIndex >= 0) {
            renderedMatches = renderedMatches.slice(0, fallbackIndex + 1);
          } else {
            renderedMatches = [renderedMatches[0]];
          }
          break;
        }
      }
    }
  }
  return renderedMatches.reduceRight((outlet, match, index) => {
    let error;
    let shouldRenderHydrateFallback = false;
    let errorElement = null;
    let hydrateFallbackElement = null;
    if (dataRouterState) {
      error = errors && match.route.id ? errors[match.route.id] : void 0;
      errorElement = match.route.errorElement || defaultErrorElement;
      if (renderFallback) {
        if (fallbackIndex < 0 && index === 0) {
          warningOnce(
            'route-fallback',
            false,
            'No `HydrateFallback` element provided to render during initial hydration'
          );
          shouldRenderHydrateFallback = true;
          hydrateFallbackElement = null;
        } else if (fallbackIndex === index) {
          shouldRenderHydrateFallback = true;
          hydrateFallbackElement = match.route.hydrateFallbackElement || null;
        }
      }
    }
    let matches2 = parentMatches.concat(renderedMatches.slice(0, index + 1));
    let getChildren = () => {
      let children;
      if (error) {
        children = errorElement;
      } else if (shouldRenderHydrateFallback) {
        children = hydrateFallbackElement;
      } else if (match.route.Component) {
        children = /* @__PURE__ */ reactExports.createElement(
          match.route.Component,
          null
        );
      } else if (match.route.element) {
        children = match.route.element;
      } else {
        children = outlet;
      }
      return /* @__PURE__ */ reactExports.createElement(RenderedRoute, {
        match,
        routeContext: {
          outlet,
          matches: matches2,
          isDataRoute: dataRouterState != null,
        },
        children,
      });
    };
    return dataRouterState &&
      (match.route.ErrorBoundary || match.route.errorElement || index === 0)
      ? /* @__PURE__ */ reactExports.createElement(RenderErrorBoundary, {
          location: dataRouterState.location,
          revalidation: dataRouterState.revalidation,
          component: errorElement,
          error,
          children: getChildren(),
          routeContext: { outlet: null, matches: matches2, isDataRoute: true },
        })
      : getChildren();
  }, null);
}
function getDataRouterConsoleError(hookName) {
  return `${hookName} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function useDataRouterContext(hookName) {
  let ctx = reactExports.useContext(DataRouterContext);
  invariant(ctx, getDataRouterConsoleError(hookName));
  return ctx;
}
function useDataRouterState(hookName) {
  let state = reactExports.useContext(DataRouterStateContext);
  invariant(state, getDataRouterConsoleError(hookName));
  return state;
}
function useRouteContext(hookName) {
  let route = reactExports.useContext(RouteContext);
  invariant(route, getDataRouterConsoleError(hookName));
  return route;
}
function useCurrentRouteId(hookName) {
  let route = useRouteContext(hookName);
  let thisRoute = route.matches[route.matches.length - 1];
  invariant(
    thisRoute.route.id,
    `${hookName} can only be used on routes that contain a unique "id"`
  );
  return thisRoute.route.id;
}
function useRouteId() {
  return useCurrentRouteId(
    'useRouteId'
    /* UseRouteId */
  );
}
function useRouteError() {
  let error = reactExports.useContext(RouteErrorContext);
  let state = useDataRouterState(
    'useRouteError'
    /* UseRouteError */
  );
  let routeId = useCurrentRouteId(
    'useRouteError'
    /* UseRouteError */
  );
  if (error !== void 0) {
    return error;
  }
  return state.errors?.[routeId];
}
function useNavigateStable() {
  let { router } = useDataRouterContext(
    'useNavigate'
    /* UseNavigateStable */
  );
  let id = useCurrentRouteId(
    'useNavigate'
    /* UseNavigateStable */
  );
  let activeRef = reactExports.useRef(false);
  useIsomorphicLayoutEffect(() => {
    activeRef.current = true;
  });
  let navigate = reactExports.useCallback(
    async (to, options = {}) => {
      warning(activeRef.current, navigateEffectWarning);
      if (!activeRef.current) return;
      if (typeof to === 'number') {
        router.navigate(to);
      } else {
        await router.navigate(to, { fromRouteId: id, ...options });
      }
    },
    [router, id]
  );
  return navigate;
}
var alreadyWarned = {};
function warningOnce(key, cond, message) {
  if (!cond && !alreadyWarned[key]) {
    alreadyWarned[key] = true;
    warning(false, message);
  }
}
reactExports.memo(DataRoutes);
function DataRoutes({ routes, future, state }) {
  return useRoutesImpl(routes, void 0, state, future);
}
function Outlet(props) {
  return useOutlet(props.context);
}
function Route(_props) {
  invariant(
    false,
    `A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`
  );
}
function Router$1({
  basename: basenameProp = '/',
  children = null,
  location: locationProp,
  navigationType = 'POP',
  navigator: navigator2,
  static: staticProp = false,
}) {
  invariant(
    !useInRouterContext(),
    `You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`
  );
  let basename = basenameProp.replace(/^\/*/, '/');
  let navigationContext = reactExports.useMemo(
    () => ({
      basename,
      navigator: navigator2,
      static: staticProp,
      future: {},
    }),
    [basename, navigator2, staticProp]
  );
  if (typeof locationProp === 'string') {
    locationProp = parsePath(locationProp);
  }
  let {
    pathname = '/',
    search = '',
    hash = '',
    state = null,
    key = 'default',
  } = locationProp;
  let locationContext = reactExports.useMemo(() => {
    let trailingPathname = stripBasename(pathname, basename);
    if (trailingPathname == null) {
      return null;
    }
    return {
      location: {
        pathname: trailingPathname,
        search,
        hash,
        state,
        key,
      },
      navigationType,
    };
  }, [basename, pathname, search, hash, state, key, navigationType]);
  warning(
    locationContext != null,
    `<Router basename="${basename}"> is not able to match the URL "${pathname}${search}${hash}" because it does not start with the basename, so the <Router> won't render anything.`
  );
  if (locationContext == null) {
    return null;
  }
  return /* @__PURE__ */ reactExports.createElement(
    NavigationContext.Provider,
    { value: navigationContext },
    /* @__PURE__ */ reactExports.createElement(LocationContext.Provider, {
      children,
      value: locationContext,
    })
  );
}
function Routes({ children, location }) {
  return useRoutes(createRoutesFromChildren(children), location);
}
function createRoutesFromChildren(children, parentPath = []) {
  let routes = [];
  reactExports.Children.forEach(children, (element, index) => {
    if (!reactExports.isValidElement(element)) {
      return;
    }
    let treePath = [...parentPath, index];
    if (element.type === reactExports.Fragment) {
      routes.push.apply(
        routes,
        createRoutesFromChildren(element.props.children, treePath)
      );
      return;
    }
    invariant(
      element.type === Route,
      `[${typeof element.type === 'string' ? element.type : element.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
    );
    invariant(
      !element.props.index || !element.props.children,
      'An index route cannot have child routes.'
    );
    let route = {
      id: element.props.id || treePath.join('-'),
      caseSensitive: element.props.caseSensitive,
      element: element.props.element,
      Component: element.props.Component,
      index: element.props.index,
      path: element.props.path,
      loader: element.props.loader,
      action: element.props.action,
      hydrateFallbackElement: element.props.hydrateFallbackElement,
      HydrateFallback: element.props.HydrateFallback,
      errorElement: element.props.errorElement,
      ErrorBoundary: element.props.ErrorBoundary,
      hasErrorBoundary:
        element.props.hasErrorBoundary === true ||
        element.props.ErrorBoundary != null ||
        element.props.errorElement != null,
      shouldRevalidate: element.props.shouldRevalidate,
      handle: element.props.handle,
      lazy: element.props.lazy,
    };
    if (element.props.children) {
      route.children = createRoutesFromChildren(
        element.props.children,
        treePath
      );
    }
    routes.push(route);
  });
  return routes;
}
var defaultMethod = 'get';
var defaultEncType = 'application/x-www-form-urlencoded';
function isHtmlElement(object) {
  return object != null && typeof object.tagName === 'string';
}
function isButtonElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === 'button';
}
function isFormElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === 'form';
}
function isInputElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === 'input';
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
function shouldProcessLinkClick(event, target) {
  return (
    event.button === 0 && // Ignore everything but left clicks
    (!target || target === '_self') && // Let browser handle "target=_blank" etc.
    !isModifiedEvent(event)
  );
}
function createSearchParams(init = '') {
  return new URLSearchParams(
    typeof init === 'string' ||
    Array.isArray(init) ||
    init instanceof URLSearchParams
      ? init
      : Object.keys(init).reduce((memo2, key) => {
          let value = init[key];
          return memo2.concat(
            Array.isArray(value) ? value.map((v) => [key, v]) : [[key, value]]
          );
        }, [])
  );
}
function getSearchParamsForLocation(locationSearch, defaultSearchParams) {
  let searchParams = createSearchParams(locationSearch);
  if (defaultSearchParams) {
    defaultSearchParams.forEach((_, key) => {
      if (!searchParams.has(key)) {
        defaultSearchParams.getAll(key).forEach((value) => {
          searchParams.append(key, value);
        });
      }
    });
  }
  return searchParams;
}
var _formDataSupportsSubmitter = null;
function isFormDataSubmitterSupported() {
  if (_formDataSupportsSubmitter === null) {
    try {
      new FormData(
        document.createElement('form'),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      );
      _formDataSupportsSubmitter = false;
    } catch (e) {
      _formDataSupportsSubmitter = true;
    }
  }
  return _formDataSupportsSubmitter;
}
var supportedFormEncTypes = /* @__PURE__ */ new Set([
  'application/x-www-form-urlencoded',
  'multipart/form-data',
  'text/plain',
]);
function getFormEncType(encType) {
  if (encType != null && !supportedFormEncTypes.has(encType)) {
    warning(
      false,
      `"${encType}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${defaultEncType}"`
    );
    return null;
  }
  return encType;
}
function getFormSubmissionInfo(target, basename) {
  let method;
  let action;
  let encType;
  let formData;
  let body;
  if (isFormElement(target)) {
    let attr = target.getAttribute('action');
    action = attr ? stripBasename(attr, basename) : null;
    method = target.getAttribute('method') || defaultMethod;
    encType = getFormEncType(target.getAttribute('enctype')) || defaultEncType;
    formData = new FormData(target);
  } else if (
    isButtonElement(target) ||
    (isInputElement(target) &&
      (target.type === 'submit' || target.type === 'image'))
  ) {
    let form = target.form;
    if (form == null) {
      throw new Error(
        `Cannot submit a <button> or <input type="submit"> without a <form>`
      );
    }
    let attr = target.getAttribute('formaction') || form.getAttribute('action');
    action = attr ? stripBasename(attr, basename) : null;
    method =
      target.getAttribute('formmethod') ||
      form.getAttribute('method') ||
      defaultMethod;
    encType =
      getFormEncType(target.getAttribute('formenctype')) ||
      getFormEncType(form.getAttribute('enctype')) ||
      defaultEncType;
    formData = new FormData(form, target);
    if (!isFormDataSubmitterSupported()) {
      let { name, type, value } = target;
      if (type === 'image') {
        let prefix = name ? `${name}.` : '';
        formData.append(`${prefix}x`, '0');
        formData.append(`${prefix}y`, '0');
      } else if (name) {
        formData.append(name, value);
      }
    }
  } else if (isHtmlElement(target)) {
    throw new Error(
      `Cannot submit element that is not <form>, <button>, or <input type="submit|image">`
    );
  } else {
    method = defaultMethod;
    action = null;
    encType = defaultEncType;
    body = target;
  }
  if (formData && encType === 'text/plain') {
    body = formData;
    formData = void 0;
  }
  return { action, method: method.toLowerCase(), encType, formData, body };
}
function invariant2(value, message) {
  if (value === false || value === null || typeof value === 'undefined') {
    throw new Error(message);
  }
}
async function loadRouteModule(route, routeModulesCache) {
  if (route.id in routeModulesCache) {
    return routeModulesCache[route.id];
  }
  try {
    let routeModule = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      route.module
    );
    routeModulesCache[route.id] = routeModule;
    return routeModule;
  } catch (error) {
    console.error(
      `Error loading route module \`${route.module}\`, reloading page...`
    );
    console.error(error);
    if (
      window.__reactRouterContext &&
      window.__reactRouterContext.isSpaMode && // @ts-expect-error
      void 0
    );
    window.location.reload();
    return new Promise(() => {});
  }
}
function isHtmlLinkDescriptor(object) {
  if (object == null) {
    return false;
  }
  if (object.href == null) {
    return (
      object.rel === 'preload' &&
      typeof object.imageSrcSet === 'string' &&
      typeof object.imageSizes === 'string'
    );
  }
  return typeof object.rel === 'string' && typeof object.href === 'string';
}
async function getKeyedPrefetchLinks(matches, manifest, routeModules) {
  let links = await Promise.all(
    matches.map(async (match) => {
      let route = manifest.routes[match.route.id];
      if (route) {
        let mod = await loadRouteModule(route, routeModules);
        return mod.links ? mod.links() : [];
      }
      return [];
    })
  );
  return dedupeLinkDescriptors(
    links
      .flat(1)
      .filter(isHtmlLinkDescriptor)
      .filter((link) => link.rel === 'stylesheet' || link.rel === 'preload')
      .map((link) =>
        link.rel === 'stylesheet'
          ? { ...link, rel: 'prefetch', as: 'style' }
          : { ...link, rel: 'prefetch' }
      )
  );
}
function getNewMatchesForLinks(
  page,
  nextMatches,
  currentMatches,
  manifest,
  location,
  mode
) {
  let isNew = (match, index) => {
    if (!currentMatches[index]) return true;
    return match.route.id !== currentMatches[index].route.id;
  };
  let matchPathChanged = (match, index) => {
    return (
      // param change, /users/123 -> /users/456
      currentMatches[index].pathname !== match.pathname || // splat param changed, which is not present in match.path
      // e.g. /files/images/avatar.jpg -> files/finances.xls
      (currentMatches[index].route.path?.endsWith('*') &&
        currentMatches[index].params['*'] !== match.params['*'])
    );
  };
  if (mode === 'assets') {
    return nextMatches.filter(
      (match, index) => isNew(match, index) || matchPathChanged(match, index)
    );
  }
  if (mode === 'data') {
    return nextMatches.filter((match, index) => {
      let manifestRoute = manifest.routes[match.route.id];
      if (!manifestRoute || !manifestRoute.hasLoader) {
        return false;
      }
      if (isNew(match, index) || matchPathChanged(match, index)) {
        return true;
      }
      if (match.route.shouldRevalidate) {
        let routeChoice = match.route.shouldRevalidate({
          currentUrl: new URL(
            location.pathname + location.search + location.hash,
            window.origin
          ),
          currentParams: currentMatches[0]?.params || {},
          nextUrl: new URL(page, window.origin),
          nextParams: match.params,
          defaultShouldRevalidate: true,
        });
        if (typeof routeChoice === 'boolean') {
          return routeChoice;
        }
      }
      return true;
    });
  }
  return [];
}
function getModuleLinkHrefs(matches, manifestPatch) {
  return dedupeHrefs(
    matches
      .map((match) => {
        let route = manifestPatch.routes[match.route.id];
        if (!route) return [];
        let hrefs = [route.module];
        if (route.imports) {
          hrefs = hrefs.concat(route.imports);
        }
        return hrefs;
      })
      .flat(1)
  );
}
function dedupeHrefs(hrefs) {
  return [...new Set(hrefs)];
}
function sortKeys(obj) {
  let sorted = {};
  let keys = Object.keys(obj).sort();
  for (let key of keys) {
    sorted[key] = obj[key];
  }
  return sorted;
}
function dedupeLinkDescriptors(descriptors2, preloads) {
  let set = /* @__PURE__ */ new Set();
  new Set(preloads);
  return descriptors2.reduce((deduped, descriptor) => {
    let key = JSON.stringify(sortKeys(descriptor));
    if (!set.has(key)) {
      set.add(key);
      deduped.push({ key, link: descriptor });
    }
    return deduped;
  }, []);
}
function singleFetchUrl(reqUrl) {
  let url =
    typeof reqUrl === 'string'
      ? new URL(
          reqUrl,
          // This can be called during the SSR flow via PrefetchPageLinksImpl so
          // don't assume window is available
          typeof window === 'undefined'
            ? 'server://singlefetch/'
            : window.location.origin
        )
      : reqUrl;
  if (url.pathname === '/') {
    url.pathname = '_root.data';
  } else {
    url.pathname = `${url.pathname.replace(/\/$/, '')}.data`;
  }
  return url;
}
function useDataRouterContext2() {
  let context = reactExports.useContext(DataRouterContext);
  invariant2(
    context,
    'You must render this element inside a <DataRouterContext.Provider> element'
  );
  return context;
}
function useDataRouterStateContext() {
  let context = reactExports.useContext(DataRouterStateContext);
  invariant2(
    context,
    'You must render this element inside a <DataRouterStateContext.Provider> element'
  );
  return context;
}
var FrameworkContext = reactExports.createContext(void 0);
FrameworkContext.displayName = 'FrameworkContext';
function useFrameworkContext() {
  let context = reactExports.useContext(FrameworkContext);
  invariant2(
    context,
    'You must render this element inside a <HydratedRouter> element'
  );
  return context;
}
function usePrefetchBehavior(prefetch, theirElementProps) {
  let frameworkContext = reactExports.useContext(FrameworkContext);
  let [maybePrefetch, setMaybePrefetch] = reactExports.useState(false);
  let [shouldPrefetch, setShouldPrefetch] = reactExports.useState(false);
  let { onFocus, onBlur, onMouseEnter, onMouseLeave, onTouchStart } =
    theirElementProps;
  let ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (prefetch === 'render') {
      setShouldPrefetch(true);
    }
    if (prefetch === 'viewport') {
      let callback = (entries) => {
        entries.forEach((entry) => {
          setShouldPrefetch(entry.isIntersecting);
        });
      };
      let observer = new IntersectionObserver(callback, { threshold: 0.5 });
      if (ref.current) observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }
  }, [prefetch]);
  reactExports.useEffect(() => {
    if (maybePrefetch) {
      let id = setTimeout(() => {
        setShouldPrefetch(true);
      }, 100);
      return () => {
        clearTimeout(id);
      };
    }
  }, [maybePrefetch]);
  let setIntent = () => {
    setMaybePrefetch(true);
  };
  let cancelIntent = () => {
    setMaybePrefetch(false);
    setShouldPrefetch(false);
  };
  if (!frameworkContext) {
    return [false, ref, {}];
  }
  if (prefetch !== 'intent') {
    return [shouldPrefetch, ref, {}];
  }
  return [
    shouldPrefetch,
    ref,
    {
      onFocus: composeEventHandlers(onFocus, setIntent),
      onBlur: composeEventHandlers(onBlur, cancelIntent),
      onMouseEnter: composeEventHandlers(onMouseEnter, setIntent),
      onMouseLeave: composeEventHandlers(onMouseLeave, cancelIntent),
      onTouchStart: composeEventHandlers(onTouchStart, setIntent),
    },
  ];
}
function composeEventHandlers(theirHandler, ourHandler) {
  return (event) => {
    theirHandler && theirHandler(event);
    if (!event.defaultPrevented) {
      ourHandler(event);
    }
  };
}
function PrefetchPageLinks({ page, ...dataLinkProps }) {
  let { router } = useDataRouterContext2();
  let matches = reactExports.useMemo(
    () => matchRoutes(router.routes, page, router.basename),
    [router.routes, page, router.basename]
  );
  if (!matches) {
    return null;
  }
  return /* @__PURE__ */ reactExports.createElement(PrefetchPageLinksImpl, {
    page,
    matches,
    ...dataLinkProps,
  });
}
function useKeyedPrefetchLinks(matches) {
  let { manifest, routeModules } = useFrameworkContext();
  let [keyedPrefetchLinks, setKeyedPrefetchLinks] = reactExports.useState([]);
  reactExports.useEffect(() => {
    let interrupted = false;
    void getKeyedPrefetchLinks(matches, manifest, routeModules).then(
      (links) => {
        if (!interrupted) {
          setKeyedPrefetchLinks(links);
        }
      }
    );
    return () => {
      interrupted = true;
    };
  }, [matches, manifest, routeModules]);
  return keyedPrefetchLinks;
}
function PrefetchPageLinksImpl({ page, matches: nextMatches, ...linkProps }) {
  let location = useLocation();
  let { manifest, routeModules } = useFrameworkContext();
  let { loaderData, matches } = useDataRouterStateContext();
  let newMatchesForData = reactExports.useMemo(
    () =>
      getNewMatchesForLinks(
        page,
        nextMatches,
        matches,
        manifest,
        location,
        'data'
      ),
    [page, nextMatches, matches, manifest, location]
  );
  let newMatchesForAssets = reactExports.useMemo(
    () =>
      getNewMatchesForLinks(
        page,
        nextMatches,
        matches,
        manifest,
        location,
        'assets'
      ),
    [page, nextMatches, matches, manifest, location]
  );
  let dataHrefs = reactExports.useMemo(() => {
    if (page === location.pathname + location.search + location.hash) {
      return [];
    }
    let routesParams = /* @__PURE__ */ new Set();
    let foundOptOutRoute = false;
    nextMatches.forEach((m) => {
      let manifestRoute = manifest.routes[m.route.id];
      if (!manifestRoute || !manifestRoute.hasLoader) {
        return;
      }
      if (
        !newMatchesForData.some((m2) => m2.route.id === m.route.id) &&
        m.route.id in loaderData &&
        routeModules[m.route.id]?.shouldRevalidate
      ) {
        foundOptOutRoute = true;
      } else if (manifestRoute.hasClientLoader) {
        foundOptOutRoute = true;
      } else {
        routesParams.add(m.route.id);
      }
    });
    if (routesParams.size === 0) {
      return [];
    }
    let url = singleFetchUrl(page);
    if (foundOptOutRoute && routesParams.size > 0) {
      url.searchParams.set(
        '_routes',
        nextMatches
          .filter((m) => routesParams.has(m.route.id))
          .map((m) => m.route.id)
          .join(',')
      );
    }
    return [url.pathname + url.search];
  }, [
    loaderData,
    location,
    manifest,
    newMatchesForData,
    nextMatches,
    page,
    routeModules,
  ]);
  let moduleHrefs = reactExports.useMemo(
    () => getModuleLinkHrefs(newMatchesForAssets, manifest),
    [newMatchesForAssets, manifest]
  );
  let keyedPrefetchLinks = useKeyedPrefetchLinks(newMatchesForAssets);
  return /* @__PURE__ */ reactExports.createElement(
    reactExports.Fragment,
    null,
    dataHrefs.map((href) =>
      /* @__PURE__ */ reactExports.createElement('link', {
        key: href,
        rel: 'prefetch',
        as: 'fetch',
        href,
        ...linkProps,
      })
    ),
    moduleHrefs.map((href) =>
      /* @__PURE__ */ reactExports.createElement('link', {
        key: href,
        rel: 'modulepreload',
        href,
        ...linkProps,
      })
    ),
    keyedPrefetchLinks.map(({ key, link }) =>
      // these don't spread `linkProps` because they are full link descriptors
      // already with their own props
      /* @__PURE__ */ reactExports.createElement('link', { key, ...link })
    )
  );
}
function mergeRefs(...refs) {
  return (value) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(value);
      } else if (ref != null) {
        ref.current = value;
      }
    });
  };
}
var isBrowser =
  typeof window !== 'undefined' &&
  typeof window.document !== 'undefined' &&
  typeof window.document.createElement !== 'undefined';
try {
  if (isBrowser) {
    window.__reactRouterVersion = '7.1.2';
  }
} catch (e) {}
function BrowserRouter({ basename, children, window: window2 }) {
  let historyRef = reactExports.useRef();
  if (historyRef.current == null) {
    historyRef.current = createBrowserHistory({
      window: window2,
      v5Compat: true,
    });
  }
  let history = historyRef.current;
  let [state, setStateImpl] = reactExports.useState({
    action: history.action,
    location: history.location,
  });
  let setState = reactExports.useCallback(
    (newState) => {
      reactExports.startTransition(() => setStateImpl(newState));
    },
    [setStateImpl]
  );
  reactExports.useLayoutEffect(
    () => history.listen(setState),
    [history, setState]
  );
  return /* @__PURE__ */ reactExports.createElement(Router$1, {
    basename,
    children,
    location: state.location,
    navigationType: state.action,
    navigator: history,
  });
}
var ABSOLUTE_URL_REGEX2 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
var Link = reactExports.forwardRef(function LinkWithRef(
  {
    onClick,
    discover = 'render',
    prefetch = 'none',
    relative,
    reloadDocument,
    replace: replace2,
    state,
    target,
    to,
    preventScrollReset,
    viewTransition,
    ...rest
  },
  forwardedRef
) {
  let { basename } = reactExports.useContext(NavigationContext);
  let isAbsolute = typeof to === 'string' && ABSOLUTE_URL_REGEX2.test(to);
  let absoluteHref;
  let isExternal = false;
  if (typeof to === 'string' && isAbsolute) {
    absoluteHref = to;
    if (isBrowser) {
      try {
        let currentUrl = new URL(window.location.href);
        let targetUrl = to.startsWith('//')
          ? new URL(currentUrl.protocol + to)
          : new URL(to);
        let path = stripBasename(targetUrl.pathname, basename);
        if (targetUrl.origin === currentUrl.origin && path != null) {
          to = path + targetUrl.search + targetUrl.hash;
        } else {
          isExternal = true;
        }
      } catch (e) {
        warning(
          false,
          `<Link to="${to}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    }
  }
  let href = useHref(to, { relative });
  let [shouldPrefetch, prefetchRef, prefetchHandlers] = usePrefetchBehavior(
    prefetch,
    rest
  );
  let internalOnClick = useLinkClickHandler(to, {
    replace: replace2,
    state,
    target,
    preventScrollReset,
    relative,
    viewTransition,
  });
  function handleClick(event) {
    if (onClick) onClick(event);
    if (!event.defaultPrevented) {
      internalOnClick(event);
    }
  }
  let link =
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ reactExports.createElement('a', {
      ...rest,
      ...prefetchHandlers,
      href: absoluteHref || href,
      onClick: isExternal || reloadDocument ? onClick : handleClick,
      ref: mergeRefs(forwardedRef, prefetchRef),
      target,
      'data-discover': !isAbsolute && discover === 'render' ? 'true' : void 0,
    });
  return shouldPrefetch && !isAbsolute
    ? /* @__PURE__ */ reactExports.createElement(
        reactExports.Fragment,
        null,
        link,
        /* @__PURE__ */ reactExports.createElement(PrefetchPageLinks, {
          page: href,
        })
      )
    : link;
});
Link.displayName = 'Link';
var NavLink = reactExports.forwardRef(function NavLinkWithRef(
  {
    'aria-current': ariaCurrentProp = 'page',
    caseSensitive = false,
    className: classNameProp = '',
    end = false,
    style: styleProp,
    to,
    viewTransition,
    children,
    ...rest
  },
  ref
) {
  let path = useResolvedPath(to, { relative: rest.relative });
  let location = useLocation();
  let routerState = reactExports.useContext(DataRouterStateContext);
  let { navigator: navigator2, basename } =
    reactExports.useContext(NavigationContext);
  let isTransitioning =
    routerState != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useViewTransitionState(path) &&
    viewTransition === true;
  let toPathname = navigator2.encodeLocation
    ? navigator2.encodeLocation(path).pathname
    : path.pathname;
  let locationPathname = location.pathname;
  let nextLocationPathname =
    routerState && routerState.navigation && routerState.navigation.location
      ? routerState.navigation.location.pathname
      : null;
  if (!caseSensitive) {
    locationPathname = locationPathname.toLowerCase();
    nextLocationPathname = nextLocationPathname
      ? nextLocationPathname.toLowerCase()
      : null;
    toPathname = toPathname.toLowerCase();
  }
  if (nextLocationPathname && basename) {
    nextLocationPathname =
      stripBasename(nextLocationPathname, basename) || nextLocationPathname;
  }
  const endSlashPosition =
    toPathname !== '/' && toPathname.endsWith('/')
      ? toPathname.length - 1
      : toPathname.length;
  let isActive =
    locationPathname === toPathname ||
    (!end &&
      locationPathname.startsWith(toPathname) &&
      locationPathname.charAt(endSlashPosition) === '/');
  let isPending =
    nextLocationPathname != null &&
    (nextLocationPathname === toPathname ||
      (!end &&
        nextLocationPathname.startsWith(toPathname) &&
        nextLocationPathname.charAt(toPathname.length) === '/'));
  let renderProps = {
    isActive,
    isPending,
    isTransitioning,
  };
  let ariaCurrent = isActive ? ariaCurrentProp : void 0;
  let className;
  if (typeof classNameProp === 'function') {
    className = classNameProp(renderProps);
  } else {
    className = [
      classNameProp,
      isActive ? 'active' : null,
      isPending ? 'pending' : null,
      isTransitioning ? 'transitioning' : null,
    ]
      .filter(Boolean)
      .join(' ');
  }
  let style =
    typeof styleProp === 'function' ? styleProp(renderProps) : styleProp;
  return /* @__PURE__ */ reactExports.createElement(
    Link,
    {
      ...rest,
      'aria-current': ariaCurrent,
      className,
      ref,
      style,
      to,
      viewTransition,
    },
    typeof children === 'function' ? children(renderProps) : children
  );
});
NavLink.displayName = 'NavLink';
var Form = reactExports.forwardRef(
  (
    {
      discover = 'render',
      fetcherKey,
      navigate,
      reloadDocument,
      replace: replace2,
      state,
      method = defaultMethod,
      action,
      onSubmit,
      relative,
      preventScrollReset,
      viewTransition,
      ...props
    },
    forwardedRef
  ) => {
    let submit = useSubmit();
    let formAction = useFormAction(action, { relative });
    let formMethod = method.toLowerCase() === 'get' ? 'get' : 'post';
    let isAbsolute =
      typeof action === 'string' && ABSOLUTE_URL_REGEX2.test(action);
    let submitHandler = (event) => {
      onSubmit && onSubmit(event);
      if (event.defaultPrevented) return;
      event.preventDefault();
      let submitter = event.nativeEvent.submitter;
      let submitMethod = submitter?.getAttribute('formmethod') || method;
      submit(submitter || event.currentTarget, {
        fetcherKey,
        method: submitMethod,
        navigate,
        replace: replace2,
        state,
        relative,
        preventScrollReset,
        viewTransition,
      });
    };
    return /* @__PURE__ */ reactExports.createElement('form', {
      ref: forwardedRef,
      method: formMethod,
      action: formAction,
      onSubmit: reloadDocument ? onSubmit : submitHandler,
      ...props,
      'data-discover': !isAbsolute && discover === 'render' ? 'true' : void 0,
    });
  }
);
Form.displayName = 'Form';
function getDataRouterConsoleError2(hookName) {
  return `${hookName} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function useDataRouterContext3(hookName) {
  let ctx = reactExports.useContext(DataRouterContext);
  invariant(ctx, getDataRouterConsoleError2(hookName));
  return ctx;
}
function useLinkClickHandler(
  to,
  {
    target,
    replace: replaceProp,
    state,
    preventScrollReset,
    relative,
    viewTransition,
  } = {}
) {
  let navigate = useNavigate();
  let location = useLocation();
  let path = useResolvedPath(to, { relative });
  return reactExports.useCallback(
    (event) => {
      if (shouldProcessLinkClick(event, target)) {
        event.preventDefault();
        let replace2 =
          replaceProp !== void 0
            ? replaceProp
            : createPath(location) === createPath(path);
        navigate(to, {
          replace: replace2,
          state,
          preventScrollReset,
          relative,
          viewTransition,
        });
      }
    },
    [
      location,
      navigate,
      path,
      replaceProp,
      state,
      target,
      to,
      preventScrollReset,
      relative,
      viewTransition,
    ]
  );
}
function useSearchParams(defaultInit) {
  warning(
    typeof URLSearchParams !== 'undefined',
    `You cannot use the \`useSearchParams\` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.`
  );
  let defaultSearchParamsRef = reactExports.useRef(
    createSearchParams(defaultInit)
  );
  let hasSetSearchParamsRef = reactExports.useRef(false);
  let location = useLocation();
  let searchParams = reactExports.useMemo(
    () =>
      // Only merge in the defaults if we haven't yet called setSearchParams.
      // Once we call that we want those to take precedence, otherwise you can't
      // remove a param with setSearchParams({}) if it has an initial value
      getSearchParamsForLocation(
        location.search,
        hasSetSearchParamsRef.current ? null : defaultSearchParamsRef.current
      ),
    [location.search]
  );
  let navigate = useNavigate();
  let setSearchParams = reactExports.useCallback(
    (nextInit, navigateOptions) => {
      const newSearchParams = createSearchParams(
        typeof nextInit === 'function' ? nextInit(searchParams) : nextInit
      );
      hasSetSearchParamsRef.current = true;
      navigate('?' + newSearchParams, navigateOptions);
    },
    [navigate, searchParams]
  );
  return [searchParams, setSearchParams];
}
var fetcherId = 0;
var getUniqueFetcherId = () => `__${String(++fetcherId)}__`;
function useSubmit() {
  let { router } = useDataRouterContext3(
    'useSubmit'
    /* UseSubmit */
  );
  let { basename } = reactExports.useContext(NavigationContext);
  let currentRouteId = useRouteId();
  return reactExports.useCallback(
    async (target, options = {}) => {
      let { action, method, encType, formData, body } = getFormSubmissionInfo(
        target,
        basename
      );
      if (options.navigate === false) {
        let key = options.fetcherKey || getUniqueFetcherId();
        await router.fetch(key, currentRouteId, options.action || action, {
          preventScrollReset: options.preventScrollReset,
          formData,
          body,
          formMethod: options.method || method,
          formEncType: options.encType || encType,
          flushSync: options.flushSync,
        });
      } else {
        await router.navigate(options.action || action, {
          preventScrollReset: options.preventScrollReset,
          formData,
          body,
          formMethod: options.method || method,
          formEncType: options.encType || encType,
          replace: options.replace,
          state: options.state,
          fromRouteId: currentRouteId,
          flushSync: options.flushSync,
          viewTransition: options.viewTransition,
        });
      }
    },
    [router, basename, currentRouteId]
  );
}
function useFormAction(action, { relative } = {}) {
  let { basename } = reactExports.useContext(NavigationContext);
  let routeContext = reactExports.useContext(RouteContext);
  invariant(routeContext, 'useFormAction must be used inside a RouteContext');
  let [match] = routeContext.matches.slice(-1);
  let path = { ...useResolvedPath(action ? action : '.', { relative }) };
  let location = useLocation();
  if (action == null) {
    path.search = location.search;
    let params = new URLSearchParams(path.search);
    let indexValues = params.getAll('index');
    let hasNakedIndexParam = indexValues.some((v) => v === '');
    if (hasNakedIndexParam) {
      params.delete('index');
      indexValues.filter((v) => v).forEach((v) => params.append('index', v));
      let qs = params.toString();
      path.search = qs ? `?${qs}` : '';
    }
  }
  if ((!action || action === '.') && match.route.index) {
    path.search = path.search
      ? path.search.replace(/^\?/, '?index&')
      : '?index';
  }
  if (basename !== '/') {
    path.pathname =
      path.pathname === '/' ? basename : joinPaths([basename, path.pathname]);
  }
  return createPath(path);
}
function useViewTransitionState(to, opts = {}) {
  let vtContext = reactExports.useContext(ViewTransitionContext);
  invariant(
    vtContext != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename } = useDataRouterContext3(
    'useViewTransitionState'
    /* useViewTransitionState */
  );
  let path = useResolvedPath(to, { relative: opts.relative });
  if (!vtContext.isTransitioning) {
    return false;
  }
  let currentPath =
    stripBasename(vtContext.currentLocation.pathname, basename) ||
    vtContext.currentLocation.pathname;
  let nextPath =
    stripBasename(vtContext.nextLocation.pathname, basename) ||
    vtContext.nextLocation.pathname;
  return (
    matchPath(path.pathname, nextPath) != null ||
    matchPath(path.pathname, currentPath) != null
  );
}
new TextEncoder();
var container$4 = 'style_container__1uxmxyt0';
var icons = 'style_icons__1uxmxyt1';
var icon = 'style_icon__1uxmxyt2';
var active = 'style_active__1uxmxyt3';
var others = 'style_others__1uxmxyt4';
var profileImg = 'style_profileImg__1uxmxyt5';
const Calendar = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx('svg', {
    width: '32',
    height: '32',
    viewBox: '0 0 32 32',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    children: /* @__PURE__ */ jsxRuntimeExports.jsx('path', {
      d: 'M9 4V7M23 4V7M4 25V10C4 9.20435 4.31607 8.44129 4.87868 7.87868C5.44129 7.31607 6.20435 7 7 7H25C25.7957 7 26.5587 7.31607 27.1213 7.87868C27.6839 8.44129 28 9.20435 28 10V25M4 25C4 25.7957 4.31607 26.5587 4.87868 27.1213C5.44129 27.6839 6.20435 28 7 28H25C25.7957 28 26.5587 27.6839 27.1213 27.1213C27.6839 26.5587 28 25.7957 28 25M4 25V15C4 14.2044 4.31607 13.4413 4.87868 12.8787C5.44129 12.3161 6.20435 12 7 12H25C25.7957 12 26.5587 12.3161 27.1213 12.8787C27.6839 13.4413 28 14.2044 28 15V25',
      stroke: 'white',
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    }),
  });
};
const Mail = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx('svg', {
    width: '32',
    height: '32',
    viewBox: '0 0 32 32',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    children: /* @__PURE__ */ jsxRuntimeExports.jsx('path', {
      d: 'M29 9V23C29 23.7956 28.6839 24.5587 28.1213 25.1213C27.5587 25.6839 26.7957 26 26 26H6C5.20435 26 4.44129 25.6839 3.87868 25.1213C3.31607 24.5587 3 23.7956 3 23V9M29 9C29 8.20435 28.6839 7.44129 28.1213 6.87868C27.5587 6.31607 26.7957 6 26 6H6C5.20435 6 4.44129 6.31607 3.87868 6.87868C3.31607 7.44129 3 8.20435 3 9M29 9V9.324C29.0001 9.83619 28.869 10.3399 28.6192 10.7871C28.3695 11.2342 28.0094 11.61 27.5733 11.8787L17.5733 18.032C17.1003 18.3234 16.5556 18.4777 16 18.4777C15.4444 18.4777 14.8997 18.3234 14.4267 18.032L4.42667 11.88C3.99056 11.6114 3.63049 11.2356 3.38076 10.7884C3.13102 10.3412 2.99994 9.83753 3 9.32533V9',
      stroke: 'white',
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    }),
  });
};
const Diary = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx('svg', {
    width: '32',
    height: '32',
    viewBox: '0 0 32 32',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    children: /* @__PURE__ */ jsxRuntimeExports.jsx('path', {
      d: 'M22.4827 5.98266L24.732 3.73199C25.2009 3.26309 25.8369 2.99966 26.5 2.99966C27.1631 2.99966 27.7991 3.26309 28.268 3.73199C28.7369 4.2009 29.0003 4.83687 29.0003 5.49999C29.0003 6.16312 28.7369 6.79909 28.268 7.26799L14.1093 21.4267C13.4044 22.1311 12.5352 22.649 11.58 22.9333L8 24L9.06667 20.42C9.35104 19.4648 9.86885 18.5956 10.5733 17.8907L22.4827 5.98266ZM22.4827 5.98266L26 9.49999M24 18.6667V25C24 25.7956 23.6839 26.5587 23.1213 27.1213C22.5587 27.6839 21.7956 28 21 28H7C6.20435 28 5.44129 27.6839 4.87868 27.1213C4.31607 26.5587 4 25.7956 4 25V11C4 10.2043 4.31607 9.44128 4.87868 8.87867C5.44129 8.31606 6.20435 7.99999 7 7.99999H13.3333',
      stroke: 'white',
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    }),
  });
};
const Alarm = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '36',
    height: '36',
    viewBox: '0 0 36 36',
    fill: 'none',
    children: /* @__PURE__ */ jsxRuntimeExports.jsx('path', {
      d: 'M22.2855 25.623C25.0803 25.2921 27.8263 24.6325 30.4665 23.658C28.2306 21.1812 26.9951 17.9617 27 14.625V13.5C27 11.1131 26.0518 8.82387 24.364 7.13604C22.6761 5.44821 20.3869 4.5 18 4.5C15.613 4.5 13.3239 5.44821 11.636 7.13604C9.94821 8.82387 9 11.1131 9 13.5V14.625C9.00452 17.9619 7.76848 21.1814 5.532 23.658C8.1315 24.618 10.872 25.2855 13.7145 25.623M22.2855 25.623C19.4385 25.9607 16.5615 25.9607 13.7145 25.623M22.2855 25.623C22.5017 26.2978 22.5554 27.0141 22.4424 27.7136C22.3294 28.4131 22.0527 29.076 21.6351 29.6484C21.2174 30.2207 20.6705 30.6864 20.0388 31.0074C19.4071 31.3284 18.7086 31.4958 18 31.4958C17.2914 31.4958 16.5929 31.3284 15.9612 31.0074C15.3295 30.6864 14.7826 30.2207 14.3649 29.6484C13.9473 29.076 13.6706 28.4131 13.5576 27.7136C13.4446 27.0141 13.4983 26.2978 13.7145 25.623',
      stroke: 'white',
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    }),
  });
};
const NavigationBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const menus = [
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, {}),
      link: '/',
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, {}),
      link: '/mail',
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Diary, {}),
      link: '/diary',
    },
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs('nav', {
    className: container$4,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx('div', {
        className: icons,
        children: menus.map((menu) =>
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            'div',
            {
              className: `${icon} ${location.pathname === menu.link ? active : ''}`,
              onClick: () => {
                navigate(menu.link);
              },
              children: menu.icon,
            },
            menu.link
          )
        ),
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs('div', {
        className: others,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx('img', {
            src: 'https://image.blip.kr/v1/file/32bf28d0434646cb51561a9bcdfbf46d',
            className: profileImg,
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Alarm, {}),
        ],
      }),
    ],
  });
};
const Layout = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs('div', {
    style: { display: 'flex' },
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(NavigationBar, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx('div', {
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}),
      }),
    ],
  });
};
const AppTitle = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '421',
    height: '75',
    viewBox: '0 0 421 75',
    fill: 'none',
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx('path', {
        d: 'M49.6332 26.6439C48.4493 18.7486 42.3323 13.9127 34.0448 13.9127C22.8961 13.9127 15.5951 22.4989 15.5951 37.5C15.5951 52.8959 22.9947 61.0873 33.9461 61.0873C42.135 61.0873 48.1533 56.5475 49.6332 48.8495L64.6297 48.9482C62.9524 62.1729 51.9024 74.2133 33.7488 74.2133C14.6085 74.2133 0.5 60.7912 0.5 37.5C0.5 14.2088 14.9045 0.786713 33.7488 0.786713C50.2252 0.786713 62.6564 10.2611 64.6297 26.6439H49.6332Z',
        fill: 'black',
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx('path', {
        d: 'M85.6445 73.2264H69.6614L94.4253 1.77363H113.467L138.132 73.2264H122.248L116.92 56.7449H91.0708L85.6445 73.2264ZM94.8199 45.1979H113.171L104.193 17.8604H103.699L94.8199 45.1979Z',
        fill: 'black',
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx('path', {
        d: 'M146.222 73.2264V1.77363H174.242C190.521 1.77363 199.795 10.952 199.795 25.0649C199.795 34.8353 195.306 41.9411 187.167 45.3953L202.36 73.2264H185.983L172.368 47.8626H161.021V73.2264H146.222ZM161.021 35.8222H171.48C180.26 35.8222 184.503 32.1707 184.503 25.0649C184.503 17.8604 180.26 13.9127 171.48 13.9127H161.021V35.8222Z',
        fill: 'black',
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx('path', {
        d: 'M210.056 73.2264V1.77363H238.076C254.355 1.77363 263.629 10.952 263.629 25.0649C263.629 34.8353 259.14 41.9411 251 45.3953L266.194 73.2264H249.816L236.201 47.8626H224.855V73.2264H210.056ZM224.855 35.8222H235.313C244.094 35.8222 248.337 32.1707 248.337 25.0649C248.337 17.8604 244.094 13.9127 235.313 13.9127H224.855V35.8222Z',
        fill: 'black',
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx('path', {
        d: 'M290.958 1.77363L289.675 51.8103H277.047L275.764 1.77363H290.958ZM283.46 74.1146C278.823 74.1146 275.074 70.3643 275.172 65.8245C275.074 61.2847 278.823 57.6331 283.46 57.6331C287.801 57.6331 291.649 61.2847 291.649 65.8245C291.649 70.3643 287.801 74.1146 283.46 74.1146Z',
        fill: 'black',
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx('path', {
        d: 'M304.869 73.2264V1.77363H352.819V14.0114H319.668V31.3811H350.352V43.6189H319.668V60.9886H352.917V73.2264H304.869Z',
        fill: 'black',
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx('path', {
        d: 'M364.362 73.2264V1.77363H392.382C408.661 1.77363 417.935 10.952 417.935 25.0649C417.935 34.8353 413.446 41.9411 405.306 45.3953L420.5 73.2264H404.122L390.507 47.8626H379.161V73.2264H364.362ZM379.161 35.8222H389.619C398.4 35.8222 402.642 32.1707 402.642 25.0649C402.642 17.8604 398.4 13.9127 389.619 13.9127H379.161V35.8222Z',
        fill: 'black',
      }),
    ],
  });
};
const Google = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '25',
    height: '25',
    viewBox: '0 0 25 25',
    fill: 'none',
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx('path', {
        d: 'M22.3055 10.2548H21.5V10.2133H12.5V14.2133H18.1515C17.327 16.5418 15.1115 18.2133 12.5 18.2133C9.1865 18.2133 6.5 15.5268 6.5 12.2133C6.5 8.89979 9.1865 6.21329 12.5 6.21329C14.0295 6.21329 15.421 6.79029 16.4805 7.73279L19.309 4.90429C17.523 3.23979 15.134 2.21329 12.5 2.21329C6.9775 2.21329 2.5 6.69079 2.5 12.2133C2.5 17.7358 6.9775 22.2133 12.5 22.2133C18.0225 22.2133 22.5 17.7358 22.5 12.2133C22.5 11.5428 22.431 10.8883 22.3055 10.2548Z',
        fill: '#FFC107',
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx('path', {
        d: 'M3.65302 7.55879L6.93851 9.96829C7.82752 7.76729 9.98052 6.21329 12.5 6.21329C14.0295 6.21329 15.421 6.79029 16.4805 7.73279L19.309 4.90429C17.523 3.23979 15.134 2.21329 12.5 2.21329C8.65902 2.21329 5.32802 4.38179 3.65302 7.55879Z',
        fill: '#FF3D00',
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx('path', {
        d: 'M12.5 22.2133C15.083 22.2133 17.43 21.2248 19.2045 19.6173L16.1095 16.9983C15.1055 17.7588 13.8575 18.2133 12.5 18.2133C9.89897 18.2133 7.69047 16.5548 6.85847 14.2403L3.59747 16.7528C5.25247 19.9913 8.61347 22.2133 12.5 22.2133Z',
        fill: '#4CAF50',
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx('path', {
        d: 'M22.3055 10.2548H21.5V10.2133H12.5V14.2133H18.1515C17.7555 15.3318 17.036 16.2963 16.108 16.9988L16.1095 16.9978L19.2045 19.6168C18.9855 19.8158 22.5 17.2133 22.5 12.2133C22.5 11.5428 22.431 10.8883 22.3055 10.2548Z',
        fill: '#1976D2',
      }),
    ],
  });
};
var container$3 = 'style_container__g4ij6a1';
var center$1 = 'style_center__g4ij6a2';
var explain = 'style_explain__g4ij6a3';
var loginButton = 'style_loginButton__g4ij6a4';
var loginText$1 = 'style_loginText__g4ij6a5';
var shape$1 = 'style_shape__g4ij6a6';
var Asterisk$1 = 'style_Asterisk__g4ij6a7 style_shape__g4ij6a6';
var Cube$1 = 'style_Cube__g4ij6a8 style_shape__g4ij6a6';
var Sphere$1 = 'style_Sphere__g4ij6a9 style_shape__g4ij6a6';
var MobiusStrip$1 = 'style_MobiusStrip__g4ij6aa style_shape__g4ij6a6';
const Arrow$1 = ({ direction = 'left' }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx('svg', {
    width: '24',
    height: '25',
    viewBox: '0 0 24 25',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    style: {
      transform: direction === 'right' ? 'rotate(180deg)' : 'none',
      transformOrigin: 'center',
    },
    children: /* @__PURE__ */ jsxRuntimeExports.jsx('path', {
      d: 'M15.75 20L8.25 12.5L15.75 5',
      stroke: '#121213',
      strokeWidth: '1.5',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    }),
  });
};
const LandingAsterisk =
  '' + new URL('LandingAsterisk-CBagl9BJ.png', import.meta.url).href;
const LandingCube =
  '' + new URL('LandingCube-DF3RTAr7.png', import.meta.url).href;
const LandingSphere =
  '' + new URL('LandingSphere-BUsUd4wf.png', import.meta.url).href;
const LandingMobiusStrip =
  '' + new URL('LandingMobiusStrip-B8Jih3F9.png', import.meta.url).href;
var Subscribable = class {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set();
    this.subscribe = this.subscribe.bind(this);
  }
  subscribe(listener) {
    this.listeners.add(listener);
    this.onSubscribe();
    return () => {
      this.listeners.delete(listener);
      this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {}
  onUnsubscribe() {}
};
var isServer = typeof window === 'undefined' || 'Deno' in globalThis;
function noop$2() {}
function functionalUpdate(updater, input) {
  return typeof updater === 'function' ? updater(input) : updater;
}
function isValidTimeout(value) {
  return typeof value === 'number' && value >= 0 && value !== Infinity;
}
function timeUntilStale(updatedAt, staleTime) {
  return Math.max(updatedAt + (staleTime || 0) - Date.now(), 0);
}
function resolveStaleTime(staleTime, query) {
  return typeof staleTime === 'function' ? staleTime(query) : staleTime;
}
function resolveEnabled(enabled, query) {
  return typeof enabled === 'function' ? enabled(query) : enabled;
}
function matchQuery(filters, query) {
  const {
    type = 'all',
    exact,
    fetchStatus,
    predicate,
    queryKey,
    stale,
  } = filters;
  if (queryKey) {
    if (exact) {
      if (query.queryHash !== hashQueryKeyByOptions(queryKey, query.options)) {
        return false;
      }
    } else if (!partialMatchKey(query.queryKey, queryKey)) {
      return false;
    }
  }
  if (type !== 'all') {
    const isActive = query.isActive();
    if (type === 'active' && !isActive) {
      return false;
    }
    if (type === 'inactive' && isActive) {
      return false;
    }
  }
  if (typeof stale === 'boolean' && query.isStale() !== stale) {
    return false;
  }
  if (fetchStatus && fetchStatus !== query.state.fetchStatus) {
    return false;
  }
  if (predicate && !predicate(query)) {
    return false;
  }
  return true;
}
function matchMutation(filters, mutation) {
  const { exact, status, predicate, mutationKey } = filters;
  if (mutationKey) {
    if (!mutation.options.mutationKey) {
      return false;
    }
    if (exact) {
      if (hashKey(mutation.options.mutationKey) !== hashKey(mutationKey)) {
        return false;
      }
    } else if (!partialMatchKey(mutation.options.mutationKey, mutationKey)) {
      return false;
    }
  }
  if (status && mutation.state.status !== status) {
    return false;
  }
  if (predicate && !predicate(mutation)) {
    return false;
  }
  return true;
}
function hashQueryKeyByOptions(queryKey, options) {
  const hashFn = options?.queryKeyHashFn || hashKey;
  return hashFn(queryKey);
}
function hashKey(queryKey) {
  return JSON.stringify(queryKey, (_, val) =>
    isPlainObject$1(val)
      ? Object.keys(val)
          .sort()
          .reduce((result, key) => {
            result[key] = val[key];
            return result;
          }, {})
      : val
  );
}
function partialMatchKey(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (a && b && typeof a === 'object' && typeof b === 'object') {
    return !Object.keys(b).some((key) => !partialMatchKey(a[key], b[key]));
  }
  return false;
}
function replaceEqualDeep(a, b) {
  if (a === b) {
    return a;
  }
  const array = isPlainArray(a) && isPlainArray(b);
  if (array || (isPlainObject$1(a) && isPlainObject$1(b))) {
    const aItems = array ? a : Object.keys(a);
    const aSize = aItems.length;
    const bItems = array ? b : Object.keys(b);
    const bSize = bItems.length;
    const copy = array ? [] : {};
    let equalItems = 0;
    for (let i = 0; i < bSize; i++) {
      const key = array ? i : bItems[i];
      if (
        ((!array && aItems.includes(key)) || array) &&
        a[key] === void 0 &&
        b[key] === void 0
      ) {
        copy[key] = void 0;
        equalItems++;
      } else {
        copy[key] = replaceEqualDeep(a[key], b[key]);
        if (copy[key] === a[key] && a[key] !== void 0) {
          equalItems++;
        }
      }
    }
    return aSize === bSize && equalItems === aSize ? a : copy;
  }
  return b;
}
function shallowEqualObjects(a, b) {
  if (!b || Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }
  for (const key in a) {
    if (a[key] !== b[key]) {
      return false;
    }
  }
  return true;
}
function isPlainArray(value) {
  return Array.isArray(value) && value.length === Object.keys(value).length;
}
function isPlainObject$1(o) {
  if (!hasObjectPrototype(o)) {
    return false;
  }
  const ctor = o.constructor;
  if (ctor === void 0) {
    return true;
  }
  const prot = ctor.prototype;
  if (!hasObjectPrototype(prot)) {
    return false;
  }
  if (!prot.hasOwnProperty('isPrototypeOf')) {
    return false;
  }
  if (Object.getPrototypeOf(o) !== Object.prototype) {
    return false;
  }
  return true;
}
function hasObjectPrototype(o) {
  return Object.prototype.toString.call(o) === '[object Object]';
}
function sleep(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
function replaceData(prevData, data, options) {
  if (typeof options.structuralSharing === 'function') {
    return options.structuralSharing(prevData, data);
  } else if (options.structuralSharing !== false) {
    return replaceEqualDeep(prevData, data);
  }
  return data;
}
function addToEnd(items, item, max = 0) {
  const newItems = [...items, item];
  return max && newItems.length > max ? newItems.slice(1) : newItems;
}
function addToStart(items, item, max = 0) {
  const newItems = [item, ...items];
  return max && newItems.length > max ? newItems.slice(0, -1) : newItems;
}
var skipToken = Symbol();
function ensureQueryFn(options, fetchOptions) {
  if (!options.queryFn && fetchOptions?.initialPromise) {
    return () => fetchOptions.initialPromise;
  }
  if (!options.queryFn || options.queryFn === skipToken) {
    return () =>
      Promise.reject(new Error(`Missing queryFn: '${options.queryHash}'`));
  }
  return options.queryFn;
}
var FocusManager = class extends Subscribable {
  #focused;
  #cleanup;
  #setup;
  constructor() {
    super();
    this.#setup = (onFocus) => {
      if (!isServer && window.addEventListener) {
        const listener = () => onFocus();
        window.addEventListener('visibilitychange', listener, false);
        return () => {
          window.removeEventListener('visibilitychange', listener);
        };
      }
      return;
    };
  }
  onSubscribe() {
    if (!this.#cleanup) {
      this.setEventListener(this.#setup);
    }
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      this.#cleanup?.();
      this.#cleanup = void 0;
    }
  }
  setEventListener(setup) {
    this.#setup = setup;
    this.#cleanup?.();
    this.#cleanup = setup((focused) => {
      if (typeof focused === 'boolean') {
        this.setFocused(focused);
      } else {
        this.onFocus();
      }
    });
  }
  setFocused(focused) {
    const changed = this.#focused !== focused;
    if (changed) {
      this.#focused = focused;
      this.onFocus();
    }
  }
  onFocus() {
    const isFocused = this.isFocused();
    this.listeners.forEach((listener) => {
      listener(isFocused);
    });
  }
  isFocused() {
    if (typeof this.#focused === 'boolean') {
      return this.#focused;
    }
    return globalThis.document?.visibilityState !== 'hidden';
  }
};
var focusManager = new FocusManager();
var OnlineManager = class extends Subscribable {
  #online = true;
  #cleanup;
  #setup;
  constructor() {
    super();
    this.#setup = (onOnline) => {
      if (!isServer && window.addEventListener) {
        const onlineListener = () => onOnline(true);
        const offlineListener = () => onOnline(false);
        window.addEventListener('online', onlineListener, false);
        window.addEventListener('offline', offlineListener, false);
        return () => {
          window.removeEventListener('online', onlineListener);
          window.removeEventListener('offline', offlineListener);
        };
      }
      return;
    };
  }
  onSubscribe() {
    if (!this.#cleanup) {
      this.setEventListener(this.#setup);
    }
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      this.#cleanup?.();
      this.#cleanup = void 0;
    }
  }
  setEventListener(setup) {
    this.#setup = setup;
    this.#cleanup?.();
    this.#cleanup = setup(this.setOnline.bind(this));
  }
  setOnline(online) {
    const changed = this.#online !== online;
    if (changed) {
      this.#online = online;
      this.listeners.forEach((listener) => {
        listener(online);
      });
    }
  }
  isOnline() {
    return this.#online;
  }
};
var onlineManager = new OnlineManager();
function pendingThenable() {
  let resolve;
  let reject;
  const thenable = new Promise((_resolve, _reject) => {
    resolve = _resolve;
    reject = _reject;
  });
  thenable.status = 'pending';
  thenable.catch(() => {});
  function finalize(data) {
    Object.assign(thenable, data);
    delete thenable.resolve;
    delete thenable.reject;
  }
  thenable.resolve = (value) => {
    finalize({
      status: 'fulfilled',
      value,
    });
    resolve(value);
  };
  thenable.reject = (reason) => {
    finalize({
      status: 'rejected',
      reason,
    });
    reject(reason);
  };
  return thenable;
}
function defaultRetryDelay(failureCount) {
  return Math.min(1e3 * 2 ** failureCount, 3e4);
}
function canFetch(networkMode) {
  return (networkMode ?? 'online') === 'online'
    ? onlineManager.isOnline()
    : true;
}
var CancelledError = class extends Error {
  constructor(options) {
    super('CancelledError');
    this.revert = options?.revert;
    this.silent = options?.silent;
  }
};
function isCancelledError(value) {
  return value instanceof CancelledError;
}
function createRetryer(config) {
  let isRetryCancelled = false;
  let failureCount = 0;
  let isResolved = false;
  let continueFn;
  const thenable = pendingThenable();
  const cancel = (cancelOptions) => {
    if (!isResolved) {
      reject(new CancelledError(cancelOptions));
      config.abort?.();
    }
  };
  const cancelRetry = () => {
    isRetryCancelled = true;
  };
  const continueRetry = () => {
    isRetryCancelled = false;
  };
  const canContinue = () =>
    focusManager.isFocused() &&
    (config.networkMode === 'always' || onlineManager.isOnline()) &&
    config.canRun();
  const canStart = () => canFetch(config.networkMode) && config.canRun();
  const resolve = (value) => {
    if (!isResolved) {
      isResolved = true;
      config.onSuccess?.(value);
      continueFn?.();
      thenable.resolve(value);
    }
  };
  const reject = (value) => {
    if (!isResolved) {
      isResolved = true;
      config.onError?.(value);
      continueFn?.();
      thenable.reject(value);
    }
  };
  const pause = () => {
    return new Promise((continueResolve) => {
      continueFn = (value) => {
        if (isResolved || canContinue()) {
          continueResolve(value);
        }
      };
      config.onPause?.();
    }).then(() => {
      continueFn = void 0;
      if (!isResolved) {
        config.onContinue?.();
      }
    });
  };
  const run = () => {
    if (isResolved) {
      return;
    }
    let promiseOrValue;
    const initialPromise = failureCount === 0 ? config.initialPromise : void 0;
    try {
      promiseOrValue = initialPromise ?? config.fn();
    } catch (error) {
      promiseOrValue = Promise.reject(error);
    }
    Promise.resolve(promiseOrValue)
      .then(resolve)
      .catch((error) => {
        if (isResolved) {
          return;
        }
        const retry = config.retry ?? (isServer ? 0 : 3);
        const retryDelay = config.retryDelay ?? defaultRetryDelay;
        const delay =
          typeof retryDelay === 'function'
            ? retryDelay(failureCount, error)
            : retryDelay;
        const shouldRetry =
          retry === true ||
          (typeof retry === 'number' && failureCount < retry) ||
          (typeof retry === 'function' && retry(failureCount, error));
        if (isRetryCancelled || !shouldRetry) {
          reject(error);
          return;
        }
        failureCount++;
        config.onFail?.(failureCount, error);
        sleep(delay)
          .then(() => {
            return canContinue() ? void 0 : pause();
          })
          .then(() => {
            if (isRetryCancelled) {
              reject(error);
            } else {
              run();
            }
          });
      });
  };
  return {
    promise: thenable,
    cancel,
    continue: () => {
      continueFn?.();
      return thenable;
    },
    cancelRetry,
    continueRetry,
    canStart,
    start: () => {
      if (canStart()) {
        run();
      } else {
        pause().then(run);
      }
      return thenable;
    },
  };
}
function createNotifyManager() {
  let queue = [];
  let transactions = 0;
  let notifyFn = (callback) => {
    callback();
  };
  let batchNotifyFn = (callback) => {
    callback();
  };
  let scheduleFn = (cb) => setTimeout(cb, 0);
  const schedule = (callback) => {
    if (transactions) {
      queue.push(callback);
    } else {
      scheduleFn(() => {
        notifyFn(callback);
      });
    }
  };
  const flush = () => {
    const originalQueue = queue;
    queue = [];
    if (originalQueue.length) {
      scheduleFn(() => {
        batchNotifyFn(() => {
          originalQueue.forEach((callback) => {
            notifyFn(callback);
          });
        });
      });
    }
  };
  return {
    batch: (callback) => {
      let result;
      transactions++;
      try {
        result = callback();
      } finally {
        transactions--;
        if (!transactions) {
          flush();
        }
      }
      return result;
    },
    /**
     * All calls to the wrapped function will be batched.
     */
    batchCalls: (callback) => {
      return (...args) => {
        schedule(() => {
          callback(...args);
        });
      };
    },
    schedule,
    /**
     * Use this method to set a custom notify function.
     * This can be used to for example wrap notifications with `React.act` while running tests.
     */
    setNotifyFunction: (fn) => {
      notifyFn = fn;
    },
    /**
     * Use this method to set a custom function to batch notifications together into a single tick.
     * By default React Query will use the batch function provided by ReactDOM or React Native.
     */
    setBatchNotifyFunction: (fn) => {
      batchNotifyFn = fn;
    },
    setScheduler: (fn) => {
      scheduleFn = fn;
    },
  };
}
var notifyManager = createNotifyManager();
var Removable = class {
  #gcTimeout;
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout();
    if (isValidTimeout(this.gcTime)) {
      this.#gcTimeout = setTimeout(() => {
        this.optionalRemove();
      }, this.gcTime);
    }
  }
  updateGcTime(newGcTime) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      newGcTime ?? (isServer ? Infinity : 5 * 60 * 1e3)
    );
  }
  clearGcTimeout() {
    if (this.#gcTimeout) {
      clearTimeout(this.#gcTimeout);
      this.#gcTimeout = void 0;
    }
  }
};
var Query = class extends Removable {
  #initialState;
  #revertState;
  #cache;
  #retryer;
  #defaultOptions;
  #abortSignalConsumed;
  constructor(config) {
    super();
    this.#abortSignalConsumed = false;
    this.#defaultOptions = config.defaultOptions;
    this.setOptions(config.options);
    this.observers = [];
    this.#cache = config.cache;
    this.queryKey = config.queryKey;
    this.queryHash = config.queryHash;
    this.#initialState = getDefaultState$1(this.options);
    this.state = config.state ?? this.#initialState;
    this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  get promise() {
    return this.#retryer?.promise;
  }
  setOptions(options) {
    this.options = { ...this.#defaultOptions, ...options };
    this.updateGcTime(this.options.gcTime);
  }
  optionalRemove() {
    if (!this.observers.length && this.state.fetchStatus === 'idle') {
      this.#cache.remove(this);
    }
  }
  setData(newData, options) {
    const data = replaceData(this.state.data, newData, this.options);
    this.#dispatch({
      data,
      type: 'success',
      dataUpdatedAt: options?.updatedAt,
      manual: options?.manual,
    });
    return data;
  }
  setState(state, setStateOptions) {
    this.#dispatch({ type: 'setState', state, setStateOptions });
  }
  cancel(options) {
    const promise = this.#retryer?.promise;
    this.#retryer?.cancel(options);
    return promise ? promise.then(noop$2).catch(noop$2) : Promise.resolve();
  }
  destroy() {
    super.destroy();
    this.cancel({ silent: true });
  }
  reset() {
    this.destroy();
    this.setState(this.#initialState);
  }
  isActive() {
    return this.observers.some(
      (observer) => resolveEnabled(observer.options.enabled, this) !== false
    );
  }
  isDisabled() {
    if (this.getObserversCount() > 0) {
      return !this.isActive();
    }
    return (
      this.options.queryFn === skipToken ||
      this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    );
  }
  isStale() {
    if (this.state.isInvalidated) {
      return true;
    }
    if (this.getObserversCount() > 0) {
      return this.observers.some(
        (observer) => observer.getCurrentResult().isStale
      );
    }
    return this.state.data === void 0;
  }
  isStaleByTime(staleTime = 0) {
    return (
      this.state.isInvalidated ||
      this.state.data === void 0 ||
      !timeUntilStale(this.state.dataUpdatedAt, staleTime)
    );
  }
  onFocus() {
    const observer = this.observers.find((x) => x.shouldFetchOnWindowFocus());
    observer?.refetch({ cancelRefetch: false });
    this.#retryer?.continue();
  }
  onOnline() {
    const observer = this.observers.find((x) => x.shouldFetchOnReconnect());
    observer?.refetch({ cancelRefetch: false });
    this.#retryer?.continue();
  }
  addObserver(observer) {
    if (!this.observers.includes(observer)) {
      this.observers.push(observer);
      this.clearGcTimeout();
      this.#cache.notify({ type: 'observerAdded', query: this, observer });
    }
  }
  removeObserver(observer) {
    if (this.observers.includes(observer)) {
      this.observers = this.observers.filter((x) => x !== observer);
      if (!this.observers.length) {
        if (this.#retryer) {
          if (this.#abortSignalConsumed) {
            this.#retryer.cancel({ revert: true });
          } else {
            this.#retryer.cancelRetry();
          }
        }
        this.scheduleGc();
      }
      this.#cache.notify({ type: 'observerRemoved', query: this, observer });
    }
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    if (!this.state.isInvalidated) {
      this.#dispatch({ type: 'invalidate' });
    }
  }
  fetch(options, fetchOptions) {
    if (this.state.fetchStatus !== 'idle') {
      if (this.state.data !== void 0 && fetchOptions?.cancelRefetch) {
        this.cancel({ silent: true });
      } else if (this.#retryer) {
        this.#retryer.continueRetry();
        return this.#retryer.promise;
      }
    }
    if (options) {
      this.setOptions(options);
    }
    if (!this.options.queryFn) {
      const observer = this.observers.find((x) => x.options.queryFn);
      if (observer) {
        this.setOptions(observer.options);
      }
    }
    const abortController = new AbortController();
    const addSignalProperty = (object) => {
      Object.defineProperty(object, 'signal', {
        enumerable: true,
        get: () => {
          this.#abortSignalConsumed = true;
          return abortController.signal;
        },
      });
    };
    const fetchFn = () => {
      const queryFn = ensureQueryFn(this.options, fetchOptions);
      const queryFnContext = {
        queryKey: this.queryKey,
        meta: this.meta,
      };
      addSignalProperty(queryFnContext);
      this.#abortSignalConsumed = false;
      if (this.options.persister) {
        return this.options.persister(queryFn, queryFnContext, this);
      }
      return queryFn(queryFnContext);
    };
    const context = {
      fetchOptions,
      options: this.options,
      queryKey: this.queryKey,
      state: this.state,
      fetchFn,
    };
    addSignalProperty(context);
    this.options.behavior?.onFetch(context, this);
    this.#revertState = this.state;
    if (
      this.state.fetchStatus === 'idle' ||
      this.state.fetchMeta !== context.fetchOptions?.meta
    ) {
      this.#dispatch({ type: 'fetch', meta: context.fetchOptions?.meta });
    }
    const onError = (error) => {
      if (!(isCancelledError(error) && error.silent)) {
        this.#dispatch({
          type: 'error',
          error,
        });
      }
      if (!isCancelledError(error)) {
        this.#cache.config.onError?.(error, this);
        this.#cache.config.onSettled?.(this.state.data, error, this);
      }
      this.scheduleGc();
    };
    this.#retryer = createRetryer({
      initialPromise: fetchOptions?.initialPromise,
      fn: context.fetchFn,
      abort: abortController.abort.bind(abortController),
      onSuccess: (data) => {
        if (data === void 0) {
          onError(new Error(`${this.queryHash} data is undefined`));
          return;
        }
        try {
          this.setData(data);
        } catch (error) {
          onError(error);
          return;
        }
        this.#cache.config.onSuccess?.(data, this);
        this.#cache.config.onSettled?.(data, this.state.error, this);
        this.scheduleGc();
      },
      onError,
      onFail: (failureCount, error) => {
        this.#dispatch({ type: 'failed', failureCount, error });
      },
      onPause: () => {
        this.#dispatch({ type: 'pause' });
      },
      onContinue: () => {
        this.#dispatch({ type: 'continue' });
      },
      retry: context.options.retry,
      retryDelay: context.options.retryDelay,
      networkMode: context.options.networkMode,
      canRun: () => true,
    });
    return this.#retryer.start();
  }
  #dispatch(action) {
    const reducer = (state) => {
      switch (action.type) {
        case 'failed':
          return {
            ...state,
            fetchFailureCount: action.failureCount,
            fetchFailureReason: action.error,
          };
        case 'pause':
          return {
            ...state,
            fetchStatus: 'paused',
          };
        case 'continue':
          return {
            ...state,
            fetchStatus: 'fetching',
          };
        case 'fetch':
          return {
            ...state,
            ...fetchState(state.data, this.options),
            fetchMeta: action.meta ?? null,
          };
        case 'success':
          return {
            ...state,
            data: action.data,
            dataUpdateCount: state.dataUpdateCount + 1,
            dataUpdatedAt: action.dataUpdatedAt ?? Date.now(),
            error: null,
            isInvalidated: false,
            status: 'success',
            ...(!action.manual && {
              fetchStatus: 'idle',
              fetchFailureCount: 0,
              fetchFailureReason: null,
            }),
          };
        case 'error':
          const error = action.error;
          if (isCancelledError(error) && error.revert && this.#revertState) {
            return { ...this.#revertState, fetchStatus: 'idle' };
          }
          return {
            ...state,
            error,
            errorUpdateCount: state.errorUpdateCount + 1,
            errorUpdatedAt: Date.now(),
            fetchFailureCount: state.fetchFailureCount + 1,
            fetchFailureReason: error,
            fetchStatus: 'idle',
            status: 'error',
          };
        case 'invalidate':
          return {
            ...state,
            isInvalidated: true,
          };
        case 'setState':
          return {
            ...state,
            ...action.state,
          };
      }
    };
    this.state = reducer(this.state);
    notifyManager.batch(() => {
      this.observers.forEach((observer) => {
        observer.onQueryUpdate();
      });
      this.#cache.notify({ query: this, type: 'updated', action });
    });
  }
};
function fetchState(data, options) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: canFetch(options.networkMode) ? 'fetching' : 'paused',
    ...(data === void 0 && {
      error: null,
      status: 'pending',
    }),
  };
}
function getDefaultState$1(options) {
  const data =
    typeof options.initialData === 'function'
      ? options.initialData()
      : options.initialData;
  const hasData = data !== void 0;
  const initialDataUpdatedAt = hasData
    ? typeof options.initialDataUpdatedAt === 'function'
      ? options.initialDataUpdatedAt()
      : options.initialDataUpdatedAt
    : 0;
  return {
    data,
    dataUpdateCount: 0,
    dataUpdatedAt: hasData ? (initialDataUpdatedAt ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: false,
    status: hasData ? 'success' : 'pending',
    fetchStatus: 'idle',
  };
}
var QueryCache = class extends Subscribable {
  constructor(config = {}) {
    super();
    this.config = config;
    this.#queries = /* @__PURE__ */ new Map();
  }
  #queries;
  build(client2, options, state) {
    const queryKey = options.queryKey;
    const queryHash =
      options.queryHash ?? hashQueryKeyByOptions(queryKey, options);
    let query = this.get(queryHash);
    if (!query) {
      query = new Query({
        cache: this,
        queryKey,
        queryHash,
        options: client2.defaultQueryOptions(options),
        state,
        defaultOptions: client2.getQueryDefaults(queryKey),
      });
      this.add(query);
    }
    return query;
  }
  add(query) {
    if (!this.#queries.has(query.queryHash)) {
      this.#queries.set(query.queryHash, query);
      this.notify({
        type: 'added',
        query,
      });
    }
  }
  remove(query) {
    const queryInMap = this.#queries.get(query.queryHash);
    if (queryInMap) {
      query.destroy();
      if (queryInMap === query) {
        this.#queries.delete(query.queryHash);
      }
      this.notify({ type: 'removed', query });
    }
  }
  clear() {
    notifyManager.batch(() => {
      this.getAll().forEach((query) => {
        this.remove(query);
      });
    });
  }
  get(queryHash) {
    return this.#queries.get(queryHash);
  }
  getAll() {
    return [...this.#queries.values()];
  }
  find(filters) {
    const defaultedFilters = { exact: true, ...filters };
    return this.getAll().find((query) => matchQuery(defaultedFilters, query));
  }
  findAll(filters = {}) {
    const queries = this.getAll();
    return Object.keys(filters).length > 0
      ? queries.filter((query) => matchQuery(filters, query))
      : queries;
  }
  notify(event) {
    notifyManager.batch(() => {
      this.listeners.forEach((listener) => {
        listener(event);
      });
    });
  }
  onFocus() {
    notifyManager.batch(() => {
      this.getAll().forEach((query) => {
        query.onFocus();
      });
    });
  }
  onOnline() {
    notifyManager.batch(() => {
      this.getAll().forEach((query) => {
        query.onOnline();
      });
    });
  }
};
var Mutation = class extends Removable {
  #observers;
  #mutationCache;
  #retryer;
  constructor(config) {
    super();
    this.mutationId = config.mutationId;
    this.#mutationCache = config.mutationCache;
    this.#observers = [];
    this.state = config.state || getDefaultState();
    this.setOptions(config.options);
    this.scheduleGc();
  }
  setOptions(options) {
    this.options = options;
    this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(observer) {
    if (!this.#observers.includes(observer)) {
      this.#observers.push(observer);
      this.clearGcTimeout();
      this.#mutationCache.notify({
        type: 'observerAdded',
        mutation: this,
        observer,
      });
    }
  }
  removeObserver(observer) {
    this.#observers = this.#observers.filter((x) => x !== observer);
    this.scheduleGc();
    this.#mutationCache.notify({
      type: 'observerRemoved',
      mutation: this,
      observer,
    });
  }
  optionalRemove() {
    if (!this.#observers.length) {
      if (this.state.status === 'pending') {
        this.scheduleGc();
      } else {
        this.#mutationCache.remove(this);
      }
    }
  }
  continue() {
    return (
      this.#retryer?.continue() ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
      this.execute(this.state.variables)
    );
  }
  async execute(variables) {
    this.#retryer = createRetryer({
      fn: () => {
        if (!this.options.mutationFn) {
          return Promise.reject(new Error('No mutationFn found'));
        }
        return this.options.mutationFn(variables);
      },
      onFail: (failureCount, error) => {
        this.#dispatch({ type: 'failed', failureCount, error });
      },
      onPause: () => {
        this.#dispatch({ type: 'pause' });
      },
      onContinue: () => {
        this.#dispatch({ type: 'continue' });
      },
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => this.#mutationCache.canRun(this),
    });
    const restored = this.state.status === 'pending';
    const isPaused = !this.#retryer.canStart();
    try {
      if (!restored) {
        this.#dispatch({ type: 'pending', variables, isPaused });
        await this.#mutationCache.config.onMutate?.(variables, this);
        const context = await this.options.onMutate?.(variables);
        if (context !== this.state.context) {
          this.#dispatch({
            type: 'pending',
            context,
            variables,
            isPaused,
          });
        }
      }
      const data = await this.#retryer.start();
      await this.#mutationCache.config.onSuccess?.(
        data,
        variables,
        this.state.context,
        this
      );
      await this.options.onSuccess?.(data, variables, this.state.context);
      await this.#mutationCache.config.onSettled?.(
        data,
        null,
        this.state.variables,
        this.state.context,
        this
      );
      await this.options.onSettled?.(data, null, variables, this.state.context);
      this.#dispatch({ type: 'success', data });
      return data;
    } catch (error) {
      try {
        await this.#mutationCache.config.onError?.(
          error,
          variables,
          this.state.context,
          this
        );
        await this.options.onError?.(error, variables, this.state.context);
        await this.#mutationCache.config.onSettled?.(
          void 0,
          error,
          this.state.variables,
          this.state.context,
          this
        );
        await this.options.onSettled?.(
          void 0,
          error,
          variables,
          this.state.context
        );
        throw error;
      } finally {
        this.#dispatch({ type: 'error', error });
      }
    } finally {
      this.#mutationCache.runNext(this);
    }
  }
  #dispatch(action) {
    const reducer = (state) => {
      switch (action.type) {
        case 'failed':
          return {
            ...state,
            failureCount: action.failureCount,
            failureReason: action.error,
          };
        case 'pause':
          return {
            ...state,
            isPaused: true,
          };
        case 'continue':
          return {
            ...state,
            isPaused: false,
          };
        case 'pending':
          return {
            ...state,
            context: action.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: action.isPaused,
            status: 'pending',
            variables: action.variables,
            submittedAt: Date.now(),
          };
        case 'success':
          return {
            ...state,
            data: action.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: 'success',
            isPaused: false,
          };
        case 'error':
          return {
            ...state,
            data: void 0,
            error: action.error,
            failureCount: state.failureCount + 1,
            failureReason: action.error,
            isPaused: false,
            status: 'error',
          };
      }
    };
    this.state = reducer(this.state);
    notifyManager.batch(() => {
      this.#observers.forEach((observer) => {
        observer.onMutationUpdate(action);
      });
      this.#mutationCache.notify({
        mutation: this,
        type: 'updated',
        action,
      });
    });
  }
};
function getDefaultState() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: false,
    status: 'idle',
    variables: void 0,
    submittedAt: 0,
  };
}
var MutationCache = class extends Subscribable {
  constructor(config = {}) {
    super();
    this.config = config;
    this.#mutations = /* @__PURE__ */ new Set();
    this.#scopes = /* @__PURE__ */ new Map();
    this.#mutationId = 0;
  }
  #mutations;
  #scopes;
  #mutationId;
  build(client2, options, state) {
    const mutation = new Mutation({
      mutationCache: this,
      mutationId: ++this.#mutationId,
      options: client2.defaultMutationOptions(options),
      state,
    });
    this.add(mutation);
    return mutation;
  }
  add(mutation) {
    this.#mutations.add(mutation);
    const scope = scopeFor(mutation);
    if (typeof scope === 'string') {
      const scopedMutations = this.#scopes.get(scope);
      if (scopedMutations) {
        scopedMutations.push(mutation);
      } else {
        this.#scopes.set(scope, [mutation]);
      }
    }
    this.notify({ type: 'added', mutation });
  }
  remove(mutation) {
    if (this.#mutations.delete(mutation)) {
      const scope = scopeFor(mutation);
      if (typeof scope === 'string') {
        const scopedMutations = this.#scopes.get(scope);
        if (scopedMutations) {
          if (scopedMutations.length > 1) {
            const index = scopedMutations.indexOf(mutation);
            if (index !== -1) {
              scopedMutations.splice(index, 1);
            }
          } else if (scopedMutations[0] === mutation) {
            this.#scopes.delete(scope);
          }
        }
      }
    }
    this.notify({ type: 'removed', mutation });
  }
  canRun(mutation) {
    const scope = scopeFor(mutation);
    if (typeof scope === 'string') {
      const mutationsWithSameScope = this.#scopes.get(scope);
      const firstPendingMutation = mutationsWithSameScope?.find(
        (m) => m.state.status === 'pending'
      );
      return !firstPendingMutation || firstPendingMutation === mutation;
    } else {
      return true;
    }
  }
  runNext(mutation) {
    const scope = scopeFor(mutation);
    if (typeof scope === 'string') {
      const foundMutation = this.#scopes
        .get(scope)
        ?.find((m) => m !== mutation && m.state.isPaused);
      return foundMutation?.continue() ?? Promise.resolve();
    } else {
      return Promise.resolve();
    }
  }
  clear() {
    notifyManager.batch(() => {
      this.#mutations.forEach((mutation) => {
        this.notify({ type: 'removed', mutation });
      });
      this.#mutations.clear();
      this.#scopes.clear();
    });
  }
  getAll() {
    return Array.from(this.#mutations);
  }
  find(filters) {
    const defaultedFilters = { exact: true, ...filters };
    return this.getAll().find((mutation) =>
      matchMutation(defaultedFilters, mutation)
    );
  }
  findAll(filters = {}) {
    return this.getAll().filter((mutation) => matchMutation(filters, mutation));
  }
  notify(event) {
    notifyManager.batch(() => {
      this.listeners.forEach((listener) => {
        listener(event);
      });
    });
  }
  resumePausedMutations() {
    const pausedMutations = this.getAll().filter((x) => x.state.isPaused);
    return notifyManager.batch(() =>
      Promise.all(
        pausedMutations.map((mutation) => mutation.continue().catch(noop$2))
      )
    );
  }
};
function scopeFor(mutation) {
  return mutation.options.scope?.id;
}
function infiniteQueryBehavior(pages) {
  return {
    onFetch: (context, query) => {
      const options = context.options;
      const direction = context.fetchOptions?.meta?.fetchMore?.direction;
      const oldPages = context.state.data?.pages || [];
      const oldPageParams = context.state.data?.pageParams || [];
      let result = { pages: [], pageParams: [] };
      let currentPage = 0;
      const fetchFn = async () => {
        let cancelled = false;
        const addSignalProperty = (object) => {
          Object.defineProperty(object, 'signal', {
            enumerable: true,
            get: () => {
              if (context.signal.aborted) {
                cancelled = true;
              } else {
                context.signal.addEventListener('abort', () => {
                  cancelled = true;
                });
              }
              return context.signal;
            },
          });
        };
        const queryFn = ensureQueryFn(context.options, context.fetchOptions);
        const fetchPage = async (data, param, previous) => {
          if (cancelled) {
            return Promise.reject();
          }
          if (param == null && data.pages.length) {
            return Promise.resolve(data);
          }
          const queryFnContext = {
            queryKey: context.queryKey,
            pageParam: param,
            direction: previous ? 'backward' : 'forward',
            meta: context.options.meta,
          };
          addSignalProperty(queryFnContext);
          const page = await queryFn(queryFnContext);
          const { maxPages } = context.options;
          const addTo = previous ? addToStart : addToEnd;
          return {
            pages: addTo(data.pages, page, maxPages),
            pageParams: addTo(data.pageParams, param, maxPages),
          };
        };
        if (direction && oldPages.length) {
          const previous = direction === 'backward';
          const pageParamFn = previous
            ? getPreviousPageParam
            : getNextPageParam;
          const oldData = {
            pages: oldPages,
            pageParams: oldPageParams,
          };
          const param = pageParamFn(options, oldData);
          result = await fetchPage(oldData, param, previous);
        } else {
          const remainingPages = pages ?? oldPages.length;
          do {
            const param =
              currentPage === 0
                ? (oldPageParams[0] ?? options.initialPageParam)
                : getNextPageParam(options, result);
            if (currentPage > 0 && param == null) {
              break;
            }
            result = await fetchPage(result, param);
            currentPage++;
          } while (currentPage < remainingPages);
        }
        return result;
      };
      if (context.options.persister) {
        context.fetchFn = () => {
          return context.options.persister?.(
            fetchFn,
            {
              queryKey: context.queryKey,
              meta: context.options.meta,
              signal: context.signal,
            },
            query
          );
        };
      } else {
        context.fetchFn = fetchFn;
      }
    },
  };
}
function getNextPageParam(options, { pages, pageParams }) {
  const lastIndex = pages.length - 1;
  return pages.length > 0
    ? options.getNextPageParam(
        pages[lastIndex],
        pages,
        pageParams[lastIndex],
        pageParams
      )
    : void 0;
}
function getPreviousPageParam(options, { pages, pageParams }) {
  return pages.length > 0
    ? options.getPreviousPageParam?.(pages[0], pages, pageParams[0], pageParams)
    : void 0;
}
var QueryClient = class {
  #queryCache;
  #mutationCache;
  #defaultOptions;
  #queryDefaults;
  #mutationDefaults;
  #mountCount;
  #unsubscribeFocus;
  #unsubscribeOnline;
  constructor(config = {}) {
    this.#queryCache = config.queryCache || new QueryCache();
    this.#mutationCache = config.mutationCache || new MutationCache();
    this.#defaultOptions = config.defaultOptions || {};
    this.#queryDefaults = /* @__PURE__ */ new Map();
    this.#mutationDefaults = /* @__PURE__ */ new Map();
    this.#mountCount = 0;
  }
  mount() {
    this.#mountCount++;
    if (this.#mountCount !== 1) return;
    this.#unsubscribeFocus = focusManager.subscribe(async (focused) => {
      if (focused) {
        await this.resumePausedMutations();
        this.#queryCache.onFocus();
      }
    });
    this.#unsubscribeOnline = onlineManager.subscribe(async (online) => {
      if (online) {
        await this.resumePausedMutations();
        this.#queryCache.onOnline();
      }
    });
  }
  unmount() {
    this.#mountCount--;
    if (this.#mountCount !== 0) return;
    this.#unsubscribeFocus?.();
    this.#unsubscribeFocus = void 0;
    this.#unsubscribeOnline?.();
    this.#unsubscribeOnline = void 0;
  }
  isFetching(filters) {
    return this.#queryCache.findAll({ ...filters, fetchStatus: 'fetching' })
      .length;
  }
  isMutating(filters) {
    return this.#mutationCache.findAll({ ...filters, status: 'pending' })
      .length;
  }
  getQueryData(queryKey) {
    const options = this.defaultQueryOptions({ queryKey });
    return this.#queryCache.get(options.queryHash)?.state.data;
  }
  ensureQueryData(options) {
    const defaultedOptions = this.defaultQueryOptions(options);
    const query = this.#queryCache.build(this, defaultedOptions);
    const cachedData = query.state.data;
    if (cachedData === void 0) {
      return this.fetchQuery(options);
    }
    if (
      options.revalidateIfStale &&
      query.isStaleByTime(resolveStaleTime(defaultedOptions.staleTime, query))
    ) {
      void this.prefetchQuery(defaultedOptions);
    }
    return Promise.resolve(cachedData);
  }
  getQueriesData(filters) {
    return this.#queryCache.findAll(filters).map(({ queryKey, state }) => {
      const data = state.data;
      return [queryKey, data];
    });
  }
  setQueryData(queryKey, updater, options) {
    const defaultedOptions = this.defaultQueryOptions({ queryKey });
    const query = this.#queryCache.get(defaultedOptions.queryHash);
    const prevData = query?.state.data;
    const data = functionalUpdate(updater, prevData);
    if (data === void 0) {
      return void 0;
    }
    return this.#queryCache
      .build(this, defaultedOptions)
      .setData(data, { ...options, manual: true });
  }
  setQueriesData(filters, updater, options) {
    return notifyManager.batch(() =>
      this.#queryCache
        .findAll(filters)
        .map(({ queryKey }) => [
          queryKey,
          this.setQueryData(queryKey, updater, options),
        ])
    );
  }
  getQueryState(queryKey) {
    const options = this.defaultQueryOptions({ queryKey });
    return this.#queryCache.get(options.queryHash)?.state;
  }
  removeQueries(filters) {
    const queryCache = this.#queryCache;
    notifyManager.batch(() => {
      queryCache.findAll(filters).forEach((query) => {
        queryCache.remove(query);
      });
    });
  }
  resetQueries(filters, options) {
    const queryCache = this.#queryCache;
    const refetchFilters = {
      type: 'active',
      ...filters,
    };
    return notifyManager.batch(() => {
      queryCache.findAll(filters).forEach((query) => {
        query.reset();
      });
      return this.refetchQueries(refetchFilters, options);
    });
  }
  cancelQueries(filters, cancelOptions = {}) {
    const defaultedCancelOptions = { revert: true, ...cancelOptions };
    const promises = notifyManager.batch(() =>
      this.#queryCache
        .findAll(filters)
        .map((query) => query.cancel(defaultedCancelOptions))
    );
    return Promise.all(promises).then(noop$2).catch(noop$2);
  }
  invalidateQueries(filters, options = {}) {
    return notifyManager.batch(() => {
      this.#queryCache.findAll(filters).forEach((query) => {
        query.invalidate();
      });
      if (filters?.refetchType === 'none') {
        return Promise.resolve();
      }
      const refetchFilters = {
        ...filters,
        type: filters?.refetchType ?? filters?.type ?? 'active',
      };
      return this.refetchQueries(refetchFilters, options);
    });
  }
  refetchQueries(filters, options = {}) {
    const fetchOptions = {
      ...options,
      cancelRefetch: options.cancelRefetch ?? true,
    };
    const promises = notifyManager.batch(() =>
      this.#queryCache
        .findAll(filters)
        .filter((query) => !query.isDisabled())
        .map((query) => {
          let promise = query.fetch(void 0, fetchOptions);
          if (!fetchOptions.throwOnError) {
            promise = promise.catch(noop$2);
          }
          return query.state.fetchStatus === 'paused'
            ? Promise.resolve()
            : promise;
        })
    );
    return Promise.all(promises).then(noop$2);
  }
  fetchQuery(options) {
    const defaultedOptions = this.defaultQueryOptions(options);
    if (defaultedOptions.retry === void 0) {
      defaultedOptions.retry = false;
    }
    const query = this.#queryCache.build(this, defaultedOptions);
    return query.isStaleByTime(
      resolveStaleTime(defaultedOptions.staleTime, query)
    )
      ? query.fetch(defaultedOptions)
      : Promise.resolve(query.state.data);
  }
  prefetchQuery(options) {
    return this.fetchQuery(options).then(noop$2).catch(noop$2);
  }
  fetchInfiniteQuery(options) {
    options.behavior = infiniteQueryBehavior(options.pages);
    return this.fetchQuery(options);
  }
  prefetchInfiniteQuery(options) {
    return this.fetchInfiniteQuery(options).then(noop$2).catch(noop$2);
  }
  ensureInfiniteQueryData(options) {
    options.behavior = infiniteQueryBehavior(options.pages);
    return this.ensureQueryData(options);
  }
  resumePausedMutations() {
    if (onlineManager.isOnline()) {
      return this.#mutationCache.resumePausedMutations();
    }
    return Promise.resolve();
  }
  getQueryCache() {
    return this.#queryCache;
  }
  getMutationCache() {
    return this.#mutationCache;
  }
  getDefaultOptions() {
    return this.#defaultOptions;
  }
  setDefaultOptions(options) {
    this.#defaultOptions = options;
  }
  setQueryDefaults(queryKey, options) {
    this.#queryDefaults.set(hashKey(queryKey), {
      queryKey,
      defaultOptions: options,
    });
  }
  getQueryDefaults(queryKey) {
    const defaults2 = [...this.#queryDefaults.values()];
    const result = {};
    defaults2.forEach((queryDefault) => {
      if (partialMatchKey(queryKey, queryDefault.queryKey)) {
        Object.assign(result, queryDefault.defaultOptions);
      }
    });
    return result;
  }
  setMutationDefaults(mutationKey, options) {
    this.#mutationDefaults.set(hashKey(mutationKey), {
      mutationKey,
      defaultOptions: options,
    });
  }
  getMutationDefaults(mutationKey) {
    const defaults2 = [...this.#mutationDefaults.values()];
    let result = {};
    defaults2.forEach((queryDefault) => {
      if (partialMatchKey(mutationKey, queryDefault.mutationKey)) {
        result = { ...result, ...queryDefault.defaultOptions };
      }
    });
    return result;
  }
  defaultQueryOptions(options) {
    if (options._defaulted) {
      return options;
    }
    const defaultedOptions = {
      ...this.#defaultOptions.queries,
      ...this.getQueryDefaults(options.queryKey),
      ...options,
      _defaulted: true,
    };
    if (!defaultedOptions.queryHash) {
      defaultedOptions.queryHash = hashQueryKeyByOptions(
        defaultedOptions.queryKey,
        defaultedOptions
      );
    }
    if (defaultedOptions.refetchOnReconnect === void 0) {
      defaultedOptions.refetchOnReconnect =
        defaultedOptions.networkMode !== 'always';
    }
    if (defaultedOptions.throwOnError === void 0) {
      defaultedOptions.throwOnError = !!defaultedOptions.suspense;
    }
    if (!defaultedOptions.networkMode && defaultedOptions.persister) {
      defaultedOptions.networkMode = 'offlineFirst';
    }
    if (defaultedOptions.queryFn === skipToken) {
      defaultedOptions.enabled = false;
    }
    return defaultedOptions;
  }
  defaultMutationOptions(options) {
    if (options?._defaulted) {
      return options;
    }
    return {
      ...this.#defaultOptions.mutations,
      ...(options?.mutationKey &&
        this.getMutationDefaults(options.mutationKey)),
      ...options,
      _defaulted: true,
    };
  }
  clear() {
    this.#queryCache.clear();
    this.#mutationCache.clear();
  }
};
var MutationObserver = class extends Subscribable {
  #client;
  #currentResult = void 0;
  #currentMutation;
  #mutateOptions;
  constructor(client2, options) {
    super();
    this.#client = client2;
    this.setOptions(options);
    this.bindMethods();
    this.#updateResult();
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this);
    this.reset = this.reset.bind(this);
  }
  setOptions(options) {
    const prevOptions = this.options;
    this.options = this.#client.defaultMutationOptions(options);
    if (!shallowEqualObjects(this.options, prevOptions)) {
      this.#client.getMutationCache().notify({
        type: 'observerOptionsUpdated',
        mutation: this.#currentMutation,
        observer: this,
      });
    }
    if (
      prevOptions?.mutationKey &&
      this.options.mutationKey &&
      hashKey(prevOptions.mutationKey) !== hashKey(this.options.mutationKey)
    ) {
      this.reset();
    } else if (this.#currentMutation?.state.status === 'pending') {
      this.#currentMutation.setOptions(this.options);
    }
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      this.#currentMutation?.removeObserver(this);
    }
  }
  onMutationUpdate(action) {
    this.#updateResult();
    this.#notify(action);
  }
  getCurrentResult() {
    return this.#currentResult;
  }
  reset() {
    this.#currentMutation?.removeObserver(this);
    this.#currentMutation = void 0;
    this.#updateResult();
    this.#notify();
  }
  mutate(variables, options) {
    this.#mutateOptions = options;
    this.#currentMutation?.removeObserver(this);
    this.#currentMutation = this.#client
      .getMutationCache()
      .build(this.#client, this.options);
    this.#currentMutation.addObserver(this);
    return this.#currentMutation.execute(variables);
  }
  #updateResult() {
    const state = this.#currentMutation?.state ?? getDefaultState();
    this.#currentResult = {
      ...state,
      isPending: state.status === 'pending',
      isSuccess: state.status === 'success',
      isError: state.status === 'error',
      isIdle: state.status === 'idle',
      mutate: this.mutate,
      reset: this.reset,
    };
  }
  #notify(action) {
    notifyManager.batch(() => {
      if (this.#mutateOptions && this.hasListeners()) {
        const variables = this.#currentResult.variables;
        const context = this.#currentResult.context;
        if (action?.type === 'success') {
          this.#mutateOptions.onSuccess?.(action.data, variables, context);
          this.#mutateOptions.onSettled?.(
            action.data,
            null,
            variables,
            context
          );
        } else if (action?.type === 'error') {
          this.#mutateOptions.onError?.(action.error, variables, context);
          this.#mutateOptions.onSettled?.(
            void 0,
            action.error,
            variables,
            context
          );
        }
      }
      this.listeners.forEach((listener) => {
        listener(this.#currentResult);
      });
    });
  }
};
var QueryClientContext = reactExports.createContext(void 0);
var useQueryClient = (queryClient) => {
  const client2 = reactExports.useContext(QueryClientContext);
  if (!client2) {
    throw new Error('No QueryClient set, use QueryClientProvider to set one');
  }
  return client2;
};
var QueryClientProvider = ({ client: client2, children }) => {
  reactExports.useEffect(() => {
    client2.mount();
    return () => {
      client2.unmount();
    };
  }, [client2]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientContext.Provider, {
    value: client2,
    children,
  });
};
function shouldThrowError(throwError, params) {
  if (typeof throwError === 'function') {
    return throwError(...params);
  }
  return !!throwError;
}
function noop$1() {}
function queryOptions(options) {
  return options;
}
function useMutation(options, queryClient) {
  const client2 = useQueryClient();
  const [observer] = reactExports.useState(
    () => new MutationObserver(client2, options)
  );
  reactExports.useEffect(() => {
    observer.setOptions(options);
  }, [observer, options]);
  const result = reactExports.useSyncExternalStore(
    reactExports.useCallback(
      (onStoreChange) =>
        observer.subscribe(notifyManager.batchCalls(onStoreChange)),
      [observer]
    ),
    () => observer.getCurrentResult(),
    () => observer.getCurrentResult()
  );
  const mutate = reactExports.useCallback(
    (variables, mutateOptions) => {
      observer.mutate(variables, mutateOptions).catch(noop$1);
    },
    [observer]
  );
  if (
    result.error &&
    shouldThrowError(observer.options.throwOnError, [result.error])
  ) {
    throw result.error;
  }
  return { ...result, mutate, mutateAsync: result.mutate };
}
function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}
const { toString } = Object.prototype;
const { getPrototypeOf } = Object;
const kindOf = /* @__PURE__ */ ((cache) => (thing) => {
  const str = toString.call(thing);
  return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null));
const kindOfTest = (type) => {
  type = type.toLowerCase();
  return (thing) => kindOf(thing) === type;
};
const typeOfTest = (type) => (thing) => typeof thing === type;
const { isArray } = Array;
const isUndefined = typeOfTest('undefined');
function isBuffer(val) {
  return (
    val !== null &&
    !isUndefined(val) &&
    val.constructor !== null &&
    !isUndefined(val.constructor) &&
    isFunction(val.constructor.isBuffer) &&
    val.constructor.isBuffer(val)
  );
}
const isArrayBuffer = kindOfTest('ArrayBuffer');
function isArrayBufferView(val) {
  let result;
  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && isArrayBuffer(val.buffer);
  }
  return result;
}
const isString = typeOfTest('string');
const isFunction = typeOfTest('function');
const isNumber = typeOfTest('number');
const isObject = (thing) => thing !== null && typeof thing === 'object';
const isBoolean = (thing) => thing === true || thing === false;
const isPlainObject = (val) => {
  if (kindOf(val) !== 'object') {
    return false;
  }
  const prototype2 = getPrototypeOf(val);
  return (
    (prototype2 === null ||
      prototype2 === Object.prototype ||
      Object.getPrototypeOf(prototype2) === null) &&
    !(Symbol.toStringTag in val) &&
    !(Symbol.iterator in val)
  );
};
const isDate = kindOfTest('Date');
const isFile = kindOfTest('File');
const isBlob = kindOfTest('Blob');
const isFileList = kindOfTest('FileList');
const isStream = (val) => isObject(val) && isFunction(val.pipe);
const isFormData = (thing) => {
  let kind;
  return (
    thing &&
    ((typeof FormData === 'function' && thing instanceof FormData) ||
      (isFunction(thing.append) &&
        ((kind = kindOf(thing)) === 'formdata' || // detect form-data instance
          (kind === 'object' &&
            isFunction(thing.toString) &&
            thing.toString() === '[object FormData]'))))
  );
};
const isURLSearchParams = kindOfTest('URLSearchParams');
const [isReadableStream, isRequest, isResponse, isHeaders] = [
  'ReadableStream',
  'Request',
  'Response',
  'Headers',
].map(kindOfTest);
const trim = (str) =>
  str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
function forEach(obj, fn, { allOwnKeys = false } = {}) {
  if (obj === null || typeof obj === 'undefined') {
    return;
  }
  let i;
  let l;
  if (typeof obj !== 'object') {
    obj = [obj];
  }
  if (isArray(obj)) {
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    const keys = allOwnKeys
      ? Object.getOwnPropertyNames(obj)
      : Object.keys(obj);
    const len = keys.length;
    let key;
    for (i = 0; i < len; i++) {
      key = keys[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}
function findKey(obj, key) {
  key = key.toLowerCase();
  const keys = Object.keys(obj);
  let i = keys.length;
  let _key;
  while (i-- > 0) {
    _key = keys[i];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}
const _global = (() => {
  if (typeof globalThis !== 'undefined') return globalThis;
  return typeof self !== 'undefined'
    ? self
    : typeof window !== 'undefined'
      ? window
      : global;
})();
const isContextDefined = (context) =>
  !isUndefined(context) && context !== _global;
function merge() {
  const { caseless } = (isContextDefined(this) && this) || {};
  const result = {};
  const assignValue = (val, key) => {
    const targetKey = (caseless && findKey(result, key)) || key;
    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
      result[targetKey] = merge(result[targetKey], val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray(val)) {
      result[targetKey] = val.slice();
    } else {
      result[targetKey] = val;
    }
  };
  for (let i = 0, l = arguments.length; i < l; i++) {
    arguments[i] && forEach(arguments[i], assignValue);
  }
  return result;
}
const extend = (a, b, thisArg, { allOwnKeys } = {}) => {
  forEach(
    b,
    (val, key) => {
      if (thisArg && isFunction(val)) {
        a[key] = bind(val, thisArg);
      } else {
        a[key] = val;
      }
    },
    { allOwnKeys }
  );
  return a;
};
const stripBOM = (content) => {
  if (content.charCodeAt(0) === 65279) {
    content = content.slice(1);
  }
  return content;
};
const inherits = (constructor, superConstructor, props, descriptors2) => {
  constructor.prototype = Object.create(
    superConstructor.prototype,
    descriptors2
  );
  constructor.prototype.constructor = constructor;
  Object.defineProperty(constructor, 'super', {
    value: superConstructor.prototype,
  });
  props && Object.assign(constructor.prototype, props);
};
const toFlatObject = (sourceObj, destObj, filter2, propFilter) => {
  let props;
  let i;
  let prop;
  const merged = {};
  destObj = destObj || {};
  if (sourceObj == null) return destObj;
  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if (
        (!propFilter || propFilter(prop, sourceObj, destObj)) &&
        !merged[prop]
      ) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter2 !== false && getPrototypeOf(sourceObj);
  } while (
    sourceObj &&
    (!filter2 || filter2(sourceObj, destObj)) &&
    sourceObj !== Object.prototype
  );
  return destObj;
};
const endsWith = (str, searchString, position) => {
  str = String(str);
  if (position === void 0 || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
};
const toArray = (thing) => {
  if (!thing) return null;
  if (isArray(thing)) return thing;
  let i = thing.length;
  if (!isNumber(i)) return null;
  const arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
};
const isTypedArray = /* @__PURE__ */ ((TypedArray) => {
  return (thing) => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));
const forEachEntry = (obj, fn) => {
  const generator = obj && obj[Symbol.iterator];
  const iterator = generator.call(obj);
  let result;
  while ((result = iterator.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
};
const matchAll = (regExp, str) => {
  let matches;
  const arr = [];
  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }
  return arr;
};
const isHTMLForm = kindOfTest('HTMLFormElement');
const toCamelCase = (str) => {
  return str
    .toLowerCase()
    .replace(/[-_\s]([a-z\d])(\w*)/g, function replacer(m, p1, p2) {
      return p1.toUpperCase() + p2;
    });
};
const hasOwnProperty = (
  ({ hasOwnProperty: hasOwnProperty2 }) =>
  (obj, prop) =>
    hasOwnProperty2.call(obj, prop)
)(Object.prototype);
const isRegExp = kindOfTest('RegExp');
const reduceDescriptors = (obj, reducer) => {
  const descriptors2 = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};
  forEach(descriptors2, (descriptor, name) => {
    let ret;
    if ((ret = reducer(descriptor, name, obj)) !== false) {
      reducedDescriptors[name] = ret || descriptor;
    }
  });
  Object.defineProperties(obj, reducedDescriptors);
};
const freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    if (
      isFunction(obj) &&
      ['arguments', 'caller', 'callee'].indexOf(name) !== -1
    ) {
      return false;
    }
    const value = obj[name];
    if (!isFunction(value)) return;
    descriptor.enumerable = false;
    if ('writable' in descriptor) {
      descriptor.writable = false;
      return;
    }
    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error("Can not rewrite read-only method '" + name + "'");
      };
    }
  });
};
const toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};
  const define = (arr) => {
    arr.forEach((value) => {
      obj[value] = true;
    });
  };
  isArray(arrayOrString)
    ? define(arrayOrString)
    : define(String(arrayOrString).split(delimiter));
  return obj;
};
const noop = () => {};
const toFiniteNumber = (value, defaultValue) => {
  return value != null && Number.isFinite((value = +value))
    ? value
    : defaultValue;
};
const ALPHA = 'abcdefghijklmnopqrstuvwxyz';
const DIGIT = '0123456789';
const ALPHABET = {
  DIGIT,
  ALPHA,
  ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT,
};
const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
  let str = '';
  const { length } = alphabet;
  while (size--) {
    str += alphabet[(Math.random() * length) | 0];
  }
  return str;
};
function isSpecCompliantForm(thing) {
  return !!(
    thing &&
    isFunction(thing.append) &&
    thing[Symbol.toStringTag] === 'FormData' &&
    thing[Symbol.iterator]
  );
}
const toJSONObject = (obj) => {
  const stack = new Array(10);
  const visit = (source, i) => {
    if (isObject(source)) {
      if (stack.indexOf(source) >= 0) {
        return;
      }
      if (!('toJSON' in source)) {
        stack[i] = source;
        const target = isArray(source) ? [] : {};
        forEach(source, (value, key) => {
          const reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        });
        stack[i] = void 0;
        return target;
      }
    }
    return source;
  };
  return visit(obj, 0);
};
const isAsyncFn = kindOfTest('AsyncFunction');
const isThenable = (thing) =>
  thing &&
  (isObject(thing) || isFunction(thing)) &&
  isFunction(thing.then) &&
  isFunction(thing.catch);
const _setImmediate = ((setImmediateSupported, postMessageSupported) => {
  if (setImmediateSupported) {
    return setImmediate;
  }
  return postMessageSupported
    ? ((token, callbacks) => {
        _global.addEventListener(
          'message',
          ({ source, data }) => {
            if (source === _global && data === token) {
              callbacks.length && callbacks.shift()();
            }
          },
          false
        );
        return (cb) => {
          callbacks.push(cb);
          _global.postMessage(token, '*');
        };
      })(`axios@${Math.random()}`, [])
    : (cb) => setTimeout(cb);
})(typeof setImmediate === 'function', isFunction(_global.postMessage));
const asap =
  typeof queueMicrotask !== 'undefined'
    ? queueMicrotask.bind(_global)
    : (typeof process !== 'undefined' && process.nextTick) || _setImmediate;
const utils$1 = {
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isReadableStream,
  isRequest,
  isResponse,
  isHeaders,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isRegExp,
  isFunction,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty,
  hasOwnProp: hasOwnProperty,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  ALPHABET,
  generateString,
  isSpecCompliantForm,
  toJSONObject,
  isAsyncFn,
  isThenable,
  setImmediate: _setImmediate,
  asap,
};
function AxiosError(message, code, config, request, response) {
  Error.call(this);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = new Error().stack;
  }
  this.message = message;
  this.name = 'AxiosError';
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  if (response) {
    this.response = response;
    this.status = response.status ? response.status : null;
  }
}
utils$1.inherits(AxiosError, Error, {
  toJSON: function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: utils$1.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const prototype$1 = AxiosError.prototype;
const descriptors = {};
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
  // eslint-disable-next-line func-names
].forEach((code) => {
  descriptors[code] = { value: code };
});
Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype$1, 'isAxiosError', { value: true });
AxiosError.from = (error, code, config, request, response, customProps) => {
  const axiosError = Object.create(prototype$1);
  utils$1.toFlatObject(
    error,
    axiosError,
    function filter2(obj) {
      return obj !== Error.prototype;
    },
    (prop) => {
      return prop !== 'isAxiosError';
    }
  );
  AxiosError.call(axiosError, error.message, code, config, request, response);
  axiosError.cause = error;
  axiosError.name = error.name;
  customProps && Object.assign(axiosError, customProps);
  return axiosError;
};
const httpAdapter = null;
function isVisitable(thing) {
  return utils$1.isPlainObject(thing) || utils$1.isArray(thing);
}
function removeBrackets(key) {
  return utils$1.endsWith(key, '[]') ? key.slice(0, -2) : key;
}
function renderKey(path, key, dots) {
  if (!path) return key;
  return path
    .concat(key)
    .map(function each(token, i) {
      token = removeBrackets(token);
      return !dots && i ? '[' + token + ']' : token;
    })
    .join(dots ? '.' : '');
}
function isFlatArray(arr) {
  return utils$1.isArray(arr) && !arr.some(isVisitable);
}
const predicates = utils$1.toFlatObject(
  utils$1,
  {},
  null,
  function filter(prop) {
    return /^is[A-Z]/.test(prop);
  }
);
function toFormData(obj, formData, options) {
  if (!utils$1.isObject(obj)) {
    throw new TypeError('target must be an object');
  }
  formData = formData || new FormData();
  options = utils$1.toFlatObject(
    options,
    {
      metaTokens: true,
      dots: false,
      indexes: false,
    },
    false,
    function defined(option, source) {
      return !utils$1.isUndefined(source[option]);
    }
  );
  const metaTokens = options.metaTokens;
  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;
  const _Blob = options.Blob || (typeof Blob !== 'undefined' && Blob);
  const useBlob = _Blob && utils$1.isSpecCompliantForm(formData);
  if (!utils$1.isFunction(visitor)) {
    throw new TypeError('visitor must be a function');
  }
  function convertValue(value) {
    if (value === null) return '';
    if (utils$1.isDate(value)) {
      return value.toISOString();
    }
    if (!useBlob && utils$1.isBlob(value)) {
      throw new AxiosError('Blob is not supported. Use a Buffer instead.');
    }
    if (utils$1.isArrayBuffer(value) || utils$1.isTypedArray(value)) {
      return useBlob && typeof Blob === 'function'
        ? new Blob([value])
        : Buffer.from(value);
    }
    return value;
  }
  function defaultVisitor(value, key, path) {
    let arr = value;
    if (value && !path && typeof value === 'object') {
      if (utils$1.endsWith(key, '{}')) {
        key = metaTokens ? key : key.slice(0, -2);
        value = JSON.stringify(value);
      } else if (
        (utils$1.isArray(value) && isFlatArray(value)) ||
        ((utils$1.isFileList(value) || utils$1.endsWith(key, '[]')) &&
          (arr = utils$1.toArray(value)))
      ) {
        key = removeBrackets(key);
        arr.forEach(function each(el, index) {
          !(utils$1.isUndefined(el) || el === null) &&
            formData.append(
              // eslint-disable-next-line no-nested-ternary
              indexes === true
                ? renderKey([key], index, dots)
                : indexes === null
                  ? key
                  : key + '[]',
              convertValue(el)
            );
        });
        return false;
      }
    }
    if (isVisitable(value)) {
      return true;
    }
    formData.append(renderKey(path, key, dots), convertValue(value));
    return false;
  }
  const stack = [];
  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable,
  });
  function build(value, path) {
    if (utils$1.isUndefined(value)) return;
    if (stack.indexOf(value) !== -1) {
      throw Error('Circular reference detected in ' + path.join('.'));
    }
    stack.push(value);
    utils$1.forEach(value, function each(el, key) {
      const result =
        !(utils$1.isUndefined(el) || el === null) &&
        visitor.call(
          formData,
          el,
          utils$1.isString(key) ? key.trim() : key,
          path,
          exposedHelpers
        );
      if (result === true) {
        build(el, path ? path.concat(key) : [key]);
      }
    });
    stack.pop();
  }
  if (!utils$1.isObject(obj)) {
    throw new TypeError('data must be an object');
  }
  build(obj);
  return formData;
}
function encode$1(str) {
  const charMap = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\0',
  };
  return encodeURIComponent(str).replace(
    /[!'()~]|%20|%00/g,
    function replacer(match) {
      return charMap[match];
    }
  );
}
function AxiosURLSearchParams(params, options) {
  this._pairs = [];
  params && toFormData(params, this, options);
}
const prototype = AxiosURLSearchParams.prototype;
prototype.append = function append(name, value) {
  this._pairs.push([name, value]);
};
prototype.toString = function toString2(encoder) {
  const _encode = encoder
    ? function (value) {
        return encoder.call(this, value, encode$1);
      }
    : encode$1;
  return this._pairs
    .map(function each(pair) {
      return _encode(pair[0]) + '=' + _encode(pair[1]);
    }, '')
    .join('&');
};
function encode(val) {
  return encodeURIComponent(val)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']');
}
function buildURL(url, params, options) {
  if (!params) {
    return url;
  }
  const _encode = (options && options.encode) || encode;
  if (utils$1.isFunction(options)) {
    options = {
      serialize: options,
    };
  }
  const serializeFn = options && options.serialize;
  let serializedParams;
  if (serializeFn) {
    serializedParams = serializeFn(params, options);
  } else {
    serializedParams = utils$1.isURLSearchParams(params)
      ? params.toString()
      : new AxiosURLSearchParams(params, options).toString(_encode);
  }
  if (serializedParams) {
    const hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }
  return url;
}
class InterceptorManager {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null,
    });
    return this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(fn) {
    utils$1.forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  }
}
const transitionalDefaults = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false,
};
const URLSearchParams$1 =
  typeof URLSearchParams !== 'undefined'
    ? URLSearchParams
    : AxiosURLSearchParams;
const FormData$1 = typeof FormData !== 'undefined' ? FormData : null;
const Blob$1 = typeof Blob !== 'undefined' ? Blob : null;
const platform$1 = {
  isBrowser: true,
  classes: {
    URLSearchParams: URLSearchParams$1,
    FormData: FormData$1,
    Blob: Blob$1,
  },
  protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
};
const hasBrowserEnv =
  typeof window !== 'undefined' && typeof document !== 'undefined';
const _navigator = (typeof navigator === 'object' && navigator) || void 0;
const hasStandardBrowserEnv =
  hasBrowserEnv &&
  (!_navigator ||
    ['ReactNative', 'NativeScript', 'NS'].indexOf(_navigator.product) < 0);
const hasStandardBrowserWebWorkerEnv = (() => {
  return (
    typeof WorkerGlobalScope !== 'undefined' && // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts === 'function'
  );
})();
const origin = (hasBrowserEnv && window.location.href) || 'http://localhost';
const utils = /* @__PURE__ */ Object.freeze(
  /* @__PURE__ */ Object.defineProperty(
    {
      __proto__: null,
      hasBrowserEnv,
      hasStandardBrowserEnv,
      hasStandardBrowserWebWorkerEnv,
      navigator: _navigator,
      origin,
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
);
const platform = {
  ...utils,
  ...platform$1,
};
function toURLEncodedForm(data, options) {
  return toFormData(
    data,
    new platform.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (value, key, path, helpers) {
          if (platform.isNode && utils$1.isBuffer(value)) {
            this.append(key, value.toString('base64'));
            return false;
          }
          return helpers.defaultVisitor.apply(this, arguments);
        },
      },
      options
    )
  );
}
function parsePropPath(name) {
  return utils$1.matchAll(/\w+|\[(\w*)]/g, name).map((match) => {
    return match[0] === '[]' ? '' : match[1] || match[0];
  });
}
function arrayToObject(arr) {
  const obj = {};
  const keys = Object.keys(arr);
  let i;
  const len = keys.length;
  let key;
  for (i = 0; i < len; i++) {
    key = keys[i];
    obj[key] = arr[key];
  }
  return obj;
}
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    let name = path[index++];
    if (name === '__proto__') return true;
    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && utils$1.isArray(target) ? target.length : name;
    if (isLast) {
      if (utils$1.hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }
      return !isNumericKey;
    }
    if (!target[name] || !utils$1.isObject(target[name])) {
      target[name] = [];
    }
    const result = buildPath(path, value, target[name], index);
    if (result && utils$1.isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }
    return !isNumericKey;
  }
  if (utils$1.isFormData(formData) && utils$1.isFunction(formData.entries)) {
    const obj = {};
    utils$1.forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });
    return obj;
  }
  return null;
}
function stringifySafely(rawValue, parser, encoder) {
  if (utils$1.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils$1.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }
  return (0, JSON.stringify)(rawValue);
}
const defaults = {
  transitional: transitionalDefaults,
  adapter: ['xhr', 'http', 'fetch'],
  transformRequest: [
    function transformRequest(data, headers) {
      const contentType = headers.getContentType() || '';
      const hasJSONContentType = contentType.indexOf('application/json') > -1;
      const isObjectPayload = utils$1.isObject(data);
      if (isObjectPayload && utils$1.isHTMLForm(data)) {
        data = new FormData(data);
      }
      const isFormData2 = utils$1.isFormData(data);
      if (isFormData2) {
        return hasJSONContentType ? JSON.stringify(formDataToJSON(data)) : data;
      }
      if (
        utils$1.isArrayBuffer(data) ||
        utils$1.isBuffer(data) ||
        utils$1.isStream(data) ||
        utils$1.isFile(data) ||
        utils$1.isBlob(data) ||
        utils$1.isReadableStream(data)
      ) {
        return data;
      }
      if (utils$1.isArrayBufferView(data)) {
        return data.buffer;
      }
      if (utils$1.isURLSearchParams(data)) {
        headers.setContentType(
          'application/x-www-form-urlencoded;charset=utf-8',
          false
        );
        return data.toString();
      }
      let isFileList2;
      if (isObjectPayload) {
        if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
          return toURLEncodedForm(data, this.formSerializer).toString();
        }
        if (
          (isFileList2 = utils$1.isFileList(data)) ||
          contentType.indexOf('multipart/form-data') > -1
        ) {
          const _FormData = this.env && this.env.FormData;
          return toFormData(
            isFileList2 ? { 'files[]': data } : data,
            _FormData && new _FormData(),
            this.formSerializer
          );
        }
      }
      if (isObjectPayload || hasJSONContentType) {
        headers.setContentType('application/json', false);
        return stringifySafely(data);
      }
      return data;
    },
  ],
  transformResponse: [
    function transformResponse(data) {
      const transitional2 = this.transitional || defaults.transitional;
      const forcedJSONParsing =
        transitional2 && transitional2.forcedJSONParsing;
      const JSONRequested = this.responseType === 'json';
      if (utils$1.isResponse(data) || utils$1.isReadableStream(data)) {
        return data;
      }
      if (
        data &&
        utils$1.isString(data) &&
        ((forcedJSONParsing && !this.responseType) || JSONRequested)
      ) {
        const silentJSONParsing =
          transitional2 && transitional2.silentJSONParsing;
        const strictJSONParsing = !silentJSONParsing && JSONRequested;
        try {
          return JSON.parse(data);
        } catch (e) {
          if (strictJSONParsing) {
            if (e.name === 'SyntaxError') {
              throw AxiosError.from(
                e,
                AxiosError.ERR_BAD_RESPONSE,
                this,
                null,
                this.response
              );
            }
            throw e;
          }
        }
      }
      return data;
    },
  ],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: platform.classes.FormData,
    Blob: platform.classes.Blob,
  },
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },
  headers: {
    common: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': void 0,
    },
  },
};
utils$1.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (method) => {
  defaults.headers[method] = {};
});
const ignoreDuplicateOf = utils$1.toObjectSet([
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
]);
const parseHeaders = (rawHeaders) => {
  const parsed = {};
  let key;
  let val;
  let i;
  rawHeaders &&
    rawHeaders.split('\n').forEach(function parser(line) {
      i = line.indexOf(':');
      key = line.substring(0, i).trim().toLowerCase();
      val = line.substring(i + 1).trim();
      if (!key || (parsed[key] && ignoreDuplicateOf[key])) {
        return;
      }
      if (key === 'set-cookie') {
        if (parsed[key]) {
          parsed[key].push(val);
        } else {
          parsed[key] = [val];
        }
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    });
  return parsed;
};
const $internals = Symbol('internals');
function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}
function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }
  return utils$1.isArray(value) ? value.map(normalizeValue) : String(value);
}
function parseTokens(str) {
  const tokens = /* @__PURE__ */ Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;
  while ((match = tokensRE.exec(str))) {
    tokens[match[1]] = match[2];
  }
  return tokens;
}
const isValidHeaderName = (str) =>
  /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
function matchHeaderValue(context, value, header, filter2, isHeaderNameFilter) {
  if (utils$1.isFunction(filter2)) {
    return filter2.call(this, value, header);
  }
  if (isHeaderNameFilter) {
    value = header;
  }
  if (!utils$1.isString(value)) return;
  if (utils$1.isString(filter2)) {
    return value.indexOf(filter2) !== -1;
  }
  if (utils$1.isRegExp(filter2)) {
    return filter2.test(value);
  }
}
function formatHeader(header) {
  return header
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (w, char, str) => {
      return char.toUpperCase() + str;
    });
}
function buildAccessors(obj, header) {
  const accessorName = utils$1.toCamelCase(' ' + header);
  ['get', 'set', 'has'].forEach((methodName) => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function (arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true,
    });
  });
}
class AxiosHeaders {
  constructor(headers) {
    headers && this.set(headers);
  }
  set(header, valueOrRewrite, rewrite) {
    const self2 = this;
    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);
      if (!lHeader) {
        throw new Error('header name must be a non-empty string');
      }
      const key = utils$1.findKey(self2, lHeader);
      if (
        !key ||
        self2[key] === void 0 ||
        _rewrite === true ||
        (_rewrite === void 0 && self2[key] !== false)
      ) {
        self2[key || _header] = normalizeValue(_value);
      }
    }
    const setHeaders = (headers, _rewrite) =>
      utils$1.forEach(headers, (_value, _header) =>
        setHeader(_value, _header, _rewrite)
      );
    if (utils$1.isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite);
    } else if (
      utils$1.isString(header) &&
      (header = header.trim()) &&
      !isValidHeaderName(header)
    ) {
      setHeaders(parseHeaders(header), valueOrRewrite);
    } else if (utils$1.isHeaders(header)) {
      for (const [key, value] of header.entries()) {
        setHeader(value, key, rewrite);
      }
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }
    return this;
  }
  get(header, parser) {
    header = normalizeHeader(header);
    if (header) {
      const key = utils$1.findKey(this, header);
      if (key) {
        const value = this[key];
        if (!parser) {
          return value;
        }
        if (parser === true) {
          return parseTokens(value);
        }
        if (utils$1.isFunction(parser)) {
          return parser.call(this, value, key);
        }
        if (utils$1.isRegExp(parser)) {
          return parser.exec(value);
        }
        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }
  has(header, matcher) {
    header = normalizeHeader(header);
    if (header) {
      const key = utils$1.findKey(this, header);
      return !!(
        key &&
        this[key] !== void 0 &&
        (!matcher || matchHeaderValue(this, this[key], key, matcher))
      );
    }
    return false;
  }
  delete(header, matcher) {
    const self2 = this;
    let deleted = false;
    function deleteHeader(_header) {
      _header = normalizeHeader(_header);
      if (_header) {
        const key = utils$1.findKey(self2, _header);
        if (
          key &&
          (!matcher || matchHeaderValue(self2, self2[key], key, matcher))
        ) {
          delete self2[key];
          deleted = true;
        }
      }
    }
    if (utils$1.isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }
    return deleted;
  }
  clear(matcher) {
    const keys = Object.keys(this);
    let i = keys.length;
    let deleted = false;
    while (i--) {
      const key = keys[i];
      if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
        delete this[key];
        deleted = true;
      }
    }
    return deleted;
  }
  normalize(format) {
    const self2 = this;
    const headers = {};
    utils$1.forEach(this, (value, header) => {
      const key = utils$1.findKey(headers, header);
      if (key) {
        self2[key] = normalizeValue(value);
        delete self2[header];
        return;
      }
      const normalized = format ? formatHeader(header) : String(header).trim();
      if (normalized !== header) {
        delete self2[header];
      }
      self2[normalized] = normalizeValue(value);
      headers[normalized] = true;
    });
    return this;
  }
  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }
  toJSON(asStrings) {
    const obj = /* @__PURE__ */ Object.create(null);
    utils$1.forEach(this, (value, header) => {
      value != null &&
        value !== false &&
        (obj[header] =
          asStrings && utils$1.isArray(value) ? value.join(', ') : value);
    });
    return obj;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON())
      .map(([header, value]) => header + ': ' + value)
      .join('\n');
  }
  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }
  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }
  static concat(first, ...targets) {
    const computed = new this(first);
    targets.forEach((target) => computed.set(target));
    return computed;
  }
  static accessor(header) {
    const internals =
      (this[$internals] =
      this[$internals] =
        {
          accessors: {},
        });
    const accessors = internals.accessors;
    const prototype2 = this.prototype;
    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);
      if (!accessors[lHeader]) {
        buildAccessors(prototype2, _header);
        accessors[lHeader] = true;
      }
    }
    utils$1.isArray(header)
      ? header.forEach(defineAccessor)
      : defineAccessor(header);
    return this;
  }
}
AxiosHeaders.accessor([
  'Content-Type',
  'Content-Length',
  'Accept',
  'Accept-Encoding',
  'User-Agent',
  'Authorization',
]);
utils$1.reduceDescriptors(AxiosHeaders.prototype, ({ value }, key) => {
  let mapped = key[0].toUpperCase() + key.slice(1);
  return {
    get: () => value,
    set(headerValue) {
      this[mapped] = headerValue;
    },
  };
});
utils$1.freezeMethods(AxiosHeaders);
function transformData(fns, response) {
  const config = this || defaults;
  const context = response || config;
  const headers = AxiosHeaders.from(context.headers);
  let data = context.data;
  utils$1.forEach(fns, function transform(fn) {
    data = fn.call(
      config,
      data,
      headers.normalize(),
      response ? response.status : void 0
    );
  });
  headers.normalize();
  return data;
}
function isCancel(value) {
  return !!(value && value.__CANCEL__);
}
function CanceledError(message, config, request) {
  AxiosError.call(
    this,
    message == null ? 'canceled' : message,
    AxiosError.ERR_CANCELED,
    config,
    request
  );
  this.name = 'CanceledError';
}
utils$1.inherits(CanceledError, AxiosError, {
  __CANCEL__: true,
});
function settle(resolve, reject, response) {
  const validateStatus2 = response.config.validateStatus;
  if (
    !response.status ||
    !validateStatus2 ||
    validateStatus2(response.status)
  ) {
    resolve(response);
  } else {
    reject(
      new AxiosError(
        'Request failed with status code ' + response.status,
        [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][
          Math.floor(response.status / 100) - 4
        ],
        response.config,
        response.request,
        response
      )
    );
  }
}
function parseProtocol(url) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return (match && match[1]) || '';
}
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;
  min = min !== void 0 ? min : 1e3;
  return function push(chunkLength) {
    const now = Date.now();
    const startedAt = timestamps[tail];
    if (!firstSampleTS) {
      firstSampleTS = now;
    }
    bytes[head] = chunkLength;
    timestamps[head] = now;
    let i = tail;
    let bytesCount = 0;
    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }
    head = (head + 1) % samplesCount;
    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }
    if (now - firstSampleTS < min) {
      return;
    }
    const passed = startedAt && now - startedAt;
    return passed ? Math.round((bytesCount * 1e3) / passed) : void 0;
  };
}
function throttle(fn, freq) {
  let timestamp = 0;
  let threshold = 1e3 / freq;
  let lastArgs;
  let timer;
  const invoke = (args, now = Date.now()) => {
    timestamp = now;
    lastArgs = null;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    fn.apply(null, args);
  };
  const throttled = (...args) => {
    const now = Date.now();
    const passed = now - timestamp;
    if (passed >= threshold) {
      invoke(args, now);
    } else {
      lastArgs = args;
      if (!timer) {
        timer = setTimeout(() => {
          timer = null;
          invoke(lastArgs);
        }, threshold - passed);
      }
    }
  };
  const flush = () => lastArgs && invoke(lastArgs);
  return [throttled, flush];
}
const progressEventReducer = (listener, isDownloadStream, freq = 3) => {
  let bytesNotified = 0;
  const _speedometer = speedometer(50, 250);
  return throttle((e) => {
    const loaded = e.loaded;
    const total = e.lengthComputable ? e.total : void 0;
    const progressBytes = loaded - bytesNotified;
    const rate = _speedometer(progressBytes);
    const inRange = loaded <= total;
    bytesNotified = loaded;
    const data = {
      loaded,
      total,
      progress: total ? loaded / total : void 0,
      bytes: progressBytes,
      rate: rate ? rate : void 0,
      estimated: rate && total && inRange ? (total - loaded) / rate : void 0,
      event: e,
      lengthComputable: total != null,
      [isDownloadStream ? 'download' : 'upload']: true,
    };
    listener(data);
  }, freq);
};
const progressEventDecorator = (total, throttled) => {
  const lengthComputable = total != null;
  return [
    (loaded) =>
      throttled[0]({
        lengthComputable,
        total,
        loaded,
      }),
    throttled[1],
  ];
};
const asyncDecorator =
  (fn) =>
  (...args) =>
    utils$1.asap(() => fn(...args));
const isURLSameOrigin = platform.hasStandardBrowserEnv
  ? /* @__PURE__ */ ((origin2, isMSIE) => (url) => {
      url = new URL(url, platform.origin);
      return (
        origin2.protocol === url.protocol &&
        origin2.host === url.host &&
        (isMSIE || origin2.port === url.port)
      );
    })(
      new URL(platform.origin),
      platform.navigator && /(msie|trident)/i.test(platform.navigator.userAgent)
    )
  : () => true;
const cookies = platform.hasStandardBrowserEnv
  ? // Standard browser envs support document.cookie
    {
      write(name, value, expires, path, domain, secure) {
        const cookie = [name + '=' + encodeURIComponent(value)];
        utils$1.isNumber(expires) &&
          cookie.push('expires=' + new Date(expires).toGMTString());
        utils$1.isString(path) && cookie.push('path=' + path);
        utils$1.isString(domain) && cookie.push('domain=' + domain);
        secure === true && cookie.push('secure');
        document.cookie = cookie.join('; ');
      },
      read(name) {
        const match = document.cookie.match(
          new RegExp('(^|;\\s*)(' + name + ')=([^;]*)')
        );
        return match ? decodeURIComponent(match[3]) : null;
      },
      remove(name) {
        this.write(name, '', Date.now() - 864e5);
      },
    }
  : // Non-standard browser env (web workers, react-native) lack needed support.
    {
      write() {},
      read() {
        return null;
      },
      remove() {},
    };
function isAbsoluteURL(url) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}
function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/?\/$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
}
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}
const headersToObject = (thing) =>
  thing instanceof AxiosHeaders ? { ...thing } : thing;
function mergeConfig(config1, config2) {
  config2 = config2 || {};
  const config = {};
  function getMergedValue(target, source, prop, caseless) {
    if (utils$1.isPlainObject(target) && utils$1.isPlainObject(source)) {
      return utils$1.merge.call({ caseless }, target, source);
    } else if (utils$1.isPlainObject(source)) {
      return utils$1.merge({}, source);
    } else if (utils$1.isArray(source)) {
      return source.slice();
    }
    return source;
  }
  function mergeDeepProperties(a, b, prop, caseless) {
    if (!utils$1.isUndefined(b)) {
      return getMergedValue(a, b, prop, caseless);
    } else if (!utils$1.isUndefined(a)) {
      return getMergedValue(void 0, a, prop, caseless);
    }
  }
  function valueFromConfig2(a, b) {
    if (!utils$1.isUndefined(b)) {
      return getMergedValue(void 0, b);
    }
  }
  function defaultToConfig2(a, b) {
    if (!utils$1.isUndefined(b)) {
      return getMergedValue(void 0, b);
    } else if (!utils$1.isUndefined(a)) {
      return getMergedValue(void 0, a);
    }
  }
  function mergeDirectKeys(a, b, prop) {
    if (prop in config2) {
      return getMergedValue(a, b);
    } else if (prop in config1) {
      return getMergedValue(void 0, a);
    }
  }
  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    withXSRFToken: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b, prop) =>
      mergeDeepProperties(headersToObject(a), headersToObject(b), prop, true),
  };
  utils$1.forEach(
    Object.keys(Object.assign({}, config1, config2)),
    function computeConfigValue(prop) {
      const merge2 = mergeMap[prop] || mergeDeepProperties;
      const configValue = merge2(config1[prop], config2[prop], prop);
      (utils$1.isUndefined(configValue) && merge2 !== mergeDirectKeys) ||
        (config[prop] = configValue);
    }
  );
  return config;
}
const resolveConfig = (config) => {
  const newConfig = mergeConfig({}, config);
  let { data, withXSRFToken, xsrfHeaderName, xsrfCookieName, headers, auth } =
    newConfig;
  newConfig.headers = headers = AxiosHeaders.from(headers);
  newConfig.url = buildURL(
    buildFullPath(newConfig.baseURL, newConfig.url),
    config.params,
    config.paramsSerializer
  );
  if (auth) {
    headers.set(
      'Authorization',
      'Basic ' +
        btoa(
          (auth.username || '') +
            ':' +
            (auth.password ? unescape(encodeURIComponent(auth.password)) : '')
        )
    );
  }
  let contentType;
  if (utils$1.isFormData(data)) {
    if (
      platform.hasStandardBrowserEnv ||
      platform.hasStandardBrowserWebWorkerEnv
    ) {
      headers.setContentType(void 0);
    } else if ((contentType = headers.getContentType()) !== false) {
      const [type, ...tokens] = contentType
        ? contentType
            .split(';')
            .map((token) => token.trim())
            .filter(Boolean)
        : [];
      headers.setContentType(
        [type || 'multipart/form-data', ...tokens].join('; ')
      );
    }
  }
  if (platform.hasStandardBrowserEnv) {
    withXSRFToken &&
      utils$1.isFunction(withXSRFToken) &&
      (withXSRFToken = withXSRFToken(newConfig));
    if (
      withXSRFToken ||
      (withXSRFToken !== false && isURLSameOrigin(newConfig.url))
    ) {
      const xsrfValue =
        xsrfHeaderName && xsrfCookieName && cookies.read(xsrfCookieName);
      if (xsrfValue) {
        headers.set(xsrfHeaderName, xsrfValue);
      }
    }
  }
  return newConfig;
};
const isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';
const xhrAdapter =
  isXHRAdapterSupported &&
  function (config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
      const _config = resolveConfig(config);
      let requestData = _config.data;
      const requestHeaders = AxiosHeaders.from(_config.headers).normalize();
      let { responseType, onUploadProgress, onDownloadProgress } = _config;
      let onCanceled;
      let uploadThrottled, downloadThrottled;
      let flushUpload, flushDownload;
      function done() {
        flushUpload && flushUpload();
        flushDownload && flushDownload();
        _config.cancelToken && _config.cancelToken.unsubscribe(onCanceled);
        _config.signal &&
          _config.signal.removeEventListener('abort', onCanceled);
      }
      let request = new XMLHttpRequest();
      request.open(_config.method.toUpperCase(), _config.url, true);
      request.timeout = _config.timeout;
      function onloadend() {
        if (!request) {
          return;
        }
        const responseHeaders = AxiosHeaders.from(
          'getAllResponseHeaders' in request && request.getAllResponseHeaders()
        );
        const responseData =
          !responseType || responseType === 'text' || responseType === 'json'
            ? request.responseText
            : request.response;
        const response = {
          data: responseData,
          status: request.status,
          statusText: request.statusText,
          headers: responseHeaders,
          config,
          request,
        };
        settle(
          function _resolve(value) {
            resolve(value);
            done();
          },
          function _reject(err) {
            reject(err);
            done();
          },
          response
        );
        request = null;
      }
      if ('onloadend' in request) {
        request.onloadend = onloadend;
      } else {
        request.onreadystatechange = function handleLoad() {
          if (!request || request.readyState !== 4) {
            return;
          }
          if (
            request.status === 0 &&
            !(request.responseURL && request.responseURL.indexOf('file:') === 0)
          ) {
            return;
          }
          setTimeout(onloadend);
        };
      }
      request.onabort = function handleAbort() {
        if (!request) {
          return;
        }
        reject(
          new AxiosError(
            'Request aborted',
            AxiosError.ECONNABORTED,
            config,
            request
          )
        );
        request = null;
      };
      request.onerror = function handleError() {
        reject(
          new AxiosError(
            'Network Error',
            AxiosError.ERR_NETWORK,
            config,
            request
          )
        );
        request = null;
      };
      request.ontimeout = function handleTimeout() {
        let timeoutErrorMessage = _config.timeout
          ? 'timeout of ' + _config.timeout + 'ms exceeded'
          : 'timeout exceeded';
        const transitional2 = _config.transitional || transitionalDefaults;
        if (_config.timeoutErrorMessage) {
          timeoutErrorMessage = _config.timeoutErrorMessage;
        }
        reject(
          new AxiosError(
            timeoutErrorMessage,
            transitional2.clarifyTimeoutError
              ? AxiosError.ETIMEDOUT
              : AxiosError.ECONNABORTED,
            config,
            request
          )
        );
        request = null;
      };
      requestData === void 0 && requestHeaders.setContentType(null);
      if ('setRequestHeader' in request) {
        utils$1.forEach(
          requestHeaders.toJSON(),
          function setRequestHeader(val, key) {
            request.setRequestHeader(key, val);
          }
        );
      }
      if (!utils$1.isUndefined(_config.withCredentials)) {
        request.withCredentials = !!_config.withCredentials;
      }
      if (responseType && responseType !== 'json') {
        request.responseType = _config.responseType;
      }
      if (onDownloadProgress) {
        [downloadThrottled, flushDownload] = progressEventReducer(
          onDownloadProgress,
          true
        );
        request.addEventListener('progress', downloadThrottled);
      }
      if (onUploadProgress && request.upload) {
        [uploadThrottled, flushUpload] = progressEventReducer(onUploadProgress);
        request.upload.addEventListener('progress', uploadThrottled);
        request.upload.addEventListener('loadend', flushUpload);
      }
      if (_config.cancelToken || _config.signal) {
        onCanceled = (cancel) => {
          if (!request) {
            return;
          }
          reject(
            !cancel || cancel.type
              ? new CanceledError(null, config, request)
              : cancel
          );
          request.abort();
          request = null;
        };
        _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
        if (_config.signal) {
          _config.signal.aborted
            ? onCanceled()
            : _config.signal.addEventListener('abort', onCanceled);
        }
      }
      const protocol = parseProtocol(_config.url);
      if (protocol && platform.protocols.indexOf(protocol) === -1) {
        reject(
          new AxiosError(
            'Unsupported protocol ' + protocol + ':',
            AxiosError.ERR_BAD_REQUEST,
            config
          )
        );
        return;
      }
      request.send(requestData || null);
    });
  };
const composeSignals = (signals, timeout) => {
  const { length } = (signals = signals ? signals.filter(Boolean) : []);
  if (timeout || length) {
    let controller = new AbortController();
    let aborted;
    const onabort = function (reason) {
      if (!aborted) {
        aborted = true;
        unsubscribe();
        const err = reason instanceof Error ? reason : this.reason;
        controller.abort(
          err instanceof AxiosError
            ? err
            : new CanceledError(err instanceof Error ? err.message : err)
        );
      }
    };
    let timer =
      timeout &&
      setTimeout(() => {
        timer = null;
        onabort(
          new AxiosError(
            `timeout ${timeout} of ms exceeded`,
            AxiosError.ETIMEDOUT
          )
        );
      }, timeout);
    const unsubscribe = () => {
      if (signals) {
        timer && clearTimeout(timer);
        timer = null;
        signals.forEach((signal2) => {
          signal2.unsubscribe
            ? signal2.unsubscribe(onabort)
            : signal2.removeEventListener('abort', onabort);
        });
        signals = null;
      }
    };
    signals.forEach((signal2) => signal2.addEventListener('abort', onabort));
    const { signal } = controller;
    signal.unsubscribe = () => utils$1.asap(unsubscribe);
    return signal;
  }
};
const streamChunk = function* (chunk, chunkSize) {
  let len = chunk.byteLength;
  if (len < chunkSize) {
    yield chunk;
    return;
  }
  let pos = 0;
  let end;
  while (pos < len) {
    end = pos + chunkSize;
    yield chunk.slice(pos, end);
    pos = end;
  }
};
const readBytes = async function* (iterable, chunkSize) {
  for await (const chunk of readStream(iterable)) {
    yield* streamChunk(chunk, chunkSize);
  }
};
const readStream = async function* (stream) {
  if (stream[Symbol.asyncIterator]) {
    yield* stream;
    return;
  }
  const reader = stream.getReader();
  try {
    for (;;) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }
      yield value;
    }
  } finally {
    await reader.cancel();
  }
};
const trackStream = (stream, chunkSize, onProgress, onFinish) => {
  const iterator = readBytes(stream, chunkSize);
  let bytes = 0;
  let done;
  let _onFinish = (e) => {
    if (!done) {
      done = true;
      onFinish && onFinish(e);
    }
  };
  return new ReadableStream(
    {
      async pull(controller) {
        try {
          const { done: done2, value } = await iterator.next();
          if (done2) {
            _onFinish();
            controller.close();
            return;
          }
          let len = value.byteLength;
          if (onProgress) {
            let loadedBytes = (bytes += len);
            onProgress(loadedBytes);
          }
          controller.enqueue(new Uint8Array(value));
        } catch (err) {
          _onFinish(err);
          throw err;
        }
      },
      cancel(reason) {
        _onFinish(reason);
        return iterator.return();
      },
    },
    {
      highWaterMark: 2,
    }
  );
};
const isFetchSupported =
  typeof fetch === 'function' &&
  typeof Request === 'function' &&
  typeof Response === 'function';
const isReadableStreamSupported =
  isFetchSupported && typeof ReadableStream === 'function';
const encodeText =
  isFetchSupported &&
  (typeof TextEncoder === 'function'
    ? /* @__PURE__ */ (
        (encoder) => (str) =>
          encoder.encode(str)
      )(new TextEncoder())
    : async (str) => new Uint8Array(await new Response(str).arrayBuffer()));
const test = (fn, ...args) => {
  try {
    return !!fn(...args);
  } catch (e) {
    return false;
  }
};
const supportsRequestStream =
  isReadableStreamSupported &&
  test(() => {
    let duplexAccessed = false;
    const hasContentType = new Request(platform.origin, {
      body: new ReadableStream(),
      method: 'POST',
      get duplex() {
        duplexAccessed = true;
        return 'half';
      },
    }).headers.has('Content-Type');
    return duplexAccessed && !hasContentType;
  });
const DEFAULT_CHUNK_SIZE = 64 * 1024;
const supportsResponseStream =
  isReadableStreamSupported &&
  test(() => utils$1.isReadableStream(new Response('').body));
const resolvers = {
  stream: supportsResponseStream && ((res) => res.body),
};
isFetchSupported &&
  ((res) => {
    ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach((type) => {
      !resolvers[type] &&
        (resolvers[type] = utils$1.isFunction(res[type])
          ? (res2) => res2[type]()
          : (_, config) => {
              throw new AxiosError(
                `Response type '${type}' is not supported`,
                AxiosError.ERR_NOT_SUPPORT,
                config
              );
            });
    });
  })(new Response());
const getBodyLength = async (body) => {
  if (body == null) {
    return 0;
  }
  if (utils$1.isBlob(body)) {
    return body.size;
  }
  if (utils$1.isSpecCompliantForm(body)) {
    const _request = new Request(platform.origin, {
      method: 'POST',
      body,
    });
    return (await _request.arrayBuffer()).byteLength;
  }
  if (utils$1.isArrayBufferView(body) || utils$1.isArrayBuffer(body)) {
    return body.byteLength;
  }
  if (utils$1.isURLSearchParams(body)) {
    body = body + '';
  }
  if (utils$1.isString(body)) {
    return (await encodeText(body)).byteLength;
  }
};
const resolveBodyLength = async (headers, body) => {
  const length = utils$1.toFiniteNumber(headers.getContentLength());
  return length == null ? getBodyLength(body) : length;
};
const fetchAdapter =
  isFetchSupported &&
  (async (config) => {
    let {
      url,
      method,
      data,
      signal,
      cancelToken,
      timeout,
      onDownloadProgress,
      onUploadProgress,
      responseType,
      headers,
      withCredentials = 'same-origin',
      fetchOptions,
    } = resolveConfig(config);
    responseType = responseType ? (responseType + '').toLowerCase() : 'text';
    let composedSignal = composeSignals(
      [signal, cancelToken && cancelToken.toAbortSignal()],
      timeout
    );
    let request;
    const unsubscribe =
      composedSignal &&
      composedSignal.unsubscribe &&
      (() => {
        composedSignal.unsubscribe();
      });
    let requestContentLength;
    try {
      if (
        onUploadProgress &&
        supportsRequestStream &&
        method !== 'get' &&
        method !== 'head' &&
        (requestContentLength = await resolveBodyLength(headers, data)) !== 0
      ) {
        let _request = new Request(url, {
          method: 'POST',
          body: data,
          duplex: 'half',
        });
        let contentTypeHeader;
        if (
          utils$1.isFormData(data) &&
          (contentTypeHeader = _request.headers.get('content-type'))
        ) {
          headers.setContentType(contentTypeHeader);
        }
        if (_request.body) {
          const [onProgress, flush] = progressEventDecorator(
            requestContentLength,
            progressEventReducer(asyncDecorator(onUploadProgress))
          );
          data = trackStream(
            _request.body,
            DEFAULT_CHUNK_SIZE,
            onProgress,
            flush
          );
        }
      }
      if (!utils$1.isString(withCredentials)) {
        withCredentials = withCredentials ? 'include' : 'omit';
      }
      const isCredentialsSupported = 'credentials' in Request.prototype;
      request = new Request(url, {
        ...fetchOptions,
        signal: composedSignal,
        method: method.toUpperCase(),
        headers: headers.normalize().toJSON(),
        body: data,
        duplex: 'half',
        credentials: isCredentialsSupported ? withCredentials : void 0,
      });
      let response = await fetch(request);
      const isStreamResponse =
        supportsResponseStream &&
        (responseType === 'stream' || responseType === 'response');
      if (
        supportsResponseStream &&
        (onDownloadProgress || (isStreamResponse && unsubscribe))
      ) {
        const options = {};
        ['status', 'statusText', 'headers'].forEach((prop) => {
          options[prop] = response[prop];
        });
        const responseContentLength = utils$1.toFiniteNumber(
          response.headers.get('content-length')
        );
        const [onProgress, flush] =
          (onDownloadProgress &&
            progressEventDecorator(
              responseContentLength,
              progressEventReducer(asyncDecorator(onDownloadProgress), true)
            )) ||
          [];
        response = new Response(
          trackStream(response.body, DEFAULT_CHUNK_SIZE, onProgress, () => {
            flush && flush();
            unsubscribe && unsubscribe();
          }),
          options
        );
      }
      responseType = responseType || 'text';
      let responseData = await resolvers[
        utils$1.findKey(resolvers, responseType) || 'text'
      ](response, config);
      !isStreamResponse && unsubscribe && unsubscribe();
      return await new Promise((resolve, reject) => {
        settle(resolve, reject, {
          data: responseData,
          headers: AxiosHeaders.from(response.headers),
          status: response.status,
          statusText: response.statusText,
          config,
          request,
        });
      });
    } catch (err) {
      unsubscribe && unsubscribe();
      if (err && err.name === 'TypeError' && /fetch/i.test(err.message)) {
        throw Object.assign(
          new AxiosError(
            'Network Error',
            AxiosError.ERR_NETWORK,
            config,
            request
          ),
          {
            cause: err.cause || err,
          }
        );
      }
      throw AxiosError.from(err, err && err.code, config, request);
    }
  });
const knownAdapters = {
  http: httpAdapter,
  xhr: xhrAdapter,
  fetch: fetchAdapter,
};
utils$1.forEach(knownAdapters, (fn, value) => {
  if (fn) {
    try {
      Object.defineProperty(fn, 'name', { value });
    } catch (e) {}
    Object.defineProperty(fn, 'adapterName', { value });
  }
});
const renderReason = (reason) => `- ${reason}`;
const isResolvedHandle = (adapter) =>
  utils$1.isFunction(adapter) || adapter === null || adapter === false;
const adapters = {
  getAdapter: (adapters2) => {
    adapters2 = utils$1.isArray(adapters2) ? adapters2 : [adapters2];
    const { length } = adapters2;
    let nameOrAdapter;
    let adapter;
    const rejectedReasons = {};
    for (let i = 0; i < length; i++) {
      nameOrAdapter = adapters2[i];
      let id;
      adapter = nameOrAdapter;
      if (!isResolvedHandle(nameOrAdapter)) {
        adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
        if (adapter === void 0) {
          throw new AxiosError(`Unknown adapter '${id}'`);
        }
      }
      if (adapter) {
        break;
      }
      rejectedReasons[id || '#' + i] = adapter;
    }
    if (!adapter) {
      const reasons = Object.entries(rejectedReasons).map(
        ([id, state]) =>
          `adapter ${id} ` +
          (state === false
            ? 'is not supported by the environment'
            : 'is not available in the build')
      );
      let s = length
        ? reasons.length > 1
          ? 'since :\n' + reasons.map(renderReason).join('\n')
          : ' ' + renderReason(reasons[0])
        : 'as no adapter specified';
      throw new AxiosError(
        `There is no suitable adapter to dispatch the request ` + s,
        'ERR_NOT_SUPPORT'
      );
    }
    return adapter;
  },
  adapters: knownAdapters,
};
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
  if (config.signal && config.signal.aborted) {
    throw new CanceledError(null, config);
  }
}
function dispatchRequest(config) {
  throwIfCancellationRequested(config);
  config.headers = AxiosHeaders.from(config.headers);
  config.data = transformData.call(config, config.transformRequest);
  if (['post', 'put', 'patch'].indexOf(config.method) !== -1) {
    config.headers.setContentType('application/x-www-form-urlencoded', false);
  }
  const adapter = adapters.getAdapter(config.adapter || defaults.adapter);
  return adapter(config).then(
    function onAdapterResolution(response) {
      throwIfCancellationRequested(config);
      response.data = transformData.call(
        config,
        config.transformResponse,
        response
      );
      response.headers = AxiosHeaders.from(response.headers);
      return response;
    },
    function onAdapterRejection(reason) {
      if (!isCancel(reason)) {
        throwIfCancellationRequested(config);
        if (reason && reason.response) {
          reason.response.data = transformData.call(
            config,
            config.transformResponse,
            reason.response
          );
          reason.response.headers = AxiosHeaders.from(reason.response.headers);
        }
      }
      return Promise.reject(reason);
    }
  );
}
const VERSION = '1.7.9';
const validators$1 = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
  (type, i) => {
    validators$1[type] = function validator2(thing) {
      return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
    };
  }
);
const deprecatedWarnings = {};
validators$1.transitional = function transitional(
  validator2,
  version,
  message
) {
  function formatMessage(opt, desc) {
    return (
      '[Axios v' +
      VERSION +
      "] Transitional option '" +
      opt +
      "'" +
      desc +
      (message ? '. ' + message : '')
    );
  }
  return (value, opt, opts) => {
    if (validator2 === false) {
      throw new AxiosError(
        formatMessage(
          opt,
          ' has been removed' + (version ? ' in ' + version : '')
        ),
        AxiosError.ERR_DEPRECATED
      );
    }
    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' +
            version +
            ' and will be removed in the near future'
        )
      );
    }
    return validator2 ? validator2(value, opt, opts) : true;
  };
};
validators$1.spelling = function spelling(correctSpelling) {
  return (value, opt) => {
    console.warn(`${opt} is likely a misspelling of ${correctSpelling}`);
    return true;
  };
};
function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new AxiosError(
      'options must be an object',
      AxiosError.ERR_BAD_OPTION_VALUE
    );
  }
  const keys = Object.keys(options);
  let i = keys.length;
  while (i-- > 0) {
    const opt = keys[i];
    const validator2 = schema[opt];
    if (validator2) {
      const value = options[opt];
      const result = value === void 0 || validator2(value, opt, options);
      if (result !== true) {
        throw new AxiosError(
          'option ' + opt + ' must be ' + result,
          AxiosError.ERR_BAD_OPTION_VALUE
        );
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new AxiosError('Unknown option ' + opt, AxiosError.ERR_BAD_OPTION);
    }
  }
}
const validator = {
  assertOptions,
  validators: validators$1,
};
const validators = validator.validators;
class Axios {
  constructor(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new InterceptorManager(),
      response: new InterceptorManager(),
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(configOrUrl, config) {
    try {
      return await this._request(configOrUrl, config);
    } catch (err) {
      if (err instanceof Error) {
        let dummy = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(dummy)
          : (dummy = new Error());
        const stack = dummy.stack ? dummy.stack.replace(/^.+\n/, '') : '';
        try {
          if (!err.stack) {
            err.stack = stack;
          } else if (
            stack &&
            !String(err.stack).endsWith(stack.replace(/^.+\n.+\n/, ''))
          ) {
            err.stack += '\n' + stack;
          }
        } catch (e) {}
      }
      throw err;
    }
  }
  _request(configOrUrl, config) {
    if (typeof configOrUrl === 'string') {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }
    config = mergeConfig(this.defaults, config);
    const { transitional: transitional2, paramsSerializer, headers } = config;
    if (transitional2 !== void 0) {
      validator.assertOptions(
        transitional2,
        {
          silentJSONParsing: validators.transitional(validators.boolean),
          forcedJSONParsing: validators.transitional(validators.boolean),
          clarifyTimeoutError: validators.transitional(validators.boolean),
        },
        false
      );
    }
    if (paramsSerializer != null) {
      if (utils$1.isFunction(paramsSerializer)) {
        config.paramsSerializer = {
          serialize: paramsSerializer,
        };
      } else {
        validator.assertOptions(
          paramsSerializer,
          {
            encode: validators.function,
            serialize: validators.function,
          },
          true
        );
      }
    }
    validator.assertOptions(
      config,
      {
        baseUrl: validators.spelling('baseURL'),
        withXsrfToken: validators.spelling('withXSRFToken'),
      },
      true
    );
    config.method = (
      config.method ||
      this.defaults.method ||
      'get'
    ).toLowerCase();
    let contextHeaders =
      headers && utils$1.merge(headers.common, headers[config.method]);
    headers &&
      utils$1.forEach(
        ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
        (method) => {
          delete headers[method];
        }
      );
    config.headers = AxiosHeaders.concat(contextHeaders, headers);
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(
      function unshiftRequestInterceptors(interceptor) {
        if (
          typeof interceptor.runWhen === 'function' &&
          interceptor.runWhen(config) === false
        ) {
          return;
        }
        synchronousRequestInterceptors =
          synchronousRequestInterceptors && interceptor.synchronous;
        requestInterceptorChain.unshift(
          interceptor.fulfilled,
          interceptor.rejected
        );
      }
    );
    const responseInterceptorChain = [];
    this.interceptors.response.forEach(
      function pushResponseInterceptors(interceptor) {
        responseInterceptorChain.push(
          interceptor.fulfilled,
          interceptor.rejected
        );
      }
    );
    let promise;
    let i = 0;
    let len;
    if (!synchronousRequestInterceptors) {
      const chain = [dispatchRequest.bind(this), void 0];
      chain.unshift.apply(chain, requestInterceptorChain);
      chain.push.apply(chain, responseInterceptorChain);
      len = chain.length;
      promise = Promise.resolve(config);
      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }
      return promise;
    }
    len = requestInterceptorChain.length;
    let newConfig = config;
    i = 0;
    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }
    try {
      promise = dispatchRequest.call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }
    i = 0;
    len = responseInterceptorChain.length;
    while (i < len) {
      promise = promise.then(
        responseInterceptorChain[i++],
        responseInterceptorChain[i++]
      );
    }
    return promise;
  }
  getUri(config) {
    config = mergeConfig(this.defaults, config);
    const fullPath = buildFullPath(config.baseURL, config.url);
    return buildURL(fullPath, config.params, config.paramsSerializer);
  }
}
utils$1.forEach(
  ['delete', 'get', 'head', 'options'],
  function forEachMethodNoData(method) {
    Axios.prototype[method] = function (url, config) {
      return this.request(
        mergeConfig(config || {}, {
          method,
          url,
          data: (config || {}).data,
        })
      );
    };
  }
);
utils$1.forEach(
  ['post', 'put', 'patch'],
  function forEachMethodWithData(method) {
    function generateHTTPMethod(isForm) {
      return function httpMethod(url, data, config) {
        return this.request(
          mergeConfig(config || {}, {
            method,
            headers: isForm
              ? {
                  'Content-Type': 'multipart/form-data',
                }
              : {},
            url,
            data,
          })
        );
      };
    }
    Axios.prototype[method] = generateHTTPMethod();
    Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
  }
);
class CancelToken {
  constructor(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }
    let resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });
    const token = this;
    this.promise.then((cancel) => {
      if (!token._listeners) return;
      let i = token._listeners.length;
      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });
    this.promise.then = (onfulfilled) => {
      let _resolve;
      const promise = new Promise((resolve) => {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);
      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };
      return promise;
    };
    executor(function cancel(message, config, request) {
      if (token.reason) {
        return;
      }
      token.reason = new CanceledError(message, config, request);
      resolvePromise(token.reason);
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }
    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }
  toAbortSignal() {
    const controller = new AbortController();
    const abort = (err) => {
      controller.abort(err);
    };
    this.subscribe(abort);
    controller.signal.unsubscribe = () => this.unsubscribe(abort);
    return controller.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    const token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel,
    };
  }
}
function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}
function isAxiosError(payload) {
  return utils$1.isObject(payload) && payload.isAxiosError === true;
}
const HttpStatusCode = {
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
Object.entries(HttpStatusCode).forEach(([key, value]) => {
  HttpStatusCode[value] = key;
});
function createInstance(defaultConfig) {
  const context = new Axios(defaultConfig);
  const instance = bind(Axios.prototype.request, context);
  utils$1.extend(instance, Axios.prototype, context, { allOwnKeys: true });
  utils$1.extend(instance, context, null, { allOwnKeys: true });
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };
  return instance;
}
const axios = createInstance(defaults);
axios.Axios = Axios;
axios.CanceledError = CanceledError;
axios.CancelToken = CancelToken;
axios.isCancel = isCancel;
axios.VERSION = VERSION;
axios.toFormData = toFormData;
axios.AxiosError = AxiosError;
axios.Cancel = axios.CanceledError;
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = spread;
axios.isAxiosError = isAxiosError;
axios.mergeConfig = mergeConfig;
axios.AxiosHeaders = AxiosHeaders;
axios.formToJSON = (thing) =>
  formDataToJSON(utils$1.isHTMLForm(thing) ? new FormData(thing) : thing);
axios.getAdapter = adapters.getAdapter;
axios.HttpStatusCode = HttpStatusCode;
axios.default = axios;
class Storage {
  static isWindowAvailable() {
    return typeof window !== 'undefined';
  }
  static getItem(key) {
    if (this.isWindowAvailable()) {
      return localStorage.getItem(key);
    }
    return null;
  }
  static setItem(key, value) {
    if (!this.isWindowAvailable()) return;
    localStorage.setItem(key, value);
  }
  static delItem(key) {
    if (!this.isWindowAvailable()) return;
    localStorage.removeItem(key);
  }
  static clear() {
    if (this.isWindowAvailable()) localStorage.clear();
  }
}
const TOKEN = {
  ACCESS: 'accessToken',
  REFRESH: 'refreshToken',
};
const authorization = () => ({
  headers: {
    accessToken: Storage.getItem(TOKEN.ACCESS),
  },
});
const refreshToken = () => ({
  token: Storage.getItem(TOKEN.REFRESH),
});
const customAxios = axios.create({
  baseURL: void 0,
  timeout: 1e4,
});
const refresh = async () => {
  const { data } = await customAxios.post('/auth/reissue', refreshToken());
  Storage.setItem(TOKEN.ACCESS, data.accessToken);
  return data.accessToken;
};
customAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const request = error.config;
    request.retryCount = request.retryCount || 0 + 1;
    if (request.retryCount > 3) {
      return Promise.reject(error);
    }
    if (!request.sent) {
      request.sent = true;
      request.headers.Authorization = await refresh();
      return customAxios(request);
    }
    return Promise.reject(error);
  }
);
const getLoginLink = async () => {
  const { data } = await customAxios.get('/auth', authorization());
  return data;
};
const postLogin = async (code) => {
  const { data } = await customAxios.post('/auth/signIn', { token: code });
  return data;
};
const authKeys = {
  loginLink: 'auth.query.loginLink',
};
const authQuery = {
  loginLink: () =>
    queryOptions({
      queryKey: [authKeys.loginLink],
      queryFn: getLoginLink,
    }),
};
const Login = () => {
  const queryClient = useQueryClient();
  const handleLogin = async () => {
    try {
      const url = await queryClient.fetchQuery(authQuery.loginLink());
      if (url) {
        window.location.href = url;
      } else {
        console.error('로그인 링크를 찾을 수 없습니다.');
      }
    } catch (error) {
      console.error('에러 발생:', error);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs('main', {
    className: container$3,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx('img', {
        src: LandingAsterisk,
        className: `${shape$1} ${Asterisk$1}`,
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx('img', {
        src: LandingCube,
        className: `${shape$1} ${Cube$1}`,
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx('img', {
        src: LandingSphere,
        className: `${shape$1} ${Sphere$1}`,
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx('img', {
        src: LandingMobiusStrip,
        className: `${shape$1} ${MobiusStrip$1}`,
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs('div', {
        className: center$1,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AppTitle, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx('p', {
            className: explain,
            children: '오늘의 작은 계획이 내일의 큰 꿈으로,',
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs('div', {
            className: loginButton,
            onClick: handleLogin,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Google, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx('p', {
                className: loginText$1,
                children: '구글 로그인',
              }),
            ],
          }),
        ],
      }),
    ],
  });
};
var MiniCalendarContainer = 'style_MiniCalendarContainer__qs0wrs0';
var MiniCalendarHeader = 'style_MiniCalendarHeader__qs0wrs1';
var MiniCalendarTitle = 'style_MiniCalendarTitle__qs0wrs2';
var MiniCalendarGrid = 'style_MiniCalendarGrid__qs0wrs3';
var MiniCalendarWeek = 'style_MiniCalendarWeek__qs0wrs4';
var MiniCalendarDay = 'style_MiniCalendarDay__qs0wrs5';
var MiniCalendarSelectedDay = 'style_MiniCalendarSelectedDay__qs0wrs6';
var MiniCalendarEmptyDay = 'style_MiniCalendarEmptyDay__qs0wrs7';
const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토'];
const MiniCalendar = () => {
  const [currentDate, setCurrentDate] = reactExports.useState(
    /* @__PURE__ */ new Date()
  );
  const [selectedDate, setSelectedDate] = reactExports.useState(
    /* @__PURE__ */ new Date().getDate()
  );
  const { startWeek, daysInMonth, prevEndOfMonth } =
    reactExports.useMemo(() => {
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth();
      const startOfMonth = new Date(year, month, 1);
      const endOfMonth = new Date(year, month + 1, 0);
      const prevEndOfMonth2 = new Date(year, month, 0);
      return {
        startWeek: startOfMonth.getDay(),
        daysInMonth: endOfMonth.getDate(),
        prevEndOfMonth: prevEndOfMonth2.getDate(),
      };
    }, [currentDate]);
  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
    setSelectedDate(null);
  };
  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
    setSelectedDate(null);
  };
  const handleDateClick = (day) => {
    setSelectedDate(day);
  };
  const renderDays = reactExports.useMemo(() => {
    const days = [];
    for (let i = startWeek - 1; i >= 0; i--) {
      const isSunday = (startWeek - i - 1) % 7 === 0;
      days.push(
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          'div',
          {
            className: MiniCalendarEmptyDay,
            style: {
              color:
                isSunday && selectedDate !== prevEndOfMonth - i
                  ? 'red'
                  : void 0,
            },
            children: prevEndOfMonth - i,
          },
          `prev-${i}`
        )
      );
    }
    for (let i = 1; i <= daysInMonth; i++) {
      const isSunday = (startWeek + i - 1) % 7 === 0;
      days.push(
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          'div',
          {
            className: `${MiniCalendarDay} ${selectedDate === i ? MiniCalendarSelectedDay : ''}`,
            style: {
              color: isSunday && selectedDate !== i ? 'red' : void 0,
            },
            onClick: () => handleDateClick(i),
            children: i,
          },
          `day-${i}`
        )
      );
    }
    const remainingDays = 7 - ((startWeek + daysInMonth) % 7 || 7);
    for (let i = 1; i <= remainingDays; i++) {
      const isSunday = (startWeek + daysInMonth + i - 1) % 7 === 0;
      days.push(
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          'div',
          {
            className: MiniCalendarEmptyDay,
            style: { color: isSunday && selectedDate !== i ? 'red' : void 0 },
            children: i,
          },
          `next-${i}`
        )
      );
    }
    return days;
  }, [startWeek, daysInMonth, prevEndOfMonth, selectedDate]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs('div', {
    className: MiniCalendarContainer,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs('div', {
        className: MiniCalendarHeader,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx('button', {
            onClick: handlePrevMonth,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Arrow$1, {
              direction: 'left',
            }),
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs('div', {
            className: MiniCalendarTitle,
            children: [
              currentDate.getFullYear(),
              '년 ',
              currentDate.getMonth() + 1,
              '월',
            ],
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx('button', {
            onClick: handleNextMonth,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Arrow$1, {
              direction: 'right',
            }),
          }),
        ],
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs('div', {
        className: MiniCalendarGrid,
        children: [
          WEEKDAYS.map((day, index) =>
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              'div',
              {
                className: MiniCalendarWeek,
                style: { color: index === 0 ? 'red' : void 0 },
                children: day,
              },
              `week-${index}`
            )
          ),
          renderDays,
        ],
      }),
    ],
  });
};
function toPrimitive(t, r) {
  if ('object' != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || 'default');
    if ('object' != typeof i) return i;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return ('string' === r ? String : Number)(t);
}
function toPropertyKey(t) {
  var i = toPrimitive(t, 'string');
  return 'symbol' == typeof i ? i : String(i);
}
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r &&
      (o = o.filter(function (r2) {
        return Object.getOwnPropertyDescriptor(e, r2).enumerable;
      })),
      t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2
      ? ownKeys(Object(t), true).forEach(function (r2) {
          _defineProperty(e, r2, t[r2]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : ownKeys(Object(t)).forEach(function (r2) {
            Object.defineProperty(
              e,
              r2,
              Object.getOwnPropertyDescriptor(t, r2)
            );
          });
  }
  return e;
}
function mapValues(input, fn) {
  var result = {};
  for (var _key in input) {
    result[_key] = fn(input[_key], _key);
  }
  return result;
}
var shouldApplyCompound = (compoundCheck, selections, defaultVariants) => {
  for (var key of Object.keys(compoundCheck)) {
    var _selections$key;
    if (
      compoundCheck[key] !==
      ((_selections$key = selections[key]) !== null &&
      _selections$key !== void 0
        ? _selections$key
        : defaultVariants[key])
    ) {
      return false;
    }
  }
  return true;
};
var createRuntimeFn = (config) => {
  var runtimeFn = (options) => {
    var className = config.defaultClassName;
    var selections = _objectSpread2(
      _objectSpread2({}, config.defaultVariants),
      options
    );
    for (var variantName in selections) {
      var _selections$variantNa;
      var variantSelection =
        (_selections$variantNa = selections[variantName]) !== null &&
        _selections$variantNa !== void 0
          ? _selections$variantNa
          : config.defaultVariants[variantName];
      if (variantSelection != null) {
        var selection = variantSelection;
        if (typeof selection === 'boolean') {
          selection = selection === true ? 'true' : 'false';
        }
        var selectionClassName =
          // @ts-expect-error
          config.variantClassNames[variantName][selection];
        if (selectionClassName) {
          className += ' ' + selectionClassName;
        }
      }
    }
    for (var [compoundCheck, compoundClassName] of config.compoundVariants) {
      if (
        shouldApplyCompound(compoundCheck, selections, config.defaultVariants)
      ) {
        className += ' ' + compoundClassName;
      }
    }
    return className;
  };
  runtimeFn.variants = () => Object.keys(config.variantClassNames);
  runtimeFn.classNames = {
    get base() {
      return config.defaultClassName.split(' ')[0];
    },
    get variants() {
      return mapValues(config.variantClassNames, (classNames) =>
        mapValues(classNames, (className) => className.split(' ')[0])
      );
    },
  };
  return runtimeFn;
};
var DisplayContainer = 'style_DisplayContainer__e7dyjh0';
var DisplayObject = 'style_DisplayObject__e7dyjh1';
var DisplayTitle = 'style_DisplayTitle__e7dyjh2';
var DisplayBtnLayout = createRuntimeFn({
  defaultClassName: 'style_DisplayBtnLayout__e7dyjh3',
  variantClassNames: {
    isActive: { true: 'style_DisplayBtnLayout_isActive_true__e7dyjh4' },
  },
  defaultVariants: {},
  compoundVariants: [],
});
var DisplayBtnObject = 'style_DisplayBtnObject__e7dyjh5';
const Display = () => {
  const [scheduleSelected, setScheduleSelected] = reactExports.useState(false);
  const [todoSelected, setTodoSelected] = reactExports.useState(false);
  const toggleScheduleSelected = () => {
    setScheduleSelected((prevSelected) => !prevSelected);
  };
  const toggleTodoSelected = () => {
    setTodoSelected((prevSelected) => !prevSelected);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs('div', {
    className: DisplayContainer,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs('div', {
        className: DisplayObject,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx('div', {
            className: DisplayTitle,
            children: '일정 표시',
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx('div', {
            className: DisplayBtnLayout({ isActive: scheduleSelected }),
            onClick: toggleScheduleSelected,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx('div', {
              className: DisplayBtnObject,
            }),
          }),
        ],
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs('div', {
        className: DisplayObject,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx('div', {
            className: DisplayTitle,
            children: '할 일 표시',
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx('div', {
            className: DisplayBtnLayout({ isActive: todoSelected }),
            onClick: toggleTodoSelected,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx('div', {
              className: DisplayBtnObject,
            }),
          }),
        ],
      }),
    ],
  });
};
const BtnToDoNormal = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx('svg', {
    width: '20',
    height: '21',
    viewBox: '0 0 20 21',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    children: /* @__PURE__ */ jsxRuntimeExports.jsx('circle', {
      cx: '10',
      cy: '10.5',
      r: '9.5',
      fill: 'white',
      stroke: '#D8D8D8',
    }),
  });
};
const BtnToDoChecked = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs('svg', {
    width: '20',
    height: '21',
    viewBox: '0 0 20 21',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx('circle', {
        cx: '10',
        cy: '10.5',
        r: '10',
        fill: '#2E5EFC',
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx('path', {
        'fill-rule': 'evenodd',
        'clip-rule': 'evenodd',
        d: 'M14.6484 6.12604C15.0111 6.3558 15.1092 6.82145 14.8673 7.16609L9.60421 14.666C9.47301 14.853 9.2605 14.9742 9.02513 14.9963C8.78976 15.0185 8.55634 14.9392 8.3891 14.7803L5.23123 11.7804C4.92292 11.4875 4.92292 11.0126 5.23123 10.7197C5.53954 10.4268 6.0394 10.4268 6.3477 10.7197L8.82463 13.0728L13.5536 6.33405C13.7954 5.98941 14.2856 5.89628 14.6484 6.12604Z',
        fill: 'white',
      }),
    ],
  });
};
var ToDoListContainer = 'style_ToDoListContainer__c3kjgd0';
var ToDoListHeader = 'style_ToDoListHeader__c3kjgd1';
var ToDoListTitle = 'style_ToDoListTitle__c3kjgd2';
var ToDoListSetDate = 'style_ToDoListSetDate__c3kjgd3';
var ToDoListDateTitle = 'style_ToDoListDateTitle__c3kjgd4';
var ToDoListMain = 'style_ToDoListMain__c3kjgd5';
var ToDoListItem = 'style_ToDoListItem__c3kjgd6';
var ToDoListItemText = 'style_ToDoListItemText__c3kjgd7';
const ToDoList = () => {
  const [todoItems, setTodoItems] = reactExports.useState([
    { id: 1, text: '미래랑 산책가기', checked: false },
    { id: 2, text: '하니 산책시키기', checked: true },
    { id: 3, text: '베이스 치기', checked: false },
  ]);
  const handleToggle = (id) => {
    setTodoItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs('div', {
    className: ToDoListContainer,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs('div', {
        className: ToDoListHeader,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx('div', {
            className: ToDoListTitle,
            children: '해야할 것',
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs('div', {
            className: ToDoListSetDate,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Arrow$1, {
                direction: 'left',
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx('div', {
                className: ToDoListDateTitle,
                children: '2025.01.07',
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Arrow$1, {
                direction: 'right',
              }),
            ],
          }),
        ],
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx('div', {
        className: ToDoListMain,
        children: todoItems.map((item) =>
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            'div',
            {
              className: ToDoListItem,
              onClick: () => handleToggle(item.id),
              children: [
                item.checked
                  ? /* @__PURE__ */ jsxRuntimeExports.jsx(BtnToDoChecked, {})
                  : /* @__PURE__ */ jsxRuntimeExports.jsx(BtnToDoNormal, {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx('span', {
                  className: ToDoListItemText,
                  children: item.text,
                }),
              ],
            },
            item.id
          )
        ),
      }),
    ],
  });
};
var CategoryContainer = 'style_CategoryContainer__db2hly0';
var CategoryHeader = 'style_CategoryHeader__db2hly1';
var CategoryTitle = 'style_CategoryTitle__db2hly2';
var CategoryPlusBtn = 'style_CategoryPlusBtn__db2hly3';
var CategoryItemContainer = 'style_CategoryItemContainer__db2hly4';
var CategoryItem = 'style_CategoryItem__db2hly5';
var CategoryItemTitle = 'style_CategoryItemTitle__db2hly6';
var BtnCategoryItemStatic = 'style_BtnCategoryItemStatic__db2hly7';
const BtnCategoryPlus = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx('svg', {
    width: '24',
    height: '25',
    viewBox: '0 0 24 25',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    style: {},
    children: /* @__PURE__ */ jsxRuntimeExports.jsx('path', {
      'fill-rule': 'evenodd',
      'clip-rule': 'evenodd',
      d: 'M12 4.25C12.4142 4.25 12.75 4.58579 12.75 5V11.75H19.5C19.9142 11.75 20.25 12.0858 20.25 12.5C20.25 12.9142 19.9142 13.25 19.5 13.25H12.75V20C12.75 20.4142 12.4142 20.75 12 20.75C11.5858 20.75 11.25 20.4142 11.25 20V13.25H4.5C4.08579 13.25 3.75 12.9142 3.75 12.5C3.75 12.0858 4.08579 11.75 4.5 11.75H11.25V5C11.25 4.58579 11.5858 4.25 12 4.25Z',
      fill: '#5A5A5A',
    }),
  });
};
var __default__ = {
  blue: {
    50: 'var(--blue-50__1yduxoj0)',
    100: 'var(--blue-100__1yduxoj1)',
    200: 'var(--blue-200__1yduxoj2)',
    300: 'var(--blue-300__1yduxoj3)',
    400: 'var(--blue-400__1yduxoj4)',
    500: 'var(--blue-500__1yduxoj5)',
    600: 'var(--blue-600__1yduxoj6)',
    700: 'var(--blue-700__1yduxoj7)',
    800: 'var(--blue-800__1yduxoj8)',
    900: 'var(--blue-900__1yduxoj9)',
  },
  gray: {
    50: 'var(--gray-50__1yduxoja)',
    100: 'var(--gray-100__1yduxojb)',
    200: 'var(--gray-200__1yduxojc)',
    300: 'var(--gray-300__1yduxojd)',
    400: 'var(--gray-400__1yduxoje)',
    500: 'var(--gray-500__1yduxojf)',
    600: 'var(--gray-600__1yduxojg)',
    800: 'var(--gray-800__1yduxojh)',
    900: 'var(--gray-900__1yduxoji)',
  },
  red: {
    100: 'var(--red-100__1yduxojj)',
    200: 'var(--red-200__1yduxojk)',
    500: 'var(--red-500__1yduxojl)',
  },
  white: 'var(--white__1yduxojm)',
  black: 'var(--black__1yduxojn)',
};
const BtnCategoryItem = ({ initialBgColor = '#587EFD' }) => {
  const [isClicked, setIsClicked] = reactExports.useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '24',
    height: '25',
    viewBox: '0 0 24 25',
    fill: 'none',
    onClick: handleClick,
    style: { cursor: 'pointer' },
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx('rect', {
        x: '0.5',
        y: '1',
        width: '23',
        height: '23',
        rx: '3.5',
        fill: isClicked ? __default__.gray[50] : initialBgColor,
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx('rect', {
        x: '0.5',
        y: '1',
        width: '23',
        height: '23',
        rx: '3.5',
        stroke: __default__.gray[50],
      }),
      !isClicked &&
        /* @__PURE__ */ jsxRuntimeExports.jsx('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M16.6484 7.62604C17.0111 7.8558 17.1092 8.32145 16.8673 8.66609L11.6042 16.166C11.473 16.353 11.2605 16.4742 11.0251 16.4963C10.7898 16.5185 10.5563 16.4392 10.3891 16.2803L7.23123 13.2804C6.92292 12.9875 6.92292 12.5126 7.23123 12.2197C7.53954 11.9268 8.0394 11.9268 8.3477 12.2197L10.8246 14.5728L15.5536 7.83405C15.7954 7.48941 16.2856 7.39628 16.6484 7.62604Z',
          fill: 'white',
        }),
    ],
  });
};
const Category = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs('div', {
    className: CategoryContainer,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs('div', {
        className: CategoryHeader,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx('div', {
            className: CategoryTitle,
            children: '카테고리',
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx('div', {
            className: CategoryPlusBtn,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              BtnCategoryPlus,
              {}
            ),
          }),
        ],
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs('div', {
        className: CategoryItemContainer,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs('div', {
            className: CategoryItem,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BtnCategoryItem, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx('div', {
                className: CategoryItemTitle,
                children: '나의 일정',
              }),
            ],
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs('div', {
            className: CategoryItem,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BtnCategoryItem, {
                initialBgColor: '#15A665',
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx('div', {
                className: CategoryItemTitle,
                children: '게임',
              }),
            ],
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs('div', {
            className: CategoryItem,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BtnCategoryItem, {
                initialBgColor: '#F4B224',
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx('div', {
                className: CategoryItemTitle,
                children: '카테고리',
              }),
            ],
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs('div', {
            className: CategoryItem,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx('button', {
                className: BtnCategoryItemStatic,
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx('div', {
                className: CategoryItemTitle,
                children: '대한민국 공휴일',
              }),
            ],
          }),
        ],
      }),
    ],
  });
};
var container$2 = 'style_container__1tluqzz0';
const SideBar = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs('aside', {
    className: container$2,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MiniCalendar, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Display, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ToDoList, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Category, {}),
    ],
  });
};
const Home = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx('main', {
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(SideBar, {}),
  });
};
var timeInputContainer = 'style_timeInputContainer__10sjlsl0';
var timeInput = 'style_timeInput__10sjlsl1';
const TimePicker = ({ time, onChange }) => {
  const inputRefs = [
    reactExports.useRef(null),
    reactExports.useRef(null),
    reactExports.useRef(null),
    reactExports.useRef(null),
  ];
  const handleTimeChange = (value, index) => {
    const newValue = value.slice(-1);
    const newTime = [...time];
    if (index === 0 && parseInt(newValue) > 2) return;
    if (index === 1 && parseInt(time[0] + newValue) > 23) return;
    if (index === 2 && parseInt(newValue) > 5) return;
    if (index === 3 && parseInt(newValue) > 9) return;
    newTime[index] = newValue;
    onChange(newTime);
    if (newValue !== '' && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  };
  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && time[index] === '' && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs('div', {
    className: timeInputContainer,
    children: [
      [0, 1].map((index) =>
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          'input',
          {
            ref: inputRefs[index],
            type: 'number',
            value: time[index],
            onChange: (e) => handleTimeChange(e.target.value, index),
            onKeyDown: (e) => handleKeyDown(e, index),
            className: timeInput,
            placeholder: '0',
          },
          index
        )
      ),
      ':',
      [2, 3].map((index) =>
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          'input',
          {
            ref: inputRefs[index],
            type: 'number',
            value: time[index],
            onChange: (e) => handleTimeChange(e.target.value, index),
            onKeyDown: (e) => handleKeyDown(e, index),
            className: timeInput,
            placeholder: '0',
          },
          index
        )
      ),
    ],
  });
};
var container$1 = 'style_container__1jngb3n1';
var center = 'style_center__1jngb3n2';
var skipButton = 'style_skipButton__1jngb3n3';
var title = 'style_title__1jngb3n4';
var subTitle = 'style_subTitle__1jngb3n5';
var nextButton = 'style_nextButton__1jngb3n6';
var shape = 'style_shape__1jngb3n7';
var Asterisk = 'style_Asterisk__1jngb3n8 style_shape__1jngb3n7';
var Cube = 'style_Cube__1jngb3n9 style_shape__1jngb3n7';
var Sphere = 'style_Sphere__1jngb3na style_shape__1jngb3n7';
var MobiusStrip = 'style_MobiusStrip__1jngb3nb style_shape__1jngb3n7';
const Arrow = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx('svg', {
    width: '18',
    height: '18',
    viewBox: '0 0 18 18',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    children: /* @__PURE__ */ jsxRuntimeExports.jsx('g', {
      id: 'heroicons-mini/arrow-right',
      children: /* @__PURE__ */ jsxRuntimeExports.jsx('path', {
        id: 'Vector (Stroke)',
        'fill-rule': 'evenodd',
        'clip-rule': 'evenodd',
        d: 'M2.70001 9.00002C2.70001 8.62723 3.00222 8.32502 3.37501 8.32502L12.9491 8.32502L9.20716 4.76159C8.93844 4.5032 8.93006 4.0759 9.18845 3.80718C9.44684 3.53845 9.87414 3.53008 10.1429 3.78846L15.0929 8.51346C15.2252 8.64072 15.3 8.81641 15.3 9.00002C15.3 9.18363 15.2252 9.35932 15.0929 9.48659L10.1429 14.2116C9.87414 14.47 9.44684 14.4616 9.18845 14.1929C8.93006 13.9242 8.93844 13.4968 9.20716 13.2385L12.9491 9.67502L3.37501 9.67502C3.00222 9.67502 2.70001 9.37282 2.70001 9.00002Z',
        fill: '#323131',
      }),
    }),
  });
};
const Survey = () => {
  const [time, setTime] = reactExports.useState(['', '', '', '']);
  const isTimeValid = reactExports.useMemo(() => {
    return (
      time.every((value) => value !== '') &&
      parseInt(time[0] + time[1]) <= 23 &&
      parseInt(time[2] + time[3]) <= 59
    );
  }, [time]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs('main', {
    className: container$1,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx('img', {
        src: LandingAsterisk,
        className: `${shape} ${Asterisk}`,
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx('img', {
        src: LandingCube,
        className: `${shape} ${Cube}`,
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx('img', {
        src: LandingSphere,
        className: `${shape} ${Sphere}`,
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx('img', {
        src: LandingMobiusStrip,
        className: `${shape} ${MobiusStrip}`,
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs('div', {
        className: center,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs('div', {
            className: skipButton,
            children: [
              '건너뛰기',
              /* @__PURE__ */ jsxRuntimeExports.jsx(Arrow, {}),
            ],
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx('div', {
            className: title,
            children: '당일 일정 요약 알림을 받는 시간대는 언제가 편하신가요?',
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx('div', {
            className: subTitle,
            children:
              '* 등록된 시간은 사용자 설정에서 언제든지 변경할 수 있습니다.',
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TimePicker, {
            time,
            onChange: setTime,
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx('button', {
            className: nextButton,
            disabled: !isTimeValid,
            children: '확정하고 시작하기',
          }),
        ],
      }),
    ],
  });
};
var container = 'style_container__mk7a0d0';
var loginText = 'style_loginText__mk7a0d1';
const useLoginMutation = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: postLogin,
    onSuccess: ({ accessToken, refreshToken: refreshToken2 }) => {
      Storage.setItem(TOKEN.ACCESS, accessToken);
      Storage.setItem(TOKEN.REFRESH, refreshToken2);
      navigate('/');
    },
  });
};
const OAuth = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code') || '';
  const { mutate } = useLoginMutation();
  reactExports.useEffect(() => {
    mutate(code);
  }, [code, mutate]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, {
    children: /* @__PURE__ */ jsxRuntimeExports.jsx('main', {
      className: container,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx('p', {
        className: loginText,
        children: '로그인 중...',
      }),
    }),
  });
};
function Router() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Routes, {
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, {
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, {}),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Route, {
          path: '/',
          element: /* @__PURE__ */ jsxRuntimeExports.jsx(Home, {}),
        }),
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, {
        path: '/login',
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(Login, {}),
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, {
        path: '/survey',
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(Survey, {}),
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, {
        path: '/google/callback',
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(OAuth, {}),
      }),
    ],
  });
}
const App = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Router, {});
};
var ReactQueryDevtools2 = function () {
  return null;
};
const ReactQueryProviders = ({ children }) => {
  const [client2] = reactExports.useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          refetchOnMount: false,
          retry: 1,
        },
        mutations: {
          retry: 1,
        },
      },
    })
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(QueryClientProvider, {
    client: client2,
    children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(ReactQueryDevtools2, {
        initialIsOpen: false,
      }),
    ],
  });
};
clientExports.createRoot(document.getElementById('root')).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(ReactQueryProviders, {
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrowserRouter, {
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}),
    }),
  })
);
