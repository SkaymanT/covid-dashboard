!(function (t) {
  var n = {};
  function e(o) {
    if (n[o]) return n[o].exports;
    var r = (n[o] = { i: o, l: !1, exports: {} });
    return t[o].call(r.exports, r, r.exports, e), (r.l = !0), r.exports;
  }
  (e.m = t),
    (e.c = n),
    (e.d = function (t, n, o) {
      e.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: o });
    }),
    (e.r = function (t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 });
    }),
    (e.t = function (t, n) {
      if ((1 & n && (t = e(t)), 8 & n)) return t;
      if (4 & n && 'object' == typeof t && t && t.__esModule) return t;
      var o = Object.create(null);
      if (
        (e.r(o),
        Object.defineProperty(o, 'default', { enumerable: !0, value: t }),
        2 & n && 'string' != typeof t)
      )
        for (var r in t)
          e.d(
            o,
            r,
            function (n) {
              return t[n];
            }.bind(null, r)
          );
      return o;
    }),
    (e.n = function (t) {
      var n =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return e.d(n, 'a', n), n;
    }),
    (e.o = function (t, n) {
      return Object.prototype.hasOwnProperty.call(t, n);
    }),
    (e.p = ''),
    e((e.s = 17));
})([
  function (t, n) {
    function e(n) {
      return (
        (t.exports = e = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            }),
        e(n)
      );
    }
    t.exports = e;
  },
  function (t, n, e) {
    t.exports = e(9);
  },
  function (t, n, e) {
    var o = e(10);
    function r(n, e, i) {
      return (
        'undefined' != typeof Reflect && Reflect.get
          ? (t.exports = r = Reflect.get)
          : (t.exports = r = function (t, n, e) {
              var r = o(t, n);
              if (r) {
                var i = Object.getOwnPropertyDescriptor(r, n);
                return i.get ? i.get.call(e) : i.value;
              }
            }),
        r(n, e, i || n)
      );
    }
    t.exports = r;
  },
  function (t, n) {
    function e(t, n, e, o, r, i, a) {
      try {
        var s = t[i](a),
          c = s.value;
      } catch (t) {
        return void e(t);
      }
      s.done ? n(c) : Promise.resolve(c).then(o, r);
    }
    t.exports = function (t) {
      return function () {
        var n = this,
          o = arguments;
        return new Promise(function (r, i) {
          var a = t.apply(n, o);
          function s(t) {
            e(a, r, i, s, c, 'next', t);
          }
          function c(t) {
            e(a, r, i, s, c, 'throw', t);
          }
          s(void 0);
        });
      };
    };
  },
  function (t, n) {
    t.exports = function (t, n) {
      if (!(t instanceof n))
        throw new TypeError('Cannot call a class as a function');
    };
  },
  function (t, n) {
    function e(t, n) {
      for (var e = 0; e < n.length; e++) {
        var o = n[e];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          'value' in o && (o.writable = !0),
          Object.defineProperty(t, o.key, o);
      }
    }
    t.exports = function (t, n, o) {
      return n && e(t.prototype, n), o && e(t, o), t;
    };
  },
  function (t, n, e) {
    var o = e(11);
    t.exports = function (t, n) {
      if ('function' != typeof n && null !== n)
        throw new TypeError(
          'Super expression must either be null or a function'
        );
      (t.prototype = Object.create(n && n.prototype, {
        constructor: { value: t, writable: !0, configurable: !0 },
      })),
        n && o(t, n);
    };
  },
  function (t, n, e) {
    var o = e(12),
      r = e(13);
    t.exports = function (t, n) {
      return !n || ('object' !== o(n) && 'function' != typeof n) ? r(t) : n;
    };
  },
  function (t, n, e) {
    var o = e(19),
      r = e(20),
      i = e(21),
      a = e(22);
    t.exports = function (t) {
      return o(t) || r(t) || i(t) || a();
    };
  },
  function (t, n, e) {
    var o = (function (t) {
      'use strict';
      var n = Object.prototype,
        e = n.hasOwnProperty,
        o = 'function' == typeof Symbol ? Symbol : {},
        r = o.iterator || '@@iterator',
        i = o.asyncIterator || '@@asyncIterator',
        a = o.toStringTag || '@@toStringTag';
      function s(t, n, e, o) {
        var r = n && n.prototype instanceof l ? n : l,
          i = Object.create(r.prototype),
          a = new C(o || []);
        return (
          (i._invoke = (function (t, n, e) {
            var o = 'suspendedStart';
            return function (r, i) {
              if ('executing' === o)
                throw new Error('Generator is already running');
              if ('completed' === o) {
                if ('throw' === r) throw i;
                return w();
              }
              for (e.method = r, e.arg = i; ; ) {
                var a = e.delegate;
                if (a) {
                  var s = b(a, e);
                  if (s) {
                    if (s === u) continue;
                    return s;
                  }
                }
                if ('next' === e.method) e.sent = e._sent = e.arg;
                else if ('throw' === e.method) {
                  if ('suspendedStart' === o) throw ((o = 'completed'), e.arg);
                  e.dispatchException(e.arg);
                } else 'return' === e.method && e.abrupt('return', e.arg);
                o = 'executing';
                var l = c(t, n, e);
                if ('normal' === l.type) {
                  if (
                    ((o = e.done ? 'completed' : 'suspendedYield'), l.arg === u)
                  )
                    continue;
                  return { value: l.arg, done: e.done };
                }
                'throw' === l.type &&
                  ((o = 'completed'), (e.method = 'throw'), (e.arg = l.arg));
              }
            };
          })(t, e, a)),
          i
        );
      }
      function c(t, n, e) {
        try {
          return { type: 'normal', arg: t.call(n, e) };
        } catch (t) {
          return { type: 'throw', arg: t };
        }
      }
      t.wrap = s;
      var u = {};
      function l() {}
      function h() {}
      function p() {}
      var d = {};
      d[r] = function () {
        return this;
      };
      var f = Object.getPrototypeOf,
        g = f && f(f(L([])));
      g && g !== n && e.call(g, r) && (d = g);
      var v = (p.prototype = l.prototype = Object.create(d));
      function m(t) {
        ['next', 'throw', 'return'].forEach(function (n) {
          t[n] = function (t) {
            return this._invoke(n, t);
          };
        });
      }
      function y(t, n) {
        var o;
        this._invoke = function (r, i) {
          function a() {
            return new n(function (o, a) {
              !(function o(r, i, a, s) {
                var u = c(t[r], t, i);
                if ('throw' !== u.type) {
                  var l = u.arg,
                    h = l.value;
                  return h && 'object' == typeof h && e.call(h, '__await')
                    ? n.resolve(h.__await).then(
                        function (t) {
                          o('next', t, a, s);
                        },
                        function (t) {
                          o('throw', t, a, s);
                        }
                      )
                    : n.resolve(h).then(
                        function (t) {
                          (l.value = t), a(l);
                        },
                        function (t) {
                          return o('throw', t, a, s);
                        }
                      );
                }
                s(u.arg);
              })(r, i, o, a);
            });
          }
          return (o = o ? o.then(a, a) : a());
        };
      }
      function b(t, n) {
        var e = t.iterator[n.method];
        if (void 0 === e) {
          if (((n.delegate = null), 'throw' === n.method)) {
            if (
              t.iterator.return &&
              ((n.method = 'return'),
              (n.arg = void 0),
              b(t, n),
              'throw' === n.method)
            )
              return u;
            (n.method = 'throw'),
              (n.arg = new TypeError(
                "The iterator does not provide a 'throw' method"
              ));
          }
          return u;
        }
        var o = c(e, t.iterator, n.arg);
        if ('throw' === o.type)
          return (n.method = 'throw'), (n.arg = o.arg), (n.delegate = null), u;
        var r = o.arg;
        return r
          ? r.done
            ? ((n[t.resultName] = r.value),
              (n.next = t.nextLoc),
              'return' !== n.method && ((n.method = 'next'), (n.arg = void 0)),
              (n.delegate = null),
              u)
            : r
          : ((n.method = 'throw'),
            (n.arg = new TypeError('iterator result is not an object')),
            (n.delegate = null),
            u);
      }
      function x(t) {
        var n = { tryLoc: t[0] };
        1 in t && (n.catchLoc = t[1]),
          2 in t && ((n.finallyLoc = t[2]), (n.afterLoc = t[3])),
          this.tryEntries.push(n);
      }
      function _(t) {
        var n = t.completion || {};
        (n.type = 'normal'), delete n.arg, (t.completion = n);
      }
      function C(t) {
        (this.tryEntries = [{ tryLoc: 'root' }]),
          t.forEach(x, this),
          this.reset(!0);
      }
      function L(t) {
        if (t) {
          var n = t[r];
          if (n) return n.call(t);
          if ('function' == typeof t.next) return t;
          if (!isNaN(t.length)) {
            var o = -1,
              i = function n() {
                for (; ++o < t.length; )
                  if (e.call(t, o)) return (n.value = t[o]), (n.done = !1), n;
                return (n.value = void 0), (n.done = !0), n;
              };
            return (i.next = i);
          }
        }
        return { next: w };
      }
      function w() {
        return { value: void 0, done: !0 };
      }
      return (
        (h.prototype = v.constructor = p),
        (p.constructor = h),
        (p[a] = h.displayName = 'GeneratorFunction'),
        (t.isGeneratorFunction = function (t) {
          var n = 'function' == typeof t && t.constructor;
          return (
            !!n &&
            (n === h || 'GeneratorFunction' === (n.displayName || n.name))
          );
        }),
        (t.mark = function (t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, p)
              : ((t.__proto__ = p), a in t || (t[a] = 'GeneratorFunction')),
            (t.prototype = Object.create(v)),
            t
          );
        }),
        (t.awrap = function (t) {
          return { __await: t };
        }),
        m(y.prototype),
        (y.prototype[i] = function () {
          return this;
        }),
        (t.AsyncIterator = y),
        (t.async = function (n, e, o, r, i) {
          void 0 === i && (i = Promise);
          var a = new y(s(n, e, o, r), i);
          return t.isGeneratorFunction(e)
            ? a
            : a.next().then(function (t) {
                return t.done ? t.value : a.next();
              });
        }),
        m(v),
        (v[a] = 'Generator'),
        (v[r] = function () {
          return this;
        }),
        (v.toString = function () {
          return '[object Generator]';
        }),
        (t.keys = function (t) {
          var n = [];
          for (var e in t) n.push(e);
          return (
            n.reverse(),
            function e() {
              for (; n.length; ) {
                var o = n.pop();
                if (o in t) return (e.value = o), (e.done = !1), e;
              }
              return (e.done = !0), e;
            }
          );
        }),
        (t.values = L),
        (C.prototype = {
          constructor: C,
          reset: function (t) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = 'next'),
              (this.arg = void 0),
              this.tryEntries.forEach(_),
              !t)
            )
              for (var n in this)
                't' === n.charAt(0) &&
                  e.call(this, n) &&
                  !isNaN(+n.slice(1)) &&
                  (this[n] = void 0);
          },
          stop: function () {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ('throw' === t.type) throw t.arg;
            return this.rval;
          },
          dispatchException: function (t) {
            if (this.done) throw t;
            var n = this;
            function o(e, o) {
              return (
                (a.type = 'throw'),
                (a.arg = t),
                (n.next = e),
                o && ((n.method = 'next'), (n.arg = void 0)),
                !!o
              );
            }
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var i = this.tryEntries[r],
                a = i.completion;
              if ('root' === i.tryLoc) return o('end');
              if (i.tryLoc <= this.prev) {
                var s = e.call(i, 'catchLoc'),
                  c = e.call(i, 'finallyLoc');
                if (s && c) {
                  if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                  if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                } else if (s) {
                  if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                } else {
                  if (!c)
                    throw new Error('try statement without catch or finally');
                  if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                }
              }
            }
          },
          abrupt: function (t, n) {
            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
              var r = this.tryEntries[o];
              if (
                r.tryLoc <= this.prev &&
                e.call(r, 'finallyLoc') &&
                this.prev < r.finallyLoc
              ) {
                var i = r;
                break;
              }
            }
            i &&
              ('break' === t || 'continue' === t) &&
              i.tryLoc <= n &&
              n <= i.finallyLoc &&
              (i = null);
            var a = i ? i.completion : {};
            return (
              (a.type = t),
              (a.arg = n),
              i
                ? ((this.method = 'next'), (this.next = i.finallyLoc), u)
                : this.complete(a)
            );
          },
          complete: function (t, n) {
            if ('throw' === t.type) throw t.arg;
            return (
              'break' === t.type || 'continue' === t.type
                ? (this.next = t.arg)
                : 'return' === t.type
                ? ((this.rval = this.arg = t.arg),
                  (this.method = 'return'),
                  (this.next = 'end'))
                : 'normal' === t.type && n && (this.next = n),
              u
            );
          },
          finish: function (t) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
              var e = this.tryEntries[n];
              if (e.finallyLoc === t)
                return this.complete(e.completion, e.afterLoc), _(e), u;
            }
          },
          catch: function (t) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
              var e = this.tryEntries[n];
              if (e.tryLoc === t) {
                var o = e.completion;
                if ('throw' === o.type) {
                  var r = o.arg;
                  _(e);
                }
                return r;
              }
            }
            throw new Error('illegal catch attempt');
          },
          delegateYield: function (t, n, e) {
            return (
              (this.delegate = { iterator: L(t), resultName: n, nextLoc: e }),
              'next' === this.method && (this.arg = void 0),
              u
            );
          },
        }),
        t
      );
    })(t.exports);
    try {
      regeneratorRuntime = o;
    } catch (t) {
      Function('r', 'regeneratorRuntime = r')(o);
    }
  },
  function (t, n, e) {
    var o = e(0);
    t.exports = function (t, n) {
      for (
        ;
        !Object.prototype.hasOwnProperty.call(t, n) && null !== (t = o(t));

      );
      return t;
    };
  },
  function (t, n) {
    function e(n, o) {
      return (
        (t.exports = e =
          Object.setPrototypeOf ||
          function (t, n) {
            return (t.__proto__ = n), t;
          }),
        e(n, o)
      );
    }
    t.exports = e;
  },
  function (t, n) {
    function e(n) {
      return (
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? (t.exports = e = function (t) {
              return typeof t;
            })
          : (t.exports = e = function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            }),
        e(n)
      );
    }
    t.exports = e;
  },
  function (t, n) {
    t.exports = function (t) {
      if (void 0 === t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return t;
    };
  },
  function (t, n) {
    t.exports = function (t, n) {
      (null == n || n > t.length) && (n = t.length);
      for (var e = 0, o = new Array(n); e < n; e++) o[e] = t[e];
      return o;
    };
  },
  ,
  ,
  function (t, n, e) {
    e(18), (t.exports = e(23));
  },
  function (t, n, e) {},
  function (t, n, e) {
    var o = e(14);
    t.exports = function (t) {
      if (Array.isArray(t)) return o(t);
    };
  },
  function (t, n) {
    t.exports = function (t) {
      if ('undefined' != typeof Symbol && Symbol.iterator in Object(t))
        return Array.from(t);
    };
  },
  function (t, n, e) {
    var o = e(14);
    t.exports = function (t, n) {
      if (t) {
        if ('string' == typeof t) return o(t, n);
        var e = Object.prototype.toString.call(t).slice(8, -1);
        return (
          'Object' === e && t.constructor && (e = t.constructor.name),
          'Map' === e || 'Set' === e
            ? Array.from(e)
            : 'Arguments' === e ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
            ? o(t, n)
            : void 0
        );
      }
    };
  },
  function (t, n) {
    t.exports = function () {
      throw new TypeError(
        'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
      );
    };
  },
  function (t, n, e) {
    'use strict';
    e.r(n);
    var o = function () {
        (document.getElementById('menu__toggle').checked = !1),
          document
            .querySelector('.header_wrapper')
            .classList.remove('open_menu');
      },
      r = function (t) {
        return t.target.classList.contains('menu__container');
      },
      i = function () {
        document.getElementById('menu__toggle').checked
          ? document.querySelector('.header_wrapper').classList.add('open_menu')
          : document
              .querySelector('.header_wrapper')
              .classList.remove('open_menu');
      },
      a = function (t) {
        if (0 != t.target.classList.length) {
          var n = t.target,
            e = n.classList,
            o = n.parentNode;
          return (
            e.length && (e.contains('active') || o.classList.contains('active'))
          );
        }
      },
      s = e(1),
      c = e.n(s),
      u = e(3),
      l = e.n(u),
      h = e(4),
      p = e.n(h),
      d = e(5),
      f = e.n(d);
    function g() {
      return v.apply(this, arguments);
    }
    function v() {
      return (v = l()(
        c.a.mark(function t() {
          var n, e;
          return c.a.wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (t.next = 2), fetch('./assets/pets.json');
                case 2:
                  return (n = t.sent), (t.next = 5), n.json();
                case 5:
                  return (e = t.sent), t.abrupt('return', e);
                case 7:
                case 'end':
                  return t.stop();
              }
          }, t);
        })
      )).apply(this, arguments);
    }
    var m = e(8),
      y = e.n(m);
    var b = function (t) {
        for (var n = [], e = t.length, o = 0; o < e / 8; o++) {
          for (
            var r = [],
              i = function (n) {
                if (r.length >= 8) return (a = n), 'break';
                !r.some(function (e) {
                  return (a = n), e.name === t[n].name;
                }) && (r.push(t[n]), t.splice(n, 1), n--),
                  (a = n);
              },
              a = 0;
            a < t.length;
            a++
          ) {
            if ('break' === i(a)) break;
          }
          n = [].concat(y()(n), r);
        }
        return (t = x((t = n)));
      },
      x = function t(n) {
        for (
          var e = n.length,
            o = function (e) {
              for (
                var o = n.slice(6 * e, 6 * e + 6),
                  r = function (r) {
                    if (
                      void 0 !==
                      o.find(function (t, n) {
                        return t.name === o[r].name && n !== r;
                      })
                    ) {
                      var i = 6 * e + r,
                        a = Math.trunc(i / 8);
                      n.splice(8 * a, 0, n.splice(i, 1)[0]), t(n);
                    }
                  },
                  i = 0;
                i < 6;
                i++
              )
                r(i);
            },
            r = 0;
          r < e / 6;
          r++
        )
          o(r);
        return n;
      },
      _ = e(2),
      C = e.n(_),
      L = e(6),
      w = e.n(L),
      P = e(7),
      M = e.n(P),
      N = e(0),
      k = e.n(N);
    function S(t) {
      var n = (function () {
        if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' == typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var e,
          o = k()(t);
        if (n) {
          var r = k()(this).constructor;
          e = Reflect.construct(o, arguments, r);
        } else e = o.apply(this, arguments);
        return M()(this, e);
      };
    }
    var E = (function (t) {
        w()(e, t);
        var n = S(e);
        function e(t, o) {
          var r,
            i = o.name,
            a = o.img,
            s = o.type,
            c = o.breed,
            u = o.description,
            l = o.age,
            h = o.inoculations,
            d = o.diseases,
            f = o.parasites;
          return (
            p()(this, e),
            ((r = n.call(this, t)).name = i),
            (r.img = a),
            (r.breed = c),
            (r.type = s),
            (r.description = u),
            (r.age = l),
            (r.inoculations = h),
            (r.diseases = d),
            (r.parasites = f),
            r
          );
        }
        return (
          f()(e, [
            {
              key: 'generateContentCardModal',
              value: function () {
                return (
                  (this.content = C()(
                    k()(e.prototype),
                    'createDomNode',
                    this
                  ).call(this, this.modal, 'div', 'card-modal-content')),
                  (this.imgCardModal = C()(
                    k()(e.prototype),
                    'createDomNode',
                    this
                  ).call(this, this.imgCardModal, 'img', 'card-modal-img')),
                  (this.imgCardModal.src = this.img),
                  (this.imgCardModal.alt = this.name),
                  (this.infoCardModal = C()(
                    k()(e.prototype),
                    'createDomNode',
                    this
                  ).call(this, this.infoCardModal, 'div', 'card-modal-info')),
                  (this.infoTitle = C()(
                    k()(e.prototype),
                    'createDomNode',
                    this
                  ).call(this, this.infoTitle, 'h3', 'info-title')),
                  (this.infoTitle.innerHTML = this.name),
                  (this.infoSubtitle = C()(
                    k()(e.prototype),
                    'createDomNode',
                    this
                  ).call(this, this.infoSubtitle, 'h4', 'info-subtitle')),
                  (this.infoSubtitle.innerHTML = ''
                    .concat(this.type, ' - ')
                    .concat(this.breed)),
                  (this.infoParagraph = C()(
                    k()(e.prototype),
                    'createDomNode',
                    this
                  ).call(this, this.infoParagraph, 'h5', 'info-paragraph')),
                  (this.infoParagraph.innerHTML = this.description),
                  (this.infoList = C()(
                    k()(e.prototype),
                    'createDomNode',
                    this
                  ).call(this, this.infoList, 'ul', 'info-list')),
                  (this.infoList.innerHTML = '<li><h5>Age: <span>'
                    .concat(
                      this.age,
                      '</span></h5></li>\n    <li><h5>Inoculations: <span>'
                    )
                    .concat(
                      this.inoculations,
                      '</span></h5></li>\n    <li><h5>Diseases: <span>'
                    )
                    .concat(
                      this.diseases,
                      '</span></h5></li>\n    <li><h5>Parasites: <span>'
                    )
                    .concat(this.parasites, '</span></h5></li>')),
                  this.appendCardModalElement(),
                  this.content
                );
              },
            },
            {
              key: 'appendCardModalElement',
              value: function () {
                this.content.append(this.imgCardModal),
                  this.content.append(this.infoCardModal),
                  this.infoCardModal.append(this.infoTitle),
                  this.infoCardModal.append(this.infoSubtitle),
                  this.infoCardModal.append(this.infoParagraph),
                  this.infoCardModal.append(this.infoList);
              },
            },
            {
              key: 'renderCardModal',
              value: function () {
                var t = this.generateContentCardModal();
                C()(k()(e.prototype), 'createModal', this).call(this, t);
              },
            },
          ]),
          e
        );
      })(
        (function () {
          function t(n) {
            p()(this, t),
              (this.classes = n),
              (this.modal = ''),
              (this.modalContent = ''),
              (this.modalCloseBtn = ''),
              (this.overlay = '');
          }
          return (
            f()(t, [
              {
                key: 'createModal',
                value: function (t) {
                  (this.overlay = this.createDomNode(
                    this.overlay,
                    'div',
                    'overlay',
                    'overlay_modal'
                  )),
                    (this.modal = this.createDomNode(
                      this.modal,
                      'div',
                      this.classes
                    )),
                    (this.modalContent = this.createDomNode(
                      this.modalContent,
                      'div',
                      'modal__content'
                    )),
                    (this.modalCloseBtn = this.createDomNode(
                      this.modalCloseBtn,
                      'div',
                      'modal__close-icon'
                    )),
                    (this.modalCloseBtn.innerHTML =
                      '<button class="button_close"><img src="./assets/icons/icon-close.svg" alt="close"></button>'),
                    this.setContent(t),
                    this.appendModalElement(),
                    this.bindEvents(),
                    this.openModal();
                },
              },
              {
                key: 'createDomNode',
                value: function (t, n) {
                  var e;
                  t = document.createElement(n);
                  for (
                    var o = arguments.length,
                      r = new Array(o > 2 ? o - 2 : 0),
                      i = 2;
                    i < o;
                    i++
                  )
                    r[i - 2] = arguments[i];
                  return (e = t.classList).add.apply(e, r), t;
                },
              },
              {
                key: 'setContent',
                value: function (t) {
                  'string' == typeof t
                    ? (this.modalContent.innerHTML = t)
                    : ((this.modalContent.innerHTML = ''),
                      this.modalContent.append(t));
                },
              },
              {
                key: 'appendModalElement',
                value: function () {
                  this.modal.append(this.modalContent),
                    this.overlay.append(this.modal),
                    this.overlay.append(this.modalCloseBtn);
                },
              },
              {
                key: 'bindEvents',
                value: function () {
                  this.modalCloseBtn.addEventListener('click', this.closeModal),
                    this.overlay.addEventListener('click', this.closeModal);
                },
              },
              {
                key: 'openModal',
                value: function () {
                  document.body.append(this.overlay);
                },
              },
              {
                key: 'closeModal',
                value: function (t) {
                  (t.target.classList.contains('overlay') ||
                    (null !== t.target.closest('.button_close') &&
                      t.target
                        .closest('.button_close')
                        .classList.contains('button_close'))) &&
                    null !== document.querySelector('.overlay') &&
                    document.querySelector('.overlay').remove();
                },
              },
            ]),
            t
          );
        })()
      ),
      T = (function () {
        function t() {
          p()(this, t);
        }
        return (
          f()(t, [
            {
              key: 'createCard',
              value: function (t, n, e) {
                return (
                  (this.card = this.createDomNode(this.card, 'div', 'card', e)),
                  (this.card.id = n),
                  (this.img = this.createDomNode(
                    this.img,
                    'img',
                    'card_image'
                  )),
                  (this.img.src = t),
                  (this.img.alt = n),
                  (this.nameParagraph = this.createDomNode(
                    this.nameParagraph,
                    'p',
                    'card_name'
                  )),
                  (this.nameParagraph.innerText = n),
                  (this.cardButton = this.createDomNode(
                    this.cardButton,
                    'div',
                    'card_button'
                  )),
                  (this.button = this.createDomNode(
                    this.button,
                    'button',
                    'button_secondary'
                  )),
                  (this.button.innerText = 'Learn more'),
                  this.appendCardElement(),
                  this.card
                );
              },
            },
            {
              key: 'appendCardElement',
              value: function () {
                this.card.append(this.img),
                  this.card.append(this.nameParagraph),
                  this.card.append(this.cardButton),
                  this.cardButton.append(this.button);
              },
            },
            {
              key: 'createDomNode',
              value: function (t, n) {
                var e;
                t = document.createElement(n);
                for (
                  var o = arguments.length,
                    r = new Array(o > 2 ? o - 2 : 0),
                    i = 2;
                  i < o;
                  i++
                )
                  r[i - 2] = arguments[i];
                return (e = t.classList).add.apply(e, r), t;
              },
            },
          ]),
          t
        );
      })();
    function O() {
      return (O = l()(
        c.a.mark(function t() {
          var n;
          return c.a.wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (t.next = 2), g();
                case 2:
                  (n = t.sent),
                    document
                      .querySelector('.pets__pagination')
                      .addEventListener('click', function (t) {
                        t.target.closest('.card_button') &&
                          B(j(n, t.target.closest('.card').id));
                      });
                case 4:
                case 'end':
                  return t.stop();
              }
          }, t);
        })
      )).apply(this, arguments);
    }
    function j(t, n) {
      return t.find(function (t) {
        return t.name.toLowerCase() === n.toLowerCase();
      });
    }
    var B = function (t) {
        new E('modal', t).renderCardModal();
      },
      D = (function () {
        function t() {
          p()(this, t);
          (this.pets = []), (this.currentPage = 0);
        }
        return (
          f()(t, [
            {
              key: 'renderPagination',
              value: function (t) {
                return (
                  (this.fullPetsList = t),
                  (this.pagination = this.createDomNode(
                    this.pagination,
                    'div',
                    'pets__pagination'
                  )),
                  (this.paginationBoxShow = this.renderPaginationBox(
                    this.fullPetsList
                  )),
                  (this.paginationControls = this.renderPaginationControls()),
                  this.appendPaginationElement(),
                  this.pagination
                );
              },
            },
            {
              key: 'appendPaginationElement',
              value: function () {
                this.pagination.append(this.paginationBoxShow),
                  this.pagination.append(this.paginationControls);
              },
            },
            {
              key: 'createDomNode',
              value: function (t, n) {
                var e;
                t = document.createElement(n);
                for (
                  var o = arguments.length,
                    r = new Array(o > 2 ? o - 2 : 0),
                    i = 2;
                  i < o;
                  i++
                )
                  r[i - 2] = arguments[i];
                return (e = t.classList).add.apply(e, r), t;
              },
            },
            {
              key: 'renderPaginationBox',
              value: function (t) {
                (this.paginationBoxShow = this.createDomNode(
                  this.paginationBoxShow,
                  'div',
                  'pets__pagination-box_show'
                )),
                  (this.paginationBox = this.createDomNode(
                    this.paginationBox,
                    'div',
                    'pets__pagination-box'
                  ));
                for (var n = 0; n < t.length; n++)
                  this.paginationBox.append(
                    ((e = t[n].img),
                    (o = t[n].name),
                    (r = 'pets__pagination-box_card'),
                    new T().createCard(e, o, r))
                  );
                var e, o, r;
                return (
                  this.paginationBoxShow.append(this.paginationBox),
                  this.paginationBoxShow
                );
              },
            },
            {
              key: 'renderPaginationControls',
              value: function () {
                var t = this;
                return (
                  (this.paginationControls = this.createDomNode(
                    this.paginationControls,
                    'div',
                    'pets__pagination-controls'
                  )),
                  (this.paginationControlsLongPrev = this.createDomNode(
                    this.paginationControlsLongPrev,
                    'div',
                    'pets__pagination-controls_long-prev'
                  )),
                  (this.paginationControlsLongPrev.innerHTML =
                    '<button class="button_paginator inactive">&lt;&lt;</button>'),
                  this.paginationControls.append(
                    this.paginationControlsLongPrev
                  ),
                  (this.paginationControlsPrev = this.createDomNode(
                    this.paginationControlsPrev,
                    'div',
                    'pets__pagination-controls_prev'
                  )),
                  (this.paginationControlsPrev.innerHTML =
                    '<button class="button_paginator inactive">&lt;</button>'),
                  this.paginationControls.append(this.paginationControlsPrev),
                  (this.paginationControlsNumber = this.createDomNode(
                    this.paginationControlsNumber,
                    'div',
                    'pets__pagination-controls_number'
                  )),
                  (this.paginationControlsNumber.innerHTML =
                    '<button class="button_paginator active-pagination">1</button>'),
                  this.paginationControls.append(this.paginationControlsNumber),
                  (this.paginationControlsNext = this.createDomNode(
                    this.paginationControlsNext,
                    'div',
                    'pets__pagination-controls_next'
                  )),
                  (this.paginationControlsNext.innerHTML =
                    '<button class="button_paginator">></button>'),
                  this.paginationControls.append(this.paginationControlsNext),
                  (this.paginationControlsLongNext = this.createDomNode(
                    this.paginationControlsLongNext,
                    'div',
                    'pets__pagination-controls_long-next'
                  )),
                  (this.paginationControlsLongNext.innerHTML =
                    '<button class="button_paginator">>></button>'),
                  this.paginationControls.append(
                    this.paginationControlsLongNext
                  ),
                  this.paginationControls.addEventListener('click', function (
                    n
                  ) {
                    return t.handlerClickLongPrev(n);
                  }),
                  this.paginationControls.addEventListener('click', function (
                    n
                  ) {
                    return t.handlerClickPrev(n);
                  }),
                  this.paginationControls.addEventListener('click', function (
                    n
                  ) {
                    return t.handlerClickNext(n);
                  }),
                  this.paginationControls.addEventListener('click', function (
                    n
                  ) {
                    return t.handlerClickLongNext(n);
                  }),
                  this.paginationControls
                );
              },
            },
            {
              key: 'handlerClickLongPrev',
              value: function (t) {
                t.target.closest('.pets__pagination-controls_long-prev') &&
                  this.changePaginationBox('long-prev');
              },
            },
            {
              key: 'handlerClickPrev',
              value: function (t) {
                t.target.closest('.pets__pagination-controls_prev') &&
                  this.changePaginationBox('prev');
              },
            },
            {
              key: 'handlerClickNext',
              value: function (t) {
                t.target.closest('.pets__pagination-controls_next') &&
                  this.changePaginationBox('next');
              },
            },
            {
              key: 'handlerClickLongNext',
              value: function (t) {
                t.target.closest('.pets__pagination-controls_long-next') &&
                  this.changePaginationBox('long-next');
              },
            },
            {
              key: 'changePaginationBox',
              value: function (t) {
                window.innerWidth >= 1280
                  ? ((this.heightSlide = 930),
                    (this.currentPage = this.changeCurrentPage(
                      t,
                      this.heightSlide,
                      this.currentPage
                    )),
                    this.doMove(this.heightSlide, this.currentPage))
                  : ((window.innerWidth >= 768 && window.innerWidth < 1280) ||
                      (window.innerWidth >= 300 && window.innerWidth < 768)) &&
                    ((this.heightSlide = 1395),
                    (this.currentPage = this.changeCurrentPage(
                      t,
                      this.heightSlide,
                      this.currentPage
                    )),
                    this.doMove(this.heightSlide, this.currentPage));
              },
            },
            {
              key: 'changeCurrentPage',
              value: function (t, n, e) {
                var o = this.paginationBox.offsetHeight / n - 1;
                return (
                  'next' === t
                    ? e < this.paginationBox.offsetHeight / n - 1 && e++
                    : 'long-next' === t
                    ? e < o && (e = o)
                    : 'prev' === t && e > 0 && e--,
                  'long-prev' === t && e > 0 && (e = 0),
                  0 === e
                    ? ((this.paginationControlsPrev.innerHTML =
                        '<button class="button_paginator inactive">&lt;</button>'),
                      (this.paginationControlsLongPrev.innerHTML =
                        '<button class="button_paginator inactive">&lt;&lt;</button>'),
                      (this.paginationControlsNext.innerHTML =
                        '<button class="button_paginator">></button>'),
                      (this.paginationControlsLongNext.innerHTML =
                        '<button class="button_paginator">>></button>'))
                    : e === o
                    ? ((this.paginationControlsPrev.innerHTML =
                        '<button class="button_paginator">&lt;</button>'),
                      (this.paginationControlsLongPrev.innerHTML =
                        '<button class="button_paginator">&lt;&lt;</button>'),
                      (this.paginationControlsNext.innerHTML =
                        '<button class="button_paginator inactive">></button>'),
                      (this.paginationControlsLongNext.innerHTML =
                        '<button class="button_paginator inactive">>></button>'))
                    : ((this.paginationControlsPrev.innerHTML =
                        '<button class="button_paginator">&lt;</button>'),
                      (this.paginationControlsLongPrev.innerHTML =
                        '<button class="button_paginator">&lt;&lt;</button>'),
                      (this.paginationControlsNext.innerHTML =
                        '<button class="button_paginator">></button>'),
                      (this.paginationControlsLongNext.innerHTML =
                        '<button class="button_paginator">>></button>')),
                  e
                );
              },
            },
            {
              key: 'doMove',
              value: function (t, n) {
                (this.paginationBox.style.top = '-'.concat(t * n, 'px')),
                  (this.paginationControlsNumber.querySelector(
                    '.active-pagination'
                  ).innerText = (n + 1).toString());
              },
            },
          ]),
          t
        );
      })();
    function H() {
      return (H = l()(
        c.a.mark(function t() {
          var n;
          return c.a.wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (t.next = 2), g();
                case 2:
                  (n = t.sent),
                    6,
                    document.querySelector('.pets__pagination').remove(),
                    document.querySelector('.pets__wrapper').append(A(n, 6));
                case 6:
                case 'end':
                  return t.stop();
              }
          }, t);
        })
      )).apply(this, arguments);
    }
    var A = function (t, n) {
      var e = (function (t, n) {
        for (var e = [], o = 0; o < n; o++) {
          var r = t;
          e = [].concat(y()(e), y()(r));
          for (var i = r.length; i > 0; i--) {
            var a = Math.floor(Math.random() * i),
              s = r.splice(a, 1)[0];
            r.push(s);
          }
        }
        return console.log(e), b(e);
      })(t, n);
      return new D().renderPagination(e);
    };
    window.onload = function () {
      document
        .querySelector('.header__menu')
        .addEventListener('click', function (t) {
          i(),
            r(t) && o(),
            a(t) &&
              (o(),
              document
                .querySelector('.pets')
                .scrollIntoView({ block: 'start', behavior: 'smooth' }));
        }),
        (function () {
          H.apply(this, arguments);
        })(),
        (function () {
          O.apply(this, arguments);
        })();
    };
  },
]);
