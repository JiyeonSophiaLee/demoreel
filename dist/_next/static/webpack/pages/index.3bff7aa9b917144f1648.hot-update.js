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
    var test = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : test;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lTGF5b3V0LmpzeCJdLCJuYW1lcyI6WyJFeHRlbmRNZW51Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJMb2dvRGlzcGxheUNvbnRleHQiLCJNZW51U2l6ZUNvbnRleHQiLCJDbGlja0NvbnRleHQiLCJDbGlja0FmdGVyQ29udGV4dCIsImxvZ29EaXNwbGF5UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiaW5uZXJXaWR0aCIsInVuZGVmaW5lZCIsImlubmVySGVpZ2h0IiwiZGVtb0NsaWVudEhlaWdodCIsImxvZ29DbGllbnRXaWR0aCIsImxvZ29faGVpZ2hlciIsImxvZ29fd2lkZXIiLCJIb21lTGF5b3V0IiwiY29uc29sZSIsImxvZyIsInVzZU1lbnVTaXplIiwid29ya19zZXRMSV9zaXplIiwid29ya19zZXRzdmdGcmFtZVBhY2tTaXplIiwid29ya19zdHlsZUxJIiwid29ya19zdHlsZVN2Z0ZyYW1lUGFjayIsIndvcmtfY2hhbmdlSGllcmFyY2h5U3ZnRnJhbWVQYWNrIiwic2tpbGxfc2V0TElfc2l6ZSIsInNraWxsX3NldHN2Z0ZyYW1lUGFja1NpemUiLCJza2lsbF9zdHlsZUxJIiwic2tpbGxfc3R5bGVTdmdGcmFtZVBhY2siLCJza2lsbF9jaGFuZ2VIaWVyYXJjaHlTdmdGcmFtZVBhY2siLCJwYWludF9zZXRMSV9zaXplIiwicGFpbnRfc2V0c3ZnRnJhbWVQYWNrU2l6ZSIsInBhaW50X3N0eWxlTEkiLCJwYWludF9zdHlsZVN2Z0ZyYW1lUGFjayIsInBhaW50X2NoYW5nZUhpZXJhcmNoeVN2Z0ZyYW1lUGFjayIsImluZm9fc2V0TElfc2l6ZSIsImluZm9fc2V0c3ZnRnJhbWVQYWNrU2l6ZSIsImluZm9fc3R5bGVMSSIsImluZm9fc3R5bGVTdmdGcmFtZVBhY2siLCJpbmZvX2NoYW5nZUhpZXJhcmNoeVN2Z0ZyYW1lUGFjayIsImxpZ2h0ZXJWZXJzaW9uIiwidXNlUmVmIiwidXNlU3RhdGUiLCJzdmdGcmFtZURlZmF1bHQiLCJyYWRpdXMiLCJ3YXZ5UGF0aCIsImV4dHJhU3BhY2UiLCJzdHJva2VXaWR0aCIsInJlY3QiLCJ3YXZ5Iiwic3ZnRnJhbWVWYWx1ZXMiLCJzZXRTdmdGcmFtZVZhbHVlcyIsInN2Z0ZyYW1lVmFsdWVzSW1tdXRhYmxlIiwieCIsInkiLCJyeCIsInJ5IiwibXVsdGlwbHkiLCJzY2FsZSIsInNwZWVkIiwiZmlsbCIsIm9uIiwiYmlnZ2VyIiwiYmlnZ2VyZWQiLCJjbGlja0NvbnRleHQiLCJzZXRDbGlja0NvbnRleHQiLCJjbGlja0FmdGVyQ29udGV4dCIsInNldENsaWNrQWZ0ZXJDb250ZXh0IiwiY2xpY2tSZWYiLCJvbkFuaW0iLCJhY3RpdmUiLCJtZW51RXh0ZW5kZWQiLCJiaWdnZXJFbGVtUGFyZW50SWQiLCJiaWdnZXJFbGVtIiwiYmlnZ2VyRWxlbVJlY3QiLCJiaWdnZXJOZW9uUmVmcyIsImJpZ2dlcmVkRWxlbSIsImJpZ2dlcmVkRWxlbVBhcmVudElkIiwiYmlnZ2VyZWRFbGVtUmVjdCIsImV4dGVuZGluZ1JlcXVlc3RBbmltUmVmIiwid2F2eUFuaW0iLCJUTCIsInBvaW50cyIsImRlbW9SZWYiLCJsb2dvUmVmIiwibW9kZSIsIm1vYmlsZU1vZGUiLCJfbW9iaWxlTW9kZSIsIndpZGVyTW9kZSIsIl93aWRlck1vZGUiLCJtZW51VmFsdWVzIiwiaWQiLCJvcmRlciIsInN0b3BDb2xvciIsInN0cm9rZUNvbG9yIiwiYWxsRWxlbXMiLCJkZW1vVmlkZW9IZWlnaHQiLCJ1c2VSZWR1Y2VyIiwibG9nb0Rpc3BsYXkiLCJsb2dvRGlzcGxheURpc3BhdGNoIiwiY2hhbmdlTW9kZSIsInVzZUNhbGxiYWNrIiwibW9iaWxlIiwid2lkZXIiLCJ0ZXN0IiwiY3VycmVudCIsInVzZUVmZmVjdCIsIm1hcCIsImVsZW0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYXN0cm9uYXV0IiwiaG9tZUdzYXBTZXQiLCJ1cGRhdGVTdmdGcmFtZVZhbHVlcyIsIl9yYWRpdXMiLCJfd2F2eVBhdGgiLCJNYXRoIiwiYWJzIiwiX3N0cm9rZVdpZHRoIiwiX3N2Z0ZyYW1lRGVmYXVsdCIsIlRWIiwic3ZnRnJhbWVEZWZhdWx0U2l6ZTE0MDAiLCJzdmdGcmFtZURlZmF1bHRTaXplIiwic3ZnRnJhbWVEZWZhdWx0U2l6ZTgwMCIsInN2Z0ZyYW1lRGVmYXVsdFNpemVTbWFsbGVyU2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwiZm9yRWFjaCIsImV2YWwiLCJ1cGRhdGVSZXNpemUiLCJyZW1haW5FeHRlbmRpbmdNZW51IiwiY3JlYXRlV2F2eUFuaW1hdGlvbiIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZXRBdHRyaWJ1dGVOUyIsIm51bWIiLCJ0cmFuc2Zvcm1BbGxFYWNoTWVudXMiLCJfc3ZnRnJhbWVWYWx1ZXMiLCJleHRlbmRpbmdTaXplIiwiZWxlbVBhcmVudElkIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJORiIsImYiLCJkaXIiLCJhZGRDU1NtZW51dHJhbnNpdGlvbiIsIkxJIiwib2JqIiwic2l6ZSIsImNoaWxkRWxlbXMiLCJlIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJhbmltIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJ1cGRhdGUiLCJzZXRBdHRyaWJ1dGUiLCJ0d2VlbkNhcmRpbmFsIiwicG9pbnRzMSIsInBvaW50czIiLCJkYXRhUG9pbnRzIiwicG9pbnRzVHdlZW4xIiwicG9pbnRzVHdlZW4yIiwiZ3NhcCIsInRpbWVsaW5lIiwib25VcGRhdGUiLCJyZXN1bWUiLCJnZXREYXRhUG9pbnRzIiwiaSIsImxlbmd0aCIsImR1cmF0aW9uIiwicmFuZG9tIiwidHdlZW4xIiwidG8iLCJyZXBlYXQiLCJ5b3lvIiwiZWFzZSIsIlNpbmUiLCJlYXNlSW5PdXQiLCJ0d2VlbjIiLCJhZGQiLCJwYXVzZWQiLCJwYXVzZSIsImV4dGVuZE1lbnUiLCJ0ZXh0UmVmIiwiY29udGVudFJlZiIsIm5lb25SZWZzIiwicGFyZW50RWxlbWVudCIsImNoZWNrQ2FsbGluZ0FzdHJvbmF1dCIsImNhbGxBc3Ryb25hdXQiLCJnZXREZW1vVmlkZW9IZWlnaHQiLCJnZXRWYWx1ZXNUb1VuU3ltZXRyeUVhY2hNZW51IiwiYWxsIiwiaG9tZUdzYXBUcmFuc2l0aW9uIiwidW5TeW1ldHJ5RGVtb01lbnUiLCJsb2dvV2lkdGgiLCJ0aGVuIiwic3R5bGUiLCJkaXNwbGF5IiwiekluZGV4IiwiYmlnZ2VyZWRXYXZ5UGF0aCIsImJpZ2dlcmVkVGV4dCIsImJpZ2dlcmVkQ29udGVudFJlZiIsImJpZ2dlcmVkTmVvblJlZnMiLCJ2aXNpYmlsaXR5IiwicGF1c2VBc3Ryb25hdXQiLCJlbGVtSWQiLCJzeW1ldHJ5RGVtb01lbnUiLCJvcGVuTGlnaHRlclZlcnNpb24iLCJyZW1vdmVTY2VuZSIsImlubmVySFRNTCIsImV2ZW50IiwiY2xhc3NMaXN0Iiwic2V0VGltZW91dCIsInVzZU1lbW8iLCJjb2xvciIsInJlZnMiLCJIb21lTGF5b3V0UmVuZGVyIiwicHJvcHMiLCJ2YWxzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxpQkFBaUIsZ0JBQUdDLDJEQUFhLEVBQXZDO0FBQ0EsSUFBTUMsa0JBQWtCLGdCQUFHRCwyREFBYSxFQUF4QztBQUNBLElBQU1FLGVBQWUsZ0JBQUdGLDJEQUFhLEVBQXJDO0FBQ0EsSUFBTUcsWUFBWSxnQkFBR0gsMkRBQWEsRUFBbEM7QUFDQSxJQUFNSSxpQkFBaUIsZ0JBQUdKLDJEQUFhLEVBQXZDOztBQUVQLElBQU1LLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQzVDO0FBQ0EsTUFBSUMsVUFBVSxJQUFJQyxTQUFsQixFQUE2QjtBQUMzQixR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QUZGLGVBSUU7QUFBSyxRQUFFLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsZUFLRTtBQUFLLFFBQUUsRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRjtBQUFBLGtCQURGO0FBU0Q7O01BWFF5SyxnQjtBQVlNN00seUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2JmZjdhYTliOTE3MTQ0ZjE2NDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlQ29udGV4dCx1c2VFZmZlY3QsdXNlU3RhdGUsdXNlUmVkdWNlcix1c2VDYWxsYmFjayx1c2VSZWYsdXNlTWVtb30gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBEZW1vIGZyb20gXCIuL0RlbW8uanN4XCI7XHJcbmltcG9ydCBNZW51IGZyb20gXCIuL01lbnUuanN4XCI7XHJcbmltcG9ydCBUViBmcm9tIFwiLi4vcHVibGljL2Fzc2V0cy9qcy90cmFuc2l0aW9uVmFsdWVcIjtcclxuaW1wb3J0IHVzZU1lbnVTaXplIGZyb20gXCIuLi9ob29rcy91c2VNZW51U2l6ZVwiO1xyXG5pbXBvcnQgeyBob21lR3NhcFNldCwgZ2V0RGVtb1ZpZGVvSGVpZ2h0LCBob21lR3NhcFRyYW5zaXRpb24sIGdldFZhbHVlc1RvVW5TeW1ldHJ5RWFjaE1lbnUsIHR3ZWVuQ2FyZGluYWwsIGdldERhdGFQb2ludHMsIHJhbmRvbSwgYWRkQ1NTbWVudXRyYW5zaXRpb259IGZyb20gXCIuLi9wdWJsaWMvYXNzZXRzL2pzL3V0aWxpdGllcy5qc1wiO1xyXG5pbXBvcnQgYXN0cm9uYXV0LCB7IGNhbGxBc3Ryb25hdXQsIHBhdXNlQXN0cm9uYXV0LCByZW1vdmVTY2VuZX0gZnJvbSBcIi4uL3B1YmxpYy9hc3NldHMvanMvYXN0cm9uYXV0LmpzXCI7XHJcbmltcG9ydCB7IGdzYXAsIFNpbmUgfSBmcm9tIFwiZ3NhcFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEV4dGVuZE1lbnVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5leHBvcnQgY29uc3QgTG9nb0Rpc3BsYXlDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5leHBvcnQgY29uc3QgTWVudVNpemVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5leHBvcnQgY29uc3QgQ2xpY2tDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5leHBvcnQgY29uc3QgQ2xpY2tBZnRlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBsb2dvRGlzcGxheVJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKCdsb2dvRGlzcGxheSByZWR1Y2VyIGlzIHdvcmtpbmcnKVxyXG4gIGlmIChpbm5lcldpZHRoICE9IHVuZGVmaW5lZCkge1xyXG4gICAgaWYgKGlubmVyV2lkdGggPiA4MDApIHtcclxuICAgICAgaWYgKGlubmVyV2lkdGggPiBpbm5lckhlaWdodCkge1xyXG4gICAgICAgIGlmIChhY3Rpb24uZGVtb0NsaWVudEhlaWdodCAvIDMgPCAoYWN0aW9uLmxvZ29DbGllbnRXaWR0aCAqIDQuNSkgLyA2KSB7XHJcbiAgICAgICAgICBzdGF0ZSA9IHsgbG9nb19oZWlnaGVyOiBcIm5vbmVcIiwgbG9nb193aWRlcjogXCJpbml0aWFsXCIgfTtcclxuICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3RhdGUgPSB7IGxvZ29faGVpZ2hlcjogXCJpbml0aWFsXCIsIGxvZ29fd2lkZXI6IFwibm9uZVwiIH07XHJcbiAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN0YXRlID0geyBsb2dvX2hlaWdoZXI6IFwiaW5pdGlhbFwiLCBsb2dvX3dpZGVyOiBcIm5vbmVcIiB9O1xyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3RhdGUgPSB7IGxvZ29faGVpZ2hlcjogXCJub25lXCIsIGxvZ29fd2lkZXI6IFwiaW5pdGlhbFwiIH07XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBIb21lTGF5b3V0ID0gKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwiLS0tSG9tZUxheW91dC0tLVwiKTtcclxuICBjb25zdCBbIHdvcmtfc2V0TElfc2l6ZSwgd29ya19zZXRzdmdGcmFtZVBhY2tTaXplLCB3b3JrX3N0eWxlTEksIHdvcmtfc3R5bGVTdmdGcmFtZVBhY2ssIHdvcmtfY2hhbmdlSGllcmFyY2h5U3ZnRnJhbWVQYWNrXSA9IHVzZU1lbnVTaXplKFwid29ya1wiKTtcclxuICBjb25zdCBbIHNraWxsX3NldExJX3NpemUsIHNraWxsX3NldHN2Z0ZyYW1lUGFja1NpemUsIHNraWxsX3N0eWxlTEksIHNraWxsX3N0eWxlU3ZnRnJhbWVQYWNrLCBza2lsbF9jaGFuZ2VIaWVyYXJjaHlTdmdGcmFtZVBhY2tdID0gdXNlTWVudVNpemUoXCJza2lsbFwiKTtcclxuICBjb25zdCBbIHBhaW50X3NldExJX3NpemUsIHBhaW50X3NldHN2Z0ZyYW1lUGFja1NpemUsIHBhaW50X3N0eWxlTEksIHBhaW50X3N0eWxlU3ZnRnJhbWVQYWNrLCBwYWludF9jaGFuZ2VIaWVyYXJjaHlTdmdGcmFtZVBhY2tdID0gdXNlTWVudVNpemUoXCJwYWludFwiKTtcclxuICBjb25zdCBbIGluZm9fc2V0TElfc2l6ZSwgaW5mb19zZXRzdmdGcmFtZVBhY2tTaXplLCBpbmZvX3N0eWxlTEksIGluZm9fc3R5bGVTdmdGcmFtZVBhY2ssIGluZm9fY2hhbmdlSGllcmFyY2h5U3ZnRnJhbWVQYWNrXSA9IHVzZU1lbnVTaXplKFwiaW5mb1wiKTtcclxuXHJcbiAgY29uc3QgbGlnaHRlclZlcnNpb24gPSB1c2VSZWYoZmFsc2UpO1xyXG5cclxuICBjb25zdCBbc3ZnRnJhbWVWYWx1ZXMsIHNldFN2Z0ZyYW1lVmFsdWVzXSA9IHVzZVN0YXRlKHsgc3ZnRnJhbWVEZWZhdWx0OiB1bmRlZmluZWQsIHJhZGl1czogdW5kZWZpbmVkLCB3YXZ5UGF0aDogdW5kZWZpbmVkLCBleHRyYVNwYWNlOiB1bmRlZmluZWQsIHN0cm9rZVdpZHRoOiB7IHJlY3Q6IFwiMHB4XCIsIHdhdnk6IFwiMHB4XCIgfX0pO1xyXG4gIGNvbnN0IHN2Z0ZyYW1lVmFsdWVzSW1tdXRhYmxlID0gdXNlUmVmKHsgeDogMCwgeTogMCwgcng6IDUsIHJ5OiA1LCBtdWx0aXBseTogMywgc2NhbGU6IDEsIHNwZWVkOiBbMiwgM10sIGZpbGw6IFwibm9uZVwifSk7XHJcblxyXG4gIGNvbnN0IFtjbGlja0NvbnRleHQsIHNldENsaWNrQ29udGV4dF0gPSB1c2VTdGF0ZSh7IG9uOiBmYWxzZSwgYmlnZ2VyOiBudWxsLCBiaWdnZXJlZDogbnVsbH0pO1xyXG4gIGNvbnN0IFtjbGlja0FmdGVyQ29udGV4dCwgc2V0Q2xpY2tBZnRlckNvbnRleHRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgY2xpY2tSZWYgPSB1c2VSZWYoeyBvbkFuaW06IGZhbHNlLCBhY3RpdmU6IHRydWUsIG1lbnVFeHRlbmRlZDogZmFsc2UsIGJpZ2dlckVsZW1QYXJlbnRJZDogbnVsbCwgYmlnZ2VyRWxlbTogbnVsbCwgYmlnZ2VyRWxlbVJlY3Q6IG51bGwsIGJpZ2dlck5lb25SZWZzOiBbXSwgYmlnZ2VyZWRFbGVtOiBudWxsLCBiaWdnZXJlZEVsZW1QYXJlbnRJZDogbnVsbCwgYmlnZ2VyZWRFbGVtUmVjdDogbnVsbCwgd2F2eVBhdGg6IFtdfSk7XHJcblxyXG4gIGNvbnN0IGV4dGVuZGluZ1JlcXVlc3RBbmltUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IHdhdnlBbmltID0gdXNlUmVmKHsgVEw6IG51bGwsIHBvaW50czogbnVsbCB9KTtcclxuXHJcbiAgY29uc3QgZGVtb1JlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBsb2dvUmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBjb25zdCBtb2RlID0gdXNlUmVmKHsgbW9iaWxlTW9kZTogbnVsbCwgX21vYmlsZU1vZGU6IG51bGwsIHdpZGVyTW9kZTogbnVsbCwgX3dpZGVyTW9kZTogbnVsbH0pO1xyXG5cclxuXHJcbiAgLy8gY29uc3Qgd2F2eUFuaW0uY3VycmVudC5wb2ludHMgdXNlUmVmKCk7XHJcblxyXG4gIGNvbnN0IG1lbnVWYWx1ZXMgPSB1c2VSZWYoW3sgaWQ6IFwid29ya1wiLCBvcmRlcjogMSwgc3RvcENvbG9yOiBbXCJyZ2IoMjIwLCA1MSwgMzUpXCIsIFwicmdiKDIxMiwgMTE2LCA0MylcIl0sIHN0cm9rZUNvbG9yOiBbXCIjZmYzYjI5XCIsIFwiI2ZmOGMzNFwiXX0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBpZDogXCJza2lsbFwiLCBvcmRlcjogMiwgc3RvcENvbG9yOiBbXCJyZ2IoMTY4LCA2MywgMjA5KVwiLCBcInJnYigxOTIsIDQ5LCA5MSlcIl0sIHN0cm9rZUNvbG9yOiBbXCIjY2Q0ZGZmXCIsIFwiI2ZmNDE3OVwiXX0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBpZDogXCJwYWludFwiLCBvcmRlcjogMywgc3RvcENvbG9yOiBbXCJyZ2IoMjI1LCAxNDksIDQ2KVwiLCBcInJnYig0OCwgMTcxLCAxNTIpXCJdLCBzdHJva2VDb2xvcjogW1wiI2ZmYTkzNFwiLCBcIiMzMGFiOThcIl19LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgaWQ6IFwiaW5mb1wiLCBvcmRlcjogNCwgc3RvcENvbG9yOiBbXCJyZ2IoMjAwLCA4NiwgMTc3KVwiLCBcInJnYig3NSwgMTczLCAyMDkpXCJdLCBzdHJva2VDb2xvcjogW1wiI2ZmNmVlMlwiLCBcIiM1Y2QzZmZcIl19XSk7XHJcbiAgY29uc3QgYWxsRWxlbXMgPSB1c2VSZWYoKTtcclxuXHJcbiAgbGV0IGRlbW9WaWRlb0hlaWdodDtcclxuXHJcbiAgY29uc3QgW2xvZ29EaXNwbGF5LCBsb2dvRGlzcGxheURpc3BhdGNoXSA9IHVzZVJlZHVjZXIobG9nb0Rpc3BsYXlSZWR1Y2VyLCB7XHJcbiAgICBsb2dvX2hlaWdoZXI6IFwibm9uZVwiLFxyXG4gICAgbG9nb193aWRlcjogXCJub25lXCIsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGNoYW5nZU1vZGU9IHVzZUNhbGxiYWNrKChtb2JpbGU9bnVsbCwgd2lkZXI9bnVsbCwgdGVzdCA9IHRlc3QpPT57XHJcbiAgICBtb2RlLmN1cnJlbnQuX21vYmlsZU1vZGUgPSBpbm5lcldpZHRoIDw9IDgwMCA/IHRydWUgOiBmYWxzZTtcclxuICAgIG1vZGUuY3VycmVudC5fd2lkZXJNb2RlID0gaW5uZXJXaWR0aCA+PSAxNDAwID8gdHJ1ZSA6IGZhbHNlO1xyXG5cclxuICAgIGlmIChtb2RlLmN1cnJlbnQubW9iaWxlTW9kZSAhPT0gbW9kZS5jdXJyZW50Ll9tb2JpbGVNb2RlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdtb2JpbGVNb2RlIG1vZGUgY2hhbmdlZCcsIG1vZGUuY3VycmVudC5tb2JpbGVNb2RlKVxyXG4gICAgICBtb2RlLmN1cnJlbnQubW9iaWxlTW9kZSA9ICFtb2RlLmN1cnJlbnQubW9iaWxlTW9kZTtcclxuICAgICAgbW9iaWxlO1xyXG4gICAgICB0ZXN0O1xyXG4gICAgfVxyXG4gICAgaWYgKG1vZGUuY3VycmVudC53aWRlck1vZGUgIT09IG1vZGUuY3VycmVudC5fd2lkZXJNb2RlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCd3aWRlck1vZGUgbW9kZSBjaGFuZ2VkJywgbW9kZS5jdXJyZW50LndpZGVyTW9kZSlcclxuICAgICAgbW9kZS5jdXJyZW50LndpZGVyTW9kZSA9ICFtb2RlLmN1cnJlbnQud2lkZXJNb2RlO1xyXG4gICAgICB3aWRlcjtcclxuICAgICAgdGVzdDtcclxuICAgIH1cclxuICB9LFtdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbW9kZS5jdXJyZW50Lm1vYmlsZU1vZGUgPSBpbm5lcldpZHRoIDw9IDgwMCA/IHRydWUgOiBmYWxzZTtcclxuICAgIG1vZGUuY3VycmVudC53aWRlck1vZGUgPSBpbm5lcldpZHRoID49IDE0MDAgPyB0cnVlIDogZmFsc2U7XHJcbiAgICBtb2RlLmN1cnJlbnQuX21vYmlsZU1vZGUgPSBtb2RlLmN1cnJlbnQubW9iaWxlTW9kZTtcclxuICAgIG1vZGUuY3VycmVudC5fd2lkZXJNb2RlID0gbW9kZS5jdXJyZW50LndpZGVyTW9kZTtcclxuXHJcbiAgICBhbGxFbGVtcy5jdXJyZW50ID0gbWVudVZhbHVlcy5jdXJyZW50Lm1hcCgoZWxlbSkgPT4ge1xyXG4gICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbS5pZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBhc3Ryb25hdXQoKTtcclxuICAgIGhvbWVHc2FwU2V0KGNsaWNrUmVmLmN1cnJlbnQubWVudUV4dGVuZGVkLCB0cnVlKTtcclxuICAgIHVwZGF0ZVN2Z0ZyYW1lVmFsdWVzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCB1cGRhdGVTdmdGcmFtZVZhbHVlcyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwidXBkYXRlU3ZnRnJhbWVWYWx1ZXMgaXMgY2FsbGluZ1wiKTtcclxuICAgIGxldCBfcmFkaXVzID0gaW5uZXJXaWR0aCA+IDgwMCA/IChpbm5lcldpZHRoID4gMTQwMCA/IDkgOiA3KSA6IDU7XHJcbiAgICBsZXQgX3dhdnlQYXRoID0gTWF0aC5hYnMoaW5uZXJXaWR0aCAtIGlubmVyV2lkdGgpICogMC4wMSArIDI1O1xyXG4gICAgbGV0IF9zdHJva2VXaWR0aCA9XHJcbiAgICAgIGlubmVyV2lkdGggPiA4MDBcclxuICAgICAgICA/IGlubmVyV2lkdGggPiAxNDAwXHJcbiAgICAgICAgICA/IHsgcmVjdDogXCIwLjVyZW1cIiwgd2F2eTogXCIwLjdyZW1cIiB9XHJcbiAgICAgICAgICA6IHsgcmVjdDogXCIwLjV2d1wiLCB3YXZ5OiBcIjF2d1wiIH1cclxuICAgICAgICA6IHsgcmVjdDogXCIwLjNyZW1cIiwgd2F2eTogXCIwLjVyZW1cIiB9O1xyXG4gICAgbGV0IF9zdmdGcmFtZURlZmF1bHQ7XHJcblxyXG4gICAgaWYgKGlubmVyV2lkdGggPiAxNDAwKSB7XHJcbiAgICAgIF9zdmdGcmFtZURlZmF1bHQgPSBUVi5zdmdGcmFtZURlZmF1bHRTaXplMTQwMDtcclxuICAgIH0gZWxzZSBpZiAoaW5uZXJXaWR0aCA+IDgwMCkge1xyXG4gICAgICBfc3ZnRnJhbWVEZWZhdWx0ID0gVFYuc3ZnRnJhbWVEZWZhdWx0U2l6ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChjbGlja1JlZi5jdXJyZW50Lm1lbnVFeHRlbmRlZCA9PSBmYWxzZSkge1xyXG4gICAgICAgIF9zdmdGcmFtZURlZmF1bHQgPSBUVi5zdmdGcmFtZURlZmF1bHRTaXplODAwO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIF9zdmdGcmFtZURlZmF1bHQgPSBUVi5zdmdGcmFtZURlZmF1bHRTaXplU21hbGxlclNpemU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRTdmdGcmFtZVZhbHVlcyh7XHJcbiAgICAgIC4uLnN2Z0ZyYW1lVmFsdWVzLFxyXG4gICAgICBzdmdGcmFtZURlZmF1bHQ6IHsgd2lkdGg6IF9zdmdGcmFtZURlZmF1bHQsIGhlaWdodDogX3N2Z0ZyYW1lRGVmYXVsdCB9LFxyXG4gICAgICByYWRpdXM6IF9yYWRpdXMsXHJcbiAgICAgIHdhdnlQYXRoOiBfd2F2eVBhdGgsXHJcbiAgICAgIGV4dHJhU3BhY2U6IF9yYWRpdXMgKiA1LFxyXG4gICAgICBzdHJva2VXaWR0aDogX3N0cm9rZVdpZHRoLFxyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHN2Z0ZyYW1lVmFsdWVzLnJhZGl1cyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGlmIChjbGlja1JlZi5jdXJyZW50Lm1lbnVFeHRlbmRlZCkge1xyXG4gICAgICAgIG1lbnVWYWx1ZXMuY3VycmVudC5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICAgICAgICBpZiAoY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtUGFyZW50SWQgIT09IGVsZW0uaWQpIHtcclxuICAgICAgICAgICAgZXZhbChlbGVtLmlkICsgXCJfY2hhbmdlSGllcmFyY2h5U3ZnRnJhbWVQYWNrXCIpKHN2Z0ZyYW1lVmFsdWVzKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZW51VmFsdWVzLmN1cnJlbnQuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgICAgICAgZXZhbChlbGVtLmlkICsgXCJfY2hhbmdlSGllcmFyY2h5U3ZnRnJhbWVQYWNrXCIpKHN2Z0ZyYW1lVmFsdWVzKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFtzdmdGcmFtZVZhbHVlc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IHVwZGF0ZVJlc2l6ZSA9ICgpID0+IHtcclxuXHJcblxyXG4gICAgICBob21lR3NhcFNldCggY2xpY2tSZWYuY3VycmVudC5tZW51RXh0ZW5kZWQsIG1vZGUuY3VycmVudC5tb2JpbGVNb2RlICE9PSBtb2RlLmN1cnJlbnQuX21vYmlsZU1vZGUgKTtcclxuXHJcbiAgICAgIGlmIChjbGlja1JlZi5jdXJyZW50Lm1lbnVFeHRlbmRlZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzaXplIGlzIHdvcmtpbmdcIik7XHJcbiAgICAgICAgcmVtYWluRXh0ZW5kaW5nTWVudSgpO1xyXG4gICAgICAgIGNyZWF0ZVdhdnlBbmltYXRpb24oe1xyXG4gICAgICAgICAgd2lkdGg6IGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbS5jbGllbnRXaWR0aCxcclxuICAgICAgICAgIGhlaWdodDogY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtLmNsaWVudEhlaWdodCxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBjaGFuZ2VNb2RlKHVwZGF0ZVN2Z0ZyYW1lVmFsdWVzKCksdXBkYXRlU3ZnRnJhbWVWYWx1ZXMoKSk7XHJcbiAgICAgIFxyXG4gICAgfTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHVwZGF0ZVJlc2l6ZSk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB1cGRhdGVSZXNpemUpO1xyXG4gICAgfTtcclxuICB9LCBbc3ZnRnJhbWVWYWx1ZXNdKTtcclxuXHJcbiAgY29uc3QgcmVtYWluRXh0ZW5kaW5nTWVudSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbVJlY3Quc2V0QXR0cmlidXRlTlMoIG51bGwsIFwid2lkdGhcIiwgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtLmNsaWVudFdpZHRoICk7XHJcbiAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW1SZWN0LnNldEF0dHJpYnV0ZU5TKCBudWxsLCBcImhlaWdodFwiLCBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW0uY2xpZW50SGVpZ2h0ICk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCB0ZXN0PSAobnVtYik9PntcclxuICAgIGNvbnNvbGUubG9nKCdpcyBpdCB3b3JraW5nPycsbnVtYilcclxuICB9XHJcbiAgLy8gZnVuY3Rpb24gZGlzYWJsZUNsaWNrKCl7XHJcbiAgLy8gICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcclxuICAvLyAgICAgYWN0aXZlQ2xpY2sgPSBmYWxzZTtcclxuICAvLyAgICAgY29uc29sZS5sb2coYWN0aXZlQ2xpY2spO1xyXG4gIC8vICAgICByZXNvbHZlKCk7XHJcbiAgLy8gICB9KVxyXG4gIC8vIH1cclxuXHJcbiAgLy8gLS0tLS0gICB0aGUgcmVhc29uIEkgcHV0IHN2Z0ZyYW1lVmFsdWUgYXMgYW4gYXJndW1lbnQsIG5vdCBqdXN0IHVzaW5nIHN2Z0ZyYW1lVmFsdWUgYXMgYSBSZWYsXHJcbiAgLy8gLS0tLS0gaXMgSSBkb24ndCB3YW50IHRvIHJlcmVuZGVyIGFsbCB0aGlzIGZ1bmN0aW9ucyB3aGVuZXZlciBzdmdGcmFtZVZhbHVlcyBjaGFuZ2VzLlxyXG4gIGNvbnN0IHRyYW5zZm9ybUFsbEVhY2hNZW51cyA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKF9zdmdGcmFtZVZhbHVlcywgZXh0ZW5kaW5nU2l6ZSwgZWxlbVBhcmVudElkKSA9PiB7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgTkYgPSBUVltcIm1lbnVEdXJhdGlvblwiXSAqIDYwO1xyXG5cclxuICAgICAgICBsZXQgZiA9IDA7XHJcbiAgICAgICAgbGV0IGRpciA9IDE7XHJcblxyXG4gICAgICAgIGFkZENTU21lbnV0cmFuc2l0aW9uKG51bGwsIC4uLmFsbEVsZW1zLmN1cnJlbnQpO1xyXG4gICAgICAgIGV4dGVuZGluZ1NpemUuTEkuZm9yRWFjaCgob2JqKSA9PiB7XHJcbiAgICAgICAgICBldmFsKG9ialtcImVsZW1JZFwiXSArIFwiX3NldExJX3NpemVcIikoeyB3aWR0aDogb2JqLndpZHRoLCBoZWlnaHQ6IG9iai5oZWlnaHQgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW0gIT09IG51bGwpIHtcclxuICAgICAgICAgIGFkZENTU21lbnV0cmFuc2l0aW9uKG51bGwsIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbSk7XHJcbiAgICAgICAgICBldmFsKGVsZW1QYXJlbnRJZCArIFwiX2NoYW5nZUhpZXJhcmNoeVN2Z0ZyYW1lUGFja1wiKSggX3N2Z0ZyYW1lVmFsdWVzLCBleHRlbmRpbmdTaXplW1wic3ZnRnJhbWVQYWNrYWdlXCJdXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyZWRFbGVtUGFyZW50SWQgIT09IG51bGwpIHtcclxuICAgICAgICAgIGFkZENTU21lbnV0cmFuc2l0aW9uKG51bGwsIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyZWRFbGVtKTtcclxuICAgICAgICAgIGV2YWwoIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyZWRFbGVtUGFyZW50SWQgKyBcIl9jaGFuZ2VIaWVyYXJjaHlTdmdGcmFtZVBhY2tcIiApKF9zdmdGcmFtZVZhbHVlcywgeyB3aWR0aDogX3N2Z0ZyYW1lVmFsdWVzLnN2Z0ZyYW1lRGVmYXVsdC53aWR0aCwgaGVpZ2h0OiBfc3ZnRnJhbWVWYWx1ZXMuc3ZnRnJhbWVEZWZhdWx0LmhlaWdodCB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpbm5lcldpZHRoIDwgODAwKSB7XHJcbiAgICAgICAgICBjb25zdCBzaXplID0gY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtICE9PSBudWxsICA/IFRWLnN2Z0ZyYW1lRGVmYXVsdFNpemVTbWFsbGVyU2l6ZSA6IF9zdmdGcmFtZVZhbHVlc1tcInN2Z0ZyYW1lRGVmYXVsdFwiXTtcclxuICAgICAgICAgIGNvbnN0IGNoaWxkRWxlbXMgPSBhbGxFbGVtcy5jdXJyZW50Lm1hcCgoZSkgPT4gZS5maXJzdEVsZW1lbnRDaGlsZCk7XHJcblxyXG4gICAgICAgICAgYWRkQ1NTbWVudXRyYW5zaXRpb24oZWxlbVBhcmVudElkLCAuLi5jaGlsZEVsZW1zKTtcclxuXHJcbiAgICAgICAgICBtZW51VmFsdWVzLmN1cnJlbnQuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtUGFyZW50SWQgIT09IGVsZW0uaWQpIHtcclxuICAgICAgICAgICAgICBjb25zdCByZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbS5pZCArIFwiU3ZnRnJhbWVcIik7XHJcblxyXG4gICAgICAgICAgICAgIGV2YWwoZWxlbS5pZCArIFwiX2NoYW5nZUhpZXJhcmNoeVN2Z0ZyYW1lUGFja1wiKShfc3ZnRnJhbWVWYWx1ZXMsIHsgd2lkdGg6IHNpemUsIGhlaWdodDogc2l6ZSB9KTtcclxuXHJcbiAgICAgICAgICAgICAgcmVjdC5zZXRBdHRyaWJ1dGVOUyhudWxsLCBcIndpZHRoXCIsIHNpemUpO1xyXG4gICAgICAgICAgICAgIHJlY3Quc2V0QXR0cmlidXRlTlMobnVsbCwgXCJoZWlnaHRcIiwgc2l6ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gYW5pbSgpIHtcclxuICAgICAgICAgIGYgKz0gZGlyO1xyXG4gICAgICAgICAgaWYgKGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW1SZWN0LnNldEF0dHJpYnV0ZU5TKFxyXG4gICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgXCJ3aWR0aFwiLFxyXG4gICAgICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbS5jbGllbnRXaWR0aFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW1SZWN0LnNldEF0dHJpYnV0ZU5TKFxyXG4gICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgXCJoZWlnaHRcIixcclxuICAgICAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW0uY2xpZW50SGVpZ2h0XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyZWRFbGVtUGFyZW50SWQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJlZEVsZW1SZWN0LnNldEF0dHJpYnV0ZU5TKFxyXG4gICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgXCJ3aWR0aFwiLFxyXG4gICAgICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyZWRFbGVtLmNsaWVudFdpZHRoXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyZWRFbGVtUmVjdC5zZXRBdHRyaWJ1dGVOUyhcclxuICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgIFwid2lkdGhcIixcclxuICAgICAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlcmVkRWxlbS5jbGllbnRXaWR0aFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZXh0ZW5kaW5nUmVxdWVzdEFuaW1SZWYuY3VycmVudCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltKTtcclxuXHJcbiAgICAgICAgICBpZiAoIShmICUgTkYpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiPT09PT09PWZpbmlzaGVkPT09PT09PVwiKTtcclxuICAgICAgICAgICAgLy8gb25BbmltID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmIChjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW0gIT09IG51bGwpXHJcbiAgICAgICAgICAgICAgZXZhbChlbGVtUGFyZW50SWQgKyBcIl9jaGFuZ2VIaWVyYXJjaHlTdmdGcmFtZVBhY2tcIikoXHJcbiAgICAgICAgICAgICAgICBfc3ZnRnJhbWVWYWx1ZXMsXHJcbiAgICAgICAgICAgICAgICB7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgIGV2YWwoZWxlbVBhcmVudElkICsgXCJfY2hhbmdlSGllcmFyY2h5U3ZnRnJhbWVQYWNrXCIpKFxyXG4gICAgICAgICAgICAgICAgX3N2Z0ZyYW1lVmFsdWVzLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogX3N2Z0ZyYW1lVmFsdWVzW1wic3ZnRnJhbWVEZWZhdWx0XCJdLFxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IF9zdmdGcmFtZVZhbHVlc1tcInN2Z0ZyYW1lRGVmYXVsdFwiXSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoZXh0ZW5kaW5nUmVxdWVzdEFuaW1SZWYuY3VycmVudCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzb2x2ZT9cIik7XHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYW5pbSgpO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBbXVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGNyZWF0ZVdhdnlBbmltYXRpb24gPSB1c2VDYWxsYmFjayhcclxuICAgIChleHRlbmRpbmdTaXplKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiY3JlYXRlV2F2eUFuaW1hdGlvbiBpcyB3b3JraW5nXCIpO1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDgwMCkge1xyXG4gICAgICAgICAgbGV0IGRhdGFQb2ludHMsIHBvaW50c1R3ZWVuMSwgcG9pbnRzVHdlZW4yO1xyXG5cclxuICAgICAgICAgIGlmIChzdmdGcmFtZVZhbHVlcy53YXZ5UGF0aCA+IGV4dGVuZGluZ1NpemVbXCJ3aWR0aFwiXSAvIDIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNldFN2Z0ZyYW1lVmFsdWVzKHtcclxuICAgICAgICAgICAgICAuLi5zdmdGcmFtZVZhbHVlcyxcclxuICAgICAgICAgICAgICB3YXZ5UGF0aDogZXh0ZW5kaW5nU2l6ZVtcIndpZHRoXCJdIC8gMixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKHdhdnlBbmltLmN1cnJlbnQuVEwgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgd2F2eUFuaW0uY3VycmVudC5UTCA9IGdzYXAudGltZWxpbmUoe1xyXG4gICAgICAgICAgICAgIG9uVXBkYXRlOiB1cGRhdGUsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgd2F2eUFuaW0uY3VycmVudC5UTC5yZXN1bWUoKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBkYXRhUG9pbnRzID0gZ2V0RGF0YVBvaW50cyhcclxuICAgICAgICAgICAgZXh0ZW5kaW5nU2l6ZSxcclxuICAgICAgICAgICAgc3ZnRnJhbWVWYWx1ZXMsXHJcbiAgICAgICAgICAgIHN2Z0ZyYW1lVmFsdWVzSW1tdXRhYmxlLmN1cnJlbnRcclxuICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgd2F2eUFuaW0uY3VycmVudC5wb2ludHMgPSB7XHJcbiAgICAgICAgICAgIHBvaW50czE6IGRhdGFQb2ludHMucG9pbnRzMSxcclxuICAgICAgICAgICAgcG9pbnRzMjogZGF0YVBvaW50cy5wb2ludHMyLFxyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICBwb2ludHNUd2VlbjEgPSBkYXRhUG9pbnRzLnBvaW50c1R3ZWVuMTtcclxuICAgICAgICAgIHBvaW50c1R3ZWVuMiA9IGRhdGFQb2ludHMucG9pbnRzVHdlZW4yO1xyXG5cclxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2F2eUFuaW0uY3VycmVudC5wb2ludHMucG9pbnRzMS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgZHVyYXRpb24gPSByYW5kb20oXHJcbiAgICAgICAgICAgICAgc3ZnRnJhbWVWYWx1ZXNJbW11dGFibGUuY3VycmVudFtcInNwZWVkXCJdWzBdLFxyXG4gICAgICAgICAgICAgIHN2Z0ZyYW1lVmFsdWVzSW1tdXRhYmxlLmN1cnJlbnRbXCJzcGVlZFwiXVsxXVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgbGV0IHR3ZWVuMSA9IGdzYXAudG8od2F2eUFuaW0uY3VycmVudC5wb2ludHMucG9pbnRzMVtpXSwge1xyXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcclxuICAgICAgICAgICAgICB4OiBwb2ludHNUd2VlbjFbaV0ueCxcclxuICAgICAgICAgICAgICB5OiBwb2ludHNUd2VlbjFbaV0ueSxcclxuICAgICAgICAgICAgICByZXBlYXQ6IC0xLFxyXG4gICAgICAgICAgICAgIHlveW86IHRydWUsXHJcbiAgICAgICAgICAgICAgZWFzZTogU2luZS5lYXNlSW5PdXQsXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgbGV0IHR3ZWVuMiA9IGdzYXAudG8od2F2eUFuaW0uY3VycmVudC5wb2ludHMucG9pbnRzMltpXSwge1xyXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcclxuICAgICAgICAgICAgICB4OiBwb2ludHNUd2VlbjJbaV0ueCxcclxuICAgICAgICAgICAgICB5OiBwb2ludHNUd2VlbjJbaV0ueSxcclxuICAgICAgICAgICAgICByZXBlYXQ6IC0xLFxyXG4gICAgICAgICAgICAgIHlveW86IHRydWUsXHJcbiAgICAgICAgICAgICAgZWFzZTogU2luZS5lYXNlSW5PdXQsXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgd2F2eUFuaW0uY3VycmVudC5UTC5hZGQodHdlZW4xLCAtcmFuZG9tKGR1cmF0aW9uKSk7XHJcbiAgICAgICAgICAgIHdhdnlBbmltLmN1cnJlbnQuVEwuYWRkKHR3ZWVuMiwgLXJhbmRvbShkdXJhdGlvbikpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcclxuICAgICAgICAgICAgY2xpY2tSZWYuY3VycmVudC53YXZ5UGF0aFswXS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgICAgXCJkXCIsXHJcbiAgICAgICAgICAgICAgdHdlZW5DYXJkaW5hbCh3YXZ5QW5pbS5jdXJyZW50LnBvaW50cy5wb2ludHMxLCB0cnVlLCAxKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LndhdnlQYXRoWzFdLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgICBcImRcIixcclxuICAgICAgICAgICAgICB0d2VlbkNhcmRpbmFsKHdhdnlBbmltLmN1cnJlbnQucG9pbnRzLnBvaW50czIsIHRydWUsIDEpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcmV0dXJuIHdhdnlBbmltLmN1cnJlbnQuVEw7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmICh3YXZ5QW5pbS5jdXJyZW50LlRMICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmICghd2F2eUFuaW0uY3VycmVudC5UTC5wYXVzZWQoKSkge1xyXG4gICAgICAgICAgICAgIHdhdnlBbmltLmN1cnJlbnQuVEwgPSB3YXZ5QW5pbS5jdXJyZW50LlRMLnBhdXNlKCk7XHJcbiAgICAgICAgICAgICAgY2xpY2tSZWYuY3VycmVudC53YXZ5UGF0aFswXS5zZXRBdHRyaWJ1dGUoXCJkXCIsIFwiXCIpO1xyXG4gICAgICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQud2F2eVBhdGhbMV0uc2V0QXR0cmlidXRlKFwiZFwiLCBcIlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFtzdmdGcmFtZVZhbHVlc11cclxuICApO1xyXG5cclxuICAvLyB1c2VFZmZlY3QoKCk9PntzZXRDbGlja0FmdGVyQ29udGV4dCgnc2tpbGwnKTt9LFtdKVxyXG5cclxuICBjb25zdCBleHRlbmRNZW51ID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoZWxlbSwgb3JkZXIgPSAwLCB0ZXh0UmVmLCBjb250ZW50UmVmLCBuZW9uUmVmcykgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImVsZW1cIiwgZWxlbSk7XHJcbiAgICAgIGNvbnN0IGVsZW1QYXJlbnRJZCA9IGVsZW0ucGFyZW50RWxlbWVudC5pZDtcclxuXHJcbiAgICAgIGlmIChjbGlja1JlZi5jdXJyZW50Lm9uQW5pbSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoY2xpY2tSZWYuY3VycmVudC5tZW51RXh0ZW5kZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICBjbGlja1JlZi5jdXJyZW50Lm9uQW5pbSA9IHRydWU7XHJcbiAgICAgICAgICBzZXRDbGlja0NvbnRleHQoeyBvbjogdHJ1ZSwgYmlnZ2VyOiBlbGVtUGFyZW50SWQsIGJpZ2dlcmVkOiBudWxsIH0pO1xyXG4gICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5tZW51RXh0ZW5kZWQgPSB0cnVlO1xyXG4gICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtUGFyZW50SWQgPSBlbGVtUGFyZW50SWQ7XHJcbiAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW0gPSBlbGVtO1xyXG4gICAgICAgICAgKGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbVJlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgICAgICAgZWxlbVBhcmVudElkICsgXCJTdmdGcmFtZVwiXHJcbiAgICAgICAgICApKSxcclxuICAgICAgICAgICAgKGNsaWNrUmVmLmN1cnJlbnQud2F2eVBhdGggPSBbXHJcbiAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbVBhcmVudElkICsgXCJTdmdXYXZ5MVwiKSxcclxuICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtUGFyZW50SWQgKyBcIlN2Z1dhdnkyXCIpLFxyXG4gICAgICAgICAgICBdKTtcclxuICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQudGV4dFJlZiA9IHRleHRSZWY7XHJcbiAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmNvbnRlbnRSZWYgPSBjb250ZW50UmVmO1xyXG4gICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJOZW9uUmVmcyA9IG5lb25SZWZzO1xyXG5cclxuICAgICAgICAgIGRlbW9WaWRlb0hlaWdodCA9IGdldERlbW9WaWRlb0hlaWdodChjbGlja1JlZi5jdXJyZW50Lm1lbnVFeHRlbmRlZCk7XHJcbiAgICAgICAgICBsZXQgZXh0ZW5kaW5nU2l6ZSA9IGdldFZhbHVlc1RvVW5TeW1ldHJ5RWFjaE1lbnUoXHJcbiAgICAgICAgICAgIGRlbW9WaWRlb0hlaWdodCxcclxuICAgICAgICAgICAgZWxlbSxcclxuICAgICAgICAgICAgb3JkZXJcclxuICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgZnVuY3Rpb24gY2hlY2tDYWxsaW5nQXN0cm9uYXV0KCkge1xyXG4gICAgICAgICAgICBpZiAoIWxpZ2h0ZXJWZXJzaW9uLmN1cnJlbnQpIGNhbGxBc3Ryb25hdXQoZWxlbVBhcmVudElkKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgICAgIGhvbWVHc2FwVHJhbnNpdGlvbihjbGlja1JlZi5jdXJyZW50Lm1lbnVFeHRlbmRlZCksXHJcbiAgICAgICAgICAgIGxvZ29EaXNwbGF5RGlzcGF0Y2goeyBkZW1vQ2xpZW50SGVpZ2h0OiBkZW1vUmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0LCBsb2dvQ2xpZW50V2lkdGg6ICgoKGlubmVyV2lkdGggKiAoMTAwIC0gVFYudW5TeW1ldHJ5RGVtb01lbnUpKSAvIDEwMCkgKiBUVi5sb2dvV2lkdGgpIC8gMTAwIH0pLFxyXG4gICAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW1SZWN0LnNldEF0dHJpYnV0ZU5TKCBudWxsLCBcInN0cm9rZVwiLCBcInVybCgjU3ZnSXZvcnkpXCIpLFxyXG4gICAgICAgICAgICB0cmFuc2Zvcm1BbGxFYWNoTWVudXMoc3ZnRnJhbWVWYWx1ZXMsIGV4dGVuZGluZ1NpemUsIGVsZW1QYXJlbnRJZCksXHJcbiAgICAgICAgICAgIGNoZWNrQ2FsbGluZ0FzdHJvbmF1dCgpLFxyXG4gICAgICAgICAgXSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNyZWF0ZVdhdnlBbmltYXRpb24oZXh0ZW5kaW5nU2l6ZVtcInN2Z0ZyYW1lUGFja2FnZVwiXSk7XHJcbiAgICAgICAgICAgICAgdGV4dFJlZi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgY29udGVudFJlZi5zdHlsZS5kaXNwbGF5ID0gXCJpbml0aWFsXCI7XHJcbiAgICAgICAgICAgICAgY29udGVudFJlZi5zdHlsZS56SW5kZXggPSAzO1xyXG4gICAgICAgICAgICAgIHNldENsaWNrQWZ0ZXJDb250ZXh0KGVsZW1QYXJlbnRJZCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICBjbGlja1JlZi5jdXJyZW50Lm9uQW5pbSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbVBhcmVudElkICE9PSBlbGVtUGFyZW50SWQpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZWxzZSBpZlwiKTtcclxuICAgICAgICAgIGNvbnN0IGJpZ2dlcmVkV2F2eVBhdGggPSBjbGlja1JlZi5jdXJyZW50LndhdnlQYXRoO1xyXG4gICAgICAgICAgY29uc3QgYmlnZ2VyZWRUZXh0ID0gY2xpY2tSZWYuY3VycmVudC50ZXh0UmVmO1xyXG4gICAgICAgICAgY29uc3QgYmlnZ2VyZWRDb250ZW50UmVmID0gY2xpY2tSZWYuY3VycmVudC5jb250ZW50UmVmO1xyXG4gICAgICAgICAgY29uc3QgYmlnZ2VyZWROZW9uUmVmcyA9IGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyTmVvblJlZnM7XHJcblxyXG4gICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5vbkFuaW0gPSB0cnVlO1xyXG4gICAgICAgICAgc2V0Q2xpY2tDb250ZXh0KHsgb246IHRydWUsIGJpZ2dlcjogZWxlbVBhcmVudElkLCBiaWdnZXJlZDogY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtUGFyZW50SWR9KTtcclxuICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyZWRFbGVtID0gY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtO1xyXG4gICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJlZEVsZW1QYXJlbnRJZCA9IGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbVBhcmVudElkO1xyXG4gICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJlZEVsZW1SZWN0ID0gY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtUmVjdDtcclxuICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbSA9IGVsZW07XHJcbiAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW1QYXJlbnRJZCA9IGVsZW1QYXJlbnRJZDtcclxuICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbSA9IGVsZW07XHJcbiAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW1SZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIGVsZW1QYXJlbnRJZCArIFwiU3ZnRnJhbWVcIiApO1xyXG4gICAgICAgICAgY2xpY2tSZWYuY3VycmVudC53YXZ5UGF0aCA9IFsgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbVBhcmVudElkICsgXCJTdmdXYXZ5MVwiKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbVBhcmVudElkICsgXCJTdmdXYXZ5MlwiKV07XHJcbiAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LnRleHRSZWYgPSB0ZXh0UmVmO1xyXG4gICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5jb250ZW50UmVmID0gY29udGVudFJlZjtcclxuICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyTmVvblJlZnMgPSBuZW9uUmVmcztcclxuXHJcbiAgICAgICAgICBkZW1vVmlkZW9IZWlnaHQgPSBnZXREZW1vVmlkZW9IZWlnaHQoY2xpY2tSZWYuY3VycmVudC5tZW51RXh0ZW5kZWQpO1xyXG4gICAgICAgICAgbGV0IGV4dGVuZGluZ1NpemUgPSBnZXRWYWx1ZXNUb1VuU3ltZXRyeUVhY2hNZW51KCBkZW1vVmlkZW9IZWlnaHQsIGVsZW0sIG9yZGVyICk7XHJcblxyXG4gICAgICAgICAgaWYgKGlubmVyV2lkdGggPiA4MDApIHdhdnlBbmltLmN1cnJlbnQuVEwucGF1c2UoMCk7XHJcblxyXG4gICAgICAgICAgZnVuY3Rpb24gY2hlY2tDYWxsaW5nQXN0cm9uYXV0KCkge1xyXG4gICAgICAgICAgICBpZiAoIWxpZ2h0ZXJWZXJzaW9uLmN1cnJlbnQpIGNhbGxBc3Ryb25hdXQoIGVsZW1QYXJlbnRJZCwgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJlZEVsZW1QYXJlbnRJZCApO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIFByb21pc2UuYWxsKFtcclxuICAgICAgICAgICAgYmlnZ2VyZWRXYXZ5UGF0aFswXS5zZXRBdHRyaWJ1dGUoXCJkXCIsIFwiXCIpLFxyXG4gICAgICAgICAgICBiaWdnZXJlZFdhdnlQYXRoWzFdLnNldEF0dHJpYnV0ZShcImRcIiwgXCJcIiksXHJcbiAgICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyZWRFbGVtUmVjdC5zZXRBdHRyaWJ1dGVOUyggbnVsbCwgXCJzdHJva2VcIiwgYHVybCgjJHtjbGlja1JlZi5jdXJyZW50LmJpZ2dlcmVkRWxlbVBhcmVudElkfVN2Z0ZyYW1lU3RvcENvbG9yKWAgKSxcclxuICAgICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtUmVjdC5zZXRBdHRyaWJ1dGVOUyggbnVsbCwgXCJzdHJva2VcIiwgXCJ1cmwoI1N2Z0l2b3J5KVwiKSxcclxuICAgICAgICAgICAgdHJhbnNmb3JtQWxsRWFjaE1lbnVzKHN2Z0ZyYW1lVmFsdWVzLCBleHRlbmRpbmdTaXplLCBlbGVtUGFyZW50SWQpLFxyXG4gICAgICAgICAgICBiaWdnZXJlZFRleHQuc3R5bGUuZGlzcGxheSA9IFwiaW5pdGlhbFwiLFxyXG4gICAgICAgICAgICBiaWdnZXJlZENvbnRlbnRSZWYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiLFxyXG4gICAgICAgICAgICBiaWdnZXJlZENvbnRlbnRSZWYuc3R5bGUuekluZGV4ID0gLTEsXHJcbiAgICAgICAgICAgIGJpZ2dlcmVkTmVvblJlZnNbMF0uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCIsXHJcbiAgICAgICAgICAgIGJpZ2dlcmVkTmVvblJlZnNbMV0uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCIsXHJcbiAgICAgICAgICAgIGNoZWNrQ2FsbGluZ0FzdHJvbmF1dCgpLFxyXG4gICAgICAgICAgXSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNyZWF0ZVdhdnlBbmltYXRpb24oZXh0ZW5kaW5nU2l6ZVtcInN2Z0ZyYW1lUGFja2FnZVwiXSk7XHJcbiAgICAgICAgICAgICAgdGV4dFJlZi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgY29udGVudFJlZi5zdHlsZS5kaXNwbGF5ID0gXCJpbml0aWFsXCI7XHJcbiAgICAgICAgICAgICAgY29udGVudFJlZi5zdHlsZS56SW5kZXggPSAzO1xyXG4gICAgICAgICAgICAgIGJpZ2dlcmVkTmVvblJlZnNbMF0uc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG4gICAgICAgICAgICAgIGJpZ2dlcmVkTmVvblJlZnNbMV0uc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG4gICAgICAgICAgICAgIHNldENsaWNrQWZ0ZXJDb250ZXh0KGVsZW1QYXJlbnRJZCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICBjbGlja1JlZi5jdXJyZW50Lm9uQW5pbSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJlbHNlXCIpO1xyXG4gICAgICAgICAgY29uc3QgYmlnZ2VyZWRXYXZ5UGF0aCA9IGNsaWNrUmVmLmN1cnJlbnQud2F2eVBhdGg7XHJcbiAgICAgICAgICBjb25zdCBiaWdnZXJlZFRleHQgPSBjbGlja1JlZi5jdXJyZW50LnRleHRSZWY7XHJcbiAgICAgICAgICBjb25zdCBiaWdnZXJlZENvbnRlbnRSZWYgPSBjbGlja1JlZi5jdXJyZW50LmNvbnRlbnRSZWY7XHJcbiAgICAgICAgICBjb25zdCBiaWdnZXJlZE5lb25SZWZzID0gY2xpY2tSZWYuY3VycmVudC5iaWdnZXJOZW9uUmVmcztcclxuXHJcbiAgICAgICAgICBjbGlja1JlZi5jdXJyZW50Lm9uQW5pbSA9IHRydWU7XHJcbiAgICAgICAgICBzZXRDbGlja0NvbnRleHQoeyBvbjogZmFsc2UsIGJpZ2dlcjogbnVsbCwgYmlnZ2VyZWQ6IG51bGwgfSk7XHJcbiAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlcmVkRWxlbSA9IGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyRWxlbTtcclxuICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQuYmlnZ2VyZWRFbGVtUGFyZW50SWQgPSAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtUGFyZW50SWQ7XHJcbiAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlcmVkRWxlbVJlY3QgPSBjbGlja1JlZi5jdXJyZW50LmJpZ2dlckVsZW1SZWN0O1xyXG4gICAgICAgICAgY2xpY2tSZWYuY3VycmVudC5iaWdnZXJFbGVtID0gbnVsbDtcclxuICAgICAgICAgIGNsaWNrUmVmLmN1cnJlbnQubWVudUV4dGVuZGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgbGV0IGV4dGVuZGluZ1NpemUgPSB7IExJOiBbIHsgZWxlbUlkOiBcIndvcmtcIiwgd2lkdGg6IFwiNTAlXCIsIGhlaWdodDogXCI1MCVcIiB9LCB7IGVsZW1JZDogXCJza2lsbFwiLCB3aWR0aDogXCI1MCVcIiwgaGVpZ2h0OiBcIjUwJVwiIH0sIHsgZWxlbUlkOiBcInBhaW50XCIsIHdpZHRoOiBcIjUwJVwiLCBoZWlnaHQ6IFwiNTAlXCIgfSwgeyBlbGVtSWQ6IFwiaW5mb1wiLCB3aWR0aDogXCI1MCVcIiwgaGVpZ2h0OiBcIjUwJVwiIH0gXSB9O1xyXG5cclxuICAgICAgICAgIGlmIChpbm5lcldpZHRoID4gODAwKSB3YXZ5QW5pbS5jdXJyZW50LlRMLnBhdXNlKDApO1xyXG4gICAgICAgICAgZnVuY3Rpb24gY2hlY2tDYWxsaW5nQXN0cm9uYXV0KCkge1xyXG4gICAgICAgICAgICBpZiAoIWxpZ2h0ZXJWZXJzaW9uLmN1cnJlbnQpIHBhdXNlQXN0cm9uYXV0KCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgICAgICBob21lR3NhcFRyYW5zaXRpb24oY2xpY2tSZWYuY3VycmVudC5tZW51RXh0ZW5kZWQpLFxyXG4gICAgICAgICAgICBsb2dvRGlzcGxheURpc3BhdGNoKHsgZGVtb0NsaWVudEhlaWdodDogZGVtb1JlZi5jdXJyZW50LmNsaWVudEhlaWdodCwgbG9nb0NsaWVudFdpZHRoOiAoKChpbm5lcldpZHRoICogKDEwMCAtIFRWLnN5bWV0cnlEZW1vTWVudSkpIC8gMTAwKSAqIFRWLmxvZ29XaWR0aCkgLyAxMDAgfSksXHJcbiAgICAgICAgICAgIGJpZ2dlcmVkV2F2eVBhdGhbMF0uc2V0QXR0cmlidXRlKFwiZFwiLCBcIlwiKSxcclxuICAgICAgICAgICAgYmlnZ2VyZWRXYXZ5UGF0aFsxXS5zZXRBdHRyaWJ1dGUoXCJkXCIsIFwiXCIpLFxyXG4gICAgICAgICAgICBjbGlja1JlZi5jdXJyZW50LmJpZ2dlcmVkRWxlbVJlY3Quc2V0QXR0cmlidXRlTlMoIG51bGwsIFwic3Ryb2tlXCIsIGB1cmwoIyR7Y2xpY2tSZWYuY3VycmVudC5iaWdnZXJlZEVsZW1QYXJlbnRJZH1TdmdGcmFtZVN0b3BDb2xvcilgKSxcclxuICAgICAgICAgICAgdHJhbnNmb3JtQWxsRWFjaE1lbnVzKHN2Z0ZyYW1lVmFsdWVzLCBleHRlbmRpbmdTaXplLCBlbGVtUGFyZW50SWQpLFxyXG4gICAgICAgICAgICBiaWdnZXJlZFRleHQuc3R5bGUuZGlzcGxheSA9IFwiaW5pdGlhbFwiLFxyXG4gICAgICAgICAgICBiaWdnZXJlZENvbnRlbnRSZWYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiLFxyXG4gICAgICAgICAgICBiaWdnZXJlZENvbnRlbnRSZWYuc3R5bGUuekluZGV4ID0gLTEsXHJcbiAgICAgICAgICAgIGJpZ2dlcmVkTmVvblJlZnNbMF0uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCIsXHJcbiAgICAgICAgICAgIGJpZ2dlcmVkTmVvblJlZnNbMV0uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCIsXHJcbiAgICAgICAgICAgIGNoZWNrQ2FsbGluZ0FzdHJvbmF1dCgpLFxyXG4gICAgICAgICAgICBzZXRDbGlja0FmdGVyQ29udGV4dChudWxsKSxcclxuICAgICAgICAgIF0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBuZW9uUmVmc1swXS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbiAgICAgICAgICAgIG5lb25SZWZzWzFdLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuICAgICAgICAgICAgY2xpY2tSZWYuY3VycmVudCA9IHsgb25BbmltOiBmYWxzZSwgYWN0aXZlOiB0cnVlLCBtZW51RXh0ZW5kZWQ6IGZhbHNlLCBiaWdnZXJFbGVtUGFyZW50SWQ6IG51bGwsIGJpZ2dlckVsZW06IG51bGwsIGJpZ2dlckVsZW1SZWN0OiBudWxsLCBiaWdnZXJOZW9uUmVmczogW10sIGJpZ2dlcmVkRWxlbTogbnVsbCwgYmlnZ2VyZWRFbGVtUGFyZW50SWQ6IG51bGwsIGJpZ2dlcmVkRWxlbVJlY3Q6IG51bGwsIHdhdnlQYXRoOiBbXSB9O1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgW3N2Z0ZyYW1lVmFsdWVzXVxyXG4gICk7XHJcblxyXG4gIC8vPT09PT09PT09PT09PT09PT1sb2FkZXI9PT09PT09PT09PT09PT09PT09PT0vL1xyXG5cclxuICBjb25zdCBvcGVuTGlnaHRlclZlcnNpb24gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBsaWdodGVyVmVyc2lvbi5jdXJyZW50ID0gdHJ1ZTtcclxuICAgIHJlbW92ZVNjZW5lKCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpZ2h0ZXJWZXJzaW9uXCIpLmlubmVySFRNTCA9XHJcbiAgICAgIFwiVGhpcyBpcyBsaWdodGVyIHZlcnNpb25cIjtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwid29ya2luZz9cIik7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9hZGVyQW5pbVwiKS5jbGFzc0xpc3QuYWRkKFwibG9hZGVyRmFkZU91dFRyYW5zXCIpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvYWRlckNvbnRhaW5lclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgIH0sIDEyMDApO1xyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICAvLz09PT09PT09PT09PT09PT09bG9hZGVyPT09PT09PT09PT09PT09PT09PT09Ly9cclxuXHJcbiAgcmV0dXJuIHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBpZD1cIm1hc3RlclwiIHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwifX0+XHJcbiAgICAgICAgPGRpdiBpZD1cImxvYWRlckNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBpZD1cImxvYWRlckFuaW1cIj5Mb2FkJm5ic3A7Jm5ic3A7bmc8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgaWQ9XCJsaWdodGVyVmVyc2lvblwiIG9uQ2xpY2s9e29wZW5MaWdodGVyVmVyc2lvbn0+XHJcbiAgICAgICAgICAgIENsaWNrIHRvIHRoZSBsaWdodGVyIHZlcnNpb24gPGJyIC8+IHdoaWNoIGRvZXNuJ3QgY29udGFpbiBUSFJFRSBKU1xyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEV4dGVuZE1lbnVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtleHRlbmRNZW51fT5cclxuICAgICAgICAgIDxMb2dvRGlzcGxheUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgbG9nb0Rpc3BsYXksIGxvZ29EaXNwbGF5RGlzcGF0Y2ggfX0gPlxyXG4gICAgICAgICAgICA8TWVudVNpemVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHdvcmtfc3R5bGVMSSwgc2tpbGxfc3R5bGVMSSwgcGFpbnRfc3R5bGVMSSwgaW5mb19zdHlsZUxJLCB3b3JrX3N0eWxlU3ZnRnJhbWVQYWNrLCBza2lsbF9zdHlsZVN2Z0ZyYW1lUGFjaywgcGFpbnRfc3R5bGVTdmdGcmFtZVBhY2ssIGluZm9fc3R5bGVTdmdGcmFtZVBhY2t9fT5cclxuICAgICAgICAgICAgICA8Q2xpY2tDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjbGlja0NvbnRleHR9PlxyXG4gICAgICAgICAgICAgICAgPENsaWNrQWZ0ZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjbGlja0FmdGVyQ29udGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgIDxIb21lTGF5b3V0UmVuZGVyIHZhbHM9e3sgcmVmczogeyBkZW1vUmVmLCBsb2dvUmVmIH0sIG1lbnVWYWx1ZXM6IG1lbnVWYWx1ZXMuY3VycmVudCwgc3ZnRnJhbWVWYWx1ZXNJbW11dGFibGU6IHN2Z0ZyYW1lVmFsdWVzSW1tdXRhYmxlLmN1cnJlbnQsIGNsaWNrQ29udGV4dDogY2xpY2tDb250ZXh0fX0vPlxyXG4gICAgICAgICAgICAgICAgPC9DbGlja0FmdGVyQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgICAgICAgICA8L0NsaWNrQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgICAgICAgPC9NZW51U2l6ZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgICA8L0xvZ29EaXNwbGF5Q29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgICA8L0V4dGVuZE1lbnVDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfSwgWyBsb2dvRGlzcGxheSwgd29ya19zdHlsZUxJLCB3b3JrX3N0eWxlU3ZnRnJhbWVQYWNrLCBza2lsbF9zdHlsZVN2Z0ZyYW1lUGFjaywgcGFpbnRfc3R5bGVTdmdGcmFtZVBhY2ssIGluZm9fc3R5bGVTdmdGcmFtZVBhY2ssIGNsaWNrQ29udGV4dCwgY2xpY2tBZnRlckNvbnRleHRdKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIEhvbWVMYXlvdXRSZW5kZXIocHJvcHMpIHtcclxuICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tSG9tZUxheW91dFJlbmRlci0tLS0tLS0tLS0tLS0tLS0tXCIpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8RGVtbyByZWZzPXtwcm9wcy52YWxzLnJlZnN9IC8+XHJcbiAgICAgIDxNZW51IHZhbHM9e3sgbWVudVZhbHVlczogcHJvcHMudmFscy5tZW51VmFsdWVzLCBzdmdGcmFtZVZhbHVlc0ltbXV0YWJsZTogcHJvcHMudmFscy5zdmdGcmFtZVZhbHVlc0ltbXV0YWJsZX19IC8+XHJcblxyXG4gICAgICA8ZGl2IGlkPVwidGhyZWVKU0NvdmVyXCI+PC9kaXY+XHJcbiAgICAgIDxkaXYgaWQ9XCJ0aHJlZUpTQ2FudmFzXCI+PC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVMYXlvdXQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=