webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Demo.jsx":
/*!*****************************!*\
  !*** ./components/Demo.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HomeLayout_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HomeLayout.jsx */ "./components/HomeLayout.jsx");


var _jsxFileName = "G:\\gitub\\demoreel\\components\\Demo.jsx",
    _s = $RefreshSig$();

 // import { useContext } from "react/cjs/react.development";



function Demo(props) {
  _s();

  var _this = this;

  console.log("---DEMO---");
  var demoRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var logoRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var demoVideoRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var logoDisplayContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_HomeLayout_jsx__WEBPACK_IMPORTED_MODULE_2__["LogoDisplayContext"]);
  var extendMenuContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_HomeLayout_jsx__WEBPACK_IMPORTED_MODULE_2__["ExtendMenuContext"]);

  var mobileMode, _mobileMode;

  var checkLogoHigher, _checkLogoHigher;

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    mobileMode = innerWidth <= 800 ? true : false;
    checkLogoHigher = innerWidth > 800 && demoRef.current.clientHeight / 3 > logoRef.current.clientWidth * 4.5 / 6 ? true : false;
    _checkLogoHigher = checkLogoHigher;
    logoDisplayContext.logoDisplayDispatch({
      demoClientHeight: demoRef.current.clientHeight,
      logoClientWidth: logoRef.current.clientWidth
    });
    props.refs.demoRef.current = demoRef.current;
    props.refs.logoRef.current = logoRef.current;

    var updateResize = function updateResize() {
      // console.log('demoRef: ',demoRef.current.clientHeight, "demo: ",demo.clientHeight)
      _mobileMode = innerWidth <= 800 ? true : false;

      if (mobileMode !== _mobileMode) {
        mobileMode = _mobileMode;
        logoDisplayContext.logoDisplayDispatch({
          demoClientHeight: demoRef.current.clientHeight,
          logoClientWidth: logoRef.current.clientWidth
        });
      }

      if (innerWidth > 800) {
        _checkLogoHigher = demoRef.current.clientHeight / 3 > logoRef.current.clientWidth * 4.5 / 6 ? true : false;

        if (checkLogoHigher !== _checkLogoHigher) {
          checkLogoHigher = !checkLogoHigher;
          logoDisplayContext.logoDisplayDispatch({
            demoClientHeight: demoRef.current.clientHeight,
            logoClientWidth: logoRef.current.clientWidth
          });
        }
      }
    };

    window.addEventListener("resize", updateResize);
    return function () {
      window.removeEventListener("resize", updateResize);
    };
  }, []);

  function onClick() {
    extendMenuContext("logo");
  } //------------------------------------------------------//


  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return (
      /*#__PURE__*/
      // <div></div>
      Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DemoRender, {
        demoRef: demoRef,
        logoRef: logoRef,
        demoVideoRef: demoVideoRef,
        onClick: onClick,
        context: logoDisplayContext
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 7
      }, _this)
    );
  }, [logoDisplayContext.logoDisplay.logo_heigher, logoDisplayContext.logoDisplay.logo_wider]);
}

_s(Demo, "cjYy6Sn9ErvQUU62EpXrjWmcbfo=");

_c = Demo;

function DemoRender(props) {
  console.log("----------DemoRender-----------");
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    id: "demo",
    ref: props.demoRef,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      id: "logo",
      ref: props.logoRef,
      onClick: props.onClick,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        id: "logo_heigher",
        src: "/assets/images/logo/logo_heigher.svg",
        style: {
          display: props.context.logoDisplay.logo_heigher
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 10
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        id: "logo_wider",
        src: "/assets/images/logo/logo_wider.svg",
        style: {
          display: props.context.logoDisplay.logo_wider
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 10
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 8
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      id: "demoVideo",
      ref: props.demoVideoRef,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("iframe", {
        src: "https://player.vimeo.com/video/553396949?autoplay=1&color=ffffff&title=0&byline=0&portrait=0&muted=1",
        frameBorder: "0",
        allow: "autoplay; fullscreen",
        allowFullScreen: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 10
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "demoVideoBgCSSAnim"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 10
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 8
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "demoSVG",
      className: "blurSVG"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 8
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 5
  }, this);
}

_c2 = DemoRender;
/* harmony default export */ __webpack_exports__["default"] = (Demo);

var _c, _c2;

$RefreshReg$(_c, "Demo");
$RefreshReg$(_c2, "DemoRender");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EZW1vLmpzeCJdLCJuYW1lcyI6WyJEZW1vIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwiZGVtb1JlZiIsInVzZVJlZiIsImxvZ29SZWYiLCJkZW1vVmlkZW9SZWYiLCJsb2dvRGlzcGxheUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiTG9nb0Rpc3BsYXlDb250ZXh0IiwiZXh0ZW5kTWVudUNvbnRleHQiLCJFeHRlbmRNZW51Q29udGV4dCIsIm1vYmlsZU1vZGUiLCJfbW9iaWxlTW9kZSIsImNoZWNrTG9nb0hpZ2hlciIsIl9jaGVja0xvZ29IaWdoZXIiLCJ1c2VFZmZlY3QiLCJpbm5lcldpZHRoIiwiY3VycmVudCIsImNsaWVudEhlaWdodCIsImNsaWVudFdpZHRoIiwibG9nb0Rpc3BsYXlEaXNwYXRjaCIsImRlbW9DbGllbnRIZWlnaHQiLCJsb2dvQ2xpZW50V2lkdGgiLCJyZWZzIiwidXBkYXRlUmVzaXplIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJvbkNsaWNrIiwidXNlTWVtbyIsImxvZ29EaXNwbGF5IiwibG9nb19oZWlnaGVyIiwibG9nb193aWRlciIsIkRlbW9SZW5kZXIiLCJkaXNwbGF5IiwiY29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0FBQ0E7O0FBRUEsU0FBU0EsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQUE7O0FBQUE7O0FBQ25CQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaO0FBQ0EsTUFBTUMsT0FBTyxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBdEI7QUFDQSxNQUFNQyxPQUFPLEdBQUdELG9EQUFNLENBQUMsSUFBRCxDQUF0QjtBQUNBLE1BQU1FLFlBQVksR0FBR0Ysb0RBQU0sQ0FBQyxJQUFELENBQTNCO0FBQ0EsTUFBTUcsa0JBQWtCLEdBQUdDLHdEQUFVLENBQUNDLGtFQUFELENBQXJD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QUUsRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSCxlQVNHO0FBQUssUUFBRSxFQUFDLFNBQVI7QUFBa0IsZUFBUyxFQUFDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFUSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWFEOztNQWhCUTRCLFU7QUFpQk1uQyxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45YzUxMjMwNTg0YjE3NDZjY2Y3Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgY3JlYXRlQ29udGV4dCwgdXNlUmVmLCB1c2VSZWR1Y2VyLCBtZW1vLCB1c2VNZW1vLCB1c2VDb250ZXh0fSBmcm9tIFwicmVhY3RcIjtcclxuLy8gaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdC9janMvcmVhY3QuZGV2ZWxvcG1lbnRcIjtcclxuaW1wb3J0IHsgRXh0ZW5kTWVudUNvbnRleHQsIExvZ29EaXNwbGF5Q29udGV4dCB9IGZyb20gXCIuL0hvbWVMYXlvdXQuanN4XCI7XHJcblxyXG5mdW5jdGlvbiBEZW1vKHByb3BzKSB7XHJcbiAgY29uc29sZS5sb2coXCItLS1ERU1PLS0tXCIpO1xyXG4gIGNvbnN0IGRlbW9SZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgbG9nb1JlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBkZW1vVmlkZW9SZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgbG9nb0Rpc3BsYXlDb250ZXh0ID0gdXNlQ29udGV4dChMb2dvRGlzcGxheUNvbnRleHQpO1xyXG4gIGNvbnN0IGV4dGVuZE1lbnVDb250ZXh0ID0gdXNlQ29udGV4dChFeHRlbmRNZW51Q29udGV4dCk7XHJcbiAgbGV0IG1vYmlsZU1vZGUsIF9tb2JpbGVNb2RlO1xyXG4gIGxldCBjaGVja0xvZ29IaWdoZXIsIF9jaGVja0xvZ29IaWdoZXI7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBtb2JpbGVNb2RlID0gaW5uZXJXaWR0aCA8PSA4MDAgPyB0cnVlIDogZmFsc2U7XHJcbiAgICBjaGVja0xvZ29IaWdoZXIgPSBpbm5lcldpZHRoID4gODAwICYmIGRlbW9SZWYuY3VycmVudC5jbGllbnRIZWlnaHQgLyAzID4gKGxvZ29SZWYuY3VycmVudC5jbGllbnRXaWR0aCAqIDQuNSkgLyA2ID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgX2NoZWNrTG9nb0hpZ2hlciA9IGNoZWNrTG9nb0hpZ2hlcjtcclxuICAgIGxvZ29EaXNwbGF5Q29udGV4dC5sb2dvRGlzcGxheURpc3BhdGNoKHsgZGVtb0NsaWVudEhlaWdodDogZGVtb1JlZi5jdXJyZW50LmNsaWVudEhlaWdodCwgbG9nb0NsaWVudFdpZHRoOiBsb2dvUmVmLmN1cnJlbnQuY2xpZW50V2lkdGggfSk7XHJcbiAgICBwcm9wcy5yZWZzLmRlbW9SZWYuY3VycmVudCA9IGRlbW9SZWYuY3VycmVudDtcclxuICAgIHByb3BzLnJlZnMubG9nb1JlZi5jdXJyZW50ID0gbG9nb1JlZi5jdXJyZW50O1xyXG5cclxuICAgIGNvbnN0IHVwZGF0ZVJlc2l6ZSA9ICgpID0+IHtcclxuICAgICAgLy8gY29uc29sZS5sb2coJ2RlbW9SZWY6ICcsZGVtb1JlZi5jdXJyZW50LmNsaWVudEhlaWdodCwgXCJkZW1vOiBcIixkZW1vLmNsaWVudEhlaWdodClcclxuICAgICAgX21vYmlsZU1vZGUgPSBpbm5lcldpZHRoIDw9IDgwMCA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgaWYgKG1vYmlsZU1vZGUgIT09IF9tb2JpbGVNb2RlKSB7XHJcbiAgICAgICAgbW9iaWxlTW9kZSA9IF9tb2JpbGVNb2RlO1xyXG4gICAgICAgIGxvZ29EaXNwbGF5Q29udGV4dC5sb2dvRGlzcGxheURpc3BhdGNoKHsgZGVtb0NsaWVudEhlaWdodDogZGVtb1JlZi5jdXJyZW50LmNsaWVudEhlaWdodCwgbG9nb0NsaWVudFdpZHRoOiBsb2dvUmVmLmN1cnJlbnQuY2xpZW50V2lkdGggfSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGlubmVyV2lkdGggPiA4MDApIHtcclxuICAgICAgICBfY2hlY2tMb2dvSGlnaGVyID0gZGVtb1JlZi5jdXJyZW50LmNsaWVudEhlaWdodCAvIDMgPiAobG9nb1JlZi5jdXJyZW50LmNsaWVudFdpZHRoICogNC41KSAvIDYgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgaWYgKGNoZWNrTG9nb0hpZ2hlciAhPT0gX2NoZWNrTG9nb0hpZ2hlcikge1xyXG4gICAgICAgICAgY2hlY2tMb2dvSGlnaGVyID0gIWNoZWNrTG9nb0hpZ2hlcjtcclxuICAgICAgICAgIGxvZ29EaXNwbGF5Q29udGV4dC5sb2dvRGlzcGxheURpc3BhdGNoKHsgZGVtb0NsaWVudEhlaWdodDogZGVtb1JlZi5jdXJyZW50LmNsaWVudEhlaWdodCwgbG9nb0NsaWVudFdpZHRoOiBsb2dvUmVmLmN1cnJlbnQuY2xpZW50V2lkdGggfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHVwZGF0ZVJlc2l6ZSk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB1cGRhdGVSZXNpemUpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGZ1bmN0aW9uIG9uQ2xpY2soKSB7XHJcbiAgICBleHRlbmRNZW51Q29udGV4dChcImxvZ29cIik7XHJcbiAgfVxyXG5cclxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXHJcblxyXG4gIHJldHVybiB1c2VNZW1vKCgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIC8vIDxkaXY+PC9kaXY+XHJcbiAgICAgIDxEZW1vUmVuZGVyIGRlbW9SZWY9e2RlbW9SZWZ9IGxvZ29SZWY9e2xvZ29SZWZ9IGRlbW9WaWRlb1JlZj17ZGVtb1ZpZGVvUmVmfSBvbkNsaWNrPXtvbkNsaWNrfSBjb250ZXh0PXtsb2dvRGlzcGxheUNvbnRleHR9PjwvRGVtb1JlbmRlcj5cclxuICAgICk7XHJcbiAgfSwgWyBsb2dvRGlzcGxheUNvbnRleHQubG9nb0Rpc3BsYXkubG9nb19oZWlnaGVyLCBsb2dvRGlzcGxheUNvbnRleHQubG9nb0Rpc3BsYXkubG9nb193aWRlcl0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBEZW1vUmVuZGVyKHByb3BzKSB7XHJcbiAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tRGVtb1JlbmRlci0tLS0tLS0tLS0tXCIpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9XCJkZW1vXCIgcmVmPXtwcm9wcy5kZW1vUmVmfT5cclxuICAgICAgIDxoZWFkZXIgaWQ9XCJsb2dvXCIgcmVmPXtwcm9wcy5sb2dvUmVmfSBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAgICAgPGltZyBpZD1cImxvZ29faGVpZ2hlclwiIHNyYz1cIi9hc3NldHMvaW1hZ2VzL2xvZ28vbG9nb19oZWlnaGVyLnN2Z1wiIHN0eWxlPXt7IGRpc3BsYXk6IHByb3BzLmNvbnRleHQubG9nb0Rpc3BsYXkubG9nb19oZWlnaGVyIH19IC8+XHJcbiAgICAgICAgIDxpbWcgaWQ9XCJsb2dvX3dpZGVyXCIgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvbG9nby9sb2dvX3dpZGVyLnN2Z1wiIHN0eWxlPXt7IGRpc3BsYXk6IHByb3BzLmNvbnRleHQubG9nb0Rpc3BsYXkubG9nb193aWRlciB9fS8+XHJcbiAgICAgICA8L2hlYWRlcj5cclxuICAgICAgIDxoZWFkZXIgaWQ9XCJkZW1vVmlkZW9cIiByZWY9e3Byb3BzLmRlbW9WaWRlb1JlZn0+XHJcbiAgICAgICAgIDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly9wbGF5ZXIudmltZW8uY29tL3ZpZGVvLzU1MzM5Njk0OT9hdXRvcGxheT0xJmFtcDtjb2xvcj1mZmZmZmYmYW1wO3RpdGxlPTAmYW1wO2J5bGluZT0wJmFtcDtwb3J0cmFpdD0wJmFtcDttdXRlZD0xXCIgZnJhbWVCb3JkZXI9XCIwXCIgYWxsb3c9XCJhdXRvcGxheTsgZnVsbHNjcmVlblwiIGFsbG93RnVsbFNjcmVlbj48L2lmcmFtZT5cclxuICAgICAgICAgPGRpdiBpZD1cImRlbW9WaWRlb0JnQ1NTQW5pbVwiPjwvZGl2PlxyXG4gICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICA8ZGl2IGlkPVwiZGVtb1NWR1wiIGNsYXNzTmFtZT1cImJsdXJTVkdcIj48L2Rpdj5cclxuICAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBEZW1vO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9