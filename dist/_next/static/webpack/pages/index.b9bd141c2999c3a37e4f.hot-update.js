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
      mobile();
    }

    if (mode.current.widerMode !== mode.current._widerMode) {
      console.log('widerMode mode changed', mode.current.widerMode);
      mode.current.widerMode = !mode.current.widerMode;
      wider();
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
      Object(_public_assets_js_utilities_js__WEBPACK_IMPORTED_MODULE_9__["homeGsapSet"])(clickRef.current.menuExtended, mobileMode.current !== _mobileMode.current);

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
          lineNumber: 674,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: "lighterVersion",
          onClick: openLighterVersion,
          children: ["Click to the lighter version ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 676,
            columnNumber: 42
          }, _this), " which doesn't contain THREE JS"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 675,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 673,
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
                  lineNumber: 684,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 683,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 682,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 681,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 680,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 679,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 672,
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
      lineNumber: 699,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Menu_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
      vals: {
        menuValues: props.vals.menuValues,
        svgFrameValuesImmutable: props.vals.svgFrameValuesImmutable
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 700,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "threeJSCover"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 702,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "threeJSCanvas"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 703,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lTGF5b3V0LmpzeCJdLCJuYW1lcyI6WyJFeHRlbmRNZW51Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJMb2dvRGlzcGxheUNvbnRleHQiLCJNZW51U2l6ZUNvbnRleHQiLCJDbGlja0NvbnRleHQiLCJDbGlja0FmdGVyQ29udGV4dCIsImxvZ29EaXNwbGF5UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiaW5uZXJXaWR0aCIsInVuZGVmaW5lZCIsImlubmVySGVpZ2h0IiwiZGVtb0NsaWVudEhlaWdodCIsImxvZ29DbGllbnRXaWR0aCIsImxvZ29faGVpZ2hlciIsImxvZ29fd2lkZXIiLCJIb21lTGF5b3V0IiwiY29uc29sZSIsImxvZyIsInVzZU1lbnVTaXplIiwid29ya19zZXRMSV9zaXplIiwid29ya19zZXRzdmdGcmFtZVBhY2tTaXplIiwid29ya19zdHlsZUxJIiwid29ya19zdHlsZVN2Z0ZyYW1lUGFjayIsIndvcmtfY2hhbmdlSGllcmFyY2h5U3ZnRnJhbWVQYWNrIiwic2tpbGxfc2V0TElfc2l6ZSIsInNraWxsX3NldHN2Z0ZyYW1lUGFja1NpemUiLCJza2lsbF9zdHlsZUxJIiwic2tpbGxfc3R5bGVTdmdGcmFtZVBhY2siLCJza2lsbF9jaGFuZ2VIaWVyYXJjaHlTdmdGcmFtZVBhY2siLCJwYWludF9zZXRMSV9zaXplIiwicGFpbnRfc2V0c3ZnRnJhbWVQYWNrU2l6ZSIsInBhaW50X3N0eWxlTEkiLCJwYWludF9zdHlsZVN2Z0ZyYW1lUGFjayIsInBhaW50X2NoYW5nZUhpZXJhcmNoeVN2Z0ZyYW1lUGFjayIsImluZm9fc2V0TElfc2l6ZSIsImluZm9fc2V0c3ZnRnJhbWVQYWNrU2l6ZSIsImluZm9fc3R5bGVMSSIsImluZm9fc3R5bGVTdmdGcmFtZVBhY2siLCJpbmZvX2NoYW5nZUhpZXJhcmNoeVN2Z0ZyYW1lUGFjayIsImxpZ2h0ZXJWZXJzaW9uIiwidXNlUmVmIiwidXNlU3RhdGUiLCJzdmdGcmFtZURlZmF1bHQiLCJyYWRpdXMiLCJ3YXZ5UGF0aCIsImV4dHJhU3BhY2UiLCJzdHJva2VXaWR0aCIsInJlY3QiLCJ3YXZ5Iiwic3ZnRnJhbWVWYWx1ZXMiLCJzZXRTdmdGcmFtZVZhbHVlcyIsInN2Z0ZyYW1lVmFsdWVzSW1tdXRhYmxlIiwieCIsInkiLCJyeCIsInJ5IiwibXVsdGlwbHkiLCJzY2FsZSIsInNwZWVkIiwiZmlsbCIsIm9uIiwiYmlnZ2VyIiwiYmlnZ2VyZWQiLCJjbGlja0NvbnRleHQiLCJzZXRDbGlja0NvbnRleHQiLCJjbGlja0FmdGVyQ29udGV4dCIsInNldENsaWNrQWZ0ZXJDb250ZXh0IiwiY2xpY2tSZWYiLCJvbkFuaW0iLCJhY3RpdmUiLCJtZW51RXh0ZW5kZWQiLCJiaWdnZXJFbGVtUGFyZW50SWQiLCJiaWdnZXJFbGVtIiwiYmlnZ2VyRWxlbVJlY3QiLCJiaWdnZXJOZW9uUmVmcyIsImJpZ2dlcmVkRWxlbSIsImJpZ2dlcmVkRWxlbVBhcmVudElkIiwiYmlnZ2VyZWRFbGVtUmVjdCIsImV4dGVuZGluZ1JlcXVlc3RBbmltUmVmIiwid2F2eUFuaW0iLCJUTCIsInBvaW50cyIsImRlbW9SZWYiLCJsb2dvUmVmIiwibW9kZSIsIm1vYmlsZU1vZGUiLCJfbW9iaWxlTW9kZSIsIndpZGVyTW9kZSIsIl93aWRlck1vZGUiLCJtZW51VmFsdWVzIiwiaWQiLCJvcmRlciIsInN0b3BDb2xvciIsInN0cm9rZUNvbG9yIiwiYWxsRWxlbXMiLCJkZW1vVmlkZW9IZWlnaHQiLCJ1c2VSZWR1Y2VyIiwibG9nb0Rpc3BsYXkiLCJsb2dvRGlzcGxheURpc3BhdGNoIiwiY2hhbmdlTW9kZSIsInVzZUNhbGxiYWNrIiwibW9iaWxlIiwid2lkZXIiLCJjdXJyZW50IiwidXNlRWZmZWN0IiwibWFwIiwiZWxlbSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhc3Ryb25hdXQiLCJob21lR3NhcFNldCIsInVwZGF0ZVN2Z0ZyYW1lVmFsdWVzIiwiX3JhZGl1cyIsIl93YXZ5UGF0aCIsIk1hdGgiLCJhYnMiLCJfc3Ryb2tlV2lkdGgiLCJfc3ZnRnJhbWVEZWZhdWx0IiwiVFYiLCJzdmdGcmFtZURlZmF1bHRTaXplMTQwMCIsInN2Z0ZyYW1lRGVmYXVsdFNpemUiLCJzdmdGcmFtZURlZmF1bHRTaXplODAwIiwic3ZnRnJhbWVEZWZhdWx0U2l6ZVNtYWxsZXJTaXplIiwid2lkdGgiLCJoZWlnaHQiLCJmb3JFYWNoIiwiZXZhbCIsInVwZGF0ZVJlc2l6ZSIsInJlbWFpbkV4dGVuZGluZ01lbnUiLCJjcmVhdGVXYXZ5QW5pbWF0aW9uIiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNldEF0dHJpYnV0ZU5TIiwidHJhbnNmb3JtQWxsRWFjaE1lbnVzIiwiX3N2Z0ZyYW1lVmFsdWVzIiwiZXh0ZW5kaW5nU2l6ZSIsImVsZW1QYXJlbnRJZCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiTkYiLCJmIiwiZGlyIiwiYWRkQ1NTbWVudXRyYW5zaXRpb24iLCJMSSIsIm9iaiIsInNpemUiLCJjaGlsZEVsZW1zIiwiZSIsImZpcnN0RWxlbWVudENoaWxkIiwiYW5pbSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwidXBkYXRlIiwic2V0QXR0cmlidXRlIiwidHdlZW5DYXJkaW5hbCIsInBvaW50czEiLCJwb2ludHMyIiwiZGF0YVBvaW50cyIsInBvaW50c1R3ZWVuMSIsInBvaW50c1R3ZWVuMiIsImdzYXAiLCJ0aW1lbGluZSIsIm9uVXBkYXRlIiwicmVzdW1lIiwiZ2V0RGF0YVBvaW50cyIsImkiLCJsZW5ndGgiLCJkdXJhdGlvbiIsInJhbmRvbSIsInR3ZWVuMSIsInRvIiwicmVwZWF0IiwieW95byIsImVhc2UiLCJTaW5lIiwiZWFzZUluT3V0IiwidHdlZW4yIiwiYWRkIiwicGF1c2VkIiwicGF1c2UiLCJleHRlbmRNZW51IiwidGV4dFJlZiIsImNvbnRlbnRSZWYiLCJuZW9uUmVmcyIsInBhcmVudEVsZW1lbnQiLCJjaGVja0NhbGxpbmdBc3Ryb25hdXQiLCJjYWxsQXN0cm9uYXV0IiwiZ2V0RGVtb1ZpZGVvSGVpZ2h0IiwiZ2V0VmFsdWVzVG9VblN5bWV0cnlFYWNoTWVudSIsImFsbCIsImhvbWVHc2FwVHJhbnNpdGlvbiIsInVuU3ltZXRyeURlbW9NZW51IiwibG9nb1dpZHRoIiwidGhlbiIsInN0eWxlIiwiZGlzcGxheSIsInpJbmRleCIsImJpZ2dlcmVkV2F2eVBhdGgiLCJiaWdnZXJlZFRleHQiLCJiaWdnZXJlZENvbnRlbnRSZWYiLCJiaWdnZXJlZE5lb25SZWZzIiwidmlzaWJpbGl0eSIsInBhdXNlQXN0cm9uYXV0IiwiZWxlbUlkIiwic3ltZXRyeURlbW9NZW51Iiwib3BlbkxpZ2h0ZXJWZXJzaW9uIiwicmVtb3ZlU2NlbmUiLCJpbm5lckhUTUwiLCJldmVudCIsImNsYXNzTGlzdCIsInNldFRpbWVvdXQiLCJ1c2VNZW1vIiwiY29sb3IiLCJyZWZzIiwiSG9tZUxheW91dFJlbmRlciIsInByb3BzIiwidmFscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsaUJBQWlCLGdCQUFHQywyREFBYSxFQUF2QztBQUNBLElBQU1DLGtCQUFrQixnQkFBR0QsMkRBQWEsRUFBeEM7QUFDQSxJQUFNRSxlQUFlLGdCQUFHRiwyREFBYSxFQUFyQztBQUNBLElBQU1HLFlBQVksZ0JBQUdILDJEQUFhLEVBQWxDO0FBQ0EsSUFBTUksaUJBQWlCLGdCQUFHSiwyREFBYSxFQUF2Qzs7QUFFUCxJQUFNSyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUM1QztBQUNBLE1BQUlDLFVBQVUsSUFBSUMsU0FBbEIsRUFBNkI7QUFDM0IsUUFBSUQsVUFBVSxHQUFH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OTljM2EzN2U0Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVDb250ZXh0LHVzZUVmZmVjdCx1c2VTdGF0ZSx1c2VSZWR1Y2VyLHVzZUNhbGxiYWNrLHVzZVJlZix1c2VNZW1vfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IERlbW8gZnJvbSBcIi4vRGVtby5qc3hcIjtcclxuaW1wb3J0IE1lbnUgZnJvbSBcIi4vTWVudS5qc3hcIjtcclxuaW1wb3J0IFRWIGZyb20gXCIuLi9wdWJsaWMvYXNzZXRzL2pzL3RyYW5zaXRpb25WYWx1ZVwiO1xyXG5pbXBvcnQgdXNlTWVudVNpemUgZnJvbSBcIi4uL2hvb2tzL3VzZU1lbnVTaXplXCI7XHJcbmltcG9ydCB7IGhvbWVHc2FwU2V0LCBnZXREZW1vVmlkZW9IZWlnaHQsIGhvbWVHc2FwVHJhbnNpdGlvbiwgZ2V0VmFsdWVzVG9VblN5bWV0cnlFYWNoTWVudSwgdHdlZW5DYXJkaW5hbCwgZ2V0RGF0YVBvaW50cywgcmFuZG9tLCBhZGRDU1NtZW51dHJhbnNpdGlvbn0gZnJvbSBcIi4uL3B1YmxpYy9hc3NldHMvanMvdXRpbGl0aWVzLmpzXCI7XHJcbmltcG9ydCBhc3Ryb25hdXQsIHsgY2FsbEFzdHJvbmF1dCwgcGF1c2VBc3Ryb25hdXQsIHJlbW92ZVNjZW5lfSBmcm9tIFwiLi4vcHVibGljL2Fzc2V0cy9qcy9hc3Ryb25hdXQuanNcIjtcclxuaW1wb3J0IHsgZ3NhcCwgU2luZSB9IGZyb20gXCJnc2FwXCI7XHJcblxyXG5leHBvcnQgY29uc3QgRXh0ZW5kTWVudUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcbmV4cG9ydCBjb25zdCBMb2dvRGlzcGxheUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcbmV4cG9ydCBjb25zdCBNZW51U2l6ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcbmV4cG9ydCBjb25zdCBDbGlja0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcbmV4cG9ydCBjb25zdCBDbGlja0FmdGVyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmNvbnN0IGxvZ29EaXNwbGF5UmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgLy8gY29uc29sZS5sb2coJ2xvZ29EaXNwbGF5IHJlZHVjZXIgaXMgd29ya2luZycpXHJcbiAgaWYgKGlubmVyV2lkdGggIT0gdW5kZWZpbmVkKSB7XHJcbiAgICBpZiAoaW5uZXJXaWR0aCA+IDgwMCkge1xyXG4gICAgICBpZiAoaW5uZXJXaWR0aCA+IGlubmVySGVpZ2h0KSB7XHJcbiAgICAgICAgaWYgKGFjdGlvbi5kZW1vQ2xpZW50SGVpZ2h0IC8gMyA8IChhY3Rpb24ubG9nb0NsaWVudFdpZHRoICogNC41KSAvIDYpIHtcclxuICAgICAgICAgIHN0YXRlID0geyBsb2dvX2hlaWdoZXI6IFwibm9uZVwiLCBsb2dvX3dpZGVyOiBcImluaXRpYWxcIiB9O1xyXG4gICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzdGF0ZSA9IHsgbG9nb19oZWlnaGVyOiBcImluaXRpYWxcIiwgbG9nb193aWRlcjogXCJub25lXCIgfTtcclxuICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3RhdGUgPSB7IGxvZ29faGVpZ2hlcjogXCJpbml0aWFsXCIsIGxvZ29fd2lkZXI6IFwibm9uZVwiIH07XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzdGF0ZSA9IHsgbG9nb19oZWlnaGVyOiBcIm5vbmVcIiwgbG9nb193aWRlcjogXCJpbml0aWFsXCIgfTtcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IEhvbWVMYXlvdXQgPSAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coXCItLS1Ib21lTGF5b3V0LS0tXCIpO1xyXG4gIGNvbnN0IFsgd29ya19zZXRMSV9zaXplLCB3b3JrX3NldHN2Z0ZyYW1lUGFja1NpemUsIHdvcmtfc3R5bGVMSSwgd29ya19zdHlsZVN2Z0ZyYW1lUGFjaywgd29ya19jaGFuZ2VIaWVyYXJjaHlTdmdGcmFtZVBhY2tdID0gdXNlTWVudVNpemUoXCJ3b3JrXCIpO1xyXG4gIGNvbnN0IFsgc2tpbGxfc2V0TElfc2l6ZSwgc2tpbGxfc2V0c3ZnRnJhbWVQYWNrU2l6ZSwgc2tpbGxfc3R5bGVMSSwgc2tpbGxfc3R5bGVTdmdGcmFtZVBhY2ssIHNraWxsX2NoYW5nZUhpZXJhcmNoeVN2Z0ZyYW1lUGFja10gPSB1c2VNZW51U2l6ZShcInNraWxsXCIpO1xyXG4gIGNvbnN0IFsgcGFpbnRfc2V0TElfc2l6ZSwgcGFpbnRfc2V0c3ZnRnJhbWVQYWNrU2l6ZSwgcGFpbnRfc3R5bGVMSSwgcGFpbnRfc3R5bGVTdmdGcmFtZVBhY2ssIHBhaW50X2NoYW5nZUhpZXJhcmNoeVN2Z0ZyYW1lUGFja10gPSB1c2VNZW51U2l6ZShcInBhaW50XCIpO1xyXG4gIGNvbnN0IFsgaW5mb19zZXRMSV9zaXplLCBpbmZvX3NldHN2Z0ZyYW1lUGFja1NpemUsIGluZm9fc3R5bGVMSSwgaW5mb19zdHlsZVN2Z0ZyYW1lUGFjaywgaW5mb19jaGFuZ2VIaWVyYXJjaHlTdmdGcmFtZVBhY2tdID0gdXNlTWVudVNpemUoXCJpbmZvXCIpO1xyXG5cclxuICBjb25zdCBsaWdodGVyVmVyc2lvbiA9IHVzZVJlZihmYWxzZSk7XHJcblxyXG4gIGNvbnN0IFtzdmdGcmFtZVZhbHVlcywgc2V0U3ZnRnJhbWVWYWx1ZXNdID0gdXNlU3RhdGUoeyBzdmdGcmFtZURlZmF1bHQ6IHVuZGVmaW5lZCwgcmFkaXVzOiB1bmRlZmluZWQsIHdhdnlQYXRoOiB1bmRlZmluZWQsIGV4dHJhU3BhY2U6IHVuZGVmaW5lZCwgc3Ryb2tlV2lkdGg6IHsgcmVjdDogXCIwcHhcIiwgd2F2eTogXCIwcHhcIiB9fSk7XHJcbiAgY29uc3Qgc3ZnRnJhbWVWYWx1ZXNJbW11dGFibGUgPSB1c2VSZWYoeyB4OiAwLCB5OiAwLCByeDogNSwgcnk6IDUsIG11bHRpcGx5OiAzLCBzY2FsZTogMSwgc3BlZWQ6IFsyLCAzXSwgZmlsbDogXCJub25lXCJ9KTtcclxuXHJcbiAgY29uc3QgW2NsaWNrQ29udGV4dCwgc2V0Q2xpY2tDb250ZXh0XSA9IHVzZVN0YXRlKHsgb246IGZhbHNlLCBiaWdnZXI6IG51bGwsIGJpZ2dlcmVkOiBudWxsfSk7XHJcbiAgY29uc3QgW2NsaWNrQWZ0ZXJDb250ZXh0LCBzZXRDbGlja0FmdGVyQ29udGV4dF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBjbGlja1JlZiA9IHVzZVJlZih7IG9uQW5pbTogZmFsc2UsIGFjdGl2ZTogdHJ1ZSwgbWVudUV4dGVuZGVkOiBmYWxzZSwgYmlnZ2VyRWxlbVBhcmVudElkOiBudWxsLCBiaWdnZXJFbGVtOiBudWxsLCBiaWdnZXJFbGVtUmVjdDogbnVsbCwgYmlnZ2VyTmVvblJlZnM6IFtdLCBiaWdnZXJlZEVsZW06IG51bGwsIGJpZ2dlcmVkRWxlbVBhcmVudElkOiBudWxsLCBiaWdnZXJlZEVsZW1SZWN0OiBudWxsLCB3YXZ5UGF0aDogW119KTtcclxuXHJcbiAgY29uc3QgZXh0ZW5kaW5nUmVxdWVzdEFuaW1SZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3Qgd2F2eUFuaW0gPSB1c2VSZWYoeyBUTDogbnVsbCwgcG9pbnRzOiBudWxsIH0pO1xyXG5cclxuICBjb25zdCBkZW1vUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IGxvZ29SZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGNvbnN0IG1vZGUgPSB1c2VSZWYoeyBtb2JpbGVNb2RlOiBudWxsLCBfbW9iaWxlTW9kZTogbnVsbCwgd2lkZXJNb2RlOiBudWxsLCBfd2lkZXJNb2RlOiBudWxsfSk7XHJcblxyXG5cclxuICAvLyBjb25zdCB3YXZ5QW5pbS5jdXJyZW50LnBvaW50cyB1c2VSZWYoKTtcclxuXHJcbiAgY29uc3QgbWVudVZhbHVlcyA9IHVzZVJlZihbeyBpZDogXCJ3b3JrXCIsIG9yZGVyOiAxLCBzdG9wQ29sb3I6IFtcInJnYigyMjAsIDUxLCAzNSlcIiwgXCJyZ2IoMjEyLCAxMTYsIDQzKVwiXSwgc3Ryb2tlQ29sb3I6IFtcIiNmZjNiMjlcIiwgXCIjZmY4YzM0XCJdfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGlkOiBcInNraWxsXCIsIG9yZGVyOiAyLCBzdG9wQ29sb3I6IFtcInJnYigxNjgsIDYzLCAyMDkpXCIsIFwicmdiKDE5MiwgNDksIDkxKVwiXSwgc3Ryb2tlQ29sb3I6IFtcIiNjZDRkZmZcIiwgXCIjZmY0MTc5XCJdfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGlkOiBcInBhaW50XCIsIG9yZGVyOiAzLCBzdG9wQ29sb3I6IFtcInJnYigyMjUsIDE0OSwgNDYpXCIsIFwicmdiKDQ4LCAxNzEsIDE1MilcIl0sIHN0cm9rZUNvbG9yOiBbXCIjZmZhOTM0XCIsIFwiIzMwYWI5OFwiXX0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBpZDogXCJpbmZvXCIsIG9yZGVyOiA0LCBzdG9wQ29sb3I6IFtcInJnYigyMDAsIDg2LCAxNzcpXCIsIFwicmdiKDc1LCAxNzMsIDIwOSlcIl0sIHN0cm9rZUNvbG9yOiBbXCIjZmY2ZWUyXCIsIFwiIzVjZDNmZlwiXX1dKTtcclxuICBjb25zdCBhbGxFbGVtcyA9IHVzZVJlZigpO1xyXG5cclxuICBsZXQgZGVtb1ZpZGVvSGVpZ2h0O1xyXG5cclxuICBjb25zdCBbbG9nb0Rpc3BsYXksIGxvZ29EaXNwbGF5RGlzcGF0Y2hdID0gdXNlUmVkdWNlcihsb2dvRGlzcGxheVJlZHVjZXIsIHtcclxuICAgIGxvZ29faGVpZ2hlcjogXCJub25lXCIsXHJcbiAgICBsb2dvX3dpZGVyOiBcIm5vbmVcIixcclxuICB9KTtcclxuXHJcbiAgY29uc3QgY2hhbmdlTW9kZT0gdXNlQ2FsbGJhY2soKG1vYmlsZT1udWxsLCB3aWRlcj1udWxsKT0+e1xyXG4gICAgbW9kZS5jdXJyZW50Ll9tb2JpbGVNb2RlID0gaW5uZXJXaWR0aCA8PSA4MDAgPyB0cnVlIDogZmFsc2U7XHJcbiAgICBtb2RlLmN1cnJlbnQuX3dpZGVyTW9kZSA9IGlubmVyV2lkdGggPj0gMTQwMCA/IHRydWUgOiBmYWxzZTtcclxuXHJcbiAgICBpZiAobW9kZS5jdXJyZW50Lm1vYmlsZU1vZGUgIT09IG1vZGUuY3VycmVudC5fbW9iaWxlTW9kZSkge1xyXG4gICAgICBjb25zb2xlLmxvZygnbW9iaWxlTW9kZSBtb2RlIGNoYW5nZWQnLCBtb2RlLmN1cnJlbnQubW9iaWxlTW9kZSlcclxuICAgICAgbW9kZS5jdXJyZW50Lm1vYmlsZU1vZGUgPSAhbW9kZS5jdXJyZW50Lm1vYmlsZU1vZGU7XHJcbiAgICAgIG1vYmlsZSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKG1vZGUuY3VycmVudC53aWRlck1vZGUgIT09IG1vZGUuY3VycmVudC5fd2lkZXJNb2RlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCd3aWRlck1vZGUgbW9kZSBjaGFuZ2VkJywgbW9kZS5jdXJyZW50LndpZGVyTW9kZSlcclxuICAgICAgbW9kZS5jdXJyZW50LndpZGVyTW9kZSA9ICFtb2RlLmN1cnJlbnQud2lkZXJNb2RlO1xyXG4gICAgICB3aWRlcigpO1xyXG4gICAgfVxyXG4gIH0sW10pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBtb2RlLmN1cnJlbnQubW9iaWxlTW9kZSA9IGlubmVyV2lkdGggPD0gODAwID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgbW9kZS5jdXJyZW50LndpZGVyTW9kZSA9IGlubmVyV2lkdGggPj0gMTQwMCA/IHRydWUgOiBmYWxzZTtcclxuICAgIG1vZGUuY3VycmVudC5fbW9iaWxlTW9kZSA9IG1vZGUuY3VycmVudC5tb2JpbGVNb2RlO1xyXG4gICAgbW9kZS5jdXJyZW50Ll93aWRlck1vZGUgPSBtb2RlLmN1cnJlbnQud2lkZXJNb2RlO1xyXG5cclxuICAgIGFsbEVsZW1zLmN1cnJlbnQgPSBtZW51VmFsdWVzLmN1cnJlbnQubWFwKChlbGVtKSA9PiB7XHJcbiAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtLmlkKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGFzdHJvbmF1dCgpO1xyXG4gICAgaG9tZUdzYXBTZXQoY2xpY2tSZWYuY3VycmVudC5tZW51RXh0ZW5kZWQsIHRydWUpO1xyXG4gICAgdXBkYXRlU3ZnRnJhbWVWYWx1ZXMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVN2Z0ZyYW1lVmFsdWVzID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJ1cGRhdGVTdmdGcmFtZVZhbHVlcyBpcyBjYWxsaW5nXCIpO1xyXG4gICAgbGV0IF9yYWRpdXMgPSBpbm5lcldpZHRoID4gODAwID8gKGlubmVyV2lkdGggPiAxNDAwID8gOSA6IDcpIDogNTtcclxuICAgIGxldCBfd2F2eVBhdGggPSBNYXRoLmFicyhpbm5lcldpZHRoIC0gaW5uZXJXaWR0aCkgKiAwLjAxICsgMjU7XHJcbiAgICBsZXQgX3N0cm9rZVdpZHRoID1cclxuICAgICAgaW5uZXJXaWR0aCA+IDgwMFxyXG4gICAgICAgID8gaW5uZXJXaWR0aCA+IDE0MDBcclxuICAgICAgICAgID8geyByZWN0OiBcIjAuNXJlbVwiLCB3YXZ5OiBcIjAuN3JlbVwiIH1cclxuICAgICAgICAgIDogeyByZWN0OiBcIjAuNXZ3XCIsIHdhdnk6IFwiMXZ3XCIgfVxyXG4gICAgICAgIDogeyByZWN0OiBcIjAuM3JlbVwiLCB3YXZ5OiBcIjAuNXJlbVwiIH07XHJcbiAgICBsZXQgX3N2Z0ZyYW1lRGVmYXVsdDtcclxuXHJcbiAgICBpZiAoaW5uZXJXaWR0aCA+IDE0MDApIHtcclxuICAgICAgX3N2Z0ZyYW1lRGVmYXVsdCA9IFRWLnN2Z0ZyYW1lRGVmYXVsdFNpemUxNDAwO1xyXG4gICAgfSBlbHNlIGlmIChpbm5lcldpZHRoID4gODAwKSB7XHJcbiAgICAgIF9zdmdGcmFtZURlZmF1bHQgPSBUVi5zdmdGcmFtZURlZmF1bHRTaXplO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKGNsaWNrUmVmLmN1cnJlbnQubWVudUV4dGVuZGVkID09IGZhbHNlKSB7XHJcbiAgICAgICAgX3N2Z0ZyYW1lRGVmYXVsdCA9IFRWLnN2Z0ZyYW1lRGVmYXVsdFNpemU4MDA7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgX3N2Z0ZyYW1lRGVmYXVsdCA9IFRWLnN2Z0ZyYW1lRGVmYXVsdFNpemVTbWFsbGVyU2l6ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldFN2Z0ZyYW1lVmFsdWVzKHtcclxuICAgICAgLi4uc3ZnRnJhbWVWYWx1ZXMsXHJcbiAgICAgIHN2Z0ZyYW1lRGVmYXVsdDogeyB3aWR0aDogX3N2Z0ZyYW1lRGVmYXVsdCwgaGVpZ2h0OiBfc3ZnRnJhbWVEZWZhdWx0IH0sXHJcbiAgICAgIHJhZGl1czogX3JhZGl1cyxcclxuICAgICAgd2F2eVBhdGg6IF93YXZ5UGF0aCxcclxuICAgICAgZXh0cmFTcGFjZTogX3JhZGl1cyAqIDUsXHJcbiAgICAgIHN0cm9rZVdpZHRoOiBfc3Ryb2tlV2lkdGgsXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoc3ZnRnJhbWVWYWx1ZXMucmFkaXVzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgaWYgKGNsaWNrUmVmLmN1cnJlbnQubWVudUV4dGVuZGVkKSB7XHJcbiAgICAgICAgbWVudVZhbHVlcy5jdXJyZW50LmZvckVhY2goKGVsZW0pID0+IHtcclxuICAgICAgICAgIGlmIChjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW1QYXJlbnRJZCAhPT0gZWxlbS5pZCkge1xyXG4gICAgICAgICAgICBldmFsKGVsZW0uaWQgKyBcIl9jaGFuZ2VIaWVyYXJjaHlTdmdGcmFtZVBhY2tcIikoc3ZnRnJhbWVWYWx1ZXMpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lbnVWYWx1ZXMuY3VycmVudC5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICAgICAgICBldmFsKGVsZW0uaWQgKyBcIl9jaGFuZ2VIaWVyYXJjaHlTdmdGcmFtZVBhY2tcIikoc3ZnRnJhbWVWYWx1ZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW3N2Z0ZyYW1lVmFsdWVzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgdXBkYXRlUmVzaXplID0gKCkgPT4ge1xyXG5cclxuXHJcbiAgICAgIGhvbWVHc2FwU2V0KFxyXG4gICAgICAgIGNsaWNrUmVmLmN1cnJlbnQubWVudUV4dGVuZGVkLFxyXG4gICAgICAgIG1vYmlsZU1vZGUuY3VycmVudCAhPT0gX21vYmlsZU1vZGUuY3VycmVudFxyXG4gICAgICApO1xyXG5cclxuICAgICAgaWYgKGNsaWNrUmVmLmN1cnJlbnQubWVudUV4dGVuZGVkKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXNpemUgaXMgd29ya2luZ1wiKTtcclxuICAgICAgICByZW1haW5FeHRlbmRpbmdNZW51KCk7XHJcbiAgICAgICAgY3JlYXRlV2F2eUFuaW1hdGlvbih7XHJcbiAgICAgICAgICB3aWR0aDogY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtLmNsaWVudFdpZHRoLFxyXG4gICAgICAgICAgaGVpZ2h0OiBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW0uY2xpZW50SGVpZ2h0LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGNoYW5nZU1vZGUodXBkYXRlU3ZnRnJhbWVWYWx1ZXMoKSx1cGRhdGVTdmdGcmFtZVZhbHVlcygpKTtcclxuICAgICAgXHJcbiAgICB9O1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdXBkYXRlUmVzaXplKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHVwZGF0ZVJlc2l6ZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtzdmdGcmFtZVZhbHVlc10pO1xyXG5cclxuICBjb25zdCByZW1haW5FeHRlbmRpbmdNZW51ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgLy8gY29uc3QgcmVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJpZ2dlckVsZW0uY3VycmVudC5wYXJlbnRFbGVtZW50LmlkK1wiU3ZnRnJhbWVcIik7XHJcblxyXG4gICAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtUmVjdC5zZXRBdHRyaWJ1dGVOUyhcclxuICAgICAgbnVsbCxcclxuICAgICAgXCJ3aWR0aFwiLFxyXG4gICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW0uY2xpZW50V2lkdGhcclxuICAgICk7XHJcbiAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW1SZWN0LnNldEF0dHJpYnV0ZU5TKFxyXG4gICAgICBudWxsLFxyXG4gICAgICBcImhlaWdodFwiLFxyXG4gICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW0uY2xpZW50SGVpZ2h0XHJcbiAgICApO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy8gZnVuY3Rpb24gdGVzdCgpe1xyXG4gIC8vICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XHJcbiAgLy8gICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gIC8vICAgICAgIGNvbnNvbGUubG9nKCdmaW5pc2gnKTtcclxuICAvLyAgICAgICByZXNvbHZlKCk7XHJcbiAgLy8gICAgIH0sIDEwMDApO1xyXG4gIC8vICAgfSlcclxuICAvLyB9XHJcbiAgLy8gZnVuY3Rpb24gZGlzYWJsZUNsaWNrKCl7XHJcbiAgLy8gICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcclxuICAvLyAgICAgYWN0aXZlQ2xpY2sgPSBmYWxzZTtcclxuICAvLyAgICAgY29uc29sZS5sb2coYWN0aXZlQ2xpY2spO1xyXG4gIC8vICAgICByZXNvbHZlKCk7XHJcbiAgLy8gICB9KVxyXG4gIC8vIH1cclxuXHJcbiAgLy8gLS0tLS0gICB0aGUgcmVhc29uIEkgcHV0IHN2Z0ZyYW1lVmFsdWUgYXMgYW4gYXJndW1lbnQsIG5vdCBqdXN0IHVzaW5nIHN2Z0ZyYW1lVmFsdWUgYXMgYSBSZWYsXHJcbiAgLy8gLS0tLS0gaXMgSSBkb24ndCB3YW50IHRvIHJlcmVuZGVyIGFsbCB0aGlzIGZ1bmN0aW9ucyB3aGVuZXZlciBzdmdGcmFtZVZhbHVlcyBjaGFuZ2VzLlxyXG4gIGNvbnN0IHRyYW5zZm9ybUFsbEVhY2hNZW51cyA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKF9zdmdGcmFtZVZhbHVlcywgZXh0ZW5kaW5nU2l6ZSwgZWxlbVBhcmVudElkKSA9PiB7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgTkYgPSBUVltcIm1lbnVEdXJhdGlvblwiXSAqIDYwO1xyXG5cclxuICAgICAgICBsZXQgZiA9IDA7XHJcbiAgICAgICAgbGV0IGRpciA9IDE7XHJcblxyXG4gICAgICAgIGFkZENTU21lbnV0cmFuc2l0aW9uKG51bGwsIC4uLmFsbEVsZW1zLmN1cnJlbnQpO1xyXG4gICAgICAgIGV4dGVuZGluZ1NpemUuTEkuZm9yRWFjaCgob2JqKSA9PiB7XHJcbiAgICAgICAgICBldmFsKG9ialtcImVsZW1JZFwiXSArIFwiX3NldExJX3NpemVcIikoe1xyXG4gICAgICAgICAgICB3aWR0aDogb2JqLndpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IG9iai5oZWlnaHQsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgYWRkQ1NTbWVudXRyYW5zaXRpb24obnVsbCwgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtKTtcclxuICAgICAgICAgIGV2YWwoZWxlbVBhcmVudElkICsgXCJfY2hhbmdlSGllcmFyY2h5U3ZnRnJhbWVQYWNrXCIpKFxyXG4gICAgICAgICAgICBfc3ZnRnJhbWVWYWx1ZXMsXHJcbiAgICAgICAgICAgIGV4dGVuZGluZ1NpemVbXCJzdmdGcmFtZVBhY2thZ2VcIl1cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2xpY2tSZWYuY3VycmVudC5iaWdnZXJlZEVsZW1QYXJlbnRJZCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgYWRkQ1NTbWVudXRyYW5zaXRpb24obnVsbCwgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJlZEVsZW0pO1xyXG4gICAgICAgICAgZXZhbChcclxuICAgICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJlZEVsZW1QYXJlbnRJZCArXHJcbiAgICAgICAgICAgICAgXCJfY2hhbmdlSGllcmFyY2h5U3ZnRnJhbWVQYWNrXCJcclxuICAgICAgICAgICkoX3N2Z0ZyYW1lVmFsdWVzLCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBfc3ZnRnJhbWVWYWx1ZXMuc3ZnRnJhbWVEZWZhdWx0LndpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IF9zdmdGcmFtZVZhbHVlcy5zdmdGcmFtZURlZmF1bHQuaGVpZ2h0LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaW5uZXJXaWR0aCA8IDgwMCkge1xyXG4gICAgICAgICAgY29uc3Qgc2l6ZSA9XHJcbiAgICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbSAhPT0gbnVsbFxyXG4gICAgICAgICAgICAgID8gVFYuc3ZnRnJhbWVEZWZhdWx0U2l6ZVNtYWxsZXJTaXplXHJcbiAgICAgICAgICAgICAgOiBfc3ZnRnJhbWVWYWx1ZXNbXCJzdmdGcmFtZURlZmF1bHRcIl07XHJcbiAgICAgICAgICBjb25zdCBjaGlsZEVsZW1zID0gYWxsRWxlbXMuY3VycmVudC5tYXAoKGUpID0+IGUuZmlyc3RFbGVtZW50Q2hpbGQpO1xyXG5cclxuICAgICAgICAgIGFkZENTU21lbnV0cmFuc2l0aW9uKGVsZW1QYXJlbnRJZCwgLi4uY2hpbGRFbGVtcyk7XHJcblxyXG4gICAgICAgICAgbWVudVZhbHVlcy5jdXJyZW50LmZvckVhY2goKGVsZW0pID0+IHtcclxuICAgICAgICAgICAgaWYgKGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbVBhcmVudElkICE9PSBlbGVtLmlkKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgcmVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW0uaWQgKyBcIlN2Z0ZyYW1lXCIpO1xyXG5cclxuICAgICAgICAgICAgICBldmFsKGVsZW0uaWQgKyBcIl9jaGFuZ2VIaWVyYXJjaHlTdmdGcmFtZVBhY2tcIikoX3N2Z0ZyYW1lVmFsdWVzLCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogc2l6ZSxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogc2l6ZSxcclxuICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgcmVjdC5zZXRBdHRyaWJ1dGVOUyhudWxsLCBcIndpZHRoXCIsIHNpemUpO1xyXG4gICAgICAgICAgICAgIHJlY3Quc2V0QXR0cmlidXRlTlMobnVsbCwgXCJoZWlnaHRcIiwgc2l6ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gYW5pbSgpIHtcclxuICAgICAgICAgIGYgKz0gZGlyO1xyXG4gICAgICAgICAgaWYgKGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW1SZWN0LnNldEF0dHJpYnV0ZU5TKFxyXG4gICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgXCJ3aWR0aFwiLFxyXG4gICAgICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbS5jbGllbnRXaWR0aFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW1SZWN0LnNldEF0dHJpYnV0ZU5TKFxyXG4gICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgXCJoZWlnaHRcIixcclxuICAgICAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW0uY2xpZW50SGVpZ2h0XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyZWRFbGVtUGFyZW50SWQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJlZEVsZW1SZWN0LnNldEF0dHJpYnV0ZU5TKFxyXG4gICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgXCJ3aWR0aFwiLFxyXG4gICAgICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyZWRFbGVtLmNsaWVudFdpZHRoXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyZWRFbGVtUmVjdC5zZXRBdHRyaWJ1dGVOUyhcclxuICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgIFwid2lkdGhcIixcclxuICAgICAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlcmVkRWxlbS5jbGllbnRXaWR0aFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZXh0ZW5kaW5nUmVxdWVzdEFuaW1SZWYuY3VycmVudCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltKTtcclxuXHJcbiAgICAgICAgICBpZiAoIShmICUgTkYpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiPT09PT09PWZpbmlzaGVkPT09PT09PVwiKTtcclxuICAgICAgICAgICAgLy8gb25BbmltID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmIChjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW0gIT09IG51bGwpXHJcbiAgICAgICAgICAgICAgZXZhbChlbGVtUGFyZW50SWQgKyBcIl9jaGFuZ2VIaWVyYXJjaHlTdmdGcmFtZVBhY2tcIikoXHJcbiAgICAgICAgICAgICAgICBfc3ZnRnJhbWVWYWx1ZXMsXHJcbiAgICAgICAgICAgICAgICB7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgIGV2YWwoZWxlbVBhcmVudElkICsgXCJfY2hhbmdlSGllcmFyY2h5U3ZnRnJhbWVQYWNrXCIpKFxyXG4gICAgICAgICAgICAgICAgX3N2Z0ZyYW1lVmFsdWVzLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogX3N2Z0ZyYW1lVmFsdWVzW1wic3ZnRnJhbWVEZWZhdWx0XCJdLFxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IF9zdmdGcmFtZVZhbHVlc1tcInN2Z0ZyYW1lRGVmYXVsdFwiXSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoZXh0ZW5kaW5nUmVxdWVzdEFuaW1SZWYuY3VycmVudCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzb2x2ZT9cIik7XHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYW5pbSgpO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBbXVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGNyZWF0ZVdhdnlBbmltYXRpb24gPSB1c2VDYWxsYmFjayhcclxuICAgIChleHRlbmRpbmdTaXplKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiY3JlYXRlV2F2eUFuaW1hdGlvbiBpcyB3b3JraW5nXCIpO1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDgwMCkge1xyXG4gICAgICAgICAgbGV0IGRhdGFQb2ludHMsIHBvaW50c1R3ZWVuMSwgcG9pbnRzVHdlZW4yO1xyXG5cclxuICAgICAgICAgIGlmIChzdmdGcmFtZVZhbHVlcy53YXZ5UGF0aCA+IGV4dGVuZGluZ1NpemVbXCJ3aWR0aFwiXSAvIDIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNldFN2Z0ZyYW1lVmFsdWVzKHtcclxuICAgICAgICAgICAgICAuLi5zdmdGcmFtZVZhbHVlcyxcclxuICAgICAgICAgICAgICB3YXZ5UGF0aDogZXh0ZW5kaW5nU2l6ZVtcIndpZHRoXCJdIC8gMixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKHdhdnlBbmltLmN1cnJlbnQuVEwgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgd2F2eUFuaW0uY3VycmVudC5UTCA9IGdzYXAudGltZWxpbmUoe1xyXG4gICAgICAgICAgICAgIG9uVXBkYXRlOiB1cGRhdGUsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgd2F2eUFuaW0uY3VycmVudC5UTC5yZXN1bWUoKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBkYXRhUG9pbnRzID0gZ2V0RGF0YVBvaW50cyhcclxuICAgICAgICAgICAgZXh0ZW5kaW5nU2l6ZSxcclxuICAgICAgICAgICAgc3ZnRnJhbWVWYWx1ZXMsXHJcbiAgICAgICAgICAgIHN2Z0ZyYW1lVmFsdWVzSW1tdXRhYmxlLmN1cnJlbnRcclxuICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgd2F2eUFuaW0uY3VycmVudC5wb2ludHMgPSB7XHJcbiAgICAgICAgICAgIHBvaW50czE6IGRhdGFQb2ludHMucG9pbnRzMSxcclxuICAgICAgICAgICAgcG9pbnRzMjogZGF0YVBvaW50cy5wb2ludHMyLFxyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICBwb2ludHNUd2VlbjEgPSBkYXRhUG9pbnRzLnBvaW50c1R3ZWVuMTtcclxuICAgICAgICAgIHBvaW50c1R3ZWVuMiA9IGRhdGFQb2ludHMucG9pbnRzVHdlZW4yO1xyXG5cclxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2F2eUFuaW0uY3VycmVudC5wb2ludHMucG9pbnRzMS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgZHVyYXRpb24gPSByYW5kb20oXHJcbiAgICAgICAgICAgICAgc3ZnRnJhbWVWYWx1ZXNJbW11dGFibGUuY3VycmVudFtcInNwZWVkXCJdWzBdLFxyXG4gICAgICAgICAgICAgIHN2Z0ZyYW1lVmFsdWVzSW1tdXRhYmxlLmN1cnJlbnRbXCJzcGVlZFwiXVsxXVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgbGV0IHR3ZWVuMSA9IGdzYXAudG8od2F2eUFuaW0uY3VycmVudC5wb2ludHMucG9pbnRzMVtpXSwge1xyXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcclxuICAgICAgICAgICAgICB4OiBwb2ludHNUd2VlbjFbaV0ueCxcclxuICAgICAgICAgICAgICB5OiBwb2ludHNUd2VlbjFbaV0ueSxcclxuICAgICAgICAgICAgICByZXBlYXQ6IC0xLFxyXG4gICAgICAgICAgICAgIHlveW86IHRydWUsXHJcbiAgICAgICAgICAgICAgZWFzZTogU2luZS5lYXNlSW5PdXQsXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgbGV0IHR3ZWVuMiA9IGdzYXAudG8od2F2eUFuaW0uY3VycmVudC5wb2ludHMucG9pbnRzMltpXSwge1xyXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcclxuICAgICAgICAgICAgICB4OiBwb2ludHNUd2VlbjJbaV0ueCxcclxuICAgICAgICAgICAgICB5OiBwb2ludHNUd2VlbjJbaV0ueSxcclxuICAgICAgICAgICAgICByZXBlYXQ6IC0xLFxyXG4gICAgICAgICAgICAgIHlveW86IHRydWUsXHJcbiAgICAgICAgICAgICAgZWFzZTogU2luZS5lYXNlSW5PdXQsXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgd2F2eUFuaW0uY3VycmVudC5UTC5hZGQodHdlZW4xLCAtcmFuZG9tKGR1cmF0aW9uKSk7XHJcbiAgICAgICAgICAgIHdhdnlBbmltLmN1cnJlbnQuVEwuYWRkKHR3ZWVuMiwgLXJhbmRvbShkdXJhdGlvbikpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcclxuICAgICAgICAgICAgY2xpY2tSZWYuY3VycmVudC53YXZ5UGF0aFswXS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgICAgXCJkXCIsXHJcbiAgICAgICAgICAgICAgdHdlZW5DYXJkaW5hbCh3YXZ5QW5pbS5jdXJyZW50LnBvaW50cy5wb2ludHMxLCB0cnVlLCAxKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LndhdnlQYXRoWzFdLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgICBcImRcIixcclxuICAgICAgICAgICAgICB0d2VlbkNhcmRpbmFsKHdhdnlBbmltLmN1cnJlbnQucG9pbnRzLnBvaW50czIsIHRydWUsIDEpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcmV0dXJuIHdhdnlBbmltLmN1cnJlbnQuVEw7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmICh3YXZ5QW5pbS5jdXJyZW50LlRMICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmICghd2F2eUFuaW0uY3VycmVudC5UTC5wYXVzZWQoKSkge1xyXG4gICAgICAgICAgICAgIHdhdnlBbmltLmN1cnJlbnQuVEwgPSB3YXZ5QW5pbS5jdXJyZW50LlRMLnBhdXNlKCk7XHJcbiAgICAgICAgICAgICAgY2xpY2tSZWYuY3VycmVudC53YXZ5UGF0aFswXS5zZXRBdHRyaWJ1dGUoXCJkXCIsIFwiXCIpO1xyXG4gICAgICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQud2F2eVBhdGhbMV0uc2V0QXR0cmlidXRlKFwiZFwiLCBcIlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFtzdmdGcmFtZVZhbHVlc11cclxuICApO1xyXG5cclxuICAvLyB1c2VFZmZlY3QoKCk9PntzZXRDbGlja0FmdGVyQ29udGV4dCgnc2tpbGwnKTt9LFtdKVxyXG5cclxuICBjb25zdCBleHRlbmRNZW51ID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoZWxlbSwgb3JkZXIgPSAwLCB0ZXh0UmVmLCBjb250ZW50UmVmLCBuZW9uUmVmcykgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImVsZW1cIiwgZWxlbSk7XHJcbiAgICAgIGNvbnN0IGVsZW1QYXJlbnRJZCA9IGVsZW0ucGFyZW50RWxlbWVudC5pZDtcclxuXHJcbiAgICAgIGlmIChjbGlja1JlZi5jdXJyZW50Lm9uQW5pbSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoY2xpY2tSZWYuY3VycmVudC5tZW51RXh0ZW5kZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICBjbGlja1JlZi5jdXJyZW50Lm9uQW5pbSA9IHRydWU7XHJcbiAgICAgICAgICBzZXRDbGlja0NvbnRleHQoeyBvbjogdHJ1ZSwgYmlnZ2VyOiBlbGVtUGFyZW50SWQsIGJpZ2dlcmVkOiBudWxsIH0pO1xyXG4gICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5tZW51RXh0ZW5kZWQgPSB0cnVlO1xyXG4gICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtUGFyZW50SWQgPSBlbGVtUGFyZW50SWQ7XHJcbiAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW0gPSBlbGVtO1xyXG4gICAgICAgICAgKGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbVJlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgICAgICAgZWxlbVBhcmVudElkICsgXCJTdmdGcmFtZVwiXHJcbiAgICAgICAgICApKSxcclxuICAgICAgICAgICAgKGNsaWNrUmVmLmN1cnJlbnQud2F2eVBhdGggPSBbXHJcbiAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbVBhcmVudElkICsgXCJTdmdXYXZ5MVwiKSxcclxuICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtUGFyZW50SWQgKyBcIlN2Z1dhdnkyXCIpLFxyXG4gICAgICAgICAgICBdKTtcclxuICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQudGV4dFJlZiA9IHRleHRSZWY7XHJcbiAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmNvbnRlbnRSZWYgPSBjb250ZW50UmVmO1xyXG4gICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJOZW9uUmVmcyA9IG5lb25SZWZzO1xyXG5cclxuICAgICAgICAgIGRlbW9WaWRlb0hlaWdodCA9IGdldERlbW9WaWRlb0hlaWdodChjbGlja1JlZi5jdXJyZW50Lm1lbnVFeHRlbmRlZCk7XHJcbiAgICAgICAgICBsZXQgZXh0ZW5kaW5nU2l6ZSA9IGdldFZhbHVlc1RvVW5TeW1ldHJ5RWFjaE1lbnUoXHJcbiAgICAgICAgICAgIGRlbW9WaWRlb0hlaWdodCxcclxuICAgICAgICAgICAgZWxlbSxcclxuICAgICAgICAgICAgb3JkZXJcclxuICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgZnVuY3Rpb24gY2hlY2tDYWxsaW5nQXN0cm9uYXV0KCkge1xyXG4gICAgICAgICAgICBpZiAoIWxpZ2h0ZXJWZXJzaW9uLmN1cnJlbnQpIGNhbGxBc3Ryb25hdXQoZWxlbVBhcmVudElkKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgICAgIGhvbWVHc2FwVHJhbnNpdGlvbihjbGlja1JlZi5jdXJyZW50Lm1lbnVFeHRlbmRlZCksXHJcbiAgICAgICAgICAgIGxvZ29EaXNwbGF5RGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgIGRlbW9DbGllbnRIZWlnaHQ6IGRlbW9SZWYuY3VycmVudC5jbGllbnRIZWlnaHQsXHJcbiAgICAgICAgICAgICAgbG9nb0NsaWVudFdpZHRoOlxyXG4gICAgICAgICAgICAgICAgKCgoaW5uZXJXaWR0aCAqICgxMDAgLSBUVi51blN5bWV0cnlEZW1vTWVudSkpIC8gMTAwKSAqXHJcbiAgICAgICAgICAgICAgICAgIFRWLmxvZ29XaWR0aCkgL1xyXG4gICAgICAgICAgICAgICAgMTAwLFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtUmVjdC5zZXRBdHRyaWJ1dGVOUyhcclxuICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgIFwic3Ryb2tlXCIsXHJcbiAgICAgICAgICAgICAgXCJ1cmwoI1N2Z0l2b3J5KVwiXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybUFsbEVhY2hNZW51cyhzdmdGcmFtZVZhbHVlcywgZXh0ZW5kaW5nU2l6ZSwgZWxlbVBhcmVudElkKSxcclxuICAgICAgICAgICAgY2hlY2tDYWxsaW5nQXN0cm9uYXV0KCksXHJcbiAgICAgICAgICBdKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgY3JlYXRlV2F2eUFuaW1hdGlvbihleHRlbmRpbmdTaXplW1wic3ZnRnJhbWVQYWNrYWdlXCJdKTtcclxuICAgICAgICAgICAgICB0ZXh0UmVmLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICBjb250ZW50UmVmLnN0eWxlLmRpc3BsYXkgPSBcImluaXRpYWxcIjtcclxuICAgICAgICAgICAgICBjb250ZW50UmVmLnN0eWxlLnpJbmRleCA9IDM7XHJcbiAgICAgICAgICAgICAgc2V0Q2xpY2tBZnRlckNvbnRleHQoZWxlbVBhcmVudElkKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQub25BbmltID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtUGFyZW50SWQgIT09IGVsZW1QYXJlbnRJZCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJlbHNlIGlmXCIpO1xyXG4gICAgICAgICAgY29uc3QgYmlnZ2VyZWRXYXZ5UGF0aCA9IGNsaWNrUmVmLmN1cnJlbnQud2F2eVBhdGg7XHJcbiAgICAgICAgICBjb25zdCBiaWdnZXJlZFRleHQgPSBjbGlja1JlZi5jdXJyZW50LnRleHRSZWY7XHJcbiAgICAgICAgICBjb25zdCBiaWdnZXJlZENvbnRlbnRSZWYgPSBjbGlja1JlZi5jdXJyZW50LmNvbnRlbnRSZWY7XHJcbiAgICAgICAgICBjb25zdCBiaWdnZXJlZE5lb25SZWZzID0gY2xpY2tSZWYuY3VycmVudC5iaWdnZXJOZW9uUmVmcztcclxuXHJcbiAgICAgICAgICBjbGlja1JlZi5jdXJyZW50Lm9uQW5pbSA9IHRydWU7XHJcbiAgICAgICAgICBzZXRDbGlja0NvbnRleHQoe1xyXG4gICAgICAgICAgICBvbjogdHJ1ZSxcclxuICAgICAgICAgICAgYmlnZ2VyOiBlbGVtUGFyZW50SWQsXHJcbiAgICAgICAgICAgIGJpZ2dlcmVkOiBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW1QYXJlbnRJZCxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJlZEVsZW0gPSBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW07XHJcbiAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlcmVkRWxlbVBhcmVudElkID1cclxuICAgICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtUGFyZW50SWQ7XHJcbiAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlcmVkRWxlbVJlY3QgPSBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW1SZWN0O1xyXG4gICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtID0gZWxlbTtcclxuICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbVBhcmVudElkID0gZWxlbVBhcmVudElkO1xyXG4gICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtID0gZWxlbTtcclxuICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbVJlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgICAgICAgZWxlbVBhcmVudElkICsgXCJTdmdGcmFtZVwiXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgY2xpY2tSZWYuY3VycmVudC53YXZ5UGF0aCA9IFtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbVBhcmVudElkICsgXCJTdmdXYXZ5MVwiKSxcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbVBhcmVudElkICsgXCJTdmdXYXZ5MlwiKSxcclxuICAgICAgICAgIF07XHJcbiAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LnRleHRSZWYgPSB0ZXh0UmVmO1xyXG4gICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5jb250ZW50UmVmID0gY29udGVudFJlZjtcclxuICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyTmVvblJlZnMgPSBuZW9uUmVmcztcclxuXHJcbiAgICAgICAgICBkZW1vVmlkZW9IZWlnaHQgPSBnZXREZW1vVmlkZW9IZWlnaHQoY2xpY2tSZWYuY3VycmVudC5tZW51RXh0ZW5kZWQpO1xyXG4gICAgICAgICAgbGV0IGV4dGVuZGluZ1NpemUgPSBnZXRWYWx1ZXNUb1VuU3ltZXRyeUVhY2hNZW51KFxyXG4gICAgICAgICAgICBkZW1vVmlkZW9IZWlnaHQsXHJcbiAgICAgICAgICAgIGVsZW0sXHJcbiAgICAgICAgICAgIG9yZGVyXHJcbiAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgIGlmIChpbm5lcldpZHRoID4gODAwKSB3YXZ5QW5pbS5jdXJyZW50LlRMLnBhdXNlKDApO1xyXG5cclxuICAgICAgICAgIGZ1bmN0aW9uIGNoZWNrQ2FsbGluZ0FzdHJvbmF1dCgpIHtcclxuICAgICAgICAgICAgaWYgKCFsaWdodGVyVmVyc2lvbi5jdXJyZW50KVxyXG4gICAgICAgICAgICAgIGNhbGxBc3Ryb25hdXQoXHJcbiAgICAgICAgICAgICAgICBlbGVtUGFyZW50SWQsXHJcbiAgICAgICAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlcmVkRWxlbVBhcmVudElkXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgICAgIGJpZ2dlcmVkV2F2eVBhdGhbMF0uc2V0QXR0cmlidXRlKFwiZFwiLCBcIlwiKSxcclxuICAgICAgICAgICAgYmlnZ2VyZWRXYXZ5UGF0aFsxXS5zZXRBdHRyaWJ1dGUoXCJkXCIsIFwiXCIpLFxyXG4gICAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlcmVkRWxlbVJlY3Quc2V0QXR0cmlidXRlTlMoXHJcbiAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICBcInN0cm9rZVwiLFxyXG4gICAgICAgICAgICAgIGB1cmwoIyR7Y2xpY2tSZWYuY3VycmVudC5iaWdnZXJlZEVsZW1QYXJlbnRJZH1TdmdGcmFtZVN0b3BDb2xvcilgXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbVJlY3Quc2V0QXR0cmlidXRlTlMoXHJcbiAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICBcInN0cm9rZVwiLFxyXG4gICAgICAgICAgICAgIFwidXJsKCNTdmdJdm9yeSlcIlxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICB0cmFuc2Zvcm1BbGxFYWNoTWVudXMoc3ZnRnJhbWVWYWx1ZXMsIGV4dGVuZGluZ1NpemUsIGVsZW1QYXJlbnRJZCksXHJcbiAgICAgICAgICAgIChiaWdnZXJlZFRleHQuc3R5bGUuZGlzcGxheSA9IFwiaW5pdGlhbFwiKSxcclxuICAgICAgICAgICAgKGJpZ2dlcmVkQ29udGVudFJlZi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIpLFxyXG4gICAgICAgICAgICAoYmlnZ2VyZWRDb250ZW50UmVmLnN0eWxlLnpJbmRleCA9IC0xKSxcclxuICAgICAgICAgICAgKGJpZ2dlcmVkTmVvblJlZnNbMF0uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCIpLFxyXG4gICAgICAgICAgICAoYmlnZ2VyZWROZW9uUmVmc1sxXS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIiksXHJcbiAgICAgICAgICAgIGNoZWNrQ2FsbGluZ0FzdHJvbmF1dCgpLFxyXG4gICAgICAgICAgXSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNyZWF0ZVdhdnlBbmltYXRpb24oZXh0ZW5kaW5nU2l6ZVtcInN2Z0ZyYW1lUGFja2FnZVwiXSk7XHJcbiAgICAgICAgICAgICAgdGV4dFJlZi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgY29udGVudFJlZi5zdHlsZS5kaXNwbGF5ID0gXCJpbml0aWFsXCI7XHJcbiAgICAgICAgICAgICAgY29udGVudFJlZi5zdHlsZS56SW5kZXggPSAzO1xyXG4gICAgICAgICAgICAgIGJpZ2dlcmVkTmVvblJlZnNbMF0uc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG4gICAgICAgICAgICAgIGJpZ2dlcmVkTmVvblJlZnNbMV0uc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG4gICAgICAgICAgICAgIHNldENsaWNrQWZ0ZXJDb250ZXh0KGVsZW1QYXJlbnRJZCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICBjbGlja1JlZi5jdXJyZW50Lm9uQW5pbSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJlbHNlXCIpO1xyXG4gICAgICAgICAgY29uc3QgYmlnZ2VyZWRXYXZ5UGF0aCA9IGNsaWNrUmVmLmN1cnJlbnQud2F2eVBhdGg7XHJcbiAgICAgICAgICBjb25zdCBiaWdnZXJlZFRleHQgPSBjbGlja1JlZi5jdXJyZW50LnRleHRSZWY7XHJcbiAgICAgICAgICBjb25zdCBiaWdnZXJlZENvbnRlbnRSZWYgPSBjbGlja1JlZi5jdXJyZW50LmNvbnRlbnRSZWY7XHJcbiAgICAgICAgICBjb25zdCBiaWdnZXJlZE5lb25SZWZzID0gY2xpY2tSZWYuY3VycmVudC5iaWdnZXJOZW9uUmVmcztcclxuXHJcbiAgICAgICAgICBjbGlja1JlZi5jdXJyZW50Lm9uQW5pbSA9IHRydWU7XHJcbiAgICAgICAgICBzZXRDbGlja0NvbnRleHQoeyBvbjogZmFsc2UsIGJpZ2dlcjogbnVsbCwgYmlnZ2VyZWQ6IG51bGwgfSk7XHJcbiAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlcmVkRWxlbSA9IGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbTtcclxuICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyZWRFbGVtUGFyZW50SWQgPVxyXG4gICAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW1QYXJlbnRJZDtcclxuICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyZWRFbGVtUmVjdCA9IGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbVJlY3Q7XHJcbiAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW0gPSBudWxsO1xyXG4gICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5tZW51RXh0ZW5kZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICBsZXQgZXh0ZW5kaW5nU2l6ZSA9IHtcclxuICAgICAgICAgICAgTEk6IFtcclxuICAgICAgICAgICAgICB7IGVsZW1JZDogXCJ3b3JrXCIsIHdpZHRoOiBcIjUwJVwiLCBoZWlnaHQ6IFwiNTAlXCIgfSxcclxuICAgICAgICAgICAgICB7IGVsZW1JZDogXCJza2lsbFwiLCB3aWR0aDogXCI1MCVcIiwgaGVpZ2h0OiBcIjUwJVwiIH0sXHJcbiAgICAgICAgICAgICAgeyBlbGVtSWQ6IFwicGFpbnRcIiwgd2lkdGg6IFwiNTAlXCIsIGhlaWdodDogXCI1MCVcIiB9LFxyXG4gICAgICAgICAgICAgIHsgZWxlbUlkOiBcImluZm9cIiwgd2lkdGg6IFwiNTAlXCIsIGhlaWdodDogXCI1MCVcIiB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICBpZiAoaW5uZXJXaWR0aCA+IDgwMCkgd2F2eUFuaW0uY3VycmVudC5UTC5wYXVzZSgwKTtcclxuICAgICAgICAgIGZ1bmN0aW9uIGNoZWNrQ2FsbGluZ0FzdHJvbmF1dCgpIHtcclxuICAgICAgICAgICAgaWYgKCFsaWdodGVyVmVyc2lvbi5jdXJyZW50KSBwYXVzZUFzdHJvbmF1dCgpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIFByb21pc2UuYWxsKFtcclxuICAgICAgICAgICAgaG9tZUdzYXBUcmFuc2l0aW9uKGNsaWNrUmVmLmN1cnJlbnQubWVudUV4dGVuZGVkKSxcclxuICAgICAgICAgICAgbG9nb0Rpc3BsYXlEaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgZGVtb0NsaWVudEhlaWdodDogZGVtb1JlZi5jdXJyZW50LmNsaWVudEhlaWdodCxcclxuICAgICAgICAgICAgICBsb2dvQ2xpZW50V2lkdGg6XHJcbiAgICAgICAgICAgICAgICAoKChpbm5lcldpZHRoICogKDEwMCAtIFRWLnN5bWV0cnlEZW1vTWVudSkpIC8gMTAwKSAqXHJcbiAgICAgICAgICAgICAgICAgIFRWLmxvZ29XaWR0aCkgL1xyXG4gICAgICAgICAgICAgICAgMTAwLFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgYmlnZ2VyZWRXYXZ5UGF0aFswXS5zZXRBdHRyaWJ1dGUoXCJkXCIsIFwiXCIpLFxyXG4gICAgICAgICAgICBiaWdnZXJlZFdhdnlQYXRoWzFdLnNldEF0dHJpYnV0ZShcImRcIiwgXCJcIiksXHJcbiAgICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyZWRFbGVtUmVjdC5zZXRBdHRyaWJ1dGVOUyhcclxuICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgIFwic3Ryb2tlXCIsXHJcbiAgICAgICAgICAgICAgYHVybCgjJHtjbGlja1JlZi5jdXJyZW50LmJpZ2dlcmVkRWxlbVBhcmVudElkfVN2Z0ZyYW1lU3RvcENvbG9yKWBcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgdHJhbnNmb3JtQWxsRWFjaE1lbnVzKHN2Z0ZyYW1lVmFsdWVzLCBleHRlbmRpbmdTaXplLCBlbGVtUGFyZW50SWQpLFxyXG4gICAgICAgICAgICAoYmlnZ2VyZWRUZXh0LnN0eWxlLmRpc3BsYXkgPSBcImluaXRpYWxcIiksXHJcbiAgICAgICAgICAgIChiaWdnZXJlZENvbnRlbnRSZWYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiKSxcclxuICAgICAgICAgICAgKGJpZ2dlcmVkQ29udGVudFJlZi5zdHlsZS56SW5kZXggPSAtMSksXHJcbiAgICAgICAgICAgIChiaWdnZXJlZE5lb25SZWZzWzBdLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiKSxcclxuICAgICAgICAgICAgKGJpZ2dlcmVkTmVvblJlZnNbMV0uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCIpLFxyXG4gICAgICAgICAgICBjaGVja0NhbGxpbmdBc3Ryb25hdXQoKSxcclxuICAgICAgICAgICAgc2V0Q2xpY2tBZnRlckNvbnRleHQobnVsbCksXHJcbiAgICAgICAgICBdKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgbmVvblJlZnNbMF0uc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG4gICAgICAgICAgICBuZW9uUmVmc1sxXS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbiAgICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQgPSB7XHJcbiAgICAgICAgICAgICAgb25BbmltOiBmYWxzZSxcclxuICAgICAgICAgICAgICBhY3RpdmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgbWVudUV4dGVuZGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICBiaWdnZXJFbGVtUGFyZW50SWQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgYmlnZ2VyRWxlbTogbnVsbCxcclxuICAgICAgICAgICAgICBiaWdnZXJFbGVtUmVjdDogbnVsbCxcclxuICAgICAgICAgICAgICBiaWdnZXJOZW9uUmVmczogW10sXHJcbiAgICAgICAgICAgICAgYmlnZ2VyZWRFbGVtOiBudWxsLFxyXG4gICAgICAgICAgICAgIGJpZ2dlcmVkRWxlbVBhcmVudElkOiBudWxsLFxyXG4gICAgICAgICAgICAgIGJpZ2dlcmVkRWxlbVJlY3Q6IG51bGwsXHJcbiAgICAgICAgICAgICAgd2F2eVBhdGg6IFtdLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgW3N2Z0ZyYW1lVmFsdWVzXVxyXG4gICk7XHJcblxyXG4gIC8vPT09PT09PT09PT09PT09PT1sb2FkZXI9PT09PT09PT09PT09PT09PT09PT0vL1xyXG5cclxuICBjb25zdCBvcGVuTGlnaHRlclZlcnNpb24gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBsaWdodGVyVmVyc2lvbi5jdXJyZW50ID0gdHJ1ZTtcclxuICAgIHJlbW92ZVNjZW5lKCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpZ2h0ZXJWZXJzaW9uXCIpLmlubmVySFRNTCA9XHJcbiAgICAgIFwiVGhpcyBpcyBsaWdodGVyIHZlcnNpb25cIjtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwid29ya2luZz9cIik7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9hZGVyQW5pbVwiKS5jbGFzc0xpc3QuYWRkKFwibG9hZGVyRmFkZU91dFRyYW5zXCIpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvYWRlckNvbnRhaW5lclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgIH0sIDEyMDApO1xyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICAvLz09PT09PT09PT09PT09PT09bG9hZGVyPT09PT09PT09PT09PT09PT09PT09Ly9cclxuXHJcbiAgcmV0dXJuIHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBpZD1cIm1hc3RlclwiIHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwifX0+XHJcbiAgICAgICAgPGRpdiBpZD1cImxvYWRlckNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBpZD1cImxvYWRlckFuaW1cIj5Mb2FkJm5ic3A7Jm5ic3A7bmc8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgaWQ9XCJsaWdodGVyVmVyc2lvblwiIG9uQ2xpY2s9e29wZW5MaWdodGVyVmVyc2lvbn0+XHJcbiAgICAgICAgICAgIENsaWNrIHRvIHRoZSBsaWdodGVyIHZlcnNpb24gPGJyIC8+IHdoaWNoIGRvZXNuJ3QgY29udGFpbiBUSFJFRSBKU1xyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEV4dGVuZE1lbnVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtleHRlbmRNZW51fT5cclxuICAgICAgICAgIDxMb2dvRGlzcGxheUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgbG9nb0Rpc3BsYXksIGxvZ29EaXNwbGF5RGlzcGF0Y2ggfX0gPlxyXG4gICAgICAgICAgICA8TWVudVNpemVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHdvcmtfc3R5bGVMSSwgc2tpbGxfc3R5bGVMSSwgcGFpbnRfc3R5bGVMSSwgaW5mb19zdHlsZUxJLCB3b3JrX3N0eWxlU3ZnRnJhbWVQYWNrLCBza2lsbF9zdHlsZVN2Z0ZyYW1lUGFjaywgcGFpbnRfc3R5bGVTdmdGcmFtZVBhY2ssIGluZm9fc3R5bGVTdmdGcmFtZVBhY2t9fT5cclxuICAgICAgICAgICAgICA8Q2xpY2tDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjbGlja0NvbnRleHR9PlxyXG4gICAgICAgICAgICAgICAgPENsaWNrQWZ0ZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjbGlja0FmdGVyQ29udGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgIDxIb21lTGF5b3V0UmVuZGVyIHZhbHM9e3sgcmVmczogeyBkZW1vUmVmLCBsb2dvUmVmIH0sIG1lbnVWYWx1ZXM6IG1lbnVWYWx1ZXMuY3VycmVudCwgc3ZnRnJhbWVWYWx1ZXNJbW11dGFibGU6IHN2Z0ZyYW1lVmFsdWVzSW1tdXRhYmxlLmN1cnJlbnQsIGNsaWNrQ29udGV4dDogY2xpY2tDb250ZXh0fX0vPlxyXG4gICAgICAgICAgICAgICAgPC9DbGlja0FmdGVyQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgICAgICAgICA8L0NsaWNrQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgICAgICAgPC9NZW51U2l6ZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgICA8L0xvZ29EaXNwbGF5Q29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgICA8L0V4dGVuZE1lbnVDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfSwgWyBsb2dvRGlzcGxheSwgd29ya19zdHlsZUxJLCB3b3JrX3N0eWxlU3ZnRnJhbWVQYWNrLCBza2lsbF9zdHlsZVN2Z0ZyYW1lUGFjaywgcGFpbnRfc3R5bGVTdmdGcmFtZVBhY2ssIGluZm9fc3R5bGVTdmdGcmFtZVBhY2ssIGNsaWNrQ29udGV4dCwgY2xpY2tBZnRlckNvbnRleHRdKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIEhvbWVMYXlvdXRSZW5kZXIocHJvcHMpIHtcclxuICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tSG9tZUxheW91dFJlbmRlci0tLS0tLS0tLS0tLS0tLS0tXCIpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8RGVtbyByZWZzPXtwcm9wcy52YWxzLnJlZnN9IC8+XHJcbiAgICAgIDxNZW51IHZhbHM9e3sgbWVudVZhbHVlczogcHJvcHMudmFscy5tZW51VmFsdWVzLCBzdmdGcmFtZVZhbHVlc0ltbXV0YWJsZTogcHJvcHMudmFscy5zdmdGcmFtZVZhbHVlc0ltbXV0YWJsZX19IC8+XHJcblxyXG4gICAgICA8ZGl2IGlkPVwidGhyZWVKU0NvdmVyXCI+PC9kaXY+XHJcbiAgICAgIDxkaXYgaWQ9XCJ0aHJlZUpTQ2FudmFzXCI+PC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVMYXlvdXQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=