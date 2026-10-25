/* loose-type.js: the hand-lettered, spring-driven type from the Sit Still films, running live.
   Letters are strokes from the same alphabet as loose.js. Every letter rides its own damped
   spring, so a change overshoots and settles. Entrances drop in one letter behind the other,
   a held word keeps drifting and re-poses every 0.4–0.75 s, a fast letter stretches along its
   velocity, and quiet frames hold on twos. Letters shy away from the cursor.

   Usage: LooseType.mount(el, [["PICK YOUR ", "#F3EEE8"], ["POISON.", "#D05A60"]], { max:150, lines:2 })
   The element keeps its real text for screen readers; the canvas is decoration. */
(function () {
  "use strict";
  var TAU = Math.PI * 2;
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function lerp(a, b, u) { return a + (b - a) * u; }

  /* ---------- alphabet (cap height 100, baseline at 100), from loose.js ---------- */
  function catmull(P) {
    var n = P.length, out = [];
    function at(i) { return P[clamp(i, 0, n - 1)]; }
    for (var i = 0; i < n - 1; i++) {
      var p0 = at(i - 1), p1 = at(i), p2 = at(i + 1), p3 = at(i + 2);
      for (var k = 0; k < 8; k++) {
        var t = k / 8, t2 = t * t, t3 = t2 * t, q = [];
        for (var d = 0; d < 2; d++) q.push(.5 * (2 * p1[d] + (-p0[d] + p2[d]) * t + (2 * p0[d] - 5 * p1[d] + 4 * p2[d] - p3[d]) * t2 + (-p0[d] + 3 * p1[d] - 3 * p2[d] + p3[d]) * t3));
        out.push(q);
      }
    }
    out.push(P[n - 1].slice());
    return out;
  }
  function chaikin(P, it) {
    var Q = P;
    for (var k = 0; k < it; k++) {
      var R = [Q[0]];
      for (var i = 0; i < Q.length - 1; i++) {
        var a = Q[i], b = Q[i + 1];
        R.push([.75 * a[0] + .25 * b[0], .75 * a[1] + .25 * b[1]], [.25 * a[0] + .75 * b[0], .25 * a[1] + .75 * b[1]]);
      }
      R.push(Q[Q.length - 1]); Q = R;
    }
    return Q;
  }
  function plen(P) { var L = 0; for (var i = 1; i < P.length; i++) L += Math.hypot(P[i][0] - P[i - 1][0], P[i][1] - P[i - 1][1]); return L; }
  function resample(P, m) {
    if (P.length === 1) { var one = []; for (var z = 0; z < m; z++) one.push(P[0].slice()); return one; }
    var d = [0];
    for (var i = 1; i < P.length; i++) d.push(d[i - 1] + Math.hypot(P[i][0] - P[i - 1][0], P[i][1] - P[i - 1][1]));
    var L = d[d.length - 1] || 1, out = [], j = 0;
    for (var k = 0; k < m; k++) {
      var s = k / (m - 1) * L;
      while (j < P.length - 2 && d[j + 1] < s) j++;
      var u = clamp((s - d[j]) / ((d[j + 1] - d[j]) || 1), 0, 1);
      out.push([lerp(P[j][0], P[j + 1][0], u), lerp(P[j][1], P[j + 1][1], u)]);
    }
    return out;
  }
  function oval(cx, cy, rx, ry) {   // starts top-right and overlaps itself a little, like a quick hand oval
    var P = [];
    for (var k = 0; k <= 40; k++) { var a = -1.75 + k / 40 * (TAU + .32), r = 1 + .03 * Math.sin(k / 40 * 3.1); P.push([cx + Math.cos(a) * rx * r, cy + Math.sin(a) * ry * r]); }
    return P;
  }
  var GLYPHS = {};
  function glyph(ch, w, src) {
    var g = { w: w, strokes: [] };
    src.split("|").forEach(function (raw) {
      var s = raw.trim(), kind = s[0];
      var nums = s.slice(1).trim().split(/\s+/).map(function (p) { return p.split(",").map(Number); });
      var pts = kind === "E" ? oval(nums[0][0], nums[0][1], nums[1][0], nums[1][1]) : kind === "C" ? catmull(nums) : chaikin(nums, 3);
      g.strokes.push(resample(pts, clamp(Math.round(plen(pts) / 4), 8, 56)));
    });
    GLYPHS[ch] = g;
  }
  glyph('A', 54, 'L 0,100 26,0 54,100 | L 11,64 44,62');
  glyph('B', 46, 'L 4,100 4,0 | C 4,1 26,0 40,12 39,32 26,46 5,48 | C 5,48 32,50 46,66 44,88 28,100 4,99');
  glyph('C', 48, 'C 46,14 34,2 19,3 6,20 2,50 6,80 19,97 34,98 47,86');
  glyph('D', 48, 'L 4,0 4,100 | C 4,1 26,5 42,24 46,50 42,76 26,95 4,99');
  glyph('E', 42, 'L 41,1 4,0 4,100 41,99 | L 4,49 32,50');
  glyph('F', 40, 'L 40,1 4,0 4,100 | L 4,47 31,48');
  glyph('G', 52, 'C 48,14 36,2 20,3 6,20 2,50 6,80 20,97 36,98 48,84 49,58 | L 29,58 51,57');
  glyph('H', 48, 'L 4,0 4,100 | L 44,0 44,100 | L 4,51 44,49');
  glyph('I', 14, 'L 7,0 7,100');
  glyph('J', 40, 'C 36,0 36,72 30,94 18,100 6,92 2,78');
  glyph('K', 48, 'L 4,0 4,100 | L 44,0 6,58 | L 19,42 47,100');
  glyph('L', 38, 'L 4,0 4,100 38,99');
  glyph('M', 62, 'L 2,100 6,0 31,64 56,0 60,100');
  glyph('N', 50, 'L 4,100 4,0 46,100 46,0');
  glyph('O', 52, 'E 26,50 25,49');
  glyph('P', 44, 'L 4,100 4,0 | C 4,1 28,2 42,15 40,35 27,49 5,51');
  glyph('Q', 52, 'E 26,50 25,49 | L 30,74 54,104');
  glyph('R', 46, 'L 4,100 4,0 | C 4,1 28,2 42,15 40,35 27,49 5,51 | L 22,51 46,100');
  glyph('S', 44, 'C 42,14 31,2 15,3 4,15 6,33 23,48 39,62 43,82 33,97 15,98 2,86');
  glyph('T', 50, 'L 0,2 50,0 | L 25,1 25,100');
  glyph('U', 48, 'C 4,0 4,70 10,90 24,100 38,90 44,70 44,0');
  glyph('V', 52, 'L 0,0 26,100 52,0');
  glyph('W', 70, 'L 0,0 15,100 35,28 55,100 70,0');
  glyph('X', 48, 'L 2,0 46,100 | L 46,0 2,100');
  glyph('Y', 48, 'L 0,0 24,50 48,0 | L 24,50 24,100');
  glyph('Z', 46, 'L 2,1 44,0 2,100 46,99');
  glyph('?', 40, 'C 4,22 12,4 26,1 38,12 36,30 20,46 20,70 | L 20,92 20,99');
  glyph('!', 14, 'L 7,0 7,72 | L 7,92 7,99');
  glyph('.', 12, 'L 6,94 6,99');
  glyph(',', 12, 'L 7,90 3,108');
  glyph("'", 10, 'L 5,0 4,22');

  var TRACK = 11, SPACE = 36, LEAD = 1.2;
  /* f 2.6 Hz, damping ratio .42: the Sit Still spring. Overshoots, then settles. */
  var W0 = TAU * 2.6, K = W0 * W0, C = 2 * .42 * W0;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var items = [];
  var pointer = { x: -1e4, y: -1e4, moved: 0 };
  var running = false, frame = 0, last = 0, paused = false;

  function rand(seed) { var x = Math.sin(seed * 12.9898) * 43758.5453; return x - Math.floor(x); }

  function Loose(el, segments, opts) {
    this.el = el;
    this.opts = opts || {};
    this.words = [];
    var self = this;
    segments.forEach(function (seg) {
      seg[0].split(/(\s+)/).forEach(function (w) {
        if (!w) return;
        if (/^\s+$/.test(w)) { if (self.words.length) self.words[self.words.length - 1].space = true; return; }
        self.words.push({ text: w.toUpperCase(), color: seg[1], space: false });
      });
    });
    this.canvas = document.createElement("canvas");
    this.canvas.className = "loose-canvas";
    this.canvas.setAttribute("aria-hidden", "true");
    el.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");
    this.visible = false;
    this.started = false;
    this.layout();
  }

  Loose.prototype.wordUnits = function (word) {
    var u = 0;
    for (var i = 0; i < word.text.length; i++) { var g = GLYPHS[word.text[i]]; u += (g ? g.w : 30) + TRACK; }
    return u - TRACK;
  };

  /* Pick the line count (up to opts.lines) that lets the letters be biggest. */
  Loose.prototype.layout = function () {
    var self = this, width = this.el.clientWidth || 300;
    var max = typeof this.opts.max === "function" ? this.opts.max() : (this.opts.max || 160), maxLines = this.opts.lines || 2;
    var units = this.words.map(function (w) { return self.wordUnits(w); });
    var best = null;
    for (var n = 1; n <= Math.min(maxLines, this.words.length); n++) {
      var total = units.reduce(function (a, b) { return a + b; }, 0) + SPACE * (units.length - 1);
      var target = total / n, lines = [[]], acc = 0;
      for (var i = 0; i < units.length; i++) {
        var add = (lines[lines.length - 1].length ? SPACE : 0) + units[i];
        if (lines[lines.length - 1].length && acc + add / 2 > target && lines.length < n) { lines.push([]); acc = 0; add = units[i]; }
        lines[lines.length - 1].push(i); acc += add;
      }
      var widest = Math.max.apply(null, lines.map(function (line) {
        return line.reduce(function (a, i, k) { return a + units[i] + (k ? SPACE : 0); }, 0);
      }));
      var size = Math.min(max, width / widest * 100);
      // Another line has to buy clearly bigger letters, or one line reads better.
      if (!best || size > best.size * 1.3) best = { size: size, lines: lines };
    }
    var size = best.size, s = size / 100, lineH = size * LEAD, bleed = Math.round(size * .7);
    var height = Math.ceil(best.lines.length * lineH - (lineH - size) + size * .12);
    this.el.style.height = height + "px";
    this.size = size;
    this.bleed = bleed;
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.dpr = dpr;
    this.canvas.width = Math.round((width + bleed * 2) * dpr);
    this.canvas.height = Math.round((height + bleed * 2) * dpr);
    this.canvas.style.cssText = "position:absolute;pointer-events:none;left:" + -bleed + "px;top:" + -bleed + "px;width:" + (width + bleed * 2) + "px;height:" + (height + bleed * 2) + "px";

    var old = this.letters || [], letters = [], index = 0;
    best.lines.forEach(function (line, row) {
      var lineUnits = line.reduce(function (a, i, k) { return a + units[i] + (k ? SPACE : 0); }, 0);
      var x = self.opts.align === "center" ? (width - lineUnits * s) / 2 : 0;
      line.forEach(function (wi, k) {
        if (k) x += SPACE * s;
        var word = self.words[wi];
        for (var c = 0; c < word.text.length; c++) {
          var g = GLYPHS[word.text[c]];
          if (g) {
            var prev = old[index];
            letters.push({
              g: g, color: word.color, i: index, w: g.w * s,
              hx: bleed + x, hy: bleed + row * lineH,
              x: prev ? prev.x : 0, y: prev ? prev.y : 0, r: prev ? prev.r : 0,
              vx: 0, vy: 0, vr: 0, tx: 0, ty: 0, tr: 0, px: 0, py: 0,
              start: prev ? prev.start : 0, shown: prev ? prev.shown : false, next: 0
            });
            index++;
          }
          x += ((g ? g.w : 30) + TRACK) * s;
        }
        x -= TRACK * s;
      });
    });
    this.letters = letters;
    if (reduce) this.draw(0, true);
  };

  Loose.prototype.begin = function (now) {
    if (this.started) return;
    this.started = true;
    var size = this.size;
    this.letters.forEach(function (L, n) {
      L.start = now + n * .034 + (reduce ? 0 : .05);
      L.x = (rand(n * 3.1 + 1) - .5) * size * .35;
      L.y = -size * (.75 + rand(n * 7.7 + 2) * .5);
      L.r = (rand(n * 1.9 + 3) - .5) * .7;
      L.shown = reduce;
      L.next = L.start + .6 + rand(n) * .4;
    });
    if (reduce) { this.letters.forEach(function (L) { L.x = L.y = L.r = 0; L.shown = true; }); this.draw(0, true); }
  };

  /* Springs toward each letter's target (re-pose + cursor push). Returns true while anything is moving fast. */
  Loose.prototype.step = function (now, dt) {
    var size = this.size, rect = this.canvas.getBoundingClientRect(), active = false;
    var px = pointer.x - rect.left, py = pointer.y - rect.top, R = size * 1.25;
    for (var n = 0; n < this.letters.length; n++) {
      var L = this.letters[n];
      if (now < L.start) { active = true; continue; }
      if (!L.shown) { L.shown = true; active = true; }
      if (now > L.next) {
        L.tx = (rand(now * 13 + n) - .5) * size * .05;
        L.ty = (rand(now * 7 + n * 3) - .5) * size * .05;
        L.tr = (rand(now * 5 + n * 9) - .5) * .08;
        L.next = now + .4 + rand(now + n * 17) * .35;
      }
      var cx = L.hx + L.w / 2 + L.x, cy = L.hy + size / 2 + L.y;
      var dx = cx - px, dy = cy - py, d = Math.hypot(dx, dy), push = 0;
      if (d < R && d > .001) push = (1 - d / R) * size * .3;
      var gx = L.tx + (push ? dx / d * push : 0), gy = L.ty + (push ? dy / d * push : 0), gr = L.tr + (push ? dx / d * .12 * (1 - d / R) : 0);
      L.vx += (K * (gx - L.x) - C * L.vx) * dt; L.x += L.vx * dt;
      L.vy += (K * (gy - L.y) - C * L.vy) * dt; L.y += L.vy * dt;
      L.vr += (K * (gr - L.r) - C * L.vr) * dt; L.r += L.vr * dt;
      if (Math.abs(L.vx) + Math.abs(L.vy) > size * .9 || push) active = true;
    }
    return active;
  };

  Loose.prototype.draw = function (seed, still) {
    var ctx = this.ctx, s = this.size / 100, size = this.size, dpr = this.dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    for (var n = 0; n < this.letters.length; n++) {
      var L = this.letters[n];
      if (!L.shown && !still) continue;
      var x = still ? 0 : L.x, y = still ? 0 : L.y, r = still ? 0 : L.r;
      var speed = still ? 0 : Math.hypot(L.vx, L.vy);
      ctx.save();
      ctx.translate(L.hx + L.w / 2 + x, L.hy + size / 2 + y);
      ctx.rotate(r);
      if (speed > size * 2) {   // velocity stretch: a fast letter smears along its path
        var ang = Math.atan2(L.vy, L.vx), k = 1 + Math.min(speed / (size * 26), .5);
        ctx.rotate(ang); ctx.scale(k, 1 / Math.sqrt(k)); ctx.rotate(-ang);
      }
      ctx.translate(-L.w / 2, -size / 2);
      ctx.scale(s, s);
      ctx.strokeStyle = L.color;
      for (var pass = 0; pass < 2; pass++) {   // a pencil line: a body stroke plus a thin, offset graphite pass
        ctx.globalAlpha = pass ? .38 : .94;
        ctx.lineWidth = pass ? 2.4 : 5.2;
        for (var k2 = 0; k2 < L.g.strokes.length; k2++) {
          var P = L.g.strokes[k2];
          ctx.beginPath();
          for (var p = 0; p < P.length; p++) {
            var j = still ? 0 : .95, a = seed * 31 + n * 97 + k2 * 13 + p + pass * 7;
            var qx = P[p][0] + (rand(a) - .5) * j * 2 + (pass ? 1.4 : 0), qy = P[p][1] + (rand(a + .5) - .5) * j * 2 + (pass ? -.9 : 0);
            if (p) ctx.lineTo(qx, qy); else ctx.moveTo(qx, qy);
          }
          ctx.stroke();
        }
      }
      ctx.restore();
    }
    ctx.globalAlpha = 1;
  };

  function loop(ts) {
    var now = ts / 1000, dt = clamp(now - (last || now), 0, 1 / 30);
    last = now;
    frame++;
    var any = false;
    for (var i = 0; i < items.length; i++) {
      var it = items[i];
      if (!it.visible || paused) continue;
      any = true;
      if (!it.started) it.begin(now);
      var active = it.step(now, dt);
      // Moving letters draw on ones; a held line boils on twos, like the films.
      if (active || frame % 2 === 0) it.draw(Math.floor(now * 12), false);
    }
    if (any) window.requestAnimationFrame(loop);
    else { running = false; last = 0; }
  }
  function wake() { if (running || reduce) return; running = true; window.requestAnimationFrame(loop); }

  window.addEventListener("pointermove", function (e) { pointer.x = e.clientX; pointer.y = e.clientY; }, { passive: true });
  document.addEventListener("pointerleave", function () { pointer.x = pointer.y = -1e4; });

  var observer = "IntersectionObserver" in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var it = items.filter(function (x) { return x.el === entry.target; })[0];
      if (!it) return;
      it.visible = entry.isIntersecting;
      if (it.visible) { if (reduce) it.begin(0); wake(); }
    });
  }, { threshold: .15 }) : null;

  var resizeTimer = 0;
  window.addEventListener("resize", function () {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(function () { items.forEach(function (it) { it.layout(); }); }, 120);
  });

  window.LooseType = {
    // While something covers the headings (the film reel), stop drawing them.
    pause: function (on) { paused = !!on; if (!paused) wake(); },
    mount: function (el, segments, opts) {
      var it = new Loose(el, segments, opts);
      items.push(it);
      if (observer) observer.observe(el); else { it.visible = true; wake(); }
      return it;
    }
  };
})();
