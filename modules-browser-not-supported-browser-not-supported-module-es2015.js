(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-browser-not-supported-browser-not-supported-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/browser-not-supported/browser-not-supported.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/browser-not-supported/browser-not-supported.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"support\">\n  <span>Uh oh! The browser <span class=\"highlight\">{{current ? '(' + current + ')' : ''}}</span> you are using is not supported due to poor performance.</span>\n  <span>Browser Support</span>\n\n  <div id=\"browsers\">\n\n    <a class=\"browser\" *ngFor=\"let browser of browsers\" [class.no-support]=\"!browser.supported\" [href]=\"browser.href\" target=\"_blank\">\n      <img [src]=\"browser.src\" alt=\"Logo\" [draggable]=\"false\">\n      <span>{{browser.name}}</span>\n    </a>\n\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/modules/browser-not-supported/browser-not-supported.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/modules/browser-not-supported/browser-not-supported.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n  width: 100vw;\n  height: 100vh;\n  padding: 2.5em;\n  display: -webkit-box;\n  display: flex;\n}\n@media screen and (max-width: 599px) {\n  :host {\n    font-size: 15px;\n  }\n}\n@media screen and (min-width: 600px) and (max-width: 959px) {\n  :host {\n    font-size: 20px;\n  }\n}\n@media screen and (min-width: 960px) and (max-width: 1279px) {\n  :host {\n    font-size: 25px;\n  }\n}\n@media screen and (min-width: 1280px) and (max-width: 1919px) {\n  :host {\n    font-size: 27.5px;\n  }\n}\n@media screen and (min-width: 1920px) {\n  :host {\n    font-size: 30px;\n  }\n}\n#support {\n  margin: auto;\n  margin-top: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n}\n#support > *:not(:last-child) {\n  margin-bottom: 70px;\n}\n#support span {\n  font-weight: bold;\n  text-align: center;\n}\n#support span.highlight {\n  color: var(--secondary, #26a69a);\n}\n#browsers {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  flex-wrap: wrap;\n}\n#browsers .browser {\n  margin: 20px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin-bottom: 20px;\n}\n#browsers .browser > *:not(:last-child) {\n  margin-bottom: 10px;\n}\n#browsers .browser.no-support {\n  pointer-events: none;\n  -webkit-filter: grayscale(1);\n          filter: grayscale(1);\n  opacity: 0.3;\n}\n#browsers .browser img {\n  width: 50px;\n  height: 50px;\n}\n@media screen and (max-width: calc(600px - 1px)) {\n  #browsers .browser img {\n    width: 30px;\n    height: 30px;\n  }\n}\n@media screen and (max-width: 599px) {\n  #browsers .browser span {\n    font-size: 15px;\n  }\n}\n@media screen and (min-width: 600px) and (max-width: 959px) {\n  #browsers .browser span {\n    font-size: 15px;\n  }\n}\n@media screen and (min-width: 960px) and (max-width: 1279px) {\n  #browsers .browser span {\n    font-size: 15px;\n  }\n}\n@media screen and (min-width: 1280px) and (max-width: 1919px) {\n  #browsers .browser span {\n    font-size: 16.5px;\n  }\n}\n@media screen and (min-width: 1920px) {\n  #browsers .browser span {\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9icm93c2VyLW5vdC1zdXBwb3J0ZWQvQzpcXFVzZXJzXFxMaW5hIFJhZ2F1c2thaXRlXFxEZXNrdG9wXFxwcm9qZWN0c1xccG9ydGZvbGlvXFxhcHAvc3JjXFxhcHBcXG1vZHVsZXNcXGJyb3dzZXItbm90LXN1cHBvcnRlZFxcYnJvd3Nlci1ub3Qtc3VwcG9ydGVkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2Jyb3dzZXItbm90LXN1cHBvcnRlZC9icm93c2VyLW5vdC1zdXBwb3J0ZWQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYnJvd3Nlci1ub3Qtc3VwcG9ydGVkL0M6XFxVc2Vyc1xcTGluYSBSYWdhdXNrYWl0ZVxcRGVza3RvcFxccHJvamVjdHNcXHBvcnRmb2xpb1xcYXBwL3NyY1xcYXBwXFxzdHlsZXNcXGFic3RyYWN0c1xcYnJlYWtwb2ludHMuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9icm93c2VyLW5vdC1zdXBwb3J0ZWQvQzpcXFVzZXJzXFxMaW5hIFJhZ2F1c2thaXRlXFxEZXNrdG9wXFxwcm9qZWN0c1xccG9ydGZvbGlvXFxhcHAvc3JjXFxhcHBcXHN0eWxlc1xcYWJzdHJhY3RzXFxtaXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUVBLGNBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7QUNGRjtBQzZDRTtFRmpERjtJRWtESSxlQUFBO0VEMUNGO0FBQ0Y7QUM0Q0U7RUZyREY7SUVzREksZUFBQTtFRHpDRjtBQUNGO0FDMkNFO0VGekRGO0lFMERJLGVBQUE7RUR4Q0Y7QUFDRjtBQzBDRTtFRjdERjtJRThESSxpQkFBQTtFRHZDRjtBQUNGO0FDeUNFO0VGakVGO0lFa0VJLGVBQUE7RUR0Q0Y7QUFDRjtBRHBCQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VHMkRBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCSDNEZ0I7RUcyRGhCLDZCSDNEZ0I7VUcyRGhCLHNCSDNEZ0I7RUc0RGhCLHlCQUgrRDtVQUcvRCxtQkFIK0Q7RUFJL0QsdUJIN0Q4QjtVRzZEOUIsMkJIN0Q4QjtBQzBCaEM7QUVzQ0k7RUFJSSxtQkhwRWtCO0FDNkIxQjtBRDVCRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUM4Qko7QUQ1Qkk7RUFDRSxnQ0FBQTtBQzhCTjtBRHpCQTtFRytDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkgvQ2dCO0VHK0NoQiw2QkgvQ2dCO1VHK0NoQixtQkgvQ2dCO0VHZ0RoQix5QkFIK0Q7VUFHL0QsbUJBSCtEO0VBSS9ELHdCQUorQztVQUkvQyx1QkFKK0M7RUg1Qy9DLGVBQUE7QUMrQkY7QUQ3QkU7RUFDRSxZQUFBO0VHMENGLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCSDFDa0I7RUcwQ2xCLDZCSDFDa0I7VUcwQ2xCLHNCSDFDa0I7RUcyQ2xCLHlCQUgrRDtVQUcvRCxtQkFIK0Q7RUFJL0Qsd0JBSitDO1VBSS9DLHVCQUorQztFSHZDN0MsbUJBQUE7QUNrQ0o7QUVZSTtFQUlJLG1CSG5Eb0I7QUNzQzVCO0FEbkNJO0VBQ0Usb0JBQUE7RUFDQSw0QkFBQTtVQUFBLG9CQUFBO0VBQ0EsWUFBQTtBQ3FDTjtBRGxDSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDb0NOO0FDNUNNO0VGTUY7SUFLSSxXQUFBO0lBQ0EsWUFBQTtFQ3FDTjtBQUNGO0FDakNFO0VGRkU7SUVHQSxlQUFBO0VEb0NGO0FBQ0Y7QUNsQ0U7RUZORTtJRU9BLGVBQUE7RURxQ0Y7QUFDRjtBQ25DRTtFRlZFO0lFV0EsZUFBQTtFRHNDRjtBQUNGO0FDcENFO0VGZEU7SUVlQSxpQkFBQTtFRHVDRjtBQUNGO0FDckNFO0VGbEJFO0lFbUJBLGVBQUE7RUR3Q0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYnJvd3Nlci1ub3Qtc3VwcG9ydGVkL2Jyb3dzZXItbm90LXN1cHBvcnRlZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ2Fic3RyYWN0cyc7XHJcblxyXG46aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgQGluY2x1ZGUgYnJlYWstZm9udCgyNXB4KTtcclxuICBwYWRkaW5nOiAyLjVlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4jc3VwcG9ydCB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgQGluY2x1ZGUgZnhGbGV4KGNvbHVtbiwgNzBweCwgZmxleC1zdGFydCk7XHJcbiAgc3BhbiB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAmLmhpZ2hsaWdodCB7XHJcbiAgICAgIGNvbG9yOiBjb2xvcignc2Vjb25kYXJ5Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4jYnJvd3NlcnMge1xyXG4gIEBpbmNsdWRlIGZ4RmxleChyb3cpO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgLmJyb3dzZXIge1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgQGluY2x1ZGUgZnhGbGV4KGNvbHVtbiwgMTBweCk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuICAgICYubm8tc3VwcG9ydCB7XHJcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxKTtcclxuICAgICAgb3BhY2l0eTogMC4zO1xyXG4gICAgfVxyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICBoZWlnaHQ6IDUwcHg7XHJcblxyXG4gICAgICBAaW5jbHVkZSBicmVhaygnbHQnLCAncycpIHtcclxuICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHNwYW4ge1xyXG4gICAgICBAaW5jbHVkZSBicmVhay1mb250KDE1cHgsIDE1cHgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmc6IDIuNWVtO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgOmhvc3Qge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xuICA6aG9zdCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCkgYW5kIChtYXgtd2lkdGg6IDEyNzlweCkge1xuICA6aG9zdCB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTE5cHgpIHtcbiAgOmhvc3Qge1xuICAgIGZvbnQtc2l6ZTogMjcuNXB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpIHtcbiAgOmhvc3Qge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxufVxuXG4jc3VwcG9ydCB7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuI3N1cHBvcnQgPiAqOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tYm90dG9tOiA3MHB4O1xufVxuI3N1cHBvcnQgc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jc3VwcG9ydCBzcGFuLmhpZ2hsaWdodCB7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnksICMyNmE2OWEpO1xufVxuXG4jYnJvd3NlcnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuI2Jyb3dzZXJzIC5icm93c2VyIHtcbiAgbWFyZ2luOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbiNicm93c2VycyAuYnJvd3NlciA+ICo6bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4jYnJvd3NlcnMgLmJyb3dzZXIubm8tc3VwcG9ydCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBmaWx0ZXI6IGdyYXlzY2FsZSgxKTtcbiAgb3BhY2l0eTogMC4zO1xufVxuI2Jyb3dzZXJzIC5icm93c2VyIGltZyB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiBjYWxjKDYwMHB4IC0gMXB4KSkge1xuICAjYnJvd3NlcnMgLmJyb3dzZXIgaW1nIHtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gICNicm93c2VycyAuYnJvd3NlciBzcGFuIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogOTU5cHgpIHtcbiAgI2Jyb3dzZXJzIC5icm93c2VyIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIHtcbiAgI2Jyb3dzZXJzIC5icm93c2VyIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSBhbmQgKG1heC13aWR0aDogMTkxOXB4KSB7XG4gICNicm93c2VycyAuYnJvd3NlciBzcGFuIHtcbiAgICBmb250LXNpemU6IDE2LjVweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTkyMHB4KSB7XG4gICNicm93c2VycyAuYnJvd3NlciBzcGFuIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbn0iLCJcclxuLy8gLS0tPiBCcmVha3BvaW50c1xyXG4kYnJlYWtwb2ludHM6IChcclxuICAneHMtbWluJzogMHB4LFxyXG4gICd4cy1tYXgnOiA1OTlweCxcclxuICAncy1taW4nOiA2MDBweCxcclxuICAncy1tYXgnOiA5NTlweCxcclxuICAnbS1taW4nOiA5NjBweCxcclxuICAnbS1tYXgnOiAxMjc5cHgsXHJcbiAgJ2wtbWluJzogMTI4MHB4LFxyXG4gICdsLW1heCc6IDE5MTlweCxcclxuICAneGwtbWluJzogMTkyMHB4LFxyXG4gICd4bC1tYXgnOiA1MDAwcHhcclxuKSAhZGVmYXVsdDtcclxuXHJcbi8vIHhzXHQnc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCknXHJcbi8vIHNtXHQnc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KSdcclxuLy8gbWRcdCdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSBhbmQgKG1heC13aWR0aDogMTI3OXB4KSdcclxuLy8gbGdcdCdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODBweCkgYW5kIChtYXgtd2lkdGg6IDE5MTlweCknXHJcbi8vIHhsXHQnc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpIGFuZCAobWF4LXdpZHRoOiA1MDAwcHgpJ1xyXG5cclxuLy8gbHQtc21cdCdzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSdcclxuLy8gbHQtbWRcdCdzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1OXB4KSdcclxuLy8gbHQtbGdcdCdzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNzlweCknXHJcbi8vIGx0LXhsXHQnc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxOTE5cHgpJ1xyXG5cclxuLy8gZ3QteHNcdCdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSdcclxuLy8gZ3Qtc21cdCdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSdcclxuLy8gZ3QtbWRcdCdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODBweCknXHJcbi8vIGd0LWxnXHQnc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpJ1xyXG5cclxuQG1peGluIGJyZWFrKCRsdEd0LCAkYnJlYWtwb2ludCkge1xyXG4gIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICcjeyRicmVha3BvaW50fS1taW4nKSB7XHJcbiAgICBAaWYgKCRsdEd0ID09ICdsdCcpIHtcclxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogY2FsYygje21hcC1nZXQoJGJyZWFrcG9pbnRzLCAnI3skYnJlYWtwb2ludH0tbWluJyl9IC0gMXB4KSkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgICB9XHJcbiAgICB9IEBlbHNlIGlmICgkbHRHdCA9PSAnZ3QnKSB7XHJcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IGNhbGMoI3ttYXAtZ2V0KCRicmVha3BvaW50cywgJyN7JGJyZWFrcG9pbnR9LW1heCcpfSArIDFweCkpIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgICAgfVxyXG4gICAgfSBAZWxzZSB7XHJcbiAgICAgIEBlcnJvciAnVW5yZWNvZ25pc2VkIHBhcmFtZXRlciAjeyRsdEd0fS4gVmFsdWVzIFxcJ2d0XFwnIGFuZCBcXCdsdFxcJyBhcmUgYWNjZXB0ZWQuJztcclxuICAgIH1cclxuICB9IEBlbHNlIHtcclxuICAgIEBlcnJvciAnVW5yZWNvZ25pc2VkIGJyZWFrcG9pbnQgI3skYnJlYWtwb2ludH0uIEF2YWlsYWJsZSBicmVha3BvaW50cyBhcmU6ICN7bWFwLWtleXMoJGJyZWFrcG9pbnRzKX0uJztcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBicmVhay1wcm9wICgkcHJvcGVydHksICRicmVhay1tYXApIHtcclxuICAvLyB4c1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XHJcbiAgICAjeyRwcm9wZXJ0eX06IG1hcC1nZXQoJGJyZWFrLW1hcCwgJ3hzJyk7XHJcbiAgfVxyXG4gIC8vIHNcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XHJcbiAgICAjeyRwcm9wZXJ0eX06IG1hcC1nZXQoJGJyZWFrLW1hcCwgJ3MnKTtcclxuICB9XHJcbiAgLy8gbVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSBhbmQgKG1heC13aWR0aDogMTI3OXB4KSB7XHJcbiAgICAjeyRwcm9wZXJ0eX06IG1hcC1nZXQoJGJyZWFrLW1hcCwgJ20nKTtcclxuICB9XHJcbiAgLy8gbFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODBweCkgYW5kIChtYXgtd2lkdGg6IDE5MTlweCkge1xyXG4gICAgI3skcHJvcGVydHl9OiBtYXAtZ2V0KCRicmVhay1tYXAsICdsJyk7XHJcbiAgfVxyXG4gIC8vIHhsXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTkyMHB4KSB7XHJcbiAgICAjeyRwcm9wZXJ0eX06IG1hcC1nZXQoJGJyZWFrLW1hcCwgJ3hsJyk7XHJcbiAgfVxyXG59XHJcbi8vIDwtLS0gQnJlYWtwb2ludHNcclxuXHJcbkBtaXhpbiBicmVhay1mb250ICgkc2l6ZSwgJG1pbjogbnVsbCwgJG1heDogbnVsbCkge1xyXG4gIEBpbmNsdWRlIGJyZWFrLXByb3AoJ2ZvbnQtc2l6ZScsIChcclxuICAgICd4cyc6IHNuYXAoJHNpemUgKiAwLjYsICRtaW4sICRtYXgpLFxyXG4gICAgJ3MnOiBzbmFwKCRzaXplICogMC44LCAkbWluLCAkbWF4KSxcclxuICAgICdtJzogJHNpemUsXHJcbiAgICAnbCc6IHNuYXAoJHNpemUgKiAxLjEsICRtaW4sICRtYXgpLFxyXG4gICAgJ3hsJzogc25hcCgkc2l6ZSAqIDEuMiwgJG1pbiwgJG1heClcclxuICApKVxyXG59XHJcbiIsIkBpbXBvcnQgJy4vZnVuY3Rpb25zJztcclxuXHJcbkBtaXhpbiBhYnNvbHV0ZS1jZW50cmUgKCRob3Jpem9udGFsOiB0cnVlLCAkdmVydGljYWw6IHRydWUpIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gIEBpZiAkdmVydGljYWwgYW5kICRob3Jpem9udGFsIHtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgfSBAZWxzZSBpZiAkaG9yaXpvbnRhbCB7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgfSBAZWxzZSBpZiAkdmVydGljYWwge1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gYWJzb2x1dGUtZmlsbCAoJHdpZHRoOiBudWxsLCAkaGVpZ2h0OiBudWxsLCAkdHlwZTogJ3NpemUnKSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG5cclxuXHJcbiAgQGlmICR3aWR0aCAhPSBudWxsIHtcclxuICAgIEBpZiAkdHlwZSA9PSAnc2l6ZScge1xyXG4gICAgICB3aWR0aDogJHdpZHRoO1xyXG4gICAgfSBAZWxzZSBpZiAkdHlwZSA9PSAnZWRnZScge1xyXG4gICAgICBsZWZ0OiAkd2lkdGg7XHJcbiAgICAgIHJpZ2h0OiAkd2lkdGg7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSB7XHJcbiAgICByaWdodDogMDtcclxuICB9XHJcblxyXG4gIEBpZiAkaGVpZ2h0ICE9IG51bGwge1xyXG4gICAgQGlmICR0eXBlID09ICdzaXplJyB7XHJcbiAgICAgIGhlaWdodDogJGhlaWdodDtcclxuICAgIH0gQGVsc2UgaWYgJHR5cGUgPT0gJ2VkZ2UnIHtcclxuICAgICAgdG9wOiAkaGVpZ2h0O1xyXG4gICAgICBib3R0b206ICRoZWlnaHQ7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBib3R0b206IDA7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gbWF0LWljb24gKCRzaXplLCAkY2xhc3M6IHRydWUpIHtcclxuICBAaWYgKCRjbGFzcykge1xyXG4gICAgbWF0LWljb24ge1xyXG4gICAgICBmb250LXNpemU6ICRzaXplO1xyXG4gICAgICB3aWR0aDogJHNpemU7XHJcbiAgICAgIGhlaWdodDogJHNpemU7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAkc2l6ZTtcclxuICAgIH1cclxuICB9IEBlbHNlIHtcclxuICAgIGZvbnQtc2l6ZTogJHNpemU7XHJcbiAgICB3aWR0aDogJHNpemU7XHJcbiAgICBoZWlnaHQ6ICRzaXplO1xyXG4gICAgbGluZS1oZWlnaHQ6ICRzaXplO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGZsZXggKCRkaXJlY3Rpb246IHJvdywgJGp1c3RpZnk6IGNlbnRlciwgJGFsaWduOiBjZW50ZXIpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XHJcbiAgYWxpZ24taXRlbXM6ICRhbGlnbjtcclxuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcclxufVxyXG5cclxuLy8gRmxleCBsYXlvdXRcclxuQG1peGluIGZ4RmxleCAoJGRpcmVjdGlvbiwgJGdhcDogbnVsbCwgJGp1c3RpZnk6IGNlbnRlciwgJGFsaWduOiBjZW50ZXIpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xyXG4gIGFsaWduLWl0ZW1zOiAkYWxpZ247XHJcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcclxuXHJcbiAgQGlmICgkZ2FwKSB7XHJcbiAgICA+ICo6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgIEBpZiAoJGRpcmVjdGlvbiA9PSByb3cpIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6ICRnYXA7XHJcbiAgICAgIH0gQGVsc2UgaWYgKCRkaXJlY3Rpb24gPT0gY29sdW1uKSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogJGdhcDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGl0ZW0tc3BhY2UgKCRkaXJlY3Rpb246IHJvdywgJGRpc3RhbmNlOiAyMHB4KSB7XHJcbiAgQGlmICRkaXJlY3Rpb24gPT0gcm93IHtcclxuICAgID4gKjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAkZGlzdGFuY2U7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSBpZiAkZGlyZWN0aW9uID09IGNvbHVtbiB7XHJcbiAgICA+ICo6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206ICRkaXN0YW5jZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/modules/browser-not-supported/browser-not-supported.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/browser-not-supported/browser-not-supported.component.ts ***!
  \**********************************************************************************/
/*! exports provided: BrowserNotSupportedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserNotSupportedComponent", function() { return BrowserNotSupportedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_utils_browser_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/utils/browser.util */ "./src/app/core/utils/browser.util.ts");



let BrowserNotSupportedComponent = class BrowserNotSupportedComponent {
    get browsers() {
        return _core_utils_browser_util__WEBPACK_IMPORTED_MODULE_2__["default"].browsers;
    }
    get current() {
        return _core_utils_browser_util__WEBPACK_IMPORTED_MODULE_2__["default"].browserName;
    }
};
BrowserNotSupportedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-browser-not-supported',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./browser-not-supported.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/browser-not-supported/browser-not-supported.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./browser-not-supported.component.scss */ "./src/app/modules/browser-not-supported/browser-not-supported.component.scss")).default]
    })
], BrowserNotSupportedComponent);



/***/ }),

/***/ "./src/app/modules/browser-not-supported/browser-not-supported.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/browser-not-supported/browser-not-supported.module.ts ***!
  \*******************************************************************************/
/*! exports provided: BrowserNotSupportedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserNotSupportedModule", function() { return BrowserNotSupportedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _browser_not_supported_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./browser-not-supported.component */ "./src/app/modules/browser-not-supported/browser-not-supported.component.ts");
/* harmony import */ var _browser_not_supported_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./browser-not-supported.routing */ "./src/app/modules/browser-not-supported/browser-not-supported.routing.ts");





let BrowserNotSupportedModule = class BrowserNotSupportedModule {
};
BrowserNotSupportedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_browser_not_supported_component__WEBPACK_IMPORTED_MODULE_3__["BrowserNotSupportedComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _browser_not_supported_routing__WEBPACK_IMPORTED_MODULE_4__["BrowserNotSupportedRoutingModule"]
        ]
    })
], BrowserNotSupportedModule);



/***/ }),

/***/ "./src/app/modules/browser-not-supported/browser-not-supported.routing.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/browser-not-supported/browser-not-supported.routing.ts ***!
  \********************************************************************************/
/*! exports provided: BrowserNotSupportedRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserNotSupportedRoutingModule", function() { return BrowserNotSupportedRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _browser_not_supported_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./browser-not-supported.component */ "./src/app/modules/browser-not-supported/browser-not-supported.component.ts");




const routes = [
    { path: '', component: _browser_not_supported_component__WEBPACK_IMPORTED_MODULE_3__["BrowserNotSupportedComponent"] }
];
let BrowserNotSupportedRoutingModule = class BrowserNotSupportedRoutingModule {
};
BrowserNotSupportedRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BrowserNotSupportedRoutingModule);



/***/ })

}]);
//# sourceMappingURL=modules-browser-not-supported-browser-not-supported-module-es2015.js.map