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
  var mode = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])({
    mobileMode: null,
    _mobileMode: null,
    checkLogoHigher: null,
    _checkLogoHigher: null
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    mode.current.mobileMode = innerWidth <= 800 ? true : false;
    mode.current.checkLogoHigher = innerWidth > 800 && demoRef.current.clientHeight / 3 > logoRef.current.clientWidth * 4.5 / 6 ? true : false;
    mode.current._mobileMode = mode.current.mobileMode;
    mode.current._checkLogoHigher = mode.current.checkLogoHigher;
    logoDisplayContext.logoDisplayDispatch({
      demoClientHeight: demoRef.current.clientHeight,
      logoClientWidth: logoRef.current.clientWidth
    });
    props.refs.demoRef.current = demoRef.current;
    props.refs.logoRef.current = logoRef.current;
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var updateResize = function updateResize() {
      mode.current._mobileMode = innerWidth <= 800 ? true : false;

      if (mode.current.mobileMode !== mode.current._mobileMode) {
        mode.current.mobileMode = !mode.current.mobileMode;
        logoDisplayContext.logoDisplayDispatch({
          demoClientHeight: demoRef.current.clientHeight,
          logoClientWidth: logoRef.current.clientWidth
        });
      }

      if (innerWidth > 800) {
        mode.current._checkLogoHigher = demoRef.current.clientHeight / 3 > logoRef.current.clientWidth * 4.5 / 6 ? true : false;

        if (mode.current.checkLogoHigher !== mode.current._checkLogoHigher) {
          mode.current.checkLogoHigher = !mode.current.checkLogoHigher;
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
        lineNumber: 59,
        columnNumber: 7
      }, _this)
    );
  }, [logoDisplayContext.logoDisplay.logo_heigher, logoDisplayContext.logoDisplay.logo_wider]);
}

_s(Demo, "bN94ZpUfnLLb5oiTsSyvuQ14WlA=");

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
        lineNumber: 70,
        columnNumber: 10
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        id: "logo_wider",
        src: "/assets/images/logo/logo_wider.svg",
        style: {
          display: props.context.logoDisplay.logo_wider
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 10
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
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
        lineNumber: 74,
        columnNumber: 10
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "demoVideoBgCSSAnim"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 10
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 8
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "demoSVG",
      className: "blurSVG"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 8
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 68,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EZW1vLmpzeCJdLCJuYW1lcyI6WyJEZW1vIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwiZGVtb1JlZiIsInVzZVJlZiIsImxvZ29SZWYiLCJkZW1vVmlkZW9SZWYiLCJsb2dvRGlzcGxheUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiTG9nb0Rpc3BsYXlDb250ZXh0IiwiZXh0ZW5kTWVudUNvbnRleHQiLCJFeHRlbmRNZW51Q29udGV4dCIsIm1vZGUiLCJtb2JpbGVNb2RlIiwiX21vYmlsZU1vZGUiLCJjaGVja0xvZ29IaWdoZXIiLCJfY2hlY2tMb2dvSGlnaGVyIiwidXNlRWZmZWN0IiwiY3VycmVudCIsImlubmVyV2lkdGgiLCJjbGllbnRIZWlnaHQiLCJjbGllbnRXaWR0aCIsImxvZ29EaXNwbGF5RGlzcGF0Y2giLCJkZW1vQ2xpZW50SGVpZ2h0IiwibG9nb0NsaWVudFdpZHRoIiwicmVmcyIsInVwZGF0ZVJlc2l6ZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib25DbGljayIsInVzZU1lbW8iLCJsb2dvRGlzcGxheSIsImxvZ29faGVpZ2hlciIsImxvZ29fd2lkZXIiLCJEZW1vUmVuZGVyIiwiZGlzcGxheSIsImNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUNBOztBQUVBLFNBQVNBLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUFBOztBQUFBOztBQUNuQkMsU0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWjtBQUNBLE1BQU1DLE9BQU8sR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQXRCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHRCxvREFBTSxDQUFDLElBQUQsQ0FBdEI7QUFDQSxNQUFNRSxZQUFZLEdBQUdGLG9EQUFNLENBQUMsSUFBRCxDQUEzQjtBQUNBLE1BQU1HLGtCQUFrQixHQUFHQyx3REFBVSxDQUFDQyxrRUFB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O0FBQXVCLFdBQUcsRUFBQyxzQ0FBM0I7QUFBa0UsYUFBSyxFQUFFO0FBQUVNLGlCQUFPLEVBQUVwQyxLQUFLLENBQUNxQyxPQUFOLENBQWNMLFdBQWQsQ0FBMEJDO0FBQXJDO0FBQXpFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUssVUFBRSxFQUFDLFlBQVI7QUFBcUIsV0FBRyxFQUFDLG9DQUF6QjtBQUE4RCxhQUFLLEVBQUU7QUFBRUcsaUJBQU8sRUFBRXBDLEtBQUssQ0FBQ3FDLE9BQU4sQ0FBY0wsV0FBZCxDQUEwQkU7QUFBckM7QUFBckU7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURILGVBS0c7QUFBUSxRQUFFLEVBQUMsV0FBWDtBQUF1QixTQUFHLEVBQUVsQyxLQUFLLENBQUNNLFlBQWxDO0FBQUEsOEJBQ0U7QUFBUSxXQUFHLEVBQUMsc0dBQVo7QUFBdUksbUJBQVcsRUFBQyxHQUFuSjtBQUF1SixhQUFLLEVBQUMsc0JBQTdKO0FBQW9MLHVCQUFlO0FBQW5NO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUssVUFBRSxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxILGVBU0c7QUFBSyxRQUFFLEVBQUMsU0FBUjtBQUFrQixlQUFTLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBYUQ7O01BaEJRNkIsVTtBQWlCTXBDLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjlkMzY0NTU4NTljZjY3MDU5Njk3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBjcmVhdGVDb250ZXh0LCB1c2VSZWYsIHVzZVJlZHVjZXIsIG1lbW8sIHVzZU1lbW8sIHVzZUNvbnRleHR9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0L2Nqcy9yZWFjdC5kZXZlbG9wbWVudFwiO1xyXG5pbXBvcnQgeyBFeHRlbmRNZW51Q29udGV4dCwgTG9nb0Rpc3BsYXlDb250ZXh0IH0gZnJvbSBcIi4vSG9tZUxheW91dC5qc3hcIjtcclxuXHJcbmZ1bmN0aW9uIERlbW8ocHJvcHMpIHtcclxuICBjb25zb2xlLmxvZyhcIi0tLURFTU8tLS1cIik7XHJcbiAgY29uc3QgZGVtb1JlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBsb2dvUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IGRlbW9WaWRlb1JlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBsb2dvRGlzcGxheUNvbnRleHQgPSB1c2VDb250ZXh0KExvZ29EaXNwbGF5Q29udGV4dCk7XHJcbiAgY29uc3QgZXh0ZW5kTWVudUNvbnRleHQgPSB1c2VDb250ZXh0KEV4dGVuZE1lbnVDb250ZXh0KTtcclxuICBjb25zdCBtb2RlID0gIHVzZVJlZih7IG1vYmlsZU1vZGU6IG51bGwsIF9tb2JpbGVNb2RlOiBudWxsLCBjaGVja0xvZ29IaWdoZXI6IG51bGwsIF9jaGVja0xvZ29IaWdoZXI6IG51bGx9KTtcclxuXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBtb2RlLmN1cnJlbnQubW9iaWxlTW9kZSA9IGlubmVyV2lkdGggPD0gODAwID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgbW9kZS5jdXJyZW50LmNoZWNrTG9nb0hpZ2hlciA9IGlubmVyV2lkdGggPiA4MDAgJiYgZGVtb1JlZi5jdXJyZW50LmNsaWVudEhlaWdodCAvIDMgPiAobG9nb1JlZi5jdXJyZW50LmNsaWVudFdpZHRoICogNC41KSAvIDYgPyB0cnVlIDogZmFsc2U7XHJcbiAgICBtb2RlLmN1cnJlbnQuX21vYmlsZU1vZGUgPSBtb2RlLmN1cnJlbnQubW9iaWxlTW9kZTtcclxuICAgIG1vZGUuY3VycmVudC5fY2hlY2tMb2dvSGlnaGVyID0gbW9kZS5jdXJyZW50LmNoZWNrTG9nb0hpZ2hlcjtcclxuXHJcbiAgICBsb2dvRGlzcGxheUNvbnRleHQubG9nb0Rpc3BsYXlEaXNwYXRjaCh7IGRlbW9DbGllbnRIZWlnaHQ6IGRlbW9SZWYuY3VycmVudC5jbGllbnRIZWlnaHQsIGxvZ29DbGllbnRXaWR0aDogbG9nb1JlZi5jdXJyZW50LmNsaWVudFdpZHRoIH0pO1xyXG4gICAgcHJvcHMucmVmcy5kZW1vUmVmLmN1cnJlbnQgPSBkZW1vUmVmLmN1cnJlbnQ7XHJcbiAgICBwcm9wcy5yZWZzLmxvZ29SZWYuY3VycmVudCA9IGxvZ29SZWYuY3VycmVudDtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgY29uc3QgdXBkYXRlUmVzaXplID0gKCkgPT4ge1xyXG4gICAgICBtb2RlLmN1cnJlbnQuX21vYmlsZU1vZGUgPSBpbm5lcldpZHRoIDw9IDgwMCA/IHRydWUgOiBmYWxzZTtcclxuXHJcbiAgICAgIGlmIChtb2RlLmN1cnJlbnQubW9iaWxlTW9kZSAhPT0gbW9kZS5jdXJyZW50Ll9tb2JpbGVNb2RlKSB7XHJcbiAgICAgICAgbW9kZS5jdXJyZW50Lm1vYmlsZU1vZGUgPSAhbW9kZS5jdXJyZW50Lm1vYmlsZU1vZGU7XHJcbiAgICAgICAgbG9nb0Rpc3BsYXlDb250ZXh0LmxvZ29EaXNwbGF5RGlzcGF0Y2goeyBkZW1vQ2xpZW50SGVpZ2h0OiBkZW1vUmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0LCBsb2dvQ2xpZW50V2lkdGg6IGxvZ29SZWYuY3VycmVudC5jbGllbnRXaWR0aCB9KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaW5uZXJXaWR0aCA+IDgwMCkge1xyXG4gICAgICAgIG1vZGUuY3VycmVudC5fY2hlY2tMb2dvSGlnaGVyID0gZGVtb1JlZi5jdXJyZW50LmNsaWVudEhlaWdodCAvIDMgPiAobG9nb1JlZi5jdXJyZW50LmNsaWVudFdpZHRoICogNC41KSAvIDYgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKG1vZGUuY3VycmVudC5jaGVja0xvZ29IaWdoZXIgIT09IG1vZGUuY3VycmVudC5fY2hlY2tMb2dvSGlnaGVyKSB7XHJcbiAgICAgICAgICBtb2RlLmN1cnJlbnQuY2hlY2tMb2dvSGlnaGVyID0gIW1vZGUuY3VycmVudC5jaGVja0xvZ29IaWdoZXI7XHJcbiAgICAgICAgICBsb2dvRGlzcGxheUNvbnRleHQubG9nb0Rpc3BsYXlEaXNwYXRjaCh7IGRlbW9DbGllbnRIZWlnaHQ6IGRlbW9SZWYuY3VycmVudC5jbGllbnRIZWlnaHQsIGxvZ29DbGllbnRXaWR0aDogbG9nb1JlZi5jdXJyZW50LmNsaWVudFdpZHRoIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB1cGRhdGVSZXNpemUpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdXBkYXRlUmVzaXplKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICBmdW5jdGlvbiBvbkNsaWNrKCkge1xyXG4gICAgZXh0ZW5kTWVudUNvbnRleHQoXCJsb2dvXCIpO1xyXG4gIH1cclxuXHJcbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xyXG5cclxuICByZXR1cm4gdXNlTWVtbygoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAvLyA8ZGl2PjwvZGl2PlxyXG4gICAgICA8RGVtb1JlbmRlciBkZW1vUmVmPXtkZW1vUmVmfSBsb2dvUmVmPXtsb2dvUmVmfSBkZW1vVmlkZW9SZWY9e2RlbW9WaWRlb1JlZn0gb25DbGljaz17b25DbGlja30gY29udGV4dD17bG9nb0Rpc3BsYXlDb250ZXh0fT48L0RlbW9SZW5kZXI+XHJcbiAgICApO1xyXG4gIH0sIFsgbG9nb0Rpc3BsYXlDb250ZXh0LmxvZ29EaXNwbGF5LmxvZ29faGVpZ2hlciwgbG9nb0Rpc3BsYXlDb250ZXh0LmxvZ29EaXNwbGF5LmxvZ29fd2lkZXJdKTtcclxufVxyXG5cclxuZnVuY3Rpb24gRGVtb1JlbmRlcihwcm9wcykge1xyXG4gIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLURlbW9SZW5kZXItLS0tLS0tLS0tLVwiKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGlkPVwiZGVtb1wiIHJlZj17cHJvcHMuZGVtb1JlZn0+XHJcbiAgICAgICA8aGVhZGVyIGlkPVwibG9nb1wiIHJlZj17cHJvcHMubG9nb1JlZn0gb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgICAgIDxpbWcgaWQ9XCJsb2dvX2hlaWdoZXJcIiBzcmM9XCIvYXNzZXRzL2ltYWdlcy9sb2dvL2xvZ29faGVpZ2hlci5zdmdcIiBzdHlsZT17eyBkaXNwbGF5OiBwcm9wcy5jb250ZXh0LmxvZ29EaXNwbGF5LmxvZ29faGVpZ2hlciB9fSAvPlxyXG4gICAgICAgICA8aW1nIGlkPVwibG9nb193aWRlclwiIHNyYz1cIi9hc3NldHMvaW1hZ2VzL2xvZ28vbG9nb193aWRlci5zdmdcIiBzdHlsZT17eyBkaXNwbGF5OiBwcm9wcy5jb250ZXh0LmxvZ29EaXNwbGF5LmxvZ29fd2lkZXIgfX0vPlxyXG4gICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICA8aGVhZGVyIGlkPVwiZGVtb1ZpZGVvXCIgcmVmPXtwcm9wcy5kZW1vVmlkZW9SZWZ9PlxyXG4gICAgICAgICA8aWZyYW1lIHNyYz1cImh0dHBzOi8vcGxheWVyLnZpbWVvLmNvbS92aWRlby81NTMzOTY5NDk/YXV0b3BsYXk9MSZhbXA7Y29sb3I9ZmZmZmZmJmFtcDt0aXRsZT0wJmFtcDtieWxpbmU9MCZhbXA7cG9ydHJhaXQ9MCZhbXA7bXV0ZWQ9MVwiIGZyYW1lQm9yZGVyPVwiMFwiIGFsbG93PVwiYXV0b3BsYXk7IGZ1bGxzY3JlZW5cIiBhbGxvd0Z1bGxTY3JlZW4+PC9pZnJhbWU+XHJcbiAgICAgICAgIDxkaXYgaWQ9XCJkZW1vVmlkZW9CZ0NTU0FuaW1cIj48L2Rpdj5cclxuICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgPGRpdiBpZD1cImRlbW9TVkdcIiBjbGFzc05hbWU9XCJibHVyU1ZHXCI+PC9kaXY+XHJcbiAgICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRGVtbztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==