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
      console.log('mobileMode mode changed', mode.current.mobileMode);
      mode.current.mobileMode = !mode.current.mobileMode;
      mobile;
    }

    if (mode.current.widerMode !== mode.current._widerMode) {
      console.log('widerMode mode changed', mode.current.widerMode);
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
    // const rect = document.getElementById(biggerElem.current.parentElement.id+"SvgFrame");
    clickRef.current.biggerElemRect.setAttributeNS(null, "width", clickRef.current.biggerElem.clientWidth);
    clickRef.current.biggerElemRect.setAttributeNS(null, "height", clickRef.current.biggerElem.clientHeight);
  }, []); // function test(){
  //   return new Promise((resolve, reject)=>{
  //     setTimeout(() => {
  //       console.log('finish');
  //       resolve();
  //     }, 1000);
  //   })
  // }
  // function disableClick(){
  //   return new Promise((resolve, reject)=>{
  //     activeClick = false;
  //     console.log(activeClick);
  //     resolve();
  //   })
  // }
  // -----   the reason I put svgFrameValue as an argument, not just using svgFrameValue as a Ref,
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
          lineNumber: 671,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: "lighterVersion",
          onClick: openLighterVersion,
          children: ["Click to the lighter version ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 673,
            columnNumber: 42
          }, _this), " which doesn't contain THREE JS"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 672,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 670,
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
                  lineNumber: 681,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 680,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 679,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 678,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 677,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 676,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 669,
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
      lineNumber: 696,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Menu_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
      vals: {
        menuValues: props.vals.menuValues,
        svgFrameValuesImmutable: props.vals.svgFrameValuesImmutable
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 697,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "threeJSCover"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 699,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "threeJSCanvas"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 700,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lTGF5b3V0LmpzeCJdLCJuYW1lcyI6WyJFeHRlbmRNZW51Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJMb2dvRGlzcGxheUNvbnRleHQiLCJNZW51U2l6ZUNvbnRleHQiLCJDbGlja0NvbnRleHQiLCJDbGlja0FmdGVyQ29udGV4dCIsImxvZ29EaXNwbGF5UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiaW5uZXJXaWR0aCIsInVuZGVmaW5lZCIsImlubmVySGVpZ2h0IiwiZGVtb0NsaWVudEhlaWdodCIsImxvZ29DbGllbnRXaWR0aCIsImxvZ29faGVpZ2hlciIsImxvZ29fd2lkZXIiLCJIb21lTGF5b3V0IiwiY29uc29sZSIsImxvZyIsInVzZU1lbnVTaXplIiwid29ya19zZXRMSV9zaXplIiwid29ya19zZXRzdmdGcmFtZVBhY2tTaXplIiwid29ya19zdHlsZUxJIiwid29ya19zdHlsZVN2Z0ZyYW1lUGFjayIsIndvcmtfY2hhbmdlSGllcmFyY2h5U3ZnRnJhbWVQYWNrIiwic2tpbGxfc2V0TElfc2l6ZSIsInNraWxsX3NldHN2Z0ZyYW1lUGFja1NpemUiLCJza2lsbF9zdHlsZUxJIiwic2tpbGxfc3R5bGVTdmdGcmFtZVBhY2siLCJza2lsbF9jaGFuZ2VIaWVyYXJjaHlTdmdGcmFtZVBhY2siLCJwYWludF9zZXRMSV9zaXplIiwicGFpbnRfc2V0c3ZnRnJhbWVQYWNrU2l6ZSIsInBhaW50X3N0eWxlTEkiLCJwYWludF9zdHlsZVN2Z0ZyYW1lUGFjayIsInBhaW50X2NoYW5nZUhpZXJhcmNoeVN2Z0ZyYW1lUGFjayIsImluZm9fc2V0TElfc2l6ZSIsImluZm9fc2V0c3ZnRnJhbWVQYWNrU2l6ZSIsImluZm9fc3R5bGVMSSIsImluZm9fc3R5bGVTdmdGcmFtZVBhY2siLCJpbmZvX2NoYW5nZUhpZXJhcmNoeVN2Z0ZyYW1lUGFjayIsImxpZ2h0ZXJWZXJzaW9uIiwidXNlUmVmIiwidXNlU3RhdGUiLCJzdmdGcmFtZURlZmF1bHQiLCJyYWRpdXMiLCJ3YXZ5UGF0aCIsImV4dHJhU3BhY2UiLCJzdHJva2VXaWR0aCIsInJlY3QiLCJ3YXZ5Iiwic3ZnRnJhbWVWYWx1ZXMiLCJzZXRTdmdGcmFtZVZhbHVlcyIsInN2Z0ZyYW1lVmFsdWVzSW1tdXRhYmxlIiwieCIsInkiLCJyeCIsInJ5IiwibXVsdGlwbHkiLCJzY2FsZSIsInNwZWVkIiwiZmlsbCIsIm9uIiwiYmlnZ2VyIiwiYmlnZ2VyZWQiLCJjbGlja0NvbnRleHQiLCJzZXRDbGlja0NvbnRleHQiLCJjbGlja0FmdGVyQ29udGV4dCIsInNldENsaWNrQWZ0ZXJDb250ZXh0IiwiY2xpY2tSZWYiLCJvbkFuaW0iLCJhY3RpdmUiLCJtZW51RXh0ZW5kZWQiLCJiaWdnZXJFbGVtUGFyZW50SWQiLCJiaWdnZXJFbGVtIiwiYmlnZ2VyRWxlbVJlY3QiLCJiaWdnZXJOZW9uUmVmcyIsImJpZ2dlcmVkRWxlbSIsImJpZ2dlcmVkRWxlbVBhcmVudElkIiwiYmlnZ2VyZWRFbGVtUmVjdCIsImV4dGVuZGluZ1JlcXVlc3RBbmltUmVmIiwid2F2eUFuaW0iLCJUTCIsInBvaW50cyIsImRlbW9SZWYiLCJsb2dvUmVmIiwibW9kZSIsIm1vYmlsZU1vZGUiLCJfbW9iaWxlTW9kZSIsIndpZGVyTW9kZSIsIl93aWRlck1vZGUiLCJtZW51VmFsdWVzIiwiaWQiLCJvcmRlciIsInN0b3BDb2xvciIsInN0cm9rZUNvbG9yIiwiYWxsRWxlbXMiLCJkZW1vVmlkZW9IZWlnaHQiLCJ1c2VSZWR1Y2VyIiwibG9nb0Rpc3BsYXkiLCJsb2dvRGlzcGxheURpc3BhdGNoIiwiY2hhbmdlTW9kZSIsInVzZUNhbGxiYWNrIiwibW9iaWxlIiwid2lkZXIiLCJjdXJyZW50IiwidXNlRWZmZWN0IiwibWFwIiwiZWxlbSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhc3Ryb25hdXQiLCJob21lR3NhcFNldCIsInVwZGF0ZVN2Z0ZyYW1lVmFsdWVzIiwiX3JhZGl1cyIsIl93YXZ5UGF0aCIsIk1hdGgiLCJhYnMiLCJfc3Ryb2tlV2lkdGgiLCJfc3ZnRnJhbWVEZWZhdWx0IiwiVFYiLCJzdmdGcmFtZURlZmF1bHRTaXplMTQwMCIsInN2Z0ZyYW1lRGVmYXVsdFNpemUiLCJzdmdGcmFtZURlZmF1bHRTaXplODAwIiwic3ZnRnJhbWVEZWZhdWx0U2l6ZVNtYWxsZXJTaXplIiwid2lkdGgiLCJoZWlnaHQiLCJmb3JFYWNoIiwiZXZhbCIsInVwZGF0ZVJlc2l6ZSIsInJlbWFpbkV4dGVuZGluZ01lbnUiLCJjcmVhdGVXYXZ5QW5pbWF0aW9uIiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNldEF0dHJpYnV0ZU5TIiwidHJhbnNmb3JtQWxsRWFjaE1lbnVzIiwiX3N2Z0ZyYW1lVmFsdWVzIiwiZXh0ZW5kaW5nU2l6ZSIsImVsZW1QYXJlbnRJZCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiTkYiLCJmIiwiZGlyIiwiYWRkQ1NTbWVudXRyYW5zaXRpb24iLCJMSSIsIm9iaiIsInNpemUiLCJjaGlsZEVsZW1zIiwiZSIsImZpcnN0RWxlbWVudENoaWxkIiwiYW5pbSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwidXBkYXRlIiwic2V0QXR0cmlidXRlIiwidHdlZW5DYXJkaW5hbCIsInBvaW50czEiLCJwb2ludHMyIiwiZGF0YVBvaW50cyIsInBvaW50c1R3ZWVuMSIsInBvaW50c1R3ZWVuMiIsImdzYXAiLCJ0aW1lbGluZSIsIm9uVXBkYXRlIiwicmVzdW1lIiwiZ2V0RGF0YVBvaW50cyIsImkiLCJsZW5ndGgiLCJkdXJhdGlvbiIsInJhbmRvbSIsInR3ZWVuMSIsInRvIiwicmVwZWF0IiwieW95byIsImVhc2UiLCJTaW5lIiwiZWFzZUluT3V0IiwidHdlZW4yIiwiYWRkIiwicGF1c2VkIiwicGF1c2UiLCJleHRlbmRNZW51IiwidGV4dFJlZiIsImNvbnRlbnRSZWYiLCJuZW9uUmVmcyIsInBhcmVudEVsZW1lbnQiLCJjaGVja0NhbGxpbmdBc3Ryb25hdXQiLCJjYWxsQXN0cm9uYXV0IiwiZ2V0RGVtb1ZpZGVvSGVpZ2h0IiwiZ2V0VmFsdWVzVG9VblN5bWV0cnlFYWNoTWVudSIsImFsbCIsImhvbWVHc2FwVHJhbnNpdGlvbiIsInVuU3ltZXRyeURlbW9NZW51IiwibG9nb1dpZHRoIiwidGhlbiIsInN0eWxlIiwiZGlzcGxheSIsInpJbmRleCIsImJpZ2dlcmVkV2F2eVBhdGgiLCJiaWdnZXJlZFRleHQiLCJiaWdnZXJlZENvbnRlbnRSZWYiLCJiaWdnZXJlZE5lb25SZWZzIiwidmlzaWJpbGl0eSIsInBhdXNlQXN0cm9uYXV0IiwiZWxlbUlkIiwic3ltZXRyeURlbW9NZW51Iiwib3BlbkxpZ2h0ZXJWZXJzaW9uIiwicmVtb3ZlU2NlbmUiLCJpbm5lckhUTUwiLCJldmVudCIsImNsYXNzTGlzdCIsInNldFRpbWVvdXQiLCJ1c2VNZW1vIiwiY29sb3IiLCJyZWZzIiwiSG9tZUxheW91dFJlbmRlciIsInByb3BzIiwidmFscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsaUJBQWlCLGdCQUFHQywyREFBYSxFQUF2QztBQUNBLElBQU1DLGtCQUFrQixnQkFBR0QsMkRBQWEsRUFBeEM7QUFDQSxJQUFNRSxlQUFlLGdCQUFHRiwyREFBYSxFQUFyQztBQUNBLElBQU1HLFlBQVksZ0JBQUdILDJEQUFhLEVBQWxDO0FBQ0EsSUFBTUksaUJBQWlCLGdCQUFHSiwyREFBYSxFQUF2Qzs7QUFFUCxJQUFNSyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUM1QztBQUNBLE1BQUlDLFVBQVUsSUFBSUMsU0FBbEIsRUFBNkI7QUFDM0IsUUFBSUQsVUFBVSxHQUFH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ay9wYWdlcy9pbmRleC5iNmYwZGFlNWU5NmUzZDY2ZDE4Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVDb250ZXh0LHVzZUVmZmVjdCx1c2VTdGF0ZSx1c2VSZWR1Y2VyLHVzZUNhbGxiYWNrLHVzZVJlZix1c2VNZW1vfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IERlbW8gZnJvbSBcIi4vRGVtby5qc3hcIjtcclxuaW1wb3J0IE1lbnUgZnJvbSBcIi4vTWVudS5qc3hcIjtcclxuaW1wb3J0IFRWIGZyb20gXCIuLi9wdWJsaWMvYXNzZXRzL2pzL3RyYW5zaXRpb25WYWx1ZVwiO1xyXG5pbXBvcnQgdXNlTWVudVNpemUgZnJvbSBcIi4uL2hvb2tzL3VzZU1lbnVTaXplXCI7XHJcbmltcG9ydCB7IGhvbWVHc2FwU2V0LCBnZXREZW1vVmlkZW9IZWlnaHQsIGhvbWVHc2FwVHJhbnNpdGlvbiwgZ2V0VmFsdWVzVG9VblN5bWV0cnlFYWNoTWVudSwgdHdlZW5DYXJkaW5hbCwgZ2V0RGF0YVBvaW50cywgcmFuZG9tLCBhZGRDU1NtZW51dHJhbnNpdGlvbn0gZnJvbSBcIi4uL3B1YmxpYy9hc3NldHMvanMvdXRpbGl0aWVzLmpzXCI7XHJcbmltcG9ydCBhc3Ryb25hdXQsIHsgY2FsbEFzdHJvbmF1dCwgcGF1c2VBc3Ryb25hdXQsIHJlbW92ZVNjZW5lfSBmcm9tIFwiLi4vcHVibGljL2Fzc2V0cy9qcy9hc3Ryb25hdXQuanNcIjtcclxuaW1wb3J0IHsgZ3NhcCwgU2luZSB9IGZyb20gXCJnc2FwXCI7XHJcblxyXG5leHBvcnQgY29uc3QgRXh0ZW5kTWVudUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcbmV4cG9ydCBjb25zdCBMb2dvRGlzcGxheUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcbmV4cG9ydCBjb25zdCBNZW51U2l6ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcbmV4cG9ydCBjb25zdCBDbGlja0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcbmV4cG9ydCBjb25zdCBDbGlja0FmdGVyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmNvbnN0IGxvZ29EaXNwbGF5UmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgLy8gY29uc29sZS5sb2coJ2xvZ29EaXNwbGF5IHJlZHVjZXIgaXMgd29ya2luZycpXHJcbiAgaWYgKGlubmVyV2lkdGggIT0gdW5kZWZpbmVkKSB7XHJcbiAgICBpZiAoaW5uZXJXaWR0aCA+IDgwMCkge1xyXG4gICAgICBpZiAoaW5uZXJXaWR0aCA+IGlubmVySGVpZ2h0KSB7XHJcbiAgICAgICAgaWYgKGFjdGlvbi5kZW1vQ2xpZW50SGVpZ2h0IC8gMyA8IChhY3Rpb24ubG9nb0NsaWVudFdpZHRoICogNC41KSAvIDYpIHtcclxuICAgICAgICAgIHN0YXRlID0geyBsb2dvX2hlaWdoZXI6IFwibm9uZVwiLCBsb2dvX3dpZGVyOiBcImluaXRpYWxcIiB9O1xyXG4gICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzdGF0ZSA9IHsgbG9nb19oZWlnaGVyOiBcImluaXRpYWxcIiwgbG9nb193aWRlcjogXCJub25lXCIgfTtcclxuICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3RhdGUgPSB7IGxvZ29faGVpZ2hlcjogXCJpbml0aWFsXCIsIGxvZ29fd2lkZXI6IFwibm9uZVwiIH07XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzdGF0ZSA9IHsgbG9nb19oZWlnaGVyOiBcIm5vbmVcIiwgbG9nb193aWRlcjogXCJpbml0aWFsXCIgfTtcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IEhvbWVMYXlvdXQgPSAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coXCItLS1Ib21lTGF5b3V0LS0tXCIpO1xyXG4gIGNvbnN0IFsgd29ya19zZXRMSV9zaXplLCB3b3JrX3NldHN2Z0ZyYW1lUGFja1NpemUsIHdvcmtfc3R5bGVMSSwgd29ya19zdHlsZVN2Z0ZyYW1lUGFjaywgd29ya19jaGFuZ2VIaWVyYXJjaHlTdmdGcmFtZVBhY2tdID0gdXNlTWVudVNpemUoXCJ3b3JrXCIpO1xyXG4gIGNvbnN0IFsgc2tpbGxfc2V0TElfc2l6ZSwgc2tpbGxfc2V0c3ZnRnJhbWVQYWNrU2l6ZSwgc2tpbGxfc3R5bGVMSSwgc2tpbGxfc3R5bGVTdmdGcmFtZVBhY2ssIHNraWxsX2NoYW5nZUhpZXJhcmNoeVN2Z0ZyYW1lUGFja10gPSB1c2VNZW51U2l6ZShcInNraWxsXCIpO1xyXG4gIGNvbnN0IFsgcGFpbnRfc2V0TElfc2l6ZSwgcGFpbnRfc2V0c3ZnRnJhbWVQYWNrU2l6ZSwgcGFpbnRfc3R5bGVMSSwgcGFpbnRfc3R5bGVTdmdGcmFtZVBhY2ssIHBhaW50X2NoYW5nZUhpZXJhcmNoeVN2Z0ZyYW1lUGFja10gPSB1c2VNZW51U2l6ZShcInBhaW50XCIpO1xyXG4gIGNvbnN0IFsgaW5mb19zZXRMSV9zaXplLCBpbmZvX3NldHN2Z0ZyYW1lUGFja1NpemUsIGluZm9fc3R5bGVMSSwgaW5mb19zdHlsZVN2Z0ZyYW1lUGFjaywgaW5mb19jaGFuZ2VIaWVyYXJjaHlTdmdGcmFtZVBhY2tdID0gdXNlTWVudVNpemUoXCJpbmZvXCIpO1xyXG5cclxuICBjb25zdCBsaWdodGVyVmVyc2lvbiA9IHVzZVJlZihmYWxzZSk7XHJcblxyXG4gIGNvbnN0IFtzdmdGcmFtZVZhbHVlcywgc2V0U3ZnRnJhbWVWYWx1ZXNdID0gdXNlU3RhdGUoeyBzdmdGcmFtZURlZmF1bHQ6IHVuZGVmaW5lZCwgcmFkaXVzOiB1bmRlZmluZWQsIHdhdnlQYXRoOiB1bmRlZmluZWQsIGV4dHJhU3BhY2U6IHVuZGVmaW5lZCwgc3Ryb2tlV2lkdGg6IHsgcmVjdDogXCIwcHhcIiwgd2F2eTogXCIwcHhcIiB9fSk7XHJcbiAgY29uc3Qgc3ZnRnJhbWVWYWx1ZXNJbW11dGFibGUgPSB1c2VSZWYoeyB4OiAwLCB5OiAwLCByeDogNSwgcnk6IDUsIG11bHRpcGx5OiAzLCBzY2FsZTogMSwgc3BlZWQ6IFsyLCAzXSwgZmlsbDogXCJub25lXCJ9KTtcclxuXHJcbiAgY29uc3QgW2NsaWNrQ29udGV4dCwgc2V0Q2xpY2tDb250ZXh0XSA9IHVzZVN0YXRlKHsgb246IGZhbHNlLCBiaWdnZXI6IG51bGwsIGJpZ2dlcmVkOiBudWxsfSk7XHJcbiAgY29uc3QgW2NsaWNrQWZ0ZXJDb250ZXh0LCBzZXRDbGlja0FmdGVyQ29udGV4dF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBjbGlja1JlZiA9IHVzZVJlZih7IG9uQW5pbTogZmFsc2UsIGFjdGl2ZTogdHJ1ZSwgbWVudUV4dGVuZGVkOiBmYWxzZSwgYmlnZ2VyRWxlbVBhcmVudElkOiBudWxsLCBiaWdnZXJFbGVtOiBudWxsLCBiaWdnZXJFbGVtUmVjdDogbnVsbCwgYmlnZ2VyTmVvblJlZnM6IFtdLCBiaWdnZXJlZEVsZW06IG51bGwsIGJpZ2dlcmVkRWxlbVBhcmVudElkOiBudWxsLCBiaWdnZXJlZEVsZW1SZWN0OiBudWxsLCB3YXZ5UGF0aDogW119KTtcclxuXHJcbiAgY29uc3QgZXh0ZW5kaW5nUmVxdWVzdEFuaW1SZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3Qgd2F2eUFuaW0gPSB1c2VSZWYoeyBUTDogbnVsbCwgcG9pbnRzOiBudWxsIH0pO1xyXG5cclxuICBjb25zdCBkZW1vUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IGxvZ29SZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGNvbnN0IG1vZGUgPSB1c2VSZWYoeyBtb2JpbGVNb2RlOiBudWxsLCBfbW9iaWxlTW9kZTogbnVsbCwgd2lkZXJNb2RlOiBudWxsLCBfd2lkZXJNb2RlOiBudWxsfSk7XHJcblxyXG5cclxuICAvLyBjb25zdCB3YXZ5QW5pbS5jdXJyZW50LnBvaW50cyB1c2VSZWYoKTtcclxuXHJcbiAgY29uc3QgbWVudVZhbHVlcyA9IHVzZVJlZihbeyBpZDogXCJ3b3JrXCIsIG9yZGVyOiAxLCBzdG9wQ29sb3I6IFtcInJnYigyMjAsIDUxLCAzNSlcIiwgXCJyZ2IoMjEyLCAxMTYsIDQzKVwiXSwgc3Ryb2tlQ29sb3I6IFtcIiNmZjNiMjlcIiwgXCIjZmY4YzM0XCJdfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGlkOiBcInNraWxsXCIsIG9yZGVyOiAyLCBzdG9wQ29sb3I6IFtcInJnYigxNjgsIDYzLCAyMDkpXCIsIFwicmdiKDE5MiwgNDksIDkxKVwiXSwgc3Ryb2tlQ29sb3I6IFtcIiNjZDRkZmZcIiwgXCIjZmY0MTc5XCJdfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGlkOiBcInBhaW50XCIsIG9yZGVyOiAzLCBzdG9wQ29sb3I6IFtcInJnYigyMjUsIDE0OSwgNDYpXCIsIFwicmdiKDQ4LCAxNzEsIDE1MilcIl0sIHN0cm9rZUNvbG9yOiBbXCIjZmZhOTM0XCIsIFwiIzMwYWI5OFwiXX0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBpZDogXCJpbmZvXCIsIG9yZGVyOiA0LCBzdG9wQ29sb3I6IFtcInJnYigyMDAsIDg2LCAxNzcpXCIsIFwicmdiKDc1LCAxNzMsIDIwOSlcIl0sIHN0cm9rZUNvbG9yOiBbXCIjZmY2ZWUyXCIsIFwiIzVjZDNmZlwiXX1dKTtcclxuICBjb25zdCBhbGxFbGVtcyA9IHVzZVJlZigpO1xyXG5cclxuICBsZXQgZGVtb1ZpZGVvSGVpZ2h0O1xyXG5cclxuICBjb25zdCBbbG9nb0Rpc3BsYXksIGxvZ29EaXNwbGF5RGlzcGF0Y2hdID0gdXNlUmVkdWNlcihsb2dvRGlzcGxheVJlZHVjZXIsIHtcclxuICAgIGxvZ29faGVpZ2hlcjogXCJub25lXCIsXHJcbiAgICBsb2dvX3dpZGVyOiBcIm5vbmVcIixcclxuICB9KTtcclxuXHJcbiAgY29uc3QgY2hhbmdlTW9kZT0gdXNlQ2FsbGJhY2soKG1vYmlsZT1udWxsLCB3aWRlcj1udWxsKT0+e1xyXG4gICAgbW9kZS5jdXJyZW50Ll9tb2JpbGVNb2RlID0gaW5uZXJXaWR0aCA8PSA4MDAgPyB0cnVlIDogZmFsc2U7XHJcbiAgICBtb2RlLmN1cnJlbnQuX3dpZGVyTW9kZSA9IGlubmVyV2lkdGggPj0gMTQwMCA/IHRydWUgOiBmYWxzZTtcclxuXHJcbiAgICBpZiAobW9kZS5jdXJyZW50Lm1vYmlsZU1vZGUgIT09IG1vZGUuY3VycmVudC5fbW9iaWxlTW9kZSkge1xyXG4gICAgICBjb25zb2xlLmxvZygnbW9iaWxlTW9kZSBtb2RlIGNoYW5nZWQnLCBtb2RlLmN1cnJlbnQubW9iaWxlTW9kZSlcclxuICAgICAgbW9kZS5jdXJyZW50Lm1vYmlsZU1vZGUgPSAhbW9kZS5jdXJyZW50Lm1vYmlsZU1vZGU7XHJcbiAgICAgIG1vYmlsZTtcclxuICAgIH1cclxuICAgIGlmIChtb2RlLmN1cnJlbnQud2lkZXJNb2RlICE9PSBtb2RlLmN1cnJlbnQuX3dpZGVyTW9kZSkge1xyXG4gICAgICBjb25zb2xlLmxvZygnd2lkZXJNb2RlIG1vZGUgY2hhbmdlZCcsIG1vZGUuY3VycmVudC53aWRlck1vZGUpXHJcbiAgICAgIG1vZGUuY3VycmVudC53aWRlck1vZGUgPSAhbW9kZS5jdXJyZW50LndpZGVyTW9kZTtcclxuICAgICAgd2lkZXI7XHJcbiAgICB9XHJcbiAgfSxbXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIG1vZGUuY3VycmVudC5tb2JpbGVNb2RlID0gaW5uZXJXaWR0aCA8PSA4MDAgPyB0cnVlIDogZmFsc2U7XHJcbiAgICBtb2RlLmN1cnJlbnQud2lkZXJNb2RlID0gaW5uZXJXaWR0aCA+PSAxNDAwID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgbW9kZS5jdXJyZW50Ll9tb2JpbGVNb2RlID0gbW9kZS5jdXJyZW50Lm1vYmlsZU1vZGU7XHJcbiAgICBtb2RlLmN1cnJlbnQuX3dpZGVyTW9kZSA9IG1vZGUuY3VycmVudC53aWRlck1vZGU7XHJcblxyXG4gICAgYWxsRWxlbXMuY3VycmVudCA9IG1lbnVWYWx1ZXMuY3VycmVudC5tYXAoKGVsZW0pID0+IHtcclxuICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW0uaWQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgYXN0cm9uYXV0KCk7XHJcbiAgICBob21lR3NhcFNldChjbGlja1JlZi5jdXJyZW50Lm1lbnVFeHRlbmRlZCwgdHJ1ZSk7XHJcbiAgICB1cGRhdGVTdmdGcmFtZVZhbHVlcygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgdXBkYXRlU3ZnRnJhbWVWYWx1ZXMgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcInVwZGF0ZVN2Z0ZyYW1lVmFsdWVzIGlzIGNhbGxpbmdcIik7XHJcbiAgICBsZXQgX3JhZGl1cyA9IGlubmVyV2lkdGggPiA4MDAgPyAoaW5uZXJXaWR0aCA+IDE0MDAgPyA5IDogNykgOiA1O1xyXG4gICAgbGV0IF93YXZ5UGF0aCA9IE1hdGguYWJzKGlubmVyV2lkdGggLSBpbm5lcldpZHRoKSAqIDAuMDEgKyAyNTtcclxuICAgIGxldCBfc3Ryb2tlV2lkdGggPVxyXG4gICAgICBpbm5lcldpZHRoID4gODAwXHJcbiAgICAgICAgPyBpbm5lcldpZHRoID4gMTQwMFxyXG4gICAgICAgICAgPyB7IHJlY3Q6IFwiMC41cmVtXCIsIHdhdnk6IFwiMC43cmVtXCIgfVxyXG4gICAgICAgICAgOiB7IHJlY3Q6IFwiMC41dndcIiwgd2F2eTogXCIxdndcIiB9XHJcbiAgICAgICAgOiB7IHJlY3Q6IFwiMC4zcmVtXCIsIHdhdnk6IFwiMC41cmVtXCIgfTtcclxuICAgIGxldCBfc3ZnRnJhbWVEZWZhdWx0O1xyXG5cclxuICAgIGlmIChpbm5lcldpZHRoID4gMTQwMCkge1xyXG4gICAgICBfc3ZnRnJhbWVEZWZhdWx0ID0gVFYuc3ZnRnJhbWVEZWZhdWx0U2l6ZTE0MDA7XHJcbiAgICB9IGVsc2UgaWYgKGlubmVyV2lkdGggPiA4MDApIHtcclxuICAgICAgX3N2Z0ZyYW1lRGVmYXVsdCA9IFRWLnN2Z0ZyYW1lRGVmYXVsdFNpemU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoY2xpY2tSZWYuY3VycmVudC5tZW51RXh0ZW5kZWQgPT0gZmFsc2UpIHtcclxuICAgICAgICBfc3ZnRnJhbWVEZWZhdWx0ID0gVFYuc3ZnRnJhbWVEZWZhdWx0U2l6ZTgwMDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBfc3ZnRnJhbWVEZWZhdWx0ID0gVFYuc3ZnRnJhbWVEZWZhdWx0U2l6ZVNtYWxsZXJTaXplO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3ZnRnJhbWVWYWx1ZXMoe1xyXG4gICAgICAuLi5zdmdGcmFtZVZhbHVlcyxcclxuICAgICAgc3ZnRnJhbWVEZWZhdWx0OiB7IHdpZHRoOiBfc3ZnRnJhbWVEZWZhdWx0LCBoZWlnaHQ6IF9zdmdGcmFtZURlZmF1bHQgfSxcclxuICAgICAgcmFkaXVzOiBfcmFkaXVzLFxyXG4gICAgICB3YXZ5UGF0aDogX3dhdnlQYXRoLFxyXG4gICAgICBleHRyYVNwYWNlOiBfcmFkaXVzICogNSxcclxuICAgICAgc3Ryb2tlV2lkdGg6IF9zdHJva2VXaWR0aCxcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzdmdGcmFtZVZhbHVlcy5yYWRpdXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBpZiAoY2xpY2tSZWYuY3VycmVudC5tZW51RXh0ZW5kZWQpIHtcclxuICAgICAgICBtZW51VmFsdWVzLmN1cnJlbnQuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbVBhcmVudElkICE9PSBlbGVtLmlkKSB7XHJcbiAgICAgICAgICAgIGV2YWwoZWxlbS5pZCArIFwiX2NoYW5nZUhpZXJhcmNoeVN2Z0ZyYW1lUGFja1wiKShzdmdGcmFtZVZhbHVlcyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVudVZhbHVlcy5jdXJyZW50LmZvckVhY2goKGVsZW0pID0+IHtcclxuICAgICAgICAgIGV2YWwoZWxlbS5pZCArIFwiX2NoYW5nZUhpZXJhcmNoeVN2Z0ZyYW1lUGFja1wiKShzdmdGcmFtZVZhbHVlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbc3ZnRnJhbWVWYWx1ZXNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCB1cGRhdGVSZXNpemUgPSAoKSA9PiB7XHJcblxyXG5cclxuICAgICAgaG9tZUdzYXBTZXQoIGNsaWNrUmVmLmN1cnJlbnQubWVudUV4dGVuZGVkLCBtb2RlLmN1cnJlbnQubW9iaWxlTW9kZSAhPT0gbW9kZS5jdXJyZW50Ll9tb2JpbGVNb2RlICk7XHJcblxyXG4gICAgICBpZiAoY2xpY2tSZWYuY3VycmVudC5tZW51RXh0ZW5kZWQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlc2l6ZSBpcyB3b3JraW5nXCIpO1xyXG4gICAgICAgIHJlbWFpbkV4dGVuZGluZ01lbnUoKTtcclxuICAgICAgICBjcmVhdGVXYXZ5QW5pbWF0aW9uKHtcclxuICAgICAgICAgIHdpZHRoOiBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW0uY2xpZW50V2lkdGgsXHJcbiAgICAgICAgICBoZWlnaHQ6IGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbS5jbGllbnRIZWlnaHQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgY2hhbmdlTW9kZSh1cGRhdGVTdmdGcmFtZVZhbHVlcygpLHVwZGF0ZVN2Z0ZyYW1lVmFsdWVzKCkpO1xyXG4gICAgICBcclxuICAgIH07XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB1cGRhdGVSZXNpemUpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdXBkYXRlUmVzaXplKTtcclxuICAgIH07XHJcbiAgfSwgW3N2Z0ZyYW1lVmFsdWVzXSk7XHJcblxyXG4gIGNvbnN0IHJlbWFpbkV4dGVuZGluZ01lbnUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAvLyBjb25zdCByZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYmlnZ2VyRWxlbS5jdXJyZW50LnBhcmVudEVsZW1lbnQuaWQrXCJTdmdGcmFtZVwiKTtcclxuXHJcbiAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW1SZWN0LnNldEF0dHJpYnV0ZU5TKFxyXG4gICAgICBudWxsLFxyXG4gICAgICBcIndpZHRoXCIsXHJcbiAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbS5jbGllbnRXaWR0aFxyXG4gICAgKTtcclxuICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbVJlY3Quc2V0QXR0cmlidXRlTlMoXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIFwiaGVpZ2h0XCIsXHJcbiAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbS5jbGllbnRIZWlnaHRcclxuICAgICk7XHJcbiAgfSwgW10pO1xyXG5cclxuICAvLyBmdW5jdGlvbiB0ZXN0KCl7XHJcbiAgLy8gICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcclxuICAvLyAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgLy8gICAgICAgY29uc29sZS5sb2coJ2ZpbmlzaCcpO1xyXG4gIC8vICAgICAgIHJlc29sdmUoKTtcclxuICAvLyAgICAgfSwgMTAwMCk7XHJcbiAgLy8gICB9KVxyXG4gIC8vIH1cclxuICAvLyBmdW5jdGlvbiBkaXNhYmxlQ2xpY2soKXtcclxuICAvLyAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xyXG4gIC8vICAgICBhY3RpdmVDbGljayA9IGZhbHNlO1xyXG4gIC8vICAgICBjb25zb2xlLmxvZyhhY3RpdmVDbGljayk7XHJcbiAgLy8gICAgIHJlc29sdmUoKTtcclxuICAvLyAgIH0pXHJcbiAgLy8gfVxyXG5cclxuICAvLyAtLS0tLSAgIHRoZSByZWFzb24gSSBwdXQgc3ZnRnJhbWVWYWx1ZSBhcyBhbiBhcmd1bWVudCwgbm90IGp1c3QgdXNpbmcgc3ZnRnJhbWVWYWx1ZSBhcyBhIFJlZixcclxuICAvLyAtLS0tLSBpcyBJIGRvbid0IHdhbnQgdG8gcmVyZW5kZXIgYWxsIHRoaXMgZnVuY3Rpb25zIHdoZW5ldmVyIHN2Z0ZyYW1lVmFsdWVzIGNoYW5nZXMuXHJcbiAgY29uc3QgdHJhbnNmb3JtQWxsRWFjaE1lbnVzID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoX3N2Z0ZyYW1lVmFsdWVzLCBleHRlbmRpbmdTaXplLCBlbGVtUGFyZW50SWQpID0+IHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBjb25zdCBORiA9IFRWW1wibWVudUR1cmF0aW9uXCJdICogNjA7XHJcblxyXG4gICAgICAgIGxldCBmID0gMDtcclxuICAgICAgICBsZXQgZGlyID0gMTtcclxuXHJcbiAgICAgICAgYWRkQ1NTbWVudXRyYW5zaXRpb24obnVsbCwgLi4uYWxsRWxlbXMuY3VycmVudCk7XHJcbiAgICAgICAgZXh0ZW5kaW5nU2l6ZS5MSS5mb3JFYWNoKChvYmopID0+IHtcclxuICAgICAgICAgIGV2YWwob2JqW1wiZWxlbUlkXCJdICsgXCJfc2V0TElfc2l6ZVwiKSh7XHJcbiAgICAgICAgICAgIHdpZHRoOiBvYmoud2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogb2JqLmhlaWdodCxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtICE9PSBudWxsKSB7XHJcbiAgICAgICAgICBhZGRDU1NtZW51dHJhbnNpdGlvbihudWxsLCBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW0pO1xyXG4gICAgICAgICAgZXZhbChlbGVtUGFyZW50SWQgKyBcIl9jaGFuZ2VIaWVyYXJjaHlTdmdGcmFtZVBhY2tcIikoXHJcbiAgICAgICAgICAgIF9zdmdGcmFtZVZhbHVlcyxcclxuICAgICAgICAgICAgZXh0ZW5kaW5nU2l6ZVtcInN2Z0ZyYW1lUGFja2FnZVwiXVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjbGlja1JlZi5jdXJyZW50LmJpZ2dlcmVkRWxlbVBhcmVudElkICE9PSBudWxsKSB7XHJcbiAgICAgICAgICBhZGRDU1NtZW51dHJhbnNpdGlvbihudWxsLCBjbGlja1JlZi5jdXJyZW50LmJpZ2dlcmVkRWxlbSk7XHJcbiAgICAgICAgICBldmFsKFxyXG4gICAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlcmVkRWxlbVBhcmVudElkICtcclxuICAgICAgICAgICAgICBcIl9jaGFuZ2VIaWVyYXJjaHlTdmdGcmFtZVBhY2tcIlxyXG4gICAgICAgICAgKShfc3ZnRnJhbWVWYWx1ZXMsIHtcclxuICAgICAgICAgICAgd2lkdGg6IF9zdmdGcmFtZVZhbHVlcy5zdmdGcmFtZURlZmF1bHQud2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogX3N2Z0ZyYW1lVmFsdWVzLnN2Z0ZyYW1lRGVmYXVsdC5oZWlnaHQsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpbm5lcldpZHRoIDwgODAwKSB7XHJcbiAgICAgICAgICBjb25zdCBzaXplID1cclxuICAgICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtICE9PSBudWxsXHJcbiAgICAgICAgICAgICAgPyBUVi5zdmdGcmFtZURlZmF1bHRTaXplU21hbGxlclNpemVcclxuICAgICAgICAgICAgICA6IF9zdmdGcmFtZVZhbHVlc1tcInN2Z0ZyYW1lRGVmYXVsdFwiXTtcclxuICAgICAgICAgIGNvbnN0IGNoaWxkRWxlbXMgPSBhbGxFbGVtcy5jdXJyZW50Lm1hcCgoZSkgPT4gZS5maXJzdEVsZW1lbnRDaGlsZCk7XHJcblxyXG4gICAgICAgICAgYWRkQ1NTbWVudXRyYW5zaXRpb24oZWxlbVBhcmVudElkLCAuLi5jaGlsZEVsZW1zKTtcclxuXHJcbiAgICAgICAgICBtZW51VmFsdWVzLmN1cnJlbnQuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtUGFyZW50SWQgIT09IGVsZW0uaWQpIHtcclxuICAgICAgICAgICAgICBjb25zdCByZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbS5pZCArIFwiU3ZnRnJhbWVcIik7XHJcblxyXG4gICAgICAgICAgICAgIGV2YWwoZWxlbS5pZCArIFwiX2NoYW5nZUhpZXJhcmNoeVN2Z0ZyYW1lUGFja1wiKShfc3ZnRnJhbWVWYWx1ZXMsIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBzaXplLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBzaXplLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICByZWN0LnNldEF0dHJpYnV0ZU5TKG51bGwsIFwid2lkdGhcIiwgc2l6ZSk7XHJcbiAgICAgICAgICAgICAgcmVjdC5zZXRBdHRyaWJ1dGVOUyhudWxsLCBcImhlaWdodFwiLCBzaXplKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBhbmltKCkge1xyXG4gICAgICAgICAgZiArPSBkaXI7XHJcbiAgICAgICAgICBpZiAoY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbVJlY3Quc2V0QXR0cmlidXRlTlMoXHJcbiAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICBcIndpZHRoXCIsXHJcbiAgICAgICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtLmNsaWVudFdpZHRoXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbVJlY3Quc2V0QXR0cmlidXRlTlMoXHJcbiAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICBcImhlaWdodFwiLFxyXG4gICAgICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbS5jbGllbnRIZWlnaHRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAoY2xpY2tSZWYuY3VycmVudC5iaWdnZXJlZEVsZW1QYXJlbnRJZCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlcmVkRWxlbVJlY3Quc2V0QXR0cmlidXRlTlMoXHJcbiAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICBcIndpZHRoXCIsXHJcbiAgICAgICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJlZEVsZW0uY2xpZW50V2lkdGhcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJlZEVsZW1SZWN0LnNldEF0dHJpYnV0ZU5TKFxyXG4gICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgXCJ3aWR0aFwiLFxyXG4gICAgICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyZWRFbGVtLmNsaWVudFdpZHRoXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBleHRlbmRpbmdSZXF1ZXN0QW5pbVJlZi5jdXJyZW50ID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW0pO1xyXG5cclxuICAgICAgICAgIGlmICghKGYgJSBORikpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCI9PT09PT09ZmluaXNoZWQ9PT09PT09XCIpO1xyXG4gICAgICAgICAgICAvLyBvbkFuaW0gPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbSAhPT0gbnVsbClcclxuICAgICAgICAgICAgICBldmFsKGVsZW1QYXJlbnRJZCArIFwiX2NoYW5nZUhpZXJhcmNoeVN2Z0ZyYW1lUGFja1wiKShcclxuICAgICAgICAgICAgICAgIF9zdmdGcmFtZVZhbHVlcyxcclxuICAgICAgICAgICAgICAgIHsgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH1cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgZXZhbChlbGVtUGFyZW50SWQgKyBcIl9jaGFuZ2VIaWVyYXJjaHlTdmdGcmFtZVBhY2tcIikoXHJcbiAgICAgICAgICAgICAgICBfc3ZnRnJhbWVWYWx1ZXMsXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBfc3ZnRnJhbWVWYWx1ZXNbXCJzdmdGcmFtZURlZmF1bHRcIl0sXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogX3N2Z0ZyYW1lVmFsdWVzW1wic3ZnRnJhbWVEZWZhdWx0XCJdLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShleHRlbmRpbmdSZXF1ZXN0QW5pbVJlZi5jdXJyZW50KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXNvbHZlP1wiKTtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBhbmltKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFtdXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgY3JlYXRlV2F2eUFuaW1hdGlvbiA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKGV4dGVuZGluZ1NpemUpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJjcmVhdGVXYXZ5QW5pbWF0aW9uIGlzIHdvcmtpbmdcIik7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gODAwKSB7XHJcbiAgICAgICAgICBsZXQgZGF0YVBvaW50cywgcG9pbnRzVHdlZW4xLCBwb2ludHNUd2VlbjI7XHJcblxyXG4gICAgICAgICAgaWYgKHN2Z0ZyYW1lVmFsdWVzLndhdnlQYXRoID4gZXh0ZW5kaW5nU2l6ZVtcIndpZHRoXCJdIC8gMikge1xyXG4gICAgICAgICAgICByZXR1cm4gc2V0U3ZnRnJhbWVWYWx1ZXMoe1xyXG4gICAgICAgICAgICAgIC4uLnN2Z0ZyYW1lVmFsdWVzLFxyXG4gICAgICAgICAgICAgIHdhdnlQYXRoOiBleHRlbmRpbmdTaXplW1wid2lkdGhcIl0gLyAyLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAod2F2eUFuaW0uY3VycmVudC5UTCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICB3YXZ5QW5pbS5jdXJyZW50LlRMID0gZ3NhcC50aW1lbGluZSh7XHJcbiAgICAgICAgICAgICAgb25VcGRhdGU6IHVwZGF0ZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB3YXZ5QW5pbS5jdXJyZW50LlRMLnJlc3VtZSgpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGRhdGFQb2ludHMgPSBnZXREYXRhUG9pbnRzKFxyXG4gICAgICAgICAgICBleHRlbmRpbmdTaXplLFxyXG4gICAgICAgICAgICBzdmdGcmFtZVZhbHVlcyxcclxuICAgICAgICAgICAgc3ZnRnJhbWVWYWx1ZXNJbW11dGFibGUuY3VycmVudFxyXG4gICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICB3YXZ5QW5pbS5jdXJyZW50LnBvaW50cyA9IHtcclxuICAgICAgICAgICAgcG9pbnRzMTogZGF0YVBvaW50cy5wb2ludHMxLFxyXG4gICAgICAgICAgICBwb2ludHMyOiBkYXRhUG9pbnRzLnBvaW50czIsXHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIHBvaW50c1R3ZWVuMSA9IGRhdGFQb2ludHMucG9pbnRzVHdlZW4xO1xyXG4gICAgICAgICAgcG9pbnRzVHdlZW4yID0gZGF0YVBvaW50cy5wb2ludHNUd2VlbjI7XHJcblxyXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3YXZ5QW5pbS5jdXJyZW50LnBvaW50cy5wb2ludHMxLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBkdXJhdGlvbiA9IHJhbmRvbShcclxuICAgICAgICAgICAgICBzdmdGcmFtZVZhbHVlc0ltbXV0YWJsZS5jdXJyZW50W1wic3BlZWRcIl1bMF0sXHJcbiAgICAgICAgICAgICAgc3ZnRnJhbWVWYWx1ZXNJbW11dGFibGUuY3VycmVudFtcInNwZWVkXCJdWzFdXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBsZXQgdHdlZW4xID0gZ3NhcC50byh3YXZ5QW5pbS5jdXJyZW50LnBvaW50cy5wb2ludHMxW2ldLCB7XHJcbiAgICAgICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxyXG4gICAgICAgICAgICAgIHg6IHBvaW50c1R3ZWVuMVtpXS54LFxyXG4gICAgICAgICAgICAgIHk6IHBvaW50c1R3ZWVuMVtpXS55LFxyXG4gICAgICAgICAgICAgIHJlcGVhdDogLTEsXHJcbiAgICAgICAgICAgICAgeW95bzogdHJ1ZSxcclxuICAgICAgICAgICAgICBlYXNlOiBTaW5lLmVhc2VJbk91dCxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgdHdlZW4yID0gZ3NhcC50byh3YXZ5QW5pbS5jdXJyZW50LnBvaW50cy5wb2ludHMyW2ldLCB7XHJcbiAgICAgICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxyXG4gICAgICAgICAgICAgIHg6IHBvaW50c1R3ZWVuMltpXS54LFxyXG4gICAgICAgICAgICAgIHk6IHBvaW50c1R3ZWVuMltpXS55LFxyXG4gICAgICAgICAgICAgIHJlcGVhdDogLTEsXHJcbiAgICAgICAgICAgICAgeW95bzogdHJ1ZSxcclxuICAgICAgICAgICAgICBlYXNlOiBTaW5lLmVhc2VJbk91dCxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB3YXZ5QW5pbS5jdXJyZW50LlRMLmFkZCh0d2VlbjEsIC1yYW5kb20oZHVyYXRpb24pKTtcclxuICAgICAgICAgICAgd2F2eUFuaW0uY3VycmVudC5UTC5hZGQodHdlZW4yLCAtcmFuZG9tKGR1cmF0aW9uKSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgZnVuY3Rpb24gdXBkYXRlKCkge1xyXG4gICAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LndhdnlQYXRoWzBdLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgICBcImRcIixcclxuICAgICAgICAgICAgICB0d2VlbkNhcmRpbmFsKHdhdnlBbmltLmN1cnJlbnQucG9pbnRzLnBvaW50czEsIHRydWUsIDEpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQud2F2eVBhdGhbMV0uc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgICAgIFwiZFwiLFxyXG4gICAgICAgICAgICAgIHR3ZWVuQ2FyZGluYWwod2F2eUFuaW0uY3VycmVudC5wb2ludHMucG9pbnRzMiwgdHJ1ZSwgMSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICByZXR1cm4gd2F2eUFuaW0uY3VycmVudC5UTDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKHdhdnlBbmltLmN1cnJlbnQuVEwgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKCF3YXZ5QW5pbS5jdXJyZW50LlRMLnBhdXNlZCgpKSB7XHJcbiAgICAgICAgICAgICAgd2F2eUFuaW0uY3VycmVudC5UTCA9IHdhdnlBbmltLmN1cnJlbnQuVEwucGF1c2UoKTtcclxuICAgICAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LndhdnlQYXRoWzBdLnNldEF0dHJpYnV0ZShcImRcIiwgXCJcIik7XHJcbiAgICAgICAgICAgICAgY2xpY2tSZWYuY3VycmVudC53YXZ5UGF0aFsxXS5zZXRBdHRyaWJ1dGUoXCJkXCIsIFwiXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgW3N2Z0ZyYW1lVmFsdWVzXVxyXG4gICk7XHJcblxyXG4gIC8vIHVzZUVmZmVjdCgoKT0+e3NldENsaWNrQWZ0ZXJDb250ZXh0KCdza2lsbCcpO30sW10pXHJcblxyXG4gIGNvbnN0IGV4dGVuZE1lbnUgPSB1c2VDYWxsYmFjayhcclxuICAgIChlbGVtLCBvcmRlciA9IDAsIHRleHRSZWYsIGNvbnRlbnRSZWYsIG5lb25SZWZzKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZWxlbVwiLCBlbGVtKTtcclxuICAgICAgY29uc3QgZWxlbVBhcmVudElkID0gZWxlbS5wYXJlbnRFbGVtZW50LmlkO1xyXG5cclxuICAgICAgaWYgKGNsaWNrUmVmLmN1cnJlbnQub25BbmltID09PSB0cnVlKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChjbGlja1JlZi5jdXJyZW50Lm1lbnVFeHRlbmRlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQub25BbmltID0gdHJ1ZTtcclxuICAgICAgICAgIHNldENsaWNrQ29udGV4dCh7IG9uOiB0cnVlLCBiaWdnZXI6IGVsZW1QYXJlbnRJZCwgYmlnZ2VyZWQ6IG51bGwgfSk7XHJcbiAgICAgICAgICBjbGlja1JlZi5jdXJyZW50Lm1lbnVFeHRlbmRlZCA9IHRydWU7XHJcbiAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW1QYXJlbnRJZCA9IGVsZW1QYXJlbnRJZDtcclxuICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbSA9IGVsZW07XHJcbiAgICAgICAgICAoY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtUmVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICAgICAgICBlbGVtUGFyZW50SWQgKyBcIlN2Z0ZyYW1lXCJcclxuICAgICAgICAgICkpLFxyXG4gICAgICAgICAgICAoY2xpY2tSZWYuY3VycmVudC53YXZ5UGF0aCA9IFtcclxuICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtUGFyZW50SWQgKyBcIlN2Z1dhdnkxXCIpLFxyXG4gICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1QYXJlbnRJZCArIFwiU3ZnV2F2eTJcIiksXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgY2xpY2tSZWYuY3VycmVudC50ZXh0UmVmID0gdGV4dFJlZjtcclxuICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuY29udGVudFJlZiA9IGNvbnRlbnRSZWY7XHJcbiAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlck5lb25SZWZzID0gbmVvblJlZnM7XHJcblxyXG4gICAgICAgICAgZGVtb1ZpZGVvSGVpZ2h0ID0gZ2V0RGVtb1ZpZGVvSGVpZ2h0KGNsaWNrUmVmLmN1cnJlbnQubWVudUV4dGVuZGVkKTtcclxuICAgICAgICAgIGxldCBleHRlbmRpbmdTaXplID0gZ2V0VmFsdWVzVG9VblN5bWV0cnlFYWNoTWVudShcclxuICAgICAgICAgICAgZGVtb1ZpZGVvSGVpZ2h0LFxyXG4gICAgICAgICAgICBlbGVtLFxyXG4gICAgICAgICAgICBvcmRlclxyXG4gICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICBmdW5jdGlvbiBjaGVja0NhbGxpbmdBc3Ryb25hdXQoKSB7XHJcbiAgICAgICAgICAgIGlmICghbGlnaHRlclZlcnNpb24uY3VycmVudCkgY2FsbEFzdHJvbmF1dChlbGVtUGFyZW50SWQpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIFByb21pc2UuYWxsKFtcclxuICAgICAgICAgICAgaG9tZUdzYXBUcmFuc2l0aW9uKGNsaWNrUmVmLmN1cnJlbnQubWVudUV4dGVuZGVkKSxcclxuICAgICAgICAgICAgbG9nb0Rpc3BsYXlEaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgZGVtb0NsaWVudEhlaWdodDogZGVtb1JlZi5jdXJyZW50LmNsaWVudEhlaWdodCxcclxuICAgICAgICAgICAgICBsb2dvQ2xpZW50V2lkdGg6XHJcbiAgICAgICAgICAgICAgICAoKChpbm5lcldpZHRoICogKDEwMCAtIFRWLnVuU3ltZXRyeURlbW9NZW51KSkgLyAxMDApICpcclxuICAgICAgICAgICAgICAgICAgVFYubG9nb1dpZHRoKSAvXHJcbiAgICAgICAgICAgICAgICAxMDAsXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW1SZWN0LnNldEF0dHJpYnV0ZU5TKFxyXG4gICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgXCJzdHJva2VcIixcclxuICAgICAgICAgICAgICBcInVybCgjU3ZnSXZvcnkpXCJcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgdHJhbnNmb3JtQWxsRWFjaE1lbnVzKHN2Z0ZyYW1lVmFsdWVzLCBleHRlbmRpbmdTaXplLCBlbGVtUGFyZW50SWQpLFxyXG4gICAgICAgICAgICBjaGVja0NhbGxpbmdBc3Ryb25hdXQoKSxcclxuICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICBjcmVhdGVXYXZ5QW5pbWF0aW9uKGV4dGVuZGluZ1NpemVbXCJzdmdGcmFtZVBhY2thZ2VcIl0pO1xyXG4gICAgICAgICAgICAgIHRleHRSZWYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgIGNvbnRlbnRSZWYuc3R5bGUuZGlzcGxheSA9IFwiaW5pdGlhbFwiO1xyXG4gICAgICAgICAgICAgIGNvbnRlbnRSZWYuc3R5bGUuekluZGV4ID0gMztcclxuICAgICAgICAgICAgICBzZXRDbGlja0FmdGVyQ29udGV4dChlbGVtUGFyZW50SWQpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5vbkFuaW0gPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW1QYXJlbnRJZCAhPT0gZWxlbVBhcmVudElkKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImVsc2UgaWZcIik7XHJcbiAgICAgICAgICBjb25zdCBiaWdnZXJlZFdhdnlQYXRoID0gY2xpY2tSZWYuY3VycmVudC53YXZ5UGF0aDtcclxuICAgICAgICAgIGNvbnN0IGJpZ2dlcmVkVGV4dCA9IGNsaWNrUmVmLmN1cnJlbnQudGV4dFJlZjtcclxuICAgICAgICAgIGNvbnN0IGJpZ2dlcmVkQ29udGVudFJlZiA9IGNsaWNrUmVmLmN1cnJlbnQuY29udGVudFJlZjtcclxuICAgICAgICAgIGNvbnN0IGJpZ2dlcmVkTmVvblJlZnMgPSBjbGlja1JlZi5jdXJyZW50LmJpZ2dlck5lb25SZWZzO1xyXG5cclxuICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQub25BbmltID0gdHJ1ZTtcclxuICAgICAgICAgIHNldENsaWNrQ29udGV4dCh7XHJcbiAgICAgICAgICAgIG9uOiB0cnVlLFxyXG4gICAgICAgICAgICBiaWdnZXI6IGVsZW1QYXJlbnRJZCxcclxuICAgICAgICAgICAgYmlnZ2VyZWQ6IGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbVBhcmVudElkLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlcmVkRWxlbSA9IGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbTtcclxuICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyZWRFbGVtUGFyZW50SWQgPVxyXG4gICAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW1QYXJlbnRJZDtcclxuICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyZWRFbGVtUmVjdCA9IGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbVJlY3Q7XHJcbiAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW0gPSBlbGVtO1xyXG4gICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtUGFyZW50SWQgPSBlbGVtUGFyZW50SWQ7XHJcbiAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW0gPSBlbGVtO1xyXG4gICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtUmVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICAgICAgICBlbGVtUGFyZW50SWQgKyBcIlN2Z0ZyYW1lXCJcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LndhdnlQYXRoID0gW1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtUGFyZW50SWQgKyBcIlN2Z1dhdnkxXCIpLFxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtUGFyZW50SWQgKyBcIlN2Z1dhdnkyXCIpLFxyXG4gICAgICAgICAgXTtcclxuICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQudGV4dFJlZiA9IHRleHRSZWY7XHJcbiAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmNvbnRlbnRSZWYgPSBjb250ZW50UmVmO1xyXG4gICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJOZW9uUmVmcyA9IG5lb25SZWZzO1xyXG5cclxuICAgICAgICAgIGRlbW9WaWRlb0hlaWdodCA9IGdldERlbW9WaWRlb0hlaWdodChjbGlja1JlZi5jdXJyZW50Lm1lbnVFeHRlbmRlZCk7XHJcbiAgICAgICAgICBsZXQgZXh0ZW5kaW5nU2l6ZSA9IGdldFZhbHVlc1RvVW5TeW1ldHJ5RWFjaE1lbnUoXHJcbiAgICAgICAgICAgIGRlbW9WaWRlb0hlaWdodCxcclxuICAgICAgICAgICAgZWxlbSxcclxuICAgICAgICAgICAgb3JkZXJcclxuICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgaWYgKGlubmVyV2lkdGggPiA4MDApIHdhdnlBbmltLmN1cnJlbnQuVEwucGF1c2UoMCk7XHJcblxyXG4gICAgICAgICAgZnVuY3Rpb24gY2hlY2tDYWxsaW5nQXN0cm9uYXV0KCkge1xyXG4gICAgICAgICAgICBpZiAoIWxpZ2h0ZXJWZXJzaW9uLmN1cnJlbnQpXHJcbiAgICAgICAgICAgICAgY2FsbEFzdHJvbmF1dChcclxuICAgICAgICAgICAgICAgIGVsZW1QYXJlbnRJZCxcclxuICAgICAgICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyZWRFbGVtUGFyZW50SWRcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIFByb21pc2UuYWxsKFtcclxuICAgICAgICAgICAgYmlnZ2VyZWRXYXZ5UGF0aFswXS5zZXRBdHRyaWJ1dGUoXCJkXCIsIFwiXCIpLFxyXG4gICAgICAgICAgICBiaWdnZXJlZFdhdnlQYXRoWzFdLnNldEF0dHJpYnV0ZShcImRcIiwgXCJcIiksXHJcbiAgICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyZWRFbGVtUmVjdC5zZXRBdHRyaWJ1dGVOUyhcclxuICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgIFwic3Ryb2tlXCIsXHJcbiAgICAgICAgICAgICAgYHVybCgjJHtjbGlja1JlZi5jdXJyZW50LmJpZ2dlcmVkRWxlbVBhcmVudElkfVN2Z0ZyYW1lU3RvcENvbG9yKWBcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtUmVjdC5zZXRBdHRyaWJ1dGVOUyhcclxuICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgIFwic3Ryb2tlXCIsXHJcbiAgICAgICAgICAgICAgXCJ1cmwoI1N2Z0l2b3J5KVwiXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybUFsbEVhY2hNZW51cyhzdmdGcmFtZVZhbHVlcywgZXh0ZW5kaW5nU2l6ZSwgZWxlbVBhcmVudElkKSxcclxuICAgICAgICAgICAgKGJpZ2dlcmVkVGV4dC5zdHlsZS5kaXNwbGF5ID0gXCJpbml0aWFsXCIpLFxyXG4gICAgICAgICAgICAoYmlnZ2VyZWRDb250ZW50UmVmLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIiksXHJcbiAgICAgICAgICAgIChiaWdnZXJlZENvbnRlbnRSZWYuc3R5bGUuekluZGV4ID0gLTEpLFxyXG4gICAgICAgICAgICAoYmlnZ2VyZWROZW9uUmVmc1swXS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIiksXHJcbiAgICAgICAgICAgIChiaWdnZXJlZE5lb25SZWZzWzFdLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiKSxcclxuICAgICAgICAgICAgY2hlY2tDYWxsaW5nQXN0cm9uYXV0KCksXHJcbiAgICAgICAgICBdKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgY3JlYXRlV2F2eUFuaW1hdGlvbihleHRlbmRpbmdTaXplW1wic3ZnRnJhbWVQYWNrYWdlXCJdKTtcclxuICAgICAgICAgICAgICB0ZXh0UmVmLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICBjb250ZW50UmVmLnN0eWxlLmRpc3BsYXkgPSBcImluaXRpYWxcIjtcclxuICAgICAgICAgICAgICBjb250ZW50UmVmLnN0eWxlLnpJbmRleCA9IDM7XHJcbiAgICAgICAgICAgICAgYmlnZ2VyZWROZW9uUmVmc1swXS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbiAgICAgICAgICAgICAgYmlnZ2VyZWROZW9uUmVmc1sxXS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbiAgICAgICAgICAgICAgc2V0Q2xpY2tBZnRlckNvbnRleHQoZWxlbVBhcmVudElkKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQub25BbmltID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImVsc2VcIik7XHJcbiAgICAgICAgICBjb25zdCBiaWdnZXJlZFdhdnlQYXRoID0gY2xpY2tSZWYuY3VycmVudC53YXZ5UGF0aDtcclxuICAgICAgICAgIGNvbnN0IGJpZ2dlcmVkVGV4dCA9IGNsaWNrUmVmLmN1cnJlbnQudGV4dFJlZjtcclxuICAgICAgICAgIGNvbnN0IGJpZ2dlcmVkQ29udGVudFJlZiA9IGNsaWNrUmVmLmN1cnJlbnQuY29udGVudFJlZjtcclxuICAgICAgICAgIGNvbnN0IGJpZ2dlcmVkTmVvblJlZnMgPSBjbGlja1JlZi5jdXJyZW50LmJpZ2dlck5lb25SZWZzO1xyXG5cclxuICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQub25BbmltID0gdHJ1ZTtcclxuICAgICAgICAgIHNldENsaWNrQ29udGV4dCh7IG9uOiBmYWxzZSwgYmlnZ2VyOiBudWxsLCBiaWdnZXJlZDogbnVsbCB9KTtcclxuICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyZWRFbGVtID0gY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtO1xyXG4gICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJlZEVsZW1QYXJlbnRJZCA9XHJcbiAgICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbVBhcmVudElkO1xyXG4gICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJlZEVsZW1SZWN0ID0gY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtUmVjdDtcclxuICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbSA9IG51bGw7XHJcbiAgICAgICAgICBjbGlja1JlZi5jdXJyZW50Lm1lbnVFeHRlbmRlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgIGxldCBleHRlbmRpbmdTaXplID0ge1xyXG4gICAgICAgICAgICBMSTogW1xyXG4gICAgICAgICAgICAgIHsgZWxlbUlkOiBcIndvcmtcIiwgd2lkdGg6IFwiNTAlXCIsIGhlaWdodDogXCI1MCVcIiB9LFxyXG4gICAgICAgICAgICAgIHsgZWxlbUlkOiBcInNraWxsXCIsIHdpZHRoOiBcIjUwJVwiLCBoZWlnaHQ6IFwiNTAlXCIgfSxcclxuICAgICAgICAgICAgICB7IGVsZW1JZDogXCJwYWludFwiLCB3aWR0aDogXCI1MCVcIiwgaGVpZ2h0OiBcIjUwJVwiIH0sXHJcbiAgICAgICAgICAgICAgeyBlbGVtSWQ6IFwiaW5mb1wiLCB3aWR0aDogXCI1MCVcIiwgaGVpZ2h0OiBcIjUwJVwiIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIGlmIChpbm5lcldpZHRoID4gODAwKSB3YXZ5QW5pbS5jdXJyZW50LlRMLnBhdXNlKDApO1xyXG4gICAgICAgICAgZnVuY3Rpb24gY2hlY2tDYWxsaW5nQXN0cm9uYXV0KCkge1xyXG4gICAgICAgICAgICBpZiAoIWxpZ2h0ZXJWZXJzaW9uLmN1cnJlbnQpIHBhdXNlQXN0cm9uYXV0KCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgICAgICBob21lR3NhcFRyYW5zaXRpb24oY2xpY2tSZWYuY3VycmVudC5tZW51RXh0ZW5kZWQpLFxyXG4gICAgICAgICAgICBsb2dvRGlzcGxheURpc3BhdGNoKHtcclxuICAgICAgICAgICAgICBkZW1vQ2xpZW50SGVpZ2h0OiBkZW1vUmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0LFxyXG4gICAgICAgICAgICAgIGxvZ29DbGllbnRXaWR0aDpcclxuICAgICAgICAgICAgICAgICgoKGlubmVyV2lkdGggKiAoMTAwIC0gVFYuc3ltZXRyeURlbW9NZW51KSkgLyAxMDApICpcclxuICAgICAgICAgICAgICAgICAgVFYubG9nb1dpZHRoKSAvXHJcbiAgICAgICAgICAgICAgICAxMDAsXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBiaWdnZXJlZFdhdnlQYXRoWzBdLnNldEF0dHJpYnV0ZShcImRcIiwgXCJcIiksXHJcbiAgICAgICAgICAgIGJpZ2dlcmVkV2F2eVBhdGhbMV0uc2V0QXR0cmlidXRlKFwiZFwiLCBcIlwiKSxcclxuICAgICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJlZEVsZW1SZWN0LnNldEF0dHJpYnV0ZU5TKFxyXG4gICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgXCJzdHJva2VcIixcclxuICAgICAgICAgICAgICBgdXJsKCMke2NsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyZWRFbGVtUGFyZW50SWR9U3ZnRnJhbWVTdG9wQ29sb3IpYFxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICB0cmFuc2Zvcm1BbGxFYWNoTWVudXMoc3ZnRnJhbWVWYWx1ZXMsIGV4dGVuZGluZ1NpemUsIGVsZW1QYXJlbnRJZCksXHJcbiAgICAgICAgICAgIChiaWdnZXJlZFRleHQuc3R5bGUuZGlzcGxheSA9IFwiaW5pdGlhbFwiKSxcclxuICAgICAgICAgICAgKGJpZ2dlcmVkQ29udGVudFJlZi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIpLFxyXG4gICAgICAgICAgICAoYmlnZ2VyZWRDb250ZW50UmVmLnN0eWxlLnpJbmRleCA9IC0xKSxcclxuICAgICAgICAgICAgKGJpZ2dlcmVkTmVvblJlZnNbMF0uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCIpLFxyXG4gICAgICAgICAgICAoYmlnZ2VyZWROZW9uUmVmc1sxXS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIiksXHJcbiAgICAgICAgICAgIGNoZWNrQ2FsbGluZ0FzdHJvbmF1dCgpLFxyXG4gICAgICAgICAgICBzZXRDbGlja0FmdGVyQ29udGV4dChudWxsKSxcclxuICAgICAgICAgIF0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBuZW9uUmVmc1swXS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbiAgICAgICAgICAgIG5lb25SZWZzWzFdLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuICAgICAgICAgICAgY2xpY2tSZWYuY3VycmVudCA9IHtcclxuICAgICAgICAgICAgICBvbkFuaW06IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGFjdGl2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBtZW51RXh0ZW5kZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGJpZ2dlckVsZW1QYXJlbnRJZDogbnVsbCxcclxuICAgICAgICAgICAgICBiaWdnZXJFbGVtOiBudWxsLFxyXG4gICAgICAgICAgICAgIGJpZ2dlckVsZW1SZWN0OiBudWxsLFxyXG4gICAgICAgICAgICAgIGJpZ2dlck5lb25SZWZzOiBbXSxcclxuICAgICAgICAgICAgICBiaWdnZXJlZEVsZW06IG51bGwsXHJcbiAgICAgICAgICAgICAgYmlnZ2VyZWRFbGVtUGFyZW50SWQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgYmlnZ2VyZWRFbGVtUmVjdDogbnVsbCxcclxuICAgICAgICAgICAgICB3YXZ5UGF0aDogW10sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBbc3ZnRnJhbWVWYWx1ZXNdXHJcbiAgKTtcclxuXHJcbiAgLy89PT09PT09PT09PT09PT09PWxvYWRlcj09PT09PT09PT09PT09PT09PT09PS8vXHJcblxyXG4gIGNvbnN0IG9wZW5MaWdodGVyVmVyc2lvbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGxpZ2h0ZXJWZXJzaW9uLmN1cnJlbnQgPSB0cnVlO1xyXG4gICAgcmVtb3ZlU2NlbmUoKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlnaHRlclZlcnNpb25cIikuaW5uZXJIVE1MID1cclxuICAgICAgXCJUaGlzIGlzIGxpZ2h0ZXIgdmVyc2lvblwiO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJ3b3JraW5nP1wiKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2FkZXJBbmltXCIpLmNsYXNzTGlzdC5hZGQoXCJsb2FkZXJGYWRlT3V0VHJhbnNcIik7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9hZGVyQ29udGFpbmVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgfSwgMTIwMCk7XHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vPT09PT09PT09PT09PT09PT1sb2FkZXI9PT09PT09PT09PT09PT09PT09PT0vL1xyXG5cclxuICByZXR1cm4gdXNlTWVtbygoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGlkPVwibWFzdGVyXCIgc3R5bGU9e3tjb2xvcjpcIndoaXRlXCJ9fT5cclxuICAgICAgICA8ZGl2IGlkPVwibG9hZGVyQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwibG9hZGVyQW5pbVwiPkxvYWQmbmJzcDsmbmJzcDtuZzwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBpZD1cImxpZ2h0ZXJWZXJzaW9uXCIgb25DbGljaz17b3BlbkxpZ2h0ZXJWZXJzaW9ufT5cclxuICAgICAgICAgICAgQ2xpY2sgdG8gdGhlIGxpZ2h0ZXIgdmVyc2lvbiA8YnIgLz4gd2hpY2ggZG9lc24ndCBjb250YWluIFRIUkVFIEpTXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8RXh0ZW5kTWVudUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2V4dGVuZE1lbnV9PlxyXG4gICAgICAgICAgPExvZ29EaXNwbGF5Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBsb2dvRGlzcGxheSwgbG9nb0Rpc3BsYXlEaXNwYXRjaCB9fSA+XHJcbiAgICAgICAgICAgIDxNZW51U2l6ZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgd29ya19zdHlsZUxJLCBza2lsbF9zdHlsZUxJLCBwYWludF9zdHlsZUxJLCBpbmZvX3N0eWxlTEksIHdvcmtfc3R5bGVTdmdGcmFtZVBhY2ssIHNraWxsX3N0eWxlU3ZnRnJhbWVQYWNrLCBwYWludF9zdHlsZVN2Z0ZyYW1lUGFjaywgaW5mb19zdHlsZVN2Z0ZyYW1lUGFja319PlxyXG4gICAgICAgICAgICAgIDxDbGlja0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NsaWNrQ29udGV4dH0+XHJcbiAgICAgICAgICAgICAgICA8Q2xpY2tBZnRlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NsaWNrQWZ0ZXJDb250ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgPEhvbWVMYXlvdXRSZW5kZXIgdmFscz17eyByZWZzOiB7IGRlbW9SZWYsIGxvZ29SZWYgfSwgbWVudVZhbHVlczogbWVudVZhbHVlcy5jdXJyZW50LCBzdmdGcmFtZVZhbHVlc0ltbXV0YWJsZTogc3ZnRnJhbWVWYWx1ZXNJbW11dGFibGUuY3VycmVudCwgY2xpY2tDb250ZXh0OiBjbGlja0NvbnRleHR9fS8+XHJcbiAgICAgICAgICAgICAgICA8L0NsaWNrQWZ0ZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgIDwvQ2xpY2tDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgICAgICA8L01lbnVTaXplQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgICAgIDwvTG9nb0Rpc3BsYXlDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgIDwvRXh0ZW5kTWVudUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9LCBbIGxvZ29EaXNwbGF5LCB3b3JrX3N0eWxlTEksIHdvcmtfc3R5bGVTdmdGcmFtZVBhY2ssIHNraWxsX3N0eWxlU3ZnRnJhbWVQYWNrLCBwYWludF9zdHlsZVN2Z0ZyYW1lUGFjaywgaW5mb19zdHlsZVN2Z0ZyYW1lUGFjaywgY2xpY2tDb250ZXh0LCBjbGlja0FmdGVyQ29udGV4dF0pO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gSG9tZUxheW91dFJlbmRlcihwcm9wcykge1xyXG4gIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS1Ib21lTGF5b3V0UmVuZGVyLS0tLS0tLS0tLS0tLS0tLS1cIik7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxEZW1vIHJlZnM9e3Byb3BzLnZhbHMucmVmc30gLz5cclxuICAgICAgPE1lbnUgdmFscz17eyBtZW51VmFsdWVzOiBwcm9wcy52YWxzLm1lbnVWYWx1ZXMsIHN2Z0ZyYW1lVmFsdWVzSW1tdXRhYmxlOiBwcm9wcy52YWxzLnN2Z0ZyYW1lVmFsdWVzSW1tdXRhYmxlfX0gLz5cclxuXHJcbiAgICAgIDxkaXYgaWQ9XCJ0aHJlZUpTQ292ZXJcIj48L2Rpdj5cclxuICAgICAgPGRpdiBpZD1cInRocmVlSlNDYW52YXNcIj48L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSG9tZUxheW91dDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==