webpackHotUpdate_N_E("pages/index",{

/***/ "./components/menu/MenuComponent.jsx":
/*!*******************************************!*\
  !*** ./components/menu/MenuComponent.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var G_gitub_demoreel_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SvgFramePack_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SvgFramePack.jsx */ "./components/menu/SvgFramePack.jsx");
/* harmony import */ var _HomeLayout_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../HomeLayout.jsx */ "./components/HomeLayout.jsx");



var _jsxFileName = "G:\\gitub\\demoreel\\components\\menu\\MenuComponent.jsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(G_gitub_demoreel_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





function MenuComponent(props) {
  _s();

  var _this = this;

  console.log("---MenuComponent---");
  var menuSizeContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_HomeLayout_jsx__WEBPACK_IMPORTED_MODULE_4__["MenuSizeContext"]);
  return Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    // return <MenuComponentRender refs={{noen1Ref, noen2Ref, stopColor1Ref, stopColor2Ref, textRef, contentRef}} values={props.values} menuSizeContext={menuSizeContext} onClick={onClick} svgFrameRef={svgFrameRef} handlers={{mouseEnterHandler, mouseLeaveHandler}}></MenuComponentRender>
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MenuComponentRender, {
      vals: _objectSpread(_objectSpread({}, props.vals), {}, {
        menuSizeContext: menuSizeContext
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, _this);
  }, [menuSizeContext[props.vals.id + "_styleLI"], menuSizeContext[props.vals.id + "_styleSvgFramePack"].style_svgFramePack]);
}

_s(MenuComponent, "o0zei9hGyswIytL0CeNFL+VTjbM=");

_c = MenuComponent;

function MenuComponentRender(props) {
  console.log("---------MenuComponentRender---------", props.vals.id);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
    id: props.vals.id,
    style: props.vals.menuSizeContext[props.vals.id + "_styleLI"],
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SvgFramePack_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
      vals: props.vals
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

_c2 = MenuComponentRender;
/* harmony default export */ __webpack_exports__["default"] = (MenuComponent);

var _c, _c2;

$RefreshReg$(_c, "MenuComponent");
$RefreshReg$(_c2, "MenuComponentRender");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tZW51L01lbnVDb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIk1lbnVDb21wb25lbnQiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJtZW51U2l6ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiTWVudVNpemVDb250ZXh0IiwidXNlTWVtbyIsInZhbHMiLCJpZCIsInN0eWxlX3N2Z0ZyYW1lUGFjayIsIk1lbnVDb21wb25lbnRSZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBRUEsU0FBU0EsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFBQTs7QUFBQTs7QUFDNUJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLHFCQUFaO0FBRUEsTUFBTUMsZUFBZSxHQUFHQyx3REFBVSxDQUFDQywrREFBRCxDQUFsQztBQUVBLFNBQU9DLHFEQUFPLENBQUMsWUFBTTtBQUNuQjtBQUNBLHdCQUNFLHFFQUFDLG1CQUFEO0FBQ0UsVUFBSSxrQ0FBT04sS0FBSyxDQUFDTyxJQUFiO0FBQW1CSix1QkFBZSxFQUFFQTtBQUFwQztBQUROO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUtELEdBUGEsRUFPWCxDQUFFQSxlQUFlLENBQUNILEtBQUssQ0FBQ08sSUFBTixDQUFXQyxFQUFYLEdBQWdCLFVBQWpCLENBQWpCLEVBQStDTCxlQUFlLENBQUNILEtBQUssQ0FBQ08sSUFBTixDQUFXQyxFQUFYLEdBQWdCLG9CQUFqQixDQUFmLENBQXNEQyxrQkFBckcsQ0FQVyxDQUFkO0FBUUQ7O0dBYlFWLGE7O0tBQUFBLGE7O0FBZVQsU0FBU1csbUJBQVQsQ0FBNkJWLEtBQTdCLEVBQW9DO0FBQ2xDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSx1Q0FBWixFQUFxREYsS0FBSyxDQUFDTyxJQUFOLENBQVdDLEVBQWhFO0FBRUEsc0JBQ0U7QUFBSSxNQUFFLEVBQUVSLEtBQUssQ0FBQ08sSUFBTixDQUFXQyxFQUFuQjtBQUF1QixTQUFLLEVBQUVSLEtBQUssQ0FBQ08sSUFBTixDQUFXSixlQUFYLENBQTJCSCxLQUFLLENBQUNPLElBQU4sQ0FBV0MsRUFBWCxHQUFnQixVQUEzQyxDQUE5QjtBQUFBLDJCQUNFLHFFQUFDLHlEQUFEO0FBQWMsVUFBSSxFQUFFUixLQUFLLENBQUNPO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7TUFSUUcsbUI7QUFVTVgsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODA4NDVhZDcxNzY5YjA5YjVhZjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVJlZiwgdXNlRWZmZWN0LCBtZW1vLCB1c2VNZW1vLCB1c2VDYWxsYmFja30gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTdmdGcmFtZVBhY2sgZnJvbSBcIi4vU3ZnRnJhbWVQYWNrLmpzeFwiO1xyXG5cclxuaW1wb3J0IHsgTWVudVNpemVDb250ZXh0IH0gZnJvbSBcIi4uL0hvbWVMYXlvdXQuanN4XCI7XHJcblxyXG5mdW5jdGlvbiBNZW51Q29tcG9uZW50KHByb3BzKSB7XHJcbiAgY29uc29sZS5sb2coXCItLS1NZW51Q29tcG9uZW50LS0tXCIpO1xyXG5cclxuICBjb25zdCBtZW51U2l6ZUNvbnRleHQgPSB1c2VDb250ZXh0KE1lbnVTaXplQ29udGV4dCk7XHJcblxyXG4gIHJldHVybiB1c2VNZW1vKCgpID0+IHtcclxuICAgIC8vIHJldHVybiA8TWVudUNvbXBvbmVudFJlbmRlciByZWZzPXt7bm9lbjFSZWYsIG5vZW4yUmVmLCBzdG9wQ29sb3IxUmVmLCBzdG9wQ29sb3IyUmVmLCB0ZXh0UmVmLCBjb250ZW50UmVmfX0gdmFsdWVzPXtwcm9wcy52YWx1ZXN9IG1lbnVTaXplQ29udGV4dD17bWVudVNpemVDb250ZXh0fSBvbkNsaWNrPXtvbkNsaWNrfSBzdmdGcmFtZVJlZj17c3ZnRnJhbWVSZWZ9IGhhbmRsZXJzPXt7bW91c2VFbnRlckhhbmRsZXIsIG1vdXNlTGVhdmVIYW5kbGVyfX0+PC9NZW51Q29tcG9uZW50UmVuZGVyPlxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPE1lbnVDb21wb25lbnRSZW5kZXJcclxuICAgICAgICB2YWxzPXt7IC4uLnByb3BzLnZhbHMsIG1lbnVTaXplQ29udGV4dDogbWVudVNpemVDb250ZXh0IH19XHJcbiAgICAgID48L01lbnVDb21wb25lbnRSZW5kZXI+XHJcbiAgICApO1xyXG4gIH0sIFsgbWVudVNpemVDb250ZXh0W3Byb3BzLnZhbHMuaWQgKyBcIl9zdHlsZUxJXCJdLCBtZW51U2l6ZUNvbnRleHRbcHJvcHMudmFscy5pZCArIFwiX3N0eWxlU3ZnRnJhbWVQYWNrXCJdLnN0eWxlX3N2Z0ZyYW1lUGFjayBdKTtcclxufVxyXG5cclxuZnVuY3Rpb24gTWVudUNvbXBvbmVudFJlbmRlcihwcm9wcykge1xyXG4gIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tTWVudUNvbXBvbmVudFJlbmRlci0tLS0tLS0tLVwiLCBwcm9wcy52YWxzLmlkKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxsaSBpZD17cHJvcHMudmFscy5pZH0gc3R5bGU9e3Byb3BzLnZhbHMubWVudVNpemVDb250ZXh0W3Byb3BzLnZhbHMuaWQgKyBcIl9zdHlsZUxJXCJdfT5cclxuICAgICAgPFN2Z0ZyYW1lUGFjayB2YWxzPXtwcm9wcy52YWxzfSAvPlxyXG4gICAgPC9saT5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW51Q29tcG9uZW50O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9