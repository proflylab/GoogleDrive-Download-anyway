!function (e) {
  var t = {
  };
  function n(i) {
    if (t[i]) return t[i].exports;
    var r = t[i] = {
      i: i,
      l: !1,
      exports: {
      }
    };
    return e[i].call(r.exports, r, r.exports, n),
    r.l = !0,
    r.exports
  }
  n.m = e,
  n.c = t,
  n.d = function (e, t, i) {
    n.o(e, t) || Object.defineProperty(e, t, {
      configurable: !1,
      enumerable: !0,
      get: i
    })
  },
  n.r = function (e) {
    Object.defineProperty(e, '__esModule', {
      value: !0
    })
  },
  n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default
    }
    : function () {
      return e
    };
    return n.d(t, 'a', t),
    t
  },
  n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  },
  n.p = '',
  n(n.s = 105)
}([function (e, t, n) {
  function i(e) {
    return e && 'object' == typeof e && 'default' in e ? e.default:
    e
  }
  var r,
  o = i(n(3)),
  s = i(n(22)),
  a = i(n(256)),
  l = i(n(255)),
  u = i(n(254)),
  c = i(n(249)),
  h = '6.7.3',
  d = o.navigator && o.navigator.userAgent || '',
  f = /AppleWebKit\/([\d.]+)/i.exec(d),
  p = f ? parseFloat(f.pop())  : null,
  v = /iPad/i.test(d),
  g = /iPhone/i.test(d) && !v,
  m = /iPod/i.test(d),
  A = g || v || m,
  y = (r = d.match(/OS (\d+)_/i)) && r[1] ? r[1] : null,
  b = /Android/i.test(d),
  _ = function () {
    var e = d.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);
    if (!e) return null;
    var t = e[1] && parseFloat(e[1]),
    n = e[2] && parseFloat(e[2]);
    return t && n ? parseFloat(e[1] + '.' + e[2])  : t || null
  }(),
  w = b && /webkit/i.test(d) && _ < 2.3,
  T = b && _ < 5 && p < 537,
  k = /Firefox/i.test(d),
  E = /Edge/i.test(d),
  S = !E && /Chrome/i.test(d),
  j = function () {
    var e = d.match(/Chrome\/(\d+)/);
    return e && e[1] ? parseFloat(e[1])  : null
  }(),
  C = /MSIE\s8\.0/.test(d),
  x = function () {
    var e = /MSIE\s(\d+)\.\d/.exec(d),
    t = e && parseFloat(e[1]);
    return !t && /Trident\/7.0/i.test(d) && /rv:11.0/.test(d) && (t = 11),
    t
  }(),
  B = /Safari/i.test(d) && !S && !b && !E,
  O = B || A,
  I = te() && ('ontouchstart' in o || o.DocumentTouch && o.document instanceof o.DocumentTouch),
  P = te() && 'backgroundSize' in o.document.createElement('video').style,
  R = (Object.freeze || Object) ({
    IS_IPAD: v,
    IS_IPHONE: g,
    IS_IPOD: m,
    IS_IOS: A,
    IOS_VERSION: y,
    IS_ANDROID: b,
    ANDROID_VERSION: _,
    IS_OLD_ANDROID: w,
    IS_NATIVE_ANDROID: T,
    IS_FIREFOX: k,
    IS_EDGE: E,
    IS_CHROME: S,
    CHROME_VERSION: j,
    IS_IE8: C,
    IE_VERSION: x,
    IS_SAFARI: B,
    IS_ANY_SAFARI: O,
    TOUCH_ENABLED: I,
    BACKGROUND_SIZE_SUPPORTED: P
  }),
  M = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
    return typeof e
  }
   : function (e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  },
  L = function (e, t) {
    if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
  },
  D = function (e, t) {
    if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }),
    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t)  : e.__proto__ = t)
  },
  U = function (e, t) {
    if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
    return !t || 'object' != typeof t && 'function' != typeof t ? e : t
  },
  N = function (e, t) {
    return e.raw = t,
    e
  },
  F = Object.prototype.toString,
  z = function (e) {
    return Y(e) ? Object.keys(e)  : [
    ]
  };
  function H(e, t) {
    z(e).forEach(function (n) {
      return t(e[n], n)
    })
  }
  function Q(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
    return Object.assign ? Object.assign.apply(Object, [
      e
    ].concat(n))  : (n.forEach(function (t) {
      t && H(t, function (t, n) {
        e[n] = t
      })
    }), e)
  }
  function Y(e) {
    return !!e && 'object' === (void 0 === e ? 'undefined' : M(e))
  }
  function V(e) {
    return Y(e) && '[object Object]' === F.call(e) && e.constructor === Object
  }
  var G = void 0,
  W = 'info',
  q = [
  ],
  Z = function (e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : !!x && x < 11,
    i = G.levels[W],
    r = new RegExp('^(' + i + ')$');
    if ('log' !== e && t.unshift(e.toUpperCase() + ':'), q && q.push([].concat(t)), t.unshift('VIDEOJS:'), o.console) {
      var s = o.console[e];
      s || 'debug' !== e || (s = o.console.info || o.console.log),
      s && i && r.test(e) && (n && (t = t.map(function (e) {
        if (Y(e) || Array.isArray(e)) try {
          return JSON.stringify(e)
        } catch (t) {
          return String(e)
        }
        return String(e)
      }).join(' ')), s.apply ? s[Array.isArray(t) ? 'apply' : 'call'](o.console, t)  : s(t))
    }
  };
  (G = function () {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    Z('log', t)
  }).levels = {
    all: 'debug|log|warn|error',
    off: '',
    debug: 'debug|log|warn|error',
    info: 'log|warn|error',
    warn: 'warn|error',
    error: 'error',
    DEFAULT: W
  },
  G.level = function (e) {
    if ('string' == typeof e) {
      if (!G.levels.hasOwnProperty(e)) throw new Error('"' + e + '" in not a valid log level');
      W = e
    }
    return W
  },
  G.history = function () {
    return q ? [
    ].concat(q)  : [
    ]
  },
  G.history.clear = function () {
    q && (q.length = 0)
  },
  G.history.disable = function () {
    null !== q && (q.length = 0, q = null)
  },
  G.history.enable = function () {
    null === q && (q = [
    ])
  },
  G.error = function () {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return Z('error', t)
  },
  G.warn = function () {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return Z('warn', t)
  },
  G.debug = function () {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return Z('debug', t)
  };
  var X = G;
  function K(e, t) {
    if (!e || !t) return '';
    if ('function' == typeof o.getComputedStyle) {
      var n = o.getComputedStyle(e);
      return n ? n[t] : ''
    }
    return e.currentStyle[t] || ''
  }
  var J = N(['Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set ',
  ' to ',
  '.'], [
    'Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set ',
    ' to ',
    '.'
  ]);
  function $(e) {
    return 'string' == typeof e && /\S/.test(e)
  }
  function ee(e) {
    if (/\s/.test(e)) throw new Error('class has illegal whitespace characters')
  }
  function te() {
    return s === o.document && void 0 !== s.createElement
  }
  function ne(e) {
    return Y(e) && 1 === e.nodeType
  }
  function ie() {
    try {
      return o.parent !== o.self
    } catch (e) {
      return !0
    }
  }
  function re(e) {
    return function (t, n) {
      if (!$(t)) return s[e](null);
      $(n) && (n = s.querySelector(n));
      var i = ne(n) ? n : s;
      return i[e] && i[e](t)
    }
  }
  function oe() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'div',
    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
    },
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
    },
    i = arguments[3],
    r = s.createElement(e);
    return Object.getOwnPropertyNames(t).forEach(function (e) {
      var n = t[e];
      - 1 !== e.indexOf('aria-') || 'role' === e || 'type' === e ? (X.warn(a(J, e, n)), r.setAttribute(e, n))  : 'textContent' === e ? se(r, n)  : r[e] = n
    }),
    Object.getOwnPropertyNames(n).forEach(function (e) {
      r.setAttribute(e, n[e])
    }),
    i && Ee(r, i),
    r
  }
  function se(e, t) {
    return void 0 === e.textContent ? e.innerText = t : e.textContent = t,
    e
  }
  function ae(e, t) {
    t.firstChild ? t.insertBefore(e, t.firstChild)  : t.appendChild(e)
  }
  function le(e, t) {
    return ee(t),
    e.classList ? e.classList.contains(t)  : (n = t, new RegExp('(^|\\s)' + n + '($|\\s)')).test(e.className);
    var n
  }
  function ue(e, t) {
    return e.classList ? e.classList.add(t)  : le(e, t) || (e.className = (e.className + ' ' + t).trim()),
    e
  }
  function ce(e, t) {
    return e.classList ? e.classList.remove(t)  : (ee(t), e.className = e.className.split(/\s+/).filter(function (e) {
      return e !== t
    }).join(' ')),
    e
  }
  function he(e, t, n) {
    var i = le(e, t);
    if ('function' == typeof n && (n = n(e, t)), 'boolean' != typeof n && (n = !i), n !== i) return n ? ue(e, t)  : ce(e, t),
    e
  }
  function de(e, t) {
    Object.getOwnPropertyNames(t).forEach(function (n) {
      var i = t[n];
      null === i || void 0 === i || !1 === i ? e.removeAttribute(n)  : e.setAttribute(n, !0 === i ? '' : i)
    })
  }
  function fe(e) {
    var t = {
    },
    n = ',autoplay,controls,playsinline,loop,muted,default,defaultMuted,';
    if (e && e.attributes && e.attributes.length > 0) for (var i = e.attributes, r = i.length - 1; r >= 0; r--) {
      var o = i[r].name,
      s = i[r].value;
      'boolean' != typeof e[o] && - 1 === n.indexOf(',' + o + ',') || (s = null !== s),
      t[o] = s
    }
    return t
  }
  function pe(e, t) {
    return e.getAttribute(t)
  }
  function ve(e, t, n) {
    e.setAttribute(t, n)
  }
  function ge(e, t) {
    e.removeAttribute(t)
  }
  function me() {
    s.body.focus(),
    s.onselectstart = function () {
      return !1
    }
  }
  function Ae() {
    s.onselectstart = function () {
      return !0
    }
  }
  function ye(e) {
    if (e && e.getBoundingClientRect && e.parentNode) {
      var t = e.getBoundingClientRect(),
      n = {
      };
      return ['bottom',
      'height',
      'left',
      'right',
      'top',
      'width'].forEach(function (e) {
        void 0 !== t[e] && (n[e] = t[e])
      }),
      n.height || (n.height = parseFloat(K(e, 'height'))),
      n.width || (n.width = parseFloat(K(e, 'width'))),
      n
    }
  }
  function be(e) {
    var t = void 0;
    if (e.getBoundingClientRect && e.parentNode && (t = e.getBoundingClientRect()), !t) return {
      left: 0,
      top: 0
    };
    var n = s.documentElement,
    i = s.body,
    r = n.clientLeft || i.clientLeft || 0,
    a = o.pageXOffset || i.scrollLeft,
    l = t.left + a - r,
    u = n.clientTop || i.clientTop || 0,
    c = o.pageYOffset || i.scrollTop,
    h = t.top + c - u;
    return {
      left: Math.round(l),
      top: Math.round(h)
    }
  }
  function _e(e, t) {
    var n = {
    },
    i = be(e),
    r = e.offsetWidth,
    o = e.offsetHeight,
    s = i.top,
    a = i.left,
    l = t.pageY,
    u = t.pageX;
    return t.changedTouches && (u = t.changedTouches[0].pageX, l = t.changedTouches[0].pageY),
    n.y = Math.max(0, Math.min(1, (s - l + o) / o)),
    n.x = Math.max(0, Math.min(1, (u - a) / r)),
    n
  }
  function we(e) {
    return Y(e) && 3 === e.nodeType
  }
  function Te(e) {
    for (; e.firstChild; ) e.removeChild(e.firstChild);
    return e
  }
  function ke(e) {
    return 'function' == typeof e && (e = e()),
    (Array.isArray(e) ? e : [
      e
    ]).map(function (e) {
      return 'function' == typeof e && (e = e()),
      ne(e) || we(e) ? e : 'string' == typeof e && /\S/.test(e) ? s.createTextNode(e)  : void 0
    }).filter(function (e) {
      return e
    })
  }
  function Ee(e, t) {
    return ke(t).forEach(function (t) {
      return e.appendChild(t)
    }),
    e
  }
  function Se(e, t) {
    return Ee(Te(e), t)
  }
  function je(e) {
    return void 0 === e.button && void 0 === e.buttons || (0 === e.button && void 0 === e.buttons || (9 === x || 0 === e.button && 1 === e.buttons))
  }
  var Ce = re('querySelector'),
  xe = re('querySelectorAll'),
  Be = (Object.freeze || Object) ({
    isReal: te,
    isEl: ne,
    isInFrame: ie,
    createEl: oe,
    textContent: se,
    prependTo: ae,
    hasClass: le,
    addClass: ue,
    removeClass: ce,
    toggleClass: he,
    setAttributes: de,
    getAttributes: fe,
    getAttribute: pe,
    setAttribute: ve,
    removeAttribute: ge,
    blockTextSelection: me,
    unblockTextSelection: Ae,
    getBoundingClientRect: ye,
    findPosition: be,
    getPointerPosition: _e,
    isTextNode: we,
    emptyEl: Te,
    normalizeContent: ke,
    appendContent: Ee,
    insertContent: Se,
    isSingleLeftClick: je,
    $: Ce,
    $$: xe
  }),
  Oe = 1;
  function Ie() {
    return Oe++
  }
  var Pe = {
  },
  Re = 'vdata' + (new Date).getTime();
  function Me(e) {
    var t = e[Re];
    return t || (t = e[Re] = Ie()),
    Pe[t] || (Pe[t] = {
    }),
    Pe[t]
  }
  function Le(e) {
    var t = e[Re];
    return !!t && !!Object.getOwnPropertyNames(Pe[t]).length
  }
  function De(e) {
    var t = e[Re];
    if (t) {
      delete Pe[t];
      try {
        delete e[Re]
      } catch (t) {
        e.removeAttribute ? e.removeAttribute(Re)  : e[Re] = null
      }
    }
  }
  function Ue(e, t) {
    var n = Me(e);
    0 === n.handlers[t].length && (delete n.handlers[t], e.removeEventListener ? e.removeEventListener(t, n.dispatcher, !1)  : e.detachEvent && e.detachEvent('on' + t, n.dispatcher)),
    Object.getOwnPropertyNames(n.handlers).length <= 0 && (delete n.handlers, delete n.dispatcher, delete n.disabled),
    0 === Object.getOwnPropertyNames(n).length && De(e)
  }
  function Ne(e, t, n, i) {
    n.forEach(function (n) {
      e(t, n, i)
    })
  }
  function Fe(e) {
    function t() {
      return !0
    }
    function n() {
      return !1
    }
    if (!e || !e.isPropagationStopped) {
      var i = e || o.event;
      for (var r in e = {
      }, i) 'layerX' !== r && 'layerY' !== r && 'keyLocation' !== r && 'webkitMovementX' !== r && 'webkitMovementY' !== r && ('returnValue' === r && i.preventDefault || (e[r] = i[r]));
      if (e.target || (e.target = e.srcElement || s), e.relatedTarget || (e.relatedTarget = e.fromElement === e.target ? e.toElement : e.fromElement), e.preventDefault = function () {
        i.preventDefault && i.preventDefault(),
        e.returnValue = !1,
        i.returnValue = !1,
        e.defaultPrevented = !0
      }, e.defaultPrevented = !1, e.stopPropagation = function () {
        i.stopPropagation && i.stopPropagation(),
        e.cancelBubble = !0,
        i.cancelBubble = !0,
        e.isPropagationStopped = t
      }, e.isPropagationStopped = n, e.stopImmediatePropagation = function () {
        i.stopImmediatePropagation && i.stopImmediatePropagation(),
        e.isImmediatePropagationStopped = t,
        e.stopPropagation()
      }, e.isImmediatePropagationStopped = n, null !== e.clientX && void 0 !== e.clientX) {
        var a = s.documentElement,
        l = s.body;
        e.pageX = e.clientX + (a && a.scrollLeft || l && l.scrollLeft || 0) - (a && a.clientLeft || l && l.clientLeft || 0),
        e.pageY = e.clientY + (a && a.scrollTop || l && l.scrollTop || 0) - (a && a.clientTop || l && l.clientTop || 0)
      }
      e.which = e.charCode || e.keyCode,
      null !== e.button && void 0 !== e.button && (e.button = 1 & e.button ? 0 : 4 & e.button ? 1 : 2 & e.button ? 2 : 0)
    }
    return e
  }
  var ze = !1;
  !function () {
    try {
      var e = Object.defineProperty({
      }, 'passive', {
        get: function () {
          ze = !0
        }
      });
      o.addEventListener('test', null, e),
      o.removeEventListener('test', null, e)
    } catch (e) {
    }
  }();
  var He = [
    'touchstart',
    'touchmove'
  ];
  function Qe(e, t, n) {
    if (Array.isArray(t)) return Ne(Qe, e, t, n);
    var i = Me(e);
    if (i.handlers || (i.handlers = {
    }), i.handlers[t] || (i.handlers[t] = [
    ]), n.guid || (n.guid = Ie()), i.handlers[t].push(n), i.dispatcher || (i.disabled = !1, i.dispatcher = function (t, n) {
      if (!i.disabled) {
        t = Fe(t);
        var r = i.handlers[t.type];
        if (r) for (var o = r.slice(0), s = 0, a = o.length; s < a && !t.isImmediatePropagationStopped(); s++) try {
          o[s].call(e, t, n)
        } catch (e) {
          X.error(e)
        }
      }
    }), 1 === i.handlers[t].length) if (e.addEventListener) {
      var r = !1;
      ze && He.indexOf(t) > - 1 && (r = {
        passive: !0
      }),
      e.addEventListener(t, i.dispatcher, r)
    } else e.attachEvent && e.attachEvent('on' + t, i.dispatcher)
  }
  function Ye(e, t, n) {
    if (Le(e)) {
      var i = Me(e);
      if (i.handlers) {
        if (Array.isArray(t)) return Ne(Ye, e, t, n);
        var r = function (e, t) {
          i.handlers[t] = [
          ],
          Ue(e, t)
        };
        if (void 0 !== t) {
          var o = i.handlers[t];
          if (o) if (n) {
            if (n.guid) for (var s = 0; s < o.length; s++) o[s].guid === n.guid && o.splice(s--, 1);
            Ue(e, t)
          } else r(e, t)
        } else for (var a in i.handlers) Object.prototype.hasOwnProperty.call(i.handlers || {
        }, a) && r(e, a)
      }
    }
  }
  function Ve(e, t, n) {
    var i = Le(e) ? Me(e)  : {
    },
    r = e.parentNode || e.ownerDocument;
    if ('string' == typeof t && (t = {
      type: t,
      target: e
    }), t = Fe(t), i.dispatcher && i.dispatcher.call(e, t, n), r && !t.isPropagationStopped() && !0 === t.bubbles) Ve.call(null, r, t, n);
     else if (!r && !t.defaultPrevented) {
      var o = Me(t.target);
      t.target[t.type] && (o.disabled = !0, 'function' == typeof t.target[t.type] && t.target[t.type](), o.disabled = !1)
    }
    return !t.defaultPrevented
  }
  function Ge(e, t, n) {
    if (Array.isArray(t)) return Ne(Ge, e, t, n);
    var i = function i() {
      Ye(e, t, i),
      n.apply(this, arguments)
    };
    i.guid = n.guid = n.guid || Ie(),
    Qe(e, t, i)
  }
  var We = (Object.freeze || Object) ({
    fixEvent: Fe,
    on: Qe,
    off: Ye,
    trigger: Ve,
    one: Ge
  }),
  qe = !1,
  Ze = void 0,
  Xe = function () {
    if (te()) {
      var e = s.getElementsByTagName('video'),
      t = s.getElementsByTagName('audio'),
      n = s.getElementsByTagName('video-js'),
      i = [
      ];
      if (e && e.length > 0) for (var r = 0, o = e.length; r < o; r++) i.push(e[r]);
      if (t && t.length > 0) for (var a = 0, l = t.length; a < l; a++) i.push(t[a]);
      if (n && n.length > 0) for (var u = 0, c = n.length; u < c; u++) i.push(n[u]);
      if (i && i.length > 0) for (var h = 0, d = i.length; h < d; h++) {
        var f = i[h];
        if (!f || !f.getAttribute) {
          Ke(1);
          break
        }
        void 0 === f.player && null !== f.getAttribute('data-setup') && Ze(f)
      } else qe || Ke(1)
    }
  };
  function Ke(e, t) {
    t && (Ze = t),
    o.setTimeout(Xe, e)
  }
  te() && 'complete' === s.readyState ? qe = !0 : Ge(o, 'load', function () {
    qe = !0
  });
  var Je = function (e) {
    var t = s.createElement('style');
    return t.className = e,
    t
  },
  $e = function (e, t) {
    e.styleSheet ? e.styleSheet.cssText = t : e.textContent = t
  },
  et = function (e, t, n) {
    t.guid || (t.guid = Ie());
    var i = function () {
      return t.apply(e, arguments)
    };
    return i.guid = n ? n + '_' + t.guid : t.guid,
    i
  },
  tt = function (e, t) {
    var n = Date.now();
    return function () {
      var i = Date.now();
      i - n >= t && (e.apply(void 0, arguments), n = i)
    }
  },
  nt = function (e, t, n) {
    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : o,
    r = void 0;
    return function () {
      var o = this,
      s = arguments,
      a = function () {
        r = null,
        a = null,
        n || e.apply(o, s)
      };
      !r && n && e.apply(o, s),
      i.clearTimeout(r),
      r = i.setTimeout(a, t)
    }
  },
  it = function () {
  };
  it.prototype.allowedEvents_ = {
  },
  it.prototype.on = function (e, t) {
    var n = this.addEventListener;
    this.addEventListener = function () {
    },
    Qe(this, e, t),
    this.addEventListener = n
  },
  it.prototype.addEventListener = it.prototype.on,
  it.prototype.off = function (e, t) {
    Ye(this, e, t)
  },
  it.prototype.removeEventListener = it.prototype.off,
  it.prototype.one = function (e, t) {
    var n = this.addEventListener;
    this.addEventListener = function () {
    },
    Ge(this, e, t),
    this.addEventListener = n
  },
  it.prototype.trigger = function (e) {
    var t = e.type || e;
    'string' == typeof e && (e = {
      type: t
    }),
    e = Fe(e),
    this.allowedEvents_[t] && this['on' + t] && this['on' + t](e),
    Ve(this, e)
  },
  it.prototype.dispatchEvent = it.prototype.trigger;
  var rt = function (e) {
    return e instanceof it || !!e.eventBusEl_ && [
      'on',
      'one',
      'off',
      'trigger'
    ].every(function (t) {
      return 'function' == typeof e[t]
    })
  },
  ot = function (e) {
    return 'string' == typeof e && /\S/.test(e) || Array.isArray(e) && !!e.length
  },
  st = function (e) {
    if (!e.nodeName && !rt(e)) throw new Error('Invalid target; must be a DOM node or evented object.')
  },
  at = function (e) {
    if (!ot(e)) throw new Error('Invalid event type; must be a non-empty string or array.')
  },
  lt = function (e) {
    if ('function' != typeof e) throw new Error('Invalid listener; must be a function.')
  },
  ut = function (e, t) {
    var n = t.length < 3 || t[0] === e || t[0] === e.eventBusEl_,
    i = void 0,
    r = void 0,
    o = void 0;
    return n ? (i = e.eventBusEl_, t.length >= 3 && t.shift(), r = t[0], o = t[1])  : (i = t[0], r = t[1], o = t[2]),
    st(i),
    at(r),
    lt(o),
    {
      isTargetingSelf: n,
      target: i,
      type: r,
      listener: o = et(e, o)
    }
  },
  ct = function (e, t, n, i) {
    st(e),
    e.nodeName ? We[t](e, n, i)  : e[t](n, i)
  },
  ht = {
    on: function () {
      for (var e = this, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
      var r = ut(this, n),
      o = r.isTargetingSelf,
      s = r.target,
      a = r.type,
      l = r.listener;
      if (ct(s, 'on', a, l), !o) {
        var u = function () {
          return e.off(s, a, l)
        };
        u.guid = l.guid;
        var c = function () {
          return e.off('dispose', u)
        };
        c.guid = l.guid,
        ct(this, 'on', 'dispose', u),
        ct(s, 'on', 'dispose', c)
      }
    },
    one: function () {
      for (var e = this, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
      var r = ut(this, n),
      o = r.isTargetingSelf,
      s = r.target,
      a = r.type,
      l = r.listener;
      if (o) ct(s, 'one', a, l);
       else {
        var u = function t() {
          for (var n = arguments.length, i = Array(n), r = 0; r < n; r++) i[r] = arguments[r];
          e.off(s, a, t),
          l.apply(null, i)
        };
        u.guid = l.guid,
        ct(s, 'one', a, u)
      }
    },
    off: function (e, t, n) {
      if (!e || ot(e)) Ye(this.eventBusEl_, e, t);
       else {
        var i = e,
        r = t;
        st(i),
        at(r),
        lt(n),
        n = et(this, n),
        this.off('dispose', n),
        i.nodeName ? (Ye(i, r, n), Ye(i, 'dispose', n))  : rt(i) && (i.off(r, n), i.off('dispose', n))
      }
    },
    trigger: function (e, t) {
      return Ve(this.eventBusEl_, e, t)
    }
  };
  function dt(e) {
    var t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
    }).eventBusKey;
    if (t) {
      if (!e[t].nodeName) throw new Error('The eventBusKey "' + t + '" does not refer to an element.');
      e.eventBusEl_ = e[t]
    } else e.eventBusEl_ = oe('span', {
      className: 'vjs-event-bus'
    });
    return Q(e, ht),
    e.on('dispose', function () {
      e.off(),
      o.setTimeout(function () {
        e.eventBusEl_ = null
      }, 0)
    }),
    e
  }
  var ft = {
    state: {
    },
    setState: function (e) {
      var t = this;
      'function' == typeof e && (e = e());
      var n = void 0;
      return H(e, function (e, i) {
        t.state[i] !== e && ((n = n || {
        }) [i] = {
          from: t.state[i],
          to: e
        }),
        t.state[i] = e
      }),
      n && rt(this) && this.trigger({
        changes: n,
        type: 'statechanged'
      }),
      n
    }
  };
  function pt(e, t) {
    return Q(e, ft),
    e.state = Q({
    }, e.state, t),
    'function' == typeof e.handleStateChanged && rt(e) && e.on('statechanged', e.handleStateChanged),
    e
  }
  function vt(e) {
    return 'string' != typeof e ? e : e.charAt(0).toUpperCase() + e.slice(1)
  }
  function gt() {
    for (var e = {
    }, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
    return n.forEach(function (t) {
      t && H(t, function (t, n) {
        V(t) ? (V(e[n]) || (e[n] = {
        }), e[n] = gt(e[n], t))  : e[n] = t
      })
    }),
    e
  }
  var mt = function () {
    function e(t, n, i) {
      if (L(this, e), !t && this.play ? this.player_ = t = this : this.player_ = t, this.options_ = gt({
      }, this.options_), n = this.options_ = gt(this.options_, n), this.id_ = n.id || n.el && n.el.id, !this.id_) {
        var r = t && t.id && t.id() || 'no_player';
        this.id_ = r + '_component_' + Ie()
      }
      this.name_ = n.name || null,
      n.el ? this.el_ = n.el : !1 !== n.createEl && (this.el_ = this.createEl()),
      !1 !== n.evented && dt(this, {
        eventBusKey: this.el_ ? 'el_' : null
      }),
      pt(this, this.constructor.defaultState),
      this.children_ = [
      ],
      this.childIndex_ = {
      },
      this.childNameIndex_ = {
      },
      !1 !== n.initChildren && this.initChildren(),
      this.ready(i),
      !1 !== n.reportTouchActivity && this.enableTouchActivity()
    }
    return e.prototype.dispose = function () {
      if (this.trigger({
        type: 'dispose',
        bubbles: !1
      }), this.children_) for (var e = this.children_.length - 1; e >= 0; e--) this.children_[e].dispose && this.children_[e].dispose();
      this.children_ = null,
      this.childIndex_ = null,
      this.childNameIndex_ = null,
      this.el_ && (this.el_.parentNode && this.el_.parentNode.removeChild(this.el_), De(this.el_), this.el_ = null),
      this.player_ = null
    },
    e.prototype.player = function () {
      return this.player_
    },
    e.prototype.options = function (e) {
      return X.warn('this.options() has been deprecated and will be moved to the constructor in 6.0'),
      e ? (this.options_ = gt(this.options_, e), this.options_)  : this.options_
    },
    e.prototype.el = function () {
      return this.el_
    },
    e.prototype.createEl = function (e, t, n) {
      return oe(e, t, n)
    },
    e.prototype.localize = function (e, t) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e,
      i = this.player_.language && this.player_.language(),
      r = this.player_.languages && this.player_.languages(),
      o = r && r[i],
      s = i && i.split('-') [0],
      a = r && r[s],
      l = n;
      return o && o[e] ? l = o[e] : a && a[e] && (l = a[e]),
      t && (l = l.replace(/\{(\d+)\}/g, function (e, n) {
        var i = t[n - 1],
        r = i;
        return void 0 === i && (r = e),
        r
      })),
      l
    },
    e.prototype.contentEl = function () {
      return this.contentEl_ || this.el_
    },
    e.prototype.id = function () {
      return this.id_
    },
    e.prototype.name = function () {
      return this.name_
    },
    e.prototype.children = function () {
      return this.children_
    },
    e.prototype.getChildById = function (e) {
      return this.childIndex_[e]
    },
    e.prototype.getChild = function (e) {
      if (e) return e = vt(e),
      this.childNameIndex_[e]
    },
    e.prototype.addChild = function (t) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
      },
      i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.children_.length,
      r = void 0,
      o = void 0;
      if ('string' == typeof t) {
        o = vt(t);
        var s = n.componentClass || o;
        n.name = o;
        var a = e.getComponent(s);
        if (!a) throw new Error('Component ' + s + ' does not exist');
        if ('function' != typeof a) return null;
        r = new a(this.player_ || this, n)
      } else r = t;
      if (this.children_.splice(i, 0, r), 'function' == typeof r.id && (this.childIndex_[r.id()] = r), (o = o || r.name && vt(r.name())) && (this.childNameIndex_[o] = r), 'function' == typeof r.el && r.el()) {
        var l = this.contentEl().children[i] || null;
        this.contentEl().insertBefore(r.el(), l)
      }
      return r
    },
    e.prototype.removeChild = function (e) {
      if ('string' == typeof e && (e = this.getChild(e)), e && this.children_) {
        for (var t = !1, n = this.children_.length - 1; n >= 0; n--) if (this.children_[n] === e) {
          t = !0,
          this.children_.splice(n, 1);
          break
        }
        if (t) {
          this.childIndex_[e.id()] = null,
          this.childNameIndex_[e.name()] = null;
          var i = e.el();
          i && i.parentNode === this.contentEl() && this.contentEl().removeChild(e.el())
        }
      }
    },
    e.prototype.initChildren = function () {
      var t = this,
      n = this.options_.children;
      if (n) {
        var i = this.options_,
        r = void 0,
        o = e.getComponent('Tech');
        (r = Array.isArray(n) ? n : Object.keys(n)).concat(Object.keys(this.options_).filter(function (e) {
          return !r.some(function (t) {
            return 'string' == typeof t ? e === t : e === t.name
          })
        })).map(function (e) {
          var i = void 0,
          r = void 0;
          return 'string' == typeof e ? r = n[i = e] || t.options_[i] || {
          }
           : (i = e.name, r = e),
          {
            name: i,
            opts: r
          }
        }).filter(function (t) {
          var n = e.getComponent(t.opts.componentClass || vt(t.name));
          return n && !o.isTech(n)
        }).forEach(function (e) {
          var n = e.name,
          r = e.opts;
          if (void 0 !== i[n] && (r = i[n]), !1 !== r) {
            !0 === r && (r = {
            }),
            r.playerOptions = t.options_.playerOptions;
            var o = t.addChild(n, r);
            o && (t[n] = o)
          }
        })
      }
    },
    e.prototype.buildCSSClass = function () {
      return ''
    },
    e.prototype.ready = function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      if (e) return this.isReady_ ? void (t ? e.call(this)  : this.setTimeout(e, 1))  : (this.readyQueue_ = this.readyQueue_ || [
      ], void this.readyQueue_.push(e))
    },
    e.prototype.triggerReady = function () {
      this.isReady_ = !0,
      this.setTimeout(function () {
        var e = this.readyQueue_;
        this.readyQueue_ = [
        ],
        e && e.length > 0 && e.forEach(function (e) {
          e.call(this)
        }, this),
        this.trigger('ready')
      }, 1)
    },
    e.prototype.$ = function (e, t) {
      return Ce(e, t || this.contentEl())
    },
    e.prototype.$$ = function (e, t) {
      return xe(e, t || this.contentEl())
    },
    e.prototype.hasClass = function (e) {
      return le(this.el_, e)
    },
    e.prototype.addClass = function (e) {
      ue(this.el_, e)
    },
    e.prototype.removeClass = function (e) {
      ce(this.el_, e)
    },
    e.prototype.toggleClass = function (e, t) {
      he(this.el_, e, t)
    },
    e.prototype.show = function () {
      this.removeClass('vjs-hidden')
    },
    e.prototype.hide = function () {
      this.addClass('vjs-hidden')
    },
    e.prototype.lockShowing = function () {
      this.addClass('vjs-lock-showing')
    },
    e.prototype.unlockShowing = function () {
      this.removeClass('vjs-lock-showing')
    },
    e.prototype.getAttribute = function (e) {
      return pe(this.el_, e)
    },
    e.prototype.setAttribute = function (e, t) {
      ve(this.el_, e, t)
    },
    e.prototype.removeAttribute = function (e) {
      ge(this.el_, e)
    },
    e.prototype.width = function (e, t) {
      return this.dimension('width', e, t)
    },
    e.prototype.height = function (e, t) {
      return this.dimension('height', e, t)
    },
    e.prototype.dimensions = function (e, t) {
      this.width(e, !0),
      this.height(t)
    },
    e.prototype.dimension = function (e, t, n) {
      if (void 0 !== t) return null !== t && t == t || (t = 0),
      - 1 !== ('' + t).indexOf('%') || - 1 !== ('' + t).indexOf('px') ? this.el_.style[e] = t : this.el_.style[e] = 'auto' === t ? '' : t + 'px',
      void (n || this.trigger('componentresize'));
      if (!this.el_) return 0;
      var i = this.el_.style[e],
      r = i.indexOf('px');
      return - 1 !== r ? parseInt(i.slice(0, r), 10)  : parseInt(this.el_['offset' + vt(e)], 10)
    },
    e.prototype.currentDimension = function (e) {
      var t = 0;
      if ('width' !== e && 'height' !== e) throw new Error('currentDimension only accepts width or height value');
      if ('function' == typeof o.getComputedStyle) {
        var n = o.getComputedStyle(this.el_);
        t = n.getPropertyValue(e) || n[e]
      }
      if (0 === (t = parseFloat(t))) {
        var i = 'offset' + vt(e);
        t = this.el_[i]
      }
      return t
    },
    e.prototype.currentDimensions = function () {
      return {
        width: this.currentDimension('width'),
        height: this.currentDimension('height')
      }
    },
    e.prototype.currentWidth = function () {
      return this.currentDimension('width')
    },
    e.prototype.currentHeight = function () {
      return this.currentDimension('height')
    },
    e.prototype.focus = function () {
      this.el_.focus()
    },
    e.prototype.blur = function () {
      this.el_.blur()
    },
    e.prototype.emitTapEvents = function () {
      var e = 0,
      t = null,
      n = void 0;
      this.on('touchstart', function (i) {
        1 === i.touches.length && (t = {
          pageX: i.touches[0].pageX,
          pageY: i.touches[0].pageY
        }, e = (new Date).getTime(), n = !0)
      }),
      this.on('touchmove', function (e) {
        if (e.touches.length > 1) n = !1;
         else if (t) {
          var i = e.touches[0].pageX - t.pageX,
          r = e.touches[0].pageY - t.pageY;
          Math.sqrt(i * i + r * r) > 10 && (n = !1)
        }
      });
      var i = function () {
        n = !1
      };
      this.on('touchleave', i),
      this.on('touchcancel', i),
      this.on('touchend', function (i) {
        (t = null, !0 === n) && ((new Date).getTime() - e < 200 && (i.preventDefault(), this.trigger('tap')))
      })
    },
    e.prototype.enableTouchActivity = function () {
      if (this.player() && this.player().reportUserActivity) {
        var e = et(this.player(), this.player().reportUserActivity),
        t = void 0;
        this.on('touchstart', function () {
          e(),
          this.clearInterval(t),
          t = this.setInterval(e, 250)
        });
        var n = function (n) {
          e(),
          this.clearInterval(t)
        };
        this.on('touchmove', e),
        this.on('touchend', n),
        this.on('touchcancel', n)
      }
    },
    e.prototype.setTimeout = function (e, t) {
      var n = this;
      e = et(this, e);
      var i = o.setTimeout(e, t),
      r = function () {
        return n.clearTimeout(i)
      };
      return r.guid = 'vjs-timeout-' + i,
      this.on('dispose', r),
      i
    },
    e.prototype.clearTimeout = function (e) {
      o.clearTimeout(e);
      var t = function () {
      };
      return t.guid = 'vjs-timeout-' + e,
      this.off('dispose', t),
      e
    },
    e.prototype.setInterval = function (e, t) {
      var n = this;
      e = et(this, e);
      var i = o.setInterval(e, t),
      r = function () {
        return n.clearInterval(i)
      };
      return r.guid = 'vjs-interval-' + i,
      this.on('dispose', r),
      i
    },
    e.prototype.clearInterval = function (e) {
      o.clearInterval(e);
      var t = function () {
      };
      return t.guid = 'vjs-interval-' + e,
      this.off('dispose', t),
      e
    },
    e.prototype.requestAnimationFrame = function (e) {
      var t = this;
      if (this.supportsRaf_) {
        e = et(this, e);
        var n = o.requestAnimationFrame(e),
        i = function () {
          return t.cancelAnimationFrame(n)
        };
        return i.guid = 'vjs-raf-' + n,
        this.on('dispose', i),
        n
      }
      return this.setTimeout(e, 1000 / 60)
    },
    e.prototype.cancelAnimationFrame = function (e) {
      if (this.supportsRaf_) {
        o.cancelAnimationFrame(e);
        var t = function () {
        };
        return t.guid = 'vjs-raf-' + e,
        this.off('dispose', t),
        e
      }
      return this.clearTimeout(e)
    },
    e.registerComponent = function (t, n) {
      if ('string' != typeof t || !t) throw new Error('Illegal component name, "' + t + '"; must be a non-empty string.');
      var i = e.getComponent('Tech'),
      r = i && i.isTech(n),
      o = e === n || e.prototype.isPrototypeOf(n.prototype);
      if (r || !o) {
        var s = void 0;
        throw s = r ? 'techs must be registered using Tech.registerTech()' : 'must be a Component subclass',
        new Error('Illegal component, "' + t + '"; ' + s + '.')
      }
      t = vt(t),
      e.components_ || (e.components_ = {
      });
      var a = e.getComponent('Player');
      if ('Player' === t && a && a.players) {
        var l = a.players,
        u = Object.keys(l);
        if (l && u.length > 0 && u.map(function (e) {
          return l[e]
        }).every(Boolean)) throw new Error('Can not register Player component after player has been created.')
      }
      return e.components_[t] = n,
      n
    },
    e.getComponent = function (t) {
      if (t) return t = vt(t),
      e.components_ && e.components_[t] ? e.components_[t] : void 0
    },
    e
  }();
  function At(e, t, n, i) {
    return function (e, t, n) {
      if ('number' != typeof t || t < 0 || t > n) throw new Error('Failed to execute \'' + e + '\' on \'TimeRanges\': The index provided (' + t + ') is non-numeric or out of bounds (0-' + n + ').')
    }(e, i, n.length - 1),
    n[i][t]
  }
  function yt(e) {
    return void 0 === e || 0 === e.length ? {
      length: 0,
      start: function () {
        throw new Error('This TimeRanges object is empty')
      },
      end: function () {
        throw new Error('This TimeRanges object is empty')
      }
    }
     : {
      length: e.length,
      start: At.bind(null, 'start', 0, e),
      end: At.bind(null, 'end', 1, e)
    }
  }
  function bt(e, t) {
    return Array.isArray(e) ? yt(e)  : void 0 === e || void 0 === t ? yt()  : yt([[e,
    t]])
  }
  function _t(e, t) {
    var n = 0,
    i = void 0,
    r = void 0;
    if (!t) return 0;
    e && e.length || (e = bt(0, 0));
    for (var o = 0; o < e.length; o++) i = e.start(o),
    (r = e.end(o)) > t && (r = t),
    n += r - i;
    return n / t
  }
  mt.prototype.supportsRaf_ = 'function' == typeof o.requestAnimationFrame && 'function' == typeof o.cancelAnimationFrame,
  mt.registerComponent('Component', mt);
  for (var wt = {
  }, Tt = [
    ['requestFullscreen',
    'exitFullscreen',
    'fullscreenElement',
    'fullscreenEnabled',
    'fullscreenchange',
    'fullscreenerror'],
    [
      'webkitRequestFullscreen',
      'webkitExitFullscreen',
      'webkitFullscreenElement',
      'webkitFullscreenEnabled',
      'webkitfullscreenchange',
      'webkitfullscreenerror'
    ],
    [
      'webkitRequestFullScreen',
      'webkitCancelFullScreen',
      'webkitCurrentFullScreenElement',
      'webkitCancelFullScreen',
      'webkitfullscreenchange',
      'webkitfullscreenerror'
    ],
    [
      'mozRequestFullScreen',
      'mozCancelFullScreen',
      'mozFullScreenElement',
      'mozFullScreenEnabled',
      'mozfullscreenchange',
      'mozfullscreenerror'
    ],
    [
      'msRequestFullscreen',
      'msExitFullscreen',
      'msFullscreenElement',
      'msFullscreenEnabled',
      'MSFullscreenChange',
      'MSFullscreenError'
    ]
  ], kt = Tt[0], Et = void 0, St = 0; St < Tt.length; St++) if (Tt[St][1] in s) {
    Et = Tt[St];
    break
  }
  if (Et) for (var jt = 0; jt < Et.length; jt++) wt[kt[jt]] = Et[jt];
  function Ct(e) {
    if (e instanceof Ct) return e;
    'number' == typeof e ? this.code = e : 'string' == typeof e ? this.message = e : Y(e) && ('number' == typeof e.code && (this.code = e.code), Q(this, e)),
    this.message || (this.message = Ct.defaultMessages[this.code] || '')
  }
  Ct.prototype.code = 0,
  Ct.prototype.message = '',
  Ct.prototype.status = null,
  Ct.errorTypes = [
    'MEDIA_ERR_CUSTOM',
    'MEDIA_ERR_ABORTED',
    'MEDIA_ERR_NETWORK',
    'MEDIA_ERR_DECODE',
    'MEDIA_ERR_SRC_NOT_SUPPORTED',
    'MEDIA_ERR_ENCRYPTED'
  ],
  Ct.defaultMessages = {
    1: 'You aborted the media playback',
    2: 'A network error caused the media download to fail part-way.',
    3: 'The media playback was aborted due to a corruption problem or because the media used features your browser did not support.',
    4: 'The media could not be loaded, either because the server or network failed or because the format is not supported.',
    5: 'The media is encrypted and we do not have the keys to decrypt it.'
  };
  for (var xt = 0; xt < Ct.errorTypes.length; xt++) Ct[Ct.errorTypes[xt]] = xt,
  Ct.prototype[Ct.errorTypes[xt]] = xt;
  function Bt(e) {
    return void 0 !== e && null !== e && 'function' == typeof e.then
  }
  function Ot(e) {
    Bt(e) && e.then(null, function (e) {
    })
  }
  var It = function (e) {
    return ['kind',
    'label',
    'language',
    'id',
    'inBandMetadataTrackDispatchType',
    'mode',
    'src'].reduce(function (t, n, i) {
      return e[n] && (t[n] = e[n]),
      t
    }, {
      cues: e.cues && Array.prototype.map.call(e.cues, function (e) {
        return {
          startTime: e.startTime,
          endTime: e.endTime,
          text: e.text,
          id: e.id
        }
      })
    })
  },
  Pt = function (e) {
    var t = e.$$('track'),
    n = Array.prototype.map.call(t, function (e) {
      return e.track
    });
    return Array.prototype.map.call(t, function (e) {
      var t = It(e.track);
      return e.src && (t.src = e.src),
      t
    }).concat(Array.prototype.filter.call(e.textTracks(), function (e) {
      return - 1 === n.indexOf(e)
    }).map(It))
  },
  Rt = function (e, t) {
    return e.forEach(function (e) {
      var n = t.addRemoteTextTrack(e).track;
      !e.src && e.cues && e.cues.forEach(function (e) {
        return n.addCue(e)
      })
    }),
    t.textTracks()
  },
  Mt = 'vjs-modal-dialog',
  Lt = function (e) {
    function t(n, i) {
      L(this, t);
      var r = U(this, e.call(this, n, i));
      return r.opened_ = r.hasBeenOpened_ = r.hasBeenFilled_ = !1,
      r.closeable(!r.options_.uncloseable),
      r.content(r.options_.content),
      r.contentEl_ = oe('div', {
        className: Mt + '-content'
      }, {
        role: 'document'
      }),
      r.descEl_ = oe('p', {
        className: Mt + '-description vjs-control-text',
        id: r.el().getAttribute('aria-describedby')
      }),
      se(r.descEl_, r.description()),
      r.el_.appendChild(r.descEl_),
      r.el_.appendChild(r.contentEl_),
      r
    }
    return D(t, e),
    t.prototype.createEl = function () {
      return e.prototype.createEl.call(this, 'div', {
        className: this.buildCSSClass(),
        tabIndex: - 1
      }, {
        'aria-describedby': this.id() + '_description',
        'aria-hidden': 'true',
        'aria-label': this.label(),
        role: 'dialog'
      })
    },
    t.prototype.dispose = function () {
      this.contentEl_ = null,
      this.descEl_ = null,
      this.previouslyActiveEl_ = null,
      e.prototype.dispose.call(this)
    },
    t.prototype.buildCSSClass = function () {
      return Mt + ' vjs-hidden ' + e.prototype.buildCSSClass.call(this)
    },
    t.prototype.handleKeyPress = function (e) {
      27 === e.which && this.closeable() && this.close()
    },
    t.prototype.label = function () {
      return this.localize(this.options_.label || 'Modal Window')
    },
    t.prototype.description = function () {
      var e = this.options_.description || this.localize('This is a modal window.');
      return this.closeable() && (e += ' ' + this.localize('This modal can be closed by pressing the Escape key or activating the close button.')),
      e
    },
    t.prototype.open = function () {
      if (!this.opened_) {
        var e = this.player();
        this.trigger('beforemodalopen'),
        this.opened_ = !0,
        (this.options_.fillAlways || !this.hasBeenOpened_ && !this.hasBeenFilled_) && this.fill(),
        this.wasPlaying_ = !e.paused(),
        this.options_.pauseOnOpen && this.wasPlaying_ && e.pause(),
        this.closeable() && this.on(this.el_.ownerDocument, 'keydown', et(this, this.handleKeyPress)),
        this.hadControls_ = e.controls(),
        e.controls(!1),
        this.show(),
        this.conditionalFocus_(),
        this.el().setAttribute('aria-hidden', 'false'),
        this.trigger('modalopen'),
        this.hasBeenOpened_ = !0
      }
    },
    t.prototype.opened = function (e) {
      return 'boolean' == typeof e && this[e ? 'open' : 'close'](),
      this.opened_
    },
    t.prototype.close = function () {
      if (this.opened_) {
        var e = this.player();
        this.trigger('beforemodalclose'),
        this.opened_ = !1,
        this.wasPlaying_ && this.options_.pauseOnOpen && e.play(),
        this.closeable() && this.off(this.el_.ownerDocument, 'keydown', et(this, this.handleKeyPress)),
        this.hadControls_ && e.controls(!0),
        this.hide(),
        this.el().setAttribute('aria-hidden', 'true'),
        this.trigger('modalclose'),
        this.conditionalBlur_(),
        this.options_.temporary && this.dispose()
      }
    },
    t.prototype.closeable = function (e) {
      if ('boolean' == typeof e) {
        var t = this.closeable_ = !!e,
        n = this.getChild('closeButton');
        if (t && !n) {
          var i = this.contentEl_;
          this.contentEl_ = this.el_,
          n = this.addChild('closeButton', {
            controlText: 'Close Modal Dialog'
          }),
          this.contentEl_ = i,
          this.on(n, 'close', this.close)
        }
        !t && n && (this.off(n, 'close', this.close), this.removeChild(n), n.dispose())
      }
      return this.closeable_
    },
    t.prototype.fill = function () {
      this.fillWith(this.content())
    },
    t.prototype.fillWith = function (e) {
      var t = this.contentEl(),
      n = t.parentNode,
      i = t.nextSibling;
      this.trigger('beforemodalfill'),
      this.hasBeenFilled_ = !0,
      n.removeChild(t),
      this.empty(),
      Se(t, e),
      this.trigger('modalfill'),
      i ? n.insertBefore(t, i)  : n.appendChild(t);
      var r = this.getChild('closeButton');
      r && n.appendChild(r.el_)
    },
    t.prototype.empty = function () {
      this.trigger('beforemodalempty'),
      Te(this.contentEl()),
      this.trigger('modalempty')
    },
    t.prototype.content = function (e) {
      return void 0 !== e && (this.content_ = e),
      this.content_
    },
    t.prototype.conditionalFocus_ = function () {
      var e = s.activeElement,
      t = this.player_.el_;
      this.previouslyActiveEl_ = null,
      (t.contains(e) || t === e) && (this.previouslyActiveEl_ = e, this.focus(), this.on(s, 'keydown', this.handleKeyDown))
    },
    t.prototype.conditionalBlur_ = function () {
      this.previouslyActiveEl_ && (this.previouslyActiveEl_.focus(), this.previouslyActiveEl_ = null),
      this.off(s, 'keydown', this.handleKeyDown)
    },
    t.prototype.handleKeyDown = function (e) {
      if (9 === e.which) {
        for (var t = this.focusableEls_(), n = this.el_.querySelector(':focus'), i = void 0, r = 0; r < t.length; r++) if (n === t[r]) {
          i = r;
          break
        }
        s.activeElement === this.el_ && (i = 0),
        e.shiftKey && 0 === i ? (t[t.length - 1].focus(), e.preventDefault())  : e.shiftKey || i !== t.length - 1 || (t[0].focus(), e.preventDefault())
      }
    },
    t.prototype.focusableEls_ = function () {
      var e = this.el_.querySelectorAll('*');
      return Array.prototype.filter.call(e, function (e) {
        return (e instanceof o.HTMLAnchorElement || e instanceof o.HTMLAreaElement) && e.hasAttribute('href') || (e instanceof o.HTMLInputElement || e instanceof o.HTMLSelectElement || e instanceof o.HTMLTextAreaElement || e instanceof o.HTMLButtonElement) && !e.hasAttribute('disabled') || e instanceof o.HTMLIFrameElement || e instanceof o.HTMLObjectElement || e instanceof o.HTMLEmbedElement || e.hasAttribute('tabindex') && - 1 !== e.getAttribute('tabindex') || e.hasAttribute('contenteditable')
      })
    },
    t
  }(mt);
  Lt.prototype.options_ = {
    pauseOnOpen: !0,
    temporary: !0
  },
  mt.registerComponent('ModalDialog', Lt);
  var Dt = function (e) {
    function t() {
      var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [
      ],
      i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      L(this, t);
      var r = U(this, e.call(this));
      if (!i && (i = r, C)) for (var o in i = s.createElement('custom'), t.prototype) 'constructor' !== o && (i[o] = t.prototype[o]);
      i.tracks_ = [
      ],
      Object.defineProperty(i, 'length', {
        get: function () {
          return this.tracks_.length
        }
      });
      for (var a = 0; a < n.length; a++) i.addTrack(n[a]);
      return U(r, i)
    }
    return D(t, e),
    t.prototype.addTrack = function (e) {
      var t = this.tracks_.length;
      '' + t in this || Object.defineProperty(this, t, {
        get: function () {
          return this.tracks_[t]
        }
      }),
      - 1 === this.tracks_.indexOf(e) && (this.tracks_.push(e), this.trigger({
        track: e,
        type: 'addtrack'
      }))
    },
    t.prototype.removeTrack = function (e) {
      for (var t = void 0, n = 0, i = this.length; n < i; n++) if (this[n] === e) {
        (t = this[n]).off && t.off(),
        this.tracks_.splice(n, 1);
        break
      }
      t && this.trigger({
        track: t,
        type: 'removetrack'
      })
    },
    t.prototype.getTrackById = function (e) {
      for (var t = null, n = 0, i = this.length; n < i; n++) {
        var r = this[n];
        if (r.id === e) {
          t = r;
          break
        }
      }
      return t
    },
    t
  }(it);
  for (var Ut in Dt.prototype.allowedEvents_ = {
    change: 'change',
    addtrack: 'addtrack',
    removetrack: 'removetrack'
  }, Dt.prototype.allowedEvents_) Dt.prototype['on' + Ut] = null;
  var Nt = function (e, t) {
    for (var n = 0; n < e.length; n++) Object.keys(e[n]).length && t.id !== e[n].id && (e[n].enabled = !1)
  },
  Ft = function (e) {
    function t() {
      var n,
      i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [
      ];
      L(this, t);
      for (var r = void 0, o = i.length - 1; o >= 0; o--) if (i[o].enabled) {
        Nt(i, i[o]);
        break
      }
      if (C) {
        for (var a in r = s.createElement('custom'), Dt.prototype) 'constructor' !== a && (r[a] = Dt.prototype[a]);
        for (var l in t.prototype) 'constructor' !== l && (r[l] = t.prototype[l])
      }
      return (r = n = U(this, e.call(this, i, r))).changing_ = !1,
      U(n, r)
    }
    return D(t, e),
    t.prototype.addTrack = function (t) {
      var n = this;
      t.enabled && Nt(this, t),
      e.prototype.addTrack.call(this, t),
      t.addEventListener && t.addEventListener('enabledchange', function () {
        n.changing_ || (n.changing_ = !0, Nt(n, t), n.changing_ = !1, n.trigger('change'))
      })
    },
    t
  }(Dt),
  zt = function (e, t) {
    for (var n = 0; n < e.length; n++) Object.keys(e[n]).length && t.id !== e[n].id && (e[n].selected = !1)
  },
  Ht = function (e) {
    function t() {
      var n,
      i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [
      ];
      L(this, t);
      for (var r = void 0, o = i.length - 1; o >= 0; o--) if (i[o].selected) {
        zt(i, i[o]);
        break
      }
      if (C) {
        for (var a in r = s.createElement('custom'), Dt.prototype) 'constructor' !== a && (r[a] = Dt.prototype[a]);
        for (var l in t.prototype) 'constructor' !== l && (r[l] = t.prototype[l])
      }
      return (r = n = U(this, e.call(this, i, r))).changing_ = !1,
      Object.defineProperty(r, 'selectedIndex', {
        get: function () {
          for (var e = 0; e < this.length; e++) if (this[e].selected) return e;
          return - 1
        },
        set: function () {
        }
      }),
      U(n, r)
    }
    return D(t, e),
    t.prototype.addTrack = function (t) {
      var n = this;
      t.selected && zt(this, t),
      e.prototype.addTrack.call(this, t),
      t.addEventListener && t.addEventListener('selectedchange', function () {
        n.changing_ || (n.changing_ = !0, zt(n, t), n.changing_ = !1, n.trigger('change'))
      })
    },
    t
  }(Dt),
  Qt = function (e) {
    function t() {
      var n,
      i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [
      ];
      L(this, t);
      var r = void 0;
      if (C) {
        for (var o in r = s.createElement('custom'), Dt.prototype) 'constructor' !== o && (r[o] = Dt.prototype[o]);
        for (var a in t.prototype) 'constructor' !== a && (r[a] = t.prototype[a])
      }
      return n = U(this, e.call(this, i, r)),
      U(n, r = n)
    }
    return D(t, e),
    t.prototype.addTrack = function (t) {
      e.prototype.addTrack.call(this, t),
      t.addEventListener('modechange', et(this, function () {
        this.trigger('change')
      }));
      - 1 === ['metadata',
      'chapters'].indexOf(t.kind) && t.addEventListener('modechange', et(this, function () {
        this.trigger('selectedlanguagechange')
      }))
    },
    t
  }(Dt),
  Yt = function () {
    function e() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [
      ];
      L(this, e);
      var n = this;
      if (C) for (var i in n = s.createElement('custom'), e.prototype) 'constructor' !== i && (n[i] = e.prototype[i]);
      n.trackElements_ = [
      ],
      Object.defineProperty(n, 'length', {
        get: function () {
          return this.trackElements_.length
        }
      });
      for (var r = 0, o = t.length; r < o; r++) n.addTrackElement_(t[r]);
      if (C) return n
    }
    return e.prototype.addTrackElement_ = function (e) {
      var t = this.trackElements_.length;
      '' + t in this || Object.defineProperty(this, t, {
        get: function () {
          return this.trackElements_[t]
        }
      }),
      - 1 === this.trackElements_.indexOf(e) && this.trackElements_.push(e)
    },
    e.prototype.getTrackElementByTrack_ = function (e) {
      for (var t = void 0, n = 0, i = this.trackElements_.length; n < i; n++) if (e === this.trackElements_[n].track) {
        t = this.trackElements_[n];
        break
      }
      return t
    },
    e.prototype.removeTrackElement_ = function (e) {
      for (var t = 0, n = this.trackElements_.length; t < n; t++) if (e === this.trackElements_[t]) {
        this.trackElements_.splice(t, 1);
        break
      }
    },
    e
  }(),
  Vt = function () {
    function e(t) {
      L(this, e);
      var n = this;
      if (C) for (var i in n = s.createElement('custom'), e.prototype) 'constructor' !== i && (n[i] = e.prototype[i]);
      if (e.prototype.setCues_.call(n, t), Object.defineProperty(n, 'length', {
        get: function () {
          return this.length_
        }
      }), C) return n
    }
    return e.prototype.setCues_ = function (e) {
      var t = this.length || 0,
      n = 0,
      i = e.length;
      this.cues_ = e,
      this.length_ = e.length;
      var r = function (e) {
        '' + e in this || Object.defineProperty(this, '' + e, {
          get: function () {
            return this.cues_[e]
          }
        })
      };
      if (t < i) for (n = t; n < i; n++) r.call(this, n)
    },
    e.prototype.getCueById = function (e) {
      for (var t = null, n = 0, i = this.length; n < i; n++) {
        var r = this[n];
        if (r.id === e) {
          t = r;
          break
        }
      }
      return t
    },
    e
  }(),
  Gt = {
    alternative: 'alternative',
    captions: 'captions',
    main: 'main',
    sign: 'sign',
    subtitles: 'subtitles',
    commentary: 'commentary'
  },
  Wt = {
    alternative: 'alternative',
    descriptions: 'descriptions',
    main: 'main',
    'main-desc': 'main-desc',
    translation: 'translation',
    commentary: 'commentary'
  },
  qt = {
    subtitles: 'subtitles',
    captions: 'captions',
    descriptions: 'descriptions',
    chapters: 'chapters',
    metadata: 'metadata'
  },
  Zt = {
    disabled: 'disabled',
    hidden: 'hidden',
    showing: 'showing'
  },
  Xt = function (e) {
    function t() {
      var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
      };
      L(this, t);
      var i = U(this, e.call(this)),
      r = i;
      if (C) for (var o in r = s.createElement('custom'), t.prototype) 'constructor' !== o && (r[o] = t.prototype[o]);
      var a = {
        id: n.id || 'vjs_track_' + Ie(),
        kind: n.kind || '',
        label: n.label || '',
        language: n.language || ''
      },
      l = function (e) {
        Object.defineProperty(r, e, {
          get: function () {
            return a[e]
          },
          set: function () {
          }
        })
      };
      for (var u in a) l(u);
      return U(i, r)
    }
    return D(t, e),
    t
  }(it),
  Kt = function (e) {
    var t = [
      'protocol',
      'hostname',
      'port',
      'pathname',
      'search',
      'hash',
      'host'
    ],
    n = s.createElement('a');
    n.href = e;
    var i = '' === n.host && 'file:' !== n.protocol,
    r = void 0;
    i && ((r = s.createElement('div')).innerHTML = '<a href="' + e + '"></a>', n = r.firstChild, r.setAttribute('style', 'display:none; position:absolute;'), s.body.appendChild(r));
    for (var a = {
    }, l = 0; l < t.length; l++) a[t[l]] = n[t[l]];
    return 'http:' === a.protocol && (a.host = a.host.replace(/:80$/, '')),
    'https:' === a.protocol && (a.host = a.host.replace(/:443$/, '')),
    a.protocol || (a.protocol = o.location.protocol),
    i && s.body.removeChild(r),
    a
  },
  Jt = function (e) {
    if ('string' == typeof e) {
      var t = /^(\/?)([\s\S]*?)((?:\.{1,2}|[^\/]+?)(\.([^\.\/\?]+)))(?:[\/]*|[\?].*)$/i.exec(e);
      if (t) return t.pop().toLowerCase()
    }
    return ''
  },
  $t = function (e) {
    var t = o.location,
    n = Kt(e);
    return (':' === n.protocol ? t.protocol : n.protocol) + n.host !== t.protocol + t.host
  },
  en = (Object.freeze || Object) ({
    parseUrl: Kt,
    getAbsoluteURL: function (e) {
      if (!e.match(/^https?:\/\//)) {
        var t = s.createElement('div');
        t.innerHTML = '<a href="' + e + '">x</a>',
        e = t.firstChild.href
      }
      return e
    },
    getFileExtension: Jt,
    isCrossOrigin: $t
  }),
  tn = function (e, t) {
    var n = new o.WebVTT.Parser(o, o.vttjs, o.WebVTT.StringDecoder()),
    i = [
    ];
    n.oncue = function (e) {
      t.addCue(e)
    },
    n.onparsingerror = function (e) {
      i.push(e)
    },
    n.onflush = function () {
      t.trigger({
        type: 'loadeddata',
        target: t
      })
    },
    n.parse(e),
    i.length > 0 && (o.console && o.console.groupCollapsed && o.console.groupCollapsed('Text Track parsing errors for ' + t.src), i.forEach(function (e) {
      return X.error(e)
    }), o.console && o.console.groupEnd && o.console.groupEnd()),
    n.flush()
  },
  nn = function (e, t) {
    var n = {
      uri: e
    },
    i = $t(e);
    i && (n.cors = i),
    u(n, et(this, function (e, n, i) {
      if (e) return X.error(e, n);
      if (t.loaded_ = !0, 'function' != typeof o.WebVTT) {
        if (t.tech_) {
          var r = function () {
            return tn(i, t)
          };
          t.tech_.on('vttjsloaded', r),
          t.tech_.on('vttjserror', function () {
            X.error('vttjs failed to load, stopping trying to process ' + t.src),
            t.tech_.off('vttjsloaded', r)
          })
        }
      } else tn(i, t)
    }))
  },
  rn = function (e) {
    function t() {
      var n,
      i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
      };
      if (L(this, t), !i.tech) throw new Error('A tech was not provided.');
      var r = gt(i, {
        kind: qt[i.kind] || 'subtitles',
        language: i.language || i.srclang || ''
      }),
      o = Zt[r.mode] || 'disabled',
      s = r.default;
      'metadata' !== r.kind && 'chapters' !== r.kind || (o = 'hidden');
      var a = n = U(this, e.call(this, r));
      if (a.tech_ = r.tech, C) for (var l in t.prototype) 'constructor' !== l && (a[l] = t.prototype[l]);
      a.cues_ = [
      ],
      a.activeCues_ = [
      ];
      var u = new Vt(a.cues_),
      c = new Vt(a.activeCues_),
      h = !1,
      d = et(a, function () {
        this.activeCues,
        h && (this.trigger('cuechange'), h = !1)
      });
      return 'disabled' !== o && a.tech_.ready(function () {
        a.tech_.on('timeupdate', d)
      }, !0),
      Object.defineProperty(a, 'default', {
        get: function () {
          return s
        },
        set: function () {
        }
      }),
      Object.defineProperty(a, 'mode', {
        get: function () {
          return o
        },
        set: function (e) {
          var t = this;
          Zt[e] && ('showing' === (o = e) && this.tech_.ready(function () {
            t.tech_.on('timeupdate', d)
          }, !0), this.trigger('modechange'))
        }
      }),
      Object.defineProperty(a, 'cues', {
        get: function () {
          return this.loaded_ ? u : null
        },
        set: function () {
        }
      }),
      Object.defineProperty(a, 'activeCues', {
        get: function () {
          if (!this.loaded_) return null;
          if (0 === this.cues.length) return c;
          for (var e = this.tech_.currentTime(), t = [
          ], n = 0, i = this.cues.length; n < i; n++) {
            var r = this.cues[n];
            r.startTime <= e && r.endTime >= e ? t.push(r)  : r.startTime === r.endTime && r.startTime <= e && r.startTime + 0.5 >= e && t.push(r)
          }
          if (h = !1, t.length !== this.activeCues_.length) h = !0;
           else for (var o = 0; o < t.length; o++) - 1 === this.activeCues_.indexOf(t[o]) && (h = !0);
          return this.activeCues_ = t,
          c.setCues_(this.activeCues_),
          c
        },
        set: function () {
        }
      }),
      r.src ? (a.src = r.src, nn(r.src, a))  : a.loaded_ = !0,
      U(n, a)
    }
    return D(t, e),
    t.prototype.addCue = function (e) {
      var t = e;
      if (o.vttjs && !(e instanceof o.vttjs.VTTCue)) {
        for (var n in t = new o.vttjs.VTTCue(e.startTime, e.endTime, e.text), e) n in t || (t[n] = e[n]);
        t.id = e.id,
        t.originalCue_ = e
      }
      for (var i = this.tech_.textTracks(), r = 0; r < i.length; r++) i[r] !== this && i[r].removeCue(t);
      this.cues_.push(t),
      this.cues.setCues_(this.cues_)
    },
    t.prototype.removeCue = function (e) {
      for (var t = this.cues_.length; t--; ) {
        var n = this.cues_[t];
        if (n === e || n.originalCue_ && n.originalCue_ === e) {
          this.cues_.splice(t, 1),
          this.cues.setCues_(this.cues_);
          break
        }
      }
    },
    t
  }(Xt);
  rn.prototype.allowedEvents_ = {
    cuechange: 'cuechange'
  };
  var on = function (e) {
    function t() {
      var n,
      i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
      };
      L(this, t);
      var r = gt(i, {
        kind: Wt[i.kind] || ''
      }),
      o = n = U(this, e.call(this, r)),
      s = !1;
      if (C) for (var a in t.prototype) 'constructor' !== a && (o[a] = t.prototype[a]);
      return Object.defineProperty(o, 'enabled', {
        get: function () {
          return s
        },
        set: function (e) {
          'boolean' == typeof e && e !== s && (s = e, this.trigger('enabledchange'))
        }
      }),
      r.enabled && (o.enabled = r.enabled),
      o.loaded_ = !0,
      U(n, o)
    }
    return D(t, e),
    t
  }(Xt),
  sn = function (e) {
    function t() {
      var n,
      i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
      };
      L(this, t);
      var r = gt(i, {
        kind: Gt[i.kind] || ''
      }),
      o = n = U(this, e.call(this, r)),
      s = !1;
      if (C) for (var a in t.prototype) 'constructor' !== a && (o[a] = t.prototype[a]);
      return Object.defineProperty(o, 'selected', {
        get: function () {
          return s
        },
        set: function (e) {
          'boolean' == typeof e && e !== s && (s = e, this.trigger('selectedchange'))
        }
      }),
      r.selected && (o.selected = r.selected),
      U(n, o)
    }
    return D(t, e),
    t
  }(Xt),
  an = 0,
  ln = 2,
  un = function (e) {
    function t() {
      var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
      };
      L(this, t);
      var i = U(this, e.call(this)),
      r = void 0,
      o = i;
      if (C) for (var a in o = s.createElement('custom'), t.prototype) 'constructor' !== a && (o[a] = t.prototype[a]);
      var l = new rn(n);
      return o.kind = l.kind,
      o.src = l.src,
      o.srclang = l.language,
      o.label = l.label,
      o.default = l.default,
      Object.defineProperty(o, 'readyState', {
        get: function () {
          return r
        }
      }),
      Object.defineProperty(o, 'track', {
        get: function () {
          return l
        }
      }),
      r = an,
      l.addEventListener('loadeddata', function () {
        r = ln,
        o.trigger({
          type: 'load',
          target: o
        })
      }),
      C ? U(i, o)  : i
    }
    return D(t, e),
    t
  }(it);
  un.prototype.allowedEvents_ = {
    load: 'load'
  },
  un.NONE = an,
  un.LOADING = 1,
  un.LOADED = ln,
  un.ERROR = 3;
  var cn = {
    audio: {
      ListClass: Ft,
      TrackClass: on,
      capitalName: 'Audio'
    },
    video: {
      ListClass: Ht,
      TrackClass: sn,
      capitalName: 'Video'
    },
    text: {
      ListClass: Qt,
      TrackClass: rn,
      capitalName: 'Text'
    }
  };
  Object.keys(cn).forEach(function (e) {
    cn[e].getterName = e + 'Tracks',
    cn[e].privateName = e + 'Tracks_'
  });
  var hn = {
    remoteText: {
      ListClass: Qt,
      TrackClass: rn,
      capitalName: 'RemoteText',
      getterName: 'remoteTextTracks',
      privateName: 'remoteTextTracks_'
    },
    remoteTextEl: {
      ListClass: Yt,
      TrackClass: un,
      capitalName: 'RemoteTextTrackEls',
      getterName: 'remoteTextTrackEls',
      privateName: 'remoteTextTrackEls_'
    }
  },
  dn = gt(cn, hn);
  hn.names = Object.keys(hn),
  cn.names = Object.keys(cn),
  dn.names = [
  ].concat(hn.names).concat(cn.names);
  var fn = function (e) {
    function t() {
      var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
      },
      i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function () {
      };
      L(this, t),
      n.reportTouchActivity = !1;
      var r = U(this, e.call(this, null, n, i));
      return r.hasStarted_ = !1,
      r.on('playing', function () {
        this.hasStarted_ = !0
      }),
      r.on('loadstart', function () {
        this.hasStarted_ = !1
      }),
      dn.names.forEach(function (e) {
        var t = dn[e];
        n && n[t.getterName] && (r[t.privateName] = n[t.getterName])
      }),
      r.featuresProgressEvents || r.manualProgressOn(),
      r.featuresTimeupdateEvents || r.manualTimeUpdatesOn(),
      [
        'Text',
        'Audio',
        'Video'
      ].forEach(function (e) {
        !1 === n['native' + e + 'Tracks'] && (r['featuresNative' + e + 'Tracks'] = !1)
      }),
      !1 === n.nativeCaptions || !1 === n.nativeTextTracks ? r.featuresNativeTextTracks = !1 : !0 !== n.nativeCaptions && !0 !== n.nativeTextTracks || (r.featuresNativeTextTracks = !0),
      r.featuresNativeTextTracks || r.emulateTextTracks(),
      r.autoRemoteTextTracks_ = new dn.text.ListClass,
      r.initTrackListeners(),
      n.nativeControlsForTouch || r.emitTapEvents(),
      r.constructor && (r.name_ = r.constructor.name || 'Unknown Tech'),
      r
    }
    return D(t, e),
    t.prototype.manualProgressOn = function () {
      this.on('durationchange', this.onDurationChange),
      this.manualProgress = !0,
      this.one('ready', this.trackProgress)
    },
    t.prototype.manualProgressOff = function () {
      this.manualProgress = !1,
      this.stopTrackingProgress(),
      this.off('durationchange', this.onDurationChange)
    },
    t.prototype.trackProgress = function (e) {
      this.stopTrackingProgress(),
      this.progressInterval = this.setInterval(et(this, function () {
        var e = this.bufferedPercent();
        this.bufferedPercent_ !== e && this.trigger('progress'),
        this.bufferedPercent_ = e,
        1 === e && this.stopTrackingProgress()
      }), 500)
    },
    t.prototype.onDurationChange = function (e) {
      this.duration_ = this.duration()
    },
    t.prototype.buffered = function () {
      return bt(0, 0)
    },
    t.prototype.bufferedPercent = function () {
      return _t(this.buffered(), this.duration_)
    },
    t.prototype.stopTrackingProgress = function () {
      this.clearInterval(this.progressInterval)
    },
    t.prototype.manualTimeUpdatesOn = function () {
      this.manualTimeUpdates = !0,
      this.on('play', this.trackCurrentTime),
      this.on('pause', this.stopTrackingCurrentTime)
    },
    t.prototype.manualTimeUpdatesOff = function () {
      this.manualTimeUpdates = !1,
      this.stopTrackingCurrentTime(),
      this.off('play', this.trackCurrentTime),
      this.off('pause', this.stopTrackingCurrentTime)
    },
    t.prototype.trackCurrentTime = function () {
      this.currentTimeInterval && this.stopTrackingCurrentTime(),
      this.currentTimeInterval = this.setInterval(function () {
        this.trigger({
          type: 'timeupdate',
          target: this,
          manuallyTriggered: !0
        })
      }, 250)
    },
    t.prototype.stopTrackingCurrentTime = function () {
      this.clearInterval(this.currentTimeInterval),
      this.trigger({
        type: 'timeupdate',
        target: this,
        manuallyTriggered: !0
      })
    },
    t.prototype.dispose = function () {
      this.clearTracks(cn.names),
      this.manualProgress && this.manualProgressOff(),
      this.manualTimeUpdates && this.manualTimeUpdatesOff(),
      e.prototype.dispose.call(this)
    },
    t.prototype.clearTracks = function (e) {
      var t = this;
      (e = [
      ].concat(e)).forEach(function (e) {
        for (var n = t[e + 'Tracks']() || [
        ], i = n.length; i--; ) {
          var r = n[i];
          'text' === e && t.removeRemoteTextTrack(r),
          n.removeTrack(r)
        }
      })
    },
    t.prototype.cleanupAutoTextTracks = function () {
      for (var e = this.autoRemoteTextTracks_ || [
      ], t = e.length; t--; ) {
        var n = e[t];
        this.removeRemoteTextTrack(n)
      }
    },
    t.prototype.reset = function () {
    },
    t.prototype.error = function (e) {
      return void 0 !== e && (this.error_ = new Ct(e), this.trigger('error')),
      this.error_
    },
    t.prototype.played = function () {
      return this.hasStarted_ ? bt(0, 0)  : bt()
    },
    t.prototype.setCurrentTime = function () {
      this.manualTimeUpdates && this.trigger({
        type: 'timeupdate',
        target: this,
        manuallyTriggered: !0
      })
    },
    t.prototype.initTrackListeners = function () {
      var e = this;
      cn.names.forEach(function (t) {
        var n = cn[t],
        i = function () {
          e.trigger(t + 'trackchange')
        },
        r = e[n.getterName]();
        r.addEventListener('removetrack', i),
        r.addEventListener('addtrack', i),
        e.on('dispose', function () {
          r.removeEventListener('removetrack', i),
          r.removeEventListener('addtrack', i)
        })
      })
    },
    t.prototype.addWebVttScript_ = function () {
      var e = this;
      if (!o.WebVTT) if (s.body.contains(this.el())) {
        if (!this.options_['vtt.js'] && V(c) && Object.keys(c).length > 0) return void this.trigger('vttjsloaded');
        var t = s.createElement('script');
        t.src = this.options_['vtt.js'] || 'https://vjs.zencdn.net/vttjs/0.12.4/vtt.min.js',
        t.onload = function () {
          e.trigger('vttjsloaded')
        },
        t.onerror = function () {
          e.trigger('vttjserror')
        },
        this.on('dispose', function () {
          t.onload = null,
          t.onerror = null
        }),
        o.WebVTT = !0,
        this.el().parentNode.appendChild(t)
      } else this.ready(this.addWebVttScript_)
    },
    t.prototype.emulateTextTracks = function () {
      var e = this,
      t = this.textTracks(),
      n = this.remoteTextTracks(),
      i = function (e) {
        return t.addTrack(e.track)
      },
      r = function (e) {
        return t.removeTrack(e.track)
      };
      n.on('addtrack', i),
      n.on('removetrack', r),
      this.addWebVttScript_();
      var o = function () {
        return e.trigger('texttrackchange')
      },
      s = function () {
        o();
        for (var e = 0; e < t.length; e++) {
          var n = t[e];
          n.removeEventListener('cuechange', o),
          'showing' === n.mode && n.addEventListener('cuechange', o)
        }
      };
      s(),
      t.addEventListener('change', s),
      t.addEventListener('addtrack', s),
      t.addEventListener('removetrack', s),
      this.on('dispose', function () {
        n.off('addtrack', i),
        n.off('removetrack', r),
        t.removeEventListener('change', s),
        t.removeEventListener('addtrack', s),
        t.removeEventListener('removetrack', s);
        for (var e = 0; e < t.length; e++) {
          t[e].removeEventListener('cuechange', o)
        }
      })
    },
    t.prototype.addTextTrack = function (e, t, n) {
      if (!e) throw new Error('TextTrack kind is required but was not provided');
      return function (e, t, n, i) {
        var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
        },
        o = e.textTracks();
        r.kind = t,
        n && (r.label = n),
        i && (r.language = i),
        r.tech = e;
        var s = new dn.text.TrackClass(r);
        return o.addTrack(s),
        s
      }(this, e, t, n)
    },
    t.prototype.createRemoteTextTrack = function (e) {
      var t = gt(e, {
        tech: this
      });
      return new hn.remoteTextEl.TrackClass(t)
    },
    t.prototype.addRemoteTextTrack = function () {
      var e = this,
      t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
      },
      n = arguments[1],
      i = this.createRemoteTextTrack(t);
      return !0 !== n && !1 !== n && (X.warn('Calling addRemoteTextTrack without explicitly setting the "manualCleanup" parameter to `true` is deprecated and default to `false` in future version of video.js'), n = !0),
      this.remoteTextTrackEls().addTrackElement_(i),
      this.remoteTextTracks().addTrack(i.track),
      !0 !== n && this.ready(function () {
        return e.autoRemoteTextTracks_.addTrack(i.track)
      }),
      i
    },
    t.prototype.removeRemoteTextTrack = function (e) {
      var t = this.remoteTextTrackEls().getTrackElementByTrack_(e);
      this.remoteTextTrackEls().removeTrackElement_(t),
      this.remoteTextTracks().removeTrack(e),
      this.autoRemoteTextTracks_.removeTrack(e)
    },
    t.prototype.getVideoPlaybackQuality = function () {
      return {
      }
    },
    t.prototype.setPoster = function () {
    },
    t.prototype.playsinline = function () {
    },
    t.prototype.setPlaysinline = function () {
    },
    t.prototype.canPlayType = function () {
      return ''
    },
    t.canPlayType = function () {
      return ''
    },
    t.canPlaySource = function (e, n) {
      return t.canPlayType(e.type)
    },
    t.isTech = function (e) {
      return e.prototype instanceof t || e instanceof t || e === t
    },
    t.registerTech = function (e, n) {
      if (t.techs_ || (t.techs_ = {
      }), !t.isTech(n)) throw new Error('Tech ' + e + ' must be a Tech');
      if (!t.canPlayType) throw new Error('Techs must have a static canPlayType method on them');
      if (!t.canPlaySource) throw new Error('Techs must have a static canPlaySource method on them');
      return e = vt(e),
      t.techs_[e] = n,
      'Tech' !== e && t.defaultTechOrder_.push(e),
      n
    },
    t.getTech = function (e) {
      if (e) return e = vt(e),
      t.techs_ && t.techs_[e] ? t.techs_[e] : o && o.videojs && o.videojs[e] ? (X.warn('The ' + e + ' tech was added to the videojs object when it should be registered using videojs.registerTech(name, tech)'), o.videojs[e])  : void 0
    },
    t
  }(mt);
  dn.names.forEach(function (e) {
    var t = dn[e];
    fn.prototype[t.getterName] = function () {
      return this[t.privateName] = this[t.privateName] || new t.ListClass,
      this[t.privateName]
    }
  }),
  fn.prototype.featuresVolumeControl = !0,
  fn.prototype.featuresFullscreenResize = !1,
  fn.prototype.featuresPlaybackRate = !1,
  fn.prototype.featuresProgressEvents = !1,
  fn.prototype.featuresTimeupdateEvents = !1,
  fn.prototype.featuresNativeTextTracks = !1,
  fn.withSourceHandlers = function (e) {
    e.registerSourceHandler = function (t, n) {
      var i = e.sourceHandlers;
      i || (i = e.sourceHandlers = [
      ]),
      void 0 === n && (n = i.length),
      i.splice(n, 0, t)
    },
    e.canPlayType = function (t) {
      for (var n = e.sourceHandlers || [
      ], i = void 0, r = 0; r < n.length; r++) if (i = n[r].canPlayType(t)) return i;
      return ''
    },
    e.selectSourceHandler = function (t, n) {
      for (var i = e.sourceHandlers || [
      ], r = 0; r < i.length; r++) if (i[r].canHandleSource(t, n)) return i[r];
      return null
    },
    e.canPlaySource = function (t, n) {
      var i = e.selectSourceHandler(t, n);
      return i ? i.canHandleSource(t, n)  : ''
    };
    [
      'seekable',
      'duration'
    ].forEach(function (e) {
      var t = this[e];
      'function' == typeof t && (this[e] = function () {
        return this.sourceHandler_ && this.sourceHandler_[e] ? this.sourceHandler_[e].apply(this.sourceHandler_, arguments)  : t.apply(this, arguments)
      })
    }, e.prototype),
    e.prototype.setSource = function (t) {
      var n = e.selectSourceHandler(t, this.options_);
      n || (e.nativeSourceHandler ? n = e.nativeSourceHandler : X.error('No source hander found for the current source.')),
      this.disposeSourceHandler(),
      this.off('dispose', this.disposeSourceHandler),
      n !== e.nativeSourceHandler && (this.currentSource_ = t),
      this.sourceHandler_ = n.handleSource(t, this, this.options_),
      this.on('dispose', this.disposeSourceHandler)
    },
    e.prototype.disposeSourceHandler = function () {
      this.currentSource_ && (this.clearTracks(['audio',
      'video']), this.currentSource_ = null),
      this.cleanupAutoTextTracks(),
      this.sourceHandler_ && (this.sourceHandler_.dispose && this.sourceHandler_.dispose(), this.sourceHandler_ = null)
    }
  },
  mt.registerComponent('Tech', fn),
  fn.registerTech('Tech', fn),
  fn.defaultTechOrder_ = [
  ];
  var pn = {
  },
  vn = {
  },
  gn = {
  };
  function mn(e, t, n) {
    e.setTimeout(function () {
      return function e() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
        };
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [
        ];
        var i = arguments[2];
        var r = arguments[3];
        var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [
        ];
        var s = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        var a = n[0],
        l = n.slice(1);
        if ('string' == typeof a) e(t, pn[a], i, r, o, s);
         else if (a) {
          var u = function (e, t) {
            var n = vn[e.id()],
            i = null;
            if (void 0 === n || null === n) return i = t(e),
            vn[e.id()] = [
              [t,
              i]
            ],
            i;
            for (var r = 0; r < n.length; r++) {
              var o = n[r],
              s = o[0],
              a = o[1];
              s === t && (i = a)
            }
            null === i && (i = t(e), n.push([t,
            i]));
            return i
          }(r, a);
          u.setSource(Q({
          }, t), function (n, a) {
            if (n) return e(t, l, i, r, o, s);
            o.push(u),
            e(a, t.type === a.type ? l : pn[a.type], i, r, o, s)
          })
        } else l.length ? e(t, l, i, r, o, s)  : s ? i(t, o)  : e(t, pn['*'], i, r, o, !0)
      }(t, pn[t.type], n, e)
    }, 1)
  }
  function An(e, t, n) {
    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
    r = 'call' + vt(n),
    o = e.reduce(wn(r), i),
    s = o === gn,
    a = s ? null : t[n](o);
    return function (e, t, n, i) {
      for (var r = e.length - 1; r >= 0; r--) {
        var o = e[r];
        o[t] && o[t](i, n)
      }
    }(e, n, a, s),
    a
  }
  var yn = {
    buffered: 1,
    currentTime: 1,
    duration: 1,
    seekable: 1,
    played: 1,
    paused: 1
  },
  bn = {
    setCurrentTime: 1
  },
  _n = {
    play: 1,
    pause: 1
  };
  function wn(e) {
    return function (t, n) {
      return t === gn ? gn : n[e] ? n[e](t)  : t
    }
  }
  var Tn = function (e) {
    function t(n, i, r) {
      L(this, t);
      var o = gt({
        createEl: !1
      }, i),
      s = U(this, e.call(this, n, o, r));
      if (i.playerOptions.sources && 0 !== i.playerOptions.sources.length) n.src(i.playerOptions.sources);
       else for (var a = 0, l = i.playerOptions.techOrder; a < l.length; a++) {
        var u = vt(l[a]),
        c = fn.getTech(u);
        if (u || (c = mt.getComponent(u)), c && c.isSupported()) {
          n.loadTech_(u);
          break
        }
      }
      return s
    }
    return D(t, e),
    t
  }(mt);
  mt.registerComponent('MediaLoader', Tn);
  var kn = function (e) {
    function t(n, i) {
      L(this, t);
      var r = U(this, e.call(this, n, i));
      return r.emitTapEvents(),
      r.enable(),
      r
    }
    return D(t, e),
    t.prototype.createEl = function () {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'div',
      n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
      },
      i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
      };
      n = Q({
        innerHTML: '<span aria-hidden="true" class="vjs-icon-placeholder"></span>',
        className: this.buildCSSClass(),
        tabIndex: 0
      }, n),
      'button' === t && X.error('Creating a ClickableComponent with an HTML element of ' + t + ' is not supported; use a Button instead.'),
      i = Q({
        role: 'button',
        'aria-live': 'polite'
      }, i),
      this.tabIndex_ = n.tabIndex;
      var r = e.prototype.createEl.call(this, t, n, i);
      return this.createControlTextEl(r),
      r
    },
    t.prototype.dispose = function () {
      this.controlTextEl_ = null,
      e.prototype.dispose.call(this)
    },
    t.prototype.createControlTextEl = function (e) {
      return this.controlTextEl_ = oe('span', {
        className: 'vjs-control-text'
      }),
      e && e.appendChild(this.controlTextEl_),
      this.controlText(this.controlText_, e),
      this.controlTextEl_
    },
    t.prototype.controlText = function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.el();
      if (void 0 === e) return this.controlText_ || 'Need Text';
      var n = this.localize(e);
      this.controlText_ = e,
      se(this.controlTextEl_, n),
      this.nonIconControl || t.setAttribute('title', n)
    },
    t.prototype.buildCSSClass = function () {
      return 'vjs-control vjs-button ' + e.prototype.buildCSSClass.call(this)
    },
    t.prototype.enable = function () {
      this.enabled_ || (this.enabled_ = !0, this.removeClass('vjs-disabled'), this.el_.setAttribute('aria-disabled', 'false'), void 0 !== this.tabIndex_ && this.el_.setAttribute('tabIndex', this.tabIndex_), this.on(['tap',
      'click'], this.handleClick), this.on('focus', this.handleFocus), this.on('blur', this.handleBlur))
    },
    t.prototype.disable = function () {
      this.enabled_ = !1,
      this.addClass('vjs-disabled'),
      this.el_.setAttribute('aria-disabled', 'true'),
      void 0 !== this.tabIndex_ && this.el_.removeAttribute('tabIndex'),
      this.off(['tap',
      'click'], this.handleClick),
      this.off('focus', this.handleFocus),
      this.off('blur', this.handleBlur)
    },
    t.prototype.handleClick = function (e) {
    },
    t.prototype.handleFocus = function (e) {
      Qe(s, 'keydown', et(this, this.handleKeyPress))
    },
    t.prototype.handleKeyPress = function (t) {
      32 === t.which || 13 === t.which ? (t.preventDefault(), this.trigger('click'))  : e.prototype.handleKeyPress && e.prototype.handleKeyPress.call(this, t)
    },
    t.prototype.handleBlur = function (e) {
      Ye(s, 'keydown', et(this, this.handleKeyPress))
    },
    t
  }(mt);
  mt.registerComponent('ClickableComponent', kn);
  var En = function (e) {
    function t(n, i) {
      L(this, t);
      var r = U(this, e.call(this, n, i));
      return r.update(),
      n.on('posterchange', et(r, r.update)),
      r
    }
    return D(t, e),
    t.prototype.dispose = function () {
      this.player().off('posterchange', this.update),
      e.prototype.dispose.call(this)
    },
    t.prototype.createEl = function () {
      var e = oe('div', {
        className: 'vjs-poster',
        tabIndex: - 1
      });
      return P || (this.fallbackImg_ = oe('img'), e.appendChild(this.fallbackImg_)),
      e
    },
    t.prototype.update = function (e) {
      var t = this.player().poster();
      this.setSrc(t),
      t ? this.show()  : this.hide()
    },
    t.prototype.setSrc = function (e) {
      if (this.fallbackImg_) this.fallbackImg_.src = e;
       else {
        var t = '';
        e && (t = 'url("' + e + '")'),
        this.el_.style.backgroundImage = t
      }
    },
    t.prototype.handleClick = function (e) {
      this.player_.controls() && (this.player_.paused() ? this.player_.play()  : this.player_.pause())
    },
    t
  }(kn);
  mt.registerComponent('PosterImage', En);
  var Sn = {
    monospace: 'monospace',
    sansSerif: 'sans-serif',
    serif: 'serif',
    monospaceSansSerif: '"Andale Mono", "Lucida Console", monospace',
    monospaceSerif: '"Courier New", monospace',
    proportionalSansSerif: 'sans-serif',
    proportionalSerif: 'serif',
    casual: '"Comic Sans MS", Impact, fantasy',
    script: '"Monotype Corsiva", cursive',
    smallcaps: '"Andale Mono", "Lucida Console", monospace, sans-serif'
  };
  function jn(e, t) {
    return 'rgba(' + parseInt(e[1] + e[1], 16) + ',' + parseInt(e[2] + e[2], 16) + ',' + parseInt(e[3] + e[3], 16) + ',' + t + ')'
  }
  function Cn(e, t, n) {
    try {
      e.style[t] = n
    } catch (e) {
      return
    }
  }
  var xn = function (e) {
    function t(n, i, r) {
      L(this, t);
      var o = U(this, e.call(this, n, i, r));
      return n.on('loadstart', et(o, o.toggleDisplay)),
      n.on('texttrackchange', et(o, o.updateDisplay)),
      n.on('loadstart', et(o, o.preselectTrack)),
      n.ready(et(o, function () {
        if (n.tech_ && n.tech_.featuresNativeTextTracks) this.hide();
         else {
          n.on('fullscreenchange', et(this, this.updateDisplay));
          for (var e = this.options_.playerOptions.tracks || [
          ], t = 0; t < e.length; t++) this.player_.addRemoteTextTrack(e[t], !0);
          this.preselectTrack()
        }
      })),
      o
    }
    return D(t, e),
    t.prototype.preselectTrack = function () {
      for (var e = {
        captions: 1,
        subtitles: 1
      }, t = this.player_.textTracks(), n = this.player_.cache_.selectedLanguage, i = void 0, r = void 0, o = void 0, s = 0; s < t.length; s++) {
        var a = t[s];
        n && n.enabled && n.language === a.language ? a.kind === n.kind ? o = a : o || (o = a)  : n && !n.enabled ? (o = null, i = null, r = null)  : a.default && ('descriptions' !== a.kind || i ? a.kind in e && !r && (r = a)  : i = a)
      }
      o ? o.mode = 'showing' : r ? r.mode = 'showing' : i && (i.mode = 'showing')
    },
    t.prototype.toggleDisplay = function () {
      this.player_.tech_ && this.player_.tech_.featuresNativeTextTracks ? this.hide()  : this.show()
    },
    t.prototype.createEl = function () {
      return e.prototype.createEl.call(this, 'div', {
        className: 'vjs-text-track-display'
      }, {
        'aria-live': 'off',
        'aria-atomic': 'true'
      })
    },
    t.prototype.clearDisplay = function () {
      'function' == typeof o.WebVTT && o.WebVTT.processCues(o, [
      ], this.el_)
    },
    t.prototype.updateDisplay = function () {
      var e = this.player_.textTracks();
      this.clearDisplay();
      for (var t = null, n = null, i = e.length; i--; ) {
        var r = e[i];
        'showing' === r.mode && ('descriptions' === r.kind ? t = r : n = r)
      }
      n ? ('off' !== this.getAttribute('aria-live') && this.setAttribute('aria-live', 'off'), this.updateForTrack(n))  : t && ('assertive' !== this.getAttribute('aria-live') && this.setAttribute('aria-live', 'assertive'), this.updateForTrack(t))
    },
    t.prototype.updateForTrack = function (e) {
      if ('function' == typeof o.WebVTT && e.activeCues) {
        for (var t = this.player_.textTrackSettings.getValues(), n = [
        ], i = 0; i < e.activeCues.length; i++) n.push(e.activeCues[i]);
        o.WebVTT.processCues(o, n, this.el_);
        for (var r = n.length; r--; ) {
          var s = n[r];
          if (s) {
            var a = s.displayState;
            if (t.color && (a.firstChild.style.color = t.color), t.textOpacity && Cn(a.firstChild, 'color', jn(t.color || '#fff', t.textOpacity)), t.backgroundColor && (a.firstChild.style.backgroundColor = t.backgroundColor), t.backgroundOpacity && Cn(a.firstChild, 'backgroundColor', jn(t.backgroundColor || '#000', t.backgroundOpacity)), t.windowColor && (t.windowOpacity ? Cn(a, 'backgroundColor', jn(t.windowColor, t.windowOpacity))  : a.style.backgroundColor = t.windowColor), t.edgeStyle && ('dropshadow' === t.edgeStyle ? a.firstChild.style.textShadow = '2px 2px 3px #222, 2px 2px 4px #222, 2px 2px 5px #222' : 'raised' === t.edgeStyle ? a.firstChild.style.textShadow = '1px 1px #222, 2px 2px #222, 3px 3px #222' : 'depressed' === t.edgeStyle ? a.firstChild.style.textShadow = '1px 1px #ccc, 0 1px #ccc, -1px -1px #222, 0 -1px #222' : 'uniform' === t.edgeStyle && (a.firstChild.style.textShadow = '0 0 4px #222, 0 0 4px #222, 0 0 4px #222, 0 0 4px #222')), t.fontPercent && 1 !== t.fontPercent) {
              var l = o.parseFloat(a.style.fontSize);
              a.style.fontSize = l * t.fontPercent + 'px',
              a.style.height = 'auto',
              a.style.top = 'auto',
              a.style.bottom = '2px'
            }
            t.fontFamily && 'default' !== t.fontFamily && ('small-caps' === t.fontFamily ? a.firstChild.style.fontVariant = 'small-caps' : a.firstChild.style.fontFamily = Sn[t.fontFamily])
          }
        }
      }
    },
    t
  }(mt);
  mt.registerComponent('TextTrackDisplay', xn);
  var Bn = function (e) {
    function t() {
      return L(this, t),
      U(this, e.apply(this, arguments))
    }
    return D(t, e),
    t.prototype.createEl = function () {
      var t = this.player_.isAudio(),
      n = this.localize(t ? 'Audio Player' : 'Video Player'),
      i = oe('span', {
        className: 'vjs-control-text',
        innerHTML: this.localize('{1} is loading.', [
          n
        ])
      }),
      r = e.prototype.createEl.call(this, 'div', {
        className: 'vjs-loading-spinner',
        dir: 'ltr'
      });
      return r.appendChild(i),
      r
    },
    t
  }(mt);
  mt.registerComponent('LoadingSpinner', Bn);
  var On = function (e) {
    function t() {
      return L(this, t),
      U(this, e.apply(this, arguments))
    }
    return D(t, e),
    t.prototype.createEl = function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
      },
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
      };
      t = Q({
        innerHTML: '<span aria-hidden="true" class="vjs-icon-placeholder"></span>',
        className: this.buildCSSClass()
      }, t),
      n = Q({
        type: 'button',
        'aria-live': 'polite'
      }, n);
      var i = mt.prototype.createEl.call(this, 'button', t, n);
      return this.createControlTextEl(i),
      i
    },
    t.prototype.addChild = function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
      },
      n = this.constructor.name;
      return X.warn('Adding an actionable (user controllable) child to a Button (' + n + ') is not supported; use a ClickableComponent instead.'),
      mt.prototype.addChild.call(this, e, t)
    },
    t.prototype.enable = function () {
      e.prototype.enable.call(this),
      this.el_.removeAttribute('disabled')
    },
    t.prototype.disable = function () {
      e.prototype.disable.call(this),
      this.el_.setAttribute('disabled', 'disabled')
    },
    t.prototype.handleKeyPress = function (t) {
      32 !== t.which && 13 !== t.which && e.prototype.handleKeyPress.call(this, t)
    },
    t
  }(kn);
  mt.registerComponent('Button', On);
  var In = function (e) {
    function t(n, i) {
      L(this, t);
      var r = U(this, e.call(this, n, i));
      return r.mouseused_ = !1,
      r.on('mousedown', r.handleMouseDown),
      r
    }
    return D(t, e),
    t.prototype.buildCSSClass = function () {
      return 'vjs-big-play-button'
    },
    t.prototype.handleClick = function (e) {
      var t = this.player_.play();
      if (!(this.mouseused_ && e.clientX && e.clientY)) {
        var n = this.player_.getChild('controlBar'),
        i = n && n.getChild('playToggle');
        if (i) {
          var r = function () {
            return i.focus()
          };
          Bt(t) ? t.then(r, function () {
          })  : this.setTimeout(r, 1)
        } else this.player_.focus()
      }
    },
    t.prototype.handleKeyPress = function (t) {
      this.mouseused_ = !1,
      e.prototype.handleKeyPress.call(this, t)
    },
    t.prototype.handleMouseDown = function (e) {
      this.mouseused_ = !0
    },
    t
  }(On);
  In.prototype.controlText_ = 'Play Video',
  mt.registerComponent('BigPlayButton', In);
  var Pn = function (e) {
    function t(n, i) {
      L(this, t);
      var r = U(this, e.call(this, n, i));
      return r.controlText(i && i.controlText || r.localize('Close')),
      r
    }
    return D(t, e),
    t.prototype.buildCSSClass = function () {
      return 'vjs-close-button ' + e.prototype.buildCSSClass.call(this)
    },
    t.prototype.handleClick = function (e) {
      this.trigger({
        type: 'close',
        bubbles: !1
      })
    },
    t
  }(On);
  mt.registerComponent('CloseButton', Pn);
  var Rn = function (e) {
    function t(n, i) {
      L(this, t);
      var r = U(this, e.call(this, n, i));
      return r.on(n, 'play', r.handlePlay),
      r.on(n, 'pause', r.handlePause),
      r.on(n, 'ended', r.handleEnded),
      r
    }
    return D(t, e),
    t.prototype.buildCSSClass = function () {
      return 'vjs-play-control ' + e.prototype.buildCSSClass.call(this)
    },
    t.prototype.handleClick = function (e) {
      this.player_.paused() ? this.player_.play()  : this.player_.pause()
    },
    t.prototype.handleSeeked = function (e) {
      this.removeClass('vjs-ended'),
      this.player_.paused() ? this.handlePause(e)  : this.handlePlay(e)
    },
    t.prototype.handlePlay = function (e) {
      this.removeClass('vjs-ended'),
      this.removeClass('vjs-paused'),
      this.addClass('vjs-playing'),
      this.controlText('Pause')
    },
    t.prototype.handlePause = function (e) {
      this.removeClass('vjs-playing'),
      this.addClass('vjs-paused'),
      this.controlText('Play')
    },
    t.prototype.handleEnded = function (e) {
      this.removeClass('vjs-playing'),
      this.addClass('vjs-ended'),
      this.controlText('Replay'),
      this.one(this.player_, 'seeked', this.handleSeeked)
    },
    t
  }(On);
  function Mn(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e;
    e = e < 0 ? 0 : e;
    var n = Math.floor(e % 60),
    i = Math.floor(e / 60 % 60),
    r = Math.floor(e / 3600),
    o = Math.floor(t / 60 % 60),
    s = Math.floor(t / 3600);
    return (isNaN(e) || e === 1 / 0) && (r = i = n = '-'),
    (r = r > 0 || s > 0 ? r + ':' : '') + (i = ((r || o >= 10) && i < 10 ? '0' + i : i) + ':') + (n = n < 10 ? '0' + n : n)
  }
  Rn.prototype.controlText_ = 'Play',
  mt.registerComponent('PlayToggle', Rn);
  var Ln = function (e) {
    function t(n, i) {
      L(this, t);
      var r = U(this, e.call(this, n, i));
      return r.throttledUpdateContent = tt(et(r, r.updateContent), 25),
      r.on(n, 'timeupdate', r.throttledUpdateContent),
      r
    }
    return D(t, e),
    t.prototype.createEl = function (t) {
      var n = this.buildCSSClass(),
      i = e.prototype.createEl.call(this, 'div', {
        className: n + ' vjs-time-control vjs-control'
      });
      return this.contentEl_ = oe('div', {
        className: n + '-display'
      }, {
        'aria-live': 'off'
      }, oe('span', {
        className: 'vjs-control-text',
        textContent: this.localize(this.controlText_)
      })),
      this.updateTextNode_(),
      i.appendChild(this.contentEl_),
      i
    },
    t.prototype.dispose = function () {
      this.contentEl_ = null,
      this.textNode_ = null,
      e.prototype.dispose.call(this)
    },
    t.prototype.updateTextNode_ = function () {
      if (this.contentEl_) {
        for (; this.contentEl_.firstChild; ) this.contentEl_.removeChild(this.contentEl_.firstChild);
        this.textNode_ = s.createTextNode(this.formattedTime_ || '0:00'),
        this.contentEl_.appendChild(this.textNode_)
      }
    },
    t.prototype.formatTime_ = function (e) {
      return Mn(e)
    },
    t.prototype.updateFormattedTime_ = function (e) {
      var t = this.formatTime_(e);
      t !== this.formattedTime_ && (this.formattedTime_ = t, this.requestAnimationFrame(this.updateTextNode_))
    },
    t.prototype.updateContent = function (e) {
    },
    t
  }(mt);
  Ln.prototype.controlText_ = 'Time',
  mt.registerComponent('TimeDisplay', Ln);
  var Dn = function (e) {
    function t(n, i) {
      L(this, t);
      var r = U(this, e.call(this, n, i));
      return r.on(n, 'ended', r.handleEnded),
      r
    }
    return D(t, e),
    t.prototype.buildCSSClass = function () {
      return 'vjs-current-time'
    },
    t.prototype.updateContent = function (e) {
      var t = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
      this.updateFormattedTime_(t)
    },
    t.prototype.handleEnded = function (e) {
      this.player_.duration() && this.updateFormattedTime_(this.player_.duration())
    },
    t
  }(Ln);
  Dn.prototype.controlText_ = 'Current Time',
  mt.registerComponent('CurrentTimeDisplay', Dn);
  var Un = function (e) {
    function t(n, i) {
      L(this, t);
      var r = U(this, e.call(this, n, i));
      return r.on(n, 'durationchange', r.updateContent),
      r.on(n, 'loadedmetadata', r.throttledUpdateContent),
      r
    }
    return D(t, e),
    t.prototype.buildCSSClass = function () {
      return 'vjs-duration'
    },
    t.prototype.updateContent = function (e) {
      var t = this.player_.duration();
      t && this.duration_ !== t && (this.duration_ = t, this.updateFormattedTime_(t))
    },
    t
  }(Ln);
  Un.prototype.controlText_ = 'Duration Time',
  mt.registerComponent('DurationDisplay', Un);
  var Nn = function (e) {
    function t() {
      return L(this, t),
      U(this, e.apply(this, arguments))
    }
    return D(t, e),
    t.prototype.createEl = function () {
      return e.prototype.createEl.call(this, 'div', {
        className: 'vjs-time-control vjs-time-divider',
        innerHTML: '<div><span>/</span></div>'
      })
    },
    t
  }(mt);
  mt.registerComponent('TimeDivider', Nn);
  var Fn = function (e) {
    function t(n, i) {
      L(this, t);
      var r = U(this, e.call(this, n, i));
      return r.on(n, 'durationchange', r.throttledUpdateContent),
      r.on(n, 'ended', r.handleEnded),
      r
    }
    return D(t, e),
    t.prototype.buildCSSClass = function () {
      return 'vjs-remaining-time'
    },
    t.prototype.formatTime_ = function (t) {
      return '-' + e.prototype.formatTime_.call(this, t)
    },
    t.prototype.updateContent = function (e) {
      this.player_.duration() && (this.player_.remainingTimeDisplay ? this.updateFormattedTime_(this.player_.remainingTimeDisplay())  : this.updateFormattedTime_(this.player_.remainingTime()))
    },
    t.prototype.handleEnded = function (e) {
      this.player_.duration() && this.updateFormattedTime_(0)
    },
    t
  }(Ln);
  Fn.prototype.controlText_ = 'Remaining Time',
  mt.registerComponent('RemainingTimeDisplay', Fn);
  var zn = function (e) {
    function t(n, i) {
      L(this, t);
      var r = U(this, e.call(this, n, i));
      return r.updateShowing(),
      r.on(r.player(), 'durationchange', r.updateShowing),
      r
    }
    return D(t, e),
    t.prototype.createEl = function () {
      var t = e.prototype.createEl.call(this, 'div', {
        className: 'vjs-live-control vjs-control'
      });
      return this.contentEl_ = oe('div', {
        className: 'vjs-live-display',
        innerHTML: '<span class="vjs-control-text">' + this.localize('Stream Type') + '</span>' + this.localize('LIVE')
      }, {
        'aria-live': 'off'
      }),
      t.appendChild(this.contentEl_),
      t
    },
    t.prototype.dispose = function () {
      this.contentEl_ = null,
      e.prototype.dispose.call(this)
    },
    t.prototype.updateShowing = function (e) {
      this.player().duration() === 1 / 0 ? this.show()  : this.hide()
    },
    t
  }(mt);
  mt.registerComponent('LiveDisplay', zn);
  var Hn = function (e) {
    function t(n, i) {
      L(this, t);
      var r = U(this, e.call(this, n, i));
      return r.bar = r.getChild(r.options_.barName),
      r.vertical(!!r.options_.vertical),
      r.enable(),
      r
    }
    return D(t, e),
    t.prototype.enabled = function () {
      return this.enabled_
    },
    t.prototype.enable = function () {
      this.enabled() || (this.on('mousedown', this.handleMouseDown), this.on('touchstart', this.handleMouseDown), this.on('focus', this.handleFocus), this.on('blur', this.handleBlur), this.on('click', this.handleClick), this.on(this.player_, 'controlsvisible', this.update), this.playerEvent && this.on(this.player_, this.playerEvent, this.update), this.removeClass('disabled'), this.setAttribute('tabindex', 0), this.enabled_ = !0)
    },
    t.prototype.disable = function () {
      if (this.enabled()) {
        var e = this.bar.el_.ownerDocument;
        this.off('mousedown', this.handleMouseDown),
        this.off('touchstart', this.handleMouseDown),
        this.off('focus', this.handleFocus),
        this.off('blur', this.handleBlur),
        this.off('click', this.handleClick),
        this.off(this.player_, 'controlsvisible', this.update),
        this.off(e, 'mousemove', this.handleMouseMove),
        this.off(e, 'mouseup', this.handleMouseUp),
        this.off(e, 'touchmove', this.handleMouseMove),
        this.off(e, 'touchend', this.handleMouseUp),
        this.removeAttribute('tabindex'),
        this.addClass('disabled'),
        this.playerEvent && this.off(this.player_, this.playerEvent, this.update),
        this.enabled_ = !1
      }
    },
    t.prototype.createEl = function (t) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
      },
      i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
      };
      return n.className = n.className + ' vjs-slider',
      n = Q({
        tabIndex: 0
      }, n),
      i = Q({
        role: 'slider',
        'aria-valuenow': 0,
        'aria-valuemin': 0,
        'aria-valuemax': 100,
        tabIndex: 0
      }, i),
      e.prototype.createEl.call(this, t, n, i)
    },
    t.prototype.handleMouseDown = function (e) {
      var t = this.bar.el_.ownerDocument;
      e.preventDefault(),
      me(),
      this.addClass('vjs-sliding'),
      this.trigger('slideractive'),
      this.on(t, 'mousemove', this.handleMouseMove),
      this.on(t, 'mouseup', this.handleMouseUp),
      this.on(t, 'touchmove', this.handleMouseMove),
      this.on(t, 'touchend', this.handleMouseUp),
      this.handleMouseMove(e)
    },
    t.prototype.handleMouseMove = function (e) {
    },
    t.prototype.handleMouseUp = function () {
      var e = this.bar.el_.ownerDocument;
      Ae(),
      this.removeClass('vjs-sliding'),
      this.trigger('sliderinactive'),
      this.off(e, 'mousemove', this.handleMouseMove),
      this.off(e, 'mouseup', this.handleMouseUp),
      this.off(e, 'touchmove', this.handleMouseMove),
      this.off(e, 'touchend', this.handleMouseUp),
      this.update()
    },
    t.prototype.update = function () {
      if (this.el_) {
        var e = this.getPercent(),
        t = this.bar;
        if (t) {
          ('number' != typeof e || e != e || e < 0 || e === 1 / 0) && (e = 0);
          var n = (100 * e).toFixed(2) + '%',
          i = t.el().style;
          return this.vertical() ? i.height = n : i.width = n,
          e
        }
      }
    },
    t.prototype.calculateDistance = function (e) {
      var t = _e(this.el_, e);
      return this.vertical() ? t.y : t.x
    },
    t.prototype.handleFocus = function () {
      this.on(this.bar.el_.ownerDocument, 'keydown', this.handleKeyPress)
    },
    t.prototype.handleKeyPress = function (e) {
      37 === e.which || 40 === e.which ? (e.preventDefault(), this.stepBack())  : 38 !== e.which && 39 !== e.which || (e.preventDefault(), this.stepForward())
    },
    t.prototype.handleBlur = function () {
      this.off(this.bar.el_.ownerDocument, 'keydown', this.handleKeyPress)
    },
    t.prototype.handleClick = function (e) {
      e.stopImmediatePropagation(),
      e.preventDefault()
    },
    t.prototype.vertical = function (e) {
      if (void 0 === e) return this.vertical_ || !1;
      this.vertical_ = !!e,
      this.vertical_ ? this.addClass('vjs-slider-vertical')  : this.addClass('vjs-slider-horizontal')
    },
    t
  }(mt);
  mt.registerComponent('Slider', Hn);
  var Qn = function (e) {
    function t(n, i) {
      L(this, t);
      var r = U(this, e.call(this, n, i));
      return r.partEls_ = [
      ],
      r.on(n, 'progress', r.update),
      r
    }
    return D(t, e),
    t.prototype.createEl = function () {
      return e.prototype.createEl.call(this, 'div', {
        className: 'vjs-load-progress',
        innerHTML: '<span class="vjs-control-text"><span>' + this.localize('Loaded') + '</span>: 0%</span>'
      })
    },
    t.prototype.dispose = function () {
      this.partEls_ = null,
      e.prototype.dispose.call(this)
    },
    t.prototype.update = function (e) {
      var t = this.player_.buffered(),
      n = this.player_.duration(),
      i = this.player_.bufferedEnd(),
      r = this.partEls_,
      o = function (e, t) {
        var n = e / t || 0;
        return 100 * (n >= 1 ? 1 : n) + '%'
      };
      this.el_.style.width = o(i, n);
      for (var s = 0; s < t.length; s++) {
        var a = t.start(s),
        l = t.end(s),
        u = r[s];
        u || (u = this.el_.appendChild(oe()), r[s] = u),
        u.style.left = o(a, i),
        u.style.width = o(l - a, i)
      }
      for (var c = r.length; c > t.length; c--) this.el_.removeChild(r[c - 1]);
      r.length = t.length
    },
    t
  }(mt);
  mt.registerComponent('LoadProgressBar', Qn);
  var Yn = function (e) {
    function t() {
      return L(this, t),
      U(this, e.apply(this, arguments))
    }
    return D(t, e),
    t.prototype.createEl = function () {
      return e.prototype.createEl.call(this, 'div', {
        className: 'vjs-time-tooltip'
      })
    },
    t.prototype.update = function (e, t, n) {
      var i = ye(this.el_),
      r = ye(this.player_.el()),
      o = e.width * t;
      if (r && i) {
        var s = e.left - r.left + o,
        a = e.width - o + (r.right - e.right),
        l = i.width / 2;
        s < l ? l += l - s : a < l && (l = a),
        l < 0 ? l = 0 : l > i.width && (l = i.width),
        this.el_.style.right = '-' + l + 'px',
        se(this.el_, n)
      }
    },
    t
  }(mt);
  mt.registerComponent('TimeTooltip', Yn);
  var Vn = function (e) {
    function t() {
      return L(this, t),
      U(this, e.apply(this, arguments))
    }
    return D(t, e),
    t.prototype.createEl = function () {
      return e.prototype.createEl.call(this, 'div', {
        className: 'vjs-play-progress vjs-slider-bar',
        innerHTML: '<span class="vjs-control-text"><span>' + this.localize('Progress') + '</span>: 0%</span>'
      })
    },
    t.prototype.update = function (e, t) {
      var n = this;
      this.rafId_ && this.cancelAnimationFrame(this.rafId_),
      this.rafId_ = this.requestAnimationFrame(function () {
        var i = Mn(n.player_.scrubbing() ? n.player_.getCache().currentTime : n.player_.currentTime(), n.player_.duration()),
        r = n.getChild('timeTooltip');
        r && r.update(e, t, i)
      })
    },
    t
  }(mt);
  Vn.prototype.options_ = {
    children: [
    ]
  },
  x && !(x > 8) || A || b || Vn.prototype.options_.children.push('timeTooltip'),
  mt.registerComponent('PlayProgressBar', Vn);
  var Gn = function (e) {
    function t(n, i) {
      L(this, t);
      var r = U(this, e.call(this, n, i));
      return r.update = tt(et(r, r.update), 25),
      r
    }
    return D(t, e),
    t.prototype.createEl = function () {
      return e.prototype.createEl.call(this, 'div', {
        className: 'vjs-mouse-display'
      })
    },
    t.prototype.update = function (e, t) {
      var n = this;
      this.rafId_ && this.cancelAnimationFrame(this.rafId_),
      this.rafId_ = this.requestAnimationFrame(function () {
        var i = n.player_.duration(),
        r = Mn(t * i, i);
        n.el_.style.left = e.width * t + 'px',
        n.getChild('timeTooltip').update(e, t, r)
      })
    },
    t
  }(mt);
  Gn.prototype.options_ = {
    children: [
      'timeTooltip'
    ]
  },
  mt.registerComponent('MouseTimeDisplay', Gn);
  var Wn = 30,
  qn = function (e) {
    function t(n, i) {
      L(this, t);
      var r = U(this, e.call(this, n, i));
      return r.update = tt(et(r, r.update), Wn),
      r.on(n, 'timeupdate', r.update),
      r.on(n, 'ended', r.handleEnded),
      r.updateInterval = null,
      r.on(n, [
        'playing'
      ], function () {
        r.clearInterval(r.updateInterval),
        r.updateInterval = r.setInterval(function () {
          r.requestAnimationFrame(function () {
            r.update()
          })
        }, Wn)
      }),
      r.on(n, [
        'ended',
        'pause',
        'waiting'
      ], function () {
        r.clearInterval(r.updateInterval)
      }),
      r.on(n, [
        'timeupdate',
        'ended'
      ], r.update),
      r
    }
    return D(t, e),
    t.prototype.createEl = function () {
      return e.prototype.createEl.call(this, 'div', {
        className: 'vjs-progress-holder'
      }, {
        'aria-label': this.localize('Progress Bar')
      })
    },
    t.prototype.update_ = function (e, t) {
      var n = this.player_.duration();
      this.el_.setAttribute('aria-valuenow', (100 * t).toFixed(2)),
      this.el_.setAttribute('aria-valuetext', this.localize('progress bar timing: currentTime={1} duration={2}', [
        Mn(e, n),
        Mn(n, n)
      ], '{1} of {2}')),
      this.bar.update(ye(this.el_), t)
    },
    t.prototype.update = function (t) {
      var n = e.prototype.update.call(this);
      return this.update_(this.getCurrentTime_(), n),
      n
    },
    t.prototype.getCurrentTime_ = function () {
      return this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime()
    },
    t.prototype.handleEnded = function (e) {
      this.update_(this.player_.duration(), 1)
    },
    t.prototype.getPercent = function () {
      var e = this.getCurrentTime_() / this.player_.duration();
      return e >= 1 ? 1 : e
    },
    t.prototype.handleMouseDown = function (t) {
      je(t) && (t.stopPropagation(), this.player_.scrubbing(!0), this.videoWasPlaying = !this.player_.paused(), this.player_.pause(), e.prototype.handleMouseDown.call(this, t))
    },
    t.prototype.handleMouseMove = function (e) {
      if (je(e)) {
        var t = this.calculateDistance(e) * this.player_.duration();
        t === this.player_.duration() && (t -= 0.1),
        this.player_.currentTime(t)
      }
    },
    t.prototype.enable = function () {
      e.prototype.enable.call(this);
      var t = this.getChild('mouseTimeDisplay');
      t && t.show()
    },
    t.prototype.disable = function () {
      e.prototype.disable.call(this);
      var t = this.getChild('mouseTimeDisplay');
      t && t.hide()
    },
    t.prototype.handleMouseUp = function (t) {
      e.prototype.handleMouseUp.call(this, t),
      t.stopPropagation(),
      this.player_.scrubbing(!1),
      this.player_.trigger({
        type: 'timeupdate',
        target: this,
        manuallyTriggered: !0
      }),
      this.videoWasPlaying && Ot(this.player_.play())
    },
    t.prototype.stepForward = function () {
      this.player_.currentTime(this.player_.currentTime() + 5)
    },
    t.prototype.stepBack = function () {
      this.player_.currentTime(this.player_.currentTime() - 5)
    },
    t.prototype.handleAction = function (e) {
      this.player_.paused() ? this.player_.play()  : this.player_.pause()
    },
    t.prototype.handleKeyPress = function (t) {
      32 === t.which || 13 === t.which ? (t.preventDefault(), this.handleAction(t))  : e.prototype.handleKeyPress && e.prototype.handleKeyPress.call(this, t)
    },
    t
  }(Hn);
  qn.prototype.options_ = {
    children: [
      'loadProgressBar',
      'playProgressBar'
    ],
    barName: 'playProgressBar'
  },
  x && !(x > 8) || A || b || qn.prototype.options_.children.splice(1, 0, 'mouseTimeDisplay'),
  qn.prototype.playerEvent = 'timeupdate',
  mt.registerComponent('SeekBar', qn);
  var Zn = function (e) {
    function t(n, i) {
      L(this, t);
      var r = U(this, e.call(this, n, i));
      return r.handleMouseMove = tt(et(r, r.handleMouseMove), 25),
      r.throttledHandleMouseSeek = tt(et(r, r.handleMouseSeek), 25),
      r.enable(),
      r
    }
    return D(t, e),
    t.prototype.createEl = function () {
      return e.prototype.createEl.call(this, 'div', {
        className: 'vjs-progress-control vjs-control'
      })
    },
    t.prototype.handleMouseMove = function (e) {
      var t = this.getChild('seekBar');
      if (t) {
        var n = t.getChild('mouseTimeDisplay'),
        i = t.el(),
        r = ye(i),
        o = _e(i, e).x;
        o > 1 ? o = 1 : o < 0 && (o = 0),
        n && n.update(r, o)
      }
    },
    t.prototype.handleMouseSeek = function (e) {
      var t = this.getChild('seekBar');
      t && t.handleMouseMove(e)
    },
    t.prototype.enabled = function () {
      return this.enabled_
    },
    t.prototype.disable = function () {
      this.children().forEach(function (e) {
        return e.disable && e.disable()
      }),
      this.enabled() && (this.off(['mousedown',
      'touchstart'], this.handleMouseDown), this.off(this.el_, 'mousemove', this.handleMouseMove), this.handleMouseUp(), this.addClass('disabled'), this.enabled_ = !1)
    },
    t.prototype.enable = function () {
      this.children().forEach(function (e) {
        return e.enable && e.enable()
      }),
      this.enabled() || (this.on(['mousedown',
      'touchstart'], this.handleMouseDown), this.on(this.el_, 'mousemove', this.handleMouseMove), this.removeClass('disabled'), this.enabled_ = !0)
    },
    t.prototype.handleMouseDown = function (e) {
      var t = this.el_.ownerDocument,
      n = this.getChild('seekBar');
      n && n.handleMouseDown(e),
      this.on(t, 'mousemove', this.throttledHandleMouseSeek),
      this.on(t, 'touchmove', this.throttledHandleMouseSeek),
      this.on(t, 'mouseup', this.handleMouseUp),
      this.on(t, 'touchend', this.handleMouseUp)
    },
    t.prototype.handleMouseUp = function (e) {
      var t = this.el_.ownerDocument,
      n = this.getChild('seekBar');
      n && n.handleMouseUp(e),
      this.off(t, 'mousemove', this.throttledHandleMouseSeek),
      this.off(t, 'touchmove', this.throttledHandleMouseSeek),
      this.off(t, 'mouseup', this.handleMouseUp),
      this.off(t, 'touchend', this.handleMouseUp)
    },
    t
  }(mt);
  Zn.prototype.options_ = {
    children: [
      'seekBar'
    ]
  },
  mt.registerComponent('ProgressControl', Zn);
  var Xn = function (e) {
    function t(n, i) {
      L(this, t);
      var r = U(this, e.call(this, n, i));
      return r.on(n, 'fullscreenchange', r.handleFullscreenChange),
      r
    }
    return D(t, e),
    t.prototype.buildCSSClass = function () {
      return 'vjs-fullscreen-control ' + e.prototype.buildCSSClass.call(this)
    },
    t.prototype.handleFullscreenChange = function (e) {
      this.player_.isFullscreen() ? this.controlText('Non-Fullscreen')  : this.controlText('Fullscreen')
    },
    t.prototype.handleClick = function (e) {
      this.player_.isFullscreen() ? this.player_.exitFullscreen()  : this.player_.requestFullscreen()
    },
    t
  }(On);
  Xn.prototype.controlText_ = 'Fullscreen',
  mt.registerComponent('FullscreenToggle', Xn);
  var Kn = function (e, t) {
    t.tech_ && !t.tech_.featuresVolumeControl && e.addClass('vjs-hidden'),
    e.on(t, 'loadstart', function () {
      t.tech_.featuresVolumeControl ? e.removeClass('vjs-hidden')  : e.addClass('vjs-hidden')
    })
  },
  Jn = function (e) {
    function t() {
      return L(this, t),
      U(this, e.apply(this, arguments))
    }
    return D(t, e),
    t.prototype.createEl = function () {
      return e.prototype.createEl.call(this, 'div', {
        className: 'vjs-volume-level',
        innerHTML: '<span class="vjs-control-text"></span>'
      })
    },
    t
  }(mt);
  mt.registerComponent('VolumeLevel', Jn);
  var $n = function (e) {
    function t(n, i) {
      L(this, t);
      var r = U(this, e.call(this, n, i));
      return r.on('slideractive', r.updateLastVolume_),
      r.on(n, 'volumechange', r.updateARIAAttributes),
      n.ready(function () {
        return r.updateARIAAttributes()
      }),
      r
    }
    return D(t, e),
    t.prototype.createEl = function () {
      return e.prototype.createEl.call(this, 'div', {
        className: 'vjs-volume-bar vjs-slider-bar'
      }, {
        'aria-label': this.localize('Volume Level'),
        'aria-live': 'polite'
      })
    },
    t.prototype.handleMouseDown = function (t) {
      je(t) && e.prototype.handleMouseDown.call(this, t)
    },
    t.prototype.handleMouseMove = function (e) {
      je(e) && (this.checkMuted(), this.player_.volume(this.calculateDistance(e)))
    },
    t.prototype.checkMuted = function () {
      this.player_.muted() && this.player_.muted(!1)
    },
    t.prototype.getPercent = function () {
      return this.player_.muted() ? 0 : this.player_.volume()
    },
    t.prototype.stepForward = function () {
      this.checkMuted(),
      this.player_.volume(this.player_.volume() + 0.1)
    },
    t.prototype.stepBack = function () {
      this.checkMuted(),
      this.player_.volume(this.player_.volume() - 0.1)
    },
    t.prototype.updateARIAAttributes = function (e) {
      var t = this.player_.muted() ? 0 : this.volumeAsPercentage_();
      this.el_.setAttribute('aria-valuenow', t),
      this.el_.setAttribute('aria-valuetext', t + '%')
    },
    t.prototype.volumeAsPercentage_ = function () {
      return Math.round(100 * this.player_.volume())
    },
    t.prototype.updateLastVolume_ = function () {
      var e = this,
      t = this.player_.volume();
      this.one('sliderinactive', function () {
        0 === e.player_.volume() && e.player_.lastVolume_(t)
      })
    },
    t
  }(Hn);
  $n.prototype.options_ = {
    children: [
      'volumeLevel'
    ],
    barName: 'volumeLevel'
  },
  $n.prototype.playerEvent = 'volumechange',
  mt.registerComponent('VolumeBar', $n);
  var ei = function (e) {
    function t(n) {
      var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
      };
      L(this, t),
      i.vertical = i.vertical || !1,
      (void 0 === i.volumeBar || V(i.volumeBar)) && (i.volumeBar = i.volumeBar || {
      }, i.volumeBar.vertical = i.vertical);
      var r = U(this, e.call(this, n, i));
      return Kn(r, n),
      r.throttledHandleMouseMove = tt(et(r, r.handleMouseMove), 25),
      r.on('mousedown', r.handleMouseDown),
      r.on('touchstart', r.handleMouseDown),
      r.on(r.volumeBar, [
        'focus',
        'slideractive'
      ], function () {
        r.volumeBar.addClass('vjs-slider-active'),
        r.addClass('vjs-slider-active'),
        r.trigger('slideractive')
      }),
      r.on(r.volumeBar, [
        'blur',
        'sliderinactive'
      ], function () {
        r.volumeBar.removeClass('vjs-slider-active'),
        r.removeClass('vjs-slider-active'),
        r.trigger('sliderinactive')
      }),
      r
    }
    return D(t, e),
    t.prototype.createEl = function () {
      var t = 'vjs-volume-horizontal';
      return this.options_.vertical && (t = 'vjs-volume-vertical'),
      e.prototype.createEl.call(this, 'div', {
        className: 'vjs-volume-control vjs-control ' + t
      })
    },
    t.prototype.handleMouseDown = function (e) {
      var t = this.el_.ownerDocument;
      this.on(t, 'mousemove', this.throttledHandleMouseMove),
      this.on(t, 'touchmove', this.throttledHandleMouseMove),
      this.on(t, 'mouseup', this.handleMouseUp),
      this.on(t, 'touchend', this.handleMouseUp)
    },
    t.prototype.handleMouseUp = function (e) {
      var t = this.el_.ownerDocument;
      this.off(t, 'mousemove', this.throttledHandleMouseMove),
      this.off(t, 'touchmove', this.throttledHandleMouseMove),
      this.off(t, 'mouseup', this.handleMouseUp),
      this.off(t, 'touchend', this.handleMouseUp)
    },
    t.prototype.handleMouseMove = function (e) {
      this.volumeBar.handleMouseMove(e)
    },
    t
  }(mt);
  ei.prototype.options_ = {
    children: [
      'volumeBar'
    ]
  },
  mt.registerComponent('VolumeControl', ei);
  var ti = function (e) {
    function t(n, i) {
      L(this, t);
      var r = U(this, e.call(this, n, i));
      return Kn(r, n),
      r.on(n, [
        'loadstart',
        'volumechange'
      ], r.update),
      r
    }
    return D(t, e),
    t.prototype.buildCSSClass = function () {
      return 'vjs-mute-control ' + e.prototype.buildCSSClass.call(this)
    },
    t.prototype.handleClick = function (e) {
      var t = this.player_.volume(),
      n = this.player_.lastVolume_();
      if (0 === t) {
        var i = n < 0.1 ? 0.1 : n;
        this.player_.volume(i),
        this.player_.muted(!1)
      } else this.player_.muted(!this.player_.muted())
    },
    t.prototype.update = function (e) {
      this.updateIcon_(),
      this.updateControlText_()
    },
    t.prototype.updateIcon_ = function () {
      var e = this.player_.volume(),
      t = 3;
      0 === e || this.player_.muted() ? t = 0 : e < 0.33 ? t = 1 : e < 0.67 && (t = 2);
      for (var n = 0; n < 4; n++) ce(this.el_, 'vjs-vol-' + n);
      ue(this.el_, 'vjs-vol-' + t)
    },
    t.prototype.updateControlText_ = function () {
      var e = this.player_.muted() || 0 === this.player_.volume() ? 'Unmute' : 'Mute';
      this.controlText() !== e && this.controlText(e)
    },
    t
  }(On);
  ti.prototype.controlText_ = 'Mute',
  mt.registerComponent('MuteToggle', ti);
  var ni = function (e) {
    function t(n) {
      var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
      };
      L(this, t),
      void 0 !== i.inline ? i.inline = i.inline : i.inline = !0,
      (void 0 === i.volumeControl || V(i.volumeControl)) && (i.volumeControl = i.volumeControl || {
      }, i.volumeControl.vertical = !i.inline);
      var r = U(this, e.call(this, n, i));
      return Kn(r, n),
      r.on(r.volumeControl, [
        'slideractive'
      ], r.sliderActive_),
      r.on(r.volumeControl, [
        'sliderinactive'
      ], r.sliderInactive_),
      r
    }
    return D(t, e),
    t.prototype.sliderActive_ = function () {
      this.addClass('vjs-slider-active')
    },
    t.prototype.sliderInactive_ = function () {
      this.removeClass('vjs-slider-active')
    },
    t.prototype.createEl = function () {
      var t = 'vjs-volume-panel-horizontal';
      return this.options_.inline || (t = 'vjs-volume-panel-vertical'),
      e.prototype.createEl.call(this, 'div', {
        className: 'vjs-volume-panel vjs-control ' + t
      })
    },
    t
  }(mt);
  ni.prototype.options_ = {
    children: [
      'muteToggle',
      'volumeControl'
    ]
  },
  mt.registerComponent('VolumePanel', ni);
  var ii = function (e) {
    function t(n, i) {
      L(this, t);
      var r = U(this, e.call(this, n, i));
      return i && (r.menuButton_ = i.menuButton),
      r.focusedChild_ = - 1,
      r.on('keydown', r.handleKeyPress),
      r
    }
    return D(t, e),
    t.prototype.addItem = function (e) {
      this.addChild(e),
      e.on('click', et(this, function (t) {
        this.menuButton_ && (this.menuButton_.unpressButton(), 'CaptionSettingsMenuItem' !== e.name() && this.menuButton_.focus())
      }))
    },
    t.prototype.createEl = function () {
      var t = this.options_.contentElType || 'ul';
      this.contentEl_ = oe(t, {
        className: 'vjs-menu-content'
      }),
      this.contentEl_.setAttribute('role', 'menu');
      var n = e.prototype.createEl.call(this, 'div', {
        append: this.contentEl_,
        className: 'vjs-menu'
      });
      return n.appendChild(this.contentEl_),
      Qe(n, 'click', function (e) {
        e.preventDefault(),
        e.stopImmediatePropagation()
      }),
      n
    },
    t.prototype.dispose = function () {
      this.contentEl_ = null,
      e.prototype.dispose.call(this)
    },
    t.prototype.handleKeyPress = function (e) {
      37 === e.which || 40 === e.which ? (e.preventDefault(), this.stepForward())  : 38 !== e.which && 39 !== e.which || (e.preventDefault(), this.stepBack())
    },
    t.prototype.stepForward = function () {
      var e = 0;
      void 0 !== this.focusedChild_ && (e = this.focusedChild_ + 1),
      this.focus(e)
    },
    t.prototype.stepBack = function () {
      var e = 0;
      void 0 !== this.focusedChild_ && (e = this.focusedChild_ - 1),
      this.focus(e)
    },
    t.prototype.focus = function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
      t = this.children().slice();
      t.length && t[0].className && /vjs-menu-title/.test(t[0].className) && t.shift(),
      t.length > 0 && (e < 0 ? e = 0 : e >= t.length && (e = t.length - 1), this.focusedChild_ = e, t[e].el_.focus())
    },
    t
  }(mt);
  mt.registerComponent('Menu', ii);
  var ri = function (e) {
    function t(n) {
      var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
      };
      L(this, t);
      var r = U(this, e.call(this, n, i));
      r.menuButton_ = new On(n, i),
      r.menuButton_.controlText(r.controlText_),
      r.menuButton_.el_.setAttribute('aria-haspopup', 'true');
      var o = On.prototype.buildCSSClass();
      return r.menuButton_.el_.className = r.buildCSSClass() + ' ' + o,
      r.menuButton_.removeClass('vjs-control'),
      r.addChild(r.menuButton_),
      r.update(),
      r.enabled_ = !0,
      r.on(r.menuButton_, 'tap', r.handleClick),
      r.on(r.menuButton_, 'click', r.handleClick),
      r.on(r.menuButton_, 'focus', r.handleFocus),
      r.on(r.menuButton_, 'blur', r.handleBlur),
      r.on('keydown', r.handleSubmenuKeyPress),
      r
    }
    return D(t, e),
    t.prototype.update = function () {
      var e = this.createMenu();
      this.menu && (this.menu.dispose(), this.removeChild(this.menu)),
      this.menu = e,
      this.addChild(e),
      this.buttonPressed_ = !1,
      this.menuButton_.el_.setAttribute('aria-expanded', 'false'),
      this.items && this.items.length <= this.hideThreshold_ ? this.hide()  : this.show()
    },
    t.prototype.createMenu = function () {
      var e = new ii(this.player_, {
        menuButton: this
      });
      if (this.hideThreshold_ = 0, this.options_.title) {
        var t = oe('li', {
          className: 'vjs-menu-title',
          innerHTML: vt(this.options_.title),
          tabIndex: - 1
        });
        this.hideThreshold_ += 1,
        e.children_.unshift(t),
        ae(t, e.contentEl())
      }
      if (this.items = this.createItems(), this.items) for (var n = 0; n < this.items.length; n++) e.addItem(this.items[n]);
      return e
    },
    t.prototype.createItems = function () {
    },
    t.prototype.createEl = function () {
      return e.prototype.createEl.call(this, 'div', {
        className: this.buildWrapperCSSClass()
      }, {
      })
    },
    t.prototype.buildWrapperCSSClass = function () {
      var t = 'vjs-menu-button';
      return !0 === this.options_.inline ? t += '-inline' : t += '-popup',
      'vjs-menu-button ' + t + ' ' + On.prototype.buildCSSClass() + ' ' + e.prototype.buildCSSClass.call(this)
    },
    t.prototype.buildCSSClass = function () {
      var t = 'vjs-menu-button';
      return !0 === this.options_.inline ? t += '-inline' : t += '-popup',
      'vjs-menu-button ' + t + ' ' + e.prototype.buildCSSClass.call(this)
    },
    t.prototype.controlText = function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.menuButton_.el();
      return this.menuButton_.controlText(e, t)
    },
    t.prototype.handleClick = function (e) {
      this.one(this.menu.contentEl(), 'mouseleave', et(this, function (e) {
        this.unpressButton(),
        this.el_.blur()
      })),
      this.buttonPressed_ ? this.unpressButton()  : this.pressButton()
    },
    t.prototype.focus = function () {
      this.menuButton_.focus()
    },
    t.prototype.blur = function () {
      this.menuButton_.blur()
    },
    t.prototype.handleFocus = function () {
      Qe(s, 'keydown', et(this, this.handleKeyPress))
    },
    t.prototype.handleBlur = function () {
      Ye(s, 'keydown', et(this, this.handleKeyPress))
    },
    t.prototype.handleKeyPress = function (e) {
      27 === e.which || 9 === e.which ? (this.buttonPressed_ && this.unpressButton(), 9 !== e.which && (e.preventDefault(), this.menuButton_.el_.focus()))  : 38 !== e.which && 40 !== e.which || this.buttonPressed_ || (this.pressButton(), e.preventDefault())
    },
    t.prototype.handleSubmenuKeyPress = function (e) {
      27 !== e.which && 9 !== e.which || (this.buttonPressed_ && this.unpressButton(), 9 !== e.which && (e.preventDefault(), this.menuButton_.el_.focus()))
    },
    t.prototype.pressButton = function () {
      if (this.enabled_) {
        if (this.buttonPressed_ = !0, this.menu.lockShowing(), this.menuButton_.el_.setAttribute('aria-expanded', 'true'), A && ie()) return;
        this.menu.focus()
      }
    },
    t.prototype.unpressButton = function () {
      this.enabled_ && (this.buttonPressed_ = !1, this.menu.unlockShowing(), this.menuButton_.el_.setAttribute('aria-expanded', 'false'))
    },
    t.prototype.disable = function () {
      this.unpressButton(),
      this.enabled_ = !1,
      this.addClass('vjs-disabled'),
      this.menuButton_.disable()
    },
    t.prototype.enable = function () {
      this.enabled_ = !0,
      this.removeClass('vjs-disabled'),
      this.menuButton_.enable()
    },
    t
  }(mt);
  mt.registerComponent('MenuButton', ri);
  var oi = function (e) {
    function t(n, i) {
      L(this, t);
      var r = i.tracks,
      o = U(this, e.call(this, n, i));
      if (o.items.length <= 1 && o.hide(), !r) return U(o);
      var s = et(o, o.update);
      return r.addEventListener('removetrack', s),
      r.addEventListener('addtrack', s),
      o.player_.on('ready', s),
      o.player_.on('dispose', function () {
        r.removeEventListener('removetrack', s),
        r.removeEventListener('addtrack', s)
      }),
      o
    }
    return D(t, e),
    t
  }(ri);
  mt.registerComponent('TrackButton', oi);
  var si = function (e) {
    function t(n, i) {
      L(this, t);
      var r = U(this, e.call(this, n, i));
      return r.selectable = i.selectable,
      r.isSelected_ = i.selected || !1,
      r.selected(r.isSelected_),
      r.selectable ? r.el_.setAttribute('role', 'menuitemcheckbox')  : r.el_.setAttribute('role', 'menuitem'),
      r
    }
    return D(t, e),
    t.prototype.createEl = function (t, n, i) {
      return this.nonIconControl = !0,
      e.prototype.createEl.call(this, 'li', Q({
        className: 'vjs-menu-item',
        innerHTML: '<span class="vjs-menu-item-text">' + this.localize(this.options_.label) + '</span>',
        tabIndex: - 1
      }, n), i)
    },
    t.prototype.handleClick = function (e) {
      this.selected(!0)
    },
    t.prototype.selected = function (e) {
      this.selectable && (e ? (this.addClass('vjs-selected'), this.el_.setAttribute('aria-checked', 'true'), this.controlText(', selected'), this.isSelected_ = !0)  : (this.removeClass('vjs-selected'), this.el_.setAttribute('aria-checked', 'false'), this.controlText(''), this.isSelected_ = !1))
    },
    t
  }(kn);
  mt.registerComponent('MenuItem', si);
  var ai = function (e) {
    function t(n, i) {
      L(this, t);
      var r = i.track,
      a = n.textTracks();
      i.label = r.label || r.language || 'Unknown',
      i.selected = 'showing' === r.mode;
      var l = U(this, e.call(this, n, i));
      l.track = r;
      var u = function () {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        l.handleTracksChange.apply(l, t)
      },
      c = function () {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        l.handleSelectedLanguageChange.apply(l, t)
      };
      if (n.on(['loadstart',
      'texttrackchange'], u), a.addEventListener('change', u), a.addEventListener('selectedlanguagechange', c), l.on('dispose', function () {
        n.off(['loadstart',
        'texttrackchange'], u),
        a.removeEventListener('change', u),
        a.removeEventListener('selectedlanguagechange', c)
      }), void 0 === a.onchange) {
        var h = void 0;
        l.on(['tap',
        'click'], function () {
          if ('object' !== M(o.Event)) try {
            h = new o.Event('change')
          } catch (e) {
          }
          h || (h = s.createEvent('Event')).initEvent('change', !0, !0),
          a.dispatchEvent(h)
        })
      }
      return l.handleTracksChange(),
      l
    }
    return D(t, e),
    t.prototype.handleClick = function (t) {
      var n = this.track.kind,
      i = this.track.kinds,
      r = this.player_.textTracks();
      if (i || (i = [
        n
      ]), e.prototype.handleClick.call(this, t), r) for (var o = 0; o < r.length; o++) {
        var s = r[o];
        s === this.track && i.indexOf(s.kind) > - 1 ? 'showing' !== s.mode && (s.mode = 'showing')  : 'disabled' !== s.mode && (s.mode = 'disabled')
      }
    },
    t.prototype.handleTracksChange = function (e) {
      var t = 'showing' === this.track.mode;
      t !== this.isSelected_ && this.selected(t)
    },
    t.prototype.handleSelectedLanguageChange = function (e) {
      if ('showing' === this.track.mode) {
        var t = this.player_.cache_.selectedLanguage;
        if (t && t.enabled && t.language === this.track.language && t.kind !== this.track.kind) return;
        this.player_.cache_.selectedLanguage = {
          enabled: !0,
          language: this.track.language,
          kind: this.track.kind
        }
      }
    },
    t.prototype.dispose = function () {
      this.track = null,
      e.prototype.dispose.call(this)
    },
    t
  }(si);
  mt.registerComponent('TextTrackMenuItem', ai);
  var li = function (e) {
    function t(n, i) {
      return L(this, t),
      i.track = {
        player: n,
        kind: i.kind,
        kinds: i.kinds,
      default:
        !1,
        mode: 'disabled'
      },
      i.kinds || (i.kinds = [
        i.kind
      ]),
      i.label ? i.track.label = i.label : i.track.label = i.kinds.join(' and ') + ' off',
      i.selectable = !0,
      U(this, e.call(this, n, i))
    }
    return D(t, e),
    t.prototype.handleTracksChange = function (e) {
      for (var t = this.player().textTracks(), n = !0, i = 0, r = t.length; i < r; i++) {
        var o = t[i];
        if (this.options_.kinds.indexOf(o.kind) > - 1 && 'showing' === o.mode) {
          n = !1;
          break
        }
      }
      n !== this.isSelected_ && this.selected(n)
    },
    t.prototype.handleSelectedLanguageChange = function (e) {
      for (var t = this.player().textTracks(), n = !0, i = 0, r = t.length; i < r; i++) {
        var o = t[i];
        if (['captions',
        'descriptions',
        'subtitles'].indexOf(o.kind) > - 1 && 'showing' === o.mode) {
          n = !1;
          break
        }
      }
      n && (this.player_.cache_.selectedLanguage = {
        enabled: !1
      })
    },
    t
  }(ai);
  mt.registerComponent('OffTextTrackMenuItem', li);
  var ui = function (e) {
    function t(n) {
      var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
      };
      return L(this, t),
      i.tracks = n.textTracks(),
      U(this, e.call(this, n, i))
    }
    return D(t, e),
    t.prototype.createItems = function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [
      ],
      t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ai,
      n = void 0;
      this.label_ && (n = this.label_ + ' off'),
      e.push(new li(this.player_, {
        kinds: this.kinds_,
        kind: this.kind_,
        label: n
      })),
      this.hideThreshold_ += 1;
      var i = this.player_.textTracks();
      Array.isArray(this.kinds_) || (this.kinds_ = [
        this.kind_
      ]);
      for (var r = 0; r < i.length; r++) {
        var o = i[r];
        if (this.kinds_.indexOf(o.kind) > - 1) {
          var s = new t(this.player_, {
            track: o,
            selectable: !0
          });
          s.addClass('vjs-' + o.kind + '-menu-item'),
          e.push(s)
        }
      }
      return e
    },
    t
  }(oi);
  mt.registerComponent('TextTrackButton', ui);
  var ci = function (e) {
    function t(n, i) {
      L(this, t);
      var r = i.track,
      o = i.cue,
      s = n.currentTime();
      i.selectable = !0,
      i.label = o.text,
      i.selected = o.startTime <= s && s < o.endTime;
      var a = U(this, e.call(this, n, i));
      return a.track = r,
      a.cue = o,
      r.addEventListener('cuechange', et(a, a.update)),
      a
    }
    return D(t, e),
    t.prototype.handleClick = function (t) {
      e.prototype.handleClick.call(this),
      this.player_.currentTime(this.cue.startTime),
      this.update(this.cue.startTime)
    },
    t.prototype.update = function (e) {
      var t = this.cue,
      n = this.player_.currentTime();
      this.selected(t.startTime <= n && n < t.endTime)
    },
    t
  }(si);
  mt.registerComponent('ChaptersTrackMenuItem', ci);
  var hi = function (e) {
    function t(n, i, r) {
      return L(this, t),
      U(this, e.call(this, n, i, r))
    }
    return D(t, e),
    t.prototype.buildCSSClass = function () {
      return 'vjs-chapters-button ' + e.prototype.buildCSSClass.call(this)
    },
    t.prototype.buildWrapperCSSClass = function () {
      return 'vjs-chapters-button ' + e.prototype.buildWrapperCSSClass.call(this)
    },
    t.prototype.update = function (t) {
      this.track_ && (!t || 'addtrack' !== t.type && 'removetrack' !== t.type) || this.setTrack(this.findChaptersTrack()),
      e.prototype.update.call(this)
    },
    t.prototype.setTrack = function (e) {
      if (this.track_ !== e) {
        if (this.updateHandler_ || (this.updateHandler_ = this.update.bind(this)), this.track_) {
          var t = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
          t && t.removeEventListener('load', this.updateHandler_),
          this.track_ = null
        }
        if (this.track_ = e, this.track_) {
          this.track_.mode = 'hidden';
          var n = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
          n && n.addEventListener('load', this.updateHandler_)
        }
      }
    },
    t.prototype.findChaptersTrack = function () {
      for (var e = this.player_.textTracks() || [
      ], t = e.length - 1; t >= 0; t--) {
        var n = e[t];
        if (n.kind === this.kind_) return n
      }
    },
    t.prototype.getMenuCaption = function () {
      return this.track_ && this.track_.label ? this.track_.label : this.localize(vt(this.kind_))
    },
    t.prototype.createMenu = function () {
      return this.options_.title = this.getMenuCaption(),
      e.prototype.createMenu.call(this)
    },
    t.prototype.createItems = function () {
      var e = [
      ];
      if (!this.track_) return e;
      var t = this.track_.cues;
      if (!t) return e;
      for (var n = 0, i = t.length; n < i; n++) {
        var r = t[n],
        o = new ci(this.player_, {
          track: this.track_,
          cue: r
        });
        e.push(o)
      }
      return e
    },
    t
  }(ui);
  hi.prototype.kind_ = 'chapters',
  hi.prototype.controlText_ = 'Chapters',
  mt.registerComponent('ChaptersButton', hi);
  var di = function (e) {
    function t(n, i, r) {
      L(this, t);
      var o = U(this, e.call(this, n, i, r)),
      s = n.textTracks(),
      a = et(o, o.handleTracksChange);
      return s.addEventListener('change', a),
      o.on('dispose', function () {
        s.removeEventListener('change', a)
      }),
      o
    }
    return D(t, e),
    t.prototype.handleTracksChange = function (e) {
      for (var t = this.player().textTracks(), n = !1, i = 0, r = t.length; i < r; i++) {
        var o = t[i];
        if (o.kind !== this.kind_ && 'showing' === o.mode) {
          n = !0;
          break
        }
      }
      n ? this.disable()  : this.enable()
    },
    t.prototype.buildCSSClass = function () {
      return 'vjs-descriptions-button ' + e.prototype.buildCSSClass.call(this)
    },
    t.prototype.buildWrapperCSSClass = function () {
      return 'vjs-descriptions-button ' + e.prototype.buildWrapperCSSClass.call(this)
    },
    t
  }(ui);
  di.prototype.kind_ = 'descriptions',
  di.prototype.controlText_ = 'Descriptions',
  mt.registerComponent('DescriptionsButton', di);
  var fi = function (e) {
    function t(n, i, r) {
      return L(this, t),
      U(this, e.call(this, n, i, r))
    }
    return D(t, e),
    t.prototype.buildCSSClass = function () {
      return 'vjs-subtitles-button ' + e.prototype.buildCSSClass.call(this)
    },
    t.prototype.buildWrapperCSSClass = function () {
      return 'vjs-subtitles-button ' + e.prototype.buildWrapperCSSClass.call(this)
    },
    t
  }(ui);
  fi.prototype.kind_ = 'subtitles',
  fi.prototype.controlText_ = 'Subtitles',
  mt.registerComponent('SubtitlesButton', fi);
  var pi = function (e) {
    function t(n, i) {
      L(this, t),
      i.track = {
        player: n,
        kind: i.kind,
        label: i.kind + ' settings',
        selectable: !1,
      default:
        !1,
        mode: 'disabled'
      },
      i.selectable = !1,
      i.name = 'CaptionSettingsMenuItem';
      var r = U(this, e.call(this, n, i));
      return r.addClass('vjs-texttrack-settings'),
      r.controlText(', opens ' + i.kind + ' settings dialog'),
      r
    }
    return D(t, e),
    t.prototype.handleClick = function (e) {
      this.player().getChild('textTrackSettings').open()
    },
    t
  }(ai);
  mt.registerComponent('CaptionSettingsMenuItem', pi);
  var vi = function (e) {
    function t(n, i, r) {
      return L(this, t),
      U(this, e.call(this, n, i, r))
    }
    return D(t, e),
    t.prototype.buildCSSClass = function () {
      return 'vjs-captions-button ' + e.prototype.buildCSSClass.call(this)
    },
    t.prototype.buildWrapperCSSClass = function () {
      return 'vjs-captions-button ' + e.prototype.buildWrapperCSSClass.call(this)
    },
    t.prototype.createItems = function () {
      var t = [
      ];
      return this.player().tech_ && this.player().tech_.featuresNativeTextTracks || (t.push(new pi(this.player_, {
        kind: this.kind_
      })), this.hideThreshold_ += 1),
      e.prototype.createItems.call(this, t)
    },
    t
  }(ui);
  vi.prototype.kind_ = 'captions',
  vi.prototype.controlText_ = 'Captions',
  mt.registerComponent('CaptionsButton', vi);
  var gi = function (e) {
    function t() {
      return L(this, t),
      U(this, e.apply(this, arguments))
    }
    return D(t, e),
    t.prototype.createEl = function (t, n, i) {
      var r = '<span class="vjs-menu-item-text">' + this.localize(this.options_.label);
      return 'captions' === this.options_.track.kind && (r += '\n        <span aria-hidden="true" class="vjs-icon-placeholder"></span>\n        <span class="vjs-control-text"> ' + this.localize('Captions') + '</span>\n      '),
      r += '</span>',
      e.prototype.createEl.call(this, t, Q({
        innerHTML: r
      }, n), i)
    },
    t
  }(ai);
  mt.registerComponent('SubsCapsMenuItem', gi);
  var mi = function (e) {
    function t(n) {
      var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
      };
      L(this, t);
      var r = U(this, e.call(this, n, i));
      return r.label_ = 'subtitles',
      [
        'en',
        'en-us',
        'en-ca',
        'fr-ca'
      ].indexOf(r.player_.language_) > - 1 && (r.label_ = 'captions'),
      r.menuButton_.controlText(vt(r.label_)),
      r
    }
    return D(t, e),
    t.prototype.buildCSSClass = function () {
      return 'vjs-subs-caps-button ' + e.prototype.buildCSSClass.call(this)
    },
    t.prototype.buildWrapperCSSClass = function () {
      return 'vjs-subs-caps-button ' + e.prototype.buildWrapperCSSClass.call(this)
    },
    t.prototype.createItems = function () {
      var t = [
      ];
      return this.player().tech_ && this.player().tech_.featuresNativeTextTracks || (t.push(new pi(this.player_, {
        kind: this.label_
      })), this.hideThreshold_ += 1),
      t = e.prototype.createItems.call(this, t, gi)
    },
    t
  }(ui);
  mi.prototype.kinds_ = [
    'captions',
    'subtitles'
  ],
  mi.prototype.controlText_ = 'Subtitles',
  mt.registerComponent('SubsCapsButton', mi);
  var Ai = function (e) {
    function t(n, i) {
      L(this, t);
      var r = i.track,
      o = n.audioTracks();
      i.label = r.label || r.language || 'Unknown',
      i.selected = r.enabled;
      var s = U(this, e.call(this, n, i));
      s.track = r;
      var a = function () {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        s.handleTracksChange.apply(s, t)
      };
      return o.addEventListener('change', a),
      s.on('dispose', function () {
        o.removeEventListener('change', a)
      }),
      s
    }
    return D(t, e),
    t.prototype.handleClick = function (t) {
      var n = this.player_.audioTracks();
      e.prototype.handleClick.call(this, t);
      for (var i = 0; i < n.length; i++) {
        var r = n[i];
        r.enabled = r === this.track
      }
    },
    t.prototype.handleTracksChange = function (e) {
      this.selected(this.track.enabled)
    },
    t
  }(si);
  mt.registerComponent('AudioTrackMenuItem', Ai);
  var yi = function (e) {
    function t(n) {
      var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
      };
      return L(this, t),
      i.tracks = n.audioTracks(),
      U(this, e.call(this, n, i))
    }
    return D(t, e),
    t.prototype.buildCSSClass = function () {
      return 'vjs-audio-button ' + e.prototype.buildCSSClass.call(this)
    },
    t.prototype.buildWrapperCSSClass = function () {
      return 'vjs-audio-button ' + e.prototype.buildWrapperCSSClass.call(this)
    },
    t.prototype.createItems = function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [
      ];
      this.hideThreshold_ = 1;
      for (var t = this.player_.audioTracks(), n = 0; n < t.length; n++) {
        var i = t[n];
        e.push(new Ai(this.player_, {
          track: i,
          selectable: !0
        }))
      }
      return e
    },
    t
  }(oi);
  yi.prototype.controlText_ = 'Audio Track',
  mt.registerComponent('AudioTrackButton', yi);
  var bi = function (e) {
    function t(n, i) {
      L(this, t);
      var r = i.rate,
      o = parseFloat(r, 10);
      i.label = r,
      i.selected = 1 === o,
      i.selectable = !0;
      var s = U(this, e.call(this, n, i));
      return s.label = r,
      s.rate = o,
      s.on(n, 'ratechange', s.update),
      s
    }
    return D(t, e),
    t.prototype.handleClick = function (t) {
      e.prototype.handleClick.call(this),
      this.player().playbackRate(this.rate)
    },
    t.prototype.update = function (e) {
      this.selected(this.player().playbackRate() === this.rate)
    },
    t
  }(si);
  bi.prototype.contentElType = 'button',
  mt.registerComponent('PlaybackRateMenuItem', bi);
  var _i = function (e) {
    function t(n, i) {
      L(this, t);
      var r = U(this, e.call(this, n, i));
      return r.updateVisibility(),
      r.updateLabel(),
      r.on(n, 'loadstart', r.updateVisibility),
      r.on(n, 'ratechange', r.updateLabel),
      r
    }
    return D(t, e),
    t.prototype.createEl = function () {
      var t = e.prototype.createEl.call(this);
      return this.labelEl_ = oe('div', {
        className: 'vjs-playback-rate-value',
        innerHTML: '1x'
      }),
      t.appendChild(this.labelEl_),
      t
    },
    t.prototype.dispose = function () {
      this.labelEl_ = null,
      e.prototype.dispose.call(this)
    },
    t.prototype.buildCSSClass = function () {
      return 'vjs-playback-rate ' + e.prototype.buildCSSClass.call(this)
    },
    t.prototype.buildWrapperCSSClass = function () {
      return 'vjs-playback-rate ' + e.prototype.buildWrapperCSSClass.call(this)
    },
    t.prototype.createMenu = function () {
      var e = new ii(this.player()),
      t = this.playbackRates();
      if (t) for (var n = t.length - 1; n >= 0; n--) e.addChild(new bi(this.player(), {
        rate: t[n] + 'x'
      }));
      return e
    },
    t.prototype.updateARIAAttributes = function () {
      this.el().setAttribute('aria-valuenow', this.player().playbackRate())
    },
    t.prototype.handleClick = function (e) {
      for (var t = this.player().playbackRate(), n = this.playbackRates(), i = n[0], r = 0; r < n.length; r++) if (n[r] > t) {
        i = n[r];
        break
      }
      this.player().playbackRate(i)
    },
    t.prototype.playbackRates = function () {
      return this.options_.playbackRates || this.options_.playerOptions && this.options_.playerOptions.playbackRates
    },
    t.prototype.playbackRateSupported = function () {
      return this.player().tech_ && this.player().tech_.featuresPlaybackRate && this.playbackRates() && this.playbackRates().length > 0
    },
    t.prototype.updateVisibility = function (e) {
      this.playbackRateSupported() ? this.removeClass('vjs-hidden')  : this.addClass('vjs-hidden')
    },
    t.prototype.updateLabel = function (e) {
      this.playbackRateSupported() && (this.labelEl_.innerHTML = this.player().playbackRate() + 'x')
    },
    t
  }(ri);
  _i.prototype.controlText_ = 'Playback Rate',
  mt.registerComponent('PlaybackRateMenuButton', _i);
  var wi = function (e) {
    function t() {
      return L(this, t),
      U(this, e.apply(this, arguments))
    }
    return D(t, e),
    t.prototype.buildCSSClass = function () {
      return 'vjs-spacer ' + e.prototype.buildCSSClass.call(this)
    },
    t.prototype.createEl = function () {
      return e.prototype.createEl.call(this, 'div', {
        className: this.buildCSSClass()
      })
    },
    t
  }(mt);
  mt.registerComponent('Spacer', wi);
  var Ti = function (e) {
    function t() {
      return L(this, t),
      U(this, e.apply(this, arguments))
    }
    return D(t, e),
    t.prototype.buildCSSClass = function () {
      return 'vjs-custom-control-spacer ' + e.prototype.buildCSSClass.call(this)
    },
    t.prototype.createEl = function () {
      var t = e.prototype.createEl.call(this, {
        className: this.buildCSSClass()
      });
      return t.innerHTML = ' ',
      t
    },
    t
  }(wi);
  mt.registerComponent('CustomControlSpacer', Ti);
  var ki = function (e) {
    function t() {
      return L(this, t),
      U(this, e.apply(this, arguments))
    }
    return D(t, e),
    t.prototype.createEl = function () {
      return e.prototype.createEl.call(this, 'div', {
        className: 'vjs-control-bar',
        dir: 'ltr'
      }, {
        role: 'group'
      })
    },
    t
  }(mt);
  ki.prototype.options_ = {
    children: [
      'playToggle',
      'volumePanel',
      'currentTimeDisplay',
      'timeDivider',
      'durationDisplay',
      'progressControl',
      'liveDisplay',
      'remainingTimeDisplay',
      'customControlSpacer',
      'playbackRateMenuButton',
      'chaptersButton',
      'descriptionsButton',
      'subsCapsButton',
      'audioTrackButton',
      'fullscreenToggle'
    ]
  },
  mt.registerComponent('ControlBar', ki);
  var Ei = function (e) {
    function t(n, i) {
      L(this, t);
      var r = U(this, e.call(this, n, i));
      return r.on(n, 'error', r.open),
      r
    }
    return D(t, e),
    t.prototype.buildCSSClass = function () {
      return 'vjs-error-display ' + e.prototype.buildCSSClass.call(this)
    },
    t.prototype.content = function () {
      var e = this.player().error();
      return e ? this.localize(e.message)  : ''
    },
    t
  }(Lt);
  Ei.prototype.options_ = gt(Lt.prototype.options_, {
    pauseOnOpen: !1,
    fillAlways: !0,
    temporary: !1,
    uncloseable: !0
  }),
  mt.registerComponent('ErrorDisplay', Ei);
  var Si = [
    '#000',
    'Black'
  ],
  ji = [
    '#00F',
    'Blue'
  ],
  Ci = [
    '#0FF',
    'Cyan'
  ],
  xi = [
    '#0F0',
    'Green'
  ],
  Bi = [
    '#F0F',
    'Magenta'
  ],
  Oi = [
    '#F00',
    'Red'
  ],
  Ii = [
    '#FFF',
    'White'
  ],
  Pi = [
    '#FF0',
    'Yellow'
  ],
  Ri = [
    '1',
    'Opaque'
  ],
  Mi = [
    '0.5',
    'Semi-Transparent'
  ],
  Li = [
    '0',
    'Transparent'
  ],
  Di = {
    backgroundColor: {
      selector: '.vjs-bg-color > select',
      id: 'captions-background-color-%s',
      label: 'Color',
      options: [
        Si,
        Ii,
        Oi,
        xi,
        ji,
        Pi,
        Bi,
        Ci
      ]
    },
    backgroundOpacity: {
      selector: '.vjs-bg-opacity > select',
      id: 'captions-background-opacity-%s',
      label: 'Transparency',
      options: [
        Ri,
        Mi,
        Li
      ]
    },
    color: {
      selector: '.vjs-fg-color > select',
      id: 'captions-foreground-color-%s',
      label: 'Color',
      options: [
        Ii,
        Si,
        Oi,
        xi,
        ji,
        Pi,
        Bi,
        Ci
      ]
    },
    edgeStyle: {
      selector: '.vjs-edge-style > select',
      id: '%s',
      label: 'Text Edge Style',
      options: [
        ['none',
        'None'],
        [
          'raised',
          'Raised'
        ],
        [
          'depressed',
          'Depressed'
        ],
        [
          'uniform',
          'Uniform'
        ],
        [
          'dropshadow',
          'Dropshadow'
        ]
      ]
    },
    fontFamily: {
      selector: '.vjs-font-family > select',
      id: 'captions-font-family-%s',
      label: 'Font Family',
      options: [
        ['proportionalSansSerif',
        'Proportional Sans-Serif'],
        [
          'monospaceSansSerif',
          'Monospace Sans-Serif'
        ],
        [
          'proportionalSerif',
          'Proportional Serif'
        ],
        [
          'monospaceSerif',
          'Monospace Serif'
        ],
        [
          'casual',
          'Casual'
        ],
        [
          'script',
          'Script'
        ],
        [
          'small-caps',
          'Small Caps'
        ]
      ]
    },
    fontPercent: {
      selector: '.vjs-font-percent > select',
      id: 'captions-font-size-%s',
      label: 'Font Size',
      options: [
        ['0.50',
        '50%'],
        [
          '0.75',
          '75%'
        ],
        [
          '1.00',
          '100%'
        ],
        [
          '1.25',
          '125%'
        ],
        [
          '1.50',
          '150%'
        ],
        [
          '1.75',
          '175%'
        ],
        [
          '2.00',
          '200%'
        ],
        [
          '3.00',
          '300%'
        ],
        [
          '4.00',
          '400%'
        ]
      ],
    default:
      2,
      parser: function (e) {
        return '1.00' === e ? null : Number(e)
      }
    },
    textOpacity: {
      selector: '.vjs-text-opacity > select',
      id: 'captions-foreground-opacity-%s',
      label: 'Transparency',
      options: [
        Ri,
        Mi
      ]
    },
    windowColor: {
      selector: '.vjs-window-color > select',
      id: 'captions-window-color-%s',
      label: 'Color'
    },
    windowOpacity: {
      selector: '.vjs-window-opacity > select',
      id: 'captions-window-opacity-%s',
      label: 'Transparency',
      options: [
        Li,
        Mi,
        Ri
      ]
    }
  };
  function Ui(e, t) {
    if (t && (e = t(e)), e && 'none' !== e) return e
  }
  Di.windowColor.options = Di.backgroundColor.options;
  var Ni = function (e) {
    function t(n, i) {
      L(this, t),
      i.temporary = !1;
      var r = U(this, e.call(this, n, i));
      return r.updateDisplay = et(r, r.updateDisplay),
      r.fill(),
      r.hasBeenOpened_ = r.hasBeenFilled_ = !0,
      r.endDialog = oe('p', {
        className: 'vjs-control-text',
        textContent: r.localize('End of dialog window.')
      }),
      r.el().appendChild(r.endDialog),
      r.setDefaults(),
      void 0 === i.persistTextTrackSettings && (r.options_.persistTextTrackSettings = r.options_.playerOptions.persistTextTrackSettings),
      r.on(r.$('.vjs-done-button'), 'click', function () {
        r.saveSettings(),
        r.close()
      }),
      r.on(r.$('.vjs-default-button'), 'click', function () {
        r.setDefaults(),
        r.updateDisplay()
      }),
      H(Di, function (e) {
        r.on(r.$(e.selector), 'change', r.updateDisplay)
      }),
      r.options_.persistTextTrackSettings && r.restoreSettings(),
      r
    }
    return D(t, e),
    t.prototype.dispose = function () {
      this.endDialog = null,
      e.prototype.dispose.call(this)
    },
    t.prototype.createElSelect_ = function (e) {
      var t = this,
      n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
      i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'label',
      r = Di[e],
      o = r.id.replace('%s', this.id_);
      return ['<' + i + ' id="' + o + '" class="' + ('label' === i ? 'vjs-label' : '') + '">',
      this.localize(r.label),
      '</' + i + '>',
      '<select aria-labelledby="' + ('' !== n ? n + ' ' : '') + o + '">'].concat(r.options.map(function (e) {
        var i = o + '-' + e[1];
        return ['<option id="' + i + '" value="' + e[0] + '" ',
        'aria-labelledby="' + ('' !== n ? n + ' ' : '') + o + ' ' + i + '">',
        t.localize(e[1]),
        '</option>'].join('')
      })).concat('</select>').join('')
    },
    t.prototype.createElFgColor_ = function () {
      var e = 'captions-text-legend-' + this.id_;
      return ['<fieldset class="vjs-fg-color vjs-track-setting">',
      '<legend id="' + e + '">',
      this.localize('Text'),
      '</legend>',
      this.createElSelect_('color', e),
      '<span class="vjs-text-opacity vjs-opacity">',
      this.createElSelect_('textOpacity', e),
      '</span>',
      '</fieldset>'].join('')
    },
    t.prototype.createElBgColor_ = function () {
      var e = 'captions-background-' + this.id_;
      return ['<fieldset class="vjs-bg-color vjs-track-setting">',
      '<legend id="' + e + '">',
      this.localize('Background'),
      '</legend>',
      this.createElSelect_('backgroundColor', e),
      '<span class="vjs-bg-opacity vjs-opacity">',
      this.createElSelect_('backgroundOpacity', e),
      '</span>',
      '</fieldset>'].join('')
    },
    t.prototype.createElWinColor_ = function () {
      var e = 'captions-window-' + this.id_;
      return ['<fieldset class="vjs-window-color vjs-track-setting">',
      '<legend id="' + e + '">',
      this.localize('Window'),
      '</legend>',
      this.createElSelect_('windowColor', e),
      '<span class="vjs-window-opacity vjs-opacity">',
      this.createElSelect_('windowOpacity', e),
      '</span>',
      '</fieldset>'].join('')
    },
    t.prototype.createElColors_ = function () {
      return oe('div', {
        className: 'vjs-track-settings-colors',
        innerHTML: [
          this.createElFgColor_(),
          this.createElBgColor_(),
          this.createElWinColor_()
        ].join('')
      })
    },
    t.prototype.createElFont_ = function () {
      return oe('div', {
        className: 'vjs-track-settings-font',
        innerHTML: [
          '<fieldset class="vjs-font-percent vjs-track-setting">',
          this.createElSelect_('fontPercent', '', 'legend'),
          '</fieldset>',
          '<fieldset class="vjs-edge-style vjs-track-setting">',
          this.createElSelect_('edgeStyle', '', 'legend'),
          '</fieldset>',
          '<fieldset class="vjs-font-family vjs-track-setting">',
          this.createElSelect_('fontFamily', '', 'legend'),
          '</fieldset>'
        ].join('')
      })
    },
    t.prototype.createElControls_ = function () {
      var e = this.localize('restore all settings to the default values');
      return oe('div', {
        className: 'vjs-track-settings-controls',
        innerHTML: [
          '<button class="vjs-default-button" title="' + e + '">',
          this.localize('Reset'),
          '<span class="vjs-control-text"> ' + e + '</span>',
          '</button>',
          '<button class="vjs-done-button">' + this.localize('Done') + '</button>'
        ].join('')
      })
    },
    t.prototype.content = function () {
      return [this.createElColors_(),
      this.createElFont_(),
      this.createElControls_()]
    },
    t.prototype.label = function () {
      return this.localize('Caption Settings Dialog')
    },
    t.prototype.description = function () {
      return this.localize('Beginning of dialog window. Escape will cancel and close the window.')
    },
    t.prototype.buildCSSClass = function () {
      return e.prototype.buildCSSClass.call(this) + ' vjs-text-track-settings'
    },
    t.prototype.getValues = function () {
      var e = this;
      return function (e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return z(e).reduce(function (n, i) {
          return t(n, e[i], i)
        }, n)
      }(Di, function (t, n, i) {
        var r,
        o,
        s = (r = e.$(n.selector), o = n.parser, Ui(r.options[r.options.selectedIndex].value, o));
        return void 0 !== s && (t[i] = s),
        t
      }, {
      })
    },
    t.prototype.setValues = function (e) {
      var t = this;
      H(Di, function (n, i) {
        !function (e, t, n) {
          if (t) for (var i = 0; i < e.options.length; i++) if (Ui(e.options[i].value, n) === t) {
            e.selectedIndex = i;
            break
          }
        }(t.$(n.selector), e[i], n.parser)
      })
    },
    t.prototype.setDefaults = function () {
      var e = this;
      H(Di, function (t) {
        var n = t.hasOwnProperty('default') ? t.default:
        0;
        e.$(t.selector).selectedIndex = n
      })
    },
    t.prototype.restoreSettings = function () {
      var e = void 0;
      try {
        e = JSON.parse(o.localStorage.getItem('vjs-text-track-settings'))
      } catch (e) {
        X.warn(e)
      }
      e && this.setValues(e)
    },
    t.prototype.saveSettings = function () {
      if (this.options_.persistTextTrackSettings) {
        var e = this.getValues();
        try {
          Object.keys(e).length ? o.localStorage.setItem('vjs-text-track-settings', JSON.stringify(e))  : o.localStorage.removeItem('vjs-text-track-settings')
        } catch (e) {
          X.warn(e)
        }
      }
    },
    t.prototype.updateDisplay = function () {
      var e = this.player_.getChild('textTrackDisplay');
      e && e.updateDisplay()
    },
    t.prototype.conditionalBlur_ = function () {
      this.previouslyActiveEl_ = null,
      this.off(s, 'keydown', this.handleKeyDown);
      var e = this.player_.controlBar,
      t = e && e.subsCapsButton,
      n = e && e.captionsButton;
      t ? t.focus()  : n && n.focus()
    },
    t
  }(Lt);
  mt.registerComponent('TextTrackSettings', Ni);
  var Fi = function (e) {
    function t(n, i) {
      L(this, t);
      var r = i.ResizeObserver || o.ResizeObserver;
      null === i.ResizeObserver && (r = !1);
      var s = gt({
        createEl: !r
      }, i),
      a = U(this, e.call(this, n, s));
      return a.ResizeObserver = i.ResizeObserver || o.ResizeObserver,
      a.loadListener_ = null,
      a.resizeObserver_ = null,
      a.debouncedHandler_ = nt(function () {
        a.resizeHandler()
      }, 100, !1, n),
      r ? (a.resizeObserver_ = new a.ResizeObserver(a.debouncedHandler_), a.resizeObserver_.observe(n.el()))  : (a.loadListener_ = function () {
        a.el_.contentWindow && Qe(a.el_.contentWindow, 'resize', a.debouncedHandler_),
        a.off('load', a.loadListener_)
      }, a.on('load', a.loadListener_)),
      a
    }
    return D(t, e),
    t.prototype.createEl = function () {
      return e.prototype.createEl.call(this, 'iframe', {
        className: 'vjs-resize-manager'
      })
    },
    t.prototype.resizeHandler = function () {
      this.player_.trigger('playerresize')
    },
    t.prototype.dispose = function () {
      this.resizeObserver_ && (this.resizeObserver_.unobserve(this.player_.el()), this.resizeObserver_.disconnect()),
      this.el_ && this.el_.contentWindow && Ye(this.el_.contentWindow, 'resize', this.debouncedHandler_),
      this.loadListener_ && this.off('load', this.loadListener_),
      this.ResizeObserver = null,
      this.resizeObserver = null,
      this.debouncedHandler_ = null,
      this.loadListener_ = null
    },
    t
  }(mt);
  mt.registerComponent('ResizeManager', Fi);
  var zi = N(['Text Tracks are being loaded from another origin but the crossorigin attribute isn\'t used.\n            This may prevent text tracks from loading.'], [
    'Text Tracks are being loaded from another origin but the crossorigin attribute isn\'t used.\n            This may prevent text tracks from loading.'
  ]),
  Hi = function (e) {
    function t(n, i) {
      L(this, t);
      var r = U(this, e.call(this, n, i)),
      o = n.source,
      s = !1;
      if (o && (r.el_.currentSrc !== o.src || n.tag && 3 === n.tag.initNetworkState_) ? r.setSource(o)  : r.handleLateInit_(r.el_), r.el_.hasChildNodes()) {
        for (var l = r.el_.childNodes, u = l.length, c = [
        ]; u--; ) {
          var h = l[u];
          'track' === h.nodeName.toLowerCase() && (r.featuresNativeTextTracks ? (r.remoteTextTrackEls().addTrackElement_(h), r.remoteTextTracks().addTrack(h.track), r.textTracks().addTrack(h.track), s || r.el_.hasAttribute('crossorigin') || !$t(h.src) || (s = !0))  : c.push(h))
        }
        for (var d = 0; d < c.length; d++) r.el_.removeChild(c[d])
      }
      return r.proxyNativeTracks_(),
      r.featuresNativeTextTracks && s && X.warn(a(zi)),
      r.restoreMetadataTracksInIOSNativePlayer_(),
      (I || g || T) && !0 === n.nativeControlsForTouch && r.setControls(!0),
      r.proxyWebkitFullscreen_(),
      r.triggerReady(),
      r
    }
    return D(t, e),
    t.prototype.dispose = function () {
      t.disposeMediaElement(this.el_),
      this.options_ = null,
      e.prototype.dispose.call(this)
    },
    t.prototype.restoreMetadataTracksInIOSNativePlayer_ = function () {
      var e = this.textTracks(),
      t = void 0,
      n = function () {
        t = [
        ];
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          'metadata' === i.kind && t.push({
            track: i,
            storedMode: i.mode
          })
        }
      };
      n(),
      e.addEventListener('change', n),
      this.on('dispose', function () {
        return e.removeEventListener('change', n)
      });
      var i = function n() {
        for (var i = 0; i < t.length; i++) {
          var r = t[i];
          'disabled' === r.track.mode && r.track.mode !== r.storedMode && (r.track.mode = r.storedMode)
        }
        e.removeEventListener('change', n)
      };
      this.on('webkitbeginfullscreen', function () {
        e.removeEventListener('change', n),
        e.removeEventListener('change', i),
        e.addEventListener('change', i)
      }),
      this.on('webkitendfullscreen', function () {
        e.removeEventListener('change', n),
        e.addEventListener('change', n),
        e.removeEventListener('change', i)
      })
    },
    t.prototype.proxyNativeTracks_ = function () {
      var e = this;
      cn.names.forEach(function (t) {
        var n = cn[t],
        i = e.el() [n.getterName],
        r = e[n.getterName]();
        if (e['featuresNative' + n.capitalName + 'Tracks'] && i && i.addEventListener) {
          var o = {
            change: function (e) {
              r.trigger({
                type: 'change',
                target: r,
                currentTarget: r,
                srcElement: r
              })
            },
            addtrack: function (e) {
              r.addTrack(e.track)
            },
            removetrack: function (e) {
              r.removeTrack(e.track)
            }
          },
          s = function () {
            for (var e = [
            ], t = 0; t < r.length; t++) {
              for (var n = !1, o = 0; o < i.length; o++) if (i[o] === r[t]) {
                n = !0;
                break
              }
              n || e.push(r[t])
            }
            for (; e.length; ) r.removeTrack(e.shift())
          };
          Object.keys(o).forEach(function (t) {
            var n = o[t];
            i.addEventListener(t, n),
            e.on('dispose', function (e) {
              return i.removeEventListener(t, n)
            })
          }),
          e.on('loadstart', s),
          e.on('dispose', function (t) {
            return e.off('loadstart', s)
          })
        }
      })
    },
    t.prototype.createEl = function () {
      var e = this.options_.tag;
      if (!e || !this.options_.playerElIngest && !this.movingMediaElementInDOM) {
        if (e) {
          var n = e.cloneNode(!0);
          e.parentNode && e.parentNode.insertBefore(n, e),
          t.disposeMediaElement(e),
          e = n
        } else {
          e = s.createElement('video');
          var i = gt({
          }, this.options_.tag && fe(this.options_.tag));
          I && !0 === this.options_.nativeControlsForTouch || delete i.controls,
          de(e, Q(i, {
            id: this.options_.techId,
            class : 'vjs-tech'
          }))
        }
        e.playerId = this.options_.playerId
      }
      void 0 !== this.options_.preload && ve(e, 'preload', this.options_.preload);
      for (var r = [
        'loop',
        'muted',
        'playsinline',
        'autoplay'
      ], o = 0; o < r.length; o++) {
        var a = r[o],
        l = this.options_[a];
        void 0 !== l && (l ? ve(e, a, a)  : ge(e, a), e[a] = l)
      }
      return e
    },
    t.prototype.handleLateInit_ = function (e) {
      if (0 !== e.networkState && 3 !== e.networkState) {
        if (0 === e.readyState) {
          var t = !1,
          n = function () {
            t = !0
          };
          this.on('loadstart', n);
          var i = function () {
            t || this.trigger('loadstart')
          };
          return this.on('loadedmetadata', i),
          void this.ready(function () {
            this.off('loadstart', n),
            this.off('loadedmetadata', i),
            t || this.trigger('loadstart')
          })
        }
        var r = [
          'loadstart'
        ];
        r.push('loadedmetadata'),
        e.readyState >= 2 && r.push('loadeddata'),
        e.readyState >= 3 && r.push('canplay'),
        e.readyState >= 4 && r.push('canplaythrough'),
        this.ready(function () {
          r.forEach(function (e) {
            this.trigger(e)
          }, this)
        })
      }
    },
    t.prototype.setCurrentTime = function (e) {
      try {
        this.el_.currentTime = e
      } catch (e) {
        X(e, 'Video is not ready. (Video.js)')
      }
    },
    t.prototype.duration = function () {
      var e = this;
      if (this.el_.duration === 1 / 0 && b && S && 0 === this.el_.currentTime) {
        return this.on('timeupdate', function t() {
          e.el_.currentTime > 0 && (e.el_.duration === 1 / 0 && e.trigger('durationchange'), e.off('timeupdate', t))
        }),
        NaN
      }
      return this.el_.duration || NaN
    },
    t.prototype.width = function () {
      return this.el_.offsetWidth
    },
    t.prototype.height = function () {
      return this.el_.offsetHeight
    },
    t.prototype.proxyWebkitFullscreen_ = function () {
      var e = this;
      if ('webkitDisplayingFullscreen' in this.el_) {
        var t = function () {
          this.trigger('fullscreenchange', {
            isFullscreen: !1
          })
        },
        n = function () {
          'webkitPresentationMode' in this.el_ && 'picture-in-picture' !== this.el_.webkitPresentationMode && (this.one('webkitendfullscreen', t), this.trigger('fullscreenchange', {
            isFullscreen: !0
          }))
        };
        this.on('webkitbeginfullscreen', n),
        this.on('dispose', function () {
          e.off('webkitbeginfullscreen', n),
          e.off('webkitendfullscreen', t)
        })
      }
    },
    t.prototype.supportsFullScreen = function () {
      if ('function' == typeof this.el_.webkitEnterFullScreen) {
        var e = o.navigator && o.navigator.userAgent || '';
        if (/Android/.test(e) || !/Chrome|Mac OS X 10.5/.test(e)) return !0
      }
      return !1
    },
    t.prototype.enterFullScreen = function () {
      var e = this.el_;
      e.paused && e.networkState <= e.HAVE_METADATA ? (this.el_.play(), this.setTimeout(function () {
        e.pause(),
        e.webkitEnterFullScreen()
      }, 0))  : e.webkitEnterFullScreen()
    },
    t.prototype.exitFullScreen = function () {
      this.el_.webkitExitFullScreen()
    },
    t.prototype.src = function (e) {
      if (void 0 === e) return this.el_.src;
      this.setSrc(e)
    },
    t.prototype.reset = function () {
      t.resetMediaElement(this.el_)
    },
    t.prototype.currentSrc = function () {
      return this.currentSource_ ? this.currentSource_.src : this.el_.currentSrc
    },
    t.prototype.setControls = function (e) {
      this.el_.controls = !!e
    },
    t.prototype.addTextTrack = function (t, n, i) {
      return this.featuresNativeTextTracks ? this.el_.addTextTrack(t, n, i)  : e.prototype.addTextTrack.call(this, t, n, i)
    },
    t.prototype.createRemoteTextTrack = function (t) {
      if (!this.featuresNativeTextTracks) return e.prototype.createRemoteTextTrack.call(this, t);
      var n = s.createElement('track');
      return t.kind && (n.kind = t.kind),
      t.label && (n.label = t.label),
      (t.language || t.srclang) && (n.srclang = t.language || t.srclang),
      t.default && (n.default = t.default),
      t.id && (n.id = t.id),
      t.src && (n.src = t.src),
      n
    }, t.prototype.addRemoteTextTrack = function (t, n) {
      var i = e.prototype.addRemoteTextTrack.call(this, t, n);
      return this.featuresNativeTextTracks && this.el().appendChild(i),
      i
    }, t.prototype.removeRemoteTextTrack = function (t) {
      if (e.prototype.removeRemoteTextTrack.call(this, t), this.featuresNativeTextTracks) for (var n = this.$$('track'), i = n.length; i--; ) t !== n[i] && t !== n[i].track || this.el().removeChild(n[i])
    }, t.prototype.getVideoPlaybackQuality = function () {
      if ('function' == typeof this.el().getVideoPlaybackQuality) return this.el().getVideoPlaybackQuality();
      var e = {
      };
      return void 0 !== this.el().webkitDroppedFrameCount && void 0 !== this.el().webkitDecodedFrameCount && (e.droppedVideoFrames = this.el().webkitDroppedFrameCount, e.totalVideoFrames = this.el().webkitDecodedFrameCount),
      o.performance && 'function' == typeof o.performance.now ? e.creationTime = o.performance.now()  : o.performance && o.performance.timing && 'number' == typeof o.performance.timing.navigationStart && (e.creationTime = o.Date.now() - o.performance.timing.navigationStart),
      e
    }, t
  }(fn);
  if (te()) {
    Hi.TEST_VID = s.createElement('video');
    var Qi = s.createElement('track');
    Qi.kind = 'captions',
    Qi.srclang = 'en',
    Qi.label = 'English',
    Hi.TEST_VID.appendChild(Qi)
  }
  Hi.isSupported = function () {
    try {
      Hi.TEST_VID.volume = 0.5
    } catch (e) {
      return !1
    }
    return !(!Hi.TEST_VID || !Hi.TEST_VID.canPlayType)
  },
  Hi.canPlayType = function (e) {
    return Hi.TEST_VID.canPlayType(e)
  },
  Hi.canPlaySource = function (e, t) {
    return Hi.canPlayType(e.type)
  },
  Hi.canControlVolume = function () {
    try {
      var e = Hi.TEST_VID.volume;
      return Hi.TEST_VID.volume = e / 2 + 0.1,
      e !== Hi.TEST_VID.volume
    } catch (e) {
      return !1
    }
  },
  Hi.canControlPlaybackRate = function () {
    if (b && S && j < 58) return !1;
    try {
      var e = Hi.TEST_VID.playbackRate;
      return Hi.TEST_VID.playbackRate = e / 2 + 0.1,
      e !== Hi.TEST_VID.playbackRate
    } catch (e) {
      return !1
    }
  },
  Hi.supportsNativeTextTracks = function () {
    return O
  },
  Hi.supportsNativeVideoTracks = function () {
    return !(!Hi.TEST_VID || !Hi.TEST_VID.videoTracks)
  },
  Hi.supportsNativeAudioTracks = function () {
    return !(!Hi.TEST_VID || !Hi.TEST_VID.audioTracks)
  },
  Hi.Events = [
    'loadstart',
    'suspend',
    'abort',
    'error',
    'emptied',
    'stalled',
    'loadedmetadata',
    'loadeddata',
    'canplay',
    'canplaythrough',
    'playing',
    'waiting',
    'seeking',
    'seeked',
    'ended',
    'durationchange',
    'timeupdate',
    'progress',
    'play',
    'pause',
    'ratechange',
    'resize',
    'volumechange'
  ],
  Hi.prototype.featuresVolumeControl = Hi.canControlVolume(),
  Hi.prototype.featuresPlaybackRate = Hi.canControlPlaybackRate(),
  Hi.prototype.movingMediaElementInDOM = !A,
  Hi.prototype.featuresFullscreenResize = !0,
  Hi.prototype.featuresProgressEvents = !0,
  Hi.prototype.featuresTimeupdateEvents = !0,
  Hi.prototype.featuresNativeTextTracks = Hi.supportsNativeTextTracks(),
  Hi.prototype.featuresNativeVideoTracks = Hi.supportsNativeVideoTracks(),
  Hi.prototype.featuresNativeAudioTracks = Hi.supportsNativeAudioTracks();
  var Yi = Hi.TEST_VID && Hi.TEST_VID.constructor.prototype.canPlayType,
  Vi = /^application\/(?:x-|vnd\.apple\.)mpegurl/i,
  Gi = /^video\/mp4/i;
  Hi.patchCanPlayType = function () {
    _ >= 4 && !k && !S ? Hi.TEST_VID.constructor.prototype.canPlayType = function (e) {
      return e && Vi.test(e) ? 'maybe' : Yi.call(this, e)
    }
     : w && (Hi.TEST_VID.constructor.prototype.canPlayType = function (e) {
      return e && Gi.test(e) ? 'maybe' : Yi.call(this, e)
    })
  },
  Hi.unpatchCanPlayType = function () {
    var e = Hi.TEST_VID.constructor.prototype.canPlayType;
    return Hi.TEST_VID.constructor.prototype.canPlayType = Yi,
    e
  },
  Hi.patchCanPlayType(),
  Hi.disposeMediaElement = function (e) {
    if (e) {
      for (e.parentNode && e.parentNode.removeChild(e); e.hasChildNodes(); ) e.removeChild(e.firstChild);
      e.removeAttribute('src'),
      'function' == typeof e.load && function () {
        try {
          e.load()
        } catch (e) {
        }
      }()
    }
  },
  Hi.resetMediaElement = function (e) {
    if (e) {
      for (var t = e.querySelectorAll('source'), n = t.length; n--; ) e.removeChild(t[n]);
      e.removeAttribute('src'),
      'function' == typeof e.load && function () {
        try {
          e.load()
        } catch (e) {
        }
      }()
    }
  },
  [
    'muted',
    'defaultMuted',
    'autoplay',
    'controls',
    'loop',
    'playsinline'
  ].forEach(function (e) {
    Hi.prototype[e] = function () {
      return this.el_[e] || this.el_.hasAttribute(e)
    }
  }),
  [
    'muted',
    'defaultMuted',
    'autoplay',
    'loop',
    'playsinline'
  ].forEach(function (e) {
    Hi.prototype['set' + vt(e)] = function (t) {
      this.el_[e] = t,
      t ? this.el_.setAttribute(e, e)  : this.el_.removeAttribute(e)
    }
  }),
  [
    'paused',
    'currentTime',
    'buffered',
    'volume',
    'poster',
    'preload',
    'error',
    'seeking',
    'seekable',
    'ended',
    'playbackRate',
    'defaultPlaybackRate',
    'played',
    'networkState',
    'readyState',
    'videoWidth',
    'videoHeight'
  ].forEach(function (e) {
    Hi.prototype[e] = function () {
      return this.el_[e]
    }
  }),
  [
    'volume',
    'src',
    'poster',
    'preload',
    'playbackRate',
    'defaultPlaybackRate'
  ].forEach(function (e) {
    Hi.prototype['set' + vt(e)] = function (t) {
      this.el_[e] = t
    }
  }),
  [
    'pause',
    'load',
    'play'
  ].forEach(function (e) {
    Hi.prototype[e] = function () {
      return this.el_[e]()
    }
  }),
  fn.withSourceHandlers(Hi),
  Hi.nativeSourceHandler = {
  },
  Hi.nativeSourceHandler.canPlayType = function (e) {
    try {
      return Hi.TEST_VID.canPlayType(e)
    } catch (e) {
      return ''
    }
  },
  Hi.nativeSourceHandler.canHandleSource = function (e, t) {
    if (e.type) return Hi.nativeSourceHandler.canPlayType(e.type);
    if (e.src) {
      var n = Jt(e.src);
      return Hi.nativeSourceHandler.canPlayType('video/' + n)
    }
    return ''
  },
  Hi.nativeSourceHandler.handleSource = function (e, t, n) {
    t.setSrc(e.src)
  },
  Hi.nativeSourceHandler.dispose = function () {
  },
  Hi.registerSourceHandler(Hi.nativeSourceHandler),
  fn.registerTech('Html5', Hi);
  var Wi = N(['\n        Using the tech directly can be dangerous. I hope you know what you\'re doing.\n        See https://github.com/videojs/video.js/issues/2617 for more info.\n      '], [
    '\n        Using the tech directly can be dangerous. I hope you know what you\'re doing.\n        See https://github.com/videojs/video.js/issues/2617 for more info.\n      '
  ]),
  qi = [
    'progress',
    'abort',
    'suspend',
    'emptied',
    'stalled',
    'loadedmetadata',
    'loadeddata',
    'timeupdate',
    'ratechange',
    'resize',
    'volumechange',
    'texttrackchange'
  ],
  Zi = function (e) {
    function t(n, i, r) {
      if (L(this, t), n.id = n.id || 'vjs_video_' + Ie(), (i = Q(t.getTagSettings(n), i)).initChildren = !1, i.createEl = !1, i.evented = !1, i.reportTouchActivity = !1, !i.language) if ('function' == typeof n.closest) {
        var o = n.closest('[lang]');
        o && o.getAttribute && (i.language = o.getAttribute('lang'))
      } else for (var s = n; s && 1 === s.nodeType; ) {
        if (fe(s).hasOwnProperty('lang')) {
          i.language = s.getAttribute('lang');
          break
        }
        s = s.parentNode
      }
      var a = U(this, e.call(this, null, i, r));
      if (a.isReady_ = !1, a.hasStarted_ = !1, a.userActive_ = !1, !a.options_ || !a.options_.techOrder || !a.options_.techOrder.length) throw new Error('No techOrder specified. Did you overwrite videojs.options instead of just changing the properties you want to override?');
      if (a.tag = n, a.tagAttributes = n && fe(n), a.language(a.options_.language), i.languages) {
        var l = {
        };
        Object.getOwnPropertyNames(i.languages).forEach(function (e) {
          l[e.toLowerCase()] = i.languages[e]
        }),
        a.languages_ = l
      } else a.languages_ = t.prototype.options_.languages;
      a.cache_ = {
      },
      a.poster_ = i.poster || '',
      a.controls_ = !!i.controls,
      a.cache_.lastVolume = 1,
      n.controls = !1,
      n.removeAttribute('controls'),
      a.scrubbing_ = !1,
      a.el_ = a.createEl(),
      dt(a, {
        eventBusKey: 'el_'
      });
      var u = gt(a.options_);
      if (i.plugins) {
        var c = i.plugins;
        Object.keys(c).forEach(function (e) {
          if ('function' != typeof this[e]) throw new Error('plugin "' + e + '" does not exist');
          this[e](c[e])
        }, a)
      }
      a.options_.playerOptions = u,
      a.middleware_ = [
      ],
      a.initChildren(),
      a.isAudio('audio' === n.nodeName.toLowerCase()),
      a.controls() ? a.addClass('vjs-controls-enabled')  : a.addClass('vjs-controls-disabled'),
      a.el_.setAttribute('role', 'region'),
      a.isAudio() ? a.el_.setAttribute('aria-label', a.localize('Audio Player'))  : a.el_.setAttribute('aria-label', a.localize('Video Player')),
      a.isAudio() && a.addClass('vjs-audio'),
      a.flexNotSupported_() && a.addClass('vjs-no-flex'),
      A || a.addClass('vjs-workinghover'),
      t.players[a.id_] = a;
      var d = h.split('.') [0];
      return a.addClass('vjs-v' + d),
      a.userActive(!0),
      a.reportUserActivity(),
      a.listenForUserActivity_(),
      a.on('fullscreenchange', a.handleFullscreenChange_),
      a.on('stageclick', a.handleStageClick_),
      a.changingSrc_ = !1,
      a.playWaitingForReady_ = !1,
      a.playOnLoadstart_ = null,
      a.forceAutoplayInChrome_(),
      a
    }
    return D(t, e),
    t.prototype.dispose = function () {
      this.trigger('dispose'),
      this.off('dispose'),
      this.styleEl_ && this.styleEl_.parentNode && (this.styleEl_.parentNode.removeChild(this.styleEl_), this.styleEl_ = null),
      t.players[this.id_] = null,
      this.tag && this.tag.player && (this.tag.player = null),
      this.el_ && this.el_.player && (this.el_.player = null),
      this.tech_ && this.tech_.dispose(),
      this.playerElIngest_ && (this.playerElIngest_ = null),
      this.tag && (this.tag = null),
      vn[this.id()] = null,
      e.prototype.dispose.call(this)
    },
    t.prototype.createEl = function () {
      var t = this.tag,
      n = void 0,
      i = this.playerElIngest_ = t.parentNode && t.parentNode.hasAttribute && t.parentNode.hasAttribute('data-vjs-player'),
      r = 'video-js' === this.tag.tagName.toLowerCase();
      i ? n = this.el_ = t.parentNode : r || (n = this.el_ = e.prototype.createEl.call(this, 'div'));
      var a = fe(t);
      if (r) {
        for (n = this.el_ = t, t = this.tag = s.createElement('video'); n.children.length; ) t.appendChild(n.firstChild);
        le(n, 'video-js') || ue(n, 'video-js'),
        n.appendChild(t),
        i = this.playerElIngest_ = n
      }
      if (t.setAttribute('tabindex', '-1'), t.removeAttribute('width'), t.removeAttribute('height'), Object.getOwnPropertyNames(a).forEach(function (e) {
        'class' === e ? (n.className += ' ' + a[e], r && (t.className += ' ' + a[e]))  : (n.setAttribute(e, a[e]), r && t.setAttribute(e, a[e]))
      }), t.playerId = t.id, t.id += '_html5_api', t.className = 'vjs-tech', t.player = n.player = this, this.addClass('vjs-paused'), !0 !== o.VIDEOJS_NO_DYNAMIC_STYLE) {
        this.styleEl_ = Je('vjs-styles-dimensions');
        var l = Ce('.vjs-styles-defaults'),
        u = Ce('head');
        u.insertBefore(this.styleEl_, l ? l.nextSibling : u.firstChild)
      }
      this.width(this.options_.width),
      this.height(this.options_.height),
      this.fluid(this.options_.fluid),
      this.aspectRatio(this.options_.aspectRatio);
      for (var c = t.getElementsByTagName('a'), h = 0; h < c.length; h++) {
        var d = c.item(h);
        ue(d, 'vjs-hidden'),
        d.setAttribute('hidden', 'hidden')
      }
      return t.initNetworkState_ = t.networkState,
      t.parentNode && !i && t.parentNode.insertBefore(n, t),
      ae(t, n),
      this.children_.unshift(t),
      this.el_.setAttribute('lang', this.language_),
      this.el_ = n,
      n
    },
    t.prototype.width = function (e) {
      return this.dimension('width', e)
    },
    t.prototype.height = function (e) {
      return this.dimension('height', e)
    },
    t.prototype.dimension = function (e, t) {
      var n = e + '_';
      if (void 0 === t) return this[n] || 0;
      if ('' === t) return this[n] = void 0,
      void this.updateStyleEl_();
      var i = parseFloat(t);
      isNaN(i) ? X.error('Improper value "' + t + '" supplied for for ' + e)  : (this[n] = i, this.updateStyleEl_())
    },
    t.prototype.fluid = function (e) {
      if (void 0 === e) return !!this.fluid_;
      this.fluid_ = !!e,
      e ? this.addClass('vjs-fluid')  : this.removeClass('vjs-fluid'),
      this.updateStyleEl_()
    },
    t.prototype.aspectRatio = function (e) {
      if (void 0 === e) return this.aspectRatio_;
      if (!/^\d+\:\d+$/.test(e)) throw new Error('Improper value supplied for aspect ratio. The format should be width:height, for example 16:9.');
      this.aspectRatio_ = e,
      this.fluid(!0),
      this.updateStyleEl_()
    },
    t.prototype.updateStyleEl_ = function () {
      if (!0 !== o.VIDEOJS_NO_DYNAMIC_STYLE) {
        var e = void 0,
        t = void 0,
        n = void 0,
        i = (void 0 !== this.aspectRatio_ && 'auto' !== this.aspectRatio_ ? this.aspectRatio_ : this.videoWidth() > 0 ? this.videoWidth() + ':' + this.videoHeight()  : '16:9').split(':'),
        r = i[1] / i[0];
        e = void 0 !== this.width_ ? this.width_ : void 0 !== this.height_ ? this.height_ / r : this.videoWidth() || 300,
        t = void 0 !== this.height_ ? this.height_ : e * r,
        n = /^[^a-zA-Z]/.test(this.id()) ? 'dimensions-' + this.id()  : this.id() + '-dimensions',
        this.addClass(n),
        $e(this.styleEl_, '\n      .' + n + ' {\n        width: ' + e + 'px;\n        height: ' + t + 'px;\n      }\n\n      .' + n + '.vjs-fluid {\n        padding-top: ' + 100 * r + '%;\n      }\n    ')
      } else {
        var s = 'number' == typeof this.width_ ? this.width_ : this.options_.width,
        a = 'number' == typeof this.height_ ? this.height_ : this.options_.height,
        l = this.tech_ && this.tech_.el();
        l && (s >= 0 && (l.width = s), a >= 0 && (l.height = a))
      }
    },
    t.prototype.loadTech_ = function (e, t) {
      var n = this;
      this.tech_ && this.unloadTech_();
      var i = vt(e),
      r = e.charAt(0).toLowerCase() + e.slice(1);
      'Html5' !== i && this.tag && (fn.getTech('Html5').disposeMediaElement(this.tag), this.tag.player = null, this.tag = null),
      this.techName_ = i,
      this.isReady_ = !1;
      var o = {
        source: t,
        nativeControlsForTouch: this.options_.nativeControlsForTouch,
        playerId: this.id(),
        techId: this.id() + '_' + i + '_api',
        autoplay: this.options_.autoplay,
        playsinline: this.options_.playsinline,
        preload: this.options_.preload,
        loop: this.options_.loop,
        muted: this.options_.muted,
        poster: this.poster(),
        language: this.language(),
        playerElIngest: this.playerElIngest_ || !1,
        'vtt.js': this.options_['vtt.js']
      };
      dn.names.forEach(function (e) {
        var t = dn[e];
        o[t.getterName] = n[t.privateName]
      }),
      Q(o, this.options_[i]),
      Q(o, this.options_[r]),
      Q(o, this.options_[e.toLowerCase()]),
      this.tag && (o.tag = this.tag),
      t && t.src === this.cache_.src && this.cache_.currentTime > 0 && (o.startTime = this.cache_.currentTime);
      var s = fn.getTech(e);
      if (!s) throw new Error('No Tech named \'' + i + '\' exists! \'' + i + '\' should be registered using videojs.registerTech()\'');
      this.tech_ = new s(o),
      this.tech_.ready(et(this, this.handleTechReady_), !0),
      Rt(this.textTracksJson_ || [
      ], this.tech_),
      qi.forEach(function (e) {
        n.on(n.tech_, e, n['handleTech' + vt(e) + '_'])
      }),
      this.on(this.tech_, 'loadstart', this.handleTechLoadStart_),
      this.on(this.tech_, 'waiting', this.handleTechWaiting_),
      this.on(this.tech_, 'canplay', this.handleTechCanPlay_),
      this.on(this.tech_, 'canplaythrough', this.handleTechCanPlayThrough_),
      this.on(this.tech_, 'playing', this.handleTechPlaying_),
      this.on(this.tech_, 'ended', this.handleTechEnded_),
      this.on(this.tech_, 'seeking', this.handleTechSeeking_),
      this.on(this.tech_, 'seeked', this.handleTechSeeked_),
      this.on(this.tech_, 'play', this.handleTechPlay_),
      this.on(this.tech_, 'firstplay', this.handleTechFirstPlay_),
      this.on(this.tech_, 'pause', this.handleTechPause_),
      this.on(this.tech_, 'durationchange', this.handleTechDurationChange_),
      this.on(this.tech_, 'fullscreenchange', this.handleTechFullscreenChange_),
      this.on(this.tech_, 'error', this.handleTechError_),
      this.on(this.tech_, 'loadedmetadata', this.updateStyleEl_),
      this.on(this.tech_, 'posterchange', this.handleTechPosterChange_),
      this.on(this.tech_, 'textdata', this.handleTechTextData_),
      this.usingNativeControls(this.techGet_('controls')),
      this.controls() && !this.usingNativeControls() && this.addTechControlsListeners_(),
      this.tech_.el().parentNode === this.el() || 'Html5' === i && this.tag || ae(this.tech_.el(), this.el()),
      this.tag && (this.tag.player = null, this.tag = null)
    },
    t.prototype.unloadTech_ = function () {
      var e = this;
      dn.names.forEach(function (t) {
        var n = dn[t];
        e[n.privateName] = e[n.getterName]()
      }),
      this.textTracksJson_ = Pt(this.tech_),
      this.isReady_ = !1,
      this.tech_.dispose(),
      this.tech_ = !1
    },
    t.prototype.tech = function (e) {
      return void 0 === e && X.warn(a(Wi)),
      this.tech_
    },
    t.prototype.addTechControlsListeners_ = function () {
      this.removeTechControlsListeners_(),
      this.on(this.tech_, 'mousedown', this.handleTechClick_),
      this.on(this.tech_, 'touchstart', this.handleTechTouchStart_),
      this.on(this.tech_, 'touchmove', this.handleTechTouchMove_),
      this.on(this.tech_, 'touchend', this.handleTechTouchEnd_),
      this.on(this.tech_, 'tap', this.handleTechTap_)
    },
    t.prototype.removeTechControlsListeners_ = function () {
      this.off(this.tech_, 'tap', this.handleTechTap_),
      this.off(this.tech_, 'touchstart', this.handleTechTouchStart_),
      this.off(this.tech_, 'touchmove', this.handleTechTouchMove_),
      this.off(this.tech_, 'touchend', this.handleTechTouchEnd_),
      this.off(this.tech_, 'mousedown', this.handleTechClick_)
    },
    t.prototype.handleTechReady_ = function () {
      if (this.triggerReady(), this.cache_.volume && this.techCall_('setVolume', this.cache_.volume), this.handleTechPosterChange_(), this.handleTechDurationChange_(), (this.src() || this.currentSrc()) && this.tag && this.options_.autoplay && this.paused()) try {
        delete this.tag.poster
      } catch (e) {
        X('deleting tag.poster throws in some browsers', e)
      }
    },
    t.prototype.handleTechLoadStart_ = function () {
      this.removeClass('vjs-ended'),
      this.removeClass('vjs-seeking'),
      this.error(null),
      this.paused() ? (this.hasStarted(!1), this.trigger('loadstart'))  : (this.trigger('loadstart'), this.trigger('firstplay'))
    },
    t.prototype.hasStarted = function (e) {
      if (void 0 === e) return this.hasStarted_;
      e !== this.hasStarted_ && (this.hasStarted_ = e, this.hasStarted_ ? (this.addClass('vjs-has-started'), this.trigger('firstplay'))  : this.removeClass('vjs-has-started'))
    },
    t.prototype.handleTechPlay_ = function () {
      this.removeClass('vjs-ended'),
      this.removeClass('vjs-paused'),
      this.addClass('vjs-playing'),
      this.hasStarted(!0),
      this.trigger('play')
    },
    t.prototype.handleTechWaiting_ = function () {
      var e = this;
      this.addClass('vjs-waiting'),
      this.trigger('waiting'),
      this.one('timeupdate', function () {
        return e.removeClass('vjs-waiting')
      })
    },
    t.prototype.handleTechCanPlay_ = function () {
      this.removeClass('vjs-waiting'),
      this.trigger('canplay')
    },
    t.prototype.handleTechCanPlayThrough_ = function () {
      this.removeClass('vjs-waiting'),
      this.trigger('canplaythrough')
    },
    t.prototype.handleTechPlaying_ = function () {
      this.removeClass('vjs-waiting'),
      this.trigger('playing')
    },
    t.prototype.handleTechSeeking_ = function () {
      this.addClass('vjs-seeking'),
      this.trigger('seeking')
    },
    t.prototype.handleTechSeeked_ = function () {
      this.removeClass('vjs-seeking'),
      this.trigger('seeked')
    },
    t.prototype.handleTechFirstPlay_ = function () {
      this.options_.starttime && (X.warn('Passing the `starttime` option to the player will be deprecated in 6.0'), this.currentTime(this.options_.starttime)),
      this.addClass('vjs-has-started'),
      this.trigger('firstplay')
    },
    t.prototype.handleTechPause_ = function () {
      this.removeClass('vjs-playing'),
      this.addClass('vjs-paused'),
      this.trigger('pause')
    },
    t.prototype.handleTechEnded_ = function () {
      this.addClass('vjs-ended'),
      this.options_.loop ? (this.currentTime(0), this.play())  : this.paused() || this.pause(),
      this.trigger('ended')
    },
    t.prototype.handleTechDurationChange_ = function () {
      this.duration(this.techGet_('duration'))
    },
    t.prototype.handleTechClick_ = function (e) {
      je(e) && this.controls_ && (this.paused() ? this.play()  : this.pause())
    },
    t.prototype.handleTechTap_ = function () {
      this.userActive(!this.userActive())
    },
    t.prototype.handleTechTouchStart_ = function () {
      this.userWasActive = this.userActive()
    },
    t.prototype.handleTechTouchMove_ = function () {
      this.userWasActive && this.reportUserActivity()
    },
    t.prototype.handleTechTouchEnd_ = function (e) {
      e.preventDefault()
    },
    t.prototype.handleFullscreenChange_ = function () {
      this.isFullscreen() ? this.addClass('vjs-fullscreen')  : this.removeClass('vjs-fullscreen')
    },
    t.prototype.handleStageClick_ = function () {
      this.reportUserActivity()
    },
    t.prototype.handleTechFullscreenChange_ = function (e, t) {
      t && this.isFullscreen(t.isFullscreen),
      this.trigger('fullscreenchange')
    },
    t.prototype.handleTechError_ = function () {
      var e = this.tech_.error();
      this.error(e)
    },
    t.prototype.handleTechTextData_ = function () {
      var e = null;
      arguments.length > 1 && (e = arguments[1]),
      this.trigger('textdata', e)
    },
    t.prototype.getCache = function () {
      return this.cache_
    },
    t.prototype.techCall_ = function (e, t) {
      this.ready(function () {
        if (e in bn) return function (e, t, n, i) {
          return t[n](e.reduce(wn(n), i))
        }(this.middleware_, this.tech_, e, t);
        if (e in _n) return An(this.middleware_, this.tech_, e, t);
        try {
          this.tech_ && this.tech_[e](t)
        } catch (e) {
          throw X(e),
          e
        }
      }, !0)
    },
    t.prototype.techGet_ = function (e) {
      if (this.tech_ && this.tech_.isReady_) {
        if (e in yn) return function (e, t, n) {
          return e.reduceRight(wn(n), t[n]())
        }(this.middleware_, this.tech_, e);
        if (e in _n) return An(this.middleware_, this.tech_, e);
        try {
          return this.tech_[e]()
        } catch (t) {
          if (void 0 === this.tech_[e]) throw X('Video.js: ' + e + ' method not defined for ' + this.techName_ + ' playback technology.', t),
          t;
          if ('TypeError' === t.name) throw X('Video.js: ' + e + ' unavailable on ' + this.techName_ + ' playback technology element.', t),
          this.tech_.isReady_ = !1,
          t;
          throw X(t),
          t
        }
      }
    },
    t.prototype.play = function () {
      var e = this;
      if (this.playOnLoadstart_ && this.off('loadstart', this.playOnLoadstart_), this.isReady_) {
        if (!this.changingSrc_ && (this.src() || this.currentSrc())) return this.techGet_('play');
        this.playOnLoadstart_ = function () {
          e.playOnLoadstart_ = null,
          Ot(e.play())
        },
        this.one('loadstart', this.playOnLoadstart_)
      } else {
        if (this.playWaitingForReady_) return;
        this.playWaitingForReady_ = !0,
        this.ready(function () {
          e.playWaitingForReady_ = !1,
          Ot(e.play())
        })
      }
    },
    t.prototype.pause = function () {
      this.techCall_('pause')
    },
    t.prototype.paused = function () {
      return !1 !== this.techGet_('paused')
    },
    t.prototype.played = function () {
      return this.techGet_('played') || bt(0, 0)
    },
    t.prototype.scrubbing = function (e) {
      if (void 0 === e) return this.scrubbing_;
      this.scrubbing_ = !!e,
      e ? this.addClass('vjs-scrubbing')  : this.removeClass('vjs-scrubbing')
    },
    t.prototype.currentTime = function (e) {
      return void 0 !== e ? (e < 0 && (e = 0), void this.techCall_('setCurrentTime', e))  : (this.cache_.currentTime = this.techGet_('currentTime') || 0, this.cache_.currentTime)
    },
    t.prototype.duration = function (e) {
      if (void 0 === e) return void 0 !== this.cache_.duration ? this.cache_.duration : NaN;
      (e = parseFloat(e)) < 0 && (e = 1 / 0),
      e !== this.cache_.duration && (this.cache_.duration = e, e === 1 / 0 ? this.addClass('vjs-live')  : this.removeClass('vjs-live'), this.trigger('durationchange'))
    },
    t.prototype.remainingTime = function () {
      return this.duration() - this.currentTime()
    },
    t.prototype.remainingTimeDisplay = function () {
      return Math.floor(this.duration()) - Math.floor(this.currentTime())
    },
    t.prototype.buffered = function () {
      var e = this.techGet_('buffered');
      return e && e.length || (e = bt(0, 0)),
      e
    },
    t.prototype.bufferedPercent = function () {
      return _t(this.buffered(), this.duration())
    },
    t.prototype.bufferedEnd = function () {
      var e = this.buffered(),
      t = this.duration(),
      n = e.end(e.length - 1);
      return n > t && (n = t),
      n
    },
    t.prototype.volume = function (e) {
      var t = void 0;
      return void 0 !== e ? (t = Math.max(0, Math.min(1, parseFloat(e))), this.cache_.volume = t, this.techCall_('setVolume', t), void (t > 0 && this.lastVolume_(t)))  : (t = parseFloat(this.techGet_('volume')), isNaN(t) ? 1 : t)
    },
    t.prototype.muted = function (e) {
      if (void 0 === e) return this.techGet_('muted') || !1;
      this.techCall_('setMuted', e)
    },
    t.prototype.defaultMuted = function (e) {
      return void 0 !== e ? this.techCall_('setDefaultMuted', e)  : this.techGet_('defaultMuted') || !1
    },
    t.prototype.lastVolume_ = function (e) {
      if (void 0 === e || 0 === e) return this.cache_.lastVolume;
      this.cache_.lastVolume = e
    },
    t.prototype.supportsFullScreen = function () {
      return this.techGet_('supportsFullScreen') || !1
    },
    t.prototype.isFullscreen = function (e) {
      if (void 0 === e) return !!this.isFullscreen_;
      this.isFullscreen_ = !!e
    },
    t.prototype.requestFullscreen = function () {
      var e = wt;
      this.isFullscreen(!0),
      e.requestFullscreen ? (Qe(s, e.fullscreenchange, et(this, function t(n) {
        this.isFullscreen(s[e.fullscreenElement]),
        !1 === this.isFullscreen() && Ye(s, e.fullscreenchange, t),
        this.trigger('fullscreenchange')
      })), this.el_[e.requestFullscreen]())  : this.tech_.supportsFullScreen() ? this.techCall_('enterFullScreen')  : (this.enterFullWindow(), this.trigger('fullscreenchange'))
    },
    t.prototype.exitFullscreen = function () {
      var e = wt;
      this.isFullscreen(!1),
      e.requestFullscreen ? s[e.exitFullscreen]()  : this.tech_.supportsFullScreen() ? this.techCall_('exitFullScreen')  : (this.exitFullWindow(), this.trigger('fullscreenchange'))
    },
    t.prototype.enterFullWindow = function () {
      this.isFullWindow = !0,
      this.docOrigOverflow = s.documentElement.style.overflow,
      Qe(s, 'keydown', et(this, this.fullWindowOnEscKey)),
      s.documentElement.style.overflow = 'hidden',
      ue(s.body, 'vjs-full-window'),
      this.trigger('enterFullWindow')
    },
    t.prototype.fullWindowOnEscKey = function (e) {
      27 === e.keyCode && (!0 === this.isFullscreen() ? this.exitFullscreen()  : this.exitFullWindow())
    },
    t.prototype.exitFullWindow = function () {
      this.isFullWindow = !1,
      Ye(s, 'keydown', this.fullWindowOnEscKey),
      s.documentElement.style.overflow = this.docOrigOverflow,
      ce(s.body, 'vjs-full-window'),
      this.trigger('exitFullWindow')
    },
    t.prototype.canPlayType = function (e) {
      for (var t = void 0, n = 0, i = this.options_.techOrder; n < i.length; n++) {
        var r = i[n],
        o = fn.getTech(r);
        if (o || (o = mt.getComponent(r)), o) {
          if (o.isSupported() && (t = o.canPlayType(e))) return t
        } else X.error('The "' + r + '" tech is undefined. Skipped browser support check for that tech.')
      }
      return ''
    },
    t.prototype.selectSource = function (e) {
      var t,
      n = this,
      i = this.options_.techOrder.map(function (e) {
        return [e,
        fn.getTech(e)]
      }).filter(function (e) {
        var t = e[0],
        n = e[1];
        return n ? n.isSupported()  : (X.error('The "' + t + '" tech is undefined. Skipped browser support check for that tech.'), !1)
      }),
      r = function (e, t, n) {
        var i = void 0;
        return e.some(function (e) {
          return t.some(function (t) {
            if (i = n(e, t)) return !0
          })
        }),
        i
      },
      o = function (e, t) {
        var i = e[0];
        if (e[1].canPlaySource(t, n.options_[i.toLowerCase()])) return {
          source: t,
          tech: i
        }
      };
      return (this.options_.sourceOrder ? r(e, i, (t = o, function (e, n) {
        return t(n, e)
      }))  : r(i, e, o)) || !1
    },
    t.prototype.src = function (e) {
      var t = this;
      if (void 0 === e) return this.cache_.src || '';
      var n = function e(t) {
        if (Array.isArray(t)) {
          var n = [
          ];
          t.forEach(function (t) {
            t = e(t),
            Array.isArray(t) ? n = n.concat(t)  : Y(t) && n.push(t)
          }),
          t = n
        } else t = 'string' == typeof t && t.trim() ? [
          {
            src: t
          }
        ] : Y(t) && 'string' == typeof t.src && t.src && t.src.trim() ? [
          t
        ] : [
        ];
        return t
      }(e);
      n.length ? (this.cache_.sources = n, this.changingSrc_ = !0, this.cache_.source = n[0], mn(this, n[0], function (e, i) {
        var r,
        o;
        if (t.middleware_ = i, t.src_(e)) return n.length > 1 ? t.src(n.slice(1))  : (t.setTimeout(function () {
          this.error({
            code: 4,
            message: this.localize(this.options_.notSupportedMessage)
          })
        }, 0), void t.triggerReady());
        t.changingSrc_ = !1,
        t.cache_.src = e.src,
        r = i,
        o = t.tech_,
        r.forEach(function (e) {
          return e.setTech && e.setTech(o)
        })
      }))  : this.setTimeout(function () {
        this.error({
          code: 4,
          message: this.localize(this.options_.notSupportedMessage)
        })
      }, 0)
    },
    t.prototype.src_ = function (e) {
      var t,
      n,
      i = this.selectSource([e]);
      return !i || (t = i.tech, n = this.techName_, vt(t) !== vt(n) ? (this.changingSrc_ = !0, this.loadTech_(i.tech, i.source), !1)  : (this.ready(function () {
        this.tech_.constructor.prototype.hasOwnProperty('setSource') ? this.techCall_('setSource', e)  : this.techCall_('src', e.src),
        'auto' === this.options_.preload && this.load()
      }, !0), !1))
    },
    t.prototype.load = function () {
      this.techCall_('load')
    },
    t.prototype.reset = function () {
      this.loadTech_(this.options_.techOrder[0], null),
      this.techCall_('reset')
    },
    t.prototype.currentSources = function () {
      var e = this.currentSource(),
      t = [
      ];
      return 0 !== Object.keys(e).length && t.push(e),
      this.cache_.sources || t
    },
    t.prototype.currentSource = function () {
      return this.cache_.source || {
      }
    },
    t.prototype.currentSrc = function () {
      return this.currentSource() && this.currentSource().src || ''
    },
    t.prototype.currentType = function () {
      return this.currentSource() && this.currentSource().type || ''
    },
    t.prototype.preload = function (e) {
      return void 0 !== e ? (this.techCall_('setPreload', e), void (this.options_.preload = e))  : this.techGet_('preload')
    },
    t.prototype.autoplay = function (e) {
      return void 0 !== e ? (this.techCall_('setAutoplay', e), this.options_.autoplay = e, void this.ready(this.forceAutoplayInChrome_))  : this.techGet_('autoplay', e)
    },
    t.prototype.forceAutoplayInChrome_ = function () {
      this.paused() && (this.autoplay() || this.options_.autoplay) && S && !b && this.play()
    },
    t.prototype.playsinline = function (e) {
      return void 0 !== e ? (this.techCall_('setPlaysinline', e), this.options_.playsinline = e, this)  : this.techGet_('playsinline')
    },
    t.prototype.loop = function (e) {
      return void 0 !== e ? (this.techCall_('setLoop', e), void (this.options_.loop = e))  : this.techGet_('loop')
    },
    t.prototype.poster = function (e) {
      if (void 0 === e) return this.poster_;
      e || (e = ''),
      this.poster_ = e,
      this.techCall_('setPoster', e),
      this.trigger('posterchange')
    },
    t.prototype.handleTechPosterChange_ = function () {
      !this.poster_ && this.tech_ && this.tech_.poster && (this.poster_ = this.tech_.poster() || '', this.trigger('posterchange'))
    },
    t.prototype.controls = function (e) {
      if (void 0 === e) return !!this.controls_;
      e = !!e,
      this.controls_ !== e && (this.controls_ = e, this.usingNativeControls() && this.techCall_('setControls', e), this.controls_ ? (this.removeClass('vjs-controls-disabled'), this.addClass('vjs-controls-enabled'), this.trigger('controlsenabled'), this.usingNativeControls() || this.addTechControlsListeners_())  : (this.removeClass('vjs-controls-enabled'), this.addClass('vjs-controls-disabled'), this.trigger('controlsdisabled'), this.usingNativeControls() || this.removeTechControlsListeners_()))
    },
    t.prototype.usingNativeControls = function (e) {
      if (void 0 === e) return !!this.usingNativeControls_;
      e = !!e,
      this.usingNativeControls_ !== e && (this.usingNativeControls_ = e, this.usingNativeControls_ ? (this.addClass('vjs-using-native-controls'), this.trigger('usingnativecontrols'))  : (this.removeClass('vjs-using-native-controls'), this.trigger('usingcustomcontrols')))
    },
    t.prototype.error = function (e) {
      return void 0 === e ? this.error_ || null : null === e ? (this.error_ = e, this.removeClass('vjs-error'), void (this.errorDisplay && this.errorDisplay.close()))  : (this.error_ = new Ct(e), this.addClass('vjs-error'), X.error('(CODE:' + this.error_.code + ' ' + Ct.errorTypes[this.error_.code] + ')', this.error_.message, this.error_), void this.trigger('error'))
    },
    t.prototype.reportUserActivity = function (e) {
      this.userActivity_ = !0
    },
    t.prototype.userActive = function (e) {
      if (void 0 === e) return this.userActive_;
      if ((e = !!e) !== this.userActive_) {
        if (this.userActive_ = e, this.userActive_) return this.userActivity_ = !0,
        this.removeClass('vjs-user-inactive'),
        this.addClass('vjs-user-active'),
        void this.trigger('useractive');
        this.tech_ && this.tech_.one('mousemove', function (e) {
          e.stopPropagation(),
          e.preventDefault()
        }),
        this.userActivity_ = !1,
        this.removeClass('vjs-user-active'),
        this.addClass('vjs-user-inactive'),
        this.trigger('userinactive')
      }
    },
    t.prototype.listenForUserActivity_ = function () {
      var e = void 0,
      t = void 0,
      n = void 0,
      i = et(this, this.reportUserActivity);
      this.on('mousedown', function () {
        i(),
        this.clearInterval(e),
        e = this.setInterval(i, 250)
      }),
      this.on('mousemove', function (e) {
        e.screenX === t && e.screenY === n || (t = e.screenX, n = e.screenY, i())
      }),
      this.on('mouseup', function (t) {
        i(),
        this.clearInterval(e)
      }),
      this.on('keydown', i),
      this.on('keyup', i);
      var r = void 0;
      this.setInterval(function () {
        if (this.userActivity_) {
          this.userActivity_ = !1,
          this.userActive(!0),
          this.clearTimeout(r);
          var e = this.options_.inactivityTimeout;
          e <= 0 || (r = this.setTimeout(function () {
            this.userActivity_ || this.userActive(!1)
          }, e))
        }
      }, 250)
    },
    t.prototype.playbackRate = function (e) {
      if (void 0 === e) return this.tech_ && this.tech_.featuresPlaybackRate ? this.techGet_('playbackRate')  : 1;
      this.techCall_('setPlaybackRate', e)
    },
    t.prototype.defaultPlaybackRate = function (e) {
      return void 0 !== e ? this.techCall_('setDefaultPlaybackRate', e)  : this.tech_ && this.tech_.featuresPlaybackRate ? this.techGet_('defaultPlaybackRate')  : 1
    },
    t.prototype.isAudio = function (e) {
      if (void 0 === e) return !!this.isAudio_;
      this.isAudio_ = !!e
    },
    t.prototype.addTextTrack = function (e, t, n) {
      if (this.tech_) return this.tech_.addTextTrack(e, t, n)
    },
    t.prototype.addRemoteTextTrack = function (e, t) {
      if (this.tech_) return this.tech_.addRemoteTextTrack(e, t)
    },
    t.prototype.removeRemoteTextTrack = function () {
      var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
      }).track,
      t = void 0 === e ? arguments[0] : e;
      if (this.tech_) return this.tech_.removeRemoteTextTrack(t)
    },
    t.prototype.getVideoPlaybackQuality = function () {
      return this.techGet_('getVideoPlaybackQuality')
    },
    t.prototype.videoWidth = function () {
      return this.tech_ && this.tech_.videoWidth && this.tech_.videoWidth() || 0
    },
    t.prototype.videoHeight = function () {
      return this.tech_ && this.tech_.videoHeight && this.tech_.videoHeight() || 0
    },
    t.prototype.language = function (e) {
      if (void 0 === e) return this.language_;
      this.language_ = String(e).toLowerCase()
    },
    t.prototype.languages = function () {
      return gt(t.prototype.options_.languages, this.languages_)
    },
    t.prototype.toJSON = function () {
      var e = gt(this.options_),
      t = e.tracks;
      e.tracks = [
      ];
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i = gt(i)).player = void 0,
        e.tracks[n] = i
      }
      return e
    },
    t.prototype.createModal = function (e, t) {
      var n = this;
      (t = t || {
      }).content = e || '';
      var i = new Lt(this, t);
      return this.addChild(i),
      i.on('dispose', function () {
        n.removeChild(i)
      }),
      i.open(),
      i
    },
    t.getTagSettings = function (e) {
      var t = {
        sources: [
        ],
        tracks: [
        ]
      },
      n = fe(e),
      i = n['data-setup'];
      if (le(e, 'vjs-fluid') && (n.fluid = !0), null !== i) {
        var r = l(i || '{}'),
        o = r[0],
        s = r[1];
        o && X.error(o),
        Q(n, s)
      }
      if (Q(t, n), e.hasChildNodes()) for (var a = e.childNodes, u = 0, c = a.length; u < c; u++) {
        var h = a[u],
        d = h.nodeName.toLowerCase();
        'source' === d ? t.sources.push(fe(h))  : 'track' === d && t.tracks.push(fe(h))
      }
      return t
    },
    t.prototype.flexNotSupported_ = function () {
      var e = s.createElement('i');
      return !('flexBasis' in e.style || 'webkitFlexBasis' in e.style || 'mozFlexBasis' in e.style || 'msFlexBasis' in e.style || 'msFlexOrder' in e.style)
    },
    t
  }(mt);
  dn.names.forEach(function (e) {
    var t = dn[e];
    Zi.prototype[t.getterName] = function () {
      return this.tech_ ? this.tech_[t.getterName]()  : (this[t.privateName] = this[t.privateName] || new t.ListClass, this[t.privateName])
    }
  }),
  Zi.players = {
  };
  var Xi = o.navigator;
  Zi.prototype.options_ = {
    techOrder: fn.defaultTechOrder_,
    html5: {
    },
    flash: {
    },
    inactivityTimeout: 2000,
    playbackRates: [
    ],
    children: [
      'mediaLoader',
      'posterImage',
      'textTrackDisplay',
      'loadingSpinner',
      'bigPlayButton',
      'controlBar',
      'errorDisplay',
      'textTrackSettings'
    ],
    language: Xi && (Xi.languages && Xi.languages[0] || Xi.userLanguage || Xi.language) || 'en',
    languages: {
    },
    notSupportedMessage: 'No compatible source was found for this media.'
  },
  C || Zi.prototype.options_.children.push('resizeManager'),
  [
    'ended',
    'seeking',
    'seekable',
    'networkState',
    'readyState'
  ].forEach(function (e) {
    Zi.prototype[e] = function () {
      return this.techGet_(e)
    }
  }),
  qi.forEach(function (e) {
    Zi.prototype['handleTech' + vt(e) + '_'] = function () {
      return this.trigger(e)
    }
  }),
  mt.registerComponent('Player', Zi);
  var Ki = {
  },
  Ji = function (e) {
    return Ki.hasOwnProperty(e)
  },
  $i = function (e) {
    return Ji(e) ? Ki[e] : void 0
  },
  er = function (e, t) {
    e.activePlugins_ = e.activePlugins_ || {
    },
    e.activePlugins_[t] = !0
  },
  tr = function (e, t, n) {
    var i = (n ? 'before' : '') + 'pluginsetup';
    e.trigger(i, t),
    e.trigger(i + ':' + t.name, t)
  },
  nr = function (e, t) {
    return t.prototype.name = e,
    function () {
      tr(this, {
        name: e,
        plugin: t,
        instance: null
      }, !0);
      for (var n = arguments.length, i = Array(n), r = 0; r < n; r++) i[r] = arguments[r];
      var o = new (Function.prototype.bind.apply(t, [
        null
      ].concat([this].concat(i))));
      return this[e] = function () {
        return o
      },
      tr(this, o.getEventHash()),
      o
    }
  },
  ir = function () {
    function e(t) {
      if (L(this, e), this.constructor === e) throw new Error('Plugin must be sub-classed; not directly instantiated.');
      this.player = t,
      dt(this),
      delete this.trigger,
      pt(this, this.constructor.defaultState),
      er(t, this.name),
      this.dispose = et(this, this.dispose),
      t.on('dispose', this.dispose)
    }
    return e.prototype.version = function () {
      return this.constructor.VERSION
    },
    e.prototype.getEventHash = function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
      };
      return e.name = this.name,
      e.plugin = this.constructor,
      e.instance = this,
      e
    },
    e.prototype.trigger = function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
      };
      return Ve(this.eventBusEl_, e, this.getEventHash(t))
    },
    e.prototype.handleStateChanged = function (e) {
    },
    e.prototype.dispose = function () {
      var e = this.name,
      t = this.player;
      this.trigger('dispose'),
      this.off(),
      t.off('dispose', this.dispose),
      t.activePlugins_[e] = !1,
      this.player = this.state = null,
      t[e] = nr(e, Ki[e])
    },
    e.isBasic = function (t) {
      var n = 'string' == typeof t ? $i(t)  : t;
      return 'function' == typeof n && !e.prototype.isPrototypeOf(n.prototype)
    },
    e.registerPlugin = function (t, n) {
      if ('string' != typeof t) throw new Error('Illegal plugin name, "' + t + '", must be a string, was ' + (void 0 === t ? 'undefined' : M(t)) + '.');
      if (Ji(t)) X.warn('A plugin named "' + t + '" already exists. You may want to avoid re-registering plugins!');
       else if (Zi.prototype.hasOwnProperty(t)) throw new Error('Illegal plugin name, "' + t + '", cannot share a name with an existing player method!');
      if ('function' != typeof n) throw new Error('Illegal plugin for "' + t + '", must be a function, was ' + (void 0 === n ? 'undefined' : M(n)) + '.');
      return Ki[t] = n,
      'plugin' !== t && (e.isBasic(n) ? Zi.prototype[t] = function (e, t) {
        var n = function () {
          tr(this, {
            name: e,
            plugin: t,
            instance: null
          }, !0);
          var n = t.apply(this, arguments);
          return er(this, e),
          tr(this, {
            name: e,
            plugin: t,
            instance: n
          }),
          n
        };
        return Object.keys(t).forEach(function (e) {
          n[e] = t[e]
        }),
        n
      }(t, n)  : Zi.prototype[t] = nr(t, n)),
      n
    },
    e.deregisterPlugin = function (e) {
      if ('plugin' === e) throw new Error('Cannot de-register base plugin.');
      Ji(e) && (delete Ki[e], delete Zi.prototype[e])
    },
    e.getPlugins = function () {
      var e = void 0;
      return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.keys(Ki)).forEach(function (t) {
        var n = $i(t);
        n && ((e = e || {
        }) [t] = n)
      }),
      e
    },
    e.getPluginVersion = function (e) {
      var t = $i(e);
      return t && t.VERSION || ''
    },
    e
  }();
  ir.getPlugin = $i,
  ir.BASE_PLUGIN_NAME = 'plugin',
  ir.registerPlugin('plugin', ir),
  Zi.prototype.usingPlugin = function (e) {
    return !!this.activePlugins_ && !0 === this.activePlugins_[e]
  },
  Zi.prototype.hasPlugin = function (e) {
    return !!Ji(e)
  };
  'undefined' == typeof HTMLVideoElement && te() && (s.createElement('video'), s.createElement('audio'), s.createElement('track'), s.createElement('video-js'));
  var rr = function (e) {
    return 0 === e.indexOf('#') ? e.slice(1)  : e
  };
  function or(e, t, n) {
    var i = or.getPlayer(e);
    if (i) return t && X.warn('Player "' + e + '" is already initialised. Options will not be applied.'),
    n && i.ready(n),
    i;
    var r = 'string' == typeof e ? Ce('#' + rr(e))  : e;
    if (!ne(r)) throw new TypeError('The element or ID supplied is not valid. (videojs)');
    s.body.contains(r) || X.warn('The element supplied is not included in the DOM'),
    t = t || {
    },
    or.hooks('beforesetup').forEach(function (e) {
      var n = e(r, gt(t));
      Y(n) && !Array.isArray(n) ? t = gt(t, n)  : X.error('please return an object in beforesetup hooks')
    });
    var o = mt.getComponent('Player');
    return i = new o(r, t, n),
    or.hooks('setup').forEach(function (e) {
      return e(i)
    }),
    i
  }
  if (or.hooks_ = {
  }, or.hooks = function (e, t) {
    return or.hooks_[e] = or.hooks_[e] || [
    ],
    t && (or.hooks_[e] = or.hooks_[e].concat(t)),
    or.hooks_[e]
  }, or.hook = function (e, t) {
    or.hooks(e, t)
  }, or.hookOnce = function (e, t) {
    or.hooks(e, [
    ].concat(t).map(function (t) {
      return function n() {
        return or.removeHook(e, n),
        t.apply(void 0, arguments)
      }
    }))
  }, or.removeHook = function (e, t) {
    var n = or.hooks(e).indexOf(t);
    return !(n <= - 1) && (or.hooks_[e] = or.hooks_[e].slice(), or.hooks_[e].splice(n, 1), !0)
  }, !0 !== o.VIDEOJS_NO_DYNAMIC_STYLE && te()) {
    var sr = Ce('.vjs-styles-defaults');
    if (!sr) {
      sr = Je('vjs-styles-defaults');
      var ar = Ce('head');
      ar && ar.insertBefore(sr, ar.firstChild),
      $e(sr, '\n      .video-js {\n        width: 300px;\n        height: 150px;\n      }\n\n      .vjs-fluid {\n        padding-top: 56.25%\n      }\n    ')
    }
  }
  Ke(1, or),
  or.VERSION = h,
  or.options = Zi.prototype.options_,
  or.getPlayers = function () {
    return Zi.players
  },
  or.getPlayer = function (e) {
    var t = Zi.players,
    n = void 0;
    if ('string' == typeof e) {
      var i = rr(e),
      r = t[i];
      if (r) return r;
      n = Ce('#' + i)
    } else n = e;
    if (ne(n)) {
      var o = n,
      s = o.player,
      a = o.playerId;
      if (s || t[a]) return s || t[a]
    }
  },
  or.getAllPlayers = function () {
    return Object.keys(Zi.players).map(function (e) {
      return Zi.players[e]
    }).filter(Boolean)
  },
  or.players = Zi.players,
  or.getComponent = mt.getComponent,
  or.registerComponent = function (e, t) {
    fn.isTech(t) && X.warn('The ' + e + ' tech was registered as a component. It should instead be registered using videojs.registerTech(name, tech)'),
    mt.registerComponent.call(mt, e, t)
  },
  or.getTech = fn.getTech,
  or.registerTech = fn.registerTech,
  or.use = function (e, t) {
    pn[e] = pn[e] || [
    ],
    pn[e].push(t)
  },
  !C && Object.defineProperty ? (Object.defineProperty(or, 'middleware', {
    value: {
    },
    writeable: !1,
    enumerable: !0
  }), Object.defineProperty(or.middleware, 'TERMINATOR', {
    value: gn,
    writeable: !1,
    enumerable: !0
  }))  : or.middleware = {
    TERMINATOR: gn
  },
  or.browser = R,
  or.TOUCH_ENABLED = I,
  or.extend = function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
    },
    n = function () {
      e.apply(this, arguments)
    },
    i = {
    };
    for (var r in 'object' === (void 0 === t ? 'undefined' : M(t)) ? (t.constructor !== Object.prototype.constructor && (n = t.constructor), i = t)  : 'function' == typeof t && (n = t), function (e, t) {
      if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + (void 0 === t ? 'undefined' : M(t)));
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }),
      t && (e.super_ = t)
    }(n, e), i) i.hasOwnProperty(r) && (n.prototype[r] = i[r]);
    return n
  },
  or.mergeOptions = gt,
  or.bind = et,
  or.registerPlugin = ir.registerPlugin,
  or.plugin = function (e, t) {
    return X.warn('videojs.plugin() is deprecated; use videojs.registerPlugin() instead'),
    ir.registerPlugin(e, t)
  },
  or.getPlugins = ir.getPlugins,
  or.getPlugin = ir.getPlugin,
  or.getPluginVersion = ir.getPluginVersion,
  or.addLanguage = function (e, t) {
    var n;
    return e = ('' + e).toLowerCase(),
    or.options.languages = gt(or.options.languages, ((n = {
    }) [e] = t, n)),
    or.options.languages[e]
  },
  or.log = X,
  or.createTimeRange = or.createTimeRanges = bt,
  or.formatTime = Mn,
  or.parseUrl = Kt,
  or.isCrossOrigin = $t,
  or.EventTarget = it,
  or.on = Qe,
  or.one = Ge,
  or.off = Ye,
  or.trigger = Ve,
  or.xhr = u,
  or.TextTrack = rn,
  or.AudioTrack = on,
  or.VideoTrack = sn,
  [
    'isEl',
    'isTextNode',
    'createEl',
    'hasClass',
    'addClass',
    'removeClass',
    'toggleClass',
    'setAttributes',
    'getAttributes',
    'emptyEl',
    'appendContent',
    'insertContent'
  ].forEach(function (e) {
    or[e] = function () {
      return X.warn('videojs.' + e + '() is deprecated; use videojs.dom.' + e + '() instead'),
      Be[e].apply(null, arguments)
    }
  }),
  or.computedStyle = K,
  or.dom = Be,
  or.url = en,
  e.exports = or
},
function (e, t, n) {
  var i;
  e.exports = (i = i || function (e, t) {
    var n = Object.create || function () {
      function e() {
      }
      return function (t) {
        var n;
        return e.prototype = t,
        n = new e,
        e.prototype = null,
        n
      }
    }(),
    i = {
    },
    r = i.lib = {
    },
    o = r.Base = {
      extend: function (e) {
        var t = n(this);
        return e && t.mixIn(e),
        t.hasOwnProperty('init') && this.init !== t.init || (t.init = function () {
          t.$super.init.apply(this, arguments)
        }),
        t.init.prototype = t,
        t.$super = this,
        t
      },
      create: function () {
        var e = this.extend();
        return e.init.apply(e, arguments),
        e
      },
      init: function () {
      },
      mixIn: function (e) {
        for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
        e.hasOwnProperty('toString') && (this.toString = e.toString)
      },
      clone: function () {
        return this.init.prototype.extend(this)
      }
    },
    s = r.WordArray = o.extend({
      init: function (e, t) {
        e = this.words = e || [
        ],
        this.sigBytes = void 0 != t ? t : 4 * e.length
      },
      toString: function (e) {
        return (e || l).stringify(this)
      },
      concat: function (e) {
        var t = this.words,
        n = e.words,
        i = this.sigBytes,
        r = e.sigBytes;
        if (this.clamp(), i % 4) for (var o = 0; o < r; o++) {
          var s = n[o >>> 2] >>> 24 - o % 4 * 8 & 255;
          t[i + o >>> 2] |= s << 24 - (i + o) % 4 * 8
        } else for (var o = 0; o < r; o += 4) t[i + o >>> 2] = n[o >>> 2];
        return this.sigBytes += r,
        this
      },
      clamp: function () {
        var t = this.words,
        n = this.sigBytes;
        t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8,
        t.length = e.ceil(n / 4)
      },
      clone: function () {
        var e = o.clone.call(this);
        return e.words = this.words.slice(0),
        e
      },
      random: function (t) {
        for (var n, i = [
        ], r = function (t) {
          var t = t,
          n = 987654321,
          i = 4294967295;
          return function () {
            var r = ((n = 36969 * (65535 & n) + (n >> 16) & i) << 16) + (t = 18000 * (65535 & t) + (t >> 16) & i) & i;
            return r /= 4294967296,
            (r += 0.5) * (e.random() > 0.5 ? 1 : - 1)
          }
        }, o = 0; o < t; o += 4) {
          var a = r(4294967296 * (n || e.random()));
          n = 987654071 * a(),
          i.push(4294967296 * a() | 0)
        }
        return new s.init(i, t)
      }
    }),
    a = i.enc = {
    },
    l = a.Hex = {
      stringify: function (e) {
        for (var t = e.words, n = e.sigBytes, i = [
        ], r = 0; r < n; r++) {
          var o = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
          i.push((o >>> 4).toString(16)),
          i.push((15 & o).toString(16))
        }
        return i.join('')
      },
      parse: function (e) {
        for (var t = e.length, n = [
        ], i = 0; i < t; i += 2) n[i >>> 3] |= parseInt(e.substr(i, 2), 16) << 24 - i % 8 * 4;
        return new s.init(n, t / 2)
      }
    },
    u = a.Latin1 = {
      stringify: function (e) {
        for (var t = e.words, n = e.sigBytes, i = [
        ], r = 0; r < n; r++) {
          var o = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
          i.push(String.fromCharCode(o))
        }
        return i.join('')
      },
      parse: function (e) {
        for (var t = e.length, n = [
        ], i = 0; i < t; i++) n[i >>> 2] |= (255 & e.charCodeAt(i)) << 24 - i % 4 * 8;
        return new s.init(n, t)
      }
    },
    c = a.Utf8 = {
      stringify: function (e) {
        try {
          return decodeURIComponent(escape(u.stringify(e)))
        } catch (e) {
          throw new Error('Malformed UTF-8 data')
        }
      },
      parse: function (e) {
        return u.parse(unescape(encodeURIComponent(e)))
      }
    },
    h = r.BufferedBlockAlgorithm = o.extend({
      reset: function () {
        this._data = new s.init,
        this._nDataBytes = 0
      },
      _append: function (e) {
        'string' == typeof e && (e = c.parse(e)),
        this._data.concat(e),
        this._nDataBytes += e.sigBytes
      },
      _process: function (t) {
        var n = this._data,
        i = n.words,
        r = n.sigBytes,
        o = this.blockSize,
        a = 4 * o,
        l = r / a,
        u = (l = t ? e.ceil(l)  : e.max((0 | l) - this._minBufferSize, 0)) * o,
        c = e.min(4 * u, r);
        if (u) {
          for (var h = 0; h < u; h += o) this._doProcessBlock(i, h);
          var d = i.splice(0, u);
          n.sigBytes -= c
        }
        return new s.init(d, c)
      },
      clone: function () {
        var e = o.clone.call(this);
        return e._data = this._data.clone(),
        e
      },
      _minBufferSize: 0
    }),
    d = (r.Hasher = h.extend({
      cfg: o.extend(),
      init: function (e) {
        this.cfg = this.cfg.extend(e),
        this.reset()
      },
      reset: function () {
        h.reset.call(this),
        this._doReset()
      },
      update: function (e) {
        return this._append(e),
        this._process(),
        this
      },
      finalize: function (e) {
        e && this._append(e);
        var t = this._doFinalize();
        return t
      },
      blockSize: 16,
      _createHelper: function (e) {
        return function (t, n) {
          return new e.init(n).finalize(t)
        }
      },
      _createHmacHelper: function (e) {
        return function (t, n) {
          return new d.HMAC.init(e, n).finalize(t)
        }
      }
    }), i.algo = {
    });
    return i
  }(Math), i)
},
function (e, t, n) {
  'use strict';
  var i = n(9),
  r = n(92),
  o = n(28),
  s = n(224),
  a = n(20);
  function l(e) {
    return e
  }
  function u(e, t) {
    for (var n = 0; n < e.length; ++n) t[n] = 255 & e.charCodeAt(n);
    return t
  }
  t.newBlob = function (e, n) {
    t.checkSupport('blob');
    try {
      return new Blob([e], {
        type: n
      })
    } catch (t) {
      try {
        var i = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder);
        return i.append(e),
        i.getBlob(n)
      } catch (e) {
        throw new Error('Bug : can\'t construct the Blob.')
      }
    }
  };
  var c = {
    stringifyByChunk: function (e, t, n) {
      var i = [
      ],
      r = 0,
      o = e.length;
      if (o <= n) return String.fromCharCode.apply(null, e);
      for (; r < o; ) 'array' === t || 'nodebuffer' === t ? i.push(String.fromCharCode.apply(null, e.slice(r, Math.min(r + n, o))))  : i.push(String.fromCharCode.apply(null, e.subarray(r, Math.min(r + n, o)))),
      r += n;
      return i.join('')
    },
    stringifyByChar: function (e) {
      for (var t = '', n = 0; n < e.length; n++) t += String.fromCharCode(e[n]);
      return t
    },
    applyCanBeUsed: {
      uint8array: function () {
        try {
          return i.uint8array && 1 === String.fromCharCode.apply(null, new Uint8Array(1)).length
        } catch (e) {
          return !1
        }
      }(),
      nodebuffer: function () {
        try {
          return i.nodebuffer && 1 === String.fromCharCode.apply(null, o.allocBuffer(1)).length
        } catch (e) {
          return !1
        }
      }()
    }
  };
  function h(e) {
    var n = 65536,
    i = t.getTypeOf(e),
    r = !0;
    if ('uint8array' === i ? r = c.applyCanBeUsed.uint8array : 'nodebuffer' === i && (r = c.applyCanBeUsed.nodebuffer), r) for (; n > 1; ) try {
      return c.stringifyByChunk(e, i, n)
    } catch (e) {
      n = Math.floor(n / 2)
    }
    return c.stringifyByChar(e)
  }
  function d(e, t) {
    for (var n = 0; n < e.length; n++) t[n] = e[n];
    return t
  }
  t.applyFromCharCode = h;
  var f = {
  };
  f.string = {
    string: l,
    array: function (e) {
      return u(e, new Array(e.length))
    },
    arraybuffer: function (e) {
      return f.string.uint8array(e).buffer
    },
    uint8array: function (e) {
      return u(e, new Uint8Array(e.length))
    },
    nodebuffer: function (e) {
      return u(e, o.allocBuffer(e.length))
    }
  },
  f.array = {
    string: h,
    array: l,
    arraybuffer: function (e) {
      return new Uint8Array(e).buffer
    },
    uint8array: function (e) {
      return new Uint8Array(e)
    },
    nodebuffer: function (e) {
      return o.newBufferFrom(e)
    }
  },
  f.arraybuffer = {
    string: function (e) {
      return h(new Uint8Array(e))
    },
    array: function (e) {
      return d(new Uint8Array(e), new Array(e.byteLength))
    },
    arraybuffer: l,
    uint8array: function (e) {
      return new Uint8Array(e)
    },
    nodebuffer: function (e) {
      return o.newBufferFrom(new Uint8Array(e))
    }
  },
  f.uint8array = {
    string: h,
    array: function (e) {
      return d(e, new Array(e.length))
    },
    arraybuffer: function (e) {
      return e.buffer
    },
    uint8array: l,
    nodebuffer: function (e) {
      return o.newBufferFrom(e)
    }
  },
  f.nodebuffer = {
    string: h,
    array: function (e) {
      return d(e, new Array(e.length))
    },
    arraybuffer: function (e) {
      return f.nodebuffer.uint8array(e).buffer
    },
    uint8array: function (e) {
      return d(e, new Uint8Array(e.length))
    },
    nodebuffer: l
  },
  t.transformTo = function (e, n) {
    if (n || (n = ''), !e) return n;
    t.checkSupport(e);
    var i = t.getTypeOf(n);
    return f[i][e](n)
  },
  t.getTypeOf = function (e) {
    return 'string' == typeof e ? 'string' : '[object Array]' === Object.prototype.toString.call(e) ? 'array' : i.nodebuffer && o.isBuffer(e) ? 'nodebuffer' : i.uint8array && e instanceof Uint8Array ? 'uint8array' : i.arraybuffer && e instanceof ArrayBuffer ? 'arraybuffer' : void 0
  },
  t.checkSupport = function (e) {
    if (!i[e.toLowerCase()]) throw new Error(e + ' is not supported by this platform')
  },
  t.MAX_VALUE_16BITS = 65535,
  t.MAX_VALUE_32BITS = - 1,
  t.pretty = function (e) {
    var t,
    n,
    i = '';
    for (n = 0; n < (e || '').length; n++) i += '\\x' + ((t = e.charCodeAt(n)) < 16 ? '0' : '') + t.toString(16).toUpperCase();
    return i
  },
  t.delay = function (e, t, n) {
    s(function () {
      e.apply(n || null, t || [
      ])
    })
  },
  t.inherits = function (e, t) {
    var n = function () {
    };
    n.prototype = t.prototype,
    e.prototype = new n
  },
  t.extend = function () {
    var e,
    t,
    n = {
    };
    for (e = 0; e < arguments.length; e++) for (t in arguments[e]) arguments[e].hasOwnProperty(t) && void 0 === n[t] && (n[t] = arguments[e][t]);
    return n
  },
  t.prepareContent = function (e, n, o, s, l) {
    return a.Promise.resolve(n).then(function (e) {
      return i.blob && (e instanceof Blob || - 1 !== ['[object File]',
      '[object Blob]'].indexOf(Object.prototype.toString.call(e))) && 'undefined' != typeof FileReader ? new a.Promise(function (t, n) {
        var i = new FileReader;
        i.onload = function (e) {
          t(e.target.result)
        },
        i.onerror = function (e) {
          n(e.target.error)
        },
        i.readAsArrayBuffer(e)
      })  : e
    }).then(function (n) {
      var c,
      h = t.getTypeOf(n);
      return h ? ('arraybuffer' === h ? n = t.transformTo('uint8array', n)  : 'string' === h && (l ? n = r.decode(n)  : o && !0 !== s && (n = u(c = n, i.uint8array ? new Uint8Array(c.length)  : new Array(c.length)))), n)  : a.Promise.reject(new Error('Can\'t read the data of \'' + e + '\'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?'))
    })
  }
},
function (e, t, n) {
  (function (t) {
    var n;
    n = 'undefined' != typeof window ? window : void 0 !== t ? t : 'undefined' != typeof self ? self : {
    },
    e.exports = n
  }).call(this, n(7))
},
function (e, t, n) {
  var i;
  e.exports = (i = n(1), n(10), void (i.lib.Cipher || function (e) {
    var t = i,
    n = t.lib,
    r = n.Base,
    o = n.WordArray,
    s = n.BufferedBlockAlgorithm,
    a = t.enc,
    l = (a.Utf8, a.Base64),
    u = t.algo,
    c = u.EvpKDF,
    h = n.Cipher = s.extend({
      cfg: r.extend(),
      createEncryptor: function (e, t) {
        return this.create(this._ENC_XFORM_MODE, e, t)
      },
      createDecryptor: function (e, t) {
        return this.create(this._DEC_XFORM_MODE, e, t)
      },
      init: function (e, t, n) {
        this.cfg = this.cfg.extend(n),
        this._xformMode = e,
        this._key = t,
        this.reset()
      },
      reset: function () {
        s.reset.call(this),
        this._doReset()
      },
      process: function (e) {
        return this._append(e),
        this._process()
      },
      finalize: function (e) {
        e && this._append(e);
        var t = this._doFinalize();
        return t
      },
      keySize: 4,
      ivSize: 4,
      _ENC_XFORM_MODE: 1,
      _DEC_XFORM_MODE: 2,
      _createHelper: function () {
        function e(e) {
          return 'string' == typeof e ? T : b
        }
        return function (t) {
          return {
            encrypt: function (n, i, r) {
              return e(i).encrypt(t, n, i, r)
            },
            decrypt: function (n, i, r) {
              return e(i).decrypt(t, n, i, r)
            }
          }
        }
      }()
    }),
    d = (n.StreamCipher = h.extend({
      _doFinalize: function () {
        var e = this._process(!0);
        return e
      },
      blockSize: 1
    }), t.mode = {
    }),
    f = n.BlockCipherMode = r.extend({
      createEncryptor: function (e, t) {
        return this.Encryptor.create(e, t)
      },
      createDecryptor: function (e, t) {
        return this.Decryptor.create(e, t)
      },
      init: function (e, t) {
        this._cipher = e,
        this._iv = t
      }
    }),
    p = d.CBC = function () {
      var t = f.extend();
      function n(t, n, i) {
        var r = this._iv;
        if (r) {
          var o = r;
          this._iv = e
        } else var o = this._prevBlock;
        for (var s = 0; s < i; s++) t[n + s] ^= o[s]
      }
      return t.Encryptor = t.extend({
        processBlock: function (e, t) {
          var i = this._cipher,
          r = i.blockSize;
          n.call(this, e, t, r),
          i.encryptBlock(e, t),
          this._prevBlock = e.slice(t, t + r)
        }
      }),
      t.Decryptor = t.extend({
        processBlock: function (e, t) {
          var i = this._cipher,
          r = i.blockSize,
          o = e.slice(t, t + r);
          i.decryptBlock(e, t),
          n.call(this, e, t, r),
          this._prevBlock = o
        }
      }),
      t
    }(),
    v = t.pad = {
    },
    g = v.Pkcs7 = {
      pad: function (e, t) {
        for (var n = 4 * t, i = n - e.sigBytes % n, r = i << 24 | i << 16 | i << 8 | i, s = [
        ], a = 0; a < i; a += 4) s.push(r);
        var l = o.create(s, i);
        e.concat(l)
      },
      unpad: function (e) {
        var t = 255 & e.words[e.sigBytes - 1 >>> 2];
        e.sigBytes -= t
      }
    },
    m = (n.BlockCipher = h.extend({
      cfg: h.cfg.extend({
        mode: p,
        padding: g
      }),
      reset: function () {
        h.reset.call(this);
        var e = this.cfg,
        t = e.iv,
        n = e.mode;
        if (this._xformMode == this._ENC_XFORM_MODE) var i = n.createEncryptor;
         else {
          var i = n.createDecryptor;
          this._minBufferSize = 1
        }
        this._mode && this._mode.__creator == i ? this._mode.init(this, t && t.words)  : (this._mode = i.call(n, this, t && t.words), this._mode.__creator = i)
      },
      _doProcessBlock: function (e, t) {
        this._mode.processBlock(e, t)
      },
      _doFinalize: function () {
        var e = this.cfg.padding;
        if (this._xformMode == this._ENC_XFORM_MODE) {
          e.pad(this._data, this.blockSize);
          var t = this._process(!0)
        } else {
          var t = this._process(!0);
          e.unpad(t)
        }
        return t
      },
      blockSize: 4
    }), n.CipherParams = r.extend({
      init: function (e) {
        this.mixIn(e)
      },
      toString: function (e) {
        return (e || this.formatter).stringify(this)
      }
    })),
    A = t.format = {
    },
    y = A.OpenSSL = {
      stringify: function (e) {
        var t = e.ciphertext,
        n = e.salt;
        if (n) var i = o.create([1398893684,
        1701076831]).concat(n).concat(t);
         else var i = t;
        return i.toString(l)
      },
      parse: function (e) {
        var t = l.parse(e),
        n = t.words;
        if (1398893684 == n[0] && 1701076831 == n[1]) {
          var i = o.create(n.slice(2, 4));
          n.splice(0, 4),
          t.sigBytes -= 16
        }
        return m.create({
          ciphertext: t,
          salt: i
        })
      }
    },
    b = n.SerializableCipher = r.extend({
      cfg: r.extend({
        format: y
      }),
      encrypt: function (e, t, n, i) {
        i = this.cfg.extend(i);
        var r = e.createEncryptor(n, i),
        o = r.finalize(t),
        s = r.cfg;
        return m.create({
          ciphertext: o,
          key: n,
          iv: s.iv,
          algorithm: e,
          mode: s.mode,
          padding: s.padding,
          blockSize: e.blockSize,
          formatter: i.format
        })
      },
      decrypt: function (e, t, n, i) {
        i = this.cfg.extend(i),
        t = this._parse(t, i.format);
        var r = e.createDecryptor(n, i).finalize(t.ciphertext);
        return r
      },
      _parse: function (e, t) {
        return 'string' == typeof e ? t.parse(e, this)  : e
      }
    }),
    _ = t.kdf = {
    },
    w = _.OpenSSL = {
      execute: function (e, t, n, i) {
        i || (i = o.random(8));
        var r = c.create({
          keySize: t + n
        }).compute(e, i),
        s = o.create(r.words.slice(t), 4 * n);
        return r.sigBytes = 4 * t,
        m.create({
          key: r,
          iv: s,
          salt: i
        })
      }
    },
    T = n.PasswordBasedCipher = b.extend({
      cfg: b.cfg.extend({
        kdf: w
      }),
      encrypt: function (e, t, n, i) {
        var r = (i = this.cfg.extend(i)).kdf.execute(n, e.keySize, e.ivSize);
        i.iv = r.iv;
        var o = b.encrypt.call(this, e, t, r.key, i);
        return o.mixIn(r),
        o
      },
      decrypt: function (e, t, n, i) {
        i = this.cfg.extend(i),
        t = this._parse(t, i.format);
        var r = i.kdf.execute(n, e.keySize, e.ivSize, t.salt);
        i.iv = r.iv;
        var o = b.decrypt.call(this, e, t, r.key, i);
        return o
      }
    })
  }()))
},
function (e, t, n) {
  'use strict';
  function i(e) {
    this.name = e || 'default',
    this.streamInfo = {
    },
    this.generatedError = null,
    this.extraStreamInfo = {
    },
    this.isPaused = !0,
    this.isFinished = !1,
    this.isLocked = !1,
    this._listeners = {
      data: [
      ],
      end: [
      ],
      error: [
      ]
    },
    this.previous = null
  }
  i.prototype = {
    push: function (e) {
      this.emit('data', e)
    },
    end: function () {
      if (this.isFinished) return !1;
      this.flush();
      try {
        this.emit('end'),
        this.cleanUp(),
        this.isFinished = !0
      } catch (e) {
        this.emit('error', e)
      }
      return !0
    },
    error: function (e) {
      return !this.isFinished && (this.isPaused ? this.generatedError = e : (this.isFinished = !0, this.emit('error', e), this.previous && this.previous.error(e), this.cleanUp()), !0)
    },
    on: function (e, t) {
      return this._listeners[e].push(t),
      this
    },
    cleanUp: function () {
      this.streamInfo = this.generatedError = this.extraStreamInfo = null,
      this._listeners = [
      ]
    },
    emit: function (e, t) {
      if (this._listeners[e]) for (var n = 0; n < this._listeners[e].length; n++) this._listeners[e][n].call(this, t)
    },
    pipe: function (e) {
      return e.registerPrevious(this)
    },
    registerPrevious: function (e) {
      if (this.isLocked) throw new Error('The stream \'' + this + '\' has already been used.');
      this.streamInfo = e.streamInfo,
      this.mergeStreamInfo(),
      this.previous = e;
      var t = this;
      return e.on('data', function (e) {
        t.processChunk(e)
      }),
      e.on('end', function () {
        t.end()
      }),
      e.on('error', function (e) {
        t.error(e)
      }),
      this
    },
    pause: function () {
      return !this.isPaused && !this.isFinished && (this.isPaused = !0, this.previous && this.previous.pause(), !0)
    },
    resume: function () {
      if (!this.isPaused || this.isFinished) return !1;
      this.isPaused = !1;
      var e = !1;
      return this.generatedError && (this.error(this.generatedError), e = !0),
      this.previous && this.previous.resume(),
      !e
    },
    flush: function () {
    },
    processChunk: function (e) {
      this.push(e)
    },
    withStreamInfo: function (e, t) {
      return this.extraStreamInfo[e] = t,
      this.mergeStreamInfo(),
      this
    },
    mergeStreamInfo: function () {
      for (var e in this.extraStreamInfo) this.extraStreamInfo.hasOwnProperty(e) && (this.streamInfo[e] = this.extraStreamInfo[e])
    },
    lock: function () {
      if (this.isLocked) throw new Error('The stream \'' + this + '\' has already been used.');
      this.isLocked = !0,
      this.previous && this.previous.lock()
    },
    toString: function () {
      var e = 'Worker ' + this.name;
      return this.previous ? this.previous + ' -> ' + e : e
    }
  },
  e.exports = i
},
function (e, t, n) {
  'use strict';
  var i = function () {
    this.init = function () {
      var e = {
      };
      this.on = function (t, n) {
        e[t] || (e[t] = [
        ]),
        e[t] = e[t].concat(n)
      },
      this.off = function (t, n) {
        var i;
        return !!e[t] && (i = e[t].indexOf(n), e[t] = e[t].slice(), e[t].splice(i, 1), i > - 1)
      },
      this.trigger = function (t) {
        var n,
        i,
        r,
        o;
        if (n = e[t]) if (2 === arguments.length) for (r = n.length, i = 0; i < r; ++i) n[i].call(this, arguments[1]);
         else {
          for (o = [
          ], i = arguments.length, i = 1; i < arguments.length; ++i) o.push(arguments[i]);
          for (r = n.length, i = 0; i < r; ++i) n[i].apply(this, o)
        }
      },
      this.dispose = function () {
        e = {
        }
      }
    }
  };
  i.prototype.pipe = function (e) {
    return this.on('data', function (t) {
      e.push(t)
    }),
    this.on('done', function (t) {
      e.flush(t)
    }),
    e
  },
  i.prototype.push = function (e) {
    this.trigger('data', e)
  },
  i.prototype.flush = function (e) {
    this.trigger('done', e)
  },
  e.exports = i
},
function (e, t) {
  var n;
  n = function () {
    return this
  }();
  try {
    n = n || Function('return this') () || (0, eval) ('this')
  } catch (e) {
    'object' == typeof window && (n = window)
  }
  e.exports = n
},
function (e, t, n) {
  'use strict';
  var i = 'undefined' != typeof Uint8Array && 'undefined' != typeof Uint16Array && 'undefined' != typeof Int32Array;
  function r(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }
  t.assign = function (e) {
    for (var t = Array.prototype.slice.call(arguments, 1); t.length; ) {
      var n = t.shift();
      if (n) {
        if ('object' != typeof n) throw new TypeError(n + 'must be non-object');
        for (var i in n) r(n, i) && (e[i] = n[i])
      }
    }
    return e
  },
  t.shrinkBuf = function (e, t) {
    return e.length === t ? e : e.subarray ? e.subarray(0, t)  : (e.length = t, e)
  };
  var o = {
    arraySet: function (e, t, n, i, r) {
      if (t.subarray && e.subarray) e.set(t.subarray(n, n + i), r);
       else for (var o = 0; o < i; o++) e[r + o] = t[n + o]
    },
    flattenChunks: function (e) {
      var t,
      n,
      i,
      r,
      o,
      s;
      for (i = 0, t = 0, n = e.length; t < n; t++) i += e[t].length;
      for (s = new Uint8Array(i), r = 0, t = 0, n = e.length; t < n; t++) o = e[t],
      s.set(o, r),
      r += o.length;
      return s
    }
  },
  s = {
    arraySet: function (e, t, n, i, r) {
      for (var o = 0; o < i; o++) e[r + o] = t[n + o]
    },
    flattenChunks: function (e) {
      return [].concat.apply([], e)
    }
  };
  t.setTyped = function (e) {
    e ? (t.Buf8 = Uint8Array, t.Buf16 = Uint16Array, t.Buf32 = Int32Array, t.assign(t, o))  : (t.Buf8 = Array, t.Buf16 = Array, t.Buf32 = Array, t.assign(t, s))
  },
  t.setTyped(i)
},
function (e, t, n) {
  'use strict';
  (function (e) {
    if (t.base64 = !0, t.array = !0, t.string = !0, t.arraybuffer = 'undefined' != typeof ArrayBuffer && 'undefined' != typeof Uint8Array, t.nodebuffer = void 0 !== e, t.uint8array = 'undefined' != typeof Uint8Array, 'undefined' == typeof ArrayBuffer) t.blob = !1;
     else {
      var i = new ArrayBuffer(0);
      try {
        t.blob = 0 === new Blob([i], {
          type: 'application/zip'
        }).size
      } catch (e) {
        try {
          var r = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder);
          r.append(i),
          t.blob = 0 === r.getBlob('application/zip').size
        } catch (e) {
          t.blob = !1
        }
      }
    }
    try {
      t.nodestream = !!n(98).Readable
    } catch (e) {
      t.nodestream = !1
    }
  }).call(this, n(12).Buffer)
},
function (e, t, n) {
  var i,
  r,
  o,
  s,
  a,
  l,
  u,
  c;
  e.exports = (i = n(1), n(38), n(37), o = (r = i).lib, s = o.Base, a = o.WordArray, l = r.algo, u = l.MD5, c = l.EvpKDF = s.extend({
    cfg: s.extend({
      keySize: 4,
      hasher: u,
      iterations: 1
    }),
    init: function (e) {
      this.cfg = this.cfg.extend(e)
    },
    compute: function (e, t) {
      for (var n = this.cfg, i = n.hasher.create(), r = a.create(), o = r.words, s = n.keySize, l = n.iterations; o.length < s; ) {
        u && i.update(u);
        var u = i.update(e).finalize(t);
        i.reset();
        for (var c = 1; c < l; c++) u = i.finalize(u),
        i.reset();
        r.concat(u)
      }
      return r.sigBytes = 4 * s,
      r
    }
  }), r.EvpKDF = function (e, t, n) {
    return c.create(n).compute(e, t)
  }, i.EvpKDF)
},
function (e, t, n) {
  'use strict';
  var i = n(30),
  r = Object.keys || function (e) {
    var t = [
    ];
    for (var n in e) t.push(n);
    return t
  };
  e.exports = h;
  var o = n(21);
  o.inherits = n(16);
  var s = n(97),
  a = n(44);
  o.inherits(h, s);
  for (var l = r(a.prototype), u = 0; u < l.length; u++) {
    var c = l[u];
    h.prototype[c] || (h.prototype[c] = a.prototype[c])
  }
  function h(e) {
    if (!(this instanceof h)) return new h(e);
    s.call(this, e),
    a.call(this, e),
    e && !1 === e.readable && (this.readable = !1),
    e && !1 === e.writable && (this.writable = !1),
    this.allowHalfOpen = !0,
    e && !1 === e.allowHalfOpen && (this.allowHalfOpen = !1),
    this.once('end', d)
  }
  function d() {
    this.allowHalfOpen || this._writableState.ended || i.nextTick(f, this)
  }
  function f(e) {
    e.end()
  }
  Object.defineProperty(h.prototype, 'destroyed', {
    get: function () {
      return void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed && this._writableState.destroyed)
    },
    set: function (e) {
      void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e, this._writableState.destroyed = e)
    }
  }),
  h.prototype._destroy = function (e, t) {
    this.push(null),
    this.end(),
    i.nextTick(t, e)
  }
},
function (e, t, n) {
  'use strict';
  (function (e) {
    var i = n(238),
    r = n(237),
    o = n(99);
    function s() {
      return l.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
    }
    function a(e, t) {
      if (s() < t) throw new RangeError('Invalid typed array length');
      return l.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = l.prototype : (null === e && (e = new l(t)), e.length = t),
      e
    }
    function l(e, t, n) {
      if (!(l.TYPED_ARRAY_SUPPORT || this instanceof l)) return new l(e, t, n);
      if ('number' == typeof e) {
        if ('string' == typeof t) throw new Error('If encoding is specified then the first argument must be a string');
        return h(this, e)
      }
      return u(this, e, t, n)
    }
    function u(e, t, n, i) {
      if ('number' == typeof t) throw new TypeError('"value" argument must not be a number');
      return 'undefined' != typeof ArrayBuffer && t instanceof ArrayBuffer ? function (e, t, n, i) {
        if (t.byteLength, n < 0 || t.byteLength < n) throw new RangeError('\'offset\' is out of bounds');
        if (t.byteLength < n + (i || 0)) throw new RangeError('\'length\' is out of bounds');
        t = void 0 === n && void 0 === i ? new Uint8Array(t)  : void 0 === i ? new Uint8Array(t, n)  : new Uint8Array(t, n, i);
        l.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = l.prototype : e = d(e, t);
        return e
      }(e, t, n, i)  : 'string' == typeof t ? function (e, t, n) {
        'string' == typeof n && '' !== n || (n = 'utf8');
        if (!l.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
        var i = 0 | p(t, n),
        r = (e = a(e, i)).write(t, n);
        r !== i && (e = e.slice(0, r));
        return e
      }(e, t, n)  : function (e, t) {
        if (l.isBuffer(t)) {
          var n = 0 | f(t.length);
          return 0 === (e = a(e, n)).length ? e : (t.copy(e, 0, 0, n), e)
        }
        if (t) {
          if ('undefined' != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || 'length' in t) return 'number' != typeof t.length || (i = t.length) != i ? a(e, 0)  : d(e, t);
          if ('Buffer' === t.type && o(t.data)) return d(e, t.data)
        }
        var i;
        throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
      }(e, t)
    }
    function c(e) {
      if ('number' != typeof e) throw new TypeError('"size" argument must be a number');
      if (e < 0) throw new RangeError('"size" argument must not be negative')
    }
    function h(e, t) {
      if (c(t), e = a(e, t < 0 ? 0 : 0 | f(t)), !l.TYPED_ARRAY_SUPPORT) for (var n = 0; n < t; ++n) e[n] = 0;
      return e
    }
    function d(e, t) {
      var n = t.length < 0 ? 0 : 0 | f(t.length);
      e = a(e, n);
      for (var i = 0; i < n; i += 1) e[i] = 255 & t[i];
      return e
    }
    function f(e) {
      if (e >= s()) throw new RangeError('Attempt to allocate Buffer larger than maximum size: 0x' + s().toString(16) + ' bytes');
      return 0 | e
    }
    function p(e, t) {
      if (l.isBuffer(e)) return e.length;
      if ('undefined' != typeof ArrayBuffer && 'function' == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
      'string' != typeof e && (e = '' + e);
      var n = e.length;
      if (0 === n) return 0;
      for (var i = !1; ; ) switch (t) {
        case 'ascii':
        case 'latin1':
        case 'binary':
          return n;
        case 'utf8':
        case 'utf-8':
        case void 0:
          return F(e).length;
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return 2 * n;
        case 'hex':
          return n >>> 1;
        case 'base64':
          return z(e).length;
        default:
          if (i) return F(e).length;
          t = ('' + t).toLowerCase(),
          i = !0
      }
    }
    function v(e, t, n) {
      var i = e[t];
      e[t] = e[n],
      e[n] = i
    }
    function g(e, t, n, i, r) {
      if (0 === e.length) return - 1;
      if ('string' == typeof n ? (i = n, n = 0)  : n > 2147483647 ? n = 2147483647 : n < - 2147483648 && (n = - 2147483648), n = + n, isNaN(n) && (n = r ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
        if (r) return - 1;
        n = e.length - 1
      } else if (n < 0) {
        if (!r) return - 1;
        n = 0
      }
      if ('string' == typeof t && (t = l.from(t, i)), l.isBuffer(t)) return 0 === t.length ? - 1 : m(e, t, n, i, r);
      if ('number' == typeof t) return t &= 255,
      l.TYPED_ARRAY_SUPPORT && 'function' == typeof Uint8Array.prototype.indexOf ? r ? Uint8Array.prototype.indexOf.call(e, t, n)  : Uint8Array.prototype.lastIndexOf.call(e, t, n)  : m(e, [
        t
      ], n, i, r);
      throw new TypeError('val must be string, number or Buffer')
    }
    function m(e, t, n, i, r) {
      var o,
      s = 1,
      a = e.length,
      l = t.length;
      if (void 0 !== i && ('ucs2' === (i = String(i).toLowerCase()) || 'ucs-2' === i || 'utf16le' === i || 'utf-16le' === i)) {
        if (e.length < 2 || t.length < 2) return - 1;
        s = 2,
        a /= 2,
        l /= 2,
        n /= 2
      }
      function u(e, t) {
        return 1 === s ? e[t] : e.readUInt16BE(t * s)
      }
      if (r) {
        var c = - 1;
        for (o = n; o < a; o++) if (u(e, o) === u(t, - 1 === c ? 0 : o - c)) {
          if ( - 1 === c && (c = o), o - c + 1 === l) return c * s
        } else - 1 !== c && (o -= o - c),
        c = - 1
      } else for (n + l > a && (n = a - l), o = n; o >= 0; o--) {
        for (var h = !0, d = 0; d < l; d++) if (u(e, o + d) !== u(t, d)) {
          h = !1;
          break
        }
        if (h) return o
      }
      return - 1
    }
    function A(e, t, n, i) {
      n = Number(n) || 0;
      var r = e.length - n;
      i ? (i = Number(i)) > r && (i = r)  : i = r;
      var o = t.length;
      if (o % 2 != 0) throw new TypeError('Invalid hex string');
      i > o / 2 && (i = o / 2);
      for (var s = 0; s < i; ++s) {
        var a = parseInt(t.substr(2 * s, 2), 16);
        if (isNaN(a)) return s;
        e[n + s] = a
      }
      return s
    }
    function y(e, t, n, i) {
      return H(F(t, e.length - n), e, n, i)
    }
    function b(e, t, n, i) {
      return H(function (e) {
        for (var t = [
        ], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
        return t
      }(t), e, n, i)
    }
    function _(e, t, n, i) {
      return b(e, t, n, i)
    }
    function w(e, t, n, i) {
      return H(z(t), e, n, i)
    }
    function T(e, t, n, i) {
      return H(function (e, t) {
        for (var n, i, r, o = [
        ], s = 0; s < e.length && !((t -= 2) < 0); ++s) n = e.charCodeAt(s),
        i = n >> 8,
        r = n % 256,
        o.push(r),
        o.push(i);
        return o
      }(t, e.length - n), e, n, i)
    }
    function k(e, t, n) {
      return 0 === t && n === e.length ? i.fromByteArray(e)  : i.fromByteArray(e.slice(t, n))
    }
    function E(e, t, n) {
      n = Math.min(e.length, n);
      for (var i = [
      ], r = t; r < n; ) {
        var o,
        s,
        a,
        l,
        u = e[r],
        c = null,
        h = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
        if (r + h <= n) switch (h) {
          case 1:
            u < 128 && (c = u);
            break;
          case 2:
            128 == (192 & (o = e[r + 1])) && (l = (31 & u) << 6 | 63 & o) > 127 && (c = l);
            break;
          case 3:
            o = e[r + 1],
            s = e[r + 2],
            128 == (192 & o) && 128 == (192 & s) && (l = (15 & u) << 12 | (63 & o) << 6 | 63 & s) > 2047 && (l < 55296 || l > 57343) && (c = l);
            break;
          case 4:
            o = e[r + 1],
            s = e[r + 2],
            a = e[r + 3],
            128 == (192 & o) && 128 == (192 & s) && 128 == (192 & a) && (l = (15 & u) << 18 | (63 & o) << 12 | (63 & s) << 6 | 63 & a) > 65535 && l < 1114112 && (c = l)
        }
        null === c ? (c = 65533, h = 1)  : c > 65535 && (c -= 65536, i.push(c >>> 10 & 1023 | 55296), c = 56320 | 1023 & c),
        i.push(c),
        r += h
      }
      return function (e) {
        var t = e.length;
        if (t <= S) return String.fromCharCode.apply(String, e);
        var n = '',
        i = 0;
        for (; i < t; ) n += String.fromCharCode.apply(String, e.slice(i, i += S));
        return n
      }(i)
    }
    t.Buffer = l,
    t.SlowBuffer = function (e) {
      + e != e && (e = 0);
      return l.alloc( + e)
    },
    t.INSPECT_MAX_BYTES = 50,
    l.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function () {
      try {
        var e = new Uint8Array(1);
        return e.__proto__ = {
          __proto__: Uint8Array.prototype,
          foo: function () {
            return 42
          }
        },
        42 === e.foo() && 'function' == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
      } catch (e) {
        return !1
      }
    }(),
    t.kMaxLength = s(),
    l.poolSize = 8192,
    l._augment = function (e) {
      return e.__proto__ = l.prototype,
      e
    },
    l.from = function (e, t, n) {
      return u(null, e, t, n)
    },
    l.TYPED_ARRAY_SUPPORT && (l.prototype.__proto__ = Uint8Array.prototype, l.__proto__ = Uint8Array, 'undefined' != typeof Symbol && Symbol.species && l[Symbol.species] === l && Object.defineProperty(l, Symbol.species, {
      value: null,
      configurable: !0
    })),
    l.alloc = function (e, t, n) {
      return function (e, t, n, i) {
        return c(t),
        t <= 0 ? a(e, t)  : void 0 !== n ? 'string' == typeof i ? a(e, t).fill(n, i)  : a(e, t).fill(n)  : a(e, t)
      }(null, e, t, n)
    },
    l.allocUnsafe = function (e) {
      return h(null, e)
    },
    l.allocUnsafeSlow = function (e) {
      return h(null, e)
    },
    l.isBuffer = function (e) {
      return !(null == e || !e._isBuffer)
    },
    l.compare = function (e, t) {
      if (!l.isBuffer(e) || !l.isBuffer(t)) throw new TypeError('Arguments must be Buffers');
      if (e === t) return 0;
      for (var n = e.length, i = t.length, r = 0, o = Math.min(n, i); r < o; ++r) if (e[r] !== t[r]) {
        n = e[r],
        i = t[r];
        break
      }
      return n < i ? - 1 : i < n ? 1 : 0
    },
    l.isEncoding = function (e) {
      switch (String(e).toLowerCase()) {
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'latin1':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return !0;
        default:
          return !1
      }
    },
    l.concat = function (e, t) {
      if (!o(e)) throw new TypeError('"list" argument must be an Array of Buffers');
      if (0 === e.length) return l.alloc(0);
      var n;
      if (void 0 === t) for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
      var i = l.allocUnsafe(t),
      r = 0;
      for (n = 0; n < e.length; ++n) {
        var s = e[n];
        if (!l.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
        s.copy(i, r),
        r += s.length
      }
      return i
    },
    l.byteLength = p,
    l.prototype._isBuffer = !0,
    l.prototype.swap16 = function () {
      var e = this.length;
      if (e % 2 != 0) throw new RangeError('Buffer size must be a multiple of 16-bits');
      for (var t = 0; t < e; t += 2) v(this, t, t + 1);
      return this
    },
    l.prototype.swap32 = function () {
      var e = this.length;
      if (e % 4 != 0) throw new RangeError('Buffer size must be a multiple of 32-bits');
      for (var t = 0; t < e; t += 4) v(this, t, t + 3),
      v(this, t + 1, t + 2);
      return this
    },
    l.prototype.swap64 = function () {
      var e = this.length;
      if (e % 8 != 0) throw new RangeError('Buffer size must be a multiple of 64-bits');
      for (var t = 0; t < e; t += 8) v(this, t, t + 7),
      v(this, t + 1, t + 6),
      v(this, t + 2, t + 5),
      v(this, t + 3, t + 4);
      return this
    },
    l.prototype.toString = function () {
      var e = 0 | this.length;
      return 0 === e ? '' : 0 === arguments.length ? E(this, 0, e)  : function (e, t, n) {
        var i = !1;
        if ((void 0 === t || t < 0) && (t = 0), t > this.length) return '';
        if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return '';
        if ((n >>>= 0) <= (t >>>= 0)) return '';
        for (e || (e = 'utf8'); ; ) switch (e) {
          case 'hex':
            return x(this, t, n);
          case 'utf8':
          case 'utf-8':
            return E(this, t, n);
          case 'ascii':
            return j(this, t, n);
          case 'latin1':
          case 'binary':
            return C(this, t, n);
          case 'base64':
            return k(this, t, n);
          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return B(this, t, n);
          default:
            if (i) throw new TypeError('Unknown encoding: ' + e);
            e = (e + '').toLowerCase(),
            i = !0
        }
      }.apply(this, arguments)
    },
    l.prototype.equals = function (e) {
      if (!l.isBuffer(e)) throw new TypeError('Argument must be a Buffer');
      return this === e || 0 === l.compare(this, e)
    },
    l.prototype.inspect = function () {
      var e = '',
      n = t.INSPECT_MAX_BYTES;
      return this.length > 0 && (e = this.toString('hex', 0, n).match(/.{2}/g).join(' '), this.length > n && (e += ' ... ')),
      '<Buffer ' + e + '>'
    },
    l.prototype.compare = function (e, t, n, i, r) {
      if (!l.isBuffer(e)) throw new TypeError('Argument must be a Buffer');
      if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === i && (i = 0), void 0 === r && (r = this.length), t < 0 || n > e.length || i < 0 || r > this.length) throw new RangeError('out of range index');
      if (i >= r && t >= n) return 0;
      if (i >= r) return - 1;
      if (t >= n) return 1;
      if (t >>>= 0, n >>>= 0, i >>>= 0, r >>>= 0, this === e) return 0;
      for (var o = r - i, s = n - t, a = Math.min(o, s), u = this.slice(i, r), c = e.slice(t, n), h = 0; h < a; ++h) if (u[h] !== c[h]) {
        o = u[h],
        s = c[h];
        break
      }
      return o < s ? - 1 : s < o ? 1 : 0
    },
    l.prototype.includes = function (e, t, n) {
      return - 1 !== this.indexOf(e, t, n)
    },
    l.prototype.indexOf = function (e, t, n) {
      return g(this, e, t, n, !0)
    },
    l.prototype.lastIndexOf = function (e, t, n) {
      return g(this, e, t, n, !1)
    },
    l.prototype.write = function (e, t, n, i) {
      if (void 0 === t) i = 'utf8',
      n = this.length,
      t = 0;
       else if (void 0 === n && 'string' == typeof t) i = t,
      n = this.length,
      t = 0;
       else {
        if (!isFinite(t)) throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
        t |= 0,
        isFinite(n) ? (n |= 0, void 0 === i && (i = 'utf8'))  : (i = n, n = void 0)
      }
      var r = this.length - t;
      if ((void 0 === n || n > r) && (n = r), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError('Attempt to write outside buffer bounds');
      i || (i = 'utf8');
      for (var o = !1; ; ) switch (i) {
        case 'hex':
          return A(this, e, t, n);
        case 'utf8':
        case 'utf-8':
          return y(this, e, t, n);
        case 'ascii':
          return b(this, e, t, n);
        case 'latin1':
        case 'binary':
          return _(this, e, t, n);
        case 'base64':
          return w(this, e, t, n);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return T(this, e, t, n);
        default:
          if (o) throw new TypeError('Unknown encoding: ' + i);
          i = ('' + i).toLowerCase(),
          o = !0
      }
    },
    l.prototype.toJSON = function () {
      return {
        type: 'Buffer',
        data: Array.prototype.slice.call(this._arr || this, 0)
      }
    };
    var S = 4096;
    function j(e, t, n) {
      var i = '';
      n = Math.min(e.length, n);
      for (var r = t; r < n; ++r) i += String.fromCharCode(127 & e[r]);
      return i
    }
    function C(e, t, n) {
      var i = '';
      n = Math.min(e.length, n);
      for (var r = t; r < n; ++r) i += String.fromCharCode(e[r]);
      return i
    }
    function x(e, t, n) {
      var i = e.length;
      (!t || t < 0) && (t = 0),
      (!n || n < 0 || n > i) && (n = i);
      for (var r = '', o = t; o < n; ++o) r += N(e[o]);
      return r
    }
    function B(e, t, n) {
      for (var i = e.slice(t, n), r = '', o = 0; o < i.length; o += 2) r += String.fromCharCode(i[o] + 256 * i[o + 1]);
      return r
    }
    function O(e, t, n) {
      if (e % 1 != 0 || e < 0) throw new RangeError('offset is not uint');
      if (e + t > n) throw new RangeError('Trying to access beyond buffer length')
    }
    function I(e, t, n, i, r, o) {
      if (!l.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
      if (t > r || t < o) throw new RangeError('"value" argument is out of bounds');
      if (n + i > e.length) throw new RangeError('Index out of range')
    }
    function P(e, t, n, i) {
      t < 0 && (t = 65535 + t + 1);
      for (var r = 0, o = Math.min(e.length - n, 2); r < o; ++r) e[n + r] = (t & 255 << 8 * (i ? r : 1 - r)) >>> 8 * (i ? r : 1 - r)
    }
    function R(e, t, n, i) {
      t < 0 && (t = 4294967295 + t + 1);
      for (var r = 0, o = Math.min(e.length - n, 4); r < o; ++r) e[n + r] = t >>> 8 * (i ? r : 3 - r) & 255
    }
    function M(e, t, n, i, r, o) {
      if (n + i > e.length) throw new RangeError('Index out of range');
      if (n < 0) throw new RangeError('Index out of range')
    }
    function L(e, t, n, i, o) {
      return o || M(e, 0, n, 4),
      r.write(e, t, n, i, 23, 4),
      n + 4
    }
    function D(e, t, n, i, o) {
      return o || M(e, 0, n, 8),
      r.write(e, t, n, i, 52, 8),
      n + 8
    }
    l.prototype.slice = function (e, t) {
      var n,
      i = this.length;
      if (e = ~~e, t = void 0 === t ? i : ~~t, e < 0 ? (e += i) < 0 && (e = 0)  : e > i && (e = i), t < 0 ? (t += i) < 0 && (t = 0)  : t > i && (t = i), t < e && (t = e), l.TYPED_ARRAY_SUPPORT) (n = this.subarray(e, t)).__proto__ = l.prototype;
       else {
        var r = t - e;
        n = new l(r, void 0);
        for (var o = 0; o < r; ++o) n[o] = this[o + e]
      }
      return n
    },
    l.prototype.readUIntLE = function (e, t, n) {
      e |= 0,
      t |= 0,
      n || O(e, t, this.length);
      for (var i = this[e], r = 1, o = 0; ++o < t && (r *= 256); ) i += this[e + o] * r;
      return i
    },
    l.prototype.readUIntBE = function (e, t, n) {
      e |= 0,
      t |= 0,
      n || O(e, t, this.length);
      for (var i = this[e + --t], r = 1; t > 0 && (r *= 256); ) i += this[e + --t] * r;
      return i
    },
    l.prototype.readUInt8 = function (e, t) {
      return t || O(e, 1, this.length),
      this[e]
    },
    l.prototype.readUInt16LE = function (e, t) {
      return t || O(e, 2, this.length),
      this[e] | this[e + 1] << 8
    },
    l.prototype.readUInt16BE = function (e, t) {
      return t || O(e, 2, this.length),
      this[e] << 8 | this[e + 1]
    },
    l.prototype.readUInt32LE = function (e, t) {
      return t || O(e, 4, this.length),
      (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
    },
    l.prototype.readUInt32BE = function (e, t) {
      return t || O(e, 4, this.length),
      16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
    },
    l.prototype.readIntLE = function (e, t, n) {
      e |= 0,
      t |= 0,
      n || O(e, t, this.length);
      for (var i = this[e], r = 1, o = 0; ++o < t && (r *= 256); ) i += this[e + o] * r;
      return i >= (r *= 128) && (i -= Math.pow(2, 8 * t)),
      i
    },
    l.prototype.readIntBE = function (e, t, n) {
      e |= 0,
      t |= 0,
      n || O(e, t, this.length);
      for (var i = t, r = 1, o = this[e + --i]; i > 0 && (r *= 256); ) o += this[e + --i] * r;
      return o >= (r *= 128) && (o -= Math.pow(2, 8 * t)),
      o
    },
    l.prototype.readInt8 = function (e, t) {
      return t || O(e, 1, this.length),
      128 & this[e] ? - 1 * (255 - this[e] + 1)  : this[e]
    },
    l.prototype.readInt16LE = function (e, t) {
      t || O(e, 2, this.length);
      var n = this[e] | this[e + 1] << 8;
      return 32768 & n ? 4294901760 | n : n
    },
    l.prototype.readInt16BE = function (e, t) {
      t || O(e, 2, this.length);
      var n = this[e + 1] | this[e] << 8;
      return 32768 & n ? 4294901760 | n : n
    },
    l.prototype.readInt32LE = function (e, t) {
      return t || O(e, 4, this.length),
      this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
    },
    l.prototype.readInt32BE = function (e, t) {
      return t || O(e, 4, this.length),
      this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
    },
    l.prototype.readFloatLE = function (e, t) {
      return t || O(e, 4, this.length),
      r.read(this, e, !0, 23, 4)
    },
    l.prototype.readFloatBE = function (e, t) {
      return t || O(e, 4, this.length),
      r.read(this, e, !1, 23, 4)
    },
    l.prototype.readDoubleLE = function (e, t) {
      return t || O(e, 8, this.length),
      r.read(this, e, !0, 52, 8)
    },
    l.prototype.readDoubleBE = function (e, t) {
      return t || O(e, 8, this.length),
      r.read(this, e, !1, 52, 8)
    },
    l.prototype.writeUIntLE = function (e, t, n, i) {
      (e = + e, t |= 0, n |= 0, i) || I(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
      var r = 1,
      o = 0;
      for (this[t] = 255 & e; ++o < n && (r *= 256); ) this[t + o] = e / r & 255;
      return t + n
    },
    l.prototype.writeUIntBE = function (e, t, n, i) {
      (e = + e, t |= 0, n |= 0, i) || I(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
      var r = n - 1,
      o = 1;
      for (this[t + r] = 255 & e; --r >= 0 && (o *= 256); ) this[t + r] = e / o & 255;
      return t + n
    },
    l.prototype.writeUInt8 = function (e, t, n) {
      return e = + e,
      t |= 0,
      n || I(this, e, t, 1, 255, 0),
      l.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
      this[t] = 255 & e,
      t + 1
    },
    l.prototype.writeUInt16LE = function (e, t, n) {
      return e = + e,
      t |= 0,
      n || I(this, e, t, 2, 65535, 0),
      l.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8)  : P(this, e, t, !0),
      t + 2
    },
    l.prototype.writeUInt16BE = function (e, t, n) {
      return e = + e,
      t |= 0,
      n || I(this, e, t, 2, 65535, 0),
      l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e)  : P(this, e, t, !1),
      t + 2
    },
    l.prototype.writeUInt32LE = function (e, t, n) {
      return e = + e,
      t |= 0,
      n || I(this, e, t, 4, 4294967295, 0),
      l.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e)  : R(this, e, t, !0),
      t + 4
    },
    l.prototype.writeUInt32BE = function (e, t, n) {
      return e = + e,
      t |= 0,
      n || I(this, e, t, 4, 4294967295, 0),
      l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e)  : R(this, e, t, !1),
      t + 4
    },
    l.prototype.writeIntLE = function (e, t, n, i) {
      if (e = + e, t |= 0, !i) {
        var r = Math.pow(2, 8 * n - 1);
        I(this, e, t, n, r - 1, - r)
      }
      var o = 0,
      s = 1,
      a = 0;
      for (this[t] = 255 & e; ++o < n && (s *= 256); ) e < 0 && 0 === a && 0 !== this[t + o - 1] && (a = 1),
      this[t + o] = (e / s >> 0) - a & 255;
      return t + n
    },
    l.prototype.writeIntBE = function (e, t, n, i) {
      if (e = + e, t |= 0, !i) {
        var r = Math.pow(2, 8 * n - 1);
        I(this, e, t, n, r - 1, - r)
      }
      var o = n - 1,
      s = 1,
      a = 0;
      for (this[t + o] = 255 & e; --o >= 0 && (s *= 256); ) e < 0 && 0 === a && 0 !== this[t + o + 1] && (a = 1),
      this[t + o] = (e / s >> 0) - a & 255;
      return t + n
    },
    l.prototype.writeInt8 = function (e, t, n) {
      return e = + e,
      t |= 0,
      n || I(this, e, t, 1, 127, - 128),
      l.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
      e < 0 && (e = 255 + e + 1),
      this[t] = 255 & e,
      t + 1
    },
    l.prototype.writeInt16LE = function (e, t, n) {
      return e = + e,
      t |= 0,
      n || I(this, e, t, 2, 32767, - 32768),
      l.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8)  : P(this, e, t, !0),
      t + 2
    },
    l.prototype.writeInt16BE = function (e, t, n) {
      return e = + e,
      t |= 0,
      n || I(this, e, t, 2, 32767, - 32768),
      l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e)  : P(this, e, t, !1),
      t + 2
    },
    l.prototype.writeInt32LE = function (e, t, n) {
      return e = + e,
      t |= 0,
      n || I(this, e, t, 4, 2147483647, - 2147483648),
      l.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24)  : R(this, e, t, !0),
      t + 4
    },
    l.prototype.writeInt32BE = function (e, t, n) {
      return e = + e,
      t |= 0,
      n || I(this, e, t, 4, 2147483647, - 2147483648),
      e < 0 && (e = 4294967295 + e + 1),
      l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e)  : R(this, e, t, !1),
      t + 4
    },
    l.prototype.writeFloatLE = function (e, t, n) {
      return L(this, e, t, !0, n)
    },
    l.prototype.writeFloatBE = function (e, t, n) {
      return L(this, e, t, !1, n)
    },
    l.prototype.writeDoubleLE = function (e, t, n) {
      return D(this, e, t, !0, n)
    },
    l.prototype.writeDoubleBE = function (e, t, n) {
      return D(this, e, t, !1, n)
    },
    l.prototype.copy = function (e, t, n, i) {
      if (n || (n = 0), i || 0 === i || (i = this.length), t >= e.length && (t = e.length), t || (t = 0), i > 0 && i < n && (i = n), i === n) return 0;
      if (0 === e.length || 0 === this.length) return 0;
      if (t < 0) throw new RangeError('targetStart out of bounds');
      if (n < 0 || n >= this.length) throw new RangeError('sourceStart out of bounds');
      if (i < 0) throw new RangeError('sourceEnd out of bounds');
      i > this.length && (i = this.length),
      e.length - t < i - n && (i = e.length - t + n);
      var r,
      o = i - n;
      if (this === e && n < t && t < i) for (r = o - 1; r >= 0; --r) e[r + t] = this[r + n];
       else if (o < 1000 || !l.TYPED_ARRAY_SUPPORT) for (r = 0; r < o; ++r) e[r + t] = this[r + n];
       else Uint8Array.prototype.set.call(e, this.subarray(n, n + o), t);
      return o
    },
    l.prototype.fill = function (e, t, n, i) {
      if ('string' == typeof e) {
        if ('string' == typeof t ? (i = t, t = 0, n = this.length)  : 'string' == typeof n && (i = n, n = this.length), 1 === e.length) {
          var r = e.charCodeAt(0);
          r < 256 && (e = r)
        }
        if (void 0 !== i && 'string' != typeof i) throw new TypeError('encoding must be a string');
        if ('string' == typeof i && !l.isEncoding(i)) throw new TypeError('Unknown encoding: ' + i)
      } else 'number' == typeof e && (e &= 255);
      if (t < 0 || this.length < t || this.length < n) throw new RangeError('Out of range index');
      if (n <= t) return this;
      var o;
      if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), 'number' == typeof e) for (o = t; o < n; ++o) this[o] = e;
       else {
        var s = l.isBuffer(e) ? e : F(new l(e, i).toString()),
        a = s.length;
        for (o = 0; o < n - t; ++o) this[o + t] = s[o % a]
      }
      return this
    };
    var U = /[^+\/0-9A-Za-z-_]/g;
    function N(e) {
      return e < 16 ? '0' + e.toString(16)  : e.toString(16)
    }
    function F(e, t) {
      var n;
      t = t || 1 / 0;
      for (var i = e.length, r = null, o = [
      ], s = 0; s < i; ++s) {
        if ((n = e.charCodeAt(s)) > 55295 && n < 57344) {
          if (!r) {
            if (n > 56319) {
              (t -= 3) > - 1 && o.push(239, 191, 189);
              continue
            }
            if (s + 1 === i) {
              (t -= 3) > - 1 && o.push(239, 191, 189);
              continue
            }
            r = n;
            continue
          }
          if (n < 56320) {
            (t -= 3) > - 1 && o.push(239, 191, 189),
            r = n;
            continue
          }
          n = 65536 + (r - 55296 << 10 | n - 56320)
        } else r && (t -= 3) > - 1 && o.push(239, 191, 189);
        if (r = null, n < 128) {
          if ((t -= 1) < 0) break;
          o.push(n)
        } else if (n < 2048) {
          if ((t -= 2) < 0) break;
          o.push(n >> 6 | 192, 63 & n | 128)
        } else if (n < 65536) {
          if ((t -= 3) < 0) break;
          o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
        } else {
          if (!(n < 1114112)) throw new Error('Invalid code point');
          if ((t -= 4) < 0) break;
          o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
        }
      }
      return o
    }
    function z(e) {
      return i.toByteArray(function (e) {
        if ((e = function (e) {
          return e.trim ? e.trim()  : e.replace(/^\s+|\s+$/g, '')
        }(e).replace(U, '')).length < 2) return '';
        for (; e.length % 4 != 0; ) e += '=';
        return e
      }(e))
    }
    function H(e, t, n, i) {
      for (var r = 0; r < i && !(r + n >= t.length || r >= e.length); ++r) t[r + n] = e[r];
      return r
    }
  }).call(this, n(7))
},
function (e, t, n) {
  'use strict';
  Object.defineProperty(t, '__esModule', {
    value: !0
  });
  var i,
  r = n(0),
  o = n(3),
  s = (i = o) && i.__esModule ? i : {
  default:
    i
  },
  a = function (e, t, n) {
    var i,
    r;
    return void 0 === t && (t = e.mediaSequence + e.segments.length),
    t < e.mediaSequence ? 0 : (i = function (e, t) {
      var n = 0,
      i = t - e.mediaSequence,
      r = e.segments[i];
      if (r) {
        if (void 0 !== r.start) return {
          result: r.start,
          precise: !0
        };
        if (void 0 !== r.end) return {
          result: r.end - r.duration,
          precise: !0
        }
      }
      for (; i--; ) {
        if (void 0 !== (r = e.segments[i]).end) return {
          result: n + r.end,
          precise: !0
        };
        if (n += r.duration, void 0 !== r.start) return {
          result: n + r.start,
          precise: !0
        }
      }
      return {
        result: n,
        precise: !1
      }
    }(e, t)).precise ? i.result : (r = function (e, t) {
      for (var n = 0, i = void 0, r = t - e.mediaSequence; r < e.segments.length; r++) {
        if (void 0 !== (i = e.segments[r]).start) return {
          result: i.start - n,
          precise: !0
        };
        if (n += i.duration, void 0 !== i.end) return {
          result: i.end - n,
          precise: !0
        }
      }
      return {
        result: - 1,
        precise: !1
      }
    }(e, t)).precise ? r.result : i.result + n
  },
  l = function (e, t, n) {
    if (!e) return 0;
    if ('number' != typeof n && (n = 0), void 0 === t) {
      if (e.totalDuration) return e.totalDuration;
      if (!e.endList) return s.default.Infinity
    }
    return a(e, t, n)
  };
  t.duration = l;
  var u = function (e, t, n) {
    var i = 0;
    if (t > n) {
      var r = [
        n,
        t
      ];
      t = r[0],
      n = r[1]
    }
    if (t < 0) {
      for (var o = t; o < Math.min(0, n); o++) i += e.targetDuration;
      t = 0
    }
    for (o = t; o < n; o++) i += e.segments[o].duration;
    return i
  };
  t.sumDurations = u;
  var c = function (e) {
    if (!e.segments.length) return 0;
    for (var t = e.segments.length - 1, n = e.segments[t].duration || e.targetDuration, i = n + 2 * e.targetDuration; t-- && !((n += e.segments[t].duration) >= i); );
    return Math.max(0, t)
  };
  t.safeLiveIndex = c;
  var h = function (e, t, n) {
    if (!e || !e.segments) return null;
    if (e.endList) return l(e);
    if (null === t) return null;
    t = t || 0;
    var i = n ? c(e)  : e.segments.length;
    return a(e, e.mediaSequence + i, t)
  };
  t.playlistEnd = h;
  var d = function (e, t) {
    var n = t || 0,
    i = h(e, t, !0);
    return null === i ? (0, r.createTimeRange) ()  : (0, r.createTimeRange) (n, i)
  };
  t.seekable = d;
  var f = function (e) {
    return e - Math.floor(e) == 0
  },
  p = function (e, t) {
    if (f(t)) return t + 0.1 * e;
    for (var n = t.toString().split('.') [1].length, i = 1; i <= n; i++) {
      var r = Math.pow(10, i),
      o = t * r;
      if (f(o) || i === n) return (o + e) / r
    }
  },
  v = p.bind(null, 1),
  g = p.bind(null, - 1),
  m = function (e, t, n, i) {
    var r = void 0,
    o = void 0,
    s = e.segments.length,
    a = t - i;
    if (a < 0) {
      if (n > 0) for (r = n - 1; r >= 0; r--) if (o = e.segments[r], (a += g(o.duration)) > 0) return {
        mediaIndex: r,
        startTime: i - u(e, n, r)
      };
      return {
        mediaIndex: 0,
        startTime: t
      }
    }
    if (n < 0) {
      for (r = n; r < 0; r++) if ((a -= e.targetDuration) < 0) return {
        mediaIndex: 0,
        startTime: t
      };
      n = 0
    }
    for (r = n; r < s; r++) if (o = e.segments[r], (a -= v(o.duration)) < 0) return {
      mediaIndex: r,
      startTime: i + u(e, n, r)
    };
    return {
      mediaIndex: s - 1,
      startTime: t
    }
  };
  t.getMediaInfoForTime = m;
  var A = function (e) {
    return e.excludeUntil && e.excludeUntil > Date.now()
  };
  t.isBlacklisted = A;
  var y = function (e) {
    return e.excludeUntil && e.excludeUntil === 1 / 0
  };
  t.isIncompatible = y;
  var b = function (e) {
    var t = A(e);
    return !e.disabled && !t
  };
  t.isEnabled = b;
  var _ = function (e) {
    return e.disabled
  };
  t.isDisabled = _;
  var w = function (e) {
    for (var t = 0; t < e.segments.length; t++) if (e.segments[t].key) return !0;
    return !1
  };
  t.isAes = w;
  var T = function (e) {
    for (var t = 0; t < e.segments.length; t++) if (e.segments[t].map) return !0;
    return !1
  };
  t.isFmp4 = T;
  var k = function (e, t) {
    return t.attributes && t.attributes[e]
  };
  t.hasAttribute = k;
  var E = function (e, t, n) {
    var i = arguments.length <= 3 || void 0 === arguments[3] ? 0 : arguments[3];
    return k('BANDWIDTH', n) ? (e * n.attributes.BANDWIDTH - 8 * i) / t : NaN
  };
  t.estimateSegmentRequestTime = E;
  var S = function (e, t) {
    if (1 === e.playlists.length) return !0;
    var n = t.attributes.BANDWIDTH || Number.MAX_VALUE;
    return 0 === e.playlists.filter(function (e) {
      return !!b(e) && (e.attributes.BANDWIDTH || 0) < n
    }).length
  };
  t.isLowestEnabledRendition = S,
  t.default = {
    duration: l,
    seekable: d,
    safeLiveIndex: c,
    getMediaInfoForTime: m,
    isEnabled: b,
    isDisabled: _,
    isBlacklisted: A,
    isIncompatible: y,
    playlistEnd: h,
    isAes: w,
    isFmp4: T,
    hasAttribute: k,
    estimateSegmentRequestTime: E,
    isLowestEnabledRendition: S
  }
},
function (e, t, n) {
  var i;
  e.exports = (i = n(1), function (e) {
    var t = i,
    n = t.lib,
    r = n.WordArray,
    o = n.Hasher,
    s = t.algo,
    a = [
    ];
    !function () {
      for (var t = 0; t < 64; t++) a[t] = 4294967296 * e.abs(e.sin(t + 1)) | 0
    }();
    var l = s.MD5 = o.extend({
      _doReset: function () {
        this._hash = new r.init([1732584193,
        4023233417,
        2562383102,
        271733878])
      },
      _doProcessBlock: function (e, t) {
        for (var n = 0; n < 16; n++) {
          var i = t + n,
          r = e[i];
          e[i] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8)
        }
        var o = this._hash.words,
        s = e[t + 0],
        l = e[t + 1],
        f = e[t + 2],
        p = e[t + 3],
        v = e[t + 4],
        g = e[t + 5],
        m = e[t + 6],
        A = e[t + 7],
        y = e[t + 8],
        b = e[t + 9],
        _ = e[t + 10],
        w = e[t + 11],
        T = e[t + 12],
        k = e[t + 13],
        E = e[t + 14],
        S = e[t + 15],
        j = o[0],
        C = o[1],
        x = o[2],
        B = o[3];
        C = d(C = d(C = d(C = d(C = h(C = h(C = h(C = h(C = c(C = c(C = c(C = c(C = u(C = u(C = u(C = u(C, x = u(x, B = u(B, j = u(j, C, x, B, s, 7, a[0]), C, x, l, 12, a[1]), j, C, f, 17, a[2]), B, j, p, 22, a[3]), x = u(x, B = u(B, j = u(j, C, x, B, v, 7, a[4]), C, x, g, 12, a[5]), j, C, m, 17, a[6]), B, j, A, 22, a[7]), x = u(x, B = u(B, j = u(j, C, x, B, y, 7, a[8]), C, x, b, 12, a[9]), j, C, _, 17, a[10]), B, j, w, 22, a[11]), x = u(x, B = u(B, j = u(j, C, x, B, T, 7, a[12]), C, x, k, 12, a[13]), j, C, E, 17, a[14]), B, j, S, 22, a[15]), x = c(x, B = c(B, j = c(j, C, x, B, l, 5, a[16]), C, x, m, 9, a[17]), j, C, w, 14, a[18]), B, j, s, 20, a[19]), x = c(x, B = c(B, j = c(j, C, x, B, g, 5, a[20]), C, x, _, 9, a[21]), j, C, S, 14, a[22]), B, j, v, 20, a[23]), x = c(x, B = c(B, j = c(j, C, x, B, b, 5, a[24]), C, x, E, 9, a[25]), j, C, p, 14, a[26]), B, j, y, 20, a[27]), x = c(x, B = c(B, j = c(j, C, x, B, k, 5, a[28]), C, x, f, 9, a[29]), j, C, A, 14, a[30]), B, j, T, 20, a[31]), x = h(x, B = h(B, j = h(j, C, x, B, g, 4, a[32]), C, x, y, 11, a[33]), j, C, w, 16, a[34]), B, j, E, 23, a[35]), x = h(x, B = h(B, j = h(j, C, x, B, l, 4, a[36]), C, x, v, 11, a[37]), j, C, A, 16, a[38]), B, j, _, 23, a[39]), x = h(x, B = h(B, j = h(j, C, x, B, k, 4, a[40]), C, x, s, 11, a[41]), j, C, p, 16, a[42]), B, j, m, 23, a[43]), x = h(x, B = h(B, j = h(j, C, x, B, b, 4, a[44]), C, x, T, 11, a[45]), j, C, S, 16, a[46]), B, j, f, 23, a[47]), x = d(x, B = d(B, j = d(j, C, x, B, s, 6, a[48]), C, x, A, 10, a[49]), j, C, E, 15, a[50]), B, j, g, 21, a[51]), x = d(x, B = d(B, j = d(j, C, x, B, T, 6, a[52]), C, x, p, 10, a[53]), j, C, _, 15, a[54]), B, j, l, 21, a[55]), x = d(x, B = d(B, j = d(j, C, x, B, y, 6, a[56]), C, x, S, 10, a[57]), j, C, m, 15, a[58]), B, j, k, 21, a[59]), x = d(x, B = d(B, j = d(j, C, x, B, v, 6, a[60]), C, x, w, 10, a[61]), j, C, f, 15, a[62]), B, j, b, 21, a[63]),
        o[0] = o[0] + j | 0,
        o[1] = o[1] + C | 0,
        o[2] = o[2] + x | 0,
        o[3] = o[3] + B | 0
      },
      _doFinalize: function () {
        var t = this._data,
        n = t.words,
        i = 8 * this._nDataBytes,
        r = 8 * t.sigBytes;
        n[r >>> 5] |= 128 << 24 - r % 32;
        var o = e.floor(i / 4294967296),
        s = i;
        n[15 + (r + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8),
        n[14 + (r + 64 >>> 9 << 4)] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8),
        t.sigBytes = 4 * (n.length + 1),
        this._process();
        for (var a = this._hash, l = a.words, u = 0; u < 4; u++) {
          var c = l[u];
          l[u] = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8)
        }
        return a
      },
      clone: function () {
        var e = o.clone.call(this);
        return e._hash = this._hash.clone(),
        e
      }
    });
    function u(e, t, n, i, r, o, s) {
      var a = e + (t & n | ~t & i) + r + s;
      return (a << o | a >>> 32 - o) + t
    }
    function c(e, t, n, i, r, o, s) {
      var a = e + (t & i | n & ~i) + r + s;
      return (a << o | a >>> 32 - o) + t
    }
    function h(e, t, n, i, r, o, s) {
      var a = e + (t ^ n ^ i) + r + s;
      return (a << o | a >>> 32 - o) + t
    }
    function d(e, t, n, i, r, o, s) {
      var a = e + (n ^ (t | ~i)) + r + s;
      return (a << o | a >>> 32 - o) + t
    }
    t.MD5 = o._createHelper(l),
    t.HmacMD5 = o._createHmacHelper(l)
  }(Math), i.MD5)
},
function (e, t, n) {
  var i,
  r,
  o;
  e.exports = (i = n(1), o = (r = i).lib.WordArray, r.enc.Base64 = {
    stringify: function (e) {
      var t = e.words,
      n = e.sigBytes,
      i = this._map;
      e.clamp();
      for (var r = [
      ], o = 0; o < n; o += 3) for (var s = (t[o >>> 2] >>> 24 - o % 4 * 8 & 255) << 16 | (t[o + 1 >>> 2] >>> 24 - (o + 1) % 4 * 8 & 255) << 8 | t[o + 2 >>> 2] >>> 24 - (o + 2) % 4 * 8 & 255, a = 0; a < 4 && o + 0.75 * a < n; a++) r.push(i.charAt(s >>> 6 * (3 - a) & 63));
      var l = i.charAt(64);
      if (l) for (; r.length % 4; ) r.push(l);
      return r.join('')
    },
    parse: function (e) {
      var t = e.length,
      n = this._map,
      i = this._reverseMap;
      if (!i) {
        i = this._reverseMap = [
        ];
        for (var r = 0; r < n.length; r++) i[n.charCodeAt(r)] = r
      }
      var s = n.charAt(64);
      if (s) {
        var a = e.indexOf(s);
        - 1 !== a && (t = a)
      }
      return function (e, t, n) {
        for (var i = [
        ], r = 0, s = 0; s < t; s++) if (s % 4) {
          var a = n[e.charCodeAt(s - 1)] << s % 4 * 2,
          l = n[e.charCodeAt(s)] >>> 6 - s % 4 * 2;
          i[r >>> 2] |= (a | l) << 24 - r % 4 * 8,
          r++
        }
        return o.create(i, r)
      }(e, t, i)
    },
    _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
  }, i.enc.Base64)
},
function (e, t) {
  'function' == typeof Object.create ? e.exports = function (e, t) {
    e.super_ = t,
    e.prototype = Object.create(t.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    })
  }
   : e.exports = function (e, t) {
    e.super_ = t;
    var n = function () {
    };
    n.prototype = t.prototype,
    e.prototype = new n,
    e.prototype.constructor = e
  }
},
function (e, t, n) {
  'use strict';
  for (var i = n(2), r = n(9), o = n(28), s = n(5), a = new Array(256), l = 0; l < 256; l++) a[l] = l >= 252 ? 6 : l >= 248 ? 5 : l >= 240 ? 4 : l >= 224 ? 3 : l >= 192 ? 2 : 1;
  a[254] = a[254] = 1;
  function u() {
    s.call(this, 'utf-8 decode'),
    this.leftOver = null
  }
  function c() {
    s.call(this, 'utf-8 encode')
  }
  t.utf8encode = function (e) {
    return r.nodebuffer ? o.newBufferFrom(e, 'utf-8')  : function (e) {
      var t,
      n,
      i,
      o,
      s,
      a = e.length,
      l = 0;
      for (o = 0; o < a; o++) 55296 == (64512 & (n = e.charCodeAt(o))) && o + 1 < a && 56320 == (64512 & (i = e.charCodeAt(o + 1))) && (n = 65536 + (n - 55296 << 10) + (i - 56320), o++),
      l += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4;
      for (t = r.uint8array ? new Uint8Array(l)  : new Array(l), s = 0, o = 0; s < l; o++) 55296 == (64512 & (n = e.charCodeAt(o))) && o + 1 < a && 56320 == (64512 & (i = e.charCodeAt(o + 1))) && (n = 65536 + (n - 55296 << 10) + (i - 56320), o++),
      n < 128 ? t[s++] = n : n < 2048 ? (t[s++] = 192 | n >>> 6, t[s++] = 128 | 63 & n)  : n < 65536 ? (t[s++] = 224 | n >>> 12, t[s++] = 128 | n >>> 6 & 63, t[s++] = 128 | 63 & n)  : (t[s++] = 240 | n >>> 18, t[s++] = 128 | n >>> 12 & 63, t[s++] = 128 | n >>> 6 & 63, t[s++] = 128 | 63 & n);
      return t
    }(e)
  },
  t.utf8decode = function (e) {
    return r.nodebuffer ? i.transformTo('nodebuffer', e).toString('utf-8')  : function (e) {
      var t,
      n,
      r,
      o,
      s = e.length,
      l = new Array(2 * s);
      for (n = 0, t = 0; t < s; ) if ((r = e[t++]) < 128) l[n++] = r;
       else if ((o = a[r]) > 4) l[n++] = 65533,
      t += o - 1;
       else {
        for (r &= 2 === o ? 31 : 3 === o ? 15 : 7; o > 1 && t < s; ) r = r << 6 | 63 & e[t++],
        o--;
        o > 1 ? l[n++] = 65533 : r < 65536 ? l[n++] = r : (r -= 65536, l[n++] = 55296 | r >> 10 & 1023, l[n++] = 56320 | 1023 & r)
      }
      return l.length !== n && (l.subarray ? l = l.subarray(0, n)  : l.length = n),
      i.applyFromCharCode(l)
    }(e = i.transformTo(r.uint8array ? 'uint8array' : 'array', e))
  },
  i.inherits(u, s),
  u.prototype.processChunk = function (e) {
    var n = i.transformTo(r.uint8array ? 'uint8array' : 'array', e.data);
    if (this.leftOver && this.leftOver.length) {
      if (r.uint8array) {
        var o = n;
        (n = new Uint8Array(o.length + this.leftOver.length)).set(this.leftOver, 0),
        n.set(o, this.leftOver.length)
      } else n = this.leftOver.concat(n);
      this.leftOver = null
    }
    var s = function (e, t) {
      var n;
      for ((t = t || e.length) > e.length && (t = e.length), n = t - 1; n >= 0 && 128 == (192 & e[n]); ) n--;
      return n < 0 ? t : 0 === n ? t : n + a[e[n]] > t ? n : t
    }(n),
    l = n;
    s !== n.length && (r.uint8array ? (l = n.subarray(0, s), this.leftOver = n.subarray(s, n.length))  : (l = n.slice(0, s), this.leftOver = n.slice(s, n.length))),
    this.push({
      data: t.utf8decode(l),
      meta: e.meta
    })
  },
  u.prototype.flush = function () {
    this.leftOver && this.leftOver.length && (this.push({
      data: t.utf8decode(this.leftOver),
      meta: {
      }
    }), this.leftOver = null)
  },
  t.Utf8DecodeWorker = u,
  i.inherits(c, s),
  c.prototype.processChunk = function (e) {
    this.push({
      data: t.utf8encode(e.data),
      meta: e.meta
    })
  },
  t.Utf8EncodeWorker = c
},
function (e, t, n) {
  'use strict';
  e.exports = {
    H264_STREAM_TYPE: 27,
    ADTS_STREAM_TYPE: 15,
    METADATA_STREAM_TYPE: 21
  }
},
function (e, t, n) {
  'use strict';
  Object.defineProperty(t, '__esModule', {
    value: !0
  });
  var i = function (e, t) {
    return e.start(t) + '-' + e.end(t)
  },
  r = function (e, t) {
    var n = e.toString(16);
    return '00'.substring(0, 2 - n.length) + n + (t % 2 ? ' ' : '')
  },
  o = function (e) {
    return e >= 32 && e < 126 ? String.fromCharCode(e)  : '.'
  },
  s = {
    hexDump: function (e) {
      for (var t = Array.prototype.slice.call(e), n = '', i = 0; i < t.length / 16; i++) n += t.slice(16 * i, 16 * i + 16).map(r).join('') + ' ' + t.slice(16 * i, 16 * i + 16).map(o).join('') + '\n';
      return n
    },
    tagDump: function (e) {
      return s.hexDump(e.bytes)
    },
    textRanges: function (e) {
      var t = '',
      n = void 0;
      for (n = 0; n < e.length; n++) t += i(e, n) + ' ';
      return t
    },
    createTransferableMessage: function (e) {
      var t = {
      };
      return Object.keys(e).forEach(function (n) {
        var i = e[n];
        ArrayBuffer.isView(i) ? t[n] = {
          bytes: i.buffer,
          byteOffset: i.byteOffset,
          byteLength: i.byteLength
        }
         : t[n] = i
      }),
      t
    },
    initSegmentId: function (e) {
      var t = e.byterange || {
        length: 1 / 0,
        offset: 0
      };
      return [t.length,
      t.offset,
      e.resolvedUri].join(',')
    }
  };
  t.default = s,
  e.exports = t.default
},
function (e, t, n) {
  'use strict';
  var i = null;
  i = 'undefined' != typeof Promise ? Promise : n(210),
  e.exports = {
    Promise: i
  }
},
function (e, t, n) {
  (function (e) {
    function n(e) {
      return Object.prototype.toString.call(e)
    }
    t.isArray = function (e) {
      return Array.isArray ? Array.isArray(e)  : '[object Array]' === n(e)
    },
    t.isBoolean = function (e) {
      return 'boolean' == typeof e
    },
    t.isNull = function (e) {
      return null === e
    },
    t.isNullOrUndefined = function (e) {
      return null == e
    },
    t.isNumber = function (e) {
      return 'number' == typeof e
    },
    t.isString = function (e) {
      return 'string' == typeof e
    },
    t.isSymbol = function (e) {
      return 'symbol' == typeof e
    },
    t.isUndefined = function (e) {
      return void 0 === e
    },
    t.isRegExp = function (e) {
      return '[object RegExp]' === n(e)
    },
    t.isObject = function (e) {
      return 'object' == typeof e && null !== e
    },
    t.isDate = function (e) {
      return '[object Date]' === n(e)
    },
    t.isError = function (e) {
      return '[object Error]' === n(e) || e instanceof Error
    },
    t.isFunction = function (e) {
      return 'function' == typeof e
    },
    t.isPrimitive = function (e) {
      return null === e || 'boolean' == typeof e || 'number' == typeof e || 'string' == typeof e || 'symbol' == typeof e || void 0 === e
    },
    t.isBuffer = e.isBuffer
  }).call(this, n(12).Buffer)
},
function (e, t, n) {
  (function (t) {
    var i,
    r = void 0 !== t ? t : 'undefined' != typeof window ? window : {
    },
    o = n(257);
    'undefined' != typeof document ? i = document : (i = r['__GLOBAL_DOCUMENT_CACHE@4']) || (i = r['__GLOBAL_DOCUMENT_CACHE@4'] = o),
    e.exports = i
  }).call(this, n(7))
},
function (e, t, n) {
  'use strict';
  Object.defineProperty(t, '__esModule', {
    value: !0
  }),
  t.default = {
    GOAL_BUFFER_LENGTH: 30,
    MAX_GOAL_BUFFER_LENGTH: 60,
    GOAL_BUFFER_LENGTH_RATE: 1,
    BANDWIDTH_VARIANCE: 1.2,
    BUFFER_LOW_WATER_LINE: 0,
    MAX_BUFFER_LOW_WATER_LINE: 30,
    BUFFER_LOW_WATER_LINE_RATE: 1
  },
  e.exports = t.default
},
function (e, t, n) {
  'use strict';
  Object.defineProperty(t, '__esModule', {
    value: !0
  });
  t.default = {
    isAudioCodec: function (e) {
      return /mp4a\.\d+.\d+/i.test(e)
    },
    parseContentType: function (e) {
      var t = {
        type: '',
        parameters: {
        }
      },
      n = e.trim().split(';');
      return t.type = n.shift().trim(),
      n.forEach(function (e) {
        var n = e.trim().split('=');
        if (n.length > 1) {
          var i = n[0].replace(/"/g, '').trim(),
          r = n[1].replace(/"/g, '').trim();
          t.parameters[i] = r
        }
      }),
      t
    },
    isVideoCodec: function (e) {
      return /avc1\.[\da-f]+/i.test(e)
    },
    translateLegacyCodecs: function (e) {
      return e.map(function (e) {
        return e.replace(/avc1\.(\d+)\.(\d+)/i, function (e, t, n) {
          return 'avc1.' + ('00' + Number(t).toString(16)).slice( - 2) + '00' + ('00' + Number(n).toString(16)).slice( - 2)
        })
      })
    }
  },
  e.exports = t.default
},
function (e, t, n) {
  'use strict';
  Object.defineProperty(t, '__esModule', {
    value: !0
  });
  t.default = function (e, t, n) {
    var i = void 0,
    r = void 0;
    if (n && n.cues) for (i = n.cues.length; i--; ) (r = n.cues[i]).startTime <= t && r.endTime >= e && n.removeCue(r)
  },
  e.exports = t.default
},
function (e, t, n) {
  var i,
  r,
  o,
  s,
  a,
  l;
  e.exports = (i = n(1), o = (r = i).lib, s = o.Base, a = o.WordArray, (l = r.x64 = {
  }).Word = s.extend({
    init: function (e, t) {
      this.high = e,
      this.low = t
    }
  }), l.WordArray = s.extend({
    init: function (e, t) {
      e = this.words = e || [
      ],
      this.sigBytes = void 0 != t ? t : 8 * e.length
    },
    toX32: function () {
      for (var e = this.words, t = e.length, n = [
      ], i = 0; i < t; i++) {
        var r = e[i];
        n.push(r.high),
        n.push(r.low)
      }
      return a.create(n, this.sigBytes)
    },
    clone: function () {
      for (var e = s.clone.call(this), t = e.words = this.words.slice(0), n = t.length, i = 0; i < n; i++) t[i] = t[i].clone();
      return e
    }
  }), i)
},
function (e, t) {
  var n = e.exports = 'undefined' != typeof window && window.Math == Math ? window : 'undefined' != typeof self && self.Math == Math ? self : Function('return this') ();
  'number' == typeof __g && (__g = n)
},
function (e, t, n) {
  'use strict';
  (function (t) {
    e.exports = {
      isNode: void 0 !== t,
      newBufferFrom: function (e, n) {
        return new t(e, n)
      },
      allocBuffer: function (e) {
        return t.alloc ? t.alloc(e)  : new t(e)
      },
      isBuffer: function (e) {
        return t.isBuffer(e)
      },
      isStream: function (e) {
        return e && 'function' == typeof e.on && 'function' == typeof e.pause && 'function' == typeof e.resume
      }
    }
  }).call(this, n(12).Buffer)
},
function (e, t, n) {
  var i = n(12),
  r = i.Buffer;
  function o(e, t) {
    for (var n in e) t[n] = e[n]
  }
  function s(e, t, n) {
    return r(e, t, n)
  }
  r.from && r.alloc && r.allocUnsafe && r.allocUnsafeSlow ? e.exports = i : (o(i, t), t.Buffer = s),
  o(r, s),
  s.from = function (e, t, n) {
    if ('number' == typeof e) throw new TypeError('Argument must not be a number');
    return r(e, t, n)
  },
  s.alloc = function (e, t, n) {
    if ('number' != typeof e) throw new TypeError('Argument must be a number');
    var i = r(e);
    return void 0 !== t ? 'string' == typeof n ? i.fill(t, n)  : i.fill(t)  : i.fill(0),
    i
  },
  s.allocUnsafe = function (e) {
    if ('number' != typeof e) throw new TypeError('Argument must be a number');
    return r(e)
  },
  s.allocUnsafeSlow = function (e) {
    if ('number' != typeof e) throw new TypeError('Argument must be a number');
    return i.SlowBuffer(e)
  }
},
function (e, t, n) {
  'use strict';
  (function (t) {
    !t.version || 0 === t.version.indexOf('v0.') || 0 === t.version.indexOf('v1.') && 0 !== t.version.indexOf('v1.8.') ? e.exports = {
      nextTick: function (e, n, i, r) {
        if ('function' != typeof e) throw new TypeError('"callback" argument must be a function');
        var o,
        s,
        a = arguments.length;
        switch (a) {
          case 0:
          case 1:
            return t.nextTick(e);
          case 2:
            return t.nextTick(function () {
              e.call(null, n)
            });
          case 3:
            return t.nextTick(function () {
              e.call(null, n, i)
            });
          case 4:
            return t.nextTick(function () {
              e.call(null, n, i, r)
            });
          default:
            for (o = new Array(a - 1), s = 0; s < o.length; ) o[s++] = arguments[s];
            return t.nextTick(function () {
              e.apply(null, o)
            })
        }
      }
    }
    : e.exports = t
  }).call(this, n(31))
}, function (e, t) {
  var n,
  i,
  r = e.exports = {
  };
  function o() {
    throw new Error('setTimeout has not been defined')
  }
  function s() {
    throw new Error('clearTimeout has not been defined')
  }
  function a(e) {
    if (n === setTimeout) return setTimeout(e, 0);
    if ((n === o || !n) && setTimeout) return n = setTimeout,
    setTimeout(e, 0);
    try {
      return n(e, 0)
    } catch (t) {
      try {
        return n.call(null, e, 0)
      } catch (t) {
        return n.call(this, e, 0)
      }
    }
  }
  !function () {
    try {
      n = 'function' == typeof setTimeout ? setTimeout : o
    } catch (e) {
      n = o
    }
    try {
      i = 'function' == typeof clearTimeout ? clearTimeout : s
    } catch (e) {
      i = s
    }
  }();
  var l,
  u = [
  ],
  c = !1,
  h = - 1;
  function d() {
    c && l && (c = !1, l.length ? u = l.concat(u)  : h = - 1, u.length && f())
  }
  function f() {
    if (!c) {
      var e = a(d);
      c = !0;
      for (var t = u.length; t; ) {
        for (l = u, u = [
        ]; ++h < t; ) l && l[h].run();
        h = - 1,
        t = u.length
      }
      l = null,
      c = !1,
      function (e) {
        if (i === clearTimeout) return clearTimeout(e);
        if ((i === s || !i) && clearTimeout) return i = clearTimeout,
        clearTimeout(e);
        try {
          i(e)
        } catch (t) {
          try {
            return i.call(null, e)
          } catch (t) {
            return i.call(this, e)
          }
        }
      }(e)
    }
  }
  function p(e, t) {
    this.fun = e,
    this.array = t
  }
  function v() {
  }
  r.nextTick = function (e) {
    var t = new Array(arguments.length - 1);
    if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    u.push(new p(e, t)),
    1 !== u.length || c || a(f)
  },
  p.prototype.run = function () {
    this.fun.apply(null, this.array)
  },
  r.title = 'browser',
  r.browser = !0,
  r.env = {
  },
  r.argv = [
  ],
  r.version = '',
  r.versions = {
  },
  r.on = v,
  r.addListener = v,
  r.once = v,
  r.off = v,
  r.removeListener = v,
  r.removeAllListeners = v,
  r.emit = v,
  r.prependListener = v,
  r.prependOnceListener = v,
  r.listeners = function (e) {
    return []
  },
  r.binding = function (e) {
    throw new Error('process.binding is not supported')
  },
  r.cwd = function () {
    return '/'
  },
  r.chdir = function (e) {
    throw new Error('process.chdir is not supported')
  },
  r.umask = function () {
    return 0
  }
}, function (e, t, n) {
  'use strict';
  Object.defineProperty(t, '__esModule', {
    value: !0
  });
  var i = function () {
    return function (e, t) {
      if (Array.isArray(e)) return e;
      if (Symbol.iterator in Object(e)) return function (e, t) {
        var n = [
        ],
        i = !0,
        r = !1,
        o = void 0;
        try {
          for (var s, a = e[Symbol.iterator](); !(i = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); i = !0);
        } catch (e) {
          r = !0,
          o = e
        } finally {
          try {
            !i && a.return && a.return ()
          } finally {
            if (r) throw o
          }
        }
        return n
      }(e, t);
      throw new TypeError('Invalid attempt to destructure non-iterable instance')
    }
  }();
  var r,
  o = n(0),
  s = (r = o) && r.__esModule ? r : {
  default:
    r
  },
  a = function (e, t) {
    var n = [
    ],
    i = void 0;
    if (e && e.length) for (i = 0; i < e.length; i++) t(e.start(i), e.end(i)) && n.push([e.start(i),
    e.end(i)]);
    return s.default.createTimeRanges(n)
  },
  l = function (e, t) {
    var n = null,
    i = null,
    r = 0,
    o = [
    ],
    a = [
    ];
    if (!(e && e.length && t && t.length)) return s.default.createTimeRange();
    for (var l = e.length; l--; ) o.push({
      time: e.start(l),
      type: 'start'
    }),
    o.push({
      time: e.end(l),
      type: 'end'
    });
    for (l = t.length; l--; ) o.push({
      time: t.start(l),
      type: 'start'
    }),
    o.push({
      time: t.end(l),
      type: 'end'
    });
    for (o.sort(function (e, t) {
      return e.time - t.time
    }), l = 0; l < o.length; l++) 'start' === o[l].type ? 2 === ++r && (n = o[l].time)  : 'end' === o[l].type && 1 === --r && (i = o[l].time),
    null !== n && null !== i && (a.push([n,
    i]), n = null, i = null);
    return s.default.createTimeRanges(a)
  };
  t.default = {
    findRange: function (e, t) {
      return a(e, function (e, n) {
        return e - 1 / 30 <= t && n + 1 / 30 >= t
      })
    },
    findNextRange: function (e, t) {
      return a(e, function (e) {
        return e - 1 / 30 >= t
      })
    },
    findGaps: function (e) {
      if (e.length < 2) return s.default.createTimeRanges();
      for (var t = [
      ], n = 1; n < e.length; n++) {
        var i = e.end(n - 1),
        r = e.start(n);
        t.push([i,
        r])
      }
      return s.default.createTimeRanges(t)
    },
    findSoleUncommonTimeRangesEnd:
    function (e, t) {
      var n = void 0,
      i = void 0,
      r = void 0,
      o = [
      ],
      s = [
      ],
      a = function (e) {
        return e[0] <= r && e[1] >= r
      };
      if (e) for (n = 0; n < e.length; n++) i = e.start(n),
      r = e.end(n),
      s.push([i,
      r]);
      if (t) for (n = 0; n < t.length; n++) i = t.start(n),
      r = t.end(n),
      s.some(a) || o.push(r);
      return 1 !== o.length ? null : o[0]
    },
    getSegmentBufferedPercent: function (e, t, n, r) {
      var o,
      a,
      u,
      c,
      h,
      d = e + t,
      f = s.default.createTimeRanges([[e,
      d]]),
      p = s.default.createTimeRanges([[(o = e, a = [
        n,
        d
      ], u = i(a, 2), c = u[0], h = u[1], Math.min(Math.max(c, o), h)),
      d]]);
      if (p.start(0) === p.end(0)) return 0;
      var v = function (e, t, n, i) {
        for (var r = t.end(0) - t.start(0), o = r - (e.end(0) - e.start(0)), s = l(e, i), a = l(t, i), u = 0, c = 0, h = s.length; h--; ) u += s.end(h) - s.start(h),
        s.start(h) === n && (u += o);
        for (h = a.length; h--; ) c += a.end(h) - a.start(h);
        return Math.max(u, c) / r * 100
      }(p, f, n, r);
      return isNaN(v) || v === 1 / 0 || v === - 1 / 0 ? 0 : v
    },
    TIME_FUDGE_FACTOR:
    1 / 30,
    SAFE_TIME_DELTA: 0.1,
    printableRange: function (e) {
      var t = [
      ];
      if (!e || !e.length) return '';
      for (var n = 0; n < e.length; n++) t.push(e.start(n) + ' => ' + e.end(n));
      return t.join(', ')
    },
    timeUntilRebuffer: function (e, t) {
      var n = arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2];
      return ((e.length ? e.end(e.length - 1)  : 0) - t) / n
    }
  },
  e.exports = t.default
},
function (e, t, n) {
  'use strict';
  var i,
  r,
  o,
  s,
  a,
  l,
  u,
  c,
  h,
  d,
  f = n(6),
  p = n(55),
  v = n(63),
  g = n(61),
  m = n(60).H264Stream,
  A = n(137),
  y = n(136),
  b = n(135),
  _ = [
    'audioobjecttype',
    'channelcount',
    'samplerate',
    'samplingfrequencyindex',
    'samplesize'
  ],
  w = [
    'width',
    'height',
    'profileIdc',
    'levelIdc',
    'profileCompatibility'
  ];
  a = function (e) {
    return e[0] === 'I'.charCodeAt(0) && e[1] === 'D'.charCodeAt(0) && e[2] === '3'.charCodeAt(0)
  },
  h = function (e, t) {
    var n;
    if (e.length !== t.length) return !1;
    for (n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
    return !0
  },
  d = function (e) {
    var t,
    n = 0;
    for (t = 0; t < e.length; t++) n += e[t].data.byteLength;
    return n
  },
  (r = function (e) {
    var t = [
    ],
    n = 0,
    i = 0,
    o = 0,
    s = 1 / 0;
    r.prototype.init.call(this),
    this.push = function (n) {
      l(e, n),
      e && _.forEach(function (t) {
        e[t] = n[t]
      }),
      t.push(n)
    },
    this.setEarliestDts = function (t) {
      i = t - e.timelineStartInfo.baseMediaDecodeTime
    },
    this.setVideoBaseMediaDecodeTime = function (e) {
      s = e
    },
    this.setAudioAppendStart = function (e) {
      o = e
    },
    this.flush = function () {
      var i,
      r,
      o,
      s;
      0 !== t.length ? (i = this.trimAdtsFramesByEarliestDts_(t), e.baseMediaDecodeTime = c(e), this.prefixWithSilence_(e, i), e.samples = this.generateSampleTable_(i), o = p.mdat(this.concatenateFrameData_(i)), t = [
      ], r = p.moof(n, [
        e
      ]), s = new Uint8Array(r.byteLength + o.byteLength), n++, s.set(r), s.set(o, r.byteLength), u(e), this.trigger('data', {
        track: e,
        boxes: s
      }), this.trigger('done', 'AudioSegmentStream'))  : this.trigger('done', 'AudioSegmentStream')
    },
    this.prefixWithSilence_ = function (e, t) {
      var n,
      i,
      r,
      a,
      l = 0,
      u = 0,
      c = 0;
      if (t.length && (n = b.audioTsToVideoTs(e.baseMediaDecodeTime, e.samplerate), i = Math.ceil(90000 / (e.samplerate / 1024)), o && s && (l = n - Math.max(o, s), c = (u = Math.floor(l / i)) * i), !(u < 1 || c > 45000))) {
        for ((r = y[e.samplerate]) || (r = t[0].data), a = 0; a < u; a++) t.splice(a, 0, {
          data: r
        });
        e.baseMediaDecodeTime -= Math.floor(b.videoTsToAudioTs(c, e.samplerate))
      }
    },
    this.trimAdtsFramesByEarliestDts_ = function (t) {
      return e.minSegmentDts >= i ? t : (e.minSegmentDts = 1 / 0, t.filter(function (t) {
        return t.dts >= i && (e.minSegmentDts = Math.min(e.minSegmentDts, t.dts), e.minSegmentPts = e.minSegmentDts, !0)
      }))
    },
    this.generateSampleTable_ = function (e) {
      var t,
      n,
      i = [
      ];
      for (t = 0; t < e.length; t++) n = e[t],
      i.push({
        size: n.data.byteLength,
        duration: 1024
      });
      return i
    },
    this.concatenateFrameData_ = function (e) {
      var t,
      n,
      i = 0,
      r = new Uint8Array(d(e));
      for (t = 0; t < e.length; t++) n = e[t],
      r.set(n.data, i),
      i += n.data.byteLength;
      return r
    }
  }).prototype = new f,
  (i = function (e, t) {
    var n,
    r,
    o = 0,
    s = [
    ],
    a = [
    ];
    t = t || {
    },
    i.prototype.init.call(this),
    delete e.minPTS,
    this.gopCache_ = [
    ],
    this.push = function (t) {
      l(e, t),
      'seq_parameter_set_rbsp' !== t.nalUnitType || n || (n = t.config, e.sps = [
        t.data
      ], w.forEach(function (t) {
        e[t] = n[t]
      }, this)),
      'pic_parameter_set_rbsp' !== t.nalUnitType || r || (r = t.data, e.pps = [
        t.data
      ]),
      s.push(t)
    },
    this.flush = function () {
      for (var n, i, r, h, d, f; s.length && 'access_unit_delimiter_rbsp' !== s[0].nalUnitType; ) s.shift();
      if (0 === s.length) return this.resetStream_(),
      void this.trigger('done', 'VideoSegmentStream');
      if (n = this.groupNalsIntoFrames_(s), (r = this.groupFramesIntoGops_(n)) [0][0].keyFrame || ((i = this.getGopForFusion_(s[0], e)) ? (r.unshift(i), r.byteLength += i.byteLength, r.nalCount += i.nalCount, r.pts = i.pts, r.dts = i.dts, r.duration += i.duration)  : r = this.extendFirstKeyFrame_(r)), a.length) {
        var v;
        if (!(v = t.alignGopsAtEnd ? this.alignGopsAtEnd_(r)  : this.alignGopsAtStart_(r))) return this.gopCache_.unshift({
          gop: r.pop(),
          pps: e.pps,
          sps: e.sps
        }),
        this.gopCache_.length = Math.min(6, this.gopCache_.length),
        s = [
        ],
        this.resetStream_(),
        void this.trigger('done', 'VideoSegmentStream');
        u(e),
        r = v
      }
      l(e, r),
      e.samples = this.generateSampleTable_(r),
      d = p.mdat(this.concatenateNalData_(r)),
      e.baseMediaDecodeTime = c(e),
      this.trigger('processedGopsInfo', r.map(function (e) {
        return {
          pts: e.pts,
          dts: e.dts,
          byteLength: e.byteLength
        }
      })),
      this.gopCache_.unshift({
        gop: r.pop(),
        pps: e.pps,
        sps: e.sps
      }),
      this.gopCache_.length = Math.min(6, this.gopCache_.length),
      s = [
      ],
      this.trigger('baseMediaDecodeTime', e.baseMediaDecodeTime),
      this.trigger('timelineStartInfo', e.timelineStartInfo),
      h = p.moof(o, [
        e
      ]),
      f = new Uint8Array(h.byteLength + d.byteLength),
      o++,
      f.set(h),
      f.set(d, h.byteLength),
      this.trigger('data', {
        track: e,
        boxes: f
      }),
      this.resetStream_(),
      this.trigger('done', 'VideoSegmentStream')
    },
    this.resetStream_ = function () {
      u(e),
      n = void 0,
      r = void 0
    },
    this.getGopForFusion_ = function (t) {
      var n,
      i,
      r,
      o,
      s,
      a = 1 / 0;
      for (s = 0; s < this.gopCache_.length; s++) r = (o = this.gopCache_[s]).gop,
      e.pps && h(e.pps[0], o.pps[0]) && e.sps && h(e.sps[0], o.sps[0]) && (r.dts < e.timelineStartInfo.dts || (n = t.dts - r.dts - r.duration) >= - 10000 && n <= 45000 && (!i || a > n) && (i = o, a = n));
      return i ? i.gop : null
    },
    this.extendFirstKeyFrame_ = function (e) {
      var t;
      return !e[0][0].keyFrame && e.length > 1 && (t = e.shift(), e.byteLength -= t.byteLength, e.nalCount -= t.nalCount, e[0][0].dts = t.dts, e[0][0].pts = t.pts, e[0][0].duration += t.duration),
      e
    },
    this.groupNalsIntoFrames_ = function (e) {
      var t,
      n,
      i = [
      ],
      r = [
      ];
      for (i.byteLength = 0, t = 0; t < e.length; t++) 'access_unit_delimiter_rbsp' === (n = e[t]).nalUnitType ? (i.length && (i.duration = n.dts - i.dts, r.push(i)), (i = [
        n
      ]).byteLength = n.data.byteLength, i.pts = n.pts, i.dts = n.dts)  : ('slice_layer_without_partitioning_rbsp_idr' === n.nalUnitType && (i.keyFrame = !0), i.duration = n.dts - i.dts, i.byteLength += n.data.byteLength, i.push(n));
      return r.length && (!i.duration || i.duration <= 0) && (i.duration = r[r.length - 1].duration),
      r.push(i),
      r
    },
    this.groupFramesIntoGops_ = function (e) {
      var t,
      n,
      i = [
      ],
      r = [
      ];
      for (i.byteLength = 0, i.nalCount = 0, i.duration = 0, i.pts = e[0].pts, i.dts = e[0].dts, r.byteLength = 0, r.nalCount = 0, r.duration = 0, r.pts = e[0].pts, r.dts = e[0].dts, t = 0; t < e.length; t++) (n = e[t]).keyFrame ? (i.length && (r.push(i), r.byteLength += i.byteLength, r.nalCount += i.nalCount, r.duration += i.duration), (i = [
        n
      ]).nalCount = n.length, i.byteLength = n.byteLength, i.pts = n.pts, i.dts = n.dts, i.duration = n.duration)  : (i.duration += n.duration, i.nalCount += n.length, i.byteLength += n.byteLength, i.push(n));
      return r.length && i.duration <= 0 && (i.duration = r[r.length - 1].duration),
      r.byteLength += i.byteLength,
      r.nalCount += i.nalCount,
      r.duration += i.duration,
      r.push(i),
      r
    },
    this.generateSampleTable_ = function (e, t) {
      var n,
      i,
      r,
      o,
      s,
      a = t || 0,
      l = [
      ];
      for (n = 0; n < e.length; n++) for (o = e[n], i = 0; i < o.length; i++) s = o[i],
      (r = {
        size: 0,
        flags: {
          isLeading: 0,
          dependsOn: 1,
          isDependedOn: 0,
          hasRedundancy: 0,
          degradationPriority: 0
        }
      }).dataOffset = a,
      r.compositionTimeOffset = s.pts - s.dts,
      r.duration = s.duration,
      r.size = 4 * s.length,
      r.size += s.byteLength,
      s.keyFrame && (r.flags.dependsOn = 2),
      a += r.size,
      l.push(r);
      return l
    },
    this.concatenateNalData_ = function (e) {
      var t,
      n,
      i,
      r,
      o,
      s,
      a = 0,
      l = e.byteLength,
      u = e.nalCount,
      c = new Uint8Array(l + 4 * u),
      h = new DataView(c.buffer);
      for (t = 0; t < e.length; t++) for (r = e[t], n = 0; n < r.length; n++) for (o = r[n], i = 0; i < o.length; i++) s = o[i],
      h.setUint32(a, s.data.byteLength),
      a += 4,
      c.set(s.data, a),
      a += s.data.byteLength;
      return c
    },
    this.alignGopsAtStart_ = function (e) {
      var t,
      n,
      i,
      r,
      o,
      s,
      l,
      u;
      for (o = e.byteLength, s = e.nalCount, l = e.duration, t = n = 0; t < a.length && n < e.length && (i = a[t], r = e[n], i.pts !== r.pts); ) r.pts > i.pts ? t++ : (n++, o -= r.byteLength, s -= r.nalCount, l -= r.duration);
      return 0 === n ? e : n === e.length ? null : ((u = e.slice(n)).byteLength = o, u.duration = l, u.nalCount = s, u.pts = u[0].pts, u.dts = u[0].dts, u)
    },
    this.alignGopsAtEnd_ = function (e) {
      var t,
      n,
      i,
      r,
      o,
      s,
      l;
      for (t = a.length - 1, n = e.length - 1, o = null, s = !1; t >= 0 && n >= 0; ) {
        if (i = a[t], r = e[n], i.pts === r.pts) {
          s = !0;
          break
        }
        i.pts > r.pts ? t-- : (t === a.length - 1 && (o = n), n--)
      }
      if (!s && null === o) return null;
      if (0 === (l = s ? n : o)) return e;
      var u = e.slice(l),
      c = u.reduce(function (e, t) {
        return e.byteLength += t.byteLength,
        e.duration += t.duration,
        e.nalCount += t.nalCount,
        e
      }, {
        byteLength: 0,
        duration: 0,
        nalCount: 0
      });
      return u.byteLength = c.byteLength,
      u.duration = c.duration,
      u.nalCount = c.nalCount,
      u.pts = u[0].pts,
      u.dts = u[0].dts,
      u
    },
    this.alignGopsWith = function (e) {
      a = e
    }
  }).prototype = new f,
  l = function (e, t) {
    'number' == typeof t.pts && (void 0 === e.timelineStartInfo.pts && (e.timelineStartInfo.pts = t.pts), void 0 === e.minSegmentPts ? e.minSegmentPts = t.pts : e.minSegmentPts = Math.min(e.minSegmentPts, t.pts), void 0 === e.maxSegmentPts ? e.maxSegmentPts = t.pts : e.maxSegmentPts = Math.max(e.maxSegmentPts, t.pts)),
    'number' == typeof t.dts && (void 0 === e.timelineStartInfo.dts && (e.timelineStartInfo.dts = t.dts), void 0 === e.minSegmentDts ? e.minSegmentDts = t.dts : e.minSegmentDts = Math.min(e.minSegmentDts, t.dts), void 0 === e.maxSegmentDts ? e.maxSegmentDts = t.dts : e.maxSegmentDts = Math.max(e.maxSegmentDts, t.dts))
  },
  u = function (e) {
    delete e.minSegmentDts,
    delete e.maxSegmentDts,
    delete e.minSegmentPts,
    delete e.maxSegmentPts
  },
  c = function (e) {
    var t,
    n = e.minSegmentDts - e.timelineStartInfo.dts;
    return t = e.timelineStartInfo.baseMediaDecodeTime,
    t += n,
    t = Math.max(0, t),
    'audio' === e.type && (t *= e.samplerate / 90000, t = Math.floor(t)),
    t
  },
  (s = function (e, t) {
    this.numberOfTracks = 0,
    this.metadataStream = t,
    void 0 !== e.remux ? this.remuxTracks = !!e.remux : this.remuxTracks = !0,
    this.pendingTracks = [
    ],
    this.videoTrack = null,
    this.pendingBoxes = [
    ],
    this.pendingCaptions = [
    ],
    this.pendingMetadata = [
    ],
    this.pendingBytes = 0,
    this.emittedTracks = 0,
    s.prototype.init.call(this),
    this.push = function (e) {
      return e.text ? this.pendingCaptions.push(e)  : e.frames ? this.pendingMetadata.push(e)  : (this.pendingTracks.push(e.track), this.pendingBoxes.push(e.boxes), this.pendingBytes += e.boxes.byteLength, 'video' === e.track.type && (this.videoTrack = e.track), void ('audio' === e.track.type && (this.audioTrack = e.track)))
    }
  }).prototype = new f,
  s.prototype.flush = function (e) {
    var t,
    n,
    i,
    r,
    o = 0,
    s = {
      captions: [
      ],
      captionStreams: {
      },
      metadata: [
      ],
      info: {
      }
    },
    a = 0;
    if (this.pendingTracks.length < this.numberOfTracks) {
      if ('VideoSegmentStream' !== e && 'AudioSegmentStream' !== e) return;
      if (this.remuxTracks) return;
      if (0 === this.pendingTracks.length) return this.emittedTracks++,
      void (this.emittedTracks >= this.numberOfTracks && (this.trigger('done'), this.emittedTracks = 0))
    }
    for (this.videoTrack ? (a = this.videoTrack.timelineStartInfo.pts, w.forEach(function (e) {
      s.info[e] = this.videoTrack[e]
    }, this))  : this.audioTrack && (a = this.audioTrack.timelineStartInfo.pts, _.forEach(function (e) {
      s.info[e] = this.audioTrack[e]
    }, this)), 1 === this.pendingTracks.length ? s.type = this.pendingTracks[0].type : s.type = 'combined', this.emittedTracks += this.pendingTracks.length, i = p.initSegment(this.pendingTracks), s.initSegment = new Uint8Array(i.byteLength), s.initSegment.set(i), s.data = new Uint8Array(this.pendingBytes), r = 0; r < this.pendingBoxes.length; r++) s.data.set(this.pendingBoxes[r], o),
    o += this.pendingBoxes[r].byteLength;
    for (r = 0; r < this.pendingCaptions.length; r++) (t = this.pendingCaptions[r]).startTime = t.startPts - a,
    t.startTime /= 90000,
    t.endTime = t.endPts - a,
    t.endTime /= 90000,
    s.captionStreams[t.stream] = !0,
    s.captions.push(t);
    for (r = 0; r < this.pendingMetadata.length; r++) (n = this.pendingMetadata[r]).cueTime = n.pts - a,
    n.cueTime /= 90000,
    s.metadata.push(n);
    s.metadata.dispatchType = this.metadataStream.dispatchType,
    this.pendingTracks.length = 0,
    this.videoTrack = null,
    this.pendingBoxes.length = 0,
    this.pendingCaptions.length = 0,
    this.pendingBytes = 0,
    this.pendingMetadata.length = 0,
    this.trigger('data', s),
    this.emittedTracks >= this.numberOfTracks && (this.trigger('done'), this.emittedTracks = 0)
  },
  (o = function (e) {
    var t,
    n,
    l = this,
    c = !0;
    o.prototype.init.call(this),
    e = e || {
    },
    this.baseMediaDecodeTime = e.baseMediaDecodeTime || 0,
    this.transmuxPipeline_ = {
    },
    this.setupAacPipeline = function () {
      var t = {
      };
      this.transmuxPipeline_ = t,
      t.type = 'aac',
      t.metadataStream = new v.MetadataStream,
      t.aacStream = new A,
      t.audioTimestampRolloverStream = new v.TimestampRolloverStream('audio'),
      t.timedMetadataTimestampRolloverStream = new v.TimestampRolloverStream('timed-metadata'),
      t.adtsStream = new g,
      t.coalesceStream = new s(e, t.metadataStream),
      t.headOfPipeline = t.aacStream,
      t.aacStream.pipe(t.audioTimestampRolloverStream).pipe(t.adtsStream),
      t.aacStream.pipe(t.timedMetadataTimestampRolloverStream).pipe(t.metadataStream).pipe(t.coalesceStream),
      t.metadataStream.on('timestamp', function (e) {
        t.aacStream.setTimestamp(e.timeStamp)
      }),
      t.aacStream.on('data', function (e) {
        'timed-metadata' !== e.type || t.audioSegmentStream || (n = n || {
          timelineStartInfo: {
            baseMediaDecodeTime: l.baseMediaDecodeTime
          },
          codec: 'adts',
          type: 'audio'
        }, t.coalesceStream.numberOfTracks++, t.audioSegmentStream = new r(n), t.adtsStream.pipe(t.audioSegmentStream).pipe(t.coalesceStream))
      }),
      t.coalesceStream.on('data', this.trigger.bind(this, 'data')),
      t.coalesceStream.on('done', this.trigger.bind(this, 'done'))
    },
    this.setupTsPipeline = function () {
      var o = {
      };
      this.transmuxPipeline_ = o,
      o.type = 'ts',
      o.metadataStream = new v.MetadataStream,
      o.packetStream = new v.TransportPacketStream,
      o.parseStream = new v.TransportParseStream,
      o.elementaryStream = new v.ElementaryStream,
      o.videoTimestampRolloverStream = new v.TimestampRolloverStream('video'),
      o.audioTimestampRolloverStream = new v.TimestampRolloverStream('audio'),
      o.timedMetadataTimestampRolloverStream = new v.TimestampRolloverStream('timed-metadata'),
      o.adtsStream = new g,
      o.h264Stream = new m,
      o.captionStream = new v.CaptionStream,
      o.coalesceStream = new s(e, o.metadataStream),
      o.headOfPipeline = o.packetStream,
      o.packetStream.pipe(o.parseStream).pipe(o.elementaryStream),
      o.elementaryStream.pipe(o.videoTimestampRolloverStream).pipe(o.h264Stream),
      o.elementaryStream.pipe(o.audioTimestampRolloverStream).pipe(o.adtsStream),
      o.elementaryStream.pipe(o.timedMetadataTimestampRolloverStream).pipe(o.metadataStream).pipe(o.coalesceStream),
      o.h264Stream.pipe(o.captionStream).pipe(o.coalesceStream),
      o.elementaryStream.on('data', function (s) {
        var a;
        if ('metadata' === s.type) {
          for (a = s.tracks.length; a--; ) t || 'video' !== s.tracks[a].type ? n || 'audio' !== s.tracks[a].type || ((n = s.tracks[a]).timelineStartInfo.baseMediaDecodeTime = l.baseMediaDecodeTime)  : (t = s.tracks[a]).timelineStartInfo.baseMediaDecodeTime = l.baseMediaDecodeTime;
          t && !o.videoSegmentStream && (o.coalesceStream.numberOfTracks++, o.videoSegmentStream = new i(t, e), o.videoSegmentStream.on('timelineStartInfo', function (e) {
            n && (n.timelineStartInfo = e, o.audioSegmentStream.setEarliestDts(e.dts))
          }), o.videoSegmentStream.on('processedGopsInfo', l.trigger.bind(l, 'gopInfo')), o.videoSegmentStream.on('baseMediaDecodeTime', function (e) {
            n && o.audioSegmentStream.setVideoBaseMediaDecodeTime(e)
          }), o.h264Stream.pipe(o.videoSegmentStream).pipe(o.coalesceStream)),
          n && !o.audioSegmentStream && (o.coalesceStream.numberOfTracks++, o.audioSegmentStream = new r(n), o.adtsStream.pipe(o.audioSegmentStream).pipe(o.coalesceStream))
        }
      }),
      o.coalesceStream.on('data', this.trigger.bind(this, 'data')),
      o.coalesceStream.on('done', this.trigger.bind(this, 'done'))
    },
    this.setBaseMediaDecodeTime = function (e) {
      var i = this.transmuxPipeline_;
      this.baseMediaDecodeTime = e,
      n && (n.timelineStartInfo.dts = void 0, n.timelineStartInfo.pts = void 0, u(n), n.timelineStartInfo.baseMediaDecodeTime = e, i.audioTimestampRolloverStream && i.audioTimestampRolloverStream.discontinuity()),
      t && (i.videoSegmentStream && (i.videoSegmentStream.gopCache_ = [
      ], i.videoTimestampRolloverStream.discontinuity()), t.timelineStartInfo.dts = void 0, t.timelineStartInfo.pts = void 0, u(t), i.captionStream.reset(), t.timelineStartInfo.baseMediaDecodeTime = e),
      i.timedMetadataTimestampRolloverStream && i.timedMetadataTimestampRolloverStream.discontinuity()
    },
    this.setAudioAppendStart = function (e) {
      n && this.transmuxPipeline_.audioSegmentStream.setAudioAppendStart(e)
    },
    this.alignGopsWith = function (e) {
      t && this.transmuxPipeline_.videoSegmentStream && this.transmuxPipeline_.videoSegmentStream.alignGopsWith(e)
    },
    this.push = function (e) {
      if (c) {
        var t = a(e);
        t && 'aac' !== this.transmuxPipeline_.type ? this.setupAacPipeline()  : t || 'ts' === this.transmuxPipeline_.type || this.setupTsPipeline(),
        c = !1
      }
      this.transmuxPipeline_.headOfPipeline.push(e)
    },
    this.flush = function () {
      c = !0,
      this.transmuxPipeline_.headOfPipeline.flush()
    },
    this.resetCaptions = function () {
      this.transmuxPipeline_.captionStream && this.transmuxPipeline_.captionStream.reset()
    }
  }).prototype = new f,
  e.exports = {
    Transmuxer: o,
    VideoSegmentStream: i,
    AudioSegmentStream: r,
    AUDIO_PROPERTIES: _,
    VIDEO_PROPERTIES: w
  }
},
function (e, t, n) {
  var i = arguments[3],
  r = arguments[4],
  o = arguments[5],
  s = JSON.stringify,
  a = !1;
  void 0 === i && (a = !0, i = function (e) {
    var t = {
    };
    function n(i) {
      if (t[i]) return t[i].exports;
      var r = t[i] = {
        i: i,
        l: !1,
        exports: {
        }
      };
      return e[i].call(r.exports, r, r.exports, n),
      r.l = !0,
      r.exports
    }
    return n.m = e,
    n.c = t,
    n.d = function (e, t, i) {
      n.o(e, t) || Object.defineProperty(e, t, {
        configurable: !1,
        enumerable: !0,
        get: i
      })
    },
    n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default
      }
      : function () {
        return e
      };
      return n.d(t, 'a', t),
      t
    },
    n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    },
    n.p = '',
    n(n.s = entryModule)
  },
  r = n.m);
  e.exports = function (e, t) {
    var l;
    l = a ? function (e, t) {
      var o,
      a = 'string' == typeof t;
      o = a ? {
      }
       : [
      ],
      Object.keys(r).forEach(function (e) {
        r[e] && (o[e] = r[e].toString())
      });
      var l,
      u = n(t);
      if (!u || u !== e && u.default !== e) {
        var c = o[t];
        o[t] = c.substring(0, c.length - 1) + '\n' + e.name + '();\n}'
      }
      a ? (t = s(t), l = '{' + Object.keys(o).map(function (e) {
        return s(e) + ':' + o[e]
      }).join(',') + '}')  : l = '[' + o.join(',') + ']'; return 'var fn = (' + i.toString().replace('entryModule', t) + ')(' + l + ');\n(typeof fn === "function") && fn(self);'
    }(e, t) : function (e) {
      for (var t, n = Object.keys(o), a = 0; a < n.length; a++) {
        var l = n[a],
        u = o[l].exports;
        if (u === e || u && u.default === e) {
          t = l;
          break
        }
      }
      if (!t) {
        t = Math.floor(Math.pow(16, 8) * Math.random()).toString(16);
        var c = {
        };
        for (a = 0; a < n.length; a++) c[l = n[a]] = l;
        r[t] = [
          'function(require,module,exports){' + e + '(self); }',
          c
        ]
      }
      var h = Math.floor(Math.pow(16, 8) * Math.random()).toString(16),
      d = {
      };
      return d[t] = t,
      r[h] = [
        'function(require,module,exports){var f = require(' + s(t) + ');(f.default ? f.default : f)(self);}',
        d
      ],
      '(' + i + ')({' + Object.keys(r).map(function (e) {
        return s(e) + ':[' + r[e][0] + ',' + s(r[e][1]) + ']'
      }).join(',') + '},{},[' + s(h) + '])'
    }(e);
    var u = new Blob([l], {
      type: 'text/javascript'
    }),
    c = (window.URL || window.webkitURL || window.mozURL || window.msURL).createObjectURL(u),
    h = new Worker(c);
    return h.objectURL = c,
    h
  }
},
function (e, t, n) {
  'use strict';
  function i(e) {
    return e && e.__esModule ? e : {
    default:
      e
    }
  }
  Object.defineProperty(t, '__esModule', {
    value: !0
  });
  var r = i(n(3)),
  o = i(n(0)),
  s = function (e) {
    return isNaN(e) || Math.abs(e) === 1 / 0 ? Number.MAX_VALUE : e
  };
  t.default = {
    addTextTrackData: function (e, t, n) {
      var i,
      a = r.default.WebKitDataCue || r.default.VTTCue;
      t && t.forEach(function (e) {
        var t = e.stream;
        this.inbandTextTracks_[t].addCue(new a(e.startTime + this.timestampOffset, e.endTime + this.timestampOffset, e.text))
      }, e),
      n && (i = s(e.mediaSource_.duration), n.forEach(function (e) {
        var t = e.cueTime + this.timestampOffset;
        e.frames.forEach(function (e) {
          var n = new a(t, t, e.value || e.url || e.data || '');
          n.frame = e,
          n.value = e,
          function (e) {
            Object.defineProperties(e.frame, {
              id: {
                get: function () {
                  return o.default.log.warn('cue.frame.id is deprecated. Use cue.value.key instead.'),
                  e.value.key
                }
              },
              value: {
                get: function () {
                  return o.default.log.warn('cue.frame.value is deprecated. Use cue.value.data instead.'),
                  e.value.data
                }
              },
              privateData: {
                get: function () {
                  return o.default.log.warn('cue.frame.privateData is deprecated. Use cue.value.data instead.'),
                  e.value.data
                }
              }
            })
          }(n),
          this.metadataTrack_.addCue(n)
        }, this)
      },
      e), e.metadataTrack_ && e.metadataTrack_.cues && e.metadataTrack_.cues.length && function () {
        for (var t = e.metadataTrack_.cues, n = [
        ], r = 0; r < t.length; r++) t[r] && n.push(t[r]);
        var o = n.reduce(function (e, t) {
          var n = e[t.startTime] || [
          ];
          return n.push(t),
          e[t.startTime] = n,
          e
        }, {
        }),
        s = Object.keys(o).sort(function (e, t) {
          return Number(e) - Number(t)
        });
        s.forEach(function (e, t) {
          var n = o[e],
          r = Number(s[t + 1]) || i;
          n.forEach(function (e) {
            e.endTime = r
          })
        })
      }())
    }, durationOfVideo: s
  }, e.exports = t.default
}, function (e, t, n) {
  'use strict';
  var i;
  (i = function (e, t) {
    var n,
    r = 0,
    o = 16384,
    s = function (e, t) {
      var n,
      i = e.position + t;
      i < e.bytes.byteLength || ((n = new Uint8Array(2 * i)).set(e.bytes.subarray(0, e.position), 0), e.bytes = n, e.view = new DataView(e.bytes.buffer))
    },
    a = i.widthBytes || new Uint8Array('width'.length),
    l = i.heightBytes || new Uint8Array('height'.length),
    u = i.videocodecidBytes || new Uint8Array('videocodecid'.length);
    if (!i.widthBytes) {
      for (n = 0; n < 'width'.length; n++) a[n] = 'width'.charCodeAt(n);
      for (n = 0; n < 'height'.length; n++) l[n] = 'height'.charCodeAt(n);
      for (n = 0; n < 'videocodecid'.length; n++) u[n] = 'videocodecid'.charCodeAt(n);
      i.widthBytes = a,
      i.heightBytes = l,
      i.videocodecidBytes = u
    }
    switch (this.keyFrame = !1, e) {
      case i.VIDEO_TAG:
        this.length = 16,
        o *= 6;
        break;
      case i.AUDIO_TAG:
        this.length = 13,
        this.keyFrame = !0;
        break;
      case i.METADATA_TAG:
        this.length = 29,
        this.keyFrame = !0;
        break;
      default:
        throw new Error('Unknown FLV tag type')
    }
    this.bytes = new Uint8Array(o),
    this.view = new DataView(this.bytes.buffer),
    this.bytes[0] = e,
    this.position = this.length,
    this.keyFrame = t,
    this.pts = 0,
    this.dts = 0,
    this.writeBytes = function (e, t, n) {
      var i,
      r = t || 0;
      i = r + (n = n || e.byteLength),
      s(this, n),
      this.bytes.set(e.subarray(r, i), this.position),
      this.position += n,
      this.length = Math.max(this.length, this.position)
  },
  this.writeByte = function (e) {
    s(this, 1),
    this.bytes[this.position] = e,
    this.position++,
    this.length = Math.max(this.length, this.position)
},
this.writeShort = function (e) {
  s(this, 2),
  this.view.setUint16(this.position, e),
  this.position += 2,
  this.length = Math.max(this.length, this.position)
},
this.negIndex = function (e) {
return this.bytes[this.length - e]
},
this.nalUnitSize = function () {
return 0 === r ? 0 : this.length - (r + 4)
},
this.startNalUnit = function () {
if (r > 0) throw new Error('Attempted to create new NAL wihout closing the old one');
r = this.length,
this.length += 4,
this.position = this.length
},
this.endNalUnit = function (e) {
var t,
n;
this.length === r + 4 ? this.length -= 4 : r > 0 && (t = r + 4, n = this.length - t, this.position = r, this.view.setUint32(this.position, n), this.position = this.length, e && e.push(this.bytes.subarray(t, t + n))),
r = 0
},
this.writeMetaDataDouble = function (e, t) {
var n;
if (s(this, 2 + e.length + 9), this.view.setUint16(this.position, e.length), this.position += 2, 'width' === e) this.bytes.set(a, this.position),
this.position += 5;
 else if ('height' === e) this.bytes.set(l, this.position),
this.position += 6;
 else if ('videocodecid' === e) this.bytes.set(u, this.position),
this.position += 12;
 else for (n = 0; n < e.length; n++) this.bytes[this.position] = e.charCodeAt(n),
this.position++;
this.position++,
this.view.setFloat64(this.position, t),
this.position += 8,
this.length = Math.max(this.length, this.position),
++r
},
this.writeMetaDataBoolean = function (e, t) {
var n;
for (s(this, 2), this.view.setUint16(this.position, e.length), this.position += 2, n = 0; n < e.length; n++) s(this, 1),
this.bytes[this.position] = e.charCodeAt(n),
this.position++;
s(this, 2),
this.view.setUint8(this.position, 1),
this.position++,
this.view.setUint8(this.position, t ? 1 : 0),
this.position++,
this.length = Math.max(this.length, this.position),
++r
},
this.finalize = function () {
var e,
n;
switch (this.bytes[0]) {
case i.VIDEO_TAG:
this.bytes[11] = 7 | (this.keyFrame || t ? 16 : 32),
this.bytes[12] = t ? 0 : 1,
e = this.pts - this.dts,
this.bytes[13] = (16711680 & e) >>> 16,
this.bytes[14] = (65280 & e) >>> 8,
this.bytes[15] = (255 & e) >>> 0;
break;
case i.AUDIO_TAG:
this.bytes[11] = 175,
this.bytes[12] = t ? 0 : 1;
break;
case i.METADATA_TAG:
this.position = 11,
this.view.setUint8(this.position, 2),
this.position++,
this.view.setUint16(this.position, 10),
this.position += 2,
this.bytes.set([111,
110,
77,
101,
116,
97,
68,
97,
116,
97], this.position),
this.position += 10,
this.bytes[this.position] = 8,
this.position++,
this.view.setUint32(this.position, r),
this.position = this.length,
this.bytes.set([0,
0,
9], this.position),
this.position += 3,
this.length = this.position
}
return n = this.length - 11,
this.bytes[1] = (16711680 & n) >>> 16,
this.bytes[2] = (65280 & n) >>> 8,
this.bytes[3] = (255 & n) >>> 0,
this.bytes[4] = (16711680 & this.dts) >>> 16,
this.bytes[5] = (65280 & this.dts) >>> 8,
this.bytes[6] = (255 & this.dts) >>> 0,
this.bytes[7] = (4278190080 & this.dts) >>> 24,
this.bytes[8] = 0,
this.bytes[9] = 0,
this.bytes[10] = 0,
s(this, 4),
this.view.setUint32(this.length, this.length),
this.length += 4,
this.position += 4,
this.bytes = this.bytes.subarray(0, this.length),
this.frameTime = i.frameTime(this.bytes),
this
}
}).AUDIO_TAG = 8,
i.VIDEO_TAG = 9,
i.METADATA_TAG = 18,
i.isAudioFrame = function (e) {
return i.AUDIO_TAG === e[0]
},
i.isVideoFrame = function (e) {
return i.VIDEO_TAG === e[0]
},
i.isMetaData = function (e) {
return i.METADATA_TAG === e[0]
},
i.isKeyFrame = function (e) {
return i.isVideoFrame(e) ? 23 === e[11] : !!i.isAudioFrame(e) || !!i.isMetaData(e)
},
i.frameTime = function (e) {
var t = e[4] << 16;
return t |= e[5] << 8,
t |= e[6] << 0,
t |= e[7] << 24
},
e.exports = i
}, function (e, t, n) {
var i,
r,
o,
s,
a,
l,
u;
e.exports = (i = n(1), o = (r = i).lib, s = o.Base, a = r.enc, l = a.Utf8, u = r.algo, void (u.HMAC = s.extend({
init: function (e, t) {
e = this._hasher = new e.init,
'string' == typeof t && (t = l.parse(t));
var n = e.blockSize,
i = 4 * n;
t.sigBytes > i && (t = e.finalize(t)),
t.clamp();
for (var r = this._oKey = t.clone(), o = this._iKey = t.clone(), s = r.words, a = o.words, u = 0; u < n; u++) s[u] ^= 1549556828,
a[u] ^= 909522486;
r.sigBytes = o.sigBytes = i,
this.reset()
},
reset: function () {
var e = this._hasher;
e.reset(),
e.update(this._iKey)
},
update: function (e) {
return this._hasher.update(e),
this
},
finalize: function (e) {
var t = this._hasher,
n = t.finalize(e);
t.reset();
var i = t.finalize(this._oKey.clone().concat(n));
return i
}
})))
}, function (e, t, n) {
var i,
r,
o,
s,
a,
l,
u;
e.exports = (i = n(1), o = (r = i).lib, s = o.WordArray, a = o.Hasher, l = [
], u = r.algo.SHA1 = a.extend({
_doReset: function () {
this._hash = new s.init([1732584193,
4023233417,
2562383102,
271733878,
3285377520])
},
_doProcessBlock: function (e, t) {
for (var n = this._hash.words, i = n[0], r = n[1], o = n[2], s = n[3], a = n[4], u = 0; u < 80; u++) {
if (u < 16) l[u] = 0 | e[t + u];
 else {
var c = l[u - 3] ^ l[u - 8] ^ l[u - 14] ^ l[u - 16];
l[u] = c << 1 | c >>> 31
}
var h = (i << 5 | i >>> 27) + a + l[u];
h += u < 20 ? 1518500249 + (r & o | ~r & s)  : u < 40 ? 1859775393 + (r ^ o ^ s)  : u < 60 ? (r & o | r & s | o & s) - 1894007588 : (r ^ o ^ s) - 899497514,
a = s,
s = o,
o = r << 30 | r >>> 2,
r = i,
i = h
}
n[0] = n[0] + i | 0,
n[1] = n[1] + r | 0,
n[2] = n[2] + o | 0,
n[3] = n[3] + s | 0,
n[4] = n[4] + a | 0
},
_doFinalize: function () {
var e = this._data,
t = e.words,
n = 8 * this._nDataBytes,
i = 8 * e.sigBytes;
return t[i >>> 5] |= 128 << 24 - i % 32,
t[14 + (i + 64 >>> 9 << 4)] = Math.floor(n / 4294967296),
t[15 + (i + 64 >>> 9 << 4)] = n,
e.sigBytes = 4 * t.length,
this._process(),
this._hash
},
clone: function () {
var e = a.clone.call(this);
return e._hash = this._hash.clone(),
e
}
}), r.SHA1 = a._createHelper(u), r.HmacSHA1 = a._createHmacHelper(u), i.SHA1)
}, function (e, t, n) {
'use strict';
e.exports = {
2: 'need dictionary',
1: 'stream end',
0: '',
'-1': 'file error',
'-2': 'stream error',
'-3': 'data error',
'-4': 'insufficient memory',
'-5': 'buffer error',
'-6': 'incompatible version'
}
}, function (e, t, n) {
'use strict';
var i = n(2);
var r = function () {
for (var e, t = [
], n = 0; n < 256; n++) {
e = n;
for (var i = 0; i < 8; i++) e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
t[n] = e
}
return t
}();
e.exports = function (e, t) {
return void 0 !== e && e.length ? 'string' !== i.getTypeOf(e) ? function (e, t, n, i) {
var o = r,
s = i + n;
e ^= - 1;
for (var a = i; a < s; a++) e = e >>> 8 ^ o[255 & (e ^ t[a])];
return - 1 ^ e
}(0 | t, e, e.length, 0)  : function (e, t, n, i) {
var o = r,
s = i + n;
e ^= - 1;
for (var a = i; a < s; a++) e = e >>> 8 ^ o[255 & (e ^ t.charCodeAt(a))];
return - 1 ^ e
}(0 | t, e, e.length, 0)  : 0
}
}, function (e, t, n) {
'use strict';
var i = n(20),
r = n(85),
o = n(84),
s = n(83);
o = n(84);
function a(e, t, n, i, r) {
this.compressedSize = e,
this.uncompressedSize = t,
this.crc32 = n,
this.compression = i,
this.compressedContent = r
}
a.prototype = {
getContentWorker: function () {
var e = new r(i.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new o('data_length')),
t = this;
return e.on('end', function () {
if (this.streamInfo.data_length !== t.uncompressedSize) throw new Error('Bug : uncompressed data size mismatch')
}),
e
},
getCompressedWorker: function () {
return new r(i.Promise.resolve(this.compressedContent)).withStreamInfo('compressedSize', this.compressedSize).withStreamInfo('uncompressedSize', this.uncompressedSize).withStreamInfo('crc32', this.crc32).withStreamInfo('compression', this.compression)
}
},
a.createWorkerFrom = function (e, t, n) {
return e.pipe(new s).pipe(new o('uncompressedSize')).pipe(t.compressWorker(n)).pipe(new o('compressedSize')).withStreamInfo('compression', t)
},
e.exports = a
}, function (e, t, n) {
e.exports = !n(89) (function () {
return 7 != Object.defineProperty({
}, 'a', {
get: function () {
return 7
}
}).a
})
}, function (e, t) {
e.exports = function (e) {
return 'object' == typeof e ? null !== e : 'function' == typeof e
}
}, function (e, t, n) {
'use strict';
(function (t, i, r) {
var o = n(30);
function s(e) {
var t = this;
this.next = null,
this.entry = null,
this.finish = function () {
!function (e, t, n) {
var i = e.entry;
e.entry = null;
for (; i; ) {
var r = i.callback;
t.pendingcb--,
r(n),
i = i.next
}
t.corkedRequestsFree ? t.corkedRequestsFree.next = e : t.corkedRequestsFree = e
}(t, e)
}
}
e.exports = A;
var a,
l = !t.browser && [
'v0.10',
'v0.9.'
].indexOf(t.version.slice(0, 5)) > - 1 ? i : o.nextTick;
A.WritableState = m;
var u = n(21);
u.inherits = n(16);
var c = {
deprecate: n(230)
},
h = n(96),
d = n(29).Buffer,
f = r.Uint8Array || function () {
};
var p,
v = n(95);
function g() {
}
function m(e, t) {
a = a || n(11),
e = e || {
};
var i = t instanceof a;
this.objectMode = !!e.objectMode,
i && (this.objectMode = this.objectMode || !!e.writableObjectMode);
var r = e.highWaterMark,
u = e.writableHighWaterMark,
c = this.objectMode ? 16 : 16384;
this.highWaterMark = r || 0 === r ? r : i && (u || 0 === u) ? u : c,
this.highWaterMark = Math.floor(this.highWaterMark),
this.finalCalled = !1,
this.needDrain = !1,
this.ending = !1,
this.ended = !1,
this.finished = !1,
this.destroyed = !1;
var h = !1 === e.decodeStrings;
this.decodeStrings = !h,
this.defaultEncoding = e.defaultEncoding || 'utf8',
this.length = 0,
this.writing = !1,
this.corked = 0,
this.sync = !0,
this.bufferProcessing = !1,
this.onwrite = function (e) {
!function (e, t) {
var n = e._writableState,
i = n.sync,
r = n.writecb;
if (function (e) {
e.writing = !1,
e.writecb = null,
e.length -= e.writelen,
e.writelen = 0
}(n), t) !function (e, t, n, i, r) {
--t.pendingcb,
n ? (o.nextTick(r, i), o.nextTick(k, e, t), e._writableState.errorEmitted = !0, e.emit('error', i))  : (r(i), e._writableState.errorEmitted = !0, e.emit('error', i), k(e, t))
}(e, n, i, t, r);
 else {
var s = w(n);
s || n.corked || n.bufferProcessing || !n.bufferedRequest || _(e, n),
i ? l(b, e, n, s, r)  : b(e, n, s, r)
}
}(t, e)
},
this.writecb = null,
this.writelen = 0,
this.bufferedRequest = null,
this.lastBufferedRequest = null,
this.pendingcb = 0,
this.prefinished = !1,
this.errorEmitted = !1,
this.bufferedRequestCount = 0,
this.corkedRequestsFree = new s(this)
}
function A(e) {
if (a = a || n(11), !(p.call(A, this) || this instanceof a)) return new A(e);
this._writableState = new m(e, this),
this.writable = !0,
e && ('function' == typeof e.write && (this._write = e.write), 'function' == typeof e.writev && (this._writev = e.writev), 'function' == typeof e.destroy && (this._destroy = e.destroy), 'function' == typeof e.final && (this._final = e.final)),
h.call(this)
}
function y(e, t, n, i, r, o, s) {
t.writelen = i,
t.writecb = s,
t.writing = !0,
t.sync = !0,
n ? e._writev(r, t.onwrite)  : e._write(r, o, t.onwrite),
t.sync = !1
}
function b(e, t, n, i) {
n || function (e, t) {
0 === t.length && t.needDrain && (t.needDrain = !1, e.emit('drain'))
}(e, t),
t.pendingcb--,
i(),
k(e, t)
}
function _(e, t) {
t.bufferProcessing = !0;
var n = t.bufferedRequest;
if (e._writev && n && n.next) {
var i = t.bufferedRequestCount,
r = new Array(i),
o = t.corkedRequestsFree;
o.entry = n;
for (var a = 0, l = !0; n; ) r[a] = n,
n.isBuf || (l = !1),
n = n.next,
a += 1;
r.allBuffers = l,
y(e, t, !0, t.length, r, '', o.finish),
t.pendingcb++,
t.lastBufferedRequest = null,
o.next ? (t.corkedRequestsFree = o.next, o.next = null)  : t.corkedRequestsFree = new s(t),
t.bufferedRequestCount = 0
} else {
for (; n; ) {
var u = n.chunk,
c = n.encoding,
h = n.callback;
if (y(e, t, !1, t.objectMode ? 1 : u.length, u, c, h), n = n.next, t.bufferedRequestCount--, t.writing) break
}
null === n && (t.lastBufferedRequest = null)
}
t.bufferedRequest = n,
t.bufferProcessing = !1
}
function w(e) {
return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing
}
function T(e, t) {
e._final(function (n) {
t.pendingcb--,
n && e.emit('error', n),
t.prefinished = !0,
e.emit('prefinish'),
k(e, t)
})
}
function k(e, t) {
var n = w(t);
return n && (!function (e, t) {
t.prefinished || t.finalCalled || ('function' == typeof e._final ? (t.pendingcb++, t.finalCalled = !0, o.nextTick(T, e, t))  : (t.prefinished = !0, e.emit('prefinish')))
}(e, t), 0 === t.pendingcb && (t.finished = !0, e.emit('finish'))),
n
}
u.inherits(A, h),
m.prototype.getBuffer = function () {
for (var e = this.bufferedRequest, t = [
]; e; ) t.push(e),
e = e.next;
return t
},
function () {
try {
Object.defineProperty(m.prototype, 'buffer', {
get: c.deprecate(function () {
return this.getBuffer()
}, '_writableState.buffer is deprecated. Use _writableState.getBuffer instead.', 'DEP0003')
})
} catch (e) {
}
}(),
'function' == typeof Symbol && Symbol.hasInstance && 'function' == typeof Function.prototype[Symbol.hasInstance] ? (p = Function.prototype[Symbol.hasInstance], Object.defineProperty(A, Symbol.hasInstance, {
value: function (e) {
return !!p.call(this, e) || this === A && (e && e._writableState instanceof m)
}
}))  : p = function (e) {
return e instanceof this
},
A.prototype.pipe = function () {
this.emit('error', new Error('Cannot pipe, not readable'))
},
A.prototype.write = function (e, t, n) {
var i,
r = this._writableState,
s = !1,
a = !r.objectMode && (i = e, d.isBuffer(i) || i instanceof f);
return a && !d.isBuffer(e) && (e = function (e) {
return d.from(e)
}(e)),
'function' == typeof t && (n = t, t = null),
a ? t = 'buffer' : t || (t = r.defaultEncoding),
'function' != typeof n && (n = g),
r.ended ? function (e, t) {
var n = new Error('write after end');
e.emit('error', n),
o.nextTick(t, n)
}(this, n)  : (a || function (e, t, n, i) {
var r = !0,
s = !1;
return null === n ? s = new TypeError('May not write null values to stream')  : 'string' == typeof n || void 0 === n || t.objectMode || (s = new TypeError('Invalid non-string/buffer chunk')),
s && (e.emit('error', s), o.nextTick(i, s), r = !1),
r
}(this, r, e, n)) && (r.pendingcb++, s = function (e, t, n, i, r, o) {
if (!n) {
var s = function (e, t, n) {
e.objectMode || !1 === e.decodeStrings || 'string' != typeof t || (t = d.from(t, n));
return t
}(t, i, r);
i !== s && (n = !0, r = 'buffer', i = s)
}
var a = t.objectMode ? 1 : i.length;
t.length += a;
var l = t.length < t.highWaterMark;
l || (t.needDrain = !0);
if (t.writing || t.corked) {
var u = t.lastBufferedRequest;
t.lastBufferedRequest = {
chunk: i,
encoding: r,
isBuf: n,
callback: o,
next: null
},
u ? u.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest,
t.bufferedRequestCount += 1
} else y(e, t, !1, a, i, r, o);
return l
}(this, r, a, e, t, n)),
s
},
A.prototype.cork = function () {
this._writableState.corked++
},
A.prototype.uncork = function () {
var e = this._writableState;
e.corked && (e.corked--, e.writing || e.corked || e.finished || e.bufferProcessing || !e.bufferedRequest || _(this, e))
},
A.prototype.setDefaultEncoding = function (e) {
if ('string' == typeof e && (e = e.toLowerCase()), !(['hex',
'utf8',
'utf-8',
'ascii',
'binary',
'base64',
'ucs2',
'ucs-2',
'utf16le',
'utf-16le',
'raw'].indexOf((e + '').toLowerCase()) > - 1)) throw new TypeError('Unknown encoding: ' + e);
return this._writableState.defaultEncoding = e,
this
},
A.prototype._write = function (e, t, n) {
n(new Error('_write() is not implemented'))
},
A.prototype._writev = null,
A.prototype.end = function (e, t, n) {
var i = this._writableState;
'function' == typeof e ? (n = e, e = null, t = null)  : 'function' == typeof t && (n = t, t = null),
null !== e && void 0 !== e && this.write(e, t),
i.corked && (i.corked = 1, this.uncork()),
i.ending || i.finished || function (e, t, n) {
t.ending = !0,
k(e, t),
n && (t.finished ? o.nextTick(n)  : e.once('finish', n));
t.ended = !0,
e.writable = !1
}(this, i, n)
},
Object.defineProperty(A.prototype, 'destroyed', {
get: function () {
return void 0 !== this._writableState && this._writableState.destroyed
},
set: function (e) {
this._writableState && (this._writableState.destroyed = e)
}
}),
A.prototype.destroy = v.destroy,
A.prototype._undestroy = v.undestroy,
A.prototype._destroy = function (e, t) {
this.end(),
t(e)
}
}).call(this, n(31), n(232).setImmediate, n(7))
}, function (e, t, n) {
(t = e.exports = n(97)).Stream = t,
t.Readable = t,
t.Writable = n(44),
t.Duplex = n(11),
t.Transform = n(93),
t.PassThrough = n(229)
}, function (e, t) {
function n() {
this._events = this._events || {
},
this._maxListeners = this._maxListeners || void 0
}
function i(e) {
return 'function' == typeof e
}
function r(e) {
return 'object' == typeof e && null !== e
}
function o(e) {
return void 0 === e
}
e.exports = n,
n.EventEmitter = n,
n.prototype._events = void 0,
n.prototype._maxListeners = void 0,
n.defaultMaxListeners = 10,
n.prototype.setMaxListeners = function (e) {
if ('number' != typeof e || e < 0 || isNaN(e)) throw TypeError('n must be a positive number');
return this._maxListeners = e,
this
},
n.prototype.emit = function (e) {
var t,
n,
s,
a,
l,
u;
if (this._events || (this._events = {
}), 'error' === e && (!this._events.error || r(this._events.error) && !this._events.error.length)) {
if ((t = arguments[1]) instanceof Error) throw t;
var c = new Error('Uncaught, unspecified "error" event. (' + t + ')');
throw c.context = t,
c
}
if (o(n = this._events[e])) return !1;
if (i(n)) switch (arguments.length) {
case 1:
n.call(this);
break;
case 2:
n.call(this, arguments[1]);
break;
case 3:
n.call(this, arguments[1], arguments[2]);
break;
default:
a = Array.prototype.slice.call(arguments, 1),
n.apply(this, a)
} else if (r(n)) for (a = Array.prototype.slice.call(arguments, 1), s = (u = n.slice()).length, l = 0; l < s; l++) u[l].apply(this, a);
return !0
},
n.prototype.addListener = function (e, t) {
var s;
if (!i(t)) throw TypeError('listener must be a function');
return this._events || (this._events = {
}),
this._events.newListener && this.emit('newListener', e, i(t.listener) ? t.listener : t),
this._events[e] ? r(this._events[e]) ? this._events[e].push(t)  : this._events[e] = [
this._events[e],
t
] : this._events[e] = t,
r(this._events[e]) && !this._events[e].warned && (s = o(this._maxListeners) ? n.defaultMaxListeners : this._maxListeners) && s > 0 && this._events[e].length > s && (this._events[e].warned = !0, console.error('(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.', this._events[e].length), 'function' == typeof console.trace && console.trace()),
this
},
n.prototype.on = n.prototype.addListener,
n.prototype.once = function (e, t) {
if (!i(t)) throw TypeError('listener must be a function');
var n = !1;
function r() {
this.removeListener(e, r),
n || (n = !0, t.apply(this, arguments))
}
return r.listener = t,
this.on(e, r),
this
},
n.prototype.removeListener = function (e, t) {
var n,
o,
s,
a;
if (!i(t)) throw TypeError('listener must be a function');
if (!this._events || !this._events[e]) return this;
if (s = (n = this._events[e]).length, o = - 1, n === t || i(n.listener) && n.listener === t) delete this._events[e],
this._events.removeListener && this.emit('removeListener', e, t);
 else if (r(n)) {
for (a = s; a-- > 0; ) if (n[a] === t || n[a].listener && n[a].listener === t) {
o = a;
break
}
if (o < 0) return this;
1 === n.length ? (n.length = 0, delete this._events[e])  : n.splice(o, 1),
this._events.removeListener && this.emit('removeListener', e, t)
}
return this
},
n.prototype.removeAllListeners = function (e) {
var t,
n;
if (!this._events) return this;
if (!this._events.removeListener) return 0 === arguments.length ? this._events = {
}
 : this._events[e] && delete this._events[e],
this;
if (0 === arguments.length) {
for (t in this._events) 'removeListener' !== t && this.removeAllListeners(t);
return this.removeAllListeners('removeListener'),
this._events = {
},
this
}
if (i(n = this._events[e])) this.removeListener(e, n);
 else if (n) for (; n.length; ) this.removeListener(e, n[n.length - 1]);
return delete this._events[e],
this
},
n.prototype.listeners = function (e) {
return this._events && this._events[e] ? i(this._events[e]) ? [
this._events[e]
] : this._events[e].slice()  : [
]
},
n.prototype.listenerCount = function (e) {
if (this._events) {
var t = this._events[e];
if (i(t)) return 1;
if (t) return t.length
}
return 0
},
n.listenerCount = function (e, t) {
return e.listenerCount(t)
}
},
function (e, t, n) {
'use strict';
Object.defineProperty(t, '__esModule', {
value: !0
});
var i = function () {
function e(e, t) {
for (var n = 0; n < t.length; n++) {
var i = t[n];
i.enumerable = i.enumerable || !1,
i.configurable = !0,
'value' in i && (i.writable = !0),
Object.defineProperty(e, i.key, i)
}
}
return function (t, n, i) {
return n && e(t.prototype, n),
i && e(t, i),
t
}
}();
var r = function () {
function e() {
!function (e, t) {
if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
}(this, e),
this.listeners = {
}
}
return i(e, [
{
key: 'on',
value: function (e, t) {
this.listeners[e] || (this.listeners[e] = [
]),
this.listeners[e].push(t)
}
},
{
key: 'off',
value: function (e, t) {
if (!this.listeners[e]) return !1;
var n = this.listeners[e].indexOf(t);
return this.listeners[e].splice(n, 1),
n > - 1
}
},
{
key: 'trigger',
value: function (e) {
var t = this.listeners[e],
n = void 0,
i = void 0,
r = void 0;
if (t) if (2 === arguments.length) for (i = t.length, n = 0; n < i; ++n) t[n].call(this, arguments[1]);
 else for (r = Array.prototype.slice.call(arguments, 1), i = t.length, n = 0; n < i; ++n) t[n].apply(this, r)
}
},
{
key: 'dispose',
value: function () {
this.listeners = {
}
}
},
{
key: 'pipe',
value: function (e) {
this.on('data', function (t) {
e.push(t)
})
}
}
]),
e
}();
t.default = r
},
function (e, t, n) {
'use strict';
Object.defineProperty(t, '__esModule', {
value: !0
});
var i = function () {
function e(e, t) {
for (var n = 0; n < t.length; n++) {
var i = t[n];
i.enumerable = i.enumerable || !1,
i.configurable = !0,
'value' in i && (i.writable = !0),
Object.defineProperty(e, i.key, i)
}
}
return function (t, n, i) {
return n && e(t.prototype, n),
i && e(t, i),
t
}
}(),
r = function (e, t, n) {
for (var i = !0; i; ) {
var r = e,
o = t,
s = n;
i = !1,
null === r && (r = Function.prototype);
var a = Object.getOwnPropertyDescriptor(r, o);
if (void 0 !== a) {
if ('value' in a) return a.value;
var l = a.get;
if (void 0 === l) return;
return l.call(s)
}
var u = Object.getPrototypeOf(r);
if (null === u) return;
e = u,
t = o,
n = s,
i = !0,
a = u = void 0
}
};
function o(e) {
return e && e.__esModule ? e : {
default:
e
}
}
var s = o(n(244)),
a = n(0),
l = o(n(102)),
u = o(n(3)),
c = o(n(241)),
h = function (e, t, n) {
var i = t.slice();
n = n || 0;
for (var r = Math.min(e.length, t.length + n), o = n; o < r; o++) i[o - n] = (0, a.mergeOptions) (e[o], i[o - n]);
return i
};
t.updateSegments = h;
var d = function (e, t) {
e.resolvedUri || (e.resolvedUri = (0, s.default) (t, e.uri)), e.key && !e.key.resolvedUri && (e.key.resolvedUri = (0, s.default) (t, e.key.uri)), e.map && !e.map.resolvedUri && (e.map.resolvedUri = (0, s.default) (t, e.map.uri))
}; t.resolveSegmentUris = d; var f = function (e, t) {
var n = (0, a.mergeOptions) (e, {
}),
i = n.playlists.filter(function (e) {
return e.uri === t.uri
}) [0];
if (!i) return null;
if (i.segments && t.segments && i.segments.length === t.segments.length && i.mediaSequence === t.mediaSequence) return null;
var r = (0, a.mergeOptions) (i, t);
i.segments && (r.segments = h(i.segments, t.segments, t.mediaSequence - i.mediaSequence)),
r.segments.forEach(function (e) {
d(e, r.resolvedUri)
});
for (var o = 0; o < n.playlists.length; o++) n.playlists[o].uri === t.uri && (n.playlists[o] = r);
return n.playlists[t.uri] = r,
n
}; t.updateMaster = f; var p = function (e) {
for (var t = e.playlists.length; t--; ) {
var n = e.playlists[t];
e.playlists[n.uri] = n,
n.resolvedUri = (0, s.default) (e.uri, n.uri), n.attributes || (n.attributes = {
}, a.log.warn('Invalid playlist STREAM-INF detected. Missing BANDWIDTH attribute.'))
}
};
t.setupMediaPlaylists = p;
var v = function (e) {
[
'AUDIO',
'SUBTITLES'
].forEach(function (t) {
for (var n in e.mediaGroups[t]) for (var i in e.mediaGroups[t][n]) {
var r = e.mediaGroups[t][n][i];
r.uri && (r.resolvedUri = (0, s.default) (e.uri, r.uri))
}
})
};
t.resolveMediaGroupUris = v;
var g = function (e, t) {
var n = e.segments[e.segments.length - 1];
return t && n && n.duration ? 1000 * n.duration : 500 * (e.targetDuration || 10)
};
t.refreshDelay = g;
var m = function (e) {
function t(e, n, i) {
var o = this;
if (function (e, t) {
if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
}(this, t), r(Object.getPrototypeOf(t.prototype), 'constructor', this).call(this), this.srcUrl = e, this.hls_ = n, this.withCredentials = i, !this.srcUrl) throw new Error('A non-empty playlist URL is required');
this.state = 'HAVE_NOTHING',
this.on('mediaupdatetimeout', function () {
'HAVE_METADATA' === o.state && (o.state = 'HAVE_CURRENT_METADATA', o.request = o.hls_.xhr({
uri: (0, s.default) (o.master.uri, o.media().uri), withCredentials: o.withCredentials, responseType: 'arraybuffer'
},
function (e, t) {
if (o.request) return e ? o.playlistRequestError(o.request, o.media().uri, 'HAVE_METADATA')  : void o.haveMetadata(o.request, o.media().uri)
}))
})
}
return function (e, t) {
if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
e.prototype = Object.create(t && t.prototype, {
constructor: {
value: e,
enumerable: !1,
writable: !0,
configurable: !0
}
}),
t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t)  : e.__proto__ = t)
}(t, a.EventTarget),
i(t, [
{
key: 'playlistRequestError',
value: function (e, t, n) {
this.request = null,
n && (this.state = n),
this.error = {
playlist: this.master.playlists[t],
status: e.status,
message: 'HLS playlist request error at URL: ' + t,
responseText: e.response,
code: e.status >= 500 ? 4 : 2
},
this.trigger('error')
}
},
{
key: 'haveMetadata',
value: function (e, t) {
var n = this;
try {
(0, c.default) (e.response, function (e, i) {
n.request = null,
n.state = 'HAVE_METADATA';
var r = new l.default.Parser;
r.push(i),
r.end(),
r.manifest.uri = t,
r.manifest.attributes = r.manifest.attributes || {
};
var o = f(n.master, r.manifest);
n.targetDuration = r.manifest.targetDuration,
o ? (n.master = o, n.media_ = n.master.playlists[r.manifest.uri])  : n.trigger('playlistunchanged'),
n.media().endList || (u.default.clearTimeout(n.mediaUpdateTimeout),
n.mediaUpdateTimeout = u.default.setTimeout(function () {
n.trigger('mediaupdatetimeout')
}, g(n.media(), !!o))),
n.trigger('loadedplaylist')
})
} catch (e) {
}
}
}, {
key: 'dispose',
value: function () {
this.stopRequest(),
u.default.clearTimeout(this.mediaUpdateTimeout)
}
},
{
key: 'stopRequest',
value: function () {
if (this.request) {
var e = this.request;
this.request = null,
e.onreadystatechange = null,
e.abort()
}
}
},
{
key: 'media',
value: function (e) {
var t = this;
if (!e) return this.media_;
if ('HAVE_NOTHING' === this.state) throw new Error('Cannot switch media playlist from ' + this.state);
var n = this.state;
if ('string' == typeof e) {
if (!this.master.playlists[e]) throw new Error('Unknown playlist URI: ' + e);
e = this.master.playlists[e]
}
var i = !this.media_ || e.uri !== this.media_.uri;
if (this.master.playlists[e.uri].endList) return this.request && (this.request.onreadystatechange = null, this.request.abort(), this.request = null),
this.state = 'HAVE_METADATA',
this.media_ = e,
void (i && (this.trigger('mediachanging'), this.trigger('mediachange')));
if (i) {
if (this.state = 'SWITCHING_MEDIA', this.request) {
if ((0, s.default) (this.master.uri, e.uri) === this.request.url) return; this.request.onreadystatechange = null, this.request.abort(), this.request = null
}
this.media_ && this.trigger('mediachanging'),
this.request = this.hls_.xhr({
uri: (0, s.default) (this.master.uri, e.uri), withCredentials: this.withCredentials, responseType: 'arraybuffer'
},
function (i, r) {
if (t.request) {
if (i) return t.playlistRequestError(t.request, e.uri, n);
t.haveMetadata(r, e.uri),
'HAVE_MASTER' === n ? t.trigger('loadedmetadata')  : t.trigger('mediachange')
}
})
}
}
},
{
key: 'pause',
value: function () {
this.stopRequest(),
u.default.clearTimeout(this.mediaUpdateTimeout),
'HAVE_NOTHING' === this.state && (this.started = !1),
'SWITCHING_MEDIA' === this.state ? this.media_ ? this.state = 'HAVE_METADATA' : this.state = 'HAVE_MASTER' : 'HAVE_CURRENT_METADATA' === this.state && (this.state = 'HAVE_METADATA')
}
},
{
key: 'load',
value: function (e) {
var t = this;
u.default.clearTimeout(this.mediaUpdateTimeout);
var n = this.media();
if (e) {
var i = n ? n.targetDuration / 2 * 1000 : 5000;
this.mediaUpdateTimeout = u.default.setTimeout(function () {
return t.load()
}, i)
} else this.started ? n && !n.endList ? this.trigger('mediaupdatetimeout')  : this.trigger('loadedplaylist')  : this.start()
}
},
{
key: 'start',
value: function () {
var e = this;
this.started = !0,
this.request = this.hls_.xhr({
uri: this.srcUrl,
withCredentials: this.withCredentials,
responseType: 'arraybuffer'
}, function (t, n) {
if (e.request) {
if (e.request = null, t) return e.error = {
status: n.status,
message: 'HLS playlist request error at URL: ' + e.srcUrl,
responseText: n.response,
code: 2
},
'HAVE_NOTHING' === e.state && (e.started = !1),
e.trigger('error');
try {
(0, c.default) (n.response, function (t, i) {
var r = new l.default.Parser;
if (r.push(i), r.end(), e.state = 'HAVE_MASTER', r.manifest.uri = e.srcUrl, r.manifest.playlists) return e.master = r.manifest,
p(e.master),
v(e.master),
e.trigger('loadedplaylist'),
void (e.request || e.media(r.manifest.playlists[0]));
e.master = {
mediaGroups: {
  AUDIO: {
  },
  VIDEO: {
  },
  'CLOSED-CAPTIONS': {
  },
  SUBTITLES: {
  }
},
uri: u.default.location.href,
playlists:
[
  {
    uri: e.srcUrl
  }
]
},
e.master.playlists[e.srcUrl] = e.master.playlists[0],
e.master.playlists[0].resolvedUri = e.srcUrl,
e.master.playlists[0].attributes = e.master.playlists[0].attributes || {
},
e.targetDuration = r.manifest.targetDuration;
var o = f(e.master, r.manifest);
return o && (e.master = o, e.media_ = e.master.playlists[e.srcUrl]),
e.haveMetadata(n, e.srcUrl),
e.trigger('loadedmetadata')
})
} catch (e) {
}
}
})
}
}
]),
t
}();
t.default = m
},
function (e, t, n) {
var i,
r,
o = {
},
s = (i = function () {
return window && document && document.all && !window.atob
}, function () {
return void 0 === r && (r = i.apply(this, arguments)),
r
}),
a = function (e) {
var t = {
};
return function (e) {
if ('function' == typeof e) return e();
if (void 0 === t[e]) {
var n = function (e) {
return document.querySelector(e)
}.call(this, e);
if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
n = n.contentDocument.head
} catch (e) {
n = null
}
t[e] = n
}
return t[e]
}
}(),
l = null,
u = 0,
c = [
],
h = n(108);
function d(e, t) {
for (var n = 0; n < e.length; n++) {
var i = e[n],
r = o[i.id];
if (r) {
r.refs++;
for (var s = 0; s < r.parts.length; s++) r.parts[s](i.parts[s]);
for (; s < i.parts.length; s++) r.parts.push(A(i.parts[s], t))
} else {
var a = [
];
for (s = 0; s < i.parts.length; s++) a.push(A(i.parts[s], t));
o[i.id] = {
id: i.id,
refs: 1,
parts: a
}
}
}
}
function f(e, t) {
for (var n = [
], i = {
}, r = 0; r < e.length; r++) {
var o = e[r],
s = t.base ? o[0] + t.base : o[0],
a = {
css: o[1],
media: o[2],
sourceMap: o[3]
};
i[s] ? i[s].parts.push(a)  : n.push(i[s] = {
id: s,
parts: [
a
]
})
}
return n
}
function p(e, t) {
var n = a(e.insertInto);
if (!n) throw new Error('Couldn\'t find a style target. This probably means that the value for the \'insertInto\' parameter is invalid.');
var i = c[c.length - 1];
if ('top' === e.insertAt) i ? i.nextSibling ? n.insertBefore(t, i.nextSibling)  : n.appendChild(t)  : n.insertBefore(t, n.firstChild),
c.push(t);
 else if ('bottom' === e.insertAt) n.appendChild(t);
 else {
if ('object' != typeof e.insertAt || !e.insertAt.before) throw new Error('[Style Loader]\n\n Invalid value for parameter \'insertAt\' (\'options.insertAt\') found.\n Must be \'top\', \'bottom\', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n');
var r = a(e.insertInto + ' ' + e.insertAt.before);
n.insertBefore(t, r)
}
}
function v(e) {
if (null === e.parentNode) return !1;
e.parentNode.removeChild(e);
var t = c.indexOf(e);
t >= 0 && c.splice(t, 1)
}
function g(e) {
var t = document.createElement('style');
return e.attrs.type = 'text/css',
m(t, e.attrs),
p(e, t),
t
}
function m(e, t) {
Object.keys(t).forEach(function (n) {
e.setAttribute(n, t[n])
})
}
function A(e, t) {
var n,
i,
r,
o;
if (t.transform && e.css) {
if (!(o = t.transform(e.css))) return function () {
};
e.css = o
}
if (t.singleton) {
var s = u++;
n = l || (l = g(t)),
i = _.bind(null, n, s, !1),
r = _.bind(null, n, s, !0)
} else e.sourceMap && 'function' == typeof URL && 'function' == typeof URL.createObjectURL && 'function' == typeof URL.revokeObjectURL && 'function' == typeof Blob && 'function' == typeof btoa ? (n = function (e) {
var t = document.createElement('link');
return e.attrs.type = 'text/css',
e.attrs.rel = 'stylesheet',
m(t, e.attrs),
p(e, t),
t
}(t), i = function (e, t, n) {
var i = n.css,
r = n.sourceMap,
o = void 0 === t.convertToAbsoluteUrls && r;
(t.convertToAbsoluteUrls || o) && (i = h(i));
r && (i += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + ' */');
var s = new Blob([i], {
type: 'text/css'
}),
a = e.href;
e.href = URL.createObjectURL(s),
a && URL.revokeObjectURL(a)
}.bind(null, n, t), r = function () {
v(n),
n.href && URL.revokeObjectURL(n.href)
})  : (n = g(t), i = function (e, t) {
var n = t.css,
i = t.media;
i && e.setAttribute('media', i);
if (e.styleSheet) e.styleSheet.cssText = n;
 else {
for (; e.firstChild; ) e.removeChild(e.firstChild);
e.appendChild(document.createTextNode(n))
}
}.bind(null, n), r = function () {
v(n)
});
return i(e),
function (t) {
if (t) {
if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
i(e = t)
} else r()
}
}
e.exports = function (e, t) {
if ('undefined' != typeof DEBUG && DEBUG && 'object' != typeof document) throw new Error('The style-loader cannot be used in a non-browser environment');
(t = t || {
}).attrs = 'object' == typeof t.attrs ? t.attrs : {
},
t.singleton || 'boolean' == typeof t.singleton || (t.singleton = s()),
t.insertInto || (t.insertInto = 'head'),
t.insertAt || (t.insertAt = 'bottom');
var n = f(e, t);
return d(n, t),
function (e) {
for (var i = [
], r = 0; r < n.length; r++) {
var s = n[r];
(a = o[s.id]).refs--,
i.push(a)
}
e && d(f(e, t), t);
for (r = 0; r < i.length; r++) {
var a;
if (0 === (a = i[r]).refs) {
for (var l = 0; l < a.parts.length; l++) a.parts[l]();
delete o[a.id]
}
}
}
};
var y,
b = (y = [
], function (e, t) {
return y[e] = t,
y.filter(Boolean).join('\n')
});
function _(e, t, n, i) {
var r = n ? '' : i.css;
if (e.styleSheet) e.styleSheet.cssText = b(t, r);
 else {
var o = document.createTextNode(r),
s = e.childNodes;
s[t] && e.removeChild(s[t]),
s.length ? e.insertBefore(o, s[t])  : e.appendChild(o)
}
}
},
function (e, t) {
e.exports = function (e) {
var t = [
];
return t.toString = function () {
return this.map(function (t) {
var n = function (e, t) {
var n = e[1] || '',
i = e[3];
if (!i) return n;
if (t && 'function' == typeof btoa) {
var r = (s = i, '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(s)))) + ' */'),
o = i.sources.map(function (e) {
return '/*# sourceURL=' + i.sourceRoot + e + ' */'
});
return [n].concat(o).concat([r]).join('\n')
}
var s;
return [n].join('\n')
}(t, e);
return t[2] ? '@media ' + t[2] + '{' + n + '}' : n
}).join('')
},
t.i = function (e, n) {
'string' == typeof e && (e = [
[null,
e,
'']
]);
for (var i = {
}, r = 0; r < this.length; r++) {
var o = this[r][0];
'number' == typeof o && (i[o] = !0)
}
for (r = 0; r < e.length; r++) {
var s = e[r];
'number' == typeof s[0] && i[s[0]] || (n && !s[2] ? s[2] = n : n && (s[2] = '(' + s[2] + ') and (' + n + ')'), t.push(s))
}
},
t
}
},
function (e, t, n) {
'use strict';
Object.defineProperty(t, '__esModule', {
value: !0
});
var i,
r = n(3),
o = (i = r) && i.__esModule ? i : {
default:
i
},
s = n(66),
a = n(19);
t.default = function (e) {
return new function (e) {
e.onmessage = function (e) {
var t = e.data,
n = new Uint8Array(t.encrypted.bytes, t.encrypted.byteOffset, t.encrypted.byteLength),
i = new Uint32Array(t.key.bytes, t.key.byteOffset, t.key.byteLength / 4),
r = new Uint32Array(t.iv.bytes, t.iv.byteOffset, t.iv.byteLength / 4);
new s.Decrypter(n, i, r, function (e, n) {
o.default.postMessage((0, a.createTransferableMessage) ({
source: t.source,
decrypted: n
}), [
n.buffer
])
})
}
}(e)
},
e.exports = t.default
},
function (e, t, n) {
'use strict';
Object.defineProperty(t, '__esModule', {
value: !0
});
t.parseCodecs = function () {
var e,
t = arguments.length <= 0 || void 0 === arguments[0] ? '' : arguments[0],
n = {
codecCount: 0
};
return n.codecCount = t.split(',').length,
n.codecCount = n.codecCount || 2,
(e = /(^|\s|,)+(avc1)([^ ,]*)/i.exec(t)) && (n.videoCodec = e[2], n.videoObjectTypeIndicator = e[3]),
n.audioProfile = /(^|\s|,)+mp4a.[0-9A-Fa-f]+\.([0-9A-Fa-f]+)/i.exec(t),
n.audioProfile = n.audioProfile && n.audioProfile[2],
n
}
},
function (e, t, n) {
'use strict';
function i(e) {
return e && e.__esModule ? e : {
default:
e
}
}
Object.defineProperty(t, '__esModule', {
value: !0
});
var r = i(n(23)),
o = i(n(13)),
s = n(52),
a = function (e, t) {
var n;
return e && (n = window.getComputedStyle(e)) ? n[t] : ''
},
l = function (e, t) {
var n = e.slice();
e.sort(function (e, i) {
var r = t(e, i);
return 0 === r ? n.indexOf(e) - n.indexOf(i)  : r
})
},
u = function (e, t) {
var n = void 0,
i = void 0;
return e.attributes.BANDWIDTH && (n = e.attributes.BANDWIDTH),
n = n || window.Number.MAX_VALUE,
t.attributes.BANDWIDTH && (i = t.attributes.BANDWIDTH),
n - (i = i || window.Number.MAX_VALUE)
};
t.comparePlaylistBandwidth = u;
t.comparePlaylistResolution = function (e, t) {
var n = void 0,
i = void 0;
return e.attributes.RESOLUTION && e.attributes.RESOLUTION.width && (n = e.attributes.RESOLUTION.width),
n = n || window.Number.MAX_VALUE,
t.attributes.RESOLUTION && t.attributes.RESOLUTION.width && (i = t.attributes.RESOLUTION.width),
n === (i = i || window.Number.MAX_VALUE) && e.attributes.BANDWIDTH && t.attributes.BANDWIDTH ? e.attributes.BANDWIDTH - t.attributes.BANDWIDTH : n - i
};
var c = function (e, t, n, i) {
var s = e.playlists.map(function (e) {
var t,
n;
return t = e.attributes.RESOLUTION && e.attributes.RESOLUTION.width,
n = e.attributes.RESOLUTION && e.attributes.RESOLUTION.height,
{
bandwidth: e.attributes.BANDWIDTH || window.Number.MAX_VALUE,
width: t,
height: n,
playlist: e
}
});
l(s, function (e, t) {
return e.bandwidth - t.bandwidth
});
var a = (s = s.filter(function (e) {
return !o.default.isIncompatible(e.playlist)
})).filter(function (e) {
return o.default.isEnabled(e.playlist)
}); a.length || (a = s.filter(function (e) {
return !o.default.isDisabled(e.playlist)
})); var u = a.filter(function (e) {
return e.bandwidth * r.default.BANDWIDTH_VARIANCE < t
}), c = u[u.length - 1], h = u.filter(function (e) {
return e.bandwidth === c.bandwidth
}) [0], d = u.filter(function (e) {
return e.width && e.height
}); l(d, function (e, t) {
return e.width - t.width
}); var f = d.filter(function (e) {
return e.width === n && e.height === i
}); c = f[f.length - 1]; var p = f.filter(function (e) {
return e.bandwidth === c.bandwidth
}) [0], v = void 0, g = void 0, m = void 0; p || (g = (v = d.filter(function (e) {
return e.width > n || e.height > i
})).filter(function (e) {
return e.width === v[0].width && e.height === v[0].height
}), c = g[g.length - 1], m = g.filter(function (e) {
return e.bandwidth === c.bandwidth
}) [0]); var A = m || p || h || a[0] || s[0]; return A ? A.playlist : null
}; t.simpleSelector = c; t.lastBandwidthSelector = function () {
return c(this.playlists.master, this.systemBandwidth, parseInt(a(this.tech_.el(), 'width'), 10), parseInt(a(this.tech_.el(), 'height'), 10))
}; t.movingAverageBandwidthSelector = function (e) {
var t = - 1;
if (e < 0 || e > 1) throw new Error('Moving average bandwidth decay must be between 0 and 1.');
return function () {
return t < 0 && (t = this.systemBandwidth),
t = e * this.systemBandwidth + (1 - e) * t,
c(this.playlists.master, t, parseInt(a(this.tech_.el(), 'width'), 10), parseInt(a(this.tech_.el(), 'height'), 10))
}
}; t.minRebufferMaxBandwidthSelector = function (e) {
var t = e.master,
n = e.currentTime,
i = e.bandwidth,
r = e.duration,
s = e.segmentDuration,
a = e.timeUntilRebuffer,
c = e.currentTimeline,
h = e.syncController,
d = t.playlists.filter(function (e) {
return !o.default.isIncompatible(e)
}), f = d.filter(o.default.isEnabled); f.length || (f = d.filter(function (e) {
return !o.default.isDisabled(e)
})); var p = f.filter(o.default.hasAttribute.bind(null, 'BANDWIDTH')).map(function (e) {
var t = h.getSyncPoint(e, r, c, n) ? 1 : 2;
return {
playlist: e,
rebufferingImpact: o.default.estimateSegmentRequestTime(s, i, e) * t - a
}
}), v = p.filter(function (e) {
return e.rebufferingImpact <= 0
}); return l(v, function (e, t) {
return u(t.playlist, e.playlist)
}), v.length ? v[0] : (l(p, function (e, t) {
return e.rebufferingImpact - t.rebufferingImpact
}), p[0] || null)
}; t.lowestBitrateCompatibleVariantSelector = function () {
var e = this.playlists.master.playlists.filter(o.default.isEnabled); return l(e, function (e, t) {
return u(e, t)
}), e.filter(function (e) {
return (0, s.parseCodecs) (e.attributes.CODECS).videoCodec
}) [0] || null
}
}, function (e, t, n) {
'use strict';
Object.defineProperty(t, '__esModule', {
value: !0
});
var i = function () {
function e(e, t) {
for (var n = 0; n < t.length; n++) {
var i = t[n];
i.enumerable = i.enumerable || !1,
i.configurable = !0,
'value' in i && (i.writable = !0),
Object.defineProperty(e, i.key, i)
}
}
return function (t, n, i) {
return n && e(t.prototype, n),
i && e(t, i),
t
}
}(),
r = function (e, t, n) {
for (var i = !0; i; ) {
var r = e,
o = t,
s = n;
i = !1,
null === r && (r = Function.prototype);
var a = Object.getOwnPropertyDescriptor(r, o);
if (void 0 !== a) {
if ('value' in a) return a.value;
var l = a.get;
if (void 0 === l) return;
return l.call(s)
}
var u = Object.getPrototypeOf(r);
if (null === u) return;
e = u,
t = o,
n = s,
i = !0,
a = u = void 0
}
};
function o(e) {
return e && e.__esModule ? e : {
default:
e
}
}
var s = o(n(13)),
a = o(n(0)),
l = o(n(133)),
u = o(n(23)),
c = o(n(3)),
h = o(n(25)),
d = n(19),
f = n(132),
p = n(32),
v = n(53),
g = function (e, t, n) {
if (!e || !t) return !1;
var i = n === e.segments.length;
return e.endList && 'open' === t.readyState && i
},
m = function (e) {
return 'number' == typeof e && isFinite(e)
},
A = function (e, t, n) {
return 'main' === e && t && n ? n.containsAudio || n.containsVideo ? t.containsVideo && !n.containsVideo ? 'Only audio found in segment when we expected video. We can\'t switch to audio only from a stream that had video. To get rid of this message, please add codec information to the manifest.' : !t.containsVideo && n.containsVideo ? 'Video found in segment when we expected only audio. We can\'t switch to a stream with video from an audio only stream. To get rid of this message, please add codec information to the manifest.' : null : 'Neither audio nor video found in segment.' : null
};
t.illegalMediaSwitch = A;
var y = function (e, t, n) {
var i = void 0;
return i = e.length && e.start(0) > 0 && e.start(0) < t ? e.start(0)  : t - 30,
Math.min(i, t - n)
};
t.safeBackBufferTrimTime = y;
var b = function (e) {
function t(e) {
var n = this,
i = arguments.length <= 1 || void 0 === arguments[1] ? {
}
 : arguments[1];
if (function (e, t) {
if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
}(this, t), r(Object.getPrototypeOf(t.prototype), 'constructor', this).call(this), !e) throw new TypeError('Initialization settings are required');
if ('function' != typeof e.currentTime) throw new TypeError('No currentTime getter specified');
if (!e.mediaSource) throw new TypeError('No MediaSource specified');
this.state = 'INIT',
this.bandwidth = e.bandwidth,
this.throughput = {
rate: 0,
count: 0
},
this.roundTrip = NaN,
this.resetStats_(),
this.mediaIndex = null,
this.hasPlayed_ = e.hasPlayed,
this.currentTime_ = e.currentTime,
this.seekable_ = e.seekable,
this.seeking_ = e.seeking,
this.duration_ = e.duration,
this.mediaSource_ = e.mediaSource,
this.hls_ = e.hls,
this.loaderType_ = e.loaderType,
this.startingMedia_ = void 0,
this.segmentMetadataTrack_ = e.segmentMetadataTrack,
this.goalBufferLength_ = e.goalBufferLength,
this.checkBufferTimeout_ = null,
this.error_ = void 0,
this.currentTimeline_ = - 1,
this.pendingSegment_ = null,
this.mimeType_ = null,
this.sourceUpdater_ = null,
this.xhrOptions_ = null,
this.activeInitSegmentId_ = null,
this.initSegments_ = {
},
this.decrypter_ = e.decrypter,
this.syncController_ = e.syncController,
this.syncPoint_ = {
segmentIndex: 0,
time: 0
},
this.syncController_.on('syncinfoupdate', function () {
return n.trigger('syncinfoupdate')
}),
this.mediaSource_.addEventListener('sourceopen', function () {
return n.ended_ = !1
}),
this.fetchAtBuffer_ = !1,
i.debug && (this.logger_ = a.default.log.bind(a.default,
'segment-loader',
this.loaderType_,
'->'))
}
return function (e, t) {
if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
e.prototype = Object.create(t && t.prototype, {
constructor: {
value: e,
enumerable: !1,
writable: !0,
configurable: !0
}
}),
t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t)  : e.__proto__ = t)
}(t, a['default'].EventTarget), i(t, [
{
key: 'resetStats_',
value: function () {
this.mediaBytesTransferred = 0,
this.mediaRequests = 0,
this.mediaRequestsAborted = 0,
this.mediaRequestsTimedout = 0,
this.mediaRequestsErrored = 0,
this.mediaTransferDuration = 0,
this.mediaSecondsLoaded = 0
}
},
{
key: 'dispose',
value: function () {
this.state = 'DISPOSED',
this.pause(),
this.abort_(),
this.sourceUpdater_ && this.sourceUpdater_.dispose(),
this.resetStats_()
}
},
{
key: 'abort',
value: function () {
'WAITING' === this.state ? (this.abort_(), this.state = 'READY', this.paused() || this.monitorBuffer_())  : this.pendingSegment_ && (this.pendingSegment_ = null)
}
},
{
key: 'abort_',
value: function () {
this.pendingSegment_ && this.pendingSegment_.abortRequests(),
this.pendingSegment_ = null
}
},
{
key: 'error',
value: function (e) {
return void 0 !== e && (this.error_ = e),
this.pendingSegment_ = null,
this.error_
}
},
{
key: 'endOfStream',
value: function () {
this.ended_ = !0,
this.pause(),
this.trigger('ended')
}
},
{
key: 'buffered_',
value: function () {
return this.sourceUpdater_ ? this.sourceUpdater_.buffered()  : a.default.createTimeRanges()
}
},
{
key: 'initSegment',
value: function (e) {
var t = !(arguments.length <= 1 || void 0 === arguments[1]) && arguments[1];
if (!e) return null;
var n = (0, d.initSegmentId) (e),
i = this.initSegments_[n];
return t && !i && e.bytes && (this.initSegments_[n] = i = {
resolvedUri: e.resolvedUri,
byterange: e.byterange,
bytes: e.bytes
}),
i || e
}
},
{
key: 'couldBeginLoading_',
value: function () {
return this.playlist_ && (this.sourceUpdater_ || this.mimeType_ && 'INIT' === this.state) && !this.paused()
}
},
{
key: 'load',
value: function () {
if (this.monitorBuffer_(), this.playlist_) {
if (this.syncController_.setDateTimeMapping(this.playlist_), 'INIT' === this.state && this.couldBeginLoading_()) return this.init_();
!this.couldBeginLoading_() || 'READY' !== this.state && 'INIT' !== this.state || (this.state = 'READY')
}
}
},
{
key: 'init_',
value: function () {
return this.state = 'READY',
this.sourceUpdater_ = new l.default(this.mediaSource_, this.mimeType_),
this.resetEverything(),
this.monitorBuffer_()
}
},
{
key: 'playlist',
value: function (e) {
var t = arguments.length <= 1 || void 0 === arguments[1] ? {
}
 : arguments[1];
if (e) {
var n = this.playlist_,
i = this.pendingSegment_;
if (this.playlist_ = e, this.xhrOptions_ = t, this.hasPlayed_() || (e.syncInfo = {
mediaSequence: e.mediaSequence,
time: 0
}), this.trigger('syncinfoupdate'), 'INIT' === this.state && this.couldBeginLoading_()) return this.init_();
if (n && n.uri === e.uri) {
var r = e.mediaSequence - n.mediaSequence;
this.logger_('mediaSequenceDiff', r),
null !== this.mediaIndex && (this.mediaIndex -= r),
i && (i.mediaIndex -= r, i.mediaIndex >= 0 && (i.segment = e.segments[i.mediaIndex])),
this.syncController_.saveExpiredSegmentInfo(n, e)
} else null !== this.mediaIndex && this.resyncLoader()
}
}
},
{
key: 'pause',
value: function () {
this.checkBufferTimeout_ && (c.default.clearTimeout(this.checkBufferTimeout_),
this.checkBufferTimeout_ = null)
}
},
{
key: 'paused',
value: function () {
return null === this.checkBufferTimeout_
}
},
{
key: 'mimeType',
value: function (e) {
this.mimeType_ || (this.mimeType_ = e, 'INIT' === this.state && this.couldBeginLoading_() && this.init_())
}
},
{
key: 'resetEverything',
value: function () {
this.ended_ = !1,
this.resetLoader(),
this.remove(0, this.duration_()),
this.trigger('reseteverything')
}
},
{
key: 'resetLoader',
value: function () {
this.fetchAtBuffer_ = !1,
this.resyncLoader()
}
},
{
key: 'resyncLoader',
value: function () {
this.mediaIndex = null,
this.syncPoint_ = null,
this.abort()
}
},
{
key: 'remove',
value: function (e, t) {
this.sourceUpdater_ && this.sourceUpdater_.remove(e, t),
(0, h.default) (e, t, this.segmentMetadataTrack_)
}
},
{
key: 'monitorBuffer_',
value: function () {
this.checkBufferTimeout_ && c.default.clearTimeout(this.checkBufferTimeout_),
this.checkBufferTimeout_ = c.default.setTimeout(this.monitorBufferTick_.bind(this), 1)
}
},
{
key: 'monitorBufferTick_',
value: function () {
'READY' === this.state && this.fillBuffer_(),
this.checkBufferTimeout_ && c.default.clearTimeout(this.checkBufferTimeout_),
this.checkBufferTimeout_ = c.default.setTimeout(this.monitorBufferTick_.bind(this), 500)
}
},
{
key: 'fillBuffer_',
value: function () {
if (!this.sourceUpdater_.updating()) {
this.syncPoint_ || (this.syncPoint_ = this.syncController_.getSyncPoint(this.playlist_, this.duration_(), this.currentTimeline_, this.currentTime_()));
var e = this.checkBuffer_(this.buffered_(), this.playlist_, this.mediaIndex, this.hasPlayed_(), this.currentTime_(), this.syncPoint_);
if (e) g(this.playlist_, this.mediaSource_, e.mediaIndex) ? this.endOfStream()  : (e.mediaIndex !== this.playlist_.segments.length - 1 || 'ended' !== this.mediaSource_.readyState || this.seeking_()) && ((e.timeline !== this.currentTimeline_ || null !== e.startOfSegment && e.startOfSegment < this.sourceUpdater_.timestampOffset()) && (this.syncController_.reset(), e.timestampOffset = e.startOfSegment), this.loadSegment_(e))
}
}
},
{
key: 'checkBuffer_',
value: function (e, t, n, i, r, o) {
var a = 0,
l = void 0;
e.length && (a = e.end(e.length - 1));
var u,
c = Math.max(0, a - r);
if (!t.segments.length) return null;
if (c >= this.goalBufferLength_()) return null;
if (!i && c >= 1) return null;
if (this.logger_('checkBuffer_', 'mediaIndex:', n, 'hasPlayed:', i, 'currentTime:', r, 'syncPoint:', o, 'fetchAtBuffer:', this.fetchAtBuffer_, 'bufferedTime:', c), null === o) return n = this.getSyncSegmentCandidate_(t),
this.logger_('getSync', 'mediaIndex:', n),
this.generateSegmentInfo_(t, n, null, !0);
if (null !== n) {
this.logger_('walkForward', 'mediaIndex:', n + 1);
var h = t.segments[n];
return l = h && h.end ? h.end : a,
this.generateSegmentInfo_(t, n + 1, l, !1)
}
this.fetchAtBuffer_ ? (n = (u = s.default.getMediaInfoForTime(t, a, o.segmentIndex, o.time)).mediaIndex, l = u.startTime) : (n = (u = s.default.getMediaInfoForTime(t, r, o.segmentIndex, o.time)).mediaIndex, l = u.startTime); return this.logger_('getMediaIndexForTime', 'mediaIndex:', n, 'startOfSegment:', l), this.generateSegmentInfo_(t, n, l, !1)
}
},
{
key: 'getSyncSegmentCandidate_',
value: function (e) {
var t = this;
if ( - 1 === this.currentTimeline_) return 0;
var n = e.segments.map(function (e, t) {
return {
timeline: e.timeline,
segmentIndex: t
}
}).filter(function (e) {
return e.timeline === t.currentTimeline_
});
return n.length ? n[Math.min(n.length - 1, 1)].segmentIndex : Math.max(e.segments.length - 1, 0)
}
},
{
key: 'generateSegmentInfo_',
value: function (e, t, n, i) {
if (t < 0 || t >= e.segments.length) return null;
var r = e.segments[t];
return {
requestId: 'segment-loader-' + Math.random(),
uri: r.resolvedUri,
mediaIndex: t,
isSyncRequest: i,
startOfSegment: n,
playlist: e,
bytes: null,
encryptedBytes: null,
timestampOffset: null,
timeline: r.timeline,
duration: r.duration,
segment: r
}
}
},
{
key: 'abortRequestEarly_',
value: function (e) {
if (this.hls_.tech_.paused() || !this.xhrOptions_.timeout || !this.playlist_.attributes.BANDWIDTH) return !1;
if (Date.now() - (e.firstBytesReceivedAt || Date.now()) < 1000) return !1;
var t = this.currentTime_(),
n = e.bandwidth,
i = this.pendingSegment_.duration,
r = s.default.estimateSegmentRequestTime(i, n, this.playlist_, e.bytesReceived),
o = (0, p.timeUntilRebuffer) (this.buffered_(), t, this.hls_.tech_.playbackRate()) - 1;
if (r <= o) return !1;
var a = (0, v.minRebufferMaxBandwidthSelector) ({
master: this.hls_.playlists.master,
currentTime: t,
bandwidth: n,
duration: this.duration_(),
segmentDuration: i,
timeUntilRebuffer: o,
currentTimeline: this.currentTimeline_,
syncController: this.syncController_
});
if (a) {
var l = r - o - a.rebufferingImpact,
c = 0.5;
return o <= p.TIME_FUDGE_FACTOR && (c = 1),
!a.playlist || a.playlist.uri === this.playlist_.uri || l < c ? !1 : (this.bandwidth = a.playlist.attributes.BANDWIDTH * u.default.BANDWIDTH_VARIANCE + 1,
this.abort(),
this.trigger('earlyabort'),
!0)
}
}
},
{
key: 'handleProgress_',
value: function (e, t) {
this.pendingSegment_ && t.requestId === this.pendingSegment_.requestId && !this.abortRequestEarly_(t.stats) && this.trigger('progress')
}
},
{
key: 'loadSegment_',
value: function (e) {
this.state = 'WAITING',
this.pendingSegment_ = e,
this.trimBackBuffer_(e),
e.abortRequests = (0, f.mediaSegmentRequest) (this.hls_.xhr, this.xhrOptions_, this.decrypter_, this.createSimplifiedSegmentObj_(e), this.handleProgress_.bind(this), this.segmentRequestFinished_.bind(this))
}
},
{
key: 'trimBackBuffer_',
value: function (e) {
var t = y(this.seekable_(), this.currentTime_(), this.playlist_.targetDuration || 10);
t > 0 && this.remove(0, t)
}
},
{
key: 'createSimplifiedSegmentObj_',
value: function (e) {
var t = e.segment,
n = {
resolvedUri: t.resolvedUri,
byterange: t.byterange,
requestId: e.requestId
};
if (t.key) {
var i = t.key.iv || new Uint32Array([0,
0,
0,
e.mediaIndex + e.playlist.mediaSequence]);
n.key = {
resolvedUri: t.key.resolvedUri,
iv: i
}
}
return t.map && (n.map = this.initSegment(t.map)),
n
}
},
{
key: 'segmentRequestFinished_',
value: function (e, t) {
if (this.mediaRequests += 1, t.stats && (this.mediaBytesTransferred += t.stats.bytesReceived, this.mediaTransferDuration += t.stats.roundTripTime), this.pendingSegment_) {
if (t.requestId === this.pendingSegment_.requestId) {
if (e) return this.pendingSegment_ = null,
this.state = 'READY',
e.code === f.REQUEST_ERRORS.ABORTED ? void (this.mediaRequestsAborted += 1)  : (this.pause(), e.code === f.REQUEST_ERRORS.TIMEOUT ? (this.mediaRequestsTimedout += 1, this.bandwidth = 1, this.roundTrip = NaN, void this.trigger('bandwidthupdate'))  : (this.mediaRequestsErrored += 1, this.error(e), void this.trigger('error')));
this.bandwidth = t.stats.bandwidth,
this.roundTrip = t.stats.roundTripTime,
t.map && (t.map = this.initSegment(t.map, !0)),
this.processSegmentResponse_(t)
}
} else this.mediaRequestsAborted += 1
}
},
{
key: 'processSegmentResponse_',
value: function (e) {
var t = this.pendingSegment_;
t.bytes = e.bytes,
e.map && (t.segment.map.bytes = e.map.bytes),
t.endOfAllRequests = e.endOfAllRequests,
this.handleSegment_()
}
},
{
key: 'handleSegment_',
value: function () {
var e = this;
if (this.pendingSegment_) {
var t = this.pendingSegment_,
n = t.segment,
i = this.syncController_.probeSegmentInfo(t);
void 0 === this.startingMedia_ && i && (i.containsAudio || i.containsVideo) && (this.startingMedia_ = {
containsAudio: i.containsAudio,
containsVideo: i.containsVideo
});
var r = A(this.loaderType_, this.startingMedia_, i);
if (r) return this.error({
message: r,
blacklistDuration: 1 / 0
}),
void this.trigger('error');
if (t.isSyncRequest) return this.trigger('syncinfoupdate'),
this.pendingSegment_ = null,
void (this.state = 'READY');
null !== t.timestampOffset && t.timestampOffset !== this.sourceUpdater_.timestampOffset() && (this.sourceUpdater_.timestampOffset(t.timestampOffset), this.trigger('timestampoffset'));
var o = this.syncController_.mappingForTimeline(t.timeline);
null !== o && this.trigger({
type: 'segmenttimemapping',
mapping: o
}),
this.state = 'APPENDING',
n.map && function () {
var t = (0, d.initSegmentId) (n.map);
if (!e.activeInitSegmentId_ || e.activeInitSegmentId_ !== t) {
var i = e.initSegment(n.map);
e.sourceUpdater_.appendBuffer(i.bytes, function () {
e.activeInitSegmentId_ = t
})
}
}(),
t.byteLength = t.bytes.byteLength,
'number' == typeof n.start && 'number' == typeof n.end ? this.mediaSecondsLoaded += n.end - n.start : this.mediaSecondsLoaded += n.duration,
this.sourceUpdater_.appendBuffer(t.bytes, this.handleUpdateEnd_.bind(this))
} else this.state = 'READY'
}
},
{
key: 'handleUpdateEnd_',
value: function () {
if (this.logger_('handleUpdateEnd_', 'segmentInfo:', this.pendingSegment_), !this.pendingSegment_) return this.state = 'READY',
void (this.paused() || this.monitorBuffer_());
var e = this.pendingSegment_,
t = e.segment,
n = null !== this.mediaIndex;
(this.pendingSegment_ = null, this.recordThroughput_(e), this.addSegmentMetadataCue_(e), this.state = 'READY', this.mediaIndex = e.mediaIndex, this.fetchAtBuffer_ = !0, this.currentTimeline_ = e.timeline, this.trigger('syncinfoupdate'), t.end && this.currentTime_() - t.end > 3 * e.playlist.targetDuration) ? this.resetEverything()  : (n && this.trigger('bandwidthupdate'), this.trigger('progress'), g(e.playlist, this.mediaSource_, e.mediaIndex + 1) && this.endOfStream(), this.paused() || this.monitorBuffer_())
}
},
{
key: 'recordThroughput_',
value: function (e) {
var t = this.throughput.rate,
n = Date.now() - e.endOfAllRequests + 1,
i = Math.floor(e.byteLength / n * 8 * 1000);
this.throughput.rate += (i - t) / ++this.throughput.count
}
},
{
key: 'logger_',
value: function () {
}
},
{
key: 'addSegmentMetadataCue_',
value: function (e) {
if (this.segmentMetadataTrack_) {
var t = e.segment,
n = t.start,
i = t.end;
if (m(n) && m(i)) {
(0, h.default) (n, i, this.segmentMetadataTrack_); var r = c.default.WebKitDataCue || c.default.VTTCue,
o = {
bandwidth: e.playlist.attributes.BANDWIDTH,
resolution: e.playlist.attributes.RESOLUTION,
codecs: e.playlist.attributes.CODECS,
byteLength: e.byteLength,
uri: e.uri,
timeline: e.timeline,
playlist: e.playlist.uri,
start: n,
end: i
},
s = new r(n, i, JSON.stringify(o));
s.value = o,
this.segmentMetadataTrack_.addCue(s)
}
}
}
}
]),
t
}();
t.default = b
},
function (e, t, n) {
'use strict';
var i,
r,
o,
s,
a,
l,
u,
c,
h,
d,
f,
p,
v,
g,
m,
A,
y,
b,
_,
w,
T,
k,
E,
S,
j,
C,
x,
B,
O,
I,
P,
R,
M,
L,
D,
U,
N,
F,
z,
H,
Q,
Y = Math.pow(2, 32) - 1;
!function () {
var e;
if (E = {
avc1: [
],
avcC: [
],
btrt: [
],
dinf: [
],
dref: [
],
esds: [
],
ftyp: [
],
hdlr: [
],
mdat: [
],
mdhd: [
],
mdia: [
],
mfhd: [
],
minf: [
],
moof: [
],
moov: [
],
mp4a: [
],
mvex: [
],
mvhd: [
],
sdtp: [
],
smhd: [
],
stbl: [
],
stco: [
],
stsc: [
],
stsd: [
],
stsz: [
],
stts: [
],
styp: [
],
tfdt: [
],
tfhd: [
],
traf: [
],
trak: [
],
trun: [
],
trex: [
],
tkhd: [
],
vmhd: [
]
}, 'undefined' != typeof Uint8Array) {
for (e in E) E.hasOwnProperty(e) && (E[e] = [
e.charCodeAt(0),
e.charCodeAt(1),
e.charCodeAt(2),
e.charCodeAt(3)
]);
S = new Uint8Array(['i'.charCodeAt(0),
's'.charCodeAt(0),
'o'.charCodeAt(0),
'm'.charCodeAt(0)]),
C = new Uint8Array(['a'.charCodeAt(0),
'v'.charCodeAt(0),
'c'.charCodeAt(0),
'1'.charCodeAt(0)]),
j = new Uint8Array([0,
0,
0,
1]),
x = new Uint8Array([0,
0,
0,
0,
0,
0,
0,
0,
118,
105,
100,
101,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
86,
105,
100,
101,
111,
72,
97,
110,
100,
108,
101,
114,
0]),
B = new Uint8Array([0,
0,
0,
0,
0,
0,
0,
0,
115,
111,
117,
110,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
83,
111,
117,
110,
100,
72,
97,
110,
100,
108,
101,
114,
0]),
O = {
video: x,
audio: B
},
R = new Uint8Array([0,
0,
0,
0,
0,
0,
0,
1,
0,
0,
0,
12,
117,
114,
108,
32,
0,
0,
0,
1]),
P = new Uint8Array([0,
0,
0,
0,
0,
0,
0,
0]),
M = new Uint8Array([0,
0,
0,
0,
0,
0,
0,
0]),
L = M,
D = new Uint8Array([0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0]),
U = M,
I = new Uint8Array([0,
0,
0,
1,
0,
0,
0,
0,
0,
0,
0,
0])
}
}(),
i = function (e) {
var t,
n,
i = [
],
r = 0;
for (t = 1; t < arguments.length; t++) i.push(arguments[t]);
for (t = i.length; t--; ) r += i[t].byteLength;
for (n = new Uint8Array(r + 8), new DataView(n.buffer, n.byteOffset, n.byteLength).setUint32(0, n.byteLength), n.set(e, 4), t = 0, r = 8; t < i.length; t++) n.set(i[t], r),
r += i[t].byteLength;
return n
},
r = function () {
return i(E.dinf, i(E.dref, R))
},
o = function (e) {
return i(E.esds, new Uint8Array([0,
0,
0,
0,
3,
25,
0,
0,
0,
4,
17,
64,
21,
0,
6,
0,
0,
0,
218,
192,
0,
0,
218,
192,
5,
2,
e.audioobjecttype << 3 | e.samplingfrequencyindex >>> 1,
e.samplingfrequencyindex << 7 | e.channelcount << 3,
6,
1,
2]))
},
s = function () {
return i(E.ftyp, S, j, S, C)
},
A = function (e) {
return i(E.hdlr, O[e])
},
a = function (e) {
return i(E.mdat, e)
},
m = function (e) {
var t = new Uint8Array([0,
0,
0,
0,
0,
0,
0,
2,
0,
0,
0,
3,
0,
1,
95,
144,
e.duration >>> 24 & 255,
e.duration >>> 16 & 255,
e.duration >>> 8 & 255,
255 & e.duration,
85,
196,
0,
0]);
return e.samplerate && (t[12] = e.samplerate >>> 24 & 255, t[13] = e.samplerate >>> 16 & 255, t[14] = e.samplerate >>> 8 & 255, t[15] = 255 & e.samplerate),
i(E.mdhd, t)
},
g = function (e) {
return i(E.mdia, m(e), A(e.type), u(e))
},
l = function (e) {
return i(E.mfhd, new Uint8Array([0,
0,
0,
0,
(4278190080 & e) >> 24,
(16711680 & e) >> 16,
(65280 & e) >> 8,
255 & e]))
},
u = function (e) {
return i(E.minf, 'video' === e.type ? i(E.vmhd, I)  : i(E.smhd, P), r(), b(e))
},
c = function (e, t) {
for (var n = [
], r = t.length; r--; ) n[r] = w(t[r]);
return i.apply(null, [
E.moof,
l(e)
].concat(n))
},
h = function (e) {
for (var t = e.length, n = [
]; t--; ) n[t] = p(e[t]);
return i.apply(null, [
E.moov,
f(4294967295)
].concat(n).concat(d(e)))
},
d = function (e) {
for (var t = e.length, n = [
]; t--; ) n[t] = T(e[t]);
return i.apply(null, [
E.mvex
].concat(n))
},
f = function (e) {
var t = new Uint8Array([0,
0,
0,
0,
0,
0,
0,
1,
0,
0,
0,
2,
0,
1,
95,
144,
(4278190080 & e) >> 24,
(16711680 & e) >> 16,
(65280 & e) >> 8,
255 & e,
0,
1,
0,
0,
1,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
1,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
1,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
64,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
255,
255,
255,
255]);
return i(E.mvhd, t)
},
y = function (e) {
var t,
n,
r = e.samples || [
],
o = new Uint8Array(4 + r.length);
for (n = 0; n < r.length; n++) t = r[n].flags,
o[n + 4] = t.dependsOn << 4 | t.isDependedOn << 2 | t.hasRedundancy;
return i(E.sdtp, o)
},
b = function (e) {
return i(E.stbl, _(e), i(E.stts, U), i(E.stsc, L), i(E.stsz, D), i(E.stco, M))
},
_ = function (e) {
return i(E.stsd, new Uint8Array([0,
0,
0,
0,
0,
0,
0,
1]), 'video' === e.type ? N(e)  : F(e))
},
N = function (e) {
var t,
n = e.sps || [
],
r = e.pps || [
],
o = [
],
s = [
];
for (t = 0; t < n.length; t++) o.push((65280 & n[t].byteLength) >>> 8),
o.push(255 & n[t].byteLength),
o = o.concat(Array.prototype.slice.call(n[t]));
for (t = 0; t < r.length; t++) s.push((65280 & r[t].byteLength) >>> 8),
s.push(255 & r[t].byteLength),
s = s.concat(Array.prototype.slice.call(r[t]));
return i(E.avc1, new Uint8Array([0,
0,
0,
0,
0,
0,
0,
1,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
(65280 & e.width) >> 8,
255 & e.width,
(65280 & e.height) >> 8,
255 & e.height,
0,
72,
0,
0,
0,
72,
0,
0,
0,
0,
0,
0,
0,
1,
19,
118,
105,
100,
101,
111,
106,
115,
45,
99,
111,
110,
116,
114,
105,
98,
45,
104,
108,
115,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
24,
17,
17]), i(E.avcC, new Uint8Array([1,
e.profileIdc,
e.profileCompatibility,
e.levelIdc,
255].concat([n.length]).concat(o).concat([r.length]).concat(s))), i(E.btrt, new Uint8Array([0,
28,
156,
128,
0,
45,
198,
192,
0,
45,
198,
192])))
},
F = function (e) {
return i(E.mp4a, new Uint8Array([0,
0,
0,
0,
0,
0,
0,
1,
0,
0,
0,
0,
0,
0,
0,
0,
(65280 & e.channelcount) >> 8,
255 & e.channelcount,
(65280 & e.samplesize) >> 8,
255 & e.samplesize,
0,
0,
0,
0,
(65280 & e.samplerate) >> 8,
255 & e.samplerate,
0,
0]), o(e))
},
v = function (e) {
var t = new Uint8Array([0,
0,
0,
7,
0,
0,
0,
0,
0,
0,
0,
0,
(4278190080 & e.id) >> 24,
(16711680 & e.id) >> 16,
(65280 & e.id) >> 8,
255 & e.id,
0,
0,
0,
0,
(4278190080 & e.duration) >> 24,
(16711680 & e.duration) >> 16,
(65280 & e.duration) >> 8,
255 & e.duration,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
1,
0,
0,
0,
0,
1,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
1,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
64,
0,
0,
0,
(65280 & e.width) >> 8,
255 & e.width,
0,
0,
(65280 & e.height) >> 8,
255 & e.height,
0,
0]);
return i(E.tkhd, t)
},
w = function (e) {
var t,
n,
r,
o,
s,
a;
return t = i(E.tfhd, new Uint8Array([0,
0,
0,
58,
(4278190080 & e.id) >> 24,
(16711680 & e.id) >> 16,
(65280 & e.id) >> 8,
255 & e.id,
0,
0,
0,
1,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0])),
s = Math.floor(e.baseMediaDecodeTime / (Y + 1)),
a = Math.floor(e.baseMediaDecodeTime % (Y + 1)),
n = i(E.tfdt, new Uint8Array([1,
0,
0,
0,
s >>> 24 & 255,
s >>> 16 & 255,
s >>> 8 & 255,
255 & s,
a >>> 24 & 255,
a >>> 16 & 255,
a >>> 8 & 255,
255 & a])),
92,
'audio' === e.type ? (r = k(e, 92), i(E.traf, t, n, r))  : (o = y(e), r = k(e, o.length + 92), i(E.traf, t, n, r, o))
},
p = function (e) {
return e.duration = e.duration || 4294967295,
i(E.trak, v(e), g(e))
},
T = function (e) {
var t = new Uint8Array([0,
0,
0,
0,
(4278190080 & e.id) >> 24,
(16711680 & e.id) >> 16,
(65280 & e.id) >> 8,
255 & e.id,
0,
0,
0,
1,
0,
0,
0,
0,
0,
0,
0,
0,
0,
1,
0,
1]);
return 'video' !== e.type && (t[t.length - 1] = 0),
i(E.trex, t)
},
Q = function (e, t) {
var n = 0,
i = 0,
r = 0,
o = 0;
return e.length && (void 0 !== e[0].duration && (n = 1), void 0 !== e[0].size && (i = 2), void 0 !== e[0].flags && (r = 4), void 0 !== e[0].compositionTimeOffset && (o = 8)),
[
0,
0,
n | i | r | o,
1,
(4278190080 & e.length) >>> 24,
(16711680 & e.length) >>> 16,
(65280 & e.length) >>> 8,
255 & e.length,
(4278190080 & t) >>> 24,
(16711680 & t) >>> 16,
(65280 & t) >>> 8,
255 & t
]
},
H = function (e, t) {
var n,
r,
o,
s;
for (t += 20 + 16 * (r = e.samples || [
]).length, n = Q(r, t), s = 0; s < r.length; s++) o = r[s],
n = n.concat([(4278190080 & o.duration) >>> 24,
(16711680 & o.duration) >>> 16,
(65280 & o.duration) >>> 8,
255 & o.duration,
(4278190080 & o.size) >>> 24,
(16711680 & o.size) >>> 16,
(65280 & o.size) >>> 8,
255 & o.size,
o.flags.isLeading << 2 | o.flags.dependsOn,
o.flags.isDependedOn << 6 | o.flags.hasRedundancy << 4 | o.flags.paddingValue << 1 | o.flags.isNonSyncSample,
61440 & o.flags.degradationPriority,
15 & o.flags.degradationPriority,
(4278190080 & o.compositionTimeOffset) >>> 24,
(16711680 & o.compositionTimeOffset) >>> 16,
(65280 & o.compositionTimeOffset) >>> 8,
255 & o.compositionTimeOffset]);
return i(E.trun, new Uint8Array(n))
},
z = function (e, t) {
var n,
r,
o,
s;
for (t += 20 + 8 * (r = e.samples || [
]).length, n = Q(r, t), s = 0; s < r.length; s++) o = r[s],
n = n.concat([(4278190080 & o.duration) >>> 24,
(16711680 & o.duration) >>> 16,
(65280 & o.duration) >>> 8,
255 & o.duration,
(4278190080 & o.size) >>> 24,
(16711680 & o.size) >>> 16,
(65280 & o.size) >>> 8,
255 & o.size]);
return i(E.trun, new Uint8Array(n))
},
k = function (e, t) {
return 'audio' === e.type ? z(e, t)  : H(e, t)
},
e.exports = {
ftyp: s,
mdat: a,
moof: c,
moov: h,
initSegment: function (e) {
var t,
n = s(),
i = h(e);
return (t = new Uint8Array(n.byteLength + i.byteLength)).set(n),
t.set(i, n.byteLength),
t
}
}
},
function (e, t, n) {
'use strict';
Object.defineProperty(t, '__esModule', {
value: !0
});
var i = function () {
function e(e, t) {
for (var n = 0; n < t.length; n++) {
var i = t[n];
i.enumerable = i.enumerable || !1,
i.configurable = !0,
'value' in i && (i.writable = !0),
Object.defineProperty(e, i.key, i)
}
}
return function (t, n, i) {
return n && e(t.prototype, n),
i && e(t, i),
t
}
}();
function r(e) {
return e && e.__esModule ? e : {
default:
e
}
}
var o = r(n(3)),
s = r(n(138)),
a = function () {
function e(t) {
!function (e, t) {
if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
}(this, e),
this.options = t || {
},
this.init()
}
return i(e, [
{
key: 'init',
value: function () {
var e;
this.transmuxer && this.transmuxer.dispose(),
this.transmuxer = new s.default.Transmuxer(this.options),
(e = this.transmuxer).on('data', function (e) {
var t = e.initSegment;
e.initSegment = {
data: t.buffer,
byteOffset: t.byteOffset,
byteLength: t.byteLength
};
var n = e.data;
e.data = n.buffer,
o.default.postMessage({
action: 'data',
segment: e,
byteOffset: n.byteOffset,
byteLength: n.byteLength
}, [
e.data
])
}), e.captionStream && e.captionStream.on('data', function (e) {
o.default.postMessage({
action: 'caption',
data: e
})
}), e.on('done', function (e) {
o.default.postMessage({
action: 'done'
})
}), e.on('gopInfo', function (e) {
o.default.postMessage({
action: 'gopInfo',
gopInfo: e
})
})
}
}, {
key: 'push',
value: function (e) {
var t = new Uint8Array(e.data, e.byteOffset, e.byteLength);
this.transmuxer.push(t)
}
}, {
key: 'reset',
value: function () {
this.init()
}
}, {
key: 'setTimestampOffset',
value: function (e) {
var t = e.timestampOffset || 0;
this.transmuxer.setBaseMediaDecodeTime(Math.round(90000 * t))
}
}, {
key: 'setAudioAppendStart',
value: function (e) {
this.transmuxer.setAudioAppendStart(Math.ceil(90000 * e.appendStart))
}
}, {
key: 'flush',
value: function (e) {
this.transmuxer.flush()
}
}, {
key: 'resetCaptions',
value: function () {
this.transmuxer.resetCaptions()
}
}, {
key: 'alignGopsWith',
value: function (e) {
this.transmuxer.alignGopsWith(e.gopsToAlignWith.slice())
}
}
]),
e
}();
t.default = function (e) {
return new function (e) {
e.onmessage = function (e) {
'init' === e.data.action && e.data.options ? this.messageHandlers = new a(e.data.options)  : (this.messageHandlers || (this.messageHandlers = new a), e.data && e.data.action && 'init' !== e.data.action && this.messageHandlers[e.data.action] && this.messageHandlers[e.data.action](e.data))
}
}(e)
},
e.exports = t.default
},
function (e, t, n) {
'use strict';
Object.defineProperty(t, '__esModule', {
value: !0
});
t.default = {
TIME_BETWEEN_CHUNKS: 1,
BYTES_PER_CHUNK: 32768
},
e.exports = t.default
},
function (e, t, n) {
'use strict';
Object.defineProperty(t, '__esModule', {
value: !0
});
var i = function () {
function e(e, t) {
for (var n = 0; n < t.length; n++) {
var i = t[n];
i.enumerable = i.enumerable || !1,
i.configurable = !0,
'value' in i && (i.writable = !0),
Object.defineProperty(e, i.key, i)
}
}
return function (t, n, i) {
return n && e(t.prototype, n),
i && e(t, i),
t
}
}();
function r(e) {
return e && e.__esModule ? e : {
default:
e
}
}
var o = r(n(3)),
s = r(n(64)),
a = function () {
function e(t) {
!function (e, t) {
if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
}(this, e),
this.options = t || {
},
this.init()
}
return i(e, [
{
key: 'init',
value: function () {
var e;
this.transmuxer && this.transmuxer.dispose(),
this.transmuxer = new s.default.Transmuxer(this.options),
(e = this.transmuxer).on('data', function (e) {
o.default.postMessage({
action: 'data',
segment: e
})
}), e.on('done', function (e) {
o.default.postMessage({
action: 'done'
})
})
}
},
{
key: 'push',
value: function (e) {
var t = new Uint8Array(e.data, e.byteOffset, e.byteLength);
this.transmuxer.push(t)
}
},
{
key: 'reset',
value: function () {
this.init()
}
},
{
key: 'flush',
value: function () {
this.transmuxer.flush()
}
},
{
key: 'resetCaptions',
value: function () {
this.transmuxer.resetCaptions()
}
}
]),
e
}();
t.default = function (e) {
return new function (e) {
e.onmessage = function (e) {
'init' === e.data.action && e.data.options ? this.messageHandlers = new a(e.data.options)  : (this.messageHandlers || (this.messageHandlers = new a), e.data && e.data.action && 'init' !== e.data.action && this.messageHandlers[e.data.action] && this.messageHandlers[e.data.action](e.data))
}
}(e)
},
e.exports = t.default
},
function (e, t, n) {
'use strict';
Object.defineProperty(t, '__esModule', {
value: !0
});
t.default = function (e, t, n) {
var i = t.player_;
if (n.captions && n.captions.length) for (var r in e.inbandTextTracks_ || (e.inbandTextTracks_ = {
}), n.captionStreams) if (!e.inbandTextTracks_[r]) {
i.tech_.trigger({
type: 'usage',
name: 'hls-608'
});
var o = i.textTracks().getTrackById(r);
e.inbandTextTracks_[r] = o || i.addRemoteTextTrack({
kind: 'captions',
id: r,
label: r
}, !1).track
}
n.metadata && n.metadata.length && !e.metadataTrack_ && (e.metadataTrack_ = i.addRemoteTextTrack({
kind: 'metadata',
label: 'Timed Metadata'
}, !1).track, e.metadataTrack_.inBandMetadataTrackDispatchType = n.metadata.dispatchType)
},
e.exports = t.default
},
function (e, t, n) {
'use strict';
var i,
r,
o,
s = n(6),
a = n(144);
(r = function () {
var e,
t,
n = 0;
r.prototype.init.call(this),
this.push = function (i) {
var r;
for (t ? ((r = new Uint8Array(t.byteLength + i.data.byteLength)).set(t), r.set(i.data, t.byteLength), t = r)  : t = i.data; n < t.byteLength - 3; n++) if (1 === t[n + 2]) {
e = n + 5;
break
}
for (; e < t.byteLength; ) switch (t[e]) {
case 0:
if (0 !== t[e - 1]) {
e += 2;
break
}
if (0 !== t[e - 2]) {
e++;
break
}
n + 3 !== e - 2 && this.trigger('data', t.subarray(n + 3, e - 2));
do {
e++
} while (1 !== t[e] && e < t.length);
n = e - 2,
e += 3;
break;
case 1:
if (0 !== t[e - 1] || 0 !== t[e - 2]) {
e += 3;
break
}
this.trigger('data', t.subarray(n + 3, e - 2)),
n = e - 2,
e += 3;
break;
default:
e += 3
}
t = t.subarray(n),
e -= n,
n = 0
},
this.flush = function () {
t && t.byteLength > 3 && this.trigger('data', t.subarray(n + 3)),
t = null,
n = 0,
this.trigger('done')
}
}).prototype = new s, o = {
100: !0,
110: !0,
122: !0,
244: !0,
44: !0,
83: !0,
86: !0,
118: !0,
128: !0,
138: !0,
139: !0,
134: !0
}, (i = function () {
var e,
t,
n,
s,
l,
u,
c,
h = new r;
i.prototype.init.call(this),
e = this,
this.push = function (e) {
'video' === e.type && (t = e.trackId, n = e.pts, s = e.dts, h.push(e))
},
h.on('data', function (i) {
var r = {
trackId: t,
pts: n,
dts: s,
data: i
};
switch (31 & i[0]) {
case 5:
r.nalUnitType = 'slice_layer_without_partitioning_rbsp_idr';
break;
case 6:
r.nalUnitType = 'sei_rbsp',
r.escapedRBSP = l(i.subarray(1));
break;
case 7:
r.nalUnitType = 'seq_parameter_set_rbsp',
r.escapedRBSP = l(i.subarray(1)),
r.config = u(r.escapedRBSP);
break;
case 8:
r.nalUnitType = 'pic_parameter_set_rbsp';
break;
case 9:
r.nalUnitType = 'access_unit_delimiter_rbsp'
}
e.trigger('data', r)
}), h.on('done', function () {
e.trigger('done')
}), this.flush = function () {
h.flush()
}, c = function (e, t) {
var n,
i = 8,
r = 8;
for (n = 0; n < e; n++) 0 !== r && (r = (i + t.readExpGolomb() + 256) % 256),
i = 0 === r ? i : r
}, l = function (e) {
for (var t, n, i = e.byteLength, r = [
], o = 1; o < i - 2; ) 0 === e[o] && 0 === e[o + 1] && 3 === e[o + 2] ? (r.push(o + 2), o += 2)  : o++;
if (0 === r.length) return e;
t = i - r.length,
n = new Uint8Array(t);
var s = 0;
for (o = 0; o < t; s++, o++) s === r[0] && (s++, r.shift()),
n[o] = e[s];
return n
}, u = function (e) {
var t,
n,
i,
r,
s,
l,
u,
h,
d,
f,
p,
v,
g,
m = 0,
A = 0,
y = 0,
b = 0,
_ = 1;
if (n = (t = new a(e)).readUnsignedByte(), r = t.readUnsignedByte(), i = t.readUnsignedByte(), t.skipUnsignedExpGolomb(), o[n] && (3 === (s = t.readUnsignedExpGolomb()) && t.skipBits(1), t.skipUnsignedExpGolomb(), t.skipUnsignedExpGolomb(), t.skipBits(1), t.readBoolean())) for (p = 3 !== s ? 8 : 12, g = 0; g < p; g++) t.readBoolean() && c(g < 6 ? 16 : 64, t);
if (t.skipUnsignedExpGolomb(), 0 === (l = t.readUnsignedExpGolomb())) t.readUnsignedExpGolomb();
 else if (1 === l) for (t.skipBits(1), t.skipExpGolomb(), t.skipExpGolomb(), u = t.readUnsignedExpGolomb(), g = 0; g < u; g++) t.skipExpGolomb();
if (t.skipUnsignedExpGolomb(), t.skipBits(1), h = t.readUnsignedExpGolomb(), d = t.readUnsignedExpGolomb(), 0 === (f = t.readBits(1)) && t.skipBits(1), t.skipBits(1), t.readBoolean() && (m = t.readUnsignedExpGolomb(), A = t.readUnsignedExpGolomb(), y = t.readUnsignedExpGolomb(), b = t.readUnsignedExpGolomb()), t.readBoolean() && t.readBoolean()) {
switch (t.readUnsignedByte()) {
case 1:
v = [
  1,
  1
];
break;
case 2:
v = [
  12,
  11
];
break;
case 3:
v = [
  10,
  11
];
break;
case 4:
v = [
  16,
  11
];
break;
case 5:
v = [
  40,
  33
];
break;
case 6:
v = [
  24,
  11
];
break;
case 7:
v = [
  20,
  11
];
break;
case 8:
v = [
  32,
  11
];
break;
case 9:
v = [
  80,
  33
];
break;
case 10:
v = [
  18,
  11
];
break;
case 11:
v = [
  15,
  11
];
break;
case 12:
v = [
  64,
  33
];
break;
case 13:
v = [
  160,
  99
];
break;
case 14:
v = [
  4,
  3
];
break;
case 15:
v = [
  3,
  2
];
break;
case 16:
v = [
  2,
  1
];
break;
case 255:
v = [
  t.readUnsignedByte() << 8 | t.readUnsignedByte(),
  t.readUnsignedByte() << 8 | t.readUnsignedByte()
]
}
v && (_ = v[0] / v[1])
}
return {
profileIdc: n,
levelIdc: i,
profileCompatibility: r,
width: Math.ceil((16 * (h + 1) - 2 * m - 2 * A) * _),
height: (2 - f) * (d + 1) * 16 - 2 * y - 2 * b
}
}
}).prototype = new s,
e.exports = {
H264Stream: i,
NalByteStream: r
}
}, function (e, t, n) {
'use strict';
var i,
r = n(6),
o = [
96000,
88200,
64000,
48000,
44100,
32000,
24000,
22050,
16000,
12000,
11025,
8000,
7350
];
(i = function () {
var e;
i.prototype.init.call(this),
this.push = function (t) {
var n,
i,
r,
s,
a,
l,
u = 0,
c = 0;
if ('audio' === t.type) for (e ? (s = e, (e = new Uint8Array(s.byteLength + t.data.byteLength)).set(s), e.set(t.data, s.byteLength))  : e = t.data; u + 5 < e.length; ) if (255 === e[u] && 240 == (246 & e[u + 1])) {
if (i = 2 * (1 & ~e[u + 1]), n = (3 & e[u + 3]) << 11 | e[u + 4] << 3 | (224 & e[u + 5]) >> 5, l = 90000 * (a = 1024 * (1 + (3 & e[u + 6]))) / o[(60 & e[u + 2]) >>> 2], r = u + n, e.byteLength < r) return;
if (this.trigger('data', {
pts: t.pts + c * l,
dts: t.dts + c * l,
sampleCount: a,
audioobjecttype: 1 + (e[u + 2] >>> 6 & 3),
channelcount: (1 & e[u + 2]) << 2 | (192 & e[u + 3]) >>> 6,
samplerate: o[(60 & e[u + 2]) >>> 2],
samplingfrequencyindex: (60 & e[u + 2]) >>> 2,
samplesize: 16,
data: e.subarray(u + 7 + i, r)
}), e.byteLength === r) return void (e = void 0);
c++,
e = e.subarray(r)
} else u++
},
this.flush = function () {
this.trigger('done')
}
}).prototype = new r,
e.exports = i
}, function (e, t, n) {
'use strict';
var i = n(6),
r = function (e, t) {
var n = 1;
for (e > t && (n = - 1); Math.abs(t - e) > 4294967296; ) e += 8589934592 * n;
return e
},
o = function (e) {
var t,
n;
o.prototype.init.call(this),
this.type_ = e,
this.push = function (e) {
e.type === this.type_ && (void 0 === n && (n = e.dts), e.dts = r(e.dts, n), e.pts = r(e.pts, n), t = e.dts, this.trigger('data', e))
},
this.flush = function () {
n = t,
this.trigger('done')
},
this.discontinuity = function () {
n = void 0,
t = void 0
}
};
o.prototype = new i,
e.exports = {
TimestampRolloverStream: o,
handleRollover: r
}
}, function (e, t, n) {
'use strict';
var i,
r,
o,
s = n(6),
a = n(146),
l = n(18),
u = n(62).TimestampRolloverStream,
c = n(18);
(i = function () {
var e = new Uint8Array(188),
t = 0;
i.prototype.init.call(this),
this.push = function (n) {
var i,
r = 0,
o = 188;
for (t ? ((i = new Uint8Array(n.byteLength + t)).set(e.subarray(0, t)), i.set(n, t), t = 0)  : i = n; o < i.byteLength; ) 71 !== i[r] || 71 !== i[o] ? (r++, o++)  : (this.trigger('data', i.subarray(r, o)), r += 188, o += 188);
r < i.byteLength && (e.set(i.subarray(r), 0), t = i.byteLength - r)
},
this.flush = function () {
188 === t && 71 === e[0] && (this.trigger('data', e), t = 0),
this.trigger('done')
}
}).prototype = new s,
(r = function () {
var e,
t,
n,
i;
r.prototype.init.call(this),
i = this,
this.packetsWaitingForPmt = [
],
this.programMapTable = void 0,
e = function (e, i) {
var r = 0;
i.payloadUnitStartIndicator && (r += e[r] + 1),
'pat' === i.type ? t(e.subarray(r), i)  : n(e.subarray(r), i)
},
t = function (e, t) {
t.section_number = e[7],
t.last_section_number = e[8],
i.pmtPid = (31 & e[10]) << 8 | e[11],
t.pmtPid = i.pmtPid
},
n = function (e, t) {
var n,
r;
if (1 & e[5]) {
for (i.programMapTable = {
video: null,
audio: null,
'timed-metadata': {
}
}, n = 3 + ((15 & e[1]) << 8 | e[2]) - 4, r = 12 + ((15 & e[10]) << 8 | e[11]); r < n; ) {
var o = e[r],
s = (31 & e[r + 1]) << 8 | e[r + 2];
o === l.H264_STREAM_TYPE && null === i.programMapTable.video ? i.programMapTable.video = s : o === l.ADTS_STREAM_TYPE && null === i.programMapTable.audio ? i.programMapTable.audio = s : o === l.METADATA_STREAM_TYPE && (i.programMapTable['timed-metadata'][s] = o),
r += 5 + ((15 & e[r + 3]) << 8 | e[r + 4])
}
t.programMapTable = i.programMapTable
}
},
this.push = function (t) {
var n = {
},
i = 4;
if (n.payloadUnitStartIndicator = !!(64 & t[1]), n.pid = 31 & t[1], n.pid <<= 8, n.pid |= t[2], (48 & t[3]) >>> 4 > 1 && (i += t[i] + 1), 0 === n.pid) n.type = 'pat',
e(t.subarray(i), n),
this.trigger('data', n);
 else if (n.pid === this.pmtPid) for (n.type = 'pmt', e(t.subarray(i), n), this.trigger('data', n); this.packetsWaitingForPmt.length; ) this.processPes_.apply(this, this.packetsWaitingForPmt.shift());
 else void 0 === this.programMapTable ? this.packetsWaitingForPmt.push([t,
i,
n])  : this.processPes_(t, i, n)
},
this.processPes_ = function (e, t, n) {
n.pid === this.programMapTable.video ? n.streamType = l.H264_STREAM_TYPE : n.pid === this.programMapTable.audio ? n.streamType = l.ADTS_STREAM_TYPE : n.streamType = this.programMapTable['timed-metadata'][n.pid],
n.type = 'pes',
n.data = e.subarray(t),
this.trigger('data', n)
}
}).prototype = new s,
r.STREAM_TYPES = {
h264: 27,
adts: 15
},
(o = function () {
var e = this,
t = {
data: [
],
size: 0
},
n = {
data: [
],
size: 0
},
i = {
data: [
],
size: 0
},
r = function (t, n, i) {
var r,
o,
s = new Uint8Array(t.size),
a = {
type: n
},
l = 0,
u = 0;
if (t.data.length && !(t.size < 9)) {
for (a.trackId = t.data[0].pid, l = 0; l < t.data.length; l++) o = t.data[l],
s.set(o.data, u),
u += o.data.byteLength;
var c,
h,
d;
c = s,
(h = a).packetLength = 6 + (c[4] << 8 | c[5]),
h.dataAlignmentIndicator = 0 != (4 & c[6]),
192 & (d = c[7]) && (h.pts = (14 & c[9]) << 27 | (255 & c[10]) << 20 | (254 & c[11]) << 12 | (255 & c[12]) << 5 | (254 & c[13]) >>> 3, h.pts *= 4, h.pts += (6 & c[13]) >>> 1, h.dts = h.pts, 64 & d && (h.dts = (14 & c[14]) << 27 | (255 & c[15]) << 20 | (254 & c[16]) << 12 | (255 & c[17]) << 5 | (254 & c[18]) >>> 3, h.dts *= 4, h.dts += (6 & c[18]) >>> 1)),
h.data = c.subarray(9 + c[8]),
r = 'video' === n || a.packetLength <= t.size,
(i || r) && (t.size = 0, t.data.length = 0),
r && e.trigger('data', a)
}
};
o.prototype.init.call(this),
this.push = function (o) {
({
pat: function () {
},
pes: function () {
var e,
s;
switch (o.streamType) {
case l.H264_STREAM_TYPE:
case c.H264_STREAM_TYPE:
  e = t,
  s = 'video';
  break;
case l.ADTS_STREAM_TYPE:
  e = n,
  s = 'audio';
  break;
case l.METADATA_STREAM_TYPE:
  e = i,
  s = 'timed-metadata';
  break;
default:
  return
}
o.payloadUnitStartIndicator && r(e, s, !0),
e.data.push(o),
e.size += o.data.byteLength
},
pmt: function () {
var t = {
type: 'metadata',
tracks: [
]
},
n = o.programMapTable;
null !== n.video && t.tracks.push({
timelineStartInfo: {
  baseMediaDecodeTime: 0
},
id: + n.video,
codec: 'avc',
type: 'video'
}),
null !== n.audio && t.tracks.push({
timelineStartInfo: {
  baseMediaDecodeTime: 0
},
id: + n.audio,
codec: 'adts',
type: 'audio'
}),
e.trigger('data', t)
}
}) [o.type]()
},
this.flush = function () {
r(t, 'video'),
r(n, 'audio'),
r(i, 'timed-metadata'),
this.trigger('done')
}
}).prototype = new s; var h = {
PAT_PID: 0,
MP2T_PACKET_LENGTH: 188,
TransportPacketStream: i,
TransportParseStream: r,
ElementaryStream: o,
TimestampRolloverStream: u,
CaptionStream: a.CaptionStream,
Cea608Stream: a.Cea608Stream,
MetadataStream: n(145)
}; for (var d in l) l.hasOwnProperty(d) && (h[d] = l[d]); e.exports = h
},
function (e, t, n) {
e.exports = {
tag: n(36),
Transmuxer: n(147),
getFlvHeader: n(141)
}
},
function (e, t, n) {
'use strict';
Object.defineProperty(t, '__esModule', {
value: !0
});
var i = function () {
function e(e, t) {
for (var n = 0; n < t.length; n++) {
var i = t[n];
i.enumerable = i.enumerable || !1,
i.configurable = !0,
'value' in i && (i.writable = !0),
Object.defineProperty(e, i.key, i)
}
}
return function (t, n, i) {
return n && e(t.prototype, n),
i && e(t, i),
t
}
}(),
r = function (e, t, n) {
for (var i = !0; i; ) {
var r = e,
o = t,
s = n;
i = !1,
null === r && (r = Function.prototype);
var a = Object.getOwnPropertyDescriptor(r, o);
if (void 0 !== a) {
if ('value' in a) return a.value;
var l = a.get;
if (void 0 === l) return;
return l.call(s)
}
var u = Object.getPrototypeOf(r);
if (null === u) return;
e = u,
t = o,
n = s,
i = !0,
a = u = void 0
}
};
var o,
s = n(154),
a = (o = s) && o.__esModule ? o : {
default:
o
},
l = function (e) {
function t() {
!function (e, t) {
if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
}(this, t),
r(Object.getPrototypeOf(t.prototype), 'constructor', this).call(this, a.default), this.jobs = [
], this.delay = 1, this.timeout_ = null
}
return function (e, t) {
if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
e.prototype = Object.create(t && t.prototype, {
constructor: {
value: e,
enumerable: !1,
writable: !0,
configurable: !0
}
}),
t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t)  : e.__proto__ = t)
}(t, a['default']),
i(t, [
{
key: 'processJob_',
value: function () {
this.jobs.shift() (),
this.jobs.length ? this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay)  : this.timeout_ = null
}
},
{
key: 'push',
value: function (e) {
this.jobs.push(e),
this.timeout_ || (this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay))
}
}
]),
t
}();
t.default = l,
e.exports = t.default
},
function (e, t, n) {
'use strict';
Object.defineProperty(t, '__esModule', {
value: !0
});
var i,
r = n(156),
o = n(65),
s = (i = o) && i.__esModule ? i : {
default:
i
};
t.default = {
decrypt: r.decrypt,
Decrypter: r.Decrypter,
AsyncStream: s.default
},
e.exports = t.default
},
function (e, t, n) {
'use strict';
Object.defineProperty(t, '__esModule', {
value: !0
});
t.default = {
},
e.exports = t.default
},
function (e, t, n) {
var i;
e.exports = (i = n(1), n(26), function () {
var e = i,
t = e.lib.Hasher,
n = e.x64,
r = n.Word,
o = n.WordArray,
s = e.algo;
function a() {
return r.create.apply(r, arguments)
}
var l = [
a(1116352408, 3609767458),
a(1899447441, 602891725),
a(3049323471, 3964484399),
a(3921009573, 2173295548),
a(961987163, 4081628472),
a(1508970993, 3053834265),
a(2453635748, 2937671579),
a(2870763221, 3664609560),
a(3624381080, 2734883394),
a(310598401, 1164996542),
a(607225278, 1323610764),
a(1426881987, 3590304994),
a(1925078388, 4068182383),
a(2162078206, 991336113),
a(2614888103, 633803317),
a(3248222580, 3479774868),
a(3835390401, 2666613458),
a(4022224774, 944711139),
a(264347078, 2341262773),
a(604807628, 2007800933),
a(770255983, 1495990901),
a(1249150122, 1856431235),
a(1555081692, 3175218132),
a(1996064986, 2198950837),
a(2554220882, 3999719339),
a(2821834349, 766784016),
a(2952996808, 2566594879),
a(3210313671, 3203337956),
a(3336571891, 1034457026),
a(3584528711, 2466948901),
a(113926993, 3758326383),
a(338241895, 168717936),
a(666307205, 1188179964),
a(773529912, 1546045734),
a(1294757372, 1522805485),
a(1396182291, 2643833823),
a(1695183700, 2343527390),
a(1986661051, 1014477480),
a(2177026350, 1206759142),
a(2456956037, 344077627),
a(2730485921, 1290863460),
a(2820302411, 3158454273),
a(3259730800, 3505952657),
a(3345764771, 106217008),
a(3516065817, 3606008344),
a(3600352804, 1432725776),
a(4094571909, 1467031594),
a(275423344, 851169720),
a(430227734, 3100823752),
a(506948616, 1363258195),
a(659060556, 3750685593),
a(883997877, 3785050280),
a(958139571, 3318307427),
a(1322822218, 3812723403),
a(1537002063, 2003034995),
a(1747873779, 3602036899),
a(1955562222, 1575990012),
a(2024104815, 1125592928),
a(2227730452, 2716904306),
a(2361852424, 442776044),
a(2428436474, 593698344),
a(2756734187, 3733110249),
a(3204031479, 2999351573),
a(3329325298, 3815920427),
a(3391569614, 3928383900),
a(3515267271, 566280711),
a(3940187606, 3454069534),
a(4118630271, 4000239992),
a(116418474, 1914138554),
a(174292421, 2731055270),
a(289380356, 3203993006),
a(460393269, 320620315),
a(685471733, 587496836),
a(852142971, 1086792851),
a(1017036298, 365543100),
a(1126000580, 2618297676),
a(1288033470, 3409855158),
a(1501505948, 4234509866),
a(1607167915, 987167468),
a(1816402316, 1246189591)
],
u = [
];
!function () {
for (var e = 0; e < 80; e++) u[e] = a()
}();
var c = s.SHA512 = t.extend({
_doReset: function () {
this._hash = new o.init([new r.init(1779033703, 4089235720),
new r.init(3144134277, 2227873595),
new r.init(1013904242, 4271175723),
new r.init(2773480762, 1595750129),
new r.init(1359893119, 2917565137),
new r.init(2600822924, 725511199),
new r.init(528734635, 4215389547),
new r.init(1541459225, 327033209)])
},
_doProcessBlock: function (e, t) {
for (var n = this._hash.words, i = n[0], r = n[1], o = n[2], s = n[3], a = n[4], c = n[5], h = n[6], d = n[7], f = i.high, p = i.low, v = r.high, g = r.low, m = o.high, A = o.low, y = s.high, b = s.low, _ = a.high, w = a.low, T = c.high, k = c.low, E = h.high, S = h.low, j = d.high, C = d.low, x = f, B = p, O = v, I = g, P = m, R = A, M = y, L = b, D = _, U = w, N = T, F = k, z = E, H = S, Q = j, Y = C, V = 0; V < 80; V++) {
var G = u[V];
if (V < 16) var W = G.high = 0 | e[t + 2 * V],
q = G.low = 0 | e[t + 2 * V + 1];
 else {
var Z = u[V - 15],
X = Z.high,
K = Z.low,
J = (X >>> 1 | K << 31) ^ (X >>> 8 | K << 24) ^ X >>> 7,
$ = (K >>> 1 | X << 31) ^ (K >>> 8 | X << 24) ^ (K >>> 7 | X << 25),
ee = u[V - 2],
te = ee.high,
ne = ee.low,
ie = (te >>> 19 | ne << 13) ^ (te << 3 | ne >>> 29) ^ te >>> 6,
re = (ne >>> 19 | te << 13) ^ (ne << 3 | te >>> 29) ^ (ne >>> 6 | te << 26),
oe = u[V - 7],
se = oe.high,
ae = oe.low,
le = u[V - 16],
ue = le.high,
ce = le.low;
W = (W = (W = J + se + ((q = $ + ae) >>> 0 < $ >>> 0 ? 1 : 0)) + ie + ((q += re) >>> 0 < re >>> 0 ? 1 : 0)) + ue + ((q += ce) >>> 0 < ce >>> 0 ? 1 : 0),
G.high = W,
G.low = q
}
var he,
de = D & N ^ ~D & z,
fe = U & F ^ ~U & H,
pe = x & O ^ x & P ^ O & P,
ve = B & I ^ B & R ^ I & R,
ge = (x >>> 28 | B << 4) ^ (x << 30 | B >>> 2) ^ (x << 25 | B >>> 7),
me = (B >>> 28 | x << 4) ^ (B << 30 | x >>> 2) ^ (B << 25 | x >>> 7),
Ae = (D >>> 14 | U << 18) ^ (D >>> 18 | U << 14) ^ (D << 23 | U >>> 9),
ye = (U >>> 14 | D << 18) ^ (U >>> 18 | D << 14) ^ (U << 23 | D >>> 9),
be = l[V],
_e = be.high,
we = be.low,
Te = Q + Ae + ((he = Y + ye) >>> 0 < Y >>> 0 ? 1 : 0),
ke = me + ve;
Q = z,
Y = H,
z = N,
H = F,
N = D,
F = U,
D = M + (Te = (Te = (Te = Te + de + ((he += fe) >>> 0 < fe >>> 0 ? 1 : 0)) + _e + ((he += we) >>> 0 < we >>> 0 ? 1 : 0)) + W + ((he += q) >>> 0 < q >>> 0 ? 1 : 0)) + ((U = L + he | 0) >>> 0 < L >>> 0 ? 1 : 0) | 0,
M = P,
L = R,
P = O,
R = I,
O = x,
I = B,
x = Te + (ge + pe + (ke >>> 0 < me >>> 0 ? 1 : 0)) + ((B = he + ke | 0) >>> 0 < he >>> 0 ? 1 : 0) | 0
}
p = i.low = p + B,
i.high = f + x + (p >>> 0 < B >>> 0 ? 1 : 0),
g = r.low = g + I,
r.high = v + O + (g >>> 0 < I >>> 0 ? 1 : 0),
A = o.low = A + R,
o.high = m + P + (A >>> 0 < R >>> 0 ? 1 : 0),
b = s.low = b + L,
s.high = y + M + (b >>> 0 < L >>> 0 ? 1 : 0),
w = a.low = w + U,
a.high = _ + D + (w >>> 0 < U >>> 0 ? 1 : 0),
k = c.low = k + F,
c.high = T + N + (k >>> 0 < F >>> 0 ? 1 : 0),
S = h.low = S + H,
h.high = E + z + (S >>> 0 < H >>> 0 ? 1 : 0),
C = d.low = C + Y,
d.high = j + Q + (C >>> 0 < Y >>> 0 ? 1 : 0)
},
_doFinalize: function () {
var e = this._data,
t = e.words,
n = 8 * this._nDataBytes,
i = 8 * e.sigBytes;
return t[i >>> 5] |= 128 << 24 - i % 32,
t[30 + (i + 128 >>> 10 << 5)] = Math.floor(n / 4294967296),
t[31 + (i + 128 >>> 10 << 5)] = n,
e.sigBytes = 4 * t.length,
this._process(),
this._hash.toX32()
},
clone: function () {
var e = t.clone.call(this);
return e._hash = this._hash.clone(),
e
},
blockSize: 32
});
e.SHA512 = t._createHelper(c),
e.HmacSHA512 = t._createHmacHelper(c)
}(), i.SHA512)
},
function (e, t, n) {
var i;
e.exports = (i = n(1), function (e) {
var t = i,
n = t.lib,
r = n.WordArray,
o = n.Hasher,
s = t.algo,
a = [
],
l = [
];
!function () {
function t(t) {
for (var n = e.sqrt(t), i = 2; i <= n; i++) if (!(t % i)) return !1;
return !0
}
function n(e) {
return 4294967296 * (e - (0 | e)) | 0
}
for (var i = 2, r = 0; r < 64; ) t(i) && (r < 8 && (a[r] = n(e.pow(i, 0.5))), l[r] = n(e.pow(i, 1 / 3)), r++),
i++
}();
var u = [
],
c = s.SHA256 = o.extend({
_doReset: function () {
this._hash = new r.init(a.slice(0))
},
_doProcessBlock: function (e, t) {
for (var n = this._hash.words, i = n[0], r = n[1], o = n[2], s = n[3], a = n[4], c = n[5], h = n[6], d = n[7], f = 0; f < 64; f++) {
if (f < 16) u[f] = 0 | e[t + f];
 else {
var p = u[f - 15],
v = (p << 25 | p >>> 7) ^ (p << 14 | p >>> 18) ^ p >>> 3,
g = u[f - 2],
m = (g << 15 | g >>> 17) ^ (g << 13 | g >>> 19) ^ g >>> 10;
u[f] = v + u[f - 7] + m + u[f - 16]
}
var A = i & r ^ i & o ^ r & o,
y = (i << 30 | i >>> 2) ^ (i << 19 | i >>> 13) ^ (i << 10 | i >>> 22),
b = d + ((a << 26 | a >>> 6) ^ (a << 21 | a >>> 11) ^ (a << 7 | a >>> 25)) + (a & c ^ ~a & h) + l[f] + u[f];
d = h,
h = c,
c = a,
a = s + b | 0,
s = o,
o = r,
r = i,
i = b + (y + A) | 0
}
n[0] = n[0] + i | 0,
n[1] = n[1] + r | 0,
n[2] = n[2] + o | 0,
n[3] = n[3] + s | 0,
n[4] = n[4] + a | 0,
n[5] = n[5] + c | 0,
n[6] = n[6] + h | 0,
n[7] = n[7] + d | 0
},
_doFinalize: function () {
var t = this._data,
n = t.words,
i = 8 * this._nDataBytes,
r = 8 * t.sigBytes;
return n[r >>> 5] |= 128 << 24 - r % 32,
n[14 + (r + 64 >>> 9 << 4)] = e.floor(i / 4294967296),
n[15 + (r + 64 >>> 9 << 4)] = i,
t.sigBytes = 4 * n.length,
this._process(),
this._hash
},
clone: function () {
var e = o.clone.call(this);
return e._hash = this._hash.clone(),
e
}
});
t.SHA256 = o._createHelper(c),
t.HmacSHA256 = o._createHmacHelper(c)
}(Math), i.SHA256)
},
function (e, t, n) {
'use strict';
(function (i) {
Object.defineProperty(t, '__esModule', {
value: !0
});
var r,
o = n(3),
s = ((r = o) && r.__esModule, [
0,
10,
13,
34,
38,
92
]),
a = 7;
t.default = function (e) {
var t,
n = 'string' == typeof e ? e : (t = e, i.from(t).toString('utf-8')),
r = [
],
o = 0,
l = 0;
function u(e) {
o |= (e <<= 1) >>> l,
(l += 5) >= 45 && (r.push(o), o = e << 5 - (l -= 45) & 255)
}
for (var c = 0; c < n.length; c++) {
var h = n.charCodeAt(c);
if (h > 127) {
var d = h >>> 45 & 5;
d != a && u(s[d]),
u(127 & h)
} else u(h)
}
var f = '';
try {
f = new TextDecoder('utf-8').decode(new Uint8Array(r))
} catch (e) {
r.forEach(function (e) {
f += String.fromCharCode(e)
})
}
return f
},
e.exports = t.default
}).call(this, n(12).Buffer)
}, function (e, t, n) {
'use strict';
(function (n) {
Object.defineProperty(t, '__esModule', {
value: !0
});
var i = {
encode: function (e, t) {
return new n(r(e, t), 'utf8').toString('base64')
},
decode: function (e, t) {
return r(e, t = new n(t, 'base64').toString('utf8'))
}
};
function r(e, t) {
for (var n = '', i = 0; i < t.length; i++) {
var r = t.charCodeAt(i),
o = e.charCodeAt(i % e.length);
n += String.fromCharCode(r ^ o)
}
return n
}
t.default = i,
e.exports = t.default
}).call(this, n(12).Buffer)
}, function (e, t, n) {
'use strict';
var i = n(74);
function r(e) {
i.call(this, e)
}
n(2).inherits(r, i),
r.prototype.readData = function (e) {
if (this.checkOffset(e), 0 === e) return new Uint8Array(0);
var t = this.data.subarray(this.zero + this.index, this.zero + this.index + e);
return this.index += e,
t
},
e.exports = r
}, function (e, t, n) {
'use strict';
var i = n(2);
function r(e) {
this.data = e,
this.length = e.length,
this.index = 0,
this.zero = 0
}
r.prototype = {
checkOffset: function (e) {
this.checkIndex(this.index + e)
},
checkIndex: function (e) {
if (this.length < this.zero + e || e < 0) throw new Error('End of data reached (data length = ' + this.length + ', asked index = ' + e + '). Corrupted zip ?')
},
setIndex: function (e) {
this.checkIndex(e),
this.index = e
},
skip: function (e) {
this.setIndex(this.index + e)
},
byteAt: function (e) {
},
readInt: function (e) {
var t,
n = 0;
for (this.checkOffset(e), t = this.index + e - 1; t >= this.index; t--) n = (n << 8) + this.byteAt(t);
return this.index += e,
n
},
readString: function (e) {
return i.transformTo('string', this.readData(e))
},
readData: function (e) {
},
lastIndexOfSignature: function (e) {
},
readAndCheckSignature: function (e) {
},
readDate: function () {
var e = this.readInt(4);
return new Date(Date.UTC(1980 + (e >> 25 & 127), (e >> 21 & 15) - 1, e >> 16 & 31, e >> 11 & 31, e >> 5 & 63, (31 & e) << 1))
}
},
e.exports = r
}, function (e, t, n) {
'use strict';
var i = n(73);
function r(e) {
i.call(this, e);
for (var t = 0; t < this.data.length; t++) e[t] = 255 & e[t]
}
n(2).inherits(r, i),
r.prototype.byteAt = function (e) {
return this.data[this.zero + e]
},
r.prototype.lastIndexOfSignature = function (e) {
for (var t = e.charCodeAt(0), n = e.charCodeAt(1), i = e.charCodeAt(2), r = e.charCodeAt(3), o = this.length - 4; o >= 0; --o) if (this.data[o] === t && this.data[o + 1] === n && this.data[o + 2] === i && this.data[o + 3] === r) return o - this.zero;
return - 1
},
r.prototype.readAndCheckSignature = function (e) {
var t = e.charCodeAt(0),
n = e.charCodeAt(1),
i = e.charCodeAt(2),
r = e.charCodeAt(3),
o = this.readData(4);
return t === o[0] && n === o[1] && i === o[2] && r === o[3]
},
r.prototype.readData = function (e) {
if (this.checkOffset(e), 0 === e) return [];
var t = this.data.slice(this.zero + this.index, this.zero + this.index + e);
return this.index += e,
t
},
e.exports = r
}, function (e, t, n) {
'use strict';
var i = n(2),
r = n(9),
o = n(74),
s = n(190),
a = n(189),
l = n(72);
e.exports = function (e) {
var t = i.getTypeOf(e);
return i.checkSupport(t),
'string' !== t || r.uint8array ? 'nodebuffer' === t ? new a(e)  : r.uint8array ? new l(i.transformTo('uint8array', e))  : new o(i.transformTo('array', e))  : new s(e)
}
}, function (e, t, n) {
'use strict';
t.LOCAL_FILE_HEADER = 'PK',
t.CENTRAL_FILE_HEADER = 'PK',
t.CENTRAL_DIRECTORY_END = 'PK',
t.ZIP64_CENTRAL_DIRECTORY_LOCATOR = 'PK',
t.ZIP64_CENTRAL_DIRECTORY_END = 'PK',
t.DATA_DESCRIPTOR = 'PK'
}, function (e, t, n) {
'use strict';
e.exports = {
Z_NO_FLUSH: 0,
Z_PARTIAL_FLUSH: 1,
Z_SYNC_FLUSH: 2,
Z_FULL_FLUSH: 3,
Z_FINISH: 4,
Z_BLOCK: 5,
Z_TREES: 6,
Z_OK: 0,
Z_STREAM_END: 1,
Z_NEED_DICT: 2,
Z_ERRNO: - 1,
Z_STREAM_ERROR: - 2,
Z_DATA_ERROR: - 3,
Z_BUF_ERROR: - 5,
Z_NO_COMPRESSION: 0,
Z_BEST_SPEED: 1,
Z_BEST_COMPRESSION: 9,
Z_DEFAULT_COMPRESSION: - 1,
Z_FILTERED: 1,
Z_HUFFMAN_ONLY: 2,
Z_RLE: 3,
Z_FIXED: 4,
Z_DEFAULT_STRATEGY: 0,
Z_BINARY: 0,
Z_TEXT: 1,
Z_UNKNOWN: 2,
Z_DEFLATED: 8
}
}, function (e, t, n) {
'use strict';
e.exports = function () {
this.input = null,
this.next_in = 0,
this.avail_in = 0,
this.total_in = 0,
this.output = null,
this.next_out = 0,
this.avail_out = 0,
this.total_out = 0,
this.msg = '',
this.state = null,
this.data_type = 2,
this.adler = 0
}
}, function (e, t, n) {
'use strict';
var i = n(8),
r = !0,
o = !0;
try {
String.fromCharCode.apply(null, [
0
])
} catch (e) {
r = !1
}
try {
String.fromCharCode.apply(null, new Uint8Array(1))
} catch (e) {
o = !1
}
for (var s = new i.Buf8(256), a = 0; a < 256; a++) s[a] = a >= 252 ? 6 : a >= 248 ? 5 : a >= 240 ? 4 : a >= 224 ? 3 : a >= 192 ? 2 : 1;
function l(e, t) {
if (t < 65537 && (e.subarray && o || !e.subarray && r)) return String.fromCharCode.apply(null, i.shrinkBuf(e, t));
for (var n = '', s = 0; s < t; s++) n += String.fromCharCode(e[s]);
return n
}
s[254] = s[254] = 1,
t.string2buf = function (e) {
var t,
n,
r,
o,
s,
a = e.length,
l = 0;
for (o = 0; o < a; o++) 55296 == (64512 & (n = e.charCodeAt(o))) && o + 1 < a && 56320 == (64512 & (r = e.charCodeAt(o + 1))) && (n = 65536 + (n - 55296 << 10) + (r - 56320), o++),
l += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4;
for (t = new i.Buf8(l), s = 0, o = 0; s < l; o++) 55296 == (64512 & (n = e.charCodeAt(o))) && o + 1 < a && 56320 == (64512 & (r = e.charCodeAt(o + 1))) && (n = 65536 + (n - 55296 << 10) + (r - 56320), o++),
n < 128 ? t[s++] = n : n < 2048 ? (t[s++] = 192 | n >>> 6, t[s++] = 128 | 63 & n)  : n < 65536 ? (t[s++] = 224 | n >>> 12, t[s++] = 128 | n >>> 6 & 63, t[s++] = 128 | 63 & n)  : (t[s++] = 240 | n >>> 18, t[s++] = 128 | n >>> 12 & 63, t[s++] = 128 | n >>> 6 & 63, t[s++] = 128 | 63 & n);
return t
},
t.buf2binstring = function (e) {
return l(e, e.length)
},
t.binstring2buf = function (e) {
for (var t = new i.Buf8(e.length), n = 0, r = t.length; n < r; n++) t[n] = e.charCodeAt(n);
return t
},
t.buf2string = function (e, t) {
var n,
i,
r,
o,
a = t || e.length,
u = new Array(2 * a);
for (i = 0, n = 0; n < a; ) if ((r = e[n++]) < 128) u[i++] = r;
 else if ((o = s[r]) > 4) u[i++] = 65533,
n += o - 1;
 else {
for (r &= 2 === o ? 31 : 3 === o ? 15 : 7; o > 1 && n < a; ) r = r << 6 | 63 & e[n++],
o--;
o > 1 ? u[i++] = 65533 : r < 65536 ? u[i++] = r : (r -= 65536, u[i++] = 55296 | r >> 10 & 1023, u[i++] = 56320 | 1023 & r)
}
return l(u, i)
},
t.utf8border = function (e, t) {
var n;
for ((t = t || e.length) > e.length && (t = e.length), n = t - 1; n >= 0 && 128 == (192 & e[n]); ) n--;
return n < 0 ? t : 0 === n ? t : n + s[e[n]] > t ? n : t
}
}, function (e, t, n) {
'use strict';
var i = function () {
for (var e, t = [
], n = 0; n < 256; n++) {
e = n;
for (var i = 0; i < 8; i++) e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
t[n] = e
}
return t
}();
e.exports = function (e, t, n, r) {
var o = i,
s = r + n;
e ^= - 1;
for (var a = r; a < s; a++) e = e >>> 8 ^ o[255 & (e ^ t[a])];
return - 1 ^ e
}
}, function (e, t, n) {
'use strict';
e.exports = function (e, t, n, i) {
for (var r = 65535 & e | 0, o = e >>> 16 & 65535 | 0, s = 0; 0 !== n; ) {
n -= s = n > 2000 ? 2000 : n;
do {
o = o + (r = r + t[i++] | 0) | 0
} while (--s);
r %= 65521,
o %= 65521
}
return r | o << 16 | 0
}
}, function (e, t, n) {
'use strict';
var i = n(5);
t.STORE = {
magic: '\0\0',
compressWorker: function (e) {
return new i('STORE compression')
},
uncompressWorker: function () {
return new i('STORE decompression')
}
},
t.DEFLATE = n(204)
}, function (e, t, n) {
'use strict';
var i = n(5),
r = n(40);
function o() {
i.call(this, 'Crc32Probe'),
this.withStreamInfo('crc32', 0)
}
n(2).inherits(o, i),
o.prototype.processChunk = function (e) {
this.streamInfo.crc32 = r(e.data, this.streamInfo.crc32 || 0),
this.push(e)
},
e.exports = o
}, function (e, t, n) {
'use strict';
var i = n(2),
r = n(5);
function o(e) {
r.call(this, 'DataLengthProbe for ' + e),
this.propName = e,
this.withStreamInfo(e, 0)
}
i.inherits(o, r),
o.prototype.processChunk = function (e) {
if (e) {
var t = this.streamInfo[this.propName] || 0;
this.streamInfo[this.propName] = t + e.data.length
}
r.prototype.processChunk.call(this, e)
},
e.exports = o
}, function (e, t, n) {
'use strict';
var i = n(2),
r = n(5);
function o(e) {
r.call(this, 'DataWorker');
var t = this;
this.dataIsReady = !1,
this.index = 0,
this.max = 0,
this.data = null,
this.type = '',
this._tickScheduled = !1,
e.then(function (e) {
t.dataIsReady = !0,
t.data = e,
t.max = e && e.length || 0,
t.type = i.getTypeOf(e),
t.isPaused || t._tickAndRepeat()
}, function (e) {
t.error(e)
})
}
i.inherits(o, r),
o.prototype.cleanUp = function () {
r.prototype.cleanUp.call(this),
this.data = null
},
o.prototype.resume = function () {
return !!r.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = !0, i.delay(this._tickAndRepeat, [
], this)), !0)
},
o.prototype._tickAndRepeat = function () {
this._tickScheduled = !1,
this.isPaused || this.isFinished || (this._tick(), this.isFinished || (i.delay(this._tickAndRepeat, [
], this), this._tickScheduled = !0))
},
o.prototype._tick = function () {
if (this.isPaused || this.isFinished) return !1;
var e = null,
t = Math.min(this.max, this.index + 16384);
if (this.index >= this.max) return this.end();
switch (this.type) {
case 'string':
e = this.data.substring(this.index, t);
break;
case 'uint8array':
e = this.data.subarray(this.index, t);
break;
case 'array':
case 'nodebuffer':
e = this.data.slice(this.index, t)
}
return this.index = t,
this.push({
data: e,
meta: {
percent: this.max ? this.index / this.max * 100 : 0
}
})
},
e.exports = o
},
function (e, t, n) {
'use strict';
t.base64 = !1,
t.binary = !1,
t.dir = !1,
t.createFolders = !0,
t.date = null,
t.compression = null,
t.compressionOptions = null,
t.comment = null,
t.unixPermissions = null,
t.dosPermissions = null
},
function (e, t, n) {
'use strict';
(function (t) {
var i = n(2),
r = n(208),
o = n(5),
s = n(92),
a = n(9),
l = n(20),
u = null;
if (a.nodestream) try {
u = n(207)
} catch (e) {
}
function c(e, n) {
return new l.Promise(function (r, o) {
var a = [
],
l = e._internalType,
u = e._outputType,
c = e._mimeType;
e.on('data', function (e, t) {
a.push(e),
n && n(t)
}).on('error', function (e) {
a = [
],
o(e)
}).on('end', function () {
try {
var e = function (e, t, n) {
  switch (e) {
    case 'blob':
      return i.newBlob(i.transformTo('arraybuffer', t), n);
    case 'base64':
      return s.encode(t);
    default:
      return i.transformTo(e, t)
  }
}(u, function (e, n) {
  var i,
  r = 0,
  o = null,
  s = 0;
  for (i = 0; i < n.length; i++) s += n[i].length;
  switch (e) {
    case 'string':
      return n.join('');
    case 'array':
      return Array.prototype.concat.apply([], n);
    case 'uint8array':
      for (o = new Uint8Array(s), i = 0; i < n.length; i++) o.set(n[i], r),
      r += n[i].length;
      return o;
    case 'nodebuffer':
      return t.concat(n);
    default:
      throw new Error('concat : unsupported type \'' + e + '\'')
  }
}(l, a),
c); r(e)
} catch (e) {
o(e)
}
a = [
]
}).resume()
})
}
function h(e, t, n) {
var s = t;
switch (t) {
case 'blob':
case 'arraybuffer':
s = 'uint8array';
break;
case 'base64':
s = 'string'
}
try {
this._internalType = s,
this._outputType = t,
this._mimeType = n,
i.checkSupport(s),
this._worker = e.pipe(new r(s)),
e.lock()
} catch (e) {
this._worker = new o('error'),
this._worker.error(e)
}
}
h.prototype = {
accumulate: function (e) {
return c(this, e)
},
on: function (e, t) {
var n = this;
return 'data' === e ? this._worker.on(e, function (e) {
t.call(n, e.data, e.meta)
})  : this._worker.on(e, function () {
i.delay(t, arguments, n)
}),
this
},
resume: function () {
return i.delay(this._worker.resume, [
], this._worker),
this
},
pause: function () {
return this._worker.pause(),
this
},
toNodejsStream: function (e) {
if (i.checkSupport('nodestream'), 'nodebuffer' !== this._outputType) throw new Error(this._outputType + ' is not supported by this method');
return new u(this, {
objectMode: 'nodebuffer' !== this._outputType
}, e)
}
},
e.exports = h
}).call(this, n(12).Buffer)
},
function (e, t, n) {
var i = n(43),
r = n(27).document,
o = i(r) && i(r.createElement);
e.exports = function (e) {
return o ? r.createElement(e)  : {
}
}
},
function (e, t) {
e.exports = function (e) {
try {
return !!e()
} catch (e) {
return !0
}
}
},
function (e, t, n) {
var i = n(221);
e.exports = function (e, t, n) {
if (i(e), void 0 === t) return e;
switch (n) {
case 1:
return function (n) {
return e.call(t, n)
};
case 2:
return function (n, i) {
return e.call(t, n, i)
};
case 3:
return function (n, i, r) {
return e.call(t, n, i, r)
}
}
return function () {
return e.apply(t, arguments)
}
}
},
function (e, t) {
var n = e.exports = {
version: '2.3.0'
};
'number' == typeof __e && (__e = n)
},
function (e, t, n) {
'use strict';
var i = n(2),
r = n(9),
o = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
t.encode = function (e) {
for (var t, n, r, s, a, l, u, c = [
], h = 0, d = e.length, f = d, p = 'string' !== i.getTypeOf(e); h < e.length; ) f = d - h,
p ? (t = e[h++], n = h < d ? e[h++] : 0, r = h < d ? e[h++] : 0)  : (t = e.charCodeAt(h++), n = h < d ? e.charCodeAt(h++)  : 0, r = h < d ? e.charCodeAt(h++)  : 0),
s = t >> 2,
a = (3 & t) << 4 | n >> 4,
l = f > 1 ? (15 & n) << 2 | r >> 6 : 64,
u = f > 2 ? 63 & r : 64,
c.push(o.charAt(s) + o.charAt(a) + o.charAt(l) + o.charAt(u));
return c.join('')
},
t.decode = function (e) {
var t,
n,
i,
s,
a,
l,
u = 0,
c = 0;
if ('data:' === e.substr(0, 'data:'.length)) throw new Error('Invalid base64 input, it looks like a data url.');
var h,
d = 3 * (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, '')).length / 4;
if (e.charAt(e.length - 1) === o.charAt(64) && d--, e.charAt(e.length - 2) === o.charAt(64) && d--, d % 1 != 0) throw new Error('Invalid base64 input, bad content length.');
for (h = r.uint8array ? new Uint8Array(0 | d)  : new Array(0 | d); u < e.length; ) t = o.indexOf(e.charAt(u++)) << 2 | (s = o.indexOf(e.charAt(u++))) >> 4,
n = (15 & s) << 4 | (a = o.indexOf(e.charAt(u++))) >> 2,
i = (3 & a) << 6 | (l = o.indexOf(e.charAt(u++))),
h[c++] = t,
64 !== a && (h[c++] = n),
64 !== l && (h[c++] = i);
return h
}
},
function (e, t, n) {
'use strict';
e.exports = o;
var i = n(11),
r = n(21);
function o(e) {
if (!(this instanceof o)) return new o(e);
i.call(this, e),
this._transformState = {
afterTransform: function (e, t) {
var n = this._transformState;
n.transforming = !1;
var i = n.writecb;
if (!i) return this.emit('error', new Error('write callback called multiple times'));
n.writechunk = null,
n.writecb = null,
null != t && this.push(t),
i(e);
var r = this._readableState;
r.reading = !1,
(r.needReadable || r.length < r.highWaterMark) && this._read(r.highWaterMark)
}.bind(this),
needTransform: !1,
transforming: !1,
writecb: null,
writechunk: null,
writeencoding: null
},
this._readableState.needReadable = !0,
this._readableState.sync = !1,
e && ('function' == typeof e.transform && (this._transform = e.transform), 'function' == typeof e.flush && (this._flush = e.flush)),
this.on('prefinish', s)
}
function s() {
var e = this;
'function' == typeof this._flush ? this._flush(function (t, n) {
a(e, t, n)
})  : a(this, null, null)
}
function a(e, t, n) {
if (t) return e.emit('error', t);
if (null != n && e.push(n), e._writableState.length) throw new Error('Calling transform done when ws.length != 0');
if (e._transformState.transforming) throw new Error('Calling transform done when still transforming');
return e.push(null)
}
r.inherits = n(16),
r.inherits(o, i),
o.prototype.push = function (e, t) {
return this._transformState.needTransform = !1,
i.prototype.push.call(this, e, t)
},
o.prototype._transform = function (e, t, n) {
throw new Error('_transform() is not implemented')
},
o.prototype._write = function (e, t, n) {
var i = this._transformState;
if (i.writecb = n, i.writechunk = e, i.writeencoding = t, !i.transforming) {
var r = this._readableState;
(i.needTransform || r.needReadable || r.length < r.highWaterMark) && this._read(r.highWaterMark)
}
},
o.prototype._read = function (e) {
var t = this._transformState;
null !== t.writechunk && t.writecb && !t.transforming ? (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform))  : t.needTransform = !0
},
o.prototype._destroy = function (e, t) {
var n = this;
i.prototype._destroy.call(this, e, function (e) {
t(e),
n.emit('close')
})
}
},
function (e, t, n) {
'use strict';
var i = n(29).Buffer,
r = i.isEncoding || function (e) {
switch ((e = '' + e) && e.toLowerCase()) {
case 'hex':
case 'utf8':
case 'utf-8':
case 'ascii':
case 'binary':
case 'base64':
case 'ucs2':
case 'ucs-2':
case 'utf16le':
case 'utf-16le':
case 'raw':
return !0;
default:
return !1
}
};
function o(e) {
var t;
switch (this.encoding = function (e) {
var t = function (e) {
if (!e) return 'utf8';
for (var t; ; ) switch (e) {
case 'utf8':
case 'utf-8':
return 'utf8';
case 'ucs2':
case 'ucs-2':
case 'utf16le':
case 'utf-16le':
return 'utf16le';
case 'latin1':
case 'binary':
return 'latin1';
case 'base64':
case 'ascii':
case 'hex':
return e;
default:
if (t) return;
e = ('' + e).toLowerCase(),
t = !0
}
}(e);
if ('string' != typeof t && (i.isEncoding === r || !r(e))) throw new Error('Unknown encoding: ' + e);
return t || e
}(e),
this.encoding) {
case 'utf16le':
this.text = l,
this.end = u,
t = 4;
break;
case 'utf8':
this.fillLast = a,
t = 4;
break;
case 'base64':
this.text = c,
this.end = h,
t = 3;
break;
default:
return this.write = d,
void (this.end = f)
}
this.lastNeed = 0, this.lastTotal = 0, this.lastChar = i.allocUnsafe(t)
}
function s(e) {
return e <= 127 ? 0 : e >> 5 == 6 ? 2 : e >> 4 == 14 ? 3 : e >> 3 == 30 ? 4 : - 1
}
function a(e) {
var t = this.lastTotal - this.lastNeed,
n = function (e, t, n) {
if (128 != (192 & t[0])) return e.lastNeed = 0,
'�'.repeat(n);
if (e.lastNeed > 1 && t.length > 1) {
if (128 != (192 & t[1])) return e.lastNeed = 1,
'�'.repeat(n + 1);
if (e.lastNeed > 2 && t.length > 2 && 128 != (192 & t[2])) return e.lastNeed = 2,
'�'.repeat(n + 2)
}
}(this, e, t);
return void 0 !== n ? n : this.lastNeed <= e.length ? (e.copy(this.lastChar, t, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal))  : (e.copy(this.lastChar, t, 0, e.length), void (this.lastNeed -= e.length))
}
function l(e, t) {
if ((e.length - t) % 2 == 0) {
var n = e.toString('utf16le', t);
if (n) {
var i = n.charCodeAt(n.length - 1);
if (i >= 55296 && i <= 56319) return this.lastNeed = 2,
this.lastTotal = 4,
this.lastChar[0] = e[e.length - 2],
this.lastChar[1] = e[e.length - 1],
n.slice(0, - 1)
}
return n
}
return this.lastNeed = 1,
this.lastTotal = 2,
this.lastChar[0] = e[e.length - 1],
e.toString('utf16le', t, e.length - 1)
}
function u(e) {
var t = e && e.length ? this.write(e)  : '';
if (this.lastNeed) {
var n = this.lastTotal - this.lastNeed;
return t + this.lastChar.toString('utf16le', 0, n)
}
return t
}
function c(e, t) {
var n = (e.length - t) % 3;
return 0 === n ? e.toString('base64', t)  : (this.lastNeed = 3 - n, this.lastTotal = 3, 1 === n ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1]), e.toString('base64', t, e.length - n))
}
function h(e) {
var t = e && e.length ? this.write(e)  : '';
return this.lastNeed ? t + this.lastChar.toString('base64', 0, 3 - this.lastNeed)  : t
}
function d(e) {
return e.toString(this.encoding)
}
function f(e) {
return e && e.length ? this.write(e)  : ''
}
t.StringDecoder = o,
o.prototype.write = function (e) {
if (0 === e.length) return '';
var t,
n;
if (this.lastNeed) {
if (void 0 === (t = this.fillLast(e))) return '';
n = this.lastNeed,
this.lastNeed = 0
} else n = 0;
return n < e.length ? t ? t + this.text(e, n)  : this.text(e, n)  : t || ''
},
o.prototype.end = function (e) {
var t = e && e.length ? this.write(e)  : '';
return this.lastNeed ? t + '�'.repeat(this.lastTotal - this.lastNeed)  : t
},
o.prototype.text = function (e, t) {
var n = function (e, t, n) {
var i = t.length - 1;
if (i < n) return 0;
var r = s(t[i]);
if (r >= 0) return r > 0 && (e.lastNeed = r - 1),
r;
if (--i < n) return 0;
if ((r = s(t[i])) >= 0) return r > 0 && (e.lastNeed = r - 2),
r;
if (--i < n) return 0;
if ((r = s(t[i])) >= 0) return r > 0 && (2 === r ? r = 0 : e.lastNeed = r - 3),
r;
return 0
}(this, e, t);
if (!this.lastNeed) return e.toString('utf8', t);
this.lastTotal = n;
var i = e.length - (n - this.lastNeed);
return e.copy(this.lastChar, 0, i),
e.toString('utf8', t, i)
},
o.prototype.fillLast = function (e) {
if (this.lastNeed <= e.length) return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed),
this.lastChar.toString(this.encoding, 0, this.lastTotal);
e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length),
this.lastNeed -= e.length
}
},
function (e, t, n) {
'use strict';
var i = n(30);
function r(e, t) {
e.emit('error', t)
}
e.exports = {
destroy: function (e, t) {
var n = this,
o = this._readableState && this._readableState.destroyed,
s = this._writableState && this._writableState.destroyed;
return o || s ? (t ? t(e)  : !e || this._writableState && this._writableState.errorEmitted || i.nextTick(r, this, e), this)  : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(e || null, function (e) {
!t && e ? (i.nextTick(r, n, e), n._writableState && (n._writableState.errorEmitted = !0))  : t && t(e)
}), this)
},
undestroy: function () {
this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1),
this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1)
}
}
},
function (e, t, n) {
e.exports = n(46).EventEmitter
},
function (e, t, n) {
'use strict';
(function (t, i) {
var r = n(30);
e.exports = y;
var o,
s = n(99);
y.ReadableState = A;
n(46).EventEmitter;
var a = function (e, t) {
return e.listeners(t).length
},
l = n(96),
u = n(29).Buffer,
c = t.Uint8Array || function () {
};
var h = n(21);
h.inherits = n(16);
var d = n(235),
f = void 0;
f = d && d.debuglog ? d.debuglog('stream')  : function () {
};
var p,
v = n(234),
g = n(95);
h.inherits(y, l);
var m = [
'error',
'close',
'destroy',
'pause',
'resume'
];
function A(e, t) {
o = o || n(11),
e = e || {
};
var i = t instanceof o;
this.objectMode = !!e.objectMode,
i && (this.objectMode = this.objectMode || !!e.readableObjectMode);
var r = e.highWaterMark,
s = e.readableHighWaterMark,
a = this.objectMode ? 16 : 16384;
this.highWaterMark = r || 0 === r ? r : i && (s || 0 === s) ? s : a,
this.highWaterMark = Math.floor(this.highWaterMark),
this.buffer = new v,
this.length = 0,
this.pipes = null,
this.pipesCount = 0,
this.flowing = null,
this.ended = !1,
this.endEmitted = !1,
this.reading = !1,
this.sync = !0,
this.needReadable = !1,
this.emittedReadable = !1,
this.readableListening = !1,
this.resumeScheduled = !1,
this.destroyed = !1,
this.defaultEncoding = e.defaultEncoding || 'utf8',
this.awaitDrain = 0,
this.readingMore = !1,
this.decoder = null,
this.encoding = null,
e.encoding && (p || (p = n(94).StringDecoder), this.decoder = new p(e.encoding), this.encoding = e.encoding)
}
function y(e) {
if (o = o || n(11), !(this instanceof y)) return new y(e);
this._readableState = new A(e, this),
this.readable = !0,
e && ('function' == typeof e.read && (this._read = e.read), 'function' == typeof e.destroy && (this._destroy = e.destroy)),
l.call(this)
}
function b(e, t, n, i, r) {
var o,
s = e._readableState;
null === t ? (s.reading = !1, function (e, t) {
if (t.ended) return;
if (t.decoder) {
var n = t.decoder.end();
n && n.length && (t.buffer.push(n), t.length += t.objectMode ? 1 : n.length)
}
t.ended = !0,
k(e)
}(e, s))  : (r || (o = function (e, t) {
var n;
i = t,
u.isBuffer(i) || i instanceof c || 'string' == typeof t || void 0 === t || e.objectMode || (n = new TypeError('Invalid non-string/buffer chunk'));
var i;
return n
}(s, t)), o ? e.emit('error', o)  : s.objectMode || t && t.length > 0 ? ('string' == typeof t || s.objectMode || Object.getPrototypeOf(t) === u.prototype || (t = function (e) {
return u.from(e)
}(t)), i ? s.endEmitted ? e.emit('error', new Error('stream.unshift() after end event'))  : _(e, s, t, !0)  : s.ended ? e.emit('error', new Error('stream.push() after EOF'))  : (s.reading = !1, s.decoder && !n ? (t = s.decoder.write(t), s.objectMode || 0 !== t.length ? _(e, s, t, !1)  : S(e, s))  : _(e, s, t, !1)))  : i || (s.reading = !1));
return function (e) {
return !e.ended && (e.needReadable || e.length < e.highWaterMark || 0 === e.length)
}(s)
}
function _(e, t, n, i) {
t.flowing && 0 === t.length && !t.sync ? (e.emit('data', n), e.read(0))  : (t.length += t.objectMode ? 1 : n.length, i ? t.buffer.unshift(n)  : t.buffer.push(n), t.needReadable && k(e)),
S(e, t)
}
Object.defineProperty(y.prototype, 'destroyed', {
get: function () {
return void 0 !== this._readableState && this._readableState.destroyed
},
set: function (e) {
this._readableState && (this._readableState.destroyed = e)
}
}),
y.prototype.destroy = g.destroy,
y.prototype._undestroy = g.undestroy,
y.prototype._destroy = function (e, t) {
this.push(null),
t(e)
},
y.prototype.push = function (e, t) {
var n,
i = this._readableState;
return i.objectMode ? n = !0 : 'string' == typeof e && ((t = t || i.defaultEncoding) !== i.encoding && (e = u.from(e, t), t = ''), n = !0),
b(this, e, t, !1, n)
},
y.prototype.unshift = function (e) {
return b(this, e, null, !0, !1)
},
y.prototype.isPaused = function () {
return !1 === this._readableState.flowing
},
y.prototype.setEncoding = function (e) {
return p || (p = n(94).StringDecoder),
this._readableState.decoder = new p(e),
this._readableState.encoding = e,
this
};
var w = 8388608;
function T(e, t) {
return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e != e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = function (e) {
return e >= w ? e = w : (e--, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e++),
e
}(e)), e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0, 0))
}
function k(e) {
var t = e._readableState;
t.needReadable = !1,
t.emittedReadable || (f('emitReadable', t.flowing), t.emittedReadable = !0, t.sync ? r.nextTick(E, e)  : E(e))
}
function E(e) {
f('emit readable'),
e.emit('readable'),
B(e)
}
function S(e, t) {
t.readingMore || (t.readingMore = !0, r.nextTick(j, e, t))
}
function j(e, t) {
for (var n = t.length; !t.reading && !t.flowing && !t.ended && t.length < t.highWaterMark && (f('maybeReadMore read 0'), e.read(0), n !== t.length); ) n = t.length;
t.readingMore = !1
}
function C(e) {
f('readable nexttick read 0'),
e.read(0)
}
function x(e, t) {
t.reading || (f('resume read 0'), e.read(0)),
t.resumeScheduled = !1,
t.awaitDrain = 0,
e.emit('resume'),
B(e),
t.flowing && !t.reading && e.read(0)
}
function B(e) {
var t = e._readableState;
for (f('flow', t.flowing); t.flowing && null !== e.read(); );
}
function O(e, t) {
return 0 === t.length ? null : (t.objectMode ? n = t.buffer.shift()  : !e || e >= t.length ? (n = t.decoder ? t.buffer.join('')  : 1 === t.buffer.length ? t.buffer.head.data : t.buffer.concat(t.length), t.buffer.clear())  : n = function (e, t, n) {
var i;
e < t.head.data.length ? (i = t.head.data.slice(0, e), t.head.data = t.head.data.slice(e))  : i = e === t.head.data.length ? t.shift()  : n ? function (e, t) {
var n = t.head,
i = 1,
r = n.data;
e -= r.length;
for (; n = n.next; ) {
var o = n.data,
s = e > o.length ? o.length : e;
if (s === o.length ? r += o : r += o.slice(0, e), 0 === (e -= s)) {
s === o.length ? (++i, n.next ? t.head = n.next : t.head = t.tail = null)  : (t.head = n, n.data = o.slice(s));
break
}
++i
}
return t.length -= i,
r
}(e, t)  : function (e, t) {
var n = u.allocUnsafe(e),
i = t.head,
r = 1;
i.data.copy(n),
e -= i.data.length;
for (; i = i.next; ) {
var o = i.data,
s = e > o.length ? o.length : e;
if (o.copy(n, n.length - e, 0, s), 0 === (e -= s)) {
s === o.length ? (++r, i.next ? t.head = i.next : t.head = t.tail = null)  : (t.head = i, i.data = o.slice(s));
break
}
++r
}
return t.length -= r,
n
}(e, t);
return i
}(e, t.buffer, t.decoder), n);
var n
}
function I(e) {
var t = e._readableState;
if (t.length > 0) throw new Error('"endReadable()" called on non-empty stream');
t.endEmitted || (t.ended = !0, r.nextTick(P, t, e))
}
function P(e, t) {
e.endEmitted || 0 !== e.length || (e.endEmitted = !0, t.readable = !1, t.emit('end'))
}
function R(e, t) {
for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
return - 1
}
y.prototype.read = function (e) {
f('read', e),
e = parseInt(e, 10);
var t = this._readableState,
n = e;
if (0 !== e && (t.emittedReadable = !1), 0 === e && t.needReadable && (t.length >= t.highWaterMark || t.ended)) return f('read: emitReadable', t.length, t.ended),
0 === t.length && t.ended ? I(this)  : k(this),
null;
if (0 === (e = T(e, t)) && t.ended) return 0 === t.length && I(this),
null;
var i,
r = t.needReadable;
return f('need readable', r),
(0 === t.length || t.length - e < t.highWaterMark) && f('length less than watermark', r = !0),
t.ended || t.reading ? f('reading or ended', r = !1)  : r && (f('do read'), t.reading = !0, t.sync = !0, 0 === t.length && (t.needReadable = !0), this._read(t.highWaterMark), t.sync = !1, t.reading || (e = T(n, t))),
null === (i = e > 0 ? O(e, t)  : null) ? (t.needReadable = !0, e = 0)  : t.length -= e,
0 === t.length && (t.ended || (t.needReadable = !0), n !== e && t.ended && I(this)),
null !== i && this.emit('data', i),
i
},
y.prototype._read = function (e) {
this.emit('error', new Error('_read() is not implemented'))
},
y.prototype.pipe = function (e, t) {
var n = this,
o = this._readableState;
switch (o.pipesCount) {
case 0:
o.pipes = e;
break;
case 1:
o.pipes = [
o.pipes,
e
];
break;
default:
o.pipes.push(e)
}
o.pipesCount += 1,
f('pipe count=%d opts=%j', o.pipesCount, t);
var l = (!t || !1 !== t.end) && e !== i.stdout && e !== i.stderr ? c : y;
function u(t, i) {
f('onunpipe'),
t === n && i && !1 === i.hasUnpiped && (i.hasUnpiped = !0, f('cleanup'), e.removeListener('close', m), e.removeListener('finish', A), e.removeListener('drain', h), e.removeListener('error', g), e.removeListener('unpipe', u), n.removeListener('end', c), n.removeListener('end', y), n.removeListener('data', v), d = !0, !o.awaitDrain || e._writableState && !e._writableState.needDrain || h())
}
function c() {
f('onend'),
e.end()
}
o.endEmitted ? r.nextTick(l)  : n.once('end', l),
e.on('unpipe', u);
var h = function (e) {
return function () {
var t = e._readableState;
f('pipeOnDrain', t.awaitDrain),
t.awaitDrain && t.awaitDrain--,
0 === t.awaitDrain && a(e, 'data') && (t.flowing = !0, B(e))
}
}(n);
e.on('drain', h);
var d = !1;
var p = !1;
function v(t) {
f('ondata'),
p = !1,
!1 !== e.write(t) || p || ((1 === o.pipesCount && o.pipes === e || o.pipesCount > 1 && - 1 !== R(o.pipes, e)) && !d && (f('false write response, pause', n._readableState.awaitDrain), n._readableState.awaitDrain++, p = !0), n.pause())
}
function g(t) {
f('onerror', t),
y(),
e.removeListener('error', g),
0 === a(e, 'error') && e.emit('error', t)
}
function m() {
e.removeListener('finish', A),
y()
}
function A() {
f('onfinish'),
e.removeListener('close', m),
y()
}
function y() {
f('unpipe'),
n.unpipe(e)
}
return n.on('data', v),
function (e, t, n) {
if ('function' == typeof e.prependListener) return e.prependListener(t, n);
e._events && e._events[t] ? s(e._events[t]) ? e._events[t].unshift(n)  : e._events[t] = [
n,
e._events[t]
] : e.on(t, n)
}(e, 'error', g),
e.once('close', m),
e.once('finish', A),
e.emit('pipe', n),
o.flowing || (f('pipe resume'), n.resume()),
e
},
y.prototype.unpipe = function (e) {
var t = this._readableState,
n = {
hasUnpiped: !1
};
if (0 === t.pipesCount) return this;
if (1 === t.pipesCount) return e && e !== t.pipes ? this : (e || (e = t.pipes), t.pipes = null, t.pipesCount = 0, t.flowing = !1, e && e.emit('unpipe', this, n), this);
if (!e) {
var i = t.pipes,
r = t.pipesCount;
t.pipes = null,
t.pipesCount = 0,
t.flowing = !1;
for (var o = 0; o < r; o++) i[o].emit('unpipe', this, n);
return this
}
var s = R(t.pipes, e);
return - 1 === s ? this : (t.pipes.splice(s, 1), t.pipesCount -= 1, 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit('unpipe', this, n), this)
},
y.prototype.on = function (e, t) {
var n = l.prototype.on.call(this, e, t);
if ('data' === e) !1 !== this._readableState.flowing && this.resume();
 else if ('readable' === e) {
var i = this._readableState;
i.endEmitted || i.readableListening || (i.readableListening = i.needReadable = !0, i.emittedReadable = !1, i.reading ? i.length && k(this)  : r.nextTick(C, this))
}
return n
},
y.prototype.addListener = y.prototype.on,
y.prototype.resume = function () {
var e = this._readableState;
return e.flowing || (f('resume'), e.flowing = !0, function (e, t) {
t.resumeScheduled || (t.resumeScheduled = !0, r.nextTick(x, e, t))
}(this, e)),
this
},
y.prototype.pause = function () {
return f('call pause flowing=%j', this._readableState.flowing),
!1 !== this._readableState.flowing && (f('pause'), this._readableState.flowing = !1, this.emit('pause')),
this
},
y.prototype.wrap = function (e) {
var t = this,
n = this._readableState,
i = !1;
for (var r in e.on('end', function () {
if (f('wrapped end'), n.decoder && !n.ended) {
var e = n.decoder.end();
e && e.length && t.push(e)
}
t.push(null)
}), e.on('data', function (r) {
(f('wrapped data'), n.decoder && (r = n.decoder.write(r)), !n.objectMode || null !== r && void 0 !== r) && ((n.objectMode || r && r.length) && (t.push(r) || (i = !0, e.pause())))
}), e) void 0 === this[r] && 'function' == typeof e[r] && (this[r] = function (t) {
return function () {
return e[t].apply(e, arguments)
}
}(r));
for (var o = 0; o < m.length; o++) e.on(m[o], this.emit.bind(this, m[o]));
return this._read = function (t) {
f('wrapped _read', t),
i && (i = !1, e.resume())
},
this
},
y._fromList = O
}).call(this, n(7), n(31))
},
function (e, t, n) {
e.exports = n(236)
},
function (e, t) {
var n = {
}.toString;
e.exports = Array.isArray || function (e) {
return '[object Array]' == n.call(e)
}
},
function (e, t, n) {
'use strict';
Object.defineProperty(t, '__esModule', {
value: !0
});
var i,
r = function () {
return function (e, t) {
if (Array.isArray(e)) return e;
if (Symbol.iterator in Object(e)) return function (e, t) {
var n = [
],
i = !0,
r = !1,
o = void 0;
try {
for (var s, a = e[Symbol.iterator](); !(i = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); i = !0);
} catch (e) {
r = !0,
o = e
} finally {
try {
!i && a.return && a.return ()
} finally {
if (r) throw o
}
}
return n
}(e, t);
throw new TypeError('Invalid attempt to destructure non-iterable instance')
}
}(),
o = function () {
function e(e, t) {
for (var n = 0; n < t.length; n++) {
var i = t[n];
i.enumerable = i.enumerable || !1,
i.configurable = !0,
'value' in i && (i.writable = !0),
Object.defineProperty(e, i.key, i)
}
}
return function (t, n, i) {
return n && e(t.prototype, n),
i && e(t, i),
t
}
}(),
s = n(47),
a = (i = s) && i.__esModule ? i : {
default:
i
};
var l = function (e) {
for (var t = e.split(new RegExp('(?:^|,)((?:[^=]*)=(?:"[^"]*"|[^,]*))')), n = {
}, i = t.length, r = void 0; i--; ) '' !== t[i] && ((r = /([^=]*)=(.*)/.exec(t[i]).slice(1)) [0] = r[0].replace(/^\s+|\s+$/g, ''), r[1] = r[1].replace(/^\s+|\s+$/g, ''), r[1] = r[1].replace(/^['"](.*)['"]$/g, '$1'), n[r[0]] = r[1]);
return n
},
u = function (e) {
function t() {
return function (e, t) {
if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
}(this, t),
function (e, t) {
if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
return !t || 'object' != typeof t && 'function' != typeof t ? e : t
}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
}
return function (e, t) {
if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
e.prototype = Object.create(t && t.prototype, {
constructor: {
value: e,
enumerable: !1,
writable: !0,
configurable: !0
}
}),
t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t)  : e.__proto__ = t)
}(t, a['default']),
o(t, [
{
key: 'push',
value: function (e) {
var t = void 0,
n = void 0;
if (0 !== (e = e.replace(/^[\u0000\s]+|[\u0000\s]+$/g, '')).length) if ('#' === e[0]) if (0 === e.indexOf('#EXT')) if (e = e.replace('\r', ''), t = /^#EXTM3U/.exec(e)) this.trigger('data', {
type: 'tag',
tagType: 'm3u'
});
 else {
if (t = /^#EXTINF:?([0-9\.]*)?,?(.*)?$/.exec(e)) return n = {
type: 'tag',
tagType: 'inf'
},
t[1] && (n.duration = parseFloat(t[1])),
t[2] && (n.title = t[2]),
void this.trigger('data', n);
if (t = /^#EXT-X-TARGETDURATION:?([0-9.]*)?/.exec(e)) return n = {
type: 'tag',
tagType: 'targetduration'
},
t[1] && (n.duration = parseInt(t[1], 10)),
void this.trigger('data', n);
if (t = /^#ZEN-TOTAL-DURATION:?([0-9.]*)?/.exec(e)) return n = {
type: 'tag',
tagType: 'totalduration'
},
t[1] && (n.duration = parseInt(t[1], 10)),
void this.trigger('data', n);
if (t = /^#EXT-X-VERSION:?([0-9.]*)?/.exec(e)) return n = {
type: 'tag',
tagType: 'version'
},
t[1] && (n.version = parseInt(t[1], 10)),
void this.trigger('data', n);
if (t = /^#EXT-X-MEDIA-SEQUENCE:?(\-?[0-9.]*)?/.exec(e)) return n = {
type: 'tag',
tagType: 'media-sequence'
},
t[1] && (n.number = parseInt(t[1], 10)),
void this.trigger('data', n);
if (t = /^#EXT-X-DISCONTINUITY-SEQUENCE:?(\-?[0-9.]*)?/.exec(e)) return n = {
type: 'tag',
tagType: 'discontinuity-sequence'
},
t[1] && (n.number = parseInt(t[1], 10)),
void this.trigger('data', n);
if (t = /^#EXT-X-PLAYLIST-TYPE:?(.*)?$/.exec(e)) return n = {
type: 'tag',
tagType: 'playlist-type'
},
t[1] && (n.playlistType = t[1]),
void this.trigger('data', n);
if (t = /^#EXT-X-BYTERANGE:?([0-9.]*)?@?([0-9.]*)?/.exec(e)) return n = {
type: 'tag',
tagType: 'byterange'
},
t[1] && (n.length = parseInt(t[1], 10)),
t[2] && (n.offset = parseInt(t[2], 10)),
void this.trigger('data', n);
if (t = /^#EXT-X-ALLOW-CACHE:?(YES|NO)?/.exec(e)) return n = {
type: 'tag',
tagType: 'allow-cache'
},
t[1] && (n.allowed = !/NO/.test(t[1])),
void this.trigger('data', n);
if (t = /^#EXT-X-MAP:?(.*)$/.exec(e)) {
if (n = {
type: 'tag',
tagType: 'map'
}, t[1]) {
var i = l(t[1]);
if (i.URI && (n.uri = i.URI), i.BYTERANGE) {
var o = i.BYTERANGE.split('@'),
s = r(o, 2),
a = s[0],
u = s[1];
n.byterange = {
},
a && (n.byterange.length = parseInt(a, 10)),
u && (n.byterange.offset = parseInt(u, 10))
}
}
this.trigger('data', n)
} else if (t = /^#EXT-X-STREAM-INF:?(.*)$/.exec(e)) {
if (n = {
type: 'tag',
tagType: 'stream-inf'
}, t[1]) {
if (n.attributes = l(t[1]), n.attributes.RESOLUTION) {
var c = n.attributes.RESOLUTION.split('x'),
h = {
};
c[0] && (h.width = parseInt(c[0], 10)),
c[1] && (h.height = parseInt(c[1], 10)),
n.attributes.RESOLUTION = h
}
n.attributes.BANDWIDTH && (n.attributes.BANDWIDTH = parseInt(n.attributes.BANDWIDTH, 10)),
n.attributes['PROGRAM-ID'] && (n.attributes['PROGRAM-ID'] = parseInt(n.attributes['PROGRAM-ID'], 10))
}
this.trigger('data', n)
} else {
if (t = /^#EXT-X-MEDIA:?(.*)$/.exec(e)) return n = {
type: 'tag',
tagType: 'media'
},
t[1] && (n.attributes = l(t[1])),
void this.trigger('data', n);
if (t = /^#EXT-X-ENDLIST/.exec(e)) this.trigger('data', {
type: 'tag',
tagType: 'endlist'
});
 else if (t = /^#EXT-X-DISCONTINUITY/.exec(e)) this.trigger('data', {
type: 'tag',
tagType: 'discontinuity'
});
 else {
if (t = /^#EXT-X-PROGRAM-DATE-TIME:?(.*)$/.exec(e)) return n = {
type: 'tag',
tagType: 'program-date-time'
},
t[1] && (n.dateTimeString = t[1], n.dateTimeObject = new Date(t[1])),
void this.trigger('data', n);
if (t = /^#EXT-X-KEY:?(.*)$/.exec(e)) return n = {
type: 'tag',
tagType: 'key'
},
t[1] && (n.attributes = l(t[1]), n.attributes.IV && ('0x' === n.attributes.IV.substring(0, 2).toLowerCase() && (n.attributes.IV = n.attributes.IV.substring(2)), n.attributes.IV = n.attributes.IV.match(/.{8}/g), n.attributes.IV[0] = parseInt(n.attributes.IV[0], 16), n.attributes.IV[1] = parseInt(n.attributes.IV[1], 16), n.attributes.IV[2] = parseInt(n.attributes.IV[2], 16), n.attributes.IV[3] = parseInt(n.attributes.IV[3], 16), n.attributes.IV = new Uint32Array(n.attributes.IV))),
void this.trigger('data', n);
if (t = /^#EXT-X-CUE-OUT-CONT:?(.*)?$/.exec(e)) return n = {
type: 'tag',
tagType: 'cue-out-cont'
},
t[1] ? n.data = t[1] : n.data = '',
void this.trigger('data', n);
if (t = /^#EXT-X-CUE-OUT:?(.*)?$/.exec(e)) return n = {
type: 'tag',
tagType: 'cue-out'
},
t[1] ? n.data = t[1] : n.data = '',
void this.trigger('data', n);
if (t = /^#EXT-X-CUE-IN:?(.*)?$/.exec(e)) return n = {
type: 'tag',
tagType: 'cue-in'
},
t[1] ? n.data = t[1] : n.data = '',
void this.trigger('data', n);
this.trigger('data', {
type: 'tag',
data: e.slice(4)
})
}
}
} else this.trigger('data', {
type: 'comment',
text: e.slice(1)
});
 else this.trigger('data', {
type: 'uri',
uri: e
})
}
}
]),
t
}();
t.default = u
},
function (e, t, n) {
'use strict';
Object.defineProperty(t, '__esModule', {
value: !0
});
var i,
r = function () {
function e(e, t) {
for (var n = 0; n < t.length; n++) {
var i = t[n];
i.enumerable = i.enumerable || !1,
i.configurable = !0,
'value' in i && (i.writable = !0),
Object.defineProperty(e, i.key, i)
}
}
return function (t, n, i) {
return n && e(t.prototype, n),
i && e(t, i),
t
}
}(),
o = n(47),
s = (i = o) && i.__esModule ? i : {
default:
i
};
var a = function (e) {
function t() {
!function (e, t) {
if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
}(this, t);
var e = function (e, t) {
if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
return !t || 'object' != typeof t && 'function' != typeof t ? e : t
}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
return e.buffer = '',
e
}
return function (e, t) {
if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
e.prototype = Object.create(t && t.prototype, {
constructor: {
value: e,
enumerable: !1,
writable: !0,
configurable: !0
}
}),
t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t)  : e.__proto__ = t)
}(t, s['default']),
r(t, [
{
key: 'push',
value: function (e) {
var t = void 0;
for (this.buffer += e, t = this.buffer.indexOf('\n'); t > - 1; t = this.buffer.indexOf('\n')) this.trigger('data', this.buffer.substring(0, t)),
this.buffer = this.buffer.substring(t + 1)
}
}
]),
t
}();
t.default = a
},
function (e, t, n) {
'use strict';
var i = s(n(101)),
r = s(n(100)),
o = s(n(242));
function s(e) {
return e && e.__esModule ? e : {
default:
e
}
}
e.exports = {
LineStream: i.default,
ParseStream:
r.default,
Parser:
o.default
}
},
function (e, t) {
e.exports = function (e) {
var t = n.call(e);
return '[object Function]' === t || 'function' == typeof e && '[object RegExp]' !== t || 'undefined' != typeof window && (e === window.setTimeout || e === window.alert || e === window.confirm || e === window.prompt)
};
var n = Object.prototype.toString
},
function (e, t, n) {
'use strict';
const i = n(120),
r = n(119);
function o(e, t) {
return t.encode ? t.strict ? i(e)  : encodeURIComponent(e)  : e
}
function s(e) {
const t = e.indexOf('?');
return - 1 === t ? '' : e.slice(t + 1)
}
function a(e, t) {
const n = function (e) {
let t;
switch (e.arrayFormat) {
case 'index':
return (e, n, i) =>{
t = /\[(\d*)\]$/.exec(e),
e = e.replace(/\[\d*\]$/, ''),
t ? (void 0 === i[e] && (i[e] = {
}), i[e][t[1]] = n)  : i[e] = n
};
case 'bracket':
return (e, n, i) =>{
t = /(\[\])$/.exec(e),
e = e.replace(/\[\]$/, ''),
t ? void 0 !== i[e] ? i[e] = [
].concat(i[e], n)  : i[e] = [
n
] : i[e] = n
};
default:
return (e, t, n) =>{
void 0 !== n[e] ? n[e] = [
].concat(n[e], t)  : n[e] = t
}
}
}(t = Object.assign({
arrayFormat: 'none'
}, t)),
i = Object.create(null);
if ('string' != typeof e) return i;
if (!(e = e.trim().replace(/^[?#&]/, ''))) return i;
for (const tofe.split('&')) {
let [e,
o] = t.replace(/\+/g, ' ').split('=');
o = void 0 === o ? null : r(o),
n(r(e), o, i)
}
return Object.keys(i).sort().reduce((e, t) =>{
const n = i[t];
return Boolean(n) && 'object' == typeof n && !Array.isArray(n) ? e[t] = function e(t) {
return Array.isArray(t) ? t.sort()  : 'object' == typeof t ? e(Object.keys(t)).sort((e, t) =>Number(e) - Number(t)).map(e=>t[e])  : t
}(n)  : e[t] = n,
e
}, Object.create(null))
}
t.extract = s,
t.parse = a,
t.stringify = ((e, t) =>{
!1 === (t = Object.assign({
encode: !0,
strict: !0,
arrayFormat: 'none'
}, t)).sort && (t.sort = (() =>{
}));
const n = function (e) {
switch (e.arrayFormat) {
case 'index':
return (t, n, i) =>null === n ? [
o(t, e),
'[',
i,
']'
].join('')  : [
o(t, e),
'[',
o(i, e),
']=',
o(n, e)
].join('');
case 'bracket':
return (t, n) =>null === n ? o(t, e)  : [
o(t, e),
'[]=',
o(n, e)
].join('');
default:
return (t, n) =>null === n ? o(t, e)  : [
o(t, e),
'=',
o(n, e)
].join('')
}
}(t);
return e ? Object.keys(e).sort(t.sort).map(i=>{
const r = e[i];
if (void 0 === r) return '';
if (null === r) return o(i, t);
if (Array.isArray(r)) {
const e = [
];
for (const tofr.slice()) void 0 !== t && e.push(n(i, t, e.length));
return e.join('&')
}
return o(i, t) + '=' + o(r, t)
}).filter(e=>e.length > 0).join('&')  : ''
}), t.parseUrl = ((e, t) =>({
url: e.split('?') [0] || '',
query: a(s(e), t)
}))
},
function (e, t, n) {
'use strict';
n.r(t);
var i = n(0);
n(245),
n(3);
const r = e=>{
if (e < 1000000000000) return !1;
let t = e % 10;
return (e=>{
for (var t = 0, n = e.length - 1; n >= 0; n--) t += parseInt(e.charAt(n)) * (1 + n % 2 * 2);
return (10 - t % 10) % 10
}) ('' + Math.floor(e / 10)) === t
};
var o = n(104);
n(22),
n(118),
n(117),
n(116),
n(115),
n(114),
n(113);
n(112),
n(107),
document.addEventListener('contextmenu', e=>e.preventDefault());
let s = o.parse(window.location.search);
const a = () =>{
i.options.html5.nativeAudioTracks = !1,
i.options.html5.nativeVideoTracks = !1,
i.options.html5.nativeTextTracks = !1,
i.options.html5.nativeControlsForTouch = !1,
i.options.hls.overrideNative = !0,
i.IS_IOS && (iOSnotSupportMsg = {
'The media could not be loaded, either because the server or network failed or because the format is not supported.': 'iOS isn\'t supported, please use difference OS.'
}, i.addLanguage('en', iOSnotSupportMsg), i.addLanguage('th', iOSnotSupportMsg), i.addLanguage('jp', iOSnotSupportMsg));
i('#player', {
poster: s.i ? s.i : 'https://i.imgur.com/tW5Naji.png',
sources: [
{
src: 'https://kubrick-data.tafasu.com/data/' + s.v,
type: 'application/x-mpegURL',
withCredentials: !1
}
],
playbackRates: [
0.25,
0.5,
0.75,
1,
1.25,
1.5,
2
]
}, function () {
this.hotkeys({
volumeStep: 0.1,
seekStep: 5,
enableModifiersForNumbers: !1,
alwaysCaptureHotkeys: !0,
enableVolumeScroll: !1
}),
this.persistvolume({
namespace: 'kubrick-global-volume'
}),
this.seekButtons({
forward: 10,
back: 10
}),
this.remember({
localStorageKey: 'kubrick-remember-' + s.v
}),
this.mobilelandscapefullscreen(),
this.messagepoppy({
message: (e=>{
try {
let t = parseInt(e, 36);
return Math.floor(parseInt(t) / 10) - 100000000000
} catch (e) {
return ''
}
}) (s.u)
})
})
};
(() =>{
let e = window.document.referrer;
if (e || '' != e) return !1;
let t = e.split('/');
if (t.length < 3) return !1;
t = t[2];
let n = !1;
return ['dGFmYXN1LmNvbQ==',
'd3d3LnRhZmFzdS5jb20=',
'd3d3Mi50YWZhc3UuY29t',
'a3Vicmljay50YWZhc3UuY29t'].forEach(e=>{
atob(e) == t && (n = !0)
}),
n
}) () && (() =>window.location.protocol == atob('aHR0cHM6')) () ? (e=>{
try {
let t = parseInt(e, 36);
return r(t)
} catch (e) {
return !1
}
}) (s.u) && a()  : window.location.referer && '' != window.location.referer ? window.location.replace(window.location.referer)  : window.location.replace('https://www.tafasu.com/')
},
function (e, t, n) {
(t = e.exports = n(50) (!1)).push([e.i,
'@import url(https://fonts.googleapis.com/css?family=Material+Icons);',
'']),
t.push([e.i,
'.video-js .vjs-seek-button {\r\n  font-family: \'Material Icons\';\r\n  cursor: pointer;\r\n}\r\n.video-js .vjs-seek-button.skip-back::before {\r\n  content: \'\\E042\';\r\n}\r\n.video-js .vjs-seek-button.skip-back.skip-10::before {\r\n  content: \'\\E059\';\r\n}\r\n.video-js .vjs-seek-button.skip-back.skip-5::before {\r\n  content: \'\\E05B\';\r\n}\r\n.video-js .vjs-seek-button.skip-back.skip-30::before {\r\n  content: \'\\E05A\';\r\n}\r\n.video-js .vjs-seek-button.skip-forward::before {\r\n  content: \'\\E5D5\';\r\n}\r\n.video-js .vjs-seek-button.skip-forward.skip-10::before {\r\n  content: \'\\E056\';\r\n}\r\n.video-js .vjs-seek-button.skip-forward.skip-5::before {\r\n  content: \'\\E058\';\r\n}\r\n.video-js .vjs-seek-button.skip-forward.skip-30::before {\r\n  content: \'\\E057\';\r\n}\r\n.video-js.vjs-v6 .vjs-seek-button.skip-back::before, .video-js.vjs-v6 .vjs-seek-button.skip-back.skip-10::before, .video-js.vjs-v6 .vjs-seek-button.skip-back.skip-5::before, .video-js.vjs-v6 .vjs-seek-button.skip-back.skip-30::before, .video-js.vjs-v6 .vjs-seek-button.skip-forward::before, .video-js.vjs-v6 .vjs-seek-button.skip-forward.skip-10::before, .video-js.vjs-v6 .vjs-seek-button.skip-forward.skip-5::before, .video-js.vjs-v6 .vjs-seek-button.skip-forward.skip-30::before {\r\n  content: none;\r\n}\r\n.video-js.vjs-v6 .vjs-seek-button.skip-back .vjs-icon-placeholder::before {\r\n  content: \'\\E042\';\r\n}\r\n.video-js.vjs-v6 .vjs-seek-button.skip-back.skip-10 .vjs-icon-placeholder::before {\r\n  content: \'\\E059\';\r\n}\r\n.video-js.vjs-v6 .vjs-seek-button.skip-back.skip-5 .vjs-icon-placeholder::before {\r\n  content: \'\\E05B\';\r\n}\r\n.video-js.vjs-v6 .vjs-seek-button.skip-back.skip-30 .vjs-icon-placeholder::before {\r\n  content: \'\\E05A\';\r\n}\r\n.video-js.vjs-v6 .vjs-seek-button.skip-forward .vjs-icon-placeholder::before {\r\n  content: \'\\E5D5\';\r\n}\r\n.video-js.vjs-v6 .vjs-seek-button.skip-forward.skip-10 .vjs-icon-placeholder::before {\r\n  content: \'\\E056\';\r\n}\r\n.video-js.vjs-v6 .vjs-seek-button.skip-forward.skip-5 .vjs-icon-placeholder::before {\r\n  content: \'\\E058\';\r\n}\r\n.video-js.vjs-v6 .vjs-seek-button.skip-forward.skip-30 .vjs-icon-placeholder::before {\r\n  content: \'\\E057\';\r\n}\r\n',
''])
},
function (e, t, n) {
var i = n(106);
'string' == typeof i && (i = [
[e.i,
i,
'']
]);
var r = {
hmr: !0,
transform: void 0,
insertInto: void 0
};
n(49) (i, r);
i.locals && (e.exports = i.locals)
},
function (e, t) {
e.exports = function (e) {
var t = 'undefined' != typeof window && window.location;
if (!t) throw new Error('fixUrls requires window.location');
if (!e || 'string' != typeof e) return e;
var n = t.protocol + '//' + t.host,
i = n + t.pathname.replace(/\/[^\/]*$/, '/');
return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (e, t) {
var r,
o = t.trim().replace(/^"(.*)"$/, function (e, t) {
return t
}).replace(/^'(.*)'$/, function (e, t) {
return t
});
return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o) ? e : (r = 0 === o.indexOf('//') ? o : 0 === o.indexOf('/') ? n + o : i + o.replace(/^\.\//, ''), 'url(' + JSON.stringify(r) + ')')
})
}
},
function (e, t) {
e.exports = 'data:application/vnd.ms-fontobject;base64,KBsAAIQaAAABAAIAAAAAAAIABQMAAAAAAAABAJABAAAAAExQAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAACU8fVgAAAAAAAAAAAAAAAAAAAAAAAA4AVgBpAGQAZQBvAEoAUwAAAA4AUgBlAGcAdQBsAGEAcgAAABYAVgBlAHIAcwBpAG8AbgAgADEALgAwAAAADgBWAGkAZABlAG8ASgBTAAAAAAAAAQAAAAsAgAADADBHU1VCIIslegAAATgAAABUT1MvMlGJXdEAAAGMAAAAVmNtYXA59PfGAAACaAAAAyJnbHlmAwnSwwAABdAAABEIaGVhZBLLaEsAAADgAAAANmhoZWEOAwchAAAAvAAAACRobXR44AAAAAAAAeQAAACEbG9jYT00QcYAAAWMAAAARG1heHABMgCBAAABGAAAACBuYW1l1cf1oAAAFtgAAAIKcG9zdEACX/QAABjkAAABngABAAAHAAAAAAAHAAAA//8HAQABAAAAAAAAAAAAAAAAAAAAIQABAAAAAQAAVh9PCV8PPPUACwcAAAAAANZWDqcAAAAA1lYOpwAAAAAHAQcAAAAACAACAAAAAAAAAAEAAAAhAHUABwAAAAAAAgAAAAoACgAAAP8AAAAAAAAAAQAAAAoAMAA+AAJERkxUAA5sYXRuABoABAAAAAAAAAABAAAABAAAAAAAAAABAAAAAWxpZ2EACAAAAAEAAAABAAQABAAAAAEACAABAAYAAAABAAAAAQbKAZAABQAABHEE5gAAAPoEcQTmAAADXABXAc4AAAIABQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUGZFZABA8QHxIAcAAAAAoQcAAAAAAAABAAAAAAAAAAAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAAAAAABQAAAAMAAAAsAAAABAAAAZIAAQAAAAAAjAADAAEAAAAsAAMACgAAAZIABABgAAAABAAEAAEAAPEg//8AAPEB//8AAAABAAQAAAABAAIAAwAEAAUABgAHAAgACQAKAAsADAANAA4ADwAQABEAEgATABQAFQAWABcAGAAZABoAGwAcAB0AHgAfACAAAAEGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAZAAAAAAAAAAIAAA8QEAAPEBAAAAAQAA8QIAAPECAAAAAgAA8QMAAPEDAAAAAwAA8QQAAPEEAAAABAAA8QUAAPEFAAAABQAA8QYAAPEGAAAABgAA8QcAAPEHAAAABwAA8QgAAPEIAAAACAAA8QkAAPEJAAAACQAA8QoAAPEKAAAACgAA8QsAAPELAAAACwAA8QwAAPEMAAAADAAA8Q0AAPENAAAADQAA8Q4AAPEOAAAADgAA8Q8AAPEPAAAADwAA8RAAAPEQAAAAEAAA8REAAPERAAAAEQAA8RIAAPESAAAAEgAA8RMAAPETAAAAEwAA8RQAAPEUAAAAFAAA8RUAAPEVAAAAFQAA8RYAAPEWAAAAFgAA8RcAAPEXAAAAFwAA8RgAAPEYAAAAGAAA8RkAAPEZAAAAGQAA8RoAAPEaAAAAGgAA8RsAAPEbAAAAGwAA8RwAAPEcAAAAHAAA8R0AAPEdAAAAHQAA8R4AAPEeAAAAHgAA8R8AAPEfAAAAHwAA8SAAAPEgAAAAIAAAAAAAAAAOAGgAfgDMAOABAgFCAWwBmAHCAhgCWAK0AuADMAOwA94EMASWBNwFJAVmBYoGIAZmBrQG6gdYCBIIWAhuCIQAAQAAAAAFiwWLAAIAAAERAQJVAzYFi/vqAgsAAAMAAAAABmsGawACABsANAAACQITIgcOAQcGEBceARcWIDc+ATc2ECcuAScmAyInLgEnJjQ3PgE3NjIXHgEXFhQHDgEHBgLrAcD+QJWYi4bOOTs7Oc6GiwEwi4bOOTs7Oc6Gi5h5b2umLS8vLaZrb/Jva6YtLy8tpmtvAjABUAFQAZs7Oc6Gi/7Qi4bOOTs7Oc6GiwEwi4bOOTv6wC8tpmtv8m9rpi0vLy2ma2/yb2umLS8AAAIAAAAABUAFiwADAAcAAAEhESkBESERAcABK/7VAlUBKwF1BBb76gQWAAAABAAAAAAGIQYgAAcAFwAnACoAAAE0JyYnFRc2NxQHFzY1NCcuAScVHgEXFgEHASERIQERAQYHFTY3FzcBBxcE0DQyVbgDuylxTUVD7pVsqi8x+7RfAWH+nwErAXUBPlBZmXqZX/1gnJwDgGFSUCqluBgYY2JxkqSdjIe9Ipogk2VpAixf/p/+QP6LAfb+wj0bmiNkmF8ElpycAAAAAQAAAAAEqwXWAAUAAAERIQERAQILASoBdv6KBGD+QP6LBKr+iwAAAAIAAAAABWYF1gAIAA4AAAE0JyYnETY3NgERIQERAQVlNDJUVDI0/BABKwF1/osDgGFSUCr9pipQUgFB/kD+iwSq/osAAwAAAAAGIAYPAAUADgAiAAATESEBEQEFNCcmJxE2NzYDFR4BFxYUBw4BBxU+ATc2ECcuAeABKwF1/osCxTQyVVUyNLtsqi8xMS+qbJXuQ0VFQ+4EYP5A/osEqv6L4GFSUCr9pipQUgLwmiCTZWnoaWWTIJoivYeMATqMh70AAAAEAAAAAAWLBYsABQALABEAFwAAASMRITUjAzM1MzUhASMVIREjAxUzFTMRAguWAXbglpbg/ooDgOABdpbg4JYC6/6KlgIK4Jb8gJYBdgKgluABdgAEAAAAAAWLBYsABQALABEAFwAAATMVMxEhEyMVIREjATM1MzUhEzUjESE1AXXglv6K4OABdpYBwJbg/oqWlgF2AlXgAXYBwJYBdvvq4JYBwOD+ipYAAAAAAgAAAAAF1gXWABMAFwAAASEiDgEVERQeATMhMj4BNRE0LgEDIREhBUD8gClEKChEKQOAKUQoKEQp/IADgAXVKEQp/IApRCgoRCkDgClEKPvrA4AABgAAAAAGawZrAAgADQAVAB4AIwAsAAAJASYjIgcGBwElLgEnAQUhATY3NjU0BQEGBwYVFBchBR4BFwEzARYzMjc2NwECvgFkUlCEe3ZjARIDjjPtn/7uAuX90AF6XTM1/BL+3V0zNQ8CMP3kM+2fARJ4/t1TT4R7dmP+7gPwAmgTLStR/id3o/o8/idL/XNmf4SPS0sB+GZ/hI9LSkuj+jwB2f4IEy0rUQHZAAUAAAAABmsF1gATABcAGwAfACMAAAEhIg4BFREUHgEzITI+ATURNC4BASEVIQEhNSEFITUhNSE1IQXV+1YpRSgoRSkEqilFKChF+y0BKv7WAur9FgLqAcD+1gEq/RYC6gXVKEQp/IApRCgoRCkDgClEKP2rlf7VlZWVlpUAAAAAAwAAAAAGIAXWABMAKwBDAAABISIOARURFB4BMyEyPgE1ETQuAQEjNSMVMzUzFRQGKwEiJjURNDY7ATIWFQUjNSMVMzUzFRQGKwEiJjURNDY7ATIWFQWL++ooRSgoRSgEFihFKChF/YJwlZVwKx/gHywsH+AfKwILcJWVcCwf4B8rKx/gHywF1ShEKfyAKUQoKEQpA4ApRCj99iXgJUofLCwfASofLCwfSiXgJUofLCwfASofLCwfAAYAAAAABiAE9gADAAcACwAPABMAFwAAEzM1IxEzNSMRMzUjASE1IREhNSERFSE14JWVlZWVlQErBBX76wQV++sEFQM1lv5AlQHAlf5Alv5AlQJVlZUAAAABAAAAAAYhBmwAMQAAASIGBwE2NCcBHgEzMj4BNC4BIg4BFRQXAS4BIyIOARQeATMyNjcBBhUUHgEyPgE0LgEFQCpLHv3sBwcCDx5PKz1nPDxnemc8B/3xHk8rPWc8PGc9K08eAhQGO2R2ZDs7ZAJPHhwBNxsyGwE0HSA8Z3pnPDxnPRkb/s0cIDxnemc8IBz+yhkYO2Q6OmR2ZDsAAAAAAgAAAAAGWQZrAEMAUAAAATY0Jzc+AScDLgEPASYvAS4BIyEiBg8BBgcnJgYHAwYWHwEGFBcHDgEXEx4BPwEWHwEeATMhMjY/ATY3FxY2NxM2JicFIi4BND4BMh4BFA4BBasFBZ4KBgeWBxoMujxCHAMVDv7WDhUCHEQ6ug0aB5UHBQudBQWdCwUHlQcaDbo7QxwCFQ4BKg4VAhxEOroNGgeVBwUL/ThHeEZGeI54RkZ4AzcqPip7CRsMAQMMCQVLLhvGDhISDsYcLUsFCQz+/QwbCXsqPip7CRsM/v0MCQVLLhvGDhISDsYcLUsFCQwBAwwbCUFGeI54RkZ4jnhGAAEAAAAABmsGawAYAAATFBceARcWIDc+ATc2ECcuAScmIAcOAQcGlTs5zoaLATCLhs45Ozs5zoaL/tCLhs45OwOAmIuGzjk7OznOhosBMIuGzjk7OznOhosAAAAAAgAAAAAGawZrABgAMQAAASIHDgEHBhAXHgEXFiA3PgE3NhAnLgEnJgMiJy4BJyY0Nz4BNzYyFx4BFxYUBw4BBwYDgJiLhs45Ozs5zoaLATCLhs45Ozs5zoaLmHlva6YtLy8tpmtv8m9rpi0vLy2ma28Gazs5zoaL/tCLhs45Ozs5zoaLATCLhs45O/rALy2ma2/yb2umLS8vLaZrb/Jva6YtLwADAAAAAAZrBmsAGAAxAD4AAAEiBw4BBwYQFx4BFxYgNz4BNzYQJy4BJyYDIicuAScmNDc+ATc2MhceARcWFAcOAQcGExQOASIuATQ+ATIeAQOAmIqGzzk7OznPhooBMIqGzzk7OznPhoqYeW9rpi0vLy2ma2/yb2umLS8vLaZrb2c8Z3pnPDxnemc8Bms7Oc+Giv7QiobPOTs7Oc+GigEwiobPOTv6wC8tpmtv8m9rpi0vLy2ma2/yb2umLS8CVT1nPDxnemc8PGcAAAAEAAAAAAYgBiEAEwAfACkALQAAASEiDgEVERQeATMhMj4BNRE0LgEBIzUjFSMRMxUzNTsBITIWFREUBiMhNzM1IwWL++ooRSgoRSgEFihFKChF/YJwlXBwlXCWASofLCwf/tZwlZUGIChFKPvqKEUoKEUoBBYoRSj8gJWVAcC7uywf/tYfLHDgAAAAAAIAAAAABmsGawAYACQAAAEiBw4BBwYQFx4BFxYgNz4BNzYQJy4BJyYTBwkBJwkBNwkBFwEDgJiLhs45Ozs5zoaLATCLhs45Ozs5zoaL3Wn+9P70aQEL/vVpAQwBDGn+9QZrOznOhov+0IuGzjk7OznOhosBMIuGzjk7/AlpAQv+9WkBDAEMaf71AQtp/vQAAAEAAAAABdYGtgAnAAABEQkBETIXFhcWFAcGBwYiJyYnJjUjFBceARcWMjc+ATc2NCcuAScmA4D+iwF1emhmOz09O2Zo9GhmOz2VLy2la2/0b2ulLS8vLaVrbwWLASr+i/6LASo9O2Zo82llPD09PGVpeXlva6YtLy8tpmtv829rpS4vAAEAAAAABT8HAAAUAAABESMiBh0BIQMjESERIxEzNTQ2MzIFP51WPAElJ/7+zv//0K2TBvT++EhIvf7Y/QkC9wEo2rrNAAAAAAQAAAAABo4HAAAwAEUAYABsAAABFB4DFRQHBgQjIiYnJjU0Njc2JS4BNTQ3BiMiJjU0Njc+ATMhByMeARUUDgMnMjY3NjU0LgIjIgYHBhUUHgMTMj4CNTQuAS8BJi8CJiMiDgMVFB4CATMVIxUjNSM1MzUzAx9AW1pAMEj+6p+E5TklWUqDAREgHxUuFpTLSD9N03ABooqDSkwxRUYxkiZQGjUiP2pAKlEZLxQrPVk2OmtbNw4PEx4KHCVOECA1aG9TNkZxfQNr1dVp1NRpA+QkRUNQgE5aU3pzU2A8R1GKLlISKkApJDEEwZRSmjZCQFg/jFpIc0c7QD4hGzlmOoZ9UichO2UuZ2dSNPyXGjRePhkwJBgjCxcdOAIOJDhdO0ZrOx0DbGzb22zZAAMAAAAABoAGbAADAA4AKgAAAREhEQEWBisBIiY0NjIWAREhETQmIyIGBwYVESESEC8BIRUjPgMzMhYB3f62AV8BZ1QCUmRnpmQEj/63UVY/VRUL/rcCAQEBSQIUKkdnP6vQBI/8IQPfATJJYmKTYWH83f3IAhJpd0UzHjP91wGPAfAwMJAgMDgf4wAAAQAAAAAGlAYAADEAAAEGBxYVFAIOAQQjICcWMzI3LgEnFjMyNy4BPQEWFy4BNTQ3FgQXJjU0NjMyFzY3Bgc2BpRDXwFMm9b+0qz+8eEjK+GwaaYfIRwrKnCTRE5CTix5AVvGCL2GjGBtYCVpXQVoYkUOHIL+/e63bZEEigJ9YQULF7F1BCYDLI5TWEuVswomJIa9ZhU5cz8KAAAAAQAAAAAFgAcAACIAAAEXDgEHBi4DNREjNT4ENz4BOwERIRUhERQeAjc2BTBQF7BZaK1wTiGoSHJEMBQFAQcE9AFN/rINIEMwTgHP7SM+AQI4XHh4OgIg1xpXXW9XLQUH/lj8/foeNDUeAQIAAQAAAAAGgAaAAEoAAAEUAgQjIic2PwEeATMyPgE1NC4BIyIOAxUUFhcWPwE2NzYnJjU0NjMyFhUUBiMiJjc+AjU0JiMiBhUUFwMGFyYCNTQSJCAEEgaAzv6f0W9rOxM2FGo9eb5od+KOabZ/WytQTR4ICAYCBhEz0amXqYlrPUoOCCUXNjI+VhljEQTO/s4BYQGiAWHOA4DR/p/OIF1H0yc5ifCWcsh+OmB9hkNoniAMIB8YBhcUPVqX2aSDqu5XPSN1WR8yQnJVSTH+XkZrWwF86dEBYc7O/p8AAAcAAAAABwEEzwAXACEAOABPAGYAcQB0AAABETM2FxYXFhcWFxYHDgEHBgcGJyYvASY3FjY3Ni4BBxEUBRY3Nj8BNjc2NTYnIwYXFh8BFhcWFxQXFjc2PwE2NzY3NicjBhcWHwEWFxYVFhcWNzY/ATY3Njc2JyMGFxYfARYXFhUWBTM/ARUzESMGCwEBFScDHBxoLkw0PSxNKy8KB1VER1M1aDUqAQKrUmsJBzBiQAF+GhILEAokFBcBfh0BAwIGAycXGwEkGhILEAokFBYBAX4eAQQCBQQnFxsBIxkTCxAKJBQWAQF+HgEEAgUEJxcbAflD7kHhqs0N8e8CFo4ByQL9AgEDDA8fN1xleVmYLzEIBAEBAgMEwgNWTEJkNAX+lQfCBxMLIBRAR09Tx60ICAUJBkdMXFvAugcTCyAUQEdPU8etCAgFCQZHTFxbwLoHEwsgFEBHT1PHrQgIBQkGR0xcW8DAZAFlAwwV/oP+hgH9+QEAAAEAAAAABiEGtgAsAAABIgcOAQcGFREUHgE7AREhNTQ3PgE3NjIXHgEXFh0BIREzMj4BNRE0Jy4BJyYDgIl9eLozNTxnPeD+1SkokV5h1GFekSgp/tXgPWc8NTO6eH0GtTQzu3h9if32PWc8AlWVa2FekCgpKSiQXmFrlf2rPGc9AgqJfXi7MzQAAAAAAgAAAAAFQAVAAAIABgAACQIhETMRAcACe/2FAuuVAcABwAHA/IADgAAAAAACAAAAAAVABUAAAwAGAAABMxEjCQERAcCVlQEFAnsFQPyAAcD+QAOAAAAAAAAAEADGAAEAAAAAAAEABwAAAAEAAAAAAAIABwAHAAEAAAAAAAMABwAOAAEAAAAAAAQABwAVAAEAAAAAAAUACwAcAAEAAAAAAAYABwAnAAEAAAAAAAoAKwAuAAEAAAAAAAsAEwBZAAMAAQQJAAEADgBsAAMAAQQJAAIADgB6AAMAAQQJAAMADgCIAAMAAQQJAAQADgCWAAMAAQQJAAUAFgCkAAMAAQQJAAYADgC6AAMAAQQJAAoAVgDIAAMAAQQJAAsAJgEeVmlkZW9KU1JlZ3VsYXJWaWRlb0pTVmlkZW9KU1ZlcnNpb24gMS4wVmlkZW9KU0dlbmVyYXRlZCBieSBzdmcydHRmIGZyb20gRm9udGVsbG8gcHJvamVjdC5odHRwOi8vZm9udGVsbG8uY29tAFYAaQBkAGUAbwBKAFMAUgBlAGcAdQBsAGEAcgBWAGkAZABlAG8ASgBTAFYAaQBkAGUAbwBKAFMAVgBlAHIAcwBpAG8AbgAgADEALgAwAFYAaQBkAGUAbwBKAFMARwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABzAHYAZwAyAHQAdABmACAAZgByAG8AbQAgAEYAbwBuAHQAZQBsAGwAbwAgAHAAcgBvAGoAZQBjAHQALgBoAHQAdABwADoALwAvAGYAbwBuAHQAZQBsAGwAbwAuAGMAbwBtAAAAAgAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhAQIBAwEEAQUBBgEHAQgBCQEKAQsBDAENAQ4BDwEQAREBEgETARQBFQEWARcBGAEZARoBGwEcAR0BHgEfASABIQEiAARwbGF5C3BsYXktY2lyY2xlBXBhdXNlC3ZvbHVtZS1tdXRlCnZvbHVtZS1sb3cKdm9sdW1lLW1pZAt2b2x1bWUtaGlnaBBmdWxsc2NyZWVuLWVudGVyD2Z1bGxzY3JlZW4tZXhpdAZzcXVhcmUHc3Bpbm5lcglzdWJ0aXRsZXMIY2FwdGlvbnMIY2hhcHRlcnMFc2hhcmUDY29nBmNpcmNsZQ5jaXJjbGUtb3V0bGluZRNjaXJjbGUtaW5uZXItY2lyY2xlAmhkBmNhbmNlbAZyZXBsYXkIZmFjZWJvb2sFZ3BsdXMIbGlua2VkaW4HdHdpdHRlcgZ0dW1ibHIJcGludGVyZXN0EWF1ZGlvLWRlc2NyaXB0aW9uBWF1ZGlvCW5leHQtaXRlbQ1wcmV2aW91cy1pdGVtAAAAAA=='
},
function (e, t) {
e.exports = function (e) {
return 'string' != typeof e ? e : (/^['"].*['"]$/.test(e) && (e = e.slice(1, - 1)), /["'() \t\n]/.test(e) ? '"' + e.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"' : e)
}
},
function (e, t, n) {
var i = n(110);
(e.exports = n(50) (!1)).push([e.i,
'.video-js .vjs-big-play-button .vjs-icon-placeholder:before, .vjs-button > .vjs-icon-placeholder:before, .video-js .vjs-modal-dialog, .vjs-modal-dialog .vjs-modal-dialog-content {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n\n.video-js .vjs-big-play-button .vjs-icon-placeholder:before, .vjs-button > .vjs-icon-placeholder:before {\n  text-align: center; }\n\n@font-face {\n  font-family: VideoJS;\n  src: url(' + i(n(109)) + '?#iefix) format("eot"); }\n\n@font-face {\n  font-family: VideoJS;\n  src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABBIAAsAAAAAGoQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAPgAAAFZRiV3RY21hcAAAAYQAAADQAAADIjn098ZnbHlmAAACVAAACv4AABEIAwnSw2hlYWQAAA1UAAAAKwAAADYSy2hLaGhlYQAADYAAAAAbAAAAJA4DByFobXR4AAANnAAAAA8AAACE4AAAAGxvY2EAAA2sAAAARAAAAEQ9NEHGbWF4cAAADfAAAAAfAAAAIAEyAIFuYW1lAAAOEAAAASUAAAIK1cf1oHBvc3QAAA84AAABDwAAAZ5AAl/0eJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGQ7xTiBgZWBgaWQ5RkDA8MvCM0cwxDOeI6BgYmBlZkBKwhIc01hcPjI+FGBHcRdyA4RZgQRAC4HCwEAAHic7dFprsIgAEXhg8U61XmeWcBb1FuQP4w7ZQXK5boMm3yclFDSANAHmuKviBBeBPQ8ymyo8w3jOh/5r2ui5nN6v8sYNJb3WMdeWRvLji0DhozKdxM6psyYs2DJijUbtuzYc+DIiTMXrty4k8oGLb+n0xCe37ekM7Z66j1DbUy3l6PpHnLfdLO5NdSBoQ4NdWSoY9ON54mhdqa/y1NDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUJORPqkhTd54nJ1YDXBU1RV+576/JBs2bPYPkrDZt5vsJrv53V/I5mclhGDCTwgGBQQSTEji4hCkYIAGd4TGIWFAhV0RQTpWmQp1xv6hA4OTOlNr2zFANbHUYbq2OtNCpViRqsk+e+7bTQAhzti8vPfuPffcc88959zznbcMMPjHD/KDDGEY0ABpYX384NhlomIYlo4JISGEY9mMh2FSidYiqkEUphtNYDSY/dXg9023l4DdxlqUl0chuZRhncJKrsCQHIwcGuwfnhMIzBnuH4Sym+1D2zaGjheXlhYfD238z80mKYMmvJ5XeOTzd8z9eujbMxJNhu4C9xPE/bCMiDuSNIWgkTQwBE55hLSAE7ZwhrHLnAHZOGV/kmBGTiNjZxzI77Hb7Hqjz68TjT6vh+5JT/cCIkqS0D6CqPf5jX4Qjdx5j6vlDfZM4aZFdbVXIxtOlJaP/WottMnH6CJQ3bTiue3PrY23HjnChtuamxwvvzFjxkPrNj3z0tG9T561HDYf6OgmRWvlY3JQHoQb8ltV2Yet7YfWctEjR1AtxS/cSX6U4alf6NJEBQ7YKg9wrXQKd0IeZCb2ux75Uhh1Un+Nz+9LTOE7PK777nN5xqdTneTBhCbx446mZrhnUkrCz2YhA9dSMxaG0SYmT8hi9ZPu1E94PJYQSH6LRmhxec7Q7ZeXntgQuVpbh+a4qWNsckVyTdn0P7o7DpgPW84+uRcq0BITflBikGdUjAZ9wYBVI3mtrNvr9kpg1UsaK6t3690aoorC1lg0GpMH2HAMtkZjsSi5Ig9ESVosOh7GQfLjKNLvKpMKkLSKNFAka710GdgSi8oDMSoNhqjkKBXTgn3swtaxyzGkUzIzae9RtLdWkSlZ1KDX6EzgllzV4NV4SoDFSOGD4+HCeQUF8wrZ5Hs8zIb5EaVxy8DYFTbMCJPnLIWZxugZE2NlivC0gc1qEQUR8jEKgZcAXeH18BiCgl5nlHh0CrjB4Hb5fX4gb0J7c9PuHVsfgkx2n/vTY/JV8kn8PGxf7faOZ8qX8JVByuIf4whk9sqXli2hvPJV9hrp0hY7l8r2x37ydaVsb4xvXv/47v2NjfCl8m5oRDJclFMoE1yk0Uh1Te4/m8lFXe9qBZD0EkheicebXvzI2PLCuoKCukLuhPIeKwaHPEouxw3kMqaIUXDQ1p0mip+MyCORSCQaoUsnY1VZ38nUTrG21WvVo4f1OsEJFhvSfAFwGfT8VHRMeAVUpwLOoLzjT/REIj3O3FhuURE+nERF+0pTId5Fyxv5sfwGyg4O+my4vZv0sZm7oeQlFZORiB+tG0MweVNraeitl7yxiPIHTk4/diVxs94o5lEYishB2iAtkchEnsActoEpx44Fo8XnsQMaA22BlqC20RmhBKzYojZyYaxg+JggMc4HHY2m+L9EkWSYljirOisrO7d3VorxzyZ6Vc4lJqITAu1b2wOBdrLElAP+bFc2eGaZFVbkmJktv5uT6Jlz5D/MnBFor6ig/JPnRViBsV3LNKGGqB1ChJ0tgQywlVLFJIuQgTFttwkiKxhyQdAZMdMYtSaoAewqfvXVYPAbDT6/1mez85YS8FSDywQ6NfAnef6FNEGMilnppyvn5rB6tTyq1pOceRWnp2WJEZFXHeX5oyoem1nTTgdqc4heDY7bOeKz63vnz+/dRx+s31Ht2JGanQ5seirfWJL9tjozU/12TnEjn5oux9OzU3ckGbBzBwNOyk69JykKH0n/0LM9A72tuwM3zQpIRu4AxiToseEpgPOmbROyFe9/X2yeUvoUsCyEvjcgs7fpWP3/aKlFN0+6HFUe6D9HFz/XPwBlN9tTqNyZjFJ8UO2RUT5/h4CptCctEyeisnOyXjALEp7dXKaQKf6O7IMnGjNNACRMLxqdYJX8eMLvmmd68D+ayBLyKKYZwYxDt/GNhzETDJ05Qxlyi3pi3/Z93ndYVSumgj0V/KkIFlO6+1K3fF2+3g0q+YtuSIf0bvmLqV09nnobI6hwcjIP8aPCKayjsF5JBY3LaKAeRLSyYB1h81oTwe9SlPMkXB7G0mfL9q71gaqqwPqu67QRKS1+ObTx+sbQy9QV2OQHEScGkdFBeT7v7qisqqrs6N52i78/R+6S0qQONVj26agOVoswCyQWIV5D86vH53bxNUeXV0K+XZaHv/nm/KsHhOvylwsWnJX/HE8l/4WCv5x+l5n08z6UU8bUMa3MBpSmM7F63AxntdC9eBCKEZW9Hr+ABNqtxgAQrSbMtmrW7lKQuoSgBhSrTazWVU2QAKWY8wiiuhqFmQgWJBgoXiuWIm42N7hqZbBsgXz52O5P5uSvaNgFGnOuvsRw8I8Laha91wMvDuxqWFheN7/8GVtTltdS83DQsXRmqc5ZtcJXEVrlV2doTWk5+Yunm71dG5f55m/qY0MjI93vv9/NfpxXV9sUXrxy2fbNy1or65cOlDRnOoKFeeXcbw42H/bNDT5Qs3flgs31gWC1lD1nfUV/X7NdCnSUdHY2e8afzfKsqZ5ZljfDqjLOmk3UebNXB+aHArPYDRs+/HDDxeT5DiP+sFg7OpRaVQMGBV89PpeBdj22hCE0Uub0UqwLrNWsG0cuyadgLXTeR5rbO4+3c/vl15cur2nRq+TXCQDcS3SO+s6ak+e5/eMS+1dw3btu3YG2tvFL8XdIZvdjdW6TO/4B7IdrZWVPmctm5/59AgsPItTSbCiIBr2OqIGzmu20SMKAS7yqwGBUfGfgjDYlLLDeF0SfcLB2LSx8flT+08/kzz6yOj96rft4rpTjdPQcmLd47uKibbDq7ZSz/XtbH2nN717Nd62rU+c8Icevvv7I09wA6WvjVcafb+FsbNG+ZQ80Rn6ZZsvrP7teP2dzTdoETvNhjCmsr8FID2sJ69VYvdUcxk4AzYRlKcaE38eXNRlfW9H1as9i6acLHp1XpuNB5K7DIvkX08y1ZYvh3KfWaiCzH+ztrSDmD7LuX73x/mJelB8Yj39t8nhNQJJ2CAthpoFGLsGgtSOCJooCGoaJAMTjSWHVZ08YAa1Fg9lPI5U6DOsGVjDasJeZZ+YyhfCwfOzCxlBA69M9XLXtza7H/rav+9Tjq5xNi0wpKQIRNO4Lrzz7yp5QVYM6Jd/oc1Uvn/mQhhuWh6ENXoS2YTZ8QT42bF5d/559zp5r0Uff2VnR2tdf2/WCOd2cO0Mw6qpWPnvxpV0nrt5fZd2yItc199GWe8vlNfNDq+CH/7yAAnB9hn7T4QO4c1g9ScxsZgmzntnE/IDGndtHMw69lFwoCnYsMGx+rBp8JSBqdLzBr9QRPq/PbhWMWFtQZp1xguy/haw3TEHm3TWAnxFWQQWgt7M5OV0lCz1VRYucpWliy7z6Zd4urwPIyeZQqli2Lgg7szJV09PysATbOQtYIrB2YzbkJYkGgJ0m4AjPUap1pvYu1K9qr97z0Yl3p332b2LYB78ncYIlRkau/8GObSsOlZancACE5d5ily+c2+7h5Yj4lqhVmXXB+iXLfvdqSgqfKtQvfHDV0OnvQR1qhw42XS/vkvsh/hXcrDFP0a+SJNIomEfD1nsrYGO+1bgTOJhM8Hv6ek+7vVglxuSRwoKn17S937bm6YJCeSSG0Op1n+7tE37tcZ/p7dsTv4EUrGpDbWueKigsLHhqTVsoEj+JU0kaSjnj9tz8/gryQWwJ9BcJXBC/7smO+I/IFURJetFPrdt5WcoL6DbEJaygI8CTHfQTjf40ofD+DwalTqIAAHicY2BkYGAA4jC5t2/j+W2+MnCzM4DAtTC+5cg0OyNYnIOBCUQBAAceB90AeJxjYGRgYGcAARD5/z87IwMjAypQBAAtgwI4AHicY2BgYGAfYAwAOkQA4QAAAAAAAA4AaAB+AMwA4AECAUIBbAGYAcICGAJYArQC4AMwA7AD3gQwBJYE3AUkBWYFigYgBmYGtAbqB1gIEghYCG4IhHicY2BkYGBQZChlYGcAASYg5gJCBob/YD4DABfTAbQAeJxdkE1qg0AYhl8Tk9AIoVDaVSmzahcF87PMARLIMoFAl0ZHY1BHdBJIT9AT9AQ9RQ9Qeqy+yteNMzDzfM+88w0K4BY/cNAMB6N2bUaPPBLukybCLvleeAAPj8JD+hfhMV7hC3u4wxs7OO4NzQSZcI/8Ltwnfwi75E/hAR7wJTyk/xYeY49fYQ/PztM+jbTZ7LY6OWdBJdX/pqs6NYWa+zMxa13oKrA6Uoerqi/JwtpYxZXJ1coUVmeZUWVlTjq0/tHacjmdxuL90OR8O0UEDYMNdtiSEpz5XQGqzlm30kzUdAYFFOb8R7NOZk0q2lwAyz1i7oAr1xoXvrOgtYhZx8wY5KRV269JZ5yGpmzPTjQhvY9je6vEElPOuJP3mWKnP5M3V+YAAAB4nG2PyXLCMBBE3YCNDWEL2ffk7o8S8oCnkCVHC5C/jzBQlUP6IHVPzYyekl5y0iL5X5/ooY8BUmQYIkeBEca4wgRTzDDHAtdY4ga3uMM9HvCIJzzjBa94wzs+8ImvZNAq8TM+HqVkKxWlrQiOxjujQkNlEzyNzl6Z/cU2XF06at7U83VQyklLpEvSnuzsb+HAPnPfQVgaupa1Jlu4sPLsFblcitaz0dHU0ZF1qatjZ1+aTXYCmp6u0gSvWNPyHLtFZ+ZeXWVSaEkqs3T8S74WklbGbNNNq4LL4+CWKtZDv2cfX8l8aFbKFhEnJnJ+IULFpqwoQnNHlHaVQtPBl+ypmbSWdmyC61KS/AKZC3Y+AA==) format("woff"), url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwR1NVQiCLJXoAAAE4AAAAVE9TLzJRiV3RAAABjAAAAFZjbWFwOfT3xgAAAmgAAAMiZ2x5ZgMJ0sMAAAXQAAARCGhlYWQSy2hLAAAA4AAAADZoaGVhDgMHIQAAALwAAAAkaG10eOAAAAAAAAHkAAAAhGxvY2E9NEHGAAAFjAAAAERtYXhwATIAgQAAARgAAAAgbmFtZdXH9aAAABbYAAACCnBvc3RAAl/0AAAY5AAAAZ4AAQAABwAAAAAABwAAAP//BwEAAQAAAAAAAAAAAAAAAAAAACEAAQAAAAEAAFYfTwlfDzz1AAsHAAAAAADWVg6nAAAAANZWDqcAAAAABwEHAAAAAAgAAgAAAAAAAAABAAAAIQB1AAcAAAAAAAIAAAAKAAoAAAD/AAAAAAAAAAEAAAAKADAAPgACREZMVAAObGF0bgAaAAQAAAAAAAAAAQAAAAQAAAAAAAAAAQAAAAFsaWdhAAgAAAABAAAAAQAEAAQAAAABAAgAAQAGAAAAAQAAAAEGygGQAAUAAARxBOYAAAD6BHEE5gAAA1wAVwHOAAACAAUDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFBmRWQAQPEB8SAHAAAAAKEHAAAAAAAAAQAAAAAAAAAAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAAAAAUAAAADAAAALAAAAAQAAAGSAAEAAAAAAIwAAwABAAAALAADAAoAAAGSAAQAYAAAAAQABAABAADxIP//AADxAf//AAAAAQAEAAAAAQACAAMABAAFAAYABwAIAAkACgALAAwADQAOAA8AEAARABIAEwAUABUAFgAXABgAGQAaABsAHAAdAB4AHwAgAAABBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAGQAAAAAAAAACAAAPEBAADxAQAAAAEAAPECAADxAgAAAAIAAPEDAADxAwAAAAMAAPEEAADxBAAAAAQAAPEFAADxBQAAAAUAAPEGAADxBgAAAAYAAPEHAADxBwAAAAcAAPEIAADxCAAAAAgAAPEJAADxCQAAAAkAAPEKAADxCgAAAAoAAPELAADxCwAAAAsAAPEMAADxDAAAAAwAAPENAADxDQAAAA0AAPEOAADxDgAAAA4AAPEPAADxDwAAAA8AAPEQAADxEAAAABAAAPERAADxEQAAABEAAPESAADxEgAAABIAAPETAADxEwAAABMAAPEUAADxFAAAABQAAPEVAADxFQAAABUAAPEWAADxFgAAABYAAPEXAADxFwAAABcAAPEYAADxGAAAABgAAPEZAADxGQAAABkAAPEaAADxGgAAABoAAPEbAADxGwAAABsAAPEcAADxHAAAABwAAPEdAADxHQAAAB0AAPEeAADxHgAAAB4AAPEfAADxHwAAAB8AAPEgAADxIAAAACAAAAAAAAAADgBoAH4AzADgAQIBQgFsAZgBwgIYAlgCtALgAzADsAPeBDAElgTcBSQFZgWKBiAGZga0BuoHWAgSCFgIbgiEAAEAAAAABYsFiwACAAABEQECVQM2BYv76gILAAADAAAAAAZrBmsAAgAbADQAAAkCEyIHDgEHBhAXHgEXFiA3PgE3NhAnLgEnJgMiJy4BJyY0Nz4BNzYyFx4BFxYUBw4BBwYC6wHA/kCVmIuGzjk7OznOhosBMIuGzjk7OznOhouYeW9rpi0vLy2ma2/yb2umLS8vLaZrbwIwAVABUAGbOznOhov+0IuGzjk7OznOhosBMIuGzjk7+sAvLaZrb/Jva6YtLy8tpmtv8m9rpi0vAAACAAAAAAVABYsAAwAHAAABIREpAREhEQHAASv+1QJVASsBdQQW++oEFgAAAAQAAAAABiEGIAAHABcAJwAqAAABNCcmJxUXNjcUBxc2NTQnLgEnFR4BFxYBBwEhESEBEQEGBxU2Nxc3AQcXBNA0MlW4A7spcU1FQ+6VbKovMfu0XwFh/p8BKwF1AT5QWZl6mV/9YJycA4BhUlAqpbgYGGNicZKknYyHvSKaIJNlaQIsX/6f/kD+iwH2/sI9G5ojZJhfBJacnAAAAAEAAAAABKsF1gAFAAABESEBEQECCwEqAXb+igRg/kD+iwSq/osAAAACAAAAAAVmBdYACAAOAAABNCcmJxE2NzYBESEBEQEFZTQyVFQyNPwQASsBdf6LA4BhUlAq/aYqUFIBQf5A/osEqv6LAAMAAAAABiAGDwAFAA4AIgAAExEhAREBBTQnJicRNjc2AxUeARcWFAcOAQcVPgE3NhAnLgHgASsBdf6LAsU0MlVVMjS7bKovMTEvqmyV7kNFRUPuBGD+QP6LBKr+i+BhUlAq/aYqUFIC8Jogk2Vp6GllkyCaIr2HjAE6jIe9AAAABAAAAAAFiwWLAAUACwARABcAAAEjESE1IwMzNTM1IQEjFSERIwMVMxUzEQILlgF24JaW4P6KA4DgAXaW4OCWAuv+ipYCCuCW/ICWAXYCoJbgAXYABAAAAAAFiwWLAAUACwARABcAAAEzFTMRIRMjFSERIwEzNTM1IRM1IxEhNQF14Jb+iuDgAXaWAcCW4P6KlpYBdgJV4AF2AcCWAXb76uCWAcDg/oqWAAAAAAIAAAAABdYF1gATABcAAAEhIg4BFREUHgEzITI+ATURNC4BAyERIQVA/IApRCgoRCkDgClEKChEKfyAA4AF1ShEKfyAKUQoKEQpA4ApRCj76wOAAAYAAAAABmsGawAIAA0AFQAeACMALAAACQEmIyIHBgcBJS4BJwEFIQE2NzY1NAUBBgcGFRQXIQUeARcBMwEWMzI3NjcBAr4BZFJQhHt2YwESA44z7Z/+7gLl/dABel0zNfwS/t1dMzUPAjD95DPtnwESeP7dU0+Ee3Zj/u4D8AJoEy0rUf4nd6P6PP4nS/1zZn+Ej0tLAfhmf4SPS0pLo/o8Adn+CBMtK1EB2QAFAAAAAAZrBdYAEwAXABsAHwAjAAABISIOARURFB4BMyEyPgE1ETQuAQEhFSEBITUhBSE1ITUhNSEF1ftWKUUoKEUpBKopRSgoRfstASr+1gLq/RYC6gHA/tYBKv0WAuoF1ShEKfyAKUQoKEQpA4ApRCj9q5X+1ZWVlZaVAAAAAAMAAAAABiAF1gATACsAQwAAASEiDgEVERQeATMhMj4BNRE0LgEBIzUjFTM1MxUUBisBIiY1ETQ2OwEyFhUFIzUjFTM1MxUUBisBIiY1ETQ2OwEyFhUFi/vqKEUoKEUoBBYoRSgoRf2CcJWVcCsf4B8sLB/gHysCC3CVlXAsH+AfKysf4B8sBdUoRCn8gClEKChEKQOAKUQo/fYl4CVKHywsHwEqHywsH0ol4CVKHywsHwEqHywsHwAGAAAAAAYgBPYAAwAHAAsADwATABcAABMzNSMRMzUjETM1IwEhNSERITUhERUhNeCVlZWVlZUBKwQV++sEFfvrBBUDNZb+QJUBwJX+QJb+QJUCVZWVAAAAAQAAAAAGIQZsADEAAAEiBgcBNjQnAR4BMzI+ATQuASIOARUUFwEuASMiDgEUHgEzMjY3AQYVFB4BMj4BNC4BBUAqSx797AcHAg8eTys9Zzw8Z3pnPAf98R5PKz1nPDxnPStPHgIUBjtkdmQ7O2QCTx4cATcbMhsBNB0gPGd6Zzw8Zz0ZG/7NHCA8Z3pnPCAc/soZGDtkOjpkdmQ7AAAAAAIAAAAABlkGawBDAFAAAAE2NCc3PgEnAy4BDwEmLwEuASMhIgYPAQYHJyYGBwMGFh8BBhQXBw4BFxMeAT8BFh8BHgEzITI2PwE2NxcWNjcTNiYnBSIuATQ+ATIeARQOAQWrBQWeCgYHlgcaDLo8QhwDFQ7+1g4VAhxEOroNGgeVBwULnQUFnQsFB5UHGg26O0McAhUOASoOFQIcRDq6DRoHlQcFC/04R3hGRniOeEZGeAM3Kj4qewkbDAEDDAkFSy4bxg4SEg7GHC1LBQkM/v0MGwl7Kj4qewkbDP79DAkFSy4bxg4SEg7GHC1LBQkMAQMMGwlBRniOeEZGeI54RgABAAAAAAZrBmsAGAAAExQXHgEXFiA3PgE3NhAnLgEnJiAHDgEHBpU7Oc6GiwEwi4bOOTs7Oc6Gi/7Qi4bOOTsDgJiLhs45Ozs5zoaLATCLhs45Ozs5zoaLAAAAAAIAAAAABmsGawAYADEAAAEiBw4BBwYQFx4BFxYgNz4BNzYQJy4BJyYDIicuAScmNDc+ATc2MhceARcWFAcOAQcGA4CYi4bOOTs7Oc6GiwEwi4bOOTs7Oc6Gi5h5b2umLS8vLaZrb/Jva6YtLy8tpmtvBms7Oc6Gi/7Qi4bOOTs7Oc6GiwEwi4bOOTv6wC8tpmtv8m9rpi0vLy2ma2/yb2umLS8AAwAAAAAGawZrABgAMQA+AAABIgcOAQcGEBceARcWIDc+ATc2ECcuAScmAyInLgEnJjQ3PgE3NjIXHgEXFhQHDgEHBhMUDgEiLgE0PgEyHgEDgJiKhs85Ozs5z4aKATCKhs85Ozs5z4aKmHlva6YtLy8tpmtv8m9rpi0vLy2ma29nPGd6Zzw8Z3pnPAZrOznPhor+0IqGzzk7OznPhooBMIqGzzk7+sAvLaZrb/Jva6YtLy8tpmtv8m9rpi0vAlU9Zzw8Z3pnPDxnAAAABAAAAAAGIAYhABMAHwApAC0AAAEhIg4BFREUHgEzITI+ATURNC4BASM1IxUjETMVMzU7ASEyFhURFAYjITczNSMFi/vqKEUoKEUoBBYoRSgoRf2CcJVwcJVwlgEqHywsH/7WcJWVBiAoRSj76ihFKChFKAQWKEUo/ICVlQHAu7ssH/7WHyxw4AAAAAACAAAAAAZrBmsAGAAkAAABIgcOAQcGEBceARcWIDc+ATc2ECcuAScmEwcJAScJATcJARcBA4CYi4bOOTs7Oc6GiwEwi4bOOTs7Oc6Gi91p/vT+9GkBC/71aQEMAQxp/vUGazs5zoaL/tCLhs45Ozs5zoaLATCLhs45O/wJaQEL/vVpAQwBDGn+9QELaf70AAABAAAAAAXWBrYAJwAAAREJAREyFxYXFhQHBgcGIicmJyY1IxQXHgEXFjI3PgE3NjQnLgEnJgOA/osBdXpoZjs9PTtmaPRoZjs9lS8tpWtv9G9rpS0vLy2la28FiwEq/ov+iwEqPTtmaPNpZTw9PTxlaXl5b2umLS8vLaZrb/Nva6UuLwABAAAAAAU/BwAAFAAAAREjIgYdASEDIxEhESMRMzU0NjMyBT+dVjwBJSf+/s7//9Ctkwb0/vhISL3+2P0JAvcBKNq6zQAAAAAEAAAAAAaOBwAAMABFAGAAbAAAARQeAxUUBwYEIyImJyY1NDY3NiUuATU0NwYjIiY1NDY3PgEzIQcjHgEVFA4DJzI2NzY1NC4CIyIGBwYVFB4DEzI+AjU0LgEvASYvAiYjIg4DFRQeAgEzFSMVIzUjNTM1MwMfQFtaQDBI/uqfhOU5JVlKgwERIB8VLhaUy0g/TdNwAaKKg0pMMUVGMZImUBo1Ij9qQCpRGS8UKz1ZNjprWzcODxMeChwlThAgNWhvUzZGcX0Da9XVadTUaQPkJEVDUIBOWlN6c1NgPEdRii5SEipAKSQxBMGUUpo2QkBYP4xaSHNHO0A+IRs5ZjqGfVInITtlLmdnUjT8lxo0Xj4ZMCQYIwsXHTgCDiQ4XTtGazsdA2xs29ts2QADAAAAAAaABmwAAwAOACoAAAERIREBFgYrASImNDYyFgERIRE0JiMiBgcGFREhEhAvASEVIz4DMzIWAd3+tgFfAWdUAlJkZ6ZkBI/+t1FWP1UVC/63AgEBAUkCFCpHZz+r0ASP/CED3wEySWJik2Fh/N39yAISaXdFMx4z/dcBjwHwMDCQIDA4H+MAAAEAAAAABpQGAAAxAAABBgcWFRQCDgEEIyAnFjMyNy4BJxYzMjcuAT0BFhcuATU0NxYEFyY1NDYzMhc2NwYHNgaUQ18BTJvW/tKs/vHhIyvhsGmmHyEcKypwk0ROQk4seQFbxgi9hoxgbWAlaV0FaGJFDhyC/v3ut22RBIoCfWEFCxexdQQmAyyOU1hLlbMKJiSGvWYVOXM/CgAAAAEAAAAABYAHAAAiAAABFw4BBwYuAzURIzU+BDc+ATsBESEVIREUHgI3NgUwUBewWWitcE4hqEhyRDAUBQEHBPQBTf6yDSBDME4Bz+0jPgECOFx4eDoCINcaV11vVy0FB/5Y/P36HjQ1HgECAAEAAAAABoAGgABKAAABFAIEIyInNj8BHgEzMj4BNTQuASMiDgMVFBYXFj8BNjc2JyY1NDYzMhYVFAYjIiY3PgI1NCYjIgYVFBcDBhcmAjU0EiQgBBIGgM7+n9FvazsTNhRqPXm+aHfijmm2f1srUE0eCAgGAgYRM9Gpl6mJaz1KDgglFzYyPlYZYxEEzv7OAWEBogFhzgOA0f6fziBdR9MnOYnwlnLIfjpgfYZDaJ4gDCAfGAYXFD1al9mkg6ruVz0jdVkfMkJyVUkx/l5Ga1sBfOnRAWHOzv6fAAAHAAAAAAcBBM8AFwAhADgATwBmAHEAdAAAAREzNhcWFxYXFhcWBw4BBwYHBicmLwEmNxY2NzYuAQcRFAUWNzY/ATY3NjU2JyMGFxYfARYXFhcUFxY3Nj8BNjc2NzYnIwYXFh8BFhcWFRYXFjc2PwE2NzY3NicjBhcWHwEWFxYVFgUzPwEVMxEjBgsBARUnAxwcaC5MND0sTSsvCgdVREdTNWg1KgECq1JrCQcwYkABfhoSCxAKJBQXAX4dAQMCBgMnFxsBJBoSCxAKJBQWAQF+HgEEAgUEJxcbASMZEwsQCiQUFgEBfh4BBAIFBCcXGwH5Q+5B4arNDfHvAhaOAckC/QIBAwwPHzdcZXlZmC8xCAQBAQIDBMIDVkxCZDQF/pUHwgcTCyAUQEdPU8etCAgFCQZHTFxbwLoHEwsgFEBHT1PHrQgIBQkGR0xcW8C6BxMLIBRAR09Tx60ICAUJBkdMXFvAwGQBZQMMFf6D/oYB/fkBAAABAAAAAAYhBrYALAAAASIHDgEHBhURFB4BOwERITU0Nz4BNzYyFx4BFxYdASERMzI+ATURNCcuAScmA4CJfXi6MzU8Zz3g/tUpKJFeYdRhXpEoKf7V4D1nPDUzunh9BrU0M7t4fYn99j1nPAJVlWthXpAoKSkokF5ha5X9qzxnPQIKiX14uzM0AAAAAAIAAAAABUAFQAACAAYAAAkCIREzEQHAAnv9hQLrlQHAAcABwPyAA4AAAAAAAgAAAAAFQAVAAAMABgAAATMRIwkBEQHAlZUBBQJ7BUD8gAHA/kADgAAAAAAAABAAxgABAAAAAAABAAcAAAABAAAAAAACAAcABwABAAAAAAADAAcADgABAAAAAAAEAAcAFQABAAAAAAAFAAsAHAABAAAAAAAGAAcAJwABAAAAAAAKACsALgABAAAAAAALABMAWQADAAEECQABAA4AbAADAAEECQACAA4AegADAAEECQADAA4AiAADAAEECQAEAA4AlgADAAEECQAFABYApAADAAEECQAGAA4AugADAAEECQAKAFYAyAADAAEECQALACYBHlZpZGVvSlNSZWd1bGFyVmlkZW9KU1ZpZGVvSlNWZXJzaW9uIDEuMFZpZGVvSlNHZW5lcmF0ZWQgYnkgc3ZnMnR0ZiBmcm9tIEZvbnRlbGxvIHByb2plY3QuaHR0cDovL2ZvbnRlbGxvLmNvbQBWAGkAZABlAG8ASgBTAFIAZQBnAHUAbABhAHIAVgBpAGQAZQBvAEoAUwBWAGkAZABlAG8ASgBTAFYAZQByAHMAaQBvAG4AIAAxAC4AMABWAGkAZABlAG8ASgBTAEcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAAcwB2AGcAMgB0AHQAZgAgAGYAcgBvAG0AIABGAG8AbgB0AGUAbABsAG8AIABwAHIAbwBqAGUAYwB0AC4AaAB0AHQAcAA6AC8ALwBmAG8AbgB0AGUAbABsAG8ALgBjAG8AbQAAAAIAAAAAAAAAEQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIQECAQMBBAEFAQYBBwEIAQkBCgELAQwBDQEOAQ8BEAERARIBEwEUARUBFgEXARgBGQEaARsBHAEdAR4BHwEgASEBIgAEcGxheQtwbGF5LWNpcmNsZQVwYXVzZQt2b2x1bWUtbXV0ZQp2b2x1bWUtbG93CnZvbHVtZS1taWQLdm9sdW1lLWhpZ2gQZnVsbHNjcmVlbi1lbnRlcg9mdWxsc2NyZWVuLWV4aXQGc3F1YXJlB3NwaW5uZXIJc3VidGl0bGVzCGNhcHRpb25zCGNoYXB0ZXJzBXNoYXJlA2NvZwZjaXJjbGUOY2lyY2xlLW91dGxpbmUTY2lyY2xlLWlubmVyLWNpcmNsZQJoZAZjYW5jZWwGcmVwbGF5CGZhY2Vib29rBWdwbHVzCGxpbmtlZGluB3R3aXR0ZXIGdHVtYmxyCXBpbnRlcmVzdBFhdWRpby1kZXNjcmlwdGlvbgVhdWRpbwluZXh0LWl0ZW0NcHJldmlvdXMtaXRlbQAAAAA=) format("truetype");\n  font-weight: normal;\n  font-style: normal; }\n\n.vjs-icon-play, .video-js .vjs-big-play-button .vjs-icon-placeholder:before, .video-js .vjs-play-control .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-play:before, .video-js .vjs-big-play-button .vjs-icon-placeholder:before, .video-js .vjs-play-control .vjs-icon-placeholder:before {\n    content: "\\F101"; }\n\n.vjs-icon-play-circle {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-play-circle:before {\n    content: "\\F102"; }\n\n.vjs-icon-pause, .video-js .vjs-play-control.vjs-playing .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-pause:before, .video-js .vjs-play-control.vjs-playing .vjs-icon-placeholder:before {\n    content: "\\F103"; }\n\n.vjs-icon-volume-mute, .video-js .vjs-mute-control.vjs-vol-0 .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-volume-mute:before, .video-js .vjs-mute-control.vjs-vol-0 .vjs-icon-placeholder:before {\n    content: "\\F104"; }\n\n.vjs-icon-volume-low, .video-js .vjs-mute-control.vjs-vol-1 .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-volume-low:before, .video-js .vjs-mute-control.vjs-vol-1 .vjs-icon-placeholder:before {\n    content: "\\F105"; }\n\n.vjs-icon-volume-mid, .video-js .vjs-mute-control.vjs-vol-2 .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-volume-mid:before, .video-js .vjs-mute-control.vjs-vol-2 .vjs-icon-placeholder:before {\n    content: "\\F106"; }\n\n.vjs-icon-volume-high, .video-js .vjs-mute-control .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-volume-high:before, .video-js .vjs-mute-control .vjs-icon-placeholder:before {\n    content: "\\F107"; }\n\n.vjs-icon-fullscreen-enter, .video-js .vjs-fullscreen-control .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-fullscreen-enter:before, .video-js .vjs-fullscreen-control .vjs-icon-placeholder:before {\n    content: "\\F108"; }\n\n.vjs-icon-fullscreen-exit, .video-js.vjs-fullscreen .vjs-fullscreen-control .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-fullscreen-exit:before, .video-js.vjs-fullscreen .vjs-fullscreen-control .vjs-icon-placeholder:before {\n    content: "\\F109"; }\n\n.vjs-icon-square {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-square:before {\n    content: "\\F10A"; }\n\n.vjs-icon-spinner {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-spinner:before {\n    content: "\\F10B"; }\n\n.vjs-icon-subtitles, .video-js .vjs-subtitles-button .vjs-icon-placeholder, .video-js .vjs-subs-caps-button .vjs-icon-placeholder,\n.video-js.video-js:lang(en-GB) .vjs-subs-caps-button .vjs-icon-placeholder,\n.video-js.video-js:lang(en-IE) .vjs-subs-caps-button .vjs-icon-placeholder,\n.video-js.video-js:lang(en-AU) .vjs-subs-caps-button .vjs-icon-placeholder,\n.video-js.video-js:lang(en-NZ) .vjs-subs-caps-button .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-subtitles:before, .video-js .vjs-subtitles-button .vjs-icon-placeholder:before, .video-js .vjs-subs-caps-button .vjs-icon-placeholder:before,\n  .video-js.video-js:lang(en-GB) .vjs-subs-caps-button .vjs-icon-placeholder:before,\n  .video-js.video-js:lang(en-IE) .vjs-subs-caps-button .vjs-icon-placeholder:before,\n  .video-js.video-js:lang(en-AU) .vjs-subs-caps-button .vjs-icon-placeholder:before,\n  .video-js.video-js:lang(en-NZ) .vjs-subs-caps-button .vjs-icon-placeholder:before {\n    content: "\\F10C"; }\n\n.vjs-icon-captions, .video-js .vjs-captions-button .vjs-icon-placeholder, .video-js:lang(en) .vjs-subs-caps-button .vjs-icon-placeholder,\n.video-js:lang(fr-CA) .vjs-subs-caps-button .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-captions:before, .video-js .vjs-captions-button .vjs-icon-placeholder:before, .video-js:lang(en) .vjs-subs-caps-button .vjs-icon-placeholder:before,\n  .video-js:lang(fr-CA) .vjs-subs-caps-button .vjs-icon-placeholder:before {\n    content: "\\F10D"; }\n\n.vjs-icon-chapters, .video-js .vjs-chapters-button .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-chapters:before, .video-js .vjs-chapters-button .vjs-icon-placeholder:before {\n    content: "\\F10E"; }\n\n.vjs-icon-share {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-share:before {\n    content: "\\F10F"; }\n\n.vjs-icon-cog {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-cog:before {\n    content: "\\F110"; }\n\n.vjs-icon-circle, .video-js .vjs-play-progress, .video-js .vjs-volume-level {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-circle:before, .video-js .vjs-play-progress:before, .video-js .vjs-volume-level:before {\n    content: "\\F111"; }\n\n.vjs-icon-circle-outline {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-circle-outline:before {\n    content: "\\F112"; }\n\n.vjs-icon-circle-inner-circle {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-circle-inner-circle:before {\n    content: "\\F113"; }\n\n.vjs-icon-hd {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-hd:before {\n    content: "\\F114"; }\n\n.vjs-icon-cancel, .video-js .vjs-control.vjs-close-button .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-cancel:before, .video-js .vjs-control.vjs-close-button .vjs-icon-placeholder:before {\n    content: "\\F115"; }\n\n.vjs-icon-replay, .video-js .vjs-play-control.vjs-ended .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-replay:before, .video-js .vjs-play-control.vjs-ended .vjs-icon-placeholder:before {\n    content: "\\F116"; }\n\n.vjs-icon-facebook {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-facebook:before {\n    content: "\\F117"; }\n\n.vjs-icon-gplus {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-gplus:before {\n    content: "\\F118"; }\n\n.vjs-icon-linkedin {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-linkedin:before {\n    content: "\\F119"; }\n\n.vjs-icon-twitter {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-twitter:before {\n    content: "\\F11A"; }\n\n.vjs-icon-tumblr {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-tumblr:before {\n    content: "\\F11B"; }\n\n.vjs-icon-pinterest {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-pinterest:before {\n    content: "\\F11C"; }\n\n.vjs-icon-audio-description, .video-js .vjs-descriptions-button .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-audio-description:before, .video-js .vjs-descriptions-button .vjs-icon-placeholder:before {\n    content: "\\F11D"; }\n\n.vjs-icon-audio, .video-js .vjs-audio-button .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-audio:before, .video-js .vjs-audio-button .vjs-icon-placeholder:before {\n    content: "\\F11E"; }\n\n.vjs-icon-next-item {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-next-item:before {\n    content: "\\F11F"; }\n\n.vjs-icon-previous-item {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-previous-item:before {\n    content: "\\F120"; }\n\n.video-js {\n  display: block;\n  vertical-align: top;\n  box-sizing: border-box;\n  color: #fff;\n  background-color: #000;\n  position: relative;\n  padding: 0;\n  font-size: 10px;\n  line-height: 1;\n  font-weight: normal;\n  font-style: normal;\n  font-family: Arial, Helvetica, sans-serif;\n  word-break: initial; }\n  .video-js:-moz-full-screen {\n    position: absolute; }\n  .video-js:-webkit-full-screen {\n    width: 100% !important;\n    height: 100% !important; }\n\n.video-js[tabindex="-1"] {\n  outline: none; }\n\n.video-js *,\n.video-js *:before,\n.video-js *:after {\n  box-sizing: inherit; }\n\n.video-js ul {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  list-style-position: outside;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0; }\n\n.video-js.vjs-fluid,\n.video-js.vjs-16-9,\n.video-js.vjs-4-3 {\n  width: 100%;\n  max-width: 100%;\n  height: 0; }\n\n.video-js.vjs-16-9 {\n  padding-top: 56.25%; }\n\n.video-js.vjs-4-3 {\n  padding-top: 75%; }\n\n.video-js.vjs-fill {\n  width: 100%;\n  height: 100%; }\n\n.video-js .vjs-tech {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n\nbody.vjs-full-window {\n  padding: 0;\n  margin: 0;\n  height: 100%;\n  overflow-y: auto; }\n\n.vjs-full-window .video-js.vjs-fullscreen {\n  position: fixed;\n  overflow: hidden;\n  z-index: 1000;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0; }\n\n.video-js.vjs-fullscreen {\n  width: 100% !important;\n  height: 100% !important;\n  padding-top: 0 !important; }\n\n.video-js.vjs-fullscreen.vjs-user-inactive {\n  cursor: none; }\n\n.vjs-hidden {\n  display: none !important; }\n\n.vjs-disabled {\n  opacity: 0.5;\n  cursor: default; }\n\n.video-js .vjs-offscreen {\n  height: 1px;\n  left: -9999px;\n  position: absolute;\n  top: 0;\n  width: 1px; }\n\n.vjs-lock-showing {\n  display: block !important;\n  opacity: 1;\n  visibility: visible; }\n\n.vjs-no-js {\n  padding: 20px;\n  color: #fff;\n  background-color: #000;\n  font-size: 18px;\n  font-family: Arial, Helvetica, sans-serif;\n  text-align: center;\n  width: 300px;\n  height: 150px;\n  margin: 0px auto; }\n\n.vjs-no-js a,\n.vjs-no-js a:visited {\n  color: #66A8CC; }\n\n.video-js .vjs-big-play-button {\n  font-size: 3em;\n  line-height: 1.5em;\n  height: 1.5em;\n  width: 3em;\n  display: block;\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  padding: 0;\n  cursor: pointer;\n  opacity: 1;\n  border: 0.06666em solid #fff;\n  background-color: #2B333F;\n  background-color: rgba(43, 51, 63, 0.7);\n  -webkit-border-radius: 0.3em;\n  -moz-border-radius: 0.3em;\n  border-radius: 0.3em;\n  -webkit-transition: all 0.4s;\n  -moz-transition: all 0.4s;\n  -ms-transition: all 0.4s;\n  -o-transition: all 0.4s;\n  transition: all 0.4s; }\n\n.vjs-big-play-centered .vjs-big-play-button {\n  top: 50%;\n  left: 50%;\n  margin-top: -0.75em;\n  margin-left: -1.5em; }\n\n.video-js:hover .vjs-big-play-button,\n.video-js .vjs-big-play-button:focus {\n  border-color: #fff;\n  background-color: #73859f;\n  background-color: rgba(115, 133, 159, 0.5);\n  -webkit-transition: all 0s;\n  -moz-transition: all 0s;\n  -ms-transition: all 0s;\n  -o-transition: all 0s;\n  transition: all 0s; }\n\n.vjs-controls-disabled .vjs-big-play-button,\n.vjs-has-started .vjs-big-play-button,\n.vjs-using-native-controls .vjs-big-play-button,\n.vjs-error .vjs-big-play-button {\n  display: none; }\n\n.vjs-has-started.vjs-paused.vjs-show-big-play-button-on-pause .vjs-big-play-button {\n  display: block; }\n\n.video-js button {\n  background: none;\n  border: none;\n  color: inherit;\n  display: inline-block;\n  overflow: visible;\n  font-size: inherit;\n  line-height: inherit;\n  text-transform: none;\n  text-decoration: none;\n  transition: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none; }\n\n.vjs-control .vjs-button {\n  width: 100%;\n  height: 100%; }\n\n.video-js .vjs-control.vjs-close-button {\n  cursor: pointer;\n  height: 3em;\n  position: absolute;\n  right: 0;\n  top: 0.5em;\n  z-index: 2; }\n\n.video-js .vjs-modal-dialog {\n  background: rgba(0, 0, 0, 0.8);\n  background: -webkit-linear-gradient(-90deg, rgba(0, 0, 0, 0.8), rgba(255, 255, 255, 0));\n  background: linear-gradient(180deg, rgba(0, 0, 0, 0.8), rgba(255, 255, 255, 0));\n  overflow: auto;\n  box-sizing: content-box; }\n\n.video-js .vjs-modal-dialog > * {\n  box-sizing: border-box; }\n\n.vjs-modal-dialog .vjs-modal-dialog-content {\n  font-size: 1.2em;\n  line-height: 1.5;\n  padding: 20px 24px;\n  z-index: 1; }\n\n.vjs-menu-button {\n  cursor: pointer; }\n\n.vjs-menu-button.vjs-disabled {\n  cursor: default; }\n\n.vjs-workinghover .vjs-menu-button.vjs-disabled:hover .vjs-menu {\n  display: none; }\n\n.vjs-menu .vjs-menu-content {\n  display: block;\n  padding: 0;\n  margin: 0;\n  font-family: Arial, Helvetica, sans-serif;\n  overflow: auto;\n  box-sizing: content-box; }\n\n.vjs-menu .vjs-menu-content > * {\n  box-sizing: border-box; }\n\n.vjs-scrubbing .vjs-menu-button:hover .vjs-menu {\n  display: none; }\n\n.vjs-menu li {\n  list-style: none;\n  margin: 0;\n  padding: 0.2em 0;\n  line-height: 1.4em;\n  font-size: 1.2em;\n  text-align: center;\n  text-transform: lowercase; }\n\n.vjs-menu li.vjs-menu-item:focus,\n.vjs-menu li.vjs-menu-item:hover {\n  background-color: #73859f;\n  background-color: rgba(115, 133, 159, 0.5); }\n\n.vjs-menu li.vjs-selected,\n.vjs-menu li.vjs-selected:focus,\n.vjs-menu li.vjs-selected:hover {\n  background-color: #fff;\n  color: #2B333F; }\n\n.vjs-menu li.vjs-menu-title {\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 1em;\n  line-height: 2em;\n  padding: 0;\n  margin: 0 0 0.3em 0;\n  font-weight: bold;\n  cursor: default; }\n\n.vjs-menu-button-popup .vjs-menu {\n  display: none;\n  position: absolute;\n  bottom: 0;\n  width: 10em;\n  left: -3em;\n  height: 0em;\n  margin-bottom: 1.5em;\n  border-top-color: rgba(43, 51, 63, 0.7); }\n\n.vjs-menu-button-popup .vjs-menu .vjs-menu-content {\n  background-color: #2B333F;\n  background-color: rgba(43, 51, 63, 0.7);\n  position: absolute;\n  width: 100%;\n  bottom: 1.5em;\n  max-height: 15em; }\n\n.vjs-workinghover .vjs-menu-button-popup:hover .vjs-menu,\n.vjs-menu-button-popup .vjs-menu.vjs-lock-showing {\n  display: block; }\n\n.video-js .vjs-menu-button-inline {\n  -webkit-transition: all 0.4s;\n  -moz-transition: all 0.4s;\n  -ms-transition: all 0.4s;\n  -o-transition: all 0.4s;\n  transition: all 0.4s;\n  overflow: hidden; }\n\n.video-js .vjs-menu-button-inline:before {\n  width: 2.222222222em; }\n\n.video-js .vjs-menu-button-inline:hover,\n.video-js .vjs-menu-button-inline:focus,\n.video-js .vjs-menu-button-inline.vjs-slider-active,\n.video-js.vjs-no-flex .vjs-menu-button-inline {\n  width: 12em; }\n\n.vjs-menu-button-inline .vjs-menu {\n  opacity: 0;\n  height: 100%;\n  width: auto;\n  position: absolute;\n  left: 4em;\n  top: 0;\n  padding: 0;\n  margin: 0;\n  -webkit-transition: all 0.4s;\n  -moz-transition: all 0.4s;\n  -ms-transition: all 0.4s;\n  -o-transition: all 0.4s;\n  transition: all 0.4s; }\n\n.vjs-menu-button-inline:hover .vjs-menu,\n.vjs-menu-button-inline:focus .vjs-menu,\n.vjs-menu-button-inline.vjs-slider-active .vjs-menu {\n  display: block;\n  opacity: 1; }\n\n.vjs-no-flex .vjs-menu-button-inline .vjs-menu {\n  display: block;\n  opacity: 1;\n  position: relative;\n  width: auto; }\n\n.vjs-no-flex .vjs-menu-button-inline:hover .vjs-menu,\n.vjs-no-flex .vjs-menu-button-inline:focus .vjs-menu,\n.vjs-no-flex .vjs-menu-button-inline.vjs-slider-active .vjs-menu {\n  width: auto; }\n\n.vjs-menu-button-inline .vjs-menu-content {\n  width: auto;\n  height: 100%;\n  margin: 0;\n  overflow: hidden; }\n\n.video-js .vjs-control-bar {\n  display: none;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 3.0em;\n  background-color: #2B333F;\n  background-color: rgba(43, 51, 63, 0.7); }\n\n.vjs-has-started .vjs-control-bar {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  visibility: visible;\n  opacity: 1;\n  -webkit-transition: visibility 0.1s, opacity 0.1s;\n  -moz-transition: visibility 0.1s, opacity 0.1s;\n  -ms-transition: visibility 0.1s, opacity 0.1s;\n  -o-transition: visibility 0.1s, opacity 0.1s;\n  transition: visibility 0.1s, opacity 0.1s; }\n\n.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar {\n  visibility: visible;\n  opacity: 0;\n  -webkit-transition: visibility 1s, opacity 1s;\n  -moz-transition: visibility 1s, opacity 1s;\n  -ms-transition: visibility 1s, opacity 1s;\n  -o-transition: visibility 1s, opacity 1s;\n  transition: visibility 1s, opacity 1s; }\n\n.vjs-controls-disabled .vjs-control-bar,\n.vjs-using-native-controls .vjs-control-bar,\n.vjs-error .vjs-control-bar {\n  display: none !important; }\n\n.vjs-audio.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar {\n  opacity: 1;\n  visibility: visible; }\n\n.vjs-has-started.vjs-no-flex .vjs-control-bar {\n  display: table; }\n\n.video-js .vjs-control {\n  position: relative;\n  text-align: center;\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  width: 4em;\n  -webkit-box-flex: none;\n  -moz-box-flex: none;\n  -webkit-flex: none;\n  -ms-flex: none;\n  flex: none; }\n\n.vjs-button > .vjs-icon-placeholder:before {\n  font-size: 1.8em;\n  line-height: 1.67; }\n\n.video-js .vjs-control:focus:before,\n.video-js .vjs-control:hover:before,\n.video-js .vjs-control:focus {\n  text-shadow: 0em 0em 1em white; }\n\n.video-js .vjs-control-text {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n\n.vjs-no-flex .vjs-control {\n  display: table-cell;\n  vertical-align: middle; }\n\n.video-js .vjs-custom-control-spacer {\n  display: none; }\n\n.video-js .vjs-progress-control {\n  cursor: pointer;\n  -webkit-box-flex: auto;\n  -moz-box-flex: auto;\n  -webkit-flex: auto;\n  -ms-flex: auto;\n  flex: auto;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  min-width: 4em; }\n\n.video-js .vjs-progress-control.disabled {\n  cursor: default; }\n\n.vjs-live .vjs-progress-control {\n  display: none; }\n\n.vjs-no-flex .vjs-progress-control {\n  width: auto; }\n\n.video-js .vjs-progress-holder {\n  -webkit-box-flex: auto;\n  -moz-box-flex: auto;\n  -webkit-flex: auto;\n  -ms-flex: auto;\n  flex: auto;\n  -webkit-transition: all 0.2s;\n  -moz-transition: all 0.2s;\n  -ms-transition: all 0.2s;\n  -o-transition: all 0.2s;\n  transition: all 0.2s;\n  height: 0.3em; }\n\n.video-js .vjs-progress-control .vjs-progress-holder {\n  margin: 0 10px; }\n\n.video-js .vjs-progress-control:hover .vjs-progress-holder {\n  font-size: 1.666666666666666666em; }\n\n.video-js .vjs-progress-control:hover .vjs-progress-holder.disabled {\n  font-size: 1em; }\n\n.video-js .vjs-progress-holder .vjs-play-progress,\n.video-js .vjs-progress-holder .vjs-load-progress,\n.video-js .vjs-progress-holder .vjs-load-progress div {\n  position: absolute;\n  display: block;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  width: 0;\n  left: 0;\n  top: 0; }\n\n.video-js .vjs-play-progress {\n  background-color: #fff; }\n  .video-js .vjs-play-progress:before {\n    font-size: 0.9em;\n    position: absolute;\n    right: -0.5em;\n    top: -0.333333333333333em;\n    z-index: 1; }\n\n.video-js .vjs-load-progress {\n  background: #bfc7d3;\n  background: rgba(115, 133, 159, 0.5); }\n\n.video-js .vjs-load-progress div {\n  background: white;\n  background: rgba(115, 133, 159, 0.75); }\n\n.video-js .vjs-time-tooltip {\n  background-color: #fff;\n  background-color: rgba(255, 255, 255, 0.8);\n  -webkit-border-radius: 0.3em;\n  -moz-border-radius: 0.3em;\n  border-radius: 0.3em;\n  color: #000;\n  float: right;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 1em;\n  padding: 6px 8px 8px 8px;\n  pointer-events: none;\n  position: relative;\n  top: -3.4em;\n  visibility: hidden;\n  z-index: 1; }\n\n.video-js .vjs-progress-holder:focus .vjs-time-tooltip {\n  display: none; }\n\n.video-js .vjs-progress-control:hover .vjs-time-tooltip,\n.video-js .vjs-progress-control:hover .vjs-progress-holder:focus .vjs-time-tooltip {\n  display: block;\n  font-size: 0.6em;\n  visibility: visible; }\n\n.video-js .vjs-progress-control.disabled:hover .vjs-time-tooltip {\n  font-size: 1em; }\n\n.video-js .vjs-progress-control .vjs-mouse-display {\n  display: none;\n  position: absolute;\n  width: 1px;\n  height: 100%;\n  background-color: #000;\n  z-index: 1; }\n\n.vjs-no-flex .vjs-progress-control .vjs-mouse-display {\n  z-index: 0; }\n\n.video-js .vjs-progress-control:hover .vjs-mouse-display {\n  display: block; }\n\n.video-js.vjs-user-inactive .vjs-progress-control .vjs-mouse-display {\n  visibility: hidden;\n  opacity: 0;\n  -webkit-transition: visibility 1s, opacity 1s;\n  -moz-transition: visibility 1s, opacity 1s;\n  -ms-transition: visibility 1s, opacity 1s;\n  -o-transition: visibility 1s, opacity 1s;\n  transition: visibility 1s, opacity 1s; }\n\n.video-js.vjs-user-inactive.vjs-no-flex .vjs-progress-control .vjs-mouse-display {\n  display: none; }\n\n.vjs-mouse-display .vjs-time-tooltip {\n  color: #fff;\n  background-color: #000;\n  background-color: rgba(0, 0, 0, 0.8); }\n\n.video-js .vjs-slider {\n  position: relative;\n  cursor: pointer;\n  padding: 0;\n  margin: 0 0.45em 0 0.45em;\n  /* iOS Safari */\n  -webkit-touch-callout: none;\n  /* Safari */\n  -webkit-user-select: none;\n  /* Konqueror HTML */\n  -khtml-user-select: none;\n  /* Firefox */\n  -moz-user-select: none;\n  /* Internet Explorer/Edge */\n  -ms-user-select: none;\n  /* Non-prefixed version, currently supported by Chrome and Opera */\n  user-select: none;\n  background-color: #73859f;\n  background-color: rgba(115, 133, 159, 0.5); }\n\n.video-js .vjs-slider.disabled {\n  cursor: default; }\n\n.video-js .vjs-slider:focus {\n  text-shadow: 0em 0em 1em white;\n  -webkit-box-shadow: 0 0 1em #fff;\n  -moz-box-shadow: 0 0 1em #fff;\n  box-shadow: 0 0 1em #fff; }\n\n.video-js .vjs-mute-control {\n  cursor: pointer;\n  -webkit-box-flex: none;\n  -moz-box-flex: none;\n  -webkit-flex: none;\n  -ms-flex: none;\n  flex: none;\n  padding-left: 2em;\n  padding-right: 2em;\n  padding-bottom: 3em; }\n\n.video-js .vjs-volume-control {\n  cursor: pointer;\n  margin-right: 1em;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex; }\n\n.video-js .vjs-volume-control.vjs-volume-horizontal {\n  width: 5em; }\n\n.video-js .vjs-volume-panel .vjs-volume-control {\n  visibility: visible;\n  opacity: 0;\n  width: 1px;\n  height: 1px;\n  margin-left: -1px; }\n\n.vjs-no-flex .vjs-volume-panel .vjs-volume-control.vjs-volume-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)"; }\n  .vjs-no-flex .vjs-volume-panel .vjs-volume-control.vjs-volume-vertical .vjs-volume-bar,\n  .vjs-no-flex .vjs-volume-panel .vjs-volume-control.vjs-volume-vertical .vjs-volume-level {\n    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)"; }\n\n.video-js .vjs-volume-panel {\n  -webkit-transition: width 1s;\n  -moz-transition: width 1s;\n  -ms-transition: width 1s;\n  -o-transition: width 1s;\n  transition: width 1s; }\n  .video-js .vjs-volume-panel:hover .vjs-volume-control,\n  .video-js .vjs-volume-panel:active .vjs-volume-control,\n  .video-js .vjs-volume-panel:focus .vjs-volume-control,\n  .video-js .vjs-volume-panel .vjs-volume-control:hover,\n  .video-js .vjs-volume-panel .vjs-volume-control:active,\n  .video-js .vjs-volume-panel .vjs-mute-control:hover ~ .vjs-volume-control,\n  .video-js .vjs-volume-panel .vjs-volume-control.vjs-slider-active {\n    visibility: visible;\n    opacity: 1;\n    position: relative;\n    -webkit-transition: visibility 0.1s, opacity 0.1s, height 0.1s, width 0.1s, left 0s, top 0s;\n    -moz-transition: visibility 0.1s, opacity 0.1s, height 0.1s, width 0.1s, left 0s, top 0s;\n    -ms-transition: visibility 0.1s, opacity 0.1s, height 0.1s, width 0.1s, left 0s, top 0s;\n    -o-transition: visibility 0.1s, opacity 0.1s, height 0.1s, width 0.1s, left 0s, top 0s;\n    transition: visibility 0.1s, opacity 0.1s, height 0.1s, width 0.1s, left 0s, top 0s; }\n    .video-js .vjs-volume-panel:hover .vjs-volume-control.vjs-volume-horizontal,\n    .video-js .vjs-volume-panel:active .vjs-volume-control.vjs-volume-horizontal,\n    .video-js .vjs-volume-panel:focus .vjs-volume-control.vjs-volume-horizontal,\n    .video-js .vjs-volume-panel .vjs-volume-control:hover.vjs-volume-horizontal,\n    .video-js .vjs-volume-panel .vjs-volume-control:active.vjs-volume-horizontal,\n    .video-js .vjs-volume-panel .vjs-mute-control:hover ~ .vjs-volume-control.vjs-volume-horizontal,\n    .video-js .vjs-volume-panel .vjs-volume-control.vjs-slider-active.vjs-volume-horizontal {\n      width: 5em;\n      height: 3em; }\n    .video-js .vjs-volume-panel:hover .vjs-volume-control.vjs-volume-vertical,\n    .video-js .vjs-volume-panel:active .vjs-volume-control.vjs-volume-vertical,\n    .video-js .vjs-volume-panel:focus .vjs-volume-control.vjs-volume-vertical,\n    .video-js .vjs-volume-panel .vjs-volume-control:hover.vjs-volume-vertical,\n    .video-js .vjs-volume-panel .vjs-volume-control:active.vjs-volume-vertical,\n    .video-js .vjs-volume-panel .vjs-mute-control:hover ~ .vjs-volume-control.vjs-volume-vertical,\n    .video-js .vjs-volume-panel .vjs-volume-control.vjs-slider-active.vjs-volume-vertical {\n      -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)"; }\n      .video-js .vjs-volume-panel:hover .vjs-volume-control.vjs-volume-vertical .vjs-volume-bar,\n      .video-js .vjs-volume-panel:hover .vjs-volume-control.vjs-volume-vertical .vjs-volume-level,\n      .video-js .vjs-volume-panel:active .vjs-volume-control.vjs-volume-vertical .vjs-volume-bar,\n      .video-js .vjs-volume-panel:active .vjs-volume-control.vjs-volume-vertical .vjs-volume-level,\n      .video-js .vjs-volume-panel:focus .vjs-volume-control.vjs-volume-vertical .vjs-volume-bar,\n      .video-js .vjs-volume-panel:focus .vjs-volume-control.vjs-volume-vertical .vjs-volume-level,\n      .video-js .vjs-volume-panel .vjs-volume-control:hover.vjs-volume-vertical .vjs-volume-bar,\n      .video-js .vjs-volume-panel .vjs-volume-control:hover.vjs-volume-vertical .vjs-volume-level,\n      .video-js .vjs-volume-panel .vjs-volume-control:active.vjs-volume-vertical .vjs-volume-bar,\n      .video-js .vjs-volume-panel .vjs-volume-control:active.vjs-volume-vertical .vjs-volume-level,\n      .video-js .vjs-volume-panel .vjs-mute-control:hover ~ .vjs-volume-control.vjs-volume-vertical .vjs-volume-bar,\n      .video-js .vjs-volume-panel .vjs-mute-control:hover ~ .vjs-volume-control.vjs-volume-vertical .vjs-volume-level,\n      .video-js .vjs-volume-panel .vjs-volume-control.vjs-slider-active.vjs-volume-vertical .vjs-volume-bar,\n      .video-js .vjs-volume-panel .vjs-volume-control.vjs-slider-active.vjs-volume-vertical .vjs-volume-level {\n        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)"; }\n  .video-js .vjs-volume-panel.vjs-volume-panel-horizontal:hover, .video-js .vjs-volume-panel.vjs-volume-panel-horizontal:active, .video-js .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-slider-active {\n    width: 9em;\n    -webkit-transition: width 0.1s;\n    -moz-transition: width 0.1s;\n    -ms-transition: width 0.1s;\n    -o-transition: width 0.1s;\n    transition: width 0.1s; }\n\n.video-js .vjs-volume-panel .vjs-volume-control.vjs-volume-vertical {\n  height: 8em;\n  width: 3em;\n  left: -3.5em;\n  -webkit-transition: visibility 1s, opacity 1s, height 1s 1s, width 1s 1s, left 1s 1s, top 1s 1s;\n  -moz-transition: visibility 1s, opacity 1s, height 1s 1s, width 1s 1s, left 1s 1s, top 1s 1s;\n  -ms-transition: visibility 1s, opacity 1s, height 1s 1s, width 1s 1s, left 1s 1s, top 1s 1s;\n  -o-transition: visibility 1s, opacity 1s, height 1s 1s, width 1s 1s, left 1s 1s, top 1s 1s;\n  transition: visibility 1s, opacity 1s, height 1s 1s, width 1s 1s, left 1s 1s, top 1s 1s; }\n\n.video-js .vjs-volume-panel .vjs-volume-control.vjs-volume-horizontal {\n  -webkit-transition: visibility 1s, opacity 1s, height 1s 1s, width 1s, left 1s 1s, top 1s 1s;\n  -moz-transition: visibility 1s, opacity 1s, height 1s 1s, width 1s, left 1s 1s, top 1s 1s;\n  -ms-transition: visibility 1s, opacity 1s, height 1s 1s, width 1s, left 1s 1s, top 1s 1s;\n  -o-transition: visibility 1s, opacity 1s, height 1s 1s, width 1s, left 1s 1s, top 1s 1s;\n  transition: visibility 1s, opacity 1s, height 1s 1s, width 1s, left 1s 1s, top 1s 1s; }\n\n.video-js.vjs-no-flex .vjs-volume-panel .vjs-volume-control.vjs-volume-horizontal {\n  width: 5em;\n  height: 3em;\n  visibility: visible;\n  opacity: 1;\n  position: relative;\n  -webkit-transition: none;\n  -moz-transition: none;\n  -ms-transition: none;\n  -o-transition: none;\n  transition: none; }\n\n.video-js.vjs-no-flex .vjs-volume-control.vjs-volume-vertical,\n.video-js.vjs-no-flex .vjs-volume-panel .vjs-volume-control.vjs-volume-vertical {\n  position: absolute;\n  bottom: 3em;\n  left: 0.5em; }\n\n.video-js .vjs-volume-panel {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex; }\n\n.video-js .vjs-volume-bar {\n  margin: 1.35em 0.45em; }\n\n.vjs-volume-bar.vjs-slider-horizontal {\n  width: 5em;\n  height: 0.3em; }\n\n.vjs-volume-bar.vjs-slider-vertical {\n  width: 0.3em;\n  height: 5em;\n  margin: 1.35em auto; }\n\n.video-js .vjs-volume-level {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  background-color: #fff; }\n  .video-js .vjs-volume-level:before {\n    position: absolute;\n    font-size: 0.9em; }\n\n.vjs-slider-vertical .vjs-volume-level {\n  width: 0.3em; }\n  .vjs-slider-vertical .vjs-volume-level:before {\n    top: -0.5em;\n    left: -0.3em; }\n\n.vjs-slider-horizontal .vjs-volume-level {\n  height: 0.3em; }\n  .vjs-slider-horizontal .vjs-volume-level:before {\n    top: -0.3em;\n    right: -0.5em; }\n\n.video-js .vjs-volume-panel.vjs-volume-panel-vertical {\n  width: 4em; }\n\n.vjs-volume-bar.vjs-slider-vertical .vjs-volume-level {\n  height: 100%; }\n\n.vjs-volume-bar.vjs-slider-horizontal .vjs-volume-level {\n  width: 100%; }\n\n.video-js .vjs-volume-vertical {\n  width: 3em;\n  height: 8em;\n  bottom: 8em;\n  background-color: #2B333F;\n  background-color: rgba(43, 51, 63, 0.7); }\n\n.video-js .vjs-volume-horizontal .vjs-menu {\n  left: -2em; }\n\n.vjs-poster {\n  display: inline-block;\n  vertical-align: middle;\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n  background-size: contain;\n  background-color: #000000;\n  cursor: pointer;\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 100%; }\n\n.vjs-poster img {\n  display: block;\n  vertical-align: middle;\n  margin: 0 auto;\n  max-height: 100%;\n  padding: 0;\n  width: 100%; }\n\n.vjs-has-started .vjs-poster {\n  display: none; }\n\n.vjs-audio.vjs-has-started .vjs-poster {\n  display: block; }\n\n.vjs-using-native-controls .vjs-poster {\n  display: none; }\n\n.video-js .vjs-live-control {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: flex-start;\n  -webkit-align-items: flex-start;\n  -ms-flex-align: flex-start;\n  align-items: flex-start;\n  -webkit-box-flex: auto;\n  -moz-box-flex: auto;\n  -webkit-flex: auto;\n  -ms-flex: auto;\n  flex: auto;\n  font-size: 1em;\n  line-height: 3em; }\n\n.vjs-no-flex .vjs-live-control {\n  display: table-cell;\n  width: auto;\n  text-align: left; }\n\n.video-js .vjs-time-control {\n  -webkit-box-flex: none;\n  -moz-box-flex: none;\n  -webkit-flex: none;\n  -ms-flex: none;\n  flex: none;\n  font-size: 1em;\n  line-height: 3em;\n  min-width: 2em;\n  width: auto;\n  padding-left: 1em;\n  padding-right: 1em; }\n\n.vjs-live .vjs-time-control {\n  display: none; }\n\n.video-js .vjs-current-time,\n.vjs-no-flex .vjs-current-time {\n  display: none; }\n\n.vjs-no-flex .vjs-remaining-time.vjs-time-control.vjs-control {\n  width: 0px !important;\n  white-space: nowrap; }\n\n.video-js .vjs-duration,\n.vjs-no-flex .vjs-duration {\n  display: none; }\n\n.vjs-time-divider {\n  display: none;\n  line-height: 3em; }\n\n.vjs-live .vjs-time-divider {\n  display: none; }\n\n.video-js .vjs-play-control .vjs-icon-placeholder {\n  cursor: pointer;\n  -webkit-box-flex: none;\n  -moz-box-flex: none;\n  -webkit-flex: none;\n  -ms-flex: none;\n  flex: none; }\n\n.vjs-text-track-display {\n  position: absolute;\n  bottom: 3em;\n  left: 0;\n  right: 0;\n  top: 0;\n  pointer-events: none; }\n\n.video-js.vjs-user-inactive.vjs-playing .vjs-text-track-display {\n  bottom: 1em; }\n\n.video-js .vjs-text-track {\n  font-size: 1.4em;\n  text-align: center;\n  margin-bottom: 0.1em;\n  background-color: #000;\n  background-color: rgba(0, 0, 0, 0.5); }\n\n.vjs-subtitles {\n  color: #fff; }\n\n.vjs-captions {\n  color: #fc6; }\n\n.vjs-tt-cue {\n  display: block; }\n\nvideo::-webkit-media-text-track-display {\n  -moz-transform: translateY(-3em);\n  -ms-transform: translateY(-3em);\n  -o-transform: translateY(-3em);\n  -webkit-transform: translateY(-3em);\n  transform: translateY(-3em); }\n\n.video-js.vjs-user-inactive.vjs-playing video::-webkit-media-text-track-display {\n  -moz-transform: translateY(-1.5em);\n  -ms-transform: translateY(-1.5em);\n  -o-transform: translateY(-1.5em);\n  -webkit-transform: translateY(-1.5em);\n  transform: translateY(-1.5em); }\n\n.video-js .vjs-fullscreen-control {\n  cursor: pointer;\n  -webkit-box-flex: none;\n  -moz-box-flex: none;\n  -webkit-flex: none;\n  -ms-flex: none;\n  flex: none; }\n\n.vjs-playback-rate > .vjs-menu-button,\n.vjs-playback-rate .vjs-playback-rate-value {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n\n.vjs-playback-rate .vjs-playback-rate-value {\n  pointer-events: none;\n  font-size: 1.5em;\n  line-height: 2;\n  text-align: center; }\n\n.vjs-playback-rate .vjs-menu {\n  width: 4em;\n  left: 0em; }\n\n.vjs-error .vjs-error-display .vjs-modal-dialog-content {\n  font-size: 1.4em;\n  text-align: center; }\n\n.vjs-error .vjs-error-display:before {\n  color: #fff;\n  content: \'X\';\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 4em;\n  left: 0;\n  line-height: 1;\n  margin-top: -0.5em;\n  position: absolute;\n  text-shadow: 0.05em 0.05em 0.1em #000;\n  text-align: center;\n  top: 50%;\n  vertical-align: middle;\n  width: 100%; }\n\n.vjs-loading-spinner {\n  display: none;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -25px 0 0 -25px;\n  opacity: 0.85;\n  text-align: left;\n  border: 6px solid rgba(43, 51, 63, 0.7);\n  box-sizing: border-box;\n  background-clip: padding-box;\n  width: 50px;\n  height: 50px;\n  border-radius: 25px;\n  visibility: hidden; }\n\n.vjs-seeking .vjs-loading-spinner,\n.vjs-waiting .vjs-loading-spinner {\n  display: block;\n  animation: 0s linear 0.3s forwards vjs-spinner-show; }\n\n.vjs-loading-spinner:before,\n.vjs-loading-spinner:after {\n  content: "";\n  position: absolute;\n  margin: -6px;\n  box-sizing: inherit;\n  width: inherit;\n  height: inherit;\n  border-radius: inherit;\n  opacity: 1;\n  border: inherit;\n  border-color: transparent;\n  border-top-color: white; }\n\n.vjs-seeking .vjs-loading-spinner:before,\n.vjs-seeking .vjs-loading-spinner:after,\n.vjs-waiting .vjs-loading-spinner:before,\n.vjs-waiting .vjs-loading-spinner:after {\n  -webkit-animation: vjs-spinner-spin 1.1s cubic-bezier(0.6, 0.2, 0, 0.8) infinite, vjs-spinner-fade 1.1s linear infinite;\n  animation: vjs-spinner-spin 1.1s cubic-bezier(0.6, 0.2, 0, 0.8) infinite, vjs-spinner-fade 1.1s linear infinite; }\n\n.vjs-seeking .vjs-loading-spinner:before,\n.vjs-waiting .vjs-loading-spinner:before {\n  border-top-color: white; }\n\n.vjs-seeking .vjs-loading-spinner:after,\n.vjs-waiting .vjs-loading-spinner:after {\n  border-top-color: white;\n  -webkit-animation-delay: 0.44s;\n  animation-delay: 0.44s; }\n\n@keyframes vjs-spinner-show {\n  to {\n    visibility: visible; } }\n\n@-webkit-keyframes vjs-spinner-show {\n  to {\n    visibility: visible; } }\n\n@keyframes vjs-spinner-spin {\n  100% {\n    transform: rotate(360deg); } }\n\n@-webkit-keyframes vjs-spinner-spin {\n  100% {\n    -webkit-transform: rotate(360deg); } }\n\n@keyframes vjs-spinner-fade {\n  0% {\n    border-top-color: #73859f; }\n  20% {\n    border-top-color: #73859f; }\n  35% {\n    border-top-color: white; }\n  60% {\n    border-top-color: #73859f; }\n  100% {\n    border-top-color: #73859f; } }\n\n@-webkit-keyframes vjs-spinner-fade {\n  0% {\n    border-top-color: #73859f; }\n  20% {\n    border-top-color: #73859f; }\n  35% {\n    border-top-color: white; }\n  60% {\n    border-top-color: #73859f; }\n  100% {\n    border-top-color: #73859f; } }\n\n.vjs-chapters-button .vjs-menu ul {\n  width: 24em; }\n\n.video-js .vjs-subs-caps-button + .vjs-menu .vjs-captions-menu-item .vjs-menu-item-text .vjs-icon-placeholder {\n  position: absolute; }\n\n.video-js .vjs-subs-caps-button + .vjs-menu .vjs-captions-menu-item .vjs-menu-item-text .vjs-icon-placeholder:before {\n  font-family: VideoJS;\n  content: "\\F10D";\n  font-size: 1.5em;\n  line-height: inherit; }\n\n.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-custom-control-spacer {\n  -webkit-box-flex: auto;\n  -moz-box-flex: auto;\n  -webkit-flex: auto;\n  -ms-flex: auto;\n  flex: auto; }\n\n.video-js.vjs-layout-tiny:not(.vjs-fullscreen).vjs-no-flex .vjs-custom-control-spacer {\n  width: auto; }\n\n.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-current-time, .video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-time-divider, .video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-duration, .video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-remaining-time,\n.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-playback-rate, .video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-progress-control,\n.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-mute-control, .video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-volume-control,\n.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-chapters-button, .video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-descriptions-button, .video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-captions-button,\n.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-subtitles-button, .video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-audio-button {\n  display: none; }\n\n.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-current-time, .video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-time-divider, .video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-duration, .video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-remaining-time,\n.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-playback-rate,\n.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-mute-control, .video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-volume-control,\n.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-chapters-button, .video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-descriptions-button, .video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-captions-button,\n.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-subtitles-button, .video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-audio-button {\n  display: none; }\n\n.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-current-time, .video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-time-divider, .video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-duration, .video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-remaining-time,\n.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-playback-rate,\n.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-mute-control, .video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-volume-control,\n.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-chapters-button, .video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-descriptions-button, .video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-captions-button,\n.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-subtitles-button .vjs-audio-button {\n  display: none; }\n\n.vjs-modal-dialog.vjs-text-track-settings {\n  background-color: #2B333F;\n  background-color: rgba(43, 51, 63, 0.75);\n  color: #fff;\n  height: 70%; }\n\n.vjs-text-track-settings .vjs-modal-dialog-content {\n  display: table; }\n\n.vjs-text-track-settings .vjs-track-settings-colors,\n.vjs-text-track-settings .vjs-track-settings-font,\n.vjs-text-track-settings .vjs-track-settings-controls {\n  display: table-cell; }\n\n.vjs-text-track-settings .vjs-track-settings-controls {\n  text-align: right;\n  vertical-align: bottom; }\n\n.vjs-text-track-settings fieldset {\n  margin: 5px;\n  padding: 3px;\n  border: none; }\n\n.vjs-text-track-settings fieldset span {\n  display: inline-block;\n  margin-left: 5px; }\n\n.vjs-text-track-settings legend {\n  color: #fff;\n  margin: 0 0 5px 0; }\n\n.vjs-text-track-settings .vjs-label {\n  position: absolute;\n  clip: rect(1px 1px 1px 1px);\n  clip: rect(1px, 1px, 1px, 1px);\n  display: block;\n  margin: 0 0 5px 0;\n  padding: 0;\n  border: 0;\n  height: 1px;\n  width: 1px;\n  overflow: hidden; }\n\n.vjs-track-settings-controls button:focus,\n.vjs-track-settings-controls button:active {\n  outline-style: solid;\n  outline-width: medium;\n  background-image: linear-gradient(0deg, #fff 88%, #73859f 100%); }\n\n.vjs-track-settings-controls button:hover {\n  color: rgba(43, 51, 63, 0.75); }\n\n.vjs-track-settings-controls button {\n  background-color: #fff;\n  background-image: linear-gradient(-180deg, #fff 88%, #73859f 100%);\n  color: #2B333F;\n  cursor: pointer;\n  border-radius: 2px; }\n\n.vjs-track-settings-controls .vjs-default-button {\n  margin-right: 1em; }\n\n@media print {\n  .video-js > *:not(.vjs-tech):not(.vjs-poster) {\n    visibility: hidden; } }\n\n.vjs-resize-manager {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: none;\n  visibility: hidden; }\n\n@media \\0screen {\n  .vjs-user-inactive.vjs-playing .vjs-control-bar :before {\n    content: "";\n  }\n}\n\n@media \\0screen {\n  .vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar {\n    visibility: hidden;\n  }\n}\n',
''])
},
function (e, t, n) {
var i = n(111);
'string' == typeof i && (i = [
[e.i,
i,
'']
]);
var r = {
hmr: !0,
transform: void 0,
insertInto: void 0
};
n(49) (i, r);
i.locals && (e.exports = i.locals)
},
function (e, t, n) {
'use strict';
window,
n(0).registerPlugin('messagepoppy', function (e) {
var t = this;
if (e || (e = {
}), !e.message && '' != e.message.trim()) return;
e.interval || (e.interval = 240000),
e.bounce || (e.bounce = 15000),
e.timeout || (e.timeout = 1000);
const n = () =>{
setTimeout(() =>{
(n=>{
let i = t.el(),
r = 'div_' + (String.fromCharCode(65 + Math.floor(26 * Math.random())) + Date.now()),
o = document.createElement('div');
o.id = r,
o.style.top = '50%',
o.style.left = '50%',
o.style.fontSize = '25px',
o.style.position = 'absolute',
o.innerHTML = '<span style=\'color:rgba(0, 0, 0, 0.35)\'>' + e.message + '</span><br/><span style=\'color:rgba(255, 255, 255, 0.35)\'>' + e.message + '</span>',
i.appendChild(o),
n || setTimeout(function () {
document.getElementById(r).remove()
}, e.timeout)
}) (),
n()
}, e.interval + ((e, t) =>Math.floor(Math.random() * (t - e + 1)) + e) ( - e.bounce, e.bounce))
};
t.one('play', () =>{
n()
})
})
},
function (e, t, n) {
'use strict';
window,
n(0).registerPlugin('mobilelandscapefullscreen', function (e) {
var t = this;
e || (e = {
}),
t.on('fullscreenchange', function () {
if (t.isFullscreen()) if (screen.orientation && screen.orientation.lock) screen.orientation.lock('landscape');
 else {
let e = screen.lockOrientation || screen.mozLockOrientation || screen.msLockOrientation;
e && e('landscape')
} else if (screen.orientation && screen.orientation.unlock) screen.orientation.unlock();
 else {
let e = screen.unlockOrientation || screen.mozUnlockOrientation || screen.msUnlockOrientation || screen.orientation && screen.orientation.unlock;
e && e()
}
})
})
},
function (e, t, n) {
'use strict';
window,
document,
n(0).registerPlugin('remember', function (e) {
var t,
n = this;
function i(n) {
var i = this.currentTime(),
r = this.duration(),
o = Math.floor(i);
(o > r || 'ended' === n.type) && (o = 0),
t && (e.localStorageKey && (localStorage[e.localStorageKey] = o), e.sessionStorageKey && (sessionStorage[e.sessionStorageKey] = o))
}
e || (e = {
}),
n.on('timeupdate', i),
n.on('ended', i),
n.ready(function () {
var i = function () {
var i;
t || (t = !0, e.localStorageKey && (i = parseInt(localStorage[e.localStorageKey])), e.sessionStorageKey && (i = parseInt(sessionStorage[e.sessionStorageKey])), isNaN(i) || n.currentTime(i))
};
n.one('playing', i),
n.one('play', i),
n.one('loadedmetadata', i)
})
})
},
function (e, t, n) {
e.exports = function (e) {
'use strict';
var t = function (e, t) {
if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
},
n = function (e, t) {
if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
return !t || 'object' != typeof t && 'function' != typeof t ? e : t
},
i = (e = 'default' in e ? e.default:
e).getComponent('Button'), r = e.getComponent('Component'), o = {
}, s = e.registerPlugin || e.plugin, a = function (t) {
var n = this;
this.ready(function () {
!function (e, t) {
e.addClass('vjs-seek-buttons'),
t.forward && t.forward > 0 && (e.controlBar.seekForward = e.controlBar.addChild('seekButton', {
direction: 'forward',
seconds: t.forward
}), e.controlBar.el().insertBefore(e.controlBar.seekForward.el(), e.controlBar.el().firstChild.nextSibling)),
t.back && t.back > 0 && (e.controlBar.seekBack = e.controlBar.addChild('seekButton', {
direction: 'back',
seconds: t.back
}), e.controlBar.el().insertBefore(e.controlBar.seekBack.el(), e.controlBar.el().firstChild.nextSibling))
}(n, e.mergeOptions(o, t))
})
}, l = function (e) {
function i(r, o) {
t(this, i);
var s = n(this, e.call(this, r, o));
return 'forward' === s.options_.direction ? s.controlText(s.localize('Seek forward {{seconds}} seconds').replace('{{seconds}}', s.options_.seconds))  : 'back' === s.options_.direction && s.controlText(s.localize('Seek back {{seconds}} seconds').replace('{{seconds}}', s.options_.seconds)),
s
}
return function (e, t) {
if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
e.prototype = Object.create(t && t.prototype, {
constructor: {
value: e,
enumerable: !1,
writable: !0,
configurable: !0
}
}),
t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t)  : e.__proto__ = t)
}(i, e),
i.prototype.buildCSSClass = function () {
return 'vjs-seek-button skip-' + this.options_.direction + ' skip-' + this.options_.seconds + ' ' + e.prototype.buildCSSClass.call(this)
},
i.prototype.handleClick = function () {
var e = this.player_.currentTime();
'forward' === this.options_.direction ? this.player_.currentTime(e + this.options_.seconds)  : 'back' === this.options_.direction && this.player_.currentTime(e - this.options_.seconds)
},
i
}(i); return r.registerComponent('SeekButton', l), s('seekButtons', a), a.VERSION = '1.2.4', a
}(n(0))
},
function (e, t, n) {
'use strict';
!function (e, t, n) {
var i = function (n) {
return new RegExp('(?:^|;\\s*)' + e.escape(n).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=').test(t.cookie)
},
r = function () {
try {
return e.localStorage.setItem('persistVolume', 'persistVolume'),
e.localStorage.removeItem('persistVolume'),
!0
} catch (e) {
return !1
}
},
o = function (n) {
return r() ? e.localStorage.getItem(n)  : function (n) {
if (!n || !i(n)) return null;
var r = new RegExp('(?:^|.*;\\s*)' + e.escape(n).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*');
return e.unescape(t.cookie.replace(r, '$1'))
}(n)
},
s = function (n, i) {
return r() ? e.localStorage.setItem(n, i)  : function (n, i, r, o, s, a) {
if (n && !/^(?:expires|max\-age|path|domain|secure)$/i.test(n)) {
var l = '';
if (r) switch (r.constructor) {
case Number:
l = r === 1 / 0 ? '; expires=Tue, 19 Jan 2038 03:14:07 GMT' : '; max-age=' + r;
break;
case String:
l = '; expires=' + r;
break;
case Date:
l = '; expires=' + r.toGMTString()
}
t.cookie = e.escape(n) + '=' + e.escape(i) + l + (s ? '; domain=' + s : '') + (o ? '; path=' + o : '') + (a ? '; secure' : '')
}
}(n, i, 1 / 0, '/')
},
a = {
namespace: ''
};
n.registerPlugin('persistvolume', function (e) {
var t = this,
n = function (e) {
var t,
n,
i;
for (n = 1; n < arguments.length; n++) for (i in t = arguments[n]) t.hasOwnProperty(i) && (e[i] = t[i]);
return e
}({
}, a, e || {
}),
i = n.namespace + '-volume',
r = n.namespace + '-mute';
t.on('volumechange', function () {
s(i, t.volume()),
s(r, t.muted())
});
var l = o(i);
null !== l && t.volume(l);
var u = o(r);
null !== u && t.muted('true' === u)
})
}(window, document, n(0))
},
function (e, t, n) {
var i,
r;
i = [
n(0)
],
void 0 === (r = function (e) {
return function (e) {
'use strict';
'undefined' != typeof window && (window.videojs_hotkeys = {
version: '0.2.21'
}),
(e.registerPlugin || e.plugin) ('hotkeys', function (t) {
var n = this,
i = n.el(),
r = document,
o = {
volumeStep: 0.1,
seekStep: 5,
enableMute: !0,
enableVolumeScroll: !0,
enableFullscreen: !0,
enableNumbers: !0,
enableJogStyle: !1,
alwaysCaptureHotkeys: !1,
enableModifiersForNumbers: !0,
enableInactiveFocus: !0,
skipInitialFocus: !1,
playPauseKey: function (e) {
return 32 === e.which || 179 === e.which
},
rewindKey: function (e) {
return 37 === e.which || 177 === e.which
},
forwardKey: function (e) {
return 39 === e.which || 176 === e.which
},
volumeUpKey: function (e) {
return 38 === e.which
},
volumeDownKey: function (e) {
return 40 === e.which
},
muteKey: function (e) {
return 77 === e.which
},
fullscreenKey: function (e) {
return 70 === e.which
},
customKeys: {
}
},
s = e.mergeOptions || e.util.mergeOptions,
a = (t = s(o, t || {
})).volumeStep,
l = t.seekStep,
u = t.enableMute,
c = t.enableVolumeScroll,
h = t.enableFullscreen,
d = t.enableNumbers,
f = t.enableJogStyle,
p = t.alwaysCaptureHotkeys,
v = t.enableModifiersForNumbers,
g = t.enableInactiveFocus,
m = t.skipInitialFocus;
i.hasAttribute('tabIndex') || i.setAttribute('tabIndex', '-1'),
i.style.outline = 'none',
(p || !n.autoplay()) && (m || n.one('play', function () {
i.focus()
})),
g && n.on('userinactive', function () {
var e = function () {
clearTimeout(t)
},
t = setTimeout(function () {
n.off('useractive', e),
r.activeElement.parentElement == i.querySelector('.vjs-control-bar') && i.focus()
}, 10);
n.one('useractive', e)
}),
n.on('play', function () {
var e = i.querySelector('.iframeblocker');
e && '' === e.style.display && (e.style.display = 'block', e.style.bottom = '39px')
});
var A = function (e) {
if (n.controls()) {
var t = r.activeElement;
if ((p || t == i || t == i.querySelector('.vjs-tech') || t == i.querySelector('.iframeblocker') || t == i.querySelector('.vjs-control-bar')) && c) {
e = window.event || e;
var o = Math.max( - 1, Math.min(1, e.wheelDelta || - e.detail));
e.preventDefault(),
1 == o ? n.volume(n.volume() + a)  : - 1 == o && n.volume(n.volume() - a)
}
}
},
y = function (e, n) {
return t.playPauseKey(e, n) ? 1 : t.rewindKey(e, n) ? 2 : t.forwardKey(e, n) ? 3 : t.volumeUpKey(e, n) ? 4 : t.volumeDownKey(e, n) ? 5 : t.muteKey(e, n) ? 6 : t.fullscreenKey(e, n) ? 7 : void 0
};
return n.on('keydown', function (e) {
var o,
s,
c = e.which,
g = e.preventDefault,
m = n.duration();
if (n.controls()) {
var A = r.activeElement;
if (p || A == i || A == i.querySelector('.vjs-tech') || A == i.querySelector('.vjs-control-bar') || A == i.querySelector('.iframeblocker')) switch (y(e, n)) {
case 1:
g(),
p && e.stopPropagation(),
n.paused() ? n.play()  : n.pause();
break;
case 2:
o = !n.paused(),
g(),
o && n.pause(),
s = n.currentTime() - l,
n.currentTime() <= l && (s = 0),
n.currentTime(s),
o && n.play();
break;
case 3:
o = !n.paused(),
g(),
o && n.pause(),
(s = n.currentTime() + l) >= m && (s = o ? m - 0.001 : m),
n.currentTime(s),
o && n.play();
break;
case 5:
g(),
f ? (s = n.currentTime() - 1, n.currentTime() <= 1 && (s = 0), n.currentTime(s))  : n.volume(n.volume() - a);
break;
case 4:
g(),
f ? ((s = n.currentTime() + 1) >= m && (s = m), n.currentTime(s))  : n.volume(n.volume() + a);
break;
case 6:
u && n.muted(!n.muted());
break;
case 7:
h && (n.isFullscreen() ? n.exitFullscreen()  : n.requestFullscreen());
break;
default:
if ((c > 47 && c < 59 || c > 95 && c < 106) && (v || !(e.metaKey || e.ctrlKey || e.altKey)) && d) {
var b = 48;
c > 95 && (b = 96);
var _ = c - b;
g(),
n.currentTime(n.duration() * _ * 0.1)
}
for (var w in t.customKeys) {
var T = t.customKeys[w];
T && T.key && T.handler && T.key(e) && (g(), T.handler(n, t, e))
}
}
}
}), n.on('dblclick', function (e) {
if (n.controls()) {
var t = e.relatedTarget || e.toElement || r.activeElement;
t != i && t != i.querySelector('.vjs-tech') && t != i.querySelector('.iframeblocker') || h && (n.isFullscreen() ? n.exitFullscreen()  : n.requestFullscreen())
}
}), n.on('mousewheel', A), n.on('DOMMouseScroll', A), this
})
}(e.default || e)
}.apply(t, i)) || (e.exports = r)
}, function (e, t, n) {
'use strict';
var i = new RegExp('%[a-f0-9]{2}', 'gi'),
r = new RegExp('(%[a-f0-9]{2})+', 'gi');
function o(e, t) {
try {
return decodeURIComponent(e.join(''))
} catch (e) {
}
if (1 === e.length) return e;
t = t || 1;
var n = e.slice(0, t),
i = e.slice(t);
return Array.prototype.concat.call([], o(n), o(i))
}
function s(e) {
try {
return decodeURIComponent(e)
} catch (r) {
for (var t = e.match(i), n = 1; n < t.length; n++) t = (e = o(t, n).join('')).match(i);
return e
}
}
e.exports = function (e) {
if ('string' != typeof e) throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof e + '`');
try {
return e = e.replace(/\+/g, ' '),
decodeURIComponent(e)
} catch (t) {
return function (e) {
for (var t = {
'%FE%FF': '��',
'%FF%FE': '��'
}, n = r.exec(e); n; ) {
try {
t[n[0]] = decodeURIComponent(n[0])
} catch (e) {
var i = s(n[0]);
i !== n[0] && (t[n[0]] = i)
}
n = r.exec(e)
}
t['%C2'] = '�';
for (var o = Object.keys(t), a = 0; a < o.length; a++) {
var l = o[a];
e = e.replace(new RegExp(l, 'g'), t[l])
}
return e
}(e)
}
}
}, function (e, t, n) {
'use strict';
e.exports = (e=>encodeURIComponent(e).replace(/[!'()*]/g, e=>`%${e.charCodeAt(0).toString(16).toUpperCase()
}
`))
},
function (e, t, n) {
'use strict';
Object.defineProperty(t, '__esModule', {
value: !0
});
var i,
r = n(0),
o = (i = r) && i.__esModule ? i : {
default:
i
},
s = {
errorInterval: 30,
getSource: function (e) {
return e(this.tech({
IWillNotUseThisInPlugins: !0
}).currentSource_)
}
};
t.default = function (e) {
!function e(t, n) {
var i = 0,
r = 0,
a = o.default.mergeOptions(s, n);
t.ready(function () {
t.trigger({
type: 'usage',
name: 'hls-error-reload-initialized'
})
});
var l = function () {
r && t.currentTime(r)
},
u = function (e) {
null !== e && void 0 !== e && (r = t.duration() !== 1 / 0 && t.currentTime() || 0, t.one('loadedmetadata', l), t.src(e), t.trigger({
type: 'usage',
name: 'hls-error-reload'
}), t.play())
},
c = function () {
if (Date.now() - i < 1000 * a.errorInterval) t.trigger({
type: 'usage',
name: 'hls-error-reload-canceled'
});
 else {
if (a.getSource && 'function' == typeof a.getSource) return i = Date.now(),
a.getSource.call(t, u);
o.default.log.error('ERROR: reloadSourceOnError - The option getSource must be a function!')
}
},
h = function e() {
t.off('loadedmetadata', l),
t.off('error', c),
t.off('dispose', e)
};
t.on('error', c),
t.on('dispose', h),
t.reloadSourceOnError = function (n) {
h(),
e(t, n)
}
}(this, e)
},
e.exports = t.default
},
function (e, t, n) {
'use strict';
Object.defineProperty(t, '__esModule', {
value: !0
});
var i = function () {
function e(e, t) {
for (var n = 0; n < t.length; n++) {
var i = t[n];
i.enumerable = i.enumerable || !1,
i.configurable = !0,
'value' in i && (i.writable = !0),
Object.defineProperty(e, i.key, i)
}
}
return function (t, n, i) {
return n && e(t.prototype, n),
i && e(t, i),
t
}
}();
function r(e) {
return e && e.__esModule ? e : {
default:
e
}
}
var o = r(n(3)),
s = r(n(32)),
a = r(n(0)),
l = [
'seeking',
'seeked',
'pause',
'playing',
'error'
],
u = function () {
function e(t) {
var n = this;
!function (e, t) {
if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
}(this, e),
this.tech_ = t.tech,
this.seekable = t.seekable,
this.consecutiveUpdates = 0,
this.lastRecordedTime = null,
this.timer_ = null,
this.checkCurrentTimeTimeout_ = null,
t.debug && (this.logger_ = a.default.log.bind(a.default,
'playback-watcher ->')),
this.logger_('initialize');
var i = function () {
return n.monitorCurrentTime_()
},
r = function () {
return n.techWaiting_()
},
s = function () {
return n.cancelTimer_()
},
u = function () {
return n.fixesBadSeeks_()
};
this.tech_.on('seekablechanged', u),
this.tech_.on('waiting', r),
this.tech_.on(l, s),
this.tech_.on('canplay', i),
this.dispose = function () {
n.logger_('dispose'),
n.tech_.off('seekablechanged', u),
n.tech_.off('waiting', r),
n.tech_.off(l, s),
n.tech_.off('canplay', i),
n.checkCurrentTimeTimeout_ && o.default.clearTimeout(n.checkCurrentTimeTimeout_),
n.cancelTimer_()
}
}
return i(e, [
{
key: 'monitorCurrentTime_',
value: function () {
this.checkCurrentTime_(),
this.checkCurrentTimeTimeout_ && o.default.clearTimeout(this.checkCurrentTimeTimeout_),
this.checkCurrentTimeTimeout_ = o.default.setTimeout(this.monitorCurrentTime_.bind(this), 250)
}
},
{
key: 'checkCurrentTime_',
value: function () {
if (this.tech_.seeking() && this.fixesBadSeeks_()) return this.consecutiveUpdates = 0,
void (this.lastRecordedTime = this.tech_.currentTime());
if (!this.tech_.paused() && !this.tech_.seeking()) {
var e = this.tech_.currentTime(),
t = this.tech_.buffered();
if (this.lastRecordedTime === e && (!t.length || e + s.default.SAFE_TIME_DELTA >= t.end(t.length - 1))) return this.techWaiting_(); this.consecutiveUpdates >= 5 && e === this.lastRecordedTime ? (this.consecutiveUpdates++, this.waiting_())  : e === this.lastRecordedTime ? this.consecutiveUpdates++ : (this.consecutiveUpdates = 0, this.lastRecordedTime = e)
}
}
},
{
key: 'cancelTimer_',
value: function () {
this.consecutiveUpdates = 0,
this.timer_ && (this.logger_('cancelTimer_'), clearTimeout(this.timer_)),
this.timer_ = null
}
},
{
key: 'fixesBadSeeks_',
value: function () {
var e = this.tech_.seeking(),
t = this.seekable(),
n = this.tech_.currentTime(),
i = void 0;
e && this.afterSeekableWindow_(t, n) && (i = t.end(t.length - 1));
e && this.beforeSeekableWindow_(t, n) && (i = t.start(0) + s.default.SAFE_TIME_DELTA); return void 0 !== i && (this.logger_('Trying to seek outside of seekable at time ' + n + ' with seekable range ' + s.default.printableRange(t) + '. Seeking to ' + i + '.'), this.tech_.setCurrentTime(i), !0)
}
},
{
key: 'waiting_',
value: function () {
if (!this.techWaiting_()) {
var e = this.tech_.currentTime(),
t = this.tech_.buffered(),
n = s.default.findRange(t, e);
return n.length && e + 3 <= n.end(0) ? (this.cancelTimer_(), this.tech_.setCurrentTime(e), this.logger_('Stopped at ' + e + ' while inside a buffered region [' + n.start(0) + ' -> ' + n.end(0) + ']. Attempting to resume playback by seeking to the current time.'), void this.tech_.trigger({
type: 'usage',
name: 'hls-unknown-waiting'
}))  : void 0
}
}
},
{
key: 'techWaiting_',
value: function () {
var e = this.seekable(),
t = this.tech_.currentTime();
if (this.tech_.seeking() && this.fixesBadSeeks_()) return !0;
if (this.tech_.seeking() || null !== this.timer_) return !0;
if (this.beforeSeekableWindow_(e, t)) {
var n = e.end(e.length - 1);
return this.logger_('Fell out of live window at time ' + t + '. Seeking to live point (seekable end) ' + n),
this.cancelTimer_(),
this.tech_.setCurrentTime(n),
this.tech_.trigger({
type: 'usage',
name: 'hls-live-resync'
}),
!0
}
var i = this.tech_.buffered(),
r = s.default.findNextRange(i, t);
if (this.videoUnderflow_(r, i, t)) return this.cancelTimer_(),
this.tech_.setCurrentTime(t),
this.tech_.trigger({
type: 'usage',
name: 'hls-video-underflow'
}),
!0;
if (r.length > 0) {
var o = r.start(0) - t;
return this.logger_('Stopped at ' + t + ', setting timer for ' + o + ', seeking to ' + r.start(0)),
this.timer_ = setTimeout(this.skipTheGap_.bind(this), 1000 * o, t),
!0
}
return !1
}
},
{
key: 'afterSeekableWindow_',
value: function (e, t) {
return !!e.length && t > e.end(e.length - 1) + s.default.SAFE_TIME_DELTA
}
},
{
key: 'beforeSeekableWindow_',
value: function (e, t) {
return !!(e.length && e.start(0) > 0 && t < e.start(0) - s.default.SAFE_TIME_DELTA)
}
},
{
key: 'videoUnderflow_',
value: function (e, t, n) {
if (0 === e.length) {
var i = this.gapFromVideoUnderflow_(t, n);
if (i) return this.logger_('Encountered a gap in video from ' + i.start + ' to ' + i.end + '. Seeking to current time ' + n),
!0
}
return !1
}
},
{
key: 'skipTheGap_',
value: function (e) {
var t = this.tech_.buffered(),
n = this.tech_.currentTime(),
i = s.default.findNextRange(t, n);
this.cancelTimer_(),
0 !== i.length && n === e && (this.logger_('skipTheGap_:', 'currentTime:', n, 'scheduled currentTime:', e, 'nextRange start:', i.start(0)), this.tech_.setCurrentTime(i.start(0) + s.default.TIME_FUDGE_FACTOR), this.tech_.trigger({
type: 'usage',
name: 'hls-gap-skip'
}))
}
},
{
key: 'gapFromVideoUnderflow_',
value: function (e, t) {
for (var n = s.default.findGaps(e),
i = 0;
i < n.length;
i++) {
var r = n.start(i),
o = n.end(i);
if (t - r < 4 && t - r > 2) return {
start: r,
end: o
}
}
return null
}
},
{
key: 'logger_',
value: function () {
}
}
]),
e
}();
t.default = u,
e.exports = t.default
},
function (e, t, n) {
'use strict';
Object.defineProperty(t, '__esModule', {
value: !0
});
var i = n(13),
r = function e(t, n, r) {
!function (e, t) {
if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
}(this, e);
var o,
s,
a,
l = t.masterPlaylistController_.fastQualityChange_.bind(t.masterPlaylistController_);
if (n.attributes.RESOLUTION) {
var u = n.attributes.RESOLUTION;
this.width = u.width,
this.height = u.height
}
this.bandwidth = n.attributes.BANDWIDTH,
this.id = r,
this.enabled = (o = t.playlists, s = n.uri, a = l, function (e) {
var t = o.master.playlists[s],
n = (0, i.isIncompatible) (t),
r = (0, i.isEnabled) (t);
return void 0 === e ? r : (e ? delete t.disabled : t.disabled = !0, e === r || n || (a(), e ? o.trigger('renditionenabled')  : o.trigger('renditiondisabled')), e)
})
};
t.default = function (e) {
var t = e.playlists;
e.representations = function () {
return t.master.playlists.filter(function (e) {
return !(0, i.isIncompatible) (e)
}).map(function (t, n) {
return new r(e, t, t.uri)
})
}
},
e.exports = t.default
},
function (e, t, n) {
'use strict';
function i(e) {
return e && e.__esModule ? e : {
default:
e
}
}
Object.defineProperty(t, '__esModule', {
value: !0
});
var r = i(n(0)),
o = i(n(48)),
s = function () {
},
a = function (e) {
var t = e.default ? 'main' : 'alternative';
return e.characteristics && e.characteristics.indexOf('public.accessibility.describes-video') >= 0 && (t = 'main-desc'),
t
},
l = function (e, t) {
e.abort(),
e.pause(),
t && t.activePlaylistLoader && (t.activePlaylistLoader.pause(), t.activePlaylistLoader = null)
};
t.stopLoaders = l;
var u = function (e, t) {
t.activePlaylistLoader = e,
e.load()
};
t.startLoaders = u;
var c = function (e, t) {
return function () {
var n = t.segmentLoaders,
i = n[e],
r = n.main,
o = t.mediaTypes[e],
s = o.activeTrack(),
a = o.activeGroup(s),
c = o.activePlaylistLoader;
l(i, o),
a && (a.playlistLoader ? (i.resyncLoader(), u(a.playlistLoader, o))  : c && r.resetEverything())
}
};
t.onGroupChanged = c;
var h = function (e, t) {
return function () {
var n = t.segmentLoaders,
i = n[e],
r = n.main,
o = t.mediaTypes[e],
s = o.activeTrack(),
a = o.activeGroup(s),
c = o.activePlaylistLoader;
l(i, o),
a && (a.playlistLoader ? c !== a.playlistLoader ? (i.track && i.track(s), i.resetEverything(), u(a.playlistLoader, o))  : u(a.playlistLoader, o)  : r.resetEverything())
}
};
t.onTrackChanged = h;
var d = {
AUDIO: function (e, t) {
return function () {
var n = t.segmentLoaders[e],
i = t.mediaTypes[e],
o = t.blacklistCurrentPlaylist;
l(n, i);
var s = i.activeTrack(),
a = i.activeGroup(),
u = (a.filter(function (e) {
return e.default
}) [0] || a[0]).id, c = i.tracks[u]; if (s !== c) {
for (var h in r.default.log.warn('Problem encountered loading the alternate audio track.Switching back to default.'),
i.tracks) i.tracks[h].enabled = i.tracks[h] === c; i.onTrackChanged()
} else o({
message: 'Problem encountered loading the default audio track.'
})
}
},
SUBTITLES: function (e, t) {
return function () {
var n = t.segmentLoaders[e],
i = t.mediaTypes[e];
r.default.log.warn('Problem encountered loading the subtitle track.Disabling subtitle track.'),
l(n, i);
var o = i.activeTrack();
o && (o.mode = 'disabled'),
i.onTrackChanged()
}
}
};
t.onError = d;
var f = {
AUDIO: function (e, t, n) {
if (t) {
var i = n.tech,
r = n.requestOptions,
o = n.segmentLoaders[e];
t.on('loadedmetadata', function () {
var e = t.media();
o.playlist(e, r),
(!i.paused() || e.endList && 'none' !== i.preload()) && o.load()
}),
t.on('loadedplaylist', function () {
o.playlist(t.media(), r),
i.paused() || o.load()
}),
t.on('error', d[e](e, n))
}
},
SUBTITLES: function (e, t, n) {
var i = n.tech,
r = n.requestOptions,
o = n.segmentLoaders[e],
s = n.mediaTypes[e];
t.on('loadedmetadata', function () {
var e = t.media();
o.playlist(e, r),
o.track(s.activeTrack()),
(!i.paused() || e.endList && 'none' !== i.preload()) && o.load()
}),
t.on('loadedplaylist', function () {
o.playlist(t.media(), r),
i.paused() || o.load()
}),
t.on('error', d[e](e, n))
}
};
t.setupListeners = f;
var p = {
AUDIO: function (e, t) {
var n = t.mode,
i = t.hls,
s = t.segmentLoaders[e],
l = t.requestOptions.withCredentials,
u = t.master.mediaGroups,
c = t.mediaTypes[e],
h = c.groups,
p = c.tracks;
for (var v in u[e] && 0 !== Object.keys(u[e]).length && 'html5' === n || (u[e] = {
main: {
default:
{
default:
!0
}
}
}), u[e]) for (var g in h[v] || (h[v] = [
]), u[e][v]) {
var m = u[e][v][g],
A = void 0;
if (A = m.resolvedUri ? new o.default(m.resolvedUri, i, l) :
null,
m = r.default.mergeOptions({
id: g,
playlistLoader: A
}, m),
f[e](e, m.playlistLoader, t),
h[v].push(m),
void 0 === p[g]) {
var y = new r.default.AudioTrack({
id: g,
kind: a(m),
enabled: !1,
language: m.language,
default:
m.default,
label:
g
});
p[g] = y
}
}
s.on('error', d[e](e, t))
}, SUBTITLES: function (e, t) {
var n = t.tech,
i = t.hls,
s = t.segmentLoaders[e],
a = t.requestOptions.withCredentials,
l = t.master.mediaGroups,
u = t.mediaTypes[e],
c = u.groups,
h = u.tracks;
for (var p in l[e]) for (var v in c[p] || (c[p] = [
]), l[e][p]) if (!l[e][p][v].forced) {
var g = l[e][p][v];
if (g = r.default.mergeOptions({
id: v,
playlistLoader: new o.default(g.resolvedUri, i, a)
},
g), f[e](e, g.playlistLoader, t), c[p].push(g), void 0 === h[v]) {
var m = n.addRemoteTextTrack({
id: v,
kind: 'subtitles',
enabled: !1,
language: g.language,
label: v
}, !1).track;
h[v] = m
}
}
s.on('error', d[e](e, t))
},
'CLOSED-CAPTIONS': function (e, t) {
var n = t.tech,
i = t.master.mediaGroups,
o = t.mediaTypes[e],
s = o.groups,
a = o.tracks;
for (var l in i[e]) for (var u in s[l] || (s[l] = [
]), i[e][l]) {
var c = i[e][l][u];
if (c.instreamId.match(/CC\d/) && (s[l].push(r.default.mergeOptions({
id: u
}, c)), void 0 === a[u])) {
var h = n.addRemoteTextTrack({
id: c.instreamId,
kind: 'captions',
enabled: !1,
language: c.language,
label: u
}, !1).track;
a[u] = h
}
}
}
};
t.initialize = p;
var v = function (e, t) {
return function (n) {
var i = t.masterPlaylistLoader,
r = t.mediaTypes[e].groups,
o = i.media();
if (!o) return null;
var s = null;
return o.attributes[e] && (s = r[o.attributes[e]]),
s = s || r.main,
void 0 === n ? s : null === n ? null : s.filter(function (e) {
return e.id === n.id
}) [0] || null
}
};
t.activeGroup = v;
var g = {
AUDIO: function (e, t) {
return function () {
var n = t.mediaTypes[e].tracks;
for (var i in n) if (n[i].enabled) return n[i];
return null
}
},
SUBTITLES: function (e, t) {
return function () {
var n = t.mediaTypes[e].tracks;
for (var i in n) if ('showing' === n[i].mode) return n[i];
return null
}
}
};
t.activeTrack = g;
t.setupMediaGroups = function (e) {
[
'AUDIO',
'SUBTITLES',
'CLOSED-CAPTIONS'
].forEach(function (t) {
p[t](t, e)
});
var t = e.mediaTypes,
n = e.masterPlaylistLoader,
i = e.tech,
r = e.hls;
[
'AUDIO',
'SUBTITLES'
].forEach(function (n) {
t[n].activeGroup = v(n, e),
t[n].activeTrack = g[n](n, e),
t[n].onGroupChanged = c(n, e),
t[n].onTrackChanged = h(n, e)
});
var o = t.AUDIO.activeGroup(),
s = (o.filter(function (e) {
return e.default
}) [0] || o[0]).id; t.AUDIO.tracks[s].enabled = !0, t.AUDIO.onTrackChanged(), n.on('mediachange', function () {
[
'AUDIO',
'SUBTITLES'
].forEach(function (e) {
return t[e].onGroupChanged()
})
}); var a = function () {
t.AUDIO.onTrackChanged(),
i.trigger({
type: 'usage',
name: 'hls-audio-change'
})
}; for (var l in i.audioTracks().addEventListener('change', a), i.remoteTextTracks().addEventListener('change', t.SUBTITLES.onTrackChanged), r.on('dispose', function () {
i.audioTracks().removeEventListener('change', a),
i.remoteTextTracks().removeEventListener('change', t.SUBTITLES.onTrackChanged)
}), i.clearTracks('audio'), t.AUDIO.tracks) i.audioTracks().addTrack(t.AUDIO.tracks[l])
};
t.createMediaTypes = function () {
var e = {
};
return ['AUDIO',
'SUBTITLES',
'CLOSED-CAPTIONS'].forEach(function (t) {
e[t] = {
groups: {
},
tracks: {
},
activePlaylistLoader: null,
activeGroup: s,
activeTrack: s,
onGroupChanged: s,
onTrackChanged: s
}
}),
e
}
},
function (e, t, n) {
'use strict';
var i = [
96000,
88200,
64000,
48000,
44100,
32000,
24000,
22050,
16000,
12000,
11025,
8000,
7350
],
r = function (e) {
return e[0] << 21 | e[1] << 14 | e[2] << 7 | e[3]
};
e.exports = {
parseId3TagSize: function (e, t) {
var n = e[t + 6] << 21 | e[t + 7] << 14 | e[t + 8] << 7 | e[t + 9];
return (16 & e[t + 5]) >> 4 ? n + 20 : n + 10
},
parseAdtsSize: function (e, t) {
var n = (224 & e[t + 5]) >> 5,
i = e[t + 4] << 3;
return 6144 & e[t + 3] | i | n
},
parseType: function (e, t) {
return e[t] === 'I'.charCodeAt(0) && e[t + 1] === 'D'.charCodeAt(0) && e[t + 2] === '3'.charCodeAt(0) ? 'timed-metadata' : !0 & e[t] && 240 == (240 & e[t + 1]) ? 'audio' : null
},
parseSampleRate: function (e) {
for (var t = 0; t + 5 < e.length; ) {
if (255 === e[t] && 240 == (246 & e[t + 1])) return i[(60 & e[t + 2]) >>> 2];
t++
}
return null
},
parseAacTimestamp: function (e) {
var t,
n,
i;
t = 10,
64 & e[5] && (t += 4, t += r(e.subarray(10, 14)));
do {
if ((n = r(e.subarray(t + 4, t + 8))) < 1) return null;
if ('PRIV' === String.fromCharCode(e[t], e[t + 1], e[t + 2], e[t + 3])) {
i = e.subarray(t + 10, t + n + 10);
for (var o = 0; o < i.byteLength; o++) if (0 === i[o]) {
if ('com.apple.streaming.transportStreamTimestamp' === unescape(function (e, t, n) {
var i,
r = '';
for (i = t; i < n; i++) r += '%' + ('00' + e[i].toString(16)).slice( - 2);
return r
}(i, 0, o))) {
var s = i.subarray(o + 1),
a = (1 & s[3]) << 30 | s[4] << 22 | s[5] << 14 | s[6] << 6 | s[7] >>> 2;
return a *= 4,
a += 3 & s[7]
}
break
}
}
t += 10,
t += n
} while (t < e.byteLength);
return null
}
}
},
function (e, t, n) {
'use strict';
var i = n(18),
r = function (e) {
var t = 31 & e[1];
return t <<= 8,
t |= e[2]
},
o = function (e) {
return !!(64 & e[1])
},
s = function (e) {
var t = 0;
return (48 & e[3]) >>> 4 > 1 && (t += e[4] + 1),
t
},
a = function (e) {
switch (e) {
case 5:
return 'slice_layer_without_partitioning_rbsp_idr';
case 6:
return 'sei_rbsp';
case 7:
return 'seq_parameter_set_rbsp';
case 8:
return 'pic_parameter_set_rbsp';
case 9:
return 'access_unit_delimiter_rbsp';
default:
return null
}
};
e.exports = {
parseType: function (e, t) {
var n = r(e);
return 0 === n ? 'pat' : n === t ? 'pmt' : t ? 'pes' : null
},
parsePat: function (e) {
var t = o(e),
n = 4 + s(e);
return t && (n += e[n] + 1),
(31 & e[n + 10]) << 8 | e[n + 11]
},
parsePmt: function (e) {
var t = {
},
n = o(e),
i = 4 + s(e);
if (n && (i += e[i] + 1), 1 & e[i + 5]) {
var r;
r = 3 + ((15 & e[i + 1]) << 8 | e[i + 2]) - 4;
for (var a = 12 + ((15 & e[i + 10]) << 8 | e[i + 11]); a < r; ) {
var l = i + a;
t[(31 & e[l + 1]) << 8 | e[l + 2]] = e[l],
a += 5 + ((15 & e[l + 3]) << 8 | e[l + 4])
}
return t
}
},
parsePayloadUnitStartIndicator: o,
parsePesType: function (e, t) {
switch (t[r(e)]) {
case i.H264_STREAM_TYPE:
return 'video';
case i.ADTS_STREAM_TYPE:
return 'audio';
case i.METADATA_STREAM_TYPE:
return 'timed-metadata';
default:
return null
}
},
parsePesTime: function (e) {
if (!o(e)) return null;
var t = 4 + s(e);
if (t >= e.byteLength) return null;
var n,
i = null;
return 192 & (n = e[t + 7]) && ((i = {
}).pts = (14 & e[t + 9]) << 27 | (255 & e[t + 10]) << 20 | (254 & e[t + 11]) << 12 | (255 & e[t + 12]) << 5 | (254 & e[t + 13]) >>> 3, i.pts *= 4, i.pts += (6 & e[t + 13]) >>> 1, i.dts = i.pts, 64 & n && (i.dts = (14 & e[t + 14]) << 27 | (255 & e[t + 15]) << 20 | (254 & e[t + 16]) << 12 | (255 & e[t + 17]) << 5 | (254 & e[t + 18]) >>> 3, i.dts *= 4, i.dts += (6 & e[t + 18]) >>> 1)),
i
},
videoPacketContainsKeyFrame: function (e) {
for (var t = 4 + s(e), n = e.subarray(t), i = 0, r = 0, o = !1; r < n.byteLength - 3; r++) if (1 === n[r + 2]) {
i = r + 5;
break
}
for (; i < n.byteLength; ) switch (n[i]) {
case 0:
if (0 !== n[i - 1]) {
i += 2;
break
}
if (0 !== n[i - 2]) {
i++;
break
}
r + 3 !== i - 2 && 'slice_layer_without_partitioning_rbsp_idr' === a(31 & n[r + 3]) && (o = !0);
do {
i++
} while (1 !== n[i] && i < n.length);
r = i - 2,
i += 3;
break;
case 1:
if (0 !== n[i - 1] || 0 !== n[i - 2]) {
i += 3;
break
}
'slice_layer_without_partitioning_rbsp_idr' === a(31 & n[r + 3]) && (o = !0),
r = i - 2,
i += 3;
break;
default:
i += 3
}
return n = n.subarray(r),
i -= r,
r = 0,
n && n.byteLength > 3 && 'slice_layer_without_partitioning_rbsp_idr' === a(31 & n[r + 3]) && (o = !0),
o
}
}
},
function (e, t, n) {
'use strict';
var i = n(18),
r = n(62).handleRollover,
o = {
};
o.ts = n(126),
o.aac = n(125);
var s = function (e, t, n) {
for (var i, r, s, a, l = 0, u = 188, c = !1; u < e.byteLength; ) if (71 !== e[l] || 71 !== e[u]) l++,
u++;
 else {
switch (i = e.subarray(l, u), o.ts.parseType(i, t.pid)) {
case 'pes':
r = o.ts.parsePesType(i, t.table),
s = o.ts.parsePayloadUnitStartIndicator(i),
'audio' === r && s && (a = o.ts.parsePesTime(i)) && (a.type = 'audio', n.audio.push(a), c = !0)
}
if (c) break;
l += 188,
u += 188
}
for (l = (u = e.byteLength) - 188, c = !1; l >= 0; ) if (71 !== e[l] || 71 !== e[u]) l--,
u--;
 else {
switch (i = e.subarray(l, u), o.ts.parseType(i, t.pid)) {
case 'pes':
r = o.ts.parsePesType(i, t.table),
s = o.ts.parsePayloadUnitStartIndicator(i),
'audio' === r && s && (a = o.ts.parsePesTime(i)) && (a.type = 'audio', n.audio.push(a), c = !0)
}
if (c) break;
l -= 188,
u -= 188
}
},
a = function (e, t, n) {
for (var i, r, s, a, l, u, c, h = 0, d = 188, f = !1, p = {
data: [
],
size: 0
}; d < e.byteLength; ) if (71 !== e[h] || 71 !== e[d]) h++,
d++;
 else {
switch (i = e.subarray(h, d), o.ts.parseType(i, t.pid)) {
case 'pes':
if (r = o.ts.parsePesType(i, t.table), s = o.ts.parsePayloadUnitStartIndicator(i), 'video' === r && (s && !f && (a = o.ts.parsePesTime(i)) && (a.type = 'video', n.video.push(a), f = !0), !n.firstKeyFrame)) {
if (s && 0 !== p.size) {
for (l = new Uint8Array(p.size), u = 0; p.data.length; ) c = p.data.shift(),
l.set(c, u),
u += c.byteLength;
o.ts.videoPacketContainsKeyFrame(l) && (n.firstKeyFrame = o.ts.parsePesTime(l), n.firstKeyFrame.type = 'video'),
p.size = 0
}
p.data.push(i),
p.size += i.byteLength
}
}
if (f && n.firstKeyFrame) break;
h += 188,
d += 188
}
for (h = (d = e.byteLength) - 188, f = !1; h >= 0; ) if (71 !== e[h] || 71 !== e[d]) h--,
d--;
 else {
switch (i = e.subarray(h, d), o.ts.parseType(i, t.pid)) {
case 'pes':
r = o.ts.parsePesType(i, t.table),
s = o.ts.parsePayloadUnitStartIndicator(i),
'video' === r && s && (a = o.ts.parsePesTime(i)) && (a.type = 'video', n.video.push(a), f = !0)
}
if (f) break;
h -= 188,
d -= 188
}
},
l = function (e) {
var t = {
pid: null,
table: null
},
n = {
};
for (var r in function (e, t) {
for (var n, i = 0, r = 188; r < e.byteLength; ) if (71 !== e[i] || 71 !== e[r]) i++,
r++;
 else {
switch (n = e.subarray(i, r), o.ts.parseType(n, t.pid)) {
case 'pat':
t.pid || (t.pid = o.ts.parsePat(n));
break;
case 'pmt':
t.table || (t.table = o.ts.parsePmt(n))
}
if (t.pid && t.table) return;
i += 188,
r += 188
}
}(e, t),
t.table) {
if (t.table.hasOwnProperty(r)) switch (t.table[r]) {
case i.H264_STREAM_TYPE:
n.video = [
],
a(e, t, n),
0 === n.video.length && delete n.video;
break;
case i.ADTS_STREAM_TYPE:
n.audio = [
],
s(e, t, n),
0 === n.audio.length && delete n.audio
}
}
return n
}; e.exports = {
inspect: function (e, t) {
var n,
i;
return (i = (n = e) [0] === 'I'.charCodeAt(0) && n[1] === 'D'.charCodeAt(0) && n[2] === '3'.charCodeAt(0) ? function (e) {
for (var t, n = !1, i = 0, r = null, s = null, a = 0, l = 0; e.length - l >= 3; ) {
switch (o.aac.parseType(e, l)) {
case 'timed-metadata':
if (e.length - l < 10) {
n = !0;
break
}
if ((a = o.aac.parseId3TagSize(e, l)) > e.length) {
n = !0;
break
}
null === s && (t = e.subarray(l, l + a), s = o.aac.parseAacTimestamp(t)),
l += a;
break;
case 'audio':
if (e.length - l < 7) {
n = !0;
break
}
if ((a = o.aac.parseAdtsSize(e, l)) > e.length) {
n = !0;
break
}
null === r && (t = e.subarray(l, l + a), r = o.aac.parseSampleRate(t)),
i++,
l += a;
break;
default:
l++
}
if (n) return null
}
if (null === r || null === s) return null;
var u = 90000 / r;
return {
audio: [
{
type: 'audio',
dts: s,
pts: s
},
{
type: 'audio',
dts: s + 1024 * i * u,
pts: s + 1024 * i * u
}
]
}
}(e) : l(e)) && (i.audio || i.video) ? (function (e, t) {
if (e.audio && e.audio.length) {
var n = t;
void 0 === n && (n = e.audio[0].dts),
e.audio.forEach(function (e) {
e.dts = r(e.dts, n),
e.pts = r(e.pts, n),
e.dtsTime = e.dts / 90000,
e.ptsTime = e.pts / 90000
})
}
if (e.video && e.video.length) {
var i = t;
if (void 0 === i && (i = e.video[0].dts), e.video.forEach(function (e) {
e.dts = r(e.dts, i),
e.pts = r(e.pts, i),
e.dtsTime = e.dts / 90000,
e.ptsTime = e.pts / 90000
}), e.firstKeyFrame) {
var o = e.firstKeyFrame;
o.dts = r(o.dts, i),
o.pts = r(o.pts, i),
o.dtsTime = o.dts / 90000,
o.ptsTime = o.dts / 90000
}
}
}(i, t), i)  : null
}
}
},
function (e, t, n) {
'use strict';
var i,
r,
o,
s;
i = function (e, t) {
var n,
o,
s,
a,
l,
u = [
];
if (!t.length) return null;
for (n = 0; n < e.byteLength; ) o = e[n] << 24,
o |= e[n + 1] << 16,
o |= e[n + 2] << 8,
o |= e[n + 3],
s = r(e.subarray(n + 4, n + 8)),
a = o > 1 ? n + o : e.byteLength,
s === t[0] && (1 === t.length ? u.push(e.subarray(n + 8, a))  : (l = i(e.subarray(n + 8, a), t.slice(1))).length && (u = u.concat(l))),
n = a;
return u
},
r = function (e) {
var t = '';
return t += String.fromCharCode(e[0]),
t += String.fromCharCode(e[1]),
t += String.fromCharCode(e[2]),
t += String.fromCharCode(e[3])
},
o = function (e) {
return i(e, [
'moov',
'trak'
]).reduce(function (e, t) {
var n,
r,
o,
s;
return (n = i(t, [
'tkhd'
]) [0]) ? (o = n[r = 0 === n[0] ? 12 : 20] << 24 | n[r + 1] << 16 | n[r + 2] << 8 | n[r + 3], (s = i(t, [
'mdia',
'mdhd'
]) [0]) ? (r = 0 === s[0] ? 12 : 20, e[o] = s[r] << 24 | s[r + 1] << 16 | s[r + 2] << 8 | s[r + 3], e)  : null)  : null
}, {
})
},
s = function (e, t) {
var n,
r,
o;
return n = i(t, [
'moof',
'traf'
]),
r = [
].concat.apply([], n.map(function (t) {
return i(t, [
'tfhd'
]).map(function (n) {
var r,
o;
return r = n[4] << 24 | n[5] << 16 | n[6] << 8 | n[7],
o = e[r] || 90000,
(i(t, [
'tfdt'
]).map(function (e) {
var t,
n;
return t = e[0],
n = e[4] << 24 | e[5] << 16 | e[6] << 8 | e[7],
1 === t && (n *= Math.pow(2, 32), n += e[8] << 24 | e[9] << 16 | e[10] << 8 | e[11]),
n
}) [0] || 1 / 0) / o
})
})),
o = Math.min.apply(null, r),
isFinite(o) ? o : 0
},
e.exports = {
parseType: r,
timescale: o,
startTime: s
}
},
function (e, t, n) {
'use strict';
Object.defineProperty(t, '__esModule', {
value: !0
});
var i = function () {
function e(e, t) {
for (var n = 0; n < t.length; n++) {
var i = t[n];
i.enumerable = i.enumerable || !1,
i.configurable = !0,
'value' in i && (i.writable = !0),
Object.defineProperty(e, i.key, i)
}
}
return function (t, n, i) {
return n && e(t.prototype, n),
i && e(t, i),
t
}
}(),
r = function (e, t, n) {
for (var i = !0; i; ) {
var r = e,
o = t,
s = n;
i = !1,
null === r && (r = Function.prototype);
var a = Object.getOwnPropertyDescriptor(r, o);
if (void 0 !== a) {
if ('value' in a) return a.value;
var l = a.get;
if (void 0 === l) return;
return l.call(s)
}
var u = Object.getPrototypeOf(r);
if (null === u) return;
e = u,
t = o,
n = s,
i = !0,
a = u = void 0
}
};
function o(e) {
return e && e.__esModule ? e : {
default:
e
}
}
var s = o(n(128)),
a = n(127),
l = n(13),
u = o(n(0)),
c = [
{
name: 'VOD',
run: function (e, t, n, i, r) {
if (n !== 1 / 0) {
return {
time: 0,
segmentIndex: 0
}
}
return null
}
},
{
name: 'ProgramDateTime',
run: function (e, t, n, i, r) {
return e.datetimeToDisplayTime && t.dateTimeObject ? {
time: t.dateTimeObject.getTime() / 1000 + e.datetimeToDisplayTime,
segmentIndex: 0
}
 : null
}
},
{
name: 'Segment',
run: function (e, t, n, i, r) {
var o = t.segments || [
],
s = null,
a = null;
r = r || 0;
for (var l = 0; l < o.length; l++) {
var u = o[l];
if (u.timeline === i && void 0 !== u.start) {
var c = Math.abs(r - u.start);
if (null !== a && a < c) break;
(!s || null === a || a >= c) && (a = c, s = {
time: u.start,
segmentIndex: l
})
}
}
return s
}
},
{
name: 'Discontinuity',
run: function (e, t, n, i, r) {
var o = null;
if (r = r || 0, t.discontinuityStarts && t.discontinuityStarts.length) for (var s = null, a = 0; a < t.discontinuityStarts.length; a++) {
var l = t.discontinuityStarts[a],
u = t.discontinuitySequence + a + 1,
c = e.discontinuities[u];
if (c) {
var h = Math.abs(r - c.time);
if (null !== s && s < h) break;
(!o || null === s || s >= h) && (s = h, o = {
time: c.time,
segmentIndex: l
})
}
}
return o
}
},
{
name: 'Playlist',
run: function (e, t, n, i, r) {
return t.syncInfo ? {
time: t.syncInfo.time,
segmentIndex: t.syncInfo.mediaSequence - t.mediaSequence
}
 : null
}
}
];
t.syncPointStrategies = c;
var h = function (e) {
function t() {
var e = arguments.length <= 0 || void 0 === arguments[0] ? {
}
 : arguments[0];
!function (e, t) {
if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
}(this, t),
r(Object.getPrototypeOf(t.prototype), 'constructor', this).call(this),
this.inspectCache_ = void 0,
this.timelines = [
],
this.discontinuities = [
],
this.datetimeToDisplayTime = null,
e.debug && (this.logger_ = u.default.log.bind(u.default,
'sync-controller ->'))
}
return function (e, t) {
if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
e.prototype = Object.create(t && t.prototype, {
constructor: {
value: e,
enumerable: !1,
writable: !0,
configurable: !0
}
}),
t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t)  : e.__proto__ = t)
}(t, u['default'].EventTarget), i(t, [
{
key: 'getSyncPoint',
value: function (e, t, n, i) {
var r = this.runStrategies_(e, t, n, i);
return r.length ? this.selectSyncPoint_(r, {
key: 'time',
value: i
})  : null
}
},
{
key: 'getExpiredTime',
value: function (e, t) {
if (!e || !e.segments) return null;
var n = this.runStrategies_(e, t, e.discontinuitySequence, 0);
if (!n.length) return null;
var i = this.selectSyncPoint_(n, {
key: 'segmentIndex',
value: 0
});
return i.segmentIndex > 0 && (i.time *= - 1),
Math.abs(i.time + (0, l.sumDurations) (e, i.segmentIndex, 0))
}
},
{
key: 'runStrategies_',
value: function (e, t, n, i) {
for (var r = [
], o = 0; o < c.length; o++) {
var s = c[o],
a = s.run(this, e, t, n, i);
a && (a.strategy = s.name, r.push({
strategy: s.name,
syncPoint: a
}), this.logger_('syncPoint found via <' + s.name + '>:', a))
}
return r
}
},
{
key: 'selectSyncPoint_',
value: function (e, t) {
for (var n = e[0].syncPoint, i = Math.abs(e[0].syncPoint[t.key] - t.value), r = e[0].strategy, o = 1; o < e.length; o++) {
var s = Math.abs(e[o].syncPoint[t.key] - t.value);
s < i && (i = s, n = e[o].syncPoint, r = e[o].strategy)
}
return this.logger_('syncPoint with strategy <' + r + '> chosen: ', n),
n
}
},
{
key: 'saveExpiredSegmentInfo',
value: function (e, t) {
for (var n = t.mediaSequence - e.mediaSequence - 1; n >= 0; n--) {
var i = e.segments[n];
if (i && void 0 !== i.start) {
t.syncInfo = {
mediaSequence: e.mediaSequence + n,
time: i.start
},
this.logger_('playlist sync:', t.syncInfo),
this.trigger('syncinfoupdate');
break
}
}
}
},
{
key: 'setDateTimeMapping',
value: function (e) {
if (!this.datetimeToDisplayTime && e.dateTimeObject) {
var t = e.dateTimeObject.getTime() / 1000;
this.datetimeToDisplayTime = - t
}
}
},
{
key: 'reset',
value: function () {
this.inspectCache_ = void 0
}
},
{
key: 'probeSegmentInfo',
value: function (e) {
var t = e.segment,
n = e.playlist,
i = void 0;
return (i = t.map ? this.probeMp4Segment_(e)  : this.probeTsSegment_(e)) && this.calculateSegmentTimeMapping_(e, i) && (this.saveDiscontinuitySyncInfo_(e), n.syncInfo || (n.syncInfo = {
mediaSequence: n.mediaSequence + e.mediaIndex,
time: t.start
})),
i
}
},
{
key: 'probeMp4Segment_',
value: function (e) {
var t = e.segment,
n = s.default.timescale(t.map.bytes),
i = s.default.startTime(n, e.bytes);
return null !== e.timestampOffset && (e.timestampOffset -= i),
{
start: i,
end: i + t.duration
}
}
},
{
key: 'probeTsSegment_',
value: function (e) {
var t = (0, a.inspect) (e.bytes, this.inspectCache_),
n = void 0,
i = void 0;
return t ? (t.video && 2 === t.video.length ? (this.inspectCache_ = t.video[1].dts, n = t.video[0].dtsTime, i = t.video[1].dtsTime)  : t.audio && 2 === t.audio.length && (this.inspectCache_ = t.audio[1].dts, n = t.audio[0].dtsTime, i = t.audio[1].dtsTime), {
start: n,
end: i,
containsVideo: t.video && 2 === t.video.length,
containsAudio: t.audio && 2 === t.audio.length
})  : null
}
},
{
key: 'timestampOffsetForTimeline',
value: function (e) {
return void 0 === this.timelines[e] ? null : this.timelines[e].time
}
},
{
key: 'mappingForTimeline',
value: function (e) {
return void 0 === this.timelines[e] ? null : this.timelines[e].mapping
}
},
{
key: 'calculateSegmentTimeMapping_',
value: function (e, t) {
var n = e.segment,
i = this.timelines[e.timeline];
if (null !== e.timestampOffset) this.logger_('tsO:', e.timestampOffset),
i = {
time: e.startOfSegment,
mapping: e.startOfSegment - t.start
},
this.timelines[e.timeline] = i,
this.trigger('timestampoffset'),
n.start = e.startOfSegment,
n.end = t.end + i.mapping;
 else {
if (!i) return !1;
n.start = t.start + i.mapping,
n.end = t.end + i.mapping
}
return !0
}
},
{
key: 'saveDiscontinuitySyncInfo_',
value: function (e) {
var t = e.playlist,
n = e.segment;
if (n.discontinuity) this.discontinuities[n.timeline] = {
time: n.start,
accuracy: 0
};
 else if (t.discontinuityStarts.length) for (var i = 0; i < t.discontinuityStarts.length; i++) {
var r = t.discontinuityStarts[i],
o = t.discontinuitySequence + i + 1,
s = r - e.mediaIndex,
a = Math.abs(s);
if (!this.discontinuities[o] || this.discontinuities[o].accuracy > a) {
var u = void 0;
u = s < 0 ? n.start - (0, l.sumDurations) (t, e.mediaIndex, r)  : n.end + (0, l.sumDurations) (t, e.mediaIndex + 1, r),
this.discontinuities[o] = {
time: u,
accuracy: a
}
}
}
}
},
{
key: 'logger_',
value: function () {
}
}
]),
t
}(); t.default = h
}, function (e, t, n) {
'use strict';
Object.defineProperty(t, '__esModule', {
value: !0
});
var i = function () {
return function (e, t) {
if (Array.isArray(e)) return e;
if (Symbol.iterator in Object(e)) return function (e, t) {
var n = [
],
i = !0,
r = !1,
o = void 0;
try {
for (var s, a = e[Symbol.iterator](); !(i = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); i = !0);
} catch (e) {
r = !0,
o = e
} finally {
try {
!i && a.return && a.return ()
} finally {
if (r) throw o
}
}
return n
}(e, t);
throw new TypeError('Invalid attempt to destructure non-iterable instance')
}
}();
var r,
o = n(3),
s = (r = o) && r.__esModule ? r : {
default:
r
},
a = function (e, t) {
for (var n = e.cues, i = 0; i < n.length; i++) {
var r = n[i];
if (t >= r.adStartTime && t <= r.adEndTime) return r
}
return null
};
t.default = {
updateAdCues: function (e, t) {
var n = arguments.length <= 2 || void 0 === arguments[2] ? 0 : arguments[2];
if (e.segments) for (var r = n, o = void 0, l = 0; l < e.segments.length; l++) {
var u = e.segments[l];
if (o || (o = a(t, r + u.duration / 2)), o) {
if ('cueIn' in u) {
o.endTime = r,
o.adEndTime = r,
r += u.duration,
o = null;
continue
}
if (r < o.endTime) {
r += u.duration;
continue
}
o.endTime += u.duration
} else if ('cueOut' in u && ((o = new s.default.VTTCue(r, r + u.duration, u.cueOut)).adStartTime = r, o.adEndTime = r + parseFloat(u.cueOut), t.addCue(o)), 'cueOutCont' in u) {
var c,
h,
d = u.cueOutCont.split('/').map(parseFloat),
f = i(d, 2);
c = f[0],
h = f[1],
(o = new s.default.VTTCue(r, r + u.duration, '')).adStartTime = r - c, o.adEndTime = o.adStartTime + h, t.addCue(o)
}
r += u.duration
}
},
findAdCue: a
},
e.exports = t.default
},
function (e, t, n) {
'use strict';
Object.defineProperty(t, '__esModule', {
value: !0
});
var i = function () {
function e(e, t) {
for (var n = 0; n < t.length; n++) {
var i = t[n];
i.enumerable = i.enumerable || !1,
i.configurable = !0,
'value' in i && (i.writable = !0),
Object.defineProperty(e, i.key, i)
}
}
return function (t, n, i) {
return n && e(t.prototype, n),
i && e(t, i),
t
}
}(),
r = function (e, t, n) {
for (var i = !0; i; ) {
var r = e,
o = t,
s = n;
i = !1,
null === r && (r = Function.prototype);
var a = Object.getOwnPropertyDescriptor(r, o);
if (void 0 !== a) {
if ('value' in a) return a.value;
var l = a.get;
if (void 0 === l) return;
return l.call(s)
}
var u = Object.getPrototypeOf(r);
if (null === u) return;
e = u,
t = o,
n = s,
i = !0,
a = u = void 0
}
};
function o(e) {
return e && e.__esModule ? e : {
default:
e
}
}
var s = o(n(54)),
a = o(n(0)),
l = o(n(3)),
u = o(n(25)),
c = n(19),
h = new Uint8Array('\n\n'.split('').map(function (e) {
return e.charCodeAt(0)
})),
d = function (e) {
return String.fromCharCode.apply(null, e)
},
f = function (e) {
function t(e) {
var n = arguments.length <= 1 || void 0 === arguments[1] ? {
}
 : arguments[1];
!function (e, t) {
if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
}(this, t),
r(Object.getPrototypeOf(t.prototype), 'constructor', this).call(this, e, n),
this.mediaSource_ = null,
this.subtitlesTrack_ = null
}
return function (e, t) {
if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
e.prototype = Object.create(t && t.prototype, {
constructor: {
value: e,
enumerable: !1,
writable: !0,
configurable: !0
}
}),
t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t)  : e.__proto__ = t)
}(t, s['default']),
i(t, [
{
key: 'buffered_',
value: function () {
if (!this.subtitlesTrack_ || !this.subtitlesTrack_.cues.length) return a.default.createTimeRanges();
var e = this.subtitlesTrack_.cues,
t = e[0].startTime,
n = e[e.length - 1].startTime;
return a.default.createTimeRanges([[t,
n]])
}
},
{
key: 'initSegment',
value: function (e) {
var t = !(arguments.length <= 1 || void 0 === arguments[1]) && arguments[1];
if (!e) return null;
var n = (0, c.initSegmentId) (e),
i = this.initSegments_[n];
if (t && !i && e.bytes) {
var r = h.byteLength + e.bytes.byteLength,
o = new Uint8Array(r);
o.set(e.bytes),
o.set(h, e.bytes.byteLength),
this.initSegments_[n] = i = {
resolvedUri: e.resolvedUri,
byterange: e.byterange,
bytes: o
}
}
return i || e
}
},
{
key: 'couldBeginLoading_',
value: function () {
return this.playlist_ && this.subtitlesTrack_ && !this.paused()
}
},
{
key: 'init_',
value: function () {
return this.state = 'READY',
this.resetEverything(),
this.monitorBuffer_()
}
},
{
key: 'track',
value: function (e) {
return void 0 === e ? this.subtitlesTrack_ : (this.subtitlesTrack_ = e, 'INIT' === this.state && this.couldBeginLoading_() && this.init_(), this.subtitlesTrack_)
}
},
{
key: 'remove',
value: function (e, t) {
(0, u.default) (e, t, this.subtitlesTrack_)
}
},
{
key: 'fillBuffer_',
value: function () {
var e = this;
this.syncPoint_ || (this.syncPoint_ = this.syncController_.getSyncPoint(this.playlist_, this.duration_(), this.currentTimeline_, this.currentTime_()));
var t = this.checkBuffer_(this.buffered_(), this.playlist_, this.mediaIndex, this.hasPlayed_(), this.currentTime_(), this.syncPoint_);
if (t = this.skipEmptySegments_(t)) {
if (null === this.syncController_.timestampOffsetForTimeline(t.timeline)) {
return this.syncController_.one('timestampoffset', function () {
e.state = 'READY',
e.paused() || e.monitorBuffer_()
}),
void (this.state = 'WAITING_ON_TIMELINE')
}
this.loadSegment_(t)
}
}
},
{
key: 'skipEmptySegments_',
value: function (e) {
for (; e && e.segment.empty; ) e = this.generateSegmentInfo_(e.playlist, e.mediaIndex + 1, e.startOfSegment + e.duration, e.isSyncRequest);
return e
}
},
{
key: 'handleSegment_',
value: function () {
var e = this;
if (this.pendingSegment_ && this.subtitlesTrack_) {
this.state = 'APPENDING';
var t,
n = this.pendingSegment_,
i = n.segment;
if ('function' != typeof l.default.WebVTT && this.subtitlesTrack_ && this.subtitlesTrack_.tech_) {
var r = (t = function () {
e.handleSegment_()
}, e.state = 'WAITING_ON_VTTJS', e.subtitlesTrack_.tech_.one('vttjsloaded', t), e.subtitlesTrack_.tech_.one('vttjserror', function () {
e.subtitlesTrack_.tech_.off('vttjsloaded', t),
e.error({
message: 'Error loading vtt.js'
}),
e.state = 'READY',
e.pause(),
e.trigger('error')
}), {
v: void 0
});
if ('object' == typeof r) return r.v
}
i.requested = !0; try {
this.parseVTTCues_(n)
} catch (e) {
return this.error({
message: e.message
}),
this.state = 'READY',
this.pause(),
this.trigger('error')
}
if (this.updateTimeMapping_(n, this.syncController_.timelines[n.timeline], this.playlist_), n.isSyncRequest) return this.trigger('syncinfoupdate'), this.pendingSegment_ = null, void (this.state = 'READY'); n.byteLength = n.bytes.byteLength, this.mediaSecondsLoaded += i.duration, n.cues.length && this.remove(n.cues[0].endTime, n.cues[n.cues.length - 1].endTime), n.cues.forEach(function (t) {
e.subtitlesTrack_.addCue(t)
}), this.handleUpdateEnd_()
} else this.state = 'READY'
}
},
{
key: 'parseVTTCues_',
value: function (e) {
var t = void 0,
n = !1;
'function' == typeof l.default.TextDecoder ? t = new l.default.TextDecoder('utf8') :
(t = l.default.WebVTT.StringDecoder(),
n = !0); var i = new l.default.WebVTT.Parser(l.default,
l.default.vttjs,
t);
if (e.cues = [
], e.timestampmap = {
MPEGTS: 0,
LOCAL: 0
}, i.oncue = e.cues.push.bind(e.cues), i.ontimestampmap = function (t) {
return e.timestampmap = t
}, i.onparsingerror = function (e) {
a.default.log.warn('Error encountered when parsing cues: ' + e.message)
},
e.segment.map) {
var r = e.segment.map.bytes;
n && (r = d(r)),
i.parse(r)
}
var o = e.bytes; n && (o = d(o)), i.parse(o), i.flush()
}
}, {
key: 'updateTimeMapping_',
value: function (e, t, n) {
var i = e.segment;
if (t) if (e.cues.length) {
var r = e.timestampmap,
o = r.MPEGTS / 90000 - r.LOCAL + t.mapping;
if (e.cues.forEach(function (e) {
e.startTime += o,
e.endTime += o
}), !n.syncInfo) {
var s = e.cues[0].startTime,
a = e.cues[e.cues.length - 1].startTime;
n.syncInfo = {
mediaSequence: n.mediaSequence + e.mediaIndex,
time: Math.min(s, a - i.duration)
}
}
} else i.empty = !0
}
}
]), t
}();
t.default = f,
e.exports = t.default
},
function (e, t, n) {
'use strict';
function i(e) {
return e && e.__esModule ? e : {
default:
e
}
}
Object.defineProperty(t, '__esModule', {
value: !0
});
var r = i(n(0)),
o = n(19),
s = i(n(67)),
a = {
FAILURE: 2,
TIMEOUT: - 101,
ABORTED: - 102
};
t.REQUEST_ERRORS = a;
var l = function (e) {
var t,
n,
i = {
};
return e.byterange && (i.Range = (t = e.byterange, n = t.offset + t.length - 1, 'bytes=' + t.offset + '-' + n)),
i
},
u = function (e) {
e.forEach(function (e) {
e.abort()
})
},
c = function (e, t) {
return t.timedout ? {
status: t.status,
message: 'HLS request timed-out at URL: ' + t.uri,
code: a.TIMEOUT,
xhr: t
}
 : t.aborted ? {
status: t.status,
message: 'HLS request aborted at URL: ' + t.uri,
code: a.ABORTED,
xhr: t
}
 : e ? {
status: t.status,
message: 'HLS request errored at URL: ' + t.uri,
code: a.FAILURE,
xhr: t
}
 : null
},
h = function (e, t, n) {
var i = [
],
r = 0;
return function (s, a) {
if (s && (u(e), i.push(s)), (r += 1) === e.length) {
if (a.endOfAllRequests = Date.now(), i.length > 0) {
var l = function (e) {
return e.reduce(function (e, t) {
return t.code > e.code ? t : e
})
}(i);
return n(l, a)
}
return a.encryptedBytes ? function (e, t, n) {
e.addEventListener('message', function i(r) {
if (r.data.source === t.requestId) {
e.removeEventListener('message', i);
var o = r.data.decrypted;
return t.bytes = new Uint8Array(o.bytes, o.byteOffset, o.byteLength),
n(null, t)
}
}),
e.postMessage((0, o.createTransferableMessage) ({
source: t.requestId,
encrypted: t.encryptedBytes,
key: t.key.bytes,
iv: t.key.iv
}), [
t.encryptedBytes.buffer,
new Uint8Array(t.key.bytes).buffer
])
}(t, a, n)  : n(null, a)
}
}
},
d = function (e, t) {
return function (n) {
var i,
o,
s;
return e.stats = r.default.mergeOptions(e.stats, (o = (i = n).target, (s = {
bandwidth: 1 / 0,
bytesReceived: 0,
roundTripTime: Date.now() - o.requestTime || 0
}).bytesReceived = i.loaded, s.bandwidth = Math.floor(s.bytesReceived / s.roundTripTime * 8 * 1000), s)),
!e.stats.firstBytesReceivedAt && e.stats.bytesReceived && (e.stats.firstBytesReceivedAt = Date.now()),
t(n, e)
}
};
t.mediaSegmentRequest = function (e, t, n, i, o, f) {
var p = [
],
v = h(p, n, f);
if (i.key && s.default.decryptedHlsKey) try {
i.key.bytes = s.default.decryptedHlsKey
} catch (e) {
} else if (i.key) {
var g = e(r.default.mergeOptions(t, {
uri: i.key.resolvedUri,
responseType: 'arraybuffer'
}),
function (e, t) {
return function (n, i) {
var r = i.response,
o = c(n, i);
if (o) return t(o, e);
if (16 !== r.byteLength) return t({
status: i.status,
message: 'Invalid HLS key at URL: ' + i.uri,
code: a.FAILURE,
xhr: i
}, e);
var s = new DataView(r);
return e.key.bytes = new Uint32Array([s.getUint32(0),
s.getUint32(4),
s.getUint32(8),
s.getUint32(12)]),
t(null, e)
}
}(i, v)); p.push(g)
}
if (i.map && !i.map.bytes) {
var m = e(r.default.mergeOptions(t, {
uri: i.map.resolvedUri,
responseType: 'arraybuffer',
headers: l(i.map)
}),
function (e, t) {
return function (n, i) {
var r = i.response,
o = c(n, i);
return o ? t(o, e)  : 0 === r.byteLength ? t({
status: i.status,
message: 'Empty HLS segment content at URL: ' + i.uri,
code: a.FAILURE,
xhr: i
}, e)  : (e.map.bytes = new Uint8Array(i.response), t(null, e))
}
}(i, v)); p.push(m)
}
var A = e(r.default.mergeOptions(t, {
uri: i.resolvedUri,
responseType: 'arraybuffer',
headers: l(i)
}),
function (e, t) {
return function (n, i) {
var r = i.response,
o = c(n, i);
return o ? t(o, e)  : 0 === r.byteLength ? t({
status: i.status,
message: 'Empty HLS segment content at URL: ' + i.uri,
code: a.FAILURE,
xhr: i
}, e)  : (e.stats = function (e) {
return {
bandwidth: e.bandwidth,
bytesReceived: e.bytesReceived || 0,
roundTripTime: e.roundTripTime || 0
}
}(i), e.key ? e.encryptedBytes = new Uint8Array(i.response)  : e.bytes = new Uint8Array(i.response), t(null, e))
}
}(i, v)); return A.addEventListener('progress', d(i, o)), p.push(A), function () {
return u(p)
}
}
},
function (e, t, n) {
'use strict';
Object.defineProperty(t, '__esModule', {
value: !0
});
var i = function () {
function e(e, t) {
for (var n = 0; n < t.length; n++) {
var i = t[n];
i.enumerable = i.enumerable || !1,
i.configurable = !0,
'value' in i && (i.writable = !0),
Object.defineProperty(e, i.key, i)
}
}
return function (t, n, i) {
return n && e(t.prototype, n),
i && e(t, i),
t
}
}();
var r,
o = n(0),
s = (r = o) && r.__esModule ? r : {
default:
r
},
a = function () {
},
l = function () {
function e(t, n) {
var i = this;
!function (e, t) {
if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
}(this, e);
var r = function () {
i.sourceBuffer_ = t.addSourceBuffer(n),
i.onUpdateendCallback_ = function () {
var e = i.pendingCallback_;
i.pendingCallback_ = null,
e && e(),
i.runCallback_()
},
i.sourceBuffer_.addEventListener('updateend', i.onUpdateendCallback_),
i.runCallback_()
};
this.callbacks_ = [
],
this.pendingCallback_ = null,
this.timestampOffset_ = 0,
this.mediaSource = t,
this.processedAppend_ = !1,
'closed' === t.readyState ? t.addEventListener('sourceopen', r)  : r()
}
return i(e, [
{
key: 'abort',
value: function (e) {
var t = this;
this.processedAppend_ && this.queueCallback_(function () {
t.sourceBuffer_.abort()
}, e)
}
},
{
key: 'appendBuffer',
value: function (e, t) {
var n = this;
this.processedAppend_ = !0,
this.queueCallback_(function () {
n.sourceBuffer_.appendBuffer(e)
}, t)
}
},
{
key: 'buffered',
value: function () {
return this.sourceBuffer_ ? this.sourceBuffer_.buffered : s.default.createTimeRanges()
}
},
{
key: 'remove',
value: function (e, t) {
var n = this;
this.processedAppend_ && this.queueCallback_(function () {
n.sourceBuffer_.remove(e, t)
}, a)
}
},
{
key: 'updating',
value: function () {
return !this.sourceBuffer_ || this.sourceBuffer_.updating || this.pendingCallback_
}
},
{
key: 'timestampOffset',
value: function (e) {
var t = this;
return void 0 !== e && (this.queueCallback_(function () {
t.sourceBuffer_.timestampOffset = e
}), this.timestampOffset_ = e),
this.timestampOffset_
}
},
{
key: 'queueCallback_',
value: function (e, t) {
this.callbacks_.push([e.bind(this),
t]),
this.runCallback_()
}
},
{
key: 'runCallback_',
value: function () {
var e = void 0;
!this.updating() && this.callbacks_.length && (e = this.callbacks_.shift(), this.pendingCallback_ = e[1], e[0]())
}
},
{
key: 'dispose',
value: function () {
this.sourceBuffer_.removeEventListener('updateend', this.onUpdateendCallback_),
this.sourceBuffer_ && 'open' === this.mediaSource.readyState && this.sourceBuffer_.abort()
}
}
]), e
}();
t.default = l,
e.exports = t.default
},
function (e, t, n) {
'use strict';
Object.defineProperty(t, '__esModule', {
value: !0
});
var i = function () {
function e(e, t) {
for (var n = 0; n < t.length; n++) {
var i = t[n];
i.enumerable = i.enumerable || !1,
i.configurable = !0,
'value' in i && (i.writable = !0),
Object.defineProperty(e, i.key, i)
}
}
return function (t, n, i) {
return n && e(t.prototype, n),
i && e(t, i),
t
}
}(),
r = function (e, t, n) {
for (var i = !0; i; ) {
var r = e,
o = t,
s = n;
i = !1,
null === r && (r = Function.prototype);
var a = Object.getOwnPropertyDescriptor(r, o);
if (void 0 !== a) {
if ('value' in a) return a.value;
var l = a.get;
if (void 0 === l) return;
return l.call(s)
}
var u = Object.getPrototypeOf(r);
if (null === u) return;
e = u,
t = o,
n = s,
i = !0,
a = u = void 0
}
};
function o(e) {
return e && e.__esModule ? e : {
default:
e
}
}
var s = o(n(48)),
a = n(13),
l = o(n(54)),
u = o(n(131)),
c = o(n(32)),
h = o(n(0)),
d = o(n(130)),
f = o(n(129)),
p = n(24),
v = o(n(34)),
g = o(n(51)),
m = o(n(23)),
A = n(52),
y = n(124),
b = void 0,
_ = {
videoCodec: 'avc1',
videoObjectTypeIndicator: '.4d400d',
audioProfile: '2'
},
w = [
'mediaRequests',
'mediaRequestsAborted',
'mediaRequestsTimedout',
'mediaRequestsErrored',
'mediaTransferDuration',
'mediaBytesTransferred'
],
T = function (e) {
return this.audioSegmentLoader_[e] + this.mainSegmentLoader_[e]
},
k = function () {
var e = void 0;
try {
e = 51
} catch (e) {
}
return e
},
E = function (e) {
return e.replace(/avc1\.(\d+)\.(\d+)/i, function (e) {
return (0, p.translateLegacyCodecs) ([e]) [0]
})
};
t.mapLegacyAvcCodecs_ = E;
var S = function (e, t, n) {
return e + '/' + t + '; codecs="' + n.filter(function (e) {
return !!e
}).join(', ') + '"'
},
j = function (e, t) {
var n = function (e) {
return e.segments && e.segments.length && e.segments[0].map ? 'mp4' : 'mp2t'
}(t),
i = function (e) {
var t = e.attributes || {
};
return t.CODECS ? (0, A.parseCodecs) (t.CODECS)  : _
}(t),
r = t.attributes || {
},
o = !0,
s = !1;
if (!t) return [];
if (e.mediaGroups.AUDIO && r.AUDIO) {
var a = e.mediaGroups.AUDIO[r.AUDIO];
if (a) for (var l in s = !0, o = !1, a) if (!a[l].uri) {
o = !0;
break
}
}
s && !i.audioProfile && (h.default.log.warn('Multiple audio tracks present but no audio codec string is specified. Attempting to use the default audio codec (mp4a.40.2)'),
i.audioProfile = _.audioProfile); var u = {
}; i.videoCodec && (u.video = '' + i.videoCodec + i.videoObjectTypeIndicator), i.audioProfile && (u.audio = 'mp4a.40.' + i.audioProfile); var c = S('audio', n, [
u.audio
]), d = S('video', n, [
u.video
]), f = S('video', n, [
u.video,
u.audio
]); return s ? !o && u.video ? [
d,
c
] : [
f,
c
] : u.video ? [
f
] : [
c
]
};
t.mimeTypesForPlaylist_ = j;
var C = function (e) {
function t(e) {
var n = this;
!function (e, t) {
if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
}(this, t),
r(Object.getPrototypeOf(t.prototype), 'constructor', this).call(this);
var i = e.url,
o = e.withCredentials,
a = e.mode,
c = e.tech,
d = e.bandwidth,
p = e.externHls,
m = e.useCueTags,
A = e.blacklistDuration,
_ = e.enableLowInitialPlaylist;
if (!i) throw new Error('A non-empty playlist URL is required');
b = p,
this.withCredentials = o,
this.tech_ = c,
this.hls_ = c.hls,
this.mode_ = a,
this.useCueTags_ = m,
this.blacklistDuration = A,
this.enableLowInitialPlaylist = _,
this.useCueTags_ && (this.cueTagsTrack_ = this.tech_.addTextTrack('metadata', 'ad-cues'), this.cueTagsTrack_.inBandMetadataTrackDispatchType = ''),
this.requestOptions_ = {
withCredentials: this.withCredentials,
timeout: null
},
this.mediaTypes_ = (0, y.createMediaTypes) (),
this.mediaSource = new h.default.MediaSource({
mode: a
}),
this.mediaSource.addEventListener('sourceopen', this.handleSourceOpen_.bind(this)),
this.seekable_ = h.default.createTimeRanges(),
this.hasPlayed_ = function () {
return !1
},
this.syncController_ = new f.default(e),
this.segmentMetadataTrack_ = c.addRemoteTextTrack({
kind: 'metadata',
label: 'segment-metadata'
}, !1).track,
this.decrypter_ = (0, v.default) (g.default,
k()); var E = {
hls: this.hls_,
mediaSource: this.mediaSource,
currentTime: this.tech_.currentTime.bind(this.tech_),
seekable: function () {
return n.seekable()
},
seeking: function () {
return n.tech_.seeking()
},
duration: function () {
return n.mediaSource.duration
},
hasPlayed: function () {
return n.hasPlayed_()
},
goalBufferLength: function () {
return n.goalBufferLength()
},
bandwidth: d,
syncController: this.syncController_,
decrypter: this.decrypter_
}; this.masterPlaylistLoader_ = new s.default(i, this.hls_, this.withCredentials),
this.setupMasterPlaylistLoaderListeners_(),
this.mainSegmentLoader_ = new l.default(h.default.mergeOptions(E, {
segmentMetadataTrack: this.segmentMetadataTrack_,
loaderType: 'main'
}),
e), this.audioSegmentLoader_ = new l.default(h.default.mergeOptions(E, {
loaderType: 'audio'
}),
e), this.subtitleSegmentLoader_ = new u.default(h.default.mergeOptions(E, {
loaderType: 'vtt'
}),
e), this.setupSegmentLoaderListeners_(), w.forEach(function (e) {
n[e + '_'] = T.bind(n, e)
}), this.masterPlaylistLoader_.load()
}
return function (e, t) {
if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
e.prototype = Object.create(t && t.prototype, {
constructor: {
value: e,
enumerable: !1,
writable: !0,
configurable: !0
}
}),
t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t)  : e.__proto__ = t)
}(t, h['default'].EventTarget),
i(t, [
{
key: 'setupMasterPlaylistLoaderListeners_',
value: function () {
var e = this;
this.masterPlaylistLoader_.on('loadedmetadata', function () {
var t = e.masterPlaylistLoader_.media(),
n = 1.5 * e.masterPlaylistLoader_.targetDuration * 1000;
(0, a.isLowestEnabledRendition) (e.masterPlaylistLoader_.master, e.masterPlaylistLoader_.media()) ? e.requestOptions_.timeout = 0 : e.requestOptions_.timeout = n,
t.endList && 'none' !== e.tech_.preload() && (e.mainSegmentLoader_.playlist(t, e.requestOptions_), e.mainSegmentLoader_.load()),
(0, y.setupMediaGroups) ({
segmentLoaders: {
AUDIO: e.audioSegmentLoader_,
SUBTITLES: e.subtitleSegmentLoader_,
main: e.mainSegmentLoader_
},
tech: e.tech_,
requestOptions: e.requestOptions_,
masterPlaylistLoader: e.masterPlaylistLoader_,
mode: e.mode_,
hls: e.hls_,
master: e.master(),
mediaTypes: e.mediaTypes_,
blacklistCurrentPlaylist: e.blacklistCurrentPlaylist.bind(e)
}),
e.triggerPresenceUsage_(e.master(), t);
try {
e.setupSourceBuffers_()
} catch (t) {
return h.default.log.warn('Failed to create SourceBuffers', t),
e.mediaSource.endOfStream('decode')
}
e.setupFirstPlay(),
e.trigger('selectedinitialmedia')
}), this.masterPlaylistLoader_.on('loadedplaylist', function () {
var t,
n = e.masterPlaylistLoader_.media();
if (!n) {
var i = void 0;
return e.enableLowInitialPlaylist && (i = e.selectInitialPlaylist()),
i || (i = e.selectPlaylist()),
e.initialMedia_ = i,
void e.masterPlaylistLoader_.media(e.initialMedia_)
}
e.useCueTags_ && e.updateAdCues_(n),
e.mainSegmentLoader_.playlist(n, e.requestOptions_),
e.updateDuration(),
e.tech_.paused() || e.mainSegmentLoader_.load(),
n.endList || (t = function () {
var t = e.seekable();
0 !== t.length && e.mediaSource.addSeekableRange_(t.start(0), t.end(0))
}, e.duration() !== 1 / 0 ? e.tech_.one('durationchange', function n() {
e.duration() === 1 / 0 ? t()  : e.tech_.one('durationchange', n)
})  : t())
}), this.masterPlaylistLoader_.on('error', function () {
e.blacklistCurrentPlaylist(e.masterPlaylistLoader_.error)
}), this.masterPlaylistLoader_.on('mediachanging', function () {
e.mainSegmentLoader_.abort(),
e.mainSegmentLoader_.pause()
}), this.masterPlaylistLoader_.on('mediachange', function () {
var t = e.masterPlaylistLoader_.media(),
n = 1.5 * e.masterPlaylistLoader_.targetDuration * 1000;
(0, a.isLowestEnabledRendition) (e.masterPlaylistLoader_.master, e.masterPlaylistLoader_.media()) ? e.requestOptions_.timeout = 0 : e.requestOptions_.timeout = n,
e.mainSegmentLoader_.playlist(t, e.requestOptions_),
e.mainSegmentLoader_.load(),
e.tech_.trigger({
type: 'mediachange',
bubbles: !0
})
}), this.masterPlaylistLoader_.on('playlistunchanged', function () {
var t = e.masterPlaylistLoader_.media();
e.stuckAtPlaylistEnd_(t) && (e.blacklistCurrentPlaylist({
message: 'Playlist no longer updating.'
}), e.tech_.trigger('playliststuck'))
}), this.masterPlaylistLoader_.on('renditiondisabled', function () {
e.tech_.trigger({
type: 'usage',
name: 'hls-rendition-disabled'
})
}), this.masterPlaylistLoader_.on('renditionenabled', function () {
e.tech_.trigger({
type: 'usage',
name: 'hls-rendition-enabled'
})
})
}
},
{
key: 'triggerPresenceUsage_',
value: function (e, t) {
var n = e.mediaGroups || {
},
i = !0,
r = Object.keys(n.AUDIO);
for (var o in n.AUDIO) for (var s in n.AUDIO[o]) {
n.AUDIO[o][s].uri || (i = !1)
}
i && this.tech_.trigger({
type: 'usage',
name: 'hls-demuxed'
}),
Object.keys(n.SUBTITLES).length && this.tech_.trigger({
type: 'usage',
name: 'hls-webvtt'
}),
b.Playlist.isAes(t) && this.tech_.trigger({
type: 'usage',
name: 'hls-aes'
}),
b.Playlist.isFmp4(t) && this.tech_.trigger({
type: 'usage',
name: 'hls-fmp4'
}),
r.length && Object.keys(n.AUDIO[r[0]]).length > 1 && this.tech_.trigger({
type: 'usage',
name: 'hls-alternate-audio'
}),
this.useCueTags_ && this.tech_.trigger({
type: 'usage',
name: 'hls-playlist-cue-tags'
})
}
},
{
key: 'setupSegmentLoaderListeners_',
value: function () {
var e = this;
this.mainSegmentLoader_.on('bandwidthupdate', function () {
var t = e.selectPlaylist(),
n = e.masterPlaylistLoader_.media(),
i = e.tech_.buffered(),
r = i.length ? i.end(i.length - 1) - e.tech_.currentTime()  : 0,
o = e.bufferLowWaterLine();
(!n.endList || e.duration() < m.default.MAX_BUFFER_LOW_WATER_LINE || t.attributes.BANDWIDTH < n.attributes.BANDWIDTH || r >= o) && e.masterPlaylistLoader_.media(t), e.tech_.trigger('bandwidthupdate')
}), this.mainSegmentLoader_.on('progress', function () {
e.trigger('progress')
}), this.mainSegmentLoader_.on('error', function () {
e.blacklistCurrentPlaylist(e.mainSegmentLoader_.error())
}), this.mainSegmentLoader_.on('syncinfoupdate', function () {
e.onSyncInfoUpdate_()
}), this.mainSegmentLoader_.on('timestampoffset', function () {
e.tech_.trigger({
type: 'usage',
name: 'hls-timestamp-offset'
})
}), this.audioSegmentLoader_.on('syncinfoupdate', function () {
e.onSyncInfoUpdate_()
}), this.mainSegmentLoader_.on('ended', function () {
e.onEndOfStream()
}), this.mainSegmentLoader_.on('earlyabort', function () {
e.blacklistCurrentPlaylist({
message: 'Aborted early because there isn\'t enough bandwidth to complete the request without rebuffering.'
}, 120)
}), this.mainSegmentLoader_.on('reseteverything', function () {
e.tech_.trigger('hls-reset')
}), this.mainSegmentLoader_.on('segmenttimemapping', function (t) {
e.tech_.trigger({
type: 'hls-segment-time-mapping',
mapping: t.mapping
})
}), this.audioSegmentLoader_.on('ended', function () {
e.onEndOfStream()
})
}
},
{
key: 'mediaSecondsLoaded_',
value: function () {
return Math.max(this.audioSegmentLoader_.mediaSecondsLoaded + this.mainSegmentLoader_.mediaSecondsLoaded)
}
},
{
key: 'load',
value: function () {
this.mainSegmentLoader_.load(),
this.mediaTypes_.AUDIO.activePlaylistLoader && this.audioSegmentLoader_.load(),
this.mediaTypes_.SUBTITLES.activePlaylistLoader && this.subtitleSegmentLoader_.load()
}
},
{
key: 'fastQualityChange_',
value: function () {
var e = this.selectPlaylist();
e !== this.masterPlaylistLoader_.media() && (this.masterPlaylistLoader_.media(e), this.mainSegmentLoader_.resetLoader())
}
},
{
key: 'play',
value: function () {
if (!this.setupFirstPlay()) {
this.tech_.ended() && this.tech_.setCurrentTime(0),
this.hasPlayed_() && this.load();
var e = this.tech_.seekable();
return this.tech_.duration() === 1 / 0 && this.tech_.currentTime() < e.start(0) ? this.tech_.setCurrentTime(e.end(e.length - 1))  : void 0
}
}
},
{
key: 'setupFirstPlay',
value: function () {
var e,
t = this,
n = this.masterPlaylistLoader_.media();
if (!n || this.tech_.paused() || this.hasPlayed_()) return !1;
if (!n.endList) {
var i = (e = t.seekable()).length ? h.default.browser.IE_VERSION && 'html5' === t.mode_ && 0 === t.tech_.readyState() ? (t.tech_.one('loadedmetadata', function () {
t.trigger('firstplay'),
t.tech_.setCurrentTime(e.end(0)),
t.hasPlayed_ = function () {
return !0
}
}), {
v: !1
})  : (t.trigger('firstplay'), void t.tech_.setCurrentTime(e.end(0))) :
{
v: !1
};
if ('object' == typeof i) return i.v
}
return this.hasPlayed_ = function () {
return !0
},
this.load(),
!0
}
},
{
key: 'handleSourceOpen_',
value: function () {
try {
this.setupSourceBuffers_()
} catch (e) {
return h.default.log.warn('Failed to create Source Buffers', e),
this.mediaSource.endOfStream('decode')
}
if (this.tech_.autoplay()) {
var e = this.tech_.play();
void 0 !== e && 'function' == typeof e.then && e.then(null, function (e) {
})
}
this.trigger('sourceopen')
}
},
{
key: 'onEndOfStream',
value: function () {
var e = this.mainSegmentLoader_.ended_;
this.mediaTypes_.AUDIO.activePlaylistLoader && (e = e && this.audioSegmentLoader_.ended_),
e && this.mediaSource.endOfStream()
}
},
{
key: 'stuckAtPlaylistEnd_',
value: function (e) {
if (!this.seekable().length) return !1;
var t = this.syncController_.getExpiredTime(e, this.mediaSource.duration);
if (null === t) return !1;
var n = b.Playlist.playlistEnd(e, t),
i = this.tech_.currentTime(),
r = this.tech_.buffered();
if (!r.length) return n - i <= c.default.SAFE_TIME_DELTA;
var o = r.end(r.length - 1);
return o - i <= c.default.SAFE_TIME_DELTA && n - o <= c.default.SAFE_TIME_DELTA
}
},
{
key: 'blacklistCurrentPlaylist',
value: function (e, t) {
void 0 === e && (e = {
});
var n,
i = void 0;
if (i = e.playlist || this.masterPlaylistLoader_.media(), t = t || e.blacklistDuration || this.blacklistDuration, !i) {
this.error = e;
try {
return this.mediaSource.endOfStream('network')
} catch (e) {
return this.trigger('error')
}
}
var r = 1 === this.masterPlaylistLoader_.master.playlists.filter(a.isEnabled).length;
return r ? (h.default.log.warn('Problem encountered with the current HLS playlist. Trying again since it is the final playlist.'),
this.tech_.trigger('retryplaylist'),
this.masterPlaylistLoader_.load(r)) : (i.excludeUntil = Date.now() + 1000 * t, this.tech_.trigger('blacklistplaylist'), this.tech_.trigger({
type: 'usage',
name: 'hls-rendition-blacklisted'
}), n = this.selectPlaylist(), h.default.log.warn('Problem encountered with the current HLS playlist.' + (e.message ? ' ' + e.message : '') + ' Switching to another playlist.'),
this.masterPlaylistLoader_.media(n))
}
},
{
key: 'pauseLoading',
value: function () {
this.mainSegmentLoader_.pause(),
this.mediaTypes_.AUDIO.activePlaylistLoader && this.audioSegmentLoader_.pause(),
this.mediaTypes_.SUBTITLES.activePlaylistLoader && this.subtitleSegmentLoader_.pause()
}
},
{
key: 'setCurrentTime',
value: function (e) {
var t = c.default.findRange(this.tech_.buffered(), e);
return this.masterPlaylistLoader_ && this.masterPlaylistLoader_.media() && this.masterPlaylistLoader_.media().segments ? t && t.length && 'flash' !== this.mode_ ? e : (this.mainSegmentLoader_.resetEverything(), this.mainSegmentLoader_.abort(), this.mediaTypes_.AUDIO.activePlaylistLoader && (this.audioSegmentLoader_.resetEverything(), this.audioSegmentLoader_.abort()), this.mediaTypes_.SUBTITLES.activePlaylistLoader && (this.subtitleSegmentLoader_.resetEverything(), this.subtitleSegmentLoader_.abort()), void this.load())  : 0
}
},
{
key: 'duration',
value: function () {
return this.masterPlaylistLoader_ ? this.mediaSource ? this.mediaSource.duration : b.Playlist.duration(this.masterPlaylistLoader_.media())  : 0
}
},
{
key: 'seekable',
value: function () {
return this.seekable_
}
},
{
key: 'onSyncInfoUpdate_',
value: function () {
var e = void 0,
t = void 0;
if (this.masterPlaylistLoader_) {
var n = this.masterPlaylistLoader_.media();
if (n) {
var i = this.syncController_.getExpiredTime(n, this.mediaSource.duration);
if (null !== i && 0 !== (e = b.Playlist.seekable(n, i)).length) {
if (this.mediaTypes_.AUDIO.activePlaylistLoader) {
if (n = this.mediaTypes_.AUDIO.activePlaylistLoader.media(), null === (i = this.syncController_.getExpiredTime(n, this.mediaSource.duration))) return;
if (0 === (t = b.Playlist.seekable(n, i)).length) return
}
t ? t.start(0) > e.end(0) || e.start(0) > t.end(0) ? this.seekable_ = e : this.seekable_ = h.default.createTimeRanges([[t.start(0) > e.start(0) ? t.start(0)  : e.start(0),
t.end(0) < e.end(0) ? t.end(0)  : e.end(0)]]) :
this.seekable_ = e,
this.tech_.trigger('seekablechanged')
}
}
}
}
},
{
key: 'updateDuration',
value: function () {
var e = this,
t = this.mediaSource.duration,
n = b.Playlist.duration(this.masterPlaylistLoader_.media()),
i = this.tech_.buffered(),
r = function t() {
e.mediaSource.duration = n,
e.tech_.trigger('durationchange'),
e.mediaSource.removeEventListener('sourceopen', t)
};
i.length > 0 && (n = Math.max(n, i.end(i.length - 1))),
t !== n && ('open' !== this.mediaSource.readyState ? this.mediaSource.addEventListener('sourceopen', r)  : r())
}
},
{
key: 'dispose',
value: function () {
var e = this;
this.decrypter_.terminate(),
this.masterPlaylistLoader_.dispose(),
this.mainSegmentLoader_.dispose(),
[
'AUDIO',
'SUBTITLES'
].forEach(function (t) {
var n = e.mediaTypes_[t].groups;
for (var i in n) n[i].forEach(function (e) {
e.playlistLoader && e.playlistLoader.dispose()
})
}),
this.audioSegmentLoader_.dispose(),
this.subtitleSegmentLoader_.dispose()
}
},
{
key: 'master',
value: function () {
return this.masterPlaylistLoader_.master
}
},
{
key: 'media',
value: function () {
return this.masterPlaylistLoader_.media() || this.initialMedia_
}
},
{
key: 'setupSourceBuffers_',
value: function () {
var e,
t = this.masterPlaylistLoader_.media();
if (t && 'open' === this.mediaSource.readyState) {
if ((e = j(this.masterPlaylistLoader_.master, t)).length < 1) return this.error = 'No compatible SourceBuffer configuration for the variant stream:' + t.resolvedUri,
this.mediaSource.endOfStream('decode');
this.mainSegmentLoader_.mimeType(e[0]),
e[1] && this.audioSegmentLoader_.mimeType(e[1]),
this.excludeIncompatibleVariants_(t)
}
}
},
{
key: 'excludeIncompatibleVariants_',
value: function (e) {
var t = this.masterPlaylistLoader_.master,
n = 2,
i = null,
r = void 0;
e.attributes.CODECS && (r = (0, A.parseCodecs) (e.attributes.CODECS), i = r.videoCodec, n = r.codecCount),
t.playlists.forEach(function (e) {
var t = {
codecCount: 2,
videoCodec: null
};
if (e.attributes.CODECS) {
var r = e.attributes.CODECS;
t = (0, A.parseCodecs) (r),
window.MediaSource && window.MediaSource.isTypeSupported && !window.MediaSource.isTypeSupported('video/mp4; codecs="' + E(r) + '"') && (e.excludeUntil = 1 / 0)
}
t.codecCount !== n && (e.excludeUntil = 1 / 0),
t.videoCodec !== i && (e.excludeUntil = 1 / 0)
})
}
},
{
key: 'updateAdCues_',
value: function (e) {
var t = 0,
n = this.seekable();
n.length && (t = n.start(0)),
d.default.updateAdCues(e, this.cueTagsTrack_, t)
}
},
{
key: 'goalBufferLength',
value: function () {
var e = this.tech_.currentTime(),
t = m.default.GOAL_BUFFER_LENGTH,
n = m.default.GOAL_BUFFER_LENGTH_RATE,
i = Math.max(t, m.default.MAX_GOAL_BUFFER_LENGTH); return Math.min(t + e * n, i)
}
},
{
key: 'bufferLowWaterLine',
value: function () {
var e = this.tech_.currentTime(),
t = m.default.BUFFER_LOW_WATER_LINE,
n = m.default.BUFFER_LOW_WATER_LINE_RATE,
i = Math.max(t, m.default.MAX_BUFFER_LOW_WATER_LINE); return Math.min(t + e * n, i)
}
}
]),
t
}();
t.MasterPlaylistController = C
},
function (e, t) {
var n,
i,
r,
o,
s,
a;
n = function (e) {
return 90000 * e
},
i = function (e, t) {
return e * t
},
r = function (e) {
return e / 90000
},
o = function (e, t) {
return e / t
},
s = function (e, t) {
return n(o(e, t))
},
a = function (e, t) {
return i(r(e), t)
},
e.exports = {
secondsToVideoTs: n,
secondsToAudioTs: i,
videoTsToSeconds: r,
audioTsToSeconds: o,
audioTsToVideoTs: s,
videoTsToAudioTs: a
}
},
function (e, t) {
var n,
i = [
33,
16,
5,
32,
164,
27
],
r = [
33,
65,
108,
84,
1,
2,
4,
8,
168,
2,
4,
8,
17,
191,
252
],
o = function (e) {
for (var t = [
]; e--; ) t.push(0);
return t
},
s = {
96000: [
i,
[
227,
64
],
o(154),
[
56
]
],
88200: [
i,
[
231
],
o(170),
[
56
]
],
64000: [
i,
[
248,
192
],
o(240),
[
56
]
],
48000: [
i,
[
255,
192
],
o(268),
[
55,
148,
128
],
o(54),
[
112
]
],
44100: [
i,
[
255,
192
],
o(268),
[
55,
163,
128
],
o(84),
[
112
]
],
32000: [
i,
[
255,
192
],
o(268),
[
55,
234
],
o(226),
[
112
]
],
24000: [
i,
[
255,
192
],
o(268),
[
55,
255,
128
],
o(268),
[
111,
112
],
o(126),
[
224
]
],
16000: [
i,
[
255,
192
],
o(268),
[
55,
255,
128
],
o(268),
[
111,
255
],
o(269),
[
223,
108
],
o(195),
[
1,
192
]
],
12000: [
r,
o(268),
[
3,
127,
248
],
o(268),
[
6,
255,
240
],
o(268),
[
13,
255,
224
],
o(268),
[
27,
253,
128
],
o(259),
[
56
]
],
11025: [
r,
o(268),
[
3,
127,
248
],
o(268),
[
6,
255,
240
],
o(268),
[
13,
255,
224
],
o(268),
[
27,
255,
192
],
o(268),
[
55,
175,
128
],
o(108),
[
112
]
],
8000: [
r,
o(268),
[
3,
121,
16
],
o(47),
[
7
]
]
};
e.exports = (n = s, Object.keys(n).reduce(function (e, t) {
return e[t] = new Uint8Array(n[t].reduce(function (e, t) {
return e.concat(t)
}, [
])),
e
}, {
}))
},
function (e, t, n) {
'use strict';
var i,
r = n(6);
(i = function () {
var e = new Uint8Array,
t = 0;
i.prototype.init.call(this),
this.setTimestamp = function (e) {
t = e
},
this.parseId3TagSize = function (e, t) {
var n = e[t + 6] << 21 | e[t + 7] << 14 | e[t + 8] << 7 | e[t + 9];
return (16 & e[t + 5]) >> 4 ? n + 20 : n + 10
},
this.parseAdtsSize = function (e, t) {
var n = (224 & e[t + 5]) >> 5,
i = e[t + 4] << 3;
return 6144 & e[t + 3] | i | n
},
this.push = function (n) {
var i,
r,
o,
s,
a = 0,
l = 0;
for (e.length ? (s = e.length, (e = new Uint8Array(n.byteLength + s)).set(e.subarray(0, s)), e.set(n, s))  : e = n; e.length - l >= 3; ) if (e[l] !== 'I'.charCodeAt(0) || e[l + 1] !== 'D'.charCodeAt(0) || e[l + 2] !== '3'.charCodeAt(0)) if (!0 & e[l] && 240 == (240 & e[l + 1])) {
if (e.length - l < 7) break;
if ((a = this.parseAdtsSize(e, l)) > e.length) break;
o = {
type: 'audio',
data: e.subarray(l, l + a),
pts: t,
dts: t
},
this.trigger('data', o),
l += a
} else l++;
 else {
if (e.length - l < 10) break;
if ((a = this.parseId3TagSize(e, l)) > e.length) break;
r = {
type: 'timed-metadata',
data: e.subarray(l, l + a)
},
this.trigger('data', r),
l += a
}
i = e.length - l,
e = i > 0 ? e.subarray(l)  : new Uint8Array
}
}).prototype = new r,
e.exports = i
},
function (e, t, n) {
e.exports = {
generator: n(55),
Transmuxer: n(33).Transmuxer,
AudioSegmentStream: n(33).AudioSegmentStream,
VideoSegmentStream: n(33).VideoSegmentStream
}
},
function (e, t, n) {
'use strict';
Object.defineProperty(t, '__esModule', {
value: !0
});
var i = function () {
function e(e, t) {
for (var n = 0; n < t.length; n++) {
var i = t[n];
i.enumerable = i.enumerable || !1,
i.configurable = !0,
'value' in i && (i.writable = !0),
Object.defineProperty(e, i.key, i)
}
}
return function (t, n, i) {
return n && e(t.prototype, n),
i && e(t, i),
t
}
}(),
r = function (e, t, n) {
for (var i = !0; i; ) {
var r = e,
o = t,
s = n;
i = !1,
null === r && (r = Function.prototype);
var a = Object.getOwnPropertyDescriptor(r, o);
if (void 0 !== a) {
if ('value' in a) return a.value;
var l = a.get;
if (void 0 === l) return;
return l.call(s)
}
var u = Object.getPrototypeOf(r);
if (null === u) return;
e = u,
t = o,
n = s,
i = !0,
a = u = void 0
}
};
function o(e) {
return e && e.__esModule ? e : {
default:
e
}
}
var s = o(n(0)),
a = o(n(59)),
l = o(n(25)),
u = n(35),
c = o(n(34)),
h = o(n(56)),
d = n(24),
f = function () {
var e = void 0;
try {
e = 56
} catch (e) {
}
return e
},
p = function (e, t, n) {
if (!t || !e.length) return [];
var i = Math.ceil(90000 * (t.currentTime() - n + 3)),
r = void 0;
for (r = 0; r < e.length && !(e[r].pts > i); r++);
return e.slice(r)
};
t.gopsSafeToAlignWith = p;
var v = function (e, t, n) {
if (!t.length) return e;
if (n) return t.slice();
for (var i = t[0].pts, r = 0; r < e.length && !(e[r].pts >= i); r++);
return e.slice(0, r).concat(t)
};
t.updateGopBuffer = v;
var g = function (e, t, n, i) {
for (var r = Math.ceil(90000 * (t - i)), o = Math.ceil(90000 * (n - i)), s = e.slice(), a = e.length; a-- && !(e[a].pts <= o); );
if ( - 1 === a) return s;
for (var l = a + 1; l-- && !(e[l].pts <= r); );
return l = Math.max(l, 0),
s.splice(l, a - l + 1),
s
};
t.removeGopBuffer = g;
var m = function (e) {
function t(e, n) {
var i = this;
!function (e, t) {
if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
}(this, t),
r(Object.getPrototypeOf(t.prototype), 'constructor', this).call(this, s.default.EventTarget), this.timestampOffset_ = 0, this.pendingBuffers_ = [
], this.bufferUpdating_ = !1, this.mediaSource_ = e, this.codecs_ = n, this.audioCodec_ = null, this.videoCodec_ = null, this.audioDisabled_ = !1, this.appendAudioInitSegment_ = !0, this.gopBuffer_ = [
], this.timeMapping_ = 0, this.safeAppend_ = s.default.browser.IE_VERSION >= 11;
var o = {
remux: !1,
alignGopsAtEnd: this.safeAppend_
};
this.codecs_.forEach(function (e) {
(0, d.isAudioCodec) (e) ? i.audioCodec_ = e : (0, d.isVideoCodec) (e) && (i.videoCodec_ = e)
}),
this.transmuxer_ = (0, c.default) (h.default,
f()), this.transmuxer_.postMessage({
action: 'init',
options: o
}), this.transmuxer_.onmessage = function (e) {
return 'data' === e.data.action ? i.data_(e)  : 'done' === e.data.action ? i.done_(e)  : 'gopInfo' === e.data.action ? i.appendGopInfo_(e)  : void 0
}, Object.defineProperty(this, 'timestampOffset', {
get: function () {
return this.timestampOffset_
},
set: function (e) {
'number' == typeof e && e >= 0 && (this.timestampOffset_ = e, this.appendAudioInitSegment_ = !0, this.gopBuffer_.length = 0, this.timeMapping_ = 0, this.transmuxer_.postMessage({
action: 'setTimestampOffset',
timestampOffset: e
}))
}
}), Object.defineProperty(this, 'appendWindowStart', {
get: function () {
return (this.videoBuffer_ || this.audioBuffer_).appendWindowStart
},
set: function (e) {
this.videoBuffer_ && (this.videoBuffer_.appendWindowStart = e),
this.audioBuffer_ && (this.audioBuffer_.appendWindowStart = e)
}
}), Object.defineProperty(this, 'updating', {
get: function () {
return !!(this.bufferUpdating_ || !this.audioDisabled_ && this.audioBuffer_ && this.audioBuffer_.updating || this.videoBuffer_ && this.videoBuffer_.updating)
}
}), Object.defineProperty(this, 'buffered', {
get: function () {
var e = null,
t = null,
n = 0,
i = [
],
r = [
];
if (!this.videoBuffer_ && !this.audioBuffer_) return s.default.createTimeRange();
if (!this.videoBuffer_) return this.audioBuffer_.buffered;
if (!this.audioBuffer_) return this.videoBuffer_.buffered;
if (this.audioDisabled_) return this.videoBuffer_.buffered;
if (0 === this.videoBuffer_.buffered.length && 0 === this.audioBuffer_.buffered.length) return s.default.createTimeRange();
for (var o = this.videoBuffer_.buffered, a = this.audioBuffer_.buffered, l = o.length; l--; ) i.push({
time: o.start(l),
type: 'start'
}),
i.push({
time: o.end(l),
type: 'end'
});
for (l = a.length; l--; ) i.push({
time: a.start(l),
type: 'start'
}),
i.push({
time: a.end(l),
type: 'end'
});
for (i.sort(function (e, t) {
return e.time - t.time
}), l = 0; l < i.length; l++) 'start' === i[l].type ? 2 === ++n && (e = i[l].time)  : 'end' === i[l].type && 1 === --n && (t = i[l].time),
null !== e && null !== t && (r.push([e,
t]), e = null, t = null);
return s.default.createTimeRanges(r)
}
})
}
return function (e, t) {
if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
e.prototype = Object.create(t && t.prototype, {
constructor: {
value: e,
enumerable: !1,
writable: !0,
configurable: !0
}
}),
t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t)  : e.__proto__ = t)
}(t, s['default'].EventTarget),
i(t, [
{
key: 'data_',
value: function (e) {
var t = e.data.segment;
t.data = new Uint8Array(t.data, e.data.byteOffset, e.data.byteLength),
t.initSegment = new Uint8Array(t.initSegment.data, t.initSegment.byteOffset, t.initSegment.byteLength),
(0, a.default) (this, this.mediaSource_, t), this.pendingBuffers_.push(t)
}
},
{
key: 'done_',
value: function (e) {
'closed' !== this.mediaSource_.readyState ? this.processPendingSegments_()  : this.pendingBuffers_.length = 0
}
},
{
key: 'createRealSourceBuffers_',
value: function () {
var e = this,
t = [
'audio',
'video'
];
t.forEach(function (n) {
if (e[n + 'Codec_'] && !e[n + 'Buffer_']) {
var i = null;
if (e.mediaSource_[n + 'Buffer_']) (i = e.mediaSource_[n + 'Buffer_']).updating = !1;
 else {
var r = n + '/mp4;codecs="' + e[n + 'Codec_'] + '"';
i = function (e, t) {
var n = e.addSourceBuffer(t),
i = Object.create(null);
i.updating = !1,
i.realBuffer_ = n;
var r = function (e) {
'function' == typeof n[e] ? i[e] = function () {
return n[e].apply(n, arguments)
}
 : void 0 === i[e] && Object.defineProperty(i, e, {
get: function () {
return n[e]
},
set: function (t) {
return n[e] = t
}
})
};
for (var o in n) r(o);
return i
}(e.mediaSource_.nativeMediaSource_, r),
e.mediaSource_[n + 'Buffer_'] = i
}
e[n + 'Buffer_'] = i,
[
'update',
'updatestart',
'updateend'
].forEach(function (r) {
i.addEventListener(r, function () {
if ('audio' !== n || !e.audioDisabled_) return 'updateend' === r && (e[n + 'Buffer_'].updating = !1),
t.every(function (t) {
return !('audio' !== t || !e.audioDisabled_) || (n === t || !e[t + 'Buffer_'] || !e[t + 'Buffer_'].updating)
}) ? e.trigger(r)  : void 0
})
})
}
})
}
},
{
key: 'appendBuffer',
value: function (e) {
if (this.bufferUpdating_ = !0, this.audioBuffer_ && this.audioBuffer_.buffered.length) {
var t = this.audioBuffer_.buffered;
this.transmuxer_.postMessage({
action: 'setAudioAppendStart',
appendStart: t.end(t.length - 1)
})
}
this.videoBuffer_ && this.transmuxer_.postMessage({
action: 'alignGopsWith',
gopsToAlignWith: p(this.gopBuffer_, this.mediaSource_.player_, this.timeMapping_)
}),
this.transmuxer_.postMessage({
action: 'push',
data: e.buffer,
byteOffset: e.byteOffset,
byteLength: e.byteLength
}, [
e.buffer
]),
this.transmuxer_.postMessage({
action: 'flush'
})
}
},
{
key: 'appendGopInfo_',
value: function (e) {
this.gopBuffer_ = v(this.gopBuffer_, e.data.gopInfo, this.safeAppend_)
}
},
{
key: 'remove',
value: function (e, t) {
if (this.videoBuffer_ && (this.videoBuffer_.updating = !0, this.videoBuffer_.remove(e, t), this.gopBuffer_ = g(this.gopBuffer_, e, t, this.timeMapping_)), !this.audioDisabled_ && this.audioBuffer_ && (this.audioBuffer_.updating = !0, this.audioBuffer_.remove(e, t)), (0, l.default) (e, t, this.metadataTrack_), this.inbandTextTracks_) for (var n in this.inbandTextTracks_) (0, l.default) (e, t, this.inbandTextTracks_[n])
}
},
{
key: 'processPendingSegments_',
value: function () {
var e = {
video: {
segments: [
],
bytes: 0
},
audio: {
segments: [
],
bytes: 0
},
captions: [
],
metadata: [
]
};
e = this.pendingBuffers_.reduce(function (e, t) {
var n = t.type,
i = t.data,
r = t.initSegment;
return e[n].segments.push(i),
e[n].bytes += i.byteLength,
e[n].initSegment = r,
t.captions && (e.captions = e.captions.concat(t.captions)),
t.info && (e[n].info = t.info),
t.metadata && (e.metadata = e.metadata.concat(t.metadata)),
e
}, e),
this.videoBuffer_ || this.audioBuffer_ || (0 === e.video.bytes && (this.videoCodec_ = null), 0 === e.audio.bytes && (this.audioCodec_ = null), this.createRealSourceBuffers_()),
e.audio.info && this.mediaSource_.trigger({
type: 'audioinfo',
info: e.audio.info
}),
e.video.info && this.mediaSource_.trigger({
type: 'videoinfo',
info: e.video.info
}),
this.appendAudioInitSegment_ && (!this.audioDisabled_ && this.audioBuffer_ && (e.audio.segments.unshift(e.audio.initSegment), e.audio.bytes += e.audio.initSegment.byteLength), this.appendAudioInitSegment_ = !1);
var t = !1;
this.videoBuffer_ && e.video.bytes ? (e.video.segments.unshift(e.video.initSegment), e.video.bytes += e.video.initSegment.byteLength, this.concatAndAppendSegments_(e.video, this.videoBuffer_), (0, u.addTextTrackData) (this, e.captions, e.metadata))  : !this.videoBuffer_ || !this.audioDisabled_ && this.audioBuffer_ || (t = !0),
!this.audioDisabled_ && this.audioBuffer_ && this.concatAndAppendSegments_(e.audio, this.audioBuffer_),
this.pendingBuffers_.length = 0,
t && this.trigger('updateend'),
this.bufferUpdating_ = !1
}
},
{
key: 'concatAndAppendSegments_',
value: function (e, t) {
var n = 0,
i = void 0;
if (e.bytes) {
i = new Uint8Array(e.bytes),
e.segments.forEach(function (e) {
i.set(e, n),
n += e.byteLength
});
try {
t.updating = !0,
t.appendBuffer(i)
} catch (e) {
this.mediaSource_.player_ && this.mediaSource_.player_.error({
code: - 3,
type: 'APPEND_BUFFER_ERR',
message: e.message,
originalError: e
})
}
}
}
},
{
key: 'abort',
value: function () {
this.videoBuffer_ && this.videoBuffer_.abort(),
!this.audioDisabled_ && this.audioBuffer_ && this.audioBuffer_.abort(),
this.transmuxer_ && this.transmuxer_.postMessage({
action: 'reset'
}),
this.pendingBuffers_.length = 0,
this.bufferUpdating_ = !1
}
}
]),
t
}();
t.default = m
},
function (e, t, n) {
'use strict';
Object.defineProperty(t, '__esModule', {
value: !0
});
var i = function () {
function e(e, t) {
for (var n = 0; n < t.length; n++) {
var i = t[n];
i.enumerable = i.enumerable || !1,
i.configurable = !0,
'value' in i && (i.writable = !0),
Object.defineProperty(e, i.key, i)
}
}
return function (t, n, i) {
return n && e(t.prototype, n),
i && e(t, i),
t
}
}(),
r = function (e, t, n) {
for (var i = !0; i; ) {
var r = e,
o = t,
s = n;
i = !1,
null === r && (r = Function.prototype);
var a = Object.getOwnPropertyDescriptor(r, o);
if (void 0 !== a) {
if ('value' in a) return a.value;
var l = a.get;
if (void 0 === l) return;
return l.call(s)
}
var u = Object.getPrototypeOf(r);
if (null === u) return;
e = u,
t = o,
n = s,
i = !0,
a = u = void 0
}
};
function o(e) {
return e && e.__esModule ? e : {
default:
e
}
}
var s = o(n(3)),
a = o(n(22)),
l = o(n(0)),
u = o(n(139)),
c = n(35),
h = n(24),
d = function (e) {
function t() {
var e = this;
!function (e, t) {
if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
}(this, t),
r(Object.getPrototypeOf(t.prototype), 'constructor', this).call(this);
var n = void 0;
for (n in this.nativeMediaSource_ = new s.default.MediaSource,
this.nativeMediaSource_) n in t.prototype || 'function' != typeof this.nativeMediaSource_[n] || (this[n] = this.nativeMediaSource_[n].bind(this.nativeMediaSource_)); this.duration_ = NaN, Object.defineProperty(this, 'duration', {
get: function () {
return this.duration_ === 1 / 0 ? this.duration_ : this.nativeMediaSource_.duration
},
set: function (e) {
this.duration_ = e,
e === 1 / 0 || (this.nativeMediaSource_.duration = e)
}
}), Object.defineProperty(this, 'seekable', {
get: function () {
return this.duration_ === 1 / 0 ? l.default.createTimeRanges([[0,
this.nativeMediaSource_.duration]]) :
this.nativeMediaSource_.seekable
}
}), Object.defineProperty(this, 'readyState', {
get: function () {
return this.nativeMediaSource_.readyState
}
}), Object.defineProperty(this, 'activeSourceBuffers', {
get: function () {
return this.activeSourceBuffers_
}
}), this.sourceBuffers = [
], this.activeSourceBuffers_ = [
], this.updateActiveSourceBuffers_ = function () {
if (e.activeSourceBuffers_.length = 0, 1 === e.sourceBuffers.length) {
var t = e.sourceBuffers[0];
return t.appendAudioInitSegment_ = !0,
t.audioDisabled_ = !t.audioCodec_,
void e.activeSourceBuffers_.push(t)
}
for (var n = !1, i = !0, r = 0; r < e.player_.audioTracks().length; r++) {
var o = e.player_.audioTracks() [r];
if (o.enabled && 'main' !== o.kind) {
n = !0,
i = !1;
break
}
}
e.sourceBuffers.forEach(function (t) {
if (t.appendAudioInitSegment_ = !0, t.videoCodec_ && t.audioCodec_) t.audioDisabled_ = n;
 else if (t.videoCodec_ && !t.audioCodec_) t.audioDisabled_ = !0,
i = !1;
 else if (!t.videoCodec_ && t.audioCodec_ && (t.audioDisabled_ = i, i)) return;
e.activeSourceBuffers_.push(t)
})
}, this.onPlayerMediachange_ = function () {
e.sourceBuffers.forEach(function (e) {
e.appendAudioInitSegment_ = !0
})
}, this.onHlsReset_ = function () {
e.sourceBuffers.forEach(function (e) {
e.transmuxer_ && e.transmuxer_.postMessage({
action: 'resetCaptions'
})
})
}, this.onHlsSegmentTimeMapping_ = function (t) {
e.sourceBuffers.forEach(function (e) {
return e.timeMapping_ = t.mapping
})
}, [
'sourceopen',
'sourceclose',
'sourceended'
].forEach(function (e) {
this.nativeMediaSource_.addEventListener(e, this.trigger.bind(this))
}, this), this.on('sourceopen', function (t) {
var n = a.default.querySelector('[src="' + e.url_ + '"]');
n && (e.player_ = (0, l.default) (n.parentNode), e.player_.tech_.on('hls-reset', e.onHlsReset_), e.player_.tech_.on('hls-segment-time-mapping', e.onHlsSegmentTimeMapping_), e.player_.audioTracks && e.player_.audioTracks() && (e.player_.audioTracks().on('change', e.updateActiveSourceBuffers_), e.player_.audioTracks().on('addtrack', e.updateActiveSourceBuffers_), e.player_.audioTracks().on('removetrack', e.updateActiveSourceBuffers_)), e.player_.on('mediachange', e.onPlayerMediachange_))
}),
this.on('sourceended', function (t) {
for (var n = (0, c.durationOfVideo) (e.duration), i = 0; i < e.sourceBuffers.length; i++) {
var r = e.sourceBuffers[i],
o = r.metadataTrack_ && r.metadataTrack_.cues;
o && o.length && (o[o.length - 1].endTime = n)
}
}),
this.on('sourceclose', function (e) {
this.sourceBuffers.forEach(function (e) {
e.transmuxer_ && e.transmuxer_.terminate()
}),
this.sourceBuffers.length = 0,
this.player_ && (this.player_.audioTracks && this.player_.audioTracks() && (this.player_.audioTracks().off('change', this.updateActiveSourceBuffers_), this.player_.audioTracks().off('addtrack', this.updateActiveSourceBuffers_), this.player_.audioTracks().off('removetrack', this.updateActiveSourceBuffers_)), this.player_.el_ && (this.player_.off('mediachange', this.onPlayerMediachange_), this.player_.tech_.off('hls-reset', this.onHlsReset_), this.player_.tech_.off('hls-segment-time-mapping', this.onHlsSegmentTimeMapping_)))
})
}
return function (e, t) {
if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
e.prototype = Object.create(t && t.prototype, {
constructor: {
value: e,
enumerable: !1,
writable: !0,
configurable: !0
}
}),
t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t)  : e.__proto__ = t)
}(t, l['default'].EventTarget), i(t, [
{
key: 'addSeekableRange_',
value: function (e, t) {
var n = void 0;
if (this.duration !== 1 / 0) throw (n = new Error('MediaSource.addSeekableRange() can only be invoked when the duration is Infinity')).name = 'InvalidStateError',
n.code = 11,
n;
(t > this.nativeMediaSource_.duration || isNaN(this.nativeMediaSource_.duration)) && (this.nativeMediaSource_.duration = t)
}
},
{
key: 'addSourceBuffer',
value: function (e) {
var t = void 0,
n = (0, h.parseContentType) (e);
if (/^(video|audio)\/mp2t$/i.test(n.type)) {
var i = [
];
n.parameters && n.parameters.codecs && (i = n.parameters.codecs.split(','), i = (i = (0, h.translateLegacyCodecs) (i)).filter(function (e) {
return (0, h.isAudioCodec) (e) || (0, h.isVideoCodec) (e)
})),
0 === i.length && (i = [
'avc1.4d400d',
'mp4a.40.2'
]),
t = new u.default(this, i),
0 !== this.sourceBuffers.length && (this.sourceBuffers[0].createRealSourceBuffers_(), t.createRealSourceBuffers_(), this.sourceBuffers[0].audioDisabled_ = !0)
} else t = this.nativeMediaSource_.addSourceBuffer(e);
return this.sourceBuffers.push(t),
t
}
}
]), t
}(); t.default = d,
e.exports = t.default
},
function (e, t, n) {
'use strict';
var i = n(36);
e.exports = function (e, t, n) {
var r,
o,
s,
a = new Uint8Array(9),
l = new DataView(a.buffer);
return e = e || 0,
t = void 0 === t || t,
n = void 0 === n || n,
l.setUint8(0, 70),
l.setUint8(1, 76),
l.setUint8(2, 86),
l.setUint8(3, 1),
l.setUint8(4, (t ? 4 : 0) | (n ? 1 : 0)),
l.setUint32(5, a.byteLength),
e <= 0 ? ((o = new Uint8Array(a.byteLength + 4)).set(a), o.set([0,
0,
0,
0], a.byteLength), o)  : ((r = new i(i.METADATA_TAG)).pts = r.dts = 0, r.writeMetaDataDouble('duration', e), s = r.finalize().length, (o = new Uint8Array(a.byteLength + s)).set(a), o.set(l.byteLength, s), o)
}
},
function (e, t, n) {
'use strict';
e.exports = function () {
var e = this;
this.list = [
],
this.push = function (e) {
this.list.push({
bytes: e.bytes,
dts: e.dts,
pts: e.pts,
keyFrame: e.keyFrame,
metaDataTag: e.metaDataTag
})
},
Object.defineProperty(this, 'length', {
get: function () {
return e.list.length
}
})
}
},
function (e, t, n) {
'use strict';
var i = n(6),
r = function (e) {
this.numberOfTracks = 0,
this.metadataStream = e.metadataStream,
this.videoTags = [
],
this.audioTags = [
],
this.videoTrack = null,
this.audioTrack = null,
this.pendingCaptions = [
],
this.pendingMetadata = [
],
this.pendingTracks = 0,
this.processedTracks = 0,
r.prototype.init.call(this),
this.push = function (e) {
return e.text ? this.pendingCaptions.push(e)  : e.frames ? this.pendingMetadata.push(e)  : ('video' === e.track.type && (this.videoTrack = e.track, this.videoTags = e.tags, this.pendingTracks++), void ('audio' === e.track.type && (this.audioTrack = e.track, this.audioTags = e.tags, this.pendingTracks++)))
}
};
r.prototype = new i,
r.prototype.flush = function (e) {
var t,
n,
i,
r,
o = {
tags: {
},
captions: [
],
captionStreams: {
},
metadata: [
]
};
if (this.pendingTracks < this.numberOfTracks) {
if ('VideoSegmentStream' !== e && 'AudioSegmentStream' !== e) return;
if (0 === this.pendingTracks && (this.processedTracks++, this.processedTracks < this.numberOfTracks)) return
}
if (this.processedTracks += this.pendingTracks, this.pendingTracks = 0, !(this.processedTracks < this.numberOfTracks)) {
for (this.videoTrack ? r = this.videoTrack.timelineStartInfo.pts : this.audioTrack && (r = this.audioTrack.timelineStartInfo.pts), o.tags.videoTags = this.videoTags, o.tags.audioTags = this.audioTags, i = 0; i < this.pendingCaptions.length; i++) (n = this.pendingCaptions[i]).startTime = n.startPts - r,
n.startTime /= 90000,
n.endTime = n.endPts - r,
n.endTime /= 90000,
o.captionStreams[n.stream] = !0,
o.captions.push(n);
for (i = 0; i < this.pendingMetadata.length; i++) (t = this.pendingMetadata[i]).cueTime = t.pts - r,
t.cueTime /= 90000,
o.metadata.push(t);
o.metadata.dispatchType = this.metadataStream.dispatchType,
this.videoTrack = null,
this.audioTrack = null,
this.videoTags = [
],
this.audioTags = [
],
this.pendingCaptions.length = 0,
this.pendingMetadata.length = 0,
this.pendingTracks = 0,
this.processedTracks = 0,
this.trigger('data', o),
this.trigger('done')
}
},
e.exports = r
},
function (e, t, n) {
'use strict';
var i;
i = function (e) {
var t = e.byteLength,
n = 0,
i = 0;
this.length = function () {
return 8 * t
},
this.bitsAvailable = function () {
return 8 * t + i
},
this.loadWord = function () {
var r = e.byteLength - t,
o = new Uint8Array(4),
s = Math.min(4, t);
if (0 === s) throw new Error('no bytes available');
o.set(e.subarray(r, r + s)),
n = new DataView(o.buffer).getUint32(0),
i = 8 * s,
t -= s
},
this.skipBits = function (e) {
var r;
i > e ? (n <<= e, i -= e)  : (e -= i, e -= 8 * (r = Math.floor(e / 8)), t -= r, this.loadWord(), n <<= e, i -= e)
},
this.readBits = function (e) {
var r = Math.min(i, e),
o = n >>> 32 - r;
return (i -= r) > 0 ? n <<= r : t > 0 && this.loadWord(),
(r = e - r) > 0 ? o << r | this.readBits(r)  : o
},
this.skipLeadingZeros = function () {
var e;
for (e = 0; e < i; ++e) if (0 != (n & 2147483648 >>> e)) return n <<= e,
i -= e,
e;
return this.loadWord(),
e + this.skipLeadingZeros()
},
this.skipUnsignedExpGolomb = function () {
this.skipBits(1 + this.skipLeadingZeros())
},
this.skipExpGolomb = function () {
this.skipBits(1 + this.skipLeadingZeros())
},
this.readUnsignedExpGolomb = function () {
var e = this.skipLeadingZeros();
return this.readBits(e + 1) - 1
},
this.readExpGolomb = function () {
var e = this.readUnsignedExpGolomb();
return 1 & e ? 1 + e >>> 1 : - 1 * (e >>> 1)
},
this.readBoolean = function () {
return 1 === this.readBits(1)
},
this.readUnsignedByte = function () {
return this.readBits(8)
},
this.loadWord()
},
e.exports = i
},
function (e, t, n) {
'use strict';
var i,
r = n(6),
o = n(18),
s = function (e, t, n) {
var i,
r = '';
for (i = t; i < n; i++) r += '%' + ('00' + e[i].toString(16)).slice( - 2);
return r
},
a = function (e, t, n) {
return decodeURIComponent(s(e, t, n))
},
l = function (e) {
return e[0] << 21 | e[1] << 14 | e[2] << 7 | e[3]
},
u = {
TXXX: function (e) {
var t;
if (3 === e.data[0]) {
for (t = 1; t < e.data.length; t++) if (0 === e.data[t]) {
e.description = a(e.data, 1, t),
e.value = a(e.data, t + 1, e.data.length).replace(/\0*$/, '');
break
}
e.data = e.value
}
},
WXXX: function (e) {
var t;
if (3 === e.data[0]) for (t = 1; t < e.data.length; t++) if (0 === e.data[t]) {
e.description = a(e.data, 1, t),
e.url = a(e.data, t + 1, e.data.length);
break
}
},
PRIV: function (e) {
var t,
n;
for (t = 0; t < e.data.length; t++) if (0 === e.data[t]) {
e.owner = (n = e.data, unescape(s(n, 0, t)));
break
}
e.privateData = e.data.subarray(t + 1),
e.data = e.privateData
}
};
(i = function (e) {
var t,
n = {
debug: !(!e || !e.debug),
descriptor: e && e.descriptor
},
r = 0,
s = [
],
a = 0;
if (i.prototype.init.call(this), this.dispatchType = o.METADATA_STREAM_TYPE.toString(16), n.descriptor) for (t = 0; t < n.descriptor.length; t++) this.dispatchType += ('00' + n.descriptor[t].toString(16)).slice( - 2);
this.push = function (e) {
var t,
i,
o,
c,
h;
if ('timed-metadata' === e.type) if (e.dataAlignmentIndicator && (a = 0, s.length = 0), 0 === s.length && (e.data.length < 10 || e.data[0] !== 'I'.charCodeAt(0) || e.data[1] !== 'D'.charCodeAt(0) || e.data[2] !== '3'.charCodeAt(0))) n.debug && console.log('Skipping unrecognized metadata packet');
 else if (s.push(e), a += e.data.byteLength, 1 === s.length && (r = l(e.data.subarray(6, 10)), r += 10), !(a < r)) {
for (t = {
data: new Uint8Array(r),
frames: [
],
pts: s[0].pts,
dts: s[0].dts
}, h = 0; h < r; ) t.data.set(s[0].data.subarray(0, r - h), h),
h += s[0].data.byteLength,
a -= s[0].data.byteLength,
s.shift();
i = 10,
64 & t.data[5] && (i += 4, i += l(t.data.subarray(10, 14)), r -= l(t.data.subarray(16, 20)));
do {
if ((o = l(t.data.subarray(i + 4, i + 8))) < 1) return console.log('Malformed ID3 frame encountered. Skipping metadata parsing.');
if ((c = {
id: String.fromCharCode(t.data[i], t.data[i + 1], t.data[i + 2], t.data[i + 3]),
data: t.data.subarray(i + 10, i + o + 10)
}).key = c.id, u[c.id] && (u[c.id](c), 'com.apple.streaming.transportStreamTimestamp' === c.owner)) {
var d = c.data,
f = (1 & d[3]) << 30 | d[4] << 22 | d[5] << 14 | d[6] << 6 | d[7] >>> 2;
f *= 4,
f += 3 & d[7],
c.timeStamp = f,
void 0 === t.pts && void 0 === t.dts && (t.pts = c.timeStamp, t.dts = c.timeStamp),
this.trigger('timestamp', c)
}
t.frames.push(c),
i += 10,
i += o
} while (i < r);
this.trigger('data', t)
}
}
}).prototype = new r,
e.exports = i
},
function (e, t, n) {
'use strict';
var i = n(6),
r = function () {
r.prototype.init.call(this),
this.captionPackets_ = [
],
this.ccStreams_ = [
new u(0, 0),
new u(0, 1),
new u(1, 0),
new u(1, 1)
],
this.reset(),
this.ccStreams_.forEach(function (e) {
e.on('data', this.trigger.bind(this, 'data')),
e.on('done', this.trigger.bind(this, 'done'))
}, this)
};
r.prototype = new i,
r.prototype.push = function (e) {
var t,
n;
'sei_rbsp' === e.nalUnitType && 4 === (t = function (e) {
for (var t = 0, n = {
payloadType: - 1,
payloadSize: 0
}, i = 0, r = 0; t < e.byteLength && 128 !== e[t]; ) {
for (; 255 === e[t]; ) i += 255,
t++;
for (i += e[t++]; 255 === e[t]; ) r += 255,
t++;
if (r += e[t++], !n.payload && 4 === i) {
n.payloadType = i,
n.payloadSize = r,
n.payload = e.subarray(t, t + r);
break
}
t += r,
i = 0,
r = 0
}
return n
}(e.escapedRBSP)).payloadType && (n = function (e) {
return 181 !== e.payload[0] ? null : 49 != (e.payload[1] << 8 | e.payload[2]) ? null : 'GA94' !== String.fromCharCode(e.payload[3], e.payload[4], e.payload[5], e.payload[6]) ? null : 3 !== e.payload[7] ? null : e.payload.subarray(8, e.payload.length - 1)
}(t)) && (e.dts < this.latestDts_ ? this.ignoreNextEqualDts_ = !0 : e.dts === this.latestDts_ && this.ignoreNextEqualDts_ ? this.ignoreNextEqualDts_ = !1 : (this.captionPackets_ = this.captionPackets_.concat(function (e, t) {
var n,
i,
r,
o,
s = [
];
if (!(64 & t[0])) return s;
for (i = 31 & t[0], n = 0; n < i; n++) o = {
type: 3 & t[2 + (r = 3 * n)],
pts: e
},
4 & t[r + 2] && (o.ccData = t[r + 3] << 8 | t[r + 4], s.push(o));
return s
}(e.pts, n)), this.latestDts_ = e.dts))
},
r.prototype.flush = function () {
this.captionPackets_.length ? (this.captionPackets_.forEach(function (e, t) {
e.presortIndex = t
}), this.captionPackets_.sort(function (e, t) {
return e.pts === t.pts ? e.presortIndex - t.presortIndex : e.pts - t.pts
}), this.captionPackets_.forEach(function (e) {
e.type < 2 && this.dispatchCea608Packet(e)
}, this), this.captionPackets_.length = 0, this.ccStreams_.forEach(function (e) {
e.flush()
}, this))  : this.ccStreams_.forEach(function (e) {
e.flush()
}, this)
},
r.prototype.reset = function () {
this.latestDts_ = null,
this.ignoreNextEqualDts_ = !1,
this.activeCea608Channel_ = [
null,
null
],
this.ccStreams_.forEach(function (e) {
e.reset()
})
},
r.prototype.dispatchCea608Packet = function (e) {
this.setsChannel1Active(e) ? this.activeCea608Channel_[e.type] = 0 : this.setsChannel2Active(e) && (this.activeCea608Channel_[e.type] = 1),
null !== this.activeCea608Channel_[e.type] && this.ccStreams_[(e.type << 1) + this.activeCea608Channel_[e.type]].push(e)
},
r.prototype.setsChannel1Active = function (e) {
return 4096 == (30720 & e.ccData)
},
r.prototype.setsChannel2Active = function (e) {
return 6144 == (30720 & e.ccData)
};
var o = {
42: 225,
92: 233,
94: 237,
95: 243,
96: 250,
123: 231,
124: 247,
125: 209,
126: 241,
127: 9608,
304: 174,
305: 176,
306: 189,
307: 191,
308: 8482,
309: 162,
310: 163,
311: 9834,
312: 224,
313: 160,
314: 232,
315: 226,
316: 234,
317: 238,
318: 244,
319: 251,
544: 193,
545: 201,
546: 211,
547: 218,
548: 220,
549: 252,
550: 8216,
551: 161,
552: 42,
553: 39,
554: 8212,
555: 169,
556: 8480,
557: 8226,
558: 8220,
559: 8221,
560: 192,
561: 194,
562: 199,
563: 200,
564: 202,
565: 203,
566: 235,
567: 206,
568: 207,
569: 239,
570: 212,
571: 217,
572: 249,
573: 219,
574: 171,
575: 187,
800: 195,
801: 227,
802: 205,
803: 204,
804: 236,
805: 210,
806: 242,
807: 213,
808: 245,
809: 123,
810: 125,
811: 92,
812: 94,
813: 95,
814: 124,
815: 126,
816: 196,
817: 228,
818: 214,
819: 246,
820: 223,
821: 165,
822: 164,
823: 9474,
824: 197,
825: 229,
826: 216,
827: 248,
828: 9484,
829: 9488,
830: 9492,
831: 9496
},
s = function (e) {
return null === e ? '' : (e = o[e] || e, String.fromCharCode(e))
},
a = [
4352,
4384,
4608,
4640,
5376,
5408,
5632,
5664,
5888,
5920,
4096,
4864,
4896,
5120,
5152
],
l = function () {
for (var e = [
], t = 15; t--; ) e.push('');
return e
},
u = function (e, t) {
u.prototype.init.call(this),
this.field_ = e || 0,
this.dataChannel_ = t || 0,
this.name_ = 'CC' + (1 + (this.field_ << 1 | this.dataChannel_)),
this.setConstants(),
this.reset(),
this.push = function (e) {
var t,
n,
i,
r,
o;
if ((t = 32639 & e.ccData) !== this.lastControlCode_) {
if (4096 == (61440 & t) ? this.lastControlCode_ = t : t !== this.PADDING_ && (this.lastControlCode_ = null), i = t >>> 8, r = 255 & t, t !== this.PADDING_) if (t === this.RESUME_CAPTION_LOADING_) this.mode_ = 'popOn';
 else if (t === this.END_OF_CAPTION_) this.clearFormatting(e.pts),
this.flushDisplayed(e.pts),
n = this.displayed_,
this.displayed_ = this.nonDisplayed_,
this.nonDisplayed_ = n,
this.startPts_ = e.pts;
 else if (t === this.ROLL_UP_2_ROWS_) this.topRow_ = 13,
this.mode_ = 'rollUp';
 else if (t === this.ROLL_UP_3_ROWS_) this.topRow_ = 12,
this.mode_ = 'rollUp';
 else if (t === this.ROLL_UP_4_ROWS_) this.topRow_ = 11,
this.mode_ = 'rollUp';
 else if (t === this.CARRIAGE_RETURN_) this.clearFormatting(e.pts),
this.flushDisplayed(e.pts),
this.shiftRowsUp_(),
this.startPts_ = e.pts;
 else if (t === this.BACKSPACE_) 'popOn' === this.mode_ ? this.nonDisplayed_[14] = this.nonDisplayed_[14].slice(0, - 1)  : this.displayed_[14] = this.displayed_[14].slice(0, - 1);
 else if (t === this.ERASE_DISPLAYED_MEMORY_) this.flushDisplayed(e.pts),
this.displayed_ = l();
 else if (t === this.ERASE_NON_DISPLAYED_MEMORY_) this.nonDisplayed_ = l();
 else if (t === this.RESUME_DIRECT_CAPTIONING_) this.mode_ = 'paintOn';
 else if (this.isSpecialCharacter(i, r)) o = s((i = (3 & i) << 8) | r),
this[this.mode_](e.pts, o),
this.column_++;
 else if (this.isExtCharacter(i, r)) 'popOn' === this.mode_ ? this.nonDisplayed_[this.row_] = this.nonDisplayed_[this.row_].slice(0, - 1)  : this.displayed_[14] = this.displayed_[14].slice(0, - 1),
o = s((i = (3 & i) << 8) | r),
this[this.mode_](e.pts, o),
this.column_++;
 else if (this.isMidRowCode(i, r)) this.clearFormatting(e.pts),
this[this.mode_](e.pts, ' '),
this.column_++,
14 == (14 & r) && this.addFormatting(e.pts, [
'i'
]),
1 == (1 & r) && this.addFormatting(e.pts, [
'u'
]);
 else if (this.isOffsetControlCode(i, r)) this.column_ += 3 & r;
 else if (this.isPAC(i, r)) {
var u = a.indexOf(7968 & t);
u !== this.row_ && (this.clearFormatting(e.pts), this.row_ = u),
1 & r && - 1 === this.formatting_.indexOf('u') && this.addFormatting(e.pts, [
'u'
]),
16 == (16 & t) && (this.column_ = 4 * ((14 & t) >> 1)),
this.isColorPAC(r) && 14 == (14 & r) && this.addFormatting(e.pts, [
'i'
])
} else this.isNormalChar(i) && (0 === r && (r = null), o = s(i), o += s(r), this[this.mode_](e.pts, o), this.column_ += o.length)
} else this.lastControlCode_ = null
}
};
u.prototype = new i,
u.prototype.flushDisplayed = function (e) {
var t = this.displayed_.map(function (e) {
return e.trim()
}).join('\n').replace(/^\n+|\n+$/g, '');
t.length && this.trigger('data', {
startPts: this.startPts_,
endPts: e,
text: t,
stream: this.name_
})
},
u.prototype.reset = function () {
this.mode_ = 'popOn',
this.topRow_ = 0,
this.startPts_ = 0,
this.displayed_ = l(),
this.nonDisplayed_ = l(),
this.lastControlCode_ = null,
this.column_ = 0,
this.row_ = 14,
this.formatting_ = [
]
},
u.prototype.setConstants = function () {
0 === this.dataChannel_ ? (this.BASE_ = 16, this.EXT_ = 17, this.CONTROL_ = (20 | this.field_) << 8, this.OFFSET_ = 23)  : 1 === this.dataChannel_ && (this.BASE_ = 24, this.EXT_ = 25, this.CONTROL_ = (28 | this.field_) << 8, this.OFFSET_ = 31),
this.PADDING_ = 0,
this.RESUME_CAPTION_LOADING_ = 32 | this.CONTROL_,
this.END_OF_CAPTION_ = 47 | this.CONTROL_,
this.ROLL_UP_2_ROWS_ = 37 | this.CONTROL_,
this.ROLL_UP_3_ROWS_ = 38 | this.CONTROL_,
this.ROLL_UP_4_ROWS_ = 39 | this.CONTROL_,
this.CARRIAGE_RETURN_ = 45 | this.CONTROL_,
this.RESUME_DIRECT_CAPTIONING_ = 41 | this.CONTROL_,
this.BACKSPACE_ = 33 | this.CONTROL_,
this.ERASE_DISPLAYED_MEMORY_ = 44 | this.CONTROL_,
this.ERASE_NON_DISPLAYED_MEMORY_ = 46 | this.CONTROL_
},
u.prototype.isSpecialCharacter = function (e, t) {
return e === this.EXT_ && t >= 48 && t <= 63
},
u.prototype.isExtCharacter = function (e, t) {
return (e === this.EXT_ + 1 || e === this.EXT_ + 2) && t >= 32 && t <= 63
},
u.prototype.isMidRowCode = function (e, t) {
return e === this.EXT_ && t >= 32 && t <= 47
},
u.prototype.isOffsetControlCode = function (e, t) {
return e === this.OFFSET_ && t >= 33 && t <= 35
},
u.prototype.isPAC = function (e, t) {
return e >= this.BASE_ && e < this.BASE_ + 8 && t >= 64 && t <= 127
},
u.prototype.isColorPAC = function (e) {
return e >= 64 && e <= 79 || e >= 96 && e <= 127
},
u.prototype.isNormalChar = function (e) {
return e >= 32 && e <= 127
},
u.prototype.addFormatting = function (e, t) {
this.formatting_ = this.formatting_.concat(t);
var n = t.reduce(function (e, t) {
return e + '<' + t + '>'
}, '');
this[this.mode_](e, n)
},
u.prototype.clearFormatting = function (e) {
if (this.formatting_.length) {
var t = this.formatting_.reverse().reduce(function (e, t) {
return e + '</' + t + '>'
}, '');
this.formatting_ = [
],
this[this.mode_](e, t)
}
},
u.prototype.popOn = function (e, t) {
var n = this.nonDisplayed_[this.row_];
n += t,
this.nonDisplayed_[this.row_] = n
},
u.prototype.rollUp = function (e, t) {
var n = this.displayed_[14];
n += t,
this.displayed_[14] = n
},
u.prototype.shiftRowsUp_ = function () {
var e;
for (e = 0; e < this.topRow_; e++) this.displayed_[e] = '';
for (e = this.topRow_; e < 14; e++) this.displayed_[e] = this.displayed_[e + 1];
this.displayed_[14] = ''
},
u.prototype.paintOn = function () {
},
e.exports = {
CaptionStream: r,
Cea608Stream: u
}
},
function (e, t, n) {
'use strict';
var i,
r,
o,
s,
a,
l,
u = n(6),
c = n(36),
h = n(63),
d = n(61),
f = n(60).H264Stream,
p = n(143),
v = n(142);
s = function (e, t) {
'number' == typeof t.pts && (void 0 === e.timelineStartInfo.pts ? e.timelineStartInfo.pts = t.pts : e.timelineStartInfo.pts = Math.min(e.timelineStartInfo.pts, t.pts)),
'number' == typeof t.dts && (void 0 === e.timelineStartInfo.dts ? e.timelineStartInfo.dts = t.dts : e.timelineStartInfo.dts = Math.min(e.timelineStartInfo.dts, t.dts))
},
a = function (e, t) {
var n = new c(c.METADATA_TAG);
return n.dts = t,
n.pts = t,
n.writeMetaDataDouble('videocodecid', 7),
n.writeMetaDataDouble('width', e.width),
n.writeMetaDataDouble('height', e.height),
n
},
l = function (e, t) {
var n,
i = new c(c.VIDEO_TAG, !0);
for (i.dts = t, i.pts = t, i.writeByte(1), i.writeByte(e.profileIdc), i.writeByte(e.profileCompatibility), i.writeByte(e.levelIdc), i.writeByte(255), i.writeByte(225), i.writeShort(e.sps[0].length), i.writeBytes(e.sps[0]), i.writeByte(e.pps.length), n = 0; n < e.pps.length; ++n) i.writeShort(e.pps[n].length),
i.writeBytes(e.pps[n]);
return i
},
(o = function (e) {
var t,
n = [
],
i = [
];
o.prototype.init.call(this),
this.push = function (t) {
s(e, t),
e && (e.audioobjecttype = t.audioobjecttype, e.channelcount = t.channelcount, e.samplerate = t.samplerate, e.samplingfrequencyindex = t.samplingfrequencyindex, e.samplesize = t.samplesize, e.extraData = e.audioobjecttype << 11 | e.samplingfrequencyindex << 7 | e.channelcount << 3),
t.pts = Math.round(t.pts / 90),
t.dts = Math.round(t.dts / 90),
n.push(t)
},
this.flush = function () {
var r,
o,
s,
a = new v;
if (0 !== n.length) {
for (s = - 1 / 0; n.length; ) r = n.shift(),
i.length && r.pts >= i[0] && (s = i.shift(), this.writeMetaDataTags(a, s)),
(e.extraData !== t || r.pts - s >= 1000) && (this.writeMetaDataTags(a, r.pts), t = e.extraData, s = r.pts),
(o = new c(c.AUDIO_TAG)).pts = r.pts,
o.dts = r.dts,
o.writeBytes(r.data),
a.push(o.finalize());
i.length = 0,
t = null,
this.trigger('data', {
track: e,
tags: a.list
}),
this.trigger('done', 'AudioSegmentStream')
} else this.trigger('done', 'AudioSegmentStream')
},
this.writeMetaDataTags = function (t, n) {
var i;
(i = new c(c.METADATA_TAG)).pts = n,
i.dts = n,
i.writeMetaDataDouble('audiocodecid', 10),
i.writeMetaDataBoolean('stereo', 2 === e.channelcount),
i.writeMetaDataDouble('audiosamplerate', e.samplerate),
i.writeMetaDataDouble('audiosamplesize', 16),
t.push(i.finalize()),
(i = new c(c.AUDIO_TAG, !0)).pts = n,
i.dts = n,
i.view.setUint16(i.position, e.extraData),
i.position += 2,
i.length = Math.max(i.length, i.position),
t.push(i.finalize())
},
this.onVideoKeyFrame = function (e) {
i.push(e)
}
}).prototype = new u,
(r = function (e) {
var t,
n,
i = [
];
r.prototype.init.call(this),
this.finishFrame = function (i, r) {
if (r) {
if (t && e && e.newMetadata && (r.keyFrame || 0 === i.length)) {
var o = a(t, r.dts).finalize(),
s = l(e, r.dts).finalize();
o.metaDataTag = s.metaDataTag = !0,
i.push(o),
i.push(s),
e.newMetadata = !1,
this.trigger('keyframe', r.dts)
}
r.endNalUnit(),
i.push(r.finalize()),
n = null
}
},
this.push = function (t) {
s(e, t),
t.pts = Math.round(t.pts / 90),
t.dts = Math.round(t.dts / 90),
i.push(t)
},
this.flush = function () {
for (var r, o = new v; i.length && 'access_unit_delimiter_rbsp' !== i[0].nalUnitType; ) i.shift();
if (0 !== i.length) {
for (; i.length; ) 'seq_parameter_set_rbsp' === (r = i.shift()).nalUnitType ? (e.newMetadata = !0, t = r.config, e.width = t.width, e.height = t.height, e.sps = [
r.data
], e.profileIdc = t.profileIdc, e.levelIdc = t.levelIdc, e.profileCompatibility = t.profileCompatibility, n.endNalUnit())  : 'pic_parameter_set_rbsp' === r.nalUnitType ? (e.newMetadata = !0, e.pps = [
r.data
], n.endNalUnit())  : 'access_unit_delimiter_rbsp' === r.nalUnitType ? (n && this.finishFrame(o, n), (n = new c(c.VIDEO_TAG)).pts = r.pts, n.dts = r.dts)  : ('slice_layer_without_partitioning_rbsp_idr' === r.nalUnitType && (n.keyFrame = !0), n.endNalUnit()),
n.startNalUnit(),
n.writeBytes(r.data);
n && this.finishFrame(o, n),
this.trigger('data', {
track: e,
tags: o.list
}),
this.trigger('done', 'VideoSegmentStream')
} else this.trigger('done', 'VideoSegmentStream')
}
}).prototype = new u,
(i = function (e) {
var t,
n,
s,
a,
l,
u,
c,
v,
g,
m,
A,
y,
b = this;
i.prototype.init.call(this),
e = e || {
},
this.metadataStream = new h.MetadataStream,
e.metadataStream = this.metadataStream,
t = new h.TransportPacketStream,
n = new h.TransportParseStream,
s = new h.ElementaryStream,
a = new h.TimestampRolloverStream('video'),
l = new h.TimestampRolloverStream('audio'),
u = new h.TimestampRolloverStream('timed-metadata'),
c = new d,
v = new f,
y = new p(e),
t.pipe(n).pipe(s),
s.pipe(a).pipe(v),
s.pipe(l).pipe(c),
s.pipe(u).pipe(this.metadataStream).pipe(y),
A = new h.CaptionStream,
v.pipe(A).pipe(y),
s.on('data', function (e) {
var t,
n,
i;
if ('metadata' === e.type) {
for (t = e.tracks.length; t--; ) 'video' === e.tracks[t].type ? n = e.tracks[t] : 'audio' === e.tracks[t].type && (i = e.tracks[t]);
n && !g && (y.numberOfTracks++, g = new r(n), v.pipe(g).pipe(y)),
i && !m && (y.numberOfTracks++, m = new o(i), c.pipe(m).pipe(y), g && g.on('keyframe', m.onVideoKeyFrame))
}
}),
this.push = function (e) {
t.push(e)
},
this.flush = function () {
t.flush()
},
this.resetCaptions = function () {
A.reset()
},
y.on('data', function (e) {
b.trigger('data', e)
}),
y.on('done', function () {
b.trigger('done')
})
}).prototype = new u,
e.exports = i
},
function (e, t, n) {
'use strict';
Object.defineProperty(t, '__esModule', {
value: !0
});
var i = function () {
function e(e, t) {
for (var n = 0; n < t.length; n++) {
var i = t[n];
i.enumerable = i.enumerable || !1,
i.configurable = !0,
'value' in i && (i.writable = !0),
Object.defineProperty(e, i.key, i)
}
}
return function (t, n, i) {
return n && e(t.prototype, n),
i && e(t, i),
t
}
}(),
r = function (e, t, n) {
for (var i = !0; i; ) {
var r = e,
o = t,
s = n;
i = !1,
null === r && (r = Function.prototype);
var a = Object.getOwnPropertyDescriptor(r, o);
if (void 0 !== a) {
if ('value' in a) return a.value;
var l = a.get;
if (void 0 === l) return;
return l.call(s)
}
var u = Object.getPrototypeOf(r);
if (null === u) return;
e = u,
t = o,
n = s,
i = !0,
a = u = void 0
}
};
function o(e) {
return e && e.__esModule ? e : {
default:
e
}
}
var s = o(n(3)),
a = o(n(0)),
l = o(n(64)),
u = o(n(25)),
c = o(n(59)),
h = n(35),
d = o(n(58)),
f = o(n(34)),
p = o(n(57)),
v = function () {
var e = void 0;
try {
e = 58
} catch (e) {
}
return e
},
g = function (e) {
s.default.setTimeout(e, p.default.TIME_BETWEEN_CHUNKS)
},
m = function () {
return Math.random().toString(36).slice(2, 8)
},
A = function (e, t) {
('number' != typeof t || t < 0) && (t = 0);
var n = Math.pow(10, t);
return Math.round(e * n) / n
},
y = function (e) {
function t(e) {
var n = this;
!function (e, t) {
if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
}(this, t),
r(Object.getPrototypeOf(t.prototype), 'constructor', this).call(this);
var i;
this.chunkSize_ = p.default.BYTES_PER_CHUNK,
this.buffer_ = [
],
this.bufferSize_ = 0,
this.basePtsOffset_ = NaN,
this.mediaSource_ = e,
this.audioBufferEnd_ = NaN,
this.videoBufferEnd_ = NaN,
this.updating = !1,
this.timestampOffset_ = 0,
i = s.default.btoa(String.fromCharCode.apply(null, Array.prototype.slice.call(l.default.getFlvHeader()))); var o = this.mediaSource_.player_.id().replace(/[^a-zA-Z0-9]/g, '_'); this.flashEncodedHeaderName_ = 'vjs_flashEncodedHeader_' + o + m(), this.flashEncodedDataName_ = 'vjs_flashEncodedData_' + o + m(), s.default[this.flashEncodedHeaderName_] = function () {
return delete s.default[n.flashEncodedHeaderName_],
i
},
this.mediaSource_.swfObj.vjs_appendChunkReady(this.flashEncodedHeaderName_),
this.transmuxer_ = (0, f.default) (d.default,
v()), this.transmuxer_.postMessage({
action: 'init',
options: {
}
}), this.transmuxer_.onmessage = function (e) {
'data' === e.data.action && n.receiveBuffer_(e.data.segment)
}, this.one('updateend', function () {
n.mediaSource_.tech_.trigger('loadedmetadata')
}), Object.defineProperty(this, 'timestampOffset', {
get: function () {
return this.timestampOffset_
},
set: function (e) {
'number' == typeof e && e >= 0 && (this.timestampOffset_ = e, this.mediaSource_.swfObj.vjs_discontinuity(), this.basePtsOffset_ = NaN, this.audioBufferEnd_ = NaN, this.videoBufferEnd_ = NaN, this.transmuxer_.postMessage({
action: 'reset'
}))
}
}), Object.defineProperty(this, 'buffered', {
get: function () {
if (!(this.mediaSource_ && this.mediaSource_.swfObj && 'vjs_getProperty' in this.mediaSource_.swfObj)) return a.default.createTimeRange();
var e = this.mediaSource_.swfObj.vjs_getProperty('buffered');
return e && e.length && (e[0][0] = A(e[0][0], 3), e[0][1] = A(e[0][1], 3)),
a.default.createTimeRanges(e)
}
}),
this.mediaSource_.player_.on('seeked', function () {
if ((0, u.default) (0, 1 / 0, n.metadataTrack_), n.inbandTextTracks_) for (var e in n.inbandTextTracks_) (0, u.default) (0, 1 / 0, n.inbandTextTracks_[e])
});
var c = this.onHlsReset_.bind(this);
this.mediaSource_.player_.tech_.on('hls-reset', c),
this.mediaSource_.player_.tech_.hls.on('dispose', function () {
n.transmuxer_.terminate(),
n.mediaSource_.player_.tech_.off('hls-reset', c)
})
}
return function (e, t) {
if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
e.prototype = Object.create(t && t.prototype, {
constructor: {
value: e,
enumerable: !1,
writable: !0,
configurable: !0
}
}),
t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t)  : e.__proto__ = t)
}(t, a['default'].EventTarget), i(t, [
{
key: 'appendBuffer',
value: function (e) {
var t = void 0;
if (this.updating) throw (t = new Error('SourceBuffer.append() cannot be called while an update is in progress')).name = 'InvalidStateError',
t.code = 11,
t;
this.updating = !0,
this.mediaSource_.readyState = 'open',
this.trigger({
type: 'update'
}),
this.transmuxer_.postMessage({
action: 'push',
data: e.buffer,
byteOffset: e.byteOffset,
byteLength: e.byteLength
}, [
e.buffer
]),
this.transmuxer_.postMessage({
action: 'flush'
})
}
},
{
key: 'abort',
value: function () {
this.buffer_ = [
],
this.bufferSize_ = 0,
this.mediaSource_.swfObj.vjs_abort(),
this.updating && (this.updating = !1, this.trigger({
type: 'updateend'
}))
}
},
{
key: 'remove',
value: function (e, t) {
if ((0, u.default) (e, t, this.metadataTrack_), this.inbandTextTracks_) for (var n in this.inbandTextTracks_) (0, u.default) (e, t, this.inbandTextTracks_[n]); this.trigger({
type: 'update'
}), this.trigger({
type: 'updateend'
})
}
},
{
key: 'receiveBuffer_',
value: function (e) {
var t = this;
(0, c.default) (this, this.mediaSource_, e), (0, h.addTextTrackData) (this, e.captions, e.metadata), g(function () {
var n = t.convertTagsToData_(e);
0 === t.buffer_.length && g(t.processBuffer_.bind(t)),
n && (t.buffer_.push(n), t.bufferSize_ += n.byteLength)
})
}
},
{
key: 'processBuffer_',
value: function () {
var e = this,
t = p.default.BYTES_PER_CHUNK;
if (this.buffer_.length) {
var n = this.buffer_[0].subarray(0, t);
n.byteLength < t || this.buffer_[0].byteLength === t ? this.buffer_.shift()  : this.buffer_[0] = this.buffer_[0].subarray(t),
this.bufferSize_ -= n.byteLength;
for (var i = [
], r = n.byteLength, o = 0; o < r; o++) i.push(String.fromCharCode(n[o]));
var a = s.default.btoa(i.join(''));
s.default[this.flashEncodedDataName_] = function () {
return g(e.processBuffer_.bind(e)),
delete s.default[e.flashEncodedDataName_],
a
},
this.mediaSource_.swfObj.vjs_appendChunkReady(this.flashEncodedDataName_)
} else !1 !== this.updating && (this.updating = !1, this.trigger({
type: 'updateend'
}))
}
},
{
key: 'convertTagsToData_',
value: function (e) {
var t = 0,
n = this.mediaSource_.tech_,
i = 0,
r = void 0,
o = e.tags.videoTags,
s = e.tags.audioTags;
if (isNaN(this.basePtsOffset_) && (o.length || s.length)) {
var a = o[0] || {
pts: 1 / 0
},
l = s[0] || {
pts: 1 / 0
};
this.basePtsOffset_ = Math.min(l.pts, a.pts)
}
n.seeking() && (this.videoBufferEnd_ = NaN, this.audioBufferEnd_ = NaN),
isNaN(this.videoBufferEnd_) ? (n.buffered().length && (i = n.buffered().end(0) - this.timestampOffset), n.seeking() && (i = Math.max(i, n.currentTime() - this.timestampOffset)), i *= 1000, i += this.basePtsOffset_)  : i = this.videoBufferEnd_ + 0.1;
var u = o.length;
if (u && o[u - 1].pts >= i) {
for (; --u; ) {
var c = o[u];
if (!(c.pts > i) && (c.keyFrame || c.metaDataTag)) break
}
for (; u; ) {
if (!o[u - 1].metaDataTag) break;
u--
}
}
var h = o.slice(u),
d = void 0;
for (d = isNaN(this.audioBufferEnd_) ? i : this.audioBufferEnd_ + 0.1, h.length && (d = Math.min(d, h[0].pts)), u = 0; u < s.length && !(s[u].pts >= d); ) u++;
var f = s.slice(u);
f.length && (this.audioBufferEnd_ = f[f.length - 1].pts),
h.length && (this.videoBufferEnd_ = h[h.length - 1].pts);
var p = this.getOrderedTags_(h, f);
if (0 !== p.length) {
if (p[0].pts < i && n.seeking()) {
var v = n.currentTime() - (i - p[0].pts) / 1000;
v < 1 / 30 && (v = 0);
try {
this.mediaSource_.swfObj.vjs_adjustCurrentTime(v)
} catch (e) {
}
}
for (var g = 0; g < p.length; g++) t += p[g].bytes.byteLength;
r = new Uint8Array(t);
g = 0;
for (var m = 0; g < p.length; g++) r.set(p[g].bytes, m),
m += p[g].bytes.byteLength;
return r
}
}
},
{
key: 'getOrderedTags_',
value: function (e, t) {
for (var n = void 0, i = [
]; e.length || t.length; ) n = e.length ? t.length && t[0].dts < e[0].dts ? t.shift()  : e.shift()  : t.shift(),
i.push(n);
return i
}
},
{
key: 'onHlsReset_',
value: function () {
this.transmuxer_.postMessage({
action: 'resetCaptions'
})
}
}
]),
t
}();
t.default = y,
e.exports = t.default
},
function (e, t, n) {
'use strict';
Object.defineProperty(t, '__esModule', {
value: !0
});
var i = function () {
function e(e, t) {
for (var n = 0; n < t.length; n++) {
var i = t[n];
i.enumerable = i.enumerable || !1,
i.configurable = !0,
'value' in i && (i.writable = !0),
Object.defineProperty(e, i.key, i)
}
}
return function (t, n, i) {
return n && e(t.prototype, n),
i && e(t, i),
t
}
}(),
r = function (e, t, n) {
for (var i = !0; i; ) {
var r = e,
o = t,
s = n;
i = !1,
null === r && (r = Function.prototype);
var a = Object.getOwnPropertyDescriptor(r, o);
if (void 0 !== a) {
if ('value' in a) return a.value;
var l = a.get;
if (void 0 === l) return;
return l.call(s)
}
var u = Object.getPrototypeOf(r);
if (null === u) return;
e = u,
t = o,
n = s,
i = !0,
a = u = void 0
}
};
function o(e) {
return e && e.__esModule ? e : {
default:
e
}
}
var s = o(n(22)),
a = o(n(0)),
l = o(n(148)),
u = o(n(57)),
c = n(24),
h = function (e) {
function t() {
var e = this;
!function (e, t) {
if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
}(this, t),
r(Object.getPrototypeOf(t.prototype), 'constructor', this).call(this),
this.sourceBuffers = [
],
this.readyState = 'closed',
this.on(['sourceopen',
'webkitsourceopen'], function (t) {
e.swfObj = s.default.getElementById(t.swfId),
e.player_ = (0, a.default) (e.swfObj.parentNode), e.tech_ = e.swfObj.tech, e.readyState = 'open', e.tech_.on('seeking', function () {
for (var t = e.sourceBuffers.length; t--; ) e.sourceBuffers[t].abort()
}), e.swfObj && e.swfObj.vjs_load()
})
}
return function (e, t) {
if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
e.prototype = Object.create(t && t.prototype, {
constructor: {
value: e,
enumerable: !1,
writable: !0,
configurable: !0
}
}),
t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t)  : e.__proto__ = t)
}(t, a['default'].EventTarget), i(t, [
{
key: 'addSeekableRange_',
value: function () {
}
},
{
key: 'addSourceBuffer',
value: function (e) {
var t = (0, c.parseContentType) (e),
n = void 0;
if ('video/mp2t' !== t.type && 'audio/mp2t' !== t.type) throw new Error('NotSupportedError (Video.js)');
return n = new l.default(this),
this.sourceBuffers.push(n),
n
}
},
{
key: 'endOfStream',
value: function (e) {
'network' === e ? this.tech_.error(2)  : 'decode' === e && this.tech_.error(3),
'ended' !== this.readyState && (this.readyState = 'ended', this.swfObj.vjs_endOfStream())
}
}
]), t
}(); t.default = h;
try {
Object.defineProperty(h.prototype, 'duration', {
get: function () {
return this.swfObj ? this.swfObj.vjs_getProperty('duration')  : NaN
},
set: function (e) {
var t = void 0,
n = this.swfObj.vjs_getProperty('duration');
if (this.swfObj.vjs_setProperty('duration', e), e < n) for (t = 0; t < this.sourceBuffers.length; t++) this.sourceBuffers[t].remove(e, n);
return e
}
})
} catch (e) {
h.prototype.duration = NaN
}
for (var d in u.default) h[d] = u.default[d];
e.exports = t.default
},
function (e, t, n) {
'use strict';
function i(e) {
return e && e.__esModule ? e : {
default:
e
}
}
Object.defineProperty(t, '__esModule', {
value: !0
});
var r = i(n(3)),
o = i(n(149)),
s = i(n(140)),
a = i(n(0)),
l = 0,
u = {
mode: 'auto'
};
a.default.mediaSources = {
};
var c = function (e, t) {
var n = a.default.mediaSources[e];
if (!n) throw new Error('Media Source not found (Video.js)');
n.trigger({
type: 'sourceopen',
swfId: t
})
},
h = function () {
return !!r.default.MediaSource && !!r.default.MediaSource.isTypeSupported && r.default.MediaSource.isTypeSupported('video/mp4;codecs="avc1.4d400d,mp4a.40.2"')
},
d = function (e) {
var t = a.default.mergeOptions(u, e);
if (this.MediaSource = {
open: c,
supportsNativeMediaSources: h
}, 'html5' === t.mode || 'auto' === t.mode && h()) return new s.default;
if (a.default.getTech('Flash')) return new o.default;
throw new Error('Cannot use Flash or Html5 to create a MediaSource for this video')
}; t.MediaSource = d, d.open = c, d.supportsNativeMediaSources = h; var f = {
createObjectURL: function (e) {
var t = void 0;
return e instanceof s.default ? (t = r.default.URL.createObjectURL(e.nativeMediaSource_),
e.url_ = t,
t) : e instanceof o.default ? (t = 'blob:vjs-media-source/' + l, l++, a.default.mediaSources[t] = e,
t) : (t = r.default.URL.createObjectURL(e),
e.url_ = t,
t)
}
};
t.URL = f,
a.default.MediaSource = d,
a.default.URL = f
},
function (e, t, n) {
'use strict';
e.exports = function (e) {
return e.subarray(0, e.byteLength - e[e.byteLength - 1])
}
},
function (e, t, n) {
'use strict';
var i;
e.exports = function (e) {
var t = i[e.byteLength % 16 || 0],
n = new Uint8Array(e.byteLength + t.length);
return n.set(e),
n.set(t, e.byteLength),
n
},
i = [
[16,
16,
16,
16,
16,
16,
16,
16,
16,
16,
16,
16,
16,
16,
16,
16],
[
15,
15,
15,
15,
15,
15,
15,
15,
15,
15,
15,
15,
15,
15,
15
],
[
14,
14,
14,
14,
14,
14,
14,
14,
14,
14,
14,
14,
14,
14
],
[
13,
13,
13,
13,
13,
13,
13,
13,
13,
13,
13,
13,
13
],
[
12,
12,
12,
12,
12,
12,
12,
12,
12,
12,
12,
12
],
[
11,
11,
11,
11,
11,
11,
11,
11,
11,
11,
11
],
[
10,
10,
10,
10,
10,
10,
10,
10,
10,
10
],
[
9,
9,
9,
9,
9,
9,
9,
9,
9
],
[
8,
8,
8,
8,
8,
8,
8,
8
],
[
7,
7,
7,
7,
7,
7,
7
],
[
6,
6,
6,
6,
6,
6
],
[
5,
5,
5,
5,
5
],
[
4,
4,
4,
4
],
[
3,
3,
3
],
[
2,
2
],
[
1
]
]
},
function (e, t, n) {
'use strict';
t.pad = n(152),
t.unpad = n(151)
},
function (e, t, n) {
'use strict';
Object.defineProperty(t, '__esModule', {
value: !0
});
var i = function () {
function e(e, t) {
for (var n = 0; n < t.length; n++) {
var i = t[n];
i.enumerable = i.enumerable || !1,
i.configurable = !0,
'value' in i && (i.writable = !0),
Object.defineProperty(e, i.key, i)
}
}
return function (t, n, i) {
return n && e(t.prototype, n),
i && e(t, i),
t
}
}();
var r = function () {
function e() {
!function (e, t) {
if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
}(this, e),
this.listeners = {
}
}
return i(e, [
{
key: 'on',
value: function (e, t) {
this.listeners[e] || (this.listeners[e] = [
]),
this.listeners[e].push(t)
}
},
{
key: 'off',
value: function (e, t) {
var n;
return !!this.listeners[e] && (n = this.listeners[e].indexOf(t), this.listeners[e].splice(n, 1), n > - 1)
}
},
{
key: 'trigger',
value: function (e) {
var t = void 0,
n = void 0,
i = void 0,
r = void 0;
if (t = this.listeners[e]) if (2 === arguments.length) for (i = t.length, n = 0; n < i; ++n) t[n].call(this, arguments[1]);
 else for (r = Array.prototype.slice.call(arguments, 1), i = t.length, n = 0; n < i; ++n) t[n].apply(this, r)
}
},
{
key: 'dispose',
value: function () {
this.listeners = {
}
}
},
{
key: 'pipe',
value: function (e) {
this.on('data', function (t) {
e.push(t)
})
}
}
]),
e
}();
t.default = r,
e.exports = t.default
},
function (e, t, n) {
'use strict';
Object.defineProperty(t, '__esModule', {
value: !0
});
var i = function () {
function e(e, t) {
for (var n = 0; n < t.length; n++) {
var i = t[n];
i.enumerable = i.enumerable || !1,
i.configurable = !0,
'value' in i && (i.writable = !0),
Object.defineProperty(e, i.key, i)
}
}
return function (t, n, i) {
return n && e(t.prototype, n),
i && e(t, i),
t
}
}();
var r = function () {
var e = [
[[],
[
],
[
],
[
],
[
]],
[
[],
[
],
[
],
[
],
[
]
]
],
t = e[0],
n = e[1],
i = t[4],
r = n[4],
o = void 0,
s = void 0,
a = void 0,
l = [
],
u = [
],
c = void 0,
h = void 0,
d = void 0,
f = void 0,
p = void 0;
for (o = 0; o < 256; o++) u[(l[o] = o << 1 ^ 283 * (o >> 7)) ^ o] = o;
for (s = a = 0; !i[s]; s ^= c || 1, a = u[a] || 1) for (d = (d = a ^ a << 1 ^ a << 2 ^ a << 3 ^ a << 4) >> 8 ^ 255 & d ^ 99, i[s] = d, r[d] = s, p = 16843009 * l[h = l[c = l[s]]] ^ 65537 * h ^ 257 * c ^ 16843008 * s, f = 257 * l[d] ^ 16843008 * d, o = 0; o < 4; o++) t[o][s] = f = f << 24 ^ f >>> 8,
n[o][d] = p = p << 24 ^ p >>> 8;
for (o = 0; o < 5; o++) t[o] = t[o].slice(0),
n[o] = n[o].slice(0);
return e
},
o = null,
s = function () {
function e(t) {
!function (e, t) {
if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
}(this, e),
o || (o = r()),
this._tables = [
[o[0][0].slice(),
o[0][1].slice(),
o[0][2].slice(),
o[0][3].slice(),
o[0][4].slice()],
[
o[1][0].slice(),
o[1][1].slice(),
o[1][2].slice(),
o[1][3].slice(),
o[1][4].slice()
]
];
var n = void 0,
i = void 0,
s = void 0,
a = void 0,
l = void 0,
u = this._tables[0][4],
c = this._tables[1],
h = t.length,
d = 1;
if (4 !== h && 6 !== h && 8 !== h) throw new Error('Invalid aes key size');
for (a = t.slice(0), l = [
], this._key = [
a,
l
], n = h; n < 4 * h + 28; n++) s = a[n - 1],
(n % h == 0 || 8 === h && n % h == 4) && (s = u[s >>> 24] << 24 ^ u[s >> 16 & 255] << 16 ^ u[s >> 8 & 255] << 8 ^ u[255 & s], n % h == 0 && (s = s << 8 ^ s >>> 24 ^ d << 24, d = d << 1 ^ 283 * (d >> 7))),
a[n] = a[n - h] ^ s;
for (i = 0; n; i++, n--) s = a[3 & i ? n : n - 4],
l[i] = n <= 4 || i < 4 ? s : c[0][u[s >>> 24]] ^ c[1][u[s >> 16 & 255]] ^ c[2][u[s >> 8 & 255]] ^ c[3][u[255 & s]]
}
return i(e, [
{
key: 'decrypt',
value: function (e, t, n, i, r, o) {
var s = this._key[1],
a = e ^ s[0],
l = i ^ s[1],
u = n ^ s[2],
c = t ^ s[3],
h = void 0,
d = void 0,
f = void 0,
p = s.length / 4 - 2,
v = void 0,
g = 4,
m = this._tables[1],
A = m[0],
y = m[1],
b = m[2],
_ = m[3],
w = m[4];
for (v = 0; v < p; v++) h = A[a >>> 24] ^ y[l >> 16 & 255] ^ b[u >> 8 & 255] ^ _[255 & c] ^ s[g],
d = A[l >>> 24] ^ y[u >> 16 & 255] ^ b[c >> 8 & 255] ^ _[255 & a] ^ s[g + 1],
f = A[u >>> 24] ^ y[c >> 16 & 255] ^ b[a >> 8 & 255] ^ _[255 & l] ^ s[g + 2],
c = A[c >>> 24] ^ y[a >> 16 & 255] ^ b[l >> 8 & 255] ^ _[255 & u] ^ s[g + 3],
g += 4,
a = h,
l = d,
u = f;
for (v = 0; v < 4; v++) r[(3 & - v) + o] = w[a >>> 24] << 24 ^ w[l >> 16 & 255] << 16 ^ w[u >> 8 & 255] << 8 ^ w[255 & c] ^ s[g++],
h = a,
a = l,
l = u,
u = c,
c = h
}
}
]),
e
}();
t.default = s,
e.exports = t.default
},
function (e, t, n) {
'use strict';
Object.defineProperty(t, '__esModule', {
value: !0
});
var i = function () {
function e(e, t) {
for (var n = 0; n < t.length; n++) {
var i = t[n];
i.enumerable = i.enumerable || !1,
i.configurable = !0,
'value' in i && (i.writable = !0),
Object.defineProperty(e, i.key, i)
}
}
return function (t, n, i) {
return n && e(t.prototype, n),
i && e(t, i),
t
}
}();
function r(e) {
return e && e.__esModule ? e : {
default:
e
}
}
var o = r(n(155)),
s = r(n(65)),
a = n(153),
l = function (e) {
return e << 24 | (65280 & e) << 8 | (16711680 & e) >> 8 | e >>> 24
},
u = function (e, t, n) {
var i = new Int32Array(e.buffer, e.byteOffset, e.byteLength >> 2),
r = new o.default(Array.prototype.slice.call(t)),
s = new Uint8Array(e.byteLength),
a = new Int32Array(s.buffer),
u = void 0,
c = void 0,
h = void 0,
d = void 0,
f = void 0,
p = void 0,
v = void 0,
g = void 0,
m = void 0;
for (u = n[0], c = n[1], h = n[2], d = n[3], m = 0; m < i.length; m += 4) f = l(i[m]),
p = l(i[m + 1]),
v = l(i[m + 2]),
g = l(i[m + 3]),
r.decrypt(f, p, v, g, a, m),
a[m] = l(a[m] ^ u),
a[m + 1] = l(a[m + 1] ^ c),
a[m + 2] = l(a[m + 2] ^ h),
a[m + 3] = l(a[m + 3] ^ d),
u = f,
c = p,
h = v,
d = g;
return s
};
t.decrypt = u;
var c = function () {
function e(t, n, i, r) {
!function (e, t) {
if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
}(this, e);
var o = e.STEP,
u = new Int32Array(t.buffer),
c = new Uint8Array(t.byteLength),
h = 0;
for (this.asyncStream_ = new s.default,
this.asyncStream_.push(this.decryptChunk_(u.subarray(h, h + o), n, i, c)),
h = o;
h < u.length;
h += o) i = new Uint32Array([l(u[h - 4]),
l(u[h - 3]),
l(u[h - 2]),
l(u[h - 1])]), this.asyncStream_.push(this.decryptChunk_(u.subarray(h, h + o), n, i, c)); this.asyncStream_.push(function () {
r(null, (0, a.unpad) (c))
})
}
return i(e, [
{
key: 'decryptChunk_',
value: function (e, t, n, i) {
return function () {
var r = u(e, t, n);
i.set(r, e.byteOffset)
}
}
}
], [
{
key: 'STEP',
get: function () {
return 32000
}
}
]),
e
}();
t.Decrypter = c,
t.default = {
Decrypter: c,
decrypt: u
}
},
function (e, t, n) {
'use strict';
Object.defineProperty(t, '__esModule', {
value: !0
});
var i,
r = n(0),
o = (i = r) && i.__esModule ? i : {
default:
i
};
t.default = function () {
return function e(t, n) {
t = (0, r.mergeOptions) ({
timeout: 45000
}, t);
var i = e.beforeRequest || o.default.Hls.xhr.beforeRequest;
if (i && 'function' == typeof i) {
var s = i(t);
s && (t = s)
}
var a = (0, r.xhr) (t, function (e, t) {
var i = a.response;
!e && i && (a.responseTime = Date.now(), a.roundTripTime = a.responseTime - a.requestTime, a.bytesReceived = i.byteLength || i.length, a.bandwidth || (a.bandwidth = Math.floor(a.bytesReceived / a.roundTripTime * 8 * 1000))),
e && 'ETIMEDOUT' === e.code && (a.timedout = !0),
e || a.aborted || 200 === t.statusCode || 206 === t.statusCode || 0 === t.statusCode || (e = new Error('XHR Failed with a response of: ' + (a && (i || a.responseText)))),
n(e, a)
}),
l = a.abort;
return a.abort = function () {
return a.aborted = !0,
l.apply(a, arguments)
},
a.uri = t.uri,
a.requestTime = Date.now(),
a
}
},
e.exports = t.default
},
function (e, t, n) {
'use strict';
Object.defineProperty(t, '__esModule', {
value: !0
});
t.default = function (e) {
try {
var t = e.split('#EXTINF'),
n = t[1].split('/'),
i = n[n.length - 1],
r = t[t.length - 1];
return (r = r.split('/')) [r.length - 1].split('#EXT-END-LIST') [0] + i
} catch (e) {
return ''
}
},
e.exports = t.default
},
function (e, t, n) {
'use strict';
Object.defineProperty(t, '__esModule', {
value: !0
});
t.default = function (e) {
var t = '';
try {
t = new TextDecoder('utf-8').decode(new Uint8Array(e))
} catch (n) {
try {
e.forEach(function (e) {
t += String.fromCharCode(e)
})
} catch (e) {
}
}
return t
},
e.exports = t.default
},
function (e, t, n) {
'use strict';
Object.defineProperty(t, '__esModule', {
value: !0
});
var i,
r = n(71),
o = (i = r) && i.__esModule ? i : {
default:
i
};
t.default = function (e, t) {
return o.default.decode(t, e)
},
e.exports = t.default
},
function (e, t, n) {
'use strict';
Object.defineProperty(t, '__esModule', {
value: !0
});
t.default = function (e) {
try {
return e = (e = e.split('AES-128,URI="') [1]).split('"') [0]
} catch (e) {
return
}
},
e.exports = t.default
},
function (e, t, n) {
var i;
e.exports = (i = n(1), n(15), n(14), n(10), n(4), function () {
var e = i,
t = e.lib.StreamCipher,
n = [
],
r = [
],
o = [
],
s = e.algo.RabbitLegacy = t.extend({
_doReset: function () {
var e = this._key.words,
t = this.cfg.iv,
n = this._X = [
e[0],
e[3] << 16 | e[2] >>> 16,
e[1],
e[0] << 16 | e[3] >>> 16,
e[2],
e[1] << 16 | e[0] >>> 16,
e[3],
e[2] << 16 | e[1] >>> 16
],
i = this._C = [
e[2] << 16 | e[2] >>> 16,
4294901760 & e[0] | 65535 & e[1],
e[3] << 16 | e[3] >>> 16,
4294901760 & e[1] | 65535 & e[2],
e[0] << 16 | e[0] >>> 16,
4294901760 & e[2] | 65535 & e[3],
e[1] << 16 | e[1] >>> 16,
4294901760 & e[3] | 65535 & e[0]
];
this._b = 0;
for (var r = 0; r < 4; r++) a.call(this);
for (r = 0; r < 8; r++) i[r] ^= n[r + 4 & 7];
if (t) {
var o = t.words,
s = o[0],
l = o[1],
u = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8),
c = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8),
h = u >>> 16 | 4294901760 & c,
d = c << 16 | 65535 & u;
for (i[0] ^= u, i[1] ^= h, i[2] ^= c, i[3] ^= d, i[4] ^= u, i[5] ^= h, i[6] ^= c, i[7] ^= d, r = 0; r < 4; r++) a.call(this)
}
},
_doProcessBlock: function (e, t) {
var i = this._X;
a.call(this),
n[0] = i[0] ^ i[5] >>> 16 ^ i[3] << 16,
n[1] = i[2] ^ i[7] >>> 16 ^ i[5] << 16,
n[2] = i[4] ^ i[1] >>> 16 ^ i[7] << 16,
n[3] = i[6] ^ i[3] >>> 16 ^ i[1] << 16;
for (var r = 0; r < 4; r++) n[r] = 16711935 & (n[r] << 8 | n[r] >>> 24) | 4278255360 & (n[r] << 24 | n[r] >>> 8),
e[t + r] ^= n[r]
},
blockSize: 4,
ivSize: 2
});
function a() {
for (var e = this._X, t = this._C, n = 0; n < 8; n++) r[n] = t[n];
for (t[0] = t[0] + 1295307597 + this._b | 0, t[1] = t[1] + 3545052371 + (t[0] >>> 0 < r[0] >>> 0 ? 1 : 0) | 0, t[2] = t[2] + 886263092 + (t[1] >>> 0 < r[1] >>> 0 ? 1 : 0) | 0, t[3] = t[3] + 1295307597 + (t[2] >>> 0 < r[2] >>> 0 ? 1 : 0) | 0, t[4] = t[4] + 3545052371 + (t[3] >>> 0 < r[3] >>> 0 ? 1 : 0) | 0, t[5] = t[5] + 886263092 + (t[4] >>> 0 < r[4] >>> 0 ? 1 : 0) | 0, t[6] = t[6] + 1295307597 + (t[5] >>> 0 < r[5] >>> 0 ? 1 : 0) | 0, t[7] = t[7] + 3545052371 + (t[6] >>> 0 < r[6] >>> 0 ? 1 : 0) | 0, this._b = t[7] >>> 0 < r[7] >>> 0 ? 1 : 0, n = 0; n < 8; n++) {
var i = e[n] + t[n],
s = 65535 & i,
a = i >>> 16,
l = ((s * s >>> 17) + s * a >>> 15) + a * a,
u = ((4294901760 & i) * i | 0) + ((65535 & i) * i | 0);
o[n] = l ^ u
}
e[0] = o[0] + (o[7] << 16 | o[7] >>> 16) + (o[6] << 16 | o[6] >>> 16) | 0,
e[1] = o[1] + (o[0] << 8 | o[0] >>> 24) + o[7] | 0,
e[2] = o[2] + (o[1] << 16 | o[1] >>> 16) + (o[0] << 16 | o[0] >>> 16) | 0,
e[3] = o[3] + (o[2] << 8 | o[2] >>> 24) + o[1] | 0,
e[4] = o[4] + (o[3] << 16 | o[3] >>> 16) + (o[2] << 16 | o[2] >>> 16) | 0,
e[5] = o[5] + (o[4] << 8 | o[4] >>> 24) + o[3] | 0,
e[6] = o[6] + (o[5] << 16 | o[5] >>> 16) + (o[4] << 16 | o[4] >>> 16) | 0,
e[7] = o[7] + (o[6] << 8 | o[6] >>> 24) + o[5] | 0
}
e.RabbitLegacy = t._createHelper(s)
}(), i.RabbitLegacy)
},
function (e, t, n) {
var i;
e.exports = (i = n(1), n(15), n(14), n(10), n(4), function () {
var e = i,
t = e.lib.StreamCipher,
n = [
],
r = [
],
o = [
],
s = e.algo.Rabbit = t.extend({
_doReset: function () {
for (var e = this._key.words, t = this.cfg.iv, n = 0; n < 4; n++) e[n] = 16711935 & (e[n] << 8 | e[n] >>> 24) | 4278255360 & (e[n] << 24 | e[n] >>> 8);
var i = this._X = [
e[0],
e[3] << 16 | e[2] >>> 16,
e[1],
e[0] << 16 | e[3] >>> 16,
e[2],
e[1] << 16 | e[0] >>> 16,
e[3],
e[2] << 16 | e[1] >>> 16
],
r = this._C = [
e[2] << 16 | e[2] >>> 16,
4294901760 & e[0] | 65535 & e[1],
e[3] << 16 | e[3] >>> 16,
4294901760 & e[1] | 65535 & e[2],
e[0] << 16 | e[0] >>> 16,
4294901760 & e[2] | 65535 & e[3],
e[1] << 16 | e[1] >>> 16,
4294901760 & e[3] | 65535 & e[0]
];
for (this._b = 0, n = 0; n < 4; n++) a.call(this);
for (n = 0; n < 8; n++) r[n] ^= i[n + 4 & 7];
if (t) {
var o = t.words,
s = o[0],
l = o[1],
u = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8),
c = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8),
h = u >>> 16 | 4294901760 & c,
d = c << 16 | 65535 & u;
for (r[0] ^= u, r[1] ^= h, r[2] ^= c, r[3] ^= d, r[4] ^= u, r[5] ^= h, r[6] ^= c, r[7] ^= d, n = 0; n < 4; n++) a.call(this)
}
},
_doProcessBlock: function (e, t) {
var i = this._X;
a.call(this),
n[0] = i[0] ^ i[5] >>> 16 ^ i[3] << 16,
n[1] = i[2] ^ i[7] >>> 16 ^ i[5] << 16,
n[2] = i[4] ^ i[1] >>> 16 ^ i[7] << 16,
n[3] = i[6] ^ i[3] >>> 16 ^ i[1] << 16;
for (var r = 0; r < 4; r++) n[r] = 16711935 & (n[r] << 8 | n[r] >>> 24) | 4278255360 & (n[r] << 24 | n[r] >>> 8),
e[t + r] ^= n[r]
},
blockSize: 4,
ivSize: 2
});
function a() {
for (var e = this._X, t = this._C, n = 0; n < 8; n++) r[n] = t[n];
for (t[0] = t[0] + 1295307597 + this._b | 0, t[1] = t[1] + 3545052371 + (t[0] >>> 0 < r[0] >>> 0 ? 1 : 0) | 0, t[2] = t[2] + 886263092 + (t[1] >>> 0 < r[1] >>> 0 ? 1 : 0) | 0, t[3] = t[3] + 1295307597 + (t[2] >>> 0 < r[2] >>> 0 ? 1 : 0) | 0, t[4] = t[4] + 3545052371 + (t[3] >>> 0 < r[3] >>> 0 ? 1 : 0) | 0, t[5] = t[5] + 886263092 + (t[4] >>> 0 < r[4] >>> 0 ? 1 : 0) | 0, t[6] = t[6] + 1295307597 + (t[5] >>> 0 < r[5] >>> 0 ? 1 : 0) | 0, t[7] = t[7] + 3545052371 + (t[6] >>> 0 < r[6] >>> 0 ? 1 : 0) | 0, this._b = t[7] >>> 0 < r[7] >>> 0 ? 1 : 0, n = 0; n < 8; n++) {
var i = e[n] + t[n],
s = 65535 & i,
a = i >>> 16,
l = ((s * s >>> 17) + s * a >>> 15) + a * a,
u = ((4294901760 & i) * i | 0) + ((65535 & i) * i | 0);
o[n] = l ^ u
}
e[0] = o[0] + (o[7] << 16 | o[7] >>> 16) + (o[6] << 16 | o[6] >>> 16) | 0,
e[1] = o[1] + (o[0] << 8 | o[0] >>> 24) + o[7] | 0,
e[2] = o[2] + (o[1] << 16 | o[1] >>> 16) + (o[0] << 16 | o[0] >>> 16) | 0,
e[3] = o[3] + (o[2] << 8 | o[2] >>> 24) + o[1] | 0,
e[4] = o[4] + (o[3] << 16 | o[3] >>> 16) + (o[2] << 16 | o[2] >>> 16) | 0,
e[5] = o[5] + (o[4] << 8 | o[4] >>> 24) + o[3] | 0,
e[6] = o[6] + (o[5] << 16 | o[5] >>> 16) + (o[4] << 16 | o[4] >>> 16) | 0,
e[7] = o[7] + (o[6] << 8 | o[6] >>> 24) + o[5] | 0
}
e.Rabbit = t._createHelper(s)
}(), i.Rabbit)
},
function (e, t, n) {
var i;
e.exports = (i = n(1), n(15), n(14), n(10), n(4), function () {
var e = i,
t = e.lib.StreamCipher,
n = e.algo,
r = n.RC4 = t.extend({
_doReset: function () {
for (var e = this._key, t = e.words, n = e.sigBytes, i = this._S = [
], r = 0; r < 256; r++) i[r] = r;
r = 0;
for (var o = 0; r < 256; r++) {
var s = r % n,
a = t[s >>> 2] >>> 24 - s % 4 * 8 & 255;
o = (o + i[r] + a) % 256;
var l = i[r];
i[r] = i[o],
i[o] = l
}
this._i = this._j = 0
},
_doProcessBlock: function (e, t) {
e[t] ^= o.call(this)
},
keySize: 8,
ivSize: 0
});
function o() {
for (var e = this._S, t = this._i, n = this._j, i = 0, r = 0; r < 4; r++) {
n = (n + e[t = (t + 1) % 256]) % 256;
var o = e[t];
e[t] = e[n],
e[n] = o,
i |= e[(e[t] + e[n]) % 256] << 24 - 8 * r
}
return this._i = t,
this._j = n,
i
}
e.RC4 = t._createHelper(r);
var s = n.RC4Drop = r.extend({
cfg: r.cfg.extend({
drop: 192
}),
_doReset: function () {
r._doReset.call(this);
for (var e = this.cfg.drop; e > 0; e--) o.call(this)
}
});
e.RC4Drop = t._createHelper(s)
}(), i.RC4)
},
function (e, t, n) {
var i;
e.exports = (i = n(1), n(15), n(14), n(10), n(4), function () {
var e = i,
t = e.lib,
n = t.WordArray,
r = t.BlockCipher,
o = e.algo,
s = [
57,
49,
41,
33,
25,
17,
9,
1,
58,
50,
42,
34,
26,
18,
10,
2,
59,
51,
43,
35,
27,
19,
11,
3,
60,
52,
44,
36,
63,
55,
47,
39,
31,
23,
15,
7,
62,
54,
46,
38,
30,
22,
14,
6,
61,
53,
45,
37,
29,
21,
13,
5,
28,
20,
12,
4
],
a = [
14,
17,
11,
24,
1,
5,
3,
28,
15,
6,
21,
10,
23,
19,
12,
4,
26,
8,
16,
7,
27,
20,
13,
2,
41,
52,
31,
37,
47,
55,
30,
40,
51,
45,
33,
48,
44,
49,
39,
56,
34,
53,
46,
42,
50,
36,
29,
32
],
l = [
1,
2,
4,
6,
8,
10,
12,
14,
15,
17,
19,
21,
23,
25,
27,
28
],
u = [
{
0: 8421888,
268435456: 32768,
536870912: 8421378,
805306368: 2,
1073741824: 512,
1342177280: 8421890,
1610612736: 8389122,
1879048192: 8388608,
2147483648: 514,
2415919104: 8389120,
2684354560: 33280,
2952790016: 8421376,
3221225472: 32770,
3489660928: 8388610,
3758096384: 0,
4026531840: 33282,
134217728: 0,
402653184: 8421890,
671088640: 33282,
939524096: 32768,
1207959552: 8421888,
1476395008: 512,
1744830464: 8421378,
2013265920: 2,
2281701376: 8389120,
2550136832: 33280,
2818572288: 8421376,
3087007744: 8389122,
3355443200: 8388610,
3623878656: 32770,
3892314112: 514,
4160749568: 8388608,
1: 32768,
268435457: 2,
536870913: 8421888,
805306369: 8388608,
1073741825: 8421378,
1342177281: 33280,
1610612737: 512,
1879048193: 8389122,
2147483649: 8421890,
2415919105: 8421376,
2684354561: 8388610,
2952790017: 33282,
3221225473: 514,
3489660929: 8389120,
3758096385: 32770,
4026531841: 0,
134217729: 8421890,
402653185: 8421376,
671088641: 8388608,
939524097: 512,
1207959553: 32768,
1476395009: 8388610,
1744830465: 2,
2013265921: 33282,
2281701377: 32770,
2550136833: 8389122,
2818572289: 514,
3087007745: 8421888,
3355443201: 8389120,
3623878657: 0,
3892314113: 33280,
4160749569: 8421378
},
{
0: 1074282512,
16777216: 16384,
33554432: 524288,
50331648: 1074266128,
67108864: 1073741840,
83886080: 1074282496,
100663296: 1073758208,
117440512: 16,
134217728: 540672,
150994944: 1073758224,
167772160: 1073741824,
184549376: 540688,
201326592: 524304,
218103808: 0,
234881024: 16400,
251658240: 1074266112,
8388608: 1073758208,
25165824: 540688,
41943040: 16,
58720256: 1073758224,
75497472: 1074282512,
92274688: 1073741824,
109051904: 524288,
125829120: 1074266128,
142606336: 524304,
159383552: 0,
176160768: 16384,
192937984: 1074266112,
209715200: 1073741840,
226492416: 540672,
243269632: 1074282496,
260046848: 16400,
268435456: 0,
285212672: 1074266128,
301989888: 1073758224,
318767104: 1074282496,
335544320: 1074266112,
352321536: 16,
369098752: 540688,
385875968: 16384,
402653184: 16400,
419430400: 524288,
436207616: 524304,
452984832: 1073741840,
469762048: 540672,
486539264: 1073758208,
503316480: 1073741824,
520093696: 1074282512,
276824064: 540688,
293601280: 524288,
310378496: 1074266112,
327155712: 16384,
343932928: 1073758208,
360710144: 1074282512,
377487360: 16,
394264576: 1073741824,
411041792: 1074282496,
427819008: 1073741840,
444596224: 1073758224,
461373440: 524304,
478150656: 0,
494927872: 16400,
511705088: 1074266128,
528482304: 540672
},
{
0: 260,
1048576: 0,
2097152: 67109120,
3145728: 65796,
4194304: 65540,
5242880: 67108868,
6291456: 67174660,
7340032: 67174400,
8388608: 67108864,
9437184: 67174656,
10485760: 65792,
11534336: 67174404,
12582912: 67109124,
13631488: 65536,
14680064: 4,
15728640: 256,
524288: 67174656,
1572864: 67174404,
2621440: 0,
3670016: 67109120,
4718592: 67108868,
5767168: 65536,
6815744: 65540,
7864320: 260,
8912896: 4,
9961472: 256,
11010048: 67174400,
12058624: 65796,
13107200: 65792,
14155776: 67109124,
15204352: 67174660,
16252928: 67108864,
16777216: 67174656,
17825792: 65540,
18874368: 65536,
19922944: 67109120,
20971520: 256,
22020096: 67174660,
23068672: 67108868,
24117248: 0,
25165824: 67109124,
26214400: 67108864,
27262976: 4,
28311552: 65792,
29360128: 67174400,
30408704: 260,
31457280: 65796,
32505856: 67174404,
17301504: 67108864,
18350080: 260,
19398656: 67174656,
20447232: 0,
21495808: 65540,
22544384: 67109120,
23592960: 256,
24641536: 67174404,
25690112: 65536,
26738688: 67174660,
27787264: 65796,
28835840: 67108868,
29884416: 67109124,
30932992: 67174400,
31981568: 4,
33030144: 65792
},
{
0: 2151682048,
65536: 2147487808,
131072: 4198464,
196608: 2151677952,
262144: 0,
327680: 4198400,
393216: 2147483712,
458752: 4194368,
524288: 2147483648,
589824: 4194304,
655360: 64,
720896: 2147487744,
786432: 2151678016,
851968: 4160,
917504: 4096,
983040: 2151682112,
32768: 2147487808,
98304: 64,
163840: 2151678016,
229376: 2147487744,
294912: 4198400,
360448: 2151682112,
425984: 0,
491520: 2151677952,
557056: 4096,
622592: 2151682048,
688128: 4194304,
753664: 4160,
819200: 2147483648,
884736: 4194368,
950272: 4198464,
1015808: 2147483712,
1048576: 4194368,
1114112: 4198400,
1179648: 2147483712,
1245184: 0,
1310720: 4160,
1376256: 2151678016,
1441792: 2151682048,
1507328: 2147487808,
1572864: 2151682112,
1638400: 2147483648,
1703936: 2151677952,
1769472: 4198464,
1835008: 2147487744,
1900544: 4194304,
1966080: 64,
2031616: 4096,
1081344: 2151677952,
1146880: 2151682112,
1212416: 0,
1277952: 4198400,
1343488: 4194368,
1409024: 2147483648,
1474560: 2147487808,
1540096: 64,
1605632: 2147483712,
1671168: 4096,
1736704: 2147487744,
1802240: 2151678016,
1867776: 4160,
1933312: 2151682048,
1998848: 4194304,
2064384: 4198464
},
{
0: 128,
4096: 17039360,
8192: 262144,
12288: 536870912,
16384: 537133184,
20480: 16777344,
24576: 553648256,
28672: 262272,
32768: 16777216,
36864: 537133056,
40960: 536871040,
45056: 553910400,
49152: 553910272,
53248: 0,
57344: 17039488,
61440: 553648128,
2048: 17039488,
6144: 553648256,
10240: 128,
14336: 17039360,
18432: 262144,
22528: 537133184,
26624: 553910272,
30720: 536870912,
34816: 537133056,
38912: 0,
43008: 553910400,
47104: 16777344,
51200: 536871040,
55296: 553648128,
59392: 16777216,
63488: 262272,
65536: 262144,
69632: 128,
73728: 536870912,
77824: 553648256,
81920: 16777344,
86016: 553910272,
90112: 537133184,
94208: 16777216,
98304: 553910400,
102400: 553648128,
106496: 17039360,
110592: 537133056,
114688: 262272,
118784: 536871040,
122880: 0,
126976: 17039488,
67584: 553648256,
71680: 16777216,
75776: 17039360,
79872: 537133184,
83968: 536870912,
88064: 17039488,
92160: 128,
96256: 553910272,
100352: 262272,
104448: 553910400,
108544: 0,
112640: 553648128,
116736: 16777344,
120832: 262144,
124928: 537133056,
129024: 536871040
},
{
0: 268435464,
256: 8192,
512: 270532608,
768: 270540808,
1024: 268443648,
1280: 2097152,
1536: 2097160,
1792: 268435456,
2048: 0,
2304: 268443656,
2560: 2105344,
2816: 8,
3072: 270532616,
3328: 2105352,
3584: 8200,
3840: 270540800,
128: 270532608,
384: 270540808,
640: 8,
896: 2097152,
1152: 2105352,
1408: 268435464,
1664: 268443648,
1920: 8200,
2176: 2097160,
2432: 8192,
2688: 268443656,
2944: 270532616,
3200: 0,
3456: 270540800,
3712: 2105344,
3968: 268435456,
4096: 268443648,
4352: 270532616,
4608: 270540808,
4864: 8200,
5120: 2097152,
5376: 268435456,
5632: 268435464,
5888: 2105344,
6144: 2105352,
6400: 0,
6656: 8,
6912: 270532608,
7168: 8192,
7424: 268443656,
7680: 270540800,
7936: 2097160,
4224: 8,
4480: 2105344,
4736: 2097152,
4992: 268435464,
5248: 268443648,
5504: 8200,
5760: 270540808,
6016: 270532608,
6272: 270540800,
6528: 270532616,
6784: 8192,
7040: 2105352,
7296: 2097160,
7552: 0,
7808: 268435456,
8064: 268443656
},
{
0: 1048576,
16: 33555457,
32: 1024,
48: 1049601,
64: 34604033,
80: 0,
96: 1,
112: 34603009,
128: 33555456,
144: 1048577,
160: 33554433,
176: 34604032,
192: 34603008,
208: 1025,
224: 1049600,
240: 33554432,
8: 34603009,
24: 0,
40: 33555457,
56: 34604032,
72: 1048576,
88: 33554433,
104: 33554432,
120: 1025,
136: 1049601,
152: 33555456,
168: 34603008,
184: 1048577,
200: 1024,
216: 34604033,
232: 1,
248: 1049600,
256: 33554432,
272: 1048576,
288: 33555457,
304: 34603009,
320: 1048577,
336: 33555456,
352: 34604032,
368: 1049601,
384: 1025,
400: 34604033,
416: 1049600,
432: 1,
448: 0,
464: 34603008,
480: 33554433,
496: 1024,
264: 1049600,
280: 33555457,
296: 34603009,
312: 1,
328: 33554432,
344: 1048576,
360: 1025,
376: 34604032,
392: 33554433,
408: 34603008,
424: 0,
440: 34604033,
456: 1049601,
472: 1024,
488: 33555456,
504: 1048577
},
{
0: 134219808,
1: 131072,
2: 134217728,
3: 32,
4: 131104,
5: 134350880,
6: 134350848,
7: 2048,
8: 134348800,
9: 134219776,
10: 133120,
11: 134348832,
12: 2080,
13: 0,
14: 134217760,
15: 133152,
2147483648: 2048,
2147483649: 134350880,
2147483650: 134219808,
2147483651: 134217728,
2147483652: 134348800,
2147483653: 133120,
2147483654: 133152,
2147483655: 32,
2147483656: 134217760,
2147483657: 2080,
2147483658: 131104,
2147483659: 134350848,
2147483660: 0,
2147483661: 134348832,
2147483662: 134219776,
2147483663: 131072,
16: 133152,
17: 134350848,
18: 32,
19: 2048,
20: 134219776,
21: 134217760,
22: 134348832,
23: 131072,
24: 0,
25: 131104,
26: 134348800,
27: 134219808,
28: 134350880,
29: 133120,
30: 2080,
31: 134217728,
2147483664: 131072,
2147483665: 2048,
2147483666: 134348832,
2147483667: 133152,
2147483668: 32,
2147483669: 134348800,
2147483670: 134217728,
2147483671: 134219808,
2147483672: 134350880,
2147483673: 134217760,
2147483674: 134219776,
2147483675: 0,
2147483676: 133120,
2147483677: 2080,
2147483678: 131104,
2147483679: 134350848
}
],
c = [
4160749569,
528482304,
33030144,
2064384,
129024,
8064,
504,
2147483679
],
h = o.DES = r.extend({
_doReset: function () {
for (var e = this._key.words, t = [
], n = 0; n < 56; n++) {
var i = s[n] - 1;
t[n] = e[i >>> 5] >>> 31 - i % 32 & 1
}
for (var r = this._subKeys = [
], o = 0; o < 16; o++) {
var u = r[o] = [
],
c = l[o];
for (n = 0; n < 24; n++) u[n / 6 | 0] |= t[(a[n] - 1 + c) % 28] << 31 - n % 6,
u[4 + (n / 6 | 0)] |= t[28 + (a[n + 24] - 1 + c) % 28] << 31 - n % 6;
for (u[0] = u[0] << 1 | u[0] >>> 31, n = 1; n < 7; n++) u[n] = u[n] >>> 4 * (n - 1) + 3;
u[7] = u[7] << 5 | u[7] >>> 27
}
var h = this._invSubKeys = [
];
for (n = 0; n < 16; n++) h[n] = r[15 - n]
},
encryptBlock: function (e, t) {
this._doCryptBlock(e, t, this._subKeys)
},
decryptBlock: function (e, t) {
this._doCryptBlock(e, t, this._invSubKeys)
},
_doCryptBlock: function (e, t, n) {
this._lBlock = e[t],
this._rBlock = e[t + 1],
d.call(this, 4, 252645135),
d.call(this, 16, 65535),
f.call(this, 2, 858993459),
f.call(this, 8, 16711935),
d.call(this, 1, 1431655765);
for (var i = 0; i < 16; i++) {
for (var r = n[i], o = this._lBlock, s = this._rBlock, a = 0, l = 0; l < 8; l++) a |= u[l][((s ^ r[l]) & c[l]) >>> 0];
this._lBlock = s,
this._rBlock = o ^ a
}
var h = this._lBlock;
this._lBlock = this._rBlock,
this._rBlock = h,
d.call(this, 1, 1431655765),
f.call(this, 8, 16711935),
f.call(this, 2, 858993459),
d.call(this, 16, 65535),
d.call(this, 4, 252645135),
e[t] = this._lBlock,
e[t + 1] = this._rBlock
},
keySize: 2,
ivSize: 2,
blockSize: 2
});
function d(e, t) {
var n = (this._lBlock >>> e ^ this._rBlock) & t;
this._rBlock ^= n,
this._lBlock ^= n << e
}
function f(e, t) {
var n = (this._rBlock >>> e ^ this._lBlock) & t;
this._lBlock ^= n,
this._rBlock ^= n << e
}
e.DES = r._createHelper(h);
var p = o.TripleDES = r.extend({
_doReset: function () {
var e = this._key.words;
this._des1 = h.createEncryptor(n.create(e.slice(0, 2))),
this._des2 = h.createEncryptor(n.create(e.slice(2, 4))),
this._des3 = h.createEncryptor(n.create(e.slice(4, 6)))
},
encryptBlock: function (e, t) {
this._des1.encryptBlock(e, t),
this._des2.decryptBlock(e, t),
this._des3.encryptBlock(e, t)
},
decryptBlock: function (e, t) {
this._des3.decryptBlock(e, t),
this._des2.encryptBlock(e, t),
this._des1.decryptBlock(e, t)
},
keySize: 6,
ivSize: 2,
blockSize: 2
});
e.TripleDES = r._createHelper(p)
}(), i.TripleDES)
},
function (e, t, n) {
var i;
e.exports = (i = n(1), n(15), n(14), n(10), n(4), function () {
var e = i,
t = e.lib.BlockCipher,
n = e.algo,
r = [
],
o = [
],
s = [
],
a = [
],
l = [
],
u = [
],
c = [
],
h = [
],
d = [
],
f = [
];
!function () {
for (var e = [
], t = 0; t < 256; t++) e[t] = t < 128 ? t << 1 : t << 1 ^ 283;
var n = 0,
i = 0;
for (t = 0; t < 256; t++) {
var p = i ^ i << 1 ^ i << 2 ^ i << 3 ^ i << 4;
p = p >>> 8 ^ 255 & p ^ 99,
r[n] = p,
o[p] = n;
var v = e[n],
g = e[v],
m = e[g],
A = 257 * e[p] ^ 16843008 * p;
s[n] = A << 24 | A >>> 8,
a[n] = A << 16 | A >>> 16,
l[n] = A << 8 | A >>> 24,
u[n] = A,
A = 16843009 * m ^ 65537 * g ^ 257 * v ^ 16843008 * n,
c[p] = A << 24 | A >>> 8,
h[p] = A << 16 | A >>> 16,
d[p] = A << 8 | A >>> 24,
f[p] = A,
n ? (n = v ^ e[e[e[m ^ v]]], i ^= e[e[i]])  : n = i = 1
}
}();
var p = [
0,
1,
2,
4,
8,
16,
32,
64,
128,
27,
54
],
v = n.AES = t.extend({
_doReset: function () {
if (!this._nRounds || this._keyPriorReset !== this._key) {
for (var e = this._keyPriorReset = this._key, t = e.words, n = e.sigBytes / 4, i = 4 * ((this._nRounds = n + 6) + 1), o = this._keySchedule = [
], s = 0; s < i; s++) if (s < n) o[s] = t[s];
 else {
var a = o[s - 1];
s % n ? n > 6 && s % n == 4 && (a = r[a >>> 24] << 24 | r[a >>> 16 & 255] << 16 | r[a >>> 8 & 255] << 8 | r[255 & a])  : (a = r[(a = a << 8 | a >>> 24) >>> 24] << 24 | r[a >>> 16 & 255] << 16 | r[a >>> 8 & 255] << 8 | r[255 & a], a ^= p[s / n | 0] << 24),
o[s] = o[s - n] ^ a
}
for (var l = this._invKeySchedule = [
], u = 0; u < i; u++) s = i - u,
a = u % 4 ? o[s] : o[s - 4],
l[u] = u < 4 || s <= 4 ? a : c[r[a >>> 24]] ^ h[r[a >>> 16 & 255]] ^ d[r[a >>> 8 & 255]] ^ f[r[255 & a]]
}
},
encryptBlock: function (e, t) {
this._doCryptBlock(e, t, this._keySchedule, s, a, l, u, r)
},
decryptBlock: function (e, t) {
var n = e[t + 1];
e[t + 1] = e[t + 3],
e[t + 3] = n,
this._doCryptBlock(e, t, this._invKeySchedule, c, h, d, f, o),
n = e[t + 1],
e[t + 1] = e[t + 3],
e[t + 3] = n
},
_doCryptBlock: function (e, t, n, i, r, o, s, a) {
for (var l = this._nRounds, u = e[t] ^ n[0], c = e[t + 1] ^ n[1], h = e[t + 2] ^ n[2], d = e[t + 3] ^ n[3], f = 4, p = 1; p < l; p++) {
var v = i[u >>> 24] ^ r[c >>> 16 & 255] ^ o[h >>> 8 & 255] ^ s[255 & d] ^ n[f++],
g = i[c >>> 24] ^ r[h >>> 16 & 255] ^ o[d >>> 8 & 255] ^ s[255 & u] ^ n[f++],
m = i[h >>> 24] ^ r[d >>> 16 & 255] ^ o[u >>> 8 & 255] ^ s[255 & c] ^ n[f++],
A = i[d >>> 24] ^ r[u >>> 16 & 255] ^ o[c >>> 8 & 255] ^ s[255 & h] ^ n[f++];
u = v,
c = g,
h = m,
d = A
}
v = (a[u >>> 24] << 24 | a[c >>> 16 & 255] << 16 | a[h >>> 8 & 255] << 8 | a[255 & d]) ^ n[f++],
g = (a[c >>> 24] << 24 | a[h >>> 16 & 255] << 16 | a[d >>> 8 & 255] << 8 | a[255 & u]) ^ n[f++],
m = (a[h >>> 24] << 24 | a[d >>> 16 & 255] << 16 | a[u >>> 8 & 255] << 8 | a[255 & c]) ^ n[f++],
A = (a[d >>> 24] << 24 | a[u >>> 16 & 255] << 16 | a[c >>> 8 & 255] << 8 | a[255 & h]) ^ n[f++],
e[t] = v,
e[t + 1] = g,
e[t + 2] = m,
e[t + 3] = A
},
keySize: 8
});
e.AES = t._createHelper(v)
}(), i.AES)
},
function (e, t, n) {
var i,
r,
o,
s;
e.exports = (i = n(1), n(4), o = (r = i).lib.CipherParams, s = r.enc.Hex, r.format.Hex = {
stringify: function (e) {
return e.ciphertext.toString(s)
},
parse: function (e) {
var t = s.parse(e);
return o.create({
ciphertext: t
})
}
}, i.format.Hex)
},
function (e, t, n) {
var i;
e.exports = (i = n(1), n(4), i.pad.NoPadding = {
pad: function () {
},
unpad: function () {
}
}, i.pad.NoPadding)
},
function (e, t, n) {
var i;
e.exports = (i = n(1), n(4), i.pad.ZeroPadding = {
pad: function (e, t) {
var n = 4 * t;
e.clamp(),
e.sigBytes += n - (e.sigBytes % n || n)
},
unpad: function (e) {
for (var t = e.words, n = e.sigBytes - 1; !(t[n >>> 2] >>> 24 - n % 4 * 8 & 255); ) n--;
e.sigBytes = n + 1
}
}, i.pad.ZeroPadding)
},
function (e, t, n) {
var i;
e.exports = (i = n(1), n(4), i.pad.Iso97971 = {
pad: function (e, t) {
e.concat(i.lib.WordArray.create([2147483648], 1)),
i.pad.ZeroPadding.pad(e, t)
},
unpad: function (e) {
i.pad.ZeroPadding.unpad(e),
e.sigBytes--
}
}, i.pad.Iso97971)
},
function (e, t, n) {
var i;
e.exports = (i = n(1), n(4), i.pad.Iso10126 = {
pad: function (e, t) {
var n = 4 * t,
r = n - e.sigBytes % n;
e.concat(i.lib.WordArray.random(r - 1)).concat(i.lib.WordArray.create([r << 24], 1))
},
unpad: function (e) {
var t = 255 & e.words[e.sigBytes - 1 >>> 2];
e.sigBytes -= t
}
}, i.pad.Iso10126)
},
function (e, t, n) {
var i;
e.exports = (i = n(1), n(4), i.pad.AnsiX923 = {
pad: function (e, t) {
var n = e.sigBytes,
i = 4 * t,
r = i - n % i,
o = n + r - 1;
e.clamp(),
e.words[o >>> 2] |= r << 24 - o % 4 * 8,
e.sigBytes += r
},
unpad: function (e) {
var t = 255 & e.words[e.sigBytes - 1 >>> 2];
e.sigBytes -= t
}
}, i.pad.Ansix923)
},
function (e, t, n) {
var i,
r;
e.exports = (i = n(1), n(4), i.mode.ECB = ((r = i.lib.BlockCipherMode.extend()).Encryptor = r.extend({
processBlock: function (e, t) {
this._cipher.encryptBlock(e, t)
}
}), r.Decryptor = r.extend({
processBlock: function (e, t) {
this._cipher.decryptBlock(e, t)
}
}), r), i.mode.ECB)
},
function (e, t, n) {
var i,
r,
o;
e.exports = (i = n(1), n(4), i.mode.OFB = (r = i.lib.BlockCipherMode.extend(), o = r.Encryptor = r.extend({
processBlock: function (e, t) {
var n = this._cipher,
i = n.blockSize,
r = this._iv,
o = this._keystream;
r && (o = this._keystream = r.slice(0), this._iv = void 0),
n.encryptBlock(o, 0);
for (var s = 0; s < i; s++) e[t + s] ^= o[s]
}
}), r.Decryptor = o, r), i.mode.OFB)
},
function (e, t, n) {
var i;
e.exports = (i = n(1), n(4), i.mode.CTRGladman = function () {
var e = i.lib.BlockCipherMode.extend();
function t(e) {
if (255 == (e >> 24 & 255)) {
var t = e >> 16 & 255,
n = e >> 8 & 255,
i = 255 & e;
255 === t ? (t = 0, 255 === n ? (n = 0, 255 === i ? i = 0 : ++i)  : ++n)  : ++t,
e = 0,
e += t << 16,
e += n << 8,
e += i
} else e += 1 << 24;
return e
}
var n = e.Encryptor = e.extend({
processBlock: function (e, n) {
var i = this._cipher,
r = i.blockSize,
o = this._iv,
s = this._counter;
o && (s = this._counter = o.slice(0), this._iv = void 0),
function (e) {
0 === (e[0] = t(e[0])) && (e[1] = t(e[1]))
}(s);
var a = s.slice(0);
i.encryptBlock(a, 0);
for (var l = 0; l < r; l++) e[n + l] ^= a[l]
}
});
return e.Decryptor = n,
e
}(), i.mode.CTRGladman)
},
function (e, t, n) {
var i,
r,
o;
e.exports = (i = n(1), n(4), i.mode.CTR = (r = i.lib.BlockCipherMode.extend(), o = r.Encryptor = r.extend({
processBlock: function (e, t) {
var n = this._cipher,
i = n.blockSize,
r = this._iv,
o = this._counter;
r && (o = this._counter = r.slice(0), this._iv = void 0);
var s = o.slice(0);
n.encryptBlock(s, 0),
o[i - 1] = o[i - 1] + 1 | 0;
for (var a = 0; a < i; a++) e[t + a] ^= s[a]
}
}), r.Decryptor = o, r), i.mode.CTR)
},
function (e, t, n) {
var i;
e.exports = (i = n(1), n(4), i.mode.CFB = function () {
var e = i.lib.BlockCipherMode.extend();
function t(e, t, n, i) {
var r = this._iv;
if (r) {
var o = r.slice(0);
this._iv = void 0
} else o = this._prevBlock;
i.encryptBlock(o, 0);
for (var s = 0; s < n; s++) e[t + s] ^= o[s]
}
return e.Encryptor = e.extend({
processBlock: function (e, n) {
var i = this._cipher,
r = i.blockSize;
t.call(this, e, n, r, i),
this._prevBlock = e.slice(n, n + r)
}
}),
e.Decryptor = e.extend({
processBlock: function (e, n) {
var i = this._cipher,
r = i.blockSize,
o = e.slice(n, n + r);
t.call(this, e, n, r, i),
this._prevBlock = o
}
}),
e
}(), i.mode.CFB)
},
function (e, t, n) {
var i,
r,
o,
s,
a,
l,
u,
c,
h;
e.exports = (i = n(1), n(38), n(37), o = (r = i).lib, s = o.Base, a = o.WordArray, l = r.algo, u = l.SHA1, c = l.HMAC, h = l.PBKDF2 = s.extend({
cfg: s.extend({
keySize: 4,
hasher: u,
iterations: 1
}),
init: function (e) {
this.cfg = this.cfg.extend(e)
},
compute: function (e, t) {
for (var n = this.cfg, i = c.create(n.hasher, e), r = a.create(), o = a.create([1]), s = r.words, l = o.words, u = n.keySize, h = n.iterations; s.length < u; ) {
var d = i.update(t).finalize(o);
i.reset();
for (var f = d.words, p = f.length, v = d, g = 1; g < h; g++) {
v = i.finalize(v),
i.reset();
for (var m = v.words, A = 0; A < p; A++) f[A] ^= m[A]
}
r.concat(d),
l[0]++
}
return r.sigBytes = 4 * u,
r
}
}), r.PBKDF2 = function (e, t, n) {
return h.create(n).compute(e, t)
}, i.PBKDF2)
},
function (e, t, n) {
var i;
e.exports = (i = n(1), function (e) {
var t = i,
n = t.lib,
r = n.WordArray,
o = n.Hasher,
s = t.algo,
a = r.create([0,
1,
2,
3,
4,
5,
6,
7,
8,
9,
10,
11,
12,
13,
14,
15,
7,
4,
13,
1,
10,
6,
15,
3,
12,
0,
9,
5,
2,
14,
11,
8,
3,
10,
14,
4,
9,
15,
8,
1,
2,
7,
0,
6,
13,
11,
5,
12,
1,
9,
11,
10,
0,
8,
12,
4,
13,
3,
7,
15,
14,
5,
6,
2,
4,
0,
5,
9,
7,
12,
2,
10,
14,
1,
3,
8,
11,
6,
15,
13]),
l = r.create([5,
14,
7,
0,
9,
2,
11,
4,
13,
6,
15,
8,
1,
10,
3,
12,
6,
11,
3,
7,
0,
13,
5,
10,
14,
15,
8,
12,
4,
9,
1,
2,
15,
5,
1,
3,
7,
14,
6,
9,
11,
8,
12,
2,
10,
0,
4,
13,
8,
6,
4,
1,
3,
11,
15,
0,
5,
12,
2,
13,
9,
7,
10,
14,
12,
15,
10,
4,
1,
5,
8,
7,
6,
2,
13,
14,
0,
3,
9,
11]),
u = r.create([11,
14,
15,
12,
5,
8,
7,
9,
11,
13,
14,
15,
6,
7,
9,
8,
7,
6,
8,
13,
11,
9,
7,
15,
7,
12,
15,
9,
11,
7,
13,
12,
11,
13,
6,
7,
14,
9,
13,
15,
14,
8,
13,
6,
5,
12,
7,
5,
11,
12,
14,
15,
14,
15,
9,
8,
9,
14,
5,
6,
8,
6,
5,
12,
9,
15,
5,
11,
6,
8,
13,
12,
5,
12,
13,
14,
11,
8,
5,
6]),
c = r.create([8,
9,
9,
11,
13,
15,
15,
5,
7,
7,
8,
11,
14,
14,
12,
6,
9,
13,
15,
7,
12,
8,
9,
11,
7,
7,
12,
7,
6,
15,
13,
11,
9,
7,
15,
11,
8,
6,
6,
14,
12,
13,
5,
14,
13,
13,
7,
5,
15,
5,
8,
11,
14,
14,
6,
14,
6,
9,
12,
9,
12,
5,
15,
8,
8,
5,
12,
9,
12,
5,
14,
6,
8,
13,
6,
5,
15,
13,
11,
11]),
h = r.create([0,
1518500249,
1859775393,
2400959708,
2840853838]),
d = r.create([1352829926,
1548603684,
1836072691,
2053994217,
0]),
f = s.RIPEMD160 = o.extend({
_doReset: function () {
this._hash = r.create([1732584193,
4023233417,
2562383102,
271733878,
3285377520])
},
_doProcessBlock: function (e, t) {
for (var n = 0; n < 16; n++) {
var i = t + n,
r = e[i];
e[i] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8)
}
var o,
s,
f,
b,
_,
w,
T,
k,
E,
S,
j,
C = this._hash.words,
x = h.words,
B = d.words,
O = a.words,
I = l.words,
P = u.words,
R = c.words;
for (w = o = C[0], T = s = C[1], k = f = C[2], E = b = C[3], S = _ = C[4], n = 0; n < 80; n += 1) j = o + e[t + O[n]] | 0,
j += n < 16 ? p(s, f, b) + x[0] : n < 32 ? v(s, f, b) + x[1] : n < 48 ? g(s, f, b) + x[2] : n < 64 ? m(s, f, b) + x[3] : A(s, f, b) + x[4],
j = (j = y(j |= 0, P[n])) + _ | 0,
o = _,
_ = b,
b = y(f, 10),
f = s,
s = j,
j = w + e[t + I[n]] | 0,
j += n < 16 ? A(T, k, E) + B[0] : n < 32 ? m(T, k, E) + B[1] : n < 48 ? g(T, k, E) + B[2] : n < 64 ? v(T, k, E) + B[3] : p(T, k, E) + B[4],
j = (j = y(j |= 0, R[n])) + S | 0,
w = S,
S = E,
E = y(k, 10),
k = T,
T = j;
j = C[1] + f + E | 0,
C[1] = C[2] + b + S | 0,
C[2] = C[3] + _ + w | 0,
C[3] = C[4] + o + T | 0,
C[4] = C[0] + s + k | 0,
C[0] = j
},
_doFinalize: function () {
var e = this._data,
t = e.words,
n = 8 * this._nDataBytes,
i = 8 * e.sigBytes;
t[i >>> 5] |= 128 << 24 - i % 32,
t[14 + (i + 64 >>> 9 << 4)] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8),
e.sigBytes = 4 * (t.length + 1),
this._process();
for (var r = this._hash, o = r.words, s = 0; s < 5; s++) {
var a = o[s];
o[s] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8)
}
return r
},
clone: function () {
var e = o.clone.call(this);
return e._hash = this._hash.clone(),
e
}
});
function p(e, t, n) {
return e ^ t ^ n
}
function v(e, t, n) {
return e & t | ~e & n
}
function g(e, t, n) {
return (e | ~t) ^ n
}
function m(e, t, n) {
return e & n | t & ~n
}
function A(e, t, n) {
return e ^ (t | ~n)
}
function y(e, t) {
return e << t | e >>> 32 - t
}
t.RIPEMD160 = o._createHelper(f),
t.HmacRIPEMD160 = o._createHmacHelper(f)
}(Math), i.RIPEMD160)
},
function (e, t, n) {
var i;
e.exports = (i = n(1), n(26), function (e) {
var t = i,
n = t.lib,
r = n.WordArray,
o = n.Hasher,
s = t.x64.Word,
a = t.algo,
l = [
],
u = [
],
c = [
];
!function () {
for (var e = 1, t = 0, n = 0; n < 24; n++) {
l[e + 5 * t] = (n + 1) * (n + 2) / 2 % 64;
var i = (2 * e + 3 * t) % 5;
e = t % 5,
t = i
}
for (e = 0; e < 5; e++) for (t = 0; t < 5; t++) u[e + 5 * t] = t + (2 * e + 3 * t) % 5 * 5;
for (var r = 1, o = 0; o < 24; o++) {
for (var a = 0, h = 0, d = 0; d < 7; d++) {
if (1 & r) {
var f = (1 << d) - 1;
f < 32 ? h ^= 1 << f : a ^= 1 << f - 32
}
128 & r ? r = r << 1 ^ 113 : r <<= 1
}
c[o] = s.create(a, h)
}
}();
var h = [
];
!function () {
for (var e = 0; e < 25; e++) h[e] = s.create()
}();
var d = a.SHA3 = o.extend({
cfg: o.cfg.extend({
outputLength: 512
}),
_doReset: function () {
for (var e = this._state = [
], t = 0; t < 25; t++) e[t] = new s.init;
this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32
},
_doProcessBlock: function (e, t) {
for (var n = this._state, i = this.blockSize / 2, r = 0; r < i; r++) {
var o = e[t + 2 * r],
s = e[t + 2 * r + 1];
o = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8),
s = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8),
(C = n[r]).high ^= s,
C.low ^= o
}
for (var a = 0; a < 24; a++) {
for (var d = 0; d < 5; d++) {
for (var f = 0, p = 0, v = 0; v < 5; v++) f ^= (C = n[d + 5 * v]).high,
p ^= C.low;
var g = h[d];
g.high = f,
g.low = p
}
for (d = 0; d < 5; d++) {
var m = h[(d + 4) % 5],
A = h[(d + 1) % 5],
y = A.high,
b = A.low;
for (f = m.high ^ (y << 1 | b >>> 31), p = m.low ^ (b << 1 | y >>> 31), v = 0; v < 5; v++) (C = n[d + 5 * v]).high ^= f,
C.low ^= p
}
for (var _ = 1; _ < 25; _++) {
var w = (C = n[_]).high,
T = C.low,
k = l[_];
k < 32 ? (f = w << k | T >>> 32 - k, p = T << k | w >>> 32 - k)  : (f = T << k - 32 | w >>> 64 - k, p = w << k - 32 | T >>> 64 - k);
var E = h[u[_]];
E.high = f,
E.low = p
}
var S = h[0],
j = n[0];
for (S.high = j.high, S.low = j.low, d = 0; d < 5; d++) for (v = 0; v < 5; v++) {
var C = n[_ = d + 5 * v],
x = h[_],
B = h[(d + 1) % 5 + 5 * v],
O = h[(d + 2) % 5 + 5 * v];
C.high = x.high ^ ~B.high & O.high,
C.low = x.low ^ ~B.low & O.low
}
C = n[0];
var I = c[a];
C.high ^= I.high,
C.low ^= I.low
}
},
_doFinalize: function () {
var t = this._data,
n = t.words,
i = (this._nDataBytes, 8 * t.sigBytes),
o = 32 * this.blockSize;
n[i >>> 5] |= 1 << 24 - i % 32,
n[(e.ceil((i + 1) / o) * o >>> 5) - 1] |= 128,
t.sigBytes = 4 * n.length,
this._process();
for (var s = this._state, a = this.cfg.outputLength / 8, l = a / 8, u = [
], c = 0; c < l; c++) {
var h = s[c],
d = h.high,
f = h.low;
d = 16711935 & (d << 8 | d >>> 24) | 4278255360 & (d << 24 | d >>> 8),
f = 16711935 & (f << 8 | f >>> 24) | 4278255360 & (f << 24 | f >>> 8),
u.push(f),
u.push(d)
}
return new r.init(u, a)
},
clone: function () {
for (var e = o.clone.call(this), t = e._state = this._state.slice(0), n = 0; n < 25; n++) t[n] = t[n].clone();
return e
}
});
t.SHA3 = o._createHelper(d),
t.HmacSHA3 = o._createHmacHelper(d)
}(Math), i.SHA3)
},
function (e, t, n) {
var i,
r,
o,
s,
a,
l,
u,
c;
e.exports = (i = n(1), n(26), n(68), o = (r = i).x64, s = o.Word, a = o.WordArray, l = r.algo, u = l.SHA512, c = l.SHA384 = u.extend({
_doReset: function () {
this._hash = new a.init([new s.init(3418070365, 3238371032),
new s.init(1654270250, 914150663),
new s.init(2438529370, 812702999),
new s.init(355462360, 4144912697),
new s.init(1731405415, 4290775857),
new s.init(2394180231, 1750603025),
new s.init(3675008525, 1694076839),
new s.init(1203062813, 3204075428)])
},
_doFinalize: function () {
var e = u._doFinalize.call(this);
return e.sigBytes -= 16,
e
}
}), r.SHA384 = u._createHelper(c), r.HmacSHA384 = u._createHmacHelper(c), i.SHA384)
},
function (e, t, n) {
var i,
r,
o,
s,
a,
l;
e.exports = (i = n(1), n(69), o = (r = i).lib.WordArray, s = r.algo, a = s.SHA256, l = s.SHA224 = a.extend({
_doReset: function () {
this._hash = new o.init([3238371032,
914150663,
812702999,
4144912697,
4290775857,
1750603025,
1694076839,
3204075428])
},
_doFinalize: function () {
var e = a._doFinalize.call(this);
return e.sigBytes -= 4,
e
}
}), r.SHA224 = a._createHelper(l), r.HmacSHA224 = a._createHmacHelper(l), i.SHA224)
},
function (e, t, n) {
var i;
e.exports = (i = n(1), function () {
var e = i,
t = e.lib.WordArray,
n = e.enc;
function r(e) {
return e << 8 & 4278255360 | e >>> 8 & 16711935
}
n.Utf16 = n.Utf16BE = {
stringify: function (e) {
for (var t = e.words, n = e.sigBytes, i = [
], r = 0; r < n; r += 2) {
var o = t[r >>> 2] >>> 16 - r % 4 * 8 & 65535;
i.push(String.fromCharCode(o))
}
return i.join('')
},
parse: function (e) {
for (var n = e.length, i = [
], r = 0; r < n; r++) i[r >>> 1] |= e.charCodeAt(r) << 16 - r % 2 * 16;
return t.create(i, 2 * n)
}
},
n.Utf16LE = {
stringify: function (e) {
for (var t = e.words, n = e.sigBytes, i = [
], o = 0; o < n; o += 2) {
var s = r(t[o >>> 2] >>> 16 - o % 4 * 8 & 65535);
i.push(String.fromCharCode(s))
}
return i.join('')
},
parse: function (e) {
for (var n = e.length, i = [
], o = 0; o < n; o++) i[o >>> 1] |= r(e.charCodeAt(o) << 16 - o % 2 * 16);
return t.create(i, 2 * n)
}
}
}(), i.enc.Utf16)
},
function (e, t, n) {
var i;
e.exports = (i = n(1), function () {
if ('function' == typeof ArrayBuffer) {
var e = i.lib.WordArray,
t = e.init;
(e.init = function (e) {
if (e instanceof ArrayBuffer && (e = new Uint8Array(e)), (e instanceof Int8Array || 'undefined' != typeof Uint8ClampedArray && e instanceof Uint8ClampedArray || e instanceof Int16Array || e instanceof Uint16Array || e instanceof Int32Array || e instanceof Uint32Array || e instanceof Float32Array || e instanceof Float64Array) && (e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength)), e instanceof Uint8Array) {
for (var n = e.byteLength, i = [
], r = 0; r < n; r++) i[r >>> 2] |= e[r] << 24 - r % 4 * 8;
t.call(this, i, n)
} else t.apply(this, arguments)
}).prototype = e
}
}(), i.lib.WordArray)
},
function (e, t, n) {
var i;
e.exports = (i = n(1), n(26), n(184), n(183), n(15), n(14), n(38), n(69), n(182), n(68), n(181), n(180), n(179), n(37), n(178), n(10), n(4), n(177), n(176), n(175), n(174), n(173), n(172), n(171), n(170), n(169), n(168), n(167), n(166), n(165), n(164), n(163), n(162), i)
},
function (e, t, n) {
'use strict';
function i(e) {
return e && e.__esModule ? e : {
default:
e
}
}
Object.defineProperty(t, '__esModule', {
value: !0
});
var r = i(n(70)),
o = (i(n(3)), n(185));
t.default = function (e, t) {
e = e.toString();
var n = (0, r.default) (e); return o.AES.decrypt(n, t).toString(o.enc.Utf8)
},
e.exports = t.default
},
function (e, t, n) {
'use strict';
Object.defineProperty(t, '__esModule', {
value: !0
});
var i = function (e, t, n) {
return e.split(t).join(n)
},
r = function (e, t, n, r) {
return e = i(e, r, '@'),
e = i(e, n, r),
e = i(e, t, n),
e = i(e, '@', t)
},
o = function (e) {
for (var t = 'VY45ABKSqoceyMKc5zmH4EjINTerd24wQf6nSqc20IHkw1HcciIPBwuTlEvQiNFU6u4IZJ0NSCkxU8beXlOuY7iCr6M1DqlrBVWefORyA185GsUkLKumgxFLIghlz5YRT8tqMOfWnLBGAfYopAT2SJGcxPM2u5REHoiZcVj05TxKdmoway6GbqvYkOyH9fAp', n = 0; n < t.length; n += 3) e = r(e, t[n], t[n + 1], t[n + 2]);
return e
};
t.default = function (e) {
return e = (e = (e = e.substring(0, e.length - 27)).substring(15, e.length)).split('').reverse().join(''),
e = o(e),
e = i(e, 'P', '+'),
e = i(e, 'j', '/'),
e += '=='
},
e.exports = t.default
},
function (e, t, n) {
'use strict';
var i = n(75),
r = n(2),
o = n(41),
s = n(40),
a = n(17),
l = n(82),
u = n(9);
function c(e, t) {
this.options = e,
this.loadOptions = t
}
c.prototype = {
isEncrypted: function () {
return 1 == (1 & this.bitFlag)
},
useUTF8: function () {
return 2048 == (2048 & this.bitFlag)
},
readLocalPart: function (e) {
var t,
n;
if (e.skip(22), this.fileNameLength = e.readInt(2), n = e.readInt(2), this.fileName = e.readData(this.fileNameLength), e.skip(n), - 1 === this.compressedSize || - 1 === this.uncompressedSize) throw new Error('Bug or corrupted zip : didn\'t get enough informations from the central directory (compressedSize === -1 || uncompressedSize === -1)');
if (null === (t = function (e) {
for (var t in l) if (l.hasOwnProperty(t) && l[t].magic === e) return l[t];
return null
}(this.compressionMethod))) throw new Error('Corrupted zip : compression ' + r.pretty(this.compressionMethod) + ' unknown (inner file : ' + r.transformTo('string', this.fileName) + ')');
this.decompressed = new o(this.compressedSize, this.uncompressedSize, this.crc32, t, e.readData(this.compressedSize))
},
readCentralPart: function (e) {
this.versionMadeBy = e.readInt(2),
e.skip(2),
this.bitFlag = e.readInt(2),
this.compressionMethod = e.readString(2),
this.date = e.readDate(),
this.crc32 = e.readInt(4),
this.compressedSize = e.readInt(4),
this.uncompressedSize = e.readInt(4);
var t = e.readInt(2);
if (this.extraFieldsLength = e.readInt(2), this.fileCommentLength = e.readInt(2), this.diskNumberStart = e.readInt(2), this.internalFileAttributes = e.readInt(2), this.externalFileAttributes = e.readInt(4), this.localHeaderOffset = e.readInt(4), this.isEncrypted()) throw new Error('Encrypted zip are not supported');
e.skip(t),
this.readExtraFields(e),
this.parseZIP64ExtraField(e),
this.fileComment = e.readData(this.fileCommentLength)
},
processAttributes: function () {
this.unixPermissions = null,
this.dosPermissions = null;
var e = this.versionMadeBy >> 8;
this.dir = !!(16 & this.externalFileAttributes),
0 === e && (this.dosPermissions = 63 & this.externalFileAttributes),
3 === e && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535),
this.dir || '/' !== this.fileNameStr.slice( - 1) || (this.dir = !0)
},
parseZIP64ExtraField: function (e) {
if (this.extraFields[1]) {
var t = i(this.extraFields[1].value);
this.uncompressedSize === r.MAX_VALUE_32BITS && (this.uncompressedSize = t.readInt(8)),
this.compressedSize === r.MAX_VALUE_32BITS && (this.compressedSize = t.readInt(8)),
this.localHeaderOffset === r.MAX_VALUE_32BITS && (this.localHeaderOffset = t.readInt(8)),
this.diskNumberStart === r.MAX_VALUE_32BITS && (this.diskNumberStart = t.readInt(4))
}
},
readExtraFields: function (e) {
var t,
n,
i,
r = e.index + this.extraFieldsLength;
for (this.extraFields || (this.extraFields = {
}); e.index < r; ) t = e.readInt(2),
n = e.readInt(2),
i = e.readData(n),
this.extraFields[t] = {
id: t,
length: n,
value: i
}
},
handleUTF8: function () {
var e = u.uint8array ? 'uint8array' : 'array';
if (this.useUTF8()) this.fileNameStr = a.utf8decode(this.fileName),
this.fileCommentStr = a.utf8decode(this.fileComment);
 else {
var t = this.findExtraFieldUnicodePath();
if (null !== t) this.fileNameStr = t;
 else {
var n = r.transformTo(e, this.fileName);
this.fileNameStr = this.loadOptions.decodeFileName(n)
}
var i = this.findExtraFieldUnicodeComment();
if (null !== i) this.fileCommentStr = i;
 else {
var o = r.transformTo(e, this.fileComment);
this.fileCommentStr = this.loadOptions.decodeFileName(o)
}
}
},
findExtraFieldUnicodePath: function () {
var e = this.extraFields[28789];
if (e) {
var t = i(e.value);
return 1 !== t.readInt(1) ? null : s(this.fileName) !== t.readInt(4) ? null : a.utf8decode(t.readData(e.length - 5))
}
return null
},
findExtraFieldUnicodeComment: function () {
var e = this.extraFields[25461];
if (e) {
var t = i(e.value);
return 1 !== t.readInt(1) ? null : s(this.fileComment) !== t.readInt(4) ? null : a.utf8decode(t.readData(e.length - 5))
}
return null
}
},
e.exports = c
},
function (e, t, n) {
'use strict';
var i = n(72);
function r(e) {
i.call(this, e)
}
n(2).inherits(r, i),
r.prototype.readData = function (e) {
this.checkOffset(e);
var t = this.data.slice(this.zero + this.index, this.zero + this.index + e);
return this.index += e,
t
},
e.exports = r
},
function (e, t, n) {
'use strict';
var i = n(73);
function r(e) {
i.call(this, e)
}
n(2).inherits(r, i),
r.prototype.byteAt = function (e) {
return this.data.charCodeAt(this.zero + e)
},
r.prototype.lastIndexOfSignature = function (e) {
return this.data.lastIndexOf(e) - this.zero
},
r.prototype.readAndCheckSignature = function (e) {
return e === this.readData(4)
},
r.prototype.readData = function (e) {
this.checkOffset(e);
var t = this.data.slice(this.zero + this.index, this.zero + this.index + e);
return this.index += e,
t
},
e.exports = r
},
function (e, t, n) {
'use strict';
var i = n(75),
r = n(2),
o = n(76),
s = n(188),
a = (n(17), n(9));
function l(e) {
this.files = [
],
this.loadOptions = e
}
l.prototype = {
checkSignature: function (e) {
if (!this.reader.readAndCheckSignature(e)) {
this.reader.index -= 4;
var t = this.reader.readString(4);
throw new Error('Corrupted zip or bug: unexpected signature (' + r.pretty(t) + ', expected ' + r.pretty(e) + ')')
}
},
isSignature: function (e, t) {
var n = this.reader.index;
this.reader.setIndex(e);
var i = this.reader.readString(4) === t;
return this.reader.setIndex(n),
i
},
readBlockEndOfCentral: function () {
this.diskNumber = this.reader.readInt(2),
this.diskWithCentralDirStart = this.reader.readInt(2),
this.centralDirRecordsOnThisDisk = this.reader.readInt(2),
this.centralDirRecords = this.reader.readInt(2),
this.centralDirSize = this.reader.readInt(4),
this.centralDirOffset = this.reader.readInt(4),
this.zipCommentLength = this.reader.readInt(2);
var e = this.reader.readData(this.zipCommentLength),
t = a.uint8array ? 'uint8array' : 'array',
n = r.transformTo(t, e);
this.zipComment = this.loadOptions.decodeFileName(n)
},
readBlockZip64EndOfCentral: function () {
this.zip64EndOfCentralSize = this.reader.readInt(8),
this.reader.skip(4),
this.diskNumber = this.reader.readInt(4),
this.diskWithCentralDirStart = this.reader.readInt(4),
this.centralDirRecordsOnThisDisk = this.reader.readInt(8),
this.centralDirRecords = this.reader.readInt(8),
this.centralDirSize = this.reader.readInt(8),
this.centralDirOffset = this.reader.readInt(8),
this.zip64ExtensibleData = {
};
for (var e, t, n, i = this.zip64EndOfCentralSize - 44; 0 < i; ) e = this.reader.readInt(2),
t = this.reader.readInt(4),
n = this.reader.readData(t),
this.zip64ExtensibleData[e] = {
id: e,
length: t,
value: n
}
},
readBlockZip64EndOfCentralLocator: function () {
if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), this.disksCount > 1) throw new Error('Multi-volumes zip are not supported')
},
readLocalFiles: function () {
var e,
t;
for (e = 0; e < this.files.length; e++) t = this.files[e],
this.reader.setIndex(t.localHeaderOffset),
this.checkSignature(o.LOCAL_FILE_HEADER),
t.readLocalPart(this.reader),
t.handleUTF8(),
t.processAttributes()
},
readCentralDir: function () {
var e;
for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(o.CENTRAL_FILE_HEADER); ) (e = new s({
zip64: this.zip64
}, this.loadOptions)).readCentralPart(this.reader),
this.files.push(e);
if (this.centralDirRecords !== this.files.length && 0 !== this.centralDirRecords && 0 === this.files.length) throw new Error('Corrupted zip or bug: expected ' + this.centralDirRecords + ' records in central dir, got ' + this.files.length)
},
readEndOfCentral: function () {
var e = this.reader.lastIndexOfSignature(o.CENTRAL_DIRECTORY_END);
if (e < 0) throw !this.isSignature(0, o.LOCAL_FILE_HEADER) ? new Error('Can\'t find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html')  : new Error('Corrupted zip: can\'t find end of central directory');
this.reader.setIndex(e);
var t = e;
if (this.checkSignature(o.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === r.MAX_VALUE_16BITS || this.diskWithCentralDirStart === r.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === r.MAX_VALUE_16BITS || this.centralDirRecords === r.MAX_VALUE_16BITS || this.centralDirSize === r.MAX_VALUE_32BITS || this.centralDirOffset === r.MAX_VALUE_32BITS) {
if (this.zip64 = !0, (e = this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0) throw new Error('Corrupted zip: can\'t find the ZIP64 end of central directory locator');
if (this.reader.setIndex(e), this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, o.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0)) throw new Error('Corrupted zip: can\'t find the ZIP64 end of central directory');
this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),
this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_END),
this.readBlockZip64EndOfCentral()
}
var n = this.centralDirOffset + this.centralDirSize;
this.zip64 && (n += 20, n += 12 + this.zip64EndOfCentralSize);
var i = t - n;
if (i > 0) this.isSignature(t, o.CENTRAL_FILE_HEADER) || (this.reader.zero = i);
 else if (i < 0) throw new Error('Corrupted zip: missing ' + Math.abs(i) + ' bytes.')
},
prepareReader: function (e) {
this.reader = i(e)
},
load: function (e) {
this.prepareReader(e),
this.readEndOfCentral(),
this.readCentralDir(),
this.readLocalFiles()
}
},
e.exports = l
},
function (e, t, n) {
'use strict';
var i = n(2),
r = n(20),
o = n(17),
s = (i = n(2), n(191)),
a = n(83),
l = n(28);
function u(e) {
return new r.Promise(function (t, n) {
var i = e.decompressed.getContentWorker().pipe(new a);
i.on('error', function (e) {
n(e)
}).on('end', function () {
i.streamInfo.crc32 !== e.decompressed.crc32 ? n(new Error('Corrupted zip : CRC32 mismatch'))  : t()
}).resume()
})
}
e.exports = function (e, t) {
var n = this;
return t = i.extend(t || {
}, {
base64: !1,
checkCRC32: !1,
optimizedBinaryString: !1,
createFolders: !1,
decodeFileName: o.utf8decode
}),
l.isNode && l.isStream(e) ? r.Promise.reject(new Error('JSZip can\'t accept a stream when loading a zip file.'))  : i.prepareContent('the loaded zip file', e, !0, t.optimizedBinaryString, t.base64).then(function (e) {
var n = new s(t);
return n.load(e),
n
}).then(function (e) {
var n = [
r.Promise.resolve(e)
],
i = e.files;
if (t.checkCRC32) for (var o = 0; o < i.length; o++) n.push(u(i[o]));
return r.Promise.all(n)
}).then(function (e) {
for (var i = e.shift(), r = i.files, o = 0; o < r.length; o++) {
var s = r[o];
n.file(s.fileNameStr, s.decompressed, {
binary: !0,
optimizedBinaryString: !0,
date: s.date,
dir: s.dir,
comment: s.fileCommentStr.length ? s.fileCommentStr : null,
unixPermissions: s.unixPermissions,
dosPermissions: s.dosPermissions,
createFolders: t.createFolders
})
}
return i.zipComment.length && (n.comment = i.zipComment),
n
})
}
},
function (e, t, n) {
'use strict';
var i = n(2),
r = n(5);
function o(e, t) {
r.call(this, 'Nodejs stream input adapter for ' + e),
this._upstreamEnded = !1,
this._bindStream(t)
}
i.inherits(o, r),
o.prototype._bindStream = function (e) {
var t = this;
this._stream = e,
e.pause(),
e.on('data', function (e) {
t.push({
data: e,
meta: {
percent: 0
}
})
}).on('error', function (e) {
t.isPaused ? this.generatedError = e : t.error(e)
}).on('end', function () {
t.isPaused ? t._upstreamEnded = !0 : t.end()
})
},
o.prototype.pause = function () {
return !!r.prototype.pause.call(this) && (this._stream.pause(), !0)
},
o.prototype.resume = function () {
return !!r.prototype.resume.call(this) && (this._upstreamEnded ? this.end()  : this._stream.resume(), !0)
},
e.exports = o
},
function (e, t, n) {
'use strict';
var i = n(2),
r = n(5),
o = n(17),
s = n(40),
a = n(76),
l = function (e, t) {
var n,
i = '';
for (n = 0; n < t; n++) i += String.fromCharCode(255 & e),
e >>>= 8;
return i
},
u = function (e, t, n, r, u, c) {
var h,
d,
f = e.file,
p = e.compression,
v = c !== o.utf8encode,
g = i.transformTo('string', c(f.name)),
m = i.transformTo('string', o.utf8encode(f.name)),
A = f.comment,
y = i.transformTo('string', c(A)),
b = i.transformTo('string', o.utf8encode(A)),
_ = m.length !== f.name.length,
w = b.length !== A.length,
T = '',
k = '',
E = '',
S = f.dir,
j = f.date,
C = {
crc32: 0,
compressedSize: 0,
uncompressedSize: 0
};
t && !n || (C.crc32 = e.crc32, C.compressedSize = e.compressedSize, C.uncompressedSize = e.uncompressedSize);
var x = 0;
t && (x |= 8),
v || !_ && !w || (x |= 2048);
var B,
O,
I = 0,
P = 0;
S && (I |= 16),
'UNIX' === u ? (P = 798, I |= (B = f.unixPermissions, O = B, B || (O = S ? 16893 : 33204), (65535 & O) << 16))  : (P = 20, I |= 63 & (f.dosPermissions || 0)),
h = j.getUTCHours(),
h <<= 6,
h |= j.getUTCMinutes(),
h <<= 5,
h |= j.getUTCSeconds() / 2,
d = j.getUTCFullYear() - 1980,
d <<= 4,
d |= j.getUTCMonth() + 1,
d <<= 5,
d |= j.getUTCDate(),
_ && (k = l(1, 1) + l(s(g), 4) + m, T += 'up' + l(k.length, 2) + k),
w && (E = l(1, 1) + l(s(y), 4) + b, T += 'uc' + l(E.length, 2) + E);
var R = '';
return R += '\n\0',
R += l(x, 2),
R += p.magic,
R += l(h, 2),
R += l(d, 2),
R += l(C.crc32, 4),
R += l(C.compressedSize, 4),
R += l(C.uncompressedSize, 4),
R += l(g.length, 2),
R += l(T.length, 2),
{
fileRecord: a.LOCAL_FILE_HEADER + R + g + T,
dirRecord: a.CENTRAL_FILE_HEADER + l(P, 2) + R + l(y.length, 2) + '\0\0\0\0' + l(I, 4) + l(r, 4) + g + T + y
}
};
function c(e, t, n, i) {
r.call(this, 'ZipFileWorker'),
this.bytesWritten = 0,
this.zipComment = t,
this.zipPlatform = n,
this.encodeFileName = i,
this.streamFiles = e,
this.accumulate = !1,
this.contentBuffer = [
],
this.dirRecords = [
],
this.currentSourceOffset = 0,
this.entriesCount = 0,
this.currentFile = null,
this._sources = [
]
}
i.inherits(c, r),
c.prototype.push = function (e) {
var t = e.meta.percent || 0,
n = this.entriesCount,
i = this._sources.length;
this.accumulate ? this.contentBuffer.push(e)  : (this.bytesWritten += e.data.length, r.prototype.push.call(this, {
data: e.data,
meta: {
currentFile: this.currentFile,
percent: n ? (t + 100 * (n - i - 1)) / n : 100
}
}))
},
c.prototype.openedSource = function (e) {
this.currentSourceOffset = this.bytesWritten,
this.currentFile = e.file.name;
var t = this.streamFiles && !e.file.dir;
if (t) {
var n = u(e, t, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
this.push({
data: n.fileRecord,
meta: {
percent: 0
}
})
} else this.accumulate = !0
},
c.prototype.closedSource = function (e) {
this.accumulate = !1;
var t = this.streamFiles && !e.file.dir,
n = u(e, t, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
if (this.dirRecords.push(n.dirRecord), t) this.push({
data: function (e) {
return a.DATA_DESCRIPTOR + l(e.crc32, 4) + l(e.compressedSize, 4) + l(e.uncompressedSize, 4)
}(e),
meta: {
percent: 100
}
});
 else for (this.push({
data: n.fileRecord,
meta: {
percent: 0
}
}); this.contentBuffer.length; ) this.push(this.contentBuffer.shift());
this.currentFile = null
},
c.prototype.flush = function () {
for (var e = this.bytesWritten, t = 0; t < this.dirRecords.length; t++) this.push({
data: this.dirRecords[t],
meta: {
percent: 100
}
});
var n = this.bytesWritten - e,
r = function (e, t, n, r, o) {
var s = i.transformTo('string', o(r));
return a.CENTRAL_DIRECTORY_END + '\0\0\0\0' + l(e, 2) + l(e, 2) + l(t, 4) + l(n, 4) + l(s.length, 2) + s
}(this.dirRecords.length, n, e, this.zipComment, this.encodeFileName);
this.push({
data: r,
meta: {
percent: 100
}
})
},
c.prototype.prepareNextSource = function () {
this.previous = this._sources.shift(),
this.openedSource(this.previous.streamInfo),
this.isPaused ? this.previous.pause()  : this.previous.resume()
},
c.prototype.registerPrevious = function (e) {
this._sources.push(e);
var t = this;
return e.on('data', function (e) {
t.processChunk(e)
}),
e.on('end', function () {
t.closedSource(t.previous.streamInfo),
t._sources.length ? t.prepareNextSource()  : t.end()
}),
e.on('error', function (e) {
t.error(e)
}),
this
},
c.prototype.resume = function () {
return !!r.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), !0)  : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), !0))
},
c.prototype.error = function (e) {
var t = this._sources;
if (!r.prototype.error.call(this, e)) return !1;
for (var n = 0; n < t.length; n++) try {
t[n].error(e)
} catch (e) {
}
return !0
},
c.prototype.lock = function () {
r.prototype.lock.call(this);
for (var e = this._sources, t = 0; t < e.length; t++) e[t].lock()
},
e.exports = c
},
function (e, t, n) {
'use strict';
e.exports = function () {
this.text = 0,
this.time = 0,
this.xflags = 0,
this.os = 0,
this.extra = null,
this.extra_len = 0,
this.name = '',
this.comment = '',
this.hcrc = 0,
this.done = !1
}
},
function (e, t, n) {
'use strict';
var i = n(8),
r = [
3,
4,
5,
6,
7,
8,
9,
10,
11,
13,
15,
17,
19,
23,
27,
31,
35,
43,
51,
59,
67,
83,
99,
115,
131,
163,
195,
227,
258,
0,
0
],
o = [
16,
16,
16,
16,
16,
16,
16,
16,
17,
17,
17,
17,
18,
18,
18,
18,
19,
19,
19,
19,
20,
20,
20,
20,
21,
21,
21,
21,
16,
72,
78
],
s = [
1,
2,
3,
4,
5,
7,
9,
13,
17,
25,
33,
49,
65,
97,
129,
193,
257,
385,
513,
769,
1025,
1537,
2049,
3073,
4097,
6145,
8193,
12289,
16385,
24577,
0,
0
],
a = [
16,
16,
16,
16,
17,
17,
18,
18,
19,
19,
20,
20,
21,
21,
22,
22,
23,
23,
24,
24,
25,
25,
26,
26,
27,
27,
28,
28,
29,
29,
64,
64
];
e.exports = function (e, t, n, l, u, c, h, d) {
var f,
p,
v,
g,
m,
A,
y,
b,
_,
w = d.bits,
T = 0,
k = 0,
E = 0,
S = 0,
j = 0,
C = 0,
x = 0,
B = 0,
O = 0,
I = 0,
P = null,
R = 0,
M = new i.Buf16(16),
L = new i.Buf16(16),
D = null,
U = 0;
for (T = 0; T <= 15; T++) M[T] = 0;
for (k = 0; k < l; k++) M[t[n + k]]++;
for (j = w, S = 15; S >= 1 && 0 === M[S]; S--);
if (j > S && (j = S), 0 === S) return u[c++] = 20971520,
u[c++] = 20971520,
d.bits = 1,
0;
for (E = 1; E < S && 0 === M[E]; E++);
for (j < E && (j = E), B = 1, T = 1; T <= 15; T++) if (B <<= 1, (B -= M[T]) < 0) return - 1;
if (B > 0 && (0 === e || 1 !== S)) return - 1;
for (L[1] = 0, T = 1; T < 15; T++) L[T + 1] = L[T] + M[T];
for (k = 0; k < l; k++) 0 !== t[n + k] && (h[L[t[n + k]]++] = k);
if (0 === e ? (P = D = h, A = 19)  : 1 === e ? (P = r, R -= 257, D = o, U -= 257, A = 256)  : (P = s, D = a, A = - 1), I = 0, k = 0, T = E, m = c, C = j, x = 0, v = - 1, g = (O = 1 << j) - 1, 1 === e && O > 852 || 2 === e && O > 592) return 1;
for (; ; ) {
y = T - x,
h[k] < A ? (b = 0, _ = h[k])  : h[k] > A ? (b = D[U + h[k]], _ = P[R + h[k]])  : (b = 96, _ = 0),
f = 1 << T - x,
E = p = 1 << C;
do {
u[m + (I >> x) + (p -= f)] = y << 24 | b << 16 | _ | 0
} while (0 !== p);
for (f = 1 << T - 1; I & f; ) f >>= 1;
if (0 !== f ? (I &= f - 1, I += f)  : I = 0, k++, 0 == --M[T]) {
if (T === S) break;
T = t[n + h[k]]
}
if (T > j && (I & g) !== v) {
for (0 === x && (x = j), m += E, B = 1 << (C = T - x); C + x < S && !((B -= M[C + x]) <= 0); ) C++,
B <<= 1;
if (O += 1 << C, 1 === e && O > 852 || 2 === e && O > 592) return 1;
u[v = I & g] = j << 24 | C << 16 | m - c | 0
}
}
return 0 !== I && (u[m + I] = T - x << 24 | 64 << 16 | 0),
d.bits = j,
0
}
},
function (e, t, n) {
'use strict';
e.exports = function (e, t) {
var n,
i,
r,
o,
s,
a,
l,
u,
c,
h,
d,
f,
p,
v,
g,
m,
A,
y,
b,
_,
w,
T,
k,
E,
S;
n = e.state,
i = e.next_in,
E = e.input,
r = i + (e.avail_in - 5),
o = e.next_out,
S = e.output,
s = o - (t - e.avail_out),
a = o + (e.avail_out - 257),
l = n.dmax,
u = n.wsize,
c = n.whave,
h = n.wnext,
d = n.window,
f = n.hold,
p = n.bits,
v = n.lencode,
g = n.distcode,
m = (1 << n.lenbits) - 1,
A = (1 << n.distbits) - 1;
e: do {
p < 15 && (f += E[i++] << p, p += 8, f += E[i++] << p, p += 8),
y = v[f & m];
t: for (; ; ) {
if (f >>>= b = y >>> 24, p -= b, 0 === (b = y >>> 16 & 255)) S[o++] = 65535 & y;
 else {
if (!(16 & b)) {
if (0 == (64 & b)) {
y = v[(65535 & y) + (f & (1 << b) - 1)];
continue t
}
if (32 & b) {
n.mode = 12;
break e
}
e.msg = 'invalid literal/length code',
n.mode = 30;
break e
}
_ = 65535 & y,
(b &= 15) && (p < b && (f += E[i++] << p, p += 8), _ += f & (1 << b) - 1, f >>>= b, p -= b),
p < 15 && (f += E[i++] << p, p += 8, f += E[i++] << p, p += 8),
y = g[f & A];
n: for (; ; ) {
if (f >>>= b = y >>> 24, p -= b, !(16 & (b = y >>> 16 & 255))) {
if (0 == (64 & b)) {
y = g[(65535 & y) + (f & (1 << b) - 1)];
continue n
}
e.msg = 'invalid distance code',
n.mode = 30;
break e
}
if (w = 65535 & y, p < (b &= 15) && (f += E[i++] << p, (p += 8) < b && (f += E[i++] << p, p += 8)), (w += f & (1 << b) - 1) > l) {
e.msg = 'invalid distance too far back',
n.mode = 30;
break e
}
if (f >>>= b, p -= b, w > (b = o - s)) {
if ((b = w - b) > c && n.sane) {
e.msg = 'invalid distance too far back',
n.mode = 30;
break e
}
if (T = 0, k = d, 0 === h) {
if (T += u - b, b < _) {
_ -= b;
do {
S[o++] = d[T++]
} while (--b);
T = o - w,
k = S
}
} else if (h < b) {
if (T += u + h - b, (b -= h) < _) {
_ -= b;
do {
S[o++] = d[T++]
} while (--b);
if (T = 0, h < _) {
_ -= b = h;
do {
S[o++] = d[T++]
} while (--b);
T = o - w,
k = S
}
}
} else if (T += h - b, b < _) {
_ -= b;
do {
S[o++] = d[T++]
} while (--b);
T = o - w,
k = S
}
for (; _ > 2; ) S[o++] = k[T++],
S[o++] = k[T++],
S[o++] = k[T++],
_ -= 3;
_ && (S[o++] = k[T++], _ > 1 && (S[o++] = k[T++]))
} else {
T = o - w;
do {
S[o++] = S[T++],
S[o++] = S[T++],
S[o++] = S[T++],
_ -= 3
} while (_ > 2);
_ && (S[o++] = S[T++], _ > 1 && (S[o++] = S[T++]))
}
break
}
}
break
}
} while (i < r && o < a);
i -= _ = p >> 3,
f &= (1 << (p -= _ << 3)) - 1,
e.next_in = i,
e.next_out = o,
e.avail_in = i < r ? r - i + 5 : 5 - (i - r),
e.avail_out = o < a ? a - o + 257 : 257 - (o - a),
n.hold = f,
n.bits = p
}
},
function (e, t, n) {
'use strict';
var i = n(8),
r = n(81),
o = n(80),
s = n(197),
a = n(196),
l = 0,
u = 1,
c = 2,
h = 4,
d = 5,
f = 6,
p = 0,
v = 1,
g = 2,
m = - 2,
A = - 3,
y = - 4,
b = - 5,
_ = 8,
w = 1,
T = 2,
k = 3,
E = 4,
S = 5,
j = 6,
C = 7,
x = 8,
B = 9,
O = 10,
I = 11,
P = 12,
R = 13,
M = 14,
L = 15,
D = 16,
U = 17,
N = 18,
F = 19,
z = 20,
H = 21,
Q = 22,
Y = 23,
V = 24,
G = 25,
W = 26,
q = 27,
Z = 28,
X = 29,
K = 30,
J = 31,
$ = 32,
ee = 852,
te = 592,
ne = 15;
function ie(e) {
return (e >>> 24 & 255) + (e >>> 8 & 65280) + ((65280 & e) << 8) + ((255 & e) << 24)
}
function re(e) {
var t;
return e && e.state ? (t = e.state, e.total_in = e.total_out = t.total = 0, e.msg = '', t.wrap && (e.adler = 1 & t.wrap), t.mode = w, t.last = 0, t.havedict = 0, t.dmax = 32768, t.head = null, t.hold = 0, t.bits = 0, t.lencode = t.lendyn = new i.Buf32(ee), t.distcode = t.distdyn = new i.Buf32(te), t.sane = 1, t.back = - 1, p)  : m
}
function oe(e) {
var t;
return e && e.state ? ((t = e.state).wsize = 0, t.whave = 0, t.wnext = 0, re(e))  : m
}
function se(e, t) {
var n,
i;
return e && e.state ? (i = e.state, t < 0 ? (n = 0, t = - t)  : (n = 1 + (t >> 4), t < 48 && (t &= 15)), t && (t < 8 || t > 15) ? m : (null !== i.window && i.wbits !== t && (i.window = null), i.wrap = n, i.wbits = t, oe(e)))  : m
}
function ae(e, t) {
var n,
r;
return e ? (r = new function () {
this.mode = 0,
this.last = !1,
this.wrap = 0,
this.havedict = !1,
this.flags = 0,
this.dmax = 0,
this.check = 0,
this.total = 0,
this.head = null,
this.wbits = 0,
this.wsize = 0,
this.whave = 0,
this.wnext = 0,
this.window = null,
this.hold = 0,
this.bits = 0,
this.length = 0,
this.offset = 0,
this.extra = 0,
this.lencode = null,
this.distcode = null,
this.lenbits = 0,
this.distbits = 0,
this.ncode = 0,
this.nlen = 0,
this.ndist = 0,
this.have = 0,
this.next = null,
this.lens = new i.Buf16(320),
this.work = new i.Buf16(288),
this.lendyn = null,
this.distdyn = null,
this.sane = 0,
this.back = 0,
this.was = 0
}, e.state = r, r.window = null, (n = se(e, t)) !== p && (e.state = null), n)  : m
}
var le,
ue,
ce = !0;
function he(e) {
if (ce) {
var t;
for (le = new i.Buf32(512), ue = new i.Buf32(32), t = 0; t < 144; ) e.lens[t++] = 8;
for (; t < 256; ) e.lens[t++] = 9;
for (; t < 280; ) e.lens[t++] = 7;
for (; t < 288; ) e.lens[t++] = 8;
for (a(u, e.lens, 0, 288, le, 0, e.work, {
bits: 9
}), t = 0; t < 32; ) e.lens[t++] = 5;
a(c, e.lens, 0, 32, ue, 0, e.work, {
bits: 5
}),
ce = !1
}
e.lencode = le,
e.lenbits = 9,
e.distcode = ue,
e.distbits = 5
}
function de(e, t, n, r) {
var o,
s = e.state;
return null === s.window && (s.wsize = 1 << s.wbits, s.wnext = 0, s.whave = 0, s.window = new i.Buf8(s.wsize)),
r >= s.wsize ? (i.arraySet(s.window, t, n - s.wsize, s.wsize, 0), s.wnext = 0, s.whave = s.wsize)  : ((o = s.wsize - s.wnext) > r && (o = r), i.arraySet(s.window, t, n - r, o, s.wnext), (r -= o) ? (i.arraySet(s.window, t, n - r, r, 0), s.wnext = r, s.whave = s.wsize)  : (s.wnext += o, s.wnext === s.wsize && (s.wnext = 0), s.whave < s.wsize && (s.whave += o))),
0
}
t.inflateReset = oe,
t.inflateReset2 = se,
t.inflateResetKeep = re,
t.inflateInit = function (e) {
return ae(e, ne)
},
t.inflateInit2 = ae,
t.inflate = function (e, t) {
var n,
ee,
te,
ne,
re,
oe,
se,
ae,
le,
ue,
ce,
fe,
pe,
ve,
ge,
me,
Ae,
ye,
be,
_e,
we,
Te,
ke,
Ee,
Se = 0,
je = new i.Buf8(4),
Ce = [
16,
17,
18,
0,
8,
7,
9,
6,
10,
5,
11,
4,
12,
3,
13,
2,
14,
1,
15
];
if (!e || !e.state || !e.output || !e.input && 0 !== e.avail_in) return m;
(n = e.state).mode === P && (n.mode = R),
re = e.next_out,
te = e.output,
se = e.avail_out,
ne = e.next_in,
ee = e.input,
oe = e.avail_in,
ae = n.hold,
le = n.bits,
ue = oe,
ce = se,
Te = p;
e: for (; ; ) switch (n.mode) {
case w:
if (0 === n.wrap) {
n.mode = R;
break
}
for (; le < 16; ) {
if (0 === oe) break e;
oe--,
ae += ee[ne++] << le,
le += 8
}
if (2 & n.wrap && 35615 === ae) {
n.check = 0,
je[0] = 255 & ae,
je[1] = ae >>> 8 & 255,
n.check = o(n.check, je, 2, 0),
ae = 0,
le = 0,
n.mode = T;
break
}
if (n.flags = 0, n.head && (n.head.done = !1), !(1 & n.wrap) || (((255 & ae) << 8) + (ae >> 8)) % 31) {
e.msg = 'incorrect header check',
n.mode = K;
break
}
if ((15 & ae) !== _) {
e.msg = 'unknown compression method',
n.mode = K;
break
}
if (le -= 4, we = 8 + (15 & (ae >>>= 4)), 0 === n.wbits) n.wbits = we;
 else if (we > n.wbits) {
e.msg = 'invalid window size',
n.mode = K;
break
}
n.dmax = 1 << we,
e.adler = n.check = 1,
n.mode = 512 & ae ? O : P,
ae = 0,
le = 0;
break;
case T:
for (; le < 16; ) {
if (0 === oe) break e;
oe--,
ae += ee[ne++] << le,
le += 8
}
if (n.flags = ae, (255 & n.flags) !== _) {
e.msg = 'unknown compression method',
n.mode = K;
break
}
if (57344 & n.flags) {
e.msg = 'unknown header flags set',
n.mode = K;
break
}
n.head && (n.head.text = ae >> 8 & 1),
512 & n.flags && (je[0] = 255 & ae, je[1] = ae >>> 8 & 255, n.check = o(n.check, je, 2, 0)),
ae = 0,
le = 0,
n.mode = k;
case k:
for (; le < 32; ) {
if (0 === oe) break e;
oe--,
ae += ee[ne++] << le,
le += 8
}
n.head && (n.head.time = ae),
512 & n.flags && (je[0] = 255 & ae, je[1] = ae >>> 8 & 255, je[2] = ae >>> 16 & 255, je[3] = ae >>> 24 & 255, n.check = o(n.check, je, 4, 0)),
ae = 0,
le = 0,
n.mode = E;
case E:
for (; le < 16; ) {
if (0 === oe) break e;
oe--,
ae += ee[ne++] << le,
le += 8
}
n.head && (n.head.xflags = 255 & ae, n.head.os = ae >> 8),
512 & n.flags && (je[0] = 255 & ae, je[1] = ae >>> 8 & 255, n.check = o(n.check, je, 2, 0)),
ae = 0,
le = 0,
n.mode = S;
case S:
if (1024 & n.flags) {
for (; le < 16; ) {
if (0 === oe) break e;
oe--,
ae += ee[ne++] << le,
le += 8
}
n.length = ae,
n.head && (n.head.extra_len = ae),
512 & n.flags && (je[0] = 255 & ae, je[1] = ae >>> 8 & 255, n.check = o(n.check, je, 2, 0)),
ae = 0,
le = 0
} else n.head && (n.head.extra = null);
n.mode = j;
case j:
if (1024 & n.flags && ((fe = n.length) > oe && (fe = oe), fe && (n.head && (we = n.head.extra_len - n.length, n.head.extra || (n.head.extra = new Array(n.head.extra_len)), i.arraySet(n.head.extra, ee, ne, fe, we)), 512 & n.flags && (n.check = o(n.check, ee, fe, ne)), oe -= fe, ne += fe, n.length -= fe), n.length)) break e;
n.length = 0,
n.mode = C;
case C:
if (2048 & n.flags) {
if (0 === oe) break e;
fe = 0;
do {
we = ee[ne + fe++],
n.head && we && n.length < 65536 && (n.head.name += String.fromCharCode(we))
} while (we && fe < oe);
if (512 & n.flags && (n.check = o(n.check, ee, fe, ne)), oe -= fe, ne += fe, we) break e
} else n.head && (n.head.name = null);
n.length = 0,
n.mode = x;
case x:
if (4096 & n.flags) {
if (0 === oe) break e;
fe = 0;
do {
we = ee[ne + fe++],
n.head && we && n.length < 65536 && (n.head.comment += String.fromCharCode(we))
} while (we && fe < oe);
if (512 & n.flags && (n.check = o(n.check, ee, fe, ne)), oe -= fe, ne += fe, we) break e
} else n.head && (n.head.comment = null);
n.mode = B;
case B:
if (512 & n.flags) {
for (; le < 16; ) {
if (0 === oe) break e;
oe--,
ae += ee[ne++] << le,
le += 8
}
if (ae !== (65535 & n.check)) {
e.msg = 'header crc mismatch',
n.mode = K;
break
}
ae = 0,
le = 0
}
n.head && (n.head.hcrc = n.flags >> 9 & 1, n.head.done = !0),
e.adler = n.check = 0,
n.mode = P;
break;
case O:
for (; le < 32; ) {
if (0 === oe) break e;
oe--,
ae += ee[ne++] << le,
le += 8
}
e.adler = n.check = ie(ae),
ae = 0,
le = 0,
n.mode = I;
case I:
if (0 === n.havedict) return e.next_out = re,
e.avail_out = se,
e.next_in = ne,
e.avail_in = oe,
n.hold = ae,
n.bits = le,
g;
e.adler = n.check = 1,
n.mode = P;
case P:
if (t === d || t === f) break e;
case R:
if (n.last) {
ae >>>= 7 & le,
le -= 7 & le,
n.mode = q;
break
}
for (; le < 3; ) {
if (0 === oe) break e;
oe--,
ae += ee[ne++] << le,
le += 8
}
switch (n.last = 1 & ae, le -= 1, 3 & (ae >>>= 1)) {
case 0:
n.mode = M;
break;
case 1:
if (he(n), n.mode = z, t === f) {
ae >>>= 2,
le -= 2;
break e
}
break;
case 2:
n.mode = U;
break;
case 3:
e.msg = 'invalid block type',
n.mode = K
}
ae >>>= 2,
le -= 2;
break;
case M:
for (ae >>>= 7 & le, le -= 7 & le; le < 32; ) {
if (0 === oe) break e;
oe--,
ae += ee[ne++] << le,
le += 8
}
if ((65535 & ae) != (ae >>> 16 ^ 65535)) {
e.msg = 'invalid stored block lengths',
n.mode = K;
break
}
if (n.length = 65535 & ae, ae = 0, le = 0, n.mode = L, t === f) break e;
case L:
n.mode = D;
case D:
if (fe = n.length) {
if (fe > oe && (fe = oe), fe > se && (fe = se), 0 === fe) break e;
i.arraySet(te, ee, ne, fe, re),
oe -= fe,
ne += fe,
se -= fe,
re += fe,
n.length -= fe;
break
}
n.mode = P;
break;
case U:
for (; le < 14; ) {
if (0 === oe) break e;
oe--,
ae += ee[ne++] << le,
le += 8
}
if (n.nlen = 257 + (31 & ae), ae >>>= 5, le -= 5, n.ndist = 1 + (31 & ae), ae >>>= 5, le -= 5, n.ncode = 4 + (15 & ae), ae >>>= 4, le -= 4, n.nlen > 286 || n.ndist > 30) {
e.msg = 'too many length or distance symbols',
n.mode = K;
break
}
n.have = 0,
n.mode = N;
case N:
for (; n.have < n.ncode; ) {
for (; le < 3; ) {
if (0 === oe) break e;
oe--,
ae += ee[ne++] << le,
le += 8
}
n.lens[Ce[n.have++]] = 7 & ae,
ae >>>= 3,
le -= 3
}
for (; n.have < 19; ) n.lens[Ce[n.have++]] = 0;
if (n.lencode = n.lendyn, n.lenbits = 7, ke = {
bits: n.lenbits
}, Te = a(l, n.lens, 0, 19, n.lencode, 0, n.work, ke), n.lenbits = ke.bits, Te) {
e.msg = 'invalid code lengths set',
n.mode = K;
break
}
n.have = 0,
n.mode = F;
case F:
for (; n.have < n.nlen + n.ndist; ) {
for (; me = (Se = n.lencode[ae & (1 << n.lenbits) - 1]) >>> 16 & 255, Ae = 65535 & Se, !((ge = Se >>> 24) <= le); ) {
if (0 === oe) break e;
oe--,
ae += ee[ne++] << le,
le += 8
}
if (Ae < 16) ae >>>= ge,
le -= ge,
n.lens[n.have++] = Ae;
 else {
if (16 === Ae) {
for (Ee = ge + 2; le < Ee; ) {
if (0 === oe) break e;
oe--,
ae += ee[ne++] << le,
le += 8
}
if (ae >>>= ge, le -= ge, 0 === n.have) {
e.msg = 'invalid bit length repeat',
n.mode = K;
break
}
we = n.lens[n.have - 1],
fe = 3 + (3 & ae),
ae >>>= 2,
le -= 2
} else if (17 === Ae) {
for (Ee = ge + 3; le < Ee; ) {
if (0 === oe) break e;
oe--,
ae += ee[ne++] << le,
le += 8
}
le -= ge,
we = 0,
fe = 3 + (7 & (ae >>>= ge)),
ae >>>= 3,
le -= 3
} else {
for (Ee = ge + 7; le < Ee; ) {
if (0 === oe) break e;
oe--,
ae += ee[ne++] << le,
le += 8
}
le -= ge,
we = 0,
fe = 11 + (127 & (ae >>>= ge)),
ae >>>= 7,
le -= 7
}
if (n.have + fe > n.nlen + n.ndist) {
e.msg = 'invalid bit length repeat',
n.mode = K;
break
}
for (; fe--; ) n.lens[n.have++] = we
}
}
if (n.mode === K) break;
if (0 === n.lens[256]) {
e.msg = 'invalid code -- missing end-of-block',
n.mode = K;
break
}
if (n.lenbits = 9, ke = {
bits: n.lenbits
}, Te = a(u, n.lens, 0, n.nlen, n.lencode, 0, n.work, ke), n.lenbits = ke.bits, Te) {
e.msg = 'invalid literal/lengths set',
n.mode = K;
break
}
if (n.distbits = 6, n.distcode = n.distdyn, ke = {
bits: n.distbits
}, Te = a(c, n.lens, n.nlen, n.ndist, n.distcode, 0, n.work, ke), n.distbits = ke.bits, Te) {
e.msg = 'invalid distances set',
n.mode = K;
break
}
if (n.mode = z, t === f) break e;
case z:
n.mode = H;
case H:
if (oe >= 6 && se >= 258) {
e.next_out = re,
e.avail_out = se,
e.next_in = ne,
e.avail_in = oe,
n.hold = ae,
n.bits = le,
s(e, ce),
re = e.next_out,
te = e.output,
se = e.avail_out,
ne = e.next_in,
ee = e.input,
oe = e.avail_in,
ae = n.hold,
le = n.bits,
n.mode === P && (n.back = - 1);
break
}
for (n.back = 0; me = (Se = n.lencode[ae & (1 << n.lenbits) - 1]) >>> 16 & 255, Ae = 65535 & Se, !((ge = Se >>> 24) <= le); ) {
if (0 === oe) break e;
oe--,
ae += ee[ne++] << le,
le += 8
}
if (me && 0 == (240 & me)) {
for (ye = ge, be = me, _e = Ae; me = (Se = n.lencode[_e + ((ae & (1 << ye + be) - 1) >> ye)]) >>> 16 & 255, Ae = 65535 & Se, !(ye + (ge = Se >>> 24) <= le); ) {
if (0 === oe) break e;
oe--,
ae += ee[ne++] << le,
le += 8
}
ae >>>= ye,
le -= ye,
n.back += ye
}
if (ae >>>= ge, le -= ge, n.back += ge, n.length = Ae, 0 === me) {
n.mode = W;
break
}
if (32 & me) {
n.back = - 1,
n.mode = P;
break
}
if (64 & me) {
e.msg = 'invalid literal/length code',
n.mode = K;
break
}
n.extra = 15 & me,
n.mode = Q;
case Q:
if (n.extra) {
for (Ee = n.extra; le < Ee; ) {
if (0 === oe) break e;
oe--,
ae += ee[ne++] << le,
le += 8
}
n.length += ae & (1 << n.extra) - 1,
ae >>>= n.extra,
le -= n.extra,
n.back += n.extra
}
n.was = n.length,
n.mode = Y;
case Y:
for (; me = (Se = n.distcode[ae & (1 << n.distbits) - 1]) >>> 16 & 255, Ae = 65535 & Se, !((ge = Se >>> 24) <= le); ) {
if (0 === oe) break e;
oe--,
ae += ee[ne++] << le,
le += 8
}
if (0 == (240 & me)) {
for (ye = ge, be = me, _e = Ae; me = (Se = n.distcode[_e + ((ae & (1 << ye + be) - 1) >> ye)]) >>> 16 & 255, Ae = 65535 & Se, !(ye + (ge = Se >>> 24) <= le); ) {
if (0 === oe) break e;
oe--,
ae += ee[ne++] << le,
le += 8
}
ae >>>= ye,
le -= ye,
n.back += ye
}
if (ae >>>= ge, le -= ge, n.back += ge, 64 & me) {
e.msg = 'invalid distance code',
n.mode = K;
break
}
n.offset = Ae,
n.extra = 15 & me,
n.mode = V;
case V:
if (n.extra) {
for (Ee = n.extra; le < Ee; ) {
if (0 === oe) break e;
oe--,
ae += ee[ne++] << le,
le += 8
}
n.offset += ae & (1 << n.extra) - 1,
ae >>>= n.extra,
le -= n.extra,
n.back += n.extra
}
if (n.offset > n.dmax) {
e.msg = 'invalid distance too far back',
n.mode = K;
break
}
n.mode = G;
case G:
if (0 === se) break e;
if (fe = ce - se, n.offset > fe) {
if ((fe = n.offset - fe) > n.whave && n.sane) {
e.msg = 'invalid distance too far back',
n.mode = K;
break
}
fe > n.wnext ? (fe -= n.wnext, pe = n.wsize - fe)  : pe = n.wnext - fe,
fe > n.length && (fe = n.length),
ve = n.window
} else ve = te,
pe = re - n.offset,
fe = n.length;
fe > se && (fe = se),
se -= fe,
n.length -= fe;
do {
te[re++] = ve[pe++]
} while (--fe);
0 === n.length && (n.mode = H);
break;
case W:
if (0 === se) break e;
te[re++] = n.length,
se--,
n.mode = H;
break;
case q:
if (n.wrap) {
for (; le < 32; ) {
if (0 === oe) break e;
oe--,
ae |= ee[ne++] << le,
le += 8
}
if (ce -= se, e.total_out += ce, n.total += ce, ce && (e.adler = n.check = n.flags ? o(n.check, te, ce, re - ce)  : r(n.check, te, ce, re - ce)), ce = se, (n.flags ? ae : ie(ae)) !== n.check) {
e.msg = 'incorrect data check',
n.mode = K;
break
}
ae = 0,
le = 0
}
n.mode = Z;
case Z:
if (n.wrap && n.flags) {
for (; le < 32; ) {
if (0 === oe) break e;
oe--,
ae += ee[ne++] << le,
le += 8
}
if (ae !== (4294967295 & n.total)) {
e.msg = 'incorrect length check',
n.mode = K;
break
}
ae = 0,
le = 0
}
n.mode = X;
case X:
Te = v;
break e;
case K:
Te = A;
break e;
case J:
return y;
case $:
default:
return m
}
return e.next_out = re,
e.avail_out = se,
e.next_in = ne,
e.avail_in = oe,
n.hold = ae,
n.bits = le,
(n.wsize || ce !== e.avail_out && n.mode < K && (n.mode < q || t !== h)) && de(e, e.output, e.next_out, ce - e.avail_out) ? (n.mode = J, y)  : (ue -= e.avail_in, ce -= e.avail_out, e.total_in += ue, e.total_out += ce, n.total += ce, n.wrap && ce && (e.adler = n.check = n.flags ? o(n.check, te, ce, e.next_out - ce)  : r(n.check, te, ce, e.next_out - ce)), e.data_type = n.bits + (n.last ? 64 : 0) + (n.mode === P ? 128 : 0) + (n.mode === z || n.mode === L ? 256 : 0), (0 === ue && 0 === ce || t === h) && Te === p && (Te = b), Te)
},
t.inflateEnd = function (e) {
if (!e || !e.state) return m;
var t = e.state;
return t.window && (t.window = null),
e.state = null,
p
},
t.inflateGetHeader = function (e, t) {
var n;
return e && e.state ? 0 == (2 & (n = e.state).wrap) ? m : (n.head = t, t.done = !1, p)  : m
},
t.inflateSetDictionary = function (e, t) {
var n,
i = t.length;
return e && e.state ? 0 !== (n = e.state).wrap && n.mode !== I ? m : n.mode === I && r(1, t, i, 0) !== n.check ? A : de(e, t, i, i) ? (n.mode = J, y)  : (n.havedict = 1, p)  : m
},
t.inflateInfo = 'pako inflate (from Nodeca project)'
},
function (e, t, n) {
'use strict';
var i = n(198),
r = n(8),
o = n(79),
s = n(77),
a = n(39),
l = n(78),
u = n(195),
c = Object.prototype.toString;
function h(e) {
if (!(this instanceof h)) return new h(e);
this.options = r.assign({
chunkSize: 16384,
windowBits: 0,
to: ''
}, e || {
});
var t = this.options;
t.raw && t.windowBits >= 0 && t.windowBits < 16 && (t.windowBits = - t.windowBits, 0 === t.windowBits && (t.windowBits = - 15)),
!(t.windowBits >= 0 && t.windowBits < 16) || e && e.windowBits || (t.windowBits += 32),
t.windowBits > 15 && t.windowBits < 48 && 0 == (15 & t.windowBits) && (t.windowBits |= 15),
this.err = 0,
this.msg = '',
this.ended = !1,
this.chunks = [
],
this.strm = new l,
this.strm.avail_out = 0;
var n = i.inflateInit2(this.strm, t.windowBits);
if (n !== s.Z_OK) throw new Error(a[n]);
this.header = new u,
i.inflateGetHeader(this.strm, this.header)
}
function d(e, t) {
var n = new h(t);
if (n.push(e, !0), n.err) throw n.msg || a[n.err];
return n.result
}
h.prototype.push = function (e, t) {
var n,
a,
l,
u,
h,
d,
f = this.strm,
p = this.options.chunkSize,
v = this.options.dictionary,
g = !1;
if (this.ended) return !1;
a = t === ~~t ? t : !0 === t ? s.Z_FINISH : s.Z_NO_FLUSH,
'string' == typeof e ? f.input = o.binstring2buf(e)  : '[object ArrayBuffer]' === c.call(e) ? f.input = new Uint8Array(e)  : f.input = e,
f.next_in = 0,
f.avail_in = f.input.length;
do {
if (0 === f.avail_out && (f.output = new r.Buf8(p), f.next_out = 0, f.avail_out = p), (n = i.inflate(f, s.Z_NO_FLUSH)) === s.Z_NEED_DICT && v && (d = 'string' == typeof v ? o.string2buf(v)  : '[object ArrayBuffer]' === c.call(v) ? new Uint8Array(v)  : v, n = i.inflateSetDictionary(this.strm, d)), n === s.Z_BUF_ERROR && !0 === g && (n = s.Z_OK, g = !1), n !== s.Z_STREAM_END && n !== s.Z_OK) return this.onEnd(n),
this.ended = !0,
!1;
f.next_out && (0 !== f.avail_out && n !== s.Z_STREAM_END && (0 !== f.avail_in || a !== s.Z_FINISH && a !== s.Z_SYNC_FLUSH) || ('string' === this.options.to ? (l = o.utf8border(f.output, f.next_out), u = f.next_out - l, h = o.buf2string(f.output, l), f.next_out = u, f.avail_out = p - u, u && r.arraySet(f.output, f.output, l, u, 0), this.onData(h))  : this.onData(r.shrinkBuf(f.output, f.next_out)))),
0 === f.avail_in && 0 === f.avail_out && (g = !0)
} while ((f.avail_in > 0 || 0 === f.avail_out) && n !== s.Z_STREAM_END);
return n === s.Z_STREAM_END && (a = s.Z_FINISH),
a === s.Z_FINISH ? (n = i.inflateEnd(this.strm), this.onEnd(n), this.ended = !0, n === s.Z_OK)  : a !== s.Z_SYNC_FLUSH || (this.onEnd(s.Z_OK), f.avail_out = 0, !0)
},
h.prototype.onData = function (e) {
this.chunks.push(e)
},
h.prototype.onEnd = function (e) {
e === s.Z_OK && ('string' === this.options.to ? this.result = this.chunks.join('')  : this.result = r.flattenChunks(this.chunks)),
this.chunks = [
],
this.err = e,
this.msg = this.strm.msg
},
t.Inflate = h,
t.inflate = d,
t.inflateRaw = function (e, t) {
return (t = t || {
}).raw = !0,
d(e, t)
},
t.ungzip = d
},
function (e, t, n) {
'use strict';
var i = n(8),
r = 4,
o = 0,
s = 1,
a = 2;
function l(e) {
for (var t = e.length; --t >= 0; ) e[t] = 0
}
var u = 0,
c = 1,
h = 2,
d = 29,
f = 256,
p = f + 1 + d,
v = 30,
g = 19,
m = 2 * p + 1,
A = 15,
y = 16,
b = 7,
_ = 256,
w = 16,
T = 17,
k = 18,
E = [
0,
0,
0,
0,
0,
0,
0,
0,
1,
1,
1,
1,
2,
2,
2,
2,
3,
3,
3,
3,
4,
4,
4,
4,
5,
5,
5,
5,
0
],
S = [
0,
0,
0,
0,
1,
1,
2,
2,
3,
3,
4,
4,
5,
5,
6,
6,
7,
7,
8,
8,
9,
9,
10,
10,
11,
11,
12,
12,
13,
13
],
j = [
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
2,
3,
7
],
C = [
16,
17,
18,
0,
8,
7,
9,
6,
10,
5,
11,
4,
12,
3,
13,
2,
14,
1,
15
],
x = new Array(2 * (p + 2));
l(x);
var B = new Array(2 * v);
l(B);
var O = new Array(512);
l(O);
var I = new Array(256);
l(I);
var P = new Array(d);
l(P);
var R,
M,
L,
D = new Array(v);
function U(e, t, n, i, r) {
this.static_tree = e,
this.extra_bits = t,
this.extra_base = n,
this.elems = i,
this.max_length = r,
this.has_stree = e && e.length
}
function N(e, t) {
this.dyn_tree = e,
this.max_code = 0,
this.stat_desc = t
}
function F(e) {
return e < 256 ? O[e] : O[256 + (e >>> 7)]
}
function z(e, t) {
e.pending_buf[e.pending++] = 255 & t,
e.pending_buf[e.pending++] = t >>> 8 & 255
}
function H(e, t, n) {
e.bi_valid > y - n ? (e.bi_buf |= t << e.bi_valid & 65535, z(e, e.bi_buf), e.bi_buf = t >> y - e.bi_valid, e.bi_valid += n - y)  : (e.bi_buf |= t << e.bi_valid & 65535, e.bi_valid += n)
}
function Q(e, t, n) {
H(e, n[2 * t], n[2 * t + 1])
}
function Y(e, t) {
var n = 0;
do {
n |= 1 & e,
e >>>= 1,
n <<= 1
} while (--t > 0);
return n >>> 1
}
function V(e, t, n) {
var i,
r,
o = new Array(A + 1),
s = 0;
for (i = 1; i <= A; i++) o[i] = s = s + n[i - 1] << 1;
for (r = 0; r <= t; r++) {
var a = e[2 * r + 1];
0 !== a && (e[2 * r] = Y(o[a]++, a))
}
}
function G(e) {
var t;
for (t = 0; t < p; t++) e.dyn_ltree[2 * t] = 0;
for (t = 0; t < v; t++) e.dyn_dtree[2 * t] = 0;
for (t = 0; t < g; t++) e.bl_tree[2 * t] = 0;
e.dyn_ltree[2 * _] = 1,
e.opt_len = e.static_len = 0,
e.last_lit = e.matches = 0
}
function W(e) {
e.bi_valid > 8 ? z(e, e.bi_buf)  : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf),
e.bi_buf = 0,
e.bi_valid = 0
}
function q(e, t, n, i) {
var r = 2 * t,
o = 2 * n;
return e[r] < e[o] || e[r] === e[o] && i[t] <= i[n]
}
function Z(e, t, n) {
for (var i = e.heap[n], r = n << 1; r <= e.heap_len && (r < e.heap_len && q(t, e.heap[r + 1], e.heap[r], e.depth) && r++, !q(t, i, e.heap[r], e.depth)); ) e.heap[n] = e.heap[r],
n = r,
r <<= 1;
e.heap[n] = i
}
function X(e, t, n) {
var i,
r,
o,
s,
a = 0;
if (0 !== e.last_lit) do {
i = e.pending_buf[e.d_buf + 2 * a] << 8 | e.pending_buf[e.d_buf + 2 * a + 1],
r = e.pending_buf[e.l_buf + a],
a++,
0 === i ? Q(e, r, t)  : (Q(e, (o = I[r]) + f + 1, t), 0 !== (s = E[o]) && H(e, r -= P[o], s), Q(e, o = F(--i), n), 0 !== (s = S[o]) && H(e, i -= D[o], s))
} while (a < e.last_lit);
Q(e, _, t)
}
function K(e, t) {
var n,
i,
r,
o = t.dyn_tree,
s = t.stat_desc.static_tree,
a = t.stat_desc.has_stree,
l = t.stat_desc.elems,
u = - 1;
for (e.heap_len = 0, e.heap_max = m, n = 0; n < l; n++) 0 !== o[2 * n] ? (e.heap[++e.heap_len] = u = n, e.depth[n] = 0)  : o[2 * n + 1] = 0;
for (; e.heap_len < 2; ) o[2 * (r = e.heap[++e.heap_len] = u < 2 ? ++u : 0)] = 1,
e.depth[r] = 0,
e.opt_len--,
a && (e.static_len -= s[2 * r + 1]);
for (t.max_code = u, n = e.heap_len >> 1; n >= 1; n--) Z(e, o, n);
r = l;
do {
n = e.heap[1],
e.heap[1] = e.heap[e.heap_len--],
Z(e, o, 1),
i = e.heap[1],
e.heap[--e.heap_max] = n,
e.heap[--e.heap_max] = i,
o[2 * r] = o[2 * n] + o[2 * i],
e.depth[r] = (e.depth[n] >= e.depth[i] ? e.depth[n] : e.depth[i]) + 1,
o[2 * n + 1] = o[2 * i + 1] = r,
e.heap[1] = r++,
Z(e, o, 1)
} while (e.heap_len >= 2);
e.heap[--e.heap_max] = e.heap[1],
function (e, t) {
var n,
i,
r,
o,
s,
a,
l = t.dyn_tree,
u = t.max_code,
c = t.stat_desc.static_tree,
h = t.stat_desc.has_stree,
d = t.stat_desc.extra_bits,
f = t.stat_desc.extra_base,
p = t.stat_desc.max_length,
v = 0;
for (o = 0; o <= A; o++) e.bl_count[o] = 0;
for (l[2 * e.heap[e.heap_max] + 1] = 0, n = e.heap_max + 1; n < m; n++) (o = l[2 * l[2 * (i = e.heap[n]) + 1] + 1] + 1) > p && (o = p, v++),
l[2 * i + 1] = o,
i > u || (e.bl_count[o]++, s = 0, i >= f && (s = d[i - f]), a = l[2 * i], e.opt_len += a * (o + s), h && (e.static_len += a * (c[2 * i + 1] + s)));
if (0 !== v) {
do {
for (o = p - 1; 0 === e.bl_count[o]; ) o--;
e.bl_count[o]--,
e.bl_count[o + 1] += 2,
e.bl_count[p]--,
v -= 2
} while (v > 0);
for (o = p; 0 !== o; o--) for (i = e.bl_count[o]; 0 !== i; ) (r = e.heap[--n]) > u || (l[2 * r + 1] !== o && (e.opt_len += (o - l[2 * r + 1]) * l[2 * r], l[2 * r + 1] = o), i--)
}
}(e, t),
V(o, u, e.bl_count)
}
function J(e, t, n) {
var i,
r,
o = - 1,
s = t[1],
a = 0,
l = 7,
u = 4;
for (0 === s && (l = 138, u = 3), t[2 * (n + 1) + 1] = 65535, i = 0; i <= n; i++) r = s,
s = t[2 * (i + 1) + 1],
++a < l && r === s || (a < u ? e.bl_tree[2 * r] += a : 0 !== r ? (r !== o && e.bl_tree[2 * r]++, e.bl_tree[2 * w]++)  : a <= 10 ? e.bl_tree[2 * T]++ : e.bl_tree[2 * k]++, a = 0, o = r, 0 === s ? (l = 138, u = 3)  : r === s ? (l = 6, u = 3)  : (l = 7, u = 4))
}
function $(e, t, n) {
var i,
r,
o = - 1,
s = t[1],
a = 0,
l = 7,
u = 4;
for (0 === s && (l = 138, u = 3), i = 0; i <= n; i++) if (r = s, s = t[2 * (i + 1) + 1], !(++a < l && r === s)) {
if (a < u) do {
Q(e, r, e.bl_tree)
} while (0 != --a);
 else 0 !== r ? (r !== o && (Q(e, r, e.bl_tree), a--), Q(e, w, e.bl_tree), H(e, a - 3, 2))  : a <= 10 ? (Q(e, T, e.bl_tree), H(e, a - 3, 3))  : (Q(e, k, e.bl_tree), H(e, a - 11, 7));
a = 0,
o = r,
0 === s ? (l = 138, u = 3)  : r === s ? (l = 6, u = 3)  : (l = 7, u = 4)
}
}
l(D);
var ee = !1;
function te(e, t, n, r) {
H(e, (u << 1) + (r ? 1 : 0), 3),
function (e, t, n, r) {
W(e),
r && (z(e, n), z(e, ~n)),
i.arraySet(e.pending_buf, e.window, t, n, e.pending),
e.pending += n
}(e, t, n, !0)
}
t._tr_init = function (e) {
ee || (function () {
var e,
t,
n,
i,
r,
o = new Array(A + 1);
for (n = 0, i = 0; i < d - 1; i++) for (P[i] = n, e = 0; e < 1 << E[i]; e++) I[n++] = i;
for (I[n - 1] = i, r = 0, i = 0; i < 16; i++) for (D[i] = r, e = 0; e < 1 << S[i]; e++) O[r++] = i;
for (r >>= 7; i < v; i++) for (D[i] = r << 7, e = 0; e < 1 << S[i] - 7; e++) O[256 + r++] = i;
for (t = 0; t <= A; t++) o[t] = 0;
for (e = 0; e <= 143; ) x[2 * e + 1] = 8,
e++,
o[8]++;
for (; e <= 255; ) x[2 * e + 1] = 9,
e++,
o[9]++;
for (; e <= 279; ) x[2 * e + 1] = 7,
e++,
o[7]++;
for (; e <= 287; ) x[2 * e + 1] = 8,
e++,
o[8]++;
for (V(x, p + 1, o), e = 0; e < v; e++) B[2 * e + 1] = 5,
B[2 * e] = Y(e, 5);
R = new U(x, E, f + 1, p, A),
M = new U(B, S, 0, v, A),
L = new U(new Array(0), j, 0, g, b)
}(), ee = !0),
e.l_desc = new N(e.dyn_ltree, R),
e.d_desc = new N(e.dyn_dtree, M),
e.bl_desc = new N(e.bl_tree, L),
e.bi_buf = 0,
e.bi_valid = 0,
G(e)
},
t._tr_stored_block = te,
t._tr_flush_block = function (e, t, n, i) {
var l,
u,
d = 0;
e.level > 0 ? (e.strm.data_type === a && (e.strm.data_type = function (e) {
var t,
n = 4093624447;
for (t = 0; t <= 31; t++, n >>>= 1) if (1 & n && 0 !== e.dyn_ltree[2 * t]) return o;
if (0 !== e.dyn_ltree[18] || 0 !== e.dyn_ltree[20] || 0 !== e.dyn_ltree[26]) return s;
for (t = 32; t < f; t++) if (0 !== e.dyn_ltree[2 * t]) return s;
return o
}(e)), K(e, e.l_desc), K(e, e.d_desc), d = function (e) {
var t;
for (J(e, e.dyn_ltree, e.l_desc.max_code), J(e, e.dyn_dtree, e.d_desc.max_code), K(e, e.bl_desc), t = g - 1; t >= 3 && 0 === e.bl_tree[2 * C[t] + 1]; t--);
return e.opt_len += 3 * (t + 1) + 5 + 5 + 4,
t
}(e), l = e.opt_len + 3 + 7 >>> 3, (u = e.static_len + 3 + 7 >>> 3) <= l && (l = u))  : l = u = n + 5,
n + 4 <= l && - 1 !== t ? te(e, t, n, i)  : e.strategy === r || u === l ? (H(e, (c << 1) + (i ? 1 : 0), 3), X(e, x, B))  : (H(e, (h << 1) + (i ? 1 : 0), 3), function (e, t, n, i) {
var r;
for (H(e, t - 257, 5), H(e, n - 1, 5), H(e, i - 4, 4), r = 0; r < i; r++) H(e, e.bl_tree[2 * C[r] + 1], 3);
$(e, e.dyn_ltree, t - 1),
$(e, e.dyn_dtree, n - 1)
}(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, d + 1), X(e, e.dyn_ltree, e.dyn_dtree)),
G(e),
i && W(e)
},
t._tr_tally = function (e, t, n) {
return e.pending_buf[e.d_buf + 2 * e.last_lit] = t >>> 8 & 255,
e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & t,
e.pending_buf[e.l_buf + e.last_lit] = 255 & n,
e.last_lit++,
0 === t ? e.dyn_ltree[2 * n]++ : (e.matches++, t--, e.dyn_ltree[2 * (I[n] + f + 1)]++, e.dyn_dtree[2 * F(t)]++),
e.last_lit === e.lit_bufsize - 1
},
t._tr_align = function (e) {
H(e, c << 1, 3),
Q(e, _, x),
function (e) {
16 === e.bi_valid ? (z(e, e.bi_buf), e.bi_buf = 0, e.bi_valid = 0)  : e.bi_valid >= 8 && (e.pending_buf[e.pending++] = 255 & e.bi_buf, e.bi_buf >>= 8, e.bi_valid -= 8)
}(e)
}
},
function (e, t, n) {
'use strict';
var i,
r = n(8),
o = n(200),
s = n(81),
a = n(80),
l = n(39),
u = 0,
c = 1,
h = 3,
d = 4,
f = 5,
p = 0,
v = 1,
g = - 2,
m = - 3,
A = - 5,
y = - 1,
b = 1,
_ = 2,
w = 3,
T = 4,
k = 0,
E = 2,
S = 8,
j = 9,
C = 15,
x = 8,
B = 286,
O = 30,
I = 19,
P = 2 * B + 1,
R = 15,
M = 3,
L = 258,
D = L + M + 1,
U = 32,
N = 42,
F = 69,
z = 73,
H = 91,
Q = 103,
Y = 113,
V = 666,
G = 1,
W = 2,
q = 3,
Z = 4,
X = 3;
function K(e, t) {
return e.msg = l[t],
t
}
function J(e) {
return (e << 1) - (e > 4 ? 9 : 0)
}
function $(e) {
for (var t = e.length; --t >= 0; ) e[t] = 0
}
function ee(e) {
var t = e.state,
n = t.pending;
n > e.avail_out && (n = e.avail_out),
0 !== n && (r.arraySet(e.output, t.pending_buf, t.pending_out, n, e.next_out), e.next_out += n, t.pending_out += n, e.total_out += n, e.avail_out -= n, t.pending -= n, 0 === t.pending && (t.pending_out = 0))
}
function te(e, t) {
o._tr_flush_block(e, e.block_start >= 0 ? e.block_start : - 1, e.strstart - e.block_start, t),
e.block_start = e.strstart,
ee(e.strm)
}
function ne(e, t) {
e.pending_buf[e.pending++] = t
}
function ie(e, t) {
e.pending_buf[e.pending++] = t >>> 8 & 255,
e.pending_buf[e.pending++] = 255 & t
}
function re(e, t) {
var n,
i,
r = e.max_chain_length,
o = e.strstart,
s = e.prev_length,
a = e.nice_match,
l = e.strstart > e.w_size - D ? e.strstart - (e.w_size - D)  : 0,
u = e.window,
c = e.w_mask,
h = e.prev,
d = e.strstart + L,
f = u[o + s - 1],
p = u[o + s];
e.prev_length >= e.good_match && (r >>= 2),
a > e.lookahead && (a = e.lookahead);
do {
if (u[(n = t) + s] === p && u[n + s - 1] === f && u[n] === u[o] && u[++n] === u[o + 1]) {
o += 2,
n++;
do {
} while (u[++o] === u[++n] && u[++o] === u[++n] && u[++o] === u[++n] && u[++o] === u[++n] && u[++o] === u[++n] && u[++o] === u[++n] && u[++o] === u[++n] && u[++o] === u[++n] && o < d);
if (i = L - (d - o), o = d - L, i > s) {
if (e.match_start = t, s = i, i >= a) break;
f = u[o + s - 1],
p = u[o + s]
}
}
} while ((t = h[t & c]) > l && 0 != --r);
return s <= e.lookahead ? s : e.lookahead
}
function oe(e) {
var t,
n,
i,
o,
l,
u,
c,
h,
d,
f,
p = e.w_size;
do {
if (o = e.window_size - e.lookahead - e.strstart, e.strstart >= p + (p - D)) {
r.arraySet(e.window, e.window, p, p, 0),
e.match_start -= p,
e.strstart -= p,
e.block_start -= p,
t = n = e.hash_size;
do {
i = e.head[--t],
e.head[t] = i >= p ? i - p : 0
} while (--n);
t = n = p;
do {
i = e.prev[--t],
e.prev[t] = i >= p ? i - p : 0
} while (--n);
o += p
}
if (0 === e.strm.avail_in) break;
if (u = e.strm, c = e.window, h = e.strstart + e.lookahead, d = o, f = void 0, (f = u.avail_in) > d && (f = d), n = 0 === f ? 0 : (u.avail_in -= f, r.arraySet(c, u.input, u.next_in, f, h), 1 === u.state.wrap ? u.adler = s(u.adler, c, f, h)  : 2 === u.state.wrap && (u.adler = a(u.adler, c, f, h)), u.next_in += f, u.total_in += f, f), e.lookahead += n, e.lookahead + e.insert >= M) for (l = e.strstart - e.insert, e.ins_h = e.window[l], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[l + 1]) & e.hash_mask; e.insert && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[l + M - 1]) & e.hash_mask, e.prev[l & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = l, l++, e.insert--, !(e.lookahead + e.insert < M)); );
} while (e.lookahead < D && 0 !== e.strm.avail_in)
}
function se(e, t) {
for (var n, i; ; ) {
if (e.lookahead < D) {
if (oe(e), e.lookahead < D && t === u) return G;
if (0 === e.lookahead) break
}
if (n = 0, e.lookahead >= M && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + M - 1]) & e.hash_mask, n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), 0 !== n && e.strstart - n <= e.w_size - D && (e.match_length = re(e, n)), e.match_length >= M) if (i = o._tr_tally(e, e.strstart - e.match_start, e.match_length - M), e.lookahead -= e.match_length, e.match_length <= e.max_lazy_match && e.lookahead >= M) {
e.match_length--;
do {
e.strstart++,
e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + M - 1]) & e.hash_mask,
n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h],
e.head[e.ins_h] = e.strstart
} while (0 != --e.match_length);
e.strstart++
} else e.strstart += e.match_length,
e.match_length = 0,
e.ins_h = e.window[e.strstart],
e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 1]) & e.hash_mask;
 else i = o._tr_tally(e, 0, e.window[e.strstart]),
e.lookahead--,
e.strstart++;
if (i && (te(e, !1), 0 === e.strm.avail_out)) return G
}
return e.insert = e.strstart < M - 1 ? e.strstart : M - 1,
t === d ? (te(e, !0), 0 === e.strm.avail_out ? q : Z)  : e.last_lit && (te(e, !1), 0 === e.strm.avail_out) ? G : W
}
function ae(e, t) {
for (var n, i, r; ; ) {
if (e.lookahead < D) {
if (oe(e), e.lookahead < D && t === u) return G;
if (0 === e.lookahead) break
}
if (n = 0, e.lookahead >= M && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + M - 1]) & e.hash_mask, n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), e.prev_length = e.match_length, e.prev_match = e.match_start, e.match_length = M - 1, 0 !== n && e.prev_length < e.max_lazy_match && e.strstart - n <= e.w_size - D && (e.match_length = re(e, n), e.match_length <= 5 && (e.strategy === b || e.match_length === M && e.strstart - e.match_start > 4096) && (e.match_length = M - 1)), e.prev_length >= M && e.match_length <= e.prev_length) {
r = e.strstart + e.lookahead - M,
i = o._tr_tally(e, e.strstart - 1 - e.prev_match, e.prev_length - M),
e.lookahead -= e.prev_length - 1,
e.prev_length -= 2;
do {
++e.strstart <= r && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + M - 1]) & e.hash_mask, n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart)
} while (0 != --e.prev_length);
if (e.match_available = 0, e.match_length = M - 1, e.strstart++, i && (te(e, !1), 0 === e.strm.avail_out)) return G
} else if (e.match_available) {
if ((i = o._tr_tally(e, 0, e.window[e.strstart - 1])) && te(e, !1), e.strstart++, e.lookahead--, 0 === e.strm.avail_out) return G
} else e.match_available = 1,
e.strstart++,
e.lookahead--
}
return e.match_available && (i = o._tr_tally(e, 0, e.window[e.strstart - 1]), e.match_available = 0),
e.insert = e.strstart < M - 1 ? e.strstart : M - 1,
t === d ? (te(e, !0), 0 === e.strm.avail_out ? q : Z)  : e.last_lit && (te(e, !1), 0 === e.strm.avail_out) ? G : W
}
function le(e, t, n, i, r) {
this.good_length = e,
this.max_lazy = t,
this.nice_length = n,
this.max_chain = i,
this.func = r
}
function ue(e) {
var t;
return e && e.state ? (e.total_in = e.total_out = 0, e.data_type = E, (t = e.state).pending = 0, t.pending_out = 0, t.wrap < 0 && (t.wrap = - t.wrap), t.status = t.wrap ? N : Y, e.adler = 2 === t.wrap ? 0 : 1, t.last_flush = u, o._tr_init(t), p)  : K(e, g)
}
function ce(e) {
var t,
n = ue(e);
return n === p && ((t = e.state).window_size = 2 * t.w_size, $(t.head), t.max_lazy_match = i[t.level].max_lazy, t.good_match = i[t.level].good_length, t.nice_match = i[t.level].nice_length, t.max_chain_length = i[t.level].max_chain, t.strstart = 0, t.block_start = 0, t.lookahead = 0, t.insert = 0, t.match_length = t.prev_length = M - 1, t.match_available = 0, t.ins_h = 0),
n
}
function he(e, t, n, i, o, s) {
if (!e) return g;
var a = 1;
if (t === y && (t = 6), i < 0 ? (a = 0, i = - i)  : i > 15 && (a = 2, i -= 16), o < 1 || o > j || n !== S || i < 8 || i > 15 || t < 0 || t > 9 || s < 0 || s > T) return K(e, g);
8 === i && (i = 9);
var l = new function () {
this.strm = null,
this.status = 0,
this.pending_buf = null,
this.pending_buf_size = 0,
this.pending_out = 0,
this.pending = 0,
this.wrap = 0,
this.gzhead = null,
this.gzindex = 0,
this.method = S,
this.last_flush = - 1,
this.w_size = 0,
this.w_bits = 0,
this.w_mask = 0,
this.window = null,
this.window_size = 0,
this.prev = null,
this.head = null,
this.ins_h = 0,
this.hash_size = 0,
this.hash_bits = 0,
this.hash_mask = 0,
this.hash_shift = 0,
this.block_start = 0,
this.match_length = 0,
this.prev_match = 0,
this.match_available = 0,
this.strstart = 0,
this.match_start = 0,
this.lookahead = 0,
this.prev_length = 0,
this.max_chain_length = 0,
this.max_lazy_match = 0,
this.level = 0,
this.strategy = 0,
this.good_match = 0,
this.nice_match = 0,
this.dyn_ltree = new r.Buf16(2 * P),
this.dyn_dtree = new r.Buf16(2 * (2 * O + 1)),
this.bl_tree = new r.Buf16(2 * (2 * I + 1)),
$(this.dyn_ltree),
$(this.dyn_dtree),
$(this.bl_tree),
this.l_desc = null,
this.d_desc = null,
this.bl_desc = null,
this.bl_count = new r.Buf16(R + 1),
this.heap = new r.Buf16(2 * B + 1),
$(this.heap),
this.heap_len = 0,
this.heap_max = 0,
this.depth = new r.Buf16(2 * B + 1),
$(this.depth),
this.l_buf = 0,
this.lit_bufsize = 0,
this.last_lit = 0,
this.d_buf = 0,
this.opt_len = 0,
this.static_len = 0,
this.matches = 0,
this.insert = 0,
this.bi_buf = 0,
this.bi_valid = 0
};
return e.state = l,
l.strm = e,
l.wrap = a,
l.gzhead = null,
l.w_bits = i,
l.w_size = 1 << l.w_bits,
l.w_mask = l.w_size - 1,
l.hash_bits = o + 7,
l.hash_size = 1 << l.hash_bits,
l.hash_mask = l.hash_size - 1,
l.hash_shift = ~~((l.hash_bits + M - 1) / M),
l.window = new r.Buf8(2 * l.w_size),
l.head = new r.Buf16(l.hash_size),
l.prev = new r.Buf16(l.w_size),
l.lit_bufsize = 1 << o + 6,
l.pending_buf_size = 4 * l.lit_bufsize,
l.pending_buf = new r.Buf8(l.pending_buf_size),
l.d_buf = 1 * l.lit_bufsize,
l.l_buf = 3 * l.lit_bufsize,
l.level = t,
l.strategy = s,
l.method = n,
ce(e)
}
i = [
new le(0, 0, 0, 0, function (e, t) {
var n = 65535;
for (n > e.pending_buf_size - 5 && (n = e.pending_buf_size - 5); ; ) {
if (e.lookahead <= 1) {
if (oe(e), 0 === e.lookahead && t === u) return G;
if (0 === e.lookahead) break
}
e.strstart += e.lookahead,
e.lookahead = 0;
var i = e.block_start + n;
if ((0 === e.strstart || e.strstart >= i) && (e.lookahead = e.strstart - i, e.strstart = i, te(e, !1), 0 === e.strm.avail_out)) return G;
if (e.strstart - e.block_start >= e.w_size - D && (te(e, !1), 0 === e.strm.avail_out)) return G
}
return e.insert = 0,
t === d ? (te(e, !0), 0 === e.strm.avail_out ? q : Z)  : (e.strstart > e.block_start && (te(e, !1), e.strm.avail_out), G)
}),
new le(4, 4, 8, 4, se),
new le(4, 5, 16, 8, se),
new le(4, 6, 32, 32, se),
new le(4, 4, 16, 16, ae),
new le(8, 16, 32, 32, ae),
new le(8, 16, 128, 128, ae),
new le(8, 32, 128, 256, ae),
new le(32, 128, 258, 1024, ae),
new le(32, 258, 258, 4096, ae)
],
t.deflateInit = function (e, t) {
return he(e, t, S, C, x, k)
},
t.deflateInit2 = he,
t.deflateReset = ce,
t.deflateResetKeep = ue,
t.deflateSetHeader = function (e, t) {
return e && e.state ? 2 !== e.state.wrap ? g : (e.state.gzhead = t, p)  : g
},
t.deflate = function (e, t) {
var n,
r,
s,
l;
if (!e || !e.state || t > f || t < 0) return e ? K(e, g)  : g;
if (r = e.state, !e.output || !e.input && 0 !== e.avail_in || r.status === V && t !== d) return K(e, 0 === e.avail_out ? A : g);
if (r.strm = e, n = r.last_flush, r.last_flush = t, r.status === N) if (2 === r.wrap) e.adler = 0,
ne(r, 31),
ne(r, 139),
ne(r, 8),
r.gzhead ? (ne(r, (r.gzhead.text ? 1 : 0) + (r.gzhead.hcrc ? 2 : 0) + (r.gzhead.extra ? 4 : 0) + (r.gzhead.name ? 8 : 0) + (r.gzhead.comment ? 16 : 0)), ne(r, 255 & r.gzhead.time), ne(r, r.gzhead.time >> 8 & 255), ne(r, r.gzhead.time >> 16 & 255), ne(r, r.gzhead.time >> 24 & 255), ne(r, 9 === r.level ? 2 : r.strategy >= _ || r.level < 2 ? 4 : 0), ne(r, 255 & r.gzhead.os), r.gzhead.extra && r.gzhead.extra.length && (ne(r, 255 & r.gzhead.extra.length), ne(r, r.gzhead.extra.length >> 8 & 255)), r.gzhead.hcrc && (e.adler = a(e.adler, r.pending_buf, r.pending, 0)), r.gzindex = 0, r.status = F)  : (ne(r, 0), ne(r, 0), ne(r, 0), ne(r, 0), ne(r, 0), ne(r, 9 === r.level ? 2 : r.strategy >= _ || r.level < 2 ? 4 : 0), ne(r, X), r.status = Y);
 else {
var m = S + (r.w_bits - 8 << 4) << 8;
m |= (r.strategy >= _ || r.level < 2 ? 0 : r.level < 6 ? 1 : 6 === r.level ? 2 : 3) << 6,
0 !== r.strstart && (m |= U),
m += 31 - m % 31,
r.status = Y,
ie(r, m),
0 !== r.strstart && (ie(r, e.adler >>> 16), ie(r, 65535 & e.adler)),
e.adler = 1
}
if (r.status === F) if (r.gzhead.extra) {
for (s = r.pending; r.gzindex < (65535 & r.gzhead.extra.length) && (r.pending !== r.pending_buf_size || (r.gzhead.hcrc && r.pending > s && (e.adler = a(e.adler, r.pending_buf, r.pending - s, s)), ee(e), s = r.pending, r.pending !== r.pending_buf_size)); ) ne(r, 255 & r.gzhead.extra[r.gzindex]),
r.gzindex++;
r.gzhead.hcrc && r.pending > s && (e.adler = a(e.adler, r.pending_buf, r.pending - s, s)),
r.gzindex === r.gzhead.extra.length && (r.gzindex = 0, r.status = z)
} else r.status = z;
if (r.status === z) if (r.gzhead.name) {
s = r.pending;
do {
if (r.pending === r.pending_buf_size && (r.gzhead.hcrc && r.pending > s && (e.adler = a(e.adler, r.pending_buf, r.pending - s, s)), ee(e), s = r.pending, r.pending === r.pending_buf_size)) {
l = 1;
break
}
l = r.gzindex < r.gzhead.name.length ? 255 & r.gzhead.name.charCodeAt(r.gzindex++)  : 0,
ne(r, l)
} while (0 !== l);
r.gzhead.hcrc && r.pending > s && (e.adler = a(e.adler, r.pending_buf, r.pending - s, s)),
0 === l && (r.gzindex = 0, r.status = H)
} else r.status = H;
if (r.status === H) if (r.gzhead.comment) {
s = r.pending;
do {
if (r.pending === r.pending_buf_size && (r.gzhead.hcrc && r.pending > s && (e.adler = a(e.adler, r.pending_buf, r.pending - s, s)), ee(e), s = r.pending, r.pending === r.pending_buf_size)) {
l = 1;
break
}
l = r.gzindex < r.gzhead.comment.length ? 255 & r.gzhead.comment.charCodeAt(r.gzindex++)  : 0,
ne(r, l)
} while (0 !== l);
r.gzhead.hcrc && r.pending > s && (e.adler = a(e.adler, r.pending_buf, r.pending - s, s)),
0 === l && (r.status = Q)
} else r.status = Q;
if (r.status === Q && (r.gzhead.hcrc ? (r.pending + 2 > r.pending_buf_size && ee(e), r.pending + 2 <= r.pending_buf_size && (ne(r, 255 & e.adler), ne(r, e.adler >> 8 & 255), e.adler = 0, r.status = Y))  : r.status = Y), 0 !== r.pending) {
if (ee(e), 0 === e.avail_out) return r.last_flush = - 1,
p
} else if (0 === e.avail_in && J(t) <= J(n) && t !== d) return K(e, A);
if (r.status === V && 0 !== e.avail_in) return K(e, A);
if (0 !== e.avail_in || 0 !== r.lookahead || t !== u && r.status !== V) {
var y = r.strategy === _ ? function (e, t) {
for (var n; ; ) {
if (0 === e.lookahead && (oe(e), 0 === e.lookahead)) {
if (t === u) return G;
break
}
if (e.match_length = 0, n = o._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++, n && (te(e, !1), 0 === e.strm.avail_out)) return G
}
return e.insert = 0,
t === d ? (te(e, !0), 0 === e.strm.avail_out ? q : Z)  : e.last_lit && (te(e, !1), 0 === e.strm.avail_out) ? G : W
}(r, t)  : r.strategy === w ? function (e, t) {
for (var n, i, r, s, a = e.window; ; ) {
if (e.lookahead <= L) {
if (oe(e), e.lookahead <= L && t === u) return G;
if (0 === e.lookahead) break
}
if (e.match_length = 0, e.lookahead >= M && e.strstart > 0 && (i = a[r = e.strstart - 1]) === a[++r] && i === a[++r] && i === a[++r]) {
s = e.strstart + L;
do {
} while (i === a[++r] && i === a[++r] && i === a[++r] && i === a[++r] && i === a[++r] && i === a[++r] && i === a[++r] && i === a[++r] && r < s);
e.match_length = L - (s - r),
e.match_length > e.lookahead && (e.match_length = e.lookahead)
}
if (e.match_length >= M ? (n = o._tr_tally(e, 1, e.match_length - M), e.lookahead -= e.match_length, e.strstart += e.match_length, e.match_length = 0)  : (n = o._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++), n && (te(e, !1), 0 === e.strm.avail_out)) return G
}
return e.insert = 0,
t === d ? (te(e, !0), 0 === e.strm.avail_out ? q : Z)  : e.last_lit && (te(e, !1), 0 === e.strm.avail_out) ? G : W
}(r, t)  : i[r.level].func(r, t);
if (y !== q && y !== Z || (r.status = V), y === G || y === q) return 0 === e.avail_out && (r.last_flush = - 1),
p;
if (y === W && (t === c ? o._tr_align(r)  : t !== f && (o._tr_stored_block(r, 0, 0, !1), t === h && ($(r.head), 0 === r.lookahead && (r.strstart = 0, r.block_start = 0, r.insert = 0))), ee(e), 0 === e.avail_out)) return r.last_flush = - 1,
p
}
return t !== d ? p : r.wrap <= 0 ? v : (2 === r.wrap ? (ne(r, 255 & e.adler), ne(r, e.adler >> 8 & 255), ne(r, e.adler >> 16 & 255), ne(r, e.adler >> 24 & 255), ne(r, 255 & e.total_in), ne(r, e.total_in >> 8 & 255), ne(r, e.total_in >> 16 & 255), ne(r, e.total_in >> 24 & 255))  : (ie(r, e.adler >>> 16), ie(r, 65535 & e.adler)), ee(e), r.wrap > 0 && (r.wrap = - r.wrap), 0 !== r.pending ? p : v)
},
t.deflateEnd = function (e) {
var t;
return e && e.state ? (t = e.state.status) !== N && t !== F && t !== z && t !== H && t !== Q && t !== Y && t !== V ? K(e, g)  : (e.state = null, t === Y ? K(e, m)  : p)  : g
},
t.deflateSetDictionary = function (e, t) {
var n,
i,
o,
a,
l,
u,
c,
h,
d = t.length;
if (!e || !e.state) return g;
if (2 === (a = (n = e.state).wrap) || 1 === a && n.status !== N || n.lookahead) return g;
for (1 === a && (e.adler = s(e.adler, t, d, 0)), n.wrap = 0, d >= n.w_size && (0 === a && ($(n.head), n.strstart = 0, n.block_start = 0, n.insert = 0), h = new r.Buf8(n.w_size), r.arraySet(h, t, d - n.w_size, n.w_size, 0), t = h, d = n.w_size), l = e.avail_in, u = e.next_in, c = e.input, e.avail_in = d, e.next_in = 0, e.input = t, oe(n); n.lookahead >= M; ) {
i = n.strstart,
o = n.lookahead - (M - 1);
do {
n.ins_h = (n.ins_h << n.hash_shift ^ n.window[i + M - 1]) & n.hash_mask,
n.prev[i & n.w_mask] = n.head[n.ins_h],
n.head[n.ins_h] = i,
i++
} while (--o);
n.strstart = i,
n.lookahead = M - 1,
oe(n)
}
return n.strstart += n.lookahead,
n.block_start = n.strstart,
n.insert = n.lookahead,
n.lookahead = 0,
n.match_length = n.prev_length = M - 1,
n.match_available = 0,
e.next_in = u,
e.input = c,
e.avail_in = l,
n.wrap = a,
p
},
t.deflateInfo = 'pako deflate (from Nodeca project)'
},
function (e, t, n) {
'use strict';
var i = n(201),
r = n(8),
o = n(79),
s = n(39),
a = n(78),
l = Object.prototype.toString,
u = 0,
c = - 1,
h = 0,
d = 8;
function f(e) {
if (!(this instanceof f)) return new f(e);
this.options = r.assign({
level: c,
method: d,
chunkSize: 16384,
windowBits: 15,
memLevel: 8,
strategy: h,
to: ''
}, e || {
});
var t = this.options;
t.raw && t.windowBits > 0 ? t.windowBits = - t.windowBits : t.gzip && t.windowBits > 0 && t.windowBits < 16 && (t.windowBits += 16),
this.err = 0,
this.msg = '',
this.ended = !1,
this.chunks = [
],
this.strm = new a,
this.strm.avail_out = 0;
var n = i.deflateInit2(this.strm, t.level, t.method, t.windowBits, t.memLevel, t.strategy);
if (n !== u) throw new Error(s[n]);
if (t.header && i.deflateSetHeader(this.strm, t.header), t.dictionary) {
var p;
if (p = 'string' == typeof t.dictionary ? o.string2buf(t.dictionary)  : '[object ArrayBuffer]' === l.call(t.dictionary) ? new Uint8Array(t.dictionary)  : t.dictionary, (n = i.deflateSetDictionary(this.strm, p)) !== u) throw new Error(s[n]);
this._dict_set = !0
}
}
function p(e, t) {
var n = new f(t);
if (n.push(e, !0), n.err) throw n.msg || s[n.err];
return n.result
}
f.prototype.push = function (e, t) {
var n,
s,
a = this.strm,
c = this.options.chunkSize;
if (this.ended) return !1;
s = t === ~~t ? t : !0 === t ? 4 : 0,
'string' == typeof e ? a.input = o.string2buf(e)  : '[object ArrayBuffer]' === l.call(e) ? a.input = new Uint8Array(e)  : a.input = e,
a.next_in = 0,
a.avail_in = a.input.length;
do {
if (0 === a.avail_out && (a.output = new r.Buf8(c), a.next_out = 0, a.avail_out = c), 1 !== (n = i.deflate(a, s)) && n !== u) return this.onEnd(n),
this.ended = !0,
!1;
0 !== a.avail_out && (0 !== a.avail_in || 4 !== s && 2 !== s) || ('string' === this.options.to ? this.onData(o.buf2binstring(r.shrinkBuf(a.output, a.next_out)))  : this.onData(r.shrinkBuf(a.output, a.next_out)))
} while ((a.avail_in > 0 || 0 === a.avail_out) && 1 !== n);
return 4 === s ? (n = i.deflateEnd(this.strm), this.onEnd(n), this.ended = !0, n === u)  : 2 !== s || (this.onEnd(u), a.avail_out = 0, !0)
},
f.prototype.onData = function (e) {
this.chunks.push(e)
},
f.prototype.onEnd = function (e) {
e === u && ('string' === this.options.to ? this.result = this.chunks.join('')  : this.result = r.flattenChunks(this.chunks)),
this.chunks = [
],
this.err = e,
this.msg = this.strm.msg
},
t.Deflate = f,
t.deflate = p,
t.deflateRaw = function (e, t) {
return (t = t || {
}).raw = !0,
p(e, t)
},
t.gzip = function (e, t) {
return (t = t || {
}).gzip = !0,
p(e, t)
}
},
function (e, t, n) {
'use strict';
var i = {
};
(0, n(8).assign) (i, n(202), n(199), n(77)),
e.exports = i
},
function (e, t, n) {
'use strict';
var i = 'undefined' != typeof Uint8Array && 'undefined' != typeof Uint16Array && 'undefined' != typeof Uint32Array,
r = n(203),
o = n(2),
s = n(5),
a = i ? 'uint8array' : 'array';
function l(e, t) {
s.call(this, 'FlateWorker/' + e),
this._pako = null,
this._pakoAction = e,
this._pakoOptions = t,
this.meta = {
}
}
t.magic = '\0',
o.inherits(l, s),
l.prototype.processChunk = function (e) {
this.meta = e.meta,
null === this._pako && this._createPako(),
this._pako.push(o.transformTo(a, e.data), !1)
},
l.prototype.flush = function () {
s.prototype.flush.call(this),
null === this._pako && this._createPako(),
this._pako.push([], !0)
},
l.prototype.cleanUp = function () {
s.prototype.cleanUp.call(this),
this._pako = null
},
l.prototype._createPako = function () {
this._pako = new r[this._pakoAction]({
raw: !0,
level: this._pakoOptions.level || - 1
});
var e = this;
this._pako.onData = function (t) {
e.push({
data: t,
meta: e.meta
})
}
},
t.compressWorker = function (e) {
return new l('Deflate', e)
},
t.uncompressWorker = function () {
return new l('Inflate', {
})
}
},
function (e, t, n) {
'use strict';
var i = n(82),
r = n(194);
t.generateWorker = function (e, t, n) {
var o = new r(t.streamFiles, n, t.platform, t.encodeFileName),
s = 0;
try {
e.forEach(function (e, n) {
s++;
var r = function (e, t) {
var n = e || t,
r = i[n];
if (!r) throw new Error(n + ' is not a valid compression method !');
return r
}(n.options.compression, t.compression),
a = n.options.compressionOptions || t.compressionOptions || {
},
l = n.dir,
u = n.date;
n._compressWorker(r, a).withStreamInfo('file', {
name: e,
dir: l,
date: u,
comment: n.comment || '',
unixPermissions: n.unixPermissions,
dosPermissions: n.dosPermissions
}).pipe(o)
}),
o.entriesCount = s
} catch (e) {
o.error(e)
}
return o
}
},
function (e, t, n) {
'use strict';
var i = n(87),
r = n(85),
o = n(17),
s = n(41),
a = n(5),
l = function (e, t, n) {
this.name = e,
this.dir = n.dir,
this.date = n.date,
this.comment = n.comment,
this.unixPermissions = n.unixPermissions,
this.dosPermissions = n.dosPermissions,
this._data = t,
this._dataBinary = n.binary,
this.options = {
compression: n.compression,
compressionOptions: n.compressionOptions
}
};
l.prototype = {
internalStream: function (e) {
var t = null,
n = 'string';
try {
if (!e) throw new Error('No output type specified.');
var r = 'string' === (n = e.toLowerCase()) || 'text' === n;
'binarystring' !== n && 'text' !== n || (n = 'string'),
t = this._decompressWorker();
var s = !this._dataBinary;
s && !r && (t = t.pipe(new o.Utf8EncodeWorker)),
!s && r && (t = t.pipe(new o.Utf8DecodeWorker))
} catch (e) {
(t = new a('error')).error(e)
}
return new i(t, n, '')
},
async: function (e, t) {
return this.internalStream(e).accumulate(t)
},
nodeStream: function (e, t) {
return this.internalStream(e || 'nodebuffer').toNodejsStream(t)
},
_compressWorker: function (e, t) {
if (this._data instanceof s && this._data.compression.magic === e.magic) return this._data.getCompressedWorker();
var n = this._decompressWorker();
return this._dataBinary || (n = n.pipe(new o.Utf8EncodeWorker)),
s.createWorkerFrom(n, e, t)
},
_decompressWorker: function () {
return this._data instanceof s ? this._data.getContentWorker()  : this._data instanceof a ? this._data : new r(this._data)
}
};
for (var u = [
'asText',
'asBinary',
'asNodeBuffer',
'asUint8Array',
'asArrayBuffer'
], c = function () {
throw new Error('This method has been removed in JSZip 3.0, please check the upgrade guide.')
}, h = 0; h < u.length; h++) l.prototype[u[h]] = c;
e.exports = l
},
function (e, t, n) {
'use strict';
var i = n(98).Readable;
function r(e, t, n) {
i.call(this, t),
this._helper = e;
var r = this;
e.on('data', function (e, t) {
r.push(e) || r._helper.pause(),
n && n(t)
}).on('error', function (e) {
r.emit('error', e)
}).on('end', function () {
r.push(null)
})
}
n(2).inherits(r, i),
r.prototype._read = function () {
this._helper.resume()
},
e.exports = r
},
function (e, t, n) {
'use strict';
var i = n(5),
r = n(2);
function o(e) {
i.call(this, 'ConvertWorker to ' + e),
this.destType = e
}
r.inherits(o, i),
o.prototype.processChunk = function (e) {
this.push({
data: r.transformTo(this.destType, e.data),
meta: e.meta
})
},
e.exports = o
},
function (e, t, n) {
'use strict';
(function (t) {
var n,
i,
r = t.MutationObserver || t.WebKitMutationObserver;
if (r) {
var o = 0,
s = new r(c),
a = t.document.createTextNode('');
s.observe(a, {
characterData: !0
}),
n = function () {
a.data = o = ++o % 2
}
} else if (t.setImmediate || void 0 === t.MessageChannel) n = 'document' in t && 'onreadystatechange' in t.document.createElement('script') ? function () {
var e = t.document.createElement('script');
e.onreadystatechange = function () {
c(),
e.onreadystatechange = null,
e.parentNode.removeChild(e),
e = null
},
t.document.documentElement.appendChild(e)
}
 : function () {
setTimeout(c, 0)
};
 else {
var l = new t.MessageChannel;
l.port1.onmessage = c,
n = function () {
l.port2.postMessage(0)
}
}
var u = [
];
function c() {
var e,
t;
i = !0;
for (var n = u.length; n; ) {
for (t = u, u = [
], e = - 1; ++e < n; ) t[e]();
n = u.length
}
i = !1
}
e.exports = function (e) {
1 !== u.push(e) || i || n()
}
}).call(this, n(7))
},
function (e, t, n) {
'use strict';
var i = n(209);
function r() {
}
var o = {
},
s = [
'REJECTED'
],
a = [
'FULFILLED'
],
l = [
'PENDING'
];
function u(e) {
if ('function' != typeof e) throw new TypeError('resolver must be a function');
this.state = l,
this.queue = [
],
this.outcome = void 0,
e !== r && f(this, e)
}
function c(e, t, n) {
this.promise = e,
'function' == typeof t && (this.onFulfilled = t, this.callFulfilled = this.otherCallFulfilled),
'function' == typeof n && (this.onRejected = n, this.callRejected = this.otherCallRejected)
}
function h(e, t, n) {
i(function () {
var i;
try {
i = t(n)
} catch (t) {
return o.reject(e, t)
}
i === e ? o.reject(e, new TypeError('Cannot resolve promise with itself'))  : o.resolve(e, i)
})
}
function d(e) {
var t = e && e.then;
if (e && ('object' == typeof e || 'function' == typeof e) && 'function' == typeof t) return function () {
t.apply(e, arguments)
}
}
function f(e, t) {
var n = !1;
function i(t) {
n || (n = !0, o.reject(e, t))
}
function r(t) {
n || (n = !0, o.resolve(e, t))
}
var s = p(function () {
t(r, i)
});
'error' === s.status && i(s.value)
}
function p(e, t) {
var n = {
};
try {
n.value = e(t),
n.status = 'success'
} catch (e) {
n.status = 'error',
n.value = e
}
return n
}
e.exports = u,
u.prototype.catch = function (e) {
return this.then(null, e)
},
u.prototype.then = function (e, t) {
if ('function' != typeof e && this.state === a || 'function' != typeof t && this.state === s) return this;
var n = new this.constructor(r);
this.state !== l ? h(n, this.state === a ? e : t, this.outcome)  : this.queue.push(new c(n, e, t));
return n
},
c.prototype.callFulfilled = function (e) {
o.resolve(this.promise, e)
},
c.prototype.otherCallFulfilled = function (e) {
h(this.promise, this.onFulfilled, e)
},
c.prototype.callRejected = function (e) {
o.reject(this.promise, e)
},
c.prototype.otherCallRejected = function (e) {
h(this.promise, this.onRejected, e)
},
o.resolve = function (e, t) {
var n = p(d, t);
if ('error' === n.status) return o.reject(e, n.value);
var i = n.value;
if (i) f(e, i);
 else {
e.state = a,
e.outcome = t;
for (var r = - 1, s = e.queue.length; ++r < s; ) e.queue[r].callFulfilled(t)
}
return e
},
o.reject = function (e, t) {
e.state = s,
e.outcome = t;
for (var n = - 1, i = e.queue.length; ++n < i; ) e.queue[n].callRejected(t);
return e
},
u.resolve = function (e) {
if (e instanceof this) return e;
return o.resolve(new this(r), e)
},
u.reject = function (e) {
var t = new this(r);
return o.reject(t, e)
},
u.all = function (e) {
var t = this;
if ('[object Array]' !== Object.prototype.toString.call(e)) return this.reject(new TypeError('must be an array'));
var n = e.length,
i = !1;
if (!n) return this.resolve([]);
var s = new Array(n),
a = 0,
l = - 1,
u = new this(r);
for (; ++l < n; ) c(e[l], l);
return u;
function c(e, r) {
t.resolve(e).then(function (e) {
s[r] = e,
++a !== n || i || (i = !0, o.resolve(u, s))
}, function (e) {
i || (i = !0, o.reject(u, e))
})
}
},
u.race = function (e) {
var t = this;
if ('[object Array]' !== Object.prototype.toString.call(e)) return this.reject(new TypeError('must be an array'));
var n = e.length,
i = !1;
if (!n) return this.resolve([]);
var s = - 1,
a = new this(r);
for (; ++s < n; ) l = e[s],
t.resolve(l).then(function (e) {
i || (i = !0, o.resolve(a, e))
}, function (e) {
i || (i = !0, o.reject(a, e))
});
var l;
return a
}
},
function (e, t) {
var n = {
}.toString;
e.exports = function (e) {
return n.call(e).slice(8, - 1)
}
},
function (e, t, n) {
e.exports = n(27).document && document.documentElement
},
function (e, t) {
e.exports = function (e, t, n) {
var i = void 0 === n;
switch (t.length) {
case 0:
return i ? e()  : e.call(n);
case 1:
return i ? e(t[0])  : e.call(n, t[0]);
case 2:
return i ? e(t[0], t[1])  : e.call(n, t[0], t[1]);
case 3:
return i ? e(t[0], t[1], t[2])  : e.call(n, t[0], t[1], t[2]);
case 4:
return i ? e(t[0], t[1], t[2], t[3])  : e.call(n, t[0], t[1], t[2], t[3])
}
return e.apply(n, t)
}
},
function (e, t, n) {
var i,
r,
o,
s = n(90),
a = n(213),
l = n(212),
u = n(88),
c = n(27),
h = c.process,
d = c.setImmediate,
f = c.clearImmediate,
p = c.MessageChannel,
v = 0,
g = {
},
m = function () {
var e = + this;
if (g.hasOwnProperty(e)) {
var t = g[e];
delete g[e],
t()
}
},
A = function (e) {
m.call(e.data)
};
d && f || (d = function (e) {
for (var t = [
], n = 1; arguments.length > n; ) t.push(arguments[n++]);
return g[++v] = function () {
a('function' == typeof e ? e : Function(e), t)
},
i(v),
v
}, f = function (e) {
delete g[e]
}, 'process' == n(211) (h) ? i = function (e) {
h.nextTick(s(m, e, 1))
}
 : p ? (o = (r = new p).port2, r.port1.onmessage = A, i = s(o.postMessage, o, 1))  : c.addEventListener && 'function' == typeof postMessage && !c.importScripts ? (i = function (e) {
c.postMessage(e + '', '*')
}, c.addEventListener('message', A, !1))  : i = 'onreadystatechange' in u('script') ? function (e) {
l.appendChild(u('script')).onreadystatechange = function () {
l.removeChild(this),
m.call(e)
}
}
 : function (e) {
setTimeout(s(m, e, 1), 0)
}),
e.exports = {
set: d,
clear: f
}
},
function (e, t) {
e.exports = function (e, t) {
return {
enumerable: !(1 & e),
configurable: !(2 & e),
writable: !(4 & e),
value: t
}
}
},
function (e, t, n) {
var i = n(43);
e.exports = function (e, t) {
if (!i(e)) return e;
var n,
r;
if (t && 'function' == typeof (n = e.toString) && !i(r = n.call(e))) return r;
if ('function' == typeof (n = e.valueOf) && !i(r = n.call(e))) return r;
if (!t && 'function' == typeof (n = e.toString) && !i(r = n.call(e))) return r;
throw TypeError('Can\'t convert object to primitive value')
}
},
function (e, t, n) {
e.exports = !n(42) && !n(89) (function () {
return 7 != Object.defineProperty(n(88) ('div'), 'a', {
get: function () {
return 7
}
}).a
})
},
function (e, t, n) {
var i = n(43);
e.exports = function (e) {
if (!i(e)) throw TypeError(e + ' is not an object!');
return e
}
},
function (e, t, n) {
var i = n(218),
r = n(217),
o = n(216),
s = Object.defineProperty;
t.f = n(42) ? Object.defineProperty : function (e, t, n) {
if (i(e), t = o(t, !0), i(n), r) try {
return s(e, t, n)
} catch (e) {
}
if ('get' in n || 'set' in n) throw TypeError('Accessors not supported!');
return 'value' in n && (e[t] = n.value),
e
}
},
function (e, t, n) {
var i = n(219),
r = n(215);
e.exports = n(42) ? function (e, t, n) {
return i.f(e, t, r(1, n))
}
 : function (e, t, n) {
return e[t] = n,
e
}
},
function (e, t) {
e.exports = function (e) {
if ('function' != typeof e) throw TypeError(e + ' is not a function!');
return e
}
},
function (e, t, n) {
var i = n(27),
r = n(91),
o = n(90),
s = n(220),
a = function (e, t, n) {
var l,
u,
c,
h = e & a.F,
d = e & a.G,
f = e & a.S,
p = e & a.P,
v = e & a.B,
g = e & a.W,
m = d ? r : r[t] || (r[t] = {
}),
A = m.prototype,
y = d ? i : f ? i[t] : (i[t] || {
}).prototype;
for (l in d && (n = t), n) (u = !h && y && void 0 !== y[l]) && l in m || (c = u ? y[l] : n[l], m[l] = d && 'function' != typeof y[l] ? n[l] : v && u ? o(c, i)  : g && y[l] == c ? function (e) {
var t = function (t, n, i) {
if (this instanceof e) {
switch (arguments.length) {
case 0:
return new e;
case 1:
return new e(t);
case 2:
return new e(t, n)
}
return new e(t, n, i)
}
return e.apply(this, arguments)
};
return t.prototype = e.prototype,
t
}(c) : p && 'function' == typeof c ? o(Function.call, c)  : c,
p && ((m.virtual || (m.virtual = {
})) [l] = c, e & a.R && A && !A[l] && s(A, l, c)))
}; a.F = 1, a.G = 2, a.S = 4, a.P = 8, a.B = 16, a.W = 32, a.U = 64, a.R = 128, e.exports = a
},
function (e, t, n) {
var i = n(222),
r = n(214);
i(i.G + i.B, {
setImmediate: r.set,
clearImmediate: r.clear
})
},
function (e, t, n) {
n(223),
e.exports = n(91).setImmediate
},
function (e, t, n) {
e.exports = n(45).PassThrough
},
function (e, t, n) {
e.exports = n(45).Transform
},
function (e, t, n) {
e.exports = n(11)
},
function (e, t, n) {
e.exports = n(44)
},
function (e, t, n) {
'use strict';
e.exports = o;
var i = n(93),
r = n(21);
function o(e) {
if (!(this instanceof o)) return new o(e);
i.call(this, e)
}
r.inherits = n(16),
r.inherits(o, i),
o.prototype._transform = function (e, t, n) {
n(null, e)
}
},
function (e, t, n) {
(function (t) {
function n(e) {
try {
if (!t.localStorage) return !1
} catch (e) {
return !1
}
var n = t.localStorage[e];
return null != n && 'true' === String(n).toLowerCase()
}
e.exports = function (e, t) {
if (n('noDeprecation')) return e;
var i = !1;
return function () {
if (!i) {
if (n('throwDeprecation')) throw new Error(t);
n('traceDeprecation') ? console.trace(t)  : console.warn(t),
i = !0
}
return e.apply(this, arguments)
}
}
}).call(this, n(7))
},
function (e, t, n) {
(function (e, t) {
!function (e, n) {
'use strict';
if (!e.setImmediate) {
var i,
r,
o,
s,
a,
l = 1,
u = {
},
c = !1,
h = e.document,
d = Object.getPrototypeOf && Object.getPrototypeOf(e);
d = d && d.setTimeout ? d : e,
'[object process]' === {
}.toString.call(e.process) ? i = function (e) {
t.nextTick(function () {
p(e)
})
}
 : !function () {
if (e.postMessage && !e.importScripts) {
var t = !0,
n = e.onmessage;
return e.onmessage = function () {
t = !1
},
e.postMessage('', '*'),
e.onmessage = n,
t
}
}() ? e.MessageChannel ? ((o = new MessageChannel).port1.onmessage = function (e) {
p(e.data)
}, i = function (e) {
o.port2.postMessage(e)
})  : h && 'onreadystatechange' in h.createElement('script') ? (r = h.documentElement, i = function (e) {
var t = h.createElement('script');
t.onreadystatechange = function () {
p(e),
t.onreadystatechange = null,
r.removeChild(t),
t = null
},
r.appendChild(t)
})  : i = function (e) {
setTimeout(p, 0, e)
}
 : (s = 'setImmediate$' + Math.random() + '$', a = function (t) {
t.source === e && 'string' == typeof t.data && 0 === t.data.indexOf(s) && p( + t.data.slice(s.length))
}, e.addEventListener ? e.addEventListener('message', a, !1)  : e.attachEvent('onmessage', a), i = function (t) {
e.postMessage(s + t, '*')
}),
d.setImmediate = function (e) {
'function' != typeof e && (e = new Function('' + e));
for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];
var r = {
callback: e,
args: t
};
return u[l] = r,
i(l),
l++
},
d.clearImmediate = f
}
function f(e) {
delete u[e]
}
function p(e) {
if (c) setTimeout(p, 0, e);
 else {
var t = u[e];
if (t) {
c = !0;
try {
!function (e) {
var t = e.callback,
i = e.args;
switch (i.length) {
case 0:
t();
break;
case 1:
t(i[0]);
break;
case 2:
t(i[0], i[1]);
break;
case 3:
t(i[0], i[1], i[2]);
break;
default:
t.apply(n, i)
}
}(t)
} finally {
f(e),
c = !1
}
}
}
}
}('undefined' == typeof self ? void 0 === e ? this : e : self)
}).call(this, n(7), n(31))
},
function (e, t, n) {
(function (e) {
var i = Function.prototype.apply;
function r(e, t) {
this._id = e,
this._clearFn = t
}
t.setTimeout = function () {
return new r(i.call(setTimeout, window, arguments), clearTimeout)
},
t.setInterval = function () {
return new r(i.call(setInterval, window, arguments), clearInterval)
},
t.clearTimeout = t.clearInterval = function (e) {
e && e.close()
},
r.prototype.unref = r.prototype.ref = function () {
},
r.prototype.close = function () {
this._clearFn.call(window, this._id)
},
t.enroll = function (e, t) {
clearTimeout(e._idleTimeoutId),
e._idleTimeout = t
},
t.unenroll = function (e) {
clearTimeout(e._idleTimeoutId),
e._idleTimeout = - 1
},
t._unrefActive = t.active = function (e) {
clearTimeout(e._idleTimeoutId);
var t = e._idleTimeout;
t >= 0 && (e._idleTimeoutId = setTimeout(function () {
e._onTimeout && e._onTimeout()
}, t))
},
n(231),
t.setImmediate = 'undefined' != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate,
t.clearImmediate = 'undefined' != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate
}).call(this, n(7))
},
function (e, t) {
},
function (e, t, n) {
'use strict';
var i = n(29).Buffer,
r = n(233);
e.exports = function () {
function e() {
!function (e, t) {
if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
}(this, e),
this.head = null,
this.tail = null,
this.length = 0
}
return e.prototype.push = function (e) {
var t = {
data: e,
next: null
};
this.length > 0 ? this.tail.next = t : this.head = t,
this.tail = t,
++this.length
},
e.prototype.unshift = function (e) {
var t = {
data: e,
next: this.head
};
0 === this.length && (this.tail = t),
this.head = t,
++this.length
},
e.prototype.shift = function () {
if (0 !== this.length) {
var e = this.head.data;
return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next,
--this.length,
e
}
},
e.prototype.clear = function () {
this.head = this.tail = null,
this.length = 0
},
e.prototype.join = function (e) {
if (0 === this.length) return '';
for (var t = this.head, n = '' + t.data; t = t.next; ) n += e + t.data;
return n
},
e.prototype.concat = function (e) {
if (0 === this.length) return i.alloc(0);
if (1 === this.length) return this.head.data;
for (var t, n, r, o = i.allocUnsafe(e >>> 0), s = this.head, a = 0; s; ) t = s.data,
n = o,
r = a,
t.copy(n, r),
a += s.data.length,
s = s.next;
return o
},
e
}(),
r && r.inspect && r.inspect.custom && (e.exports.prototype[r.inspect.custom] = function () {
var e = r.inspect({
length: this.length
});
return this.constructor.name + ' ' + e
})
},
function (e, t) {
},
function (e, t, n) {
e.exports = r;
var i = n(46).EventEmitter;
function r() {
i.call(this)
}
n(16) (r, i),
r.Readable = n(45),
r.Writable = n(228),
r.Duplex = n(227),
r.Transform = n(226),
r.PassThrough = n(225),
r.Stream = r,
r.prototype.pipe = function (e, t) {
var n = this;
function r(t) {
e.writable && !1 === e.write(t) && n.pause && n.pause()
}
function o() {
n.readable && n.resume && n.resume()
}
n.on('data', r),
e.on('drain', o),
e._isStdio || t && !1 === t.end || (n.on('end', a), n.on('close', l));
var s = !1;
function a() {
s || (s = !0, e.end())
}
function l() {
s || (s = !0, 'function' == typeof e.destroy && e.destroy())
}
function u(e) {
if (c(), 0 === i.listenerCount(this, 'error')) throw e
}
function c() {
n.removeListener('data', r),
e.removeListener('drain', o),
n.removeListener('end', a),
n.removeListener('close', l),
n.removeListener('error', u),
e.removeListener('error', u),
n.removeListener('end', c),
n.removeListener('close', c),
e.removeListener('close', c)
}
return n.on('error', u),
e.on('error', u),
n.on('end', c),
n.on('close', c),
e.on('close', c),
e.emit('pipe', n),
e
}
},
function (e, t) {
t.read = function (e, t, n, i, r) {
var o,
s,
a = 8 * r - i - 1,
l = (1 << a) - 1,
u = l >> 1,
c = - 7,
h = n ? r - 1 : 0,
d = n ? - 1 : 1,
f = e[t + h];
for (h += d, o = f & (1 << - c) - 1, f >>= - c, c += a; c > 0; o = 256 * o + e[t + h], h += d, c -= 8);
for (s = o & (1 << - c) - 1, o >>= - c, c += i; c > 0; s = 256 * s + e[t + h], h += d, c -= 8);
if (0 === o) o = 1 - u;
 else {
if (o === l) return s ? NaN : 1 / 0 * (f ? - 1 : 1);
s += Math.pow(2, i),
o -= u
}
return (f ? - 1 : 1) * s * Math.pow(2, o - i)
},
t.write = function (e, t, n, i, r, o) {
var s,
a,
l,
u = 8 * o - r - 1,
c = (1 << u) - 1,
h = c >> 1,
d = 23 === r ? Math.pow(2, - 24) - Math.pow(2, - 77)  : 0,
f = i ? 0 : o - 1,
p = i ? 1 : - 1,
v = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, s = c)  : (s = Math.floor(Math.log(t) / Math.LN2), t * (l = Math.pow(2, - s)) < 1 && (s--, l *= 2), (t += s + h >= 1 ? d / l : d * Math.pow(2, 1 - h)) * l >= 2 && (s++, l /= 2), s + h >= c ? (a = 0, s = c)  : s + h >= 1 ? (a = (t * l - 1) * Math.pow(2, r), s += h)  : (a = t * Math.pow(2, h - 1) * Math.pow(2, r), s = 0)); r >= 8; e[n + f] = 255 & a, f += p, a /= 256, r -= 8);
for (s = s << r | a, u += r; u > 0; e[n + f] = 255 & s, f += p, s /= 256, u -= 8);
e[n + f - p] |= 128 * v
}
},
function (e, t, n) {
'use strict';
t.byteLength = function (e) {
return 3 * e.length / 4 - u(e)
},
t.toByteArray = function (e) {
var t,
n,
i,
s,
a,
l = e.length;
s = u(e),
a = new o(3 * l / 4 - s),
n = s > 0 ? l - 4 : l;
var c = 0;
for (t = 0; t < n; t += 4) i = r[e.charCodeAt(t)] << 18 | r[e.charCodeAt(t + 1)] << 12 | r[e.charCodeAt(t + 2)] << 6 | r[e.charCodeAt(t + 3)],
a[c++] = i >> 16 & 255,
a[c++] = i >> 8 & 255,
a[c++] = 255 & i;
2 === s ? (i = r[e.charCodeAt(t)] << 2 | r[e.charCodeAt(t + 1)] >> 4, a[c++] = 255 & i)  : 1 === s && (i = r[e.charCodeAt(t)] << 10 | r[e.charCodeAt(t + 1)] << 4 | r[e.charCodeAt(t + 2)] >> 2, a[c++] = i >> 8 & 255, a[c++] = 255 & i);
return a
},
t.fromByteArray = function (e) {
for (var t, n = e.length, r = n % 3, o = '', s = [
], a = 0, l = n - r; a < l; a += 16383) s.push(c(e, a, a + 16383 > l ? l : a + 16383));
1 === r ? (t = e[n - 1], o += i[t >> 2], o += i[t << 4 & 63], o += '==')  : 2 === r && (t = (e[n - 2] << 8) + e[n - 1], o += i[t >> 10], o += i[t >> 4 & 63], o += i[t << 2 & 63], o += '=');
return s.push(o),
s.join('')
};
for (var i = [
], r = [
], o = 'undefined' != typeof Uint8Array ? Uint8Array : Array, s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', a = 0, l = s.length; a < l; ++a) i[a] = s[a],
r[s.charCodeAt(a)] = a;
function u(e) {
var t = e.length;
if (t % 4 > 0) throw new Error('Invalid string. Length must be a multiple of 4');
return '=' === e[t - 2] ? 2 : '=' === e[t - 1] ? 1 : 0
}
function c(e, t, n) {
for (var r, o, s = [
], a = t; a < n; a += 3) r = (e[a] << 16 & 16711680) + (e[a + 1] << 8 & 65280) + (255 & e[a + 2]),
s.push(i[(o = r) >> 18 & 63] + i[o >> 12 & 63] + i[o >> 6 & 63] + i[63 & o]);
return s.join('')
}
r['-'.charCodeAt(0)] = 62,
r['_'.charCodeAt(0)] = 63
},
function (e, t, n) {
'use strict';
var i = n(17),
r = n(2),
o = n(5),
s = n(87),
a = n(86),
l = n(41),
u = n(206),
c = n(205),
h = n(28),
d = n(193),
f = function (e, t, n) {
var i,
s = r.getTypeOf(t),
c = r.extend(n || {
}, a);
c.date = c.date || new Date,
null !== c.compression && (c.compression = c.compression.toUpperCase()),
'string' == typeof c.unixPermissions && (c.unixPermissions = parseInt(c.unixPermissions, 8)),
c.unixPermissions && 16384 & c.unixPermissions && (c.dir = !0),
c.dosPermissions && 16 & c.dosPermissions && (c.dir = !0),
c.dir && (e = v(e)),
c.createFolders && (i = p(e)) && g.call(this, i, !0);
var f = 'string' === s && !1 === c.binary && !1 === c.base64;
n && void 0 !== n.binary || (c.binary = !f),
(t instanceof l && 0 === t.uncompressedSize || c.dir || !t || 0 === t.length) && (c.base64 = !1, c.binary = !0, t = '', c.compression = 'STORE', s = 'string');
var m = null;
m = t instanceof l || t instanceof o ? t : h.isNode && h.isStream(t) ? new d(e, t)  : r.prepareContent(e, t, c.binary, c.optimizedBinaryString, c.base64);
var A = new u(e, m, c);
this.files[e] = A
},
p = function (e) {
'/' === e.slice( - 1) && (e = e.substring(0, e.length - 1));
var t = e.lastIndexOf('/');
return t > 0 ? e.substring(0, t)  : ''
},
v = function (e) {
return '/' !== e.slice( - 1) && (e += '/'),
e
},
g = function (e, t) {
return t = void 0 !== t ? t : a.createFolders,
e = v(e),
this.files[e] || f.call(this, e, null, {
dir: !0,
createFolders: t
}),
this.files[e]
};
function m(e) {
return '[object RegExp]' === Object.prototype.toString.call(e)
}
var A = {
load: function () {
throw new Error('This method has been removed in JSZip 3.0, please check the upgrade guide.')
},
forEach: function (e) {
var t,
n,
i;
for (t in this.files) this.files.hasOwnProperty(t) && (i = this.files[t], (n = t.slice(this.root.length, t.length)) && t.slice(0, this.root.length) === this.root && e(n, i))
},
filter: function (e) {
var t = [
];
return this.forEach(function (n, i) {
e(n, i) && t.push(i)
}),
t
},
file: function (e, t, n) {
if (1 === arguments.length) {
if (m(e)) {
var i = e;
return this.filter(function (e, t) {
return !t.dir && i.test(e)
})
}
var r = this.files[this.root + e];
return r && !r.dir ? r : null
}
return e = this.root + e,
f.call(this, e, t, n),
this
},
folder: function (e) {
if (!e) return this;
if (m(e)) return this.filter(function (t, n) {
return n.dir && e.test(t)
});
var t = this.root + e,
n = g.call(this, t),
i = this.clone();
return i.root = n.name,
i
},
remove: function (e) {
e = this.root + e;
var t = this.files[e];
if (t || ('/' !== e.slice( - 1) && (e += '/'), t = this.files[e]), t && !t.dir) delete this.files[e];
 else for (var n = this.filter(function (t, n) {
return n.name.slice(0, e.length) === e
}), i = 0; i < n.length; i++) delete this.files[n[i].name];
return this
},
generate: function (e) {
throw new Error('This method has been removed in JSZip 3.0, please check the upgrade guide.')
},
generateInternalStream: function (e) {
var t,
n = {
};
try {
if ((n = r.extend(e || {
}, {
streamFiles: !1,
compression: 'STORE',
compressionOptions: null,
type: '',
platform: 'DOS',
comment: null,
mimeType: 'application/zip',
encodeFileName: i.utf8encode
})).type = n.type.toLowerCase(), n.compression = n.compression.toUpperCase(), 'binarystring' === n.type && (n.type = 'string'), !n.type) throw new Error('No output type specified.');
r.checkSupport(n.type),
'darwin' !== n.platform && 'freebsd' !== n.platform && 'linux' !== n.platform && 'sunos' !== n.platform || (n.platform = 'UNIX'),
'win32' === n.platform && (n.platform = 'DOS');
var a = n.comment || this.comment || '';
t = c.generateWorker(this, n, a)
} catch (e) {
(t = new o('error')).error(e)
}
return new s(t, n.type || 'string', n.mimeType)
},
generateAsync: function (e, t) {
return this.generateInternalStream(e).accumulate(t)
},
generateNodeStream: function (e, t) {
return (e = e || {
}).type || (e.type = 'nodebuffer'),
this.generateInternalStream(e).toNodejsStream(t)
}
};
e.exports = A
},
function (e, t, n) {
'use strict';
function i() {
if (!(this instanceof i)) return new i;
if (arguments.length) throw new Error('The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.');
this.files = {
},
this.comment = null,
this.root = '',
this.clone = function () {
var e = new i;
for (var t in this) 'function' != typeof this[t] && (e[t] = this[t]);
return e
}
}
i.prototype = n(239),
i.prototype.loadAsync = n(192),
i.support = n(9),
i.defaults = n(86),
i.version = '3.1.5',
i.loadAsync = function (e, t) {
return (new i).loadAsync(e, t)
},
i.external = n(20),
e.exports = i
},
function (e, t, n) {
'use strict';
function i(e) {
return e && e.__esModule ? e : {
default:
e
}
}
Object.defineProperty(t, '__esModule', {
value: !0
});
i(n(3));
var r = i(n(240)),
o = i(n(71)),
s = i(n(187)),
a = (i(n(70)), i(n(186))),
l = i(n(161)),
u = i(n(160)),
c = i(n(159)),
h = i(n(67)),
d = i(n(158));
t.default = function (e, t) {
(new r.default).loadAsync(e).then(function (e) {
var n = Object.keys(e.files) [0],
i = (0, s.default) (n), r = o.default.decode('vMm3rf7vu8ez6ApdyKwSeXZKNRb6gwMXyhDAAZ4zxnNFu27dY4p5KJCtfXWfjPcjZuweLjFyz3b5hBE5F9q3A4Zjvx4yZGSRgVbNGLkh6gQW2mwgV6hUV87ECtNZqdkXaZunXRf6ePZKVPqL5SjFEApPsgA6kCUPmALbsTzHxHdSeTp9w3twNkKVZW2js3kZUBJsLgjjveevYKBqBrPfEpcqk2nn7YQQtCuy5cxpD7WfDypreBJAuTrdSmfrSSUK', i);
e.file(n).async('string').then(function (e) {
var n = (0, a.default) (e, r), i = (0, l.default) (n), o = (0, d.default) (n), s = (0, u.default) (i, o), c = new Uint8Array(s.match(/[\da-f]{2}/gi).map(function (e) {
return parseInt(e, 16)
})), f = new DataView(c.buffer); h.default.decryptedHlsKey = new Uint32Array([f.getUint32(0),
f.getUint32(4),
f.getUint32(8),
f.getUint32(12)]),
t(void 0, n)
})
}).catch (function (n) {
t(void 0, (0, c.default) (e))
})
}, e.exports = t.default
}, function (e, t, n) {
'use strict';
Object.defineProperty(t, '__esModule', {
value: !0
});
var i = Object.assign || function (e) {
for (var t = 1; t < arguments.length; t++) {
var n = arguments[t];
for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
}
return e
},
r = function () {
function e(e, t) {
for (var n = 0; n < t.length; n++) {
var i = t[n];
i.enumerable = i.enumerable || !1,
i.configurable = !0,
'value' in i && (i.writable = !0),
Object.defineProperty(e, i.key, i)
}
}
return function (t, n, i) {
return n && e(t.prototype, n),
i && e(t, i),
t
}
}(),
o = l(n(47)),
s = l(n(101)),
a = l(n(100));
function l(e) {
return e && e.__esModule ? e : {
default:
e
}
}
var u = function (e) {
function t() {
!function (e, t) {
if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
}(this, t);
var e = function (e, t) {
if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
return !t || 'object' != typeof t && 'function' != typeof t ? e : t
}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
e.lineStream = new s.default,
e.parseStream = new a.default,
e.lineStream.pipe(e.parseStream);
var n = e,
r = [
],
o = {
},
l = void 0,
u = void 0,
c = {
AUDIO: {
},
VIDEO: {
},
'CLOSED-CAPTIONS': {
},
SUBTITLES: {
}
},
h = 0;
return e.manifest = {
allowCache: !0,
discontinuityStarts: [
],
segments: [
]
},
e.parseStream.on('data', function (e) {
var t = void 0,
s = void 0;
({
tag: function () {
(({
'allow-cache': function () {
this.manifest.allowCache = e.allowed,
'allowed' in e || (this.trigger('info', {
message: 'defaulting allowCache to YES'
}), this.manifest.allowCache = !0)
},
byterange: function () {
var t = {
};
'length' in e && (o.byterange = t, t.length = e.length, 'offset' in e || (this.trigger('info', {
message: 'defaulting offset to zero'
}), e.offset = 0)),
'offset' in e && (o.byterange = t, t.offset = e.offset)
},
endlist: function () {
this.manifest.endList = !0
},
inf: function () {
'mediaSequence' in this.manifest || (this.manifest.mediaSequence = 0, this.trigger('info', {
message: 'defaulting media sequence to zero'
})),
'discontinuitySequence' in this.manifest || (this.manifest.discontinuitySequence = 0, this.trigger('info', {
message: 'defaulting discontinuity sequence to zero'
})),
e.duration > 0 && (o.duration = e.duration),
0 === e.duration && (o.duration = 0.01, this.trigger('info', {
message: 'updating zero segment duration to a small value'
})),
this.manifest.segments = r
},
key: function () {
e.attributes ? 'NONE' !== e.attributes.METHOD ? e.attributes.URI ? (e.attributes.METHOD || this.trigger('warn', {
message: 'defaulting key method to AES-128'
}), u = {
method: e.attributes.METHOD || 'AES-128',
uri: e.attributes.URI
}, void 0 !== e.attributes.IV && (u.iv = e.attributes.IV))  : this.trigger('warn', {
message: 'ignoring key declaration without URI'
})  : u = null : this.trigger('warn', {
message: 'ignoring key declaration without attribute list'
})
},
'media-sequence': function () {
isFinite(e.number) ? this.manifest.mediaSequence = e.number : this.trigger('warn', {
message: 'ignoring invalid media sequence: ' + e.number
})
},
'discontinuity-sequence': function () {
isFinite(e.number) ? (this.manifest.discontinuitySequence = e.number, h = e.number)  : this.trigger('warn', {
message: 'ignoring invalid discontinuity sequence: ' + e.number
})
},
'playlist-type': function () {
/VOD|EVENT/.test(e.playlistType) ? this.manifest.playlistType = e.playlistType : this.trigger('warn', {
message: 'ignoring unknown playlist type: ' + e.playlist
})
},
map: function () {
l = {
},
e.uri && (l.uri = e.uri),
e.byterange && (l.byterange = e.byterange)
},
'stream-inf': function () {
this.manifest.playlists = r,
this.manifest.mediaGroups = this.manifest.mediaGroups || c,
e.attributes ? (o.attributes || (o.attributes = {
}), i(o.attributes, e.attributes))  : this.trigger('warn', {
message: 'ignoring empty stream-inf attributes'
})
},
media: function () {
if (this.manifest.mediaGroups = this.manifest.mediaGroups || c, e.attributes && e.attributes.TYPE && e.attributes['GROUP-ID'] && e.attributes.NAME) {
var n = this.manifest.mediaGroups[e.attributes.TYPE];
n[e.attributes['GROUP-ID']] = n[e.attributes['GROUP-ID']] || {
},
t = n[e.attributes['GROUP-ID']],
(s = {
default:
/yes/i.test(e.attributes.DEFAULT)
}).default ? s.autoselect = !0 : s.autoselect = /yes/i.test(e.attributes.AUTOSELECT),
e.attributes.LANGUAGE && (s.language = e.attributes.LANGUAGE),
e.attributes.URI && (s.uri = e.attributes.URI),
e.attributes['INSTREAM-ID'] && (s.instreamId = e.attributes['INSTREAM-ID']),
e.attributes.CHARACTERISTICS && (s.characteristics = e.attributes.CHARACTERISTICS),
e.attributes.FORCED && (s.forced = /yes/i.test(e.attributes.FORCED)),
t[e.attributes.NAME] = s
} else this.trigger('warn', {
message: 'ignoring incomplete or missing media group'
})
},
discontinuity: function () {
h += 1,
o.discontinuity = !0,
this.manifest.discontinuityStarts.push(r.length)
},
'program-date-time': function () {
this.manifest.dateTimeString = e.dateTimeString,
this.manifest.dateTimeObject = e.dateTimeObject
},
targetduration: function () {
!isFinite(e.duration) || e.duration < 0 ? this.trigger('warn', {
message: 'ignoring invalid target duration: ' + e.duration
})  : this.manifest.targetDuration = e.duration
},
totalduration: function () {
!isFinite(e.duration) || e.duration < 0 ? this.trigger('warn', {
message: 'ignoring invalid total duration: ' + e.duration
})  : this.manifest.totalDuration = e.duration
},
'cue-out': function () {
o.cueOut = e.data
},
'cue-out-cont': function () {
o.cueOutCont = e.data
},
'cue-in': function () {
o.cueIn = e.data
}
}) [e.tagType] || function () {
}).call(n)
},
uri: function () {
o.uri = e.uri,
r.push(o),
!this.manifest.targetDuration || 'duration' in o || (this.trigger('warn', {
message: 'defaulting segment duration to the target duration'
}), o.duration = this.manifest.targetDuration),
u && (o.key = u),
o.timeline = h,
l && (o.map = l),
o = {
}
},
comment: function () {
}
}) [e.type].call(n)
}), e
}
return function (e, t) {
if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
e.prototype = Object.create(t && t.prototype, {
constructor: {
value: e,
enumerable: !1,
writable: !0,
configurable: !0
}
}),
t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t)  : e.__proto__ = t)
}(t, o['default']),
r(t, [
{
key: 'push',
value: function (e) {
this.lineStream.push(e)
}
},
{
key: 'end',
value: function () {
this.lineStream.push('\n')
}
}
]),
t
}();
t.default = u
},
function (e, t, n) {
var i,
r,
o,
s,
a;
i = /^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/\;?#]*)?(.*?)??(;.*?)?(\?.*?)?(#.*?)?$/,
r = /^([^\/;?#]*)(.*)$/,
o = /(?:\/|^)\.(?=\/)/g,
s = /(?:\/|^)\.\.\/(?!\.\.\/).*?(?=\/)/g,
a = {
buildAbsoluteURL: function (e, t, n) {
if (n = n || {
}, e = e.trim(), !(t = t.trim())) {
if (!n.alwaysNormalize) return e;
var i = a.parseURL(e);
if (!i) throw new Error('Error trying to parse base URL.');
return i.path = a.normalizePath(i.path),
a.buildURLFromParts(i)
}
var o = a.parseURL(t);
if (!o) throw new Error('Error trying to parse relative URL.');
if (o.scheme) return n.alwaysNormalize ? (o.path = a.normalizePath(o.path), a.buildURLFromParts(o))  : t;
var s = a.parseURL(e);
if (!s) throw new Error('Error trying to parse base URL.');
if (!s.netLoc && s.path && '/' !== s.path[0]) {
var l = r.exec(s.path);
s.netLoc = l[1],
s.path = l[2]
}
s.netLoc && !s.path && (s.path = '/');
var u = {
scheme: s.scheme,
netLoc: o.netLoc,
path: null,
params: o.params,
query: o.query,
fragment: o.fragment
};
if (!o.netLoc && (u.netLoc = s.netLoc, '/' !== o.path[0])) if (o.path) {
var c = s.path,
h = c.substring(0, c.lastIndexOf('/') + 1) + o.path;
u.path = a.normalizePath(h)
} else u.path = s.path,
o.params || (u.params = s.params, o.query || (u.query = s.query));
return null === u.path && (u.path = n.alwaysNormalize ? a.normalizePath(o.path)  : o.path),
a.buildURLFromParts(u)
},
parseURL: function (e) {
var t = i.exec(e);
return t ? {
scheme: t[1] || '',
netLoc: t[2] || '',
path: t[3] || '',
params: t[4] || '',
query: t[5] || '',
fragment: t[6] || ''
}
 : null
},
normalizePath: function (e) {
for (e = e.split('').reverse().join('').replace(o, ''); e.length !== (e = e.replace(s, '')).length; );
return e.split('').reverse().join('')
},
buildURLFromParts: function (e) {
return e.scheme + e.netLoc + e.path + e.params + e.query + e.fragment
}
},
e.exports = a
},
function (e, t, n) {
'use strict';
function i(e) {
return e && e.__esModule ? e : {
default:
e
}
}
Object.defineProperty(t, '__esModule', {
value: !0
});
var r = i(n(243)),
o = i(n(3));
t.default = function (e, t) {
return /^[a-z]+:/i.test(t) ? t : (/\/\//i.test(e) || (e = r.default.buildAbsoluteURL(o.default.location.href,
e)),
r.default.buildAbsoluteURL(e, t))
}, e.exports = t.default
}, function (e, t, n) {
'use strict';
var i = function () {
function e(e, t) {
for (var n = 0; n < t.length; n++) {
var i = t[n];
i.enumerable = i.enumerable || !1,
i.configurable = !0,
'value' in i && (i.writable = !0),
Object.defineProperty(e, i.key, i)
}
}
return function (t, n, i) {
return n && e(t.prototype, n),
i && e(t, i),
t
}
}(),
r = function (e, t, n) {
for (var i = !0; i; ) {
var r = e,
o = t,
s = n;
i = !1,
null === r && (r = Function.prototype);
var a = Object.getOwnPropertyDescriptor(r, o);
if (void 0 !== a) {
if ('value' in a) return a.value;
var l = a.get;
if (void 0 === l) return;
return l.call(s)
}
var u = Object.getPrototypeOf(r);
if (null === u) return;
e = u,
t = o,
n = s,
i = !0,
a = u = void 0
}
};
function o(e) {
return e && e.__esModule ? e : {
default:
e
}
}
var s = o(n(22)),
a = o(n(48)),
l = o(n(13)),
u = o(n(157)),
c = n(66),
h = o(n(19)),
d = n(150),
f = o(n(102)),
p = o(n(0)),
v = n(134),
g = o(n(23)),
m = o(n(123)),
A = o(n(3)),
y = o(n(122)),
b = o(n(121)),
_ = n(53),
w = {
PlaylistLoader: a.default,
Playlist:
l.default,
Decrypter:
c.Decrypter,
AsyncStream: c.AsyncStream,
decrypt: c.decrypt,
utils: h.default,
STANDARD_PLAYLIST_SELECTOR:
_.lastBandwidthSelector,
INITIAL_PLAYLIST_SELECTOR: _.lowestBitrateCompatibleVariantSelector,
comparePlaylistBandwidth: _.comparePlaylistBandwidth,
comparePlaylistResolution: _.comparePlaylistResolution,
xhr: (0, u.default) ()
};
[
'GOAL_BUFFER_LENGTH',
'MAX_GOAL_BUFFER_LENGTH',
'GOAL_BUFFER_LENGTH_RATE',
'BUFFER_LOW_WATER_LINE',
'MAX_BUFFER_LOW_WATER_LINE',
'BUFFER_LOW_WATER_LINE_RATE',
'BANDWIDTH_VARIANCE'
].forEach(function (e) {
Object.defineProperty(w, e, {
get: function () {
return p.default.log.warn('using Hls.' + e + ' is UNSAFE be sure you know what you are doing'),
g.default[e]
},
set:
function (t) {
p.default.log.warn('using Hls.' + e + ' is UNSAFE be sure you know what you are doing'),
'number' != typeof t || t < 0 ? p.default.log.warn('value of Hls.' + e + ' must be greater than or equal to 0') :
g.default[e] = t
}
})
});
var T = function (e, t) {
for (var n = t.media(), i = - 1, r = 0; r < e.length; r++) if (e[r].id === n.uri) {
i = r;
break
}
e.selectedIndex_ = i,
e.trigger({
selectedIndex: i,
type: 'change'
})
};
w.canPlaySource = function () {
return p.default.log.warn('HLS is no longer a tech. Please remove it from your player\'s techOrder.')
},
w.supportsNativeHls = function () {
var e = s.default.createElement('video');
if (!p.default.getTech('Html5').isSupported()) return !1; return ['application/vnd.apple.mpegurl',
'audio/mpegurl',
'audio/x-mpegurl',
'application/x-mpegurl',
'video/x-mpegurl',
'video/mpegurl',
'application/mpegurl'].some(function (t) {
return /maybe|probably/i.test(e.canPlayType(t))
})
}(),
w.isSupported = function () {
return p.default.log.warn('HLS is no longer a tech. Please remove it from your player\'s techOrder.')
};
var k = p.default.getComponent('Component'),
E = function (e) {
function t(e, n, i) {
var o = this;
if (function (e, t) {
if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
}(this, t), r(Object.getPrototypeOf(t.prototype), 'constructor', this).call(this, n, i.hls), n.options_ && n.options_.playerId) {
var a = (0, p.default) (n.options_.playerId); a.hasOwnProperty('hls') || Object.defineProperty(a, 'hls', {
get: function () {
return p.default.log.warn('player.hls is deprecated. Use player.tech_.hls instead.'),
n.trigger({
type: 'usage',
name: 'hls-player-access'
}),
o
}
})
}
if (this.tech_ = n, this.source_ = e, this.stats = {
}, this.ignoreNextSeekingEvent_ = !1, this.setOptions_(), this.options_.overrideNative && (n.featuresNativeVideoTracks || n.featuresNativeAudioTracks)) throw new Error('Overriding native HLS requires emulated tracks. See https://git.io/vMpjB'); this.on(s.default,
[
'fullscreenchange',
'webkitfullscreenchange',
'mozfullscreenchange',
'MSFullscreenChange'
],
function (e) {
var t = s.default.fullscreenElement || s.default.webkitFullscreenElement || s.default.mozFullScreenElement || s.default.msFullscreenElement;
t && t.contains(o.tech_.el()) && o.masterPlaylistController_.fastQualityChange_()
}),
this.on(this.tech_, 'seeking', function () {
this.ignoreNextSeekingEvent_ ? this.ignoreNextSeekingEvent_ = !1 : this.setCurrentTime(this.tech_.currentTime())
}),
this.on(this.tech_, 'error', function () {
this.masterPlaylistController_ && this.masterPlaylistController_.pauseLoading()
}),
this.on(this.tech_, 'play', this.play)
}
return function (e, t) {
if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
e.prototype = Object.create(t && t.prototype, {
constructor: {
value: e,
enumerable: !1,
writable: !0,
configurable: !0
}
}),
t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t)  : e.__proto__ = t)
}(t, k),
i(t, [
{
key: 'setOptions_',
value: function () {
var e = this;
this.options_.withCredentials = this.options_.withCredentials || !1,
'number' != typeof this.options_.blacklistDuration && (this.options_.blacklistDuration = 300),
'number' != typeof this.options_.bandwidth && (this.options_.bandwidth = 4194304),
this.options_.enableLowInitialPlaylist = this.options_.enableLowInitialPlaylist && 4194304 === this.options_.bandwidth,
[
'withCredentials',
'bandwidth'
].forEach(function (t) {
void 0 !== e.source_[t] && (e.options_[t] = e.source_[t])
}),
this.bandwidth = this.options_.bandwidth
}
},
{
key: 'src',
value: function (e) {
var t = this;
e && (this.setOptions_(), this.options_.url = this.source_.src, this.options_.tech = this.tech_, this.options_.externHls = w, this.masterPlaylistController_ = new v.MasterPlaylistController(this.options_), this.playbackWatcher_ = new y.default(p.default.mergeOptions(this.options_, {
seekable: function () {
return t.seekable()
}
})), this.masterPlaylistController_.on('error', function () {
p.default.players[t.tech_.options_.playerId].error(t.masterPlaylistController_.error)
}), this.masterPlaylistController_.selectPlaylist = this.selectPlaylist ? this.selectPlaylist.bind(this)  : w.STANDARD_PLAYLIST_SELECTOR.bind(this), this.masterPlaylistController_.selectInitialPlaylist = w.INITIAL_PLAYLIST_SELECTOR.bind(this), this.playlists = this.masterPlaylistController_.masterPlaylistLoader_, this.mediaSource = this.masterPlaylistController_.mediaSource, Object.defineProperties(this, {
selectPlaylist: {
get: function () {
return this.masterPlaylistController_.selectPlaylist
},
set: function (e) {
this.masterPlaylistController_.selectPlaylist = e.bind(this)
}
},
throughput: {
get: function () {
return this.masterPlaylistController_.mainSegmentLoader_.throughput.rate
},
set: function (e) {
this.masterPlaylistController_.mainSegmentLoader_.throughput.rate = e,
this.masterPlaylistController_.mainSegmentLoader_.throughput.count = 1
}
},
bandwidth: {
get: function () {
return this.masterPlaylistController_.mainSegmentLoader_.bandwidth
},
set: function (e) {
this.masterPlaylistController_.mainSegmentLoader_.bandwidth = e,
this.masterPlaylistController_.mainSegmentLoader_.throughput = {
rate: 0,
count: 0
}
}
},
systemBandwidth: {
get: function () {
var e = 1 / (this.bandwidth || 1),
t = void 0;
return t = this.throughput > 0 ? 1 / this.throughput : 0,
Math.floor(1 / (e + t))
},
set: function () {
p.default.log.error('The "systemBandwidth" property is read-only')
}
}
}), Object.defineProperties(this.stats, {
bandwidth: {
get: function () {
return t.bandwidth || 0
},
enumerable: !0
},
mediaRequests: {
get: function () {
return t.masterPlaylistController_.mediaRequests_() || 0
},
enumerable: !0
},
mediaRequestsAborted: {
get: function () {
return t.masterPlaylistController_.mediaRequestsAborted_() || 0
},
enumerable: !0
},
mediaRequestsTimedout: {
get: function () {
return t.masterPlaylistController_.mediaRequestsTimedout_() || 0
},
enumerable: !0
},
mediaRequestsErrored: {
get: function () {
return t.masterPlaylistController_.mediaRequestsErrored_() || 0
},
enumerable: !0
},
mediaTransferDuration: {
get: function () {
return t.masterPlaylistController_.mediaTransferDuration_() || 0
},
enumerable: !0
},
mediaBytesTransferred: {
get: function () {
return t.masterPlaylistController_.mediaBytesTransferred_() || 0
},
enumerable: !0
},
mediaSecondsLoaded: {
get: function () {
return t.masterPlaylistController_.mediaSecondsLoaded_() || 0
},
enumerable: !0
}
}), this.tech_.one('canplay', this.masterPlaylistController_.setupFirstPlay.bind(this.masterPlaylistController_)), this.masterPlaylistController_.on('selectedinitialmedia', function () {
(0, m.default) (t)
}), this.on(this.masterPlaylistController_, 'progress', function () {
this.tech_.trigger('progress')
}), this.on(this.masterPlaylistController_, 'firstplay', function () {
this.ignoreNextSeekingEvent_ = !0
}), this.tech_.ready(function () {
return t.setupQualityLevels_()
}), this.tech_.el() && this.tech_.src(p.default.URL.createObjectURL(this.masterPlaylistController_.mediaSource)))
}
}, {
key: 'setupQualityLevels_',
value: function () {
var e = this,
t = p.default.players[this.tech_.options_.playerId];
t && t.qualityLevels && (this.qualityLevels_ = t.qualityLevels(), this.masterPlaylistController_.on('selectedinitialmedia', function () {
var t,
n;
t = e.qualityLevels_,
(n = e).representations().forEach(function (e) {
t.addQualityLevel(e)
}),
T(t, n.playlists)
}), this.playlists.on('mediachange', function () {
T(e.qualityLevels_, e.playlists)
}))
}
},
{
key: 'play',
value: function () {
this.masterPlaylistController_.play()
}
},
{
key: 'setCurrentTime',
value: function (e) {
this.masterPlaylistController_.setCurrentTime(e)
}
},
{
key: 'duration',
value: function () {
return this.masterPlaylistController_.duration()
}
},
{
key: 'seekable',
value: function () {
return this.masterPlaylistController_.seekable()
}
},
{
key: 'dispose',
value: function () {
this.playbackWatcher_ && this.playbackWatcher_.dispose(),
this.masterPlaylistController_ && this.masterPlaylistController_.dispose(),
this.qualityLevels_ && this.qualityLevels_.dispose(),
r(Object.getPrototypeOf(t.prototype), 'dispose', this).call(this)
}
}
]), t
}(),
S = function e(t) {
return {
canHandleSource: function (n) {
var i = arguments.length <= 1 || void 0 === arguments[1] ? {
}
 : arguments[1],
r = p.default.mergeOptions(p.default.options,
i); return (!r.hls || !r.hls.mode || r.hls.mode === t) && e.canPlayType(n.type, r)
},
handleSource:
function (e, n) {
var i = arguments.length <= 2 || void 0 === arguments[2] ? {
}
 : arguments[2],
r = p.default.mergeOptions(p.default.options,
i,
{
hls: {
mode: t
}
}); return 'flash' === t && n.setTimeout(function () {
n.trigger('loadstart')
}, 1), n.hls = new E(e, n, r), n.hls.xhr = (0, u.default) (), n.hls.src(e.src), n.hls
}, canPlayType: function (t) {
var n = arguments.length <= 1 || void 0 === arguments[1] ? {
}
 : arguments[1],
i = p.default.mergeOptions(p.default.options,
n); return e.canPlayType(t, i) ? 'maybe' : ''
}
}
}; S.canPlayType = function (e, t) {
if (p.default.browser.IE_VERSION && p.default.browser.IE_VERSION <= 10) return !1;
return !(!t.hls.overrideNative && w.supportsNativeHls) && /^(audio|video|application)\/(x-|vnd\.apple\.)?mpegurl/i.test(e)
}, void 0 !== p.default.MediaSource && void 0 !== p.default.URL || (p.default.MediaSource = d.MediaSource,
p.default.URL = d.URL);
var j = p.default.getTech('Flash');
d.MediaSource.supportsNativeMediaSources() && p.default.getTech('Html5').registerSourceHandler(S('html5'), 0),
A.default.Uint8Array && j && j.registerSourceHandler(S('flash')),
p.default.HlsHandler = E,
p.default.HlsSourceHandler = S,
p.default.Hls = w,
p.default.use || p.default.registerComponent('Hls', w),
p.default.m3u8 = f.default,
p.default.options.hls = p.default.options.hls || {
},
p.default.registerPlugin ? p.default.registerPlugin('reloadSourceOnError', b.default) : p.default.plugin('reloadSourceOnError', b.default), e.exports = {
Hls: w,
HlsHandler: E,
HlsSourceHandler: S
}
},
function (e, t) {
var n = {
'': !0,
up: !0
};
function i(e) {
return 'number' == typeof e && e >= 0 && e <= 100
}
e.exports = function () {
var e = 100,
t = 3,
r = 0,
o = 100,
s = 0,
a = 100,
l = '';
Object.defineProperties(this, {
width: {
enumerable: !0,
get: function () {
return e
},
set: function (t) {
if (!i(t)) throw new Error('Width must be between 0 and 100.');
e = t
}
},
lines: {
enumerable: !0,
get: function () {
return t
},
set: function (e) {
if ('number' != typeof e) throw new TypeError('Lines must be set to a number.');
t = e
}
},
regionAnchorY: {
enumerable: !0,
get: function () {
return o
},
set: function (e) {
if (!i(e)) throw new Error('RegionAnchorX must be between 0 and 100.');
o = e
}
},
regionAnchorX: {
enumerable: !0,
get: function () {
return r
},
set: function (e) {
if (!i(e)) throw new Error('RegionAnchorY must be between 0 and 100.');
r = e
}
},
viewportAnchorY: {
enumerable: !0,
get: function () {
return a
},
set: function (e) {
if (!i(e)) throw new Error('ViewportAnchorY must be between 0 and 100.');
a = e
}
},
viewportAnchorX: {
enumerable: !0,
get: function () {
return s
},
set: function (e) {
if (!i(e)) throw new Error('ViewportAnchorX must be between 0 and 100.');
s = e
}
},
scroll: {
enumerable: !0,
get: function () {
return l
},
set: function (e) {
var t = function (e) {
return 'string' == typeof e && !!n[e.toLowerCase()] && e.toLowerCase()
}(e);
if (!1 === t) throw new SyntaxError('An invalid or illegal string was specified.');
l = t
}
}
})
}
},
function (e, t) {
var n = 'auto',
i = {
'': !0,
lr: !0,
rl: !0
},
r = {
start: !0,
middle: !0,
end: !0,
left: !0,
right: !0
};
function o(e) {
return 'string' == typeof e && (!!r[e.toLowerCase()] && e.toLowerCase())
}
function s(e) {
for (var t = 1; t < arguments.length; t++) {
var n = arguments[t];
for (var i in n) e[i] = n[i]
}
return e
}
function a(e, t, r) {
var a = this,
l = /MSIE\s8\.0/.test(navigator.userAgent),
u = {
};
l ? a = document.createElement('custom')  : u.enumerable = !0,
a.hasBeenReset = !1;
var c = '',
h = !1,
d = e,
f = t,
p = r,
v = null,
g = '',
m = !0,
A = 'auto',
y = 'start',
b = 50,
_ = 'middle',
w = 50,
T = 'middle';
if (Object.defineProperty(a, 'id', s({
}, u, {
get: function () {
return c
},
set: function (e) {
c = '' + e
}
})), Object.defineProperty(a, 'pauseOnExit', s({
}, u, {
get: function () {
return h
},
set: function (e) {
h = !!e
}
})), Object.defineProperty(a, 'startTime', s({
}, u, {
get: function () {
return d
},
set: function (e) {
if ('number' != typeof e) throw new TypeError('Start time must be set to a number.');
d = e,
this.hasBeenReset = !0
}
})), Object.defineProperty(a, 'endTime', s({
}, u, {
get: function () {
return f
},
set: function (e) {
if ('number' != typeof e) throw new TypeError('End time must be set to a number.');
f = e,
this.hasBeenReset = !0
}
})), Object.defineProperty(a, 'text', s({
}, u, {
get: function () {
return p
},
set: function (e) {
p = '' + e,
this.hasBeenReset = !0
}
})), Object.defineProperty(a, 'region', s({
}, u, {
get: function () {
return v
},
set: function (e) {
v = e,
this.hasBeenReset = !0
}
})), Object.defineProperty(a, 'vertical', s({
}, u, {
get: function () {
return g
},
set: function (e) {
var t = function (e) {
return 'string' == typeof e && !!i[e.toLowerCase()] && e.toLowerCase()
}(e);
if (!1 === t) throw new SyntaxError('An invalid or illegal string was specified.');
g = t,
this.hasBeenReset = !0
}
})), Object.defineProperty(a, 'snapToLines', s({
}, u, {
get: function () {
return m
},
set: function (e) {
m = !!e,
this.hasBeenReset = !0
}
})), Object.defineProperty(a, 'line', s({
}, u, {
get: function () {
return A
},
set: function (e) {
if ('number' != typeof e && e !== n) throw new SyntaxError('An invalid number or illegal string was specified.');
A = e,
this.hasBeenReset = !0
}
})), Object.defineProperty(a, 'lineAlign', s({
}, u, {
get: function () {
return y
},
set: function (e) {
var t = o(e);
if (!t) throw new SyntaxError('An invalid or illegal string was specified.');
y = t,
this.hasBeenReset = !0
}
})), Object.defineProperty(a, 'position', s({
}, u, {
get: function () {
return b
},
set: function (e) {
if (e < 0 || e > 100) throw new Error('Position must be between 0 and 100.');
b = e,
this.hasBeenReset = !0
}
})), Object.defineProperty(a, 'positionAlign', s({
}, u, {
get: function () {
return _
},
set: function (e) {
var t = o(e);
if (!t) throw new SyntaxError('An invalid or illegal string was specified.');
_ = t,
this.hasBeenReset = !0
}
})), Object.defineProperty(a, 'size', s({
}, u, {
get: function () {
return w
},
set: function (e) {
if (e < 0 || e > 100) throw new Error('Size must be between 0 and 100.');
w = e,
this.hasBeenReset = !0
}
})), Object.defineProperty(a, 'align', s({
}, u, {
get: function () {
return T
},
set: function (e) {
var t = o(e);
if (!t) throw new SyntaxError('An invalid or illegal string was specified.');
T = t,
this.hasBeenReset = !0
}
})), a.displayState = void 0, l) return a
}
a.prototype.getCueAsHTML = function () {
return WebVTT.convertCueToDOMTree(window, this.text)
},
e.exports = a
},
function (e, t) {
var n = Object.create || function () {
function e() {
}
return function (t) {
if (1 !== arguments.length) throw new Error('Object.create shim only accepts one parameter.');
return e.prototype = t,
new e
}
}();
function i(e, t) {
this.name = 'ParsingError',
this.code = e.code,
this.message = t || e.message
}
function r(e) {
function t(e, t, n, i) {
return 3600 * (0 | e) + 60 * (0 | t) + (0 | n) + (0 | i) / 1000
}
var n = e.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
return n ? n[3] ? t(n[1], n[2], n[3].replace(':', ''), n[4])  : n[1] > 59 ? t(n[1], n[2], 0, n[4])  : t(0, n[1], n[2], n[4])  : null
}
function o() {
this.values = n(null)
}
function s(e, t, n, i) {
var r = i ? e.split(i)  : [
e
];
for (var o in r) if ('string' == typeof r[o]) {
var s = r[o].split(n);
if (2 === s.length) t(s[0], s[1])
}
}
function a(e, t, n) {
var a = e;
function l() {
var t = r(e);
if (null === t) throw new i(i.Errors.BadTimeStamp, 'Malformed timestamp: ' + a);
return e = e.replace(/^[^\sa-zA-Z-]+/, ''),
t
}
function u() {
e = e.replace(/^\s+/, '')
}
if (u(), t.startTime = l(), u(), '-->' !== e.substr(0, 3)) throw new i(i.Errors.BadTimeStamp, 'Malformed time stamp (time stamps must be separated by \'-->\'): ' + a);
e = e.substr(3),
u(),
t.endTime = l(),
u(),
function (e, t) {
var i = new o;
s(e, function (e, t) {
switch (e) {
case 'region':
for (var r = n.length - 1; r >= 0; r--) if (n[r].id === t) {
i.set(e, n[r].region);
break
}
break;
case 'vertical':
i.alt(e, t, [
'rl',
'lr'
]);
break;
case 'line':
var o = t.split(','),
s = o[0];
i.integer(e, s),
i.percent(e, s) && i.set('snapToLines', !1),
i.alt(e, s, [
'auto'
]),
2 === o.length && i.alt('lineAlign', o[1], [
'start',
'middle',
'end'
]);
break;
case 'position':
o = t.split(','),
i.percent(e, o[0]),
2 === o.length && i.alt('positionAlign', o[1], [
'start',
'middle',
'end'
]);
break;
case 'size':
i.percent(e, t);
break;
case 'align':
i.alt(e, t, [
'start',
'middle',
'end',
'left',
'right'
])
}
},
/:/,
/\s/), t.region = i.get('region', null), t.vertical = i.get('vertical', ''), t.line = i.get('line', 'auto'), t.lineAlign = i.get('lineAlign', 'start'), t.snapToLines = i.get('snapToLines', !0), t.size = i.get('size', 100), t.align = i.get('align', 'middle'), t.position = i.get('position', {
start: 0,
left: 0,
middle: 50,
end: 100,
right: 100
}, t.align), t.positionAlign = i.get('positionAlign', {
start: 'start',
left: 'start',
middle: 'middle',
end: 'end',
right: 'end'
}, t.align)
}(e, t)
}
i.prototype = n(Error.prototype),
i.prototype.constructor = i,
i.Errors = {
BadSignature: {
code: 0,
message: 'Malformed WebVTT signature.'
},
BadTimeStamp: {
code: 1,
message: 'Malformed time stamp.'
}
},
o.prototype = {
set: function (e, t) {
this.get(e) || '' === t || (this.values[e] = t)
},
get: function (e, t, n) {
return n ? this.has(e) ? this.values[e] : t[n] : this.has(e) ? this.values[e] : t
},
has: function (e) {
return e in this.values
},
alt: function (e, t, n) {
for (var i = 0; i < n.length; ++i) if (t === n[i]) {
this.set(e, t);
break
}
},
integer: function (e, t) {
/^-?\d+$/.test(t) && this.set(e, parseInt(t, 10))
},
percent: function (e, t) {
return !!(t.match(/^([\d]{1,3})(\.[\d]*)?%$/) && (t = parseFloat(t)) >= 0 && t <= 100) && (this.set(e, t), !0)
}
};
var l = {
'&amp;': '&',
'&lt;': '<',
'&gt;': '>',
'&lrm;': '‎',
'&rlm;': '‏',
'&nbsp;': ' '
},
u = {
c: 'span',
i: 'i',
b: 'b',
u: 'u',
ruby: 'ruby',
rt: 'rt',
v: 'span',
lang: 'span'
},
c = {
v: 'title',
lang: 'lang'
},
h = {
rt: 'ruby'
};
function d(e, t) {
function n() {
if (!t) return null;
var e,
n = t.match(/^([^<]*)(<[^>]+>?)?/);
return e = n[1] ? n[1] : n[2],
t = t.substr(e.length),
e
}
function i(e) {
return l[e]
}
function o(e) {
for (; A = e.match(/&(amp|lt|gt|lrm|rlm|nbsp);/); ) e = e.replace(A[0], i);
return e
}
function s(e, t) {
return !h[t.localName] || h[t.localName] === e.localName
}
function a(t, n) {
var i = u[t];
if (!i) return null;
var r = e.document.createElement(i);
r.localName = i;
var o = c[t];
return o && n && (r[o] = n.trim()),
r
}
for (var d, f = e.document.createElement('div'), p = f, v = [
]; null !== (d = n()); ) if ('<' !== d[0]) p.appendChild(e.document.createTextNode(o(d)));
 else {
if ('/' === d[1]) {
v.length && v[v.length - 1] === d.substr(2).replace('>', '') && (v.pop(), p = p.parentNode);
continue
}
var g,
m = r(d.substr(1, d.length - 2));
if (m) {
g = e.document.createProcessingInstruction('timestamp', m),
p.appendChild(g);
continue
}
var A = d.match(/^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);
if (!A) continue;
if (!(g = a(A[1], A[3]))) continue;
if (!s(p, g)) continue;
A[2] && (g.className = A[2].substr(1).replace('.', ' ')),
v.push(A[1]),
p.appendChild(g),
p = g
}
return f
}
var f = [
[1470,
1470],
[
1472,
1472
],
[
1475,
1475
],
[
1478,
1478
],
[
1488,
1514
],
[
1520,
1524
],
[
1544,
1544
],
[
1547,
1547
],
[
1549,
1549
],
[
1563,
1563
],
[
1566,
1610
],
[
1645,
1647
],
[
1649,
1749
],
[
1765,
1766
],
[
1774,
1775
],
[
1786,
1805
],
[
1807,
1808
],
[
1810,
1839
],
[
1869,
1957
],
[
1969,
1969
],
[
1984,
2026
],
[
2036,
2037
],
[
2042,
2042
],
[
2048,
2069
],
[
2074,
2074
],
[
2084,
2084
],
[
2088,
2088
],
[
2096,
2110
],
[
2112,
2136
],
[
2142,
2142
],
[
2208,
2208
],
[
2210,
2220
],
[
8207,
8207
],
[
64285,
64285
],
[
64287,
64296
],
[
64298,
64310
],
[
64312,
64316
],
[
64318,
64318
],
[
64320,
64321
],
[
64323,
64324
],
[
64326,
64449
],
[
64467,
64829
],
[
64848,
64911
],
[
64914,
64967
],
[
65008,
65020
],
[
65136,
65140
],
[
65142,
65276
],
[
67584,
67589
],
[
67592,
67592
],
[
67594,
67637
],
[
67639,
67640
],
[
67644,
67644
],
[
67647,
67669
],
[
67671,
67679
],
[
67840,
67867
],
[
67872,
67897
],
[
67903,
67903
],
[
67968,
68023
],
[
68030,
68031
],
[
68096,
68096
],
[
68112,
68115
],
[
68117,
68119
],
[
68121,
68147
],
[
68160,
68167
],
[
68176,
68184
],
[
68192,
68223
],
[
68352,
68405
],
[
68416,
68437
],
[
68440,
68466
],
[
68472,
68479
],
[
68608,
68680
],
[
126464,
126467
],
[
126469,
126495
],
[
126497,
126498
],
[
126500,
126500
],
[
126503,
126503
],
[
126505,
126514
],
[
126516,
126519
],
[
126521,
126521
],
[
126523,
126523
],
[
126530,
126530
],
[
126535,
126535
],
[
126537,
126537
],
[
126539,
126539
],
[
126541,
126543
],
[
126545,
126546
],
[
126548,
126548
],
[
126551,
126551
],
[
126553,
126553
],
[
126555,
126555
],
[
126557,
126557
],
[
126559,
126559
],
[
126561,
126562
],
[
126564,
126564
],
[
126567,
126570
],
[
126572,
126578
],
[
126580,
126583
],
[
126585,
126588
],
[
126590,
126590
],
[
126592,
126601
],
[
126603,
126619
],
[
126625,
126627
],
[
126629,
126633
],
[
126635,
126651
],
[
1114109,
1114109
]
];
function p(e) {
for (var t = 0; t < f.length; t++) {
var n = f[t];
if (e >= n[0] && e <= n[1]) return !0
}
return !1
}
function v() {
}
function g(e, t, n) {
var i = /MSIE\s8\.0/.test(navigator.userAgent),
r = 'rgba(255, 255, 255, 1)',
o = 'rgba(0, 0, 0, 0.8)';
i && (r = 'rgb(255, 255, 255)', o = 'rgb(0, 0, 0)'),
v.call(this),
this.cue = t,
this.cueDiv = d(e, t.text);
var s = {
color: r,
backgroundColor: o,
position: 'relative',
left: 0,
right: 0,
top: 0,
bottom: 0,
display: 'inline'
};
i || (s.writingMode = '' === t.vertical ? 'horizontal-tb' : 'lr' === t.vertical ? 'vertical-lr' : 'vertical-rl', s.unicodeBidi = 'plaintext'),
this.applyStyles(s, this.cueDiv),
this.div = e.document.createElement('div'),
s = {
textAlign: 'middle' === t.align ? 'center' : t.align,
font: n.font,
whiteSpace: 'pre-line',
position: 'absolute'
},
i || (s.direction = function (e) {
var t = [
],
n = '';
if (!e || !e.childNodes) return 'ltr';
function i(e, t) {
for (var n = t.childNodes.length - 1; n >= 0; n--) e.push(t.childNodes[n])
}
function r(e) {
if (!e || !e.length) return null;
var t = e.pop(),
n = t.textContent || t.innerText;
if (n) {
var o = n.match(/^.*(\n|\r)/);
return o ? (e.length = 0, o[0])  : n
}
return 'ruby' === t.tagName ? r(e)  : t.childNodes ? (i(e, t), r(e))  : void 0
}
for (i(t, e); n = r(t); ) for (var o = 0; o < n.length; o++) if (p(n.charCodeAt(o))) return 'rtl';
return 'ltr'
}(this.cueDiv), s.writingMode = '' === t.vertical ? 'horizontal-tb' : 'lr' === t.vertical ? 'vertical-lr' : 'vertical-rl'.stylesunicodeBidi = 'plaintext'),
this.applyStyles(s),
this.div.appendChild(this.cueDiv);
var a = 0;
switch (t.positionAlign) {
case 'start':
a = t.position;
break;
case 'middle':
a = t.position - t.size / 2;
break;
case 'end':
a = t.position - t.size
}
'' === t.vertical ? this.applyStyles({
left: this.formatStyle(a, '%'),
width: this.formatStyle(t.size, '%')
})  : this.applyStyles({
top: this.formatStyle(a, '%'),
height: this.formatStyle(t.size, '%')
}),
this.move = function (e) {
this.applyStyles({
top: this.formatStyle(e.top, 'px'),
bottom: this.formatStyle(e.bottom, 'px'),
left: this.formatStyle(e.left, 'px'),
right: this.formatStyle(e.right, 'px'),
height: this.formatStyle(e.height, 'px'),
width: this.formatStyle(e.width, 'px')
})
}
}
function m(e) {
var t,
n,
i,
r,
o = /MSIE\s8\.0/.test(navigator.userAgent);
if (e.div) {
n = e.div.offsetHeight,
i = e.div.offsetWidth,
r = e.div.offsetTop;
var s = (s = e.div.childNodes) && (s = s[0]) && s.getClientRects && s.getClientRects();
e = e.div.getBoundingClientRect(),
t = s ? Math.max(s[0] && s[0].height || 0, e.height / s.length)  : 0
}
this.left = e.left,
this.right = e.right,
this.top = e.top || r,
this.height = e.height || n,
this.bottom = e.bottom || r + (e.height || n),
this.width = e.width || i,
this.lineHeight = void 0 !== t ? t : e.lineHeight,
o && !this.lineHeight && (this.lineHeight = 13)
}
function A(e, t, n, i) {
var r = new m(t),
o = t.cue,
s = function (e) {
if ('number' == typeof e.line && (e.snapToLines || e.line >= 0 && e.line <= 100)) return e.line;
if (!e.track || !e.track.textTrackList || !e.track.textTrackList.mediaElement) return - 1;
for (var t = e.track, n = t.textTrackList, i = 0, r = 0; r < n.length && n[r] !== t; r++) 'showing' === n[r].mode && i++;
return - 1 * ++i
}(o),
a = [
];
if (o.snapToLines) {
var l;
switch (o.vertical) {
case '':
a = [
'+y',
'-y'
],
l = 'height';
break;
case 'rl':
a = [
'+x',
'-x'
],
l = 'width';
break;
case 'lr':
a = [
'-x',
'+x'
],
l = 'width'
}
var u = r.lineHeight,
c = u * Math.round(s),
h = n[l] + u,
d = a[0];
Math.abs(c) > h && (c = c < 0 ? - 1 : 1, c *= Math.ceil(h / u) * u),
s < 0 && (c += '' === o.vertical ? n.height : n.width, a = a.reverse()),
r.move(d, c)
} else {
var f = r.lineHeight / n.height * 100;
switch (o.lineAlign) {
case 'middle':
s -= f / 2;
break;
case 'end':
s -= f
}
switch (o.vertical) {
case '':
t.applyStyles({
top: t.formatStyle(s, '%')
});
break;
case 'rl':
t.applyStyles({
left: t.formatStyle(s, '%')
});
break;
case 'lr':
t.applyStyles({
right: t.formatStyle(s, '%')
})
}
a = [
'+y',
'-x',
'+x',
'-y'
],
r = new m(t)
}
var p = function (e, t) {
for (var r, o = new m(e), s = 1, a = 0; a < t.length; a++) {
for (; e.overlapsOppositeAxis(n, t[a]) || e.within(n) && e.overlapsAny(i); ) e.move(t[a]);
if (e.within(n)) return e;
var l = e.intersectPercentage(n);
s > l && (r = new m(e), s = l),
e = new m(o)
}
return r || o
}(r, a);
t.move(p.toCSSCompatValues(n))
}
function y() {
}
v.prototype.applyStyles = function (e, t) {
for (var n in t = t || this.div, e) e.hasOwnProperty(n) && (t.style[n] = e[n])
},
v.prototype.formatStyle = function (e, t) {
return 0 === e ? 0 : e + t
},
g.prototype = n(v.prototype),
g.prototype.constructor = g,
m.prototype.move = function (e, t) {
switch (t = void 0 !== t ? t : this.lineHeight, e) {
case '+x':
this.left += t,
this.right += t;
break;
case '-x':
this.left -= t,
this.right -= t;
break;
case '+y':
this.top += t,
this.bottom += t;
break;
case '-y':
this.top -= t,
this.bottom -= t
}
},
m.prototype.overlaps = function (e) {
return this.left < e.right && this.right > e.left && this.top < e.bottom && this.bottom > e.top
},
m.prototype.overlapsAny = function (e) {
for (var t = 0; t < e.length; t++) if (this.overlaps(e[t])) return !0;
return !1
},
m.prototype.within = function (e) {
return this.top >= e.top && this.bottom <= e.bottom && this.left >= e.left && this.right <= e.right
},
m.prototype.overlapsOppositeAxis = function (e, t) {
switch (t) {
case '+x':
return this.left < e.left;
case '-x':
return this.right > e.right;
case '+y':
return this.top < e.top;
case '-y':
return this.bottom > e.bottom
}
},
m.prototype.intersectPercentage = function (e) {
return Math.max(0, Math.min(this.right, e.right) - Math.max(this.left, e.left)) * Math.max(0, Math.min(this.bottom, e.bottom) - Math.max(this.top, e.top)) / (this.height * this.width)
},
m.prototype.toCSSCompatValues = function (e) {
return {
top: this.top - e.top,
bottom: e.bottom - this.bottom,
left: this.left - e.left,
right: e.right - this.right,
height: this.height,
width: this.width
}
},
m.getSimpleBoxPosition = function (e) {
var t = e.div ? e.div.offsetHeight : e.tagName ? e.offsetHeight : 0,
n = e.div ? e.div.offsetWidth : e.tagName ? e.offsetWidth : 0,
i = e.div ? e.div.offsetTop : e.tagName ? e.offsetTop : 0;
return {
left: (e = e.div ? e.div.getBoundingClientRect()  : e.tagName ? e.getBoundingClientRect()  : e).left,
right: e.right,
top: e.top || i,
height: e.height || t,
bottom: e.bottom || i + (e.height || t),
width: e.width || n
}
},
y.StringDecoder = function () {
return {
decode: function (e) {
if (!e) return '';
if ('string' != typeof e) throw new Error('Error - expected string data.');
return decodeURIComponent(encodeURIComponent(e))
}
}
},
y.convertCueToDOMTree = function (e, t) {
return e && t ? d(e, t)  : null
};
y.processCues = function (e, t, n) {
if (!e || !t || !n) return null;
for (; n.firstChild; ) n.removeChild(n.firstChild);
var i = e.document.createElement('div');
if (i.style.position = 'absolute', i.style.left = '0', i.style.right = '0', i.style.top = '0', i.style.bottom = '0', i.style.margin = '1.5%', n.appendChild(i), function (e) {
for (var t = 0; t < e.length; t++) if (e[t].hasBeenReset || !e[t].displayState) return !0;
return !1
}(t)) {
var r = [
],
o = m.getSimpleBoxPosition(i),
s = {
font: Math.round(0.05 * o.height * 100) / 100 + 'px sans-serif'
};
!function () {
for (var n, a, l = 0; l < t.length; l++) a = t[l],
n = new g(e, a, s),
i.appendChild(n.div),
A(0, n, o, r),
a.displayState = n.div,
r.push(m.getSimpleBoxPosition(n))
}()
} else for (var a = 0; a < t.length; a++) i.appendChild(t[a].displayState)
},
y.Parser = function (e, t, n) {
n || (n = t, t = {
}),
t || (t = {
}),
this.window = e,
this.vttjs = t,
this.state = 'INITIAL',
this.buffer = '',
this.decoder = n || new TextDecoder('utf8'),
this.regionList = [
]
},
y.Parser.prototype = {
reportOrThrowError: function (e) {
if (!(e instanceof i)) throw e;
this.onparsingerror && this.onparsingerror(e)
},
parse: function (e) {
var t = this;
function n() {
for (var e = t.buffer, n = 0; n < e.length && '\r' !== e[n] && '\n' !== e[n]; ) ++n;
var i = e.substr(0, n);
return '\r' === e[n] && ++n,
'\n' === e[n] && ++n,
t.buffer = e.substr(n),
i
}
function l(e) {
e.match(/X-TIMESTAMP-MAP/) ? s(e, function (e, n) {
switch (e) {
case 'X-TIMESTAMP-MAP':
i = n,
a = new o,
s(i, function (e, t) {
switch (e) {
case 'MPEGT':
a.integer(e + 'S', t);
break;
case 'LOCA':
a.set(e + 'L', r(t))
}
},
/[^\d]:/,
/,/), t.ontimestampmap && t.ontimestampmap({
MPEGTS: a.get('MPEGTS'),
LOCAL: a.get('LOCAL')
})
}
var i,
a
},
/=/) : s(e, function (e, n) {
switch (e) {
case 'Region':
!function (e) {
var n = new o;
if (s(e, function (e, t) {
switch (e) {
case 'id':
n.set(e, t);
break;
case 'width':
n.percent(e, t);
break;
case 'lines':
n.integer(e, t);
break;
case 'regionanchor':
case 'viewportanchor':
var i = t.split(',');
if (2 !== i.length) break;
var r = new o;
if (r.percent('x', i[0]), r.percent('y', i[1]), !r.has('x') || !r.has('y')) break;
n.set(e + 'X', r.get('x')),
n.set(e + 'Y', r.get('y'));
break;
case 'scroll':
n.alt(e, t, [
'up'
])
}
},
/=/,
/\s/), n.has('id')) {
var i = new (t.vttjs.VTTRegion || t.window.VTTRegion);
i.width = n.get('width', 100),
i.lines = n.get('lines', 3),
i.regionAnchorX = n.get('regionanchorX', 0),
i.regionAnchorY = n.get('regionanchorY', 100),
i.viewportAnchorX = n.get('viewportanchorX', 0),
i.viewportAnchorY = n.get('viewportanchorY', 100),
i.scroll = n.get('scroll', ''),
t.onregion && t.onregion(i),
t.regionList.push({
id: n.get('id'),
region: i
})
}
}(n)
}
},
/:/)
}
e && (t.buffer += t.decoder.decode(e, {
stream: !0
})); try {
var u;
if ('INITIAL' === t.state) {
if (!/\r\n|\n/.test(t.buffer)) return this;
var c = (u = n()).match(/^WEBVTT([ \t].*)?$/);
if (!c || !c[0]) throw new i(i.Errors.BadSignature);
t.state = 'HEADER'
}
for (var h = !1; t.buffer; ) {
if (!/\r\n|\n/.test(t.buffer)) return this;
switch (h ? h = !1 : u = n(), t.state) {
case 'HEADER':
/:/.test(u) ? l(u)  : u || (t.state = 'ID');
continue;
case 'NOTE':
u || (t.state = 'ID');
continue;
case 'ID':
if (/^NOTE($|[ \t])/.test(u)) {
t.state = 'NOTE';
break
}
if (!u) continue;
if (t.cue = new (t.vttjs.VTTCue || t.window.VTTCue) (0, 0, ''), t.state = 'CUE', - 1 === u.indexOf('-->')) {
t.cue.id = u;
continue
}
case 'CUE':
try {
a(u, t.cue, t.regionList)
} catch (e) {
t.reportOrThrowError(e),
t.cue = null,
t.state = 'BADCUE';
continue
}
t.state = 'CUETEXT';
continue;
case 'CUETEXT':
var d = - 1 !== u.indexOf('-->');
if (!u || d && (h = !0)) {
t.oncue && t.oncue(t.cue),
t.cue = null,
t.state = 'ID';
continue
}
t.cue.text && (t.cue.text += '\n'),
t.cue.text += u;
continue;
case 'BADCUE':
u || (t.state = 'ID');
continue
}
}
} catch (e) {
t.reportOrThrowError(e),
'CUETEXT' === t.state && t.cue && t.oncue && t.oncue(t.cue),
t.cue = null,
t.state = 'INITIAL' === t.state ? 'BADWEBVTT' : 'BADCUE'
}
return this
}, flush: function () {
try {
if (this.buffer += this.decoder.decode(), (this.cue || 'HEADER' === this.state) && (this.buffer += '\n\n', this.parse()), 'INITIAL' === this.state) throw new i(i.Errors.BadSignature)
} catch (e) {
this.reportOrThrowError(e)
}
return this.onflush && this.onflush(),
this
}
},
e.exports = y
}, function (e, t, n) {
var i = n(3),
r = e.exports = {
WebVTT: n(248),
VTTCue: n(247),
VTTRegion: n(246)
};
i.vttjs = r,
i.WebVTT = r.WebVTT;
var o = r.VTTCue,
s = r.VTTRegion,
a = i.VTTCue,
l = i.VTTRegion;
r.shim = function () {
i.VTTCue = o,
i.VTTRegion = s
},
r.restore = function () {
i.VTTCue = a,
i.VTTRegion = l
},
i.VTTCue || r.shim()
}, function (e, t) {
e.exports = function () {
for (var e = {
}, t = 0; t < arguments.length; t++) {
var i = arguments[t];
for (var r in i) n.call(i, r) && (e[r] = i[r])
}
return e
};
var n = Object.prototype.hasOwnProperty
}, function (e, t, n) {
var i = n(103);
e.exports = function (e, t, n) {
if (!i(t)) throw new TypeError('iterator must be a function');
arguments.length < 3 && (n = this);
'[object Array]' === r.call(e) ? function (e, t, n) {
for (var i = 0, r = e.length; i < r; i++) o.call(e, i) && t.call(n, e[i], i, e)
}(e, t, n)  : 'string' == typeof e ? function (e, t, n) {
for (var i = 0, r = e.length; i < r; i++) t.call(n, e.charAt(i), i, e)
}(e, t, n)  : function (e, t, n) {
for (var i in e) o.call(e, i) && t.call(n, e[i], i, e)
}(e, t, n)
};
var r = Object.prototype.toString,
o = Object.prototype.hasOwnProperty
}, function (e, t) {
(t = e.exports = function (e) {
return e.replace(/^\s*|\s*$/g, '')
}).left = function (e) {
return e.replace(/^\s*/, '')
},
t.right = function (e) {
return e.replace(/\s*$/, '')
}
}, function (e, t, n) {
var i = n(252),
r = n(251);
e.exports = function (e) {
if (!e) return {
};
var t = {
};
return r(i(e).split('\n'), function (e) {
var n,
r = e.indexOf(':'),
o = i(e.slice(0, r)).toLowerCase(),
s = i(e.slice(r + 1));
void 0 === t[o] ? t[o] = s : (n = t[o], '[object Array]' === Object.prototype.toString.call(n) ? t[o].push(s)  : t[o] = [
t[o],
s
])
}),
t
}
}, function (e, t, n) {
'use strict';
var i = n(3),
r = n(103),
o = n(253),
s = n(250);
function a(e, t, n) {
var i = e;
return r(t) ? (n = t, 'string' == typeof e && (i = {
uri: e
}))  : i = s(t, {
uri: e
}),
i.callback = n,
i
}
function l(e, t, n) {
return u(t = a(e, t, n))
}
function u(e) {
if (void 0 === e.callback) throw new Error('callback argument missing');
var t = !1,
n = function (n, i, r) {
t || (t = !0, e.callback(n, i, r))
};
function i(e) {
return clearTimeout(c),
e instanceof Error || (e = new Error('' + (e || 'Unknown XMLHttpRequest Error'))),
e.statusCode = 0,
n(e, m)
}
function r() {
if (!a) {
var t;
clearTimeout(c),
t = e.useXDR && void 0 === u.status ? 200 : 1223 === u.status ? 204 : u.status;
var i = m,
r = null;
return 0 !== t ? (i = {
body: function () {
var e = void 0;
if (e = u.response ? u.response : u.responseText || function (e) {
if ('document' === e.responseType) return e.responseXML;
var t = e.responseXML && 'parsererror' === e.responseXML.documentElement.nodeName;
return '' !== e.responseType || t ? null : e.responseXML
}(u), g) try {
e = JSON.parse(e)
} catch (e) {
}
return e
}(),
statusCode: t,
method: d,
headers: {
},
url: h,
rawRequest: u
}, u.getAllResponseHeaders && (i.headers = o(u.getAllResponseHeaders())))  : r = new Error('Internal XMLHttpRequest Error'),
n(r, i, i.body)
}
}
var s,
a,
u = e.xhr || null;
u || (u = e.cors || e.useXDR ? new l.XDomainRequest : new l.XMLHttpRequest);
var c,
h = u.url = e.uri || e.url,
d = u.method = e.method || 'GET',
f = e.body || e.data,
p = u.headers = e.headers || {
},
v = !!e.sync,
g = !1,
m = {
body: void 0,
headers: {
},
statusCode: 0,
method: d,
url: h,
rawRequest: u
};
if ('json' in e && !1 !== e.json && (g = !0, p.accept || p.Accept || (p.Accept = 'application/json'), 'GET' !== d && 'HEAD' !== d && (p['content-type'] || p['Content-Type'] || (p['Content-Type'] = 'application/json'), f = JSON.stringify(!0 === e.json ? f : e.json))), u.onreadystatechange = function () {
4 === u.readyState && setTimeout(r, 0)
}, u.onload = r, u.onerror = i, u.onprogress = function () {
}, u.onabort = function () {
a = !0
}, u.ontimeout = i, u.open(d, h, !v, e.username, e.password), v || (u.withCredentials = !!e.withCredentials), !v && e.timeout > 0 && (c = setTimeout(function () {
if (!a) {
a = !0,
u.abort('timeout');
var e = new Error('XMLHttpRequest timeout');
e.code = 'ETIMEDOUT',
i(e)
}
}, e.timeout)), u.setRequestHeader) for (s in p) p.hasOwnProperty(s) && u.setRequestHeader(s, p[s]);
 else if (e.headers && !function (e) {
for (var t in e) if (e.hasOwnProperty(t)) return !1;
return !0
}(e.headers)) throw new Error('Headers cannot be set on an XDomainRequest object');
return 'responseType' in e && (u.responseType = e.responseType),
'beforeSend' in e && 'function' == typeof e.beforeSend && e.beforeSend(u),
u.send(f || null),
u
}
e.exports = l,
l.XMLHttpRequest = i.XMLHttpRequest || function () {
},
l.XDomainRequest = 'withCredentials' in new l.XMLHttpRequest ? l.XMLHttpRequest : i.XDomainRequest,
function (e, t) {
for (var n = 0; n < e.length; n++) t(e[n])
}(['get',
'put',
'post',
'patch',
'head',
'delete'], function (e) {
l['delete' === e ? 'del' : e] = function (t, n, i) {
return (n = a(t, n, i)).method = e.toUpperCase(),
u(n)
}
})
}, function (e, t) {
e.exports = function (e, t) {
var n,
i = null;
try {
n = JSON.parse(e, t)
} catch (e) {
i = e
}
return [i,
n]
}
}, function (e, t) {
function n(e) {
return e.replace(/\n\r?\s*/g, '')
}
e.exports = function (e) {
for (var t = '', i = 0; i < arguments.length; i++) t += n(e[i]) + (arguments[i + 1] || '');
return t
}
}, function (e, t) {
}
]);
