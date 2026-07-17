"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => TownForgePlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian2 = require("obsidian");

// src/rng.ts
function hash32(s) {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return h >>> 0;
}
function makeRng(seed) {
  let a = seed >>> 0;
  return function() {
    a = a + 1831565813 >>> 0;
    let t = a;
    t = Math.imul(t ^ t >>> 15, 1 | t) >>> 0;
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    t = t >>> 0;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
var Noise2D = class {
  constructor(rng) {
    const N = 256;
    const p = [];
    for (let i = 0; i < N; i++)
      p.push(i);
    for (let i = N - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      const tmp = p[i];
      p[i] = p[j];
      p[j] = tmp;
    }
    this.perm = p.concat(p);
    this.grad = [];
    for (let i = 0; i < N; i++)
      this.grad.push(rng() * 2 - 1);
  }
  _v(ix, iy) {
    return this.grad[this.perm[ix + this.perm[iy & 255] & 255]];
  }
  sample(x, y) {
    const ix = Math.floor(x);
    const iy = Math.floor(y);
    const fx = x - ix;
    const fy = y - iy;
    const u = fx * fx * (3 - 2 * fx);
    const v = fy * fy * (3 - 2 * fy);
    const a = this._v(ix, iy);
    const b = this._v(ix + 1, iy);
    const c = this._v(ix, iy + 1);
    const d = this._v(ix + 1, iy + 1);
    return a * (1 - u) * (1 - v) + b * u * (1 - v) + c * (1 - u) * v + d * u * v;
  }
  fbm(x, y, octaves, persistence) {
    let amp = 1;
    let freq = 1;
    let total = 0;
    let norm = 0;
    for (let i = 0; i < octaves; i++) {
      total += amp * this.sample(x * freq, y * freq);
      norm += amp;
      amp *= persistence;
      freq *= 2;
    }
    return total / norm;
  }
};

// src/geometry.ts
function smoothPolyline(pts, iters = 2) {
  let out = pts;
  for (let k = 0; k < iters; k++) {
    const nxt = [out[0]];
    for (let i = 0; i < out.length - 1; i++) {
      const a = out[i];
      const b = out[i + 1];
      nxt.push({ x: 0.75 * a.x + 0.25 * b.x, y: 0.75 * a.y + 0.25 * b.y });
      nxt.push({ x: 0.25 * a.x + 0.75 * b.x, y: 0.25 * a.y + 0.75 * b.y });
    }
    nxt.push(out[out.length - 1]);
    out = nxt;
  }
  return out;
}
function smoothClosed(pts, iters = 2) {
  let out = pts;
  for (let k = 0; k < iters; k++) {
    const nxt = [];
    for (let i = 0; i < out.length; i++) {
      const a = out[i];
      const b = out[(i + 1) % out.length];
      nxt.push({ x: 0.75 * a.x + 0.25 * b.x, y: 0.75 * a.y + 0.25 * b.y });
      nxt.push({ x: 0.25 * a.x + 0.75 * b.x, y: 0.25 * a.y + 0.75 * b.y });
    }
    out = nxt;
  }
  return out;
}
function offsetPolyline(pts, dist) {
  const left = [];
  const right = [];
  for (let i = 0; i < pts.length; i++) {
    const p = pts[i];
    const prev = pts[Math.max(0, i - 1)];
    const next = pts[Math.min(pts.length - 1, i + 1)];
    const tx = next.x - prev.x;
    const ty = next.y - prev.y;
    const tl = Math.hypot(tx, ty) || 1;
    const nx = -ty / tl;
    const ny = tx / tl;
    left.push({ x: p.x + nx * dist, y: p.y + ny * dist });
    right.push({ x: p.x - nx * dist, y: p.y - ny * dist });
  }
  return left.concat(right.reverse());
}
function pointInPolygon(pt, poly) {
  const x = pt.x;
  const y = pt.y;
  let inside = false;
  let j = poly.length - 1;
  for (let i = 0; i < poly.length; i++) {
    const xi = poly[i].x;
    const yi = poly[i].y;
    const xj = poly[j].x;
    const yj = poly[j].y;
    if (yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi + 1e-9) + xi) {
      inside = !inside;
    }
    j = i;
  }
  return inside;
}
function pointInPolygonNonzero(pt, poly) {
  const x = pt.x;
  const y = pt.y;
  let wind = 0;
  for (let i = 0; i < poly.length; i++) {
    const a = poly[i];
    const b = poly[(i + 1) % poly.length];
    if (a.y <= y) {
      if (b.y > y && (b.x - a.x) * (y - a.y) - (x - a.x) * (b.y - a.y) > 0)
        wind++;
    } else {
      if (b.y <= y && (b.x - a.x) * (y - a.y) - (x - a.x) * (b.y - a.y) < 0)
        wind--;
    }
  }
  return wind !== 0;
}

// src/mountains.ts
function makeFieldNoise(seed) {
  const perm = new Uint8Array(512);
  const p = new Uint8Array(256);
  for (let i = 0; i < 256; i++)
    p[i] = i;
  let s = seed >>> 0;
  for (let i = 255; i > 0; i--) {
    s = s * 1664525 + 1013904223 >>> 0;
    const j = s % (i + 1);
    const t = p[i];
    p[i] = p[j];
    p[j] = t;
  }
  for (let i = 0; i < 512; i++)
    perm[i] = p[i & 255];
  const fade = (t) => t * t * t * (t * (t * 6 - 15) + 10);
  const lerp = (a, b, t) => a + t * (b - a);
  const grad = (hh, x, y) => (hh & 1 ? x : -x) + (hh & 2 ? y : -y);
  return (x, y) => {
    const X = Math.floor(x) & 255, Y = Math.floor(y) & 255;
    const xf = x - Math.floor(x), yf = y - Math.floor(y);
    const u = fade(xf), v = fade(yf);
    const aa = perm[perm[X] + Y], ab = perm[perm[X] + Y + 1];
    const ba = perm[perm[X + 1] + Y], bb = perm[perm[X + 1] + Y + 1];
    return (lerp(
      lerp(grad(aa, xf, yf), grad(ba, xf - 1, yf), u),
      lerp(grad(ab, xf, yf - 1), grad(bb, xf - 1, yf - 1), u),
      v
    ) + 1) * 0.5;
  };
}
function densifySpine(ctrl, samples = 28) {
  if (ctrl.length < 2)
    return ctrl.slice();
  const out = [];
  for (let i = 0; i < ctrl.length - 1; i++) {
    const p0 = ctrl[i - 1] || ctrl[i], p1 = ctrl[i], p2 = ctrl[i + 1], p3 = ctrl[i + 2] || ctrl[i + 1];
    for (let j = 0; j < samples; j++) {
      const t = j / samples, t2 = t * t, t3 = t2 * t;
      const x = 0.5 * (2 * p1.x + (-p0.x + p2.x) * t + (2 * p0.x - 5 * p1.x + 4 * p2.x - p3.x) * t2 + (-p0.x + 3 * p1.x - 3 * p2.x + p3.x) * t3);
      const y = 0.5 * (2 * p1.y + (-p0.y + p2.y) * t + (2 * p0.y - 5 * p1.y + 4 * p2.y - p3.y) * t2 + (-p0.y + 3 * p1.y - 3 * p2.y + p3.y) * t3);
      const w = p1.w + (p2.w - p1.w) * t, h = p1.h + (p2.h - p1.h) * t;
      out.push({ x, y, w, h });
    }
  }
  out.push({ ...ctrl[ctrl.length - 1] });
  return out;
}
function smax(a, b, k) {
  if (a <= 0)
    return b;
  if (b <= 0)
    return a;
  const hh = Math.max(0, 1 - Math.abs(a - b) / k);
  return Math.max(a, b) + hh * hh * k * 0.25;
}
function buildHeightField(mtn, cell = 4, pad = 44, avoidWater) {
  const noise = makeFieldNoise(mtn.seed);
  let minx = Infinity, miny = Infinity, maxx = -Infinity, maxy = -Infinity;
  for (const sp of mtn.spines)
    for (const pt of sp) {
      const r = pt.w * 1.6;
      minx = Math.min(minx, pt.x - r);
      miny = Math.min(miny, pt.y - r);
      maxx = Math.max(maxx, pt.x + r);
      maxy = Math.max(maxy, pt.y + r);
    }
  minx -= pad;
  miny -= pad;
  maxx += pad;
  maxy += pad;
  const GW = Math.ceil((maxx - minx) / cell) + 1;
  const GH = Math.ceil((maxy - miny) / cell) + 1;
  const H = new Float32Array(GW * GH);
  const crag = mtn.crag, widthVar = mtn.widthVar, k = mtn.k;
  let maxH = 0;
  for (const sp of mtn.spines)
    for (const pt of sp)
      if (pt.h > maxH)
        maxH = pt.h;
  const spineSegs = mtn.spines.map((sp) => {
    const segs = [];
    let cum = 0;
    for (let i = 0; i < sp.length - 1; i++) {
      const a = sp[i], b = sp[i + 1];
      const ex = b.x - a.x, ey = b.y - a.y;
      const s2 = ex * ex + ey * ey || 1;
      const segLen = Math.sqrt(s2);
      segs.push({ ax: a.x, ay: a.y, ex, ey, invS2: 1 / s2, segLen, cum, aw: a.w, dw: b.w - a.w, ah: a.h, dh: b.h - a.h });
      cum += segLen;
    }
    return segs;
  });
  const sample = (x, y) => {
    let acc = 0;
    for (let si = 0; si < spineSegs.length; si++) {
      const segs = spineSegs[si];
      let bestSq = Infinity, bw = 30, bh = 1, along = 0, side = 1;
      for (let i = 0; i < segs.length; i++) {
        const s = segs[i];
        let t = ((x - s.ax) * s.ex + (y - s.ay) * s.ey) * s.invS2;
        if (t < 0)
          t = 0;
        else if (t > 1)
          t = 1;
        const qx = s.ax + s.ex * t, qy = s.ay + s.ey * t;
        const ddx = x - qx, ddy = y - qy;
        const dSq = ddx * ddx + ddy * ddy;
        if (dSq < bestSq) {
          bestSq = dSq;
          bw = s.aw + s.dw * t;
          bh = s.ah + s.dh * t;
          along = s.cum + t * s.segLen;
          side = (x - s.ax) * s.ey - (y - s.ay) * s.ex < 0 ? -1 : 1;
        }
      }
      const best = Math.sqrt(bestSq);
      const wN = noise(along * 0.01 + si * 10, 7.3);
      const wNa = noise(along * 0.02 + si * 4, side > 0 ? 2.1 : 9.7);
      const wEff = bw * (1 - widthVar * 0.5 + widthVar * (0.4 * wN + 0.6 * wNa) * 1.4);
      if (best < wEff * 1.25) {
        const nd = Math.max(0, 1 - best / wEff);
        let height = bh * Math.pow(nd, 0.9);
        const ridge = noise(x * 0.02, y * 0.02) * 0.6 + noise(x * 0.05, y * 0.05) * 0.4;
        height *= 1 - crag * 0.45 + crag * 0.9 * ridge;
        height += (ridge - 0.5) * 0.08 * bh;
        height = Math.max(0, Math.min(bh, height));
        acc = smax(acc, height, k);
      }
    }
    return acc;
  };
  let waterMask = null;
  if (avoidWater && avoidWater.length >= 3) {
    let wbx0 = Infinity, wby0 = Infinity, wbx1 = -Infinity, wby1 = -Infinity;
    for (const p of avoidWater) {
      if (p.x < wbx0)
        wbx0 = p.x;
      if (p.y < wby0)
        wby0 = p.y;
      if (p.x > wbx1)
        wbx1 = p.x;
      if (p.y > wby1)
        wby1 = p.y;
    }
    const fieldX1 = minx + GW * cell, fieldY1 = miny + GH * cell;
    const overlaps = !(wbx1 < minx || wbx0 > fieldX1 || wby1 < miny || wby0 > fieldY1);
    if (overlaps) {
      waterMask = new Uint8Array(GW * GH);
      for (let gy = 0; gy < GH; gy++) {
        const yy = miny + gy * cell;
        for (let gx = 0; gx < GW; gx++) {
          const xx = minx + gx * cell;
          waterMask[gy * GW + gx] = pointInPoly(xx, yy, avoidWater) ? 1 : 0;
        }
      }
    }
  }
  for (let gy = 0; gy < GH; gy++) {
    for (let gx = 0; gx < GW; gx++) {
      const x = minx + gx * cell, y = miny + gy * cell;
      let v = sample(x, y);
      if (v > 0 && waterMask) {
        const gi = gy * GW + gx;
        if (waterMask[gi])
          v = 0;
        else {
          let wet = 0, tot = 0;
          for (let dy = -1; dy <= 1; dy++) {
            const ny = gy + dy;
            if (ny < 0 || ny >= GH)
              continue;
            for (let dx = -1; dx <= 1; dx++) {
              if (dx === 0 && dy === 0)
                continue;
              const nx = gx + dx;
              if (nx < 0 || nx >= GW)
                continue;
              tot++;
              if (waterMask[ny * GW + nx])
                wet++;
            }
          }
          if (wet > 0) {
            const frac = wet / tot;
            v *= Math.max(0, 1 - frac * 1.6);
          }
        }
      }
      H[gy * GW + gx] = v;
    }
  }
  return { H, GW, GH, cell, minx, miny, maxH };
}
function pointInPoly(x, y, poly) {
  let ins = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    if (poly[i].y > y !== poly[j].y > y && x < (poly[j].x - poly[i].x) * (y - poly[i].y) / (poly[j].y - poly[i].y) + poly[i].x)
      ins = !ins;
  }
  return ins;
}
function contourSegments(field, L) {
  const { H, GW, GH, cell, minx, miny } = field;
  const segs = [];
  const val = (gx, gy) => H[gy * GW + gx];
  const ip = (x1, y1, v1, x2, y2, v2) => {
    const t = (L - v1) / (v2 - v1 || 1e-9);
    return { x: x1 + t * (x2 - x1), y: y1 + t * (y2 - y1) };
  };
  for (let gy = 0; gy < GH - 1; gy++) {
    for (let gx = 0; gx < GW - 1; gx++) {
      const x0 = minx + gx * cell, y0 = miny + gy * cell, x1 = x0 + cell, y1 = y0 + cell;
      const tl = val(gx, gy), tr = val(gx + 1, gy), br = val(gx + 1, gy + 1), bl = val(gx, gy + 1);
      let idx = 0;
      if (tl > L)
        idx |= 8;
      if (tr > L)
        idx |= 4;
      if (br > L)
        idx |= 2;
      if (bl > L)
        idx |= 1;
      if (idx === 0 || idx === 15)
        continue;
      const top = () => ip(x0, y0, tl, x1, y0, tr);
      const right = () => ip(x1, y0, tr, x1, y1, br);
      const bottom = () => ip(x0, y1, bl, x1, y1, br);
      const left = () => ip(x0, y0, tl, x0, y1, bl);
      const ps = (a, b) => segs.push([a, b]);
      switch (idx) {
        case 1:
          ps(left(), bottom());
          break;
        case 2:
          ps(bottom(), right());
          break;
        case 3:
          ps(left(), right());
          break;
        case 4:
          ps(top(), right());
          break;
        case 5:
          ps(left(), top());
          ps(bottom(), right());
          break;
        case 6:
          ps(top(), bottom());
          break;
        case 7:
          ps(left(), top());
          break;
        case 8:
          ps(left(), top());
          break;
        case 9:
          ps(top(), bottom());
          break;
        case 10:
          ps(left(), bottom());
          ps(top(), right());
          break;
        case 11:
          ps(top(), right());
          break;
        case 12:
          ps(left(), right());
          break;
        case 13:
          ps(bottom(), right());
          break;
        case 14:
          ps(left(), bottom());
          break;
      }
    }
  }
  return segs;
}
function hillshadeAt(field, x, y) {
  const { H, GW, GH, cell, minx, miny } = field;
  const gx = Math.round((x - minx) / cell), gy = Math.round((y - miny) / cell);
  if (gx < 1 || gy < 1 || gx >= GW - 1 || gy >= GH - 1)
    return 0.5;
  const dzdx = (H[gy * GW + gx + 1] - H[gy * GW + gx - 1]) / 2;
  const dzdy = (H[(gy + 1) * GW + gx] - H[(gy - 1) * GW + gx]) / 2;
  const nx = -dzdx * 26, ny = -dzdy * 26, nz = 1;
  const nl = Math.hypot(nx, ny, nz) || 1;
  return Math.max(0, Math.min(1, 0.5 + (nx * -0.7 + ny * -0.7 + nz * 0.5) / nl * 0.8));
}
function footprintPolygon(field, level = 0.04) {
  const L = level * field.maxH;
  const segs = contourSegments(field, L);
  if (!segs.length)
    return [];
  const used = new Array(segs.length).fill(false);
  const key = (p) => `${Math.round(p.x)},${Math.round(p.y)}`;
  const startMap = /* @__PURE__ */ new Map();
  for (let i = 0; i < segs.length; i++) {
    for (const p of segs[i]) {
      const kk = key(p);
      if (!startMap.has(kk))
        startMap.set(kk, []);
      startMap.get(kk).push(i);
    }
  }
  let bestLoop = [];
  for (let i = 0; i < segs.length; i++) {
    if (used[i])
      continue;
    const loop = [segs[i][0], segs[i][1]];
    used[i] = true;
    let guard = 0;
    while (guard++ < segs.length * 2) {
      const tail = loop[loop.length - 1];
      const cand = startMap.get(key(tail)) || [];
      let found = -1;
      for (const ci of cand) {
        if (used[ci])
          continue;
        const [a, b] = segs[ci];
        if (key(a) === key(tail)) {
          loop.push(b);
          used[ci] = true;
          found = ci;
          break;
        }
        if (key(b) === key(tail)) {
          loop.push(a);
          used[ci] = true;
          found = ci;
          break;
        }
      }
      if (found < 0)
        break;
    }
    if (loop.length > bestLoop.length)
      bestLoop = loop;
  }
  if (bestLoop.length > 60) {
    const step = Math.ceil(bestLoop.length / 60);
    bestLoop = bestLoop.filter((_, i) => i % step === 0);
  }
  return bestLoop;
}

// src/landscape.ts
var TAU = Math.PI * 2;
function closeAlongEdgesRect(curve, e1, e2, x0, y0, rw, rh, side) {
  const x1 = x0 + rw;
  const y1 = y0 + rh;
  const NW = { x: x0, y: y0 };
  const NE = { x: x1, y: y0 };
  const SE = { x: x1, y: y1 };
  const SW = { x: x0, y: y1 };
  const cornerBetween = {
    "N,E": NE,
    "E,N": NE,
    "E,S": SE,
    "S,E": SE,
    "S,W": SW,
    "W,S": SW,
    "W,N": NW,
    "N,W": NW
  };
  const cwNext = { N: "E", E: "S", S: "W", W: "N" };
  const ccwNext = { N: "W", W: "S", S: "E", E: "N" };
  const walk = (nextMap) => {
    const result = curve.slice();
    let cur = e2;
    let steps = 0;
    while (cur !== e1 && steps < 8) {
      const nxt = nextMap[cur];
      result.push(cornerBetween[cur + "," + nxt]);
      cur = nxt;
      steps++;
    }
    return result;
  };
  const cw = walk(cwNext);
  const ccw = walk(ccwNext);
  const absArea = (poly) => {
    let a = 0;
    for (let i = 0; i < poly.length; i++) {
      const p = poly[i];
      const q = poly[(i + 1) % poly.length];
      a += (q.x - p.x) * (q.y + p.y);
    }
    return Math.abs(a) * 0.5;
  };
  const larger = absArea(cw) >= absArea(ccw) ? cw : ccw;
  const smaller = larger === cw ? ccw : cw;
  return side > 0 ? larger : smaller;
}
function makeCoast(rng, noise, w, h, opts) {
  const roughness = opts.roughness;
  const octaves = opts.octaves;
  const margin = Math.min(w, h) * 0.55;
  const x0 = -margin;
  const y0 = -margin;
  const x1 = w + margin;
  const y1 = h + margin;
  const ew = x1 - x0;
  const eh = y1 - y0;
  const edgePointExp = (edge, t) => {
    switch (edge) {
      case "N":
        return { x: x0 + t * ew, y: y0 };
      case "S":
        return { x: x0 + t * ew, y: y1 };
      case "W":
        return { x: x0, y: y0 + t * eh };
      case "E":
        return { x: x1, y: y0 + t * eh };
    }
  };
  const ampBig = Math.min(w, h) * 0.28 * roughness;
  const ampSmall = Math.min(w, h) * 0.07 * roughness;
  const scaleBig = 1.8 / Math.min(w, h);
  const scaleSmall = 9 / Math.min(w, h);
  const SAMPLES = 280;
  const crossesCanvas = (curve2) => curve2.some((p) => p.x >= 0 && p.x <= w && p.y >= 0 && p.y <= h);
  const wellFramed = (curve2, poly2) => {
    if (!crossesCanvas(curve2))
      return false;
    const out = Math.min(w, h);
    const loX = (w - out) / 2;
    const loY = (h - out) / 2;
    let wet = 0;
    let grid = 0;
    for (let gx = loX; gx <= loX + out; gx += 50) {
      for (let gy = loY; gy <= loY + out; gy += 50) {
        grid++;
        if (pointInPolygon({ x: gx, y: gy }, poly2))
          wet++;
      }
    }
    const frac = grid ? wet / grid : 0;
    return frac >= 0.18 && frac <= 0.82;
  };
  const seaSide = opts.seaSide && ["N", "E", "S", "W"].includes(opts.seaSide) ? opts.seaSide : null;
  const attempt = () => {
    const horiz = seaSide ? seaSide === "N" || seaSide === "S" : rng() < 0.5;
    const e1 = horiz ? "W" : "N";
    const e2 = horiz ? "E" : "S";
    const p1 = edgePointExp(e1, 0.15 + rng() * 0.7);
    const p2 = edgePointExp(e2, 0.15 + rng() * 0.7);
    const mx = (p1.x + p2.x) / 2;
    const my = (p1.y + p2.y) / 2;
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    const L = Math.hypot(dx, dy);
    const nx = -dy / L;
    const ny = dx / L;
    const bulgeMag = (0.25 + rng() * 0.4) * Math.min(w, h);
    const bulge = bulgeMag * (rng() < 0.5 ? 1 : -1);
    const ctrl = { x: mx + nx * bulge, y: my + ny * bulge };
    const pts = [];
    for (let i = 0; i <= SAMPLES; i++) {
      const t = i / SAMPLES;
      const u = 1 - t;
      const bx = u * u * p1.x + 2 * u * t * ctrl.x + t * t * p2.x;
      const by = u * u * p1.y + 2 * u * t * ctrl.y + t * t * p2.y;
      const tx = 2 * u * (ctrl.x - p1.x) + 2 * t * (p2.x - ctrl.x);
      const ty = 2 * u * (ctrl.y - p1.y) + 2 * t * (p2.y - ctrl.y);
      const tl = Math.hypot(tx, ty) || 1;
      const nnx = -ty / tl;
      const nny = tx / tl;
      const taper = Math.sin(t * Math.PI);
      const nBig = noise.fbm(bx * scaleBig, by * scaleBig, octaves, 0.55);
      const nSmall = noise.fbm(bx * scaleSmall, by * scaleSmall, Math.max(2, octaves - 2), 0.5);
      const off = (nBig * ampBig + nSmall * ampSmall) * taper;
      const x = Math.max(x0, Math.min(x1, bx + nnx * off));
      const y = Math.max(y0, Math.min(y1, by + nny * off));
      pts.push({ x, y });
    }
    const smoothed = smoothPolyline(pts, 2);
    let side = rng() < 0.5 ? 1 : -1;
    if (seaSide) {
      const probe = seaSide === "N" ? { x: w / 2, y: h * 0.06 } : seaSide === "S" ? { x: w / 2, y: h * 0.94 } : seaSide === "W" ? { x: w * 0.06, y: h / 2 } : { x: w * 0.94, y: h / 2 };
      const polyPos = closeAlongEdgesRect(smoothed, e1, e2, x0, y0, ew, eh, 1);
      side = pointInPolygon(probe, polyPos) ? 1 : -1;
    }
    const poly2 = closeAlongEdgesRect(smoothed, e1, e2, x0, y0, ew, eh, side);
    return { poly: poly2, curve: smoothed };
  };
  const MAX_ATTEMPTS = 16;
  let { poly, curve } = attempt();
  let tries = 1;
  while (!wellFramed(curve, poly) && tries < MAX_ATTEMPTS) {
    ({ poly, curve } = attempt());
    tries++;
  }
  return { water: poly };
}
function makeLake(rng, noise, w, h, opts) {
  const roughness = opts.roughness;
  const octaves = opts.octaves;
  const lakeSize = opts.lakeSize ?? 0.3;
  const cx = w * (0.35 + rng() * 0.3);
  const cy = h * (0.35 + rng() * 0.3);
  const baseR = Math.min(w, h) * lakeSize;
  const stretchAngle = rng() * TAU;
  const stretch = 0.65 + rng() * 0.6;
  const SAMPLES = 180;
  const noiseRadius = 2 + rng() * 1.2;
  const pts = [];
  for (let i = 0; i < SAMPLES; i++) {
    const a = i / SAMPLES * TAU;
    const nx = Math.cos(a);
    const ny = Math.sin(a);
    const n = noise.fbm(noiseRadius * nx, noiseRadius * ny, octaves, 0.55);
    const r = baseR * (1 + n * roughness * 0.5);
    let px = nx * r;
    let py = ny * r;
    const ca = Math.cos(stretchAngle);
    const sa = Math.sin(stretchAngle);
    const rx = ca * px + sa * py;
    const ry = -sa * px + ca * py;
    px = rx * stretch;
    py = ry / stretch;
    const fx = ca * px - sa * py;
    const fy = sa * px + ca * py;
    pts.push({ x: cx + fx, y: cy + fy });
  }
  return { water: smoothClosed(pts, 3) };
}
function makeRiver(rng, noise, w, h, opts) {
  const roughness = opts.roughness;
  const octaves = opts.octaves;
  const riverWidth = opts.riverWidth ?? 0.045;
  const edges = ["N", "E", "S", "W"];
  const e1 = edges[Math.floor(rng() * 4)];
  let e2;
  if (rng() < 0.7) {
    e2 = edges[(edges.indexOf(e1) + 2) % 4];
  } else {
    e2 = edges[(edges.indexOf(e1) + (rng() < 0.5 ? 1 : 3)) % 4];
  }
  const edgePoint = (edge, t) => {
    switch (edge) {
      case "N":
        return { x: t * w, y: 0 };
      case "S":
        return { x: t * w, y: h };
      case "W":
        return { x: 0, y: t * h };
      case "E":
        return { x: w, y: t * h };
    }
  };
  const p1 = edgePoint(e1, 0.2 + rng() * 0.6);
  const p2 = edgePoint(e2, 0.2 + rng() * 0.6);
  const SAMPLES = 220;
  const ampBig = Math.min(w, h) * 0.3 * roughness;
  const ampSmall = Math.min(w, h) * 0.06 * roughness;
  const scaleBig = 1.9 / Math.min(w, h);
  const scaleSmall = 9 / Math.min(w, h);
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  const nx = -dy / Math.hypot(dx, dy);
  const ny = dx / Math.hypot(dx, dy);
  const overshoot = 1.4;
  const nTotal = SAMPLES + 1;
  const lo = -overshoot;
  const hi = 1 + overshoot;
  const centreline = [];
  for (let i = 0; i < nTotal; i++) {
    const t = lo + i / (nTotal - 1) * (hi - lo);
    const bx = p1.x + dx * t;
    const by = p1.y + dy * t;
    const tn = (t - lo) / (hi - lo);
    const taper = Math.pow(Math.sin(tn * Math.PI), 0.5);
    const nBig = noise.fbm(bx * scaleBig, by * scaleBig, octaves, 0.55);
    const nSmall = noise.fbm(bx * scaleSmall, by * scaleSmall, Math.max(2, octaves - 2), 0.5);
    const off = (nBig * ampBig + nSmall * ampSmall) * taper;
    centreline.push({ x: bx + nx * off, y: by + ny * off });
  }
  const smoothCentre = smoothPolyline(centreline, 2);
  const width = Math.min(w, h) * riverWidth;
  return { water: offsetPolyline(smoothCentre, width / 2), centreline: smoothCentre, width };
}
function buildMassif(rng, cx, cy, dirAng, len, baseW, peakH) {
  const sx = Math.cos(dirAng), sy = Math.sin(dirAng);
  const px = -sy, py = sx;
  const seed = Math.floor(rng() * 1e9) >>> 0;
  const nCtrl = 5;
  const main = [];
  for (let i = 0; i < nCtrl; i++) {
    const t = i / (nCtrl - 1);
    const along = (t - 0.5) * len;
    const lat = (rng() - 0.5) * 0.22 * len;
    const x = cx + sx * along + px * lat;
    const y = cy + sy * along + py * lat;
    const taper = Math.sin(t * Math.PI);
    const wWobble = 0.55 + rng() * 0.85;
    const wv = baseW * (0.35 + 0.65 * taper) * wWobble;
    const hv = peakH * (0.45 + 0.55 * taper) * (0.8 + rng() * 0.35);
    main.push({ x, y, w: wv, h: Math.min(1, hv) });
  }
  const spines = [densifySpine(main)];
  const nSpur = 1 + (rng() < 0.6 ? 1 : 0);
  for (let s = 0; s < nSpur; s++) {
    const anchorIdx = 1 + Math.floor(rng() * (nCtrl - 2));
    const a = main[anchorIdx];
    const spurAng = dirAng + (rng() < 0.5 ? 1 : -1) * (Math.PI / 2) * (0.6 + rng() * 0.5);
    const spurLen = len * (0.22 + rng() * 0.16);
    const ex = Math.cos(spurAng), ey = Math.sin(spurAng);
    const spur = [];
    const ns = 3;
    for (let i = 0; i < ns; i++) {
      const t = i / (ns - 1);
      const x = a.x + ex * spurLen * t + (rng() - 0.5) * 16;
      const y = a.y + ey * spurLen * t + (rng() - 0.5) * 16;
      const wv = a.w * 0.9 * (1 - t * 0.3) * (0.85 + rng() * 0.35);
      const hv = a.h * (0.9 - t * 0.3);
      spur.push({ x, y, w: Math.max(26, wv), h: Math.max(0.35, hv) });
    }
    spines.push(densifySpine(spur));
  }
  return { spines, crag: 0.5, widthVar: 0.8, k: 0.32, seed };
}
function mountainsToRidges(mtns, avoidWater) {
  const ridges = [];
  for (const m of mtns) {
    const field = buildHeightField(m, 8, 44, avoidWater ?? void 0);
    const fp = footprintPolygon(field, 0.05);
    if (fp.length >= 6)
      ridges.push(fp);
  }
  return ridges;
}
function makeMountainSpine(rng, noise, w, h, opts, cropSize, anchor) {
  const rangeLen = opts.rangeLen ?? 0.65;
  const peakCount = Math.floor(opts.peakCount ?? 6);
  const scale = Math.max(0.55, 0.55 + (Math.max(1, peakCount) - 6) / 6 * 0.5);
  const peakH = Math.min(1.2, 0.85 + peakCount / 12 * 0.45);
  const mtns = [];
  if (anchor && cropSize) {
    const crop = cropSize;
    const cx0 = anchor.x, cy0 = anchor.y, half = crop / 2;
    const inset = crop * (0.16 + rng() * 0.04);
    const sides = ["N", "E", "S", "W"];
    for (let i = sides.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      const t = sides[i];
      sides[i] = sides[j];
      sides[j] = t;
    }
    const chosen = sides.slice(0, 3 + (rng() < 0.4 ? 1 : 0));
    for (const s of chosen) {
      const horiz = s === "N" || s === "S";
      const edgeAng = horiz ? 0 : Math.PI / 2;
      const along = 0.5 + (rng() - 0.5) * 0.4;
      let cxm, cym;
      if (horiz) {
        cxm = cx0 - half + crop * along;
        cym = s === "N" ? cy0 - half + inset : cy0 + half - inset;
      } else {
        cym = cy0 - half + crop * along;
        cxm = s === "W" ? cx0 - half + inset : cx0 + half - inset;
      }
      const baseW = Math.min(w, h) * (0.09 + rng() * 0.05) * scale;
      const len = crop * (0.3 + rng() * 0.18) * scale;
      mtns.push(buildMassif(rng, cxm, cym, edgeAng + (rng() - 0.35) * 0.35, len, baseW, Math.min(1.2, peakH + rng() * 0.1)));
    }
    return { mountains: mtns, ridges: mountainsToRidges(mtns) };
  }
  const spineAngle = rng() * TAU;
  const spineLen = Math.min(w, h) * rangeLen * scale;
  const cx = w * 0.5 + (rng() - 0.5) * w * 0.18;
  const cy = h * 0.5 + (rng() - 0.5) * h * 0.18;
  const sx = Math.cos(spineAngle), sy = Math.sin(spineAngle);
  const nMass = 1 + (rng() < 0.7 ? 1 : 0);
  for (let i = 0; i < nMass; i++) {
    const t = nMass === 1 ? 0 : i / (nMass - 1) - 0.5;
    const mx = cx + sx * spineLen * 0.5 * t;
    const my = cy + sy * spineLen * 0.5 * t;
    const baseW = Math.min(w, h) * (0.1 + rng() * 0.05) * scale;
    mtns.push(buildMassif(rng, mx, my, spineAngle + (rng() - 0.5) * 0.4, spineLen * (0.55 + rng() * 0.3), baseW, Math.min(1.2, peakH + rng() * 0.05)));
  }
  return { mountains: mtns, ridges: mountainsToRidges(mtns) };
}
function makeMountainSpineOverlay(rng, noise, w, h, opts, side, avoidWater, cropSize, anchor) {
  const peakCount = Math.floor(opts.peakCount ?? 6);
  if (peakCount <= 0)
    return { mountains: [], ridges: [] };
  const scale = 0.45 + peakCount / 6 * 0.55;
  const sxn = Math.min(w, h);
  const crop = cropSize ?? Math.min(w, h);
  const cx0 = anchor ? anchor.x : w / 2;
  const cy0 = anchor ? anchor.y : h / 2;
  const half = crop / 2;
  const along = (t) => 0.2 + 0.6 * t;
  const mtns = [];
  const sides = ["N", "E", "S", "W"].filter((s) => side.indexOf(s) >= 0);
  if (!sides.length)
    return { mountains: [], ridges: [] };
  for (const sd of sides) {
    const horiz = sd === "N" || sd === "S";
    const edgeAng = horiz ? 0 : Math.PI / 2;
    const band = 0.12 + rng() * 0.05;
    const inset = crop * band;
    const nMass = scale > 1.1 ? 2 : 1;
    const inward = horiz ? { x: 0, y: sd === "N" ? 1 : -1 } : { x: sd === "W" ? 1 : -1, y: 0 };
    const isWet = (x, y) => !!avoidWater && pointInPolygon({ x, y }, avoidWater);
    for (let i = 0; i < nMass; i++) {
      const t = nMass === 1 ? 0.5 : 0.28 + 0.44 * i;
      let cxm, cym;
      if (horiz) {
        cxm = cx0 - half + crop * along(t);
        cym = sd === "N" ? cy0 - half + inset : cy0 + half - inset;
      } else {
        cym = cy0 - half + crop * along(t);
        cxm = sd === "W" ? cx0 - half + inset : cx0 + half - inset;
      }
      if (isWet(cxm, cym)) {
        let found = false;
        const stepN = 24;
        for (let s = 1; s <= stepN; s++) {
          const dd = s / stepN * crop * 0.4;
          const nx = cxm + inward.x * dd, ny = cym + inward.y * dd;
          if (!isWet(nx, ny)) {
            cxm = nx;
            cym = ny;
            found = true;
            break;
          }
        }
        if (!found)
          continue;
      }
      const baseW = sxn * (0.09 + rng() * 0.05) * scale;
      const len = crop * (0.22 + rng() * 0.12) * scale;
      const peakH = Math.min(1.1, 0.55 + 0.5 * (peakCount / 12) + rng() * 0.12);
      mtns.push(buildMassif(rng, cxm, cym, edgeAng + (rng() - 0.5) * 0.3, len, baseW, peakH));
    }
  }
  return { mountains: mtns, ridges: mountainsToRidges(mtns, avoidWater) };
}
function generateLandscape(terrain, seedStr, w, h, opts) {
  return generateWith(terrain, seedStr, w, h, opts);
}
function generateWith(terrain, seedStr, w, h, opts) {
  const rng = makeRng(hash32(seedStr + ":" + terrain));
  const noise = new Noise2D(rng);
  const scene = { terrain, water: null, centreline: null, ridges: null };
  if (terrain === "coastal") {
    scene.water = makeCoast(rng, noise, w, h, opts).water;
  } else if (terrain === "river") {
    const r = makeRiver(rng, noise, w, h, opts);
    scene.water = r.water;
    scene.centreline = r.centreline;
  } else if (terrain === "lake") {
    scene.water = makeLake(rng, noise, w, h, opts).water;
  } else if (terrain === "mountain") {
    const m = makeMountainSpine(rng, noise, w, h, opts);
    scene.mountains = m.mountains;
    scene.ridges = m.ridges;
  }
  const mtnSide = opts.mountainSide;
  if (terrain !== "mountain" && mtnSide && /[NESW]/.test(mtnSide)) {
    const m = makeMountainSpineOverlay(rng, noise, w, h, opts, mtnSide, scene.water);
    scene.mountains = m.mountains;
    scene.ridges = m.ridges;
  }
  const baseForest = terrain === "mountain" ? 4 : terrain === "inland" ? 10 : 7;
  scene.forests = placeForests(rng, noise, w, h, scene, baseForest);
  return scene;
}
function isWater(pt, scene) {
  return scene.water != null && pointInPolygon(pt, scene.water);
}
function isMountain(pt, scene) {
  if (!scene.ridges)
    return false;
  for (const ridge of scene.ridges) {
    if (pointInPolygon(pt, ridge))
      return true;
  }
  return false;
}
var FOOTHILL_MARGIN = 22;
function canopyNearMountain(polygon, centre, scene, margin) {
  if (!scene.ridges || !scene.ridges.length)
    return false;
  for (const p of polygon) {
    if (isMountain(p, scene))
      return true;
    let dx = p.x - centre.x, dy = p.y - centre.y;
    const l = Math.hypot(dx, dy) || 1;
    dx /= l;
    dy /= l;
    if (isMountain({ x: p.x + dx * margin, y: p.y + dy * margin }, scene))
      return true;
  }
  return false;
}
function placeForests(rng, noise, w, h, scene, count) {
  const patches = [];
  const target = Math.max(1, count);
  const gridN = Math.max(target * 3, 16);
  const cols = Math.max(1, Math.round(Math.sqrt(gridN * w / h)));
  const rows = Math.max(1, Math.round(gridN / cols));
  const cellW = w / cols;
  const cellH = h / rows;
  const cells = [];
  for (let r = 0; r < rows; r++)
    for (let c = 0; c < cols; c++)
      cells.push([c, r]);
  for (let i = cells.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    const tmp = cells[i];
    cells[i] = cells[j];
    cells[j] = tmp;
  }
  const waterFracOk = (polygon, centre) => {
    if (isWater(centre, scene))
      return false;
    let wet = 0;
    for (const p of polygon)
      if (isWater(p, scene))
        wet++;
    return wet / polygon.length <= 0.25;
  };
  for (const [c, r] of cells) {
    if (patches.length >= target)
      break;
    if (rng() < 0.08)
      continue;
    const cx = (c + 0.18 + rng() * 0.64) * cellW;
    const cy = (r + 0.18 + rng() * 0.64) * cellH;
    const centre = { x: cx, y: cy };
    if (isWater(centre, scene))
      continue;
    if (isMountain(centre, scene))
      continue;
    const isBig = rng() < 0.3;
    let baseR;
    if (isBig)
      baseR = Math.min(cellW, cellH) * (0.5 + rng() * 0.22);
    else
      baseR = Math.min(cellW, cellH) * (0.3 + rng() * 0.2);
    const SAMPLES = isBig ? 80 : 60;
    const pts = [];
    const phase = rng() * 100;
    for (let i = 0; i < SAMPLES; i++) {
      const a = i / SAMPLES * TAU;
      const nx = Math.cos(a);
      const ny = Math.sin(a);
      const n = noise.fbm(phase + 2.5 * nx, phase + 2.5 * ny, 3, 0.55);
      const rr = baseR * (1 + n * 0.5);
      pts.push({ x: cx + nx * rr, y: cy + ny * rr });
    }
    const polygon = smoothClosed(pts, 1);
    if (!waterFracOk(polygon, centre))
      continue;
    if (canopyNearMountain(polygon, centre, scene, FOOTHILL_MARGIN))
      continue;
    patches.push({ cx, cy, polygon, big: isBig });
  }
  const gapCols = 6;
  const gapRows = 6;
  const gapCW = w / gapCols;
  const gapCH = h / gapRows;
  const minSepToForest = Math.min(gapCW, gapCH) * 0.55;
  for (let gr = 0; gr < gapRows; gr++) {
    for (let gc = 0; gc < gapCols; gc++) {
      const cx = (gc + 0.3 + rng() * 0.4) * gapCW;
      const cy = (gr + 0.3 + rng() * 0.4) * gapCH;
      const centre = { x: cx, y: cy };
      if (isWater(centre, scene))
        continue;
      if (isMountain(centre, scene))
        continue;
      let near = false;
      for (const f of patches) {
        if (Math.hypot(f.cx - cx, f.cy - cy) < minSepToForest) {
          near = true;
          break;
        }
      }
      if (near)
        continue;
      if (rng() < 0.35)
        continue;
      const baseR = Math.min(gapCW, gapCH) * (0.22 + rng() * 0.16);
      const SAMPLES = 56;
      const pts = [];
      const phase = rng() * 100;
      for (let i = 0; i < SAMPLES; i++) {
        const a = i / SAMPLES * TAU;
        const nx = Math.cos(a);
        const ny = Math.sin(a);
        const n = noise.fbm(phase + 2.5 * nx, phase + 2.5 * ny, 3, 0.55);
        const rr = baseR * (1 + n * 0.5);
        pts.push({ x: cx + nx * rr, y: cy + ny * rr });
      }
      const polygon = smoothClosed(pts, 1);
      if (!waterFracOk(polygon, centre))
        continue;
      if (canopyNearMountain(polygon, centre, scene, FOOTHILL_MARGIN))
        continue;
      patches.push({ cx, cy, polygon, big: false });
    }
  }
  return patches;
}

// src/roads.ts
var GRID_W = 100;
var GRID_H = 100;
var MOUNTAIN_COST = 45;
var INF = Infinity;
var SQRT2 = Math.SQRT2;
function buildCostGrid(scene, w, h) {
  const cellW = w / GRID_W;
  const cellH = h / GRID_H;
  const grid = [];
  for (let iy = 0; iy < GRID_H; iy++)
    grid.push(new Array(GRID_W).fill(1));
  const water = scene.water;
  const ridges = scene.ridges;
  const forests = scene.forests;
  for (let iy = 0; iy < GRID_H; iy++) {
    const cy = (iy + 0.5) * cellH;
    for (let ix = 0; ix < GRID_W; ix++) {
      const cx = (ix + 0.5) * cellW;
      const pt = { x: cx, y: cy };
      if (water && pointInPolygon(pt, water)) {
        grid[iy][ix] = INF;
        continue;
      }
      let blocked = false;
      if (ridges) {
        for (const ridge of ridges) {
          if (pointInPolygon(pt, ridge)) {
            grid[iy][ix] = MOUNTAIN_COST;
            blocked = true;
            break;
          }
        }
      }
      if (blocked)
        continue;
      if (forests) {
        for (const f of forests) {
          if (pointInPolygon(pt, f.polygon)) {
            grid[iy][ix] = 12;
            break;
          }
        }
      }
    }
  }
  const edgeCells = [];
  for (let iy = 0; iy < GRID_H; iy++) {
    for (let ix = 0; ix < GRID_W; ix++) {
      if (grid[iy][ix] !== 1)
        continue;
      let isEdge = false;
      for (let dy = -1; dy <= 1 && !isEdge; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          if (dx === 0 && dy === 0)
            continue;
          const nx = ix + dx;
          const ny = iy + dy;
          if (nx >= 0 && nx < GRID_W && ny >= 0 && ny < GRID_H && grid[ny][nx] === 12) {
            isEdge = true;
            break;
          }
        }
      }
      if (isEdge)
        edgeCells.push([ix, iy]);
    }
  }
  for (const [ix, iy] of edgeCells)
    grid[iy][ix] = 2;
  const SHORE_BUFFER_CELLS = 3;
  const SHORE_PENALTY = 4;
  const shoreCells = [];
  for (let iy = 0; iy < GRID_H; iy++) {
    for (let ix = 0; ix < GRID_W; ix++) {
      if (grid[iy][ix] === INF)
        continue;
      let isShore = false;
      for (let dy = -SHORE_BUFFER_CELLS; dy <= SHORE_BUFFER_CELLS && !isShore; dy++) {
        for (let dx = -SHORE_BUFFER_CELLS; dx <= SHORE_BUFFER_CELLS; dx++) {
          const nx = ix + dx;
          const ny = iy + dy;
          if (nx < 0 || nx >= GRID_W || ny < 0 || ny >= GRID_H)
            continue;
          if (grid[ny][nx] === INF) {
            const d = Math.max(Math.abs(dx), Math.abs(dy));
            if (d <= SHORE_BUFFER_CELLS) {
              isShore = true;
              break;
            }
          }
        }
      }
      if (isShore)
        shoreCells.push([ix, iy]);
    }
  }
  for (const [ix, iy] of shoreCells) {
    let minD = SHORE_BUFFER_CELLS;
    for (let dy = -SHORE_BUFFER_CELLS; dy <= SHORE_BUFFER_CELLS; dy++) {
      for (let dx = -SHORE_BUFFER_CELLS; dx <= SHORE_BUFFER_CELLS; dx++) {
        const nx = ix + dx;
        const ny = iy + dy;
        if (nx < 0 || nx >= GRID_W || ny < 0 || ny >= GRID_H)
          continue;
        if (grid[ny][nx] === INF) {
          const d = Math.max(Math.abs(dx), Math.abs(dy));
          if (d < minD)
            minD = d;
        }
      }
    }
    if (minD <= SHORE_BUFFER_CELLS) {
      let attenuation = 1 - (minD - 1) / SHORE_BUFFER_CELLS;
      attenuation = Math.max(0, Math.min(1, attenuation));
      grid[iy][ix] += SHORE_PENALTY * attenuation;
    }
  }
  return { grid, cellW, cellH };
}
function worldToGrid(pt, cellW, cellH) {
  const ix = Math.max(0, Math.min(GRID_W - 1, Math.floor(pt.x / cellW)));
  const iy = Math.max(0, Math.min(GRID_H - 1, Math.floor(pt.y / cellH)));
  return [ix, iy];
}
function gridToWorld(cell, cellW, cellH) {
  return { x: (cell[0] + 0.5) * cellW, y: (cell[1] + 0.5) * cellH };
}
function nearestPassable(grid, cell, maxSearch = 8) {
  const [ix0, iy0] = cell;
  for (let radius = 1; radius <= maxSearch; radius++) {
    for (let dy = -radius; dy <= radius; dy++) {
      for (let dx = -radius; dx <= radius; dx++) {
        if (Math.abs(dx) !== radius && Math.abs(dy) !== radius)
          continue;
        const nx = ix0 + dx;
        const ny = iy0 + dy;
        if (nx >= 0 && nx < GRID_W && ny >= 0 && ny < GRID_H && grid[ny][nx] !== INF) {
          return [nx, ny];
        }
      }
    }
  }
  return null;
}
var MinHeap = class {
  constructor() {
    this.a = [];
  }
  get size() {
    return this.a.length;
  }
  less(i, j) {
    const x = this.a[i];
    const y = this.a[j];
    if (x.f !== y.f)
      return x.f < y.f;
    if (x.g !== y.g)
      return x.g < y.g;
    if (x.ix !== y.ix)
      return x.ix < y.ix;
    return x.iy < y.iy;
  }
  push(n) {
    this.a.push(n);
    let i = this.a.length - 1;
    while (i > 0) {
      const p = i - 1 >> 1;
      if (this.less(i, p)) {
        [this.a[i], this.a[p]] = [this.a[p], this.a[i]];
        i = p;
      } else
        break;
    }
  }
  pop() {
    const top = this.a[0];
    const last = this.a.pop();
    if (this.a.length > 0) {
      this.a[0] = last;
      let i = 0;
      const n = this.a.length;
      for (; ; ) {
        const l = 2 * i + 1;
        const r = 2 * i + 2;
        let m = i;
        if (l < n && this.less(l, m))
          m = l;
        if (r < n && this.less(r, m))
          m = r;
        if (m === i)
          break;
        [this.a[i], this.a[m]] = [this.a[m], this.a[i]];
        i = m;
      }
    }
    return top;
  }
};
var NEIGHBOURS = [
  [-1, -1, SQRT2],
  [0, -1, 1],
  [1, -1, SQRT2],
  [-1, 0, 1],
  [1, 0, 1],
  [-1, 1, SQRT2],
  [0, 1, 1],
  [1, 1, SQRT2]
];
function astar(grid, start, goal) {
  if (grid[start[1]][start[0]] === INF) {
    const s = nearestPassable(grid, start);
    if (s === null)
      return null;
    start = s;
  }
  if (grid[goal[1]][goal[0]] === INF) {
    const gl = nearestPassable(grid, goal);
    if (gl === null)
      return null;
    goal = gl;
  }
  const h = (ix, iy) => {
    const dx = Math.abs(ix - goal[0]);
    const dy = Math.abs(iy - goal[1]);
    return dx + dy + (SQRT2 - 2) * Math.min(dx, dy);
  };
  const key = (ix, iy) => iy * GRID_W + ix;
  const heap = new MinHeap();
  heap.push({ f: h(start[0], start[1]), g: 0, ix: start[0], iy: start[1] });
  const cameFrom = /* @__PURE__ */ new Map();
  const visited = /* @__PURE__ */ new Set();
  const gScore = /* @__PURE__ */ new Map();
  gScore.set(key(start[0], start[1]), 0);
  const START = key(start[0], start[1]);
  while (heap.size > 0) {
    const cur = heap.pop();
    const ck = key(cur.ix, cur.iy);
    if (visited.has(ck))
      continue;
    visited.add(ck);
    if (cur.ix === goal[0] && cur.iy === goal[1]) {
      const path = [];
      let c = ck;
      for (; ; ) {
        path.push([c % GRID_W, Math.floor(c / GRID_W)]);
        if (c === START)
          break;
        const p = cameFrom.get(c);
        if (p === void 0)
          break;
        c = p;
      }
      path.reverse();
      return path;
    }
    const cx = cur.ix;
    const cy = cur.iy;
    for (const [dx, dy, step] of NEIGHBOURS) {
      const nx = cx + dx;
      const ny = cy + dy;
      if (nx < 0 || nx >= GRID_W || ny < 0 || ny >= GRID_H)
        continue;
      const cost = grid[ny][nx];
      if (cost === INF)
        continue;
      if (dx !== 0 && dy !== 0) {
        if (grid[cy][nx] === INF || grid[ny][cx] === INF)
          continue;
      }
      const nk = key(nx, ny);
      if (visited.has(nk))
        continue;
      const ng = cur.g + step * cost;
      const prev = gScore.get(nk);
      if (prev !== void 0 && prev <= ng)
        continue;
      gScore.set(nk, ng);
      cameFrom.set(nk, ck);
      heap.push({ f: ng + h(nx, ny), g: ng, ix: nx, iy: ny });
    }
  }
  return null;
}
function pathToPolyline(path, cellW, cellH) {
  return path.map((c) => gridToWorld(c, cellW, cellH));
}
function chaikinOpen(pts, iters = 3) {
  let out = pts;
  for (let k = 0; k < iters; k++) {
    if (out.length < 3)
      break;
    const nxt = [out[0]];
    for (let i = 0; i < out.length - 1; i++) {
      const a = out[i];
      const b = out[i + 1];
      nxt.push({ x: 0.75 * a.x + 0.25 * b.x, y: 0.75 * a.y + 0.25 * b.y });
      nxt.push({ x: 0.25 * a.x + 0.75 * b.x, y: 0.25 * a.y + 0.75 * b.y });
    }
    nxt.push(out[out.length - 1]);
    out = nxt;
  }
  return out;
}
function edgeNormal(pt, w, h, edgeMargin = 8) {
  let nx = 0;
  let ny = 0;
  if (pt.x <= edgeMargin)
    nx = -1;
  else if (pt.x >= w - edgeMargin)
    nx = 1;
  if (pt.y <= edgeMargin)
    ny = -1;
  else if (pt.y >= h - edgeMargin)
    ny = 1;
  const l = Math.hypot(nx, ny);
  if (l === 0)
    return null;
  return { x: nx / l, y: ny / l };
}
function extendEndpointsOffMapAt(pts, w, h, end, overshootFrac = 0.03) {
  if (pts.length < 2)
    return pts;
  const overshoot = Math.min(w, h) * overshootFrac;
  const out = pts.slice();
  if (end === "start") {
    const n = edgeNormal(out[0], w, h);
    if (n)
      out.unshift({ x: out[0].x + n.x * overshoot, y: out[0].y + n.y * overshoot });
  } else {
    const n = edgeNormal(out[out.length - 1], w, h);
    if (n)
      out.push({ x: out[out.length - 1].x + n.x * overshoot, y: out[out.length - 1].y + n.y * overshoot });
  }
  return out;
}
function extendEndpointsOffMap(pts, w, h, overshootFrac = 0.03) {
  if (pts.length < 2)
    return pts;
  let out = extendEndpointsOffMapAt(pts, w, h, "start", overshootFrac);
  out = extendEndpointsOffMapAt(out, w, h, "end", overshootFrac);
  return out;
}
function pickEdgeInboundPoint(rng, edge, w, h, usedT, grid, cellW, cellH) {
  for (let attempt = 0; attempt < 30; attempt++) {
    const t = 0.2 + rng() * 0.6;
    if (usedT.some((t2) => Math.abs(t - t2) < 0.22))
      continue;
    let pt;
    if (edge === "N")
      pt = { x: t * w, y: 6 };
    else if (edge === "S")
      pt = { x: t * w, y: h - 6 };
    else if (edge === "W")
      pt = { x: 6, y: t * h };
    else
      pt = { x: w - 6, y: t * h };
    if (grid) {
      const ix = Math.max(0, Math.min(GRID_W - 1, Math.floor(pt.x / cellW)));
      const iy = Math.max(0, Math.min(GRID_H - 1, Math.floor(pt.y / cellH)));
      let viable = false;
      for (let dy = -2; dy <= 2 && !viable; dy++) {
        for (let dx = -2; dx <= 2; dx++) {
          const nx = ix + dx;
          const ny = iy + dy;
          if (nx >= 0 && nx < GRID_W && ny >= 0 && ny < GRID_H && grid[ny][nx] !== INF) {
            viable = true;
            break;
          }
        }
      }
      if (!viable)
        continue;
    }
    usedT.push(t);
    return { pt, t };
  }
  return null;
}
function waterSideOfPoint(pt, scene, w, h) {
  const cline = scene.centreline;
  if (!cline || cline.length < 2)
    return "A";
  const p0 = cline[0];
  const p1 = cline[cline.length - 1];
  let rx = p1.x - p0.x;
  let ry = p1.y - p0.y;
  const rl = Math.hypot(rx, ry) || 1;
  rx /= rl;
  ry /= rl;
  const perpX = ry;
  const perpY = -rx;
  const dx = pt.x - p0.x;
  const dy = pt.y - p0.y;
  const side = dx * perpX + dy * perpY;
  return side >= 0 ? "A" : "B";
}
function findMeetingPoint(rng, grid, w, h, cellW, cellH, scene, sideFilter, edgesOnThisSide) {
  let cxT = w * 0.5;
  let cyT = h * 0.5;
  if (edgesOnThisSide && edgesOnThisSide.length) {
    cxT = edgesOnThisSide.reduce((s, p) => s + p.x, 0) / edgesOnThisSide.length;
    cyT = edgesOnThisSide.reduce((s, p) => s + p.y, 0) / edgesOnThisSide.length;
    let pull;
    if (edgesOnThisSide.length === 1)
      pull = 0.6;
    else if (edgesOnThisSide.length === 2)
      pull = 0.45;
    else
      pull = 0.3;
    cxT = (1 - pull) * cxT + pull * (w / 2);
    cyT = (1 - pull) * cyT + pull * (h / 2);
  }
  const band = Math.min(w, h) * 0.15;
  const waterClearance = Math.min(w, h) * 0.05;
  const water = scene.water;
  const ridges = scene.ridges;
  const searchBand = water && (scene.terrain === "river" || scene.terrain === "lake" || scene.terrain === "coastal") ? Math.min(w, h) * 0.42 : band;
  const ok = (pt) => {
    if (water) {
      if (pointInPolygon(pt, water))
        return false;
      for (const v of water) {
        if (Math.hypot(v.x - pt.x, v.y - pt.y) < waterClearance)
          return false;
      }
    }
    if (ridges) {
      for (const ridge of ridges) {
        if (pointInPolygon(pt, ridge))
          return false;
      }
    }
    if (sideFilter !== null) {
      if (waterSideOfPoint(pt, scene, w, h) !== sideFilter)
        return false;
    }
    return true;
  };
  const isWaterTerrain = !!water && (scene.terrain === "river" || scene.terrain === "lake" || scene.terrain === "coastal");
  const waterStandoff = Math.min(w, h) * 0.06;
  const distToWaterEdge = (pt) => {
    if (!water)
      return Infinity;
    let best = Infinity;
    const n = water.length;
    for (let i = 0; i < n; i++) {
      const a = water[i];
      const b = water[(i + 1) % n];
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const seg2 = dx * dx + dy * dy;
      const t = seg2 < 1e-9 ? 0 : Math.max(0, Math.min(1, ((pt.x - a.x) * dx + (pt.y - a.y) * dy) / seg2));
      const qx = a.x + dx * t;
      const qy = a.y + dy * t;
      best = Math.min(best, Math.hypot(pt.x - qx, pt.y - qy));
    }
    return best;
  };
  let bestCand = null;
  let bestCandScore = Infinity;
  for (let i = 0; i < 240; i++) {
    const bx = i % 2 === 0 ? cxT : w / 2;
    const by = i % 2 === 0 ? cyT : h / 2;
    const x = bx + (rng() - 0.5) * 2 * searchBand;
    const y = by + (rng() - 0.5) * 2 * searchBand;
    if (!ok({ x, y }))
      continue;
    const ix = Math.max(0, Math.min(GRID_W - 1, Math.floor(x / cellW)));
    const iy = Math.max(0, Math.min(GRID_H - 1, Math.floor(y / cellH)));
    if (grid[iy][ix] >= 5)
      continue;
    if (!isWaterTerrain) {
      return { pt: { x, y }, cell: [ix, iy] };
    }
    const d = distToWaterEdge({ x, y });
    const centreDist = Math.hypot(x - w / 2, y - h / 2);
    const score = Math.abs(d - waterStandoff) + grid[iy][ix] * 0.5 + centreDist * 0.5;
    if (score < bestCandScore) {
      bestCandScore = score;
      bestCand = { pt: { x, y }, cell: [ix, iy] };
    }
  }
  if (bestCand)
    return bestCand;
  return null;
}
function clearShorePenaltyNear(grid, pt, cellW, cellH, radius = 2) {
  const ix0 = Math.max(0, Math.min(GRID_W - 1, Math.floor(pt.x / cellW)));
  const iy0 = Math.max(0, Math.min(GRID_H - 1, Math.floor(pt.y / cellH)));
  for (let dy = -radius; dy <= radius; dy++) {
    for (let dx = -radius; dx <= radius; dx++) {
      const nx = ix0 + dx;
      const ny = iy0 + dy;
      if (nx < 0 || nx >= GRID_W || ny < 0 || ny >= GRID_H)
        continue;
      const c = grid[ny][nx];
      if (c === INF)
        continue;
      if (c <= 5.5)
        grid[ny][nx] = 1;
      else if (c <= 8)
        grid[ny][nx] = 2;
    }
  }
}
function bankEndpointForBridge(bridgePt, scene, w, h, side) {
  const cline = scene.centreline;
  const water = scene.water;
  if (!cline || !water)
    return bridgePt;
  const p0 = cline[0];
  const p1 = cline[cline.length - 1];
  let rx = p1.x - p0.x;
  let ry = p1.y - p0.y;
  const rl = Math.hypot(rx, ry) || 1;
  rx /= rl;
  ry /= rl;
  const perpX = ry;
  const perpY = -rx;
  const sign = side === "A" ? 1 : -1;
  const dx = perpX * sign;
  const dy = perpY * sign;
  const cx = bridgePt.x;
  const cy = bridgePt.y;
  const step = 2;
  const maxSteps = Math.floor(Math.min(w, h) * 0.2 / step);
  let lastIn = { x: cx, y: cy };
  for (let k = 1; k < maxSteps; k++) {
    let px = cx + dx * step * k;
    let py = cy + dy * step * k;
    if (!pointInPolygon({ x: px, y: py }, water)) {
      for (let extra = 0; extra < 6; extra++) {
        const px2 = px + dx * step;
        const py2 = py + dy * step;
        if (px2 >= 0 && px2 < w && py2 >= 0 && py2 < h) {
          px = px2;
          py = py2;
        }
      }
      return { x: px, y: py };
    }
    lastIn = { x: px, y: py };
  }
  return { x: lastIn.x + dx * 30, y: lastIn.y + dy * 30 };
}
function routeRoad(grid, p1, p2, cellW, cellH, w, h, endExtends) {
  const c1 = worldToGrid(p1, cellW, cellH);
  const c2 = worldToGrid(p2, cellW, cellH);
  const path = astar(grid, c1, c2);
  if (path === null || path.length < 2)
    return null;
  let polyline = pathToPolyline(path, cellW, cellH);
  polyline[0] = p1;
  polyline[polyline.length - 1] = p2;
  polyline = chaikinOpen(polyline, 3);
  polyline[0] = p1;
  polyline[polyline.length - 1] = p2;
  const [extS, extE] = endExtends;
  if (extS && extE)
    polyline = extendEndpointsOffMap(polyline, w, h);
  else if (extS)
    polyline = extendEndpointsOffMapAt(polyline, w, h, "start");
  else if (extE)
    polyline = extendEndpointsOffMapAt(polyline, w, h, "end");
  return polyline;
}
function stampRoadCostWeighted(grid, polyline, cellW, cellH, nearEndFactor = 20, farFactor = 4, radius = 3) {
  const n = polyline.length;
  const stamped = /* @__PURE__ */ new Set();
  for (let i = 0; i < n; i++) {
    const p = polyline[i];
    const t = n > 1 ? i / (n - 1) : 1;
    const factor = farFactor + (nearEndFactor - farFactor) * t;
    const ix0 = Math.max(0, Math.min(GRID_W - 1, Math.floor(p.x / cellW)));
    const iy0 = Math.max(0, Math.min(GRID_H - 1, Math.floor(p.y / cellH)));
    for (let dy = -radius; dy <= radius; dy++) {
      for (let dx = -radius; dx <= radius; dx++) {
        const nx = ix0 + dx;
        const ny = iy0 + dy;
        if (nx < 0 || nx >= GRID_W || ny < 0 || ny >= GRID_H)
          continue;
        const k = ny * GRID_W + nx;
        if (stamped.has(k))
          continue;
        stamped.add(k);
        if (grid[ny][nx] === INF)
          continue;
        const d = Math.max(Math.abs(dx), Math.abs(dy));
        const localFactor = d === 0 ? factor : factor / (1 + d);
        grid[ny][nx] = Math.min(grid[ny][nx] + localFactor, 60);
      }
    }
  }
}
function closestPointOnPolylines(target, polylines) {
  let best = null;
  let bestD = Infinity;
  for (const poly of polylines) {
    for (let i = 0; i < poly.length - 1; i++) {
      const a = poly[i];
      const b = poly[i + 1];
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const segL2 = dx * dx + dy * dy;
      let t;
      if (segL2 === 0)
        t = 0;
      else {
        t = ((target.x - a.x) * dx + (target.y - a.y) * dy) / segL2;
        t = Math.max(0, Math.min(1, t));
      }
      const cx = a.x + t * dx;
      const cy = a.y + t * dy;
      const d = Math.hypot(target.x - cx, target.y - cy);
      if (d < bestD) {
        bestD = d;
        best = { x: cx, y: cy };
      }
    }
  }
  return best;
}
function choosePrimaryPair(entries, scene, terrain, w, h) {
  const n = entries.length;
  if (n < 2)
    return null;
  if (terrain === "river" && scene.water) {
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const si = waterSideOfPoint(entries[i].pt, scene, w, h);
        const sj = waterSideOfPoint(entries[j].pt, scene, w, h);
        if (si !== sj)
          return [i, j];
      }
    }
  }
  const opposites = { N: "S", S: "N", E: "W", W: "E" };
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (entries[j].edge === opposites[entries[i].edge])
        return [i, j];
    }
  }
  return [0, 1];
}
function computeTownSite(roads, bridge, w, h) {
  if (!roads.length)
    return null;
  if (bridge)
    return bridge.centre;
  const primaries = roads.filter((r) => r.role === "primary");
  const branches = roads.filter((r) => r.role === "branch");
  if (!primaries.length)
    return null;
  if (!branches.length) {
    const pts = primaries[0].points;
    const nearEdge = (p) => p.x <= 12 || p.x >= w - 12 || p.y <= 12 || p.y >= h - 12;
    const startNear = nearEdge(pts[0]);
    const endNear = nearEdge(pts[pts.length - 1]);
    const centralPoint = () => {
      let best = pts[Math.floor(pts.length / 2)];
      let bd = Infinity;
      for (const p of pts) {
        const d = Math.hypot(p.x - w / 2, p.y - h / 2);
        if (d < bd) {
          bd = d;
          best = p;
        }
      }
      return best;
    };
    if (startNear && endNear)
      return centralPoint();
    if (startNear && !endNear)
      return pts[pts.length - 1];
    if (endNear && !startNear)
      return pts[0];
    return centralPoint();
  }
  const xs = branches.map((b) => b.points[b.points.length - 1].x);
  const ys = branches.map((b) => b.points[b.points.length - 1].y);
  return { x: xs.reduce((s, v) => s + v, 0) / xs.length, y: ys.reduce((s, v) => s + v, 0) / ys.length };
}
function findOpenTownsite(rng, grid, w, h, cellW, cellH, scene, terrain) {
  const water = scene.water;
  let best = null;
  let bestScore = Infinity;
  const cx = w / 2;
  const cy = h / 2;
  const neighbourhoodBlock = (ix, iy) => {
    let blocked = 0;
    let total = 0;
    for (let dy = -3; dy <= 3; dy++) {
      for (let dx = -3; dx <= 3; dx++) {
        const nx = ix + dx;
        const ny = iy + dy;
        total++;
        if (nx < 0 || nx >= GRID_W || ny < 0 || ny >= GRID_H) {
          blocked++;
          continue;
        }
        if (grid[ny][nx] >= 8)
          blocked++;
      }
    }
    return total ? blocked / total : 1;
  };
  for (let iy = 0; iy < GRID_H; iy++) {
    for (let ix = 0; ix < GRID_W; ix++) {
      const c = grid[iy][ix];
      if (c >= 8)
        continue;
      const x = (ix + 0.5) * cellW;
      const y = (iy + 0.5) * cellH;
      const m = Math.min(w, h) * 0.12;
      if (x < m || x > w - m || y < m || y > h - m)
        continue;
      const nb = neighbourhoodBlock(ix, iy);
      if (nb > 0.6)
        continue;
      let score = c + nb * 6 + 8e-4 * Math.hypot(x - cx, y - cy);
      if ((terrain === "coastal" || terrain === "river" || terrain === "lake") && water) {
        let dmin = 1e9;
        for (const v of water) {
          const d = Math.hypot(v.x - x, v.y - y);
          if (d < dmin)
            dmin = d;
        }
        score += 0.02 * Math.abs(dmin - Math.min(w, h) * 0.08);
      }
      if (score < bestScore) {
        bestScore = score;
        best = { x, y };
      }
    }
  }
  return best;
}
function fallbackNetwork(rng, grid, w, h, cellW, cellH, scene, terrain) {
  const town = findOpenTownsite(rng, grid, w, h, cellW, cellH, scene, terrain);
  if (town === null)
    return [];
  let bestRoad = null;
  for (const edge of ["N", "E", "S", "W"]) {
    const used = [];
    for (let a = 0; a < 4; a++) {
      const ep = pickEdgeInboundPoint(rng, edge, w, h, used, grid, cellW, cellH);
      if (ep === null)
        break;
      used.push(ep.t);
      const pl = routeRoad(grid, ep.pt, town, cellW, cellH, w, h, [true, false]);
      if (pl !== null) {
        bestRoad = pl;
        break;
      }
    }
    if (bestRoad !== null)
      break;
  }
  if (bestRoad !== null) {
    stampRoadCostWeighted(grid, bestRoad, cellW, cellH);
    return [{ points: bestRoad, class: "arterial", role: "primary", side: "A", town_site: town }];
  }
  const dx = w / 2 - town.x;
  const dy = h / 2 - town.y;
  const dl = Math.hypot(dx, dy) || 1;
  const stubLen = Math.min(w, h) * 0.12;
  const stubEnd = { x: town.x + dx / dl * stubLen, y: town.y + dy / dl * stubLen };
  return [{ points: [town, stubEnd], class: "arterial", role: "primary", side: "A", town_site: town }];
}
function pullTownSiteToCoast(townSite, scene, w, h) {
  const water = scene.water;
  if (!water || water.length < 2)
    return townSite;
  const beachDist = Math.min(w, h) * 0.02;
  const harbourOffset = beachDist + 8;
  const edgeMargin = harbourOffset + 6;
  const onCanvas = (px, py) => px >= -edgeMargin && px <= w + edgeMargin && py >= -edgeMargin && py <= h + edgeMargin;
  const tx = townSite.x;
  const ty = townSite.y;
  let bestD2 = Infinity;
  let bestPt = null;
  let bestInward = null;
  const n = water.length;
  for (let i = 0; i < n; i++) {
    const a = water[i];
    const b = water[(i + 1) % n];
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const seg2 = dx * dx + dy * dy;
    let px;
    let py;
    if (seg2 < 1e-9) {
      px = a.x;
      py = a.y;
    } else {
      const t = Math.max(0, Math.min(1, ((tx - a.x) * dx + (ty - a.y) * dy) / seg2));
      px = a.x + dx * t;
      py = a.y + dy * t;
    }
    if (!onCanvas(px, py))
      continue;
    const d2 = (tx - px) ** 2 + (ty - py) ** 2;
    if (d2 < bestD2) {
      bestD2 = d2;
      bestPt = { x: px, y: py };
      const ix = tx - px;
      const iy = ty - py;
      const il = Math.hypot(ix, iy);
      if (il > 1e-6)
        bestInward = { x: ix / il, y: iy / il };
      else {
        const nl = Math.hypot(dx, dy) || 1;
        bestInward = { x: -dy / nl, y: dx / nl };
      }
    }
  }
  if (bestPt === null || bestInward === null)
    return townSite;
  const nearDist = Math.sqrt(bestD2);
  if (nearDist <= harbourOffset * 1.5)
    return townSite;
  {
    const corridor = nearDist + 260;
    const corridor2 = corridor * corridor;
    let bestCentre = Infinity;
    for (let i = 0; i < n; i++) {
      const a = water[i];
      const b = water[(i + 1) % n];
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const seg2 = dx * dx + dy * dy;
      let px;
      let py;
      if (seg2 < 1e-9) {
        px = a.x;
        py = a.y;
      } else {
        const t = Math.max(0, Math.min(1, ((tx - a.x) * dx + (ty - a.y) * dy) / seg2));
        px = a.x + dx * t;
        py = a.y + dy * t;
      }
      if (!onCanvas(px, py))
        continue;
      if ((tx - px) ** 2 + (ty - py) ** 2 > corridor2)
        continue;
      const cDist = Math.hypot(px - w / 2, py - h / 2);
      if (cDist < bestCentre) {
        bestCentre = cDist;
        bestPt = { x: px, y: py };
        const ix = tx - px;
        const iy = ty - py;
        const il = Math.hypot(ix, iy);
        if (il > 1e-6)
          bestInward = { x: ix / il, y: iy / il };
        else {
          const nl = Math.hypot(dx, dy) || 1;
          bestInward = { x: -dy / nl, y: dx / nl };
        }
      }
    }
  }
  let hx = bestPt.x + bestInward.x * harbourOffset;
  let hy = bestPt.y + bestInward.y * harbourOffset;
  hx = Math.max(edgeMargin, Math.min(w - edgeMargin, hx));
  hy = Math.max(edgeMargin, Math.min(h - edgeMargin, hy));
  return { x: hx, y: hy };
}
function finalizeWithPull(roads, scene, terrain, w, h, bridge = null) {
  if (!roads.length)
    return roads;
  let townSite = null;
  for (const r of roads) {
    if (r.town_site) {
      townSite = r.town_site;
      break;
    }
  }
  if (townSite === null)
    townSite = computeTownSite(roads, bridge, w, h);
  if (townSite !== null && bridge === null && scene.water && (terrain === "coastal" || terrain === "river" || terrain === "lake")) {
    townSite = pullTownSiteToCoast(townSite, scene, w, h);
  }
  if (townSite !== null) {
    const arterialPolys = roads.filter((r) => r.role === "primary" || r.role === "branch" || r.role === "bridge").map((r) => r.points).filter((p) => p && p.length >= 2);
    if (arterialPolys.length) {
      const snapped = closestPointOnPolylines(townSite, arterialPolys);
      if (snapped !== null)
        townSite = snapped;
    }
  }
  if (townSite !== null) {
    for (const road of roads)
      road.town_site = townSite;
  }
  return roads;
}
function buildRoadNetwork(rng, scene, w, h, terrain, enabledEdges) {
  const { grid, cellW, cellH } = buildCostGrid(scene, w, h);
  const entries = [];
  for (const edge of ["N", "E", "S", "W"]) {
    if (!enabledEdges[edge])
      continue;
    const usedT = [];
    const ep = pickEdgeInboundPoint(rng, edge, w, h, usedT, grid, cellW, cellH);
    if (ep === null)
      continue;
    entries.push({ pt: ep.pt, edge });
  }
  const finalize = (roads2, bridge2 = null) => {
    const out = finalizeWithPull(roads2, scene, terrain, w, h, bridge2);
    const ts = out.length ? out[0].town_site ?? null : null;
    return { roads: out, townSite: ts };
  };
  if (!entries.length) {
    return finalize(fallbackNetwork(rng, grid, w, h, cellW, cellH, scene, terrain));
  }
  const nEdges = entries.length;
  if (nEdges === 1) {
    const e = entries[0];
    const meet = findMeetingPoint(rng, grid, w, h, cellW, cellH, scene, null, [e.pt]);
    let polyline = null;
    if (meet !== null) {
      polyline = routeRoad(grid, e.pt, meet.pt, cellW, cellH, w, h, [true, false]);
    }
    if (meet === null || polyline === null) {
      return finalize(fallbackNetwork(rng, grid, w, h, cellW, cellH, scene, terrain));
    }
    return finalize([{ points: polyline, class: "arterial", role: "primary", side: "A", town_site: meet.pt }]);
  }
  const primaryIndices = choosePrimaryPair(entries, scene, terrain, w, h) ?? [0, 1];
  const [pI, pJ] = primaryIndices;
  const primaryA = entries[pI];
  const primaryB = entries[pJ];
  const branches = entries.filter((_, k) => k !== pI && k !== pJ);
  const roads = [];
  let bridge = null;
  if (terrain === "river" && scene.water) {
    const sideA = waterSideOfPoint(primaryA.pt, scene, w, h);
    const sideB = waterSideOfPoint(primaryB.pt, scene, w, h);
    if (sideA !== sideB && scene.centreline) {
      const cline = scene.centreline;
      let best = null;
      let bestCost = Infinity;
      const lo = Math.floor(cline.length * 0.12);
      const hi = Math.floor(cline.length * 0.88);
      for (let i = lo; i < hi; i++) {
        const p = cline[i];
        if (p.x < w * 0.08 || p.x > w * 0.92)
          continue;
        if (p.y < h * 0.08 || p.y > h * 0.92)
          continue;
        const cost = Math.hypot(primaryA.pt.x - p.x, primaryA.pt.y - p.y) + Math.hypot(primaryB.pt.x - p.x, primaryB.pt.y - p.y) + Math.hypot(p.x - w / 2, p.y - h / 2) * 1.5;
        if (cost < bestCost) {
          bestCost = cost;
          best = p;
        }
      }
      if (best !== null) {
        const bankA = bankEndpointForBridge(best, scene, w, h, sideA);
        const bankB = bankEndpointForBridge(best, scene, w, h, sideB);
        bridge = { centre: best, banks: { [sideA]: bankA, [sideB]: bankB } };
        clearShorePenaltyNear(grid, bankA, cellW, cellH, 2);
        clearShorePenaltyNear(grid, bankB, cellW, cellH, 2);
        const segA = routeRoad(grid, primaryA.pt, bankA, cellW, cellH, w, h, [true, false]);
        const segB = routeRoad(grid, bankB, primaryB.pt, cellW, cellH, w, h, [false, true]);
        if (segA !== null) {
          stampRoadCostWeighted(grid, segA, cellW, cellH);
          roads.push({ points: segA, class: "arterial", role: "primary", side: sideA });
        }
        if (segB !== null) {
          stampRoadCostWeighted(grid, segB, cellW, cellH);
          roads.push({ points: segB, class: "arterial", role: "primary", side: sideB });
        }
      }
    }
  }
  if (bridge === null) {
    const polyline = routeRoad(grid, primaryA.pt, primaryB.pt, cellW, cellH, w, h, [true, true]);
    if (polyline !== null) {
      stampRoadCostWeighted(grid, polyline, cellW, cellH, 14, 14);
      roads.push({ points: polyline, class: "arterial", role: "primary", side: "A" });
    }
  }
  if (roads.length) {
    const primaryPolylines = roads.filter((r) => r.role === "primary").map((r) => r.points);
    for (const branch of branches) {
      let targetPolys;
      if (terrain === "river" && scene.water) {
        const branchSide = waterSideOfPoint(branch.pt, scene, w, h);
        targetPolys = roads.filter((r) => r.role === "primary" && r.side === branchSide).map((r) => r.points);
        if (!targetPolys.length) {
          const meet = findMeetingPoint(rng, grid, w, h, cellW, cellH, scene, null, [branch.pt]);
          if (meet === null)
            continue;
          const pl2 = routeRoad(grid, branch.pt, meet.pt, cellW, cellH, w, h, [true, false]);
          if (pl2 === null)
            continue;
          stampRoadCostWeighted(grid, pl2, cellW, cellH);
          roads.push({ points: pl2, class: "arterial", role: "branch", side: branchSide });
          continue;
        }
      } else {
        targetPolys = primaryPolylines;
      }
      const junction = closestPointOnPolylines(branch.pt, targetPolys);
      if (junction === null)
        continue;
      const pl = routeRoad(grid, branch.pt, junction, cellW, cellH, w, h, [true, false]);
      if (pl === null)
        continue;
      stampRoadCostWeighted(grid, pl, cellW, cellH);
      roads.push({ points: pl, class: "arterial", role: "branch" });
    }
  }
  if (bridge !== null) {
    roads.push({
      points: [bridge.banks["A"], bridge.centre, bridge.banks["B"]],
      class: "bridge",
      role: "bridge"
    });
  }
  if (!roads.length) {
    return finalize(fallbackNetwork(rng, grid, w, h, cellW, cellH, scene, terrain));
  }
  return finalize(roads, bridge);
}

// src/buildings.ts
var INF2 = Infinity;
var ZONE_RADIUS_BY_SIZE = {
  hamlet: 90,
  village: 110,
  small_town: 140,
  town: 170,
  large_town: 200,
  small_city: 130,
  city: 172,
  large_city: 222,
  metropolis: 285
};
var ARM_LENGTH_BY_SIZE = {
  hamlet: null,
  village: null,
  small_town: null,
  town: null,
  large_town: null,
  small_city: 90,
  city: 140,
  large_city: 200,
  metropolis: 270
};
var HOUSE_TARGET_BY_SIZE = {
  hamlet: 6,
  village: 14,
  small_town: 28,
  town: 50,
  large_town: 85,
  small_city: 180,
  city: 320,
  large_city: 500,
  metropolis: 800
};
var SUB_ROAD_COUNT_BY_SIZE = {
  hamlet: 1,
  village: 2,
  small_town: 3,
  town: 4,
  large_town: 6,
  small_city: 8,
  city: 12,
  large_city: 17,
  metropolis: 24
};
var MAP_SIZE_BY_SIZE = {
  hamlet: 720,
  village: 760,
  small_town: 820,
  town: 900,
  large_town: 980,
  small_city: 900,
  city: 1020,
  large_city: 1180,
  metropolis: 1400
};
var HOUSE_LONG_MIN = 16;
var HOUSE_LONG_MAX = 24;
var HOUSE_SHORT_MIN = 10;
var HOUSE_SHORT_MAX = 14;
var HOUSE_INTERVAL_MULT = 1.55;
var SETBACK_MIN = 12;
var SETBACK_MAX = 16;
function stampRoadAvoidance(grid, polyline, cellW, cellH, radius = 5, penalty = 22) {
  const stamped = /* @__PURE__ */ new Set();
  for (const p of polyline) {
    const ix0 = Math.max(0, Math.min(GRID_W - 1, Math.floor(p.x / cellW)));
    const iy0 = Math.max(0, Math.min(GRID_H - 1, Math.floor(p.y / cellH)));
    for (let dy = -radius; dy <= radius; dy++) {
      for (let dx = -radius; dx <= radius; dx++) {
        const nx = ix0 + dx;
        const ny = iy0 + dy;
        if (nx < 0 || nx >= GRID_W || ny < 0 || ny >= GRID_H)
          continue;
        const k = ny * GRID_W + nx;
        if (stamped.has(k))
          continue;
        stamped.add(k);
        if (grid[ny][nx] === INF2)
          continue;
        const d = Math.max(Math.abs(dx), Math.abs(dy));
        const attenuation = d <= radius ? 1 - 0.7 * (d / radius) : 0;
        grid[ny][nx] = Math.min(grid[ny][nx] + penalty * attenuation, 60);
      }
    }
  }
}
function clearAnchorCells(grid, anchorPt, cellW, cellH, radius = 2) {
  const ix0 = Math.max(0, Math.min(GRID_W - 1, Math.floor(anchorPt.x / cellW)));
  const iy0 = Math.max(0, Math.min(GRID_H - 1, Math.floor(anchorPt.y / cellH)));
  const cleared = [];
  for (let dy = -radius; dy <= radius; dy++) {
    for (let dx = -radius; dx <= radius; dx++) {
      const nx = ix0 + dx;
      const ny = iy0 + dy;
      if (nx < 0 || nx >= GRID_W || ny < 0 || ny >= GRID_H)
        continue;
      if (grid[ny][nx] === INF2)
        continue;
      cleared.push([nx, ny, grid[ny][nx]]);
      grid[ny][nx] = 1;
    }
  }
  return cleared;
}
function restoreClearedCells(grid, cleared) {
  for (const [nx, ny, original] of cleared)
    grid[ny][nx] = original;
}
function pointNearAnyPolyline(pt, polylines, threshold) {
  const t2 = threshold * threshold;
  for (const poly of polylines) {
    for (let i = 0; i < poly.length - 1; i++) {
      const a = poly[i];
      const b = poly[i + 1];
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const segL2 = dx * dx + dy * dy;
      let cx;
      let cy;
      if (segL2 === 0) {
        cx = a.x;
        cy = a.y;
      } else {
        let t = ((pt.x - a.x) * dx + (pt.y - a.y) * dy) / segL2;
        t = Math.max(0, Math.min(1, t));
        cx = a.x + t * dx;
        cy = a.y + t * dy;
      }
      const d2 = (pt.x - cx) ** 2 + (pt.y - cy) ** 2;
      if (d2 <= t2)
        return true;
    }
  }
  return false;
}
function runsAlongside(polyline, existing, skipFrac = 0.15, thresholdDist = 14, maxOverlapFrac = 0.25) {
  if (!existing.length || polyline.length < 2)
    return false;
  const samples = [];
  for (let i = 0; i < polyline.length - 1; i++) {
    const a = polyline[i];
    const b = polyline[i + 1];
    const d = Math.hypot(b.x - a.x, b.y - a.y);
    const nSamples = Math.max(2, Math.floor(d / 4));
    for (let k = 0; k < nSamples; k++) {
      const t = k / nSamples;
      samples.push({ x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t });
    }
  }
  samples.push(polyline[polyline.length - 1]);
  const startIdx = Math.floor(samples.length * skipFrac);
  const endIdx = Math.floor(samples.length * (1 - skipFrac));
  const checked = endIdx > startIdx ? samples.slice(startIdx, endIdx) : samples.slice(startIdx);
  if (!checked.length)
    return false;
  let closeCount = 0;
  for (const p of checked) {
    if (pointNearAnyPolyline(p, existing, thresholdDist))
      closeCount++;
  }
  return closeCount / checked.length > maxOverlapFrac;
}
function tryPlaceSubroad(rng, grid, scene, cellW, cellH, w, h, anchorPt, chosenAngles, existingPolylines, zoneRadius) {
  const MAX_ANGLE_TRIES = 10;
  for (let attempt = 0; attempt < MAX_ANGLE_TRIES; attempt++) {
    let bestAng = null;
    let bestSep = -1;
    for (let k = 0; k < 8; k++) {
      const cand = (rng() - 0.5) * 2 * Math.PI;
      let minSep = Math.PI;
      for (const a of chosenAngles) {
        const d = Math.abs(((cand - a) % (2 * Math.PI) + 3 * Math.PI) % (2 * Math.PI) - Math.PI);
        if (d < minSep)
          minSep = d;
      }
      if (minSep > bestSep) {
        bestSep = minSep;
        bestAng = cand;
      }
    }
    if (bestAng === null)
      continue;
    const length = zoneRadius * (0.5 + rng() * 0.4);
    let endX = anchorPt.x + Math.cos(bestAng) * length;
    let endY = anchorPt.y + Math.sin(bestAng) * length;
    endX = Math.max(8, Math.min(w - 8, endX));
    endY = Math.max(8, Math.min(h - 8, endY));
    const endPt = { x: endX, y: endY };
    if (scene.water && pointInPolygon(endPt, scene.water))
      continue;
    let inRidge = false;
    if (scene.ridges) {
      for (const ridge of scene.ridges) {
        if (pointInPolygon(endPt, ridge)) {
          inRidge = true;
          break;
        }
      }
    }
    if (inRidge)
      continue;
    const aCell = worldToGrid(anchorPt, cellW, cellH);
    const eCell = worldToGrid(endPt, cellW, cellH);
    const path = astar(grid, aCell, eCell);
    if (path === null || path.length < 2)
      continue;
    let polyline = pathToPolyline(path, cellW, cellH);
    polyline[0] = anchorPt;
    polyline[polyline.length - 1] = endPt;
    polyline = chaikinOpen(polyline, 3);
    polyline[0] = anchorPt;
    polyline[polyline.length - 1] = endPt;
    if (runsAlongside(polyline, existingPolylines, 0.15, 14))
      continue;
    return { polyline, angle: bestAng };
  }
  return null;
}
function generateSubRoads(rng, scene, w, h, townSite, zoneRadius, count, terrain) {
  if (count <= 0)
    return [];
  const { grid, cellW, cellH } = buildCostGrid(scene, w, h);
  const roads = scene.roads;
  for (const road of roads) {
    if (road.class === "bridge")
      continue;
    stampRoadAvoidance(grid, road.points, cellW, cellH, 5, 22);
  }
  const anchorPoints = [];
  for (const road of roads) {
    if (road.class === "bridge")
      continue;
    if (road.role !== "primary" && road.role !== "branch")
      continue;
    const pts = road.points;
    for (let i = 0; i < pts.length; i += 4) {
      const p = pts[i];
      const d = Math.hypot(p.x - townSite.x, p.y - townSite.y);
      if (d <= zoneRadius * 0.7)
        anchorPoints.push(p);
    }
  }
  if (!anchorPoints.length)
    return [];
  const existingAngles = [];
  for (const road of roads) {
    if (road.class === "bridge")
      continue;
    if (road.role !== "primary" && road.role !== "branch")
      continue;
    const pts = road.points;
    if (pts.length < 2)
      continue;
    existingAngles.push(Math.atan2(pts[pts.length - 1].y - pts[0].y, pts[pts.length - 1].x - pts[0].x));
  }
  const existingPolylines = roads.filter((r) => r.class !== "bridge").map((r) => r.points);
  const newRoads = [];
  const chosenAngles = existingAngles.slice();
  for (let i = 0; i < count; i++) {
    const anchorPt = anchorPoints[Math.floor(rng() * anchorPoints.length)];
    const cleared = clearAnchorCells(grid, anchorPt, cellW, cellH, 2);
    let placed = null;
    try {
      placed = tryPlaceSubroad(rng, grid, scene, cellW, cellH, w, h, anchorPt, chosenAngles, existingPolylines, zoneRadius);
    } finally {
      restoreClearedCells(grid, cleared);
    }
    if (placed === null)
      continue;
    chosenAngles.push(placed.angle);
    stampRoadAvoidance(grid, placed.polyline, cellW, cellH, 5, 22);
    newRoads.push({ points: placed.polyline, class: "sub_road", role: "sub_road" });
  }
  return newRoads;
}
function placeHouses(rng, scene, w, h, townSite, zoneRadius, targetCount, terrain) {
  const houses = [];
  const occupied = [];
  const avgLong = (HOUSE_LONG_MIN + HOUSE_LONG_MAX) / 2;
  const sampleInterval = avgLong * HOUSE_INTERVAL_MULT;
  const densityAt = (pt) => {
    const d = Math.hypot(pt.x - townSite.x, pt.y - townSite.y);
    const t = d / zoneRadius;
    if (t < 0.4)
      return 1;
    if (t < 1)
      return 1 - (t - 0.4) / 0.6 * 0.8;
    return 0;
  };
  const collides = (cx, cy, halfLong, halfShort) => {
    const r = Math.max(halfLong, halfShort) * 1.15;
    for (const [ox, oy, orad] of occupied) {
      if (Math.hypot(cx - ox, cy - oy) < (r + orad) * 1.05)
        return true;
    }
    return false;
  };
  const inObstacle = (cx, cy, halfLong, halfShort) => {
    const pt = { x: cx, y: cy };
    if (scene.water && pointInPolygon(pt, scene.water))
      return true;
    if (scene.ridges) {
      for (const ridge of scene.ridges) {
        if (pointInPolygon(pt, ridge))
          return true;
      }
    }
    if (scene.forests) {
      for (const f of scene.forests) {
        if (pointInPolygon(pt, f.polygon))
          return true;
      }
    }
    const margin = Math.max(halfLong, halfShort) + 4;
    if (cx < margin || cx > w - margin)
      return true;
    if (cy < margin || cy > h - margin)
      return true;
    return false;
  };
  const inZone = (pt) => Math.hypot(pt.x - townSite.x, pt.y - townSite.y) <= zoneRadius;
  const roads = scene.roads;
  outer:
    for (const road of roads) {
      if (road.class === "bridge")
        continue;
      const pts = road.points;
      if (pts.length < 2)
        continue;
      const segLengths = [];
      for (let k = 0; k < pts.length - 1; k++) {
        segLengths.push(Math.hypot(pts[k + 1].x - pts[k].x, pts[k + 1].y - pts[k].y));
      }
      const totalLength = segLengths.reduce((s2, v) => s2 + v, 0);
      let s = sampleInterval * 0.5;
      while (s < totalLength) {
        let acc = 0;
        let segI = -1;
        let segS = 0;
        for (let k = 0; k < segLengths.length; k++) {
          if (acc + segLengths[k] >= s) {
            segI = k;
            segS = s - acc;
            break;
          }
          acc += segLengths[k];
        }
        if (segI === -1)
          break;
        const a = pts[segI];
        const b = pts[segI + 1];
        const segL = segLengths[segI] || 1;
        const t = segS / segL;
        const roadPt = { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t };
        if (!inZone(roadPt)) {
          s += sampleInterval;
          continue;
        }
        const tx = (b.x - a.x) / segL;
        const ty = (b.y - a.y) / segL;
        const perpL = [-ty, tx];
        const perpR = [ty, -tx];
        const density = densityAt(roadPt);
        for (const perp of [perpL, perpR]) {
          if (rng() > density)
            continue;
          const houseLong = HOUSE_LONG_MIN + rng() * (HOUSE_LONG_MAX - HOUSE_LONG_MIN);
          const houseShort = HOUSE_SHORT_MIN + rng() * (HOUSE_SHORT_MAX - HOUSE_SHORT_MIN);
          const setback = SETBACK_MIN + rng() * (SETBACK_MAX - SETBACK_MIN);
          let cx = roadPt.x + perp[0] * setback;
          let cy = roadPt.y + perp[1] * setback;
          const jitter = (rng() - 0.5) * sampleInterval * 0.3;
          cx += tx * jitter;
          cy += ty * jitter;
          const hl = houseLong / 2;
          const hs = houseShort / 2;
          if (inObstacle(cx, cy, hl, hs))
            continue;
          if (collides(cx, cy, hl, hs))
            continue;
          const angle = Math.atan2(ty, tx);
          houses.push({ centre: { x: cx, y: cy }, size: [houseLong, houseShort], angle });
          occupied.push([cx, cy, Math.max(hl, hs)]);
          if (houses.length >= targetCount)
            break outer;
        }
        s += sampleInterval;
      }
    }
  const rescueFloor = Math.max(3, Math.floor(targetCount * 0.12));
  if (houses.length < rescueFloor) {
    let attempts = 0;
    const maxAttempts = targetCount * 40;
    while (houses.length < targetCount && attempts < maxAttempts) {
      attempts++;
      const ang = rng() * 2 * Math.PI;
      const rad = zoneRadius * Math.sqrt(rng());
      const cx = townSite.x + Math.cos(ang) * rad;
      const cy = townSite.y + Math.sin(ang) * rad;
      if (rng() > densityAt({ x: cx, y: cy }))
        continue;
      const houseLong = HOUSE_LONG_MIN + rng() * (HOUSE_LONG_MAX - HOUSE_LONG_MIN);
      const houseShort = HOUSE_SHORT_MIN + rng() * (HOUSE_SHORT_MAX - HOUSE_SHORT_MIN);
      const hl = houseLong / 2;
      const hs = houseShort / 2;
      if (inObstacle(cx, cy, hl, hs))
        continue;
      if (collides(cx, cy, hl, hs))
        continue;
      const angle = Math.atan2(townSite.y - cy, townSite.x - cx);
      houses.push({ centre: { x: cx, y: cy }, size: [houseLong, houseShort], angle });
      occupied.push([cx, cy, Math.max(hl, hs)]);
    }
  }
  return houses;
}
function segmentsIntersect(ax, ay, bx, by, cx, cy, dx, dy) {
  const ccw = (px, py, qx, qy, rx, ry) => (ry - py) * (qx - px) - (qy - py) * (rx - px);
  const d1 = ccw(cx, cy, dx, dy, ax, ay);
  const d2 = ccw(cx, cy, dx, dy, bx, by);
  const d3 = ccw(ax, ay, bx, by, cx, cy);
  const d4 = ccw(ax, ay, bx, by, dx, dy);
  return d1 > 0 !== d2 > 0 && d3 > 0 !== d4 > 0;
}
function builtAreaPolys(scene) {
  const avoid = [];
  const footprint = scene.footprint;
  if (footprint && footprint.length >= 3)
    avoid.push(footprint);
  const walls = scene.walls;
  if (walls && walls.ring && walls.ring.length)
    avoid.push(walls.ring);
  return avoid;
}
function placeRibbonHouses(rng, scene, townSite, zoneRadius, size, w, h, houses) {
  const roads = scene.roads;
  const footprint = scene.footprint;
  const water = scene.water;
  const blocked = (pt) => {
    if (water && pointInPolygon(pt, water))
      return true;
    if (scene.ridges) {
      for (const ridge of scene.ridges) {
        if (pointInPolygon(pt, ridge))
          return true;
      }
    }
    if (footprint && pointInPolygon(pt, footprint))
      return true;
    return false;
  };
  const newHouses = [];
  const reach = zoneRadius * 1.8;
  for (const road of roads) {
    if (road.class === "bridge")
      continue;
    if (road.role !== "primary" && road.role !== "branch")
      continue;
    const pts = road.points;
    if (pts.length < 2)
      continue;
    for (let i = 0; i < pts.length; i++) {
      const p = pts[i];
      const dTown = Math.hypot(p.x - townSite.x, p.y - townSite.y);
      if (footprint && pointInPolygon(p, footprint))
        continue;
      if (dTown > reach)
        continue;
      const t = Math.max(0, Math.min(1, (dTown - zoneRadius) / (reach - zoneRadius)));
      const prob = 0.5 * (1 - t);
      const nb = pts[Math.min(i + 1, pts.length - 1)];
      let tx = nb.x - p.x;
      let ty = nb.y - p.y;
      const tl = Math.hypot(tx, ty) || 1;
      tx /= tl;
      ty /= tl;
      const px = -ty;
      const py = tx;
      for (const sgn of [-1, 1]) {
        if (rng() > prob)
          continue;
        const off = zoneRadius * 0.04 + 6 + rng() * 4;
        const hx = p.x + px * off * sgn;
        const hy = p.y + py * off * sgn;
        if (blocked({ x: hx, y: hy }))
          continue;
        let tooClose = false;
        for (const h2 of newHouses) {
          if (Math.hypot(hx - h2.centre.x, hy - h2.centre.y) < 10) {
            tooClose = true;
            break;
          }
        }
        if (tooClose)
          continue;
        const ang = Math.atan2(ty, tx);
        const hw = 14 + rng() * 6;
        const hh = 9 + rng() * 3;
        newHouses.push({ centre: { x: hx, y: hy }, size: [hw, hh], angle: ang });
      }
    }
  }
  for (const nh of newHouses)
    houses.push(nh);
  return newHouses;
}
function rngShuffle(rng, lst) {
  for (let i = lst.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    const tmp = lst[i];
    lst[i] = lst[j];
    lst[j] = tmp;
  }
}
var OUTBUILDING_COUNTS = {
  // Small settlements get a handful of outlying functional buildings for
  // character — a mill, an inn, a stable — with no generic sprawl (that's a
  // city phenomenon).  Numbers grow with size.
  village: { mill: 1, inn: 1, stable: 1, generic: 0 },
  small_town: { mill: 1, inn: 1, stable: 1, generic: 0 },
  town: { mill: 1, inn: 1, stable: 2, generic: 0 },
  large_town: { mill: 1, inn: 2, stable: 2, generic: 0 },
  // Cities get more, plus generic sprawl trailing the approach roads.
  small_city: { mill: 1, inn: 1, stable: 1, generic: 0 },
  city: { mill: 1, inn: 2, stable: 2, generic: 4 },
  large_city: { mill: 2, inn: 3, stable: 3, generic: 9 },
  metropolis: { mill: 2, inn: 4, stable: 4, generic: 16 }
};
function placeOutbuildings(rng, scene, townSite, zoneRadius, size, w, h) {
  const water = scene.water;
  const forests = scene.forests ?? [];
  const ridges = scene.ridges ?? [];
  const footprint = scene.footprint;
  const roads = scene.roads ?? [];
  const wallRings = [];
  {
    const walls = scene.walls;
    if (walls) {
      if (walls.rings && walls.rings.length)
        for (const r of walls.rings) {
          if (r && r.length >= 3)
            wallRings.push(r);
        }
      else if (walls.ring && walls.ring.length >= 3)
        wallRings.push(walls.ring);
    }
  }
  const counts = OUTBUILDING_COUNTS[size] ?? { mill: 0, inn: 0, stable: 0 };
  const placed = [];
  const outlanes = [];
  const beachDist = Math.min(w, h) * 0.02;
  const waterMargin = beachDist + 4;
  const distToPoly = (pt, poly) => {
    let best = Infinity;
    for (let i = 0; i < poly.length; i++) {
      const a = poly[i];
      const b = poly[(i + 1) % poly.length];
      const ex = b.x - a.x, ey = b.y - a.y;
      const s2 = ex * ex + ey * ey || 1;
      let t = ((pt.x - a.x) * ex + (pt.y - a.y) * ey) / s2;
      t = Math.max(0, Math.min(1, t));
      const qx = a.x + ex * t, qy = a.y + ey * t;
      const d = Math.hypot(pt.x - qx, pt.y - qy);
      if (d < best)
        best = d;
    }
    return best;
  };
  const distToFootprint = (pt) => {
    if (!footprint || footprint.length < 2)
      return Infinity;
    return distToPoly(pt, footprint);
  };
  const openGround = (pt, clear = 14, checkBuildings = true, footprintClear = 0) => {
    if (water && pointInPolygon(pt, water))
      return false;
    for (const r of ridges) {
      if (pointInPolygon(pt, r))
        return false;
    }
    for (const f of forests) {
      if (pointInPolygon(pt, f.polygon))
        return false;
    }
    if (footprint && pointInPolygon(pt, footprint))
      return false;
    if (footprintClear > 0 && distToFootprint(pt) < footprintClear)
      return false;
    for (const ring of wallRings) {
      if (pointInPolygon(pt, ring))
        return false;
      const wc = footprintClear > 0 ? footprintClear : clear;
      if (distToPoly(pt, ring) < wc)
        return false;
    }
    if (checkBuildings) {
      for (const ob of placed) {
        if (Math.hypot(pt.x - ob.centre.x, pt.y - ob.centre.y) < clear + ob.size[0] * 0.5)
          return false;
      }
    }
    return true;
  };
  const acceptCandidates = (cand, count, type, bsize) => {
    let n = 0;
    const sep = bsize[0] * 0.5;
    for (const [pos, ang] of cand) {
      if (n >= count)
        break;
      if (!openGround(pos, sep, true))
        continue;
      placed.push({ type, centre: pos, size: bsize, angle: ang });
      n++;
    }
  };
  if (water && counts.mill > 0) {
    const n = water.length;
    const cand = [];
    for (let i = 0; i < n; i += 2) {
      const wx = water[i].x;
      const wy = water[i].y;
      const dTown = Math.hypot(wx - townSite.x, wy - townSite.y);
      if (dTown < zoneRadius * 0.8 || dTown > zoneRadius * 1.8)
        continue;
      let ix = townSite.x - wx;
      let iy = townSite.y - wy;
      const il = Math.hypot(ix, iy) || 1;
      ix /= il;
      iy /= il;
      const mx = wx + ix * (waterMargin + 7);
      const my = wy + iy * (waterMargin + 7);
      if (openGround({ x: mx, y: my }, 16, true, 12)) {
        const bx = water[(i + 1) % n].x;
        const by = water[(i + 1) % n].y;
        cand.push([{ x: mx, y: my }, Math.atan2(by - wy, bx - wx)]);
      }
    }
    rngShuffle(rng, cand);
    acceptCandidates(cand, counts.mill, "mill", [20, 14]);
  }
  if (counts.inn > 0) {
    const cand = [];
    for (const road of roads) {
      if (road.class === "bridge")
        continue;
      if (road.role !== "primary" && road.role !== "branch")
        continue;
      const pts = road.points;
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        const dTown = Math.hypot(p.x - townSite.x, p.y - townSite.y);
        if (dTown < zoneRadius * 1.2 || dTown > zoneRadius * 2.6)
          continue;
        const nb = pts[Math.min(i + 1, pts.length - 1)];
        let tx = nb.x - p.x;
        let ty = nb.y - p.y;
        const tl = Math.hypot(tx, ty) || 1;
        tx /= tl;
        ty /= tl;
        const px = -ty;
        const py = tx;
        const off = 12 + rng() * 4;
        const sgn = rng() < 0.5 ? 1 : -1;
        const ix = p.x + px * off * sgn;
        const iy = p.y + py * off * sgn;
        if (openGround({ x: ix, y: iy }, 18, true, 16))
          cand.push([{ x: ix, y: iy }, Math.atan2(ty, tx)]);
      }
    }
    rngShuffle(rng, cand);
    acceptCandidates(cand, counts.inn, "inn", [22, 15]);
  }
  if (counts.stable > 0) {
    const cand = [];
    for (const road of roads) {
      if (road.class === "bridge")
        continue;
      if (road.role !== "primary" && road.role !== "branch")
        continue;
      const pts = road.points;
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        const dTown = Math.hypot(p.x - townSite.x, p.y - townSite.y);
        if (dTown < zoneRadius * 0.95 || dTown > zoneRadius * 1.6)
          continue;
        const nb = pts[Math.min(i + 1, pts.length - 1)];
        let tx = nb.x - p.x;
        let ty = nb.y - p.y;
        const tl = Math.hypot(tx, ty) || 1;
        tx /= tl;
        ty /= tl;
        const px = -ty;
        const py = tx;
        const off = 14 + rng() * 5;
        const sgn = rng() < 0.5 ? 1 : -1;
        const ix = p.x + px * off * sgn;
        const iy = p.y + py * off * sgn;
        if (openGround({ x: ix, y: iy }, 20, true, 18))
          cand.push([{ x: ix, y: iy }, Math.atan2(ty, tx)]);
      }
    }
    rngShuffle(rng, cand);
    acceptCandidates(cand, counts.stable, "stable", [24, 16]);
  }
  {
    const laneClear = (q) => {
      if (water && pointInPolygon(q, water))
        return false;
      for (const r of ridges)
        if (pointInPolygon(q, r))
          return false;
      return true;
    };
    const segClear = (a, b) => {
      const steps = Math.max(2, Math.floor(Math.hypot(b.x - a.x, b.y - a.y) / 10));
      for (let s = 1; s <= steps; s++) {
        const t = s / steps;
        if (!laneClear({ x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t }))
          return false;
      }
      return true;
    };
    const candidatePoints = [];
    for (const road of roads)
      for (const q of road.points)
        candidatePoints.push(q);
    const nearestLandConnectable = (pt) => {
      let best = null;
      let bestd = Infinity;
      for (const q of candidatePoints) {
        const d = Math.hypot(q.x - pt.x, q.y - pt.y);
        if (d >= bestd)
          continue;
        if (!segClear(q, pt))
          continue;
        bestd = d;
        best = q;
      }
      for (const lane of outlanes)
        for (const q of lane.points) {
          const d = Math.hypot(q.x - pt.x, q.y - pt.y);
          if (d >= bestd)
            continue;
          if (!segClear(q, pt))
            continue;
          bestd = d;
          best = q;
        }
      return [best, bestd];
    };
    const NEAR_ROAD = 16;
    const MAX_LANE = Math.min(zoneRadius * 0.9, 150);
    const dropped = /* @__PURE__ */ new Set();
    for (const ob of placed) {
      const [anchor, ad] = nearestLandConnectable(ob.centre);
      if (anchor === null) {
        dropped.add(ob);
        continue;
      }
      if (ad <= NEAR_ROAD)
        continue;
      if (ad > MAX_LANE) {
        dropped.add(ob);
        continue;
      }
      let dx = ob.centre.x - anchor.x;
      let dy = ob.centre.y - anchor.y;
      const dl = Math.hypot(dx, dy) || 1;
      dx /= dl;
      dy /= dl;
      const stop = Math.max(0, dl - ob.size[0] * 0.5);
      const end = { x: anchor.x + dx * stop, y: anchor.y + dy * stop };
      const buildCurved = (amp) => {
        const len = Math.hypot(end.x - anchor.x, end.y - anchor.y);
        const segCount = Math.max(4, Math.round(len / 28));
        const px = -dy;
        const py = dx;
        const bowDir = rng() < 0.5 ? 1 : -1;
        const bowMag = amp * (0.5 + rng() * 0.6) * bowDir;
        const phase = rng() * Math.PI * 2;
        const freq = 1.2 + rng() * 1.3;
        const pts = [];
        for (let s = 0; s <= segCount; s++) {
          const t = s / segCount;
          const bx = anchor.x + (end.x - anchor.x) * t;
          const by = anchor.y + (end.y - anchor.y) * t;
          const taper = Math.sin(t * Math.PI);
          const bow = bowMag * taper;
          const wobble = amp * 0.35 * Math.sin(phase + t * Math.PI * 2 * freq) * taper;
          const off = bow + wobble;
          pts.push({ x: bx + px * off, y: by + py * off });
        }
        pts[0] = { x: anchor.x, y: anchor.y };
        pts[pts.length - 1] = { x: end.x, y: end.y };
        for (const q of pts)
          if (!laneClear(q))
            return null;
        return pts;
      };
      const ampBase = Math.min(40, Math.max(12, Math.hypot(end.x - anchor.x, end.y - anchor.y) * 0.12));
      const curved = buildCurved(ampBase) ?? buildCurved(ampBase * 0.5) ?? buildCurved(ampBase * 0.25);
      outlanes.push({ points: curved ?? [{ x: anchor.x, y: anchor.y }, end] });
    }
    if (dropped.size) {
      for (let i = placed.length - 1; i >= 0; i--)
        if (dropped.has(placed[i]))
          placed.splice(i, 1);
    }
  }
  if (counts.generic > 0) {
    const inner = zoneRadius * 1.4;
    const outer = zoneRadius * 3.2;
    const falloff = (d) => {
      if (d <= inner)
        return 1;
      if (d >= outer)
        return 0;
      return 1 - (d - inner) / (outer - inner);
    };
    const genPts = [];
    const seeds = [];
    for (const road of roads) {
      if (road.class === "bridge")
        continue;
      if (road.role !== "primary" && road.role !== "branch")
        continue;
      const pts = road.points;
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        const dTown = Math.hypot(p.x - townSite.x, p.y - townSite.y);
        if (dTown < inner || dTown > outer)
          continue;
        if (rng() < 0.5 * falloff(dTown)) {
          const nb = pts[Math.min(i + 1, pts.length - 1)];
          let tx = nb.x - p.x;
          let ty = nb.y - p.y;
          const tl = Math.hypot(tx, ty) || 1;
          tx /= tl;
          ty /= tl;
          seeds.push([{ x: p.x, y: p.y }, { x: tx, y: ty }, dTown]);
        }
      }
    }
    rngShuffle(rng, seeds);
    let budget = counts.generic;
    for (const [sp, tan, dTown] of seeds) {
      if (budget <= 0)
        break;
      const px = -tan.y;
      const py = tan.x;
      const sgn = rng() < 0.5 ? 1 : -1;
      const baseOff = 34 + rng() * 30;
      const bx = sp.x + px * baseOff * sgn;
      const by = sp.y + py * baseOff * sgn;
      let clump = 1 + Math.floor(rng() * (1 + 2 * falloff(dTown) + 1));
      clump = Math.min(clump, budget);
      for (let k = 0; k < clump; k++) {
        const jx = bx + (rng() - 0.5) * 26;
        const jy = by + (rng() - 0.5) * 26;
        let tooClose = false;
        for (const gp of genPts) {
          if (Math.hypot(gp.x - jx, gp.y - jy) < 16) {
            tooClose = true;
            break;
          }
        }
        if (tooClose)
          continue;
        if (openGround({ x: jx, y: jy }, 9, true, 11)) {
          genPts.push({ x: jx, y: jy });
          budget -= 1;
          if (budget <= 0)
            break;
        }
      }
    }
    for (const g of genPts) {
      const gw = 11 + rng() * 6;
      const gh = 8 + rng() * 3;
      const ang = rng() * Math.PI;
      placed.push({ type: "generic", centre: g, size: [gw, gh], angle: ang });
    }
    const CLUSTER_R = 34;
    const used = new Array(genPts.length).fill(false);
    const clusters = [];
    for (let a = 0; a < genPts.length; a++) {
      if (used[a])
        continue;
      const group = [a];
      used[a] = true;
      let changed = true;
      while (changed) {
        changed = false;
        for (let b = 0; b < genPts.length; b++) {
          if (used[b])
            continue;
          for (const m of group) {
            if (Math.hypot(genPts[b].x - genPts[m].x, genPts[b].y - genPts[m].y) < CLUSTER_R) {
              group.push(b);
              used[b] = true;
              changed = true;
              break;
            }
          }
        }
      }
      clusters.push(group);
    }
    const nearestArterialPoint = (pt) => {
      let best = null;
      let bestd = Infinity;
      for (const road of roads) {
        if (road.class === "bridge")
          continue;
        if (road.role !== "primary" && road.role !== "branch")
          continue;
        for (const q of road.points) {
          const d = Math.hypot(q.x - pt.x, q.y - pt.y);
          if (d < bestd) {
            bestd = d;
            best = q;
          }
        }
      }
      return [best, bestd];
    };
    for (const group of clusters) {
      if (group.length < 2)
        continue;
      let gx = 0;
      let gy = 0;
      for (const i of group) {
        gx += genPts[i].x;
        gy += genPts[i].y;
      }
      gx /= group.length;
      gy /= group.length;
      const [anchor, ad] = nearestArterialPoint({ x: gx, y: gy });
      if (anchor === null)
        continue;
      if (ad < 16)
        continue;
      const lane = [{ x: anchor.x, y: anchor.y }, { x: gx, y: gy }];
      let far = null;
      let fard = 0;
      for (const i of group) {
        const d = Math.hypot(genPts[i].x - anchor.x, genPts[i].y - anchor.y);
        if (d > fard) {
          fard = d;
          far = genPts[i];
        }
      }
      if (far !== null && Math.hypot(far.x - gx, far.y - gy) > 22) {
        lane.push({ x: far.x, y: far.y });
      }
      let ok = true;
      for (let k = 1; k < lane.length; k++) {
        if (!openGround(lane[k], 3, false)) {
          ok = false;
          break;
        }
      }
      if (ok)
        outlanes.push({ points: lane });
    }
  }
  scene.outlanes = outlanes;
  scene.outbuildings = placed;
  return placed;
}
function ensureRiverBridge(rng, scene, w, h) {
  const roads = scene.roads || [];
  if (roads.some((r) => r.class === "bridge"))
    return;
  const cline = scene.centreline;
  const houses = scene.houses || [];
  if (!cline || cline.length < 2 || houses.length < 20)
    return;
  const a = [], b = [];
  for (const hh of houses) {
    if (waterSideOfPoint(hh.centre, scene, w, h) === "A")
      a.push(hh);
    else
      b.push(hh);
  }
  const minor = Math.min(a.length, b.length);
  if (minor < 15 || minor / houses.length < 0.12)
    return;
  const cen = (arr) => ({
    x: arr.reduce((s, p) => s + p.centre.x, 0) / arr.length,
    y: arr.reduce((s, p) => s + p.centre.y, 0) / arr.length
  });
  const ca = cen(a), cb = cen(b);
  const mid = { x: (ca.x + cb.x) / 2, y: (ca.y + cb.y) / 2 };
  let best = null, bestD = Infinity;
  const lo = Math.floor(cline.length * 0.08), hi = Math.floor(cline.length * 0.92);
  for (let i = lo; i < hi; i++) {
    const p = cline[i];
    if (p.x < w * 0.05 || p.x > w * 0.95 || p.y < h * 0.05 || p.y > h * 0.95)
      continue;
    const d = Math.hypot(p.x - mid.x, p.y - mid.y);
    if (d < bestD) {
      bestD = d;
      best = p;
    }
  }
  if (best === null)
    return;
  const bankA = bankEndpointForBridge(best, scene, w, h, "A");
  const bankB = bankEndpointForBridge(best, scene, w, h, "B");
  roads.push({ points: [bankA, best, bankB], class: "bridge", role: "bridge" });
  const stub = (bank, target) => {
    const dx = target.x - bank.x, dy = target.y - bank.y;
    const d = Math.hypot(dx, dy) || 1;
    const len = Math.min(d, 60);
    return [bank, { x: bank.x + dx / d * len, y: bank.y + dy / d * len }];
  };
  roads.push({ points: stub(bankA, ca), class: "arterial", role: "branch", side: "A" });
  roads.push({ points: stub(bankB, cb), class: "arterial", role: "branch", side: "B" });
  scene.roads = roads;
}
function buildDock(rng, scene, townSite, zoneRadius, size, w, h, terrain) {
  const water = scene.water;
  if (!water || water.length < 4)
    return null;
  const footprint = scene.footprint;
  const ref = footprint && footprint.length >= 3 ? { x: footprint.reduce((s, p) => s + p.x, 0) / footprint.length, y: footprint.reduce((s, p) => s + p.y, 0) / footprint.length } : townSite;
  const roads = scene.roads ?? [];
  const bridgePts = [];
  for (const road of roads) {
    if (road.class === "bridge")
      for (const p of road.points)
        bridgePts.push(p);
  }
  const bridgeClear = 40;
  const nearBridge = (p) => {
    for (const bp of bridgePts) {
      if (Math.hypot(bp.x - p.x, bp.y - p.y) < bridgeClear)
        return true;
    }
    return false;
  };
  const margin = Math.min(w, h) * 0.04;
  const inCanvas = (p) => p.x >= -margin && p.x <= w + margin && p.y >= -margin && p.y <= h + margin;
  let boundary;
  if (footprint && footprint.length >= 3) {
    boundary = footprint;
  } else {
    boundary = [];
    for (let i = 0; i < 48; i++) {
      const a = 2 * Math.PI * i / 48;
      boundary.push({ x: townSite.x + Math.cos(a) * zoneRadius, y: townSite.y + Math.sin(a) * zoneRadius });
    }
  }
  const beachDist = Math.min(w, h) * 0.02;
  const denseBoundary = [];
  for (let i = 0; i < boundary.length; i++) {
    const a = boundary[i];
    const b = boundary[(i + 1) % boundary.length];
    denseBoundary.push(a);
    const segLen = Math.hypot(b.x - a.x, b.y - a.y);
    const steps = Math.floor(segLen / 12);
    for (let s = 1; s < steps; s++) {
      denseBoundary.push({ x: a.x + (b.x - a.x) * (s / steps), y: a.y + (b.y - a.y) * (s / steps) });
    }
  }
  let shorePt = null;
  let ox = 0, oy = 0;
  let bestScore = Infinity;
  for (const bp of denseBoundary) {
    let dx = bp.x - ref.x;
    let dy = bp.y - ref.y;
    const dl = Math.hypot(dx, dy) || 1;
    dx /= dl;
    dy /= dl;
    let hit = Infinity;
    for (let s = 1; s <= 18; s++) {
      const q = { x: bp.x + dx * s * 4, y: bp.y + dy * s * 4 };
      if (pointInPolygonNonzero(q, water)) {
        hit = s * 4;
        break;
      }
    }
    if (!isFinite(hit))
      continue;
    if (hit > beachDist + 16)
      continue;
    if (nearBridge(bp))
      continue;
    if (hit < bestScore) {
      bestScore = hit;
      shorePt = bp;
      ox = dx;
      oy = dy;
    }
  }
  if (shorePt === null) {
    return null;
  }
  {
    let bestD = Infinity;
    let segTx = -oy, segTy = ox;
    const n = water.length;
    for (let i = 0; i < n; i++) {
      const a = water[i];
      const b = water[(i + 1) % n];
      const ex = b.x - a.x, ey = b.y - a.y;
      const s2 = ex * ex + ey * ey || 1;
      let t = ((shorePt.x - a.x) * ex + (shorePt.y - a.y) * ey) / s2;
      t = Math.max(0, Math.min(1, t));
      const qx = a.x + ex * t, qy = a.y + ey * t;
      const d = (shorePt.x - qx) ** 2 + (shorePt.y - qy) ** 2;
      if (d < bestD) {
        bestD = d;
        const el = Math.hypot(ex, ey) || 1;
        segTx = ex / el;
        segTy = ey / el;
      }
    }
    let nx = -segTy, ny = segTx;
    const reachesWater = (dx, dy) => {
      for (let s = 1; s <= 14; s++) {
        if (pointInPolygonNonzero({ x: shorePt.x + dx * s * 3, y: shorePt.y + dy * s * 3 }, water))
          return true;
      }
      return false;
    };
    if (!reachesWater(nx, ny) && reachesWater(-nx, -ny)) {
      nx = -nx;
      ny = -ny;
    }
    if (reachesWater(nx, ny)) {
      ox = nx;
      oy = ny;
    }
  }
  let landRoot = { x: shorePt.x, y: shorePt.y };
  const findLand = () => {
    for (let s = 0; s <= 24; s++) {
      const q = { x: shorePt.x - ox * s * 3, y: shorePt.y - oy * s * 3 };
      if (!pointInPolygonNonzero(q, water)) {
        landRoot = q;
        return true;
      }
    }
    return false;
  };
  if (!findLand()) {
    ox = -ox;
    oy = -oy;
    if (!findLand()) {
      return null;
    }
  }
  const inward = { x: -ox, y: -oy };
  const tx = -oy;
  const ty = ox;
  let waterlinePt = { x: landRoot.x + ox * 8, y: landRoot.y + oy * 8 };
  let gapDist = 8;
  {
    for (let s = 0; s <= 80; s++) {
      const q = { x: landRoot.x + ox * s * 3, y: landRoot.y + oy * s * 3 };
      if (pointInPolygonNonzero(q, water)) {
        waterlinePt = q;
        gapDist = s * 3;
        break;
      }
    }
  }
  if (gapDist > beachDist + 30) {
    return null;
  }
  const scaleBySize = { small_city: 0.8, city: 1, large_city: 1.25, metropolis: 1.5 };
  const sc = scaleBySize[size] ?? 0.8;
  const quayHalfLen = 34 * sc;
  const quayDepth = 12 * sc;
  const quaySpan = gapDist + quayDepth * 0.5;
  const quayCentre = {
    x: landRoot.x + ox * (quaySpan * 0.5),
    y: landRoot.y + oy * (quaySpan * 0.5)
  };
  const quayHalf = quaySpan * 0.5 + 1;
  const quay = [
    { x: quayCentre.x + tx * quayHalfLen + ox * quayHalf, y: quayCentre.y + ty * quayHalfLen + oy * quayHalf },
    { x: quayCentre.x - tx * quayHalfLen + ox * quayHalf, y: quayCentre.y - ty * quayHalfLen + oy * quayHalf },
    { x: quayCentre.x - tx * quayHalfLen - ox * quayHalf, y: quayCentre.y - ty * quayHalfLen - oy * quayHalf },
    { x: quayCentre.x + tx * quayHalfLen - ox * quayHalf, y: quayCentre.y + ty * quayHalfLen - oy * quayHalf }
  ];
  const jettyCount = size === "small_city" ? 1 : size === "metropolis" ? 3 : 2;
  const riverish = terrain === "river";
  let waterSpan = Infinity;
  {
    const stepLen = 6;
    let steps = 0;
    for (let s = 1; s <= 80; s++) {
      const q = { x: waterlinePt.x + ox * s * stepLen, y: waterlinePt.y + oy * s * stepLen };
      if (!pointInPolygonNonzero(q, water)) {
        steps = s;
        break;
      }
      steps = s;
    }
    waterSpan = steps * stepLen;
  }
  let jettyLen = ((riverish ? 22 : 34) + rng() * (riverish ? 8 : 14)) * sc;
  if (isFinite(waterSpan))
    jettyLen = Math.min(jettyLen, waterSpan * 0.45);
  jettyLen = Math.max(jettyLen, 16);
  const jettyHalfW = 3.2 * sc;
  const jetties = [];
  const boats = [];
  for (let j = 0; j < jettyCount; j++) {
    const frac = jettyCount === 1 ? 0 : (j / (jettyCount - 1) - 0.5) * 1.5;
    const root = {
      x: waterlinePt.x - ox * 4 + tx * (quayHalfLen * frac),
      y: waterlinePt.y - oy * 4 + ty * (quayHalfLen * frac)
    };
    let reach = jettyLen + 4;
    {
      let intoWater = 0;
      for (let s = 1; s <= 60; s++) {
        const q = { x: root.x + ox * s * 4, y: root.y + oy * s * 4 };
        if (pointInPolygonNonzero(q, water)) {
          intoWater = s * 4;
          break;
        }
      }
      reach = Math.max(reach, intoWater + jettyLen * 0.5);
      if (isFinite(waterSpan))
        reach = Math.min(reach, (intoWater || 0) + waterSpan * 0.45);
    }
    const tip = { x: root.x + ox * reach, y: root.y + oy * reach };
    jetties.push([
      { x: root.x + tx * jettyHalfW, y: root.y + ty * jettyHalfW },
      { x: tip.x + tx * jettyHalfW, y: tip.y + ty * jettyHalfW },
      { x: tip.x - tx * jettyHalfW, y: tip.y - ty * jettyHalfW },
      { x: root.x - tx * jettyHalfW, y: root.y - ty * jettyHalfW }
    ]);
    if (rng() < 0.7) {
      const along = 0.6 + rng() * 0.3;
      const side = rng() < 0.5 ? 1 : -1;
      const bpos = {
        x: root.x + ox * (reach * along) + tx * side * (jettyHalfW + 5 * sc),
        y: root.y + oy * (reach * along) + ty * side * (jettyHalfW + 5 * sc)
      };
      boats.push({ pos: bpos, angle: Math.atan2(oy, ox), len: (16 + rng() * 8) * sc });
    }
  }
  const houses = scene.houses ?? [];
  const overlapsHouse = (cx2, cy2, clr) => {
    for (const h2 of houses) {
      if (Math.hypot(h2.centre.x - cx2, h2.centre.y - cy2) < clr)
        return true;
    }
    return false;
  };
  const warehouses = [];
  {
    const whCount = size === "small_city" ? 1 : size === "metropolis" ? 4 : 2;
    const whW = 13 * sc;
    const whD = 9 * sc;
    const spread = quayHalfLen * 1.1;
    for (let k = 0; k < whCount; k++) {
      const frac = whCount === 1 ? 0 : (k / (whCount - 1) - 0.5) * 2;
      const cxw = waterlinePt.x - ox * (whD * 0.5 + 3) + tx * (spread * frac * 0.7);
      const cyw = waterlinePt.y - oy * (whD * 0.5 + 3) + ty * (spread * frac * 0.7);
      if (overlapsHouse(cxw, cyw, whW * 0.55 + 6))
        continue;
      const hw = whW / 2;
      const hd = whD / 2;
      warehouses.push([
        { x: cxw + tx * hw + ox * hd, y: cyw + ty * hw + oy * hd },
        { x: cxw - tx * hw + ox * hd, y: cyw - ty * hw + oy * hd },
        { x: cxw - tx * hw - ox * hd, y: cyw - ty * hw - oy * hd },
        { x: cxw + tx * hw - ox * hd, y: cyw + ty * hw - oy * hd }
      ]);
    }
  }
  let anyTipInWater = false;
  for (const jp of jetties) {
    const tip = { x: (jp[1].x + jp[2].x) / 2, y: (jp[1].y + jp[2].y) / 2 };
    if (pointInPolygonNonzero(tip, water)) {
      anyTipInWater = true;
      break;
    }
  }
  if (!anyTipInWater) {
    return null;
  }
  if (pointInPolygonNonzero(landRoot, water)) {
    return null;
  }
  {
    const houses2 = scene.houses ?? [];
    let near = false;
    const reach = 70;
    for (const h2 of houses2) {
      if (Math.hypot(h2.centre.x - landRoot.x, h2.centre.y - landRoot.y) < reach) {
        near = true;
        break;
      }
    }
    if (!near) {
      return null;
    }
  }
  let lane;
  {
    const candidates = [];
    for (const road of roads) {
      if (road.class === "bridge")
        continue;
      for (const p of road.points)
        candidates.push(p);
    }
    const sb = scene.street_base;
    if (sb)
      for (const blk of sb)
        for (const p of blk)
          candidates.push(p);
    let best = null;
    let bestD = Infinity;
    const laneStart = { x: landRoot.x - ox * 4, y: landRoot.y - oy * 4 };
    for (const cp of candidates) {
      const d = Math.hypot(cp.x - laneStart.x, cp.y - laneStart.y);
      if (d < 6 || d > 220)
        continue;
      if (d < bestD) {
        bestD = d;
        best = cp;
      }
    }
    if (best) {
      let clear = true;
      const steps = Math.max(4, Math.round(bestD / 10));
      for (let s = 0; s <= steps; s++) {
        const t = s / steps;
        const q = { x: laneStart.x + (best.x - laneStart.x) * t, y: laneStart.y + (best.y - laneStart.y) * t };
        if (pointInPolygonNonzero(q, water)) {
          clear = false;
          break;
        }
      }
      if (clear && bestD > 18) {
        const mx = (laneStart.x + best.x) / 2;
        const my = (laneStart.y + best.y) / 2;
        let px = -(best.y - laneStart.y);
        let py = best.x - laneStart.x;
        const pl = Math.hypot(px, py) || 1;
        px /= pl;
        py /= pl;
        const bow = (rng() - 0.5) * Math.min(18, bestD * 0.15);
        lane = [
          { x: laneStart.x, y: laneStart.y },
          { x: mx + px * bow, y: my + py * bow },
          { x: best.x, y: best.y }
        ];
      }
    }
  }
  return { quay, jetties, boats, warehouses, lane, shorePt, inward };
}
var FARM_CAP = {
  hamlet: 14,
  village: 28,
  small_town: 45,
  town: 65,
  large_town: 90,
  small_city: 120,
  city: 160,
  large_city: 210,
  metropolis: 280
};
function placeFarms(rng, scene, townSite, zoneRadius, size, w, h, houses, farmMul = 1) {
  const water = scene.water;
  const forests = scene.forests ?? [];
  const ridges = scene.ridges ?? [];
  const avoid = builtAreaPolys(scene);
  const cornerReach = Math.max(
    Math.hypot(townSite.x, townSite.y),
    Math.hypot(w - townSite.x, townSite.y),
    Math.hypot(townSite.x, h - townSite.y),
    Math.hypot(w - townSite.x, h - townSite.y)
  ) + 40;
  const minReach = zoneRadius * 2.8 + Math.min(w, h) * 0.22;
  const farmReach = Math.max(cornerReach, minReach);
  const n = 64;
  let region = [];
  for (let i = 0; i < n; i++) {
    const a = 2 * Math.PI * i / n;
    const rr = farmReach * (0.95 + 0.1 * Math.sin(a * 2 + rng() * 6));
    region.push({ x: townSite.x + Math.cos(a) * rr, y: townSite.y + Math.sin(a) * rr });
  }
  const targetFieldArea = Math.max(1800, zoneRadius * zoneRadius * 0.1);
  const parcels = subdivideFootprint(region, targetFieldArea, rng, townSite, zoneRadius);
  const roadSegs = [];
  for (const road of scene.roads ?? []) {
    let clr;
    if (road.class === "bridge")
      clr = 10;
    else if (road.role === "primary" || road.role === "branch")
      clr = 9;
    else
      clr = 6;
    const pts = road.points ?? [];
    for (let i = 0; i < pts.length - 1; i++) {
      roadSegs.push([pts[i].x, pts[i].y, pts[i + 1].x, pts[i + 1].y, clr]);
    }
  }
  for (const lane of scene.outlanes ?? []) {
    const pts = lane.points ?? [];
    for (let i = 0; i < pts.length - 1; i++) {
      roadSegs.push([pts[i].x, pts[i].y, pts[i + 1].x, pts[i + 1].y, 6]);
    }
  }
  const segPointDist = (px, py, ax, ay, bx, by) => {
    const dx = bx - ax;
    const dy = by - ay;
    const seg2 = dx * dx + dy * dy;
    if (seg2 < 1e-9)
      return Math.hypot(px - ax, py - ay);
    const t = Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / seg2));
    return Math.hypot(px - (ax + dx * t), py - (ay + dy * t));
  };
  const roadCrosses = (poly) => {
    let minx = Infinity, maxx = -Infinity, miny = Infinity, maxy = -Infinity;
    for (const q of poly) {
      if (q.x < minx)
        minx = q.x;
      if (q.x > maxx)
        maxx = q.x;
      if (q.y < miny)
        miny = q.y;
      if (q.y > maxy)
        maxy = q.y;
    }
    for (const [ax, ay, bx, by, clr] of roadSegs) {
      if (Math.max(ax, bx) < minx - clr || Math.min(ax, bx) > maxx + clr || Math.max(ay, by) < miny - clr || Math.min(ay, by) > maxy + clr)
        continue;
      if (pointInPolygon({ x: ax, y: ay }, poly) || pointInPolygon({ x: bx, y: by }, poly))
        return true;
      for (const v of poly) {
        if (segPointDist(v.x, v.y, ax, ay, bx, by) < clr)
          return true;
      }
      for (let i = 0; i < poly.length; i++) {
        const c = poly[i];
        const d = poly[(i + 1) % poly.length];
        if (segmentsIntersect(ax, ay, bx, by, c.x, c.y, d.x, d.y))
          return true;
      }
    }
    return false;
  };
  const beachDist = Math.min(w, h) * 0.02;
  const waterMargin = beachDist + 5;
  const distToPolyEdge = (pt, poly) => {
    let best = Infinity;
    const nn = poly.length;
    for (let i = 0; i < nn; i++) {
      const a = poly[i];
      const b = poly[(i + 1) % nn];
      best = Math.min(best, segPointDist(pt.x, pt.y, a.x, a.y, b.x, b.y));
    }
    return best;
  };
  const parcelOnOpenGround = (poly) => {
    let cx = 0, cy = 0;
    for (const q of poly) {
      cx += q.x;
      cy += q.y;
    }
    cx /= poly.length;
    cy /= poly.length;
    if (cx < 0 || cx > w || cy < 0 || cy > h)
      return false;
    const testPts = poly.concat([{ x: cx, y: cy }]);
    for (const pt of testPts) {
      if (water) {
        if (pointInPolygon(pt, water))
          return false;
        if (distToPolyEdge(pt, water) < waterMargin)
          return false;
      }
      for (const r of ridges) {
        if (pointInPolygon(pt, r))
          return false;
      }
      for (const f of forests) {
        if (pointInPolygon(pt, f.polygon))
          return false;
      }
      for (const poly2 of avoid) {
        if (pointInPolygon(pt, poly2))
          return false;
      }
    }
    return true;
  };
  const cap = Math.max(0, Math.round((FARM_CAP[size] ?? 30) * farmMul));
  const farms = [];
  for (const p of parcels) {
    if (p.length < 3)
      continue;
    if (farms.length >= cap)
      break;
    let cx = 0, cy = 0;
    for (const q of p) {
      cx += q.x;
      cy += q.y;
    }
    cx /= p.length;
    cy /= p.length;
    if (Math.hypot(cx - townSite.x, cy - townSite.y) < zoneRadius * 1.05)
      continue;
    const sp = shrinkPolygon(p, 2);
    if (!sp || sp.length < 3)
      continue;
    if (!parcelOnOpenGround(sp))
      continue;
    if (roadCrosses(sp))
      continue;
    let best = 0;
    let bl = 0;
    for (let i = 0; i < sp.length; i++) {
      const a = sp[i];
      const b = sp[(i + 1) % sp.length];
      const l = Math.hypot(b.x - a.x, b.y - a.y);
      if (l > bl) {
        bl = l;
        best = Math.atan2(b.y - a.y, b.x - a.x);
      }
    }
    const farm = { polygon: sp, hatchAngle: best };
    if (rng() < 0.28) {
      const vi = Math.floor(rng() * sp.length);
      const vx = sp[vi].x;
      const vy = sp[vi].y;
      farm.house = { x: vx + (cx - vx) * 0.35, y: vy + (cy - vy) * 0.35 };
    }
    farms.push(farm);
  }
  scene.farms = farms;
  return farms;
}
function buildSettlement(rng, scene, w, h, size, terrain, overrides, cropSize) {
  const roads = scene.roads;
  if (!roads || !roads.length)
    return [];
  let townSite = null;
  for (const road of roads) {
    if (road.town_site) {
      townSite = road.town_site;
      break;
    }
  }
  if (townSite === null)
    return [];
  const zoneRadius = ZONE_RADIUS_BY_SIZE[size] ?? 150;
  const armLength = ARM_LENGTH_BY_SIZE[size];
  const subRoadCount = SUB_ROAD_COUNT_BY_SIZE[size] ?? 2;
  const houseTarget = HOUSE_TARGET_BY_SIZE[size] ?? 15;
  const isCity = armLength !== null && armLength !== void 0;
  if (!isCity && terrain === "coastal" && scene.water) {
    const water = scene.water;
    let nearest = water[0];
    let nd = Infinity;
    for (const p of water) {
      const d2 = (p.x - townSite.x) ** 2 + (p.y - townSite.y) ** 2;
      if (d2 < nd) {
        nd = d2;
        nearest = p;
      }
    }
    const dmin = Math.hypot(nearest.x - townSite.x, nearest.y - townSite.y);
    const want = zoneRadius * 0.5;
    if (dmin < want) {
      const ix = townSite.x - nearest.x;
      const iy = townSite.y - nearest.y;
      const il = Math.hypot(ix, iy) || 1;
      const push = want - dmin;
      let nx = townSite.x + ix / il * push;
      let ny = townSite.y + iy / il * push;
      const m = Math.min(w, h) * 0.06;
      nx = Math.max(m, Math.min(w - m, nx));
      ny = Math.max(m, Math.min(h - m, ny));
      townSite = { x: nx, y: ny };
      for (const road of roads)
        road.town_site = townSite;
    }
  }
  if (!isCity) {
    const newSubRoads = generateSubRoads(rng, scene, w, h, townSite, zoneRadius, subRoadCount, terrain);
    roads.push(...newSubRoads);
  }
  let houses;
  if (isCity) {
    houses = placeHousesCity(rng, scene, w, h, townSite, zoneRadius, armLength, houseTarget, terrain, size);
  } else {
    houses = placeHouses(rng, scene, w, h, townSite, zoneRadius, houseTarget, terrain);
  }
  if (!houses.length) {
    const { grid, cellW, cellH } = buildCostGrid(scene, w, h);
    const relocated = findOpenTownsite(rng, grid, w, h, cellW, cellH, scene, terrain);
    if (relocated !== null && (relocated.x !== townSite.x || relocated.y !== townSite.y)) {
      townSite = relocated;
      for (const road of roads)
        road.town_site = townSite;
      if (isCity) {
        houses = placeHousesCity(rng, scene, w, h, townSite, zoneRadius, armLength, houseTarget, terrain, size);
      } else {
        houses = placeHouses(rng, scene, w, h, townSite, zoneRadius, houseTarget, terrain);
      }
    }
  }
  scene.houses = houses;
  if (isCity && terrain === "river" && scene.centreline && scene.water) {
    ensureRiverBridge(rng, scene, w, h);
  }
  if (isCity) {
    placeLandmarks(rng, scene, townSite, zoneRadius, size, terrain, w, h, overrides, cropSize);
  }
  const footprint = scene.footprint;
  if (isCity && footprint && footprint.length >= 3) {
    const wallChance = { small_city: 0.5, city: 0.65, large_city: 0.8, metropolis: 0.9 };
    const roll = rng() < (wallChance[size] ?? 0.7);
    const want = overrides?.walls ?? roll;
    if (want) {
      scene.walls = buildCityWalls(rng, scene, townSite, zoneRadius, size, w, h);
    }
  }
  let curHouses = scene.houses ?? houses;
  if (isCity) {
    placeRibbonHouses(rng, scene, townSite, zoneRadius, size, w, h, curHouses);
    scene.houses = curHouses;
  }
  const OUTBUILDING_SIZES = ["village", "small_town", "town", "large_town", "small_city", "city", "large_city", "metropolis"];
  if (OUTBUILDING_SIZES.includes(size)) {
    placeOutbuildings(rng, scene, townSite, zoneRadius, size, w, h);
  }
  if (isCity && scene.water) {
    const dock = buildDock(rng, scene, townSite, zoneRadius, size, w, h, terrain);
    if (dock)
      scene.dock = dock;
  }
  placeFarms(rng, scene, townSite, zoneRadius, size, w, h, curHouses, overrides?.farmDensity ?? 1);
  return scene.houses ?? houses;
}
function signedArea(polygon) {
  const n = polygon.length;
  if (n < 3)
    return 0;
  let s = 0;
  for (let i = 0; i < n; i++) {
    const a = polygon[i];
    const b = polygon[(i + 1) % n];
    s += a.x * b.y - b.x * a.y;
  }
  return s / 2;
}
function polygonCentroid(polygon) {
  const n = polygon.length;
  if (n < 3) {
    return { x: polygon.reduce((s, p) => s + p.x, 0) / n, y: polygon.reduce((s, p) => s + p.y, 0) / n };
  }
  let sx = 0;
  let sy = 0;
  let a = 0;
  for (let i = 0; i < n; i++) {
    const p1 = polygon[i];
    const p2 = polygon[(i + 1) % n];
    const cross = p1.x * p2.y - p2.x * p1.y;
    sx += (p1.x + p2.x) * cross;
    sy += (p1.y + p2.y) * cross;
    a += cross;
  }
  a *= 0.5;
  if (Math.abs(a) < 1e-9) {
    return { x: polygon.reduce((s, p) => s + p.x, 0) / n, y: polygon.reduce((s, p) => s + p.y, 0) / n };
  }
  return { x: sx / (6 * a), y: sy / (6 * a) };
}
function shrinkPolygon(polygon, inset) {
  const n = polygon.length;
  if (n < 3)
    return null;
  const area = signedArea(polygon);
  if (area === 0)
    return null;
  const sign = area > 0 ? 1 : -1;
  const out = [];
  for (let i = 0; i < n; i++) {
    const prev = polygon[(i - 1 + n) % n];
    const cur = polygon[i];
    const nxt = polygon[(i + 1) % n];
    const e1x = cur.x - prev.x;
    const e1y = cur.y - prev.y;
    const e2x = nxt.x - cur.x;
    const e2y = nxt.y - cur.y;
    const l1 = Math.hypot(e1x, e1y) || 1;
    const l2 = Math.hypot(e2x, e2y) || 1;
    const n1x = -e1y / l1 * sign;
    const n1y = e1x / l1 * sign;
    const n2x = -e2y / l2 * sign;
    const n2y = e2x / l2 * sign;
    const bx = n1x + n2x;
    const by = n1y + n2y;
    const bl = Math.hypot(bx, by);
    if (bl < 1e-6)
      continue;
    const scale = inset / bl * 2;
    out.push({ x: cur.x + bx * scale, y: cur.y + by * scale });
  }
  if (out.length < 3)
    return null;
  const newArea = signedArea(out);
  if (area > 0 !== newArea > 0)
    return null;
  if (Math.abs(newArea) < 8)
    return null;
  return out;
}
function chaikinClosed(pts, iters = 2) {
  let poly = pts.slice();
  for (let k = 0; k < iters; k++) {
    const out = [];
    const n = poly.length;
    for (let i = 0; i < n; i++) {
      const a = poly[i];
      const b = poly[(i + 1) % n];
      out.push({ x: 0.75 * a.x + 0.25 * b.x, y: 0.75 * a.y + 0.25 * b.y });
      out.push({ x: 0.25 * a.x + 0.75 * b.x, y: 0.25 * a.y + 0.75 * b.y });
    }
    poly = out;
  }
  return poly;
}
function fillBlockSolid(block, targetArea, rng) {
  const longestEdgeDir = (poly) => {
    let bestLen = 0;
    let bestDir = [1, 0];
    for (let i = 0; i < poly.length; i++) {
      const a = poly[i];
      const b = poly[(i + 1) % poly.length];
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const l = Math.hypot(dx, dy);
      if (l > bestLen) {
        bestLen = l;
        bestDir = [dx / l, dy / l];
      }
    }
    return [bestDir, bestLen];
  };
  const splitAlong = (poly, direction, offsetPt) => {
    const [dx, dy] = direction;
    const nx = -dy;
    const ny = dx;
    const side = (p) => (p.x - offsetPt.x) * nx + (p.y - offsetPt.y) * ny;
    const left = [];
    const right = [];
    const n = poly.length;
    for (let i = 0; i < n; i++) {
      const a = poly[i];
      const b = poly[(i + 1) % n];
      const sa = side(a);
      const sb = side(b);
      if (sa >= 0)
        left.push(a);
      else
        right.push(a);
      if (sa > 0 !== sb > 0 && Math.abs(sa - sb) > 1e-9) {
        const t = sa / (sa - sb);
        const ip = { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t };
        left.push(ip);
        right.push(ip);
      }
    }
    return [left, right];
  };
  const recurse = (poly, depth) => {
    const area = Math.abs(signedArea(poly));
    if (area <= targetArea || depth > 10 || poly.length < 3)
      return [poly];
    const [edgeDir] = longestEdgeDir(poly);
    const [dx, dy] = edgeDir;
    const px = -dy;
    const py = dx;
    const projEdge = poly.map((v) => v.x * dx + v.y * dy);
    const projPerp = poly.map((v) => v.x * px + v.y * py);
    const spanEdge = Math.max(...projEdge) - Math.min(...projEdge);
    const spanPerp = Math.max(...projPerp) - Math.min(...projPerp);
    let cutLineDir;
    let axisX;
    let axisY;
    let span;
    let projs;
    if (spanEdge >= spanPerp) {
      cutLineDir = [px, py];
      axisX = dx;
      axisY = dy;
      span = spanEdge;
      projs = projEdge;
    } else {
      cutLineDir = [dx, dy];
      axisX = px;
      axisY = py;
      span = spanPerp;
      projs = projPerp;
    }
    if (span < 1e-6)
      return [poly];
    const pmin = Math.min(...projs);
    const frac = 0.42 + rng() * 0.16;
    const cutProj = pmin + span * frac;
    const base = poly[0];
    const baseProj = base.x * axisX + base.y * axisY;
    const shift = cutProj - baseProj;
    const offsetPt = { x: base.x + axisX * shift, y: base.y + axisY * shift };
    const [left, right] = splitAlong(poly, cutLineDir, offsetPt);
    const out2 = [];
    for (const piece of [left, right]) {
      if (piece.length >= 3 && Math.abs(signedArea(piece)) > 4)
        out2.push(...recurse(piece, depth + 1));
    }
    return out2.length ? out2 : [poly];
  };
  const rawLots = recurse(block, 0);
  const out = [];
  for (const lot of rawLots) {
    const shrunk = shrinkPolygon(lot, 0.5);
    if (shrunk && shrunk.length >= 3 && Math.abs(signedArea(shrunk)) > 3)
      out.push(shrunk);
  }
  return out;
}
function subdivideFootprint(footprint, targetBlockArea, rng, townSite, coreRadius) {
  const longestEdgeDir = (poly) => {
    let bestLen = 0;
    let best = [1, 0];
    for (let i = 0; i < poly.length; i++) {
      const a = poly[i];
      const b = poly[(i + 1) % poly.length];
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const l = Math.hypot(dx, dy);
      if (l > bestLen) {
        bestLen = l;
        best = [dx / l, dy / l];
      }
    }
    return best;
  };
  const split = (poly, direction, offsetPt) => {
    const [dx, dy] = direction;
    const nx = -dy;
    const ny = dx;
    const side = (p) => (p.x - offsetPt.x) * nx + (p.y - offsetPt.y) * ny;
    const left = [];
    const right = [];
    const n = poly.length;
    for (let i = 0; i < n; i++) {
      const a = poly[i];
      const b = poly[(i + 1) % n];
      const sa = side(a);
      const sb = side(b);
      if (sa >= 0)
        left.push(a);
      else
        right.push(a);
      if (sa > 0 !== sb > 0 && Math.abs(sa - sb) > 1e-9) {
        const t = sa / (sa - sb);
        const ip = { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t };
        left.push(ip);
        right.push(ip);
      }
    }
    return [left, right];
  };
  const localTarget = (poly) => {
    const cx = poly.reduce((s, p) => s + p.x, 0) / poly.length;
    const cy = poly.reduce((s, p) => s + p.y, 0) / poly.length;
    const d = Math.hypot(cx - townSite.x, cy - townSite.y) / Math.max(coreRadius, 1);
    const scale = 0.6 + Math.min(1, d) * 0.8;
    return targetBlockArea * scale;
  };
  const recurse = (poly, depth) => {
    const area = Math.abs(signedArea(poly));
    if (depth > 11 || poly.length < 3)
      return [poly];
    if (area <= localTarget(poly))
      return [poly];
    const edgeDir = longestEdgeDir(poly);
    const [dx, dy] = edgeDir;
    const px = -dy;
    const py = dx;
    const projE = poly.map((v) => v.x * dx + v.y * dy);
    const projP = poly.map((v) => v.x * px + v.y * py);
    const spanE = Math.max(...projE) - Math.min(...projE);
    const spanP = Math.max(...projP) - Math.min(...projP);
    let cutDir;
    let axis;
    let span;
    let projs;
    if (spanE >= spanP) {
      cutDir = [px, py];
      axis = [dx, dy];
      span = spanE;
      projs = projE;
    } else {
      cutDir = [dx, dy];
      axis = [px, py];
      span = spanP;
      projs = projP;
    }
    if (span < 1e-6)
      return [poly];
    const pmin = Math.min(...projs);
    const frac = 0.4 + rng() * 0.2;
    const cutProj = pmin + span * frac;
    const jitter = (rng() - 0.5) * 0.25;
    const ca = Math.cos(jitter);
    const sa = Math.sin(jitter);
    const cdx = cutDir[0] * ca - cutDir[1] * sa;
    const cdy = cutDir[0] * sa + cutDir[1] * ca;
    const base = poly[0];
    const baseProj = base.x * axis[0] + base.y * axis[1];
    const shift = cutProj - baseProj;
    const offsetPt = { x: base.x + axis[0] * shift, y: base.y + axis[1] * shift };
    const [aPoly, bPoly] = split(poly, [cdx, cdy], offsetPt);
    const out = [];
    for (const piece of [aPoly, bPoly]) {
      if (piece.length >= 3 && Math.abs(signedArea(piece)) > 8)
        out.push(...recurse(piece, depth + 1));
    }
    return out.length ? out : [poly];
  };
  return recurse(footprint, 0);
}
function buildBanksideFootprints(scene, townSite, coreRadius, w, h, sandMargin, rng) {
  const water = scene.water;
  if (!water)
    return null;
  const n = water.length;
  let nearestI = 0;
  let nd = Infinity;
  for (let k = 0; k < n; k++) {
    const d2 = (water[k].x - townSite.x) ** 2 + (water[k].y - townSite.y) ** 2;
    if (d2 < nd) {
      nd = d2;
      nearestI = k;
    }
  }
  const npt = water[nearestI];
  const nearDist = Math.hypot(npt.x - townSite.x, npt.y - townSite.y);
  if (nearDist > coreRadius * 1.15)
    return null;
  const targetFrontage = coreRadius * 2.2;
  const half = targetFrontage / 2;
  const walk = (direction) => {
    const idxs = [];
    let acc = 0;
    let k = nearestI;
    let steps = 0;
    while (acc < half && steps < Math.floor(n / 2)) {
      const nk = (k + direction + n) % n;
      const seg = Math.hypot(water[nk].x - water[k].x, water[nk].y - water[k].y);
      if (Math.hypot(water[nk].x - townSite.x, water[nk].y - townSite.y) > coreRadius * 2)
        break;
      acc += seg;
      idxs.push(nk);
      k = nk;
      steps++;
    }
    return idxs;
  };
  const fwd = walk(1);
  const bwd = walk(-1);
  const run = bwd.slice().reverse().concat([nearestI], fwd);
  if (run.length < 8)
    return null;
  const cityDepth = coreRadius * 1.3;
  const bank = run.map((k) => water[k]);
  if (bank.length < 4)
    return null;
  const m = bank.length;
  const stations = [];
  for (let k = 0; k < m; k++) {
    const a = bank[Math.max(0, k - 2)];
    const b = bank[Math.min(m - 1, k + 2)];
    let tx = b.x - a.x;
    let ty = b.y - a.y;
    const tl = Math.hypot(tx, ty) || 1;
    tx /= tl;
    ty /= tl;
    let nx = -ty;
    let ny = tx;
    const probe = { x: bank[k].x + nx * 6, y: bank[k].y + ny * 6 };
    if (pointInPolygon(probe, water)) {
      nx = -nx;
      ny = -ny;
    }
    stations.push([bank[k], [nx, ny]]);
  }
  const waterfront = stations.map(([p, nrm]) => ({ x: p.x + nrm[0] * sandMargin, y: p.y + nrm[1] * sandMargin }));
  const nCtrl = Math.max(5, Math.min(8, Math.floor(m / 5)));
  const ctrlIdx = [];
  for (let j = 0; j < nCtrl; j++)
    ctrlIdx.push(Math.round(j * (m - 1) / (nCtrl - 1)));
  const ctrlDepth = [];
  let prev = 0.9;
  for (let j = 0; j < ctrlIdx.length; j++) {
    const target = 0.45 + rng() * 1.05;
    let varv = 0.5 * prev + 0.5 * target;
    prev = target;
    if (j === 0 || j === nCtrl - 1)
      varv = Math.min(varv, 0.3);
    ctrlDepth.push(cityDepth * varv);
  }
  const inland = [];
  for (let j = 0; j < ctrlIdx.length - 1; j++) {
    const k0 = ctrlIdx[j];
    const k1 = ctrlIdx[j + 1];
    const d0 = ctrlDepth[j];
    const d1 = ctrlDepth[j + 1];
    const seg = Math.max(1, k1 - k0);
    for (let s = 0; s < seg; s++) {
      const ki = k0 + s;
      const t = s / seg;
      const depth = d0 + (d1 - d0) * t;
      const [p, nrm] = stations[ki];
      inland.push({ x: p.x + nrm[0] * (sandMargin + depth), y: p.y + nrm[1] * (sandMargin + depth) });
    }
  }
  const [pLast, nLast] = stations[ctrlIdx[ctrlIdx.length - 1]];
  inland.push({ x: pLast.x + nLast[0] * (sandMargin + ctrlDepth[ctrlDepth.length - 1]), y: pLast.y + nLast[1] * (sandMargin + ctrlDepth[ctrlDepth.length - 1]) });
  let poly = waterfront.concat(inland.slice().reverse());
  poly = poly.map((p) => ({ x: Math.max(6, Math.min(w - 6, p.x)), y: Math.max(6, Math.min(h - 6, p.y)) }));
  const footprints = [];
  if (Math.abs(signedArea(poly)) > coreRadius * coreRadius * 0.3)
    footprints.push(chaikinClosed(poly, 1));
  if (!footprints.length)
    return null;
  const solid = [];
  for (const p of footprints) {
    const xs = p.map((q) => q.x);
    const ys = p.map((q) => q.y);
    const bbox = (Math.max(...xs) - Math.min(...xs)) * (Math.max(...ys) - Math.min(...ys));
    if (bbox <= 0)
      continue;
    const fill = Math.abs(signedArea(p)) / bbox;
    if (fill >= 0.42)
      solid.push(p);
  }
  if (!solid.length)
    return null;
  const areas = solid.map((p) => Math.abs(signedArea(p)));
  const biggest = Math.max(...areas);
  const result = solid.filter((_, i) => areas[i] >= biggest * 0.5);
  if (!result.length)
    return null;
  const selfIntersects = (poly2) => {
    const m2 = poly2.length;
    if (m2 < 4)
      return false;
    for (let i = 0; i < m2; i++) {
      const a = poly2[i];
      const b = poly2[(i + 1) % m2];
      for (let j = i + 2; j < m2; j++) {
        if (i === 0 && j === m2 - 1)
          continue;
        const c = poly2[j];
        const d = poly2[(j + 1) % m2];
        if (segmentsIntersect(a.x, a.y, b.x, b.y, c.x, c.y, d.x, d.y))
          return true;
      }
    }
    return false;
  };
  for (const p of result) {
    if (selfIntersects(p))
      return null;
  }
  return result;
}
function buildCityFootprint(rng, scene, townSite, coreRadius, armLength, w, h) {
  const water = scene.water;
  const beachDist = Math.min(w, h) * 0.02;
  const sandMargin = beachDist + 4;
  if (water) {
    const bankside = buildBanksideFootprints(scene, townSite, coreRadius, w, h, sandMargin, rng);
    if (bankside)
      return bankside;
  }
  const distToPolyEdge = (pt, poly) => {
    let best = Infinity;
    const n = poly.length;
    for (let i = 0; i < n; i++) {
      const a = poly[i];
      const b = poly[(i + 1) % n];
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const seg2 = dx * dx + dy * dy;
      let d;
      if (seg2 < 1e-9)
        d = Math.hypot(pt.x - a.x, pt.y - a.y);
      else {
        const t = Math.max(0, Math.min(1, ((pt.x - a.x) * dx + (pt.y - a.y) * dy) / seg2));
        d = Math.hypot(pt.x - (a.x + dx * t), pt.y - (a.y + dy * t));
      }
      if (d < best)
        best = d;
    }
    return best;
  };
  const roads = scene.roads;
  const artAngles = [];
  for (const road of roads) {
    if (road.class === "bridge")
      continue;
    if (road.role !== "primary" && road.role !== "branch")
      continue;
    const pts = road.points;
    let far = pts[0];
    let fd = -1;
    for (const p of pts) {
      const d = Math.hypot(p.x - townSite.x, p.y - townSite.y);
      if (d > fd) {
        fd = d;
        far = p;
      }
    }
    artAngles.push(Math.atan2(far.y - townSite.y, far.x - townSite.x));
  }
  const nPts = 72;
  const baseR = coreRadius * (0.92 + rng() * 0.28);
  const H = [];
  for (const freq of [2, 3, 4, 5, 7]) {
    const amp = (freq <= 3 ? 0.18 : freq <= 5 ? 0.11 : 0.06) * (0.5 + rng());
    H.push([freq, amp, rng() * 2 * Math.PI]);
  }
  const nLobes = 2 + Math.floor(rng() * 3);
  const lobes = [];
  for (let i = 0; i < nLobes; i++) {
    lobes.push([rng() * 2 * Math.PI, 0.18 + rng() * 0.3, 0.2 + rng() * 0.35]);
  }
  const raw = [];
  for (let i = 0; i < nPts; i++) {
    const a = 2 * Math.PI * i / nPts;
    let wobble = 1;
    for (const [freq, amp, ph] of H)
      wobble += amp * Math.sin(a * freq + ph);
    let lobe = 0;
    for (const [la, lh, lw] of lobes) {
      const d = Math.abs(((a - la) % (2 * Math.PI) + 3 * Math.PI) % (2 * Math.PI) - Math.PI);
      lobe += lh * Math.exp(-(d * d) / (2 * lw * lw));
    }
    let bulge = 0;
    for (const aa of artAngles) {
      const d = Math.abs((a - aa + Math.PI) % (2 * Math.PI) - Math.PI);
      bulge = Math.max(bulge, 0.12 * Math.exp(-(d * d) / 0.2));
    }
    const r = baseR * Math.max(0.45, wobble + lobe + bulge);
    raw.push({ x: townSite.x + Math.cos(a) * r, y: townSite.y + Math.sin(a) * r });
  }
  let pieces = [raw];
  let doBankcut = false;
  if (water) {
    let ni = 0;
    let nd = Infinity;
    for (let k = 0; k < water.length; k++) {
      const d2 = (water[k].x - townSite.x) ** 2 + (water[k].y - townSite.y) ** 2;
      if (d2 < nd) {
        nd = d2;
        ni = k;
      }
    }
    const ndist = Math.hypot(water[ni].x - townSite.x, water[ni].y - townSite.y);
    doBankcut = ndist <= coreRadius * 1.15;
    if (doBankcut) {
      const distToWaterEdge = (pt) => {
        let best = Infinity;
        const m = water.length;
        for (let i = 0; i < m; i++) {
          const a = water[i];
          const b = water[(i + 1) % m];
          const ex = b.x - a.x;
          const ey = b.y - a.y;
          const seg2 = ex * ex + ey * ey;
          let qx;
          let qy;
          if (seg2 < 1e-9) {
            qx = a.x;
            qy = a.y;
          } else {
            const t = Math.max(0, Math.min(1, ((pt.x - a.x) * ex + (pt.y - a.y) * ey) / seg2));
            qx = a.x + ex * t;
            qy = a.y + ey * t;
          }
          const dd = Math.hypot(pt.x - qx, pt.y - qy);
          if (dd < best)
            best = dd;
        }
        return best;
      };
      const clearance = sandMargin + 3;
      const bad = (pt) => pointInPolygon(pt, water) || distToWaterEdge(pt) < clearance;
      const adjusted = raw.map((p) => {
        if (!bad(p))
          return p;
        let dx = townSite.x - p.x;
        let dy = townSite.y - p.y;
        const dl = Math.hypot(dx, dy) || 1;
        dx /= dl;
        dy /= dl;
        let cur = { x: p.x, y: p.y };
        const step = 4;
        let guard = 0;
        while (bad(cur) && guard < 200) {
          cur = { x: cur.x + dx * step, y: cur.y + dy * step };
          guard++;
          if ((cur.x - townSite.x) * dx + (cur.y - townSite.y) * dy > 0)
            break;
        }
        return cur;
      });
      pieces = [adjusted];
    }
  }
  const out = [];
  for (const p of pieces) {
    const sm = chaikinClosed(p, 1);
    if (sm.length >= 3)
      out.push(sm);
  }
  return out.length ? out : [raw];
}
var TARGET_BLOCK_AREA_BY_SIZE = {
  small_city: 2200,
  city: 2e3,
  large_city: 1800,
  metropolis: 1600
};
var PARK_COUNT_BY_SIZE = {
  small_city: 0,
  city: 1,
  large_city: 2,
  metropolis: 3
};
function placeHousesCity(rng, scene, w, h, townSite, coreRadius, armLength, targetCount, terrain, size) {
  const pieces = buildCityFootprint(rng, scene, townSite, coreRadius, armLength, w, h);
  if (!pieces.length)
    return [];
  let largest = pieces[0];
  let la = -1;
  for (const p of pieces) {
    const a = Math.abs(signedArea(p));
    if (a > la) {
      la = a;
      largest = p;
    }
  }
  scene.footprint = largest;
  const targetBlockArea = TARGET_BLOCK_AREA_BY_SIZE[size] ?? 2e3;
  const rawBlocks = [];
  for (const piece of pieces) {
    if (piece.length >= 3)
      rawBlocks.push(...subdivideFootprint(piece, targetBlockArea, rng, townSite, coreRadius));
  }
  const blockBlocked = (cx, cy) => {
    if (scene.water && pointInPolygon({ x: cx, y: cy }, scene.water))
      return true;
    if (scene.ridges) {
      for (const ridge of scene.ridges) {
        if (pointInPolygon({ x: cx, y: cy }, ridge))
          return true;
      }
    }
    return false;
  };
  const buildable = [];
  for (const block of rawBlocks) {
    const area = Math.abs(signedArea(block));
    if (area < 200)
      continue;
    let perim = 0;
    for (let i = 0; i < block.length; i++) {
      const a = block[i];
      const b = block[(i + 1) % block.length];
      perim += Math.hypot(b.x - a.x, b.y - a.y);
    }
    if (perim * perim / area > 40)
      continue;
    const cx = block.reduce((s, p) => s + p.x, 0) / block.length;
    const cy = block.reduce((s, p) => s + p.y, 0) / block.length;
    if (blockBlocked(cx, cy))
      continue;
    const dCentre = Math.hypot(cx - townSite.x, cy - townSite.y);
    buildable.push({ block, cx, cy, dCentre, area });
  }
  const parkCount = PARK_COUNT_BY_SIZE[size] ?? 0;
  const parkIds = /* @__PURE__ */ new Set();
  if (parkCount > 0 && buildable.length > parkCount + 3) {
    const scored = [];
    for (let idx = 0; idx < buildable.length; idx++) {
      const b = buildable[idx];
      const t = b.dCentre / coreRadius;
      if (t < 0.15 || t > 0.85)
        continue;
      if (b.area < 400 || b.area > 5e3)
        continue;
      const interiorWeight = 1 - t;
      const score = interiorWeight * (0.5 + rng());
      scored.push([score, idx]);
    }
    scored.sort((a, b) => b[0] !== a[0] ? b[0] - a[0] : b[1] - a[1]);
    const MIN_PARK_SEPARATION = coreRadius * 0.4;
    const chosenCentres = [];
    for (const [, idx] of scored) {
      if (parkIds.size >= parkCount)
        break;
      const b = buildable[idx];
      let tooClose = false;
      for (const [px, py] of chosenCentres) {
        if (Math.hypot(b.cx - px, b.cy - py) < MIN_PARK_SEPARATION) {
          tooClose = true;
          break;
        }
      }
      if (tooClose)
        continue;
      parkIds.add(idx);
      chosenCentres.push([b.cx, b.cy]);
    }
  }
  const houses = [];
  const parks = [];
  const builtBlocks = [];
  for (let idx = 0; idx < buildable.length; idx++) {
    const b = buildable[idx];
    const block = b.block;
    if (parkIds.has(idx)) {
      parks.push(block);
      continue;
    }
    const dCentre = b.dCentre;
    let targetLotArea;
    if (dCentre <= coreRadius * 0.7)
      targetLotArea = 90;
    else if (dCentre <= coreRadius) {
      const t = (dCentre - coreRadius * 0.7) / (coreRadius * 0.3);
      targetLotArea = 90 + t * 70;
    } else
      targetLotArea = 170;
    const blockInner = shrinkPolygon(block, 2.2);
    if (blockInner === null || blockInner.length < 3)
      continue;
    const lots = fillBlockSolid(blockInner, targetLotArea, rng);
    const blockHouses = [];
    for (const poly of lots) {
      const polyCentre = polygonCentroid(poly);
      if (scene.water && pointInPolygon(polyCentre, scene.water))
        continue;
      let inRidge = false;
      if (scene.ridges) {
        for (const ridge of scene.ridges) {
          if (pointInPolygon(polyCentre, ridge)) {
            inRidge = true;
            break;
          }
        }
      }
      if (inRidge)
        continue;
      blockHouses.push({ centre: polyCentre, size: [0, 0], angle: 0, polygon: poly });
    }
    const blockArea = Math.abs(signedArea(block));
    let lotArea = 0;
    for (const bh of blockHouses)
      lotArea += Math.abs(signedArea(bh.polygon));
    if (blockArea > 0 && lotArea / blockArea >= 0.3 && blockHouses.length > 0) {
      for (const bh of blockHouses)
        houses.push(bh);
      builtBlocks.push(block);
    }
  }
  if (builtBlocks.length > 1) {
    const keep = connectedBlocks(builtBlocks, scene.roads);
    if (keep.size && keep.size < builtBlocks.length) {
      const keptBlocks = [];
      const keptHouses = [];
      for (let i = 0; i < builtBlocks.length; i++) {
        if (keep.has(i))
          keptBlocks.push(builtBlocks[i]);
      }
      const keptExpanded = keptBlocks.map((b) => b);
      for (const hh of houses) {
        const c = hh.centre;
        let inside = false;
        for (const kb of keptExpanded) {
          if (pointInPolygon(c, kb)) {
            inside = true;
            break;
          }
        }
        if (inside)
          keptHouses.push(hh);
      }
      if (keptHouses.length >= houses.length * 0.5) {
        houses.length = 0;
        houses.push(...keptHouses);
        builtBlocks.length = 0;
        builtBlocks.push(...keptBlocks);
      }
    }
  }
  scene.parks = parks;
  scene.street_base = builtBlocks;
  return houses;
}
function connectedBlocks(blocks, roads) {
  const n = blocks.length;
  const seeds = /* @__PURE__ */ new Set();
  const ROAD_NEAR = 14;
  const ADJ = 10;
  const bbox = blocks.map((b) => {
    let minx = Infinity, miny = Infinity, maxx = -Infinity, maxy = -Infinity;
    for (const p of b) {
      if (p.x < minx)
        minx = p.x;
      if (p.y < miny)
        miny = p.y;
      if (p.x > maxx)
        maxx = p.x;
      if (p.y > maxy)
        maxy = p.y;
    }
    return { minx, miny, maxx, maxy };
  });
  const roadPts = [];
  for (const r of roads) {
    for (const p of r.points)
      roadPts.push(p);
  }
  for (let i = 0; i < n; i++) {
    const bb = bbox[i];
    for (const rp of roadPts) {
      const cx = Math.max(bb.minx, Math.min(rp.x, bb.maxx));
      const cy = Math.max(bb.miny, Math.min(rp.y, bb.maxy));
      if (Math.hypot(rp.x - cx, rp.y - cy) <= ROAD_NEAR) {
        seeds.add(i);
        break;
      }
    }
  }
  const adj = Array.from({ length: n }, () => []);
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const a = bbox[i];
      const b = bbox[j];
      const overlapX = a.minx - ADJ <= b.maxx && b.minx - ADJ <= a.maxx;
      const overlapY = a.miny - ADJ <= b.maxy && b.miny - ADJ <= a.maxy;
      if (overlapX && overlapY) {
        adj[i].push(j);
        adj[j].push(i);
      }
    }
  }
  const reached = /* @__PURE__ */ new Set();
  const stack = [...seeds];
  for (const s of stack)
    reached.add(s);
  while (stack.length) {
    const cur = stack.pop();
    for (const nb of adj[cur]) {
      if (!reached.has(nb)) {
        reached.add(nb);
        stack.push(nb);
      }
    }
  }
  return seeds.size ? reached : /* @__PURE__ */ new Set();
}
function minDistToPoly(pt, poly) {
  let best = Infinity;
  const n = poly.length;
  for (let i = 0; i < n; i++) {
    const a = poly[i];
    const b = poly[(i + 1) % n];
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const seg2 = dx * dx + dy * dy;
    let d;
    if (seg2 < 1e-9)
      d = Math.hypot(pt.x - a.x, pt.y - a.y);
    else {
      const t = Math.max(0, Math.min(1, ((pt.x - a.x) * dx + (pt.y - a.y) * dy) / seg2));
      d = Math.hypot(pt.x - (a.x + dx * t), pt.y - (a.y + dy * t));
    }
    if (d < best)
      best = d;
  }
  return best;
}
function rayToPolyEdge(origin, angle, poly) {
  const ox = origin.x;
  const oy = origin.y;
  const dx = Math.cos(angle);
  const dy = Math.sin(angle);
  let best = null;
  const n = poly.length;
  for (let i = 0; i < n; i++) {
    const a = poly[i];
    const b = poly[(i + 1) % n];
    const ex = b.x - a.x;
    const ey = b.y - a.y;
    const den = dx * -ey - dy * -ex;
    if (Math.abs(den) < 1e-9)
      continue;
    const t = ((a.x - ox) * -ey - (a.y - oy) * -ex) / den;
    const u = (dx * (a.y - oy) - dy * (a.x - ox)) / den;
    if (t > 0 && u >= 0 && u <= 1) {
      if (best === null || t < best)
        best = t;
    }
  }
  return best;
}
function removeHousesIn(scene, clearPoly) {
  const houses = scene.houses;
  if (!houses || !houses.length || !clearPoly || clearPoly.length < 3)
    return;
  const kept = [];
  for (const hh of houses) {
    let c = hh.centre;
    if (!c && hh.polygon) {
      const poly = hh.polygon;
      c = { x: poly.reduce((s, p) => s + p.x, 0) / poly.length, y: poly.reduce((s, p) => s + p.y, 0) / poly.length };
    }
    if (c && pointInPolygon(c, clearPoly))
      continue;
    kept.push(hh);
  }
  scene.houses = kept;
}
function buildCastle(rng, scene, townSite, coreRadius, w, h, forced = false) {
  const footprint = scene.footprint;
  const waterPoly = scene.water;
  if (!footprint || footprint.length < 3)
    return null;
  const cr = coreRadius;
  let baileyR = Math.max(26, cr * 0.3);
  const fcx = footprint.reduce((s, p) => s + p.x, 0) / footprint.length;
  const fcy = footprint.reduce((s, p) => s + p.y, 0) / footprint.length;
  const insideFootprint = (pt, shrink) => {
    if (!pointInPolygon(pt, footprint))
      return false;
    if (minDistToPoly(pt, footprint) < shrink)
      return false;
    if (scene.forests) {
      for (const f of scene.forests) {
        if (pointInPolygon(pt, f.polygon))
          return false;
      }
    }
    if (scene.ridges) {
      for (const r of scene.ridges) {
        if (pointInPolygon(pt, r))
          return false;
      }
    }
    if (waterPoly) {
      if (pointInPolygon(pt, waterPoly))
        return false;
      for (let a = 0; a < 8; a++) {
        const ang = a / 8 * 2 * Math.PI;
        const rp = { x: pt.x + Math.cos(ang) * baileyR, y: pt.y + Math.sin(ang) * baileyR };
        if (pointInPolygon(rp, waterPoly))
          return false;
      }
    }
    return true;
  };
  const placeCentral = rng() < 0.5;
  let best = null;
  if (placeCentral) {
    for (let i = 0; i < 30; i++) {
      const jx = fcx + (rng() - 0.5) * coreRadius * 0.4;
      const jy = fcy + (rng() - 0.5) * coreRadius * 0.4;
      if (insideFootprint({ x: jx, y: jy }, baileyR + 6)) {
        best = { x: jx, y: jy };
        break;
      }
    }
    if (best === null && insideFootprint({ x: fcx, y: fcy }, baileyR + 6))
      best = { x: fcx, y: fcy };
  } else {
    let biasAng = null;
    if (waterPoly) {
      let ni = 0;
      let nd2 = Infinity;
      for (let k = 0; k < waterPoly.length; k++) {
        const d2 = (waterPoly[k].x - townSite.x) ** 2 + (waterPoly[k].y - townSite.y) ** 2;
        if (d2 < nd2) {
          nd2 = d2;
          ni = k;
        }
      }
      const npt = waterPoly[ni];
      const nd = Math.hypot(npt.x - townSite.x, npt.y - townSite.y);
      if (nd < cr * 2)
        biasAng = Math.atan2(npt.y - fcy, npt.x - fcx);
    }
    if (biasAng === null)
      biasAng = rng() * 2 * Math.PI;
    for (let i = 0; i < 40; i++) {
      const ang = biasAng + (rng() - 0.5) * 1.4;
      const frac = 0.5 + rng() * 0.3;
      const edgeD = rayToPolyEdge({ x: fcx, y: fcy }, ang, footprint);
      if (edgeD === null)
        continue;
      const dist = edgeD * frac;
      const cx = fcx + Math.cos(ang) * dist;
      const cy = fcy + Math.sin(ang) * dist;
      if (insideFootprint({ x: cx, y: cy }, baileyR + 6)) {
        best = { x: cx, y: cy };
        break;
      }
    }
  }
  if (best === null) {
    if (insideFootprint({ x: fcx, y: fcy }, baileyR + 6)) {
      best = { x: fcx, y: fcy };
    } else if (forced) {
      const tryFind = (clearShrink) => {
        for (let i = 0; i < 200; i++) {
          const ang = rng() * 2 * Math.PI;
          const edgeD = rayToPolyEdge({ x: fcx, y: fcy }, ang, footprint);
          if (edgeD === null)
            continue;
          const dist = edgeD * (rng() * 0.85);
          const cx = fcx + Math.cos(ang) * dist;
          const cy = fcy + Math.sin(ang) * dist;
          if (insideFootprint({ x: cx, y: cy }, clearShrink))
            return { x: cx, y: cy };
        }
        return null;
      };
      best = tryFind(baileyR + 6) ?? tryFind(baileyR) ?? tryFind(baileyR * 0.7);
      if (best === null) {
        for (let s = 0; s < 4 && best === null; s++) {
          baileyR *= 0.85;
          best = tryFind(baileyR * 0.6);
        }
        if (best === null && pointInPolygon({ x: fcx, y: fcy }, footprint))
          best = { x: fcx, y: fcy };
        if (best === null) {
          const houses = scene.houses || [];
          for (const hh of houses) {
            if (waterPoly && pointInPolygon(hh.centre, waterPoly))
              continue;
            let onRidge = false;
            if (scene.ridges) {
              for (const r of scene.ridges)
                if (pointInPolygon(hh.centre, r)) {
                  onRidge = true;
                  break;
                }
            }
            if (onRidge)
              continue;
            best = { x: hh.centre.x, y: hh.centre.y };
            break;
          }
        }
        if (best === null)
          return null;
      }
    } else {
      return null;
    }
  }
  const ccx = best.x;
  const ccy = best.y;
  const nSides = 4 + Math.floor(rng() * 2);
  const rot = rng() * 2 * Math.PI;
  const bailey = [];
  for (let i = 0; i < nSides; i++) {
    const a = rot + 2 * Math.PI * i / nSides;
    const rr = baileyR * (0.82 + rng() * 0.36);
    bailey.push({ x: ccx + Math.cos(a) * rr, y: ccy + Math.sin(a) * rr });
  }
  const towers = bailey.slice();
  let bestRoadPt = null;
  let bestRoadD = null;
  const roads = scene.roads;
  for (const road of roads) {
    if (road.class === "bridge")
      continue;
    for (const p of road.points) {
      const d = (p.x - ccx) ** 2 + (p.y - ccy) ** 2;
      if (bestRoadD === null || d < bestRoadD) {
        bestRoadD = d;
        bestRoadPt = p;
      }
    }
  }
  let gateAng;
  if (bestRoadPt !== null)
    gateAng = Math.atan2(bestRoadPt.y - ccy, bestRoadPt.x - ccx);
  else
    gateAng = Math.atan2(fcy - ccy, fcx - ccx);
  let gateD = baileyR * 0.95;
  {
    const dx = Math.cos(gateAng), dy = Math.sin(gateAng);
    let best2 = null;
    for (let i = 0, j = bailey.length - 1; i < bailey.length; j = i++) {
      const ax = bailey[j].x - ccx, ay = bailey[j].y - ccy;
      const bx = bailey[i].x - ccx, by = bailey[i].y - ccy;
      const den = (ax - bx) * dy - (ay - by) * dx;
      if (Math.abs(den) < 1e-9)
        continue;
      const t = (ax * dy - ay * dx) / den;
      if (t < 0 || t > 1)
        continue;
      const px = ax + t * (bx - ax), py = ay + t * (by - ay);
      if (px * dx + py * dy <= 0)
        continue;
      const d = Math.hypot(px, py);
      if (best2 === null || d < best2)
        best2 = d;
    }
    if (best2 !== null)
      gateD = best2;
  }
  const gate = { x: ccx + Math.cos(gateAng) * gateD, y: ccy + Math.sin(gateAng) * gateD };
  const backAng = gateAng + Math.PI;
  const keepCx = ccx + Math.cos(backAng) * baileyR * 0.32;
  const keepCy = ccy + Math.sin(backAng) * baileyR * 0.32;
  const keepR = baileyR * 0.32;
  const keep = [];
  const krot = rng() * 2 * Math.PI;
  for (let i = 0; i < 4; i++) {
    const a = krot + Math.PI / 2 * i;
    keep.push({ x: keepCx + Math.cos(a) * keepR, y: keepCy + Math.sin(a) * keepR });
  }
  let approach = null;
  if (bestRoadPt !== null) {
    if (Math.hypot(bestRoadPt.x - gate.x, bestRoadPt.y - gate.y) < baileyR * 2.5) {
      approach = [gate, { x: bestRoadPt.x, y: bestRoadPt.y }];
    }
  }
  const clearPoly = [];
  for (const p of bailey) {
    const dx = p.x - ccx;
    const dy = p.y - ccy;
    const d = Math.hypot(dx, dy) || 1;
    clearPoly.push({ x: p.x + dx / d * 8, y: p.y + dy / d * 8 });
  }
  return { type: "castle", bailey, towers, keep, gate, gateAngle: gateAng, approach, clearPoly, centre: { x: ccx, y: ccy } };
}
function findInteriorSite(rng, scene, townSite, coreRadius, clearR, avoid, tLo = 0.12, tHi = 0.62, forced = false) {
  const footprint = scene.footprint;
  if (!footprint || footprint.length < 3)
    return null;
  const fcx = footprint.reduce((s, p) => s + p.x, 0) / footprint.length;
  const fcy = footprint.reduce((s, p) => s + p.y, 0) / footprint.length;
  const inWater = (pt) => {
    if (!scene.water)
      return false;
    if (pointInPolygonNonzero(pt, scene.water))
      return true;
    for (let a = 0; a < 8; a++) {
      const ang = a / 8 * 2 * Math.PI;
      if (pointInPolygonNonzero({ x: pt.x + Math.cos(ang) * clearR, y: pt.y + Math.sin(ang) * clearR }, scene.water))
        return true;
    }
    return false;
  };
  const ok = (pt, relax) => {
    if (!pointInPolygon(pt, footprint))
      return false;
    if (minDistToPoly(pt, footprint) < clearR * (1 - relax * 0.85))
      return false;
    for (const [ax, ay, ar] of avoid) {
      if (Math.hypot(pt.x - ax, pt.y - ay) < (ar + clearR) * (1 - relax * 0.6))
        return false;
    }
    if (inWater(pt))
      return false;
    if (scene.ridges) {
      for (const ridge of scene.ridges) {
        if (pointInPolygon(pt, ridge))
          return false;
      }
    }
    if (scene.forests) {
      for (const f of scene.forests) {
        if (pointInPolygon(pt, f.polygon))
          return false;
      }
    }
    return true;
  };
  for (let i = 0; i < 60; i++) {
    const ang = rng() * 2 * Math.PI;
    const frac = tLo + rng() * (tHi - tLo);
    const px = fcx + Math.cos(ang) * coreRadius * frac;
    const py = fcy + Math.sin(ang) * coreRadius * frac;
    if (ok({ x: px, y: py }, 0))
      return { x: px, y: py };
  }
  if (ok({ x: fcx, y: fcy }, 0))
    return { x: fcx, y: fcy };
  if (!forced)
    return null;
  for (let step = 1; step <= 5; step++) {
    const relax = step / 5;
    for (let i = 0; i < 80; i++) {
      const ang = rng() * 2 * Math.PI;
      const frac = tLo * (1 - relax) + rng() * (Math.min(0.92, tHi + relax * 0.3) - tLo * (1 - relax));
      const px = fcx + Math.cos(ang) * coreRadius * frac;
      const py = fcy + Math.sin(ang) * coreRadius * frac;
      if (ok({ x: px, y: py }, relax))
        return { x: px, y: py };
    }
  }
  const hardOk = (pt) => {
    if (!pointInPolygon(pt, footprint))
      return false;
    if (inWater(pt))
      return false;
    if (scene.ridges) {
      for (const r of scene.ridges)
        if (pointInPolygon(pt, r))
          return false;
    }
    if (scene.forests) {
      for (const f of scene.forests)
        if (pointInPolygon(pt, f.polygon))
          return false;
    }
    return true;
  };
  if (hardOk({ x: fcx, y: fcy }))
    return { x: fcx, y: fcy };
  for (const v of footprint) {
    const p = { x: (v.x + fcx) / 2, y: (v.y + fcy) / 2 };
    if (hardOk(p))
      return p;
  }
  const houses = scene.houses || [];
  for (const hh of houses) {
    if (hardOk(hh.centre))
      return { x: hh.centre.x, y: hh.centre.y };
  }
  return null;
}
function buildCathedral(rng, scene, townSite, coreRadius, w, h, avoid, forced = false) {
  const cr = coreRadius;
  const naveLen = Math.max(24, cr * 0.28);
  const naveW = Math.max(7, cr * 0.08);
  const tranLen = Math.max(14, cr * 0.18);
  const tranW = Math.max(6, cr * 0.075);
  const clearR = naveLen * 0.55;
  const site = findInteriorSite(rng, scene, townSite, coreRadius, clearR, avoid, 0.1, 0.55, forced);
  if (site === null)
    return null;
  const ccx = site.x;
  const ccy = site.y;
  let angle = rng() * 2 * Math.PI;
  let bestD = null;
  const roads = scene.roads;
  for (const road of roads) {
    if (road.class === "bridge")
      continue;
    const pts = road.points;
    for (let i = 0; i < pts.length - 1; i++) {
      const mx = (pts[i].x + pts[i + 1].x) / 2;
      const my = (pts[i].y + pts[i + 1].y) / 2;
      const d = (mx - ccx) ** 2 + (my - ccy) ** 2;
      if (bestD === null || d < bestD) {
        bestD = d;
        angle = Math.atan2(pts[i + 1].y - pts[i].y, pts[i + 1].x - pts[i].x);
      }
    }
  }
  const ca = Math.cos(angle);
  const sa = Math.sin(angle);
  const rot = (dx, dy) => ({ x: ccx + dx * ca - dy * sa, y: ccy + dx * sa + dy * ca });
  const hl = naveLen / 2;
  const hw = naveW / 2;
  const htl = tranLen / 2;
  const htw = tranW / 2;
  const tcx = hl * 0.15;
  const nave = [rot(-hl, -hw), rot(hl, -hw), rot(hl, hw), rot(-hl, hw)];
  const transept = [rot(tcx - htw, -htl), rot(tcx + htw, -htl), rot(tcx + htw, htl), rot(tcx - htw, htl)];
  const apse = { pos: rot(-hl, 0), r: naveW * 0.6 };
  const outline = nave;
  const clearPoly = [];
  for (const p of nave.concat(transept)) {
    const dx = p.x - ccx;
    const dy = p.y - ccy;
    const d = Math.hypot(dx, dy) || 1;
    clearPoly.push({ x: p.x + dx / d * 7, y: p.y + dy / d * 7 });
  }
  return { type: "cathedral", nave, transept, apse, angle, outline, clearPoly, centre: { x: ccx, y: ccy } };
}
function buildMarket(rng, scene, townSite, coreRadius, w, h, avoid, forced = false) {
  const cr = coreRadius;
  const plazaR = Math.max(9, cr * 0.1);
  const clearR = plazaR * 1.2;
  const site = findInteriorSite(rng, scene, townSite, coreRadius, clearR, avoid, 0.08, 0.5, forced);
  if (site === null)
    return null;
  const ccx = site.x;
  const ccy = site.y;
  const nSides = 4 + Math.floor(rng() * 2);
  const rot0 = rng() * 2 * Math.PI;
  const plaza = [];
  for (let i = 0; i < nSides; i++) {
    const a = rot0 + 2 * Math.PI * i / nSides;
    const rr = plazaR * (0.85 + rng() * 0.3);
    plaza.push({ x: ccx + Math.cos(a) * rr, y: ccy + Math.sin(a) * rr });
  }
  const stalls = [];
  const n = plaza.length;
  for (let i = 0; i < n; i++) {
    const a = plaza[i];
    const b = plaza[(i + 1) % n];
    for (const t of [0.3, 0.7]) {
      const mx = a.x + (b.x - a.x) * t;
      const my = a.y + (b.y - a.y) * t;
      let ix = ccx - mx;
      let iy = ccy - my;
      const d = Math.hypot(ix, iy) || 1;
      ix /= d;
      iy /= d;
      const sx = mx + ix * 6;
      const sy = my + iy * 6;
      let ex = b.x - a.x;
      let ey = b.y - a.y;
      const el = Math.hypot(ex, ey) || 1;
      ex /= el;
      ey /= el;
      const sl = 3;
      const sw = 2.2;
      stalls.push([
        { x: sx - ex * sl - ix * sw, y: sy - ey * sl - iy * sw },
        { x: sx + ex * sl - ix * sw, y: sy + ey * sl - iy * sw },
        { x: sx + ex * sl + ix * sw, y: sy + ey * sl + iy * sw },
        { x: sx - ex * sl + ix * sw, y: sy - ey * sl + iy * sw }
      ]);
    }
  }
  const feature = { pos: { x: ccx, y: ccy }, r: Math.max(2.5, plazaR * 0.12) };
  const clearPoly = [];
  for (const p of plaza) {
    const dx = p.x - ccx;
    const dy = p.y - ccy;
    const d = Math.hypot(dx, dy) || 1;
    clearPoly.push({ x: p.x + dx / d * 5, y: p.y + dy / d * 5 });
  }
  return { type: "market", plaza, stalls, feature, clearPoly, centre: { x: ccx, y: ccy } };
}
function buildBarracks(rng, scene, townSite, coreRadius, w, h, avoid, forced = false) {
  const cr = coreRadius;
  const yardLen = Math.max(16, cr * 0.18);
  const yardW = Math.max(11, cr * 0.132);
  const clearR = Math.max(yardLen, yardW) * 0.6;
  const site = findInteriorSite(rng, scene, townSite, coreRadius, clearR, avoid, 0.2, 0.7, forced);
  if (site === null)
    return null;
  const ccx = site.x;
  const ccy = site.y;
  let angle = rng() * 2 * Math.PI;
  let bestD = null;
  const roads = scene.roads;
  for (const road of roads) {
    if (road.class === "bridge")
      continue;
    const pts = road.points;
    for (let i = 0; i < pts.length - 1; i++) {
      const mx = (pts[i].x + pts[i + 1].x) / 2;
      const my = (pts[i].y + pts[i + 1].y) / 2;
      const d = (mx - ccx) ** 2 + (my - ccy) ** 2;
      if (bestD === null || d < bestD) {
        bestD = d;
        angle = Math.atan2(pts[i + 1].y - pts[i].y, pts[i + 1].x - pts[i].x);
      }
    }
  }
  const ca = Math.cos(angle);
  const sa = Math.sin(angle);
  const rot = (dx, dy) => ({ x: ccx + dx * ca - dy * sa, y: ccy + dx * sa + dy * ca });
  const hl = yardLen / 2;
  const hw = yardW / 2;
  const yard = [rot(-hl, -hw), rot(hl, -hw), rot(hl, hw), rot(-hl, hw)];
  const halls = [];
  const hallHl = hl * 0.78;
  const hallHw = yardW * 0.16;
  for (const off of [-yardW * 0.26, yardW * 0.26]) {
    halls.push([
      rot(-hallHl, off - hallHw),
      rot(hallHl, off - hallHw),
      rot(hallHl, off + hallHw),
      rot(-hallHl, off + hallHw)
    ]);
  }
  const drill = { pos: rot(0, 0), r: Math.max(2, yardW * 0.1) };
  const clearPoly = [];
  for (const p of yard) {
    const dx = p.x - ccx;
    const dy = p.y - ccy;
    const d = Math.hypot(dx, dy) || 1;
    clearPoly.push({ x: p.x + dx / d * 6, y: p.y + dy / d * 6 });
  }
  return { type: "barracks", yard, halls, drill, angle, clearPoly, centre: { x: ccx, y: ccy } };
}
function buildTower(rng, scene, townSite, coreRadius, w, h, forced, cropSize) {
  const footprint = scene.footprint;
  if (!footprint || footprint.length < 3)
    return null;
  const margin = Math.min(w, h) * 0.012 + 6;
  const radius = Math.max(7, coreRadius * 0.045);
  const frameLo = 12, frameHiX = w - 12, frameHiY = h - 12;
  let cityCx = townSite.x, cityCy = townSite.y;
  {
    const hs = scene.houses;
    if (hs && hs.length) {
      let sx = 0, sy = 0, n = 0;
      for (const hh of hs) {
        let c = hh.centre;
        if (!c && hh.polygon)
          c = { x: hh.polygon.reduce((s, p) => s + p.x, 0) / hh.polygon.length, y: hh.polygon.reduce((s, p) => s + p.y, 0) / hh.polygon.length };
        if (c) {
          sx += c.x;
          sy += c.y;
          n++;
        }
      }
      if (n) {
        cityCx = sx / n;
        cityCy = sy / n;
      }
    }
  }
  const cropOK = (p) => {
    if (!cropSize)
      return true;
    const fx = cropSize / 2 + (p.x - cityCx);
    const fy = cropSize / 2 + (p.y - cityCy);
    const m = 16 + radius;
    return fx >= m && fx <= cropSize - m && fy >= m && fy <= cropSize - m;
  };
  const roads = scene.roads || [];
  const isValid = (p) => {
    if (p.x < frameLo || p.x > frameHiX || p.y < frameLo || p.y > frameHiY)
      return false;
    if (!cropOK(p))
      return false;
    if (scene.water && pointInPolygonNonzero(p, scene.water))
      return false;
    if (pointInPolygon(p, footprint))
      return false;
    let nearFoot = Infinity;
    for (const fp of footprint) {
      const d = Math.hypot(fp.x - p.x, fp.y - p.y);
      if (d < nearFoot)
        nearFoot = d;
    }
    if (nearFoot < coreRadius * 0.5)
      return false;
    if (scene.forests) {
      for (const f of scene.forests)
        if (pointInPolygon(p, f.polygon))
          return false;
    }
    if (scene.water) {
      for (let a = 0; a < 8; a++) {
        const q = { x: p.x + Math.cos(a / 8 * Math.PI * 2) * (radius + margin), y: p.y + Math.sin(a / 8 * Math.PI * 2) * (radius + margin) };
        if (pointInPolygonNonzero(q, scene.water))
          return false;
      }
    }
    for (const road of roads) {
      for (const rp of road.points) {
        if (Math.hypot(rp.x - p.x, rp.y - p.y) < radius + 10)
          return false;
      }
    }
    return true;
  };
  const edgeDist = (p) => {
    let best2 = Infinity;
    if (scene.forests)
      for (const f of scene.forests)
        for (const v of f.polygon) {
          const d = Math.hypot(v.x - p.x, v.y - p.y);
          if (d < best2)
            best2 = d;
        }
    if (scene.mountains)
      for (const m of scene.mountains)
        for (const sp of m.spines)
          for (const pt of sp) {
            const d = Math.max(0, Math.hypot(pt.x - p.x, pt.y - p.y) - pt.w);
            if (d < best2)
              best2 = d;
          }
    return best2;
  };
  const candidateRoadPts = [];
  for (const road of roads) {
    if (road.class === "bridge")
      continue;
    for (const rp of road.points)
      candidateRoadPts.push(rp);
  }
  const buildLane = (from) => {
    const sorted = candidateRoadPts.map((rp) => ({ rp, d: Math.hypot(rp.x - from.x, rp.y - from.y) })).sort((a, b) => a.d - b.d).slice(0, 12);
    for (const { rp, d } of sorted) {
      if (d > coreRadius * 3.2)
        break;
      const steps = Math.max(2, Math.round(d / 24));
      const pts = [];
      let overWater = false;
      const perpA = Math.atan2(rp.y - from.y, rp.x - from.x) + Math.PI / 2;
      for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        const wob = Math.sin(t * Math.PI) * (d / 200) * 6;
        const px = from.x + (rp.x - from.x) * t + Math.cos(perpA) * wob;
        const py = from.y + (rp.y - from.y) * t + Math.sin(perpA) * wob;
        if (scene.water && pointInPolygonNonzero({ x: px, y: py }, scene.water)) {
          overWater = true;
          break;
        }
        pts.push({ x: px, y: py });
      }
      if (!overWater && pts.length >= 2)
        return pts;
    }
    return null;
  };
  let best = null;
  let bestLane = null;
  let bestScore = -Infinity;
  const ringMin = coreRadius * 0.9, ringMax = coreRadius * 2.2;
  for (let i = 0; i < 480; i++) {
    const ang = rng() * Math.PI * 2;
    const r = ringMin + rng() * (ringMax - ringMin);
    const p = { x: cityCx + Math.cos(ang) * r, y: cityCy + Math.sin(ang) * r };
    if (!isValid(p))
      continue;
    const lane = buildLane(p);
    if (!lane)
      continue;
    const ed = edgeDist(p);
    let edgeScore;
    if (ed === Infinity)
      edgeScore = 0;
    else if (ed < 6)
      edgeScore = 0.4;
    else if (ed <= 40)
      edgeScore = 1 - (ed - 6) / 80;
    else
      edgeScore = Math.max(0, 0.5 - (ed - 40) / 300);
    const distPenalty = Math.max(0, (r - coreRadius * 1.6) / (coreRadius * 2));
    const score = edgeScore - distPenalty * 0.3 + rng() * 0.05;
    if (score > bestScore) {
      bestScore = score;
      best = p;
      bestLane = lane;
    }
  }
  if (!best)
    return null;
  const basePoly = [];
  const nSeg = 16;
  for (let i = 0; i < nSeg; i++) {
    const a = i / nSeg * Math.PI * 2;
    basePoly.push({ x: best.x + Math.cos(a) * radius, y: best.y + Math.sin(a) * radius });
  }
  const clearPoly = [];
  for (let i = 0; i < nSeg; i++) {
    const a = i / nSeg * Math.PI * 2;
    clearPoly.push({ x: best.x + Math.cos(a) * (radius + 14), y: best.y + Math.sin(a) * (radius + 14) });
  }
  return { type: "tower", centre: best, radius, basePoly, lane: bestLane, clearPoly };
}
function placeLandmarks(rng, scene, townSite, coreRadius, size, terrain, w, h, overrides, cropSize) {
  const footprint = scene.footprint;
  if (!footprint || footprint.length < 3)
    return;
  const landmarks = scene.landmarks || [];
  const avoid = [];
  const castleChance = { small_city: 0.4, city: 0.6, large_city: 0.8, metropolis: 1 };
  const castleRoll = rng() < (castleChance[size] ?? 0.5);
  if (overrides?.castle ?? castleRoll) {
    const castle = buildCastle(rng, scene, townSite, coreRadius, w, h, overrides?.castle === true);
    if (castle) {
      landmarks.push(castle);
      removeHousesIn(scene, castle.clearPoly);
      avoid.push([castle.centre.x, castle.centre.y, coreRadius * 0.35]);
    }
  }
  const cathChance = { small_city: 0.3, city: 0.55, large_city: 0.75, metropolis: 0.9 };
  const cathRoll = rng() < (cathChance[size] ?? 0.4);
  if (overrides?.cathedral ?? cathRoll) {
    const cath = buildCathedral(rng, scene, townSite, coreRadius, w, h, avoid, overrides?.cathedral === true);
    if (cath) {
      landmarks.push(cath);
      removeHousesIn(scene, cath.clearPoly);
      avoid.push([cath.centre.x, cath.centre.y, coreRadius * 0.25]);
    }
  }
  const barracksChance = { small_city: 0.3, city: 0.45, large_city: 0.6, metropolis: 0.75 };
  const barracksRoll = rng() < (barracksChance[size] ?? 0.4);
  if (overrides?.barracks ?? barracksRoll) {
    const barracks = buildBarracks(rng, scene, townSite, coreRadius, w, h, avoid, overrides?.barracks === true);
    if (barracks) {
      landmarks.push(barracks);
      removeHousesIn(scene, barracks.clearPoly);
      avoid.push([barracks.centre.x, barracks.centre.y, coreRadius * 0.28]);
    }
  }
  const marketSlots = { small_city: 1, city: 1, large_city: 2, metropolis: 3 };
  const marketChance = { small_city: 0.6, city: 0.75, large_city: 0.7, metropolis: 0.7 };
  const slots = marketSlots[size] ?? 1;
  const mChance = marketChance[size] ?? 0.6;
  for (let i = 0; i < slots; i++) {
    const mRoll = rng() < mChance;
    const want = i === 0 ? overrides?.market ?? mRoll : overrides?.market === false ? false : mRoll;
    if (!want)
      continue;
    const market = buildMarket(rng, scene, townSite, coreRadius, w, h, avoid, i === 0 && overrides?.market === true);
    if (market) {
      landmarks.push(market);
      removeHousesIn(scene, market.clearPoly);
      avoid.push([market.centre.x, market.centre.y, coreRadius * 0.2]);
    }
  }
  const towerRoll = rng() < 0.45;
  if (overrides?.tower ?? towerRoll) {
    const tower = buildTower(rng, scene, townSite, coreRadius, w, h, overrides?.tower === true, cropSize);
    if (tower) {
      landmarks.push(tower);
      removeHousesIn(scene, tower.clearPoly);
    }
  }
  scene.landmarks = landmarks;
}
function resampleClosed(poly, step = 14) {
  if (poly.length < 3)
    return poly;
  const out = [];
  let carry = 0;
  for (let i = 0; i < poly.length; i++) {
    const a = poly[i];
    const b = poly[(i + 1) % poly.length];
    const seg = Math.hypot(b.x - a.x, b.y - a.y);
    if (seg < 1e-9)
      continue;
    let d = carry;
    while (d < seg) {
      const t = d / seg;
      out.push({ x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t });
      d += step;
    }
    carry = d - seg;
  }
  return out;
}
function buildCityWalls(rng, scene, townSite, coreRadius, size, w, h) {
  const footprint = scene.footprint;
  if (!footprint || footprint.length < 3)
    return null;
  const blocks = scene.street_base || [footprint];
  const allpts = [];
  for (const blk of blocks)
    for (const p of blk)
      allpts.push(p);
  if (allpts.length < 3)
    return null;
  let minx = Math.min(...allpts.map((p) => p.x));
  let maxx = Math.max(...allpts.map((p) => p.x));
  let miny = Math.min(...allpts.map((p) => p.y));
  let maxy = Math.max(...allpts.map((p) => p.y));
  const pad = 18;
  minx -= pad;
  miny -= pad;
  maxx += pad;
  maxy += pad;
  const cell = 6;
  const gw = Math.max(8, Math.floor((maxx - minx) / cell) + 2);
  const gh = Math.max(8, Math.floor((maxy - miny) / cell) + 2);
  const grid = new Uint8Array(gw * gh);
  const at = (x, y) => y * gw + x;
  const toGrid = (p) => [Math.floor((p.x - minx) / cell), Math.floor((p.y - miny) / cell)];
  for (const blk of blocks) {
    const gpts = blk.map(toGrid);
    const ys = gpts.map((g) => g[1]);
    const ylo = Math.max(0, Math.min(...ys));
    const yhi = Math.min(gh, Math.max(...ys) + 1);
    for (let yy = ylo; yy < yhi; yy++) {
      const xsCross = [];
      const m = gpts.length;
      for (let i = 0; i < m; i++) {
        const [ax, ay] = gpts[i];
        const [bx, by] = gpts[(i + 1) % m];
        if (ay > yy !== by > yy) {
          const t = by - ay !== 0 ? (yy - ay) / (by - ay) : 0;
          xsCross.push(ax + t * (bx - ax));
        }
      }
      xsCross.sort((a, b) => a - b);
      for (let k = 0; k + 1 < xsCross.length; k += 2) {
        const x0 = Math.floor(xsCross[k]);
        const x1 = Math.ceil(xsCross[k + 1]);
        for (let x = Math.max(0, x0); x < Math.min(gw, x1 + 1); x++)
          grid[at(x, yy)] = 1;
      }
    }
  }
  const g2 = new Uint8Array(grid);
  for (let y = 0; y < gh; y++) {
    for (let x = 0; x < gw; x++) {
      if (grid[at(x, y)])
        continue;
      let any = false;
      for (let dy = -1; dy <= 1 && !any; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          const nx = x + dx;
          const ny = y + dy;
          if (nx >= 0 && nx < gw && ny >= 0 && ny < gh && grid[at(nx, ny)]) {
            any = true;
            break;
          }
        }
      }
      if (any)
        g2[at(x, y)] = 1;
    }
  }
  const occGrid = g2;
  const isOcc = (x, y) => x >= 0 && x < gw && y >= 0 && y < gh && occGrid[at(x, y)] > 0;
  const compId = new Int32Array(gw * gh).fill(-1);
  const components = [];
  for (let y0 = 0; y0 < gh; y0++) {
    for (let x0 = 0; x0 < gw; x0++) {
      if (!isOcc(x0, y0) || compId[at(x0, y0)] >= 0)
        continue;
      const id = components.length;
      const cells = [];
      const stack = [[x0, y0]];
      compId[at(x0, y0)] = id;
      while (stack.length) {
        const top = stack.pop();
        if (!top)
          break;
        const [cx, cy] = top;
        cells.push(at(cx, cy));
        for (const [ddx, ddy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
          const nx = cx + ddx;
          const ny = cy + ddy;
          if (isOcc(nx, ny) && compId[at(nx, ny)] < 0) {
            compId[at(nx, ny)] = id;
            stack.push([nx, ny]);
          }
        }
      }
      components.push(cells);
    }
  }
  if (!components.length)
    return null;
  const biggest = Math.max(...components.map((c) => c.length));
  const keptComponents = components.filter((c) => c.length >= Math.max(20, biggest * 0.12));
  const dirs = [[-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1]];
  const roads = scene.roads;
  const waterPoly = scene.water;
  const traceComponent = (compIndex) => {
    let bsx = -1;
    let bsy = -1;
    for (let y = 0; y < gh && bsy < 0; y++) {
      for (let x = 0; x < gw; x++) {
        if (compId[at(x, y)] === compIndex) {
          bsx = x;
          bsy = y;
          break;
        }
      }
    }
    if (bsx < 0)
      return null;
    const occHere = (x, y) => x >= 0 && x < gw && y >= 0 && y < gh && compId[at(x, y)] === compIndex;
    const contour = [];
    let cur = [bsx, bsy];
    let prev = [bsx - 1, bsy];
    const startc = [bsx, bsy];
    let guard = 0;
    const maxsteps = gw * gh * 2;
    while (guard < maxsteps) {
      guard++;
      const pdx = prev[0] - cur[0];
      const pdy = prev[1] - cur[1];
      let startIdx = 0;
      for (let i = 0; i < 8; i++) {
        if (dirs[i][0] === pdy && dirs[i][1] === pdx) {
          startIdx = i;
          break;
        }
      }
      let foundNext = null;
      for (let off = 1; off <= 8; off++) {
        const d = dirs[(startIdx + off) % 8];
        const nx = cur[0] + d[1];
        const ny = cur[1] + d[0];
        if (occHere(nx, ny)) {
          foundNext = [nx, ny];
          prev = cur;
          cur = [nx, ny];
          break;
        }
      }
      if (foundNext === null)
        break;
      contour.push({ x: minx + cur[0] * cell + cell / 2, y: miny + cur[1] * cell + cell / 2 });
      if (cur[0] === startc[0] && cur[1] === startc[1] && contour.length > 4)
        break;
    }
    if (contour.length < 6)
      return null;
    return contour;
  };
  const segIntersect = (p1, p2, p3, p4) => {
    const den = (p1.x - p2.x) * (p3.y - p4.y) - (p1.y - p2.y) * (p3.x - p4.x);
    if (Math.abs(den) < 1e-9)
      return null;
    const t = ((p1.x - p3.x) * (p3.y - p4.y) - (p1.y - p3.y) * (p3.x - p4.x)) / den;
    const u = ((p1.x - p3.x) * (p1.y - p2.y) - (p1.y - p3.y) * (p1.x - p2.x)) / den;
    if (t >= 0 && t <= 1 && u >= 0 && u <= 1)
      return { x: p1.x + t * (p2.x - p1.x), y: p1.y + t * (p2.y - p1.y) };
    return null;
  };
  const sandMarginForWalls = Math.min(w, h) * 0.02 + 4;
  const finishRing = (contour, riverTrim) => {
    const downsampled = contour.filter((_, i) => i % 2 === 0);
    let ring = chaikinClosed(downsampled, 2);
    ring = resampleClosed(ring, 14);
    if (ring.length < 8)
      return null;
    let open = false;
    if (riverTrim && waterPoly) {
      const nearWater = ring.map((p) => minDistToPoly(p, waterPoly) < sandMarginForWalls + 10);
      const cntNear = nearWater.filter(Boolean).length;
      if (cntNear >= 3 && cntNear < ring.length * 0.6) {
        const m = ring.length;
        let bestStart = -1;
        let bestLen = 0;
        let i = 0;
        let rot = 0;
        for (let k = 0; k < m; k++) {
          if (nearWater[k]) {
            rot = k;
            break;
          }
        }
        while (i < m) {
          const idx = (rot + i) % m;
          if (nearWater[idx]) {
            i++;
            continue;
          }
          let len = 0;
          let j = i;
          while (j < m && !nearWater[(rot + j) % m]) {
            len++;
            j++;
          }
          if (len > bestLen) {
            bestLen = len;
            bestStart = (rot + i) % m;
          }
          i = j;
        }
        if (bestStart >= 0 && bestLen >= 6) {
          const kept = [];
          for (let k = 0; k < bestLen; k++)
            kept.push(ring[(bestStart + k) % m]);
          ring = kept;
          open = true;
        }
      }
    }
    const n = ring.length;
    const nearestRing = (pt) => {
      let best = -1;
      let bestD = Infinity;
      for (let j = 0; j < n; j++) {
        const c = ring[j];
        const d = (pt.x - c.x) ** 2 + (pt.y - c.y) ** 2;
        if (d < bestD) {
          bestD = d;
          best = j;
        }
      }
      return best;
    };
    const gates = [];
    const gateReach = Math.max(28, coreRadius * 0.18);
    const segCount = open ? n - 1 : n;
    for (const road of roads) {
      if (road.role !== "primary" && road.role !== "branch")
        continue;
      const pts = road.points;
      if (pts.length < 2)
        continue;
      const crossings = [];
      for (let i = 0; i < pts.length - 1; i++) {
        const a = pts[i];
        const b = pts[i + 1];
        for (let j = 0; j < segCount; j++) {
          const c = ring[j];
          const d = ring[(j + 1) % n];
          const ip = segIntersect(a, b, c, d);
          if (ip) {
            const ta = Math.atan2(d.y - c.y, d.x - c.x);
            crossings.push({ pos: ip, angle: ta, ringI: j });
          }
        }
      }
      if (!crossings.length) {
        let best = null;
        for (const p of pts) {
          const j = nearestRing(p);
          const c = ring[j];
          const dd = Math.hypot(p.x - c.x, p.y - c.y);
          if (best === null || dd < best[0])
            best = [dd, j];
        }
        if (best && best[0] <= gateReach) {
          const j = best[1];
          const c = ring[j];
          const d = ring[(j + 1) % n];
          const ta = Math.atan2(d.y - c.y, d.x - c.x);
          crossings.push({ pos: c, angle: ta, ringI: j });
        }
      }
      for (const found of crossings) {
        let okGate = true;
        for (const g of gates) {
          if (Math.hypot(found.pos.x - g.pos.x, found.pos.y - g.pos.y) <= coreRadius * 0.25) {
            okGate = false;
            break;
          }
        }
        if (okGate)
          gates.push(found);
      }
    }
    const nearGate = (pt, tol) => gates.some((g) => Math.hypot(pt.x - g.pos.x, pt.y - g.pos.y) < tol);
    const towers = [];
    const towerMinSep = Math.max(40, coreRadius * 0.28);
    const gateClear = coreRadius * 0.14;
    for (let i = 0; i < n; i++) {
      const a = ring[(i - 3 + n) % n];
      const b = ring[i];
      const c = ring[(i + 3) % n];
      const v1x = b.x - a.x;
      const v1y = b.y - a.y;
      const v2x = c.x - b.x;
      const v2y = c.y - b.y;
      const l1 = Math.hypot(v1x, v1y) || 1;
      const l2 = Math.hypot(v2x, v2y) || 1;
      const dot = (v1x * v2x + v1y * v2y) / (l1 * l2);
      const cross = v1x * v2y - v1y * v2x;
      const turn = Math.acos(Math.max(-1, Math.min(1, dot)));
      if (turn > 0.5 && cross < 0) {
        if (!nearGate(b, gateClear) && towers.every((t) => Math.hypot(b.x - t.x, b.y - t.y) > towerMinSep)) {
          towers.push(b);
        }
      }
    }
    const targetSpacing = Math.max(55, coreRadius * 0.45);
    let acc = 0;
    for (let i = 0; i < n; i++) {
      const b = ring[i];
      const nb = ring[(i + 1) % n];
      acc += Math.hypot(nb.x - b.x, nb.y - b.y);
      if (acc >= targetSpacing) {
        if (!nearGate(b, gateClear) && towers.every((t) => Math.hypot(b.x - t.x, b.y - t.y) > towerMinSep)) {
          towers.push(b);
          acc = 0;
        }
      }
    }
    if (open && ring.length >= 2) {
      for (const end of [ring[0], ring[ring.length - 1]]) {
        if (towers.every((t) => Math.hypot(end.x - t.x, end.y - t.y) > towerMinSep * 0.5))
          towers.push(end);
      }
    }
    return { ring, gates, towers, open };
  };
  const trimToRiver = !!waterPoly && keptComponents.length >= 2 && rng() < 0.45;
  const wallRings = [];
  for (let ci = 0; ci < components.length; ci++) {
    if (!keptComponents.includes(components[ci]))
      continue;
    const contour = traceComponent(ci);
    if (!contour)
      continue;
    const wr = finishRing(contour, trimToRiver);
    if (wr)
      wallRings.push(wr);
  }
  if (!wallRings.length)
    return null;
  wallRings.sort((a, b) => b.ring.length - a.ring.length);
  const primary = wallRings[0];
  return { ring: primary.ring, gates: primary.gates, towers: primary.towers, rings: wallRings };
}

// src/generate.ts
function generateFull(terrain, seedStr, opts) {
  const rng = makeRng(hash32(seedStr + ":" + terrain));
  const noise = new Noise2D(rng);
  const fullMode = opts.mode === "full";
  const size = opts.size ?? "town";
  const OUT = fullMode ? MAP_SIZE_BY_SIZE[size] ?? 1e3 : 1e3;
  const w = fullMode ? OUT + 500 : OUT;
  const h = w;
  const scene = { terrain, water: null, centreline: null, ridges: null };
  if (terrain === "coastal") {
    scene.water = makeCoast(rng, noise, w, h, opts).water;
  } else if (terrain === "river") {
    const r = makeRiver(rng, noise, w, h, opts);
    scene.water = r.water;
    scene.centreline = r.centreline;
    scene.riverWidth = r.width;
  } else if (terrain === "lake") {
    scene.water = makeLake(rng, noise, w, h, opts).water;
  } else if (terrain === "mountain") {
    if (!fullMode) {
      const m = makeMountainSpine(rng, noise, w, h, opts);
      scene.mountains = m.mountains;
      scene.ridges = m.ridges;
    }
  }
  const mtnSide = opts.mountainSide;
  let roads = [];
  let townSite = null;
  if (opts.showRoads !== false) {
    const enabled = opts.enabledEdges ?? defaultEdges(rng, scene, w, h, terrain);
    const net = buildRoadNetwork(rng, scene, w, h, terrain, enabled);
    roads = net.roads;
    townSite = net.townSite;
  }
  if (terrain !== "mountain" && mtnSide && /[NESW]/.test(mtnSide)) {
    const anchor = townSite ?? { x: w / 2, y: h / 2 };
    const m = makeMountainSpineOverlay(rng, noise, w, h, opts, mtnSide, scene.water, OUT, anchor);
    scene.mountains = m.mountains;
    scene.ridges = m.ridges;
    scene.mountainSide = mtnSide;
  } else if (terrain === "mountain" && fullMode) {
    const anchor = townSite ?? { x: w / 2, y: h / 2 };
    const m = makeMountainSpine(rng, noise, w, h, opts, OUT, anchor);
    scene.mountains = m.mountains;
    scene.ridges = m.ridges;
  }
  const baseForest = terrain === "mountain" ? 5 : terrain === "inland" ? 13 : 12;
  let forestCount = baseForest;
  if (fullMode) {
    const areaRatio = w * h / (OUT * OUT);
    forestCount = Math.floor(baseForest * areaRatio * 1);
  }
  const forestMul = opts.overrides?.forestDensity;
  if (forestMul !== void 0)
    forestCount = Math.round(forestCount * forestMul);
  if (opts.showForest !== false && forestCount > 0) {
    scene.forests = placeForests(rng, noise, w, h, scene, forestCount);
  }
  scene.roads = roads;
  let houses = [];
  if (fullMode && roads.length) {
    houses = buildSettlement(rng, scene, w, h, size, terrain, opts.overrides, OUT);
    roads = scene.roads;
  }
  const full = {
    ...scene,
    roads,
    townSite,
    size,
    houses: scene.houses ?? houses,
    footprint: scene.footprint,
    parks: scene.parks,
    street_base: scene.street_base,
    walls: scene.walls ?? null,
    landmarks: scene.landmarks ?? [],
    farms: scene.farms ?? [],
    outbuildings: scene.outbuildings ?? [],
    outlanes: scene.outlanes ?? [],
    dock: scene.dock ?? null
  };
  if (fullMode) {
    recenterSceneOnCity(full, w, h, OUT);
  }
  return full;
}
function translatePolyline(pts, dx, dy) {
  return pts.map((p) => ({ x: p.x + dx, y: p.y + dy }));
}
function recenterSceneOnCity(scene, w, h, out = 1e3) {
  const houses = scene.houses || [];
  if (!houses.length)
    return;
  const cxs = [];
  const cys = [];
  for (const hh of houses) {
    let c = hh.centre;
    if (!c && hh.polygon) {
      const poly = hh.polygon;
      c = { x: poly.reduce((s, p) => s + p.x, 0) / poly.length, y: poly.reduce((s, p) => s + p.y, 0) / poly.length };
    }
    if (c) {
      cxs.push(c.x);
      cys.push(c.y);
    }
  }
  if (!cxs.length)
    return;
  const cityCx = cxs.reduce((s, v) => s + v, 0) / cxs.length;
  const cityCy = cys.reduce((s, v) => s + v, 0) / cys.length;
  const pickShift = (vals, centre, desired, lo0, hi0) => {
    const sorted = vals.slice().sort((a, b) => a - b);
    const nn = sorted.length;
    const bLo = sorted[Math.floor(nn * 0.02)] - 20;
    const bHi = sorted[Math.min(nn - 1, Math.ceil(nn * 0.98))] + 20;
    const fitLo = -bLo;
    const fitHi = out - bHi;
    const lo1 = Math.max(lo0, fitLo);
    const hi1 = Math.min(hi0, fitHi);
    if (lo1 <= hi1)
      return Math.max(lo1, Math.min(hi1, desired));
    const VOID_CAP = 220;
    const lo2 = Math.max(lo0 - VOID_CAP, fitLo);
    const hi2 = Math.min(hi0 + VOID_CAP, fitHi);
    if (lo2 <= hi2)
      return Math.max(lo2, Math.min(hi2, desired));
    return Math.max(lo0 - VOID_CAP, Math.min(hi0 + VOID_CAP, desired));
  };
  const dx = pickShift(cxs, cityCx, out / 2 - cityCx, out - w, 0);
  const dy = pickShift(cys, cityCy, out / 2 - cityCy, out - h, 0);
  if (Math.abs(dx) < 1 && Math.abs(dy) < 1)
    return;
  if (scene.water)
    scene.water = translatePolyline(scene.water, dx, dy);
  if (scene.centreline)
    scene.centreline = translatePolyline(scene.centreline, dx, dy);
  const floodStrips = [];
  if (scene.terrain === "river" && scene.centreline && scene.centreline.length >= 4 && scene.riverWidth) {
    const cl = scene.centreline;
    const inCrop = (p) => p.x >= 0 && p.x <= out && p.y >= 0 && p.y <= out;
    const headInside = inCrop(cl[0]);
    const tailInside = inCrop(cl[cl.length - 1]);
    if (headInside || tailInside) {
      const reach = out * 1.2;
      const extendPt = (a, b) => {
        let hx = a.x - b.x;
        let hy = a.y - b.y;
        const hl = Math.hypot(hx, hy) || 1;
        hx /= hl;
        hy /= hl;
        return { x: a.x + hx * reach, y: a.y + hy * reach };
      };
      const stripPad = 8;
      let extended = cl.slice();
      if (headInside) {
        const e0 = extendPt(cl[0], cl[1]);
        floodStrips.push(offsetPolyline([e0, cl[0]], scene.riverWidth / 2 + stripPad));
        extended = [e0, ...extended];
      }
      if (tailInside) {
        const e1 = extendPt(cl[cl.length - 1], cl[cl.length - 2]);
        floodStrips.push(offsetPolyline([cl[cl.length - 1], e1], scene.riverWidth / 2 + stripPad));
        extended = [...extended, e1];
      }
      scene.centreline = extended;
      scene.water = offsetPolyline(extended, scene.riverWidth / 2);
    }
  }
  if (scene.ridges)
    scene.ridges = scene.ridges.map((r) => translatePolyline(r, dx, dy));
  if (scene.mountains) {
    for (const m of scene.mountains) {
      m.spines = m.spines.map((sp) => sp.map((p) => ({ ...p, x: p.x + dx, y: p.y + dy })));
      m._field = void 0;
    }
  }
  if (scene.forests) {
    for (const f of scene.forests) {
      f.polygon = translatePolyline(f.polygon, dx, dy);
      f.cx += dx;
      f.cy += dy;
    }
  }
  let ts = null;
  if (scene.roads) {
    for (const road of scene.roads) {
      road.points = translatePolyline(road.points, dx, dy);
      if (road.town_site) {
        road.town_site = { x: road.town_site.x + dx, y: road.town_site.y + dy };
        ts = road.town_site;
      }
    }
    const waterPoly = scene.water;
    const inWater = (pt) => !!waterPoly && pointInPolygon(pt, waterPoly);
    const extendOne = (ptsIn, endIdx) => {
      let pts = ptsIn;
      const atStart = endIdx === 0;
      if (waterPoly) {
        if (atStart)
          while (pts.length > 2 && inWater(pts[0]))
            pts = pts.slice(1);
        else
          while (pts.length > 2 && inWater(pts[pts.length - 1]))
            pts = pts.slice(0, -1);
      }
      const end = atStart ? pts[0] : pts[pts.length - 1];
      const nbr = atStart ? pts[1] : pts[pts.length - 2];
      const margin = 2;
      if (end.x <= margin || end.x >= out - margin || end.y <= margin || end.y >= out - margin)
        return pts;
      if (ts && Math.hypot(end.x - ts.x, end.y - ts.y) < out * 0.28)
        return pts;
      if (inWater(end))
        return pts;
      let hx = end.x - nbr.x;
      let hy = end.y - nbr.y;
      const hl = Math.hypot(hx, hy) || 1;
      hx /= hl;
      hy /= hl;
      let ex = end.x;
      let ey = end.y;
      let steps = 0;
      let blockedByWater = false;
      while (ex >= 0 && ex <= out && ey >= 0 && ey <= out && steps < out * 2) {
        const nx = ex + hx * 8;
        const ny = ey + hy * 8;
        if (inWater({ x: nx, y: ny })) {
          blockedByWater = true;
          break;
        }
        ex = nx;
        ey = ny;
        steps++;
      }
      if (blockedByWater) {
        const advanced = Math.hypot(ex - end.x, ey - end.y);
        if (advanced > 10) {
          const newEnd2 = { x: ex, y: ey };
          return atStart ? [newEnd2, ...pts] : [...pts, newEnd2];
        }
        return pts;
      }
      const newEnd = { x: ex, y: ey };
      return atStart ? [newEnd, ...pts] : [...pts, newEnd];
    };
    const extendToEdge = (pts) => {
      if (pts.length < 2)
        return pts;
      let out2 = extendOne(pts, 0);
      out2 = extendOne(out2, out2.length - 1);
      return out2;
    };
    for (const road of scene.roads) {
      if (road.role === "primary" || road.role === "branch") {
        road.points = extendToEdge(road.points);
      }
    }
    {
      const edgeM = 6;
      const reachesEdge = (pts) => {
        for (const p of pts) {
          if (p.x <= edgeM || p.x >= out - edgeM || p.y <= edgeM || p.y >= out - edgeM)
            return true;
        }
        return false;
      };
      const connected = scene.roads.some(
        (r) => (r.role === "primary" || r.role === "branch") && reachesEdge(r.points)
      );
      if (!connected && ts) {
        const dirs = [
          [0, -1, ts.y],
          // north: distance ts.y
          [0, 1, out - ts.y],
          // south
          [-1, 0, ts.x],
          // west
          [1, 0, out - ts.x]
          // east
        ];
        dirs.sort((a, b) => a[2] - b[2]);
        for (const [hx, hy] of dirs) {
          const path = [{ x: ts.x, y: ts.y }];
          let ex = ts.x, ey = ts.y;
          let ok = true;
          let reached = false;
          let guard = 0;
          while (guard++ < out) {
            const nx = ex + hx * 8;
            const ny = ey + hy * 8;
            if (nx < 0 || nx > out || ny < 0 || ny > out) {
              reached = true;
              break;
            }
            if (inWater({ x: nx, y: ny })) {
              ok = false;
              break;
            }
            ex = nx;
            ey = ny;
            if (ex <= edgeM || ex >= out - edgeM || ey <= edgeM || ey >= out - edgeM) {
              path.push({ x: ex, y: ey });
              reached = true;
              break;
            }
            path.push({ x: ex, y: ey });
          }
          if (ok && reached && path.length >= 2) {
            scene.roads.push({ points: path, class: "arterial", role: "primary", side: "A", town_site: ts });
            break;
          }
        }
      }
    }
  }
  if (scene.footprint)
    scene.footprint = translatePolyline(scene.footprint, dx, dy);
  if (scene.parks)
    scene.parks = scene.parks.map((p) => translatePolyline(p, dx, dy));
  if (scene.street_base)
    scene.street_base = scene.street_base.map((b) => translatePolyline(b, dx, dy));
  if (scene.farms) {
    for (const farm of scene.farms) {
      farm.polygon = translatePolyline(farm.polygon, dx, dy);
      if (farm.house)
        farm.house = { x: farm.house.x + dx, y: farm.house.y + dy };
    }
  }
  if (scene.outbuildings) {
    for (const ob of scene.outbuildings) {
      ob.centre = { x: ob.centre.x + dx, y: ob.centre.y + dy };
    }
  }
  if (scene.outlanes) {
    for (const lane of scene.outlanes) {
      lane.points = translatePolyline(lane.points, dx, dy);
    }
  }
  if (scene.dock) {
    const d = scene.dock;
    d.quay = translatePolyline(d.quay, dx, dy);
    d.jetties = d.jetties.map((j) => translatePolyline(j, dx, dy));
    d.boats = d.boats.map((b) => ({ ...b, pos: { x: b.pos.x + dx, y: b.pos.y + dy } }));
    d.warehouses = d.warehouses.map((wh) => translatePolyline(wh, dx, dy));
    if (d.lane)
      d.lane = translatePolyline(d.lane, dx, dy);
    d.shorePt = { x: d.shorePt.x + dx, y: d.shorePt.y + dy };
  }
  if (scene.walls) {
    const wls = scene.walls;
    if (wls.rings && wls.rings.length) {
      for (const wr of wls.rings) {
        wr.ring = translatePolyline(wr.ring, dx, dy);
        for (const g of wr.gates)
          g.pos = { x: g.pos.x + dx, y: g.pos.y + dy };
        wr.towers = wr.towers.map((t) => ({ x: t.x + dx, y: t.y + dy }));
      }
      wls.ring = wls.rings[0].ring;
      wls.gates = wls.rings[0].gates;
      wls.towers = wls.rings[0].towers;
    } else {
      wls.ring = translatePolyline(wls.ring, dx, dy);
      for (const g of wls.gates)
        g.pos = { x: g.pos.x + dx, y: g.pos.y + dy };
      wls.towers = wls.towers.map((t) => ({ x: t.x + dx, y: t.y + dy }));
    }
  }
  if (scene.landmarks) {
    for (const lm of scene.landmarks) {
      lm.clearPoly = translatePolyline(lm.clearPoly, dx, dy);
      lm.centre = { x: lm.centre.x + dx, y: lm.centre.y + dy };
      if (lm.type === "castle") {
        lm.bailey = translatePolyline(lm.bailey, dx, dy);
        lm.keep = translatePolyline(lm.keep, dx, dy);
        lm.towers = lm.towers.map((t) => ({ x: t.x + dx, y: t.y + dy }));
        lm.gate = { x: lm.gate.x + dx, y: lm.gate.y + dy };
        if (lm.approach)
          lm.approach = translatePolyline(lm.approach, dx, dy);
      } else if (lm.type === "cathedral") {
        lm.nave = translatePolyline(lm.nave, dx, dy);
        lm.transept = translatePolyline(lm.transept, dx, dy);
        lm.outline = translatePolyline(lm.outline, dx, dy);
        lm.apse = { pos: { x: lm.apse.pos.x + dx, y: lm.apse.pos.y + dy }, r: lm.apse.r };
      } else if (lm.type === "market") {
        lm.plaza = translatePolyline(lm.plaza, dx, dy);
        lm.stalls = lm.stalls.map((s) => translatePolyline(s, dx, dy));
        lm.feature = { pos: { x: lm.feature.pos.x + dx, y: lm.feature.pos.y + dy }, r: lm.feature.r };
      } else if (lm.type === "barracks") {
        lm.yard = translatePolyline(lm.yard, dx, dy);
        lm.halls = lm.halls.map((hh) => translatePolyline(hh, dx, dy));
        lm.drill = { pos: { x: lm.drill.pos.x + dx, y: lm.drill.pos.y + dy }, r: lm.drill.r };
      } else if (lm.type === "tower") {
        lm.basePoly = translatePolyline(lm.basePoly, dx, dy);
        if (lm.lane)
          lm.lane = translatePolyline(lm.lane, dx, dy);
      }
    }
  }
  for (const hh of houses) {
    if (hh.polygon)
      hh.polygon = translatePolyline(hh.polygon, dx, dy);
    if (hh.centre)
      hh.centre = { x: hh.centre.x + dx, y: hh.centre.y + dy };
  }
  for (const strip of floodStrips) {
    removeHousesIn(scene, strip);
    if (scene.outbuildings)
      scene.outbuildings = scene.outbuildings.filter((ob) => !pointInPolygon(ob.centre, strip));
  }
  if (ts)
    scene.townSite = ts;
  else if (scene.townSite)
    scene.townSite = { x: scene.townSite.x + dx, y: scene.townSite.y + dy };
}
function edgeMidpoint(edge, w, h) {
  const inset = 0.12;
  switch (edge) {
    case "N":
      return { x: w * 0.5, y: h * inset };
    case "S":
      return { x: w * 0.5, y: h * (1 - inset) };
    case "E":
      return { x: w * (1 - inset), y: h * 0.5 };
    default:
      return { x: w * inset, y: h * 0.5 };
  }
}
function defaultEdges(rng, scene, w, h, terrain) {
  const dirs = ["N", "E", "S", "W"];
  const e = {};
  for (const k of dirs)
    e[k] = rng() < 0.6;
  if (!Object.values(e).some(Boolean)) {
    e[dirs[Math.floor(rng() * 4)]] = true;
  }
  if (terrain === "river" && scene.centreline && scene.centreline.length >= 2) {
    const bankOf = {};
    const byBank = { A: [], B: [] };
    for (const k of dirs) {
      const b = waterSideOfPoint(edgeMidpoint(k, w, h), scene, w, h);
      bankOf[k] = b;
      byBank[b].push(k);
    }
    if (byBank.A.length && byBank.B.length) {
      const enabledBanks = new Set(dirs.filter((k) => e[k]).map((k) => bankOf[k]));
      for (const bank of ["A", "B"]) {
        if (!enabledBanks.has(bank)) {
          const cand = byBank[bank];
          const pick2 = cand[Math.floor(rng() * cand.length)];
          e[pick2] = true;
        }
      }
    }
  }
  return e;
}

// src/render.ts
var PALETTE = {
  grassBase: "rgb(155,178,115)",
  grassBright: "rgb(175,195,130)",
  beach: "rgb(242,232,200)",
  waterDeep: "rgb(60,98,122)",
  waterLight: "rgb(95,138,165)",
  waterHigh: "rgb(140,178,198)",
  mtnFill: "rgba(160,144,116,0.92)",
  mtnOut: "rgba(110,90,64,0.9)",
  ink: "rgb(35,35,35)",
  vignette: "rgb(25,35,40)"
};
function pathPoly(ctx, poly) {
  ctx.beginPath();
  ctx.moveTo(poly[0].x, poly[0].y);
  for (let i = 1; i < poly.length; i++)
    ctx.lineTo(poly[i].x, poly[i].y);
  ctx.closePath();
}
function bufferPolygon(poly, dist) {
  const n = poly.length;
  const out = [];
  let area = 0;
  for (let i = 0; i < n; i++) {
    const a = poly[i];
    const b = poly[(i + 1) % n];
    area += (b.x - a.x) * (b.y + a.y);
  }
  const sign = area > 0 ? 1 : -1;
  for (let i = 0; i < n; i++) {
    const prev = poly[(i - 1 + n) % n];
    const next = poly[(i + 1) % n];
    const tx = next.x - prev.x;
    const ty = next.y - prev.y;
    const tl = Math.hypot(tx, ty) || 1;
    const nx = -ty / tl * sign;
    const ny = tx / tl * sign;
    out.push({ x: poly[i].x + nx * dist, y: poly[i].y + ny * dist });
  }
  return out;
}
function drawBase(ctx, scene, w, h) {
  ctx.fillStyle = PALETTE.grassBase;
  ctx.fillRect(0, 0, w, h);
  const g = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, Math.max(w, h) * 0.6);
  g.addColorStop(0, "rgba(175,195,130,0.55)");
  g.addColorStop(1, "rgba(175,195,130,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, w, h);
  if (scene.water) {
    const water = scene.water;
    const beachDist = Math.min(w, h) * 0.02;
    const beach = bufferPolygon(water, beachDist);
    ctx.fillStyle = PALETTE.beach;
    pathPoly(ctx, beach);
    ctx.fill();
    ctx.fillStyle = PALETTE.waterDeep;
    pathPoly(ctx, water);
    ctx.fill();
    const inner = bufferPolygon(water, -Math.min(w, h) * 8e-3);
    ctx.fillStyle = PALETTE.waterLight;
    pathPoly(ctx, inner);
    ctx.fill();
    ctx.strokeStyle = "rgba(0,0,0,0.45)";
    ctx.lineWidth = 1.2;
    pathPoly(ctx, water);
    ctx.stroke();
    if (scene.centreline && scene.terrain === "river") {
      ctx.strokeStyle = "rgba(140,178,198,0.6)";
      ctx.lineWidth = Math.max(2, Math.min(w, h) * 6e-3);
      ctx.beginPath();
      ctx.moveTo(scene.centreline[0].x, scene.centreline[0].y);
      for (let i = 1; i < scene.centreline.length; i++) {
        ctx.lineTo(scene.centreline[i].x, scene.centreline[i].y);
      }
      ctx.stroke();
    }
  }
  if (scene.mountains && scene.mountains.length) {
    for (const mtn of scene.mountains)
      drawContourMountain(ctx, mtn, scene.water ?? void 0);
  } else if (scene.ridges) {
    for (const ridge of scene.ridges) {
      const rings = 4;
      for (let k = 0; k < rings; k++) {
        const ring = k === 0 ? ridge : bufferPolygon(ridge, -Math.min(w, h) * 0.012 * k);
        const shade = 1 - k * 0.12;
        ctx.fillStyle = `rgba(${Math.round(160 * shade)},${Math.round(144 * shade)},${Math.round(116 * shade)},0.95)`;
        pathPoly(ctx, ring);
        ctx.fill();
        ctx.strokeStyle = PALETTE.mtnOut;
        ctx.lineWidth = 1;
        pathPoly(ctx, ring);
        ctx.stroke();
      }
    }
  }
}
var HYPSO = [
  [196, 184, 150],
  [202, 188, 152],
  [208, 192, 156],
  [214, 198, 160],
  [220, 204, 168],
  [228, 212, 180],
  [236, 222, 196],
  [246, 236, 214]
];
var GRASS_RGB = [155, 178, 115];
function reliefColor(field, gx, gy, v, maxH) {
  const sh = hillshadeAt(field, field.minx + gx * field.cell, field.miny + gy * field.cell);
  const band = Math.min(HYPSO.length - 1, Math.floor(v * HYPSO.length));
  const [r, g, b] = HYPSO[band];
  const m = 0.78 + sh * 0.4;
  let R = r * m, G = g * m, B = b * m;
  if (v > 0.88) {
    const t = (v - 0.88) / 0.12;
    R = R * (1 - t) + 244 * t;
    G = G * (1 - t) + 244 * t;
    B = B * (1 - t) + 240 * t;
  }
  if (v < 0.12) {
    const a = v / 0.12;
    R = GRASS_RGB[0] * (1 - a) + R * a;
    G = GRASS_RGB[1] * (1 - a) + G * a;
    B = GRASS_RGB[2] * (1 - a) + B * a;
  }
  const q = 3;
  R = Math.round(R / q) * q;
  G = Math.round(G / q) * q;
  B = Math.round(B / q) * q;
  return `rgb(${R},${G},${B})`;
}
function drawContourMountain(ctx, mtn, water) {
  const field = buildHeightField(mtn, 4, 44, water);
  const { H, GW, GH, cell, minx, miny, maxH } = field;
  if (maxH <= 0)
    return;
  const LEVELS = 11;
  const invMaxH = 1 / maxH;
  ctx.fillStyle = "rgba(40,30,18,0.06)";
  for (let gy = 0; gy < GH - 1; gy++) {
    let gx = 0;
    while (gx < GW - 1) {
      if (H[gy * GW + gx] > 0.02 * maxH) {
        const start = gx;
        while (gx < GW - 1 && H[gy * GW + gx] > 0.02 * maxH)
          gx++;
        ctx.fillRect(minx + start * cell + 3, miny + gy * cell + 4, (gx - start) * cell + 1, cell + 1);
      } else
        gx++;
    }
  }
  let curCol = "";
  for (let gy = 0; gy < GH - 1; gy++) {
    let gx = 0;
    while (gx < GW - 1) {
      const v = H[gy * GW + gx] * invMaxH;
      if (v <= 0.02) {
        gx++;
        continue;
      }
      const col = reliefColor(field, gx, gy, v, maxH);
      const start = gx;
      gx++;
      while (gx < GW - 1) {
        const v2 = H[gy * GW + gx] * invMaxH;
        if (v2 <= 0.02)
          break;
        if (reliefColor(field, gx, gy, v2, maxH) !== col)
          break;
        gx++;
      }
      if (col !== curCol) {
        ctx.fillStyle = col;
        curCol = col;
      }
      ctx.fillRect(minx + start * cell, miny + gy * cell, (gx - start) * cell + 1, cell + 1);
    }
  }
  for (let li = 2; li < LEVELS; li++) {
    const L = li / LEVELS * maxH;
    const segs = contourSegments(field, L);
    const isIndex = li % 3 === 0;
    ctx.strokeStyle = isIndex ? "rgba(60,44,30,0.62)" : "rgba(72,56,38,0.34)";
    ctx.lineWidth = isIndex ? 1.3 : 0.7;
    ctx.beginPath();
    for (const [a, b] of segs) {
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
    }
    ctx.stroke();
  }
}
function drawForests(ctx, scene, excludeZone, extraExclude) {
  if (!scene.forests)
    return;
  const TREE_DARK = "rgb(48,76,40)";
  const TREE_MID = "rgb(78,110,62)";
  const TREE_LIGHT = "rgb(108,142,82)";
  for (const f of scene.forests) {
    const poly = f.polygon;
    if (poly.length < 3)
      continue;
    let minx = Infinity, miny = Infinity, maxx = -Infinity, maxy = -Infinity;
    for (const p of poly) {
      if (p.x < minx)
        minx = p.x;
      if (p.y < miny)
        miny = p.y;
      if (p.x > maxx)
        maxx = p.x;
      if (p.y > maxy)
        maxy = p.y;
    }
    const area = Math.abs(polyArea(poly));
    const R = Math.max(7, Math.min(16, Math.sqrt(area) * 0.05));
    const target = Math.max(6, Math.floor(area / (R * R * 1.4)));
    let s = Math.floor(f.cx * 928371 + f.cy * 1299709) >>> 0 || 1;
    const rand = () => {
      s = s * 1664525 + 1013904223 >>> 0;
      return s / 4294967296;
    };
    const crowns = [];
    let attempts = 0;
    while (crowns.length < target && attempts < target * 8) {
      attempts++;
      const px = minx + rand() * (maxx - minx);
      const py = miny + rand() * (maxy - miny);
      if (!pointInPoly2({ x: px, y: py }, poly))
        continue;
      if (excludeZone && pointInPoly2({ x: px, y: py }, excludeZone))
        continue;
      if (extraExclude && Math.hypot(px - extraExclude.c.x, py - extraExclude.c.y) < extraExclude.r)
        continue;
      if (scene.water) {
        if (pointInPolygonNonzero({ x: px, y: py }, scene.water))
          continue;
        const br = R * 0.7;
        let overWater = false;
        for (let a = 0; a < 8; a++) {
          const ang = a / 8 * Math.PI * 2;
          if (pointInPolygonNonzero({ x: px + Math.cos(ang) * br, y: py + Math.sin(ang) * br }, scene.water)) {
            overWater = true;
            break;
          }
        }
        if (overWater)
          continue;
      }
      crowns.push({ x: px, y: py });
    }
    if (!crowns.length)
      continue;
    crowns.sort((a, b) => a.y - b.y);
    ctx.fillStyle = "rgba(30,45,28,0.35)";
    for (const c of crowns) {
      ctx.beginPath();
      ctx.arc(c.x + 2.2, c.y + 2.8, R * 1.02, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = TREE_DARK;
    for (const c of crowns) {
      ctx.beginPath();
      ctx.arc(c.x, c.y, R, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = TREE_MID;
    for (const c of crowns) {
      ctx.beginPath();
      ctx.arc(c.x - R * 0.12, c.y - R * 0.12, R * 0.82, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = TREE_LIGHT;
    for (const c of crowns) {
      ctx.beginPath();
      ctx.arc(c.x - R * 0.28, c.y - R * 0.3, R * 0.5, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}
function polyArea(poly) {
  let s = 0;
  for (let i = 0; i < poly.length; i++) {
    const a = poly[i];
    const b = poly[(i + 1) % poly.length];
    s += a.x * b.y - b.x * a.y;
  }
  return s / 2;
}
function pointInPoly2(pt, poly) {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const xi = poly[i].x, yi = poly[i].y;
    const xj = poly[j].x, yj = poly[j].y;
    if (yi > pt.y !== yj > pt.y && pt.x < (xj - xi) * (pt.y - yi) / (yj - yi) + xi)
      inside = !inside;
  }
  return inside;
}
function drawVignetteAndTitle(ctx, w, h, title, mapDistance, distanceUnit) {
  const vg = ctx.createRadialGradient(w / 2, h / 2, Math.min(w, h) * 0.4, w / 2, h / 2, Math.max(w, h) * 0.72);
  vg.addColorStop(0, "rgba(20,30,34,0)");
  vg.addColorStop(1, "rgba(20,30,34,0.42)");
  ctx.fillStyle = vg;
  ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = "rgba(30,38,40,0.85)";
  ctx.lineWidth = Math.max(3, Math.min(w, h) * 6e-3);
  ctx.strokeRect(ctx.lineWidth / 2, ctx.lineWidth / 2, w - ctx.lineWidth, h - ctx.lineWidth);
  const unit = Math.min(w, h);
  const label = title.toUpperCase();
  ctx.font = `600 ${Math.round(unit * 0.032)}px Georgia, serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  const tw = ctx.measureText(label).width;
  const padX = 14;
  const pillW = tw + padX * 2;
  const pillH = Math.round(unit * 0.05);
  const pillX = w / 2 - pillW / 2;
  const pillY = Math.round(h * 0.02);
  ctx.fillStyle = "rgba(247,243,233,0.94)";
  ctx.strokeStyle = PALETTE.ink;
  ctx.lineWidth = 1.5;
  roundRect(ctx, pillX, pillY, pillW, pillH, 4);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = PALETTE.ink;
  ctx.fillText(label, w / 2, pillY + pillH / 2 + 1);
  const cr = unit * 0.035;
  const ccx = w - cr - unit * 0.04;
  const ccy = cr + unit * 0.04;
  ctx.fillStyle = "rgba(247,243,233,0.94)";
  ctx.strokeStyle = PALETTE.ink;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(ccx, ccy, cr, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = "rgb(60,60,66)";
  ctx.beginPath();
  ctx.moveTo(ccx, ccy - cr * 0.7);
  ctx.lineTo(ccx - cr * 0.22, ccy);
  ctx.lineTo(ccx + cr * 0.22, ccy);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = "rgb(150,150,156)";
  ctx.beginPath();
  ctx.moveTo(ccx, ccy + cr * 0.7);
  ctx.lineTo(ccx - cr * 0.22, ccy);
  ctx.lineTo(ccx + cr * 0.22, ccy);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = PALETTE.ink;
  ctx.font = `700 ${Math.round(cr * 0.5)}px Georgia, serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("N", ccx, ccy - cr * 0.72);
  drawScaleBar(ctx, w, h, unit, mapDistance, distanceUnit);
}
function niceRound(x) {
  if (x <= 0)
    return 1;
  const exp = Math.floor(Math.log10(x));
  const base = Math.pow(10, exp);
  const f = x / base;
  let nice;
  if (f >= 5)
    nice = 5;
  else if (f >= 2)
    nice = 2;
  else
    nice = 1;
  return nice * base;
}
function fmtDist(v) {
  if (Number.isInteger(v))
    return String(v);
  return String(parseFloat(v.toFixed(2)));
}
function drawScaleBar(ctx, w, h, unit, mapDistance, distanceUnit) {
  const distPerPx = mapDistance / w;
  const targetPx = w * 0.18;
  const rawDist = targetPx * distPerPx;
  const niceDist = niceRound(rawDist);
  const barW = niceDist / distPerPx;
  const barH = unit * 0.012;
  const barX = unit * 0.04;
  const barY = h - barH - unit * 0.06;
  const segs = 4;
  const segW = barW / segs;
  for (let i = 0; i < segs; i++) {
    ctx.fillStyle = i % 2 === 0 ? "rgb(40,40,40)" : "rgb(245,245,240)";
    ctx.fillRect(barX + i * segW, barY, segW, barH);
  }
  ctx.strokeStyle = PALETTE.ink;
  ctx.lineWidth = 1;
  ctx.strokeRect(barX, barY, barW, barH);
  ctx.fillStyle = PALETTE.ink;
  ctx.font = `600 ${Math.round(unit * 0.022)}px Georgia, serif`;
  ctx.textBaseline = "bottom";
  const labelY = barY - 2;
  ctx.textAlign = "center";
  ctx.fillText("0", barX, labelY);
  ctx.fillText(fmtDist(niceDist / 2), barX + barW / 2, labelY);
  ctx.textAlign = "left";
  ctx.fillText(`${fmtDist(niceDist)} ${distanceUnit}`, barX + barW + 4, labelY + unit * 0.022 * 0);
  ctx.textAlign = "center";
}
function renderScene(ctx, scene, w, h, title, mapDistance = 8, distanceUnit = "miles") {
  drawBase(ctx, scene, w, h);
  drawForests(ctx, scene);
  drawVignetteAndTitle(ctx, w, h, title, mapDistance, distanceUnit);
}
function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}
var STREET_COL = "rgb(188,170,134)";
var ROAD_COL = "rgb(176,158,120)";
var ROOF_PALETTE = [
  [[178, 132, 92], [138, 96, 64]],
  // warm brown
  [[155, 122, 88], [118, 90, 60]],
  // tan
  [[130, 108, 84], [98, 78, 58]],
  // darker brown
  [[110, 116, 122], [78, 84, 92]]
  // slate
];
function pickRoofColours(seed) {
  const palI = seed % 8;
  if (palI < 3)
    return ROOF_PALETTE[palI];
  if (palI < 6)
    return ROOF_PALETTE[palI - 3];
  return ROOF_PALETTE[3];
}
function rgb(c) {
  return `rgb(${c[0]},${c[1]},${c[2]})`;
}
function rgbLift(c, amt) {
  return `rgb(${Math.min(255, c[0] + amt)},${Math.min(255, c[1] + amt)},${Math.min(255, c[2] + amt)})`;
}
function strokePolyline(ctx, pts) {
  if (pts.length < 2)
    return;
  ctx.beginPath();
  ctx.moveTo(pts[0].x, pts[0].y);
  for (let i = 1; i < pts.length; i++)
    ctx.lineTo(pts[i].x, pts[i].y);
  ctx.stroke();
}
function renderFull(ctx, scene, w, h, title, mapDistance = 8, distanceUnit = "miles", name) {
  drawBase(ctx, scene, w, h);
  let excludeZone;
  if (scene.footprint && scene.footprint.length >= 3) {
    excludeZone = bufferPolygon(scene.footprint, 22);
  } else if (scene.walls && scene.walls.ring && scene.walls.ring.length >= 3) {
    excludeZone = bufferPolygon(scene.walls.ring, 22);
  }
  const dockExclude = scene.dock ? { c: scene.dock.shorePt, r: 46 } : void 0;
  drawForests(ctx, scene, excludeZone, dockExclude);
  if (scene.farms && scene.farms.length)
    drawFarms(ctx, scene.farms);
  const isCity = scene.street_base && scene.street_base.length || scene.footprint && scene.footprint.length;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  for (const road of scene.roads) {
    if (road.class === "bridge")
      continue;
    const isArterial = road.role === "primary" || road.role === "branch";
    ctx.strokeStyle = ROAD_COL;
    ctx.lineWidth = isArterial ? 7 : 4;
    strokePolyline(ctx, road.points);
  }
  if (scene.outlanes && scene.outlanes.length) {
    ctx.strokeStyle = ROAD_COL;
    ctx.lineWidth = 4;
    ctx.save();
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    for (const lane of scene.outlanes) {
      if (lane.points.length < 2)
        continue;
      const p = lane.points;
      ctx.beginPath();
      ctx.moveTo(p[0].x, p[0].y);
      if (p.length === 2) {
        ctx.lineTo(p[1].x, p[1].y);
      } else {
        for (let i = 1; i < p.length - 1; i++) {
          const mx = (p[i].x + p[i + 1].x) / 2;
          const my = (p[i].y + p[i + 1].y) / 2;
          ctx.quadraticCurveTo(p[i].x, p[i].y, mx, my);
        }
        ctx.lineTo(p[p.length - 1].x, p[p.length - 1].y);
      }
      ctx.stroke();
    }
    ctx.restore();
  }
  if (scene.street_base && scene.street_base.length) {
    ctx.fillStyle = STREET_COL;
    for (const block of scene.street_base) {
      const expanded = bufferPolygon(block, 4);
      pathPoly(ctx, expanded);
      ctx.fill();
    }
  }
  if (scene.parks) {
    ctx.fillStyle = "rgb(150,173,112)";
    for (const park of scene.parks) {
      const inner = bufferPolygon(park, -1);
      pathPoly(ctx, inner);
      ctx.fill();
    }
  }
  for (const road of scene.roads) {
    if (road.class !== "bridge")
      continue;
    ctx.strokeStyle = "rgb(150,130,98)";
    ctx.lineWidth = 9;
    strokePolyline(ctx, road.points);
    ctx.strokeStyle = "rgba(60,45,30,0.6)";
    ctx.lineWidth = 1.5;
    strokePolyline(ctx, road.points);
  }
  if (scene.houses && scene.houses.length) {
    if (isCity) {
      ctx.fillStyle = "rgba(35,26,18,0.28)";
      for (const hh of scene.houses) {
        if (!hh.polygon || hh.polygon.length < 3)
          continue;
        ctx.beginPath();
        ctx.moveTo(hh.polygon[0].x + 1.2, hh.polygon[0].y + 1.6);
        for (let i = 1; i < hh.polygon.length; i++)
          ctx.lineTo(hh.polygon[i].x + 1.2, hh.polygon[i].y + 1.6);
        ctx.closePath();
        ctx.fill();
      }
      ctx.strokeStyle = "rgb(40,28,20)";
      ctx.lineWidth = 0.7;
      for (const hh of scene.houses) {
        if (!hh.polygon || hh.polygon.length < 3)
          continue;
        const seed = Math.floor(Math.abs(hh.centre.x * 7.3 + hh.centre.y * 13.7));
        const [light] = pickRoofColours(seed);
        ctx.fillStyle = rgbLift(light, 8);
        pathPoly(ctx, hh.polygon);
        ctx.fill();
        ctx.stroke();
      }
    } else {
      for (const hh of scene.houses) {
        drawSmallHouse(ctx, hh.centre, hh.size, hh.angle);
      }
    }
  }
  if (scene.outbuildings && scene.outbuildings.length)
    drawOutbuildings(ctx, scene.outbuildings);
  if (scene.walls) {
    const wls = scene.walls;
    const ringsToDraw = wls.rings && wls.rings.length ? wls.rings : [{ ring: wls.ring, gates: wls.gates, towers: wls.towers, open: false }];
    for (const wr of ringsToDraw) {
      if (!wr.ring || wr.ring.length < 2)
        continue;
      ctx.strokeStyle = "rgb(120,112,96)";
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(wr.ring[0].x, wr.ring[0].y);
      for (let i = 1; i < wr.ring.length; i++)
        ctx.lineTo(wr.ring[i].x, wr.ring[i].y);
      if (!wr.open)
        ctx.closePath();
      ctx.stroke();
      ctx.strokeStyle = "rgba(60,52,40,0.7)";
      ctx.lineWidth = 1;
      ctx.stroke();
      for (const g of wr.gates) {
        ctx.fillStyle = STREET_COL;
        ctx.beginPath();
        ctx.arc(g.pos.x, g.pos.y, 5, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.fillStyle = "rgb(110,102,86)";
      ctx.strokeStyle = "rgba(50,44,34,0.8)";
      ctx.lineWidth = 1;
      for (const t of wr.towers) {
        ctx.beginPath();
        ctx.arc(t.x, t.y, 4.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      }
    }
  }
  if (scene.landmarks) {
    for (const lm of scene.landmarks) {
      if (lm.type === "castle")
        drawCastle(ctx, lm);
      else if (lm.type === "cathedral")
        drawCathedral(ctx, lm);
      else if (lm.type === "market")
        drawMarket(ctx, lm);
      else if (lm.type === "barracks")
        drawBarracks(ctx, lm);
      else if (lm.type === "tower")
        drawTower(ctx, lm);
    }
  }
  if (scene.dock)
    drawDock(ctx, scene.dock);
  drawVignetteAndTitle(ctx, w, h, name && name.trim() ? name : title, mapDistance, distanceUnit);
}
function drawDock(ctx, dock) {
  const fillStroke = (poly, fill, stroke, lw = 1) => {
    ctx.fillStyle = fill;
    ctx.strokeStyle = stroke;
    ctx.lineWidth = lw;
    pathPoly(ctx, poly);
    ctx.fill();
    ctx.stroke();
  };
  const shadow = (poly, ox, oy, a) => {
    ctx.fillStyle = `rgba(0,0,0,${a})`;
    ctx.beginPath();
    ctx.moveTo(poly[0].x + ox, poly[0].y + oy);
    for (let i = 1; i < poly.length; i++)
      ctx.lineTo(poly[i].x + ox, poly[i].y + oy);
    ctx.closePath();
    ctx.fill();
  };
  const PLANK = "rgb(150,120,86)";
  const PLANK_DK = "rgb(96,72,48)";
  const PLANK_EDGE = "rgba(60,44,28,0.85)";
  if (dock.lane && dock.lane.length >= 2) {
    ctx.save();
    ctx.strokeStyle = ROAD_COL;
    ctx.lineWidth = 4;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    const p = dock.lane;
    ctx.beginPath();
    ctx.moveTo(p[0].x, p[0].y);
    if (p.length === 2) {
      ctx.lineTo(p[1].x, p[1].y);
    } else {
      for (let i = 1; i < p.length - 1; i++) {
        const mx = (p[i].x + p[i + 1].x) / 2;
        const my = (p[i].y + p[i + 1].y) / 2;
        ctx.quadraticCurveTo(p[i].x, p[i].y, mx, my);
      }
      ctx.lineTo(p[p.length - 1].x, p[p.length - 1].y);
    }
    ctx.stroke();
    ctx.restore();
  }
  for (const j of dock.jetties) {
    shadow(j, 1.5, 1.5, 0.18);
    fillStroke(j, PLANK, PLANK_EDGE, 1);
  }
  shadow(dock.quay, 1.5, 1.5, 0.2);
  fillStroke(dock.quay, PLANK, PLANK_EDGE, 1.2);
  if (dock.quay.length === 4) {
    const m1 = { x: (dock.quay[0].x + dock.quay[1].x) / 2, y: (dock.quay[0].y + dock.quay[1].y) / 2 };
    const m2 = { x: (dock.quay[2].x + dock.quay[3].x) / 2, y: (dock.quay[2].y + dock.quay[3].y) / 2 };
    ctx.strokeStyle = "rgba(60,44,28,0.4)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(m1.x, m1.y);
    ctx.lineTo(m2.x, m2.y);
    ctx.stroke();
  }
  for (const wh of dock.warehouses) {
    if (wh.length < 4)
      continue;
    shadow(wh, 1.2, 1.2, 0.22);
    fillStroke(wh, "rgb(120,92,62)", "rgba(40,28,18,0.9)", 1);
    const m1 = { x: (wh[0].x + wh[3].x) / 2, y: (wh[0].y + wh[3].y) / 2 };
    const m2 = { x: (wh[1].x + wh[2].x) / 2, y: (wh[1].y + wh[2].y) / 2 };
    ctx.strokeStyle = "rgba(70,50,32,0.8)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(m1.x, m1.y);
    ctx.lineTo(m2.x, m2.y);
    ctx.stroke();
  }
  for (const b of dock.boats) {
    const ca = Math.cos(b.angle);
    const sa = Math.sin(b.angle);
    const L = b.len;
    const Wd = b.len * 0.34;
    const hull = [
      { x: b.pos.x - ca * L * 0.5 + -sa * Wd * 0.5, y: b.pos.y - sa * L * 0.5 + ca * Wd * 0.5 },
      { x: b.pos.x - ca * L * 0.5 - -sa * Wd * 0.5, y: b.pos.y - sa * L * 0.5 - ca * Wd * 0.5 },
      { x: b.pos.x + ca * L * 0.32 - -sa * Wd * 0.5, y: b.pos.y + sa * L * 0.32 - ca * Wd * 0.5 },
      { x: b.pos.x + ca * L * 0.5, y: b.pos.y + sa * L * 0.5 },
      // bow point
      { x: b.pos.x + ca * L * 0.32 + -sa * Wd * 0.5, y: b.pos.y + sa * L * 0.32 + ca * Wd * 0.5 }
    ];
    shadow(hull, 1, 1, 0.18);
    fillStroke(hull, "rgb(124,92,60)", "rgba(40,28,18,0.9)", 1);
    ctx.strokeStyle = "rgba(40,28,18,0.55)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(b.pos.x - ca * L * 0.3, b.pos.y - sa * L * 0.3);
    ctx.lineTo(b.pos.x + ca * L * 0.2, b.pos.y + sa * L * 0.2);
    ctx.stroke();
  }
}
function drawOutbuildings(ctx, obs) {
  const rotRect = (cx, cy, long, short, ang) => {
    const ca = Math.cos(ang);
    const sa = Math.sin(ang);
    const hl = long / 2;
    const hs = short / 2;
    const out = [];
    for (const [sx, sy] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) {
      out.push({ x: cx + sx * hl * ca - sy * hs * sa, y: cy + sx * hl * sa + sy * hs * ca });
    }
    return out;
  };
  const fillStroke = (poly, fill, stroke) => {
    ctx.fillStyle = fill;
    ctx.strokeStyle = stroke;
    ctx.lineWidth = 1;
    pathPoly(ctx, poly);
    ctx.fill();
    ctx.stroke();
  };
  const shadow = (poly, ox, oy, a) => {
    ctx.fillStyle = `rgba(0,0,0,${a})`;
    ctx.beginPath();
    ctx.moveTo(poly[0].x + ox, poly[0].y + oy);
    for (let i = 1; i < poly.length; i++)
      ctx.lineTo(poly[i].x + ox, poly[i].y + oy);
    ctx.closePath();
    ctx.fill();
  };
  const ridge = (poly, col) => {
    const m1 = { x: (poly[0].x + poly[3].x) / 2, y: (poly[0].y + poly[3].y) / 2 };
    const m2 = { x: (poly[1].x + poly[2].x) / 2, y: (poly[1].y + poly[2].y) / 2 };
    ctx.strokeStyle = col;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(m1.x, m1.y);
    ctx.lineTo(m2.x, m2.y);
    ctx.stroke();
  };
  for (const ob of obs) {
    const cx = ob.centre.x;
    const cy = ob.centre.y;
    const [long, short] = ob.size;
    const ang = ob.angle;
    const ca = Math.cos(ang);
    const sa = Math.sin(ang);
    if (ob.type === "mill") {
      const body = rotRect(cx, cy, long * 0.8, short, ang);
      shadow(body, 2, 3, 0.22);
      fillStroke(body, "rgb(96,70,52)", "rgb(62,44,32)");
      ridge(body, "rgb(132,100,78)");
      const wx = cx - ca * (long * 0.5);
      const wy = cy - sa * (long * 0.5);
      const r = short * 0.5;
      ctx.fillStyle = "rgb(70,60,48)";
      ctx.strokeStyle = "rgb(40,32,24)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(wx, wy, r, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.lineWidth = 1;
      for (let k = 0; k < 4; k++) {
        const aa = ang + k * Math.PI / 4;
        ctx.beginPath();
        ctx.moveTo(wx, wy);
        ctx.lineTo(wx + Math.cos(aa) * r, wy + Math.sin(aa) * r);
        ctx.stroke();
      }
    } else if (ob.type === "inn") {
      const body = rotRect(cx, cy, long, short, ang);
      shadow(body, 2, 3, 0.22);
      fillStroke(body, "rgb(150,140,124)", "rgb(60,52,42)");
      const roofPoly = body.map((p) => ({ x: (p.x - cx) * 0.78 + cx, y: (p.y - cy) * 0.78 + cy }));
      fillStroke(roofPoly, "rgb(120,84,60)", "rgb(78,52,36)");
      ridge(roofPoly, "rgb(150,110,82)");
      const sx = cx + ca * (long * 0.5 + 4);
      const sy = cy + sa * (long * 0.5 + 4);
      ctx.fillStyle = "rgb(90,70,50)";
      ctx.strokeStyle = "rgb(50,36,24)";
      ctx.beginPath();
      ctx.arc(sx, sy, 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    } else if (ob.type === "stable") {
      const pad = rotRect(cx, cy, long * 1.4, short * 1.5, ang);
      ctx.strokeStyle = "rgb(96,80,58)";
      ctx.lineWidth = 1;
      pathPoly(ctx, pad);
      ctx.stroke();
      const bx = cx + ca * (long * 0.4);
      const by = cy + sa * (long * 0.4);
      const barn = rotRect(bx, by, long * 0.7, short, ang);
      shadow(barn, 2, 3, 0.2);
      fillStroke(barn, "rgb(110,92,68)", "rgb(72,58,42)");
      ridge(barn, "rgb(140,118,88)");
    } else if (ob.type === "generic") {
      const body = rotRect(cx, cy, long, short, ang);
      shadow(body, 1.5, 2.5, 0.2);
      const mid1 = { x: (body[0].x + body[1].x) / 2, y: (body[0].y + body[1].y) / 2 };
      const mid2 = { x: (body[2].x + body[3].x) / 2, y: (body[2].y + body[3].y) / 2 };
      fillStroke([body[0], mid1, mid2, body[3]], "rgb(150,116,84)", "rgb(64,46,32)");
      fillStroke([mid1, body[1], body[2], mid2], "rgb(116,86,60)", "rgb(64,46,32)");
    }
  }
}
function drawFarms(ctx, farms) {
  const fieldFill = "rgb(201,192,166)";
  const fieldEdge = "rgb(128,116,94)";
  const furrow = "rgba(160,148,122,0.65)";
  const houseFill = "rgb(120,96,74)";
  const houseEdge = "rgb(50,36,26)";
  for (const farm of farms) {
    const poly = farm.polygon;
    if (poly.length < 3)
      continue;
    ctx.fillStyle = fieldFill;
    ctx.strokeStyle = fieldEdge;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(poly[0].x, poly[0].y);
    for (let i = 1; i < poly.length; i++)
      ctx.lineTo(poly[i].x, poly[i].y);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(poly[0].x, poly[0].y);
    for (let i = 1; i < poly.length; i++)
      ctx.lineTo(poly[i].x, poly[i].y);
    ctx.closePath();
    ctx.clip();
    const ang = farm.hatchAngle;
    const dx = Math.cos(ang);
    const dy = Math.sin(ang);
    const px = -dy;
    const py = dx;
    let cx = 0, cy = 0;
    for (const q of poly) {
      cx += q.x;
      cy += q.y;
    }
    cx /= poly.length;
    cy /= poly.length;
    let minx = Infinity, maxx = -Infinity, miny = Infinity, maxy = -Infinity;
    for (const q of poly) {
      if (q.x < minx)
        minx = q.x;
      if (q.x > maxx)
        maxx = q.x;
      if (q.y < miny)
        miny = q.y;
      if (q.y > maxy)
        maxy = q.y;
    }
    const diag = Math.hypot(maxx - minx, maxy - miny);
    ctx.strokeStyle = furrow;
    ctx.lineWidth = 1;
    const step = 4;
    for (let k = -diag / 2; k < diag / 2; k += step) {
      const ox = cx + px * k;
      const oy = cy + py * k;
      ctx.beginPath();
      ctx.moveTo(ox - dx * diag, oy - dy * diag);
      ctx.lineTo(ox + dx * diag, oy + dy * diag);
      ctx.stroke();
    }
    ctx.restore();
    if (farm.house) {
      const r = 4;
      ctx.fillStyle = "rgba(0,0,0,0.2)";
      ctx.fillRect(farm.house.x - r + 1, farm.house.y - r * 0.7 + 1, r * 2, r * 1.4);
      ctx.fillStyle = houseFill;
      ctx.strokeStyle = houseEdge;
      ctx.lineWidth = 1;
      ctx.fillRect(farm.house.x - r, farm.house.y - r * 0.7, r * 2, r * 1.4);
      ctx.strokeRect(farm.house.x - r, farm.house.y - r * 0.7, r * 2, r * 1.4);
    }
  }
}
function drawCastle(ctx, c) {
  const bailey = c.bailey;
  if (bailey.length < 3)
    return;
  const towers = c.towers;
  const keep = c.keep;
  const gate = c.gate;
  const ground = "rgb(158,148,128)";
  const stoneDark = "rgb(48,43,38)";
  const stoneMid = "rgb(95,86,76)";
  const stoneLight = "rgb(132,122,108)";
  const roofA = "rgb(96,66,52)";
  const roofD = "rgb(66,44,34)";
  const ccx = bailey.reduce((s, p) => s + p.x, 0) / bailey.length;
  const ccy = bailey.reduce((s, p) => s + p.y, 0) / bailey.length;
  const n = bailey.length;
  if (c.approach && c.approach.length >= 2) {
    ctx.strokeStyle = "rgb(188,170,134)";
    ctx.lineWidth = 6;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    strokePolyline(ctx, c.approach);
  }
  ctx.fillStyle = "rgba(0,0,0,0.22)";
  ctx.beginPath();
  ctx.moveTo(bailey[0].x + 4, bailey[0].y + 4);
  for (let i = 1; i < n; i++)
    ctx.lineTo(bailey[i].x + 4, bailey[i].y + 4);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = ground;
  pathPoly(ctx, bailey);
  ctx.fill();
  ctx.fillStyle = stoneMid;
  ctx.strokeStyle = stoneDark;
  ctx.lineWidth = 1;
  for (let i = 0; i < n; i++) {
    const a = bailey[i];
    const b = bailey[(i + 1) % n];
    const mx = (a.x + b.x) / 2;
    const my = (a.y + b.y) / 2;
    let ix = ccx - mx;
    let iy = ccy - my;
    const d = Math.hypot(ix, iy) || 1;
    ix /= d;
    iy /= d;
    const bx = mx + ix * 11;
    const by = my + iy * 11;
    const r = 5;
    ctx.fillRect(bx - r, by - r * 0.7, r * 2, r * 1.4);
    ctx.strokeRect(bx - r, by - r * 0.7, r * 2, r * 1.4);
  }
  const gateGap = 9;
  const nearGate = (p) => gate != null && Math.hypot(p.x - gate.x, p.y - gate.y) < gateGap;
  const ring = [];
  for (let i = 0; i < n; i++) {
    const a = bailey[i];
    const b = bailey[(i + 1) % n];
    const steps = Math.max(2, Math.floor(Math.hypot(b.x - a.x, b.y - a.y) / 4));
    for (let s = 0; s < steps; s++) {
      const t = s / steps;
      ring.push({ x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t });
    }
  }
  const flush = (sp) => {
    if (sp.length < 2)
      return;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = stoneDark;
    ctx.lineWidth = 8;
    strokePolyline(ctx, sp);
    ctx.strokeStyle = stoneMid;
    ctx.lineWidth = 5;
    strokePolyline(ctx, sp);
    ctx.strokeStyle = stoneLight;
    ctx.lineWidth = 2;
    strokePolyline(ctx, sp);
  };
  let seg = [];
  for (let i = 0; i <= ring.length; i++) {
    const p = ring[i % ring.length];
    if (nearGate(p)) {
      flush(seg);
      seg = [];
    } else {
      seg.push(p);
    }
  }
  flush(seg);
  for (const t of towers) {
    const r = 10;
    ctx.fillStyle = "rgba(0,0,0,0.24)";
    ctx.beginPath();
    ctx.arc(t.x, t.y + 3, r + 1, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = stoneMid;
    ctx.strokeStyle = stoneDark;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(t.x, t.y, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = stoneLight;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(t.x, t.y, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }
  if (gate) {
    const ga = c.gateAngle ?? 0;
    const ax = -Math.sin(ga);
    const ay = Math.cos(ga);
    for (const sgn of [-1, 1]) {
      const bx = gate.x + ax * gateGap * sgn;
      const by = gate.y + ay * gateGap * sgn;
      const r = 6;
      ctx.fillStyle = stoneMid;
      ctx.strokeStyle = stoneDark;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(bx, by, r, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = stoneLight;
      ctx.beginPath();
      ctx.arc(bx, by, 2, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  if (keep.length >= 3) {
    const kcx = keep.reduce((s, p) => s + p.x, 0) / keep.length;
    const kcy = keep.reduce((s, p) => s + p.y, 0) / keep.length;
    const big = keep.map((p) => ({ x: (p.x - kcx) * 1.25 + kcx, y: (p.y - kcy) * 1.25 + kcy }));
    ctx.fillStyle = "rgba(0,0,0,0.35)";
    ctx.beginPath();
    ctx.moveTo(big[0].x + 4, big[0].y + 5);
    for (let i = 1; i < big.length; i++)
      ctx.lineTo(big[i].x + 4, big[i].y + 5);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = stoneMid;
    ctx.strokeStyle = stoneDark;
    ctx.lineWidth = 1;
    pathPoly(ctx, big);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = stoneLight;
    for (const p of big) {
      const r = 4;
      ctx.beginPath();
      ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    }
    const inner = big.map((p) => ({ x: (p.x - kcx) * 0.6 + kcx, y: (p.y - kcy) * 0.6 + kcy }));
    ctx.fillStyle = roofA;
    ctx.strokeStyle = roofD;
    pathPoly(ctx, inner);
    ctx.fill();
    ctx.stroke();
    if (inner.length >= 3) {
      ctx.strokeStyle = "rgb(120,88,70)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(inner[0].x, inner[0].y);
      ctx.lineTo(inner[2].x, inner[2].y);
      ctx.stroke();
    }
  }
}
function drawCathedral(ctx, c) {
  const wallD = "rgb(54,48,40)";
  const wallL = "rgb(158,148,132)";
  const roofA = "rgb(92,62,50)";
  const roofD = "rgb(58,38,30)";
  ctx.fillStyle = "rgba(0,0,0,0.32)";
  for (const poly of [c.nave, c.transept]) {
    ctx.beginPath();
    ctx.moveTo(poly[0].x + 3.5, poly[0].y + 4.5);
    for (let i = 1; i < poly.length; i++)
      ctx.lineTo(poly[i].x + 3.5, poly[i].y + 4.5);
    ctx.closePath();
    ctx.fill();
  }
  ctx.fillStyle = wallL;
  ctx.strokeStyle = wallD;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(c.apse.pos.x, c.apse.pos.y, c.apse.r, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = wallL;
  ctx.lineWidth = 1.5;
  for (const poly of [c.nave, c.transept]) {
    pathPoly(ctx, poly);
    ctx.fill();
    ctx.stroke();
  }
  const insetRoof = (poly) => {
    const pcx = poly.reduce((s, p) => s + p.x, 0) / poly.length;
    const pcy = poly.reduce((s, p) => s + p.y, 0) / poly.length;
    const roof = poly.map((p) => ({ x: (p.x - pcx) * 0.74 + pcx, y: (p.y - pcy) * 0.74 + pcy }));
    ctx.fillStyle = roofA;
    ctx.strokeStyle = roofD;
    ctx.lineWidth = 1;
    pathPoly(ctx, roof);
    ctx.fill();
    ctx.stroke();
    if (roof.length === 4) {
      const m1 = { x: (roof[0].x + roof[3].x) / 2, y: (roof[0].y + roof[3].y) / 2 };
      const m2 = { x: (roof[1].x + roof[2].x) / 2, y: (roof[1].y + roof[2].y) / 2 };
      ctx.strokeStyle = "rgb(140,100,80)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(m1.x, m1.y);
      ctx.lineTo(m2.x, m2.y);
      ctx.stroke();
    }
  };
  insetRoof(c.nave);
  insetRoof(c.transept);
  const crx = c.transept.reduce((s, p) => s + p.x, 0) / c.transept.length;
  const cry = c.transept.reduce((s, p) => s + p.y, 0) / c.transept.length;
  ctx.fillStyle = wallL;
  ctx.strokeStyle = wallD;
  ctx.lineWidth = 1.5;
  ctx.fillRect(crx - 5, cry - 5, 10, 10);
  ctx.strokeRect(crx - 5, cry - 5, 10, 10);
}
function drawMarket(ctx, c) {
  const paving = "rgb(224,212,182)";
  const pavingEdge = "rgb(120,108,88)";
  const stallCols = ["rgb(160,92,62)", "rgb(96,118,88)", "rgb(110,100,126)", "rgb(176,144,88)"];
  const stallEdge = "rgb(55,44,34)";
  ctx.fillStyle = paving;
  ctx.strokeStyle = pavingEdge;
  ctx.lineWidth = 2;
  pathPoly(ctx, c.plaza);
  ctx.fill();
  ctx.stroke();
  ctx.strokeStyle = stallEdge;
  ctx.lineWidth = 1;
  for (let i = 0; i < c.stalls.length; i++) {
    const stall = c.stalls[i];
    if (stall.length < 3)
      continue;
    ctx.fillStyle = stallCols[i % stallCols.length];
    pathPoly(ctx, stall);
    ctx.fill();
    ctx.stroke();
  }
  ctx.fillStyle = "rgb(150,140,124)";
  ctx.strokeStyle = "rgb(55,44,34)";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(c.feature.pos.x, c.feature.pos.y, c.feature.r, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
}
function drawBarracks(ctx, c) {
  const yardFill = "rgb(168,158,140)";
  const yardEdge = "rgb(70,62,50)";
  const hallFill = "rgb(120,104,86)";
  const hallRoof = "rgb(86,72,58)";
  const hallEdge = "rgb(48,38,28)";
  ctx.fillStyle = "rgba(0,0,0,0.20)";
  ctx.beginPath();
  ctx.moveTo(c.yard[0].x + 3, c.yard[0].y + 4);
  for (let i = 1; i < c.yard.length; i++)
    ctx.lineTo(c.yard[i].x + 3, c.yard[i].y + 4);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = yardFill;
  ctx.strokeStyle = yardEdge;
  ctx.lineWidth = 2;
  pathPoly(ctx, c.yard);
  ctx.fill();
  ctx.stroke();
  ctx.strokeStyle = "rgba(70,62,50,0.6)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(c.drill.pos.x, c.drill.pos.y, c.drill.r, 0, Math.PI * 2);
  ctx.stroke();
  for (const hall of c.halls) {
    if (hall.length < 3)
      continue;
    ctx.fillStyle = "rgba(0,0,0,0.18)";
    ctx.beginPath();
    ctx.moveTo(hall[0].x + 1.5, hall[0].y + 2);
    for (let i = 1; i < hall.length; i++)
      ctx.lineTo(hall[i].x + 1.5, hall[i].y + 2);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = hallFill;
    ctx.strokeStyle = hallEdge;
    ctx.lineWidth = 1;
    pathPoly(ctx, hall);
    ctx.fill();
    ctx.stroke();
    if (hall.length === 4) {
      const m1 = { x: (hall[0].x + hall[3].x) / 2, y: (hall[0].y + hall[3].y) / 2 };
      const m2 = { x: (hall[1].x + hall[2].x) / 2, y: (hall[1].y + hall[2].y) / 2 };
      ctx.strokeStyle = hallRoof;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(m1.x, m1.y);
      ctx.lineTo(m2.x, m2.y);
      ctx.stroke();
    }
  }
}
function drawTower(ctx, t) {
  const cx = t.centre.x, cy = t.centre.y, r = t.radius;
  if (t.lane && t.lane.length >= 2) {
    ctx.strokeStyle = ROAD_COL;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = 3;
    strokePolyline(ctx, t.lane);
  }
  ctx.fillStyle = "rgba(0,0,0,0.22)";
  ctx.beginPath();
  ctx.ellipse(cx + 2.5, cy + 3, r * 1.02, r * 0.92, 0, 0, Math.PI * 2);
  ctx.fill();
  const stoneFill = "rgb(150,144,150)";
  const stoneEdge = "rgb(70,64,74)";
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fillStyle = stoneFill;
  ctx.fill();
  ctx.strokeStyle = stoneEdge;
  ctx.lineWidth = 1.4;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(cx - r * 0.12, cy - r * 0.14, r * 0.66, 0, Math.PI * 2);
  ctx.fillStyle = "rgb(168,162,168)";
  ctx.fill();
  ctx.strokeStyle = stoneEdge;
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(cx - r * 0.12, cy - r * 0.14, r * 0.38, 0, Math.PI * 2);
  ctx.fillStyle = "rgb(74,58,104)";
  ctx.fill();
  ctx.strokeStyle = "rgb(44,32,66)";
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(cx - r * 0.12, cy - r * 0.14, Math.max(1.2, r * 0.12), 0, Math.PI * 2);
  ctx.fillStyle = "rgba(150,130,210,0.85)";
  ctx.fill();
}
function drawSmallHouse(ctx, centre, size, angle) {
  const [long, short] = size;
  const hl = long / 2;
  const hs = short / 2;
  const ca = Math.cos(angle);
  const sa = Math.sin(angle);
  const pt = (sx, sy) => ({
    x: centre.x + sx * hl * ca - sy * hs * sa,
    y: centre.y + sx * hl * sa + sy * hs * ca
  });
  const f1 = pt(-1, -1);
  const f2 = pt(1, -1);
  const f3 = pt(1, 1);
  const f4 = pt(-1, 1);
  ctx.fillStyle = "rgba(0,0,0,0.20)";
  ctx.beginPath();
  ctx.moveTo(f1.x + 1.6, f1.y + 1.6);
  ctx.lineTo(f2.x + 1.6, f2.y + 1.6);
  ctx.lineTo(f3.x + 1.6, f3.y + 1.6);
  ctx.lineTo(f4.x + 1.6, f4.y + 1.6);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = "rgb(214,196,164)";
  ctx.beginPath();
  ctx.moveTo(f1.x, f1.y);
  ctx.lineTo(f2.x, f2.y);
  ctx.lineTo(f3.x, f3.y);
  ctx.lineTo(f4.x, f4.y);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = "rgba(60,42,30,0.85)";
  ctx.lineWidth = 0.8;
  ctx.stroke();
  const inset = 0.18;
  const r1 = pt(-1 + inset * 0.5, -1 + inset);
  const r2 = pt(1 - inset * 0.5, -1 + inset);
  const r3 = pt(1 - inset * 0.5, 1 - inset);
  const r4 = pt(-1 + inset * 0.5, 1 - inset);
  const ridgeA = pt(-1 + inset * 0.5, 0);
  const ridgeB = pt(1 - inset * 0.5, 0);
  const seed = Math.floor(Math.abs(centre.x * 7.3 + centre.y * 13.7));
  const [light, dark] = pickRoofColours(seed);
  ctx.fillStyle = rgbLift(light, 18);
  ctx.beginPath();
  ctx.moveTo(r1.x, r1.y);
  ctx.lineTo(r2.x, r2.y);
  ctx.lineTo(ridgeB.x, ridgeB.y);
  ctx.lineTo(ridgeA.x, ridgeA.y);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = rgb(dark);
  ctx.beginPath();
  ctx.moveTo(ridgeA.x, ridgeA.y);
  ctx.lineTo(ridgeB.x, ridgeB.y);
  ctx.lineTo(r3.x, r3.y);
  ctx.lineTo(r4.x, r4.y);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = "rgba(48,26,20,0.85)";
  ctx.lineWidth = 0.7;
  ctx.beginPath();
  ctx.moveTo(r1.x, r1.y);
  ctx.lineTo(r2.x, r2.y);
  ctx.lineTo(r3.x, r3.y);
  ctx.lineTo(r4.x, r4.y);
  ctx.closePath();
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(ridgeA.x, ridgeA.y);
  ctx.lineTo(ridgeB.x, ridgeB.y);
  ctx.stroke();
}

// src/panel.ts
var import_obsidian = require("obsidian");

// src/pintypes.ts
var SCALE_REFERENCE_HOUSES = 600;
var SHOP_LISTS = {
  surnames: ["Oakhart", "Vance", "Hollick", "Jessop", "Pemberton", "Ironhand", "Foxglove", "Thornwood", "Ashby", "Crane", "Marlow", "Pike", "Quill", "Rooke", "Sallow", "Tanner", "Underhill", "Welk", "Brightwater", "Dunmore", "Fenwick", "Garrow"],
  adjectives: ["Sleeping", "Crooked", "Salty", "Drunken", "Rusty", "Silver", "Broken", "Weeping", "Faithful", "Singing", "One-Eyed", "Gilded", "Whistling", "Hollow"],
  nouns: ["Forge", "Smithy", "Apothecary", "Herbalist", "Mercantile", "General Goods", "Tannery", "Bakery", "Curiosities", "Provisioner", "Cooperage", "Chandlery"]
};
var INN_LISTS = {
  surnames: ["Bramble", "Hart", "Crow", "Stagg", "Mead", "Barrow", "Finch", "Hale"],
  adjectives: ["Weeping", "Broken", "Salty", "Rusty", "Crooked", "Faithful", "Singing", "One-Eyed", "Silver", "Drunken", "Sleeping", "Laughing", "Prancing", "Gilded"],
  nouns: ["Anchor", "Lantern", "Tower", "Bell", "Hare", "Fox", "Eagle", "Stag", "Tankard", "Crown", "Barrel", "Hound"]
};
var GENERIC_LISTS = {
  surnames: ["Oakhart", "Vance", "Hollick", "Thornwood", "Ashby", "Marlow", "Dunmore", "Fenwick"],
  adjectives: ["Old", "New", "North", "South", "High", "Low", "Stone", "River"],
  nouns: ["House", "Place", "Yard", "Holding", "Lodge", "Hall"]
};
var DEFAULT_PIN_TYPES = [
  // Anchored to real structures Town Forge builds.
  { id: "castle", noteType: "Castle", enabled: true, icon: "castle", layerName: "Civic", placement: "anchored", anchor: "castle", countMin: 1, countMax: 1, countMode: "fixed", nameMode: "builtin", nameLists: { surnames: [], adjectives: [], nouns: [], proper: ["The Keep", "Castle Greymark", "Castle Thorn", "The Citadel", "Highhold Keep", "Castle Vance", "The Old Castle", "Ravenshold"] } },
  { id: "cathedral", noteType: "Temple", enabled: true, icon: "place-of-worship", layerName: "Religious", placement: "anchored", anchor: "cathedral", countMin: 1, countMax: 1, countMode: "fixed", nameMode: "builtin", nameLists: { surnames: [], adjectives: [], nouns: [], proper: ["The Temple of Light", "Shrine of Saint Aldric", "The Grand Cathedral", "Chapel of Saint Mirelle", "The High Sanctuary", "Temple of the Dawn"] } },
  { id: "market", noteType: "Market", enabled: true, icon: "circle_black_city", layerName: "Civic", placement: "anchored", anchor: "market", countMin: 1, countMax: 1, countMode: "fixed", nameMode: "builtin", nameLists: { surnames: [], adjectives: [], nouns: [], proper: ["Market Square", "The Old Market", "The Grand Exchange", "Market Cross", "The Trade Square"] } },
  { id: "barracks", noteType: "Barracks", enabled: true, icon: "shield", layerName: "Civic", placement: "anchored", anchor: "barracks", countMin: 1, countMax: 1, countMode: "fixed", nameMode: "builtin", nameLists: { surnames: [], adjectives: [], nouns: [], proper: ["The Garrison", "The Watch House", "Town Barracks", "The Old Garrison", "The Guardhouse"] } },
  { id: "tower", noteType: "Tower", enabled: true, icon: "pinRed", layerName: "Landmarks", placement: "anchored", anchor: "tower", countMin: 1, countMax: 1, countMode: "fixed", nameMode: "builtin", nameLists: { surnames: [], adjectives: [], nouns: [], proper: ["The Lonely Tower", "Blackspire", "Ravenspire", "The Mage's Tower", "The Old Tower", "Greywatch Tower", "The Spire", "Thornwatch"] } },
  { id: "dock", noteType: "Dock", enabled: true, icon: "anchor", layerName: "Infrastructure", placement: "anchored", anchor: "dock", countMin: 1, countMax: 1, countMode: "fixed", nameMode: "builtin", nameLists: { surnames: [], adjectives: [], nouns: [], proper: ["The Docks", "The Wharf", "The Quay", "North Wharf", "The Harbour", "The Riverside Docks"] } },
  { id: "mill", noteType: "Mill", enabled: true, icon: "wheat", layerName: "Infrastructure", placement: "anchored", anchor: "mill", countMin: 1, countMax: 2, countMode: "fixed", nameMode: "builtin", nameLists: { surnames: ["Oakhart", "Welk", "Garrow", "Pike"], adjectives: ["Old", "River", "Lower", "Upper"], nouns: ["Mill", "Watermill", "Millhouse"], proper: ["The Old Mill", "Riverside Mill", "Lower Watermill"] } },
  { id: "stable", noteType: "Stable", enabled: true, icon: "horseshoe", layerName: "Infrastructure", placement: "anchored", anchor: "stable", countMin: 1, countMax: 2, countMode: "fixed", nameMode: "builtin", nameLists: { surnames: ["Hart", "Stagg", "Crane", "Marlow"], adjectives: ["Old", "Town", "North"], nouns: ["Stables", "Livery", "Mews"] } },
  { id: "farm", noteType: "Farm", enabled: true, icon: "wheat", layerName: "Rural", placement: "anchored", anchor: "farm", countMin: 1, countMax: 4, countMode: "scaled", nameMode: "builtin", nameLists: { surnames: ["Oakhart", "Welk", "Garrow", "Fenwick", "Brightwater", "Dunmore"], adjectives: ["Old", "North", "South", "Hill", "River", "Green"], nouns: ["Farm", "Steading", "Holding", "Grange"] } },
  // Sampled over ordinary houses.
  { id: "shop", noteType: "Shop", enabled: true, icon: "shop", layerName: "Shops", placement: "sampled", countMin: 8, countMax: 14, countMode: "scaled", nameMode: "builtin", nameLists: SHOP_LISTS, subtypes: ["general", "weapon", "armor", "alchemy", "magic"] },
  { id: "inn", noteType: "Inn", enabled: true, icon: "beer-stein", layerName: "Taverns & Inns", placement: "both", anchor: "inn", countMin: 3, countMax: 7, countMode: "scaled", nameMode: "builtin", nameLists: INN_LISTS }
];
function newCustomPinType() {
  return {
    id: "custom_" + Math.random().toString(36).slice(2, 8),
    noteType: "Place",
    enabled: true,
    icon: "circle_black_city",
    layerName: "Places",
    placement: "sampled",
    countMin: 1,
    countMax: 3,
    countMode: "scaled",
    nameMode: "builtin",
    nameLists: GENERIC_LISTS
  };
}
function parsePinTypesJson(json) {
  let raw;
  try {
    raw = JSON.parse(json);
  } catch (e) {
    return { error: `Invalid JSON: ${e instanceof Error ? e.message : String(e)}` };
  }
  if (!Array.isArray(raw))
    return { error: "Top level must be an array of pin types." };
  const types = [];
  const seenIds = /* @__PURE__ */ new Set();
  for (let i = 0; i < raw.length; i++) {
    const o = raw[i];
    if (typeof o !== "object" || o === null)
      return { error: `Item ${i} is not an object.` };
    const noteType = String(o.noteType ?? "").trim();
    if (!noteType)
      return { error: `Item ${i}: "noteType" is required.` };
    let id = String(o.id ?? "").trim() || noteType.toLowerCase().replace(/\s+/g, "_");
    while (seenIds.has(id))
      id = id + "_";
    seenIds.add(id);
    const placement = o.placement === "anchored" ? "anchored" : o.placement === "both" ? "both" : "sampled";
    const countMode = o.countMode === "fixed" ? "fixed" : "scaled";
    const nameMode = o.nameMode === "js" ? "js" : "builtin";
    const min = Math.max(0, Math.floor(Number(o.countMin ?? 1)) || 0);
    const max = Math.max(min, Math.floor(Number(o.countMax ?? min)) || min);
    const t = {
      id,
      noteType,
      enabled: o.enabled !== false,
      icon: String(o.icon ?? "circle_black_city").trim() || "circle_black_city",
      layerName: String(o.layerName ?? "Places").trim() || "Places",
      placement,
      countMin: min,
      countMax: max,
      countMode,
      nameMode
    };
    if ((placement === "anchored" || placement === "both") && typeof o.anchor === "string")
      t.anchor = o.anchor;
    if (nameMode === "js") {
      t.nameJs = String(o.nameJs ?? "");
    } else {
      const nl = o.nameLists ?? {};
      t.nameLists = {
        surnames: toStrArr(nl.surnames, GENERIC_LISTS.surnames),
        adjectives: toStrArr(nl.adjectives, GENERIC_LISTS.adjectives),
        nouns: toStrArr(nl.nouns, GENERIC_LISTS.nouns)
      };
      if (Array.isArray(nl.proper)) {
        const p = nl.proper.map((x) => String(x)).filter((s) => s.length > 0);
        if (p.length)
          t.nameLists.proper = p;
      }
    }
    if (Array.isArray(o.subtypes)) {
      const st = o.subtypes.map((x) => String(x).trim()).filter((s) => s.length > 0);
      if (st.length)
        t.subtypes = st;
    }
    types.push(t);
  }
  return { types };
}
function toStrArr(v, fallback) {
  if (!Array.isArray(v))
    return [...fallback];
  const out = v.map((x) => String(x)).filter((s) => s.length > 0);
  return out.length ? out : [...fallback];
}
function pinTypesToJson(types) {
  return JSON.stringify(types, null, 2);
}

// src/markers.ts
function pointInPoly3(p, poly) {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    if (poly[i].y > p.y !== poly[j].y > p.y && p.x < (poly[j].x - poly[i].x) * (p.y - poly[i].y) / (poly[j].y - poly[i].y) + poly[i].x) {
      inside = !inside;
    }
  }
  return inside;
}
function anchorCentres(scene, anchor) {
  switch (anchor) {
    case "castle":
    case "cathedral":
    case "market":
    case "barracks":
    case "tower":
      return (scene.landmarks || []).filter((l) => l.type === anchor).map((l) => l.centre);
    case "dock": {
      const d = scene.dock;
      if (!d)
        return [];
      if (d.shorePt)
        return [d.shorePt];
      if (d.quay && d.quay.length)
        return [centroid(d.quay)];
      return [];
    }
    case "mill":
    case "stable":
    case "inn":
    case "generic":
      return (scene.outbuildings || []).filter((o) => o.type === anchor).map((o) => o.centre);
    case "farm":
      return (scene.farms || []).map((f) => f.house ?? (f.polygon ? centroid(f.polygon) : null)).filter((p) => !!p);
    default:
      return [];
  }
}
function centroid(poly) {
  return { x: poly.reduce((s, p) => s + p.x, 0) / poly.length, y: poly.reduce((s, p) => s + p.y, 0) / poly.length };
}
function rollCount(rng, t, houseCount) {
  const span = Math.max(0, t.countMax - t.countMin);
  let n = t.countMin + Math.floor(rng() * (span + 1));
  if (t.countMode === "scaled") {
    const ratio = houseCount / SCALE_REFERENCE_HOUSES;
    n = Math.round(n * ratio);
    if (t.countMin >= 1 && n < 1 && houseCount > 0 && rng() < houseCount / SCALE_REFERENCE_HOUSES * t.countMin + 0.15)
      n = 1;
  }
  return Math.max(0, n);
}
function spreadSample(pool, count, rng, avoid) {
  if (!pool.length || count <= 0)
    return [];
  const cx = pool.reduce((s, p) => s + p.x, 0) / pool.length;
  const cy = pool.reduce((s, p) => s + p.y, 0) / pool.length;
  const withD = pool.map((p, i) => ({ i, d: Math.hypot(p.x - cx, p.y - cy) }));
  const sortedD = withD.map((w) => w.d).sort((a, b) => a - b);
  const pct = sortedD[Math.min(sortedD.length - 1, Math.floor(sortedD.length * 0.85))] || Infinity;
  let coreIdx = withD.filter((w) => w.d <= pct).map((w) => w.i);
  if (coreIdx.length < count)
    coreIdx = pool.map((_, i) => i);
  for (let i = coreIdx.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    const t = coreIdx[i];
    coreIdx[i] = coreIdx[j];
    coreIdx[j] = t;
  }
  const chosenPts = [...avoid];
  const chosen = [];
  const stride = Math.max(1, Math.floor(coreIdx.length / 240));
  if (!chosenPts.length) {
    chosen.push(coreIdx[0]);
    chosenPts.push(pool[coreIdx[0]]);
  }
  while (chosen.length < count) {
    let bestIdx = -1, bestDist = -1;
    for (let k = 0; k < coreIdx.length; k += stride) {
      const ci = coreIdx[k];
      if (chosen.includes(ci))
        continue;
      let nearest = Infinity;
      for (const cp of chosenPts) {
        const dx = pool[ci].x - cp.x, dy = pool[ci].y - cp.y;
        const d = dx * dx + dy * dy;
        if (d < nearest)
          nearest = d;
      }
      if (nearest > bestDist) {
        bestDist = nearest;
        bestIdx = ci;
      }
    }
    if (bestIdx < 0)
      break;
    chosen.push(bestIdx);
    chosenPts.push(pool[bestIdx]);
  }
  return chosen;
}
function collectSlots(scene, seedStr, pinTypes, mapSize) {
  const inFrame = (p) => {
    const m = 6;
    return p.x >= m && p.x <= mapSize - m && p.y >= m && p.y <= mapSize - m;
  };
  const allHouses = (scene.houses || []).map((h) => h.centre);
  const fp = scene.footprint && scene.footprint.length >= 3 ? scene.footprint : null;
  const forests = (scene.forests || []).map((f) => f.polygon).filter((p) => p && p.length >= 3);
  const houses = allHouses.filter((c) => {
    if (!inFrame(c))
      return false;
    if (fp && !pointInPoly3(c, fp))
      return false;
    for (const f of forests)
      if (pointInPoly3(c, f))
        return false;
    return true;
  });
  const houseCount = houses.length;
  const slots = [];
  const usedHouseIdx = /* @__PURE__ */ new Set();
  const sampledAvoid = [];
  for (const t of pinTypes) {
    if (!t.enabled)
      continue;
    const rng = makeRng(hash32(`${seedStr}:${t.id}`));
    const want = rollCount(rng, t, houseCount || 1);
    let placed = 0;
    const pushSlot = (px) => {
      slots.push({ pinTypeId: t.id, noteType: t.noteType, icon: t.icon, layerName: t.layerName, px, index: placed, seed: hash32(`${seedStr}:${t.id}:${placed}`) });
      placed++;
    };
    if (t.placement === "anchored" || t.placement === "both") {
      const centres = (t.anchor ? anchorCentres(scene, t.anchor) : []).filter(inFrame);
      if (centres.length) {
        const cap = t.placement === "both" ? centres.length : Math.min(want, centres.length);
        const order = centres.length > cap ? spreadSample(centres, cap, rng, []) : centres.map((_, i) => i);
        for (const ci of order) {
          pushSlot(centres[ci]);
          sampledAvoid.push(centres[ci]);
        }
      }
      if (t.placement === "anchored")
        continue;
    }
    const remaining = Math.max(0, want - placed);
    if (remaining <= 0)
      continue;
    const pool = houseCount ? houses : (scene.outbuildings || []).filter((o) => o.type === "generic").map((o) => o.centre);
    if (!pool.length)
      continue;
    const freeIdx = pool.map((_, i) => i).filter((i) => !usedHouseIdx.has(i));
    if (!freeIdx.length)
      continue;
    const freePool = freeIdx.map((i) => pool[i]);
    const chosenLocal = spreadSample(freePool, Math.min(remaining, freePool.length), rng, sampledAvoid);
    for (const cl of chosenLocal) {
      const globalIdx = freeIdx[cl];
      usedHouseIdx.add(globalIdx);
      sampledAvoid.push(pool[globalIdx]);
      pushSlot(pool[globalIdx]);
    }
  }
  return slots;
}
function pick(rng, arr) {
  return arr[Math.floor(rng() * arr.length)];
}
function builtinName(lists, seed, used) {
  const rng = makeRng(seed);
  const proper = lists.proper && lists.proper.length ? lists.proper : null;
  const surnames = lists.surnames.length ? lists.surnames : ["Oakhart"];
  const adjectives = lists.adjectives.length ? lists.adjectives : ["Old"];
  const nouns = lists.nouns.length ? lists.nouns : ["House"];
  for (let attempt = 0; attempt < 24; attempt++) {
    const name2 = proper ? pick(rng, proper) : rng() < 0.5 ? `${pick(rng, surnames)}'s ${pick(rng, nouns)}` : `The ${pick(rng, adjectives)} ${pick(rng, nouns)}`;
    if (!used.has(name2)) {
      used.add(name2);
      return name2;
    }
  }
  let n = 2;
  const base = proper ? pick(rng, proper) : `${pick(rng, surnames)}'s ${pick(rng, nouns)}`;
  while (used.has(`${base} ${n}`))
    n++;
  const name = `${base} ${n}`;
  used.add(name);
  return name;
}
var _idState = 0;
function shortId(n) {
  _idState = _idState * 1664525 + 1013904223 + n >>> 0;
  return "marker_poi_" + _idState.toString(36).slice(0, 6).padStart(6, "0");
}
function layerId(name) {
  return name.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "") || "places";
}
function buildMarkersFile(opts) {
  const { places, mapSize, imagePath } = opts;
  _idState = 2654435769;
  const layers = [{ id: "default", name: "Default", visible: true, locked: false }];
  const seenLayers = /* @__PURE__ */ new Set(["default"]);
  for (const pl of places) {
    const id = layerId(pl.layerName);
    if (seenLayers.has(id))
      continue;
    seenLayers.add(id);
    layers.push({ id, name: pl.layerName, visible: true, locked: false });
  }
  const markers = places.map((pl, i) => ({
    type: "pin",
    id: shortId(i + 1),
    x: clamp01(pl.px.x / mapSize),
    y: clamp01(pl.px.y / mapSize),
    layer: layerId(pl.layerName),
    link: pl.noteTitle ?? pl.name,
    iconKey: pl.icon || "circle_black_city",
    tooltip: pl.name,
    scaleLikeSticker: true
  }));
  return {
    size: { w: mapSize, h: mapSize },
    layers,
    markers,
    bases: [imagePath],
    overlays: [],
    activeBase: imagePath,
    measurement: { scales: {}, customUnitPxPerUnit: {}, travelTimePresetIds: [], travelDaysEnabled: false },
    pinSizeOverrides: {},
    grids: [],
    panClamp: true,
    drawLayers: [],
    drawings: [],
    secondScreen: {},
    textLayers: []
  };
}
function clamp01(v) {
  return v < 0 ? 0 : v > 1 ? 1 : v;
}

// src/panel.ts
var TOWN_FORGE_VIEW = "town-forge-preview";
var TERRAINS = ["inland", "coastal", "river", "lake", "mountain"];
var SETTLEMENTS = [
  "hamlet",
  "village",
  "small_town",
  "town",
  "large_town",
  "small_city",
  "city",
  "large_city",
  "metropolis"
];
var DIRECTIONS = ["random", "N", "E", "S", "W"];
var TRI_NEXT = { auto: "on", on: "off", off: "auto" };
var TRI_LABEL = { auto: "Auto", on: "On", off: "Off" };
var SYLL = ["thar", "mor", "wen", "dol", "fen", "rik", "vol", "sea", "gan", "lyth", "bram", "cor", "ash", "el", "grim", "haven", "ford", "wick", "stead", "mere"];
function randomSeed() {
  const n = 2 + Math.floor(Math.random() * 2);
  let s = "";
  for (let i = 0; i < n; i++)
    s += SYLL[Math.floor(Math.random() * SYLL.length)];
  return s;
}
function titleCase(s) {
  return s.replace(/(^|\s)\w/g, (c) => c.toUpperCase());
}
function randomName() {
  const a = SYLL[Math.floor(Math.random() * SYLL.length)];
  const b = SYLL[Math.floor(Math.random() * SYLL.length)];
  return titleCase(a + b);
}
var TownForgePreviewView = class extends import_obsidian.ItemView {
  constructor(leaf, getExportFolder, getTemplateFolder, getPinTypes, getOpenAfterExport, getGroupNotesByType, getEnableZoomMapExport, getShowTroubleshoot, getScaleMultiplier, getDistanceUnit) {
    super(leaf);
    this.state = {
      terrain: "river",
      seed: "frostkey",
      name: "Frostkey",
      mode: "full",
      settlement: "city",
      roughness: 0.6,
      octaves: 5,
      direction: "random",
      mountainEdges: { N: false, E: false, S: false, W: false },
      edges: { N: true, E: true, S: true, W: true },
      edgesAuto: true,
      farm: 1,
      forest: 1,
      mountain: 6,
      walls: "auto",
      castle: "auto",
      temple: "auto",
      market: "auto",
      barracks: "auto",
      tower: "auto"
    };
    this.zoom = 1;
    this.panX = 0;
    this.panY = 0;
    this.lastGenMs = 0;
    this.stale = false;
    // The most recent full-mode scene + its pixel size, captured at render time so
    // Export can place markers without re-generating.  Null in landscape mode.
    this.lastFullScene = null;
    this.lastMapSize = 1e3;
    this.getExportFolder = getExportFolder ?? (() => "Maps");
    this.getTemplateFolder = getTemplateFolder ?? (() => "Templates/TownForge");
    this.getPinTypes = getPinTypes ?? (() => []);
    this.getOpenAfterExport = getOpenAfterExport ?? (() => true);
    this.getGroupNotesByType = getGroupNotesByType ?? (() => true);
    this.getEnableZoomMapExport = getEnableZoomMapExport ?? (() => false);
    this.getShowTroubleshoot = getShowTroubleshoot ?? (() => false);
    this.getScaleMultiplier = getScaleMultiplier ?? (() => 1);
    this.getDistanceUnit = getDistanceUnit ?? (() => "miles");
  }
  getViewType() {
    return TOWN_FORGE_VIEW;
  }
  getDisplayText() {
    return "Town Forge";
  }
  getIcon() {
    return "map";
  }
  // Rebuild the panel UI from current state + settings (e.g. after a settings
  // toggle changes which buttons show).  onOpen reads the persisted this.state,
  // so the in-progress map/values are preserved and re-rendered.
  async rebuild() {
    await this.onOpen();
  }
  async onOpen() {
    const root = this.contentEl;
    root.empty();
    root.addClass("town-forge-panel");
    root.style.padding = "10px";
    root.style.display = "flex";
    root.style.flexDirection = "column";
    root.style.gap = "8px";
    root.style.overflowY = "auto";
    const title = root.createEl("h4", { text: "Town Forge" });
    title.style.margin = "0 0 2px 0";
    const controls = root.createDiv();
    controls.style.display = "flex";
    controls.style.flexDirection = "column";
    controls.style.gap = "5px";
    const row = (labelText) => {
      const r = controls.createDiv();
      r.style.display = "flex";
      r.style.alignItems = "center";
      r.style.justifyContent = "space-between";
      r.style.gap = "8px";
      const lab = r.createEl("label", { text: labelText });
      lab.style.fontSize = "0.78em";
      lab.style.opacity = "0.85";
      lab.style.minWidth = "82px";
      return r;
    };
    const sectionLabel = (t) => {
      const s = controls.createEl("div", { text: t });
      s.style.fontSize = "0.68em";
      s.style.textTransform = "uppercase";
      s.style.letterSpacing = "0.06em";
      s.style.opacity = "0.5";
      s.style.marginTop = "2px";
      return s;
    };
    const dropdown = (parent, opts, cur, onChange) => {
      const sel = parent.createEl("select");
      sel.style.flex = "1";
      for (const o of opts) {
        const opt = sel.createEl("option", { text: o, value: o });
        if (o === cur)
          opt.selected = true;
      }
      sel.onchange = () => onChange(sel.value);
      return sel;
    };
    sectionLabel("Identity");
    const nameRow = row("Name");
    const nameInput = nameRow.createEl("input", { type: "text", value: this.state.name, placeholder: "(random)" });
    this.nameInputEl = nameInput;
    nameInput.style.flex = "1";
    nameInput.style.minWidth = "0";
    nameInput.onchange = () => {
      this.state.name = nameInput.value;
      this.markStaleOrRefresh(false);
    };
    const nameRoll = nameRow.createEl("button", { text: "\u{1F3B2}" });
    nameRoll.onclick = () => {
      this.state.name = randomName();
      nameInput.value = this.state.name;
      this.markStaleOrRefresh(false);
    };
    const seedRow = row("Seed");
    const seedInput = seedRow.createEl("input", { type: "text", value: this.state.seed });
    this.seedInputEl = seedInput;
    seedInput.style.flex = "1";
    seedInput.style.minWidth = "0";
    seedInput.onchange = () => {
      this.state.seed = seedInput.value || "townforge";
      this.markStaleOrRefresh(true);
    };
    const seedRoll = seedRow.createEl("button", { text: "\u{1F3B2}" });
    seedRoll.onclick = () => {
      this.state.seed = randomSeed();
      seedInput.value = this.state.seed;
      this.markStaleOrRefresh(true);
    };
    sectionLabel("Place");
    dropdown(row("Terrain"), TERRAINS, this.state.terrain, (v) => {
      this.state.terrain = v;
      this.markStaleOrRefresh(true);
    });
    const dirRow = row("Sea side");
    this.dirRowEl = dirRow;
    dropdown(dirRow, DIRECTIONS, this.state.direction, (v) => {
      this.state.direction = v;
      this.markStaleOrRefresh(true);
    });
    dropdown(row("Mode"), ["full", "landscape"], this.state.mode, (v) => {
      this.state.mode = v;
      this.updateVisibility();
      this.markStaleOrRefresh(true);
    });
    const settlementRow = row("Settlement");
    this.settlementRowEl = settlementRow;
    dropdown(settlementRow, SETTLEMENTS, this.state.settlement, (v) => {
      this.state.settlement = v;
      this.markStaleOrRefresh(true);
    });
    sectionLabel("Approach roads");
    const roadsRow = row("Edges");
    const autoLab = roadsRow.createEl("label");
    autoLab.style.display = "flex";
    autoLab.style.alignItems = "center";
    autoLab.style.gap = "3px";
    autoLab.style.fontSize = "0.75em";
    const autoCb = autoLab.createEl("input", { type: "checkbox" });
    autoCb.checked = this.state.edgesAuto;
    autoLab.createSpan({ text: "auto" });
    const edgeBoxes = {};
    for (const e of ["N", "E", "S", "W"]) {
      const l = roadsRow.createEl("label");
      l.style.display = "flex";
      l.style.alignItems = "center";
      l.style.gap = "2px";
      l.style.fontSize = "0.75em";
      const cb = l.createEl("input", { type: "checkbox" });
      cb.checked = this.state.edges[e];
      cb.disabled = this.state.edgesAuto;
      cb.onchange = () => {
        this.state.edges[e] = cb.checked;
        this.markStaleOrRefresh(true);
      };
      l.createSpan({ text: e });
      edgeBoxes[e] = cb;
    }
    autoCb.onchange = () => {
      this.state.edgesAuto = autoCb.checked;
      for (const e of ["N", "E", "S", "W"])
        edgeBoxes[e].disabled = autoCb.checked;
      this.markStaleOrRefresh(true);
    };
    sectionLabel("Density");
    const slider = (labelText, min, max, step, val, fmt, onChange) => {
      const r = row(labelText);
      const s = r.createEl("input", { type: "range" });
      s.min = String(min);
      s.max = String(max);
      s.step = String(step);
      s.value = String(val);
      s.style.flex = "1";
      const out = r.createEl("span", { text: fmt(val) });
      out.style.fontSize = "0.72em";
      out.style.minWidth = "30px";
      out.style.textAlign = "right";
      out.style.opacity = "0.7";
      s.oninput = () => {
        out.setText(fmt(parseFloat(s.value)));
      };
      s.onchange = () => onChange(parseFloat(s.value));
      return s;
    };
    slider("Farms", 0, 2, 0.25, this.state.farm, (v) => `${v.toFixed(2)}\xD7`, (v) => {
      this.state.farm = v;
      this.markStaleOrRefresh(true);
    });
    slider("Forest", 0, 2, 0.25, this.state.forest, (v) => `${v.toFixed(2)}\xD7`, (v) => {
      this.state.forest = v;
      this.markStaleOrRefresh(true);
    });
    this.mountainSlider = slider("Mtn size", 0, 12, 1, this.state.mountain, (v) => `${v}`, (v) => {
      this.state.mountain = v;
      this.markStaleOrRefresh(true);
    });
    const mtnRow = row("Mtn edges");
    this.mtnSideRowEl = mtnRow;
    const mtnEdgeBoxes = {};
    for (const e of ["N", "E", "S", "W"]) {
      const l = mtnRow.createEl("label");
      l.style.display = "flex";
      l.style.alignItems = "center";
      l.style.gap = "2px";
      l.style.fontSize = "0.75em";
      const cb = l.createEl("input", { type: "checkbox" });
      cb.checked = this.state.mountainEdges[e];
      cb.onchange = () => {
        this.state.mountainEdges[e] = cb.checked;
        this.markStaleOrRefresh(true);
      };
      l.createSpan({ text: e });
      mtnEdgeBoxes[e] = cb;
    }
    const mtnNote = mtnRow.createEl("span", { text: "overlay" });
    mtnNote.style.fontSize = "0.6em";
    mtnNote.style.opacity = "0.4";
    this.landmarksSection = sectionLabel("Landmarks");
    const triRow = controls.createDiv();
    this.landmarksRowEl = triRow;
    triRow.style.display = "flex";
    triRow.style.flexWrap = "wrap";
    triRow.style.gap = "5px";
    const triBtn = (labelText, key) => {
      const b = triRow.createEl("button");
      const paint = () => {
        const st = this.state[key];
        b.setText(`${labelText}: ${TRI_LABEL[st]}`);
        b.style.opacity = st === "auto" ? "0.6" : "1";
        b.style.fontWeight = st === "on" ? "600" : "400";
        b.style.textDecoration = st === "off" ? "line-through" : "none";
      };
      b.style.fontSize = "0.72em";
      b.style.flex = "1";
      b.style.minWidth = "70px";
      b.onclick = () => {
        this.state[key] = TRI_NEXT[this.state[key]];
        paint();
        this.markStaleOrRefresh(true);
      };
      paint();
    };
    triBtn("Walls", "walls");
    triBtn("Castle", "castle");
    triBtn("Temple", "temple");
    triBtn("Market", "market");
    triBtn("Barracks", "barracks");
    triBtn("Tower", "tower");
    const canvasWrap = root.createDiv();
    canvasWrap.style.marginTop = "4px";
    const viewport = canvasWrap.createDiv();
    this.viewport = viewport;
    viewport.style.position = "relative";
    viewport.style.width = "100%";
    viewport.style.overflow = "hidden";
    viewport.style.borderRadius = "6px";
    viewport.style.cursor = "grab";
    viewport.style.touchAction = "none";
    this.canvas = viewport.createEl("canvas");
    this.canvas.style.width = "100%";
    this.canvas.style.height = "auto";
    this.canvas.style.display = "block";
    this.canvas.style.transformOrigin = "0 0";
    this.canvas.style.willChange = "transform";
    const zoomBar = viewport.createDiv();
    zoomBar.style.position = "absolute";
    zoomBar.style.top = "6px";
    zoomBar.style.right = "6px";
    zoomBar.style.display = "flex";
    zoomBar.style.flexDirection = "column";
    zoomBar.style.gap = "3px";
    zoomBar.style.zIndex = "2";
    zoomBar.addEventListener("pointerdown", (e) => e.stopPropagation());
    const mkZoomBtn = (label, aria, fn) => {
      const b = zoomBar.createEl("button", { text: label });
      b.setAttr("aria-label", aria);
      b.style.width = "26px";
      b.style.height = "26px";
      b.style.padding = "0";
      b.style.fontSize = "15px";
      b.style.lineHeight = "1";
      b.style.fontWeight = "600";
      b.style.opacity = "0.85";
      b.style.cursor = "pointer";
      b.onclick = (e) => {
        e.preventDefault();
        fn();
      };
      return b;
    };
    mkZoomBtn("+", "Zoom in", () => this.zoomBy(1.3, null));
    mkZoomBtn("\u2212", "Zoom out", () => this.zoomBy(1 / 1.3, null));
    mkZoomBtn("\u2922", "Reset zoom", () => this.resetView());
    viewport.addEventListener("wheel", (e) => {
      e.preventDefault();
      const rect = viewport.getBoundingClientRect();
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;
      const factor = e.deltaY < 0 ? 1.12 : 1 / 1.12;
      this.zoomBy(factor, { x: cx, y: cy });
    }, { passive: false });
    let dragging = false;
    let lastX = 0, lastY = 0;
    viewport.addEventListener("pointerdown", (e) => {
      dragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
      viewport.style.cursor = "grabbing";
      viewport.setPointerCapture(e.pointerId);
    });
    viewport.addEventListener("pointermove", (e) => {
      if (!dragging)
        return;
      this.panX += e.clientX - lastX;
      this.panY += e.clientY - lastY;
      lastX = e.clientX;
      lastY = e.clientY;
      this.clampPan();
      this.applyView();
    });
    const endDrag = (e) => {
      if (!dragging)
        return;
      dragging = false;
      viewport.style.cursor = "grab";
      try {
        viewport.releasePointerCapture(e.pointerId);
      } catch {
      }
    };
    viewport.addEventListener("pointerup", endDrag);
    viewport.addEventListener("pointercancel", endDrag);
    viewport.addEventListener("dblclick", (e) => {
      e.preventDefault();
      this.resetView();
    });
    const footer = root.createDiv();
    footer.style.position = "sticky";
    footer.style.bottom = "0";
    footer.style.marginTop = "auto";
    footer.style.display = "flex";
    footer.style.flexDirection = "column";
    footer.style.gap = "6px";
    footer.style.paddingTop = "6px";
    footer.style.background = "var(--background-secondary)";
    footer.style.borderTop = "1px solid var(--background-modifier-border)";
    footer.style.zIndex = "3";
    this.status = footer.createDiv();
    this.status.style.fontSize = "0.72em";
    this.status.style.opacity = "0.6";
    const genRow = footer.createDiv();
    genRow.style.display = "flex";
    genRow.style.flexWrap = "wrap";
    genRow.style.gap = "6px";
    this.generateBtn = genRow.createEl("button", { text: "Generate" });
    this.generateBtn.style.flex = "2 1 120px";
    this.generateBtn.style.fontWeight = "600";
    this.generateBtn.style.padding = "8px";
    this.generateBtn.onclick = () => {
      this.state.seed = randomSeed();
      this.seedInputEl.value = this.state.seed;
      this.state.name = randomName();
      if (this.nameInputEl)
        this.nameInputEl.value = this.state.name;
      this.stale = false;
      this.refresh();
    };
    const regenBtn = genRow.createEl("button", { text: "\u21BB Same seed" });
    regenBtn.setAttr("aria-label", "Regenerate with the same seed");
    regenBtn.style.flex = "1 1 100px";
    regenBtn.onclick = () => {
      this.stale = false;
      this.refresh();
    };
    const actions = footer.createDiv();
    actions.style.display = "flex";
    actions.style.flexWrap = "wrap";
    actions.style.gap = "6px";
    const copyBtn = actions.createEl("button", { text: "Copy code" });
    copyBtn.style.flex = "1 1 90px";
    copyBtn.onclick = async () => {
      await navigator.clipboard.writeText(this.codeBlock());
      new import_obsidian.Notice("Town Forge: code block copied");
    };
    const insertBtn = actions.createEl("button", { text: "Insert" });
    insertBtn.style.flex = "1 1 90px";
    insertBtn.onclick = () => this.insertIntoNote();
    const saveBtn = actions.createEl("button", { text: "Save PNG" });
    saveBtn.style.flex = "1 1 90px";
    saveBtn.onclick = () => this.saveToVault();
    if (this.getEnableZoomMapExport()) {
      const exportBtn = actions.createEl("button", { text: "Export to TTRPG Tools: Maps" });
      exportBtn.style.flex = "1 1 100%";
      exportBtn.style.whiteSpace = "nowrap";
      exportBtn.setAttr("aria-label", "Create a folder + PNG + note with a zoommap block in the configured export folder");
      exportBtn.onclick = async () => {
        const _label = exportBtn.textContent;
        exportBtn.disabled = true;
        exportBtn.setAttr("aria-busy", "true");
        exportBtn.textContent = "\u23F3 Exporting\u2026";
        const _busy = new import_obsidian.Notice("Town Forge: exporting to TTRPG Tools - Maps\u2026 this can take a few seconds.", 0);
        try {
          await this.exportToZoomMap();
        } finally {
          _busy.hide();
          exportBtn.disabled = false;
          exportBtn.removeAttribute("aria-busy");
          exportBtn.textContent = _label;
        }
      };
    }
    if (this.getShowTroubleshoot()) {
      const troubleRow = footer.createDiv();
      troubleRow.style.display = "flex";
      troubleRow.style.marginTop = "2px";
      const troubleBtn = troubleRow.createEl("button", { text: "\u{1F41E} Copy config for support" });
      troubleBtn.setAttr("aria-label", "Copy the full settings used for this map, to report an issue");
      troubleBtn.style.flex = "1";
      troubleBtn.style.fontSize = "0.78em";
      troubleBtn.onclick = async () => {
        await navigator.clipboard.writeText(this.troubleshootConfig());
        new import_obsidian.Notice("Town Forge: full config copied \u2014 paste it to report an issue");
      };
    }
    this.updateVisibility();
    this.refresh();
  }
  updateVisibility() {
    const full = this.state.mode === "full";
    this.settlementRowEl.style.display = full ? "flex" : "none";
    if (this.dirRowEl)
      this.dirRowEl.style.display = this.state.terrain === "coastal" ? "flex" : "none";
    if (this.mtnSideRowEl)
      this.mtnSideRowEl.style.display = this.state.terrain === "mountain" ? "none" : "flex";
    const isCity = ["small_city", "city", "large_city", "metropolis"].includes(this.state.settlement);
    const showLandmarks = full && isCity;
    if (this.landmarksSection)
      this.landmarksSection.style.display = showLandmarks ? "block" : "none";
    if (this.landmarksRowEl)
      this.landmarksRowEl.style.display = showLandmarks ? "flex" : "none";
  }
  // Mark the preview stale (waiting for Generate) for expensive maps; refresh
  // immediately for cheap ones.  "Cheap" = last generation was fast.
  markStaleOrRefresh(_bigChange) {
    this.updateVisibility();
    const expensive = this.lastGenMs > 150 || ["large_city", "metropolis"].includes(this.state.settlement);
    if (expensive) {
      this.stale = true;
      this.paintStale();
    } else {
      this.refresh();
    }
  }
  paintStale() {
    if (this.generateBtn) {
      this.generateBtn.setText("Generate \u25CF");
      this.generateBtn.style.opacity = "1";
    }
    this.status.setText("Settings changed \u2014 press Generate to update.");
  }
  overrides() {
    const s = this.state;
    const tri = (t) => t === "auto" ? void 0 : t === "on";
    return {
      walls: tri(s.walls),
      castle: tri(s.castle),
      cathedral: tri(s.temple),
      market: tri(s.market),
      barracks: tri(s.barracks),
      tower: tri(s.tower),
      farmDensity: s.farm,
      forestDensity: s.forest
    };
  }
  enabledEdges() {
    if (this.state.edgesAuto)
      return void 0;
    const e = this.state.edges;
    return { N: e.N, E: e.E, S: e.S, W: e.W };
  }
  // Concatenated edge string for the mountain overlay, e.g. "NSW" (or "" = none).
  mountainSideString() {
    const m = this.state.mountainEdges;
    return ["N", "E", "S", "W"].filter((e) => m[e]).join("");
  }
  troubleshootConfig() {
    const s = this.state;
    const edges = s.edgesAuto ? "auto" : ["N", "E", "S", "W"].filter((e) => s.edges[e]).join("") || "none";
    const lines = [
      "Town Forge \u2014 config for support (v1.0.3)",
      `terrain: ${s.terrain}`,
      `mode: ${s.mode}`,
      `settlement: ${s.settlement}`,
      `seed: ${s.seed}`,
      `name: ${s.name || "(none)"}`,
      `sea side: ${s.terrain === "coastal" ? s.direction : "n/a"}`,
      `mtn edges: ${s.terrain !== "mountain" ? this.mountainSideString() || "none" : "n/a"}`,
      `roads: ${edges}`,
      `farms: ${s.farm}\xD7 \xB7 forest: ${s.forest}\xD7 \xB7 mtn size: ${s.mountain}`,
      `landmarks: walls=${s.walls} castle=${s.castle} temple=${s.temple} market=${s.market} barracks=${s.barracks} tower=${s.tower}`,
      `last gen: ${this.lastGenMs.toFixed(0)}ms`
    ];
    return lines.join("\n");
  }
  codeBlock() {
    const s = this.state;
    const lines = [`terrain: ${s.terrain}`, `seed: ${s.seed}`, `mode: ${s.mode}`];
    if (s.name)
      lines.push(`name: ${s.name}`);
    if (s.mode === "full")
      lines.push(`settlement: ${s.settlement}`);
    if (!s.edgesAuto)
      lines.push(`edges: ${["N", "E", "S", "W"].filter((e) => s.edges[e]).join("") || "none"}`);
    if (s.farm !== 1)
      lines.push(`farms: ${s.farm}`);
    if (s.forest !== 1)
      lines.push(`forest: ${s.forest}`);
    if (s.terrain === "coastal" && s.direction !== "random")
      lines.push(`seaside: ${s.direction}`);
    const mtnEdges = this.mountainSideString();
    if (s.terrain !== "mountain" && mtnEdges)
      lines.push(`mtnedges: ${mtnEdges}`);
    const mountainsActive = s.terrain === "mountain" || s.terrain !== "mountain" && mtnEdges !== "";
    if (mountainsActive && s.mountain !== 6)
      lines.push(`mtnsize: ${s.mountain}`);
    for (const k of ["walls", "castle", "temple", "market", "barracks", "tower"]) {
      if (s[k] !== "auto")
        lines.push(`${k}: ${s[k]}`);
    }
    return "```town-forge\n" + lines.join("\n") + "\n```";
  }
  insertIntoNote() {
    let mdView = this.app.workspace.getActiveViewOfType(import_obsidian.MarkdownView);
    if (!mdView) {
      const recent = this.app.workspace.getMostRecentLeaf();
      if (recent && recent.view instanceof import_obsidian.MarkdownView)
        mdView = recent.view;
    }
    if (!mdView) {
      new import_obsidian.Notice("Town Forge: open a note in the main editor first, then click Insert");
      return;
    }
    mdView.editor.replaceSelection(this.codeBlock() + "\n");
    new import_obsidian.Notice("Town Forge: map inserted");
  }
  async saveToVault() {
    try {
      if (this.stale)
        this.refresh();
      const blob = await new Promise((res) => this.canvas.toBlob((b) => res(b), "image/png"));
      if (!blob) {
        new import_obsidian.Notice("Town Forge: could not render PNG");
        return;
      }
      const buf = await blob.arrayBuffer();
      const base = this.sanitizeName(this.state.name || this.state.seed).replace(/\s+/g, "-").toLowerCase();
      const root = (this.getExportFolder() || "Maps").replace(/^\/+|\/+$/g, "");
      await this.ensureFolder(root);
      let path = (0, import_obsidian.normalizePath)(`${root}/${base}-${this.state.terrain}.png`);
      let i = 1;
      while (this.app.vault.getAbstractFileByPath(path)) {
        path = (0, import_obsidian.normalizePath)(`${root}/${base}-${this.state.terrain}-${i}.png`);
        i++;
      }
      await this.app.vault.createBinary(path, buf);
      new import_obsidian.Notice(`Town Forge: saved ${path}`);
    } catch (e) {
      new import_obsidian.Notice(`Town Forge: save failed \u2014 ${e instanceof Error ? e.message : String(e)}`);
    }
  }
  // Strip characters Obsidian/the filesystem disallow in a path segment, and
  // collapse whitespace so "Port Haven" stays readable as a folder/file name.
  sanitizeName(raw) {
    const cleaned = raw.replace(/[\\/:*?"<>|#^[\]]/g, "").replace(/\s+/g, " ").trim();
    return cleaned || "Untitled Map";
  }
  // Ensure a vault folder (and its parents) exists; tolerate it already being
  // there.  Obsidian has no recursive mkdir, so build the path segment by
  // segment.
  async ensureFolder(folderPath) {
    const parts = folderPath.split("/").filter((p) => p.length);
    let cur = "";
    for (const part of parts) {
      cur = cur ? `${cur}/${part}` : part;
      if (!this.app.vault.getAbstractFileByPath(cur)) {
        try {
          await this.app.vault.createFolder(cur);
        } catch (e) {
        }
      }
    }
  }
  // Export to the Zoom Map (TTRPG Tools: Maps) format: a folder named after the
  // map inside the configured export folder, containing the PNG and a note with
  // a `zoommap` code block pointing at it so the map renders interactively.
  async exportToZoomMap() {
    try {
      if (this.stale)
        this.refresh();
      const blob = await new Promise((res) => this.canvas.toBlob((b) => res(b), "image/png"));
      if (!blob) {
        new import_obsidian.Notice("Town Forge: could not render PNG");
        return;
      }
      const buf = await blob.arrayBuffer();
      const mapName = this.sanitizeName(this.state.name || this.state.seed);
      const root = (this.getExportFolder() || "Maps").replace(/^\/+|\/+$/g, "");
      let folder = `${root}/${mapName}`;
      let suffixName = mapName;
      let i = 1;
      while (this.app.vault.getAbstractFileByPath(folder)) {
        suffixName = `${mapName} ${i}`;
        folder = `${root}/${suffixName}`;
        i++;
      }
      await this.ensureFolder(folder);
      const pngPath = `${folder}/${suffixName}.png`;
      const notePath = `${folder}/${suffixName}.md`;
      await this.app.vault.createBinary(pngPath, buf);
      let places = [];
      let noteStats = { fromTemplate: 0, fromDefault: 0 };
      if (this.lastFullScene) {
        const slots = collectSlots(
          this.lastFullScene,
          this.state.seed,
          this.getPinTypes(),
          this.lastMapSize
        );
        places = await this.resolveNames(slots, mapName);
        noteStats = await this.writePlaceNotes(places, folder, mapName, this.state.mode === "full" ? this.state.settlement : "");
        const markersFile = buildMarkersFile({ places, mapSize: this.lastMapSize, imagePath: pngPath });
        await this.app.vault.create(`${pngPath}.markers.json`, JSON.stringify(markersFile, null, 2));
      }
      const block = [
        "```zoommap",
        `image: ${pngPath}`,
        "height: 600px",
        "minZoom: 0.3",
        "maxZoom: 8",
        "```",
        ""
      ].join("\n");
      await this.app.vault.create(notePath, block);
      let msg = `Town Forge: exported to ${folder}`;
      if (places.length) {
        const bits = [`${places.length} pins`];
        if (noteStats.fromTemplate)
          bits.push(`${noteStats.fromTemplate} from template`);
        if (noteStats.fromDefault)
          bits.push(`${noteStats.fromDefault} default (no template found in "${this.getTemplateFolder() || "Templates/TownForge"}")`);
        msg += ` \xB7 ${bits.join(", ")}`;
      }
      new import_obsidian.Notice(msg);
      if (this.getOpenAfterExport()) {
        try {
          const file = this.app.vault.getAbstractFileByPath(notePath);
          if (file instanceof import_obsidian.TFile) {
            await this.app.workspace.getLeaf(false).openFile(file);
          }
        } catch {
        }
      }
    } catch (e) {
      new import_obsidian.Notice(`Town Forge: export failed \u2014 ${e instanceof Error ? e.message : String(e)}`);
    }
  }
  // Candidate template filenames for a building type, most-specific first.
  // Tolerates case + singular/plural, e.g. shop -> Shop.md, shops.md, Shops.md.
  templateCandidates(buildingType) {
    const lower = buildingType.toLowerCase();
    const cap = lower.charAt(0).toUpperCase() + lower.slice(1);
    const plural = lower.endsWith("s") ? lower : lower + "s";
    const capPlural = plural.charAt(0).toUpperCase() + plural.slice(1);
    return Array.from(/* @__PURE__ */ new Set([`${cap}.md`, `${lower}.md`, `${capPlural}.md`, `${plural}.md`]));
  }
  // Read a template's text for a building type, or null if none found.  Tries
  // exact path candidates first, then a case-insensitive scan of the template
  // folder so "shop.md" / "Shop.md" / "Shops.md" all resolve.
  async readTemplate(buildingType) {
    const tf = (this.getTemplateFolder() || "Templates/TownForge").replace(/^\/+|\/+$/g, "");
    const candidates = this.templateCandidates(buildingType);
    for (const fname of candidates) {
      const file = this.app.vault.getAbstractFileByPath(`${tf}/${fname}`);
      if (file && "extension" in file) {
        try {
          return await this.app.vault.read(file);
        } catch {
        }
      }
    }
    const wantBase = candidates.map((c) => c.toLowerCase());
    const tfLower = tf.toLowerCase();
    for (const f of this.app.vault.getMarkdownFiles()) {
      const parent = (f.parent?.path ?? "").toLowerCase();
      if (parent !== tfLower)
        continue;
      if (wantBase.includes(f.name.toLowerCase())) {
        try {
          return await this.app.vault.read(f);
        } catch {
        }
      }
    }
    return null;
  }
  // Ensure the note body has a `type:` frontmatter property set to the note
  // type.  If the body already opens with a YAML block, inject/replace `type:`
  // there; otherwise prepend a small frontmatter block.  `town`, `subtype`
  // (when present), and `size` (the settlement size, when present) are added
  // too so templates / Randomness rolls can read them.
  ensureTypeFrontmatter(body, type, town, subtype, size) {
    body = body.replace(/\r\n/g, "\n");
    const fmMatch = body.match(/^---\n([\s\S]*?)\n---\n?/);
    const yamlVal = (v) => /[:#\-?\[\]{},&*!|>'"%@`]/.test(v) ? JSON.stringify(v) : v;
    const hasSub = !!(subtype && subtype.trim());
    const hasSize = !!(size && size.trim());
    if (fmMatch) {
      let fm = fmMatch[1];
      if (/^type\s*:/m.test(fm))
        fm = fm.replace(/^type\s*:.*$/m, `type: ${yamlVal(type)}`);
      else
        fm = `type: ${yamlVal(type)}
${fm}`;
      if (hasSub) {
        if (/^subtype\s*:/m.test(fm))
          fm = fm.replace(/^subtype\s*:.*$/m, `subtype: ${yamlVal(subtype)}`);
        else
          fm = `${fm}
subtype: ${yamlVal(subtype)}`;
      }
      if (hasSize) {
        if (/^size\s*:/m.test(fm))
          fm = fm.replace(/^size\s*:.*$/m, `size: ${yamlVal(size)}`);
        else
          fm = `${fm}
size: ${yamlVal(size)}`;
      }
      if (!/^town\s*:/m.test(fm))
        fm = `${fm}
town: ${yamlVal(town)}`;
      return body.replace(fmMatch[0], `---
${fm}
---
`);
    }
    const sub = hasSub ? `subtype: ${yamlVal(subtype)}
` : "";
    const sz = hasSize ? `size: ${yamlVal(size)}
` : "";
    return `---
type: ${yamlVal(type)}
${sub}${sz}town: ${yamlVal(town)}
---
${body}`;
  }
  // Fill {{name}}, {{type}}, {{subtype}}, {{size}}, {{town}} tokens; Randomness syntax is left intact.
  fillTemplate(tpl, name, type, town, subtype, size) {
    return tpl.replace(/\{\{\s*name\s*\}\}/g, name).replace(/\{\{\s*type\s*\}\}/g, type).replace(/\{\{\s*subtype\s*\}\}/g, subtype ?? "").replace(/\{\{\s*size\s*\}\}/g, size ?? "").replace(/\{\{\s*town\s*\}\}/g, town);
  }
  // Built-in fallback note when no template exists for a type.
  defaultPlaceNote(name, type, town) {
    return [`# ${name}`, "", `*${type} in ${town}.*`, "", "_No template found \u2014 create one in your Town Forge template folder to flesh this out._", ""].join("\n");
  }
  // Turn positioned slots into named places.  Each pin type names either via
  // its built-in word lists (default, deterministic, no dependencies) or a
  // custom JS hook (power users — may call other plugins like Randomness).
  // A failing or empty JS hook falls back to the built-in generator so a bad
  // hook never breaks the export.
  async resolveNames(slots, town) {
    const types = new Map(this.getPinTypes().map((t) => [t.id, t]));
    const usedByType = /* @__PURE__ */ new Map();
    const places = [];
    for (const slot of slots) {
      const t = types.get(slot.pinTypeId);
      if (!t)
        continue;
      let used = usedByType.get(t.id);
      if (!used) {
        used = /* @__PURE__ */ new Set();
        usedByType.set(t.id, used);
      }
      let name = "";
      let subtype = "";
      if (t.nameMode === "js" && t.nameJs && t.nameJs.trim()) {
        try {
          const r = await this.runNameHook(t.nameJs, { seed: slot.seed, town, type: t.noteType, index: slot.index, subtypes: t.subtypes ?? [] });
          name = r.name;
          subtype = r.subtype;
        } catch (e) {
          name = "";
          subtype = "";
        }
      }
      if (!name) {
        const lists = t.nameLists ?? { surnames: ["Oakhart"], adjectives: ["Old"], nouns: ["House"] };
        name = builtinName(lists, slot.seed, used);
      } else {
        if (used.has(name)) {
          let n = 2;
          while (used.has(`${name} ${n}`))
            n++;
          name = `${name} ${n}`;
        }
        used.add(name);
      }
      if (!subtype && t.subtypes && t.subtypes.length) {
        subtype = t.subtypes[(slot.seed >>> 0) % t.subtypes.length];
      }
      places.push({ name, buildingType: t.noteType, noteType: t.noteType, layerName: t.layerName, px: slot.px, icon: t.icon, subtype: subtype || void 0 });
    }
    return places;
  }
  // Evaluate a custom JS name hook.  The body is an expression OR statements
  // ending in a return.  In scope: app, api (Randomness if present), seed,
  // town, type, index, subtypes (the configured subtype list for this pin).
  // May resolve to EITHER a string (the name; subtype empty) OR an object
  // { name, subtype } — the correlated path, where one roll yields both.
  async runNameHook(body, ctx) {
    const app = this.app;
    const rdm = app.plugins?.plugins?.["randomness"];
    const api = rdm?.api;
    const fn = new Function(
      "app",
      "api",
      "seed",
      "town",
      "type",
      "index",
      "subtypes",
      `"use strict"; return (async () => { ${/\breturn\b/.test(body) ? body : `return (${body});`} })();`
    );
    const out = await Promise.race([
      Promise.resolve(fn(app, api, ctx.seed, ctx.town, ctx.type, ctx.index, ctx.subtypes)),
      new Promise((_, rej) => setTimeout(() => rej(new Error("name hook timed out after 5s")), 5e3))
    ]);
    if (out && typeof out === "object" && !Array.isArray(out)) {
      const name = String(out.name ?? "").trim();
      const subtype = String(out.subtype ?? "").trim();
      return { name, subtype };
    }
    return { name: String(out ?? "").trim(), subtype: "" };
  }
  // Write one note per place into the map folder.  When grouping is enabled the
  // note goes into a per-type subfolder (<folder>/<NoteType>/), otherwise flat
  // in <folder>.  Titles are deduped GLOBALLY across the export (not per
  // subfolder) so wikilinks — which Obsidian resolves by basename, regardless
  // of folder — stay unambiguous and the pins keep working.  Templates are
  // cached per type to avoid re-reading.  Returns counts so the caller can tell
  // the user whether templates were found.
  async writePlaceNotes(places, folder, town, size) {
    const tplCache = /* @__PURE__ */ new Map();
    const usedTitles = /* @__PURE__ */ new Set();
    const ensuredFolders = /* @__PURE__ */ new Set([folder]);
    const group = this.getGroupNotesByType();
    let fromTemplate = 0;
    let fromDefault = 0;
    for (const pl of places) {
      let tpl = tplCache.get(pl.buildingType);
      if (tpl === void 0) {
        tpl = await this.readTemplate(pl.buildingType);
        tplCache.set(pl.buildingType, tpl);
      }
      let title = this.sanitizeName(pl.name);
      if (usedTitles.has(title.toLowerCase())) {
        let n = 2;
        while (usedTitles.has(`${title} ${n}`.toLowerCase()))
          n++;
        title = `${title} ${n}`;
      }
      usedTitles.add(title.toLowerCase());
      pl.noteTitle = title;
      let body = tpl !== null ? this.fillTemplate(tpl, pl.name, pl.noteType, town, pl.subtype, size) : this.defaultPlaceNote(pl.name, pl.noteType, town);
      body = this.ensureTypeFrontmatter(body, pl.noteType, town, pl.subtype, size);
      let destFolder = folder;
      if (group) {
        const sub = this.sanitizeName(pl.noteType) || "Other";
        destFolder = `${folder}/${sub}`;
        if (!ensuredFolders.has(destFolder)) {
          await this.ensureFolder(destFolder);
          ensuredFolders.add(destFolder);
        }
      }
      const notePath = `${destFolder}/${title}.md`;
      let written = true;
      if (!this.app.vault.getAbstractFileByPath(notePath)) {
        try {
          await this.app.vault.create(notePath, body);
        } catch (e) {
          written = false;
        }
      }
      if (written) {
        if (tpl !== null)
          fromTemplate++;
        else
          fromDefault++;
      }
    }
    return { fromTemplate, fromDefault };
  }
  // ---- Zoom / pan view state (CSS transform on the canvas, no re-render) ----
  applyView() {
    if (!this.canvas)
      return;
    this.canvas.style.transform = `translate(${this.panX}px, ${this.panY}px) scale(${this.zoom})`;
  }
  clampPan() {
    const vw = this.viewport.clientWidth;
    const vh = this.viewport.clientHeight || this.canvas.clientHeight;
    const sw = vw * this.zoom;
    const sh = vh * this.zoom;
    const minX = vw - sw;
    const minY = vh - sh;
    if (sw <= vw)
      this.panX = 0;
    else
      this.panX = Math.min(0, Math.max(minX, this.panX));
    if (sh <= vh)
      this.panY = 0;
    else
      this.panY = Math.min(0, Math.max(minY, this.panY));
  }
  zoomBy(factor, centre) {
    const vw = this.viewport.clientWidth;
    const vh = this.viewport.clientHeight || this.canvas.clientHeight;
    const cx = centre ? centre.x : vw / 2;
    const cy = centre ? centre.y : vh / 2;
    const prev = this.zoom;
    const next = Math.max(1, Math.min(6, prev * factor));
    if (next === prev)
      return;
    const ratio = next / prev;
    this.panX = cx - ratio * (cx - this.panX);
    this.panY = cy - ratio * (cy - this.panY);
    this.zoom = next;
    this.clampPan();
    this.applyView();
  }
  resetView() {
    this.zoom = 1;
    this.panX = 0;
    this.panY = 0;
    this.applyView();
  }
  refresh() {
    const s = this.state;
    const opts = {
      roughness: s.roughness,
      octaves: s.octaves,
      riverWidth: 0.06,
      lakeSize: 0.3,
      rangeLen: 0.65,
      peakCount: s.mountain,
      seaSide: s.terrain === "coastal" && s.direction !== "random" ? s.direction : void 0,
      mountainSide: s.terrain !== "mountain" ? this.mountainSideString() || void 0 : void 0
    };
    const fullMode = s.mode === "full";
    const genSize = fullMode ? MAP_SIZE_BY_SIZE[s.settlement] ?? 1e3 : 700;
    this.canvas.width = genSize;
    this.canvas.height = genSize;
    this.resetView();
    const ctx = this.canvas.getContext("2d");
    if (!ctx) {
      this.status.setText("Could not get a 2D canvas context.");
      return;
    }
    const t0 = performance.now();
    try {
      if (fullMode) {
        const full = generateFull(s.terrain, s.seed, {
          ...opts,
          mode: "full",
          size: s.settlement,
          showForest: true,
          showRoads: true,
          enabledEdges: this.enabledEdges(),
          overrides: this.overrides()
        });
        const baseDist = SIZE_BASE_DISTANCE[s.settlement] ?? LANDSCAPE_BASE_DISTANCE;
        renderFull(ctx, full, genSize, genSize, s.terrain, baseDist * this.getScaleMultiplier(), this.getDistanceUnit(), s.name);
        this.lastFullScene = full;
        this.lastMapSize = genSize;
        const houses = (full.houses || []).length;
        const nm = s.name ? `${s.name} \u2014 ` : "";
        this.status.setText(`${nm}${s.terrain} \xB7 ${s.settlement} \xB7 "${s.seed}" \xB7 ${houses} buildings`);
      } else {
        const scene = generateLandscape(s.terrain, s.seed, genSize, genSize, opts);
        renderScene(ctx, scene, genSize, genSize, s.terrain, LANDSCAPE_BASE_DISTANCE * this.getScaleMultiplier(), this.getDistanceUnit());
        this.lastFullScene = null;
        this.lastMapSize = genSize;
        this.status.setText(`${s.terrain} \xB7 landscape \xB7 "${s.seed}"`);
      }
      this.lastGenMs = performance.now() - t0;
      this.stale = false;
      if (this.generateBtn)
        this.generateBtn.setText("Generate");
    } catch (e) {
      this.status.setText(`Error: ${e instanceof Error ? e.message : String(e)}`);
    }
  }
  async onClose() {
    this.contentEl.empty();
  }
};

// src/buildingkey.ts
var BUILDING_IMAGES = {
  castle: "data:image/png;base64,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",
  cathedral: "data:image/png;base64,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",
  market: "data:image/png;base64,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",
  barracks: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAFzUkdCAK7OHOkAAA8wSURBVHic7ZvZVxtpesZ/UmmrTRKbNrAASeCGtt1tu+10uzszuUtyzsycM7lJ/otc53/JdS4yJzlJ5iI5Z+b0TC9e23a7jY0BCYnFIAEGtBagrXIhTLwg3DYQSqr6XdlYfPqkeup56n2/17Z//p9/1N1uNw5BwMJ82N1ul3Xxj6DRbFBv1M96G6eGwyE4znoPhqXRbLC7u9f6i9vWlTeK/aw3YGR0/ax3cPqcyO3faDbQdZ1ucxOHIIDb9X9/7kKOfcW63Sa7TdRvcuwIMINNdjPHlrcZbPIkMGpMnshujPahjIaRY9KqAv4fMHJMGurWNapNHhcjx6Rhvmkj2+RJYFRRGyYCjGyT3YxhZGlkmzQSJx2ThhEABrZJo3AaMWmYCLB4N6cRk115y1nVxHuseSKrGAirmng/ui4CrGri/eg6B7CqiZ9Ho9mg2dS7TwBY1cQ7eTUmuy4CLN7NqzFp3SpH0O3VhK53aQScBGapJqwIaINZqokTmQnsZpuky6uJY101s9hkN3OsCDCLTXYzx5K4WWzyuBg5Jk9gKth4H8pIGD0mrSrglDF6TBrm9jWyTR4Ho8ekIb5to9vkcTGyqA0RAUa3yW7GENI0uk0ahdOISUMIAIPbpBE4rZg0RARYvJvTismuu+2sauI91z2xlQyAVU28P10VAVY18f50lQNY1cTP49WY7CoBYFUT7+TNmOyqCLB4N2/GpHW7tMEs1YTlAIfw0ib39qrUG42Dn++Wqzyfe3GmezsJHILjQNjdJe8T4k2bnH+UJfVwldX0C1xuJ//wT3+F4OiOe+fYM4HdapPraxrpRzkWptaoVetEwiFufHGdW7fvsTS9zuil0Flv80T44CvXjU0XrbhH8uEKqYerFLcqqKrCxY8nGUvEkGUJgMWlZZIPVywBdEvTpV5rsvAkR+rhKrmFLQSHwMjwOb66HkdRZZJzaTZebB4IYCwR45tvb7GZK9IX8p719o/NBwugk5suug65zBapH1dZfNqy+GBggC9vXGdkOEp2NcvU1DSlQgFF8vBseobh6BA2m43h6BCCIDBzb5kvf/PxO9/L6DF5zKlgY36odpTzOyQftCy+XNhBliUmPzrPWCLG7t4e6fkMD354iE9V8KoSA9EwANVanWRynvHxBIIgEI+NsDS9TO1vGzid7cXfCTHZWVfwA6hVG2Qet57i15a2EQSBaHSIG9dj+H0qCwvLfP3Hb7DZwCt7mEgMv7WG36cwO5tifDwB+zEwO5dieXad2IVw2/fuhJg0hABO2iZ1XWd1fovUwxWWnq1TrzXo7+/li88/IzY6TC67xrOnMxSLLYsfDPbidB7+3rquozd1drUK+XwRv99LINCPosrMP8oy+nEYm+3wfXRCTJ65AE7SJoubGnMPnjP/KItW3MXj8XB+fIzxRIxavU46leHfHvwXPq+MT5UZiEbarrWzu0e5rFHRNFwuF5LHw9xciuvXrwBwfizB4ydP0cp7yKq77TpGj8kz391xbbK6Wyf9U5bUjytsPC9gt9sZGgwz9lmM3p4eFhaW+eZP3+1bvMjk2NsW/5J6vUGpXKFU1gBQFYmhSAiHQ6BWa5BOZ7h27TI2m42xRIyHPz4m9WiFT/4ydrwPcYacuQA+xCb1ps7z5IuWxc9s0Gw08ft9XPvsMvH4COtrG8zOJCkViiiyh8FgX1uLbzZ1KhWNUkWjWq0iSxID/T2IntfvaqdTwCEIrKxmGRqMIEkioVCAxSdrXPxyFLu9TQ6cEKdVTZy5AHgPm8xvVJi7/5z0oyw7lT1cbhfjiThjYzF0XSeVnOc//v33eBUZv08hMHyExe/sUiprVLQdPG4XqiKjyP3Y2gT6S1dYXlplaLC17lgixnff32FrrUR/+PR6AqdZTRhCAO+itLXD1//yiK1cEYBIOMT1KzFCoQHS84t8/81NbIBPlZgcG2m7Tq1Wp1SuUC5r2Ow2FFni3GDL4g+jWq2xVSiRL5SRVZXhWIxgKECj2USw2xkdiXL7zg/M3l+m/9fv7gl8KKdZTXSEANRekUp+h3A4xC+++hxZlnixucXv//O/6fHJDIX6j7D4JuWKRqmsUavVUWSRQKAPz37sHMZWvsB2UaPZ1AkPRYh/NIHH40b0eJBlEfu+SwiCwOjIMCuzq9T+5uiewHE4zWqiIwQAMHopxMqz7YOWrMftxulyEBzoe+u1OrCj7VKqVNC0XUSPG59XQZbEIy1+u1QmXygTjoQ5PxHF6/PidrmQZRFJ9GC3v30CmEiMMpecZ3l2g9iF0zsfOK1qomMEkLg8yMy9ZXJr64SCARRFxuv1UtZ2UCQRgGqtRqmkUa5oCHY7iiLR39uDIBx+dLtXrbGVL1IoVpAVhchQlE+vDuAQBCRJRJGltvHwklAwsN8TWD1VAZwWHSOAgXM+fP0KyVSaUDAAQGIszvTUUxr75Vuj3kBWJEKBPtxHWfx2gRfbJXarVRSfj5GxOEORMKLYsni3y9XWKTILSzydmubqtcuEQ0EAxuIxnkw/o1I6uidgBN6sJjpGAABjVyI8+lOaG59fQxAEhkei3L97H8Fuo8fvRRLFtl25UkVju1AiXyzj9fkJDQ0yMnwOt9tFuVzGboe+Xv+hv7uxvsn8fJp0OoNXlVFED3du3eO3f/dr2I+BHx9NkfpxhU9+YdyewGHVRGcJ4OogD/6QJLOwRCI+it1mYzA6xG65jLwfA6+yV62xtV0kX2w9xUfODfNpcICl5ytcnDiPvG/xgYFe5pIZeKWtr2kamfQSyWQKG01U6fUKY6tQ5vlKqyRUFaXVE3i6xoUbI4adFjqsmugoAXhkF5F4H6n5DIn4KACJRJyb392i168evG5zK892sUITG+HBMInJSUTRgyR6kGUJTavg9SqH2vzC4jKpuXny+Tyq7CES6MV1SIXhV2Xm5uZf6wl8f/Mum2tFAoOHO8lZc1g10VECABi7Msg3v3uMpu0gSSKBQD9NdLbzJYqVCoVihfBghPMXhvF5vYgeN7IsIXrcBxfcp6pkc+uEQwMATE8nyeWyraNgr4xPkUi0aSLpOmg7O1RrNfKb26/1BG7d/oG5ByuGFQCHVBMdJ4DoZADBKZBMpfnkUqv5cuOrz7l7+wFD0REuBwdwOZ2t0k0SEQ4p3cLhIJnMIl9/fZP1tTU8bid+VTnynGBvr0qpolEpawgOAVWRqdYbzM2mmJgYx+FwMDoSZXU2x95uDbfHearfw0lxrJnAs5h0ERx24p+EmZuZPxBAOBjkV7/6a0rlCoostW0KASwuLJGaz5DfzuOVPcSHI4daPECj0TzoHDaaTRRZIhxuCQzAIdhJpTJMTIzDfgyk5jM8T24Qv9i+DW0kPujqnfWky9iVCLM/LLO+/oJAoB8Ah0Ogx394P35jfZP0wgKZ+QxeVcEne4hHDx/k0HWdirZDuayxs7uHJHno7fEhSh7efGKQZYnl3Avy+QJ+v49QOIgkiaR/yhG7EGlbkRiJDxLAWU+6DJzz4+uTSc1nDgTwJpVKhYXMMvOpeew2kEUPH8Wjbdfc3atSLlcoV3ZwOh2oikRgoPfQ7h/7Taet7SL1Wp18voTf70OraASDAZ6nV9ip7CIpnhP7zKfFBwnACJMuiauDTP05w19cv4Lwyh5aFr9AcX+gMzzQ0zYSXp7/lysaelNHUSQGw4G2r7fZbLzYyrNdKNPQdSKDEeITk6xtbDAzO8dqNgeA0iOSW84TmzB+Z/AYU8Fn+/yY+DTCwz8kWVx6Tmy09fD26KcnLKYX6OtRGR0KHvp7uq5TruxQLlfY3asiSyL9vX5Esf3dWiprbOdLbBdLrQrj4wmaOmRXc9y8eZtGs4nb42RoYoBQrAelVwQbNOpNw/YEXtJxVcBLJK+bSLyPZCp9IIBwKMhiOnNwNvAqb454qbJEMNDfdpDjpcVvFcooqkw4GmWi18/KSpYnT56haRqCINA3pBKK99IbUbG9upYOO9oeivftvRiJjhUAQOJKhG9/N3XQEwgGB6g3dOr1Og6H48gRr3ZsbhfYLlZoNFsWHzs/Qb6QZzWb4/HU09ZoWb/E+MUhgqM9OFyvryU47CheEdUn4nQZ/+s1/g6PYHgyiOCYJjWf4dLFSQDGxuMsZxaw2ThyxOtVSmWN7WJr8CMUCXN+8iNsNjsrqzlu3blLo17HI7sZvhAglOhF8r6xlg0k2Y3qlxAld0c8/b+kowXwsieQSqUPBBCLDZOcmSM40IMstR/xqu4fBW8Xyq2j4HPDfPyJn5WVHNPTc5RKJZwugf6oj1Csh56w+taFdXmcqD4RWfW0PXI2Oh0tAPZjYPb+MhsvNhno70NRFBSvis1uP/Tib720eF0nPNia9ikUS2RzOX6aetIaLQsoTFyMEhjxIzhfv7B2wY7qE1G8Ii53x399nS+AQNSP6pdIptIM9Lemg8bHEzx78hR5/8n+dYuPcH4yiuBwsLKS5fade9RqNSTVw8ilIOF4Lx7l7VkCUXHj9YmIsqejLP5ddLwAAMavDTL17SKfX7+K3W5neHSYO3d+wL6+xXahhKK2LP7Cp71kszlmZpLkC3mcLicDwy2L94eUt9Z1uhwoPhHVKxq+nPtQukIAicuDPPxjisWl54yORLHbbNz46guyq1niExOUSiWyuTUeTz0FG/QEFSYvjhAY8WF/I7vtdhuy6kH1Sx1zoHMcukIAktdNONaaExgdabV7+/t6WV9/wd1799nb3UX2iox+GiQU78UtvX1hRdmF4hWRFc/r9XyX0xUCABi/Osif//Unnk7PsLy8ymo2h8MpEBjpIRg7hy8gv/U7DpeA6m090DlOaaTb6HSNAKKTAVxuJ3fvPaQv7GXiyyjBWM9br7PtW7ziFRGl9oOjZqFrBCA47Pzy7y/RE1TZ2ixSrzVe+3e36ET1Sciq59T/H18n0TUCABgabx0NV2si+c1yx7Vlz4Ku/FZUn4hbdCLJxp7RNwJdKQCHUzDtQ9370p3dDYufjSUAk2MJwORYAjA5lgBMjiUAk2MJwORYAjA5lgBMjiUAk2MJwORYAjA5lgBMjiUAk2MJwORYAjA5lgBMjiUAk2MJwORYAjA5lgBMjiUAk2MJwORYAjA5lgBMjiUAk2MJwORYAjA5lgBMjiUAk2MJwORYAjA5lgBMjiUAk2MJwORYAjA5lgBMjiUAk2MJwORYAjA5lgBMzv8CXsDr+NFmqSgAAAAASUVORK5CYII=",
  tower: "data:image/png;base64,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",
  dock: "data:image/png;base64,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",
  house: "data:image/png;base64,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CPct7ik4nDYcS3xB1d3GFMAysMkSux/t4cCfPcyclOJffvwC7REvf/0Xv0NvANTZscV8fwuE7CwPPbSdvFbE3br4bWeBVn1sCJlzgBWiaYvH18++c4mp8zMc+s6TBHw+Xv7V28zkVURPG4J43THUinm6XBUqap5YfxS7W8blddAa9t72de4WzbWZfxcQBHB7HfQ/s5v5/gzH3z5NebbMM0/vp1Ss8PKv3qYgOrH6Fj2+VJxjyze2cWl2FLtbBgF8QdcdX+duYUaANaLUVBIjs1x6f5QW7Pzmd55keCjOq6+/T1lys7cnxFjyMrue3o4oiXgDTgKt7mWUfHcwI8AasUginb1thLsDDJ9L8OLh/yUabOdvf/gcHx0/jaNFoujKIUoigijoavRjTgLrh9UmsfW+LvY99yBaWOPf/uNFFLXCex+dJNq3uIDkC7oQ12nJ91aYEaDO2B02dj3ey6a9Mc68dZEd394GVyyl16e/3zowI0ADEITFzzn2P7uHyOYA4pXQv14bPrfDjAANRBAFvH4nLo+j4d98slr0WasmQ6+djykAE1MABscUgMExBWBwTAEYHFMABscUgMExBWBwTAEYHFMABscUgMExBWBwTAEYHFMABscUgMExBWBwTAEYHFMABscUgMExBWBwTAEYHFMABscUgMExBWBwTAEYHFMABscUgMExBWBwTAEYHFMABscUgMExBWBwTAEYHFMABuf/ART+Zl8fEA6eAAAAAElFTkSuQmCC",
  mill: "data:image/png;base64,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",
  inn: "data:image/png;base64,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",
  stable: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAFzUkdCAK7OHOkAAAsJSURBVHic7Z3ZjuPGFYZ/sriIpHZ1O9O2Z+IESS4CxLnIhQFf+g3yAn6FPEfeIc+Q6yAB8gaGjTjGODYwHtsz05skauEmksXKBSVK6u5prZRqVPUBDakltUSRf/2nzqmllb/94y/MNE1ohEAiHqppGvLiPwLNKFKaHvswSkPTiHbsY+AWmlFE0ST/xVROsqGoxz4AnmHs2EdQPntp/jSjYIzh1NxEIwQwjfn9E2TnK3bqNnlqor7LziFABJs8ZXaWtwg2uQ94DZN7ORrevhRv8BwmZRZwAHgOk1w1XV5tcld4DpPcnGmebXIf8CpqbkIAzzZ5ynAjS55tkif2HSa5EQA4tkleKCNMchMCJKspI0yeZJOT2cQG77mXd+EImU1sxsmFAJlNbMbJOYDMJtaDZhRZxk5PAJDZxEoWw+TJhQDJahbDpGwqj3Dq2QRjJxoC9oEo2YQMAW9BlGxiL3MCT9kmceLZxE5XTRSbPGV2CgGi2OQps5PERbHJXeE5TO5hVjB/X4oneA+TMgsoGd7DJDfNl2eb3AXewyQXZ5t3m9wVnkXNRQjg3SZPGS6kybtN8kIZYZILAYBzm+SBssIkFyFAspqywuTJNTuZTWz4vnt7Jw6Q2cTmnFQIkNnE5pyUA8hsYj0Ww+RJCQAym1jJ3TB5UiFAspq7YfKdaS6vvr7E5bc3qLZt2C0bTtuG3azAblqlfJ4o2cQ78+28XoDh1RhgQPdHF8EgLJ5z2jacljUVhQWnZcNuWTAdY6vPEimbeGcEELgBWh828Kc//wEAwDKGYBDCd0MEbgDfDTG4HOPNN9eYBDEAQDNI7hZNC3ZrLoxq2wYx3n5RRcomdp4TeCib9N0Q579qF78rqpK3/LYNoLN8XDGF1w/guwECN4TfD3DzoofAfQWaUACAYRtwWsvCcFoW7KYtVDax9ZU7pE3OWrvdttd6PTEIGk9qaDyp3XsuGk+WXMN3A7g/DxGOI7CMQVEUVGrmVBz20m2lXoGilPAFj8jWAjikTfpuHu+d1noCeIxKzUSlZqLzrLn0eJax3C0WXGN04+HqfzeIwwQAoBIVdhFOFgTS3L6/cWy2FsAhbTJwAwCA0yqnxw8Aqqqg2rFR7dwXWRpTeD2/EIjvhuj+0If/5WtkaQYA0AytCClz57BgNU2omsptNrHjrODDfCnfDUF0gkrNPMjn3UUzCJoXdTQv6veeC4dR3hntB0Voef3mCtEoKl6jWzp+8+lHePbH9w985KvhU5Z3CNyw1Na/C1ajAqtRQeeXrXvPuVcjDK6G+O7fL6AQPjsPXAhgVTbh9QPYe4j/jzHq+nj5n9eotR3Uzx00zmvQHkkV16H1pA4g7yzV2s6ejnS/HF0A62QTwSC412nbN1cvuvjyn8+XHqs4JhrnVdTOHNTPqmi+V0O1baN+VgXR1quiT4Z5TaJ6JgXwIKuyiTSmiINkLxnAY4xuPVQqBp69f4Y0pYiTFJM4xcSN4HUDvJy8QZrk/zxKURTYjQrqZ1XUp+Kod6qonzuoth2o6tzufTeAbuk7u0lZHF0Aq7IJv+cDAOx2uX2Awc24+HxNI9A0Atta7nRSmiFOUsRxijhJMb7y0PvJRRzP/6uYqipwWnYhDu/GBzQVnhvAadpb1xHKKrodXQBYkU3sswbwGMObMQz98dNBiAqLGLAqyzl/lrGpMJL8Nkpx+7KP199dz7oA+Pmv/8Jnn3+Cp79/svGxlVl040IAj+G7AUzHKNVCM5rBH4SonjW2+ntVVVAxdVRMfelxxoA4SeAHE/TcMern1a3ev8yi2zsggHDt1r+tTY57Phhj0Fc4wKYoCmAaOqIoryTWO9t1BMssunEvgKAfoPH+/QLMXXaxyeGtBwArQ8C2xEkKp2lBUbevBZRVdON+RtC6DrCLTY66HghRQUg5pyNOUzgtG4E/QZJQroabuXaAcBQho9laVcBdbHJ468Ew9DVeuR1JQqFZGq5fuQCAX3zQhF2tlPZ5j3E3THItgGDDDGBbmxxej6Fr5XUykySFXZ+LWDeOc9ofCpNchwDfDaCoCqxGua0lGce4eK8F09BB1P2ekjhJwRhb+g5aSX2NVTwUerh2AL8fwt6x87SKZJLCNk08vZjPKsoyhjSlSChFktL8/vSWbRjA42n10KrnAtAMcrRJJQ+FSa4FELhB6aOAg6sRLm9cOHYFtmVA0wh0jUAjBBVDh/NANfCuKBKa3z5EkqRQVbWYMHIs+59xN0xyLQDfDfHkd+elfsaw6xWtOozie88ripILYiqM2X3HNqEsNGXGgPQBx6B02f51na8xgZ3mBJY5ITSjGcJRtPY8wG0Z3XowTP2ttszYtMybpPeeI0TNhUGWBWJVDMzertOq4Zury+Jvju0Ad9nqaA4xIXQ+BlBuCBh2PehbHj+lGSjNMEGy9LiiKNCm4ui5Y1jvLTgAZwLYqst7iELGpingtgyvVg8CbQpjDElK4QcTvLrswV4IAcYpCEAjBKZpwDSN0iaE+v0AmkFg2OUVaABg1PNLi8vzDCB3MVVV1p5Icih2mBVcrpJ9N4Sz5eDJuoz7ARhjpY4BAIDdzB1AN/lq/eB5LOAQKeDodgyUPAikV3SQqcPwFv/BswC8nl/+NLCuD1VVoJVUBs5LwPx2AMGrAOIwQRrT8jOAsgeBUgprYfm6weG8QP4kOS0BAyi/BtD1EEUxvnvxBkZFh2Fo0NQ8rzd0DYau7dRBjON0KQMgJQ44bQuXAggG+VKwiZfXGmolTan+7PNPMLwdY3jrYXTr4frHPjw3wHjogU5Lu6qqwDDn4jA0An0qjsfmD6QpRZZlxRgAOA0B/B0RgIwyGLaOL/7+dfGYVa/MF2S250u6F0/wpmgGQeeDJjof5GsOfvz+GlmWFzkmfoxwFCEYhvnyr2F+3x3ERemYaASmqecVwKlrzMRxbxBIJ0vTxXmBSwE8/fgCTz++QBrTfM1df2Ep9+shXv/3EnS6KJNoKuxiff90p5CWBafjbDSRlNKsuPgAYDoGTMe4tx6QZQy+GyIcRwiHIYJhhGgUwXX9wjUw3b8AilIIQOcw/oNXAczQ3rbOnwHhOJqv8+/n4njz/BrReFKUKg1bX9j8Yb7W325Z91sjA2oNC3GcIokpMpo9eEzKI6uI4zDB7Q89vPziFc5/3QFjrBjK5tH+wbsA3oqSW6tVrwB3FmVmNCsEMROI1w1w/X0X6WS6skfNW+aya9iotixUnuTDv1nGkMTp9IciifMFIWlCwbKHa+GGpedzCzUVv/30o6XRQimAA6ESFbVzB7Xz+x3HiR8vrfH3+wG6P/Tx01dhcVGJTpY2f3BaNuy2hc55DUQnYAygKZ0LI5mLJE0owtEEprM8VAwpAD6YxfXWh8sLQFjGEAwj+P1gYeuYEO7Pg2LDqdnf2wv9jNn99lkNiqqAZQzXX13CetZG67y25CAaZ/MAZgglgLehqEpxUR/ccKrn5+FkEMLr59vVvXl+XewOAiDfGaRpwbvx8fTjCzQ5XQ5+FymAFRCDoHFRR+Oh3UFG0XxfoUEEr+tDt/TpzmXvBlIAOzDriD60O8i7ApdjAZLDIQUgOFIAgiMFIDhSAIIjBSA4UgCCIwUgOFIAgiMFIDhSAIIjBSA4UgCCIwUgOFIAgiMFIDhSAIIjBSA4UgCCIwUgOFIAgiMFIDhSAIIjBSA4UgCCIwUgOFIAgiMFIDhSAIIjBSA4UgCCIwUgOFIAgiMFIDhSAIIjBSA4UgCCIwUgOFIAgiMFIDhSAIIjBSA4/wfvTwRdtCqsxQAAAABJRU5ErkJggg==",
  generic: "data:image/png;base64,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"
};
var BUILDING_KEY = [
  { key: "castle", label: "Castle", note: "walled bailey, towers, central keep", anchor: "castle" },
  { key: "cathedral", label: "Cathedral / Temple", note: "cruciform: nave + transept + apse", anchor: "cathedral" },
  { key: "market", label: "Market", note: "open paved plaza with stalls", anchor: "market" },
  { key: "barracks", label: "Barracks", note: "hall(s) around a drill yard", anchor: "barracks" },
  { key: "tower", label: "Tower", note: "isolated round tower with a lane to the road", anchor: "tower" },
  { key: "dock", label: "Dock", note: "quay, jetties, warehouses at the water", anchor: "dock" },
  { key: "mill", label: "Mill", note: "building with a round waterwheel", anchor: "mill" },
  { key: "inn", label: "Inn", note: "building with a small sign-post", anchor: "inn" },
  { key: "stable", label: "Stable", note: "barn inside a paddock fence", anchor: "stable" },
  { key: "generic", label: "Outbuilding", note: "plain two-tone-roof building", anchor: "generic" },
  { key: "house", label: "House / city block", note: "ordinary houses \u2014 where sampled pins land", anchor: "" }
];

// src/main.ts
var VALID_TERRAINS = ["inland", "coastal", "river", "lake", "mountain"];
// Bundled place-note templates (the "portrait edition") — seeded into
// the template folder by the "Create place templates" settings button.
// Canonical copies live in the Randomness repo (community-generators/
// fantasy-hub/townforge-templates); refresh here at release time.
var TF_ICON_LIBRARY = [{"key":"castle-flag","pathOrDataUrl":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20613%20613%22%20fill%3D%22%23c20000%22%3E%3Cpath%20d%3D%22M489.479%2C13.644v80.978h-56.544V13.644h-92.844v80.978h-55.847V13.644H191.4v80.978h-55.847V13.644H42.709l-0.006-0.003%0A%09v135.428l79.582%2C75.393v220.595c42.801%2C55.699%2C104.576%2C106.826%2C189.182%2C155.674c86.493-49.938%2C148.648-103.361%2C191.275-159.86%0A%09V224.465l79.582-75.393V13.644H489.479z%20M312.86%2C327.482H177.432V197.238l-55.847-52.358H312.86V327.482z%20M447.592%2C417.136%0A%09c-29.824%2C39.564-73.923%2C77.347-134.032%2C112.39V328.88h134.032L447.592%2C417.136L447.592%2C417.136z%22%2F%3E%3C%2Fsvg%3E","size":24,"anchorX":12,"anchorY":12,"defaultLink":"","inCollections":true},{"key":"place-of-worship","pathOrDataUrl":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20640%20512%22%20fill%3D%22%23b30000%22%3E%3C!--!%20Font%20Awesome%20Free%206.4.0%20by%20%40fontawesome%20-%20https%3A%2F%2Ffontawesome.com%20License%20-%20https%3A%2F%2Ffontawesome.com%2Flicense%2Ffree%20(Icons%3A%20CC%20BY%204.0%2C%20Fonts%3A%20SIL%20OFL%201.1%2C%20Code%3A%20MIT%20License)%20Copyright%202023%20Fonticons%2C%20Inc.%20--%3E%3Cpath%20d%3D%22M344%2024c0-13.3-10.7-24-24-24s-24%2010.7-24%2024V48H264c-13.3%200-24%2010.7-24%2024s10.7%2024%2024%2024h32v46.4L183.3%20210c-14.5%208.7-23.3%2024.3-23.3%2041.2V512h96V416c0-35.3%2028.7-64%2064-64s64%2028.7%2064%2064v96h96V251.2c0-16.9-8.8-32.5-23.3-41.2L344%20142.4V96h32c13.3%200%2024-10.7%2024-24s-10.7-24-24-24H344V24zM24.9%20330.3C9.5%20338.8%200%20354.9%200%20372.4V464c0%2026.5%2021.5%2048%2048%2048h80V273.6L24.9%20330.3zM592%20512c26.5%200%2048-21.5%2048-48V372.4c0-17.5-9.5-33.6-24.9-42.1L512%20273.6V512h80z%22%2F%3E%3C%2Fsvg%3E","size":24,"anchorX":12,"anchorY":12,"defaultLink":"","inCollections":true},{"key":"scale-balanced","pathOrDataUrl":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20640%20512%22%20fill%3D%22%23a30000%22%3E%3Cpath%20d%3D%22M384%2032H512c17.7%200%2032%2014.3%2032%2032s-14.3%2032-32%2032H398.4c-5.2%2025.8-22.9%2047.1-46.4%2057.3V448H512c17.7%200%2032%2014.3%2032%2032s-14.3%2032-32%2032H320%20128c-17.7%200-32-14.3-32-32s14.3-32%2032-32H288V153.3c-23.5-10.3-41.2-31.6-46.4-57.3H128c-17.7%200-32-14.3-32-32s14.3-32%2032-32H256c14.6-19.4%2037.8-32%2064-32s49.4%2012.6%2064%2032zm55.6%20288H584.4L512%20195.8%20439.6%20320zM512%20416c-62.9%200-115.2-34-126-78.9c-2.6-11%201-22.3%206.7-32.1l95.2-163.2c5-8.6%2014.2-13.8%2024.1-13.8s19.1%205.3%2024.1%2013.8l95.2%20163.2c5.7%209.8%209.3%2021.1%206.7%2032.1C627.2%20382%20574.9%20416%20512%20416zM126.8%20195.8L54.4%20320H199.3L126.8%20195.8zM.9%20337.1c-2.6-11%201-22.3%206.7-32.1l95.2-163.2c5-8.6%2014.2-13.8%2024.1-13.8s19.1%205.3%2024.1%2013.8l95.2%20163.2c5.7%209.8%209.3%2021.1%206.7%2032.1C242%20382%20189.7%20416%20126.8%20416S11.7%20382%20.9%20337.1z%22%2F%3E%3C%2Fsvg%3E","size":24,"anchorX":12,"anchorY":12,"defaultLink":"","inCollections":true},{"key":"shield","pathOrDataUrl":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20512%20512%22%20fill%3D%22%23b30000%22%3E%3C!--!%20Font%20Awesome%20Free%206.4.0%20by%20%40fontawesome%20-%20https%3A%2F%2Ffontawesome.com%20License%20-%20https%3A%2F%2Ffontawesome.com%2Flicense%2Ffree%20(Icons%3A%20CC%20BY%204.0%2C%20Fonts%3A%20SIL%20OFL%201.1%2C%20Code%3A%20MIT%20License)%20Copyright%202023%20Fonticons%2C%20Inc.%20--%3E%3Cpath%20d%3D%22M256%200c4.6%200%209.2%201%2013.4%202.9L457.7%2082.8c22%209.3%2038.4%2031%2038.3%2057.2c-.5%2099.2-41.3%20280.7-213.6%20363.2c-16.7%208-36.1%208-52.8%200C57.3%20420.7%2016.5%20239.2%2016%20140c-.1-26.2%2016.3-47.9%2038.3-57.2L242.7%202.9C246.8%201%20251.4%200%20256%200zm0%2066.8V444.8C394%20378%20431.1%20230.1%20432%20141.4L256%2066.8l0%200z%22%2F%3E%3C%2Fsvg%3E","size":24,"anchorX":12,"anchorY":12,"defaultLink":"","inCollections":true},{"key":"anchor","pathOrDataUrl":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20576%20512%22%20fill%3D%22%23010057%22%3E%3C!--!%20Font%20Awesome%20Free%206.4.0%20by%20%40fontawesome%20-%20https%3A%2F%2Ffontawesome.com%20License%20-%20https%3A%2F%2Ffontawesome.com%2Flicense%2Ffree%20(Icons%3A%20CC%20BY%204.0%2C%20Fonts%3A%20SIL%20OFL%201.1%2C%20Code%3A%20MIT%20License)%20Copyright%202023%20Fonticons%2C%20Inc.%20--%3E%3Cpath%20d%3D%22M320%2096a32%2032%200%201%201%20-64%200%2032%2032%200%201%201%2064%200zm21.1%2080C367%20158.8%20384%20129.4%20384%2096c0-53-43-96-96-96s-96%2043-96%2096c0%2033.4%2017%2062.8%2042.9%2080H224c-17.7%200-32%2014.3-32%2032s14.3%2032%2032%2032h32V448H208c-53%200-96-43-96-96v-6.1l7%207c9.4%209.4%2024.6%209.4%2033.9%200s9.4-24.6%200-33.9L97%20263c-9.4-9.4-24.6-9.4-33.9%200L7%20319c-9.4%209.4-9.4%2024.6%200%2033.9s24.6%209.4%2033.9%200l7-7V352c0%2088.4%2071.6%20160%20160%20160h80%2080c88.4%200%20160-71.6%20160-160v-6.1l7%207c9.4%209.4%2024.6%209.4%2033.9%200s9.4-24.6%200-33.9l-56-56c-9.4-9.4-24.6-9.4-33.9%200l-56%2056c-9.4%209.4-9.4%2024.6%200%2033.9s24.6%209.4%2033.9%200l7-7V352c0%2053-43%2096-96%2096H320V240h32c17.7%200%2032-14.3%2032-32s-14.3-32-32-32H341.1z%22%2F%3E%3C%2Fsvg%3E","size":24,"anchorX":12,"anchorY":12,"defaultLink":"","inCollections":true},{"key":"building-wheat","pathOrDataUrl":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20640%20512%22%20fill%3D%22%23cc3300%22%3E%3C!--!%20Font%20Awesome%20Free%206.4.0%20by%20%40fontawesome%20-%20https%3A%2F%2Ffontawesome.com%20License%20-%20https%3A%2F%2Ffontawesome.com%2Flicense%2Ffree%20(Icons%3A%20CC%20BY%204.0%2C%20Fonts%3A%20SIL%20OFL%201.1%2C%20Code%3A%20MIT%20License)%20Copyright%202023%20Fonticons%2C%20Inc.%20--%3E%3Cpath%20d%3D%22M0%2048C0%2021.5%2021.5%200%2048%200H336c26.5%200%2048%2021.5%2048%2048V464c0%2026.5-21.5%2048-48%2048H240V432c0-26.5-21.5-48-48-48s-48%2021.5-48%2048v80H48c-26.5%200-48-21.5-48-48V48zM80%20224c-8.8%200-16%207.2-16%2016v32c0%208.8%207.2%2016%2016%2016h32c8.8%200%2016-7.2%2016-16V240c0-8.8-7.2-16-16-16H80zm80%2016v32c0%208.8%207.2%2016%2016%2016h32c8.8%200%2016-7.2%2016-16V240c0-8.8-7.2-16-16-16H176c-8.8%200-16%207.2-16%2016zm112-16c-8.8%200-16%207.2-16%2016v32c0%208.8%207.2%2016%2016%2016h32c8.8%200%2016-7.2%2016-16V240c0-8.8-7.2-16-16-16H272zM64%20112v32c0%208.8%207.2%2016%2016%2016h32c8.8%200%2016-7.2%2016-16V112c0-8.8-7.2-16-16-16H80c-8.8%200-16%207.2-16%2016zM176%2096c-8.8%200-16%207.2-16%2016v32c0%208.8%207.2%2016%2016%2016h32c8.8%200%2016-7.2%2016-16V112c0-8.8-7.2-16-16-16H176zm80%2016v32c0%208.8%207.2%2016%2016%2016h32c8.8%200%2016-7.2%2016-16V112c0-8.8-7.2-16-16-16H272c-8.8%200-16%207.2-16%2016zm384%2080v16c0%2044.2-35.8%2080-80%2080H544V272c0-44.2%2035.8-80%2080-80h16zm0%20128c0%2044.2-35.8%2080-80%2080H544V384c0-44.2%2035.8-80%2080-80h16v16zm0%20112c0%2044.2-35.8%2080-80%2080H544V496c0-44.2%2035.8-80%2080-80h16v16zM512%20496v16H496c-44.2%200-80-35.8-80-80V416h16c44.2%200%2080%2035.8%2080%2080zm0-96H496c-44.2%200-80-35.8-80-80V304h16c44.2%200%2080%2035.8%2080%2080v16zm0-128v16H496c-44.2%200-80-35.8-80-80V192h16c44.2%200%2080%2035.8%2080%2080zM528%2032c13.3%200%2024%2010.7%2024%2024V160c0%2013.3-10.7%2024-24%2024s-24-10.7-24-24V56c0-13.3%2010.7-24%2024-24zm96%2064v32c0%2013.3-10.7%2024-24%2024s-24-10.7-24-24V96c0-13.3%2010.7-24%2024-24s24%2010.7%2024%2024zM456%2072c13.3%200%2024%2010.7%2024%2024v32c0%2013.3-10.7%2024-24%2024s-24-10.7-24-24V96c0-13.3%2010.7-24%2024-24z%22%2F%3E%3C%2Fsvg%3E","size":24,"anchorX":12,"anchorY":12,"defaultLink":"","inCollections":true},{"key":"horseshoe","pathOrDataUrl":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20576%20512%22%20fill%3D%22%23c70000%22%3E%3C!--!%20Font%20Awesome%20Free%206.4.0%20by%20%40fontawesome%20-%20https%3A%2F%2Ffontawesome.com%20License%20-%20https%3A%2F%2Ffontawesome.com%2Flicense%2Ffree%20(Icons%3A%20CC%20BY%204.0%2C%20Fonts%3A%20SIL%20OFL%201.1%2C%20Code%3A%20MIT%20License)%20Copyright%202023%20Fonticons%2C%20Inc.%20--%3E%3Cpath%20d%3D%22M448%20238.1V160h16l9.8%2019.6c12.5%2025.1%2042.2%2036.4%2068.3%2026c20.5-8.2%2033.9-28%2033.9-50.1V80c0-19.1-8.4-36.3-21.7-48H560c8.8%200%2016-7.2%2016-16s-7.2-16-16-16H480%20448C377.3%200%20320%2057.3%20320%20128H224%20203.2%20148.8c-30.7%200-57.6%2016.3-72.5%2040.8C33.2%20174.5%200%20211.4%200%20256v56c0%2013.3%2010.7%2024%2024%2024s24-10.7%2024-24V256c0-13.4%206.6-25.2%2016.7-32.5c1.6%2013%206.3%2025.4%2013.6%2036.4l28.2%2042.4c8.3%2012.4%206.4%2028.7-1.2%2041.6c-16.5%2028-20.6%2062.2-10%2093.9l17.5%2052.4c4.4%2013.1%2016.6%2021.9%2030.4%2021.9h33.7c21.8%200%2037.3-21.4%2030.4-42.1l-20.8-62.5c-2.1-6.4-.5-13.4%204.3-18.2l12.7-12.7c13.2-13.2%2020.6-31.1%2020.6-49.7c0-2.3-.1-4.6-.3-6.9l84%2024c4.1%201.2%208.2%202.1%2012.3%202.8V480c0%2017.7%2014.3%2032%2032%2032h32c17.7%200%2032-14.3%2032-32V315.7c19.2-19.2%2031.5-45.7%2032-75.7h0v-1.9zM496%2064a16%2016%200%201%201%200%2032%2016%2016%200%201%201%200-32z%22%2F%3E%3C%2Fsvg%3E","size":24,"anchorX":12,"anchorY":12,"defaultLink":"","inCollections":true},{"key":"wheat-awn","pathOrDataUrl":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20512%20512%22%20fill%3D%22%23bd0000%22%3E%3Cpath%20d%3D%22M505%2041c9.4-9.4%209.4-24.6%200-33.9s-24.6-9.4-33.9%200L383%2095c-9.4%209.4-9.4%2024.6%200%2033.9s24.6%209.4%2033.9%200l88-88zM305.5%2027.3c-6.2-6.2-16.4-6.2-22.6%200L271.5%2038.6c-37.5%2037.5-37.5%2098.3%200%20135.8l10.4%2010.4-30.5%2030.5c-3.4-27.3-15.5-53.8-36.5-74.8l-11.3-11.3c-6.2-6.2-16.4-6.2-22.6%200l-11.3%2011.3c-37.5%2037.5-37.5%2098.3%200%20135.8l10.4%2010.4-30.5%2030.5c-3.4-27.3-15.5-53.8-36.5-74.8L101.8%20231c-6.2-6.2-16.4-6.2-22.6%200L67.9%20242.3c-37.5%2037.5-37.5%2098.3%200%20135.8l10.4%2010.4L9.4%20457.4c-12.5%2012.5-12.5%2032.8%200%2045.3s32.8%2012.5%2045.3%200l68.9-68.9%2012.2%2012.2c37.5%2037.5%2098.3%2037.5%20135.8%200l11.3-11.3c6.2-6.2%206.2-16.4%200-22.6l-11.3-11.3c-21.8-21.8-49.6-34.1-78.1-36.9l31.9-31.9%2012.2%2012.2c37.5%2037.5%2098.3%2037.5%20135.8%200l11.3-11.3c6.2-6.2%206.2-16.4%200-22.6l-11.3-11.3c-21.8-21.8-49.6-34.1-78.1-36.9l31.9-31.9%2012.2%2012.2c37.5%2037.5%2098.3%2037.5%20135.8%200L486.5%20231c6.2-6.2%206.2-16.4%200-22.6L475.2%20197c-5.2-5.2-10.6-9.8-16.4-13.9L505%20137c9.4-9.4%209.4-24.6%200-33.9s-24.6-9.4-33.9%200l-59.4%2059.4c-20.6-4.4-42-3.7-62.3%202.1c6.1-21.3%206.6-43.8%201.4-65.3L409%2041c9.4-9.4%209.4-24.6%200-33.9s-24.6-9.4-33.9%200L329.1%2052.9c-3.7-5-7.8-9.8-12.4-14.3L305.5%2027.3z%22%2F%3E%3C%2Fsvg%3E","size":24,"anchorX":12,"anchorY":12,"defaultLink":"","inCollections":true},{"key":"shop","pathOrDataUrl":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20576%20512%22%20fill%3D%22%232d2a2a%22%3E%3C!--!%20Font%20Awesome%20Free%206.4.0%20by%20%40fontawesome%20-%20https%3A%2F%2Ffontawesome.com%20License%20-%20https%3A%2F%2Ffontawesome.com%2Flicense%2Ffree%20(Icons%3A%20CC%20BY%204.0%2C%20Fonts%3A%20SIL%20OFL%201.1%2C%20Code%3A%20MIT%20License)%20Copyright%202023%20Fonticons%2C%20Inc.%20--%3E%3Cpath%20d%3D%22M0%2024C0%2010.7%2010.7%200%2024%200H69.5c22%200%2041.5%2012.8%2050.6%2032h411c26.3%200%2045.5%2025%2038.6%2050.4l-41%20152.3c-8.5%2031.4-37%2053.3-69.5%2053.3H170.7l5.4%2028.5c2.2%2011.3%2012.1%2019.5%2023.6%2019.5H488c13.3%200%2024%2010.7%2024%2024s-10.7%2024-24%2024H199.7c-34.6%200-64.3-24.6-70.7-58.5L77.4%2054.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7%2048%200%2037.3%200%2024zM128%20464a48%2048%200%201%201%2096%200%2048%2048%200%201%201%20-96%200zm336-48a48%2048%200%201%201%200%2096%2048%2048%200%201%201%200-96z%22%2F%3E%3C%2Fsvg%3E","size":24,"anchorX":12,"anchorY":12,"defaultLink":"","inCollections":true},{"key":"bed","pathOrDataUrl":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20version%3D%221.1%22%20id%3D%22Layer_1%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%22613px%22%20height%3D%22613px%22%20viewBox%3D%220%200%20613%20613%22%20enable-background%3D%22new%200%200%20613%20613%22%20xml%3Aspace%3D%22preserve%22%20fill%3D%22%23a8002a%22%3E%0A%3Cpath%20d%3D%22M153.535%2C507.493l-30.852%2C64.497h462.243l-35.994-64.497h-22.196c-20.753-115.089-36.26-252.254-25.888-334.041%20%20c27.165-2.534%2C46.906-26.333%2C45.299-61.198c-2.486-53.168-61.889-73.677-109.205-41.733c-20.196-27.505-57.877-34.71-79.494-11.236%20%20c-33.468-42.191-100.45-34.136-118.84%2C15.249c-38.668-8.564-67.764%2C9.796-68.254%2C45.748c-0.486%2C35.739%2C21.762%2C48.405%2C48.117%2C45.8%20%20c0.738%2C6.217%2C1.34%2C12.919%2C1.806%2C20.053c-48.382-1.062-95.694-9.65-142.317-23.09C45.187%2C263.067%2C30.824%2C365.168%2C34.443%2C469.3%20%20c50.855%2C22.155%2C104.923%2C21.697%2C158.957%2C21.484c-1.187%2C5.647-2.405%2C11.225-3.659%2C16.709H153.535z%20M77.152%2C439.02%20%20c-2.785-79.941%2C8.264-145.395%2C33.466-223.58l0.002%2C0.001c36.314%2C8.643%2C73.172%2C10.801%2C110.877%2C8.325%20%20c0.334%2C64.498-6.956%2C148.768-20.186%2C225.53C159.12%2C451.571%2C116.864%2C454.324%2C77.152%2C439.02z%22%2F%3E%0A%3C%2Fsvg%3E","size":24,"anchorX":12,"anchorY":12,"defaultLink":"","inCollections":true},{"key":"user-secret","pathOrDataUrl":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20448%20512%22%20fill%3D%22%230ba3b7%22%3E%3Cpath%20d%3D%22M224%2016c-6.7%200-10.8-2.8-15.5-6.1C201.9%205.4%20194%200%20176%200c-30.5%200-52%2043.7-66%2089.4C62.7%2098.1%2032%20112.2%2032%20128c0%2014.3%2025%2027.1%2064.6%2035.9c-.4%204-.6%208-.6%2012.1c0%2017%203.3%2033.2%209.3%2048H45.4C38%20224%2032%20230%2032%20237.4c0%201.7%20.3%203.4%201%205l38.8%2096.9C28.2%20371.8%200%20423.8%200%20482.3C0%20498.7%2013.3%20512%2029.7%20512H418.3c16.4%200%2029.7-13.3%2029.7-29.7c0-58.5-28.2-110.4-71.7-143L415%20242.4c.6-1.6%201-3.3%201-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8%209.3-31%209.3-48c0-4.1-.2-8.1-.6-12.1C391%20155.1%20416%20142.3%20416%20128c0-15.8-30.7-29.9-78-38.6C324%2043.7%20302.5%200%20272%200c-18%200-25.9%205.4-32.5%209.9c-4.8%203.3-8.8%206.1-15.5%206.1zm56%20208H267.6c-16.5%200-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5%200c-5.2%2015.6-19.9%2026.2-36.3%2026.2H168c-22.1%200-40-17.9-40-40V169.6c28.2%204.1%2061%206.4%2096%206.4s67.8-2.3%2096-6.4V184c0%2022.1-17.9%2040-40%2040zm-88%2096l16%2032L176%20480%20128%20288l64%2032zm128-32L272%20480%20240%20352l16-32%2064-32z%22%2F%3E%3C%2Fsvg%3E","size":24,"anchorX":12,"anchorY":12,"defaultLink":"","inCollections":true},{"key":"beer","pathOrDataUrl":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20version%3D%221.1%22%20id%3D%22Layer_1%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%22613px%22%20height%3D%22613px%22%20viewBox%3D%220%200%20613%20613%22%20enable-background%3D%22new%200%200%20613%20613%22%20xml%3Aspace%3D%22preserve%22%20fill%3D%22%2300b81f%22%3E%0A%3Cpath%20d%3D%22M153.535%2C507.493l-30.852%2C64.497h462.243l-35.994-64.497h-22.196c-20.753-115.089-36.26-252.254-25.888-334.041%20%20c27.165-2.534%2C46.906-26.333%2C45.299-61.198c-2.486-53.168-61.889-73.677-109.205-41.733c-20.196-27.505-57.877-34.71-79.494-11.236%20%20c-33.468-42.191-100.45-34.136-118.84%2C15.249c-38.668-8.564-67.764%2C9.796-68.254%2C45.748c-0.486%2C35.739%2C21.762%2C48.405%2C48.117%2C45.8%20%20c0.738%2C6.217%2C1.34%2C12.919%2C1.806%2C20.053c-48.382-1.062-95.694-9.65-142.317-23.09C45.187%2C263.067%2C30.824%2C365.168%2C34.443%2C469.3%20%20c50.855%2C22.155%2C104.923%2C21.697%2C158.957%2C21.484c-1.187%2C5.647-2.405%2C11.225-3.659%2C16.709H153.535z%20M77.152%2C439.02%20%20c-2.785-79.941%2C8.264-145.395%2C33.466-223.58l0.002%2C0.001c36.314%2C8.643%2C73.172%2C10.801%2C110.877%2C8.325%20%20c0.334%2C64.498-6.956%2C148.768-20.186%2C225.53C159.12%2C451.571%2C116.864%2C454.324%2C77.152%2C439.02z%22%2F%3E%0A%3C%2Fsvg%3E","size":24,"anchorX":12,"anchorY":12,"defaultLink":"","inCollections":true},{"key":"cross","pathOrDataUrl":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20384%20512%22%20fill%3D%22%2333322e%22%3E%3C!--!%20Font%20Awesome%20Free%206.4.0%20by%20%40fontawesome%20-%20https%3A%2F%2Ffontawesome.com%20License%20-%20https%3A%2F%2Ffontawesome.com%2Flicense%2Ffree%20(Icons%3A%20CC%20BY%204.0%2C%20Fonts%3A%20SIL%20OFL%201.1%2C%20Code%3A%20MIT%20License)%20Copyright%202023%20Fonticons%2C%20Inc.%20--%3E%3Cpath%20d%3D%22M176%200c-26.5%200-48%2021.5-48%2048v80H48c-26.5%200-48%2021.5-48%2048v32c0%2026.5%2021.5%2048%2048%2048h80V464c0%2026.5%2021.5%2048%2048%2048h32c26.5%200%2048-21.5%2048-48V256h80c26.5%200%2048-21.5%2048-48V176c0-26.5-21.5-48-48-48H256V48c0-26.5-21.5-48-48-48H176z%22%2F%3E%3C%2Fsvg%3E","size":24,"anchorX":12,"anchorY":12,"defaultLink":"","inCollections":true},{"key":"house-chimney-user","pathOrDataUrl":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20576%20512%22%20fill%3D%22%230a9900%22%3E%3C!--!%20Font%20Awesome%20Free%206.4.0%20by%20%40fontawesome%20-%20https%3A%2F%2Ffontawesome.com%20License%20-%20https%3A%2F%2Ffontawesome.com%2Flicense%2Ffree%20(Icons%3A%20CC%20BY%204.0%2C%20Fonts%3A%20SIL%20OFL%201.1%2C%20Code%3A%20MIT%20License)%20Copyright%202023%20Fonticons%2C%20Inc.%20--%3E%3Cpath%20d%3D%22M543.8%20287.6c17%200%2032-14%2032-32.1c1-9-3-17-11-24L512%20185V64c0-17.7-14.3-32-32-32H448c-17.7%200-32%2014.3-32%2032v36.7L309.5%207c-6-5-14-7-21-7s-15%201-22%208L10%20231.5c-7%207-10%2015-10%2024c0%2018%2014%2032.1%2032%2032.1h32V448c0%2035.3%2028.7%2064%2064%2064H448.5c35.5%200%2064.2-28.8%2064-64.3l-.7-160.2h32zM288%20160a64%2064%200%201%201%200%20128%2064%2064%200%201%201%200-128zM176%20400c0-44.2%2035.8-80%2080-80h64c44.2%200%2080%2035.8%2080%2080c0%208.8-7.2%2016-16%2016H192c-8.8%200-16-7.2-16-16z%22%2F%3E%3C%2Fsvg%3E","size":24,"anchorX":12,"anchorY":12,"defaultLink":"","inCollections":true},{"key":"hat-wizard","pathOrDataUrl":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20512%20512%22%20fill%3D%22%233642ec%22%3E%3C!--!%20Font%20Awesome%20Free%206.4.0%20by%20%40fontawesome%20-%20https%3A%2F%2Ffontawesome.com%20License%20-%20https%3A%2F%2Ffontawesome.com%2Flicense%2Ffree%20(Icons%3A%20CC%20BY%204.0%2C%20Fonts%3A%20SIL%20OFL%201.1%2C%20Code%3A%20MIT%20License)%20Copyright%202023%20Fonticons%2C%20Inc.%20--%3E%3Cpath%20d%3D%22M64%20416L168.6%20180.7c15.3-34.4%2040.3-63.5%2072-83.7l146.9-94c3-1.9%206.5-2.9%2010-2.9C407.7%200%20416%208.3%20416%2018.6v1.6c0%202.6-.5%205.1-1.4%207.5L354.8%20176.9c-1.9%204.7-2.8%209.7-2.8%2014.7c0%205.5%201.2%2011%203.4%2016.1L448%20416H240.9l11.8-35.4%2040.4-13.5c6.5-2.2%2010.9-8.3%2010.9-15.2s-4.4-13-10.9-15.2l-40.4-13.5-13.5-40.4C237%20276.4%20230.9%20272%20224%20272s-13%204.4-15.2%2010.9l-13.5%2040.4-40.4%2013.5C148.4%20339%20144%20345.1%20144%20352s4.4%2013%2010.9%2015.2l40.4%2013.5L207.1%20416H64zM279.6%20141.5c-1.1-3.3-4.1-5.5-7.6-5.5s-6.5%202.2-7.6%205.5l-6.7%2020.2-20.2%206.7c-3.3%201.1-5.5%204.1-5.5%207.6s2.2%206.5%205.5%207.6l20.2%206.7%206.7%2020.2c1.1%203.3%204.1%205.5%207.6%205.5s6.5-2.2%207.6-5.5l6.7-20.2%2020.2-6.7c3.3-1.1%205.5-4.1%205.5-7.6s-2.2-6.5-5.5-7.6l-20.2-6.7-6.7-20.2zM32%20448H480c17.7%200%2032%2014.3%2032%2032s-14.3%2032-32%2032H32c-17.7%200-32-14.3-32-32s14.3-32%2032-32z%22%2F%3E%3C%2Fsvg%3E","size":24,"anchorX":12,"anchorY":12,"defaultLink":"","inCollections":true},{"key":"castle","pathOrDataUrl":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20613%20613%22%20fill%3D%22%23c20000%22%3E%3Cpath%20d%3D%22M489.479%2C13.644v80.978h-56.544V13.644h-92.844v80.978h-55.847V13.644H191.4v80.978h-55.847V13.644H42.709l-0.006-0.003%0A%09v135.428l79.582%2C75.393v220.595c42.801%2C55.699%2C104.576%2C106.826%2C189.182%2C155.674c86.493-49.938%2C148.648-103.361%2C191.275-159.86%0A%09V224.465l79.582-75.393V13.644H489.479z%20M312.86%2C327.482H177.432V197.238l-55.847-52.358H312.86V327.482z%20M447.592%2C417.136%0A%09c-29.824%2C39.564-73.923%2C77.347-134.032%2C112.39V328.88h134.032L447.592%2C417.136L447.592%2C417.136z%22%2F%3E%3C%2Fsvg%3E","size":24,"anchorX":12,"anchorY":12,"defaultLink":"","inCollections":true},{"key":"circle_black_city","pathOrDataUrl":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20640%20512%22%20fill%3D%22%23a30000%22%3E%3Cpath%20d%3D%22M384%2032H512c17.7%200%2032%2014.3%2032%2032s-14.3%2032-32%2032H398.4c-5.2%2025.8-22.9%2047.1-46.4%2057.3V448H512c17.7%200%2032%2014.3%2032%2032s-14.3%2032-32%2032H320%20128c-17.7%200-32-14.3-32-32s14.3-32%2032-32H288V153.3c-23.5-10.3-41.2-31.6-46.4-57.3H128c-17.7%200-32-14.3-32-32s14.3-32%2032-32H256c14.6-19.4%2037.8-32%2064-32s49.4%2012.6%2064%2032zm55.6%20288H584.4L512%20195.8%20439.6%20320zM512%20416c-62.9%200-115.2-34-126-78.9c-2.6-11%201-22.3%206.7-32.1l95.2-163.2c5-8.6%2014.2-13.8%2024.1-13.8s19.1%205.3%2024.1%2013.8l95.2%20163.2c5.7%209.8%209.3%2021.1%206.7%2032.1C627.2%20382%20574.9%20416%20512%20416zM126.8%20195.8L54.4%20320H199.3L126.8%20195.8zM.9%20337.1c-2.6-11%201-22.3%206.7-32.1l95.2-163.2c5-8.6%2014.2-13.8%2024.1-13.8s19.1%205.3%2024.1%2013.8l95.2%20163.2c5.7%209.8%209.3%2021.1%206.7%2032.1C242%20382%20189.7%20416%20126.8%20416S11.7%20382%20.9%20337.1z%22%2F%3E%3C%2Fsvg%3E","size":24,"anchorX":12,"anchorY":12,"defaultLink":"","inCollections":true},{"key":"wheat","pathOrDataUrl":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20512%20512%22%20fill%3D%22%23bd0000%22%3E%3Cpath%20d%3D%22M505%2041c9.4-9.4%209.4-24.6%200-33.9s-24.6-9.4-33.9%200L383%2095c-9.4%209.4-9.4%2024.6%200%2033.9s24.6%209.4%2033.9%200l88-88zM305.5%2027.3c-6.2-6.2-16.4-6.2-22.6%200L271.5%2038.6c-37.5%2037.5-37.5%2098.3%200%20135.8l10.4%2010.4-30.5%2030.5c-3.4-27.3-15.5-53.8-36.5-74.8l-11.3-11.3c-6.2-6.2-16.4-6.2-22.6%200l-11.3%2011.3c-37.5%2037.5-37.5%2098.3%200%20135.8l10.4%2010.4-30.5%2030.5c-3.4-27.3-15.5-53.8-36.5-74.8L101.8%20231c-6.2-6.2-16.4-6.2-22.6%200L67.9%20242.3c-37.5%2037.5-37.5%2098.3%200%20135.8l10.4%2010.4L9.4%20457.4c-12.5%2012.5-12.5%2032.8%200%2045.3s32.8%2012.5%2045.3%200l68.9-68.9%2012.2%2012.2c37.5%2037.5%2098.3%2037.5%20135.8%200l11.3-11.3c6.2-6.2%206.2-16.4%200-22.6l-11.3-11.3c-21.8-21.8-49.6-34.1-78.1-36.9l31.9-31.9%2012.2%2012.2c37.5%2037.5%2098.3%2037.5%20135.8%200l11.3-11.3c6.2-6.2%206.2-16.4%200-22.6l-11.3-11.3c-21.8-21.8-49.6-34.1-78.1-36.9l31.9-31.9%2012.2%2012.2c37.5%2037.5%2098.3%2037.5%20135.8%200L486.5%20231c6.2-6.2%206.2-16.4%200-22.6L475.2%20197c-5.2-5.2-10.6-9.8-16.4-13.9L505%20137c9.4-9.4%209.4-24.6%200-33.9s-24.6-9.4-33.9%200l-59.4%2059.4c-20.6-4.4-42-3.7-62.3%202.1c6.1-21.3%206.6-43.8%201.4-65.3L409%2041c9.4-9.4%209.4-24.6%200-33.9s-24.6-9.4-33.9%200L329.1%2052.9c-3.7-5-7.8-9.8-12.4-14.3L305.5%2027.3z%22%2F%3E%3C%2Fsvg%3E","size":24,"anchorX":12,"anchorY":12,"defaultLink":"","inCollections":true},{"key":"beer-stein","pathOrDataUrl":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20version%3D%221.1%22%20id%3D%22Layer_1%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%22613px%22%20height%3D%22613px%22%20viewBox%3D%220%200%20613%20613%22%20enable-background%3D%22new%200%200%20613%20613%22%20xml%3Aspace%3D%22preserve%22%20fill%3D%22%2300b81f%22%3E%0A%3Cpath%20d%3D%22M153.535%2C507.493l-30.852%2C64.497h462.243l-35.994-64.497h-22.196c-20.753-115.089-36.26-252.254-25.888-334.041%20%20c27.165-2.534%2C46.906-26.333%2C45.299-61.198c-2.486-53.168-61.889-73.677-109.205-41.733c-20.196-27.505-57.877-34.71-79.494-11.236%20%20c-33.468-42.191-100.45-34.136-118.84%2C15.249c-38.668-8.564-67.764%2C9.796-68.254%2C45.748c-0.486%2C35.739%2C21.762%2C48.405%2C48.117%2C45.8%20%20c0.738%2C6.217%2C1.34%2C12.919%2C1.806%2C20.053c-48.382-1.062-95.694-9.65-142.317-23.09C45.187%2C263.067%2C30.824%2C365.168%2C34.443%2C469.3%20%20c50.855%2C22.155%2C104.923%2C21.697%2C158.957%2C21.484c-1.187%2C5.647-2.405%2C11.225-3.659%2C16.709H153.535z%20M77.152%2C439.02%20%20c-2.785-79.941%2C8.264-145.395%2C33.466-223.58l0.002%2C0.001c36.314%2C8.643%2C73.172%2C10.801%2C110.877%2C8.325%20%20c0.334%2C64.498-6.956%2C148.768-20.186%2C225.53C159.12%2C451.571%2C116.864%2C454.324%2C77.152%2C439.02z%22%2F%3E%0A%3C%2Fsvg%3E","size":24,"anchorX":12,"anchorY":12,"defaultLink":"","inCollections":true}];
var TOWN_FORGE_TEMPLATES = {
  "Barracks.md": "---\ntype: barracks\nsubtype: \"{{subtype}}\"\nsize: \"{{size}}\"\ntown: \"{{town}}\"\n---\n# {{name}}\n\n> [!info] {{type}} in {{town}}\n\nA {{type}} guarding {{town}}.\n\n<%*\nconst api = app.plugins.plugins[\"randomness\"].api;\nconst P = api.portraits;\nconst has = P && (await P.available());\nconst raceWord = (p) => ({ halfelf: \"half-elf\", halforc: \"half-orc\" }[p.race] ?? p.race ?? \"\");\nconst descOf = (p) => p.age === \"old\" ? \"silver-haired\"\n  : (p.recipe.parts.scars ?? -1) >= 0 ? \"scarred\"\n  : (p.recipe.parts.facial_hair ?? -1) >= 0 ? \"bearded\"\n  : p.age === \"young\" ? \"fresh-faced\" : \"\";\nconst infobox = (p, heading, lastRow) => [\n  \"> [!infobox]\", `> # ${p.name}`,\n  \"> \" + P.inlineSnippet(p.recipe, 160),\n  `> ###### ${heading}`, \"> | |  |\", \"> | --- | --- |\",\n  `> | Race | ${raceWord(p)} |`, `> | Gender | ${p.gender} |`,\n  `> | Age | ${p.age} |`, `> | ${lastRow} | {{name}} |`, \"\", \"\",\n].join(\"\\n\");\nconst face = async (p, role) => {\n  const beat = (await api.rollUnscoped(\"Personality\")).result;\n  return `- ${P.inlineSnippet(p.recipe, 96)} **${p.name}** \u2014 ${role}, ${beat}\\n`;\n};\n\n// The commander \u2014 same person in the infobox and the rolled text.\nlet main = null;\nif (has) { main = await P.roll(); tR += infobox(main, \"Commander\", \"Commands\"); }\n\nconst result = await api.rollUnscoped(\"TF-Barracks\", { promptValues: {\n  town: \"{{town}}\", shopType: \"{{type}}\", shopName: \"{{name}}\", size: \"{{size}}\",\n  keeperName: main?.name ?? \"\", keeperRace: main ? raceWord(main) : \"\",\n  keeperGender: main?.gender ?? \"\", keeperAge: main?.age ?? \"\",\n  keeperDesc: main ? descOf(main) : \"\"\n}});\ntR += result.result;\n\n// A couple of faces from the roster.\nif (has) {\n  tR += \"\\n\\n## On the roster\\n\\n\";\n  tR += await face(await P.roll(), \"Sergeant\");\n  tR += await face(await P.roll(), \"Guard\");\n}\n%>\n",
  "Castle.md": "---\ntype: castle\nsubtype: \"{{subtype}}\"\nsize: \"{{size}}\"\ntown: \"{{town}}\"\nheraldry-seed: <% Date.now().toString(36) + Math.random().toString(36).slice(2, 6) %>\n---\n\n# {{name}}\n> [!infobox]+\n> # {{name}}\n> `heraldry:|120`\n> ###### Stats\n> | Type | Stat |\n> | --- | --- |\n\n> [!info] {{type}} in {{town}}\n\nA {{type}} overlooking {{town}}.\n\n<%*\nconst api = app.plugins.plugins[\"randomness\"].api;\nconst P = api.portraits;\nconst has = P && (await P.available());\nconst raceWord = (p) => ({ halfelf: \"half-elf\", halforc: \"half-orc\" }[p.race] ?? p.race ?? \"\");\nconst descOf = (p) => p.age === \"old\" ? \"silver-haired\"\n  : (p.recipe.parts.scars ?? -1) >= 0 ? \"scarred\"\n  : (p.recipe.parts.facial_hair ?? -1) >= 0 ? \"bearded\"\n  : p.age === \"young\" ? \"fresh-faced\" : \"\";\nconst infobox = (p, heading, lastRowName, lastRowVal) => [\n  \"> [!infobox]\", `> # ${p.name}`,\n  \"> \" + P.inlineSnippet(p.recipe, 160),\n  `> ###### ${heading}`, \"> | |  |\", \"> | --- | --- |\",\n  `> | Race | ${raceWord(p)} |`, `> | Gender | ${p.gender} |`,\n  `> | Age | ${p.age} |`, `> | ${lastRowName} | ${lastRowVal} |`, \"\", \"\",\n].join(\"\\n\");\nconst face = async (p, role) => {\n  const beat = (await api.rollUnscoped(\"Personality\")).result;\n  return `- ${P.inlineSnippet(p.recipe, 96)} **${p.name}** \u2014 ${role}, ${beat}\\n`;\n};\n\n// The ruler \u2014 same person in the infobox and the rolled text.\nlet main = null;\nif (has) { main = await P.roll(); tR += infobox(main, \"Ruler\", \"Holds\", \"{{name}}\"); }\n\nconst result = await api.rollUnscoped(\"TF-Castle\", { promptValues: {\n  town: \"{{town}}\", shopType: \"{{type}}\", shopName: \"{{name}}\",\n  keeperName: main?.name ?? \"\", keeperRace: main ? raceWord(main) : \"\",\n  keeperGender: main?.gender ?? \"\", keeperAge: main?.age ?? \"\",\n  keeperDesc: main ? descOf(main) : \"\"\n}});\ntR += result.result;\n\n// The household.\nif (has) {\n  tR += \"\\n\\n## At court\\n\\n\";\n  tR += await face(await P.roll(), \"Captain of the guard\");\n  tR += await face(await P.roll(), \"Steward\");\n}\n%>\n\n```heraldry\n```\n",
  "Dock.md": "---\ntype: dock\nsubtype: \"{{subtype}}\"\nsize: \"{{size}}\"\ntown: \"{{town}}\"\n---\n# {{name}}\n\n> [!info] {{type}} in {{town}}\n\nA {{type}} on the river near {{town}}.\n\n<%*\nconst api = app.plugins.plugins[\"randomness\"].api;\nconst P = api.portraits;\nconst has = P && (await P.available());\nconst raceWord = (p) => ({ halfelf: \"half-elf\", halforc: \"half-orc\" }[p.race] ?? p.race ?? \"\");\nconst descOf = (p) => p.age === \"old\" ? \"silver-haired\"\n  : (p.recipe.parts.scars ?? -1) >= 0 ? \"scarred\"\n  : (p.recipe.parts.facial_hair ?? -1) >= 0 ? \"bearded\"\n  : p.age === \"young\" ? \"fresh-faced\" : \"\";\nconst infobox = (p, heading, lastRow) => [\n  \"> [!infobox]\", `> # ${p.name}`,\n  \"> \" + P.inlineSnippet(p.recipe, 160),\n  `> ###### ${heading}`, \"> | |  |\", \"> | --- | --- |\",\n  `> | Race | ${raceWord(p)} |`, `> | Gender | ${p.gender} |`,\n  `> | Age | ${p.age} |`, `> | ${lastRow} | {{name}} |`, \"\", \"\",\n].join(\"\\n\");\nconst face = async (p, role) => {\n  const beat = (await api.rollUnscoped(\"Personality\")).result;\n  return `- ${P.inlineSnippet(p.recipe, 96)} **${p.name}** \u2014 ${role}, ${beat}\\n`;\n};\n\n// The harbormaster \u2014 same person in the infobox and the rolled text.\nlet main = null;\nif (has) { main = await P.roll(); tR += infobox(main, \"Harbormaster\", \"Runs\"); }\n\nconst result = await api.rollUnscoped(\"TF-Dock\", { promptValues: {\n  town: \"{{town}}\", shopType: \"{{type}}\", shopName: \"{{name}}\",\n  keeperName: main?.name ?? \"\", keeperRace: main ? raceWord(main) : \"\",\n  keeperGender: main?.gender ?? \"\", keeperAge: main?.age ?? \"\",\n  keeperDesc: main ? descOf(main) : \"\"\n}});\ntR += result.result;\n\n// A face on the waterfront.\nif (has) {\n  tR += \"\\n\\n## On the waterfront\\n\\n\";\n  tR += await face(await P.roll(), \"Dockhand\");\n}\n%>\n",
  "Farm.md": "---\ntype: farm\nsubtype: \"{{subtype}}\"\nsize: \"{{size}}\"\ntown: \"{{town}}\"\n---\n# {{name}}\n\n> [!info] {{type}} in {{town}}\n\nA {{type}} on the outskirts of {{town}}.\n\n<%*\nconst api = app.plugins.plugins[\"randomness\"].api;\nconst P = api.portraits;\nconst has = P && (await P.available());\nconst raceWord = (p) => ({ halfelf: \"half-elf\", halforc: \"half-orc\" }[p.race] ?? p.race ?? \"\");\nconst descOf = (p) => p.age === \"old\" ? \"silver-haired\"\n  : (p.recipe.parts.scars ?? -1) >= 0 ? \"scarred\"\n  : (p.recipe.parts.facial_hair ?? -1) >= 0 ? \"bearded\"\n  : p.age === \"young\" ? \"fresh-faced\" : \"\";\nconst infobox = (p, heading, lastRow) => [\n  \"> [!infobox]\", `> # ${p.name}`,\n  \"> \" + P.inlineSnippet(p.recipe, 160),\n  `> ###### ${heading}`, \"> | |  |\", \"> | --- | --- |\",\n  `> | Race | ${raceWord(p)} |`, `> | Gender | ${p.gender} |`,\n  `> | Age | ${p.age} |`, `> | ${lastRow} | {{name}} |`, \"\", \"\",\n].join(\"\\n\");\nconst face = async (p, role) => {\n  const beat = (await api.rollUnscoped(\"Personality\")).result;\n  return `- ${P.inlineSnippet(p.recipe, 96)} **${p.name}** \u2014 ${role}, ${beat}\\n`;\n};\n\n// The farmer \u2014 same person in the infobox and the rolled text.\nlet main = null;\nif (has) { main = await P.roll(); tR += infobox(main, \"Farmer\", \"Works\"); }\n\nconst result = await api.rollUnscoped(\"TF-Farm\", { promptValues: {\n  town: \"{{town}}\", shopType: \"{{type}}\", shopName: \"{{name}}\",\n  keeperName: main?.name ?? \"\", keeperRace: main ? raceWord(main) : \"\",\n  keeperGender: main?.gender ?? \"\", keeperAge: main?.age ?? \"\",\n  keeperDesc: main ? descOf(main) : \"\"\n}});\ntR += result.result;\n\n// Help around the place.\nif (has) {\n  tR += \"\\n\\n## Around the yard\\n\\n\";\n  tR += await face(await P.roll(), \"Farmhand\");\n}\n%>\n",
  "Inn.md": "---\ntype: inn\nsubtype: \"{{subtype}}\"\nsize: \"{{size}}\"\ntown: \"{{town}}\"\n---\n# {{name}}\n\n> [!info] {{type}} in {{town}}\n\nA {{type}} on the streets of {{town}}.\n\n<%*\nconst api = app.plugins.plugins[\"randomness\"].api;\nconst P = api.portraits;\nconst has = P && (await P.available());\nconst raceWord = (p) => ({ halfelf: \"half-elf\", halforc: \"half-orc\" }[p.race] ?? p.race ?? \"\");\nconst descOf = (p) => p.age === \"old\" ? \"silver-haired\"\n  : (p.recipe.parts.scars ?? -1) >= 0 ? \"scarred\"\n  : (p.recipe.parts.facial_hair ?? -1) >= 0 ? \"bearded\"\n  : p.age === \"young\" ? \"fresh-faced\" : \"\";\nconst infobox = (p, heading, lastRow) => [\n  \"> [!infobox]\", `> # ${p.name}`,\n  \"> \" + P.inlineSnippet(p.recipe, 160),\n  `> ###### ${heading}`, \"> | |  |\", \"> | --- | --- |\",\n  `> | Race | ${raceWord(p)} |`, `> | Gender | ${p.gender} |`,\n  `> | Age | ${p.age} |`, `> | ${lastRow} | {{name}} |`, \"\", \"\",\n].join(\"\\n\");\nconst face = async (p, role) => {\n  const beat = (await api.rollUnscoped(\"Personality\")).result;\n  return `- ${P.inlineSnippet(p.recipe, 96)} **${p.name}** \u2014 ${role}, ${beat}\\n`;\n};\n\n// The host \u2014 same person in the infobox and the rolled text.\nlet main = null;\nif (has) { main = await P.roll(); tR += infobox(main, \"Innkeeper\", \"Keeps\"); }\n\nconst result = await api.rollUnscoped(\"TF-Inn\", { promptValues: {\n  town: \"{{town}}\", shopType: \"{{type}}\", shopName: \"{{name}}\",\n  keeperName: main?.name ?? \"\", keeperRace: main ? raceWord(main) : \"\",\n  keeperGender: main?.gender ?? \"\", keeperAge: main?.age ?? \"\",\n  keeperDesc: main ? descOf(main) : \"\"\n}});\ntR += result.result;\n\n// Someone staying the night.\nif (has) {\n  tR += \"\\n\\n## In the common room\\n\\n\";\n  tR += await face(await P.roll(), \"A guest\");\n}\n%>\n",
  "Manor.md": "---\ntype: manor\nsubtype: \"{{subtype}}\"\nsize: \"{{size}}\"\ntown: \"{{town}}\"\n---\n# {{name}}\n\n> [!info] {{type}} in {{town}}\n\nA {{type}} on the streets of {{town}}.\n\n<%*\nconst api = app.plugins.plugins[\"randomness\"].api;\nconst P = api.portraits;\nconst has = P && (await P.available());\nconst raceWord = (p) => ({ halfelf: \"half-elf\", halforc: \"half-orc\" }[p.race] ?? p.race ?? \"\");\nconst descOf = (p) => p.age === \"old\" ? \"silver-haired\"\n  : (p.recipe.parts.scars ?? -1) >= 0 ? \"scarred\"\n  : (p.recipe.parts.facial_hair ?? -1) >= 0 ? \"bearded\"\n  : p.age === \"young\" ? \"fresh-faced\" : \"\";\nconst infobox = (p, heading, lastRow) => [\n  \"> [!infobox]\", `> # ${p.name}`,\n  \"> \" + P.inlineSnippet(p.recipe, 160),\n  `> ###### ${heading}`, \"> | |  |\", \"> | --- | --- |\",\n  `> | Race | ${raceWord(p)} |`, `> | Gender | ${p.gender} |`,\n  `> | Age | ${p.age} |`, `> | ${lastRow} | {{name}} |`, \"\", \"\",\n].join(\"\\n\");\nconst face = async (p, role) => {\n  const beat = (await api.rollUnscoped(\"Personality\")).result;\n  return `- ${P.inlineSnippet(p.recipe, 96)} **${p.name}** \u2014 ${role}, ${beat}\\n`;\n};\n\n// The head of the house \u2014 same person in the infobox and the rolled text.\nlet main = null;\nif (has) { main = await P.roll(); tR += infobox(main, \"Head of the house\", \"Holds\"); }\n\nconst result = await api.rollUnscoped(\"TF-Manor\", { promptValues: {\n  town: \"{{town}}\", shopType: \"{{type}}\", shopName: \"{{name}}\",\n  keeperName: main?.name ?? \"\", keeperRace: main ? raceWord(main) : \"\",\n  keeperGender: main?.gender ?? \"\", keeperAge: main?.age ?? \"\",\n  keeperDesc: main ? descOf(main) : \"\"\n}});\ntR += result.result;\n\n// The household.\nif (has) {\n  tR += \"\\n\\n## In service\\n\\n\";\n  tR += await face(await P.roll(), \"Servant\");\n}\n%>\n",
  "Market.md": "---\ntype: market\nsubtype: \"{{subtype}}\"\nsize: \"{{size}}\"\ntown: \"{{town}}\"\n---\n# {{name}}\n\n> [!info] {{type}} in {{town}}\n\nA {{type}} in the heart of {{town}}.\n\n<%*\nconst api = app.plugins.plugins[\"randomness\"].api;\nconst P = api.portraits;\nconst has = P && (await P.available());\nconst face = async (p, role) => {\n  const beat = (await api.rollUnscoped(\"Personality\")).result;\n  return `- ${P.inlineSnippet(p.recipe, 96)} **${p.name}** \u2014 ${role}, ${beat}\\n`;\n};\n\n// This generator scales with settlement size: pass {{size}} so the\n// count and the mix of goods match the town tier. The market has no\n// single proprietor \u2014 the faces below are the crowd instead.\nconst result = await api.rollUnscoped(\"TF-Market\", { promptValues: {\n  town: \"{{town}}\", shopType: \"{{type}}\", shopName: \"{{name}}\", size: \"{{size}}\"\n}});\ntR += result.result;\n\nif (has) {\n  tR += \"\\n\\n## Faces in the crowd\\n\\n\";\n  tR += await face(await P.roll(), \"Stallholder\");\n  tR += await face(await P.roll(), \"Shopper\");\n  tR += await face(await P.roll({ age: \"young\" }), \"Errand-runner\");\n}\n%>\n",
  "Mill.md": "---\ntype: mill\nsubtype: \"{{subtype}}\"\nsize: \"{{size}}\"\ntown: \"{{town}}\"\n---\n# {{name}}\n\n> [!info] {{type}} in {{town}}\n\nA {{type}} on the outskirts of {{town}}.\n\n<%*\nconst api = app.plugins.plugins[\"randomness\"].api;\nconst P = api.portraits;\nconst has = P && (await P.available());\nconst raceWord = (p) => ({ halfelf: \"half-elf\", halforc: \"half-orc\" }[p.race] ?? p.race ?? \"\");\nconst descOf = (p) => p.age === \"old\" ? \"silver-haired\"\n  : (p.recipe.parts.scars ?? -1) >= 0 ? \"scarred\"\n  : (p.recipe.parts.facial_hair ?? -1) >= 0 ? \"bearded\"\n  : p.age === \"young\" ? \"fresh-faced\" : \"\";\nconst infobox = (p, heading, lastRow) => [\n  \"> [!infobox]\", `> # ${p.name}`,\n  \"> \" + P.inlineSnippet(p.recipe, 160),\n  `> ###### ${heading}`, \"> | |  |\", \"> | --- | --- |\",\n  `> | Race | ${raceWord(p)} |`, `> | Gender | ${p.gender} |`,\n  `> | Age | ${p.age} |`, `> | ${lastRow} | {{name}} |`, \"\", \"\",\n].join(\"\\n\");\n\n// The miller \u2014 same person in the infobox and the rolled text.\nlet main = null;\nif (has) { main = await P.roll(); tR += infobox(main, \"Miller\", \"Runs\"); }\n\nconst result = await api.rollUnscoped(\"TF-Mill\", { promptValues: {\n  town: \"{{town}}\", shopType: \"{{type}}\", shopName: \"{{name}}\",\n  keeperName: main?.name ?? \"\", keeperRace: main ? raceWord(main) : \"\",\n  keeperGender: main?.gender ?? \"\", keeperAge: main?.age ?? \"\",\n  keeperDesc: main ? descOf(main) : \"\"\n}});\ntR += result.result;\n%>\n",
  "Shop.md": "---\ntype: shop\nsubtype: \"{{subtype}}\"\nsize: \"{{size}}\"\ntown: \"{{town}}\"\n---\n# {{name}}\n\n> [!info] {{subtype}} {{type}} in {{town}}\n\n<%*\nconst api = app.plugins.plugins[\"randomness\"].api;\nconst P = api.portraits;\nconst has = P && (await P.available());\nconst raceWord = (p) => ({ halfelf: \"half-elf\", halforc: \"half-orc\" }[p.race] ?? p.race ?? \"\");\nconst descOf = (p) => p.age === \"old\" ? \"silver-haired\"\n  : (p.recipe.parts.scars ?? -1) >= 0 ? \"scarred\"\n  : (p.recipe.parts.facial_hair ?? -1) >= 0 ? \"bearded\"\n  : p.age === \"young\" ? \"fresh-faced\" : \"\";\nconst infobox = (p, heading, lastRow) => [\n  \"> [!infobox]\", `> # ${p.name}`,\n  \"> \" + P.inlineSnippet(p.recipe, 160),\n  `> ###### ${heading}`, \"> | |  |\", \"> | --- | --- |\",\n  `> | Race | ${raceWord(p)} |`, `> | Gender | ${p.gender} |`,\n  `> | Age | ${p.age} |`, `> | ${lastRow} | {{name}} |`, \"\", \"\",\n].join(\"\\n\");\n\n// \u2500\u2500\u2500 ONE keeper + ONE customer across the whole note \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n// Both rolled once; the generator's Proprietor line, quotes, and\n// \"Also here\" customer all describe these exact people. With no pack\n// installed both stay null and the generator rolls its own (as before).\nlet keeper = null, shopper = null;\nif (has) {\n  keeper = await P.roll();\n  shopper = await P.roll();\n  // Constrain if you like, e.g.:\n  //   P.roll({ gender: \"female\", race: \"gnome\", age: \"old\" })\n  tR += infobox(keeper, \"Shopkeeper\", \"Runs\");\n}\n\nconst shop = await api.rollUnscoped(\"TF-ShopByType\", {\n  promptValues: {\n    town: \"{{town}}\",\n    shopType: \"{{subtype}}\",\n    shopName: \"{{name}}\",\n    size: \"{{size}}\",\n    keeperName: keeper?.name ?? \"\",\n    keeperRace: keeper ? raceWord(keeper) : \"\",\n    keeperGender: keeper?.gender ?? \"\",\n    keeperAge: keeper?.age ?? \"\",\n    keeperDesc: keeper ? descOf(keeper) : \"\",\n    custName: shopper?.name ?? \"\",\n    custRace: shopper ? raceWord(shopper) : \"\",\n    custDesc: shopper ? descOf(shopper) : \"\"\n  }\n});\ntR += shop.result;\n\n// The customer from the \"Also here\" line, with a face.\nif (has && shopper) {\n  tR += \"\\n\\n## Seen browsing\\n\\n\";\n  tR += `- ${P.inlineSnippet(shopper.recipe, 96)} **${shopper.name}**\\n`;\n}\n%>\n",
  "Stable.md": "---\ntype: stable\nsubtype: \"{{subtype}}\"\nsize: \"{{size}}\"\ntown: \"{{town}}\"\n---\n# {{name}}\n\n> [!info] {{type}} in {{town}}\n\nA {{type}} on the outskirts of {{town}}.\n\n<%*\nconst api = app.plugins.plugins[\"randomness\"].api;\nconst P = api.portraits;\nconst has = P && (await P.available());\nconst raceWord = (p) => ({ halfelf: \"half-elf\", halforc: \"half-orc\" }[p.race] ?? p.race ?? \"\");\nconst descOf = (p) => p.age === \"old\" ? \"silver-haired\"\n  : (p.recipe.parts.scars ?? -1) >= 0 ? \"scarred\"\n  : (p.recipe.parts.facial_hair ?? -1) >= 0 ? \"bearded\"\n  : p.age === \"young\" ? \"fresh-faced\" : \"\";\nconst infobox = (p, heading, lastRow) => [\n  \"> [!infobox]\", `> # ${p.name}`,\n  \"> \" + P.inlineSnippet(p.recipe, 160),\n  `> ###### ${heading}`, \"> | |  |\", \"> | --- | --- |\",\n  `> | Race | ${raceWord(p)} |`, `> | Gender | ${p.gender} |`,\n  `> | Age | ${p.age} |`, `> | ${lastRow} | {{name}} |`, \"\", \"\",\n].join(\"\\n\");\nconst face = async (p, role) => {\n  const beat = (await api.rollUnscoped(\"Personality\")).result;\n  return `- ${P.inlineSnippet(p.recipe, 96)} **${p.name}** \u2014 ${role}, ${beat}\\n`;\n};\n\n// The stablemaster \u2014 same person in the infobox and the rolled text.\nlet main = null;\nif (has) { main = await P.roll(); tR += infobox(main, \"Stablemaster\", \"Runs\"); }\n\nconst result = await api.rollUnscoped(\"TF-Stable\", { promptValues: {\n  town: \"{{town}}\", shopType: \"{{type}}\", shopName: \"{{name}}\",\n  keeperName: main?.name ?? \"\", keeperRace: main ? raceWord(main) : \"\",\n  keeperGender: main?.gender ?? \"\", keeperAge: main?.age ?? \"\",\n  keeperDesc: main ? descOf(main) : \"\"\n}});\ntR += result.result;\n\n// Help in the yard.\nif (has) {\n  tR += \"\\n\\n## In the yard\\n\\n\";\n  tR += await face(await P.roll({ age: \"young\" }), \"Stablehand\");\n}\n%>\n",
  "Tavern.md": "---\ntype: tavern\nsubtype: \"{{subtype}}\"\nsize: \"{{size}}\"\ntown: \"{{town}}\"\n---\n# {{name}}\n\n> [!info] {{type}} in {{town}}\n\nA {{type}} on the streets of {{town}}.\n\n<%*\nconst api = app.plugins.plugins[\"randomness\"].api;\nconst P = api.portraits;\nconst has = P && (await P.available());\nconst raceWord = (p) => ({ halfelf: \"half-elf\", halforc: \"half-orc\" }[p.race] ?? p.race ?? \"\");\nconst descOf = (p) => p.age === \"old\" ? \"silver-haired\"\n  : (p.recipe.parts.scars ?? -1) >= 0 ? \"scarred\"\n  : (p.recipe.parts.facial_hair ?? -1) >= 0 ? \"bearded\"\n  : p.age === \"young\" ? \"fresh-faced\" : \"\";\nconst infobox = (p, heading, lastRow) => [\n  \"> [!infobox]\", `> # ${p.name}`,\n  \"> \" + P.inlineSnippet(p.recipe, 160),\n  `> ###### ${heading}`, \"> | |  |\", \"> | --- | --- |\",\n  `> | Race | ${raceWord(p)} |`, `> | Gender | ${p.gender} |`,\n  `> | Age | ${p.age} |`, `> | ${lastRow} | {{name}} |`, \"\", \"\",\n].join(\"\\n\");\nconst face = async (p, role) => {\n  const beat = (await api.rollUnscoped(\"Personality\")).result;\n  return `- ${P.inlineSnippet(p.recipe, 96)} **${p.name}** \u2014 ${role}, ${beat}\\n`;\n};\n\n// The keep \u2014 same person in the infobox and the rolled text.\nlet main = null;\nif (has) { main = await P.roll(); tR += infobox(main, \"Keep\", \"Pours at\"); }\n\nconst result = await api.rollUnscoped(\"TF-Tavern\", { promptValues: {\n  town: \"{{town}}\", shopType: \"{{type}}\", shopName: \"{{name}}\",\n  keeperName: main?.name ?? \"\", keeperRace: main ? raceWord(main) : \"\",\n  keeperGender: main?.gender ?? \"\", keeperAge: main?.age ?? \"\",\n  keeperDesc: main ? descOf(main) : \"\"\n}});\ntR += result.result;\n\n// Propping up the bar.\nif (has) {\n  tR += \"\\n\\n## At the bar\\n\\n\";\n  tR += await face(await P.roll(), \"Regular\");\n}\n%>\n",
  "Temple.md": "---\ntype: temple\nsubtype: \"{{subtype}}\"\nsize: \"{{size}}\"\ntown: \"{{town}}\"\n---\n# {{name}}\n\n> [!info] {{type}} in {{town}}\n\nA {{type}} on the streets of {{town}}.\n\n<%*\nconst api = app.plugins.plugins[\"randomness\"].api;\nconst P = api.portraits;\nconst has = P && (await P.available());\nconst raceWord = (p) => ({ halfelf: \"half-elf\", halforc: \"half-orc\" }[p.race] ?? p.race ?? \"\");\nconst descOf = (p) => p.age === \"old\" ? \"silver-haired\"\n  : (p.recipe.parts.scars ?? -1) >= 0 ? \"scarred\"\n  : (p.recipe.parts.facial_hair ?? -1) >= 0 ? \"bearded\"\n  : p.age === \"young\" ? \"fresh-faced\" : \"\";\nconst infobox = (p, heading, lastRow) => [\n  \"> [!infobox]\", `> # ${p.name}`,\n  \"> \" + P.inlineSnippet(p.recipe, 160),\n  `> ###### ${heading}`, \"> | |  |\", \"> | --- | --- |\",\n  `> | Race | ${raceWord(p)} |`, `> | Gender | ${p.gender} |`,\n  `> | Age | ${p.age} |`, `> | ${lastRow} | {{name}} |`, \"\", \"\",\n].join(\"\\n\");\nconst face = async (p, role) => {\n  const beat = (await api.rollUnscoped(\"Personality\")).result;\n  return `- ${P.inlineSnippet(p.recipe, 96)} **${p.name}** \u2014 ${role}, ${beat}\\n`;\n};\n\n// The priest \u2014 same person in the infobox and the rolled text.\nlet main = null;\nif (has) { main = await P.roll(); tR += infobox(main, \"Priest\", \"Tends\"); }\n\nconst result = await api.rollUnscoped(\"TF-Temple\", { promptValues: {\n  town: \"{{town}}\", shopType: \"{{type}}\", shopName: \"{{name}}\",\n  keeperName: main?.name ?? \"\", keeperRace: main ? raceWord(main) : \"\",\n  keeperGender: main?.gender ?? \"\", keeperAge: main?.age ?? \"\",\n  keeperDesc: main ? descOf(main) : \"\"\n}});\ntR += result.result;\n\n// Serving at the altar.\nif (has) {\n  tR += \"\\n\\n## In the sanctum\\n\\n\";\n  tR += await face(await P.roll({ age: \"young\" }), \"Acolyte\");\n}\n%>\n",
  "Thief Guild.md": "---\ntype: guild\nsubtype: \"{{subtype}}\"\nsize: \"{{size}}\"\ntown: \"{{town}}\"\nheraldry-seed: <% Date.now().toString(36) + Math.random().toString(36).slice(2, 6) %>\n---\n\n# {{name}}\n> [!infobox]+\n> # {{name}}\n> `heraldry:|120`\n> ###### Stats\n> | Type | Stat |\n> | --- | --- |\n\n> [!info] thieves' guild in {{town}}\n\nA criminal syndicate operating in the shadows of {{town}}.\n\n<%*\nconst api = app.plugins.plugins[\"randomness\"].api;\nconst P = api.portraits;\nconst has = P && (await P.available());\nconst raceWord = (p) => ({ halfelf: \"half-elf\", halforc: \"half-orc\" }[p.race] ?? p.race ?? \"\");\nconst descOf = (p) => p.age === \"old\" ? \"silver-haired\"\n  : (p.recipe.parts.scars ?? -1) >= 0 ? \"scarred\"\n  : (p.recipe.parts.facial_hair ?? -1) >= 0 ? \"bearded\"\n  : p.age === \"young\" ? \"fresh-faced\" : \"\";\nconst infobox = (p, heading, lastRow) => [\n  \"> [!infobox]\", `> # ${p.name}`,\n  \"> \" + P.inlineSnippet(p.recipe, 160),\n  `> ###### ${heading}`, \"> | |  |\", \"> | --- | --- |\",\n  `> | Race | ${raceWord(p)} |`, `> | Gender | ${p.gender} |`,\n  `> | Age | ${p.age} |`, `> | ${lastRow} | {{name}} |`, \"\", \"\",\n].join(\"\\n\");\nconst face = async (p, role) => {\n  const beat = (await api.rollUnscoped(\"Personality\")).result;\n  return `- ${P.inlineSnippet(p.recipe, 96)} **${p.name}** \u2014 ${role}, ${beat}\\n`;\n};\n\n// The boss \u2014 same person in the infobox and the rolled text.\nlet main = null;\nif (has) { main = await P.roll(); tR += infobox(main, \"Boss\", \"Runs\"); }\n\nconst result = await api.rollUnscoped(\"TF-Guild\", { promptValues: {\n  town: \"{{town}}\", shopType: \"{{type}}\", shopName: \"{{name}}\",\n  slant: \"criminal\", size: \"{{size}}\",\n  keeperName: main?.name ?? \"\", keeperRace: main ? raceWord(main) : \"\",\n  keeperGender: main?.gender ?? \"\", keeperAge: main?.age ?? \"\",\n  keeperDesc: main ? descOf(main) : \"\"\n}});\ntR += result.result;\n\n// Watching the door.\nif (has) {\n  tR += \"\\n\\n## In the shadows\\n\\n\";\n  tR += await face(await P.roll({ age: \"young\" }), \"Lookout\");\n  tR += await face(await P.roll(), \"Fence\");\n}\n%>\n\n```heraldry\n```\n",
  "Tower.md": "---\ntype: tower\nsubtype: \"{{subtype}}\"\nsize: \"{{size}}\"\ntown: \"{{town}}\"\n---\n# {{name}}\n\n> [!info] {{type}} in {{town}}\n\nA {{type}} on the streets of {{town}}.\n\n<%*\nconst api = app.plugins.plugins[\"randomness\"].api;\nconst P = api.portraits;\nconst has = P && (await P.available());\nconst raceWord = (p) => ({ halfelf: \"half-elf\", halforc: \"half-orc\" }[p.race] ?? p.race ?? \"\");\nconst descOf = (p) => p.age === \"old\" ? \"silver-haired\"\n  : (p.recipe.parts.scars ?? -1) >= 0 ? \"scarred\"\n  : (p.recipe.parts.facial_hair ?? -1) >= 0 ? \"bearded\"\n  : p.age === \"young\" ? \"fresh-faced\" : \"\";\nconst infobox = (p, heading, lastRow) => [\n  \"> [!infobox]\", `> # ${p.name}`,\n  \"> \" + P.inlineSnippet(p.recipe, 160),\n  `> ###### ${heading}`, \"> | |  |\", \"> | --- | --- |\",\n  `> | Race | ${raceWord(p)} |`, `> | Gender | ${p.gender} |`,\n  `> | Age | ${p.age} |`, `> | ${lastRow} | {{name}} |`, \"\", \"\",\n].join(\"\\n\");\nconst face = async (p, role) => {\n  const beat = (await api.rollUnscoped(\"Personality\")).result;\n  return `- ${P.inlineSnippet(p.recipe, 96)} **${p.name}** \u2014 ${role}, ${beat}\\n`;\n};\n\n// The resident mage \u2014 same person in the infobox and the rolled text.\nlet main = null;\nif (has) { main = await P.roll(); tR += infobox(main, \"Resident mage\", \"Keeps\"); }\n\nconst result = await api.rollUnscoped(\"TF-Tower\", { promptValues: {\n  town: \"{{town}}\", shopType: \"{{type}}\", shopName: \"{{name}}\",\n  keeperName: main?.name ?? \"\", keeperRace: main ? raceWord(main) : \"\",\n  keeperGender: main?.gender ?? \"\", keeperAge: main?.age ?? \"\",\n  keeperDesc: main ? descOf(main) : \"\"\n}});\ntR += result.result;\n\n// Sweeping the stairs, fetching components.\nif (has) {\n  tR += \"\\n\\n## Up the stairs\\n\\n\";\n  tR += await face(await P.roll({ age: \"young\" }), \"Apprentice\");\n}\n%>\n",
  "Undertaker.md": "---\ntype: undertaker\nsubtype: \"{{subtype}}\"\nsize: \"{{size}}\"\ntown: \"{{town}}\"\n---\n# {{name}}\n\n> [!info] {{type}} in {{town}}\n\nA {{type}} on the streets of {{town}}.\n\n<%*\nconst api = app.plugins.plugins[\"randomness\"].api;\nconst P = api.portraits;\nconst has = P && (await P.available());\nconst raceWord = (p) => ({ halfelf: \"half-elf\", halforc: \"half-orc\" }[p.race] ?? p.race ?? \"\");\nconst descOf = (p) => p.age === \"old\" ? \"silver-haired\"\n  : (p.recipe.parts.scars ?? -1) >= 0 ? \"scarred\"\n  : (p.recipe.parts.facial_hair ?? -1) >= 0 ? \"bearded\"\n  : p.age === \"young\" ? \"fresh-faced\" : \"\";\nconst infobox = (p, heading, lastRow) => [\n  \"> [!infobox]\", `> # ${p.name}`,\n  \"> \" + P.inlineSnippet(p.recipe, 160),\n  `> ###### ${heading}`, \"> | |  |\", \"> | --- | --- |\",\n  `> | Race | ${raceWord(p)} |`, `> | Gender | ${p.gender} |`,\n  `> | Age | ${p.age} |`, `> | ${lastRow} | {{name}} |`, \"\", \"\",\n].join(\"\\n\");\n\n// The undertaker \u2014 same person in the infobox and the rolled text.\nlet main = null;\nif (has) { main = await P.roll(); tR += infobox(main, \"Undertaker\", \"Keeps\"); }\n\nconst result = await api.rollUnscoped(\"TF-Undertaker\", { promptValues: {\n  town: \"{{town}}\", shopType: \"{{type}}\", shopName: \"{{name}}\",\n  keeperName: main?.name ?? \"\", keeperRace: main ? raceWord(main) : \"\",\n  keeperGender: main?.gender ?? \"\", keeperAge: main?.age ?? \"\",\n  keeperDesc: main ? descOf(main) : \"\"\n}});\ntR += result.result;\n%>\n",
};

var DEFAULT_SETTINGS = {
  scaleMultiplier: 1,
  distanceUnit: "miles",
  exportFolder: "Maps",
  templateFolder: "Templates/TownForge",
  pinTypes: DEFAULT_PIN_TYPES.map((t) => ({ ...t })),
  openAfterExport: true,
  groupNotesByType: true,
  enableZoomMapExport: false,
  showTroubleshoot: false
};
var SIZE_BASE_DISTANCE = {
  hamlet: 1.5,
  village: 2.5,
  small_town: 4,
  town: 6,
  large_town: 9,
  small_city: 13,
  city: 18,
  large_city: 25,
  metropolis: 35
};
var LANDSCAPE_BASE_DISTANCE = 10;
var VALID_SETTLEMENTS = ["hamlet", "village", "small_town", "town", "large_town", "small_city", "city", "large_city", "metropolis"];
// Pull a `from: [[Note]]` (or `source: [[Note]]`) line out of a map block, so a
// block can draw a map from ANOTHER note's Properties. Returns { linkpath } or null.
function extractSourceLink(source) {
  for (const rawLine of source.split("\n")) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#"))
      continue;
    const idx = line.indexOf(":");
    if (idx === -1)
      continue;
    const key = line.slice(0, idx).trim().toLowerCase();
    if (key === "from" || key === "source") {
      const val = line.slice(idx + 1).trim();
      const m = /\[\[([^\]|#]+)(?:[#|][^\]]*)?\]\]/.exec(val);
      const linkpath = m ? m[1].trim() : val.replace(/^["']|["']$/g, "").trim();
      return { linkpath: linkpath || null };
    }
  }
  return null;
}
// Turn `townforge-<key>` / `townforge_<key>` note Properties into the same
// "key: value" lines parseConfig already understands. Lists become joined
// letters (edges: [N, E] -> "NE"); booleans become on/off (checkbox landmarks).
function frontmatterToConfigLines(fm) {
  const lines = [];
  if (!fm || typeof fm !== "object")
    return lines;
  for (const rawKey of Object.keys(fm)) {
    const m = /^townforge[-_](.+)$/i.exec(rawKey);
    if (!m)
      continue;
    const key = m[1].trim().toLowerCase();
    if (!key)
      continue;
    let val = fm[rawKey];
    if (val === null || val === void 0)
      continue;
    if (Array.isArray(val))
      val = val.join("");
    else if (typeof val === "boolean")
      val = val ? "on" : "off";
    const text = String(val).trim();
    if (text)
      lines.push(`${key}: ${text}`);
  }
  return lines;
}
function parseConfig(source) {
  const errors = [];
  const config = {
    terrain: "coastal",
    seed: "townforge",
    size: 512,
    roughness: 0.6,
    octaves: 5,
    mode: "landscape",
    settlement: "town",
    landmarks: {}
  };
  for (const rawLine of source.split("\n")) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#"))
      continue;
    const idx = line.indexOf(":");
    if (idx === -1) {
      errors.push(`Ignored line (expected "key: value"): ${line}`);
      continue;
    }
    const key = line.slice(0, idx).trim().toLowerCase();
    const value = line.slice(idx + 1).trim();
    switch (key) {
      case "terrain":
        if (VALID_TERRAINS.includes(value.toLowerCase())) {
          config.terrain = value.toLowerCase();
        } else {
          errors.push(`Unknown terrain "${value}" (use: ${VALID_TERRAINS.join(", ")})`);
        }
        break;
      case "seed":
        config.seed = value;
        break;
      case "size": {
        const n = parseInt(value, 10);
        if (!isNaN(n) && n >= 128 && n <= 2e3)
          config.size = n;
        else
          errors.push(`size must be 128\u20132000 (got "${value}")`);
        break;
      }
      case "roughness": {
        const r = parseFloat(value);
        if (!isNaN(r) && r >= 0 && r <= 1)
          config.roughness = r;
        else
          errors.push(`roughness must be 0\u20131 (got "${value}")`);
        break;
      }
      case "octaves": {
        const o = parseInt(value, 10);
        if (!isNaN(o) && o >= 1 && o <= 8)
          config.octaves = o;
        else
          errors.push(`octaves must be 1\u20138 (got "${value}")`);
        break;
      }
      case "mode": {
        const m = value.toLowerCase();
        if (m === "landscape" || m === "full")
          config.mode = m;
        else
          errors.push(`mode must be "landscape" or "full" (got "${value}")`);
        break;
      }
      case "settlement": {
        const s = value.toLowerCase();
        if (VALID_SETTLEMENTS.includes(s))
          config.settlement = s;
        else
          errors.push(`unknown settlement "${value}" (use: ${VALID_SETTLEMENTS.join(", ")})`);
        break;
      }
      case "scale": {
        const sc = parseFloat(value);
        if (!isNaN(sc) && sc > 0)
          config.scale = sc;
        else
          errors.push(`scale must be a positive number (got "${value}")`);
        break;
      }
      case "unit":
        config.unit = value;
        break;
      case "name":
        config.name = value;
        break;
      case "edges": {
        const v = value.toUpperCase();
        config.edges = { N: v.includes("N"), E: v.includes("E"), S: v.includes("S"), W: v.includes("W") };
        break;
      }
      case "farms": {
        const f = parseFloat(value);
        if (!isNaN(f) && f >= 0 && f <= 4)
          config.farms = f;
        else
          errors.push(`farms must be 0\u20134 (got "${value}")`);
        break;
      }
      case "forest": {
        const f = parseFloat(value);
        if (!isNaN(f) && f >= 0 && f <= 4)
          config.forest = f;
        else
          errors.push(`forest must be 0\u20134 (got "${value}")`);
        break;
      }
      case "seaside": {
        const v = value.toUpperCase();
        if (["N", "E", "S", "W"].includes(v))
          config.seaSide = v;
        else
          errors.push(`seaside must be N/E/S/W (got "${value}")`);
        break;
      }
      case "mtnside":
      case "mtnedges": {
        const v = value.toUpperCase().replace(/[^NESW]/g, "");
        const valid = ["N", "E", "S", "W"].filter((e) => v.includes(e)).join("");
        if (valid)
          config.mountainSide = valid;
        else
          errors.push(`${key} must contain N/E/S/W (got "${value}")`);
        break;
      }
      case "mtnsize":
      case "peaks": {
        const n = parseInt(value, 10);
        if (!isNaN(n) && n >= 0 && n <= 12)
          config.peaks = n;
        else
          errors.push(`${key} must be 0\u201312 (got "${value}")`);
        break;
      }
      case "walls":
      case "castle":
      case "market":
      case "barracks":
      case "tower":
      case "temple": {
        const v = value.toLowerCase();
        const on = v === "on" || v === "true" || v === "yes";
        const off = v === "off" || v === "false" || v === "no";
        if (!on && !off) {
          errors.push(`${key} must be on/off (got "${value}")`);
          break;
        }
        const lmKey = key === "temple" ? "cathedral" : key;
        config.landmarks[lmKey] = on;
        break;
      }
      case "from":
      case "source":
        break;
      default:
        errors.push(`Unknown key "${key}"`);
    }
  }
  return { config, errors };
}
var TownForgePlugin = class extends import_obsidian2.Plugin {
  constructor() {
    super(...arguments);
    this.settings = DEFAULT_SETTINGS;
  }
  async onload() {
    await this.loadSettings();
    this.registerMarkdownCodeBlockProcessor(
      "town-forge",
      (source, el, ctx) => {
        this.renderBlock(source, el, ctx);
      }
    );
    this.registerView(TOWN_FORGE_VIEW, (leaf) => new TownForgePreviewView(leaf, () => this.settings.exportFolder, () => this.settings.templateFolder, () => this.settings.pinTypes, () => this.settings.openAfterExport, () => this.settings.groupNotesByType, () => this.settings.enableZoomMapExport, () => this.settings.showTroubleshoot, () => this.settings.scaleMultiplier, () => this.settings.distanceUnit));
    this.addRibbonIcon("map", "Town Forge: open map preview", () => {
      this.activatePreview();
    });
    this.addCommand({
      id: "open-town-forge-preview",
      name: "Open map preview panel",
      callback: () => this.activatePreview()
    });
    this.addSettingTab(new TownForgeSettingTab(this.app, this));
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
    if (!Array.isArray(this.settings.pinTypes) || this.settings.pinTypes.length === 0) {
      this.settings.pinTypes = DEFAULT_PIN_TYPES.map((t) => ({ ...t }));
    } else {
      const have = new Set(this.settings.pinTypes.map((t) => t.id));
      for (const def of DEFAULT_PIN_TYPES) {
        if (!have.has(def.id))
          this.settings.pinTypes.push({ ...def });
      }
      const tower = this.settings.pinTypes.find((t) => t.id === "tower");
      if (tower && (tower.icon === "tower" || tower.icon === "tower-observation")) {
        tower.icon = "pinRed";
      }
    }
  }
  /**
   * Write the bundled place templates into the configured template
   * folder (create when missing, overwrite when present - the bundle
   * is the source of truth; keep customised copies under different
   * names). Returns { created, updated }.
   */
  // Add the template folder to Templater's excluded-folders list so Templater's
  // "trigger on new file creation" doesn't execute the template files as we write
  // them (which would prompt for town/size and could overwrite the templates).
  // Stamped place notes live in the export folder, which stays un-excluded.
  ensureTemplaterIgnores(folder) {
    try {
      const reg = this.app.plugins && this.app.plugins.plugins ? this.app.plugins.plugins : null;
      const tp = reg ? reg["templater-obsidian"] : null;
      if (!tp || !tp.settings || !Array.isArray(tp.settings.ignore_folders_on_creation))
        return false;
      const norm = String(folder).replace(/\/+$/, "");
      const has = tp.settings.ignore_folders_on_creation.some(
        (e) => e && typeof e.folder === "string" && e.folder.replace(/\/+$/, "") === norm
      );
      if (has)
        return false;
      tp.settings.ignore_folders_on_creation.push({ folder: norm });
      if (typeof tp.save_settings === "function")
        tp.save_settings();
      else if (typeof tp.saveSettings === "function")
        tp.saveSettings();
      return true;
    } catch (e) {
      return false;
    }
  }
  async seedPlaceTemplates() {
    const folder = this.settings.templateFolder || "Templates/TownForge";
    const excluded = this.ensureTemplaterIgnores(folder);
    const vault = this.app.vault;
    if (!vault.getAbstractFileByPath(folder)) {
      try {
        await vault.createFolder(folder);
      } catch (e) {
      }
    }
    let created = 0, updated = 0;
    for (const [name, content] of Object.entries(TOWN_FORGE_TEMPLATES)) {
      const path = `${folder}/${name}`;
      const existing = vault.getAbstractFileByPath(path);
      if (existing) {
        await vault.modify(existing, content);
        updated++;
      } else {
        await vault.create(path, content);
        created++;
      }
    }
    return { created, updated, excluded };
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
  async onunload() {
  }
  // Rebuild any open Town Forge panels so settings changes (which buttons show,
  // etc.) take effect immediately without reopening the view.
  refreshOpenPanels() {
    for (const leaf of this.app.workspace.getLeavesOfType(TOWN_FORGE_VIEW)) {
      const view = leaf.view;
      if (view && typeof view.rebuild === "function")
        view.rebuild();
    }
  }
  async activatePreview() {
    const { workspace } = this.app;
    const existing = workspace.getLeavesOfType(TOWN_FORGE_VIEW);
    if (existing.length > 0) {
      workspace.revealLeaf(existing[0]);
      return;
    }
    const leaf = workspace.getRightLeaf(false);
    if (leaf) {
      await leaf.setViewState({ type: TOWN_FORGE_VIEW, active: true });
      workspace.revealLeaf(leaf);
    }
  }
  // Merge note Properties into a map block. Base layer comes from frontmatter -
  // either the note the block sits in, or, if the block has `from: [[Note]]`,
  // that other note. Explicit lines in the block always win over Properties.
  applyPropertyConfig(source, ctx) {
    const extraErrors = [];
    const app = this.app;
    let fm = null;
    const link = extractSourceLink(source);
    if (link && link.linkpath) {
      const dest = app.metadataCache ? app.metadataCache.getFirstLinkpathDest(link.linkpath, ctx && ctx.sourcePath ? ctx.sourcePath : "") : null;
      if (dest) {
        const cache = app.metadataCache.getFileCache(dest);
        fm = cache && cache.frontmatter ? cache.frontmatter : null;
        if (!fm)
          extraErrors.push(`from [[${link.linkpath}]]: that note has no Properties yet`);
      } else {
        extraErrors.push(`from [[${link.linkpath}]]: note not found`);
      }
    } else {
      fm = ctx && ctx.frontmatter ? ctx.frontmatter : null;
      if (!fm && ctx && ctx.sourcePath && app.vault) {
        const self = app.vault.getAbstractFileByPath(ctx.sourcePath);
        if (self && app.metadataCache) {
          const cache = app.metadataCache.getFileCache(self);
          fm = cache && cache.frontmatter ? cache.frontmatter : null;
        }
      }
    }
    const fmLines = frontmatterToConfigLines(fm);
    const merged = fmLines.length ? fmLines.join("\n") + "\n" + source : source;
    return { source: merged, errors: extraErrors };
  }
  renderBlock(source, el, ctx) {
    const applied = this.applyPropertyConfig(source, ctx);
    const { config, errors } = parseConfig(applied.source);
    for (const m of applied.errors)
      errors.push(m);
    const wrap = el.createDiv({ cls: "town-forge-map" });
    wrap.style.margin = "0.5em 0";
    try {
      const opts = {
        roughness: config.roughness,
        octaves: config.octaves,
        riverWidth: 0.06,
        lakeSize: 0.3,
        rangeLen: 0.65,
        peakCount: config.peaks ?? 6,
        seaSide: config.seaSide,
        mountainSide: config.mountainSide
      };
      const fullMode = config.mode === "full";
      const genSize = fullMode ? MAP_SIZE_BY_SIZE[config.settlement] ?? 1e3 : config.size;
      const canvas = wrap.createEl("canvas");
      canvas.width = genSize;
      canvas.height = genSize;
      canvas.style.maxWidth = "100%";
      canvas.style.height = "auto";
      canvas.style.borderRadius = "6px";
      canvas.style.display = "block";
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        wrap.createDiv({ text: "Town Forge: could not get a 2D canvas context." });
        return;
      }
      const baseDist = fullMode ? SIZE_BASE_DISTANCE[config.settlement] ?? LANDSCAPE_BASE_DISTANCE : LANDSCAPE_BASE_DISTANCE;
      const mapDistance = config.scale ?? baseDist * this.settings.scaleMultiplier;
      const distanceUnit = config.unit ?? this.settings.distanceUnit;
      let captionText;
      if (fullMode) {
        const full = generateFull(config.terrain, config.seed, {
          ...opts,
          mode: "full",
          size: config.settlement,
          showForest: true,
          showRoads: true,
          enabledEdges: config.edges,
          overrides: {
            ...config.landmarks,
            farmDensity: config.farms,
            forestDensity: config.forest
          }
        });
        renderFull(ctx, full, genSize, genSize, config.terrain, mapDistance, distanceUnit, config.name);
        captionText = `${config.name ? config.name + " \xB7 " : ""}${config.terrain} \xB7 ${config.settlement} \xB7 seed "${config.seed}"`;
      } else {
        const scene = generateLandscape(config.terrain, config.seed, genSize, genSize, opts);
        renderScene(ctx, scene, genSize, genSize, config.terrain, mapDistance, distanceUnit);
        captionText = `${config.name ? config.name + " \xB7 " : ""}${config.terrain} \xB7 seed "${config.seed}"`;
      }
      const caption = wrap.createDiv({ cls: "town-forge-caption" });
      caption.style.fontSize = "0.75em";
      caption.style.opacity = "0.6";
      caption.style.marginTop = "2px";
      caption.setText(captionText);
    } catch (e) {
      const err = wrap.createDiv({ cls: "town-forge-error" });
      err.style.color = "var(--text-error)";
      err.setText(`Town Forge error: ${e instanceof Error ? e.message : String(e)}`);
    }
    if (errors.length) {
      const warn = wrap.createDiv({ cls: "town-forge-warn" });
      warn.style.color = "var(--text-warning)";
      warn.style.fontSize = "0.75em";
      warn.setText("Config notes: " + errors.join("; "));
    }
  }
};
var TownForgeSettingTab = class extends import_obsidian2.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h3", { text: "Town Forge \u2014 map scale" });
    new import_obsidian2.Setting(containerEl).setName("Distance unit").setDesc('Free text shown on the scale bar \u2014 e.g. "miles", "km", or "lengths of string".').addText(
      (text) => text.setPlaceholder("miles").setValue(this.plugin.settings.distanceUnit).onChange(async (value) => {
        this.plugin.settings.distanceUnit = value.trim() || "miles";
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian2.Setting(containerEl).setName("Scale multiplier").setDesc("Scales all map distances up or down together. 1.0 = defaults (a metropolis map \u2248 35 of your units across, a hamlet \u2248 1.5). Use 2 for a larger world, 0.5 for a smaller one. A single map block can override the distance entirely with a `scale:` line.").addText(
      (text) => text.setPlaceholder("1.0").setValue(String(this.plugin.settings.scaleMultiplier)).onChange(async (value) => {
        const n = parseFloat(value);
        if (!isNaN(n) && n > 0) {
          this.plugin.settings.scaleMultiplier = n;
          await this.plugin.saveSettings();
        }
      })
    );
    containerEl.createEl("h3", { text: "Town Forge \u2014 export" });
    new import_obsidian2.Setting(containerEl).setName("Enable TTRPG Tools: Maps export").setDesc('Turn on the "Export to TTRPG Tools: Maps" button and its options (pin types, templates, per-type note folders). Requires the community plugin "TTRPG Tools: Maps" (formerly Zoom Map). Off by default.').addToggle(
      (toggle) => toggle.setValue(this.plugin.settings.enableZoomMapExport).onChange(async (value) => {
        this.plugin.settings.enableZoomMapExport = value;
        await this.plugin.saveSettings();
        this.plugin.refreshOpenPanels();
        this.display();
      })
    );
    const linkSetting = new import_obsidian2.Setting(containerEl).setName("Get TTRPG Tools: Maps").setDesc("The Obsidian community plugin that renders the exported maps and pins. Opens its install page.");
    linkSetting.addButton(
      (b) => b.setButtonText("Open plugin page").setCta().onClick(() => {
        window.open("obsidian://show-plugin?id=zoom-map");
      })
    );
    if (this.plugin.settings.enableZoomMapExport) {
      new import_obsidian2.Setting(containerEl).setName("Export folder").setDesc('Vault folder that "Export to TTRPG Tools: Maps" writes into. Each export creates a subfolder named after the map, holding the PNG and a note with a zoommap code block. Use a vault-relative path like "Maps" or "Atlas/Cities".').addText(
        (text) => text.setPlaceholder("Maps").setValue(this.plugin.settings.exportFolder).onChange(async (value) => {
          this.plugin.settings.exportFolder = value.trim().replace(/\\/g, "/").replace(/^\/+|\/+$/g, "") || "Maps";
          await this.plugin.saveSettings();
        })
      );
      new import_obsidian2.Setting(containerEl).setName("Template folder").setDesc(`Vault folder holding per-building-type template notes (e.g. "Shop.md"). When a place is pinned, the matching template is copied into the map folder as that place's note, with {{name}}, {{type}}, {{subtype}} and {{town}} filled in. Leave Randomness/Templater syntax in the template \u2014 it resolves when you open the note. If no template exists for a type, a simple default note is written.`).addText(
        (text) => text.setPlaceholder("Templates/TownForge").setValue(this.plugin.settings.templateFolder).onChange(async (value) => {
          this.plugin.settings.templateFolder = value.trim().replace(/\\/g, "/").replace(/^\/+|\/+$/g, "") || "Templates/TownForge";
          await this.plugin.saveSettings();
        })
      );
      new import_obsidian2.Setting(containerEl).setName("Pre-made map content").setDesc("Install the items below to add pre-made templates built to work together with Town Forge, TTRPG Tools - Maps, Randomness, Heraldry Weaver and more \u2014 giving you 1-click maps that self-populate with places, people, items and adventure hooks. Step 1: write the place-note templates. Step 2: send their pin icons to TTRPG Tools - Maps.").setHeading();
      let _tfCreateBtn = null;
      new import_obsidian2.Setting(containerEl).setName("Create place templates").setDesc('Writes the ready-made place notes (Shop, Inn, Tavern, Castle, Temple and more) into the template folder above. When a place is pinned, the matching note fills itself in with a rolled name, keeper and NPCs. First get the checklist below all green - without the Randomness generators the notes come out blank. Safe to click again after updates; it only overwrites these 15 names.').addExtraButton(
        (b) => b.setIcon("dice").setTooltip("Get Randomness (rolls the content + portraits)").onClick(() => {
          window.open("obsidian://show-plugin?id=randomness");
        })
      ).addExtraButton(
        (b) => b.setIcon("scroll").setTooltip("Get Templater (runs the templates - enable its 'Trigger on new file creation')").onClick(() => {
          window.open("obsidian://show-plugin?id=templater-obsidian");
        })
      ).addExtraButton(
        (b) => b.setIcon("shield").setTooltip("Get Heraldry Weaver (crests on castles and guilds)").onClick(() => {
          window.open("obsidian://show-plugin?id=heraldry-weaver");
        })
      ).addExtraButton(
        (b) => b.setIcon("palette").setTooltip("Get the ITS theme (styles the NPC infoboxes)").onClick(() => {
          window.open("obsidian://show-theme?name=ITS%20Theme");
        })
      ).addButton(
        (b) => {
          _tfCreateBtn = b;
          b.setButtonText("Create / update").setCta().onClick(async () => {
            try {
              const r = await this.plugin.seedPlaceTemplates();
              new import_obsidian2.Notice(`Town Forge: templates ready in "${this.plugin.settings.templateFolder}" (${r.created} created, ${r.updated} updated).` + (r.excluded ? " Added it to Templater's excluded folders so Templater won't auto-run the templates." : ""), r.excluded ? 9000 : 4000);
            } catch (e) {
              new import_obsidian2.Notice("Town Forge: template creation failed - " + (e && e.message ? e.message : String(e)), 8000);
            }
          });
        }
      );
      const _tfSteps = containerEl.createDiv({ cls: "setting-item-description" });
      _tfSteps.style.margin = "-0.4em 0 1em 0";
      _tfSteps.setText("Checking set-up…");
      (async () => {
        const app2 = this.app || this.plugin.app;
        const registry = app2.plugins && app2.plugins.plugins ? app2.plugins.plugins : {};
        // Step 1 - Randomness enabled with a usable API.
        const rnd = registry["randomness"] || null;
        const api = rnd && rnd.api ? rnd.api : null;
        // Step 4 - Fantasy Hub generators present. TF-Inn is a reliable sentinel;
        // api.tables() uses the same vault discovery the templates roll through.
        let hubReady = false, canDetect = !!(api && typeof api.tables === "function");
        if (canDetect) {
          try {
            const names = await api.tables();
            hubReady = new Set(names.map((n) => String(n).toLowerCase())).has("tf-inn");
          } catch (e) { canDetect = false; }
        }
        // Step 3 - portrait pack (adds NPC faces; templates degrade gracefully without it).
        let portraitsReady = false;
        try { portraitsReady = !!(api && api.portraits && await api.portraits.available()); } catch (e) { portraitsReady = false; }
        // Step 2 - Templater installed with trigger-on-create ON. The toggle is a
        // device-local setting (app.loadLocalStorage "templater-local-settings"),
        // NOT in tp.settings; older Templater kept it in tp.settings, so check both.
        const tp = registry["templater-obsidian"] || null;
        let tpTrigger = void 0;
        try {
          const tpLocal = typeof app2.loadLocalStorage === "function" ? app2.loadLocalStorage("templater-local-settings") : null;
          if (tpLocal && typeof tpLocal.trigger_on_file_creation === "boolean") tpTrigger = tpLocal.trigger_on_file_creation;
          else if (tp && tp.settings && typeof tp.settings.trigger_on_file_creation === "boolean") tpTrigger = tp.settings.trigger_on_file_creation;
        } catch (e) { tpTrigger = void 0; }

        _tfSteps.empty();
        const head = _tfSteps.createEl("div", { text: "Set-up checklist - do these in order:" });
        head.style.fontWeight = "600";
        head.style.margin = "0 0 0.35em 0";
        const row = (state, text) => {
          const mark = state === true ? "✅" : state === "warn" ? "⚠️" : "❌";
          const d = _tfSteps.createEl("div", { text: `${mark} ${text}` });
          d.style.margin = "0.15em 0";
          return d;
        };

        row(!!api, api
          ? "Step 1 - Randomness plugin installed & on"
          : "Step 1 - install & enable the Randomness plugin (dice button on the right)");

        if (!tp) row(false, "Step 2 - install & enable Templater (scroll button on the right)");
        else if (tpTrigger === true) row(true, "Step 2 - Templater set to run on new files");
        else if (tpTrigger === false) row(false, "Step 2 - in Templater settings, turn ON “Trigger Templater on new file creation”");
        else row("warn", "Step 2 - make sure Templater’s “Trigger on new file creation” is ON");

        row(portraitsReady ? true : "warn", portraitsReady
          ? "Step 3 - Fantasy Portrait Pack installed"
          : "Step 3 - in Randomness settings, click “Install Fantasy Portrait Pack” (needed for Step 4; adds NPC faces)");

        if (canDetect) row(hubReady, hubReady
          ? "Step 4 - Fantasy Hub content installed, place generators ready"
          : "Step 4 - in Randomness settings, click “Install Fantasy Hub content” (do Step 3 first)");
        else row("warn", "Step 4 - in Randomness settings, click “Install Fantasy Hub content” (couldn’t auto-check - older Randomness)");

        const ready = canDetect ? hubReady : !!api;
        if (_tfCreateBtn) {
          _tfCreateBtn.setDisabled(!ready);
          _tfCreateBtn.setButtonText(ready ? "Create / update" : "Create / update - finish the checklist");
        }
        const foot = _tfSteps.createEl("div", { text: ready
          ? "✅ All set - click Create / update, then generate a map and the places fill themselves in."
          : "⚠️ Finish the red steps first. The button switches on once the Fantasy Hub generators are found." });
        foot.style.marginTop = "0.4em";
      })();
            (() => {
        var _app = this.app || this.plugin.app;
        var _mani = _app.plugins && _app.plugins.manifests ? _app.plugins.manifests["zoom-map"] : null;
        if (!_mani) return;
        new import_obsidian2.Setting(containerEl).setName("Send pin icons to TTRPG Tools - Maps").setDesc('Detected TTRPG Tools - Maps ("' + (_mani.name || "Zoom Map") + '"). Write Town Forge\'s pin icons into its icon library so each pin shows its icon on the map. Safe to click again - it only adds or updates these icons and leaves your others alone.').addButton(
          (b) => b.setButtonText("Send icons").setCta().onClick(async () => {
            try {
              var app2 = this.app || this.plugin.app;
              var zm = app2.plugins.plugins["zoom-map"];
              if (!zm) { new import_obsidian2.Notice("TTRPG Tools - Maps is installed but not enabled - enable it first.", 7000); return; }
              if (!Array.isArray(zm.settings.icons)) zm.settings.icons = [];
              var byKey = new Map(zm.settings.icons.map((i) => [i.key, i]));
              var added = 0, updated = 0;
              for (var k = 0; k < TF_ICON_LIBRARY.length; k++) {
                var ic = TF_ICON_LIBRARY[k];
                if (byKey.has(ic.key)) updated++; else added++;
                byKey.set(ic.key, ic);
              }
              zm.settings.icons = Array.from(byKey.values());
              await zm.saveSettings();
              new import_obsidian2.Notice("Town Forge: sent " + TF_ICON_LIBRARY.length + " pin icons to TTRPG Tools - Maps (" + added + " added, " + updated + " updated).");
            } catch (e) {
              new import_obsidian2.Notice("Town Forge: sending icons failed - " + (e && e.message ? e.message : String(e)), 8000);
            }
          })
        );
      })();
      new import_obsidian2.Setting(containerEl).setName("Export options").setHeading();
      new import_obsidian2.Setting(containerEl).setName("Open note after export").setDesc("After exporting, open the generated map note in the active pane.").addToggle(
        (toggle) => toggle.setValue(this.plugin.settings.openAfterExport).onChange(async (value) => {
          this.plugin.settings.openAfterExport = value;
          await this.plugin.saveSettings();
        })
      );
      new import_obsidian2.Setting(containerEl).setName("Group place notes by type").setDesc("Write each place note into a per-type subfolder inside the map folder (e.g. Steadwick/Shop/, Steadwick/Inn/) instead of all in one flat folder. The map note and image stay at the map-folder root, and pin links keep working.").addToggle(
        (toggle) => toggle.setValue(this.plugin.settings.groupNotesByType).onChange(async (value) => {
          this.plugin.settings.groupNotesByType = value;
          await this.plugin.saveSettings();
        })
      );
      this.renderPinTypes(containerEl);
    }
    containerEl.createEl("h3", { text: "Town Forge \u2014 panel" });
    new import_obsidian2.Setting(containerEl).setName("Show troubleshooting button").setDesc('Show the "\u{1F41E} Copy config for support" button in the Town Forge panel. Handy for bug reports. Off by default.').addToggle(
      (toggle) => toggle.setValue(this.plugin.settings.showTroubleshoot).onChange(async (value) => {
        this.plugin.settings.showTroubleshoot = value;
        await this.plugin.saveSettings();
        this.plugin.refreshOpenPanels();
      })
    );
  }
  // ---- Pin types editor (hybrid: structured rows + JSON advanced) ----------
  renderPinTypes(containerEl) {
    containerEl.createEl("h3", { text: "Town Forge \u2014 pin types" });
    containerEl.createEl("p", {
      text: "Each pin type places markers on the map and writes a note per place. Anchored types pin a real structure (castle, dock\u2026); sampled types scatter over houses (shops, inns\u2026). Counts are a random range; \u201Cscaled\u201D counts grow with settlement size. Names use built-in word lists by default, or a custom JS hook for power users.",
      cls: "setting-item-description"
    });
    const rowsHost = containerEl.createDiv();
    const redraw = () => {
      rowsHost.empty();
      this.plugin.settings.pinTypes.forEach((t, i) => this.renderPinTypeRow(rowsHost, t, i, redraw));
    };
    redraw();
    new import_obsidian2.Setting(containerEl).addButton((b) => b.setButtonText("Add pin type").onClick(async () => {
      this.plugin.settings.pinTypes.push(newCustomPinType());
      await this.plugin.saveSettings();
      redraw();
    })).addButton((b) => b.setButtonText("Reset to defaults").setWarning().onClick(async () => {
      this.plugin.settings.pinTypes = DEFAULT_PIN_TYPES.map((t) => ({ ...t }));
      await this.plugin.saveSettings();
      redraw();
      this.display();
    }));
    this.renderBuildingKey(containerEl);
    const details = containerEl.createEl("details");
    details.createEl("summary", { text: "Advanced: edit pin types as JSON" });
    details.createEl("p", { text: "Power users: edit the full config here (and write custom JS name hooks). In a hook, these are in scope: app, api (Randomness if installed), seed, town, type, index \u2014 return a string. Example: return (await api.rollUnscoped('ShopName')).result", cls: "setting-item-description" });
    const ta = details.createEl("textarea");
    ta.style.width = "100%";
    ta.style.minHeight = "220px";
    ta.style.fontFamily = "monospace";
    ta.value = pinTypesToJson(this.plugin.settings.pinTypes);
    const status = details.createEl("div", { cls: "setting-item-description" });
    const applyBtn = details.createEl("button", { text: "Apply JSON" });
    applyBtn.onclick = async () => {
      const { types, error } = parsePinTypesJson(ta.value);
      if (error || !types) {
        status.setText(`\u26A0 ${error ?? "Parse failed"}`);
        status.style.color = "var(--text-error)";
        return;
      }
      this.plugin.settings.pinTypes = types;
      await this.plugin.saveSettings();
      status.setText(`\u2713 Applied ${types.length} pin types`);
      status.style.color = "var(--text-success)";
      redraw();
    };
  }
  // Collapsible visual key: each drawn building, what it is, and the template
  // the anchoring pin type requests.
  renderBuildingKey(containerEl) {
    const details = containerEl.createEl("details");
    details.style.margin = "8px 0 14px";
    const summary = details.createEl("summary", { text: "Building key \u2014 what each map building is" });
    summary.style.cursor = "pointer";
    summary.style.fontWeight = "600";
    details.createEl("p", {
      text: "These are the buildings Town Forge draws on the map. Each row shows the building, what anchors to it, and the template note its pin type requests (named after the note type). Sampled types (shops, etc.) have no unique building \u2014 they sit on ordinary houses.",
      cls: "setting-item-description"
    });
    const byAnchor = /* @__PURE__ */ new Map();
    for (const t of this.plugin.settings.pinTypes) {
      if (!t.enabled)
        continue;
      if ((t.placement === "anchored" || t.placement === "both") && t.anchor && !byAnchor.has(t.anchor)) {
        byAnchor.set(t.anchor, t);
      }
    }
    const grid = details.createDiv();
    grid.style.display = "flex";
    grid.style.flexWrap = "wrap";
    grid.style.gap = "10px";
    for (const entry of BUILDING_KEY) {
      const card = grid.createDiv();
      card.style.width = "150px";
      card.style.border = "1px solid var(--background-modifier-border)";
      card.style.borderRadius = "8px";
      card.style.padding = "8px";
      card.style.background = "var(--background-secondary)";
      card.style.display = "flex";
      card.style.flexDirection = "column";
      card.style.gap = "4px";
      const img = card.createEl("img");
      img.src = BUILDING_IMAGES[entry.key] ?? "";
      img.style.width = "100%";
      img.style.borderRadius = "4px";
      img.style.imageRendering = "auto";
      const title = card.createEl("strong", { text: entry.label });
      title.style.fontSize = "0.85em";
      const desc = card.createEl("span", { text: entry.note });
      desc.style.fontSize = "0.72em";
      desc.style.opacity = "0.75";
      const pin = entry.anchor ? byAnchor.get(entry.anchor) : null;
      const mapping = card.createEl("span");
      mapping.style.fontSize = "0.72em";
      mapping.style.marginTop = "2px";
      if (entry.anchor && pin) {
        mapping.setText(`\u2192 ${pin.noteType} \xB7 template: ${pin.noteType}.md`);
      } else if (entry.anchor && !pin) {
        mapping.setText("\u2192 no enabled pin type");
        mapping.style.opacity = "0.6";
      } else {
        mapping.setText("\u2192 used by sampled types (shops, inns\u2026)");
        mapping.style.opacity = "0.6";
      }
    }
  }
  renderPinTypeRow(host, t, index, redraw) {
    const save = async () => {
      await this.plugin.saveSettings();
    };
    const card = host.createDiv();
    card.style.border = "1px solid var(--background-modifier-border)";
    card.style.borderRadius = "8px";
    card.style.padding = "10px 12px";
    card.style.marginBottom = "8px";
    card.style.background = "var(--background-secondary)";
    const header = card.createDiv();
    header.style.display = "flex";
    header.style.alignItems = "center";
    header.style.gap = "8px";
    header.style.marginBottom = "8px";
    const enable = header.createEl("input", { type: "checkbox" });
    enable.checked = t.enabled;
    enable.title = "Enabled";
    enable.onchange = async () => {
      t.enabled = enable.checked;
      await save();
    };
    const heading = header.createEl("strong", { text: t.noteType || "(unnamed)" });
    heading.style.flex = "1";
    heading.style.fontSize = "1em";
    const badge = header.createEl("span", { text: t.placement });
    badge.style.fontSize = "0.75em";
    badge.style.opacity = "0.7";
    badge.style.padding = "1px 6px";
    badge.style.border = "1px solid var(--background-modifier-border)";
    badge.style.borderRadius = "10px";
    const del = header.createEl("button", { text: "Remove" });
    del.style.fontSize = "0.8em";
    del.onclick = async () => {
      this.plugin.settings.pinTypes.splice(index, 1);
      await save();
      redraw();
    };
    const grid = card.createDiv();
    grid.style.display = "flex";
    grid.style.flexWrap = "wrap";
    grid.style.gap = "10px 14px";
    grid.style.alignItems = "flex-end";
    const field = (label, widthEm) => {
      const wrap = grid.createDiv();
      wrap.style.display = "flex";
      wrap.style.flexDirection = "column";
      wrap.style.gap = "2px";
      wrap.style.minWidth = `${widthEm}em`;
      const lab = wrap.createEl("label", { text: label });
      lab.style.fontSize = "0.72em";
      lab.style.opacity = "0.7";
      return wrap;
    };
    const noteTypeWrap = field("Note type", 9);
    const noteTypeInput = noteTypeWrap.createEl("input", { type: "text", value: t.noteType });
    noteTypeInput.style.width = "100%";
    noteTypeInput.onchange = async () => {
      t.noteType = noteTypeInput.value.trim() || t.noteType;
      heading.setText(t.noteType);
      await save();
    };
    const iconWrap = field("Pin icon (Zoom Map key)", 11);
    const iconInput = iconWrap.createEl("input", { type: "text", value: t.icon });
    iconInput.style.width = "100%";
    iconInput.onchange = async () => {
      t.icon = iconInput.value.trim() || t.icon;
      await save();
    };
    const layerWrap = field("Layer", 9);
    const layerInput = layerWrap.createEl("input", { type: "text", value: t.layerName });
    layerInput.style.width = "100%";
    layerInput.onchange = async () => {
      t.layerName = layerInput.value.trim() || t.layerName;
      await save();
    };
    const minWrap = field("Min", 4);
    const minInput = minWrap.createEl("input", { type: "number", value: String(t.countMin) });
    minInput.style.width = "100%";
    minInput.onchange = async () => {
      t.countMin = Math.max(0, parseInt(minInput.value) || 0);
      await save();
    };
    const maxWrap = field("Max", 4);
    const maxInput = maxWrap.createEl("input", { type: "number", value: String(t.countMax) });
    maxInput.style.width = "100%";
    maxInput.onchange = async () => {
      t.countMax = Math.max(t.countMin, parseInt(maxInput.value) || t.countMin);
      await save();
    };
    const modeWrap = field("Count mode", 7);
    const modeSel = modeWrap.createEl("select");
    modeSel.style.width = "100%";
    for (const m of ["scaled", "fixed"]) {
      const o = modeSel.createEl("option", { text: m, value: m });
      if (t.countMode === m)
        o.selected = true;
    }
    modeSel.onchange = async () => {
      t.countMode = modeSel.value;
      await save();
    };
    const placeWrap = field("Placement", 8);
    const placeSel = placeWrap.createEl("select");
    placeSel.style.width = "100%";
    for (const p of ["sampled", "anchored", "both"]) {
      const o = placeSel.createEl("option", { text: p, value: p });
      if (t.placement === p)
        o.selected = true;
    }
    placeSel.onchange = async () => {
      t.placement = placeSel.value;
      badge.setText(t.placement);
      await save();
      redraw();
    };
    if (t.placement === "anchored" || t.placement === "both") {
      const anchorWrap = field("Anchor (real structure)", 10);
      const anchorSel = anchorWrap.createEl("select");
      anchorSel.style.width = "100%";
      const anchors = ["castle", "cathedral", "market", "barracks", "dock", "mill", "stable", "inn", "tower", "generic", "farm"];
      for (const a of anchors) {
        const o = anchorSel.createEl("option", { text: a, value: a });
        if (t.anchor === a)
          o.selected = true;
      }
      if (!t.anchor)
        anchorSel.selectedIndex = 0;
      anchorSel.onchange = async () => {
        t.anchor = anchorSel.value;
        await save();
      };
    }
    const nameWrap = field("Naming", 8);
    const nameSel = nameWrap.createEl("select");
    nameSel.style.width = "100%";
    for (const nm of [["builtin", "built-in"], ["js", "custom JS"]]) {
      const o = nameSel.createEl("option", { text: nm[1], value: nm[0] });
      if (t.nameMode === nm[0])
        o.selected = true;
    }
    nameSel.onchange = async () => {
      t.nameMode = nameSel.value;
      await save();
      redraw();
    };
    if (t.nameMode === "js") {
      const jsWrap = card.createDiv();
      jsWrap.style.marginTop = "8px";
      const lab = jsWrap.createEl("label", { text: "Name JS \u2014 in scope: app, api, seed, town, type, index, subtypes \u2014 return a string, or { name, subtype } to set both" });
      lab.style.fontSize = "0.72em";
      lab.style.opacity = "0.7";
      lab.style.display = "block";
      lab.style.marginBottom = "2px";
      const ta = jsWrap.createEl("textarea");
      ta.value = t.nameJs ?? "";
      ta.placeholder = `const [subtype, name] = (await api.rollUnscoped("TF-ShopPick")).result.split("|");
return { name, subtype };`;
      ta.style.width = "100%";
      ta.style.minHeight = "54px";
      ta.style.fontFamily = "monospace";
      ta.style.fontSize = "0.8em";
      ta.onchange = async () => {
        t.nameJs = ta.value;
        await save();
      };
    }
    const subWrap = card.createDiv();
    subWrap.style.marginTop = "8px";
    const subLab = subWrap.createEl("label", { text: "Subtypes (comma-separated) \u2014 written to frontmatter as subtype:. The JS hook returning { name, subtype } keeps name+subtype correlated; the built-in picks from this list but does not guarantee a match." });
    subLab.style.fontSize = "0.72em";
    subLab.style.opacity = "0.7";
    subLab.style.display = "block";
    subLab.style.marginBottom = "2px";
    const subIn = subWrap.createEl("input", { type: "text" });
    subIn.value = (t.subtypes ?? []).join(", ");
    subIn.placeholder = "e.g. general, weapon, armor, alchemy, magic";
    subIn.style.width = "100%";
    subIn.style.fontSize = "0.8em";
    subIn.onchange = async () => {
      const arr = subIn.value.split(",").map((s) => s.trim()).filter((s) => s.length);
      t.subtypes = arr.length ? arr : void 0;
      await save();
    };
  }
};

/* nosourcemap */