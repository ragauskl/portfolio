(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-error-error-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/error/forbidden/forbidden.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/error/forbidden/forbidden.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  forbidden works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/error/not-found/not-found.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/error/not-found/not-found.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  not-found works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/error/server-error/server-error.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/error/server-error/server-error.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  server-error works!\n</p>\n");

/***/ }),

/***/ "./src/app/modules/error/error.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/error/error.module.ts ***!
  \***********************************************/
/*! exports provided: ErrorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorModule", function() { return ErrorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _server_error_server_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./server-error/server-error.component */ "./src/app/modules/error/server-error/server-error.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/modules/error/not-found/not-found.component.ts");
/* harmony import */ var _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forbidden/forbidden.component */ "./src/app/modules/error/forbidden/forbidden.component.ts");
/* harmony import */ var _error_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error.routing */ "./src/app/modules/error/error.routing.ts");







let ErrorModule = class ErrorModule {
};
ErrorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_3__["ServerErrorComponent"], _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"], _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_5__["ForbiddenComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _error_routing__WEBPACK_IMPORTED_MODULE_6__["ErrorRoutingModule"]
        ]
    })
], ErrorModule);



/***/ }),

/***/ "./src/app/modules/error/error.routing.ts":
/*!************************************************!*\
  !*** ./src/app/modules/error/error.routing.ts ***!
  \************************************************/
/*! exports provided: ErrorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorRoutingModule", function() { return ErrorRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _server_error_server_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./server-error/server-error.component */ "./src/app/modules/error/server-error/server-error.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/modules/error/not-found/not-found.component.ts");
/* harmony import */ var _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forbidden/forbidden.component */ "./src/app/modules/error/forbidden/forbidden.component.ts");






const routes = [
    { path: '', component: _server_error_server_error_component__WEBPACK_IMPORTED_MODULE_3__["ServerErrorComponent"] },
    { path: '404', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"] },
    { path: '403', component: _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_5__["ForbiddenComponent"] }
];
let ErrorRoutingModule = class ErrorRoutingModule {
};
ErrorRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ErrorRoutingModule);



/***/ }),

/***/ "./src/app/modules/error/forbidden/forbidden.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/modules/error/forbidden/forbidden.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZXJyb3IvZm9yYmlkZGVuL2ZvcmJpZGRlbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/error/forbidden/forbidden.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/error/forbidden/forbidden.component.ts ***!
  \****************************************************************/
/*! exports provided: ForbiddenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForbiddenComponent", function() { return ForbiddenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ForbiddenComponent = class ForbiddenComponent {
};
ForbiddenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forbidden',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forbidden.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/error/forbidden/forbidden.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forbidden.component.scss */ "./src/app/modules/error/forbidden/forbidden.component.scss")).default]
    })
], ForbiddenComponent);



/***/ }),

/***/ "./src/app/modules/error/not-found/not-found.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/modules/error/not-found/not-found.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZXJyb3Ivbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/error/not-found/not-found.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/error/not-found/not-found.component.ts ***!
  \****************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotFoundComponent = class NotFoundComponent {
};
NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-not-found',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/error/not-found/not-found.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./not-found.component.scss */ "./src/app/modules/error/not-found/not-found.component.scss")).default]
    })
], NotFoundComponent);



/***/ }),

/***/ "./src/app/modules/error/server-error/server-error.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/modules/error/server-error/server-error.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZXJyb3Ivc2VydmVyLWVycm9yL3NlcnZlci1lcnJvci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/error/server-error/server-error.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/error/server-error/server-error.component.ts ***!
  \**********************************************************************/
/*! exports provided: ServerErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerErrorComponent", function() { return ServerErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ServerErrorComponent = class ServerErrorComponent {
};
ServerErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-server-error',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./server-error.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/error/server-error/server-error.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./server-error.component.scss */ "./src/app/modules/error/server-error/server-error.component.scss")).default]
    })
], ServerErrorComponent);



/***/ })

}]);
//# sourceMappingURL=modules-error-error-module-es2015.js.map