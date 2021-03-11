import variable from '../../../styles/variableCss.module.scss';

// console.log('variable', variable)

// const MASTER = document.getElementById('master');
// const LOGO__ = document.getElementById('logo');
// const LOGO_HEIGHER = document.getElementById('logoHeigher');
// const LOGO_WIDER = document.getElementById('logoWider');
// const DEMO__ = document.getElementById('demo');
// const DEMO_VIDEO = document.getElementById('demoVideo');
// const DEMO_SVG = document.getElementById('demoSVG');
// const MENU__ = document.getElementById('menu');
// const WORK = document.getElementById('work');
// const SKILL = document.getElementById('skill');
// const PAINT = document.getElementById('paint');
// const INFO = document.getElementById('info');
// const DEMO_VIDEO_BG_CSS_ANIM = document.querySelector('#demoVideoBgCSSAnim');
// const TITLE_NAME = document.querySelector('#name');
// const THREEJS_BlOCKER = document.getElementById('threejsBlocker');
// const SKILL_CONTENTS = document.querySelector(`#skill .contents`);
// const INFO_CONTENTS = document.querySelector(`#info .contents`);

// const allElems = [WORK,PAINT,SKILL,INFO];

// export {
//   MASTER,
//   LOGO__,
//   LOGO_HEIGHER,
//   LOGO_WIDER,
//   DEMO__,
//   DEMO_VIDEO,
//   DEMO_SVG,
//   MENU__,
//   WORK,
//   SKILL,
//   PAINT,
//   INFO,
//   DEMO_VIDEO_BG_CSS_ANIM,
//   TITLE_NAME,
//   THREEJS_BlOCKER,
//   SKILL_CONTENTS,
//   INFO_CONTENTS,
//   allElems
// }





// let select = s => document.querySelector(s);
// let selectAll = s => document.querySelectorAll(s);
// let rootFontSize = 16;
// let pxToRem = (px)=> px/rootFontSize; 
// let remToPx = (rem)=> rem * rootFontSize; 


// export{
//   select,
//   selectAll,
//   rootFontSize,
//   pxToRem,
//   remToPx
// }


 


// export function getRestElems(elem) {
//   let restElems = [];
  
//   for (let i = 0; i < elem.parentElement.childNodes.length; i++) {
//     if (elem.parentElement.childNodes[i].nodeType == 1 && elem.parentElement.childNodes[i] != elem) {
//       restElems.push(elem.parentElement.childNodes[i]);
//     }
//   }
  
//   return restElems;
// }


const transitionValue ={
  symetryDemoMenu : 50,
  unSymetryDemoMenu : 75,
  duration : 1,
  symetryEachMenu : 50,
  unSymetryEachMenu : 75,
  masterMinWidth : parseInt(variable.masterMinWidth),
  masterMaxWidth : parseInt(variable.masterMaxWidth),
  masterMinHeight : parseInt(variable.masterMinHeight),
  symetryDemoVideoWidth : parseInt(variable.demoVideoWidth),
  unSymetryDemoVideoWidth : 90,
  symetryDemoVideoWidthMediaQuery : parseInt(variable.demoVideoWidthMediaQuery),
  unSymetryDemoVideoWidthMediaQuery : 50,
  // rectMinMediaQuery : 13,
  // rectMinMediaQueryUnit : 'vw',
  // rectSize : getComputedStyle(document.documentElement).getPropertyValue('--rectSize'),
  // rectSmallerSize : getComputedStyle(document.documentElement).getPropertyValue('--rectSmallerSize'),
  // rectSize800 : getComputedStyle(document.documentElement).getPropertyValue('--rectSize800'),
  // rectSize1400 : getComputedStyle(document.documentElement).getPropertyValue('--rectSize1400'),
  // skillTLDuration : 2.5,
  // skillTLEase : "power2.inOut",
  // skillTLDuration800 : 1,
  // skillTLEase800 : "bounce.out"
}

export default transitionValue;