(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-home-home-module"],{

/***/ "./node_modules/color-convert/conversions.js":
/*!***************************************************!*\
  !*** ./node_modules/color-convert/conversions.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* MIT license */
var cssKeywords = __webpack_require__(/*! color-name */ "./node_modules/color-name/index.js");

// NOTE: conversions should only return primitive values (i.e. arrays, or
//       values that give correct `typeof` results).
//       do not use box values types (i.e. Number(), String(), etc.)

var reverseKeywords = {};
for (var key in cssKeywords) {
	if (cssKeywords.hasOwnProperty(key)) {
		reverseKeywords[cssKeywords[key]] = key;
	}
}

var convert = module.exports = {
	rgb: {channels: 3, labels: 'rgb'},
	hsl: {channels: 3, labels: 'hsl'},
	hsv: {channels: 3, labels: 'hsv'},
	hwb: {channels: 3, labels: 'hwb'},
	cmyk: {channels: 4, labels: 'cmyk'},
	xyz: {channels: 3, labels: 'xyz'},
	lab: {channels: 3, labels: 'lab'},
	lch: {channels: 3, labels: 'lch'},
	hex: {channels: 1, labels: ['hex']},
	keyword: {channels: 1, labels: ['keyword']},
	ansi16: {channels: 1, labels: ['ansi16']},
	ansi256: {channels: 1, labels: ['ansi256']},
	hcg: {channels: 3, labels: ['h', 'c', 'g']},
	apple: {channels: 3, labels: ['r16', 'g16', 'b16']},
	gray: {channels: 1, labels: ['gray']}
};

// hide .channels and .labels properties
for (var model in convert) {
	if (convert.hasOwnProperty(model)) {
		if (!('channels' in convert[model])) {
			throw new Error('missing channels property: ' + model);
		}

		if (!('labels' in convert[model])) {
			throw new Error('missing channel labels property: ' + model);
		}

		if (convert[model].labels.length !== convert[model].channels) {
			throw new Error('channel and label counts mismatch: ' + model);
		}

		var channels = convert[model].channels;
		var labels = convert[model].labels;
		delete convert[model].channels;
		delete convert[model].labels;
		Object.defineProperty(convert[model], 'channels', {value: channels});
		Object.defineProperty(convert[model], 'labels', {value: labels});
	}
}

convert.rgb.hsl = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var min = Math.min(r, g, b);
	var max = Math.max(r, g, b);
	var delta = max - min;
	var h;
	var s;
	var l;

	if (max === min) {
		h = 0;
	} else if (r === max) {
		h = (g - b) / delta;
	} else if (g === max) {
		h = 2 + (b - r) / delta;
	} else if (b === max) {
		h = 4 + (r - g) / delta;
	}

	h = Math.min(h * 60, 360);

	if (h < 0) {
		h += 360;
	}

	l = (min + max) / 2;

	if (max === min) {
		s = 0;
	} else if (l <= 0.5) {
		s = delta / (max + min);
	} else {
		s = delta / (2 - max - min);
	}

	return [h, s * 100, l * 100];
};

convert.rgb.hsv = function (rgb) {
	var rdif;
	var gdif;
	var bdif;
	var h;
	var s;

	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var v = Math.max(r, g, b);
	var diff = v - Math.min(r, g, b);
	var diffc = function (c) {
		return (v - c) / 6 / diff + 1 / 2;
	};

	if (diff === 0) {
		h = s = 0;
	} else {
		s = diff / v;
		rdif = diffc(r);
		gdif = diffc(g);
		bdif = diffc(b);

		if (r === v) {
			h = bdif - gdif;
		} else if (g === v) {
			h = (1 / 3) + rdif - bdif;
		} else if (b === v) {
			h = (2 / 3) + gdif - rdif;
		}
		if (h < 0) {
			h += 1;
		} else if (h > 1) {
			h -= 1;
		}
	}

	return [
		h * 360,
		s * 100,
		v * 100
	];
};

convert.rgb.hwb = function (rgb) {
	var r = rgb[0];
	var g = rgb[1];
	var b = rgb[2];
	var h = convert.rgb.hsl(rgb)[0];
	var w = 1 / 255 * Math.min(r, Math.min(g, b));

	b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));

	return [h, w * 100, b * 100];
};

convert.rgb.cmyk = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var c;
	var m;
	var y;
	var k;

	k = Math.min(1 - r, 1 - g, 1 - b);
	c = (1 - r - k) / (1 - k) || 0;
	m = (1 - g - k) / (1 - k) || 0;
	y = (1 - b - k) / (1 - k) || 0;

	return [c * 100, m * 100, y * 100, k * 100];
};

/**
 * See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
 * */
function comparativeDistance(x, y) {
	return (
		Math.pow(x[0] - y[0], 2) +
		Math.pow(x[1] - y[1], 2) +
		Math.pow(x[2] - y[2], 2)
	);
}

convert.rgb.keyword = function (rgb) {
	var reversed = reverseKeywords[rgb];
	if (reversed) {
		return reversed;
	}

	var currentClosestDistance = Infinity;
	var currentClosestKeyword;

	for (var keyword in cssKeywords) {
		if (cssKeywords.hasOwnProperty(keyword)) {
			var value = cssKeywords[keyword];

			// Compute comparative distance
			var distance = comparativeDistance(rgb, value);

			// Check if its less, if so set as closest
			if (distance < currentClosestDistance) {
				currentClosestDistance = distance;
				currentClosestKeyword = keyword;
			}
		}
	}

	return currentClosestKeyword;
};

convert.keyword.rgb = function (keyword) {
	return cssKeywords[keyword];
};

convert.rgb.xyz = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;

	// assume sRGB
	r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
	g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
	b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);

	var x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
	var y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
	var z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

	return [x * 100, y * 100, z * 100];
};

convert.rgb.lab = function (rgb) {
	var xyz = convert.rgb.xyz(rgb);
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.hsl.rgb = function (hsl) {
	var h = hsl[0] / 360;
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var t1;
	var t2;
	var t3;
	var rgb;
	var val;

	if (s === 0) {
		val = l * 255;
		return [val, val, val];
	}

	if (l < 0.5) {
		t2 = l * (1 + s);
	} else {
		t2 = l + s - l * s;
	}

	t1 = 2 * l - t2;

	rgb = [0, 0, 0];
	for (var i = 0; i < 3; i++) {
		t3 = h + 1 / 3 * -(i - 1);
		if (t3 < 0) {
			t3++;
		}
		if (t3 > 1) {
			t3--;
		}

		if (6 * t3 < 1) {
			val = t1 + (t2 - t1) * 6 * t3;
		} else if (2 * t3 < 1) {
			val = t2;
		} else if (3 * t3 < 2) {
			val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
		} else {
			val = t1;
		}

		rgb[i] = val * 255;
	}

	return rgb;
};

convert.hsl.hsv = function (hsl) {
	var h = hsl[0];
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var smin = s;
	var lmin = Math.max(l, 0.01);
	var sv;
	var v;

	l *= 2;
	s *= (l <= 1) ? l : 2 - l;
	smin *= lmin <= 1 ? lmin : 2 - lmin;
	v = (l + s) / 2;
	sv = l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s);

	return [h, sv * 100, v * 100];
};

convert.hsv.rgb = function (hsv) {
	var h = hsv[0] / 60;
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var hi = Math.floor(h) % 6;

	var f = h - Math.floor(h);
	var p = 255 * v * (1 - s);
	var q = 255 * v * (1 - (s * f));
	var t = 255 * v * (1 - (s * (1 - f)));
	v *= 255;

	switch (hi) {
		case 0:
			return [v, t, p];
		case 1:
			return [q, v, p];
		case 2:
			return [p, v, t];
		case 3:
			return [p, q, v];
		case 4:
			return [t, p, v];
		case 5:
			return [v, p, q];
	}
};

convert.hsv.hsl = function (hsv) {
	var h = hsv[0];
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var vmin = Math.max(v, 0.01);
	var lmin;
	var sl;
	var l;

	l = (2 - s) * v;
	lmin = (2 - s) * vmin;
	sl = s * vmin;
	sl /= (lmin <= 1) ? lmin : 2 - lmin;
	sl = sl || 0;
	l /= 2;

	return [h, sl * 100, l * 100];
};

// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
convert.hwb.rgb = function (hwb) {
	var h = hwb[0] / 360;
	var wh = hwb[1] / 100;
	var bl = hwb[2] / 100;
	var ratio = wh + bl;
	var i;
	var v;
	var f;
	var n;

	// wh + bl cant be > 1
	if (ratio > 1) {
		wh /= ratio;
		bl /= ratio;
	}

	i = Math.floor(6 * h);
	v = 1 - bl;
	f = 6 * h - i;

	if ((i & 0x01) !== 0) {
		f = 1 - f;
	}

	n = wh + f * (v - wh); // linear interpolation

	var r;
	var g;
	var b;
	switch (i) {
		default:
		case 6:
		case 0: r = v; g = n; b = wh; break;
		case 1: r = n; g = v; b = wh; break;
		case 2: r = wh; g = v; b = n; break;
		case 3: r = wh; g = n; b = v; break;
		case 4: r = n; g = wh; b = v; break;
		case 5: r = v; g = wh; b = n; break;
	}

	return [r * 255, g * 255, b * 255];
};

convert.cmyk.rgb = function (cmyk) {
	var c = cmyk[0] / 100;
	var m = cmyk[1] / 100;
	var y = cmyk[2] / 100;
	var k = cmyk[3] / 100;
	var r;
	var g;
	var b;

	r = 1 - Math.min(1, c * (1 - k) + k);
	g = 1 - Math.min(1, m * (1 - k) + k);
	b = 1 - Math.min(1, y * (1 - k) + k);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.rgb = function (xyz) {
	var x = xyz[0] / 100;
	var y = xyz[1] / 100;
	var z = xyz[2] / 100;
	var r;
	var g;
	var b;

	r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
	g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
	b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

	// assume sRGB
	r = r > 0.0031308
		? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055)
		: r * 12.92;

	g = g > 0.0031308
		? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055)
		: g * 12.92;

	b = b > 0.0031308
		? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055)
		: b * 12.92;

	r = Math.min(Math.max(0, r), 1);
	g = Math.min(Math.max(0, g), 1);
	b = Math.min(Math.max(0, b), 1);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.lab = function (xyz) {
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.lab.xyz = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var x;
	var y;
	var z;

	y = (l + 16) / 116;
	x = a / 500 + y;
	z = y - b / 200;

	var y2 = Math.pow(y, 3);
	var x2 = Math.pow(x, 3);
	var z2 = Math.pow(z, 3);
	y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
	x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
	z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;

	x *= 95.047;
	y *= 100;
	z *= 108.883;

	return [x, y, z];
};

convert.lab.lch = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var hr;
	var h;
	var c;

	hr = Math.atan2(b, a);
	h = hr * 360 / 2 / Math.PI;

	if (h < 0) {
		h += 360;
	}

	c = Math.sqrt(a * a + b * b);

	return [l, c, h];
};

convert.lch.lab = function (lch) {
	var l = lch[0];
	var c = lch[1];
	var h = lch[2];
	var a;
	var b;
	var hr;

	hr = h / 360 * 2 * Math.PI;
	a = c * Math.cos(hr);
	b = c * Math.sin(hr);

	return [l, a, b];
};

convert.rgb.ansi16 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];
	var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2]; // hsv -> ansi16 optimization

	value = Math.round(value / 50);

	if (value === 0) {
		return 30;
	}

	var ansi = 30
		+ ((Math.round(b / 255) << 2)
		| (Math.round(g / 255) << 1)
		| Math.round(r / 255));

	if (value === 2) {
		ansi += 60;
	}

	return ansi;
};

convert.hsv.ansi16 = function (args) {
	// optimization here; we already know the value and don't need to get
	// it converted for us.
	return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
};

convert.rgb.ansi256 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];

	// we use the extended greyscale palette here, with the exception of
	// black and white. normal palette only has 4 greyscale shades.
	if (r === g && g === b) {
		if (r < 8) {
			return 16;
		}

		if (r > 248) {
			return 231;
		}

		return Math.round(((r - 8) / 247) * 24) + 232;
	}

	var ansi = 16
		+ (36 * Math.round(r / 255 * 5))
		+ (6 * Math.round(g / 255 * 5))
		+ Math.round(b / 255 * 5);

	return ansi;
};

convert.ansi16.rgb = function (args) {
	var color = args % 10;

	// handle greyscale
	if (color === 0 || color === 7) {
		if (args > 50) {
			color += 3.5;
		}

		color = color / 10.5 * 255;

		return [color, color, color];
	}

	var mult = (~~(args > 50) + 1) * 0.5;
	var r = ((color & 1) * mult) * 255;
	var g = (((color >> 1) & 1) * mult) * 255;
	var b = (((color >> 2) & 1) * mult) * 255;

	return [r, g, b];
};

convert.ansi256.rgb = function (args) {
	// handle greyscale
	if (args >= 232) {
		var c = (args - 232) * 10 + 8;
		return [c, c, c];
	}

	args -= 16;

	var rem;
	var r = Math.floor(args / 36) / 5 * 255;
	var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
	var b = (rem % 6) / 5 * 255;

	return [r, g, b];
};

convert.rgb.hex = function (args) {
	var integer = ((Math.round(args[0]) & 0xFF) << 16)
		+ ((Math.round(args[1]) & 0xFF) << 8)
		+ (Math.round(args[2]) & 0xFF);

	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.hex.rgb = function (args) {
	var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
	if (!match) {
		return [0, 0, 0];
	}

	var colorString = match[0];

	if (match[0].length === 3) {
		colorString = colorString.split('').map(function (char) {
			return char + char;
		}).join('');
	}

	var integer = parseInt(colorString, 16);
	var r = (integer >> 16) & 0xFF;
	var g = (integer >> 8) & 0xFF;
	var b = integer & 0xFF;

	return [r, g, b];
};

convert.rgb.hcg = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var max = Math.max(Math.max(r, g), b);
	var min = Math.min(Math.min(r, g), b);
	var chroma = (max - min);
	var grayscale;
	var hue;

	if (chroma < 1) {
		grayscale = min / (1 - chroma);
	} else {
		grayscale = 0;
	}

	if (chroma <= 0) {
		hue = 0;
	} else
	if (max === r) {
		hue = ((g - b) / chroma) % 6;
	} else
	if (max === g) {
		hue = 2 + (b - r) / chroma;
	} else {
		hue = 4 + (r - g) / chroma + 4;
	}

	hue /= 6;
	hue %= 1;

	return [hue * 360, chroma * 100, grayscale * 100];
};

convert.hsl.hcg = function (hsl) {
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var c = 1;
	var f = 0;

	if (l < 0.5) {
		c = 2.0 * s * l;
	} else {
		c = 2.0 * s * (1.0 - l);
	}

	if (c < 1.0) {
		f = (l - 0.5 * c) / (1.0 - c);
	}

	return [hsl[0], c * 100, f * 100];
};

convert.hsv.hcg = function (hsv) {
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;

	var c = s * v;
	var f = 0;

	if (c < 1.0) {
		f = (v - c) / (1 - c);
	}

	return [hsv[0], c * 100, f * 100];
};

convert.hcg.rgb = function (hcg) {
	var h = hcg[0] / 360;
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	if (c === 0.0) {
		return [g * 255, g * 255, g * 255];
	}

	var pure = [0, 0, 0];
	var hi = (h % 1) * 6;
	var v = hi % 1;
	var w = 1 - v;
	var mg = 0;

	switch (Math.floor(hi)) {
		case 0:
			pure[0] = 1; pure[1] = v; pure[2] = 0; break;
		case 1:
			pure[0] = w; pure[1] = 1; pure[2] = 0; break;
		case 2:
			pure[0] = 0; pure[1] = 1; pure[2] = v; break;
		case 3:
			pure[0] = 0; pure[1] = w; pure[2] = 1; break;
		case 4:
			pure[0] = v; pure[1] = 0; pure[2] = 1; break;
		default:
			pure[0] = 1; pure[1] = 0; pure[2] = w;
	}

	mg = (1.0 - c) * g;

	return [
		(c * pure[0] + mg) * 255,
		(c * pure[1] + mg) * 255,
		(c * pure[2] + mg) * 255
	];
};

convert.hcg.hsv = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var v = c + g * (1.0 - c);
	var f = 0;

	if (v > 0.0) {
		f = c / v;
	}

	return [hcg[0], f * 100, v * 100];
};

convert.hcg.hsl = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var l = g * (1.0 - c) + 0.5 * c;
	var s = 0;

	if (l > 0.0 && l < 0.5) {
		s = c / (2 * l);
	} else
	if (l >= 0.5 && l < 1.0) {
		s = c / (2 * (1 - l));
	}

	return [hcg[0], s * 100, l * 100];
};

convert.hcg.hwb = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;
	var v = c + g * (1.0 - c);
	return [hcg[0], (v - c) * 100, (1 - v) * 100];
};

convert.hwb.hcg = function (hwb) {
	var w = hwb[1] / 100;
	var b = hwb[2] / 100;
	var v = 1 - b;
	var c = v - w;
	var g = 0;

	if (c < 1) {
		g = (v - c) / (1 - c);
	}

	return [hwb[0], c * 100, g * 100];
};

convert.apple.rgb = function (apple) {
	return [(apple[0] / 65535) * 255, (apple[1] / 65535) * 255, (apple[2] / 65535) * 255];
};

convert.rgb.apple = function (rgb) {
	return [(rgb[0] / 255) * 65535, (rgb[1] / 255) * 65535, (rgb[2] / 255) * 65535];
};

convert.gray.rgb = function (args) {
	return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
};

convert.gray.hsl = convert.gray.hsv = function (args) {
	return [0, 0, args[0]];
};

convert.gray.hwb = function (gray) {
	return [0, 100, gray[0]];
};

convert.gray.cmyk = function (gray) {
	return [0, 0, 0, gray[0]];
};

convert.gray.lab = function (gray) {
	return [gray[0], 0, 0];
};

convert.gray.hex = function (gray) {
	var val = Math.round(gray[0] / 100 * 255) & 0xFF;
	var integer = (val << 16) + (val << 8) + val;

	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.rgb.gray = function (rgb) {
	var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
	return [val / 255 * 100];
};


/***/ }),

/***/ "./node_modules/color-convert/index.js":
/*!*********************************************!*\
  !*** ./node_modules/color-convert/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var conversions = __webpack_require__(/*! ./conversions */ "./node_modules/color-convert/conversions.js");
var route = __webpack_require__(/*! ./route */ "./node_modules/color-convert/route.js");

var convert = {};

var models = Object.keys(conversions);

function wrapRaw(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		return fn(args);
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

function wrapRounded(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		var result = fn(args);

		// we're assuming the result is an array here.
		// see notice in conversions.js; don't use box types
		// in conversion functions.
		if (typeof result === 'object') {
			for (var len = result.length, i = 0; i < len; i++) {
				result[i] = Math.round(result[i]);
			}
		}

		return result;
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

models.forEach(function (fromModel) {
	convert[fromModel] = {};

	Object.defineProperty(convert[fromModel], 'channels', {value: conversions[fromModel].channels});
	Object.defineProperty(convert[fromModel], 'labels', {value: conversions[fromModel].labels});

	var routes = route(fromModel);
	var routeModels = Object.keys(routes);

	routeModels.forEach(function (toModel) {
		var fn = routes[toModel];

		convert[fromModel][toModel] = wrapRounded(fn);
		convert[fromModel][toModel].raw = wrapRaw(fn);
	});
});

module.exports = convert;


/***/ }),

/***/ "./node_modules/color-convert/route.js":
/*!*********************************************!*\
  !*** ./node_modules/color-convert/route.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var conversions = __webpack_require__(/*! ./conversions */ "./node_modules/color-convert/conversions.js");

/*
	this function routes a model to all other models.

	all functions that are routed have a property `.conversion` attached
	to the returned synthetic function. This property is an array
	of strings, each with the steps in between the 'from' and 'to'
	color models (inclusive).

	conversions that are not possible simply are not included.
*/

function buildGraph() {
	var graph = {};
	// https://jsperf.com/object-keys-vs-for-in-with-closure/3
	var models = Object.keys(conversions);

	for (var len = models.length, i = 0; i < len; i++) {
		graph[models[i]] = {
			// http://jsperf.com/1-vs-infinity
			// micro-opt, but this is simple.
			distance: -1,
			parent: null
		};
	}

	return graph;
}

// https://en.wikipedia.org/wiki/Breadth-first_search
function deriveBFS(fromModel) {
	var graph = buildGraph();
	var queue = [fromModel]; // unshift -> queue -> pop

	graph[fromModel].distance = 0;

	while (queue.length) {
		var current = queue.pop();
		var adjacents = Object.keys(conversions[current]);

		for (var len = adjacents.length, i = 0; i < len; i++) {
			var adjacent = adjacents[i];
			var node = graph[adjacent];

			if (node.distance === -1) {
				node.distance = graph[current].distance + 1;
				node.parent = current;
				queue.unshift(adjacent);
			}
		}
	}

	return graph;
}

function link(from, to) {
	return function (args) {
		return to(from(args));
	};
}

function wrapConversion(toModel, graph) {
	var path = [graph[toModel].parent, toModel];
	var fn = conversions[graph[toModel].parent][toModel];

	var cur = graph[toModel].parent;
	while (graph[cur].parent) {
		path.unshift(graph[cur].parent);
		fn = link(conversions[graph[cur].parent][cur], fn);
		cur = graph[cur].parent;
	}

	fn.conversion = path;
	return fn;
}

module.exports = function (fromModel) {
	var graph = deriveBFS(fromModel);
	var conversion = {};

	var models = Object.keys(graph);
	for (var len = models.length, i = 0; i < len; i++) {
		var toModel = models[i];
		var node = graph[toModel];

		if (node.parent === null) {
			// no possible conversion, or this node is the source model.
			continue;
		}

		conversion[toModel] = wrapConversion(toModel, graph);
	}

	return conversion;
};



/***/ }),

/***/ "./node_modules/color-name/index.js":
/*!******************************************!*\
  !*** ./node_modules/color-name/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};


/***/ }),

/***/ "./node_modules/color-string/index.js":
/*!********************************************!*\
  !*** ./node_modules/color-string/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* MIT license */
var colorNames = __webpack_require__(/*! color-name */ "./node_modules/color-name/index.js");
var swizzle = __webpack_require__(/*! simple-swizzle */ "./node_modules/simple-swizzle/index.js");

var reverseNames = {};

// create a list of reverse color names
for (var name in colorNames) {
	if (colorNames.hasOwnProperty(name)) {
		reverseNames[colorNames[name]] = name;
	}
}

var cs = module.exports = {
	to: {},
	get: {}
};

cs.get = function (string) {
	var prefix = string.substring(0, 3).toLowerCase();
	var val;
	var model;
	switch (prefix) {
		case 'hsl':
			val = cs.get.hsl(string);
			model = 'hsl';
			break;
		case 'hwb':
			val = cs.get.hwb(string);
			model = 'hwb';
			break;
		default:
			val = cs.get.rgb(string);
			model = 'rgb';
			break;
	}

	if (!val) {
		return null;
	}

	return {model: model, value: val};
};

cs.get.rgb = function (string) {
	if (!string) {
		return null;
	}

	var abbr = /^#([a-f0-9]{3,4})$/i;
	var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
	var rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var keyword = /(\D+)/;

	var rgb = [0, 0, 0, 1];
	var match;
	var i;
	var hexAlpha;

	if (match = string.match(hex)) {
		hexAlpha = match[2];
		match = match[1];

		for (i = 0; i < 3; i++) {
			// https://jsperf.com/slice-vs-substr-vs-substring-methods-long-string/19
			var i2 = i * 2;
			rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
		}

		if (hexAlpha) {
			rgb[3] = Math.round((parseInt(hexAlpha, 16) / 255) * 100) / 100;
		}
	} else if (match = string.match(abbr)) {
		match = match[1];
		hexAlpha = match[3];

		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i] + match[i], 16);
		}

		if (hexAlpha) {
			rgb[3] = Math.round((parseInt(hexAlpha + hexAlpha, 16) / 255) * 100) / 100;
		}
	} else if (match = string.match(rgba)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i + 1], 0);
		}

		if (match[4]) {
			rgb[3] = parseFloat(match[4]);
		}
	} else if (match = string.match(per)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
		}

		if (match[4]) {
			rgb[3] = parseFloat(match[4]);
		}
	} else if (match = string.match(keyword)) {
		if (match[1] === 'transparent') {
			return [0, 0, 0, 0];
		}

		rgb = colorNames[match[1]];

		if (!rgb) {
			return null;
		}

		rgb[3] = 1;

		return rgb;
	} else {
		return null;
	}

	for (i = 0; i < 3; i++) {
		rgb[i] = clamp(rgb[i], 0, 255);
	}
	rgb[3] = clamp(rgb[3], 0, 1);

	return rgb;
};

cs.get.hsl = function (string) {
	if (!string) {
		return null;
	}

	var hsl = /^hsla?\(\s*([+-]?(?:\d*\.)?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var match = string.match(hsl);

	if (match) {
		var alpha = parseFloat(match[4]);
		var h = (parseFloat(match[1]) + 360) % 360;
		var s = clamp(parseFloat(match[2]), 0, 100);
		var l = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);

		return [h, s, l, a];
	}

	return null;
};

cs.get.hwb = function (string) {
	if (!string) {
		return null;
	}

	var hwb = /^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var match = string.match(hwb);

	if (match) {
		var alpha = parseFloat(match[4]);
		var h = ((parseFloat(match[1]) % 360) + 360) % 360;
		var w = clamp(parseFloat(match[2]), 0, 100);
		var b = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
		return [h, w, b, a];
	}

	return null;
};

cs.to.hex = function () {
	var rgba = swizzle(arguments);

	return (
		'#' +
		hexDouble(rgba[0]) +
		hexDouble(rgba[1]) +
		hexDouble(rgba[2]) +
		(rgba[3] < 1
			? (hexDouble(Math.round(rgba[3] * 255)))
			: '')
	);
};

cs.to.rgb = function () {
	var rgba = swizzle(arguments);

	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ')'
		: 'rgba(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ', ' + rgba[3] + ')';
};

cs.to.rgb.percent = function () {
	var rgba = swizzle(arguments);

	var r = Math.round(rgba[0] / 255 * 100);
	var g = Math.round(rgba[1] / 255 * 100);
	var b = Math.round(rgba[2] / 255 * 100);

	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + r + '%, ' + g + '%, ' + b + '%)'
		: 'rgba(' + r + '%, ' + g + '%, ' + b + '%, ' + rgba[3] + ')';
};

cs.to.hsl = function () {
	var hsla = swizzle(arguments);
	return hsla.length < 4 || hsla[3] === 1
		? 'hsl(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%)'
		: 'hsla(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%, ' + hsla[3] + ')';
};

// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
// (hwb have alpha optional & 1 is default value)
cs.to.hwb = function () {
	var hwba = swizzle(arguments);

	var a = '';
	if (hwba.length >= 4 && hwba[3] !== 1) {
		a = ', ' + hwba[3];
	}

	return 'hwb(' + hwba[0] + ', ' + hwba[1] + '%, ' + hwba[2] + '%' + a + ')';
};

cs.to.keyword = function (rgb) {
	return reverseNames[rgb.slice(0, 3)];
};

// helpers
function clamp(num, min, max) {
	return Math.min(Math.max(min, num), max);
}

function hexDouble(num) {
	var str = num.toString(16).toUpperCase();
	return (str.length < 2) ? '0' + str : str;
}


/***/ }),

/***/ "./node_modules/color/index.js":
/*!*************************************!*\
  !*** ./node_modules/color/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var colorString = __webpack_require__(/*! color-string */ "./node_modules/color-string/index.js");
var convert = __webpack_require__(/*! color-convert */ "./node_modules/color-convert/index.js");

var _slice = [].slice;

var skippedModels = [
	// to be honest, I don't really feel like keyword belongs in color convert, but eh.
	'keyword',

	// gray conflicts with some method names, and has its own method defined.
	'gray',

	// shouldn't really be in color-convert either...
	'hex'
];

var hashedModelKeys = {};
Object.keys(convert).forEach(function (model) {
	hashedModelKeys[_slice.call(convert[model].labels).sort().join('')] = model;
});

var limiters = {};

function Color(obj, model) {
	if (!(this instanceof Color)) {
		return new Color(obj, model);
	}

	if (model && model in skippedModels) {
		model = null;
	}

	if (model && !(model in convert)) {
		throw new Error('Unknown model: ' + model);
	}

	var i;
	var channels;

	if (obj == null) { // eslint-disable-line no-eq-null,eqeqeq
		this.model = 'rgb';
		this.color = [0, 0, 0];
		this.valpha = 1;
	} else if (obj instanceof Color) {
		this.model = obj.model;
		this.color = obj.color.slice();
		this.valpha = obj.valpha;
	} else if (typeof obj === 'string') {
		var result = colorString.get(obj);
		if (result === null) {
			throw new Error('Unable to parse color from string: ' + obj);
		}

		this.model = result.model;
		channels = convert[this.model].channels;
		this.color = result.value.slice(0, channels);
		this.valpha = typeof result.value[channels] === 'number' ? result.value[channels] : 1;
	} else if (obj.length) {
		this.model = model || 'rgb';
		channels = convert[this.model].channels;
		var newArr = _slice.call(obj, 0, channels);
		this.color = zeroArray(newArr, channels);
		this.valpha = typeof obj[channels] === 'number' ? obj[channels] : 1;
	} else if (typeof obj === 'number') {
		// this is always RGB - can be converted later on.
		obj &= 0xFFFFFF;
		this.model = 'rgb';
		this.color = [
			(obj >> 16) & 0xFF,
			(obj >> 8) & 0xFF,
			obj & 0xFF
		];
		this.valpha = 1;
	} else {
		this.valpha = 1;

		var keys = Object.keys(obj);
		if ('alpha' in obj) {
			keys.splice(keys.indexOf('alpha'), 1);
			this.valpha = typeof obj.alpha === 'number' ? obj.alpha : 0;
		}

		var hashedKeys = keys.sort().join('');
		if (!(hashedKeys in hashedModelKeys)) {
			throw new Error('Unable to parse color from object: ' + JSON.stringify(obj));
		}

		this.model = hashedModelKeys[hashedKeys];

		var labels = convert[this.model].labels;
		var color = [];
		for (i = 0; i < labels.length; i++) {
			color.push(obj[labels[i]]);
		}

		this.color = zeroArray(color);
	}

	// perform limitations (clamping, etc.)
	if (limiters[this.model]) {
		channels = convert[this.model].channels;
		for (i = 0; i < channels; i++) {
			var limit = limiters[this.model][i];
			if (limit) {
				this.color[i] = limit(this.color[i]);
			}
		}
	}

	this.valpha = Math.max(0, Math.min(1, this.valpha));

	if (Object.freeze) {
		Object.freeze(this);
	}
}

Color.prototype = {
	toString: function () {
		return this.string();
	},

	toJSON: function () {
		return this[this.model]();
	},

	string: function (places) {
		var self = this.model in colorString.to ? this : this.rgb();
		self = self.round(typeof places === 'number' ? places : 1);
		var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
		return colorString.to[self.model](args);
	},

	percentString: function (places) {
		var self = this.rgb().round(typeof places === 'number' ? places : 1);
		var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
		return colorString.to.rgb.percent(args);
	},

	array: function () {
		return this.valpha === 1 ? this.color.slice() : this.color.concat(this.valpha);
	},

	object: function () {
		var result = {};
		var channels = convert[this.model].channels;
		var labels = convert[this.model].labels;

		for (var i = 0; i < channels; i++) {
			result[labels[i]] = this.color[i];
		}

		if (this.valpha !== 1) {
			result.alpha = this.valpha;
		}

		return result;
	},

	unitArray: function () {
		var rgb = this.rgb().color;
		rgb[0] /= 255;
		rgb[1] /= 255;
		rgb[2] /= 255;

		if (this.valpha !== 1) {
			rgb.push(this.valpha);
		}

		return rgb;
	},

	unitObject: function () {
		var rgb = this.rgb().object();
		rgb.r /= 255;
		rgb.g /= 255;
		rgb.b /= 255;

		if (this.valpha !== 1) {
			rgb.alpha = this.valpha;
		}

		return rgb;
	},

	round: function (places) {
		places = Math.max(places || 0, 0);
		return new Color(this.color.map(roundToPlace(places)).concat(this.valpha), this.model);
	},

	alpha: function (val) {
		if (arguments.length) {
			return new Color(this.color.concat(Math.max(0, Math.min(1, val))), this.model);
		}

		return this.valpha;
	},

	// rgb
	red: getset('rgb', 0, maxfn(255)),
	green: getset('rgb', 1, maxfn(255)),
	blue: getset('rgb', 2, maxfn(255)),

	hue: getset(['hsl', 'hsv', 'hsl', 'hwb', 'hcg'], 0, function (val) { return ((val % 360) + 360) % 360; }), // eslint-disable-line brace-style

	saturationl: getset('hsl', 1, maxfn(100)),
	lightness: getset('hsl', 2, maxfn(100)),

	saturationv: getset('hsv', 1, maxfn(100)),
	value: getset('hsv', 2, maxfn(100)),

	chroma: getset('hcg', 1, maxfn(100)),
	gray: getset('hcg', 2, maxfn(100)),

	white: getset('hwb', 1, maxfn(100)),
	wblack: getset('hwb', 2, maxfn(100)),

	cyan: getset('cmyk', 0, maxfn(100)),
	magenta: getset('cmyk', 1, maxfn(100)),
	yellow: getset('cmyk', 2, maxfn(100)),
	black: getset('cmyk', 3, maxfn(100)),

	x: getset('xyz', 0, maxfn(100)),
	y: getset('xyz', 1, maxfn(100)),
	z: getset('xyz', 2, maxfn(100)),

	l: getset('lab', 0, maxfn(100)),
	a: getset('lab', 1),
	b: getset('lab', 2),

	keyword: function (val) {
		if (arguments.length) {
			return new Color(val);
		}

		return convert[this.model].keyword(this.color);
	},

	hex: function (val) {
		if (arguments.length) {
			return new Color(val);
		}

		return colorString.to.hex(this.rgb().round().color);
	},

	rgbNumber: function () {
		var rgb = this.rgb().color;
		return ((rgb[0] & 0xFF) << 16) | ((rgb[1] & 0xFF) << 8) | (rgb[2] & 0xFF);
	},

	luminosity: function () {
		// http://www.w3.org/TR/WCAG20/#relativeluminancedef
		var rgb = this.rgb().color;

		var lum = [];
		for (var i = 0; i < rgb.length; i++) {
			var chan = rgb[i] / 255;
			lum[i] = (chan <= 0.03928) ? chan / 12.92 : Math.pow(((chan + 0.055) / 1.055), 2.4);
		}

		return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
	},

	contrast: function (color2) {
		// http://www.w3.org/TR/WCAG20/#contrast-ratiodef
		var lum1 = this.luminosity();
		var lum2 = color2.luminosity();

		if (lum1 > lum2) {
			return (lum1 + 0.05) / (lum2 + 0.05);
		}

		return (lum2 + 0.05) / (lum1 + 0.05);
	},

	level: function (color2) {
		var contrastRatio = this.contrast(color2);
		if (contrastRatio >= 7.1) {
			return 'AAA';
		}

		return (contrastRatio >= 4.5) ? 'AA' : '';
	},

	isDark: function () {
		// YIQ equation from http://24ways.org/2010/calculating-color-contrast
		var rgb = this.rgb().color;
		var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
		return yiq < 128;
	},

	isLight: function () {
		return !this.isDark();
	},

	negate: function () {
		var rgb = this.rgb();
		for (var i = 0; i < 3; i++) {
			rgb.color[i] = 255 - rgb.color[i];
		}
		return rgb;
	},

	lighten: function (ratio) {
		var hsl = this.hsl();
		hsl.color[2] += hsl.color[2] * ratio;
		return hsl;
	},

	darken: function (ratio) {
		var hsl = this.hsl();
		hsl.color[2] -= hsl.color[2] * ratio;
		return hsl;
	},

	saturate: function (ratio) {
		var hsl = this.hsl();
		hsl.color[1] += hsl.color[1] * ratio;
		return hsl;
	},

	desaturate: function (ratio) {
		var hsl = this.hsl();
		hsl.color[1] -= hsl.color[1] * ratio;
		return hsl;
	},

	whiten: function (ratio) {
		var hwb = this.hwb();
		hwb.color[1] += hwb.color[1] * ratio;
		return hwb;
	},

	blacken: function (ratio) {
		var hwb = this.hwb();
		hwb.color[2] += hwb.color[2] * ratio;
		return hwb;
	},

	grayscale: function () {
		// http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
		var rgb = this.rgb().color;
		var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
		return Color.rgb(val, val, val);
	},

	fade: function (ratio) {
		return this.alpha(this.valpha - (this.valpha * ratio));
	},

	opaquer: function (ratio) {
		return this.alpha(this.valpha + (this.valpha * ratio));
	},

	rotate: function (degrees) {
		var hsl = this.hsl();
		var hue = hsl.color[0];
		hue = (hue + degrees) % 360;
		hue = hue < 0 ? 360 + hue : hue;
		hsl.color[0] = hue;
		return hsl;
	},

	mix: function (mixinColor, weight) {
		// ported from sass implementation in C
		// https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
		if (!mixinColor || !mixinColor.rgb) {
			throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof mixinColor);
		}
		var color1 = mixinColor.rgb();
		var color2 = this.rgb();
		var p = weight === undefined ? 0.5 : weight;

		var w = 2 * p - 1;
		var a = color1.alpha() - color2.alpha();

		var w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
		var w2 = 1 - w1;

		return Color.rgb(
				w1 * color1.red() + w2 * color2.red(),
				w1 * color1.green() + w2 * color2.green(),
				w1 * color1.blue() + w2 * color2.blue(),
				color1.alpha() * p + color2.alpha() * (1 - p));
	}
};

// model conversion methods and static constructors
Object.keys(convert).forEach(function (model) {
	if (skippedModels.indexOf(model) !== -1) {
		return;
	}

	var channels = convert[model].channels;

	// conversion methods
	Color.prototype[model] = function () {
		if (this.model === model) {
			return new Color(this);
		}

		if (arguments.length) {
			return new Color(arguments, model);
		}

		var newAlpha = typeof arguments[channels] === 'number' ? channels : this.valpha;
		return new Color(assertArray(convert[this.model][model].raw(this.color)).concat(newAlpha), model);
	};

	// 'static' construction methods
	Color[model] = function (color) {
		if (typeof color === 'number') {
			color = zeroArray(_slice.call(arguments), channels);
		}
		return new Color(color, model);
	};
});

function roundTo(num, places) {
	return Number(num.toFixed(places));
}

function roundToPlace(places) {
	return function (num) {
		return roundTo(num, places);
	};
}

function getset(model, channel, modifier) {
	model = Array.isArray(model) ? model : [model];

	model.forEach(function (m) {
		(limiters[m] || (limiters[m] = []))[channel] = modifier;
	});

	model = model[0];

	return function (val) {
		var result;

		if (arguments.length) {
			if (modifier) {
				val = modifier(val);
			}

			result = this[model]();
			result.color[channel] = val;
			return result;
		}

		result = this[model]().color[channel];
		if (modifier) {
			result = modifier(result);
		}

		return result;
	};
}

function maxfn(max) {
	return function (v) {
		return Math.max(0, Math.min(max, v));
	};
}

function assertArray(val) {
	return Array.isArray(val) ? val : [val];
}

function zeroArray(arr, length) {
	for (var i = 0; i < length; i++) {
		if (typeof arr[i] !== 'number') {
			arr[i] = 0;
		}
	}

	return arr;
}

module.exports = Color;


/***/ }),

/***/ "./node_modules/is-arrayish/index.js":
/*!*******************************************!*\
  !*** ./node_modules/is-arrayish/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function isArrayish(obj) {
	if (!obj || typeof obj === 'string') {
		return false;
	}

	return obj instanceof Array || Array.isArray(obj) ||
		(obj.length >= 0 && (obj.splice instanceof Function ||
			(Object.getOwnPropertyDescriptor(obj, (obj.length - 1)) && obj.constructor.name !== 'String')));
};


/***/ }),

/***/ "./node_modules/noisejs/index.js":
/*!***************************************!*\
  !*** ./node_modules/noisejs/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
 * A speed-improved perlin and simplex noise algorithms for 2D.
 *
 * Based on example code by Stefan Gustavson (stegu@itn.liu.se).
 * Optimisations by Peter Eastman (peastman@drizzle.stanford.edu).
 * Better rank ordering method by Stefan Gustavson in 2012.
 * Converted to Javascript by Joseph Gentle.
 *
 * Version 2012-03-09
 *
 * This code was placed in the public domain by its original author,
 * Stefan Gustavson. You may use it as you see fit, but
 * attribution is appreciated.
 *
 */

(function(global){

  // Passing in seed will seed this Noise instance
  function Noise(seed) {
    function Grad(x, y, z) {
      this.x = x; this.y = y; this.z = z;
    }

    Grad.prototype.dot2 = function(x, y) {
      return this.x*x + this.y*y;
    };

    Grad.prototype.dot3 = function(x, y, z) {
      return this.x*x + this.y*y + this.z*z;
    };

    this.grad3 = [new Grad(1,1,0),new Grad(-1,1,0),new Grad(1,-1,0),new Grad(-1,-1,0),
                 new Grad(1,0,1),new Grad(-1,0,1),new Grad(1,0,-1),new Grad(-1,0,-1),
                 new Grad(0,1,1),new Grad(0,-1,1),new Grad(0,1,-1),new Grad(0,-1,-1)];

    this.p = [151,160,137,91,90,15,
    131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,
    190, 6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,
    88,237,149,56,87,174,20,125,136,171,168, 68,175,74,165,71,134,139,48,27,166,
    77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,
    102,143,54, 65,25,63,161, 1,216,80,73,209,76,132,187,208, 89,18,169,200,196,
    135,130,116,188,159,86,164,100,109,198,173,186, 3,64,52,217,226,250,124,123,
    5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,
    223,183,170,213,119,248,152, 2,44,154,163, 70,221,153,101,155,167, 43,172,9,
    129,22,39,253, 19,98,108,110,79,113,224,232,178,185, 112,104,218,246,97,228,
    251,34,242,193,238,210,144,12,191,179,162,241, 81,51,145,235,249,14,239,107,
    49,192,214, 31,181,199,106,157,184, 84,204,176,115,121,50,45,127, 4,150,254,
    138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180];
    // To remove the need for index wrapping, double the permutation table length
    this.perm = new Array(512);
    this.gradP = new Array(512);

    this.seed(seed || 0);
  }

  // This isn't a very good seeding function, but it works ok. It supports 2^16
  // different seed values. Write something better if you need more seeds.
  Noise.prototype.seed = function(seed) {
    if(seed > 0 && seed < 1) {
      // Scale the seed out
      seed *= 65536;
    }

    seed = Math.floor(seed);
    if(seed < 256) {
      seed |= seed << 8;
    }

    var p = this.p;
    for(var i = 0; i < 256; i++) {
      var v;
      if (i & 1) {
        v = p[i] ^ (seed & 255);
      } else {
        v = p[i] ^ ((seed>>8) & 255);
      }

      var perm = this.perm;
      var gradP = this.gradP;
      perm[i] = perm[i + 256] = v;
      gradP[i] = gradP[i + 256] = this.grad3[v % 12];
    }
  };

  /*
  for(var i=0; i<256; i++) {
    perm[i] = perm[i + 256] = p[i];
    gradP[i] = gradP[i + 256] = grad3[perm[i] % 12];
  }*/

  // Skewing and unskewing factors for 2, 3, and 4 dimensions
  var F2 = 0.5*(Math.sqrt(3)-1);
  var G2 = (3-Math.sqrt(3))/6;

  var F3 = 1/3;
  var G3 = 1/6;

  // 2D simplex noise
  Noise.prototype.simplex2 = function(xin, yin) {
    var n0, n1, n2; // Noise contributions from the three corners
    // Skew the input space to determine which simplex cell we're in
    var s = (xin+yin)*F2; // Hairy factor for 2D
    var i = Math.floor(xin+s);
    var j = Math.floor(yin+s);
    var t = (i+j)*G2;
    var x0 = xin-i+t; // The x,y distances from the cell origin, unskewed.
    var y0 = yin-j+t;
    // For the 2D case, the simplex shape is an equilateral triangle.
    // Determine which simplex we are in.
    var i1, j1; // Offsets for second (middle) corner of simplex in (i,j) coords
    if(x0>y0) { // lower triangle, XY order: (0,0)->(1,0)->(1,1)
      i1=1; j1=0;
    } else {    // upper triangle, YX order: (0,0)->(0,1)->(1,1)
      i1=0; j1=1;
    }
    // A step of (1,0) in (i,j) means a step of (1-c,-c) in (x,y), and
    // a step of (0,1) in (i,j) means a step of (-c,1-c) in (x,y), where
    // c = (3-sqrt(3))/6
    var x1 = x0 - i1 + G2; // Offsets for middle corner in (x,y) unskewed coords
    var y1 = y0 - j1 + G2;
    var x2 = x0 - 1 + 2 * G2; // Offsets for last corner in (x,y) unskewed coords
    var y2 = y0 - 1 + 2 * G2;
    // Work out the hashed gradient indices of the three simplex corners
    i &= 255;
    j &= 255;

    var perm = this.perm;
    var gradP = this.gradP;
    var gi0 = gradP[i+perm[j]];
    var gi1 = gradP[i+i1+perm[j+j1]];
    var gi2 = gradP[i+1+perm[j+1]];
    // Calculate the contribution from the three corners
    var t0 = 0.5 - x0*x0-y0*y0;
    if(t0<0) {
      n0 = 0;
    } else {
      t0 *= t0;
      n0 = t0 * t0 * gi0.dot2(x0, y0);  // (x,y) of grad3 used for 2D gradient
    }
    var t1 = 0.5 - x1*x1-y1*y1;
    if(t1<0) {
      n1 = 0;
    } else {
      t1 *= t1;
      n1 = t1 * t1 * gi1.dot2(x1, y1);
    }
    var t2 = 0.5 - x2*x2-y2*y2;
    if(t2<0) {
      n2 = 0;
    } else {
      t2 *= t2;
      n2 = t2 * t2 * gi2.dot2(x2, y2);
    }
    // Add contributions from each corner to get the final noise value.
    // The result is scaled to return values in the interval [-1,1].
    return 70 * (n0 + n1 + n2);
  };

  // 3D simplex noise
  Noise.prototype.simplex3 = function(xin, yin, zin) {
    var n0, n1, n2, n3; // Noise contributions from the four corners

    // Skew the input space to determine which simplex cell we're in
    var s = (xin+yin+zin)*F3; // Hairy factor for 2D
    var i = Math.floor(xin+s);
    var j = Math.floor(yin+s);
    var k = Math.floor(zin+s);

    var t = (i+j+k)*G3;
    var x0 = xin-i+t; // The x,y distances from the cell origin, unskewed.
    var y0 = yin-j+t;
    var z0 = zin-k+t;

    // For the 3D case, the simplex shape is a slightly irregular tetrahedron.
    // Determine which simplex we are in.
    var i1, j1, k1; // Offsets for second corner of simplex in (i,j,k) coords
    var i2, j2, k2; // Offsets for third corner of simplex in (i,j,k) coords
    if(x0 >= y0) {
      if(y0 >= z0)      { i1=1; j1=0; k1=0; i2=1; j2=1; k2=0; }
      else if(x0 >= z0) { i1=1; j1=0; k1=0; i2=1; j2=0; k2=1; }
      else              { i1=0; j1=0; k1=1; i2=1; j2=0; k2=1; }
    } else {
      if(y0 < z0)      { i1=0; j1=0; k1=1; i2=0; j2=1; k2=1; }
      else if(x0 < z0) { i1=0; j1=1; k1=0; i2=0; j2=1; k2=1; }
      else             { i1=0; j1=1; k1=0; i2=1; j2=1; k2=0; }
    }
    // A step of (1,0,0) in (i,j,k) means a step of (1-c,-c,-c) in (x,y,z),
    // a step of (0,1,0) in (i,j,k) means a step of (-c,1-c,-c) in (x,y,z), and
    // a step of (0,0,1) in (i,j,k) means a step of (-c,-c,1-c) in (x,y,z), where
    // c = 1/6.
    var x1 = x0 - i1 + G3; // Offsets for second corner
    var y1 = y0 - j1 + G3;
    var z1 = z0 - k1 + G3;

    var x2 = x0 - i2 + 2 * G3; // Offsets for third corner
    var y2 = y0 - j2 + 2 * G3;
    var z2 = z0 - k2 + 2 * G3;

    var x3 = x0 - 1 + 3 * G3; // Offsets for fourth corner
    var y3 = y0 - 1 + 3 * G3;
    var z3 = z0 - 1 + 3 * G3;

    // Work out the hashed gradient indices of the four simplex corners
    i &= 255;
    j &= 255;
    k &= 255;

    var perm = this.perm;
    var gradP = this.gradP;
    var gi0 = gradP[i+   perm[j+   perm[k   ]]];
    var gi1 = gradP[i+i1+perm[j+j1+perm[k+k1]]];
    var gi2 = gradP[i+i2+perm[j+j2+perm[k+k2]]];
    var gi3 = gradP[i+ 1+perm[j+ 1+perm[k+ 1]]];

    // Calculate the contribution from the four corners
    var t0 = 0.5 - x0*x0-y0*y0-z0*z0;
    if(t0<0) {
      n0 = 0;
    } else {
      t0 *= t0;
      n0 = t0 * t0 * gi0.dot3(x0, y0, z0);  // (x,y) of grad3 used for 2D gradient
    }
    var t1 = 0.5 - x1*x1-y1*y1-z1*z1;
    if(t1<0) {
      n1 = 0;
    } else {
      t1 *= t1;
      n1 = t1 * t1 * gi1.dot3(x1, y1, z1);
    }
    var t2 = 0.5 - x2*x2-y2*y2-z2*z2;
    if(t2<0) {
      n2 = 0;
    } else {
      t2 *= t2;
      n2 = t2 * t2 * gi2.dot3(x2, y2, z2);
    }
    var t3 = 0.5 - x3*x3-y3*y3-z3*z3;
    if(t3<0) {
      n3 = 0;
    } else {
      t3 *= t3;
      n3 = t3 * t3 * gi3.dot3(x3, y3, z3);
    }
    // Add contributions from each corner to get the final noise value.
    // The result is scaled to return values in the interval [-1,1].
    return 32 * (n0 + n1 + n2 + n3);

  };

  // ##### Perlin noise stuff

  function fade(t) {
    return t*t*t*(t*(t*6-15)+10);
  }

  function lerp(a, b, t) {
    return (1-t)*a + t*b;
  }

  // 2D Perlin Noise
  Noise.prototype.perlin2 = function(x, y) {
    // Find unit grid cell containing point
    var X = Math.floor(x), Y = Math.floor(y);
    // Get relative xy coordinates of point within that cell
    x = x - X; y = y - Y;
    // Wrap the integer cells at 255 (smaller integer period can be introduced here)
    X = X & 255; Y = Y & 255;

    // Calculate noise contributions from each of the four corners
    var perm = this.perm;
    var gradP = this.gradP;
    var n00 = gradP[X+perm[Y]].dot2(x, y);
    var n01 = gradP[X+perm[Y+1]].dot2(x, y-1);
    var n10 = gradP[X+1+perm[Y]].dot2(x-1, y);
    var n11 = gradP[X+1+perm[Y+1]].dot2(x-1, y-1);

    // Compute the fade curve value for x
    var u = fade(x);

    // Interpolate the four results
    return lerp(
        lerp(n00, n10, u),
        lerp(n01, n11, u),
       fade(y));
  };

  // 3D Perlin Noise
  Noise.prototype.perlin3 = function(x, y, z) {
    // Find unit grid cell containing point
    var X = Math.floor(x), Y = Math.floor(y), Z = Math.floor(z);
    // Get relative xyz coordinates of point within that cell
    x = x - X; y = y - Y; z = z - Z;
    // Wrap the integer cells at 255 (smaller integer period can be introduced here)
    X = X & 255; Y = Y & 255; Z = Z & 255;

    // Calculate noise contributions from each of the eight corners
    var perm = this.perm;
    var gradP = this.gradP;
    var n000 = gradP[X+  perm[Y+  perm[Z  ]]].dot3(x,   y,     z);
    var n001 = gradP[X+  perm[Y+  perm[Z+1]]].dot3(x,   y,   z-1);
    var n010 = gradP[X+  perm[Y+1+perm[Z  ]]].dot3(x,   y-1,   z);
    var n011 = gradP[X+  perm[Y+1+perm[Z+1]]].dot3(x,   y-1, z-1);
    var n100 = gradP[X+1+perm[Y+  perm[Z  ]]].dot3(x-1,   y,   z);
    var n101 = gradP[X+1+perm[Y+  perm[Z+1]]].dot3(x-1,   y, z-1);
    var n110 = gradP[X+1+perm[Y+1+perm[Z  ]]].dot3(x-1, y-1,   z);
    var n111 = gradP[X+1+perm[Y+1+perm[Z+1]]].dot3(x-1, y-1, z-1);

    // Compute the fade curve value for x, y, z
    var u = fade(x);
    var v = fade(y);
    var w = fade(z);

    // Interpolate
    return lerp(
        lerp(
          lerp(n000, n100, u),
          lerp(n001, n101, u), w),
        lerp(
          lerp(n010, n110, u),
          lerp(n011, n111, u), w),
       v);
  };

  global.Noise = Noise;

})( false ? undefined : module.exports);


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/components/waves/waves.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/components/waves/waves.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"waves-container\" #wavesContainer></div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/contact-me/contact-me.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/contact-me/contact-me.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"contents\">\n  <app-contact-form></app-contact-form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/experience-section/card-carousel/card-carousel.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/experience-section/card-carousel/card-carousel.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"position-wrapper\"\n  *ngFor=\"let card of cards\"\n  [id]=\"'z' + abs(card.index)\"\n  [class.focused]=\"card.zIndex === styleFocusedIndex\"\n  [class.hide]=\"card.hide\"\n  [ngStyle]=\"card.style\">\n    <div class=\"ratio-wrapper\" *ngIf=\"!card.hide\">\n      <div class=\"carousel-card mat-elevation-z5\"\n      (click)=\"card.zIndex !== styleFocusedIndex && focusCard(card, 'a')\">\n        <h3>{{card.title}}</h3>\n        <p><small>{{card.subtitle}}</small></p>\n\n        <app-scroll-block class=\"card-description\" contentClass=\"mini-scrollbar\">\n          <p [innerHTML]=\"card.description\"></p>\n        </app-scroll-block>\n\n      </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/experience-section/experience-section.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/experience-section/experience-section.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Experience</h1>\n\n<div class=\"experience-panel\">\n  <ng-container *ngIf=\"!viewService.mobile\">\n    <ng-container *ngTemplateOutlet=\"graph\"></ng-container>\n    <ng-container *ngTemplateOutlet=\"cards\"></ng-container>\n  </ng-container>\n\n  <ng-container *ngIf=\"viewService.mobile\">\n    <mat-tab-group (selectedIndexChange)=\"$event === 0 && onTabChange()\" #matTabGroup>\n      <mat-tab label=\"Graph View\">\n        <ng-container *ngTemplateOutlet=\"graph\"></ng-container>\n      </mat-tab>\n      <mat-tab label=\"Card View\">\n        <ng-container *ngTemplateOutlet=\"cards\"></ng-container>\n      </mat-tab>\n    </mat-tab-group>\n  </ng-container>\n\n  <ng-template #graph>\n    <div id=\"graph-container\" [class.compact]=\"viewService.mobile\" (swipeleft)=\"swipe($event.type)\">\n      <app-arrow-scroll contentContainerId=\"experience-graph-container\" contentId=\"experience-graph\">\n      </app-arrow-scroll>\n    </div>\n  </ng-template>\n\n  <ng-template #cards>\n    <div id=\"graph-cards\" [class.compact]=\"viewService.mobile\" (swiperight)=\"swipe($event.type)\">\n      <app-card-carousel  [items]=\"commits\" [(selectedIndex)]=\"selectedIndex\" (selectedIndexChange)=\"onSelectedChange($event)\"></app-card-carousel>\n\n      <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"40px\" width=\"40px\" viewBox=\"0 0 60 40\" class=\"arrow-back\" (click)=\"selectTab(0)\"\n      *ngIf=\"viewService.mobile\">\n          <polygon points=\"9.3,15.2 14.5,10 32.6,28.1 50.7,10 55.9,15.2 32.6,38.5\" />\n      </svg>\n    </div>\n  </ng-template>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/featured-projects/featured-projects.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/featured-projects/featured-projects.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>\n  <span>Featured Projects</span>\n  <button *ngIf=\"projectsService.hasProjectsPage\" mat-button routerLink=\"/projects\">View All</button>\n</h1>\n\n<app-projects-list [projects]=\"projectsService.featuredProjects\"></app-projects-list>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/home.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/home.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-intro [id]=\"section.intro\" class=\"section\"></app-intro>\r\n<app-experience-section [id]=\"section.experience\" class=\"section\"></app-experience-section>\r\n<app-featured-projects [id]=\"projectsService.hasProjectsPage ? section.projects : section.featured\" class=\"section\"></app-featured-projects>\r\n<app-contact-me [id]=\"section.contact\" class=\"section\"></app-contact-me>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/intro/img-bubbles/img-bubbles.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/intro/img-bubbles/img-bubbles.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"resize-container\" (resized)=\"onResized($event)\"\ntrack-scroll (out-of-view)=\"toggleAnimation(false)\" (in-view)=\"toggleAnimation(true)\"></div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/intro/intro.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/intro/intro.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <div id=\"description-container\">\n      <div>\n        <div class=\"card\">\n            <span class=\"title\">Full-Stack TypeScript Developer</span>\n            <span class=\"divider\"></span>\n            <span class=\"description\">Skilled in software systems design and engineering, including back-end Microservices, APIs and front-end applications for the Web, Mobile and Desktop.</span>\n        </div>\n      </div>\n      <div>\n        <div class=\"card\">\n            <span class=\"title\">DevOps Engineer</span>\n            <span class=\"divider\"></span>\n            <span class=\"description\">Experienced in continuous testing and deployment using latest CI/CD technologies. As well as hosting Databases, Apps and Servers on scalable Cloud services.</span>\n        </div>\n      </div>\n    </div>\n    <div id=\"bubbles-container\">\n      <app-img-bubbles></app-img-bubbles>\n    </div>\n    <div id=\"wave-container\">\n      <app-waves></app-waves>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/simple-swizzle/index.js":
/*!**********************************************!*\
  !*** ./node_modules/simple-swizzle/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArrayish = __webpack_require__(/*! is-arrayish */ "./node_modules/is-arrayish/index.js");

var concat = Array.prototype.concat;
var slice = Array.prototype.slice;

var swizzle = module.exports = function swizzle(args) {
	var results = [];

	for (var i = 0, len = args.length; i < len; i++) {
		var arg = args[i];

		if (isArrayish(arg)) {
			// http://jsperf.com/javascript-array-concat-vs-push/98
			results = concat.call(results, slice.call(arg));
		} else {
			results.push(arg);
		}
	}

	return results;
};

swizzle.wrap = function (fn) {
	return function () {
		return fn(swizzle(arguments));
	};
};


/***/ }),

/***/ "./src/app/modules/home/components/waves/waves.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/modules/home/components/waves/waves.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep #waves-container {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n::ng-deep #waves-container svg {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  overflow: visible;\n}\n::ng-deep #waves-container svg .wave {\n  -webkit-animation: wave 3s linear;\n          animation: wave 3s linear;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  fill: var(--foreground-primary, white);\n  fill: white;\n}\n::ng-deep #waves-container svg #wave2 {\n  -webkit-animation-duration: 5s;\n          animation-duration: 5s;\n  animation-direction: reverse;\n  opacity: 0.6;\n}\n::ng-deep #waves-container svg #wave3 {\n  -webkit-animation-duration: 7s;\n          animation-duration: 7s;\n  opacity: 0.3;\n}\n@-webkit-keyframes wave {\n  to {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n  }\n}\n@keyframes wave {\n  to {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL2NvbXBvbmVudHMvd2F2ZXMvQzpcXFVzZXJzXFxMaW5hIFJhZ2F1c2thaXRlXFxEZXNrdG9wXFxwcm9qZWN0c1xccG9ydGZvbGlvXFxhcHAvc3JjXFxhcHBcXG1vZHVsZXNcXGhvbWVcXGNvbXBvbmVudHNcXHdhdmVzXFx3YXZlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9ob21lL2NvbXBvbmVudHMvd2F2ZXMvd2F2ZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDREY7QURHRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxpQkFBQTtBQ0RKO0FER0k7RUFDRSxpQ0FBQTtVQUFBLHlCQUFBO0VBQ0EsMkNBQUE7VUFBQSxtQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsV0FBQTtBQ0ROO0FESUk7RUFDRSw4QkFBQTtVQUFBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0FDRk47QURLSTtFQUNFLDhCQUFBO1VBQUEsc0JBQUE7RUFDQSxZQUFBO0FDSE47QURNSTtFQUNFO0lBQ0Usb0NBQUE7WUFBQSw0QkFBQTtFQ0pOO0FBQ0Y7QURDSTtFQUNFO0lBQ0Usb0NBQUE7WUFBQSw0QkFBQTtFQ0pOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2hvbWUvY29tcG9uZW50cy93YXZlcy93YXZlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ2Fic3RyYWN0cyc7XHJcblxyXG46Om5nLWRlZXAgI3dhdmVzLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgc3ZnIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBvdmVyZmxvdzp2aXNpYmxlO1xyXG5cclxuICAgIC53YXZlIHtcclxuICAgICAgYW5pbWF0aW9uOiB3YXZlIDNzIGxpbmVhcjtcclxuICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgICAgIGZpbGw6IGNvbG9yKCdmb3JlZ3JvdW5kLXByaW1hcnknKTtcclxuICAgICAgZmlsbDogd2hpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgI3dhdmUyIHtcclxuICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOjVzO1xyXG4gICAgICBhbmltYXRpb24tZGlyZWN0aW9uOiByZXZlcnNlO1xyXG4gICAgICBvcGFjaXR5OiAuNlxyXG4gICAgfVxyXG5cclxuICAgICN3YXZlMyB7XHJcbiAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogN3M7XHJcbiAgICAgIG9wYWNpdHk6LjM7XHJcbiAgICB9XHJcblxyXG4gICAgQGtleWZyYW1lcyB3YXZlIHtcclxuICAgICAgdG8ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiOjpuZy1kZWVwICN3YXZlcy1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG46Om5nLWRlZXAgI3dhdmVzLWNvbnRhaW5lciBzdmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG46Om5nLWRlZXAgI3dhdmVzLWNvbnRhaW5lciBzdmcgLndhdmUge1xuICBhbmltYXRpb246IHdhdmUgM3MgbGluZWFyO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgZmlsbDogdmFyKC0tZm9yZWdyb3VuZC1wcmltYXJ5LCB3aGl0ZSk7XG4gIGZpbGw6IHdoaXRlO1xufVxuOjpuZy1kZWVwICN3YXZlcy1jb250YWluZXIgc3ZnICN3YXZlMiB7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IHJldmVyc2U7XG4gIG9wYWNpdHk6IDAuNjtcbn1cbjo6bmctZGVlcCAjd2F2ZXMtY29udGFpbmVyIHN2ZyAjd2F2ZTMge1xuICBhbmltYXRpb24tZHVyYXRpb246IDdzO1xuICBvcGFjaXR5OiAwLjM7XG59XG5Aa2V5ZnJhbWVzIHdhdmUge1xuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/home/components/waves/waves.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/home/components/waves/waves.component.ts ***!
  \******************************************************************/
/*! exports provided: WavesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WavesComponent", function() { return WavesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const NS = 'http://www.w3.org/2000/svg';
let WavesComponent = class WavesComponent {
    onResize() {
        this.GenerateWaves();
    }
    ngAfterViewInit() {
        this.GenerateWaves();
    }
    GenerateWaves() {
        const el = this.wavesContainer.nativeElement;
        let { width, height } = el.getBoundingClientRect();
        const siblingEl = document.getElementById('bubbles-container');
        height += siblingEl.clientHeight * 0.1;
        const svgEl = document.createElementNS(NS, 'svg');
        svgEl.setAttributeNS(null, 'viewBox', `0 0 ${width} ${height}`);
        svgEl.style.width = `${width}px`;
        svgEl.style.height = `${height}px`;
        const h = width < 299 ? 10 :
            width < 499 ? 20 :
                width < 599 ? 30 :
                    width < 959 ? 40 :
                        width < 1279 ? 50 :
                            width < 1919 ? 50 : 50;
        width = width * 2;
        const w100 = width * (12.5 / 100);
        const w200 = width * (25 / 100);
        const w300 = width * (37.5 / 100);
        const w400 = width * (50 / 100);
        const w500 = width * (62.5 / 100);
        const w600 = width * (75 / 100);
        const w700 = width * (87.5 / 100);
        const rawPath = `` +
            `M 0 0 ` +
            `C ${w100} 0 ${w100} ${h} ${w200} ${h} ` +
            `C ${w300} ${h} ${w300} 0 ${w400} 0 ` +
            `C ${w500} 0 ${w500} ${h} ${w600} ${h} ` +
            `C ${w700} ${h} ${w700} 0 ${width} 0 ` +
            `L ${width} ${height} ` +
            `L 0 ${height} ` +
            `Z`;
        const pathEl = document.createElementNS(NS, 'path');
        pathEl.setAttributeNS(null, 'd', rawPath);
        pathEl.setAttributeNS(null, 'id', 'wave');
        const defEl = document.createElementNS(NS, 'defs');
        defEl.appendChild(pathEl);
        svgEl.appendChild(defEl);
        const use1 = document.createElementNS(NS, 'use');
        use1.setAttributeNS(null, 'id', 'wave1');
        use1.setAttributeNS(null, 'class', 'wave');
        use1.setAttributeNS(null, 'x', '0');
        use1.setAttributeNS(null, 'y', '0');
        use1.setAttributeNS(null, 'href', '#wave');
        const use2 = use1.cloneNode();
        use2.setAttributeNS(null, 'id', 'wave2');
        use2.setAttributeNS(null, 'y', '-2');
        const use3 = use1.cloneNode();
        use3.setAttributeNS(null, 'id', 'wave3');
        use3.setAttributeNS(null, 'y', '-4');
        svgEl.appendChild(use3);
        svgEl.appendChild(use2);
        svgEl.appendChild(use1);
        if (el.firstChild)
            el.replaceChild(svgEl, el.firstChild);
        else
            el.appendChild(svgEl);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], WavesComponent.prototype, "onResize", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('wavesContainer', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], WavesComponent.prototype, "wavesContainer", void 0);
WavesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-waves',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./waves.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/components/waves/waves.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./waves.component.scss */ "./src/app/modules/home/components/waves/waves.component.scss")).default]
    })
], WavesComponent);



/***/ }),

/***/ "./src/app/modules/home/contact-me/contact-me.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/modules/home/contact-me/contact-me.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  max-height: 600px;\n}\n\n.contents {\n  width: 80%;\n  height: 100%;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL2NvbnRhY3QtbWUvQzpcXFVzZXJzXFxMaW5hIFJhZ2F1c2thaXRlXFxEZXNrdG9wXFxwcm9qZWN0c1xccG9ydGZvbGlvXFxhcHAvc3JjXFxhcHBcXG1vZHVsZXNcXGhvbWVcXGNvbnRhY3QtbWVcXGNvbnRhY3QtbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvaG9tZS9jb250YWN0LW1lL2NvbnRhY3QtbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxpQkFBQTtBQ0RGOztBRElBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2hvbWUvY29udGFjdC1tZS9jb250YWN0LW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnYWJzdHJhY3RzJztcclxuXHJcbjpob3N0IHtcclxuICBtYXgtaGVpZ2h0OiA2MDBweDtcclxufVxyXG5cclxuLmNvbnRlbnRzIHtcclxuICB3aWR0aDogODAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuIiwiOmhvc3Qge1xuICBtYXgtaGVpZ2h0OiA2MDBweDtcbn1cblxuLmNvbnRlbnRzIHtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/home/contact-me/contact-me.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/home/contact-me/contact-me.component.ts ***!
  \*****************************************************************/
/*! exports provided: ContactMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactMeComponent", function() { return ContactMeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactMeComponent = class ContactMeComponent {
};
ContactMeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact-me',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact-me.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/contact-me/contact-me.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact-me.component.scss */ "./src/app/modules/home/contact-me/contact-me.component.scss")).default]
    })
], ContactMeComponent);



/***/ }),

/***/ "./src/app/modules/home/experience-section/card-carousel/card-carousel.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/home/experience-section/card-carousel/card-carousel.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  display: inline-block;\n  overflow: hidden;\n  z-index: 1;\n}\n:host * {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\nh3, p {\n  margin: 10px 0;\n}\n.position-wrapper {\n  position: absolute;\n  width: 90%;\n  left: 50%;\n  top: 50%;\n  -webkit-transition: opacity 0.2s linear, -webkit-transform 0.2s linear;\n  transition: opacity 0.2s linear, -webkit-transform 0.2s linear;\n  transition: transform 0.2s linear, opacity 0.2s linear;\n  transition: transform 0.2s linear, opacity 0.2s linear, -webkit-transform 0.2s linear;\n  max-width: 450px;\n}\n.position-wrapper#z1 {\n  background: #fafafa;\n}\n.position-wrapper#z2 {\n  background: #ededed;\n}\n.position-wrapper .ratio-wrapper {\n  width: 100%;\n  padding-top: 75%;\n  /* 4:3 Aspect Ratio */\n  position: relative;\n  min-height: 200px;\n}\n@media screen and (max-width: calc(600px - 1px)) {\n  .position-wrapper .ratio-wrapper {\n    min-height: 300px;\n  }\n}\n.position-wrapper .ratio-wrapper .carousel-card {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  padding: 15px 30px;\n  cursor: pointer;\n}\n@media screen and (max-width: calc(600px - 1px)) {\n  .position-wrapper .ratio-wrapper .carousel-card {\n    padding: 7.5px 15px;\n  }\n}\n.position-wrapper .ratio-wrapper .carousel-card * {\n  visibility: hidden;\n}\n.position-wrapper .ratio-wrapper .carousel-card .card-description {\n  height: calc(100% - 100px);\n}\n@media screen and (max-width: calc(600px - 1px)) {\n  .position-wrapper .ratio-wrapper .carousel-card .card-description {\n    height: calc(100% - 80px);\n  }\n}\n.position-wrapper .ratio-wrapper .carousel-card .card-description p {\n  margin: 0;\n}\n.position-wrapper.focused .ratio-wrapper .carousel-card {\n  cursor: default;\n  color: var(--foreground-secondary, #2e3235);\n  background: var(--background-secondary, white);\n}\n.position-wrapper.focused .ratio-wrapper .carousel-card * {\n  visibility: visible;\n}\n.position-wrapper.hide {\n  opacity: 0;\n  pointer-events: none;\n}\n.position-wrapper.hide .carousel-card {\n  box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL2V4cGVyaWVuY2Utc2VjdGlvbi9jYXJkLWNhcm91c2VsL0M6XFxVc2Vyc1xcTGluYSBSYWdhdXNrYWl0ZVxcRGVza3RvcFxccHJvamVjdHNcXHBvcnRmb2xpb1xcYXBwL3NyY1xcYXBwXFxtb2R1bGVzXFxob21lXFxleHBlcmllbmNlLXNlY3Rpb25cXGNhcmQtY2Fyb3VzZWxcXGNhcmQtY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvaG9tZS9leHBlcmllbmNlLXNlY3Rpb24vY2FyZC1jYXJvdXNlbC9jYXJkLWNhcm91c2VsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2hvbWUvZXhwZXJpZW5jZS1zZWN0aW9uL2NhcmQtY2Fyb3VzZWwvQzpcXFVzZXJzXFxMaW5hIFJhZ2F1c2thaXRlXFxEZXNrdG9wXFxwcm9qZWN0c1xccG9ydGZvbGlvXFxhcHAvc3JjXFxhcHBcXHN0eWxlc1xcYWJzdHJhY3RzXFxicmVha3BvaW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxVQUFBO0FDRkY7QURJRTtFQUNFLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0FDRko7QURNQTtFQUNFLGNBQUE7QUNIRjtBRE1BO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxzRUFBQTtFQUFBLDhEQUFBO0VBQUEsc0RBQUE7RUFBQSxxRkFBQTtFQUNBLGdCQUFBO0FDSEY7QURLRTtFQUNFLG1CQUFBO0FDSEo7QURNRTtFQUNFLG1CQUFBO0FDSko7QURPRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUFrQixxQkFBQTtFQUNsQixrQkFBQTtFQUNBLGlCQUFBO0FDSko7QUNGTTtFRkVKO0lBTUksaUJBQUE7RUNGSjtBQUNGO0FESUk7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNGTjtBQ2hCTTtFRldGO0lBVUksbUJBQUE7RUNETjtBQUNGO0FER007RUFDRSxrQkFBQTtBQ0RSO0FESU07RUFDRSwwQkFBQTtBQ0ZSO0FDM0JNO0VGNEJBO0lBSUkseUJBQUE7RUNEUjtBQUNGO0FER1E7RUFDRSxTQUFBO0FDRFY7QURRSTtFQUNFLGVBQUE7RUFDQSwyQ0FBQTtFQUNBLDhDQUFBO0FDTk47QURRTTtFQUNFLG1CQUFBO0FDTlI7QURXRTtFQUNFLFVBQUE7RUFDQSxvQkFBQTtBQ1RKO0FEV0k7RUFDRSxnQkFBQTtBQ1ROIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9ob21lL2V4cGVyaWVuY2Utc2VjdGlvbi9jYXJkLWNhcm91c2VsL2NhcmQtY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdhYnN0cmFjdHMnO1xyXG5cclxuOmhvc3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgLy8gSW5kZXggMSBzbyB0aGF0IHNlcGFyYXRlIGNhcmQgaW5kZXhpbmcgd291bGQgYmUgY29udGFpbmVkXHJcbiAgei1pbmRleDogMTtcclxuXHJcbiAgKiB7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbmgzLCBwIHtcclxuICBtYXJnaW46IDEwcHggMDtcclxufVxyXG5cclxuLnBvc2l0aW9uLXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogOTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBsaW5lYXIsIG9wYWNpdHkgMC4ycyBsaW5lYXI7XHJcbiAgbWF4LXdpZHRoOiA0NTBweDtcclxuXHJcbiAgJiN6MSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG4gIH1cclxuXHJcbiAgJiN6MiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWRlZGVkO1xyXG4gIH1cclxuXHJcbiAgLnJhdGlvLXdyYXBwZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogNzUlOyAvKiA0OjMgQXNwZWN0IFJhdGlvICovXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICAgIEBpbmNsdWRlIGJyZWFrKCdsdCcsICdzJykge1xyXG4gICAgICBtaW4taGVpZ2h0OiAzMDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuY2Fyb3VzZWwtY2FyZCB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgIEBpbmNsdWRlIGJyZWFrKCdsdCcsICdzJykge1xyXG4gICAgICAgIHBhZGRpbmc6IDcuNXB4IDE1cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICoge1xyXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNhcmQtZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTAwcHgpO1xyXG5cclxuICAgICAgICBAaW5jbHVkZSBicmVhaygnbHQnLCAncycpIHtcclxuICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gODBweCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZm9jdXNlZCB7XHJcbiAgICAucmF0aW8td3JhcHBlciAuY2Fyb3VzZWwtY2FyZCB7XHJcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgICAgY29sb3I6IGNvbG9yKCdmb3JlZ3JvdW5kLXNlY29uZGFyeScpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiBjb2xvcignYmFja2dyb3VuZC1zZWNvbmRhcnknKTtcclxuXHJcbiAgICAgICoge1xyXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuaGlkZSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcblxyXG4gICAgLmNhcm91c2VsLWNhcmQge1xyXG4gICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB6LWluZGV4OiAxO1xufVxuOmhvc3QgKiB7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG5oMywgcCB7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuXG4ucG9zaXRpb24td3JhcHBlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDkwJTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgbGluZWFyLCBvcGFjaXR5IDAuMnMgbGluZWFyO1xuICBtYXgtd2lkdGg6IDQ1MHB4O1xufVxuLnBvc2l0aW9uLXdyYXBwZXIjejEge1xuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xufVxuLnBvc2l0aW9uLXdyYXBwZXIjejIge1xuICBiYWNrZ3JvdW5kOiAjZWRlZGVkO1xufVxuLnBvc2l0aW9uLXdyYXBwZXIgLnJhdGlvLXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDc1JTtcbiAgLyogNDozIEFzcGVjdCBSYXRpbyAqL1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogY2FsYyg2MDBweCAtIDFweCkpIHtcbiAgLnBvc2l0aW9uLXdyYXBwZXIgLnJhdGlvLXdyYXBwZXIge1xuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICB9XG59XG4ucG9zaXRpb24td3JhcHBlciAucmF0aW8td3JhcHBlciAuY2Fyb3VzZWwtY2FyZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBwYWRkaW5nOiAxNXB4IDMwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IGNhbGMoNjAwcHggLSAxcHgpKSB7XG4gIC5wb3NpdGlvbi13cmFwcGVyIC5yYXRpby13cmFwcGVyIC5jYXJvdXNlbC1jYXJkIHtcbiAgICBwYWRkaW5nOiA3LjVweCAxNXB4O1xuICB9XG59XG4ucG9zaXRpb24td3JhcHBlciAucmF0aW8td3JhcHBlciAuY2Fyb3VzZWwtY2FyZCAqIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLnBvc2l0aW9uLXdyYXBwZXIgLnJhdGlvLXdyYXBwZXIgLmNhcm91c2VsLWNhcmQgLmNhcmQtZGVzY3JpcHRpb24ge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEwMHB4KTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IGNhbGMoNjAwcHggLSAxcHgpKSB7XG4gIC5wb3NpdGlvbi13cmFwcGVyIC5yYXRpby13cmFwcGVyIC5jYXJvdXNlbC1jYXJkIC5jYXJkLWRlc2NyaXB0aW9uIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDgwcHgpO1xuICB9XG59XG4ucG9zaXRpb24td3JhcHBlciAucmF0aW8td3JhcHBlciAuY2Fyb3VzZWwtY2FyZCAuY2FyZC1kZXNjcmlwdGlvbiBwIHtcbiAgbWFyZ2luOiAwO1xufVxuLnBvc2l0aW9uLXdyYXBwZXIuZm9jdXNlZCAucmF0aW8td3JhcHBlciAuY2Fyb3VzZWwtY2FyZCB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgY29sb3I6IHZhcigtLWZvcmVncm91bmQtc2Vjb25kYXJ5LCAjMmUzMjM1KTtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnksIHdoaXRlKTtcbn1cbi5wb3NpdGlvbi13cmFwcGVyLmZvY3VzZWQgLnJhdGlvLXdyYXBwZXIgLmNhcm91c2VsLWNhcmQgKiB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG4ucG9zaXRpb24td3JhcHBlci5oaWRlIHtcbiAgb3BhY2l0eTogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4ucG9zaXRpb24td3JhcHBlci5oaWRlIC5jYXJvdXNlbC1jYXJkIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn0iLCJcclxuLy8gLS0tPiBCcmVha3BvaW50c1xyXG4kYnJlYWtwb2ludHM6IChcclxuICAneHMtbWluJzogMHB4LFxyXG4gICd4cy1tYXgnOiA1OTlweCxcclxuICAncy1taW4nOiA2MDBweCxcclxuICAncy1tYXgnOiA5NTlweCxcclxuICAnbS1taW4nOiA5NjBweCxcclxuICAnbS1tYXgnOiAxMjc5cHgsXHJcbiAgJ2wtbWluJzogMTI4MHB4LFxyXG4gICdsLW1heCc6IDE5MTlweCxcclxuICAneGwtbWluJzogMTkyMHB4LFxyXG4gICd4bC1tYXgnOiA1MDAwcHhcclxuKSAhZGVmYXVsdDtcclxuXHJcbi8vIHhzXHQnc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCknXHJcbi8vIHNtXHQnc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KSdcclxuLy8gbWRcdCdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSBhbmQgKG1heC13aWR0aDogMTI3OXB4KSdcclxuLy8gbGdcdCdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODBweCkgYW5kIChtYXgtd2lkdGg6IDE5MTlweCknXHJcbi8vIHhsXHQnc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpIGFuZCAobWF4LXdpZHRoOiA1MDAwcHgpJ1xyXG5cclxuLy8gbHQtc21cdCdzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSdcclxuLy8gbHQtbWRcdCdzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1OXB4KSdcclxuLy8gbHQtbGdcdCdzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNzlweCknXHJcbi8vIGx0LXhsXHQnc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxOTE5cHgpJ1xyXG5cclxuLy8gZ3QteHNcdCdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSdcclxuLy8gZ3Qtc21cdCdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSdcclxuLy8gZ3QtbWRcdCdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODBweCknXHJcbi8vIGd0LWxnXHQnc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpJ1xyXG5cclxuQG1peGluIGJyZWFrKCRsdEd0LCAkYnJlYWtwb2ludCkge1xyXG4gIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICcjeyRicmVha3BvaW50fS1taW4nKSB7XHJcbiAgICBAaWYgKCRsdEd0ID09ICdsdCcpIHtcclxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogY2FsYygje21hcC1nZXQoJGJyZWFrcG9pbnRzLCAnI3skYnJlYWtwb2ludH0tbWluJyl9IC0gMXB4KSkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgICB9XHJcbiAgICB9IEBlbHNlIGlmICgkbHRHdCA9PSAnZ3QnKSB7XHJcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IGNhbGMoI3ttYXAtZ2V0KCRicmVha3BvaW50cywgJyN7JGJyZWFrcG9pbnR9LW1heCcpfSArIDFweCkpIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgICAgfVxyXG4gICAgfSBAZWxzZSB7XHJcbiAgICAgIEBlcnJvciAnVW5yZWNvZ25pc2VkIHBhcmFtZXRlciAjeyRsdEd0fS4gVmFsdWVzIFxcJ2d0XFwnIGFuZCBcXCdsdFxcJyBhcmUgYWNjZXB0ZWQuJztcclxuICAgIH1cclxuICB9IEBlbHNlIHtcclxuICAgIEBlcnJvciAnVW5yZWNvZ25pc2VkIGJyZWFrcG9pbnQgI3skYnJlYWtwb2ludH0uIEF2YWlsYWJsZSBicmVha3BvaW50cyBhcmU6ICN7bWFwLWtleXMoJGJyZWFrcG9pbnRzKX0uJztcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBicmVhay1wcm9wICgkcHJvcGVydHksICRicmVhay1tYXApIHtcclxuICAvLyB4c1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XHJcbiAgICAjeyRwcm9wZXJ0eX06IG1hcC1nZXQoJGJyZWFrLW1hcCwgJ3hzJyk7XHJcbiAgfVxyXG4gIC8vIHNcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XHJcbiAgICAjeyRwcm9wZXJ0eX06IG1hcC1nZXQoJGJyZWFrLW1hcCwgJ3MnKTtcclxuICB9XHJcbiAgLy8gbVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSBhbmQgKG1heC13aWR0aDogMTI3OXB4KSB7XHJcbiAgICAjeyRwcm9wZXJ0eX06IG1hcC1nZXQoJGJyZWFrLW1hcCwgJ20nKTtcclxuICB9XHJcbiAgLy8gbFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODBweCkgYW5kIChtYXgtd2lkdGg6IDE5MTlweCkge1xyXG4gICAgI3skcHJvcGVydHl9OiBtYXAtZ2V0KCRicmVhay1tYXAsICdsJyk7XHJcbiAgfVxyXG4gIC8vIHhsXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTkyMHB4KSB7XHJcbiAgICAjeyRwcm9wZXJ0eX06IG1hcC1nZXQoJGJyZWFrLW1hcCwgJ3hsJyk7XHJcbiAgfVxyXG59XHJcbi8vIDwtLS0gQnJlYWtwb2ludHNcclxuXHJcbkBtaXhpbiBicmVhay1mb250ICgkc2l6ZSwgJG1pbjogbnVsbCwgJG1heDogbnVsbCkge1xyXG4gIEBpbmNsdWRlIGJyZWFrLXByb3AoJ2ZvbnQtc2l6ZScsIChcclxuICAgICd4cyc6IHNuYXAoJHNpemUgKiAwLjYsICRtaW4sICRtYXgpLFxyXG4gICAgJ3MnOiBzbmFwKCRzaXplICogMC44LCAkbWluLCAkbWF4KSxcclxuICAgICdtJzogJHNpemUsXHJcbiAgICAnbCc6IHNuYXAoJHNpemUgKiAxLjEsICRtaW4sICRtYXgpLFxyXG4gICAgJ3hsJzogc25hcCgkc2l6ZSAqIDEuMiwgJG1pbiwgJG1heClcclxuICApKVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/modules/home/experience-section/card-carousel/card-carousel.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/home/experience-section/card-carousel/card-carousel.component.ts ***!
  \******************************************************************************************/
/*! exports provided: CardCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardCarouselComponent", function() { return CardCarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);





let CardCarouselComponent = class CardCarouselComponent {
    constructor() {
        this._focusCard = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._reversed = true;
        this._loaded = false;
        // Set top most index to 100, this will last a while
        // until there are under 100 items
        this.styleFocusedIndex = 100;
        this.selectedIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._items = [];
        this.cards = [];
    }
    get selectedIndex() {
        return this._selectedIndex;
    }
    set selectedIndex(val) {
        this._selectedIndex = val;
        this._focusCard.next('change');
    }
    get items() {
        return this._items;
    }
    set items(val) {
        this._items = val;
        if (this._loaded)
            this.RenderCards();
    }
    ngOnInit() {
        this.RenderCards();
        this._focusCard.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(10)).subscribe((x) => {
            if (this.cards.length)
                this.focusCard(this.currentIndex, x);
        });
        this._loaded = true;
    }
    get currentIndex() {
        let index = 0;
        if (this._selectedIndex === undefined || !this._items.length)
            return index;
        index = this._selectedIndex;
        if (this._reversed)
            index = this.ReverseIndex(index);
        return Math.min(this._items.length - 1, Math.max(0, index));
    }
    abs(i) {
        return Math.abs(i);
    }
    RenderCards() {
        const items = [...this.items];
        if (this._reversed)
            items.reverse();
        let index = this.currentIndex;
        this.cards = items.map((x, i) => {
            const card = new Card(x.comment, moment__WEBPACK_IMPORTED_MODULE_4___default()(x.date, 'YYYY-MMM').format('MMM YYYY'), x.description, i - index, 
            // top most index - offset (0 for focused, <0 for before and >0 for after)
            this.styleFocusedIndex - Math.abs(i - index), x.color || 'rgba(255, 255, 255, 0)');
            return card;
        });
        if (this._selectedIndex === undefined)
            this.SetSelectedIndex(index);
    }
    focusCard(target, o) {
        const index = typeof target === 'number' ?
            target : this.cards.findIndex(x => x === target);
        if (index === undefined)
            return;
        this.SetSelectedIndex(index);
        for (let i = 0; i < this.cards.length; i++) {
            const c = this.cards[i];
            c.index = i - index,
                c.zIndex = this.styleFocusedIndex - Math.abs(i - index);
        }
    }
    SetSelectedIndex(index) {
        if (index < 0 || !this._loaded)
            return;
        this._selectedIndex = this._reversed ?
            this.ReverseIndex(index) : index;
        this.selectedIndexChange.emit(this._selectedIndex);
    }
    ReverseIndex(index) {
        return this._items.length - 1 - index;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CardCarouselComponent.prototype, "selectedIndexChange", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
], CardCarouselComponent.prototype, "selectedIndex", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Array])
], CardCarouselComponent.prototype, "items", null);
CardCarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-card-carousel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./card-carousel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/experience-section/card-carousel/card-carousel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./card-carousel.component.scss */ "./src/app/modules/home/experience-section/card-carousel/card-carousel.component.scss")).default]
    })
], CardCarouselComponent);

class Card {
    constructor(title, subtitle, description, _index, _zIndex, color) {
        this.title = title;
        this.subtitle = subtitle;
        this.description = description;
        this._index = _index;
        this._zIndex = _zIndex;
        this.color = color;
        this.maxBehind = 3;
        this.maxIndex = this.maxBehind - 1;
        this.style = {};
        this.generateStyle();
    }
    get hide() {
        return Math.abs(this._index) >= this.maxBehind;
    }
    /*
    Style index is used to avoid creating styles that
    overflow parent container, therefore
    scroll from start to end happens outside the parent
    container
    */
    get styleIndex() {
        return Math.min(this.maxIndex, Math.max(-this.maxIndex, this._index));
    }
    get index() {
        return this._index;
    }
    set index(val) {
        this._index = val;
    }
    get zIndex() {
        return this._zIndex;
    }
    set zIndex(val) {
        this._zIndex = val;
        this.generateStyle();
    }
    generateStyle() {
        const multiplier = window.innerWidth < 600 ? 13 : 20;
        this.style = {
            'z-index': -Math.abs(this.styleIndex),
            transform: `translate(-50%, ${-50 + (this.styleIndex * multiplier)}%) scale(${Math.max(0, 1 - Math.abs(this.styleIndex) / 10)})`
        };
        if (this.styleIndex === 0) {
            this.style['border-top'] = `5px solid ${this.color}`;
        }
    }
}


/***/ }),

/***/ "./src/app/modules/home/experience-section/experience-section.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/home/experience-section/experience-section.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n:host h1 {\n  -webkit-box-flex: 0;\n          flex: 0 0 auto;\n}\n.experience-panel {\n  -webkit-box-flex: 0;\n          flex: 0 1 100%;\n  width: 100%;\n  overflow: auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n.experience-panel #graph-cards, .experience-panel #graph-container {\n  max-height: 80%;\n  height: 80%;\n  width: 40%;\n  position: relative;\n}\n.experience-panel #graph-cards.compact, .experience-panel #graph-container.compact {\n  width: 95%;\n}\n.experience-panel .arrow-back {\n  position: absolute;\n  z-index: 2;\n  left: 0;\n  top: 50%;\n  opacity: 0.3;\n  cursor: pointer;\n  -webkit-transform: translate(-50%, -50%) rotate(90deg);\n          transform: translate(-50%, -50%) rotate(90deg);\n  width: 10%;\n  max-width: 30px;\n}\n.experience-panel .arrow-back polygon {\n  -webkit-animation: canGoBack 3s infinite ease-in-out;\n          animation: canGoBack 3s infinite ease-in-out;\n}\n@-webkit-keyframes canGoBack {\n  0% {\n    opacity: 0.3;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0.3;\n  }\n}\n@keyframes canGoBack {\n  0% {\n    opacity: 0.3;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0.3;\n  }\n}\n.experience-panel #experience-graph {\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n}\n:host ::ng-deep .graph-title-wrap {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  height: 100%;\n}\n:host ::ng-deep .graph-title-wrap .graph-title {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n:host ::ng-deep .graph-node {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 100%;\n  height: 100%;\n  margin: auto;\n  border-radius: 50%;\n  -webkit-transform: scale(0.85);\n          transform: scale(0.85);\n  cursor: pointer;\n  -webkit-transition: all 0.2s ease-in;\n  transition: all 0.2s ease-in;\n}\n:host ::ng-deep .graph-node > *:not(:last-child) {\n  margin-right: center;\n}\n:host ::ng-deep .graph-node .graph-node-light {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: -webkit-gradient(linear, left top, left bottom, from(white), to(rgba(255, 255, 255, 0)));\n  background: linear-gradient(white, rgba(255, 255, 255, 0));\n  opacity: 0.4;\n  border-radius: 50%;\n}\n:host ::ng-deep .graph-node .graph-node-filler {\n  border-radius: 50%;\n  opacity: 0.3;\n  background: white;\n}\n:host ::ng-deep foreignObject.focused .graph-node {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n:host ::ng-deep foreignObject.focused .graph-node .graph-node-filler {\n  opacity: 0.8;\n}\n:host ::ng-deep .mat-tab-group .mat-tab-header {\n  display: none;\n}\n:host ::ng-deep .mat-tab-group .mat-tab-body {\n  width: 80vw;\n  height: 75vh;\n}\n:host ::ng-deep .mat-tab-group .mat-tab-body .mat-tab-body-content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL2V4cGVyaWVuY2Utc2VjdGlvbi9DOlxcVXNlcnNcXExpbmEgUmFnYXVza2FpdGVcXERlc2t0b3BcXHByb2plY3RzXFxwb3J0Zm9saW9cXGFwcC9zcmNcXGFwcFxcbW9kdWxlc1xcaG9tZVxcZXhwZXJpZW5jZS1zZWN0aW9uXFxleHBlcmllbmNlLXNlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvaG9tZS9leHBlcmllbmNlLXNlY3Rpb24vQzpcXFVzZXJzXFxMaW5hIFJhZ2F1c2thaXRlXFxEZXNrdG9wXFxwcm9qZWN0c1xccG9ydGZvbGlvXFxhcHAvc3JjXFxhcHBcXHN0eWxlc1xcYWJzdHJhY3RzXFxtaXhpbnMuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9ob21lL2V4cGVyaWVuY2Utc2VjdGlvbi9leHBlcmllbmNlLXNlY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUM4REUsb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JEOURzQjtVQzhEdEIsdUJEOURzQjtFQytEdEIseUJEL0Q4QjtVQytEOUIsbUJEL0Q4QjtFQ2dFOUIsNEJEaEVjO0VDZ0VkLDZCRGhFYztVQ2dFZCxzQkRoRWM7QUVFaEI7QUZBRTtFQUNFLG1CQUFBO1VBQUEsY0FBQTtBRUVKO0FGRUE7RUFDRSxtQkFBQTtVQUFBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQ21EQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkRuRG1CO1VDbURuQiw2QkRuRG1CO0VDb0RuQix5QkRwRGlDO1VDb0RqQyxtQkRwRGlDO0VDcURqQyw4QkRyRGM7RUNxRGQsNkJEckRjO1VDcURkLG1CRHJEYztBRUloQjtBRkZFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUVJSjtBRkZJO0VBQ0UsVUFBQTtBRUlOO0FGQUU7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esc0RBQUE7VUFBQSw4Q0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FFRUo7QUZBSTtFQUNFLG9EQUFBO1VBQUEsNENBQUE7QUVFTjtBRkNJO0VBQ0U7SUFDRSxZQUFBO0VFQ047RUZFSTtJQUNFLFVBQUE7RUVBTjtFRkdJO0lBQ0UsWUFBQTtFRUROO0FBQ0Y7QUZWSTtFQUNFO0lBQ0UsWUFBQTtFRUNOO0VGRUk7SUFDRSxVQUFBO0VFQU47RUZHSTtJQUNFLFlBQUE7RUVETjtBQUNGO0FGS0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBRUhKO0FGUUU7RUNPQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkRQa0I7RUNPbEIsNkJEUGtCO1VDT2xCLG1CRFBrQjtFQ1FsQix5QkFIK0Q7VUFHL0QsbUJBSCtEO0VBSS9ELHVCRFQ2QjtVQ1M3QiwyQkRUNkI7RUFDM0IsWUFBQTtBRUZKO0FGSUk7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUVGTjtBRk9FO0VDTEEsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJES2tCO0VDTGxCLDZCREtrQjtVQ0xsQixtQkRLa0I7RUNKbEIseUJBSCtEO1VBRy9ELG1CQUgrRDtFQUkvRCx3QkRHK0I7VUNIL0IsdUJERytCO0VBQzdCLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUFBLDRCQUFBO0FFRko7QURMSTtFQUVJLG9CREZpQjtBRVF6QjtBRkNJO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0Esb0dBQUE7RUFBQSwwREFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBRUNOO0FGRUk7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBRUFOO0FGS0k7RUFDRSwyQkFBQTtVQUFBLG1CQUFBO0FFSE47QUZJTTtFQUNFLFlBQUE7QUVGUjtBRlFJO0VBQ0UsYUFBQTtBRU5OO0FGU0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBRVBOO0FGU007RUMzREosb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBRnNDO1VBRXRDLHVCQUZzQztFQUd0Qyx5QkFIc0Q7VUFHdEQsbUJBSHNEO0VBSXRELDhCQUp1QjtFQUl2Qiw2QkFKdUI7VUFJdkIsbUJBSnVCO0FDeUR6QiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9leHBlcmllbmNlLXNlY3Rpb24vZXhwZXJpZW5jZS1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnYWJzdHJhY3RzJztcclxuXHJcbjpob3N0IHtcclxuICBAaW5jbHVkZSBmbGV4KGNvbHVtbiwgY2VudGVyLCBjZW50ZXIpO1xyXG5cclxuICBoMSB7XHJcbiAgICBmbGV4OiAwIDAgYXV0bztcclxuICB9XHJcbn1cclxuXHJcbi5leHBlcmllbmNlLXBhbmVsIHtcclxuICBmbGV4OiAwIDEgMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBAaW5jbHVkZSBmbGV4KHJvdywgc3BhY2UtZXZlbmx5LCBjZW50ZXIpO1xyXG5cclxuICAjZ3JhcGgtY2FyZHMsICNncmFwaC1jb250YWluZXIge1xyXG4gICAgbWF4LWhlaWdodDogODAlO1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICYuY29tcGFjdCB7XHJcbiAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYXJyb3ctYmFjayB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgb3BhY2l0eTogMC4zO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDkwZGVnKTtcclxuICAgIHdpZHRoOiAxMCU7XHJcbiAgICBtYXgtd2lkdGg6IDMwcHg7XHJcblxyXG4gICAgcG9seWdvbiB7XHJcbiAgICAgIGFuaW1hdGlvbjogY2FuR29CYWNrIDNzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gICAgfVxyXG5cclxuICAgIEBrZXlmcmFtZXMgY2FuR29CYWNrIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuMztcclxuICAgICAgfVxyXG5cclxuICAgICAgNTAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICNleHBlcmllbmNlLWdyYXBoIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCB7XHJcbiAgLmdyYXBoLXRpdGxlLXdyYXAge1xyXG4gICAgQGluY2x1ZGUgZnhGbGV4KHJvdywgbnVsbCwgZmxleC1zdGFydCk7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgLmdyYXBoLXRpdGxlIHtcclxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLmdyYXBoLW5vZGUge1xyXG4gICAgQGluY2x1ZGUgZnhGbGV4KHJvdywgY2VudGVyLCBjZW50ZXIpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuODUpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcclxuXHJcbiAgICAuZ3JhcGgtbm9kZS1saWdodCB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQod2hpdGUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpO1xyXG4gICAgICBvcGFjaXR5OiAwLjQ7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIH1cclxuXHJcbiAgICAuZ3JhcGgtbm9kZS1maWxsZXIge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIG9wYWNpdHk6IDAuMztcclxuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb3JlaWduT2JqZWN0LmZvY3VzZWQge1xyXG4gICAgLmdyYXBoLW5vZGUge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAuZ3JhcGgtbm9kZS1maWxsZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm1hdC10YWItZ3JvdXAge1xyXG4gICAgLm1hdC10YWItaGVhZGVyIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAubWF0LXRhYi1ib2R5IHtcclxuICAgICAgd2lkdGg6IDgwdnc7XHJcbiAgICAgIGhlaWdodDogNzV2aDtcclxuXHJcbiAgICAgIC5tYXQtdGFiLWJvZHktY29udGVudCB7XHJcbiAgICAgICAgQGluY2x1ZGUgZmxleDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0ICcuL2Z1bmN0aW9ucyc7XHJcblxyXG5AbWl4aW4gYWJzb2x1dGUtY2VudHJlICgkaG9yaXpvbnRhbDogdHJ1ZSwgJHZlcnRpY2FsOiB0cnVlKSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICBAaWYgJHZlcnRpY2FsIGFuZCAkaG9yaXpvbnRhbCB7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIH0gQGVsc2UgaWYgJGhvcml6b250YWwge1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gIH0gQGVsc2UgaWYgJHZlcnRpY2FsIHtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGFic29sdXRlLWZpbGwgKCR3aWR0aDogbnVsbCwgJGhlaWdodDogbnVsbCwgJHR5cGU6ICdzaXplJykge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuXHJcblxyXG4gIEBpZiAkd2lkdGggIT0gbnVsbCB7XHJcbiAgICBAaWYgJHR5cGUgPT0gJ3NpemUnIHtcclxuICAgICAgd2lkdGg6ICR3aWR0aDtcclxuICAgIH0gQGVsc2UgaWYgJHR5cGUgPT0gJ2VkZ2UnIHtcclxuICAgICAgbGVmdDogJHdpZHRoO1xyXG4gICAgICByaWdodDogJHdpZHRoO1xyXG4gICAgfVxyXG4gIH0gQGVsc2Uge1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG5cclxuICBAaWYgJGhlaWdodCAhPSBudWxsIHtcclxuICAgIEBpZiAkdHlwZSA9PSAnc2l6ZScge1xyXG4gICAgICBoZWlnaHQ6ICRoZWlnaHQ7XHJcbiAgICB9IEBlbHNlIGlmICR0eXBlID09ICdlZGdlJyB7XHJcbiAgICAgIHRvcDogJGhlaWdodDtcclxuICAgICAgYm90dG9tOiAkaGVpZ2h0O1xyXG4gICAgfVxyXG4gIH0gQGVsc2Uge1xyXG4gICAgYm90dG9tOiAwO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIG1hdC1pY29uICgkc2l6ZSwgJGNsYXNzOiB0cnVlKSB7XHJcbiAgQGlmICgkY2xhc3MpIHtcclxuICAgIG1hdC1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAkc2l6ZTtcclxuICAgICAgd2lkdGg6ICRzaXplO1xyXG4gICAgICBoZWlnaHQ6ICRzaXplO1xyXG4gICAgICBsaW5lLWhlaWdodDogJHNpemU7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBmb250LXNpemU6ICRzaXplO1xyXG4gICAgd2lkdGg6ICRzaXplO1xyXG4gICAgaGVpZ2h0OiAkc2l6ZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAkc2l6ZTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4ICgkZGlyZWN0aW9uOiByb3csICRqdXN0aWZ5OiBjZW50ZXIsICRhbGlnbjogY2VudGVyKSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xyXG4gIGFsaWduLWl0ZW1zOiAkYWxpZ247XHJcbiAgZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb247XHJcbn1cclxuXHJcbi8vIEZsZXggbGF5b3V0XHJcbkBtaXhpbiBmeEZsZXggKCRkaXJlY3Rpb24sICRnYXA6IG51bGwsICRqdXN0aWZ5OiBjZW50ZXIsICRhbGlnbjogY2VudGVyKSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcclxuICBhbGlnbi1pdGVtczogJGFsaWduO1xyXG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XHJcblxyXG4gIEBpZiAoJGdhcCkge1xyXG4gICAgPiAqOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgICBAaWYgKCRkaXJlY3Rpb24gPT0gcm93KSB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAkZ2FwO1xyXG4gICAgICB9IEBlbHNlIGlmICgkZGlyZWN0aW9uID09IGNvbHVtbikge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206ICRnYXA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBpdGVtLXNwYWNlICgkZGlyZWN0aW9uOiByb3csICRkaXN0YW5jZTogMjBweCkge1xyXG4gIEBpZiAkZGlyZWN0aW9uID09IHJvdyB7XHJcbiAgICA+ICo6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogJGRpc3RhbmNlO1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJGRpcmVjdGlvbiA9PSBjb2x1bW4ge1xyXG4gICAgPiAqOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAkZGlzdGFuY2U7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG46aG9zdCBoMSB7XG4gIGZsZXg6IDAgMCBhdXRvO1xufVxuXG4uZXhwZXJpZW5jZS1wYW5lbCB7XG4gIGZsZXg6IDAgMSAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLmV4cGVyaWVuY2UtcGFuZWwgI2dyYXBoLWNhcmRzLCAuZXhwZXJpZW5jZS1wYW5lbCAjZ3JhcGgtY29udGFpbmVyIHtcbiAgbWF4LWhlaWdodDogODAlO1xuICBoZWlnaHQ6IDgwJTtcbiAgd2lkdGg6IDQwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmV4cGVyaWVuY2UtcGFuZWwgI2dyYXBoLWNhcmRzLmNvbXBhY3QsIC5leHBlcmllbmNlLXBhbmVsICNncmFwaC1jb250YWluZXIuY29tcGFjdCB7XG4gIHdpZHRoOiA5NSU7XG59XG4uZXhwZXJpZW5jZS1wYW5lbCAuYXJyb3ctYmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMjtcbiAgbGVmdDogMDtcbiAgdG9wOiA1MCU7XG4gIG9wYWNpdHk6IDAuMztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoOTBkZWcpO1xuICB3aWR0aDogMTAlO1xuICBtYXgtd2lkdGg6IDMwcHg7XG59XG4uZXhwZXJpZW5jZS1wYW5lbCAuYXJyb3ctYmFjayBwb2x5Z29uIHtcbiAgYW5pbWF0aW9uOiBjYW5Hb0JhY2sgM3MgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG59XG5Aa2V5ZnJhbWVzIGNhbkdvQmFjayB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwLjM7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDAuMztcbiAgfVxufVxuLmV4cGVyaWVuY2UtcGFuZWwgI2V4cGVyaWVuY2UtZ3JhcGgge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmdyYXBoLXRpdGxlLXdyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGhlaWdodDogMTAwJTtcbn1cbjpob3N0IDo6bmctZGVlcCAuZ3JhcGgtdGl0bGUtd3JhcCAuZ3JhcGgtdGl0bGUge1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbjpob3N0IDo6bmctZGVlcCAuZ3JhcGgtbm9kZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjg1KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5ncmFwaC1ub2RlID4gKjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLXJpZ2h0OiBjZW50ZXI7XG59XG46aG9zdCA6Om5nLWRlZXAgLmdyYXBoLW5vZGUgLmdyYXBoLW5vZGUtbGlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHdoaXRlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKTtcbiAgb3BhY2l0eTogMC40O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG46aG9zdCA6Om5nLWRlZXAgLmdyYXBoLW5vZGUgLmdyYXBoLW5vZGUtZmlsbGVyIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvcGFjaXR5OiAwLjM7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuOmhvc3QgOjpuZy1kZWVwIGZvcmVpZ25PYmplY3QuZm9jdXNlZCAuZ3JhcGgtbm9kZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG46aG9zdCA6Om5nLWRlZXAgZm9yZWlnbk9iamVjdC5mb2N1c2VkIC5ncmFwaC1ub2RlIC5ncmFwaC1ub2RlLWZpbGxlciB7XG4gIG9wYWNpdHk6IDAuODtcbn1cbjpob3N0IDo6bmctZGVlcCAubWF0LXRhYi1ncm91cCAubWF0LXRhYi1oZWFkZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtdGFiLWdyb3VwIC5tYXQtdGFiLWJvZHkge1xuICB3aWR0aDogODB2dztcbiAgaGVpZ2h0OiA3NXZoO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtdGFiLWdyb3VwIC5tYXQtdGFiLWJvZHkgLm1hdC10YWItYm9keS1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/home/experience-section/experience-section.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/home/experience-section/experience-section.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ExperienceSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceSectionComponent", function() { return ExperienceSectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! color */ "./node_modules/color/index.js");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _core_services_view_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services/view.service */ "./src/app/core/services/view.service.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _core_utils_browser_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/utils/browser.util */ "./src/app/core/utils/browser.util.ts");









let ExperienceSectionComponent = class ExperienceSectionComponent {
    constructor(http, viewService) {
        this.http = http;
        this.viewService = viewService;
        this._subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        this.SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
        this.drawGrid = false;
        this.commits = [];
        this.nodes = [];
        // Will be ignored if history element has focused prop defined
        this.selectedIndex = 19;
        this._ySkip = 2;
        this._subscriptions.add(viewService.viewModeChange.subscribe(() => this.RenderGraph()));
    }
    onSelectedChange(index) {
        const node = this.nodes.find(x => x.index === index);
        if (!node)
            return;
        if (!node.focused) {
            node.focused = true;
            this.CenterNode(node);
        }
    }
    onTabChange() {
        setTimeout(() => {
            const node = this.nodes.find(x => x.focused);
            if (node)
                this.CenterNode(node, true);
        }, 200);
    }
    ngOnDestroy() {
        this._subscriptions.unsubscribe();
    }
    swipe(eType) {
        if (!this.matTabGroup)
            return;
        if (eType === this.SWIPE_ACTION.RIGHT && this.matTabGroup.selectedIndex > 0) {
            this.matTabGroup.selectedIndex--;
        }
        else if (eType === this.SWIPE_ACTION.LEFT && this.matTabGroup.selectedIndex < 1) {
            this.matTabGroup.selectedIndex++;
        }
    }
    RenderGraph() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!this.history)
                this.history = (yield this.http.get('assets/history.json').toPromise());
            const columns = this.history.branches.length;
            const rows = this.history.commits.length * this._ySkip - 1;
            const parent = document.getElementById('experience-graph');
            const cellSize = this.viewService.mobile ? 20 : 30;
            const height = rows * cellSize;
            const getX = (x) => cellSize * (x - 0.5) + 5;
            const getY = (y) => height - (cellSize * (y - this._ySkip)) + 5;
            // Calculate grid rows/columns (maxX, maxY)
            // X1 = left, Y1 = down, so yq = maxH - size * q
            const grid = this.GetGridTemplate(cellSize, rows + 2, columns);
            if (parent.firstChild)
                parent.removeChild(parent.firstChild);
            parent.appendChild(grid);
            this.commits = this.history.commits.sort((a, b) => {
                const date1 = moment__WEBPACK_IMPORTED_MODULE_3___default()(a.date, 'YYYY-MMM');
                const date2 = moment__WEBPACK_IMPORTED_MODULE_3___default()(b.date, 'YYYY-MMM');
                return date1.isAfter(date2) ?
                    1 : (
                // If same date, keep original order
                date1.isSame(date2) ? 1 : -1);
            });
            const calculatePositions = () => {
                // First commit must be on master
                // If branch has closed commit, there must be at least one more previous commit
                let activeBranches = new Set();
                let y = -1;
                for (const commit of this.commits) {
                    y += this._ySkip;
                    commit.y = y;
                    const branch = this.history.branches.find(x => x.branch === commit.branch);
                    if (!branch) {
                        console.warn(`Branch '${commit.branch}' undefined.`);
                        continue;
                    }
                    activeBranches.add(branch.branch);
                    if (branch.x === undefined)
                        branch.x = activeBranches.size;
                    commit.x = branch.x;
                    if (commit.closed)
                        activeBranches.delete(branch.branch);
                    commit.color = branch.color;
                }
            };
            const findMaxXAtY = (y, startX) => {
                let maxX;
                for (const el of this.history.branches) {
                    const commits = this.commits.filter(x => x.branch === el.branch);
                    const compareX = commits[0].x;
                    if (compareX <= startX)
                        continue;
                    if (commits.some(c => c.y < y) && commits.some(c => c.y > y)) {
                        if (!maxX || maxX < compareX)
                            maxX = compareX;
                        continue;
                    }
                }
                return maxX;
            };
            const createNodes = () => {
                this.nodes = this.commits.map((commit, i) => {
                    const node = new GraphNode(this.viewService, commit, cellSize, { x: getX(commit.x), y: getY(commit.y) }, getX(findMaxXAtY(commit.y, commit.x) || commit.x), i);
                    if (node.focused) {
                        this._focusedNode = node;
                        this.selectedIndex = i;
                    }
                    node.onFocusChange.subscribe(focused => this.NodeFocusedChanged(node, focused));
                    node.onClick.subscribe(() => {
                        if (this.matTabGroup) {
                            if (this.matTabGroup.selectedIndex === 0)
                                this.selectTab(1);
                        }
                    });
                    return node;
                });
            };
            const renderTitles = () => {
                for (const node of this.nodes) {
                    grid.appendChild(node.titleGroup);
                }
            };
            const renderNodes = () => {
                for (const node of this.nodes) {
                    grid.appendChild(node.nodeObj);
                }
                if (this._focusedNode)
                    this.CenterNode(this._focusedNode);
            };
            const renderBranches = () => {
                const drawLine = (x1, y1, x2, y2) => {
                    const el = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                    el.setAttributeNS(null, 'stroke-width', `${cellSize * 0.2}`);
                    el.setAttributeNS(null, 'x1', `${getX(x1)}`);
                    el.setAttributeNS(null, 'y1', `${getY(y1)}`);
                    el.setAttributeNS(null, 'x2', `${getX(x2)}`);
                    el.setAttributeNS(null, 'y2', `${getY(y2)}`);
                    return el;
                };
                const drawCurve = (x1, y1, x2, y2) => {
                    const el = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                    // M 0 200 C 0 150 50 150 50 100
                    const yDiff = (y2 - y1) / 2;
                    const d = `M ${getX(x1)} ${getY(y1)} C ${getX(x1)} ${getY(y1 + yDiff)} ${getX(x2)} ${getY(y1 + yDiff)} ${getX(x2)} ${getY(y2)}`;
                    el.setAttributeNS(null, 'stroke-width', `${cellSize * 0.2}`);
                    el.setAttributeNS(null, 'd', d);
                    el.setAttributeNS(null, 'fill', 'none');
                    return el;
                };
                const functions = {};
                for (const el of this.history.branches) {
                    const commits = this.commits.filter(x => x.branch === el.branch);
                    const appendLine = (line) => {
                        line.setAttributeNS(null, 'stroke', el.color);
                        grid.appendChild(line);
                    };
                    const { x: startX, y: startY } = commits[0];
                    const { x: lastX, y: lastY } = commits[commits.length - 1];
                    // draw line
                    const line = drawLine(startX, startY, lastX, lastY);
                    if (!functions[el.x])
                        functions[el.x] = [];
                    functions[el.x].push(() => appendLine(line));
                    if (el.origin) {
                        const origin = this.history.branches.find(x => x.branch === el.origin);
                        if (origin) {
                            const forkCommit = this.commits.slice(0, this.commits.indexOf(commits[0]))
                                .reverse()
                                .find(x => x.branch === origin.branch);
                            if (forkCommit) {
                                const curve = drawCurve(origin.x, startY - this._ySkip, startX, startY);
                                functions[el.x].push(() => appendLine(curve));
                            }
                            const lastCommit = commits[commits.length - 1];
                            if (lastCommit.closed) {
                                const curve = drawCurve(lastX, lastY, origin.x, lastY + this._ySkip);
                                appendLine(curve);
                                functions[el.x].push(() => appendLine(curve));
                            }
                        }
                        Object.keys(functions).sort((a, b) => a <= b ? 1 : -1).forEach(x => functions[x].forEach(f => f()));
                    }
                }
            };
            calculatePositions();
            createNodes();
            renderTitles();
            renderBranches();
            renderNodes();
        });
    }
    NodeFocusedChanged(node, focused) {
        if (focused) {
            this.selectedIndex = node.index;
            if (this._focusedNode)
                this._focusedNode.focused = false;
            this._focusedNode = node;
            if (this.matTabGroup) {
                if (this.matTabGroup.selectedIndex === 0)
                    this.selectTab(1);
            }
        }
    }
    selectTab(i) {
        if (this.matTabGroup)
            this.matTabGroup.selectedIndex = i;
    }
    CenterNode(node, onInit = false) {
        const parent = document.getElementById('experience-graph-container');
        if (!parent)
            return;
        const { y, height } = node.nodeObj.getBBox();
        parent.scrollTo({
            top: y + height * 2 - parent.clientHeight / 2,
            behavior: !onInit ? 'smooth' : undefined
        });
    }
    GetGridTemplate(size, rows, columns) {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        // svg.setAttributeNS(null, 'width', `${size * columns + 1}px`)
        svg.setAttributeNS(null, 'width', `100%`);
        svg.setAttributeNS(null, 'height', `${size * rows + 1}px`);
        svg.style.margin = 'auto';
        if (this.drawGrid) {
            const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
            const pattern = document.createElementNS('http://www.w3.org/2000/svg', 'pattern');
            pattern.setAttributeNS(null, 'id', 'grid');
            pattern.setAttributeNS(null, 'width', `${size}`);
            pattern.setAttributeNS(null, 'height', `${size}`);
            pattern.setAttributeNS(null, 'patternUnits', 'userSpaceOnUse');
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttributeNS(null, 'd', `M ${size} 0 L 0 0 0 ${size}`);
            path.setAttributeNS(null, 'fill', 'none');
            path.setAttributeNS(null, 'stroke', 'gray');
            path.setAttributeNS(null, 'stroke-width', '1');
            pattern.appendChild(path);
            defs.appendChild(pattern);
            svg.appendChild(defs);
            const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rect.setAttributeNS(null, 'fill', 'url(#grid)');
            rect.setAttributeNS(null, 'width', '100%');
            rect.setAttributeNS(null, 'height', '100%');
            svg.appendChild(rect);
        }
        return svg;
    }
};
ExperienceSectionComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _core_services_view_service__WEBPACK_IMPORTED_MODULE_6__["ViewService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('matTabGroup', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabGroup"])
], ExperienceSectionComponent.prototype, "matTabGroup", void 0);
ExperienceSectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-experience-section',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./experience-section.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/experience-section/experience-section.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./experience-section.component.scss */ "./src/app/modules/home/experience-section/experience-section.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _core_services_view_service__WEBPACK_IMPORTED_MODULE_6__["ViewService"]])
], ExperienceSectionComponent);

function matchEveniness(target, input) {
    if (Math.round(target) % 2 === 0) {
        if (Math.round(input) % 2 !== 0)
            input--;
    }
    else {
        if (Math.round(input) % 2 === 0)
            input--;
    }
    return input;
}
class GraphNode {
    constructor(viewService, commit, size, position, textX, index) {
        this.viewService = viewService;
        this.commit = commit;
        this.size = size;
        this.position = position;
        this.textX = textX;
        this.index = index;
        this._focused = false;
        this._focusChange = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this._click = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.col = color__WEBPACK_IMPORTED_MODULE_5___default()(this.commit.color || 'black').rgb();
        this.CreateTitleGroup();
        this.CreateBubble();
        this.focused = !!commit.focused;
    }
    get focused() {
        return this._focused;
    }
    set focused(val) {
        if (val === this._focused) {
            this._click.next();
            return;
        }
        this._focused = val;
        this._focusChange.next(this._focused);
        if (this._focused) {
            this.nodeObj.classList.add('focused');
        }
        else {
            this.nodeObj.classList.remove('focused');
        }
    }
    get onFocusChange() {
        return this._focusChange.asObservable();
    }
    get onClick() {
        return this._click.asObservable();
    }
    CreateBubble() {
        this.nodeObj = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
        this.nodeObj.setAttributeNS(null, 'width', `${this.size}`);
        this.nodeObj.setAttributeNS(null, 'height', `${this.size}`);
        this.nodeObj.setAttributeNS(null, 'x', `${this.position.x - this.size / 2}`);
        this.nodeObj.setAttributeNS(null, 'y', `${this.position.y - this.size / 2}`);
        // this.nodeGroup.appendChild(bubbleFor)
        this.nodeObj.classList.add('graph-node-obj');
        const nodeEl = document.createElement('div');
        nodeEl.className = 'graph-node';
        nodeEl.style.background = `${this.col.toString()}`;
        const lightDiv = document.createElement('div');
        lightDiv.className = 'graph-node-light';
        nodeEl.appendChild(lightDiv);
        const bubbleFiller = document.createElement('div');
        bubbleFiller.className = 'graph-node-filler';
        bubbleFiller.style.width = `${matchEveniness(this.size, this.size * 0.7)}px`;
        bubbleFiller.style.height = `${matchEveniness(this.size, this.size * 0.7)}px`;
        nodeEl.appendChild(bubbleFiller);
        this.nodeObj.append(nodeEl);
        nodeEl.onmouseover = () => {
            if (!this.viewService.mobile)
                this.focused = true;
        };
        nodeEl.onclick = () => this.focused = true;
    }
    CreateTitleGroup() {
        this.titleGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        this.titleGroup.style.cursor = 'pointer';
        this._titleBackground = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        this._titleBackground.setAttributeNS(null, 'x', `${this.position.x - this.size * 0.65}`);
        this._titleBackground.setAttributeNS(null, 'y', `${this.position.y - this.size * 0.73}`);
        this._titleBackground.setAttributeNS(null, 'width', `110%`);
        this._titleBackground.setAttributeNS(null, 'height', `${this.size * 1.5}`);
        this._titleBackground.setAttributeNS(null, 'fill', `${this.commit.color || 'black'}`); // this.commit.color ||
        this._titleBackground.setAttributeNS(null, 'rx', `${this.size}`);
        this._titleBackground.style.opacity = '0.05';
        const titleEdge = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        titleEdge.setAttributeNS(null, 'x', `99%`);
        titleEdge.setAttributeNS(null, 'y', `${this.position.y - this.size * 0.73}`);
        titleEdge.setAttributeNS(null, 'width', `1%`);
        titleEdge.setAttributeNS(null, 'height', `${this.size * 1.5}`);
        titleEdge.setAttributeNS(null, 'fill', `${this.commit.color || 'black'}`);
        const forTitle = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
        if (_core_utils_browser_util__WEBPACK_IMPORTED_MODULE_8__["default"].isSafari) {
            forTitle.setAttributeNS(null, 'width', `54%`);
            forTitle.setAttributeNS(null, 'height', `${this.size}`);
        }
        else {
            forTitle.setAttributeNS(null, 'width', `calc(97% - 70px - ${this.textX + this.size}px)`);
            forTitle.setAttributeNS(null, 'height', `${this.size}`);
        }
        forTitle.setAttributeNS(null, 'x', `${this.textX + this.size * 0.75}`);
        forTitle.setAttributeNS(null, 'y', `${this.position.y - this.size / 2}`);
        const titleObj = document.createElement('div');
        titleObj.className = 'graph-title-wrap';
        forTitle.append(titleObj);
        const title = document.createElement('span');
        title.style.color = `${color__WEBPACK_IMPORTED_MODULE_5___default()(this.commit.color).darken(0.2).hex() || 'black'}`;
        title.innerHTML = this.commit.comment;
        title.className = 'graph-title';
        title.style.fontSize = `${this.size / 2}px`;
        titleObj.appendChild(title);
        const date = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        date.innerHTML = moment__WEBPACK_IMPORTED_MODULE_3___default()(this.commit.date, 'YYYY-MMM').format('MMM YYYY');
        date.setAttributeNS(null, 'x', `97%`);
        date.setAttributeNS(null, 'y', `${this.position.y}`);
        date.setAttributeNS(null, 'dominant-baseline', `middle`);
        date.setAttributeNS(null, 'text-anchor', `end`);
        date.setAttributeNS(null, 'fill', `${color__WEBPACK_IMPORTED_MODULE_5___default()(this.commit.color).darken(0.2).hex() || 'black'}`);
        date.style.fontSize = `${this.size / 2}px`;
        this.titleGroup.appendChild(this._titleBackground);
        this.titleGroup.appendChild(forTitle);
        this.titleGroup.appendChild(date);
        this.titleGroup.appendChild(titleEdge);
        this.titleGroup.onclick = () => {
            this.focused = true;
        };
    }
}


/***/ }),

/***/ "./src/app/modules/home/featured-projects/featured-projects.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/home/featured-projects/featured-projects.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin-bottom: 50px;\n}\n:host > *:not(:last-child) {\n  margin-bottom: 50px;\n}\n:host h1 {\n  -webkit-box-flex: 0;\n          flex: 0 0 auto;\n  z-index: 1;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\napp-projects-list {\n  margin-top: -75px;\n  width: 80%;\n  max-width: 1200px;\n}\n@media screen and (max-width: calc(960px - 1px)) {\n  app-projects-list {\n    width: 60%;\n  }\n}\n@media screen and (max-width: calc(600px - 1px)) {\n  app-projects-list {\n    width: 80%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL2ZlYXR1cmVkLXByb2plY3RzL0M6XFxVc2Vyc1xcTGluYSBSYWdhdXNrYWl0ZVxcRGVza3RvcFxccHJvamVjdHNcXHBvcnRmb2xpb1xcYXBwL3NyY1xcYXBwXFxtb2R1bGVzXFxob21lXFxmZWF0dXJlZC1wcm9qZWN0c1xcZmVhdHVyZWQtcHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvaG9tZS9mZWF0dXJlZC1wcm9qZWN0cy9DOlxcVXNlcnNcXExpbmEgUmFnYXVza2FpdGVcXERlc2t0b3BcXHByb2plY3RzXFxwb3J0Zm9saW9cXGFwcC9zcmNcXGFwcFxcc3R5bGVzXFxhYnN0cmFjdHNcXG1peGlucy5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2hvbWUvZmVhdHVyZWQtcHJvamVjdHMvZmVhdHVyZWQtcHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvaG9tZS9mZWF0dXJlZC1wcm9qZWN0cy9DOlxcVXNlcnNcXExpbmEgUmFnYXVza2FpdGVcXERlc2t0b3BcXHByb2plY3RzXFxwb3J0Zm9saW9cXGFwcC9zcmNcXGFwcFxcc3R5bGVzXFxhYnN0cmFjdHNcXGJyZWFrcG9pbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUM4REUsb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JEOURzQjtVQzhEdEIsdUJEOURzQjtFQytEdEIseUJEL0Q4QjtVQytEOUIsbUJEL0Q4QjtFQ2dFOUIsNEJEaEVjO0VDZ0VkLDZCRGhFYztVQ2dFZCxzQkRoRWM7RUFFZCxtQkFBQTtBRUNGO0FEd0ZJO0VBQ0UsbUJEM0Z3QjtBRUs5QjtBRkZFO0VBQ0UsbUJBQUE7VUFBQSxjQUFBO0VBR0EsVUFBQTtFQ3FERixvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFGc0M7VUFFdEMsdUJBRnNDO0VBR3RDLHlCQUhzRDtVQUd0RCxtQkFIc0Q7RUFJdEQsNEJEdkRnQjtFQ3VEaEIsNkJEdkRnQjtVQ3VEaEIsc0JEdkRnQjtBRUtsQjtBRkRBO0VBQ0UsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUVJRjtBQ1dNO0VIbEJOO0lBTUksVUFBQTtFRUtGO0FBQ0Y7QUNNTTtFSGxCTjtJQVVJLFVBQUE7RUVNRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9ob21lL2ZlYXR1cmVkLXByb2plY3RzL2ZlYXR1cmVkLXByb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnYWJzdHJhY3RzJztcclxuXHJcbjpob3N0IHtcclxuICBAaW5jbHVkZSBmbGV4KGNvbHVtbiwgY2VudGVyLCBjZW50ZXIpO1xyXG4gIEBpbmNsdWRlIGl0ZW0tc3BhY2UoY29sdW1uLCA1MHB4KTtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG5cclxuICBoMSB7XHJcbiAgICBmbGV4OiAwIDAgYXV0bztcclxuICAgIC8vIFNvIHRoYXQgY2FudmFzIG9mIGFwcC1wcm9qZWN0cy1saXN0IHdvdWxkIG5vdCBnZXQgZHJhd24gb3ZlciBoZWFkZXJcclxuICAgIC8vIGR1ZSB0byBuZWdhdGl2ZSBtYXJnaW4tdG9wXHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgQGluY2x1ZGUgZmxleChjb2x1bW4pO1xyXG4gIH1cclxufVxyXG5cclxuYXBwLXByb2plY3RzLWxpc3Qge1xyXG4gIG1hcmdpbi10b3A6IC03NXB4O1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcblxyXG4gIEBpbmNsdWRlIGJyZWFrICgnbHQnLCAnbScpIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgfVxyXG5cclxuICBAaW5jbHVkZSBicmVhayAoJ2x0JywgJ3MnKSB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0ICcuL2Z1bmN0aW9ucyc7XHJcblxyXG5AbWl4aW4gYWJzb2x1dGUtY2VudHJlICgkaG9yaXpvbnRhbDogdHJ1ZSwgJHZlcnRpY2FsOiB0cnVlKSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICBAaWYgJHZlcnRpY2FsIGFuZCAkaG9yaXpvbnRhbCB7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIH0gQGVsc2UgaWYgJGhvcml6b250YWwge1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gIH0gQGVsc2UgaWYgJHZlcnRpY2FsIHtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGFic29sdXRlLWZpbGwgKCR3aWR0aDogbnVsbCwgJGhlaWdodDogbnVsbCwgJHR5cGU6ICdzaXplJykge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuXHJcblxyXG4gIEBpZiAkd2lkdGggIT0gbnVsbCB7XHJcbiAgICBAaWYgJHR5cGUgPT0gJ3NpemUnIHtcclxuICAgICAgd2lkdGg6ICR3aWR0aDtcclxuICAgIH0gQGVsc2UgaWYgJHR5cGUgPT0gJ2VkZ2UnIHtcclxuICAgICAgbGVmdDogJHdpZHRoO1xyXG4gICAgICByaWdodDogJHdpZHRoO1xyXG4gICAgfVxyXG4gIH0gQGVsc2Uge1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG5cclxuICBAaWYgJGhlaWdodCAhPSBudWxsIHtcclxuICAgIEBpZiAkdHlwZSA9PSAnc2l6ZScge1xyXG4gICAgICBoZWlnaHQ6ICRoZWlnaHQ7XHJcbiAgICB9IEBlbHNlIGlmICR0eXBlID09ICdlZGdlJyB7XHJcbiAgICAgIHRvcDogJGhlaWdodDtcclxuICAgICAgYm90dG9tOiAkaGVpZ2h0O1xyXG4gICAgfVxyXG4gIH0gQGVsc2Uge1xyXG4gICAgYm90dG9tOiAwO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIG1hdC1pY29uICgkc2l6ZSwgJGNsYXNzOiB0cnVlKSB7XHJcbiAgQGlmICgkY2xhc3MpIHtcclxuICAgIG1hdC1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAkc2l6ZTtcclxuICAgICAgd2lkdGg6ICRzaXplO1xyXG4gICAgICBoZWlnaHQ6ICRzaXplO1xyXG4gICAgICBsaW5lLWhlaWdodDogJHNpemU7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBmb250LXNpemU6ICRzaXplO1xyXG4gICAgd2lkdGg6ICRzaXplO1xyXG4gICAgaGVpZ2h0OiAkc2l6ZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAkc2l6ZTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4ICgkZGlyZWN0aW9uOiByb3csICRqdXN0aWZ5OiBjZW50ZXIsICRhbGlnbjogY2VudGVyKSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xyXG4gIGFsaWduLWl0ZW1zOiAkYWxpZ247XHJcbiAgZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb247XHJcbn1cclxuXHJcbi8vIEZsZXggbGF5b3V0XHJcbkBtaXhpbiBmeEZsZXggKCRkaXJlY3Rpb24sICRnYXA6IG51bGwsICRqdXN0aWZ5OiBjZW50ZXIsICRhbGlnbjogY2VudGVyKSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcclxuICBhbGlnbi1pdGVtczogJGFsaWduO1xyXG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XHJcblxyXG4gIEBpZiAoJGdhcCkge1xyXG4gICAgPiAqOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgICBAaWYgKCRkaXJlY3Rpb24gPT0gcm93KSB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAkZ2FwO1xyXG4gICAgICB9IEBlbHNlIGlmICgkZGlyZWN0aW9uID09IGNvbHVtbikge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206ICRnYXA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBpdGVtLXNwYWNlICgkZGlyZWN0aW9uOiByb3csICRkaXN0YW5jZTogMjBweCkge1xyXG4gIEBpZiAkZGlyZWN0aW9uID09IHJvdyB7XHJcbiAgICA+ICo6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogJGRpc3RhbmNlO1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJGRpcmVjdGlvbiA9PSBjb2x1bW4ge1xyXG4gICAgPiAqOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAkZGlzdGFuY2U7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG46aG9zdCA+ICo6bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG46aG9zdCBoMSB7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICB6LWluZGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuYXBwLXByb2plY3RzLWxpc3Qge1xuICBtYXJnaW4tdG9wOiAtNzVweDtcbiAgd2lkdGg6IDgwJTtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiBjYWxjKDk2MHB4IC0gMXB4KSkge1xuICBhcHAtcHJvamVjdHMtbGlzdCB7XG4gICAgd2lkdGg6IDYwJTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogY2FsYyg2MDBweCAtIDFweCkpIHtcbiAgYXBwLXByb2plY3RzLWxpc3Qge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbn0iLCJcclxuLy8gLS0tPiBCcmVha3BvaW50c1xyXG4kYnJlYWtwb2ludHM6IChcclxuICAneHMtbWluJzogMHB4LFxyXG4gICd4cy1tYXgnOiA1OTlweCxcclxuICAncy1taW4nOiA2MDBweCxcclxuICAncy1tYXgnOiA5NTlweCxcclxuICAnbS1taW4nOiA5NjBweCxcclxuICAnbS1tYXgnOiAxMjc5cHgsXHJcbiAgJ2wtbWluJzogMTI4MHB4LFxyXG4gICdsLW1heCc6IDE5MTlweCxcclxuICAneGwtbWluJzogMTkyMHB4LFxyXG4gICd4bC1tYXgnOiA1MDAwcHhcclxuKSAhZGVmYXVsdDtcclxuXHJcbi8vIHhzXHQnc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCknXHJcbi8vIHNtXHQnc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KSdcclxuLy8gbWRcdCdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSBhbmQgKG1heC13aWR0aDogMTI3OXB4KSdcclxuLy8gbGdcdCdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODBweCkgYW5kIChtYXgtd2lkdGg6IDE5MTlweCknXHJcbi8vIHhsXHQnc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpIGFuZCAobWF4LXdpZHRoOiA1MDAwcHgpJ1xyXG5cclxuLy8gbHQtc21cdCdzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSdcclxuLy8gbHQtbWRcdCdzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1OXB4KSdcclxuLy8gbHQtbGdcdCdzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNzlweCknXHJcbi8vIGx0LXhsXHQnc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxOTE5cHgpJ1xyXG5cclxuLy8gZ3QteHNcdCdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSdcclxuLy8gZ3Qtc21cdCdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSdcclxuLy8gZ3QtbWRcdCdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODBweCknXHJcbi8vIGd0LWxnXHQnc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpJ1xyXG5cclxuQG1peGluIGJyZWFrKCRsdEd0LCAkYnJlYWtwb2ludCkge1xyXG4gIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICcjeyRicmVha3BvaW50fS1taW4nKSB7XHJcbiAgICBAaWYgKCRsdEd0ID09ICdsdCcpIHtcclxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogY2FsYygje21hcC1nZXQoJGJyZWFrcG9pbnRzLCAnI3skYnJlYWtwb2ludH0tbWluJyl9IC0gMXB4KSkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgICB9XHJcbiAgICB9IEBlbHNlIGlmICgkbHRHdCA9PSAnZ3QnKSB7XHJcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IGNhbGMoI3ttYXAtZ2V0KCRicmVha3BvaW50cywgJyN7JGJyZWFrcG9pbnR9LW1heCcpfSArIDFweCkpIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgICAgfVxyXG4gICAgfSBAZWxzZSB7XHJcbiAgICAgIEBlcnJvciAnVW5yZWNvZ25pc2VkIHBhcmFtZXRlciAjeyRsdEd0fS4gVmFsdWVzIFxcJ2d0XFwnIGFuZCBcXCdsdFxcJyBhcmUgYWNjZXB0ZWQuJztcclxuICAgIH1cclxuICB9IEBlbHNlIHtcclxuICAgIEBlcnJvciAnVW5yZWNvZ25pc2VkIGJyZWFrcG9pbnQgI3skYnJlYWtwb2ludH0uIEF2YWlsYWJsZSBicmVha3BvaW50cyBhcmU6ICN7bWFwLWtleXMoJGJyZWFrcG9pbnRzKX0uJztcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBicmVhay1wcm9wICgkcHJvcGVydHksICRicmVhay1tYXApIHtcclxuICAvLyB4c1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XHJcbiAgICAjeyRwcm9wZXJ0eX06IG1hcC1nZXQoJGJyZWFrLW1hcCwgJ3hzJyk7XHJcbiAgfVxyXG4gIC8vIHNcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XHJcbiAgICAjeyRwcm9wZXJ0eX06IG1hcC1nZXQoJGJyZWFrLW1hcCwgJ3MnKTtcclxuICB9XHJcbiAgLy8gbVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSBhbmQgKG1heC13aWR0aDogMTI3OXB4KSB7XHJcbiAgICAjeyRwcm9wZXJ0eX06IG1hcC1nZXQoJGJyZWFrLW1hcCwgJ20nKTtcclxuICB9XHJcbiAgLy8gbFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODBweCkgYW5kIChtYXgtd2lkdGg6IDE5MTlweCkge1xyXG4gICAgI3skcHJvcGVydHl9OiBtYXAtZ2V0KCRicmVhay1tYXAsICdsJyk7XHJcbiAgfVxyXG4gIC8vIHhsXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTkyMHB4KSB7XHJcbiAgICAjeyRwcm9wZXJ0eX06IG1hcC1nZXQoJGJyZWFrLW1hcCwgJ3hsJyk7XHJcbiAgfVxyXG59XHJcbi8vIDwtLS0gQnJlYWtwb2ludHNcclxuXHJcbkBtaXhpbiBicmVhay1mb250ICgkc2l6ZSwgJG1pbjogbnVsbCwgJG1heDogbnVsbCkge1xyXG4gIEBpbmNsdWRlIGJyZWFrLXByb3AoJ2ZvbnQtc2l6ZScsIChcclxuICAgICd4cyc6IHNuYXAoJHNpemUgKiAwLjYsICRtaW4sICRtYXgpLFxyXG4gICAgJ3MnOiBzbmFwKCRzaXplICogMC44LCAkbWluLCAkbWF4KSxcclxuICAgICdtJzogJHNpemUsXHJcbiAgICAnbCc6IHNuYXAoJHNpemUgKiAxLjEsICRtaW4sICRtYXgpLFxyXG4gICAgJ3hsJzogc25hcCgkc2l6ZSAqIDEuMiwgJG1pbiwgJG1heClcclxuICApKVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/modules/home/featured-projects/featured-projects.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/home/featured-projects/featured-projects.component.ts ***!
  \*******************************************************************************/
/*! exports provided: FeaturedProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturedProjectsComponent", function() { return FeaturedProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_services_projects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/projects.service */ "./src/app/core/services/projects.service.ts");
/* harmony import */ var _core_services_view_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/view.service */ "./src/app/core/services/view.service.ts");




let FeaturedProjectsComponent = class FeaturedProjectsComponent {
    constructor(viewService, projectsService) {
        this.viewService = viewService;
        this.projectsService = projectsService;
    }
};
FeaturedProjectsComponent.ctorParameters = () => [
    { type: _core_services_view_service__WEBPACK_IMPORTED_MODULE_3__["ViewService"] },
    { type: _core_services_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"] }
];
FeaturedProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-featured-projects',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./featured-projects.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/featured-projects/featured-projects.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./featured-projects.component.scss */ "./src/app/modules/home/featured-projects/featured-projects.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_view_service__WEBPACK_IMPORTED_MODULE_3__["ViewService"],
        _core_services_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"]])
], FeaturedProjectsComponent);



/***/ }),

/***/ "./src/app/modules/home/home.component.scss":
/*!**************************************************!*\
  !*** ./src/app/modules/home/home.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  width: 100%;\n  height: 100%;\n}\n\n.section {\n  width: 100%;\n  height: calc(100vh - 150px);\n  min-height: 500px;\n  overflow: hidden;\n  display: -webkit-box;\n  display: flex;\n  box-sizing: border-box;\n}\n\napp-featured-projects.section {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL0M6XFxVc2Vyc1xcTGluYSBSYWdhdXNrYWl0ZVxcRGVza3RvcFxccHJvamVjdHNcXHBvcnRmb2xpb1xcYXBwL3NyY1xcYXBwXFxtb2R1bGVzXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDREY7O0FESUE7RUFDRSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esc0JBQUE7QUNERjs7QURJQTtFQUNFLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdhYnN0cmFjdHMnO1xyXG5cclxuOmhvc3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnNlY3Rpb24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDE1MHB4KTtcclxuICBtaW4taGVpZ2h0OiA1MDBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuYXBwLWZlYXR1cmVkLXByb2plY3RzLnNlY3Rpb24ge1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbn1cclxuIiwiOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2VjdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNTBweCk7XG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5hcHAtZmVhdHVyZWQtcHJvamVjdHMuc2VjdGlvbiB7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/home/home.component.ts":
/*!************************************************!*\
  !*** ./src/app/modules/home/home.component.ts ***!
  \************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_services_navbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/navbar.service */ "./src/app/core/services/navbar.service.ts");
/* harmony import */ var _core_model_section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/model/section */ "./src/app/core/model/section.ts");
/* harmony import */ var _core_services_projects_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/projects.service */ "./src/app/core/services/projects.service.ts");





let HomeComponent = class HomeComponent {
    constructor(navBar, projectsService) {
        this.navBar = navBar;
        this.projectsService = projectsService;
        this.section = _core_model_section__WEBPACK_IMPORTED_MODULE_3__["Section"];
    }
};
HomeComponent.ctorParameters = () => [
    { type: _core_services_navbar_service__WEBPACK_IMPORTED_MODULE_2__["NavBarService"] },
    { type: _core_services_projects_service__WEBPACK_IMPORTED_MODULE_4__["ProjectsService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/modules/home/home.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_navbar_service__WEBPACK_IMPORTED_MODULE_2__["NavBarService"],
        _core_services_projects_service__WEBPACK_IMPORTED_MODULE_4__["ProjectsService"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/modules/home/home.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/home/home.module.ts ***!
  \*********************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/modules/home/home.component.ts");
/* harmony import */ var _home_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.routing */ "./src/app/modules/home/home.routing.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./intro/intro.component */ "./src/app/modules/home/intro/intro.component.ts");
/* harmony import */ var _intro_img_bubbles_img_bubbles_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./intro/img-bubbles/img-bubbles.component */ "./src/app/modules/home/intro/img-bubbles/img-bubbles.component.ts");
/* harmony import */ var _contact_me_contact_me_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact-me/contact-me.component */ "./src/app/modules/home/contact-me/contact-me.component.ts");
/* harmony import */ var _components_waves_waves_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/waves/waves.component */ "./src/app/modules/home/components/waves/waves.component.ts");
/* harmony import */ var _experience_section_experience_section_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./experience-section/experience-section.component */ "./src/app/modules/home/experience-section/experience-section.component.ts");
/* harmony import */ var _experience_section_card_carousel_card_carousel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./experience-section/card-carousel/card-carousel.component */ "./src/app/modules/home/experience-section/card-carousel/card-carousel.component.ts");
/* harmony import */ var _featured_projects_featured_projects_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./featured-projects/featured-projects.component */ "./src/app/modules/home/featured-projects/featured-projects.component.ts");













let HomeModule = class HomeModule {
};
HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
            _intro_intro_component__WEBPACK_IMPORTED_MODULE_6__["IntroComponent"],
            _components_waves_waves_component__WEBPACK_IMPORTED_MODULE_9__["WavesComponent"],
            _intro_img_bubbles_img_bubbles_component__WEBPACK_IMPORTED_MODULE_7__["ImgBubblesComponent"],
            _contact_me_contact_me_component__WEBPACK_IMPORTED_MODULE_8__["ContactMeComponent"],
            _experience_section_experience_section_component__WEBPACK_IMPORTED_MODULE_10__["ExperienceSectionComponent"],
            _experience_section_card_carousel_card_carousel_component__WEBPACK_IMPORTED_MODULE_11__["CardCarouselComponent"],
            _featured_projects_featured_projects_component__WEBPACK_IMPORTED_MODULE_12__["FeaturedProjectsComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _home_routing__WEBPACK_IMPORTED_MODULE_4__["HomeRoutingModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"]
        ]
    })
], HomeModule);



/***/ }),

/***/ "./src/app/modules/home/home.routing.ts":
/*!**********************************************!*\
  !*** ./src/app/modules/home/home.routing.ts ***!
  \**********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/modules/home/home.component.ts");




const routes = [
    { path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }
];
let HomeRoutingModule = class HomeRoutingModule {
};
HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomeRoutingModule);



/***/ }),

/***/ "./src/app/modules/home/intro/img-bubbles/img-bubbles.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/modules/home/intro/img-bubbles/img-bubbles.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n  width: 100%;\n  height: 100%;\n  min-height: 100px;\n  min-width: 150px;\n}\n:host #resize-container {\n  width: 100%;\n  height: 100%;\n}\n::ng-deep .bubble-container {\n  position: absolute;\n  z-index: 2;\n  opacity: 0.9;\n  -webkit-transition: opacity 0.3s linear, -webkit-filter 0.3s linear;\n  transition: opacity 0.3s linear, -webkit-filter 0.3s linear;\n  transition: opacity 0.3s linear, filter 0.3s linear;\n  transition: opacity 0.3s linear, filter 0.3s linear, -webkit-filter 0.3s linear;\n}\n::ng-deep .bubble-container .bubble {\n  border-radius: 50%;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1), 0 3px 10px rgba(0, 0, 0, 0.1);\n}\n::ng-deep .bubble-container .bubble svg {\n  position: absolute;\n  -webkit-transition: opacity 0.3s ease-in-out, top 0.3s ease-in-out, -webkit-backface-visibility 0s;\n  transition: opacity 0.3s ease-in-out, top 0.3s ease-in-out, -webkit-backface-visibility 0s;\n  transition: opacity 0.3s ease-in-out, top 0.3s ease-in-out, backface-visibility 0s;\n  transition: opacity 0.3s ease-in-out, top 0.3s ease-in-out, backface-visibility 0s, -webkit-backface-visibility 0s;\n  opacity: 0;\n  top: 20px;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-transform: rotateX(0deg);\n          transform: rotateX(0deg);\n  overflow: visible;\n  -webkit-filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.1));\n          filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.1));\n  z-index: 1;\n}\n::ng-deep .bubble-container .bubble svg.back {\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg);\n}\n::ng-deep .bubble-container .bubble img, ::ng-deep .bubble-container .bubble div {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  position: absolute;\n  top: 0;\n  left: 0;\n  border-radius: 50%;\n  z-index: 3;\n}\n::ng-deep .bubble-container .bubble img.back, ::ng-deep .bubble-container .bubble div.back {\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg);\n}\n::ng-deep .bubble-container:hover {\n  opacity: 1;\n}\n::ng-deep .bubble-container:hover svg {\n  opacity: 1;\n  top: 0;\n}\n::ng-deep .sprite {\n  background-image: url('sprite.jpg');\n  background-repeat: no-repeat;\n  background-size: 100%;\n}\n::ng-deep .sprite.angular {\n  background-position: 0 0;\n}\n::ng-deep .sprite.electron {\n  background-position: 0 calc(100% / 36);\n}\n::ng-deep .sprite.gopher {\n  background-position: 0 calc(100% / 36 * 2);\n}\n::ng-deep .sprite.graphql {\n  background-position: 0 calc(100% / 36 * 3);\n}\n::ng-deep .sprite.ionic {\n  background-position: 0 calc(100% / 36 * 4);\n}\n::ng-deep .sprite.jasmine {\n  background-position: 0 calc(100% / 36 * 5);\n}\n::ng-deep .sprite.javascript {\n  background-position: 0 calc(100% / 36 * 6);\n}\n::ng-deep .sprite.mocha {\n  background-position: 0 calc(100% / 36 * 7);\n}\n::ng-deep .sprite.mongodb {\n  background-position: 0 calc(100% / 36 * 8);\n}\n::ng-deep .sprite.nestjs {\n  background-position: 0 calc(100% / 36 * 9);\n}\n::ng-deep .sprite.nodejs {\n  background-position: 0 calc(100% / 36 * 10);\n}\n::ng-deep .sprite.postgresql {\n  background-position: 0 calc(100% / 36 * 11);\n}\n::ng-deep .sprite.reactivex {\n  background-position: 0 calc(100% / 36 * 12);\n}\n::ng-deep .sprite.swagger {\n  background-position: 0 calc(100% / 36 * 13);\n}\n::ng-deep .sprite.typescript {\n  background-position: 0 calc(100% / 36 * 14);\n}\n::ng-deep .sprite.logstash {\n  background-position: 0 calc(100% / 36 * 15);\n}\n::ng-deep .sprite.stackdriver {\n  background-position: 0 calc(100% / 36 * 16);\n}\n::ng-deep .sprite.travis-ci {\n  background-position: 0 calc(100% / 36 * 17);\n}\n::ng-deep .sprite.beats {\n  background-position: 0 calc(100% / 36 * 18);\n}\n::ng-deep .sprite.cloud-datastore {\n  background-position: 0 calc(100% / 36 * 19);\n}\n::ng-deep .sprite.cloudflare {\n  background-position: 0 calc(100% / 36 * 20);\n}\n::ng-deep .sprite.cloud-functions {\n  background-position: 0 calc(100% / 36 * 21);\n}\n::ng-deep .sprite.cloud-pubsub {\n  background-position: 0 calc(100% / 36 * 22);\n}\n::ng-deep .sprite.cloud-run {\n  background-position: 0 calc(100% / 36 * 23);\n}\n::ng-deep .sprite.cloud-sql {\n  background-position: 0 calc(100% / 36 * 24);\n}\n::ng-deep .sprite.cloud-storage {\n  background-position: 0 calc(100% / 36 * 25);\n}\n::ng-deep .sprite.cloud-tasks {\n  background-position: 0 calc(100% / 36 * 26);\n}\n::ng-deep .sprite.compute-engine {\n  background-position: 0 calc(100% / 36 * 27);\n}\n::ng-deep .sprite.container-registry {\n  background-position: 0 calc(100% / 36 * 28);\n}\n::ng-deep .sprite.docker {\n  background-position: 0 calc(100% / 36 * 29);\n}\n::ng-deep .sprite.elasticsearch {\n  background-position: 0 calc(100% / 36 * 30);\n}\n::ng-deep .sprite.git-icon {\n  background-position: 0 calc(100% / 36 * 31);\n}\n::ng-deep .sprite.gitlab {\n  background-position: 0 calc(100% / 36 * 32);\n}\n::ng-deep .sprite.google-cloud {\n  background-position: 0 calc(100% / 36 * 33);\n}\n::ng-deep .sprite.heroku {\n  background-position: 0 calc(100% / 36 * 34);\n}\n::ng-deep .sprite.kibana {\n  background-position: 0 calc(100% / 36 * 35);\n}\n::ng-deep .sprite.kubernetes-logo {\n  background-position: 0 calc(100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL2ludHJvL2ltZy1idWJibGVzL0M6XFxVc2Vyc1xcTGluYSBSYWdhdXNrYWl0ZVxcRGVza3RvcFxccHJvamVjdHNcXHBvcnRmb2xpb1xcYXBwL3NyY1xcYXBwXFxtb2R1bGVzXFxob21lXFxpbnRyb1xcaW1nLWJ1YmJsZXNcXGltZy1idWJibGVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2hvbWUvaW50cm8vaW1nLWJ1YmJsZXMvaW1nLWJ1YmJsZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDREY7QURHRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDREo7QURNQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxtRUFBQTtFQUFBLDJEQUFBO0VBQUEsbURBQUE7RUFBQSwrRUFBQTtBQ0hGO0FES0U7RUFDRSxrQkFBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7RUFDQSx5RUFDRTtBQ0pOO0FEUUk7RUFDRSxrQkFBQTtFQUNBLGtHQUFBO0VBQUEsMEZBQUE7RUFBQSxrRkFBQTtFQUFBLGtIQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsZ0NBQUE7VUFBQSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsNERBQUE7VUFBQSxvREFBQTtFQUNBLFVBQUE7QUNOTjtBRFFNO0VBQ0Usa0NBQUE7VUFBQSwwQkFBQTtBQ05SO0FEV0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ1ROO0FEV007RUFDRSxrQ0FBQTtVQUFBLDBCQUFBO0FDVFI7QURnQkU7RUFDRSxVQUFBO0FDZEo7QURnQkk7RUFDRSxVQUFBO0VBQ0EsTUFBQTtBQ2ROO0FEcUJBO0VBQ0UsbUNBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0FDbEJGO0FEcUJBO0VBQWtCLHdCQUFBO0FDbEJsQjtBRG1CQTtFQUFtQixzQ0FBQTtBQ2hCbkI7QURpQkE7RUFBaUIsMENBQUE7QUNkakI7QURlQTtFQUFrQiwwQ0FBQTtBQ1psQjtBRGFBO0VBQWdCLDBDQUFBO0FDVmhCO0FEV0E7RUFBa0IsMENBQUE7QUNSbEI7QURTQTtFQUFxQiwwQ0FBQTtBQ05yQjtBRE9BO0VBQWdCLDBDQUFBO0FDSmhCO0FES0E7RUFBa0IsMENBQUE7QUNGbEI7QURHQTtFQUFpQiwwQ0FBQTtBQ0FqQjtBRENBO0VBQWlCLDJDQUFBO0FDRWpCO0FEREE7RUFBcUIsMkNBQUE7QUNJckI7QURIQTtFQUFvQiwyQ0FBQTtBQ01wQjtBRExBO0VBQWtCLDJDQUFBO0FDUWxCO0FEUEE7RUFBcUIsMkNBQUE7QUNVckI7QURUQTtFQUFtQiwyQ0FBQTtBQ1luQjtBRFhBO0VBQXNCLDJDQUFBO0FDY3RCO0FEYkE7RUFBb0IsMkNBQUE7QUNnQnBCO0FEZkE7RUFBZ0IsMkNBQUE7QUNrQmhCO0FEakJBO0VBQTBCLDJDQUFBO0FDb0IxQjtBRG5CQTtFQUFxQiwyQ0FBQTtBQ3NCckI7QURyQkE7RUFBMEIsMkNBQUE7QUN3QjFCO0FEdkJBO0VBQXVCLDJDQUFBO0FDMEJ2QjtBRHpCQTtFQUFvQiwyQ0FBQTtBQzRCcEI7QUQzQkE7RUFBb0IsMkNBQUE7QUM4QnBCO0FEN0JBO0VBQXdCLDJDQUFBO0FDZ0N4QjtBRC9CQTtFQUFzQiwyQ0FBQTtBQ2tDdEI7QURqQ0E7RUFBeUIsMkNBQUE7QUNvQ3pCO0FEbkNBO0VBQTZCLDJDQUFBO0FDc0M3QjtBRHJDQTtFQUFpQiwyQ0FBQTtBQ3dDakI7QUR2Q0E7RUFBd0IsMkNBQUE7QUMwQ3hCO0FEekNBO0VBQW1CLDJDQUFBO0FDNENuQjtBRDNDQTtFQUFpQiwyQ0FBQTtBQzhDakI7QUQ3Q0E7RUFBdUIsMkNBQUE7QUNnRHZCO0FEL0NBO0VBQWlCLDJDQUFBO0FDa0RqQjtBRGpEQTtFQUFpQiwyQ0FBQTtBQ29EakI7QURuREE7RUFBMEIsaUNBQUE7QUNzRDFCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9ob21lL2ludHJvL2ltZy1idWJibGVzL2ltZy1idWJibGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnYWJzdHJhY3RzJztcclxuXHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxuXHJcbiAgI3Jlc2l6ZS1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuOjpuZy1kZWVwIC5idWJibGUtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMjtcclxuICBvcGFjaXR5OiAwLjk7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGxpbmVhciwgZmlsdGVyIDAuM3MgbGluZWFyO1xyXG5cclxuICAuYnViYmxlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICBib3gtc2hhZG93OlxyXG4gICAgICAwIDE1cHggMzVweCByZ2JhKDAsIDAsIDAsIDAuMSksXHJcbiAgICAgIDAgM3B4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG5cclxuXHJcbiAgICBzdmcge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLWluLW91dCwgdG9wIDAuM3MgZWFzZS1pbi1vdXQsIGJhY2tmYWNlLXZpc2liaWxpdHkgMHM7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHRvcDogMjBweDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XHJcbiAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCA0cHggMTJweCByZ2JhKDAsMCwwLDAuMSkpO1xyXG4gICAgICB6LWluZGV4OiAxO1xyXG5cclxuICAgICAgJi5iYWNrIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGltZyBpZiBpbWFnZXMgdXNlZCwgZGl2IGlzIHNwcml0ZXMgdXNlZFxyXG4gICAgaW1nLCBkaXYge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIHotaW5kZXg6IDM7XHJcblxyXG4gICAgICAmLmJhY2sge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuXHJcbiAgICBzdmcge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAge1xyXG4gIC8vIEdlbmVyYXRlZCBAIGh0dHBzOi8vaW5zdGFudHNwcml0ZS5jb20vIHdpdGggcG9zaXRpb25zIGFkanVzdGVkIHRvICUgaW5zdGVhZCBvZiBmaXhlZFxyXG4uc3ByaXRlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2Fzc2V0cy9pY29ucy9za2lsbHMvanBnL3Nwcml0ZS5qcGcnKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxufVxyXG5cclxuLnNwcml0ZS5hbmd1bGFyIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwOyB9XHJcbi5zcHJpdGUuZWxlY3Ryb24geyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIGNhbGMoMTAwJSAvIDM2KTsgfVxyXG4uc3ByaXRlLmdvcGhlciB7IGJhY2tncm91bmQtcG9zaXRpb246IDAgY2FsYygxMDAlIC8gMzYgKiAyKTsgfVxyXG4uc3ByaXRlLmdyYXBocWwgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIGNhbGMoMTAwJSAvIDM2ICogMyk7IH1cclxuLnNwcml0ZS5pb25pYyB7IGJhY2tncm91bmQtcG9zaXRpb246IDAgY2FsYygxMDAlIC8gMzYgKiA0KTsgfVxyXG4uc3ByaXRlLmphc21pbmUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIGNhbGMoMTAwJSAvIDM2ICogNSk7IH1cclxuLnNwcml0ZS5qYXZhc2NyaXB0IHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMCBjYWxjKDEwMCUgLyAzNiAqIDYpOyB9XHJcbi5zcHJpdGUubW9jaGEgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIGNhbGMoMTAwJSAvIDM2ICogNyk7IH1cclxuLnNwcml0ZS5tb25nb2RiIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMCBjYWxjKDEwMCUgLyAzNiAqIDgpOyB9XHJcbi5zcHJpdGUubmVzdGpzIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMCBjYWxjKDEwMCUgLyAzNiAqIDkpOyB9XHJcbi5zcHJpdGUubm9kZWpzIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMCBjYWxjKDEwMCUgLyAzNiAqIDEwKTsgfVxyXG4uc3ByaXRlLnBvc3RncmVzcWwgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIGNhbGMoMTAwJSAvIDM2ICogMTEpOyB9XHJcbi5zcHJpdGUucmVhY3RpdmV4IHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMCBjYWxjKDEwMCUgLyAzNiAqIDEyKTsgfVxyXG4uc3ByaXRlLnN3YWdnZXIgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIGNhbGMoMTAwJSAvIDM2ICogMTMpOyB9XHJcbi5zcHJpdGUudHlwZXNjcmlwdCB7IGJhY2tncm91bmQtcG9zaXRpb246IDAgY2FsYygxMDAlIC8gMzYgKiAxNCk7IH1cclxuLnNwcml0ZS5sb2dzdGFzaCB7IGJhY2tncm91bmQtcG9zaXRpb246IDAgY2FsYygxMDAlIC8gMzYgKiAxNSk7IH1cclxuLnNwcml0ZS5zdGFja2RyaXZlciB7IGJhY2tncm91bmQtcG9zaXRpb246IDAgY2FsYygxMDAlIC8gMzYgKiAxNik7IH1cclxuLnNwcml0ZS50cmF2aXMtY2kgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIGNhbGMoMTAwJSAvIDM2ICogMTcpOyB9XHJcbi5zcHJpdGUuYmVhdHMgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIGNhbGMoMTAwJSAvIDM2ICogMTgpOyB9XHJcbi5zcHJpdGUuY2xvdWQtZGF0YXN0b3JlIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMCBjYWxjKDEwMCUgLyAzNiAqIDE5KTsgfVxyXG4uc3ByaXRlLmNsb3VkZmxhcmUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIGNhbGMoMTAwJSAvIDM2ICogMjApOyB9XHJcbi5zcHJpdGUuY2xvdWQtZnVuY3Rpb25zIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMCBjYWxjKDEwMCUgLyAzNiAqIDIxKTsgfVxyXG4uc3ByaXRlLmNsb3VkLXB1YnN1YiB7IGJhY2tncm91bmQtcG9zaXRpb246IDAgY2FsYygxMDAlIC8gMzYgKiAyMik7IH1cclxuLnNwcml0ZS5jbG91ZC1ydW4geyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIGNhbGMoMTAwJSAvIDM2ICogMjMpOyB9XHJcbi5zcHJpdGUuY2xvdWQtc3FsIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMCBjYWxjKDEwMCUgLyAzNiAqIDI0KTsgfVxyXG4uc3ByaXRlLmNsb3VkLXN0b3JhZ2UgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIGNhbGMoMTAwJSAvIDM2ICogMjUpOyB9XHJcbi5zcHJpdGUuY2xvdWQtdGFza3MgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIGNhbGMoMTAwJSAvIDM2ICogMjYpOyB9XHJcbi5zcHJpdGUuY29tcHV0ZS1lbmdpbmUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIGNhbGMoMTAwJSAvIDM2ICogMjcpOyB9XHJcbi5zcHJpdGUuY29udGFpbmVyLXJlZ2lzdHJ5IHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMCBjYWxjKDEwMCUgLyAzNiAqIDI4KTsgfVxyXG4uc3ByaXRlLmRvY2tlciB7IGJhY2tncm91bmQtcG9zaXRpb246IDAgY2FsYygxMDAlIC8gMzYgKiAyOSk7IH1cclxuLnNwcml0ZS5lbGFzdGljc2VhcmNoIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMCBjYWxjKDEwMCUgLyAzNiAqIDMwKTsgfVxyXG4uc3ByaXRlLmdpdC1pY29uIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMCBjYWxjKDEwMCUgLyAzNiAqIDMxKTsgfVxyXG4uc3ByaXRlLmdpdGxhYiB7IGJhY2tncm91bmQtcG9zaXRpb246IDAgY2FsYygxMDAlIC8gMzYgKiAzMik7IH1cclxuLnNwcml0ZS5nb29nbGUtY2xvdWQgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIGNhbGMoMTAwJSAvIDM2ICogMzMpOyB9XHJcbi5zcHJpdGUuaGVyb2t1IHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMCBjYWxjKDEwMCUgLyAzNiAqIDM0KTsgfVxyXG4uc3ByaXRlLmtpYmFuYSB7IGJhY2tncm91bmQtcG9zaXRpb246IDAgY2FsYygxMDAlIC8gMzYgKiAzNSk7IH1cclxuLnNwcml0ZS5rdWJlcm5ldGVzLWxvZ28geyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIGNhbGMoMTAwJSk7IH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgbWluLXdpZHRoOiAxNTBweDtcbn1cbjpob3N0ICNyZXNpemUtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5idWJibGUtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAyO1xuICBvcGFjaXR5OiAwLjk7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBsaW5lYXIsIGZpbHRlciAwLjNzIGxpbmVhcjtcbn1cbjo6bmctZGVlcCAuYnViYmxlLWNvbnRhaW5lciAuYnViYmxlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICBib3gtc2hhZG93OiAwIDE1cHggMzVweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgM3B4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuOjpuZy1kZWVwIC5idWJibGUtY29udGFpbmVyIC5idWJibGUgc3ZnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZS1pbi1vdXQsIHRvcCAwLjNzIGVhc2UtaW4tb3V0LCBiYWNrZmFjZS12aXNpYmlsaXR5IDBzO1xuICBvcGFjaXR5OiAwO1xuICB0b3A6IDIwcHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjEpKTtcbiAgei1pbmRleDogMTtcbn1cbjo6bmctZGVlcCAuYnViYmxlLWNvbnRhaW5lciAuYnViYmxlIHN2Zy5iYWNrIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG59XG46Om5nLWRlZXAgLmJ1YmJsZS1jb250YWluZXIgLmJ1YmJsZSBpbWcsIDo6bmctZGVlcCAuYnViYmxlLWNvbnRhaW5lciAuYnViYmxlIGRpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgei1pbmRleDogMztcbn1cbjo6bmctZGVlcCAuYnViYmxlLWNvbnRhaW5lciAuYnViYmxlIGltZy5iYWNrLCA6Om5nLWRlZXAgLmJ1YmJsZS1jb250YWluZXIgLmJ1YmJsZSBkaXYuYmFjayB7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xufVxuOjpuZy1kZWVwIC5idWJibGUtY29udGFpbmVyOmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbn1cbjo6bmctZGVlcCAuYnViYmxlLWNvbnRhaW5lcjpob3ZlciBzdmcge1xuICBvcGFjaXR5OiAxO1xuICB0b3A6IDA7XG59XG5cbjo6bmctZGVlcCAuc3ByaXRlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiYXNzZXRzL2ljb25zL3NraWxscy9qcGcvc3ByaXRlLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xufVxuOjpuZy1kZWVwIC5zcHJpdGUuYW5ndWxhciB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcbn1cbjo6bmctZGVlcCAuc3ByaXRlLmVsZWN0cm9uIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCBjYWxjKDEwMCUgLyAzNik7XG59XG46Om5nLWRlZXAgLnNwcml0ZS5nb3BoZXIge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIGNhbGMoMTAwJSAvIDM2ICogMik7XG59XG46Om5nLWRlZXAgLnNwcml0ZS5ncmFwaHFsIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCBjYWxjKDEwMCUgLyAzNiAqIDMpO1xufVxuOjpuZy1kZWVwIC5zcHJpdGUuaW9uaWMge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIGNhbGMoMTAwJSAvIDM2ICogNCk7XG59XG46Om5nLWRlZXAgLnNwcml0ZS5qYXNtaW5lIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCBjYWxjKDEwMCUgLyAzNiAqIDUpO1xufVxuOjpuZy1kZWVwIC5zcHJpdGUuamF2YXNjcmlwdCB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgY2FsYygxMDAlIC8gMzYgKiA2KTtcbn1cbjo6bmctZGVlcCAuc3ByaXRlLm1vY2hhIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCBjYWxjKDEwMCUgLyAzNiAqIDcpO1xufVxuOjpuZy1kZWVwIC5zcHJpdGUubW9uZ29kYiB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgY2FsYygxMDAlIC8gMzYgKiA4KTtcbn1cbjo6bmctZGVlcCAuc3ByaXRlLm5lc3RqcyB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgY2FsYygxMDAlIC8gMzYgKiA5KTtcbn1cbjo6bmctZGVlcCAuc3ByaXRlLm5vZGVqcyB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgY2FsYygxMDAlIC8gMzYgKiAxMCk7XG59XG46Om5nLWRlZXAgLnNwcml0ZS5wb3N0Z3Jlc3FsIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCBjYWxjKDEwMCUgLyAzNiAqIDExKTtcbn1cbjo6bmctZGVlcCAuc3ByaXRlLnJlYWN0aXZleCB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgY2FsYygxMDAlIC8gMzYgKiAxMik7XG59XG46Om5nLWRlZXAgLnNwcml0ZS5zd2FnZ2VyIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCBjYWxjKDEwMCUgLyAzNiAqIDEzKTtcbn1cbjo6bmctZGVlcCAuc3ByaXRlLnR5cGVzY3JpcHQge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIGNhbGMoMTAwJSAvIDM2ICogMTQpO1xufVxuOjpuZy1kZWVwIC5zcHJpdGUubG9nc3Rhc2gge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIGNhbGMoMTAwJSAvIDM2ICogMTUpO1xufVxuOjpuZy1kZWVwIC5zcHJpdGUuc3RhY2tkcml2ZXIge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIGNhbGMoMTAwJSAvIDM2ICogMTYpO1xufVxuOjpuZy1kZWVwIC5zcHJpdGUudHJhdmlzLWNpIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCBjYWxjKDEwMCUgLyAzNiAqIDE3KTtcbn1cbjo6bmctZGVlcCAuc3ByaXRlLmJlYXRzIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCBjYWxjKDEwMCUgLyAzNiAqIDE4KTtcbn1cbjo6bmctZGVlcCAuc3ByaXRlLmNsb3VkLWRhdGFzdG9yZSB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgY2FsYygxMDAlIC8gMzYgKiAxOSk7XG59XG46Om5nLWRlZXAgLnNwcml0ZS5jbG91ZGZsYXJlIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCBjYWxjKDEwMCUgLyAzNiAqIDIwKTtcbn1cbjo6bmctZGVlcCAuc3ByaXRlLmNsb3VkLWZ1bmN0aW9ucyB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgY2FsYygxMDAlIC8gMzYgKiAyMSk7XG59XG46Om5nLWRlZXAgLnNwcml0ZS5jbG91ZC1wdWJzdWIge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIGNhbGMoMTAwJSAvIDM2ICogMjIpO1xufVxuOjpuZy1kZWVwIC5zcHJpdGUuY2xvdWQtcnVuIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCBjYWxjKDEwMCUgLyAzNiAqIDIzKTtcbn1cbjo6bmctZGVlcCAuc3ByaXRlLmNsb3VkLXNxbCB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgY2FsYygxMDAlIC8gMzYgKiAyNCk7XG59XG46Om5nLWRlZXAgLnNwcml0ZS5jbG91ZC1zdG9yYWdlIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCBjYWxjKDEwMCUgLyAzNiAqIDI1KTtcbn1cbjo6bmctZGVlcCAuc3ByaXRlLmNsb3VkLXRhc2tzIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCBjYWxjKDEwMCUgLyAzNiAqIDI2KTtcbn1cbjo6bmctZGVlcCAuc3ByaXRlLmNvbXB1dGUtZW5naW5lIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCBjYWxjKDEwMCUgLyAzNiAqIDI3KTtcbn1cbjo6bmctZGVlcCAuc3ByaXRlLmNvbnRhaW5lci1yZWdpc3RyeSB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgY2FsYygxMDAlIC8gMzYgKiAyOCk7XG59XG46Om5nLWRlZXAgLnNwcml0ZS5kb2NrZXIge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIGNhbGMoMTAwJSAvIDM2ICogMjkpO1xufVxuOjpuZy1kZWVwIC5zcHJpdGUuZWxhc3RpY3NlYXJjaCB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgY2FsYygxMDAlIC8gMzYgKiAzMCk7XG59XG46Om5nLWRlZXAgLnNwcml0ZS5naXQtaWNvbiB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgY2FsYygxMDAlIC8gMzYgKiAzMSk7XG59XG46Om5nLWRlZXAgLnNwcml0ZS5naXRsYWIge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIGNhbGMoMTAwJSAvIDM2ICogMzIpO1xufVxuOjpuZy1kZWVwIC5zcHJpdGUuZ29vZ2xlLWNsb3VkIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCBjYWxjKDEwMCUgLyAzNiAqIDMzKTtcbn1cbjo6bmctZGVlcCAuc3ByaXRlLmhlcm9rdSB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgY2FsYygxMDAlIC8gMzYgKiAzNCk7XG59XG46Om5nLWRlZXAgLnNwcml0ZS5raWJhbmEge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIGNhbGMoMTAwJSAvIDM2ICogMzUpO1xufVxuOjpuZy1kZWVwIC5zcHJpdGUua3ViZXJuZXRlcy1sb2dvIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCBjYWxjKDEwMCUpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/home/intro/img-bubbles/img-bubbles.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/home/intro/img-bubbles/img-bubbles.component.ts ***!
  \*************************************************************************/
/*! exports provided: ImgBubblesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgBubblesComponent", function() { return ImgBubblesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _utils_bubbles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/bubbles */ "./src/app/modules/home/intro/img-bubbles/utils/bubbles.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let ImgBubblesComponent = class ImgBubblesComponent {
    constructor(_http, _el) {
        this._http = _http;
        this._el = _el;
        this.resizeEvent = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        let resizeInProgress = false;
        this.resizeEvent
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(100))
            .subscribe(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (resizeInProgress)
                return;
            resizeInProgress = true;
            this.bubbles && (yield this.bubbles.updateAll());
            resizeInProgress = false;
        }));
    }
    toggleAnimation(animate) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!this.bubbles)
                return;
            if (!animate)
                yield this.bubbles.stopAnimation();
            else
                this.bubbles.startAnimation();
        });
    }
    ngAfterViewInit() {
        this._http.get('assets/skills.json').subscribe((json) => {
            this.bubbles = new _utils_bubbles__WEBPACK_IMPORTED_MODULE_3__["Bubbles"](this._el.nativeElement, json);
        });
    }
    onResized(e) {
        if (Math.abs(e.newHeight - e.oldHeight) > 0 && this.bubbles) {
            this.resizeEvent.next();
        }
    }
};
ImgBubblesComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
ImgBubblesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-img-bubbles',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./img-bubbles.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/intro/img-bubbles/img-bubbles.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./img-bubbles.component.scss */ "./src/app/modules/home/intro/img-bubbles/img-bubbles.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], ImgBubblesComponent);



/***/ }),

/***/ "./src/app/modules/home/intro/img-bubbles/utils/bubble-utils.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/home/intro/img-bubbles/utils/bubble-utils.ts ***!
  \**********************************************************************/
/*! exports provided: polarToCartesian, describeArc, angleBetweenPoints, distanceBetweenPoints, scaleCoordinate, map, shuffle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polarToCartesian", function() { return polarToCartesian; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "describeArc", function() { return describeArc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "angleBetweenPoints", function() { return angleBetweenPoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distanceBetweenPoints", function() { return distanceBetweenPoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleCoordinate", function() { return scaleCoordinate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shuffle", function() { return shuffle; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    let angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
        x: centerX + (radius * Math.cos(angleInRadians)),
        y: centerY + (radius * Math.sin(angleInRadians))
    };
}
function describeArc(x, y, radius, startAngle, endAngle, direction) {
    let start = polarToCartesian(x, y, radius, endAngle);
    let end = polarToCartesian(x, y, radius, startAngle);
    let largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
    let d = [
        'M', start.x, start.y,
        'A', radius, radius, direction, largeArcFlag, direction, end.x, end.y
    ].join(' ');
    return d;
}
function angleBetweenPoints(p1, p2, c) {
    p1 = {
        x: p1.x - c.x,
        y: p1.y - c.y
    };
    p2 = {
        x: p2.x - c.x,
        y: p2.y - c.y
    };
    const a2 = Math.atan2(p1.y, p1.x);
    const a1 = Math.atan2(p2.y, p2.x);
    const sign = a1 > a2 ? 1 : -1;
    let angle = a1 - a2;
    const K = -sign * Math.PI * 2;
    angle = (Math.abs(K + angle) < Math.abs(angle)) ? K + angle : angle;
    let deg = Math.abs(Math.round(360 * angle / (Math.PI * 2)));
    if (deg < 0)
        deg = 360 + deg;
    return deg;
}
function distanceBetweenPoints(p1, p2) {
    return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
}
function scaleCoordinate(p, origin, distance) {
    const xLen = origin.x - p.x;
    const yLen = origin.y - p.y;
    const currDistance = distanceBetweenPoints(p, origin);
    const ratio = distance / currDistance;
    const smallerXLength = xLen * ratio;
    const smallerYLength = yLen * ratio;
    return {
        x: p.x + (xLen - smallerXLength),
        y: p.y + (yLen - smallerYLength)
    };
}
function map(num, inMin, inMax, outMin, outMax) {
    return (num - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
function shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}


/***/ }),

/***/ "./src/app/modules/home/intro/img-bubbles/utils/bubble.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/home/intro/img-bubbles/utils/bubble.ts ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Bubble; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _bubble_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bubble-utils */ "./src/app/modules/home/intro/img-bubbles/utils/bubble-utils.ts");


class Bubble {
    constructor(i, step, offset, x, y, size, scale, itemLeft, itemRight) {
        this.i = i;
        this.step = step;
        this.offset = offset;
        this.x = x;
        this.y = y;
        this.size = size;
        this.scale = scale;
        this.itemLeft = itemLeft;
        this.itemRight = itemRight;
        this.noiseSeedX = Math.floor(Math.random() * 64000);
        this.noiseSeedY = Math.floor(Math.random() * 64000);
        this.imageClipX = 0;
        this.diameter = this.size * this.scale;
        // Add random increment to x and y, that are in bounds of a 'rectangle'
        // respecting inner padding (so that circles don't overflow each other)
        const minInnerX = this.size * 0.10;
        const maxInnerX = this.size * 0.90 - this.diameter;
        const randX = Object(_bubble_utils__WEBPACK_IMPORTED_MODULE_1__["map"])(Math.random(), 0, 1, minInnerX, maxInnerX);
        const randY = Object(_bubble_utils__WEBPACK_IMPORTED_MODULE_1__["map"])(Math.random(), 0, 1, minInnerX, maxInnerX);
        this.xWithNoise = x + randX;
        this.yWithNoise = x + randY;
        this.elContainer = document.createElement('div');
        this.elContainer.className = 'bubble-container';
        this.elContainer.style.width = this.elContainer.style.height = `${this.diameter}px`;
        this.el = document.createElement('div');
        this.el.className = 'bubble';
        this.el.style.width = this.el.style.height = `100%`;
        this.elContainer.appendChild(this.el);
        const iLeft = document.createElement('img');
        iLeft.src = itemLeft.src;
        iLeft.classList.add('back');
        // const iLeft = document.createElement('div')
        // iLeft.classList.add('back', 'sprite', itemLeft.sprite)
        this.backImage = iLeft;
        const iRight = document.createElement('img');
        iRight.src = itemRight.src;
        // const iRight = document.createElement('div')
        // iRight.classList.add('sprite', itemRight.sprite)
        iLeft.draggable = iRight.draggable = false;
        const rightTitle = this.GenerateTitle(itemRight.title);
        const leftTitle = this.GenerateTitle(itemLeft.title);
        leftTitle.svgEl.classList.add('back');
        this.el.appendChild(iRight);
        this.el.appendChild(rightTitle.svgEl);
        this.el.appendChild(iLeft);
        this.el.appendChild(leftTitle.svgEl);
        setTimeout(() => {
            rightTitle.afterRenderCb();
            leftTitle.afterRenderCb();
        }, 1);
        this.transform();
    }
    redraw(x, y, size) {
        this.size = size;
        this.diameter = this.size * this.scale;
        // Add random increment to x and y, that are in bounds of a 'rectangle'
        // respecting inner padding (so that circles don't overflow eachother)
        const minInnerX = this.size * 0.10;
        const maxInnerX = this.size * 0.90 - this.diameter;
        const randX = Object(_bubble_utils__WEBPACK_IMPORTED_MODULE_1__["map"])(Math.random(), 0, 1, minInnerX, maxInnerX);
        const randY = Object(_bubble_utils__WEBPACK_IMPORTED_MODULE_1__["map"])(Math.random(), 0, 1, minInnerX, maxInnerX);
        this.x = x;
        this.y = y;
        this.xWithNoise = x + randX;
        this.yWithNoise = y + randY;
        this.elContainer.style.width = this.elContainer.style.height = `${this.diameter}px`;
        this.el.style.width = this.el.style.height = `100%`;
        this.transform();
    }
    GenerateTitle(title) {
        const titleSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        titleSvg.setAttribute('version', '1.1');
        titleSvg.setAttribute('xlink', 'http://www.w3.org/1999/xlink');
        titleSvg.setAttribute('viewBox', '0 0 100 100');
        const padding = 5;
        const titleHeight = 16 + 5;
        const arc = 50 + padding + (titleHeight * 0.2);
        const arcCenter = 50 + padding + (titleHeight * 0.5);
        const circlePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        circlePath.id = 'curve';
        circlePath.setAttribute('d', `${Object(_bubble_utils__WEBPACK_IMPORTED_MODULE_1__["describeArc"])(50, 50, arc, 0, 180, 1)} ${Object(_bubble_utils__WEBPACK_IMPORTED_MODULE_1__["describeArc"])(50, 50, arc, 180, 0, 1)}`);
        circlePath.setAttribute('fill', 'none');
        circlePath.setAttribute('stroke', 'none');
        titleSvg.appendChild(circlePath);
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        const textPath = document.createElementNS('http://www.w3.org/2000/svg', 'textPath');
        textPath.setAttribute('startOffset', '50%');
        textPath.setAttribute('text-anchor', 'middle');
        textPath.setAttribute('href', '#curve');
        textPath.textContent = title;
        text.appendChild(textPath);
        titleSvg.appendChild(text);
        return {
            svgEl: titleSvg,
            afterRenderCb: () => {
                const firstExtent = textPath.getExtentOfChar(0);
                const lastExtent = textPath.getExtentOfChar(title.length - 1);
                const min = {
                    x: firstExtent.x,
                    y: firstExtent.y + firstExtent.height
                };
                const max = {
                    x: lastExtent.x + lastExtent.width,
                    y: lastExtent.y + lastExtent.height
                };
                const origin = {
                    x: 50,
                    y: 50
                };
                const snappedMin = Object(_bubble_utils__WEBPACK_IMPORTED_MODULE_1__["scaleCoordinate"])(min, origin, 50);
                const snappedMax = Object(_bubble_utils__WEBPACK_IMPORTED_MODULE_1__["scaleCoordinate"])(max, origin, 50);
                const curveDegree = Math.abs(Object(_bubble_utils__WEBPACK_IMPORTED_MODULE_1__["angleBetweenPoints"])(snappedMin, snappedMax, origin)) / 2;
                const textBackground = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                textBackground.setAttribute('d', Object(_bubble_utils__WEBPACK_IMPORTED_MODULE_1__["describeArc"])(50, 50, arcCenter, 360 - curveDegree, curveDegree, 0));
                textBackground.setAttribute('fill', 'none');
                textBackground.setAttribute('stroke-linecap', 'round');
                textBackground.setAttribute('stroke-width', `${titleHeight}px`);
                textBackground.setAttribute('stroke', 'white');
                titleSvg.insertBefore(textBackground, text);
            }
        };
    }
    transform() {
        const xCenter = Math.min(this.size, Math.max(0, this.imageClipX));
        const percentage = xCenter * 100 / this.size;
        let rotate = percentage < 40 ? 0 :
            percentage > 60 ? 180 : Object(_bubble_utils__WEBPACK_IMPORTED_MODULE_1__["map"])(percentage, 40, 60, 0, 180 + 360);
        rotate = rotate % 360;
        this.elContainer.style.transform = `translate(${this.xWithNoise}px, ${this.yWithNoise}px)`;
        this.el.style.transform = `rotateY(${rotate}deg)`;
    }
}


/***/ }),

/***/ "./src/app/modules/home/intro/img-bubbles/utils/bubbles.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/home/intro/img-bubbles/utils/bubbles.ts ***!
  \*****************************************************************/
/*! exports provided: Bubbles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bubbles", function() { return Bubbles; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _bubble_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bubble-utils */ "./src/app/modules/home/intro/img-bubbles/utils/bubble-utils.ts");
/* harmony import */ var _bubble__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bubble */ "./src/app/modules/home/intro/img-bubbles/utils/bubble.ts");
/* harmony import */ var noisejs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! noisejs */ "./node_modules/noisejs/index.js");
/* harmony import */ var noisejs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(noisejs__WEBPACK_IMPORTED_MODULE_3__);




class Bubbles {
    constructor(el, skills) {
        this.el = el;
        this.skills = skills;
        this.pixelRatioMultiplier = Math.max(window.devicePixelRatio - 1, 1);
        this.list = [];
        this.curr = {
            step: 0,
            y: undefined
        };
        this.scaleGen = this.nextScale();
        this.devSkillGen = this.nextDevelopmentSkill();
        this.opsSkillGen = this.nextDevopsSkill();
        // For debugging
        this.start = 0;
        this.end = 0;
        this.delta = 0;
        this.updateSize();
        this.updatePadding();
        this.init();
    }
    get scrollSpeed() {
        return Math.max(Math.min(this.size * 0.002, 0.4), 0.05) * this.pixelRatioMultiplier;
    }
    get noiseAmount() {
        return this.size * 0.03 * this.pixelRatioMultiplier;
    }
    get noiseSpeed() {
        return this.noiseAmount / 1000;
    }
    get midY() {
        return this.el.clientHeight / 2;
    }
    get last() {
        return this.list[this.list.length - 1];
    }
    get midX() {
        return this.el.clientWidth * 0.5;
    }
    updateSize() {
        this.size = Math.round(this.el.clientHeight * 0.34);
    }
    updatePadding() {
        this.xPadding = Math.max(10, Math.round(this.size * 0.15));
        this.yPadding = Math.max(10, Math.round(this.size * 0.17));
    }
    stateChanged(expected) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            while (this.state !== expected) {
                yield new Promise(res => setTimeout(res, 100));
            }
        });
    }
    stopAnimation() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.state !== 'stopped') {
                this.state = 'stop requested';
                yield this.stateChanged('stopped');
            }
        });
    }
    startAnimation() {
        if (this.state !== 'running') {
            this.state = 'running';
            this.nextFrame();
        }
    }
    resize() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.stopAnimation();
            const first = this.list[0];
            const setBack = {
                x: first.x - (this.size * 0.6),
                step: first.step !== 1 ? first.step - 1 : 3,
                offset: first.step !== 1 ? first.offset : (first.offset === 'p' ? 'n' : 'p')
            };
            this.curr.y = this.midY + ((setBack.step === 2 && setBack.offset === 'p') || ([1, 3].includes(setBack.step) && setBack.offset === 'n') ?
                -this.yPadding : this.yPadding);
            this.curr.step = setBack.step;
            let prevBubble;
            for (const bubble of this.list) {
                prevBubble = this.nextBubble(prevBubble ? prevBubble.x : setBack.x, bubble);
            }
            this.startAnimation();
        });
    }
    init() {
        this.curr.y = this.midY + this.yPadding;
        while (!this.list.length || this.list[this.list.length - 1].x < this.el.clientWidth) {
            this.list.push(this.nextBubble(this.last ? this.last.x : undefined));
        }
        for (const r of this.list) {
            this.el.firstChild.appendChild(r.elContainer);
        }
        this.state = 'running';
        this.nextFrame();
    }
    nextFrame() {
        this.end = Date.now();
        this.delta = (this.end - this.start) / 1000.0 * 60;
        this.end = this.start;
        if (this.state !== 'running') {
            this.state = 'stopped';
            return;
        }
        // Call each individual bubble's update method
        for (const r of this.list) {
            r.noiseSeedX += this.noiseSpeed;
            r.noiseSeedY += this.noiseSpeed;
            const noise = new noisejs__WEBPACK_IMPORTED_MODULE_3___default.a.Noise();
            const randomX = noise.simplex2(r.noiseSeedX, 0);
            const randomY = noise.simplex2(r.noiseSeedY, 0);
            r.x -= this.scrollSpeed;
            r.xWithNoise = r.x + (randomX * this.noiseAmount);
            r.yWithNoise = r.y + (randomY * this.noiseAmount);
            r.imageClipX = this.midX - r.xWithNoise;
            r.transform();
        }
        this.checkIfNextRequired();
        this.checkFirstOutOfBounds();
        // Queue up another nextFrame() method call on the next frame
        // if (browserUtil.isFirefox) {
        //   setTimeout(this.nextFrame.bind(this), 2)
        // } else {
        requestAnimationFrame(this.nextFrame.bind(this));
        // }
    }
    checkFirstOutOfBounds() {
        const first = this.list[0];
        if (first.x < -first.size - 20) {
            this.list.splice(0, 1);
            this.el.firstChild.removeChild(first.elContainer);
        }
    }
    checkIfNextRequired() {
        const last = this.last;
        if (last && (last.x + (last.size / 2) + 20 <= this.el.clientWidth + last.size)) {
            const bubble = this.nextBubble(this.last.x);
            this.list.push(bubble);
            this.el.firstChild.appendChild(bubble.elContainer);
        }
    }
    updateAll() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.updateSize();
            this.updatePadding();
            // Recalculate bubbles
            yield this.resize();
        });
    }
    nextY() {
        if (this.curr.step === 1 || this.curr.step === 3)
            return this.curr.y > this.midY ? this.curr.y : this.curr.y - this.size;
        else
            return this.curr.y > this.midY ? this.curr.y - this.size : this.curr.y;
    }
    nextBubble(prevX, target) {
        this.curr.step++;
        if (this.curr.step > 3) {
            this.curr.step = 1;
            this.curr.y = this.midY + (this.curr.y > this.midY ? -this.yPadding : +this.xPadding);
        }
        if (target === null)
            return undefined;
        let bubble = { x: undefined, y: undefined };
        bubble = {
            x: (prevX ? prevX + (this.size / 2) : 0) + this.xPadding,
            y: this.nextY()
        };
        if (target) {
            target.redraw(bubble.x, bubble.y, this.size);
            return target;
        }
        return new _bubble__WEBPACK_IMPORTED_MODULE_2__["default"](this.list.length, this.curr.step, this.curr.y > this.midY ? 'p' : 'n', bubble.x, bubble.y, this.size, this.scaleGen.next().value, this.devSkillGen.next().value, this.opsSkillGen.next().value);
    }
    *nextScale() {
        const scales = Object(_bubble_utils__WEBPACK_IMPORTED_MODULE_1__["shuffle"])([0.85, 0.75, 0.65, 0.55]); // shuffle([1, 0.9, 0.8, 0.7, 0.6, 0.5])
        const usedScales = [];
        while (true) {
            const [val] = scales.splice(0, 1);
            usedScales.push(val);
            if (scales.length <= 2)
                scales.push(...Object(_bubble_utils__WEBPACK_IMPORTED_MODULE_1__["shuffle"])(usedScales.splice(0)));
            yield val;
        }
    }
    *nextDevelopmentSkill() {
        let i = -1;
        while (true) {
            i++;
            if (i === this.skills.development.length)
                i = 0;
            yield {
                src: `assets/icons/skills/jpg/development/${this.skills.development[i].src}`,
                title: this.skills.development[i].title,
                sprite: this.skills.development[i].sprite
            };
        }
    }
    *nextDevopsSkill() {
        let i = -1;
        while (true) {
            i++;
            if (i === this.skills.devops.length)
                i = 0;
            yield {
                src: `assets/icons/skills/jpg/devops/${this.skills.devops[i].src}`,
                title: this.skills.devops[i].title,
                sprite: this.skills.devops[i].sprite
            };
        }
    }
}


/***/ }),

/***/ "./src/app/modules/home/intro/intro.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/modules/home/intro/intro.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  position: relative;\n}\n:host > div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: stretch;\n          align-items: stretch;\n  width: 100%;\n  height: 100%;\n  background: var(--background-primary, #2e3235);\n  color: var(--foreground-primary, white);\n}\n:host > div > * {\n  overflow: hidden;\n}\n#description-container {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: stretch;\n          align-items: stretch;\n  flex-wrap: wrap;\n}\n#description-container > div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  justify-content: center;\n  -webkit-box-flex: 0;\n          flex: 0 50%;\n}\n@media screen and (max-width: calc(600px - 1px)) {\n  #description-container > div {\n    -webkit-box-flex: 0;\n            flex: 0 100%;\n  }\n  #description-container > div:first-child {\n    margin-bottom: 10px;\n  }\n}\n#description-container > div .card {\n  margin: auto;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: 80%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  max-width: 50vw;\n}\n#description-container > div .card > *:not(:last-child) {\n  margin-bottom: 0.15em;\n}\n@media screen and (max-width: 599px) {\n  #description-container > div .card {\n    font-size: 12px;\n  }\n}\n@media screen and (min-width: 600px) and (max-width: 959px) {\n  #description-container > div .card {\n    font-size: 16px;\n  }\n}\n@media screen and (min-width: 960px) and (max-width: 1279px) {\n  #description-container > div .card {\n    font-size: 20px;\n  }\n}\n@media screen and (min-width: 1280px) and (max-width: 1919px) {\n  #description-container > div .card {\n    font-size: 20px;\n  }\n}\n@media screen and (min-width: 1920px) {\n  #description-container > div .card {\n    font-size: 20px;\n  }\n}\n@media screen and (max-width: calc(600px - 1px)) {\n  #description-container > div .card {\n    max-width: 70vw;\n  }\n}\n#description-container > div .card:hover .divider {\n  width: 80%;\n  opacity: 0.8;\n}\n#description-container > div .card .title {\n  text-align: center;\n  color: white;\n}\n@media screen and (max-width: 599px) {\n  #description-container > div .card .title {\n    font-size: 16.2px;\n  }\n}\n@media screen and (min-width: 600px) and (max-width: 959px) {\n  #description-container > div .card .title {\n    font-size: 21.6px;\n  }\n}\n@media screen and (min-width: 960px) and (max-width: 1279px) {\n  #description-container > div .card .title {\n    font-size: 27px;\n  }\n}\n@media screen and (min-width: 1280px) and (max-width: 1919px) {\n  #description-container > div .card .title {\n    font-size: 27px;\n  }\n}\n@media screen and (min-width: 1920px) {\n  #description-container > div .card .title {\n    font-size: 27px;\n  }\n}\n#description-container > div .card .divider {\n  min-height: 1px;\n  height: 0.1em;\n  width: 0em;\n  opacity: 0.1;\n  background: var(--foreground-primary, white);\n  -webkit-transition: width 0.5s ease-in-out, opacity 0.5s ease;\n  transition: width 0.5s ease-in-out, opacity 0.5s ease;\n}\n#description-container > div .card .description {\n  font-size: inherit;\n  font-weight: lighter;\n  color: var(--foreground-primary, white);\n  opacity: 0.7;\n  text-align: center;\n}\n#bubbles-container {\n  overflow: visible;\n}\n@media screen and (max-width: 599px) {\n  #bubbles-container {\n    -webkit-box-flex: 0;\n            flex: 0 30%;\n  }\n}\n@media screen and (min-width: 600px) and (max-width: 959px) {\n  #bubbles-container {\n    -webkit-box-flex: 0;\n            flex: 0 35%;\n  }\n}\n@media screen and (min-width: 960px) and (max-width: 1279px) {\n  #bubbles-container {\n    -webkit-box-flex: 0;\n            flex: 0 40%;\n  }\n}\n@media screen and (min-width: 1280px) and (max-width: 1919px) {\n  #bubbles-container {\n    -webkit-box-flex: 0;\n            flex: 0 50%;\n  }\n}\n@media screen and (min-width: 1920px) {\n  #bubbles-container {\n    -webkit-box-flex: 0;\n            flex: 0 55%;\n  }\n}\n#wave-container {\n  overflow: visible;\n  position: relative;\n  -webkit-box-flex: 0;\n          flex: 0 10%;\n}\n.icon-panel {\n  top: 15%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL2ludHJvL0M6XFxVc2Vyc1xcTGluYSBSYWdhdXNrYWl0ZVxcRGVza3RvcFxccHJvamVjdHNcXHBvcnRmb2xpb1xcYXBwL3NyY1xcYXBwXFxtb2R1bGVzXFxob21lXFxpbnRyb1xcaW50cm8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvaG9tZS9pbnRyby9pbnRyby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9ob21lL2ludHJvL0M6XFxVc2Vyc1xcTGluYSBSYWdhdXNrYWl0ZVxcRGVza3RvcFxccHJvamVjdHNcXHBvcnRmb2xpb1xcYXBwL3NyY1xcYXBwXFxzdHlsZXNcXGFic3RyYWN0c1xcbWl4aW5zLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvaG9tZS9pbnRyby9DOlxcVXNlcnNcXExpbmEgUmFnYXVza2FpdGVcXERlc2t0b3BcXHByb2plY3RzXFxwb3J0Zm9saW9cXGFwcC9zcmNcXGFwcFxcc3R5bGVzXFxhYnN0cmFjdHNcXGJyZWFrcG9pbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxrQkFBQTtBQ0RGO0FER0U7RUVtRUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJGbkVrQjtFRW1FbEIsNkJGbkVrQjtVRW1FbEIsc0JGbkVrQjtFRW9FbEIseUJBSCtEO1VBRy9ELG1CQUgrRDtFQUkvRCx3QkFKK0M7VUFJL0MsdUJBSitDO0VGaEU3QywwQkFBQTtVQUFBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw4Q0FBQTtFQUNBLHVDQUFBO0FDRUo7QURBSTtFQUNFLGdCQUFBO0FDRU47QURHQTtFQUNFLG1CQUFBO1VBQUEsWUFBQTtFRW9EQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkZwRGdCO0VFb0RoQiw2QkZwRGdCO1VFb0RoQixtQkZwRGdCO0VFcURoQix5QkFIK0Q7VUFHL0QsbUJBSCtEO0VBSS9ELHdCQUorQztVQUkvQyx1QkFKK0M7RUZqRC9DLDBCQUFBO1VBQUEsb0JBQUE7RUFDQSxlQUFBO0FDR0Y7QURERTtFRStDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkYvQ2tCO0VFK0NsQiw2QkYvQ2tCO1VFK0NsQixtQkYvQ2tCO0VFZ0RsQix5QkFIK0Q7VUFHL0QsbUJBSCtEO0VBSS9ELHdCQUorQztVQUkvQyx1QkFKK0M7RUY1QzdDLHVCQUFBO0VBQ0EsbUJBQUE7VUFBQSxXQUFBO0FDTUo7QUVBTTtFSFRKO0lBTUksbUJBQUE7WUFBQSxZQUFBO0VDT0o7RURMSTtJQUNFLG1CQUFBO0VDT047QUFDRjtBREpJO0VBQ0UsWUFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLFVBQUE7RUUrQkosb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJGL0JvQjtFRStCcEIsNkJGL0JvQjtVRStCcEIsc0JGL0JvQjtFRWdDcEIseUJBSCtEO1VBRy9ELG1CQUgrRDtFQUkvRCx3QkFKK0M7VUFJL0MsdUJBSitDO0VGNUIzQyxlQUFBO0FDU047QUMwQkk7RUFJSSxxQkZ4Q3NCO0FDYTlCO0FFSkU7RUhiRTtJR2NBLGVBQUE7RUZPRjtBQUNGO0FFTEU7RUhqQkU7SUdrQkEsZUFBQTtFRlFGO0FBQ0Y7QUVORTtFSHJCRTtJR3NCQSxlQUFBO0VGU0Y7QUFDRjtBRVBFO0VIekJFO0lHMEJBLGVBQUE7RUZVRjtBQUNGO0FFUkU7RUg3QkU7SUc4QkEsZUFBQTtFRldGO0FBQ0Y7QUU5Q007RUhJRjtJQVFJLGVBQUE7RUNzQ047QUFDRjtBRG5DUTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FDcUNWO0FEakNNO0VBRUUsa0JBQUE7RUFDQSxZQUFBO0FDa0NSO0FFMUNFO0VIS0k7SUdKRixpQkFBQTtFRjZDRjtBQUNGO0FFM0NFO0VIQ0k7SUdBRixpQkFBQTtFRjhDRjtBQUNGO0FFNUNFO0VISEk7SUdJRixlQUFBO0VGK0NGO0FBQ0Y7QUU3Q0U7RUhQSTtJR1FGLGVBQUE7RUZnREY7QUFDRjtBRTlDRTtFSFhJO0lHWUYsZUFBQTtFRmlERjtBQUNGO0FEeERNO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLDRDQUFBO0VBQ0EsNkRBQUE7RUFBQSxxREFBQTtBQzBEUjtBRHZETTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSx1Q0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ3lEUjtBRG5EQTtFQUNFLGlCQUFBO0FDc0RGO0FFdEZFO0VIK0JGO0lHOUJJLG1CQUFBO1lBQUEsV0FBQTtFRnlGRjtBQUNGO0FFdkZFO0VIMkJGO0lHMUJJLG1CQUFBO1lBQUEsV0FBQTtFRjBGRjtBQUNGO0FFeEZFO0VIdUJGO0lHdEJJLG1CQUFBO1lBQUEsV0FBQTtFRjJGRjtBQUNGO0FFekZFO0VIbUJGO0lHbEJJLG1CQUFBO1lBQUEsV0FBQTtFRjRGRjtBQUNGO0FFMUZFO0VIZUY7SUdkSSxtQkFBQTtZQUFBLFdBQUE7RUY2RkY7QUFDRjtBRHJFQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtVQUFBLFdBQUE7QUN3RUY7QURyRUE7RUFDRSxRQUFBO0FDd0VGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9ob21lL2ludHJvL2ludHJvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnYWJzdHJhY3RzJztcclxuXHJcbjpob3N0IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gID4gZGl2IHtcclxuICAgIEBpbmNsdWRlIGZ4RmxleChjb2x1bW4pO1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IGNvbG9yKCdiYWNrZ3JvdW5kLXByaW1hcnknKTtcclxuICAgIGNvbG9yOiBjb2xvcignZm9yZWdyb3VuZC1wcmltYXJ5Jyk7XHJcblxyXG4gICAgPiAqIHtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiNkZXNjcmlwdGlvbi1jb250YWluZXIge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBAaW5jbHVkZSBmeEZsZXgocm93KTtcclxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gID4gZGl2IHtcclxuICAgIEBpbmNsdWRlIGZ4RmxleChyb3cpO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4OiAwIDUwJTtcclxuXHJcbiAgICBAaW5jbHVkZSBicmVhaygnbHQnLCAncycpIHtcclxuICAgICAgZmxleDogMCAxMDAlO1xyXG5cclxuICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkIHtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgICB3aWR0aDogODAlO1xyXG4gICAgICBAaW5jbHVkZSBmeEZsZXgoY29sdW1uLCAwLjE1ZW0pO1xyXG4gICAgICBtYXgtd2lkdGg6IDUwdnc7XHJcbiAgICAgIEBpbmNsdWRlIGJyZWFrLWZvbnQoMjBweCwgbnVsbCwgMjBweCk7XHJcbiAgICAgIEBpbmNsdWRlIGJyZWFrKCdsdCcsICdzJykge1xyXG4gICAgICAgIG1heC13aWR0aDogNzB2dztcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgLmRpdmlkZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgQGluY2x1ZGUgYnJlYWstZm9udCgyN3B4LCBudWxsLCAyN3B4KTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGl2aWRlciB7XHJcbiAgICAgICAgbWluLWhlaWdodDogMXB4O1xyXG4gICAgICAgIGhlaWdodDogMC4xZW07XHJcbiAgICAgICAgd2lkdGg6IDBlbTtcclxuICAgICAgICBvcGFjaXR5OiAwLjE7XHJcbiAgICAgICAgYmFja2dyb3VuZDogY29sb3IoJ2ZvcmVncm91bmQtcHJpbWFyeScpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuNXMgZWFzZS1pbi1vdXQsIG9wYWNpdHkgMC41cyBlYXNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgICAgICBjb2xvcjogY29sb3IoJ2ZvcmVncm91bmQtcHJpbWFyeScpO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiNidWJibGVzLWNvbnRhaW5lciB7XHJcbiAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgQGluY2x1ZGUgYnJlYWstcHJvcCgnZmxleCcsIChcclxuICAgICd4cyc6IDAgMzAlLFxyXG4gICAgJ3MnOiAwIDM1JSxcclxuICAgICdtJzogMCA0MCUsXHJcbiAgICAnbCc6IDAgNTAlLFxyXG4gICAgJ3hsJzogMCA1NSVcclxuICApKVxyXG59XHJcblxyXG4jd2F2ZS1jb250YWluZXIge1xyXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbGV4OiAwIDEwJTtcclxufVxyXG5cclxuLmljb24tcGFuZWwge1xyXG4gIHRvcDogMTUlO1xyXG59XHJcblxyXG4iLCI6aG9zdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbjpob3N0ID4gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLXByaW1hcnksICMyZTMyMzUpO1xuICBjb2xvcjogdmFyKC0tZm9yZWdyb3VuZC1wcmltYXJ5LCB3aGl0ZSk7XG59XG46aG9zdCA+IGRpdiA+ICoge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4jZGVzY3JpcHRpb24tY29udGFpbmVyIHtcbiAgZmxleC1ncm93OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbiNkZXNjcmlwdGlvbi1jb250YWluZXIgPiBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXg6IDAgNTAlO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogY2FsYyg2MDBweCAtIDFweCkpIHtcbiAgI2Rlc2NyaXB0aW9uLWNvbnRhaW5lciA+IGRpdiB7XG4gICAgZmxleDogMCAxMDAlO1xuICB9XG4gICNkZXNjcmlwdGlvbi1jb250YWluZXIgPiBkaXY6Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbn1cbiNkZXNjcmlwdGlvbi1jb250YWluZXIgPiBkaXYgLmNhcmQge1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIHdpZHRoOiA4MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXgtd2lkdGg6IDUwdnc7XG59XG4jZGVzY3JpcHRpb24tY29udGFpbmVyID4gZGl2IC5jYXJkID4gKjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLWJvdHRvbTogMC4xNWVtO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgI2Rlc2NyaXB0aW9uLWNvbnRhaW5lciA+IGRpdiAuY2FyZCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XG4gICNkZXNjcmlwdGlvbi1jb250YWluZXIgPiBkaXYgLmNhcmQge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIHtcbiAgI2Rlc2NyaXB0aW9uLWNvbnRhaW5lciA+IGRpdiAuY2FyZCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTE5cHgpIHtcbiAgI2Rlc2NyaXB0aW9uLWNvbnRhaW5lciA+IGRpdiAuY2FyZCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpIHtcbiAgI2Rlc2NyaXB0aW9uLWNvbnRhaW5lciA+IGRpdiAuY2FyZCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiBjYWxjKDYwMHB4IC0gMXB4KSkge1xuICAjZGVzY3JpcHRpb24tY29udGFpbmVyID4gZGl2IC5jYXJkIHtcbiAgICBtYXgtd2lkdGg6IDcwdnc7XG4gIH1cbn1cbiNkZXNjcmlwdGlvbi1jb250YWluZXIgPiBkaXYgLmNhcmQ6aG92ZXIgLmRpdmlkZXIge1xuICB3aWR0aDogODAlO1xuICBvcGFjaXR5OiAwLjg7XG59XG4jZGVzY3JpcHRpb24tY29udGFpbmVyID4gZGl2IC5jYXJkIC50aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgI2Rlc2NyaXB0aW9uLWNvbnRhaW5lciA+IGRpdiAuY2FyZCAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTYuMnB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XG4gICNkZXNjcmlwdGlvbi1jb250YWluZXIgPiBkaXYgLmNhcmQgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDIxLjZweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIHtcbiAgI2Rlc2NyaXB0aW9uLWNvbnRhaW5lciA+IGRpdiAuY2FyZCAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjdweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSBhbmQgKG1heC13aWR0aDogMTkxOXB4KSB7XG4gICNkZXNjcmlwdGlvbi1jb250YWluZXIgPiBkaXYgLmNhcmQgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDI3cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE5MjBweCkge1xuICAjZGVzY3JpcHRpb24tY29udGFpbmVyID4gZGl2IC5jYXJkIC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAyN3B4O1xuICB9XG59XG4jZGVzY3JpcHRpb24tY29udGFpbmVyID4gZGl2IC5jYXJkIC5kaXZpZGVyIHtcbiAgbWluLWhlaWdodDogMXB4O1xuICBoZWlnaHQ6IDAuMWVtO1xuICB3aWR0aDogMGVtO1xuICBvcGFjaXR5OiAwLjE7XG4gIGJhY2tncm91bmQ6IHZhcigtLWZvcmVncm91bmQtcHJpbWFyeSwgd2hpdGUpO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjVzIGVhc2UtaW4tb3V0LCBvcGFjaXR5IDAuNXMgZWFzZTtcbn1cbiNkZXNjcmlwdGlvbi1jb250YWluZXIgPiBkaXYgLmNhcmQgLmRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgY29sb3I6IHZhcigtLWZvcmVncm91bmQtcHJpbWFyeSwgd2hpdGUpO1xuICBvcGFjaXR5OiAwLjc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2J1YmJsZXMtY29udGFpbmVyIHtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xuICAjYnViYmxlcy1jb250YWluZXIge1xuICAgIGZsZXg6IDAgMzAlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XG4gICNidWJibGVzLWNvbnRhaW5lciB7XG4gICAgZmxleDogMCAzNSU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSBhbmQgKG1heC13aWR0aDogMTI3OXB4KSB7XG4gICNidWJibGVzLWNvbnRhaW5lciB7XG4gICAgZmxleDogMCA0MCU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODBweCkgYW5kIChtYXgtd2lkdGg6IDE5MTlweCkge1xuICAjYnViYmxlcy1jb250YWluZXIge1xuICAgIGZsZXg6IDAgNTAlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpIHtcbiAgI2J1YmJsZXMtY29udGFpbmVyIHtcbiAgICBmbGV4OiAwIDU1JTtcbiAgfVxufVxuXG4jd2F2ZS1jb250YWluZXIge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4OiAwIDEwJTtcbn1cblxuLmljb24tcGFuZWwge1xuICB0b3A6IDE1JTtcbn0iLCJAaW1wb3J0ICcuL2Z1bmN0aW9ucyc7XHJcblxyXG5AbWl4aW4gYWJzb2x1dGUtY2VudHJlICgkaG9yaXpvbnRhbDogdHJ1ZSwgJHZlcnRpY2FsOiB0cnVlKSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICBAaWYgJHZlcnRpY2FsIGFuZCAkaG9yaXpvbnRhbCB7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIH0gQGVsc2UgaWYgJGhvcml6b250YWwge1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gIH0gQGVsc2UgaWYgJHZlcnRpY2FsIHtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGFic29sdXRlLWZpbGwgKCR3aWR0aDogbnVsbCwgJGhlaWdodDogbnVsbCwgJHR5cGU6ICdzaXplJykge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuXHJcblxyXG4gIEBpZiAkd2lkdGggIT0gbnVsbCB7XHJcbiAgICBAaWYgJHR5cGUgPT0gJ3NpemUnIHtcclxuICAgICAgd2lkdGg6ICR3aWR0aDtcclxuICAgIH0gQGVsc2UgaWYgJHR5cGUgPT0gJ2VkZ2UnIHtcclxuICAgICAgbGVmdDogJHdpZHRoO1xyXG4gICAgICByaWdodDogJHdpZHRoO1xyXG4gICAgfVxyXG4gIH0gQGVsc2Uge1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG5cclxuICBAaWYgJGhlaWdodCAhPSBudWxsIHtcclxuICAgIEBpZiAkdHlwZSA9PSAnc2l6ZScge1xyXG4gICAgICBoZWlnaHQ6ICRoZWlnaHQ7XHJcbiAgICB9IEBlbHNlIGlmICR0eXBlID09ICdlZGdlJyB7XHJcbiAgICAgIHRvcDogJGhlaWdodDtcclxuICAgICAgYm90dG9tOiAkaGVpZ2h0O1xyXG4gICAgfVxyXG4gIH0gQGVsc2Uge1xyXG4gICAgYm90dG9tOiAwO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIG1hdC1pY29uICgkc2l6ZSwgJGNsYXNzOiB0cnVlKSB7XHJcbiAgQGlmICgkY2xhc3MpIHtcclxuICAgIG1hdC1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAkc2l6ZTtcclxuICAgICAgd2lkdGg6ICRzaXplO1xyXG4gICAgICBoZWlnaHQ6ICRzaXplO1xyXG4gICAgICBsaW5lLWhlaWdodDogJHNpemU7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBmb250LXNpemU6ICRzaXplO1xyXG4gICAgd2lkdGg6ICRzaXplO1xyXG4gICAgaGVpZ2h0OiAkc2l6ZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAkc2l6ZTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4ICgkZGlyZWN0aW9uOiByb3csICRqdXN0aWZ5OiBjZW50ZXIsICRhbGlnbjogY2VudGVyKSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xyXG4gIGFsaWduLWl0ZW1zOiAkYWxpZ247XHJcbiAgZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb247XHJcbn1cclxuXHJcbi8vIEZsZXggbGF5b3V0XHJcbkBtaXhpbiBmeEZsZXggKCRkaXJlY3Rpb24sICRnYXA6IG51bGwsICRqdXN0aWZ5OiBjZW50ZXIsICRhbGlnbjogY2VudGVyKSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcclxuICBhbGlnbi1pdGVtczogJGFsaWduO1xyXG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XHJcblxyXG4gIEBpZiAoJGdhcCkge1xyXG4gICAgPiAqOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgICBAaWYgKCRkaXJlY3Rpb24gPT0gcm93KSB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAkZ2FwO1xyXG4gICAgICB9IEBlbHNlIGlmICgkZGlyZWN0aW9uID09IGNvbHVtbikge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206ICRnYXA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBpdGVtLXNwYWNlICgkZGlyZWN0aW9uOiByb3csICRkaXN0YW5jZTogMjBweCkge1xyXG4gIEBpZiAkZGlyZWN0aW9uID09IHJvdyB7XHJcbiAgICA+ICo6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogJGRpc3RhbmNlO1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJGRpcmVjdGlvbiA9PSBjb2x1bW4ge1xyXG4gICAgPiAqOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAkZGlzdGFuY2U7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIlxyXG4vLyAtLS0+IEJyZWFrcG9pbnRzXHJcbiRicmVha3BvaW50czogKFxyXG4gICd4cy1taW4nOiAwcHgsXHJcbiAgJ3hzLW1heCc6IDU5OXB4LFxyXG4gICdzLW1pbic6IDYwMHB4LFxyXG4gICdzLW1heCc6IDk1OXB4LFxyXG4gICdtLW1pbic6IDk2MHB4LFxyXG4gICdtLW1heCc6IDEyNzlweCxcclxuICAnbC1taW4nOiAxMjgwcHgsXHJcbiAgJ2wtbWF4JzogMTkxOXB4LFxyXG4gICd4bC1taW4nOiAxOTIwcHgsXHJcbiAgJ3hsLW1heCc6IDUwMDBweFxyXG4pICFkZWZhdWx0O1xyXG5cclxuLy8geHNcdCdzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSdcclxuLy8gc21cdCdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogOTU5cHgpJ1xyXG4vLyBtZFx0J3NjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpJ1xyXG4vLyBsZ1x0J3NjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSBhbmQgKG1heC13aWR0aDogMTkxOXB4KSdcclxuLy8geGxcdCdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE5MjBweCkgYW5kIChtYXgtd2lkdGg6IDUwMDBweCknXHJcblxyXG4vLyBsdC1zbVx0J3NjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpJ1xyXG4vLyBsdC1tZFx0J3NjcmVlbiBhbmQgKG1heC13aWR0aDogOTU5cHgpJ1xyXG4vLyBsdC1sZ1x0J3NjcmVlbiBhbmQgKG1heC13aWR0aDogMTI3OXB4KSdcclxuLy8gbHQteGxcdCdzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE5MTlweCknXHJcblxyXG4vLyBndC14c1x0J3NjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpJ1xyXG4vLyBndC1zbVx0J3NjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpJ1xyXG4vLyBndC1tZFx0J3NjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSdcclxuLy8gZ3QtbGdcdCdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE5MjBweCknXHJcblxyXG5AbWl4aW4gYnJlYWsoJGx0R3QsICRicmVha3BvaW50KSB7XHJcbiAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJyN7JGJyZWFrcG9pbnR9LW1pbicpIHtcclxuICAgIEBpZiAoJGx0R3QgPT0gJ2x0Jykge1xyXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiBjYWxjKCN7bWFwLWdldCgkYnJlYWtwb2ludHMsICcjeyRicmVha3BvaW50fS1taW4nKX0gLSAxcHgpKSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICAgIH1cclxuICAgIH0gQGVsc2UgaWYgKCRsdEd0ID09ICdndCcpIHtcclxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogY2FsYygje21hcC1nZXQoJGJyZWFrcG9pbnRzLCAnI3skYnJlYWtwb2ludH0tbWF4Jyl9ICsgMXB4KSkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgICB9XHJcbiAgICB9IEBlbHNlIHtcclxuICAgICAgQGVycm9yICdVbnJlY29nbmlzZWQgcGFyYW1ldGVyICN7JGx0R3R9LiBWYWx1ZXMgXFwnZ3RcXCcgYW5kIFxcJ2x0XFwnIGFyZSBhY2NlcHRlZC4nO1xyXG4gICAgfVxyXG4gIH0gQGVsc2Uge1xyXG4gICAgQGVycm9yICdVbnJlY29nbmlzZWQgYnJlYWtwb2ludCAjeyRicmVha3BvaW50fS4gQXZhaWxhYmxlIGJyZWFrcG9pbnRzIGFyZTogI3ttYXAta2V5cygkYnJlYWtwb2ludHMpfS4nO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGJyZWFrLXByb3AgKCRwcm9wZXJ0eSwgJGJyZWFrLW1hcCkge1xyXG4gIC8vIHhzXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcclxuICAgICN7JHByb3BlcnR5fTogbWFwLWdldCgkYnJlYWstbWFwLCAneHMnKTtcclxuICB9XHJcbiAgLy8gc1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogOTU5cHgpIHtcclxuICAgICN7JHByb3BlcnR5fTogbWFwLWdldCgkYnJlYWstbWFwLCAncycpO1xyXG4gIH1cclxuICAvLyBtXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIHtcclxuICAgICN7JHByb3BlcnR5fTogbWFwLWdldCgkYnJlYWstbWFwLCAnbScpO1xyXG4gIH1cclxuICAvLyBsXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSBhbmQgKG1heC13aWR0aDogMTkxOXB4KSB7XHJcbiAgICAjeyRwcm9wZXJ0eX06IG1hcC1nZXQoJGJyZWFrLW1hcCwgJ2wnKTtcclxuICB9XHJcbiAgLy8geGxcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpIHtcclxuICAgICN7JHByb3BlcnR5fTogbWFwLWdldCgkYnJlYWstbWFwLCAneGwnKTtcclxuICB9XHJcbn1cclxuLy8gPC0tLSBCcmVha3BvaW50c1xyXG5cclxuQG1peGluIGJyZWFrLWZvbnQgKCRzaXplLCAkbWluOiBudWxsLCAkbWF4OiBudWxsKSB7XHJcbiAgQGluY2x1ZGUgYnJlYWstcHJvcCgnZm9udC1zaXplJywgKFxyXG4gICAgJ3hzJzogc25hcCgkc2l6ZSAqIDAuNiwgJG1pbiwgJG1heCksXHJcbiAgICAncyc6IHNuYXAoJHNpemUgKiAwLjgsICRtaW4sICRtYXgpLFxyXG4gICAgJ20nOiAkc2l6ZSxcclxuICAgICdsJzogc25hcCgkc2l6ZSAqIDEuMSwgJG1pbiwgJG1heCksXHJcbiAgICAneGwnOiBzbmFwKCRzaXplICogMS4yLCAkbWluLCAkbWF4KVxyXG4gICkpXHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/modules/home/intro/intro.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/home/intro/intro.component.ts ***!
  \*******************************************************/
/*! exports provided: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return IntroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IntroComponent = class IntroComponent {
};
IntroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-intro',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./intro.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/intro/intro.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./intro.component.scss */ "./src/app/modules/home/intro/intro.component.scss")).default]
    })
], IntroComponent);



/***/ })

}]);
//# sourceMappingURL=modules-home-home-module-es2015.js.map