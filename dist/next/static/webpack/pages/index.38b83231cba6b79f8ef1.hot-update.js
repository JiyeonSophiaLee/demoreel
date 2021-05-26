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

      changeMode(updateSvgFrameValues(), updateSvgFrameValues(), test());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lTGF5b3V0LmpzeCJdLCJuYW1lcyI6WyJFeHRlbmRNZW51Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJMb2dvRGlzcGxheUNvbnRleHQiLCJNZW51U2l6ZUNvbnRleHQiLCJDbGlja0NvbnRleHQiLCJDbGlja0FmdGVyQ29udGV4dCIsImxvZ29EaXNwbGF5UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiaW5uZXJXaWR0aCIsInVuZGVmaW5lZCIsImlubmVySGVpZ2h0IiwiZGVtb0NsaWVudEhlaWdodCIsImxvZ29DbGllbnRXaWR0aCIsImxvZ29faGVpZ2hlciIsImxvZ29fd2lkZXIiLCJIb21lTGF5b3V0IiwiY29uc29sZSIsImxvZyIsInVzZU1lbnVTaXplIiwid29ya19zZXRMSV9zaXplIiwid29ya19zZXRzdmdGcmFtZVBhY2tTaXplIiwid29ya19zdHlsZUxJIiwid29ya19zdHlsZVN2Z0ZyYW1lUGFjayIsIndvcmtfY2hhbmdlSGllcmFyY2h5U3ZnRnJhbWVQYWNrIiwic2tpbGxfc2V0TElfc2l6ZSIsInNraWxsX3NldHN2Z0ZyYW1lUGFja1NpemUiLCJza2lsbF9zdHlsZUxJIiwic2tpbGxfc3R5bGVTdmdGcmFtZVBhY2siLCJza2lsbF9jaGFuZ2VIaWVyYXJjaHlTdmdGcmFtZVBhY2siLCJwYWludF9zZXRMSV9zaXplIiwicGFpbnRfc2V0c3ZnRnJhbWVQYWNrU2l6ZSIsInBhaW50X3N0eWxlTEkiLCJwYWludF9zdHlsZVN2Z0ZyYW1lUGFjayIsInBhaW50X2NoYW5nZUhpZXJhcmNoeVN2Z0ZyYW1lUGFjayIsImluZm9fc2V0TElfc2l6ZSIsImluZm9fc2V0c3ZnRnJhbWVQYWNrU2l6ZSIsImluZm9fc3R5bGVMSSIsImluZm9fc3R5bGVTdmdGcmFtZVBhY2siLCJpbmZvX2NoYW5nZUhpZXJhcmNoeVN2Z0ZyYW1lUGFjayIsImxpZ2h0ZXJWZXJzaW9uIiwidXNlUmVmIiwidXNlU3RhdGUiLCJzdmdGcmFtZURlZmF1bHQiLCJyYWRpdXMiLCJ3YXZ5UGF0aCIsImV4dHJhU3BhY2UiLCJzdHJva2VXaWR0aCIsInJlY3QiLCJ3YXZ5Iiwic3ZnRnJhbWVWYWx1ZXMiLCJzZXRTdmdGcmFtZVZhbHVlcyIsInN2Z0ZyYW1lVmFsdWVzSW1tdXRhYmxlIiwieCIsInkiLCJyeCIsInJ5IiwibXVsdGlwbHkiLCJzY2FsZSIsInNwZWVkIiwiZmlsbCIsIm9uIiwiYmlnZ2VyIiwiYmlnZ2VyZWQiLCJjbGlja0NvbnRleHQiLCJzZXRDbGlja0NvbnRleHQiLCJjbGlja0FmdGVyQ29udGV4dCIsInNldENsaWNrQWZ0ZXJDb250ZXh0IiwiY2xpY2tSZWYiLCJvbkFuaW0iLCJhY3RpdmUiLCJtZW51RXh0ZW5kZWQiLCJiaWdnZXJFbGVtUGFyZW50SWQiLCJiaWdnZXJFbGVtIiwiYmlnZ2VyRWxlbVJlY3QiLCJiaWdnZXJOZW9uUmVmcyIsImJpZ2dlcmVkRWxlbSIsImJpZ2dlcmVkRWxlbVBhcmVudElkIiwiYmlnZ2VyZWRFbGVtUmVjdCIsImV4dGVuZGluZ1JlcXVlc3RBbmltUmVmIiwid2F2eUFuaW0iLCJUTCIsInBvaW50cyIsImRlbW9SZWYiLCJsb2dvUmVmIiwibW9kZSIsIm1vYmlsZU1vZGUiLCJfbW9iaWxlTW9kZSIsIndpZGVyTW9kZSIsIl93aWRlck1vZGUiLCJtZW51VmFsdWVzIiwiaWQiLCJvcmRlciIsInN0b3BDb2xvciIsInN0cm9rZUNvbG9yIiwiYWxsRWxlbXMiLCJkZW1vVmlkZW9IZWlnaHQiLCJ1c2VSZWR1Y2VyIiwibG9nb0Rpc3BsYXkiLCJsb2dvRGlzcGxheURpc3BhdGNoIiwiY2hhbmdlTW9kZSIsInVzZUNhbGxiYWNrIiwibW9iaWxlIiwid2lkZXIiLCJ0ZXN0IiwiY3VycmVudCIsInVzZUVmZmVjdCIsIm1hcCIsImVsZW0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYXN0cm9uYXV0IiwiaG9tZUdzYXBTZXQiLCJ1cGRhdGVTdmdGcmFtZVZhbHVlcyIsIl9yYWRpdXMiLCJfd2F2eVBhdGgiLCJNYXRoIiwiYWJzIiwiX3N0cm9rZVdpZHRoIiwiX3N2Z0ZyYW1lRGVmYXVsdCIsIlRWIiwic3ZnRnJhbWVEZWZhdWx0U2l6ZTE0MDAiLCJzdmdGcmFtZURlZmF1bHRTaXplIiwic3ZnRnJhbWVEZWZhdWx0U2l6ZTgwMCIsInN2Z0ZyYW1lRGVmYXVsdFNpemVTbWFsbGVyU2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwiZm9yRWFjaCIsImV2YWwiLCJ1cGRhdGVSZXNpemUiLCJyZW1haW5FeHRlbmRpbmdNZW51IiwiY3JlYXRlV2F2eUFuaW1hdGlvbiIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZXRBdHRyaWJ1dGVOUyIsIm51bWIiLCJ0cmFuc2Zvcm1BbGxFYWNoTWVudXMiLCJfc3ZnRnJhbWVWYWx1ZXMiLCJleHRlbmRpbmdTaXplIiwiZWxlbVBhcmVudElkIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJORiIsImYiLCJkaXIiLCJhZGRDU1NtZW51dHJhbnNpdGlvbiIsIkxJIiwib2JqIiwic2l6ZSIsImNoaWxkRWxlbXMiLCJlIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJhbmltIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJ1cGRhdGUiLCJzZXRBdHRyaWJ1dGUiLCJ0d2VlbkNhcmRpbmFsIiwicG9pbnRzMSIsInBvaW50czIiLCJkYXRhUG9pbnRzIiwicG9pbnRzVHdlZW4xIiwicG9pbnRzVHdlZW4yIiwiZ3NhcCIsInRpbWVsaW5lIiwib25VcGRhdGUiLCJyZXN1bWUiLCJnZXREYXRhUG9pbnRzIiwiaSIsImxlbmd0aCIsImR1cmF0aW9uIiwicmFuZG9tIiwidHdlZW4xIiwidG8iLCJyZXBlYXQiLCJ5b3lvIiwiZWFzZSIsIlNpbmUiLCJlYXNlSW5PdXQiLCJ0d2VlbjIiLCJhZGQiLCJwYXVzZWQiLCJwYXVzZSIsImV4dGVuZE1lbnUiLCJ0ZXh0UmVmIiwiY29udGVudFJlZiIsIm5lb25SZWZzIiwicGFyZW50RWxlbWVudCIsImNoZWNrQ2FsbGluZ0FzdHJvbmF1dCIsImNhbGxBc3Ryb25hdXQiLCJnZXREZW1vVmlkZW9IZWlnaHQiLCJnZXRWYWx1ZXNUb1VuU3ltZXRyeUVhY2hNZW51IiwiYWxsIiwiaG9tZUdzYXBUcmFuc2l0aW9uIiwidW5TeW1ldHJ5RGVtb01lbnUiLCJsb2dvV2lkdGgiLCJ0aGVuIiwic3R5bGUiLCJkaXNwbGF5IiwiekluZGV4IiwiYmlnZ2VyZWRXYXZ5UGF0aCIsImJpZ2dlcmVkVGV4dCIsImJpZ2dlcmVkQ29udGVudFJlZiIsImJpZ2dlcmVkTmVvblJlZnMiLCJ2aXNpYmlsaXR5IiwicGF1c2VBc3Ryb25hdXQiLCJlbGVtSWQiLCJzeW1ldHJ5RGVtb01lbnUiLCJvcGVuTGlnaHRlclZlcnNpb24iLCJyZW1vdmVTY2VuZSIsImlubmVySFRNTCIsImV2ZW50IiwiY2xhc3NMaXN0Iiwic2V0VGltZW91dCIsInVzZU1lbW8iLCJjb2xvciIsInJlZnMiLCJIb21lTGF5b3V0UmVuZGVyIiwicHJvcHMiLCJ2YWxzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxpQkFBaUIsZ0JBQUdDLDJEQUFhLEVBQXZDO0FBQ0EsSUFBTUMsa0JBQWtCLGdCQUFHRCwyREFBYSxFQUF4QztBQUNBLElBQU1FLGVBQWUsZ0JBQUdGLDJEQUFhLEVBQXJDO0FBQ0EsSUFBTUcsWUFBWSxnQkFBR0gsMkRBQWEsRUFBbEM7QUFDQSxJQUFNSSxpQkFBaUIsZ0JBQUdKLDJEQUFhLEVBQXZDOztBQUVQLElBQU1LLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQzVDO0FBQ0EsTUFBSUMsVUFBVSxJQUFJQyxTQUFsQixFQUE2QjtBQUMzQixR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QUEsWUFGRixlQUlFO0FBQUssUUFBRSxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBS0U7QUFBSyxRQUFFLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEY7QUFBQSxrQkFERjtBQVNEOztNQVhReUssZ0I7QUFZTTdNLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjM4YjgzMjMxY2JhNmI3OWY4ZWYxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZUNvbnRleHQsdXNlRWZmZWN0LHVzZVN0YXRlLHVzZVJlZHVjZXIsdXNlQ2FsbGJhY2ssdXNlUmVmLHVzZU1lbW99IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9EZW1vLmpzeFwiO1xyXG5pbXBvcnQgTWVudSBmcm9tIFwiLi9NZW51LmpzeFwiO1xyXG5pbXBvcnQgVFYgZnJvbSBcIi4uL3B1YmxpYy9hc3NldHMvanMvdHJhbnNpdGlvblZhbHVlXCI7XHJcbmltcG9ydCB1c2VNZW51U2l6ZSBmcm9tIFwiLi4vaG9va3MvdXNlTWVudVNpemVcIjtcclxuaW1wb3J0IHsgaG9tZUdzYXBTZXQsIGdldERlbW9WaWRlb0hlaWdodCwgaG9tZUdzYXBUcmFuc2l0aW9uLCBnZXRWYWx1ZXNUb1VuU3ltZXRyeUVhY2hNZW51LCB0d2VlbkNhcmRpbmFsLCBnZXREYXRhUG9pbnRzLCByYW5kb20sIGFkZENTU21lbnV0cmFuc2l0aW9ufSBmcm9tIFwiLi4vcHVibGljL2Fzc2V0cy9qcy91dGlsaXRpZXMuanNcIjtcclxuaW1wb3J0IGFzdHJvbmF1dCwgeyBjYWxsQXN0cm9uYXV0LCBwYXVzZUFzdHJvbmF1dCwgcmVtb3ZlU2NlbmV9IGZyb20gXCIuLi9wdWJsaWMvYXNzZXRzL2pzL2FzdHJvbmF1dC5qc1wiO1xyXG5pbXBvcnQgeyBnc2FwLCBTaW5lIH0gZnJvbSBcImdzYXBcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBFeHRlbmRNZW51Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuZXhwb3J0IGNvbnN0IExvZ29EaXNwbGF5Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuZXhwb3J0IGNvbnN0IE1lbnVTaXplQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuZXhwb3J0IGNvbnN0IENsaWNrQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuZXhwb3J0IGNvbnN0IENsaWNrQWZ0ZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuY29uc3QgbG9nb0Rpc3BsYXlSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAvLyBjb25zb2xlLmxvZygnbG9nb0Rpc3BsYXkgcmVkdWNlciBpcyB3b3JraW5nJylcclxuICBpZiAoaW5uZXJXaWR0aCAhPSB1bmRlZmluZWQpIHtcclxuICAgIGlmIChpbm5lcldpZHRoID4gODAwKSB7XHJcbiAgICAgIGlmIChpbm5lcldpZHRoID4gaW5uZXJIZWlnaHQpIHtcclxuICAgICAgICBpZiAoYWN0aW9uLmRlbW9DbGllbnRIZWlnaHQgLyAzIDwgKGFjdGlvbi5sb2dvQ2xpZW50V2lkdGggKiA0LjUpIC8gNikge1xyXG4gICAgICAgICAgc3RhdGUgPSB7IGxvZ29faGVpZ2hlcjogXCJub25lXCIsIGxvZ29fd2lkZXI6IFwiaW5pdGlhbFwiIH07XHJcbiAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHN0YXRlID0geyBsb2dvX2hlaWdoZXI6IFwiaW5pdGlhbFwiLCBsb2dvX3dpZGVyOiBcIm5vbmVcIiB9O1xyXG4gICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzdGF0ZSA9IHsgbG9nb19oZWlnaGVyOiBcImluaXRpYWxcIiwgbG9nb193aWRlcjogXCJub25lXCIgfTtcclxuICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN0YXRlID0geyBsb2dvX2hlaWdoZXI6IFwibm9uZVwiLCBsb2dvX3dpZGVyOiBcImluaXRpYWxcIiB9O1xyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgSG9tZUxheW91dCA9ICgpID0+IHtcclxuICBjb25zb2xlLmxvZyhcIi0tLUhvbWVMYXlvdXQtLS1cIik7XHJcbiAgY29uc3QgWyB3b3JrX3NldExJX3NpemUsIHdvcmtfc2V0c3ZnRnJhbWVQYWNrU2l6ZSwgd29ya19zdHlsZUxJLCB3b3JrX3N0eWxlU3ZnRnJhbWVQYWNrLCB3b3JrX2NoYW5nZUhpZXJhcmNoeVN2Z0ZyYW1lUGFja10gPSB1c2VNZW51U2l6ZShcIndvcmtcIik7XHJcbiAgY29uc3QgWyBza2lsbF9zZXRMSV9zaXplLCBza2lsbF9zZXRzdmdGcmFtZVBhY2tTaXplLCBza2lsbF9zdHlsZUxJLCBza2lsbF9zdHlsZVN2Z0ZyYW1lUGFjaywgc2tpbGxfY2hhbmdlSGllcmFyY2h5U3ZnRnJhbWVQYWNrXSA9IHVzZU1lbnVTaXplKFwic2tpbGxcIik7XHJcbiAgY29uc3QgWyBwYWludF9zZXRMSV9zaXplLCBwYWludF9zZXRzdmdGcmFtZVBhY2tTaXplLCBwYWludF9zdHlsZUxJLCBwYWludF9zdHlsZVN2Z0ZyYW1lUGFjaywgcGFpbnRfY2hhbmdlSGllcmFyY2h5U3ZnRnJhbWVQYWNrXSA9IHVzZU1lbnVTaXplKFwicGFpbnRcIik7XHJcbiAgY29uc3QgWyBpbmZvX3NldExJX3NpemUsIGluZm9fc2V0c3ZnRnJhbWVQYWNrU2l6ZSwgaW5mb19zdHlsZUxJLCBpbmZvX3N0eWxlU3ZnRnJhbWVQYWNrLCBpbmZvX2NoYW5nZUhpZXJhcmNoeVN2Z0ZyYW1lUGFja10gPSB1c2VNZW51U2l6ZShcImluZm9cIik7XHJcblxyXG4gIGNvbnN0IGxpZ2h0ZXJWZXJzaW9uID0gdXNlUmVmKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgW3N2Z0ZyYW1lVmFsdWVzLCBzZXRTdmdGcmFtZVZhbHVlc10gPSB1c2VTdGF0ZSh7IHN2Z0ZyYW1lRGVmYXVsdDogdW5kZWZpbmVkLCByYWRpdXM6IHVuZGVmaW5lZCwgd2F2eVBhdGg6IHVuZGVmaW5lZCwgZXh0cmFTcGFjZTogdW5kZWZpbmVkLCBzdHJva2VXaWR0aDogeyByZWN0OiBcIjBweFwiLCB3YXZ5OiBcIjBweFwiIH19KTtcclxuICBjb25zdCBzdmdGcmFtZVZhbHVlc0ltbXV0YWJsZSA9IHVzZVJlZih7IHg6IDAsIHk6IDAsIHJ4OiA1LCByeTogNSwgbXVsdGlwbHk6IDMsIHNjYWxlOiAxLCBzcGVlZDogWzIsIDNdLCBmaWxsOiBcIm5vbmVcIn0pO1xyXG5cclxuICBjb25zdCBbY2xpY2tDb250ZXh0LCBzZXRDbGlja0NvbnRleHRdID0gdXNlU3RhdGUoeyBvbjogZmFsc2UsIGJpZ2dlcjogbnVsbCwgYmlnZ2VyZWQ6IG51bGx9KTtcclxuICBjb25zdCBbY2xpY2tBZnRlckNvbnRleHQsIHNldENsaWNrQWZ0ZXJDb250ZXh0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IGNsaWNrUmVmID0gdXNlUmVmKHsgb25BbmltOiBmYWxzZSwgYWN0aXZlOiB0cnVlLCBtZW51RXh0ZW5kZWQ6IGZhbHNlLCBiaWdnZXJFbGVtUGFyZW50SWQ6IG51bGwsIGJpZ2dlckVsZW06IG51bGwsIGJpZ2dlckVsZW1SZWN0OiBudWxsLCBiaWdnZXJOZW9uUmVmczogW10sIGJpZ2dlcmVkRWxlbTogbnVsbCwgYmlnZ2VyZWRFbGVtUGFyZW50SWQ6IG51bGwsIGJpZ2dlcmVkRWxlbVJlY3Q6IG51bGwsIHdhdnlQYXRoOiBbXX0pO1xyXG5cclxuICBjb25zdCBleHRlbmRpbmdSZXF1ZXN0QW5pbVJlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCB3YXZ5QW5pbSA9IHVzZVJlZih7IFRMOiBudWxsLCBwb2ludHM6IG51bGwgfSk7XHJcblxyXG4gIGNvbnN0IGRlbW9SZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgbG9nb1JlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgY29uc3QgbW9kZSA9IHVzZVJlZih7IG1vYmlsZU1vZGU6IG51bGwsIF9tb2JpbGVNb2RlOiBudWxsLCB3aWRlck1vZGU6IG51bGwsIF93aWRlck1vZGU6IG51bGx9KTtcclxuXHJcblxyXG4gIC8vIGNvbnN0IHdhdnlBbmltLmN1cnJlbnQucG9pbnRzIHVzZVJlZigpO1xyXG5cclxuICBjb25zdCBtZW51VmFsdWVzID0gdXNlUmVmKFt7IGlkOiBcIndvcmtcIiwgb3JkZXI6IDEsIHN0b3BDb2xvcjogW1wicmdiKDIyMCwgNTEsIDM1KVwiLCBcInJnYigyMTIsIDExNiwgNDMpXCJdLCBzdHJva2VDb2xvcjogW1wiI2ZmM2IyOVwiLCBcIiNmZjhjMzRcIl19LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgaWQ6IFwic2tpbGxcIiwgb3JkZXI6IDIsIHN0b3BDb2xvcjogW1wicmdiKDE2OCwgNjMsIDIwOSlcIiwgXCJyZ2IoMTkyLCA0OSwgOTEpXCJdLCBzdHJva2VDb2xvcjogW1wiI2NkNGRmZlwiLCBcIiNmZjQxNzlcIl19LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgaWQ6IFwicGFpbnRcIiwgb3JkZXI6IDMsIHN0b3BDb2xvcjogW1wicmdiKDIyNSwgMTQ5LCA0NilcIiwgXCJyZ2IoNDgsIDE3MSwgMTUyKVwiXSwgc3Ryb2tlQ29sb3I6IFtcIiNmZmE5MzRcIiwgXCIjMzBhYjk4XCJdfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGlkOiBcImluZm9cIiwgb3JkZXI6IDQsIHN0b3BDb2xvcjogW1wicmdiKDIwMCwgODYsIDE3NylcIiwgXCJyZ2IoNzUsIDE3MywgMjA5KVwiXSwgc3Ryb2tlQ29sb3I6IFtcIiNmZjZlZTJcIiwgXCIjNWNkM2ZmXCJdfV0pO1xyXG4gIGNvbnN0IGFsbEVsZW1zID0gdXNlUmVmKCk7XHJcblxyXG4gIGxldCBkZW1vVmlkZW9IZWlnaHQ7XHJcblxyXG4gIGNvbnN0IFtsb2dvRGlzcGxheSwgbG9nb0Rpc3BsYXlEaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKGxvZ29EaXNwbGF5UmVkdWNlciwge1xyXG4gICAgbG9nb19oZWlnaGVyOiBcIm5vbmVcIixcclxuICAgIGxvZ29fd2lkZXI6IFwibm9uZVwiLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBjaGFuZ2VNb2RlPSB1c2VDYWxsYmFjaygobW9iaWxlPW51bGwsIHdpZGVyPW51bGwsIHRlc3QpPT57XHJcbiAgICBtb2RlLmN1cnJlbnQuX21vYmlsZU1vZGUgPSBpbm5lcldpZHRoIDw9IDgwMCA/IHRydWUgOiBmYWxzZTtcclxuICAgIG1vZGUuY3VycmVudC5fd2lkZXJNb2RlID0gaW5uZXJXaWR0aCA+PSAxNDAwID8gdHJ1ZSA6IGZhbHNlO1xyXG5cclxuICAgIGlmIChtb2RlLmN1cnJlbnQubW9iaWxlTW9kZSAhPT0gbW9kZS5jdXJyZW50Ll9tb2JpbGVNb2RlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdtb2JpbGVNb2RlIG1vZGUgY2hhbmdlZCcsIG1vZGUuY3VycmVudC5tb2JpbGVNb2RlKVxyXG4gICAgICBtb2RlLmN1cnJlbnQubW9iaWxlTW9kZSA9ICFtb2RlLmN1cnJlbnQubW9iaWxlTW9kZTtcclxuICAgICAgbW9iaWxlO1xyXG4gICAgICB0ZXN0O1xyXG4gICAgfVxyXG4gICAgaWYgKG1vZGUuY3VycmVudC53aWRlck1vZGUgIT09IG1vZGUuY3VycmVudC5fd2lkZXJNb2RlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCd3aWRlck1vZGUgbW9kZSBjaGFuZ2VkJywgbW9kZS5jdXJyZW50LndpZGVyTW9kZSlcclxuICAgICAgbW9kZS5jdXJyZW50LndpZGVyTW9kZSA9ICFtb2RlLmN1cnJlbnQud2lkZXJNb2RlO1xyXG4gICAgICB3aWRlcjtcclxuICAgICAgdGVzdDtcclxuICAgIH1cclxuICB9LFtdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbW9kZS5jdXJyZW50Lm1vYmlsZU1vZGUgPSBpbm5lcldpZHRoIDw9IDgwMCA/IHRydWUgOiBmYWxzZTtcclxuICAgIG1vZGUuY3VycmVudC53aWRlck1vZGUgPSBpbm5lcldpZHRoID49IDE0MDAgPyB0cnVlIDogZmFsc2U7XHJcbiAgICBtb2RlLmN1cnJlbnQuX21vYmlsZU1vZGUgPSBtb2RlLmN1cnJlbnQubW9iaWxlTW9kZTtcclxuICAgIG1vZGUuY3VycmVudC5fd2lkZXJNb2RlID0gbW9kZS5jdXJyZW50LndpZGVyTW9kZTtcclxuXHJcbiAgICBhbGxFbGVtcy5jdXJyZW50ID0gbWVudVZhbHVlcy5jdXJyZW50Lm1hcCgoZWxlbSkgPT4ge1xyXG4gICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbS5pZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBhc3Ryb25hdXQoKTtcclxuICAgIGhvbWVHc2FwU2V0KGNsaWNrUmVmLmN1cnJlbnQubWVudUV4dGVuZGVkLCB0cnVlKTtcclxuICAgIHVwZGF0ZVN2Z0ZyYW1lVmFsdWVzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCB1cGRhdGVTdmdGcmFtZVZhbHVlcyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwidXBkYXRlU3ZnRnJhbWVWYWx1ZXMgaXMgY2FsbGluZ1wiKTtcclxuICAgIGxldCBfcmFkaXVzID0gaW5uZXJXaWR0aCA+IDgwMCA/IChpbm5lcldpZHRoID4gMTQwMCA/IDkgOiA3KSA6IDU7XHJcbiAgICBsZXQgX3dhdnlQYXRoID0gTWF0aC5hYnMoaW5uZXJXaWR0aCAtIGlubmVyV2lkdGgpICogMC4wMSArIDI1O1xyXG4gICAgbGV0IF9zdHJva2VXaWR0aCA9XHJcbiAgICAgIGlubmVyV2lkdGggPiA4MDBcclxuICAgICAgICA/IGlubmVyV2lkdGggPiAxNDAwXHJcbiAgICAgICAgICA/IHsgcmVjdDogXCIwLjVyZW1cIiwgd2F2eTogXCIwLjdyZW1cIiB9XHJcbiAgICAgICAgICA6IHsgcmVjdDogXCIwLjV2d1wiLCB3YXZ5OiBcIjF2d1wiIH1cclxuICAgICAgICA6IHsgcmVjdDogXCIwLjNyZW1cIiwgd2F2eTogXCIwLjVyZW1cIiB9O1xyXG4gICAgbGV0IF9zdmdGcmFtZURlZmF1bHQ7XHJcblxyXG4gICAgaWYgKGlubmVyV2lkdGggPiAxNDAwKSB7XHJcbiAgICAgIF9zdmdGcmFtZURlZmF1bHQgPSBUVi5zdmdGcmFtZURlZmF1bHRTaXplMTQwMDtcclxuICAgIH0gZWxzZSBpZiAoaW5uZXJXaWR0aCA+IDgwMCkge1xyXG4gICAgICBfc3ZnRnJhbWVEZWZhdWx0ID0gVFYuc3ZnRnJhbWVEZWZhdWx0U2l6ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChjbGlja1JlZi5jdXJyZW50Lm1lbnVFeHRlbmRlZCA9PSBmYWxzZSkge1xyXG4gICAgICAgIF9zdmdGcmFtZURlZmF1bHQgPSBUVi5zdmdGcmFtZURlZmF1bHRTaXplODAwO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIF9zdmdGcmFtZURlZmF1bHQgPSBUVi5zdmdGcmFtZURlZmF1bHRTaXplU21hbGxlclNpemU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRTdmdGcmFtZVZhbHVlcyh7XHJcbiAgICAgIC4uLnN2Z0ZyYW1lVmFsdWVzLFxyXG4gICAgICBzdmdGcmFtZURlZmF1bHQ6IHsgd2lkdGg6IF9zdmdGcmFtZURlZmF1bHQsIGhlaWdodDogX3N2Z0ZyYW1lRGVmYXVsdCB9LFxyXG4gICAgICByYWRpdXM6IF9yYWRpdXMsXHJcbiAgICAgIHdhdnlQYXRoOiBfd2F2eVBhdGgsXHJcbiAgICAgIGV4dHJhU3BhY2U6IF9yYWRpdXMgKiA1LFxyXG4gICAgICBzdHJva2VXaWR0aDogX3N0cm9rZVdpZHRoLFxyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHN2Z0ZyYW1lVmFsdWVzLnJhZGl1cyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGlmIChjbGlja1JlZi5jdXJyZW50Lm1lbnVFeHRlbmRlZCkge1xyXG4gICAgICAgIG1lbnVWYWx1ZXMuY3VycmVudC5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICAgICAgICBpZiAoY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtUGFyZW50SWQgIT09IGVsZW0uaWQpIHtcclxuICAgICAgICAgICAgZXZhbChlbGVtLmlkICsgXCJfY2hhbmdlSGllcmFyY2h5U3ZnRnJhbWVQYWNrXCIpKHN2Z0ZyYW1lVmFsdWVzKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZW51VmFsdWVzLmN1cnJlbnQuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgICAgICAgZXZhbChlbGVtLmlkICsgXCJfY2hhbmdlSGllcmFyY2h5U3ZnRnJhbWVQYWNrXCIpKHN2Z0ZyYW1lVmFsdWVzKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFtzdmdGcmFtZVZhbHVlc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IHVwZGF0ZVJlc2l6ZSA9ICgpID0+IHtcclxuXHJcblxyXG4gICAgICBob21lR3NhcFNldCggY2xpY2tSZWYuY3VycmVudC5tZW51RXh0ZW5kZWQsIG1vZGUuY3VycmVudC5tb2JpbGVNb2RlICE9PSBtb2RlLmN1cnJlbnQuX21vYmlsZU1vZGUgKTtcclxuXHJcbiAgICAgIGlmIChjbGlja1JlZi5jdXJyZW50Lm1lbnVFeHRlbmRlZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzaXplIGlzIHdvcmtpbmdcIik7XHJcbiAgICAgICAgcmVtYWluRXh0ZW5kaW5nTWVudSgpO1xyXG4gICAgICAgIGNyZWF0ZVdhdnlBbmltYXRpb24oe1xyXG4gICAgICAgICAgd2lkdGg6IGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbS5jbGllbnRXaWR0aCxcclxuICAgICAgICAgIGhlaWdodDogY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtLmNsaWVudEhlaWdodCxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBjaGFuZ2VNb2RlKHVwZGF0ZVN2Z0ZyYW1lVmFsdWVzKCksdXBkYXRlU3ZnRnJhbWVWYWx1ZXMoKSwgdGVzdCgpKTtcclxuICAgICAgXHJcbiAgICB9O1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdXBkYXRlUmVzaXplKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHVwZGF0ZVJlc2l6ZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtzdmdGcmFtZVZhbHVlc10pO1xyXG5cclxuICBjb25zdCByZW1haW5FeHRlbmRpbmdNZW51ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtUmVjdC5zZXRBdHRyaWJ1dGVOUyggbnVsbCwgXCJ3aWR0aFwiLCBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW0uY2xpZW50V2lkdGggKTtcclxuICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbVJlY3Quc2V0QXR0cmlidXRlTlMoIG51bGwsIFwiaGVpZ2h0XCIsIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbS5jbGllbnRIZWlnaHQgKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHRlc3Q9IChudW1iKT0+e1xyXG4gICAgY29uc29sZS5sb2coJ2lzIGl0IHdvcmtpbmc/JyxudW1iKVxyXG4gIH1cclxuICAvLyBmdW5jdGlvbiBkaXNhYmxlQ2xpY2soKXtcclxuICAvLyAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xyXG4gIC8vICAgICBhY3RpdmVDbGljayA9IGZhbHNlO1xyXG4gIC8vICAgICBjb25zb2xlLmxvZyhhY3RpdmVDbGljayk7XHJcbiAgLy8gICAgIHJlc29sdmUoKTtcclxuICAvLyAgIH0pXHJcbiAgLy8gfVxyXG5cclxuICAvLyAtLS0tLSAgIHRoZSByZWFzb24gSSBwdXQgc3ZnRnJhbWVWYWx1ZSBhcyBhbiBhcmd1bWVudCwgbm90IGp1c3QgdXNpbmcgc3ZnRnJhbWVWYWx1ZSBhcyBhIFJlZixcclxuICAvLyAtLS0tLSBpcyBJIGRvbid0IHdhbnQgdG8gcmVyZW5kZXIgYWxsIHRoaXMgZnVuY3Rpb25zIHdoZW5ldmVyIHN2Z0ZyYW1lVmFsdWVzIGNoYW5nZXMuXHJcbiAgY29uc3QgdHJhbnNmb3JtQWxsRWFjaE1lbnVzID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoX3N2Z0ZyYW1lVmFsdWVzLCBleHRlbmRpbmdTaXplLCBlbGVtUGFyZW50SWQpID0+IHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBjb25zdCBORiA9IFRWW1wibWVudUR1cmF0aW9uXCJdICogNjA7XHJcblxyXG4gICAgICAgIGxldCBmID0gMDtcclxuICAgICAgICBsZXQgZGlyID0gMTtcclxuXHJcbiAgICAgICAgYWRkQ1NTbWVudXRyYW5zaXRpb24obnVsbCwgLi4uYWxsRWxlbXMuY3VycmVudCk7XHJcbiAgICAgICAgZXh0ZW5kaW5nU2l6ZS5MSS5mb3JFYWNoKChvYmopID0+IHtcclxuICAgICAgICAgIGV2YWwob2JqW1wiZWxlbUlkXCJdICsgXCJfc2V0TElfc2l6ZVwiKSh7IHdpZHRoOiBvYmoud2lkdGgsIGhlaWdodDogb2JqLmhlaWdodCB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgYWRkQ1NTbWVudXRyYW5zaXRpb24obnVsbCwgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtKTtcclxuICAgICAgICAgIGV2YWwoZWxlbVBhcmVudElkICsgXCJfY2hhbmdlSGllcmFyY2h5U3ZnRnJhbWVQYWNrXCIpKCBfc3ZnRnJhbWVWYWx1ZXMsIGV4dGVuZGluZ1NpemVbXCJzdmdGcmFtZVBhY2thZ2VcIl1cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2xpY2tSZWYuY3VycmVudC5iaWdnZXJlZEVsZW1QYXJlbnRJZCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgYWRkQ1NTbWVudXRyYW5zaXRpb24obnVsbCwgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJlZEVsZW0pO1xyXG4gICAgICAgICAgZXZhbCggY2xpY2tSZWYuY3VycmVudC5iaWdnZXJlZEVsZW1QYXJlbnRJZCArIFwiX2NoYW5nZUhpZXJhcmNoeVN2Z0ZyYW1lUGFja1wiICkoX3N2Z0ZyYW1lVmFsdWVzLCB7IHdpZHRoOiBfc3ZnRnJhbWVWYWx1ZXMuc3ZnRnJhbWVEZWZhdWx0LndpZHRoLCBoZWlnaHQ6IF9zdmdGcmFtZVZhbHVlcy5zdmdGcmFtZURlZmF1bHQuaGVpZ2h0IH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlubmVyV2lkdGggPCA4MDApIHtcclxuICAgICAgICAgIGNvbnN0IHNpemUgPSBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW0gIT09IG51bGwgID8gVFYuc3ZnRnJhbWVEZWZhdWx0U2l6ZVNtYWxsZXJTaXplIDogX3N2Z0ZyYW1lVmFsdWVzW1wic3ZnRnJhbWVEZWZhdWx0XCJdO1xyXG4gICAgICAgICAgY29uc3QgY2hpbGRFbGVtcyA9IGFsbEVsZW1zLmN1cnJlbnQubWFwKChlKSA9PiBlLmZpcnN0RWxlbWVudENoaWxkKTtcclxuXHJcbiAgICAgICAgICBhZGRDU1NtZW51dHJhbnNpdGlvbihlbGVtUGFyZW50SWQsIC4uLmNoaWxkRWxlbXMpO1xyXG5cclxuICAgICAgICAgIG1lbnVWYWx1ZXMuY3VycmVudC5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW1QYXJlbnRJZCAhPT0gZWxlbS5pZCkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtLmlkICsgXCJTdmdGcmFtZVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgZXZhbChlbGVtLmlkICsgXCJfY2hhbmdlSGllcmFyY2h5U3ZnRnJhbWVQYWNrXCIpKF9zdmdGcmFtZVZhbHVlcywgeyB3aWR0aDogc2l6ZSwgaGVpZ2h0OiBzaXplIH0pO1xyXG5cclxuICAgICAgICAgICAgICByZWN0LnNldEF0dHJpYnV0ZU5TKG51bGwsIFwid2lkdGhcIiwgc2l6ZSk7XHJcbiAgICAgICAgICAgICAgcmVjdC5zZXRBdHRyaWJ1dGVOUyhudWxsLCBcImhlaWdodFwiLCBzaXplKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBhbmltKCkge1xyXG4gICAgICAgICAgZiArPSBkaXI7XHJcbiAgICAgICAgICBpZiAoY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbVJlY3Quc2V0QXR0cmlidXRlTlMoXHJcbiAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICBcIndpZHRoXCIsXHJcbiAgICAgICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtLmNsaWVudFdpZHRoXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbVJlY3Quc2V0QXR0cmlidXRlTlMoXHJcbiAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICBcImhlaWdodFwiLFxyXG4gICAgICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbS5jbGllbnRIZWlnaHRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAoY2xpY2tSZWYuY3VycmVudC5iaWdnZXJlZEVsZW1QYXJlbnRJZCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlcmVkRWxlbVJlY3Quc2V0QXR0cmlidXRlTlMoXHJcbiAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICBcIndpZHRoXCIsXHJcbiAgICAgICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJlZEVsZW0uY2xpZW50V2lkdGhcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJlZEVsZW1SZWN0LnNldEF0dHJpYnV0ZU5TKFxyXG4gICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgXCJ3aWR0aFwiLFxyXG4gICAgICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyZWRFbGVtLmNsaWVudFdpZHRoXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBleHRlbmRpbmdSZXF1ZXN0QW5pbVJlZi5jdXJyZW50ID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW0pO1xyXG5cclxuICAgICAgICAgIGlmICghKGYgJSBORikpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCI9PT09PT09ZmluaXNoZWQ9PT09PT09XCIpO1xyXG4gICAgICAgICAgICAvLyBvbkFuaW0gPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbSAhPT0gbnVsbClcclxuICAgICAgICAgICAgICBldmFsKGVsZW1QYXJlbnRJZCArIFwiX2NoYW5nZUhpZXJhcmNoeVN2Z0ZyYW1lUGFja1wiKShcclxuICAgICAgICAgICAgICAgIF9zdmdGcmFtZVZhbHVlcyxcclxuICAgICAgICAgICAgICAgIHsgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH1cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgZXZhbChlbGVtUGFyZW50SWQgKyBcIl9jaGFuZ2VIaWVyYXJjaHlTdmdGcmFtZVBhY2tcIikoXHJcbiAgICAgICAgICAgICAgICBfc3ZnRnJhbWVWYWx1ZXMsXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBfc3ZnRnJhbWVWYWx1ZXNbXCJzdmdGcmFtZURlZmF1bHRcIl0sXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogX3N2Z0ZyYW1lVmFsdWVzW1wic3ZnRnJhbWVEZWZhdWx0XCJdLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShleHRlbmRpbmdSZXF1ZXN0QW5pbVJlZi5jdXJyZW50KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXNvbHZlP1wiKTtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBhbmltKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFtdXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgY3JlYXRlV2F2eUFuaW1hdGlvbiA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKGV4dGVuZGluZ1NpemUpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJjcmVhdGVXYXZ5QW5pbWF0aW9uIGlzIHdvcmtpbmdcIik7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gODAwKSB7XHJcbiAgICAgICAgICBsZXQgZGF0YVBvaW50cywgcG9pbnRzVHdlZW4xLCBwb2ludHNUd2VlbjI7XHJcblxyXG4gICAgICAgICAgaWYgKHN2Z0ZyYW1lVmFsdWVzLndhdnlQYXRoID4gZXh0ZW5kaW5nU2l6ZVtcIndpZHRoXCJdIC8gMikge1xyXG4gICAgICAgICAgICByZXR1cm4gc2V0U3ZnRnJhbWVWYWx1ZXMoe1xyXG4gICAgICAgICAgICAgIC4uLnN2Z0ZyYW1lVmFsdWVzLFxyXG4gICAgICAgICAgICAgIHdhdnlQYXRoOiBleHRlbmRpbmdTaXplW1wid2lkdGhcIl0gLyAyLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAod2F2eUFuaW0uY3VycmVudC5UTCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICB3YXZ5QW5pbS5jdXJyZW50LlRMID0gZ3NhcC50aW1lbGluZSh7XHJcbiAgICAgICAgICAgICAgb25VcGRhdGU6IHVwZGF0ZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB3YXZ5QW5pbS5jdXJyZW50LlRMLnJlc3VtZSgpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGRhdGFQb2ludHMgPSBnZXREYXRhUG9pbnRzKFxyXG4gICAgICAgICAgICBleHRlbmRpbmdTaXplLFxyXG4gICAgICAgICAgICBzdmdGcmFtZVZhbHVlcyxcclxuICAgICAgICAgICAgc3ZnRnJhbWVWYWx1ZXNJbW11dGFibGUuY3VycmVudFxyXG4gICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICB3YXZ5QW5pbS5jdXJyZW50LnBvaW50cyA9IHtcclxuICAgICAgICAgICAgcG9pbnRzMTogZGF0YVBvaW50cy5wb2ludHMxLFxyXG4gICAgICAgICAgICBwb2ludHMyOiBkYXRhUG9pbnRzLnBvaW50czIsXHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIHBvaW50c1R3ZWVuMSA9IGRhdGFQb2ludHMucG9pbnRzVHdlZW4xO1xyXG4gICAgICAgICAgcG9pbnRzVHdlZW4yID0gZGF0YVBvaW50cy5wb2ludHNUd2VlbjI7XHJcblxyXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3YXZ5QW5pbS5jdXJyZW50LnBvaW50cy5wb2ludHMxLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBkdXJhdGlvbiA9IHJhbmRvbShcclxuICAgICAgICAgICAgICBzdmdGcmFtZVZhbHVlc0ltbXV0YWJsZS5jdXJyZW50W1wic3BlZWRcIl1bMF0sXHJcbiAgICAgICAgICAgICAgc3ZnRnJhbWVWYWx1ZXNJbW11dGFibGUuY3VycmVudFtcInNwZWVkXCJdWzFdXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBsZXQgdHdlZW4xID0gZ3NhcC50byh3YXZ5QW5pbS5jdXJyZW50LnBvaW50cy5wb2ludHMxW2ldLCB7XHJcbiAgICAgICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxyXG4gICAgICAgICAgICAgIHg6IHBvaW50c1R3ZWVuMVtpXS54LFxyXG4gICAgICAgICAgICAgIHk6IHBvaW50c1R3ZWVuMVtpXS55LFxyXG4gICAgICAgICAgICAgIHJlcGVhdDogLTEsXHJcbiAgICAgICAgICAgICAgeW95bzogdHJ1ZSxcclxuICAgICAgICAgICAgICBlYXNlOiBTaW5lLmVhc2VJbk91dCxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgdHdlZW4yID0gZ3NhcC50byh3YXZ5QW5pbS5jdXJyZW50LnBvaW50cy5wb2ludHMyW2ldLCB7XHJcbiAgICAgICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxyXG4gICAgICAgICAgICAgIHg6IHBvaW50c1R3ZWVuMltpXS54LFxyXG4gICAgICAgICAgICAgIHk6IHBvaW50c1R3ZWVuMltpXS55LFxyXG4gICAgICAgICAgICAgIHJlcGVhdDogLTEsXHJcbiAgICAgICAgICAgICAgeW95bzogdHJ1ZSxcclxuICAgICAgICAgICAgICBlYXNlOiBTaW5lLmVhc2VJbk91dCxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB3YXZ5QW5pbS5jdXJyZW50LlRMLmFkZCh0d2VlbjEsIC1yYW5kb20oZHVyYXRpb24pKTtcclxuICAgICAgICAgICAgd2F2eUFuaW0uY3VycmVudC5UTC5hZGQodHdlZW4yLCAtcmFuZG9tKGR1cmF0aW9uKSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgZnVuY3Rpb24gdXBkYXRlKCkge1xyXG4gICAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LndhdnlQYXRoWzBdLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgICBcImRcIixcclxuICAgICAgICAgICAgICB0d2VlbkNhcmRpbmFsKHdhdnlBbmltLmN1cnJlbnQucG9pbnRzLnBvaW50czEsIHRydWUsIDEpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQud2F2eVBhdGhbMV0uc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgICAgIFwiZFwiLFxyXG4gICAgICAgICAgICAgIHR3ZWVuQ2FyZGluYWwod2F2eUFuaW0uY3VycmVudC5wb2ludHMucG9pbnRzMiwgdHJ1ZSwgMSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICByZXR1cm4gd2F2eUFuaW0uY3VycmVudC5UTDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKHdhdnlBbmltLmN1cnJlbnQuVEwgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKCF3YXZ5QW5pbS5jdXJyZW50LlRMLnBhdXNlZCgpKSB7XHJcbiAgICAgICAgICAgICAgd2F2eUFuaW0uY3VycmVudC5UTCA9IHdhdnlBbmltLmN1cnJlbnQuVEwucGF1c2UoKTtcclxuICAgICAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LndhdnlQYXRoWzBdLnNldEF0dHJpYnV0ZShcImRcIiwgXCJcIik7XHJcbiAgICAgICAgICAgICAgY2xpY2tSZWYuY3VycmVudC53YXZ5UGF0aFsxXS5zZXRBdHRyaWJ1dGUoXCJkXCIsIFwiXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgW3N2Z0ZyYW1lVmFsdWVzXVxyXG4gICk7XHJcblxyXG4gIC8vIHVzZUVmZmVjdCgoKT0+e3NldENsaWNrQWZ0ZXJDb250ZXh0KCdza2lsbCcpO30sW10pXHJcblxyXG4gIGNvbnN0IGV4dGVuZE1lbnUgPSB1c2VDYWxsYmFjayhcclxuICAgIChlbGVtLCBvcmRlciA9IDAsIHRleHRSZWYsIGNvbnRlbnRSZWYsIG5lb25SZWZzKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZWxlbVwiLCBlbGVtKTtcclxuICAgICAgY29uc3QgZWxlbVBhcmVudElkID0gZWxlbS5wYXJlbnRFbGVtZW50LmlkO1xyXG5cclxuICAgICAgaWYgKGNsaWNrUmVmLmN1cnJlbnQub25BbmltID09PSB0cnVlKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChjbGlja1JlZi5jdXJyZW50Lm1lbnVFeHRlbmRlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQub25BbmltID0gdHJ1ZTtcclxuICAgICAgICAgIHNldENsaWNrQ29udGV4dCh7IG9uOiB0cnVlLCBiaWdnZXI6IGVsZW1QYXJlbnRJZCwgYmlnZ2VyZWQ6IG51bGwgfSk7XHJcbiAgICAgICAgICBjbGlja1JlZi5jdXJyZW50Lm1lbnVFeHRlbmRlZCA9IHRydWU7XHJcbiAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW1QYXJlbnRJZCA9IGVsZW1QYXJlbnRJZDtcclxuICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbSA9IGVsZW07XHJcbiAgICAgICAgICAoY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtUmVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICAgICAgICBlbGVtUGFyZW50SWQgKyBcIlN2Z0ZyYW1lXCJcclxuICAgICAgICAgICkpLFxyXG4gICAgICAgICAgICAoY2xpY2tSZWYuY3VycmVudC53YXZ5UGF0aCA9IFtcclxuICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtUGFyZW50SWQgKyBcIlN2Z1dhdnkxXCIpLFxyXG4gICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1QYXJlbnRJZCArIFwiU3ZnV2F2eTJcIiksXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgY2xpY2tSZWYuY3VycmVudC50ZXh0UmVmID0gdGV4dFJlZjtcclxuICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuY29udGVudFJlZiA9IGNvbnRlbnRSZWY7XHJcbiAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlck5lb25SZWZzID0gbmVvblJlZnM7XHJcblxyXG4gICAgICAgICAgZGVtb1ZpZGVvSGVpZ2h0ID0gZ2V0RGVtb1ZpZGVvSGVpZ2h0KGNsaWNrUmVmLmN1cnJlbnQubWVudUV4dGVuZGVkKTtcclxuICAgICAgICAgIGxldCBleHRlbmRpbmdTaXplID0gZ2V0VmFsdWVzVG9VblN5bWV0cnlFYWNoTWVudShcclxuICAgICAgICAgICAgZGVtb1ZpZGVvSGVpZ2h0LFxyXG4gICAgICAgICAgICBlbGVtLFxyXG4gICAgICAgICAgICBvcmRlclxyXG4gICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICBmdW5jdGlvbiBjaGVja0NhbGxpbmdBc3Ryb25hdXQoKSB7XHJcbiAgICAgICAgICAgIGlmICghbGlnaHRlclZlcnNpb24uY3VycmVudCkgY2FsbEFzdHJvbmF1dChlbGVtUGFyZW50SWQpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIFByb21pc2UuYWxsKFtcclxuICAgICAgICAgICAgaG9tZUdzYXBUcmFuc2l0aW9uKGNsaWNrUmVmLmN1cnJlbnQubWVudUV4dGVuZGVkKSxcclxuICAgICAgICAgICAgbG9nb0Rpc3BsYXlEaXNwYXRjaCh7IGRlbW9DbGllbnRIZWlnaHQ6IGRlbW9SZWYuY3VycmVudC5jbGllbnRIZWlnaHQsIGxvZ29DbGllbnRXaWR0aDogKCgoaW5uZXJXaWR0aCAqICgxMDAgLSBUVi51blN5bWV0cnlEZW1vTWVudSkpIC8gMTAwKSAqIFRWLmxvZ29XaWR0aCkgLyAxMDAgfSksXHJcbiAgICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbVJlY3Quc2V0QXR0cmlidXRlTlMoIG51bGwsIFwic3Ryb2tlXCIsIFwidXJsKCNTdmdJdm9yeSlcIiksXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybUFsbEVhY2hNZW51cyhzdmdGcmFtZVZhbHVlcywgZXh0ZW5kaW5nU2l6ZSwgZWxlbVBhcmVudElkKSxcclxuICAgICAgICAgICAgY2hlY2tDYWxsaW5nQXN0cm9uYXV0KCksXHJcbiAgICAgICAgICBdKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgY3JlYXRlV2F2eUFuaW1hdGlvbihleHRlbmRpbmdTaXplW1wic3ZnRnJhbWVQYWNrYWdlXCJdKTtcclxuICAgICAgICAgICAgICB0ZXh0UmVmLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICBjb250ZW50UmVmLnN0eWxlLmRpc3BsYXkgPSBcImluaXRpYWxcIjtcclxuICAgICAgICAgICAgICBjb250ZW50UmVmLnN0eWxlLnpJbmRleCA9IDM7XHJcbiAgICAgICAgICAgICAgc2V0Q2xpY2tBZnRlckNvbnRleHQoZWxlbVBhcmVudElkKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQub25BbmltID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtUGFyZW50SWQgIT09IGVsZW1QYXJlbnRJZCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJlbHNlIGlmXCIpO1xyXG4gICAgICAgICAgY29uc3QgYmlnZ2VyZWRXYXZ5UGF0aCA9IGNsaWNrUmVmLmN1cnJlbnQud2F2eVBhdGg7XHJcbiAgICAgICAgICBjb25zdCBiaWdnZXJlZFRleHQgPSBjbGlja1JlZi5jdXJyZW50LnRleHRSZWY7XHJcbiAgICAgICAgICBjb25zdCBiaWdnZXJlZENvbnRlbnRSZWYgPSBjbGlja1JlZi5jdXJyZW50LmNvbnRlbnRSZWY7XHJcbiAgICAgICAgICBjb25zdCBiaWdnZXJlZE5lb25SZWZzID0gY2xpY2tSZWYuY3VycmVudC5iaWdnZXJOZW9uUmVmcztcclxuXHJcbiAgICAgICAgICBjbGlja1JlZi5jdXJyZW50Lm9uQW5pbSA9IHRydWU7XHJcbiAgICAgICAgICBzZXRDbGlja0NvbnRleHQoeyBvbjogdHJ1ZSwgYmlnZ2VyOiBlbGVtUGFyZW50SWQsIGJpZ2dlcmVkOiBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW1QYXJlbnRJZH0pO1xyXG4gICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJlZEVsZW0gPSBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW07XHJcbiAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlcmVkRWxlbVBhcmVudElkID0gY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtUGFyZW50SWQ7XHJcbiAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlcmVkRWxlbVJlY3QgPSBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW1SZWN0O1xyXG4gICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtID0gZWxlbTtcclxuICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbVBhcmVudElkID0gZWxlbVBhcmVudElkO1xyXG4gICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtID0gZWxlbTtcclxuICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbVJlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggZWxlbVBhcmVudElkICsgXCJTdmdGcmFtZVwiICk7XHJcbiAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LndhdnlQYXRoID0gWyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtUGFyZW50SWQgKyBcIlN2Z1dhdnkxXCIpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtUGFyZW50SWQgKyBcIlN2Z1dhdnkyXCIpXTtcclxuICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQudGV4dFJlZiA9IHRleHRSZWY7XHJcbiAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmNvbnRlbnRSZWYgPSBjb250ZW50UmVmO1xyXG4gICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJOZW9uUmVmcyA9IG5lb25SZWZzO1xyXG5cclxuICAgICAgICAgIGRlbW9WaWRlb0hlaWdodCA9IGdldERlbW9WaWRlb0hlaWdodChjbGlja1JlZi5jdXJyZW50Lm1lbnVFeHRlbmRlZCk7XHJcbiAgICAgICAgICBsZXQgZXh0ZW5kaW5nU2l6ZSA9IGdldFZhbHVlc1RvVW5TeW1ldHJ5RWFjaE1lbnUoIGRlbW9WaWRlb0hlaWdodCwgZWxlbSwgb3JkZXIgKTtcclxuXHJcbiAgICAgICAgICBpZiAoaW5uZXJXaWR0aCA+IDgwMCkgd2F2eUFuaW0uY3VycmVudC5UTC5wYXVzZSgwKTtcclxuXHJcbiAgICAgICAgICBmdW5jdGlvbiBjaGVja0NhbGxpbmdBc3Ryb25hdXQoKSB7XHJcbiAgICAgICAgICAgIGlmICghbGlnaHRlclZlcnNpb24uY3VycmVudCkgY2FsbEFzdHJvbmF1dCggZWxlbVBhcmVudElkLCBjbGlja1JlZi5jdXJyZW50LmJpZ2dlcmVkRWxlbVBhcmVudElkICk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgICAgICBiaWdnZXJlZFdhdnlQYXRoWzBdLnNldEF0dHJpYnV0ZShcImRcIiwgXCJcIiksXHJcbiAgICAgICAgICAgIGJpZ2dlcmVkV2F2eVBhdGhbMV0uc2V0QXR0cmlidXRlKFwiZFwiLCBcIlwiKSxcclxuICAgICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJlZEVsZW1SZWN0LnNldEF0dHJpYnV0ZU5TKCBudWxsLCBcInN0cm9rZVwiLCBgdXJsKCMke2NsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyZWRFbGVtUGFyZW50SWR9U3ZnRnJhbWVTdG9wQ29sb3IpYCApLFxyXG4gICAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW1SZWN0LnNldEF0dHJpYnV0ZU5TKCBudWxsLCBcInN0cm9rZVwiLCBcInVybCgjU3ZnSXZvcnkpXCIpLFxyXG4gICAgICAgICAgICB0cmFuc2Zvcm1BbGxFYWNoTWVudXMoc3ZnRnJhbWVWYWx1ZXMsIGV4dGVuZGluZ1NpemUsIGVsZW1QYXJlbnRJZCksXHJcbiAgICAgICAgICAgIGJpZ2dlcmVkVGV4dC5zdHlsZS5kaXNwbGF5ID0gXCJpbml0aWFsXCIsXHJcbiAgICAgICAgICAgIGJpZ2dlcmVkQ29udGVudFJlZi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIsXHJcbiAgICAgICAgICAgIGJpZ2dlcmVkQ29udGVudFJlZi5zdHlsZS56SW5kZXggPSAtMSxcclxuICAgICAgICAgICAgYmlnZ2VyZWROZW9uUmVmc1swXS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIixcclxuICAgICAgICAgICAgYmlnZ2VyZWROZW9uUmVmc1sxXS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIixcclxuICAgICAgICAgICAgY2hlY2tDYWxsaW5nQXN0cm9uYXV0KCksXHJcbiAgICAgICAgICBdKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgY3JlYXRlV2F2eUFuaW1hdGlvbihleHRlbmRpbmdTaXplW1wic3ZnRnJhbWVQYWNrYWdlXCJdKTtcclxuICAgICAgICAgICAgICB0ZXh0UmVmLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICBjb250ZW50UmVmLnN0eWxlLmRpc3BsYXkgPSBcImluaXRpYWxcIjtcclxuICAgICAgICAgICAgICBjb250ZW50UmVmLnN0eWxlLnpJbmRleCA9IDM7XHJcbiAgICAgICAgICAgICAgYmlnZ2VyZWROZW9uUmVmc1swXS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbiAgICAgICAgICAgICAgYmlnZ2VyZWROZW9uUmVmc1sxXS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbiAgICAgICAgICAgICAgc2V0Q2xpY2tBZnRlckNvbnRleHQoZWxlbVBhcmVudElkKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQub25BbmltID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImVsc2VcIik7XHJcbiAgICAgICAgICBjb25zdCBiaWdnZXJlZFdhdnlQYXRoID0gY2xpY2tSZWYuY3VycmVudC53YXZ5UGF0aDtcclxuICAgICAgICAgIGNvbnN0IGJpZ2dlcmVkVGV4dCA9IGNsaWNrUmVmLmN1cnJlbnQudGV4dFJlZjtcclxuICAgICAgICAgIGNvbnN0IGJpZ2dlcmVkQ29udGVudFJlZiA9IGNsaWNrUmVmLmN1cnJlbnQuY29udGVudFJlZjtcclxuICAgICAgICAgIGNvbnN0IGJpZ2dlcmVkTmVvblJlZnMgPSBjbGlja1JlZi5jdXJyZW50LmJpZ2dlck5lb25SZWZzO1xyXG5cclxuICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQub25BbmltID0gdHJ1ZTtcclxuICAgICAgICAgIHNldENsaWNrQ29udGV4dCh7IG9uOiBmYWxzZSwgYmlnZ2VyOiBudWxsLCBiaWdnZXJlZDogbnVsbCB9KTtcclxuICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyZWRFbGVtID0gY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtO1xyXG4gICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJlZEVsZW1QYXJlbnRJZCA9ICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW1QYXJlbnRJZDtcclxuICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyZWRFbGVtUmVjdCA9IGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbVJlY3Q7XHJcbiAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW0gPSBudWxsO1xyXG4gICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5tZW51RXh0ZW5kZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICBsZXQgZXh0ZW5kaW5nU2l6ZSA9IHsgTEk6IFsgeyBlbGVtSWQ6IFwid29ya1wiLCB3aWR0aDogXCI1MCVcIiwgaGVpZ2h0OiBcIjUwJVwiIH0sIHsgZWxlbUlkOiBcInNraWxsXCIsIHdpZHRoOiBcIjUwJVwiLCBoZWlnaHQ6IFwiNTAlXCIgfSwgeyBlbGVtSWQ6IFwicGFpbnRcIiwgd2lkdGg6IFwiNTAlXCIsIGhlaWdodDogXCI1MCVcIiB9LCB7IGVsZW1JZDogXCJpbmZvXCIsIHdpZHRoOiBcIjUwJVwiLCBoZWlnaHQ6IFwiNTAlXCIgfSBdIH07XHJcblxyXG4gICAgICAgICAgaWYgKGlubmVyV2lkdGggPiA4MDApIHdhdnlBbmltLmN1cnJlbnQuVEwucGF1c2UoMCk7XHJcbiAgICAgICAgICBmdW5jdGlvbiBjaGVja0NhbGxpbmdBc3Ryb25hdXQoKSB7XHJcbiAgICAgICAgICAgIGlmICghbGlnaHRlclZlcnNpb24uY3VycmVudCkgcGF1c2VBc3Ryb25hdXQoKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgICAgIGhvbWVHc2FwVHJhbnNpdGlvbihjbGlja1JlZi5jdXJyZW50Lm1lbnVFeHRlbmRlZCksXHJcbiAgICAgICAgICAgIGxvZ29EaXNwbGF5RGlzcGF0Y2goeyBkZW1vQ2xpZW50SGVpZ2h0OiBkZW1vUmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0LCBsb2dvQ2xpZW50V2lkdGg6ICgoKGlubmVyV2lkdGggKiAoMTAwIC0gVFYuc3ltZXRyeURlbW9NZW51KSkgLyAxMDApICogVFYubG9nb1dpZHRoKSAvIDEwMCB9KSxcclxuICAgICAgICAgICAgYmlnZ2VyZWRXYXZ5UGF0aFswXS5zZXRBdHRyaWJ1dGUoXCJkXCIsIFwiXCIpLFxyXG4gICAgICAgICAgICBiaWdnZXJlZFdhdnlQYXRoWzFdLnNldEF0dHJpYnV0ZShcImRcIiwgXCJcIiksXHJcbiAgICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyZWRFbGVtUmVjdC5zZXRBdHRyaWJ1dGVOUyggbnVsbCwgXCJzdHJva2VcIiwgYHVybCgjJHtjbGlja1JlZi5jdXJyZW50LmJpZ2dlcmVkRWxlbVBhcmVudElkfVN2Z0ZyYW1lU3RvcENvbG9yKWApLFxyXG4gICAgICAgICAgICB0cmFuc2Zvcm1BbGxFYWNoTWVudXMoc3ZnRnJhbWVWYWx1ZXMsIGV4dGVuZGluZ1NpemUsIGVsZW1QYXJlbnRJZCksXHJcbiAgICAgICAgICAgIGJpZ2dlcmVkVGV4dC5zdHlsZS5kaXNwbGF5ID0gXCJpbml0aWFsXCIsXHJcbiAgICAgICAgICAgIGJpZ2dlcmVkQ29udGVudFJlZi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIsXHJcbiAgICAgICAgICAgIGJpZ2dlcmVkQ29udGVudFJlZi5zdHlsZS56SW5kZXggPSAtMSxcclxuICAgICAgICAgICAgYmlnZ2VyZWROZW9uUmVmc1swXS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIixcclxuICAgICAgICAgICAgYmlnZ2VyZWROZW9uUmVmc1sxXS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIixcclxuICAgICAgICAgICAgY2hlY2tDYWxsaW5nQXN0cm9uYXV0KCksXHJcbiAgICAgICAgICAgIHNldENsaWNrQWZ0ZXJDb250ZXh0KG51bGwpLFxyXG4gICAgICAgICAgXSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIG5lb25SZWZzWzBdLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuICAgICAgICAgICAgbmVvblJlZnNbMV0uc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG4gICAgICAgICAgICBjbGlja1JlZi5jdXJyZW50ID0geyBvbkFuaW06IGZhbHNlLCBhY3RpdmU6IHRydWUsIG1lbnVFeHRlbmRlZDogZmFsc2UsIGJpZ2dlckVsZW1QYXJlbnRJZDogbnVsbCwgYmlnZ2VyRWxlbTogbnVsbCwgYmlnZ2VyRWxlbVJlY3Q6IG51bGwsIGJpZ2dlck5lb25SZWZzOiBbXSwgYmlnZ2VyZWRFbGVtOiBudWxsLCBiaWdnZXJlZEVsZW1QYXJlbnRJZDogbnVsbCwgYmlnZ2VyZWRFbGVtUmVjdDogbnVsbCwgd2F2eVBhdGg6IFtdIH07XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBbc3ZnRnJhbWVWYWx1ZXNdXHJcbiAgKTtcclxuXHJcbiAgLy89PT09PT09PT09PT09PT09PWxvYWRlcj09PT09PT09PT09PT09PT09PT09PS8vXHJcblxyXG4gIGNvbnN0IG9wZW5MaWdodGVyVmVyc2lvbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGxpZ2h0ZXJWZXJzaW9uLmN1cnJlbnQgPSB0cnVlO1xyXG4gICAgcmVtb3ZlU2NlbmUoKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlnaHRlclZlcnNpb25cIikuaW5uZXJIVE1MID1cclxuICAgICAgXCJUaGlzIGlzIGxpZ2h0ZXIgdmVyc2lvblwiO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJ3b3JraW5nP1wiKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2FkZXJBbmltXCIpLmNsYXNzTGlzdC5hZGQoXCJsb2FkZXJGYWRlT3V0VHJhbnNcIik7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9hZGVyQ29udGFpbmVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgfSwgMTIwMCk7XHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vPT09PT09PT09PT09PT09PT1sb2FkZXI9PT09PT09PT09PT09PT09PT09PT0vL1xyXG5cclxuICByZXR1cm4gdXNlTWVtbygoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGlkPVwibWFzdGVyXCIgc3R5bGU9e3tjb2xvcjpcIndoaXRlXCJ9fT5cclxuICAgICAgICA8ZGl2IGlkPVwibG9hZGVyQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwibG9hZGVyQW5pbVwiPkxvYWQmbmJzcDsmbmJzcDtuZzwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBpZD1cImxpZ2h0ZXJWZXJzaW9uXCIgb25DbGljaz17b3BlbkxpZ2h0ZXJWZXJzaW9ufT5cclxuICAgICAgICAgICAgQ2xpY2sgdG8gdGhlIGxpZ2h0ZXIgdmVyc2lvbiA8YnIgLz4gd2hpY2ggZG9lc24ndCBjb250YWluIFRIUkVFIEpTXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8RXh0ZW5kTWVudUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2V4dGVuZE1lbnV9PlxyXG4gICAgICAgICAgPExvZ29EaXNwbGF5Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBsb2dvRGlzcGxheSwgbG9nb0Rpc3BsYXlEaXNwYXRjaCB9fSA+XHJcbiAgICAgICAgICAgIDxNZW51U2l6ZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgd29ya19zdHlsZUxJLCBza2lsbF9zdHlsZUxJLCBwYWludF9zdHlsZUxJLCBpbmZvX3N0eWxlTEksIHdvcmtfc3R5bGVTdmdGcmFtZVBhY2ssIHNraWxsX3N0eWxlU3ZnRnJhbWVQYWNrLCBwYWludF9zdHlsZVN2Z0ZyYW1lUGFjaywgaW5mb19zdHlsZVN2Z0ZyYW1lUGFja319PlxyXG4gICAgICAgICAgICAgIDxDbGlja0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NsaWNrQ29udGV4dH0+XHJcbiAgICAgICAgICAgICAgICA8Q2xpY2tBZnRlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NsaWNrQWZ0ZXJDb250ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgPEhvbWVMYXlvdXRSZW5kZXIgdmFscz17eyByZWZzOiB7IGRlbW9SZWYsIGxvZ29SZWYgfSwgbWVudVZhbHVlczogbWVudVZhbHVlcy5jdXJyZW50LCBzdmdGcmFtZVZhbHVlc0ltbXV0YWJsZTogc3ZnRnJhbWVWYWx1ZXNJbW11dGFibGUuY3VycmVudCwgY2xpY2tDb250ZXh0OiBjbGlja0NvbnRleHR9fS8+XHJcbiAgICAgICAgICAgICAgICA8L0NsaWNrQWZ0ZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgIDwvQ2xpY2tDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgICAgICA8L01lbnVTaXplQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgICAgIDwvTG9nb0Rpc3BsYXlDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgIDwvRXh0ZW5kTWVudUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9LCBbIGxvZ29EaXNwbGF5LCB3b3JrX3N0eWxlTEksIHdvcmtfc3R5bGVTdmdGcmFtZVBhY2ssIHNraWxsX3N0eWxlU3ZnRnJhbWVQYWNrLCBwYWludF9zdHlsZVN2Z0ZyYW1lUGFjaywgaW5mb19zdHlsZVN2Z0ZyYW1lUGFjaywgY2xpY2tDb250ZXh0LCBjbGlja0FmdGVyQ29udGV4dF0pO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gSG9tZUxheW91dFJlbmRlcihwcm9wcykge1xyXG4gIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS1Ib21lTGF5b3V0UmVuZGVyLS0tLS0tLS0tLS0tLS0tLS1cIik7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxEZW1vIHJlZnM9e3Byb3BzLnZhbHMucmVmc30gLz5cclxuICAgICAgPE1lbnUgdmFscz17eyBtZW51VmFsdWVzOiBwcm9wcy52YWxzLm1lbnVWYWx1ZXMsIHN2Z0ZyYW1lVmFsdWVzSW1tdXRhYmxlOiBwcm9wcy52YWxzLnN2Z0ZyYW1lVmFsdWVzSW1tdXRhYmxlfX0gLz5cclxuXHJcbiAgICAgIDxkaXYgaWQ9XCJ0aHJlZUpTQ292ZXJcIj48L2Rpdj5cclxuICAgICAgPGRpdiBpZD1cInRocmVlSlNDYW52YXNcIj48L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSG9tZUxheW91dDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==