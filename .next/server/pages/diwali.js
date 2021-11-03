"use strict";
(() => {
var exports = {};
exports.id = "pages/diwali";
exports.ids = ["pages/diwali"];
exports.modules = {

/***/ "./pages/diwali.tsx":
/*!**************************!*\
  !*** ./pages/diwali.tsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Diwali)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-player */ "react-player");
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var timers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! timers */ "timers");
/* harmony import */ var timers__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(timers__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Lalitha\\BK\\Projects\\diwali-program\\pages\\diwali.tsx";






const sleep = milliseconds => {
  return new Promise(resolve => (0,timers__WEBPACK_IMPORTED_MODULE_4__.setTimeout)(resolve, milliseconds));
};

function Diwali() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const query = router.query;
  const {
    0: cardInfo,
    1: setCardInfo
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
  const {
    0: queryParam,
    1: setQueryParam
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
  const {
    0: GaveBlessing,
    1: setGaveBlessing
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: WatchComplete,
    1: setWatchComplete
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: SpreadBlessing,
    1: setSpreadBlessing
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const {
    0: inputValue,
    1: setInputValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  var youTubeUrl = "https://brahmakumaris.org.au/new/wp-content/uploads/2021/08/Main-Comp-V13-1.m4v";
  if (router.query.lan == "tamil") youTubeUrl = "https://youtu.be/vFhhN4JpqgY";else if (router.query.lan == "hindi") youTubeUrl = "https://youtu.be/TO2h9hqNVQ4";else if (router.query.lan == "telugu") youTubeUrl = "https://youtu.be/An-RPrXreOc";else if (router.query.lan == "spanish") youTubeUrl = "https://youtu.be/An-RPrXreOc";else if (router.query.lan == "greek") youTubeUrl = "https://youtu.be/An-RPrXreOc";else if (router.query.lan == "italian") youTubeUrl = "https://youtu.be/An-RPrXreOc";else if (router.query.lan == "port") youTubeUrl = "https://youtu.be/An-RPrXreOc";else if (router.query.lan == "marathi") youTubeUrl = "https://youtu.be/An-RPrXreOc";else if (router.query.lan == "russian") youTubeUrl = "https://youtu.be/An-RPrXreOc";else if (router.query.lan == "french") youTubeUrl = "https://youtu.be/An-RPrXreOc";
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (router.isReady) {
      const _qryParam = router.query;
      setQueryParam(_qryParam);
    }
  }, [router.query]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const fetchData = async () => {
      try {
        if (queryParam["name"]) {
          const url = `https://script.google.com/macros/s/AKfycbz6Lq22VVTFBlGPyj3Ph6q15DFtzFFchB11WPiMkQ/exec?i=2&fullname=${queryParam["name"]}&lang=${queryParam["lan"]}`;
          const res = await fetch(`${url}`);
          const data = await res.json();
          setCardInfo(data);
          return data;
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [queryParam]);

  const handleGaveBlessing = ({
    played,
    playedSeconds
  }) => {
    if (playedSeconds >= 5 && !GaveBlessing) {
      setGaveBlessing(true);
    }

    if (playedSeconds >= 208) {
      setWatchComplete(true);
    }
  };

  const handleChange = event => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    const fetchData = async () => {
      try {
        const url = `https://script.google.com/macros/s/AKfycbwng-kD9PtaAg46DRir8WfiiDrmQjk0saPzzTrx/exec?i=1&blessing=${inputValue}`;
        setSpreadBlessing(false);
        const res = await fetch(`${url}`);
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
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
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_player__WEBPACK_IMPORTED_MODULE_2___default()), {
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
              children: "Thank you for joining the Australian Virtual Centre online Diwali experience"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 11
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 98
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: "Visit the Australian Virtual (Meditation) Centre for more free online classes, events, meditation and more!"
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

/***/ "react-player":
/*!*******************************!*\
  !*** external "react-player" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("react-player");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "timers":
/*!*************************!*\
  !*** external "timers" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("timers");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/diwali.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU1BO0FBQUEscUNBQUs7QUFBRyxvQkFBSSxFQUFDLGlEQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFOQSxlQU13SDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQU54SDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBakJILGVBNkJHO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBN0JILEVBK0JJRixZQUFZLGlCQUNYO0FBQUsscUJBQVMsRUFBR0UsYUFBYSxHQUFHLFFBQUgsR0FBYyxLQUE1QztBQUFBLG9DQUNEO0FBQUssdUJBQVMsRUFBQyxNQUFmO0FBQUEsd0JBQXVCTixRQUFRLENBQUMsV0FBRDtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURDLGVBRUQ7QUFBSyx1QkFBUyxFQUFDLFFBQWY7QUFBQSx5QkFBeUJBLFFBQVEsQ0FBQyxRQUFELENBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBaENMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFpREE7QUFBQTs7Ozs7Ozs7OztBQ3pKRjs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZXJ2ZXJsZXNzLXNhYXMvLi9wYWdlcy9kaXdhbGkudHN4Iiwid2VicGFjazovL3NlcnZlcmxlc3Mtc2Fhcy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL3NlcnZlcmxlc3Mtc2Fhcy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vc2VydmVybGVzcy1zYWFzL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9zZXJ2ZXJsZXNzLXNhYXMvZXh0ZXJuYWwgXCJyZWFjdC1wbGF5ZXJcIiIsIndlYnBhY2s6Ly9zZXJ2ZXJsZXNzLXNhYXMvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9zZXJ2ZXJsZXNzLXNhYXMvZXh0ZXJuYWwgXCJ0aW1lcnNcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IFJlYWN0UGxheWVyIGZyb20gJ3JlYWN0LXBsYXllcic7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgc2V0VGltZW91dCB9IGZyb20gJ3RpbWVycyc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcblxyXG5jb25zdCBzbGVlcCA9IChtaWxsaXNlY29uZHMpID0+IHtcclxuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbWlsbGlzZWNvbmRzKSk7XHJcbn07XHJcblxyXG5cdGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERpd2FsaSgpICB7XHJcblx0XHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHRcdGNvbnN0IHF1ZXJ5ID0gcm91dGVyLnF1ZXJ5O1xyXG5cdFx0Y29uc3QgW2NhcmRJbmZvLCBzZXRDYXJkSW5mb10gPSB1c2VTdGF0ZSh7fSk7XHJcblx0XHRjb25zdCBbcXVlcnlQYXJhbSwgc2V0UXVlcnlQYXJhbV0gPSB1c2VTdGF0ZSh7fSk7XHRcdFx0XHJcblx0XHRjb25zdCBbR2F2ZUJsZXNzaW5nLCBzZXRHYXZlQmxlc3NpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdFx0Y29uc3QgW1dhdGNoQ29tcGxldGUsIHNldFdhdGNoQ29tcGxldGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdFx0Y29uc3QgW1NwcmVhZEJsZXNzaW5nLCBzZXRTcHJlYWRCbGVzc2luZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHRcdGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcblx0XHR2YXIgeW91VHViZVVybCA9IFwiaHR0cHM6Ly9icmFobWFrdW1hcmlzLm9yZy5hdS9uZXcvd3AtY29udGVudC91cGxvYWRzLzIwMjEvMDgvTWFpbi1Db21wLVYxMy0xLm00dlwiO1xyXG5cclxuXHRcdGlmKHJvdXRlci5xdWVyeS5sYW4gPT0gXCJ0YW1pbFwiKVxyXG5cdFx0XHR5b3VUdWJlVXJsID0gXCJodHRwczovL3lvdXR1LmJlL3ZGaGhONEpwcWdZXCI7XHJcblx0XHRlbHNlIGlmKHJvdXRlci5xdWVyeS5sYW4gPT0gXCJoaW5kaVwiKVxyXG5cdFx0XHR5b3VUdWJlVXJsID0gXCJodHRwczovL3lvdXR1LmJlL1RPMmg5aHFOVlE0XCI7XHJcblx0XHRlbHNlIGlmKHJvdXRlci5xdWVyeS5sYW4gPT0gXCJ0ZWx1Z3VcIilcclxuXHRcdFx0eW91VHViZVVybCA9IFwiaHR0cHM6Ly95b3V0dS5iZS9Bbi1SUHJYcmVPY1wiO1xyXG5cdFx0ZWxzZSBpZihyb3V0ZXIucXVlcnkubGFuID09IFwic3BhbmlzaFwiKVxyXG5cdFx0XHR5b3VUdWJlVXJsID0gXCJodHRwczovL3lvdXR1LmJlL0FuLVJQclhyZU9jXCI7XHJcblx0XHRlbHNlIGlmKHJvdXRlci5xdWVyeS5sYW4gPT0gXCJncmVla1wiKVxyXG5cdFx0XHR5b3VUdWJlVXJsID0gXCJodHRwczovL3lvdXR1LmJlL0FuLVJQclhyZU9jXCI7XHJcblx0XHRlbHNlIGlmKHJvdXRlci5xdWVyeS5sYW4gPT0gXCJpdGFsaWFuXCIpXHJcblx0XHRcdHlvdVR1YmVVcmwgPSBcImh0dHBzOi8veW91dHUuYmUvQW4tUlByWHJlT2NcIjtcclxuXHRcdGVsc2UgaWYocm91dGVyLnF1ZXJ5LmxhbiA9PSBcInBvcnRcIilcclxuXHRcdFx0eW91VHViZVVybCA9IFwiaHR0cHM6Ly95b3V0dS5iZS9Bbi1SUHJYcmVPY1wiO1xyXG5cdFx0ZWxzZSBpZihyb3V0ZXIucXVlcnkubGFuID09IFwibWFyYXRoaVwiKVxyXG5cdFx0XHR5b3VUdWJlVXJsID0gXCJodHRwczovL3lvdXR1LmJlL0FuLVJQclhyZU9jXCI7XHJcblx0XHRlbHNlIGlmKHJvdXRlci5xdWVyeS5sYW4gPT0gXCJydXNzaWFuXCIpXHJcblx0XHRcdHlvdVR1YmVVcmwgPSBcImh0dHBzOi8veW91dHUuYmUvQW4tUlByWHJlT2NcIjtcclxuXHRcdGVsc2UgaWYocm91dGVyLnF1ZXJ5LmxhbiA9PSBcImZyZW5jaFwiKVxyXG5cdFx0XHR5b3VUdWJlVXJsID0gXCJodHRwczovL3lvdXR1LmJlL0FuLVJQclhyZU9jXCI7XHJcblxyXG5cclxuXHRcdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRcdGlmIChyb3V0ZXIuaXNSZWFkeSkge1xyXG5cdFx0XHRcdGNvbnN0IF9xcnlQYXJhbSA9IHJvdXRlci5xdWVyeTtcclxuXHRcdFx0XHRzZXRRdWVyeVBhcmFtKF9xcnlQYXJhbSk7IFxyXG5cdFx0XHR9XHJcblx0XHRcdH0sIFtyb3V0ZXIucXVlcnldKTtcclxuXHRcclxuXHRcdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRcdGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuXHRcdFx0XHR0cnkge1x0XHJcblx0XHRcdFx0XHRpZihxdWVyeVBhcmFtW1wibmFtZVwiXSlcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Y29uc3QgdXJsID0gYGh0dHBzOi8vc2NyaXB0Lmdvb2dsZS5jb20vbWFjcm9zL3MvQUtmeWNiejZMcTIyVlZURkJsR1B5ajNQaDZxMTVERnR6RkZjaEIxMVdQaU1rUS9leGVjP2k9MiZmdWxsbmFtZT0ke3F1ZXJ5UGFyYW1bXCJuYW1lXCJdfSZsYW5nPSR7cXVlcnlQYXJhbVtcImxhblwiXX1gO1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7dXJsfWApO1xyXG5cdFx0XHRcdFx0XHRjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHRcdFx0XHRcdFx0c2V0Q2FyZEluZm8oZGF0YSk7XHJcblx0XHRcdFx0XHRcdHJldHVybiBkYXRhO1xyXG5cdFx0XHRcdFx0fVx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cdFx0XHRmZXRjaERhdGEoKTtcclxuXHRcdH0sIFtxdWVyeVBhcmFtXSk7XHJcblx0XHRcclxuXHRcdGNvbnN0IGhhbmRsZUdhdmVCbGVzc2luZyA9ICh7cGxheWVkLCBwbGF5ZWRTZWNvbmRzfSkgPT4ge1xyXG5cdFx0XHRpZihwbGF5ZWRTZWNvbmRzID49IDUgJiYgIUdhdmVCbGVzc2luZykge1x0XHRcdFxyXG5cdFx0XHRcdHNldEdhdmVCbGVzc2luZyh0cnVlKVx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdH1cclxuXHRcdFx0aWYocGxheWVkU2Vjb25kcyA+PSAyMDgpIHtcdFx0XHRcclxuXHRcdFx0XHRzZXRXYXRjaENvbXBsZXRlKHRydWUpXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG5cdFx0XHRzZXRJbnB1dFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG5cdFx0XHRjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcblx0XHRcdFx0dHJ5IHtcdFxyXG5cclxuXHRcdFx0XHRcdFx0Y29uc3QgdXJsID0gYGh0dHBzOi8vc2NyaXB0Lmdvb2dsZS5jb20vbWFjcm9zL3MvQUtmeWNid25nLWtEOVB0YUFnNDZEUmlyOFdmaWlEcm1Ramswc2FQenpUcngvZXhlYz9pPTEmYmxlc3Npbmc9JHtpbnB1dFZhbHVlfWA7XHJcblx0XHRcdFx0XHRcdHNldFNwcmVhZEJsZXNzaW5nKGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7dXJsfWApO1xyXG5cdFx0XHRcdFx0XHRjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGRhdGE7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblx0XHRcdGZldGNoRGF0YSgpO1xyXG5cdFx0fVxyXG5cdFx0XHRcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXY+XHJcblx0XHRcdFx0PEhlYWQ+XHJcblx0XHRcdFx0PHRpdGxlPkRpd2FsaSBCbGVzc2luZ3MgMjAyMTwvdGl0bGU+XHRcdFx0XHRcdFxyXG5cdFx0XHQ8L0hlYWQ+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIlwiPlx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdCFXYXRjaENvbXBsZXRlICYmIChcclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwbGF5ZXItd3JhcHBlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxSZWFjdFBsYXllciBjbGFzc05hbWU9XCJyZWFjdC1wbGF5ZXJcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHVybD17eW91VHViZVVybH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aD1cIjEwMCVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodD1cIjEwMCVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBsYXlpbmdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb250cm9sc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uUHJvZ3Jlc3M9e2hhbmRsZUdhdmVCbGVzc2luZ31cdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRXYXRjaENvbXBsZXRlICYmIChcclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0aGFua3lvdVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdj5UaGFuayB5b3UgZm9yIGpvaW5pbmcgdGhlIEF1c3RyYWxpYW4gVmlydHVhbCBDZW50cmUgb25saW5lIERpd2FsaSBleHBlcmllbmNlPC9kaXY+PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXY+VmlzaXQgdGhlIEF1c3RyYWxpYW4gVmlydHVhbCAoTWVkaXRhdGlvbikgQ2VudHJlIGZvciBtb3JlIGZyZWUgb25saW5lIGNsYXNzZXMsIGV2ZW50cywgbWVkaXRhdGlvbiBhbmQgbW9yZSE8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdj48YSBocmVmPVwiaHR0cHM6Ly9icmFobWFrdW1hcmlzLm9yZy5hdS9uZXcvdmlydHVhbC1jZW50cmVcIj5odHRwczovL2JyYWhtYWt1bWFyaXMub3JnLmF1L25ldy92aXJ0dWFsLWNlbnRyZTwvYT48L2Rpdj48YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnI+PC9icj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdEdhdmVCbGVzc2luZyAmJiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ge1dhdGNoQ29tcGxldGUgPyBcImJveEVuZFwiIDogXCJib3hcIn0+XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuYW1lXCI+e2NhcmRJbmZvW1wiZGlzcF9uYW1lXCJdfTwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2xvZ2FuXCI+e2NhcmRJbmZvW1wic2xvZ2FuXCJdfSA8L2Rpdj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cdFx0XHRcdFxyXG5cdFx0KTtcclxuXHR9O1xyXG5cdFxyXG5cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXBsYXllclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidGltZXJzXCIpOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUmVhY3RQbGF5ZXIiLCJ1c2VSb3V0ZXIiLCJzZXRUaW1lb3V0IiwiSGVhZCIsInNsZWVwIiwibWlsbGlzZWNvbmRzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJEaXdhbGkiLCJyb3V0ZXIiLCJxdWVyeSIsImNhcmRJbmZvIiwic2V0Q2FyZEluZm8iLCJxdWVyeVBhcmFtIiwic2V0UXVlcnlQYXJhbSIsIkdhdmVCbGVzc2luZyIsInNldEdhdmVCbGVzc2luZyIsIldhdGNoQ29tcGxldGUiLCJzZXRXYXRjaENvbXBsZXRlIiwiU3ByZWFkQmxlc3NpbmciLCJzZXRTcHJlYWRCbGVzc2luZyIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwieW91VHViZVVybCIsImxhbiIsImlzUmVhZHkiLCJfcXJ5UGFyYW0iLCJmZXRjaERhdGEiLCJ1cmwiLCJyZXMiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlR2F2ZUJsZXNzaW5nIiwicGxheWVkIiwicGxheWVkU2Vjb25kcyIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVDbGljayJdLCJzb3VyY2VSb290IjoiIn0=