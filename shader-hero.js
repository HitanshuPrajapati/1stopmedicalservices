// Animated WebGL plasma-line background for provider hero sections.
// Colors are read from data attributes on #hero-canvas:
//   data-bg1="r,g,b"  — dark background color
//   data-bg2="r,g,b"  — light background color (gradient across x)
//   data-lc="r,g,b"   — animated line color
(function () {
  var c = document.getElementById('hero-canvas');
  if (!c) return;
  var gl = c.getContext('webgl');
  if (!gl) return;

  var bg1 = (c.dataset.bg1 || '0.05,0.10,0.30').split(',').map(Number);
  var bg2 = (c.dataset.bg2 || '0.10,0.20,0.50').split(',').map(Number);
  var lc  = (c.dataset.lc  || '0.30,0.60,1.00').split(',').map(Number);

  var vsSource = 'attribute vec4 aVertexPosition;void main(){gl_Position=aVertexPosition;}';

  var fsLines = [
    'precision highp float;',
    'uniform vec2 iResolution;',
    'uniform float iTime;',
    'uniform vec3 uBg1;',
    'uniform vec3 uBg2;',
    'uniform vec3 uLine;',
    'const float overallSpeed = 0.2;',
    'const float gridSmoothWidth = 0.015;',
    'const float axisWidth = 0.05;',
    'const float majorLineWidth = 0.025;',
    'const float minorLineWidth = 0.0125;',
    'const float majorLineFrequency = 5.0;',
    'const float minorLineFrequency = 1.0;',
    'const float scale = 5.0;',
    'const float minLineWidth = 0.01;',
    'const float maxLineWidth = 0.2;',
    'const float lineSpeed = 1.0 * overallSpeed;',
    'const float lineAmplitude = 0.08;',
    'const float lineFrequency = 1.2;',
    'const float warpSpeed = 0.2 * overallSpeed;',
    'const float warpFrequency = 0.5;',
    'const float warpAmplitude = 1.0;',
    'const float offsetFrequency = 0.5;',
    'const float offsetSpeed = 1.33 * overallSpeed;',
    'const float minOffsetSpread = 0.3;',
    'const float maxOffsetSpread = 1.2;',
    'const int linesPerGroup = 4;',
    '#define drawCircle(pos, radius, coord) smoothstep(radius + gridSmoothWidth, radius, length(coord - (pos)))',
    '#define drawSmoothLine(pos, halfWidth, t) smoothstep(halfWidth, 0.0, abs(pos - (t)))',
    '#define drawCrispLine(pos, halfWidth, t) smoothstep(halfWidth + gridSmoothWidth, halfWidth, abs(pos - (t)))',
    '#define drawPeriodicLine(freq, width, t) drawCrispLine(freq / 2.0, width, abs(mod(t, freq) - (freq) / 2.0))',
    'float drawGridLines(float axis) {',
    '  return drawCrispLine(0.0, axisWidth, axis)',
    '       + drawPeriodicLine(majorLineFrequency, majorLineWidth, axis)',
    '       + drawPeriodicLine(minorLineFrequency, minorLineWidth, axis);',
    '}',
    'float random(float t) {',
    '  return (cos(t) + cos(t * 1.3 + 1.3) + cos(t * 1.4 + 1.4)) / 3.0;',
    '}',
    'float getPlasmaY(float x, float hf, float offset) {',
    '  return random(x * lineFrequency + iTime * lineSpeed) * hf * lineAmplitude + offset;',
    '}',
    'void main() {',
    '  vec2 uv = gl_FragCoord.xy / iResolution.xy;',
    '  vec2 space = (gl_FragCoord.xy - iResolution.xy / 2.0) / iResolution.x * 2.0 * scale;',
    '  float hf = 1.0 - (cos(uv.x * 6.28) * 0.5 + 0.5);',
    '  float vf = 1.0 - (cos(uv.y * 6.28) * 0.5 + 0.5);',
    '  space.y += random(space.x * warpFrequency + iTime * warpSpeed) * warpAmplitude * (0.5 + hf);',
    '  space.x += random(space.y * warpFrequency + iTime * warpSpeed + 2.0) * warpAmplitude * hf;',
    '  vec4 lines = vec4(0.0);',
    '  vec4 lineColor = vec4(uLine, 1.0);',
    '  for (int l = 0; l < linesPerGroup; l++) {',
    '    float ni = float(l) / float(linesPerGroup);',
    '    float ot = iTime * offsetSpeed;',
    '    float op = float(l) + space.x * offsetFrequency;',
    '    float rand = random(op + ot) * 0.5 + 0.5;',
    '    float hw = mix(minLineWidth, maxLineWidth, rand * hf) / 2.0;',
    '    float offset = random(op + ot * (1.0 + ni)) * mix(minOffsetSpread, maxOffsetSpread, hf);',
    '    float refl = step(0.5, mod(float(l), 2.0));',
    '    float signedOff = offset * (1.0 - 2.0 * refl);',
    '    float lpos = getPlasmaY(space.x, hf, signedOff);',
    '    float line = drawSmoothLine(lpos, hw, space.y) / 2.0 + drawCrispLine(lpos, hw * 0.15, space.y);',
    '    float cx = mod(float(l) + iTime * lineSpeed, 25.0) - 12.0;',
    '    float circle = drawCircle(vec2(cx, getPlasmaY(cx, hf, signedOff)), 0.01, space) * 4.0;',
    '    lines += (line + circle) * lineColor * rand;',
    '  }',
    '  vec4 col = mix(vec4(uBg1, 1.0), vec4(uBg2, 1.0), uv.x);',
    '  col *= vf;',
    '  col.a = 1.0;',
    '  col += lines;',
    '  gl_FragColor = col;',
    '}'
  ];
  var fsSource = fsLines.join('\n');

  function compileShader(type, src) {
    var s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
      console.error('Shader error:', gl.getShaderInfoLog(s));
      gl.deleteShader(s);
      return null;
    }
    return s;
  }

  var prog = gl.createProgram();
  gl.attachShader(prog, compileShader(gl.VERTEX_SHADER, vsSource));
  gl.attachShader(prog, compileShader(gl.FRAGMENT_SHADER, fsSource));
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
    console.error('Program link error:', gl.getProgramInfoLog(prog));
    return;
  }

  var buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);

  var aPos  = gl.getAttribLocation(prog, 'aVertexPosition');
  var uRes  = gl.getUniformLocation(prog, 'iResolution');
  var uTime = gl.getUniformLocation(prog, 'iTime');
  var uBg1L = gl.getUniformLocation(prog, 'uBg1');
  var uBg2L = gl.getUniformLocation(prog, 'uBg2');
  var uLineL= gl.getUniformLocation(prog, 'uLine');

  function resize() {
    var parent = c.parentElement;
    c.width  = parent.offsetWidth  || 800;
    c.height = parent.offsetHeight || 500;
    gl.viewport(0, 0, c.width, c.height);
  }
  window.addEventListener('resize', resize);
  window.addEventListener('load', resize);
  resize();

  var t0 = Date.now();
  function render() {
    var t = (Date.now() - t0) / 1000;
    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.useProgram(prog);
    gl.uniform2f(uRes, c.width, c.height);
    gl.uniform1f(uTime, t);
    gl.uniform3fv(uBg1L, bg1);
    gl.uniform3fv(uBg2L, bg2);
    gl.uniform3fv(uLineL, lc);
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(aPos);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
})();
