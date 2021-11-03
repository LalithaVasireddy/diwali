"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Lalitha\\BK\\Projects\\diwali-program\\pages\\index.tsx";




const preventDefault = f => e => {
  e.preventDefault();
  f(e);
};

function Home({
  action = '/diwali'
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const query = router.query;
  const {
    0: inputValue,
    1: setInputValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const handleSubmit = preventDefault(() => {
    // Show Progress
    router.push({
      pathname: action,
      query: {
        name: inputValue
      }
    });
  });

  const handleChange = event => {
    setInputValue(event.target.value);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Diwali Blessings 2021"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1, maximum-scale=1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }, this),  false && /*#__PURE__*/0]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 4
  }, this);
}
;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1JLGNBQWMsR0FBSUMsQ0FBRCxJQUFRQyxDQUFELElBQU87QUFDcENBLEVBQUFBLENBQUMsQ0FBQ0YsY0FBRjtBQUNBQyxFQUFBQSxDQUFDLENBQUNDLENBQUQsQ0FBRDtBQUNBLENBSEQ7O0FBS2dCLFNBQVNDLElBQVQsQ0FBYztBQUFFQyxFQUFBQSxNQUFNLEdBQUc7QUFBWCxDQUFkLEVBQXVDO0FBQ3JELFFBQU1DLE1BQU0sR0FBR1Asc0RBQVMsRUFBeEI7QUFDQSxRQUFNUSxLQUFLLEdBQUdELE1BQU0sQ0FBQ0MsS0FBckI7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsVUFBRDtBQUFBLE9BQWFDO0FBQWIsTUFBOEJYLCtDQUFRLENBQUMsRUFBRCxDQUE1QztBQUVBLFFBQU1ZLFlBQVksR0FBR1QsY0FBYyxDQUFDLE1BQU07QUFDekM7QUFDQUssSUFBQUEsTUFBTSxDQUFDSyxJQUFQLENBQVk7QUFDWEMsTUFBQUEsUUFBUSxFQUFFUCxNQURDO0FBRVhFLE1BQUFBLEtBQUssRUFBRTtBQUNOTSxRQUFBQSxJQUFJLEVBQUVMO0FBREE7QUFGSSxLQUFaO0FBTUEsR0FSa0MsQ0FBbkM7O0FBU0EsUUFBTU0sWUFBWSxHQUFJQyxLQUFELElBQVc7QUFDL0JOLElBQUFBLGFBQWEsQ0FBQ00sS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWQsQ0FBYjtBQUVBLEdBSEQ7O0FBTUEsc0JBQ0M7QUFBQSw0QkFDQyw4REFBQyxrREFBRDtBQUFBLDhCQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREEsZUFFQTtBQUFNLFlBQUksRUFBQyxVQUFYO0FBQXNCLGVBQU8sRUFBQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsRUFLRSxNQUFLLGlCQUNOLENBTkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUE4QkE7QUFBQTs7Ozs7Ozs7OztBQzNERjs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NlcnZlcmxlc3Mtc2Fhcy8uL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9zZXJ2ZXJsZXNzLXNhYXMvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9zZXJ2ZXJsZXNzLXNhYXMvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL3NlcnZlcmxlc3Mtc2Fhcy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vc2VydmVybGVzcy1zYWFzL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5cclxuY29uc3QgcHJldmVudERlZmF1bHQgPSAoZikgPT4gKGUpID0+IHtcclxuXHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0ZihlKTtcclxufTtcclxuXHJcblx0ZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IGFjdGlvbiA9ICcvZGl3YWxpJyB9KSAge1xyXG5cdFx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblx0XHRjb25zdCBxdWVyeSA9IHJvdXRlci5xdWVyeTtcdFx0XHJcblx0XHRjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblx0XHRcclxuXHRcdGNvbnN0IGhhbmRsZVN1Ym1pdCA9IHByZXZlbnREZWZhdWx0KCgpID0+IHtcclxuXHRcdFx0Ly8gU2hvdyBQcm9ncmVzc1xyXG5cdFx0XHRyb3V0ZXIucHVzaCh7XHJcblx0XHRcdFx0cGF0aG5hbWU6IGFjdGlvbixcclxuXHRcdFx0XHRxdWVyeToge1xyXG5cdFx0XHRcdFx0bmFtZTogaW5wdXRWYWx1ZVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0XHRjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuXHRcdFx0c2V0SW5wdXRWYWx1ZShldmVudC50YXJnZXQudmFsdWUpO1xyXG5cdFx0XHRcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0XHRcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXY+XHJcblx0XHRcdFx0PEhlYWQ+XHJcblx0XHRcdFx0PHRpdGxlPkRpd2FsaSBCbGVzc2luZ3MgMjAyMTwvdGl0bGU+XHJcblx0XHRcdFx0PG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLCBtYXhpbXVtLXNjYWxlPTFcIiAvPlx0XHRcdFx0XHRcclxuXHRcdFx0PC9IZWFkPlxyXG5cdFx0XHR7IGZhbHNlICYmIChcclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIlwiPlx0XHRcdFx0XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvdXRlclwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtaWRkbGVcIj5cdFxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbm5lclwiPlx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9Plx0XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoZWFkaW5nXCI+PC9kaXY+XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdDxicj48L2JyPjxici8+PGJyLz5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXY+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJQbGVhc2UgZW50ZXIgeW91ciBuYW1lXCIgYXV0b0ZvY3VzIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9PjwvaW5wdXQ+PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJidXR0b25DbGFzc1wiPjxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCI+PGI+TGV04oCZcyBCZWdpbjwvYj48L2J1dHRvbj48L2Rpdj5cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0PC9mb3JtPlx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHRcclxuXHRcdFx0KVxyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCk7XHJcblx0fTtcclxuXHRcclxuXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJIZWFkIiwicHJldmVudERlZmF1bHQiLCJmIiwiZSIsIkhvbWUiLCJhY3Rpb24iLCJyb3V0ZXIiLCJxdWVyeSIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHVzaCIsInBhdGhuYW1lIiwibmFtZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9