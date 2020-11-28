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

let menuExpanded = false;
let biggerElem = null;
let biggeredElem = null;



 

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
  this.bordersSize = getComputedStyle(document.documentElement).getPropertyValue('--bordersSize');
  this.bordersSmallSize = getComputedStyle(document.documentElement).getPropertyValue('--bordersSmallSize');
  this.borderSize800 = getComputedStyle(document.documentElement).getPropertyValue('--borderSize800');
  this.borderSize1400 = getComputedStyle(document.documentElement).getPropertyValue('--borderSize1400');
  this.gsapEase = "power1.inOut";
};

let transitionValue = new getTransitionValue();


let resizeFinish;





let demoVideoHeight = parseFloat(window.getComputedStyle(DEMO_VIDEO).width) * (9/16);
DEMO_VIDEO.style.height = demoVideoHeight +'px';

if(innerWidth <= 800){
  // DEMO__.style.height = demoVideoHeight +'px';
}else{
  
  // threeJsBlocker();

}



const LOGOcallClickEvent = function(){
  if(biggerElem != null){
    allElems.forEach((elem)=>{
      elem.removeEventListener('click',eval(elem.id+'MenuController')['callClickEvent'])
    })
    LOGO__.removeEventListener('click',LOGOcallClickEvent);
    
    eval(biggerElem.id + 'MenuController').expandMenu();
  }
}

LOGO__.addEventListener('click',LOGOcallClickEvent,false);






function menuController(id){
  this.elem = document.getElementById(id);
  // this.allElems = this.getAllElems(this)
  // this.restElems = getRestElems(this.elem);

  this.callClickEvent = () =>{
    console.log('MENU')
        this.elemEventListener(allElems,'remove','callClickEvent');
        LOGO__.removeEventListener('click',LOGOcallClickEvent);

        this.expandMenu();
    
  }

  this.elem.addEventListener('click',this.callClickEvent,false);
}

menuController.prototype.addEventCB = function(){
  console.log('add')
  this.elemEventListener(allElems,'add','callClickEvent');
  LOGO__.addEventListener('click',LOGOcallClickEvent);
}
menuController.prototype.callAfterAnim = function(elem){
  console.log('call');
  callSkillsContents(elem);
  callInfoContents(elem)
}

menuController.prototype.expandMenu = function(){
  
  let bordersExpandMenu = eval('run' + this.elem.id.charAt(0).toUpperCase() + this.elem.id.slice(1) + 'Border');
  let utilitiExpandMenu = eval(this.elem.id + 'MenuUtilities');
 

console.log(this.elem.id, 'EXPAND MENUS IS WORKING')

  if (menuExpanded == false ){
    menuExpanded = true;
    biggerElem = this.elem;
    
    //----calculate demo height in order to give the same result to all functions------------------------
    if(innerWidth > 800){
      demoVideoHeight = ((innerWidth * (100-transitionValue['unSymetryDemoMenu']) / 100) * transitionValue['unSymetryDemoVideoWidth']/100)  * (9/16);
    }else{
      if(innerWidth > remToPx(transitionValue['masterMinWidth'])){
        demoVideoHeight = (innerWidth * transitionValue['unSymetryDemoVideoWidthMediaQuery'] /100)  * (9/16);

      }else{
        demoVideoHeight = (remToPx(transitionValue['masterMinWidth']) * transitionValue['unSymetryDemoVideoWidthMediaQuery'] /100)  * (9/16);

      }
    }
    
    
    Promise.all([bordersExpandMenu.expandMenuIf(), utilitiExpandMenu.expandMenuIf(),callThumbnailIf(this.elem),callThreeJS(this.elem)])
    // Promise.all([bordersExpandMenu.expandMenuIf(), utilitiExpandMenu.expandMenuIf(),callThumbnailIf(this.elem)])
    .then(text=>eval(this.elem.id + 'MenuUtilities').deleteMenuText())



  }else if(biggerElem != this.elem){
    biggeredElem = biggerElem;
    biggerElem = this.elem;
    console.log('if else is working')


    //----calculate demo height in order to give the same result to all functions------------------------
    // demoVideoHeight =  DEMO_VIDEO.parentElement.clientWidth * (transitionValue['unSymetryDemoVideoWidthMediaQuery'] / 100) * (9/16);
    if(innerWidth > 800){
      demoVideoHeight = ((innerWidth * (100-transitionValue['unSymetryDemoMenu']) / 100) * transitionValue['unSymetryDemoVideoWidth']/100)  * (9/16);
    }else{
      demoVideoHeight = (innerWidth * transitionValue['unSymetryDemoVideoWidthMediaQuery'] /100)  * (9/16);
    }

    

    Promise.all([bordersExpandMenu.expandMenuElseIf(), utilitiExpandMenu.expandMenuElseIf(),stopSkillsContents(),stopInfoContents(), callThumbnailElseIf(this.elem),callThreeJS(this.elem)])
    // Promise.all([bordersExpandMenu.expandMenuElseIf(), utilitiExpandMenu.expandMenuElseIf(),stopSkillsContents(),stopInfoContents(), callThumbnailElseIf(this.elem)])
    .then(text=>eval(this.elem.id + 'MenuUtilities').deleteMenuText())



  }else{
    menuExpanded =false;
    biggerElem = null;
    biggeredElem = null;

  
    console.log('else is working')

    Promise.all([bordersExpandMenu.expandMenuElse(), utilitiExpandMenu.expandMenuElse(),stopSkillsContents(),stopInfoContents(), callThumbnailElse(this.elem),deleteThreeJs(this.elem)])
    // Promise.all([bordersExpandMenu.expandMenuElse(), utilitiExpandMenu.expandMenuElse(),stopSkillsContents(),stopInfoContents(), callThumbnailElse(this.elem)])
    .then(text=>eval(this.elem.id + 'MenuUtilities').deleteMenuText())


  }


  
}

menuController.prototype.elemEventListener = function(elems,listener, handler) {
  let arrayElems = [];
  if(Array.isArray(elems)){
    arrayElems = elems;
  }else{
    arrayElems.push(elems);
  }
  
  arrayElems.forEach((elem)=>{
    let controllerId = eval(elem.id+'MenuController')

    if (listener == 'add') {
      elem.addEventListener('click', controllerId[handler]);
    } else {
      elem.removeEventListener('click', controllerId[handler]);
    }
  })
}




















//--- menu Utiliti controller------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------





















function menuUtilities(id){
  
  this.elem = document.getElementById(id);
  // this.padding;



  this.updateSizeHandler = this.updateSize.bind(this);

  window.addEventListener('resize', this.updateSizeHandler);

}

menuUtilities.prototype.expandMenuIf = function(){
  return new Promise((resolve, reject)=>{
   
    
 
    if(innerWidth > 800){
      DEMO_SVG.classList.remove('blurSVG');

      // demoVideoHeight = ((innerWidth * (100-transitionValue['unSymetryDemoMenu']) / 100) * transitionValue['unSymetryDemoVideoWidth']/100)  * (9/16);
      
      gsap.to(
        DEMO_VIDEO,{
          width: transitionValue['unSymetryDemoVideoWidth'] + '%',
          height: demoVideoHeight +'px',
          duration: transitionValue['duration'],
          ease: transitionValue['gsapEase']
        }
      )

    }else{
      // demoHeight = (innerWidth * transitionValue['unSymetryDemoVideoWidthMediaQuery'] /100)  * (9/16);
      
      gsap.to(
        DEMO_VIDEO,{
          width: transitionValue['unSymetryDemoVideoWidthMediaQuery'] + '%',
          height: demoVideoHeight +'px',
          duration: transitionValue['duration'],
          ease: transitionValue['gsapEase']
        }
      )
    }


    setTimeout(() => {
      document.querySelector(`#${this.elem.id} .text`).style.visibility = 'hidden'
      document.querySelector(`#${this.elem.id} .contents`).style.zIndex = '3';

      if(innerWidth > 800){
        DEMO_SVG.classList.add('blurSVG');

      }else{
      }

    }, transitionValue['duration'] * 1000);

    resolve();  
  })
}


menuUtilities.prototype.expandMenuElseIf = function(){
  return new Promise((resolve, reject)=>{

    // document.querySelector(`#${this.elem.id} .borderCover`).style.display = 'none';

    document.querySelector(`#${biggeredElem.id} .text`).style.visibility = 'visible'
    document.querySelector(`#${biggeredElem.id} .contents`).style.zIndex = '0';
    
    // document.querySelector(`#${this.elem.id} .neon1`).style.display = 'none';
    // document.querySelector(`#${this.elem.id} .neon2`).style.display = 'none';
    document.querySelector(`#${biggeredElem.id} .neon1`).style.display = 'none';
    document.querySelector(`#${biggeredElem.id} .neon2`).style.display = 'none';

    document.querySelector(`#${biggeredElem.id} .neon1`).classList.remove(`${biggeredElem.id}Neon1`);
    document.querySelector(`#${biggeredElem.id} .neon2`).classList.remove(`${biggeredElem.id}Neon2`);
    



    setTimeout(() => {

      document.querySelector(`#${this.elem.id} .text`).style.visibility = 'hidden';
      document.querySelector(`#${this.elem.id} .contents`).style.zIndex = '3';

      // document.querySelector(`#${biggeredElem.id} .borderCover`).style.opacity = '0';
      // document.querySelector(`#${biggeredElem.id} .borderCover`).style.display = 'initial';
      document.querySelector(`#${biggeredElem.id} .neon1`).style.display = 'initial';
      document.querySelector(`#${biggeredElem.id} .neon2`).style.display = 'initial';
    }, transitionValue.duration * 1000);

    resolve()  
  })
}

menuUtilities.prototype.expandMenuElse = function(){
  return new Promise((resolve, reject)=>{

    
    document.querySelector(`#${this.elem.id} .contents`).style.zIndex = '0';
    document.querySelector(`#${this.elem.id} .neon1`).style.display = 'none';
    document.querySelector(`#${this.elem.id} .neon2`).style.display = 'none';
    document.querySelector(`#${this.elem.id} .neon1`).classList.remove(`${this.elem.id}Neon1`);
    document.querySelector(`#${this.elem.id} .neon2`).classList.remove(`${this.elem.id}Neon2`);

    
    // threeJsBlocker();
  

    if(innerWidth > 800){
      // DEMO_SVG.style.display= 'initial';
      
      let demoHeight;

      if(innerWidth > 1400){
        // DEMO_VIDEO.style.height = ((transitionValue['maxWidth'] * transitionValue['symetryDemoMenu'] / 100) * transitionValue['symetryDemoVideoWidth']/100) * (9/16) +'px';
        height = ((transitionValue['masterMaxWidth'] * transitionValue['symetryDemoMenu'] / 100) * transitionValue['symetryDemoVideoWidth']/100) * (9/16);

      }else{ 
        height = ((DEMO__.parentElement.clientWidth * transitionValue['symetryDemoMenu'] / 100) * transitionValue['symetryDemoVideoWidth']/100) * (9/16);

      }

      gsap.to(
        DEMO_VIDEO,{
          width: transitionValue['symetryDemoVideoWidth'] + '%',
          height: height +'px',
          duration: transitionValue['duration'],
          ease: transitionValue['gsapEase']
        }
      )

    }else{
      gsap.to(
        DEMO_VIDEO,{
          width: transitionValue['symetryDemoVideoWidthMediaQuery'] + '%',
          height: (innerWidth * transitionValue['symetryDemoVideoWidthMediaQuery']/100)  * (9/16) +'px',
          duration: transitionValue['duration'],
          ease: transitionValue['gsapEase']
        }
      )

    }



    document.querySelector(`#${this.elem.id} .text`).style.visibility = 'visible'
    
  setTimeout(() => {
    DEMO_VIDEO.classList.remove('menutransition');
    // document.querySelector(`#${this.elem.id} .borderCover`).style.display = 'initial';
    document.querySelector(`#${this.elem.id} .neon1`).style.display = 'initial';
    document.querySelector(`#${this.elem.id} .neon2`).style.display = 'initial';


    if(innerWidth > 800){
      MASTER.classList.remove('menutransition');

      // DEMO__.classList.remove('menutransition');
      // TITLE_NAME_CONTAINER.classList.remove('menutransition');
      // TITLE_NAME.classList.remove('menutransition');
      

      
    }else{
      DEMO__.classList.remove('menutransition');
      MENU__.classList.remove('menutransition');


    }
  }, transitionValue.duration * 1000);
  
  resolve()  
})
}

menuUtilities.prototype.deleteMenuText = function(){
  // document.querySelector(`#${this.elem.id} .text`).style.visibility = 'hidden'
  
}

menuUtilities.prototype.updateSize = function(){
  demoVideoHeight = parseFloat(window.getComputedStyle(DEMO_VIDEO).width) * (9/16);

  DEMO_VIDEO.style.height = demoVideoHeight +'px';

    if(innerWidth > 800){
      
      MENU__.style.height = '100%'
      DEMO__.style.height = '100%';
      
      

      if (menuExpanded ) {
        MASTER.style.maxWidth = '100%';
        // TITLE_NAME_CONTAINER.style.width = ( 100 - transitionValue['unSymetryDemoMenu']) + '%';
        // TITLE_NAME.style.width = transitionValue['unSymetryDemoVideoWidth'] + '%';

        DEMO__.style.width = 100 - transitionValue['unSymetryDemoMenu'] + '%';
        DEMO_VIDEO.style.width = transitionValue['unSymetryDemoVideoWidth'] + '%';
        // NAME.style.width = 100 - transitionValue['unSymetryDemoMenu'] + '%';


      }else{
        // TITLE_NAME_CONTAINER.style.width = transitionValue['symetryDemoMenu'] + '%';
        DEMO_VIDEO.style.width = '';
        // threeJsBlocker();
      }

    }else{
      // TITLE_NAME_CONTAINER.style.width = '100%';
      // TITLE_NAME.style.width =transitionValue['nameMaxMediaQuery']+'%';

      // DEMO__.style.height = demoVideoHeight +'px';
    
      DEMO__.style.width = '';

      
      if (menuExpanded ) {

        // TITLE_NAME.style.width = transitionValue['nameMaxMediaQuery'] + '%';
        DEMO_VIDEO.style.width = transitionValue['unSymetryDemoVideoWidthMediaQuery'] +'%';
      }
    }
  // }
  // clearTimeout(resizeFinish);
  // resizeFinish = setTimeout(() => {
  //   DEMO_SVG.classList.add('blurSVG')
  // }, 200);

  // getMediaQeury800()

}





//---- general Function ------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------


// function getAllElems(elem) {
//   let allElems = [];
  
//   for (let i = 0; i < elem.parentElement.childNodes.length; i++) {
//     if (elem.parentElement.childNodes[i].nodeType == 1) {
//       allElems.push(elem.parentElement.childNodes[i]);
//     }
//   }
  
//   return allElems;
// }

function getRestElems(elem) {
  let restElems = [];
  
  for (let i = 0; i < elem.parentElement.childNodes.length; i++) {
    if (elem.parentElement.childNodes[i].nodeType == 1 && elem.parentElement.childNodes[i] != elem) {
      restElems.push(elem.parentElement.childNodes[i]);
    }
  }
  
  return restElems;
}


function threeJsBlocker(){
  if(innerHeight < body.scrollHeight){
    THREEJS_BlOCKER.style.height = body.scrollHeight +'px';
  }else{
    THREEJS_BlOCKER.style.height = '';
  }
}

// function nameSplit(){
//   nameP.forEach((pIndex)=>{
//     pIndex.innerHTML='<span>' +
//     pIndex.innerHTML.split('').join('</span><span>') +'</span>';
//   })
// }





// DEMO_VIDEO.addEventListener('click',()=>{console.log('this is working');DEMO_VIDEO.style.height = parseFloat(window.getComputedStyle(DEMO_VIDEO).width) * (9/16) +'px';})

let workMenuController = new menuController('work');
let skillMenuController = new menuController('skill');
let paintMenuController = new menuController('paint');
let infoMenuController = new menuController('info');



let workMenuUtilities = new menuUtilities('work');
let skillMenuUtilities = new menuUtilities('skill');
let paintMenuUtilities = new menuUtilities('paint');
let infoMenuUtilities = new menuUtilities('info');

