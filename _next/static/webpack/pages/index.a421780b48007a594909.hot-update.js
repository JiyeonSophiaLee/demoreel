webpackHotUpdate_N_E("pages/index",{

/***/ "./components/HomeLayout.jsx":
/*!***********************************!*\
  !*** ./components/HomeLayout.jsx ***!
  \***********************************/
/*! exports provided: ExtendMenuContext, LogoDisplayContext, MenuSizeContext, ClickContext, ClickAfterContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtendMenuContext", function() { return ExtendMenuContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoDisplayContext", function() { return LogoDisplayContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuSizeContext", function() { return MenuSizeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickContext", function() { return ClickContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickAfterContext", function() { return ClickAfterContext; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var G_gitub_demoreel_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var G_gitub_demoreel_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var G_gitub_demoreel_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Demo_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Demo.jsx */ "./components/Demo.jsx");
/* harmony import */ var _Menu_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Menu.jsx */ "./components/Menu.jsx");
/* harmony import */ var _public_assets_js_transitionValue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/assets/js/transitionValue */ "./public/assets/js/transitionValue.js");
/* harmony import */ var _hooks_useMenuSize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/useMenuSize */ "./hooks/useMenuSize.jsx");
/* harmony import */ var _public_assets_js_utilities_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/assets/js/utilities.js */ "./public/assets/js/utilities.js");
/* harmony import */ var _public_assets_js_astronaut_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../public/assets/js/astronaut.js */ "./public/assets/js/astronaut.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");






var _jsxFileName = "G:\\gitub\\demoreel\\components\\HomeLayout.jsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(G_gitub_demoreel_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var ExtendMenuContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_4__["createContext"])();
var LogoDisplayContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_4__["createContext"])();
var MenuSizeContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_4__["createContext"])();
var ClickContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_4__["createContext"])();
var ClickAfterContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_4__["createContext"])();

var logoDisplayReducer = function logoDisplayReducer(state, action) {
  // console.log('logoDisplay reducer is working')
  if (innerWidth != undefined) {
    if (innerWidth > 800) {
      if (innerWidth > innerHeight) {
        if (action.demoClientHeight / 3 < action.logoClientWidth * 4.5 / 6) {
          state = {
            logo_heigher: "none",
            logo_wider: "initial"
          };
          return state;
        } else {
          state = {
            logo_heigher: "initial",
            logo_wider: "none"
          };
          return state;
        }
      } else {
        state = {
          logo_heigher: "initial",
          logo_wider: "none"
        };
        return state;
      }
    } else {
      state = {
        logo_heigher: "none",
        logo_wider: "initial"
      };
      return state;
    }
  }
};

var HomeLayout = function HomeLayout() {
  _s();

  console.log("---HomeLayout---");

  var _useMenuSize = Object(_hooks_useMenuSize__WEBPACK_IMPORTED_MODULE_8__["default"])("work"),
      _useMenuSize2 = Object(G_gitub_demoreel_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useMenuSize, 5),
      work_setLI_size = _useMenuSize2[0],
      work_setsvgFramePackSize = _useMenuSize2[1],
      work_styleLI = _useMenuSize2[2],
      work_styleSvgFramePack = _useMenuSize2[3],
      work_changeHierarchySvgFramePack = _useMenuSize2[4];

  var _useMenuSize3 = Object(_hooks_useMenuSize__WEBPACK_IMPORTED_MODULE_8__["default"])("skill"),
      _useMenuSize4 = Object(G_gitub_demoreel_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useMenuSize3, 5),
      skill_setLI_size = _useMenuSize4[0],
      skill_setsvgFramePackSize = _useMenuSize4[1],
      skill_styleLI = _useMenuSize4[2],
      skill_styleSvgFramePack = _useMenuSize4[3],
      skill_changeHierarchySvgFramePack = _useMenuSize4[4];

  var _useMenuSize5 = Object(_hooks_useMenuSize__WEBPACK_IMPORTED_MODULE_8__["default"])("paint"),
      _useMenuSize6 = Object(G_gitub_demoreel_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useMenuSize5, 5),
      paint_setLI_size = _useMenuSize6[0],
      paint_setsvgFramePackSize = _useMenuSize6[1],
      paint_styleLI = _useMenuSize6[2],
      paint_styleSvgFramePack = _useMenuSize6[3],
      paint_changeHierarchySvgFramePack = _useMenuSize6[4];

  var _useMenuSize7 = Object(_hooks_useMenuSize__WEBPACK_IMPORTED_MODULE_8__["default"])("info"),
      _useMenuSize8 = Object(G_gitub_demoreel_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useMenuSize7, 5),
      info_setLI_size = _useMenuSize8[0],
      info_setsvgFramePackSize = _useMenuSize8[1],
      info_styleLI = _useMenuSize8[2],
      info_styleSvgFramePack = _useMenuSize8[3],
      info_changeHierarchySvgFramePack = _useMenuSize8[4];

  var lighterVersion = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(false);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    svgFrameDefault: undefined,
    radius: undefined,
    wavyPath: undefined,
    extraSpace: undefined,
    strokeWidth: {
      rect: "0px",
      wavy: "0px"
    }
  }),
      svgFrameValues = _useState[0],
      setSvgFrameValues = _useState[1];

  var svgFrameValuesImmutable = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])({
    x: 0,
    y: 0,
    rx: 5,
    ry: 5,
    multiply: 3,
    scale: 1,
    speed: [2, 3],
    fill: "none"
  });

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    on: false,
    bigger: null,
    biggered: null
  }),
      clickContext = _useState2[0],
      setClickContext = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      clickAfterContext = _useState3[0],
      setClickAfterContext = _useState3[1];

  var clickRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])({
    onAnim: false,
    active: true,
    menuExtended: false,
    biggerElemParentId: null,
    biggerElem: null,
    biggerElemRect: null,
    biggerNeonRefs: [],
    biggeredElem: null,
    biggeredElemParentId: null,
    biggeredElemRect: null,
    wavyPath: []
  });
  var extendingRequestAnimRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var wavyAnim = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])({
    TL: null,
    points: null
  });
  var demoRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var logoRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var mode = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])({
    mobileMode: null,
    _mobileMode: null,
    widerMode: null,
    _widerMode: null
  }); // const wavyAnim.current.points useRef();

  var menuValues = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])([{
    id: "work",
    order: 1,
    stopColor: ["rgb(220, 51, 35)", "rgb(212, 116, 43)"],
    strokeColor: ["#ff3b29", "#ff8c34"]
  }, {
    id: "skill",
    order: 2,
    stopColor: ["rgb(168, 63, 209)", "rgb(192, 49, 91)"],
    strokeColor: ["#cd4dff", "#ff4179"]
  }, {
    id: "paint",
    order: 3,
    stopColor: ["rgb(225, 149, 46)", "rgb(48, 171, 152)"],
    strokeColor: ["#ffa934", "#30ab98"]
  }, {
    id: "info",
    order: 4,
    stopColor: ["rgb(200, 86, 177)", "rgb(75, 173, 209)"],
    strokeColor: ["#ff6ee2", "#5cd3ff"]
  }]);
  var allElems = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();
  var demoVideoHeight;

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_4__["useReducer"])(logoDisplayReducer, {
    logo_heigher: "none",
    logo_wider: "none"
  }),
      logoDisplay = _useReducer[0],
      logoDisplayDispatch = _useReducer[1];

  var changeMode = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function () {
    var mobile = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var wider = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    mode.current._mobileMode = innerWidth <= 800 ? true : false;
    mode.current._widerMode = innerWidth >= 1400 ? true : false;

    if (mode.current.mobileMode !== mode.current._mobileMode) {
      mode.current.mobileMode = !mode.current.mobileMode;
      mobile;
    }

    if (mode.current.widerMode !== mode.current._widerMode) {
      mode.current.widerMode = !mode.current.widerMode;
      wider;
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    mode.current.mobileMode = innerWidth <= 800 ? true : false;
    mode.current.widerMode = innerWidth >= 1400 ? true : false;
    mode.current._mobileMode = mode.current.mobileMode;
    mode.current._widerMode = mode.current.widerMode;
    allElems.current = menuValues.current.map(function (elem) {
      return document.getElementById(elem.id);
    });
    Object(_public_assets_js_astronaut_js__WEBPACK_IMPORTED_MODULE_10__["default"])();
    Object(_public_assets_js_utilities_js__WEBPACK_IMPORTED_MODULE_9__["homeGsapSet"])(clickRef.current.menuExtended, true);
    updateSvgFrameValues();
  }, []);
  var updateSvgFrameValues = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function () {
    console.log("updateSvgFrameValues is calling");

    var _radius = innerWidth > 800 ? innerWidth > 1400 ? 9 : 7 : 5;

    var _wavyPath = Math.abs(innerWidth - innerWidth) * 0.01 + 25;

    var _strokeWidth = innerWidth > 800 ? innerWidth > 1400 ? {
      rect: "0.5rem",
      wavy: "0.7rem"
    } : {
      rect: "0.5vw",
      wavy: "1vw"
    } : {
      rect: "0.3rem",
      wavy: "0.5rem"
    };

    var _svgFrameDefault;

    if (innerWidth > 1400) {
      _svgFrameDefault = _public_assets_js_transitionValue__WEBPACK_IMPORTED_MODULE_7__["default"].svgFrameDefaultSize1400;
    } else if (innerWidth > 800) {
      _svgFrameDefault = _public_assets_js_transitionValue__WEBPACK_IMPORTED_MODULE_7__["default"].svgFrameDefaultSize;
    } else {
      if (clickRef.current.menuExtended == false) {
        _svgFrameDefault = _public_assets_js_transitionValue__WEBPACK_IMPORTED_MODULE_7__["default"].svgFrameDefaultSize800;
      } else {
        _svgFrameDefault = _public_assets_js_transitionValue__WEBPACK_IMPORTED_MODULE_7__["default"].svgFrameDefaultSizeSmallerSize;
      }
    }

    setSvgFrameValues(_objectSpread(_objectSpread({}, svgFrameValues), {}, {
      svgFrameDefault: {
        width: _svgFrameDefault,
        height: _svgFrameDefault
      },
      radius: _radius,
      wavyPath: _wavyPath,
      extraSpace: _radius * 5,
      strokeWidth: _strokeWidth
    }));
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (svgFrameValues.radius !== undefined) {
      if (clickRef.current.menuExtended) {
        menuValues.current.forEach(function (elem) {
          if (clickRef.current.biggerElemParentId !== elem.id) {
            eval(elem.id + "_changeHierarchySvgFramePack")(svgFrameValues);
          }
        });
      } else {
        menuValues.current.forEach(function (elem) {
          eval(elem.id + "_changeHierarchySvgFramePack")(svgFrameValues);
        });
      }
    }
  }, [svgFrameValues]);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var updateResize = function updateResize() {
      Object(_public_assets_js_utilities_js__WEBPACK_IMPORTED_MODULE_9__["homeGsapSet"])(clickRef.current.menuExtended, mode.current.mobileMode !== mode.current._mobileMode);

      if (clickRef.current.menuExtended) {
        console.log("resize is working");
        remainExtendingMenu();
        createWavyAnimation({
          width: clickRef.current.biggerElem.clientWidth,
          height: clickRef.current.biggerElem.clientHeight
        });
      }

      changeMode(updateSvgFrameValues(), updateSvgFrameValues());
    };

    window.addEventListener("resize", updateResize);
    return function () {
      window.removeEventListener("resize", updateResize);
    };
  }, [svgFrameValues]);
  var remainExtendingMenu = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function () {
    clickRef.current.biggerElemRect.setAttributeNS(null, "width", clickRef.current.biggerElem.clientWidth);
    clickRef.current.biggerElemRect.setAttributeNS(null, "height", clickRef.current.biggerElem.clientHeight);
  }, []); // -----   the reason I put svgFrameValue as an argument, not just using svgFrameValue as a Ref,
  // ----- is I don't want to rerender all this functions whenever svgFrameValues changes.

  var transformAllEachMenus = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function (_svgFrameValues, extendingSize, elemParentId) {
    return new Promise(function (resolve, reject) {
      var NF = _public_assets_js_transitionValue__WEBPACK_IMPORTED_MODULE_7__["default"]["menuDuration"] * 60;
      var f = 0;
      var dir = 1;
      _public_assets_js_utilities_js__WEBPACK_IMPORTED_MODULE_9__["addCSSmenutransition"].apply(void 0, [null].concat(Object(G_gitub_demoreel_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(allElems.current)));
      extendingSize.LI.forEach(function (obj) {
        eval(obj["elemId"] + "_setLI_size")({
          width: obj.width,
          height: obj.height
        });
      });

      if (clickRef.current.biggerElem !== null) {
        Object(_public_assets_js_utilities_js__WEBPACK_IMPORTED_MODULE_9__["addCSSmenutransition"])(null, clickRef.current.biggerElem);
        eval(elemParentId + "_changeHierarchySvgFramePack")(_svgFrameValues, extendingSize["svgFramePackage"]);
      }

      if (clickRef.current.biggeredElemParentId !== null) {
        Object(_public_assets_js_utilities_js__WEBPACK_IMPORTED_MODULE_9__["addCSSmenutransition"])(null, clickRef.current.biggeredElem);
        eval(clickRef.current.biggeredElemParentId + "_changeHierarchySvgFramePack")(_svgFrameValues, {
          width: _svgFrameValues.svgFrameDefault.width,
          height: _svgFrameValues.svgFrameDefault.height
        });
      }

      if (innerWidth < 800) {
        var size = clickRef.current.biggerElem !== null ? _public_assets_js_transitionValue__WEBPACK_IMPORTED_MODULE_7__["default"].svgFrameDefaultSizeSmallerSize : _svgFrameValues["svgFrameDefault"];
        var childElems = allElems.current.map(function (e) {
          return e.firstElementChild;
        });
        _public_assets_js_utilities_js__WEBPACK_IMPORTED_MODULE_9__["addCSSmenutransition"].apply(void 0, [elemParentId].concat(Object(G_gitub_demoreel_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(childElems)));
        menuValues.current.forEach(function (elem) {
          if (clickRef.current.biggerElemParentId !== elem.id) {
            var rect = document.getElementById(elem.id + "SvgFrame");
            eval(elem.id + "_changeHierarchySvgFramePack")(_svgFrameValues, {
              width: size,
              height: size
            });
            rect.setAttributeNS(null, "width", size);
            rect.setAttributeNS(null, "height", size);
          }
        });
      }

      function anim() {
        f += dir;

        if (clickRef.current.biggerElem !== null) {
          clickRef.current.biggerElemRect.setAttributeNS(null, "width", clickRef.current.biggerElem.clientWidth);
          clickRef.current.biggerElemRect.setAttributeNS(null, "height", clickRef.current.biggerElem.clientHeight);
        }

        if (clickRef.current.biggeredElemParentId !== null) {
          clickRef.current.biggeredElemRect.setAttributeNS(null, "width", clickRef.current.biggeredElem.clientWidth);
          clickRef.current.biggeredElemRect.setAttributeNS(null, "width", clickRef.current.biggeredElem.clientWidth);
        }

        extendingRequestAnimRef.current = requestAnimationFrame(anim);

        if (!(f % NF)) {
          console.log("=======finished======="); // onAnim = false;

          if (clickRef.current.biggerElem !== null) eval(elemParentId + "_changeHierarchySvgFramePack")(_svgFrameValues, {
            width: "100%",
            height: "100%"
          });else eval(elemParentId + "_changeHierarchySvgFramePack")(_svgFrameValues, {
            width: _svgFrameValues["svgFrameDefault"],
            height: _svgFrameValues["svgFrameDefault"]
          });
          cancelAnimationFrame(extendingRequestAnimRef.current);
          console.log("resolve?");
          resolve();
        }
      }

      anim();
    });
  }, []);
  var createWavyAnimation = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function (extendingSize) {
    console.log("createWavyAnimation is working");
    return new Promise(function (resolve, reject) {
      if (window.innerWidth > 800) {
        var update = function update() {
          clickRef.current.wavyPath[0].setAttribute("d", Object(_public_assets_js_utilities_js__WEBPACK_IMPORTED_MODULE_9__["tweenCardinal"])(wavyAnim.current.points.points1, true, 1));
          clickRef.current.wavyPath[1].setAttribute("d", Object(_public_assets_js_utilities_js__WEBPACK_IMPORTED_MODULE_9__["tweenCardinal"])(wavyAnim.current.points.points2, true, 1));
        };

        var dataPoints, pointsTween1, pointsTween2;

        if (svgFrameValues.wavyPath > extendingSize["width"] / 2) {
          return setSvgFrameValues(_objectSpread(_objectSpread({}, svgFrameValues), {}, {
            wavyPath: extendingSize["width"] / 2
          }));
        }

        if (wavyAnim.current.TL === null) {
          wavyAnim.current.TL = gsap__WEBPACK_IMPORTED_MODULE_11__["gsap"].timeline({
            onUpdate: update
          });
        } else {
          wavyAnim.current.TL.resume();
        }

        dataPoints = Object(_public_assets_js_utilities_js__WEBPACK_IMPORTED_MODULE_9__["getDataPoints"])(extendingSize, svgFrameValues, svgFrameValuesImmutable.current);
        wavyAnim.current.points = {
          points1: dataPoints.points1,
          points2: dataPoints.points2
        };
        pointsTween1 = dataPoints.pointsTween1;
        pointsTween2 = dataPoints.pointsTween2;

        for (var i = 0; i < wavyAnim.current.points.points1.length; i++) {
          var duration = Object(_public_assets_js_utilities_js__WEBPACK_IMPORTED_MODULE_9__["random"])(svgFrameValuesImmutable.current["speed"][0], svgFrameValuesImmutable.current["speed"][1]);
          var tween1 = gsap__WEBPACK_IMPORTED_MODULE_11__["gsap"].to(wavyAnim.current.points.points1[i], {
            duration: duration,
            x: pointsTween1[i].x,
            y: pointsTween1[i].y,
            repeat: -1,
            yoyo: true,
            ease: gsap__WEBPACK_IMPORTED_MODULE_11__["Sine"].easeInOut
          });
          var tween2 = gsap__WEBPACK_IMPORTED_MODULE_11__["gsap"].to(wavyAnim.current.points.points2[i], {
            duration: duration,
            x: pointsTween2[i].x,
            y: pointsTween2[i].y,
            repeat: -1,
            yoyo: true,
            ease: gsap__WEBPACK_IMPORTED_MODULE_11__["Sine"].easeInOut
          });
          wavyAnim.current.TL.add(tween1, -Object(_public_assets_js_utilities_js__WEBPACK_IMPORTED_MODULE_9__["random"])(duration));
          wavyAnim.current.TL.add(tween2, -Object(_public_assets_js_utilities_js__WEBPACK_IMPORTED_MODULE_9__["random"])(duration));
        }

        return wavyAnim.current.TL;
      } else {
        if (wavyAnim.current.TL !== null) {
          if (!wavyAnim.current.TL.paused()) {
            wavyAnim.current.TL = wavyAnim.current.TL.pause();
            clickRef.current.wavyPath[0].setAttribute("d", "");
            clickRef.current.wavyPath[1].setAttribute("d", "");
          }
        }
      }

      resolve();
    });
  }, [svgFrameValues]); // useEffect(()=>{setClickAfterContext('skill');},[])

  var extendMenu = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function (elem) {
    var order = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var textRef = arguments.length > 2 ? arguments[2] : undefined;
    var contentRef = arguments.length > 3 ? arguments[3] : undefined;
    var neonRefs = arguments.length > 4 ? arguments[4] : undefined;
    console.log("elem", elem);
    var elemParentId = elem.parentElement.id;

    if (clickRef.current.onAnim === true) {
      return;
    } else {
      if (clickRef.current.menuExtended === false) {
        var checkCallingAstronaut = function checkCallingAstronaut() {
          if (!lighterVersion.current) Object(_public_assets_js_astronaut_js__WEBPACK_IMPORTED_MODULE_10__["callAstronaut"])(elemParentId);
        };

        clickRef.current.onAnim = true;
        setClickContext({
          on: true,
          bigger: elemParentId,
          biggered: null
        });
        clickRef.current.menuExtended = true;
        clickRef.current.biggerElemParentId = elemParentId;
        clickRef.current.biggerElem = elem;
        clickRef.current.biggerElemRect = document.getElementById(elemParentId + "SvgFrame"), clickRef.current.wavyPath = [document.getElementById(elemParentId + "SvgWavy1"), document.getElementById(elemParentId + "SvgWavy2")];
        clickRef.current.textRef = textRef;
        clickRef.current.contentRef = contentRef;
        clickRef.current.biggerNeonRefs = neonRefs;
        demoVideoHeight = Object(_public_assets_js_utilities_js__WEBPACK_IMPORTED_MODULE_9__["getDemoVideoHeight"])(clickRef.current.menuExtended);
        var extendingSize = Object(_public_assets_js_utilities_js__WEBPACK_IMPORTED_MODULE_9__["getValuesToUnSymetryEachMenu"])(demoVideoHeight, elem, order);
        Promise.all([Object(_public_assets_js_utilities_js__WEBPACK_IMPORTED_MODULE_9__["homeGsapTransition"])(clickRef.current.menuExtended), logoDisplayDispatch({
          demoClientHeight: demoRef.current.clientHeight,
          logoClientWidth: innerWidth * (100 - _public_assets_js_transitionValue__WEBPACK_IMPORTED_MODULE_7__["default"].unSymetryDemoMenu) / 100 * _public_assets_js_transitionValue__WEBPACK_IMPORTED_MODULE_7__["default"].logoWidth / 100
        }), clickRef.current.biggerElemRect.setAttributeNS(null, "stroke", "url(#SvgIvory)"), transformAllEachMenus(svgFrameValues, extendingSize, elemParentId), checkCallingAstronaut()]).then(function () {
          createWavyAnimation(extendingSize["svgFramePackage"]);
          textRef.style.display = "none";
          contentRef.style.display = "initial";
          contentRef.style.zIndex = 3;
          setClickAfterContext(elemParentId);
        }).then(function () {
          clickRef.current.onAnim = false;
        });
      } else if (clickRef.current.biggerElemParentId !== elemParentId) {
        var _checkCallingAstronaut = function _checkCallingAstronaut() {
          if (!lighterVersion.current) Object(_public_assets_js_astronaut_js__WEBPACK_IMPORTED_MODULE_10__["callAstronaut"])(elemParentId, clickRef.current.biggeredElemParentId);
        };

        console.log("else if");
        var biggeredWavyPath = clickRef.current.wavyPath;
        var biggeredText = clickRef.current.textRef;
        var biggeredContentRef = clickRef.current.contentRef;
        var biggeredNeonRefs = clickRef.current.biggerNeonRefs;
        clickRef.current.onAnim = true;
        setClickContext({
          on: true,
          bigger: elemParentId,
          biggered: clickRef.current.biggerElemParentId
        });
        clickRef.current.biggeredElem = clickRef.current.biggerElem;
        clickRef.current.biggeredElemParentId = clickRef.current.biggerElemParentId;
        clickRef.current.biggeredElemRect = clickRef.current.biggerElemRect;
        clickRef.current.biggerElem = elem;
        clickRef.current.biggerElemParentId = elemParentId;
        clickRef.current.biggerElem = elem;
        clickRef.current.biggerElemRect = document.getElementById(elemParentId + "SvgFrame");
        clickRef.current.wavyPath = [document.getElementById(elemParentId + "SvgWavy1"), document.getElementById(elemParentId + "SvgWavy2")];
        clickRef.current.textRef = textRef;
        clickRef.current.contentRef = contentRef;
        clickRef.current.biggerNeonRefs = neonRefs;
        demoVideoHeight = Object(_public_assets_js_utilities_js__WEBPACK_IMPORTED_MODULE_9__["getDemoVideoHeight"])(clickRef.current.menuExtended);

        var _extendingSize = Object(_public_assets_js_utilities_js__WEBPACK_IMPORTED_MODULE_9__["getValuesToUnSymetryEachMenu"])(demoVideoHeight, elem, order);

        if (innerWidth > 800) wavyAnim.current.TL.pause(0);
        Promise.all([biggeredWavyPath[0].setAttribute("d", ""), biggeredWavyPath[1].setAttribute("d", ""), clickRef.current.biggeredElemRect.setAttributeNS(null, "stroke", "url(#".concat(clickRef.current.biggeredElemParentId, "SvgFrameStopColor)")), clickRef.current.biggerElemRect.setAttributeNS(null, "stroke", "url(#SvgIvory)"), transformAllEachMenus(svgFrameValues, _extendingSize, elemParentId), biggeredText.style.display = "initial", biggeredContentRef.style.display = "none", biggeredContentRef.style.zIndex = -1, biggeredNeonRefs[0].style.visibility = "hidden", biggeredNeonRefs[1].style.visibility = "hidden", _checkCallingAstronaut()]).then(function () {
          createWavyAnimation(_extendingSize["svgFramePackage"]);
          textRef.style.display = "none";
          contentRef.style.display = "initial";
          contentRef.style.zIndex = 3;
          biggeredNeonRefs[0].style.visibility = "visible";
          biggeredNeonRefs[1].style.visibility = "visible";
          setClickAfterContext(elemParentId);
        }).then(function () {
          clickRef.current.onAnim = false;
        });
      } else {
        var _checkCallingAstronaut2 = function _checkCallingAstronaut2() {
          if (!lighterVersion.current) Object(_public_assets_js_astronaut_js__WEBPACK_IMPORTED_MODULE_10__["pauseAstronaut"])();
        };

        console.log("else");
        var _biggeredWavyPath = clickRef.current.wavyPath;
        var _biggeredText = clickRef.current.textRef;
        var _biggeredContentRef = clickRef.current.contentRef;
        var _biggeredNeonRefs = clickRef.current.biggerNeonRefs;
        clickRef.current.onAnim = true;
        setClickContext({
          on: false,
          bigger: null,
          biggered: null
        });
        clickRef.current.biggeredElem = clickRef.current.biggerElem;
        clickRef.current.biggeredElemParentId = clickRef.current.biggerElemParentId;
        clickRef.current.biggeredElemRect = clickRef.current.biggerElemRect;
        clickRef.current.biggerElem = null;
        clickRef.current.menuExtended = false;
        var _extendingSize2 = {
          LI: [{
            elemId: "work",
            width: "50%",
            height: "50%"
          }, {
            elemId: "skill",
            width: "50%",
            height: "50%"
          }, {
            elemId: "paint",
            width: "50%",
            height: "50%"
          }, {
            elemId: "info",
            width: "50%",
            height: "50%"
          }]
        };
        if (innerWidth > 800) wavyAnim.current.TL.pause(0);
        Promise.all([Object(_public_assets_js_utilities_js__WEBPACK_IMPORTED_MODULE_9__["homeGsapTransition"])(clickRef.current.menuExtended), logoDisplayDispatch({
          demoClientHeight: demoRef.current.clientHeight,
          logoClientWidth: innerWidth * (100 - _public_assets_js_transitionValue__WEBPACK_IMPORTED_MODULE_7__["default"].symetryDemoMenu) / 100 * _public_assets_js_transitionValue__WEBPACK_IMPORTED_MODULE_7__["default"].logoWidth / 100
        }), _biggeredWavyPath[0].setAttribute("d", ""), _biggeredWavyPath[1].setAttribute("d", ""), clickRef.current.biggeredElemRect.setAttributeNS(null, "stroke", "url(#".concat(clickRef.current.biggeredElemParentId, "SvgFrameStopColor)")), transformAllEachMenus(svgFrameValues, _extendingSize2, elemParentId), _biggeredText.style.display = "initial", _biggeredContentRef.style.display = "none", _biggeredContentRef.style.zIndex = -1, _biggeredNeonRefs[0].style.visibility = "hidden", _biggeredNeonRefs[1].style.visibility = "hidden", _checkCallingAstronaut2(), setClickAfterContext(null)]).then(function () {
          neonRefs[0].style.visibility = "visible";
          neonRefs[1].style.visibility = "visible";
          clickRef.current = {
            onAnim: false,
            active: true,
            menuExtended: false,
            biggerElemParentId: null,
            biggerElem: null,
            biggerElemRect: null,
            biggerNeonRefs: [],
            biggeredElem: null,
            biggeredElemParentId: null,
            biggeredElemRect: null,
            wavyPath: []
          };
        });
      }
    }
  }, [svgFrameValues]); //=================loader=====================//

  var openLighterVersion = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function () {
    lighterVersion.current = true;
    Object(_public_assets_js_astronaut_js__WEBPACK_IMPORTED_MODULE_10__["removeScene"])();
    document.getElementById("lighterVersion").innerHTML = "This is lighter version";
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    window.addEventListener("load", function (event) {
      console.log("working?");
      document.getElementById("loaderAnim").classList.add("loaderFadeOutTrans");
      setTimeout(function () {
        document.getElementById("loaderContainer").style.display = "none";
      }, 1200);
    });
  }, []); //=================loader=====================//

  return Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(function () {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "master",
      style: {
        color: "white"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "loaderContainer",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: "loaderAnim",
          children: "Load\xA0\xA0ng"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 563,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: "lighterVersion",
          onClick: openLighterVersion,
          children: ["Click to the lighter version ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 565,
            columnNumber: 42
          }, _this), " which doesn't contain THREE JS"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 564,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 562,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ExtendMenuContext.Provider, {
        value: extendMenu,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(LogoDisplayContext.Provider, {
          value: {
            logoDisplay: logoDisplay,
            logoDisplayDispatch: logoDisplayDispatch
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MenuSizeContext.Provider, {
            value: {
              work_styleLI: work_styleLI,
              skill_styleLI: skill_styleLI,
              paint_styleLI: paint_styleLI,
              info_styleLI: info_styleLI,
              work_styleSvgFramePack: work_styleSvgFramePack,
              skill_styleSvgFramePack: skill_styleSvgFramePack,
              paint_styleSvgFramePack: paint_styleSvgFramePack,
              info_styleSvgFramePack: info_styleSvgFramePack
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ClickContext.Provider, {
              value: clickContext,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ClickAfterContext.Provider, {
                value: clickAfterContext,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(HomeLayoutRender, {
                  vals: {
                    refs: {
                      demoRef: demoRef,
                      logoRef: logoRef
                    },
                    menuValues: menuValues.current,
                    svgFrameValuesImmutable: svgFrameValuesImmutable.current,
                    clickContext: clickContext
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 573,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 572,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 571,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 570,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 569,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 568,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 561,
      columnNumber: 7
    }, _this);
  }, [logoDisplay, work_styleLI, work_styleSvgFramePack, skill_styleSvgFramePack, paint_styleSvgFramePack, info_styleSvgFramePack, clickContext, clickAfterContext]);
};

_s(HomeLayout, "DVl4+5XbOBEtWLxr+qa9ETL7n58=", false, function () {
  return [_hooks_useMenuSize__WEBPACK_IMPORTED_MODULE_8__["default"], _hooks_useMenuSize__WEBPACK_IMPORTED_MODULE_8__["default"], _hooks_useMenuSize__WEBPACK_IMPORTED_MODULE_8__["default"], _hooks_useMenuSize__WEBPACK_IMPORTED_MODULE_8__["default"]];
});

_c = HomeLayout;

function HomeLayoutRender(props) {
  console.log("--------------HomeLayoutRender-----------------");
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Demo_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
      refs: props.vals.refs
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 588,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Menu_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
      vals: {
        menuValues: props.vals.menuValues,
        svgFrameValuesImmutable: props.vals.svgFrameValuesImmutable
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 589,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "threeJSCover"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 591,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "threeJSCanvas"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 592,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_c2 = HomeLayoutRender;
/* harmony default export */ __webpack_exports__["default"] = (HomeLayout);

var _c, _c2;

$RefreshReg$(_c, "HomeLayout");
$RefreshReg$(_c2, "HomeLayoutRender");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lTGF5b3V0LmpzeCJdLCJuYW1lcyI6WyJFeHRlbmRNZW51Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJMb2dvRGlzcGxheUNvbnRleHQiLCJNZW51U2l6ZUNvbnRleHQiLCJDbGlja0NvbnRleHQiLCJDbGlja0FmdGVyQ29udGV4dCIsImxvZ29EaXNwbGF5UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiaW5uZXJXaWR0aCIsInVuZGVmaW5lZCIsImlubmVySGVpZ2h0IiwiZGVtb0NsaWVudEhlaWdodCIsImxvZ29DbGllbnRXaWR0aCIsImxvZ29faGVpZ2hlciIsImxvZ29fd2lkZXIiLCJIb21lTGF5b3V0IiwiY29uc29sZSIsImxvZyIsInVzZU1lbnVTaXplIiwid29ya19zZXRMSV9zaXplIiwid29ya19zZXRzdmdGcmFtZVBhY2tTaXplIiwid29ya19zdHlsZUxJIiwid29ya19zdHlsZVN2Z0ZyYW1lUGFjayIsIndvcmtfY2hhbmdlSGllcmFyY2h5U3ZnRnJhbWVQYWNrIiwic2tpbGxfc2V0TElfc2l6ZSIsInNraWxsX3NldHN2Z0ZyYW1lUGFja1NpemUiLCJza2lsbF9zdHlsZUxJIiwic2tpbGxfc3R5bGVTdmdGcmFtZVBhY2siLCJza2lsbF9jaGFuZ2VIaWVyYXJjaHlTdmdGcmFtZVBhY2siLCJwYWludF9zZXRMSV9zaXplIiwicGFpbnRfc2V0c3ZnRnJhbWVQYWNrU2l6ZSIsInBhaW50X3N0eWxlTEkiLCJwYWludF9zdHlsZVN2Z0ZyYW1lUGFjayIsInBhaW50X2NoYW5nZUhpZXJhcmNoeVN2Z0ZyYW1lUGFjayIsImluZm9fc2V0TElfc2l6ZSIsImluZm9fc2V0c3ZnRnJhbWVQYWNrU2l6ZSIsImluZm9fc3R5bGVMSSIsImluZm9fc3R5bGVTdmdGcmFtZVBhY2siLCJpbmZvX2NoYW5nZUhpZXJhcmNoeVN2Z0ZyYW1lUGFjayIsImxpZ2h0ZXJWZXJzaW9uIiwidXNlUmVmIiwidXNlU3RhdGUiLCJzdmdGcmFtZURlZmF1bHQiLCJyYWRpdXMiLCJ3YXZ5UGF0aCIsImV4dHJhU3BhY2UiLCJzdHJva2VXaWR0aCIsInJlY3QiLCJ3YXZ5Iiwic3ZnRnJhbWVWYWx1ZXMiLCJzZXRTdmdGcmFtZVZhbHVlcyIsInN2Z0ZyYW1lVmFsdWVzSW1tdXRhYmxlIiwieCIsInkiLCJyeCIsInJ5IiwibXVsdGlwbHkiLCJzY2FsZSIsInNwZWVkIiwiZmlsbCIsIm9uIiwiYmlnZ2VyIiwiYmlnZ2VyZWQiLCJjbGlja0NvbnRleHQiLCJzZXRDbGlja0NvbnRleHQiLCJjbGlja0FmdGVyQ29udGV4dCIsInNldENsaWNrQWZ0ZXJDb250ZXh0IiwiY2xpY2tSZWYiLCJvbkFuaW0iLCJhY3RpdmUiLCJtZW51RXh0ZW5kZWQiLCJiaWdnZXJFbGVtUGFyZW50SWQiLCJiaWdnZXJFbGVtIiwiYmlnZ2VyRWxlbVJlY3QiLCJiaWdnZXJOZW9uUmVmcyIsImJpZ2dlcmVkRWxlbSIsImJpZ2dlcmVkRWxlbVBhcmVudElkIiwiYmlnZ2VyZWRFbGVtUmVjdCIsImV4dGVuZGluZ1JlcXVlc3RBbmltUmVmIiwid2F2eUFuaW0iLCJUTCIsInBvaW50cyIsImRlbW9SZWYiLCJsb2dvUmVmIiwibW9kZSIsIm1vYmlsZU1vZGUiLCJfbW9iaWxlTW9kZSIsIndpZGVyTW9kZSIsIl93aWRlck1vZGUiLCJtZW51VmFsdWVzIiwiaWQiLCJvcmRlciIsInN0b3BDb2xvciIsInN0cm9rZUNvbG9yIiwiYWxsRWxlbXMiLCJkZW1vVmlkZW9IZWlnaHQiLCJ1c2VSZWR1Y2VyIiwibG9nb0Rpc3BsYXkiLCJsb2dvRGlzcGxheURpc3BhdGNoIiwiY2hhbmdlTW9kZSIsInVzZUNhbGxiYWNrIiwibW9iaWxlIiwid2lkZXIiLCJjdXJyZW50IiwidXNlRWZmZWN0IiwibWFwIiwiZWxlbSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhc3Ryb25hdXQiLCJob21lR3NhcFNldCIsInVwZGF0ZVN2Z0ZyYW1lVmFsdWVzIiwiX3JhZGl1cyIsIl93YXZ5UGF0aCIsIk1hdGgiLCJhYnMiLCJfc3Ryb2tlV2lkdGgiLCJfc3ZnRnJhbWVEZWZhdWx0IiwiVFYiLCJzdmdGcmFtZURlZmF1bHRTaXplMTQwMCIsInN2Z0ZyYW1lRGVmYXVsdFNpemUiLCJzdmdGcmFtZURlZmF1bHRTaXplODAwIiwic3ZnRnJhbWVEZWZhdWx0U2l6ZVNtYWxsZXJTaXplIiwid2lkdGgiLCJoZWlnaHQiLCJmb3JFYWNoIiwiZXZhbCIsInVwZGF0ZVJlc2l6ZSIsInJlbWFpbkV4dGVuZGluZ01lbnUiLCJjcmVhdGVXYXZ5QW5pbWF0aW9uIiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNldEF0dHJpYnV0ZU5TIiwidHJhbnNmb3JtQWxsRWFjaE1lbnVzIiwiX3N2Z0ZyYW1lVmFsdWVzIiwiZXh0ZW5kaW5nU2l6ZSIsImVsZW1QYXJlbnRJZCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiTkYiLCJmIiwiZGlyIiwiYWRkQ1NTbWVudXRyYW5zaXRpb24iLCJMSSIsIm9iaiIsInNpemUiLCJjaGlsZEVsZW1zIiwiZSIsImZpcnN0RWxlbWVudENoaWxkIiwiYW5pbSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwidXBkYXRlIiwic2V0QXR0cmlidXRlIiwidHdlZW5DYXJkaW5hbCIsInBvaW50czEiLCJwb2ludHMyIiwiZGF0YVBvaW50cyIsInBvaW50c1R3ZWVuMSIsInBvaW50c1R3ZWVuMiIsImdzYXAiLCJ0aW1lbGluZSIsIm9uVXBkYXRlIiwicmVzdW1lIiwiZ2V0RGF0YVBvaW50cyIsImkiLCJsZW5ndGgiLCJkdXJhdGlvbiIsInJhbmRvbSIsInR3ZWVuMSIsInRvIiwicmVwZWF0IiwieW95byIsImVhc2UiLCJTaW5lIiwiZWFzZUluT3V0IiwidHdlZW4yIiwiYWRkIiwicGF1c2VkIiwicGF1c2UiLCJleHRlbmRNZW51IiwidGV4dFJlZiIsImNvbnRlbnRSZWYiLCJuZW9uUmVmcyIsInBhcmVudEVsZW1lbnQiLCJjaGVja0NhbGxpbmdBc3Ryb25hdXQiLCJjYWxsQXN0cm9uYXV0IiwiZ2V0RGVtb1ZpZGVvSGVpZ2h0IiwiZ2V0VmFsdWVzVG9VblN5bWV0cnlFYWNoTWVudSIsImFsbCIsImhvbWVHc2FwVHJhbnNpdGlvbiIsInVuU3ltZXRyeURlbW9NZW51IiwibG9nb1dpZHRoIiwidGhlbiIsInN0eWxlIiwiZGlzcGxheSIsInpJbmRleCIsImJpZ2dlcmVkV2F2eVBhdGgiLCJiaWdnZXJlZFRleHQiLCJiaWdnZXJlZENvbnRlbnRSZWYiLCJiaWdnZXJlZE5lb25SZWZzIiwidmlzaWJpbGl0eSIsInBhdXNlQXN0cm9uYXV0IiwiZWxlbUlkIiwic3ltZXRyeURlbW9NZW51Iiwib3BlbkxpZ2h0ZXJWZXJzaW9uIiwicmVtb3ZlU2NlbmUiLCJpbm5lckhUTUwiLCJldmVudCIsImNsYXNzTGlzdCIsInNldFRpbWVvdXQiLCJ1c2VNZW1vIiwiY29sb3IiLCJyZWZzIiwiSG9tZUxheW91dFJlbmRlciIsInByb3BzIiwidmFscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsaUJBQWlCLGdCQUFHQywyREFBYSxFQUF2QztBQUNBLElBQU1DLGtCQUFrQixnQkFBR0QsMkRBQWEsRUFBeEM7QUFDQSxJQUFNRSxlQUFlLGdCQUFHRiwyREFBYSxFQUFyQztBQUNBLElBQU1HLFlBQVksZ0JBQUdILDJEQUFhLEVBQWxDO0FBQ0EsSUFBTUksaUJBQWlCLGdCQUFHSiwyREFBYSxFQUF2Qzs7QUFFUCxJQUFNSyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUM1QztBQUNBLE1BQUlDLFVBQVUsSUFBSUMsU0FBbEIsRUFBNkI7QUFDM0IsUUFBSUQsVUFBVSxHQUFH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QlgsQ0FBRWtDLFdBQUYsRUFBZTVFLFlBQWYsRUFBNkJDLHNCQUE3QixFQUFxREssdUJBQXJELEVBQThFSyx1QkFBOUUsRUFBdUdLLHNCQUF2RyxFQUErSDBCLFlBQS9ILEVBQTZJRSxpQkFBN0ksQ0F0QlcsQ0FBZDtBQXVCRCxDQS9oQkQ7O0dBQU1sRCxVO1VBRXlIRywwRCxFQUNLQSwwRCxFQUNBQSwwRCxFQUNMQSwwRDs7O0tBTHpISCxVOztBQWlpQk4sU0FBUzJNLGdCQUFULENBQTBCQyxLQUExQixFQUFpQztBQUMvQjNNLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGlEQUFaO0FBQ0Esc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxpREFBRDtBQUFNLFVBQUksRUFBRTBNLEtBQUssQ0FBQ0MsSUFBTixDQUFXSDtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSxxRUFBQyxpREFBRDtBQUFNLFVBQUksRUFBRTtBQUFFaEksa0JBQVUsRUFBRWtJLEtBQUssQ0FBQ0MsSUFBTixDQUFXbkksVUFBekI7QUFBcUN0QywrQkFBdUIsRUFBRXdLLEtBQUssQ0FBQ0MsSUFBTixDQUFXeks7QUFBekU7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFJRTtBQUFLLFFBQUUsRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQUtFO0FBQUssUUFBRSxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGO0FBQUEsa0JBREY7QUFTRDs7TUFYUXVLLGdCO0FBWU0zTSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hNDIxNzgwYjQ4MDA3YTU5NDkwOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVDb250ZXh0LHVzZUVmZmVjdCx1c2VTdGF0ZSx1c2VSZWR1Y2VyLHVzZUNhbGxiYWNrLHVzZVJlZix1c2VNZW1vfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IERlbW8gZnJvbSBcIi4vRGVtby5qc3hcIjtcclxuaW1wb3J0IE1lbnUgZnJvbSBcIi4vTWVudS5qc3hcIjtcclxuaW1wb3J0IFRWIGZyb20gXCIuLi9wdWJsaWMvYXNzZXRzL2pzL3RyYW5zaXRpb25WYWx1ZVwiO1xyXG5pbXBvcnQgdXNlTWVudVNpemUgZnJvbSBcIi4uL2hvb2tzL3VzZU1lbnVTaXplXCI7XHJcbmltcG9ydCB7IGhvbWVHc2FwU2V0LCBnZXREZW1vVmlkZW9IZWlnaHQsIGhvbWVHc2FwVHJhbnNpdGlvbiwgZ2V0VmFsdWVzVG9VblN5bWV0cnlFYWNoTWVudSwgdHdlZW5DYXJkaW5hbCwgZ2V0RGF0YVBvaW50cywgcmFuZG9tLCBhZGRDU1NtZW51dHJhbnNpdGlvbn0gZnJvbSBcIi4uL3B1YmxpYy9hc3NldHMvanMvdXRpbGl0aWVzLmpzXCI7XHJcbmltcG9ydCBhc3Ryb25hdXQsIHsgY2FsbEFzdHJvbmF1dCwgcGF1c2VBc3Ryb25hdXQsIHJlbW92ZVNjZW5lfSBmcm9tIFwiLi4vcHVibGljL2Fzc2V0cy9qcy9hc3Ryb25hdXQuanNcIjtcclxuaW1wb3J0IHsgZ3NhcCwgU2luZSB9IGZyb20gXCJnc2FwXCI7XHJcblxyXG5leHBvcnQgY29uc3QgRXh0ZW5kTWVudUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcbmV4cG9ydCBjb25zdCBMb2dvRGlzcGxheUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcbmV4cG9ydCBjb25zdCBNZW51U2l6ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcbmV4cG9ydCBjb25zdCBDbGlja0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcbmV4cG9ydCBjb25zdCBDbGlja0FmdGVyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmNvbnN0IGxvZ29EaXNwbGF5UmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgLy8gY29uc29sZS5sb2coJ2xvZ29EaXNwbGF5IHJlZHVjZXIgaXMgd29ya2luZycpXHJcbiAgaWYgKGlubmVyV2lkdGggIT0gdW5kZWZpbmVkKSB7XHJcbiAgICBpZiAoaW5uZXJXaWR0aCA+IDgwMCkge1xyXG4gICAgICBpZiAoaW5uZXJXaWR0aCA+IGlubmVySGVpZ2h0KSB7XHJcbiAgICAgICAgaWYgKGFjdGlvbi5kZW1vQ2xpZW50SGVpZ2h0IC8gMyA8IChhY3Rpb24ubG9nb0NsaWVudFdpZHRoICogNC41KSAvIDYpIHtcclxuICAgICAgICAgIHN0YXRlID0geyBsb2dvX2hlaWdoZXI6IFwibm9uZVwiLCBsb2dvX3dpZGVyOiBcImluaXRpYWxcIiB9O1xyXG4gICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzdGF0ZSA9IHsgbG9nb19oZWlnaGVyOiBcImluaXRpYWxcIiwgbG9nb193aWRlcjogXCJub25lXCIgfTtcclxuICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3RhdGUgPSB7IGxvZ29faGVpZ2hlcjogXCJpbml0aWFsXCIsIGxvZ29fd2lkZXI6IFwibm9uZVwiIH07XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzdGF0ZSA9IHsgbG9nb19oZWlnaGVyOiBcIm5vbmVcIiwgbG9nb193aWRlcjogXCJpbml0aWFsXCIgfTtcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IEhvbWVMYXlvdXQgPSAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coXCItLS1Ib21lTGF5b3V0LS0tXCIpO1xyXG4gIGNvbnN0IFsgd29ya19zZXRMSV9zaXplLCB3b3JrX3NldHN2Z0ZyYW1lUGFja1NpemUsIHdvcmtfc3R5bGVMSSwgd29ya19zdHlsZVN2Z0ZyYW1lUGFjaywgd29ya19jaGFuZ2VIaWVyYXJjaHlTdmdGcmFtZVBhY2tdID0gdXNlTWVudVNpemUoXCJ3b3JrXCIpO1xyXG4gIGNvbnN0IFsgc2tpbGxfc2V0TElfc2l6ZSwgc2tpbGxfc2V0c3ZnRnJhbWVQYWNrU2l6ZSwgc2tpbGxfc3R5bGVMSSwgc2tpbGxfc3R5bGVTdmdGcmFtZVBhY2ssIHNraWxsX2NoYW5nZUhpZXJhcmNoeVN2Z0ZyYW1lUGFja10gPSB1c2VNZW51U2l6ZShcInNraWxsXCIpO1xyXG4gIGNvbnN0IFsgcGFpbnRfc2V0TElfc2l6ZSwgcGFpbnRfc2V0c3ZnRnJhbWVQYWNrU2l6ZSwgcGFpbnRfc3R5bGVMSSwgcGFpbnRfc3R5bGVTdmdGcmFtZVBhY2ssIHBhaW50X2NoYW5nZUhpZXJhcmNoeVN2Z0ZyYW1lUGFja10gPSB1c2VNZW51U2l6ZShcInBhaW50XCIpO1xyXG4gIGNvbnN0IFsgaW5mb19zZXRMSV9zaXplLCBpbmZvX3NldHN2Z0ZyYW1lUGFja1NpemUsIGluZm9fc3R5bGVMSSwgaW5mb19zdHlsZVN2Z0ZyYW1lUGFjaywgaW5mb19jaGFuZ2VIaWVyYXJjaHlTdmdGcmFtZVBhY2tdID0gdXNlTWVudVNpemUoXCJpbmZvXCIpO1xyXG5cclxuICBjb25zdCBsaWdodGVyVmVyc2lvbiA9IHVzZVJlZihmYWxzZSk7XHJcblxyXG4gIGNvbnN0IFtzdmdGcmFtZVZhbHVlcywgc2V0U3ZnRnJhbWVWYWx1ZXNdID0gdXNlU3RhdGUoeyBzdmdGcmFtZURlZmF1bHQ6IHVuZGVmaW5lZCwgcmFkaXVzOiB1bmRlZmluZWQsIHdhdnlQYXRoOiB1bmRlZmluZWQsIGV4dHJhU3BhY2U6IHVuZGVmaW5lZCwgc3Ryb2tlV2lkdGg6IHsgcmVjdDogXCIwcHhcIiwgd2F2eTogXCIwcHhcIiB9fSk7XHJcbiAgY29uc3Qgc3ZnRnJhbWVWYWx1ZXNJbW11dGFibGUgPSB1c2VSZWYoeyB4OiAwLCB5OiAwLCByeDogNSwgcnk6IDUsIG11bHRpcGx5OiAzLCBzY2FsZTogMSwgc3BlZWQ6IFsyLCAzXSwgZmlsbDogXCJub25lXCJ9KTtcclxuXHJcbiAgY29uc3QgW2NsaWNrQ29udGV4dCwgc2V0Q2xpY2tDb250ZXh0XSA9IHVzZVN0YXRlKHsgb246IGZhbHNlLCBiaWdnZXI6IG51bGwsIGJpZ2dlcmVkOiBudWxsfSk7XHJcbiAgY29uc3QgW2NsaWNrQWZ0ZXJDb250ZXh0LCBzZXRDbGlja0FmdGVyQ29udGV4dF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBjbGlja1JlZiA9IHVzZVJlZih7IG9uQW5pbTogZmFsc2UsIGFjdGl2ZTogdHJ1ZSwgbWVudUV4dGVuZGVkOiBmYWxzZSwgYmlnZ2VyRWxlbVBhcmVudElkOiBudWxsLCBiaWdnZXJFbGVtOiBudWxsLCBiaWdnZXJFbGVtUmVjdDogbnVsbCwgYmlnZ2VyTmVvblJlZnM6IFtdLCBiaWdnZXJlZEVsZW06IG51bGwsIGJpZ2dlcmVkRWxlbVBhcmVudElkOiBudWxsLCBiaWdnZXJlZEVsZW1SZWN0OiBudWxsLCB3YXZ5UGF0aDogW119KTtcclxuXHJcbiAgY29uc3QgZXh0ZW5kaW5nUmVxdWVzdEFuaW1SZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3Qgd2F2eUFuaW0gPSB1c2VSZWYoeyBUTDogbnVsbCwgcG9pbnRzOiBudWxsIH0pO1xyXG5cclxuICBjb25zdCBkZW1vUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IGxvZ29SZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGNvbnN0IG1vZGUgPSB1c2VSZWYoeyBtb2JpbGVNb2RlOiBudWxsLCBfbW9iaWxlTW9kZTogbnVsbCwgd2lkZXJNb2RlOiBudWxsLCBfd2lkZXJNb2RlOiBudWxsfSk7XHJcblxyXG5cclxuICAvLyBjb25zdCB3YXZ5QW5pbS5jdXJyZW50LnBvaW50cyB1c2VSZWYoKTtcclxuXHJcbiAgY29uc3QgbWVudVZhbHVlcyA9IHVzZVJlZihbeyBpZDogXCJ3b3JrXCIsIG9yZGVyOiAxLCBzdG9wQ29sb3I6IFtcInJnYigyMjAsIDUxLCAzNSlcIiwgXCJyZ2IoMjEyLCAxMTYsIDQzKVwiXSwgc3Ryb2tlQ29sb3I6IFtcIiNmZjNiMjlcIiwgXCIjZmY4YzM0XCJdfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGlkOiBcInNraWxsXCIsIG9yZGVyOiAyLCBzdG9wQ29sb3I6IFtcInJnYigxNjgsIDYzLCAyMDkpXCIsIFwicmdiKDE5MiwgNDksIDkxKVwiXSwgc3Ryb2tlQ29sb3I6IFtcIiNjZDRkZmZcIiwgXCIjZmY0MTc5XCJdfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGlkOiBcInBhaW50XCIsIG9yZGVyOiAzLCBzdG9wQ29sb3I6IFtcInJnYigyMjUsIDE0OSwgNDYpXCIsIFwicmdiKDQ4LCAxNzEsIDE1MilcIl0sIHN0cm9rZUNvbG9yOiBbXCIjZmZhOTM0XCIsIFwiIzMwYWI5OFwiXX0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBpZDogXCJpbmZvXCIsIG9yZGVyOiA0LCBzdG9wQ29sb3I6IFtcInJnYigyMDAsIDg2LCAxNzcpXCIsIFwicmdiKDc1LCAxNzMsIDIwOSlcIl0sIHN0cm9rZUNvbG9yOiBbXCIjZmY2ZWUyXCIsIFwiIzVjZDNmZlwiXX1dKTtcclxuICBjb25zdCBhbGxFbGVtcyA9IHVzZVJlZigpO1xyXG5cclxuICBsZXQgZGVtb1ZpZGVvSGVpZ2h0O1xyXG5cclxuICBjb25zdCBbbG9nb0Rpc3BsYXksIGxvZ29EaXNwbGF5RGlzcGF0Y2hdID0gdXNlUmVkdWNlcihsb2dvRGlzcGxheVJlZHVjZXIsIHtcclxuICAgIGxvZ29faGVpZ2hlcjogXCJub25lXCIsXHJcbiAgICBsb2dvX3dpZGVyOiBcIm5vbmVcIixcclxuICB9KTtcclxuXHJcbiAgY29uc3QgY2hhbmdlTW9kZT0gdXNlQ2FsbGJhY2soKG1vYmlsZT1udWxsLCB3aWRlcj1udWxsKT0+e1xyXG4gICAgbW9kZS5jdXJyZW50Ll9tb2JpbGVNb2RlID0gaW5uZXJXaWR0aCA8PSA4MDAgPyB0cnVlIDogZmFsc2U7XHJcbiAgICBtb2RlLmN1cnJlbnQuX3dpZGVyTW9kZSA9IGlubmVyV2lkdGggPj0gMTQwMCA/IHRydWUgOiBmYWxzZTtcclxuXHJcbiAgICBpZiAobW9kZS5jdXJyZW50Lm1vYmlsZU1vZGUgIT09IG1vZGUuY3VycmVudC5fbW9iaWxlTW9kZSkge1xyXG4gICAgICBtb2RlLmN1cnJlbnQubW9iaWxlTW9kZSA9ICFtb2RlLmN1cnJlbnQubW9iaWxlTW9kZTtcclxuICAgICAgbW9iaWxlO1xyXG4gICAgfVxyXG4gICAgaWYgKG1vZGUuY3VycmVudC53aWRlck1vZGUgIT09IG1vZGUuY3VycmVudC5fd2lkZXJNb2RlKSB7XHJcbiAgICAgIG1vZGUuY3VycmVudC53aWRlck1vZGUgPSAhbW9kZS5jdXJyZW50LndpZGVyTW9kZTtcclxuICAgICAgd2lkZXI7XHJcbiAgICB9XHJcbiAgfSxbXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIG1vZGUuY3VycmVudC5tb2JpbGVNb2RlID0gaW5uZXJXaWR0aCA8PSA4MDAgPyB0cnVlIDogZmFsc2U7XHJcbiAgICBtb2RlLmN1cnJlbnQud2lkZXJNb2RlID0gaW5uZXJXaWR0aCA+PSAxNDAwID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgbW9kZS5jdXJyZW50Ll9tb2JpbGVNb2RlID0gbW9kZS5jdXJyZW50Lm1vYmlsZU1vZGU7XHJcbiAgICBtb2RlLmN1cnJlbnQuX3dpZGVyTW9kZSA9IG1vZGUuY3VycmVudC53aWRlck1vZGU7XHJcblxyXG4gICAgYWxsRWxlbXMuY3VycmVudCA9IG1lbnVWYWx1ZXMuY3VycmVudC5tYXAoKGVsZW0pID0+IHtcclxuICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW0uaWQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgYXN0cm9uYXV0KCk7XHJcbiAgICBob21lR3NhcFNldChjbGlja1JlZi5jdXJyZW50Lm1lbnVFeHRlbmRlZCwgdHJ1ZSk7XHJcbiAgICB1cGRhdGVTdmdGcmFtZVZhbHVlcygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgdXBkYXRlU3ZnRnJhbWVWYWx1ZXMgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcInVwZGF0ZVN2Z0ZyYW1lVmFsdWVzIGlzIGNhbGxpbmdcIik7XHJcbiAgICBsZXQgX3JhZGl1cyA9IGlubmVyV2lkdGggPiA4MDAgPyAoaW5uZXJXaWR0aCA+IDE0MDAgPyA5IDogNykgOiA1O1xyXG4gICAgbGV0IF93YXZ5UGF0aCA9IE1hdGguYWJzKGlubmVyV2lkdGggLSBpbm5lcldpZHRoKSAqIDAuMDEgKyAyNTtcclxuICAgIGxldCBfc3Ryb2tlV2lkdGggPVxyXG4gICAgICBpbm5lcldpZHRoID4gODAwXHJcbiAgICAgICAgPyBpbm5lcldpZHRoID4gMTQwMFxyXG4gICAgICAgICAgPyB7IHJlY3Q6IFwiMC41cmVtXCIsIHdhdnk6IFwiMC43cmVtXCIgfVxyXG4gICAgICAgICAgOiB7IHJlY3Q6IFwiMC41dndcIiwgd2F2eTogXCIxdndcIiB9XHJcbiAgICAgICAgOiB7IHJlY3Q6IFwiMC4zcmVtXCIsIHdhdnk6IFwiMC41cmVtXCIgfTtcclxuICAgIGxldCBfc3ZnRnJhbWVEZWZhdWx0O1xyXG5cclxuICAgIGlmIChpbm5lcldpZHRoID4gMTQwMCkge1xyXG4gICAgICBfc3ZnRnJhbWVEZWZhdWx0ID0gVFYuc3ZnRnJhbWVEZWZhdWx0U2l6ZTE0MDA7XHJcbiAgICB9IGVsc2UgaWYgKGlubmVyV2lkdGggPiA4MDApIHtcclxuICAgICAgX3N2Z0ZyYW1lRGVmYXVsdCA9IFRWLnN2Z0ZyYW1lRGVmYXVsdFNpemU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoY2xpY2tSZWYuY3VycmVudC5tZW51RXh0ZW5kZWQgPT0gZmFsc2UpIHtcclxuICAgICAgICBfc3ZnRnJhbWVEZWZhdWx0ID0gVFYuc3ZnRnJhbWVEZWZhdWx0U2l6ZTgwMDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBfc3ZnRnJhbWVEZWZhdWx0ID0gVFYuc3ZnRnJhbWVEZWZhdWx0U2l6ZVNtYWxsZXJTaXplO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3ZnRnJhbWVWYWx1ZXMoe1xyXG4gICAgICAuLi5zdmdGcmFtZVZhbHVlcyxcclxuICAgICAgc3ZnRnJhbWVEZWZhdWx0OiB7IHdpZHRoOiBfc3ZnRnJhbWVEZWZhdWx0LCBoZWlnaHQ6IF9zdmdGcmFtZURlZmF1bHQgfSxcclxuICAgICAgcmFkaXVzOiBfcmFkaXVzLFxyXG4gICAgICB3YXZ5UGF0aDogX3dhdnlQYXRoLFxyXG4gICAgICBleHRyYVNwYWNlOiBfcmFkaXVzICogNSxcclxuICAgICAgc3Ryb2tlV2lkdGg6IF9zdHJva2VXaWR0aCxcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzdmdGcmFtZVZhbHVlcy5yYWRpdXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBpZiAoY2xpY2tSZWYuY3VycmVudC5tZW51RXh0ZW5kZWQpIHtcclxuICAgICAgICBtZW51VmFsdWVzLmN1cnJlbnQuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbVBhcmVudElkICE9PSBlbGVtLmlkKSB7XHJcbiAgICAgICAgICAgIGV2YWwoZWxlbS5pZCArIFwiX2NoYW5nZUhpZXJhcmNoeVN2Z0ZyYW1lUGFja1wiKShzdmdGcmFtZVZhbHVlcyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVudVZhbHVlcy5jdXJyZW50LmZvckVhY2goKGVsZW0pID0+IHtcclxuICAgICAgICAgIGV2YWwoZWxlbS5pZCArIFwiX2NoYW5nZUhpZXJhcmNoeVN2Z0ZyYW1lUGFja1wiKShzdmdGcmFtZVZhbHVlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbc3ZnRnJhbWVWYWx1ZXNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCB1cGRhdGVSZXNpemUgPSAoKSA9PiB7XHJcblxyXG5cclxuICAgICAgaG9tZUdzYXBTZXQoIGNsaWNrUmVmLmN1cnJlbnQubWVudUV4dGVuZGVkLCBtb2RlLmN1cnJlbnQubW9iaWxlTW9kZSAhPT0gbW9kZS5jdXJyZW50Ll9tb2JpbGVNb2RlICk7XHJcblxyXG4gICAgICBpZiAoY2xpY2tSZWYuY3VycmVudC5tZW51RXh0ZW5kZWQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlc2l6ZSBpcyB3b3JraW5nXCIpO1xyXG4gICAgICAgIHJlbWFpbkV4dGVuZGluZ01lbnUoKTtcclxuICAgICAgICBjcmVhdGVXYXZ5QW5pbWF0aW9uKHtcclxuICAgICAgICAgIHdpZHRoOiBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW0uY2xpZW50V2lkdGgsXHJcbiAgICAgICAgICBoZWlnaHQ6IGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbS5jbGllbnRIZWlnaHQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgY2hhbmdlTW9kZSh1cGRhdGVTdmdGcmFtZVZhbHVlcygpLHVwZGF0ZVN2Z0ZyYW1lVmFsdWVzKCkpO1xyXG4gICAgICBcclxuICAgIH07XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB1cGRhdGVSZXNpemUpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdXBkYXRlUmVzaXplKTtcclxuICAgIH07XHJcbiAgfSwgW3N2Z0ZyYW1lVmFsdWVzXSk7XHJcblxyXG4gIGNvbnN0IHJlbWFpbkV4dGVuZGluZ01lbnUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW1SZWN0LnNldEF0dHJpYnV0ZU5TKCBudWxsLCBcIndpZHRoXCIsIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbS5jbGllbnRXaWR0aCApO1xyXG4gICAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtUmVjdC5zZXRBdHRyaWJ1dGVOUyggbnVsbCwgXCJoZWlnaHRcIiwgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtLmNsaWVudEhlaWdodCApO1xyXG4gIH0sIFtdKTtcclxuXHJcblxyXG5cclxuXHJcbiAgLy8gLS0tLS0gICB0aGUgcmVhc29uIEkgcHV0IHN2Z0ZyYW1lVmFsdWUgYXMgYW4gYXJndW1lbnQsIG5vdCBqdXN0IHVzaW5nIHN2Z0ZyYW1lVmFsdWUgYXMgYSBSZWYsXHJcbiAgLy8gLS0tLS0gaXMgSSBkb24ndCB3YW50IHRvIHJlcmVuZGVyIGFsbCB0aGlzIGZ1bmN0aW9ucyB3aGVuZXZlciBzdmdGcmFtZVZhbHVlcyBjaGFuZ2VzLlxyXG4gIGNvbnN0IHRyYW5zZm9ybUFsbEVhY2hNZW51cyA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKF9zdmdGcmFtZVZhbHVlcywgZXh0ZW5kaW5nU2l6ZSwgZWxlbVBhcmVudElkKSA9PiB7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgTkYgPSBUVltcIm1lbnVEdXJhdGlvblwiXSAqIDYwO1xyXG5cclxuICAgICAgICBsZXQgZiA9IDA7XHJcbiAgICAgICAgbGV0IGRpciA9IDE7XHJcblxyXG4gICAgICAgIGFkZENTU21lbnV0cmFuc2l0aW9uKG51bGwsIC4uLmFsbEVsZW1zLmN1cnJlbnQpO1xyXG4gICAgICAgIGV4dGVuZGluZ1NpemUuTEkuZm9yRWFjaCgob2JqKSA9PiB7XHJcbiAgICAgICAgICBldmFsKG9ialtcImVsZW1JZFwiXSArIFwiX3NldExJX3NpemVcIikoeyB3aWR0aDogb2JqLndpZHRoLCBoZWlnaHQ6IG9iai5oZWlnaHQgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW0gIT09IG51bGwpIHtcclxuICAgICAgICAgIGFkZENTU21lbnV0cmFuc2l0aW9uKG51bGwsIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbSk7XHJcbiAgICAgICAgICBldmFsKGVsZW1QYXJlbnRJZCArIFwiX2NoYW5nZUhpZXJhcmNoeVN2Z0ZyYW1lUGFja1wiKSggX3N2Z0ZyYW1lVmFsdWVzLCBleHRlbmRpbmdTaXplW1wic3ZnRnJhbWVQYWNrYWdlXCJdXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyZWRFbGVtUGFyZW50SWQgIT09IG51bGwpIHtcclxuICAgICAgICAgIGFkZENTU21lbnV0cmFuc2l0aW9uKG51bGwsIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyZWRFbGVtKTtcclxuICAgICAgICAgIGV2YWwoIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyZWRFbGVtUGFyZW50SWQgKyBcIl9jaGFuZ2VIaWVyYXJjaHlTdmdGcmFtZVBhY2tcIiApKF9zdmdGcmFtZVZhbHVlcywgeyB3aWR0aDogX3N2Z0ZyYW1lVmFsdWVzLnN2Z0ZyYW1lRGVmYXVsdC53aWR0aCwgaGVpZ2h0OiBfc3ZnRnJhbWVWYWx1ZXMuc3ZnRnJhbWVEZWZhdWx0LmhlaWdodCB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpbm5lcldpZHRoIDwgODAwKSB7XHJcbiAgICAgICAgICBjb25zdCBzaXplID0gY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtICE9PSBudWxsICA/IFRWLnN2Z0ZyYW1lRGVmYXVsdFNpemVTbWFsbGVyU2l6ZSA6IF9zdmdGcmFtZVZhbHVlc1tcInN2Z0ZyYW1lRGVmYXVsdFwiXTtcclxuICAgICAgICAgIGNvbnN0IGNoaWxkRWxlbXMgPSBhbGxFbGVtcy5jdXJyZW50Lm1hcCgoZSkgPT4gZS5maXJzdEVsZW1lbnRDaGlsZCk7XHJcblxyXG4gICAgICAgICAgYWRkQ1NTbWVudXRyYW5zaXRpb24oZWxlbVBhcmVudElkLCAuLi5jaGlsZEVsZW1zKTtcclxuXHJcbiAgICAgICAgICBtZW51VmFsdWVzLmN1cnJlbnQuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtUGFyZW50SWQgIT09IGVsZW0uaWQpIHtcclxuICAgICAgICAgICAgICBjb25zdCByZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbS5pZCArIFwiU3ZnRnJhbWVcIik7XHJcblxyXG4gICAgICAgICAgICAgIGV2YWwoZWxlbS5pZCArIFwiX2NoYW5nZUhpZXJhcmNoeVN2Z0ZyYW1lUGFja1wiKShfc3ZnRnJhbWVWYWx1ZXMsIHsgd2lkdGg6IHNpemUsIGhlaWdodDogc2l6ZSB9KTtcclxuXHJcbiAgICAgICAgICAgICAgcmVjdC5zZXRBdHRyaWJ1dGVOUyhudWxsLCBcIndpZHRoXCIsIHNpemUpO1xyXG4gICAgICAgICAgICAgIHJlY3Quc2V0QXR0cmlidXRlTlMobnVsbCwgXCJoZWlnaHRcIiwgc2l6ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gYW5pbSgpIHtcclxuICAgICAgICAgIGYgKz0gZGlyO1xyXG4gICAgICAgICAgaWYgKGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW1SZWN0LnNldEF0dHJpYnV0ZU5TKFxyXG4gICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgXCJ3aWR0aFwiLFxyXG4gICAgICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbS5jbGllbnRXaWR0aFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW1SZWN0LnNldEF0dHJpYnV0ZU5TKFxyXG4gICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgXCJoZWlnaHRcIixcclxuICAgICAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW0uY2xpZW50SGVpZ2h0XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyZWRFbGVtUGFyZW50SWQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJlZEVsZW1SZWN0LnNldEF0dHJpYnV0ZU5TKFxyXG4gICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgXCJ3aWR0aFwiLFxyXG4gICAgICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyZWRFbGVtLmNsaWVudFdpZHRoXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyZWRFbGVtUmVjdC5zZXRBdHRyaWJ1dGVOUyhcclxuICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgIFwid2lkdGhcIixcclxuICAgICAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlcmVkRWxlbS5jbGllbnRXaWR0aFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZXh0ZW5kaW5nUmVxdWVzdEFuaW1SZWYuY3VycmVudCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltKTtcclxuXHJcbiAgICAgICAgICBpZiAoIShmICUgTkYpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiPT09PT09PWZpbmlzaGVkPT09PT09PVwiKTtcclxuICAgICAgICAgICAgLy8gb25BbmltID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmIChjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW0gIT09IG51bGwpXHJcbiAgICAgICAgICAgICAgZXZhbChlbGVtUGFyZW50SWQgKyBcIl9jaGFuZ2VIaWVyYXJjaHlTdmdGcmFtZVBhY2tcIikoXHJcbiAgICAgICAgICAgICAgICBfc3ZnRnJhbWVWYWx1ZXMsXHJcbiAgICAgICAgICAgICAgICB7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgIGV2YWwoZWxlbVBhcmVudElkICsgXCJfY2hhbmdlSGllcmFyY2h5U3ZnRnJhbWVQYWNrXCIpKFxyXG4gICAgICAgICAgICAgICAgX3N2Z0ZyYW1lVmFsdWVzLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogX3N2Z0ZyYW1lVmFsdWVzW1wic3ZnRnJhbWVEZWZhdWx0XCJdLFxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IF9zdmdGcmFtZVZhbHVlc1tcInN2Z0ZyYW1lRGVmYXVsdFwiXSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoZXh0ZW5kaW5nUmVxdWVzdEFuaW1SZWYuY3VycmVudCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzb2x2ZT9cIik7XHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYW5pbSgpO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBbXVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGNyZWF0ZVdhdnlBbmltYXRpb24gPSB1c2VDYWxsYmFjayhcclxuICAgIChleHRlbmRpbmdTaXplKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiY3JlYXRlV2F2eUFuaW1hdGlvbiBpcyB3b3JraW5nXCIpO1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDgwMCkge1xyXG4gICAgICAgICAgbGV0IGRhdGFQb2ludHMsIHBvaW50c1R3ZWVuMSwgcG9pbnRzVHdlZW4yO1xyXG5cclxuICAgICAgICAgIGlmIChzdmdGcmFtZVZhbHVlcy53YXZ5UGF0aCA+IGV4dGVuZGluZ1NpemVbXCJ3aWR0aFwiXSAvIDIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNldFN2Z0ZyYW1lVmFsdWVzKHtcclxuICAgICAgICAgICAgICAuLi5zdmdGcmFtZVZhbHVlcyxcclxuICAgICAgICAgICAgICB3YXZ5UGF0aDogZXh0ZW5kaW5nU2l6ZVtcIndpZHRoXCJdIC8gMixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKHdhdnlBbmltLmN1cnJlbnQuVEwgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgd2F2eUFuaW0uY3VycmVudC5UTCA9IGdzYXAudGltZWxpbmUoe1xyXG4gICAgICAgICAgICAgIG9uVXBkYXRlOiB1cGRhdGUsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgd2F2eUFuaW0uY3VycmVudC5UTC5yZXN1bWUoKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBkYXRhUG9pbnRzID0gZ2V0RGF0YVBvaW50cyhcclxuICAgICAgICAgICAgZXh0ZW5kaW5nU2l6ZSxcclxuICAgICAgICAgICAgc3ZnRnJhbWVWYWx1ZXMsXHJcbiAgICAgICAgICAgIHN2Z0ZyYW1lVmFsdWVzSW1tdXRhYmxlLmN1cnJlbnRcclxuICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgd2F2eUFuaW0uY3VycmVudC5wb2ludHMgPSB7XHJcbiAgICAgICAgICAgIHBvaW50czE6IGRhdGFQb2ludHMucG9pbnRzMSxcclxuICAgICAgICAgICAgcG9pbnRzMjogZGF0YVBvaW50cy5wb2ludHMyLFxyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICBwb2ludHNUd2VlbjEgPSBkYXRhUG9pbnRzLnBvaW50c1R3ZWVuMTtcclxuICAgICAgICAgIHBvaW50c1R3ZWVuMiA9IGRhdGFQb2ludHMucG9pbnRzVHdlZW4yO1xyXG5cclxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2F2eUFuaW0uY3VycmVudC5wb2ludHMucG9pbnRzMS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgZHVyYXRpb24gPSByYW5kb20oXHJcbiAgICAgICAgICAgICAgc3ZnRnJhbWVWYWx1ZXNJbW11dGFibGUuY3VycmVudFtcInNwZWVkXCJdWzBdLFxyXG4gICAgICAgICAgICAgIHN2Z0ZyYW1lVmFsdWVzSW1tdXRhYmxlLmN1cnJlbnRbXCJzcGVlZFwiXVsxXVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgbGV0IHR3ZWVuMSA9IGdzYXAudG8od2F2eUFuaW0uY3VycmVudC5wb2ludHMucG9pbnRzMVtpXSwge1xyXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcclxuICAgICAgICAgICAgICB4OiBwb2ludHNUd2VlbjFbaV0ueCxcclxuICAgICAgICAgICAgICB5OiBwb2ludHNUd2VlbjFbaV0ueSxcclxuICAgICAgICAgICAgICByZXBlYXQ6IC0xLFxyXG4gICAgICAgICAgICAgIHlveW86IHRydWUsXHJcbiAgICAgICAgICAgICAgZWFzZTogU2luZS5lYXNlSW5PdXQsXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgbGV0IHR3ZWVuMiA9IGdzYXAudG8od2F2eUFuaW0uY3VycmVudC5wb2ludHMucG9pbnRzMltpXSwge1xyXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcclxuICAgICAgICAgICAgICB4OiBwb2ludHNUd2VlbjJbaV0ueCxcclxuICAgICAgICAgICAgICB5OiBwb2ludHNUd2VlbjJbaV0ueSxcclxuICAgICAgICAgICAgICByZXBlYXQ6IC0xLFxyXG4gICAgICAgICAgICAgIHlveW86IHRydWUsXHJcbiAgICAgICAgICAgICAgZWFzZTogU2luZS5lYXNlSW5PdXQsXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgd2F2eUFuaW0uY3VycmVudC5UTC5hZGQodHdlZW4xLCAtcmFuZG9tKGR1cmF0aW9uKSk7XHJcbiAgICAgICAgICAgIHdhdnlBbmltLmN1cnJlbnQuVEwuYWRkKHR3ZWVuMiwgLXJhbmRvbShkdXJhdGlvbikpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcclxuICAgICAgICAgICAgY2xpY2tSZWYuY3VycmVudC53YXZ5UGF0aFswXS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgICAgXCJkXCIsXHJcbiAgICAgICAgICAgICAgdHdlZW5DYXJkaW5hbCh3YXZ5QW5pbS5jdXJyZW50LnBvaW50cy5wb2ludHMxLCB0cnVlLCAxKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LndhdnlQYXRoWzFdLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgICBcImRcIixcclxuICAgICAgICAgICAgICB0d2VlbkNhcmRpbmFsKHdhdnlBbmltLmN1cnJlbnQucG9pbnRzLnBvaW50czIsIHRydWUsIDEpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcmV0dXJuIHdhdnlBbmltLmN1cnJlbnQuVEw7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmICh3YXZ5QW5pbS5jdXJyZW50LlRMICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmICghd2F2eUFuaW0uY3VycmVudC5UTC5wYXVzZWQoKSkge1xyXG4gICAgICAgICAgICAgIHdhdnlBbmltLmN1cnJlbnQuVEwgPSB3YXZ5QW5pbS5jdXJyZW50LlRMLnBhdXNlKCk7XHJcbiAgICAgICAgICAgICAgY2xpY2tSZWYuY3VycmVudC53YXZ5UGF0aFswXS5zZXRBdHRyaWJ1dGUoXCJkXCIsIFwiXCIpO1xyXG4gICAgICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQud2F2eVBhdGhbMV0uc2V0QXR0cmlidXRlKFwiZFwiLCBcIlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFtzdmdGcmFtZVZhbHVlc11cclxuICApO1xyXG5cclxuICAvLyB1c2VFZmZlY3QoKCk9PntzZXRDbGlja0FmdGVyQ29udGV4dCgnc2tpbGwnKTt9LFtdKVxyXG5cclxuICBjb25zdCBleHRlbmRNZW51ID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoZWxlbSwgb3JkZXIgPSAwLCB0ZXh0UmVmLCBjb250ZW50UmVmLCBuZW9uUmVmcykgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImVsZW1cIiwgZWxlbSk7XHJcbiAgICAgIGNvbnN0IGVsZW1QYXJlbnRJZCA9IGVsZW0ucGFyZW50RWxlbWVudC5pZDtcclxuXHJcbiAgICAgIGlmIChjbGlja1JlZi5jdXJyZW50Lm9uQW5pbSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoY2xpY2tSZWYuY3VycmVudC5tZW51RXh0ZW5kZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICBjbGlja1JlZi5jdXJyZW50Lm9uQW5pbSA9IHRydWU7XHJcbiAgICAgICAgICBzZXRDbGlja0NvbnRleHQoeyBvbjogdHJ1ZSwgYmlnZ2VyOiBlbGVtUGFyZW50SWQsIGJpZ2dlcmVkOiBudWxsIH0pO1xyXG4gICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5tZW51RXh0ZW5kZWQgPSB0cnVlO1xyXG4gICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtUGFyZW50SWQgPSBlbGVtUGFyZW50SWQ7XHJcbiAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW0gPSBlbGVtO1xyXG4gICAgICAgICAgKGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbVJlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgICAgICAgZWxlbVBhcmVudElkICsgXCJTdmdGcmFtZVwiXHJcbiAgICAgICAgICApKSxcclxuICAgICAgICAgICAgKGNsaWNrUmVmLmN1cnJlbnQud2F2eVBhdGggPSBbXHJcbiAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbVBhcmVudElkICsgXCJTdmdXYXZ5MVwiKSxcclxuICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtUGFyZW50SWQgKyBcIlN2Z1dhdnkyXCIpLFxyXG4gICAgICAgICAgICBdKTtcclxuICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQudGV4dFJlZiA9IHRleHRSZWY7XHJcbiAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmNvbnRlbnRSZWYgPSBjb250ZW50UmVmO1xyXG4gICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJOZW9uUmVmcyA9IG5lb25SZWZzO1xyXG5cclxuICAgICAgICAgIGRlbW9WaWRlb0hlaWdodCA9IGdldERlbW9WaWRlb0hlaWdodChjbGlja1JlZi5jdXJyZW50Lm1lbnVFeHRlbmRlZCk7XHJcbiAgICAgICAgICBsZXQgZXh0ZW5kaW5nU2l6ZSA9IGdldFZhbHVlc1RvVW5TeW1ldHJ5RWFjaE1lbnUoXHJcbiAgICAgICAgICAgIGRlbW9WaWRlb0hlaWdodCxcclxuICAgICAgICAgICAgZWxlbSxcclxuICAgICAgICAgICAgb3JkZXJcclxuICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgZnVuY3Rpb24gY2hlY2tDYWxsaW5nQXN0cm9uYXV0KCkge1xyXG4gICAgICAgICAgICBpZiAoIWxpZ2h0ZXJWZXJzaW9uLmN1cnJlbnQpIGNhbGxBc3Ryb25hdXQoZWxlbVBhcmVudElkKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgICAgIGhvbWVHc2FwVHJhbnNpdGlvbihjbGlja1JlZi5jdXJyZW50Lm1lbnVFeHRlbmRlZCksXHJcbiAgICAgICAgICAgIGxvZ29EaXNwbGF5RGlzcGF0Y2goeyBkZW1vQ2xpZW50SGVpZ2h0OiBkZW1vUmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0LCBsb2dvQ2xpZW50V2lkdGg6ICgoKGlubmVyV2lkdGggKiAoMTAwIC0gVFYudW5TeW1ldHJ5RGVtb01lbnUpKSAvIDEwMCkgKiBUVi5sb2dvV2lkdGgpIC8gMTAwIH0pLFxyXG4gICAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW1SZWN0LnNldEF0dHJpYnV0ZU5TKCBudWxsLCBcInN0cm9rZVwiLCBcInVybCgjU3ZnSXZvcnkpXCIpLFxyXG4gICAgICAgICAgICB0cmFuc2Zvcm1BbGxFYWNoTWVudXMoc3ZnRnJhbWVWYWx1ZXMsIGV4dGVuZGluZ1NpemUsIGVsZW1QYXJlbnRJZCksXHJcbiAgICAgICAgICAgIGNoZWNrQ2FsbGluZ0FzdHJvbmF1dCgpLFxyXG4gICAgICAgICAgXSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNyZWF0ZVdhdnlBbmltYXRpb24oZXh0ZW5kaW5nU2l6ZVtcInN2Z0ZyYW1lUGFja2FnZVwiXSk7XHJcbiAgICAgICAgICAgICAgdGV4dFJlZi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgY29udGVudFJlZi5zdHlsZS5kaXNwbGF5ID0gXCJpbml0aWFsXCI7XHJcbiAgICAgICAgICAgICAgY29udGVudFJlZi5zdHlsZS56SW5kZXggPSAzO1xyXG4gICAgICAgICAgICAgIHNldENsaWNrQWZ0ZXJDb250ZXh0KGVsZW1QYXJlbnRJZCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICBjbGlja1JlZi5jdXJyZW50Lm9uQW5pbSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbVBhcmVudElkICE9PSBlbGVtUGFyZW50SWQpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZWxzZSBpZlwiKTtcclxuICAgICAgICAgIGNvbnN0IGJpZ2dlcmVkV2F2eVBhdGggPSBjbGlja1JlZi5jdXJyZW50LndhdnlQYXRoO1xyXG4gICAgICAgICAgY29uc3QgYmlnZ2VyZWRUZXh0ID0gY2xpY2tSZWYuY3VycmVudC50ZXh0UmVmO1xyXG4gICAgICAgICAgY29uc3QgYmlnZ2VyZWRDb250ZW50UmVmID0gY2xpY2tSZWYuY3VycmVudC5jb250ZW50UmVmO1xyXG4gICAgICAgICAgY29uc3QgYmlnZ2VyZWROZW9uUmVmcyA9IGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyTmVvblJlZnM7XHJcblxyXG4gICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5vbkFuaW0gPSB0cnVlO1xyXG4gICAgICAgICAgc2V0Q2xpY2tDb250ZXh0KHsgb246IHRydWUsIGJpZ2dlcjogZWxlbVBhcmVudElkLCBiaWdnZXJlZDogY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtUGFyZW50SWR9KTtcclxuICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyZWRFbGVtID0gY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtO1xyXG4gICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJlZEVsZW1QYXJlbnRJZCA9IGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbVBhcmVudElkO1xyXG4gICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJlZEVsZW1SZWN0ID0gY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtUmVjdDtcclxuICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbSA9IGVsZW07XHJcbiAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW1QYXJlbnRJZCA9IGVsZW1QYXJlbnRJZDtcclxuICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbSA9IGVsZW07XHJcbiAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW1SZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIGVsZW1QYXJlbnRJZCArIFwiU3ZnRnJhbWVcIiApO1xyXG4gICAgICAgICAgY2xpY2tSZWYuY3VycmVudC53YXZ5UGF0aCA9IFsgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbVBhcmVudElkICsgXCJTdmdXYXZ5MVwiKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbVBhcmVudElkICsgXCJTdmdXYXZ5MlwiKV07XHJcbiAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LnRleHRSZWYgPSB0ZXh0UmVmO1xyXG4gICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5jb250ZW50UmVmID0gY29udGVudFJlZjtcclxuICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyTmVvblJlZnMgPSBuZW9uUmVmcztcclxuXHJcbiAgICAgICAgICBkZW1vVmlkZW9IZWlnaHQgPSBnZXREZW1vVmlkZW9IZWlnaHQoY2xpY2tSZWYuY3VycmVudC5tZW51RXh0ZW5kZWQpO1xyXG4gICAgICAgICAgbGV0IGV4dGVuZGluZ1NpemUgPSBnZXRWYWx1ZXNUb1VuU3ltZXRyeUVhY2hNZW51KCBkZW1vVmlkZW9IZWlnaHQsIGVsZW0sIG9yZGVyICk7XHJcblxyXG4gICAgICAgICAgaWYgKGlubmVyV2lkdGggPiA4MDApIHdhdnlBbmltLmN1cnJlbnQuVEwucGF1c2UoMCk7XHJcblxyXG4gICAgICAgICAgZnVuY3Rpb24gY2hlY2tDYWxsaW5nQXN0cm9uYXV0KCkge1xyXG4gICAgICAgICAgICBpZiAoIWxpZ2h0ZXJWZXJzaW9uLmN1cnJlbnQpIGNhbGxBc3Ryb25hdXQoIGVsZW1QYXJlbnRJZCwgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJlZEVsZW1QYXJlbnRJZCApO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIFByb21pc2UuYWxsKFtcclxuICAgICAgICAgICAgYmlnZ2VyZWRXYXZ5UGF0aFswXS5zZXRBdHRyaWJ1dGUoXCJkXCIsIFwiXCIpLFxyXG4gICAgICAgICAgICBiaWdnZXJlZFdhdnlQYXRoWzFdLnNldEF0dHJpYnV0ZShcImRcIiwgXCJcIiksXHJcbiAgICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyZWRFbGVtUmVjdC5zZXRBdHRyaWJ1dGVOUyggbnVsbCwgXCJzdHJva2VcIiwgYHVybCgjJHtjbGlja1JlZi5jdXJyZW50LmJpZ2dlcmVkRWxlbVBhcmVudElkfVN2Z0ZyYW1lU3RvcENvbG9yKWAgKSxcclxuICAgICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtUmVjdC5zZXRBdHRyaWJ1dGVOUyggbnVsbCwgXCJzdHJva2VcIiwgXCJ1cmwoI1N2Z0l2b3J5KVwiKSxcclxuICAgICAgICAgICAgdHJhbnNmb3JtQWxsRWFjaE1lbnVzKHN2Z0ZyYW1lVmFsdWVzLCBleHRlbmRpbmdTaXplLCBlbGVtUGFyZW50SWQpLFxyXG4gICAgICAgICAgICBiaWdnZXJlZFRleHQuc3R5bGUuZGlzcGxheSA9IFwiaW5pdGlhbFwiLFxyXG4gICAgICAgICAgICBiaWdnZXJlZENvbnRlbnRSZWYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiLFxyXG4gICAgICAgICAgICBiaWdnZXJlZENvbnRlbnRSZWYuc3R5bGUuekluZGV4ID0gLTEsXHJcbiAgICAgICAgICAgIGJpZ2dlcmVkTmVvblJlZnNbMF0uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCIsXHJcbiAgICAgICAgICAgIGJpZ2dlcmVkTmVvblJlZnNbMV0uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCIsXHJcbiAgICAgICAgICAgIGNoZWNrQ2FsbGluZ0FzdHJvbmF1dCgpLFxyXG4gICAgICAgICAgXSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNyZWF0ZVdhdnlBbmltYXRpb24oZXh0ZW5kaW5nU2l6ZVtcInN2Z0ZyYW1lUGFja2FnZVwiXSk7XHJcbiAgICAgICAgICAgICAgdGV4dFJlZi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgY29udGVudFJlZi5zdHlsZS5kaXNwbGF5ID0gXCJpbml0aWFsXCI7XHJcbiAgICAgICAgICAgICAgY29udGVudFJlZi5zdHlsZS56SW5kZXggPSAzO1xyXG4gICAgICAgICAgICAgIGJpZ2dlcmVkTmVvblJlZnNbMF0uc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG4gICAgICAgICAgICAgIGJpZ2dlcmVkTmVvblJlZnNbMV0uc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG4gICAgICAgICAgICAgIHNldENsaWNrQWZ0ZXJDb250ZXh0KGVsZW1QYXJlbnRJZCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICBjbGlja1JlZi5jdXJyZW50Lm9uQW5pbSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJlbHNlXCIpO1xyXG4gICAgICAgICAgY29uc3QgYmlnZ2VyZWRXYXZ5UGF0aCA9IGNsaWNrUmVmLmN1cnJlbnQud2F2eVBhdGg7XHJcbiAgICAgICAgICBjb25zdCBiaWdnZXJlZFRleHQgPSBjbGlja1JlZi5jdXJyZW50LnRleHRSZWY7XHJcbiAgICAgICAgICBjb25zdCBiaWdnZXJlZENvbnRlbnRSZWYgPSBjbGlja1JlZi5jdXJyZW50LmNvbnRlbnRSZWY7XHJcbiAgICAgICAgICBjb25zdCBiaWdnZXJlZE5lb25SZWZzID0gY2xpY2tSZWYuY3VycmVudC5iaWdnZXJOZW9uUmVmcztcclxuXHJcbiAgICAgICAgICBjbGlja1JlZi5jdXJyZW50Lm9uQW5pbSA9IHRydWU7XHJcbiAgICAgICAgICBzZXRDbGlja0NvbnRleHQoeyBvbjogZmFsc2UsIGJpZ2dlcjogbnVsbCwgYmlnZ2VyZWQ6IG51bGwgfSk7XHJcbiAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlcmVkRWxlbSA9IGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbTtcclxuICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyZWRFbGVtUGFyZW50SWQgPSAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtUGFyZW50SWQ7XHJcbiAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlcmVkRWxlbVJlY3QgPSBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW1SZWN0O1xyXG4gICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtID0gbnVsbDtcclxuICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQubWVudUV4dGVuZGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgbGV0IGV4dGVuZGluZ1NpemUgPSB7IExJOiBbIHsgZWxlbUlkOiBcIndvcmtcIiwgd2lkdGg6IFwiNTAlXCIsIGhlaWdodDogXCI1MCVcIiB9LCB7IGVsZW1JZDogXCJza2lsbFwiLCB3aWR0aDogXCI1MCVcIiwgaGVpZ2h0OiBcIjUwJVwiIH0sIHsgZWxlbUlkOiBcInBhaW50XCIsIHdpZHRoOiBcIjUwJVwiLCBoZWlnaHQ6IFwiNTAlXCIgfSwgeyBlbGVtSWQ6IFwiaW5mb1wiLCB3aWR0aDogXCI1MCVcIiwgaGVpZ2h0OiBcIjUwJVwiIH0gXSB9O1xyXG5cclxuICAgICAgICAgIGlmIChpbm5lcldpZHRoID4gODAwKSB3YXZ5QW5pbS5jdXJyZW50LlRMLnBhdXNlKDApO1xyXG4gICAgICAgICAgZnVuY3Rpb24gY2hlY2tDYWxsaW5nQXN0cm9uYXV0KCkge1xyXG4gICAgICAgICAgICBpZiAoIWxpZ2h0ZXJWZXJzaW9uLmN1cnJlbnQpIHBhdXNlQXN0cm9uYXV0KCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgICAgICBob21lR3NhcFRyYW5zaXRpb24oY2xpY2tSZWYuY3VycmVudC5tZW51RXh0ZW5kZWQpLFxyXG4gICAgICAgICAgICBsb2dvRGlzcGxheURpc3BhdGNoKHsgZGVtb0NsaWVudEhlaWdodDogZGVtb1JlZi5jdXJyZW50LmNsaWVudEhlaWdodCwgbG9nb0NsaWVudFdpZHRoOiAoKChpbm5lcldpZHRoICogKDEwMCAtIFRWLnN5bWV0cnlEZW1vTWVudSkpIC8gMTAwKSAqIFRWLmxvZ29XaWR0aCkgLyAxMDAgfSksXHJcbiAgICAgICAgICAgIGJpZ2dlcmVkV2F2eVBhdGhbMF0uc2V0QXR0cmlidXRlKFwiZFwiLCBcIlwiKSxcclxuICAgICAgICAgICAgYmlnZ2VyZWRXYXZ5UGF0aFsxXS5zZXRBdHRyaWJ1dGUoXCJkXCIsIFwiXCIpLFxyXG4gICAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlcmVkRWxlbVJlY3Quc2V0QXR0cmlidXRlTlMoIG51bGwsIFwic3Ryb2tlXCIsIGB1cmwoIyR7Y2xpY2tSZWYuY3VycmVudC5iaWdnZXJlZEVsZW1QYXJlbnRJZH1TdmdGcmFtZVN0b3BDb2xvcilgKSxcclxuICAgICAgICAgICAgdHJhbnNmb3JtQWxsRWFjaE1lbnVzKHN2Z0ZyYW1lVmFsdWVzLCBleHRlbmRpbmdTaXplLCBlbGVtUGFyZW50SWQpLFxyXG4gICAgICAgICAgICBiaWdnZXJlZFRleHQuc3R5bGUuZGlzcGxheSA9IFwiaW5pdGlhbFwiLFxyXG4gICAgICAgICAgICBiaWdnZXJlZENvbnRlbnRSZWYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiLFxyXG4gICAgICAgICAgICBiaWdnZXJlZENvbnRlbnRSZWYuc3R5bGUuekluZGV4ID0gLTEsXHJcbiAgICAgICAgICAgIGJpZ2dlcmVkTmVvblJlZnNbMF0uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCIsXHJcbiAgICAgICAgICAgIGJpZ2dlcmVkTmVvblJlZnNbMV0uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCIsXHJcbiAgICAgICAgICAgIGNoZWNrQ2FsbGluZ0FzdHJvbmF1dCgpLFxyXG4gICAgICAgICAgICBzZXRDbGlja0FmdGVyQ29udGV4dChudWxsKSxcclxuICAgICAgICAgIF0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBuZW9uUmVmc1swXS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbiAgICAgICAgICAgIG5lb25SZWZzWzFdLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuICAgICAgICAgICAgY2xpY2tSZWYuY3VycmVudCA9IHsgb25BbmltOiBmYWxzZSwgYWN0aXZlOiB0cnVlLCBtZW51RXh0ZW5kZWQ6IGZhbHNlLCBiaWdnZXJFbGVtUGFyZW50SWQ6IG51bGwsIGJpZ2dlckVsZW06IG51bGwsIGJpZ2dlckVsZW1SZWN0OiBudWxsLCBiaWdnZXJOZW9uUmVmczogW10sIGJpZ2dlcmVkRWxlbTogbnVsbCwgYmlnZ2VyZWRFbGVtUGFyZW50SWQ6IG51bGwsIGJpZ2dlcmVkRWxlbVJlY3Q6IG51bGwsIHdhdnlQYXRoOiBbXSB9O1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgW3N2Z0ZyYW1lVmFsdWVzXVxyXG4gICk7XHJcblxyXG4gIC8vPT09PT09PT09PT09PT09PT1sb2FkZXI9PT09PT09PT09PT09PT09PT09PT0vL1xyXG5cclxuICBjb25zdCBvcGVuTGlnaHRlclZlcnNpb24gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBsaWdodGVyVmVyc2lvbi5jdXJyZW50ID0gdHJ1ZTtcclxuICAgIHJlbW92ZVNjZW5lKCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpZ2h0ZXJWZXJzaW9uXCIpLmlubmVySFRNTCA9XHJcbiAgICAgIFwiVGhpcyBpcyBsaWdodGVyIHZlcnNpb25cIjtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwid29ya2luZz9cIik7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9hZGVyQW5pbVwiKS5jbGFzc0xpc3QuYWRkKFwibG9hZGVyRmFkZU91dFRyYW5zXCIpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvYWRlckNvbnRhaW5lclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgIH0sIDEyMDApO1xyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICAvLz09PT09PT09PT09PT09PT09bG9hZGVyPT09PT09PT09PT09PT09PT09PT09Ly9cclxuXHJcbiAgcmV0dXJuIHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBpZD1cIm1hc3RlclwiIHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwifX0+XHJcbiAgICAgICAgPGRpdiBpZD1cImxvYWRlckNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBpZD1cImxvYWRlckFuaW1cIj5Mb2FkJm5ic3A7Jm5ic3A7bmc8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgaWQ9XCJsaWdodGVyVmVyc2lvblwiIG9uQ2xpY2s9e29wZW5MaWdodGVyVmVyc2lvbn0+XHJcbiAgICAgICAgICAgIENsaWNrIHRvIHRoZSBsaWdodGVyIHZlcnNpb24gPGJyIC8+IHdoaWNoIGRvZXNuJ3QgY29udGFpbiBUSFJFRSBKU1xyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEV4dGVuZE1lbnVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtleHRlbmRNZW51fT5cclxuICAgICAgICAgIDxMb2dvRGlzcGxheUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgbG9nb0Rpc3BsYXksIGxvZ29EaXNwbGF5RGlzcGF0Y2ggfX0gPlxyXG4gICAgICAgICAgICA8TWVudVNpemVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHdvcmtfc3R5bGVMSSwgc2tpbGxfc3R5bGVMSSwgcGFpbnRfc3R5bGVMSSwgaW5mb19zdHlsZUxJLCB3b3JrX3N0eWxlU3ZnRnJhbWVQYWNrLCBza2lsbF9zdHlsZVN2Z0ZyYW1lUGFjaywgcGFpbnRfc3R5bGVTdmdGcmFtZVBhY2ssIGluZm9fc3R5bGVTdmdGcmFtZVBhY2t9fT5cclxuICAgICAgICAgICAgICA8Q2xpY2tDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjbGlja0NvbnRleHR9PlxyXG4gICAgICAgICAgICAgICAgPENsaWNrQWZ0ZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjbGlja0FmdGVyQ29udGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgIDxIb21lTGF5b3V0UmVuZGVyIHZhbHM9e3sgcmVmczogeyBkZW1vUmVmLCBsb2dvUmVmIH0sIG1lbnVWYWx1ZXM6IG1lbnVWYWx1ZXMuY3VycmVudCwgc3ZnRnJhbWVWYWx1ZXNJbW11dGFibGU6IHN2Z0ZyYW1lVmFsdWVzSW1tdXRhYmxlLmN1cnJlbnQsIGNsaWNrQ29udGV4dDogY2xpY2tDb250ZXh0fX0vPlxyXG4gICAgICAgICAgICAgICAgPC9DbGlja0FmdGVyQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgICAgICAgICA8L0NsaWNrQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgICAgICAgPC9NZW51U2l6ZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgICA8L0xvZ29EaXNwbGF5Q29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgICA8L0V4dGVuZE1lbnVDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfSwgWyBsb2dvRGlzcGxheSwgd29ya19zdHlsZUxJLCB3b3JrX3N0eWxlU3ZnRnJhbWVQYWNrLCBza2lsbF9zdHlsZVN2Z0ZyYW1lUGFjaywgcGFpbnRfc3R5bGVTdmdGcmFtZVBhY2ssIGluZm9fc3R5bGVTdmdGcmFtZVBhY2ssIGNsaWNrQ29udGV4dCwgY2xpY2tBZnRlckNvbnRleHRdKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIEhvbWVMYXlvdXRSZW5kZXIocHJvcHMpIHtcclxuICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tSG9tZUxheW91dFJlbmRlci0tLS0tLS0tLS0tLS0tLS0tXCIpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8RGVtbyByZWZzPXtwcm9wcy52YWxzLnJlZnN9IC8+XHJcbiAgICAgIDxNZW51IHZhbHM9e3sgbWVudVZhbHVlczogcHJvcHMudmFscy5tZW51VmFsdWVzLCBzdmdGcmFtZVZhbHVlc0ltbXV0YWJsZTogcHJvcHMudmFscy5zdmdGcmFtZVZhbHVlc0ltbXV0YWJsZX19IC8+XHJcblxyXG4gICAgICA8ZGl2IGlkPVwidGhyZWVKU0NvdmVyXCI+PC9kaXY+XHJcbiAgICAgIDxkaXYgaWQ9XCJ0aHJlZUpTQ2FudmFzXCI+PC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVMYXlvdXQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=