webpackHotUpdate_N_E("pages/index",{

/***/ "./components/menu/SvgFramePack.jsx":
/*!******************************************!*\
  !*** ./components/menu/SvgFramePack.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var G_gitub_demoreel_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _SvgFrame_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SvgFrame.jsx */ "./components/menu/SvgFrame.jsx");
/* harmony import */ var _HomeLayout_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../HomeLayout.jsx */ "./components/HomeLayout.jsx");




var _jsxFileName = "G:\\gitub\\demoreel\\components\\menu\\SvgFramePack.jsx",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(G_gitub_demoreel_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






function SvgFramePack(props) {
  _s();

  var _this = this;

  var extendMenuContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_HomeLayout_jsx__WEBPACK_IMPORTED_MODULE_5__["ExtendMenuContext"]);
  var clickContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_HomeLayout_jsx__WEBPACK_IMPORTED_MODULE_5__["ClickContext"]);
  console.log("-------SvgFramePack----------");
  var svgFrameRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var noen1Ref = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var noen2Ref = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var stopColor1Ref = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var stopColor2Ref = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var textRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var contentRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var neonOnTL = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    neonOnTL.current = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
      paused: true
    }).fromTo(stopColor1Ref.current, {
      stopColor: props.vals.stopColor[0]
    }, {
      stopColor: "rgb(254,246,222)",
      duration: 0.6,
      ease: "Sine.inOut"
    }, 0).fromTo(stopColor2Ref.current, {
      stopColor: props.vals.stopColor[1]
    }, {
      stopColor: "rgb(254,246,222)",
      duration: 0.6,
      ease: "Sine.inOut"
    }, 0);
  }, []);
  var mouseEnterHandler = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    neonOnTL.current.play();
    noen1Ref.current.classList.add("".concat(props.vals.id, "Neon1"));
    noen2Ref.current.classList.add("".concat(props.vals.id, "Neon2"));
  }, []); //if svgFrame div is not included in this component and put in into SvgFramePackRender,
  //  'enableClickContenxt' didn't affect to the svgFrame div.
  //  if put 'enableClickcontext' as a dependency, it worked, but it rerendered all its children, which is svgFrame
  //  so, I just bring the div in here.
  //  I thought I put it into MenuComponentRender, but now, I just kept it in here.

  var mouseLeaveHandler = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    if (clickContext.bigger !== props.vals.id) {
      neonOnTL.current.reverse();
      noen1Ref.current.classList.remove("".concat(props.vals.id, "Neon1"));
      noen2Ref.current.classList.remove("".concat(props.vals.id, "Neon2"));
    }
  }, [clickContext]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    //this is for "click off event".
    console.log("clickContext", clickContext);

    if (clickContext.biggered === props.vals.id) {
      neonOnTL.current.reverse();
      noen1Ref.current.classList.remove("".concat(props.vals.id, "Neon1"));
      noen2Ref.current.classList.remove("".concat(props.vals.id, "Neon2"));
    }
  }, [clickContext]);

  var onClick = function onClick(e) {
    extendMenuContext(e.currentTarget, props.vals.order, textRef.current, contentRef.current, [noen1Ref.current, noen2Ref.current]);
  };

  return Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "svgFramePack",
        onClick: onClick,
        ref: svgFrameRef,
        style: props.vals.menuSizeContext[props.vals.id + "_styleSvgFramePack"].style_svgFramePack,
        onMouseEnter: mouseEnterHandler,
        onMouseLeave: mouseLeaveHandler,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SvgFramePackRender, {
          vals: _objectSpread(_objectSpread({}, props.vals), {}, {
            refs: {
              noen1Ref: noen1Ref,
              noen2Ref: noen2Ref,
              stopColor1Ref: stopColor1Ref,
              stopColor2Ref: stopColor2Ref,
              textRef: textRef
            },
            menuSizeContext: props.vals.menuSizeContext,
            svgFrameRef: svgFrameRef
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "contents",
        ref: contentRef,
        onClick: onClick,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ContentRender, {
          vals: {
            contents: props.vals.contents
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }, _this)]
    }, void 0, true);
  }, [props.vals.menuSizeContext[props.vals.id + "_styleSvgFramePack"].style_svgFramePack]);
}

_s(SvgFramePack, "Tn/kFQPxJxYlvLoDwQCbqD3g4k8=");

_c = SvgFramePack;

function SvgFramePackRender(props) {
  console.log("-------SvgFramePackRender----------");
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "menuText",
      ref: props.vals.refs.textRef,
      children: props.vals.id.toUpperCase()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "neon neon1",
      ref: props.vals.refs.noen1Ref
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "neon neon2",
      ref: props.vals.refs.noen2Ref
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SvgFrame_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
      vals: {
        id: props.vals.id,
        stopColor: props.vals.stopColor,
        strokeColor: props.vals.strokeColor,
        ivory: props.vals.ivory,
        menuSizeContext: props.vals.menuSizeContext[props.vals.id + "_styleSvgFramePack"],
        svgFrameValuesImmutable: props.vals.svgFrameValuesImmutable,
        refs: {
          stopColor1Ref: props.vals.refs.stopColor1Ref,
          stopColor2Ref: props.vals.refs.stopColor2Ref
        }
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_c2 = SvgFramePackRender;

function ContentRender(props) {
  _s2();

  console.log("----------ContentRender----------------");
  return Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: props.vals.contents
    }, void 0, false);
  }, []);
}

_s2(ContentRender, "nwk+m61qLgjDVUp4IGV/072DDN4=");

_c3 = ContentRender;
/* harmony default export */ __webpack_exports__["default"] = (SvgFramePack);

var _c, _c2, _c3;

$RefreshReg$(_c, "SvgFramePack");
$RefreshReg$(_c2, "SvgFramePackRender");
$RefreshReg$(_c3, "ContentRender");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tZW51L1N2Z0ZyYW1lUGFjay5qc3giXSwibmFtZXMiOlsiU3ZnRnJhbWVQYWNrIiwicHJvcHMiLCJleHRlbmRNZW51Q29udGV4dCIsInVzZUNvbnRleHQiLCJFeHRlbmRNZW51Q29udGV4dCIsImNsaWNrQ29udGV4dCIsIkNsaWNrQ29udGV4dCIsImNvbnNvbGUiLCJsb2ciLCJzdmdGcmFtZVJlZiIsInVzZVJlZiIsIm5vZW4xUmVmIiwibm9lbjJSZWYiLCJzdG9wQ29sb3IxUmVmIiwic3RvcENvbG9yMlJlZiIsInRleHRSZWYiLCJjb250ZW50UmVmIiwibmVvbk9uVEwiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwiZ3NhcCIsInRpbWVsaW5lIiwicGF1c2VkIiwiZnJvbVRvIiwic3RvcENvbG9yIiwidmFscyIsImR1cmF0aW9uIiwiZWFzZSIsIm1vdXNlRW50ZXJIYW5kbGVyIiwidXNlQ2FsbGJhY2siLCJwbGF5IiwiY2xhc3NMaXN0IiwiYWRkIiwiaWQiLCJtb3VzZUxlYXZlSGFuZGxlciIsImJpZ2dlciIsInJldmVyc2UiLCJyZW1vdmUiLCJiaWdnZXJlZCIsIm9uQ2xpY2siLCJlIiwiY3VycmVudFRhcmdldCIsIm9yZGVyIiwidXNlTWVtbyIsIm1lbnVTaXplQ29udGV4dCIsInN0eWxlX3N2Z0ZyYW1lUGFjayIsInJlZnMiLCJjb250ZW50cyIsIlN2Z0ZyYW1lUGFja1JlbmRlciIsInRvVXBwZXJDYXNlIiwic3Ryb2tlQ29sb3IiLCJpdm9yeSIsInN2Z0ZyYW1lVmFsdWVzSW1tdXRhYmxlIiwiQ29udGVudFJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLFNBQVNBLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCO0FBQUE7O0FBQUE7O0FBQzNCLE1BQU1DLGlCQUFpQixHQUFHQyx3REFBVSxDQUFDQyxpRUFBRCxDQUFw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TUFBQUEsYTtBQU1NckQsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDAzMDc0ZTc4NGJlYWIzYWE4MTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjaywgdXNlTWVtb30gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBnc2FwIGZyb20gXCJnc2FwXCI7XHJcbmltcG9ydCBTdmdGcmFtZSBmcm9tIFwiLi9TdmdGcmFtZS5qc3hcIjtcclxuXHJcbmltcG9ydCB7IEV4dGVuZE1lbnVDb250ZXh0LCBDbGlja0NvbnRleHQgfSBmcm9tIFwiLi4vSG9tZUxheW91dC5qc3hcIjtcclxuXHJcbmZ1bmN0aW9uIFN2Z0ZyYW1lUGFjayhwcm9wcykge1xyXG4gIGNvbnN0IGV4dGVuZE1lbnVDb250ZXh0ID0gdXNlQ29udGV4dChFeHRlbmRNZW51Q29udGV4dCk7XHJcbiAgY29uc3QgY2xpY2tDb250ZXh0ID0gdXNlQ29udGV4dChDbGlja0NvbnRleHQpO1xyXG4gIGNvbnNvbGUubG9nKFwiLS0tLS0tLVN2Z0ZyYW1lUGFjay0tLS0tLS0tLS1cIik7XHJcblxyXG4gIGNvbnN0IHN2Z0ZyYW1lUmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3Qgbm9lbjFSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3Qgbm9lbjJSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3Qgc3RvcENvbG9yMVJlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBzdG9wQ29sb3IyUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IHRleHRSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBjb250ZW50UmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgbmVvbk9uVEwgPSB1c2VSZWYoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIG5lb25PblRMLmN1cnJlbnQgPSBnc2FwXHJcbiAgICAgIC50aW1lbGluZSh7IHBhdXNlZDogdHJ1ZSB9KVxyXG4gICAgICAuZnJvbVRvKFxyXG4gICAgICAgIHN0b3BDb2xvcjFSZWYuY3VycmVudCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBzdG9wQ29sb3I6IHByb3BzLnZhbHMuc3RvcENvbG9yWzBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc3RvcENvbG9yOiBcInJnYigyNTQsMjQ2LDIyMilcIixcclxuICAgICAgICAgIGR1cmF0aW9uOiAwLjYsXHJcbiAgICAgICAgICBlYXNlOiBcIlNpbmUuaW5PdXRcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIDBcclxuICAgICAgKVxyXG4gICAgICAuZnJvbVRvKFxyXG4gICAgICAgIHN0b3BDb2xvcjJSZWYuY3VycmVudCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBzdG9wQ29sb3I6IHByb3BzLnZhbHMuc3RvcENvbG9yWzFdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc3RvcENvbG9yOiBcInJnYigyNTQsMjQ2LDIyMilcIixcclxuICAgICAgICAgIGR1cmF0aW9uOiAwLjYsXHJcbiAgICAgICAgICBlYXNlOiBcIlNpbmUuaW5PdXRcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIDBcclxuICAgICAgKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG1vdXNlRW50ZXJIYW5kbGVyID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgbmVvbk9uVEwuY3VycmVudC5wbGF5KCk7XHJcbiAgICBub2VuMVJlZi5jdXJyZW50LmNsYXNzTGlzdC5hZGQoYCR7cHJvcHMudmFscy5pZH1OZW9uMWApO1xyXG4gICAgbm9lbjJSZWYuY3VycmVudC5jbGFzc0xpc3QuYWRkKGAke3Byb3BzLnZhbHMuaWR9TmVvbjJgKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vaWYgc3ZnRnJhbWUgZGl2IGlzIG5vdCBpbmNsdWRlZCBpbiB0aGlzIGNvbXBvbmVudCBhbmQgcHV0IGluIGludG8gU3ZnRnJhbWVQYWNrUmVuZGVyLFxyXG4gIC8vICAnZW5hYmxlQ2xpY2tDb250ZW54dCcgZGlkbid0IGFmZmVjdCB0byB0aGUgc3ZnRnJhbWUgZGl2LlxyXG4gIC8vICBpZiBwdXQgJ2VuYWJsZUNsaWNrY29udGV4dCcgYXMgYSBkZXBlbmRlbmN5LCBpdCB3b3JrZWQsIGJ1dCBpdCByZXJlbmRlcmVkIGFsbCBpdHMgY2hpbGRyZW4sIHdoaWNoIGlzIHN2Z0ZyYW1lXHJcbiAgLy8gIHNvLCBJIGp1c3QgYnJpbmcgdGhlIGRpdiBpbiBoZXJlLlxyXG4gIC8vICBJIHRob3VnaHQgSSBwdXQgaXQgaW50byBNZW51Q29tcG9uZW50UmVuZGVyLCBidXQgbm93LCBJIGp1c3Qga2VwdCBpdCBpbiBoZXJlLlxyXG4gIGNvbnN0IG1vdXNlTGVhdmVIYW5kbGVyID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgaWYgKGNsaWNrQ29udGV4dC5iaWdnZXIgIT09IHByb3BzLnZhbHMuaWQpIHtcclxuICAgICAgbmVvbk9uVEwuY3VycmVudC5yZXZlcnNlKCk7XHJcbiAgICAgIG5vZW4xUmVmLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZShgJHtwcm9wcy52YWxzLmlkfU5lb24xYCk7XHJcbiAgICAgIG5vZW4yUmVmLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZShgJHtwcm9wcy52YWxzLmlkfU5lb24yYCk7XHJcbiAgICB9XHJcbiAgfSwgW2NsaWNrQ29udGV4dF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy90aGlzIGlzIGZvciBcImNsaWNrIG9mZiBldmVudFwiLlxyXG4gICAgY29uc29sZS5sb2coXCJjbGlja0NvbnRleHRcIiwgY2xpY2tDb250ZXh0KTtcclxuICAgIGlmIChjbGlja0NvbnRleHQuYmlnZ2VyZWQgPT09IHByb3BzLnZhbHMuaWQpIHtcclxuICAgICAgbmVvbk9uVEwuY3VycmVudC5yZXZlcnNlKCk7XHJcbiAgICAgIG5vZW4xUmVmLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZShgJHtwcm9wcy52YWxzLmlkfU5lb24xYCk7XHJcbiAgICAgIG5vZW4yUmVmLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZShgJHtwcm9wcy52YWxzLmlkfU5lb24yYCk7XHJcbiAgICB9XHJcbiAgfSwgW2NsaWNrQ29udGV4dF0pO1xyXG5cclxuICBjb25zdCBvbkNsaWNrID0gKGUpID0+IHtcclxuICAgIGV4dGVuZE1lbnVDb250ZXh0KCBlLmN1cnJlbnRUYXJnZXQsIHByb3BzLnZhbHMub3JkZXIsIHRleHRSZWYuY3VycmVudCwgY29udGVudFJlZi5jdXJyZW50LCBbbm9lbjFSZWYuY3VycmVudCwgbm9lbjJSZWYuY3VycmVudF0gKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gdXNlTWVtbygoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInN2Z0ZyYW1lUGFja1wiXHJcbiAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgICAgICAgcmVmPXtzdmdGcmFtZVJlZn1cclxuICAgICAgICAgIHN0eWxlPXsgcHJvcHMudmFscy5tZW51U2l6ZUNvbnRleHRbcHJvcHMudmFscy5pZCArIFwiX3N0eWxlU3ZnRnJhbWVQYWNrXCJdLnN0eWxlX3N2Z0ZyYW1lUGFja31cclxuICAgICAgICAgIG9uTW91c2VFbnRlcj17bW91c2VFbnRlckhhbmRsZXJ9XHJcbiAgICAgICAgICBvbk1vdXNlTGVhdmU9e21vdXNlTGVhdmVIYW5kbGVyfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxTdmdGcmFtZVBhY2tSZW5kZXJcclxuICAgICAgICAgICAgdmFscz17e1xyXG4gICAgICAgICAgICAgIC4uLnByb3BzLnZhbHMsXHJcbiAgICAgICAgICAgICAgcmVmczogeyBub2VuMVJlZiwgbm9lbjJSZWYsIHN0b3BDb2xvcjFSZWYsIHN0b3BDb2xvcjJSZWYsIHRleHRSZWZ9LFxyXG4gICAgICAgICAgICAgIG1lbnVTaXplQ29udGV4dDogcHJvcHMudmFscy5tZW51U2l6ZUNvbnRleHQsXHJcbiAgICAgICAgICAgICAgc3ZnRnJhbWVSZWY6IHN2Z0ZyYW1lUmVmLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRzXCIgcmVmPXtjb250ZW50UmVmfSBvbkNsaWNrPXtvbkNsaWNrfT5cclxuICAgICAgICAgIDxDb250ZW50UmVuZGVyIHZhbHM9e3sgY29udGVudHM6IHByb3BzLnZhbHMuY29udGVudHMgfX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH0sIFsgcHJvcHMudmFscy5tZW51U2l6ZUNvbnRleHRbcHJvcHMudmFscy5pZCArIFwiX3N0eWxlU3ZnRnJhbWVQYWNrXCJdLnN0eWxlX3N2Z0ZyYW1lUGFjayBdKTtcclxufVxyXG5cclxuZnVuY3Rpb24gU3ZnRnJhbWVQYWNrUmVuZGVyKHByb3BzKSB7XHJcbiAgY29uc29sZS5sb2coXCItLS0tLS0tU3ZnRnJhbWVQYWNrUmVuZGVyLS0tLS0tLS0tLVwiKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51VGV4dFwiIHJlZj17cHJvcHMudmFscy5yZWZzLnRleHRSZWZ9PlxyXG4gICAgICAgIHtwcm9wcy52YWxzLmlkLnRvVXBwZXJDYXNlKCl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5lb24gbmVvbjFcIiByZWY9e3Byb3BzLnZhbHMucmVmcy5ub2VuMVJlZn0+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmVvbiBuZW9uMlwiIHJlZj17cHJvcHMudmFscy5yZWZzLm5vZW4yUmVmfT48L2Rpdj5cclxuICAgICAgPFN2Z0ZyYW1lXHJcbiAgICAgICAgdmFscz17e1xyXG4gICAgICAgICAgaWQ6IHByb3BzLnZhbHMuaWQsXHJcbiAgICAgICAgICBzdG9wQ29sb3I6IHByb3BzLnZhbHMuc3RvcENvbG9yLFxyXG4gICAgICAgICAgc3Ryb2tlQ29sb3I6IHByb3BzLnZhbHMuc3Ryb2tlQ29sb3IsXHJcbiAgICAgICAgICBpdm9yeTogcHJvcHMudmFscy5pdm9yeSxcclxuICAgICAgICAgIG1lbnVTaXplQ29udGV4dDogcHJvcHMudmFscy5tZW51U2l6ZUNvbnRleHRbcHJvcHMudmFscy5pZCArIFwiX3N0eWxlU3ZnRnJhbWVQYWNrXCJdLFxyXG4gICAgICAgICAgc3ZnRnJhbWVWYWx1ZXNJbW11dGFibGU6IHByb3BzLnZhbHMuc3ZnRnJhbWVWYWx1ZXNJbW11dGFibGUsXHJcbiAgICAgICAgICByZWZzOiB7IHN0b3BDb2xvcjFSZWY6IHByb3BzLnZhbHMucmVmcy5zdG9wQ29sb3IxUmVmLCBzdG9wQ29sb3IyUmVmOiBwcm9wcy52YWxzLnJlZnMuc3RvcENvbG9yMlJlZn1cclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5mdW5jdGlvbiBDb250ZW50UmVuZGVyKHByb3BzKSB7XHJcbiAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tQ29udGVudFJlbmRlci0tLS0tLS0tLS0tLS0tLS1cIik7XHJcbiAgcmV0dXJuIHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgcmV0dXJuIDw+e3Byb3BzLnZhbHMuY29udGVudHN9PC8+O1xyXG4gIH0sIFtdKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBTdmdGcmFtZVBhY2s7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=