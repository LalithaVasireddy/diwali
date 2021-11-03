"use strict";
self["webpackHotUpdate_N_E"]("pages/diwali",{

/***/ "./pages/diwali.tsx":
/*!**************************!*\
  !*** ./pages/diwali.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Diwali; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Lalitha_BK_Projects_diwali_program_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Lalitha_BK_Projects_diwali_program_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Lalitha_BK_Projects_diwali_program_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Lalitha_BK_Projects_diwali_program_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-player */ "./node_modules/react-player/lib/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var timers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! timers */ "./node_modules/timers-browserify/main.js");
/* harmony import */ var timers__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(timers__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Lalitha\\BK\\Projects\\diwali-program\\pages\\diwali.tsx",
    _s = $RefreshSig$();







var sleep = function sleep(milliseconds) {
  return new Promise(function (resolve) {
    return (0,timers__WEBPACK_IMPORTED_MODULE_6__.setTimeout)(resolve, milliseconds);
  });
};

function Diwali() {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  var query = router.query;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({}),
      cardInfo = _useState[0],
      setCardInfo = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({}),
      queryParam = _useState2[0],
      setQueryParam = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      GaveBlessing = _useState3[0],
      setGaveBlessing = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      WatchComplete = _useState4[0],
      setWatchComplete = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true),
      SpreadBlessing = _useState5[0],
      setSpreadBlessing = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      inputValue = _useState6[0],
      setInputValue = _useState6[1];

  var youTubeUrl = "https://brahmakumaris.org.au/new/wp-content/uploads/2021/08/Main-Comp-V13-1.m4v";
  if (router.query.lan == "tamil") youTubeUrl = "https://youtu.be/vFhhN4JpqgY";else if (router.query.lan == "hindi") youTubeUrl = "https://youtu.be/TO2h9hqNVQ4";else if (router.query.lan == "telugu") youTubeUrl = "https://youtu.be/An-RPrXreOc";else if (router.query.lan == "spanish") youTubeUrl = "https://youtu.be/An-RPrXreOc";else if (router.query.lan == "greek") youTubeUrl = "https://youtu.be/An-RPrXreOc";else if (router.query.lan == "italian") youTubeUrl = "https://youtu.be/An-RPrXreOc";else if (router.query.lan == "port") youTubeUrl = "https://youtu.be/An-RPrXreOc";else if (router.query.lan == "marathi") youTubeUrl = "https://youtu.be/An-RPrXreOc";else if (router.query.lan == "russian") youTubeUrl = "https://youtu.be/An-RPrXreOc";else if (router.query.lan == "french") youTubeUrl = "https://youtu.be/An-RPrXreOc";
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    if (router.isReady) {
      var _qryParam = router.query;
      setQueryParam(_qryParam);
    }
  }, [router.query]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    var fetchData = /*#__PURE__*/function () {
      var _ref = (0,C_Lalitha_BK_Projects_diwali_program_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Lalitha_BK_Projects_diwali_program_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
        var url, res, data;
        return C_Lalitha_BK_Projects_diwali_program_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                if (!queryParam["name"]) {
                  _context.next = 11;
                  break;
                }

                url = "https://script.google.com/macros/s/AKfycbz6Lq22VVTFBlGPyj3Ph6q15DFtzFFchB11WPiMkQ/exec?i=2&fullname=".concat(queryParam["name"], "&lang=").concat(queryParam["lan"]);
                _context.next = 5;
                return fetch("".concat(url));

              case 5:
                res = _context.sent;
                _context.next = 8;
                return res.json();

              case 8:
                data = _context.sent;
                setCardInfo(data);
                return _context.abrupt("return", data);

              case 11:
                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 13]]);
      }));

      return function fetchData() {
        return _ref.apply(this, arguments);
      };
    }();

    fetchData();
  }, [queryParam]);

  var handleGaveBlessing = function handleGaveBlessing(_ref2) {
    var played = _ref2.played,
        playedSeconds = _ref2.playedSeconds;

    if (playedSeconds >= 5 && !GaveBlessing) {
      setGaveBlessing(true);
    }

    if (playedSeconds >= 176) {
      setWatchComplete(true);
    }
  };

  var handleChange = function handleChange(event) {
    setInputValue(event.target.value);
  };

  var handleClick = function handleClick() {
    var fetchData = /*#__PURE__*/function () {
      var _ref3 = (0,C_Lalitha_BK_Projects_diwali_program_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Lalitha_BK_Projects_diwali_program_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
        var url, res, data;
        return C_Lalitha_BK_Projects_diwali_program_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                url = "https://script.google.com/macros/s/AKfycbwng-kD9PtaAg46DRir8WfiiDrmQjk0saPzzTrx/exec?i=1&blessing=".concat(inputValue);
                setSpreadBlessing(false);
                _context2.next = 5;
                return fetch("".concat(url));

              case 5:
                res = _context2.sent;
                _context2.next = 8;
                return res.json();

              case 8:
                data = _context2.sent;
                return _context2.abrupt("return", data);

              case 12:
                _context2.prev = 12;
                _context2.t0 = _context2["catch"](0);
                console.log(_context2.t0);

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 12]]);
      }));

      return function fetchData() {
        return _ref3.apply(this, arguments);
      };
    }();

    fetchData();
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_7___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Diwali Blessings 2021"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "",
          children: [!WatchComplete && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "player-wrapper",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_player__WEBPACK_IMPORTED_MODULE_4__.default, {
              className: "react-player",
              url: youTubeUrl,
              width: "100%",
              height: "100%",
              playing: true,
              controls: true,
              onProgress: handleGaveBlessing
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 10
          }, this), WatchComplete && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "thankyou",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: "Thank you for joining the Australian Virtual Centre online Diwali"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 11
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 87
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: "Please join our meditation classes / workshops on"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 10
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "https://brahmakumaris.org.au/new/virtual-centre",
                children: "https://brahmakumaris.org.au/new/virtual-centre"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 135,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 10
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 130
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 10
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 10
          }, this), GaveBlessing && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: WatchComplete ? "boxEnd" : "box",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "name",
              children: cardInfo["disp_name"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 11
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "slogan",
              children: [cardInfo["slogan"], " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 146,
              columnNumber: 11
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 12
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 7
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 6
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 106,
    columnNumber: 4
  }, this);
}

_s(Diwali, "Gcr7D2aFCtQXkZydBiBj5FB/6NI=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter];
});

_c = Diwali;
;

var _c;

$RefreshReg$(_c, "Diwali");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGl3YWxpLjU1YzFkZmFhNzQzZTMxYjgxMGFkLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1PLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLFlBQUQsRUFBa0I7QUFDL0IsU0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRDtBQUFBLFdBQWFMLGtEQUFVLENBQUNLLE9BQUQsRUFBVUYsWUFBVixDQUF2QjtBQUFBLEdBQVosQ0FBUDtBQUNBLENBRkQ7O0FBSWdCLFNBQVNHLE1BQVQsR0FBbUI7QUFBQTs7QUFDakMsTUFBTUMsTUFBTSxHQUFHUixzREFBUyxFQUF4QjtBQUNBLE1BQU1TLEtBQUssR0FBR0QsTUFBTSxDQUFDQyxLQUFyQjs7QUFGaUMsa0JBR0RYLCtDQUFRLENBQUMsRUFBRCxDQUhQO0FBQUEsTUFHMUJZLFFBSDBCO0FBQUEsTUFHaEJDLFdBSGdCOztBQUFBLG1CQUlHYiwrQ0FBUSxDQUFDLEVBQUQsQ0FKWDtBQUFBLE1BSTFCYyxVQUowQjtBQUFBLE1BSWRDLGFBSmM7O0FBQUEsbUJBS09mLCtDQUFRLENBQUMsS0FBRCxDQUxmO0FBQUEsTUFLMUJnQixZQUwwQjtBQUFBLE1BS1pDLGVBTFk7O0FBQUEsbUJBTVNqQiwrQ0FBUSxDQUFDLEtBQUQsQ0FOakI7QUFBQSxNQU0xQmtCLGFBTjBCO0FBQUEsTUFNWEMsZ0JBTlc7O0FBQUEsbUJBT1duQiwrQ0FBUSxDQUFDLElBQUQsQ0FQbkI7QUFBQSxNQU8xQm9CLGNBUDBCO0FBQUEsTUFPVkMsaUJBUFU7O0FBQUEsbUJBUUdyQiwrQ0FBUSxDQUFDLEVBQUQsQ0FSWDtBQUFBLE1BUTFCc0IsVUFSMEI7QUFBQSxNQVFkQyxhQVJjOztBQVVqQyxNQUFJQyxVQUFVLEdBQUcsaUZBQWpCO0FBRUEsTUFBR2QsTUFBTSxDQUFDQyxLQUFQLENB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QUNSUDs7O0tBRFFPO0FBOEl2QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9kaXdhbGkudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgUmVhY3RQbGF5ZXIgZnJvbSAncmVhY3QtcGxheWVyJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBzZXRUaW1lb3V0IH0gZnJvbSAndGltZXJzJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuXHJcbmNvbnN0IHNsZWVwID0gKG1pbGxpc2Vjb25kcykgPT4ge1xyXG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtaWxsaXNlY29uZHMpKTtcclxufTtcclxuXHJcblx0ZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGl3YWxpKCkgIHtcclxuXHRcdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cdFx0Y29uc3QgcXVlcnkgPSByb3V0ZXIucXVlcnk7XHJcblx0XHRjb25zdCBbY2FyZEluZm8sIHNldENhcmRJbmZvXSA9IHVzZVN0YXRlKHt9KTtcclxuXHRcdGNvbnN0IFtxdWVyeVBhcmFtLCBzZXRRdWVyeVBhcmFtXSA9IHVzZVN0YXRlKHt9KTtcdFx0XHRcclxuXHRcdGNvbnN0IFtHYXZlQmxlc3NpbmcsIHNldEdhdmVCbGVzc2luZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0XHRjb25zdCBbV2F0Y2hDb21wbGV0ZSwgc2V0V2F0Y2hDb21wbGV0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0XHRjb25zdCBbU3ByZWFkQmxlc3NpbmcsIHNldFNwcmVhZEJsZXNzaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cdFx0Y29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuXHRcdHZhciB5b3VUdWJlVXJsID0gXCJodHRwczovL2JyYWhtYWt1bWFyaXMub3JnLmF1L25ldy93cC1jb250ZW50L3VwbG9hZHMvMjAyMS8wOC9NYWluLUNvbXAtVjEzLTEubTR2XCI7XHJcblxyXG5cdFx0aWYocm91dGVyLnF1ZXJ5LmxhbiA9PSBcInRhbWlsXCIpXHJcblx0XHRcdHlvdVR1YmVVcmwgPSBcImh0dHBzOi8veW91dHUuYmUvdkZoaE40SnBxZ1lcIjtcclxuXHRcdGVsc2UgaWYocm91dGVyLnF1ZXJ5LmxhbiA9PSBcImhpbmRpXCIpXHJcblx0XHRcdHlvdVR1YmVVcmwgPSBcImh0dHBzOi8veW91dHUuYmUvVE8yaDlocU5WUTRcIjtcclxuXHRcdGVsc2UgaWYocm91dGVyLnF1ZXJ5LmxhbiA9PSBcInRlbHVndVwiKVxyXG5cdFx0XHR5b3VUdWJlVXJsID0gXCJodHRwczovL3lvdXR1LmJlL0FuLVJQclhyZU9jXCI7XHJcblx0XHRlbHNlIGlmKHJvdXRlci5xdWVyeS5sYW4gPT0gXCJzcGFuaXNoXCIpXHJcblx0XHRcdHlvdVR1YmVVcmwgPSBcImh0dHBzOi8veW91dHUuYmUvQW4tUlByWHJlT2NcIjtcclxuXHRcdGVsc2UgaWYocm91dGVyLnF1ZXJ5LmxhbiA9PSBcImdyZWVrXCIpXHJcblx0XHRcdHlvdVR1YmVVcmwgPSBcImh0dHBzOi8veW91dHUuYmUvQW4tUlByWHJlT2NcIjtcclxuXHRcdGVsc2UgaWYocm91dGVyLnF1ZXJ5LmxhbiA9PSBcIml0YWxpYW5cIilcclxuXHRcdFx0eW91VHViZVVybCA9IFwiaHR0cHM6Ly95b3V0dS5iZS9Bbi1SUHJYcmVPY1wiO1xyXG5cdFx0ZWxzZSBpZihyb3V0ZXIucXVlcnkubGFuID09IFwicG9ydFwiKVxyXG5cdFx0XHR5b3VUdWJlVXJsID0gXCJodHRwczovL3lvdXR1LmJlL0FuLVJQclhyZU9jXCI7XHJcblx0XHRlbHNlIGlmKHJvdXRlci5xdWVyeS5sYW4gPT0gXCJtYXJhdGhpXCIpXHJcblx0XHRcdHlvdVR1YmVVcmwgPSBcImh0dHBzOi8veW91dHUuYmUvQW4tUlByWHJlT2NcIjtcclxuXHRcdGVsc2UgaWYocm91dGVyLnF1ZXJ5LmxhbiA9PSBcInJ1c3NpYW5cIilcclxuXHRcdFx0eW91VHViZVVybCA9IFwiaHR0cHM6Ly95b3V0dS5iZS9Bbi1SUHJYcmVPY1wiO1xyXG5cdFx0ZWxzZSBpZihyb3V0ZXIucXVlcnkubGFuID09IFwiZnJlbmNoXCIpXHJcblx0XHRcdHlvdVR1YmVVcmwgPSBcImh0dHBzOi8veW91dHUuYmUvQW4tUlByWHJlT2NcIjtcclxuXHJcblxyXG5cdFx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdFx0aWYgKHJvdXRlci5pc1JlYWR5KSB7XHJcblx0XHRcdFx0Y29uc3QgX3FyeVBhcmFtID0gcm91dGVyLnF1ZXJ5O1xyXG5cdFx0XHRcdHNldFF1ZXJ5UGFyYW0oX3FyeVBhcmFtKTsgXHJcblx0XHRcdH1cclxuXHRcdFx0fSwgW3JvdXRlci5xdWVyeV0pO1xyXG5cdFxyXG5cdFx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdFx0Y29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0XHRcdHRyeSB7XHRcclxuXHRcdFx0XHRcdGlmKHF1ZXJ5UGFyYW1bXCJuYW1lXCJdKVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRjb25zdCB1cmwgPSBgaHR0cHM6Ly9zY3JpcHQuZ29vZ2xlLmNvbS9tYWNyb3Mvcy9BS2Z5Y2J6NkxxMjJWVlRGQmxHUHlqM1BoNnExNURGdHpGRmNoQjExV1BpTWtRL2V4ZWM/aT0yJmZ1bGxuYW1lPSR7cXVlcnlQYXJhbVtcIm5hbWVcIl19Jmxhbmc9JHtxdWVyeVBhcmFtW1wibGFuXCJdfWA7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHt1cmx9YCk7XHJcblx0XHRcdFx0XHRcdGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cdFx0XHRcdFx0XHRzZXRDYXJkSW5mbyhkYXRhKTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGRhdGE7XHJcblx0XHRcdFx0XHR9XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblx0XHRcdGZldGNoRGF0YSgpO1xyXG5cdFx0fSwgW3F1ZXJ5UGFyYW1dKTtcclxuXHRcdFxyXG5cdFx0Y29uc3QgaGFuZGxlR2F2ZUJsZXNzaW5nID0gKHtwbGF5ZWQsIHBsYXllZFNlY29uZHN9KSA9PiB7XHJcblx0XHRcdGlmKHBsYXllZFNlY29uZHMgPj0gNSAmJiAhR2F2ZUJsZXNzaW5nKSB7XHRcdFx0XHJcblx0XHRcdFx0c2V0R2F2ZUJsZXNzaW5nKHRydWUpXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0fVxyXG5cdFx0XHRpZihwbGF5ZWRTZWNvbmRzID49IDE3Nikge1x0XHRcdFxyXG5cdFx0XHRcdHNldFdhdGNoQ29tcGxldGUodHJ1ZSlcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcblx0XHRcdHNldElucHV0VmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuXHRcdFx0XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcblx0XHRcdGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuXHRcdFx0XHR0cnkge1x0XHJcblxyXG5cdFx0XHRcdFx0XHRjb25zdCB1cmwgPSBgaHR0cHM6Ly9zY3JpcHQuZ29vZ2xlLmNvbS9tYWNyb3Mvcy9BS2Z5Y2J3bmcta0Q5UHRhQWc0NkRSaXI4V2ZpaURybVFqazBzYVB6elRyeC9leGVjP2k9MSZibGVzc2luZz0ke2lucHV0VmFsdWV9YDtcclxuXHRcdFx0XHRcdFx0c2V0U3ByZWFkQmxlc3NpbmcoZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHt1cmx9YCk7XHJcblx0XHRcdFx0XHRcdGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gZGF0YTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHRcdFx0ZmV0Y2hEYXRhKCk7XHJcblx0XHR9XHJcblx0XHRcdFxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0XHQ8SGVhZD5cclxuXHRcdFx0XHQ8dGl0bGU+RGl3YWxpIEJsZXNzaW5ncyAyMDIxPC90aXRsZT5cdFx0XHRcdFx0XHJcblx0XHRcdDwvSGVhZD5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiXCI+XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0IVdhdGNoQ29tcGxldGUgJiYgKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBsYXllci13cmFwcGVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFJlYWN0UGxheWVyIGNsYXNzTmFtZT1cInJlYWN0LXBsYXllclwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dXJsPXt5b3VUdWJlVXJsfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoPVwiMTAwJVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0PVwiMTAwJVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cGxheWluZ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnRyb2xzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25Qcm9ncmVzcz17aGFuZGxlR2F2ZUJsZXNzaW5nfVx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFdhdGNoQ29tcGxldGUgJiYgKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRoYW5reW91XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlRoYW5rIHlvdSBmb3Igam9pbmluZyB0aGUgQXVzdHJhbGlhbiBWaXJ0dWFsIENlbnRyZSBvbmxpbmUgRGl3YWxpPC9kaXY+PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXY+UGxlYXNlIGpvaW4gb3VyIG1lZGl0YXRpb24gY2xhc3NlcyAvIHdvcmtzaG9wcyBvbjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PjxhIGhyZWY9XCJodHRwczovL2JyYWhtYWt1bWFyaXMub3JnLmF1L25ldy92aXJ0dWFsLWNlbnRyZVwiPmh0dHBzOi8vYnJhaG1ha3VtYXJpcy5vcmcuYXUvbmV3L3ZpcnR1YWwtY2VudHJlPC9hPjwvZGl2PjxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxicj48L2JyPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0R2F2ZUJsZXNzaW5nICYmIChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSB7V2F0Y2hDb21wbGV0ZSA/IFwiYm94RW5kXCIgOiBcImJveFwifT5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5hbWVcIj57Y2FyZEluZm9bXCJkaXNwX25hbWVcIl19PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzbG9nYW5cIj57Y2FyZEluZm9bXCJzbG9nYW5cIl19IDwvZGl2PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2Plx0XHRcdFx0XHJcblx0XHQpO1xyXG5cdH07XHJcblx0XHJcblxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlJlYWN0UGxheWVyIiwidXNlUm91dGVyIiwic2V0VGltZW91dCIsIkhlYWQiLCJzbGVlcCIsIm1pbGxpc2Vjb25kcyIsIlByb21pc2UiLCJyZXNvbHZlIiwiRGl3YWxpIiwicm91dGVyIiwicXVlcnkiLCJjYXJkSW5mbyIsInNldENhcmRJbmZvIiwicXVlcnlQYXJhbSIsInNldFF1ZXJ5UGFyYW0iLCJHYXZlQmxlc3NpbmciLCJzZXRHYXZlQmxlc3NpbmciLCJXYXRjaENvbXBsZXRlIiwic2V0V2F0Y2hDb21wbGV0ZSIsIlNwcmVhZEJsZXNzaW5nIiwic2V0U3ByZWFkQmxlc3NpbmciLCJpbnB1dFZhbHVlIiwic2V0SW5wdXRWYWx1ZSIsInlvdVR1YmVVcmwiLCJsYW4iLCJpc1JlYWR5IiwiX3FyeVBhcmFtIiwiZmV0Y2hEYXRhIiwidXJsIiwiZmV0Y2giLCJyZXMiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVHYXZlQmxlc3NpbmciLCJwbGF5ZWQiLCJwbGF5ZWRTZWNvbmRzIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==