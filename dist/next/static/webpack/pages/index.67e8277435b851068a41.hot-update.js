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
      test();
    }

    if (mode.current.widerMode !== mode.current._widerMode) {
      console.log('widerMode mode changed', mode.current.widerMode);
      mode.current.widerMode = !mode.current.widerMode;
      wider;
      test();
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
  }, []);

  function test() {
    console.log('is it working?', 3);
  } // function disableClick(){
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
          lineNumber: 575,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: "lighterVersion",
          onClick: openLighterVersion,
          children: ["Click to the lighter version ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 577,
            columnNumber: 42
          }, _this), " which doesn't contain THREE JS"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 576,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 574,
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
                  lineNumber: 585,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 584,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 583,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 582,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 581,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 580,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 573,
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
      lineNumber: 600,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Menu_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
      vals: {
        menuValues: props.vals.menuValues,
        svgFrameValuesImmutable: props.vals.svgFrameValuesImmutable
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 601,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "threeJSCover"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 603,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "threeJSCanvas"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 604,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lTGF5b3V0LmpzeCJdLCJuYW1lcyI6WyJFeHRlbmRNZW51Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJMb2dvRGlzcGxheUNvbnRleHQiLCJNZW51U2l6ZUNvbnRleHQiLCJDbGlja0NvbnRleHQiLCJDbGlja0FmdGVyQ29udGV4dCIsImxvZ29EaXNwbGF5UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiaW5uZXJXaWR0aCIsInVuZGVmaW5lZCIsImlubmVySGVpZ2h0IiwiZGVtb0NsaWVudEhlaWdodCIsImxvZ29DbGllbnRXaWR0aCIsImxvZ29faGVpZ2hlciIsImxvZ29fd2lkZXIiLCJIb21lTGF5b3V0IiwiY29uc29sZSIsImxvZyIsInVzZU1lbnVTaXplIiwid29ya19zZXRMSV9zaXplIiwid29ya19zZXRzdmdGcmFtZVBhY2tTaXplIiwid29ya19zdHlsZUxJIiwid29ya19zdHlsZVN2Z0ZyYW1lUGFjayIsIndvcmtfY2hhbmdlSGllcmFyY2h5U3ZnRnJhbWVQYWNrIiwic2tpbGxfc2V0TElfc2l6ZSIsInNraWxsX3NldHN2Z0ZyYW1lUGFja1NpemUiLCJza2lsbF9zdHlsZUxJIiwic2tpbGxfc3R5bGVTdmdGcmFtZVBhY2siLCJza2lsbF9jaGFuZ2VIaWVyYXJjaHlTdmdGcmFtZVBhY2siLCJwYWludF9zZXRMSV9zaXplIiwicGFpbnRfc2V0c3ZnRnJhbWVQYWNrU2l6ZSIsInBhaW50X3N0eWxlTEkiLCJwYWludF9zdHlsZVN2Z0ZyYW1lUGFjayIsInBhaW50X2NoYW5nZUhpZXJhcmNoeVN2Z0ZyYW1lUGFjayIsImluZm9fc2V0TElfc2l6ZSIsImluZm9fc2V0c3ZnRnJhbWVQYWNrU2l6ZSIsImluZm9fc3R5bGVMSSIsImluZm9fc3R5bGVTdmdGcmFtZVBhY2siLCJpbmZvX2NoYW5nZUhpZXJhcmNoeVN2Z0ZyYW1lUGFjayIsImxpZ2h0ZXJWZXJzaW9uIiwidXNlUmVmIiwidXNlU3RhdGUiLCJzdmdGcmFtZURlZmF1bHQiLCJyYWRpdXMiLCJ3YXZ5UGF0aCIsImV4dHJhU3BhY2UiLCJzdHJva2VXaWR0aCIsInJlY3QiLCJ3YXZ5Iiwic3ZnRnJhbWVWYWx1ZXMiLCJzZXRTdmdGcmFtZVZhbHVlcyIsInN2Z0ZyYW1lVmFsdWVzSW1tdXRhYmxlIiwieCIsInkiLCJyeCIsInJ5IiwibXVsdGlwbHkiLCJzY2FsZSIsInNwZWVkIiwiZmlsbCIsIm9uIiwiYmlnZ2VyIiwiYmlnZ2VyZWQiLCJjbGlja0NvbnRleHQiLCJzZXRDbGlja0NvbnRleHQiLCJjbGlja0FmdGVyQ29udGV4dCIsInNldENsaWNrQWZ0ZXJDb250ZXh0IiwiY2xpY2tSZWYiLCJvbkFuaW0iLCJhY3RpdmUiLCJtZW51RXh0ZW5kZWQiLCJiaWdnZXJFbGVtUGFyZW50SWQiLCJiaWdnZXJFbGVtIiwiYmlnZ2VyRWxlbVJlY3QiLCJiaWdnZXJOZW9uUmVmcyIsImJpZ2dlcmVkRWxlbSIsImJpZ2dlcmVkRWxlbVBhcmVudElkIiwiYmlnZ2VyZWRFbGVtUmVjdCIsImV4dGVuZGluZ1JlcXVlc3RBbmltUmVmIiwid2F2eUFuaW0iLCJUTCIsInBvaW50cyIsImRlbW9SZWYiLCJsb2dvUmVmIiwibW9kZSIsIm1vYmlsZU1vZGUiLCJfbW9iaWxlTW9kZSIsIndpZGVyTW9kZSIsIl93aWRlck1vZGUiLCJtZW51VmFsdWVzIiwiaWQiLCJvcmRlciIsInN0b3BDb2xvciIsInN0cm9rZUNvbG9yIiwiYWxsRWxlbXMiLCJkZW1vVmlkZW9IZWlnaHQiLCJ1c2VSZWR1Y2VyIiwibG9nb0Rpc3BsYXkiLCJsb2dvRGlzcGxheURpc3BhdGNoIiwiY2hhbmdlTW9kZSIsInVzZUNhbGxiYWNrIiwibW9iaWxlIiwid2lkZXIiLCJjdXJyZW50IiwidGVzdCIsInVzZUVmZmVjdCIsIm1hcCIsImVsZW0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYXN0cm9uYXV0IiwiaG9tZUdzYXBTZXQiLCJ1cGRhdGVTdmdGcmFtZVZhbHVlcyIsIl9yYWRpdXMiLCJfd2F2eVBhdGgiLCJNYXRoIiwiYWJzIiwiX3N0cm9rZVdpZHRoIiwiX3N2Z0ZyYW1lRGVmYXVsdCIsIlRWIiwic3ZnRnJhbWVEZWZhdWx0U2l6ZTE0MDAiLCJzdmdGcmFtZURlZmF1bHRTaXplIiwic3ZnRnJhbWVEZWZhdWx0U2l6ZTgwMCIsInN2Z0ZyYW1lRGVmYXVsdFNpemVTbWFsbGVyU2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwiZm9yRWFjaCIsImV2YWwiLCJ1cGRhdGVSZXNpemUiLCJyZW1haW5FeHRlbmRpbmdNZW51IiwiY3JlYXRlV2F2eUFuaW1hdGlvbiIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZXRBdHRyaWJ1dGVOUyIsInRyYW5zZm9ybUFsbEVhY2hNZW51cyIsIl9zdmdGcmFtZVZhbHVlcyIsImV4dGVuZGluZ1NpemUiLCJlbGVtUGFyZW50SWQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIk5GIiwiZiIsImRpciIsImFkZENTU21lbnV0cmFuc2l0aW9uIiwiTEkiLCJvYmoiLCJzaXplIiwiY2hpbGRFbGVtcyIsImUiLCJmaXJzdEVsZW1lbnRDaGlsZCIsImFuaW0iLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInVwZGF0ZSIsInNldEF0dHJpYnV0ZSIsInR3ZWVuQ2FyZGluYWwiLCJwb2ludHMxIiwicG9pbnRzMiIsImRhdGFQb2ludHMiLCJwb2ludHNUd2VlbjEiLCJwb2ludHNUd2VlbjIiLCJnc2FwIiwidGltZWxpbmUiLCJvblVwZGF0ZSIsInJlc3VtZSIsImdldERhdGFQb2ludHMiLCJpIiwibGVuZ3RoIiwiZHVyYXRpb24iLCJyYW5kb20iLCJ0d2VlbjEiLCJ0byIsInJlcGVhdCIsInlveW8iLCJlYXNlIiwiU2luZSIsImVhc2VJbk91dCIsInR3ZWVuMiIsImFkZCIsInBhdXNlZCIsInBhdXNlIiwiZXh0ZW5kTWVudSIsInRleHRSZWYiLCJjb250ZW50UmVmIiwibmVvblJlZnMiLCJwYXJlbnRFbGVtZW50IiwiY2hlY2tDYWxsaW5nQXN0cm9uYXV0IiwiY2FsbEFzdHJvbmF1dCIsImdldERlbW9WaWRlb0hlaWdodCIsImdldFZhbHVlc1RvVW5TeW1ldHJ5RWFjaE1lbnUiLCJhbGwiLCJob21lR3NhcFRyYW5zaXRpb24iLCJ1blN5bWV0cnlEZW1vTWVudSIsImxvZ29XaWR0aCIsInRoZW4iLCJzdHlsZSIsImRpc3BsYXkiLCJ6SW5kZXgiLCJiaWdnZXJlZFdhdnlQYXRoIiwiYmlnZ2VyZWRUZXh0IiwiYmlnZ2VyZWRDb250ZW50UmVmIiwiYmlnZ2VyZWROZW9uUmVmcyIsInZpc2liaWxpdHkiLCJwYXVzZUFzdHJvbmF1dCIsImVsZW1JZCIsInN5bWV0cnlEZW1vTWVudSIsIm9wZW5MaWdodGVyVmVyc2lvbiIsInJlbW92ZVNjZW5lIiwiaW5uZXJIVE1MIiwiZXZlbnQiLCJjbGFzc0xpc3QiLCJzZXRUaW1lb3V0IiwidXNlTWVtbyIsImNvbG9yIiwicmVmcyIsIkhvbWVMYXlvdXRSZW5kZXIiLCJwcm9wcyIsInZhbHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLGlCQUFpQixnQkFBR0MsMkRBQWEsRUFBdkM7QUFDQSxJQUFNQyxrQkFBa0IsZ0JBQUdELDJEQUFhLEVBQXhDO0FBQ0EsSUFBTUUsZUFBZSxnQkFBR0YsMkRBQWEsRUFBckM7QUFDQSxJQUFNRyxZQUFZLGdCQUFHSCwyREFBYSxFQUFsQztBQUNBLElBQU1JLGlCQUFpQixnQkFBR0osMkRBQWEsRUFBdkM7O0FBRVAsSUFBTUssa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFDNUM7QUFDQSxNQUFJQyxVQUFVLElBQUlDLFNBQWxCLEVBQTZCO0FBQzNCLFFBQUlELFVB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O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRjtBQUFBLGtCQURGO0FBU0Q7O01BWFF3SyxnQjtBQVlNNU0seUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjdlODI3NzQzNWI4NTEwNjhhNDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlQ29udGV4dCx1c2VFZmZlY3QsdXNlU3RhdGUsdXNlUmVkdWNlcix1c2VDYWxsYmFjayx1c2VSZWYsdXNlTWVtb30gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBEZW1vIGZyb20gXCIuL0RlbW8uanN4XCI7XHJcbmltcG9ydCBNZW51IGZyb20gXCIuL01lbnUuanN4XCI7XHJcbmltcG9ydCBUViBmcm9tIFwiLi4vcHVibGljL2Fzc2V0cy9qcy90cmFuc2l0aW9uVmFsdWVcIjtcclxuaW1wb3J0IHVzZU1lbnVTaXplIGZyb20gXCIuLi9ob29rcy91c2VNZW51U2l6ZVwiO1xyXG5pbXBvcnQgeyBob21lR3NhcFNldCwgZ2V0RGVtb1ZpZGVvSGVpZ2h0LCBob21lR3NhcFRyYW5zaXRpb24sIGdldFZhbHVlc1RvVW5TeW1ldHJ5RWFjaE1lbnUsIHR3ZWVuQ2FyZGluYWwsIGdldERhdGFQb2ludHMsIHJhbmRvbSwgYWRkQ1NTbWVudXRyYW5zaXRpb259IGZyb20gXCIuLi9wdWJsaWMvYXNzZXRzL2pzL3V0aWxpdGllcy5qc1wiO1xyXG5pbXBvcnQgYXN0cm9uYXV0LCB7IGNhbGxBc3Ryb25hdXQsIHBhdXNlQXN0cm9uYXV0LCByZW1vdmVTY2VuZX0gZnJvbSBcIi4uL3B1YmxpYy9hc3NldHMvanMvYXN0cm9uYXV0LmpzXCI7XHJcbmltcG9ydCB7IGdzYXAsIFNpbmUgfSBmcm9tIFwiZ3NhcFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEV4dGVuZE1lbnVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5leHBvcnQgY29uc3QgTG9nb0Rpc3BsYXlDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5leHBvcnQgY29uc3QgTWVudVNpemVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5leHBvcnQgY29uc3QgQ2xpY2tDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5leHBvcnQgY29uc3QgQ2xpY2tBZnRlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBsb2dvRGlzcGxheVJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKCdsb2dvRGlzcGxheSByZWR1Y2VyIGlzIHdvcmtpbmcnKVxyXG4gIGlmIChpbm5lcldpZHRoICE9IHVuZGVmaW5lZCkge1xyXG4gICAgaWYgKGlubmVyV2lkdGggPiA4MDApIHtcclxuICAgICAgaWYgKGlubmVyV2lkdGggPiBpbm5lckhlaWdodCkge1xyXG4gICAgICAgIGlmIChhY3Rpb24uZGVtb0NsaWVudEhlaWdodCAvIDMgPCAoYWN0aW9uLmxvZ29DbGllbnRXaWR0aCAqIDQuNSkgLyA2KSB7XHJcbiAgICAgICAgICBzdGF0ZSA9IHsgbG9nb19oZWlnaGVyOiBcIm5vbmVcIiwgbG9nb193aWRlcjogXCJpbml0aWFsXCIgfTtcclxuICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3RhdGUgPSB7IGxvZ29faGVpZ2hlcjogXCJpbml0aWFsXCIsIGxvZ29fd2lkZXI6IFwibm9uZVwiIH07XHJcbiAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN0YXRlID0geyBsb2dvX2hlaWdoZXI6IFwiaW5pdGlhbFwiLCBsb2dvX3dpZGVyOiBcIm5vbmVcIiB9O1xyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3RhdGUgPSB7IGxvZ29faGVpZ2hlcjogXCJub25lXCIsIGxvZ29fd2lkZXI6IFwiaW5pdGlhbFwiIH07XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBIb21lTGF5b3V0ID0gKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwiLS0tSG9tZUxheW91dC0tLVwiKTtcclxuICBjb25zdCBbIHdvcmtfc2V0TElfc2l6ZSwgd29ya19zZXRzdmdGcmFtZVBhY2tTaXplLCB3b3JrX3N0eWxlTEksIHdvcmtfc3R5bGVTdmdGcmFtZVBhY2ssIHdvcmtfY2hhbmdlSGllcmFyY2h5U3ZnRnJhbWVQYWNrXSA9IHVzZU1lbnVTaXplKFwid29ya1wiKTtcclxuICBjb25zdCBbIHNraWxsX3NldExJX3NpemUsIHNraWxsX3NldHN2Z0ZyYW1lUGFja1NpemUsIHNraWxsX3N0eWxlTEksIHNraWxsX3N0eWxlU3ZnRnJhbWVQYWNrLCBza2lsbF9jaGFuZ2VIaWVyYXJjaHlTdmdGcmFtZVBhY2tdID0gdXNlTWVudVNpemUoXCJza2lsbFwiKTtcclxuICBjb25zdCBbIHBhaW50X3NldExJX3NpemUsIHBhaW50X3NldHN2Z0ZyYW1lUGFja1NpemUsIHBhaW50X3N0eWxlTEksIHBhaW50X3N0eWxlU3ZnRnJhbWVQYWNrLCBwYWludF9jaGFuZ2VIaWVyYXJjaHlTdmdGcmFtZVBhY2tdID0gdXNlTWVudVNpemUoXCJwYWludFwiKTtcclxuICBjb25zdCBbIGluZm9fc2V0TElfc2l6ZSwgaW5mb19zZXRzdmdGcmFtZVBhY2tTaXplLCBpbmZvX3N0eWxlTEksIGluZm9fc3R5bGVTdmdGcmFtZVBhY2ssIGluZm9fY2hhbmdlSGllcmFyY2h5U3ZnRnJhbWVQYWNrXSA9IHVzZU1lbnVTaXplKFwiaW5mb1wiKTtcclxuXHJcbiAgY29uc3QgbGlnaHRlclZlcnNpb24gPSB1c2VSZWYoZmFsc2UpO1xyXG5cclxuICBjb25zdCBbc3ZnRnJhbWVWYWx1ZXMsIHNldFN2Z0ZyYW1lVmFsdWVzXSA9IHVzZVN0YXRlKHsgc3ZnRnJhbWVEZWZhdWx0OiB1bmRlZmluZWQsIHJhZGl1czogdW5kZWZpbmVkLCB3YXZ5UGF0aDogdW5kZWZpbmVkLCBleHRyYVNwYWNlOiB1bmRlZmluZWQsIHN0cm9rZVdpZHRoOiB7IHJlY3Q6IFwiMHB4XCIsIHdhdnk6IFwiMHB4XCIgfX0pO1xyXG4gIGNvbnN0IHN2Z0ZyYW1lVmFsdWVzSW1tdXRhYmxlID0gdXNlUmVmKHsgeDogMCwgeTogMCwgcng6IDUsIHJ5OiA1LCBtdWx0aXBseTogMywgc2NhbGU6IDEsIHNwZWVkOiBbMiwgM10sIGZpbGw6IFwibm9uZVwifSk7XHJcblxyXG4gIGNvbnN0IFtjbGlja0NvbnRleHQsIHNldENsaWNrQ29udGV4dF0gPSB1c2VTdGF0ZSh7IG9uOiBmYWxzZSwgYmlnZ2VyOiBudWxsLCBiaWdnZXJlZDogbnVsbH0pO1xyXG4gIGNvbnN0IFtjbGlja0FmdGVyQ29udGV4dCwgc2V0Q2xpY2tBZnRlckNvbnRleHRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgY2xpY2tSZWYgPSB1c2VSZWYoeyBvbkFuaW06IGZhbHNlLCBhY3RpdmU6IHRydWUsIG1lbnVFeHRlbmRlZDogZmFsc2UsIGJpZ2dlckVsZW1QYXJlbnRJZDogbnVsbCwgYmlnZ2VyRWxlbTogbnVsbCwgYmlnZ2VyRWxlbVJlY3Q6IG51bGwsIGJpZ2dlck5lb25SZWZzOiBbXSwgYmlnZ2VyZWRFbGVtOiBudWxsLCBiaWdnZXJlZEVsZW1QYXJlbnRJZDogbnVsbCwgYmlnZ2VyZWRFbGVtUmVjdDogbnVsbCwgd2F2eVBhdGg6IFtdfSk7XHJcblxyXG4gIGNvbnN0IGV4dGVuZGluZ1JlcXVlc3RBbmltUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IHdhdnlBbmltID0gdXNlUmVmKHsgVEw6IG51bGwsIHBvaW50czogbnVsbCB9KTtcclxuXHJcbiAgY29uc3QgZGVtb1JlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBsb2dvUmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBjb25zdCBtb2RlID0gdXNlUmVmKHsgbW9iaWxlTW9kZTogbnVsbCwgX21vYmlsZU1vZGU6IG51bGwsIHdpZGVyTW9kZTogbnVsbCwgX3dpZGVyTW9kZTogbnVsbH0pO1xyXG5cclxuXHJcbiAgLy8gY29uc3Qgd2F2eUFuaW0uY3VycmVudC5wb2ludHMgdXNlUmVmKCk7XHJcblxyXG4gIGNvbnN0IG1lbnVWYWx1ZXMgPSB1c2VSZWYoW3sgaWQ6IFwid29ya1wiLCBvcmRlcjogMSwgc3RvcENvbG9yOiBbXCJyZ2IoMjIwLCA1MSwgMzUpXCIsIFwicmdiKDIxMiwgMTE2LCA0MylcIl0sIHN0cm9rZUNvbG9yOiBbXCIjZmYzYjI5XCIsIFwiI2ZmOGMzNFwiXX0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBpZDogXCJza2lsbFwiLCBvcmRlcjogMiwgc3RvcENvbG9yOiBbXCJyZ2IoMTY4LCA2MywgMjA5KVwiLCBcInJnYigxOTIsIDQ5LCA5MSlcIl0sIHN0cm9rZUNvbG9yOiBbXCIjY2Q0ZGZmXCIsIFwiI2ZmNDE3OVwiXX0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBpZDogXCJwYWludFwiLCBvcmRlcjogMywgc3RvcENvbG9yOiBbXCJyZ2IoMjI1LCAxNDksIDQ2KVwiLCBcInJnYig0OCwgMTcxLCAxNTIpXCJdLCBzdHJva2VDb2xvcjogW1wiI2ZmYTkzNFwiLCBcIiMzMGFiOThcIl19LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgaWQ6IFwiaW5mb1wiLCBvcmRlcjogNCwgc3RvcENvbG9yOiBbXCJyZ2IoMjAwLCA4NiwgMTc3KVwiLCBcInJnYig3NSwgMTczLCAyMDkpXCJdLCBzdHJva2VDb2xvcjogW1wiI2ZmNmVlMlwiLCBcIiM1Y2QzZmZcIl19XSk7XHJcbiAgY29uc3QgYWxsRWxlbXMgPSB1c2VSZWYoKTtcclxuXHJcbiAgbGV0IGRlbW9WaWRlb0hlaWdodDtcclxuXHJcbiAgY29uc3QgW2xvZ29EaXNwbGF5LCBsb2dvRGlzcGxheURpc3BhdGNoXSA9IHVzZVJlZHVjZXIobG9nb0Rpc3BsYXlSZWR1Y2VyLCB7XHJcbiAgICBsb2dvX2hlaWdoZXI6IFwibm9uZVwiLFxyXG4gICAgbG9nb193aWRlcjogXCJub25lXCIsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGNoYW5nZU1vZGU9IHVzZUNhbGxiYWNrKChtb2JpbGU9bnVsbCwgd2lkZXI9bnVsbCk9PntcclxuICAgIG1vZGUuY3VycmVudC5fbW9iaWxlTW9kZSA9IGlubmVyV2lkdGggPD0gODAwID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgbW9kZS5jdXJyZW50Ll93aWRlck1vZGUgPSBpbm5lcldpZHRoID49IDE0MDAgPyB0cnVlIDogZmFsc2U7XHJcblxyXG4gICAgaWYgKG1vZGUuY3VycmVudC5tb2JpbGVNb2RlICE9PSBtb2RlLmN1cnJlbnQuX21vYmlsZU1vZGUpIHtcclxuICAgICAgY29uc29sZS5sb2coJ21vYmlsZU1vZGUgbW9kZSBjaGFuZ2VkJywgbW9kZS5jdXJyZW50Lm1vYmlsZU1vZGUpXHJcbiAgICAgIG1vZGUuY3VycmVudC5tb2JpbGVNb2RlID0gIW1vZGUuY3VycmVudC5tb2JpbGVNb2RlO1xyXG4gICAgICBtb2JpbGU7XHJcbiAgICAgIHRlc3QoKTtcclxuICAgIH1cclxuICAgIGlmIChtb2RlLmN1cnJlbnQud2lkZXJNb2RlICE9PSBtb2RlLmN1cnJlbnQuX3dpZGVyTW9kZSkge1xyXG4gICAgICBjb25zb2xlLmxvZygnd2lkZXJNb2RlIG1vZGUgY2hhbmdlZCcsIG1vZGUuY3VycmVudC53aWRlck1vZGUpXHJcbiAgICAgIG1vZGUuY3VycmVudC53aWRlck1vZGUgPSAhbW9kZS5jdXJyZW50LndpZGVyTW9kZTtcclxuICAgICAgd2lkZXI7XHJcbiAgICAgIHRlc3QoKTtcclxuICAgIH1cclxuICB9LFtdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbW9kZS5jdXJyZW50Lm1vYmlsZU1vZGUgPSBpbm5lcldpZHRoIDw9IDgwMCA/IHRydWUgOiBmYWxzZTtcclxuICAgIG1vZGUuY3VycmVudC53aWRlck1vZGUgPSBpbm5lcldpZHRoID49IDE0MDAgPyB0cnVlIDogZmFsc2U7XHJcbiAgICBtb2RlLmN1cnJlbnQuX21vYmlsZU1vZGUgPSBtb2RlLmN1cnJlbnQubW9iaWxlTW9kZTtcclxuICAgIG1vZGUuY3VycmVudC5fd2lkZXJNb2RlID0gbW9kZS5jdXJyZW50LndpZGVyTW9kZTtcclxuXHJcbiAgICBhbGxFbGVtcy5jdXJyZW50ID0gbWVudVZhbHVlcy5jdXJyZW50Lm1hcCgoZWxlbSkgPT4ge1xyXG4gICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbS5pZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBhc3Ryb25hdXQoKTtcclxuICAgIGhvbWVHc2FwU2V0KGNsaWNrUmVmLmN1cnJlbnQubWVudUV4dGVuZGVkLCB0cnVlKTtcclxuICAgIHVwZGF0ZVN2Z0ZyYW1lVmFsdWVzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCB1cGRhdGVTdmdGcmFtZVZhbHVlcyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwidXBkYXRlU3ZnRnJhbWVWYWx1ZXMgaXMgY2FsbGluZ1wiKTtcclxuICAgIGxldCBfcmFkaXVzID0gaW5uZXJXaWR0aCA+IDgwMCA/IChpbm5lcldpZHRoID4gMTQwMCA/IDkgOiA3KSA6IDU7XHJcbiAgICBsZXQgX3dhdnlQYXRoID0gTWF0aC5hYnMoaW5uZXJXaWR0aCAtIGlubmVyV2lkdGgpICogMC4wMSArIDI1O1xyXG4gICAgbGV0IF9zdHJva2VXaWR0aCA9XHJcbiAgICAgIGlubmVyV2lkdGggPiA4MDBcclxuICAgICAgICA/IGlubmVyV2lkdGggPiAxNDAwXHJcbiAgICAgICAgICA/IHsgcmVjdDogXCIwLjVyZW1cIiwgd2F2eTogXCIwLjdyZW1cIiB9XHJcbiAgICAgICAgICA6IHsgcmVjdDogXCIwLjV2d1wiLCB3YXZ5OiBcIjF2d1wiIH1cclxuICAgICAgICA6IHsgcmVjdDogXCIwLjNyZW1cIiwgd2F2eTogXCIwLjVyZW1cIiB9O1xyXG4gICAgbGV0IF9zdmdGcmFtZURlZmF1bHQ7XHJcblxyXG4gICAgaWYgKGlubmVyV2lkdGggPiAxNDAwKSB7XHJcbiAgICAgIF9zdmdGcmFtZURlZmF1bHQgPSBUVi5zdmdGcmFtZURlZmF1bHRTaXplMTQwMDtcclxuICAgIH0gZWxzZSBpZiAoaW5uZXJXaWR0aCA+IDgwMCkge1xyXG4gICAgICBfc3ZnRnJhbWVEZWZhdWx0ID0gVFYuc3ZnRnJhbWVEZWZhdWx0U2l6ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChjbGlja1JlZi5jdXJyZW50Lm1lbnVFeHRlbmRlZCA9PSBmYWxzZSkge1xyXG4gICAgICAgIF9zdmdGcmFtZURlZmF1bHQgPSBUVi5zdmdGcmFtZURlZmF1bHRTaXplODAwO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIF9zdmdGcmFtZURlZmF1bHQgPSBUVi5zdmdGcmFtZURlZmF1bHRTaXplU21hbGxlclNpemU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRTdmdGcmFtZVZhbHVlcyh7XHJcbiAgICAgIC4uLnN2Z0ZyYW1lVmFsdWVzLFxyXG4gICAgICBzdmdGcmFtZURlZmF1bHQ6IHsgd2lkdGg6IF9zdmdGcmFtZURlZmF1bHQsIGhlaWdodDogX3N2Z0ZyYW1lRGVmYXVsdCB9LFxyXG4gICAgICByYWRpdXM6IF9yYWRpdXMsXHJcbiAgICAgIHdhdnlQYXRoOiBfd2F2eVBhdGgsXHJcbiAgICAgIGV4dHJhU3BhY2U6IF9yYWRpdXMgKiA1LFxyXG4gICAgICBzdHJva2VXaWR0aDogX3N0cm9rZVdpZHRoLFxyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHN2Z0ZyYW1lVmFsdWVzLnJhZGl1cyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGlmIChjbGlja1JlZi5jdXJyZW50Lm1lbnVFeHRlbmRlZCkge1xyXG4gICAgICAgIG1lbnVWYWx1ZXMuY3VycmVudC5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICAgICAgICBpZiAoY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtUGFyZW50SWQgIT09IGVsZW0uaWQpIHtcclxuICAgICAgICAgICAgZXZhbChlbGVtLmlkICsgXCJfY2hhbmdlSGllcmFyY2h5U3ZnRnJhbWVQYWNrXCIpKHN2Z0ZyYW1lVmFsdWVzKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZW51VmFsdWVzLmN1cnJlbnQuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgICAgICAgZXZhbChlbGVtLmlkICsgXCJfY2hhbmdlSGllcmFyY2h5U3ZnRnJhbWVQYWNrXCIpKHN2Z0ZyYW1lVmFsdWVzKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFtzdmdGcmFtZVZhbHVlc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IHVwZGF0ZVJlc2l6ZSA9ICgpID0+IHtcclxuXHJcblxyXG4gICAgICBob21lR3NhcFNldCggY2xpY2tSZWYuY3VycmVudC5tZW51RXh0ZW5kZWQsIG1vZGUuY3VycmVudC5tb2JpbGVNb2RlICE9PSBtb2RlLmN1cnJlbnQuX21vYmlsZU1vZGUgKTtcclxuXHJcbiAgICAgIGlmIChjbGlja1JlZi5jdXJyZW50Lm1lbnVFeHRlbmRlZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzaXplIGlzIHdvcmtpbmdcIik7XHJcbiAgICAgICAgcmVtYWluRXh0ZW5kaW5nTWVudSgpO1xyXG4gICAgICAgIGNyZWF0ZVdhdnlBbmltYXRpb24oe1xyXG4gICAgICAgICAgd2lkdGg6IGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbS5jbGllbnRXaWR0aCxcclxuICAgICAgICAgIGhlaWdodDogY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtLmNsaWVudEhlaWdodCxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBjaGFuZ2VNb2RlKHVwZGF0ZVN2Z0ZyYW1lVmFsdWVzKCksdXBkYXRlU3ZnRnJhbWVWYWx1ZXMoKSk7XHJcbiAgICAgIFxyXG4gICAgfTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHVwZGF0ZVJlc2l6ZSk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB1cGRhdGVSZXNpemUpO1xyXG4gICAgfTtcclxuICB9LCBbc3ZnRnJhbWVWYWx1ZXNdKTtcclxuXHJcbiAgY29uc3QgcmVtYWluRXh0ZW5kaW5nTWVudSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbVJlY3Quc2V0QXR0cmlidXRlTlMoIG51bGwsIFwid2lkdGhcIiwgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtLmNsaWVudFdpZHRoICk7XHJcbiAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW1SZWN0LnNldEF0dHJpYnV0ZU5TKCBudWxsLCBcImhlaWdodFwiLCBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW0uY2xpZW50SGVpZ2h0ICk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBmdW5jdGlvbiB0ZXN0KCl7XHJcbiAgICBjb25zb2xlLmxvZygnaXMgaXQgd29ya2luZz8nLDMpXHJcbiAgfVxyXG4gIC8vIGZ1bmN0aW9uIGRpc2FibGVDbGljaygpe1xyXG4gIC8vICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XHJcbiAgLy8gICAgIGFjdGl2ZUNsaWNrID0gZmFsc2U7XHJcbiAgLy8gICAgIGNvbnNvbGUubG9nKGFjdGl2ZUNsaWNrKTtcclxuICAvLyAgICAgcmVzb2x2ZSgpO1xyXG4gIC8vICAgfSlcclxuICAvLyB9XHJcblxyXG4gIC8vIC0tLS0tICAgdGhlIHJlYXNvbiBJIHB1dCBzdmdGcmFtZVZhbHVlIGFzIGFuIGFyZ3VtZW50LCBub3QganVzdCB1c2luZyBzdmdGcmFtZVZhbHVlIGFzIGEgUmVmLFxyXG4gIC8vIC0tLS0tIGlzIEkgZG9uJ3Qgd2FudCB0byByZXJlbmRlciBhbGwgdGhpcyBmdW5jdGlvbnMgd2hlbmV2ZXIgc3ZnRnJhbWVWYWx1ZXMgY2hhbmdlcy5cclxuICBjb25zdCB0cmFuc2Zvcm1BbGxFYWNoTWVudXMgPSB1c2VDYWxsYmFjayhcclxuICAgIChfc3ZnRnJhbWVWYWx1ZXMsIGV4dGVuZGluZ1NpemUsIGVsZW1QYXJlbnRJZCkgPT4ge1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IE5GID0gVFZbXCJtZW51RHVyYXRpb25cIl0gKiA2MDtcclxuXHJcbiAgICAgICAgbGV0IGYgPSAwO1xyXG4gICAgICAgIGxldCBkaXIgPSAxO1xyXG5cclxuICAgICAgICBhZGRDU1NtZW51dHJhbnNpdGlvbihudWxsLCAuLi5hbGxFbGVtcy5jdXJyZW50KTtcclxuICAgICAgICBleHRlbmRpbmdTaXplLkxJLmZvckVhY2goKG9iaikgPT4ge1xyXG4gICAgICAgICAgZXZhbChvYmpbXCJlbGVtSWRcIl0gKyBcIl9zZXRMSV9zaXplXCIpKHsgd2lkdGg6IG9iai53aWR0aCwgaGVpZ2h0OiBvYmouaGVpZ2h0IH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtICE9PSBudWxsKSB7XHJcbiAgICAgICAgICBhZGRDU1NtZW51dHJhbnNpdGlvbihudWxsLCBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW0pO1xyXG4gICAgICAgICAgZXZhbChlbGVtUGFyZW50SWQgKyBcIl9jaGFuZ2VIaWVyYXJjaHlTdmdGcmFtZVBhY2tcIikoIF9zdmdGcmFtZVZhbHVlcywgZXh0ZW5kaW5nU2l6ZVtcInN2Z0ZyYW1lUGFja2FnZVwiXVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjbGlja1JlZi5jdXJyZW50LmJpZ2dlcmVkRWxlbVBhcmVudElkICE9PSBudWxsKSB7XHJcbiAgICAgICAgICBhZGRDU1NtZW51dHJhbnNpdGlvbihudWxsLCBjbGlja1JlZi5jdXJyZW50LmJpZ2dlcmVkRWxlbSk7XHJcbiAgICAgICAgICBldmFsKCBjbGlja1JlZi5jdXJyZW50LmJpZ2dlcmVkRWxlbVBhcmVudElkICsgXCJfY2hhbmdlSGllcmFyY2h5U3ZnRnJhbWVQYWNrXCIgKShfc3ZnRnJhbWVWYWx1ZXMsIHsgd2lkdGg6IF9zdmdGcmFtZVZhbHVlcy5zdmdGcmFtZURlZmF1bHQud2lkdGgsIGhlaWdodDogX3N2Z0ZyYW1lVmFsdWVzLnN2Z0ZyYW1lRGVmYXVsdC5oZWlnaHQgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaW5uZXJXaWR0aCA8IDgwMCkge1xyXG4gICAgICAgICAgY29uc3Qgc2l6ZSA9IGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbSAhPT0gbnVsbCAgPyBUVi5zdmdGcmFtZURlZmF1bHRTaXplU21hbGxlclNpemUgOiBfc3ZnRnJhbWVWYWx1ZXNbXCJzdmdGcmFtZURlZmF1bHRcIl07XHJcbiAgICAgICAgICBjb25zdCBjaGlsZEVsZW1zID0gYWxsRWxlbXMuY3VycmVudC5tYXAoKGUpID0+IGUuZmlyc3RFbGVtZW50Q2hpbGQpO1xyXG5cclxuICAgICAgICAgIGFkZENTU21lbnV0cmFuc2l0aW9uKGVsZW1QYXJlbnRJZCwgLi4uY2hpbGRFbGVtcyk7XHJcblxyXG4gICAgICAgICAgbWVudVZhbHVlcy5jdXJyZW50LmZvckVhY2goKGVsZW0pID0+IHtcclxuICAgICAgICAgICAgaWYgKGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbVBhcmVudElkICE9PSBlbGVtLmlkKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgcmVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW0uaWQgKyBcIlN2Z0ZyYW1lXCIpO1xyXG5cclxuICAgICAgICAgICAgICBldmFsKGVsZW0uaWQgKyBcIl9jaGFuZ2VIaWVyYXJjaHlTdmdGcmFtZVBhY2tcIikoX3N2Z0ZyYW1lVmFsdWVzLCB7IHdpZHRoOiBzaXplLCBoZWlnaHQ6IHNpemUgfSk7XHJcblxyXG4gICAgICAgICAgICAgIHJlY3Quc2V0QXR0cmlidXRlTlMobnVsbCwgXCJ3aWR0aFwiLCBzaXplKTtcclxuICAgICAgICAgICAgICByZWN0LnNldEF0dHJpYnV0ZU5TKG51bGwsIFwiaGVpZ2h0XCIsIHNpemUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGFuaW0oKSB7XHJcbiAgICAgICAgICBmICs9IGRpcjtcclxuICAgICAgICAgIGlmIChjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW0gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtUmVjdC5zZXRBdHRyaWJ1dGVOUyhcclxuICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgIFwid2lkdGhcIixcclxuICAgICAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW0uY2xpZW50V2lkdGhcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtUmVjdC5zZXRBdHRyaWJ1dGVOUyhcclxuICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgIFwiaGVpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtLmNsaWVudEhlaWdodFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmIChjbGlja1JlZi5jdXJyZW50LmJpZ2dlcmVkRWxlbVBhcmVudElkICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyZWRFbGVtUmVjdC5zZXRBdHRyaWJ1dGVOUyhcclxuICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgIFwid2lkdGhcIixcclxuICAgICAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlcmVkRWxlbS5jbGllbnRXaWR0aFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlcmVkRWxlbVJlY3Quc2V0QXR0cmlidXRlTlMoXHJcbiAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICBcIndpZHRoXCIsXHJcbiAgICAgICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJlZEVsZW0uY2xpZW50V2lkdGhcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGV4dGVuZGluZ1JlcXVlc3RBbmltUmVmLmN1cnJlbnQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbSk7XHJcblxyXG4gICAgICAgICAgaWYgKCEoZiAlIE5GKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIj09PT09PT1maW5pc2hlZD09PT09PT1cIik7XHJcbiAgICAgICAgICAgIC8vIG9uQW5pbSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtICE9PSBudWxsKVxyXG4gICAgICAgICAgICAgIGV2YWwoZWxlbVBhcmVudElkICsgXCJfY2hhbmdlSGllcmFyY2h5U3ZnRnJhbWVQYWNrXCIpKFxyXG4gICAgICAgICAgICAgICAgX3N2Z0ZyYW1lVmFsdWVzLFxyXG4gICAgICAgICAgICAgICAgeyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIgfVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICBldmFsKGVsZW1QYXJlbnRJZCArIFwiX2NoYW5nZUhpZXJhcmNoeVN2Z0ZyYW1lUGFja1wiKShcclxuICAgICAgICAgICAgICAgIF9zdmdGcmFtZVZhbHVlcyxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IF9zdmdGcmFtZVZhbHVlc1tcInN2Z0ZyYW1lRGVmYXVsdFwiXSxcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBfc3ZnRnJhbWVWYWx1ZXNbXCJzdmdGcmFtZURlZmF1bHRcIl0sXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGV4dGVuZGluZ1JlcXVlc3RBbmltUmVmLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc29sdmU/XCIpO1xyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFuaW0oKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgW11cclxuICApO1xyXG5cclxuICBjb25zdCBjcmVhdGVXYXZ5QW5pbWF0aW9uID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoZXh0ZW5kaW5nU2l6ZSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImNyZWF0ZVdhdnlBbmltYXRpb24gaXMgd29ya2luZ1wiKTtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA4MDApIHtcclxuICAgICAgICAgIGxldCBkYXRhUG9pbnRzLCBwb2ludHNUd2VlbjEsIHBvaW50c1R3ZWVuMjtcclxuXHJcbiAgICAgICAgICBpZiAoc3ZnRnJhbWVWYWx1ZXMud2F2eVBhdGggPiBleHRlbmRpbmdTaXplW1wid2lkdGhcIl0gLyAyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzZXRTdmdGcmFtZVZhbHVlcyh7XHJcbiAgICAgICAgICAgICAgLi4uc3ZnRnJhbWVWYWx1ZXMsXHJcbiAgICAgICAgICAgICAgd2F2eVBhdGg6IGV4dGVuZGluZ1NpemVbXCJ3aWR0aFwiXSAvIDIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmICh3YXZ5QW5pbS5jdXJyZW50LlRMID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHdhdnlBbmltLmN1cnJlbnQuVEwgPSBnc2FwLnRpbWVsaW5lKHtcclxuICAgICAgICAgICAgICBvblVwZGF0ZTogdXBkYXRlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHdhdnlBbmltLmN1cnJlbnQuVEwucmVzdW1lKCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgZGF0YVBvaW50cyA9IGdldERhdGFQb2ludHMoXHJcbiAgICAgICAgICAgIGV4dGVuZGluZ1NpemUsXHJcbiAgICAgICAgICAgIHN2Z0ZyYW1lVmFsdWVzLFxyXG4gICAgICAgICAgICBzdmdGcmFtZVZhbHVlc0ltbXV0YWJsZS5jdXJyZW50XHJcbiAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgIHdhdnlBbmltLmN1cnJlbnQucG9pbnRzID0ge1xyXG4gICAgICAgICAgICBwb2ludHMxOiBkYXRhUG9pbnRzLnBvaW50czEsXHJcbiAgICAgICAgICAgIHBvaW50czI6IGRhdGFQb2ludHMucG9pbnRzMixcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgcG9pbnRzVHdlZW4xID0gZGF0YVBvaW50cy5wb2ludHNUd2VlbjE7XHJcbiAgICAgICAgICBwb2ludHNUd2VlbjIgPSBkYXRhUG9pbnRzLnBvaW50c1R3ZWVuMjtcclxuXHJcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdhdnlBbmltLmN1cnJlbnQucG9pbnRzLnBvaW50czEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGR1cmF0aW9uID0gcmFuZG9tKFxyXG4gICAgICAgICAgICAgIHN2Z0ZyYW1lVmFsdWVzSW1tdXRhYmxlLmN1cnJlbnRbXCJzcGVlZFwiXVswXSxcclxuICAgICAgICAgICAgICBzdmdGcmFtZVZhbHVlc0ltbXV0YWJsZS5jdXJyZW50W1wic3BlZWRcIl1bMV1cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGxldCB0d2VlbjEgPSBnc2FwLnRvKHdhdnlBbmltLmN1cnJlbnQucG9pbnRzLnBvaW50czFbaV0sIHtcclxuICAgICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXHJcbiAgICAgICAgICAgICAgeDogcG9pbnRzVHdlZW4xW2ldLngsXHJcbiAgICAgICAgICAgICAgeTogcG9pbnRzVHdlZW4xW2ldLnksXHJcbiAgICAgICAgICAgICAgcmVwZWF0OiAtMSxcclxuICAgICAgICAgICAgICB5b3lvOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGVhc2U6IFNpbmUuZWFzZUluT3V0LFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGxldCB0d2VlbjIgPSBnc2FwLnRvKHdhdnlBbmltLmN1cnJlbnQucG9pbnRzLnBvaW50czJbaV0sIHtcclxuICAgICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXHJcbiAgICAgICAgICAgICAgeDogcG9pbnRzVHdlZW4yW2ldLngsXHJcbiAgICAgICAgICAgICAgeTogcG9pbnRzVHdlZW4yW2ldLnksXHJcbiAgICAgICAgICAgICAgcmVwZWF0OiAtMSxcclxuICAgICAgICAgICAgICB5b3lvOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGVhc2U6IFNpbmUuZWFzZUluT3V0LFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHdhdnlBbmltLmN1cnJlbnQuVEwuYWRkKHR3ZWVuMSwgLXJhbmRvbShkdXJhdGlvbikpO1xyXG4gICAgICAgICAgICB3YXZ5QW5pbS5jdXJyZW50LlRMLmFkZCh0d2VlbjIsIC1yYW5kb20oZHVyYXRpb24pKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBmdW5jdGlvbiB1cGRhdGUoKSB7XHJcbiAgICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQud2F2eVBhdGhbMF0uc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgICAgIFwiZFwiLFxyXG4gICAgICAgICAgICAgIHR3ZWVuQ2FyZGluYWwod2F2eUFuaW0uY3VycmVudC5wb2ludHMucG9pbnRzMSwgdHJ1ZSwgMSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY2xpY2tSZWYuY3VycmVudC53YXZ5UGF0aFsxXS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgICAgXCJkXCIsXHJcbiAgICAgICAgICAgICAgdHdlZW5DYXJkaW5hbCh3YXZ5QW5pbS5jdXJyZW50LnBvaW50cy5wb2ludHMyLCB0cnVlLCAxKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHJldHVybiB3YXZ5QW5pbS5jdXJyZW50LlRMO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAod2F2eUFuaW0uY3VycmVudC5UTCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZiAoIXdhdnlBbmltLmN1cnJlbnQuVEwucGF1c2VkKCkpIHtcclxuICAgICAgICAgICAgICB3YXZ5QW5pbS5jdXJyZW50LlRMID0gd2F2eUFuaW0uY3VycmVudC5UTC5wYXVzZSgpO1xyXG4gICAgICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQud2F2eVBhdGhbMF0uc2V0QXR0cmlidXRlKFwiZFwiLCBcIlwiKTtcclxuICAgICAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LndhdnlQYXRoWzFdLnNldEF0dHJpYnV0ZShcImRcIiwgXCJcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBbc3ZnRnJhbWVWYWx1ZXNdXHJcbiAgKTtcclxuXHJcbiAgLy8gdXNlRWZmZWN0KCgpPT57c2V0Q2xpY2tBZnRlckNvbnRleHQoJ3NraWxsJyk7fSxbXSlcclxuXHJcbiAgY29uc3QgZXh0ZW5kTWVudSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKGVsZW0sIG9yZGVyID0gMCwgdGV4dFJlZiwgY29udGVudFJlZiwgbmVvblJlZnMpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJlbGVtXCIsIGVsZW0pO1xyXG4gICAgICBjb25zdCBlbGVtUGFyZW50SWQgPSBlbGVtLnBhcmVudEVsZW1lbnQuaWQ7XHJcblxyXG4gICAgICBpZiAoY2xpY2tSZWYuY3VycmVudC5vbkFuaW0gPT09IHRydWUpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGNsaWNrUmVmLmN1cnJlbnQubWVudUV4dGVuZGVkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5vbkFuaW0gPSB0cnVlO1xyXG4gICAgICAgICAgc2V0Q2xpY2tDb250ZXh0KHsgb246IHRydWUsIGJpZ2dlcjogZWxlbVBhcmVudElkLCBiaWdnZXJlZDogbnVsbCB9KTtcclxuICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQubWVudUV4dGVuZGVkID0gdHJ1ZTtcclxuICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbVBhcmVudElkID0gZWxlbVBhcmVudElkO1xyXG4gICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtID0gZWxlbTtcclxuICAgICAgICAgIChjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW1SZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgICAgICAgIGVsZW1QYXJlbnRJZCArIFwiU3ZnRnJhbWVcIlxyXG4gICAgICAgICAgKSksXHJcbiAgICAgICAgICAgIChjbGlja1JlZi5jdXJyZW50LndhdnlQYXRoID0gW1xyXG4gICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1QYXJlbnRJZCArIFwiU3ZnV2F2eTFcIiksXHJcbiAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbVBhcmVudElkICsgXCJTdmdXYXZ5MlwiKSxcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LnRleHRSZWYgPSB0ZXh0UmVmO1xyXG4gICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5jb250ZW50UmVmID0gY29udGVudFJlZjtcclxuICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyTmVvblJlZnMgPSBuZW9uUmVmcztcclxuXHJcbiAgICAgICAgICBkZW1vVmlkZW9IZWlnaHQgPSBnZXREZW1vVmlkZW9IZWlnaHQoY2xpY2tSZWYuY3VycmVudC5tZW51RXh0ZW5kZWQpO1xyXG4gICAgICAgICAgbGV0IGV4dGVuZGluZ1NpemUgPSBnZXRWYWx1ZXNUb1VuU3ltZXRyeUVhY2hNZW51KFxyXG4gICAgICAgICAgICBkZW1vVmlkZW9IZWlnaHQsXHJcbiAgICAgICAgICAgIGVsZW0sXHJcbiAgICAgICAgICAgIG9yZGVyXHJcbiAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgIGZ1bmN0aW9uIGNoZWNrQ2FsbGluZ0FzdHJvbmF1dCgpIHtcclxuICAgICAgICAgICAgaWYgKCFsaWdodGVyVmVyc2lvbi5jdXJyZW50KSBjYWxsQXN0cm9uYXV0KGVsZW1QYXJlbnRJZCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgICAgICBob21lR3NhcFRyYW5zaXRpb24oY2xpY2tSZWYuY3VycmVudC5tZW51RXh0ZW5kZWQpLFxyXG4gICAgICAgICAgICBsb2dvRGlzcGxheURpc3BhdGNoKHsgZGVtb0NsaWVudEhlaWdodDogZGVtb1JlZi5jdXJyZW50LmNsaWVudEhlaWdodCwgbG9nb0NsaWVudFdpZHRoOiAoKChpbm5lcldpZHRoICogKDEwMCAtIFRWLnVuU3ltZXRyeURlbW9NZW51KSkgLyAxMDApICogVFYubG9nb1dpZHRoKSAvIDEwMCB9KSxcclxuICAgICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtUmVjdC5zZXRBdHRyaWJ1dGVOUyggbnVsbCwgXCJzdHJva2VcIiwgXCJ1cmwoI1N2Z0l2b3J5KVwiKSxcclxuICAgICAgICAgICAgdHJhbnNmb3JtQWxsRWFjaE1lbnVzKHN2Z0ZyYW1lVmFsdWVzLCBleHRlbmRpbmdTaXplLCBlbGVtUGFyZW50SWQpLFxyXG4gICAgICAgICAgICBjaGVja0NhbGxpbmdBc3Ryb25hdXQoKSxcclxuICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICBjcmVhdGVXYXZ5QW5pbWF0aW9uKGV4dGVuZGluZ1NpemVbXCJzdmdGcmFtZVBhY2thZ2VcIl0pO1xyXG4gICAgICAgICAgICAgIHRleHRSZWYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgIGNvbnRlbnRSZWYuc3R5bGUuZGlzcGxheSA9IFwiaW5pdGlhbFwiO1xyXG4gICAgICAgICAgICAgIGNvbnRlbnRSZWYuc3R5bGUuekluZGV4ID0gMztcclxuICAgICAgICAgICAgICBzZXRDbGlja0FmdGVyQ29udGV4dChlbGVtUGFyZW50SWQpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5vbkFuaW0gPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW1QYXJlbnRJZCAhPT0gZWxlbVBhcmVudElkKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImVsc2UgaWZcIik7XHJcbiAgICAgICAgICBjb25zdCBiaWdnZXJlZFdhdnlQYXRoID0gY2xpY2tSZWYuY3VycmVudC53YXZ5UGF0aDtcclxuICAgICAgICAgIGNvbnN0IGJpZ2dlcmVkVGV4dCA9IGNsaWNrUmVmLmN1cnJlbnQudGV4dFJlZjtcclxuICAgICAgICAgIGNvbnN0IGJpZ2dlcmVkQ29udGVudFJlZiA9IGNsaWNrUmVmLmN1cnJlbnQuY29udGVudFJlZjtcclxuICAgICAgICAgIGNvbnN0IGJpZ2dlcmVkTmVvblJlZnMgPSBjbGlja1JlZi5jdXJyZW50LmJpZ2dlck5lb25SZWZzO1xyXG5cclxuICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQub25BbmltID0gdHJ1ZTtcclxuICAgICAgICAgIHNldENsaWNrQ29udGV4dCh7IG9uOiB0cnVlLCBiaWdnZXI6IGVsZW1QYXJlbnRJZCwgYmlnZ2VyZWQ6IGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbVBhcmVudElkfSk7XHJcbiAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlcmVkRWxlbSA9IGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbTtcclxuICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyZWRFbGVtUGFyZW50SWQgPSBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW1QYXJlbnRJZDtcclxuICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyZWRFbGVtUmVjdCA9IGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbVJlY3Q7XHJcbiAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW0gPSBlbGVtO1xyXG4gICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtUGFyZW50SWQgPSBlbGVtUGFyZW50SWQ7XHJcbiAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW0gPSBlbGVtO1xyXG4gICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtUmVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCBlbGVtUGFyZW50SWQgKyBcIlN2Z0ZyYW1lXCIgKTtcclxuICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQud2F2eVBhdGggPSBbIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1QYXJlbnRJZCArIFwiU3ZnV2F2eTFcIiksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1QYXJlbnRJZCArIFwiU3ZnV2F2eTJcIildO1xyXG4gICAgICAgICAgY2xpY2tSZWYuY3VycmVudC50ZXh0UmVmID0gdGV4dFJlZjtcclxuICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuY29udGVudFJlZiA9IGNvbnRlbnRSZWY7XHJcbiAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlck5lb25SZWZzID0gbmVvblJlZnM7XHJcblxyXG4gICAgICAgICAgZGVtb1ZpZGVvSGVpZ2h0ID0gZ2V0RGVtb1ZpZGVvSGVpZ2h0KGNsaWNrUmVmLmN1cnJlbnQubWVudUV4dGVuZGVkKTtcclxuICAgICAgICAgIGxldCBleHRlbmRpbmdTaXplID0gZ2V0VmFsdWVzVG9VblN5bWV0cnlFYWNoTWVudSggZGVtb1ZpZGVvSGVpZ2h0LCBlbGVtLCBvcmRlciApO1xyXG5cclxuICAgICAgICAgIGlmIChpbm5lcldpZHRoID4gODAwKSB3YXZ5QW5pbS5jdXJyZW50LlRMLnBhdXNlKDApO1xyXG5cclxuICAgICAgICAgIGZ1bmN0aW9uIGNoZWNrQ2FsbGluZ0FzdHJvbmF1dCgpIHtcclxuICAgICAgICAgICAgaWYgKCFsaWdodGVyVmVyc2lvbi5jdXJyZW50KSBjYWxsQXN0cm9uYXV0KCBlbGVtUGFyZW50SWQsIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyZWRFbGVtUGFyZW50SWQgKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgICAgIGJpZ2dlcmVkV2F2eVBhdGhbMF0uc2V0QXR0cmlidXRlKFwiZFwiLCBcIlwiKSxcclxuICAgICAgICAgICAgYmlnZ2VyZWRXYXZ5UGF0aFsxXS5zZXRBdHRyaWJ1dGUoXCJkXCIsIFwiXCIpLFxyXG4gICAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlcmVkRWxlbVJlY3Quc2V0QXR0cmlidXRlTlMoIG51bGwsIFwic3Ryb2tlXCIsIGB1cmwoIyR7Y2xpY2tSZWYuY3VycmVudC5iaWdnZXJlZEVsZW1QYXJlbnRJZH1TdmdGcmFtZVN0b3BDb2xvcilgICksXHJcbiAgICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbVJlY3Quc2V0QXR0cmlidXRlTlMoIG51bGwsIFwic3Ryb2tlXCIsIFwidXJsKCNTdmdJdm9yeSlcIiksXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybUFsbEVhY2hNZW51cyhzdmdGcmFtZVZhbHVlcywgZXh0ZW5kaW5nU2l6ZSwgZWxlbVBhcmVudElkKSxcclxuICAgICAgICAgICAgYmlnZ2VyZWRUZXh0LnN0eWxlLmRpc3BsYXkgPSBcImluaXRpYWxcIixcclxuICAgICAgICAgICAgYmlnZ2VyZWRDb250ZW50UmVmLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIixcclxuICAgICAgICAgICAgYmlnZ2VyZWRDb250ZW50UmVmLnN0eWxlLnpJbmRleCA9IC0xLFxyXG4gICAgICAgICAgICBiaWdnZXJlZE5lb25SZWZzWzBdLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiLFxyXG4gICAgICAgICAgICBiaWdnZXJlZE5lb25SZWZzWzFdLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiLFxyXG4gICAgICAgICAgICBjaGVja0NhbGxpbmdBc3Ryb25hdXQoKSxcclxuICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICBjcmVhdGVXYXZ5QW5pbWF0aW9uKGV4dGVuZGluZ1NpemVbXCJzdmdGcmFtZVBhY2thZ2VcIl0pO1xyXG4gICAgICAgICAgICAgIHRleHRSZWYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgIGNvbnRlbnRSZWYuc3R5bGUuZGlzcGxheSA9IFwiaW5pdGlhbFwiO1xyXG4gICAgICAgICAgICAgIGNvbnRlbnRSZWYuc3R5bGUuekluZGV4ID0gMztcclxuICAgICAgICAgICAgICBiaWdnZXJlZE5lb25SZWZzWzBdLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuICAgICAgICAgICAgICBiaWdnZXJlZE5lb25SZWZzWzFdLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuICAgICAgICAgICAgICBzZXRDbGlja0FmdGVyQ29udGV4dChlbGVtUGFyZW50SWQpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5vbkFuaW0gPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZWxzZVwiKTtcclxuICAgICAgICAgIGNvbnN0IGJpZ2dlcmVkV2F2eVBhdGggPSBjbGlja1JlZi5jdXJyZW50LndhdnlQYXRoO1xyXG4gICAgICAgICAgY29uc3QgYmlnZ2VyZWRUZXh0ID0gY2xpY2tSZWYuY3VycmVudC50ZXh0UmVmO1xyXG4gICAgICAgICAgY29uc3QgYmlnZ2VyZWRDb250ZW50UmVmID0gY2xpY2tSZWYuY3VycmVudC5jb250ZW50UmVmO1xyXG4gICAgICAgICAgY29uc3QgYmlnZ2VyZWROZW9uUmVmcyA9IGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyTmVvblJlZnM7XHJcblxyXG4gICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5vbkFuaW0gPSB0cnVlO1xyXG4gICAgICAgICAgc2V0Q2xpY2tDb250ZXh0KHsgb246IGZhbHNlLCBiaWdnZXI6IG51bGwsIGJpZ2dlcmVkOiBudWxsIH0pO1xyXG4gICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJlZEVsZW0gPSBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW07XHJcbiAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlcmVkRWxlbVBhcmVudElkID0gIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbVBhcmVudElkO1xyXG4gICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJlZEVsZW1SZWN0ID0gY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtUmVjdDtcclxuICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbSA9IG51bGw7XHJcbiAgICAgICAgICBjbGlja1JlZi5jdXJyZW50Lm1lbnVFeHRlbmRlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgIGxldCBleHRlbmRpbmdTaXplID0geyBMSTogWyB7IGVsZW1JZDogXCJ3b3JrXCIsIHdpZHRoOiBcIjUwJVwiLCBoZWlnaHQ6IFwiNTAlXCIgfSwgeyBlbGVtSWQ6IFwic2tpbGxcIiwgd2lkdGg6IFwiNTAlXCIsIGhlaWdodDogXCI1MCVcIiB9LCB7IGVsZW1JZDogXCJwYWludFwiLCB3aWR0aDogXCI1MCVcIiwgaGVpZ2h0OiBcIjUwJVwiIH0sIHsgZWxlbUlkOiBcImluZm9cIiwgd2lkdGg6IFwiNTAlXCIsIGhlaWdodDogXCI1MCVcIiB9IF0gfTtcclxuXHJcbiAgICAgICAgICBpZiAoaW5uZXJXaWR0aCA+IDgwMCkgd2F2eUFuaW0uY3VycmVudC5UTC5wYXVzZSgwKTtcclxuICAgICAgICAgIGZ1bmN0aW9uIGNoZWNrQ2FsbGluZ0FzdHJvbmF1dCgpIHtcclxuICAgICAgICAgICAgaWYgKCFsaWdodGVyVmVyc2lvbi5jdXJyZW50KSBwYXVzZUFzdHJvbmF1dCgpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIFByb21pc2UuYWxsKFtcclxuICAgICAgICAgICAgaG9tZUdzYXBUcmFuc2l0aW9uKGNsaWNrUmVmLmN1cnJlbnQubWVudUV4dGVuZGVkKSxcclxuICAgICAgICAgICAgbG9nb0Rpc3BsYXlEaXNwYXRjaCh7IGRlbW9DbGllbnRIZWlnaHQ6IGRlbW9SZWYuY3VycmVudC5jbGllbnRIZWlnaHQsIGxvZ29DbGllbnRXaWR0aDogKCgoaW5uZXJXaWR0aCAqICgxMDAgLSBUVi5zeW1ldHJ5RGVtb01lbnUpKSAvIDEwMCkgKiBUVi5sb2dvV2lkdGgpIC8gMTAwIH0pLFxyXG4gICAgICAgICAgICBiaWdnZXJlZFdhdnlQYXRoWzBdLnNldEF0dHJpYnV0ZShcImRcIiwgXCJcIiksXHJcbiAgICAgICAgICAgIGJpZ2dlcmVkV2F2eVBhdGhbMV0uc2V0QXR0cmlidXRlKFwiZFwiLCBcIlwiKSxcclxuICAgICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJlZEVsZW1SZWN0LnNldEF0dHJpYnV0ZU5TKCBudWxsLCBcInN0cm9rZVwiLCBgdXJsKCMke2NsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyZWRFbGVtUGFyZW50SWR9U3ZnRnJhbWVTdG9wQ29sb3IpYCksXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybUFsbEVhY2hNZW51cyhzdmdGcmFtZVZhbHVlcywgZXh0ZW5kaW5nU2l6ZSwgZWxlbVBhcmVudElkKSxcclxuICAgICAgICAgICAgYmlnZ2VyZWRUZXh0LnN0eWxlLmRpc3BsYXkgPSBcImluaXRpYWxcIixcclxuICAgICAgICAgICAgYmlnZ2VyZWRDb250ZW50UmVmLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIixcclxuICAgICAgICAgICAgYmlnZ2VyZWRDb250ZW50UmVmLnN0eWxlLnpJbmRleCA9IC0xLFxyXG4gICAgICAgICAgICBiaWdnZXJlZE5lb25SZWZzWzBdLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiLFxyXG4gICAgICAgICAgICBiaWdnZXJlZE5lb25SZWZzWzFdLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiLFxyXG4gICAgICAgICAgICBjaGVja0NhbGxpbmdBc3Ryb25hdXQoKSxcclxuICAgICAgICAgICAgc2V0Q2xpY2tBZnRlckNvbnRleHQobnVsbCksXHJcbiAgICAgICAgICBdKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgbmVvblJlZnNbMF0uc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG4gICAgICAgICAgICBuZW9uUmVmc1sxXS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbiAgICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQgPSB7IG9uQW5pbTogZmFsc2UsIGFjdGl2ZTogdHJ1ZSwgbWVudUV4dGVuZGVkOiBmYWxzZSwgYmlnZ2VyRWxlbVBhcmVudElkOiBudWxsLCBiaWdnZXJFbGVtOiBudWxsLCBiaWdnZXJFbGVtUmVjdDogbnVsbCwgYmlnZ2VyTmVvblJlZnM6IFtdLCBiaWdnZXJlZEVsZW06IG51bGwsIGJpZ2dlcmVkRWxlbVBhcmVudElkOiBudWxsLCBiaWdnZXJlZEVsZW1SZWN0OiBudWxsLCB3YXZ5UGF0aDogW10gfTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFtzdmdGcmFtZVZhbHVlc11cclxuICApO1xyXG5cclxuICAvLz09PT09PT09PT09PT09PT09bG9hZGVyPT09PT09PT09PT09PT09PT09PT09Ly9cclxuXHJcbiAgY29uc3Qgb3BlbkxpZ2h0ZXJWZXJzaW9uID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgbGlnaHRlclZlcnNpb24uY3VycmVudCA9IHRydWU7XHJcbiAgICByZW1vdmVTY2VuZSgpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaWdodGVyVmVyc2lvblwiKS5pbm5lckhUTUwgPVxyXG4gICAgICBcIlRoaXMgaXMgbGlnaHRlciB2ZXJzaW9uXCI7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIndvcmtpbmc/XCIpO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvYWRlckFuaW1cIikuY2xhc3NMaXN0LmFkZChcImxvYWRlckZhZGVPdXRUcmFuc1wiKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2FkZXJDb250YWluZXJcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICB9LCAxMjAwKTtcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy89PT09PT09PT09PT09PT09PWxvYWRlcj09PT09PT09PT09PT09PT09PT09PS8vXHJcblxyXG4gIHJldHVybiB1c2VNZW1vKCgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgaWQ9XCJtYXN0ZXJcIiBzdHlsZT17e2NvbG9yOlwid2hpdGVcIn19PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJsb2FkZXJDb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgaWQ9XCJsb2FkZXJBbmltXCI+TG9hZCZuYnNwOyZuYnNwO25nPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwibGlnaHRlclZlcnNpb25cIiBvbkNsaWNrPXtvcGVuTGlnaHRlclZlcnNpb259PlxyXG4gICAgICAgICAgICBDbGljayB0byB0aGUgbGlnaHRlciB2ZXJzaW9uIDxiciAvPiB3aGljaCBkb2Vzbid0IGNvbnRhaW4gVEhSRUUgSlNcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxFeHRlbmRNZW51Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17ZXh0ZW5kTWVudX0+XHJcbiAgICAgICAgICA8TG9nb0Rpc3BsYXlDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGxvZ29EaXNwbGF5LCBsb2dvRGlzcGxheURpc3BhdGNoIH19ID5cclxuICAgICAgICAgICAgPE1lbnVTaXplQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB3b3JrX3N0eWxlTEksIHNraWxsX3N0eWxlTEksIHBhaW50X3N0eWxlTEksIGluZm9fc3R5bGVMSSwgd29ya19zdHlsZVN2Z0ZyYW1lUGFjaywgc2tpbGxfc3R5bGVTdmdGcmFtZVBhY2ssIHBhaW50X3N0eWxlU3ZnRnJhbWVQYWNrLCBpbmZvX3N0eWxlU3ZnRnJhbWVQYWNrfX0+XHJcbiAgICAgICAgICAgICAgPENsaWNrQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y2xpY2tDb250ZXh0fT5cclxuICAgICAgICAgICAgICAgIDxDbGlja0FmdGVyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y2xpY2tBZnRlckNvbnRleHR9PlxyXG4gICAgICAgICAgICAgICAgICA8SG9tZUxheW91dFJlbmRlciB2YWxzPXt7IHJlZnM6IHsgZGVtb1JlZiwgbG9nb1JlZiB9LCBtZW51VmFsdWVzOiBtZW51VmFsdWVzLmN1cnJlbnQsIHN2Z0ZyYW1lVmFsdWVzSW1tdXRhYmxlOiBzdmdGcmFtZVZhbHVlc0ltbXV0YWJsZS5jdXJyZW50LCBjbGlja0NvbnRleHQ6IGNsaWNrQ29udGV4dH19Lz5cclxuICAgICAgICAgICAgICAgIDwvQ2xpY2tBZnRlckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgPC9DbGlja0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgICAgIDwvTWVudVNpemVDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgICAgPC9Mb2dvRGlzcGxheUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgPC9FeHRlbmRNZW51Q29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH0sIFsgbG9nb0Rpc3BsYXksIHdvcmtfc3R5bGVMSSwgd29ya19zdHlsZVN2Z0ZyYW1lUGFjaywgc2tpbGxfc3R5bGVTdmdGcmFtZVBhY2ssIHBhaW50X3N0eWxlU3ZnRnJhbWVQYWNrLCBpbmZvX3N0eWxlU3ZnRnJhbWVQYWNrLCBjbGlja0NvbnRleHQsIGNsaWNrQWZ0ZXJDb250ZXh0XSk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBIb21lTGF5b3V0UmVuZGVyKHByb3BzKSB7XHJcbiAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLUhvbWVMYXlvdXRSZW5kZXItLS0tLS0tLS0tLS0tLS0tLVwiKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPERlbW8gcmVmcz17cHJvcHMudmFscy5yZWZzfSAvPlxyXG4gICAgICA8TWVudSB2YWxzPXt7IG1lbnVWYWx1ZXM6IHByb3BzLnZhbHMubWVudVZhbHVlcywgc3ZnRnJhbWVWYWx1ZXNJbW11dGFibGU6IHByb3BzLnZhbHMuc3ZnRnJhbWVWYWx1ZXNJbW11dGFibGV9fSAvPlxyXG5cclxuICAgICAgPGRpdiBpZD1cInRocmVlSlNDb3ZlclwiPjwvZGl2PlxyXG4gICAgICA8ZGl2IGlkPVwidGhyZWVKU0NhbnZhc1wiPjwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBIb21lTGF5b3V0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9