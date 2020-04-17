function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports, __webpack_require__) {
    var map = {
      "./modules/browser-not-supported/browser-not-supported.module": ["./src/app/modules/browser-not-supported/browser-not-supported.module.ts", "modules-browser-not-supported-browser-not-supported-module"],
      "./modules/error/error.module": ["./src/app/modules/error/error.module.ts", "modules-error-error-module"],
      "./modules/home/home.module": ["./src/app/modules/home/home.module.ts", "modules-home-home-module"],
      "./modules/projects/projects.module": ["./src/app/modules/projects/projects.module.ts", "modules-projects-projects-module"]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return __webpack_require__.e(ids[1]).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-SG": "./node_modules/moment/locale/en-SG.js",
      "./en-SG.js": "./node_modules/moment/locale/en-SG.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-nav *ngIf=\"showMenu\" [class.mat-elevation-z5]=\"headerHeight <= 50\" [style.height]=\"headerHeight + 'px'\"></app-nav>\n<div id=\"header-placeholder\" [style.height]=\"headerHeight + 'px'\"></div>\n\n<router-outlet></router-outlet>\n\n<app-footer></app-footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/arrow-scroll/arrow-scroll.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/arrow-scroll/arrow-scroll.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreComponentsArrowScrollArrowScrollComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"overflow-content-container\" [id]=\"contentContainerId\" #scroll (mousewheel)=\"scrollDirection(0)\"\n(pan)=\"scrollDirection(0)\">\n  <!-- Empty swipe events, as otherwise swipe in parent does not get triggered -->\n  <div class=\"overflow-content\" [id]=\"contentId\" (swipeLeft)=\"null\" (swipeRight)=\"null\">\n    <ng-content></ng-content>\n  </div>\n</div>\n<div class=\"overflow-indicator\"></div>\n\n<div class=\"overflow-top\" (mouseenter)=\"scrollDirection(-1)\" (mouseleave)=\"scrollDirection(0)\">\n  <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"30px\" width=\"30px\" viewBox=\"0 0 60 40\" class=\"arrow-top\"\n    [class.active]=\"scrollBy < 0\"\n    *ngIf=\"scroll.scrollTop\" (click)=\"scrollSpeed(-1)\">\n    <polygon points=\"9.3,15.2 14.5,10 32.6,28.1 50.7,10 55.9,15.2 32.6,38.5\" />\n  </svg>\n</div>\n\n<div class=\"overflow-bottom\" (mouseenter)=\"scrollDirection(1)\" (mouseleave)=\"scrollDirection(0)\">\n  <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"30px\" width=\"30px\" viewBox=\"0 0 60 40\" class=\"arrow-bottom\"\n  [class.active]=\"scrollBy > 0\"\n    *ngIf=\"scroll.scrollTop < scroll.scrollHeight - scroll.clientHeight\" (click)=\"scrollSpeed(1)\">\n    <polygon points=\"9.3,15.2 14.5,10 32.6,28.1 50.7,10 55.9,15.2 32.6,38.5\" />\n  </svg>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/contact-form/contact-form.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/contact-form/contact-form.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreComponentsContactFormContactFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"form-container\">\n  <h1>Contact Me</h1>\n  <form [formGroup]=\"form\" action=\"sendForm()\">\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Name</mat-label>\n      <input matInput formControlName=\"name\">\n      <mat-icon matSuffix>person</mat-icon>\n    </mat-form-field>\n\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Email</mat-label>\n      <input matInput formControlName=\"replyTo\">\n      <mat-icon matSuffix>email</mat-icon>\n    </mat-form-field>\n\n    <mat-form-field appearance=\"outline\" class=\"textarea\">\n      <mat-label>Message</mat-label>\n      <textarea matInput\n      #message maxlength=\"500\"\n      matTextareaAutosize=\"false\"\n      formControlName=\"message\"\n      ></textarea>\n      <mat-hint align=\"end\">{{message.value.length}} / 500</mat-hint>\n    </mat-form-field>\n  </form>\n\n  <app-progress-button [loading]=\"sending\" (submit)=\"sendForm()\"\n  [form]=\"form\" [valid]=\"form.valid\" text=\"send\">\n  </app-progress-button>\n\n  <app-form-overlay [complete]=\"submitted\" completeText=\"Message Sent\" [error]=\"error\"></app-form-overlay>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/footer/footer.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/footer/footer.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreComponentsFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<small>&copy; Copyright {{year}}, Lina Ragauskaite</small>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/form-overlay/form-overlay.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/form-overlay/form-overlay.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreComponentsFormOverlayFormOverlayComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"cover-up\" [@fadeOut]=\"state\">\n  <div class=\"check\">\n    <div class=\"check-circle\" [@scaleUp]=\"state\">\n      <mat-icon class=\"done-icon\">done</mat-icon>\n    </div>\n    <p>{{completeText}}</p>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/image-shatter/image-shatter.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/image-shatter/image-shatter.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreComponentsImageShatterImageShatterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/navbar/navbar.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/navbar/navbar.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreComponentsNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=navbar-wrap>\n  <div id=\"nav-title\"></div>\n\n  <div id=\"logo-container\" (click)=\"navBar.goTo(section.intro)\">\n    <img src=\"assets/logo/logo-dark.svg\" alt=\"Lina Ragauskaite\">\n  </div>\n\n  <div class=\"menu\">\n    <div class=\"sections\" *ngIf=\"!viewService.mobile\">\n      <a [class.active]=\"navBar.activeSection === 'experience'\" (click)=\"navBar.goTo(section.experience)\">Experience</a>\n      <a [class.active]=\"navBar.activeSection === projectsSection\" (click)=\"navBar.goTo(section[projectsSection])\">Projects</a>\n      <a [class.active]=\"navBar.activeSection === 'contact'\" (click)=\"navBar.goTo(section.contact)\">Contact</a>\n    </div>\n\n    <div id=\"menu-backdrop\" [class.expanded]=\"menuOpen\" [no-scroll]=\"menuOpen\">\n      <div id=\"backdrop\"></div>\n      <mat-icon svgIcon=\"menu\" *ngIf=\"viewService.mobile && !menuOpen\" (click)=\"menuOpen = true\"></mat-icon>\n      <mat-icon *ngIf=\"menuOpen\" (click)=\"menuOpen = false\">close</mat-icon>\n\n      <div class=\"sections\" *ngIf=\"menuOpen\">\n        <a [class.active]=\"navBar.activeSection === 'intro'\" (click)=\"menuOpen = false; navBar.goTo(section.intro)\">Intro</a>\n        <a [class.active]=\"navBar.activeSection === 'experience'\" (click)=\"menuOpen = false; navBar.goTo(section.experience)\">Experience</a>\n        <a [class.active]=\"navBar.activeSection === projectsSection\" (click)=\"menuOpen = false; navBar.goTo(section[projectsSection])\">Projects</a>\n        <a [class.active]=\"navBar.activeSection === 'contact'\" (click)=\"menuOpen = false; navBar.goTo(section.contact)\">Contact</a>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/post-cover/post-cover.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/post-cover/post-cover.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreComponentsPostCoverPostCoverComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div #coverContainer id=\"coverContainer\">\n  <img #imageRef id=\"image\">\n  <div #shatterContainer id=\"shatterContainer\">\n    <span #textRef id=\"textSpan\">{{text}}</span>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/progress-button/progress-button.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/progress-button/progress-button.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreComponentsProgressButtonProgressButtonComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<button type=\"submit\" cdkFocusInitial mat-raised-button [color]=\"valid || !hovered ? 'accent' : 'warn'\"\n[disabled]=\"disabled\" (click)=\"onClick()\"\n[@buttonShrink]=\"state\" [class.valid]=\"valid\">\n  <span [@textFade]=\"state\">{{text}}</span>\n</button>\n<div class=\"spinner-container\">\n  <div>\n      <div [@highlight]=\"state\"></div>\n  </div>\n  <div class=\"spinner\" [@spinnerFade]=\"state\">\n      <div class=\"loader\"></div>\n      <div class=\"loader-track\" ></div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/projects-list/projects-list.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/projects-list/projects-list.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreComponentsProjectsListProjectsListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"project-block\" *ngFor=\"let project of projects; let i = index\" [class.reverse]=\"i % 2 !== 0\" [style.margin-top]=\"i === 0 ? 0 : ''\">\n  <div class=\"ratio-wrapper\">\n    <div class=\"image\">\n      <app-image-shatter #el *ngIf=\"project.cover\"\n      (clicked)=\"projectsService.viewProject(project)\"\n      (in-view)=\"renderWhen === 'in-view' && el.render()\"\n      (rendered)=\"renderWhen === 'rendered' && el.render()\"\n      [src]=\"'assets/projects/' + project.cover\"></app-image-shatter>\n    </div>\n  </div>\n\n  <div class=\"ratio-wrapper\">\n    <div class=\"summary-wrapper\">\n      <div class=\"summary-content\">\n        <h3 class=\"read-more\" (click)=\"projectsService.viewProject(project)\">{{project.title}}</h3>\n        <p>\n          <small *ngIf=\"project.startDate\">{{project.startDate | moment:'YYYY.MM=>YYYY MMM'}}&nbsp;</small>\n          <small *ngIf=\"project.endDate\">- {{project.endDate | moment:'YYYY.MM=>YYYY MMM'}}</small>\n        </p>\n        <small *ngIf=\"project.subtitle\">{{project.subtitle}}</small>\n        <p class=\"read-more\" (click)=\"projectsService.viewProject(project)\">{{project.summary}}</p>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/scroll-block/scroll-block.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/scroll-block/scroll-block.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreComponentsScrollBlockScrollBlockComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"overflow-content {{contentClass}}\" #scroll (rendered)=\"recalculateScrollFlags()\">\n  <ng-content></ng-content>\n</div>\n\n<div class=\"overflow-top\" *ngIf=\"canScrollUp\">\n</div>\n\n<div class=\"overflow-bottom\" *ngIf=\"canScrollDown\">\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: 100%;\n}\n:host app-nav {\n  width: 100%;\n  min-height: 50px;\n  max-height: 150px;\n  z-index: 10;\n  position: fixed;\n  top: 0;\n  left: 0;\n  -webkit-transition: box-shadow 0s linear, height 0.01s linear;\n  transition: box-shadow 0s linear, height 0.01s linear;\n}\n:host app-nav.mat-elevation-z5 {\n  -webkit-transition: box-shadow 0.5s, height 0.01s linear;\n  transition: box-shadow 0.5s, height 0.01s linear;\n}\n:host #header-placeholder {\n  background: var(--od-dark, #2e3235);\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxMaW5hIFJhZ2F1c2thaXRlXFxEZXNrdG9wXFxwcm9qZWN0c1xccG9ydGZvbGlvXFxhcHAvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsV0FBQTtBQ0RGO0FER0U7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSw2REFBQTtFQUFBLHFEQUFBO0FDREo7QURHSTtFQUNFLHdEQUFBO0VBQUEsZ0RBQUE7QUNETjtBREtFO0VBQ0UsbUNBQUE7RUFDQSxXQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdhYnN0cmFjdHMnO1xyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgYXBwLW5hdiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMHMgbGluZWFyLCBoZWlnaHQgMC4wMXMgbGluZWFyO1xyXG5cclxuICAgICYubWF0LWVsZXZhdGlvbi16NSB7XHJcbiAgICAgIHRyYW5zaXRpb246ICBib3gtc2hhZG93IDAuNXMsIGhlaWdodCAwLjAxcyBsaW5lYXI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAjaGVhZGVyLXBsYWNlaG9sZGVyIHtcclxuICAgIGJhY2tncm91bmQ6IGNvbG9yKCdvZC1kYXJrJyk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG59XHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG59XG46aG9zdCBhcHAtbmF2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDUwcHg7XG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xuICB6LWluZGV4OiAxMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMHMgbGluZWFyLCBoZWlnaHQgMC4wMXMgbGluZWFyO1xufVxuOmhvc3QgYXBwLW5hdi5tYXQtZWxldmF0aW9uLXo1IHtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjVzLCBoZWlnaHQgMC4wMXMgbGluZWFyO1xufVxuOmhvc3QgI2hlYWRlci1wbGFjZWhvbGRlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLW9kLWRhcmssICMyZTMyMzUpO1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(_matIconRegistry, _domSanitizer, _router) {
        var _this = this;

        _classCallCheck(this, AppComponent);

        this._matIconRegistry = _matIconRegistry;
        this._domSanitizer = _domSanitizer;
        this._router = _router;
        this.headerHeight = 150;
        this.headerResizable = true;
        this.RegisterCustomIcons([['send', 'icons/action/send.svg'], ['menu', 'icons/action/menu.svg']]);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(window, 'scroll').subscribe(function (e) {
          return _this.headerResizable && _this.CalculateHeader();
        });

        this._router.events.subscribe(function (e) {
          if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]) {
            _this.headerResizable = e.url === '/';

            _this.CalculateHeader();
          }
        });
      }

      _createClass(AppComponent, [{
        key: "CalculateHeader",
        value: function CalculateHeader() {
          this.headerHeight = this.headerResizable ? Math.max(50, 150 - document.scrollingElement.scrollTop * 0.5 * Math.max(1, Math.round(window.devicePixelRatio) - 1)) : 50;
        }
      }, {
        key: "RegisterCustomIcons",
        value: function RegisterCustomIcons(icons) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = icons[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var icon = _step.value;

              var _icon = _slicedToArray(icon, 2),
                  label = _icon[0],
                  path = _icon[1];

              this._matIconRegistry.addSvgIcon(label, this._domSanitizer.bypassSecurityTrustResourceUrl("../assets/".concat(path)));
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }
      }, {
        key: "showMenu",
        get: function get() {
          return !window.location.href.endsWith('browser-not-supported') && !window.location.href.includes('error');
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('outlet', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], AppComponent.prototype, "outlet", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: ScrollHammerConfig, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollHammerConfig", function () {
      return ScrollHammerConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.routing */
    "./src/app/app.routing.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./core/core.module */
    "./src/app/core/core.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var ngx_markdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-markdown */
    "./node_modules/ngx-markdown/fesm2015/ngx-markdown.js");

    var ScrollHammerConfig = /*#__PURE__*/function (_angular_platform_bro) {
      _inherits(ScrollHammerConfig, _angular_platform_bro);

      function ScrollHammerConfig() {
        var _this2;

        _classCallCheck(this, ScrollHammerConfig);

        _this2 = _possibleConstructorReturn(this, _getPrototypeOf(ScrollHammerConfig).apply(this, arguments));
        _this2.overrides = {
          'pinch': {
            enable: false
          },
          'rotate': {
            enable: false
          }
        };
        return _this2;
      }

      return ScrollHammerConfig;
    }(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HammerGestureConfig"]);

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_8__["MarkdownModule"].forRoot({
        markedOptions: {
          provide: ngx_markdown__WEBPACK_IMPORTED_MODULE_8__["MarkedOptions"],
          useValue: {}
        }
      })],
      providers: [{
        provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HAMMER_GESTURE_CONFIG"],
        useClass: ScrollHammerConfig
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/app.routing.ts":
  /*!********************************!*\
    !*** ./src/app/app.routing.ts ***!
    \********************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _core_route_guards_browser_support_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @core/route-guards/browser-support.guard */
    "./src/app/core/route-guards/browser-support.guard.ts");
    /* harmony import */


    var _core_route_guards_browser_not_supported_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @core/route-guards/browser-not-supported.guard */
    "./src/app/core/route-guards/browser-not-supported.guard.ts");

    var routes = [{
      path: '',
      loadChildren: "./modules/home/home.module#HomeModule",
      canActivate: [_core_route_guards_browser_support_guard__WEBPACK_IMPORTED_MODULE_3__["BrowserSupportGuard"]]
    }, {
      path: 'error',
      loadChildren: "./modules/error/error.module#ErrorModule",
      canActivate: [_core_route_guards_browser_support_guard__WEBPACK_IMPORTED_MODULE_3__["BrowserSupportGuard"]]
    }, {
      path: 'projects',
      loadChildren: "./modules/projects/projects.module#ProjectsModule",
      canActivate: [_core_route_guards_browser_support_guard__WEBPACK_IMPORTED_MODULE_3__["BrowserSupportGuard"]]
    }, {
      path: 'browser-not-supported',
      loadChildren: "./modules/browser-not-supported/browser-not-supported.module#BrowserNotSupportedModule",
      canActivate: [_core_route_guards_browser_not_supported_guard__WEBPACK_IMPORTED_MODULE_4__["BrowserNotSupportedGuard"]]
    }, {
      path: '**',
      redirectTo: "error/404"
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/core/components/arrow-scroll/arrow-scroll.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/core/components/arrow-scroll/arrow-scroll.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreComponentsArrowScrollArrowScrollComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host ::-webkit-scrollbar {\n  display: none;\n}\n\n.overflow-content-container {\n  height: 100%;\n  width: 100%;\n  overflow: auto;\n  display: -webkit-box;\n  display: flex;\n}\n\n.overflow-content {\n  width: 100%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding: 50px 0;\n}\n\n.overflow-indicator {\n  position: absolute;\n  top: -1px;\n  bottom: -1px;\n  right: 0;\n  left: 0;\n  pointer-events: none;\n  background: linear-gradient(to bottom, white 0, rgba(255, 255, 255, 0.7) 25px, rgba(255, 255, 255, 0) 50px, rgba(255, 255, 255, 0) calc(100% - 50px), rgba(255, 255, 255, 0.7) calc(100% - 25px), white 100%);\n}\n\n.arrow-top,\n.arrow-bottom {\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  height: 30px;\n  opacity: 0.3;\n  cursor: pointer;\n}\n\n.arrow-top polygon,\n.arrow-bottom polygon {\n  -webkit-animation: canScrollUpDown 3s infinite;\n          animation: canScrollUpDown 3s infinite;\n}\n\n.arrow-top {\n  -webkit-transform: rotate(180deg) translateY(100%);\n          transform: rotate(180deg) translateY(100%);\n}\n\n.arrow-bottom {\n  -webkit-transform: translateY(100%);\n          transform: translateY(100%);\n}\n\n.overflow-top, .overflow-bottom {\n  height: 30px;\n  width: 100%;\n  position: absolute;\n}\n\n.overflow-top .arrow-top.active,\n.overflow-top .arrow-bottom.active, .overflow-bottom .arrow-top.active,\n.overflow-bottom .arrow-bottom.active {\n  opacity: 1;\n}\n\n.overflow-top .arrow-top.active polygon,\n.overflow-top .arrow-bottom.active polygon, .overflow-bottom .arrow-top.active polygon,\n.overflow-bottom .arrow-bottom.active polygon {\n  -webkit-animation: none;\n          animation: none;\n}\n\n.overflow-top {\n  top: 0;\n}\n\n.overflow-bottom {\n  bottom: 0;\n}\n\n@-webkit-keyframes canScrollUpDown {\n  0% {\n    opacity: 0.3;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0.3;\n  }\n}\n\n@keyframes canScrollUpDown {\n  0% {\n    opacity: 0.3;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0.3;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL2Fycm93LXNjcm9sbC9DOlxcVXNlcnNcXExpbmEgUmFnYXVza2FpdGVcXERlc2t0b3BcXHByb2plY3RzXFxwb3J0Zm9saW9cXGFwcC9zcmNcXGFwcFxcY29yZVxcY29tcG9uZW50c1xcYXJyb3ctc2Nyb2xsXFxhcnJvdy1zY3JvbGwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9hcnJvdy1zY3JvbGwvYXJyb3ctc2Nyb2xsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvYXJyb3ctc2Nyb2xsL0M6XFxVc2Vyc1xcTGluYSBSYWdhdXNrYWl0ZVxcRGVza3RvcFxccHJvamVjdHNcXHBvcnRmb2xpb1xcYXBwL3NyY1xcYXBwXFxzdHlsZXNcXGFic3RyYWN0c1xcbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7RUFDRSxhQUFBO0FDRko7O0FETUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7QUNIRjs7QURNQTtFQUNFLFdBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxlQUFBO0FDSEY7O0FETUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxvQkFBQTtFQUNBLDZNQUFBO0FDSEY7O0FEV0E7O0VFakNFLGtCQUFBO0VBT0UsU0FBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUY0QkYsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDTkY7O0FEUUU7O0VBQ0UsOENBQUE7VUFBQSxzQ0FBQTtBQ0xKOztBRFNBO0VBQ0Usa0RBQUE7VUFBQSwwQ0FBQTtBQ05GOztBRFFBO0VBQ0UsbUNBQUE7VUFBQSwyQkFBQTtBQ0xGOztBRFFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0xGOztBRFVJOzs7RUFDRSxVQUFBO0FDTk47O0FEUU07OztFQUNFLHVCQUFBO1VBQUEsZUFBQTtBQ0pSOztBRFlFO0VBQ0UsTUFBQTtBQ1RKOztBRFlFO0VBQ0UsU0FBQTtBQ1ZKOztBRGNBO0VBQ0U7SUFDRSxZQUFBO0VDWEY7RURjQTtJQUNFLFVBQUE7RUNaRjtFRGVBO0lBQ0UsWUFBQTtFQ2JGO0FBQ0Y7O0FERUE7RUFDRTtJQUNFLFlBQUE7RUNYRjtFRGNBO0lBQ0UsVUFBQTtFQ1pGO0VEZUE7SUFDRSxZQUFBO0VDYkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9hcnJvdy1zY3JvbGwvYXJyb3ctc2Nyb2xsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnYWJzdHJhY3RzJztcclxuXHJcbjpob3N0IHtcclxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4ub3ZlcmZsb3ctY29udGVudC1jb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ub3ZlcmZsb3ctY29udGVudCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICBwYWRkaW5nOiA1MHB4IDA7XHJcbn1cclxuXHJcbi5vdmVyZmxvdy1pbmRpY2F0b3Ige1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0xcHg7XHJcbiAgYm90dG9tOiAtMXB4O1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSxcclxuICAgICAgd2hpdGUgMCxcclxuICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpIDI1cHgsXHJcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgNTBweCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSBjYWxjKDEwMCUgLSA1MHB4KSxcclxuICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpIGNhbGMoMTAwJSAtIDI1cHgpLFxyXG4gICAgICB3aGl0ZSAxMDAlKTtcclxufVxyXG5cclxuLmFycm93LXRvcCxcclxuLmFycm93LWJvdHRvbSB7XHJcbiAgQGluY2x1ZGUgYWJzb2x1dGUtY2VudHJlKHRydWUsIGZhbHNlKTtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgb3BhY2l0eTogMC4zO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgcG9seWdvbiB7XHJcbiAgICBhbmltYXRpb246IGNhblNjcm9sbFVwRG93biAzcyBpbmZpbml0ZTtcclxuICB9XHJcbn1cclxuXHJcbi5hcnJvdy10b3Age1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZykgdHJhbnNsYXRlWSgxMDAlKTtcclxufVxyXG4uYXJyb3ctYm90dG9tIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XHJcbn1cclxuXHJcbi5vdmVyZmxvdy10b3AsIC5vdmVyZmxvdy1ib3R0b20ge1xyXG4gIGhlaWdodDogMzBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gIC5hcnJvdy10b3AsXHJcbiAgLmFycm93LWJvdHRvbSB7XHJcblxyXG4gICAgJi5hY3RpdmUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG5cclxuICAgICAgcG9seWdvbiB7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxufVxyXG5cclxuLm92ZXJmbG93IHtcclxuICAmLXRvcCB7XHJcbiAgICB0b3A6IDA7XHJcbiAgfVxyXG5cclxuICAmLWJvdHRvbSB7XHJcbiAgICBib3R0b206IDA7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGNhblNjcm9sbFVwRG93biB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMC4zO1xyXG4gIH1cclxuXHJcbiAgNTAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDAuMztcclxuICB9XHJcbn1cclxuIiwiOmhvc3QgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5vdmVyZmxvdy1jb250ZW50LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ub3ZlcmZsb3ctY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBwYWRkaW5nOiA1MHB4IDA7XG59XG5cbi5vdmVyZmxvdy1pbmRpY2F0b3Ige1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTFweDtcbiAgYm90dG9tOiAtMXB4O1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlIDAsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSAyNXB4LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDUwcHgsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgY2FsYygxMDAlIC0gNTBweCksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSBjYWxjKDEwMCUgLSAyNXB4KSwgd2hpdGUgMTAwJSk7XG59XG5cbi5hcnJvdy10b3AsXG4uYXJyb3ctYm90dG9tIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBvcGFjaXR5OiAwLjM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5hcnJvdy10b3AgcG9seWdvbixcbi5hcnJvdy1ib3R0b20gcG9seWdvbiB7XG4gIGFuaW1hdGlvbjogY2FuU2Nyb2xsVXBEb3duIDNzIGluZmluaXRlO1xufVxuXG4uYXJyb3ctdG9wIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKSB0cmFuc2xhdGVZKDEwMCUpO1xufVxuXG4uYXJyb3ctYm90dG9tIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xufVxuXG4ub3ZlcmZsb3ctdG9wLCAub3ZlcmZsb3ctYm90dG9tIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLm92ZXJmbG93LXRvcCAuYXJyb3ctdG9wLmFjdGl2ZSxcbi5vdmVyZmxvdy10b3AgLmFycm93LWJvdHRvbS5hY3RpdmUsIC5vdmVyZmxvdy1ib3R0b20gLmFycm93LXRvcC5hY3RpdmUsXG4ub3ZlcmZsb3ctYm90dG9tIC5hcnJvdy1ib3R0b20uYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5vdmVyZmxvdy10b3AgLmFycm93LXRvcC5hY3RpdmUgcG9seWdvbixcbi5vdmVyZmxvdy10b3AgLmFycm93LWJvdHRvbS5hY3RpdmUgcG9seWdvbiwgLm92ZXJmbG93LWJvdHRvbSAuYXJyb3ctdG9wLmFjdGl2ZSBwb2x5Z29uLFxuLm92ZXJmbG93LWJvdHRvbSAuYXJyb3ctYm90dG9tLmFjdGl2ZSBwb2x5Z29uIHtcbiAgYW5pbWF0aW9uOiBub25lO1xufVxuXG4ub3ZlcmZsb3ctdG9wIHtcbiAgdG9wOiAwO1xufVxuLm92ZXJmbG93LWJvdHRvbSB7XG4gIGJvdHRvbTogMDtcbn1cblxuQGtleWZyYW1lcyBjYW5TY3JvbGxVcERvd24ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMC4zO1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwLjM7XG4gIH1cbn0iLCJAaW1wb3J0ICcuL2Z1bmN0aW9ucyc7XHJcblxyXG5AbWl4aW4gYWJzb2x1dGUtY2VudHJlICgkaG9yaXpvbnRhbDogdHJ1ZSwgJHZlcnRpY2FsOiB0cnVlKSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICBAaWYgJHZlcnRpY2FsIGFuZCAkaG9yaXpvbnRhbCB7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIH0gQGVsc2UgaWYgJGhvcml6b250YWwge1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gIH0gQGVsc2UgaWYgJHZlcnRpY2FsIHtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGFic29sdXRlLWZpbGwgKCR3aWR0aDogbnVsbCwgJGhlaWdodDogbnVsbCwgJHR5cGU6ICdzaXplJykge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuXHJcblxyXG4gIEBpZiAkd2lkdGggIT0gbnVsbCB7XHJcbiAgICBAaWYgJHR5cGUgPT0gJ3NpemUnIHtcclxuICAgICAgd2lkdGg6ICR3aWR0aDtcclxuICAgIH0gQGVsc2UgaWYgJHR5cGUgPT0gJ2VkZ2UnIHtcclxuICAgICAgbGVmdDogJHdpZHRoO1xyXG4gICAgICByaWdodDogJHdpZHRoO1xyXG4gICAgfVxyXG4gIH0gQGVsc2Uge1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG5cclxuICBAaWYgJGhlaWdodCAhPSBudWxsIHtcclxuICAgIEBpZiAkdHlwZSA9PSAnc2l6ZScge1xyXG4gICAgICBoZWlnaHQ6ICRoZWlnaHQ7XHJcbiAgICB9IEBlbHNlIGlmICR0eXBlID09ICdlZGdlJyB7XHJcbiAgICAgIHRvcDogJGhlaWdodDtcclxuICAgICAgYm90dG9tOiAkaGVpZ2h0O1xyXG4gICAgfVxyXG4gIH0gQGVsc2Uge1xyXG4gICAgYm90dG9tOiAwO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIG1hdC1pY29uICgkc2l6ZSwgJGNsYXNzOiB0cnVlKSB7XHJcbiAgQGlmICgkY2xhc3MpIHtcclxuICAgIG1hdC1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAkc2l6ZTtcclxuICAgICAgd2lkdGg6ICRzaXplO1xyXG4gICAgICBoZWlnaHQ6ICRzaXplO1xyXG4gICAgICBsaW5lLWhlaWdodDogJHNpemU7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBmb250LXNpemU6ICRzaXplO1xyXG4gICAgd2lkdGg6ICRzaXplO1xyXG4gICAgaGVpZ2h0OiAkc2l6ZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAkc2l6ZTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4ICgkZGlyZWN0aW9uOiByb3csICRqdXN0aWZ5OiBjZW50ZXIsICRhbGlnbjogY2VudGVyKSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xyXG4gIGFsaWduLWl0ZW1zOiAkYWxpZ247XHJcbiAgZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb247XHJcbn1cclxuXHJcbi8vIEZsZXggbGF5b3V0XHJcbkBtaXhpbiBmeEZsZXggKCRkaXJlY3Rpb24sICRnYXA6IG51bGwsICRqdXN0aWZ5OiBjZW50ZXIsICRhbGlnbjogY2VudGVyKSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcclxuICBhbGlnbi1pdGVtczogJGFsaWduO1xyXG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XHJcblxyXG4gIEBpZiAoJGdhcCkge1xyXG4gICAgPiAqOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgICBAaWYgKCRkaXJlY3Rpb24gPT0gcm93KSB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAkZ2FwO1xyXG4gICAgICB9IEBlbHNlIGlmICgkZGlyZWN0aW9uID09IGNvbHVtbikge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206ICRnYXA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBpdGVtLXNwYWNlICgkZGlyZWN0aW9uOiByb3csICRkaXN0YW5jZTogMjBweCkge1xyXG4gIEBpZiAkZGlyZWN0aW9uID09IHJvdyB7XHJcbiAgICA+ICo6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogJGRpc3RhbmNlO1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJGRpcmVjdGlvbiA9PSBjb2x1bW4ge1xyXG4gICAgPiAqOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAkZGlzdGFuY2U7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/core/components/arrow-scroll/arrow-scroll.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/core/components/arrow-scroll/arrow-scroll.component.ts ***!
    \************************************************************************/

  /*! exports provided: ArrowScrollComponent */

  /***/
  function srcAppCoreComponentsArrowScrollArrowScrollComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArrowScrollComponent", function () {
      return ArrowScrollComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var ArrowScrollComponent = /*#__PURE__*/function () {
      function ArrowScrollComponent() {
        _classCallCheck(this, ArrowScrollComponent);

        this.scrollBy = 0;
      }

      _createClass(ArrowScrollComponent, [{
        key: "scrollDirection",
        value: function scrollDirection(direction) {
          var _this3 = this;

          if (this.scrollSubscription) this.scrollSubscription.unsubscribe();
          this.scrollBy = direction;

          if (direction) {
            this.scrollSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1).subscribe(function () {
              _this3.scrollRef.nativeElement.scrollTop += _this3.scrollBy;

              if (_this3.scrollBy < 0 && _this3.scrollRef.nativeElement.scrollTop <= 0) {
                _this3.scrollDirection(0);
              } else if (_this3.scrollBy > 0 && _this3.scrollRef.nativeElement.scrollTop >= _this3.scrollRef.nativeElement.scrollHeight - _this3.scrollRef.nativeElement.clientHeight) {
                _this3.scrollDirection(0);
              }
            });
          }
        }
      }, {
        key: "scrollSpeed",
        value: function scrollSpeed(by) {
          if (!this.scrollBy) this.scrollDirection(by);else this.scrollBy += by;
        }
      }]);

      return ArrowScrollComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ArrowScrollComponent.prototype, "contentContainerId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ArrowScrollComponent.prototype, "contentId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scroll', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], ArrowScrollComponent.prototype, "scrollRef", void 0);
    ArrowScrollComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-arrow-scroll[contentContainerId]',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./arrow-scroll.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/arrow-scroll/arrow-scroll.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./arrow-scroll.component.scss */
      "./src/app/core/components/arrow-scroll/arrow-scroll.component.scss")).default]
    })], ArrowScrollComponent);
    /***/
  },

  /***/
  "./src/app/core/components/contact-form/contact-form.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/core/components/contact-form/contact-form.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreComponentsContactFormContactFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host .form-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  position: relative;\n  padding: 5px;\n}\n:host form {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  width: 100%;\n  margin: 2em 0;\n  overflow: hidden;\n}\n:host form .mat-form-field {\n  -webkit-box-flex: 0;\n          flex: 0 1 48%;\n}\n@media screen and (max-width: calc(960px - 1px)) {\n  :host form .mat-form-field {\n    -webkit-box-flex: 0;\n            flex: 0 0 100%;\n  }\n}\n:host form .mat-form-field.textarea {\n  -webkit-box-flex: 0;\n          flex: 0 0 100%;\n}\n:host form .mat-form-field textarea {\n  height: 150px;\n}\napp-submit-button {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL2NvbnRhY3QtZm9ybS9DOlxcVXNlcnNcXExpbmEgUmFnYXVza2FpdGVcXERlc2t0b3BcXHByb2plY3RzXFxwb3J0Zm9saW9cXGFwcC9zcmNcXGFwcFxcY29yZVxcY29tcG9uZW50c1xcY29udGFjdC1mb3JtXFxjb250YWN0LWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9jb250YWN0LWZvcm0vQzpcXFVzZXJzXFxMaW5hIFJhZ2F1c2thaXRlXFxEZXNrdG9wXFxwcm9qZWN0c1xccG9ydGZvbGlvXFxhcHAvc3JjXFxhcHBcXHN0eWxlc1xcYWJzdHJhY3RzXFxtaXhpbnMuc2NzcyIsInNyYy9hcHAvY29yZS9jb21wb25lbnRzL2NvbnRhY3QtZm9ybS9jb250YWN0LWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9jb250YWN0LWZvcm0vQzpcXFVzZXJzXFxMaW5hIFJhZ2F1c2thaXRlXFxEZXNrdG9wXFxwcm9qZWN0c1xccG9ydGZvbGlvXFxhcHAvc3JjXFxhcHBcXHN0eWxlc1xcYWJzdHJhY3RzXFxicmVha3BvaW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VDNkRBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHVCRDdEd0I7VUM2RHhCLDJCRDdEd0I7RUM4RHhCLHlCQUhzRDtVQUd0RCxtQkFIc0Q7RUFJdEQsNEJEL0RnQjtFQytEaEIsNkJEL0RnQjtVQytEaEIsc0JEL0RnQjtFQUNkLGtCQUFBO0VBQ0EsWUFBQTtBRUNKO0FGRUU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUVBSjtBRkVJO0VBQ0UsbUJBQUE7VUFBQSxhQUFBO0FFQU47QUNnQk07RUhqQkY7SUFJSSxtQkFBQTtZQUFBLGNBQUE7RUVDTjtBQUNGO0FGQ007RUFDRSxtQkFBQTtVQUFBLGNBQUE7QUVDUjtBRkVNO0VBQ0UsYUFBQTtBRUFSO0FGTUE7RUFDRSxZQUFBO0FFSEYiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvY29udGFjdC1mb3JtL2NvbnRhY3QtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ2Fic3RyYWN0cyc7XHJcblxyXG46aG9zdCB7XHJcbiAgLmZvcm0tY29udGFpbmVyIHtcclxuICAgIEBpbmNsdWRlIGZsZXgoY29sdW1uLCBmbGV4LXN0YXJ0KTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICB9XHJcblxyXG4gIGZvcm0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAyZW0gMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgICAgZmxleDogMCAxIDQ4JTtcclxuXHJcbiAgICAgIEBpbmNsdWRlIGJyZWFrKCdsdCcsICdtJykge1xyXG4gICAgICAgIGZsZXg6IDAgMCAxMDAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLnRleHRhcmVhIHtcclxuICAgICAgICBmbGV4OiAwIDAgMTAwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmFwcC1zdWJtaXQtYnV0dG9uIHtcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuIiwiQGltcG9ydCAnLi9mdW5jdGlvbnMnO1xyXG5cclxuQG1peGluIGFic29sdXRlLWNlbnRyZSAoJGhvcml6b250YWw6IHRydWUsICR2ZXJ0aWNhbDogdHJ1ZSkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgQGlmICR2ZXJ0aWNhbCBhbmQgJGhvcml6b250YWwge1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB9IEBlbHNlIGlmICRob3Jpem9udGFsIHtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICB9IEBlbHNlIGlmICR2ZXJ0aWNhbCB7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBhYnNvbHV0ZS1maWxsICgkd2lkdGg6IG51bGwsICRoZWlnaHQ6IG51bGwsICR0eXBlOiAnc2l6ZScpIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcblxyXG5cclxuICBAaWYgJHdpZHRoICE9IG51bGwge1xyXG4gICAgQGlmICR0eXBlID09ICdzaXplJyB7XHJcbiAgICAgIHdpZHRoOiAkd2lkdGg7XHJcbiAgICB9IEBlbHNlIGlmICR0eXBlID09ICdlZGdlJyB7XHJcbiAgICAgIGxlZnQ6ICR3aWR0aDtcclxuICAgICAgcmlnaHQ6ICR3aWR0aDtcclxuICAgIH1cclxuICB9IEBlbHNlIHtcclxuICAgIHJpZ2h0OiAwO1xyXG4gIH1cclxuXHJcbiAgQGlmICRoZWlnaHQgIT0gbnVsbCB7XHJcbiAgICBAaWYgJHR5cGUgPT0gJ3NpemUnIHtcclxuICAgICAgaGVpZ2h0OiAkaGVpZ2h0O1xyXG4gICAgfSBAZWxzZSBpZiAkdHlwZSA9PSAnZWRnZScge1xyXG4gICAgICB0b3A6ICRoZWlnaHQ7XHJcbiAgICAgIGJvdHRvbTogJGhlaWdodDtcclxuICAgIH1cclxuICB9IEBlbHNlIHtcclxuICAgIGJvdHRvbTogMDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBtYXQtaWNvbiAoJHNpemUsICRjbGFzczogdHJ1ZSkge1xyXG4gIEBpZiAoJGNsYXNzKSB7XHJcbiAgICBtYXQtaWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogJHNpemU7XHJcbiAgICAgIHdpZHRoOiAkc2l6ZTtcclxuICAgICAgaGVpZ2h0OiAkc2l6ZTtcclxuICAgICAgbGluZS1oZWlnaHQ6ICRzaXplO1xyXG4gICAgfVxyXG4gIH0gQGVsc2Uge1xyXG4gICAgZm9udC1zaXplOiAkc2l6ZTtcclxuICAgIHdpZHRoOiAkc2l6ZTtcclxuICAgIGhlaWdodDogJHNpemU7XHJcbiAgICBsaW5lLWhlaWdodDogJHNpemU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZmxleCAoJGRpcmVjdGlvbjogcm93LCAkanVzdGlmeTogY2VudGVyLCAkYWxpZ246IGNlbnRlcikge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcclxuICBhbGlnbi1pdGVtczogJGFsaWduO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xyXG59XHJcblxyXG4vLyBGbGV4IGxheW91dFxyXG5AbWl4aW4gZnhGbGV4ICgkZGlyZWN0aW9uLCAkZ2FwOiBudWxsLCAkanVzdGlmeTogY2VudGVyLCAkYWxpZ246IGNlbnRlcikge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb247XHJcbiAgYWxpZ24taXRlbXM6ICRhbGlnbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xyXG5cclxuICBAaWYgKCRnYXApIHtcclxuICAgID4gKjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgICAgQGlmICgkZGlyZWN0aW9uID09IHJvdykge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogJGdhcDtcclxuICAgICAgfSBAZWxzZSBpZiAoJGRpcmVjdGlvbiA9PSBjb2x1bW4pIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAkZ2FwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gaXRlbS1zcGFjZSAoJGRpcmVjdGlvbjogcm93LCAkZGlzdGFuY2U6IDIwcHgpIHtcclxuICBAaWYgJGRpcmVjdGlvbiA9PSByb3cge1xyXG4gICAgPiAqOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6ICRkaXN0YW5jZTtcclxuICAgIH1cclxuICB9IEBlbHNlIGlmICRkaXJlY3Rpb24gPT0gY29sdW1uIHtcclxuICAgID4gKjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogJGRpc3RhbmNlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI6aG9zdCAuZm9ybS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogNXB4O1xufVxuOmhvc3QgZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAyZW0gMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbjpob3N0IGZvcm0gLm1hdC1mb3JtLWZpZWxkIHtcbiAgZmxleDogMCAxIDQ4JTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IGNhbGMoOTYwcHggLSAxcHgpKSB7XG4gIDpob3N0IGZvcm0gLm1hdC1mb3JtLWZpZWxkIHtcbiAgICBmbGV4OiAwIDAgMTAwJTtcbiAgfVxufVxuOmhvc3QgZm9ybSAubWF0LWZvcm0tZmllbGQudGV4dGFyZWEge1xuICBmbGV4OiAwIDAgMTAwJTtcbn1cbjpob3N0IGZvcm0gLm1hdC1mb3JtLWZpZWxkIHRleHRhcmVhIHtcbiAgaGVpZ2h0OiAxNTBweDtcbn1cblxuYXBwLXN1Ym1pdC1idXR0b24ge1xuICBtYXJnaW46IDEwcHg7XG59IiwiXHJcbi8vIC0tLT4gQnJlYWtwb2ludHNcclxuJGJyZWFrcG9pbnRzOiAoXHJcbiAgJ3hzLW1pbic6IDBweCxcclxuICAneHMtbWF4JzogNTk5cHgsXHJcbiAgJ3MtbWluJzogNjAwcHgsXHJcbiAgJ3MtbWF4JzogOTU5cHgsXHJcbiAgJ20tbWluJzogOTYwcHgsXHJcbiAgJ20tbWF4JzogMTI3OXB4LFxyXG4gICdsLW1pbic6IDEyODBweCxcclxuICAnbC1tYXgnOiAxOTE5cHgsXHJcbiAgJ3hsLW1pbic6IDE5MjBweCxcclxuICAneGwtbWF4JzogNTAwMHB4XHJcbikgIWRlZmF1bHQ7XHJcblxyXG4vLyB4c1x0J3NjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpJ1xyXG4vLyBzbVx0J3NjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweCknXHJcbi8vIG1kXHQnc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCkgYW5kIChtYXgtd2lkdGg6IDEyNzlweCknXHJcbi8vIGxnXHQnc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTE5cHgpJ1xyXG4vLyB4bFx0J3NjcmVlbiBhbmQgKG1pbi13aWR0aDogMTkyMHB4KSBhbmQgKG1heC13aWR0aDogNTAwMHB4KSdcclxuXHJcbi8vIGx0LXNtXHQnc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCknXHJcbi8vIGx0LW1kXHQnc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTlweCknXHJcbi8vIGx0LWxnXHQnc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpJ1xyXG4vLyBsdC14bFx0J3NjcmVlbiBhbmQgKG1heC13aWR0aDogMTkxOXB4KSdcclxuXHJcbi8vIGd0LXhzXHQnc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCknXHJcbi8vIGd0LXNtXHQnc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCknXHJcbi8vIGd0LW1kXHQnc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpJ1xyXG4vLyBndC1sZ1x0J3NjcmVlbiBhbmQgKG1pbi13aWR0aDogMTkyMHB4KSdcclxuXHJcbkBtaXhpbiBicmVhaygkbHRHdCwgJGJyZWFrcG9pbnQpIHtcclxuICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAnI3skYnJlYWtwb2ludH0tbWluJykge1xyXG4gICAgQGlmICgkbHRHdCA9PSAnbHQnKSB7XHJcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IGNhbGMoI3ttYXAtZ2V0KCRicmVha3BvaW50cywgJyN7JGJyZWFrcG9pbnR9LW1pbicpfSAtIDFweCkpIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgICAgfVxyXG4gICAgfSBAZWxzZSBpZiAoJGx0R3QgPT0gJ2d0Jykge1xyXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBjYWxjKCN7bWFwLWdldCgkYnJlYWtwb2ludHMsICcjeyRicmVha3BvaW50fS1tYXgnKX0gKyAxcHgpKSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICAgIH1cclxuICAgIH0gQGVsc2Uge1xyXG4gICAgICBAZXJyb3IgJ1VucmVjb2duaXNlZCBwYXJhbWV0ZXIgI3skbHRHdH0uIFZhbHVlcyBcXCdndFxcJyBhbmQgXFwnbHRcXCcgYXJlIGFjY2VwdGVkLic7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAZXJyb3IgJ1VucmVjb2duaXNlZCBicmVha3BvaW50ICN7JGJyZWFrcG9pbnR9LiBBdmFpbGFibGUgYnJlYWtwb2ludHMgYXJlOiAje21hcC1rZXlzKCRicmVha3BvaW50cyl9Lic7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gYnJlYWstcHJvcCAoJHByb3BlcnR5LCAkYnJlYWstbWFwKSB7XHJcbiAgLy8geHNcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xyXG4gICAgI3skcHJvcGVydHl9OiBtYXAtZ2V0KCRicmVhay1tYXAsICd4cycpO1xyXG4gIH1cclxuICAvLyBzXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xyXG4gICAgI3skcHJvcGVydHl9OiBtYXAtZ2V0KCRicmVhay1tYXAsICdzJyk7XHJcbiAgfVxyXG4gIC8vIG1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCkgYW5kIChtYXgtd2lkdGg6IDEyNzlweCkge1xyXG4gICAgI3skcHJvcGVydHl9OiBtYXAtZ2V0KCRicmVhay1tYXAsICdtJyk7XHJcbiAgfVxyXG4gIC8vIGxcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTE5cHgpIHtcclxuICAgICN7JHByb3BlcnR5fTogbWFwLWdldCgkYnJlYWstbWFwLCAnbCcpO1xyXG4gIH1cclxuICAvLyB4bFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE5MjBweCkge1xyXG4gICAgI3skcHJvcGVydHl9OiBtYXAtZ2V0KCRicmVhay1tYXAsICd4bCcpO1xyXG4gIH1cclxufVxyXG4vLyA8LS0tIEJyZWFrcG9pbnRzXHJcblxyXG5AbWl4aW4gYnJlYWstZm9udCAoJHNpemUsICRtaW46IG51bGwsICRtYXg6IG51bGwpIHtcclxuICBAaW5jbHVkZSBicmVhay1wcm9wKCdmb250LXNpemUnLCAoXHJcbiAgICAneHMnOiBzbmFwKCRzaXplICogMC42LCAkbWluLCAkbWF4KSxcclxuICAgICdzJzogc25hcCgkc2l6ZSAqIDAuOCwgJG1pbiwgJG1heCksXHJcbiAgICAnbSc6ICRzaXplLFxyXG4gICAgJ2wnOiBzbmFwKCRzaXplICogMS4xLCAkbWluLCAkbWF4KSxcclxuICAgICd4bCc6IHNuYXAoJHNpemUgKiAxLjIsICRtaW4sICRtYXgpXHJcbiAgKSlcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/core/components/contact-form/contact-form.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/core/components/contact-form/contact-form.component.ts ***!
    \************************************************************************/

  /*! exports provided: ContactFormComponent */

  /***/
  function srcAppCoreComponentsContactFormContactFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactFormComponent", function () {
      return ContactFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @core/services/api.service */
    "./src/app/core/services/api.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _core_utils_app_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @core/utils/app-error */
    "./src/app/core/utils/app-error.ts");

    var ContactFormComponent = /*#__PURE__*/function () {
      function ContactFormComponent(api, formBuilder) {
        _classCallCheck(this, ContactFormComponent);

        this.api = api;
        this.sending = false;
        this.submitted = false;
        this.form = formBuilder.group({
          replyTo: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]),
          name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
          message: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
        });
      }

      _createClass(ContactFormComponent, [{
        key: "sendForm",
        value: function sendForm() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!this.sending) {
                      _context.next = 2;
                      break;
                    }

                    return _context.abrupt("return");

                  case 2:
                    if (this.form.valid) {
                      _context.next = 4;
                      break;
                    }

                    return _context.abrupt("return");

                  case 4:
                    this.error = undefined;
                    this.sending = true;
                    _context.prev = 6;
                    _context.next = 9;
                    return this.api.wrapr.Emails().sendContactForm(this.form.value).run();

                  case 9:
                    this.submitted = true;
                    _context.next = 16;
                    break;

                  case 12:
                    _context.prev = 12;
                    _context.t0 = _context["catch"](6);
                    Object(_core_utils_app_error__WEBPACK_IMPORTED_MODULE_4__["handleError"])(_context.t0, {
                      form: this.form.value
                    }); // TEMP: Ignore errors

                    this.submitted = true; // this.error = error.message

                  case 16:
                    this.sending = false;

                  case 17:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this, [[6, 12]]);
          }));
        }
      }]);

      return ContactFormComponent;
    }();

    ContactFormComponent.ctorParameters = function () {
      return [{
        type: _core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }];
    };

    ContactFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/contact-form/contact-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact-form.component.scss */
      "./src/app/core/components/contact-form/contact-form.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])], ContactFormComponent);
    /***/
  },

  /***/
  "./src/app/core/components/footer/footer.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/core/components/footer/footer.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreComponentsFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: -webkit-box;\n  display: flex;\n  height: 30px;\n  width: 100%;\n}\n:host small {\n  margin: auto;\n  color: var(--foreground-secondary, #2e3235);\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL2Zvb3Rlci9DOlxcVXNlcnNcXExpbmEgUmFnYXVza2FpdGVcXERlc2t0b3BcXHByb2plY3RzXFxwb3J0Zm9saW9cXGFwcC9zcmNcXGFwcFxcY29yZVxcY29tcG9uZW50c1xcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNERjtBREdFO0VBQ0UsWUFBQTtFQUNBLDJDQUFBO0VBQ0EsZUFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvY29yZS9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdhYnN0cmFjdHMnO1xyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBzbWFsbCB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBjb2xvcjogY29sb3IoJ2ZvcmVncm91bmQtc2Vjb25kYXJ5Jyk7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbjpob3N0IHNtYWxsIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBjb2xvcjogdmFyKC0tZm9yZWdyb3VuZC1zZWNvbmRhcnksICMyZTMyMzUpO1xuICBmb250LXNpemU6IDEycHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/core/components/footer/footer.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/core/components/footer/footer.component.ts ***!
    \************************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppCoreComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);

    var FooterComponent = function FooterComponent() {
      _classCallCheck(this, FooterComponent);

      this.year = moment__WEBPACK_IMPORTED_MODULE_2___default()().year();
    };

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/footer/footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.scss */
      "./src/app/core/components/footer/footer.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], FooterComponent);
    /***/
  },

  /***/
  "./src/app/core/components/form-overlay/form-overlay.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/core/components/form-overlay/form-overlay.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreComponentsFormOverlayFormOverlayComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: block;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  pointer-events: none;\n}\n\n.cover-up {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: var(--background-secondary, white);\n  background: white;\n}\n\n.check {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  width: 70px;\n  height: 70px;\n}\n\n.check .check-circle {\n  background: var(--success, #98c379);\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  display: -webkit-box;\n  display: flex;\n}\n\n.check .check-circle mat-icon {\n  margin: auto;\n  color: var(--foreground-secondary, #2e3235);\n  font-size: 50px;\n  width: 50px;\n  height: 50px;\n  line-height: 50px;\n}\n\n.check p {\n  text-align: center;\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  white-space: nowrap;\n}\n\n@media screen and (max-width: 599px) {\n  .check p {\n    font-size: 16px;\n  }\n}\n\n@media screen and (min-width: 600px) and (max-width: 959px) {\n  .check p {\n    font-size: 16px;\n  }\n}\n\n@media screen and (min-width: 960px) and (max-width: 1279px) {\n  .check p {\n    font-size: 20px;\n  }\n}\n\n@media screen and (min-width: 1280px) and (max-width: 1919px) {\n  .check p {\n    font-size: 20px;\n  }\n}\n\n@media screen and (min-width: 1920px) {\n  .check p {\n    font-size: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL2Zvcm0tb3ZlcmxheS9DOlxcVXNlcnNcXExpbmEgUmFnYXVza2FpdGVcXERlc2t0b3BcXHByb2plY3RzXFxwb3J0Zm9saW9cXGFwcC9zcmNcXGFwcFxcY29yZVxcY29tcG9uZW50c1xcZm9ybS1vdmVybGF5XFxmb3JtLW92ZXJsYXkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9mb3JtLW92ZXJsYXkvZm9ybS1vdmVybGF5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvZm9ybS1vdmVybGF5L0M6XFxVc2Vyc1xcTGluYSBSYWdhdXNrYWl0ZVxcRGVza3RvcFxccHJvamVjdHNcXHBvcnRmb2xpb1xcYXBwL3NyY1xcYXBwXFxzdHlsZXNcXGFic3RyYWN0c1xcbWl4aW5zLnNjc3MiLCJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9mb3JtLW92ZXJsYXkvQzpcXFVzZXJzXFxMaW5hIFJhZ2F1c2thaXRlXFxEZXNrdG9wXFxwcm9qZWN0c1xccG9ydGZvbGlvXFxhcHAvc3JjXFxhcHBcXHN0eWxlc1xcYWJzdHJhY3RzXFxicmVha3BvaW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ0RGOztBRElBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhDQUFBO0VBQ0EsaUJBQUE7QUNERjs7QURJQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNERjs7QURHRTtFQUNFLG1DQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBQ0RKOztBREdJO0VBQ0UsWUFBQTtFQUNBLDJDQUFBO0VFcUJGLGVGcEJvQjtFRXFCcEIsV0ZyQm9CO0VFc0JwQixZRnRCb0I7RUV1QnBCLGlCRnZCb0I7QUNFeEI7O0FERUU7RUFFRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxtQkFBQTtBQ0RKOztBRU1FO0VIWEE7SUdZRSxlQUFBO0VGSEY7QUFDRjs7QUVLRTtFSGZBO0lHZ0JFLGVBQUE7RUZGRjtBQUNGOztBRUlFO0VIbkJBO0lHb0JFLGVBQUE7RUZERjtBQUNGOztBRUdFO0VIdkJBO0lHd0JFLGVBQUE7RUZBRjtBQUNGOztBRUVFO0VIM0JBO0lHNEJFLGVBQUE7RUZDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29yZS9jb21wb25lbnRzL2Zvcm0tb3ZlcmxheS9mb3JtLW92ZXJsYXkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdhYnN0cmFjdHMnO1xyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi5jb3Zlci11cCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiBjb2xvcignYmFja2dyb3VuZC1zZWNvbmRhcnknKTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuLmNoZWNrIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHdpZHRoOiA3MHB4O1xyXG4gIGhlaWdodDogNzBweDtcclxuXHJcbiAgLmNoZWNrLWNpcmNsZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBjb2xvcignc3VjY2VzcycpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIG1hdC1pY29uIHtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICBjb2xvcjogY29sb3IoJ2ZvcmVncm91bmQtc2Vjb25kYXJ5Jyk7XHJcbiAgICAgIEBpbmNsdWRlIG1hdC1pY29uKDUwcHgsIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgQGluY2x1ZGUgYnJlYWstZm9udCgyMHB4LCAxNnB4LCAyMHB4KTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5jb3Zlci11cCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnksIHdoaXRlKTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5jaGVjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHdpZHRoOiA3MHB4O1xuICBoZWlnaHQ6IDcwcHg7XG59XG4uY2hlY2sgLmNoZWNrLWNpcmNsZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXN1Y2Nlc3MsICM5OGMzNzkpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uY2hlY2sgLmNoZWNrLWNpcmNsZSBtYXQtaWNvbiB7XG4gIG1hcmdpbjogYXV0bztcbiAgY29sb3I6IHZhcigtLWZvcmVncm91bmQtc2Vjb25kYXJ5LCAjMmUzMjM1KTtcbiAgZm9udC1zaXplOiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbn1cbi5jaGVjayBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgLmNoZWNrIHAge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xuICAuY2hlY2sgcCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCkgYW5kIChtYXgtd2lkdGg6IDEyNzlweCkge1xuICAuY2hlY2sgcCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTE5cHgpIHtcbiAgLmNoZWNrIHAge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTkyMHB4KSB7XG4gIC5jaGVjayBwIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbn0iLCJAaW1wb3J0ICcuL2Z1bmN0aW9ucyc7XHJcblxyXG5AbWl4aW4gYWJzb2x1dGUtY2VudHJlICgkaG9yaXpvbnRhbDogdHJ1ZSwgJHZlcnRpY2FsOiB0cnVlKSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICBAaWYgJHZlcnRpY2FsIGFuZCAkaG9yaXpvbnRhbCB7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIH0gQGVsc2UgaWYgJGhvcml6b250YWwge1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gIH0gQGVsc2UgaWYgJHZlcnRpY2FsIHtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGFic29sdXRlLWZpbGwgKCR3aWR0aDogbnVsbCwgJGhlaWdodDogbnVsbCwgJHR5cGU6ICdzaXplJykge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuXHJcblxyXG4gIEBpZiAkd2lkdGggIT0gbnVsbCB7XHJcbiAgICBAaWYgJHR5cGUgPT0gJ3NpemUnIHtcclxuICAgICAgd2lkdGg6ICR3aWR0aDtcclxuICAgIH0gQGVsc2UgaWYgJHR5cGUgPT0gJ2VkZ2UnIHtcclxuICAgICAgbGVmdDogJHdpZHRoO1xyXG4gICAgICByaWdodDogJHdpZHRoO1xyXG4gICAgfVxyXG4gIH0gQGVsc2Uge1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG5cclxuICBAaWYgJGhlaWdodCAhPSBudWxsIHtcclxuICAgIEBpZiAkdHlwZSA9PSAnc2l6ZScge1xyXG4gICAgICBoZWlnaHQ6ICRoZWlnaHQ7XHJcbiAgICB9IEBlbHNlIGlmICR0eXBlID09ICdlZGdlJyB7XHJcbiAgICAgIHRvcDogJGhlaWdodDtcclxuICAgICAgYm90dG9tOiAkaGVpZ2h0O1xyXG4gICAgfVxyXG4gIH0gQGVsc2Uge1xyXG4gICAgYm90dG9tOiAwO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIG1hdC1pY29uICgkc2l6ZSwgJGNsYXNzOiB0cnVlKSB7XHJcbiAgQGlmICgkY2xhc3MpIHtcclxuICAgIG1hdC1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAkc2l6ZTtcclxuICAgICAgd2lkdGg6ICRzaXplO1xyXG4gICAgICBoZWlnaHQ6ICRzaXplO1xyXG4gICAgICBsaW5lLWhlaWdodDogJHNpemU7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBmb250LXNpemU6ICRzaXplO1xyXG4gICAgd2lkdGg6ICRzaXplO1xyXG4gICAgaGVpZ2h0OiAkc2l6ZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAkc2l6ZTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4ICgkZGlyZWN0aW9uOiByb3csICRqdXN0aWZ5OiBjZW50ZXIsICRhbGlnbjogY2VudGVyKSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xyXG4gIGFsaWduLWl0ZW1zOiAkYWxpZ247XHJcbiAgZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb247XHJcbn1cclxuXHJcbi8vIEZsZXggbGF5b3V0XHJcbkBtaXhpbiBmeEZsZXggKCRkaXJlY3Rpb24sICRnYXA6IG51bGwsICRqdXN0aWZ5OiBjZW50ZXIsICRhbGlnbjogY2VudGVyKSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcclxuICBhbGlnbi1pdGVtczogJGFsaWduO1xyXG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XHJcblxyXG4gIEBpZiAoJGdhcCkge1xyXG4gICAgPiAqOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgICBAaWYgKCRkaXJlY3Rpb24gPT0gcm93KSB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAkZ2FwO1xyXG4gICAgICB9IEBlbHNlIGlmICgkZGlyZWN0aW9uID09IGNvbHVtbikge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206ICRnYXA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBpdGVtLXNwYWNlICgkZGlyZWN0aW9uOiByb3csICRkaXN0YW5jZTogMjBweCkge1xyXG4gIEBpZiAkZGlyZWN0aW9uID09IHJvdyB7XHJcbiAgICA+ICo6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogJGRpc3RhbmNlO1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJGRpcmVjdGlvbiA9PSBjb2x1bW4ge1xyXG4gICAgPiAqOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAkZGlzdGFuY2U7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIlxyXG4vLyAtLS0+IEJyZWFrcG9pbnRzXHJcbiRicmVha3BvaW50czogKFxyXG4gICd4cy1taW4nOiAwcHgsXHJcbiAgJ3hzLW1heCc6IDU5OXB4LFxyXG4gICdzLW1pbic6IDYwMHB4LFxyXG4gICdzLW1heCc6IDk1OXB4LFxyXG4gICdtLW1pbic6IDk2MHB4LFxyXG4gICdtLW1heCc6IDEyNzlweCxcclxuICAnbC1taW4nOiAxMjgwcHgsXHJcbiAgJ2wtbWF4JzogMTkxOXB4LFxyXG4gICd4bC1taW4nOiAxOTIwcHgsXHJcbiAgJ3hsLW1heCc6IDUwMDBweFxyXG4pICFkZWZhdWx0O1xyXG5cclxuLy8geHNcdCdzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSdcclxuLy8gc21cdCdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogOTU5cHgpJ1xyXG4vLyBtZFx0J3NjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpJ1xyXG4vLyBsZ1x0J3NjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSBhbmQgKG1heC13aWR0aDogMTkxOXB4KSdcclxuLy8geGxcdCdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE5MjBweCkgYW5kIChtYXgtd2lkdGg6IDUwMDBweCknXHJcblxyXG4vLyBsdC1zbVx0J3NjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpJ1xyXG4vLyBsdC1tZFx0J3NjcmVlbiBhbmQgKG1heC13aWR0aDogOTU5cHgpJ1xyXG4vLyBsdC1sZ1x0J3NjcmVlbiBhbmQgKG1heC13aWR0aDogMTI3OXB4KSdcclxuLy8gbHQteGxcdCdzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE5MTlweCknXHJcblxyXG4vLyBndC14c1x0J3NjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpJ1xyXG4vLyBndC1zbVx0J3NjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpJ1xyXG4vLyBndC1tZFx0J3NjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSdcclxuLy8gZ3QtbGdcdCdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE5MjBweCknXHJcblxyXG5AbWl4aW4gYnJlYWsoJGx0R3QsICRicmVha3BvaW50KSB7XHJcbiAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJyN7JGJyZWFrcG9pbnR9LW1pbicpIHtcclxuICAgIEBpZiAoJGx0R3QgPT0gJ2x0Jykge1xyXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiBjYWxjKCN7bWFwLWdldCgkYnJlYWtwb2ludHMsICcjeyRicmVha3BvaW50fS1taW4nKX0gLSAxcHgpKSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICAgIH1cclxuICAgIH0gQGVsc2UgaWYgKCRsdEd0ID09ICdndCcpIHtcclxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogY2FsYygje21hcC1nZXQoJGJyZWFrcG9pbnRzLCAnI3skYnJlYWtwb2ludH0tbWF4Jyl9ICsgMXB4KSkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgICB9XHJcbiAgICB9IEBlbHNlIHtcclxuICAgICAgQGVycm9yICdVbnJlY29nbmlzZWQgcGFyYW1ldGVyICN7JGx0R3R9LiBWYWx1ZXMgXFwnZ3RcXCcgYW5kIFxcJ2x0XFwnIGFyZSBhY2NlcHRlZC4nO1xyXG4gICAgfVxyXG4gIH0gQGVsc2Uge1xyXG4gICAgQGVycm9yICdVbnJlY29nbmlzZWQgYnJlYWtwb2ludCAjeyRicmVha3BvaW50fS4gQXZhaWxhYmxlIGJyZWFrcG9pbnRzIGFyZTogI3ttYXAta2V5cygkYnJlYWtwb2ludHMpfS4nO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGJyZWFrLXByb3AgKCRwcm9wZXJ0eSwgJGJyZWFrLW1hcCkge1xyXG4gIC8vIHhzXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcclxuICAgICN7JHByb3BlcnR5fTogbWFwLWdldCgkYnJlYWstbWFwLCAneHMnKTtcclxuICB9XHJcbiAgLy8gc1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogOTU5cHgpIHtcclxuICAgICN7JHByb3BlcnR5fTogbWFwLWdldCgkYnJlYWstbWFwLCAncycpO1xyXG4gIH1cclxuICAvLyBtXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIHtcclxuICAgICN7JHByb3BlcnR5fTogbWFwLWdldCgkYnJlYWstbWFwLCAnbScpO1xyXG4gIH1cclxuICAvLyBsXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSBhbmQgKG1heC13aWR0aDogMTkxOXB4KSB7XHJcbiAgICAjeyRwcm9wZXJ0eX06IG1hcC1nZXQoJGJyZWFrLW1hcCwgJ2wnKTtcclxuICB9XHJcbiAgLy8geGxcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpIHtcclxuICAgICN7JHByb3BlcnR5fTogbWFwLWdldCgkYnJlYWstbWFwLCAneGwnKTtcclxuICB9XHJcbn1cclxuLy8gPC0tLSBCcmVha3BvaW50c1xyXG5cclxuQG1peGluIGJyZWFrLWZvbnQgKCRzaXplLCAkbWluOiBudWxsLCAkbWF4OiBudWxsKSB7XHJcbiAgQGluY2x1ZGUgYnJlYWstcHJvcCgnZm9udC1zaXplJywgKFxyXG4gICAgJ3hzJzogc25hcCgkc2l6ZSAqIDAuNiwgJG1pbiwgJG1heCksXHJcbiAgICAncyc6IHNuYXAoJHNpemUgKiAwLjgsICRtaW4sICRtYXgpLFxyXG4gICAgJ20nOiAkc2l6ZSxcclxuICAgICdsJzogc25hcCgkc2l6ZSAqIDEuMSwgJG1pbiwgJG1heCksXHJcbiAgICAneGwnOiBzbmFwKCRzaXplICogMS4yLCAkbWluLCAkbWF4KVxyXG4gICkpXHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/core/components/form-overlay/form-overlay.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/core/components/form-overlay/form-overlay.component.ts ***!
    \************************************************************************/

  /*! exports provided: FormOverlayComponent */

  /***/
  function srcAppCoreComponentsFormOverlayFormOverlayComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormOverlayComponent", function () {
      return FormOverlayComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");

    var FormOverlayComponent = /*#__PURE__*/function () {
      function FormOverlayComponent() {
        _classCallCheck(this, FormOverlayComponent);

        this.complete = false;
        this.completeText = 'Done';
      } // SOMEDAY: Add erred state with 'retry' option


      _createClass(FormOverlayComponent, [{
        key: "state",
        get: function get() {
          return !this.complete ? 'hidden' : this.error ? 'errored' : 'complete';
        }
      }]);

      return FormOverlayComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], FormOverlayComponent.prototype, "complete", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], FormOverlayComponent.prototype, "error", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], FormOverlayComponent.prototype, "completeText", void 0);
    FormOverlayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-form-overlay',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./form-overlay.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/form-overlay/form-overlay.component.html")).default,
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fadeOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: 0
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('errored', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: 1,
        pointerEvents: 'initial'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('complete', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: 1,
        pointerEvents: 'initial'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hidden => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])('@*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animateChild"])(), {
        optional: true
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('100ms')])), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])('@*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animateChild"])(), {
        optional: true
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('100ms')]))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('scaleUp', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'scale(0.1)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('errored', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'scale(1)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('complete', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'scale(1)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hidden => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms 150ms ease-in-out')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => hidden', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms ease-in-out')])])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./form-overlay.component.scss */
      "./src/app/core/components/form-overlay/form-overlay.component.scss")).default]
    })], FormOverlayComponent);
    /***/
  },

  /***/
  "./src/app/core/components/image-shatter/image-shatter.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/core/components/image-shatter/image-shatter.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreComponentsImageShatterImageShatterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: block;\n}\n\n:host ::ng-deep canvas {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL2ltYWdlLXNoYXR0ZXIvQzpcXFVzZXJzXFxMaW5hIFJhZ2F1c2thaXRlXFxEZXNrdG9wXFxwcm9qZWN0c1xccG9ydGZvbGlvXFxhcHAvc3JjXFxhcHBcXGNvcmVcXGNvbXBvbmVudHNcXGltYWdlLXNoYXR0ZXJcXGltYWdlLXNoYXR0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9pbWFnZS1zaGF0dGVyL2ltYWdlLXNoYXR0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQUFBO0FDREY7O0FES0U7RUFDRSxhQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvaW1hZ2Utc2hhdHRlci9pbWFnZS1zaGF0dGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnYWJzdHJhY3RzJztcclxuXHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIHtcclxuICBjYW52YXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbjpob3N0IDo6bmctZGVlcCBjYW52YXMge1xuICBvdXRsaW5lOiBub25lO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/core/components/image-shatter/image-shatter.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/core/components/image-shatter/image-shatter.component.ts ***!
    \**************************************************************************/

  /*! exports provided: ImageShatterComponent */

  /***/
  function srcAppCoreComponentsImageShatterImageShatterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageShatterComponent", function () {
      return ImageShatterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! three */
    "./node_modules/three/build/three.module.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _scene__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./scene */
    "./src/app/core/components/image-shatter/scene.ts");
    /* harmony import */


    var _image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./image */
    "./src/app/core/components/image-shatter/image.ts");

    var ImageShatterComponent = /*#__PURE__*/function () {
      function ImageShatterComponent(_el, _http) {
        _classCallCheck(this, ImageShatterComponent);

        this._el = _el;
        this._http = _http;
        this._subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._pointer = false;
        this._rendered = false;
      }

      _createClass(ImageShatterComponent, [{
        key: "onClick",
        value: function onClick() {
          if (this.pointer) this.clicked.next();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._subscriptions.unsubscribe();
        }
      }, {
        key: "render",
        value: function render() {
          var _this4 = this;

          if (this._rendered) return;
          this._rendered = true;
          var element = this._el.nativeElement;

          this._subscriptions.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(window, 'keydown').subscribe(function (e) {
            if (e.key === 'Escape') {
              _this4.scene.updateLight();
            } else if (e.key === 'r') {
              _this4.image.resetRotation();
            }
          }));

          this.scene = new _scene__WEBPACK_IMPORTED_MODULE_5__["Scene"](element);

          this._subscriptions.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(window, 'resize').subscribe(function () {
            return _this4.scene.onResize();
          }));

          this.image = new _image__WEBPACK_IMPORTED_MODULE_6__["Image"](this._http, this.src, 540, 600, this.scene);
          var sub = this.image.rendered.subscribe(function (rendered) {
            if (!rendered) return;
            sub.unsubscribe();
            var lastPosition = {
              x: 0,
              y: 0
            };

            _this4._subscriptions.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(window, 'mousemove').subscribe(function (e) {
              var ev = e;
              lastPosition.x = ev.clientX;
              lastPosition.y = ev.clientY;
            }));

            var mouseOver = false;

            var onLeave = function onLeave() {
              _this4.image.changeToState('solid');

              _this4.image.resetRotation();

              _this4.pointer = false;
            };

            var onMove = function onMove(mouseX, mouseY) {
              mouseOver = true;
              var rect = element.getBoundingClientRect();

              _this4.scene.updateMouse(mouseX - rect.left, mouseY - rect.top);

              if (!_this4.image.matrix) return;

              _this4.scene.ray.copy(_this4.scene.raycaster.ray).applyMatrix4(_this4.image.matrix);

              if (!_this4.scene.ray.intersectBox(_this4.image.bbox, new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"]())) {
                onLeave();
                return;
              }

              _this4.pointer = true;

              _this4.image.rotateToMouse();
            };

            _this4._subscriptions.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(element, 'mouseleave').subscribe(function (e) {
              onLeave();
              mouseOver = false;
            }));

            _this4._subscriptions.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(window, 'scroll').subscribe(function (e) {
              var rect = element.getBoundingClientRect();
              var inside = lastPosition.x < rect.right && lastPosition.x > rect.left && lastPosition.y < rect.bottom && lastPosition.y > rect.top;

              if (!inside && mouseOver) {
                onLeave();
                mouseOver = false;
              } else if (inside) onMove(lastPosition.x, lastPosition.y);
            }));

            _this4._subscriptions.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(element, 'mousemove').subscribe(function (e) {
              var event = e;
              onMove(event.clientX, event.clientY);
            }));
          });
        }
      }, {
        key: "_cursor",
        get: function get() {
          return this.pointer ? 'pointer' : 'default';
        }
      }, {
        key: "pointer",
        get: function get() {
          return this._pointer;
        },
        set: function set(val) {
          var _this5 = this;

          if (val === this._pointer) return;
          this._pointer = val;
          clearTimeout(this._cameraStopTimeout);
          if (val) this.scene.toggleCameraUpdates.next(true);else this._cameraStopTimeout = setTimeout(function () {
            return _this5.scene.toggleCameraUpdates.next(false);
          }, 1000);
        }
      }]);

      return ImageShatterComponent;
    }();

    ImageShatterComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.cursor'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ImageShatterComponent.prototype, "_cursor", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], ImageShatterComponent.prototype, "onClick", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ImageShatterComponent.prototype, "src", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ImageShatterComponent.prototype, "clicked", void 0);
    ImageShatterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-image-shatter',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./image-shatter.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/image-shatter/image-shatter.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./image-shatter.component.scss */
      "./src/app/core/components/image-shatter/image-shatter.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])], ImageShatterComponent);
    /***/
  },

  /***/
  "./src/app/core/components/image-shatter/image.ts":
  /*!********************************************************!*\
    !*** ./src/app/core/components/image-shatter/image.ts ***!
    \********************************************************/

  /*! exports provided: Image */

  /***/
  function srcAppCoreComponentsImageShatterImageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Image", function () {
      return Image;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! three */
    "./node_modules/three/build/three.module.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _triangulate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./triangulate */
    "./src/app/core/components/image-shatter/triangulate.ts");
    /* harmony import */


    var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./utils */
    "./src/app/core/components/image-shatter/utils.ts");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);

    var Image = /*#__PURE__*/function () {
      function Image(_http, _src, _width, _height, _scene) {
        var _this6 = this;

        _classCallCheck(this, Image);

        this._http = _http;
        this._src = _src;
        this._width = _width;
        this._height = _height;
        this._scene = _scene;
        this._rendered = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this._targetState = 'solid';
        this._currentState = 'solid';
        this._stateConfig = {
          solid: {
            objects: []
          },
          shattered: {
            objects: []
          }
        };
        this.debugShardArray = [];
        this._rotationConfig = {
          original: {
            x: 0,
            y: 0
          },
          target: {
            x: 0,
            y: 0
          }
        };
        this._firstRender = true;
        this.InitRender().then(function () {
          return _this6._rendered.next(true);
        });
      }

      _createClass(Image, [{
        key: "InitRender",
        value: function InitRender() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this7 = this;

            var offset, bounds, loader, lights, createMesh, calculateUv, arr, triangles, geometries, zs, zOptions, fontLoader, text, buffer, size, offsetX, offsetY;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this._http.get("assets/three/shaders/vertex-shader.glsl", {
                      responseType: 'text'
                    }).toPromise();

                  case 2:
                    this._vertexShader = _context2.sent;
                    _context2.next = 5;
                    return this._http.get("assets/three/shaders/fragment-shader.glsl", {
                      responseType: 'text'
                    }).toPromise();

                  case 5:
                    this._fragmentShader = _context2.sent;
                    offset = {
                      x: this._width / 2,
                      y: this._height / 2
                    };
                    bounds = {
                      x: {
                        min: -offset.x,
                        max: offset.x
                      },
                      y: {
                        min: -offset.y,
                        max: offset.y
                      }
                    };
                    loader = new three__WEBPACK_IMPORTED_MODULE_1__["TextureLoader"]();
                    lights = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["cloneDeep"])(three__WEBPACK_IMPORTED_MODULE_1__["UniformsLib"].lights);

                    createMesh = function createMesh(geom) {
                      var material = new three__WEBPACK_IMPORTED_MODULE_1__["ShaderMaterial"]({
                        uniforms: Object.assign({}, lights, {
                          texture: {
                            type: 't',
                            value: loader.load(_this7._src)
                          },
                          bWidth: {
                            type: 'float',
                            value: 0.017
                          },
                          bColor: {
                            type: 'vec3',
                            value: new three__WEBPACK_IMPORTED_MODULE_1__["Vector3"](78, 83, 87)
                          }
                        }),
                        vertexShader: shaderParse(_this7._vertexShader),
                        fragmentShader: shaderParse(_this7._fragmentShader),
                        side: three__WEBPACK_IMPORTED_MODULE_1__["DoubleSide"],
                        transparent: true,
                        lights: true
                      });
                      var mesh = new three__WEBPACK_IMPORTED_MODULE_1__["Mesh"](geom, material);
                      mesh.position.set(0, 0, 20);
                      mesh.castShadow = true;
                      mesh.receiveShadow = true;
                      return mesh;
                    };

                    this._stateConfig.solid.objects = [{
                      mesh: createMesh(new three__WEBPACK_IMPORTED_MODULE_1__["PlaneGeometry"](this._width, this._height))
                    }];

                    calculateUv = function calculateUv(x, y) {
                      var clip = function clip(n, max) {
                        return Math.max(0, Math.min(n, max));
                      };

                      return [+(clip(Object(_utils__WEBPACK_IMPORTED_MODULE_4__["distance"])(bounds.x.min, x), _this7._width) / _this7._width).toFixed(2), +(clip(Object(_utils__WEBPACK_IMPORTED_MODULE_4__["distance"])(bounds.y.min, y), _this7._height) / _this7._height).toFixed(2)];
                    };

                    arr = Object(_triangulate__WEBPACK_IMPORTED_MODULE_3__["getTriangleVertices"])(this._width, this._height);
                    triangles = arr.map(function (vertices) {
                      return vertices.map(function (_ref) {
                        var _ref2 = _slicedToArray(_ref, 2),
                            x = _ref2[0],
                            y = _ref2[1];

                        return [+(x - offset.x).toFixed(2), +(y - offset.y).toFixed(2)];
                      });
                    });
                    geometries = triangles.map(function (x) {
                      return new Float32Array([].concat(_toConsumableArray(x[0]), [0], _toConsumableArray(x[1]), [0], _toConsumableArray(x[2]), [0]));
                    });
                    zs = {}; // Should have at least 7 options

                    zOptions = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getRangeOptions"])(-50, 60, 10).map(function (z) {
                      return "".concat(z);
                    });
                    this._stateConfig.shattered.objects = geometries.map(function (vertices, i) {
                      var geom = new three__WEBPACK_IMPORTED_MODULE_1__["BufferGeometry"]();
                      var uvs = [];
                      if (vertices.length % 3 !== 0) throw new Error('Vertices length invalid.');
                      var xs = [];
                      var ys = [];

                      for (var _i2 = 0; _i2 < vertices.length; _i2 += 3) {
                        var _vertices$slice = vertices.slice(_i2, _i2 + 2),
                            _vertices$slice2 = _slicedToArray(_vertices$slice, 2),
                            x = _vertices$slice2[0],
                            y = _vertices$slice2[1];

                        xs.push(x);
                        ys.push(y);
                        uvs.push.apply(uvs, _toConsumableArray(calculateUv(x, y)));
                      }

                      var centerX = xs.reduce(function (sum, x) {
                        return sum + x;
                      }, 0) / xs.length;
                      var centerY = ys.reduce(function (sum, x) {
                        return sum + x;
                      }, 0) / ys.length;
                      var newCentroid = Object(_triangulate__WEBPACK_IMPORTED_MODULE_3__["calculateNewCentroid"])(centerX, centerY, 1.45, 1.50);
                      var diff = {
                        x: newCentroid.x - centerX,
                        y: newCentroid.y - centerY
                      };
                      geom.setAttribute('position', new three__WEBPACK_IMPORTED_MODULE_1__["BufferAttribute"](vertices, 3));
                      geom.setAttribute('uv', new three__WEBPACK_IMPORTED_MODULE_1__["BufferAttribute"](new Float32Array(uvs), 2));
                      geom.computeVertexNormals();
                      var mesh = createMesh(geom);
                      mesh.geometry.computeBoundingBox();
                      var box3 = new three__WEBPACK_IMPORTED_MODULE_1__["Box3"]().setFromObject(mesh);
                      var pad = 10;
                      var bbox = new three__WEBPACK_IMPORTED_MODULE_1__["Box3"]().setFromPoints([new three__WEBPACK_IMPORTED_MODULE_1__["Vector3"](box3.min.x + diff.x - pad, box3.min.y + diff.y - pad, box3.min.z - pad), new three__WEBPACK_IMPORTED_MODULE_1__["Vector3"](box3.min.x + diff.x - pad, box3.min.y + diff.y - pad, box3.max.z + pad), new three__WEBPACK_IMPORTED_MODULE_1__["Vector3"](box3.max.x + diff.x + pad, box3.max.y + diff.y + pad, box3.min.z - pad), new three__WEBPACK_IMPORTED_MODULE_1__["Vector3"](box3.max.x + diff.x + pad, box3.max.y + diff.y + pad, box3.max.z + pad)]);
                      var shatteredPosition = {
                        x: mesh.position.x + diff.x,
                        y: mesh.position.y + diff.y
                      };
                      var usedZs = Object.keys(zs).filter(function (z) {
                        return !!zs[z].find(function (box) {
                          return box.intersectsBox(bbox);
                        });
                      });
                      var zFrom = usedZs.length ? _toConsumableArray(zOptions).filter(function (z) {
                        return !usedZs.includes(z);
                      }) : zOptions;
                      var z = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["randomFrom"])(zFrom);

                      if (isNaN(+z)) {
                        console.warn('Fragment overlap warning. 0 unoccupied nearby z-indexes found.');
                        z = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["randomFrom"])(zOptions);
                      }

                      _this7.debugShardArray.push({
                        o: {
                          x: centerX,
                          y: centerY
                        },
                        n: {
                          x: newCentroid.x,
                          y: newCentroid.y
                        },
                        i: i,
                        z: +z,
                        mesh: mesh
                      });

                      if (!zs["".concat(z)]) zs["".concat(z)] = [];
                      zs["".concat(z)].push(bbox);
                      var r = 10;
                      var object = {
                        mesh: mesh,
                        solid: {
                          x: mesh.position.x,
                          y: mesh.position.y,
                          z: mesh.position.z,
                          rx: 0,
                          ry: 0,
                          rz: 0
                        },
                        shattered: Object.assign({}, shatteredPosition, {
                          z: mesh.position.z + +z,
                          rx: Object(_utils__WEBPACK_IMPORTED_MODULE_4__["degreesToRadians"])(Object(_utils__WEBPACK_IMPORTED_MODULE_4__["randomRange"])(-r, r)),
                          ry: Object(_utils__WEBPACK_IMPORTED_MODULE_4__["degreesToRadians"])(Object(_utils__WEBPACK_IMPORTED_MODULE_4__["randomRange"])(-r, r)),
                          rz: Object(_utils__WEBPACK_IMPORTED_MODULE_4__["degreesToRadians"])(Object(_utils__WEBPACK_IMPORTED_MODULE_4__["randomRange"])(-r, r))
                        })
                      };
                      return object;
                    });
                    fontLoader = new three__WEBPACK_IMPORTED_MODULE_1__["FontLoader"]();
                    _context2.next = 22;
                    return new Promise(function (res) {
                      fontLoader.load('assets/three/fonts/roboto_bold.typeface.json', function (font) {
                        res(new three__WEBPACK_IMPORTED_MODULE_1__["TextGeometry"]('Read more', {
                          font: font,
                          size: 20,
                          height: 1,
                          curveSegments: 12
                        }));
                      });
                    });

                  case 22:
                    text = _context2.sent;
                    text.computeBoundingBox();
                    text.computeVertexNormals();
                    buffer = new three__WEBPACK_IMPORTED_MODULE_1__["BufferGeometry"]().fromGeometry(text);
                    this.text = new three__WEBPACK_IMPORTED_MODULE_1__["Mesh"](buffer, [new three__WEBPACK_IMPORTED_MODULE_1__["MeshPhongMaterial"]({
                      color: 'black',
                      flatShading: true
                    })]);
                    this.text.receiveShadow = true;
                    size = new three__WEBPACK_IMPORTED_MODULE_1__["Box3"]().setFromObject(this.text);
                    offsetX = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["round"])(size.max.x - size.min.x, 2) / 2, offsetY = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["round"])(size.max.y - size.min.y, 2) / 2;
                    this.text.position.set(-offsetX, -offsetY, -55);
                    this.RenderState(); // DEBUG: render index on every shard, to identify it in debugShardArray
                    // window['position'] = this.renderPositions.bind(this)

                  case 32:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "renderPositions",
        value: function renderPositions() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this8 = this;

            var fontLoader, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _loop, _iterator2, _step2;

            return regeneratorRuntime.wrap(function _callee3$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    fontLoader = new three__WEBPACK_IMPORTED_MODULE_1__["FontLoader"]();
                    _iteratorNormalCompletion2 = true;
                    _didIteratorError2 = false;
                    _iteratorError2 = undefined;
                    _context4.prev = 4;
                    _loop = /*#__PURE__*/regeneratorRuntime.mark(function _loop() {
                      var el, text, buffer, mesh, size, offsetX, offsetY;
                      return regeneratorRuntime.wrap(function _loop$(_context3) {
                        while (1) {
                          switch (_context3.prev = _context3.next) {
                            case 0:
                              el = _step2.value;
                              _context3.next = 3;
                              return new Promise(function (res) {
                                fontLoader.load('assets/three/fonts/roboto_bold.typeface.json', function (font) {
                                  res(new three__WEBPACK_IMPORTED_MODULE_1__["TextGeometry"]("".concat(el.i), {
                                    font: font,
                                    size: 7,
                                    height: 1,
                                    curveSegments: 12
                                  }));
                                });
                              });

                            case 3:
                              text = _context3.sent;
                              text.computeBoundingBox();
                              text.computeVertexNormals();
                              buffer = new three__WEBPACK_IMPORTED_MODULE_1__["BufferGeometry"]().fromGeometry(text);
                              mesh = new three__WEBPACK_IMPORTED_MODULE_1__["Mesh"](buffer, [new three__WEBPACK_IMPORTED_MODULE_1__["MeshPhongMaterial"]({
                                color: 'red',
                                flatShading: true
                              })]);
                              size = new three__WEBPACK_IMPORTED_MODULE_1__["Box3"]().setFromObject(mesh);
                              offsetX = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["round"])(size.max.x - size.min.x, 2) / 2, offsetY = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["round"])(size.max.y - size.min.y, 2) / 2;
                              mesh.position.set(el.n.x - offsetX, el.n.y - offsetY, el.z + 30);

                              _this8.activeGroup.add(mesh);

                            case 12:
                            case "end":
                              return _context3.stop();
                          }
                        }
                      }, _loop);
                    });
                    _iterator2 = this.debugShardArray[Symbol.iterator]();

                  case 7:
                    if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                      _context4.next = 12;
                      break;
                    }

                    return _context4.delegateYield(_loop(), "t0", 9);

                  case 9:
                    _iteratorNormalCompletion2 = true;
                    _context4.next = 7;
                    break;

                  case 12:
                    _context4.next = 18;
                    break;

                  case 14:
                    _context4.prev = 14;
                    _context4.t1 = _context4["catch"](4);
                    _didIteratorError2 = true;
                    _iteratorError2 = _context4.t1;

                  case 18:
                    _context4.prev = 18;
                    _context4.prev = 19;

                    if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                      _iterator2.return();
                    }

                  case 21:
                    _context4.prev = 21;

                    if (!_didIteratorError2) {
                      _context4.next = 24;
                      break;
                    }

                    throw _iteratorError2;

                  case 24:
                    return _context4.finish(21);

                  case 25:
                    return _context4.finish(18);

                  case 26:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee3, this, [[4, 14, 18, 26], [19,, 21, 25]]);
          }));
        }
      }, {
        key: "changeToState",
        value: function changeToState(state) {
          if (this._targetState === state) return;
          this._targetState = state;

          this._stateConfig.shattered.objects.forEach(function (o) {
            return o.steps = undefined;
          });

          this.AnimateToState(true);
        }
      }, {
        key: "RotateBy",
        value: function RotateBy(x, y) {
          this._rotationConfig.target.x = x;
          this._rotationConfig.target.y = y;
          if (this._nextRotateFrame) cancelAnimationFrame(this._nextRotateFrame);
          this._nextRotateFrame = undefined;
          this.AnimateRotation();
        }
      }, {
        key: "resetRotation",
        value: function resetRotation() {
          this.RotateBy(0, 0);
        }
      }, {
        key: "rotateToMouse",
        value: function rotateToMouse() {
          this.changeToState('shattered');
          var distanceX = Math.abs(this._scene.mouse.x) * 100 / (this._width / 2) * (this._scene.mouse.x < 0 ? -1 : 1) / 6;
          var distanceY = Math.abs(this._scene.mouse.y) * 100 / (this._height / 2) * (this._scene.mouse.y < 0 ? -1 : 1) / 8;
          this.RotateBy(Object(_utils__WEBPACK_IMPORTED_MODULE_4__["degreesToRadians"])(distanceY), Object(_utils__WEBPACK_IMPORTED_MODULE_4__["degreesToRadians"])(distanceX));
        }
      }, {
        key: "AnimateRotation",
        value: function AnimateRotation() {
          var _this9 = this;

          var cleanupFrame = function cleanupFrame() {
            if (_this9._nextRotateFrame) cancelAnimationFrame(_this9._nextRotateFrame);
            _this9._nextRotateFrame = undefined;
          };

          var animationDone = true;
          var config = this._rotationConfig.target;
          var axisSpeed = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["degreesToRadians"])(0.07);

          var rotateAxis = function rotateAxis(key) {
            var curr = _this9.activeGroup.rotation[key];
            var target = config[key];

            if (curr !== target) {
              var diff = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["distance"])(target, curr);

              if (diff <= axisSpeed) {
                return target;
              } else {
                var direction = target < curr ? -axisSpeed : axisSpeed;
                animationDone = false;
                return curr + direction;
              }
            }

            return curr;
          };

          var _ref3 = [rotateAxis('x'), rotateAxis('y'), 0],
              x = _ref3[0],
              y = _ref3[1],
              z = _ref3[2];
          this.activeGroup.rotation.set(x, y, z);

          if (!animationDone) {
            this._nextFrame = requestAnimationFrame(this.AnimateRotation.bind(this));
            return;
          }

          cleanupFrame();
        }
      }, {
        key: "RenderState",
        value: function RenderState() {
          var _this10 = this;

          this._scene.clearScene();

          this.activeGroup = new three__WEBPACK_IMPORTED_MODULE_1__["Group"]();

          this._scene.scene.add(this.activeGroup);

          this.activeGroup.add(this.text);

          if (this._firstRender) {
            this._firstRender = false; // On first render, also render fragments
            // because they take some time to initialise on load.
            // Set their z behind so it's not in view, but not too far
            // so that it is not visible/different during first animation

            setTimeout(function () {
              var config = _this10._stateConfig.shattered;
              var _iteratorNormalCompletion3 = true;
              var _didIteratorError3 = false;
              var _iteratorError3 = undefined;

              try {
                for (var _iterator3 = config.objects[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                  var obj = _step3.value;
                  obj.mesh.position.z = -10;

                  _this10.activeGroup.add(obj.mesh);
                }
              } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                    _iterator3.return();
                  }
                } finally {
                  if (_didIteratorError3) {
                    throw _iteratorError3;
                  }
                }
              }
            }, 100);
          }

          var config = this._stateConfig[this._currentState];
          var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = undefined;

          try {
            for (var _iterator4 = config.objects[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              var obj = _step4.value;
              this.activeGroup.add(obj.mesh);
            }
          } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                _iterator4.return();
              }
            } finally {
              if (_didIteratorError4) {
                throw _iteratorError4;
              }
            }
          }

          this.UpdateIntersectionSetup();
          setTimeout(function () {
            return _this10._scene.updateCamera();
          }, 100);
        }
      }, {
        key: "UpdateIntersectionSetup",
        value: function UpdateIntersectionSetup() {
          this.bbox = new three__WEBPACK_IMPORTED_MODULE_1__["Box3"]().setFromObject(this.activeGroup);
          if (!this.matrix) this.matrix = new three__WEBPACK_IMPORTED_MODULE_1__["Matrix4"]();
          this.matrix.getInverse(this.activeGroup.matrixWorld);
        }
      }, {
        key: "AnimateToState",
        value: function AnimateToState() {
          var _this11 = this;

          var stateChange = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          var cleanupFrame = function cleanupFrame() {
            if (_this11._nextFrame) cancelAnimationFrame(_this11._nextFrame);
            _this11._nextFrame = undefined;
          };

          var animationDone = true;
          var config = this._stateConfig.shattered;
          var _iteratorNormalCompletion5 = true;
          var _didIteratorError5 = false;
          var _iteratorError5 = undefined;

          try {
            var _loop2 = function _loop2() {
              var obj = _step5.value;

              if (!obj.steps) {
                var distance = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["pointDistance"])(obj[_this11._targetState], obj.mesh.position);
                var ANIMATION_TIME = 1000;
                obj.steps = {
                  axis: distance / ANIMATION_TIME * 60,
                  rotation: Object(_utils__WEBPACK_IMPORTED_MODULE_4__["degreesToRadians"])(1.7)
                };
              }

              var moveAxis = function moveAxis(key, set) {
                var curr = obj.mesh.position[key];
                var target = obj[_this11._targetState][key];

                if (curr !== target) {
                  var diff = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["distance"])(target, curr);

                  if (diff <= obj.steps.axis) {
                    set(target);
                  } else {
                    var direction = target < curr ? -obj.steps.axis : obj.steps.axis;
                    animationDone = false;
                    set(curr + direction);
                  }
                }
              };

              var rotateAxis = function rotateAxis(key) {
                var curr = obj.mesh.rotation[key];

                var target = obj[_this11._targetState]["r".concat(key)];

                if (curr !== target) {
                  var diff = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["distance"])(target, curr);

                  if (diff <= obj.steps.rotation) {
                    return target;
                  } else {
                    var direction = target < curr ? -obj.steps.rotation : obj.steps.rotation;
                    animationDone = false;
                    return curr + direction;
                  }
                }

                return curr;
              };

              moveAxis('z', function (val) {
                return obj.mesh.position.setZ(val);
              });
              moveAxis('x', function (val) {
                return obj.mesh.position.setX(val);
              });
              moveAxis('y', function (val) {
                return obj.mesh.position.setY(val);
              });
              var _ref4 = [rotateAxis('x'), rotateAxis('y'), rotateAxis('z')],
                  x = _ref4[0],
                  y = _ref4[1],
                  z = _ref4[2];
              obj.mesh.rotation.set(x, y, z);
            };

            for (var _iterator5 = config.objects[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
              _loop2();
            }
          } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                _iterator5.return();
              }
            } finally {
              if (_didIteratorError5) {
                throw _iteratorError5;
              }
            }
          }

          this.UpdateIntersectionSetup();

          if (!animationDone) {
            if (this._targetState === 'shattered' && this._currentState === 'solid') {
              this._currentState = this._targetState;
              this.RenderState();
            }

            this._nextFrame = requestAnimationFrame(this.AnimateToState.bind(this));
            return;
          }

          if (this._targetState === 'shattered' && this._currentState === 'solid') {
            if (stateChange) {
              this._currentState = this._targetState;
              this.RenderState();
              return;
            }

            this.AnimateToState();
            return;
          }

          if (this._targetState === 'solid' && this._currentState === 'shattered') {
            this._currentState = this._targetState;
            this.RenderState();
          }

          cleanupFrame();
        }
      }, {
        key: "rendered",
        get: function get() {
          return this._rendered.asObservable();
        }
      }]);

      return Image;
    }();

    function shaderParse(glsl) {
      var replaceThreeChunkFn = function replaceThreeChunkFn(_, b) {
        return three__WEBPACK_IMPORTED_MODULE_1__["ShaderChunk"][b] + '\n';
      };

      return glsl.replace(/\/\/\s?chunk\(\s?(\w+)\s?\);/g, replaceThreeChunkFn);
    }
    /***/

  },

  /***/
  "./src/app/core/components/image-shatter/scene.ts":
  /*!********************************************************!*\
    !*** ./src/app/core/components/image-shatter/scene.ts ***!
    \********************************************************/

  /*! exports provided: Scene */

  /***/
  function srcAppCoreComponentsImageShatterSceneTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Scene", function () {
      return Scene;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! three */
    "./node_modules/three/build/three.module.js");
    /* harmony import */


    var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! three/examples/jsm/controls/OrbitControls */
    "./node_modules/three/examples/jsm/controls/OrbitControls.js");
    /* harmony import */


    var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./utils */
    "./src/app/core/components/image-shatter/utils.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var Scene = /*#__PURE__*/function () {
      function Scene(element) {
        var _this12 = this;

        var debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        _classCallCheck(this, Scene);

        this.element = element;
        this.debug = debug;
        this.lights = [];
        this.helpers = []; // Mouse position relative to element

        this.mouse = {
          _x: 0,
          _y: 0,
          x: 0,
          y: 0,
          relativeX: 0,
          relativeY: 0,
          updatePosition: function updatePosition(x, y) {
            this.x = x - this._x;
            this.y = y - this._y;
            this.relativeX = x;
            this.relativeY = y;
          },
          setOrigin: function setOrigin(el) {
            this._x = Math.floor(el.clientWidth / 2);
            this._y = Math.floor(el.clientHeight / 2);
          }
        };
        this.toggleCameraUpdates = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.UpdateMouse();
        this.camera = new three__WEBPACK_IMPORTED_MODULE_1__["PerspectiveCamera"](50, this.width / this.height, 0.01, 10000);
        this.camera.position.z = 1200;
        this.scene = new three__WEBPACK_IMPORTED_MODULE_1__["Scene"]();
        this.renderer = new three__WEBPACK_IMPORTED_MODULE_1__["WebGLRenderer"]({
          antialias: true
        });
        this.renderer.setSize(this.width, this.height);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = three__WEBPACK_IMPORTED_MODULE_1__["PCFSoftShadowMap"];
        this.element.appendChild(this.renderer.domElement);
        this.SetupLight();
        this.SetupBackground();
        if (this.debug) this.SetupDebugTools();
        this.raycaster = new three__WEBPACK_IMPORTED_MODULE_1__["Raycaster"]();
        this.ray = new three__WEBPACK_IMPORTED_MODULE_1__["Ray"]();
        this.rendererMouse = new three__WEBPACK_IMPORTED_MODULE_1__["Vector2"]();
        this.updateCamera();
        this.toggleCameraUpdates.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["auditTime"])(100)).subscribe(function (animate) {
          _this12.stopAnimation();

          if (animate) _this12.animate();
        });
      }

      _createClass(Scene, [{
        key: "animate",
        value: function animate() {
          this._nextFrame = requestAnimationFrame(this.animate.bind(this));
          if (this.controls) this.controls.update();
          this.updateCamera();
        }
      }, {
        key: "stopAnimation",
        value: function stopAnimation() {
          if (this._nextFrame) cancelAnimationFrame(this._nextFrame);
          this._nextFrame = undefined;
        }
      }, {
        key: "onResize",
        value: function onResize() {
          this.UpdateMouse();
          this.updateCamera();
        }
      }, {
        key: "clearScene",
        value: function clearScene() {
          var _iteratorNormalCompletion6 = true;
          var _didIteratorError6 = false;
          var _iteratorError6 = undefined;

          try {
            for (var _iterator6 = this.objects[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
              var child = _step6.value;
              this.scene.remove(child);
            }
          } catch (err) {
            _didIteratorError6 = true;
            _iteratorError6 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
                _iterator6.return();
              }
            } finally {
              if (_didIteratorError6) {
                throw _iteratorError6;
              }
            }
          }
        }
      }, {
        key: "updateMouse",
        value: function updateMouse(x, y) {
          this.mouse.updatePosition(x, y);

          if (this.raycaster) {
            this.rendererMouse.x = this.mouse.relativeX / this.width * 2 - 1;
            this.rendererMouse.y = -(this.mouse.relativeY / this.height) * 2 + 1;
            this.raycaster.setFromCamera(this.rendererMouse, this.camera);
          }
        }
      }, {
        key: "UpdateMouse",
        value: function UpdateMouse() {
          this.mouse.setOrigin(this.element);
        }
      }, {
        key: "SetupBackground",
        value: function SetupBackground() {
          this._background = new three__WEBPACK_IMPORTED_MODULE_1__["Mesh"](new three__WEBPACK_IMPORTED_MODULE_1__["PlaneGeometry"](this.width * 5, this.height * 5), new three__WEBPACK_IMPORTED_MODULE_1__["MeshPhongMaterial"]({
            color: 'white',
            side: three__WEBPACK_IMPORTED_MODULE_1__["DoubleSide"]
          }));

          this._background.position.set(0, 0, -300);

          this._background.receiveShadow = true;
          this.scene.add(this._background);
        }
      }, {
        key: "SetupLight",
        value: function SetupLight() {
          var ambient = new three__WEBPACK_IMPORTED_MODULE_1__["AmbientLight"]('white', 0.6);
          this.scene.add(ambient);

          for (var _i3 = 0, _arr2 = [[0, 10, 1100], [0, -15, 1400]]; _i3 < _arr2.length; _i3++) {
            var _arr2$_i = _slicedToArray(_arr2[_i3], 3),
                x = _arr2$_i[0],
                y = _arr2$_i[1],
                z = _arr2$_i[2];

            var light = new three__WEBPACK_IMPORTED_MODULE_1__["SpotLight"]('white', 0.3, undefined);
            light.angle = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["degreesToRadians"])(55);
            light.shadow.mapSize.width = 512 * 4;
            light.shadow.mapSize.height = 512 * 4;
            light.position.set(x, y, z);
            light.castShadow = true;
            light.shadow.camera.near = 100;
            light.shadow.camera.far = 2100; // Important for objects to not drop shadow on themselves

            light.shadow.bias = -0.0001;
            light.penumbra = 0.5;
            this.scene.add(light);
            this.lights.push(light);
          }
        }
      }, {
        key: "SetupDebugTools",
        value: function SetupDebugTools() {
          var _iteratorNormalCompletion7 = true;
          var _didIteratorError7 = false;
          var _iteratorError7 = undefined;

          try {
            for (var _iterator7 = this.lights[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
              var light = _step7.value;
              var lightHelper = new three__WEBPACK_IMPORTED_MODULE_1__["SpotLightHelper"](light);
              this.scene.add(lightHelper);
              this.helpers.push(lightHelper);
              var shadowCameraHelper = new three__WEBPACK_IMPORTED_MODULE_1__["CameraHelper"](light.shadow.camera);
              this.scene.add(shadowCameraHelper);
              this.helpers.push(shadowCameraHelper);
            }
          } catch (err) {
            _didIteratorError7 = true;
            _iteratorError7 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
                _iterator7.return();
              }
            } finally {
              if (_didIteratorError7) {
                throw _iteratorError7;
              }
            }
          }

          this.scene.add(new three__WEBPACK_IMPORTED_MODULE_1__["AxesHelper"](10));
          this.controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__["OrbitControls"](this.camera, this.renderer.domElement);
          this.controls.enablePan = true;
        }
      }, {
        key: "updateCamera",
        value: function updateCamera() {
          this.renderer.setSize(this.width, this.height);
          this.camera.aspect = this.width / this.height;
          this.camera.updateProjectionMatrix();
          this.UpdateRenderer();
        }
      }, {
        key: "UpdateRenderer",
        value: function UpdateRenderer() {
          this.renderer.render(this.scene, this.camera);
        }
      }, {
        key: "updateLight",
        value: function updateLight() {
          this.helpers.forEach(function (h) {
            return h.update();
          });
        }
      }, {
        key: "height",
        get: function get() {
          return this.element.clientHeight;
        }
      }, {
        key: "width",
        get: function get() {
          return this.element.clientWidth;
        }
      }, {
        key: "objects",
        get: function get() {
          var _this13 = this;

          return this.scene.children.filter(function (x) {
            return x !== _this13._background && (x instanceof three__WEBPACK_IMPORTED_MODULE_1__["Mesh"] || x instanceof three__WEBPACK_IMPORTED_MODULE_1__["Group"]);
          });
        }
      }]);

      return Scene;
    }();
    /***/

  },

  /***/
  "./src/app/core/components/image-shatter/triangulate.ts":
  /*!**************************************************************!*\
    !*** ./src/app/core/components/image-shatter/triangulate.ts ***!
    \**************************************************************/

  /*! exports provided: getTriangleVertices, calculateNewCentroid, translateToOrigin, translateToCornerOrigin */

  /***/
  function srcAppCoreComponentsImageShatterTriangulateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getTriangleVertices", function () {
      return getTriangleVertices;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "calculateNewCentroid", function () {
      return calculateNewCentroid;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "translateToOrigin", function () {
      return translateToOrigin;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "translateToCornerOrigin", function () {
      return translateToCornerOrigin;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var delaunay_triangulate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! delaunay-triangulate */
    "./node_modules/delaunay-triangulate/triangulate.js");
    /* harmony import */


    var delaunay_triangulate__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(delaunay_triangulate__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./utils */
    "./src/app/core/components/image-shatter/utils.ts");

    function getTriangleVertices(w, h) {
      var vertices = [];
      var cx = w / 2;
      var cy = h / 2;
      var rings = [{
        r: 80,
        c: 20
      }, {
        r: w * 0.25 + 80,
        c: 5
      }, {
        r: w * 0.5 + 80,
        c: 8
      }, {
        r: w * 0.6 + 80,
        c: 10
      }, {
        r: w * 0.75 + 80,
        c: 10
      }, {
        r: w * 1 + 80,
        c: 15
      }, {
        r: w * 1.2 + 80,
        c: 10
      }];
      vertices.push([cx, cy]);
      rings.forEach(function (ring) {
        var radius = ring.r;
        var count = ring.c;
        var variance = radius * 0.5;

        for (var i = 0; i < count; i++) {
          var x = Math.cos(i / count * Math.PI * 2) * radius + cx + Object(_utils__WEBPACK_IMPORTED_MODULE_2__["randomRange"])(-variance, variance);
          var y = Math.sin(i / count * Math.PI * 2) * radius + cy + Object(_utils__WEBPACK_IMPORTED_MODULE_2__["randomRange"])(-variance, variance);
          vertices.push([x, y]);
        }
      });
      vertices.forEach(function (v) {
        v[0] = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["clamp"])(v[0], 0, w);
        v[1] = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["clamp"])(v[1], 0, h);
      });
      var indices = delaunay_triangulate__WEBPACK_IMPORTED_MODULE_1__(vertices);
      var triangles = [];
      var _iteratorNormalCompletion8 = true;
      var _didIteratorError8 = false;
      var _iteratorError8 = undefined;

      try {
        for (var _iterator8 = indices[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
          var index = _step8.value;
          var points = [vertices[index[0]], vertices[index[1]], vertices[index[2]]];
          var xs = points.map(function (x) {
            return x[0];
          });
          var ys = points.map(function (x) {
            return x[1];
          });
          var xMin = Math.min.apply(Math, _toConsumableArray(xs));
          var xMax = Math.max.apply(Math, _toConsumableArray(xs));
          var yMin = Math.min.apply(Math, _toConsumableArray(ys));
          var yMax = Math.max.apply(Math, _toConsumableArray(ys));
          if (xMax - xMin <= 2 || yMax - yMin <= 2) continue;
          triangles.push([vertices[index[0]], vertices[index[1]], vertices[index[2]]]);
        }
      } catch (err) {
        _didIteratorError8 = true;
        _iteratorError8 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion8 && _iterator8.return != null) {
            _iterator8.return();
          }
        } finally {
          if (_didIteratorError8) {
            throw _iteratorError8;
          }
        }
      }

      return triangles;
    }

    function calculateNewCentroid(cx, cy, distanceMin, distanceMax) {
      var dx = cx;
      var dy = cy;
      var distance = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
      var radians = Math.atan2(dy, dx);
      var angle = radians * 180 / Math.PI;
      var theta = angle * Math.PI / 180;
      var extension = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["randomRange"])(distanceMin, distanceMax);

      if (distance < 40) {
        extension += 5;
      } else if (distance < 50) {
        extension += 1.5;
      } else if (distance < 100) {
        extension += 0.7;
      } else if (distance < 200) {
        extension += 0.25;
      } else if (distance < 300) {
        extension += 0.0625;
      }

      var x = distance * extension * Math.cos(theta);
      var y = distance * extension * Math.sin(theta);
      return {
        x: x,
        y: y
      };
    }

    function translateToOrigin(x, y, ox, oy) {
      return {
        x: x - ox,
        y: y - oy
      };
    }

    function translateToCornerOrigin(x, y, ox, oy) {
      return {
        x: x + ox,
        y: y + oy
      };
    }
    /***/

  },

  /***/
  "./src/app/core/components/image-shatter/utils.ts":
  /*!********************************************************!*\
    !*** ./src/app/core/components/image-shatter/utils.ts ***!
    \********************************************************/

  /*! exports provided: randomRange, randomFrom, getRangeOptions, clamp, degreesToRadians, distance, pointDistance, round, map */

  /***/
  function srcAppCoreComponentsImageShatterUtilsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "randomRange", function () {
      return randomRange;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "randomFrom", function () {
      return randomFrom;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getRangeOptions", function () {
      return getRangeOptions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "clamp", function () {
      return clamp;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "degreesToRadians", function () {
      return degreesToRadians;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "distance", function () {
      return distance;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "pointDistance", function () {
      return pointDistance;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "round", function () {
      return round;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "map", function () {
      return map;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    function randomRange(min, max, roundTo) {
      var r = min + (max - min) * Math.random();
      return roundTo ? round(r, roundTo) : r;
    }

    function randomFrom(arr) {
      if (arr.length < 1) return arr[0];
      var max = arr.length - 1;
      var min = 0;
      var randIndex = randomRange(min, max, 1);
      return arr[Math.min(max, randIndex)];
    }

    function getRangeOptions(min, max) {
      var inc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      return Array(Math.round((max + 1 - min) / inc)).fill(undefined).map(function (_, i) {
        return i * inc + min;
      });
    }

    function clamp(x, min, max) {
      return x < min ? min : x > max ? max : x;
    }

    function degreesToRadians(deg) {
      return deg * Math.PI / 180;
    }

    var distance = function distance(a, b) {
      return Math.abs(a - b);
    };

    var pointDistance = function pointDistance(a, b) {
      return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
    };

    var round = function round(value, step) {
      step || (step = 1.0);
      var inv = 1.0 / step;
      return Math.round(value * inv) / inv;
    };

    var map = function map(val, inMin, inMax, outMin, outMax) {
      return (val - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    };
    /***/

  },

  /***/
  "./src/app/core/components/navbar/navbar.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/core/components/navbar/navbar.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreComponentsNavbarNavbarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  position: relative;\n  background: var(--od-dark, #2e3235);\n}\n\n#navbar-wrap {\n  width: 100%;\n  height: 100%;\n  padding: 10px 2%;\n  box-sizing: border-box;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  font-size: medium;\n}\n\n#navbar-wrap > div {\n  display: -webkit-box;\n  display: flex;\n}\n\n#navbar-wrap > button {\n  -webkit-box-flex: 0;\n          flex: 0 0 40px;\n}\n\n#navbar-wrap #nav-title, #navbar-wrap #nav-direction {\n  text-transform: uppercase;\n}\n\n#navbar-wrap #nav-direction {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n\n#navbar-wrap #nav-direction > * {\n  cursor: pointer;\n  padding: 5px 10px;\n  border-radius: 5px;\n}\n\n#navbar-wrap #nav-direction > *:hover {\n  color: var(--secondary, #26a69a);\n}\n\n#navbar-wrap #nav-direction > *:not(:last-child) {\n  margin-right: 10px;\n}\n\na::after {\n  content: \" \";\n  opacity: 0;\n  -webkit-transition: opacity 0.3s linear;\n  transition: opacity 0.3s linear;\n}\n\na.active {\n  position: relative;\n}\n\na.active::after {\n  content: \" \";\n  width: 120%;\n  opacity: 1;\n  position: absolute;\n  bottom: -14px;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  border-bottom: 4px solid var(--secondary, #26a69a);\n  -webkit-transition: opacity 0.1s linear;\n  transition: opacity 0.1s linear;\n}\n\n#logo-container {\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  cursor: pointer;\n}\n\n#logo-container img {\n  height: 80%;\n  max-height: 65px;\n  position: relative;\n  -o-object-fit: contain;\n     object-fit: contain;\n  margin: auto;\n}\n\n@media screen and (max-width: 599px) {\n  #logo-container img {\n    font-size: 27px;\n  }\n}\n\n@media screen and (min-width: 600px) and (max-width: 959px) {\n  #logo-container img {\n    font-size: 36px;\n  }\n}\n\n@media screen and (min-width: 960px) and (max-width: 1279px) {\n  #logo-container img {\n    font-size: 45px;\n  }\n}\n\n@media screen and (min-width: 1280px) and (max-width: 1919px) {\n  #logo-container img {\n    font-size: 49.5px;\n  }\n}\n\n@media screen and (min-width: 1920px) {\n  #logo-container img {\n    font-size: 54px;\n  }\n}\n\n@media screen and (max-width: 599px) {\n  #logo-container img {\n    height: 50%;\n  }\n}\n\n@media screen and (min-width: 600px) and (max-width: 959px) {\n  #logo-container img {\n    height: 50%;\n  }\n}\n\n@media screen and (min-width: 960px) and (max-width: 1279px) {\n  #logo-container img {\n    height: 60%;\n  }\n}\n\n@media screen and (min-width: 1280px) and (max-width: 1919px) {\n  #logo-container img {\n    height: 70%;\n  }\n}\n\n@media screen and (min-width: 1920px) {\n  #logo-container img {\n    height: 70%;\n  }\n}\n\n.menu {\n  color: var(--foreground-primary, white);\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.menu > *:not(:last-child) {\n  margin-right: 20px;\n}\n\n.menu a, .menu mat-icon {\n  cursor: pointer;\n  opacity: 0.7;\n  -webkit-transition: opacity 0.2s;\n  transition: opacity 0.2s;\n}\n\n.menu a:hover, .menu mat-icon:hover {\n  opacity: 1;\n}\n\n.menu mat-icon {\n  font-size: 30px;\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n}\n\n.sections {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 30px;\n}\n\n@media screen and (max-width: 599px) {\n  .sections {\n    font-size: 10.2px;\n  }\n}\n\n@media screen and (min-width: 600px) and (max-width: 959px) {\n  .sections {\n    font-size: 13.6px;\n  }\n}\n\n@media screen and (min-width: 960px) and (max-width: 1279px) {\n  .sections {\n    font-size: 17px;\n  }\n}\n\n@media screen and (min-width: 1280px) and (max-width: 1919px) {\n  .sections {\n    font-size: 18.7px;\n  }\n}\n\n@media screen and (min-width: 1920px) {\n  .sections {\n    font-size: 20.4px;\n  }\n}\n\n.sections > *:not(:last-child) {\n  margin-right: 20px;\n}\n\n.sections a {\n  opacity: 1;\n  -webkit-animation: render 0.2s 1;\n          animation: render 0.2s 1;\n}\n\n@-webkit-keyframes render {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n@keyframes render {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n#menu-backdrop {\n  z-index: 10;\n}\n\n#menu-backdrop * {\n  z-index: 2;\n}\n\n#menu-backdrop #backdrop {\n  z-index: 1;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  -webkit-transition: all 0.3s ease-out;\n  transition: all 0.3s ease-out;\n  background: black;\n  opacity: 0.9;\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n#menu-backdrop.expanded {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n  padding: 10px 2%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n@media (orientation: landscape) {\n  #menu-backdrop.expanded #backdrop {\n    -webkit-transform: scale(2);\n            transform: scale(2);\n    width: 150vw;\n    height: 150vw;\n  }\n}\n\n@media (orientation: portrait) {\n  #menu-backdrop.expanded #backdrop {\n    -webkit-transform: scale(2);\n            transform: scale(2);\n    width: 150vh;\n    height: 150vh;\n  }\n}\n\n#menu-backdrop.expanded mat-icon {\n  align-self: flex-end;\n  margin-right: 10px;\n}\n\n#menu-backdrop.expanded .sections {\n  width: 90%;\n  margin-top: 15%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n}\n\n@media screen and (max-width: 599px) {\n  #menu-backdrop.expanded .sections {\n    font-size: 18px;\n  }\n}\n\n@media screen and (min-width: 600px) and (max-width: 959px) {\n  #menu-backdrop.expanded .sections {\n    font-size: 24px;\n  }\n}\n\n@media screen and (min-width: 960px) and (max-width: 1279px) {\n  #menu-backdrop.expanded .sections {\n    font-size: 30px;\n  }\n}\n\n@media screen and (min-width: 1280px) and (max-width: 1919px) {\n  #menu-backdrop.expanded .sections {\n    font-size: 33px;\n  }\n}\n\n@media screen and (min-width: 1920px) {\n  #menu-backdrop.expanded .sections {\n    font-size: 36px;\n  }\n}\n\n#menu-backdrop.expanded .sections > *:not(:last-child) {\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL25hdmJhci9DOlxcVXNlcnNcXExpbmEgUmFnYXVza2FpdGVcXERlc2t0b3BcXHByb2plY3RzXFxwb3J0Zm9saW9cXGFwcC9zcmNcXGFwcFxcY29yZVxcY29tcG9uZW50c1xcbmF2YmFyXFxuYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvbmF2YmFyL0M6XFxVc2Vyc1xcTGluYSBSYWdhdXNrYWl0ZVxcRGVza3RvcFxccHJvamVjdHNcXHBvcnRmb2xpb1xcYXBwL3NyY1xcYXBwXFxzdHlsZXNcXGFic3RyYWN0c1xcbWl4aW5zLnNjc3MiLCJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9uYXZiYXIvQzpcXFVzZXJzXFxMaW5hIFJhZ2F1c2thaXRlXFxEZXNrdG9wXFxwcm9qZWN0c1xccG9ydGZvbGlvXFxhcHAvc3JjXFxhcHBcXHN0eWxlc1xcYWJzdHJhY3RzXFxicmVha3BvaW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usa0JBQUE7RUFDQSxtQ0FBQTtBQ0RGOztBRElBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VFcURBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCRnJEeUM7VUVxRHpDLDhCRnJEeUM7RUVzRHpDLHlCQUhzRDtVQUd0RCxtQkFIc0Q7RUFJdEQsOEJGdkQwQjtFRXVEMUIsNkJGdkQwQjtVRXVEMUIsbUJGdkQwQjtFQUMxQixpQkFBQTtBQ0VGOztBREFFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0FDRUo7O0FEQ0U7RUFDRSxtQkFBQTtVQUFBLGNBQUE7QUNDSjs7QURFRTtFQUNFLHlCQUFBO0FDQUo7O0FER0U7RUVxQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EscUJGM0IyQztVRTJCM0MseUJGM0IyQztFRTRCM0MseUJBSHNEO1VBR3RELG1CQUhzRDtFQUl0RCw4QkY3QjRCO0VFNkI1Qiw2QkY3QjRCO1VFNkI1QixtQkY3QjRCO0FDUjlCOztBREZJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNJTjs7QURESTtFQUNFLGdDQUFBO0FDR047O0FEQ0k7RUFDRSxrQkFBQTtBQ0NOOztBRElBO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSx1Q0FBQTtFQUFBLCtCQUFBO0FDREY7O0FESUE7RUFDRSxrQkFBQTtBQ0RGOztBREdFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxrREFBQTtFQUNBLHVDQUFBO0VBQUEsK0JBQUE7QUNESjs7QURLQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLGVBQUE7QUNGRjs7QURJRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBRUEsc0JBQUE7S0FBQSxtQkFBQTtFQUNBLFlBQUE7QUNISjs7QUUzQkU7RUh3QkE7SUd2QkUsZUFBQTtFRjhCRjtBQUNGOztBRTVCRTtFSG9CQTtJR25CRSxlQUFBO0VGK0JGO0FBQ0Y7O0FFN0JFO0VIZ0JBO0lHZkUsZUFBQTtFRmdDRjtBQUNGOztBRTlCRTtFSFlBO0lHWEUsaUJBQUE7RUZpQ0Y7QUFDRjs7QUUvQkU7RUhRQTtJR1BFLGVBQUE7RUZrQ0Y7QUFDRjs7QUVwREU7RUh3QkE7SUd2QkUsV0FBQTtFRnVERjtBQUNGOztBRXJERTtFSG9CQTtJR25CRSxXQUFBO0VGd0RGO0FBQ0Y7O0FFdERFO0VIZ0JBO0lHZkUsV0FBQTtFRnlERjtBQUNGOztBRXZERTtFSFlBO0lHWEUsV0FBQTtFRjBERjtBQUNGOztBRXhERTtFSFFBO0lHUEUsV0FBQTtFRjJERjtBQUNGOztBRHBDQTtFQUNFLHVDQUFBO0VBQ0EsWUFBQTtFRXRCQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkZzQmdCO0VFdEJoQiw2QkZzQmdCO1VFdEJoQixtQkZzQmdCO0VFckJoQix3QkZxQm1DO1VFckJuQyx1QkZxQm1DO0VFcEJuQyx3QkZvQjJCO1VFcEIzQix1QkZvQjJCO0FDMEM3Qjs7QUMzREk7RUFFSSxrQkZlZTtBQzZDdkI7O0FEM0NFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUFBLHdCQUFBO0FDNkNKOztBRDVDSTtFQUNFLFVBQUE7QUM4Q047O0FEMUNFO0VFbERFLGVGbURrQjtFRWxEbEIsV0ZrRGtCO0VFakRsQixZRmlEa0I7RUVoRGxCLGlCRmdEa0I7QUMrQ3RCOztBRDNDQTtFRXZDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkZ3Q2dCO0VFeENoQiw2QkZ3Q2dCO1VFeENoQixtQkZ3Q2dCO0VFdkNoQix5QkZ1Q21DO1VFdkNuQyxtQkZ1Q21DO0VFdENuQyx3QkZzQzJCO1VFdEMzQix1QkZzQzJCO0VBRzNCLFlBQUE7QUM4Q0Y7O0FFL0dFO0VINERGO0lHM0RJLGlCQUFBO0VGa0hGO0FBQ0Y7O0FFaEhFO0VId0RGO0lHdkRJLGlCQUFBO0VGbUhGO0FBQ0Y7O0FFakhFO0VIb0RGO0lHbkRJLGVBQUE7RUZvSEY7QUFDRjs7QUVsSEU7RUhnREY7SUcvQ0ksaUJBQUE7RUZxSEY7QUFDRjs7QUVuSEU7RUg0Q0Y7SUczQ0ksaUJBQUE7RUZzSEY7QUFDRjs7QUM3R0k7RUFFSSxrQkZpQ2U7QUM2RXZCOztBRHhFRTtFQUNFLFVBQUE7RUFDQSxnQ0FBQTtVQUFBLHdCQUFBO0FDMEVKOztBRHhFSTtFQUNFO0lBQ0UsVUFBQTtFQzBFTjtFRHhFSTtJQUNFLFVBQUE7RUMwRU47QUFDRjs7QURoRkk7RUFDRTtJQUNFLFVBQUE7RUMwRU47RUR4RUk7SUFDRSxVQUFBO0VDMEVOO0FBQ0Y7O0FEckVBO0VBQ0UsV0FBQTtBQ3dFRjs7QUR0RUU7RUFDRSxVQUFBO0FDd0VKOztBRHJFRTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7VUFBQSxtQkFBQTtFQUNBLHFDQUFBO0VBQUEsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0FDdUVKOztBRHBFRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUVqR0Ysb0JBQUE7RUFBQSxhQUFBO0VBQ0EsdUJGaUd3QjtVRWpHeEIsMkJGaUd3QjtFRWhHeEIseUJBSHNEO1VBR3RELG1CQUhzRDtFQUl0RCw0QkYrRmdCO0VFL0ZoQiw2QkYrRmdCO1VFL0ZoQixzQkYrRmdCO0FDeUVsQjs7QUR0RU07RUFERjtJQUVJLDJCQUFBO1lBQUEsbUJBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtFQ3lFTjtBQUNGOztBRHZFTTtFQVBGO0lBUUksMkJBQUE7WUFBQSxtQkFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0VDMEVOO0FBQ0Y7O0FEdkVJO0VBQ0Usb0JBQUE7RUFFQSxrQkFBQTtBQ3dFTjs7QURyRUk7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFRWxISixvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkZtSG9CO0VFbkhwQiw2QkZtSG9CO1VFbkhwQixzQkZtSG9CO0VFbEhwQix3QkZrSDhDO1VFbEg5Qyx1QkZrSDhDO0VFakg5Qyx1QkZpSGtDO1VFakhsQywyQkZpSGtDO0FDeUVwQzs7QUVsTkU7RUhxSUU7SUdwSUEsZUFBQTtFRnFORjtBQUNGOztBRW5ORTtFSGlJRTtJR2hJQSxlQUFBO0VGc05GO0FBQ0Y7O0FFcE5FO0VINkhFO0lHNUhBLGVBQUE7RUZ1TkY7QUFDRjs7QUVyTkU7RUh5SEU7SUd4SEEsZUFBQTtFRndORjtBQUNGOztBRXRORTtFSHFIRTtJR3BIQSxlQUFBO0VGeU5GO0FBQ0Y7O0FDaE5JO0VBSUksbUJGMEdzQjtBQ3FHOUIiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ2Fic3RyYWN0cyc7XHJcblxyXG46aG9zdCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6IGNvbG9yKCdvZC1kYXJrJyk7XHJcbn1cclxuXHJcbiNuYXZiYXItd3JhcCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEwcHggMiU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBAaW5jbHVkZSBmbGV4KCRkaXJlY3Rpb246IHJvdywgJGp1c3RpZnk6IHNwYWNlLWJldHdlZW4pO1xyXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG5cclxuICA+IGRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuXHJcbiAgPiBidXR0b24ge1xyXG4gICAgZmxleDogMCAwIDQwcHg7XHJcbiAgfVxyXG5cclxuICAjbmF2LXRpdGxlLCAjbmF2LWRpcmVjdGlvbiB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxuXHJcbiAgI25hdi1kaXJlY3Rpb24ge1xyXG4gICAgPiAqIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgID4gKjpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiBjb2xvcignc2Vjb25kYXJ5Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgQGluY2x1ZGUgZmxleCgkZGlyZWN0aW9uOiByb3csICRqdXN0aWZ5OiBmbGV4LWVuZCk7XHJcbiAgICA+ICo6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmE6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIiBcIjtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBsaW5lYXI7XHJcbn1cclxuXHJcbmEuYWN0aXZlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICY6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgd2lkdGg6IDEyMCU7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAtMTRweDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCBjb2xvcignc2Vjb25kYXJ5Jyk7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMXMgbGluZWFyO1xyXG4gIH1cclxufVxyXG5cclxuI2xvZ28tY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgaW1nIHtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgbWF4LWhlaWdodDogNjVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIEBpbmNsdWRlIGJyZWFrLWZvbnQoNDVweCk7XHJcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgQGluY2x1ZGUgYnJlYWstcHJvcCgnaGVpZ2h0JywgKFxyXG4gICAgICAneHMnOiA1MCUsXHJcbiAgICAgICdzJzogNTAlLFxyXG4gICAgICAnbSc6IDYwJSxcclxuICAgICAgJ2wnOiA3MCUsXHJcbiAgICAgICd4bCc6IDcwJVxyXG4gICAgKSk7XHJcbiAgfVxyXG59XHJcblxyXG4ubWVudSB7XHJcbiAgY29sb3I6IGNvbG9yKCdmb3JlZ3JvdW5kLXByaW1hcnknKTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgQGluY2x1ZGUgZnhGbGV4KHJvdywgMjBweCwgY2VudGVyLCBmbGV4LXN0YXJ0KTtcclxuXHJcbiAgYSwgbWF0LWljb24ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtYXQtaWNvbiB7XHJcbiAgICBAaW5jbHVkZSBtYXQtaWNvbigzMHB4LCBmYWxzZSk7XHJcbiAgfVxyXG59XHJcblxyXG4uc2VjdGlvbnMge1xyXG4gIEBpbmNsdWRlIGJyZWFrLWZvbnQoMTdweCk7XHJcbiAgQGluY2x1ZGUgZnhGbGV4KHJvdywgMjBweCwgY2VudGVyLCBjZW50ZXIpO1xyXG4gIC8vIE1pbiBoZWlnaHQgb2YgaGVhZGVyIG1pbnVzIHBhZGRpbmcsIHRvIGNlbnRlciB0ZXh0IGluIG5hdmJhciwgYnV0IG5vdFxyXG4gIC8vIHdoZW4gaXQncyBleHBhbmRlZCAoc2Nyb2xsOiAwKVxyXG4gIGhlaWdodDogMzBweDtcclxuXHJcbiAgYSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgYW5pbWF0aW9uOiByZW5kZXIgMC4ycyAxO1xyXG4gICAgLy8gSGlkZSB1bnRpbCBiYWNrZHJvcCBhbmltYXRpb24gaXMgZG9uZVxyXG4gICAgQGtleWZyYW1lcyByZW5kZXIge1xyXG4gICAgICAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgfVxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4jbWVudS1iYWNrZHJvcCB7XHJcbiAgei1pbmRleDogMTA7XHJcblxyXG4gICoge1xyXG4gICAgei1pbmRleDogMjtcclxuICB9XHJcblxyXG4gICNiYWNrZHJvcCB7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIG9wYWNpdHk6IDAuOTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gIH1cclxuXHJcbiAgJi5leHBhbmRlZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIlO1xyXG4gICAgQGluY2x1ZGUgZmxleChjb2x1bW4sIGZsZXgtc3RhcnQpO1xyXG5cclxuICAgICNiYWNrZHJvcCB7XHJcbiAgICAgIEBtZWRpYSAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMik7XHJcbiAgICAgICAgd2lkdGg6IDE1MHZ3O1xyXG4gICAgICAgIGhlaWdodDogMTUwdnc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcclxuICAgICAgICB3aWR0aDogMTUwdmg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNTB2aDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1hdC1pY29uIHtcclxuICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICAgIC8vIFRvIGFjY291bnQgZm9yIHJlbW92ZWQgc2Nyb2xsYmFyXHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuc2VjdGlvbnMge1xyXG4gICAgICB3aWR0aDogOTAlO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxNSU7XHJcbiAgICAgIEBpbmNsdWRlIGJyZWFrLWZvbnQoMzBweCk7XHJcbiAgICAgIEBpbmNsdWRlIGZ4RmxleChjb2x1bW4sIDIwcHgsIGZsZXgtc3RhcnQsIGZsZXgtc3RhcnQpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogdmFyKC0tb2QtZGFyaywgIzJlMzIzNSk7XG59XG5cbiNuYXZiYXItd3JhcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHggMiU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZm9udC1zaXplOiBtZWRpdW07XG59XG4jbmF2YmFyLXdyYXAgPiBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuI25hdmJhci13cmFwID4gYnV0dG9uIHtcbiAgZmxleDogMCAwIDQwcHg7XG59XG4jbmF2YmFyLXdyYXAgI25hdi10aXRsZSwgI25hdmJhci13cmFwICNuYXYtZGlyZWN0aW9uIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbiNuYXZiYXItd3JhcCAjbmF2LWRpcmVjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4jbmF2YmFyLXdyYXAgI25hdi1kaXJlY3Rpb24gPiAqIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuI25hdmJhci13cmFwICNuYXYtZGlyZWN0aW9uID4gKjpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnksICMyNmE2OWEpO1xufVxuI25hdmJhci13cmFwICNuYXYtZGlyZWN0aW9uID4gKjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG5hOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgbGluZWFyO1xufVxuXG5hLmFjdGl2ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbmEuYWN0aXZlOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICB3aWR0aDogMTIwJTtcbiAgb3BhY2l0eTogMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC0xNHB4O1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHZhcigtLXNlY29uZGFyeSwgIzI2YTY5YSk7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xcyBsaW5lYXI7XG59XG5cbiNsb2dvLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4jbG9nby1jb250YWluZXIgaW1nIHtcbiAgaGVpZ2h0OiA4MCU7XG4gIG1heC1oZWlnaHQ6IDY1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgbWFyZ2luOiBhdXRvO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgI2xvZ28tY29udGFpbmVyIGltZyB7XG4gICAgZm9udC1zaXplOiAyN3B4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XG4gICNsb2dvLWNvbnRhaW5lciBpbWcge1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIHtcbiAgI2xvZ28tY29udGFpbmVyIGltZyB7XG4gICAgZm9udC1zaXplOiA0NXB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTE5cHgpIHtcbiAgI2xvZ28tY29udGFpbmVyIGltZyB7XG4gICAgZm9udC1zaXplOiA0OS41cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE5MjBweCkge1xuICAjbG9nby1jb250YWluZXIgaW1nIHtcbiAgICBmb250LXNpemU6IDU0cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gICNsb2dvLWNvbnRhaW5lciBpbWcge1xuICAgIGhlaWdodDogNTAlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XG4gICNsb2dvLWNvbnRhaW5lciBpbWcge1xuICAgIGhlaWdodDogNTAlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCkgYW5kIChtYXgtd2lkdGg6IDEyNzlweCkge1xuICAjbG9nby1jb250YWluZXIgaW1nIHtcbiAgICBoZWlnaHQ6IDYwJTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSBhbmQgKG1heC13aWR0aDogMTkxOXB4KSB7XG4gICNsb2dvLWNvbnRhaW5lciBpbWcge1xuICAgIGhlaWdodDogNzAlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpIHtcbiAgI2xvZ28tY29udGFpbmVyIGltZyB7XG4gICAgaGVpZ2h0OiA3MCU7XG4gIH1cbn1cblxuLm1lbnUge1xuICBjb2xvcjogdmFyKC0tZm9yZWdyb3VuZC1wcmltYXJ5LCB3aGl0ZSk7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLm1lbnUgPiAqOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4ubWVudSBhLCAubWVudSBtYXQtaWNvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMC43O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG59XG4ubWVudSBhOmhvdmVyLCAubWVudSBtYXQtaWNvbjpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG59XG4ubWVudSBtYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG5cbi5zZWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDMwcHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xuICAuc2VjdGlvbnMge1xuICAgIGZvbnQtc2l6ZTogMTAuMnB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XG4gIC5zZWN0aW9ucyB7XG4gICAgZm9udC1zaXplOiAxMy42cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSBhbmQgKG1heC13aWR0aDogMTI3OXB4KSB7XG4gIC5zZWN0aW9ucyB7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTE5cHgpIHtcbiAgLnNlY3Rpb25zIHtcbiAgICBmb250LXNpemU6IDE4LjdweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTkyMHB4KSB7XG4gIC5zZWN0aW9ucyB7XG4gICAgZm9udC1zaXplOiAyMC40cHg7XG4gIH1cbn1cbi5zZWN0aW9ucyA+ICo6bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbi5zZWN0aW9ucyBhIHtcbiAgb3BhY2l0eTogMTtcbiAgYW5pbWF0aW9uOiByZW5kZXIgMC4ycyAxO1xufVxuQGtleWZyYW1lcyByZW5kZXIge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5cbiNtZW51LWJhY2tkcm9wIHtcbiAgei1pbmRleDogMTA7XG59XG4jbWVudS1iYWNrZHJvcCAqIHtcbiAgei1pbmRleDogMjtcbn1cbiNtZW51LWJhY2tkcm9wICNiYWNrZHJvcCB7XG4gIHotaW5kZXg6IDE7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBvcGFjaXR5OiAwLjk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbn1cbiNtZW51LWJhY2tkcm9wLmV4cGFuZGVkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMTBweCAyJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuQG1lZGlhIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICNtZW51LWJhY2tkcm9wLmV4cGFuZGVkICNiYWNrZHJvcCB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcbiAgICB3aWR0aDogMTUwdnc7XG4gICAgaGVpZ2h0OiAxNTB2dztcbiAgfVxufVxuQG1lZGlhIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgI21lbnUtYmFja2Ryb3AuZXhwYW5kZWQgI2JhY2tkcm9wIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xuICAgIHdpZHRoOiAxNTB2aDtcbiAgICBoZWlnaHQ6IDE1MHZoO1xuICB9XG59XG4jbWVudS1iYWNrZHJvcC5leHBhbmRlZCBtYXQtaWNvbiB7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4jbWVudS1iYWNrZHJvcC5leHBhbmRlZCAuc2VjdGlvbnMge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tdG9wOiAxNSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xuICAjbWVudS1iYWNrZHJvcC5leHBhbmRlZCAuc2VjdGlvbnMge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xuICAjbWVudS1iYWNrZHJvcC5leHBhbmRlZCAuc2VjdGlvbnMge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIHtcbiAgI21lbnUtYmFja2Ryb3AuZXhwYW5kZWQgLnNlY3Rpb25zIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODBweCkgYW5kIChtYXgtd2lkdGg6IDE5MTlweCkge1xuICAjbWVudS1iYWNrZHJvcC5leHBhbmRlZCAuc2VjdGlvbnMge1xuICAgIGZvbnQtc2l6ZTogMzNweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTkyMHB4KSB7XG4gICNtZW51LWJhY2tkcm9wLmV4cGFuZGVkIC5zZWN0aW9ucyB7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICB9XG59XG4jbWVudS1iYWNrZHJvcC5leHBhbmRlZCAuc2VjdGlvbnMgPiAqOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufSIsIkBpbXBvcnQgJy4vZnVuY3Rpb25zJztcclxuXHJcbkBtaXhpbiBhYnNvbHV0ZS1jZW50cmUgKCRob3Jpem9udGFsOiB0cnVlLCAkdmVydGljYWw6IHRydWUpIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gIEBpZiAkdmVydGljYWwgYW5kICRob3Jpem9udGFsIHtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgfSBAZWxzZSBpZiAkaG9yaXpvbnRhbCB7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgfSBAZWxzZSBpZiAkdmVydGljYWwge1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gYWJzb2x1dGUtZmlsbCAoJHdpZHRoOiBudWxsLCAkaGVpZ2h0OiBudWxsLCAkdHlwZTogJ3NpemUnKSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG5cclxuXHJcbiAgQGlmICR3aWR0aCAhPSBudWxsIHtcclxuICAgIEBpZiAkdHlwZSA9PSAnc2l6ZScge1xyXG4gICAgICB3aWR0aDogJHdpZHRoO1xyXG4gICAgfSBAZWxzZSBpZiAkdHlwZSA9PSAnZWRnZScge1xyXG4gICAgICBsZWZ0OiAkd2lkdGg7XHJcbiAgICAgIHJpZ2h0OiAkd2lkdGg7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSB7XHJcbiAgICByaWdodDogMDtcclxuICB9XHJcblxyXG4gIEBpZiAkaGVpZ2h0ICE9IG51bGwge1xyXG4gICAgQGlmICR0eXBlID09ICdzaXplJyB7XHJcbiAgICAgIGhlaWdodDogJGhlaWdodDtcclxuICAgIH0gQGVsc2UgaWYgJHR5cGUgPT0gJ2VkZ2UnIHtcclxuICAgICAgdG9wOiAkaGVpZ2h0O1xyXG4gICAgICBib3R0b206ICRoZWlnaHQ7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBib3R0b206IDA7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gbWF0LWljb24gKCRzaXplLCAkY2xhc3M6IHRydWUpIHtcclxuICBAaWYgKCRjbGFzcykge1xyXG4gICAgbWF0LWljb24ge1xyXG4gICAgICBmb250LXNpemU6ICRzaXplO1xyXG4gICAgICB3aWR0aDogJHNpemU7XHJcbiAgICAgIGhlaWdodDogJHNpemU7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAkc2l6ZTtcclxuICAgIH1cclxuICB9IEBlbHNlIHtcclxuICAgIGZvbnQtc2l6ZTogJHNpemU7XHJcbiAgICB3aWR0aDogJHNpemU7XHJcbiAgICBoZWlnaHQ6ICRzaXplO1xyXG4gICAgbGluZS1oZWlnaHQ6ICRzaXplO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGZsZXggKCRkaXJlY3Rpb246IHJvdywgJGp1c3RpZnk6IGNlbnRlciwgJGFsaWduOiBjZW50ZXIpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XHJcbiAgYWxpZ24taXRlbXM6ICRhbGlnbjtcclxuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcclxufVxyXG5cclxuLy8gRmxleCBsYXlvdXRcclxuQG1peGluIGZ4RmxleCAoJGRpcmVjdGlvbiwgJGdhcDogbnVsbCwgJGp1c3RpZnk6IGNlbnRlciwgJGFsaWduOiBjZW50ZXIpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xyXG4gIGFsaWduLWl0ZW1zOiAkYWxpZ247XHJcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcclxuXHJcbiAgQGlmICgkZ2FwKSB7XHJcbiAgICA+ICo6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgIEBpZiAoJGRpcmVjdGlvbiA9PSByb3cpIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6ICRnYXA7XHJcbiAgICAgIH0gQGVsc2UgaWYgKCRkaXJlY3Rpb24gPT0gY29sdW1uKSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogJGdhcDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGl0ZW0tc3BhY2UgKCRkaXJlY3Rpb246IHJvdywgJGRpc3RhbmNlOiAyMHB4KSB7XHJcbiAgQGlmICRkaXJlY3Rpb24gPT0gcm93IHtcclxuICAgID4gKjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAkZGlzdGFuY2U7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSBpZiAkZGlyZWN0aW9uID09IGNvbHVtbiB7XHJcbiAgICA+ICo6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206ICRkaXN0YW5jZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiXHJcbi8vIC0tLT4gQnJlYWtwb2ludHNcclxuJGJyZWFrcG9pbnRzOiAoXHJcbiAgJ3hzLW1pbic6IDBweCxcclxuICAneHMtbWF4JzogNTk5cHgsXHJcbiAgJ3MtbWluJzogNjAwcHgsXHJcbiAgJ3MtbWF4JzogOTU5cHgsXHJcbiAgJ20tbWluJzogOTYwcHgsXHJcbiAgJ20tbWF4JzogMTI3OXB4LFxyXG4gICdsLW1pbic6IDEyODBweCxcclxuICAnbC1tYXgnOiAxOTE5cHgsXHJcbiAgJ3hsLW1pbic6IDE5MjBweCxcclxuICAneGwtbWF4JzogNTAwMHB4XHJcbikgIWRlZmF1bHQ7XHJcblxyXG4vLyB4c1x0J3NjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpJ1xyXG4vLyBzbVx0J3NjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweCknXHJcbi8vIG1kXHQnc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCkgYW5kIChtYXgtd2lkdGg6IDEyNzlweCknXHJcbi8vIGxnXHQnc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTE5cHgpJ1xyXG4vLyB4bFx0J3NjcmVlbiBhbmQgKG1pbi13aWR0aDogMTkyMHB4KSBhbmQgKG1heC13aWR0aDogNTAwMHB4KSdcclxuXHJcbi8vIGx0LXNtXHQnc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCknXHJcbi8vIGx0LW1kXHQnc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTlweCknXHJcbi8vIGx0LWxnXHQnc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpJ1xyXG4vLyBsdC14bFx0J3NjcmVlbiBhbmQgKG1heC13aWR0aDogMTkxOXB4KSdcclxuXHJcbi8vIGd0LXhzXHQnc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCknXHJcbi8vIGd0LXNtXHQnc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCknXHJcbi8vIGd0LW1kXHQnc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpJ1xyXG4vLyBndC1sZ1x0J3NjcmVlbiBhbmQgKG1pbi13aWR0aDogMTkyMHB4KSdcclxuXHJcbkBtaXhpbiBicmVhaygkbHRHdCwgJGJyZWFrcG9pbnQpIHtcclxuICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAnI3skYnJlYWtwb2ludH0tbWluJykge1xyXG4gICAgQGlmICgkbHRHdCA9PSAnbHQnKSB7XHJcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IGNhbGMoI3ttYXAtZ2V0KCRicmVha3BvaW50cywgJyN7JGJyZWFrcG9pbnR9LW1pbicpfSAtIDFweCkpIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgICAgfVxyXG4gICAgfSBAZWxzZSBpZiAoJGx0R3QgPT0gJ2d0Jykge1xyXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBjYWxjKCN7bWFwLWdldCgkYnJlYWtwb2ludHMsICcjeyRicmVha3BvaW50fS1tYXgnKX0gKyAxcHgpKSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICAgIH1cclxuICAgIH0gQGVsc2Uge1xyXG4gICAgICBAZXJyb3IgJ1VucmVjb2duaXNlZCBwYXJhbWV0ZXIgI3skbHRHdH0uIFZhbHVlcyBcXCdndFxcJyBhbmQgXFwnbHRcXCcgYXJlIGFjY2VwdGVkLic7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAZXJyb3IgJ1VucmVjb2duaXNlZCBicmVha3BvaW50ICN7JGJyZWFrcG9pbnR9LiBBdmFpbGFibGUgYnJlYWtwb2ludHMgYXJlOiAje21hcC1rZXlzKCRicmVha3BvaW50cyl9Lic7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gYnJlYWstcHJvcCAoJHByb3BlcnR5LCAkYnJlYWstbWFwKSB7XHJcbiAgLy8geHNcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xyXG4gICAgI3skcHJvcGVydHl9OiBtYXAtZ2V0KCRicmVhay1tYXAsICd4cycpO1xyXG4gIH1cclxuICAvLyBzXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xyXG4gICAgI3skcHJvcGVydHl9OiBtYXAtZ2V0KCRicmVhay1tYXAsICdzJyk7XHJcbiAgfVxyXG4gIC8vIG1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCkgYW5kIChtYXgtd2lkdGg6IDEyNzlweCkge1xyXG4gICAgI3skcHJvcGVydHl9OiBtYXAtZ2V0KCRicmVhay1tYXAsICdtJyk7XHJcbiAgfVxyXG4gIC8vIGxcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTE5cHgpIHtcclxuICAgICN7JHByb3BlcnR5fTogbWFwLWdldCgkYnJlYWstbWFwLCAnbCcpO1xyXG4gIH1cclxuICAvLyB4bFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE5MjBweCkge1xyXG4gICAgI3skcHJvcGVydHl9OiBtYXAtZ2V0KCRicmVhay1tYXAsICd4bCcpO1xyXG4gIH1cclxufVxyXG4vLyA8LS0tIEJyZWFrcG9pbnRzXHJcblxyXG5AbWl4aW4gYnJlYWstZm9udCAoJHNpemUsICRtaW46IG51bGwsICRtYXg6IG51bGwpIHtcclxuICBAaW5jbHVkZSBicmVhay1wcm9wKCdmb250LXNpemUnLCAoXHJcbiAgICAneHMnOiBzbmFwKCRzaXplICogMC42LCAkbWluLCAkbWF4KSxcclxuICAgICdzJzogc25hcCgkc2l6ZSAqIDAuOCwgJG1pbiwgJG1heCksXHJcbiAgICAnbSc6ICRzaXplLFxyXG4gICAgJ2wnOiBzbmFwKCRzaXplICogMS4xLCAkbWluLCAkbWF4KSxcclxuICAgICd4bCc6IHNuYXAoJHNpemUgKiAxLjIsICRtaW4sICRtYXgpXHJcbiAgKSlcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/core/components/navbar/navbar.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/core/components/navbar/navbar.component.ts ***!
    \************************************************************/

  /*! exports provided: NavBarComponent */

  /***/
  function srcAppCoreComponentsNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavBarComponent", function () {
      return NavBarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _core_services_navbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @core/services/navbar.service */
    "./src/app/core/services/navbar.service.ts");
    /* harmony import */


    var _core_model_section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @core/model/section */
    "./src/app/core/model/section.ts");
    /* harmony import */


    var _core_services_view_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @core/services/view.service */
    "./src/app/core/services/view.service.ts");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _core_services_projects_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @core/services/projects.service */
    "./src/app/core/services/projects.service.ts");

    var NavBarComponent = /*#__PURE__*/function () {
      function NavBarComponent(navBar, viewService, projectsService) {
        _classCallCheck(this, NavBarComponent);

        this.navBar = navBar;
        this.viewService = viewService;
        this.projectsService = projectsService;
        this.section = _core_model_section__WEBPACK_IMPORTED_MODULE_3__["Section"];
        this._menuOpen = false;
      }

      _createClass(NavBarComponent, [{
        key: "menuOpen",
        get: function get() {
          return this._menuOpen && this.viewService.mobile;
        },
        set: function set(val) {
          this._menuOpen = val;
        }
      }, {
        key: "projectsSection",
        get: function get() {
          return this.projectsService.hasProjectsPage ? 'projects' : 'featured';
        }
      }]);

      return NavBarComponent;
    }();

    NavBarComponent.ctorParameters = function () {
      return [{
        type: _core_services_navbar_service__WEBPACK_IMPORTED_MODULE_2__["NavBarService"]
      }, {
        type: _core_services_view_service__WEBPACK_IMPORTED_MODULE_4__["ViewService"]
      }, {
        type: _core_services_projects_service__WEBPACK_IMPORTED_MODULE_6__["ProjectsService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('menuBackdrop', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], NavBarComponent.prototype, "menuBackdrop", void 0);
    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nav',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/navbar/navbar.component.html")).default,
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('render', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
        opacity: 0
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["stagger"])(200, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
        opacity: 1
      })])])])])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navbar.component.scss */
      "./src/app/core/components/navbar/navbar.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_navbar_service__WEBPACK_IMPORTED_MODULE_2__["NavBarService"], _core_services_view_service__WEBPACK_IMPORTED_MODULE_4__["ViewService"], _core_services_projects_service__WEBPACK_IMPORTED_MODULE_6__["ProjectsService"]])], NavBarComponent);
    /***/
  },

  /***/
  "./src/app/core/components/post-cover/helpers/fragment.ts":
  /*!****************************************************************!*\
    !*** ./src/app/core/components/post-cover/helpers/fragment.ts ***!
    \****************************************************************/

  /*! exports provided: Fragment */

  /***/
  function srcAppCoreComponentsPostCoverHelpersFragmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Fragment", function () {
      return Fragment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var intersects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! intersects */
    "./node_modules/intersects/index.js");
    /* harmony import */


    var intersects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(intersects__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./utils */
    "./src/app/core/components/post-cover/helpers/utils.ts");

    var Fragment = /*#__PURE__*/function () {
      function Fragment(v0, v1, v2, parentBox, parentCrop, image) {
        _classCallCheck(this, Fragment);

        this.parentCrop = parentCrop;
        this.image = image;
        this.cropIntersect = false;
        this.invisible = false;
        this.original = {
          points: [],
          box: {}
        };
        this.shattered = {
          points: [],
          box: {}
        };
        this.mouse = {
          _x: 0,
          _y: 0,
          x: 0,
          y: 0,
          updatePosition: function updatePosition(x, y) {
            this.x = x - this._x;
            this.y = (y - this._y) * -1;
          },
          setOrigin: function setOrigin(box) {
            this._x = Math.floor(box.w / 2);
            this._y = Math.floor(box.h / 2);
          }
        };
        this.original.points = [_toConsumableArray(v0), _toConsumableArray(v1), _toConsumableArray(v2)];
        this.originCenter = {
          x: parentBox.x + parentBox.w / 2,
          y: parentBox.y + parentBox.h / 2
        };
        this.computeBoundingBox();

        if (!this.invisible) {
          this.computeCentroid();
          this.createCanvas();
          this.clip();
          this.mouse.setOrigin(this.activeBox);
          this.createOffset();
          this.setIntersect();
        }
      }

      _createClass(Fragment, [{
        key: "setIntersect",
        value: function setIntersect() {
          var bounds = {
            minX: this.parentCrop.x,
            maxX: this.parentCrop.x + this.parentCrop.w,
            minY: this.parentCrop.y,
            maxY: this.parentCrop.y + this.parentCrop.h
          };
          var pol = [];
          var _iteratorNormalCompletion9 = true;
          var _didIteratorError9 = false;
          var _iteratorError9 = undefined;

          try {
            for (var _iterator9 = this.shattered.points[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
              var point = _step9.value;
              pol.push.apply(pol, _toConsumableArray(point));
            }
          } catch (err) {
            _didIteratorError9 = true;
            _iteratorError9 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion9 && _iterator9.return != null) {
                _iterator9.return();
              }
            } finally {
              if (_didIteratorError9) {
                throw _iteratorError9;
              }
            }
          }

          this.cropIntersect = intersects__WEBPACK_IMPORTED_MODULE_1__["polygonPolygon"](pol, [bounds.minX, bounds.minY, bounds.maxX, bounds.minY, bounds.maxX, bounds.maxY, bounds.minX, bounds.maxY]);
        }
      }, {
        key: "animate",
        value: function animate() {
          if (this.invisible) return;

          if (this.cropIntersect) {
            this.fragmentEl.style.opacity = '0';
            this.fragmentEl.style.transition = 'all 0.1s linear';
          } else {
            this.fragmentEl.style.opacity = '0.95';
            this.fragmentEl.style.transition = "all 0.3s linear";
          }

          this.fragmentEl.style.transform = "rotate(".concat(Object(_utils__WEBPACK_IMPORTED_MODULE_2__["randomRange"])(-30, 30), "deg)");
          this.activeBox.x = this.shattered.box.x;
          this.activeBox.y = this.shattered.box.y;
          this.shaddowCnv.style.opacity = '0.5';
          this.moveCanvas();
        }
      }, {
        key: "updateSkew",
        value: function updateSkew(x, y) {
          if (this.invisible) return;
          this.mouse.updatePosition(x, y);
          this.updateTransformStyle((this.mouse.y / this.fragmentEl.offsetHeight / 0.5).toFixed(2), (this.mouse.x / this.fragmentEl.offsetWidth / 0.5).toFixed(2));
        }
      }, {
        key: "updateTransformStyle",
        value: function updateTransformStyle(x, y) {
          if (this.invisible) return;
          var clampV = 20;
          x = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["clamp"])(x, -clampV, clampV);
          y = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["clamp"])(y, -clampV, clampV);
          var transformCss = 'rotateX(' + x + 'deg) rotateY(' + y + 'deg)'; // Enable in case safari z index breaks

          this.canvas.style.transformStyle = 'preserve-3d';
          this.shaddowCnv.style.transformStyle = 'preserve-3d';
          this.canvas.style.transform = "".concat(transformCss);
          this.shaddowCnv.style.transform = "scale(1.2) ".concat(transformCss);
        }
      }, {
        key: "reset",
        value: function reset() {
          if (this.invisible) return;
          this.fragmentEl.style.transition = 'all 0.3s linear';
          this.fragmentEl.style.opacity = '1';
          this.activeBox.x = this.original.box.x;
          this.activeBox.y = this.original.box.y;
          this.shaddowCnv.style.opacity = '0';
          this.fragmentEl.style.transform = '';
          this.canvas.style.transform = '';
          this.shaddowCnv.style.transform = 'scale(1.2)';
          this.moveCanvas();
        }
      }, {
        key: "computeBoundingBox",
        value: function computeBoundingBox() {
          var _a;

          var xMin = Math.min.apply(Math, _toConsumableArray(this.original.points.map(function (x) {
            return x[0];
          })));
          var xMax = Math.max.apply(Math, _toConsumableArray(this.original.points.map(function (x) {
            return x[0];
          })));
          var yMin = Math.min.apply(Math, _toConsumableArray(this.original.points.map(function (x) {
            return x[1];
          })));
          var yMax = Math.max.apply(Math, _toConsumableArray(this.original.points.map(function (x) {
            return x[1];
          })));
          this.activeBox = (_a = {
            x: xMin,
            y: yMin,
            w: xMax - xMin,
            h: yMax - yMin
          }, this.original.box = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](_a, []), _a);
          this.invisible = this.activeBox.w === 0 || this.activeBox.h === 0;
        }
      }, {
        key: "computeCentroid",
        value: function computeCentroid() {
          var x = this.original.points.reduce(function (sum, x) {
            return sum + x[0];
          }, 0) / this.original.points.length;
          var y = this.original.points.reduce(function (sum, x) {
            return sum + x[1];
          }, 0) / this.original.points.length;
          this.centroid = {
            x: x,
            y: y
          };
        }
      }, {
        key: "createOffset",
        value: function createOffset() {
          var translatedCentroid = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["translateToOrigin"])(this.centroid.x, this.centroid.y, this.originCenter.x, this.originCenter.y);
          var newCentroid = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["calculateNewCentroid"])(translatedCentroid.x, translatedCentroid.y);
          var centroid = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["translateToCornerOrigin"])(newCentroid.x, newCentroid.y, this.originCenter.x, this.originCenter.y);
          var diff = {
            x: this.centroid.x - centroid.x,
            y: this.centroid.y - centroid.y
          };
          this.shattered.box = Object.assign({}, this.original.box);
          this.shattered.box.x -= diff.x;
          this.shattered.box.y -= diff.y;
          this.shattered.points = _toConsumableArray(this.original.points).map(function (coord) {
            return [coord[0] - diff.x, coord[1] - diff.y];
          });
        }
      }, {
        key: "createCanvas",
        value: function createCanvas() {
          this.fragmentEl = document.createElement('div');
          this.fragmentEl.style.position = 'absolute';
          this.fragmentEl.style.perspective = '70px';
          this.fragmentEl.className = 'fragment';
          this.fragmentEl.style.pointerEvents = 'none';
          this.fragmentEl.style.width = this.activeBox.w + 'px';
          this.fragmentEl.style.height = this.activeBox.h + 'px';
          this.fragmentEl.style.left = this.activeBox.x + 'px';
          this.fragmentEl.style.top = this.activeBox.y + 'px';
          this.shaddowCnv = document.createElement('canvas');
          this.shaddowCnv.style.position = 'absolute';
          this.fragmentEl.appendChild(this.shaddowCnv);
          this.shaddowCnv.style.opacity = '0';
          this.shaddowCnv.style.transition = 'opacity 0.2s linear';
          this.shaddowCnv.style.filter = 'blur(5px)';
          this.shaddowCnv.style.transform = 'scale(1.2)';
          this.canvas = document.createElement('canvas');
          this.canvas.style.position = 'absolute';
          this.fragmentEl.appendChild(this.canvas);
          this.canvas.width = this.activeBox.w;
          this.canvas.style.transition = 'opacity 0.2s linear'; // this.canvas.style.transformStyle = 'flat'

          this.canvas.height = this.activeBox.h;
          this.canvas.style.width = this.activeBox.w + 'px';
          this.canvas.style.height = this.activeBox.h + 'px';
          this.canvas.style.left = '0px';
          this.canvas.style.top = '0px';
          this.ctx = this.canvas.getContext('2d');
          this.shaddowCnv.width = this.activeBox.w;
          this.shaddowCnv.height = this.activeBox.h;
          this.shaddowCnv.style.width = this.activeBox.w + 'px';
          this.shaddowCnv.style.height = this.activeBox.h + 'px';
          this.shaddowCnv.style.left = '0px';
          this.shaddowCnv.style.top = '0px';
          this.shaddowCtx = this.shaddowCnv.getContext('2d');
          var dx = this.centroid[0] - this.originCenter.x;
          var dy = this.centroid[1] - this.originCenter.y;
          var d = Math.sqrt(dx * dx + dy * dy);
          this.fragmentEl.style.zIndex = Math.floor(d).toString();
        }
      }, {
        key: "moveCanvas",
        value: function moveCanvas() {
          if (this.invisible) return;
          this.fragmentEl.style.left = this.activeBox.x + 'px';
          this.fragmentEl.style.top = this.activeBox.y + 'px';
        }
      }, {
        key: "clip",
        value: function clip() {
          var _this$ctx, _this$shaddowCtx;

          this.ctx.translate(-this.activeBox.x, -this.activeBox.y);
          this.ctx.beginPath();

          (_this$ctx = this.ctx).moveTo.apply(_this$ctx, _toConsumableArray(this.original.points[0]));

          for (var i = 1; i < this.original.points.length; i++) {
            var _this$ctx2;

            (_this$ctx2 = this.ctx).lineTo.apply(_this$ctx2, _toConsumableArray(this.original.points[i]));
          }

          this.ctx.closePath();
          this.ctx.clip();
          this.shaddowCtx.translate(-this.activeBox.x, -this.activeBox.y);
          this.shaddowCtx.beginPath();

          (_this$shaddowCtx = this.shaddowCtx).moveTo.apply(_this$shaddowCtx, _toConsumableArray(this.original.points[0]));

          for (var _i4 = 1; _i4 < this.original.points.length; _i4++) {
            var _this$shaddowCtx2;

            (_this$shaddowCtx2 = this.shaddowCtx).lineTo.apply(_this$shaddowCtx2, _toConsumableArray(this.original.points[_i4]));
          }

          this.shaddowCtx.closePath();
          this.shaddowCtx.clip();

          if (this.image) {
            this.ctx.drawImage(this.image, 0, 0);
          }

          this.shaddowCtx.fillStyle = "rgba(0,0,0,1)";
          this.shaddowCtx.fill();
        }
      }]);

      return Fragment;
    }();
    /***/

  },

  /***/
  "./src/app/core/components/post-cover/helpers/utils.ts":
  /*!*************************************************************!*\
    !*** ./src/app/core/components/post-cover/helpers/utils.ts ***!
    \*************************************************************/

  /*! exports provided: getTriangleVertices, randomRange, clamp, calculateNewCentroid, translateToOrigin, translateToCornerOrigin */

  /***/
  function srcAppCoreComponentsPostCoverHelpersUtilsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getTriangleVertices", function () {
      return getTriangleVertices;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "randomRange", function () {
      return randomRange;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "clamp", function () {
      return clamp;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "calculateNewCentroid", function () {
      return calculateNewCentroid;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "translateToOrigin", function () {
      return translateToOrigin;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "translateToCornerOrigin", function () {
      return translateToCornerOrigin;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var delaunay_triangulate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! delaunay-triangulate */
    "./node_modules/delaunay-triangulate/triangulate.js");
    /* harmony import */


    var delaunay_triangulate__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(delaunay_triangulate__WEBPACK_IMPORTED_MODULE_1__);

    function getTriangleVertices(w, h) {
      var vertices = [];
      var cx = w / 2;
      var cy = h / 2;
      var rings = [{
        r: 80,
        c: 20
      }, {
        r: w * 0.25 + 80,
        c: 5
      }, {
        r: w * 0.5 + 80,
        c: 8
      }, {
        r: w * 0.6 + 80,
        c: 10
      }, {
        r: w * 0.75 + 80,
        c: 10
      }, {
        r: w * 1 + 80,
        c: 15
      }, {
        r: w * 1.2 + 80,
        c: 10
      }];
      vertices.push([cx, cy]);
      rings.forEach(function (ring) {
        var radius = ring.r;
        var count = ring.c;
        var variance = radius * 0.5;

        for (var i = 0; i < count; i++) {
          var x = Math.cos(i / count * Math.PI * 2) * radius + cx + randomRange(-variance, variance);
          var y = Math.sin(i / count * Math.PI * 2) * radius + cy + randomRange(-variance, variance);
          vertices.push([x, y]);
        }
      });
      vertices.forEach(function (v) {
        v[0] = clamp(v[0], 0, w);
        v[1] = clamp(v[1], 0, h);
      });
      var indices = delaunay_triangulate__WEBPACK_IMPORTED_MODULE_1__(vertices);
      var triangles = [];
      var _iteratorNormalCompletion10 = true;
      var _didIteratorError10 = false;
      var _iteratorError10 = undefined;

      try {
        for (var _iterator10 = indices[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
          var indice = _step10.value;
          triangles.push([vertices[indice[0]], vertices[indice[1]], vertices[indice[2]]]);
        }
      } catch (err) {
        _didIteratorError10 = true;
        _iteratorError10 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion10 && _iterator10.return != null) {
            _iterator10.return();
          }
        } finally {
          if (_didIteratorError10) {
            throw _iteratorError10;
          }
        }
      }

      return triangles;
    }

    function randomRange(min, max) {
      return min + (max - min) * Math.random();
    }

    function clamp(x, min, max) {
      return x < min ? min : x > max ? max : x;
    }

    function calculateNewCentroid(cx, cy) {
      var dx = cx - 0;
      var dy = cy - 0;
      var distance = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
      var radians = Math.atan2(dy, dx);
      var angle = radians * 180 / Math.PI;
      var theta = angle * Math.PI / 180;
      var extension = randomRange(1.20, 1.35);

      if (distance < 20) {
        extension += 5;
      } else if (distance < 50) {
        extension += 1.5;
      } else if (distance < 100) {
        extension += 0.7;
      } else if (distance < 200) {
        extension += 0.25;
      } else if (distance < 300) {
        extension += 0.0625;
      }

      var x = distance * extension * Math.cos(theta);
      var y = distance * extension * Math.sin(theta);
      return {
        x: x,
        y: y
      };
    }

    function translateToOrigin(x, y, ox, oy) {
      return {
        x: x - ox,
        y: y - oy
      };
    }

    function translateToCornerOrigin(x, y, ox, oy) {
      return {
        x: x + ox,
        y: y + oy
      };
    }
    /***/

  },

  /***/
  "./src/app/core/components/post-cover/post-cover.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/core/components/post-cover/post-cover.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreComponentsPostCoverPostCoverComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-perspective: 70px;\n          perspective: 70px;\n}\n:host #coverContainer, :host #image, :host #shatterContainer, :host #textSpan {\n  position: absolute;\n}\n:host #coverContainer {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  padding: 150px;\n}\n:host #coverContainer #imageRef {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n:host #coverContainer #shatterContainer {\n  position: absolute;\n  top: 0;\n  left: 0;\n  left: 150px;\n  right: 150px;\n  top: 150px;\n  bottom: 150px;\n}\n:host #coverContainer #shatterContainer #textSpan {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  font-size: 27px;\n  font-weight: bold;\n  text-transform: uppercase;\n  font-family: \"Montserrat Subrayada\", sans-serif;\n  left: 52%;\n  cursor: pointer;\n  pointer-events: all;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  opacity: 0;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL3Bvc3QtY292ZXIvQzpcXFVzZXJzXFxMaW5hIFJhZ2F1c2thaXRlXFxEZXNrdG9wXFxwcm9qZWN0c1xccG9ydGZvbGlvXFxhcHAvc3JjXFxhcHBcXGNvcmVcXGNvbXBvbmVudHNcXHBvc3QtY292ZXJcXHBvc3QtY292ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9wb3N0LWNvdmVyL0M6XFxVc2Vyc1xcTGluYSBSYWdhdXNrYWl0ZVxcRGVza3RvcFxccHJvamVjdHNcXHBvcnRmb2xpb1xcYXBwL3NyY1xcYXBwXFxzdHlsZXNcXGFic3RyYWN0c1xcbWl4aW5zLnNjc3MiLCJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9wb3N0LWNvdmVyL3Bvc3QtY292ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9wb3N0LWNvdmVyL0M6XFxVc2Vyc1xcTGluYSBSYWdhdXNrYWl0ZVxcRGVza3RvcFxccHJvamVjdHNcXHBvcnRmb2xpb1xcYXBwL3NyY1xcYXBwXFxzdHlsZXNcXGFic3RyYWN0c1xcdHlwb2dyYXBoeS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VDOERFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUZzQztVQUV0Qyx1QkFGc0M7RUFHdEMseUJBSHNEO1VBR3RELG1CQUhzRDtFQUl0RCw4QkFKdUI7RUFJdkIsNkJBSnVCO1VBSXZCLG1CQUp1QjtFRDNEdkIseUJBQUE7VUFBQSxpQkFBQTtBRUVGO0FGQ0U7RUFDRSxrQkFBQTtBRUNKO0FGRUU7RUNRQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBV0UsUUFBQTtFQVdBLFNBQUE7RUQ5QkEsWUFBQTtFQUNBLGNBVE87QUVhWDtBRkZJO0VDR0Ysa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQVdFLFFBQUE7RUFXQSxTQUFBO0FDbEJKO0FGTEk7RUNERixrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBT0ksV0R2Qks7RUN3QkwsWUR4Qks7RUNrQ0wsVURsQ0s7RUNtQ0wsYURuQ0s7QUU2Qlg7QUZYTTtFQ3BCSixrQkFBQTtFQUdFLFNBQUE7RUFDQSxRQUFBO0VBQ0Esd0NBQUE7VUFBQSxnQ0FBQTtFRVBGLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsK0NBQUE7RUhzQk0sU0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FFbUJSIiwiZmlsZSI6InNyYy9hcHAvY29yZS9jb21wb25lbnRzL3Bvc3QtY292ZXIvcG9zdC1jb3Zlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ2Fic3RyYWN0cyc7XHJcblxyXG46aG9zdCB7XHJcbiAgQGluY2x1ZGUgZmxleDtcclxuICBwZXJzcGVjdGl2ZTogNzBweDtcclxuICAkbWFyZ2luOiAxNTBweDtcclxuXHJcbiAgI2NvdmVyQ29udGFpbmVyLCAjaW1hZ2UsICNzaGF0dGVyQ29udGFpbmVyLCAjdGV4dFNwYW4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxuXHJcbiAgI2NvdmVyQ29udGFpbmVyIHtcclxuICAgIEBpbmNsdWRlIGFic29sdXRlLWZpbGw7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nOiAkbWFyZ2luO1xyXG5cclxuICAgICNpbWFnZVJlZiB7XHJcbiAgICAgIEBpbmNsdWRlIGFic29sdXRlLWZpbGw7XHJcbiAgICB9XHJcblxyXG4gICAgI3NoYXR0ZXJDb250YWluZXIge1xyXG4gICAgICBAaW5jbHVkZSBhYnNvbHV0ZS1maWxsKCRtYXJnaW4sICRtYXJnaW4sICdlZGdlJyk7XHJcblxyXG4gICAgICAjdGV4dFNwYW4ge1xyXG4gICAgICAgIEBpbmNsdWRlIGFic29sdXRlLWNlbnRyZSh0cnVlLCB0cnVlKTtcclxuICAgICAgICBAaW5jbHVkZSBmb250LWRlY29yYXRpb247XHJcbiAgICAgICAgbGVmdDogNTIlO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBwb2ludGVyLWV2ZW50czogYWxsO1xyXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIkBpbXBvcnQgJy4vZnVuY3Rpb25zJztcclxuXHJcbkBtaXhpbiBhYnNvbHV0ZS1jZW50cmUgKCRob3Jpem9udGFsOiB0cnVlLCAkdmVydGljYWw6IHRydWUpIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gIEBpZiAkdmVydGljYWwgYW5kICRob3Jpem9udGFsIHtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgfSBAZWxzZSBpZiAkaG9yaXpvbnRhbCB7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgfSBAZWxzZSBpZiAkdmVydGljYWwge1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gYWJzb2x1dGUtZmlsbCAoJHdpZHRoOiBudWxsLCAkaGVpZ2h0OiBudWxsLCAkdHlwZTogJ3NpemUnKSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG5cclxuXHJcbiAgQGlmICR3aWR0aCAhPSBudWxsIHtcclxuICAgIEBpZiAkdHlwZSA9PSAnc2l6ZScge1xyXG4gICAgICB3aWR0aDogJHdpZHRoO1xyXG4gICAgfSBAZWxzZSBpZiAkdHlwZSA9PSAnZWRnZScge1xyXG4gICAgICBsZWZ0OiAkd2lkdGg7XHJcbiAgICAgIHJpZ2h0OiAkd2lkdGg7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSB7XHJcbiAgICByaWdodDogMDtcclxuICB9XHJcblxyXG4gIEBpZiAkaGVpZ2h0ICE9IG51bGwge1xyXG4gICAgQGlmICR0eXBlID09ICdzaXplJyB7XHJcbiAgICAgIGhlaWdodDogJGhlaWdodDtcclxuICAgIH0gQGVsc2UgaWYgJHR5cGUgPT0gJ2VkZ2UnIHtcclxuICAgICAgdG9wOiAkaGVpZ2h0O1xyXG4gICAgICBib3R0b206ICRoZWlnaHQ7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBib3R0b206IDA7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gbWF0LWljb24gKCRzaXplLCAkY2xhc3M6IHRydWUpIHtcclxuICBAaWYgKCRjbGFzcykge1xyXG4gICAgbWF0LWljb24ge1xyXG4gICAgICBmb250LXNpemU6ICRzaXplO1xyXG4gICAgICB3aWR0aDogJHNpemU7XHJcbiAgICAgIGhlaWdodDogJHNpemU7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAkc2l6ZTtcclxuICAgIH1cclxuICB9IEBlbHNlIHtcclxuICAgIGZvbnQtc2l6ZTogJHNpemU7XHJcbiAgICB3aWR0aDogJHNpemU7XHJcbiAgICBoZWlnaHQ6ICRzaXplO1xyXG4gICAgbGluZS1oZWlnaHQ6ICRzaXplO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGZsZXggKCRkaXJlY3Rpb246IHJvdywgJGp1c3RpZnk6IGNlbnRlciwgJGFsaWduOiBjZW50ZXIpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XHJcbiAgYWxpZ24taXRlbXM6ICRhbGlnbjtcclxuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcclxufVxyXG5cclxuLy8gRmxleCBsYXlvdXRcclxuQG1peGluIGZ4RmxleCAoJGRpcmVjdGlvbiwgJGdhcDogbnVsbCwgJGp1c3RpZnk6IGNlbnRlciwgJGFsaWduOiBjZW50ZXIpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xyXG4gIGFsaWduLWl0ZW1zOiAkYWxpZ247XHJcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcclxuXHJcbiAgQGlmICgkZ2FwKSB7XHJcbiAgICA+ICo6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgIEBpZiAoJGRpcmVjdGlvbiA9PSByb3cpIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6ICRnYXA7XHJcbiAgICAgIH0gQGVsc2UgaWYgKCRkaXJlY3Rpb24gPT0gY29sdW1uKSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogJGdhcDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGl0ZW0tc3BhY2UgKCRkaXJlY3Rpb246IHJvdywgJGRpc3RhbmNlOiAyMHB4KSB7XHJcbiAgQGlmICRkaXJlY3Rpb24gPT0gcm93IHtcclxuICAgID4gKjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAkZGlzdGFuY2U7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSBpZiAkZGlyZWN0aW9uID09IGNvbHVtbiB7XHJcbiAgICA+ICo6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206ICRkaXN0YW5jZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgcGVyc3BlY3RpdmU6IDcwcHg7XG59XG46aG9zdCAjY292ZXJDb250YWluZXIsIDpob3N0ICNpbWFnZSwgOmhvc3QgI3NoYXR0ZXJDb250YWluZXIsIDpob3N0ICN0ZXh0U3BhbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbjpob3N0ICNjb3ZlckNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDE1MHB4O1xufVxuOmhvc3QgI2NvdmVyQ29udGFpbmVyICNpbWFnZVJlZiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xufVxuOmhvc3QgI2NvdmVyQ29udGFpbmVyICNzaGF0dGVyQ29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGxlZnQ6IDE1MHB4O1xuICByaWdodDogMTUwcHg7XG4gIHRvcDogMTUwcHg7XG4gIGJvdHRvbTogMTUwcHg7XG59XG46aG9zdCAjY292ZXJDb250YWluZXIgI3NoYXR0ZXJDb250YWluZXIgI3RleHRTcGFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgZm9udC1zaXplOiAyN3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdCBTdWJyYXlhZGFcIiwgc2Fucy1zZXJpZjtcbiAgbGVmdDogNTIlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgb3BhY2l0eTogMDtcbiAgY29sb3I6IHdoaXRlO1xufSIsIkBtaXhpbiBmb250LWRlY29yYXRpb24ge1xyXG4gIGZvbnQtc2l6ZTogMjdweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCBTdWJyYXlhZGEnLCBzYW5zLXNlcmlmO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/core/components/post-cover/post-cover.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/core/components/post-cover/post-cover.component.ts ***!
    \********************************************************************/

  /*! exports provided: PostCoverComponent */

  /***/
  function srcAppCoreComponentsPostCoverPostCoverComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostCoverComponent", function () {
      return PostCoverComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _helpers_fragment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./helpers/fragment */
    "./src/app/core/components/post-cover/helpers/fragment.ts");
    /* harmony import */


    var _helpers_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./helpers/utils */
    "./src/app/core/components/post-cover/helpers/utils.ts");

    var PostCoverComponent = /*#__PURE__*/function () {
      function PostCoverComponent(el) {
        _classCallCheck(this, PostCoverComponent);

        this.el = el;
        this.text = 'Read more';
        this.loaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.fragments = [];
        this.state = 'initial';
        this.updateCounter = 0; // Mouse object used to calculate rotation values
        // for child elements

        this.mouse = {
          _x: 0,
          _y: 0,
          x: 0,
          y: 0,
          updatePosition: function updatePosition(x, y) {
            this.x = x - this._x;
            this.y = (y - this._y) * -1;
          },
          setOrigin: function setOrigin(el) {
            this._x = Math.floor(el.offsetWidth / 2);
            this._y = Math.floor(el.offsetHeight / 2);
          }
        };
      }

      _createClass(PostCoverComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this14 = this;

          // Assign Html element references
          this.textEl = this.textRef.nativeElement;
          this.shatterContainerEl = this.shatterContainerRef.nativeElement;
          this.coverContainerEl = this.coverContainerRef.nativeElement;
          this.imageEl = this.imageRef.nativeElement; // Set requested width x height

          this.el.nativeElement.style.width = "".concat(+this.width + 150 * 2, "px");
          this.el.nativeElement.style.height = "".concat(+this.height + 150 * 2, "px");
          this.coverContainerEl.style.width = "".concat(this.width, "px");
          this.coverContainerEl.style.height = "".concat(this.height, "px"); // Set origin (0, 0) from where mouse position/element rotation
          // will be calculated

          this.mouse.setOrigin(this.coverContainerEl); // Resize image

          this.resizeImage(this.src, {
            w: +this.width,
            h: +this.height
          }).then(function (src) {
            _this14.imageEl.onload = _this14.initializeFragments.bind(_this14);
            _this14.imageEl.src = src;
          }); // Animation shatter trigger

          this.shatterContainerEl.onmouseenter = function (event) {
            _this14.togglePointerEvents(false);

            _this14.setAnimationTimeout(function () {
              return _this14.animateShatter(event.offsetX, event.offsetY);
            });
          }; // Animation reset trigger


          this.coverContainerEl.onmouseleave = function () {
            _this14.setAnimationTimeout(function () {
              _this14.resetShatter();

              _this14.togglePointerEvents(true);
            });
          }; // Animation rotate trigger


          this.coverContainerEl.onmousemove = function (event) {
            if (_this14.shouldUpdateSkew()) {
              // Calculate location on image from position on page
              // as mouse move will trigger on child elements
              // resulting in different offsets
              var rect = _this14.coverContainerEl.getBoundingClientRect();

              _this14.updateSkew(event.pageX - rect.left, event.pageY - rect.top);
            }
          };
        }
      }, {
        key: "setAnimationTimeout",
        value: function setAnimationTimeout(cb) {
          if (this.animateTimeout) clearTimeout(this.animateTimeout);
          this.animateTimeout = setTimeout(cb, 200);
        }
      }, {
        key: "togglePointerEvents",
        value: function togglePointerEvents(on) {
          this.shatterContainerEl.style.pointerEvents = on ? '' : 'none';
          this.imageEl.style.pointerEvents = on ? '' : 'none';
        }
      }, {
        key: "resizeImage",
        value: function resizeImage(source, size) {
          var resizeImg = new Image();
          var resizeCanvas = document.createElement('canvas');
          var resizeCtx = resizeCanvas.getContext('2d');
          return new Promise(function (res, rej) {
            resizeImg.onload = function () {
              // Calculate cropping box
              var original = {
                w: resizeImg.width,
                h: resizeImg.height
              };
              var targetRatio = size.w / size.h;
              var cropBox = {
                w: 0,
                h: 0,
                x: 0,
                y: 0
              };

              if (resizeImg.width > resizeImg.height) {
                cropBox.h = resizeImg.height;
                cropBox.w = targetRatio * cropBox.h;
                cropBox.x = (original.w - cropBox.w) / 2;
              } else {
                cropBox.w = resizeImg.width;
                cropBox.h = cropBox.w / targetRatio;
                cropBox.y = (original.h - cropBox.h) / 2;
              } // Set new canvas size


              resizeCanvas.style.width = "".concat(size.w, "px");
              resizeCanvas.width = size.w;
              resizeCanvas.style.height = "".concat(size.h, "px");
              resizeCanvas.height = size.h; // Crop rectangle from original image element and
              // draw it on the new canvas

              resizeCtx.drawImage(resizeImg, cropBox.x, cropBox.y, cropBox.w, cropBox.h, 0, 0, size.w, size.h);
              res(resizeCanvas.toDataURL());
            };

            resizeImg.src = source;
          });
        }
      }, {
        key: "initializeFragments",
        value: function initializeFragments() {
          var imageBox = {
            x: 0,
            y: 0,
            w: this.imageEl.clientWidth,
            h: this.imageEl.clientHeight
          };
          var cutOutBox = {
            w: this.textEl.clientWidth + 10,
            h: this.textEl.clientHeight + 10
          };
          cutOutBox.x = imageBox.x + (imageBox.w - cutOutBox.w) / 2;
          cutOutBox.y = imageBox.y + (imageBox.h - cutOutBox.h) / 2;
          var triangles = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_3__["getTriangleVertices"])(this.imageEl.clientWidth, this.imageEl.clientHeight);
          var _iteratorNormalCompletion11 = true;
          var _didIteratorError11 = false;
          var _iteratorError11 = undefined;

          try {
            for (var _iterator11 = triangles[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
              var triangle = _step11.value;
              var fragment = new _helpers_fragment__WEBPACK_IMPORTED_MODULE_2__["Fragment"](triangle[0], triangle[1], triangle[2], Object.assign({}, imageBox), Object.assign({}, cutOutBox), this.imageEl);
              if (fragment.invisible) continue;
              this.fragments.push(fragment);
            }
          } catch (err) {
            _didIteratorError11 = true;
            _iteratorError11 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion11 && _iterator11.return != null) {
                _iterator11.return();
              }
            } finally {
              if (_didIteratorError11) {
                throw _iteratorError11;
              }
            }
          }

          this.loaded.emit();
        }
      }, {
        key: "animateShatter",
        value: function animateShatter(x, y) {
          var _this15 = this;

          if (this.state === 'shattered' || this.state === 'shattering') return;
          this.state = 'shattering';
          var _iteratorNormalCompletion12 = true;
          var _didIteratorError12 = false;
          var _iteratorError12 = undefined;

          try {
            for (var _iterator12 = this.fragments[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
              var fragment = _step12.value;
              if (this.state !== 'shattering') return;
              this.shatterContainerEl.appendChild(fragment.fragmentEl);
            }
          } catch (err) {
            _didIteratorError12 = true;
            _iteratorError12 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion12 && _iterator12.return != null) {
                _iterator12.return();
              }
            } finally {
              if (_didIteratorError12) {
                throw _iteratorError12;
              }
            }
          }

          this.imageEl.style.opacity = '0';
          setTimeout(function () {
            if (_this15.state !== 'shattering') return;

            _this15.fragments.forEach(function (f) {
              return f.animate();
            });

            _this15.textEl.style.transition = 'all 0.3s linear';
            setTimeout(function () {
              return _this15.textEl.style.opacity = '0.9';
            }, 200);
            setTimeout(function () {
              if (_this15.state !== 'shattering') return;
              _this15.state = 'shattered';

              _this15.updateSkew(x, y);
            }, 500);
          }, 100);
        }
      }, {
        key: "resetShatter",
        value: function resetShatter() {
          var _this16 = this;

          if (this.state === 'initial' || this.state === 'resetting') return;
          this.state = 'resetting';
          this.coverContainerEl.style.transform = '';
          this.textEl.style.transition = 'all 0.1s linear';
          this.textEl.style.opacity = '0';
          this.fragments.forEach(function (f) {
            return f.reset();
          });
          setTimeout(function () {
            if (_this16.state !== 'resetting') return;
            _this16.imageEl.style.opacity = '1';
          }, 499);
          setTimeout(function () {
            var _iteratorNormalCompletion13 = true;
            var _didIteratorError13 = false;
            var _iteratorError13 = undefined;

            try {
              for (var _iterator13 = _this16.fragments[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
                var fragment = _step13.value;
                if (_this16.state !== 'resetting') return;

                if (Array.from(_this16.shatterContainerEl.childNodes).includes(fragment.fragmentEl)) {
                  _this16.shatterContainerEl.removeChild(fragment.fragmentEl);
                }
              }
            } catch (err) {
              _didIteratorError13 = true;
              _iteratorError13 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion13 && _iterator13.return != null) {
                  _iterator13.return();
                }
              } finally {
                if (_didIteratorError13) {
                  throw _iteratorError13;
                }
              }
            }

            _this16.state = 'initial';
          }, 500);
        }
      }, {
        key: "shouldUpdateSkew",
        value: function shouldUpdateSkew() {
          return this.updateCounter++ % 2 === 0;
        }
      }, {
        key: "updateSkew",
        value: function updateSkew(x, y) {
          if (this.state !== 'shattered') return;
          this.fragments.forEach(function (f) {
            return f.updateSkew(x, y);
          });
          this.mouse.updatePosition(x, y);
          var rotateX = (this.mouse.y / this.coverContainerEl.offsetHeight / 0.5).toFixed(2);
          var rotateY = (this.mouse.x / this.coverContainerEl.offsetWidth / 0.5).toFixed(2);
          this.coverContainerEl.style.transform = "rotateX(".concat(rotateX, "deg) rotateY(").concat(rotateY, "deg)");
        }
      }]);

      return PostCoverComponent;
    }();

    PostCoverComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], PostCoverComponent.prototype, "src", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], PostCoverComponent.prototype, "width", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], PostCoverComponent.prototype, "height", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], PostCoverComponent.prototype, "text", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], PostCoverComponent.prototype, "loaded", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('coverContainer', {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], PostCoverComponent.prototype, "coverContainerRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('imageRef', {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], PostCoverComponent.prototype, "imageRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('shatterContainer', {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], PostCoverComponent.prototype, "shatterContainerRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('textRef', {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], PostCoverComponent.prototype, "textRef", void 0);
    PostCoverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-post-cover',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./post-cover.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/post-cover/post-cover.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./post-cover.component.scss */
      "./src/app/core/components/post-cover/post-cover.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], PostCoverComponent);
    /***/
  },

  /***/
  "./src/app/core/components/progress-button/progress-button.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/core/components/progress-button/progress-button.component.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreComponentsProgressButtonProgressButtonComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: block;\n  position: relative;\n}\n\n.spinner-container {\n  position: absolute;\n  width: 2.5em;\n  height: 2.5em;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  pointer-events: none;\n}\n\n.spinner-container > * {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  display: -webkit-box;\n  display: flex;\n  overflow: visible;\n}\n\n.spinner-container > * > * {\n  margin: auto;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n}\n\n.spinner > * {\n  width: 90%;\n  height: 90%;\n  position: absolute;\n}\n\n.spinner .loader-track {\n  border-width: 7px;\n  border-style: solid;\n  border-color: var(--primary, #522546);\n  opacity: 0.1;\n}\n\n.spinner .loader {\n  -webkit-clip-path: polygon(53% 51%, 0% 100%, 100% 100%);\n          clip-path: polygon(53% 51%, 0% 100%, 100% 100%);\n  border-width: 7px;\n  border-style: solid;\n  border-color: var(--primary, #522546);\n  -webkit-animation: rotate 1.1s infinite linear;\n          animation: rotate 1.1s infinite linear;\n}\n\n@-webkit-keyframes rotate {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes rotate {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\nbutton {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  font-size: 16px;\n  height: 2.5em;\n  min-width: 5em;\n  text-transform: uppercase;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL3Byb2dyZXNzLWJ1dHRvbi9DOlxcVXNlcnNcXExpbmEgUmFnYXVza2FpdGVcXERlc2t0b3BcXHByb2plY3RzXFxwb3J0Zm9saW9cXGFwcC9zcmNcXGFwcFxcY29yZVxcY29tcG9uZW50c1xccHJvZ3Jlc3MtYnV0dG9uXFxwcm9ncmVzcy1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9wcm9ncmVzcy1idXR0b24vcHJvZ3Jlc3MtYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvcHJvZ3Jlc3MtYnV0dG9uL0M6XFxVc2Vyc1xcTGluYSBSYWdhdXNrYWl0ZVxcRGVza3RvcFxccHJvamVjdHNcXHBvcnRmb2xpb1xcYXBwL3NyY1xcYXBwXFxzdHlsZXNcXGFic3RyYWN0c1xcbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUNERjs7QURJQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7RUFDQSxvQkFBQTtBQ0RGOztBREdFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsaUJBQUE7QUNESjs7QURHSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDRE47O0FETUU7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDSEo7O0FETUU7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7RUFDQSxZQUFBO0FDSko7O0FET0U7RUFDRSx1REFBQTtVQUFBLCtDQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFDQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtBQ0xKOztBRFFFO0VBQ0U7SUFDRSwrQkFBQTtJQUNBLHVCQUFBO0VDTko7RURRRTtJQUNFLGlDQUFBO0lBQ0EseUJBQUE7RUNOSjtBQUNGOztBREZFO0VBQ0U7SUFDRSwrQkFBQTtJQUNBLHVCQUFBO0VDTko7RURRRTtJQUNFLGlDQUFBO0lBQ0EseUJBQUE7RUNOSjtBQUNGOztBRFVBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFRVRBLGFBQUE7RUFDQSx1QkFGc0M7RUFHdEMsbUJBSHNEO0VBSXRELDhCQUp1QjtFQUl2Qiw2QkFKdUI7VUFJdkIsbUJBSnVCO0FET3pCIiwiZmlsZSI6InNyYy9hcHAvY29yZS9jb21wb25lbnRzL3Byb2dyZXNzLWJ1dHRvbi9wcm9ncmVzcy1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdhYnN0cmFjdHMnO1xyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnNwaW5uZXItY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDIuNWVtO1xyXG4gIGhlaWdodDogMi41ZW07XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG5cclxuICA+ICoge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcblxyXG4gICAgPiAqIHtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5zcGlubmVyIHtcclxuICA+ICoge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxuXHJcbiAgLmxvYWRlci10cmFjayB7XHJcbiAgICBib3JkZXItd2lkdGg6IDdweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6IGNvbG9yKCdwcmltYXJ5Jyk7XHJcbiAgICBvcGFjaXR5OiAwLjE7XHJcbiAgfVxyXG5cclxuICAubG9hZGVyIHtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbig1MyUgNTElLCAwJSAxMDAlLCAxMDAlIDEwMCUpO1xyXG4gICAgYm9yZGVyLXdpZHRoOiA3cHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBjb2xvcigncHJpbWFyeScpO1xyXG4gICAgYW5pbWF0aW9uOiByb3RhdGUgMS4xcyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgfVxyXG5cclxuICBAa2V5ZnJhbWVzIHJvdGF0ZSB7XHJcbiAgICAwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBoZWlnaHQ6IDIuNWVtO1xyXG4gIG1pbi13aWR0aDogNWVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgQGluY2x1ZGUgZmxleCgpO1xyXG59XHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNwaW5uZXItY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMi41ZW07XG4gIGhlaWdodDogMi41ZW07XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5zcGlubmVyLWNvbnRhaW5lciA+ICoge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG4uc3Bpbm5lci1jb250YWluZXIgPiAqID4gKiB7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uc3Bpbm5lciA+ICoge1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDkwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLnNwaW5uZXIgLmxvYWRlci10cmFjayB7XG4gIGJvcmRlci13aWR0aDogN3B4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnksICM1MjI1NDYpO1xuICBvcGFjaXR5OiAwLjE7XG59XG4uc3Bpbm5lciAubG9hZGVyIHtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDUzJSA1MSUsIDAlIDEwMCUsIDEwMCUgMTAwJSk7XG4gIGJvcmRlci13aWR0aDogN3B4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnksICM1MjI1NDYpO1xuICBhbmltYXRpb246IHJvdGF0ZSAxLjFzIGluZmluaXRlIGxpbmVhcjtcbn1cbkBrZXlmcmFtZXMgcm90YXRlIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cblxuYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgaGVpZ2h0OiAyLjVlbTtcbiAgbWluLXdpZHRoOiA1ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufSIsIkBpbXBvcnQgJy4vZnVuY3Rpb25zJztcclxuXHJcbkBtaXhpbiBhYnNvbHV0ZS1jZW50cmUgKCRob3Jpem9udGFsOiB0cnVlLCAkdmVydGljYWw6IHRydWUpIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gIEBpZiAkdmVydGljYWwgYW5kICRob3Jpem9udGFsIHtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgfSBAZWxzZSBpZiAkaG9yaXpvbnRhbCB7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgfSBAZWxzZSBpZiAkdmVydGljYWwge1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gYWJzb2x1dGUtZmlsbCAoJHdpZHRoOiBudWxsLCAkaGVpZ2h0OiBudWxsLCAkdHlwZTogJ3NpemUnKSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG5cclxuXHJcbiAgQGlmICR3aWR0aCAhPSBudWxsIHtcclxuICAgIEBpZiAkdHlwZSA9PSAnc2l6ZScge1xyXG4gICAgICB3aWR0aDogJHdpZHRoO1xyXG4gICAgfSBAZWxzZSBpZiAkdHlwZSA9PSAnZWRnZScge1xyXG4gICAgICBsZWZ0OiAkd2lkdGg7XHJcbiAgICAgIHJpZ2h0OiAkd2lkdGg7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSB7XHJcbiAgICByaWdodDogMDtcclxuICB9XHJcblxyXG4gIEBpZiAkaGVpZ2h0ICE9IG51bGwge1xyXG4gICAgQGlmICR0eXBlID09ICdzaXplJyB7XHJcbiAgICAgIGhlaWdodDogJGhlaWdodDtcclxuICAgIH0gQGVsc2UgaWYgJHR5cGUgPT0gJ2VkZ2UnIHtcclxuICAgICAgdG9wOiAkaGVpZ2h0O1xyXG4gICAgICBib3R0b206ICRoZWlnaHQ7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBib3R0b206IDA7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gbWF0LWljb24gKCRzaXplLCAkY2xhc3M6IHRydWUpIHtcclxuICBAaWYgKCRjbGFzcykge1xyXG4gICAgbWF0LWljb24ge1xyXG4gICAgICBmb250LXNpemU6ICRzaXplO1xyXG4gICAgICB3aWR0aDogJHNpemU7XHJcbiAgICAgIGhlaWdodDogJHNpemU7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAkc2l6ZTtcclxuICAgIH1cclxuICB9IEBlbHNlIHtcclxuICAgIGZvbnQtc2l6ZTogJHNpemU7XHJcbiAgICB3aWR0aDogJHNpemU7XHJcbiAgICBoZWlnaHQ6ICRzaXplO1xyXG4gICAgbGluZS1oZWlnaHQ6ICRzaXplO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGZsZXggKCRkaXJlY3Rpb246IHJvdywgJGp1c3RpZnk6IGNlbnRlciwgJGFsaWduOiBjZW50ZXIpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XHJcbiAgYWxpZ24taXRlbXM6ICRhbGlnbjtcclxuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcclxufVxyXG5cclxuLy8gRmxleCBsYXlvdXRcclxuQG1peGluIGZ4RmxleCAoJGRpcmVjdGlvbiwgJGdhcDogbnVsbCwgJGp1c3RpZnk6IGNlbnRlciwgJGFsaWduOiBjZW50ZXIpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xyXG4gIGFsaWduLWl0ZW1zOiAkYWxpZ247XHJcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcclxuXHJcbiAgQGlmICgkZ2FwKSB7XHJcbiAgICA+ICo6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgIEBpZiAoJGRpcmVjdGlvbiA9PSByb3cpIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6ICRnYXA7XHJcbiAgICAgIH0gQGVsc2UgaWYgKCRkaXJlY3Rpb24gPT0gY29sdW1uKSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogJGdhcDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGl0ZW0tc3BhY2UgKCRkaXJlY3Rpb246IHJvdywgJGRpc3RhbmNlOiAyMHB4KSB7XHJcbiAgQGlmICRkaXJlY3Rpb24gPT0gcm93IHtcclxuICAgID4gKjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAkZGlzdGFuY2U7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSBpZiAkZGlyZWN0aW9uID09IGNvbHVtbiB7XHJcbiAgICA+ICo6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206ICRkaXN0YW5jZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/core/components/progress-button/progress-button.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/core/components/progress-button/progress-button.component.ts ***!
    \******************************************************************************/

  /*! exports provided: ProgressButtonComponent */

  /***/
  function srcAppCoreComponentsProgressButtonProgressButtonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgressButtonComponent", function () {
      return ProgressButtonComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var ProgressButtonComponent = /*#__PURE__*/function () {
      function ProgressButtonComponent() {
        _classCallCheck(this, ProgressButtonComponent);

        this.hovered = false;
        this.text = 'Submit';
        this.disabled = false;
        this.loading = false;
        this.submit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.valid = true;
      }

      _createClass(ProgressButtonComponent, [{
        key: "mouseEnter",
        value: function mouseEnter() {
          this.hovered = true;
        }
      }, {
        key: "mouseLeave",
        value: function mouseLeave() {
          this.hovered = false;
        }
      }, {
        key: "onClick",
        value: function onClick() {
          if (!this.valid) {
            if (this.form) this.form.markAllAsTouched();
            return;
          }

          if (!this.loading && !this.disabled) {
            this.submit.emit();
          }
        }
      }, {
        key: "state",
        get: function get() {
          return !this.loading ? 'idle' : 'loading';
        }
      }]);

      return ProgressButtonComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ProgressButtonComponent.prototype, "text", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ProgressButtonComponent.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ProgressButtonComponent.prototype, "loading", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ProgressButtonComponent.prototype, "submit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ProgressButtonComponent.prototype, "valid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"])], ProgressButtonComponent.prototype, "form", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseenter'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], ProgressButtonComponent.prototype, "mouseEnter", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseleave'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], ProgressButtonComponent.prototype, "mouseLeave", null);
    ProgressButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-progress-button',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./progress-button.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/progress-button/progress-button.component.html")).default,
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('buttonShrink', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('idle', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        height: '2.5em',
        minWidth: '5em',
        opacity: 1
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('loading', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        height: '2.5em',
        width: '2.5em',
        padding: '0',
        minWidth: '0',
        borderRadius: '50px',
        opacity: 0,
        pointerEvents: 'none'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('idle => loading', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])('@*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animateChild"])(), {
        optional: true
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('170ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        offset: 0,
        height: '2.5em',
        minWidth: '5em',
        opacity: 1
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        offset: 0.99,
        height: '2.5em',
        width: '2.5em',
        padding: '0',
        minWidth: '0',
        borderRadius: '50px'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        offset: 1,
        opacity: 0
      })]))])), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('loading => idle', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])('@*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animateChild"])(), {
        optional: true
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('170ms 100ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        offset: 0,
        opacity: 0
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        offset: 0.01,
        height: '2.5em',
        width: '2.5em',
        padding: '0',
        minWidth: '0',
        borderRadius: '50px'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        offset: 1,
        height: '2.5em',
        minWidth: '5em',
        opacity: 1
      })]))]))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('textFade', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('idle', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: 1
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('loading', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: 0
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('idle => loading', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('70ms')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('loading => idle', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('70ms 100ms')])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('highlight', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('idle => loading', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms 170ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        offset: 0,
        opacity: '0'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        offset: 0.1,
        opacity: '1',
        background: 'rgba(226, 220, 255, 0.9)',
        border: '5px solid rgba(226, 220, 255, 0.9)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        offset: 0.6,
        transform: 'scale(1.6)',
        background: 'transparent',
        border: '1px solid rgba(226, 220, 255, 0.6)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        offset: 1,
        transform: 'scale(2)',
        background: 'transparent',
        border: '0px solid transparent'
      })]))])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('spinnerFade', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('idle', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: 0
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('loading', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: 1
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('idle => loading', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('70ms 170ms')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('loading => idle', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0ms')])])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./progress-button.component.scss */
      "./src/app/core/components/progress-button/progress-button.component.scss")).default]
    })], ProgressButtonComponent);
    /***/
  },

  /***/
  "./src/app/core/components/projects-list/projects-list.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/core/components/projects-list/projects-list.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreComponentsProjectsListProjectsListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.project-block {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  margin-left: -10%;\n  margin-top: -180px;\n}\n\n.project-block.reverse {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n          flex-direction: row-reverse;\n  margin-left: 10%;\n}\n\n.project-block > *:first-child {\n  -webkit-box-flex: 0;\n          flex: 0 0 55%;\n  min-height: 100px;\n}\n\n.project-block > *:last-child {\n  -webkit-box-flex: 0;\n          flex: 0 0 45%;\n  min-height: 100px;\n  padding: 0 20px;\n}\n\n.project-block .summary-wrapper {\n  position: relative;\n  padding-top: 90%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: stretch;\n          align-items: stretch;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.project-block .summary-wrapper > *:not(:last-child) {\n  margin-bottom: 15px;\n}\n\n.project-block .summary-wrapper .summary-content {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.project-block .summary-wrapper .summary-content .read-more {\n  cursor: pointer;\n}\n\n@media screen and (max-width: calc(960px - 1px)) {\n  .project-block {\n    margin-left: 0;\n    margin-top: 0;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: start;\n            justify-content: flex-start;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n  }\n  .project-block.reverse {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    margin-left: 0;\n  }\n  .project-block > *:last-child {\n    margin-top: -14%;\n  }\n  .project-block .summary-wrapper {\n    padding-top: unset;\n  }\n  .project-block .summary-wrapper .summary-content {\n    width: 100%;\n    position: relative;\n  }\n  .project-block > * {\n    -webkit-box-flex: unset;\n            flex: unset;\n    width: 100%;\n  }\n}\n\n.image {\n  padding-top: 120%;\n  width: 100%;\n  position: relative;\n}\n\napp-image-shatter {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL3Byb2plY3RzLWxpc3QvQzpcXFVzZXJzXFxMaW5hIFJhZ2F1c2thaXRlXFxEZXNrdG9wXFxwcm9qZWN0c1xccG9ydGZvbGlvXFxhcHAvc3JjXFxhcHBcXGNvcmVcXGNvbXBvbmVudHNcXHByb2plY3RzLWxpc3RcXHByb2plY3RzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9wcm9qZWN0cy1saXN0L0M6XFxVc2Vyc1xcTGluYSBSYWdhdXNrYWl0ZVxcRGVza3RvcFxccHJvamVjdHNcXHBvcnRmb2xpb1xcYXBwL3NyY1xcYXBwXFxzdHlsZXNcXGFic3RyYWN0c1xcbWl4aW5zLnNjc3MiLCJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9wcm9qZWN0cy1saXN0L3Byb2plY3RzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9wcm9qZWN0cy1saXN0L0M6XFxVc2Vyc1xcTGluYSBSYWdhdXNrYWl0ZVxcRGVza3RvcFxccHJvamVjdHNcXHBvcnRmb2xpb1xcYXBwL3NyY1xcYXBwXFxzdHlsZXNcXGFic3RyYWN0c1xcYnJlYWtwb2ludHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQzhERSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx1QkQ5RHFCO1VDOERyQiwyQkQ5RHFCO0VDK0RyQix5QkQvRGlDO1VDK0RqQyxtQkQvRGlDO0VDZ0VqQyw0QkRoRWE7RUNnRWIsNkJEaEVhO1VDZ0ViLHNCRGhFYTtBRUVmOztBRkNBO0VBQ0UsV0FBQTtFQ3lEQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkR6RG1CO1VDeURuQiw4QkR6RG1CO0VDMERuQix5QkFIc0Q7VUFHdEQsbUJBSHNEO0VBSXRELDhCRDNEYztFQzJEZCw2QkQzRGM7VUMyRGQsbUJEM0RjO0VBQ2QsaUJBQUE7RUFDQSxrQkFBQTtBRUtGOztBRkhFO0VBQ0UsOEJBQUE7RUFBQSw4QkFBQTtVQUFBLDJCQUFBO0VBQ0EsZ0JBQUE7QUVLSjs7QUZESTtFQUNFLG1CQUFBO1VBQUEsYUFBQTtFQUNBLGlCQUFBO0FFR047O0FGQUk7RUFDRSxtQkFBQTtVQUFBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUVFTjs7QUZFRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUNnQ0Ysb0JBQUE7RUFBQSxhQUFBO0VBQ0EsdUJEL0J3QjtVQytCeEIsMkJEL0J3QjtFQ2dDeEIsMEJEaENvQztVQ2dDcEMsb0JEaENvQztFQ2lDcEMsNEJEakNnQjtFQ2lDaEIsNkJEakNnQjtVQ2lDaEIsc0JEakNnQjtBRUVsQjs7QUQwREk7RUFDRSxtQkQ1RDBCO0FFSWhDOztBRkZJO0VDbEJGLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFXRSxRQUFBO0VBV0EsU0FBQTtBQ0dKOztBRk5NO0VBQ0UsZUFBQTtBRVFSOztBQ2ZNO0VINUJOO0lBeUNJLGNBQUE7SUFDQSxhQUFBO0lDZ0JGLG9CQUFBO0lBQUEsYUFBQTtJQUNBLHVCRGZ3QjtZQ2V4QiwyQkRmd0I7SUNnQnhCLHlCQUhzRDtZQUd0RCxtQkFIc0Q7SUFJdEQsNEJEakJnQjtJQ2lCaEIsNkJEakJnQjtZQ2lCaEIsc0JEakJnQjtFRVFoQjtFRlBFO0lBQ0UsNEJBQUE7SUFBQSw2QkFBQTtZQUFBLHNCQUFBO0lBQ0EsY0FBQTtFRVNKO0VGTEk7SUFDRSxnQkFBQTtFRU9OO0VGSEU7SUFDRSxrQkFBQTtFRUtKO0VGSEk7SUFDRSxXQUFBO0lBQ0Esa0JBQUE7RUVLTjtFRkRFO0lBQ0UsdUJBQUE7WUFBQSxXQUFBO0lBQ0EsV0FBQTtFRUdKO0FBQ0Y7O0FGQ0E7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBRUVGOztBRkNBO0VDakVFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFXRSxRQUFBO0VBV0EsU0FBQTtBQ2dESiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9wcm9qZWN0cy1saXN0L3Byb2plY3RzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdhYnN0cmFjdHMnO1xyXG5cclxuOmhvc3Qge1xyXG4gQGluY2x1ZGUgZmxleChjb2x1bW4sIGZsZXgtc3RhcnQsIGNlbnRlcik7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWJsb2NrIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBAaW5jbHVkZSBmbGV4KHJvdywgc3BhY2UtYmV0d2Vlbik7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xMCU7XHJcbiAgbWFyZ2luLXRvcDogLTE4MHB4O1xyXG5cclxuICAmLnJldmVyc2Uge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICB9XHJcblxyXG4gID4gKiB7XHJcbiAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgZmxleDogMCAwIDU1JTtcclxuICAgICAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgZmxleDogMCAwIDQ1JTtcclxuICAgICAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDAgMjBweFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnN1bW1hcnktd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLXRvcDogOTAlO1xyXG5cclxuICAgIEBpbmNsdWRlIGZsZXgoY29sdW1uLCBmbGV4LXN0YXJ0LCBzdHJldGNoKTtcclxuICAgIEBpbmNsdWRlIGl0ZW0tc3BhY2UoY29sdW1uLCAxNXB4KTtcclxuXHJcbiAgICAuc3VtbWFyeS1jb250ZW50IHtcclxuICAgICAgQGluY2x1ZGUgYWJzb2x1dGUtZmlsbDtcclxuXHJcbiAgICAgIC5yZWFkLW1vcmUge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQGluY2x1ZGUgYnJlYWsgKCdsdCcsICdtJykge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG5cclxuICAgIEBpbmNsdWRlIGZsZXgoY29sdW1uLCBmbGV4LXN0YXJ0KTtcclxuICAgICYucmV2ZXJzZSB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgID4gKiB7XHJcbiAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTE0JTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zdW1tYXJ5LXdyYXBwZXIge1xyXG4gICAgICBwYWRkaW5nLXRvcDogdW5zZXQ7XHJcblxyXG4gICAgICAuc3VtbWFyeS1jb250ZW50IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICA+ICoge1xyXG4gICAgICBmbGV4OiB1bnNldDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uaW1hZ2Uge1xyXG4gIHBhZGRpbmctdG9wOiAxMjAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuYXBwLWltYWdlLXNoYXR0ZXIge1xyXG4gIEBpbmNsdWRlIGFic29sdXRlLWZpbGw7XHJcbn1cclxuIiwiQGltcG9ydCAnLi9mdW5jdGlvbnMnO1xyXG5cclxuQG1peGluIGFic29sdXRlLWNlbnRyZSAoJGhvcml6b250YWw6IHRydWUsICR2ZXJ0aWNhbDogdHJ1ZSkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgQGlmICR2ZXJ0aWNhbCBhbmQgJGhvcml6b250YWwge1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB9IEBlbHNlIGlmICRob3Jpem9udGFsIHtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICB9IEBlbHNlIGlmICR2ZXJ0aWNhbCB7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBhYnNvbHV0ZS1maWxsICgkd2lkdGg6IG51bGwsICRoZWlnaHQ6IG51bGwsICR0eXBlOiAnc2l6ZScpIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcblxyXG5cclxuICBAaWYgJHdpZHRoICE9IG51bGwge1xyXG4gICAgQGlmICR0eXBlID09ICdzaXplJyB7XHJcbiAgICAgIHdpZHRoOiAkd2lkdGg7XHJcbiAgICB9IEBlbHNlIGlmICR0eXBlID09ICdlZGdlJyB7XHJcbiAgICAgIGxlZnQ6ICR3aWR0aDtcclxuICAgICAgcmlnaHQ6ICR3aWR0aDtcclxuICAgIH1cclxuICB9IEBlbHNlIHtcclxuICAgIHJpZ2h0OiAwO1xyXG4gIH1cclxuXHJcbiAgQGlmICRoZWlnaHQgIT0gbnVsbCB7XHJcbiAgICBAaWYgJHR5cGUgPT0gJ3NpemUnIHtcclxuICAgICAgaGVpZ2h0OiAkaGVpZ2h0O1xyXG4gICAgfSBAZWxzZSBpZiAkdHlwZSA9PSAnZWRnZScge1xyXG4gICAgICB0b3A6ICRoZWlnaHQ7XHJcbiAgICAgIGJvdHRvbTogJGhlaWdodDtcclxuICAgIH1cclxuICB9IEBlbHNlIHtcclxuICAgIGJvdHRvbTogMDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBtYXQtaWNvbiAoJHNpemUsICRjbGFzczogdHJ1ZSkge1xyXG4gIEBpZiAoJGNsYXNzKSB7XHJcbiAgICBtYXQtaWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogJHNpemU7XHJcbiAgICAgIHdpZHRoOiAkc2l6ZTtcclxuICAgICAgaGVpZ2h0OiAkc2l6ZTtcclxuICAgICAgbGluZS1oZWlnaHQ6ICRzaXplO1xyXG4gICAgfVxyXG4gIH0gQGVsc2Uge1xyXG4gICAgZm9udC1zaXplOiAkc2l6ZTtcclxuICAgIHdpZHRoOiAkc2l6ZTtcclxuICAgIGhlaWdodDogJHNpemU7XHJcbiAgICBsaW5lLWhlaWdodDogJHNpemU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZmxleCAoJGRpcmVjdGlvbjogcm93LCAkanVzdGlmeTogY2VudGVyLCAkYWxpZ246IGNlbnRlcikge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcclxuICBhbGlnbi1pdGVtczogJGFsaWduO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xyXG59XHJcblxyXG4vLyBGbGV4IGxheW91dFxyXG5AbWl4aW4gZnhGbGV4ICgkZGlyZWN0aW9uLCAkZ2FwOiBudWxsLCAkanVzdGlmeTogY2VudGVyLCAkYWxpZ246IGNlbnRlcikge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb247XHJcbiAgYWxpZ24taXRlbXM6ICRhbGlnbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xyXG5cclxuICBAaWYgKCRnYXApIHtcclxuICAgID4gKjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgICAgQGlmICgkZGlyZWN0aW9uID09IHJvdykge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogJGdhcDtcclxuICAgICAgfSBAZWxzZSBpZiAoJGRpcmVjdGlvbiA9PSBjb2x1bW4pIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAkZ2FwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gaXRlbS1zcGFjZSAoJGRpcmVjdGlvbjogcm93LCAkZGlzdGFuY2U6IDIwcHgpIHtcclxuICBAaWYgJGRpcmVjdGlvbiA9PSByb3cge1xyXG4gICAgPiAqOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6ICRkaXN0YW5jZTtcclxuICAgIH1cclxuICB9IEBlbHNlIGlmICRkaXJlY3Rpb24gPT0gY29sdW1uIHtcclxuICAgID4gKjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogJGRpc3RhbmNlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnByb2plY3QtYmxvY2sge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW4tbGVmdDogLTEwJTtcbiAgbWFyZ2luLXRvcDogLTE4MHB4O1xufVxuLnByb2plY3QtYmxvY2sucmV2ZXJzZSB7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cbi5wcm9qZWN0LWJsb2NrID4gKjpmaXJzdC1jaGlsZCB7XG4gIGZsZXg6IDAgMCA1NSU7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xufVxuLnByb2plY3QtYmxvY2sgPiAqOmxhc3QtY2hpbGQge1xuICBmbGV4OiAwIDAgNDUlO1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuLnByb2plY3QtYmxvY2sgLnN1bW1hcnktd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy10b3A6IDkwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5wcm9qZWN0LWJsb2NrIC5zdW1tYXJ5LXdyYXBwZXIgPiAqOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLnByb2plY3QtYmxvY2sgLnN1bW1hcnktd3JhcHBlciAuc3VtbWFyeS1jb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG59XG4ucHJvamVjdC1ibG9jayAuc3VtbWFyeS13cmFwcGVyIC5zdW1tYXJ5LWNvbnRlbnQgLnJlYWQtbW9yZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IGNhbGMoOTYwcHggLSAxcHgpKSB7XG4gIC5wcm9qZWN0LWJsb2NrIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAucHJvamVjdC1ibG9jay5yZXZlcnNlIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG4gIC5wcm9qZWN0LWJsb2NrID4gKjpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tdG9wOiAtMTQlO1xuICB9XG4gIC5wcm9qZWN0LWJsb2NrIC5zdW1tYXJ5LXdyYXBwZXIge1xuICAgIHBhZGRpbmctdG9wOiB1bnNldDtcbiAgfVxuICAucHJvamVjdC1ibG9jayAuc3VtbWFyeS13cmFwcGVyIC5zdW1tYXJ5LWNvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAucHJvamVjdC1ibG9jayA+ICoge1xuICAgIGZsZXg6IHVuc2V0O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi5pbWFnZSB7XG4gIHBhZGRpbmctdG9wOiAxMjAlO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5hcHAtaW1hZ2Utc2hhdHRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xufSIsIlxyXG4vLyAtLS0+IEJyZWFrcG9pbnRzXHJcbiRicmVha3BvaW50czogKFxyXG4gICd4cy1taW4nOiAwcHgsXHJcbiAgJ3hzLW1heCc6IDU5OXB4LFxyXG4gICdzLW1pbic6IDYwMHB4LFxyXG4gICdzLW1heCc6IDk1OXB4LFxyXG4gICdtLW1pbic6IDk2MHB4LFxyXG4gICdtLW1heCc6IDEyNzlweCxcclxuICAnbC1taW4nOiAxMjgwcHgsXHJcbiAgJ2wtbWF4JzogMTkxOXB4LFxyXG4gICd4bC1taW4nOiAxOTIwcHgsXHJcbiAgJ3hsLW1heCc6IDUwMDBweFxyXG4pICFkZWZhdWx0O1xyXG5cclxuLy8geHNcdCdzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSdcclxuLy8gc21cdCdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogOTU5cHgpJ1xyXG4vLyBtZFx0J3NjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpJ1xyXG4vLyBsZ1x0J3NjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSBhbmQgKG1heC13aWR0aDogMTkxOXB4KSdcclxuLy8geGxcdCdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE5MjBweCkgYW5kIChtYXgtd2lkdGg6IDUwMDBweCknXHJcblxyXG4vLyBsdC1zbVx0J3NjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpJ1xyXG4vLyBsdC1tZFx0J3NjcmVlbiBhbmQgKG1heC13aWR0aDogOTU5cHgpJ1xyXG4vLyBsdC1sZ1x0J3NjcmVlbiBhbmQgKG1heC13aWR0aDogMTI3OXB4KSdcclxuLy8gbHQteGxcdCdzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE5MTlweCknXHJcblxyXG4vLyBndC14c1x0J3NjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpJ1xyXG4vLyBndC1zbVx0J3NjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpJ1xyXG4vLyBndC1tZFx0J3NjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSdcclxuLy8gZ3QtbGdcdCdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE5MjBweCknXHJcblxyXG5AbWl4aW4gYnJlYWsoJGx0R3QsICRicmVha3BvaW50KSB7XHJcbiAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJyN7JGJyZWFrcG9pbnR9LW1pbicpIHtcclxuICAgIEBpZiAoJGx0R3QgPT0gJ2x0Jykge1xyXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiBjYWxjKCN7bWFwLWdldCgkYnJlYWtwb2ludHMsICcjeyRicmVha3BvaW50fS1taW4nKX0gLSAxcHgpKSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICAgIH1cclxuICAgIH0gQGVsc2UgaWYgKCRsdEd0ID09ICdndCcpIHtcclxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogY2FsYygje21hcC1nZXQoJGJyZWFrcG9pbnRzLCAnI3skYnJlYWtwb2ludH0tbWF4Jyl9ICsgMXB4KSkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgICB9XHJcbiAgICB9IEBlbHNlIHtcclxuICAgICAgQGVycm9yICdVbnJlY29nbmlzZWQgcGFyYW1ldGVyICN7JGx0R3R9LiBWYWx1ZXMgXFwnZ3RcXCcgYW5kIFxcJ2x0XFwnIGFyZSBhY2NlcHRlZC4nO1xyXG4gICAgfVxyXG4gIH0gQGVsc2Uge1xyXG4gICAgQGVycm9yICdVbnJlY29nbmlzZWQgYnJlYWtwb2ludCAjeyRicmVha3BvaW50fS4gQXZhaWxhYmxlIGJyZWFrcG9pbnRzIGFyZTogI3ttYXAta2V5cygkYnJlYWtwb2ludHMpfS4nO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGJyZWFrLXByb3AgKCRwcm9wZXJ0eSwgJGJyZWFrLW1hcCkge1xyXG4gIC8vIHhzXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcclxuICAgICN7JHByb3BlcnR5fTogbWFwLWdldCgkYnJlYWstbWFwLCAneHMnKTtcclxuICB9XHJcbiAgLy8gc1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogOTU5cHgpIHtcclxuICAgICN7JHByb3BlcnR5fTogbWFwLWdldCgkYnJlYWstbWFwLCAncycpO1xyXG4gIH1cclxuICAvLyBtXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIHtcclxuICAgICN7JHByb3BlcnR5fTogbWFwLWdldCgkYnJlYWstbWFwLCAnbScpO1xyXG4gIH1cclxuICAvLyBsXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSBhbmQgKG1heC13aWR0aDogMTkxOXB4KSB7XHJcbiAgICAjeyRwcm9wZXJ0eX06IG1hcC1nZXQoJGJyZWFrLW1hcCwgJ2wnKTtcclxuICB9XHJcbiAgLy8geGxcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpIHtcclxuICAgICN7JHByb3BlcnR5fTogbWFwLWdldCgkYnJlYWstbWFwLCAneGwnKTtcclxuICB9XHJcbn1cclxuLy8gPC0tLSBCcmVha3BvaW50c1xyXG5cclxuQG1peGluIGJyZWFrLWZvbnQgKCRzaXplLCAkbWluOiBudWxsLCAkbWF4OiBudWxsKSB7XHJcbiAgQGluY2x1ZGUgYnJlYWstcHJvcCgnZm9udC1zaXplJywgKFxyXG4gICAgJ3hzJzogc25hcCgkc2l6ZSAqIDAuNiwgJG1pbiwgJG1heCksXHJcbiAgICAncyc6IHNuYXAoJHNpemUgKiAwLjgsICRtaW4sICRtYXgpLFxyXG4gICAgJ20nOiAkc2l6ZSxcclxuICAgICdsJzogc25hcCgkc2l6ZSAqIDEuMSwgJG1pbiwgJG1heCksXHJcbiAgICAneGwnOiBzbmFwKCRzaXplICogMS4yLCAkbWluLCAkbWF4KVxyXG4gICkpXHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/core/components/projects-list/projects-list.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/core/components/projects-list/projects-list.component.ts ***!
    \**************************************************************************/

  /*! exports provided: ProjectsListComponent */

  /***/
  function srcAppCoreComponentsProjectsListProjectsListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsListComponent", function () {
      return ProjectsListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _core_services_view_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @core/services/view.service */
    "./src/app/core/services/view.service.ts");
    /* harmony import */


    var _core_services_projects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @core/services/projects.service */
    "./src/app/core/services/projects.service.ts"); // TODO: When there will be more projects, add directive to remove 3js canvases
    // when they are out of view


    var ProjectsListComponent = function ProjectsListComponent(viewService, projectsService) {
      _classCallCheck(this, ProjectsListComponent);

      this.viewService = viewService;
      this.projectsService = projectsService;
      this.renderWhen = 'in-view';
    };

    ProjectsListComponent.ctorParameters = function () {
      return [{
        type: _core_services_view_service__WEBPACK_IMPORTED_MODULE_2__["ViewService"]
      }, {
        type: _core_services_projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)], ProjectsListComponent.prototype, "projects", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ProjectsListComponent.prototype, "renderWhen", void 0);
    ProjectsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-projects-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./projects-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/projects-list/projects-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./projects-list.component.scss */
      "./src/app/core/components/projects-list/projects-list.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_view_service__WEBPACK_IMPORTED_MODULE_2__["ViewService"], _core_services_projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"]])], ProjectsListComponent);
    /***/
  },

  /***/
  "./src/app/core/components/scroll-block/scroll-block.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/core/components/scroll-block/scroll-block.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreComponentsScrollBlockScrollBlockComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: block;\n  position: relative;\n}\n\n.overflow-content {\n  width: 100%;\n  height: 100%;\n  overflow-y: auto;\n}\n\n.overflow-top, .overflow-bottom {\n  height: 30px;\n  width: 100%;\n  position: absolute;\n  pointer-events: none;\n}\n\n.overflow-top {\n  top: -1px;\n  background: -webkit-gradient(linear, left top, left bottom, from(white), to(rgba(255, 255, 255, 0)));\n  background: linear-gradient(to bottom, white, rgba(255, 255, 255, 0));\n}\n\n.overflow-bottom {\n  bottom: -1px;\n  background: -webkit-gradient(linear, left bottom, left top, from(white), to(rgba(255, 255, 255, 0)));\n  background: linear-gradient(to top, white, rgba(255, 255, 255, 0));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL3Njcm9sbC1ibG9jay9DOlxcVXNlcnNcXExpbmEgUmFnYXVza2FpdGVcXERlc2t0b3BcXHByb2plY3RzXFxwb3J0Zm9saW9cXGFwcC9zcmNcXGFwcFxcY29yZVxcY29tcG9uZW50c1xcc2Nyb2xsLWJsb2NrXFxzY3JvbGwtYmxvY2suY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9zY3JvbGwtYmxvY2svc2Nyb2xsLWJsb2NrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FDREY7O0FER0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQUY7O0FESUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNERjs7QURLRTtFQUNFLFNBQUE7RUFDQSxvR0FBQTtFQUFBLHFFQUFBO0FDRko7O0FEUUU7RUFDRSxZQUFBO0VBQ0Esb0dBQUE7RUFBQSxrRUFBQTtBQ05KIiwiZmlsZSI6InNyYy9hcHAvY29yZS9jb21wb25lbnRzL3Njcm9sbC1ibG9jay9zY3JvbGwtYmxvY2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdhYnN0cmFjdHMnO1xyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ub3ZlcmZsb3ctY29udGVudCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcblxyXG4ub3ZlcmZsb3ctdG9wLCAub3ZlcmZsb3ctYm90dG9tIHtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4ub3ZlcmZsb3cge1xyXG4gICYtdG9wIHtcclxuICAgIHRvcDogLTFweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sXHJcbiAgICAgIHdoaXRlLFxyXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDApXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgJi1ib3R0b20ge1xyXG4gICAgYm90dG9tOiAtMXB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCxcclxuICAgICAgd2hpdGUsXHJcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMClcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm92ZXJmbG93LWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4ub3ZlcmZsb3ctdG9wLCAub3ZlcmZsb3ctYm90dG9tIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLm92ZXJmbG93LXRvcCB7XG4gIHRvcDogLTFweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpO1xufVxuLm92ZXJmbG93LWJvdHRvbSB7XG4gIGJvdHRvbTogLTFweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgd2hpdGUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/core/components/scroll-block/scroll-block.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/core/components/scroll-block/scroll-block.component.ts ***!
    \************************************************************************/

  /*! exports provided: ScrollBlockComponent */

  /***/
  function srcAppCoreComponentsScrollBlockScrollBlockComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollBlockComponent", function () {
      return ScrollBlockComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var ScrollBlockComponent = /*#__PURE__*/function () {
      function ScrollBlockComponent() {
        _classCallCheck(this, ScrollBlockComponent);

        this._subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        this.canScrollUp = true;
        this.canScrollDown = true;
      }

      _createClass(ScrollBlockComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this17 = this;

          this._subscriptions.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.scrollElement.nativeElement, 'scroll').subscribe(function () {
            return _this17.recalculateScrollFlags();
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._subscriptions.unsubscribe();
        }
      }, {
        key: "recalculateScrollFlags",
        value: function recalculateScrollFlags() {
          var scroll = this.scrollElement.nativeElement;
          this.canScrollUp = !!scroll.scrollTop;
          this.canScrollDown = scroll.scrollTop + 2 < scroll.scrollHeight - scroll.clientHeight;
        }
      }]);

      return ScrollBlockComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ScrollBlockComponent.prototype, "contentClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scroll', {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], ScrollBlockComponent.prototype, "scrollElement", void 0);
    ScrollBlockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-scroll-block',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./scroll-block.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/scroll-block/scroll-block.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./scroll-block.component.scss */
      "./src/app/core/components/scroll-block/scroll-block.component.scss")).default]
    })], ScrollBlockComponent);
    /***/
  },

  /***/
  "./src/app/core/core.module.ts":
  /*!*************************************!*\
    !*** ./src/app/core/core.module.ts ***!
    \*************************************/

  /*! exports provided: CoreModule */

  /***/
  function srcAppCoreCoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
      return CoreModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _lib_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./lib/material.module */
    "./src/app/core/lib/material.module.ts");
    /* harmony import */


    var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/navbar/navbar.component */
    "./src/app/core/components/navbar/navbar.component.ts");
    /* harmony import */


    var angular_resize_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angular-resize-event */
    "./node_modules/angular-resize-event/fesm2015/angular-resize-event.js");
    /* harmony import */


    var _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/contact-form/contact-form.component */
    "./src/app/core/components/contact-form/contact-form.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _components_progress_button_progress_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/progress-button/progress-button.component */
    "./src/app/core/components/progress-button/progress-button.component.ts");
    /* harmony import */


    var _components_form_overlay_form_overlay_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/form-overlay/form-overlay.component */
    "./src/app/core/components/form-overlay/form-overlay.component.ts");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/core/components/footer/footer.component.ts");
    /* harmony import */


    var _components_arrow_scroll_arrow_scroll_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/arrow-scroll/arrow-scroll.component */
    "./src/app/core/components/arrow-scroll/arrow-scroll.component.ts");
    /* harmony import */


    var _directives_rendered_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./directives/rendered.directive */
    "./src/app/core/directives/rendered.directive.ts");
    /* harmony import */


    var _directives_no_scroll_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./directives/no-scroll.directive */
    "./src/app/core/directives/no-scroll.directive.ts");
    /* harmony import */


    var _components_scroll_block_scroll_block_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/scroll-block/scroll-block.component */
    "./src/app/core/components/scroll-block/scroll-block.component.ts");
    /* harmony import */


    var _directives_track_scroll_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./directives/track-scroll.directive */
    "./src/app/core/directives/track-scroll.directive.ts");
    /* harmony import */


    var _components_projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/projects-list/projects-list.component */
    "./src/app/core/components/projects-list/projects-list.component.ts");
    /* harmony import */


    var _components_post_cover_post_cover_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/post-cover/post-cover.component */
    "./src/app/core/components/post-cover/post-cover.component.ts");
    /* harmony import */


    var _pipes_moment_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./pipes/moment.pipe */
    "./src/app/core/pipes/moment.pipe.ts");
    /* harmony import */


    var _components_image_shatter_image_shatter_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/image-shatter/image-shatter.component */
    "./src/app/core/components/image-shatter/image-shatter.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _directives_in_view_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./directives/in-view.directive */
    "./src/app/core/directives/in-view.directive.ts");

    var CoreModule = function CoreModule() {
      _classCallCheck(this, CoreModule);
    };

    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavBarComponent"], _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_6__["ContactFormComponent"], _components_progress_button_progress_button_component__WEBPACK_IMPORTED_MODULE_8__["ProgressButtonComponent"], _components_form_overlay_form_overlay_component__WEBPACK_IMPORTED_MODULE_9__["FormOverlayComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"], _components_arrow_scroll_arrow_scroll_component__WEBPACK_IMPORTED_MODULE_11__["ArrowScrollComponent"], _directives_rendered_directive__WEBPACK_IMPORTED_MODULE_12__["RenderedDirective"], _directives_no_scroll_directive__WEBPACK_IMPORTED_MODULE_13__["NoScrollDirective"], _components_scroll_block_scroll_block_component__WEBPACK_IMPORTED_MODULE_14__["ScrollBlockComponent"], _directives_track_scroll_directive__WEBPACK_IMPORTED_MODULE_15__["TrackScrollDirective"], _components_projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_16__["ProjectsListComponent"], _components_post_cover_post_cover_component__WEBPACK_IMPORTED_MODULE_17__["PostCoverComponent"], _pipes_moment_pipe__WEBPACK_IMPORTED_MODULE_18__["MomentPipe"], _components_image_shatter_image_shatter_component__WEBPACK_IMPORTED_MODULE_19__["ImageShatterComponent"], _directives_in_view_directive__WEBPACK_IMPORTED_MODULE_21__["InViewDirective"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _lib_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"], angular_resize_event__WEBPACK_IMPORTED_MODULE_5__["AngularResizedEventModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterModule"]],
      exports: [_lib_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavBarComponent"], angular_resize_event__WEBPACK_IMPORTED_MODULE_5__["AngularResizedEventModule"], _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_6__["ContactFormComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _components_progress_button_progress_button_component__WEBPACK_IMPORTED_MODULE_8__["ProgressButtonComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"], _components_arrow_scroll_arrow_scroll_component__WEBPACK_IMPORTED_MODULE_11__["ArrowScrollComponent"], _directives_rendered_directive__WEBPACK_IMPORTED_MODULE_12__["RenderedDirective"], _directives_no_scroll_directive__WEBPACK_IMPORTED_MODULE_13__["NoScrollDirective"], _components_scroll_block_scroll_block_component__WEBPACK_IMPORTED_MODULE_14__["ScrollBlockComponent"], _directives_track_scroll_directive__WEBPACK_IMPORTED_MODULE_15__["TrackScrollDirective"], _components_projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_16__["ProjectsListComponent"], _pipes_moment_pipe__WEBPACK_IMPORTED_MODULE_18__["MomentPipe"], _components_image_shatter_image_shatter_component__WEBPACK_IMPORTED_MODULE_19__["ImageShatterComponent"], _directives_in_view_directive__WEBPACK_IMPORTED_MODULE_21__["InViewDirective"]]
    })], CoreModule);
    /***/
  },

  /***/
  "./src/app/core/directives/in-view.directive.ts":
  /*!******************************************************!*\
    !*** ./src/app/core/directives/in-view.directive.ts ***!
    \******************************************************/

  /*! exports provided: InViewDirective */

  /***/
  function srcAppCoreDirectivesInViewDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InViewDirective", function () {
      return InViewDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var InViewDirective = /*#__PURE__*/function () {
      function InViewDirective(_el) {
        _classCallCheck(this, InViewDirective);

        this._el = _el;
        this._subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        this.inView = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._inView = false;
      }

      _createClass(InViewDirective, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this18 = this;

          this.CheckInView();

          this._subscriptions.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'scroll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(100)).subscribe(function (e) {
            _this18.CheckInView();
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._subscriptions.unsubscribe();
        }
      }, {
        key: "CheckInView",
        value: function CheckInView() {
          var rect = this._el.nativeElement.getBoundingClientRect();

          var rangeOverlap = function rangeOverlap(r1Min, r1Max, r2Min, r2Max) {
            return r1Min <= r2Max && r1Max >= r2Min;
          };

          var inView = rangeOverlap(rect.top, rect.bottom, 0, window.innerHeight) && rangeOverlap(rect.left, rect.right, 0, window.innerWidth);
          if (inView && !this._inView) this.inView.next();
          this._inView = inView;
        }
      }]);

      return InViewDirective;
    }();

    InViewDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('in-view'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], InViewDirective.prototype, "inView", void 0);
    InViewDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[in-view]'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], InViewDirective);
    /***/
  },

  /***/
  "./src/app/core/directives/no-scroll.directive.ts":
  /*!********************************************************!*\
    !*** ./src/app/core/directives/no-scroll.directive.ts ***!
    \********************************************************/

  /*! exports provided: NoScrollDirective */

  /***/
  function srcAppCoreDirectivesNoScrollDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NoScrollDirective", function () {
      return NoScrollDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NoScrollDirective = /*#__PURE__*/function () {
      function NoScrollDirective() {
        _classCallCheck(this, NoScrollDirective);

        this._lastState = document.body.style.overflowY;
      }

      _createClass(NoScrollDirective, [{
        key: "toggleScroll",
        value: function toggleScroll(disable) {
          if (disable && document.body.style.overflowY !== 'hidden') {
            this._lastState = document.body.style.overflowY;
            document.body.style.overflowY = 'hidden';
          } else if (!disable && document.body.style.overflowY === 'hidden') {
            document.body.style.overflowY = this._lastState;
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.toggleScroll(false);
        }
      }, {
        key: "noScroll",
        set: function set(val) {
          this.toggleScroll(val);
        }
      }]);

      return NoScrollDirective;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('no-scroll'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])], NoScrollDirective.prototype, "noScroll", null);
    NoScrollDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[no-scroll]'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], NoScrollDirective);
    /***/
  },

  /***/
  "./src/app/core/directives/rendered.directive.ts":
  /*!*******************************************************!*\
    !*** ./src/app/core/directives/rendered.directive.ts ***!
    \*******************************************************/

  /*! exports provided: RenderedDirective */

  /***/
  function srcAppCoreDirectivesRenderedDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderedDirective", function () {
      return RenderedDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var RenderedDirective = /*#__PURE__*/function () {
      function RenderedDirective() {
        _classCallCheck(this, RenderedDirective);

        this.after = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(RenderedDirective, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this19 = this;

          setTimeout(function () {
            // timeout prevents unexpected change errors
            _this19.after.next(_this19);
          });
        }
      }]);

      return RenderedDirective;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('rendered'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], RenderedDirective.prototype, "after", void 0);
    RenderedDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[rendered]'
    })], RenderedDirective);
    /***/
  },

  /***/
  "./src/app/core/directives/track-scroll.directive.ts":
  /*!***********************************************************!*\
    !*** ./src/app/core/directives/track-scroll.directive.ts ***!
    \***********************************************************/

  /*! exports provided: TrackScrollDirective */

  /***/
  function srcAppCoreDirectivesTrackScrollDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TrackScrollDirective", function () {
      return TrackScrollDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TrackScrollDirective = /*#__PURE__*/function () {
      function TrackScrollDirective(_el) {
        _classCallCheck(this, TrackScrollDirective);

        this._el = _el;
        this.outOfView = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.inView = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(TrackScrollDirective, [{
        key: "track",
        value: function track() {
          var _this$_el$nativeEleme = this._el.nativeElement.getBoundingClientRect(),
              bottom = _this$_el$nativeEleme.bottom,
              top = _this$_el$nativeEleme.top;

          if (top >= 50 && top < window.innerHeight - 50 || bottom >= 50 && bottom < window.innerHeight - 50) {
            if (this._inViewport === undefined) this._inViewport = true;
            if (this._inViewport === true) return;
            this._inViewport = true;
            this.inView.next();
          } else {
            if (this._inViewport === undefined) this._inViewport = false;
            if (this._inViewport === false) return;
            this._inViewport = false;
            this.outOfView.next();
          }
        }
      }]);

      return TrackScrollDirective;
    }();

    TrackScrollDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('out-of-view'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], TrackScrollDirective.prototype, "outOfView", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('in-view'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], TrackScrollDirective.prototype, "inView", void 0);
    TrackScrollDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[track-scroll]',
      host: {
        '(window:scroll)': 'track($event)'
      }
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], TrackScrollDirective);
    /***/
  },

  /***/
  "./src/app/core/lib/material.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/core/lib/material.module.ts ***!
    \*********************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppCoreLibMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/esm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/esm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/esm2015/tabs.js");

    var modules = [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"]];

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: modules,
      exports: modules
    })], MaterialModule);
    /***/
  },

  /***/
  "./src/app/core/model/section.ts":
  /*!***************************************!*\
    !*** ./src/app/core/model/section.ts ***!
    \***************************************/

  /*! exports provided: Section */

  /***/
  function srcAppCoreModelSectionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Section", function () {
      return Section;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Section = {
      intro: 'intro-section',
      experience: 'experience-section',
      contact: 'contact-section',
      featured: 'featured-projects',
      projects: '/projects'
    };
    /***/
  },

  /***/
  "./src/app/core/pipes/moment.pipe.ts":
  /*!*******************************************!*\
    !*** ./src/app/core/pipes/moment.pipe.ts ***!
    \*******************************************/

  /*! exports provided: MomentPipe */

  /***/
  function srcAppCorePipesMomentPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MomentPipe", function () {
      return MomentPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);

    var MomentPipe = /*#__PURE__*/function () {
      function MomentPipe() {
        _classCallCheck(this, MomentPipe);
      }

      _createClass(MomentPipe, [{
        key: "transform",
        value: function transform(value, format) {
          try {
            var formats = format.match(/^(.*)=>(.*)$/);
            if (!formats) throw new Error("Invalid format passed to 'moment' pipe. Only 'moment' date formats are allowed.");
            var from = formats[1] || moment__WEBPACK_IMPORTED_MODULE_2___default.a.ISO_8601;
            if (!formats[2]) throw new Error("Output format must be specified for 'moment' pipe.");
            var to = formats[2];
            return moment__WEBPACK_IMPORTED_MODULE_2___default()(value, from).format(to);
          } catch (error) {
            return value;
          }
        }
      }]);

      return MomentPipe;
    }();

    MomentPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'moment'
    })], MomentPipe);
    /***/
  },

  /***/
  "./src/app/core/route-guards/browser-not-supported.guard.ts":
  /*!******************************************************************!*\
    !*** ./src/app/core/route-guards/browser-not-supported.guard.ts ***!
    \******************************************************************/

  /*! exports provided: BrowserNotSupportedGuard */

  /***/
  function srcAppCoreRouteGuardsBrowserNotSupportedGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BrowserNotSupportedGuard", function () {
      return BrowserNotSupportedGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _core_utils_browser_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @core/utils/browser.util */
    "./src/app/core/utils/browser.util.ts");

    var BrowserNotSupportedGuard = /*#__PURE__*/function () {
      function BrowserNotSupportedGuard(router) {
        _classCallCheck(this, BrowserNotSupportedGuard);

        this.router = router;
      }

      _createClass(BrowserNotSupportedGuard, [{
        key: "canActivate",
        value: function canActivate() {
          if (_core_utils_browser_util__WEBPACK_IMPORTED_MODULE_3__["default"].supported) {
            this.router.navigateByUrl('/');
            return false;
          }

          return true;
        }
      }]);

      return BrowserNotSupportedGuard;
    }();

    BrowserNotSupportedGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    BrowserNotSupportedGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], BrowserNotSupportedGuard);
    /***/
  },

  /***/
  "./src/app/core/route-guards/browser-support.guard.ts":
  /*!************************************************************!*\
    !*** ./src/app/core/route-guards/browser-support.guard.ts ***!
    \************************************************************/

  /*! exports provided: BrowserSupportGuard */

  /***/
  function srcAppCoreRouteGuardsBrowserSupportGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BrowserSupportGuard", function () {
      return BrowserSupportGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _core_utils_browser_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @core/utils/browser.util */
    "./src/app/core/utils/browser.util.ts");

    var BrowserSupportGuard = /*#__PURE__*/function () {
      function BrowserSupportGuard(router) {
        _classCallCheck(this, BrowserSupportGuard);

        this.router = router;
      }

      _createClass(BrowserSupportGuard, [{
        key: "canActivate",
        value: function canActivate() {
          if (!_core_utils_browser_util__WEBPACK_IMPORTED_MODULE_3__["default"].supported) {
            this.router.navigateByUrl('browser-not-supported');
            return false;
          }

          return true;
        }
      }]);

      return BrowserSupportGuard;
    }();

    BrowserSupportGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    BrowserSupportGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], BrowserSupportGuard);
    /***/
  },

  /***/
  "./src/app/core/services/api.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/core/services/api.service.ts ***!
    \**********************************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppCoreServicesApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _prtf_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @prtf/shared */
    "./node_modules/@prtf/shared/dist/index.js");
    /* harmony import */


    var _prtf_shared__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_prtf_shared__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _utils_app_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../utils/app-error */
    "./src/app/core/utils/app-error.ts");

    var ApiService = /*#__PURE__*/function () {
      function ApiService(http) {
        _classCallCheck(this, ApiService);

        this.http = http;
        this.wrapr = new _prtf_shared__WEBPACK_IMPORTED_MODULE_2__["Api"](this);
      }

      _createClass(ApiService, [{
        key: "handleRequest",
        value: function handleRequest(route) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var silent = arguments.length > 2 ? arguments[2] : undefined;
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var url, httpOptions, mapObservable, result;
            return regeneratorRuntime.wrap(function _callee4$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    options = Object.assign({
                      loop: 0
                    }, options);
                    route = Object.assign({
                      endpoint: ''
                    }, route);
                    url = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api).concat(route.endpoint);
                    httpOptions = {};

                    if (options.progressCb) {
                      httpOptions.reportProgress = true;
                      httpOptions.observe = 'events';
                    }

                    mapObservable = function mapObservable(o) {
                      if (httpOptions.reportProgress || options.cancelCb) {
                        return new Promise(function (res, rej) {
                          var sub = o.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(options.loop), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (err) {
                            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(err);
                          })).subscribe(function (event) {
                            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].UploadProgress) {
                              if (options.progressCb) options.progressCb(event);
                            } else if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].Response) {
                              res(event.body && event.body.payload ? event.body.payload : undefined);
                            } else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpErrorResponse"]) {
                              rej(event);
                            }
                          });
                          if (options.cancelCb) options.cancelCb(function () {
                            return !sub.closed && sub.unsubscribe();
                          });
                        });
                      } else {
                        return o.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(options.loop), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (response) {
                          return response && response.data ? response.data : response;
                        })).toPromise();
                      }
                    };

                    _context5.prev = 6;

                    if (!(route.form && route.method === 'post')) {
                      _context5.next = 13;
                      break;
                    }

                    _context5.next = 10;
                    return mapObservable(this.http.post(url, route.form, httpOptions));

                  case 10:
                    result = _context5.sent;
                    _context5.next = 18;
                    break;

                  case 13:
                    httpOptions.body = route.body;
                    if (options.responseType) httpOptions.responseType = options.responseType;
                    _context5.next = 17;
                    return mapObservable(this.http.request(route.method, url, httpOptions));

                  case 17:
                    result = _context5.sent;

                  case 18:
                    return _context5.abrupt("return", result);

                  case 21:
                    _context5.prev = 21;
                    _context5.t0 = _context5["catch"](6);

                    if (_context5.t0 instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpErrorResponse"]) {
                      _context5.next = 28;
                      break;
                    }

                    console.error(_context5.t0);
                    throw new _utils_app_error__WEBPACK_IMPORTED_MODULE_7__["AppError"]('Client side error. Failed to send request to server.');

                  case 28:
                    if (silent) {
                      _context5.next = 32;
                      break;
                    }

                    return _context5.abrupt("return", _context5.t0.status);

                  case 32:
                    _context5.next = 34;
                    return this.handleStatus(_context5.t0.status, new _utils_app_error__WEBPACK_IMPORTED_MODULE_7__["AppError"](_context5.t0.message));

                  case 34:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee4, this, [[6, 21]]);
          }));
        }
      }, {
        key: "handleStatus",
        value: function handleStatus(status, err) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var res;
            return regeneratorRuntime.wrap(function _callee5$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.t0 = status;
                    _context6.next = _context6.t0 === 404 ? 3 : _context6.t0 === 429 ? 4 : _context6.t0 === 0 ? 5 : 10;
                    break;

                  case 3:
                    return _context6.abrupt("break", 10);

                  case 4:
                    return _context6.abrupt("break", 10);

                  case 5:
                    _context6.next = 7;
                    return this.handleRequest(this.wrapr.Root().ping(), undefined, true);

                  case 7:
                    res = _context6.sent;

                    if (!(res === 0)) {
                      _context6.next = 10;
                      break;
                    }

                    throw new _utils_app_error__WEBPACK_IMPORTED_MODULE_7__["AppError"]("Server is down.");

                  case 10:
                    throw err;

                  case 11:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }]);

      return ApiService;
    }();

    ApiService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], ApiService);
    /***/
  },

  /***/
  "./src/app/core/services/navbar.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/core/services/navbar.service.ts ***!
    \*************************************************/

  /*! exports provided: NavBarService */

  /***/
  function srcAppCoreServicesNavbarServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavBarService", function () {
      return NavBarService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _core_model_section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @core/model/section */
    "./src/app/core/model/section.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var NavBarService = /*#__PURE__*/function () {
      function NavBarService(_router) {
        var _this20 = this;

        _classCallCheck(this, NavBarService);

        this._router = _router;
        this.currentTitle = 'Home';
        this.currentRoute = '/';

        this._router.events.subscribe(function (e) {
          if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
            _this20.currentRoute = e.url;

            _this20.UpdateActiveSection();
          }
        });

        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(window, 'scroll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["auditTime"])(500)).subscribe(function () {
          return _this20.UpdateActiveSection();
        });
      }

      _createClass(NavBarService, [{
        key: "UpdateActiveSection",
        value: function UpdateActiveSection() {
          for (var _i5 = 0, _Object$keys = Object.keys(_core_model_section__WEBPACK_IMPORTED_MODULE_2__["Section"]); _i5 < _Object$keys.length; _i5++) {
            var key = _Object$keys[_i5];
            var section = _core_model_section__WEBPACK_IMPORTED_MODULE_2__["Section"][key];

            if (this.currentRoute !== '/') {
              if (section.startsWith('/') && this.currentRoute === section) {
                this.activeSection = key;
                return;
              }

              continue;
            }

            var el = document.getElementById(section);
            if (!el) continue;
            var rect = el.getBoundingClientRect();

            var rangeOverlap = function rangeOverlap(r1Min, r1Max, r2Min, r2Max) {
              return r1Min <= r2Max && r1Max >= r2Min;
            };

            var inViewCheckpoint = Math.round(window.innerHeight * 0.49);
            var inView = rangeOverlap(rect.top, rect.bottom, inViewCheckpoint, inViewCheckpoint + 1) && rangeOverlap(rect.left, rect.right, 0, window.innerWidth);

            if (inView) {
              this.activeSection = key;
              return;
            }
          }

          if (this.currentRoute === '/' && !this.activeSection) this.activeSection = 'intro';
        }
      }, {
        key: "goTo",
        value: function goTo(section) {
          if (!section) {
            document.scrollingElement.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
            return;
          }

          if (section.startsWith('/')) {
            var sub = this._router.events.subscribe(function (e) {
              if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"] && e.url === section) {
                sub.unsubscribe();
                document.scrollingElement.scrollTop = 0;
              }
            });

            this._router.navigate([section]);

            return;
          }

          this.ScrollToHomeSection(section, 0);
        }
      }, {
        key: "ScrollToHomeSection",
        value: function ScrollToHomeSection(section) {
          var _this21 = this;

          var attempts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

          if (this.currentRoute !== '/') {
            var sub = this._router.events.subscribe(function (e) {
              if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"] && e.url === '/') {
                sub.unsubscribe();
                document.scrollingElement.scrollTop = 0;
                setTimeout(function () {
                  return _this21.ScrollToHomeSection(section);
                }, 100);
              }
            });

            this._router.navigate(['/']);

            return;
          }

          if (section === _core_model_section__WEBPACK_IMPORTED_MODULE_2__["Section"].intro) {
            document.scrollingElement.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
            return;
          }

          var el = document.getElementById(section);

          if (section && !el) {
            if (attempts > 5) return;
            attempts++;
            setTimeout(function () {
              return _this21.ScrollToHomeSection(section, attempts);
            }, 100);
            return;
          }

          var _this$relativeBoundin = this.relativeBoundingClientRect(el, document.scrollingElement),
              top = _this$relativeBoundin.top;

          var target = this.AdjustByHeader(top);
          document.scrollingElement.scrollTo({
            top: target,
            behavior: 'smooth'
          });
        }
      }, {
        key: "AdjustByHeader",
        value: function AdjustByHeader(value) {
          return value - 50 - Math.max(0, 50 - document.scrollingElement.scrollTop);
        }
      }, {
        key: "relativeBoundingClientRect",
        value: function relativeBoundingClientRect(child, parent) {
          var parentPos = parent.getBoundingClientRect();
          var childPos = child.getBoundingClientRect();
          var relativePos = {};
          relativePos.top = childPos.top - parentPos.top, relativePos.right = childPos.right - parentPos.right, relativePos.bottom = childPos.bottom - parentPos.bottom, relativePos.left = childPos.left - parentPos.left;
          var padding = (window.innerHeight - 50 - childPos.height) / 2;

          if (padding > 0) {
            relativePos.top -= padding;
            relativePos.bottom += padding;
          }

          return relativePos;
        }
      }]);

      return NavBarService;
    }();

    NavBarService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    NavBarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], NavBarService);
    /***/
  },

  /***/
  "./src/app/core/services/projects.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/core/services/projects.service.ts ***!
    \***************************************************/

  /*! exports provided: ProjectsService */

  /***/
  function srcAppCoreServicesProjectsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsService", function () {
      return ProjectsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ProjectsService = /*#__PURE__*/function () {
      function ProjectsService(_http, _router) {
        var _this22 = this;

        _classCallCheck(this, ProjectsService);

        this._http = _http;
        this._router = _router;
        this.projects = [];
        this.featuredProjects = [];

        this._http.get('assets/projects/projects.json').subscribe(function (json) {
          _this22.projects = json.filter(function (x) {
            return !x.hidden;
          });
          _this22.featuredProjects = _this22.projects.filter(function (x) {
            return x.featured;
          });
        });
      }

      _createClass(ProjectsService, [{
        key: "viewProject",
        value: function viewProject(project) {
          this._router.navigate(['projects', project.tag]);
        }
      }, {
        key: "hasProjectsPage",
        get: function get() {
          return this.projects > this.featuredProjects;
        }
      }]);

      return ProjectsService;
    }();

    ProjectsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    ProjectsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], ProjectsService);
    /***/
  },

  /***/
  "./src/app/core/services/view.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/core/services/view.service.ts ***!
    \***********************************************/

  /*! exports provided: ViewService */

  /***/
  function srcAppCoreServicesViewServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewService", function () {
      return ViewService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ViewService = /*#__PURE__*/function () {
      function ViewService() {
        var _this23 = this;

        _classCallCheck(this, ViewService);

        this.calculateType(false);
        this._viewModeChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this._viewMode);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'resize').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(100)).subscribe(function () {
          return _this23.calculateType();
        });
      }

      _createClass(ViewService, [{
        key: "calculateType",
        value: function calculateType() {
          var emit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          this._viewMode = window.innerWidth < 960 ? 'mobile' : window.innerWidth < 1280 ? 'tablet' : 'desktop';
          if (emit) this._viewModeChange.next(this._viewMode);
        }
      }, {
        key: "mobile",
        get: function get() {
          return this._viewMode === 'mobile';
        }
      }, {
        key: "tablet",
        get: function get() {
          return this._viewMode === 'tablet';
        }
      }, {
        key: "viewModeChange",
        get: function get() {
          return this._viewModeChange.asObservable();
        }
      }]);

      return ViewService;
    }();

    ViewService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ViewService);
    /***/
  },

  /***/
  "./src/app/core/utils/app-error.ts":
  /*!*****************************************!*\
    !*** ./src/app/core/utils/app-error.ts ***!
    \*****************************************/

  /*! exports provided: AppError, handleError */

  /***/
  function srcAppCoreUtilsAppErrorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppError", function () {
      return AppError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "handleError", function () {
      return handleError;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var AppError = /*#__PURE__*/function (_Error) {
      _inherits(AppError, _Error);

      function AppError(message) {
        var _this24;

        var silent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

        _classCallCheck(this, AppError);

        _this24 = _possibleConstructorReturn(this, _getPrototypeOf(AppError).call(this));
        _this24.message = message;
        _this24.silent = silent;

        _this24.setContext = function (data) {
          _this24.context = data;
        };

        Error.captureStackTrace(_assertThisInitialized(_this24), _this24.constructor);
        _this24.name = _this24.constructor.name;
        return _this24;
      }

      return AppError;
    }( /*#__PURE__*/_wrapNativeSuper(Error));

    function handleError(e, ctx) {
      if (!(e instanceof AppError) || !e.silent) console.error(e);
    }
    /***/

  },

  /***/
  "./src/app/core/utils/browser.util.ts":
  /*!********************************************!*\
    !*** ./src/app/core/utils/browser.util.ts ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreUtilsBrowserUtilTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var bowser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! bowser */
    "./node_modules/bowser/es5.js");
    /* harmony import */


    var bowser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bowser__WEBPACK_IMPORTED_MODULE_1__);

    var Browser;

    (function (Browser) {
      Browser["Chrome"] = "Chrome";
      Browser["Brave"] = "Brave";
      Browser["Edge"] = "Edge";
      Browser["EdgeC"] = "Edge (Chromium)";
      Browser["Opera"] = "Opera";
      Browser["Firefox"] = "Firefox";
      Browser["Safari"] = "Safari";
      Browser["IE"] = "IE";
    })(Browser || (Browser = {}));

    var BrowserUtil = /*#__PURE__*/function () {
      function BrowserUtil() {
        var _this25 = this;

        _classCallCheck(this, BrowserUtil);

        this.logos = 'assets/icons/browsers';
        this.browsers = [{
          name: Browser.Firefox,
          // Performance issues
          supported: false,
          src: "".concat(this.logos, "/firefox.svg"),
          href: 'https://www.mozilla.org/en-GB/firefox/new/'
        }, {
          name: Browser.Chrome,
          supported: true,
          src: "".concat(this.logos, "/chrome.svg"),
          href: 'https://www.google.com/chrome/'
        }, {
          name: Browser.Brave,
          supported: true,
          src: "".concat(this.logos, "/brave.svg"),
          href: 'https://brave.com/xsc238'
        }, {
          name: Browser.Safari,
          supported: true,
          src: "".concat(this.logos, "/safari.svg"),
          href: 'https://www.apple.com/uk/safari/'
        }, {
          name: Browser.Edge,
          supported: false,
          src: "".concat(this.logos, "/edge.svg")
        }, {
          name: Browser.EdgeC,
          supported: true,
          src: "".concat(this.logos, "/edge-chromium.svg"),
          href: 'https://www.microsoft.com/en-us/edge'
        }, {
          name: Browser.Opera,
          supported: true,
          src: "".concat(this.logos, "/opera.svg"),
          href: 'https://www.opera.com/'
        }, {
          name: Browser.IE,
          supported: false,
          src: "".concat(this.logos, "/ie.svg")
        }];
        this.browserName = this.formatName(bowser__WEBPACK_IMPORTED_MODULE_1___default.a.getParser(window.navigator.userAgent).getBrowserName());
        this.supported = !!this.browsers.find(function (x) {
          return x.name === _this25.browserName && x.supported;
        });
      }

      _createClass(BrowserUtil, [{
        key: "formatName",
        value: function formatName(name) {
          name = name.toLowerCase();

          if (name.includes('chrome')) {
            return Browser.Chrome;
          } else if (window.navigator.userAgent.toLowerCase().includes('edg/')) {
            return Browser.EdgeC;
          } else if (name.includes('edge')) {
            return Browser.Edge;
          } else if (name.includes('opera')) {
            return Browser.Opera;
          } else if (name.includes('firefox')) {
            return Browser.Firefox;
          } else if (name.includes('safari')) {
            return Browser.Safari;
          } else if (name.includes('explorer')) {
            return Browser.IE;
          }
        }
      }, {
        key: "isSafari",
        get: function get() {
          return this.browserName === Browser.Safari;
        }
      }, {
        key: "isFirefox",
        get: function get() {
          return this.browserName === Browser.Firefox;
        }
      }]);

      return BrowserUtil;
    }();
    /* harmony default export */


    __webpack_exports__["default"] = new BrowserUtil();
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var environment = {
      production: false,
      api: 'http://localhost:3000'
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])(); // Inject google tag manager

      var script = document.getElementById('google-tag-manager');
      script.innerHTML = "\n  (function (w, d, s, l, i) {\n    w[l] = w[l] || [];\n    w[l].push({\n      'gtm.start': new Date().getTime(),\n      event: 'gtm.js'\n    });\n    var f = d.getElementsByTagName(s)[0],\n      j = d.createElement(s),\n      dl = l != 'dataLayer' ? '&l=' + l : '';\n    j.async = true;\n    j.src =\n      'https://www.googletagmanager.com/gtm.js?id=' + i + dl;\n    f.parentNode.insertBefore(j, f);\n  })(window, document, 'script', 'dataLayer', 'GTM-TMC73JJ');\n  ";
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Lina Ragauskaite\Desktop\projects\portfolio\app\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map