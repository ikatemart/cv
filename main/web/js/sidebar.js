!(function () {
  function n(t, e) {
    for (var i = 0; i < e.length; i++) {
      var n = e[i]
      Object.defineProperty(t, n.key, n)
    }
  }

  function c(t, e, i) {
    return e && n(t.prototype, e), i && n(t, i), t
  }

  function u(t, e, i) {
    return (
      e in t
        ? Object.defineProperty(t, e, {
            value: i,
          })
        : (t[e] = i),
      t
    )
  }
  function d(t, e) {
    ;(t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
      },
    })),
      e && i(t, e)
  }

  var f = Object.getPrototypeOf
  var i = Object.setPrototypeOf
  var t = 'katik'
  var m = document
  var v = window
  var k = document.body

  function p(t, e) {
    return !e || ('object' != typeof e && 'function' != typeof e) ? t : e
  }


  function C(t, e) {
    return (
      t(
        (e = {
          exports: {},
        }),
        e.exports,
      ),
      e.exports
    )
  }
  C(function (t) {
    var e, i
    ;(e = k),
      (i = function () {}),
      t.exports ? (t.exports = i()) : (e.svg4everybody = i())
  })
  function L(t) {
    var e = t.attributes,
      i = /^data\-(.+)$/,
      n = {}
    for (var s in e)
      if (e[s]) {
        var o = e[s].name
        if (o) {
          var a = o.match(i)
          a && (n[a[1]] = I(t.getAttribute(o)))
        }
      }
    return n
  }
  var O = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
  function I(t) {
    return (
      'true' === t ||
      ('false' !== t &&
        ('null' === t
          ? null
          : t === +t + ''
          ? +t
          : O.test(t)
          ? JSON.parse(t)
          : t))
    )
  }
  var P = (function () {})()
  function H() {
    for (var r = 1, l = 1, h = [], t = 0; t < 256; ++t) h.push(Math.random())
    var c = function (t, e, i) {
      return t * (1 - i) + e * i
    }
    return {
      getVal: function (t) {
        var e = t * l,
          i = Math.floor(e),
          n = e - i,
          s = n * n * (3 - 2 * n),
          o = 255 & i,
          a = (o + 1) & 255
        return c(h[o], h[a], s) * r
      },
      setAmplitude: function (t) {
        r = t
      },
      setScale: function (t) {
        l = t
      },
    }
  }

  var A = 0
  var j = (function () {
    function e(t) {
      (this.$el = t.$el || null), (this.el = t.el || null)
    }
    return (
      e
    )
  })()

  var D = ''.concat(t, '.').concat('PlayShapes')
  var N = 'default',
    _ = 'play'

  const PlayShapes = (function (t) {
    function i(t) {
      var e
      return (
        ((e = p(this, f(i).call(this, t))).colorScheme = N),
        (e.updatingScheme = !1),
        e
      )
    }
    return (
      d(i, j),
      c(i, [
        {
          key: 'init',
          value: function () {
            var t,
              e,
              i,
              n,
              s,
              o,
              a,
              r,
              l,
              h = this
            ;(this.width = window.innerWidth),
              (this.height = window.innerHeight),
              (this.canvas = this.el),
              (this.canvas.width = this.width),
              (this.canvas.height = this.height),
              (this.offscreenCanvas = document.createElement('canvas')),
              (this.offscreenCanvas.width = this.canvas.width),
              (this.offscreenCanvas.height = this.canvas.height),
              (this.shapes = []),
              (this.backgroundColorSchemes =
                (u((t = {}), N, {
                  r: 131,
                  g: 149,
                  b: 164,
                }),
                u(t, _, {
                  r: 58,
                  g: 91,
                  b: 159,
                }),
                t)),
              (this.backgroundColor = JSON.parse(
                JSON.stringify(this.backgroundColorSchemes[this.colorScheme]),
              ))
            var c = [
              ((e = {}),
              u(e, N, {
                r: 113,
                g: 131,
                b: 146,
              }),
              u(e, _, {
                r: 53,
                g: 83,
                b: 141,
              }),
              e),
              ((i = {}),
              u(i, N, {
                r: 147,
                g: 170,
                b: 189,
              }),
              u(i, _, {
                r: 62,
                g: 101,
                b: 178,
              }),
              i),
              ((n = {}),
              u(n, N, {
                r: 59,
                g: 75,
                b: 91,
              }),
              u(n, _, {
                r: 41,
                g: 57,
                b: 89,
              }),
              n),
              ((s = {}),
              u(s, N, {
                r: 109,
                g: 116,
                b: 134,
              }),
              u(s, _, {
                r: 51,
                g: 77,
                b: 130,
              }),
              s),
              ((o = {}),
              u(o, N, {
                r: 44,
                g: 46,
                b: 62,
              }),
              u(o, _, {
                r: 36,
                g: 47,
                b: 69,
              }),
              o),
              ((a = {}),
              u(a, N, {
                r: 61,
                g: 65,
                b: 94,
              }),
              u(a, _, {
                r: 40,
                g: 55,
                b: 85,
              }),
              a),
              ((r = {}),
              u(r, N, {
                r: 42,
                g: 41,
                b: 56,
              }),
              u(r, _, {
                r: 36,
                g: 46,
                b: 66,
              }),
              r),
              ((l = {}),
              u(l, N, {
                r: 62,
                g: 61,
                b: 81,
              }),
              u(l, _, {
                r: 39,
                g: 54,
                b: 82,
              }),
              l),
            ]
            this.initShape(100, 100, 100, c[0], c[1], 10),
              this.initShape(
                this.height / 3,
                this.height / 3,
                this.height / 3,
                c[2],
                c[3],
                10,
              ),
              this.initShape(
                this.height - this.height / 2.5,
                this.height - this.height / 2.5,
                this.height - this.height / 3,
                c[4],
                c[5],
                10,
              ),
              this.initShape(
                this.height - this.height / 6,
                this.height - this.height / 6,
                this.height - this.height / 6,
                c[6],
                c[7],
                1,
              ),
              (this.ctx = this.canvas.getContext('2d')),
              (this.offscreenCtx = this.offscreenCanvas.getContext('2d')),
              (this.amplitude = {
                value: this.height / 3,
              }),
              (this.scale = {
                value: 1,
              }),
              (this.position = {
                x: 0,
                y: 0,
              }),
              (this.mousePosition = {
                x: 0,
                y: 0,
              }),
              v.addEventListener('mousemove', function (t) {
                ;(h.mousePosition.x =
                  (300 * (t.clientX - window.innerWidth / 2)) /
                  window.innerWidth),
                  (h.mousePosition.y =
                    (100 * (t.clientY - window.innerHeight / 2)) /
                    window.innerHeight)
              }),
              this.render()
          },
        },
        {
          key: 'updateScheme',
          value: function (t) {},
        },
        {
          key: 'render',
          value: function () {
            var t = this
            if (
              (this.raf = requestAnimationFrame(function () {
                return t.render()
              }))
            ) {
              ;(this.offscreenCtx.fillStyle = 'rgb('
                .concat(this.backgroundColor.r, ', ')
                .concat(this.backgroundColor.g, ', ')
                .concat(this.backgroundColor.b, ')')),
                this.offscreenCtx.fillRect(0, 0, this.width, this.height),
                (this.position.x = this.lerp(
                  this.position.x,
                  this.mousePosition.x,
                  0.2,
                )),
                (this.position.y = this.lerp(
                  this.position.y,
                  this.mousePosition.y,
                  0.2,
                ))
              for (var e = 0; e < this.shapes.length; e++)
                (this.shapes[e].iterator =
                  this.shapes[e].iterator + this.scale.value),
                  this.drawShape(
                    this.shapes[e].fromX,
                    this.shapes[e].noiseFrom.getVal(this.shapes[e].iterator) *
                      this.amplitude.value -
                      this.amplitude.value / 2 +
                      this.shapes[e].fromY,
                    this.shapes[e].pX + this.position.x,
                    this.shapes[e].noiseP.getVal(
                      this.shapes[e].iterator + 150,
                    ) *
                      this.amplitude.value -
                      this.amplitude.value / 2 +
                      this.shapes[e].pY +
                      this.position.y,
                    this.shapes[e].toX,
                    this.shapes[e].noiseTo.getVal(
                      this.shapes[e].iterator + 500,
                    ) *
                      this.amplitude.value -
                      this.amplitude.value / 2 +
                      this.shapes[e].toY,
                    this.shapes[e].fromColor,
                    this.shapes[e].toColor,
                  )
              this.ctx.drawImage(this.offscreenCanvas, 0, 0)
            }
          },
        },
        {
          key: 'lerp',
          value: function (t, e, i) {
            return (1 - i) * t + i * e
          },
        },
        {
          key: 'initShape',
          value: function (t, e, i, n, s, o) {
            var a = new H(),
              r = new H(),
              l = new H()
            a.setScale(0.005), r.setScale(0.005), l.setScale(0.005)
            var h = {
              fromX: 0,
              fromY: t,
              pX: this.width / 2,
              pY: e,
              toX: this.width,
              toY: i,
              fromColorSchemes: n,
              toColorSchemes: s,
              fromColor: JSON.parse(JSON.stringify(n[this.colorScheme])),
              toColor: JSON.parse(JSON.stringify(s[this.colorScheme])),
              iterator: o,
              noiseFrom: a,
              noiseP: r,
              noiseTo: l,
            }
            this.shapes.push(h)
          },
        },
        {
          key: 'drawShape',
          value: function (t, e, i, n, s, o, a, r) {
            this.offscreenCtx.beginPath(),
              (this.offscreenCtx.fillStyle = 'rgb('
                .concat(Math.round(a.r), ', ')
                .concat(Math.round(a.g), ', ')
                .concat(Math.round(a.b), ')')),
              this.offscreenCtx.moveTo(t, e),
              this.offscreenCtx.quadraticCurveTo(i, n, s, o),
              this.offscreenCtx.lineTo(this.width, this.height),
              this.offscreenCtx.lineTo(0, this.height),
              this.offscreenCtx.lineTo(t, e),
              this.offscreenCtx.fill(),
              this.offscreenCtx.closePath()
          },
        },
      ]),
      i
    )
  })()

  var vo = Object.freeze({ PlayShapes })

  var yo = (function () {
    function t() {
      this.modules = vo
      this.initModules(t)
    }
    return (
      c(t, [
        {
          key: 'initModules',
          value: function (t) {
            var s = m.querySelector('[data-module="PlayShapes"]')
            var o = L(s)
            o.el = s
            o.$el = s
            for (
              var a = o.module.split(/[,\s]+/g), r = 0, l = a.length;
              r < l;
              r++
            ) {
              var h = a[r]
              var c = new this.modules[h](o)
              c.init()
            }
          },
        },
      ]),
      t
    )
  })()

  setTimeout(function () {
    new yo()
  })
})()
