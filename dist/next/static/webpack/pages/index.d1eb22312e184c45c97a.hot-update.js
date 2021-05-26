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
    var test = arguments.length > 2 ? arguments[2] : undefined;
    mode.current._mobileMode = innerWidth <= 800 ? true : false;
    mode.current._widerMode = innerWidth >= 1400 ? true : false;

    if (mode.current.mobileMode !== mode.current._mobileMode) {
      console.log('mobileMode mode changed', mode.current.mobileMode);
      mode.current.mobileMode = !mode.current.mobileMode;
      mobile;
      test;
    }

    if (mode.current.widerMode !== mode.current._widerMode) {
      console.log('widerMode mode changed', mode.current.widerMode);
      mode.current.widerMode = !mode.current.widerMode;
      wider;
      test;
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

      changeMode(updateSvgFrameValues(), updateSvgFrameValues(), test(30));
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

  var test = function test(numb) {
    console.log('is it working?', numb);
  }; // function disableClick(){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lTGF5b3V0LmpzeCJdLCJuYW1lcyI6WyJFeHRlbmRNZW51Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJMb2dvRGlzcGxheUNvbnRleHQiLCJNZW51U2l6ZUNvbnRleHQiLCJDbGlja0NvbnRleHQiLCJDbGlja0FmdGVyQ29udGV4dCIsImxvZ29EaXNwbGF5UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiaW5uZXJXaWR0aCIsInVuZGVmaW5lZCIsImlubmVySGVpZ2h0IiwiZGVtb0NsaWVudEhlaWdodCIsImxvZ29DbGllbnRXaWR0aCIsImxvZ29faGVpZ2hlciIsImxvZ29fd2lkZXIiLCJIb21lTGF5b3V0IiwiY29uc29sZSIsImxvZyIsInVzZU1lbnVTaXplIiwid29ya19zZXRMSV9zaXplIiwid29ya19zZXRzdmdGcmFtZVBhY2tTaXplIiwid29ya19zdHlsZUxJIiwid29ya19zdHlsZVN2Z0ZyYW1lUGFjayIsIndvcmtfY2hhbmdlSGllcmFyY2h5U3ZnRnJhbWVQYWNrIiwic2tpbGxfc2V0TElfc2l6ZSIsInNraWxsX3NldHN2Z0ZyYW1lUGFja1NpemUiLCJza2lsbF9zdHlsZUxJIiwic2tpbGxfc3R5bGVTdmdGcmFtZVBhY2siLCJza2lsbF9jaGFuZ2VIaWVyYXJjaHlTdmdGcmFtZVBhY2siLCJwYWludF9zZXRMSV9zaXplIiwicGFpbnRfc2V0c3ZnRnJhbWVQYWNrU2l6ZSIsInBhaW50X3N0eWxlTEkiLCJwYWludF9zdHlsZVN2Z0ZyYW1lUGFjayIsInBhaW50X2NoYW5nZUhpZXJhcmNoeVN2Z0ZyYW1lUGFjayIsImluZm9fc2V0TElfc2l6ZSIsImluZm9fc2V0c3ZnRnJhbWVQYWNrU2l6ZSIsImluZm9fc3R5bGVMSSIsImluZm9fc3R5bGVTdmdGcmFtZVBhY2siLCJpbmZvX2NoYW5nZUhpZXJhcmNoeVN2Z0ZyYW1lUGFjayIsImxpZ2h0ZXJWZXJzaW9uIiwidXNlUmVmIiwidXNlU3RhdGUiLCJzdmdGcmFtZURlZmF1bHQiLCJyYWRpdXMiLCJ3YXZ5UGF0aCIsImV4dHJhU3BhY2UiLCJzdHJva2VXaWR0aCIsInJlY3QiLCJ3YXZ5Iiwic3ZnRnJhbWVWYWx1ZXMiLCJzZXRTdmdGcmFtZVZhbHVlcyIsInN2Z0ZyYW1lVmFsdWVzSW1tdXRhYmxlIiwieCIsInkiLCJyeCIsInJ5IiwibXVsdGlwbHkiLCJzY2FsZSIsInNwZWVkIiwiZmlsbCIsIm9uIiwiYmlnZ2VyIiwiYmlnZ2VyZWQiLCJjbGlja0NvbnRleHQiLCJzZXRDbGlja0NvbnRleHQiLCJjbGlja0FmdGVyQ29udGV4dCIsInNldENsaWNrQWZ0ZXJDb250ZXh0IiwiY2xpY2tSZWYiLCJvbkFuaW0iLCJhY3RpdmUiLCJtZW51RXh0ZW5kZWQiLCJiaWdnZXJFbGVtUGFyZW50SWQiLCJiaWdnZXJFbGVtIiwiYmlnZ2VyRWxlbVJlY3QiLCJiaWdnZXJOZW9uUmVmcyIsImJpZ2dlcmVkRWxlbSIsImJpZ2dlcmVkRWxlbVBhcmVudElkIiwiYmlnZ2VyZWRFbGVtUmVjdCIsImV4dGVuZGluZ1JlcXVlc3RBbmltUmVmIiwid2F2eUFuaW0iLCJUTCIsInBvaW50cyIsImRlbW9SZWYiLCJsb2dvUmVmIiwibW9kZSIsIm1vYmlsZU1vZGUiLCJfbW9iaWxlTW9kZSIsIndpZGVyTW9kZSIsIl93aWRlck1vZGUiLCJtZW51VmFsdWVzIiwiaWQiLCJvcmRlciIsInN0b3BDb2xvciIsInN0cm9rZUNvbG9yIiwiYWxsRWxlbXMiLCJkZW1vVmlkZW9IZWlnaHQiLCJ1c2VSZWR1Y2VyIiwibG9nb0Rpc3BsYXkiLCJsb2dvRGlzcGxheURpc3BhdGNoIiwiY2hhbmdlTW9kZSIsInVzZUNhbGxiYWNrIiwibW9iaWxlIiwid2lkZXIiLCJ0ZXN0IiwiY3VycmVudCIsInVzZUVmZmVjdCIsIm1hcCIsImVsZW0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYXN0cm9uYXV0IiwiaG9tZUdzYXBTZXQiLCJ1cGRhdGVTdmdGcmFtZVZhbHVlcyIsIl9yYWRpdXMiLCJfd2F2eVBhdGgiLCJNYXRoIiwiYWJzIiwiX3N0cm9rZVdpZHRoIiwiX3N2Z0ZyYW1lRGVmYXVsdCIsIlRWIiwic3ZnRnJhbWVEZWZhdWx0U2l6ZTE0MDAiLCJzdmdGcmFtZURlZmF1bHRTaXplIiwic3ZnRnJhbWVEZWZhdWx0U2l6ZTgwMCIsInN2Z0ZyYW1lRGVmYXVsdFNpemVTbWFsbGVyU2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwiZm9yRWFjaCIsImV2YWwiLCJ1cGRhdGVSZXNpemUiLCJyZW1haW5FeHRlbmRpbmdNZW51IiwiY3JlYXRlV2F2eUFuaW1hdGlvbiIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZXRBdHRyaWJ1dGVOUyIsIm51bWIiLCJ0cmFuc2Zvcm1BbGxFYWNoTWVudXMiLCJfc3ZnRnJhbWVWYWx1ZXMiLCJleHRlbmRpbmdTaXplIiwiZWxlbVBhcmVudElkIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJORiIsImYiLCJkaXIiLCJhZGRDU1NtZW51dHJhbnNpdGlvbiIsIkxJIiwib2JqIiwic2l6ZSIsImNoaWxkRWxlbXMiLCJlIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJhbmltIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJ1cGRhdGUiLCJzZXRBdHRyaWJ1dGUiLCJ0d2VlbkNhcmRpbmFsIiwicG9pbnRzMSIsInBvaW50czIiLCJkYXRhUG9pbnRzIiwicG9pbnRzVHdlZW4xIiwicG9pbnRzVHdlZW4yIiwiZ3NhcCIsInRpbWVsaW5lIiwib25VcGRhdGUiLCJyZXN1bWUiLCJnZXREYXRhUG9pbnRzIiwiaSIsImxlbmd0aCIsImR1cmF0aW9uIiwicmFuZG9tIiwidHdlZW4xIiwidG8iLCJyZXBlYXQiLCJ5b3lvIiwiZWFzZSIsIlNpbmUiLCJlYXNlSW5PdXQiLCJ0d2VlbjIiLCJhZGQiLCJwYXVzZWQiLCJwYXVzZSIsImV4dGVuZE1lbnUiLCJ0ZXh0UmVmIiwiY29udGVudFJlZiIsIm5lb25SZWZzIiwicGFyZW50RWxlbWVudCIsImNoZWNrQ2FsbGluZ0FzdHJvbmF1dCIsImNhbGxBc3Ryb25hdXQiLCJnZXREZW1vVmlkZW9IZWlnaHQiLCJnZXRWYWx1ZXNUb1VuU3ltZXRyeUVhY2hNZW51IiwiYWxsIiwiaG9tZUdzYXBUcmFuc2l0aW9uIiwidW5TeW1ldHJ5RGVtb01lbnUiLCJsb2dvV2lkdGgiLCJ0aGVuIiwic3R5bGUiLCJkaXNwbGF5IiwiekluZGV4IiwiYmlnZ2VyZWRXYXZ5UGF0aCIsImJpZ2dlcmVkVGV4dCIsImJpZ2dlcmVkQ29udGVudFJlZiIsImJpZ2dlcmVkTmVvblJlZnMiLCJ2aXNpYmlsaXR5IiwicGF1c2VBc3Ryb25hdXQiLCJlbGVtSWQiLCJzeW1ldHJ5RGVtb01lbnUiLCJvcGVuTGlnaHRlclZlcnNpb24iLCJyZW1vdmVTY2VuZSIsImlubmVySFRNTCIsImV2ZW50IiwiY2xhc3NMaXN0Iiwic2V0VGltZW91dCIsInVzZU1lbW8iLCJjb2xvciIsInJlZnMiLCJIb21lTGF5b3V0UmVuZGVyIiwicHJvcHMiLCJ2YWxzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxpQkFBaUIsZ0JBQUdDLDJEQUFhLEVBQXZDO0FBQ0EsSUFBTUMsa0JBQWtCLGdCQUFHRCwyREFBYSxFQUF4QztBQUNBLElBQU1FLGVBQWUsZ0JBQUdGLDJEQUFhLEVBQXJDO0FBQ0EsSUFBTUcsWUFBWSxnQkFBR0gsMkRBQWEsRUFBbEM7QUFDQSxJQUFNSSxpQkFBaUIsZ0JBQUdKLDJEQUFhLEVBQXZDOztBQUVQLElBQU1LLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQzVDO0FBQ0EsTUFBSUMsVUFBVSxJQUFJQyxTQUFsQixFQUE2QjtBQUMzQixR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QUE7QUFBQTtBQUFBLFlBRkYsZUFJRTtBQUFLLFFBQUUsRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQUtFO0FBQUssUUFBRSxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGO0FBQUEsa0JBREY7QUFTRDs7TUFYUXlLLGdCO0FBWU03TSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kMWViMjIzMTJlMTg0YzQ1Yzk3YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVDb250ZXh0LHVzZUVmZmVjdCx1c2VTdGF0ZSx1c2VSZWR1Y2VyLHVzZUNhbGxiYWNrLHVzZVJlZix1c2VNZW1vfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IERlbW8gZnJvbSBcIi4vRGVtby5qc3hcIjtcclxuaW1wb3J0IE1lbnUgZnJvbSBcIi4vTWVudS5qc3hcIjtcclxuaW1wb3J0IFRWIGZyb20gXCIuLi9wdWJsaWMvYXNzZXRzL2pzL3RyYW5zaXRpb25WYWx1ZVwiO1xyXG5pbXBvcnQgdXNlTWVudVNpemUgZnJvbSBcIi4uL2hvb2tzL3VzZU1lbnVTaXplXCI7XHJcbmltcG9ydCB7IGhvbWVHc2FwU2V0LCBnZXREZW1vVmlkZW9IZWlnaHQsIGhvbWVHc2FwVHJhbnNpdGlvbiwgZ2V0VmFsdWVzVG9VblN5bWV0cnlFYWNoTWVudSwgdHdlZW5DYXJkaW5hbCwgZ2V0RGF0YVBvaW50cywgcmFuZG9tLCBhZGRDU1NtZW51dHJhbnNpdGlvbn0gZnJvbSBcIi4uL3B1YmxpYy9hc3NldHMvanMvdXRpbGl0aWVzLmpzXCI7XHJcbmltcG9ydCBhc3Ryb25hdXQsIHsgY2FsbEFzdHJvbmF1dCwgcGF1c2VBc3Ryb25hdXQsIHJlbW92ZVNjZW5lfSBmcm9tIFwiLi4vcHVibGljL2Fzc2V0cy9qcy9hc3Ryb25hdXQuanNcIjtcclxuaW1wb3J0IHsgZ3NhcCwgU2luZSB9IGZyb20gXCJnc2FwXCI7XHJcblxyXG5leHBvcnQgY29uc3QgRXh0ZW5kTWVudUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcbmV4cG9ydCBjb25zdCBMb2dvRGlzcGxheUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcbmV4cG9ydCBjb25zdCBNZW51U2l6ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcbmV4cG9ydCBjb25zdCBDbGlja0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcbmV4cG9ydCBjb25zdCBDbGlja0FmdGVyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmNvbnN0IGxvZ29EaXNwbGF5UmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgLy8gY29uc29sZS5sb2coJ2xvZ29EaXNwbGF5IHJlZHVjZXIgaXMgd29ya2luZycpXHJcbiAgaWYgKGlubmVyV2lkdGggIT0gdW5kZWZpbmVkKSB7XHJcbiAgICBpZiAoaW5uZXJXaWR0aCA+IDgwMCkge1xyXG4gICAgICBpZiAoaW5uZXJXaWR0aCA+IGlubmVySGVpZ2h0KSB7XHJcbiAgICAgICAgaWYgKGFjdGlvbi5kZW1vQ2xpZW50SGVpZ2h0IC8gMyA8IChhY3Rpb24ubG9nb0NsaWVudFdpZHRoICogNC41KSAvIDYpIHtcclxuICAgICAgICAgIHN0YXRlID0geyBsb2dvX2hlaWdoZXI6IFwibm9uZVwiLCBsb2dvX3dpZGVyOiBcImluaXRpYWxcIiB9O1xyXG4gICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzdGF0ZSA9IHsgbG9nb19oZWlnaGVyOiBcImluaXRpYWxcIiwgbG9nb193aWRlcjogXCJub25lXCIgfTtcclxuICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3RhdGUgPSB7IGxvZ29faGVpZ2hlcjogXCJpbml0aWFsXCIsIGxvZ29fd2lkZXI6IFwibm9uZVwiIH07XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzdGF0ZSA9IHsgbG9nb19oZWlnaGVyOiBcIm5vbmVcIiwgbG9nb193aWRlcjogXCJpbml0aWFsXCIgfTtcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IEhvbWVMYXlvdXQgPSAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coXCItLS1Ib21lTGF5b3V0LS0tXCIpO1xyXG4gIGNvbnN0IFsgd29ya19zZXRMSV9zaXplLCB3b3JrX3NldHN2Z0ZyYW1lUGFja1NpemUsIHdvcmtfc3R5bGVMSSwgd29ya19zdHlsZVN2Z0ZyYW1lUGFjaywgd29ya19jaGFuZ2VIaWVyYXJjaHlTdmdGcmFtZVBhY2tdID0gdXNlTWVudVNpemUoXCJ3b3JrXCIpO1xyXG4gIGNvbnN0IFsgc2tpbGxfc2V0TElfc2l6ZSwgc2tpbGxfc2V0c3ZnRnJhbWVQYWNrU2l6ZSwgc2tpbGxfc3R5bGVMSSwgc2tpbGxfc3R5bGVTdmdGcmFtZVBhY2ssIHNraWxsX2NoYW5nZUhpZXJhcmNoeVN2Z0ZyYW1lUGFja10gPSB1c2VNZW51U2l6ZShcInNraWxsXCIpO1xyXG4gIGNvbnN0IFsgcGFpbnRfc2V0TElfc2l6ZSwgcGFpbnRfc2V0c3ZnRnJhbWVQYWNrU2l6ZSwgcGFpbnRfc3R5bGVMSSwgcGFpbnRfc3R5bGVTdmdGcmFtZVBhY2ssIHBhaW50X2NoYW5nZUhpZXJhcmNoeVN2Z0ZyYW1lUGFja10gPSB1c2VNZW51U2l6ZShcInBhaW50XCIpO1xyXG4gIGNvbnN0IFsgaW5mb19zZXRMSV9zaXplLCBpbmZvX3NldHN2Z0ZyYW1lUGFja1NpemUsIGluZm9fc3R5bGVMSSwgaW5mb19zdHlsZVN2Z0ZyYW1lUGFjaywgaW5mb19jaGFuZ2VIaWVyYXJjaHlTdmdGcmFtZVBhY2tdID0gdXNlTWVudVNpemUoXCJpbmZvXCIpO1xyXG5cclxuICBjb25zdCBsaWdodGVyVmVyc2lvbiA9IHVzZVJlZihmYWxzZSk7XHJcblxyXG4gIGNvbnN0IFtzdmdGcmFtZVZhbHVlcywgc2V0U3ZnRnJhbWVWYWx1ZXNdID0gdXNlU3RhdGUoeyBzdmdGcmFtZURlZmF1bHQ6IHVuZGVmaW5lZCwgcmFkaXVzOiB1bmRlZmluZWQsIHdhdnlQYXRoOiB1bmRlZmluZWQsIGV4dHJhU3BhY2U6IHVuZGVmaW5lZCwgc3Ryb2tlV2lkdGg6IHsgcmVjdDogXCIwcHhcIiwgd2F2eTogXCIwcHhcIiB9fSk7XHJcbiAgY29uc3Qgc3ZnRnJhbWVWYWx1ZXNJbW11dGFibGUgPSB1c2VSZWYoeyB4OiAwLCB5OiAwLCByeDogNSwgcnk6IDUsIG11bHRpcGx5OiAzLCBzY2FsZTogMSwgc3BlZWQ6IFsyLCAzXSwgZmlsbDogXCJub25lXCJ9KTtcclxuXHJcbiAgY29uc3QgW2NsaWNrQ29udGV4dCwgc2V0Q2xpY2tDb250ZXh0XSA9IHVzZVN0YXRlKHsgb246IGZhbHNlLCBiaWdnZXI6IG51bGwsIGJpZ2dlcmVkOiBudWxsfSk7XHJcbiAgY29uc3QgW2NsaWNrQWZ0ZXJDb250ZXh0LCBzZXRDbGlja0FmdGVyQ29udGV4dF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBjbGlja1JlZiA9IHVzZVJlZih7IG9uQW5pbTogZmFsc2UsIGFjdGl2ZTogdHJ1ZSwgbWVudUV4dGVuZGVkOiBmYWxzZSwgYmlnZ2VyRWxlbVBhcmVudElkOiBudWxsLCBiaWdnZXJFbGVtOiBudWxsLCBiaWdnZXJFbGVtUmVjdDogbnVsbCwgYmlnZ2VyTmVvblJlZnM6IFtdLCBiaWdnZXJlZEVsZW06IG51bGwsIGJpZ2dlcmVkRWxlbVBhcmVudElkOiBudWxsLCBiaWdnZXJlZEVsZW1SZWN0OiBudWxsLCB3YXZ5UGF0aDogW119KTtcclxuXHJcbiAgY29uc3QgZXh0ZW5kaW5nUmVxdWVzdEFuaW1SZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3Qgd2F2eUFuaW0gPSB1c2VSZWYoeyBUTDogbnVsbCwgcG9pbnRzOiBudWxsIH0pO1xyXG5cclxuICBjb25zdCBkZW1vUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IGxvZ29SZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGNvbnN0IG1vZGUgPSB1c2VSZWYoeyBtb2JpbGVNb2RlOiBudWxsLCBfbW9iaWxlTW9kZTogbnVsbCwgd2lkZXJNb2RlOiBudWxsLCBfd2lkZXJNb2RlOiBudWxsfSk7XHJcblxyXG5cclxuICAvLyBjb25zdCB3YXZ5QW5pbS5jdXJyZW50LnBvaW50cyB1c2VSZWYoKTtcclxuXHJcbiAgY29uc3QgbWVudVZhbHVlcyA9IHVzZVJlZihbeyBpZDogXCJ3b3JrXCIsIG9yZGVyOiAxLCBzdG9wQ29sb3I6IFtcInJnYigyMjAsIDUxLCAzNSlcIiwgXCJyZ2IoMjEyLCAxMTYsIDQzKVwiXSwgc3Ryb2tlQ29sb3I6IFtcIiNmZjNiMjlcIiwgXCIjZmY4YzM0XCJdfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGlkOiBcInNraWxsXCIsIG9yZGVyOiAyLCBzdG9wQ29sb3I6IFtcInJnYigxNjgsIDYzLCAyMDkpXCIsIFwicmdiKDE5MiwgNDksIDkxKVwiXSwgc3Ryb2tlQ29sb3I6IFtcIiNjZDRkZmZcIiwgXCIjZmY0MTc5XCJdfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGlkOiBcInBhaW50XCIsIG9yZGVyOiAzLCBzdG9wQ29sb3I6IFtcInJnYigyMjUsIDE0OSwgNDYpXCIsIFwicmdiKDQ4LCAxNzEsIDE1MilcIl0sIHN0cm9rZUNvbG9yOiBbXCIjZmZhOTM0XCIsIFwiIzMwYWI5OFwiXX0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBpZDogXCJpbmZvXCIsIG9yZGVyOiA0LCBzdG9wQ29sb3I6IFtcInJnYigyMDAsIDg2LCAxNzcpXCIsIFwicmdiKDc1LCAxNzMsIDIwOSlcIl0sIHN0cm9rZUNvbG9yOiBbXCIjZmY2ZWUyXCIsIFwiIzVjZDNmZlwiXX1dKTtcclxuICBjb25zdCBhbGxFbGVtcyA9IHVzZVJlZigpO1xyXG5cclxuICBsZXQgZGVtb1ZpZGVvSGVpZ2h0O1xyXG5cclxuICBjb25zdCBbbG9nb0Rpc3BsYXksIGxvZ29EaXNwbGF5RGlzcGF0Y2hdID0gdXNlUmVkdWNlcihsb2dvRGlzcGxheVJlZHVjZXIsIHtcclxuICAgIGxvZ29faGVpZ2hlcjogXCJub25lXCIsXHJcbiAgICBsb2dvX3dpZGVyOiBcIm5vbmVcIixcclxuICB9KTtcclxuXHJcbiAgY29uc3QgY2hhbmdlTW9kZT0gdXNlQ2FsbGJhY2soKG1vYmlsZT1udWxsLCB3aWRlcj1udWxsLCB0ZXN0KT0+e1xyXG4gICAgbW9kZS5jdXJyZW50Ll9tb2JpbGVNb2RlID0gaW5uZXJXaWR0aCA8PSA4MDAgPyB0cnVlIDogZmFsc2U7XHJcbiAgICBtb2RlLmN1cnJlbnQuX3dpZGVyTW9kZSA9IGlubmVyV2lkdGggPj0gMTQwMCA/IHRydWUgOiBmYWxzZTtcclxuXHJcbiAgICBpZiAobW9kZS5jdXJyZW50Lm1vYmlsZU1vZGUgIT09IG1vZGUuY3VycmVudC5fbW9iaWxlTW9kZSkge1xyXG4gICAgICBjb25zb2xlLmxvZygnbW9iaWxlTW9kZSBtb2RlIGNoYW5nZWQnLCBtb2RlLmN1cnJlbnQubW9iaWxlTW9kZSlcclxuICAgICAgbW9kZS5jdXJyZW50Lm1vYmlsZU1vZGUgPSAhbW9kZS5jdXJyZW50Lm1vYmlsZU1vZGU7XHJcbiAgICAgIG1vYmlsZTtcclxuICAgICAgdGVzdDtcclxuICAgIH1cclxuICAgIGlmIChtb2RlLmN1cnJlbnQud2lkZXJNb2RlICE9PSBtb2RlLmN1cnJlbnQuX3dpZGVyTW9kZSkge1xyXG4gICAgICBjb25zb2xlLmxvZygnd2lkZXJNb2RlIG1vZGUgY2hhbmdlZCcsIG1vZGUuY3VycmVudC53aWRlck1vZGUpXHJcbiAgICAgIG1vZGUuY3VycmVudC53aWRlck1vZGUgPSAhbW9kZS5jdXJyZW50LndpZGVyTW9kZTtcclxuICAgICAgd2lkZXI7XHJcbiAgICAgIHRlc3Q7XHJcbiAgICB9XHJcbiAgfSxbXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIG1vZGUuY3VycmVudC5tb2JpbGVNb2RlID0gaW5uZXJXaWR0aCA8PSA4MDAgPyB0cnVlIDogZmFsc2U7XHJcbiAgICBtb2RlLmN1cnJlbnQud2lkZXJNb2RlID0gaW5uZXJXaWR0aCA+PSAxNDAwID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgbW9kZS5jdXJyZW50Ll9tb2JpbGVNb2RlID0gbW9kZS5jdXJyZW50Lm1vYmlsZU1vZGU7XHJcbiAgICBtb2RlLmN1cnJlbnQuX3dpZGVyTW9kZSA9IG1vZGUuY3VycmVudC53aWRlck1vZGU7XHJcblxyXG4gICAgYWxsRWxlbXMuY3VycmVudCA9IG1lbnVWYWx1ZXMuY3VycmVudC5tYXAoKGVsZW0pID0+IHtcclxuICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW0uaWQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgYXN0cm9uYXV0KCk7XHJcbiAgICBob21lR3NhcFNldChjbGlja1JlZi5jdXJyZW50Lm1lbnVFeHRlbmRlZCwgdHJ1ZSk7XHJcbiAgICB1cGRhdGVTdmdGcmFtZVZhbHVlcygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgdXBkYXRlU3ZnRnJhbWVWYWx1ZXMgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcInVwZGF0ZVN2Z0ZyYW1lVmFsdWVzIGlzIGNhbGxpbmdcIik7XHJcbiAgICBsZXQgX3JhZGl1cyA9IGlubmVyV2lkdGggPiA4MDAgPyAoaW5uZXJXaWR0aCA+IDE0MDAgPyA5IDogNykgOiA1O1xyXG4gICAgbGV0IF93YXZ5UGF0aCA9IE1hdGguYWJzKGlubmVyV2lkdGggLSBpbm5lcldpZHRoKSAqIDAuMDEgKyAyNTtcclxuICAgIGxldCBfc3Ryb2tlV2lkdGggPVxyXG4gICAgICBpbm5lcldpZHRoID4gODAwXHJcbiAgICAgICAgPyBpbm5lcldpZHRoID4gMTQwMFxyXG4gICAgICAgICAgPyB7IHJlY3Q6IFwiMC41cmVtXCIsIHdhdnk6IFwiMC43cmVtXCIgfVxyXG4gICAgICAgICAgOiB7IHJlY3Q6IFwiMC41dndcIiwgd2F2eTogXCIxdndcIiB9XHJcbiAgICAgICAgOiB7IHJlY3Q6IFwiMC4zcmVtXCIsIHdhdnk6IFwiMC41cmVtXCIgfTtcclxuICAgIGxldCBfc3ZnRnJhbWVEZWZhdWx0O1xyXG5cclxuICAgIGlmIChpbm5lcldpZHRoID4gMTQwMCkge1xyXG4gICAgICBfc3ZnRnJhbWVEZWZhdWx0ID0gVFYuc3ZnRnJhbWVEZWZhdWx0U2l6ZTE0MDA7XHJcbiAgICB9IGVsc2UgaWYgKGlubmVyV2lkdGggPiA4MDApIHtcclxuICAgICAgX3N2Z0ZyYW1lRGVmYXVsdCA9IFRWLnN2Z0ZyYW1lRGVmYXVsdFNpemU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoY2xpY2tSZWYuY3VycmVudC5tZW51RXh0ZW5kZWQgPT0gZmFsc2UpIHtcclxuICAgICAgICBfc3ZnRnJhbWVEZWZhdWx0ID0gVFYuc3ZnRnJhbWVEZWZhdWx0U2l6ZTgwMDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBfc3ZnRnJhbWVEZWZhdWx0ID0gVFYuc3ZnRnJhbWVEZWZhdWx0U2l6ZVNtYWxsZXJTaXplO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3ZnRnJhbWVWYWx1ZXMoe1xyXG4gICAgICAuLi5zdmdGcmFtZVZhbHVlcyxcclxuICAgICAgc3ZnRnJhbWVEZWZhdWx0OiB7IHdpZHRoOiBfc3ZnRnJhbWVEZWZhdWx0LCBoZWlnaHQ6IF9zdmdGcmFtZURlZmF1bHQgfSxcclxuICAgICAgcmFkaXVzOiBfcmFkaXVzLFxyXG4gICAgICB3YXZ5UGF0aDogX3dhdnlQYXRoLFxyXG4gICAgICBleHRyYVNwYWNlOiBfcmFkaXVzICogNSxcclxuICAgICAgc3Ryb2tlV2lkdGg6IF9zdHJva2VXaWR0aCxcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzdmdGcmFtZVZhbHVlcy5yYWRpdXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBpZiAoY2xpY2tSZWYuY3VycmVudC5tZW51RXh0ZW5kZWQpIHtcclxuICAgICAgICBtZW51VmFsdWVzLmN1cnJlbnQuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbVBhcmVudElkICE9PSBlbGVtLmlkKSB7XHJcbiAgICAgICAgICAgIGV2YWwoZWxlbS5pZCArIFwiX2NoYW5nZUhpZXJhcmNoeVN2Z0ZyYW1lUGFja1wiKShzdmdGcmFtZVZhbHVlcyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVudVZhbHVlcy5jdXJyZW50LmZvckVhY2goKGVsZW0pID0+IHtcclxuICAgICAgICAgIGV2YWwoZWxlbS5pZCArIFwiX2NoYW5nZUhpZXJhcmNoeVN2Z0ZyYW1lUGFja1wiKShzdmdGcmFtZVZhbHVlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbc3ZnRnJhbWVWYWx1ZXNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCB1cGRhdGVSZXNpemUgPSAoKSA9PiB7XHJcblxyXG5cclxuICAgICAgaG9tZUdzYXBTZXQoIGNsaWNrUmVmLmN1cnJlbnQubWVudUV4dGVuZGVkLCBtb2RlLmN1cnJlbnQubW9iaWxlTW9kZSAhPT0gbW9kZS5jdXJyZW50Ll9tb2JpbGVNb2RlICk7XHJcblxyXG4gICAgICBpZiAoY2xpY2tSZWYuY3VycmVudC5tZW51RXh0ZW5kZWQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlc2l6ZSBpcyB3b3JraW5nXCIpO1xyXG4gICAgICAgIHJlbWFpbkV4dGVuZGluZ01lbnUoKTtcclxuICAgICAgICBjcmVhdGVXYXZ5QW5pbWF0aW9uKHtcclxuICAgICAgICAgIHdpZHRoOiBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW0uY2xpZW50V2lkdGgsXHJcbiAgICAgICAgICBoZWlnaHQ6IGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbS5jbGllbnRIZWlnaHQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgY2hhbmdlTW9kZSh1cGRhdGVTdmdGcmFtZVZhbHVlcygpLHVwZGF0ZVN2Z0ZyYW1lVmFsdWVzKCksIHRlc3QoMzApKTtcclxuICAgICAgXHJcbiAgICB9O1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdXBkYXRlUmVzaXplKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHVwZGF0ZVJlc2l6ZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtzdmdGcmFtZVZhbHVlc10pO1xyXG5cclxuICBjb25zdCByZW1haW5FeHRlbmRpbmdNZW51ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtUmVjdC5zZXRBdHRyaWJ1dGVOUyggbnVsbCwgXCJ3aWR0aFwiLCBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW0uY2xpZW50V2lkdGggKTtcclxuICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbVJlY3Quc2V0QXR0cmlidXRlTlMoIG51bGwsIFwiaGVpZ2h0XCIsIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbS5jbGllbnRIZWlnaHQgKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHRlc3Q9IChudW1iKT0+e1xyXG4gICAgY29uc29sZS5sb2coJ2lzIGl0IHdvcmtpbmc/JyxudW1iKVxyXG4gIH1cclxuICAvLyBmdW5jdGlvbiBkaXNhYmxlQ2xpY2soKXtcclxuICAvLyAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xyXG4gIC8vICAgICBhY3RpdmVDbGljayA9IGZhbHNlO1xyXG4gIC8vICAgICBjb25zb2xlLmxvZyhhY3RpdmVDbGljayk7XHJcbiAgLy8gICAgIHJlc29sdmUoKTtcclxuICAvLyAgIH0pXHJcbiAgLy8gfVxyXG5cclxuICAvLyAtLS0tLSAgIHRoZSByZWFzb24gSSBwdXQgc3ZnRnJhbWVWYWx1ZSBhcyBhbiBhcmd1bWVudCwgbm90IGp1c3QgdXNpbmcgc3ZnRnJhbWVWYWx1ZSBhcyBhIFJlZixcclxuICAvLyAtLS0tLSBpcyBJIGRvbid0IHdhbnQgdG8gcmVyZW5kZXIgYWxsIHRoaXMgZnVuY3Rpb25zIHdoZW5ldmVyIHN2Z0ZyYW1lVmFsdWVzIGNoYW5nZXMuXHJcbiAgY29uc3QgdHJhbnNmb3JtQWxsRWFjaE1lbnVzID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoX3N2Z0ZyYW1lVmFsdWVzLCBleHRlbmRpbmdTaXplLCBlbGVtUGFyZW50SWQpID0+IHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBjb25zdCBORiA9IFRWW1wibWVudUR1cmF0aW9uXCJdICogNjA7XHJcblxyXG4gICAgICAgIGxldCBmID0gMDtcclxuICAgICAgICBsZXQgZGlyID0gMTtcclxuXHJcbiAgICAgICAgYWRkQ1NTbWVudXRyYW5zaXRpb24obnVsbCwgLi4uYWxsRWxlbXMuY3VycmVudCk7XHJcbiAgICAgICAgZXh0ZW5kaW5nU2l6ZS5MSS5mb3JFYWNoKChvYmopID0+IHtcclxuICAgICAgICAgIGV2YWwob2JqW1wiZWxlbUlkXCJdICsgXCJfc2V0TElfc2l6ZVwiKSh7IHdpZHRoOiBvYmoud2lkdGgsIGhlaWdodDogb2JqLmhlaWdodCB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgYWRkQ1NTbWVudXRyYW5zaXRpb24obnVsbCwgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtKTtcclxuICAgICAgICAgIGV2YWwoZWxlbVBhcmVudElkICsgXCJfY2hhbmdlSGllcmFyY2h5U3ZnRnJhbWVQYWNrXCIpKCBfc3ZnRnJhbWVWYWx1ZXMsIGV4dGVuZGluZ1NpemVbXCJzdmdGcmFtZVBhY2thZ2VcIl1cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2xpY2tSZWYuY3VycmVudC5iaWdnZXJlZEVsZW1QYXJlbnRJZCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgYWRkQ1NTbWVudXRyYW5zaXRpb24obnVsbCwgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJlZEVsZW0pO1xyXG4gICAgICAgICAgZXZhbCggY2xpY2tSZWYuY3VycmVudC5iaWdnZXJlZEVsZW1QYXJlbnRJZCArIFwiX2NoYW5nZUhpZXJhcmNoeVN2Z0ZyYW1lUGFja1wiICkoX3N2Z0ZyYW1lVmFsdWVzLCB7IHdpZHRoOiBfc3ZnRnJhbWVWYWx1ZXMuc3ZnRnJhbWVEZWZhdWx0LndpZHRoLCBoZWlnaHQ6IF9zdmdGcmFtZVZhbHVlcy5zdmdGcmFtZURlZmF1bHQuaGVpZ2h0IH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlubmVyV2lkdGggPCA4MDApIHtcclxuICAgICAgICAgIGNvbnN0IHNpemUgPSBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW0gIT09IG51bGwgID8gVFYuc3ZnRnJhbWVEZWZhdWx0U2l6ZVNtYWxsZXJTaXplIDogX3N2Z0ZyYW1lVmFsdWVzW1wic3ZnRnJhbWVEZWZhdWx0XCJdO1xyXG4gICAgICAgICAgY29uc3QgY2hpbGRFbGVtcyA9IGFsbEVsZW1zLmN1cnJlbnQubWFwKChlKSA9PiBlLmZpcnN0RWxlbWVudENoaWxkKTtcclxuXHJcbiAgICAgICAgICBhZGRDU1NtZW51dHJhbnNpdGlvbihlbGVtUGFyZW50SWQsIC4uLmNoaWxkRWxlbXMpO1xyXG5cclxuICAgICAgICAgIG1lbnVWYWx1ZXMuY3VycmVudC5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW1QYXJlbnRJZCAhPT0gZWxlbS5pZCkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtLmlkICsgXCJTdmdGcmFtZVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgZXZhbChlbGVtLmlkICsgXCJfY2hhbmdlSGllcmFyY2h5U3ZnRnJhbWVQYWNrXCIpKF9zdmdGcmFtZVZhbHVlcywgeyB3aWR0aDogc2l6ZSwgaGVpZ2h0OiBzaXplIH0pO1xyXG5cclxuICAgICAgICAgICAgICByZWN0LnNldEF0dHJpYnV0ZU5TKG51bGwsIFwid2lkdGhcIiwgc2l6ZSk7XHJcbiAgICAgICAgICAgICAgcmVjdC5zZXRBdHRyaWJ1dGVOUyhudWxsLCBcImhlaWdodFwiLCBzaXplKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBhbmltKCkge1xyXG4gICAgICAgICAgZiArPSBkaXI7XHJcbiAgICAgICAgICBpZiAoY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbVJlY3Quc2V0QXR0cmlidXRlTlMoXHJcbiAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICBcIndpZHRoXCIsXHJcbiAgICAgICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtLmNsaWVudFdpZHRoXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbVJlY3Quc2V0QXR0cmlidXRlTlMoXHJcbiAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICBcImhlaWdodFwiLFxyXG4gICAgICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbS5jbGllbnRIZWlnaHRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAoY2xpY2tSZWYuY3VycmVudC5iaWdnZXJlZEVsZW1QYXJlbnRJZCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlcmVkRWxlbVJlY3Quc2V0QXR0cmlidXRlTlMoXHJcbiAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICBcIndpZHRoXCIsXHJcbiAgICAgICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJlZEVsZW0uY2xpZW50V2lkdGhcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJlZEVsZW1SZWN0LnNldEF0dHJpYnV0ZU5TKFxyXG4gICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgXCJ3aWR0aFwiLFxyXG4gICAgICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyZWRFbGVtLmNsaWVudFdpZHRoXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBleHRlbmRpbmdSZXF1ZXN0QW5pbVJlZi5jdXJyZW50ID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW0pO1xyXG5cclxuICAgICAgICAgIGlmICghKGYgJSBORikpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCI9PT09PT09ZmluaXNoZWQ9PT09PT09XCIpO1xyXG4gICAgICAgICAgICAvLyBvbkFuaW0gPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbSAhPT0gbnVsbClcclxuICAgICAgICAgICAgICBldmFsKGVsZW1QYXJlbnRJZCArIFwiX2NoYW5nZUhpZXJhcmNoeVN2Z0ZyYW1lUGFja1wiKShcclxuICAgICAgICAgICAgICAgIF9zdmdGcmFtZVZhbHVlcyxcclxuICAgICAgICAgICAgICAgIHsgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH1cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgZXZhbChlbGVtUGFyZW50SWQgKyBcIl9jaGFuZ2VIaWVyYXJjaHlTdmdGcmFtZVBhY2tcIikoXHJcbiAgICAgICAgICAgICAgICBfc3ZnRnJhbWVWYWx1ZXMsXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBfc3ZnRnJhbWVWYWx1ZXNbXCJzdmdGcmFtZURlZmF1bHRcIl0sXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogX3N2Z0ZyYW1lVmFsdWVzW1wic3ZnRnJhbWVEZWZhdWx0XCJdLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShleHRlbmRpbmdSZXF1ZXN0QW5pbVJlZi5jdXJyZW50KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXNvbHZlP1wiKTtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBhbmltKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFtdXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgY3JlYXRlV2F2eUFuaW1hdGlvbiA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKGV4dGVuZGluZ1NpemUpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJjcmVhdGVXYXZ5QW5pbWF0aW9uIGlzIHdvcmtpbmdcIik7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gODAwKSB7XHJcbiAgICAgICAgICBsZXQgZGF0YVBvaW50cywgcG9pbnRzVHdlZW4xLCBwb2ludHNUd2VlbjI7XHJcblxyXG4gICAgICAgICAgaWYgKHN2Z0ZyYW1lVmFsdWVzLndhdnlQYXRoID4gZXh0ZW5kaW5nU2l6ZVtcIndpZHRoXCJdIC8gMikge1xyXG4gICAgICAgICAgICByZXR1cm4gc2V0U3ZnRnJhbWVWYWx1ZXMoe1xyXG4gICAgICAgICAgICAgIC4uLnN2Z0ZyYW1lVmFsdWVzLFxyXG4gICAgICAgICAgICAgIHdhdnlQYXRoOiBleHRlbmRpbmdTaXplW1wid2lkdGhcIl0gLyAyLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAod2F2eUFuaW0uY3VycmVudC5UTCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICB3YXZ5QW5pbS5jdXJyZW50LlRMID0gZ3NhcC50aW1lbGluZSh7XHJcbiAgICAgICAgICAgICAgb25VcGRhdGU6IHVwZGF0ZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB3YXZ5QW5pbS5jdXJyZW50LlRMLnJlc3VtZSgpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGRhdGFQb2ludHMgPSBnZXREYXRhUG9pbnRzKFxyXG4gICAgICAgICAgICBleHRlbmRpbmdTaXplLFxyXG4gICAgICAgICAgICBzdmdGcmFtZVZhbHVlcyxcclxuICAgICAgICAgICAgc3ZnRnJhbWVWYWx1ZXNJbW11dGFibGUuY3VycmVudFxyXG4gICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICB3YXZ5QW5pbS5jdXJyZW50LnBvaW50cyA9IHtcclxuICAgICAgICAgICAgcG9pbnRzMTogZGF0YVBvaW50cy5wb2ludHMxLFxyXG4gICAgICAgICAgICBwb2ludHMyOiBkYXRhUG9pbnRzLnBvaW50czIsXHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIHBvaW50c1R3ZWVuMSA9IGRhdGFQb2ludHMucG9pbnRzVHdlZW4xO1xyXG4gICAgICAgICAgcG9pbnRzVHdlZW4yID0gZGF0YVBvaW50cy5wb2ludHNUd2VlbjI7XHJcblxyXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3YXZ5QW5pbS5jdXJyZW50LnBvaW50cy5wb2ludHMxLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBkdXJhdGlvbiA9IHJhbmRvbShcclxuICAgICAgICAgICAgICBzdmdGcmFtZVZhbHVlc0ltbXV0YWJsZS5jdXJyZW50W1wic3BlZWRcIl1bMF0sXHJcbiAgICAgICAgICAgICAgc3ZnRnJhbWVWYWx1ZXNJbW11dGFibGUuY3VycmVudFtcInNwZWVkXCJdWzFdXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBsZXQgdHdlZW4xID0gZ3NhcC50byh3YXZ5QW5pbS5jdXJyZW50LnBvaW50cy5wb2ludHMxW2ldLCB7XHJcbiAgICAgICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxyXG4gICAgICAgICAgICAgIHg6IHBvaW50c1R3ZWVuMVtpXS54LFxyXG4gICAgICAgICAgICAgIHk6IHBvaW50c1R3ZWVuMVtpXS55LFxyXG4gICAgICAgICAgICAgIHJlcGVhdDogLTEsXHJcbiAgICAgICAgICAgICAgeW95bzogdHJ1ZSxcclxuICAgICAgICAgICAgICBlYXNlOiBTaW5lLmVhc2VJbk91dCxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgdHdlZW4yID0gZ3NhcC50byh3YXZ5QW5pbS5jdXJyZW50LnBvaW50cy5wb2ludHMyW2ldLCB7XHJcbiAgICAgICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxyXG4gICAgICAgICAgICAgIHg6IHBvaW50c1R3ZWVuMltpXS54LFxyXG4gICAgICAgICAgICAgIHk6IHBvaW50c1R3ZWVuMltpXS55LFxyXG4gICAgICAgICAgICAgIHJlcGVhdDogLTEsXHJcbiAgICAgICAgICAgICAgeW95bzogdHJ1ZSxcclxuICAgICAgICAgICAgICBlYXNlOiBTaW5lLmVhc2VJbk91dCxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB3YXZ5QW5pbS5jdXJyZW50LlRMLmFkZCh0d2VlbjEsIC1yYW5kb20oZHVyYXRpb24pKTtcclxuICAgICAgICAgICAgd2F2eUFuaW0uY3VycmVudC5UTC5hZGQodHdlZW4yLCAtcmFuZG9tKGR1cmF0aW9uKSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgZnVuY3Rpb24gdXBkYXRlKCkge1xyXG4gICAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LndhdnlQYXRoWzBdLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgICBcImRcIixcclxuICAgICAgICAgICAgICB0d2VlbkNhcmRpbmFsKHdhdnlBbmltLmN1cnJlbnQucG9pbnRzLnBvaW50czEsIHRydWUsIDEpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQud2F2eVBhdGhbMV0uc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgICAgIFwiZFwiLFxyXG4gICAgICAgICAgICAgIHR3ZWVuQ2FyZGluYWwod2F2eUFuaW0uY3VycmVudC5wb2ludHMucG9pbnRzMiwgdHJ1ZSwgMSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICByZXR1cm4gd2F2eUFuaW0uY3VycmVudC5UTDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKHdhdnlBbmltLmN1cnJlbnQuVEwgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKCF3YXZ5QW5pbS5jdXJyZW50LlRMLnBhdXNlZCgpKSB7XHJcbiAgICAgICAgICAgICAgd2F2eUFuaW0uY3VycmVudC5UTCA9IHdhdnlBbmltLmN1cnJlbnQuVEwucGF1c2UoKTtcclxuICAgICAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LndhdnlQYXRoWzBdLnNldEF0dHJpYnV0ZShcImRcIiwgXCJcIik7XHJcbiAgICAgICAgICAgICAgY2xpY2tSZWYuY3VycmVudC53YXZ5UGF0aFsxXS5zZXRBdHRyaWJ1dGUoXCJkXCIsIFwiXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgW3N2Z0ZyYW1lVmFsdWVzXVxyXG4gICk7XHJcblxyXG4gIC8vIHVzZUVmZmVjdCgoKT0+e3NldENsaWNrQWZ0ZXJDb250ZXh0KCdza2lsbCcpO30sW10pXHJcblxyXG4gIGNvbnN0IGV4dGVuZE1lbnUgPSB1c2VDYWxsYmFjayhcclxuICAgIChlbGVtLCBvcmRlciA9IDAsIHRleHRSZWYsIGNvbnRlbnRSZWYsIG5lb25SZWZzKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZWxlbVwiLCBlbGVtKTtcclxuICAgICAgY29uc3QgZWxlbVBhcmVudElkID0gZWxlbS5wYXJlbnRFbGVtZW50LmlkO1xyXG5cclxuICAgICAgaWYgKGNsaWNrUmVmLmN1cnJlbnQub25BbmltID09PSB0cnVlKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChjbGlja1JlZi5jdXJyZW50Lm1lbnVFeHRlbmRlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQub25BbmltID0gdHJ1ZTtcclxuICAgICAgICAgIHNldENsaWNrQ29udGV4dCh7IG9uOiB0cnVlLCBiaWdnZXI6IGVsZW1QYXJlbnRJZCwgYmlnZ2VyZWQ6IG51bGwgfSk7XHJcbiAgICAgICAgICBjbGlja1JlZi5jdXJyZW50Lm1lbnVFeHRlbmRlZCA9IHRydWU7XHJcbiAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW1QYXJlbnRJZCA9IGVsZW1QYXJlbnRJZDtcclxuICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbSA9IGVsZW07XHJcbiAgICAgICAgICAoY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtUmVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICAgICAgICBlbGVtUGFyZW50SWQgKyBcIlN2Z0ZyYW1lXCJcclxuICAgICAgICAgICkpLFxyXG4gICAgICAgICAgICAoY2xpY2tSZWYuY3VycmVudC53YXZ5UGF0aCA9IFtcclxuICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtUGFyZW50SWQgKyBcIlN2Z1dhdnkxXCIpLFxyXG4gICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1QYXJlbnRJZCArIFwiU3ZnV2F2eTJcIiksXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgY2xpY2tSZWYuY3VycmVudC50ZXh0UmVmID0gdGV4dFJlZjtcclxuICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuY29udGVudFJlZiA9IGNvbnRlbnRSZWY7XHJcbiAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlck5lb25SZWZzID0gbmVvblJlZnM7XHJcblxyXG4gICAgICAgICAgZGVtb1ZpZGVvSGVpZ2h0ID0gZ2V0RGVtb1ZpZGVvSGVpZ2h0KGNsaWNrUmVmLmN1cnJlbnQubWVudUV4dGVuZGVkKTtcclxuICAgICAgICAgIGxldCBleHRlbmRpbmdTaXplID0gZ2V0VmFsdWVzVG9VblN5bWV0cnlFYWNoTWVudShcclxuICAgICAgICAgICAgZGVtb1ZpZGVvSGVpZ2h0LFxyXG4gICAgICAgICAgICBlbGVtLFxyXG4gICAgICAgICAgICBvcmRlclxyXG4gICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICBmdW5jdGlvbiBjaGVja0NhbGxpbmdBc3Ryb25hdXQoKSB7XHJcbiAgICAgICAgICAgIGlmICghbGlnaHRlclZlcnNpb24uY3VycmVudCkgY2FsbEFzdHJvbmF1dChlbGVtUGFyZW50SWQpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIFByb21pc2UuYWxsKFtcclxuICAgICAgICAgICAgaG9tZUdzYXBUcmFuc2l0aW9uKGNsaWNrUmVmLmN1cnJlbnQubWVudUV4dGVuZGVkKSxcclxuICAgICAgICAgICAgbG9nb0Rpc3BsYXlEaXNwYXRjaCh7IGRlbW9DbGllbnRIZWlnaHQ6IGRlbW9SZWYuY3VycmVudC5jbGllbnRIZWlnaHQsIGxvZ29DbGllbnRXaWR0aDogKCgoaW5uZXJXaWR0aCAqICgxMDAgLSBUVi51blN5bWV0cnlEZW1vTWVudSkpIC8gMTAwKSAqIFRWLmxvZ29XaWR0aCkgLyAxMDAgfSksXHJcbiAgICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbVJlY3Quc2V0QXR0cmlidXRlTlMoIG51bGwsIFwic3Ryb2tlXCIsIFwidXJsKCNTdmdJdm9yeSlcIiksXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybUFsbEVhY2hNZW51cyhzdmdGcmFtZVZhbHVlcywgZXh0ZW5kaW5nU2l6ZSwgZWxlbVBhcmVudElkKSxcclxuICAgICAgICAgICAgY2hlY2tDYWxsaW5nQXN0cm9uYXV0KCksXHJcbiAgICAgICAgICBdKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgY3JlYXRlV2F2eUFuaW1hdGlvbihleHRlbmRpbmdTaXplW1wic3ZnRnJhbWVQYWNrYWdlXCJdKTtcclxuICAgICAgICAgICAgICB0ZXh0UmVmLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICBjb250ZW50UmVmLnN0eWxlLmRpc3BsYXkgPSBcImluaXRpYWxcIjtcclxuICAgICAgICAgICAgICBjb250ZW50UmVmLnN0eWxlLnpJbmRleCA9IDM7XHJcbiAgICAgICAgICAgICAgc2V0Q2xpY2tBZnRlckNvbnRleHQoZWxlbVBhcmVudElkKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQub25BbmltID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtUGFyZW50SWQgIT09IGVsZW1QYXJlbnRJZCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJlbHNlIGlmXCIpO1xyXG4gICAgICAgICAgY29uc3QgYmlnZ2VyZWRXYXZ5UGF0aCA9IGNsaWNrUmVmLmN1cnJlbnQud2F2eVBhdGg7XHJcbiAgICAgICAgICBjb25zdCBiaWdnZXJlZFRleHQgPSBjbGlja1JlZi5jdXJyZW50LnRleHRSZWY7XHJcbiAgICAgICAgICBjb25zdCBiaWdnZXJlZENvbnRlbnRSZWYgPSBjbGlja1JlZi5jdXJyZW50LmNvbnRlbnRSZWY7XHJcbiAgICAgICAgICBjb25zdCBiaWdnZXJlZE5lb25SZWZzID0gY2xpY2tSZWYuY3VycmVudC5iaWdnZXJOZW9uUmVmcztcclxuXHJcbiAgICAgICAgICBjbGlja1JlZi5jdXJyZW50Lm9uQW5pbSA9IHRydWU7XHJcbiAgICAgICAgICBzZXRDbGlja0NvbnRleHQoeyBvbjogdHJ1ZSwgYmlnZ2VyOiBlbGVtUGFyZW50SWQsIGJpZ2dlcmVkOiBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW1QYXJlbnRJZH0pO1xyXG4gICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJlZEVsZW0gPSBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW07XHJcbiAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlcmVkRWxlbVBhcmVudElkID0gY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtUGFyZW50SWQ7XHJcbiAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlcmVkRWxlbVJlY3QgPSBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW1SZWN0O1xyXG4gICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtID0gZWxlbTtcclxuICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbVBhcmVudElkID0gZWxlbVBhcmVudElkO1xyXG4gICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtID0gZWxlbTtcclxuICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbVJlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggZWxlbVBhcmVudElkICsgXCJTdmdGcmFtZVwiICk7XHJcbiAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LndhdnlQYXRoID0gWyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtUGFyZW50SWQgKyBcIlN2Z1dhdnkxXCIpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtUGFyZW50SWQgKyBcIlN2Z1dhdnkyXCIpXTtcclxuICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQudGV4dFJlZiA9IHRleHRSZWY7XHJcbiAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmNvbnRlbnRSZWYgPSBjb250ZW50UmVmO1xyXG4gICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJOZW9uUmVmcyA9IG5lb25SZWZzO1xyXG5cclxuICAgICAgICAgIGRlbW9WaWRlb0hlaWdodCA9IGdldERlbW9WaWRlb0hlaWdodChjbGlja1JlZi5jdXJyZW50Lm1lbnVFeHRlbmRlZCk7XHJcbiAgICAgICAgICBsZXQgZXh0ZW5kaW5nU2l6ZSA9IGdldFZhbHVlc1RvVW5TeW1ldHJ5RWFjaE1lbnUoIGRlbW9WaWRlb0hlaWdodCwgZWxlbSwgb3JkZXIgKTtcclxuXHJcbiAgICAgICAgICBpZiAoaW5uZXJXaWR0aCA+IDgwMCkgd2F2eUFuaW0uY3VycmVudC5UTC5wYXVzZSgwKTtcclxuXHJcbiAgICAgICAgICBmdW5jdGlvbiBjaGVja0NhbGxpbmdBc3Ryb25hdXQoKSB7XHJcbiAgICAgICAgICAgIGlmICghbGlnaHRlclZlcnNpb24uY3VycmVudCkgY2FsbEFzdHJvbmF1dCggZWxlbVBhcmVudElkLCBjbGlja1JlZi5jdXJyZW50LmJpZ2dlcmVkRWxlbVBhcmVudElkICk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgICAgICBiaWdnZXJlZFdhdnlQYXRoWzBdLnNldEF0dHJpYnV0ZShcImRcIiwgXCJcIiksXHJcbiAgICAgICAgICAgIGJpZ2dlcmVkV2F2eVBhdGhbMV0uc2V0QXR0cmlidXRlKFwiZFwiLCBcIlwiKSxcclxuICAgICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJlZEVsZW1SZWN0LnNldEF0dHJpYnV0ZU5TKCBudWxsLCBcInN0cm9rZVwiLCBgdXJsKCMke2NsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyZWRFbGVtUGFyZW50SWR9U3ZnRnJhbWVTdG9wQ29sb3IpYCApLFxyXG4gICAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW1SZWN0LnNldEF0dHJpYnV0ZU5TKCBudWxsLCBcInN0cm9rZVwiLCBcInVybCgjU3ZnSXZvcnkpXCIpLFxyXG4gICAgICAgICAgICB0cmFuc2Zvcm1BbGxFYWNoTWVudXMoc3ZnRnJhbWVWYWx1ZXMsIGV4dGVuZGluZ1NpemUsIGVsZW1QYXJlbnRJZCksXHJcbiAgICAgICAgICAgIGJpZ2dlcmVkVGV4dC5zdHlsZS5kaXNwbGF5ID0gXCJpbml0aWFsXCIsXHJcbiAgICAgICAgICAgIGJpZ2dlcmVkQ29udGVudFJlZi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIsXHJcbiAgICAgICAgICAgIGJpZ2dlcmVkQ29udGVudFJlZi5zdHlsZS56SW5kZXggPSAtMSxcclxuICAgICAgICAgICAgYmlnZ2VyZWROZW9uUmVmc1swXS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIixcclxuICAgICAgICAgICAgYmlnZ2VyZWROZW9uUmVmc1sxXS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIixcclxuICAgICAgICAgICAgY2hlY2tDYWxsaW5nQXN0cm9uYXV0KCksXHJcbiAgICAgICAgICBdKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgY3JlYXRlV2F2eUFuaW1hdGlvbihleHRlbmRpbmdTaXplW1wic3ZnRnJhbWVQYWNrYWdlXCJdKTtcclxuICAgICAgICAgICAgICB0ZXh0UmVmLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICBjb250ZW50UmVmLnN0eWxlLmRpc3BsYXkgPSBcImluaXRpYWxcIjtcclxuICAgICAgICAgICAgICBjb250ZW50UmVmLnN0eWxlLnpJbmRleCA9IDM7XHJcbiAgICAgICAgICAgICAgYmlnZ2VyZWROZW9uUmVmc1swXS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbiAgICAgICAgICAgICAgYmlnZ2VyZWROZW9uUmVmc1sxXS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbiAgICAgICAgICAgICAgc2V0Q2xpY2tBZnRlckNvbnRleHQoZWxlbVBhcmVudElkKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQub25BbmltID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImVsc2VcIik7XHJcbiAgICAgICAgICBjb25zdCBiaWdnZXJlZFdhdnlQYXRoID0gY2xpY2tSZWYuY3VycmVudC53YXZ5UGF0aDtcclxuICAgICAgICAgIGNvbnN0IGJpZ2dlcmVkVGV4dCA9IGNsaWNrUmVmLmN1cnJlbnQudGV4dFJlZjtcclxuICAgICAgICAgIGNvbnN0IGJpZ2dlcmVkQ29udGVudFJlZiA9IGNsaWNrUmVmLmN1cnJlbnQuY29udGVudFJlZjtcclxuICAgICAgICAgIGNvbnN0IGJpZ2dlcmVkTmVvblJlZnMgPSBjbGlja1JlZi5jdXJyZW50LmJpZ2dlck5lb25SZWZzO1xyXG5cclxuICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQub25BbmltID0gdHJ1ZTtcclxuICAgICAgICAgIHNldENsaWNrQ29udGV4dCh7IG9uOiBmYWxzZSwgYmlnZ2VyOiBudWxsLCBiaWdnZXJlZDogbnVsbCB9KTtcclxuICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyZWRFbGVtID0gY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtO1xyXG4gICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJlZEVsZW1QYXJlbnRJZCA9ICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW1QYXJlbnRJZDtcclxuICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyZWRFbGVtUmVjdCA9IGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbVJlY3Q7XHJcbiAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW0gPSBudWxsO1xyXG4gICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5tZW51RXh0ZW5kZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICBsZXQgZXh0ZW5kaW5nU2l6ZSA9IHsgTEk6IFsgeyBlbGVtSWQ6IFwid29ya1wiLCB3aWR0aDogXCI1MCVcIiwgaGVpZ2h0OiBcIjUwJVwiIH0sIHsgZWxlbUlkOiBcInNraWxsXCIsIHdpZHRoOiBcIjUwJVwiLCBoZWlnaHQ6IFwiNTAlXCIgfSwgeyBlbGVtSWQ6IFwicGFpbnRcIiwgd2lkdGg6IFwiNTAlXCIsIGhlaWdodDogXCI1MCVcIiB9LCB7IGVsZW1JZDogXCJpbmZvXCIsIHdpZHRoOiBcIjUwJVwiLCBoZWlnaHQ6IFwiNTAlXCIgfSBdIH07XHJcblxyXG4gICAgICAgICAgaWYgKGlubmVyV2lkdGggPiA4MDApIHdhdnlBbmltLmN1cnJlbnQuVEwucGF1c2UoMCk7XHJcbiAgICAgICAgICBmdW5jdGlvbiBjaGVja0NhbGxpbmdBc3Ryb25hdXQoKSB7XHJcbiAgICAgICAgICAgIGlmICghbGlnaHRlclZlcnNpb24uY3VycmVudCkgcGF1c2VBc3Ryb25hdXQoKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgICAgIGhvbWVHc2FwVHJhbnNpdGlvbihjbGlja1JlZi5jdXJyZW50Lm1lbnVFeHRlbmRlZCksXHJcbiAgICAgICAgICAgIGxvZ29EaXNwbGF5RGlzcGF0Y2goeyBkZW1vQ2xpZW50SGVpZ2h0OiBkZW1vUmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0LCBsb2dvQ2xpZW50V2lkdGg6ICgoKGlubmVyV2lkdGggKiAoMTAwIC0gVFYuc3ltZXRyeURlbW9NZW51KSkgLyAxMDApICogVFYubG9nb1dpZHRoKSAvIDEwMCB9KSxcclxuICAgICAgICAgICAgYmlnZ2VyZWRXYXZ5UGF0aFswXS5zZXRBdHRyaWJ1dGUoXCJkXCIsIFwiXCIpLFxyXG4gICAgICAgICAgICBiaWdnZXJlZFdhdnlQYXRoWzFdLnNldEF0dHJpYnV0ZShcImRcIiwgXCJcIiksXHJcbiAgICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyZWRFbGVtUmVjdC5zZXRBdHRyaWJ1dGVOUyggbnVsbCwgXCJzdHJva2VcIiwgYHVybCgjJHtjbGlja1JlZi5jdXJyZW50LmJpZ2dlcmVkRWxlbVBhcmVudElkfVN2Z0ZyYW1lU3RvcENvbG9yKWApLFxyXG4gICAgICAgICAgICB0cmFuc2Zvcm1BbGxFYWNoTWVudXMoc3ZnRnJhbWVWYWx1ZXMsIGV4dGVuZGluZ1NpemUsIGVsZW1QYXJlbnRJZCksXHJcbiAgICAgICAgICAgIGJpZ2dlcmVkVGV4dC5zdHlsZS5kaXNwbGF5ID0gXCJpbml0aWFsXCIsXHJcbiAgICAgICAgICAgIGJpZ2dlcmVkQ29udGVudFJlZi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIsXHJcbiAgICAgICAgICAgIGJpZ2dlcmVkQ29udGVudFJlZi5zdHlsZS56SW5kZXggPSAtMSxcclxuICAgICAgICAgICAgYmlnZ2VyZWROZW9uUmVmc1swXS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIixcclxuICAgICAgICAgICAgYmlnZ2VyZWROZW9uUmVmc1sxXS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIixcclxuICAgICAgICAgICAgY2hlY2tDYWxsaW5nQXN0cm9uYXV0KCksXHJcbiAgICAgICAgICAgIHNldENsaWNrQWZ0ZXJDb250ZXh0KG51bGwpLFxyXG4gICAgICAgICAgXSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIG5lb25SZWZzWzBdLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuICAgICAgICAgICAgbmVvblJlZnNbMV0uc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG4gICAgICAgICAgICBjbGlja1JlZi5jdXJyZW50ID0geyBvbkFuaW06IGZhbHNlLCBhY3RpdmU6IHRydWUsIG1lbnVFeHRlbmRlZDogZmFsc2UsIGJpZ2dlckVsZW1QYXJlbnRJZDogbnVsbCwgYmlnZ2VyRWxlbTogbnVsbCwgYmlnZ2VyRWxlbVJlY3Q6IG51bGwsIGJpZ2dlck5lb25SZWZzOiBbXSwgYmlnZ2VyZWRFbGVtOiBudWxsLCBiaWdnZXJlZEVsZW1QYXJlbnRJZDogbnVsbCwgYmlnZ2VyZWRFbGVtUmVjdDogbnVsbCwgd2F2eVBhdGg6IFtdIH07XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBbc3ZnRnJhbWVWYWx1ZXNdXHJcbiAgKTtcclxuXHJcbiAgLy89PT09PT09PT09PT09PT09PWxvYWRlcj09PT09PT09PT09PT09PT09PT09PS8vXHJcblxyXG4gIGNvbnN0IG9wZW5MaWdodGVyVmVyc2lvbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGxpZ2h0ZXJWZXJzaW9uLmN1cnJlbnQgPSB0cnVlO1xyXG4gICAgcmVtb3ZlU2NlbmUoKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlnaHRlclZlcnNpb25cIikuaW5uZXJIVE1MID1cclxuICAgICAgXCJUaGlzIGlzIGxpZ2h0ZXIgdmVyc2lvblwiO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJ3b3JraW5nP1wiKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2FkZXJBbmltXCIpLmNsYXNzTGlzdC5hZGQoXCJsb2FkZXJGYWRlT3V0VHJhbnNcIik7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9hZGVyQ29udGFpbmVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgfSwgMTIwMCk7XHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vPT09PT09PT09PT09PT09PT1sb2FkZXI9PT09PT09PT09PT09PT09PT09PT0vL1xyXG5cclxuICByZXR1cm4gdXNlTWVtbygoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGlkPVwibWFzdGVyXCIgc3R5bGU9e3tjb2xvcjpcIndoaXRlXCJ9fT5cclxuICAgICAgICA8ZGl2IGlkPVwibG9hZGVyQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwibG9hZGVyQW5pbVwiPkxvYWQmbmJzcDsmbmJzcDtuZzwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBpZD1cImxpZ2h0ZXJWZXJzaW9uXCIgb25DbGljaz17b3BlbkxpZ2h0ZXJWZXJzaW9ufT5cclxuICAgICAgICAgICAgQ2xpY2sgdG8gdGhlIGxpZ2h0ZXIgdmVyc2lvbiA8YnIgLz4gd2hpY2ggZG9lc24ndCBjb250YWluIFRIUkVFIEpTXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8RXh0ZW5kTWVudUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2V4dGVuZE1lbnV9PlxyXG4gICAgICAgICAgPExvZ29EaXNwbGF5Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBsb2dvRGlzcGxheSwgbG9nb0Rpc3BsYXlEaXNwYXRjaCB9fSA+XHJcbiAgICAgICAgICAgIDxNZW51U2l6ZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgd29ya19zdHlsZUxJLCBza2lsbF9zdHlsZUxJLCBwYWludF9zdHlsZUxJLCBpbmZvX3N0eWxlTEksIHdvcmtfc3R5bGVTdmdGcmFtZVBhY2ssIHNraWxsX3N0eWxlU3ZnRnJhbWVQYWNrLCBwYWludF9zdHlsZVN2Z0ZyYW1lUGFjaywgaW5mb19zdHlsZVN2Z0ZyYW1lUGFja319PlxyXG4gICAgICAgICAgICAgIDxDbGlja0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NsaWNrQ29udGV4dH0+XHJcbiAgICAgICAgICAgICAgICA8Q2xpY2tBZnRlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NsaWNrQWZ0ZXJDb250ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgPEhvbWVMYXlvdXRSZW5kZXIgdmFscz17eyByZWZzOiB7IGRlbW9SZWYsIGxvZ29SZWYgfSwgbWVudVZhbHVlczogbWVudVZhbHVlcy5jdXJyZW50LCBzdmdGcmFtZVZhbHVlc0ltbXV0YWJsZTogc3ZnRnJhbWVWYWx1ZXNJbW11dGFibGUuY3VycmVudCwgY2xpY2tDb250ZXh0OiBjbGlja0NvbnRleHR9fS8+XHJcbiAgICAgICAgICAgICAgICA8L0NsaWNrQWZ0ZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgIDwvQ2xpY2tDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgICAgICA8L01lbnVTaXplQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgICAgIDwvTG9nb0Rpc3BsYXlDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgIDwvRXh0ZW5kTWVudUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9LCBbIGxvZ29EaXNwbGF5LCB3b3JrX3N0eWxlTEksIHdvcmtfc3R5bGVTdmdGcmFtZVBhY2ssIHNraWxsX3N0eWxlU3ZnRnJhbWVQYWNrLCBwYWludF9zdHlsZVN2Z0ZyYW1lUGFjaywgaW5mb19zdHlsZVN2Z0ZyYW1lUGFjaywgY2xpY2tDb250ZXh0LCBjbGlja0FmdGVyQ29udGV4dF0pO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gSG9tZUxheW91dFJlbmRlcihwcm9wcykge1xyXG4gIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS1Ib21lTGF5b3V0UmVuZGVyLS0tLS0tLS0tLS0tLS0tLS1cIik7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxEZW1vIHJlZnM9e3Byb3BzLnZhbHMucmVmc30gLz5cclxuICAgICAgPE1lbnUgdmFscz17eyBtZW51VmFsdWVzOiBwcm9wcy52YWxzLm1lbnVWYWx1ZXMsIHN2Z0ZyYW1lVmFsdWVzSW1tdXRhYmxlOiBwcm9wcy52YWxzLnN2Z0ZyYW1lVmFsdWVzSW1tdXRhYmxlfX0gLz5cclxuXHJcbiAgICAgIDxkaXYgaWQ9XCJ0aHJlZUpTQ292ZXJcIj48L2Rpdj5cclxuICAgICAgPGRpdiBpZD1cInRocmVlSlNDYW52YXNcIj48L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSG9tZUxheW91dDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==