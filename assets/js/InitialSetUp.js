const MASTER = document.getElementById('master');
const LOGO__ = document.getElementById('logo');
const LOGO_HEIGHTER = document.getElementById('logoHeighter');
const LOGO_WIDER = document.getElementById('logoWider');
const DEMO__ = document.getElementById('demo');
const DEMO_VIDEO = document.getElementById('demoVideo');
const DEMO_SVG = document.getElementById('demoSVG');
const MENU__ = document.getElementById('menu');
const WORK = document.getElementById('work');
const SKILL = document.getElementById('skill');
const PAINT = document.getElementById('paint');
const INFO = document.getElementById('info');
const DEMO_VIDEO_BG_CSS_ANIM = document.querySelector('#demoVideoBgCSSAnim');
const TITLE_NAME = document.querySelector('#name');
const THREEJS_BlOCKER = document.getElementById('threejsBlocker');

const allElems = [WORK,PAINT,SKILL,INFO];

export {
  MASTER,
  LOGO__,
  LOGO_HEIGHTER,
  LOGO_WIDER,
  DEMO__,
  DEMO_VIDEO,
  DEMO_SVG,
  MENU__,
  WORK,
  SKILL,
  PAINT,
  INFO,
  DEMO_VIDEO_BG_CSS_ANIM,
  TITLE_NAME,
  THREEJS_BlOCKER,
  allElems
}





let select = s => document.querySelector(s);
let selectAll = s => document.querySelectorAll(s);
let rootFontSize = 16;
let pxToRem = (px)=> px/rootFontSize; 
let remToPx = (rem)=> rem * rootFontSize; 


export{
  select,
  selectAll,
  rootFontSize,
  pxToRem,
  remToPx
}


 

function getTransitionValue() {
  this.symetryDemoMenu = 50;
  this.unSymetryDemoMenu = 75;
  this.duration = 1;
  this.symetryEachMenu = 50;
  this.unSymetryEachMenu = 75;
  this.masterMaxWidth = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--masterMaxWidth'));
  this.masterMinWidth = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--masterMinWidth'));
  this.symetryDemoVideoWidth = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--demoVideoWidth'));
  this.unSymetryDemoVideoWidth = 90;
  this.symetryDemoVideoWidthMediaQuery = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--demoVideoWidthMediaQuery'));
  this.unSymetryDemoVideoWidthMediaQuery = 50;
  this.borderMinMediaQuery = 13;
  this.borderMinMediaQueryUnit = 'vw';
  this.borderSize = getComputedStyle(document.documentElement).getPropertyValue('--borderSize');
  this.borderSmallSize = getComputedStyle(document.documentElement).getPropertyValue('--borderSmallSize');
  this.borderSize800 = getComputedStyle(document.documentElement).getPropertyValue('--borderSize800');
  this.borderSize1400 = getComputedStyle(document.documentElement).getPropertyValue('--borderSize1400');
  this.gsapEase = "power1.inOut";
};

export function getRestElems(elem) {
  let restElems = [];
  
  for (let i = 0; i < elem.parentElement.childNodes.length; i++) {
    if (elem.parentElement.childNodes[i].nodeType == 1 && elem.parentElement.childNodes[i] != elem) {
      restElems.push(elem.parentElement.childNodes[i]);
    }
  }
  
  return restElems;
}


export const transitionValue = new getTransitionValue();

