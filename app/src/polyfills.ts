/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/guide/browser-support
 */

/***************************************************************************************************
 * BROWSER POLYFILLS
 */

/** IE10 and IE11 requires the following for NgClass support on SVG elements */
import 'classlist.js'  // Run `npm install --save classlist.js`.

/**
 * Web Animations `@angular/platform-browser/animations`
 * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
 * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
 */
import 'web-animations-js'  // Run `npm install --save web-animations-js`.

/**
 * By default, zone.js will patch all possible macroTask and DomEvents
 * user can disable parts of macroTask/DomEvents patch by setting following flags
 * because those flags need to be set before `zone.js` being loaded, and webpack
 * will put import in the top of bundle, so user need to create a separate file
 * in this directory (for example: zone-flags.ts), and put the following flags
 * into that file, and then add the following code before importing zone.js.
 * import './zone-flags.ts';
 *
 * The flags allowed in zone-flags.ts are listed here.
 *
 * The following flags will work for all browsers.
 *
 * (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
 * (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
 * (window as any).__zone_symbol__UNPATCHED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
 *
 *  in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
 *  with the following flag, it will bypass `zone.js` patch for IE/Edge
 *
 *  (window as any).__Zone_enable_cross_context_check = true;
 *
 */

/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
import 'zone.js/dist/zone'  // Included with Angular CLI.

/***************************************************************************************************
 * APPLICATION IMPORTS
 */

// requestAnimationFrame polyfill by Erik Möller.
// Fixes from Paul Irish, Tino Zijdel, Andrew Mao, Klemen Slavic, Darius Bacon and Joan Alba Maldonado.
// Adapted from https://gist.github.com/paulirish/1579671 which derived from
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
// Added high resolution timing. This window.performance.now() polyfill can be used: https://gist.github.com/jalbam/cc805ac3cfe14004ecdf323159ecf40e
// MIT license
// Gist: https://gist.github.com/jalbam/5fe05443270fa6d8136238ec72accbc0
/* tslint:disable */
(function() {
	var vendors = ['webkit', 'moz', 'ms', 'o'], vp = null;
	for (var x = 0; x < vendors.length && !window.requestAnimationFrame && !window.cancelAnimationFrame; x++)
	{
		vp = vendors[x];
		window.requestAnimationFrame = window.requestAnimationFrame || window[vp + 'RequestAnimationFrame'];
		window.cancelAnimationFrame = window.cancelAnimationFrame || window[vp + 'CancelAnimationFrame'] || window[vp + 'CancelRequestAnimationFrame'];
	}
	if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) //iOS6 is buggy.
	{
		var lastTime = 0;
		window.requestAnimationFrame = function(callback, element) {
			var now = window.performance.now();
			var nextTime = Math.max(lastTime + 16, now);
			return setTimeout(function() { callback(lastTime = nextTime); }, nextTime - now);
		} as any;
		window.cancelAnimationFrame = clearTimeout;
	}
}());
